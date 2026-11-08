#!/usr/bin/env python3
"""Check predict–animate–explain transient growth after a website build.

Uses the authoring environment's Playwright and Chromium. The widget must work
with every external request blocked. Optional online book services are outside
the iframe integration check. Screenshots go to /tmp unless overridden.
"""
import argparse
from fractions import Fraction
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import math
from pathlib import Path
import re
import threading
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parent.parent
WIDGET = 'external/demos/predict-transient-growth.html'
FRAME = '#int-predict-transient-growth'
FIELDS = ('#predict-diagonalizable', '#predict-behavior', '#predict-peak', '#predict-unbounded')
GREEN = 'rgb(237, 240, 230)'


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def exact_orbit(epsilon, last=40):
    """Matrix multiplication only: independent of the widget's closed form."""
    r, s = Fraction(2, 3), Fraction(2, 3) - epsilon
    x, y = Fraction(0), Fraction(1)
    result = []
    for n in range(last + 1):
        result.append({'n': n, 'x': x, 'y': y, 'm': max(abs(x), abs(y))})
        x, y = r * x + 6 * y, s * y
    return result


def exact_formula(epsilon, n):
    r, s = Fraction(2, 3), Fraction(2, 3) - epsilon
    x = (6 * (r ** n - s ** n) / epsilon if epsilon else
         (6 * n * r ** (n - 1) if n else Fraction(0)))
    return x, s ** n


def close(actual, expected):
    assert isinstance(actual, (int, float)) and math.isfinite(actual), actual
    assert math.isclose(actual, float(expected), rel_tol=2e-11, abs_tol=2e-12), (actual, expected)


def check_source():
    tree = ET.parse(ROOT / 'source/eigenvalues/sec-diagonalization.ptx')
    xmlid = '{http://www.w3.org/XML/1998/namespace}id'
    subsection = next(node for node in tree.iter('subsection')
                      if node.get(xmlid) == 'subsec-predict-transient-growth')
    text = ''.join(subsection.itertext())
    assert 'predict' in text.lower() and 'unbounded' in text.lower()
    assert any(node.get(xmlid) == FRAME[1:] for node in subsection.iter('interactive'))
    equations = {node.get(xmlid): re.sub(r'\s+', '', ''.join(node.itertext()))
                 for node in subsection.iter('md')}
    assert equations['eq-predict-growth-matrix'] == (
        'A_\\varepsilon=\\begin{bmatrix}\\tfrac23\\amp6\\\\0\\amp\\tfrac23-\\varepsilon'
        '\\end{bmatrix},\\qquad0\\le\\varepsilon\\le\\tfrac13,')
    assert equations['eq-predict-growth-recurrence'] == (
        '\\vec{x}_{n+1}=A_\\varepsilon\\vec{x}_n,\\qquad'
        '\\vec{x}_0=\\begin{bmatrix}0\\\\1\\end{bmatrix}.')
    assert equations['eq-predict-growth-coordinates'] == '\\vec{x}_n=\\begin{bmatrix}u_n\\\\v_n\\end{bmatrix},'
    assert equations['eq-predict-growth-size'] == 'M_n=\\max\\{|u_n|,|v_n|\\}.'
    assert 'absolute value' in text and 'infinity norm' in text
    return text


def check_math(page):
    grid = sorted({Fraction(k, 60) for k in range(21)} |
                  {Fraction(0), Fraction(1, 6), Fraction(1, 3),
                   Fraction(1, 10**12), Fraction(1, 10**15), Fraction(1, 10**18)})
    actual = page.evaluate('''epsilons => epsilons.map(epsilon => {
        const api = window.PredictTransientGrowth;
        return {orbit: api.orbit(epsilon, 40),
            formula: Array.from({length: 41}, (_, n) => api.point(epsilon, n)),
            peak: api.peak(epsilon), eigen: api.eigenData(epsilon)};
    })''', list(map(float, grid)))
    for epsilon, result in zip(grid, actual):
        expected = exact_orbit(epsilon)
        assert len(result['orbit']) == len(result['formula']) == 41
        for n, reference in enumerate(expected):
            x, y = exact_formula(epsilon, n)
            assert (x, y) == (reference['x'], reference['y']), (epsilon, n)
            for method in ('orbit', 'formula'):
                row = result[method][n]
                for key in ('x', 'y', 'm'):
                    close(row[key], reference[key])
                if 'n' in row:
                    assert row['n'] == n
        peak = max(row['m'] for row in expected)
        iterations = [row['n'] for row in expected if row['m'] == peak]
        assert peak == 8 - 6 * epsilon
        assert iterations == ([2, 3] if epsilon == 0 else [1, 2] if epsilon == Fraction(1, 3) else [2])
        close(result['peak']['value'], peak)
        assert result['peak']['iterations'] == iterations, (epsilon, result['peak'])
        eigen = result['eigen']
        r, s = Fraction(2, 3), Fraction(2, 3) - epsilon
        for actual_value, value in zip(eigen['values'], (r, s)):
            close(actual_value, value)
        assert len(eigen['vectors']) == len(eigen['values']) == 2
        for vector, value in zip(eigen['vectors'], (r, s)):
            assert len(vector) == 2 and any(vector)
            x, y = vector
            close(float(r) * x + 6 * y, float(value) * x)
            close(float(s) * y, float(value) * y)
        (a, b), (c, d) = eigen['vectors']
        assert (a * d - b * c != 0) == (epsilon > 0)
        assert eigen['diagonalizable'] == (epsilon > 0)
    print('PASS: source formulas, stable closed form, recurrence, peaks, endpoint ties and eigenvectors agree with exact Fraction arithmetic', flush=True)


