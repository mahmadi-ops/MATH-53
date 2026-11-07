#!/usr/bin/env python3
"""Check the counterexample builder in real Chromium after a website build.

Uses the authoring environment's Playwright and installed Chromium. All external
requests are blocked: the widget, including its Pagella font, must work offline.
The book page's unrelated external-service errors do not affect these checks.
"""
import argparse
from fractions import Fraction
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from itertools import permutations
from pathlib import Path
import re
import threading
from urllib.parse import urlsplit

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parent.parent
WIDGET = 'external/demos/counterexample-diagonalization.html'
GOOD = [[-1, 1, 1], [-2, 2, 1], [-3, 1, 3]]
NEAR_MISS = [[3, 2, -3], [2, 3, -3], [2, 2, -2]]
WRONG = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
GREEN = 'rgb(237, 240, 230)'


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def reduce_rows(matrix):
    """Independent rational elimination for ranks and conjugating inverses."""
    rows = [list(map(Fraction, row)) for row in matrix]
    pivot = 0
    for col in range(len(rows[0])):
        selected = next((i for i in range(pivot, len(rows)) if rows[i][col]), None)
        if selected is None:
            continue
        rows[pivot], rows[selected] = rows[selected], rows[pivot]
        divisor = rows[pivot][col]
        rows[pivot] = [entry / divisor for entry in rows[pivot]]
        for i in range(len(rows)):
            if i != pivot:
                factor = rows[i][col]
                rows[i] = [entry - factor * base for entry, base in zip(rows[i], rows[pivot])]
        pivot += 1
        if pivot == len(rows):
            break
    return rows, pivot


def shifted(matrix, eigenvalue):
    return [[entry - eigenvalue * (i == j) for j, entry in enumerate(row)]
            for i, row in enumerate(matrix)]


def characteristic(matrix):
    """Expand det(tI-A) as polynomials via the six permutations, exactly."""
    result = [Fraction(0)] * 4
    for perm in permutations(range(3)):
        sign = (-1) ** sum(perm[i] > perm[j] for i in range(3) for j in range(i + 1, 3))
        polynomial = [Fraction(sign)]
        for i, j in enumerate(perm):
            factor = [Fraction(1), Fraction(-matrix[i][j])] if i == j else [Fraction(-matrix[i][j])]
            product = [Fraction(0)] * (len(polynomial) + len(factor) - 1)
            for a, left in enumerate(polynomial):
                for b, right in enumerate(factor):
                    product[a + b] += left * right
            polynomial = product
        offset = 4 - len(polynomial)
        for i, value in enumerate(polynomial):
            result[offset + i] += value
    assert all(value.denominator == 1 for value in result)
    return [int(value) for value in result]


def multiply(left, right):
    return [[sum(a * b for a, b in zip(row, col)) for col in zip(*right)] for row in left]


def conjugated_examples():
    jordan = [[1, 1, 0], [0, 1, 0], [0, 0, 2]]
    changes = [
        [[-1, -1, -1], [-1, 0, -1], [0, -1, 1]],
        [[-1, -1, -1], [-1, 0, -1], [0, 1, -1]],
        [[-1, -1, -1], [0, -1, 1], [-1, 0, -1]],
    ]
    examples = []
    for change in changes:
        augmented = [row + [int(i == j) for j in range(3)] for i, row in enumerate(change)]
        reduced, _ = reduce_rows(augmented)
        inverse = [row[3:] for row in reduced]
        assert multiply(change, inverse) == [[int(i == j) for j in range(3)] for i in range(3)]
        matrix = multiply(multiply(change, jordan), inverse)
        assert all(value and value.denominator == 1 for row in matrix for value in row)
        examples.append([[int(value) for value in row] for row in matrix])
    return examples


def expected_conditions(matrix):
    polynomial = characteristic(matrix)
    return {
        'entries': all(entry != 0 for row in matrix for entry in row),
        'trace': polynomial[1] == -4,
        'principal-minors': polynomial[2] == 5,
        'determinant': polynomial[3] == -2,
        'rank': reduce_rows(shifted(matrix, 1))[1] == 2,
    }


def assert_basis(matrix, eigenvalue, vectors):
    dimension = 3 - reduce_rows(shifted(matrix, eigenvalue))[1]
    assert len(vectors) == dimension, (matrix, eigenvalue, vectors, dimension)
    assert all(len(vector) == 3 and any(vector) for vector in vectors), vectors
    for vector in vectors:
        image = [sum(a * b for a, b in zip(row, vector)) for row in matrix]
        assert image == [eigenvalue * entry for entry in vector], (matrix, eigenvalue, vector)
    if vectors:
        assert reduce_rows(vectors)[1] == len(vectors), vectors


