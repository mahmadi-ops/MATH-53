"""A rotation carried out as three shears.

For Section 4.5 of the MATH 53 notes, in the application "Rotating a Picture
Using Only Shears".  A square picture with a letter F is sheared horizontally,
then vertically, then horizontally again, and ends up rotated through theta:

    A_{R_theta} = H_a V_b H_a,   a = -tan(theta/2),   b = sin(theta),

with H_a = [1 a; 0 1] and V_b = [1 0; b 1].  While each shear acts, arrows show
how far the corners and the midpoints of the sides slide, and the matching
factor of the product appears on the right.  The factors appear from right to
left, because the factor on the right acts first.

The look follows the two-dimensional MATH 13 videos and the first video of this
book (rotation_is_linear.py): black background, title in the top-left corner,
the figure on the left, the statements right-aligned on the right with small
grey remarks under them, and the conclusion boxed in yellow.  The lettering is
set in Palatino (mathpazo), the LaTeX counterpart of the TeX Gyre Pagella used
by the book's web pages.

Render from the repository root (1920x1080 at 60 fps), then copy the MP4 to
assets/videos/:

    manim -qh --disable_caching -o rotation_by_shears_manim \
        assets/manim/rotation_by_shears.py RotationByShears

The still preview in assets/videos/previews/ is a frame from the second shear:

    ffmpeg -ss 21 -i assets/videos/rotation_by_shears_manim.mp4 \
        -frames:v 1 -q:v 3 assets/videos/previews/rotation_by_shears_manim.jpg

All lettering is LaTeX (Tex and MathTex), so Pango is not needed.
"""
import shutil
import subprocess

import numpy as np
from manim import *
import manim.utils.tex_file_writing as tex_file_writing

# Manim turns LaTeX into SVG with dvisvgm.  Where dvisvgm is not installed, the
# PDF written by pdflatex is converted with pdftocairo (Poppler) instead.
if shutil.which("dvisvgm") is None:
    def _pdf_to_svg(pdf_file, extension, page=1):
        result = pdf_file.with_suffix(".svg")
        if not result.exists():
            subprocess.run(["pdftocairo", "-svg", "-f", str(page), "-l", str(page),
                            str(pdf_file), str(result)], check=True)
        return result

    tex_file_writing.convert_to_svg = _pdf_to_svg

TEX = TexTemplate(
    tex_compiler="pdflatex", output_format=".pdf",
    preamble="\n".join([
        r"\usepackage[T1]{fontenc}",
        r"\usepackage[sc]{mathpazo}",       # Palatino text and mathematics
        r"\usepackage{amsmath}",
        r"\usepackage{amssymb}",
    ]),
)
config.tex_template = TEX
config.background_color = BLACK

# ---- the construction -------------------------------------------------------
THETA = 60 * DEGREES
A = -np.tan(THETA / 2)                      # the horizontal shears
B = np.sin(THETA)                           # the vertical shear
O = np.array([-4.55, -0.45, 0.0])            # the origin of the plane, on screen
S = 1.2                                     # screen units per unit of the plane

H_COL, V_COL, F_COL = BLUE, ORANGE, PINK
NOTE_COL = GREY_B
RIGHT_EDGE = 6.75                           # the statements are right-aligned here

SQUARE = [(-1, -1), (1, -1), (1, 1), (-1, 1)]
LETTER = [(-0.45, -0.7), (-0.45, 0.7), (0.55, 0.7), (0.55, 0.38), (-0.1, 0.38),
          (-0.1, 0.12), (0.35, 0.12), (0.35, -0.2), (-0.1, -0.2), (-0.1, -0.7)]
# points whose motion is shown: the corners and the midpoints of the sides
MARKS = [(-1, -1), (0, -1), (1, -1), (1, 0), (1, 1), (0, 1), (-1, 1), (-1, 0)]

H_MATRIX = np.array([[1, A], [0, 1]])
V_MATRIX = np.array([[1, 0], [B, 1]])


def screen(p):
    """A point of the plane, on screen."""
    return O + S * np.array([p[0], p[1], 0.0])


