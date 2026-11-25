/* Section 2.3, example "Comparing a Homogeneous System with Its Non-Homogeneous
   Partner": the two systems

       x + y + z = 0        x + y + z = −1
       x + y − z = 0        x + y − z =  1
       x + y     = 0        x + y     =  0

   The homogeneous solutions are the multiples v_h = s·v_1 of the basic solution
   v_1 = (−1, 1, 0), a line through the origin. Adding one particular solution
   p of the second system to each of them gives every solution of the second
   system, w = p + s·v_1: the same line, moved by p. The slider scales v_1; the
   guide then slides s·v_1 along p. A button swaps p = (0, 0, −1) for another
   particular solution, (1, −1, −1), and the line of sums does not change.

   Optional URL parameters: s (starting scalar), yaw, pitch.
   The pure math helpers are exported for the Node checks. */
(function (root) {
  "use strict";

  /* ---------- the two systems ---------- */
  const ROWS = [[1, 1, 1], [1, 1, -1], [1, 1, 0]];   // left-hand sides, shared
  const RHS = [-1, 1, 0];                             // the non-homogeneous constants
  const V1 = [-1, 1, 0];                              // the basic solution of the homogeneous system
  const PARTICULAR = [[0, 0, -1], [1, -1, -1]];       // two particular solutions
  const dot = (a, b) => a.reduce((sum, x, i) => sum + x * b[i], 0);
  const scaled = s => V1.map(x => s * x);
  const translate = (p, s) => p.map((x, k) => x + s * V1[k]);
  const leftSides = point => ROWS.map(row => dot(row, point));
  const number = x => (Math.abs(x) < .0005 ? "0" : Number(x.toFixed(3)).toString()).replace(/-/g, "−");
  // A left-hand side with the point's coordinates written in, e.g. "−1.5 + 1.5 − (−1)".
  function substituted(row, point) {
    let text = "";
    row.forEach((c, k) => {
      if (!c) return;
      const value = number(point[k]), negative = point[k] < -0.0005;
      if (text === "") text = (c < 0 ? "−" : "") + (c < 0 && negative ? "(" + value + ")" : value);
      else text += (c < 0 ? " − " : " + ") + (negative ? "(" + value + ")" : value);
    });
    return text || "0";
  }

  const api = { ROWS, RHS, V1, PARTICULAR, scaled, translate, leftSides, substituted, number };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const G = root.BookGeometry, M = root.BookMath, C = G.colors, $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const S_MAX = 2, STEP = 0.25;                       // slider range and step
  const FROM = -3.15, TO = 2.35;                      // the part of each line that is drawn, in multiples of v_1
                                                      // (the second particular solution reaches p₀ − 3v_1)
  const DARK = "#222", RUNG = [-2, -1, 0, 1, 2];
  const clampS = x => Math.max(-S_MAX, Math.min(S_MAX, Math.round(x / STEP) * STEP));
  const startS = Number.isFinite(parseFloat(params.get("s"))) ? clampS(parseFloat(params.get("s"))) : 1.5;
  const home = { yaw: +(params.get("yaw") || -156), pitch: +(params.get("pitch") || 18) };
  const camera = { ...home };
  // The drawing is wide and low. On a narrow screen it is laid out in a smaller
  // frame, so that its labels, whose size is fixed in frame units, stay legible.
  const WIDE = { size: [560, 260], padding: [44, 44] }, NARROW = { size: [400, 212], padding: [26, 34] };
  let frame = WIDE, size = frame.size;
  const bounds = [[-2.4, 2.4], [-2.4, 2.4], [-1.45, 1]];
  // The vertical plane x + y = 0 holds both lines, p and every vector drawn.
  const patch = [[FROM, -1.3], [TO, -1.3], [TO, .5], [FROM, .5]].map(([a, z]) => [V1[0] * a, V1[1] * a, z]);
  const fitPoints = patch.slice();
  bounds.forEach((b, k) => b.forEach(value => { const p = [0, 0, 0]; p[k] = value; fitPoints.push(p); }));

  const scene = new G.Scene($("translation-scene"), G.fittedProjector(camera, fitPoints, size, frame.padding));
  let s = startS, slide = 1, which = 0, guideStep = -1;   // slide: how far s·v_1 has moved along p (0 to 1)

  const tuple = point => "(" + point.map(number).join(", ") + ")";
  const captions = [
    "1. Scale. Every solution of the homogeneous system is a multiple $vₕ = sv₁$ of the basic solution $v₁ = (−1, 1, 0)$. As $s$ changes, the tip of $sv₁$ runs along the gray line through the origin.",
    "2. Add. Slide $sv₁$ along $p$ without turning it, until its tail sits at the tip of $p$. Its tip is now at $w = p + sv₁$, a solution of the non-homogeneous system.",
    "3. Every solution. Change $s$ again: the tip of $sv₁$ traces the gray line and the tip of $w = p + sv₁$ traces the olive line. The olive line is the gray line moved by $p$."
  ];
  const idle = "Move $s$, or press Play to follow the construction: scale $v₁$, then add $p$.";
  // The caption is a live region: write it only when it changes.
  let shown = idle;
  function caption(text) { if (text !== shown) { shown = text; M.set($("guide-caption"), text); } }

  function checks(point, targets) {
    return ROWS.map((row, i) => `$${substituted(row, point)} = ${number(targets[i])}$ ✓`).join(", ");
  }

  function draw() {
    scene.clear();
    scene.project = G.fittedProjector(camera, fitPoints, size, frame.padding);
    const p = PARTICULAR[which], p0 = PARTICULAR[0];
    const sv = scaled(s), w = translate(p, s);
    const moved = point => point.map((x, k) => x + slide * p[k]);   // a point carried part of the way along p
    const done = slide >= 1;

    scene.polygon(patch, C.gray, .045, { "stroke-opacity": .28, "stroke-width": 1 });
    scene.axes(bounds, ["x", "y", "z"]);
    // The plane's name is the least important label: the narrow frame has no room for it.
    if (frame === WIDE) scene.text(patch[3], "$x + y = 0$", "#606060", [2, -7], { style: "fill:#606060;font-size:14px", "data-label": "plane" });

    // Faint rungs: the same p carries each homogeneous solution to the olive line.
    RUNG.forEach(n => {
      const a = scaled(n), b = translate(p, n);
      scene.line(a, b, C.wine, 1.1, { "stroke-dasharray": "3 4", opacity: .38, "data-rung": "" });
      scene.point(a, C.gray, 2.6, { stroke: "none" });
      scene.point(b, C.olive, 2.6, { stroke: "none" });
    });

    // The two solution sets.
    scene.line(scaled(FROM), scaled(TO), C.gray, 2.4, { "data-line": "homogeneous" });
    scene.line(translate(p0, FROM), translate(p0, TO), C.olive, 2.4, { "data-line": "translated" });
    scene.text(scaled(FROM), "$Ax = 0$", "#505050", [0, -12], { style: "fill:#505050;font-size:15px", "data-label": "line-top" });
    scene.text(translate(p0, FROM), "$Ax = b$", C.olive, [0, 22], { style: "fill:" + C.olive + ";font-size:15px", "data-label": "line" });

    // The parallelogram swept so far, then the vectors.
    scene.polygon([[0, 0, 0], sv, moved(sv), moved([0, 0, 0])], C.mustard, .09, { stroke: "none" });
    if (done) scene.arrow([0, 0, 0], w, C.olive, 3.5, { "data-vector": "sum" });
    scene.arrow([0, 0, 0], sv, C.gray, 5, { "data-vector": "scaled" });
    scene.arrow([0, 0, 0], V1, DARK, 1.8, { "data-vector": "basic" });
    scene.arrow([0, 0, 0], p, C.wine, 3.5, { "data-vector": "particular" });
    if (slide > 0) {
      // A white casing keeps the dashes readable where they lie on the olive line.
      scene.line(moved([0, 0, 0]), moved(sv), "white", 7, { "stroke-dasharray": "8 5", "data-casing": "" });
      scene.arrow(moved([0, 0, 0]), moved(sv), C.gray, 3.4, { "stroke-dasharray": "8 5", "data-vector": "scaled-copy" });
      scene.arrow(sv, moved(sv), C.wine, 2.6, { "stroke-dasharray": "7 5", "data-vector": "particular-copy" });
    }
    scene.point(sv, C.gray, 4.5, { "data-tip": "scaled" });
    if (done) scene.point(w, C.olive, 6.5, { "data-tip": "sum" });

    // Labels, most important first; later ones give way when they would overlap.
    const side = s >= 0 ? -1 : 1;                      // keep p's label outside the parallelogram
    const labels = [];
    if (done) {
      // Below the olive line, on the side that has room for it.
      const x = scene.project(w)[0], left = x > size[0] - 132 || (s < 0 && x > 124);
      labels.push(scene.text(w, Math.abs(s) < 1e-9 ? "$w = p$" : "$w = p + sv₁$", C.olive, left ? [-112, 37] : [10, 25], { "data-label": "sum" }));
    }
    labels.push(scene.text(p.map(x => x / 2), "$p$", C.wine, [side < 0 ? -22 : 10, 6], { "data-label": "particular" }));
    if (Math.abs(s) > 1e-9) labels.push(scene.text(sv, Math.abs(s - 1) < 1e-9 ? "$sv₁ = v₁$" : "$sv₁$", "#404040", [s > 0 ? -8 : -34, -16], { "data-label": "scaled" }));
    if (Math.abs(s - 1) > 1e-9) labels.push(scene.text(V1, "$v₁$", DARK, [-10, -16], { "data-label": "basic" }));
    if (done && Math.abs(s) >= .5) labels.push(scene.text(sv.map((x, k) => x + p[k] / 2), "$p$", C.wine, [s > 0 ? 10 : -22, 6], { "data-label": "particular-copy" }));
    // Labels can be measured only while the picture is displayed. In the book it
    // starts inside a closed solution, and is drawn again when that opens.
    const measurable = $("translation-scene").getBoundingClientRect().width > 0;
    // Axis, line and plane labels come last, so they are the ones that move.
    const mine = new Set(labels);
    scene.layer.querySelectorAll("text").forEach(label => { if (!mine.has(label)) labels.push(label); });
    const box = el => el.getBBox();
    const hit = (a, b) => a.x < b.x + b.width + 3 && b.x < a.x + a.width + 3 && a.y < b.y + b.height + 1 && b.y < a.y + a.height + 1;
    const rises = new Set(["basic", "scaled", "line-top"]);
    if (measurable) labels.forEach((label, i) => {
      for (let pass = 0; pass < 5; pass++) {
        const own = box(label), other = labels.slice(0, i).find(l => hit(own, box(l)));
        if (!other) break;
        const theirs = box(other), up = rises.has(label.dataset.label) || (!label.dataset.label && own.y < theirs.y);
        label.setAttribute("y", +label.getAttribute("y") + (up ? theirs.y - 2 - (own.y + own.height) : theirs.y + theirs.height + 2 - own.y));
      }
    });
    // Keep labels inside the frame at every rotation.
    if (measurable) scene.layer.querySelectorAll("text").forEach(label => {
      const b = label.getBBox();
      const dx = Math.max(12 - b.x, Math.min(0, size[0] - 12 - b.x - b.width));
      const dy = Math.max(12 - b.y, Math.min(0, size[1] - 12 - b.y - b.height));
      if (dx) label.setAttribute("x", +label.getAttribute("x") + dx);
      if (dy) label.setAttribute("y", +label.getAttribute("y") + dy);
    });

    // Controls and readout.
    $("scalar").value = s; $("scalar-value").value = number(s);
    $("scalar").setAttribute("aria-valuetext", `s = ${number(s)}; s v_1 = ${tuple(sv)}; w = p + s v_1 = ${tuple(w)}`);
    $("other-particular").setAttribute("aria-pressed", String(which === 1));
    M.set($("particular-name"), `A particular solution $p = ${tuple(p)}$`);
    const factor = s < 0 ? "(" + number(s) + ")" : number(s);     // a negative scalar is written in brackets
    M.set($("sum-equation"), `$w = p + sv₁ = ${tuple(p)} + ${factor}${tuple(V1)} = ${tuple(w)}$`);
    M.set($("scaled-check"), `Scale: $vₕ = sv₁ = ${factor}${tuple(V1)} = ${tuple(sv)}$ solves the homogeneous system: ${checks(sv, [0, 0, 0])}`);
    M.set($("sum-check"), `Add $p$: $w = ${tuple(w)}$ solves the non-homogeneous system: ${checks(w, RHS)}`);
    $("scene-description").textContent = `A gray line through the origin holds the homogeneous solutions s v_1, with v_1 = (−1, 1, 0). An olive line parallel to it holds the solutions p + s v_1 of the non-homogeneous system. With s = ${number(s)} and p = ${tuple(p)}: s v_1 = ${tuple(sv)} and w = p + s v_1 = ${tuple(w)}. Dashed copies of p and s v_1 complete the parallelogram of the sum.`;
  }

  // Guide: scale v_1, slide the result along p, then let s run over the whole range.
  const ease = t => t * t * (3 - 2 * t);
  const player = G.player($("play"), 15000, progress => {
    const step = progress < .25 ? 0 : progress < .5 ? 1 : 2;
    which = 0;
    if (step === 0) { s = 1.5 * ease(progress / .25); slide = 0; }
    else if (step === 1) { s = 1.5; slide = ease((progress - .25) / .25); }
    else {
      const t = (progress - .5) / .5;
      s = t < .45 ? 1.5 - 3.5 * ease(t / .45) : -2 + 4 * ease((t - .45) / .55);
      slide = 1;
    }
    s = Math.round(s * 20) / 20;
    if (step !== guideStep) { guideStep = step; caption(captions[step]); }
    draw();
  }, [0, .25, .5, 1]);

  $("scalar").addEventListener("input", () => { player.stop(); slide = 1; s = +$("scalar").value; draw(); });
  $("scalar").addEventListener("change", () => {
    guideStep = -1;
    caption(`At $s = ${number(s)}$: scaling gives $sv₁ = ${tuple(scaled(s))}$ on the gray line, and adding $p$ gives $w = ${tuple(translate(PARTICULAR[which], s))}$ on the olive line.`);
  });
  $("other-particular").addEventListener("click", () => {
    player.stop(); slide = 1; which = 1 - which; guideStep = -1; s = clampS(s); draw();
    caption(which
      ? "With $p = (1, −1, −1)$ the parallelogram leans, but $p + sv₁$ still lands on the same olive line. The two choices of $p$ differ by $(1, −1, 0) = −v₁$, a solution of the homogeneous system."
      : "Back to $p = (0, 0, −1)$. The olive line has not moved: any one solution of the non-homogeneous system can serve as $p$.");
  });
  const updateCamera = G.cameraControls($("translation-scene"), camera, draw);
  $("reset").addEventListener("click", () => {
    player.reset(); s = startS; slide = 1; which = 0; guideStep = -1;
    camera.yaw = home.yaw; camera.pitch = home.pitch; updateCamera(); caption(idle);
  });
  document.querySelector(".live-explorer").hidden = false;
  updateCamera();
  document.fonts.ready.then(draw);
  // Place the labels again whenever the picture appears or changes size.
  let width = 0;
  new ResizeObserver(entries => {
    const now = Math.round(entries[0].contentRect.width);
    if (now === width) return;
    width = now;
    frame = now > 0 && now < 480 ? NARROW : WIDE;
    if (size !== frame.size) { size = frame.size; $("translation-scene").setAttribute("viewBox", "0 0 " + size.join(" ")); }
    draw();
  }).observe($("translation-scene"));
  document.documentElement.classList.add("js-ready");
}(typeof window !== "undefined" ? window : globalThis));
