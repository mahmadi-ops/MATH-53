#!/usr/bin/env python3
"""Check the paired IMT Parsons proofs after `pretext build web --no-generate`.

Uses installed Chromium, Playwright, and the locally cached MathJax packages in
.cache/figure-theme/node_modules, supplied by the figure authoring environment.
External book services are blocked; the real math renderer and grader run locally.
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
import re
import threading
from urllib.parse import unquote, urlsplit
from lxml import etree as ET
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parent.parent
PROOFS={'rs-ex-imt-1-8-parsons':6,'rs-ex-imt-1-9-parsons':7}


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self,*_):pass


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site-root',type=Path,default=ROOT/'output/web',help='Built or downloaded published website directory')
    args=parser.parse_args()
    source=ET.parse(str(ROOT/'source/matrix-algebra/sec-invertible-matrix-theorem.ptx'))
    for id,count in PROOFS.items():
        exercise=source.xpath('//*[@xml:id="'+id[3:]+'"]')[0]
        assert len(exercise.findall('blocks/block'))==count+1
        assert len(exercise.findall('blocks/block[@correct="no"]'))==1
        assert exercise.find('blocks').get('randomize')=='yes'
    pair=source.xpath('//*[@xml:id="imt-parsons-proofs"]')[0]
    assert pair.getnext() is None
    assert any('(10)' in ''.join(p.itertext()) for p in pair.itersiblings(preceding=True))
    assert not source.xpath('//p/term[contains(.,"(8)") or contains(.,"(9)")]')
    print('PASS: both directions, one distractor per proof, written proofs replaced in place',flush=True)
    server=ThreadingHTTPServer(('127.0.0.1',0),partial(QuietHandler,directory=str(args.site_root)))
    threading.Thread(target=server.serve_forever,daemon=True).start()
    packages=ROOT/'.cache/figure-theme/node_modules'
    def route_request(route):
        url=urlsplit(route.request.url)
        mapping=[(r'/npm/mathjax@[^/]+/(.+)',packages/'mathjax'),
                 (r'/npm/@mathjax/mathjax-pagella-font@[^/]+/(.+)',packages/'@mathjax/mathjax-pagella-font')]
        for pattern,folder in mapping:
            match=re.fullmatch(pattern,unquote(url.path))
            if match:
                path=(folder/match[1]).resolve()
                if path.is_relative_to(folder.resolve()) and path.is_file():
                    route.fulfill(path=str(path));return
        route.abort()
    try:
        with sync_playwright() as p:
            browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
            page=browser.new_page(viewport={'width':1500,'height':1100})
            page.route('https://**/*',route_request)
            base=f'http://127.0.0.1:{server.server_port}/sec-invertible-matrix-theorem.html'
            def ready():
                page.wait_for_function('''() => {
                    const ids=['rs-ex-imt-1-8-parsons','rs-ex-imt-1-9-parsons'];
                    return ids.every(id=>parseFloat(window.componentMap?.[id]?.answerArea?.style.height)>50);
                }''',timeout=20000)
            def fill(id,kind):
                page.evaluate('''({id,kind})=>{
                    const p=window.componentMap[id];
                    const blocks=[...p.blocks].sort((a,b)=>a.lines[0].index-b.lines[0].index);
                    blocks.forEach(b=>p.sourceArea.appendChild(b.view));
                    let selected=blocks.slice(0,-1);
                    if(kind==='reverse')selected.reverse();
                    if(kind==='distractor')selected[selected.length-1]=blocks.at(-1);
                    selected.forEach(b=>p.answerArea.appendChild(b.view));
                    p.updateView();
                }''',{'id':id,'kind':kind})
            page.goto(base,wait_until='networkidle');ready()
            boxes=[page.locator('#'+id[3:]).bounding_box() for id in PROOFS]
            assert abs(boxes[0]['y']-boxes[1]['y'])<2 and boxes[0]['x']<boxes[1]['x']
            for id,count in PROOFS.items():
                exercise=page.locator('#'+id[3:])
                check=exercise.get_by_role('button',name='Check',exact=True)
                reset=exercise.get_by_role('button',name='Reset',exact=True)
                check.click()
                assert page.evaluate('id=>window.componentMap[id].grade',id)!='correct'
                for kind in ['reverse','distractor','correct']:
                    reset.click();ready();fill(id,kind)
                    check.click()
                    state=page.evaluate('id=>window.componentMap[id].grade',id)
                    assert (state=='correct')==(kind=='correct'),(id,kind,state)
                reset.click();ready()
                assert exercise.locator('.answer .block').count()==0
                assert exercise.locator('.source .block').count()==count+1
            print('PASS: correct proofs accepted; incomplete, reordered, and distractor answers rejected; reset works',flush=True)
            id=next(iter(PROOFS))
            exercise=page.locator('#'+id[3:])
            block=exercise.locator('.source .block[tabindex="0"]')
            block.focus();page.keyboard.press('Space');page.keyboard.press('ArrowRight');page.keyboard.press('Space')
            assert exercise.locator('.answer .block').count()==1
            assert page.locator('#ex-imt-1-9-parsons .answer .block').count()==0
            exercise.get_by_role('button',name='Reset',exact=True).click();ready()
            top=page.locator('#imt-parsons-proofs').evaluate('e=>e.getBoundingClientRect().top+scrollY')
            page.evaluate('y=>scrollTo(0,y-100)',top)
            a=exercise.locator('.source .block').first.bounding_box()
            b=exercise.locator('.answer').bounding_box()
            page.mouse.move(a['x']+8,a['y']+8);page.mouse.down();page.wait_for_timeout(100)
            page.mouse.move(b['x']+b['width']/2,b['y']+30,steps=20)
            page.wait_for_timeout(100);page.mouse.up()
            assert exercise.locator('.answer .block').count()==1
            exercise.get_by_role('button',name='Reset',exact=True).click();ready()
            assert page.locator('#imt-parsons-proofs mjx-container').count()>30
            assert not page.locator('#imt-parsons-proofs [data-mml-node="merror"]').count()
            page.locator('#imt-parsons-proofs').screenshot(path='/tmp/math53-imt-parsons-desktop.png')
            print('PASS: keyboard and drag movement, independent boards, rendered math, desktop side-by-side layout',flush=True)
            for width in [375,820]:
                page.set_viewport_size({'width':width,'height':1000})
                page.goto(base,wait_until='networkidle');ready()
                boxes=[page.locator('#'+id[3:]).bounding_box() for id in PROOFS]
                assert abs(boxes[0]['x']-boxes[1]['x'])<2 and boxes[1]['y']>boxes[0]['y']
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
                assert page.locator('#imt-parsons-proofs').evaluate('e=>e.scrollWidth<=e.clientWidth+1')
                page.locator('#imt-parsons-proofs').screenshot(path=f'/tmp/math53-imt-parsons-{width}.png')
            print('PASS: responsive phone/tablet layouts and visible controls',flush=True)
            browser.close()
    finally:
        server.shutdown();server.server_close()


if __name__=='__main__':main()
