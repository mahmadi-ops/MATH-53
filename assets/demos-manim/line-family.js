/* The family of systems  x + y = 1,  a x + y = b  from Section 1.1.
   The sliders move a and b in steps of 1/2; the classification (one solution,
   none, infinitely many) and the solution itself are computed exactly, with
   fractions. Optional URL parameters a and b set the starting values, e.g.
   line-family.html?a=1&b=3. The pure math helpers are exported for Node checks. */
(function (root) {
  "use strict";

  /* ---------- exact fractions [numerator, denominator] ---------- */
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
  function frac(n, d = 1) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return [n / g, d / g]; }
  const sub = (p, q) => frac(p[0] * q[1] - q[0] * p[1], p[1] * q[1]);
  const add = (p, q) => frac(p[0] * q[1] + q[0] * p[1], p[1] * q[1]);
  const mul = (p, q) => frac(p[0] * q[0], p[1] * q[1]);
  const div = (p, q) => frac(p[0] * q[1], p[1] * q[0]);
  const num = p => p[0] / p[1];
  const ONE = [1, 1];
  // Slider values are multiples of 1/2 (or any decimal with few digits).
  function fromNumber(x) { return frac(Math.round(x * 1000), 1000); }
  function text(p) {
    const sign = p[0] < 0 ? "−" : "", n = Math.abs(p[0]);
    return p[1] === 1 ? sign + n : sign + n + "/" + p[1];
  }
  // A number as it appears inside a product or after a plus sign.
  const wrapped = p => (p[0] < 0 || p[1] !== 1) ? "(" + text(p) + ")" : text(p);
  // "2x", "x", "−x", "0x", "(3/2)x", "−(3/2)x"
  function term(p, variable) {
    if (p[1] === 1) return (p[0] === 1 ? "" : p[0] === -1 ? "−" : text(p)) + variable;
    return (p[0] < 0 ? "−" : "") + "(" + Math.abs(p[0]) + "/" + p[1] + ")" + variable;
  }
  const secondEquation = (a, b) => term(a, "x") + " + y = " + text(b);

  /* ---------- the system ---------- */
  // Subtracting the first equation from the second gives (a − 1) x = b − 1.
  function classify(a, b) {
    const coefficient = sub(a, ONE), constant = sub(b, ONE);
    if (coefficient[0] !== 0) {
      const x = div(constant, coefficient);
      return { kind: "point", coefficient, constant, x, y: sub(ONE, x) };
    }
    return { kind: constant[0] === 0 ? "line" : "empty", coefficient, constant };
  }

  // The part of the line  point + t direction  inside the square |x|, |y| ≤ r.
  function clip(point, direction, r) {
    let lo = -Infinity, hi = Infinity;
    for (let k = 0; k < 2; k++) {
      if (Math.abs(direction[k]) < 1e-12) { if (Math.abs(point[k]) > r) return null; continue; }
      const ends = [(-r - point[k]) / direction[k], (r - point[k]) / direction[k]].sort((u, v) => u - v);
      lo = Math.max(lo, ends[0]); hi = Math.min(hi, ends[1]);
    }
    return lo < hi ? [lo, hi].map(t => [point[0] + t * direction[0], point[1] + t * direction[1]]) : null;
  }

  const api = { frac, fromNumber, text, term, secondEquation, classify, clip, add, sub, mul, div, num };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const G = root.BookGeometry, M = root.BookMath, C = G.colors, $ = id => document.getElementById(id);
  const R = 5, UNIT = 50, size = [560, 560];
  const scene = new G.Scene($("line-scene"), p => [size[0] / 2 + UNIT * p[0], size[1] / 2 - UNIT * p[1]]);
  const presets = { point: [2, 3], empty: [1, 3], line: [1, 1] };
  const sliders = { a: $("a"), b: $("b") };
  const params = new URLSearchParams(location.search);
  ["a", "b"].forEach(name => {
    const value = parseFloat(params.get(name)), slider = sliders[name];
    if (Number.isFinite(value) && value >= +slider.min && value <= +slider.max) slider.value = Math.round(value * 2) / 2;
  });

  function drawFrame() {
    for (let i = -R; i <= R; i++) {
      scene.line([i, -R], [i, R], C.grid, 1);
      scene.line([-R, i], [R, i], C.grid, 1);
    }
    scene.arrow([-R - 0.3, 0], [R + 0.35, 0], "#606060", 1.2);
    scene.arrow([0, -R - 0.3], [0, R + 0.35], "#606060", 1.2);
    scene.text([R + 0.35, 0], "$x$", "#404040", [-6, 22]);
    scene.text([0, R + 0.35], "$y$", "#404040", [10, 10]);
    [-4, -2, 2, 4].forEach(k => {
      scene.line([k, -0.1], [k, 0.1], "#606060", 1.2);
      scene.line([-0.1, k], [0.1, k], "#606060", 1.2);
      scene.text([k, 0], String(k).replace("-", "−"), "#505050", [0, 24], { "text-anchor": "middle", "font-size": 15 });
      scene.text([0, k], String(k).replace("-", "−"), "#505050", [-10, 5], { "text-anchor": "end", "font-size": 15 });
    });
  }

  function draw() {
    const a = fromNumber(+sliders.a.value), b = fromNumber(+sliders.b.value);
    const result = classify(a, b), an = num(a), bn = num(b);
    const equation = secondEquation(a, b);
    scene.clear();
    drawFrame();

    const first = clip([0, 1], [1, -1], R), second = clip([0, bn], [1, -an], R);
    // Label placement: each label is tried in a few positions, and the one that
    // stays clearest of the lines, the axis numbers, and the other labels is used.
    const distance = (c, point, direction) =>
      Math.abs((c[0] - point[0]) * direction[1] - (c[1] - point[1]) * direction[0]) / Math.hypot(...direction);
    const olive = [[0, 1], [1, -1]], mustard = [[0, bn], [1, -an]];
    const halfWidth = label => 0.095 * label.length;                 // in axis units
    function span(anchor, offset, mode, half) {                       // five points along a label
      const x0 = anchor[0] + offset[0] / UNIT, y = anchor[1] - offset[1] / UNIT + 0.13;
      const left = mode === "start" ? x0 : mode === "end" ? x0 - 2 * half : x0 - half;
      return [0, 0.25, 0.5, 0.75, 1].map(u => [left + 2 * half * u, y]);
    }
    const clearance = (points, lines, avoid) => Math.min(...points.map(c => Math.min(
      ...lines.map(([q, d]) => distance(c, q, d)), ...avoid.map(q => Math.hypot(c[0] - q[0], c[1] - q[1]))))) -
      (points.every(c => Math.abs(c[0]) <= R + 0.45 && Math.abs(c[1]) <= R + 0.2) ? 0 : 5);
    const best = options => options.sort((u, v) => v.score - u.score)[0];
    const avoid = [-4, -2, 2, 4].flatMap(k => [[-0.35, k], [k, -0.42]]);   // axis numbers
    let inside = true;

    if (result.kind === "line") {
      // One line carries both equations: every point of it is a solution.
      scene.line(first[0], first[1], C.wine, 9, { "stroke-opacity": 0.3, "stroke-linecap": "round" });
      scene.line(first[0], first[1], C.olive, 3.2);
      scene.line(first[0], first[1], C.mustard, 3.2, { "stroke-dasharray": "10 10" });
      scene.text([-2.2, 3.2], "both equations: $x + y = 1$", C.wine, [22, -2]);
    } else {
      scene.line(first[0], first[1], C.olive, 3.2);
      scene.text([-3.6, 4.6], "$x + y = 1$", C.olive, [-10, 18], { "text-anchor": "end" });
      avoid.push(...span([-3.6, 4.6], [-10, 18], "end", halfWidth("x + y = 1")));
      if (second) scene.line(second[0], second[1], C.mustard, 3.2);
      if (result.kind === "point") {
        const p = [num(result.x), num(result.y)];
        inside = Math.abs(p[0]) <= R && Math.abs(p[1]) <= R;
        if (inside) {
          const label = "(" + text(result.x) + ", " + text(result.y) + ")";
          const choice = best([1, 2].flatMap(ring => [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sy]) => {
            const offset = [13 * ring * sx, sy > 0 ? -13 * ring + (ring - 1) * 4 : 26 + 12 * (ring - 1)];
            const mode = sx > 0 ? "start" : "end", points = span(p, offset, mode, halfWidth(label));
            // Prefer the nearer ring unless the farther one is clearly less crowded.
            return { offset, mode, points, score: clearance(points, [olive, mustard], avoid) - 0.15 * (ring - 1) };
          })));
          scene.point(p, C.wine, 7, { "data-solution": "" });
          scene.text(p, "$" + label + "$", C.wine, choice.offset, { "text-anchor": choice.mode });
          avoid.push(p, ...choice.points);
        }
      }
      if (second) {
        // The mustard label sits beside its line, at one of five places along the visible part.
        const length = Math.hypot(1, an), unitNormal = [an / length, 1 / length];
        const options = [];
        [0.88, 0.12, 0.7, 0.3, 0.5].forEach(t => [1, -1].forEach(side => {
          const anchor = [second[0][0] + t * (second[1][0] - second[0][0]), second[0][1] + t * (second[1][1] - second[0][1])];
          const n = unitNormal.map(v => side * v);
          const mode = Math.abs(n[0]) < 0.2 ? "middle" : n[0] > 0 ? "start" : "end";
          const offset = [18 * n[0], -18 * n[1] + (side < 0 ? 12 : 0)];
          const points = span(anchor, offset, mode, halfWidth(equation));
          options.push({ anchor, offset, mode, score: clearance(points, [olive], avoid) });
        }));
        const choice = best(options);
        scene.text(choice.anchor, "$" + equation + "$", C.mustard, choice.offset, { "text-anchor": choice.mode });
      }
    }
    // Keep every label inside the frame.
    scene.layer.querySelectorAll("text").forEach(label => {
      const box = label.getBBox();
      const dx = Math.max(8 - box.x, Math.min(0, size[0] - 8 - box.x - box.width));
      const dy = Math.max(8 - box.y, Math.min(0, size[1] - 8 - box.y - box.height));
      if (dx) label.setAttribute("x", +label.getAttribute("x") + dx);
      if (dy) label.setAttribute("y", +label.getAttribute("y") + dy);
    });

    $("a-value").value = text(a);
    $("b-value").value = text(b);
    M.set($("second-equation"), "$" + equation + "$");
    // Readouts: math between dollar signs is set like the book's text.
    let status, derived, check;
    const values = "$a = " + text(a) + "$, $b = " + text(b) + "$. ";
    const subtract = "Subtracting the first equation from the second, $(a − 1)x = b − 1$ becomes ";
    if (result.kind === "point") {
      const solution = "$(x, y) = (" + text(result.x) + ", " + text(result.y) + ")$";
      status = values + "Since $a ≠ 1$, the lines have different slopes, $−1$ and $" +
        text(frac(-a[0], a[1])) + "$, and cross at exactly one point: " + solution + "." +
        (inside ? "" : " This point lies outside the window.");
      const isOne = result.coefficient[0] === 1 && result.coefficient[1] === 1;
      derived = subtract + "$" + term(result.coefficient, "x") + " = " + text(result.constant) + "$" +
        (isOne ? ", so" : ", so $x = " + text(result.x) + "$ and") + " $y = 1 − x = " + text(result.y) + "$.";
      check = "Check: $x + y = " + text(result.x) + " + " + wrapped(result.y) + " = " +
        text(add(result.x, result.y)) + "$, and $ax + y = (" + text(a) + ")(" + text(result.x) + ") + " +
        wrapped(result.y) + " = " + text(add(mul(a, result.x), result.y)) + "$.";
    } else if (result.kind === "empty") {
      status = values + "The lines $x + y = 1$ and $x + y = " + text(b) +
        "$ have the same slope but are different lines: they are parallel, and the system has no solution.";
      derived = subtract + "$0x = " + text(result.constant) + "$, that is, $0 = " + text(result.constant) +
        "$, which no $x$ satisfies.";
      check = "A solution would make $x + y$ equal to both $1$ and $" + text(b) + "$ at once.";
    } else {
      status = values + "Both equations are $x + y = 1$: the two lines coincide, and the system has " +
        "infinitely many solutions, the points $(x, y) = (t, 1 − t)$ for every real number $t$.";
      derived = subtract + "$0x = 0$, which every $x$ satisfies.";
      check = "Check: $t + (1 − t) = 1$ for every $t$, in both equations.";
    }
    M.set($("status"), status); M.set($("derived"), derived); M.set($("check"), check);
    $("scene-description").textContent = "The olive line x + y = 1 and the mustard line " + equation + ". " + M.plain(status);
    Object.keys(presets).forEach(kind => $("case-" + kind).setAttribute("aria-pressed", String(kind === result.kind)));
  }

  Object.values(sliders).forEach(slider => slider.addEventListener("input", draw));
  Object.entries(presets).forEach(([kind, [a, b]]) => {
    $("case-" + kind).addEventListener("click", () => { sliders.a.value = a; sliders.b.value = b; draw(); });
  });
  document.querySelector(".live-explorer").hidden = false;
  draw();
  document.fonts.ready.then(draw);
  document.documentElement.classList.add("js-ready");
}(typeof window !== "undefined" ? window : globalThis));
