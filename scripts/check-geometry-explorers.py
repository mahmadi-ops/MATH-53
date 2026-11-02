#!/usr/bin/env python3
"""Check the three geometry explorers, optionally refreshing static SVGs/previews.

Run after `pretext build web --no-generate`. Requires Playwright and Chromium,
already supplied by the book's authoring environment. No browser downloads or
third-party requests are needed. --write-previews also needs requirements-figures.
"""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import importlib.util
from pathlib import Path
import subprocess
import sys
import threading
from lxml import etree as ET
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parent.parent
sys.dont_write_bytecode=True
DEMOS={
    'solution-set': ('int-solution-set-explorer','sec-systems-of-linear-equations'),
    'transformation-geometry': ('int-transformation-geometry','sec-transformations'),
    'change-of-basis': ('int-change-of-basis','sec-coordinates'),
}


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def slider(page, selector, value):
    page.locator(selector).evaluate("(el,v)=>{el.value=v;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));}",str(value))


def snapshot(page, name):
    """Export real SVG geometry, with no screenshots or fonts baked into paths."""
    if name=='solution-set':
        page.locator('#reset').click()
    elif name=='transformation-geometry':
        page.locator('#stage-vector').click()
    else:
        page.locator('#new-basis').click()
    svgs=page.locator('.scene').evaluate_all("es=>es.map(e=>e.outerHTML)")
    ns='http://www.w3.org/2000/svg'
    def namespaced(markup):
        element=ET.fromstring(markup.encode())
        for child in element.iter():
            if isinstance(child.tag,str) and not child.tag.startswith('{'):
                child.tag='{'+ns+'}'+child.tag
        ET.cleanup_namespaces(element,top_nsmap={None:ns})
        return element
    if len(svgs)==1:
        svg=namespaced(svgs[0])
    else:
        svg=ET.Element('{'+ns+'}svg',nsmap={None:ns},viewBox='0 0 1000 430')
        for i,markup in enumerate(svgs):
            label=ET.SubElement(svg,'{'+ns+'}text',x=str(20+i*500),y='28')
            label.text=['Domain: ℝ³ — input','Codomain: ℝ² — image'][i]
            child=namespaced(markup);child.set('x',str(i*500+10));child.set('y','50');child.set('width','480');child.set('height','360')
            svg.append(child)
    for key in ('id','class','tabindex','aria-describedby','aria-labelledby'):
        svg.attrib.pop(key,None)
    svg.set('role','img')
    svg.set('aria-label',{'solution-set':'The two planes intersect in (-3,-1,0)+s(9,1,1).','transformation-geometry':'The domain cube and basis arrows map to a parallelogram and the matrix columns.','change-of-basis':'The fixed vector (1,2) equals three halves of b1 plus twice b2.'}[name])
    style=ET.SubElement(svg,'{'+ns+'}style')
    style.text='text{font-size:17px;paint-order:stroke;stroke:white;stroke-width:4px;stroke-linejoin:round}'
    out=ROOT/'assets/images'/f'{name}-static.svg'
    ET.ElementTree(svg).write(str(out),encoding='utf-8',xml_declaration=True)
    spec=importlib.util.spec_from_file_location('figure_theme',ROOT/'scripts/build-book-figures.py')
    module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
    module.embed_font(out)
    xmlid=DEMOS[name][0]
    page.screenshot(path=str(ROOT/'generated-assets/preview'/f'{xmlid}-preview.png'),full_page=True)
    print('Wrote static SVG and preview:',name,flush=True)


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write-previews',action='store_true')
    parser.add_argument('--preview',choices=list(DEMOS),help='Limit preview export to this demo; all checks still run')
    args=parser.parse_args()
    subprocess.run(['node',str(ROOT/'scripts/check-geometry-math.cjs')],check=True)
    server=ThreadingHTTPServer(('127.0.0.1',0),partial(QuietHandler,directory=str(ROOT)))
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
    base=f'http://127.0.0.1:{server.server_port}'
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
            page=browser.new_page(viewport={'width':1040,'height':1000})
            errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
            for name in DEMOS:
                page.goto(f'{base}/assets/demos-manim/{name}.html',wait_until='networkidle')
                page.wait_for_selector('html.js-ready')
                if args.write_previews and (args.preview is None or args.preview==name):snapshot(page,name)
            page.goto(f'{base}/assets/demos-manim/solution-set.html')
            slider(page,'#parameter',1)
            assert page.locator('#point-coordinates').text_content()=='(6, 0, 1)'
            assert '= −1 ✓' in page.locator('#check-first').inner_text()
            assert '= 6 ✓' in page.locator('#check-second').inner_text()
            page.select_option('#third-plane','unique')
            assert 'does not satisfy' in page.locator('#check-third').inner_text()
            assert page.locator('[data-common-solution="point"]').count()==1
            slider(page,'#parameter',0)
            assert 'candidate satisfies' in page.locator('#check-third').inner_text()
            for value in ('infinite','empty'):
                page.select_option('#third-plane',value)
                assert ('satisfies' if value=='infinite' else 'does not satisfy') in page.locator('#check-third').inner_text()
            assert '∅' in page.locator('#common-set').inner_text()
            # Inspect actual rendered geometry and labels at extreme camera
            # angles and both slider endpoints, for every third-plane preset.
            page.evaluate('''() => {
                const set=(id,value)=>{const e=document.getElementById(id);e.value=value;e.dispatchEvent(new Event(id==='third-plane'?'change':'input',{bubbles:true}));};
                const svg=document.getElementById('solution-scene'),v=svg.viewBox.baseVal;
                for(const yaw of [-180,-90,0,55,90,180])for(const pitch of [10,25,75]) {
                    set('yaw',yaw);set('pitch',pitch);
                    for(const mode of ['none','unique','infinite','empty'])for(const s of [-1,1]) {
                        set('third-plane',mode);set('parameter',s);
                        for(const e of svg.querySelectorAll('[data-drawing] > *')) {
                            const b=e.getBBox();
                            if(b.x<4||b.y<4||b.x+b.width>v.width-4||b.y+b.height>v.height-4)
                                throw new Error(`Clipped ${e.tagName}: yaw=${yaw}, pitch=${pitch}, mode=${mode}, s=${s}`);
                        }
                    }
                }
            }''')
            page.locator('#reset').click()
            print('PASS: all plane corners and labels stay inside the frame through 144 camera/preset/endpoint cases',flush=True)
            page.locator('#solution-scene').focus();page.keyboard.press('ArrowRight')
            assert page.locator('#yaw').input_value()=='60'
            page.locator('#reset').click();page.locator('#parameter').focus();page.keyboard.press('ArrowRight')
            assert page.locator('#parameter').input_value()=='0.01'
            page.locator('#play').click();page.wait_for_timeout(150);page.locator('#play').click()
            value=page.locator('#parameter').input_value();page.wait_for_timeout(100)
            assert page.locator('#parameter').input_value()==value
            page.locator('#reset').click();assert page.locator('#third-plane').input_value()=='none'
            assert page.locator('#parameter').input_value()=='0'
            print('PASS: planes, all three presets, equation checks, keyboard rotation, play/pause/reset',flush=True)
            page.goto(f'{base}/assets/demos-manim/transformation-geometry.html')
            page.locator('#stage-vector').click()
            assert page.locator('#image-equation').inner_text().endswith('= (−1, 1)')
            page.locator('#input-z').focus();page.keyboard.press('ArrowLeft')
            assert page.locator('#input-z').input_value()=='1.75'
            assert page.locator('#image-equation').inner_text().endswith('= (−1, 1)')
            page.locator('#stage-fibers').click()
            assert 'T(1, −1, −2) = T(1, −1, 0) = T(1, −1, 2) = (−1, 1)' in page.locator('#same-image').inner_text()
            slider(page,'#input-x',2);slider(page,'#input-y',2)
            assert page.locator('#image-equation').inner_text().endswith('= (6, 6)')
            page.locator('#reset').click();assert page.locator('#stage-basis').get_attribute('aria-pressed')=='true'
            print('PASS: synchronized transformation, input controls, identical images, basis stages/reset',flush=True)
            page.goto(f'{base}/assets/demos-manim/change-of-basis.html')
            tip=page.locator('[data-fixed-tip]').evaluate('(e)=>[e.getAttribute("cx"),e.getAttribute("cy")]')
            for value in (0,25,50,75,100):
                slider(page,'#basis-progress',value)
                assert page.locator('[data-fixed-tip]').evaluate('(e)=>[e.getAttribute("cx"),e.getAttribute("cy")]')==tip
                first=page.locator('line[data-contribution="first"]');second=page.locator('line[data-contribution="second"]')
                assert first.get_attribute('x2')==second.get_attribute('x1')
                assert first.get_attribute('y2')==second.get_attribute('y1')
                assert second.get_attribute('x2')==tip[0] and second.get_attribute('y2')==tip[1]
            assert page.locator('#coordinate-pair').text_content()=='(3/2, 2)'
            page.locator('#reset').click();assert page.locator('#coordinate-pair').text_content()=='(1, 2)'
            print('PASS: fixed vector throughout the grid change; exact endpoint coordinates; head-to-tail sums',flush=True)
            assert not errors,errors
            guide=browser.new_page()
            guide.clock.install()
            for name in DEMOS:
                guide.goto(f'{base}/assets/demos-manim/{name}.html',wait_until='networkidle')
                guide.locator('#play').click();guide.clock.fast_forward(16000)
                assert guide.locator('#play').inner_text()=='Replay guide',name
                guide.locator('#reset').click();assert guide.locator('#play').inner_text()=='Play guide',name
            guide.close()
            print('PASS: all three one-shot guides finish and reset correctly',flush=True)
            for name in DEMOS:
                page.set_viewport_size({'width':375,'height':900})
                page.goto(f'{base}/assets/demos-manim/{name}.html',wait_until='networkidle')
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),name
                assert page.evaluate('document.fonts.check(\'16px "TeX Gyre Pagella"\')'),name
                page.screenshot(path=f'/tmp/math53-{name}-mobile.png',full_page=True)
            for reduced in (True,False):
                context=browser.new_context(reduced_motion='reduce' if reduced else 'no-preference',java_script_enabled=reduced)
                view=context.new_page()
                for name in DEMOS:
                    view.goto(f'{base}/assets/demos-manim/{name}.html',wait_until='networkidle')
                    if reduced:
                        assert view.locator('#play').inner_text()=='Next guided step'
                        view.locator('#play').click();before=view.locator('.readout').inner_text();view.wait_for_timeout(120)
                        assert view.locator('.readout').inner_text()==before
                    else:
                        assert view.locator('.fallback').is_visible()
                        assert view.locator('.fallback img').evaluate('(e)=>e.complete&&e.naturalWidth>0')
                context.close()
            print('PASS: mobile layouts, local Pagella font, reduced motion, no-JavaScript static diagrams',flush=True)
            for name in DEMOS:
                tree=ET.parse(str(ROOT/'assets/images'/f'{name}-static.svg'))
                assert tree.getroot().tag=='{http://www.w3.org/2000/svg}svg'
                assert tree.xpath('//*[@id="book-figure-font"]'),name
            if not args.write_previews and (ROOT/'output/web/sec-coordinates.html').exists():
                # External book services are unrelated to the self-contained embeds.
                page.route('https://**/*',lambda route:route.abort())
                for name,(xmlid,section) in DEMOS.items():
                    page.goto(f'{base}/output/web/{section}.html',wait_until='networkidle')
                    page.locator(f'iframe#{xmlid}').evaluate('(f)=>{for(let e=f.parentElement;e;e=e.parentElement)if(e.tagName==="DETAILS")e.open=true;}')
                    frame=page.frame_locator(f'iframe#{xmlid}')
                    frame.locator('html.js-ready').wait_for()
                    assert frame.locator('.question').is_visible(),section
                    assert page.locator(f'iframe#{xmlid}').evaluate('(f)=>f.clientHeight>=f.contentDocument.body.scrollHeight-2'),section
                print('PASS: all three rebuilt book sections embed and fit the explorers at mobile width',flush=True)
            browser.close()
    finally:
        server.shutdown();server.server_close()


if __name__=='__main__':main()
