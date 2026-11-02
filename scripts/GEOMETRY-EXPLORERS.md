The three course geometry explorers are authored in `assets/demos-manim/` and
embedded in the existing PreTeXt source. They share `geometry-core.js`,
`geometry-explorers.css`, and the book's existing theme, fonts, and iframe sizing.
They require no external JavaScript libraries, narration, or video downloads.

| Section/source | Explorer | Location |
|---|---|---|
| `source/linear-systems/sec-systems-of-linear-equations.ptx` | `solution-set.html` | After the parametric example and its geometric interpretation |
| `source/linear-transformations/sec-transformations.ptx` | `transformation-geometry.html` | Before the opening ℝ³ → ℝ⁴ example; refers to the existing matrix-multiplication example |
| `source/vector-spaces/sec-coordinates.ptx` | `change-of-basis.html` | Extends the existing same-vector/two-coordinate-systems example |

The explorers are unnumbered additions so existing example numbers and IDs stay
stable. In Section 7.4, open “The Same Vector in Two Coordinate Systems” to see
the animation below its static diagrams.

Build and preview with the project's pinned PreTeXt environment:

```sh
pretext build web --no-generate
pretext view web
```

Open `sec-systems-of-linear-equations.html`, `sec-transformations.html`, and
`sec-coordinates.html` in the preview. To inspect just the demos, serve the
repository with `python -m http.server 8000` and visit:

- `http://localhost:8000/assets/demos-manim/solution-set.html`
- `http://localhost:8000/assets/demos-manim/transformation-geometry.html`
- `http://localhost:8000/assets/demos-manim/change-of-basis.html`

Checks use Node, Python's Playwright package, and installed Chromium:

```sh
node scripts/check-geometry-math.cjs
python scripts/check-geometry-explorers.py
```

The math checks independently substitute points into the equations and compare
coefficient/augmented ranks for the three third-plane cases. They verify the
basis images, lost z-direction, and the fixed-vector sum through 101 intermediate
bases. The plane explorer uses the equivalent pair
`x1 - 2x2 - 7x3 = -1`, `x1 - 9x2 = 6` to separate the planes visually while
preserving the original solution line. The new second equation is -6 times the
original first equation minus 7 times the original second equation. Its plane
meets the first at about 73 degrees. Rectangular patches lie exactly on their
planes, and the camera fits all patch corners with margins at every rotation.
The fit includes every preset so switching equations keeps the same scale.
Axes within each view keep equal unit scales. Browser checks cover clipping
through 144 camera/preset/slider cases, equation readouts, preset changes,
head-to-tail arrows, fixed endpoint, keyboard controls, complete playback and
reset, 375-pixel layouts, reduced motion, no-JavaScript fallbacks, and the three
rebuilt book embeds. Book embeds are tested with unrelated external services
blocked; the new demos themselves make no third-party requests.

After changing a diagram, refresh its static SVG and preview, then build again:

```sh
python scripts/check-geometry-explorers.py --write-previews
pretext build web --no-generate
python scripts/check-geometry-explorers.py
```

To refresh only the plane explorer's assets, add `--preview solution-set` to the
export command. All mathematical and browser checks still run.

The export option additionally uses `scripts/requirements-figures.txt`. It
writes the three `assets/images/*-static.svg` files with embedded Pagella subsets
and `generated-assets/preview/int-*-preview.png` screenshots. The static SVGs are
also the no-JavaScript fallbacks and the PreTeXt print representations. The
adjacent source paragraphs and demo guided steps explain each diagram in text.
Commit generated assets with source changes; publishing uses these reviewed
assets without rerunning browser or figure generation.

The change-of-basis interpolation is
`b1(t) = (1+t,0)`, `b2(t) = (-t,1)`, for `0 <= t <= 1`.
Its determinant is `1+t > 0`; the coordinates are `((1+2t)/(1+t),2)`.
Thus the contributions `(1+2t,0)` and `(-2t,2)` always add to `(1,2)`.
