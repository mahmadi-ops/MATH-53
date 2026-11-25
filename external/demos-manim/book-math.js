/* Math in the explorers, set the way the book's text sets it.

   The text of the book is typeset by MathJax in its Pagella font: variables
   are italic, numbers and operators upright, subscripts are real subscripts.
   The explorers do not load MathJax (several of them can sit on one page, and
   the labels inside a picture are redrawn on every frame of a rotation), so
   this file produces the same look from plain strings, using the book's own
   Pagella italic. Its letters are the ones the math font uses.

   A string marks its math with dollar signs:

       "Since $a ≠ 1$, the lines cross at $(x, y) = (2, −1)$."

   Between the dollars, letters become italic (operator names such as det stay
   upright), Unicode subscripts and superscripts (x₁, ℝ³) become real ones,
   an underscore makes the next character a subscript (V_b, for letters that
   have no Unicode subscript), and a hyphen becomes a minus sign. Everything outside the dollars is left
   alone, and a string without dollars is ordinary text. In HTML a line breaks
   inside math only before a relation sign or after a comma, never inside
   brackets, so a narrow screen does not split "(a − 1)x" in the middle.

     BookMath.set(element, string)       replace the element's content
     BookMath.fragment(string)           the same content, as a DocumentFragment
     BookMath.svg(textElement, string)   the same, inside an SVG <text>
     BookMath.plain(string)              the string without its dollar signs
     BookMath.enhance(root)              format each class="math" element in root

   enhance() runs by itself when the page has loaded, so static HTML only
   needs <span class="math">x + y = 1</span>. The styles are in
   geometry-explorers.css. The pure functions are exported for Node checks. */
(function (root) {
  "use strict";
  const SUBSCRIPT = {
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
    "₊": "+", "₋": "−", "₌": "=", "₍": "(", "₎": ")",
    "ₐ": "a", "ₑ": "e", "ₕ": "h", "ᵢ": "i", "ⱼ": "j", "ₖ": "k", "ₗ": "l", "ₘ": "m", "ₙ": "n", "ₒ": "o",
    "ₚ": "p", "ᵣ": "r", "ₛ": "s", "ₜ": "t", "ᵤ": "u", "ᵥ": "v", "ₓ": "x"
  };
  const SUPERSCRIPT = {
    "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
    "⁺": "+", "⁻": "−", "ⁱ": "i", "ⁿ": "n", "ᵀ": "T"
  };
  // Names that mathematics sets upright.
  const UPRIGHT = new Set(["det", "rank", "dim", "Span", "Col", "Nul", "Row", "ker", "Ker", "vol",
    "sin", "cos", "tan", "log", "ln", "exp", "max", "min"]);
  const LETTER = /[A-Za-z]/;

  // Split a piece of math into runs: { text, italic, level }, where level is
  // -1 for a subscript, 1 for a superscript and 0 for the main line.
  function runs(math) {
    const out = [];
    function push(text, italic, level) {
      const last = out[out.length - 1];
      if (last && last.italic === italic && last.level === level) last.text += text;
      else out.push({ text, italic, level });
    }
    const source = math.replace(/-/g, "−");
    for (let i = 0; i < source.length;) {
      const ch = source[i];
      if (LETTER.test(ch)) {
        let j = i + 1;
        while (j < source.length && LETTER.test(source[j])) j++;
        const word = source.slice(i, j);
        push(word, !UPRIGHT.has(word), 0);
        i = j;
      } else if (ch === "_" && i + 1 < source.length) {
        // An underscore makes the next character a subscript, for letters such
        // as b that have no Unicode subscript form: V_b.
        push(source[i + 1], LETTER.test(source[i + 1]), -1);
        i += 2;
      } else {
        const below = SUBSCRIPT[ch], above = SUPERSCRIPT[ch];
        if (below !== undefined) push(below, LETTER.test(below), -1);
        else if (above !== undefined) push(above, LETTER.test(above), 1);
        else push(ch, false, 0);
        i++;
      }
    }
    return out;
  }
  // Where a line may break inside a piece of math: outside all brackets, before
  // a relation sign or after a comma, semicolon or colon. Returns the parts
  // between those places; joined by single spaces they give the math back.
  const RELATION = "=≠≤≥<>≈→↦∈";
  function unbreakable(math) {
    const parts = [];
    let depth = 0, start = 0;
    for (let i = 0; i < math.length; i++) {
      const ch = math[i];
      if ("([{".includes(ch)) depth++;
      else if (")]}".includes(ch)) depth = Math.max(0, depth - 1);
      else if (ch === " " && depth === 0 && i > start && i + 1 < math.length &&
               (RELATION.includes(math[i + 1]) || ",;:".includes(math[i - 1]))) {
        parts.push(math.slice(start, i));
        start = i + 1;
      }
    }
    parts.push(math.slice(start));
    return parts;
  }
  // The pieces of a string: text outside the dollars, math between them.
  function pieces(string) {
    return String(string).split("$").map((text, k) => ({ text, math: k % 2 === 1 })).filter(p => p.text !== "");
  }
  const plain = string => String(string).replace(/\$/g, "");

  const api = { runs, unbreakable, pieces, plain };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const KEEP_TOGETHER = 30;     // characters: longer parts may wrap, so nothing overflows a phone
  function mathContent(math) {
    const content = document.createDocumentFragment();
    unbreakable(math).forEach((part, k) => {
      if (k) content.append(" ");
      let target = content;
      if (part.length <= KEEP_TOGETHER && part.includes(" ")) {
        target = document.createElement("span");
        target.className = "together";
        content.append(target);
      }
      runs(part).forEach(run => {
        let node = document.createTextNode(run.text);
        if (run.italic) { const i = document.createElement("i"); i.append(node); node = i; }
        if (run.level) { const s = document.createElement(run.level < 0 ? "sub" : "sup"); s.append(node); node = s; }
        target.append(node);
      });
    });
    return content;
  }
  function fragment(string) {
    const content = document.createDocumentFragment();
    pieces(string).forEach(piece => {
      if (!piece.math) { content.append(piece.text); return; }
      const span = document.createElement("span");
      span.className = "math"; span.dataset.math = "";
      span.append(mathContent(piece.text));
      content.append(span);
    });
    return content;
  }
  function set(element, string) { element.replaceChildren(fragment(string)); }

  // SVG has no <sub>: a subscript is a smaller <tspan> moved down, and the
  // run after it moves back up. dy is in ems of the tspan it is written on.
  const SHIFT = { "-1": 0.22, "0": 0, "1": -0.42 }, SMALL = 0.707;
  function svg(textElement, string) {
    textElement.textContent = "";
    let shift = 0;                       // of the baseline, in ems of the label's own size
    pieces(string).forEach(piece => {
      (piece.math ? runs(piece.text) : [{ text: piece.text, italic: false, level: 0 }]).forEach(run => {
        const part = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        const target = SHIFT[run.level], scale = run.level ? SMALL : 1;
        if (run.level) part.setAttribute("font-size", SMALL * 100 + "%");
        if (run.italic) part.setAttribute("font-style", "italic");
        if (target !== shift) part.setAttribute("dy", ((target - shift) / scale).toFixed(3) + "em");
        shift = target;
        part.textContent = run.text;
        textElement.append(part);
      });
    });
  }
  function enhance(scope = document) {
    scope.querySelectorAll(".math:not([data-math])").forEach(element => {
      element.dataset.math = "";
      element.replaceChildren(mathContent(element.textContent));
    });
  }

  root.BookMath = { ...api, fragment, set, svg, enhance };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => enhance());
  else enhance();
}(typeof window !== "undefined" ? window : globalThis));
