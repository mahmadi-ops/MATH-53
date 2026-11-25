/* Two bases for the xy-plane H in R^3 (Section 5.2, "Two Different Bases for the
   Same Subspace"): the standard one, e1, e2, and the second one, e1, e1 + e2.
   Every vector (x, y, 0) of H is written in each basis:
       (x, y, 0) = x e1 + y e2 = (x − y) e1 + y (e1 + e2).
   The plane is seen from above, so only x and y are drawn. Two sliders, or the
   round handle at the tip of the vector, move the vector in steps of 1/2.
   Optional URL parameters x and y set the starting vector, e.g.
   two-bases.html?x=1&y=2. The pure math helpers are exported for Node checks. */
(function (root) {
  "use strict";

  // Each basis as two vectors of R^3, with the names used in the readouts.
  const BASES = {
    standard: { vectors: [[1, 0, 0], [0, 1, 0]], names: ["e₁", "e₂"] },
    second: { vectors: [[1, 0, 0], [1, 1, 0]], names: ["e₁", "(e₁ + e₂)"] }
  };
  // The weights of (x, y, 0) on the two vectors of each basis.
  const weights = (x, y) => ({ standard: [x, y], second: [x - y, y] });
  const combine = (basis, w) => [0, 1, 2].map(k => w[0] * basis.vectors[0][k] + w[1] * basis.vectors[1][k]);
  const number = x => (Math.abs(x) < 0.0005 ? "0" : Number(x.toFixed(3)).toString()).replace(/-/g, "−");
  const tuple = p => "(" + p.map(number).join(", ") + ")";
  // A weight as it is written in front of a vector: 2, 1, 0, (−1.5).
  const factor = c => c < 0 ? "(" + number(c) + ")" : number(c);
  // "2e₁ + 1e₂", "(−1)e₁ + 2(e₁ + e₂)"
  const combination = (basis, w) => factor(w[0]) + basis.names[0] + " + " + factor(w[1]) + basis.names[1];
  const snap = (value, lo, hi) => Math.max(lo, Math.min(hi, Math.round(value * 2) / 2));

  const api = { BASES, weights, combine, number, tuple, factor, combination, snap };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const G = root.BookGeometry, M = root.BookMath, C = G.colors, $ = id => document.getElementById(id);
  const RX = 4.4, RY = 2.6, UNIT = 50, size = [2 * RX * UNIT, 2 * RY * UNIT];
  const LIMIT = 2;                                   // |x|, |y| ≤ 2, so every arrow stays in the window
  const project = p => [size[0] / 2 + UNIT * p[0], size[1] / 2 - UNIT * p[1]];
  const sliders = { x: $("x"), y: $("y") };
  const params = new URLSearchParams(location.search);
  const start = {};
  ["x", "y"].forEach(name => {
    const value = parseFloat(params.get(name));
    start[name] = Number.isFinite(value) ? snap(value, -LIMIT, LIMIT) : +sliders[name].value;
    sliders[name].value = start[name];
  });

  // The part of the line point + t direction inside the window.
  function clip(point, direction) {
    let lo = -Infinity, hi = Infinity;
    [RX, RY].forEach((r, k) => {
      if (Math.abs(direction[k]) < 1e-12) { if (Math.abs(point[k]) > r) lo = Infinity; return; }
      const ends = [(-r - point[k]) / direction[k], (r - point[k]) / direction[k]].sort((u, v) => u - v);
      lo = Math.max(lo, ends[0]); hi = Math.min(hi, ends[1]);
    });
    return lo < hi ? [lo, hi].map(t => [point[0] + t * direction[0], point[1] + t * direction[1]]) : null;
  }

  const panels = ["standard", "second"].map(key => {
    const svg = $("scene-" + key), scene = new G.Scene(svg, project);
    // The handle is kept between redraws, so a drag is not interrupted.
    const handle = G.node("circle", { r: 13, class: "handle", "data-handle": "" });
    svg.append(handle);
    return { key, svg, scene, handle, basis: BASES[key] };
  });

  function drawPanel(panel, x, y) {
    const { scene, basis } = panel, w = weights(x, y)[panel.key];
    const b = basis.vectors.map(v => v.slice(0, 2)), tip = [x, y];
    const parts = [G.scale(b[0], w[0]), G.scale(b[1], w[1])];
    scene.clear();
    // The grid of the basis: lines parallel to each basis vector.
    for (let k = -8; k <= 8; k++) {
      [[G.scale(b[1], k), b[0]], [G.scale(b[0], k), b[1]]].forEach(([point, direction]) => {
        const ends = clip(point, direction);
        if (ends) scene.line(ends[0], ends[1], C.grid, 1.1);
      });
    }
    scene.arrow([-RX + 0.05, 0], [RX - 0.05, 0], "#808080", 1.1);
    scene.arrow([0, -RY + 0.05], [0, RY - 0.05], "#808080", 1.1);
    scene.text([RX - 0.05, 0], "$x$", "#404040", [-12, 20]);
    scene.text([0, RY - 0.05], "$y$", "#404040", [9, 16]);
    // The two multiples of the basis vectors, and the parallelogram they span.
    scene.line(parts[0], tip, C.mustard, 1.6, { "stroke-dasharray": "5 4" });
    scene.line(parts[1], tip, C.olive, 1.6, { "stroke-dasharray": "5 4" });
    scene.arrow([0, 0], parts[0], C.olive, 6, { "stroke-opacity": 0.6, "fill-opacity": 0.6, "data-part": "first" });
    scene.arrow([0, 0], parts[1], C.mustard, 6, { "stroke-opacity": 0.6, "fill-opacity": 0.6, "data-part": "second" });
    // The basis vectors themselves.
    scene.arrow([0, 0], b[0], "#303030", 2, { "data-basis": "first" });
    scene.arrow([0, 0], b[1], "#303030", 2, { "data-basis": "second" });
    scene.text(b[0], "$e₁$", "#303030", [-8, 22], { "text-anchor": "middle" });
    scene.text(b[1], panel.key === "standard" ? "$e₂$" : "$e₁ + e₂$", "#303030",
      panel.key === "standard" ? [-12, 4] : [-12, -6], { "text-anchor": "end" });
    // The vector.
    scene.arrow([0, 0], tip, C.wine, 3.2, { "data-vector": "" });
    const above = y >= 0, right = x >= 0;
    scene.text(tip, "$" + tuple([x, y, 0]) + "$", C.wine, [right ? 16 : -16, above ? -14 : 26],
      { "text-anchor": right ? "start" : "end" });
    // Keep the label inside the frame.
    scene.layer.querySelectorAll("text").forEach(label => {
      const box = label.getBBox();
      if (!box.width) return;
      const dx = Math.max(6 - box.x, Math.min(0, size[0] - 6 - box.x - box.width));
      const dy = Math.max(6 - box.y, Math.min(0, size[1] - 6 - box.y - box.height));
      if (dx) label.setAttribute("x", +label.getAttribute("x") + dx);
      if (dy) label.setAttribute("y", +label.getAttribute("y") + dy);
    });
    const q = project(tip);
    panel.handle.setAttribute("cx", q[0]); panel.handle.setAttribute("cy", q[1]);

    const sum = combine(basis, w);
    M.set($("equation-" + panel.key), "$" + tuple([x, y, 0]) + " = " + combination(basis, w) + "$");
    M.set($("check-" + panel.key), "Check: $" + factor(w[0]) + tuple(basis.vectors[0]) + " + " + factor(w[1]) +
      tuple(basis.vectors[1]) + " = " + tuple(sum) + "$.");
    $("description-" + panel.key).textContent = "The vector " + tuple([x, y, 0]) + " as " + number(w[0]) + " times " +
      (panel.key === "standard" ? "e1 plus " + number(w[1]) + " times e2." : "e1 plus " + number(w[1]) + " times e1 + e2.");
  }

  function draw() {
    const x = +sliders.x.value, y = +sliders.y.value, w = weights(x, y);
    panels.forEach(panel => drawPanel(panel, x, y));
    $("x-value").value = number(x);
    $("y-value").value = number(y);
    M.set($("status"), "The same vector $" + tuple([x, y, 0]) + "$ has the weights $" + number(w.standard[0]) + "$ and $" +
      number(w.standard[1]) + "$ in the first basis, and $" + number(w.second[0]) + "$ and $" + number(w.second[1]) +
      "$ in the second: $x − y = " + number(x) + " − " + factor(y) + " = " + number(x - y) + "$.");
  }

  // Dragging the handle moves the vector; the sliders do the same from the keyboard.
  panels.forEach(panel => {
    const { svg, handle } = panel;
    let dragging = false;
    function move(event) {
      const box = svg.getBoundingClientRect();
      const px = (event.clientX - box.left) * size[0] / box.width, py = (event.clientY - box.top) * size[1] / box.height;
      const x = snap((px - size[0] / 2) / UNIT, -LIMIT, LIMIT), y = snap((size[1] / 2 - py) / UNIT, -LIMIT, LIMIT);
      if (x !== +sliders.x.value || y !== +sliders.y.value) { sliders.x.value = x; sliders.y.value = y; draw(); }
    }
    handle.addEventListener("pointerdown", event => { dragging = true; handle.setPointerCapture(event.pointerId); event.preventDefault(); });
    handle.addEventListener("pointermove", event => { if (dragging) move(event); });
    ["pointerup", "pointercancel"].forEach(type => handle.addEventListener(type, () => { dragging = false; }));
  });
  Object.values(sliders).forEach(slider => slider.addEventListener("input", draw));
  $("reset").addEventListener("click", () => { sliders.x.value = start.x; sliders.y.value = start.y; draw(); });
  document.querySelector(".live-explorer").hidden = false;
  draw();
  document.fonts.ready.then(draw);
  document.documentElement.classList.add("js-ready");
}(typeof window !== "undefined" ? window : globalThis));
