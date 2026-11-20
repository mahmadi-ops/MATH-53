#!/usr/bin/env python3
"""Build a highlighted review copy of changed pages in the HTML book.

Compares two builds of the web target (before and after an edit) block by
block, and writes copies of the chosen pages in which every new, changed, or
removed block is marked:

  * new blocks get a colored background and a "New" tag;
  * changed blocks get the same highlight, a "Changed" tag, and the previous
    version (in grey) directly underneath;
  * removed blocks are shown in grey, struck through, with a "Removed" tag
    (or, with --removed-as stub, as a one-line note naming what was removed).

A block is a top-level item of a section: a paragraph, example, figure,
definition, exercise, and so on. Blocks are matched by content, with
automatic numbers (Example 1.8, link texts) ignored, so inserting a new
example does not mark every later example as changed.

The source files are not touched: all review markup lives in the generated
copy. A summary page lists every change with a link to it.

Usage:
  pretext build web            # in a checkout of the old version  -> OLD/output/web
  pretext build web            # in the edited checkout            -> NEW/output/web
  python3 scripts/review-changes.py OLD/output/web NEW/output/web OUT \\
      --pages sec-a.html sec-b.html --labels labels.json --title "Chapter 1 review"

labels.json (optional) maps an xml:id, or "~some text" (a substring of the
block's text), to a short note shown in the block's tag, e.g.
  {"eg-standard-form": "Review item 01"}

Several rounds of edits. Pass the builds that earlier review copies were made
from, oldest first, as --previous R1/output/web R2/output/web ..., and name
all the rounds (one more than the builds given) with --round-names. Each
change is then colored by the round in which it first appeared: yellow,
green, blue. A block revised in a later round shows its version from the
copy before. Something added in an earlier round and removed since is listed
where it used to be. A page that is new (not in the old build) is marked as
new throughout.

Other options: --whole-divisions exercises treats each exercises division as
one block (useful when whole divisions were removed); --removed-as stub
replaces the struck-through text of removed blocks by a one-line note;
--compact describes a small revision of a long block (latest round only) by
the sentences taken out and put in, instead of repeating the whole block.
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
WHOLE = set()   # container classes treated as single blocks (--whole-divisions)
# (background, accent) for each review round, oldest first
ROUND_COLORS = [("#fff4b8", "#d4a300"), ("#dcecc9", "#4A5D23"), ("#d6e6f5", "#2b5f8a"), ("#ead9f0", "#6b3a80")]


def classes(el):
    return set((el.get("class") or "").split())


def is_container(el):
    kinds = classes(el)
    return el.tag == "section" and bool(kinds & CONTAINER_CLASSES) and not kinds & WHOLE


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


def similarity(a, b):
    return difflib.SequenceMatcher(None, a.split(), b.split(), autojunk=False).ratio()


def sentences(text):
    """Split at the ends of sentences, including those that end inside a formula."""
    return [t for t in re.split(r"(?<=[.?!])\s+|(?<=\\text\{\.\}\\\))\s+", text) if t]


def balanced(text):
    """True if the text does not start or stop in the middle of a formula."""
    return (text.count("\\(") == text.count("\\)")
            and text.count("\\begin{") == text.count("\\end{"))


def reference_texts(el):
    """Link text of each cross-reference in a block, by target."""
    return {(a.get("href") or "").split("#")[-1]: re.sub(r"\s+", " ", a.text_content()).strip()
            for a in el.xpath('.//a[contains(concat(" ", @class, " "), " xref ")]')}


def small_revision(before, after, limit=0.4):
    """The sentences taken out of and put into a block, if only a few changed.

    Returns a list of (taken out, put in) pairs, or None when the change is
    too large (or too tangled with formulas) to describe this way; the caller
    then shows the whole previous version.
    """
    a, b = sentences(signature(before)), sentences(signature(after))
    names_a, names_b = reference_texts(before), reference_texts(after)

    def readable(parts, names):
        text = re.sub(r"\[ref:([^\]]*)\]", lambda m: names.get(m.group(1), "(reference)"), " ".join(parts))
        return re.sub(r"\s+", " ", text.replace("\U0001F517", "")).strip()    # without permalink marks

    pairs, changed = [], 0
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if op == "equal":
            continue
        gone, came = readable(a[i1:i2], names_a), readable(b[j1:j2], names_b)
        if not (balanced(gone) and balanced(came)):
            return None
        if not gone and not came:
            continue
        changed += len(gone.split()) + len(came.split())
        pairs.append((gone, came))
    total = sum(len(t.split()) for t in a + b)
    return pairs if pairs and changed <= limit * total else None


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
        head = copy.deepcopy(heads[0])
        if "hide-type" in classes(head):      # the page shows "1.1.4 Practice: ...", without "Exercises"
            for span in head.xpath('./*[contains(concat(" ", @class, " "), " type ")]'):
                span.text = ""
        t = re.sub(r"\s+", " ", head.text_content()).strip()
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


def stable_id(el):
    """An id that came from an xml:id in the source (not an automatic one)."""
    i = el.get("id")
    return i if i and not re.search(r"-\d+$", i) else None


class Build:
    """The blocks of one page's main section in one build of the book."""

    def __init__(self, path, sec_id):
        self.blocks = []
        if path is not None and Path(path).exists():
            doc = html.parse(str(path), PARSER).getroot()
            try:
                self.blocks = blocks_of(doc.get_element_by_id(sec_id))
            except KeyError:
                pass
        self.sigs = [signature(b) for b in self.blocks]
        self.sigset = set(self.sigs)
        self.by_id = {stable_id(b): b for b in self.blocks if stable_id(b)}


