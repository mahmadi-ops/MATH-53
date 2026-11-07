#!/usr/bin/env python3
"""Check the native parameter-dependent first-error challenge after a web build.

Requires the authoring environment's Playwright, installed Chromium, and real
MathJax packages in .cache/figure-theme/node_modules. External book services are
blocked; the native Runestone grader and cached MathJax run locally. Screenshots
are written to /tmp/math53-first-error-*.png.
"""
import argparse
import ast
from fractions import Fraction
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re
import threading
from urllib.parse import unquote, urlsplit

from lxml import etree as ET
from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parent.parent
EXERCISE = 'ex-row-reduction-first-error'
GATE = 'task-row-first-error-repair'
ANSWERS = {
    'task-row-first-error': 1,
    'task-row-generic-case': 0,
    'task-row-a-one-case': 2,
    'task-row-a-two-case': 1,
}
FIRST = next(iter(ANSWERS))
GREEN = 'rgb(237, 240, 230)'


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def expression_value(expression, a, b):
    """Evaluate only the simple integer/parameter expressions in the matrices."""
    def value(node):
        if isinstance(node, ast.Constant) and type(node.value) is int:
            return Fraction(node.value)
        if isinstance(node, ast.Name) and node.id in ('a', 'b'):
            return {'a': a, 'b': b}[node.id]
        if isinstance(node, ast.UnaryOp) and isinstance(node.op, ast.USub):
            return -value(node.operand)
        if isinstance(node, ast.BinOp):
            left, right = value(node.left), value(node.right)
            if isinstance(node.op, ast.Add):
                return left + right
            if isinstance(node.op, ast.Sub):
                return left - right
            if isinstance(node.op, ast.Mult):
                return left * right
        raise AssertionError(f'Unsupported matrix expression: {expression!r}')
    return value(ast.parse(expression.strip(), mode='eval').body)


def matrix_source(source, xmlid):
    nodes = source.xpath('//*[@xml:id=$id]', id=xmlid)
    assert len(nodes) == 1, xmlid
    tex = ''.join(nodes[0].itertext())
    match = re.search(r'\\begin\{array\}\{[^}]+\}(.*?)\\end\{array\}', tex, re.S)
    assert match, (xmlid, tex)
    rows = [row.strip() for row in match[1].split(r'\\') if row.strip()]
    entries = [[cell.strip() for cell in row.split(r'\amp')] for row in rows]
    assert len(entries) == 3 and all(len(row) == 4 for row in entries), entries
    return entries


def rank(matrix):
    """Exact Gaussian elimination, including singular exceptional cases."""
    rows = [list(map(Fraction, row)) for row in matrix]
    pivot = 0
    for col in range(len(rows[0])):
        selected = next((i for i in range(pivot, len(rows)) if rows[i][col]), None)
        if selected is None:
            continue
        rows[pivot], rows[selected] = rows[selected], rows[pivot]
        divisor = rows[pivot][col]
        rows[pivot] = [entry / divisor for entry in rows[pivot]]
        for i in range(pivot + 1, len(rows)):
            factor = rows[i][col]
            rows[i] = [entry - factor * base for entry, base in zip(rows[i], rows[pivot])]
        pivot += 1
        if pivot == len(rows):
            break
    return pivot


