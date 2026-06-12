#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk R1.

Kjor:  python3 scripts/svg/figurer-r1.py
Output: public/images/content/r1/*.svg
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, W, H, fmt

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'images', 'content', 'r1')
PI = math.pi


def save(fig, name):
    path = os.path.normpath(os.path.join(OUT, name))
    fig.save(path)
    print('OK', name)


# ---------- hjelpefunksjoner (nye primitiver, kun i denne filen) ----------

def boxed_text(fig, cx, cy, lines, size=32, pad=22, color=None, text_color=None):
    """Tekstboks med ramme, sentrert i (cx, cy)."""
    c = color or fig.p['accent']
    wmax = max(len(ln) for ln in lines) * size * 0.52
    h = len(lines) * (size + 12) + pad
    fig.rect(cx - wmax / 2 - pad, cy - h / 2, wmax + 2 * pad, h, fill=fig.p['bg'],
             stroke=c, width=3, rx=12)
    for i, ln in enumerate(lines):
        y = cy + (i - (len(lines) - 1) / 2) * (size + 12) + size * 0.35
        fig.text(cx, y, ln, size, color=text_color or fig.p['text'], bold=True)


def dbl_arrow(fig, x1, y1, x2, y2, color, width=4, head=13):
    fig.arrow(x1, y1, x2, y2, color, width, head)
    fig.arrow(x2, y2, x1, y1, color, width, head)


def angle_arc(fig, cx, cy, r, a1_deg, a2_deg, color, width=3, label=None, lab_size=30, lab_r=None):
    """Vinkelbue fra a1 til a2 grader (mat. retning, y opp i skjermkoord)."""
    pts = []
    n = 40
    for i in range(n + 1):
        a = math.radians(a1_deg + (a2_deg - a1_deg) * i / n)
        pts.append((cx + r * math.cos(a), cy - r * math.sin(a)))
    fig.poly(pts, stroke=color, width=width)
    if label:
        am = math.radians((a1_deg + a2_deg) / 2)
        lr = lab_r or (r + 34)
        fig.text(cx + lr * math.cos(am), cy - lr * math.sin(am) + 10, label, lab_size, bold=True)


def right_angle_mark(fig, x, y, ux, uy, vx, vy, size=22, color=None):
    """Kvadratsymbol i hjornet (x,y) med enhetsretninger (ux,uy) og (vx,vy) i skjermkoord."""
    c = color or fig.p['accent']
    fig.poly([(x + ux * size, y + uy * size),
              (x + ux * size + vx * size, y + uy * size + vy * size),
              (x + vx * size, y + vy * size)], stroke=c, width=3)


def curve_pts(f, a, b, tx, ty, n=200):
    return [(tx(a + (b - a) * i / n), ty(f(a + (b - a) * i / n))) for i in range(n + 1)]


# =====================================================================
# Kapittel 1: Algebra
# =====================================================================

def r1_1_1_polynomdivisjon():
    fig = Fig('r1')
    fig.title('Polynomdivisjon')
    P = fig.p
    # Hovedlinje
    fig.text(180, 240, '(x³ − 2x² − 5x + 6) : (x − 1) =', 42, anchor='start')
    fig.text(1010, 240, 'x² − x − 6', 44, color=P['main'], anchor='start', bold=True)
    # Mellomresultater
    fig.text(260, 380, '−x² − 5x', 40, anchor='start')
    fig.text(340, 520, '−6x + 6', 40, anchor='start')
    fig.text(420, 660, 'rest 0', 40, anchor='start', bold=True)
    fig.line(240, 410, 700, 410, P['grid'], 2)
    fig.line(320, 550, 700, 550, P['grid'], 2)
    # Trinnsirkler
    for i, (x, y) in enumerate([(180, 367), (260, 507), (340, 647)]):
        fig.circle(x, y, 26, stroke=P['accent'], width=3)
        fig.text(x, y + 11, str(i + 1), 30, color=P['accent'], bold=True)
    # Gyllen pil fra x^3 til x^2 i kvotienten
    fig.poly([(215, 200), (300, 120), (900, 120), (1035, 195)], stroke=P['accent'], width=3, dash='10 8')
    fig.arrow(1000, 168, 1035, 195, P['accent'], 3)
    fig.text(600, 105, 'del høyeste ledd på x', 28, color=P['accent'])
    fig.text(800, 800, 'P(x) = (x − 1) · (x² − x − 6)', 34, color=P['extra'])
    save(fig, 'r1-1-1-polynomdivisjon-oppsett.svg')


def r1_1_1_faktorteoremet():
    fig = Fig('r1')
    P = fig.p
    fig.title('Faktorteoremet')
    f = lambda x: (x + 2) * (x - 1) * (x - 3)
    tx, ty = fig.coords(-3.4, 4.4, -14, 14, box=(170, 170, 1430, 770),
                        xticks=[-3, -2, -1, 1, 2, 3, 4], yticks=[-10, 10], xlabel='x', ylabel='y')
    fig.plot(f, color=P['main'], width=5)
    fig.text(W / 2, 135, 'P(x) = (x + 2)(x − 1)(x − 3)', 36, color=P['main'], bold=True)
    for r in (-2, 1, 3):
        fig.point(r, 0, color=P['accent'], r=11)
        fig.text(tx(r), ty(0) - 28, f'x = {fmt(r)}', 28, color=P['accent'], bold=True)
    fig.text(W / 2, 845, 'P(r) = 0  ⟺  (x − r) er faktor', 34, color=P['extra'], bold=True)
    save(fig, 'r1-1-1-faktorteoremet-graf.svg')


def r1_1_2_logaritme_invers():
    fig = Fig('r1')
    P = fig.p
    tx, ty = fig.coords(-2.5, 5.5, -2.5, 5.5, box=(460, 110, 1140, 790),
                        xticks=[-2, -1, 1, 2, 3, 4, 5], yticks=[-2, -1, 1, 2, 3, 4, 5], xlabel='x', ylabel='y')
    fig.plot(lambda x: (x), color=P['accent'], width=3, dash='14 12')
    fig.plot(math.exp, color=P['main'], width=5)
    fig.plot(lambda x: math.log(x) if x > 0.01 else None, xmin=0.02, color=P['extra'], width=5)
    for a, b in [((0, 1), (1, 0)), ((1, math.e), (math.e, 1))]:
        fig.line(tx(a[0]), ty(a[1]), tx(b[0]), ty(b[1]), P['text'], 2, dash='8 8', opacity=0.7)
        fig.point(*a, color=P['main'])
        fig.point(*b, color=P['extra'])
    fig.text(tx(0) + 20, ty(1) - 18, '(0, 1)', 28, anchor='start', bold=True)
    fig.text(tx(1) - 18, ty(0) + 44, '(1, 0)', 28, anchor='end', bold=True)
    fig.text(tx(1) - 20, ty(math.e) - 5, '(1, e)', 28, anchor='end', bold=True)
    fig.text(tx(math.e), ty(1) + 50, '(e, 1)', 28, bold=True)
    fig.text(tx(4.6), ty(4.6) - 16, 'y = x', 30, color=P['accent'], bold=True, anchor='end')
    fig.text(240, 160, 'y = eˣ', 38, color=P['main'], bold=True)
    fig.text(240, 230, 'ln(eˣ) = x', 32, color=P['main'])
    fig.text(1380, 700, 'y = ln x', 38, color=P['extra'], bold=True)
    fig.text(1380, 770, 'e^(ln x) = x', 32, color=P['extra'])
    save(fig, 'r1-1-2-logaritme-invers.svg')


def r1_1_3_halveringstid():
    fig = Fig('r1')
    P = fig.p
    f = lambda t: 100 * 0.5 ** (t / 8)
    tx, ty = fig.coords(0, 28, 0, 112, box=(190, 130, 1410, 760),
                        xticks=[8, 16, 24], yticks=[25, 50, 100], xlabel='t (dager)', ylabel='N (gram)')
    fig.plot(f, color=P['main'], width=5)
    for t in (8, 16, 24):
        fig.line(tx(t), ty(0), tx(t), ty(f(t)), P['extra'], 2.5, dash='10 8')
        fig.line(tx(0), ty(f(t)), tx(t), ty(f(t)), P['extra'], 2.5, dash='10 8')
        fig.point(t, f(t), color=P['accent'])
    fig.point(0, 100, color=P['accent'])
    fig.text(tx(0) + 24, ty(100) - 22, '(0, 100)', 28, anchor='start', bold=True)
    fig.text(tx(8) + 20, ty(50) - 22, '(8, 50)', 28, anchor='start', bold=True)
    fig.text(tx(16) + 20, ty(25) - 22, '(16, 25)', 28, anchor='start', bold=True)
    fig.text(tx(24) + 16, ty(12.5) - 26, '(24, 12,5)', 28, anchor='start', bold=True)
    for a in (0, 8, 16):
        y = ty(108)
        dbl_arrow(fig, tx(a) + 8, y, tx(a + 8) - 8, y, P['accent'], 3.5)
        fig.text(tx(a + 4), y - 18, '8 dager', 27, color=P['accent'], bold=True)
    fig.text(W / 2, 850, 'N(t) = 100 · 0,5^(t/8)', 34, color=P['main'], bold=True)
    save(fig, 'r1-1-3-halveringstid.svg')


def r1_1_5_absoluttverdi():
    fig = Fig('r1')
    P = fig.p
    fig.title('|x − 3| < 2 som avstand')
    y = 440
    tx = fig.number_line(-1.6, 7.6, y=y, ticks=list(range(-1, 8)),
                         labels={i: fmt(i) for i in range(-1, 8)},
                         segment=(1, 5, P['main']),
                         open_points=[(1, P['main'], None), (5, P['main'], None)],
                         points=[(3, P['accent'], '3')])
    ay = y - 90
    for a, b in [(3, 1), (3, 5)]:
        dbl_arrow(fig, tx(a) + (12 if b > a else -12), ay, tx(b) + (8 if b < a else -8), ay, P['extra'], 4)
        fig.text((tx(a) + tx(b)) / 2, ay - 24, 'avstand 2', 28, color=P['extra'], bold=True)
    fig.text(W / 2, 700, '|x − 3| < 2  ⟺  1 < x < 5', 38, color=P['main'], bold=True)
    save(fig, 'r1-1-5-absoluttverdi-ulikhet.svg')


# =====================================================================
# Kapittel 2: Funksjoner
# =====================================================================

def r1_2_1_like_odde():
    fig = Fig('r1')
    P = fig.p
    # Venstre: y = x^2
    tx, ty = fig.coords(-3.2, 3.2, -1.5, 6, box=(120, 150, 700, 720), xticks=[-2, 2], yticks=[4])
    fig.plot(lambda x: x * x, color=P['main'], width=5)
    fig.line(tx(0), ty(-1.2), tx(0), ty(5.8), P['accent'], 3, dash='12 10')
    fig.line(tx(-2), ty(4), tx(2), ty(4), P['extra'], 3, dash='10 8')
    fig.point(-2, 4, color=P['accent'])
    fig.point(2, 4, color=P['accent'])
    fig.text(410, 800, 'like: f(−x) = f(x)', 34, color=P['main'], bold=True)
    fig.text(410, 95, 'y = x²', 34, color=P['main'], bold=True)
    # Hoyre: y = x^3
    tx2, ty2 = fig.coords(-2.2, 2.2, -3.5, 3.5, box=(900, 150, 1480, 720), xticks=[-1, 1], yticks=[-1, 1])
    fig.plot(lambda x: x ** 3, color=P['main'], width=5)
    fig.point(-1, -1, color=P['accent'])
    fig.point(1, 1, color=P['accent'])
    fig.text(tx2(1) + 20, ty2(1) - 16, '(1, 1)', 28, anchor='start', bold=True)
    fig.text(tx2(-1) - 20, ty2(-1) + 36, '(−1, −1)', 28, anchor='end', bold=True)
    angle_arc(fig, tx2(0), ty2(0), 70, 30, 300, P['accent'], 3)
    a = math.radians(300)
    hx, hy = tx2(0) + 70 * math.cos(a), ty2(0) - 70 * math.sin(a)
    fig.arrow(hx - 14 * math.sin(a), hy - 14 * math.cos(a), hx, hy, P['accent'], 3, head=12)
    fig.text(1190, 800, 'odde: f(−x) = −f(x)', 34, color=P['main'], bold=True)
    fig.text(1190, 95, 'y = x³', 34, color=P['main'], bold=True)
    save(fig, 'r1-2-1-like-odde-funksjoner.svg')


def r1_2_2_omvendt():
    fig = Fig('r1')
    P = fig.p
    tx, ty = fig.coords(-2, 9.5, -2, 9.5, box=(440, 110, 1160, 790),
                        xticks=[2, 8], yticks=[2, 8], xlabel='x', ylabel='y')
    fig.plot(lambda x: x, color=P['accent'], width=3, dash='14 12')
    fig.plot(lambda x: x ** 3, color=P['main'], width=5)
    cbrt = lambda x: math.copysign(abs(x) ** (1 / 3), x)
    fig.plot(cbrt, color=P['extra'], width=5)
    fig.line(tx(2), ty(8), tx(8), ty(2), P['text'], 2, dash='8 8', opacity=0.7)
    fig.point(2, 8, color=P['main'])
    fig.point(8, 2, color=P['extra'])
    fig.text(tx(2) - 18, ty(8) - 5, '(2, 8)', 28, anchor='end', bold=True)
    fig.text(tx(8), ty(2) + 48, '(8, 2)', 28, bold=True)
    # horisontal linjetest
    fig.line(tx(-1.8), ty(5), tx(9.3), ty(5), P['warn'], 2.5, dash='6 8')
    fig.text(1395, ty(5) - 16, 'horisontal linjetest', 27, color=P['warn'], anchor='end')
    fig.text(255, 200, 'f(x) = x³', 36, color=P['main'], bold=True)
    fig.text(1380, 660, 'f⁻¹(x) = ∛x', 36, color=P['extra'], bold=True, anchor='end')
    fig.text(tx(8.6), ty(8.6) - 18, 'y = x', 30, color=P['accent'], bold=True, anchor='end')
    save(fig, 'r1-2-2-omvendt-funksjon.svg')


def r1_2_3_sammensatt():
    fig = Fig('r1')
    P = fig.p
    fig.title('Sammensatt funksjon — to maskiner i serie')
    y = 380
    # kuler og bokser
    def ball(x, lab):
        fig.circle(x, y + 60, 42, fill='none', stroke=P['accent'], width=4)
        fig.text(x, y + 73, lab, 36, color=P['accent'], bold=True)
    ball(170, '2')
    fig.arrow(225, y + 60, 330, y + 60, P['text'], 4)
    fig.flow_box(340, y, 340, 120, 'g(x) = x + 1', size=34)
    fig.raw('')
    fig.arrow(690, y + 60, 790, y + 60, P['text'], 4)
    ball(845, '3')
    fig.arrow(900, y + 60, 1000, y + 60, P['text'], 4)
    fig.flow_box(1010, y, 300, 120, 'f(x) = x²', size=34)
    fig.arrow(1320, y + 60, 1420, y + 60, P['text'], 4)
    ball(1475, '9')
    fig.text(525, y - 50, 'g', 34, color=P['extra'], bold=True, italic=True)
    fig.text(1160, y - 50, 'f', 34, color=P['main'], bold=True, italic=True)
    fig.text(W / 2, 720, '(f ∘ g)(x) = f(g(x)) = (x + 1)²', 40, color=P['main'], bold=True)
    save(fig, 'r1-2-3-sammensatt-funksjon.svg')


def r1_2_4_stykkevis():
    fig = Fig('r1')
    P = fig.p
    tx, ty = fig.coords(-1.5, 4.5, -3.5, 6.5, box=(220, 120, 1380, 740),
                        xticks=[-1, 1, 2, 3, 4], yticks=[1, 3, 6], xlabel='x', ylabel='y')
    fig.plot(lambda x: x + 1, xmax=2, color=P['main'], width=5)
    fig.plot(lambda x: x * x - 3, xmin=2, color=P['extra'], width=5)
    fig.line(tx(2), ty(1), tx(2), ty(3), P['accent'], 3, dash='10 8')
    fig.circle(tx(2), ty(3), 11, fill=P['bg'], stroke=P['main'], width=5)
    fig.circle(tx(2), ty(1), 11, fill=P['extra'])
    fig.text(tx(2) - 22, ty(3) - 20, 'venstre: 3', 30, anchor='end', color=P['main'], bold=True)
    fig.text(tx(2) + 24, ty(1) + 40, 'høyre: 1', 30, anchor='start', color=P['extra'], bold=True)
    fig.text(420, 200, 'y = x + 1, x < 2', 32, color=P['main'], bold=True)
    fig.text(1130, 230, 'y = x² − 3, x ≥ 2', 32, color=P['extra'], bold=True)
    fig.text(W / 2, 845, 'ikke kontinuerlig i x = 2', 36, color=P['warn'], bold=True)
    save(fig, 'r1-2-4-stykkevis-funksjon-kontinuitet.svg')


# =====================================================================
# Kapittel 3: Grenseverdi og kontinuitet
# =====================================================================

def r1_3_1_grenseverdi():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: x * x  # hull i (2,4)
    tx, ty = fig.coords(-0.5, 3.6, -1, 9, box=(220, 120, 1380, 720),
                        xticks=[1, 2, 3], yticks=[4], xlabel='x', ylabel='y')
    fig.plot(f, color=P['main'], width=5)
    fig.line(tx(-0.4), ty(4), tx(3.5), ty(4), P['text'], 2.5, dash='12 10', opacity=0.8)
    fig.text(tx(3.5), ty(4) - 16, 'L = 4', 30, anchor='end', bold=True)
    # punkter som naermer seg
    for x in (1.3, 1.55, 1.78):
        fig.point(x, f(x), color=P['accent'], r=8)
    for x in (2.7, 2.45, 2.22):
        fig.point(x, f(x), color=P['accent'], r=8)
    fig.circle(tx(2), ty(4), 12, fill=P['bg'], stroke=P['main'], width=5)
    fig.arrow(tx(1.1), ty(f(1.1)) - 40, tx(1.7), ty(f(1.7)) - 40, P['extra'], 3.5)
    fig.text(tx(1.25), ty(f(1.25)) - 70, 'x → 2⁻', 30, color=P['extra'], bold=True)
    fig.arrow(tx(2.95), ty(f(2.95)) + 60, tx(2.35), ty(f(2.35)) + 60, P['extra'], 3.5)
    fig.text(tx(2.85), ty(f(2.85)) + 110, 'x → 2⁺', 30, color=P['extra'], bold=True)
    fig.text(W / 2, 840, 'grensen er 4 selv om f(2) ikke er definert', 34, color=P['accent'], bold=True)
    save(fig, 'r1-3-1-grenseverdi-ensidig.svg')


def r1_3_2_diskontinuiteter():
    fig = Fig('r1')
    P = fig.p
    panels = [(110, 'fjernbar: hull'), (590, 'hoppunkt'), (1070, 'pol: vertikal asymptote')]
    for i, (x0, lab) in enumerate(panels):
        box = (x0, 170, x0 + 420, 680)
        tx, ty = fig.coords(-2.2, 2.2, -2.6, 2.6, box=box, grid=False, xticks=[], yticks=[])
        if i == 0:
            f = lambda x: 0.4 * x * x - 0.5
            fig.plot(f, color=P['main'], width=5)
            fig.circle(tx(1), ty(f(1)), 11, fill=P['bg'], stroke=P['main'], width=5)
        elif i == 1:
            fig.plot(lambda x: 0.5 * x - 0.8, xmax=0.5, color=P['main'], width=5)
            fig.plot(lambda x: 0.5 * x + 1.0, xmin=0.5, color=P['main'], width=5)
            fig.circle(tx(0.5), ty(0.5 * 0.5 - 0.8), 11, fill=P['bg'], stroke=P['main'], width=5)
            fig.circle(tx(0.5), ty(0.5 * 0.5 + 1.0), 11, fill=P['accent'])
        else:
            fig.line(tx(0.3), ty(-2.5), tx(0.3), ty(2.5), P['accent'], 3, dash='12 10')
            fig.plot(lambda x: 0.55 / (x - 0.3) - 0.3, xmax=0.28, color=P['main'], width=5)
            fig.plot(lambda x: 0.55 / (x - 0.3) - 0.3, xmin=0.32, color=P['main'], width=5)
        fig.text(x0 + 210, 790, lab, 32, color=P['extra'], bold=True)
    fig.title('Tre typer diskontinuitet')
    save(fig, 'r1-3-2-tre-diskontinuiteter.svg')


def r1_3_3_sekant_tangent():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: 0.35 * x * x + 0.5
    tx, ty = fig.coords(-0.3, 4.3, -0.8, 7.5, box=(190, 110, 1410, 660), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(f, color=P['main'], width=5)
    x0 = 1.0
    fp = 0.7 * x0
    # sekanter
    hs = [2.4, 1.6, 0.8]
    ops = [0.35, 0.6, 0.95]
    for h, op in zip(hs, ops):
        x1 = x0 + h
        slope = (f(x1) - f(x0)) / h
        g = lambda x, s=slope: f(x0) + s * (x - x0)
        fig.plot(g, xmin=0.0, xmax=4.2, color=P['extra'], width=3.5)
        fig.parts[-1] = fig.parts[-1].replace('opacity="1"', f'opacity="{op}"')
        fig.point(x1, f(x1), color=P['extra'], r=8)
    # tangent
    g = lambda x: f(x0) + fp * (x - x0)
    fig.plot(g, xmin=-0.2, xmax=4.2, color=P['accent'], width=5)
    fig.point(x0, f(x0), color=P['accent'], r=11)
    fig.text(tx(x0) - 22, ty(f(x0)) - 26, '(x, f(x))', 30, anchor='end', bold=True)
    fig.text(tx(3.0), ty(f(3.0)) - 170, 'sekanter', 30, color=P['extra'], bold=True)
    fig.text(tx(3.6), ty(g(3.6)) + 52, 'tangent', 30, color=P['accent'], bold=True)
    fig.arrow(tx(2.2), ty(f(x0) + ((f(x0+0.8)-f(x0))/0.8) * 1.2) - 10, tx(2.2), ty(g(2.2)) + 14, P['warn'], 4)
    fig.text(tx(2.32), ty(g(2.2)) - 60, 'h → 0', 30, color=P['warn'], bold=True, anchor='start')
    boxed_text(fig, W / 2, 800, ['f′(x) = lim (f(x + h) − f(x))/h  når  h → 0'], 34)
    save(fig, 'r1-3-3-sekant-blir-tangent.svg')


def r1_3_5_newton():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: 0.5 * x * x - 2          # nullpunkt x = 2
    df = lambda x: x
    tx, ty = fig.coords(-0.5, 5.0, -2.8, 5.5, box=(190, 200, 1410, 770),
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(f, color=P['main'], width=5)
    root = 2.0
    # gyllent kryss i nullpunktet
    for dx, dy in [(-1, -1), (-1, 1)]:
        fig.line(tx(root) + dx * 16, ty(0) + dy * 16, tx(root) - dx * 16, ty(0) - dy * 16, P['accent'], 5)
    x0 = 4.2
    xs = [x0]
    for _ in range(2):
        xs.append(xs[-1] - f(xs[-1]) / df(xs[-1]))
    for i in range(2):
        xa, xb = xs[i], xs[i + 1]
        fig.line(tx(xa), ty(0), tx(xa), ty(f(xa)), P['extra'], 3, dash='10 8')
        fig.line(tx(xa), ty(f(xa)), tx(xb), ty(0), P['accent'], 4)
        fig.point(xa, f(xa), color=P['extra'], r=8)
    for x, lab in zip(xs, ['x₀', 'x₁', 'x₂']):
        fig.circle(tx(x), ty(0), 8, fill=P['text'])
        fig.text(tx(x), ty(0) + 46, lab, 32, bold=True)
    boxed_text(fig, W / 2, 110, ['xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)'], 36)
    save(fig, 'r1-3-5-newtons-metode.svg')


def r1_3_6_differanse():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: 0.18 * x ** 3 - 0.4 * x + 2.4
    df = lambda x: 0.54 * x * x - 0.4
    tx, ty = fig.coords(-0.4, 4.4, 0.2, 12.0, box=(190, 120, 1410, 700), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(f, color=P['main'], width=5)
    x0, h = 2.0, 1.4
    pts = {'-': x0 - h, '0': x0, '+': x0 + h}
    # linjer
    def chord(xa, xb, color, width, lab, laby, dash=None):
        s = (f(xb) - f(xa)) / (xb - xa)
        g = lambda x: f(xa) + s * (x - xa)
        fig.plot(g, xmin=0.0, xmax=4.3, color=color, width=width, dash=dash)
        return g
    # eksakt tangent (hvit stiplet)
    gt = lambda x: f(x0) + df(x0) * (x - x0)
    fig.plot(gt, xmin=0.0, xmax=4.3, color='#FFFFFF', width=3, dash='12 10')
    gf = chord(x0, x0 + h, P['extra'], 3.5, 'forover', 0)
    gb = chord(x0 - h, x0, P['extra'], 3.5, 'bakover', 0)
    gc = chord(x0 - h, x0 + h, P['accent'], 4.5, 'sentral', 0)
    for k in pts.values():
        fig.point(k, f(k), color=P['accent'] if k == x0 else P['extra'], r=9)
    fig.text(tx(4.32), ty(gf(4.2)) - 24, 'forover', 28, color=P['extra'], bold=True, anchor='end')
    fig.text(tx(0.35), ty(gb(0.35)) - 20, 'bakover', 28, color=P['extra'], bold=True, anchor='start')
    fig.text(tx(4.32), ty(gc(4.2)) + 90, 'sentral', 28, color=P['accent'], bold=True, anchor='end')
    fig.text(tx(0.3), ty(gt(0.3)) + 48, 'tangent', 28, color='#FFFFFF', anchor='start')
    fig.text(W / 2, 830, 'sentral er mest nøyaktig', 34, color=P['accent'], bold=True)
    save(fig, 'r1-3-6-differanseformler.svg')


# =====================================================================
# Kapittel 4: Derivasjon
# =====================================================================

def r1_4_6_drofting():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: x ** 3 - 3 * x * x
    tx, ty = fig.coords(-1.6, 3.6, -5.2, 3.2, box=(230, 90, 1370, 560),
                        xticks=[-1, 1, 2, 3], yticks=[-4, -2], xlabel='x', ylabel='y')
    fig.plot(f, color=P['main'], width=5)
    for x, lab in [(0, '(0, 0)'), (2, '(2, −4)'), (1, '(1, −2)')]:
        fig.point(x, f(x), color=P['accent'])
    fig.text(tx(0) + 22, ty(0) - 22, '(0, 0)', 28, anchor='start', bold=True)
    fig.text(tx(2) + 24, ty(-4) + 48, '(2, −4)', 28, anchor='start', bold=True)
    fig.text(tx(1) + 24, ty(-2) + 10, '(1, −2) vendepunkt', 28, anchor='start', color=P['extra'])
    fig.line(tx(-0.45), ty(0), tx(0.45), ty(0), P['accent'], 4)
    fig.line(tx(1.55), ty(-4), tx(2.45), ty(-4), P['accent'], 4)
    # fortegnsskjema for f'
    ysc = 720
    xx0, xx1 = 330, 1290
    fig.line(tx(0), ty(f(0)), tx(0), ysc - 40, P['grid'], 2, dash='8 8')
    fig.line(tx(2), ty(f(2)), tx(2), ysc - 40, P['grid'], 2, dash='8 8')
    fig.sign_chart(xx0, xx1, ysc, [0, 2], ['+', '-', '+'], factor_label='f′(x)')
    fig.text(xx0 + (xx1 - xx0) / 6, ysc + 110, '↗ vokser', 30, color=P['extra'], bold=True)
    fig.text((xx0 + xx1) / 2, ysc + 110, '↘ synker', 30, color=P['extra'], bold=True)
    fig.text(xx1 - (xx1 - xx0) / 6, ysc + 110, '↗ vokser', 30, color=P['extra'], bold=True)
    fig.text(W / 2, 50, 'f(x) = x³ − 3x²', 36, color=P['main'], bold=True)
    save(fig, 'r1-4-6-funksjonsdrofting.svg')


def r1_4_7_ballong():
    fig = Fig('r1')
    P = fig.p
    fig.title('Relaterte rater — ballong som blåses opp')
    cy = 470
    data = [(280, 70), (560, 115), (920, 175)]
    for cx, r in data:
        fig.circle(cx, cy, r, stroke=P['extra'], width=4)
        fig.line(cx, cy, cx + r * 0.7071, cy - r * 0.7071, P['text'], 3)
        fig.text(cx + r * 0.32, cy - r * 0.5, 'r', 30, italic=True, bold=True)
        fig.circle(cx, cy, 5, fill=P['text'])
    cx, r = data[2]
    a = math.radians(35)
    fig.arrow(cx + r * math.cos(a), cy - r * math.sin(a),
              cx + (r + 80) * math.cos(a), cy - (r + 80) * math.sin(a), P['accent'], 5)
    fig.text(cx + (r + 105) * math.cos(a), cy - (r + 105) * math.sin(a), 'dr/dt', 32, color=P['accent'], bold=True)
    fig.text(280, cy + 170, 'dV/dt = 2 L/s', 30, color=P['extra'], bold=True)
    boxed_text(fig, 1280, 400, ['V = (4/3)πr³', 'dV/dt = 4πr² · dr/dt'], 34, color=P['main'])
    fig.text(W / 2, 800, 'volumet vokser jevnt — radien vokser saktere og saktere', 30, color=P['text'])
    save(fig, 'r1-4-7-relaterte-rater-ballong.svg')


def r1_4_8_globale():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: 0.30 * x ** 3 - 1.5 * x * x + 1.8 * x + 2.0
    a, b = 0.3, 4.7
    tx, ty = fig.coords(-0.4, 5.6, -1.8, 5.2, box=(190, 130, 1410, 700),
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(f, xmin=a, xmax=b, color=P['main'], width=5)
    # f'(x)=0.9x^2-3x+1.8 -> x=(3±sqrt(9-6.48))/1.8
    d = math.sqrt(9 - 4 * 0.9 * 1.8)
    xtop = (3 - d) / 1.8
    xbun = (3 + d) / 1.8
    fig.circle(tx(a), ty(f(a)), 10, fill=P['main'])
    fig.circle(tx(b), ty(f(b)), 10, fill=P['main'])
    fig.point(xtop, f(xtop), color=P['accent'])
    fig.point(xbun, f(xbun), color=P['accent'])
    fig.line(tx(xtop - 0.4), ty(f(xtop)), tx(xtop + 0.4), ty(f(xtop)), P['accent'], 4)
    fig.line(tx(xbun - 0.4), ty(f(xbun)), tx(xbun + 0.4), ty(f(xbun)), P['accent'], 4)
    fig.text(tx(xtop), ty(f(xtop)) - 42, 'lokalt maks', 28, color=P['accent'], bold=True)
    fig.circle(tx(b), ty(f(b)), 24, stroke=P['accent'], width=5)
    fig.text(tx(b) - 30, ty(f(b)) - 40, 'globalt maks i endepunkt', 30, color=P['accent'], bold=True, anchor='end')
    fig.text(tx(xbun), ty(f(xbun)) + 56, 'globalt min', 30, color=P['extra'], bold=True)
    fig.text(tx(a), ty(f(a)) + 52, 'a', 32, bold=True)
    fig.text(tx(b), ty(f(b)) + 56, 'b', 32, bold=True)
    fig.text(W / 2, 830, 'sjekk stasjonære punkter og endepunkter', 34, color=P['main'], bold=True)
    save(fig, 'r1-4-8-globale-ekstremalpunkter.svg')


def r1_4_9_optimering():
    fig = Fig('r1')
    P = fig.p
    fig.title('Minst materiale for 1 liter')
    # tre sylindere (samme volum): (r,h) i cm, skalert
    def cyl(cx, base_y, r_cm, h_cm, color, lw=3.5):
        s = 16  # px per cm
        rx, ry = r_cm * s, r_cm * s * 0.32
        hh = h_cm * s
        top = base_y - hh
        fig.parts.append(f'<ellipse cx="{cx}" cy="{base_y}" rx="{rx:.1f}" ry="{ry:.1f}" fill="none" stroke="{color}" stroke-width="{lw}"/>')
        fig.parts.append(f'<ellipse cx="{cx}" cy="{top}" rx="{rx:.1f}" ry="{ry:.1f}" fill="none" stroke="{color}" stroke-width="{lw}"/>')
        fig.line(cx - rx, base_y, cx - rx, top, color, lw)
        fig.line(cx + rx, base_y, cx + rx, top, color, lw)
    base = 620
    cyl(190, base, 3.3, 29.2, P['extra'])          # hoy og smal: pi*3.3^2*29.2 ~ 1000
    cyl(430, base, 5.42, 10.84, P['accent'], 5)    # optimal h=2r
    cyl(700, base, 8.5, 4.4, P['extra'])           # lav og bred
    fig.text(430, base + 70, 'h = 2r', 34, color=P['accent'], bold=True)
    fig.text(430, base + 120, 'optimal', 30, color=P['accent'])
    # graf O(r) = 2 pi r^2 + 2000/r
    O = lambda r: 2 * math.pi * r * r + 2000 / r
    tx, ty = fig.coords(0, 14, 0, 1500, box=(920, 170, 1480, 680),
                        xticks=[5.4, 10], yticks=[554], xlabel='r (cm)', ylabel='O (cm²)')
    fig.plot(O, xmin=1.5, color=P['main'], width=5)
    rmin = (500 / math.pi) ** (1 / 3)
    fig.line(tx(rmin), ty(0), tx(rmin), ty(O(rmin)), P['extra'], 2.5, dash='10 8')
    fig.line(tx(0), ty(O(rmin)), tx(rmin), ty(O(rmin)), P['extra'], 2.5, dash='10 8')
    fig.point(rmin, O(rmin), color=P['accent'])
    fig.text(tx(rmin) + 24, ty(O(rmin)) - 26, 'r ≈ 5,4 cm', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(1200, 120, 'O(r) = 2πr² + 2000/r', 32, color=P['main'], bold=True)
    save(fig, 'r1-4-9-optimering-boks.svg')


# =====================================================================
# Kapittel 5: Vekstmodeller
# =====================================================================

def r1_5_1_dobling():
    fig = Fig('r1')
    P = fig.p
    f = lambda t: 100 * 2 ** (t / 3)
    tx, ty = fig.coords(0, 10.5, 0, 900, box=(210, 120, 1410, 760),
                        xticks=[3, 6, 9], yticks=[100, 200, 400, 800], xlabel='t (timer)', ylabel='antall bakterier')
    fig.plot(f, color=P['main'], width=5)
    for t in (3, 6, 9):
        fig.line(tx(t), ty(0), tx(t), ty(f(t)), P['extra'], 2.5, dash='10 8')
        fig.line(tx(0), ty(f(t)), tx(t), ty(f(t)), P['extra'], 2.5, dash='10 8')
        fig.point(t, f(t), color=P['accent'])
    fig.point(0, 100, color=P['accent'])
    for a in (0, 3, 6):
        y = ty(860)
        dbl_arrow(fig, tx(a) + 8, y, tx(a + 3) - 8, y, P['accent'], 3.5)
        fig.text(tx(a + 1.5), y - 18, '3 timer', 27, color=P['accent'], bold=True)
    fig.text(440, 700, 'N(t) = 100 · 2^(t/3)', 34, color=P['main'], bold=True)
    save(fig, 'r1-5-1-eksponentiell-vekst-dobling.svg')


def r1_5_2_logistisk():
    fig = Fig('r1')
    P = fig.p
    M = 100
    f = lambda t: M / (1 + 24 * math.exp(-0.55 * t))
    g = lambda t: 4 * math.exp(0.55 * t)
    tx, ty = fig.coords(0, 12, 0, 125, box=(190, 120, 1410, 760),
                        xticks=[], yticks=[50, 100], xlabel='t', ylabel='N')
    fig.line(tx(0), ty(M), tx(12), ty(M), P['accent'], 3, dash='14 12')
    fig.text(tx(11.8), ty(M) - 18, 'bæreevne M', 30, color=P['accent'], bold=True, anchor='end')
    fig.plot(g, xmax=6.6, color=P['extra'], width=3.5, dash='10 9')
    fig.text(tx(6.2), ty(g(6.2)) - 30, 'eksponentiell', 30, color=P['extra'], bold=True, anchor='end')
    fig.plot(f, color=P['main'], width=5)
    t_v = math.log(24) / 0.55
    fig.line(tx(0), ty(M / 2), tx(t_v), ty(M / 2), P['text'], 2, dash='8 8', opacity=0.7)
    fig.point(t_v, M / 2, color=P['accent'])
    fig.text(tx(t_v) + 26, ty(M / 2) + 12, 'M/2: maks vekstfart', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(1100, 700, 'logistisk vekst', 32, color=P['main'], bold=True)
    save(fig, 'r1-5-2-logistisk-vekst.svg')


def r1_5_3_regresjon():
    fig = Fig('r1')
    P = fig.p
    M = 100
    f = lambda t: M / (1 + 30 * math.exp(-0.62 * t))
    tx, ty = fig.coords(0, 12, 0, 125, box=(190, 120, 1410, 760),
                        xticks=[], yticks=[], xlabel='tid', ylabel='antall')
    fig.line(tx(0), ty(M), tx(12), ty(M), P['accent'], 3, dash='14 12')
    fig.text(tx(11.8), ty(M) - 18, 'bæreevne', 30, color=P['accent'], bold=True, anchor='end')
    fig.plot(f, color=P['main'], width=5)
    # datapunkter med fast "stoy"
    noise = [3.1, -2.4, 1.8, -3.3, 4.1, -1.6, 2.6, -3.8, 1.4, -2.1, 3.3, -1.2]
    for i, t in enumerate([0.7, 1.6, 2.5, 3.4, 4.3, 5.2, 6.1, 7.0, 7.9, 8.8, 9.9, 11.0]):
        fig.circle(tx(t), ty(max(1, f(t) + noise[i])), 9, fill=P['extra'])
    boxed_text(fig, 380, 250, ['R² = 0,98'], 34, color=P['extra'])
    save(fig, 'r1-5-3-regresjon-logistisk.svg')


# =====================================================================
# Kapittel 6: Vektorer og parameterframstilling
# =====================================================================

def vcoords(fig, xmin, xmax, ymin, ymax, box=(220, 110, 1180, 790)):
    P = fig.p
    xt = [x for x in range(int(math.ceil(xmin)), int(xmax) + 1) if x != 0]
    yt = [y for y in range(int(math.ceil(ymin)), int(ymax) + 1) if y != 0]
    return fig.coords(xmin, xmax, ymin, ymax, box=box, xticks=xt, yticks=yt, xlabel='x', ylabel='y')


def r1_6_1_komponentform():
    fig = Fig('r1')
    P = fig.p
    tx, ty = vcoords(fig, -1, 5.5, -1, 3.5, box=(190, 130, 1150, 790))
    fig.line(tx(0), ty(0), tx(4), ty(0), P['main'], 3, dash='10 8')
    fig.line(tx(4), ty(0), tx(4), ty(2), P['main'], 3, dash='10 8')
    fig.text(tx(2), ty(0) - 48, '4', 32, color=P['main'], bold=True)
    fig.text(tx(4) + 22, ty(1) + 10, '2', 32, color=P['main'], bold=True, anchor='start')
    fig.vector(tx, ty, 0, 0, 4, 2, color=P['accent'], label='v = [4, 2]', width=6)
    fig.vector(tx, ty, 0, 0, 1, 0, color=P['extra'], width=5, label=None)
    fig.vector(tx, ty, 0, 0, 0, 1, color=P['extra'], width=5, label=None)
    fig.text(tx(0.5), ty(0) + 64, 'e₁', 30, color=P['extra'], bold=True)
    fig.text(tx(0) - 40, ty(0.62), 'e₂', 30, color=P['extra'], bold=True)
    boxed_text(fig, 1340, 240, ['v = 4e₁ + 2e₂', '= [4, 2]'], 32)
    save(fig, 'r1-6-1-vektor-komponentform.svg')


def r1_6_1_addisjon():
    fig = Fig('r1')
    P = fig.p
    tx, ty = vcoords(fig, -0.8, 5.5, -0.6, 4.7, box=(190, 120, 1060, 790))
    # parallellogram stiplet
    fig.poly([(tx(3), ty(1)), (tx(4), ty(4))], stroke=P['extra'], width=3, dash='10 8')
    fig.poly([(tx(1), ty(3)), (tx(4), ty(4))], stroke=P['main'], width=3, dash='10 8')
    fig.vector(tx, ty, 0, 0, 3, 1, color=P['main'], label='a', width=6, lab_off=(16, 30))
    fig.vector(tx, ty, 0, 0, 1, 3, color=P['extra'], label='b', width=6, lab_off=(-38, -6))
    fig.vector(tx, ty, 0, 0, 4, 4, color=P['accent'], label='a + b = [4, 4]', width=6)
    fig.text(W / 2, 850, '[3, 1] + [1, 3] = [4, 4]', 36, color=P['accent'], bold=True)
    # innfelt halespiss
    bx0, by0, bw, bh = 1130, 130, 400, 330
    fig.rect(bx0, by0, bw, bh, stroke=P['grid'], width=2.5, rx=12)
    s = 62
    ox, oy = bx0 + 50, by0 + bh - 50
    fig.arrow(ox, oy, ox + 3 * s, oy - 1 * s, P['main'], 4.5, head=14)
    fig.arrow(ox + 3 * s, oy - 1 * s, ox + 4 * s, oy - 4 * s, P['extra'], 4.5, head=14)
    fig.arrow(ox, oy, ox + 4 * s, oy - 4 * s, P['accent'], 4.5, head=14)
    fig.text(bx0 + bw / 2, by0 + bh + 40, 'halespiss-metoden', 28, color=P['extra'])
    save(fig, 'r1-6-1-vektoraddisjon.svg')


def r1_6_1_skalar():
    fig = Fig('r1')
    P = fig.p
    fig.title('Skalar multiplikasjon av v = [2, 1]')
    ox, oy = 660, 540
    base = 110  # px per enhet
    ux, uy = 2 / math.sqrt(5), 1 / math.sqrt(5)
    # lysende hjelpelinje gjennom alle pilene
    fig.line(ox - 1.6 * base * 2 * ux, oy + 1.6 * base * 2 * uy,
             ox + 2.6 * base * 2 * ux, oy - 2.6 * base * 2 * uy, P['grid'], 2.5)
    # forskyv hver pil litt normalt pa retningen sa de ikke ligger oppa hverandre
    nx, ny = -uy, -ux  # normal (skjermkoord)
    for i, (lab, color, t) in enumerate([('v', P['main'], 1.0), ('2v', P['accent'], 2.0),
                                         ('½v', P['extra'], 0.5), ('−v', P['warn'], -1.0)]):
        sh = (i - 1.5) * 36
        px, py = ox + sh * nx, oy + sh * ny
        ex, ey = px + t * 2 * base, py - t * 1 * base
        fig.arrow(px, py, ex, ey, color, 5.5, head=16)
        fig.text(ex + (26 if t > 0 else -26), ey - 14, lab, 32, color=color, bold=True,
                 anchor='start' if t > 0 else 'end')
    fig.text(W / 2, 830, 'tv er parallell med v — negativ t snur retningen', 34, color=P['text'], bold=True)
    save(fig, 'r1-6-1-skalar-multiplikasjon.svg')


def r1_6_1_subtraksjon():
    fig = Fig('r1')
    P = fig.p
    tx, ty = vcoords(fig, -0.8, 5.2, -1.2, 3.8, box=(190, 120, 1100, 790))
    fig.vector(tx, ty, 0, 0, 4, 1, color=P['main'], label='a', width=6, lab_off=(20, 10))
    fig.vector(tx, ty, 0, 0, 1, 3, color=P['extra'], label='b', width=6, lab_off=(-30, -12))
    fig.vector(tx, ty, 1, 3, 3, -2, color=P['accent'], label='a − b', width=6, lab_off=(-50, -34))
    boxed_text(fig, 1330, 230, ['a − b = [3, −2]'], 32)
    fig.text(1330, 380, 'fra spissen av b', 29, color=P['accent'])
    fig.text(1330, 424, 'til spissen av a', 29, color=P['accent'])
    save(fig, 'r1-6-1-vektorsubtraksjon.svg')


def r1_6_2_skalarprodukt():
    fig = Fig('r1')
    P = fig.p
    tx, ty = vcoords(fig, -0.8, 5.0, -0.8, 3.2, box=(190, 150, 1080, 790))
    fig.vector(tx, ty, 0, 0, 4, 0, color=P['main'], label='a = [4, 0]', width=6, lab_off=(-14, -22))
    fig.vector(tx, ty, 0, 0, 2, 2, color=P['extra'], label='b = [2, 2]', width=6)
    angle_arc(fig, tx(0), ty(0), 90, 0, 45, P['accent'], 3.5, label='θ = 45°', lab_r=150)
    boxed_text(fig, 1310, 280, ['a · b = 8', 'cos θ = √2/2 ⇒ θ = 45°'], 30)
    save(fig, 'r1-6-2-skalarprodukt-vinkel.svg')


def r1_6_2_ortogonale():
    fig = Fig('r1')
    P = fig.p
    tx, ty = vcoords(fig, -2.2, 3.2, -0.8, 3.0, box=(190, 150, 1080, 790))
    fig.vector(tx, ty, 0, 0, 2, 1, color=P['main'], label='a = [2, 1]', width=6)
    fig.vector(tx, ty, 0, 0, -1, 2, color=P['extra'], label='b = [−1, 2]', width=6, lab_off=(-220, -16))
    # kvadratsymbol i vinkelen
    ua = (tx(2) - tx(0), ty(1) - ty(0))
    la = math.hypot(*ua); ua = (ua[0] / la, ua[1] / la)
    ub = (tx(-1) - tx(0), ty(2) - ty(0))
    lb = math.hypot(*ub); ub = (ub[0] / lb, ub[1] / lb)
    right_angle_mark(fig, tx(0), ty(0), ua[0], ua[1], ub[0], ub[1], 26, P['accent'])
    boxed_text(fig, 1290, 260, ['a · b = 2 · (−1) + 1 · 2 = 0'], 30)
    fig.text(1290, 400, 'skalarprodukt 0 ⟺ ortogonale', 30, color=P['accent'], bold=True)
    save(fig, 'r1-6-2-ortogonale-vektorer.svg')


def r1_6_2_projeksjon():
    fig = Fig('r1')
    P = fig.p
    ox, oy = 300, 640
    bvec = (1.0, 0.0)
    avec = (math.cos(math.radians(38)), math.sin(math.radians(38)))
    La, Lb = 560, 820
    ax_, ay_ = ox + La * avec[0], oy - La * avec[1]
    proj = La * avec[0]  # lengde langs b
    fig.line(ox - 40, oy, ox + Lb + 60, oy, fig.p['grid'], 2.5)
    fig.arrow(ox, oy, ox + Lb, oy, P['extra'], 5.5, head=16)
    fig.text(ox + Lb - 10, oy + 44, 'b', 34, color=P['extra'], bold=True, italic=True)
    fig.arrow(ox, oy, ax_, ay_, P['main'], 5.5, head=16)
    fig.text(ax_ + 18, ay_ - 14, 'a', 34, color=P['main'], bold=True, italic=True)
    fig.line(ax_, ay_, ox + proj, oy, '#FFFFFF', 3, dash='10 9')
    right_angle_mark(fig, ox + proj, oy, -1, 0, 0, -1, 24, '#FFFFFF')
    fig.arrow(ox, oy + 0, ox + proj, oy, P['accent'], 7, head=18)
    fig.text(ox + proj / 2, oy + 52, 'projeksjonen av a på b', 30, color=P['accent'], bold=True)
    boxed_text(fig, 1180, 250, ['proj = (a · b/|b|²) · b'], 32)
    fig.text(1180, 390, '«skyggen av a langs b»', 30, color=P['extra'])
    save(fig, 'r1-6-2-projeksjon.svg')


def r1_6_3_param_linje():
    fig = Fig('r1')
    P = fig.p
    tx, ty = vcoords(fig, -3.5, 5.5, -0.8, 4.2, box=(190, 130, 1410, 770))
    # linjen gjennom (1,2) med retning [3,1]
    f = lambda x: 2 + (x - 1) / 3
    fig.plot(f, color=P['accent'], width=5)
    for t, x, y in [(-1, -2, 1), (0, 1, 2), (1, 4, 3)]:
        fig.circle(tx(x), ty(y), 10, fill=P['extra'])
        fig.text(tx(x) + 4, ty(y) + 56, f't = {fmt(t)}', 29, color=P['extra'], bold=True)
    fig.circle(tx(1), ty(2), 20, stroke=P['main'], width=5)
    fig.text(tx(1) - 26, ty(2) - 30, 'r₀', 32, color=P['main'], bold=True, anchor='end')
    fig.vector(tx, ty, 1, 2, 3, 1, color=P['main'], label='[3, 1]', width=6, lab_off=(-130, -40))
    fig.text(440, 200, 'x = 1 + 3t,  y = 2 + t', 34, color=P['accent'], bold=True)
    fig.text(W / 2, 850, 'punktet vandrer langs linjen når t endres', 32, color=P['text'])
    save(fig, 'r1-6-3-parameterframstilling-linje.svg')


def r1_6_3_param_sirkel():
    fig = Fig('r1')
    P = fig.p
    cx, cy, r = 560, 470, 300
    fig.arrow(cx - r - 90, cy, cx + r + 100, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 70, cx, cy - r - 80, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    for t, lab, deg in [(0, 't = 0', 0), (1, 't = π/2', 90), (2, 't = π', 180)]:
        a = math.radians(deg)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.circle(x, y, 11, fill=P['extra'])
    fig.text(cx + r + 24, cy + 50, 't = 0', 30, color=P['extra'], bold=True, anchor='start')
    fig.text(cx + 24, cy - r - 30, 't = π/2', 30, color=P['extra'], bold=True, anchor='start')
    fig.text(cx - r - 20, cy + 50, 't = π', 30, color=P['extra'], bold=True, anchor='end')
    # radius i forste kvadrant + vinkel
    a = math.radians(50)
    fig.line(cx, cy, cx + r * math.cos(a), cy - r * math.sin(a), P['main'], 4.5)
    fig.circle(cx + r * math.cos(a), cy - r * math.sin(a), 9, fill=P['main'])
    angle_arc(fig, cx, cy, 70, 0, 50, P['main'], 3, label='t', lab_r=105)
    # bevegelsespil mot klokka ved ~70 grader
    aa = math.radians(70)
    hx, hy = cx + r * math.cos(aa), cy - r * math.sin(aa)
    tangent = (-math.sin(aa), -math.cos(aa))
    fig.arrow(hx - tangent[0] * 60, hy - tangent[1] * 60, hx, hy, P['extra'], 4, head=14)
    fig.text(1230, 200, 'x = 3 cos t', 34, color=P['accent'], bold=True)
    fig.text(1230, 252, 'y = 3 sin t', 34, color=P['accent'], bold=True)
    boxed_text(fig, 1230, 400, ['x² + y² = 9'], 32)
    save(fig, 'r1-6-3-parameterframstilling-sirkel.svg')


def r1_6_4_avstand():
    fig = Fig('r1')
    P = fig.p
    # linje y = 0.5x + 1 i piksler; punkt P over
    tx, ty = fig.coords(-1, 9, -1, 6, box=(160, 120, 1180, 790), grid=False, xticks=[], yticks=[])
    f = lambda x: 0.5 * x + 0.5
    fig.plot(f, color=P['accent'], width=5)
    px, py = 3.0, 4.5
    fig.circle(tx(px), ty(py), 12, fill=P['main'])
    fig.text(tx(px), ty(py) - 30, 'P', 34, color=P['main'], bold=True)
    # fotpunkt: projeksjon av P pa linjen
    # linje: y=0.5x+0.5 -> retning (1,0.5)/|..|
    d = (1, 0.5)
    t = ((px - 0) * d[0] + (py - 0.5) * d[1]) / (d[0] ** 2 + d[1] ** 2)
    fx, fy = t * d[0], 0.5 + t * d[1]
    for q, em in [(t - 2.2, False), (t, True), (t + 2.2, False)]:
        qx, qy = q * d[0], 0.5 + q * d[1]
        if em:
            fig.line(tx(px), ty(py), tx(qx), ty(qy), P['extra'], 5, dash='12 9')
        else:
            fig.line(tx(px), ty(py), tx(qx), ty(qy), P['extra'], 2.5, dash='8 8', opacity=0.6)
    # kvadratsymbol i fotpunktet
    ud = math.hypot(tx(1) - tx(0), ty(0.5) - ty(0))
    ux, uy = (tx(1) - tx(0)) / ud, (ty(0.5) - ty(0)) / ud
    nx, ny = (tx(px) - tx(fx)), (ty(py) - ty(fy))
    nd = math.hypot(nx, ny); nx, ny = nx / nd, ny / nd
    right_angle_mark(fig, tx(fx), ty(fy), ux, uy, nx, ny, 24, P['accent'])
    fig.text((tx(px) + tx(fx)) / 2 + 30, (ty(py) + ty(fy)) / 2 + 10, 'korteste avstand', 30, color=P['extra'], bold=True, anchor='start')
    boxed_text(fig, 1240, 660, ['d = |ax₁ + by₁ + c| / √(a² + b²)'], 29)
    save(fig, 'r1-6-4-avstand-punkt-linje.svg')


def r1_6_5_sirkel_tangent():
    fig = Fig('r1')
    P = fig.p
    fig.text(W / 2, 80, '(x − 2)² + (y − 1)² = 9', 40, color=P['accent'], bold=True)
    # lik skala: 86 px per enhet
    s = 86
    cx, cy = 560, 470  # senter S(2,1) i piksler
    ox, oy = cx - 2 * s, cy + 1 * s  # origo
    fig.arrow(ox - 60, oy, cx + 4.2 * s, oy, P['text'], 3)
    fig.arrow(ox, cy + 3.6 * s, ox, cy - 4.0 * s, P['text'], 3)
    fig.text(cx + 4.2 * s, oy - 16, 'x', 28, anchor='end', italic=True)
    fig.text(ox + 16, cy - 4.0 * s + 8, 'y', 28, anchor='start', italic=True)
    fig.circle(cx, cy, 3 * s, stroke=P['accent'], width=5)
    fig.circle(cx, cy, 9, fill=P['accent'])
    fig.text(cx - 18, cy + 46, 'S(2, 1)', 30, bold=True, anchor='end')
    # radius til tangeringspunkt ved 40 grader
    a = math.radians(40)
    txp, typ = cx + 3 * s * math.cos(a), cy - 3 * s * math.sin(a)
    fig.line(cx, cy, txp, typ, P['main'], 4.5)
    fig.text((cx + txp) / 2 + 14, (cy + typ) / 2 + 40, 'r = 3', 32, color=P['main'], bold=True, anchor='start')
    fig.circle(txp, typ, 9, fill=P['main'])
    # tangentlinje vinkelrett pa radius
    tdx, tdy = -math.sin(a), -math.cos(a)
    fig.line(txp - 430 * tdx, typ - 430 * tdy, txp + 430 * tdx, typ + 430 * tdy, P['extra'], 4.5)
    right_angle_mark(fig, txp, typ, -math.cos(a), math.sin(a), tdx, tdy, 24, P['extra'])
    fig.text(1190, 720, 'tangenten står vinkelrett på radien', 32, color=P['extra'], bold=True)
    save(fig, 'r1-6-5-sirkellikning-tangent.svg')


def r1_6_6_kraftvektorer():
    fig = Fig('r1')
    P = fig.p
    fig.title('Fly med sidevind')
    ox, oy = 280, 640
    s = 4.6  # px per km/t
    fx = 200 * s
    fy = 50 * s
    # rektangel stiplet
    fig.line(ox + fx, oy, ox + fx, oy - fy, P['grid'], 3, dash='10 8')
    fig.line(ox, oy - fy, ox + fx, oy - fy, P['grid'], 3, dash='10 8')
    fig.arrow(ox, oy, ox + fx, oy, P['main'], 6, head=18)
    fig.text(ox + fx / 2, oy + 48, '200 km/t', 32, color=P['main'], bold=True)
    fig.arrow(ox, oy, ox, oy - fy, P['extra'], 6, head=18)
    fig.text(ox - 24, oy - fy / 2 + 10, '50 km/t', 32, color=P['extra'], bold=True, anchor='end')
    fig.arrow(ox, oy, ox + fx, oy - fy, P['accent'], 6, head=18)
    fig.text(ox + fx - 40, oy - fy - 28, '≈ 206 km/t', 34, color=P['accent'], bold=True, anchor='end')
    ang = math.degrees(math.atan2(50, 200))
    angle_arc(fig, ox, oy, 180, 0, ang, P['warn'], 3.5)
    fig.text(ox + 250, oy - 44, '≈ 14°', 30, color=P['warn'], bold=True, anchor='start')
    fig.text(W / 2, 830, 'resultant = flyfart + vind', 32, color=P['text'])
    save(fig, 'r1-6-6-kraftvektorer-fly.svg')


# =====================================================================
# Kapittel 7: Trigonometri
# =====================================================================

def r1_7_1_enhetssirkel_def():
    fig = Fig('r1')
    P = fig.p
    cx, cy, r = 560, 480, 330
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    a = math.radians(60)
    px, py = cx + r * math.cos(a), cy - r * math.sin(a)
    fig.line(cx, cy, px, py, P['main'], 5)
    fig.line(px, py, px, cy, P['extra'], 3.5, dash='10 8')
    fig.circle(px, py, 11, fill=P['main'])
    fig.text(px + 20, py - 20, '(1/2, √3/2)', 32, color=P['main'], bold=True, anchor='start')
    angle_arc(fig, cx, cy, 80, 0, 60, P['accent'], 3.5, label='60°', lab_r=125)
    fig.text((cx + px) / 2, cy + 44, 'cos 60° = 1/2', 30, color=P['extra'], bold=True)
    fig.text(px + 20, (py + cy) / 2 + 10, 'sin 60° = √3/2', 30, color=P['extra'], bold=True, anchor='start')
    fig.text(1250, 200, 'radius 1', 32, color=P['accent'], bold=True)
    save(fig, 'r1-7-1-enhetssirkel-definisjon.svg')


def r1_7_1_standardvinkler():
    fig = Fig('r1')
    P = fig.p
    cx, cy, r = 660, 470, 340
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    degs = sorted(set(list(range(0, 360, 30)) + list(range(45, 360, 90))))
    for d in degs:
        a = math.radians(d)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.line(cx, cy, x, y, P['main'], 1.8, opacity=0.55)
        marked = d in (30, 45, 60, 0, 90)
        col = P['extra'] if d in (30, 45, 60) else (P['accent'] if d in (0, 90) else P['main'])
        fig.circle(x, y, 9 if marked else 7, fill=col)
    lab = [(30, '(√3/2, 1/2)', P['extra']), (45, '(√2/2, √2/2)', P['extra']), (60, '(1/2, √3/2)', P['extra'])]
    for d, t, c in lab:
        a = math.radians(d)
        fig.text(cx + (r + 30) * math.cos(a), cy - (r + 30) * math.sin(a) + 6, t, 29, color=c, bold=True, anchor='start')
    fig.text(cx + r + 26, cy + 46, '(1, 0)', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(cx + 26, cy - r - 28, '(0, 1)', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(1400, 760, 'hver 30° og 45°', 30, color=P['main'], anchor='end')
    save(fig, 'r1-7-1-enhetssirkel-standardvinkler.svg')


def r1_7_1_radianer():
    fig = Fig('r1')
    P = fig.p
    cx, cy, r = 480, 480, 320
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    fig.line(cx, cy, cx + r, cy, P['main'], 5)
    fig.text(cx + r / 2, cy + 44, 'r', 34, color=P['main'], bold=True, italic=True)
    # bue med lengde r => vinkel 1 rad
    angle_arc(fig, cx, cy, r, 0, math.degrees(1), P['extra'], 7)
    am = 0.5
    fig.text(cx + (r + 46) * math.cos(am), cy - (r + 46) * math.sin(am), 'bue = r', 32, color=P['extra'], bold=True, anchor='start')
    fig.line(cx, cy, cx + r * math.cos(1), cy - r * math.sin(1), P['main'], 5)
    angle_arc(fig, cx, cy, 86, 0, math.degrees(1), P['accent'], 3.5)
    fig.text(cx + 150 * math.cos(0.5), cy - 150 * math.sin(0.5) + 8, '1 rad ≈ 57,3°', 30, color=P['accent'], bold=True, anchor='start')
    # tabell
    bx, by = 1230, 330
    rows = ['π rad = 180°', 'π/2 rad = 90°', '2π rad = 360°']
    boxed_text(fig, bx, by + 60, rows, 32, color=P['main'])
    save(fig, 'r1-7-1-radianer-definisjon.svg')


def r1_7_1_pytagoreisk():
    fig = Fig('r1')
    P = fig.p
    cx, cy, r = 520, 500, 330
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 50, cx, cy - r - 60, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    a = math.radians(50)
    px, py = cx + r * math.cos(a), cy - r * math.sin(a)
    fig.poly([(cx, cy), (px, cy), (px, py)], stroke=P['extra'], width=4, close=False)
    fig.line(cx, cy, px, py, P['main'], 5)
    fig.circle(px, py, 10, fill=P['main'])
    right_angle_mark(fig, px, cy, -1, 0, 0, -1, 22, P['extra'])
    fig.text((cx + px) / 2 - 10, py / 2 + cy / 2 - 20, '1', 34, color=P['main'], bold=True)
    fig.text((cx + px) / 2, cy + 46, 'cos v', 32, color=P['extra'], bold=True)
    fig.text(px + 22, (cy + py) / 2 + 10, 'sin v', 32, color=P['extra'], bold=True, anchor='start')
    boxed_text(fig, 1230, 330, ['sin²v + cos²v = 1'], 36)
    fig.text(1230, 460, 'Pytagoras i enhetssirkelen', 30, color=P['accent'])
    save(fig, 'r1-7-1-pytagoreisk-identitet.svg')


def r1_7_2_sinusgraf():
    fig = Fig('r1')
    P = fig.p
    f = lambda x: 2 * math.sin(2 * x) + 1
    tx, ty = fig.coords(0, 2 * PI + 0.3, -2.0, 3.8, box=(190, 110, 1410, 740), grid=False,
                        xticks=[], yticks=[-1, 1, 3], xlabel='x', ylabel='y')
    fig.line(tx(0), ty(1), tx(2 * PI + 0.2), ty(1), P['accent'], 3, dash='14 12')
    fig.text(tx(2 * PI + 0.2), ty(1) - 16, 'y = 1', 28, color=P['accent'], anchor='end')
    fig.plot(f, xmax=2 * PI, color=P['main'], width=5)
    for xv, lab in [(PI, 'π'), (2 * PI, '2π')]:
        fig.line(tx(xv), ty(0) - 10, tx(xv), ty(0) + 10, P['text'], 3)
        fig.text(tx(xv), ty(0) + 44, lab, 30)
    # amplitude
    xa = PI / 4
    dbl_arrow(fig, tx(xa), ty(1), tx(xa), ty(3), P['extra'], 4)
    fig.text(tx(xa) + 20, ty(2) + 10, 'amplitude 2', 30, color=P['extra'], bold=True, anchor='start')
    # periode mellom topper x=pi/4 og x=pi/4+pi
    yt = ty(3.45)
    dbl_arrow(fig, tx(PI / 4), yt, tx(PI / 4 + PI), yt, P['extra'], 4)
    fig.text(tx(PI / 4 + PI / 2), yt - 18, 'periode π', 30, color=P['extra'], bold=True)
    fig.text(420, 840, 'y = 2 sin(2x) + 1', 36, color=P['main'], bold=True)
    save(fig, 'r1-7-2-sinusgraf-parametre.svg')


def r1_7_3_sinuslikning_sirkel():
    fig = Fig('r1')
    P = fig.p
    cx, cy, r = 560, 470, 320
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    yline = cy - r * 0.5
    fig.line(cx - r - 60, yline, cx + r + 70, yline, P['accent'], 3, dash='12 10')
    fig.text(cx + r + 76, yline + 10, 'y = 1/2', 30, color=P['accent'], anchor='start', bold=True)
    for d, lab in [(30, '30° (π/6)'), (150, '150° (5π/6)')]:
        a = math.radians(d)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.line(cx, cy, x, y, P['main'], 4.5)
        fig.circle(x, y, 11, fill=P['main'])
        fig.text(x + (20 if d == 30 else -20), y - 26, lab, 30, color=P['main'], bold=True,
                 anchor='start' if d == 30 else 'end')
    fig.line(cx, cy - r - 40, cx, cy + 40, P['extra'], 3, dash='8 8')
    fig.text(W / 2, 850, 'x = π/6 + n · 2π  eller  x = 5π/6 + n · 2π', 36, color=P['text'], bold=True)
    fig.text(1250, 250, 'sin x = 1/2', 38, color=P['accent'], bold=True)
    save(fig, 'r1-7-3-sinuslikning-enhetssirkel.svg')


def r1_7_3_sinuslikning_graf():
    fig = Fig('r1')
    P = fig.p
    tx, ty = fig.coords(0, 4 * PI + 0.4, -1.5, 1.6, box=(170, 150, 1430, 700), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(math.sin, xmax=4 * PI, color=P['main'], width=5)
    fig.line(tx(0), ty(0.5), tx(4 * PI + 0.3), ty(0.5), P['accent'], 3.5)
    fig.text(tx(0.1), ty(0.5) - 18, 'y = 1/2', 28, color=P['accent'], anchor='start', bold=True)
    sols = [(PI / 6, 'π/6'), (5 * PI / 6, '5π/6'), (13 * PI / 6, '13π/6'), (17 * PI / 6, '17π/6')]
    for xv, lab in sols:
        fig.circle(tx(xv), ty(0.5), 11, fill=P['extra'])
        fig.line(tx(xv), ty(0.5), tx(xv), ty(0), P['extra'], 2, dash='6 7', opacity=0.7)
        fig.text(tx(xv), ty(0) + 44, lab, 29, color=P['extra'], bold=True)
    yt = ty(1.35)
    dbl_arrow(fig, tx(PI / 6), yt, tx(13 * PI / 6), yt, P['accent'], 4)
    fig.text(tx(PI / 6 + PI), yt - 18, '+ 2π', 32, color=P['accent'], bold=True)
    fig.text(W / 2, 830, 'mønsteret gjentar seg med periode 2π', 32, color=P['text'])
    save(fig, 'r1-7-3-sinuslikning-graf.svg')


def r1_7_5_derivert_sin():
    fig = Fig('r1')
    P = fig.p
    pts = [0.0, PI / 2, PI]
    tx, ty = fig.coords(0, 2 * PI + 0.3, -1.6, 1.6, box=(170, 90, 1430, 380), grid=False,
                        xticks=[], yticks=[], ylabel='sin x')
    fig.plot(math.sin, xmax=2 * PI, color=P['main'], width=5)
    txs = []
    for x0 in pts:
        s = math.cos(x0)
        dx = 0.45
        fig.line(tx(x0 - dx), ty(math.sin(x0) - s * dx), tx(x0 + dx), ty(math.sin(x0) + s * dx), P['accent'], 5)
        fig.circle(tx(x0), ty(math.sin(x0)), 8, fill=P['accent'])
        txs.append(tx(x0))
    tx2, ty2 = fig.coords(0, 2 * PI + 0.3, -1.6, 1.6, box=(170, 520, 1430, 810), grid=False,
                          xticks=[], yticks=[], ylabel='cos x')
    fig.plot(math.cos, xmax=2 * PI, color=P['extra'], width=5)
    for x0 in pts:
        fig.circle(tx2(x0), ty2(math.cos(x0)), 9, fill=P['accent'])
        fig.line(tx(x0), ty(math.sin(x0)), tx2(x0), ty2(math.cos(x0)), P['text'], 2, dash='8 9', opacity=0.55)
    for x0, lab in zip(pts, ['1', '0', '−1']):
        fig.text(tx2(x0) + 22, ty2(math.cos(x0)) + 8, lab, 28, color=P['accent'], bold=True, anchor='start')
    fig.text(W / 2, 463, '(sin x)′ = cos x', 38, color=P['accent'], bold=True)
    save(fig, 'r1-7-5-derivert-sinus-cosinus.svg')


def r1_7_6_sinussetningen():
    fig = Fig('r1')
    P = fig.p
    cx, cy, R = 620, 470, 320
    fig.circle(cx, cy, R, stroke=P['accent'], width=5)
    fig.circle(cx, cy, 7, fill=P['accent'])
    angs = [110, 215, 335]
    V = [(cx + R * math.cos(math.radians(a)), cy - R * math.sin(math.radians(a))) for a in angs]
    fig.poly(V, stroke=P['main'], width=5, close=True)
    names = ['A', 'B', 'C']
    offs = [(0, -26), (-30, 34), (32, 34)]
    for (x, y), n, (dx, dy) in zip(V, names, offs):
        fig.circle(x, y, 9, fill=P['main'])
        fig.text(x + dx, y + dy, n, 34, color=P['main'], bold=True)
    # sider: a motstaende A osv.
    mids = [((V[1][0] + V[2][0]) / 2, (V[1][1] + V[2][1]) / 2),
            ((V[0][0] + V[2][0]) / 2, (V[0][1] + V[2][1]) / 2),
            ((V[0][0] + V[1][0]) / 2, (V[0][1] + V[1][1]) / 2)]
    for (mx, my), lab in zip(mids, ['a', 'b', 'c']):
        # skyv etikett litt utover fra sentrum
        dxn, dyn = mx - cx, my - cy
        dn = math.hypot(dxn, dyn) or 1
        fig.text(mx + 34 * dxn / dn, my + 34 * dyn / dn + 10, lab, 32, color=P['main'], bold=True, italic=True)
    # radius
    a = math.radians(30)
    fig.line(cx, cy, cx + R * math.cos(a), cy - R * math.sin(a), P['extra'], 4)
    fig.text(cx + 0.62 * R * math.cos(a), cy - 0.62 * R * math.sin(a) + 34, 'R', 32, color=P['extra'], bold=True, italic=True)
    boxed_text(fig, 1240, 700, ['a/sin A = b/sin B = c/sin C = 2R'], 30)
    fig.text(1240, 200, 'omskrevet sirkel', 32, color=P['accent'], bold=True)
    save(fig, 'r1-7-6-sinussetningen-omskrevet.svg')


def r1_7_6_cosinussetningen():
    fig = Fig('r1')
    P = fig.p
    # A i origo, vinkel 60, b=5 og c=7
    s = 105
    Ax, Ay = 260, 700
    Bx, By = Ax + 7 * s, Ay               # AB = c = 7
    Cx, Cy = Ax + 5 * s * math.cos(math.radians(60)), Ay - 5 * s * math.sin(math.radians(60))  # AC = b = 5
    fig.poly([(Ax, Ay), (Bx, By), (Cx, Cy)], stroke=P['main'], width=5, close=True)
    angle_arc(fig, Ax, Ay, 80, 0, 60, P['accent'], 3.5, label='60°', lab_r=130)
    fig.text(Ax - 30, Ay + 14, 'A', 34, bold=True)
    fig.text((Ax + Cx) / 2 - 34, (Ay + Cy) / 2 - 6, 'b = 5', 32, color=P['main'], bold=True, anchor='end')
    fig.text((Ax + Bx) / 2, Ay + 50, 'c = 7', 32, color=P['main'], bold=True)
    fig.text((Bx + Cx) / 2 + 34, (By + Cy) / 2 - 6, 'a = ?', 34, color=P['extra'], bold=True, anchor='start')
    boxed_text(fig, 1190, 240, ['a² = 5² + 7² − 2 · 5 · 7 · cos 60° = 39', 'a = √39 ≈ 6,2'], 30)
    save(fig, 'r1-7-6-cosinussetningen.svg')


# =====================================================================
# Kapittel 8: Sannsynlighet og kombinatorikk
# =====================================================================

def r1_8_1_valgtre():
    fig = Fig('r1')
    P = fig.p
    fig.title('Multiplikasjonsprinsippet')
    rx, ry = 200, 450
    fig.circle(rx, ry, 14, fill=P['text'])
    mains = [('kjøtt', 190), ('fisk', 450), ('vegetar', 710)]
    desserts = ['is', 'kake']
    leafx = 1280
    midx = 760
    for lab, my in mains:
        fig.line(rx, ry, midx, my, P['main'], 4)
        fig.circle(midx, my, 12, fill=P['main'])
        fig.text(midx - 20, my - 28, lab, 30, color=P['main'], bold=True)
        for j, d in enumerate(desserts):
            ly = my + (j * 2 - 1) * 55
            fig.line(midx, my, leafx, ly, P['extra'], 3.5)
            fig.circle(leafx, ly, 11, fill=P['accent'])
            fig.text(leafx - 60, ly + (-14 if j == 0 else 36), d, 28, color=P['extra'], bold=True)
    fig.text(W / 2, 840, '3 · 2 = 6 ulike måltider', 38, color=P['accent'], bold=True)
    save(fig, 'r1-8-1-valgtre.svg')


def r1_8_2_pascal():
    fig = Fig('r1')
    P = fig.p
    fig.title('Pascals trekant')
    rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    cy0, dy, dx, R = 180, 140, 130, 44
    pos = {}
    for i, row in enumerate(rows):
        for j, v in enumerate(row):
            x = W / 2 + (j - i / 2) * dx
            y = cy0 + i * dy
            pos[(i, j)] = (x, y)
            hl = (i == 4 and j == 2)
            col = P['accent'] if hl else P['extra']
            fig.circle(x, y, R, stroke=col, width=5 if hl else 3.5)
            fig.text(x, y + 12, str(v), 34, color=col, bold=True)
    # piler fra de to 3-tallene til 6
    for j in (1, 2):
        x1, y1 = pos[(3, j)]
        x2, y2 = pos[(4, 2)]
        ang = math.atan2(y2 - y1, x2 - x1)
        fig.arrow(x1 + R * math.cos(ang), y1 + R * math.sin(ang),
                  x2 - (R + 8) * math.cos(ang), y2 - (R + 8) * math.sin(ang), P['main'], 4)
    fig.text(W / 2 + 420, cy0 + 3.5 * dy, 'hvert tall er summen', 30, color=P['main'], anchor='start', bold=True)
    fig.text(W / 2 + 420, cy0 + 3.5 * dy + 42, 'av de to over', 30, color=P['main'], anchor='start', bold=True)
    save(fig, 'r1-8-2-pascals-trekant.svg')


def r1_8_3_venn():
    fig = Fig('r1')
    P = fig.p
    fig.rect(220, 120, 1160, 560, stroke=P['text'], width=3, rx=14)
    fig.text(260, 170, 'S', 34, bold=True)
    ax, bx, cy, r = 640, 960, 400, 230
    # snitt fylt gull (klipp via to halvmaaner: tegn snittet som path-intersection er vanskelig; bruk linse)
    # linse: skjaeringspunkter
    d = bx - ax
    xm = (ax + bx) / 2
    yh = math.sqrt(r * r - (d / 2) ** 2)
    p1 = (xm, cy - yh)
    p2 = (xm, cy + yh)
    # bue fra p1 til p2 pa sirkel A (hoyre del) og tilbake pa sirkel B
    fig.raw(f'<path d="M {p1[0]:.1f},{p1[1]:.1f} A {r},{r} 0 0 1 {p2[0]:.1f},{p2[1]:.1f} A {r},{r} 0 0 1 {p1[0]:.1f},{p1[1]:.1f} Z" fill="{P["accent"]}" opacity="0.55"/>')
    fig.circle(ax, cy, r, stroke=P['main'], width=5)
    fig.circle(bx, cy, r, stroke=P['extra'], width=5)
    fig.text(ax - r / 2 - 30, cy + 12, 'A', 40, color=P['main'], bold=True)
    fig.text(bx + r / 2 + 30, cy + 12, 'B', 40, color=P['extra'], bold=True)
    fig.text(xm, cy + 12, 'A ∩ B', 32, color=P['accent'], bold=True)
    fig.text(W / 2, 770, 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 40, color=P['text'], bold=True)
    fig.text(W / 2, 835, 'snittet telles dobbelt', 30, color=P['accent'])
    save(fig, 'r1-8-3-addisjonssetningen-venn.svg')


def r1_8_4_betinget_tre():
    fig = Fig('r1')
    P = fig.p
    rx, ry = 170, 430
    fig.circle(rx, ry, 13, fill=P['text'])
    lvl1 = [('R', '0,3', 230), ('ikke R', '0,7', 640)]
    cond = {('R', 'F'): '0,6', ('R', 'ikke F'): '0,4', ('ikke R', 'F'): '0,1', ('ikke R', 'ikke F'): '0,9'}
    midx, leafx = 700, 1230
    for lab, p, my in lvl1:
        fig.line(rx, ry, midx, my, P['main'], 4.5)
        fig.circle(midx, my, 12, fill=P['main'])
        fig.text(midx - 30, my - 28, f'{lab}: {p}', 30, color=P['main'], bold=True)
        for j, sub in enumerate(['F', 'ikke F']):
            ly = my + (j * 2 - 1) * 95
            gold = sub == 'F'
            fig.line(midx, my, leafx, ly, P['accent'] if gold else P['extra'], 5 if gold else 3.5)
            fig.circle(leafx, ly, 11, fill=P['accent'] if gold else P['extra'])
            fig.text(leafx + 26, ly + 10, f'{sub}: {cond[(lab, sub)]}', 29,
                     color=P['accent'] if gold else P['extra'], bold=True, anchor='start')
    fig.text(W / 2, 840, 'P(F) = 0,3 · 0,6 + 0,7 · 0,1 = 0,25', 38, color=P['accent'], bold=True)
    save(fig, 'r1-8-4-betinget-tre-totalsetning.svg')


def r1_8_5_binomisk():
    fig = Fig('r1')
    P = fig.p
    n, p = 8, 0.3
    probs = [math.comb(n, k) * p ** k * (1 - p) ** (n - k) for k in range(n + 1)]
    x0, y0, w, h = 230, 140, 1100, 560
    vmax = max(probs) * 1.12
    bw = w / (n + 1) * 0.66
    gap = w / (n + 1)
    Ex = n * p
    for k, pr in enumerate(probs):
        bx = x0 + k * gap + (gap - bw) / 2
        bh = pr / vmax * h
        col = P['accent'] if k == 2 else P['main']
        fig.rect(bx, y0 + h - bh, bw, bh, fill=col, opacity=0.92)
        fig.text(bx + bw / 2, y0 + h + 42, str(k), 28)
    fig.line(x0, y0 + h, x0 + w, y0 + h, P['text'], 3)
    ex_px = x0 + Ex * gap + gap / 2  # E(X)=2.4 ligger mellom k=2 og k=3
    fig.line(ex_px, y0 - 10, ex_px, y0 + h, P['extra'], 3.5, dash='12 10')
    fig.text(ex_px + 16, y0 + 30, 'E(X) = 2,4', 30, color=P['extra'], bold=True, anchor='start')
    fig.text(x0 + w / 2, y0 + h + 105, 'k', 32, italic=True)
    fig.text(x0 - 60, y0 + 40, 'P(X = k)', 30, italic=True, anchor='start')
    fig.text(W / 2, 80, 'Binomisk fordeling: n = 8, p = 0,3', 38, color=P['main'], bold=True)
    save(fig, 'r1-8-5-binomisk-fordeling.svg')


def r1_8_6_bayes():
    fig = Fig('r1')
    P = fig.p
    fig.title('Bayes: 10 000 testede')
    x0, w = 200, 1200
    # toppstolpe: 100 syke / 9900 friske (skaler synlig: syke-andel min 90 px)
    y1, h1 = 140, 90
    wsick = 110
    fig.rect(x0, y1, wsick, h1, fill=P['accent'])
    fig.rect(x0 + wsick, y1, w - wsick, h1, fill=P['extra'], opacity=0.85)
    fig.text(x0 + wsick + 24, y1 - 18, '100 syke', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(x0 + w - 20, y1 - 18, '9 900 friske', 30, color=P['extra'], bold=True, anchor='end')
    # midtblokker
    y2, h2 = 400, 90
    w95 = 95 * 1.1
    w495 = 495 * 1.1
    bx1 = x0 + 60
    bx2 = x0 + 560
    fig.rect(bx1, y2, w95, h2, fill=P['accent'])
    fig.text(bx1 + w95 + 22, y2 + h2 / 2 + 10, '95 positive', 30, color=P['accent'], bold=True, anchor='start')
    fig.rect(bx2, y2, w495, h2, fill=P['extra'], opacity=0.85)
    fig.text(bx2 + w495 + 22, y2 + h2 / 2 + 10, '495 falske positive', 30, color=P['extra'], bold=True, anchor='start')
    fig.arrow(x0 + wsick / 2, y1 + h1 + 8, bx1 + w95 / 2, y2 - 10, P['accent'], 4)
    fig.arrow(x0 + wsick + (w - wsick) / 2, y1 + h1 + 8, bx2 + w495 / 2, y2 - 10, P['extra'], 4)
    # bunn: samlet soyle 95 + 495 = 590
    y3, h3 = 660, 90
    bx3 = x0 + 300
    fig.rect(bx3, y3, w95, h3, fill=P['accent'])
    fig.rect(bx3 + w95, y3, w495, h3, fill=P['extra'], opacity=0.85)
    fig.arrow(bx1 + w95 / 2, y2 + h2 + 8, bx3 + 40, y3 - 10, P['accent'], 4)
    fig.arrow(bx2 + w495 / 2, y2 + h2 + 8, bx3 + w95 + w495 / 2, y3 - 10, P['extra'], 4)
    fig.text(bx3 + (w95 + w495) / 2, y3 + h3 + 56, 'P(syk | positiv) = 95/590 ≈ 16 %', 36, color=P['text'], bold=True)
    save(fig, 'r1-8-6-bayes-persondiagram.svg')


# =====================================================================
# Kapittel 9: Bevis (flytbokser)
# =====================================================================

def r1_9_2_induksjon():
    fig = Fig('r1')
    P = fig.p
    fig.title('Induksjonsprinsippet')
    # dominobrikker som skjeve rektangler i rad
    base_y = 620
    n = 7
    x = 180
    for i in range(n):
        wd, hd = 64, 240
        tilt = -28 if i == 0 else 0  # forste brikke velter
        cx = x + i * 165
        col = P['accent'] if i == 0 else P['main']
        a = math.radians(tilt)
        # hjorner av rektangel rotert om nederste venstre
        pts = [(0, 0), (wd, 0), (wd, -hd), (0, -hd)]
        rot = [(cx + px * math.cos(a) - py * math.sin(a), base_y + px * math.sin(a) + py * math.cos(a)) for px, py in pts]
        fig.poly(rot, stroke=col, width=5, close=True, fill=P['bg'])
    fig.text(x + 30, base_y + 60, 'basistrinn: n = 1', 30, color=P['accent'], bold=True, anchor='start')
    # pil mellom brikke 3 og 4
    ax1 = x + 2 * 165 + 80
    ax2 = x + 3 * 165 - 14
    fig.arrow(ax1, base_y - 280, ax2 + 40, base_y - 280, P['main'], 5)
    fig.text((ax1 + ax2) / 2 + 20, base_y - 320, 'induksjonstrinn: k ⇒ k + 1', 30, color=P['main'], bold=True)
    fig.text(x + n * 165 + 30, base_y - 110, '· · ·', 48, color=P['text'], bold=True, anchor='start')
    fig.text(W / 2, 820, 'altså sant for alle n', 34, color=P['extra'], bold=True)
    save(fig, 'r1-9-2-induksjon-domino.svg')


def r1_9_3_kontrapositiv():
    fig = Fig('r1')
    P = fig.p
    fig.text(400, 130, 'kontrapositivt bevis', 36, color=P['accent'], bold=True)
    fig.flow_box(150, 280, 500, 110, 'P ⇒ Q', size=36)
    fig.flow_box(150, 560, 500, 110, 'ikke Q ⇒ ikke P', size=36)
    dbl_arrow(fig, 400, 410, 400, 540, P['accent'], 5)
    fig.text(430, 485, 'likeverdige', 30, color=P['accent'], bold=True, anchor='start')
    fig.line(800, 100, 800, 820, P['grid'], 2.5)
    fig.text(1200, 130, 'kontradiksjon', 36, color=P['extra'], bold=True)
    boxes = ['anta det motsatte', 'utled selvmotsigelse', '⊥', 'påstanden er sann']
    y = 210
    for i, b in enumerate(boxes):
        hh = 96
        fig.flow_box(930, y, 540, hh, b, size=32 if b != '⊥' else 44)
        if i < len(boxes) - 1:
            fig.arrow(1200, y + hh + 4, 1200, y + hh + 52, P['main'], 5)
        y += hh + 60
    save(fig, 'r1-9-3-kontrapositiv-kontradiksjon.svg')


ALL = [
    r1_1_1_polynomdivisjon, r1_1_1_faktorteoremet, r1_1_2_logaritme_invers,
    r1_1_3_halveringstid, r1_1_5_absoluttverdi,
    r1_2_1_like_odde, r1_2_2_omvendt, r1_2_3_sammensatt, r1_2_4_stykkevis,
    r1_3_1_grenseverdi, r1_3_2_diskontinuiteter, r1_3_3_sekant_tangent, r1_3_5_newton, r1_3_6_differanse,
    r1_4_6_drofting, r1_4_7_ballong, r1_4_8_globale, r1_4_9_optimering,
    r1_5_1_dobling, r1_5_2_logistisk, r1_5_3_regresjon,
    r1_6_1_komponentform, r1_6_1_addisjon, r1_6_1_skalar, r1_6_1_subtraksjon,
    r1_6_2_skalarprodukt, r1_6_2_ortogonale, r1_6_2_projeksjon,
    r1_6_3_param_linje, r1_6_3_param_sirkel, r1_6_4_avstand, r1_6_5_sirkel_tangent, r1_6_6_kraftvektorer,
    r1_7_1_enhetssirkel_def, r1_7_1_standardvinkler, r1_7_1_radianer, r1_7_1_pytagoreisk,
    r1_7_2_sinusgraf, r1_7_3_sinuslikning_sirkel, r1_7_3_sinuslikning_graf, r1_7_5_derivert_sin,
    r1_7_6_sinussetningen, r1_7_6_cosinussetningen,
    r1_8_1_valgtre, r1_8_2_pascal, r1_8_3_venn, r1_8_4_betinget_tre, r1_8_5_binomisk, r1_8_6_bayes,
    r1_9_2_induksjon, r1_9_3_kontrapositiv,
]

if __name__ == '__main__':
    for f in ALL:
        f()
    print(f'{len(ALL)} figurer generert i {os.path.normpath(OUT)}')
