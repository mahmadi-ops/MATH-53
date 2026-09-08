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

/* ------------------------------------------------------------------ *
 * Floating Socratic AI tutor for problems pages.                       *
 *                                                                      *
 * On any page of the Problems chapter (URL starts with "sec-problems") *
 * this adds a chat bubble fixed to the lower-right corner. Opening it  *
 * loads external/gemini-tutor.html in a panel that stays in place as   *
 * the student scrolls. The page's exercise STATEMENTS (never the       *
 * solutions) are harvested before MathJax typesets them — so the raw   *
 * \( ... \) LaTeX is intact — and handed to the tutor via postMessage  *
 * so it knows every problem on the page.                               *
 * ------------------------------------------------------------------ */
(function () {
    var page = window.location.pathname.split("/").pop() || "";
    if (page.indexOf("sec-problems") !== 0) return;
    var articles = document.querySelectorAll("article.exercise");
    if (!articles.length) return;

    // Harvest statements now, while the DOM still holds raw LaTeX.
    function clean(el) {
        var c = el.cloneNode(true);
        c.querySelectorAll(
            ".solution, .hint, .answer, .autopermalink, .knowl-output, iframe"
        ).forEach(function (n) { n.remove(); });
        return c.textContent.replace(/\s+/g, " ").trim();
    }
    var exercises = [];
    articles.forEach(function (a) {
        var heading = a.querySelector(".heading");
        var label = heading ? clean(heading).replace(/\s*\.$/, "") : "Problem";
        var body = a.cloneNode(true);
        var h = body.querySelector(".heading");
        if (h) h.remove();
        exercises.push({ label: label, text: clean(body) });
    });
    var sectionHeading = document.querySelector("section .heading .title");
    var context = {
        type: "math53-exercises",
        section: sectionHeading ? sectionHeading.textContent.trim() : document.title,
        exercises: exercises,
    };

    // Build the bubble + panel.
    var fab = document.createElement("button");
    fab.id = "m53-tutor-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "Open the AI tutor");
    fab.innerHTML = "&#127891; Tutor";

    var panel = document.createElement("div");
    panel.id = "m53-tutor-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Socratic AI tutor");
    panel.innerHTML =
        '<div id="m53-tutor-bar">' +
        '<span>Socratic tutor &mdash; hints, never answers</span>' +
        '<button type="button" id="m53-tutor-min" aria-label="Minimize">&#8211;</button>' +
        "</div>";
    var frame = null;

    function openPanel() {
        if (!frame) {
            frame = document.createElement("iframe");
            frame.id = "m53-tutor-frame";
            frame.src = "external/gemini-tutor.html";
            frame.addEventListener("load", function () {
                frame.contentWindow.postMessage(context, "*");
            });
            panel.appendChild(frame);
        }
        panel.classList.add("m53-open");
        fab.style.display = "none";
        try { localStorage.setItem("math53-tutor-open", "1"); } catch (e) {}
    }
    function closePanel() {
        panel.classList.remove("m53-open");
        fab.style.display = "";
        try { localStorage.setItem("math53-tutor-open", "0"); } catch (e) {}
    }

    fab.addEventListener("click", openPanel);
    panel.querySelector("#m53-tutor-min").addEventListener("click", closePanel);

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var wasOpen = false;
    try { wasOpen = localStorage.getItem("math53-tutor-open") === "1"; } catch (e) {}
    if (wasOpen) openPanel();

    // First visit only: pulse the button twice so new students notice it,
    // then never again on this browser.
    try {
        if (!wasOpen && !localStorage.getItem("math53-tutor-seen")) {
            localStorage.setItem("math53-tutor-seen", "1");
            setTimeout(function () {
                fab.classList.add("m53-pulse");
                fab.addEventListener("animationend", function () {
                    fab.classList.remove("m53-pulse");
                }, { once: true });
            }, 900);
        }
    } catch (e) {}
})();
