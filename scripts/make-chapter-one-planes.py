#!/usr/bin/env python3
"""Draw chapter one's actual equation planes, clipped to a finite viewing cube.

Run from any directory with Python 3. No rendering dependencies are needed.
The SVGs use the book palette; build-book-figures.py --embed-only can embed fonts.
"""
from itertools import combinations, product
from math import atan2, cos, radians, sin, sqrt
from pathlib import Path
import re
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
COLORS = ('#4A5D23', '#876801', '#606060')


def add(a, b):
    return tuple(x+y for x, y in zip(a, b))


def mul(k, a):
    return tuple(k*x for x in a)


def dot(a, b):
    return sum(x*y for x, y in zip(a, b))


def cross(a, b):
    return (a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0])


def unit(a):
    return mul(1/sqrt(dot(a, a)), a)


def plane_patch(normal, constant, center, radius):
    corners = [add(center, v) for v in product((-radius, radius), repeat=3)]
    points = []
    for a, b in combinations(corners, 2):
        if sum(x != y for x, y in zip(a, b)) != 1:
            continue
        delta = add(b, mul(-1, a))
        denominator = dot(normal, delta)
        if abs(denominator) < 1e-10:
            continue
        t = (constant-dot(normal, a))/denominator
        if -1e-10 <= t <= 1+1e-10:
            p = add(a, mul(t, delta))
            if not any(dot(add(p, mul(-1, q)), add(p, mul(-1, q))) < 1e-16 for q in points):
                points.append(p)
    middle = tuple(sum(p[i] for p in points)/len(points) for i in range(3))
    u = unit(add(points[0], mul(-1, middle)))
    v = unit(cross(normal, u))
    points.sort(key=lambda p: atan2(dot(add(p, mul(-1, middle)), v), dot(add(p, mul(-1, middle)), u)))
    assert all(abs(dot(normal, p)-constant) < 1e-8 for p in points)
    return points


def line_segment(point, direction, center, radius):
    lo, hi = -1e10, 1e10
    for p, d, c in zip(point, direction, center):
        if abs(d) < 1e-10:
            if abs(p-c) > radius:
                return []
            continue
        ends = sorted(((c-radius-p)/d, (c+radius-p)/d))
        lo, hi = max(lo, ends[0]), min(hi, ends[1])
    return [add(point, mul(t, direction)) for t in (lo, hi)] if lo <= hi else []


def intersection(a, b):
    n, c = a
    m, d = b
    direction = cross(n, m)
    point = mul(1/dot(direction, direction), cross(add(mul(c, m), mul(-d, n)), direction))
    assert abs(dot(n, point)-c) < 1e-8 and abs(dot(m, point)-d) < 1e-8
    return point, direction


def draw(name, equations, labels, center, radius, title, description, outcome, yaw=38, pitch=24):
    yaw, pitch = radians(yaw), radians(pitch)
    width = 1080 if name == 'no-solution' else 720
    middle_x = 250 if name == 'no-solution' else 360
    def math_label(text):
        return re.sub(r'([xyzs])', r'<tspan font-style="italic">\1</tspan>', escape(text))
    def project(p):
        x, y, z = add(p, mul(-1, center))
        return (middle_x + 32*(cos(yaw)*x-sin(yaw)*y),
                218 + 32*(sin(pitch)*(sin(yaw)*x+cos(yaw)*y)-cos(pitch)*z))
    def coords(points):
        return ' '.join(f'{x:.2f},{y:.2f}' for x, y in map(project, points))
    parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} 560" role="img" aria-labelledby="title description">