def tidy_true_false(doc):
    """Show Runestone true/false questions as statement plus feedback.

    Without Runestone's script the page lists "True." and "False." each
    followed by the same feedback, which is confusing on paper.
    """
    for ul in doc.xpath('//ul[@data-component="multiplechoice"]'):
        answers = ul.xpath('./li[@data-component="answer"]')
        texts = sorted(re.sub(r"\s+", " ", a.text_content()).strip() for a in answers)
        if texts != ["False.", "True."]:
            continue
        box = html.fragment_fromstring('<div class="rv-tf"></div>')
        for child in list(ul):
            if isinstance(child.tag, str) and child.tag != "li":
                box.append(child)          # the statement
        box.append(html.fragment_fromstring(
            '<div class="rv-tf-note">&#9711; True &#160; &#9711; False &#160; [Check Me] '
            '&#8212; interactive on the web. Feedback shown after checking:</div>'))
        feedback = ul.xpath('./li[@data-component="feedback"]')
        if feedback:
            shown = html.fragment_fromstring('<div class="rv-tf-feedback"></div>')
            shown.text = feedback[0].text
            for child in list(feedback[0]):
                shown.append(child)
            box.append(shown)
        ul.getparent().replace(ul, box)


def review_page(old_path, new_path, out_path, labels, page_title, summary,
                previous_paths=(), rounds=("",), removed_as="full", compact=False):
    new_doc = html.parse(str(new_path), PARSER).getroot()
    sec_id = Path(new_path).stem
    new_sec = new_doc.get_element_by_id(sec_id)
    old = Build(old_path, sec_id)
    old_blocks, old_sigs = old.blocks, old.sigs
    new_blocks = blocks_of(new_sec)
    new_sigs = [signature(b) for b in new_blocks]
    new_sigset = set(new_sigs)
    new_ids = {stable_id(b): j for j, b in enumerate(new_blocks) if stable_id(b)}

    # Builds of earlier review copies, oldest first. Round k (counting from 0) is the
    # round whose result is prevs[k]; the latest round, whose result is the new build,
    # is round K.
    prevs = [Build(p, sec_id) for p in previous_paths]
    K = len(prevs)

    def first_round(sig):
        """The round in which this exact content first appeared."""
        for k, build in enumerate(prevs):
            if sig in build.sigset:
                return k
        return K

    def removal_round(block, sig):
        """The first round whose result no longer contains this block."""
        sid = stable_id(block)
        for k, build in enumerate(prevs):
            if sig not in build.sigset and not (sid and sid in build.by_id):
                return k
        return K

    def title_as_first_seen(block):
        """Title and number as in the earliest review copy that had the block."""
        sid = stable_id(block)
        title = next((block_title(b.by_id[sid]) for b in prevs if sid and sid in b.by_id), block_title(block))
        if "exercises" in classes(block):
            # Say how many exercises went, counting them in the last copy that had them.
            last = next((b.by_id[sid] for b in reversed(prevs) if sid and sid in b.by_id), block)
            n = len(last.xpath('.//*[contains(concat(" ", @class, " "), " exercise ")]'))
            title += f" ({n} exercise{'s' if n != 1 else ''})"
        return title

    # ---- differences between the original build and the new one ----
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
                r = similarity(old_sigs[i], new_sigs[j])
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

    # ---- one entry per marked block ----
    entries = []
    for kind, j, i in marks:
        if kind == "removed":
            entries.append({"kind": "removed", "word": "Removed", "j": j, "block": old_blocks[i],
                            "sig": old_sigs[i], "round": removal_round(old_blocks[i], old_sigs[i]),
                            "label": label_for(old_blocks[i], old_sigs[i], labels)})
            continue
        el, sig = new_blocks[j], new_sigs[j]
        r = first_round(sig)
        entry = {"kind": kind, "word": "New", "j": j, "block": el, "sig": sig, "round": r,
                 "previous": None, "previous_title": "Previous version",
                 "label": label_for(el, sig, labels) or
                          (label_for(old_blocks[i], old_sigs[i], labels) if i is not None else "")}
        earlier = prevs[r - 1].by_id.get(stable_id(el)) if r >= 1 and stable_id(el) else None
        if earlier is not None and signature(earlier) != sig and signature(earlier) not in old.sigset:
            # Already present, in another form, in the review copy before this round.
            entry.update(word="Revised", previous=earlier,
                         previous_title=f"Version in the {rounds[r - 1]} copy" if rounds[r - 1] else "Earlier version")
        elif kind == "changed":
            entry.update(word="Changed", previous=old_blocks[i])
        entries.append(entry)

    # ---- blocks added in an earlier round that the latest round took out again ----
    if prevs:
        last = prevs[-1]
        gone_from_base = [e["sig"] for e in entries if e["kind"] == "removed"] + \
                         [signature(e["previous"]) for e in entries if e["word"] == "Changed"]
        for index, (block, sig) in enumerate(zip(last.blocks, last.sigs)):
            sid = stable_id(block)
            if sig in old.sigset or sig in new_sigset or (sid and (sid in new_ids or sid in old.by_id)):
                continue
            if not sid and any(similarity(sig, s) >= 0.5 for s in gone_from_base):
                continue      # a reworded base block, already reported above
            if not sid:
                # Reworded in the latest round? Then show it as the earlier version.
                match = next((e for e in entries if e["word"] == "New" and e["round"] == K and
                              same_kind(block, e["block"]) and similarity(sig, e["sig"]) >= 0.5), None)
                if match:
                    match.update(word="Revised", previous=block,
                                 previous_title=f"Version in the {rounds[K - 1]} copy")
                    continue
            # Put the note before the next block of the earlier copy that is still there.
            target = len(new_blocks)
            for later, later_sig in zip(last.blocks[index + 1:], last.sigs[index + 1:]):
                if stable_id(later) in new_ids:
                    target = new_ids[stable_id(later)]
                    break
                if later_sig in new_sigset:
                    target = new_sigs.index(later_sig)
                    break
            entries.append({"kind": "removed", "word": "Removed", "j": target, "block": block, "sig": sig,
                            "round": K, "added": first_round(sig), "label": label_for(block, sig, labels)})

    # ---- write the marks into the page ----
    outer = list(new_blocks)  # element standing for each new block in the page
    multi = K > 0
    counts = {}
    for count, e in enumerate(entries, 1):
        anchor = f"rv-{sec_id}-{count}"
        round_class = f"rv-round-{e['round'] + 1}"
        if e["kind"] in ("new", "changed"):
            el = e["block"]
            wrap = html.fragment_fromstring(f'<div class="rv rv-{e["kind"]} {round_class}" id="{anchor}"></div>')
            el.addprevious(wrap)
            wrap.append(el)
            pairs = small_revision(e["previous"], el) if compact and e["previous"] is not None and e["round"] == K else None
            if pairs:
                # A few sentences changed in a long block: list them instead of
                # printing the whole previous version again.
                box = html.fragment_fromstring(
                    '<div class="rv-prev rv-diff"><div class="rv-diff-head">What changed in this block '
                    '(everything else is as before)</div></div>')
                for gone, came in pairs:
                    for word, cls, text in (("Taken out", "rv-out", gone), ("Put in", "rv-in", came)):
                        if text:
                            row = html.fragment_fromstring(
                                f'<p class="{cls}"><b>{word}:</b> <span class="process-math"></span></p>')
                            row[1].text = text
                            box.append(row)
                wrap.append(box)
            elif e["previous"] is not None:
                prev = html.fragment_fromstring(
                    f'<details class="rv-prev" open=""><summary>{htmllib.escape(e["previous_title"])}</summary></details>')
                prev.append(strip_ids(copy.deepcopy(e["previous"])))
                wrap.append(prev)
            outer[e["j"]] = wrap
            title = block_title(el)
        else:
            stub = removed_as == "stub"
            wrap = html.fragment_fromstring(
                f'<div class="rv rv-removed {round_class}{" rv-stub" if stub else ""}" id="{anchor}"></div>')
            title = title_as_first_seen(e["block"])
            if stub:
                note = html.fragment_fromstring('<div class="rv-stub-title process-math"></div>')
                note.text = title
                wrap.append(note)
            else:
                wrap.append(strip_ids(copy.deepcopy(e["block"])))
            e["wrap"] = wrap
        round_name = rounds[e["round"]] if multi else ""
        word = e["word"]
        extra = f"added in {rounds[e['added']]}" if "added" in e and rounds[e["added"]] else ""
        text = " · ".join(t for t in (word, round_name, e["label"], extra) if t)
        wrap.insert(0, html.fragment_fromstring(
            f'<div class="rv-tag"><a href="#{anchor}">{htmllib.escape(text)}</a></div>'))
        counts[(e["round"], round_name, word)] = counts.get((e["round"], round_name, word), 0) + 1
        summary.append({"page": out_path.name, "anchor": anchor, "kind": e["kind"], "word": word,
                        "round_index": e["round"], "round": round_name, "label": e["label"],
                        "title": title, "section": page_title, "order": e["j"]})
    # Removed blocks go in once every wrapper exists, each before the block it preceded.
    for e in entries:
        if e["kind"] == "removed":
            if e["j"] < len(outer):
                outer[e["j"]].addprevious(e["wrap"])
            elif outer:
                last_el = outer[-1]
                while last_el.getnext() is not None and "rv-removed" in classes(last_el.getnext()):
                    last_el = last_el.getnext()
                last_el.addnext(e["wrap"])
            else:
                new_sec.append(e["wrap"])

    for d in new_doc.iter("details"):
        if "born-hidden-knowl" in (d.get("class") or ""):   # examples, solutions, proofs
            d.set("open", "")
    for s in new_doc.xpath('//script[@type="text/x-sage"]'):
        pre = html.fragment_fromstring('<pre class="rv-sage"></pre>')
        pre.text = (s.text or "").strip("\n")
        s.getparent().replace(s, pre)
    tidy_true_false(new_doc)

    head = new_doc.find("head")
    head.insert(0, html.fragment_fromstring('<meta charset="utf-8">'))
    head.append(html.fragment_fromstring('<link rel="stylesheet" href="review-highlight.css">'))
    tally = ", ".join(f"{n} {word.lower()}" + (f" ({rnd})" if rnd else "")
                      for (_, rnd, word), n in sorted(counts.items())) or "no changes"
    banner = html.fragment_fromstring(
        f'<div class="rv-banner"><strong>Review copy.</strong> {htmllib.escape(page_title)}: '
        f'{htmllib.escape(tally)}. <a href="review-summary.html">All changes</a></div>')
    new_sec.insert(0, banner)
    out_path.write_bytes(html.tostring(new_doc, doctype="<!DOCTYPE html>", encoding="utf-8"))
    return tally


