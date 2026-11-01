# Interactive figures

All nine figures share `book-theme.css`, which imports `../custom.css` for the
book's self-hosted TeX Gyre Pagella font, olive and wine accents, and pale
backgrounds. A darker shade of the book's mustard distinguishes the third
vector in the volume diagrams and the middle spring in the oscillator.
`book-theme.js` fits same-origin book iframes to their content, including controls
and captions that wrap on small screens. Keep these files, `assets/custom.css`,
and `assets/fonts/` in their relative locations for offline use.

Older links with `theme=dark` or `theme=light` still work and now use the shared
book styling. Mathematical URL parameters and controls are unchanged.

## Course geometry explorers

| Page | Book placement | Main idea |
|------|----------------|-----------|
| `solution-set.html` | Section 1.1, after the parametric solution example | Two planes, a moving solution, and a third equation leaving a point, a line, or the empty set |
| `transformation-geometry.html` | Section 3.1, before the first example | `T(x,y,z) = (x+2y, 2x+y)` sends the basis vectors to matrix columns and loses the z-coordinate |
| `change-of-basis.html` | Section 7.4, in the same-vector/two-bases example | The grid and coordinates change while `(1,2)` stays fixed |

These three figures also share `geometry-explorers.css` and `geometry-core.js`.
Each has labeled native controls, a prediction prompt, a silent captioned guide,
readable guided steps, keyboard camera rotation where applicable, reduced-motion
steps, and an SVG/text fallback when JavaScript is disabled. They use no external
runtime libraries. Static SVGs in `assets/images/` embed the book font and are
also supplied through the PreTeXt `<static>` element for print output.

See [authoring and checking these explorers](../../scripts/GEOMETRY-EXPLORERS.md)
for the mathematical invariants, preview commands, and asset refresh procedure.

## eigenvectors.html

`eigenvectors.html` introduces the geometry in Section 8.1 using the matrix
`A = [[1, 2], [3, -4]]`. In a six-second, one-shot animation, `(2, 1)` doubles
to `(4, 2)`, then `(-1, 3)` reverses and stretches to `(5, -15)`. Both vectors
stay on their original lines. Each plot uses its own fixed, uniform coordinate
scale; the intermediate frames illustrate the change, not matrix powers.

Play/Pause, Replay, Start, Result, and a keyboard-operable progress slider let
readers inspect the motion. With reduced motion enabled, the final result
appears immediately and playback becomes a static “Show result” action. With
JavaScript disabled, the final SVGs and explanations remain visible. The page
uses the shared book theme and has no third-party runtime dependencies. A
screenshot of the final plots is tracked at
`generated-assets/preview/int-eigenvector-geometry-preview.png` for print output.

## axb.html

`axb.html` is an interactive figure with no third-party runtime dependencies for
matrix transformations `T(x) = Ax` with `m, n ≤ 3`, styled after
3Blue1Brown/Manim, with the book's light palette: glowing vectors, eased build-in animation,
ambient 3D rotation, and a playable demonstration loop.

Both the input vector `x` and the output vector `b` are draggable (`b` snaps to
the range; dragging it off marks the equation inconsistent and a solver finds
the nearest input otherwise). The `x` handle is keyboard-operable (Tab, then
arrow keys; Shift for whole steps) and changes are announced via an ARIA live
region. Honors `prefers-reduced-motion`.

## URL parameters

| Param  | Meaning                                                        |
|--------|----------------------------------------------------------------|
| `mat`  | matrix rows separated by `:`, entries by `,` (e.g. `1,0:1,1:0,1`) |
| `x`    | initial input vector (e.g. `-1,2`)                             |
| `range`| axis range of both views (default `5`)                         |
| `show` | `true` shows the solution set of `T(x)=b` in the input pane (deep wine) |
| `lock` | `true` constrains dragging of `x` to the solution set          |

The range of `T` is always drawn in the output pane (olive green): a line, a plane
patch, or a full-pane tint when the map is onto. Null space, column space,
rank, and the particular solution are computed in-page by row reduction, so
any small matrix works unmodified, e.g.

    axb.html?mat=1,2,-1:2,4,-2&x=1,1,1&show=true

## columns.html

`columns.html` is a companion single-pane figure for column space and rank:
it draws every column of an `m x n` matrix (`m ≤ 3`, any `n`) as a vector in
`R^m`, computes the pivot columns in-page by row reduction, highlights them
(olive green) against the non-pivot columns (grey), and shades their span — the
column space — in olive green (a line, a plane patch, or a full-pane tint when
`Col A` is all of `R^m`). Same manim styling and behaviors as `axb.html`:
eased build-in (columns appear one at a time, then the span), replayable via
the animate button, ambient rotation and drag-to-rotate for 3D, and
`prefers-reduced-motion` support.

| Param  | Meaning                                                        |
|--------|----------------------------------------------------------------|
| `mat`  | matrix rows separated by `:`, entries by `,`                   |
| `range`| axis range (default: auto from the largest entry)              |

    columns.html?mat=1,2,1,3,2:1,3,6,0,2:3,7,8,6,6&range=9

## volume.html

`volume.html` illustrates vol P(u,v,w) = |det[u|v|w]|: the parallelepiped
spanned by three draggable vectors in `R^3`, with the base parallelogram
shaded, the normal `n = u x v` drawn, the dashed height drop from the tip of
`w`, and a live readout of base area, height, determinant, and volume.
Params: `u`, `v`, `w` (comma-separated vectors), `range` (default 5).
It shares the book styling and behaviors (build-in, replay, drag-rotate,
reduced motion) of the other demos.

    volume.html?u=2,0,0&v=1,2,0&w=0.5,0.5,1.5

## jacobian.html

`jacobian.html` shows the Jacobian determinant of `T(x) = Ax` as a volume
factor: a slider (and looping animate button) morphs the identity into `A`
through `A_t = (1-t)I + tA`, carrying the dashed unit cube to the
parallelepiped with edges `A_t e_1, A_t e_2, A_t e_3`, while a readout
tracks `det A_t` = volume of the image box. Params: `mat` (3 rows), `range`
(default: auto).

    jacobian.html?mat=2,1,0:0,3,0:0,0,1

## springs.html

`springs.html` shows two carts joined by three springs, with buttons for general
motion, each normal mode, and their sum. The carts and their displacement traces
use olive green and deep wine; the middle spring uses mustard when active and
grey when its length stays fixed. Play/Pause and the reduced-motion preference
retain their existing behavior.

Static previews in `generated-assets/preview/` use the same typography and colors.
