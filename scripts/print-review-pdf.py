#!/usr/bin/env python3
"""Print a review copy made by review-changes.py to a single PDF.

Serves the review directory locally, opens the summary page and each
reviewed page in headless Chromium (Playwright), waits for MathJax and the
interactive figures, and prints them, in order, into one PDF.

Usage:
  python3 scripts/print-review-pdf.py REVIEW_DIR OUT.pdf --pages sec-a.html sec-b.html
      [--mathjax-dir node_modules]   # serve cdn.jsdelivr.net/npm/* from a local
                                     # node_modules folder (for offline machines)

Requires: pip install playwright pypdf && playwright install chromium
"""

import argparse
import functools
import http.server
import io
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter

CDN = "https://cdn.jsdelivr.net/npm/"


def serve(directory):
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass
    handler = functools.partial(Quiet, directory=str(directory))
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("review_dir")
    ap.add_argument("out_pdf")
    ap.add_argument("--pages", nargs="+", required=True)
    ap.add_argument("--mathjax-dir")
    ap.add_argument("--chrome", help="path to a Chrome/Chromium executable")
    a = ap.parse_args()

    httpd = serve(Path(a.review_dir))
    base = f"http://127.0.0.1:{httpd.server_address[1]}/"
    writer = PdfWriter()
    with sync_playwright() as pw:
        browser = pw.chromium.launch(executable_path=a.chrome) if a.chrome else pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1100, "height": 1400})
        root = Path(a.mathjax_dir) if a.mathjax_dir else None

        def handle(route):
            url = route.request.url
            if url.startswith(base):
                return route.continue_()
            if url.startswith(CDN) and root is None:
                return route.continue_()
            if url.startswith(CDN):
                parts = url[len(CDN):].split("?")[0].split("/")
                if parts[0].startswith("@"):
                    pkg, rest = parts[0] + "/" + parts[1].split("@")[0], parts[2:]
                else:
                    pkg, rest = parts[0].split("@")[0], parts[1:]
                path = root.joinpath(pkg, *rest)
                if path.is_file():
                    ctype = "application/javascript" if path.suffix == ".js" else None
                    return route.fulfill(path=str(path), content_type=ctype)
            return route.abort()  # other external resources: not needed for print
        page.route("**/*", handle)
        for name in ["review-summary.html"] + a.pages:
            page.goto(base + name, wait_until="load")
            page.wait_for_function(
                "() => window.MathJax && MathJax.startup && MathJax.startup.promise", timeout=60000)
            page.evaluate("() => MathJax.startup.promise")
            page.wait_for_timeout(2500)  # let the interactive iframes draw
            pdf = page.pdf(format="Letter", print_background=True,
                           margin={"top": "0.6in", "bottom": "0.6in", "left": "0.6in", "right": "0.6in"})
            for p in PdfReader(io.BytesIO(pdf)).pages:
                writer.add_page(p)
            print("printed", name)
        browser.close()
    httpd.shutdown()
    with open(a.out_pdf, "wb") as f:
        writer.write(f)
    print("wrote", a.out_pdf)


if __name__ == "__main__":
    main()
