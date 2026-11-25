#!/usr/bin/env python3
"""Regenerate static figures with the book's Pagella font and palette.

Install scripts/requirements-figures.txt first. Run from the repository root;
use --xmlid FIGURE_ID for a single generated figure, or --embed-only after
editing a standalone SVG. Fonts are embedded in SVGs for <img> use, where the
page's stylesheet and webfonts are unavailable.
"""
import argparse
import base64
from enum import IntEnum
from io import BytesIO
import os
from pathlib import Path
import re
import subprocess
import sys

from fontTools import subset
from fontTools.ttLib import TTFont
from lxml import etree as ET

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / '.cache' / 'figure-theme'
SVG = 'http://www.w3.org/2000/svg'
FONTS = ROOT / 'assets' / 'fonts'

# Previous chart colors, mapped to the same accents as custom.css. Coordinates,
# curve paths, tick values, alpha values and text content remain unchanged.
CHART_COLORS = {
    '#2a78d6': '#4A5D23', '#eb6834': '#5E011C', '#c23b22': '#5E011C',
    '#52514e': '#404040', '#0b0b0b': '#000000', '#fcfcfb': '#ffffff',
    '#e3e2dd': '#DDE2CF', '#8a8880': '#606060', '#b8b6b0': '#808080',
    '#fffefb': '#ffffff', '#5f6f3a': '#4A5D23', '#8a6d1f': '#876801',
    '#5e1224': '#5E011C', 'rgb(95, 111, 58)': '#4A5D23',
    'rgb(238, 240, 223)': '#EDF0E6', 'rgba(95, 111, 58, 0.6)': 'rgba(74, 93, 35, 0.6)',
    'rgb(138, 109, 31)': '#876801', 'rgb(250, 243, 216)': '#fbf7e8',
    'rgba(138, 109, 31, 0.6)': 'rgba(135, 104, 1, 0.6)',
    'rgb(94, 18, 36)': '#5E011C', 'rgb(247, 232, 233)': '#f9f3f4',
    'rgb(74, 14, 28)': '#5E011C', 'rgb(253, 246, 238)': '#ffffff',
    'rgb(60, 72, 35)': '#3A4A1C', 'rgb(90, 72, 19)': '#876801',
}


def prepare(include_mindmap=True):
    CACHE.mkdir(parents=True, exist_ok=True)
    for source in FONTS.glob('*.woff2'):
        font = TTFont(source)
        font.flavor = None
        font.save(CACHE / (source.stem + '.otf'))
    config = CACHE / 'fonts.conf'
    config.write_text('''<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">
<fontconfig><include ignore_missing="yes">/etc/fonts/fonts.conf</include>
<dir>''' + str(CACHE) + '''</dir><cachedir>''' + str(CACHE / 'font-cache') + '''</cachedir>
<alias binding="strong"><family>serif</family><prefer><family>TeX Gyre Pagella</family></prefer></alias>
</fontconfig>''')
    os.environ['FONTCONFIG_FILE'] = str(config)

    # CairoCFFI is a drop-in Cairo binding when native PyCairo isn't installed.
    try:
        import cairo
    except ImportError:
        import cairocffi as cairo
        cairo.FontSlant = IntEnum('FontSlant', {'NORMAL': 0, 'ITALIC': 1, 'OBLIQUE': 2})
        cairo.FontWeight = IntEnum('FontWeight', {'NORMAL': 0, 'BOLD': 1})
        sys.modules['cairo'] = cairo

    import prefig
    mj = Path(prefig.__file__).parent / 'core' / 'mj_sre'
    if not (mj / 'node_modules').exists():
        subprocess.run([str(Path(sys.executable).parent / 'prefig'), 'init'], check=True)
    subprocess.run(['npm', 'install', '--prefix', str(mj), '--no-save',
                    '--package-lock=false', '@mathjax/mathjax-pagella-font@4.1.3'], check=True)
    if include_mindmap:
        subprocess.run(['npm', 'install', '--prefix', str(CACHE), '--no-save', '--package-lock=false',
                        'mathjax@4.1.3', '@mathjax/mathjax-pagella-font@4.1.3',
                        'react@18.3.1', 'react-dom@18.3.1', '@babel/standalone@7.29.0'], check=True)
    preload = ROOT / 'scripts' / 'figure-math-font.cjs'
    os.environ['NODE_OPTIONS'] = (os.environ.get('NODE_OPTIONS', '') +
                                  ' --require=' + str(preload)).strip()


