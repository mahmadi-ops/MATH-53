#!/usr/bin/env python3
"""Build a highlighted review copy of changed pages in the HTML book.

Compares two builds of the web target (before and after an edit) block by
block, and writes copies of the chosen pages in which every new, changed, or
removed block is marked:

  * new blocks get a yellow background and a "New" tag;
  * changed blocks get the same highlight, a "Changed" tag, and the previous
    version (in grey) directly underneath;
  * removed blocks are shown in grey, struck through, with a "Removed" tag.

A block is a top-level item of a section: a paragraph, example, figure,
definition, exercise, and so on. Blocks are matched by content, with
automatic numbers (Example 1.8, link texts) ignored, so inserting a new
example does not mark every later example as changed.

The source files are not touched: all review markup lives in the generated
copy. A summary page lists every change with a link to it.

Usage:
  pretext build web            # in a checkout of the old version  -> OLD/output/web
  pretext build web            # in the edited checkout            -> NEW/output/web
  python3 scripts/review-changes.py OLD/output/web NEW/output/web OUT \
      --pages sec-a.html sec-b.html --labels labels.json --title "Chapter 1 review"

labels.json (optional) maps an xml:id, or "~some text" (a substring of the
block's text), to a short note shown in the block's tag, e.g.
  {"eg-standard-form": "Review item 01"}
"""

import argparse
import copy
import difflib
import html as htmllib
import json
import re
import shutil
from pathlib import Path

from lxml import html

PARSER = html.HTMLParser(encoding="utf-8")
CONTAINER_CLASSES = {"section", "subsection", "subsubsection", "exercises",
                     "introduction", "conclusion", "worksheet", "reading-questions"}
SKIP_CLASSES = {"autopermalink", "heading"}


def classes(el):
    return set((el.get("class") or "").split())


def is_container(el):
    return el.tag == "section" and classes(el) & CONTAINER_CLASSES


def blocks_of(container):
    """Flatten a section into its top-level content blocks, in order."""
    out = []
    for ch in container:
        if not isinstance(ch.tag, str):
            continue
        if ch.tag in ("h1", "h2", "h3", "h4") or classes(ch) & SKIP_CLASSES:
            continue
        if is_container(ch):
            out.extend(blocks_of(ch))
        else:
            out.append(ch)
    return out


def signature(el):
    """Text of a block with automatic numbering removed."""
    el = copy.deepcopy(el)
    for num in el.xpath('.//*[contains(concat(" ", @class, " "), " codenumber ")]'):
        num.text = ""
        for c in list(num):
            num.remove(c)
    for a in el.xpath('.//a[contains(concat(" ", @class, " "), " xref ")]'):
        target = (a.get("href") or "").split("#")[-1]
        for c in list(a):
            a.remove(c)
        a.text = "[ref:" + target + "]"
    text = el.text_content()
    return re.sub(r"\s+", " ", text).strip()


def same_kind(a, b):
    """Only blocks of the same type (paragraph, example, figure, ...) can pair."""
    return a.tag == b.tag and (a.get("class") or "").split()[:1] == (b.get("class") or "").split()[:1]


def block_title(el):
    if el.tag == "figure":
        cap = el.xpath('./figcaption')
        if cap:
            t = re.sub(r"\s+", " ", cap[0].text_content()).strip()
            return (t[:90] + "…") if len(t) > 90 else t
    heads = el.xpath('.//*[contains(concat(" ", @class, " "), " heading ")]')
    if heads:
        t = re.sub(r"\s+", " ", heads[0].text_content()).strip()
        if len(t) > 8:
            return t
    t = re.sub(r"\s+", " ", el.text_content()).strip()
    return (t[:90] + "…") if len(t) > 90 else t


def ids_in(el):
    ids = [el.get("id")] if el.get("id") else []
    return ids + [d.get("id") for d in el.iterdescendants() if isinstance(d.tag, str) and d.get("id")]


def label_for(el, sig, labels):
    for key, val in labels.items():
        if key.startswith("~"):
            if key[1:] in sig:
                return val
        elif key in ids_in(el):
            return val
    return ""


def strip_ids(el):
    for d in [el] + list(el.iterdescendants()):
        if isinstance(d.tag, str) and "id" in d.attrib:
            del d.attrib["id"]
    return el


def tag_div(kind, label, anchor):
    text = {"new": "New", "changed": "Changed", "removed": "Removed"}[kind]
    if label:
        text += " · " + label
    return html.fragment_fromstring(
        f'<div class="rv-tag"><a href="#{anchor}">{htmllib.escape(text)}</a></div>')


