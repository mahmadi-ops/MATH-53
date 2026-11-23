#!/usr/bin/env python3
"""Write the print version of the Section 2.3 explorer translated-solutions.html.

Opens the explorer in headless Chromium at its starting position (s = 1.5,
p = (0, 0, -1)), copies the drawing exactly as the page drew it, and writes

    assets/images/ch2-translated-solutions.svg   (book fonts embedded)
    assets/images/ch2-translated-solutions.pdf   (for the LaTeX build)

The SVG is also the picture shown by the explorer when JavaScript is off.
Run from anywhere after changing the explorer's drawing or labels:

    python scripts/make-translated-solutions-static.py [--chrome PATH]

The PDF is printed by the same browser from the finished SVG, so both files
show the labels exactly as the page sets them.

Requires Playwright with a Chromium or Chrome executable, and lxml and
fonttools from scripts/requirements-figures.txt.
"""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import importlib.util
from pathlib import Path
import shutil
import sys
import threading

from lxml import etree as ET
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
NAME = 'ch2-translated-solutions'
SVG = 'http://www.w3.org/2000/svg'
LABEL = ('In three-dimensional space, a gray line through the origin holds the homogeneous '
         'solutions s v_1, and an olive line parallel to it, one unit lower, holds the solutions '
         'p + s v_1. A wine arrow p = (0, 0, -1) points from the origin down to the olive line. '
         'For s = 1.5, the arrows s v_1 and p, with dashed copies of each, form a parallelogram '
         'whose far corner is w = p + s v_1 = (-1.5, 1.5, -1), on the olive line.')
sys.dont_write_bytecode = True


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--chrome', help='path to a Chrome or Chromium executable')
    args = parser.parse_args()
    chrome = args.chrome or next((p for p in ('chromium', 'chromium-browser', 'google-chrome') if shutil.which(p)), None)

    out = ROOT / 'assets' / 'images' / (NAME + '.svg')
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f'http://127.0.0.1:{server.server_port}/assets/'
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=shutil.which(chrome) if chrome else None, args=['--no-sandbox'])
            page = browser.new_page(viewport={'width': 1040, 'height': 1000})
            page.goto(base + 'demos-manim/translated-solutions.html', wait_until='networkidle')
            page.wait_for_selector('html.js-ready')
            page.evaluate('document.fonts.ready')
            assert page.locator('#scalar').input_value() == '1.5'
            markup = page.locator('#translation-scene').evaluate('e => e.outerHTML')
            width, height = write_svg(markup, out)
            # Print the finished SVG on a page of exactly its own size.
            page.set_viewport_size({'width': width, 'height': height})
            # The explorer page has already loaded the previous version of this
            # file as its no-JavaScript picture; the query string avoids that copy.
            page.goto(base + 'images/' + out.name + f'?v={out.stat().st_mtime_ns}', wait_until='networkidle')
            page.evaluate('document.fonts.ready')
            page.pdf(path=str(out.with_suffix('.pdf')), width=f'{width}px', height=f'{height}px',
                     print_background=False, page_ranges='1')
            browser.close()
    finally:
        server.shutdown()
        server.server_close()
    print('Wrote', out.relative_to(ROOT), 'and its PDF', flush=True)


def write_svg(markup, out):
    """The page's drawing as a standalone image; returns its size in CSS pixels."""
    svg = ET.fromstring(markup.encode())
    for child in svg.iter():
        if isinstance(child.tag, str) and not child.tag.startswith('{'):
            child.tag = '{' + SVG + '}' + child.tag
    ET.cleanup_namespaces(svg, top_nsmap={None: SVG})
    for key in ('id', 'class', 'tabindex', 'aria-describedby', 'aria-labelledby'):
        svg.attrib.pop(key, None)
    for child in list(svg):                       # the page's own <title> and <desc>
        if child.tag in ('{' + SVG + '}title', '{' + SVG + '}desc'):
            svg.remove(child)
    svg.set('role', 'img')
    svg.set('aria-label', LABEL)
    # The page styles its labels from a stylesheet; an image needs the rules inside.
    style = ET.SubElement(svg, '{' + SVG + '}style')
    style.text = 'text{font-size:17px;paint-order:stroke;stroke:white;stroke-width:4px;stroke-linejoin:round}'
    ET.ElementTree(svg).write(str(out), encoding='utf-8', xml_declaration=True)

    spec = importlib.util.spec_from_file_location('figure_theme', ROOT / 'scripts' / 'build-book-figures.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    module.embed_font(out)
    return [round(float(x)) for x in svg.get('viewBox').split()[2:]]


if __name__ == '__main__':
    main()