def embed_font(path):
    tree = ET.parse(str(path))
    root = tree.getroot()
    # Strip our previous font block before subsetting and replacing it.
    for style in root.xpath('.//svg:style[@id="book-figure-font"]', namespaces={'svg': SVG}):
        style.getparent().remove(style)
    text = ''.join(''.join(el.itertext()) for el in root.iter()
                   if el.tag in (f'{{{SVG}}}text', f'{{{SVG}}}tspan'))
    if text.strip():
        for element in root.iter():
            if element.tag in (f'{{{SVG}}}text', f'{{{SVG}}}tspan'):
                element.set('font-family', 'TeX Gyre Pagella')
                if element.get('style'):
                    element.set('style', re.sub(r'font-family\s*:[^;]+',
                                               'font-family: TeX Gyre Pagella', element.get('style')))
        rules = []
        for suffix, weight, italic in [('regular', 400, 'normal'), ('italic', 400, 'italic'),
                                        ('bold', 700, 'normal'), ('bolditalic', 700, 'italic')]:
            font = TTFont(FONTS / f'tex-gyre-pagella-{suffix}.woff2')
            options = subset.Options()
            options.flavor = 'woff2'
            options.recalc_timestamp = False
            options.drop_tables += ['FFTM']
            sub = subset.Subsetter(options=options)
            sub.populate(text=text)
            sub.subset(font)
            out = BytesIO()
            font.save(out)
            data = base64.b64encode(out.getvalue()).decode('ascii')
            rules.append("@font-face{font-family:'TeX Gyre Pagella';font-weight:" + str(weight) +
                         ';font-style:' + italic + ';src:url(data:font/woff2;base64,' + data + ") format('woff2')}")
        rules.append("text,tspan{font-family:'TeX Gyre Pagella',Palatino,serif!important}")
        style = ET.Element(f'{{{SVG}}}style', id='book-figure-font')
        style.text = '\n'.join(rules)
        root.insert(0, style)
    tree.write(str(path), encoding='utf-8', xml_declaration=True)


def fix_start_markers(path):
    """Draw the arrowheads at the start of a line without a rotated group.

    PreFigure draws a start marker as the end marker inside
    <g transform="rotate(180, cx, cy)">. diagcess.js, which displays annotated
    diagrams in the web version, gives that path the style "transform: inherit;
    fill: inherit", so the half turn is applied twice and the arrowhead points
    backwards (and loses its colour). Here the half turn is applied to the path
    data itself and the group is removed. The marker's own path is left alone by
    diagcess.js. Running this twice changes nothing.
    """
    tree = ET.parse(str(path))
    root = tree.getroot()
    changed = False
    for marker in root.iter(f'{{{SVG}}}marker'):
        for group in marker.findall(f'{{{SVG}}}g'):
            match = re.fullmatch(r'\s*rotate\(\s*180\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)\s*',
                                 group.get('transform', ''))
            if not match:
                continue
            cx, cy = float(match.group(1)), float(match.group(2))
            for shape in group.findall(f'{{{SVG}}}path'):
                shape.set('d', half_turn(shape.get('d'), cx, cy))
            index = list(marker).index(group)
            for offset, child in enumerate(list(group)):
                marker.insert(index + offset, child)
            marker.remove(group)
            changed = True
    if changed:
        tree.write(str(path), encoding='utf-8', xml_declaration=True)


def half_turn(d, cx, cy):
    """Path data made of M, L, A and Z commands, rotated by 180 degrees about (cx, cy)."""
    number = lambda value: ('%.3f' % value).rstrip('0').rstrip('.')
    turn = lambda x, y: [number(2 * cx - float(x)), number(2 * cy - float(y))]
    out = []
    for command, arguments in re.findall(r'([A-Za-z])([^A-Za-z]*)', d):
        values = re.findall(r'-?\d*\.?\d+(?:e-?\d+)?', arguments)
        if command in 'ML':
            assert len(values) % 2 == 0, d
            values = [v for i in range(0, len(values), 2) for v in turn(values[i], values[i + 1])]
        elif command == 'A':
            assert len(values) % 7 == 0, d
            values = [v for i in range(0, len(values), 7) for v in values[i:i + 5] + turn(values[i + 5], values[i + 6])]
        else:
            assert command in 'Zz' and not values, d
        out.append(' '.join([command] + values))
    return ' '.join(out)


