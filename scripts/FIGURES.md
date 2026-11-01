Static graphs use the book's olive (`#4A5D23`), wine (`#5E011C`), dark mustard
(`#876801`), neutral greys, and pale olive/wine fills. Photographs and pixel
matrices keep their original data values and colors. Figure captions and image
descriptions name the corresponding accents.

To regenerate the 33 PreFigure diagrams, five TikZ figures, and recognition
mind map with the book's fonts, use Python 3.12, Node 22+, XeLaTeX, and Cairo:

```sh
pip install -r requirements.txt -r scripts/requirements-figures.txt
python scripts/build-book-figures.py
pretext build web --no-generate
```

Both GitHub workflows run the same figure builder before building the book.
The builder first refreshes the interactive QR metadata required by PreTeXt's
figure extraction; QR codes keep their normal black-and-white styling.
The builder restores the original OTF fonts from the book's self-hosted WOFF2
files into the ignored `.cache/figure-theme/` directory. A process-local
Fontconfig configuration gives XeLaTeX and Cairo the same Pagella font.
PreFigure's Node renderer uses the official MathJax Pagella font through the
scoped `figure-math-font.cjs` preload; installed library sources are unchanged.
The math rendering and accessible SVG variants retain their normal PreFigure
pipeline. The TikZ preamble uses Pagella text and Palatino math.

Standalone SVG charts embed subset Pagella fonts because an image cannot
inherit its containing page's stylesheet. After editing a standalone chart,
`python scripts/build-book-figures.py --embed-only` reapplies its font/palette
without changing any curve paths, points, or axes. The mind-map authoring
component uses locally installed, pinned browser dependencies during export;
its generated `support.js` remains unchanged.

`--xmlid FIGURE_ID` limits regeneration to a particular generated figure.
Commit the source and generated SVG/PDF assets together. The three live Sage
plots use the same accents and a serif stack headed by Pagella; remote Sage
servers fall back to Palatino or DejaVu Serif when Pagella is unavailable.
