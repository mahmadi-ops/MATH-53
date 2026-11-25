Static graphs use the book's olive (`#4A5D23`), wine (`#5E011C`), dark mustard
(`#876801`), neutral greys, and pale olive/wine fills. Photographs and pixel
matrices keep their original data values and colors. Figure captions and image
descriptions name the corresponding accents.

To regenerate the 41 PreFigure diagrams, three TikZ figures, and recognition
mind map with the book's fonts, use Python 3.12, Node 22+, XeLaTeX, and Cairo:

```sh
pip install -r requirements.txt -r scripts/requirements-figures.txt
python scripts/build-book-figures.py
pretext build web --no-generate
```

Both GitHub workflows build with `--no-generate` and publish the committed,
reviewed figure files and interactive previews. Regenerate and commit these
assets with their sources using the authoring command above. Publication does
not require the figure-rendering dependencies or a browser download.
Use `--skip-mindmap` during authoring to reuse the committed mind-map SVG when
only other static figures have changed.
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

The chapter-one plane diagrams use the actual equations from the row-reduction
examples, with scalar equations and their common points or lines; three more
(`ch1-parallel-planes.svg`, `ch1-two-parallel-planes.svg`, `ch1-prism-planes.svg`)
are the print versions of the interactive figures in the example "Three Ways to
Have No Common Point". Regenerate them with
`python scripts/make-chapter-one-planes.py`, then use `--embed-only` as above to
embed the book fonts. Direct plane labels and highlighted common solutions identify
what each drawing represents; the inconsistent example includes a slice at x1=0
to separate the pairwise intersections. The script checks that its plane vertices and highlighted
solutions satisfy the corresponding equations.

PreTeXt cannot take a `<prefigure>` inside the `<static>` element of an
`<interactive>`, so the print version of a 2D interactive figure is kept as a
standalone PreFigure diagram in `scripts/prefigure/NAME.xml` and referenced from
`<static>` as `images/NAME`. `python scripts/build-book-figures.py --standalone`
builds every such diagram into `assets/images/NAME.svg` and `NAME.pdf` with the
book fonts (a full run of the script does this too). At present there are four:
`ch1-line-family`, for the two-line explorer of Section 1.1,
`ch4-shear-rotation`, for the three-shear explorer of Section 4.5,
`ch5-two-bases`, for the two-bases explorer of Section 5.2, and
`ch5-kernel`, for the kernel explorer of Section 5.3.

## Asymptote figures

One figure is drawn with Asymptote: `fig-plane-subspace` in Section 5.1 (a plane
through the origin with two vectors and a linear combination of them). Its code
is in the source, in an `<asymptote label="asymptote-plane-subspace">` element,
and follows the MATH 13 book: `import graph3`, vector rendering for print
(`settings.render=0` unless the output is HTML), an `addBox` call to leave room
in the interactive viewport, and the book's colours. The lettering is set in
Palatino (`mathpazo`) at 13 pt so that it stays readable on a phone.

The web version is a WebGL page that the reader can rotate
(`generated-assets/asymptote/asymptote-plane-subspace.html`); the print version
is the PDF beside it. Both are committed, because the deploy build does not
generate assets. To regenerate them:

```
pretext generate asymptote -x fig-plane-subspace
pretext generate asymptote -x fig-plane-subspace -t print
```

By default PreTeXt sends the code to the Asymptote server. Where that server
cannot be reached but `asy` is installed, add `asy-method="local"` to the
`<project>` element of `project.ptx` for the two commands and remove it again.