def theme_chart(path):
    tree = ET.parse(str(path))
    for el in tree.iter():
        if not isinstance(el.tag, str):
            continue
        for attr in ('fill', 'stroke', 'color', 'stop-color'):
            value = el.get(attr)
            if value in CHART_COLORS:
                el.set(attr, CHART_COLORS[value])
        style = el.get('style')
        if style:
            el.set('style', re.sub(r'(fill|stroke|color)\s*:\s*([^;]+)',
                   lambda m: m[1] + ': ' + CHART_COLORS.get(m[2].strip(), m[2].strip()), style))
    tree.write(str(path), encoding='utf-8', xml_declaration=True)
    embed_font(path)


def build_standalone():
    """PreFigure diagrams kept in scripts/prefigure/, outside the book source.

    They are the print versions of interactive figures, which PreTeXt reads from
    a <static> element as ordinary image files (a <prefigure> cannot be nested
    there). Each NAME.xml becomes assets/images/NAME.svg and NAME.pdf.
    """
    import shutil
    import tempfile
    import cairosvg
    import prefig
    for source in sorted((ROOT / 'scripts' / 'prefigure').glob('*.xml')):
        target = ROOT / 'assets' / 'images' / (source.stem + '.svg')
        with tempfile.TemporaryDirectory() as tmp:
            work = Path(tmp) / source.name
            shutil.copy(source, work)
            prefig.engine.build('svg', str(work), ignore_publication=True)
            shutil.copy(Path(tmp) / 'output' / (source.stem + '.svg'), target)
        embed_font(target)
        cairosvg.svg2pdf(url=str(target), write_to=str(target.with_suffix('.pdf')))
        print('built', target.relative_to(ROOT), 'and its PDF', flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--xmlid')
    parser.add_argument('--standalone', action='store_true',
                        help='Build only the PreFigure diagrams in scripts/prefigure/')
    parser.add_argument('--embed-only', action='store_true')
    parser.add_argument('--skip-mindmap', action='store_true',
                        help='Reuse the committed mind-map SVG, without requiring a browser')
    args = parser.parse_args()
    os.chdir(ROOT)
    if args.standalone:
        prepare(include_mindmap=False)
        build_standalone()
        return
    if not args.embed_only:
        prepare(include_mindmap=not args.skip_mindmap and not args.xmlid)
        from pretext.cli import main as pretext
        extra = ['--xmlid', args.xmlid] if args.xmlid else []
        pretext(['generate', 'qrcode', '--force'], standalone_mode=False)
        pretext(['generate', 'prefigure', 'latex-image', '--force', *extra], standalone_mode=False)
        if not args.xmlid and not args.skip_mindmap:
            subprocess.run([sys.executable, str(ROOT / 'scripts' / 'make-mindmap-figure.py')], check=True)
        if not args.xmlid:
            build_standalone()

    # All source-defined PreFigure assets, including accessible SVG variants.
    for source in (ROOT / 'source').rglob('*.ptx'):
        tree = ET.parse(str(source))
        for pf in tree.findall('.//{https://prefigure.org}prefigure'):
            label = pf.get('label')
            path = ROOT / 'generated-assets' / 'prefigure' / (label + '.svg')
            if path.exists():
                embed_font(path)
                for variant in path.parent.glob(label + '-diagcess.svg'):
                    embed_font(variant)
                    fix_start_markers(variant)
                if not args.embed_only:
                    import cairosvg
                    cairosvg.svg2pdf(url=str(path), write_to=str(path.with_suffix('.pdf')))
    for path in (ROOT / 'assets' / 'images').glob('*.svg'):
        theme_chart(path)
    print('Static SVG figures now carry the book font and palette.', flush=True)


if __name__ == '__main__':
    main()