def review_page(old_path, new_path, out_path, labels, page_title, summary):
    old_doc = html.parse(str(old_path), PARSER).getroot()
    new_doc = html.parse(str(new_path), PARSER).getroot()
    sec_id = Path(new_path).stem
    old_sec = old_doc.get_element_by_id(sec_id)
    new_sec = new_doc.get_element_by_id(sec_id)
    old_blocks, new_blocks = blocks_of(old_sec), blocks_of(new_sec)
    old_sigs = [signature(b) for b in old_blocks]
    new_sigs = [signature(b) for b in new_blocks]

    outer = list(new_blocks)  # element standing for each new block in the page
    marks = []                # (kind, new_index or None, old_index or None)

    sm = difflib.SequenceMatcher(None, old_sigs, new_sigs, autojunk=False)
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == "equal":
            continue
        olds, news = list(range(i1, i2)), list(range(j1, j2))
        pairs = {}
        for j in news:
            best, best_r = None, 0.0
            for i in olds:
                if i in pairs.values():
                    continue
                if not same_kind(old_blocks[i], new_blocks[j]):
                    continue
                same_id = old_blocks[i].get("id") and old_blocks[i].get("id") == new_blocks[j].get("id")
                r = difflib.SequenceMatcher(None, old_sigs[i].split(), new_sigs[j].split(),
                                            autojunk=False).ratio()
                if same_id and not re.search(r"-\d+$", old_blocks[i].get("id")):
                    r = max(r, 0.99)
                if r > best_r:
                    best, best_r = i, r
            if best is not None and best_r >= 0.4:
                pairs[j] = best
        paired_old = set(pairs.values())
        pending_removed = [i for i in olds if i not in paired_old]
        for j in news:
            # removed blocks that came before this position in the old order
            while pending_removed and (j in pairs and pending_removed[0] < pairs[j]):
                marks.append(("removed", j, pending_removed.pop(0)))
            marks.append(("changed" if j in pairs else "new", j, pairs.get(j)))
        for i in pending_removed:
            marks.append(("removed", j2, i))  # j2: insert before the next block

    count = 0
    for kind, j, i in marks:
        count += 1
        anchor = f"rv-{sec_id}-{count}"
        if kind in ("new", "changed"):
            el = new_blocks[j]
            sig = new_sigs[j]
            wrap = html.fragment_fromstring(f'<div class="rv rv-{kind}" id="{anchor}"></div>')
            el.addprevious(wrap)
            lab = label_for(el, sig, labels) or (label_for(old_blocks[i], old_sigs[i], labels) if i is not None else "")
            wrap.append(tag_div(kind, lab, anchor))
            wrap.append(el)
            if kind == "changed":
                prev = html.fragment_fromstring('<details class="rv-prev" open=""><summary>Previous version</summary></details>')
                prev.append(strip_ids(copy.deepcopy(old_blocks[i])))
                wrap.append(prev)
            outer[j] = wrap
            title = block_title(el)
        else:
            el = strip_ids(copy.deepcopy(old_blocks[i]))
            lab = label_for(old_blocks[i], old_sigs[i], labels)
            wrap = html.fragment_fromstring(f'<div class="rv rv-removed" id="{anchor}"></div>')
            wrap.append(tag_div(kind, lab, anchor))
            wrap.append(el)
            if j < len(outer):
                outer[j].addprevious(wrap)
            else:
                outer[-1].addnext(wrap)
            title = block_title(old_blocks[i])
        summary.append({"page": out_path.name, "anchor": anchor, "kind": kind,
                        "label": lab, "title": title, "section": page_title})

    for d in new_doc.iter("details"):
        d.set("open", "")
    for s in new_doc.xpath('//script[@type="text/x-sage"]'):
        pre = html.fragment_fromstring('<pre class="rv-sage"></pre>')
        pre.text = (s.text or "").strip("\n")
        s.getparent().replace(s, pre)

    head = new_doc.find("head")
    head.insert(0, html.fragment_fromstring('<meta charset="utf-8">'))
    head.append(html.fragment_fromstring('<link rel="stylesheet" href="review-highlight.css">'))
    n_new = sum(1 for k, *_ in marks if k == "new")
    n_chg = sum(1 for k, *_ in marks if k == "changed")
    n_rem = sum(1 for k, *_ in marks if k == "removed")
    banner = html.fragment_fromstring(
        f'<div class="rv-banner"><strong>Review copy.</strong> {htmllib.escape(page_title)}: '
        f'{n_new} new, {n_chg} changed, {n_rem} removed. '
        f'<a href="review-summary.html">All changes</a></div>')
    new_sec.insert(0, banner)
    out_path.write_bytes(html.tostring(new_doc, doctype="<!DOCTYPE html>", encoding="utf-8"))
    return n_new, n_chg, n_rem