def slider(page, selector, value):
    page.locator(selector).evaluate('''(element, value) => {
        element.value = value;
        element.dispatchEvent(new Event('input', {bubbles: true}));
        element.dispatchEvent(new Event('change', {bubbles: true}));
    }''', str(value))


def state(page):
    return page.locator('html').evaluate('() => window.PredictTransientGrowth.state()')


def fill_predictions(page):
    # Deliberately wrong peak and unbounded-growth predictions must still be
    # recordable: the exploration is gated on a commitment, not correctness.
    for selector in FIELDS:
        control = page.locator(selector)
        if control.evaluate('element => element.tagName === "SELECT"'):
            options = control.locator('option').evaluate_all('''options => options
                .filter(option => option.value && !option.disabled)
                .map(option => ({value: option.value, text: option.textContent}))''')
            assert options, selector
            selected = next((option for option in options if selector == '#predict-unbounded'
                             and re.search(r'^(yes|true)', option['text'].strip(), re.I)), options[-1])
            control.select_option(selected['value'])
        else:
            control.fill('999')
    page.locator('#predict-reasoning').fill('I predict a peak of 999 and unbounded growth.')


def record(page, keyboard=False):
    fill_predictions(page)
    if keyboard:
        page.locator('#record-predictions').focus()
        page.keyboard.press('Enter')
    else:
        page.locator('#record-predictions').click()
    assert state(page)['recorded']
    assert page.locator('#exploration').is_visible()
    assert '999' in page.locator('#prediction-summary').inner_text()


def assert_locked(page):
    assert not state(page)['recorded'] and not state(page)['playing']
    assert page.locator('#exploration').is_hidden()
    assert page.locator('#play-pause').is_disabled()


def check_reset(page):
    page.locator('#reset-widget').click()
    assert_locked(page)
    current = state(page)
    assert current['n'] == 0
    close(current['epsilon'], Fraction(1, 6))
    assert page.locator('#epsilon-slider').input_value() == '60'
    assert page.locator('#iteration-slider').input_value() == '0'
    assert all(not page.locator(selector).input_value() for selector in (*FIELDS, '#predict-reasoning'))
    assert not page.locator('#prediction-summary-content').inner_text().strip()
    assert page.locator('#explanation').is_hidden()


def readout(page, epsilon, n):
    reference = exact_orbit(epsilon, n)[-1]
    node = page.locator('#current-readout')
    assert int(node.get_attribute('data-n')) == n
    for key in ('x', 'y', 'm'):
        close(float(node.get_attribute(f'data-{key}')), reference[key])
    assert node.inner_text().strip()


def check_endpoints(page):
    plots = {selector: [] for selector in ('#orbit-plot', '#growth-plot')}
    for value, epsilon in ((0, Fraction(0)), (60, Fraction(1, 6)), (120, Fraction(1, 3))):
        slider(page, '#epsilon-slider', value)
        assert page.locator('#epsilon-slider').get_attribute('aria-valuetext')
        slider(page, '#iteration-slider', 2)
        readout(page, epsilon, 2)
        for selector, snapshots in plots.items():
            snapshots.append(page.locator(selector).inner_html())
        slider(page, '#iteration-slider', 40)
        readout(page, epsilon, 40)
        slider(page, '#iteration-slider', 0)
        readout(page, epsilon, 0)
    assert all(len(set(snapshots)) == 3 for snapshots in plots.values()), 'Epsilon must update both plots.'


