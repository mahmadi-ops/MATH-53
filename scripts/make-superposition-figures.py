#!/usr/bin/env python3
"""Build the figures for the "Superposition" section of the Vector Spaces chapter.

Reads the two cat illustrations, converts both to grayscale, and writes the
images of the linear combinations discussed in the section:

    alive          A                     the first basis matrix
    dead           D                     the second basis matrix
    super-<p>      alpha A + beta D      a superposition, rescaled for display
    difference     128 J + (A - D)/2     the difference, shifted into view

The superpositions use amplitudes (alpha, beta) = (cos t, sin t) with
alpha^2 + beta^2 = 1, at the angles t whose squared amplitudes are the round
percentages 100, 75, 50, 25, and 0. Since alpha A + beta D has entries as
large as 255(alpha + beta) > 255, each combination is divided by
alpha + beta before it is saved; that scalar multiple is the same state, and
it keeps every entry inside the displayable range 0 to 255.

It also block-averages the same small patch of both pictures down to a
PATCH_ROWS x PATCH_COLS matrix and prints the two blocks in ready-to-paste
forms: a PreTeXt bmatrix and a Sage matrix literal.

Usage:
    python3 scripts/make-superposition-figures.py [--crop L T R B]

where L T R B are the patch crop box as fractions of the image width/height.
"""

import argparse
from fractions import Fraction
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ALIVE_SOURCE = ROOT / "assets" / "SCA.png"
DEAD_SOURCE = ROOT / "assets" / "SCD.png"
OUTDIR = ROOT / "assets" / "images"

# Width, in pixels, of the full-photograph figures written for the book.
FIGURE_WIDTH = 520

# The superpositions to draw, as (percent alive, angle in degrees). The angle t
# gives the amplitudes (cos t, sin t), and cos^2 t is the percentage.
ANGLES = [(100, 0), (75, 30), (50, 45), (25, 60), (0, 90)]

# Size of the small block whose entries are printed into the section.
PATCH_ROWS = 8
PATCH_COLS = 6

# Width, in pixels, of the magnified view of such a block.
PATCH_WIDTH = 240

# Default patch crop, as (left, top, right, bottom) fractions of the image:
# the patch around the seated cat's left eye, the same corner of the picture
# magnified in the Digital Images section. In the other picture the box is
# empty there, so the same patch is a smooth piece of the back wall.
DEFAULT_CROP = (0.4442, 0.3808, 0.5596, 0.4833)


def to_grayscale(path: Path) -> np.ndarray:
    """Read an image, scale it to FIGURE_WIDTH, and collapse it to intensities.

    Pillow's "L" conversion applies the ITU-R 601-2 luma transform,
    0.299 R + 0.587 G + 0.114 B, the same linear combination of the colour
    planes used in the Digital Images section.
    """
    original = Image.open(path)
    print(f"source: {path.relative_to(ROOT)}  {original.size}  {original.mode}")
    scale = FIGURE_WIDTH / original.width
    box = (FIGURE_WIDTH, round(original.height * scale))
    gray = original.convert("RGB").resize(box, Image.LANCZOS).convert("L")
    return np.asarray(gray, dtype=float)


def save(array: np.ndarray, name: str) -> None:
    """Write an array of intensities to OUTDIR/<name>.png."""
    path = OUTDIR / f"{name}.png"
    Image.fromarray(array.round().clip(0, 255).astype(np.uint8), mode="L").save(path)
    print(f"  wrote {path.relative_to(ROOT)}  ({array.shape[0]}x{array.shape[1]})")


