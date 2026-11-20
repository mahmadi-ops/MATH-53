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

For a second round of edits, pass the build that the earlier review copy was
made from as --previous PREV/output/web. Changes already present in it keep
the yellow highlight; changes made since are highlighted in green, and a
block that was revised since shows its version from the earlier copy. Name
the rounds with --round-names "Round 1" "Round 2". A page that is new (not
in the old build) is marked as new throughout.
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


def shorten(t, limit=90):
    """Trim a title, without cutting in the middle of a formula."""
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) > limit:
        t = t[:limit]
        if t.count("\\(") > t.count("\\)"):
            t = t[:t.rindex("\\(")]
        t = t.rstrip() + "…"
    return t


def block_title(el):
    if el.tag == "figure":
        cap = el.xpath('./figcaption')
        if cap:
            return shorten(cap[0].text_content())
    heads = el.xpath('.//*[contains(concat(" ", @class, " "), " heading ")]')
    if heads:
        t = re.sub(r"\s+", " ", heads[0].text_content()).strip()
        if len(t) > 8:
            return t
    return shorten(el.text_content())


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


def tag_div(text, anchor):
    return html.fragment_fromstring(
        f'<div class="rv-tag"><a href="#{anchor}">{htmllib.escape(text)}</a></div>')


def load_blocks(path, sec_id):
    """Blocks of a page's main section; empty if the page does not exist."""
    if path is None or not Path(path).exists():
        return []
    doc = html.parse(str(path), PARSER).getroot()
    try:
        return blocks_of(doc.get_element_by_id(sec_id))
    except KeyError:
        return []


def stable_id(el):
    """An id that came from an xml:id in the source (not an automatic one)."""
    i = el.get("id")
    return i if i and not re.search(r"-\d+$", i) else None


