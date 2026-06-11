#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk S1.
Kjør: python3 scripts/svg/figurer-s1.py  (fra repo-rot)
Output: public/images/content/s1/*.svg
"""
import math
import random
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, W, H, fmt

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'images', 'content', 's1')

GREEN = '#0E8060'   # main
PURPLE = '#5E3B8C'  # accent
LGREEN = '#54A88C'  # extra
RED = '#C0504D'     # warn
GRAY = '#8A938F'


def save(fig, name):
    path = os.path.join(OUT, name)
    fig.save(path)
    print('skrev', name)


# ---------- hjelpefunksjoner (nye primitiver, kun i denne fila) ----------

def npdf(x, mu=0, s=1):
    return math.exp(-((x - mu) ** 2) / (2 * s * s)) / (s * math.sqrt(2 * math.pi))


def Phi(z):
    return 0.5 * (1 + math.erf(z / math.sqrt(2)))


def binom_pmf(n, p, k):
    return math.comb(n, k) * p ** k * (1 - p) ** (n - k)


def dbl_arrow(fig, x1, y1, x2, y2, color, width=4, head=13):
    """Dobbeltpil (to pilhoder)."""
    fig.line(x1, y1, x2, y2, color, width)
    for (ax, ay, bx, by) in ((x1, y1, x2, y2), (x2, y2, x1, y1)):
        ang = math.atan2(ay - by, ax - bx)
        for da in (math.radians(150), math.radians(-150)):
            fig.line(ax, ay, ax + head * math.cos(ang + da), ay + head * math.sin(ang + da), color, width)


def dist_bars(fig, tx, ty, pmf, bw_units, color, highlight=None, hcolor=None, base=0):
    """Stolper for diskret fordeling i et coords()-system. pmf: {k: p}."""
    for k, p in pmf.items():
        c = hcolor if (highlight is not None and k == highlight) else color
        x0px, x1px = tx(k - bw_units / 2), tx(k + bw_units / 2)
        fig.rect(x0px, ty(p), x1px - x0px, ty(base) - ty(p), fill=c, stroke=fig.p['bg'], width=1.5)


def round_box(fig, x, y, w, h, label, fill, size=29, stroke=None, text_color=None):
    fig.rect(x, y, w, h, fill=fill, stroke=stroke or fig.p['text'], width=3, rx=16)
    lines = label.split('\n')
    for i, ln in enumerate(lines):
        fig.text(x + w / 2, y + h / 2 + 10 + (i - (len(lines) - 1) / 2) * (size + 8), ln, size,
                 bold=True, color=text_color)


def lens_path(fig, c1, c2, r, fill, opacity=0.9):
    """Skraver snittet (linsen) mellom to like store sirkler."""
    (x1, y1), (x2, y2) = c1, c2
    d = math.hypot(x2 - x1, y2 - y1)
    a = d / 2
    hh = math.sqrt(max(r * r - a * a, 0))
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    ux, uy = (x2 - x1) / d, (y2 - y1) / d
    p1 = (mx - uy * hh, my + ux * hh)
    p2 = (mx + uy * hh, my - ux * hh)
    fig.raw(f'<path d="M {p1[0]:.1f},{p1[1]:.1f} A {r},{r} 0 0 1 {p2[0]:.1f},{p2[1]:.1f} '
            f'A {r},{r} 0 0 1 {p1[0]:.1f},{p1[1]:.1f} Z" fill="{fill}" opacity="{opacity}"/>')


def panel_axes(fig, x0, y0, x1, y1):
    """Enkle akser (pil høyre + opp) for småpaneler."""
    fig.arrow(x0, y1, x1 + 14, y1, fig.p['text'], 3)
    fig.arrow(x0, y1, x0, y0 - 14, fig.p['text'], 3)


# ====================================================================
# Kapittel 1
# ====================================================================

def f_1_3():
    fig = Fig('s1')
    tx, ty = fig.coords(-4, 5, -7, 7, box=(200, 70, 1400, 440), grid=False,
                        xticks=[-2, 3], yticks=[])
    fig.plot(lambda x: (x + 2) * (x - 3), color=GREEN, width=5)
    fig.point(-2, 0, color=PURPLE)
    fig.point(3, 0, color=PURPLE)
    # fortegnslinje vertikalt justert under
    y = 600
    x0px, x1px = 200, 1400
    fig.arrow(x0px - 20, y, x1px + 30, y, fig.p['text'], 4)
    for v in (-2, 3):
        fig.line(tx(v), y - 16, tx(v), y + 16, fig.p['text'], 3)
        fig.text(tx(v), y - 32, fmt(v), 30, bold=True)
        fig.text(tx(v), y + 52, '0', 30, color=PURPLE, bold=True)
        fig.line(tx(v), 440, tx(v), y - 40, GRAY, 2, dash='8 8')
    # tegnene
    fig.text((x0px + tx(-2)) / 2, y - 40, '+', 40, color=GREEN, bold=True)
    fig.text((tx(-2) + tx(3)) / 2, y - 40, '−', 40, color=RED, bold=True)
    fig.text((tx(3) + x1px) / 2, y - 40, '+', 40, color=GREEN, bold=True)
    # løsningsintervaller med tykk grønn strek og åpne endesirkler
    fig.line(x0px, y, tx(-2) - 14, y, GREEN, 10)
    fig.line(tx(3) + 14, y, x1px, y, GREEN, 10)
    fig.circle(tx(-2), y, 12, fill=fig.p['bg'], stroke=GREEN, width=5)
    fig.circle(tx(3), y, 12, fill=fig.p['bg'], stroke=GREEN, width=5)
    fig.text(W / 2, 800, 'x < −2  eller  x > 3', 40, bold=True, color=GREEN)
    save(fig, 's1-1-3-nullpunktsmetoden.svg')


def f_1_4():
    fig = Fig('s1')
    tx, ty = fig.coords(-3, 7, -4, 5, box=(220, 110, 1380, 800), grid=True,
                        xticks=[-2, 2, 4, 6], yticks=[-2, 2, 4], xlabel='x', ylabel='y')
    fig.plot(lambda x: x - 2, xmax=2, color=GRAY, width=3.5, dash='12 10')
    fig.plot(lambda x: abs(x - 2), color=GREEN, width=5)
    fig.point(2, 0, '(2, 0)', color=PURPLE, dx=20, dy=42)
    fig.arrow(tx(-0.6), ty(-2.6), tx(-0.6), ty(2.2), PURPLE, 4)
    fig.text(tx(-0.4), ty(-0.4), 'den negative delen speiles opp', 28, anchor='start', color=PURPLE, bold=True)
    save(fig, 's1-1-4-absoluttverdifunksjon.svg')


def f_1_6a():
    fig = Fig('s1')
    tx, ty = fig.coords(-1.5, 4, -3, 9, box=(260, 110, 1380, 810), grid=True,
                        xticks=[1, 2, 3], yticks=[2, 5, 8], xlabel='x', ylabel='y')
    fig.plot(lambda x: 3 * x - 1, color=GREEN, width=5)
    # stigningstrekant fra (1,2)
    fig.line(tx(1), ty(2), tx(2), ty(2), PURPLE, 4)
    fig.line(tx(2), ty(2), tx(2), ty(5), PURPLE, 4)
    fig.text((tx(1) + tx(2)) / 2, ty(2) + 40, '1', 32, color=PURPLE, bold=True)
    fig.text(tx(2) + 22, (ty(2) + ty(5)) / 2 + 10, '3', 32, anchor='start', color=PURPLE, bold=True)
    fig.point(1, 2, color=PURPLE)
    # formelboks
    fig.rect(740, 130, 560, 90, fill=fig.p['bg'], stroke=GREEN, width=4, rx=12)
    fig.text(1020, 188, 'y − y₁ = a(x − x₁)', 38, bold=True)
    fig.arrow(tx(1) - 130, ty(2) - 90, tx(1) - 14, ty(2) - 14, GREEN, 3.5)
    fig.text(tx(1) - 140, ty(2) - 110, 'kjent punkt (1, 2)', 28, anchor='end', bold=True)
    fig.arrow(tx(2) + 200, ty(3.5) + 90, tx(2) + 40, ty(3.5) + 14, GREEN, 3.5)
    fig.text(tx(2) + 212, ty(3.5) + 122, 'a = 3', 30, anchor='start', bold=True)
    save(fig, 's1-1-6-ettpunktsformelen.svg')


def f_1_6b():
    fig = Fig('s1')
    for (bx0, label2, perp) in ((150, 'parallelle: a₁ = a₂', False), (860, 'vinkelrette: a₁ · a₂ = −1', True)):
        box = (bx0, 150, bx0 + 590, 740)
        tx, ty = fig.coords(-3, 3, -3, 3, box=box, grid=False, xticks=[], yticks=[])
        if not perp:
            fig.plot(lambda x: 2 * x + 1, color=GREEN, width=5)
            fig.plot(lambda x: 2 * x - 1.6, color=GREEN, width=5)
            fig.text(tx(0.55), ty(2.6), 'a₁ = 2', 30, anchor='start', bold=True, color=GREEN)
            fig.text(tx(2.0), ty(1.7), 'a₂ = 2', 30, anchor='start', bold=True, color=GREEN)
        else:
            fig.plot(lambda x: 2 * x, color=GREEN, width=5)
            fig.plot(lambda x: -x / 2, color=PURPLE, width=5)
            fig.text(tx(1.05), ty(2.6), 'a₁ = 2', 30, anchor='start', bold=True, color=GREEN)
            fig.text(tx(-2.9), ty(1.75), 'a₂ = −1/2', 30, anchor='start', bold=True, color=PURPLE)
            # kvadratsymbol i skjæringspunktet, rotert langs linjene
            s = 0.35
            u = (1 / math.sqrt(5), 2 / math.sqrt(5))   # retning a=2
            v = (2 / math.sqrt(5), -1 / math.sqrt(5))  # retning a=-1/2
            p0 = (s * u[0], s * u[1])
            p1 = (s * u[0] + s * v[0], s * u[1] + s * v[1])
            p2 = (s * v[0], s * v[1])
            fig.poly([(tx(p0[0]), ty(p0[1])), (tx(p1[0]), ty(p1[1])), (tx(p2[0]), ty(p2[1]))],
                     stroke=fig.p['text'], width=3)
        fig.text(bx0 + 295, 830, label2, 32, bold=True)
    save(fig, 's1-1-6-parallell-vinkelrett.svg')


def f_1_7():
    fig = Fig('s1')
    panels = [(95, 'én løsning'), (595, 'ingen løsning'), (1095, 'uendelig mange løsninger')]
    for i, (bx0, lab) in enumerate(panels):
        box = (bx0, 210, bx0 + 410, 660)
        tx, ty = fig.coords(-3, 3, -3, 3, box=box, grid=False, xticks=[], yticks=[])
        if i == 0:
            fig.plot(lambda x: x + 1, color=GREEN, width=5)
            fig.plot(lambda x: -x + 2, color=PURPLE, width=5)
            fig.point(0.5, 1.5, color=RED, r=10)
        elif i == 1:
            fig.plot(lambda x: x + 1.6, color=GREEN, width=5)
            fig.plot(lambda x: x - 1.2, color=PURPLE, width=5)
        else:
            fig.plot(lambda x: 0.8 * x + 0.4, color=GREEN, width=6)
            fig.plot(lambda x: 0.8 * x + 0.4, color=PURPLE, width=6, dash='22 22')
        fig.text(bx0 + 205, 760, lab, 32, bold=True)
    save(fig, 's1-1-7-likningssett-tre-tilfeller.svg')


def f_1_8():
    fig = Fig('s1')
    panels = [(95, lambda x: x * x - 2, [(-math.sqrt(2)), math.sqrt(2)], 'b² − 4ac > 0: to nullpunkter'),
              (595, lambda x: x * x, [0], 'b² − 4ac = 0: ett nullpunkt'),
              (1095, lambda x: x * x + 1.3, [], 'b² − 4ac < 0: ingen nullpunkter')]
    for bx0, f, zeros, lab in panels:
        box = (bx0, 190, bx0 + 410, 660)
        tx, ty = fig.coords(-3, 3, -3, 5, box=box, grid=False, xticks=[], yticks=[])
        fig.plot(f, color=GREEN, width=5)
        for z in zeros:
            fig.point(z, 0, color=PURPLE, r=10)
        fig.text(bx0 + 205, 755, lab, 29, bold=True)
    save(fig, 's1-1-8-diskriminanten.svg')


def f_1_9():
    fig = Fig('s1')
    tx, ty = fig.coords(0, 30, 0, 320, box=(230, 110, 1380, 790), grid=True,
                        xticks=[10, 20, 30], yticks=[50, 100, 200, 300], xlabel='år', ylabel='verdi')
    xd = math.log(2) / math.log(1.05)    # 14.21
    xh = math.log(0.5) / math.log(0.95)  # 13.51
    fig.plot(lambda x: 100 * 1.05 ** x, color=GREEN, width=5)
    fig.plot(lambda x: 100 * 0.95 ** x, color=PURPLE, width=5)
    fig.point(0, 100, color=fig.p['text'], r=9)
    fig.line(tx(0), ty(200), tx(xd), ty(200), GRAY, 2.5, dash='10 8')
    fig.line(tx(xd), ty(200), tx(xd), ty(0), GRAY, 2.5, dash='10 8')
    fig.line(tx(0), ty(50), tx(xh), ty(50), GRAY, 2.5, dash='10 8')
    fig.line(tx(xh), ty(50), tx(xh), ty(0), GRAY, 2.5, dash='10 8')
    fig.text(tx(20), ty(100 * 1.05 ** 20) - 38, 'vekstfaktor 1,05', 30, bold=True, color=GREEN)
    fig.text(tx(20), ty(100 * 0.95 ** 20) - 40, 'vekstfaktor 0,95', 30, bold=True, color=PURPLE)
    fig.text(tx(xd) + 16, ty(215), 'dobling ≈ 14 år', 28, anchor='start', color=GREEN, bold=True)
    fig.text(tx(xh) + 16, ty(68), 'halvering ≈ 13,5 år', 28, anchor='start', color=PURPLE, bold=True)
    save(fig, 's1-1-9-vekstfaktor-dobling-halvering.svg')


# ====================================================================
# Kapittel 2
# ====================================================================

def f_2_1():
    fig = Fig('s1')
    f = lambda x: (x + 2) * (x - 1) * (x - 3)
    tx, ty = fig.coords(-3.4, 4.4, -14, 16, box=(200, 200, 1400, 820), grid=False,
                        xticks=[-2, 1, 3], yticks=[])
    fig.plot(f, color=GREEN, width=5)
    for z in (-2, 1, 3):
        fig.point(z, 0, color=PURPLE, r=10)
    fig.text(W / 2, 90, 'f(x) = (x + 2)(x − 1)(x − 3)', 42, bold=True)
    # piler fra faktor til nullpunkt
    fxs = {-2: W / 2 - 215, 1: W / 2 + 12, 3: W / 2 + 235}
    for z, sx in fxs.items():
        fig.arrow(sx, 115, tx(z), ty(0) - 26, GRAY, 2.5, head=11)
    save(fig, 's1-2-1-polynom-faktorform.svg')


def f_2_2():
    fig = Fig('s1')
    tx, ty = fig.coords(-4, 8, -4, 6, box=(220, 110, 1380, 800), grid=True,
                        xticks=[-2, 2, 4, 6], yticks=[-2, 2, 4], xlabel='x', ylabel='y')
    f = lambda x: (x + 1) / (x - 2)
    fig.line(tx(2), 110, tx(2), 800, PURPLE, 3.5, dash='14 10')
    fig.line(220, ty(1), 1380, ty(1), PURPLE, 3.5, dash='14 10')
    fig.plot(f, xmax=1.92, color=GREEN, width=5)
    fig.plot(f, xmin=2.08, color=GREEN, width=5)
    fig.point(-1, 0, '(−1, 0)', color=PURPLE, dx=-16, dy=46, size=27)
    fig.point(0, -0.5, '(0, −0,5)', color=PURPLE, dx=20, dy=30, size=27)
    fig.text(tx(2) + 16, 150, 'x = 2', 30, anchor='start', color=PURPLE, bold=True)
    fig.text(1370, ty(1) - 18, 'y = 1', 30, anchor='end', color=PURPLE, bold=True)
    save(fig, 's1-2-2-rasjonal-funksjon-asymptoter.svg')


def f_2_4():
    fig = Fig('s1')
    tx, ty = fig.coords(-2.5, 4.5, -2.5, 4.5, box=(460, 95, 1165, 800), grid=True,
                        xticks=[-2, -1, 1, 2, 3, 4], yticks=[-2, -1, 1, 2, 3, 4])
    fig.plot(lambda x: x, color=GRAY, width=3, dash='14 12')
    fig.plot(lambda x: 10 ** x, color=GREEN, width=5)
    fig.plot(lambda x: math.log10(x), xmin=0.004, color=PURPLE, width=5)
    fig.line(tx(0), ty(1), tx(1), ty(0), GRAY, 2.5, dash='6 8')
    fig.point(0, 1, color=GREEN)
    fig.point(1, 0, color=PURPLE)
    fig.text(tx(0.62), ty(3.6), 'y = 10ˣ', 34, anchor='end', bold=True, color=GREEN)
    fig.text(tx(2.6), ty(0.75), 'y = log x', 34, anchor='start', bold=True, color=PURPLE)
    fig.text(tx(3.6), ty(3.25), 'y = x', 30, anchor='start', color=GRAY, bold=True)
    save(fig, 's1-2-4-logaritme-som-omvendt.svg')


def f_2_6():
    fig = Fig('s1')
    P = math.pi
    tx, ty = fig.coords(0, 4 * P + 0.4, -2.2, 4.2, box=(170, 120, 1400, 800), grid=False,
                        xticks=[], yticks=[-1, 1, 3])
    fig.line(tx(0), ty(1), tx(4 * P + 0.3), ty(1), GRAY, 3.5, dash='14 12')
    fig.plot(lambda x: 2 * math.sin(x) + 1, xmax=4 * P, color=GREEN, width=5)
    # amplitude-dobbeltpil ved x = pi/2
    dbl_arrow(fig, tx(P / 2), ty(1), tx(P / 2), ty(3), PURPLE, 4)
    fig.text(tx(P / 2) + 20, ty(2) + 10, 'amplitude 2', 29, anchor='start', color=PURPLE, bold=True)
    # periode-dobbeltpil fra topp til topp
    dbl_arrow(fig, tx(P / 2), ty(3.55), tx(5 * P / 2), ty(3.55), PURPLE, 4)
    fig.text(tx(1.5 * P), ty(3.55) - 18, 'periode 2π', 29, color=PURPLE, bold=True)
    fig.text(tx(3.1 * P), ty(1) - 18, 'likevektslinje y = 1', 29, color=GRAY, bold=True)
    for v, lab in ((P, 'π'), (2 * P, '2π'), (3 * P, '3π'), (4 * P, '4π')):
        fig.line(tx(v), ty(0) - 9, tx(v), ty(0) + 9, fig.p['text'], 3)
        fig.text(tx(v), ty(0) + 42, lab, 27)
    save(fig, 's1-2-6-sinusfunksjon-parametre.svg')


def f_2_7():
    fig = Fig('s1')
    tx, ty = fig.coords(-1, 6, -1, 6, box=(220, 110, 1380, 800), grid=True,
                        xticks=[2, 4], yticks=[2, 4], xlabel='x', ylabel='y')
    fig.plot(lambda x: x, xmin=-0.8, xmax=2, color=GREEN, width=5)
    fig.plot(lambda x: -x + 6, xmin=2, xmax=5.8, color=PURPLE, width=5)
    fig.line(tx(2), ty(2), tx(2), ty(4), GRAY, 3, dash='8 8')
    fig.circle(tx(2), ty(2), 11, fill=fig.p['bg'], stroke=GREEN, width=5)
    fig.circle(tx(2), ty(4), 11, fill=PURPLE)
    fig.text(tx(2.35), ty(5.3), 'hopp: ikke kontinuerlig i x = 2', 30, anchor='start', bold=True)
    fig.arrow(tx(2.3), ty(5.05), tx(2.05), ty(3.3), GRAY, 2.5, head=11)
    save(fig, 's1-2-7-stykkevis-funksjon.svg')


# ====================================================================
# Kapittel 3
# ====================================================================

def f_3_1():
    fig = Fig('s1')
    f = lambda x: x * x / 4 + 1
    a = 2.0
    fa, df = f(a), a / 2  # f'(x)=x/2 -> f'(2)=1
    tx, ty = fig.coords(-1, 6, -0.5, 6.5, box=(220, 110, 1380, 800), grid=True,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    tang = lambda x: fa + df * (x - a)
    fig.plot(tang, xmin=-0.5, xmax=5.6, color=PURPLE, width=4)
    fig.plot(f, xmin=-1, xmax=4.6, color=GREEN, width=5)
    # stigningstrekant på tangenten
    x1, x2 = 3.0, 4.2
    fig.line(tx(x1), ty(tang(x1)), tx(x2), ty(tang(x1)), PURPLE, 3.5)
    fig.line(tx(x2), ty(tang(x1)), tx(x2), ty(tang(x2)), PURPLE, 3.5)
    fig.text((tx(x1) + tx(x2)) / 2, ty(tang(x1)) + 38, '1', 29, color=PURPLE, bold=True)
    fig.text(tx(x2) + 18, (ty(tang(x1)) + ty(tang(x2))) / 2 + 10, 'f′(a)', 29, anchor='start', color=PURPLE, bold=True, italic=True)
    fig.line(tx(a), ty(fa), tx(a), ty(0), GRAY, 3, dash='8 8')
    fig.text(tx(a), ty(0) + 40, 'a', 32, bold=True, italic=True)
    fig.point(a, fa, '(a, f(a))', color=PURPLE, dx=-180, dy=-22, size=30)
    fig.text(tx(2.6), ty(5.9), 'f′(a) = tangentens stigningstall', 32, anchor='start', bold=True)
    save(fig, 's1-3-1-tangent-og-derivert.svg')


def f_3_4a():
    fig = Fig('s1')
    f = lambda x: x ** 3 - 3 * x
    tx, ty = fig.coords(-2.6, 2.6, -3.4, 3.4, box=(230, 70, 1370, 480), grid=False,
                        xticks=[], yticks=[])
    fig.plot(f, color=GREEN, width=5)
    for px, py in ((-1, 2), (1, -2)):
        fig.point(px, py, color=PURPLE, r=10)
        fig.line(tx(px) - 55, ty(py), tx(px) + 55, ty(py), PURPLE, 4)
    # fortegnsskjema for f'
    y = 640
    x0px, x1px = 230, 1370
    fig.text(x0px - 30, y + 10, 'f′(x)', 32, anchor='end', bold=True, italic=True)
    fig.line(x0px, y, x1px, y, fig.p['text'], 3)
    for v in (-1, 1):
        fig.line(tx(v), y - 16, tx(v), y + 16, fig.p['text'], 3)
        fig.text(tx(v), y - 30, fmt(v), 28, bold=True)
        fig.line(tx(v), ty(f(v)) + 22, tx(v), y - 46, GRAY, 2.5, dash='8 8')
    segs = [((x0px, tx(-1)), '+', 'vokser ↗', GREEN), ((tx(-1), tx(1)), '−', 'synker ↘', RED),
            ((tx(1), x1px), '+', 'vokser ↗', GREEN)]
    for (xa, xb), s, lab, c in segs:
        fig.line(xa + 26, y, xb - 26, y, c, 7, dash=None if s == '+' else '14 12')
        fig.text((xa + xb) / 2, y + 56, s, 38, color=c, bold=True)
        fig.text((xa + xb) / 2, y + 116, lab, 29, color=c, bold=True)
    save(fig, 's1-3-4-drofting-fortegnsskjema.svg')


def f_3_4b():
    fig = Fig('s1')
    box = (230, 110, 1370, 790)
    # bakgrunnssoner
    midx = (box[0] + box[2]) / 2
    fig.rect(box[0], box[1], midx - box[0], box[3] - box[1], fill=PURPLE, opacity=0.10)
    fig.rect(midx, box[1], box[2] - midx, box[3] - box[1], fill=GREEN, opacity=0.10)
    tx, ty = fig.coords(-1.7, 1.7, -4.4, 4.4, box=box, grid=False, xticks=[], yticks=[])
    fig.plot(lambda x: x ** 3, color=GREEN, width=5)
    fig.circle(tx(0), ty(0), 12, fill=PURPLE)
    fig.text(tx(0.12), ty(-0.9), 'vendepunkt: krumningen skifter', 30, anchor='start', bold=True)
    fig.text(tx(-1.45), ty(3.6), 'konkav: f″ < 0', 32, anchor='start', bold=True, color=PURPLE)
    fig.text(tx(0.55), ty(-3.4), 'konveks: f″ > 0', 32, anchor='start', bold=True, color=GREEN)
    # bueikoner: omvendt skål (konkav) og skål (konveks)
    pts1 = [(tx(-1.0) + 60 * math.cos(t), ty(2.9) + 34 * math.sin(t) * -1) for t in
            [math.pi * i / 20 for i in range(21)]]
    fig.poly(pts1, stroke=PURPLE, width=4)
    pts2 = [(tx(1.18) + 60 * math.cos(t), ty(-2.6) + 34 * math.sin(t)) for t in
            [math.pi * i / 20 for i in range(21)]]
    fig.poly(pts2, stroke=GREEN, width=4)
    save(fig, 's1-3-4-vendepunkt-krumning.svg')


def f_3_5():
    fig = Fig('s1')
    # venstre: innhegning mot vegg
    wx0, wx1, wy = 130, 660, 200
    fig.rect(wx0, wy - 34, wx1 - wx0, 34, fill=GRAY, opacity=0.5)
    for i in range(10):
        x = wx0 + (wx1 - wx0) * i / 10 + 16
        fig.line(x, wy - 30, x + 22, wy - 6, fig.p['text'], 2)
    fig.text((wx0 + wx1) / 2, wy - 52, 'låvevegg', 28, color=fig.p['text'])
    rx0, rx1, ry1 = 200, 590, 560
    fig.line(rx0, wy, rx0, ry1, GREEN, 6)
    fig.line(rx1, wy, rx1, ry1, GREEN, 6)
    fig.line(rx0, ry1, rx1, ry1, GREEN, 6)
    fig.text(rx0 - 26, (wy + ry1) / 2 + 10, 'x', 34, anchor='end', bold=True, italic=True, color=GREEN)
    fig.text(rx1 + 26, (wy + ry1) / 2 + 10, 'x', 34, anchor='start', bold=True, italic=True, color=GREEN)
    fig.text((rx0 + rx1) / 2, ry1 + 46, '40 − 2x', 32, bold=True, color=GREEN)
    fig.text((rx0 + rx1) / 2, 700, '40 m gjerde', 30)
    # høyre: arealfunksjonen A(x)=x(40-2x), topp (10,200)
    tx, ty = fig.coords(0, 21, 0, 230, box=(800, 140, 1450, 720), grid=False,
                        xticks=[10, 20], yticks=[200], xlabel='x', ylabel='A(x)')
    fig.plot(lambda x: x * (40 - 2 * x), xmin=0, xmax=20, color=GREEN, width=5)
    fig.line(tx(10), ty(200), tx(10), ty(0), GRAY, 2.5, dash='8 8')
    fig.point(10, 200, color=PURPLE, r=11)
    fig.text(tx(10), ty(200) - 36, 'størst areal: x = 10', 30, bold=True, color=PURPLE)
    save(fig, 's1-3-5-optimering-innhegning.svg')


def f_3_8():
    fig = Fig('s1')
    m = 130  # piksler per meter
    wallx, gy = 430, 760
    # vegg og bakke
    fig.line(wallx, 130, wallx, gy, fig.p['text'], 6)
    fig.line(180, gy, 1180, gy, fig.p['text'], 6)
    for i in range(12):
        fig.line(wallx, 160 + i * 50, wallx - 26, 186 + i * 50, GRAY, 2.5)
    top = (wallx, gy - 4 * m)
    foot = (wallx + 3 * m, gy)
    fig.line(top[0], top[1], foot[0], foot[1], GREEN, 8)
    # rett vinkel
    fig.poly([(wallx + 34, gy), (wallx + 34, gy - 34), (wallx, gy - 34)], stroke=PURPLE, width=3)
    fig.text(wallx + 3 * m / 2, gy + 48, '3 m', 32, bold=True)
    fig.text(wallx - 30, gy - 2 * m + 10, '4 m', 32, anchor='end', bold=True)
    fig.text((wallx + foot[0]) / 2 + 40, (gy + top[1]) / 2 - 30, '5 m', 32, bold=True, color=GREEN)
    fig.arrow(foot[0] + 20, gy - 26, foot[0] + 170, gy - 26, GREEN, 5)
    fig.text(foot[0] + 30, gy - 56, 'dx/dt = 0,5 m/s', 29, anchor='start', color=GREEN, bold=True)
    fig.arrow(wallx + 26, top[1] + 20, wallx + 26, top[1] + 170, PURPLE, 5)
    fig.text(wallx + 48, top[1] + 110, 'dy/dt = ?', 29, anchor='start', color=PURPLE, bold=True)
    fig.rect(1080, 200, 380, 96, fill=fig.p['bg'], stroke=GREEN, width=4, rx=12)
    fig.text(1270, 262, 'x² + y² = 25', 38, bold=True)
    save(fig, 's1-3-8-relaterte-rater-stige.svg')


def f_3_9():
    fig = Fig('s1')
    f = lambda x: x * x / 4 + 0.6
    tx, ty = fig.coords(-0.5, 5.5, -0.6, 6.4, box=(220, 110, 1380, 790), grid=True,
                        xticks=[1, 2, 4], yticks=[], xlabel='x', ylabel='y')
    # sekant gjennom (1, f(1)) og (4, f(4))
    s = (f(4) - f(1)) / 3
    sec = lambda x: f(1) + s * (x - 1)
    fig.plot(sec, xmin=0.2, xmax=5.1, color=PURPLE, width=4)
    # tangent i x=2: f'(2)=1
    tang = lambda x: f(2) + 1.0 * (x - 2)
    fig.plot(tang, xmin=0.1, xmax=4.4, color=GREEN, width=4, dash='2 0')
    fig.plot(f, xmin=-0.4, xmax=4.7, color=GREEN, width=6)
    for a in (1, 2, 4):
        fig.line(tx(a), ty(f(a)), tx(a), ty(0), GRAY, 2.5, dash='8 8')
    fig.point(1, f(1), color=PURPLE)
    fig.point(4, f(4), color=PURPLE)
    fig.point(2, f(2), color=GREEN)
    fig.text(tx(4.05), ty(sec(4.7)), 'gjennomsnittlig vekstfart', 29, anchor='start', color=PURPLE, bold=True)
    fig.text(tx(3.4), ty(tang(3.9)) + 44, 'momentan vekstfart', 29, anchor='start', color=GREEN, bold=True)
    save(fig, 's1-3-9-gjennomsnittlig-momentan.svg')


# ====================================================================
# Kapittel 4
# ====================================================================

def f_4_1():
    fig = Fig('s1')
    K = lambda x: 200 + 30 * x
    I = lambda x: 50 * x
    tx, ty = fig.coords(0, 20, 0, 1050, box=(220, 110, 1380, 780), grid=False,
                        xticks=[10], yticks=[], xlabel='antall enheter', ylabel='kroner')
    # soner mellom linjene
    fig.poly([(tx(0), ty(K(0))), (tx(10), ty(500)), (tx(0), ty(0))], fill=RED, opacity=0.16, close=True)
    fig.poly([(tx(10), ty(500)), (tx(18), ty(K(18))), (tx(18), ty(I(18)))], fill=GREEN, opacity=0.16, close=True)
    fig.plot(K, xmax=18, color=PURPLE, width=5)
    fig.plot(I, xmax=18, color=GREEN, width=5)
    fig.point(10, 500, color=fig.p['text'], r=10)
    fig.text(tx(10) - 14, ty(500) - 30, 'break-even', 30, anchor='end', bold=True)
    fig.text(tx(5.5), ty(160), 'underskudd', 30, bold=True, color=RED)
    fig.text(tx(15.3), ty(680), 'overskudd', 30, bold=True, color=GREEN)
    fig.text(tx(17.3), ty(K(17)) - 34, 'K(x)', 30, bold=True, color=PURPLE, italic=True)
    fig.text(tx(16.2), ty(I(16.8)) + 16, 'I(x)', 30, bold=True, color=GREEN, italic=True)
    save(fig, 's1-4-1-kostnad-inntekt-overskudd.svg')


def f_4_2():
    fig = Fig('s1')
    MC = lambda x: 0.28 * (x - 8) ** 2 + 9
    MR = lambda x: 30 - 0.8 * x
    # skjæring numerisk
    xs = 8
    for _ in range(60):
        xs = xs - (MC(xs) - MR(xs)) / (0.56 * (xs - 8) + 0.8)
    tx, ty = fig.coords(0, 22, 0, 42, box=(220, 130, 1380, 780), grid=False,
                        xticks=[], yticks=[], xlabel='antall enheter', ylabel='kroner per enhet')
    fig.plot(MC, xmin=1, xmax=20.5, color=PURPLE, width=5)
    fig.plot(MR, xmin=0, xmax=21, color=GREEN, width=5)
    fig.line(tx(xs), ty(MR(xs)), tx(xs), ty(0), GRAY, 3, dash='10 8')
    fig.point(xs, MR(xs), color=RED, r=11)
    fig.text(tx(xs), ty(0) + 44, 'optimal produksjon x*', 30, bold=True)
    fig.text(tx(2.6), ty(MC(2.6)) - 36, 'MC', 32, bold=True, color=PURPLE)
    fig.text(tx(19.5), ty(MR(19.5)) - 32, 'MR', 32, bold=True, color=GREEN)
    fig.text(W / 2, 80, 'størst overskudd når MR = MC', 38, bold=True)
    save(fig, 's1-4-2-grensekostnad-grenseinntekt.svg')


def f_4_5():
    fig = Fig('s1')
    tx, ty = fig.coords(0, 22, 0, 22, box=(230, 120, 1330, 780), grid=False,
                        xticks=[], yticks=[], xlabel='mengde', ylabel='pris')
    fig.plot(lambda x: 20 - x, xmin=0, xmax=10, color=PURPLE, width=7)
    fig.plot(lambda x: 20 - x, xmin=10, xmax=20, color=GREEN, width=7)
    fig.point(10, 10, color=fig.p['text'], r=11)
    fig.text(tx(10.5), ty(11.6), '|E| = 1: størst inntekt', 30, anchor='start', bold=True)
    fig.text(tx(5.6), ty(16.6), 'elastisk: |E| > 1', 32, anchor='start', bold=True, color=PURPLE)
    fig.text(tx(13.6), ty(8.0), 'uelastisk: |E| < 1', 32, anchor='start', bold=True, color=GREEN)
    save(fig, 's1-4-5-priselastisitet.svg')


def f_4_7():
    fig = Fig('s1')
    S = lambda x: 2 + 0.8 * x
    E = lambda x: 14 - 0.4 * x
    xe, pe = 10, 10
    tx, ty = fig.coords(0, 18, 0, 17, box=(230, 110, 1330, 770), grid=False,
                        xticks=[], yticks=[], xlabel='mengde', ylabel='pris')
    # konsumentoverskudd: trekant (0,14)-(0,10)-(10,10)
    fig.poly([(tx(0), ty(14)), (tx(0), ty(pe)), (tx(xe), ty(pe))], fill=PURPLE, opacity=0.18, close=True)
    # produsentoverskudd: trekant (0,2)-(0,10)-(10,10)
    fig.poly([(tx(0), ty(2)), (tx(0), ty(pe)), (tx(xe), ty(pe))], fill=GREEN, opacity=0.18, close=True)
    fig.plot(S, xmin=0, xmax=16, color=GREEN, width=5)
    fig.plot(E, xmin=0, xmax=16, color=PURPLE, width=5)
    fig.line(tx(0), ty(pe), tx(xe), ty(pe), GRAY, 2.5, dash='10 8')
    fig.line(tx(xe), ty(pe), tx(xe), ty(0), GRAY, 2.5, dash='10 8')
    fig.point(xe, pe, color=fig.p['text'], r=10)
    fig.text(tx(0) - 16, ty(pe) + 10, 'p*', 30, anchor='end', bold=True, italic=True)
    fig.text(tx(xe), ty(0) + 42, 'x*', 30, bold=True, italic=True)
    fig.text(tx(2.6), ty(11.6), 'konsumentoverskudd', 29, anchor='start', bold=True, color=PURPLE)
    fig.text(tx(2.6), ty(8.0), 'produsentoverskudd', 29, anchor='start', bold=True, color=GREEN)
    fig.text(tx(14.6), ty(S(15.4)), 'tilbud', 30, anchor='start', bold=True, color=GREEN)
    fig.text(tx(14.6), ty(E(15.6)), 'etterspørsel', 30, anchor='start', bold=True, color=PURPLE)
    save(fig, 's1-4-7-markedslikevekt-overskudd.svg')


def f_4_6():
    fig = Fig('s1')
    lonn = [100, 105, 110, 115, 120]
    kpi = [100, 103, 106, 109, 112]
    tx, ty = fig.coords(-0.7, 4.9, 90, 126, box=(240, 120, 1320, 740), grid=False,
                        xticks=[], yticks=[], xlabel='år', ylabel='indeks')
    for v in (100, 112, 120):
        fig.text(tx(-0.7) - 14, ty(v) + 9, str(v), 27, anchor='end')
        fig.line(tx(-0.7), ty(v), tx(-0.7) + 12, ty(v), fig.p['text'], 3)
    bw = 0.42
    for i, v in enumerate(lonn):
        fig.rect(tx(i - bw / 2), ty(v), tx(i + bw / 2) - tx(i - bw / 2), ty(90) - ty(v), fill=GREEN, opacity=0.85)
        fig.text(tx(i), ty(90) + 40, str(i), 28)
    fig.poly([(tx(i), ty(v)) for i, v in enumerate(kpi)], stroke=PURPLE, width=5)
    for i, v in enumerate(kpi):
        fig.circle(tx(i), ty(v), 8, fill=PURPLE)
    fig.text(tx(1.0), ty(120), 'lønnsindeks', 30, bold=True, color=GREEN)
    fig.text(tx(2.9), ty(102.5), 'konsumprisindeks', 30, bold=True, color=PURPLE)
    fig.text(W / 2, 832, 'lønn over priser: reallønna har økt', 33, bold=True)
    save(fig, 's1-4-6-indeks-reallonn.svg')


# ====================================================================
# Kapittel 5
# ====================================================================

def f_5_1a():
    fig = Fig('s1')
    root = (170, 450)
    gens = [('genser A', 240), ('genser B', 450), ('genser C', 660)]
    fig.circle(*root, 11, fill=fig.p['text'])
    leaves = []
    for gi, (glab, gy) in enumerate(gens):
        gx = 620
        fig.line(root[0], root[1], gx - 10, gy, GREEN, 4)
        fig.circle(gx, gy, 9, fill=GREEN)
        fig.text(gx - 14, gy - 30, glab, 28, anchor='end', color=GREEN, bold=True)
        for bi, blab in enumerate(['bukse 1', 'bukse 2']):
            ly = gy - 55 + bi * 110
            lx = 1080
            fig.line(gx, gy, lx - 10, ly, PURPLE, 4)
            fig.circle(lx, ly, 9, fill=PURPLE)
            fig.text(lx - 24, ly - 22, blab, 26, anchor='end', color=PURPLE)
            leaves.append((lx, ly, 'ABC'[gi], str(bi + 1)))
    for lx, ly, g, b in leaves:
        fig.rect(lx + 40, ly - 28, 56, 56, fill=GREEN, opacity=0.85, rx=8)
        fig.text(lx + 68, ly + 12, g, 30, color='#FFFFFF', bold=True)
        fig.rect(lx + 104, ly - 28, 56, 56, fill=PURPLE, opacity=0.85, rx=8)
        fig.text(lx + 132, ly + 12, b, 30, color='#FFFFFF', bold=True)
    fig.text(W / 2, 830, '3 · 2 = 6 mulige antrekk', 38, bold=True)
    save(fig, 's1-5-1-valgtre-multiplikasjon.svg')


def f_5_1b():
    fig = Fig('s1')
    fig.text(440, 130, 'ordnet (permutasjoner)', 33, bold=True, color=GREEN)
    fig.text(1190, 130, 'uordnet (kombinasjoner)', 33, bold=True, color=PURPLE)
    pairs = [['AB', 'BA'], ['AC', 'CA'], ['BC', 'CB']]
    bw, bh = 150, 92
    lpos = {}
    for r, row in enumerate(pairs):
        for c, pp in enumerate(row):
            x = 270 + c * 200
            y = 200 + r * 150
            fig.rect(x, y, bw, bh, fill=GREEN, opacity=0.16, stroke=GREEN, width=3, rx=12)
            fig.text(x + bw / 2, y + bh / 2 + 12, pp, 36, bold=True)
            lpos[pp] = (x, y)
    rpos = {}
    for r, pp in enumerate(['AB', 'AC', 'BC']):
        x, y = 1110, 200 + r * 150
        fig.rect(x, y, bw, bh, fill=PURPLE, opacity=0.16, stroke=PURPLE, width=3, rx=12)
        fig.text(x + bw / 2, y + bh / 2 + 12, pp, 36, bold=True)
        rpos[pp] = (x, y)
    for a, b in (('AB', 'AB'), ('BA', 'AB'), ('AC', 'AC'), ('CA', 'AC'), ('BC', 'BC'), ('CB', 'BC')):
        x1, y1 = lpos[a][0] + bw, lpos[a][1] + bh / 2
        x2, y2 = rpos[b][0], rpos[b][1] + bh / 2
        fig.arrow(x1 + 8, y1, x2 - 12, y2, GRAY, 2, head=10)
    fig.text(440, 750, 'P(3,2) = 6', 38, bold=True, color=GREEN)
    fig.text(1190, 750, 'C(3,2) = 3', 38, bold=True, color=PURPLE)
    save(fig, 's1-5-1-permutasjon-vs-kombinasjon.svg')


def f_5_2a():
    fig = Fig('s1')
    r = 150
    # venstre: utfallsrom med A og B
    fig.rect(120, 170, 620, 440, stroke=fig.p['text'], width=4, rx=8)
    c1, c2 = (340, 390), (520, 390)
    lens_path(fig, c1, c2, r, PURPLE, opacity=0.55)
    fig.circle(*c1, r, stroke=GREEN, width=5)
    fig.circle(*c2, r, stroke=PURPLE, width=5)
    fig.text(c1[0] - 80, c1[1] - 110, 'A', 38, bold=True, color=GREEN)
    fig.text(c2[0] + 80, c2[1] - 110, 'B', 38, bold=True, color=PURPLE)
    fig.text(430, 660, 'A ∩ B', 30, bold=True, color=PURPLE)
    fig.arrow(430, 632, 430, 430, GRAY, 2.5, head=10)
    # høyre: bare B igjen
    fig.rect(860, 170, 620, 440, stroke=GRAY, width=4, rx=8)
    fig.rect(860, 170, 620, 440, fill=GRAY, opacity=0.18)
    c1b, c2b = (1080, 390), (1260, 390)
    fig.circle(*c2b, r, fill=PURPLE, opacity=0.16)
    lens_path(fig, c1b, c2b, r, PURPLE, opacity=0.6)
    fig.circle(*c1b, r, stroke=GRAY, width=3)
    fig.circle(*c2b, r, stroke=PURPLE, width=6)
    fig.text(c2b[0] + 80, c2b[1] - 110, 'B', 38, bold=True, color=PURPLE)
    fig.text(1170, 660, 'B er det nye utfallsrommet', 29, bold=True)
    fig.text(W / 2, 800, 'P(A | B) = P(A ∩ B) / P(B)', 40, bold=True)
    save(fig, 's1-5-2-betinget-sannsynlighet-venn.svg')


def f_5_2b():
    fig = Fig('s1')
    root = (190, 420)
    fig.circle(*root, 11, fill=fig.p['text'])
    n1 = [('B', '0,3', 230), ('ikke B', '0,7', 620)]
    cond = {0: [('A', '0,8', 140, True), ('ikke A', '0,2', 330, False)],
            1: [('A', '0,4', 530, True), ('ikke A', '0,6', 720, False)]}
    for i, (lab, p, y) in enumerate(n1):
        x = 640
        hl = False
        fig.line(root[0], root[1], x - 12, y, GREEN, 5)
        fig.circle(x, y, 9, fill=GREEN)
        fig.text(x, y - 28, lab, 31, bold=True, color=GREEN)
        fig.text((root[0] + x) / 2, (root[1] + y) / 2 - 18, p, 29, color=GREEN, bold=True)
        for lab2, p2, y2, isA in cond[i]:
            x2 = 1130
            wdt = 7 if isA else 3.5
            fig.line(x + 90, y, x2 - 12, y2, PURPLE, wdt)
            fig.circle(x2, y2, 9, fill=PURPLE)
            fig.text(x2 + 26, y2 + 10, lab2, 31, anchor='start', bold=(isA), color=PURPLE)
            fig.text((x + 90 + x2) / 2, (y + y2) / 2 - 16, p2, 29, color=PURPLE, bold=True)
    fig.text(W / 2, 850, 'P(A) = 0,3 · 0,8 + 0,7 · 0,4 = 0,52', 40, bold=True)
    save(fig, 's1-5-2-totalsetningen-tre.svg')


def f_5_3():
    fig = Fig('s1')
    # toppblokker, riktig forhold 100:9900
    bx, bw_tot, by, bh = 150, 1300, 140, 90
    w_syk = bw_tot * 100 / 10000
    fig.rect(bx, by, w_syk, bh, fill=PURPLE)
    fig.rect(bx + w_syk, by, bw_tot - w_syk, bh, fill=GRAY, opacity=0.45)
    fig.text(bx + w_syk / 2, by - 22, '100 syke', 29, bold=True, color=PURPLE, anchor='start')
    fig.text(bx + w_syk + (bw_tot - w_syk) / 2, by + bh / 2 + 10, '9 900 friske', 30, bold=True)
    # mellomblokker: positive
    scale = 0.9  # px per person
    y2 = 420
    w95, w495 = 95 * scale, 495 * scale
    x95, x495 = 300, 800
    fig.arrow(bx + w_syk / 2, by + bh + 8, x95 + w95 / 2, y2 - 12, PURPLE, 3.5)
    fig.arrow(bx + w_syk + (bw_tot - w_syk) / 2, by + bh + 8, x495 + w495 / 2, y2 - 12, GREEN, 3.5)
    fig.rect(x95, y2, w95, 70, fill=PURPLE)
    fig.rect(x495, y2, w495, 70, fill=GREEN)
    fig.text(x95 + w95 / 2, y2 + 110, '95 positive', 29, bold=True, color=PURPLE)
    fig.text(x495 + w495 / 2, y2 + 110, '495 positive', 29, bold=True, color=GREEN)
    # bunnstolpe samlet, forhold 95:495
    y3, h3 = 640, 80
    tot = (95 + 495) * 1.6
    x3 = (W - tot) / 2
    fig.rect(x3, y3, 95 * 1.6, h3, fill=PURPLE)
    fig.rect(x3 + 95 * 1.6, y3, 495 * 1.6, h3, fill=GREEN)
    fig.arrow(x95 + w95 / 2, y2 + 130, x3 + 95 * 1.6 / 2, y3 - 12, GRAY, 2.5, head=10)
    fig.arrow(x495 + w495 / 2, y2 + 130, x3 + 95 * 1.6 + 495 * 1.6 / 2, y3 - 12, GRAY, 2.5, head=10)
    fig.text(W / 2, 820, 'P(syk | positiv) = 95/590 ≈ 16 %', 40, bold=True)
    save(fig, 's1-5-3-bayes-testparadoks.svg')


def f_5_4():
    fig = Fig('s1')
    # urne
    ux, uy, uw, uh = 180, 220, 420, 460
    fig.poly([(ux, uy), (ux + 40, uy + uh), (ux + uw - 40, uy + uh), (ux + uw, uy)],
             stroke=fig.p['text'], width=6)
    pos = [(280, 360), (380, 330), (480, 370), (310, 460), (420, 450),
           (510, 470), (270, 560), (360, 555), (450, 560), (530, 560), (330, 630), (440, 640)]
    for i, (x, y) in enumerate(pos):
        fig.circle(x, y, 34, fill=PURPLE if i < 5 else GREEN, stroke=fig.p['bg'], width=3)
    fig.text(ux + uw / 2, uy + uh + 70, '5 lilla, 7 grønne', 32, bold=True)
    # pil og trekk
    fig.arrow(680, 450, 980, 450, fig.p['text'], 5)
    fig.text(830, 396, 'trekk 3 uten', 29, bold=True)
    fig.text(830, 510, 'tilbakelegging', 29, bold=True)
    for i, c in enumerate([PURPLE, PURPLE, GREEN]):
        fig.circle(1120 + i * 110, 450, 42, fill=c, stroke=fig.p['bg'], width=3)
    fig.text(1230, 620, 'P(2 lilla) ≈ 0,32', 36, bold=True)
    save(fig, 's1-5-4-hypergeometrisk-urne.svg')


def f_5_5():
    fig = Fig('s1')
    tx, ty = fig.coords(0, 7.4, 0, 0.23, box=(230, 150, 1330, 700), grid=False,
                        xticks=[1, 2, 3, 4, 5, 6], yticks=[], xlabel='x', ylabel='P(X = x)')
    dist_bars(fig, tx, ty, {k: 1 / 6 for k in range(1, 7)}, 0.7, GREEN)
    fig.text(tx(1), ty(1 / 6) - 18, '1/6', 29, bold=True)
    fig.line(tx(3.5), ty(0.215), tx(3.5), ty(0), PURPLE, 4, dash='12 10')
    fig.text(tx(3.5) + 18, ty(0.205), 'E(X) = 3,5: tyngdepunktet', 31, anchor='start', color=PURPLE, bold=True)
    # balansepunkt-trekant under aksen
    bx, byy = tx(3.5), ty(0) + 14
    fig.poly([(bx, byy), (bx - 26, byy + 44), (bx + 26, byy + 44)], fill=PURPLE, close=True)
    save(fig, 's1-5-5-forventningsverdi-terning.svg')


def f_5_6():
    fig = Fig('s1')
    sq = 660
    x0, y0 = 150, 140
    rng = random.Random(7)
    fig.rect(x0, y0, sq, sq, stroke=fig.p['text'], width=5)
    # kvartsirkel fra nedre venstre hjørne, radius = side
    cx, cy = x0, y0 + sq
    pts = [(cx + sq * math.cos(-math.pi / 2 * i / 100), cy + sq * math.sin(-math.pi / 2 * i / 100)) for i in range(101)]
    fig.poly(pts, stroke=fig.p['text'], width=4)
    inside = 0
    for _ in range(320):
        px, py = rng.random(), rng.random()
        inn = px * px + py * py <= 1
        inside += inn
        fig.circle(x0 + px * sq, y0 + sq - py * sq, 6, fill=GREEN if inn else PURPLE)
    fig.text(1180, 380, '785 av 1000 innenfor', 34, bold=True)
    fig.text(1180, 470, '4 · 0,785 ≈ 3,14', 38, bold=True, color=GREEN)
    save(fig, 's1-5-6-monte-carlo-pi.svg')


# ====================================================================
# Kapittel 6
# ====================================================================

def f_6_1():
    fig = Fig('s1')
    pmf = {k: (6 - abs(k - 7)) / 36 for k in range(2, 13)}
    tx, ty = fig.coords(1, 13.4, 0, 0.2, box=(230, 130, 1330, 700), grid=False,
                        xticks=list(range(2, 13)), yticks=[], xlabel='sum', ylabel='sannsynlighet')
    dist_bars(fig, tx, ty, pmf, 0.78, GREEN, highlight=7, hcolor=PURPLE)
    fig.line(tx(7), ty(0.192), tx(7), ty(6 / 36), GRAY, 3, dash='10 8')
    fig.text(tx(7), ty(0.196) - 14, 'E(X) = 7', 30, bold=True)
    fig.text(tx(7) + 30, ty(6 / 36) - 40, 'P(X = 7) = 6/36', 30, anchor='start', bold=True, color=PURPLE)
    save(fig, 's1-6-1-to-terninger-fordeling.svg')


def f_6_2():
    fig = Fig('s1')
    panels = [(160, 0.5, 'p = 0,5: symmetrisk', 5), (880, 0.2, 'p = 0,2: skjev', 2)]
    for bx0, p, lab, kmax in panels:
        pmf = {k: binom_pmf(10, p, k) for k in range(11)}
        tx, ty = fig.coords(-1, 11.4, 0, 0.36, box=(bx0, 170, bx0 + 560, 660), grid=False,
                            xticks=list(range(0, 11, 2)), yticks=[], xlabel='k')
        dist_bars(fig, tx, ty, pmf, 0.8, GREEN, highlight=kmax, hcolor=PURPLE)
        fig.text(bx0 + 280, 780, lab, 32, bold=True)
    save(fig, 's1-6-2-binomisk-to-fasonger.svg')


def f_6_3a():
    fig = Fig('s1')
    zones = [(-3, -2, GREEN, 0.16), (2, 3, GREEN, 0.16),
             (-2, -1, GREEN, 0.34), (1, 2, GREEN, 0.34),
             (-1, 1, GREEN, 0.62)]
    xlab = {-3: 'μ − 3σ', -2: 'μ − 2σ', -1: 'μ − σ', 0: 'μ', 1: 'μ + σ', 2: 'μ + 2σ', 3: 'μ + 3σ'}
    tx, ty, f = fig.normal_curve(0, 1, box=(170, 120, 1430, 560), zones=zones, xlabels=xlab)
    fig.line(tx(0), ty(f(0)) - 6, tx(0), ty(0), PURPLE, 4, dash='12 10')
    rows = [(-1, 1, '68 %', 660), (-2, 2, '95 %', 730), (-3, 3, '99,7 %', 800)]
    for a, b, lab, y in rows:
        dbl_arrow(fig, tx(a), y, tx(b), y, fig.p['text'], 3.5)
        fig.text((tx(a) + tx(b)) / 2, y - 14, lab, 30, bold=True)
    save(fig, 's1-6-3-normalfordeling-68-95-997.svg')


def f_6_3b():
    fig = Fig('s1')
    # øverst: cm-skala
    tx1, ty1, f1 = fig.normal_curve(170, 8, box=(230, 70, 1370, 380),
                                    zones=[(1.5, 4, PURPLE, 0.4)],
                                    xlabels={-3: '146', -2: '154', -1: '162', 0: '170', 1: '178', 2: '186', 3: '194'})
    fig.line(tx1(182), ty1(f1(182)), tx1(182), ty1(0), PURPLE, 4, dash='10 8')
    fig.circle(tx1(182), ty1(f1(182)), 10, fill=PURPLE)
    fig.text(tx1(182) + 60, ty1(f1(182)) - 26, 'x = 182 cm', 28, anchor='start', bold=True, color=PURPLE)
    # nederst: standardnormal
    tx2, ty2, f2 = fig.normal_curve(0, 1, box=(230, 500, 1370, 810),
                                    zones=[(1.5, 4, PURPLE, 0.4)],
                                    xlabels={k: fmt(k) for k in range(-3, 4)})
    fig.line(tx2(1.5), ty2(f2(1.5)), tx2(1.5), ty2(0), PURPLE, 4, dash='10 8')
    fig.text(tx2(1.5) + 24, ty2(f2(1.5)) - 24, 'z = 1,5', 28, anchor='start', bold=True, color=PURPLE)
    fig.arrow(tx1(182) + 130, 415, tx2(1.5) + 130, 480, fig.p['text'], 3.5)
    fig.text(tx1(182) + 170, 462, 'z = (182 − 170)/8 = 1,5', 30, anchor='start', bold=True)
    save(fig, 's1-6-3-z-score-standardisering.svg')


def f_6_4():
    fig = Fig('s1')
    tx, ty, f = fig.normal_curve(0, 1, box=(190, 150, 1410, 680),
                                 zones=[(-1, 0.5, PURPLE, 0.45)],
                                 xlabels={k: fmt(k) for k in range(-3, 4)})
    fig.text(tx(-0.25), ty(f(0) * 1.07), 'P(−1 < Z < 0,5) ≈ 0,53', 34, bold=True, color=PURPLE)
    fig.text(W / 2, 810, 'hele arealet under kurven er 1', 32)
    save(fig, 's1-6-4-normalfordeling-areal.svg')


def f_6_6():
    fig = Fig('s1')
    n, p = 50, 0.5
    mu, sig = 25, math.sqrt(50 * 0.25)
    pmf = {k: binom_pmf(n, p, k) for k in range(13, 38)}
    tx, ty = fig.coords(12, 38, 0, 0.135, box=(220, 160, 1380, 740), grid=False,
                        xticks=[15, 20, 25, 30, 35], yticks=[], xlabel='k')
    dist_bars(fig, tx, ty, pmf, 0.85, GREEN)
    fig.plot(lambda x: npdf(x, mu, sig), xmin=13, xmax=37, color=PURPLE, width=5)
    fig.text(W / 2, 90, 'μ = 25, σ ≈ 3,5', 38, bold=True)
    save(fig, 's1-6-6-normalapproksimasjon.svg')


def f_6_7():
    fig = Fig('s1')
    rng = random.Random(11)
    cols, rows = 6, 5
    labs = ['tilfeldig utvalg', 'systematisk utvalg', 'stratifisert utvalg']
    rand_pick = set()
    while len(rand_pick) < 6:
        rand_pick.add((rng.randrange(cols), rng.randrange(rows)))
    for pi, bx0 in enumerate((110, 610, 1110)):
        if pi == 2:
            # to strata-soner
            fig.rect(bx0 - 20, 180 - 30, 420, 2 * 86 + 30, fill=PURPLE, opacity=0.10, rx=10)
            fig.rect(bx0 - 20, 180 + 2 * 86 - 16, 420, 3 * 86 + 16, fill=GREEN, opacity=0.10, rx=10)
        for r in range(rows):
            for c in range(cols):
                x = bx0 + 30 + c * 64
                y = 210 + r * 86
                idx = r * cols + c
                if pi == 0:
                    sel = (c, r) in rand_pick
                elif pi == 1:
                    sel = idx % 5 == 2
                else:
                    sel = (r < 2 and c in (1, 4)) or (r >= 2 and c in (0, 3) and r != 3) or (r == 3 and c == 5)
                col = GREEN if sel else GRAY
                fig.circle(x, y, 17 if sel else 13, fill=col, opacity=1 if sel else 0.55)
        fig.text(bx0 + 190, 700, labs[pi], 31, bold=True)
    save(fig, 's1-6-7-utvalgsmetoder.svg')


# ====================================================================
# Kapittel 7
# ====================================================================

def f_7_1():
    fig = Fig('s1')
    xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    res = [0.9, -1.1, 0.6, -0.5, 1.2, -0.9, 0.5, -1.3, 1.0, -0.4]
    a, b = 0.85, 1.6
    ys = [a * x + b + r for x, r in zip(xs, res)]
    tx, ty = fig.coords(0, 11.4, 0, 12.5, box=(220, 110, 1330, 740), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(lambda x: a * x + b, xmin=0.4, xmax=10.8, color=PURPLE, width=5)
    for x, y in zip(xs, ys):
        fig.line(tx(x), ty(y), tx(x), ty(a * x + b), RED, 2.5, dash='7 7')
        fig.circle(tx(x), ty(y), 10, fill=GREEN)
    fig.text(tx(5) + 26, (ty(ys[4]) + ty(a * 5 + b)) / 2 + 60, 'residual', 29, anchor='start', bold=True, color=RED)
    fig.arrow(tx(5) + 90, (ty(ys[4]) + ty(a * 5 + b)) / 2 + 44, tx(5) + 10, (ty(ys[4]) + ty(a * 5 + b)) / 2, RED, 2.5, head=10)
    fig.text(W / 2, 845, 'R² = 0,89', 36, bold=True)
    save(fig, 's1-7-1-regresjonslinje-residualer.svg')


def f_7_2a():
    fig = Fig('s1')
    rng = random.Random(3)
    panels = [('r = 1', 1, 0.0), ('r = 0,7', 1, 1.5), ('r = 0', 0, 0), ('r = −0,7', -1, 1.5), ('r = −1', -1, 0.0)]
    pw = 256
    for i, (lab, slope, noise) in enumerate(panels):
        bx0 = 90 + i * 290
        box = (bx0, 250, bx0 + pw, 250 + pw)
        panel_axes(fig, box[0], box[1], box[2], box[3])
        for _ in range(14):
            x = rng.uniform(0.08, 0.92)
            if slope == 0:
                y = 0.5 + rng.gauss(0, 0.2)
                x = 0.5 + rng.gauss(0, 0.2)
            else:
                y = 0.5 + slope * (x - 0.5) + rng.gauss(0, 0.06 * noise)
            y = min(max(y, 0.06), 0.94)
            x = min(max(x, 0.06), 0.94)
            fig.circle(box[0] + x * pw, box[3] - y * pw, 8, fill=GREEN)
        fig.text(bx0 + pw / 2, 620, lab, 32, bold=True)
    save(fig, 's1-7-2-korrelasjonsgalleri.svg')


def f_7_2b():
    fig = Fig('s1')
    round_box(fig, 580, 120, 440, 110, 'Temperatur\n(felles årsak)', PURPLE + '26', size=30, stroke=PURPLE)
    round_box(fig, 170, 470, 400, 100, 'Iskremsalg', GREEN + '22', size=31, stroke=GREEN)
    round_box(fig, 1030, 470, 400, 100, 'Drukningsulykker', GREEN + '22', size=31, stroke=GREEN)
    fig.arrow(660, 240, 410, 455, GREEN, 5)
    fig.arrow(940, 240, 1190, 455, GREEN, 5)
    # rød stiplet pil med kryss
    fig.line(590, 520, 1010, 520, RED, 4, dash='16 12')
    fig.arrow(990, 520, 1014, 520, RED, 4)
    cx = 800
    fig.line(cx - 22, 498, cx + 22, 542, RED, 6)
    fig.line(cx - 22, 542, cx + 22, 498, RED, 6)
    fig.text(800, 600, 'samvariasjon, ikke årsak', 30, bold=True, color=RED)
    fig.text(W / 2, 790, 'korrelasjon betyr ikke kausalitet', 38, bold=True)
    save(fig, 's1-7-2-konfunderende-variabel.svg')


def f_7_4():
    fig = Fig('s1')
    rng = random.Random(5)
    for pi, bx0 in enumerate((140, 870)):
        x0, x1p = bx0, bx0 + 600
        ymid = 400
        fig.line(x0, ymid, x1p, ymid, fig.p['text'], 4)
        fig.arrow(x0, 660, x0, 160, fig.p['text'], 3)
        for i in range(12):
            x = x0 + 40 + i * 44
            t = (i - 5.5) / 5.5
            if pi == 0:
                dy = rng.uniform(-105, 105)
            else:
                dy = -150 * (t * t) + 95 + rng.uniform(-16, 16)
                dy = -dy  # positive ytterst, negative i midten
            fig.circle(x, ymid - dy, 9, fill=GREEN)
        if pi == 0:
            fig.line(bx0 + 230, 720, bx0 + 262, 756, GREEN, 8)
            fig.line(bx0 + 262, 756, bx0 + 322, 686, GREEN, 8)
            fig.text(bx0 + 300, 825, 'ingen mønster: lineær modell passer', 28, bold=True)
        else:
            tx0 = bx0 + 270
            fig.poly([(tx0, 752), (tx0 + 60, 752), (tx0 + 30, 696)], stroke=PURPLE, width=6, close=True)
            fig.text(tx0 + 30, 743, '!', 32, bold=True, color=PURPLE)
            fig.text(bx0 + 300, 825, 'buet mønster: ikke lineær', 28, bold=True)
    save(fig, 's1-7-4-residualplott.svg')


# ====================================================================
# Kapittel 8
# ====================================================================

def f_8_1():
    fig = Fig('s1')
    boxes = [('Virkelig problem', 160, 160, GREEN), ('Matematisk modell', 940, 160, PURPLE),
             ('Løsning', 940, 600, GREEN), ('Tolkning og vurdering', 160, 600, PURPLE)]
    bw, bh = 500, 140
    for lab, x, y, c in boxes:
        round_box(fig, x, y, bw, bh, lab, c + '22', size=33, stroke=c)
    fig.arrow(160 + bw + 16, 230, 940 - 16, 230, fig.p['text'], 7, head=18)
    fig.arrow(1190, 160 + bh + 14, 1190, 600 - 14, fig.p['text'], 7, head=18)
    fig.arrow(940 - 16, 670, 160 + bw + 16, 670, fig.p['text'], 7, head=18)
    # siste pil: fra Tolkning og vurdering tilbake til Matematisk modell
    fig.arrow(420 + 160, 600 - 14, 1100 - 14, 160 + bh + 14, fig.p['text'], 7, head=18)
    fig.text(860, 520, 'forbedre modellen', 29, anchor='start', bold=True)
    save(fig, 's1-8-1-modelleringssyklus.svg')


def f_8_2a():
    fig = Fig('s1')
    f = lambda x: x * x - 2
    a, b = 1.0, 2.0
    m = 1.5
    tx, ty = fig.coords(0.5, 2.5, -1.6, 2.6, box=(230, 120, 1370, 720), grid=False,
                        xticks=[], yticks=[])
    fig.plot(f, xmin=0.55, xmax=2.1, color=GREEN, width=5)
    for v, lab in ((a, 'a'), (b, 'b'), (m, 'm')):
        fig.line(tx(v), ty(0) - 14, tx(v), ty(0) + 14, PURPLE if lab == 'm' else fig.p['text'], 4)
        fig.text(tx(v), ty(0) + 52, lab, 32, bold=True, italic=True, color=PURPLE if lab == 'm' else fig.p['text'])
        fig.circle(tx(v), ty(f(v)), 10, fill=GREEN if lab != 'm' else PURPLE)
        fig.line(tx(v), ty(0), tx(v), ty(f(v)), GRAY, 2, dash='7 7')
    # beholdt intervall [a, m] (f(a)<0, f(m)>0)
    fig.line(tx(a), ty(0) + 86, tx(m), ty(0) + 86, GREEN, 10)
    fig.text((tx(a) + tx(m)) / 2, ty(0) + 134, 'beholdes', 28, bold=True, color=GREEN)
    fig.arrow(tx(m) + 100, ty(0) + 86, tx(math.sqrt(2)) + 30, ty(0) + 30, GRAY, 3, head=12)
    fig.text(tx(m) + 116, ty(0) + 96, 'gjenta mot nullpunktet', 28, anchor='start', color=GRAY, bold=True)
    fig.text(W / 2, 70, 'fortegnsskifte: nullpunktet er i intervallet', 36, bold=True)
    save(fig, 's1-8-2-halveringsmetoden.svg')


def f_8_2b():
    fig = Fig('s1')
    f = lambda x: x * x - 3
    df = lambda x: 2 * x
    x0v = 3.0
    x1v = x0v - f(x0v) / df(x0v)   # 2.0
    x2v = x1v - f(x1v) / df(x1v)   # 1.75
    tx, ty = fig.coords(0.8, 3.6, -1.5, 7, box=(230, 110, 1370, 760), grid=False,
                        xticks=[], yticks=[])
    fig.plot(f, xmin=0.9, xmax=3.15, color=GREEN, width=5)
    for xv, xn, lab in ((x0v, x1v, 'x₀'), (x1v, x2v, 'x₁')):
        fig.line(tx(xv), ty(0), tx(xv), ty(f(xv)), GRAY, 2.5, dash='8 8')
        fig.line(tx(xv), ty(f(xv)), tx(xn), ty(0), PURPLE, 4)
        fig.circle(tx(xv), ty(f(xv)), 9, fill=GREEN)
    for xv, lab in ((x0v, 'x₀'), (x1v, 'x₁'), (x2v, 'x₂')):
        fig.line(tx(xv), ty(0) - 12, tx(xv), ty(0) + 12, fig.p['text'], 3.5)
        fig.text(tx(xv), ty(0) + 50, lab, 31, bold=True, italic=True)
    fig.circle(tx(math.sqrt(3)), ty(0), 9, fill=RED)
    fig.rect(280, 150, 600, 96, fill=fig.p['bg'], stroke=GREEN, width=4, rx=12)
    fig.text(580, 212, 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)', 36, bold=True)
    save(fig, 's1-8-2-newtons-metode.svg')


def f_8_2c():
    fig = Fig('s1')
    f = lambda x: 0.28 * x * x + 0.9
    tx, ty = fig.coords(-0.4, 4.6, 0, 6.4, box=(230, 130, 1370, 720), grid=False,
                        xticks=[0, 1, 2, 3, 4], yticks=[])
    for i in range(4):
        a, b = i, i + 1
        fig.poly([(tx(a), ty(0)), (tx(a), ty(f(a))), (tx(b), ty(f(b))), (tx(b), ty(0))],
                 fill=PURPLE, opacity=0.30, close=True, stroke=PURPLE, width=2.5)
    fig.plot(f, xmin=0, xmax=4.35, color=GREEN, width=5)
    fig.text(W / 2, 830, 'flere trapeser gir bedre tilnærming', 34, bold=True)
    save(fig, 's1-8-2-trapesmetoden.svg')


def f_8_3():
    fig = Fig('s1')
    tx, ty = fig.coords(-0.5, 6.5, -0.5, 6.5, box=(280, 110, 1180, 790), grid=True,
                        xticks=[1, 2, 3, 4, 5, 6], yticks=[1, 2, 3, 4, 5, 6], xlabel='x', ylabel='y')
    # mulighetsområde: x+2y<=8, 3x+2y<=12, x,y>=0 -> hjørner (0,0),(4,0),(2,3),(0,4)
    verts = [(0, 0), (4, 0), (2, 3), (0, 4)]
    fig.poly([(tx(x), ty(y)) for x, y in verts], fill=GREEN, opacity=0.22, close=True, stroke=GREEN, width=4)
    fig.plot(lambda x: (8 - x) / 2, xmin=-0.3, xmax=6.3, color=fig.p['text'], width=3)
    fig.plot(lambda x: (12 - 3 * x) / 2, xmin=-0.3, xmax=4.3, color=fig.p['text'], width=3)
    for x, y in verts:
        fig.point(x, y, color=GREEN, r=9)
    # nivålinjer z = 3x + 4y: z = 6, 12, 18
    for z in (6, 12):
        fig.plot(lambda x, z=z: (z - 3 * x) / 4, xmin=-0.3, xmax=min(6.3, z / 3 + 0.3), color=PURPLE, width=3, dash='14 10')
    fig.plot(lambda x: (18 - 3 * x) / 4, xmin=-0.3, xmax=6.3, color=PURPLE, width=3, dash='14 10')
    fig.point(2, 3, color=PURPLE, r=13)
    fig.text(tx(2.25), ty(3.4), 'optimal løsning i et hjørne', 30, anchor='start', bold=True, color=PURPLE)
    fig.text(tx(1.2), ty(1.25), 'mulighetsområde', 31, anchor='start', bold=True, color=GREEN)
    save(fig, 's1-8-3-linear-optimering.svg')


def f_8_4():
    fig = Fig('s1')
    rng = random.Random(9)
    xs = list(range(10))
    ys = [2.2 * 1.42 ** x * rng.uniform(0.93, 1.07) for x in xs]
    # lineær tilpasning (minste kvadrater)
    n = len(xs)
    sx, sy = sum(xs), sum(ys)
    sxx = sum(x * x for x in xs)
    sxy = sum(x * y for x, y in zip(xs, ys))
    a_lin = (n * sxy - sx * sy) / (n * sxx - sx * sx)
    b_lin = (sy - a_lin * sx) / n
    panels = [('lineær: R² = 0,84', True), ('eksponentiell: R² = 0,99', False)]
    for pi, (lab, lin) in enumerate(panels):
        bx0 = 140 + pi * 730
        tx, ty = fig.coords(-0.8, 10.4, 0, 80, box=(bx0, 150, bx0 + 600, 690), grid=False,
                            xticks=[], yticks=[], xlabel='x', ylabel='y' if pi == 0 else '')
        if lin:
            fig.plot(lambda x: a_lin * x + b_lin, xmin=-0.4, xmax=9.9, color=PURPLE, width=4.5)
        else:
            fig.plot(lambda x: 2.2 * 1.42 ** x, xmin=-0.4, xmax=10.1, color=PURPLE, width=4.5)
        for x, y in zip(xs, ys):
            fig.circle(tx(x), ty(y), 9, fill=GREEN)
        fig.text(bx0 + 300, 775, lab, 32, bold=True)
    fig.text(W / 2, 860, 'vurder både R² og residualmønster', 31, bold=True)
    save(fig, 's1-8-4-modellvalg-datasett.svg')


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for name, fn in sorted(globals().items()):
        if name.startswith('f_') and callable(fn):
            fn()