def check_exact_api(page, matrices):
    for matrix in matrices:
        actual = page.evaluate('''entries => {
            const api = window.CounterexampleDiagonalization;
            const matrix = entries.map(row => row.map(BigInt));
            const result = api.analyzeMatrix(matrix);
            result.directDeterminant = api.determinant(matrix);
            return JSON.parse(JSON.stringify(result, (_, value) =>
                typeof value === 'bigint' ? String(value) : value));
        }''', [[str(entry) for entry in row] for row in matrix])
        polynomial = characteristic(matrix)
        assert list(map(int, actual['characteristicCoefficients'])) == polynomial, (matrix, actual)
        assert int(actual['trace']) == -polynomial[1], (matrix, actual)
        assert int(actual['principalMinorSum']) == polynomial[2], (matrix, actual)
        assert int(actual['determinant']) == int(actual['directDeterminant']) == -polynomial[3], (matrix, actual)
        rank = reduce_rows(shifted(matrix, 1))[1]
        assert int(actual['shiftedRank']) == rank and int(actual['shiftedNullity']) == 3 - rank, (matrix, actual)
        assert actual['targetPolynomial'] == (polynomial == [1, -4, 5, -2]), (matrix, actual)
        assert actual['accepted'] == all(expected_conditions(matrix).values()), (matrix, actual)
        if actual['targetPolynomial']:
            for eigenvalue in (1, 2):
                assert_basis(matrix, eigenvalue, [list(map(int, vector)) for vector in actual[f'basisE{eigenvalue}']])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site-root', type=Path, default=ROOT / 'output/web', help='Built or downloaded website directory')
    parser.add_argument('--screenshot-dir', type=Path, default=Path('/tmp'))
    args = parser.parse_args()
    assert (args.site_root / WIDGET).is_file(), args.site_root / WIDGET
    assert (args.site_root / 'sec-diagonalization.html').is_file(), args.site_root
    args.screenshot_dir.mkdir(parents=True, exist_ok=True)
    examples = [GOOD, *conjugated_examples()]
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
                page.wait_for_function('Boolean(window.CounterexampleDiagonalization)')
                page.evaluate('document.fonts.ready')
                inputs = page.locator('[data-matrix-entry]')
                assert inputs.count() == 9
                for i in range(3):
                    for j in range(3):
                        assert page.get_by_label(f'Row {i + 1}, column {j + 1}', exact=True).count() == 1
                status = page.locator('#feedback-status')
                assert status.get_attribute('role') == 'status' and status.get_attribute('aria-live') == 'polite'
                assert not status.inner_text().strip()

                def fill(matrix):
                    for index, entry in enumerate(entry for row in matrix for entry in row):
                        inputs.nth(index).fill(str(entry))

                def check(matrix, keyboard=False):
                    fill(matrix)
                    if keyboard:
                        inputs.last.press('Enter')
                    else:
                        page.locator('#check-matrix').click()
                    expected = expected_conditions(matrix)
                    conditions = page.locator('#condition-results li[data-condition]')
                    actual = {item.get_attribute('data-condition'): item.get_attribute('data-passed') == 'true'
                              for item in conditions.all()}
                    assert actual == expected, (matrix, actual, expected)
                    assert status.inner_text().strip() and page.locator('#matrix-facts').is_visible()
                    accepted = all(expected.values())
                    assert page.locator('#show-verification').is_visible() == accepted, (matrix, status.inner_text())
                    return accepted

                page.locator('#check-matrix').click()
                assert status.inner_text().strip() and inputs.first.get_attribute('aria-invalid') == 'true'
                assert inputs.first.evaluate('element => element === document.activeElement')
                for invalid in ('1.5', '1e2', '1/2', 'no', '9' * 1001):
                    fill(GOOD)
                    inputs.nth(4).fill(invalid)
                    page.locator('#check-matrix').click()
                    assert inputs.nth(4).get_attribute('aria-invalid') == 'true', invalid[:20]
                    assert inputs.nth(4).evaluate('element => element === document.activeElement')
                    assert status.inner_text().strip() and page.locator('#show-verification').is_hidden()
                zero = [row[:] for row in GOOD]
                zero[0][0] = 0
                assert not check(zero)
                assert not check(NEAR_MISS)
                assert page.locator('[data-condition="rank"]').get_attribute('data-passed') == 'false'
                assert not check(WRONG)
                for index, matrix in enumerate(examples if width == 1440 else examples[:1]):
                    assert check(matrix, keyboard=True)
                    if index == 0:
                        inputs.first.fill('  −1  ')
                        inputs.nth(1).fill(' +1 ')
                        inputs.last.press('Enter')
                        assert status.get_attribute('data-state') == 'success'
                    assert page.locator('#verification').is_hidden()
                    page.locator('#show-verification').click()
                    assert page.locator('#verification').is_visible()
                    for eigenvalue in (1, 2):
                        vectors = []
                        for node in page.locator(f'#basis-e{eigenvalue} [data-vector]').all():
                            vector = list(map(int, node.get_attribute('data-vector').split(',')))
                            assert list(map(int, re.findall(r'-?\d+', node.inner_text().replace('−', '-')))) == vector
                            vectors.append(vector)
                        assert_basis(matrix, eigenvalue, vectors)
                    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
                    if index == 0:
                        page.screenshot(path=str(args.screenshot_dir / f'math53-counterexample-diagonalization-{width}.png'), full_page=True)
                if width == 1440:
                    huge = 10 ** 30 + 7
                    check_exact_api(page, examples + [NEAR_MISS, WRONG, zero,
                        [[huge, -2, 3], [5, -huge, 7], [11, 13, huge + 1]],
                        [[2, 3, -4], [7, -9, 11], [-5, 6, 8]]])
                assert 'Pagella' in page.locator('body').evaluate('element => getComputedStyle(element).fontFamily')
                assert page.evaluate('document.fonts.check(\'16px "TeX Gyre Pagella"\')')
                assert page.evaluate('Array.from(document.fonts).some(font => font.family.includes("Pagella") && font.status === "loaded")')
                assert page.locator('body *').evaluate_all('''(elements, green) => elements.some(element =>
                    element.getClientRects().length && getComputedStyle(element).backgroundColor === green)''', GREEN)
                inputs.first.fill('7')
                assert page.locator('#verification').is_hidden() and page.locator('#show-verification').is_hidden()
                page.locator('#toggle-hint').click()
                assert page.locator('#hint').is_visible()
                page.locator('#reset-matrix').click()
                assert inputs.evaluate_all('elements => elements.every(element => !element.value && !element.hasAttribute("aria-invalid"))')
                assert inputs.first.evaluate('element => element === document.activeElement')
                assert not status.inner_text().strip()
                for selector in ('#condition-results', '#matrix-facts', '#verification', '#hint'):
                    assert page.locator(selector).is_hidden(), selector
                assert not external and not errors and not bad_responses, (external, errors, bad_responses)

                # The book loads optional online services. Only the local iframe
                # and its contents are part of this integration check.
                page.goto(base + 'sec-diagonalization.html', wait_until='networkidle')
                iframe = page.locator('iframe#int-counterexample-diagonalization[src*="counterexample-diagonalization.html"]')
                assert iframe.count() == 1 and iframe.get_attribute('title')
                iframe.evaluate('frame => { for (let e = frame.parentElement; e; e = e.parentElement) if (e.tagName === "DETAILS") e.open = true; }')
                frame = iframe.content_frame
                frame.locator('#matrix-form').wait_for(state='visible')
                assert frame.locator('[data-matrix-entry]').count() == 9
                frame.locator('#check-matrix').click()
                assert frame.locator('#feedback-status').inner_text().strip()
                assert iframe.evaluate('frame => frame.contentDocument.documentElement.scrollWidth <= frame.clientWidth + 1')
                for index, entry in enumerate(entry for row in GOOD for entry in row):
                    frame.locator('[data-matrix-entry]').nth(index).fill(str(entry))
                frame.locator('[data-matrix-entry]').last.press('Enter')
                frame.locator('#show-verification').click()
                frame.locator('#verification').wait_for(state='visible')

                def frame_fits():
                    page.wait_for_function('''() => {
                        const frame = document.querySelector('#int-counterexample-diagonalization');
                        return frame.clientHeight >= Math.max(frame.contentDocument.body.scrollHeight,
                            frame.contentDocument.documentElement.scrollHeight) - 2;
                    }''')

                frame_fits()
                expanded_height = iframe.evaluate('frame => frame.clientHeight')
                frame.locator('#reset-matrix').click()
                page.wait_for_function('''height => document.querySelector(
                    '#int-counterexample-diagonalization').clientHeight < height - 20''', arg=expanded_height)
                frame_fits()
                context.close()
                print(f'PASS: {width}px, offline widget, rejection/acceptance, exact eigenvectors, keyboard/accessibility, reset and book iframe', flush=True)
            browser.close()
            print('PASS: characteristic polynomials, determinants and nullspaces agree with independent exact Python arithmetic', flush=True)
    finally:
        server.shutdown()
        server.server_close()


if __name__ == '__main__':
    main()