def css():
    rounds = "".join(
        f".rv-round-{n}.rv-new, .rv-round-{n}.rv-changed {{ background: {bg}; border-left-color: {accent}; }}\n"
        f".rv-round-{n} > .rv-tag {{ background: {accent}; }}\n"
        f".rv-removed.rv-round-{n} {{ border-left-color: {accent}; }}\n"
        f".rv-summary .k-round-{n} {{ background: {bg}; }}\n"
        for n, (bg, accent) in enumerate(ROUND_COLORS, 1))
    return """
.rv { position: relative; margin: 1.1em 0; padding: 0.55em 0.8em 0.6em;
      border-left: 5px solid #d4a300; border-radius: 3px;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.rv-removed { background: #eeeeee; color: #6b6b6b; }
.rv-removed:not(.rv-stub) > :not(.rv-tag), .rv-removed:not(.rv-stub) > :not(.rv-tag) * {
      text-decoration: line-through; text-decoration-color: #9a9a9a; }
.rv-stub { padding: 0.35em 0.8em 0.4em; margin: 0.6em 0; }
.rv-stub-title { font-size: 0.95rem; }
.rv-tag { display: table; font: 600 0.72rem/1.4 system-ui, sans-serif;
      letter-spacing: 0.04em; text-transform: uppercase; padding: 0.1em 0.5em;
      margin-bottom: 0.35em; border-radius: 3px; background: #d4a300; color: #fff; }
.rv-tag a { color: inherit; text-decoration: none; }
.rv-prev { margin-top: 0.6em; padding: 0.4em 0.7em; background: #f1f1f1;
      border: 1px dashed #b5b5b5; color: #5e5e5e; }
.rv-prev > summary { font: 600 0.72rem/1.4 system-ui, sans-serif; text-transform: uppercase;
      letter-spacing: 0.04em; color: #777; cursor: pointer; }
.rv-diff-head { font: 600 0.72rem/1.4 system-ui, sans-serif; text-transform: uppercase;
      letter-spacing: 0.04em; color: #777; margin-bottom: 0.3em; }
.rv-diff p { margin: 0.25em 0; font-size: 0.95rem; }
.rv-diff b { font: 600 0.78rem/1.4 system-ui, sans-serif; }
.rv-out span { text-decoration: line-through; text-decoration-color: #9a9a9a; }
.rv-in { color: #222; }
.rv .example-like, .rv .exercise-like { background: transparent; }
.rv-banner { margin: 0 0 1.2em; padding: 0.6em 0.9em; background: #f4f4f0;
      border: 1px solid #b9b9a8; border-radius: 4px; font-family: system-ui, sans-serif;
      font-size: 0.9rem; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
pre.rv-sage { background: #f6f6f6; border: 1px solid #ddd; padding: 0.6em; font-size: 0.82rem;
      white-space: pre-wrap; }
.rv-tf-note { font: 0.78rem/1.5 system-ui, sans-serif; color: #555; margin: 0.3em 0 0.2em; }
.rv-tf-feedback { border-left: 3px solid #b9b9a8; padding-left: 0.7em; margin-bottom: 0.6em; }
.rv-summary table { border-collapse: collapse; width: 100%; font-size: 0.92rem; }
.rv-summary td, .rv-summary th { border-bottom: 1px solid #ddd; padding: 0.35em 0.5em;
      text-align: left; vertical-align: top; }
.rv-summary tr.k-removed td { color: #666; }
.rv-legend span { display: inline-block; padding: 0.1em 0.6em; margin: 0 0.3em 0.3em 0; border-radius: 3px;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
""" + rounds + """
@media print {
  .ptx-masthead, .ptx-navbar, .ptx-sidebar, .ptx-page-footer, .ptx-content-footer,
  .autopermalink, .interactive-iframe-container__opener, #ptx-sidebar, nav { display: none !important; }
  .ptx-main { margin: 0 !important; }
  .rv { break-inside: auto; }
  .rv-stub { break-inside: avoid; }
  .rv-tag, .rv-prev > summary, .rv-tf-note { break-after: avoid; }
}
"""


