#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for 1T-boka.

Kjør:  python3 scripts/svg/figurer-1t.py
Output: public/images/content/1t/*.svg
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, fmt, W, H, PALETTES

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..',
                   'public', 'images', 'content', '1t')

P = PALETTES['1t']
INK = P['main']        # mørk skifergrå
BLUE = P['accent']     # klar blå
ORANGE = P['extra']    # varm oransje
RED = P['warn']
GREEN = '#3F9B68'
LBLUE = '#C9DFF1'
LORANGE = '#F8D9C0'
LGREEN = '#CDE8D8'
LGRAY = '#E6E9EC'


def save(fig, name):
    path = os.path.normpath(os.path.join(OUT, name))
    fig.save(path)
    print('skrev', path)


# ---------------------------------------------------------------- hjelpere

def dim(fig, x1, y1, x2, y2, label, color=None, size=30, off=(0, -14), width=3):
    """Målpil med pilhoder i begge ender og etikett ved midtpunktet."""
    c = color or fig.p['text']
    fig.arrow(x1, y1, x2, y2, c, width, head=12)
    fig.arrow(x2, y2, x1, y1, c, width, head=12)
    mx, my = (x1 + x2) / 2 + off[0], (y1 + y2) / 2 + off[1]
    fig.text(mx, my, label, size, bold=True)


def angle_arc(fig, cx, cy, r, a1, a2, color, width=4, double=False, dash=None):
    """Vinkelbue fra a1 til a2 grader (mot klokka, mattekonvensjon, y opp)."""
    def pt(a, rr):
        return cx + rr * math.cos(math.radians(a)), cy - rr * math.sin(math.radians(a))
    d = f' stroke-dasharray="{dash}"' if dash else ''
    for rr in ([r, r - 12] if double else [r]):
        x1, y1 = pt(a1, rr)
        x2, y2 = pt(a2, rr)
        large = 1 if (a2 - a1) % 360 > 180 else 0
        fig.raw(f'<path d="M {x1:.1f},{y1:.1f} A {rr},{rr} 0 {large} 0 {x2:.1f},{y2:.1f}" fill="none" stroke="{color}" stroke-width="{width}"{d}/>')


def ray_ang(v, p):
    """Vinkel (grader, y opp) til strålen fra v mot p."""
    return math.degrees(math.atan2(v[1] - p[1], p[0] - v[0])) % 360


def mark_angle(fig, v, p1, p2, r, color, label=None, lr=None, double=False,
               size=30, lcolor=None, width=4):
    """Vinkelbue i hjørnet v mellom strålene mot p1 og p2, med etikett ved halveringslinjen."""
    a1, a2 = ray_ang(v, p1), ray_ang(v, p2)
    if (a2 - a1) % 360 > 180:
        a1, a2 = a2, a1
    if a2 < a1:
        a2 += 360
    angle_arc(fig, v[0], v[1], r, a1, a2, color, width=width, double=double)
    if label:
        am = math.radians((a1 + a2) / 2)
        rr = lr if lr is not None else r + 46
        fig.text(v[0] + rr * math.cos(am), v[1] - rr * math.sin(am) + 10,
                 label, size, bold=True, color=lcolor or color)


def wedge(fig, cx, cy, r, a1, a2, color, opacity=1, stroke=None):
    """Fylt vinkelsektor fra a1 til a2 grader (y opp, mot klokka)."""
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1))
    x2, y2 = cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2))
    large = 1 if (a2 - a1) % 360 > 180 else 0
    s = f' stroke="{stroke}" stroke-width="3"' if stroke else ''
    fig.raw(f'<path d="M {cx:.1f},{cy:.1f} L {x1:.1f},{y1:.1f} A {r},{r} 0 {large} 0 {x2:.1f},{y2:.1f} Z" fill="{color}" opacity="{opacity}"{s}/>')


def unit(a, b):
    d = math.hypot(b[0] - a[0], b[1] - a[1])
    return (b[0] - a[0]) / d, (b[1] - a[1]) / d


def right_mark(fig, v, p1, p2, s=26, color=None):
    """Kvadratsymbol for rett vinkel i hjørnet v mellom strålene mot p1 og p2."""
    u1, u2 = unit(v, p1), unit(v, p2)
    a = (v[0] + u1[0] * s, v[1] + u1[1] * s)
    b = (v[0] + (u1[0] + u2[0]) * s, v[1] + (u1[1] + u2[1]) * s)
    c = (v[0] + u2[0] * s, v[1] + u2[1] * s)
    fig.poly([a, b, c], stroke=color or fig.p['text'], width=3)


def side_ticks(fig, p1, p2, n=1, color=None, L=20, gap=14):
    """n korte tverrstreker på midten av siden p1-p2 (kongruens-/likhetsmarkering)."""
    c = color or fig.p['text']
    mx, my = (p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2
    ux, uy = unit(p1, p2)
    nx, ny = -uy, ux
    for i in range(n):
        off = (i - (n - 1) / 2) * gap
        cx, cy = mx + ux * off, my + uy * off
        fig.line(cx - nx * L / 2, cy - ny * L / 2, cx + nx * L / 2, cy + ny * L / 2, c, 4)


def arc_arrow(fig, x1, y1, x2, y2, bulge, color, width=4, head=14):
    """Buet pil (kvadratisk bezier) fra (x1,y1) til (x2,y2); bulge > 0 buler mot venstre for fartsretningen."""
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    dx, dy = x2 - x1, y2 - y1
    L = math.hypot(dx, dy)
    nx, ny = -dy / L, dx / L
    cx, cy = mx + nx * bulge, my + ny * bulge
    fig.raw(f'<path d="M {x1:.1f},{y1:.1f} Q {cx:.1f},{cy:.1f} {x2:.1f},{y2:.1f}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>')
    ang = math.atan2(y2 - cy, x2 - cx)
    for da in (math.radians(150), math.radians(-150)):
        fig.line(x2, y2, x2 + head * math.cos(ang + da), y2 + head * math.sin(ang + da), color, width)


def check_mark(fig, x, y, s, color=GREEN, width=8):
    fig.poly([(x - s * 0.5, y), (x - s * 0.12, y + s * 0.38), (x + s * 0.55, y - s * 0.5)],
             stroke=color, width=width)


def cross_mark(fig, x, y, s, color=None, width=7):
    c = color or RED
    fig.line(x - s, y - s, x + s, y + s, c, width)
    fig.line(x - s, y + s, x + s, y - s, c, width)


def warn_tri(fig, x, y, s, color=ORANGE):
    """Varseltrekant med utropstegn, sentrert rundt (x, y)."""
    h = s * 0.87
    fig.poly([(x - s / 2, y + h / 2), (x + s / 2, y + h / 2), (x, y - h / 2)],
             fill=color, opacity=0.9, close=True)
    fig.text(x, y + h / 2 - 10, '!', int(s * 0.55), color='#FFFFFF', bold=True)


def frac_text(fig, cx, cy, num, den, size=40, color=None, bw=None):
    """Brøk med ekte brøkstrek, sentrert i (cx, cy)."""
    c = color or fig.p['text']
    w = bw or (size * 0.62 * max(len(num), len(den)))
    fig.text(cx, cy - size * 0.28, num, size, bold=True, color=c)
    fig.line(cx - w / 2, cy, cx + w / 2, cy, c, 4)
    fig.text(cx, cy + size * 0.95, den, size, bold=True, color=c)
    return w


def person(fig, x, ground, h, color=None):
    """Enkel strekfigur med føttene i (x, ground) og total høyde h."""
    c = color or fig.p['main']
    r = h * 0.13
    fig.circle(x, ground - h + r, r, stroke=c, width=5)
    fig.line(x, ground - h + 2 * r, x, ground - h * 0.32, c, 5)
    fig.line(x, ground - h * 0.32, x - h * 0.16, ground, c, 5)
    fig.line(x, ground - h * 0.32, x + h * 0.16, ground, c, 5)
    fig.line(x - h * 0.2, ground - h * 0.62, x + h * 0.2, ground - h * 0.62, c, 5)


# ================================================================ KAPITTEL 1

def f_1_1_tallinje():
    fig = Fig('1t')
    y = 470
    xmin, xmax, x0, x1 = -6.6, 6.6, 130, 1470
    sx = (x1 - x0) / (xmax - xmin)
    tx = lambda v: x0 + (v - xmin) * sx
    # svake fargesoner
    fig.rect(tx(-6.4), y - 26, tx(0) - tx(-6.4), 52, fill=BLUE, opacity=0.10)
    fig.rect(tx(0), y - 26, tx(6.4) - tx(0), 52, fill=ORANGE, opacity=0.10)
    fig.arrow(x0 - 20, y, x1 + 30, y, fig.p['text'], 4)
    for t in range(-6, 7):
        fig.line(tx(t), y - 14, tx(t), y + 14, fig.p['text'], 3)
        col = BLUE if t < 0 else (ORANGE if t > 0 else fig.p['text'])
        fig.text(tx(t), y + 56, fmt(t), 30 if t != 0 else 34, color=col, bold=(t == 0))
    fig.circle(tx(0), y, 9, fill=fig.p['text'])
    # (−3) + 5 = 2 : buet pil over
    arc_arrow(fig, tx(-3), y - 36, tx(2), y - 36, -130, BLUE, 5, head=16)
    fig.text((tx(-3) + tx(2)) / 2, y - 210, '(−3) + 5 = 2', 40, color=BLUE, bold=True)
    fig.text((tx(-3) + tx(2)) / 2, y - 152, 'lengde 5', 28, color=BLUE)
    fig.circle(tx(-3), y, 10, fill=BLUE)
    fig.circle(tx(2), y, 10, fill=BLUE)
    # 4 − 7 = −3 : buet pil under
    arc_arrow(fig, tx(4), y + 92, tx(-3), y + 92, -130, ORANGE, 5, head=16)
    fig.text((tx(4) + tx(-3)) / 2, y + 300, '4 − 7 = −3', 40, color=ORANGE, bold=True)
    fig.text((tx(4) + tx(-3)) / 2, y + 244, '7 mot venstre', 28, color=ORANGE)
    fig.circle(tx(4), y, 10, fill=ORANGE)
    save(fig, '1t-1-1-tallinje-negative-tall.svg')


def f_1_2_potenser_dobling():
    fig = Fig('1t')
    vals = [2, 4, 8, 16, 32]
    base_y = 780
    unit_h = 560 / 32
    bw, gap = 170, 110
    x0 = (W - (5 * bw + 4 * gap)) / 2
    for i, v in enumerate(vals):
        x = x0 + i * (bw + gap)
        h = v * unit_h
        fig.rect(x, base_y - h, bw, h, fill=BLUE, opacity=0.85)
        fig.line(x, base_y - h, x + bw, base_y - h, ORANGE, 8)
        fig.text(x + bw / 2, base_y + 50, f'2{"¹²³⁴⁵"[i]} = {v}', 34, bold=True)
        if i < 4:
            ay = base_y - h - 40
            arc_arrow(fig, x + bw - 10, ay, x + bw + gap + 10, ay - vals[i + 1] * unit_h + h, -60, ORANGE, 4, head=12)
            fig.text(x + bw + gap / 2, ay - (vals[i + 1] - vals[i]) * unit_h / 2 - 50, '·2', 32, color=ORANGE, bold=True)
    fig.line(x0 - 50, base_y, x0 + 5 * bw + 4 * gap + 50, base_y, fig.p['text'], 4)
    save(fig, '1t-1-2-potenser-dobling.svg')


def f_1_4_arealmodell():
    fig = Fig('1t')
    x, y, s = 220, 170, 560
    cw, rh = s / 3, s / 4
    # 2 av 3 kolonner blå
    fig.rect(x, y, 2 * cw, s, fill=BLUE, opacity=0.30)
    # 3 av 4 rader oransje
    fig.rect(x, y, s, 3 * rh, fill=ORANGE, opacity=0.30)
    # overlapp mørkere
    fig.rect(x, y, 2 * cw, 3 * rh, fill='#7A5E8E', opacity=0.55)
    for i in range(4):
        fig.line(x + i * cw, y, x + i * cw, y + s, INK, 3)
    for j in range(5):
        fig.line(x, y + j * rh, x + s, y + j * rh, INK, 3)
    fig.rect(x, y, s, s, stroke=INK, width=4)
    fig.text(x + cw, y - 30, '2/3', 32, color=BLUE, bold=True)
    fig.text(x - 40, y + 1.5 * rh + 10, '3/4', 32, color=ORANGE, bold=True)
    # regnestykket med ekte brøkstreker
    cx, cy = 1130, 440
    frac_text(fig, cx - 230, cy, '2', '3', 44)
    fig.text(cx - 155, cy + 14, '·', 48, bold=True)
    frac_text(fig, cx - 80, cy, '3', '4', 44)
    fig.text(cx + 0, cy + 14, '=', 48, bold=True)
    frac_text(fig, cx + 90, cy, '6', '12', 44)
    fig.text(cx + 185, cy + 14, '=', 48, bold=True)
    frac_text(fig, cx + 275, cy, '1', '2', 44)
    fig.text(cx + 25, cy + 170, '6 av 12 ruter er dobbeltskravert', 30, color='#7A5E8E', bold=True)
    save(fig, '1t-1-4-brokmultiplikasjon-arealmodell.svg')


def f_1_5_kvadratsetning():
    fig = Fig('1t')
    fig.title('(a + b)² = a² + 2ab + b²')
    u = 180
    a, b = 2 * u, u
    x, y = 480, 200
    fig.rect(x, y, a, a, fill=BLUE, opacity=0.45)
    fig.rect(x + a, y, b, a, fill=LGRAY)
    fig.rect(x, y + a, a, b, fill=LGRAY)
    fig.rect(x + a, y + a, b, b, fill=ORANGE, opacity=0.55)
    for (px, py, w_, h_) in [(x, y, a, a), (x + a, y, b, a), (x, y + a, a, b), (x + a, y + a, b, b)]:
        fig.rect(px, py, w_, h_, stroke=INK, width=4)
    fig.text(x + a / 2, y + a / 2 + 14, 'a²', 46, bold=True)
    fig.text(x + a + b / 2, y + a / 2 + 14, 'ab', 42, bold=True)
    fig.text(x + a / 2, y + a + b / 2 + 14, 'ab', 42, bold=True)
    fig.text(x + a + b / 2, y + a + b / 2 + 14, 'b²', 42, bold=True)
    dim(fig, x, y - 44, x + a, y - 44, 'a', size=34)
    dim(fig, x + a, y - 44, x + a + b, y - 44, 'b', size=34)
    dim(fig, x - 44, y, x - 44, y + a, 'a', size=34, off=(-28, 8))
    dim(fig, x - 44, y + a, x - 44, y + a + b, 'b', size=34, off=(-28, 8))
    save(fig, '1t-1-5-forste-kvadratsetning-geometrisk.svg')


def f_1_5_konjugat():
    fig = Fig('1t')
    fig.title('a² − b² = (a + b)(a − b)')
    u = 150
    a, b = 3 * u, u
    # venstre: a²-kvadrat med b²-hjørne skåret bort
    x, y = 170, 230
    Lpts = [(x, y), (x + a - b, y), (x + a - b, y + b), (x + a, y + b),
            (x + a, y + a), (x, y + a)]
    fig.poly(Lpts, fill=BLUE, opacity=0.40, close=True)
    fig.poly(Lpts, stroke=INK, width=4, close=True)
    fig.rect(x + a - b, y, b, b, stroke=INK, width=3)
    fig.line(x + a - b, y, x + a, y + b, INK, 2, dash='8 8')
    fig.text(x + a - b / 2, y + b / 2 + 10, 'b²', 30)
    fig.text(x + (a - b) / 2 + 30, y + a / 2 + 40, 'a² − b²', 40, bold=True)
    dim(fig, x, y + a + 46, x + a, y + a + 46, 'a', size=32, off=(0, 42))
    dim(fig, x - 42, y, x - 42, y + a, 'a', size=32, off=(-26, 8))
    dim(fig, x + a + 40, y, x + a + 40, y + b, 'b', size=30, off=(30, 8))
    # pil
    fig.arrow(680, 470, 810, 470, ORANGE, 6, head=18)
    fig.text(745, 430, 'legg om', 28, color=ORANGE, bold=True)
    # høyre: rektangel (a+b) x (a−b)
    rw, rh = a + b, a - b
    x2, y2 = 900, 330
    fig.rect(x2, y2, rw, rh, fill=BLUE, opacity=0.40)
    fig.rect(x2, y2, rw, rh, stroke=INK, width=4)
    fig.line(x2 + a, y2, x2 + a, y2 + rh, INK, 3, dash='10 9')
    fig.text(x2 + rw / 2, y2 + rh / 2 + 12, '(a + b)(a − b)', 38, bold=True)
    dim(fig, x2, y2 + rh + 46, x2 + rw, y2 + rh + 46, 'a + b', size=32, off=(0, 42))
    dim(fig, x2 + rw + 44, y2, x2 + rw + 44, y2 + rh, 'a − b', size=32, off=(78, 8))
    save(fig, '1t-1-5-konjugatsetningen-geometrisk.svg')


def f_1_7_tallmengder():
    fig = Fig('1t')
    rx0, ry0, rx1, ry1 = 150, 130, 1450, 800
    fig.rect(rx0, ry0, rx1 - rx0, ry1 - ry0, fill=BLUE, opacity=0.05)
    fig.rect(rx0, ry0, rx1 - rx0, ry1 - ry0, stroke=INK, width=4, rx=18)
    cx, cy = 640, 480
    for rxe, rye, op in [(470, 265, 0.10), (330, 190, 0.14), (180, 110, 0.22)]:
        fig.raw(f'<ellipse cx="{cx}" cy="{cy}" rx="{rxe}" ry="{rye}" fill="{BLUE}" opacity="{op}"/>')
        fig.raw(f'<ellipse cx="{cx}" cy="{cy}" rx="{rxe}" ry="{rye}" fill="none" stroke="{INK}" stroke-width="4"/>')
    fig.text(cx, cy - 28, 'ℕ', 46, bold=True, color=INK)
    fig.text(cx, cy + 52, '3', 38, bold=True)
    fig.text(cx, cy - 134, 'ℤ', 44, bold=True, color=INK)
    fig.text(cx - 255, cy + 12, '−5', 38, bold=True)
    fig.text(cx, cy - 212, 'ℚ', 44, bold=True, color=INK)
    fig.text(cx - 408, cy + 12, '1/2', 38, bold=True)
    fig.text(rx0 + 60, ry0 + 70, 'ℝ', 50, bold=True, color=INK)
    fig.text(1270, 400, '√2', 40, bold=True, color=ORANGE)
    fig.text(1270, 560, 'π', 40, bold=True, color=ORANGE)
    save(fig, '1t-1-7-tallmengder-nostet.svg')


def f_1_7_union_snitt():
    fig = Fig('1t')
    r, d = 180, 110
    for cx0, mode, lab, col in [(420, 'union', 'A ∪ B', BLUE), (1180, 'snitt', 'A ∩ B', ORANGE)]:
        c1, c2 = (cx0 - d, 420), (cx0 + d, 420)
        if mode == 'union':
            fig.circle(*c1, r, fill=LBLUE)
            fig.circle(*c2, r, fill=LBLUE)
        else:
            # linseformet snitt
            h = math.sqrt(r * r - d * d)
            mx = cx0
            fig.raw(f'<path d="M {mx},{420 - h:.1f} A {r},{r} 0 0 1 {mx},{420 + h:.1f} A {r},{r} 0 0 1 {mx},{420 - h:.1f} Z" fill="{LORANGE}"/>')
        fig.circle(*c1, r, stroke=INK, width=5)
        fig.circle(*c2, r, stroke=INK, width=5)
        fig.text(c1[0] - 80, 230, 'A', 40, bold=True)
        fig.text(c2[0] + 80, 230, 'B', 40, bold=True)
        fig.text(cx0, 720, lab, 44, bold=True, color=col)
    save(fig, '1t-1-7-union-og-snitt.svg')


def f_1_9_faktorteorem():
    fig = Fig('1t')
    f = lambda x: (x + 2) * (x - 1) * (x - 3)
    tx, ty = fig.coords(-3.5, 4.5, -7, 11, box=(200, 200, 1400, 820),
                        xticks=[-3, -2, -1, 1, 2, 3, 4], yticks=[],
                        tick_size=28)
    # formel øverst med faktorer på kjente posisjoner
    fy = 100
    fig.text(478, fy, 'P(x) =', 42, anchor='end', bold=True)
    fxs = [570, 880, 1190]
    for fx, lab in zip(fxs, ['(x + 2)', '(x − 1)', '(x − 3)']):
        fig.text(fx, fy, lab, 42, bold=True, color=BLUE)
    fig.plot(f, xmin=-2.85, xmax=4.0, color=BLUE, width=5)
    for fx, z in zip(fxs, [-2, 1, 3]):
        fig.point(z, 0, color=ORANGE, r=11)
        fig.line(fx, fy + 16, tx(z), ty(0) - 22, INK, 2.5, dash='7 7')
        fig.arrow(tx(z) + (fx - tx(z)) * 0.06, ty(0) - 22 + (fy + 16 - (ty(0) - 22)) * 0.06, tx(z), ty(0) - 22, INK, 2.5, head=10)
    save(fig, '1t-1-9-faktorteoremet-graf.svg')


# ================================================================ KAPITTEL 2

def f_2_3_diskriminant():
    fig = Fig('1t')
    panels = [(120, 500, lambda x: x * x - 2, [(-math.sqrt(2), 0), (math.sqrt(2), 0)],
               'b² − 4ac > 0', 'to løsninger'),
              (610, 990, lambda x: x * x, [(0, 0)],
               'b² − 4ac = 0', 'én løsning'),
              (1100, 1480, lambda x: x * x + 1.5, [],
               'b² − 4ac < 0', 'ingen løsning')]
    for x0, x1, f, zeros, lab1, lab2 in panels:
        tx, ty = fig.coords(-2.3, 2.3, -2.6, 4.2, box=(x0, 160, x1, 640),
                            grid=False, xticks=[], yticks=[])
        fig.plot(f, color=BLUE, width=5)
        for zx, zy in zeros:
            fig.circle(tx(zx), ty(zy), 11, fill=ORANGE)
        cx = (x0 + x1) / 2
        fig.text(cx, 740, lab1, 36, bold=True)
        fig.text(cx, 800, lab2, 32, color=BLUE)
    save(fig, '1t-2-3-diskriminanten-tre-tilfeller.svg')


def f_2_4_fullstendig_kvadrat():
    fig = Fig('1t')
    u, t = 330, 110  # x = 330 px, 3 enheter = 110 px
    # venstre: x² + 6x (mangler hjørnet)
    x, y = 200, 200
    fig.rect(x, y, u, u, fill=BLUE, opacity=0.45)
    fig.rect(x, y, u, u, stroke=INK, width=4)
    fig.rect(x + u, y, t, u, fill=ORANGE, opacity=0.5)
    fig.rect(x + u, y, t, u, stroke=INK, width=4)
    fig.rect(x, y + u, u, t, fill=ORANGE, opacity=0.5)
    fig.rect(x, y + u, u, t, stroke=INK, width=4)
    fig.rect(x + u, y + u, t, t, fill=LGRAY, stroke=INK, width=3)
    fig.text(x + u / 2, y + u / 2 + 14, 'x²', 44, bold=True)
    fig.text(x + u + t / 2, y + u / 2 + 12, '3x', 34, bold=True)
    fig.text(x + u / 2, y + u + t / 2 + 12, '3x', 34, bold=True)
    fig.text(x + u + t / 2, y + u + t / 2 + 10, '9', 30, bold=True, color=INK)
    dim(fig, x, y - 40, x + u, y - 40, 'x', size=32)
    dim(fig, x + u, y - 40, x + u + t, y - 40, '3', size=30)
    fig.arrow(810, 420, 940, 420, ORANGE, 6, head=18)
    fig.text(875, 380, '+ 9', 32, color=ORANGE, bold=True)
    # høyre: komplett kvadrat (x+3)²
    x2, y2 = 980, 200
    fig.rect(x2, y2, u + t, u + t, fill=BLUE, opacity=0.18)
    fig.rect(x2, y2, u + t, u + t, stroke=INK, width=5)
    fig.line(x2 + u, y2, x2 + u, y2 + u + t, INK, 2.5, dash='9 8')
    fig.line(x2, y2 + u, x2 + u + t, y2 + u, INK, 2.5, dash='9 8')
    fig.text(x2 + (u + t) / 2, y2 + (u + t) / 2 + 14, '(x + 3)²', 42, bold=True)
    dim(fig, x2, y2 - 40, x2 + u + t, y2 - 40, 'x + 3', size=32)
    fig.text(W / 2, 830, 'x² + 6x + 9 = (x + 3)²', 44, bold=True)
    save(fig, '1t-2-4-fullstendig-kvadrat-geometrisk.svg')


def f_2_6_rotlikning():
    fig = Fig('1t')
    tx, ty = fig.coords(-3, 4.5, -2.5, 4, box=(220, 140, 1380, 800),
                        xticks=[-2, -1, 1, 2, 3, 4], yticks=[-2, -1, 1, 2, 3])
    fig.plot(lambda x: x, color=ORANGE, width=5)
    fig.plot(lambda x: math.sqrt(x + 2), xmin=-2, xmax=4.5, color=BLUE, width=5)
    fig.text(tx(4.35), ty(math.sqrt(6.35)) + 60, 'y = √(x + 2)', 34, anchor='end', bold=True, color=BLUE)
    fig.text(tx(3.55), ty(3.55) + 52, 'y = x', 34, bold=True, color=ORANGE)
    # ekte løsning (2, 2)
    fig.circle(tx(2), ty(2), 12, fill=GREEN)
    check_mark(fig, tx(2.32), ty(1.45), 34)
    fig.text(tx(2.5), ty(1.4), 'x = 2', 34, anchor='start', bold=True, color=GREEN)
    # falsk løsning (−1, 1)
    cross_mark(fig, tx(-1), ty(1), 16)
    fig.text(tx(-1) - 6, ty(1) - 44, 'x = −1: falsk løsning', 32, bold=True, color=RED)
    fig.circle(tx(-1), ty(-1), 9, fill=ORANGE)
    fig.line(tx(-1), ty(1), tx(-1), ty(-1), INK, 2.5, dash='7 7')
    fig.text(tx(-1) - 20, ty(-1) + 14, 'y = x gir −1', 28, anchor='end', color=INK)
    save(fig, '1t-2-6-rotlikning-falsk-losning.svg')


def f_2_9_kastparabel():
    fig = Fig('1t')
    f = lambda t: 6.2 - 5 * (t - 1) ** 2
    t_end = 1 + math.sqrt(6.2 / 5)
    tx, ty = fig.coords(0, 2.6, 0, 7.4, box=(230, 130, 1380, 780),
                        xticks=[1, 2], yticks=[1.2, 6.2],
                        xlabel='t (s)', ylabel='h (m)')
    fig.plot(f, xmin=0, xmax=t_end, color=BLUE, width=6)
    fig.line(tx(1), ty(0), tx(1), ty(6.2), ORANGE, 3, dash='9 8')
    fig.line(tx(0), ty(6.2), tx(1), ty(6.2), ORANGE, 3, dash='9 8')
    fig.circle(tx(1), ty(6.2), 12, fill=ORANGE)
    fig.text(tx(1) + 26, ty(6.2) - 24, 'toppunkt (1; 6,2)', 34, anchor='start', bold=True, color=ORANGE)
    # ballsilhuetter
    fig.circle(tx(0), ty(1.2), 16, fill=INK)
    fig.circle(tx(0.45), ty(f(0.45)), 16, fill=INK, opacity=0.4)
    fig.text(tx(0) + 28, ty(1.2) + 10, '(0; 1,2)', 30, anchor='start', bold=True)
    fig.point(t_end, 0, color=BLUE, r=10)
    fig.text(tx(t_end) + 14, ty(0) - 26, 't ≈ 2,1', 30, anchor='start', bold=True, color=BLUE)
    save(fig, '1t-2-9-kastparabel.svg')


# ================================================================ KAPITTEL 3

def f_3_1_kvadranter():
    fig = Fig('1t')
    tx, ty = fig.coords(-5.5, 5.5, -5.5, 5.5, box=(470, 120, 1150, 800),
                        xticks=list(range(-5, 6)), yticks=list(range(-5, 6)),
                        tick_size=24)
    for (qx, qy, col, lab) in [(1, 1, BLUE, '1. kvadrant'), (-1, 1, ORANGE, '2. kvadrant'),
                               (-1, -1, GREEN, '3. kvadrant'), (1, -1, RED, '4. kvadrant')]:
        fig.rect(min(tx(0), tx(qx * 5.5)), min(ty(0), ty(qy * 5.5)),
                 abs(tx(qx * 5.5) - tx(0)), abs(ty(qy * 5.5) - ty(0)), fill=col, opacity=0.06)
        fig.text(tx(qx * 2.8), ty(qy * 5.0) + 10, lab, 30, bold=True, color=col)
    # hjelpelinjer for A
    fig.line(tx(3), ty(2), tx(3), ty(0), ORANGE, 3, dash='8 7')
    fig.line(tx(3), ty(2), tx(0), ty(2), ORANGE, 3, dash='8 7')
    for px, py, lab, dx_, dy_ in [(3, 2, 'A(3, 2)', 16, -18), (-2, 4, 'B(−2, 4)', 16, -18),
                                  (-3, -1, 'C(−3, −1)', 14, 40), (2, -3, 'D(2, −3)', 16, 40)]:
        fig.point(px, py, color=BLUE, r=10)
        fig.text(tx(px) + dx_, ty(py) + dy_, lab, 30, anchor='start', bold=True)
    save(fig, '1t-3-1-koordinatsystemet-kvadranter.svg')


def f_3_2_stigningstall():
    fig = Fig('1t')
    tx, ty = fig.coords(-1.5, 4.5, -1.5, 6.5, box=(380, 120, 1220, 800),
                        xticks=list(range(-1, 5)), yticks=list(range(-1, 7)), tick_size=24)
    fig.plot(lambda x: 2 * x + 1, xmin=-1.2, xmax=2.7, color=BLUE, width=5)
    fig.text(tx(2.05) + 26, ty(4.3), 'y = 2x + 1', 34, anchor='start', bold=True, color=BLUE)
    fig.circle(tx(0), ty(1), 12, fill=ORANGE)
    fig.text(tx(0.25), ty(0.55), 'b = 1', 32, anchor='start', bold=True, color=ORANGE)
    # stigningstrekant (1,3) -> (2,3) -> (2,5)
    fig.line(tx(1), ty(3), tx(2), ty(3), ORANGE, 4)
    fig.line(tx(2), ty(3), tx(2), ty(5), ORANGE, 4)
    fig.text(tx(1.5), ty(3) + 38, '1', 30, bold=True, color=ORANGE)
    fig.text(tx(2) + 18, ty(4) + 10, '2', 30, anchor='start', bold=True, color=ORANGE)
    fig.text(tx(2.35), ty(3.6), 'a = 2', 32, anchor='start', bold=True, color=ORANGE)
    save(fig, '1t-3-2-stigningstall-konstantledd.svg')


def f_3_3_funksjonsmaskin():
    fig = Fig('1t')
    bx, by, bw, bh = 560, 320, 480, 240
    fig.rect(bx, by, bw, bh, stroke=INK, width=6, rx=20, fill=LGRAY)
    fig.rect(bx - 26, by + bh / 2 - 46, 26, 92, fill=INK, rx=6)
    fig.rect(bx + bw, by + bh / 2 - 46, 26, 92, fill=INK, rx=6)
    fig.text(bx + bw / 2, by + bh / 2 + 14, 'f(x) = 2x + 3', 44, bold=True)
    fig.arrow(180, by + bh / 2, bx - 40, by + bh / 2, BLUE, 6, head=18)
    fig.text(300, by + bh / 2 - 80, 'inn', 34, bold=True, color=BLUE, italic=True)
    fig.circle(420, by + bh / 2 - 50, 44, fill=BLUE)
    fig.text(420, by + bh / 2 - 36, '4', 40, bold=True, color='#FFFFFF')
    fig.arrow(bx + bw + 40, by + bh / 2, 1430, by + bh / 2, ORANGE, 6, head=18)
    fig.text(1300, by + bh / 2 - 80, 'ut', 34, bold=True, color=ORANGE, italic=True)
    fig.circle(1180, by + bh / 2 - 50, 44, fill=ORANGE)
    fig.text(1180, by + bh / 2 - 36, '11', 38, bold=True, color='#FFFFFF')
    save(fig, '1t-3-3-funksjonsmaskin.svg')


def f_3_4_parabel_anatomi():
    fig = Fig('1t')
    f = lambda x: x * x - 4 * x + 3
    tx, ty = fig.coords(-1.5, 5.5, -2, 5.5, box=(300, 120, 1300, 800),
                        xticks=[-1, 1, 2, 3, 4, 5], yticks=[-1, 1, 2, 3, 4, 5], tick_size=24)
    fig.line(tx(2), ty(-1.8), tx(2), ty(5.3), ORANGE, 3.5, dash='12 10')
    fig.plot(f, xmin=-0.5, xmax=4.5, color=BLUE, width=6)
    for z in (1, 3):
        fig.circle(tx(z), ty(0), 11, fill=ORANGE)
    fig.circle(tx(2), ty(-1), 15, fill=ORANGE)
    fig.circle(tx(0), ty(3), 11, fill=BLUE)
    # etiketter med pekelinjer
    fig.text(tx(4.0), ty(4.6), 'symmetrilinje x = 2', 32, anchor='start', bold=True, color=ORANGE)
    fig.line(tx(4.0) - 10, ty(4.6) - 10, tx(2) + 8, ty(4.0), ORANGE, 2.5)
    fig.text(tx(-1.3), ty(1.6) - 40, 'nullpunkt', 32, anchor='start', bold=True, color=ORANGE)
    fig.line(tx(-0.62), ty(1.55), tx(1) - 8, ty(0) - 10, ORANGE, 2.5)
    fig.line(tx(-0.62), ty(1.55), tx(3) - 10, ty(0) - 12, ORANGE, 2.5)
    fig.text(tx(2), ty(-1) + 62, 'bunnpunkt (2, −1)', 32, bold=True, color=ORANGE)
    fig.text(tx(0) - 24, ty(3) - 24, '(0, 3)', 32, anchor='end', bold=True, color=BLUE)
    save(fig, '1t-3-4-parabelens-anatomi.svg')


def f_3_5_graf_fortegnslinje():
    fig = Fig('1t')
    f = lambda x: (x + 2) * (x - 3) / 2
    tx, ty = fig.coords(-4.2, 5.2, -4.2, 5.5, box=(200, 100, 1400, 560),
                        xticks=[-4, -3, -1, 1, 2, 4, 5], yticks=[], tick_size=24)
    fig.plot(f, xmin=-3.55, xmax=4.55, color=BLUE, width=6)
    fig.plot(f, xmin=-2, xmax=3, color=RED, width=6)
    for z in (-2, 3):
        fig.circle(tx(z), ty(0), 11, fill=fig.p['bg'], stroke=INK, width=5)
        fig.text(tx(z), ty(0) - 26, fmt(z), 30, bold=True)
    # fortegnslinje vertikalt justert
    sy = 740
    fig.line(tx(-2), ty(0) + 14, tx(-2), sy - 16, INK, 3, dash='9 8')
    fig.line(tx(3), ty(0) + 14, tx(3), sy - 16, INK, 3, dash='9 8')
    fig.line(tx(-4.2), sy, tx(5.2), sy, fig.p['text'], 3)
    fig.text(tx(-4.2) - 24, sy + 10, 'f(x)', 32, anchor='end', bold=True, italic=True)
    for z in (-2, 3):
        fig.circle(tx(z), sy, 9, fill=fig.p['bg'], stroke=fig.p['text'], width=4)
        fig.text(tx(z), sy - 30, fmt(z), 30, bold=True)
    segs = [(-4.2, -2, '+', BLUE), (-2, 3, '−', RED), (3, 5.2, '+', BLUE)]
    for a, b, s, col in segs:
        fig.line(tx(a) + 26, sy, tx(b) - 26, sy, col, 7, dash=None if s == '+' else '14 12')
        fig.text((tx(a) + tx(b)) / 2, sy + 52, s, 38, color=col, bold=True)
    save(fig, '1t-3-5-graf-og-fortegnslinje.svg')


def f_3_6_polynomgalleri():
    fig = Fig('1t')
    panels = [(70, 420, lambda x: 1.1 * x, '1. grad'),
              (440, 790, lambda x: x * x - 1.6, '2. grad'),
              (810, 1160, lambda x: x ** 3 - 2 * x, '3. grad'),
              (1180, 1530, lambda x: x ** 4 - 3 * x * x + 1.2, '4. grad')]
    for x0, x1, f, lab in panels:
        tx, ty = fig.coords(-2.3, 2.3, -3, 3, box=(x0, 170, x1, 630),
                            grid=False, xticks=[], yticks=[])
        fig.plot(f, color=BLUE, width=5)
        fig.text((x0 + x1) / 2, 710, lab, 34, bold=True)
    fig.text(W / 2, 820, 'Et polynom av grad n har høyst n nullpunkter', 36, bold=True)
    save(fig, '1t-3-6-polynomgrader-galleri.svg')


def f_3_7_asymptoter():
    fig = Fig('1t')
    f = lambda x: 2 + 1.6 / (x - 1)
    tx, ty = fig.coords(-4, 6, -3, 7, box=(260, 120, 1340, 800),
                        xticks=[-3, -2, -1, 2, 3, 4, 5], yticks=[-2, -1, 1, 3, 4, 5, 6],
                        tick_size=24)
    # asymptoter
    fig.line(tx(1), ty(-2.8), tx(1), ty(6.8), ORANGE, 4, dash='14 11')
    fig.line(tx(-3.8), ty(2), tx(5.8), ty(2), ORANGE, 4, dash='14 11')
    fig.text(tx(1) - 18, ty(6.5), 'x = 1', 32, anchor='end', bold=True, color=ORANGE)
    fig.text(tx(5.75), ty(2) + 48, 'y = 2', 32, anchor='end', bold=True, color=ORANGE)
    fig.plot(f, xmin=-3.8, xmax=0.82, color=BLUE, width=5)
    fig.plot(f, xmin=1.2, xmax=5.8, color=BLUE, width=5)
    fig.text(tx(-3.4), ty(3.7), 'asymptote', 32, anchor='start', bold=True, color=ORANGE)
    fig.line(tx(-2.85), ty(3.45), tx(-2.6), ty(2) + 10, ORANGE, 2.5)
    save(fig, '1t-3-7-asymptoter-rasjonal-funksjon.svg')


def f_3_8_eksponential():
    fig = Fig('1t')
    tx, ty = fig.coords(-3.2, 3.2, 0, 8.5, box=(300, 120, 1300, 800),
                        xticks=[-3, -2, -1, 1, 2, 3], yticks=[1, 2, 4, 6, 8], tick_size=24)
    fig.plot(lambda x: 2 ** x, color=BLUE, width=5)
    fig.plot(lambda x: 0.5 ** x, color=ORANGE, width=5)
    fig.text(tx(2.45), ty(2 ** 2.45) + 16, 'y = 2ˣ (vekst)', 34, anchor='end', bold=True, color=BLUE)
    fig.text(tx(-2.4), ty(0.5 ** -2.4) + 16, 'y = 0,5ˣ (nedgang)', 34, anchor='start', bold=True, color=ORANGE)
    fig.circle(tx(0), ty(1), 12, fill=INK)
    fig.text(tx(0.18), ty(1.05) + 44, '(0, 1)', 32, anchor='start', bold=True)
    save(fig, '1t-3-8-eksponentialfunksjoner-vekst-nedgang.svg')


# ================================================================ KAPITTEL 4

def f_4_1_likningssett():
    fig = Fig('1t')
    tx, ty = fig.coords(-1.5, 5.5, -2.5, 6.5, box=(330, 110, 1270, 800),
                        xticks=[-1, 1, 2, 3, 4, 5], yticks=[-2, -1, 1, 2, 3, 4, 5, 6],
                        tick_size=24)
    fig.plot(lambda x: 2 * x - 1, xmin=-0.6, xmax=3.6, color=BLUE, width=5)
    fig.plot(lambda x: -x + 5, xmin=-1.2, xmax=5.2, color=ORANGE, width=5)
    fig.text(tx(3.1) + 36, ty(2 * 3.1 - 1) + 14, 'y = 2x − 1', 33, anchor='start', bold=True, color=BLUE)
    fig.text(tx(4.3), ty(-4.3 + 5) - 24, 'y = −x + 5', 33, anchor='start', bold=True, color=ORANGE)
    fig.line(tx(2), ty(3), tx(2), ty(0), INK, 3, dash='9 8')
    fig.line(tx(2), ty(3), tx(0), ty(3), INK, 3, dash='9 8')
    fig.circle(tx(2), ty(3), 14, fill=INK)
    fig.text(tx(2) - 26, ty(3) - 34, 'x = 2, y = 3', 36, anchor='end', bold=True)
    save(fig, '1t-4-1-likningssett-grafisk.svg')


def f_4_2_ulikheter_tallinje():
    fig = Fig('1t')
    for y, lab, val, col, right, open_ in [(290, 'x > 2', 2, BLUE, True, True),
                                           (610, 'x ≤ 5', 5, ORANGE, False, False)]:
        xmin, xmax, x0, x1 = -1.5, 7.5, 180, 1420
        sx = (x1 - x0) / (xmax - xmin)
        tx = lambda v: x0 + (v - xmin) * sx
        if right:
            fig.line(tx(val), y, tx(7.3), y, col, 10, opacity=0.9)
            fig.arrow(tx(7.0), y, tx(7.4), y, col, 10, head=22)
        else:
            fig.line(tx(val), y, tx(-1.3), y, col, 10, opacity=0.9)
            fig.arrow(tx(-1.0), y, tx(-1.4), y, col, 10, head=22)
        fig.arrow(x0 - 20, y, x1 + 30, y, fig.p['text'], 4)
        for t in range(-1, 8):
            fig.line(tx(t), y - 13, tx(t), y + 13, fig.p['text'], 3)
            fig.text(tx(t), y + 54, fmt(t), 28)
        if open_:
            fig.circle(tx(val), y, 13, fill=fig.p['bg'], stroke=col, width=6)
        else:
            fig.circle(tx(val), y, 13, fill=col)
        fig.text(tx(val), y - 44, lab, 38, bold=True, color=col)
    fig.text(W / 2, 810, 'åpen sirkel: tallet er ikke med  ·  fylt sirkel: tallet er med', 32)
    save(fig, '1t-4-2-ulikheter-tallinje.svg')


def f_4_3_fortegnslinje_produkt():
    fig = Fig('1t')
    xmin, xmax, x0, x1 = -4.5, 3.5, 360, 1400
    sx = (x1 - x0) / (xmax - xmin)
    tx = lambda v: x0 + (v - xmin) * sx
    # felles x-akse øverst
    ax_y = 170
    fig.arrow(x0 - 20, ax_y, x1 + 30, ax_y, fig.p['text'], 4)
    for v in (-2, 1):
        fig.line(tx(v), ax_y - 14, tx(v), ax_y + 14, fig.p['text'], 3)
        fig.text(tx(v), ax_y - 28, fmt(v), 30, bold=True)
    fig.text(x1 + 40, ax_y + 10, 'x', 32, anchor='start', italic=True)
    rows = [('x + 2', [(-2, '0')], [(-4.5, -2, '−'), (-2, 3.5, '+')], 360),
            ('x − 1', [(1, '0')], [(-4.5, 1, '−'), (1, 3.5, '+')], 550),
            ('(x − 1)(x + 2)', [(-2, '0'), (1, '0')],
             [(-4.5, -2, '+'), (-2, 1, '−'), (1, 3.5, '+')], 740)]
    # stiplede vertikaler gjennom alt
    for v in (-2, 1):
        fig.line(tx(v), ax_y + 20, tx(v), 800, fig.p['grid'], 2.5, dash='10 9')
    for lab, zeros, segs, y in rows:
        fig.line(x0, y, x1, y, INK, 2.5)
        fig.text(x0 - 30, y + 10, lab, 32, anchor='end', bold=True)
        for a, b, s in segs:
            col = BLUE if s == '+' else RED
            fig.line(tx(a) + 28, y, tx(b) - 28, y, col, 7, dash=None if s == '+' else '14 12')
            fig.text((tx(a) + tx(b)) / 2, y - 24, s, 36, color=col, bold=True)
        for v, z in zeros:
            fig.circle(tx(v), y, 12, fill=fig.p['bg'], stroke=fig.p['text'], width=4)
            fig.text(tx(v), y + 48, z, 28, bold=True)
    save(fig, '1t-4-3-fortegnslinje-produkt.svg')


def f_4_4_andregradsulikhet():
    fig = Fig('1t')
    fig.title('x² − 4 < 0')
    f = lambda x: x * x - 4
    tx, ty = fig.coords(-4, 4, -5.5, 6, box=(330, 140, 1270, 760),
                        xticks=[-3, -1, 1, 3], yticks=[], tick_size=26)
    fig.shade_under(f, -2, 2, color=ORANGE, opacity=0.22)
    fig.plot(f, xmin=-3.1, xmax=-2, color=BLUE, width=6)
    fig.plot(f, xmin=2, xmax=3.1, color=BLUE, width=6)
    fig.plot(f, xmin=-2, xmax=2, color=ORANGE, width=6)
    # fremhevet intervall på x-aksen
    fig.line(tx(-2), ty(0), tx(2), ty(0), ORANGE, 11)
    for z in (-2, 2):
        fig.circle(tx(z), ty(0), 13, fill=fig.p['bg'], stroke=ORANGE, width=6)
        fig.text(tx(z), ty(0) - 30, fmt(z), 32, bold=True)
    fig.text(W / 2, 850, '−2 < x < 2', 44, bold=True, color=ORANGE)
    save(fig, '1t-4-4-andregradsulikhet.svg')


# ================================================================ KAPITTEL 5

def f_5_1_toppvinkler():
    fig = Fig('1t')
    cx, cy, L = 760, 430, 480
    a = 50
    for ang in (0, a):
        dx = math.cos(math.radians(ang)) * L
        dy = -math.sin(math.radians(ang)) * L
        fig.line(cx - dx, cy - dy, cx + dx, cy + dy, INK, 5)
    angle_arc(fig, cx, cy, 92, 0, a, BLUE, 4)
    angle_arc(fig, cx, cy, 92, 180, 180 + a, BLUE, 4)
    angle_arc(fig, cx, cy, 112, a, 180, ORANGE, 4, double=True)
    angle_arc(fig, cx, cy, 112, 180 + a, 360, ORANGE, 4, double=True)
    for am, r_, lab, col in [(a / 2, 165, '50°', BLUE), (180 + a / 2, 165, '50°', BLUE),
                             ((a + 180) / 2, 185, '130°', ORANGE), ((180 + a + 360) / 2, 185, '130°', ORANGE)]:
        fig.text(cx + r_ * math.cos(math.radians(am)),
                 cy - r_ * math.sin(math.radians(am)) + 12, lab, 36, bold=True, color=col)
    fig.text(W / 2, 840, '50° + 130° = 180°', 42, bold=True)
    save(fig, '1t-5-1-toppvinkler-naerliggende.svg')


def f_5_1_vinkelsum():
    fig = Fig('1t')
    # venstre: trekant 65-75-40
    A = (220, 660)
    B = (550, 660)
    AC = (B[0] - A[0]) * math.sin(math.radians(75)) / math.sin(math.radians(40))
    C = (A[0] + AC * math.cos(math.radians(65)), A[1] - AC * math.sin(math.radians(65)))
    fig.poly([A, B, C], fill=BLUE, opacity=0.12, close=True)
    fig.poly([A, B, C], stroke=INK, width=5, close=True)
    mark_angle(fig, A, B, C, 70, BLUE, '65°', lr=120, size=30)
    mark_angle(fig, B, C, A, 70, ORANGE, '75°', lr=120, size=30)
    mark_angle(fig, C, A, B, 64, GREEN, '40°', lr=116, size=30)
    # høyre: sektorene lagt langs en linje
    px, py, r = 1130, 560, 170
    fig.line(820, py, 1450, py, INK, 5)
    cum = 0
    for ang, col, lab in [(65, BLUE, '65°'), (75, ORANGE, '75°'), (40, GREEN, '40°')]:
        wedge(fig, px, py, r, cum, cum + ang, col, opacity=0.55, stroke=INK)
        am = math.radians(cum + ang / 2)
        fig.text(px + (r + 56) * math.cos(am), py - (r + 56) * math.sin(am) + 10,
                 lab, 30, bold=True, color=col)
        cum += ang
    fig.text(1130, py + 100, '65° + 75° + 40° = 180°', 38, bold=True)
    save(fig, '1t-5-1-vinkelsum-trekant.svg')


def f_5_1_trekanttyper():
    fig = Fig('1t')
    cells = [(300, 350), (800, 350), (1300, 350), (300, 760), (800, 760), (1300, 760)]
    tris = []
    # spissvinklet
    tris.append(([( -140, 0), (140, 0), (30, -190)], 'spissvinklet', None, None))
    # rettvinklet
    tris.append(([(-130, 0), (130, 0), (-130, -180)], 'rettvinklet', 'rett', None))
    # stumpvinklet
    tris.append(([(-140, 0), (140, 0), (-240, -150)], 'stumpvinklet', 'stump', None))
    # likesidet
    s = 130
    tris.append(([(-s, 0), (s, 0), (0, -s * math.sqrt(3))], 'likesidet', None, [1, 1, 1]))
    # likebeint
    tris.append(([(-110, 0), (110, 0), (0, -210)], 'likebeint', None, [None, 1, 1]))
    # ulikesidet
    tris.append(([(-150, 0), (110, 0), (-40, -170)], 'ulikesidet', None, None))
    for (cx, cy), (rel, lab, mark, ticks) in zip(cells, tris):
        pts = [(cx + dx, cy + dy) for dx, dy in rel]
        fig.poly(pts, fill=BLUE, opacity=0.18, close=True)
        fig.poly(pts, stroke=INK, width=4.5, close=True)
        if mark == 'rett':
            right_mark(fig, pts[0], pts[1], pts[2], 26)
        if mark == 'stump':
            mark_angle(fig, pts[0], pts[1], pts[2], 52, ORANGE)
        if ticks:
            sides = [(pts[0], pts[1]), (pts[1], pts[2]), (pts[2], pts[0])]
            for (p1, p2), n in zip(sides, ticks):
                if n:
                    side_ticks(fig, p1, p2, n)
        fig.text(cx, cy + 66, lab, 32, bold=True)
    save(fig, '1t-5-1-trekanttyper.svg')


def f_5_2_formlike():
    fig = Fig('1t')
    u = 56
    for (x, y, k, labs) in [(190, 620, 1, ('4', '3', '5')),
                            (700, 740, 2, ('8', '6', '10'))]:
        A = (x, y)                       # rett vinkel
        B = (x + 4 * u * k, y)
        C = (x, y - 3 * u * k)
        fig.poly([A, B, C], fill=BLUE, opacity=0.14, close=True)
        fig.poly([A, B, C], stroke=INK, width=5, close=True)
        right_mark(fig, A, B, C, 26)
        mark_angle(fig, B, A, C, 60, BLUE)
        mark_angle(fig, C, A, B, 56, ORANGE, double=True)
        fig.text((A[0] + B[0]) / 2, y + 44, labs[0], 32, bold=True)
        fig.text(x - 22, y - 1.5 * u * k + 10, labs[1], 32, anchor='end', bold=True)
        fig.text((B[0] + C[0]) / 2 + 26, (B[1] + C[1]) / 2 - 16, labs[2], 32, anchor='start', bold=True)
    fig.text(W / 2, 850, 'forholdstall k = 2', 40, bold=True)
    save(fig, '1t-5-2-formlike-trekanter.svg')


def f_5_2_kongruens():
    fig = Fig('1t')
    rel = [(0, 0), (260, 0), (70, -180)]
    def draw_tri(pts):
        fig.poly(pts, fill=BLUE, opacity=0.22, close=True)
        fig.poly(pts, stroke=INK, width=4.5, close=True)
        sides = [(pts[0], pts[1]), (pts[1], pts[2]), (pts[2], pts[0])]
        for (p1, p2), n in zip(sides, (1, 2, 3)):
            side_ticks(fig, p1, p2, n)
    T1 = [(150 + dx, 560 + dy) for dx, dy in rel]
    T2 = [(620 + dx, 560 + dy) for dx, dy in rel]
    draw_tri(T1)
    draw_tri(T2)
    fig.arrow(440, 420, 660, 420, ORANGE, 6, head=18)
    fig.text(550, 380, 'forskyvning', 30, bold=True, color=ORANGE)
    # speilingslinje og speilet kopi av T2
    mx = 1080
    fig.line(mx, 220, mx, 720, INK, 4, dash='16 12')
    fig.text(mx, 180, 'speiling', 30, bold=True, color=ORANGE)
    T3 = [(2 * mx - px, py) for px, py in T2]
    draw_tri(T3)
    fig.text(W / 2, 840, 'kongruente: samme form og størrelse', 36, bold=True)
    save(fig, '1t-5-2-kongruens-avbildninger.svg')


def f_5_2_skyggemaling():
    fig = Fig('1t')
    g = 720          # bakkenivå
    s = 70           # px per meter
    fig.line(90, g, 1510, g, INK, 5)
    # pinne: 1 m høy, skygge 1,5 m
    px_, ph = 280, 1 * s
    fig.line(px_, g, px_, g - ph, INK, 9)
    fig.line(px_, g, px_ + 1.5 * s, g, ORANGE, 9, opacity=0.45)
    # tre: 6 m høyt, skygge 9 m
    tx_, th = 700, 6 * s
    fig.line(tx_, g, tx_, g - th + 90, '#7A5230', 14)
    fig.circle(tx_, g - th + 60, 60, fill=GREEN, opacity=0.85)
    fig.line(tx_, g, tx_ + 9 * s, g, ORANGE, 9, opacity=0.45)
    # solstråler (parallelle)
    fig.line(px_, g - ph, px_ + 1.5 * s, g, ORANGE, 3.5, dash='12 10')
    fig.line(tx_, g - th, tx_ + 9 * s, g, ORANGE, 3.5, dash='12 10')
    fig.text(px_ - 24, g - ph / 2 + 10, '1 m', 30, anchor='end', bold=True)
    fig.text(px_ + 0.75 * s, g + 48, '1,5 m', 30, bold=True)
    fig.text(tx_ - 28, g - th / 2, '6 m', 34, anchor='end', bold=True, color=BLUE)
    fig.text(tx_ + 4.5 * s, g + 48, '9 m', 32, bold=True)
    fig.text(1180, 250, 'like vinkler gir formlike trekanter', 32, bold=True, color=ORANGE)
    fig.text(1180, 310, '6/1 = 9/1,5', 32, color=INK)
    save(fig, '1t-5-2-formlikhet-skyggemaling.svg')


def f_5_3_pytagoras_345():
    fig = Fig('1t')
    u = 60
    Cx, Cy = 600, 540
    A = (Cx, Cy - 3 * u)
    B = (Cx + 4 * u, Cy)
    C = (Cx, Cy)
    # kvadrat på katet 3 (venstre, blått rutenett)
    fig.rect(Cx - 3 * u, A[1], 3 * u, 3 * u, fill=BLUE, opacity=0.22)
    for i in range(4):
        fig.line(Cx - 3 * u + i * u, A[1], Cx - 3 * u + i * u, Cy, BLUE, 2)
        fig.line(Cx - 3 * u, A[1] + i * u, Cx, A[1] + i * u, BLUE, 2)
    fig.text(Cx - 1.5 * u, Cy - 1.5 * u + 14, '9', 44, bold=True, color=BLUE)
    # kvadrat på katet 4 (under, oransje rutenett)
    fig.rect(Cx, Cy, 4 * u, 4 * u, fill=ORANGE, opacity=0.22)
    for i in range(5):
        fig.line(Cx + i * u, Cy, Cx + i * u, Cy + 4 * u, ORANGE, 2)
        fig.line(Cx, Cy + i * u, B[0], Cy + i * u, ORANGE, 2)
    fig.text(Cx + 2 * u, Cy + 2 * u + 14, '16', 44, bold=True, color=ORANGE)
    # kvadrat på hypotenusen (grønt rutenett, 5x5)
    hx, hy = (B[0] - A[0]) / 5, (B[1] - A[1]) / 5
    nx, ny = (B[1] - A[1]) / 5, -(B[0] - A[0]) / 5
    P1, P2 = A, B
    P3 = (B[0] + nx * 5, B[1] + ny * 5)
    P4 = (A[0] + nx * 5, A[1] + ny * 5)
    fig.poly([P1, P2, P3, P4], fill=GREEN, opacity=0.22, close=True)
    for i in range(6):
        fig.line(A[0] + hx * i, A[1] + hy * i, A[0] + hx * i + nx * 5, A[1] + hy * i + ny * 5, GREEN, 2)
        fig.line(A[0] + nx * i, A[1] + ny * i, B[0] + nx * i, B[1] + ny * i, GREEN, 2)
    fig.text((P1[0] + P3[0]) / 2, (P1[1] + P3[1]) / 2 + 14, '25', 44, bold=True, color=GREEN)
    # selve trekanten
    fig.poly([C, B, A], fill=fig.p['bg'], stroke=INK, width=6, close=True)
    right_mark(fig, C, B, A, 26)
    fig.text(Cx + 16, Cy - 1.5 * u + 10, '3', 32, anchor='start', bold=True)
    fig.text(Cx + 2 * u, Cy - 16, '4', 32, bold=True)
    fig.text((A[0] + B[0]) / 2 - 30, (A[1] + B[1]) / 2 + 40, '5', 32, bold=True)
    fig.text(1280, 460, '9 + 16 = 25', 46, bold=True)
    save(fig, '1t-5-3-pytagoras-345.svg')


def f_5_3_pytagoras_stige():
    fig = Fig('1t')
    s = 110
    gx, gy = 640, 760
    topy = gy - 4 * s
    footx = gx + 3 * s
    fig.line(gx - 200, gy, footx + 360, gy, fig.p['text'], 6)    # bakke
    fig.rect(gx - 26, topy - 80, 26, gy - topy + 80, fill=INK, opacity=0.85)  # vegg
    right_mark(fig, (gx, gy), (footx, gy), (gx, topy), 30)
    fig.line(footx, gy, gx, topy, BLUE, 12)                      # stige
    nx, ny = 0.8, -0.6                                            # normal til stigen
    for t in range(1, 8):
        lx = footx + (gx - footx) * t / 8
        ly = gy + (topy - gy) * t / 8
        fig.line(lx - nx * 22, ly - ny * 22, lx + nx * 22, ly + ny * 22, BLUE, 5)
    fig.text((footx + gx) / 2 + 60, (gy + topy) / 2 + 10, '5 m', 38, anchor='start', bold=True, color=BLUE)
    dim(fig, gx, gy + 52, footx, gy + 52, '3 m', size=34, off=(0, 46), color=ORANGE)
    dim(fig, gx - 78, topy, gx - 78, gy, '4 m', size=34, off=(-66, 8), color=ORANGE)
    save(fig, '1t-5-3-pytagoras-stige.svg')


def f_5_3_tripler():
    fig = Fig('1t')
    s = 34
    base_y = 640
    data = [(140, 3, 4, 5), (480, 5, 12, 13), (1020, 8, 15, 17)]
    for x, h, b, hyp in data:
        A = (x, base_y)
        B = (x + b * s, base_y)
        C = (x, base_y - h * s)
        fig.poly([A, B, C], fill=BLUE, opacity=0.18, close=True)
        fig.poly([A, B, C], stroke=INK, width=5, close=True)
        right_mark(fig, A, B, C, 24)
        fig.text((A[0] + B[0]) / 2, base_y + 46, str(b), 32, bold=True)
        fig.text(x - 20, base_y - h * s / 2 + 10, str(h), 32, anchor='end', bold=True)
        fig.text((B[0] + C[0]) / 2 + 20, (B[1] + C[1]) / 2 - 16, str(hyp), 32, anchor='start', bold=True, color=BLUE)
    fig.text(W / 2, 800, '3² + 4² = 5²    5² + 12² = 13²    8² + 15² = 17²', 34, bold=True)
    save(fig, '1t-5-3-pytagoreiske-tripler.svg')


def f_5_4_motstaende():
    fig = Fig('1t')
    A = (340, 700)   # vinkelen v
    B = (1120, 700)  # rett vinkel
    C = (1120, 280)
    fig.line(A[0], A[1], B[0], B[1], BLUE, 7)
    fig.line(B[0], B[1], C[0], C[1], ORANGE, 7)
    fig.line(C[0], C[1], A[0], A[1], GREEN, 7)
    right_mark(fig, B, A, C, 30)
    mark_angle(fig, A, B, C, 80, INK, 'v', lr=126, size=38, lcolor=INK)
    fig.text((A[0] + B[0]) / 2, 760, 'hosliggende katet', 36, bold=True, color=BLUE)
    fig.text(B[0] + 30, (B[1] + C[1]) / 2 + 10, 'motstående katet', 36, anchor='start', bold=True, color=ORANGE)
    fig.text((A[0] + C[0]) / 2 - 30, (A[1] + C[1]) / 2 - 50, 'hypotenus', 36, anchor='end', bold=True, color=GREEN)
    save(fig, '1t-5-4-motstaende-hosliggende.svg')


def f_5_4_spesielle_trekanter():
    fig = Fig('1t')
    # 45-45-90 med kateter 1
    u = 330
    A = (240, 700)
    B = (240 + u, 700)
    C = (240, 700 - u)
    fig.poly([A, B, C], fill=BLUE, opacity=0.18, close=True)
    fig.poly([A, B, C], stroke=INK, width=5, close=True)
    right_mark(fig, A, B, C, 28)
    mark_angle(fig, B, A, C, 70, ORANGE, '45°', lr=120, size=32)
    mark_angle(fig, C, A, B, 70, ORANGE, '45°', lr=120, size=32)
    fig.text((A[0] + B[0]) / 2, 748, '1', 34, bold=True)
    fig.text(A[0] - 22, 700 - u / 2 + 10, '1', 34, anchor='end', bold=True)
    fig.text((B[0] + C[0]) / 2 + 26, (B[1] + C[1]) / 2 - 18, '√2', 36, anchor='start', bold=True, color=BLUE)
    # 30-60-90: kateter 1 og √3, hypotenus 2
    v = 200
    A2 = (920, 700)
    B2 = (920 + v * math.sqrt(3), 700)
    C2 = (920, 700 - v)
    fig.poly([A2, B2, C2], fill=BLUE, opacity=0.18, close=True)
    fig.poly([A2, B2, C2], stroke=INK, width=5, close=True)
    right_mark(fig, A2, B2, C2, 28)
    mark_angle(fig, B2, A2, C2, 88, ORANGE, '30°', lr=140, size=32)
    mark_angle(fig, C2, A2, B2, 62, ORANGE, '60°', lr=110, size=32)
    fig.text((A2[0] + B2[0]) / 2, 748, '√3', 34, bold=True)
    fig.text(A2[0] - 22, 700 - v / 2 + 10, '1', 34, anchor='end', bold=True)
    fig.text((B2[0] + C2[0]) / 2 + 24, (B2[1] + C2[1]) / 2 - 20, '2', 36, anchor='start', bold=True, color=BLUE)
    fig.text(405, 180, '45°-45°-90°', 36, bold=True)
    fig.text(1090, 180, '30°-60°-90°', 36, bold=True)
    save(fig, '1t-5-4-spesielle-trekanter.svg')


def f_5_4_hoydemaling():
    fig = Fig('1t')
    g = 740
    s = 18                     # px per meter
    O = (300, g)               # observasjonspunkt
    T = (O[0] + 50 * s, g)     # tårnfot (50 m)
    h = 50 * math.tan(math.radians(32)) * s
    top = (T[0], g - h)
    fig.line(120, g, 1480, g, fig.p['text'], 5)
    person(fig, 230, g, 130)
    fig.circle(O[0], O[1], 8, fill=INK)
    fig.rect(T[0] - 18, top[1], 56, h, fill=BLUE, opacity=0.8)
    fig.line(O[0], O[1], top[0] - 18, top[1], INK, 3.5, dash='12 10')   # siktelinje
    mark_angle(fig, O, (O[0] + 200, g), (top[0] - 18, top[1]), 110, ORANGE, '32°', lr=170, size=34)
    dim(fig, O[0], g + 50, T[0], g + 50, '50 m', size=34, off=(0, 46))
    dim(fig, T[0] + 100, top[1], T[0] + 100, g, 'h ≈ 31 m', size=34, off=(120, 8), color=BLUE)
    right_mark(fig, (T[0] - 18, g), (O[0], g), (T[0] - 18, top[1]), 26)
    save(fig, '1t-5-4-hoydemaling-tan.svg')


def f_5_5_areal_gh():
    fig = Fig('1t')
    u = 70
    # venstre: spissvinklet, g=8, h=5
    A = (140, 660)
    B = (140 + 8 * u, 660)
    T = (140 + 4.6 * u, 660 - 5 * u)
    fig.poly([A, B, T], fill=BLUE, opacity=0.18, close=True)
    fig.poly([A, B, T], stroke=INK, width=5, close=True)
    F = (T[0], 660)
    fig.line(T[0], T[1], F[0], F[1], ORANGE, 4, dash='11 9')
    right_mark(fig, F, A, T, 24, color=ORANGE)
    fig.text(T[0] - 22, 660 - 2.5 * u + 10, 'h = 5', 32, anchor='end', bold=True, color=ORANGE)
    fig.text((A[0] + B[0]) / 2, 706, 'g = 8', 32, bold=True)
    fig.text((A[0] + B[0]) / 2, 800, 'A = 20', 38, bold=True, color=BLUE)
    # høyre: stumpvinklet, høyden faller utenfor
    A2 = (980, 660)
    B2 = (1280, 660)
    T2 = (1430, 660 - 4 * u)
    fig.poly([A2, B2, T2], fill=BLUE, opacity=0.18, close=True)
    fig.poly([A2, B2, T2], stroke=INK, width=5, close=True)
    fig.line(B2[0], 660, T2[0], 660, INK, 2.5, dash='8 8')      # forlengelse av grunnlinjen
    F2 = (T2[0], 660)
    fig.line(T2[0], T2[1], F2[0], F2[1], ORANGE, 4, dash='11 9')
    right_mark(fig, F2, A2, T2, 24, color=ORANGE)
    fig.text(T2[0] + 20, 660 - 2 * u + 10, 'h', 32, anchor='start', bold=True, color=ORANGE)
    fig.text((A2[0] + B2[0]) / 2, 706, 'g', 32, bold=True)
    fig.text(1180, 800, 'høyden kan falle utenfor', 30, color=INK)
    save(fig, '1t-5-5-areal-grunnlinje-hoyde.svg')


def f_5_5_arealsetningen():
    fig = Fig('1t')
    u = 95
    Cv = (320, 660)
    Bv = (Cv[0] + 8 * u, 660)                       # side b = 8 langs grunnlinjen
    Av = (Cv[0] + 6 * u * math.cos(math.radians(30)),
          660 - 6 * u * math.sin(math.radians(30)))  # side a = 6 i 30°
    fig.poly([Cv, Bv, Av], fill=BLUE, opacity=0.18, close=True)
    fig.poly([Cv, Bv, Av], stroke=INK, width=5, close=True)
    mark_angle(fig, Cv, Bv, Av, 90, ORANGE, 'C = 30°', lr=190, size=34)
    fig.text((Cv[0] + Bv[0]) / 2, 708, 'b = 8', 34, bold=True)
    fig.text((Cv[0] + Av[0]) / 2 - 20, (Cv[1] + Av[1]) / 2 - 30, 'a = 6', 34, anchor='end', bold=True)
    # høyde fra A ned på b
    F = (Av[0], 660)
    fig.line(Av[0], Av[1], F[0], F[1], ORANGE, 4, dash='11 9')
    right_mark(fig, F, Cv, Av, 24, color=ORANGE)
    fig.text(Av[0] + 20, (Av[1] + 660) / 2 + 10, 'h', 32, anchor='start', bold=True, color=ORANGE)
    fig.text(W / 2, 830, 'A = 12', 42, bold=True, color=BLUE)
    fig.text(1280, 300, 'A = ½ · a · b · sin C', 36, bold=True)
    save(fig, '1t-5-5-arealsetningen.svg')


def f_5_6_sinussetningen():
    fig = Fig('1t')
    A = (250, 690)
    B = (1010, 690)
    AC = (B[0] - A[0]) * math.sin(math.radians(60)) / math.sin(math.radians(80))
    C = (A[0] + AC * math.cos(math.radians(40)), A[1] - AC * math.sin(math.radians(40)))
    # sider farget som motstående vinkel
    fig.line(B[0], B[1], C[0], C[1], BLUE, 6)      # a overfor A
    fig.line(A[0], A[1], C[0], C[1], ORANGE, 6)    # b overfor B
    fig.line(A[0], A[1], B[0], B[1], GREEN, 6)     # c overfor C
    mark_angle(fig, A, B, C, 78, BLUE, '40°', lr=130, size=30)
    mark_angle(fig, B, C, A, 70, ORANGE, '60°', lr=122, size=30)
    mark_angle(fig, C, A, B, 58, GREEN, '80°', lr=108, size=30)
    fig.text(A[0] - 30, A[1] + 40, 'A', 38, bold=True)
    fig.text(B[0] + 30, B[1] + 40, 'B', 38, bold=True)
    fig.text(C[0], C[1] - 28, 'C', 38, bold=True)
    fig.text((B[0] + C[0]) / 2 + 30, (B[1] + C[1]) / 2 - 12, 'a', 36, anchor='start', bold=True, italic=True, color=BLUE)
    fig.text((A[0] + C[0]) / 2 - 30, (A[1] + C[1]) / 2 - 12, 'b', 36, anchor='end', bold=True, italic=True, color=ORANGE)
    fig.text((A[0] + B[0]) / 2, A[1] + 48, 'c', 36, bold=True, italic=True, color=GREEN)
    bx, by, bw, bh = 1060, 360, 470, 110
    fig.rect(bx, by, bw, bh, stroke=INK, width=4, rx=14, fill=fig.p['bg'])
    fig.text(bx + bw / 2, by + bh / 2 + 12, 'a/sin A = b/sin B = c/sin C', 33, bold=True)
    save(fig, '1t-5-6-sinussetningen.svg')


def f_5_6_to_losninger():
    fig = Fig('1t')
    A = (240, 700)
    bL, aL = 620, 430
    angA = 35
    C = (A[0] + bL * math.cos(math.radians(angA)), A[1] - bL * math.sin(math.radians(angA)))
    h = bL * math.sin(math.radians(angA))
    dx = math.sqrt(aL * aL - h * h)
    B1 = (C[0] - dx, 700)
    B2 = (C[0] + dx, 700)
    fig.line(A[0], A[1], 1450, 700, INK, 4)                       # grunnlinje
    fig.line(A[0], A[1], C[0], C[1], INK, 5)                      # side b
    mark_angle(fig, A, (1450, 700), C, 80, INK, 'A', lr=124, size=34, lcolor=INK)
    # sirkelbue fra C med radius a
    a1 = ray_ang(C, B1) - 26
    a2 = ray_ang(C, B2) + 26
    angle_arc(fig, C[0], C[1], aL, a1, a2, ORANGE, 4, dash='13 11')
    # de to mulige trekantene
    fig.line(C[0], C[1], B2[0], B2[1], BLUE, 6)
    fig.line(C[0], C[1], B1[0], B1[1], BLUE, 6, dash='16 12')
    fig.circle(B1[0], B1[1], 11, fill=ORANGE)
    fig.circle(B2[0], B2[1], 11, fill=ORANGE)
    fig.circle(C[0], C[1], 9, fill=INK)
    fig.text(C[0], C[1] - 30, 'C', 36, bold=True)
    fig.text(B1[0], 754, 'B₁', 34, bold=True)
    fig.text(B2[0], 754, 'B₂', 34, bold=True)
    fig.text((A[0] + C[0]) / 2 - 26, (A[1] + C[1]) / 2 - 20, 'b', 36, anchor='end', bold=True, italic=True)
    fig.text((C[0] + B1[0]) / 2 - 36, (C[1] + B1[1]) / 2, 'a', 34, anchor='end', bold=True, italic=True, color=BLUE)
    fig.text((C[0] + B2[0]) / 2 + 36, (C[1] + B2[1]) / 2 - 14, 'a', 34, anchor='start', bold=True, italic=True, color=BLUE)
    fig.text(B1[0] - 10, 380, 'B stump', 32, anchor='end', bold=True, color=ORANGE)
    fig.line(B1[0] - 30, 396, B1[0] - 4, 680, ORANGE, 2.5)
    fig.text(B2[0] + 90, 500, 'B spiss', 32, anchor='start', bold=True, color=ORANGE)
    fig.line(B2[0] + 86, 516, B2[0] + 8, 682, ORANGE, 2.5)
    save(fig, '1t-5-6-sinussetningen-to-losninger.svg')


def f_5_7_cosinussetningen():
    fig = Fig('1t')
    u = 88
    A = (290, 680)
    B = (A[0] + 8 * u, 680)                          # c = 8
    C = (A[0] + 6 * u * math.cos(math.radians(60)),
         680 - 6 * u * math.sin(math.radians(60)))   # b = 6 i 60 grader
    fig.poly([A, B, C], fill=BLUE, opacity=0.14, close=True)
    fig.line(A[0], A[1], B[0], B[1], INK, 5)
    fig.line(A[0], A[1], C[0], C[1], INK, 5)
    fig.line(B[0], B[1], C[0], C[1], BLUE, 6)
    mark_angle(fig, A, B, C, 84, ORANGE, 'A = 60°', lr=176, size=32)
    fig.text((A[0] + B[0]) / 2, 728, 'c = 8', 34, bold=True)
    fig.text((A[0] + C[0]) / 2 - 24, (A[1] + C[1]) / 2 - 16, 'b = 6', 34, anchor='end', bold=True)
    fig.text((B[0] + C[0]) / 2 + 30, (B[1] + C[1]) / 2 - 10, 'a ≈ 7,2', 34, anchor='start', bold=True, color=BLUE)
    bx, by, bw, bh = 1010, 220, 520, 110
    fig.rect(bx, by, bw, bh, stroke=INK, width=4, rx=14, fill=fig.p['bg'])
    fig.text(bx + bw / 2, by + bh / 2 + 12, 'a² = b² + c² − 2bc · cos A', 33, bold=True)
    save(fig, '1t-5-7-cosinussetningen.svg')


def f_5_7_cosinus_pytagoras():
    fig = Fig('1t')
    configs = [
        (300, [(-160, 0), (160, 0), (-40, -240)], 'a² < b² + c²', 'spiss'),
        (800, [(-150, 0), (150, 0), (-150, -240)], 'a² = b² + c²', 'rett'),
        (1300, [(-120, 0), (200, 0), (-220, -210)], 'a² > b² + c²', 'stump'),
    ]
    for cx, rel, lab, typ in configs:
        pts = [(cx + dx, 620 + dy) for dx, dy in rel]
        A, B, T = pts
        fig.poly(pts, fill=BLUE, opacity=0.10, close=True)
        fig.line(A[0], A[1], B[0], B[1], INK, 5)
        fig.line(A[0], A[1], T[0], T[1], INK, 5)
        fig.line(B[0], B[1], T[0], T[1], ORANGE, 6)           # side a overfor A
        if typ == 'rett':
            right_mark(fig, A, B, T, 28, color=BLUE)
        else:
            mark_angle(fig, A, B, T, 56, BLUE)
        fig.text(A[0] - 14, A[1] + 44, 'A', 34, bold=True, color=BLUE)
        mxa, mya = (B[0] + T[0]) / 2, (B[1] + T[1]) / 2
        fig.text(mxa + 26, mya - 10, 'a', 34, anchor='start', bold=True, italic=True, color=ORANGE)
        fig.text(cx, 740, lab, 36, bold=True)
        fig.text(cx, 800, f'A {"<" if typ == "spiss" else ("=" if typ == "rett" else ">")} 90°', 30, color=INK)
    save(fig, '1t-5-7-cosinus-utvider-pytagoras.svg')


def f_5_8_konstruksjon_sss():
    fig = Fig('1t')
    u = 120
    A = (380, 700)
    B = (A[0] + 6 * u, 700)
    # skjæringspunkt for radius 4u fra A og 5u fra B
    d = 6 * u
    px = (d * d + (4 * u) ** 2 - (5 * u) ** 2) / (2 * d)
    py = math.sqrt((4 * u) ** 2 - px * px)
    C = (A[0] + px, 700 - py)
    # buer
    aC = ray_ang(A, C)
    bC = ray_ang(B, C)
    angle_arc(fig, A[0], A[1], 4 * u, aC - 24, aC + 24, BLUE, 4, dash='13 11')
    angle_arc(fig, B[0], B[1], 5 * u, bC - 18, bC + 18, ORANGE, 4, dash='13 11')
    fig.poly([A, B, C], stroke=INK, width=5, close=True)
    fig.circle(A[0], A[1], 9, fill=INK)
    fig.circle(B[0], B[1], 9, fill=INK)
    fig.circle(C[0], C[1], 9, fill=INK)
    fig.text(A[0] - 36, A[1] + 44, 'A', 36, bold=True)
    fig.text(B[0] + 36, B[1] + 44, 'B', 36, bold=True)
    fig.text(C[0] - 28, C[1] - 28, 'C', 36, anchor='end', bold=True)
    fig.text((A[0] + B[0]) / 2, 748, '6', 34, bold=True)
    fig.text((A[0] + C[0]) / 2 - 26, (A[1] + C[1]) / 2 - 14, '4', 34, anchor='end', bold=True, color=BLUE)
    fig.text((B[0] + C[0]) / 2 + 28, (B[1] + C[1]) / 2 - 14, '5', 34, anchor='start', bold=True, color=ORANGE)
    fig.text(420, 160, 'bue med radius 4 fra A', 30, anchor='end', color=BLUE, bold=True)
    fig.text(1330, 250, 'bue med radius 5 fra B', 30, anchor='end', color=ORANGE, bold=True)
    save(fig, '1t-5-8-konstruksjon-sss.svg')


# ================================================================ KAPITTEL 6

def f_6_2_omleggingsbevis():
    fig = Fig('1t')
    u = 120
    a, b = 2 * u, u
    s = a + b
    # venstre kvadrat: fire trekanter + c²-kvadrat på spissen
    x, y = 200, 240
    fig.rect(x, y, s, s, stroke=INK, width=5)
    inner = [(x + a, y), (x + s, y + a), (x + b, y + s), (x, y + b)]
    tris = [[(x, y), (x + a, y), (x, y + b)],
            [(x + a, y), (x + s, y), (x + s, y + a)],
            [(x + s, y + a), (x + s, y + s), (x + b, y + s)],
            [(x + b, y + s), (x, y + s), (x, y + b)]]
    fig.poly(inner, fill=ORANGE, opacity=0.45, close=True)
    fig.poly(inner, stroke=INK, width=3.5, close=True)
    for t in tris:
        fig.poly(t, fill=BLUE, opacity=0.40, close=True)
        fig.poly(t, stroke=INK, width=3.5, close=True)
    fig.text(x + s / 2, y + s / 2 + 14, 'c²', 46, bold=True)
    dim(fig, x, y - 42, x + a, y - 42, 'a', size=30)
    dim(fig, x + a, y - 42, x + s, y - 42, 'b', size=30)
    # høyre kvadrat: a² + b² + fire trekanter i to rektangler
    x2 = 880
    fig.rect(x2, y, s, s, stroke=INK, width=5)
    fig.rect(x2, y, a, a, fill=ORANGE, opacity=0.45)
    fig.rect(x2, y, a, a, stroke=INK, width=3.5)
    fig.rect(x2 + a, y + a, b, b, fill=ORANGE, opacity=0.45)
    fig.rect(x2 + a, y + a, b, b, stroke=INK, width=3.5)
    r_tris = [[(x2 + a, y), (x2 + s, y), (x2 + a, y + a)],
              [(x2 + s, y), (x2 + s, y + a), (x2 + a, y + a)],
              [(x2, y + a), (x2 + a, y + a), (x2, y + s)],
              [(x2 + a, y + a), (x2 + a, y + s), (x2, y + s)]]
    for t in r_tris:
        fig.poly(t, fill=BLUE, opacity=0.40, close=True)
        fig.poly(t, stroke=INK, width=3.5, close=True)
    fig.text(x2 + a / 2, y + a / 2 + 14, 'a²', 44, bold=True)
    fig.text(x2 + a + b / 2, y + a + b / 2 + 12, 'b²', 38, bold=True)
    dim(fig, x2, y - 42, x2 + a, y - 42, 'a', size=30)
    dim(fig, x2 + a, y - 42, x2 + s, y - 42, 'b', size=30)
    fig.arrow(x + s + 40, y + s / 2, x2 - 40, y + s / 2, INK, 5, head=16)
    fig.text(W / 2, 780, 'c² = a² + b²', 46, bold=True)
    save(fig, '1t-6-2-pytagoras-omleggingsbevis.svg')


def f_6_1_implikasjon():
    fig = Fig('1t')
    bw, bh = 440, 120
    rows = [(190, 'P: det regner', 'Q: bakken er våt', BLUE, 'P ⇒ Q'),
            (520, 'ikke Q: bakken er tørr', 'ikke P: det regner ikke', ORANGE, 'ikke Q ⇒ ikke P')]
    for y, l1, l2, col, plab in rows:
        fig.rect(160, y, bw, bh, stroke=col, width=5, rx=18, fill=fig.p['bg'])
        fig.text(160 + bw / 2, y + bh / 2 + 12, l1, 32, bold=True)
        fig.rect(1000, y, bw, bh, stroke=col, width=5, rx=18, fill=fig.p['bg'])
        fig.text(1000 + bw / 2, y + bh / 2 + 12, l2, 32, bold=True)
        fig.arrow(160 + bw + 30, y + bh / 2, 970, y + bh / 2, col, 8, head=22)
        fig.text(W / 2, y + bh / 2 - 30, plab, 34, bold=True, color=col)
    fig.text(W / 2, 800, 'alltid like sanne', 38, bold=True)
    save(fig, '1t-6-1-implikasjon-kontraposisjon.svg')


# ================================================================ KAPITTEL 7

def f_7_1_sekant():
    fig = Fig('1t')
    f = lambda x: x * x
    tx, ty = fig.coords(-0.5, 4, -1, 12.5, box=(300, 110, 1300, 800),
                        xticks=[1, 2, 3], yticks=[1, 9], tick_size=26)
    fig.plot(f, xmin=-0.4, xmax=3.5, color=BLUE, width=5)
    sek = lambda x: 4 * x - 3
    fig.plot(sek, xmin=0.3, xmax=3.6, color=ORANGE, width=4.5)
    fig.point(1, 1, color=ORANGE, r=11)
    fig.point(3, 9, color=ORANGE, r=11)
    fig.text(tx(0.82), ty(1.9), '(1, 1)', 30, anchor='end', bold=True)
    fig.text(tx(3) - 24, ty(9) - 20, '(3, 9)', 30, anchor='end', bold=True)
    # stigningstrekant
    fig.line(tx(1), ty(1), tx(3), ty(1), INK, 3.5, dash='10 8')
    fig.line(tx(3), ty(1), tx(3), ty(9), INK, 3.5, dash='10 8')
    fig.text(tx(2), ty(1) + 44, 'Δx = 2', 32, bold=True)
    fig.text(tx(3) + 20, ty(5) + 10, 'Δy = 8', 32, anchor='start', bold=True)
    fig.text(tx(3.32) + 30, ty(10.0), 'Δy/Δx = 4', 36, anchor='start', bold=True, color=ORANGE)
    fig.text(tx(0.35), ty(10.8), 'sekant', 32, bold=True, color=ORANGE)
    fig.line(tx(0.55), ty(10.3), tx(1.45), ty(sek(1.45)) - 6, ORANGE, 2.5)
    save(fig, '1t-7-1-gjennomsnittlig-vekstfart-sekant.svg')


def f_7_2_sekanter_tangent():
    fig = Fig('1t')
    f = lambda x: x * x
    P = (1, 1)
    tx, ty = fig.coords(-0.6, 3.8, -1.5, 10.5, box=(280, 100, 1280, 760),
                        grid=False, xticks=[], yticks=[])
    fig.plot(f, xmin=-0.5, xmax=3.2, color=BLUE, width=5)
    seks = [(3.0, '#F4BE93'), (2.4, '#EE9C5C'), (1.8, ORANGE)]
    for q, col in seks:
        a = (f(q) - f(P[0])) / (q - P[0])
        g = lambda x, a=a: f(P[0]) + a * (x - P[0])
        fig.plot(g, xmin=P[0] - 0.55, xmax=min(q + 0.55, 3.7), color=col, width=4)
        fig.point(q, f(q), color=col, r=9)
    # tangent i P: y = 2x − 1
    fig.plot(lambda x: 2 * x - 1, xmin=0.0, xmax=2.6, color=GREEN, width=6)
    fig.point(*P, color=GREEN, r=12)
    fig.text(tx(0.8), ty(1.5), 'P', 36, anchor='end', bold=True, color=GREEN)
    fig.text(tx(2.62), ty(2 * 2.62 - 1) + 40, 'tangent', 34, anchor='start', bold=True, color=GREEN)
    fig.text(tx(3.05), ty(9.6), 'sekanter', 34, anchor='start', bold=True, color=ORANGE)
    arc_arrow(fig, tx(3.25), ty(7.4), tx(2.45), ty(3.2), 110, INK, 4, head=14)
    fig.text(W / 2, 850, 'momentan vekstfart = tangentens stigningstall', 36, bold=True)
    save(fig, '1t-7-2-sekanter-mot-tangent.svg')


def f_7_3_tangentstigning():
    fig = Fig('1t')
    f = lambda x: (x - 1) ** 2 - 1
    tx, ty = fig.coords(-1.6, 3.6, -2.2, 4.2, box=(280, 110, 1320, 790),
                        xticks=[-1, 1, 2, 3], yticks=[-1, 1, 2, 3], tick_size=24)
    fig.plot(f, xmin=-1.2, xmax=3.2, color=BLUE, width=6)
    # tangent i x=0: y = −2x
    fig.plot(lambda x: -2 * x, xmin=-0.75, xmax=0.65, color=ORANGE, width=4.5)
    # tangent i bunnpunktet
    fig.plot(lambda x: -1, xmin=0.25, xmax=1.75, color=ORANGE, width=4.5)
    # tangent i x=2: y = 2x − 4
    fig.plot(lambda x: 2 * x - 4, xmin=1.35, xmax=2.75, color=ORANGE, width=4.5)
    fig.circle(tx(1), ty(-1), 12, fill=INK)
    fig.text(tx(-1.45), ty(2.6), 'f′ < 0: synker', 33, anchor='start', bold=True, color=ORANGE)
    fig.text(tx(1), ty(-1.85), 'f′ = 0', 33, bold=True, color=ORANGE)
    fig.text(tx(2.1), ty(2.2), 'f′ > 0: vokser', 33, anchor='start', bold=True, color=ORANGE)
    save(fig, '1t-7-3-derivert-tangentstigning.svg')


def f_7_5_newtonkvotient():
    fig = Fig('1t')
    f = lambda x: 0.12 * x * x + 0.8
    x_, h_ = 2.6, 3.0
    tx, ty = fig.coords(0, 8.2, 0, 6, box=(200, 110, 1400, 740),
                        grid=False, xticks=[], yticks=[])
    fig.plot(f, xmin=0.3, xmax=7.6, color=BLUE, width=5)
    P = (x_, f(x_))
    Q = (x_ + h_, f(x_ + h_))
    a = (Q[1] - P[1]) / h_
    fig.plot(lambda x: P[1] + a * (x - x_), xmin=x_ - 1.1, xmax=x_ + h_ + 1.1, color=ORANGE, width=4.5)
    fig.point(*P, color=ORANGE, r=11)
    fig.point(*Q, color=ORANGE, r=11)
    fig.text(tx(x_) - 20, ty(P[1]) - 26, '(x, f(x))', 32, anchor='end', bold=True)
    fig.text(tx(x_ + h_) - 10, ty(Q[1]) - 32, '(x + h, f(x + h))', 32, anchor='end', bold=True)
    # stigningstrekant
    fig.line(tx(x_), ty(P[1]), tx(x_ + h_), ty(P[1]), INK, 3.5, dash='10 8')
    fig.line(tx(x_ + h_), ty(P[1]), tx(x_ + h_), ty(Q[1]), INK, 3.5, dash='10 8')
    fig.text(tx(x_ + h_ / 2), ty(P[1]) + 44, 'h', 36, bold=True, italic=True)
    fig.text(tx(x_ + h_) + 22, ty((P[1] + Q[1]) / 2) + 10, 'f(x + h) − f(x)', 32, anchor='start', bold=True)
    # hjelpelinjer ned til x-aksen
    fig.line(tx(x_), ty(P[1]), tx(x_), ty(0), fig.p['grid'], 2.5, dash='8 8')
    fig.line(tx(x_ + h_), ty(P[1]), tx(x_ + h_), ty(0), fig.p['grid'], 2.5, dash='8 8')
    fig.text(tx(x_), ty(0) + 44, 'x', 34, bold=True, italic=True)
    fig.text(tx(x_ + h_), ty(0) + 44, 'x + h', 34, bold=True, italic=True)
    fig.arrow(tx(x_ + h_ - 0.3), ty(0) - 64, tx(x_ + 0.9), ty(0) - 64, ORANGE, 4, head=14)
    fig.text(tx(x_ + h_ / 2 + 0.3), ty(0) - 18, 'h → 0', 32, bold=True, color=ORANGE)
    save(fig, '1t-7-5-newtonkvotienten.svg')


def f_7_7_posisjon_fart():
    fig = Fig('1t')
    s_ = lambda t: 20 * t - 5 * t * t
    v_ = lambda t: 20 - 10 * t
    tx, ty = fig.coords(0, 4.6, 0, 24, box=(220, 100, 1380, 400),
                        xticks=[1, 2, 3, 4], yticks=[10, 20],
                        xlabel='t (s)', ylabel='s (m)', tick_size=24)
    fig.plot(s_, xmin=0, xmax=4, color=BLUE, width=5)
    fig.circle(tx(2), ty(20), 11, fill=BLUE)
    top_px = tx(2)
    tx2, ty2 = fig.coords(0, 4.6, -24, 24, box=(220, 520, 1380, 820),
                          xticks=[1, 2, 3, 4], yticks=[-20, 20],
                          xlabel='t (s)', ylabel='v (m/s)', tick_size=24)
    fig.plot(v_, xmin=0, xmax=4, color=ORANGE, width=5)
    fig.circle(tx2(2), ty2(0), 11, fill=ORANGE)
    fig.line(top_px, ty(20) - 14, top_px, 820, INK, 3, dash='11 9')
    fig.text(top_px + 20, 470, 'i toppunktet er farten null', 32, anchor='start', bold=True)
    save(fig, '1t-7-7-posisjon-fart.svg')


# ================================================================ KAPITTEL 8

def f_8_1_modelleringssyklus():
    fig = Fig('1t')
    bw, bh = 430, 110
    boxes = [
        ((W - bw) / 2, 90, 'Virkelig problem', BLUE),
        (1110, 395, 'Matematisk modell', ORANGE),
        ((W - bw) / 2, 700, 'Matematisk løsning', BLUE),
        (60, 395, 'Vurdering av svaret', ORANGE),
    ]
    for x, y, lab, col in boxes:
        fig.rect(x, y, bw, bh, stroke=col, width=5, rx=20, fill=fig.p['bg'])
        fig.text(x + bw / 2, y + bh / 2 + 12, lab, 34, bold=True)
    # piler med klokka
    arc_arrow(fig, 1040, 175, 1300, 380, -70, INK, 5, head=16)
    fig.text(1255, 245, 'forenkle', 32, bold=True, color=INK)
    arc_arrow(fig, 1300, 525, 1045, 730, -70, INK, 5, head=16)
    fig.text(1265, 660, 'regne', 32, bold=True, color=INK)
    arc_arrow(fig, 560, 730, 300, 525, -70, INK, 5, head=16)
    fig.text(345, 660, 'tolke', 32, bold=True, color=INK)
    # forbedre: tilbake fra vurdering til modell, gjennom midten
    arc_arrow(fig, 510, 450, 1090, 450, 110, ORANGE, 5, head=16)
    fig.text(W / 2, 575, 'forbedre', 32, bold=True, color=ORANGE)
    save(fig, '1t-8-1-modelleringssyklus.svg')


def f_8_1_interpolering():
    fig = Fig('1t')
    lin = lambda x: 0.7 * x + 1.5
    tx, ty = fig.coords(0, 10.5, 0, 10.5, box=(200, 120, 1400, 760),
                        grid=False, xticks=[2, 8], yticks=[], tick_size=28)
    y0, y1 = 120, 760
    fig.rect(tx(0), y0, tx(2) - tx(0), y1 - y0, fill=ORANGE, opacity=0.08)
    fig.rect(tx(2), y0, tx(8) - tx(2), y1 - y0, fill=GREEN, opacity=0.10)
    fig.rect(tx(8), y0, tx(10.5) - tx(8), y1 - y0, fill=ORANGE, opacity=0.08)
    pts = [(2, 3.2), (3.2, 3.5), (4.4, 4.9), (5.6, 5.2), (6.8, 6.6), (8, 6.9)]
    for px, py in pts:
        fig.circle(tx(px), ty(py), 10, fill=BLUE)
    fig.plot(lin, xmin=2, xmax=8, color=GREEN, width=5)
    fig.plot(lin, xmin=0.2, xmax=2, color=ORANGE, width=5, dash='14 11')
    fig.plot(lin, xmin=8, xmax=10.3, color=ORANGE, width=5, dash='14 11')
    fig.text(tx(5), y0 + 60, 'interpolering: trygt', 34, bold=True, color=GREEN)
    fig.text(tx(9.2), y0 + 60, 'ekstrapolering:', 30, bold=True, color=ORANGE)
    fig.text(tx(9.2), y0 + 102, 'usikkert', 30, bold=True, color=ORANGE)
    warn_tri(fig, tx(9.6), ty(4.2), 80)
    save(fig, '1t-8-1-interpolering-ekstrapolering.svg')


def f_8_2_potensfamilie():
    fig = Fig('1t')
    tx, ty = fig.coords(0, 3.1, 0, 3.1, box=(420, 110, 1180, 790),
                        xticks=[1, 2, 3], yticks=[1, 2, 3], tick_size=26)
    fig.plot(lambda x: x * x, xmin=0, xmax=math.sqrt(3.05), color=BLUE, width=5)
    fig.plot(lambda x: x, xmin=0, xmax=3.0, color=INK, width=5)
    fig.plot(lambda x: math.sqrt(x), xmin=0, xmax=3.0, color=ORANGE, width=5)
    fig.circle(tx(1), ty(1), 11, fill=fig.p['text'])
    fig.text(tx(1) + 22, ty(1) + 40, '(1, 1)', 32, anchor='start', bold=True)
    fig.text(tx(1.62), ty(2.9), 'y = x²', 34, anchor='end', bold=True, color=BLUE)
    fig.text(tx(2.85), ty(2.78), 'y = x', 34, anchor='end', bold=True, color=INK)
    fig.text(tx(2.9), ty(math.sqrt(2.9)) + 50, 'y = √x', 34, anchor='end', bold=True, color=ORANGE)
    save(fig, '1t-8-2-potensfunksjoner-familie.svg')


def f_8_3_regresjon_residualer():
    fig = Fig('1t')
    lin = lambda x: 0.65 * x + 1.8
    tx, ty = fig.coords(0, 10.5, 0, 10, box=(240, 120, 1340, 720),
                        grid=False, xticks=[], yticks=[], xlabel='x', ylabel='y')
    pts = [(1, 3.0), (1.8, 2.4), (2.6, 4.1), (3.5, 3.6), (4.4, 5.3),
           (5.2, 4.6), (6.1, 6.4), (7.0, 5.9), (8.0, 7.7), (9.0, 7.2)]
    fig.plot(lin, xmin=0.4, xmax=9.8, color=ORANGE, width=5)
    for px, py in pts:
        fig.line(tx(px), ty(py), tx(px), ty(lin(px)), RED, 2.5, dash='7 6')
        fig.circle(tx(px), ty(py), 9, fill=BLUE)
    fig.text(tx(6.1) + 22, ty(6.55) - 26, 'residual', 32, anchor='start', bold=True, color=RED)
    fig.line(tx(6.1) + 18, ty(6.5) - 22, tx(6.1) + 4, ty(6.2), RED, 2.5)
    fig.text(W / 2, 830, 'linjen gjør residualene minst mulig', 36, bold=True)
    save(fig, '1t-8-3-linear-regresjon-residualer.svg')


def f_8_4_residualplott():
    fig = Fig('1t')
    panels = [(130, 750, 'tilfeldig', GREEN), (860, 1480, 'monster', ORANGE)]
    res_rand = [0.5, -0.3, 0.2, -0.6, 0.4, -0.25, 0.6, -0.5]
    sc = 200
    for (x0, x1, mode, col) in panels:
        cy = 400
        fig.arrow(x0 - 10, cy, x1 + 20, cy, fig.p['text'], 3.5)
        fig.text(x0 - 24, cy - 24, '0', 28, anchor='end')
        for i in range(8):
            px = x0 + 50 + i * (x1 - x0 - 100) / 7
            if mode == 'tilfeldig':
                r = res_rand[i]
            else:
                xv = i + 1
                r = 0.12 * (xv - 4.5) ** 2 - 0.9
            fig.circle(px, cy - r * sc, 10, fill=BLUE)
        if mode == 'tilfeldig':
            check_mark(fig, (x0 + x1) / 2 - 30, 660, 48)
            fig.text((x0 + x1) / 2, 760, 'tilfeldig spredning: modellen passer', 31, bold=True, color=GREEN)
        else:
            warn_tri(fig, (x0 + x1) / 2, 660, 76)
            fig.text((x0 + x1) / 2, 760, 'mønster: prøv en annen modell', 31, bold=True, color=ORANGE)
    save(fig, '1t-8-4-residualplott-vurdering.svg')


def f_8_5_forklaringsgrad():
    fig = Fig('1t')
    lin = lambda x: 0.6 * x + 2
    dev_tight = [0.25, -0.2, 0.3, -0.25, 0.2, -0.3, 0.25, -0.2, 0.3]
    dev_wide = [2.0, -1.8, 1.4, -2.2, 1.9, -1.5, 2.2, -1.9, 1.6]
    panels = [(110, 730, dev_tight, 'r² = 0,97: forklarer godt'),
              (870, 1490, dev_wide, 'r² = 0,35: stor uforklart variasjon')]
    for x0, x1, devs, lab in panels:
        tx, ty = fig.coords(0, 10, 0, 10, box=(x0, 150, x1, 680),
                            grid=False, xticks=[], yticks=[])
        fig.plot(lin, xmin=0.5, xmax=9.5, color=ORANGE, width=4.5)
        for i, d in enumerate(devs):
            px = 1 + i
            fig.circle(tx(px), ty(min(9.6, max(0.4, lin(px) + d))), 9, fill=BLUE)
        fig.text((x0 + x1) / 2, 790, lab, 32, bold=True)
    save(fig, '1t-8-5-forklaringsgrad.svg')


# === SLUTT ===

if __name__ == '__main__':
    g = dict(globals())
    fns = [v for k, v in g.items() if k.startswith('f_') and callable(v)]
    for fn in fns:
        fn()
    print(f'{len(fns)} figurer generert.')
