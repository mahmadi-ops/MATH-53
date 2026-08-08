/* Render math in MathJax-Pagella so equations match the TeX Gyre Pagella
   body text set in custom.css.

   PreTeXt builds its MathJax configuration in mathjax_startup.js and assigns
   it to window.MathJax; it offers no hook for the font. This script is a
   parser-blocking <script> at the end of <body>, so it runs before that
   deferred module executes: we intercept the assignment, add the font, and
   then step out of the way so MathJax can replace the config object with its
   own API as usual. MathJax resolves 'mathjax-pagella' to
   @mathjax/mathjax-pagella-font on the same CDN it is loaded from. */
(function () {
    function withPagella(config) {
        if (config && typeof config === "object") {
            config.output = Object.assign({}, config.output, { font: "mathjax-pagella" });
        }
        return config;
    }

    if (window.MathJax) {
        // Load order changed under us; the config is already there to patch.
        withPagella(window.MathJax);
        return;
    }

    Object.defineProperty(window, "MathJax", {
        configurable: true,
        get: function () {
            return undefined;
        },
        set: function (config) {
            Object.defineProperty(window, "MathJax", {
                value: withPagella(config),
                writable: true,
                configurable: true,
                enumerable: true,
            });
        },
    });
})();