def review_page(old_path, new_path, out_path, labels, page_title, summary,
                prev_path=None, rounds=("earlier", "latest")):
    new_doc = html.parse(str(new_path), PARSER).getroot()
    sec_id = Path(new_path).stem
    new_sec = new_doc.get_element_by_id(sec_id)
    old_blocks, new_blocks = load_blocks(old_path, sec_id), blocks_of(new_sec)
    old_sigs = [signature(b) for b in old_blocks]
    new_sigs = [signature(b) for b in new_blocks]

    # An optional intermediate build (an earlier review copy) splits the
    # changes into two rounds: those already in it, and those made since.
    two_rounds = prev_path is not None
    prev_blocks = load_blocks(prev_path, sec_id) if two_rounds else []
    prev_sigs = {signature(b) for b in prev_blocks}
    prev_by_id = {stable_id(b): b for b in prev_blocks if stable_id(b)}

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
                if same_id and stable_id(old_blocks[i]):
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

    counts = {}
    for count, (kind, j, i) in enumerate(marks, 1):
        anchor = f"rv-{sec_id}-{count}"
        if kind in ("new", "changed"):
            el, sig = new_blocks[j], new_sigs[j]
            latest = two_rounds and sig not in prev_sigs
            earlier_version = prev_by_id.get(stable_id(el)) if latest else None
            previous, previous_title = None, "Previous version"
            if earlier_version is not None:
                # The block was already in the earlier review copy and has been
                # edited since: show that version, which is what changed last.
                previous, previous_title = earlier_version, "Version in the earlier review copy"
                word = "Revised"
            elif kind == "changed":
                previous, word = old_blocks[i], "Changed"
            else:
                word = "New"
            lab = label_for(el, sig, labels) or (label_for(old_blocks[i], old_sigs[i], labels) if i is not None else "")
            wrap = html.fragment_fromstring(
                f'<div class="rv rv-{kind}{" rv-latest" if latest else ""}" id="{anchor}"></div>')
            el.addprevious(wrap)
            wrap.append(el)
            if previous is not None:
                prev = html.fragment_fromstring(
                    f'<details class="rv-prev" open=""><summary>{previous_title}</summary></details>')
                prev.append(strip_ids(copy.deepcopy(previous)))
                wrap.append(prev)
            outer[j] = wrap
            title = block_title(el)
        else:
            latest = two_rounds and old_sigs[i] in prev_sigs
            word = "Removed"
            lab = label_for(old_blocks[i], old_sigs[i], labels)
            wrap = html.fragment_fromstring(
                f'<div class="rv rv-removed{" rv-latest" if latest else ""}" id="{anchor}"></div>')
            wrap.append(strip_ids(copy.deepcopy(old_blocks[i])))
            if j < len(outer):
                outer[j].addprevious(wrap)
            else:
                outer[-1].addnext(wrap)
            title = block_title(old_blocks[i])
        round_name = (rounds[1] if latest else rounds[0]) if two_rounds else ""
        text = " · ".join(t for t in (word, round_name, lab) if t)
        wrap.insert(0, tag_div(text, anchor))
        key = (round_name, word)
        counts[key] = counts.get(key, 0) + 1
        summary.append({"page": out_path.name, "anchor": anchor, "kind": kind, "word": word,
                        "latest": latest, "round": round_name, "label": lab, "title": title,
                        "section": page_title})

    for d in new_doc.iter("details"):
        if "born-hidden-knowl" in (d.get("class") or ""):   # examples, solutions, proofs
            d.set("open", "")
    for s in new_doc.xpath('//script[@type="text/x-sage"]'):
        pre = html.fragment_fromstring('<pre class="rv-sage"></pre>')
        pre.text = (s.text or "").strip("\n")
        s.getparent().replace(s, pre)

    head = new_doc.find("head")
    head.insert(0, html.fragment_fromstring('<meta charset="utf-8">'))
    head.append(html.fragment_fromstring('<link rel="stylesheet" href="review-highlight.css">'))
    tally = ", ".join(f"{n} {word.lower()}" + (f" ({rnd})" if rnd else "")
                      for (rnd, word), n in sorted(counts.items())) or "no changes"
    banner = html.fragment_fromstring(
        f'<div class="rv-banner"><strong>Review copy.</strong> {htmllib.escape(page_title)}: '
        f'{htmllib.escape(tally)}. <a href="review-summary.html">All changes</a></div>')
    new_sec.insert(0, banner)
    out_path.write_bytes(html.tostring(new_doc, doctype="<!DOCTYPE html>", encoding="utf-8"))
    return tally


CSS = """
.rv { position: relative; margin: 1.1em 0; padding: 0.55em 0.8em 0.6em;
      border-left: 5px solid #d4a300; border-radius: 3px;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.rv-new, .rv-changed { background: #fff4b8; }
.rv-latest.rv-new, .rv-latest.rv-changed { background: #dcecc9; border-left-color: #4A5D23; }
.rv-latest > .rv-tag { background: #4A5D23; }
.rv-removed { background: #eeeeee; border-left-color: #9a9a9a; color: #6b6b6b; }
.rv-removed > :not(.rv-tag), .rv-removed > :not(.rv-tag) * { text-decoration: line-through;
      text-decoration-color: #9a9a9a; }
.rv-tag { display: table; font: 600 0.72rem/1.4 system-ui, sans-serif;
      letter-spacing: 0.04em; text-transform: uppercase; padding: 0.1em 0.5em;
      margin-bottom: 0.35em; border-radius: 3px; background: #d4a300; color: #fff; }
.rv-tag a { color: inherit; text-decoration: none; }
.rv-removed > .rv-tag { background: #8a8a8a; }
.rv-removed.rv-latest { border-left-color: #4A5D23; }
.rv-removed.rv-latest > .rv-tag { background: #4A5D23; }
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
.rv-summary .k-latest { background: #dcecc9; }
.rv-summary .k-removed { background: #eee; color: #666; }
.rv-legend span { display: inline-block; padding: 0.1em 0.6em; margin-right: 0.6em; border-radius: 3px; }
@media print {
  .ptx-masthead, .ptx-navbar, .ptx-sidebar, .ptx-page-footer, .ptx-content-footer,
  .autopermalink, .interactive-iframe-container__opener, #ptx-sidebar, nav { display: none !important; }
  .ptx-main { margin: 0 !important; }
  .rv { break-inside: auto; }
  .rv-tag, .rv-prev > summary { break-after: avoid; }
}
"""


