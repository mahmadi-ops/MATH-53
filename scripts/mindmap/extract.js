() => {
  const root = [...document.querySelectorAll('div')].find(d =>
    d.style.position === 'relative' && d.style.width === '1840px');
  const R0 = root.getBoundingClientRect();
  const rel = r => ({x: r.left - R0.left, y: r.top - R0.top, w: r.width, h: r.height});

  // Ascent/descent for an exact font, straight from the platform metrics.
  const ctx = document.createElement('canvas').getContext('2d');
  const metrics = {};
  const fontMetrics = (cs) => {
    const spec = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    if (!metrics[spec]) {
      ctx.font = spec;
      const m = ctx.measureText('Hxg');
      metrics[spec] = {a: m.fontBoundingBoxAscent, d: m.fontBoundingBoxDescent};
    }
    return metrics[spec];
  };

  const edges = [...root.querySelectorAll('svg line')].map(l => ({
    x1: +l.getAttribute('x1'), y1: +l.getAttribute('y1'),
    x2: +l.getAttribute('x2'), y2: +l.getAttribute('y2'),
    stroke: l.getAttribute('stroke'), width: +l.getAttribute('stroke-width'),
    opacity: +l.getAttribute('stroke-opacity'),
  }));

  // Every absolutely positioned box, plus the flex spans inside the hub.
  const boxes = [], texts = [];
  // MathJax's off-screen MathML mirror is absolutely positioned too; it is
  // an accessibility aid for the live page, not part of the drawing.
  const isBox = el => {
    if (el === root || el.tagName.toLowerCase().startsWith('mjx-')) return false;
    return getComputedStyle(el).position === 'absolute';
  };

  const readText = (el) => {
    const cs = getComputedStyle(el);
    const fm = fontMetrics(cs);
    const er = el.getBoundingClientRect();
    const contentTop = er.top + parseFloat(cs.borderTopWidth) + parseFloat(cs.paddingTop);
    const items = [];
    for (const child of el.childNodes) {
      if (child.nodeType === 3) {
        const s = child.nodeValue;
        const re = /\S+/g; let m;
        while ((m = re.exec(s))) {
          const rg = document.createRange();
          rg.setStart(child, m.index); rg.setEnd(child, m.index + m[0].length);
          const r = rg.getBoundingClientRect();
          if (r.width > 0) items.push({kind: 'w', t: m[0], ...rel(r)});
        }
      } else if (child.nodeType === 1 && child.tagName.toLowerCase() === 'mjx-container') {
        const svg = child.querySelector('svg');
        const r = (svg || child).getBoundingClientRect();
        items.push({kind: 'm', svg: svg ? svg.outerHTML : '', ...rel(r)});
      }
    }
    if (!items.length) return;

    // Assign items to line boxes. Inline maths sits on the same baseline as the
    // text around it but has its own height, so its top differs by a pixel or
    // two -- group by the middle of each item against the CSS line grid, never
    // by its top, or a formula lands on a line of its own and the words that
    // straddled it close up over the gap it left.
    const top0 = contentTop - R0.top;
    const wordTops = [...new Set(items.filter(i => i.kind === 'w')
                                      .map(i => Math.round(i.y)))].sort((a, b) => a - b);
    let lh = parseFloat(cs.lineHeight);            // NaN when line-height is `normal`
    if (!isFinite(lh)) {
      lh = wordTops.length > 1 ? wordTops[1] - wordTops[0] : fm.a + fm.d;
    }
    const lineOf = i => Math.max(0, Math.round((i.y + i.h / 2 - top0 - lh / 2) / lh));
    const byLine = new Map();
    for (const it of items) {
      const k = lineOf(it);
      if (!byLine.has(k)) byLine.set(k, []);
      byLine.get(k).push(it);
    }
    const lines = [...byLine.keys()].sort((a, b) => a - b).map(idx => {
      const mine = byLine.get(idx);
      const baseline = top0 + idx * lh + (lh - (fm.a + fm.d)) / 2 + fm.a;
      const segs = [];
      for (const it of mine) {
        const last = segs[segs.length - 1];
        if (it.kind === 'w' && last && last.kind === 'w') {
          last.t += ' ' + it.t; last.w = it.x + it.w - last.x;
        } else segs.push({...it});
      }
      return {baseline, segs, left: Math.min(...mine.map(i => i.x)),
              right: Math.max(...mine.map(i => i.x + i.w))};
    });
    texts.push({
      lines,
      font: cs.fontFamily, size: parseFloat(cs.fontSize), weight: cs.fontWeight,
      style: cs.fontStyle, fill: cs.color,
    });
  };

  const walk = (el) => {
    if (isBox(el)) {
      const cs = getComputedStyle(el);
      const r = rel(el.getBoundingClientRect());
      boxes.push({
        ...r, bg: cs.backgroundColor, bc: cs.borderTopColor,
        bw: parseFloat(cs.borderTopWidth),
        radius: cs.borderTopLeftRadius.endsWith('%') ? 'circle'
                : parseFloat(cs.borderTopLeftRadius),
      });
    }
    const hasOwnText = [...el.childNodes].some(c =>
      (c.nodeType === 3 && c.nodeValue.trim()) ||
      (c.nodeType === 1 && c.tagName.toLowerCase() === 'mjx-container'));
    if (hasOwnText) readText(el);
    for (const c of el.children) {
      const tag = c.tagName.toLowerCase();
      if (tag !== 'svg' && !tag.startsWith('mjx-')) walk(c);
    }
  };
  for (const c of root.children) if (c.tagName.toLowerCase() !== 'svg') walk(c);

  return {edges, boxes, texts, root: {w: R0.width, h: R0.height}};
}
