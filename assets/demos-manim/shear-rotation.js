/* A rotation as a product of three shears (Section 4.5):
       A = H_a V_b H_a,   a = −tan(θ/2),   b = sin θ,
   where H_a = [1 a; 0 1] is a horizontal shear and V_b = [1 0; b 1] a vertical
   shear. One slider sets θ (−90° to 90° in steps of 5°); the other applies the
   three shears one after another to a square picture (0 = no shear yet,
   3 = all three). The guide plays the three shears in order. Optional URL
   parameters theta (degrees) and step (0 to 3) set the starting values, e.g.
   shear-rotation.html?theta=45&step=1. The pure math helpers are exported for
   Node checks. */
(function (root) {
  "use strict";

  const radians = degrees => degrees * Math.PI / 180;
  const H = a => [[1, a], [0, 1]];
  const V = b => [[1, 0], [b, 1]];
  const multiply = (P, Q) => [0, 1].map(i => [0, 1].map(j => P[i][0] * Q[0][j] + P[i][1] * Q[1][j]));
  const apply = (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]];
  const det = M => M[0][0] * M[1][1] - M[0][1] * M[1][0];
  const rotation = degrees => {
    const c = Math.cos(radians(degrees)), s = Math.sin(radians(degrees));
    return [[c, -s], [s, c]];
  };
  // The two shear amounts for a rotation through the given angle.
  const coefficients = degrees => ({ a: -Math.tan(radians(degrees) / 2), b: Math.sin(radians(degrees)) });
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  // How much of each shear has been applied when the step slider reads u.
  const fractions = u => [0, 1, 2].map(k => clamp(u - k, 0, 1));
  // The matrix applied so far: the first shear acts first, so it is the right factor.
  function matrixAt(degrees, u) {
    const { a, b } = coefficients(degrees), f = fractions(u);
    return multiply(H(a * f[2]), multiply(V(b * f[1]), H(a * f[0])));
  }
  // Which shear is in progress or was just completed (0 before the first one).
  const stageOf = u => u <= 0 ? 0 : Math.min(3, Math.ceil(u - 1e-9));

  const SQUARE = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const LETTER = [[-0.45, -0.7], [-0.45, 0.7], [0.55, 0.7], [0.55, 0.38], [-0.1, 0.38],
    [-0.1, 0.12], [0.35, 0.12], [0.35, -0.2], [-0.1, -0.2], [-0.1, -0.7]];

  const api = { H, V, multiply, apply, det, rotation, coefficients, fractions, matrixAt, stageOf, SQUARE, LETTER };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const G = root.BookGeometry, M = root.BookMath, C = G.colors, $ = id => document.getElementById(id);
  // The window: |x| ≤ 2.3 and |y| ≤ 3.2 hold the picture at every angle and step.
  const RX = 2.3, RY = 3.2, UNIT = 90, size = [2 * RX * UNIT, 2 * RY * UNIT];
  const scene = new G.Scene($("shear-scene"), p => [size[0] / 2 + UNIT * p[0], size[1] / 2 - UNIT * p[1]]);
  const thetaSlider = $("theta"), stepSlider = $("step");
  const number = x => G.fmt(x);
  const params = new URLSearchParams(location.search);
  const startTheta = (() => {
    const value = parseFloat(params.get("theta"));
    return Number.isFinite(value) && value >= +thetaSlider.min && value <= +thetaSlider.max ? Math.round(value / 5) * 5 : +thetaSlider.value;
  })();
  const startStep = (() => {
    const value = parseFloat(params.get("step"));
    return Number.isFinite(value) ? clamp(value, 0, 3) : 0;
  })();
  thetaSlider.value = startTheta;
  let u = startStep;

  // Points whose motion is shown by arrows: the corners and the midpoints of the sides.
  const MARKS = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];

  function drawFrame() {
    for (let i = -2; i <= 2; i++) scene.line([i, -RY], [i, RY], C.grid, 1);
    for (let i = -3; i <= 3; i++) scene.line([-RX, i], [RX, i], C.grid, 1);
    scene.arrow([-RX + 0.05, 0], [RX - 0.05, 0], "#606060", 1.2);
    scene.arrow([0, -RY + 0.05], [0, RY - 0.05], "#606060", 1.2);
    scene.text([RX - 0.05, 0], "$x$", "#404040", [-12, 22]);
    scene.text([0, RY - 0.05], "$y$", "#404040", [10, 16]);
    [-2, -1, 1, 2].forEach(k => {
      scene.line([k, -0.07], [k, 0.07], "#606060", 1.2);
      scene.line([-0.07, k], [0.07, k], "#606060", 1.2);
    });
  }

  // A 2 × 2 matrix as an HTML element.
  function matrixElement(Mx) {
    const box = document.createElement("span");
    box.className = "m2";
    [Mx[0][0], Mx[0][1], Mx[1][0], Mx[1][1]].forEach(x => {
      const cell = document.createElement("span");
      cell.textContent = number(x);
      box.append(cell);
    });
    return box;
  }
  function factor(name, order, Mx, state) {
    const item = document.createElement("span"), label = document.createElement("span");
    item.className = "factor"; item.dataset.state = state;
    label.className = "factor-name";
    M.set(label, "$" + name + "$, " + order);
    item.append(matrixElement(Mx), label);
    return item;
  }

  let shownCaption = null;
  function caption(text) { if (text !== shownCaption) { shownCaption = text; M.set($("guide-caption"), text); } }
  const idle = "Move the sliders, or press Play to watch the three shears one after another.";

  function draw() {
    const theta = +thetaSlider.value, { a, b } = coefficients(theta), stage = stageOf(u);
    const now = matrixAt(theta, u), f = fractions(u);
    scene.clear();
    drawFrame();
    // Where the picture started.
    scene.polygon(SQUARE, "#909090", 0, { "stroke-dasharray": "6 5", "data-reference": "" });
    // The picture: a square with a few of its own grid lines and a letter F.
    scene.polygon(SQUARE.map(p => apply(now, p)), C.olive, 0.12, { "stroke-width": 2, "data-picture": "" });
    [-0.5, 0, 0.5].forEach(k => {
      scene.line(apply(now, [-1, k]), apply(now, [1, k]), C.olive, 1, { "stroke-opacity": 0.45 });
      scene.line(apply(now, [k, -1]), apply(now, [k, 1]), C.olive, 1, { "stroke-opacity": 0.45 });
    });
    scene.polygon(LETTER.map(p => apply(now, p)), C.wine, 0.95, { "data-letter": "" });
    // How the current shear has moved the corners and the midpoints of the sides.
    if (stage > 0) {
      const before = matrixAt(theta, stage - 1);
      MARKS.forEach(p => {
        const from = apply(before, p), to = apply(now, p);
        if (Math.hypot(to[0] - from[0], to[1] - from[1]) * UNIT > 9) scene.arrow(from, to, C.mustard, 2.4, { "data-slide": "" });
      });
    }

    $("theta-value").value = number(theta) + "°";
    $("step-value").value = number(Math.round(u * 100) / 100);
    stepSlider.value = u.toFixed(2);
    M.set($("status"), "For $θ = " + number(theta) + "°$: $a = −tan(" + number(theta / 2) + "°) = " + number(a) +
      "$ and $b = sin(" + number(theta) + "°) = " + number(b) + "$.");
    const state = k => f[k] >= 1 ? "done" : f[k] > 0 ? "active" : "pending";
    const factors = $("factors");
    factors.replaceChildren();
    const lead = document.createElement("span");
    lead.className = "lead";
    M.set(lead, "The three factors of $A = HₐV_bHₐ$; the one on the right acts first:");
    factors.append(lead, factor("Hₐ", "third", H(a), state(2)), factor("V_b", "second", V(b), state(1)), factor("Hₐ", "first", H(a), state(0)));
    const product = $("product");
    product.replaceChildren();
    const soFar = document.createElement("span"), target = document.createElement("span");
    soFar.className = "labelled"; target.className = "labelled";
    soFar.append("Applied so far: ", matrixElement(now));
    target.append("Rotation through " + number(theta) + "°: ", matrixElement(rotation(theta)));
    product.append(soFar, target);

    const sideways = a < 0 ? "Points above the $x$-axis slide to the left, and points below it slide to the right."
      : a > 0 ? "Points above the $x$-axis slide to the right, and points below it slide to the left." : "Here $a = 0$, so nothing moves.";
    const vertical = b > 0 ? "Points to the right of the $y$-axis slide up, and points to the left of it slide down."
      : b < 0 ? "Points to the right of the $y$-axis slide down, and points to the left of it slide up." : "Here $b = 0$, so nothing moves.";
    const done = Math.abs(u - 3) < 0.005;
    caption([
      idle,
      "First shear, $Hₐ$ with $a = " + number(a) + "$: every point keeps its height $y$ and slides sideways by $ay$. " + sideways,
      "Second shear, $V_b$ with $b = " + number(b) + "$: every point keeps its $x$-coordinate and slides vertically by $bx$. " + vertical,
      "Third shear, $Hₐ$ again: every point slides sideways by $a$ times its height once more." +
        (done ? " The picture is a square again: it is the original picture, turned through $" + number(theta) + "°$." : "")
    ][stage]);
    [0, 1, 2, 3].forEach(k => $("stage-" + k).setAttribute("aria-pressed", String(Math.abs(u - k) < 0.005)));
    $("scene-description").textContent = "A square picture with a letter F, " +
      ["before any shear.", "during or after the first, horizontal shear.", "during or after the second, vertical shear.",
        done ? "after all three shears: the original picture turned through " + theta + " degrees."
          : "during the third, horizontal shear."][stage] +
      " The dashed square marks where the picture started.";
  }

  const player = G.player($("play"), 9000, progress => { u = 3 * progress; draw(); }, [0, 1 / 3, 2 / 3, 1]);
  thetaSlider.addEventListener("input", () => { player.stop(); draw(); });
  stepSlider.addEventListener("input", () => { player.stop(); player.set(+stepSlider.value / 3); });
  [0, 1, 2, 3].forEach(k => $("stage-" + k).addEventListener("click", () => { player.stop(); player.set(k / 3); }));
  $("reset").addEventListener("click", () => { thetaSlider.value = startTheta; player.reset(); });
  document.querySelector(".live-explorer").hidden = false;
  player.set(startStep / 3);
  document.fonts.ready.then(draw);
  document.documentElement.classList.add("js-ready");
}(typeof window !== "undefined" ? window : globalThis));