def block_average(M: np.ndarray, crop) -> np.ndarray:
    """Average a patch of M in square blocks down to PATCH_ROWS x PATCH_COLS.

    The patch is snapped so its height and width are whole multiples of the
    block size, which makes every entry the mean of the same number of pixels.
    """
    rows, cols = M.shape
    left, top, right, bottom = crop
    r0, c0 = round(top * rows), round(left * cols)
    block = min(round((bottom - top) * rows) // PATCH_ROWS,
                round((right - left) * cols) // PATCH_COLS)
    patch = M[r0:r0 + PATCH_ROWS * block, c0:c0 + PATCH_COLS * block]
    return (patch.reshape(PATCH_ROWS, block, PATCH_COLS, block)
                 .mean(axis=(1, 3)).round().astype(int))


def save_magnified(B: np.ndarray, name: str) -> None:
    """Write a small block enlarged so that its individual entries are visible."""
    path = OUTDIR / f"{name}.png"
    height = round(PATCH_WIDTH * PATCH_ROWS / PATCH_COLS)
    (Image.fromarray(B.round().clip(0, 255).astype(np.uint8), mode="L")
          .resize((PATCH_WIDTH, height), Image.NEAREST).save(path))
    print(f"  wrote {path.relative_to(ROOT)}  ({PATCH_ROWS}x{PATCH_COLS} block, magnified)")


def print_block(name: str, B: np.ndarray) -> None:
    """Print a small integer matrix as a PreTeXt bmatrix and a Sage literal."""
    width = max(len(str(v)) for v in B.flatten())

    print(f"\n--- {name}: PreTeXt bmatrix ---")
    for i, row in enumerate(B):
        cells = " \\amp ".join(f"{v:{width}d}" for v in row)
        print(f"            {cells}" + (" \\\\" if i < len(B) - 1 else ""))

    print(f"\n--- {name}: Sage matrix literal ---")
    for i, row in enumerate(B):
        cells = ", ".join(f"{v:{width}d}" for v in row)
        open_ = "[[" if i == 0 else "["
        close = "]]" if i == len(B) - 1 else "],"
        print(f"        {open_}{cells}{close}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--crop", nargs=4, type=float, metavar=("L", "T", "R", "B"),
                        default=DEFAULT_CROP,
                        help="patch crop box as fractions of width/height")
    args = parser.parse_args()

    for source in (ALIVE_SOURCE, DEAD_SOURCE):
        if not source.exists():
            raise SystemExit(f"missing source image: {source}")
    OUTDIR.mkdir(parents=True, exist_ok=True)

    A = to_grayscale(ALIVE_SOURCE)
    D = to_grayscale(DEAD_SOURCE)
    if A.shape != D.shape:
        raise SystemExit(f"the two pictures differ in size: {A.shape} and {D.shape}")
    rows, cols = A.shape
    print(f"both pictures are {rows}x{cols} matrices\n")

    # --- the two basis matrices ----------------------------------------------
    save(A, "cat-alive")
    save(D, "cat-dead")

    # --- the superpositions ---------------------------------------------------
    # alpha A + beta D with alpha^2 + beta^2 = 1, divided by alpha + beta so
    # that the entries stay within the range a screen can show.
    for percent, degrees in ANGLES:
        t = np.radians(degrees)
        alpha, beta = np.cos(t), np.sin(t)
        S = (alpha * A + beta * D) / (alpha + beta)
        save(S, f"cat-super-{percent:03d}")
        print(f"    alpha = {alpha:.4f}, beta = {beta:.4f},"
              f" alpha^2 = {alpha**2:.2f}, range {S.min():.0f} to {S.max():.0f}")

    # --- the difference, shifted so that it can be seen -----------------------
    # A - D has negative entries wherever the dead picture is the brighter of
    # the two, so it cannot be displayed as it stands. Adding 128J shifts it
    # into view: mid-gray marks the pixels where the two pictures agree.
    J = np.ones_like(A)
    difference = 128 * J + (A - D)
    outside = np.mean((difference < 0) | (difference > 255))
    print(f"    difference range {(A - D).min():.0f} to {(A - D).max():.0f};"
          f" {outside:.4%} of the shifted entries fall outside 0 to 255")
    save(difference, "cat-difference")

    # --- the small blocks used by the Sage cells ------------------------------
    A_block = block_average(A, args.crop)
    D_block = block_average(D, args.crop)
    mix_block = ((A_block + D_block) / 2).round().astype(int)
    print(f"\npatch means: alive {A_block.mean():.1f}, dead {D_block.mean():.1f},"
          f" largest difference {np.abs(A_block - D_block).max()}")
    save_magnified(A_block, "cat-block-alive")
    save_magnified(D_block, "cat-block-dead")
    save_magnified(mix_block, "cat-block-mix")
    print_block("alive", A_block)
    print_block("dead", D_block)
    print_block("half and half", mix_block)

    # Amplitudes at the angles used above, as exact values for the captions.
    print("\n--- amplitudes ---")
    for percent, degrees in ANGLES:
        t = np.radians(degrees)
        print(f"  {degrees:3d} deg: alpha = {np.cos(t):.6f}, beta = {np.sin(t):.6f},"
              f" alpha^2 = {Fraction(percent, 100)}")


if __name__ == "__main__":
    main()
