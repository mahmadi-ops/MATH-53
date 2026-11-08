/* Three (or fewer) equation planes in R^3 and their common solutions.
   The system comes from the URL, e.g. planes.html?sys=1,1,2,-1:2,1,3,0:0,-2,1,2
   (rows a,b,c,d for a x1 + b x2 + c x3 = d). Everything else — the solution set,
   pairwise intersections, labels, and checks — is computed in the page by exact
   row reduction. The pure math helpers are exported for the Node checks. */
(function (root) {
  "use strict";

  /* ---------- exact rational arithmetic on small integers ---------- */
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
  function frac(n, d = 1) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return [n / g, d / g]; }
  const F = {
    add: (a, b) => frac(a[0] * b[1] + b[0] * a[1], a[1] * b[1]),
    sub: (a, b) => frac(a[0] * b[1] - b[0] * a[1], a[1] * b[1]),
    mul: (a, b) => frac(a[0] * b[0], a[1] * b[1]),
    div: (a, b) => frac(a[0] * b[1], a[1] * b[0]),
    neg: a => [-a[0], a[1]],
    zero: a => a[0] === 0,
    num: a => a[0] / a[1],
    text(a) {
      const sign = a[0] < 0 ? "−" : "", n = Math.abs(a[0]);
      return a[1] === 1 ? sign + n : sign + n + "/" + a[1];
    }
  };
  function parseFrac(s) {
    s = String(s).trim().replace(/−/g, "-");
    let m = s.match(/^(-?\d+)\/(\d+)$/);
    if (m && +m[2] !== 0) return frac(+m[1], +m[2]);
    m = s.match(/^(-?)(\d*)\.(\d+)$/);
    if (m) { const k = m[3].length; return frac(Math.round(parseFloat(s) * 10 ** k), 10 ** k); }
    if (/^-?\d+$/.test(s)) return frac(+s, 1);
    return null;
  }

  /* ---------- the system ---------- */
  // "1,1,2,-1:2,1,3,0:0,-2,1,2" -> up to three rows of four fractions.
  function parseSystem(text) {
    const rows = String(text || "").split(":").map(r => r.split(",").map(parseFrac));
    const good = rows.filter(r => r.length === 4 && r.every(Boolean)).slice(0, 3);
    return good.length ? good : null;
  }

  function rref(rows) {
    const R = rows.map(r => r.slice()), m = R.length, n = m ? R[0].length : 0, pivots = [];
    let r = 0;
    for (let c = 0; c < n && r < m; c++) {
      let p = -1;
      for (let i = r; i < m; i++) if (!F.zero(R[i][c])) { p = i; break; }
      if (p < 0) continue;
      [R[r], R[p]] = [R[p], R[r]];
      const inv = F.div([1, 1], R[r][c]);
      R[r] = R[r].map(x => F.mul(x, inv));
      for (let i = 0; i < m; i++) if (i !== r && !F.zero(R[i][c])) {
        const f = R[i][c];
        R[i] = R[i].map((x, j) => F.sub(x, F.mul(f, R[r][j])));
      }
      pivots.push(c); r++;
    }
    return { R, pivots };
  }

  // Solve a x = d for the given augmented rows (3 variables). Returns
  // {kind: "empty"|"point"|"line"|"plane"|"space", point, direction, free, basic}
  // with exact fractions; `point` is the particular solution (free variables 0).
  function solve(rows) {
    if (!rows.length) return { kind: "space", point: [[0, 1], [0, 1], [0, 1]], free: [0, 1, 2], basic: [] };
    const { R, pivots } = rref(rows);
    if (pivots.includes(3)) return { kind: "empty", free: [], basic: pivots.filter(c => c < 3) };
    const basic = pivots, free = [0, 1, 2].filter(c => !basic.includes(c));
    const point = [[0, 1], [0, 1], [0, 1]];
    basic.forEach((c, i) => { point[c] = R[i][3]; });
    const directions = free.map(f => {
      const v = [[0, 1], [0, 1], [0, 1]];
      v[f] = [1, 1];
      basic.forEach((c, i) => { v[c] = F.neg(R[i][f]); });
      return v;
    });
    const kind = ["point", "line", "plane", "space"][free.length];
    return { kind, point, direction: directions[0], directions, free, basic };
  }

  /* ---------- text ---------- */
  const DEFAULT_VARS = ["x₁", "x₂", "x₃"];
  function coefText(c) {
    const n = Math.abs(c[0]), d = c[1];
    if (d === 1) return n === 1 ? "" : String(n);
    return "(" + n + "/" + d + ")";
  }
  function eqText(row, vars = DEFAULT_VARS) {
    let s = "";
    for (let j = 0; j < 3; j++) {
      const c = row[j];
      if (F.zero(c)) continue;
      const term = coefText(c) + vars[j];
      if (s === "") s = (c[0] < 0 ? "−" : "") + term;
      else s += (c[0] < 0 ? " − " : " + ") + term;
    }
    return (s || "0") + " = " + F.text(row[3]);
  }
  function pointText(p) { return "(" + p.map(F.text).join(", ") + ")"; }
  // x1 = 2/3 − (7/3)s; x2 = −1/3 + (5/3)s; x3 = s
  function lineText(sol, vars = DEFAULT_VARS, param = "s") {
    return [0, 1, 2].map(k => {
      const p = sol.point[k], v = sol.direction[k];
      let s = vars[k] + " = ";
      if (F.zero(v)) return s + F.text(p);
      const term = coefText(v) + param;
      if (F.zero(p)) s += (v[0] < 0 ? "−" : "") + term;
      else s += F.text(p) + (v[0] < 0 ? " − " : " + ") + term;
      return s;
    }).join("; ");
  }

  /* ---------- geometry ---------- */
  // Parameter range for which p + t d stays inside the box; null if it misses.
  function clipLine(p, d, bounds) {
    let lo = -Infinity, hi = Infinity;
    for (let k = 0; k < 3; k++) {
      if (Math.abs(d[k]) < 1e-12) {
        if (p[k] < bounds[k][0] - 1e-9 || p[k] > bounds[k][1] + 1e-9) return null;
        continue;
      }
      let t1 = (bounds[k][0] - p[k]) / d[k], t2 = (bounds[k][1] - p[k]) / d[k];
      if (t1 > t2) [t1, t2] = [t2, t1];
      lo = Math.max(lo, t1); hi = Math.min(hi, t2);
    }
    return lo <= hi ? [lo, hi] : null;
  }
  const toNum = v => v.map(F.num);

  const api = { F, parseFrac, parseSystem, rref, solve, eqText, lineText, pointText, clipLine };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; return; }

  /* ---------- browser ---------- */
  const G = root.BookGeometry, C = G.colors, $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const rows = parseSystem(params.get("sys")) || parseSystem("1,1,2,-1:2,1,3,0:0,-2,1,2");
  const vars = (params.get("vars") || "").split(",").filter(Boolean).length === 3 ? params.get("vars").split(",") : DEFAULT_VARS;
  const paramName = params.get("param") || "s";
  const planeColors = [C.olive, C.mustard, C.gray];
  const planeNames = ["P₁", "P₂", "P₃"];
  const radius = Math.max(1, +(params.get("radius") || 3));
  const camera = { yaw: +(params.get("yaw") || 38), pitch: +(params.get("pitch") || 24) };
  const home = { ...camera };
  const size = [560, 420];

  // Center the viewing box on the solution set unless the page says otherwise.
  const full = solve(rows);
  let center = (params.get("center") || "").split(",").map(parseFrac);
  if (!(center.length === 3 && center.every(Boolean))) {
    if (full.kind === "point") center = full.point;
    else if (full.kind === "line") {
      const p = toNum(full.point), d = toNum(full.direction);
      const t = -G.dot(p, d) / G.dot(d, d);
      center = p.map((x, k) => [Math.round((x + t * d[k]) * 1000), 1000]);
    } else center = [[0, 1], [0, 1], [0, 1]];
  }
  const centerN = toNum(center);
  const bounds = centerN.map(c => [c - radius, c + radius]);
  const planes = rows.map((row, i) => ({
    row, i, n: toNum(row.slice(0, 3)), c: F.num(row[3]), color: planeColors[i], name: planeNames[i],
    text: eqText(row, vars), points: G.planeBox(toNum(row.slice(0, 3)), F.num(row[3]), bounds), on: true
  }));
  const fitPoints = planes.flatMap(p => p.points);
  bounds.forEach((b, k) => b.forEach(value => { const p = [0, 0, 0]; p[k] = value; fitPoints.push(p); }));

  const scene = new G.Scene($("plane-scene"), G.fittedProjector(camera, fitPoints, size));
  let s = 0, current = full;

  const kindTitle = {
    point: "exactly one common point", line: "a whole line of common points",
    empty: "no common point", plane: "a whole plane of common points", space: "every point of space"
  };
  document.title = "Three planes: " + kindTitle[full.kind];
  $("title").textContent = (rows.length === 3 ? "Three planes, " : rows.length === 2 ? "Two planes, " : "One plane, ") + kindTitle[full.kind];
  $("scene-description").textContent = planes.map(p => p.name + ": " + p.text).join("; ") + ". The system has " + kindTitle[full.kind] + ". Use the checkboxes to hide planes, the slider to move along a solution line, and the camera controls to rotate.";

  // Legend with one checkbox per plane.
  const legend = $("legend");
  planes.forEach(p => {
    const label = document.createElement("label");
    label.className = p.i === 0 ? "olive" : p.i === 1 ? "mustard" : "gray";
    const box = document.createElement("input");
    box.type = "checkbox"; box.checked = true; box.id = "plane-" + p.i;
    box.addEventListener("change", () => { p.on = box.checked; update(); });
    const swatch = document.createElement("span"); swatch.className = "swatch";
    label.append(box, swatch, document.createTextNode(p.name + ": " + p.text));
    legend.append(label);
  });

  function activeRows() { return planes.filter(p => p.on).map(p => p.row); }
  function activeNames() {
    const names = planes.filter(p => p.on).map(p => p.name);
    return names.length ? names.join(names.length > 2 ? ", " : " and ") : "no planes";
  }
  function sliderRange(sol) {
    const p = toNum(sol.point), d = toNum(sol.direction);
    const t = clipLine(p, d, bounds) || [-1, 1];
    return [Math.ceil(t[0] * 100) / 100, Math.floor(t[1] * 100) / 100];
  }
  function candidate(sol) {
    const p = toNum(sol.point), d = toNum(sol.direction);
    return p.map((x, k) => x + s * d[k]);
  }
  // Substitute the point into the equation, written the way a reader would.
  function check(plane, point) {
    const value = G.dot(plane.n, point), ok = Math.abs(value - plane.c) < 1e-9;
    let terms = "";
    plane.row.slice(0, 3).forEach((c, k) => {
      if (F.zero(c)) return;
      const term = coefText(c) + "(" + G.fmt(point[k]) + ")";
      terms += terms === "" ? (c[0] < 0 ? "−" : "") + term : (c[0] < 0 ? " − " : " + ") + term;
    });
    return `${plane.name} check: ${terms || "0"} = ${G.fmt(value)}` + (ok ? " ✓" : ` ≠ ${G.fmt(plane.c)} ✗`);
  }

  function update() {
    current = solve(activeRows());
    const slider = $("parameter-block");
    slider.hidden = current.kind !== "line";
    if (current.kind === "line") {
      const [lo, hi] = sliderRange(current);
      $("parameter").min = lo; $("parameter").max = hi;
      if (s < lo || s > hi) s = Math.round(((lo + hi) / 2) * 100) / 100;
      $("parameter-label").textContent = "Parameter " + paramName + " (the free variable " + vars[current.free[0]] + ")";
    }
    draw();
  }

  function draw() {
    scene.clear();
    scene.project = G.fittedProjector(camera, fitPoints, size);
    const depth = p => p.points.reduce((sum, v) => sum + scene.project(v)[2], 0) / p.points.length;
    const active = planes.filter(p => p.on);
    active.slice().sort((a, b) => depth(a) - depth(b)).forEach(p => scene.polygon(p.points, p.color, .13));
    scene.axes(bounds, vars);

    // Pairwise intersections (dashed) unless they are the common solution line.
    if (active.length >= 2 && current.kind !== "line") {
      for (let i = 0; i < active.length; i++) for (let j = i + 1; j < active.length; j++) {
        const pair = solve([active[i].row, active[j].row]);
        if (pair.kind !== "line") continue;
        const p = toNum(pair.point), d = toNum(pair.direction), t = clipLine(p, d, bounds);
        if (t) scene.line(p.map((x, k) => x + t[0] * d[k]), p.map((x, k) => x + t[1] * d[k]), "#505050", 1.8, { "stroke-dasharray": "7 5" });
      }
    }
    let readout = "";
    if (current.kind === "point") {
      const p = toNum(current.point);
      scene.point(p, C.wine, 8, { "data-common-solution": "point" });
      scene.text(p, pointText(current.point), C.wine, [14, -12]);
      readout = `Common solution set of ${activeNames()}: exactly one point, ${pointText(current.point)}.`;
      $("checks").replaceChildren(...active.map(pl => { const el = document.createElement("p"); el.textContent = check(pl, p); return el; }));
    } else if (current.kind === "line") {
      const p = toNum(current.point), d = toNum(current.direction), t = clipLine(p, d, bounds) || [-1, 1];
      const a = p.map((x, k) => x + t[0] * d[k]), b = p.map((x, k) => x + t[1] * d[k]);
      scene.line(a, b, C.wine, 5, { "data-common-solution": "line" });
      const q = candidate(current);
      scene.point(q, C.wine, 6, { stroke: "white", "data-candidate": "" });
      scene.text(q, "p(" + paramName + ") = " + G.tuple(q), C.wine, [-40, -16]);
      readout = `Common solution set of ${activeNames()}: the entire wine line ${lineText(current, vars, paramName)}, for every real ${paramName}.`;
      $("parameter").value = s; $("parameter-value").value = G.fmt(s);
      $("parameter").setAttribute("aria-valuetext", `${paramName} = ${G.fmt(s)}; point ${G.tuple(q)}`);
      $("checks").replaceChildren(...active.map(pl => { const el = document.createElement("p"); el.textContent = check(pl, q); return el; }));
    } else if (current.kind === "empty") {
      const pairs = [];
      for (let i = 0; i < active.length; i++) for (let j = i + 1; j < active.length; j++) {
        const pair = solve([active[i].row, active[j].row]);
        pairs.push(`${active[i].name} and ${active[j].name} ${pair.kind === "line" ? "meet in a dashed line" : pair.kind === "empty" ? "are parallel and never meet" : "coincide"}`);
      }
      readout = `Common solution set of ${activeNames()}: empty — no point lies on all of them (the system is inconsistent). ` + pairs.join("; ") + ".";
      $("checks").replaceChildren();
    } else if (current.kind === "plane") {
      readout = `Common solution set of ${activeNames()}: a whole plane — every point of ${active.length === 1 ? active[0].name : "the (coinciding) planes"} is a solution.`;
      $("checks").replaceChildren();
    } else {
      readout = "No equations are active: every point of space is a solution.";
      $("checks").replaceChildren();
    }
    $("solution-text").textContent = readout;

    // Plane labels at an outer corner of each patch.
    const pick = [(p) => scene.project(p)[0], (p) => scene.project(p)[1], (p) => -scene.project(p)[0]];
    const offsets = [[-26, -10], [12, -10], [12, 16]];
    active.forEach(p => {
      if (p.points.length < 3) return;
      const corner = p.points.reduce((best, v) => pick[p.i](v) < pick[p.i](best) ? v : best, p.points[0]);
      scene.text(corner, p.name, p.color, offsets[p.i], { "font-size": 19 });
    });
    // Keep labels inside the frame at every rotation.
    scene.layer.querySelectorAll("text").forEach(label => {
      const box = label.getBBox();
      const dx = Math.max(12 - box.x, Math.min(0, size[0] - 12 - box.x - box.width));
      const dy = Math.max(12 - box.y, Math.min(0, size[1] - 12 - box.y - box.height));
      if (dx) label.setAttribute("x", +label.getAttribute("x") + dx);
      if (dy) label.setAttribute("y", +label.getAttribute("y") + dy);
    });
  }

  $("parameter").addEventListener("input", () => { s = +$("parameter").value; draw(); });
  const updateCamera = G.cameraControls($("plane-scene"), camera, draw);
  $("reset").addEventListener("click", () => {
    planes.forEach(p => { p.on = true; $("plane-" + p.i).checked = true; });
    s = 0; camera.yaw = home.yaw; camera.pitch = home.pitch;
    update(); updateCamera();
  });
  document.querySelector(".live-explorer").hidden = false;
  update(); updateCamera();
  document.fonts.ready.then(draw);
  document.documentElement.classList.add("js-ready");
}(typeof window !== "undefined" ? window : globalThis));
