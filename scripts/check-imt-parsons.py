#!/usr/bin/env python3
"""Check the IMT Parsons proofs and true/false example after a website build.

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
                    return ids.every(id=>{
                        const p=window.componentMap?.[id];
                        return parseFloat(p?.answerArea?.style.height)>50 &&
                            p.blocks?.length && p.blocks.every(block=>block.hammer) &&
                            [p.sourceArea,p.answerArea].every(area=>
                                area.dataset.parsonsFitMode==='fit' &&
                                Math.abs(area.getBoundingClientRect().height-Number(area.dataset.parsonsFittedHeight))<1);
                    });
                }''',timeout=20000)
            def compact(id):
                result=page.locator('#'+id[3:]).evaluate('''exercise=>{
                    return [...exercise.querySelectorAll('.source,.answer')].map(area=>{
                        const r=area.getBoundingClientRect();
                        const cards=[...area.children].filter(e=>e.classList.contains('block'));
                        const bottom=Math.max(0,...cards.map(e=>e.getBoundingClientRect().bottom-r.top));
                        return {height:r.height,bottom,count:cards.length};
                    });
                }''')
                for area in result:
                    assert abs(area['height']-max(64,area['bottom']+12))<2,(id,area)
                return result
            def fill(id,kind):
                page.evaluate('''({id,kind})=>{
                    const p=window.componentMap[id];
                    const blocks=[...p.blocks].sort((a,b)=>a.lines[0].index-b.lines[0].index);
                    blocks.forEach(b=>p.sourceArea.appendChild(b.view));
                    let selected=blocks.slice(0,-1);
                    if(kind==='reverse')selected.reverse();
                    if(kind==='distractor')selected[selected.length-1]=blocks.at(-1);
                    if(kind==='all')selected=blocks;
                    if(kind==='partial')selected=selected.slice(0,2);
                    p.state=undefined;
                    selected.forEach(b=>p.answerArea.appendChild(b.view));
                    p.updateView();
                    p.initializeTabIndex();
                }''',{'id':id,'kind':kind})
            page.goto(base,wait_until='networkidle');ready()
            line=page.locator('#intro-imt-parsons').bounding_box()
            pair_box=page.locator('#imt-parsons-proofs').bounding_box()
            assert abs(line['width']-pair_box['width'])<2
            for id in PROOFS:
                exercise=page.locator('#'+id[3:])
                assert abs(exercise.bounding_box()['width']-line['width'])<2
                source_box=exercise.locator('.source').bounding_box()
                answer_box=exercise.locator('.answer').bounding_box()
                assert abs(source_box['y']-answer_box['y'])<2
                assert answer_box['x']>=source_box['x']+source_box['width']
                span=answer_box['x']+answer_box['width']-source_box['x']
                assert exercise.bounding_box()['width']*.8<=span<=exercise.bounding_box()['width']
                assert exercise.locator('.source .block').first.bounding_box()['width']>=source_box['width']*.9
                assert compact(id)[1]['height']==64
            print('PASS: full text-width exercises with two side-by-side work boxes',flush=True)
            for id,count in PROOFS.items():
                exercise=page.locator('#'+id[3:])
                check=exercise.get_by_role('button',name='Check',exact=True)
                reset=exercise.get_by_role('button',name='Reset',exact=True)
                check.click()
                assert page.evaluate('id=>window.componentMap[id].grade',id)!='correct'
                for kind in ['reverse','distractor','all','correct']:
                    reset.click();ready();fill(id,kind);ready();compact(id)
                    check.click()
                    state=page.evaluate('id=>window.componentMap[id].grade',id)
                    assert (state=='correct')==(kind=='correct'),(id,kind,state)
                reset.click();ready()
                assert compact(id)[1]['height']==64
                assert exercise.locator('.answer .block').count()==0
                assert exercise.locator('.source .block').count()==count+1
            print('PASS: correct proofs accepted; incomplete, reordered, and distractor answers rejected; reset works',flush=True)
            id=next(iter(PROOFS))
            exercise=page.locator('#'+id[3:])
            entry=exercise.locator('.sortable-code-container[role="button"]')
            if entry.count():
                entry.focus();page.keyboard.press('Enter')
            else:
                exercise.locator('.source .block[tabindex="0"]').focus()
            page.keyboard.press('Space');page.keyboard.press('ArrowRight');page.keyboard.press('Space')
            ready();compact(id)
            assert exercise.locator('.answer .block').count()==1
            assert page.locator('#ex-imt-1-9-parsons .answer .block').count()==0
            exercise.get_by_role('button',name='Reset',exact=True).click();ready()
            top=page.locator('#imt-parsons-proofs').evaluate('e=>e.getBoundingClientRect().top+scrollY')
            page.evaluate('y=>scrollTo(0,y-100)',top)
            a=exercise.locator('.source .block').last.bounding_box()
            page.mouse.move(a['x']+8,a['y']+8);page.mouse.down();page.wait_for_timeout(100)
            page.mouse.move(a['x']+28,a['y']+8,steps=4)
            page.wait_for_function('''id=>window.componentMap[id].answerArea.dataset.parsonsFitMode==='drag' ''',arg=id)
            b=exercise.locator('.answer').bounding_box()
            assert b['height']>64 and b['y']<=a['y']+8<b['y']+b['height']
            page.mouse.move(b['x']+b['width']/2,a['y']+8,steps=20)
            page.wait_for_timeout(100);page.mouse.up()
            ready();compact(id)
            assert exercise.locator('.answer .block').count()==1
            exercise.get_by_role('button',name='Reset',exact=True).click();ready();compact(id)
            fill(id,'partial');ready();compact(id)
            if entry.count():
                entry.focus();page.keyboard.press('Enter')
            else:
                exercise.locator('.source .block[tabindex="0"]').focus()
            # Horizontal navigation selects a card at a similar height;
            # move to the first proof card before testing a downward reorder.
            page.keyboard.press('ArrowRight');page.keyboard.press('ArrowUp');page.keyboard.press('Space')
            page.keyboard.press('ArrowDown');page.keyboard.press('Space')
            ready();compact(id)
            order=page.evaluate('id=>window.componentMap[id].answerBlocks().map(b=>b.lines[0].index)',id)
            assert len(order)==2 and order[0]>order[1],order
            page.keyboard.press('Space');page.keyboard.press('ArrowLeft');page.keyboard.press('Space')
            ready();compact(id)
            assert exercise.locator('.answer .block').count()==1
            exercise.get_by_role('button',name='Reset',exact=True).click();ready();compact(id)
            assert page.locator('#imt-parsons-proofs mjx-container').count()>30
            assert not page.locator('#imt-parsons-proofs [data-mml-node="merror"]').count()
            page.locator('#imt-parsons-proofs').screenshot(path='/tmp/math53-imt-parsons-desktop.png')
            print('PASS: keyboard and drag movement, independent boards, rendered math, side-by-side work areas',flush=True)
            print('PASS: compact empty/partial/full boxes, expanded pointer targets, and compact Reset',flush=True)
            for width in [375,820]:
                page.set_viewport_size({'width':width,'height':1000})
                page.goto(base,wait_until='networkidle');ready()
                for id in PROOFS:compact(id)
                boxes=[page.locator('#'+id[3:]).bounding_box() for id in PROOFS]
                assert abs(boxes[0]['x']-boxes[1]['x'])<2 and boxes[1]['y']>boxes[0]['y']
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
                assert page.locator('#imt-parsons-proofs').evaluate('e=>e.scrollWidth<=e.clientWidth+1')
                page.locator('#imt-parsons-proofs').screenshot(path=f'/tmp/math53-imt-parsons-{width}.png')
            print('PASS: responsive phone/tablet layouts and visible controls',flush=True)
            # Exercise the true/false example through its native controls.
            # Keep both choices and the feedback independent for each part.
            tf_ids=['rs-tf-imt-zero-vector','rs-tf-imt-elementary-product']
            for width in [1500,375,820]:
                page.evaluate('localStorage.clear()')
                page.set_viewport_size({'width':width,'height':1100})
                page.goto(base,wait_until='networkidle')
                example=page.locator('#eg-true-false')
                example.locator(':scope > summary').click()
                page.wait_for_function('''ids=>ids.every(id=>
                    window.componentMap?.[id]?.optionArray?.length===2)''',arg=tf_ids)
                for index,id in enumerate(tf_ids):
                    question=page.locator('#'+id)
                    feedback=page.locator('#'+id+'_feedback')
                    assert feedback.get_attribute('aria-live')=='polite'
                    assert not feedback.inner_text().strip()
                    choices=question.get_by_role('radio')
                    assert choices.count()==2
                    assert question.get_by_role('radiogroup').get_attribute('aria-labelledby')==id+'_prompt'
                    check=question.get_by_role('button',name='Check',exact=False)
                    # False is wrong for both statements, including after a
                    # correct answer: the result must follow the latest input.
                    for answer in [False,True,False,True]:
                        choices.nth(0 if answer else 1).check()
                        check.click()
                        page.wait_for_function('''({id,answer})=>
                            window.componentMap[id].correct===answer''',arg={'id':id,'answer':answer})
                        assert feedback.is_visible() and 'True.' in feedback.inner_text()
                        assert ('alert-danger' in feedback.get_attribute('class')) != answer
                    if index==0:
                        assert not page.locator('#'+tf_ids[1]+'_feedback').inner_text().strip()
                    # Native radio navigation and button submission work with
                    # just the keyboard, including changing an earlier answer.
                    choices.nth(0).focus();page.keyboard.press('ArrowDown')
                    assert choices.nth(1).is_checked()
                    page.keyboard.press('Tab');page.keyboard.press('Enter')
                    assert page.evaluate('id=>window.componentMap[id].correct',id) is False
                    choices.nth(1).focus();page.keyboard.press('ArrowUp')
                    page.keyboard.press('Tab');page.keyboard.press('Enter')
                    assert page.evaluate('id=>window.componentMap[id].correct',id) is True
                    page.wait_for_function('''id=>document.getElementById(id+'_feedback').querySelector('mjx-container')''',arg=id)
                    assert not feedback.locator('[data-mml-node="merror"]').count()
                    styles=check.evaluate('e=>({font:getComputedStyle(e).fontFamily,color:getComputedStyle(e).color,height:e.getBoundingClientRect().height})')
                    assert 'Pagella' in styles['font'] and styles['color']=='rgb(74, 93, 35)'
                    assert styles['height']>=44
                    assert feedback.evaluate('e=>getComputedStyle(e).backgroundColor')=='rgb(237, 240, 230)'
                    assert question.evaluate('e=>getComputedStyle(e).backgroundColor')=='rgb(237, 240, 230)'
                    assert question.evaluate('e=>getComputedStyle(e).borderColor')=='rgb(196, 205, 177)'
                assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
                assert example.evaluate('e=>e.scrollWidth<=e.clientWidth+1')
                example.screenshot(path=f'/tmp/math53-imt-true-false-{width}.png')
            print('PASS: true/false grading and retries, independent feedback, keyboard controls, rendered math, book styling, and mobile layouts',flush=True)
            browser.close()
    finally:
        server.shutdown();server.server_close()


if __name__=='__main__':main()
