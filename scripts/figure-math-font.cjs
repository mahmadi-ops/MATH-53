// PreFigure currently fixes its SVG math font to New Computer Modern.
// Scope this supported Node preload to that converter and use the same
// official MathJax Pagella font package as the book's browser output.
const {createRequire} = require('node:module');
const {resolve, basename} = require('node:path');
if (process.argv[1] && basename(process.argv[1]) === 'mj-sre-page.js') {
  const load = createRequire(resolve(process.argv[1]));
  const fonts = load('@mathjax/mathjax-newcm-font/js/svg.js');
  fonts.MathJaxNewcmFont = load('@mathjax/mathjax-pagella-font/js/svg.js').MathJaxPagellaFont;
}
