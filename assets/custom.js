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

/* Open and fit the inverse and IMT proof puzzles before Runestone measures them. */
(function () {
    var pair = document.querySelector("#imt-parsons-proofs, #inverse-parsons-proofs");
    if (!pair) return;
    var exercises = pair.querySelectorAll("details.exercise");
    exercises.forEach(function (exercise) {
        exercise.open = true;
    });

    // Runestone reserves a full problem's height in both columns. Fit the
    // positioned cards instead, without changing its sorter or grader.
    var frame = null;
    var dragSizes = new WeakMap();
    var options = { subtree: true, childList: true, attributes: true,
        attributeFilter: ["style", "class", "tabindex"] };
    var observer = new MutationObserver(schedule);

    function occupiedHeight(area, moving) {
        var top = area.getBoundingClientRect().top;
        var bottom = 0;
        Array.from(area.children).forEach(function (card) {
            if (card.classList.contains("block") && (!moving || card !== moving.view)) {
                bottom = Math.max(bottom, card.getBoundingClientRect().bottom - top);
            }
        });
        return Math.max(64, Math.ceil(bottom + 12));
    }
    function fit() {
        frame = null;
        observer.disconnect();
        exercises.forEach(function (exercise) {
            var problem = window.componentMap && window.componentMap["rs-" + exercise.id];
            if (!problem || !problem.blocks || !problem.blocks.length ||
                !problem.blocks.every(function (block) { return !!block.hammer; })) return;
            var areas = [problem.sourceArea, problem.answerArea];
            if (!areas.every(function (area) { return area && area.isConnected; })) return;
            var heights = areas.map(function (area) { return occupiedHeight(area, problem.moving); });
            if (problem.moving) {
                // Keep stable, generous drop targets while a pointer drag is
                // active; compact each column independently after the drop.
                var drag = dragSizes.get(problem);
                if (!drag || drag.card !== problem.moving) {
                    drag = { card: problem.moving, height: Math.ceil(Math.max.apply(null, heights) +
                        problem.moving.view.getBoundingClientRect().height + 12) };
                    dragSizes.set(problem, drag);
                }
                heights = [drag.height, drag.height];
            } else {
                dragSizes.delete(problem);
            }
            areas.forEach(function (area, index) {
                var height = heights[index] + "px";
                if (area.style.height !== height || area.style.getPropertyPriority("height") !== "important") {
                    area.style.setProperty("height", height, "important");
                }
                area.dataset.parsonsFittedHeight = String(heights[index]);
                area.dataset.parsonsFitMode = problem.moving ? "drag" : "fit";
            });
        });
        observer.observe(pair, options);
    }
    function schedule() {
        if (frame === null) frame = requestAnimationFrame(fit);
    }
    observer.observe(pair, options);
    new ResizeObserver(schedule).observe(pair);
    window.addEventListener("resize", schedule);
    pair.addEventListener("pointerup", schedule, true);
    pair.addEventListener("pointercancel", schedule, true);
    document.fonts.ready.then(schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    schedule();
})();

/* Unlock the parameter cases after correctly identifying the first error. */
(function () {
    var first = document.getElementById("task-row-first-error");
    var repair = document.getElementById("task-row-first-error-repair");
    if (!first || !repair) return;
    var unlocked = false;
    var note = document.createElement("p");
    note.className = "para";
    note.setAttribute("role", "status");
    note.setAttribute("aria-live", "polite");
    note.textContent = "Identify the first unjustified step to unlock part (b).";
    repair.before(note);
    repair.hidden = true;

    function update() {
        var question = window.componentMap && window.componentMap["rs-task-row-first-error"];
        if (unlocked || !question) return;
        var correct = question.correct === true && question.didSubmit;
        // Older Runestone versions restore the radio without restoring its
        // grade. Honor a correct submission saved by the native component.
        if (!correct && !question.didSubmit && typeof question.localStorageKey === "function") {
            try {
                var saved = JSON.parse(localStorage.getItem(question.localStorageKey()));
                correct = saved && saved.correct === "T" &&
                    saved.answer === String(question.correctIndexList[0]);
            } catch (_) {
                // Grading during the current visit also works without storage.
            }
        }
        if (correct) {
            unlocked = true;
            repair.hidden = false;
            note.textContent = "Part (b) is unlocked. Classify the parameter cases below.";
        }
    }
    // Observe native grading and saved-answer restoration without replacing
    // Runestone's radios, feedback, keyboard controls, or local storage.
    new MutationObserver(update).observe(first, { childList: true, subtree: true });
    first.addEventListener("click", update);
    update();
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