def check_source_and_math():
    source = ET.parse(str(ROOT / 'source/linear-systems/sec-row-reduction.ptx'))
    exercise = source.xpath('//*[@xml:id=$id]', id=EXERCISE)[0]
    repair = exercise.xpath('.//*[@xml:id=$id]', id=GATE)[0]
    feedback_math = {}
    for task_id, correct in ANSWERS.items():
        task = exercise.xpath('.//*[@xml:id=$id]', id=task_id)[0]
        if task_id != FIRST:
            assert task in repair.iterdescendants(), task_id
        choices = task.find('choices')
        assert choices is not None and choices.get('randomize') == 'no', task_id
        assert choices.get('multiple-correct') == 'no', task_id
        options = choices.findall('choice')
        assert len(options) == 4, task_id
        assert [i for i, option in enumerate(options) if option.get('correct') == 'yes'] == [correct], task_id
        feedbacks = [''.join(option.find('feedback').itertext()).strip() for option in options]
        assert all(feedbacks) and len(set(feedbacks)) == 4, task_id
        feedback_math[task_id] = [bool(option.xpath('./feedback//m | ./feedback//md')) for option in options]
    system = ''.join(source.xpath('//*[@xml:id="sys-first-error-parameters"]')[0].itertext())
    compact_system = re.sub(r'\s+', '', system)
    assert all(equation in compact_system for equation in ('x+y+z=1', '2x+(a+1)y+4z=b', '3x+3y+(a+1)z=b')), system
    step_one = matrix_source(source, 'mat-first-error-step-1')
    cases = 0
    for a in map(Fraction, (-3, 0, 1, 2, 3, Fraction(7, 3))):
        for b in map(Fraction, (-2, 0, 1, Fraction(8, 3), 3, 5)):
            original = [[Fraction(1), Fraction(1), Fraction(1), Fraction(1)], [Fraction(2), a + 1, Fraction(4), b], [Fraction(3), Fraction(3), a + 1, b]]
            displayed = [[expression_value(cell, a, b) for cell in row] for row in step_one]
            assert original == [[1, 1, 1, 1], [2, a + 1, 4, b], [3, 3, a + 1, b]], (a, b, original)
            reduced = [original[0]] + [
                [entry - multiplier * base for entry, base in zip(row, original[0])]
                for row, multiplier in zip(original[1:], (2, 3))
            ]
            assert displayed == reduced == [[1, 1, 1, 1], [0, a - 1, 2, b - 2], [0, 0, a - 2, b - 3]], (a, b, displayed)
            coefficient_rank, augmented_rank = rank([row[:3] for row in original]), rank(original)
            classification = 'none' if coefficient_rank < augmented_rank else 'unique' if coefficient_rank == 3 else 'infinite'
            expected = ('infinite' if b == Fraction(8, 3) else 'none') if a == 1 else (
                ('infinite' if b == 3 else 'none') if a == 2 else 'unique')
            assert classification == expected, (a, b, classification, expected)
            if classification == 'infinite':
                # Two distinct points on each claimed solution line, checked
                # directly in all three original equations using fractions.
                for parameter in (Fraction(-2), Fraction(5, 7)):
                    solution = [Fraction(2, 3) - parameter, parameter, Fraction(1, 3)] if a == 1 else [parameter, 1 - 2 * parameter, parameter]
                    assert all(sum(coefficient * variable for coefficient, variable in zip(row[:3], solution)) == row[3] for row in original), (a, b, solution)
            cases += 1
    print(f'PASS: four native questions, fixed choices and feedback; exact row operations and ranks in {cases} parameter cases', flush=True)
    return feedback_math


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site-root', type=Path, default=ROOT / 'output/web', help='Built or downloaded published website directory')
    parser.add_argument('--screenshot-dir', type=Path, default=Path('/tmp'), help='Directory for math53-first-error-*.png screenshots')
    args = parser.parse_args()
    feedback_math = check_source_and_math()
    assert (args.site_root / 'sec-row-reduction.html').is_file(), args.site_root
    args.screenshot_dir.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(args.site_root.resolve())))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    packages = ROOT / '.cache/figure-theme/node_modules'
    routed = {'mathjax': 0, 'pagella': 0}

    def route_request(route):
        url = urlsplit(route.request.url)
        if url.hostname == '127.0.0.1' and url.port == server.server_port:
            route.continue_()
            return
        mapping = [
            (r'/npm/mathjax@[^/]+/(.+)', packages / 'mathjax', 'mathjax'),
            (r'/npm/@mathjax/mathjax-pagella-font@[^/]+/(.+)', packages / '@mathjax/mathjax-pagella-font', 'pagella'),
        ]
        for pattern, folder, name in mapping:
            match = re.fullmatch(pattern, unquote(url.path))
            if match:
                path = (folder / match[1]).resolve()
                if path.is_relative_to(folder.resolve()) and path.is_file():
                    routed[name] += 1
                    route.fulfill(path=str(path))
                    return
        route.abort()

    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox'])
            for width in (1500, 375, 820):
                context = browser.new_context(viewport={'width': width, 'height': 1100})
                page = context.new_page()
                page.route('**/*', route_request)
                base = f'http://127.0.0.1:{server.server_port}/sec-row-reduction.html'
                exercise = page.locator('#' + EXERCISE)
                gate = page.locator('#' + GATE)

                def question(task_id):
                    return page.locator('#rs-' + task_id)

                def feedback(task_id):
                    return page.locator('#rs-' + task_id + '_feedback')

                def ready():
                    page.wait_for_function('''ids => ids.every(id =>
                        window.componentMap?.['rs-' + id]?.optionArray?.length === 4)''', arg=list(ANSWERS), timeout=20000)
                    page.wait_for_selector('#mat-first-error-step-1 mjx-container', timeout=20000)
                    page.evaluate('async () => { await MathJax.startup.promise; await document.fonts.ready; }')

                def state(task_id):
                    checked = question(task_id).locator('input:checked')
                    return {'feedback': feedback(task_id).inner_text(), 'checked': checked.get_attribute('value') if checked.count() else None}

                def graded(task_id, index):
                    correct = index == ANSWERS[task_id]
                    page.wait_for_function('''({id, correct}) => {
                        const question = window.componentMap['rs-' + id];
                        return question.didSubmit && question.correct === correct;
                    }''', arg={'id': task_id, 'correct': correct})
                    result = feedback(task_id)
                    assert result.is_visible() and result.inner_text().strip(), task_id
                    assert ('alert-danger' in result.get_attribute('class')) != correct, (task_id, index)
                    if feedback_math[task_id][index]:
                        result.locator('mjx-container').first.wait_for(timeout=20000)
                    assert not result.locator('[data-mml-node="merror"], mjx-merror').count(), (task_id, index)

                def submit(task_id, index, keyboard=False):
                    others = {other: state(other) for other in ANSWERS if other != task_id}
                    current = question(task_id)
                    radios = current.locator('input[type="radio"]')
                    check = current.get_by_role('button', name='Check', exact=False)
                    if keyboard:
                        radios.nth((index - 1) % 4).focus()
                        page.keyboard.press('Space')
                        page.keyboard.press('ArrowDown')
                        assert radios.nth(index).is_checked(), task_id
                        # Some Runestone/MathJax versions include inline math
                        # in the tab order between a radio and its button.
                        for _ in range(12):
                            page.keyboard.press('Tab')
                            if check.evaluate('e => e === document.activeElement'):
                                break
                        assert check.evaluate('e => e === document.activeElement'), task_id
                        page.keyboard.press('Enter')
                    else:
                        radios.nth(index).check()
                        check.click()
                    graded(task_id, index)
                    assert others == {other: state(other) for other in others}, task_id

                page.goto(base, wait_until='networkidle')
                ready()
                assert gate.count() == 1 and gate.is_hidden()
                for task_id in ANSWERS:
                    current = question(task_id)
                    assert current.locator('input[type="radio"]').count() == 4, task_id
                    assert current.get_by_role('radiogroup', include_hidden=True).get_attribute('aria-labelledby') == 'rs-' + task_id + '_prompt'
                    assert feedback(task_id).get_attribute('aria-live') == 'polite'
                    assert feedback(task_id).get_attribute('role') == 'status'
                    assert not feedback(task_id).inner_text().strip(), task_id
                if width == 1500:
                    exercise.screenshot(path=str(args.screenshot_dir / 'math53-first-error-locked-1500.png'))
                first_results = []
                for index in ((0, 2, 3) if width == 1500 else (3,)):
                    submit(FIRST, index)
                    assert gate.is_hidden(), index
                    first_results.append(feedback(FIRST).inner_text())
                page.reload(wait_until='networkidle')
                ready()
                assert gate.is_hidden() and question(FIRST).locator('input[value="3"]').is_checked()
                submit(FIRST, ANSWERS[FIRST], keyboard=True)
                gate.wait_for(state='visible')
                first_results.append(feedback(FIRST).inner_text())
                assert len(set(first_results)) == (4 if width == 1500 else 2)
                page.reload(wait_until='networkidle')
                ready()
                gate.wait_for(state='visible')
                assert question(FIRST).locator('input[value="1"]').is_checked()
                # A retry does not hide already-unlocked work during this
                # page lifetime. The native saved answer governs a new visit.
                submit(FIRST, 0)
                assert gate.is_visible()
                submit(FIRST, ANSWERS[FIRST], keyboard=True)
                for task_id, correct in list(ANSWERS.items())[1:]:
                    results = []
                    for index in ([i for i in range(4) if i != correct] + [correct] if width == 1500 else []):
                        submit(task_id, index)
                        results.append(feedback(task_id).inner_text())
                    if width == 1500:
                        assert len(set(results)) == 4, task_id
                        submit(task_id, (correct + 1) % 4, keyboard=True)
                    submit(task_id, correct, keyboard=True)
                for task_id in ANSWERS:
                    current = question(task_id)
                    check = current.get_by_role('button', name='Check', exact=False)
                    styles = check.evaluate('''e => ({font: getComputedStyle(e).fontFamily,
                        color: getComputedStyle(e).color, height: e.getBoundingClientRect().height})''')
                    assert 'Pagella' in styles['font'] and styles['color'] == 'rgb(74, 93, 35)', (task_id, styles)
                    assert styles['height'] >= 44, (task_id, styles)
                    assert current.evaluate('e => getComputedStyle(e).backgroundColor') == GREEN, task_id
                    assert current.evaluate('e => getComputedStyle(e).borderColor') == 'rgb(196, 205, 177)', task_id
                    assert feedback(task_id).evaluate('e => getComputedStyle(e).backgroundColor') == GREEN, task_id
                    assert current.locator('label.mchoice-option').evaluate_all('es => es.every(e => e.getBoundingClientRect().height >= 44)'), task_id
                    assert current.evaluate('e => e.scrollWidth <= e.clientWidth + 1'), (width, task_id)
                assert exercise.locator('mjx-container').count() >= 10
                assert not exercise.locator('[data-mml-node="merror"], mjx-merror').count()
                assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1'), width
                assert exercise.evaluate('e => e.scrollWidth <= e.clientWidth + 1'), width
                exercise.screenshot(path=str(args.screenshot_dir / f'math53-first-error-{width}.png'))
                grading = 'every choice graded' if width == 1500 else 'grading smoke checks'
                print(f'PASS: {width}px — {grading}, independent feedback, keyboard, sticky gate and reload, rendered math, Pagella controls and responsive layout', flush=True)
                context.close()
            assert routed['mathjax'] and routed['pagella'], routed
            print(f'PASS: real MathJax and Pagella math fonts served from the local cache; screenshots in {args.screenshot_dir}/math53-first-error-*.png', flush=True)
            browser.close()
    finally:
        server.shutdown()
        server.server_close()


if __name__ == '__main__':
    main()