def summary_page(out_dir, rows, title, rounds, two_rounds):
    counts = {}
    for r in rows:
        counts[(r["round"], r["word"])] = counts.get((r["round"], r["word"]), 0) + 1
    tally = ", ".join(f"{n} {word.lower()}" + (f" ({rnd})" if rnd else "")
                      for (rnd, word), n in sorted(counts.items())) or "no changes"
    body = [f"<h1>{htmllib.escape(title)}</h1>", f"<p>{htmllib.escape(tally)}.</p>"]
    if two_rounds:
        body.append(
            '<p class="rv-legend"><span style="background:#dcecc9;border-left:5px solid #4A5D23">'
            f'{htmllib.escape(rounds[1])}</span> changes made since the earlier review copy. '
            '<span style="background:#fff4b8;border-left:5px solid #d4a300">'
            f'{htmllib.escape(rounds[0])}</span> changes that were already in it.</p>')
    body.append(
        "<p>New and changed blocks are highlighted, and each carries a tag. A changed or "
        "revised block shows its previous version in grey underneath; removed blocks are "
        "grey and struck through.</p>"
        "<table><tr><th>#</th><th>Section</th><th>Change</th>"
        + ("<th>Round</th>" if two_rounds else "") + "<th>Note</th><th>Block</th></tr>")
    for n, r in enumerate(rows, 1):
        cls = "k-removed" if r["kind"] == "removed" else ("k-latest" if r["latest"] else "k-" + r["kind"])
        body.append(
            f'<tr class="{cls}"><td>{n}</td><td>{htmllib.escape(r["section"])}</td>'
            f'<td>{r["word"]}</td>'
            + (f'<td>{htmllib.escape(r["round"])}</td>' if two_rounds else "")
            + f'<td>{htmllib.escape(r["label"])}</td>'
            f'<td><a href="{r["page"]}#{r["anchor"]}">{htmllib.escape(r["title"])}</a></td></tr>')
    body.append("</table>")
    doc = ("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Review summary</title>"
           "<link rel='stylesheet' href='review-highlight.css'>"
           "<script>MathJax = {tex: {inlineMath: [['\\\\(', '\\\\)']]}};</script>"
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
    ap.add_argument("--previous", help="web build of an earlier review copy; changes made "
                    "since it are highlighted in a second color")
    ap.add_argument("--round-names", nargs=2, default=["Round 1", "Round 2"],
                    metavar=("EARLIER", "LATEST"))
    a = ap.parse_args()
    old_web, new_web, out = Path(a.old_web), Path(a.new_web), Path(a.out_dir)
    prev_web = Path(a.previous) if a.previous else None
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(new_web, out)
    labels = json.loads(Path(a.labels).read_text()) if a.labels else {}
    (out / "review-highlight.css").write_text(CSS)
    rows = []
    for page in a.pages:
        doc = html.parse(str(new_web / page), PARSER).getroot()
        heading = doc.xpath('//section[@id="%s"]/h1 | //section[@id="%s"]/h2' % (Path(page).stem, Path(page).stem))
        page_title = re.sub(r"\s+", " ", heading[0].text_content()).strip() if heading else page
        tally = review_page(old_web / page, new_web / page, out / page, labels, page_title, rows,
                            prev_path=(prev_web / page) if prev_web else None,
                            rounds=tuple(a.round_names))
        print(f"{page}: {tally}")
    summary_page(out, rows, a.title, tuple(a.round_names), prev_web is not None)
    print(f"Wrote {out / 'review-summary.html'}")


if __name__ == "__main__":
    main()
