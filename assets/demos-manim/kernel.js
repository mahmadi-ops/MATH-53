/* The kernel of T_A for A = [1 2; 2 4; −1 −2] (Section 5.3, "The Null Space of A
   and the Kernel of T_A"). T_A sends (x, y) in R^2 to (x + 2y)(1, 2, −1) in R^3, so
       Ker T_A = Nul A = Span{(−2, 1)},
   the line x + 2y = 0, and two inputs have the same output exactly when they
   differ by a multiple of (−2, 1). The picture is the domain R^2; the output is
   shown as a vector of numbers and as a point of the line Span{(1, 2, −1)}.
   Sliders, or the round handle at the tip of the input, move it in steps of 1/2.
   Optional URL parameters x and y set the starting input, e.g.
   kernel.html?x=-2&y=1. The pure math helpers are exported for Node checks. */
(function (root) {
  "use strict";

  const A = [[1, 2], [2, 4], [-1, -2]];
  const KERNEL = [-2, 1];                    // a basis of Ker T_A = Nul A
  const RANGE = [1, 2, -1];                  // every output is a multiple of this vector
  const transform = (x, y) => A.map(row => row[0] * x + row[1] * y);
  const coefficient = (x, y) => x + 2 * y;   // T(x, y) = coefficient · RANGE
  const inKernel = (x, y) => Math.abs(coefficient(x, y)) < 1e-9;
  const number = x => (Math.abs(x) < 0.0005 ? "0" : Number(x.toFixed(3)).toString()).replace(/-/g, "−");
  const tuple = p => "(" + p.map(number).join(", ") + ")";
  const snap = (value, lo, hi) => Math.max(lo, Math.min(hi, Math.round(value * 2) / 2));
  const LIMITS = { x: 3, y: 2 };
  // Sliding along the kernel in steps of (−1, 1/2), if the input stays in range.
  function slide(x, y, direction) {
    const next = [x + direction * KERNEL[0] / 2, y + direction * KERNEL[1] / 2];
    return Math.abs(next[0]) <= LIMITS.x && Math.abs(next[1]) <= LIMITS.y ? next : null;
  }

  const api = { A, KERNEL, RANGE, transform, coefficient, inKernel, number, tuple, snap, slide, LIMITS };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const G = root.BookGeometry, M = root.BookMath, C = G.colors, $ = id => document.getElementById(id);
  const RX = 4.2, RY = 2.8, UNIT = 50, size = [2 * RX * UNIT, 2 * RY * UNIT];
  const project = p => [size[0] / 2 + UNIT * p[0], size[1] / 2 - UNIT * p[1]];
  const svg = $("kernel-scene"), scene = new G.Scene(svg, project);
  // The handle is kept between redraws, so a drag is not interrupted.
  const handle = G.node("circle", { r: 13, class: "handle", "data-handle": "" });
  svg.append(handle);
  // The outputs: the line Span{(1, 2, −1)}, drawn as a number line for the coefficient c.
  const CMAX = 7.6, lineSize = [420, 96], lineUnit = lineSize[0] / (2 * CMAX);
  const line = new G.Scene($("output-scene"), p => [lineSize[0] / 2 + lineUnit * p[0], 44 - p[1]]);

  const sliders = { x: $("x"), y: $("y") };
  const params = new URLSearchParams(location.search);
  const start = {};
  ["x", "y"].forEach(name => {
    const value = parseFloat(params.get(name));
    start[name] = Number.isFinite(value) ? snap(value, -LIMITS[name], LIMITS[name]) : +sliders[name].value;
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

  function draw() {
    const x = +sliders.x.value, y = +sliders.y.value, c = coefficient(x, y), zero = inKernel(x, y);
    const output = transform(x, y);
    scene.clear();
    for (let i = -4; i <= 4; i++) scene.line([i, -RY], [i, RY], C.grid, 1);
    for (let i = -2; i <= 2; i++) scene.line([-RX, i], [RX, i], C.grid, 1);
    scene.arrow([-RX + 0.05, 0], [RX - 0.05, 0], "#808080", 1.1);
    scene.arrow([0, -RY + 0.05], [0, RY - 0.05], "#808080", 1.1);
    scene.text([RX - 0.05, 0], "$x$", "#404040", [-12, 20]);
    scene.text([0, RY - 0.05], "$y$", "#404040", [9, 16]);
    // The kernel, and the basis vector that spans it.
    const kernel = clip([0, 0], KERNEL);
    scene.line(kernel[0], kernel[1], C.wine, 4, { "data-kernel": "" });
    scene.arrow([0, 0], KERNEL, C.wine, 2, { "data-kernel-vector": "" });
    scene.text([3.3, -1.65], "$Ker T$", C.wine, [0, 26], { "text-anchor": "middle" });
    // All inputs with the same output: the line through the input parallel to the kernel.
    if (!zero) {
      const level = clip([x, y], KERNEL);
      scene.line(level[0], level[1], C.olive, 2, { "stroke-dasharray": "7 5", "data-level": "" });
    }
    scene.arrow([0, 0], [x, y], C.olive, 3.2, { "data-input": "" });
    // The label sits on the side of the input that faces away from the kernel.
    const away = c >= 0;
    scene.text([x, y], "$" + tuple([x, y]) + "$", C.olive, away ? [14, -16] : [-14, 28],
      { "text-anchor": away ? "start" : "end" });
    scene.layer.querySelectorAll("text").forEach(label => {
      const box = label.getBBox();
      if (!box.width) return;
      const dx = Math.max(6 - box.x, Math.min(0, size[0] - 6 - box.x - box.width));
      const dy = Math.max(6 - box.y, Math.min(0, size[1] - 6 - box.y - box.height));
      if (dx) label.setAttribute("x", +label.getAttribute("x") + dx);
      if (dy) label.setAttribute("y", +label.getAttribute("y") + dy);
    });
    const q = project([x, y]);
    handle.setAttribute("cx", q[0]); handle.setAttribute("cy", q[1]);

    // The output on the line of all outputs.
    line.clear();
    line.arrow([-CMAX + 0.1, 0], [CMAX - 0.1, 0], "#606060", 1.3);
    for (let k = -7; k <= 7; k++) {
      line.line([k, -5], [k, 5], "#606060", 1.2);
      if (k % 2 === 0 && k !== 0) line.text([k, 0], String(k).replace("-", "−"), "#505050", [0, 30], { "text-anchor": "middle", "font-size": 15 });
    }
    line.point([0, 0], C.wine, 6, { "data-zero": "" });
    line.text([0, 0], "$0$", C.wine, [0, 30], { "text-anchor": "middle", "font-size": 15 });
    line.point([c, 0], C.mustard, 8, { "data-output": "" });
    line.text([c, 0], "$c = " + number(c) + "$", C.mustard, [0, -18], { "text-anchor": "middle" });
    line.layer.querySelectorAll("text").forEach(label => {
      const box = label.getBBox();
      if (!box.width) return;
      const dx = Math.max(4 - box.x, Math.min(0, lineSize[0] - 4 - box.x - box.width));
      if (dx) label.setAttribute("x", +label.getAttribute("x") + dx);
    });

    $("x-value").value = number(x);
    $("y-value").value = number(y);
    M.set($("output"), "$T" + tuple([x, y]) + " = " + tuple(output) + " = " + number(c) + tuple(RANGE) + "$, with $c = x + 2y = " +
      number(x) + " + 2(" + number(y) + ") = " + number(c) + "$.");
    M.set($("status"), zero
      ? "This input is in the kernel: $T" + tuple([x, y]) + "$ is the zero vector, and $" + tuple([x, y]) + " = " +
        number(y) + tuple(KERNEL) + "$ is a multiple of $(−2, 1)$."
      : "This input is not in the kernel: its output is not the zero vector.");
    M.set($("same"), zero
      ? "The inputs with this output are exactly the points of the wine line, $t(−2, 1)$."
      : "Every input on the dashed line, $" + tuple([x, y]) + " + t(−2, 1)$, has the same output $" + tuple(output) + "$.");
    $("slide-back").disabled = !slide(x, y, -1);
    $("slide-on").disabled = !slide(x, y, 1);
    $("scene-description").textContent = "The input " + tuple([x, y]) + (zero ? " lies on the kernel, the wine line through the origin and the point (−2, 1)."
      : " does not lie on the kernel, the wine line through the origin and the point (−2, 1). A dashed line through the input, parallel to the kernel, marks the inputs with the same output.");
    $("output-description").textContent = "The output is " + number(c) + " times (1, 2, −1)." + (zero ? " It is the zero vector." : "");
  }

  function set(x, y) { sliders.x.value = x; sliders.y.value = y; draw(); }
  // Dragging the handle moves the input; the sliders do the same from the keyboard.
  let dragging = false;
  handle.addEventListener("pointerdown", event => { dragging = true; handle.setPointerCapture(event.pointerId); event.preventDefault(); });
  handle.addEventListener("pointermove", event => {
    if (!dragging) return;
    const box = svg.getBoundingClientRect();
    const px = (event.clientX - box.left) * size[0] / box.width, py = (event.clientY - box.top) * size[1] / box.height;
    const x = snap((px - size[0] / 2) / UNIT, -LIMITS.x, LIMITS.x), y = snap((size[1] / 2 - py) / UNIT, -LIMITS.y, LIMITS.y);
    if (x !== +sliders.x.value || y !== +sliders.y.value) set(x, y);
  });
  ["pointerup", "pointercancel"].forEach(type => handle.addEventListener(type, () => { dragging = false; }));
  Object.values(sliders).forEach(slider => slider.addEventListener("input", draw));
  [["slide-back", -1], ["slide-on", 1]].forEach(([id, direction]) => $(id).addEventListener("click", () => {
    const next = slide(+sliders.x.value, +sliders.y.value, direction);
    if (next) set(next[0], next[1]);
  }));
  $("to-kernel").addEventListener("click", () => set(KERNEL[0], KERNEL[1]));
  $("reset").addEventListener("click", () => set(start.x, start.y));
  document.querySelector(".live-explorer").hidden = false;
  draw();
  document.fonts.ready.then(draw);
  document.documentElement.classList.add("js-ready");
}(typeof window !== "undefined" ? window : globalThis));
