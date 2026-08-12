#!/usr/bin/env python3
"""Build the figures for the "Digital Images as Matrices" section.

Reads the colour source image, converts it to grayscale, and writes the
grayscale photograph together with the variants obtained by the matrix
operations discussed in the section:

    negative      255 J - M          scalar multiplication and addition
    brighter      1.4 M  (clipped)   scalar multiplication
    transpose     M^T                transposition
    flip-lr       M R                right multiplication by a reversal matrix
    flip-ud       R M                left  multiplication by a reversal matrix
    scrambled     P M                left  multiplication by a permutation matrix
    restored      P^{-1} (P M)       the inverse undoes the scramble

It also crops a small detail, reduces it to a DETAIL_ROWS x DETAIL_COLS block
of pixels, saves a magnified view of that block, and prints the block's integer
entries in three ready-to-paste forms: a PreTeXt bmatrix, a Sage matrix
literal, and a plain grid.

Usage:
    python3 scripts/make-image-figures.py [--crop L T R B]

where L T R B are the detail crop box as fractions of the image width/height.
"""

import argparse
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "assets" / "SCA.png"
OUTDIR = ROOT / "assets" / "images"

# Width, in pixels, of the full-photograph figures written for the book.
FIGURE_WIDTH = 520

# Size of the small detail block whose entries are printed into the section.
DETAIL_ROWS = 16
DETAIL_COLS = 12

# Width, in pixels, of the magnified view of that block.
DETAIL_WIDTH = 360

# Default detail crop, as (left, top, right, bottom) fractions of the image:
# the cat's left eye, chosen because its dark pupil against the bright iris gives
# the block the widest range of intensities in the picture.
DEFAULT_CROP = (0.4442, 0.3808, 0.5596, 0.4833)


def to_grayscale(rgb: Image.Image) -> Image.Image:
    """Collapse colour to a single intensity per pixel.

    Pillow's "L" conversion applies the ITU-R 601-2 luma transform,
    0.299 R + 0.587 G + 0.114 B, which is the weighted average of the three
    colour planes quoted in the section.
    """
    return rgb.convert("L")


def save(array: np.ndarray, name: str) -> None:
    """Write a uint8 array to OUTDIR/<name>.png."""
    path = OUTDIR / f"{name}.png"
    Image.fromarray(array.astype(np.uint8), mode="L").save(path)
    print(f"  wrote {path.relative_to(ROOT)}  ({array.shape[0]}x{array.shape[1]})")


def reversal(n: int) -> np.ndarray:
    """The n x n reversal matrix: the identity with its columns in reverse."""
    return np.eye(n, dtype=int)[:, ::-1]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--crop", nargs=4, type=float, metavar=("L", "T", "R", "B"),
                        default=DEFAULT_CROP,
                        help="detail crop box as fractions of width/height")
    args = parser.parse_args()

    if not SOURCE.exists():
        raise SystemExit(f"missing source image: {SOURCE}")
    OUTDIR.mkdir(parents=True, exist_ok=True)

    original = Image.open(SOURCE)
    print(f"source: {SOURCE.relative_to(ROOT)}  {original.size}  {original.mode}")

    # --- the full photograph, in colour and in grayscale ----------------------
    scale = FIGURE_WIDTH / original.width
    box = (FIGURE_WIDTH, round(original.height * scale))
    colour = original.convert("RGB").resize(box, Image.LANCZOS)
    colour.save(OUTDIR / "sca-colour.png")
    print(f"  wrote {(OUTDIR / 'sca-colour.png').relative_to(ROOT)}  ({box[0]}x{box[1]})")

    gray = to_grayscale(colour)
    M = np.asarray(gray, dtype=int)
    rows, cols = M.shape
    save(M, "sca-gray")

    # --- one figure per matrix operation -------------------------------------
    J = np.ones_like(M)
    save(255 * J - M, "sca-negative")
    save(np.clip(1.4 * M, 0, 255), "sca-brighter")
    save(M.T, "sca-transpose")
    save(M @ reversal(cols), "sca-flip-lr")
    save(reversal(rows) @ M, "sca-flip-ud")

    # A permutation that shuffles the rows into a fixed, reproducible order,
    # then its inverse putting them back.
    order = np.random.default_rng(53).permutation(rows)
    P = np.eye(rows, dtype=int)[order]
    scrambled = P @ M
    save(scrambled, "sca-scrambled")
    restored = P.T @ scrambled          # P is orthogonal, so P^{-1} = P^T
    save(restored, "sca-restored")
    assert np.array_equal(restored, M), "P^T P M did not return the original"

    # --- the small detail block ----------------------------------------------
    # D is built from M itself, not from the original file, so that the section can
    # describe it exactly: take a patch of M and average it in square blocks. The
    # patch is snapped so its height and width are whole multiples of the block
    # size, which makes every entry of D the mean of the same number of pixels.
    left, top, right, bottom = args.crop
    r0, c0 = round(top * rows), round(left * cols)
    block_h = round((bottom - top) * rows) // DETAIL_ROWS
    block_w = round((right - left) * cols) // DETAIL_COLS
    if block_h != block_w:
        block_h = block_w = min(block_h, block_w)
    patch = M[r0:r0 + DETAIL_ROWS * block_h, c0:c0 + DETAIL_COLS * block_w]

    D = (patch.reshape(DETAIL_ROWS, block_h, DETAIL_COLS, block_w)
              .mean(axis=(1, 3)).round().astype(int))

    magnified = Image.fromarray(D.astype(np.uint8), mode="L").resize(
        (DETAIL_WIDTH, round(DETAIL_WIDTH * DETAIL_ROWS / DETAIL_COLS)), Image.NEAREST)
    magnified.save(OUTDIR / "sca-detail.png")
    print(f"  wrote {(OUTDIR / 'sca-detail.png').relative_to(ROOT)}"
          f"  ({DETAIL_ROWS}x{DETAIL_COLS} block, magnified)")

    # Where the detail sits in M, for the caption and the surrounding prose.
    print(f"\ndetail patch of the {rows}x{cols} matrix M: "
          f"rows {r0}-{r0 + DETAIL_ROWS * block_h - 1}, "
          f"columns {c0}-{c0 + DETAIL_COLS * block_w - 1}, "
          f"averaged in {block_h}x{block_w} blocks")
    print(f"detail range: min {D.min()}, max {D.max()}, mean {D.mean():.1f}")

    width = max(len(str(v)) for v in D.flatten())

    print("\n--- PreTeXt bmatrix ---")
    for i, row in enumerate(D):
        cells = " \\amp ".join(f"{v:{width}d}" for v in row)
        print(f"            {cells}" + (" \\\\" if i < DETAIL_ROWS - 1 else ""))

    print("\n--- Sage matrix literal ---")
    for i, row in enumerate(D):
        cells = ", ".join(f"{v:{width}d}" for v in row)
        open_, close = ("[[", "],") if i == 0 else ("[", "],")
        if i == DETAIL_ROWS - 1:
            close = "]]"
        print(f"        {open_}{cells}{close}")

    print("\n--- plain grid ---")
    for row in D:
        print("  " + " ".join(f"{v:{width}d}" for v in row))


if __name__ == "__main__":
    main()
