#!/usr/bin/env python3
"""Mark, on both full photographs, the block that becomes A_0 and D_0.

The Superposition and Recognition sections crop the same little rectangle out
of each picture -- the corner of the box holding the alive cat's left eye --
and block-average it down to an 8 x 6 matrix.  This script redraws the two
whole photographs with that rectangle outlined, so the reader can see where
the numbers came from.

The crop box and the block-snapping rule are taken verbatim from
make-superposition-figures.py, so the outline is the exact region averaged,
not an approximation of it.

Usage:
    python3 scripts/make-patch-location-figure.py [--crop L T R B] [--scale 2]
"""

import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUTDIR = ROOT / "assets" / "images"

# Kept in step with make-superposition-figures.py.
PATCH_ROWS = 8
PATCH_COLS = 6
DEFAULT_CROP = (0.4442, 0.3808, 0.5596, 0.4833)

OUTLINE = (220, 40, 40)     # the marking colour
HALO = (255, 255, 255)      # a light ring, so the box reads over dark pixels

# The label is painted into the picture, so its size has to be chosen in the
# picture's own pixels and then shrinks with the picture when the page lays it
# out.  Both numbers below were measured on the built page (viewport 1280 and
# wider): the body text computes to 16px, and one panel of the side-by-side
# figure renders the 520-pixel-wide photograph at 299.2px.  Painting the label
# at cols / PANEL_WIDTH times the body size therefore lands it, on screen, at
# the same size as the surrounding prose.
BODY_FONT_PX = 16.0         # computed font-size of the book's body text
PANEL_WIDTH = 299.2         # on-page width of one panel of the figure


def patch_box(rows: int, cols: int, crop) -> tuple[int, int, int, int]:
    """The pixel rectangle (c0, r0, c1, r1) that block_average actually reads."""
    left, top, right, bottom = crop
    r0, c0 = round(top * rows), round(left * cols)
    block = min(round((bottom - top) * rows) // PATCH_ROWS,
                round((right - left) * cols) // PATCH_COLS)
    return c0, r0, c0 + PATCH_COLS * block, r0 + PATCH_ROWS * block, block


def annotate(name: str, label: str, crop, scale: int) -> None:
    source = OUTDIR / f"{name}.png"
    gray = Image.open(source).convert("L")
    cols, rows = gray.size
    c0, r0, c1, r1, block = patch_box(rows, cols, crop)

    big = gray.convert("RGB").resize((cols * scale, rows * scale), Image.LANCZOS)
    draw = ImageDraw.Draw(big)
    box = (c0 * scale, r0 * scale, c1 * scale - 1, r1 * scale - 1)

    pad = 2 * scale
    haloed = (box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad)
    draw.rectangle(haloed, outline=HALO, width=max(2, scale))
    draw.rectangle(box, outline=OUTLINE, width=max(2, 2 * scale))

    # The grid of blocks: each cell of the outlined box averages to one entry.
    # Drawn faintly, on a transparent layer, so the eye stays visible under it.
    grid = Image.new("RGBA", big.size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(grid)
    faint = OUTLINE + (150,)
    for k in range(1, PATCH_COLS):
        x = (c0 + k * block) * scale
        gdraw.line([(x, box[1]), (x, box[3])], fill=faint, width=1)
    for k in range(1, PATCH_ROWS):
        y = (r0 + k * block) * scale
        gdraw.line([(box[0], y), (box[2], y)], fill=faint, width=1)
    big = Image.alpha_composite(big.convert("RGBA"), grid).convert("RGB")
    draw = ImageDraw.Draw(big)

    size = round(BODY_FONT_PX * cols / PANEL_WIDTH) * scale
    try:
        font = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size)
    except OSError:
        font = ImageFont.load_default()
    tx, ty = box[2] + 4 * scale, box[1] - 2 * scale
    draw.text((tx, ty), label, fill=OUTLINE, font=font, anchor="ls",
              stroke_width=max(2, round(size / 12)), stroke_fill=HALO)

    # The picture is grayscale everywhere but the marking, so an adaptive
    # 256-colour palette is lossless to the eye and a fifth of the file size.
    out = OUTDIR / f"{name}-patch.png"
    big.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.NONE).save(
        out, optimize=True)
    print(f"  wrote {out.relative_to(ROOT)}  box cols {c0}-{c1}, rows {r0}-{r1}"
          f"  ({block}x{block} pixels per entry)")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--crop", nargs=4, type=float, metavar=("L", "T", "R", "B"),
                        default=DEFAULT_CROP)
    parser.add_argument("--scale", type=int, default=1,
                        help="magnification of the redrawn photograph; 1 keeps the "
                             "figure at the same resolution as the unmarked ones")
    args = parser.parse_args()

    annotate("cat-alive", "A₀", args.crop, args.scale)
    annotate("cat-dead", "D₀", args.crop, args.scale)


if __name__ == "__main__":
    main()