def check_geometry(page):
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
    for selector in ('#orbit-plot', '#growth-plot'):
        svg = page.locator(selector)
        assert svg.get_attribute('role') == 'img'
        assert (svg.get_attribute('aria-label') or svg.get_attribute('aria-labelledby'))
        assert svg.get_attribute('preserveAspectRatio') != 'none'
        assert svg.locator('text').count() >= 4
        clipped = svg.evaluate('''svg => {
            const frame = svg.getBoundingClientRect();
            return Array.from(svg.querySelectorAll('text,path,polyline,line,circle')).flatMap(element => {
                if (element.closest('defs,marker,clipPath') || !element.getClientRects().length ||
                    getComputedStyle(element).display === 'none') return [];
                const box = element.getBoundingClientRect();
                // Allow the two-pixel text descender plus fractional SVG rounding.
                return box.left >= frame.left - 2.5 && box.right <= frame.right + 2.5 &&
                    box.top >= frame.top - 2.5 && box.bottom <= frame.bottom + 2.5 ? [] :
                    [{tag: element.tagName, text: element.textContent,
                        box: box.toJSON(), frame: frame.toJSON()}];
            });
        }''')
        assert not clipped, (selector, clipped)
    # Measure rendered coordinates rather than trusting declared scale metadata.
    slider(page, '#epsilon-slider', 0)
    points = []
    for n in (0, 1):
        slider(page, '#iteration-slider', n)
        points.append(page.locator('#orbit-current').evaluate('''element => {
            const rect = element.getBoundingClientRect();
            return [rect.left + rect.width / 2, rect.top + rect.height / 2];
        }'''))
    sx = (points[1][0] - points[0][0]) / 6
    sy = (points[1][1] - points[0][1]) / (Fraction(2, 3) - 1)
    assert sx > 0 and math.isclose(sx, -sy, rel_tol=0.005), (sx, sy)
    slider(page, '#iteration-slider', 2)


def check_workflow(page):
    assert_locked(page)
    assert not state(page)['playing'] and state(page)['n'] == 0
    assert page.locator('#iteration-slider').get_attribute('max') == '40'
    assert page.locator('#iteration-slider').get_attribute('min') == '0'
    assert page.locator('#epsilon-slider').get_attribute('max') == '120'
    assert page.locator('#epsilon-slider').get_attribute('min') == '0'
    for missing in FIELDS:
        fill_predictions(page)
        control = page.locator(missing)
        if control.evaluate('element => element.tagName === "SELECT"'):
            control.select_option('')
        else:
            control.fill('')
        if page.locator('#record-predictions').is_enabled():
            page.locator('#record-predictions').click()
        assert_locked(page)
    record(page, keyboard=True)
    page.locator('#play-pause').click()
    page.wait_for_function('window.PredictTransientGrowth.state().n > 0')
    page.locator('#play-pause').click()
    stopped = state(page)['n']
    page.wait_for_timeout(650)
    assert state(page)['n'] == stopped and not state(page)['playing']
    page.locator('#play-pause').click()
    assert state(page)['playing']
    page.locator('#edit-predictions').click()
    assert_locked(page)
    record(page)
    # Editing an already committed answer must invalidate its commitment.
    page.locator('#edit-predictions').click()
    page.locator('#predict-peak').fill('123')
    assert_locked(page)
    record(page)
    slider(page, '#iteration-slider', 39)
    page.locator('#play-pause').click()
    page.wait_for_function('window.PredictTransientGrowth.state().n === 40')
    assert not state(page)['playing']
    page.wait_for_timeout(650)
    assert state(page)['n'] == 40
    page.locator('#iteration-slider').focus()
    page.keyboard.press('Home')
    assert state(page)['n'] == 0
    page.keyboard.press('End')
    assert state(page)['n'] == 40
    page.locator('#epsilon-slider').focus()
    page.keyboard.press('Home')
    assert state(page)['epsilon'] == 0
    page.keyboard.press('End')
    close(state(page)['epsilon'], Fraction(1, 3))
    assert page.locator('[aria-live="polite"]').count() > 0
    for selector in (*FIELDS, '#predict-reasoning', '#epsilon-slider', '#iteration-slider'):
        assert page.locator(selector).evaluate('''element => Boolean(element.labels?.length ||
            element.getAttribute('aria-label') || element.getAttribute('aria-labelledby'))'''), selector
    check_reset(page)


def check_explanation(page):
    assert page.locator('#explanation').is_hidden()
    page.locator('#show-explanation').click()
    assert page.locator('#explanation').is_visible()
    text = page.locator('#explanation').inner_text().lower()
    for concept in ('eigen', 'diagonal', '8', '6'):
        assert concept in text, (concept, text)
    assert re.search(r'(ε|ϵ|epsilon|varepsilon)=0', re.sub(r'\s+', '', text)) or 'zero' in text
    assert page.locator('#explanation').locator('math, sup, sub, .MathJax, mjx-container').count() > 0