def arrow(start, end, color, width=5):
    return Arrow(start, end, buff=0, color=color, stroke_width=width,
                 tip_length=0.20, max_tip_length_to_length_ratio=0.45,
                 max_stroke_width_to_length_ratio=100)


def math(*parts, size=40, **kw):
    return MathTex(*parts, font_size=size, **kw)


def text(s, size=36, color=WHITE):
    return Tex(s, font_size=size, color=color)


def note(s):
    return Tex(s, font_size=27, color=NOTE_COL)


def at_right(mob, y):
    """Right-align a statement in the right-hand column at height y."""
    return mob.move_to([RIGHT_EDGE - mob.width / 2, y, 0])


def matrix(a, b, c, d):
    return r"\begin{bmatrix} %s & %s \\ %s & %s \end{bmatrix}" % (a, b, c, d)


class RotationByShears(Scene):
    def construct(self):
        # check the factorization before drawing anything
        product = H_MATRIX @ V_MATRIX @ H_MATRIX
        rotation = np.array([[np.cos(THETA), -np.sin(THETA)], [np.sin(THETA), np.cos(THETA)]])
        assert np.allclose(product, rotation)

        # ---- title, axes, the picture, and the goal --------------------------
        title = text(r"A rotation made of three shears", size=40)
        title.to_corner(UL, buff=0.45)

        axes = VGroup(
            Line(O + LEFT * 2.6, O + RIGHT * 2.6),
            Line(O + DOWN * 3.3, O + UP * 3.3),
        ).set_stroke(GREY_D, width=2)
        origin = Dot(O, radius=0.05, color=GREY_A)

        start = VGroup(*[
            DashedLine(screen(SQUARE[k]), screen(SQUARE[(k + 1) % 4]), color=GREY_B,
                       stroke_width=2.5, dash_length=0.10)
            for k in range(4)
        ])
        square = Polygon(*[screen(p) for p in SQUARE], color=WHITE, stroke_width=4,
                         fill_color=WHITE, fill_opacity=0.10)
        grid = VGroup(*(
            [Line(screen((-1, k)), screen((1, k))) for k in (-0.5, 0, 0.5)] +
            [Line(screen((k, -1)), screen((k, 1))) for k in (-0.5, 0, 0.5)]
        )).set_stroke(GREY_B, width=1.5, opacity=0.7)
        letter = Polygon(*[screen(p) for p in LETTER], color=F_COL, stroke_width=2,
                         fill_color=F_COL, fill_opacity=0.95)
        picture = VGroup(square, grid, letter)

        goal = text(r"Rotate the picture through $\theta$, using only shears")
        at_right(goal, 3.40)
        goal_note = at_right(note(r"(here $\theta = 60^\circ$)"), 2.93)

        self.play(FadeIn(title), run_time=0.8)
        self.play(Create(axes), FadeIn(origin), run_time=0.8)
        self.play(FadeIn(picture), run_time=1.0)
        self.play(Write(goal), run_time=1.4)
        self.play(FadeIn(goal_note), run_time=0.5)
        self.wait(0.6)

        # ---- the two kinds of shear ------------------------------------------
        h_def = math(r"H_a = " + matrix("1", "a", "0", "1"), r":\ ",
                     r"\begin{bmatrix} x \\ y \end{bmatrix} \mapsto "
                     r"\begin{bmatrix} x + ay \\ y \end{bmatrix}", size=34)
        h_def[0].set_color(H_COL)
        at_right(h_def, 2.00)
        h_note = at_right(note(r"(horizontal shear: every row slides sideways)"), 1.32)
        v_def = math(r"V_b = " + matrix("1", "0", "b", "1"), r":\ ",
                     r"\begin{bmatrix} x \\ y \end{bmatrix} \mapsto "
                     r"\begin{bmatrix} x \\ y + bx \end{bmatrix}", size=34)
        v_def[0].set_color(V_COL)
        at_right(v_def, 0.52)
        v_note = at_right(note(r"(vertical shear: every column slides up or down)"), -0.16)

        self.play(Write(h_def), run_time=1.3)
        self.play(FadeIn(h_note), run_time=0.5)
        self.play(Write(v_def), run_time=1.3)
        self.play(FadeIn(v_note), run_time=0.5)
        self.wait(1.0)

        # ---- the product, built from right to left ---------------------------
        # written with a slash: the thin rule of \frac is lost when the PDF is converted to SVG
        tan_half = r"-\tan(\theta/2)"
        third = math(matrix("1", tan_half, "0", "1"), size=31, color=H_COL)
        second = math(matrix("1", "0", r"\sin\theta", "1"), size=31, color=V_COL)
        first = math(matrix("1", tan_half, "0", "1"), size=31, color=H_COL)
        factors = VGroup(third, second, first).arrange(RIGHT, buff=0.14)
        at_right(factors, -1.25)
        tags = VGroup(*[
            note(word).next_to(factor, DOWN, buff=0.12)
            for word, factor in (("third", third), ("second", second), ("first", first))
        ])

        current = np.eye(2)

        def shear(step, kind, factor, tag, caption):
            """Apply one shear to the picture, with arrows, and show its factor."""
            nonlocal current
            m = H_MATRIX if kind == "H" else V_MATRIX
            color = H_COL if kind == "H" else V_COL
            label = at_right(text(caption, size=34, color=color), -2.75)
            after = m @ current
            slides = VGroup()
            for p in MARKS:
                tail, head = screen(current @ np.array(p)), screen(after @ np.array(p))
                if np.linalg.norm(head - tail) > 0.12:
                    slides.add(arrow(tail, head, color))
            self.play(FadeIn(label), FadeIn(factor), FadeIn(tag), run_time=0.8)
            self.play(
                picture.animate.apply_matrix(m, about_point=O),
                *[GrowArrow(s) for s in slides],
                run_time=3.2, rate_func=smooth,
            )
            self.wait(1.3)
            self.play(FadeOut(slides), FadeOut(label), run_time=0.6)
            current = after

        self.add(start)
        self.bring_to_back(start)
        shear(1, "H", first, tags[2], r"1.\ \ shear horizontally: $a = -\tan(\theta/2)$")
        shear(2, "V", second, tags[1], r"2.\ \ shear vertically: $b = \sin\theta$")
        shear(3, "H", third, tags[0], r"3.\ \ shear horizontally again, with the same $a$")

        # ---- the result is the rotation ---------------------------------------
        ray = Line(O, screen((1.42 * np.cos(THETA), 1.42 * np.sin(THETA))),
                   color=WHITE, stroke_width=2.5)
        base = Line(O, screen((1.42, 0)), color=WHITE, stroke_width=2.5)
        arc = Arc(radius=1.30 * S, start_angle=0, angle=THETA, arc_center=O,
                  color=WHITE, stroke_width=3)
        theta_tag = math(r"\theta", size=34)
        theta_tag.move_to(screen((1.62 * np.cos(THETA / 2), 1.62 * np.sin(THETA / 2))))
        self.play(Create(base), Create(ray), run_time=0.7)
        self.play(Create(arc), FadeIn(theta_tag), run_time=0.9)

        result = math(matrix(r"\cos\theta", r"-\sin\theta", r"\sin\theta", r"\cos\theta"), r"=",
                      size=31)
        result.next_to(factors, LEFT, buff=0.16)
        order = note(r"(the factor on the right acts first)")
        order.move_to([RIGHT_EDGE - order.width / 2, -2.45, 0])
        self.play(Write(result), run_time=1.2)
        self.play(FadeIn(order), run_time=0.5)
        self.wait(1.0)

        final = text(r"the matrix of $R_\theta$ is $H_a\,V_b\,H_a$", size=40, color=YELLOW)
        final.move_to([RIGHT_EDGE - final.width / 2 - 0.2, -3.30, 0])
        box = SurroundingRectangle(final, color=YELLOW, buff=0.20, stroke_width=3)
        self.play(FadeIn(final), Create(box), run_time=1.0)
        self.wait(3.0)
