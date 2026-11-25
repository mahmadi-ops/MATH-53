The course geometry explorers are authored in `assets/demos-manim/` and
embedded in the existing PreTeXt source. They share `geometry-core.js`,
`geometry-explorers.css`, and the book's existing theme, fonts, and iframe sizing.
They require no external JavaScript libraries, narration, or video downloads.

| Section/source | Explorer | Location |
|---|---|---|
| `source/linear-systems/sec-systems-of-linear-equations.ptx` | `line-family.html` | After the example "One Family, All Three Cases" |
| `source/linear-systems/sec-systems-of-linear-equations.ptx` | `solution-set.html` | After the parametric example and its geometric interpretation |
| `source/linear-systems/sec-row-reduction.ptx` | `planes.html` (six embeds, parameterized by `?sys=`) | Inside the unique-solution, inconsistent, and infinitely-many-solutions examples, and after each part of the "Three Ways to Have No Common Point" example |
| `source/vectors/sec-homogeneous-systems.ptx` | `translated-solutions.html` | Inside the example "Comparing a Homogeneous System with Its Non-Homogeneous Partner", after the figure "The picture to remember" |
| `source/linear-transformations/sec-transformations.ptx` | `transformation-geometry.html` | Before the opening ℝ³ → ℝ⁴ example; refers to the existing matrix-multiplication example |
| `source/matrix-algebra/sec-elementary-matrices.ptx` | `shear-rotation.html` | In the application "Rotating a Picture Using Only Shears", after the four-panel figure |
| `source/subspaces/sec-basis-dimension.ptx` | `two-bases.html` | After the example "Two Different Bases for the Same Subspace" and the figure of the two bases |
| `source/subspaces/sec-column-null-space.ptx` | `kernel.html` | After the example "The Null Space of A and the Kernel of T_A" |
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

## Math in the explorers

Labels, legends and readouts are written as plain strings whose math is marked
with dollar signs, for example `"Since $a ≠ 1$, the lines cross at $(x, y) = (2, −1)$."`.
`assets/demos-manim/book-math.js` turns the marked parts into the book's math
style (italic variables, upright numbers and operator names such as `det`, real
subscripts and superscripts from `x₁` and `ℝ³`), both in HTML
(`BookMath.set(element, string)`) and inside a picture (`scene.text` in
`geometry-core.js` calls `BookMath.svg`). Static HTML uses
`<span class="math">…</span>`, formatted when the page loads. Use
`BookMath.plain(string)` for `aria-valuetext`, `<desc>` and other plain text.
A caption with `role="status"` should be rewritten only when its string changes.
`node scripts/check-geometry-math.cjs` checks the formatter's rules. After
changing a label, refresh the static SVGs with
`python scripts/check-geometry-explorers.py --write-previews`.

## The two-line explorer

`line-family.html` (with `line-family.js`) shows the system `x + y = 1`,
`ax + y = b` of Section 1.1 for slider values of `a` and `b`. Its math helpers
(fractions, `classify`, equation text, clipping) are exported for Node, and
`node scripts/check-geometry-math.cjs` checks every slider position against the
formulas of the example: the classification, that the reported point satisfies
both equations, and that it equals `((b−1)/(a−1), (a−b)/(a−1))`. The print
version is a PreFigure diagram kept in `scripts/prefigure/ch1-line-family.xml`;
`python scripts/build-book-figures.py --standalone` rebuilds
`assets/images/ch1-line-family.svg` and `.pdf` from it.

## The three-shear explorer

`shear-rotation.html` (with `shear-rotation.js`) belongs to the Section 4.5
application "Rotating a Picture Using Only Shears". Its math helpers
(`coefficients`, `matrixAt`, `rotation`, `stageOf`) are exported for Node, and
`node scripts/check-geometry-math.cjs` checks, for all 37 slider angles, that
`H_a V_b H_a` equals the rotation matrix, that the same three shears row reduce
the rotation matrix to the identity (the method of the example), that every
partial product has determinant 1, and that the picture stays inside the
plotting window chosen for that angle (`windowFor`). The browser checks treat it like the other guided explorers.
The print version is a PreFigure diagram kept in
`scripts/prefigure/ch4-shear-rotation.xml` (the first shear at 60°, with arrows);
`python scripts/build-book-figures.py --standalone` rebuilds
`assets/images/ch4-shear-rotation.svg` and `.pdf` from it. That image is also the
explorer's no-JavaScript fallback.

