"""A rotation of the plane is a linear transformation, shown geometrically.

For Section 3.1 of the MATH 53 notes, between the definition of a linear
transformation and the theorem on its properties.  Two short arguments, one per
property of the definition:

  1. Addition.  u, v and u + v form a parallelogram with u + v as its diagonal.
     Rotating the plane carries the parallelogram to the parallelogram on
     R(u) and R(v), so the rotated diagonal R(u + v) is the diagonal of the new
     parallelogram, R(u) + R(v).

  2. Scalar multiplication.  u and a u lie on one line through the origin.
     A rotation carries that line to a line through the origin and keeps
     lengths, so R(a u) is a times R(u).  The scalar a then varies, through
     negative values too, and the two orange arrows stay in step.

The look follows the two-dimensional MATH 13 videos (law_of_cosines,
projection_formula): black background, title in the top-left corner, the
figure on the left, the statements right-aligned on the right with small grey
remarks under them, and the conclusion boxed in yellow.  The lettering is set
in Palatino (mathpazo), the LaTeX counterpart of the TeX Gyre Pagella used by
the book's web pages.

Render from the repository root (1920x1080 at 60 fps, the format of those
videos), then copy the MP4 to assets/videos/:

    manim -qh --disable_caching -o rotation_is_linear_manim \
        assets/manim/rotation_is_linear.py RotationIsLinear

The still preview in assets/videos/previews/ is the frame one third of the way
through the video:

    ffmpeg -ss 14.4 -i assets/videos/rotation_is_linear_manim.mp4 \
        -frames:v 1 -q:v 3 assets/videos/previews/rotation_is_linear_manim.jpg

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
O = np.array([-3.6, -2.4, 0.0])             # the origin of the plane, on screen
U = np.array([2.75, 0.14, 0.0])             # part 1
V = np.array([1.25, 1.25, 0.0])
U2 = np.array([1.70, 0.40, 0.0])            # part 2
A_START, A_LOW, A_END = 2.0, -0.5, 1.5      # the scalar a

U_COL, V_COL, SUM_COL, SCALED_COL = YELLOW, BLUE, PINK, ORANGE
NOTE_COL = GREY_B
RIGHT_EDGE = 6.75                           # the statements are right-aligned here


def rot(p, angle=THETA):
    c, s = np.cos(angle), np.sin(angle)
    return np.array([c * p[0] - s * p[1], s * p[0] + c * p[1], 0.0])


def unit(p):
    return p / np.linalg.norm(p)


def normal(p):
    """Unit vector a quarter turn counterclockwise from p."""
    return rot(unit(p), 90 * DEGREES)


def arrow(start, end, color, width=8):
    return Arrow(start, end, buff=0, color=color, stroke_width=width,
                 tip_length=0.30, max_tip_length_to_length_ratio=0.4,
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


class RotationIsLinear(Scene):
    def construct(self):
        # ---- title, axes, and what R_theta does ------------------------------
        title = text(r"A rotation is a linear transformation", size=40)
        title.to_corner(UL, buff=0.45)

        axes = VGroup(
            Line(O + LEFT * 3.1, O + RIGHT * 4.2),
            Line(O + DOWN * 1.2, O + UP * 5.1),
        ).set_stroke(GREY_D, width=2)
        origin = Dot(O, radius=0.055, color=GREY_A)

        r_def = math(r"R_\theta", r":\ \text{rotate about the origin through }\theta")
        at_right(r_def, 3.40)
        r_note = at_right(note(r"(counterclockwise, every vector by the same angle)"), 2.93)

        self.play(FadeIn(title), run_time=0.8)
        self.play(Create(axes), FadeIn(origin), run_time=0.8)
        self.play(Write(r_def), run_time=1.3)
        self.play(FadeIn(r_note), run_time=0.5)
        self.wait(0.5)

        # ======================================================================
        # 1. Addition
        # ======================================================================
        q1 = at_right(text(r"Does $R_\theta$ preserve addition?", color=GREY_A), 2.05)

        u = arrow(O, O + U, U_COL)
        v = arrow(O, O + V, V_COL)
        u_tag = math(r"\vec{u}", color=U_COL).move_to(O + 0.60 * U - 0.36 * normal(U))
        v_tag = math(r"\vec{v}", color=V_COL).move_to(O + 0.62 * V + 0.38 * normal(V))

        self.play(FadeIn(q1), run_time=0.6)
        self.play(GrowArrow(u), GrowArrow(v), FadeIn(u_tag), FadeIn(v_tag), run_time=1.2)

        # the parallelogram and its diagonal
        fill = Polygon(O, O + U, O + U + V, O + V, stroke_width=0,
                       fill_color=SUM_COL, fill_opacity=0.13)
        side_v = DashedLine(O + U, O + U + V, color=V_COL, stroke_width=4, dash_length=0.12)
        side_u = DashedLine(O + V, O + U + V, color=U_COL, stroke_width=4, dash_length=0.12)
        total = arrow(O, O + U + V, SUM_COL)
        total_tag = math(r"\vec{u}+\vec{v}", color=SUM_COL)
        total_tag.move_to(O + U + V + 0.36 * UP + 0.55 * RIGHT)

        self.play(Create(side_v), Create(side_u), FadeIn(fill), run_time=1.0)
        self.play(GrowArrow(total), FadeIn(total_tag), run_time=1.0)
        self.wait(0.6)

        # rotate a copy of the whole figure; the original stays, dimmed
        figure = VGroup(fill, side_v, side_u, total, u, v)
        moving = figure.copy()
        self.add(moving)
        angle_arc = Arc(radius=0.95, start_angle=np.arctan2(U[1], U[0]), angle=THETA,
                        arc_center=O, color=WHITE, stroke_width=3)
        theta_tag = math(r"\theta", size=34)
        theta_tag.move_to(O + 1.25 * rot(unit(U), THETA / 2))
        self.play(
            figure.animate.set_opacity(0.28), fill.animate.set_opacity(0.05),
            u_tag.animate.set_opacity(0.45), v_tag.animate.set_opacity(0.45),
            total_tag.animate.set_opacity(0.45), run_time=0.6,
        )
        self.play(Rotate(moving, angle=THETA, about_point=O),
                  Create(angle_arc), run_time=3.2, rate_func=smooth)
        self.play(FadeIn(theta_tag), run_time=0.4)

        ru, rv, rsum = rot(U), rot(V), rot(U + V)
        ru_tag = math(r"R_\theta(\vec{u})", size=36, color=U_COL)
        ru_tag.move_to(O + 0.62 * ru - 0.82 * normal(ru))
        rv_tag = math(r"R_\theta(\vec{v})", size=36, color=V_COL)
        rv_tag.move_to(O + rv + 0.30 * unit(rv) + 0.78 * LEFT)
        self.play(FadeIn(ru_tag), FadeIn(rv_tag), run_time=0.8)

        # left side: the rotated diagonal
        eq1 = math(r"R_\theta(\vec{u}+\vec{v})", "=", r"R_\theta(\vec{u})", "+",
                   r"R_\theta(\vec{v})")
        eq1[0].set_color(SUM_COL)
        eq1[2].set_color(U_COL)
        eq1[4].set_color(V_COL)
        at_right(eq1, 1.35)
        note1a = at_right(note(r"(left side: the rotated diagonal)"), 0.85)
        rsum_tag = math(r"R_\theta(\vec{u}+\vec{v})", size=36, color=SUM_COL)
        rsum_tag.move_to(O + rsum + 0.34 * UP + 1.05 * LEFT)
        rotated_total = moving[3]
        self.play(Indicate(rotated_total, color=SUM_COL, scale_factor=1.06),
                  FadeIn(rsum_tag), Write(eq1[0]), run_time=1.3)
        self.play(FadeIn(note1a), run_time=0.5)
        self.wait(0.9)

        # right side: the same arrow is the diagonal of the rotated parallelogram,
        # reached tip to tail along R(u) and then R(v)
        tail_to_tip = arrow(O + ru, O + ru + rv, V_COL)
        note1b = at_right(
            note(r"(right side: the diagonal of the rotated parallelogram)"), 0.85)
        self.play(Indicate(moving[4], color=U_COL, scale_factor=1.04), run_time=0.8)
        self.play(GrowArrow(tail_to_tip), run_time=1.0)
        self.play(Write(eq1[1:]), FadeOut(note1a), FadeIn(note1b), run_time=1.3)
        check1 = math(r"\checkmark", size=40, color=GREEN).next_to(eq1, LEFT, buff=0.3)
        self.play(FadeIn(check1, scale=0.6), run_time=0.5)
        self.wait(1.5)

        # ======================================================================
        # 2. Scalar multiplication
        # ======================================================================
        part1 = VGroup(figure, moving, tail_to_tip, angle_arc, theta_tag,
                       u_tag, v_tag, total_tag, ru_tag, rv_tag, rsum_tag)
        q2 = at_right(text(r"Does $R_\theta$ preserve scalar multiplication?", color=GREY_A), -0.25)
        self.play(FadeOut(part1), FadeOut(note1b), run_time=0.8)
        self.play(FadeIn(q2), run_time=0.6)

        a = ValueTracker(A_START)
        d, rd = unit(U2), rot(unit(U2))
        line = DashedLine(O - 1.35 * d, O + 3.75 * d, color=GREY_B, stroke_width=2.5,
                          dash_length=0.10)
        rline = DashedLine(O - 1.10 * rd, O + 3.75 * rd, color=GREY_B, stroke_width=2.5,
                           dash_length=0.10)

        def scaled(direction):
            def make():
                value = a.get_value()
                if abs(value) < 0.04:
                    return VectorizedPoint(O)
                return arrow(O, O + value * direction, SCALED_COL, width=12)
            return make

        au = always_redraw(scaled(U2))
        rau = always_redraw(scaled(rot(U2)))
        u_b = arrow(O, O + U2, U_COL, width=6)
        ru_b = arrow(O, O + rot(U2), U_COL, width=6)

        u_b_tag = math(r"\vec{u}", size=36, color=U_COL)
        u_b_tag.move_to(O + 0.62 * U2 - 0.36 * normal(U2))
        ru_b_tag = math(r"R_\theta(\vec{u})", size=36, color=U_COL)
        ru_b_tag.move_to(O + 0.95 * rot(U2) - 0.82 * normal(rot(U2)))
        au_tag = math(r"a\vec{u}", size=36, color=SCALED_COL)
        rau_tag = math(r"R_\theta(a\vec{u})", size=36, color=SCALED_COL)

        def follow(tag, direction, side, along=0.0):
            def place(m):
                tip = O + a.get_value() * direction
                m.move_to(tip + side * normal(direction) + along * unit(direction))
            return place

        au_tag.add_updater(follow(au_tag, U2, 0.42))
        rau_tag.add_updater(follow(rau_tag, rot(U2), 0.95))
        au_tag.update()
        rau_tag.update()

        a_read = VGroup(math("a =", size=38, color=SCALED_COL),
                        DecimalNumber(A_START, num_decimal_places=1, font_size=38,
                                      color=SCALED_COL, include_sign=False))
        a_read.arrange(RIGHT, buff=0.16)
        a_read.move_to([-5.75, 1.55, 0])
        a_read[1].add_updater(lambda m: m.set_value(a.get_value()))

        self.play(Create(line), run_time=0.7)
        self.play(GrowArrow(au), run_time=0.9)
        self.add(au)
        self.play(GrowArrow(u_b), FadeIn(u_b_tag), FadeIn(au_tag), FadeIn(a_read), run_time=0.9)
        self.wait(0.5)

        # rotate copies of the line and of both arrows
        ghost = VGroup(line.copy(), arrow(O, O + A_START * U2, SCALED_COL, width=12),
                       u_b.copy())
        angle_arc2 = Arc(radius=0.70, start_angle=np.arctan2(U2[1], U2[0]), angle=THETA,
                         arc_center=O, color=WHITE, stroke_width=3)
        theta_tag2 = math(r"\theta", size=34)
        theta_tag2.move_to(O + 0.98 * rot(unit(U2), THETA / 2))
        self.add(ghost)
        self.bring_to_front(u_b)
        self.play(Rotate(ghost, angle=THETA, about_point=O), Create(angle_arc2),
                  run_time=2.8, rate_func=smooth)
        self.remove(ghost)
        self.add(rline, rau, ru_b)
        self.play(FadeIn(theta_tag2), FadeIn(ru_b_tag), FadeIn(rau_tag), run_time=0.8)

        eq2 = math(r"R_\theta(a\vec{u})", "=", "a", r"\,R_\theta(\vec{u})")
        eq2[0].set_color(SCALED_COL)
        eq2[2].set_color(SCALED_COL)
        eq2[3].set_color(U_COL)
        at_right(eq2, -0.95)
        note2 = VGroup(note(r"(a line through the origin stays a line,"),
                       note(r"and lengths do not change)"))
        note2.arrange(DOWN, buff=0.10, aligned_edge=RIGHT)
        at_right(note2, -1.58)
        self.play(Write(eq2[0]), run_time=0.9)
        self.play(FadeIn(note2), run_time=0.5)
        self.wait(0.6)
        self.play(Write(eq2[1:]), run_time=1.1)
        self.wait(0.5)

        # the same holds for every scalar, negative ones included
        self.play(a.animate.set_value(A_LOW), run_time=2.6, rate_func=smooth)
        self.wait(0.5)
        self.play(a.animate.set_value(A_END), run_time=2.2, rate_func=smooth)
        check2 = math(r"\checkmark", size=40, color=GREEN).next_to(eq2, LEFT, buff=0.3)
        self.play(FadeIn(check2, scale=0.6), run_time=0.5)
        self.wait(0.8)

        # ---- conclusion ------------------------------------------------------
        final = text(r"$R_\theta$ is a linear transformation", size=40, color=YELLOW)
        at_right(final, -2.75).shift(LEFT * 0.2)
        box = SurroundingRectangle(final, color=YELLOW, buff=0.22, stroke_width=3)
        self.play(FadeIn(final), Create(box), run_time=1.0)
        self.wait(3.0)