CSS = """
.rv { position: relative; margin: 1.1em 0; padding: 0.55em 0.8em 0.6em;
      border-left: 5px solid #d4a300; border-radius: 3px;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.rv-new, .rv-changed { background: #fff4b8; }
.rv-removed { background: #eeeeee; border-left-color: #9a9a9a; color: #6b6b6b; }
.rv-removed > :not(.rv-tag), .rv-removed > :not(.rv-tag) * { text-decoration: line-through;
      text-decoration-color: #9a9a9a; }
.rv-tag { display: table; font: 600 0.72rem/1.4 system-ui, sans-serif;
      letter-spacing: 0.04em; text-transform: uppercase; padding: 0.1em 0.5em;
      margin-bottom: 0.35em; border-radius: 3px; background: #d4a300; color: #fff; }
.rv-tag a { color: inherit; text-decoration: none; }
.rv-removed .rv-tag { background: #8a8a8a; }
.rv-prev { margin-top: 0.6em; padding: 0.4em 0.7em; background: #f1f1f1;
      border: 1px dashed #b5b5b5; color: #5e5e5e; }
.rv-prev > summary { font: 600 0.72rem/1.4 system-ui, sans-serif; text-transform: uppercase;
      letter-spacing: 0.04em; color: #777; cursor: pointer; }
.rv .example-like, .rv .exercise-like { background: transparent; }
.rv-banner { margin: 0 0 1.2em; padding: 0.6em 0.9em; background: #fff4b8;
      border: 1px solid #d4a300; border-radius: 4px; font-family: system-ui, sans-serif;
      font-size: 0.9rem; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
pre.rv-sage { background: #f6f6f6; border: 1px solid #ddd; padding: 0.6em; font-size: 0.82rem;
      white-space: pre-wrap; }
.rv-summary table { border-collapse: collapse; width: 100%; font-size: 0.92rem; }
.rv-summary td, .rv-summary th { border-bottom: 1px solid #ddd; padding: 0.35em 0.5em;
      text-align: left; vertical-align: top; }
.rv-summary .k-new, .rv-summary .k-changed { background: #fff4b8; }
.rv-summary .k-removed { background: #eee; color: #666; }
@media print {
  .ptx-masthead, .ptx-navbar, .ptx-sidebar, .ptx-page-footer, .ptx-content-footer,
  .autopermalink, .interactive-iframe-container__opener, #ptx-sidebar, nav { display: none !important; }
  .ptx-main { margin: 0 !important; }
  .rv { break-inside: auto; }
  .rv-tag, .rv-prev > summary { break-after: avoid; }
}
"""


def summary_page(out_dir, rows, title, totals):
    body = [f"<h1>{htmllib.escape(title)}</h1>",
            f"<p>{totals[0]} new, {totals[1]} changed, {totals[2]} removed blocks. "
            "New and changed blocks are highlighted in yellow; a changed block shows its "
            "previous version in grey underneath; removed blocks are grey and struck through.</p>",
            "<table><tr><th>#</th><th>Section</th><th>Change</th><th>Note</th><th>Block</th></tr>"]
    for n, r in enumerate(rows, 1):
        body.append(
            f'<tr class="k-{r["kind"]}"><td>{n}</td><td>{htmllib.escape(r["section"])}</td>'
            f'<td>{r["kind"].capitalize()}</td><td>{htmllib.escape(r["label"])}</td>'
            f'<td><a href="{r["page"]}#{r["anchor"]}">{htmllib.escape(r["title"])}</a></td></tr>')
    body.append("</table>")
    doc = ("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Review summary</title>"
           "<link rel='stylesheet' href='review-highlight.css'>"
           "<script defer src='https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js'></script>"
           "<style>body{font-family:'TeX Gyre Pagella',Palatino,Georgia,serif;max-width:60rem;"
           "margin:2rem auto;padding:0 1rem}</style></head><body class='rv-summary'>"
           + "".join(body) + "</body></html>")
    (out_dir / "review-summary.html").write_text(doc, encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("old_web")
    ap.add_argument("new_web")
    ap.add_argument("out_dir")
    ap.add_argument("--pages", nargs="+", required=True)
    ap.add_argument("--labels")
    ap.add_argument("--title", default="Review of changes")
    a = ap.parse_args()
    old_web, new_web, out = Path(a.old_web), Path(a.new_web), Path(a.out_dir)
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(new_web, out)
    labels = json.loads(Path(a.labels).read_text()) if a.labels else {}
    (out / "review-highlight.css").write_text(CSS)
    rows, totals = [], [0, 0, 0]
    for page in a.pages:
        doc = html.parse(str(new_web / page), PARSER).getroot()
        heading = doc.xpath('//section[@id="%s"]/h1' % Path(page).stem)
        page_title = re.sub(r"\s+", " ", heading[0].text_content()).strip() if heading else page
        counts = review_page(old_web / page, new_web / page, out / page, labels, page_title, rows)
        totals = [t + c for t, c in zip(totals, counts)]
        print(f"{page}: {counts[0]} new, {counts[1]} changed, {counts[2]} removed")
    summary_page(out, rows, a.title, totals)
    print(f"Wrote {out / 'review-summary.html'}")


if __name__ == "__main__":
    main()
