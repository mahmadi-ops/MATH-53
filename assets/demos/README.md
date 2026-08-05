# Interactive MathBox demos

This directory contains a self-contained build of the `Axequalsb` interactive
demo from *Interactive Linear Algebra* by Dan Margalit and Joseph Rabinoff,
used here under the GNU General Public License v3.

- Source: <https://github.com/QBobWatson/ila> (demo framework under `demos/`,
  © Dan Margalit and Joseph Rabinoff, GPL-3.0)
- The demo pages are parameterized by URL query string, e.g.
  `Axequalsb.html?mat=1,0:1,1:0,1&range2=5&closed=true&show=true`.
  Parameters: `mat` (matrix rows separated by `:`, entries by `,`),
  `x` (initial input vector), `range1`/`range2` (axis ranges of the
  input/output views), `show` (show the solution set), `lock` (constrain
  dragging of `x` to the solution set), `closed` (start the controls
  panel closed).

## Bundled third-party libraries (inside `js/demo.js` / `css/demo.css`)

- MathBox (Steven Wittens, MIT), built from Rabinoff's fork
  <https://github.com/QBobWatson/mathbox>, branch `jdr`
- three.js (MIT), threestrap (MIT), shadergraph (MIT)
- KaTeX and its fonts in `css/fonts/` (Khan Academy, MIT)
- dat.GUI (Apache-2.0), screenfull.js (MIT), domready (MIT)

## Rebuilding

These are generated files. To rebuild or add more demos (e.g. `twobytwo`),
clone the `ila` repository with its `mathbox` submodule (branch `jdr`, plus
its `shadergraph`/`threestrap` submodules), run `gulp build` in `mathbox`,
compile `demos/lib/demo2.coffee` with CoffeeScript 1.x (NOT bare mode — the
`"use strict"` prologue must stay inside the wrapper), concatenate it with
`mathbox-bundle.js` and the `demos/vendor/*.js` files into `js/demo.js`,
concatenate `demos/css/demo.css`, `demos/vendor/katex.css`, and `mathbox.css`
into `css/demo.css`, and render `demos/Axequalsb.mako` with Mako using a
CoffeeScript filter for the inline script block.
