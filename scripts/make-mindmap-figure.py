#!/usr/bin/env python3
"""Render the "From image to accuracy" mind map to a self-contained SVG.

The source of the figure is a Claude Design component, imported from the
project "Brain map redesign request" and vendored under scripts/mindmap/:

    Recognition Mind Map.dc.html   the design itself: node list, palette, layout
    support.js                     the design runtime it loads (generated; do
                                   not edit -- refetch it from the project)
    extract.js                     reads the finished layout out of the DOM

The component is live, not a picture: absolutely positioned HTML boxes over an
SVG of edges, with MathJax setting the formulas and the browser breaking each
label into lines.  None of that survives as a static image on its own, so this
script drives the component in headless Chromium, reads the layout back once it
has settled, and re-emits it as plain SVG -- rectangles, lines, <text>, and
MathJax's own glyph outlines.

The result carries no script, no <foreignObject>, and no external font, which
is what an <img>-embedded SVG in the built book can actually display.  It needs
network access on the first run: the design runtime pulls React from a CDN, and
MathJax is loaded the same way.

Usage:
    python3 scripts/make-mindmap-figure.py [component.html] [out.svg]
"""

import html
import json
import os
import re
import sys
import urllib.parse

from playwright.sync_api import sync_playwright

MARGIN = 26          # breathing room around the drawn content
FONT_STACK = ("'TeX Gyre Pagella','Palatino Linotype',Palatino,"
              "'URW Palladio L',Georgia,serif")
PAGE_BG = "#fffefb"


def esc(t):
    return html.escape(t, quote=False)


def collect(component, extractor):
    """Drive the component in a browser and read its finished layout back."""
    url = "file://" + urllib.parse.quote(os.path.abspath(component))
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1900, "height": 1250})
        page.goto(url)
        # The runtime pulls React off a CDN and MathJax typesets afterwards.
        page.wait_for_function(
            "() => document.querySelectorAll('mjx-container svg').length >= 13",
            timeout=60000)
        page.wait_for_timeout(1200)
        data = page.evaluate(open(extractor).read())
        browser.close()
    return data


def bounds(data):
    xs, ys = [], []
    for b in data["boxes"]:
        xs += [b["x"], b["x"] + b["w"]]
        ys += [b["y"], b["y"] + b["h"]]
    for e in data["edges"]:
        xs += [e["x1"], e["x2"]]
        ys += [e["y1"], e["y2"]]
    for t in data["texts"]:
        for ln in t["lines"]:
            xs += [ln["left"], ln["right"]]
            ys += [ln["baseline"] - t["size"], ln["baseline"] + 0.35 * t["size"]]
    return (min(xs) - MARGIN, min(ys) - MARGIN,
            max(xs) + MARGIN, max(ys) + MARGIN)


def draw_boxes(data, out):
    for b in data["boxes"]:
        bg, bc = b["bg"], b["bc"]
        invisible = bg in ("rgba(0, 0, 0, 0)", "transparent") and b["bw"] == 0
        if invisible:                      # the footnote: text with no chrome
            continue
        inset = b["bw"] / 2                # SVG strokes straddle the edge
        common = (f'fill="{bg}" stroke="{bc}" stroke-width="{b["bw"]}"'
                  if b["bw"] else f'fill="{bg}" stroke="none"')
        if b["radius"] == "circle":
            out.append(f'<ellipse cx="{b["x"] + b["w"] / 2:.2f}" '
                       f'cy="{b["y"] + b["h"] / 2:.2f}" '
                       f'rx="{b["w"] / 2 - inset:.2f}" '
                       f'ry="{b["h"] / 2 - inset:.2f}" {common}/>')
        else:
            out.append(f'<rect x="{b["x"] + inset:.2f}" y="{b["y"] + inset:.2f}" '
                       f'width="{b["w"] - b["bw"]:.2f}" '
                       f'height="{b["h"] - b["bw"]:.2f}" '
                       f'rx="{b["radius"]}" {common}/>')


def draw_text(data, out):
    """Emit one <text> per run, pinned to the width the browser measured.

    An <img>-embedded SVG cannot use the page's webfonts, so a reader whose
    machine has no Palatino gets a substitute.  textLength holds every run to
    the width laid out here, so a substituted face cannot spill a label out of
    its box; lengthAdjust spreads the difference over glyphs and spacing.
    """
    for t in data["texts"]:
        style = (f'font-family="{FONT_STACK}" font-size="{t["size"]:.1f}" '
                 f'fill="{t["fill"]}"')
        if t["weight"] not in ("400", "normal"):
            style += f' font-weight="{t["weight"]}"'
        if t["style"] != "normal":
            style += f' font-style="{t["style"]}"'
        for ln in t["lines"]:
            for seg in ln["segs"]:
                if seg["kind"] == "w":
                    out.append(
                        f'<text x="{seg["x"]:.2f}" y="{ln["baseline"]:.2f}" '
                        f'textLength="{seg["w"]:.2f}" '
                        f'lengthAdjust="spacingAndGlyphs" {style}>'
                        f'{esc(seg["t"])}</text>')
                else:
                    # MathJax's SVG output is glyph outlines: no font needed.
                    svg = re.sub(r'\s(width|height)="[^"]*"', '', seg["svg"], count=2)
                    svg = svg.replace(
                        "<svg ",
                        f'<svg x="{seg["x"]:.2f}" y="{seg["y"]:.2f}" '
                        f'width="{seg["w"]:.2f}" height="{seg["h"]:.2f}" ', 1)
                    out.append(svg)


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COMPONENT = os.path.join(ROOT, "scripts", "mindmap", "Recognition Mind Map.dc.html")
TARGET = os.path.join(ROOT, "assets", "images", "recognition-mindmap.svg")


def main():
    component = sys.argv[1] if len(sys.argv) > 1 else COMPONENT
    target = sys.argv[2] if len(sys.argv) > 2 else TARGET
    data = collect(component, os.path.join(os.path.dirname(component), "extract.js"))
    x0, y0, x1, y1 = bounds(data)

    body = []
    draw_boxes(data, body)
    draw_text(data, body)

    edges = "".join(
        f'<line x1="{e["x1"]}" y1="{e["y1"]}" x2="{e["x2"]}" y2="{e["y2"]}" '
        f'stroke="{e["stroke"]}" stroke-width="{e["width"]}" '
        f'stroke-opacity="{e["opacity"]}" stroke-linecap="round"/>'
        for e in data["edges"])

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'xmlns:xlink="http://www.w3.org/1999/xlink" '
        f'viewBox="{x0:.0f} {y0:.0f} {x1 - x0:.0f} {y1 - y0:.0f}" '
        f'width="100%" role="img" '
        f'aria-label="From image to accuracy: a mind map of the recognition '
        f'machine, its test procedure, and what the test establishes">'
        f'<title>From image to accuracy</title>'
        f'<rect x="{x0:.0f}" y="{y0:.0f}" width="{x1 - x0:.0f}" '
        f'height="{y1 - y0:.0f}" fill="{PAGE_BG}"/>'
        f'<g>{edges}</g>{"".join(body)}</svg>')

    with open(target, "w") as fh:
        fh.write(svg)
    print(f"wrote {target}  {len(svg) / 1024:.0f} KB  "
          f"viewBox {x1 - x0:.0f}x{y1 - y0:.0f}  "
          f"{len(data['boxes'])} boxes, {len(data['edges'])} edges, "
          f"{sum(len(t['lines']) for t in data['texts'])} text lines")


if __name__ == "__main__":
    main()
