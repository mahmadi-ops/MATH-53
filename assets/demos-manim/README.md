# Manim-style interactive demos

`axb.html` is a self-contained (zero-dependency, ~30 KB) interactive figure for
matrix transformations `T(x) = Ax` with `m, n ≤ 3`, styled after
3Blue1Brown/Manim: dark scene, glowing vectors, eased build-in animation,
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
| `show` | `true` shows the solution set of `T(x)=b` in the input pane (violet) |
| `lock` | `true` constrains dragging of `x` to the solution set          |
| `theme`| `dark` (default) or `light`                                    |

The range of `T` is always drawn in the output pane (teal): a line, a plane
patch, or a full-pane tint when the map is onto. Null space, column space,
rank, and the particular solution are computed in-page by row reduction, so
any small matrix works unmodified, e.g.

    axb.html?mat=1,2,-1:2,4,-2&x=1,1,1&show=true&theme=light

## columns.html

`columns.html` is a companion single-pane figure for column space and rank:
it draws every column of an `m x n` matrix (`m ≤ 3`, any `n`) as a vector in
`R^m`, computes the pivot columns in-page by row reduction, highlights them
(yellow) against the non-pivot columns (grey), and shades their span — the
column space — in teal (a line, a plane patch, or a full-pane tint when
`Col A` is all of `R^m`). Same manim styling and behaviors as `axb.html`:
eased build-in (columns appear one at a time, then the span), replayable via
the animate button, ambient rotation and drag-to-rotate for 3D, and
`prefers-reduced-motion` support.

| Param  | Meaning                                                        |
|--------|----------------------------------------------------------------|
| `mat`  | matrix rows separated by `:`, entries by `,`                   |
| `range`| axis range (default: auto from the largest entry)              |
| `theme`| `dark` (default) or `light`                                    |

    columns.html?mat=1,2,1,3,2:1,3,6,0,2:3,7,8,6,6&range=9&theme=dark

## volume.html

`volume.html` illustrates vol P(u,v,w) = |det[u|v|w]|: the parallelepiped
spanned by three draggable vectors in `R^3`, with the base parallelogram
shaded, the normal `n = u x v` drawn, the dashed height drop from the tip of
`w`, and a live readout of base area, height, determinant, and volume.
Params: `u`, `v`, `w` (comma-separated vectors), `range` (default 5),
`theme`. Same manim styling and behaviors (build-in, replay, drag-rotate,
reduced motion) as the other demos.

    volume.html?u=2,0,0&v=1,2,0&w=0.5,0.5,1.5&theme=dark

## jacobian.html

`jacobian.html` shows the Jacobian determinant of `T(x) = Ax` as a volume
factor: a slider (and looping animate button) morphs the identity into `A`
through `A_t = (1-t)I + tA`, carrying the dashed unit cube to the
parallelepiped with edges `A_t e_1, A_t e_2, A_t e_3`, while a readout
tracks `det A_t` = volume of the image box. Params: `mat` (3 rows), `range`
(default: auto), `theme`.

    jacobian.html?mat=2,1,0:0,3,0:0,0,1&theme=dark