## The two-bases explorer

`two-bases.html` (with `two-bases.js`) belongs to the Section 5.2 example "Two
Different Bases for the Same Subspace". Its math helpers (`weights`, `combine`,
`combination`, `snap`) are exported for Node, and
`node scripts/check-geometry-math.cjs` checks on all 81 slider positions that the
weights `(x, y)` and `(x − y, y)` rebuild `(x, y, 0)` in the two bases and that
every arrow stays inside the window. It has sliders and a draggable handle but no
guide, so `scripts/check-geometry-explorers.py` lists it under `SLIDERS`: readouts,
dragging, reset, the 375-pixel layout, the no-JavaScript picture and the book embed
are checked. The print version is a PreFigure diagram kept in
`scripts/prefigure/ch5-two-bases.xml` (the vector `(2, 1, 0)` in both bases);
`python scripts/build-book-figures.py --standalone` rebuilds
`assets/images/ch5-two-bases.svg` and `.pdf` from it.

## The kernel explorer

`kernel.html` (with `kernel.js`) belongs to the Section 5.3 example "The Null
Space of A and the Kernel of T_A". Its math helpers (`transform`, `coefficient`,
`inKernel`, `slide`) are exported for Node, and `node scripts/check-geometry-math.cjs`
checks on all 117 slider positions that the output is `(x + 2y)(1, 2, −1)`, that it
is zero exactly on the multiples of `(−2, 1)`, and that sliding along the kernel
does not change it. Like the two-bases explorer it is listed under `SLIDERS` in
`scripts/check-geometry-explorers.py`. The print version is a PreFigure diagram
kept in `scripts/prefigure/ch5-kernel.xml`.

## The translated-solutions explorer

`translated-solutions.html` (with `translated-solutions.js`) belongs to the
Section 2.3 example that compares a homogeneous system with its non-homogeneous
partner. Its data (the three shared left-hand sides, the constants `−1, 1, 0`,
`v_1 = (−1, 1, 0)`, and the two particular solutions `(0, 0, −1)` and
`(1, −1, −1)`) and its helpers are exported for Node, and
`node scripts/check-geometry-math.cjs` checks, for every slider position and
both particular solutions, that `s v_1` solves the homogeneous system, that
`p + s v_1` solves the non-homogeneous one, that both lie in the plane
`x + y = 0` drawn in the figure, and that the two particular solutions differ
by a homogeneous solution. `python scripts/check-geometry-explorers.py` checks
in the browser that the dashed copies meet at the tip of `w`, that this tip
stays on the olive line, and that nothing is clipped at any rotation.

The figure is numbered, because the text refers to it. Its print version and
no-JavaScript picture are `assets/images/ch2-translated-solutions.svg` and
`.pdf`, copied from the page at its starting position:

```sh
python scripts/make-translated-solutions-static.py
```

Run this after changing the drawing or a label, and commit both files.

## The three-plane explorer

`planes.html` (with `planes.js`) is parameterized by the system in the URL and
computes the solution set in the page by exact row reduction, so the three
Section 1.4 embeds need no per-figure code. Its pure math helpers (fraction
arithmetic, `rref`, `solve`, equation and parametric-line text, box clipping)
are exported for Node. A quick check that the solver reproduces the book's
answers for the three systems of Section 1.4 and the two-plane system of
Section 1.1 is:

```sh
node -e "const P=require('./assets/demos-manim/planes.js');for(const s of ['1,1,2,-1:2,1,3,0:0,-2,1,2','-3,-9,1,-9:2,6,-1,6:1,3,-1,2','2,1,3,1:1,2,-1,0:0,-6,10,2','1,-2,-7,-1:-1,3,6,0']){const r=P.solve(P.parseSystem(s));console.log(r.kind,r.point?P.pointText(r.point):'',r.kind==='line'?P.lineText(r):'')}"
```

The static print fallbacks for these embeds are the SVGs written by
`scripts/make-chapter-one-planes.py` (axis and equation labels use
`x₁, x₂, x₃`, matching the examples); re-embed their fonts with
`python scripts/build-book-figures.py --embed-only` after regenerating.