def summary_page(out_dir, rows, title, rounds, intro=""):
    multi = len(rounds) > 1
    counts = {}
    for r in rows:
        counts[(r["round_index"], r["round"], r["word"])] = counts.get((r["round_index"], r["round"], r["word"]), 0) + 1
    body = [f"<h1>{htmllib.escape(title)}</h1>"]
    if intro:
        body.append(f"<p>{htmllib.escape(intro)}</p>")
    if multi:
        body.append('<p class="rv-legend">' + " ".join(
            f'<span style="background:{ROUND_COLORS[k][0]};border-left:5px solid {ROUND_COLORS[k][1]}">'
            f'{htmllib.escape(name)}: ' + ", ".join(
                f"{n} {word.lower()}" for (idx, _, word), n in sorted(counts.items()) if idx == k) + '</span>'
            for k, name in enumerate(rounds) if any(idx == k for idx, _, _ in counts)) + '</p>')
    else:
        body.append("<p>" + htmllib.escape(", ".join(
            f"{n} {word.lower()}" for (_, _, word), n in sorted(counts.items())) or "no changes") + ".</p>")
    body.append(
        "<p>New and changed blocks are highlighted, and each carries a tag. A changed or "
        "revised block shows its previous version in grey underneath; removed blocks are grey.</p>"
        "<table><tr><th>#</th><th>Section</th><th>Change</th>"
        + ("<th>Round</th>" if multi else "") + "<th>Note</th><th>Block</th></tr>")
    for n, r in enumerate(rows, 1):
        cls = f'k-round-{r["round_index"] + 1}' + (" k-removed" if r["kind"] == "removed" else "")
        body.append(
            f'<tr class="{cls}"><td>{n}</td><td>{htmllib.escape(r["section"])}</td>'
            f'<td>{r["word"]}</td>'
            + (f'<td>{htmllib.escape(r["round"])}</td>' if multi else "")
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
    ap.add_argument("--intro", default="", help="a sentence shown under the title of the summary page")
    ap.add_argument("--previous", nargs="+", default=[], metavar="WEB",
                    help="web builds of earlier review copies, oldest first")
    ap.add_argument("--round-names", nargs="+", metavar="NAME",
                    help="names of the rounds, oldest first: one more than the --previous builds")
    ap.add_argument("--whole-divisions", nargs="+", default=[], metavar="CLASS",
                    help="division classes to treat as single blocks, e.g. exercises")
    ap.add_argument("--removed-as", choices=["full", "stub"], default="full",
                    help="show removed blocks struck through (full) or as a one-line note (stub)")
    ap.add_argument("--compact", action="store_true",
                    help="in the latest round, describe a small revision of a long block by the "
                         "sentences taken out and put in, instead of repeating the previous version")
    a = ap.parse_args()
    WHOLE.update(a.whole_divisions)
    old_web, new_web, out = Path(a.old_web), Path(a.new_web), Path(a.out_dir)
    previous = [Path(p) for p in a.previous]
    rounds = a.round_names or ([f"Round {k + 1}" for k in range(len(previous) + 1)] if previous else [""])
    if len(rounds) != len(previous) + 1:
        ap.error("--round-names needs one name more than the number of --previous builds")
    if len(rounds) > len(ROUND_COLORS):
        ap.error(f"at most {len(ROUND_COLORS)} rounds are supported")
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(new_web, out)
    labels = json.loads(Path(a.labels).read_text()) if a.labels else {}
    (out / "review-highlight.css").write_text(css())
    rows = []
    for page in a.pages:
        doc = html.parse(str(new_web / page), PARSER).getroot()
        heading = doc.xpath('//section[@id="%s"]/h1 | //section[@id="%s"]/h2' % (Path(page).stem, Path(page).stem))
        page_title = re.sub(r"\s+", " ", heading[0].text_content()).strip() if heading else page
        page_rows = []
        tally = review_page(old_web / page, new_web / page, out / page, labels, page_title, page_rows,
                            previous_paths=[p / page for p in previous], rounds=tuple(rounds),
                            removed_as=a.removed_as, compact=a.compact)
        rows.extend(sorted(page_rows, key=lambda r: r["order"]))   # in page order
        print(f"{page}: {tally}")
    summary_page(out, rows, a.title, rounds, a.intro)
    print(f"Wrote {out / 'review-summary.html'}")


if __name__ == "__main__":
    main()