<title id="title">{escape(title)}</title><desc id="description">{escape(description)}</desc>
<style>text{{font-family:'TeX Gyre Pagella',Palatino,serif;font-size:19px;fill:#303030}} .halo{{paint-order:stroke;stroke:white;stroke-width:5px;stroke-linejoin:round}}</style>
<rect width="{width}" height="560" fill="white"/>
<text x="{width/2}" y="28" text-anchor="middle">{escape(title)}</text>''']
    patches = []
    for i, ((n, c), color) in enumerate(zip(equations, COLORS), 1):
        patch = plane_patch(n, c, center, radius)
        patches.append(patch)
        parts.append(f'<polygon points="{coords(patch)}" fill="{color}" fill-opacity="0.12" stroke="{color}" stroke-width="2.4"/>')
    # Direct labels and short leaders keep each plane identifiable in overlaps.
    anchors = [(min(patches[0], key=lambda p: project(p)[0]), (-22, -12)),
               (min(patches[1], key=lambda p: project(p)[1]), (14, -12)),
               (max(patches[2], key=lambda p: project(p)[0]), (14, 15))]
    for i, ((point, offset), color) in enumerate(zip(anchors, COLORS), 1):
        x, y = project(point); dx, dy = offset
        parts.append(f'<line x1="{x}" y1="{y}" x2="{x+dx}" y2="{y+dy}" stroke="{color}" stroke-width="1.5"/>')
        parts.append(f'<text class="halo" x="{x+dx}" y="{y+dy}" style="fill:{color};font-size:22px">P{i}</text>')
    # Coordinate axes share a scale; their origin need not be at the viewing center.
    for i, label in enumerate(('x₁', 'x₂', 'x₃') if name == 'no-solution' else ('x', 'y', 'z')):
        a, b = [0., 0., 0.], [0., 0., 0.]
        a[i], b[i] = center[i]-radius, center[i]+radius
        x1, y1 = project(a); x2, y2 = project(b)
        parts.append(f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" stroke="#888" stroke-width="1"/>')
        parts.append(f'<text class="halo" x="{x2+8:.2f}" y="{y2-6:.2f}">{math_label(label)}</text>')
    if name == 'no-solution':
        for a, b in combinations(equations, 2):
            point, direction = intersection(a, b)
            segment = line_segment(point, direction, center, radius)
            if segment:
                parts.append(f'<polyline points="{coords(segment)}" fill="none" stroke="#404040" stroke-width="2" stroke-dasharray="7 5"/>')
        note = 'Dashed lines: pairwise intersections; no point lies on all three planes.'
    elif name == 'unique':
        for a, b in combinations(equations, 2):
            segment = line_segment(*intersection(a, b), center, radius)
            parts.append(f'<polyline points="{coords(segment)}" fill="none" stroke="#606060" stroke-width="1.8" stroke-dasharray="6 5"/>')
        assert all(abs(dot(n, center)-c) < 1e-8 for n, c in equations)
        x, y = project(center)
        parts.append(f'<circle cx="{x}" cy="{y}" r="9" fill="#5E011C" stroke="white" stroke-width="2"/>')
        parts.append(f'<text class="halo" x="{x+15}" y="{y-12}" style="fill:#5E011C">(5/3, −4/3, −2/3)</text>')
        note = 'Wine point: common to all three planes. Dashed lines: pairwise intersections.'
    else:
        point, direction = intersection(equations[0], equations[1])
        segment = line_segment(point, direction, center, radius)
        assert all(abs(dot(n, p)-c) < 1e-8 for p in segment for n, c in equations)
        parts.append(f'<polyline points="{coords(segment)}" fill="none" stroke="#5E011C" stroke-width="5"/>')
        note = 'Wine line: every point on it solves all three equations.'
    if name == 'no-solution':
        # Holding x1=0 gives three ordinary lines in the x2,x3 plane.
        def slice_point(y, z):
            return (610+(y-0.65)*420, 380-(z+3)*36)
        parts.append('<text x="820" y="65" text-anchor="middle">A slice at x₁ = 0</text>')
        parts.append('<defs><clipPath id="slice"><rect x="600" y="85" width="430" height="310"/></clipPath></defs>')
        parts.append('<rect x="600" y="85" width="430" height="310" fill="#fafafa" stroke="#ddd"/>')
        for v in [0, 2, 4]:
            _, y = slice_point(1, v)
            parts.append(f'<line x1="600" y1="{y}" x2="1030" y2="{y}" stroke="#ddd"/>')
            parts.append(f'<text x="580" y="{y+6}" style="font-size:16px">{v}</text>')
        parts.append('<text x="573" y="88" font-style="italic">x₃</text>')
        parts.append('<text x="1036" y="395" font-style="italic">x₂</text>')
        for i, (slope, intercept, color) in enumerate(zip([9,6,3], [-9,-6,-2], COLORS), 1):
            x1,y1=slice_point(0.5,slope*0.5+intercept)
            x2,y2=slice_point(1.8,slope*1.8+intercept)
            parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="2.5" clip-path="url(#slice)"/>')
            y = [1.45,1.55,1.6][i-1]; x,z = slice_point(y,slope*y+intercept)
            parts.append(f'<text class="halo" x="{x+8}" y="{z-8}" style="fill:{color}">P{i}</text>')
        for y,z in [(1,0),(7/6,1.5),(4/3,2)]:
            x,y_pixel=slice_point(y,z)
            parts.append(f'<circle cx="{x}" cy="{y_pixel}" r="5" fill="white" stroke="#404040" stroke-width="2"/>')
        parts.append('<text x="820" y="420" text-anchor="middle" style="font-size:17px">Three different crossings; no shared crossing</text>')
    parts.append(f'<text x="{width/2}" y="435" text-anchor="middle" style="font-size:17px">{escape(note)}</text>')
    for i, (label, color) in enumerate(zip(labels, COLORS)):
        y = 465+i*27
        parts.append(f'<line x1="170" y1="{y-5}" x2="200" y2="{y-5}" stroke="{color}" stroke-width="3"/>')
        parts.append(f'<text x="212" y="{y}">P{i+1}: {math_label(label)}</text>')
    parts.append(f'<text x="{width/2}" y="550" text-anchor="middle" style="font-size:16px">{escape(outcome)}</text></svg>')
    path = ROOT/'assets'/'images'/f'ch1-{name}-planes.svg'
    path.write_text('\n'.join(parts)+'\n')
    print(path.relative_to(ROOT))


if __name__ == '__main__':
    draw('unique', [((1,1,2),-1), ((2,1,3),0), ((0,-2,1),2)],
         ['x + y + 2z = −1', '2x + y + 3z = 0', '−2y + z = 2'],
         (5/3,-4/3,-2/3), 3, 'Exactly one common point',
         'The three equation planes share only the point (5/3, -4/3, -2/3).', 'Exactly one solution')
    draw('no-solution', [((-3,-9,1),-9), ((2,6,-1),6), ((1,3,-1),2)],
         ['−3x₁ − 9x₂ + x₃ = −9', '2x₁ + 6x₂ − x₃ = 6', 'x₁ + 3x₂ − x₃ = 2'],
         (0,1,0), 4, 'No common point',
         'The three equation planes intersect pairwise in parallel lines but share no point.',
         'No solution: satisfying two equations is insufficient', yaw=55, pitch=25)
    draw('infinitely-many', [((2,1,3),1), ((1,2,-1),0), ((0,-6,10),2)],
         ['2x + y + 3z = 1', 'x + 2y − z = 0', '−6y + 10z = 2'],
         (2/3,-1/3,0), 3, 'A whole line of common points',
         'The three equation planes share the line x=2/3-7s/3, y=-1/3+5s/3, z=s.',
         'Infinitely many solutions: one for each real value of s')
