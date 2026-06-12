#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk S2.
Kjør: python3 scripts/svg/figurer-s2.py  (fra repo-rot)
Output: public/images/content/s2/*.svg
"""
import math
import random
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, W, H, fmt

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'images', 'content', 's2')

BLUE = '#1B4F8A'    # main
RED = '#C0392B'     # accent
LBLUE = '#5C84B1'   # extra
PURPLE = '#8E44AD'  # warn
GRAY = '#8A8F96'


def save(fig, name):
    fig.save(os.path.join(OUT, name))
    print('skrev', name)


# ---------- hjelpefunksjoner (nye primitiver, kun i denne fila) ----------

def npdf(x, mu=0, s=1):
    return math.exp(-((x - mu) ** 2) / (2 * s * s)) / (s * math.sqrt(2 * math.pi))


def binom_pmf(n, p, k):
    return math.comb(n, k) * p ** k * (1 - p) ** (n - k)


def dbl_arrow(fig, x1, y1, x2, y2, color, width=4, head=13):
    fig.line(x1, y1, x2, y2, color, width)
    for (ax, ay, bx, by) in ((x1, y1, x2, y2), (x2, y2, x1, y1)):
        ang = math.atan2(ay - by, ax - bx)
        for da in (math.radians(150), math.radians(-150)):
            fig.line(ax, ay, ax + head * math.cos(ang + da), ay + head * math.sin(ang + da), color, width)


def dist_bars(fig, tx, ty, pmf, bw_units, color, highlight=None, hcolor=None, opacity=1):
    for k, p in pmf.items():
        hit = highlight is not None and (k <= highlight if isinstance(highlight, (int, float)) else False)
        c = hcolor if hit else color
        x0px, x1px = tx(k - bw_units / 2), tx(k + bw_units / 2)
        fig.rect(x0px, ty(p), x1px - x0px, ty(0) - ty(p), fill=c, stroke=fig.p['bg'], width=1.5, opacity=opacity)


def round_box(fig, x, y, w, h, label, fill, size=29, stroke=None):
    fig.rect(x, y, w, h, fill=fill, stroke=stroke or fig.p['text'], width=3, rx=16)
    lines = label.split('\n')
    for i, ln in enumerate(lines):
        fig.text(x + w / 2, y + h / 2 + 10 + (i - (len(lines) - 1) / 2) * (size + 8), ln, size, bold=True)


def ellipse(fig, cx, cy, rx, ry, fill=None, stroke=None, width=3, opacity=1, dash=None):
    f = fill or 'none'
    s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
    d = f' stroke-dasharray="{dash}"' if dash else ''
    fig.raw(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="{f}"{s}{d} opacity="{opacity}"/>')


def half_ellipse(fig, cx, cy, rx, ry, upper, stroke, width=3, dash=None, fill=None):
    """Halv ellipse (bue) - upper=True gir øvre halvdel."""
    sweep = 1 if upper else 0
    f = fill or 'none'
    d = f' stroke-dasharray="{dash}"' if dash else ''
    fig.raw(f'<path d="M {cx - rx:.1f},{cy:.1f} A {rx:.1f},{ry:.1f} 0 0 {sweep} {cx + rx:.1f},{cy:.1f}" '
            f'fill="{f}" stroke="{stroke}" stroke-width="{width}"{d}/>')


# ====================================================================
# Kapittel 1: Integrasjon
# ====================================================================

def f_1_1():
    fig = Fig('s2')
    tx, ty = fig.coords(-2.6, 2.6, -3.2, 6.4, box=(230, 110, 1370, 800), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    Cs = [(-2, 'C = −2'), (0, 'C = 0'), (1, 'C = 1'), (3, 'C = 3')]
    for C, lab in Cs:
        fig.plot(lambda x, C=C: x * x + C, color=BLUE, width=4.5)
    # etiketter i parabel-bunnene, med bakgrunnsfelt så aksen ikke skjærer teksten
    for C, lab in Cs:
        fig.rect(tx(0) - 62, ty(C + 0.5) - 21, 124, 40, fill=fig.p['bg'])
        fig.text(tx(0), ty(C + 0.5) + 9, lab, 27, color=BLUE, bold=True)
    # tangentstreker i x = 1 (alle med stigning 2)
    for C, _ in Cs:
        x0, y0 = 1, 1 + C
        dx = 0.32
        fig.line(tx(x0 - dx), ty(y0 - 2 * dx), tx(x0 + dx), ty(y0 + 2 * dx), RED, 5)
    fig.text(tx(0.3), ty(6.0), 'samme deriverte: vertikale kopier', 30, bold=True, color=RED)
    fig.rect(280, 700, 460, 92, fill=fig.p['bg'], stroke=BLUE, width=4, rx=12)
    fig.text(510, 760, '∫2x dx = x² + C', 36, bold=True)
    save(fig, 's2-1-1-antiderivert-familie.svg')


def f_1_2a():
    fig = Fig('s2')
    tx, ty = fig.coords(-0.8, 2.9, -0.5, 5.4, box=(280, 110, 1320, 780), grid=True,
                        xticks=[1, 2], yticks=[1, 2, 3, 4], xlabel='x', ylabel='y')
    fig.shade_under(lambda x: x * x, 0, 2, color=RED, opacity=0.4)
    fig.line(tx(2), ty(0), tx(2), ty(4), RED, 3.5)
    fig.plot(lambda x: x * x, xmin=-0.7, xmax=2.3, color=BLUE, width=5)
    fig.text(tx(1.45), ty(0.85), '∫₀² x² dx = 8/3', 34, bold=True)
    save(fig, 's2-1-2-bestemt-integral-areal.svg')


def f_1_2b():
    fig = Fig('s2')
    f = lambda x: 0.18 * (x - 1) ** 2 + 1.4
    a, xv = 1.5, 6.2
    tx, ty = fig.coords(0, 8.4, 0, 7.4, box=(230, 130, 1370, 760), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.shade_under(f, a, xv, color=RED, opacity=0.32)
    # smal mørkere stripe ytterst
    dxw = 0.32
    fig.poly([(tx(xv - dxw), ty(0)), (tx(xv - dxw), ty(f(xv - dxw))), (tx(xv), ty(f(xv))), (tx(xv), ty(0))],
             fill=RED, opacity=0.65, close=True)
    fig.plot(f, xmin=0.3, xmax=7.9, color=BLUE, width=5)
    for v, lab in ((a, 'a'), (xv, 'x')):
        fig.line(tx(v), ty(0) - 12, tx(v), ty(0) + 12, fig.p['text'], 3.5)
        fig.text(tx(v), ty(0) + 50, lab, 32, bold=True, italic=True)
    fig.text(tx((a + xv) / 2 - 0.5), ty(0.9), 'A(x)', 36, bold=True)
    fig.text(tx(xv - dxw / 2), ty(0) - 22, 'dx', 27, bold=True, color=RED)
    fig.text(tx(xv) + 20, ty(f(xv) / 2), 'f(x)', 29, anchor='start', bold=True, color=RED, italic=True)
    fig.text(tx(5.4), ty(6.4), 'A′(x) = f(x)', 36, bold=True)
    save(fig, 's2-1-2-fundamentalteoremet.svg')


def f_1_3a():
    fig = Fig('s2')
    tx, ty = fig.coords(-0.35, 1.5, -0.25, 1.35, box=(290, 110, 1310, 770), grid=True,
                        xticks=[1], yticks=[1], xlabel='x', ylabel='y')
    # området mellom y=x og y=x^2 fra 0 til 1
    pts = [(tx(i / 100), ty(i / 100)) for i in range(101)]
    pts += [(tx(x / 100), ty((x / 100) ** 2)) for x in range(100, -1, -1)]
    fig.poly(pts, fill=RED, opacity=0.4, close=True)
    fig.plot(lambda x: x, xmin=-0.25, xmax=1.35, color=BLUE, width=5)
    fig.plot(lambda x: x * x, xmin=-0.3, xmax=1.16, color=BLUE, width=5)
    fig.point(0, 0, color=RED, r=10)
    fig.point(1, 1, color=RED, r=10)
    fig.text(tx(0.42), ty(0.78), 'A = ∫₀¹ (x − x²) dx = 1/6', 32, bold=True, anchor='middle')
    fig.arrow(tx(0.52), ty(0.71), tx(0.58), ty(0.45), GRAY, 3, head=11)
    fig.text(W / 2, 855, 'øverste kurve minus nederste kurve', 33, bold=True)
    save(fig, 's2-1-3-areal-mellom-kurver.svg')


def f_1_3b():
    fig = Fig('s2')
    P = math.pi
    tx, ty = fig.coords(-0.5, 2 * P + 0.5, -1.5, 1.5, box=(190, 130, 1410, 690), grid=False,
                        xticks=[], yticks=[])
    fig.shade_under(math.sin, 0, P, color=BLUE, opacity=0.35)
    fig.shade_under(math.sin, P, 2 * P, color=RED, opacity=0.35)
    fig.plot(math.sin, xmin=-0.3, xmax=2 * P + 0.3, color=BLUE, width=5)
    for v, lab in ((0, '0'), (P, 'π'), (2 * P, '2π')):
        fig.line(tx(v), ty(0) - 11, tx(v), ty(0) + 11, fig.p['text'], 3.5)
        fig.text(tx(v) + 22, ty(0) + 48, lab, 30, bold=True)
    fig.text(tx(P / 2), ty(0.45), '+2', 40, bold=True, color=BLUE)
    fig.text(tx(3 * P / 2), ty(-0.45), '−2', 40, bold=True, color=RED)
    fig.text(W / 2, 830, 'fortegnsareal 0, samlet areal 4: del opp ved nullpunktet', 33, bold=True)
    save(fig, 's2-1-3-areal-under-x-aksen.svg')


def f_1_4():
    fig = Fig('s2')
    f = lambda x: 2.6 + 1.1 * math.sin(1.4 * x) + 0.4 * math.sin(3.1 * x)
    a, b = 0.8, 7.6
    # gjennomsnitt numerisk
    n = 2000
    avg = sum(f(a + (b - a) * i / n) for i in range(n + 1)) / (n + 1)
    tx, ty = fig.coords(0, 8.6, 0, 5.2, box=(230, 130, 1370, 700), grid=False,
                        xticks=[], yticks=[])
    fig.rect(tx(a), ty(avg), tx(b) - tx(a), ty(0) - ty(avg), fill=RED, opacity=0.30, stroke=RED, width=3)
    fig.plot(f, xmin=0.2, xmax=8.2, color=BLUE, width=5)
    for v, lab in ((a, 'a'), (b, 'b')):
        fig.line(tx(v), ty(0) - 12, tx(v), ty(0) + 12, fig.p['text'], 3.5)
        fig.text(tx(v), ty(0) + 50, lab, 32, bold=True, italic=True)
    fig.text(tx((a + b) / 2), ty(avg) - 110, 'samme areal som under kurven', 30, bold=True, color=RED)
    fig.rect(820, 750, 660, 92, fill=fig.p['bg'], stroke=BLUE, width=4, rx=12)
    fig.text(1150, 810, 'gjennomsnitt = 1/(b − a) · ∫ₐᵇ f(x) dx', 31, bold=True)
    save(fig, 's2-1-4-gjennomsnittsverdi.svg')


def f_1_5a():
    fig = Fig('s2')
    f = lambda x: 0.25 * x * x + 0.8
    tx, ty = fig.coords(-0.4, 4.6, 0, 6.4, box=(230, 130, 1370, 720), grid=False,
                        xticks=[0, 1, 2, 3, 4], yticks=[])
    for i in range(4):
        a, b = i, i + 1
        fig.poly([(tx(a), ty(0)), (tx(a), ty(f(a))), (tx(b), ty(f(b))), (tx(b), ty(0))],
                 fill=RED, opacity=0.28, close=True, stroke=RED, width=2.5)
    fig.plot(f, xmin=0, xmax=4.35, color=BLUE, width=5)
    fig.text(W / 2, 830, 'krummer kurven oppover, blir trapesene litt for store', 33, bold=True)
    save(fig, 's2-1-5-trapesmetoden.svg')


def f_1_5b():
    fig = Fig('s2')
    f = lambda x: 1.0 + 2.4 * x - 0.55 * x * x  # bue
    for pi, (bx0, lab) in enumerate(((130, 'trapes: rett linje'), (860, 'Simpson: parabel gjennom tre punkter'))):
        tx, ty = fig.coords(-0.3, 4.3, 0, 4.4, box=(bx0, 170, bx0 + 610, 660), grid=False,
                            xticks=[], yticks=[])
        a, b = 0.5, 3.5
        m = (a + b) / 2
        if pi == 0:
            fig.line(tx(a), ty(f(a)), tx(b), ty(f(b)), RED, 4.5)
        else:
            # parabel gjennom (a,f(a)), (m,f(m)), (b,f(b)) er f selv her - tegn lett forskjøvet for synlighet
            fig.plot(lambda x: f(x) - 0.04, xmin=a, xmax=b, color=RED, width=4.5)
            fig.circle(tx(m), ty(f(m)), 9, fill=RED)
        fig.plot(f, xmin=0.1, xmax=4.1, color=BLUE, width=5)
        fig.circle(tx(a), ty(f(a)), 9, fill=BLUE)
        fig.circle(tx(b), ty(f(b)), 9, fill=BLUE)
        fig.text(bx0 + 305, 745, lab, 30, bold=True)
    fig.text(W / 2, 845, 'mye mindre feil med samme antall punkter', 32, bold=True)
    save(fig, 's2-1-5-simpsons-regel.svg')


def f_1_7a():
    fig = Fig('s2')
    f = lambda x: 1.7 * math.sqrt(x)
    # venstre: området + rotasjonspil
    tx, ty = fig.coords(-0.6, 4.7, -3.6, 3.9, box=(110, 140, 700, 760), grid=False, xticks=[4], yticks=[])
    fig.shade_under(f, 0, 4, color=BLUE, opacity=0.3)
    fig.plot(f, xmin=0, xmax=4.35, color=BLUE, width=5)
    # rotasjonspil rundt x-aksen
    cxp, cyp = tx(2.1), ty(0)
    pts = [(cxp + 60 * math.cos(t), cyp + 95 * math.sin(t)) for t in
           [math.pi * (0.25 + 1.2 * i / 40) for i in range(41)]]
    fig.poly(pts, stroke=RED, width=4)
    fig.arrow(pts[-1][0], pts[-1][1], pts[-1][0] + 16, pts[-1][1] - 22, RED, 4)
    # høyre: 3D-horn
    cx0 = 870
    axy = 450
    fig.line(cx0 - 30, axy, 1480, axy, fig.p['text'], 3, dash='10 8')
    L = 500
    xr0 = cx0 + 40
    prof = lambda u: 211 * math.sqrt(u)  # px-radius langs lengden (0 ved venstre ende: f(0)=0)
    top = [(xr0 + L * u, axy - prof(u)) for u in [i / 60 for i in range(61)]]
    bot = [(xr0 + L * u, axy + prof(u)) for u in [i / 60 for i in range(61)]]
    fig.poly(top + bot[::-1], fill=BLUE, opacity=0.16, close=True)
    fig.poly(top, stroke=BLUE, width=4.5)
    fig.poly(bot, stroke=BLUE, width=4.5)
    ellipse(fig, xr0 + L, axy, 56, prof(1), stroke=BLUE, width=4.5, fill=BLUE, opacity=0.12)
    # skive inni
    us = 0.55
    ellipse(fig, xr0 + L * us, axy, 30, prof(us), stroke=RED, width=5, fill=RED, opacity=0.35)
    fig.line(xr0 + L * us, axy, xr0 + L * us, axy - prof(us), RED, 4)
    fig.text(xr0 + L * us - 20, axy - prof(us) / 2, 'r = f(x)', 28, anchor='end', bold=True, color=RED)
    fig.text(xr0 + L * us + 52, axy + prof(us) + 40, 'dx', 28, bold=True, color=RED)
    fig.text(1130, 840, 'V = ∫ πr² dx', 36, bold=True)
    save(fig, 's2-1-7-omdreiningslegeme-skive.svg')


def f_1_7b():
    fig = Fig('s2')
    cx, axy = 800, 690  # y-aksen i midten, "gulvet" ved axy
    f_px = lambda r: 420 * math.exp(-((r / 260) ** 2))  # høydeprofil i px
    fig.arrow(cx, axy + 60, cx, 110, fig.p['text'], 3.5)
    fig.text(cx + 22, 140, 'y', 30, anchor='start', italic=True)
    fig.line(cx - 560, axy, cx + 620, axy, fig.p['text'], 3.5)
    # legemet: kurveprofil rotert - tegn ytre profil begge sider
    pts_r = [(cx + r, axy - f_px(r)) for r in range(0, 521, 10)]
    pts_l = [(cx - r, axy - f_px(r)) for r in range(0, 521, 10)]
    fig.poly(pts_r, stroke=BLUE, width=5)
    fig.poly(pts_l, stroke=BLUE, width=5)
    ellipse(fig, cx, axy, 520, 70, stroke=BLUE, width=3, dash='10 8')
    # sylinderskall i rødt
    rs, th = 270, 26
    hpx = f_px(rs)
    ery = 34
    for r, op in ((rs, 0.45), (rs + th, 0.45)):
        fig.line(cx - r, axy, cx - r, axy - f_px(rs), RED, 4)
        fig.line(cx + r, axy, cx + r, axy - f_px(rs), RED, 4)
    ellipse(fig, cx, axy - hpx, rs + th, ery + 3, stroke=RED, width=4, fill=RED, opacity=0.30)
    ellipse(fig, cx, axy - hpx, rs, ery, stroke=RED, width=4, fill=fig.p['bg'])
    half_ellipse(fig, cx, axy, rs, ery, False, RED, 4)
    half_ellipse(fig, cx, axy, rs + th, ery + 3, False, RED, 4)
    fig.line(cx, axy - hpx - 6, cx + rs, axy - hpx - 6, RED, 3.5, dash='8 8')
    fig.text(cx + rs / 2, axy - hpx - 22, 'x', 30, bold=True, italic=True, color=RED)
    fig.text(cx + rs + th + 24, axy - hpx / 2, 'f(x)', 30, anchor='start', bold=True, italic=True, color=RED)
    fig.text(cx + rs + th + 20, axy + 52, 'dx', 28, anchor='start', bold=True, color=RED)
    fig.arrow(cx + rs + th + 16, axy + 40, cx + rs + th / 2, axy + 18, RED, 2.5, head=10)
    fig.rect(150, 160, 520, 96, fill=fig.p['bg'], stroke=BLUE, width=4, rx=12)
    fig.text(410, 222, 'V = ∫ 2πx · f(x) dx', 35, bold=True)
    save(fig, 's2-1-7-skallmetoden.svg')


# ====================================================================
# Kapittel 2: Differensiallikninger
# ====================================================================

def f_2_1():
    fig = Fig('s2')
    tx, ty = fig.coords(-3.2, 3.2, -2.6, 2.6, box=(230, 110, 1370, 740), grid=False,
                        xticks=[], yticks=[])
    # retningsfelt for y' = y
    for xi in [i * 0.45 - 3.15 for i in range(15)]:
        for yi in [j * 0.4 - 2.4 for j in range(13)]:
            s = yi  # y' = y
            L = 0.16
            dx = L / math.sqrt(1 + s * s)
            dy = s * dx
            fig.line(tx(xi - dx), ty(yi - dy), tx(xi + dx), ty(yi + dy), GRAY, 2.5)
    fig.line(tx(-3.2), ty(0), tx(3.2), ty(0), RED, 4, dash='14 10')
    fig.plot(lambda x: 0.25 * math.exp(x), color=BLUE, width=5)
    fig.plot(lambda x: -0.25 * math.exp(x), color=BLUE, width=5)
    fig.text(tx(1.45), ty(2.3), 'y′ = y', 34, bold=True, color=BLUE)
    fig.text(tx(-3.0), ty(0.25), 'y = 0', 29, anchor='start', bold=True, color=RED)
    fig.text(W / 2, 845, 'strekene viser helningen i hvert punkt', 33, bold=True)
    save(fig, 's2-2-1-retningsdiagram.svg')


def f_2_2():
    fig = Fig('s2')
    boxes = [('dy/dx = 2xy', 80), ('dy/y = 2x dx', 610), ('ln|y| = x² + C', 1140)]
    bw, bh, by = 380, 130, 360
    for lab, x in boxes:
        fig.rect(x, by, bw, bh, fill=fig.p['bg'], stroke=BLUE, width=4, rx=14)
    # boks 1
    fig.text(80 + bw / 2, by + bh / 2 + 12, 'dy/dx = 2xy', 37, bold=True)
    # boks 2 med fargede ledd
    fig.text(610 + 92, by + bh / 2 + 12, 'dy/y', 37, bold=True, color=BLUE)
    fig.text(610 + 188, by + bh / 2 + 12, '=', 37, bold=True)
    fig.text(610 + 292, by + bh / 2 + 12, '2x dx', 37, bold=True, color=RED)
    fig.text(1140 + bw / 2, by + bh / 2 + 12, 'ln|y| = x² + C', 37, bold=True)
    for x1, lab in ((80 + bw, 'separer'), (610 + bw, 'integrer')):
        fig.arrow(x1 + 24, by + bh / 2, x1 + 126, by + bh / 2, fig.p['text'], 5, head=15)
        fig.text(x1 + 75, by + bh / 2 - 30, lab, 28, bold=True)
    fig.text(W / 2, 640, 'y-er til venstre, x-er til høyre', 33, bold=True)
    save(fig, 's2-2-2-separasjon-av-variabler.svg')


def f_2_4a():
    fig = Fig('s2')
    M, k, t0 = 100, 0.85, 6
    logi = lambda t: M / (1 + math.exp(-k * (t - t0)))
    tx, ty = fig.coords(0, 13, 0, 145, box=(220, 110, 1380, 770), grid=False,
                        xticks=[], yticks=[], xlabel='t', ylabel='N')
    fig.line(tx(0), ty(M), tx(12.7), ty(M), RED, 4, dash='14 10')
    fig.line(tx(0), ty(M / 2), tx(t0), ty(M / 2), RED, 3, dash='8 8')
    fig.plot(lambda t: logi(0) * math.exp(k * (t - 0) * 0.62), xmin=0, xmax=10.35, color=GRAY, width=3.5, dash='12 10')
    fig.plot(logi, xmin=0, xmax=12.7, color=BLUE, width=5)
    fig.circle(tx(t0), ty(M / 2), 11, fill=RED)
    fig.text(tx(0.3), ty(M) - 20, 'bæreevne M', 31, anchor='start', bold=True, color=RED)
    fig.text(tx(t0) - 20, ty(M / 2) - 28, 'M/2: raskest vekst', 30, anchor='end', bold=True, color=RED)
    fig.text(tx(7.2), ty(133), 'eksponentiell uten begrensning', 29, bold=True, color=GRAY)
    save(fig, 's2-2-4-logistisk-vekst.svg')


def f_2_4b():
    fig = Fig('s2')
    Tf = lambda t: 20 + 70 * math.exp(-0.11 * t)
    tx, ty = fig.coords(0, 42, 0, 108, box=(250, 110, 1380, 760), grid=False,
                        xticks=[], yticks=[], xlabel='t (minutter)', ylabel='temperatur (°C)')
    for v in (20, 90):
        fig.text(tx(0) - 16, ty(v) + 9, str(v), 28, anchor='end')
        fig.line(tx(0) - 10, ty(v), tx(0) + 10, ty(v), fig.p['text'], 3)
    fig.line(tx(0), ty(20), tx(41), ty(20), RED, 4, dash='14 10')
    fig.plot(Tf, xmin=0, xmax=41, color=BLUE, width=5)
    fig.text(tx(9), ty(20) + 44, 'romtemperatur 20 °C', 30, bold=True, color=RED)
    # kaffekopp-silhuett ved start (under aksetittelen, klar av kurven)
    cxp, cyp = tx(4.6), ty(86)
    fig.rect(cxp - 38, cyp - 50, 76, 62, fill=BLUE, opacity=0.85, rx=8)
    half_ellipse(fig, cxp + 52, cyp - 20, 16, 20, False, BLUE, 5)
    for ddx in (-16, 4):
        fig.line(cxp + ddx, cyp - 62, cxp + ddx + 8, cyp - 84, BLUE, 4)
    fig.rect(700, 660, 360, 92, fill=fig.p['bg'], stroke=BLUE, width=4, rx=12)
    fig.text(880, 720, 'T′ = −k(T − 20)', 34, bold=True)
    save(fig, 's2-2-4-newtons-avkjolingslov.svg')


# ====================================================================
# Kapittel 3: Funksjonsdrøfting
# ====================================================================

def f_3_1():
    fig = Fig('s2')
    f = lambda x: x ** 3 - 3 * x ** 2  # topp (0,0), bunn (2,-4), vendepunkt (1,-2), nullpunkter 0 og 3
    tx, ty = fig.coords(-1.6, 3.9, -5.4, 3.4, box=(230, 110, 1370, 790), grid=False,
                        xticks=[3], yticks=[])
    fig.plot(f, color=BLUE, width=5)
    for px, py, lab, ddx, ddy in ((0, 0, 'toppunkt', 24, -26), (2, -4, 'bunnpunkt', 30, 44), (1, -2, 'vendepunkt', 34, 6)):
        fig.circle(tx(px), ty(py), 11, fill=RED)
        fig.text(tx(px) + ddx, ty(py) + ddy, lab, 30, anchor='start', bold=True, color=RED)
    for px, py in ((0, 0), (2, -4)):
        fig.line(tx(px) - 60, ty(py), tx(px) + 60, ty(py), RED, 4)
    fig.circle(tx(3), ty(0), 9, fill=fig.p['text'])
    save(fig, 's2-3-1-fullstendig-drofting.svg')


def f_3_2():
    fig = Fig('s2')
    for pi, (bx0, lab) in enumerate(((110, 'konveks: f″ > 0'), (950, 'konkav: f″ < 0'))):
        tx, ty = fig.coords(-1.3, 1.3, -0.4, 1.6, box=(bx0, 170, bx0 + 540, 640), grid=False,
                            xticks=[], yticks=[])
        if pi == 0:
            f = lambda x: 0.8 * x * x + 0.2
            df = lambda x: 1.6 * x
        else:
            f = lambda x: 1.3 - 0.8 * x * x
            df = lambda x: -1.6 * x
        fig.plot(f, xmin=-1.15, xmax=1.15, color=BLUE, width=5)
        for x0 in (-0.75, 0, 0.75):
            dx = 0.3
            fig.line(tx(x0 - dx), ty(f(x0) - df(x0) * dx), tx(x0 + dx), ty(f(x0) + df(x0) * dx), RED, 4)
        fig.text(bx0 + 270, 740, lab, 32, bold=True)
    # midtfigur: kurve som skifter krumning
    tx, ty = fig.coords(-1.2, 1.2, -1.6, 1.6, box=(690, 280, 910, 560), grid=False, xticks=[], yticks=[])
    fig.plot(lambda x: x ** 3, color=BLUE, width=4)
    fig.circle(tx(0), ty(0), 8, fill=RED)
    fig.text(800, 640, 'vendepunkt', 28, bold=True, color=RED)
    save(fig, 's2-3-2-konkav-konveks.svg')


def f_3_3():
    fig = Fig('s2')
    # venstre: papparket
    sx, sy, S, c = 90, 200, 400, 90  # c = hjørnekvadrat
    fig.rect(sx, sy, S, S, stroke=fig.p['text'], width=4)
    for (hx, hy) in ((sx, sy), (sx + S - c, sy), (sx, sy + S - c), (sx + S - c, sy + S - c)):
        fig.rect(hx, hy, c, c, stroke=RED, width=3, fill=RED, opacity=0.14)
    # brettelinjer
    fig.line(sx + c, sy + c, sx + S - c, sy + c, GRAY, 2.5, dash='10 8')
    fig.line(sx + c, sy + S - c, sx + S - c, sy + S - c, GRAY, 2.5, dash='10 8')
    fig.line(sx + c, sy + c, sx + c, sy + S - c, GRAY, 2.5, dash='10 8')
    fig.line(sx + S - c, sy + c, sx + S - c, sy + S - c, GRAY, 2.5, dash='10 8')
    # saks-symbol (enkel: to streker + sirkler) ved øvre venstre hjørne
    scx, scy = sx + c - 18, sy + 26
    fig.line(scx - 22, scy - 20, scx + 24, scy + 22, RED, 4)
    fig.line(scx - 22, scy + 22, scx + 24, scy - 20, RED, 4)
    fig.circle(scx - 28, scy - 26, 7, stroke=RED, width=3)
    fig.circle(scx - 28, scy + 28, 7, stroke=RED, width=3)
    fig.text(sx + S / 2, sy - 36, '30 cm', 30, bold=True)
    fig.text(sx + c / 2, sy + c + 40, 'x', 30, bold=True, italic=True, color=RED)
    fig.text(sx + S / 2, sy + S + 52, 'klipp og brett', 28)
    # midten: 3D-eske
    ex, ey, ew, eh, dep = 620, 430, 260, 120, 70
    fig.poly([(ex, ey), (ex + ew, ey), (ex + ew + dep, ey - dep * 0.6), (ex + dep, ey - dep * 0.6)],
             stroke=BLUE, width=4, close=True, fill=BLUE, opacity=0.10)
    fig.rect(ex, ey, ew, eh, stroke=BLUE, width=4, fill=BLUE, opacity=0.16)
    fig.poly([(ex + ew, ey), (ex + ew + dep, ey - dep * 0.6), (ex + ew + dep, ey - dep * 0.6 + eh), (ex + ew, ey + eh)],
             stroke=BLUE, width=4, close=True, fill=BLUE, opacity=0.22)
    # høyre: volumfunksjonen V(x)=x(30-2x)^2, topp (5,2000)
    tx, ty = fig.coords(0, 16, 0, 2400, box=(1030, 160, 1480, 700), grid=False,
                        xticks=[5, 15], yticks=[2000], xlabel='x', ylabel='V(x)')
    fig.plot(lambda x: x * (30 - 2 * x) ** 2, xmin=0, xmax=15, color=BLUE, width=5)
    fig.line(tx(5), ty(2000), tx(5), ty(0), GRAY, 2.5, dash='8 8')
    fig.circle(tx(5), ty(2000), 11, fill=RED)
    fig.text(tx(5.7), ty(2270), 'størst volum: x = 5', 29, anchor='start', bold=True, color=RED)
    save(fig, 's2-3-3-optimering-eske.svg')


def f_3_4():
    fig = Fig('s2')
    panels = [(95, 'vertikal: x = 2'), (595, 'horisontal: y = 3'), (1095, 'skrå: y = x')]
    for i, (bx0, lab) in enumerate(panels):
        box = (bx0, 190, bx0 + 410, 660)
        tx, ty = fig.coords(-4, 4, -4, 8, box=box, grid=False, xticks=[], yticks=[])
        if i == 0:
            xa = 2 * 8 / 8  # x=2 i denne skalaen -> bruk 1.0
            fig.line(tx(1), 190, tx(1), 660, RED, 3.5, dash='12 10')
            fig.plot(lambda x: 1 / (1 - x) + 1, xmax=0.86, color=BLUE, width=4.5)
            fig.plot(lambda x: 1 / (x - 1) + 1, xmin=1.14, color=BLUE, width=4.5)
        elif i == 1:
            fig.line(box[0], ty(3), box[2], ty(3), RED, 3.5, dash='12 10')
            fig.plot(lambda x: 3 + 2.4 * x / (1 + x * x) * (1 if True else 1), color=BLUE, width=4.5)
        else:
            fig.plot(lambda x: x, color=RED, width=3.5, dash='12 10')
            fig.plot(lambda x: x + 1.6 / x, xmin=0.32, color=BLUE, width=4.5)
            fig.plot(lambda x: x + 1.6 / x, xmax=-0.32, color=BLUE, width=4.5)
        fig.text(bx0 + 205, 750, lab, 31, bold=True)
    save(fig, 's2-3-4-asymptoter-tre-typer.svg')


def f_3_7():
    fig = Fig('s2')
    f = lambda x: 0.5 * x * x + 0.6
    for pi, bx0 in enumerate((120, 880)):
        tx, ty = fig.coords(-0.4, 3.4, 0, 6.4, box=(bx0, 170, bx0 + 580, 660), grid=False,
                            xticks=[], yticks=[])
        if pi == 0:
            x0 = 1.6
            tang = lambda x: f(x0) + x0 * (x - x0)
            fig.plot(tang, xmin=0.4, xmax=2.9, color=RED, width=4)
            fig.circle(tx(x0), ty(f(x0)), 10, fill=RED)
            fig.plot(f, xmin=0, xmax=3.1, color=BLUE, width=5)
            fig.text(bx0 + 290, 740, 'derivasjon: stigning i ett punkt', 29, bold=True)
        else:
            fig.shade_under(f, 0.7, 2.6, color=RED, opacity=0.38)
            fig.plot(f, xmin=0, xmax=3.1, color=BLUE, width=5)
            fig.text(bx0 + 290, 740, 'integrasjon: samlet mengde', 29, bold=True)
    dbl_arrow(fig, 740, 420, 850, 420, fig.p['text'], 5, head=16)
    fig.text(795, 372, 'motsatte', 28, bold=True)
    fig.text(795, 488, 'operasjoner', 28, bold=True)
    save(fig, 's2-3-7-areal-i-drofting.svg')


# ====================================================================
# Kapittel 4: Sannsynlighetsfordelinger
# ====================================================================

def f_4_1():
    fig = Fig('s2')
    pmf = {0: 0.1, 1: 0.2, 2: 0.4, 3: 0.2, 4: 0.1}
    tx, ty = fig.coords(-1, 5.4, 0, 0.5, box=(240, 140, 1330, 700), grid=False,
                        xticks=[0, 1, 2, 3, 4], yticks=[], xlabel='x', ylabel='P(X = x)')
    dist_bars(fig, tx, ty, pmf, 0.66, BLUE)
    for k, p in pmf.items():
        fig.text(tx(k), ty(p) - 16, fmt(p), 27, bold=True)
    fig.line(tx(2), ty(0.47), tx(2), ty(0), RED, 4, dash='12 10')
    fig.text(tx(2) + 20, ty(0.465), 'E(X) = 2', 31, anchor='start', bold=True, color=RED)
    sd = math.sqrt(sum(p * (k - 2) ** 2 for k, p in pmf.items()))  # ~1.095
    dbl_arrow(fig, tx(2 - sd), ty(0.25), tx(2 + sd), ty(0.25), RED, 3.5)
    fig.text(tx(2), ty(0.25) - 18, 'spredning (standardavvik)', 27, bold=True, color=RED)
    save(fig, 's2-4-1-diskret-fordeling.svg')


def f_4_2():
    fig = Fig('s2')
    rng = random.Random(4)
    for pi, (bx0, lab1, lab2) in enumerate(((110, 'med tilbakelegging:', 'binomisk, samme p'),
                                            (850, 'uten tilbakelegging:', 'hypergeometrisk, p endrer seg'))):
        # urne
        ux, uy, uw, uh = bx0 + 110, 130, 320, 300
        fig.poly([(ux, uy), (ux + 32, uy + uh), (ux + uw - 32, uy + uh), (ux + uw, uy)],
                 stroke=fig.p['text'], width=5)
        pos = [(ux + 80, uy + 90), (ux + 160, uy + 70), (ux + 240, uy + 95),
               (ux + 105, uy + 175), (ux + 190, uy + 165), (ux + 255, uy + 185),
               (ux + 140, uy + 245), (ux + 220, uy + 250)]
        for i, (x, y) in enumerate(pos):
            fig.circle(x, y, 26, fill=BLUE if i % 2 == 0 else RED, stroke=fig.p['bg'], width=3)
        if pi == 0:
            # buet pil tilbake i urnen
            pts = [(ux + uw + 10 + 70 * math.cos(t), uy + 130 + 95 * math.sin(t)) for t in
                   [math.pi * (-0.45 + 0.95 * i / 30) for i in range(31)]]
            fig.poly(pts, stroke=RED, width=4.5)
            fig.arrow(pts[0][0], pts[0][1], pts[0][0] - 20, pts[0][1] + 14, RED, 4.5)
        else:
            # skål utenfor med kule
            half_ellipse(fig, ux + uw + 90, uy + 250, 56, 36, False, fig.p['text'], 4)
            fig.circle(ux + uw + 90, uy + 232, 24, fill=RED)
            fig.arrow(ux + uw - 40, uy + 110, ux + uw + 70, uy + 196, RED, 4)
        fig.text(bx0 + 300, 500, lab1, 30, bold=True)
        fig.text(bx0 + 300, 545, lab2, 30, bold=True)
        # lite stolpediagram under
        n, p = 8, 0.5
        if pi == 0:
            pmf = {k: binom_pmf(n, p, k) for k in range(9)}
        else:
            # hypergeometrisk N=16, K=8, n=8 (smalere)
            pmf = {k: math.comb(8, k) * math.comb(8, 8 - k) / math.comb(16, 8) for k in range(9)}
        tx, ty = fig.coords(-1, 9.4, 0, 0.34, box=(bx0 + 60, 600, bx0 + 540, 830), grid=False,
                            xticks=[], yticks=[])
        dist_bars(fig, tx, ty, pmf, 0.74, BLUE if pi == 0 else RED)
    save(fig, 's2-4-2-binomisk-vs-hypergeometrisk.svg')


def f_4_3a():
    fig = Fig('s2')
    zones = [(-3, -2, BLUE, 0.16), (2, 3, BLUE, 0.16),
             (-2, -1, BLUE, 0.36), (1, 2, BLUE, 0.36),
             (-1, 1, BLUE, 0.62)]
    xlab = {-3: 'μ − 3σ', -2: 'μ − 2σ', -1: 'μ − σ', 0: 'μ', 1: 'μ + σ', 2: 'μ + 2σ', 3: 'μ + 3σ'}
    tx, ty, f = fig.normal_curve(0, 1, box=(170, 120, 1430, 560), zones=zones, xlabels=xlab)
    fig.line(tx(0), ty(f(0)) - 6, tx(0), ty(0), RED, 4, dash='12 10')
    rows = [(-1, 1, '68 %', 660), (-2, 2, '95 %', 730), (-3, 3, '99,7 %', 800)]
    for a, b, lab, y in rows:
        dbl_arrow(fig, tx(a), y, tx(b), y, fig.p['text'], 3.5)
        fig.text((tx(a) + tx(b)) / 2, y - 14, lab, 30, bold=True)
    save(fig, 's2-4-3-normalfordeling-empirisk-regel.svg')


def f_4_3b():
    fig = Fig('s2')
    labs = ['n = 1: flat', 'n = 2: trekant', 'n = 30: tilnærmet normal']
    for pi, bx0 in enumerate((110, 610, 1110)):
        box = (bx0, 260, bx0 + 400, 660)
        if pi == 0:
            pmf = {k: 1 / 6 for k in range(1, 7)}
            tx, ty = fig.coords(0, 7, 0, 0.28, box=box, grid=False, xticks=[], yticks=[])
            dist_bars(fig, tx, ty, pmf, 0.8, BLUE)
        elif pi == 1:
            pmf = {}
            for a in range(1, 7):
                for b in range(1, 7):
                    m = (a + b) / 2
                    pmf[m] = pmf.get(m, 0) + 1 / 36
            tx, ty = fig.coords(0.5, 6.5, 0, 0.22, box=box, grid=False, xticks=[], yticks=[])
            dist_bars(fig, tx, ty, pmf, 0.42, BLUE)
        else:
            tx, ty = fig.coords(0.5, 6.5, 0, 1.4, box=box, grid=False, xticks=[], yticks=[])
            sd = math.sqrt(35 / 12 / 30)
            fig.shade_under(lambda x: npdf(x, 3.5, sd), 3.5 - 3.4 * sd, 3.5 + 3.4 * sd, color=BLUE, opacity=0.3)
            fig.plot(lambda x: npdf(x, 3.5, sd), xmin=2.2, xmax=4.8, color=BLUE, width=5)
        fig.line(box[0], box[3], box[2], box[3], fig.p['text'], 3)
        fig.text(bx0 + 200, 740, labs[pi], 30, bold=True)
    fig.arrow(330, 150, 1270, 150, RED, 5, head=16)
    fig.text(W / 2, 110, 'gjennomsnittet blir normalfordelt når n vokser', 33, bold=True)
    save(fig, 's2-4-3-sentralgrensesetningen.svg')


def f_4_3c():
    fig = Fig('s2')
    n, p = 20, 0.5
    mu, sd = 10, math.sqrt(5)
    pmf = {k: binom_pmf(n, p, k) for k in range(4, 17)}
    tx, ty = fig.coords(3, 17.4, 0, 0.225, box=(220, 150, 1380, 700), grid=False,
                        xticks=[4, 6, 8, 10, 12, 14, 16], yticks=[], xlabel='k')
    dist_bars(fig, tx, ty, pmf, 0.85, BLUE, highlight=12, hcolor=BLUE, opacity=1)
    # mørkere fyll til og med 12
    for k in range(4, 13):
        x0px, x1px = tx(k - 0.425), tx(k + 0.425)
        fig.rect(x0px, ty(pmf[k]), x1px - x0px, ty(0) - ty(pmf[k]), fill=BLUE, opacity=0.45)
    # skravert areal under normalkurven opp til 12.5
    fig.shade_under(lambda x: npdf(x, mu, sd), 3.4, 12.5, color=RED, opacity=0.25)
    fig.plot(lambda x: npdf(x, mu, sd), xmin=3.4, xmax=16.8, color=RED, width=5)
    fig.line(tx(12.5), ty(0.21), tx(12.5), ty(0), RED, 4, dash='10 8')
    fig.text(tx(12.5) + 16, ty(0.205), '12,5', 30, anchor='start', bold=True, color=RED)
    fig.text(W / 2, 840, 'P(X ≤ 12) ≈ P(Y ≤ 12,5)', 36, bold=True)
    save(fig, 's2-4-3-kontinuitetskorreksjon.svg')


def f_4_6a():
    fig = Fig('s2')
    f = lambda x: 1.05 * npdf(math.log(max(x, 1e-9)) - 1.05, 0, 0.52) / max(x, 1e-9) * 1.3  # topp ≈ 0,42 < ymax 0,5
    a, b = 2.0, 4.4
    tx, ty = fig.coords(0, 9, 0, 0.5, box=(220, 140, 1380, 690), grid=False,
                        xticks=[], yticks=[], xlabel='x')
    fig.shade_under(f, a, b, color=RED, opacity=0.42)
    fig.plot(f, xmin=0.15, xmax=8.7, color=BLUE, width=5)
    for v, lab in ((a, 'a'), (b, 'b')):
        fig.line(tx(v), ty(f(v)), tx(v), ty(0), GRAY, 3, dash='9 8')
        fig.text(tx(v), ty(0) + 46, lab, 32, bold=True, italic=True)
    fig.text(tx(5.6), ty(0.40), 'P(a ≤ X ≤ b) = arealet', 33, bold=True, anchor='start')
    fig.arrow(tx(5.55), ty(0.385), tx(3.6), ty(0.12), GRAY, 3, head=12)
    fig.text(W / 2, 838, 'hele arealet under kurven er 1', 32)
    save(fig, 's2-4-6-tetthetsfunksjon.svg')


def f_4_6b():
    fig = Fig('s2')
    # venstre: uniform på [2,6]
    tx, ty = fig.coords(0, 8, 0, 0.42, box=(120, 180, 690, 650), grid=False,
                        xticks=[2, 6], yticks=[], xlabel='x')
    fig.rect(tx(2), ty(0.25), tx(6) - tx(2), ty(0) - ty(0.25), fill=BLUE, opacity=0.30, stroke=BLUE, width=4)
    fig.line(tx(0), ty(0), tx(2), ty(0), BLUE, 5)
    fig.line(tx(6), ty(0), tx(7.8), ty(0), BLUE, 5)
    fig.text(405, 760, 'uniform: f(x) = 0,25 på [2, 6]', 30, bold=True)
    # høyre: eksponential
    lam = 0.55
    g = lambda x: lam * math.exp(-lam * x)
    tx2, ty2 = fig.coords(0, 8, 0, 0.62, box=(880, 180, 1450, 650), grid=False,
                          xticks=[2], yticks=[], xlabel='x')
    fig.shade_under(g, 0, 2, color=RED, opacity=0.4)
    fig.plot(g, xmin=0, xmax=7.8, color=BLUE, width=5)
    fig.text(1165, 760, 'eksponential: ventetid', 30, bold=True)
    save(fig, 's2-4-6-uniform-eksponential.svg')


# ====================================================================
# Kapittel 5: Estimering og hypotesetesting
# ====================================================================

def f_5_1():
    fig = Fig('s2')
    rng = random.Random(17)
    mux = 800
    fig.line(mux, 130, mux, 830, RED, 4, dash='14 10')
    fig.text(mux + 20, 165, 'μ', 36, anchor='start', bold=True, color=RED, italic=True)
    miss_idx = 13
    for i in range(20):
        y = 210 + i * 32
        if i == miss_idx:
            c = (mux + 230) + 110  # helt til siden
            col = RED
        else:
            c = mux + rng.uniform(-150, 150)
            col = BLUE
        half = 190
        fig.line(c - half, y, c + half, y, col, 4)
        fig.line(c - half, y - 9, c - half, y + 9, col, 4)
        fig.line(c + half, y - 9, c + half, y + 9, col, 4)
        fig.circle(c, y, 6, fill=col)
    fig.text(W / 2, 85, 'cirka 19 av 20 intervaller fanger μ', 36, bold=True)
    save(fig, 's2-5-1-konfidensintervall-dekning.svg')


def f_5_2a():
    fig = Fig('s2')
    z = 1.96
    tx, ty, f = fig.normal_curve(0, 1, box=(190, 170, 1410, 660),
                                 zones=[(-4, -z, RED, 0.55), (z, 4, RED, 0.55)],
                                 xlabels={-z: '−1,96', 0: '0', z: '1,96'})
    for v in (-z, z):
        fig.line(tx(v), ty(f(v)), tx(v), ty(0), RED, 3.5, dash='10 8')
    fig.text(tx(0), ty(f(0) * 0.42), 'behold H₀ (95 %)', 32, bold=True)
    fig.text(tx(-2.95), ty(f(0) * 0.32), 'forkast H₀', 29, bold=True, color=RED)
    fig.text(tx(-2.95), ty(f(0) * 0.22), '(2,5 %)', 29, bold=True, color=RED)
    fig.text(tx(2.95), ty(f(0) * 0.32), 'forkast H₀', 29, bold=True, color=RED)
    fig.text(tx(2.95), ty(f(0) * 0.22), '(2,5 %)', 29, bold=True, color=RED)
    fig.text(W / 2, 100, 'α = 0,05', 38, bold=True)
    save(fig, 's2-5-2-hypotesetest-forkastningsomrade.svg')


def f_5_2b():
    fig = Fig('s2')
    zobs = 2.1
    tx, ty, f = fig.normal_curve(0, 1, box=(190, 160, 1410, 660),
                                 zones=[(zobs, 4, RED, 0.6)],
                                 xlabels={k: fmt(k) for k in range(-3, 4)})
    fig.line(tx(zobs), ty(f(0) * 0.55), tx(zobs), ty(0), RED, 5)
    fig.text(tx(zobs), ty(f(0) * 0.62), 'z = 2,1', 31, bold=True, color=RED)
    fig.text(tx(2.62), ty(f(0) * 0.30), 'p ≈ 0,018', 31, bold=True, color=RED)
    fig.arrow(tx(2.62), ty(f(0) * 0.26), tx(2.35), ty(f(0) * 0.06), GRAY, 3, head=11)
    fig.text(W / 2, 820, 'p < 0,05: forkast H₀', 38, bold=True)
    save(fig, 's2-5-2-p-verdi.svg')


def f_5_3():
    fig = Fig('s2')
    mu0, mu1, sd = 0, 2.6, 1
    crit = 1.65
    xmin, xmax = -3.4, 6.0
    box = (170, 160, 1430, 660)
    x0, y0, x1, y1 = box
    sx = (x1 - x0) / (xmax - xmin)
    sy = (y1 - y0) / 0.47
    tx = lambda x: x0 + (x - xmin) * sx
    ty = lambda v: y1 - v * sy
    # soner
    for (mu, a, b, c, op) in ((mu0, crit, xmax, BLUE, 0.55), (mu1, xmin, crit, RED, 0.5)):
        pts = [(tx(a), ty(0))]
        for i in range(121):
            xv = a + (b - a) * i / 120
            pts.append((tx(xv), ty(npdf(xv, mu, sd))))
        pts.append((tx(b), ty(0)))
        fig.poly(pts, fill=c, close=True, opacity=op)
    for mu, c in ((mu0, BLUE), (mu1, RED)):
        pts = [(tx(xmin + (xmax - xmin) * i / 400), ty(npdf(xmin + (xmax - xmin) * i / 400, mu, sd))) for i in range(401)]
        fig.poly(pts, stroke=c, width=5)
    fig.line(x0, ty(0), x1, ty(0), fig.p['text'], 3)
    fig.line(tx(crit), ty(0.46), tx(crit), ty(0), GRAY, 4)
    fig.text(tx(crit), ty(0.47) - 12, 'kritisk verdi', 29, bold=True, color=GRAY)
    fig.text(tx(mu0), ty(0) + 44, 'H₀', 32, bold=True, color=BLUE)
    fig.text(tx(mu1), ty(0) + 44, 'H₁', 32, bold=True, color=RED)
    fig.text(tx(2.45), ty(0.045), 'α: type I-feil', 29, anchor='start', bold=True, color=BLUE)
    fig.arrow(tx(2.42), ty(0.042), tx(1.95), ty(0.012), BLUE, 2.5, head=10)
    fig.text(tx(0.9), ty(0.145), 'β: type II-feil', 29, anchor='end', bold=True, color=RED)
    fig.arrow(tx(0.92), ty(0.14), tx(1.3), ty(0.075), RED, 2.5, head=10)
    fig.text(tx(3.6), ty(0.30), 'styrke 1 − β', 30, anchor='start', bold=True, color=RED)
    save(fig, 's2-5-3-feiltyper.svg')


def f_5_4():
    fig = Fig('s2')
    f = lambda n: 0.98 / math.sqrt(n)
    tx, ty = fig.coords(0, 620, 0, 0.16, box=(250, 120, 1360, 740), grid=False,
                        xticks=[100, 400], yticks=[], xlabel='utvalgsstørrelse n', ylabel='feilmargin')
    fig.plot(f, xmin=45, xmax=600, color=BLUE, width=5)
    for n in (100, 400):
        fig.line(tx(n), ty(f(n)), tx(n), ty(0), GRAY, 2.5, dash='8 8')
        fig.line(tx(0), ty(f(n)), tx(n), ty(f(n)), GRAY, 2.5, dash='8 8')
        fig.circle(tx(n), ty(f(n)), 11, fill=RED)
    fig.text(tx(420), ty(0.122), 'fire ganger så stort utvalg', 31, anchor='start', bold=True)
    fig.text(tx(420), ty(0.107), 'gir halv feilmargin', 31, anchor='start', bold=True)
    save(fig, 's2-5-4-feilmargin-utvalg.svg')


# ====================================================================
# Kapittel 6: Regresjon
# ====================================================================

def f_6_1():
    fig = Fig('s2')
    xs = [1, 2.2, 3.4, 4.6, 5.8, 7]
    res = [0.7, -1.0, 0.45, 1.2, -0.65, -0.35]
    a, b = 0.75, 1.5
    ys = [a * x + b + r for x, r in zip(xs, res)]
    tx, ty = fig.coords(0, 8.4, 0, 9, box=(240, 110, 1330, 740), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    # kvadrater: side = |residual| i y-enheter; tegn som faktiske kvadrater i px
    for x, y, r in zip(xs, ys, res):
        yl = a * x + b
        ytop, ybot = ty(max(y, yl)), ty(min(y, yl))
        side = ybot - ytop
        fig.rect(tx(x), ytop, side, side, fill=RED, opacity=0.25, stroke=RED, width=2.5)
    fig.plot(lambda x: a * x + b, xmin=0.3, xmax=8, color=RED, width=5)
    for x, y in zip(xs, ys):
        fig.circle(tx(x), ty(y), 10, fill=BLUE)
    fig.text(W / 2, 845, 'linjen gjør summen av kvadratene minst mulig', 33, bold=True)
    save(fig, 's2-6-1-minste-kvadraters-metode.svg')


def f_6_3():
    fig = Fig('s2')
    rng = random.Random(8)
    panels = [(lambda x: 1.4 * 1.5 ** x, 'eksponentiell: y = a · bˣ'),
              (lambda x: 2.6 * x ** 0.55, 'potens: y = a · xᵇ'),
              (lambda x: 1.2 + 3.4 * math.log(x), 'logaritmisk: y = a + b · ln x')]
    for pi, (f, lab) in enumerate(panels):
        bx0 = 95 + pi * 500
        ymax = f(8.6) * 1.25
        tx, ty = fig.coords(0, 9.4, 0, ymax, box=(bx0, 180, bx0 + 410, 660), grid=False,
                            xticks=[], yticks=[])
        fig.plot(f, xmin=0.45, xmax=9, color=RED, width=4.5)
        for i in range(8):
            x = 0.8 + i * 1.05
            y = f(x) * rng.uniform(0.88, 1.12)
            fig.circle(tx(x), ty(min(y, ymax * 0.97)), 9, fill=BLUE)
        fig.text(bx0 + 205, 755, lab, 28, bold=True)
    save(fig, 's2-6-3-regresjonstyper.svg')


def f_6_5():
    fig = Fig('s2')
    xs = [0.6, 1.3, 2.0, 2.7, 3.4, 4.1, 4.8, 5.5, 6.2, 6.9]
    res = [0.25, -0.3, 0.18, -0.15, 0.32, -0.26, 0.1, -0.32, 0.27, -0.1]
    a, b = 0.8, 1.2
    ys = [a * x + b + r for x, r in zip(xs, res)]
    out = (8.6, 9.4)  # uteligger
    # regresjon med uteligger
    X = xs + [out[0]]
    Y = ys + [out[1]]
    n = len(X)
    sx, sy = sum(X), sum(Y)
    sxx = sum(x * x for x in X)
    sxy = sum(x * y for x, y in zip(X, Y))
    a2 = (n * sxy - sx * sy) / (n * sxx - sx * sx)
    b2 = (sy - a2 * sx) / n
    for pi, (bx0, lab) in enumerate(((110, 'uten uteligger'), (840, 'uteliggeren drar linjen mot seg'))):
        tx, ty = fig.coords(0, 10, 0, 11, box=(bx0, 140, bx0 + 600, 680), grid=False,
                            xticks=[], yticks=[])
        if pi == 0:
            fig.plot(lambda x: a * x + b, xmin=0.3, xmax=9.6, color=RED, width=4.5)
        else:
            fig.plot(lambda x: a * x + b, xmin=0.3, xmax=9.6, color=GRAY, width=3.5, dash='12 10')
            fig.plot(lambda x: a2 * x + b2, xmin=0.3, xmax=9.6, color=RED, width=4.5)
            fig.circle(tx(out[0]), ty(out[1]), 13, fill=RED)
        for x, y in zip(xs, ys):
            fig.circle(tx(x), ty(y), 9, fill=BLUE)
        fig.text(bx0 + 300, 780, lab, 30, bold=True)
    save(fig, 's2-6-5-uteligger-innflytelse.svg')


# ====================================================================
# Kapittel 7: Følger og rekker
# ====================================================================

def f_7_1():
    fig = Fig('s2')
    u = 84  # rutestørrelse
    x0, y0 = 330, 590  # nederste venstre hjørne av rektangelet
    # blå trapp: kolonne i har høyde i+1 (1..5)
    for c in range(5):
        for r in range(c + 1):
            fig.rect(x0 + c * u, y0 - (r + 1) * u, u, u, fill=BLUE, opacity=0.75, stroke=fig.p['bg'], width=2)
    # rød opp-ned-trapp fyller resten av 5x6-rektangelet
    for c in range(5):
        for r in range(c + 1, 6):
            fig.rect(x0 + c * u, y0 - (r + 1) * u, u, u, fill=RED, opacity=0.6, stroke=fig.p['bg'], width=2)
    fig.rect(x0, y0 - 6 * u, 5 * u, 6 * u, stroke=fig.p['text'], width=4)
    fig.text(x0 + 2.5 * u, y0 - 6 * u - 28, '5 · 6', 32, bold=True)
    fig.text(W / 2, 730, '1 + 2 + 3 + 4 + 5 = 5 · 6/2 = 15', 36, bold=True)
    fig.rect(940, 280, 480, 100, fill=fig.p['bg'], stroke=BLUE, width=4, rx=12)
    fig.text(1180, 345, 'Sₙ = n(a₁ + aₙ)/2', 36, bold=True)
    save(fig, 's2-7-1-aritmetisk-rekke-gauss.svg')


def f_7_2():
    fig = Fig('s2')
    vals = [100, 80, 64, 51.2, 40.96]
    tx, ty = fig.coords(-0.7, 4.9, 0, 118, box=(240, 160, 1330, 720), grid=False,
                        xticks=[], yticks=[])
    bw = 0.46
    for i, v in enumerate(vals):
        fig.rect(tx(i - bw / 2), ty(v), tx(i + bw / 2) - tx(i - bw / 2), ty(0) - ty(v), fill=BLUE, opacity=0.85)
        if i < 4:
            fig.arrow(tx(i + bw / 2) + 8, ty(vals[i + 1] + 12), tx(i + 1 - bw / 2) - 8, ty(vals[i + 1] + 12), RED, 3.5, head=11)
            fig.text((tx(i) + tx(i + 1)) / 2, ty(vals[i + 1] + 12) - 18, '· 0,8', 27, bold=True, color=RED)
    fig.text(tx(0), ty(100) - 18, '100', 29, bold=True)
    fig.text(tx(4), ty(41) - 18, '≈ 41', 29, bold=True)
    fig.text(W / 2, 90, 'hvert ledd er forrige ledd ganger k', 36, bold=True)
    save(fig, 's2-7-2-geometrisk-folge.svg')


def f_7_3a():
    fig = Fig('s2')
    S = 620
    x0, y0 = 270, 120
    fig.rect(x0, y0, S, S, stroke=fig.p['text'], width=5)
    shades = ['#1B4F8A', '#3A6BA3', '#6189B8', '#8FADCC', '#BDD0E2']
    # 1/2 venstre, 1/4 øvre høyre, 1/8, 1/16 ... spiral
    rects = [(x0, y0, S / 2, S, '1/2'),
             (x0 + S / 2, y0, S / 2, S / 2, '1/4'),
             (x0 + 3 * S / 4, y0 + S / 2, S / 4, S / 2, '1/8'),
             (x0 + S / 2, y0 + 3 * S / 4, S / 4, S / 4, '1/16'),
             (x0 + S / 2, y0 + S / 2, S / 8, S / 4, '1/32')]
    for i, (rx, ry, rw, rh, lab) in enumerate(rects):
        fig.rect(rx, ry, rw, rh, fill=shades[i], stroke=fig.p['bg'], width=3)
        tcol = '#FFFFFF' if i < 3 else fig.p['text']
        fig.text(rx + rw / 2, ry + rh / 2 + 11, lab, 31 if i < 4 else 24, color=tcol, bold=True)
    fig.text(x0 + S / 2 + S / 8 + S / 16, y0 + S / 2 + S / 8 + 10, '⋯', 34)
    fig.text(W / 2, 830, 'summen nærmer seg hele kvadratet: S = 1', 34, bold=True)
    fig.text(1180, 380, '1/2 + 1/4 + 1/8 + ⋯ = 1', 36, bold=True)
    save(fig, 's2-7-3-uendelig-rekke-kvadrat.svg')


def f_7_3b():
    fig = Fig('s2')
    tx, ty = fig.coords(0, 13, 0, 6.4, box=(240, 120, 1340, 740), grid=False,
                        xticks=[], yticks=[2], xlabel='antall ledd n', ylabel='delsum Sₙ')
    fig.line(tx(0), ty(2), tx(12.7), ty(2), RED, 3.5, dash='14 10')
    # konvergerende: S_n = 2(1 - 0.62^n)
    for n in range(1, 13):
        fig.circle(tx(n), ty(2 * (1 - 0.62 ** n)), 9, fill=BLUE)
    # divergerende: S_n = 0.45n
    for n in range(1, 13):
        v = 0.47 * n
        if v < 6.2:
            fig.circle(tx(n), ty(v), 9, fill=RED)
    fig.text(tx(8.4), ty(1.5), 'konvergerer: S = 2', 31, bold=True, color=BLUE)
    fig.text(tx(8.2), ty(4.9), 'divergerer', 31, bold=True, color=RED)
    save(fig, 's2-7-3-konvergens-divergens.svg')


def f_7_4():
    fig = Fig('s2')
    # annuitet: lån 100, rente 5 %, 12 terminer
    r, nterm, L = 0.05, 12, 100.0
    T = L * r / (1 - (1 + r) ** -nterm)
    rest = L
    rents, avdrag, rests = [], [], []
    for _ in range(nterm):
        rent = rest * r
        av = T - rent
        rents.append(rent)
        avdrag.append(av)
        rest -= av
        rests.append(rest)
    tx, ty = fig.coords(0, nterm + 1, 0, 118, box=(250, 140, 1340, 720), grid=False,
                        xticks=[], yticks=[], xlabel='termin', ylabel='kroner')
    bw = 0.62
    sc = 7.5  # skaler terminbeløp synlig
    for i in range(nterm):
        x = i + 1
        hr, ha = rents[i] * sc, avdrag[i] * sc
        fig.rect(tx(x - bw / 2), ty(hr), tx(x + bw / 2) - tx(x - bw / 2), ty(0) - ty(hr), fill=RED, opacity=0.7)
        fig.rect(tx(x - bw / 2), ty(hr + ha), tx(x + bw / 2) - tx(x - bw / 2), ty(hr) - ty(hr + ha), fill=BLUE, opacity=0.8)
    fig.poly([(tx(i + 1), ty(rests[i])) for i in range(nterm)], stroke=GRAY, width=4.5)
    fig.text(tx(1.4), ty(rests[0] + 6), 'restgjeld', 29, bold=True, color=GRAY)
    # forklaring øverst til høyre (unngår kollisjon med y-aksen)
    for j, (lab, col, op) in enumerate((('avdrag', BLUE, 0.8), ('renter', RED, 0.7))):
        lx, lyv = tx(8.8), 110 - j * 13
        fig.rect(lx, ty(lyv) - 15, 30, 30, fill=col, opacity=op)
        fig.text(lx + 44, ty(lyv) + 10, lab, 29, anchor='start', bold=True, color=col)
    fig.text(W / 2, 85, 'fast terminbeløp: rentedel ned, avdragsdel opp', 35, bold=True)
    save(fig, 's2-7-4-annuitetslan.svg')


def f_7_5():
    fig = Fig('s2')
    # Fibonacci-kvadrater 1,1,2,3,5,8,13 i klassisk spiral, enhet u
    u = 38
    # plassering (klassisk layout, koordinater i enheter, y opp)
    sq = [(0, 0, 1), (1, 0, 1), (0, -2, 2), (-3, -2, 3), (-3, 1, 5), (2, -2, 8), (-3, -10, 13)]
    # ^ beregnet manuelt: verifiser ved tegning - bruk standard layout i stedet:
    sq = []
    # standard: start 1x1 på (0,0); neste 1x1 til høyre (1,0); 2x2 under (0,-2)...
    # Bruk kjent sekvens med retninger: høyre, opp, venstre, ned ...
    a, b = 1, 1
    x0u, y0u = 0, 0
    sq.append((0, 0, 1))
    sq.append((1, 0, 1))
    # 2 over de to første
    sq.append((0, 1, 2))
    # 3 til venstre
    sq.append((-3, 0, 3))
    # 5 under
    sq.append((-3, -5, 5))
    # 8 til høyre
    sq.append((2, -5, 8))
    # 13 over: fra (-3, 3) ... total bbox nå x:[-3,10], y:[-5,3] -> 13 over passer (-3,3,13)
    sq.append((-3, 3, 13))
    cols = [BLUE, RED, LBLUE, PURPLE, BLUE, RED, LBLUE]
    # sentrér: bbox x [-3,10], y [-5,16]
    offx, offy = 560 - (-3) * u, 90 + 16 * u
    P = lambda xu, yu: (offx + xu * u, offy - yu * u)
    for i, (xu, yu, s) in enumerate(sq):
        px, py = P(xu, yu + s)
        fig.rect(px, py, s * u, s * u, fill=cols[i], opacity=0.22, stroke=fig.p['text'], width=3)
        fig.text(px + s * u / 2, py + s * u / 2 + (12 if s > 1 else 9), str(s), 30 if s > 1 else 22, bold=True)
    # spiral av kvartsirkler gjennom kvadratene (sammenhengende kurve)
    arcs = [((1, 1), 1, 180, 270), ((1, 1), 1, 270, 360), ((0, 1), 2, 0, 90),
            ((0, 0), 3, 90, 180), ((2, 0), 5, 180, 270), ((2, 3), 8, 270, 360), ((-3, 3), 13, 0, 90)]
    for (cxu, cyu), rr, a0, a1 in arcs:
        cpx, cpy = P(cxu, cyu)
        pts = []
        for i in range(31):
            ang = math.radians(a0 + (a1 - a0) * i / 30)
            pts.append((cpx + rr * u * math.cos(ang), cpy - rr * u * math.sin(ang)))
        fig.poly(pts, stroke=fig.p['text'], width=4)
    fig.text(1290, 800, 'Fₙ = Fₙ₋₁ + Fₙ₋₂', 36, bold=True)
    save(fig, 's2-7-5-fibonacci-spiral.svg')


# ====================================================================
# Kapittel 8: Økonomiske modeller
# ====================================================================

def f_8_1():
    fig = Fig('s2')
    K = lambda x: 0.08 * x * x + 2 * x + 40
    # tangering fra origo: K(x)/x minimal der K'(x) = K(x)/x -> 0.16x + 2 = 0.08x + 2 + 40/x -> 0.08x = 40/x -> x = sqrt(500)
    xs = math.sqrt(500)  # 22.36
    slope = K(xs) / xs
    tx, ty = fig.coords(0, 42, 0, 260, box=(240, 110, 1360, 740), grid=False,
                        xticks=[], yticks=[], xlabel='antall enheter', ylabel='kroner')
    fig.plot(lambda x: slope * x, xmin=0, xmax=40, color=RED, width=4)
    fig.plot(K, xmin=0, xmax=40, color=BLUE, width=5)
    fig.line(tx(xs), ty(K(xs)), tx(xs), ty(0), GRAY, 2.5, dash='9 8')
    fig.circle(tx(xs), ty(K(xs)), 11, fill=RED)
    fig.text(tx(xs), ty(0) + 46, 'x*', 32, bold=True, italic=True)
    fig.text(tx(36.5), ty(K(38)), 'K(x)', 31, bold=True, color=BLUE, italic=True)
    fig.text(W / 2, 845, 'enhetskostnaden er minst der linjen fra origo tangerer K(x)', 32, bold=True)
    save(fig, 's2-8-1-enhetskostnad-minimum.svg')


def f_8_2():
    fig = Fig('s2')
    MC = lambda x: 0.28 * (x - 8) ** 2 + 9
    MR = lambda x: 32 - 0.9 * x
    xs = 8.0
    for _ in range(60):
        xs = xs - (MC(xs) - MR(xs)) / (0.56 * (xs - 8) + 0.9)
    tx, ty = fig.coords(0, 22, 0, 44, box=(240, 120, 1360, 740), grid=False,
                        xticks=[], yticks=[], xlabel='antall enheter', ylabel='kroner per enhet')
    fig.plot(MC, xmin=1, xmax=20.5, color=RED, width=5)
    fig.plot(MR, xmin=0, xmax=21, color=BLUE, width=5)
    fig.line(tx(xs), ty(MR(xs)), tx(xs), ty(0), GRAY, 3, dash='10 8')
    fig.point(xs, MR(xs), color=fig.p['text'], r=11)
    fig.text(tx(xs), ty(0) + 46, 'x*', 32, bold=True, italic=True)
    fig.text(tx(5.6), ty(38), 'MR > MC: produser mer', 30, bold=True, color=BLUE)
    fig.text(tx(17.4), ty(38), 'MR < MC: produser mindre', 30, bold=True, color=RED)
    fig.text(tx(2.4), ty(MC(2.4)) - 36, 'MC', 31, bold=True, color=RED)
    fig.text(tx(19.8), ty(MR(19.8)) - 32, 'MR', 31, bold=True, color=BLUE)
    save(fig, 's2-8-2-profittmaksimering-mr-mc.svg')


def f_8_4():
    fig = Fig('s2')
    E = lambda x: 14 - 0.4 * x
    T = lambda x: 2 + 0.8 * x
    xe, pe = 10, 10
    tx, ty = fig.coords(0, 18, 0, 17, box=(250, 110, 1340, 760), grid=False,
                        xticks=[], yticks=[], xlabel='mengde', ylabel='pris')
    fig.poly([(tx(0), ty(E(0))), (tx(0), ty(pe)), (tx(xe), ty(pe))], fill=BLUE, opacity=0.22, close=True)
    fig.poly([(tx(0), ty(T(0))), (tx(0), ty(pe)), (tx(xe), ty(pe))], fill=RED, opacity=0.22, close=True)
    fig.plot(E, xmin=0, xmax=16, color=BLUE, width=5)
    fig.plot(T, xmin=0, xmax=16, color=RED, width=5)
    fig.line(tx(0), ty(pe), tx(xe), ty(pe), GRAY, 2.5, dash='10 8')
    fig.line(tx(xe), ty(pe), tx(xe), ty(0), GRAY, 2.5, dash='10 8')
    fig.point(xe, pe, color=fig.p['text'], r=10)
    fig.text(tx(0) - 16, ty(pe) + 10, 'p*', 30, anchor='end', bold=True, italic=True)
    fig.text(tx(xe), ty(0) + 44, 'x*', 30, bold=True, italic=True)
    fig.text(tx(3.3), ty(11.8), 'KO = ∫ (E − p*) dx', 30, anchor='start', bold=True, color=BLUE)
    fig.text(tx(3.3), ty(7.9), 'PO = ∫ (p* − T) dx', 30, anchor='start', bold=True, color=RED)
    save(fig, 's2-8-4-overskudd-integraler.svg')


def f_8_5():
    fig = Fig('s2')
    y = 470
    x0, x1 = 220, 1380
    fig.line(x0, y, x1, y, fig.p['text'], 5)
    for t, lab in ((0, 'år 0'), (10, 'år 10')):
        xx = x0 + (x1 - x0) * t / 10
        fig.line(xx, y - 16, xx, y + 16, fig.p['text'], 4)
        fig.text(xx, y + 58, lab, 30, bold=True)
    for t in range(1, 10):
        xx = x0 + (x1 - x0) * t / 10
        fig.line(xx, y - 9, xx, y + 9, fig.p['text'], 2.5)
    fig.text(x0, y - 200, '10 000 kr', 34, bold=True)
    fig.text(x1, y - 200, '16 289 kr', 34, bold=True)
    # blå pil over med eksponentialkurve antydet
    fig.arrow(x0 + 100, y - 130, x1 - 100, y - 130, BLUE, 5, head=16)
    fig.text((x0 + x1) / 2, y - 156, '· 1,05¹⁰', 34, bold=True, color=BLUE)
    pts = [(x0 + 110 + (x1 - x0 - 240) * i / 50, y - 250 - 95 * (1.05 ** (10 * i / 50) - 1) / 0.629) for i in range(51)]
    fig.poly(pts, stroke=BLUE, width=3.5, dash='2 0')
    # rød pil under mot venstre
    fig.arrow(x1 - 100, y + 150, x0 + 100, y + 150, RED, 5, head=16)
    fig.text((x0 + x1) / 2, y + 210, 'nåverdi: / 1,05¹⁰', 34, bold=True, color=RED)
    save(fig, 's2-8-5-rentesrente-naverdi.svg')


# ====================================================================
# Kapittel 9: Følger, figurtall og programmering
# ====================================================================

def f_9_2():
    fig = Fig('s2')
    rr = 11
    # trekantall 1, 3, 6, 10
    tri = [1, 2, 3, 4]
    xstarts = [180, 430, 720, 1080]
    for ti, n in enumerate(tri):
        x0 = xstarts[ti]
        y0 = 300
        cnt = 0
        for r in range(n):
            for c in range(r + 1):
                fig.circle(x0 + c * 34 - r * 17, y0 - (n - 1 - r) * 32, rr, fill=BLUE)
                cnt += 1
        fig.text(x0, y0 + 60, str(cnt), 30, bold=True)
    # kvadrattall 1, 4, 9, 16 med diagonal
    kv = [1, 2, 3, 4]
    for ki, n in enumerate(kv):
        x0 = xstarts[ki]
        y0 = 700
        for r in range(n):
            for c in range(n):
                over = c > r  # over diagonalen
                fig.circle(x0 + (c - (n - 1) / 2) * 34, y0 - r * 32, rr, fill=RED if over else BLUE)
        # diagonal linje
        fig.line(x0 - (n - 1) / 2 * 34 - 16, y0 + 20, x0 + (n - 1) / 2 * 34 + 18, y0 - (n - 1) * 32 - 18, fig.p['text'], 3)
        fig.text(x0, y0 + 70, str(n * n), 30, bold=True)
    fig.text(1290, 480, '6 + 10 = 16 = 4²', 34, bold=True)
    save(fig, 's2-9-2-figurtall.svg')


def f_9_3():
    fig = Fig('s2')
    cx = 540
    def oval(y, lab):
        fig.raw(f'<ellipse cx="{cx}" cy="{y}" rx="130" ry="44" fill="{BLUE}22" stroke="{BLUE}" stroke-width="4"/>')
        fig.text(cx, y + 11, lab, 29, bold=True)
    def boxr(y, lab, x=cx, bw=320):
        fig.rect(x - bw / 2, y - 42, bw, 84, fill=BLUE + '15', stroke=BLUE, width=4, rx=12)
        fig.text(x, y + 11, lab, 29, bold=True)
    oval(105, 'start')
    boxr(250, 'sum = 0, n = 1')
    # rombe
    dy, dw, dh = 415, 200, 75
    fig.poly([(cx, dy - dh), (cx + dw, dy), (cx, dy + dh), (cx - dw, dy)],
             fill=RED + '18', stroke=RED, width=4, close=True)
    fig.text(cx, dy + 11, 'n ≤ 100?', 30, bold=True)
    boxr(610, 'sum = sum + n')
    boxr(760, 'n = n + 1')
    # ja/nei
    fig.arrow(cx, 149, cx, 204, fig.p['text'], 4)
    fig.arrow(cx, 292, cx, dy - dh - 6, fig.p['text'], 4)
    fig.arrow(cx, dy + dh, cx, 564, fig.p['text'], 4)
    fig.text(cx + 20, dy + dh + 44, 'ja', 29, anchor='start', bold=True, color=BLUE)
    fig.arrow(cx, 652, cx, 714, fig.p['text'], 4)
    # sløyfe tilbake: fra n=n+1 ut til venstre og opp til romben
    fig.line(cx - 160, 760, 215, 760, fig.p['text'], 4)
    fig.line(215, 760, 215, dy, fig.p['text'], 4)
    fig.arrow(215, dy, cx - dw - 8, dy, fig.p['text'], 4)
    # nei-gren til høyre
    fig.line(cx + dw, dy, 1000, dy, fig.p['text'], 4)
    fig.text(cx + dw + 30, dy - 16, 'nei', 29, anchor='start', bold=True, color=RED)
    boxr(dy, 'skriv ut sum', x=1240, bw=320)
    fig.arrow(1000, dy, 1240 - 160 - 8, dy, fig.p['text'], 4)
    fig.raw(f'<ellipse cx="1240" cy="610" rx="120" ry="44" fill="{BLUE}22" stroke="{BLUE}" stroke-width="4"/>')
    fig.text(1240, 621, 'slutt', 29, bold=True)
    fig.arrow(1240, dy + 42, 1240, 560, fig.p['text'], 4)
    save(fig, 's2-9-3-flytskjema-rekkesum.svg')


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for name, fn in sorted(globals().items()):
        if name.startswith('f_') and callable(fn):
            fn()
