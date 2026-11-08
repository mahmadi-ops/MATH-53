(function (root) {
  'use strict';

  const R = 2 / 3;
  const MAX_EPSILON = 1 / 3;
  const HORIZON = 40;

  function validArguments(epsilon, n) {
    if (!Number.isFinite(epsilon) || epsilon < 0 || epsilon > MAX_EPSILON) {
      throw new RangeError('epsilon must be between 0 and 1/3');
    }
    if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be a nonnegative integer');
  }

  // Stable divided difference, including the coalescing-eigenvalue limit.
  function point(epsilon, n) {
    validArguments(epsilon, n);
    if (n === 0) return { n: 0, x: 0, y: 1, m: 1 };
    const s = R - epsilon;
    const ratio = epsilon / R;
    const dividedDifference = epsilon === 0 ? n : -Math.expm1(n * Math.log1p(-ratio)) / ratio;
    const x = 6 * Math.pow(R, n - 1) * dividedDifference;
    const y = Math.pow(s, n);
    return { n, x, y, m: Math.max(Math.abs(x), Math.abs(y)) };
  }

  // The plots use the recurrence itself, avoiding subtraction of near-equal powers.
  function orbit(epsilon, n = HORIZON) {
    validArguments(epsilon, n);
    const points = [{ n: 0, x: 0, y: 1, m: 1 }];
    let x = 0;
    let y = 1;
    for (let k = 1; k <= n; k += 1) {
      x = R * x + 6 * y;
      y = (R - epsilon) * y;
      points.push({ n: k, x, y, m: Math.max(Math.abs(x), Math.abs(y)) });
    }
    return points;
  }

  function peak(epsilon) {
    validArguments(epsilon, 0);
    return {
      value: 8 - 6 * epsilon,
      iterations: epsilon === 0 ? [2, 3] : epsilon === MAX_EPSILON ? [1, 2] : [2]
    };
  }

  function eigenData(epsilon) {
    validArguments(epsilon, 0);
    return { values: [R, R - epsilon], vectors: [[1, 0], [6, -epsilon]], diagonalizable: epsilon > 0 };
  }

  const api = { point, orbit, peak, eigenData };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.PredictTransientGrowth = api;
  if (typeof document === 'undefined') return;

  const $ = (id) => document.getElementById(id);
  const form = $('prediction-form');
  if (!form) return;
  const fields = ['predict-diagonalizable', 'predict-behavior', 'predict-peak', 'predict-unbounded', 'predict-reasoning'].map($);
  const epsilonSlider = $('epsilon-slider');
  const iterationSlider = $('iteration-slider');
  const playButton = $('play-pause');
  const reducedMotion = root.matchMedia ? root.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  let recorded = false;
  let epsilon = 1 / 6;
  let n = 0;
  let timer = null;
  let points = orbit(epsilon);

  api.state = () => ({ recorded, epsilon, n, playing: timer !== null });

  function setStatus(message) { $('widget-status').textContent = message; }
  function pause() {
    if (timer !== null) root.clearInterval(timer);
    timer = null;
    playButton.textContent = n === HORIZON ? 'Replay' : 'Play';
  }
  function format(value) {
    if (value === 0) return '0';
    if (Math.abs(value) < 0.0001) return value.toExponential(3);
    return Number(value.toPrecision(6)).toString();
  }
  function fractionLabel(numerator, denominator) {
    if (numerator === 0) return '0';
    let a = numerator;
    let b = denominator;
    while (b) { const remainder = a % b; a = b; b = remainder; }
    return denominator / a === 1 ? String(numerator / a) : `${numerator / a}/${denominator / a}`;
  }
  function epsilonLabel() {
    return fractionLabel(Number(epsilonSlider.value), 360);
  }
  function el(name, attributes, parent, content) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', name);
    Object.entries(attributes || {}).forEach(([key, value]) => node.setAttribute(key, value));
    if (content !== undefined) node.textContent = content;
    if (parent) parent.appendChild(node);
    return node;
  }
  function line(parent, x1, y1, x2, y2, className, extra) {
    return el('line', Object.assign({ x1, y1, x2, y2, class: className }, extra), parent);
  }
  function pathFor(data, x, y, value) {
    return data.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p).toFixed(5)},${y(value(p)).toFixed(5)}`).join(' ');
  }
  function preparePlot(svg, width, height, description) {
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.querySelector('desc').textContent = description;
    Array.from(svg.children).forEach((child) => {
      if (!['title', 'desc'].includes(child.localName)) child.remove();
    });
  }
  function plotBounds(svg, left, top, width, height) {
    svg.setAttribute('data-plot-left', left);
    svg.setAttribute('data-plot-top', top);
    svg.setAttribute('data-plot-width', width);
    svg.setAttribute('data-plot-height', height);
  }
  function drawOrbit(current) {
    const svg = $('orbit-plot');
    const width = Math.max(250, Math.round(svg.getBoundingClientRect().width || 700));
    const left = 36;
    const top = 23;
    const innerWidth = width - left - 16;
    const scale = innerWidth / 9;
    const innerHeight = 1.5 * scale;
    const height = top + innerHeight + 33;
    const x = (value) => left + (value + 0.25) * scale;
    const y = (value) => top + (1.25 - value) * scale;
    preparePlot(svg, width, height, `Equal coordinate scales. At iteration ${n}, the vector is (${format(current.x)}, ${format(current.y)}). The trajectory initially moves right and eventually returns toward the origin. ${epsilon === 0 ? 'The two eigendirections coincide.' : 'The two eigendirections are distinct.'}`);
    plotBounds(svg, left, top, innerWidth, innerHeight);
    const defs = el('defs', {}, svg);
    const marker = el('marker', { id: 'vector-arrow', viewBox: '0 0 8 8', refX: 7, refY: 4, markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse' }, defs);
    el('path', { d: 'M0,0 L8,4 L0,8 Z', fill: '#5E011C' }, marker);
    [0, 2, 4, 6, 8].forEach((tick) => {
      line(svg, x(tick), top, x(tick), top + innerHeight, 'grid');
      el('text', { x: x(tick), y: top + innerHeight + 20, 'text-anchor': 'middle' }, svg, tick);
    });
    [0, 1].forEach((tick) => {
      line(svg, left, y(tick), left + innerWidth, y(tick), 'grid');
      el('text', { x: left - 8, y: y(tick) + 4, 'text-anchor': 'end' }, svg, tick);
    });
    line(svg, x(0), top, x(0), top + innerHeight, 'axis');
    line(svg, left, y(0), left + innerWidth, y(0), 'axis');
    el('text', { x: left + innerWidth, y: height - 2, 'text-anchor': 'end' }, svg, 'uₙ (first coordinate)');
    el('text', { x: left, y: 14 }, svg, 'vₙ (second coordinate)');
    line(svg, x(-0.25), y(0), x(8.75), y(0), 'eigen-first');
    const eigenRight = epsilon === 0 ? 8.75 : Math.min(8.75, 1.5 / epsilon);
    line(svg, x(-0.25), y(epsilon / 24), x(eigenRight), y(-epsilon * eigenRight / 6), 'eigen-second');
    el('path', { d: pathFor(points, (p) => x(p.x), y, (p) => p.y), class: 'trajectory' }, svg);
    el('path', { d: pathFor(points.slice(0, n + 1), (p) => x(p.x), y, (p) => p.y), class: 'visited' }, svg);
    points.forEach((p) => el('circle', { cx: x(p.x), cy: y(p.y), r: 2, class: 'orbit-point', 'data-n': p.n }, svg));
    line(svg, x(0), y(0), x(current.x), y(current.y), 'current-vector', { 'marker-end': 'url(#vector-arrow)' });
    el('circle', { id: 'orbit-current', cx: x(current.x), cy: y(current.y), r: 5, class: 'current-point', 'data-n': n, 'data-x': current.x, 'data-y': current.y, 'data-m': current.m }, svg);
  }
  function drawGrowth(current) {
    const svg = $('growth-plot');
    const width = Math.max(250, Math.round(svg.getBoundingClientRect().width || 700));
    const left = 36;
    const top = 24;
    const innerWidth = width - left - 18;
    const innerHeight = 180;
    const height = top + innerHeight + 40;
    const x = (value) => left + value * innerWidth / HORIZON;
    const y = (value) => top + (9 - value) * innerHeight / 9;
    const maximum = peak(epsilon);
    preparePlot(svg, width, height, `Size M n on fixed axes: n from 0 to 40, M n from 0 to 9. Current M ${n} is ${format(current.m)}. The global maximum is ${format(maximum.value)} at n = ${maximum.iterations.join(' and ')}.`);
    plotBounds(svg, left, top, innerWidth, innerHeight);
    [0, 3, 6, 9].forEach((tick) => {
      line(svg, left, y(tick), left + innerWidth, y(tick), 'grid');
      el('text', { x: left - 9, y: y(tick) + 4, 'text-anchor': 'end' }, svg, tick);
    });
    [0, 10, 20, 30, 40].forEach((tick) => {
      line(svg, x(tick), top, x(tick), top + innerHeight, 'grid');
      el('text', { x: x(tick), y: top + innerHeight + 20, 'text-anchor': 'middle' }, svg, tick);
    });
    line(svg, left, top, left, top + innerHeight, 'axis');
    line(svg, left, top + innerHeight, left + innerWidth, top + innerHeight, 'axis');
    el('text', { x: left, y: 14 }, svg, 'Mₙ');
    el('text', { x: left + innerWidth, y: height - 2, 'text-anchor': 'end' }, svg, 'n');
    el('path', { d: pathFor(points, (p) => x(p.n), y, (p) => p.m), class: 'trajectory' }, svg);
    el('path', { d: pathFor(points.slice(0, n + 1), (p) => x(p.n), y, (p) => p.m), class: 'visited' }, svg);
    maximum.iterations.forEach((index) => el('circle', { cx: x(index), cy: y(points[index].m), r: 7, class: 'peak-point', 'data-n': index, 'data-m': points[index].m }, svg));
    line(svg, x(n), top, x(n), top + innerHeight, 'current-guide');
    el('circle', { id: 'growth-current', cx: x(n), cy: y(current.m), r: 5, class: 'current-point', 'data-n': n, 'data-m': current.m }, svg);
  }
  function render() {
    const current = points[n];
    const epsilonText = epsilonLabel();
    $('epsilon-value').textContent = epsilonText;
    epsilonSlider.setAttribute('aria-valuetext', `${epsilonText}, approximately ${format(epsilon)}`);
    $('iteration-value').textContent = n;
    iterationSlider.value = n;
    $('current-readout').textContent = `ε = ${epsilonText}; n = ${n}: uₙ = ${format(current.x)}, vₙ = ${format(current.y)}, Mₙ = ${format(current.m)}.`;
    Object.entries({ n, x: current.x, y: current.y, m: current.m }).forEach(([key, value]) => { $('current-readout').dataset[key] = value; });
    const maximum = peak(epsilon);
    const exactPeak = fractionLabel(480 - Number(epsilonSlider.value), 60);
    $('peak-readout').textContent = `For ε = ${epsilonText}, the exact maximum is ${exactPeak}, attained at n = ${maximum.iterations.join(' and ')}. In general, the maximum is 8 − 6ε.`;
    $('eigendirection-readout').textContent = epsilon === 0 ? 'At ε = 0, the two displayed directions coincide; only one independent eigendirection remains.' : `At ε = ${epsilonText}, the two eigendirections are distinct: (1, 0) and (6, −${epsilonText}).`;
    $('behavior-readout').textContent = `The matrix is ${epsilon === 0 ? 'not diagonalizable' : 'diagonalizable'} at this ε. The size first grows from 1 to 6, and the trajectory tends to (0, 0). Across the whole interval, the peak stays between 6 and 8.`;
    $('motion-note').textContent = reducedMotion.matches ? 'Reduced motion: discrete steps, 1.2 seconds apart.' : 'Playback shows one integer iterate at a time.';
    if (recorded) { drawOrbit(current); drawGrowth(current); }
    if (timer === null) playButton.textContent = n === HORIZON ? 'Replay' : 'Play';
  }
  function hideExplanation() {
    $('explanation').hidden = true;
    $('show-explanation').setAttribute('aria-expanded', 'false');
    $('show-explanation').textContent = 'Show explanation';
  }
  function relock(message) {
    pause();
    recorded = false;
    form.hidden = false;
    $('prediction-summary').hidden = true;
    $('exploration').hidden = true;
    $('playback-controls').disabled = true;
    hideExplanation();
    setStatus(message);
  }
  function summarize() {
    const dl = $('prediction-summary-content');
    dl.replaceChildren();
    const labels = ['Diagonalizability', 'Initial and long-run behavior', 'Exact peak and maximizing iterations', 'Peak as ε → 0', 'Reasoning'];
    fields.forEach((field, index) => {
      if (index === 4 && !field.value.trim()) return;
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = labels[index];
      dd.textContent = field.localName === 'select' ? field.selectedOptions[0].textContent : field.value.trim();
      dl.append(dt, dd);
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    $('predict-peak').setCustomValidity($('predict-peak').value.trim() ? '' : 'Record your prediction for the exact peak and all maximizing iterations.');
    if (!form.reportValidity()) return;
    pause();
    recorded = true;
    summarize();
    form.hidden = true;
    $('prediction-summary').hidden = false;
    $('exploration').hidden = false;
    $('playback-controls').disabled = false;
    render();
    setStatus('Predictions recorded. Compare them with the plots; playback is ready.');
    $('edit-predictions').focus();
  });
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      $('predict-peak').setCustomValidity('');
      if (recorded) relock('Predictions changed. Record all four again to unlock playback.');
    });
  });
  $('edit-predictions').addEventListener('click', () => {
    relock('Editing predictions pauses and locks playback. Record them again when ready.');
    fields[0].focus();
  });
  epsilonSlider.addEventListener('input', () => {
    if (!recorded) return;
    pause();
    epsilon = Number(epsilonSlider.value) / 360;
    points = orbit(epsilon);
    render();
  });
  iterationSlider.addEventListener('input', () => {
    if (!recorded) return;
    pause();
    n = Number(iterationSlider.value);
    render();
  });
  playButton.addEventListener('click', () => {
    if (!recorded) return;
    if (timer !== null) { pause(); setStatus(`Paused at iteration ${n}.`); return; }
    if (n === HORIZON) { n = 0; render(); }
    playButton.textContent = 'Pause';
    setStatus('Playing discrete iterates. Use Pause or either slider to stop.');
    timer = root.setInterval(() => {
      n += 1;
      if (n === HORIZON) { pause(); setStatus('Reached iteration 40. Use Replay to start again.'); }
      render();
    }, reducedMotion.matches ? 1200 : 700);
  });
  $('show-explanation').addEventListener('click', () => {
    if (!recorded) return;
    const show = $('explanation').hidden;
    $('explanation').hidden = !show;
    $('show-explanation').setAttribute('aria-expanded', String(show));
    $('show-explanation').textContent = show ? 'Hide explanation' : 'Show explanation';
  });
  $('reset-widget').addEventListener('click', () => {
    form.reset();
    $('predict-peak').setCustomValidity('');
    epsilonSlider.value = 60;
    iterationSlider.value = 0;
    epsilon = 1 / 6;
    n = 0;
    points = orbit(epsilon);
    $('prediction-summary-content').replaceChildren();
    relock('Reset complete. Record four new predictions to unlock playback.');
    render();
    fields[0].focus();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && timer !== null) { pause(); setStatus(`Paused at iteration ${n}.`); }
  });
  const motionChanged = () => {
    if (timer !== null) { pause(); setStatus(`Motion preference changed. Paused at iteration ${n}.`); }
    render();
  };
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', motionChanged);
  let resizeFrame = null;
  const resize = () => {
    if (!recorded || resizeFrame !== null) return;
    resizeFrame = root.requestAnimationFrame(() => { resizeFrame = null; render(); });
  };
  if (root.ResizeObserver) {
    const observer = new ResizeObserver(resize);
    document.querySelectorAll('.plot-panel').forEach((panel) => observer.observe(panel));
  } else root.addEventListener('resize', resize);
  $('record-predictions').disabled = false;
  render();
})(typeof window !== 'undefined' ? window : globalThis);