def check_iframe(page, base):
    page.goto(base + 'sec-diagonalization.html', wait_until='networkidle')
    iframe = page.locator(f'iframe{FRAME}[src*="predict-transient-growth.html"]')
    assert iframe.count() == 1 and iframe.get_attribute('title')
    iframe.evaluate('''frame => { for (let node = frame.parentElement; node; node = node.parentElement)
        if (node.tagName === 'DETAILS') node.open = true; }''')
    frame = iframe.content_frame
    frame.locator('#prediction-form').wait_for(state='visible')
    record(frame)
    check_explanation(frame)

    def fits():
        page.wait_for_function('''() => {
            const frame = document.querySelector('#int-predict-transient-growth');
            return frame.clientHeight >= Math.max(frame.contentDocument.body.scrollHeight,
                frame.contentDocument.documentElement.scrollHeight) - 2;
        }''')

    fits()
    assert iframe.evaluate('frame => frame.contentDocument.documentElement.scrollWidth <= frame.clientWidth + 1')
    expanded = iframe.evaluate('frame => frame.clientHeight')
    frame.locator('#reset-widget').click()
    page.wait_for_function('''height => document.querySelector(
        '#int-predict-transient-growth').clientHeight < height - 20''', arg=expanded)
    fits()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site-root', type=Path, default=ROOT / 'output/web', help='Built or downloaded website directory')
    parser.add_argument('--screenshot-dir', type=Path, default=Path('/tmp'))
    args = parser.parse_args()
    check_source()
    assert (args.site_root / WIDGET).is_file(), args.site_root / WIDGET
    assert (args.site_root / 'sec-diagonalization.html').is_file(), args.site_root
    args.screenshot_dir.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(args.site_root.resolve())))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f'http://127.0.0.1:{server.server_port}/'
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox'])
            for width in (1440, 820, 375):
                context = browser.new_context(viewport={'width': width, 'height': 1000})
                page = context.new_page()
                external, errors, bad_responses = [], [], []

                def route_request(route):
                    url = urlsplit(route.request.url)
                    if url.hostname == '127.0.0.1' and url.port == server.server_port:
                        route.continue_()
                    else:
                        external.append(route.request.url)
                        route.abort()

                page.route('**/*', route_request)
                page.on('pageerror', lambda error: errors.append(str(error)))
                page.on('response', lambda response: bad_responses.append(response.url)
                        if response.status >= 400 and response.request.resource_type in ('document', 'script', 'stylesheet', 'font') else None)
                page.goto(base + WIDGET, wait_until='networkidle')
                page.wait_for_function('Boolean(window.PredictTransientGrowth)')
                page.evaluate('document.fonts.ready')
                if width == 1440:
                    check_math(page)
                    check_workflow(page)
                record(page)
                check_endpoints(page)
                check_explanation(page)
                check_geometry(page)
                assert 'Pagella' in page.locator('body').evaluate('element => getComputedStyle(element).fontFamily')
                assert page.evaluate('document.fonts.check(\'16px "TeX Gyre Pagella"\')')
                assert page.evaluate('Array.from(document.fonts).some(font => font.family.includes("Pagella") && font.status === "loaded")')
                assert page.locator('body *').evaluate_all('''(elements, green) => elements.some(element =>
                    element.getClientRects().length && getComputedStyle(element).backgroundColor === green)''', GREEN)
                page.screenshot(path=str(args.screenshot_dir / f'math53-predict-growth-{width}.png'), full_page=True)
                check_reset(page)
                assert not external and not errors and not bad_responses, (external, errors, bad_responses)
                # Book-wide optional external services are intentionally ignored.
                check_iframe(page, base)
                context.close()
                print(f'PASS: {width}px, local fonts/colors, plot geometry, endpoints, explanation, reset and resizing book iframe', flush=True)
            context = browser.new_context(reduced_motion='reduce')
            page = context.new_page()
            page.route('**/*', lambda route: route.continue_() if urlsplit(route.request.url).hostname == '127.0.0.1' else route.abort())
            page.goto(base + WIDGET, wait_until='networkidle')
            record(page)
            page.wait_for_timeout(650)
            assert state(page)['n'] == 0 and not state(page)['playing']
            context.close()
            browser.close()
            print('PASS: prediction commitment, incorrect-answer acceptance, play/pause/end stop, keyboard, live status and reduced-motion no-autoplay', flush=True)
    finally:
        server.shutdown()
        server.server_close()


if __name__ == '__main__':
    main()
