#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk R2.

Kjor:  python3 scripts/svg/figurer-r2.py
Output: public/images/content/r2/*.svg
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, W, H, fmt

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'images', 'content', 'r2')
PI = math.pi


def save(fig, name):
    path = os.path.normpath(os.path.join(OUT, name))
    fig.save(path)
    print('OK', name)


# ---------- hjelpefunksjoner (nye primitiver, kun i denne filen) ----------

def boxed_text(fig, cx, cy, lines, size=32, pad=22, color=None):
    c = color or fig.p['accent']
    wmax = max(len(ln) for ln in lines) * size * 0.52
    h = len(lines) * (size + 12) + pad
    fig.rect(cx - wmax / 2 - pad, cy - h / 2, wmax + 2 * pad, h, fill=fig.p['bg'],
             stroke=c, width=3, rx=12)
    for i, ln in enumerate(lines):
        y = cy + (i - (len(lines) - 1) / 2) * (size + 12) + size * 0.35
        fig.text(cx, y, ln, size, bold=True)


def dbl_arrow(fig, x1, y1, x2, y2, color, width=4, head=13):
    fig.arrow(x1, y1, x2, y2, color, width, head)
    fig.arrow(x2, y2, x1, y1, color, width, head)


def angle_arc(fig, cx, cy, r, a1_deg, a2_deg, color, width=3, label=None, lab_size=30, lab_r=None):
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
    c = color or fig.p['accent']
    fig.poly([(x + ux * size, y + uy * size),
              (x + ux * size + vx * size, y + uy * size + vy * size),
              (x + vx * size, y + vy * size)], stroke=c, width=3)


def iso(ox, oy, s=80):
    """Enkel isometrisk projeksjon: x mot venstre-ned, y mot hoyre-ned, z opp.
    Returnerer funksjon (x,y,z) -> (px,py)."""
    def T(x, y, z):
        px = ox - x * s * 0.78 + y * s * 0.92
        py = oy + x * s * 0.40 + y * s * 0.26 - z * s * 0.95
        return px, py
    return T


def axes3d(fig, T, xlen=4, ylen=5, zlen=4.5, color=None, labels=('x', 'y', 'z')):
    c = color or fig.p['accent']
    o = T(0, 0, 0)
    ex, ey, ez = T(xlen, 0, 0), T(0, ylen, 0), T(0, 0, zlen)
    fig.arrow(*o, *ex, c, 3.5, head=14)
    fig.arrow(*o, *ey, c, 3.5, head=14)
    fig.arrow(*o, *ez, c, 3.5, head=14)
    fig.text(ex[0] - 30, ex[1] + 36, labels[0], 32, color=c, italic=True, bold=True)
    fig.text(ey[0] + 30, ey[1] + 30, labels[1], 32, color=c, italic=True, bold=True)
    fig.text(ez[0], ez[1] - 22, labels[2], 32, color=c, italic=True, bold=True)
    return o


def vec3(fig, T, p0, p1, color, width=5.5, label=None, lab_off=(20, -14), lab_size=32, head=17):
    a, b = T(*p0), T(*p1)
    fig.arrow(a[0], a[1], b[0], b[1], color, width, head=head)
    if label:
        fig.text(b[0] + lab_off[0], b[1] + lab_off[1], label, lab_size, color=color, bold=True,
                 anchor='start' if lab_off[0] >= 0 else 'end')
    return a, b


def dash3(fig, T, p0, p1, color, width=2.5, dash='10 9', opacity=0.85):
    a, b = T(*p0), T(*p1)
    fig.line(a[0], a[1], b[0], b[1], color, width, dash=dash, opacity=opacity)


def curve_pts(f, a, b, tx, ty, n=200):
    return [(tx(a + (b - a) * i / n), ty(f(a + (b - a) * i / n))) for i in range(n + 1)]


# =====================================================================
# Kapittel 1: Folger og rekker
# =====================================================================

def r2_1_1_folge():
    fig = Fig('r2')
    P = fig.p
    tx, ty = fig.coords(0, 12.8, -0.12, 1.18, box=(190, 160, 1410, 760),
                        xticks=list(range(1, 13)), yticks=[0.5, 1], xlabel='n', ylabel='aₙ')
    fig.line(tx(0.3), ty(0), tx(12.6), ty(0), P['accent'], 3.5, dash='14 12')
    fig.text(tx(12.5), ty(0) + 44, 'grenseverdi 0', 30, color=P['accent'], bold=True, anchor='end')
    for n in range(1, 13):
        fig.circle(tx(n), ty(1 / n), 10, fill=P['main'])
    fig.text(tx(1) + 26, ty(1) + 8, '(1, 1)', 28, anchor='start', bold=True)
    fig.text(tx(2) + 26, ty(0.5) + 4, '(2, 0,5)', 28, anchor='start', bold=True)
    fig.text(W / 2, 90, 'aₙ = 1/n → 0', 40, color=P['main'], bold=True)
    save(fig, 'r2-1-1-folge-konvergens.svg')


def r2_1_2_trapp():
    fig = Fig('r2')
    P = fig.p
    fig.title('2 + 5 + 8 + 11 + 14 = 40')
    u = 36  # px per rute
    x0, y0 = 420, 740  # nederste venstre
    heights = [2, 5, 8, 11, 14]
    tot = 16
    for i, h in enumerate(heights):
        # cyan trapp nedenfra
        fig.rect(x0 + i * u * 1, y0 - h * u, u, h * u, fill=P['main'], stroke=P['bg'], width=2, opacity=0.85)
        # magenta opp-ned (fyller opp til 16)
        fig.rect(x0 + i * u, y0 - tot * u, u, (tot - h) * u, fill=P['extra'], stroke=P['bg'], width=2, opacity=0.8)
    # bruk bredere kolonner: tegn på nytt med bredde 3u? Nei – juster: gjør kolonnebredde 140
    fig.rect(x0, y0 - tot * u, 5 * u, tot * u, stroke=P['accent'], width=4)
    fig.text(x0 + 5 * u + 30, y0 - tot * u / 2 + 10, '16', 34, color=P['accent'], bold=True, anchor='start')
    fig.text(x0 + 5 * u / 2, y0 + 46, '5', 34, color=P['accent'], bold=True)
    fig.text(x0 + 5 * u / 2 + 500, 330, 'to trapper = rektangel', 32, color=P['text'], bold=True, anchor='start')
    fig.text(x0 + 5 * u / 2 + 500, 386, 'S₅ = 5 · 16/2 = 40', 32, color=P['text'], bold=True, anchor='start')
    boxed_text(fig, x0 + 5 * u / 2 + 690, 560, ['Sₙ = n(a₁ + aₙ)/2'], 34)
    save(fig, 'r2-1-2-aritmetisk-sum-trapp.svg')


def r2_1_3_geometrisk():
    fig = Fig('r2')
    P = fig.p
    fig.title('Geometrisk følge: aₙ = 3 · 2ⁿ⁻¹')
    vals = [3, 6, 12, 24, 48]
    x0, y0, w, h = 250, 140, 1050, 560
    vmax = 52
    bw = 130
    gap = (w - 5 * bw) / 6
    for i, v in enumerate(vals):
        bx = x0 + gap + i * (bw + gap)
        bh = v / vmax * h
        fig.rect(bx, y0 + h - bh, bw, bh, fill=P['main'], stroke=P['main'], width=3, opacity=0.85)
        fig.text(bx + bw / 2, y0 + h - bh - 16, fmt(v), 32, color=P['main'], bold=True)
        fig.text(bx + bw / 2, y0 + h + 44, f'n = {i + 1}', 28)
        if i < 4:
            ax = bx + bw + gap / 2
            fig.arrow(ax - 28, y0 + h - 240, ax + 28, y0 + h - 240, P['accent'], 4)
            fig.text(ax, y0 + h - 270, '· 2', 30, color=P['accent'], bold=True)
    fig.line(x0, y0 + h, x0 + w, y0 + h, P['text'], 3)
    fig.text(W / 2, 850, 'konstant forholdstall k = 2', 34, color=P['accent'], bold=True)
    save(fig, 'r2-1-3-geometrisk-folge.svg')


def r2_1_5_kvadrat():
    fig = Fig('r2')
    P = fig.p
    fig.title('1/2 + 1/4 + 1/8 + … = 1')
    S = 580
    x0, y0 = 280, 160
    fig.rect(x0, y0, S, S, stroke=P['text'], width=4)
    # 1/2 venstre, 1/4 ovre hoyre, 1/8 nedre hoyre-venstre... spiral
    parts = []
    x, y, w, h = x0, y0, S, S
    fracs = ['1/2', '1/4', '1/8', '1/16', '1/32']
    ops = [0.85, 0.65, 0.5, 0.38, 0.28]
    rects = []
    # halver vekselvis vertikalt/horisontalt
    rects.append((x0, y0, S / 2, S))                       # 1/2 venstre
    rects.append((x0 + S / 2, y0, S / 2, S / 2))           # 1/4 oppe hoyre
    rects.append((x0 + 3 * S / 4, y0 + S / 2, S / 4, S / 2))  # 1/8
    rects.append((x0 + S / 2, y0 + 3 * S / 4, S / 4, S / 4))  # 1/16
    rects.append((x0 + S / 2, y0 + S / 2, S / 8, S / 4))      # 1/32
    for (rx, ry, rw, rh), fr, op in zip(rects, fracs, ops):
        fig.rect(rx, ry, rw, rh, fill=P['main'], stroke=P['bg'], width=3, opacity=op)
        fig.text(rx + rw / 2, ry + rh / 2 + 11, fr, 30 if rw > 90 else 24, color=P['accent'], bold=True)
    fig.text(1180, 360, 'S = a₁/(1 − k) = 1', 36, color=P['text'], bold=True)
    fig.text(1180, 440, '|k| < 1', 34, color=P['extra'], bold=True)
    save(fig, 'r2-1-5-uendelig-geometrisk-rekke.svg')


def r2_1_5_delsummer():
    fig = Fig('r2')
    P = fig.p
    tx, ty = fig.coords(0, 16, 0, 4.0, box=(190, 130, 1410, 740),
                        xticks=[5, 10, 15], yticks=[1, 2, 3], xlabel='n', ylabel='Sₙ')
    fig.line(tx(0.3), ty(2), tx(15.8), ty(2), P['accent'], 3, dash='14 12')
    # geometrisk
    s = 0
    for n in range(1, 16):
        s += (1 / 2) ** (n - 1)
        fig.circle(tx(n), ty(s), 9, fill=P['main'])
    # harmonisk
    sh = 0
    for n in range(1, 16):
        sh += 1 / n
        fig.circle(tx(n), ty(sh), 9, fill=P['extra'])
    fig.text(tx(8), ty(2) + 48, 'geometrisk: konvergerer mot 2', 30, color=P['main'], bold=True)
    fig.text(tx(9), ty(3.45), 'harmonisk: divergerer', 30, color=P['extra'], bold=True)
    save(fig, 'r2-1-5-delsummer-konvergens.svg')


def r2_1_6_induksjon():
    fig = Fig('r2')
    P = fig.p
    fig.title('Matematisk induksjon')
    base_y = 620
    n = 7
    x = 180
    for i in range(n):
        wd, hd = 64, 240
        tilt = -28 if i == 0 else 0
        cx = x + i * 165
        col = P['accent'] if i == 0 else P['main']
        a = math.radians(tilt)
        pts = [(0, 0), (wd, 0), (wd, -hd), (0, -hd)]
        rot = [(cx + px * math.cos(a) - py * math.sin(a), base_y + px * math.sin(a) + py * math.cos(a)) for px, py in pts]
        fig.poly(rot, stroke=col, width=5, close=True, fill=P['bg'])
    fig.text(x + 30, base_y + 60, 'basistrinn: n = 1', 30, color=P['accent'], bold=True, anchor='start')
    ax1 = x + 2 * 165 + 80
    ax2 = x + 3 * 165 - 14
    fig.arrow(ax1, base_y - 280, ax2 + 40, base_y - 280, P['main'], 5)
    fig.text((ax1 + ax2) / 2 + 20, base_y - 320, 'induksjonstrinn: k ⇒ k + 1', 30, color=P['main'], bold=True)
    fig.text(x + n * 165 + 30, base_y - 110, '· · ·', 48, color=P['text'], bold=True, anchor='start')
    fig.text(W / 2, 820, 'altså sant for alle n', 34, color=P['extra'], bold=True)
    save(fig, 'r2-1-6-induksjon-domino.svg')


# =====================================================================
# Kapittel 2: Integralregning
# =====================================================================

def r2_2_2_antiderivert():
    fig = Fig('r2')
    P = fig.p
    tx, ty = fig.coords(-2.6, 2.6, -4.5, 6.5, box=(190, 110, 1080, 790),
                        xticks=[-2, -1, 1, 2], yticks=[-2, 2, 4], xlabel='x', ylabel='y')
    Cs = [-2, 0, 1, 3]
    for C in Cs:
        f = lambda x, C=C: x ** 3 / 3 + C
        fig.plot(f, color=P['main'], width=4)
        fig.text(tx(2.25), ty(f(2.25)) - 14, f'C = {fmt(C)}', 27, color=P['main'], bold=True, anchor='start')
        # tangent i x=1, stigning 1
        x0 = 1.0
        dxl = 0.35
        fig.line(tx(x0 - dxl), ty(f(x0) - dxl), tx(x0 + dxl), ty(f(x0) + dxl), P['accent'], 5)
    fig.text(420, 160, '∫x² dx = x³/3 + C', 38, color=P['text'], bold=True)
    fig.text(1240, 450, 'samme deriverte', 30, color=P['accent'], bold=True)
    fig.text(1240, 494, 'f(x) = x²', 30, color=P['accent'], bold=True)
    save(fig, 'r2-2-2-antiderivert-familie.svg')


def r2_2_3_integral_1x():
    fig = Fig('r2')
    P = fig.p
    f = lambda x: 1 / x
    tx, ty = fig.coords(0, 4.2, 0, 1.6, box=(190, 130, 1410, 720),
                        xticks=[1, math.e, 2, 3, 4], yticks=[1], xlabel='x', ylabel='y')
    fig.shade_under(f, 1, math.e, color=P['accent'], opacity=0.45)
    fig.plot(f, xmin=0.55, color=P['main'], width=5)
    for xv, lab in [(1, '1'), (math.e, 'e')]:
        fig.line(tx(xv), ty(0), tx(xv), ty(f(xv)), P['text'], 2.5, dash='10 8', opacity=0.8)
    fig.text(tx((1 + math.e) / 2), ty(0.32), 'areal = 1', 32, color=P['accent'], bold=True)
    fig.text(tx(3.0), ty(1.05), 'y = 1/x', 32, color=P['main'], bold=True)
    boxed_text(fig, 1050, 250, ['∫(1/x) dx = ln|x| + C'], 32, color=P['extra'])
    save(fig, 'r2-2-3-integral-av-1x.svg')


def r2_2_4_riemann():
    fig = Fig('r2')
    P = fig.p
    f = lambda x: x * x
    panels = [(140, 5, '5 rektangler'), (860, 20, '20 rektangler')]
    for x0p, n, lab in panels:
        box = (x0p, 170, x0p + 600, 700)
        tx, ty = fig.coords(-0.15, 2.25, -0.3, 4.4, box=box, grid=False, xticks=[1, 2], yticks=[])
        for i in range(n):
            a = 2 * i / n
            b = 2 * (i + 1) / n
            fig.rect(tx(a), ty(f(a)), tx(b) - tx(a), ty(0) - ty(f(a)), fill=P['accent'], opacity=0.4)
            fig.rect(tx(a), ty(f(a)), tx(b) - tx(a), ty(0) - ty(f(a)), stroke=P['accent'], width=1.5)
        fig.plot(f, xmin=0, xmax=2.1, color=P['main'], width=5)
        fig.text(x0p + 300, 790, lab, 30, color=P['extra'], bold=True)
    fig.arrow(755, 430, 850, 430, P['extra'], 5)
    fig.text(W / 2, 90, 'n → ∞: arealet blir nøyaktig 8/3', 36, color=P['extra'], bold=True)
    save(fig, 'r2-2-4-riemannsum.svg')


def r2_2_5_fundamental():
    fig = Fig('r2')
    P = fig.p
    f = lambda x: 1.4 + 0.9 * math.sin(0.9 * x - 0.5) + 0.22 * x
    a, xv = 0.8, 4.0
    dx = 0.28
    tx, ty = fig.coords(0, 6.2, 0, 4.2, box=(190, 130, 1410, 690), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.shade_under(f, a, xv, color=P['accent'], opacity=0.4)
    fig.shade_under(f, xv, xv + dx, color=P['extra'], opacity=0.85)
    fig.plot(f, xmin=0.2, xmax=6.0, color=P['main'], width=5)
    for q, lab in [(a, 'a'), (xv, 'x')]:
        fig.line(tx(q), ty(0), tx(q), ty(f(q)), P['text'], 2.5, dash='8 8', opacity=0.7)
        fig.text(tx(q), ty(0) + 44, lab, 32, bold=True, italic=True)
    fig.text(tx((a + xv) / 2), ty(f((a + xv) / 2) / 2), 'A(x)', 38, color=P['accent'], bold=True)
    fig.text(tx(xv + dx) + 14, ty(f(xv) / 2), 'bredde dx, høyde f(x)', 28, color=P['extra'], bold=True, anchor='start')
    fig.text(tx(xv + dx) + 14, ty(f(xv) / 2) + 44, 'A′(x) = f(x)', 30, color=P['extra'], bold=True, anchor='start')
    fig.text(W / 2, 830, '∫ₐᵇ f(x) dx = F(b) − F(a)', 38, color=P['text'], bold=True)
    save(fig, 'r2-2-5-fundamentalsetningen.svg')


def r2_2_6_fortegnsareal():
    fig = Fig('r2')
    P = fig.p
    tx, ty = fig.coords(-0.3, 2 * PI + 0.4, -1.5, 1.5, box=(170, 140, 1430, 640), grid=False,
                        xticks=[], yticks=[1, -1], xlabel='x', ylabel='y')
    fig.shade_under(math.sin, 0, PI, color=P['accent'], opacity=0.5)
    fig.shade_under(math.sin, PI, 2 * PI, color=P['extra'], opacity=0.5)
    fig.plot(math.sin, xmin=-0.2, xmax=2 * PI + 0.2, color=P['main'], width=5)
    for xv, lab in [(PI, 'π'), (2 * PI, '2π')]:
        fig.line(tx(xv), ty(0) - 10, tx(xv), ty(0) + 10, P['text'], 3)
        fig.text(tx(xv) + 26, ty(0) + 46, lab, 30, bold=True)
    fig.text(tx(PI / 2), ty(0.45), '+2', 40, color=P['accent'], bold=True)
    fig.text(tx(3 * PI / 2), ty(-0.45), '−2', 40, color=P['extra'], bold=True)
    fig.text(W / 2, 760, 'fortegnsareal: 2 − 2 = 0', 34, color=P['text'], bold=True)
    fig.text(W / 2, 820, 'absolutt areal: 2 + 2 = 4', 34, color=P['text'], bold=True)
    save(fig, 'r2-2-6-fortegnsareal.svg')


def r2_2_7_areal_mellom():
    fig = Fig('r2')
    P = fig.p
    f = lambda x: x + 2
    g = lambda x: x * x
    tx, ty = fig.coords(-2.6, 3.4, -1, 7.5, box=(220, 110, 1180, 760),
                        xticks=[-2, -1, 1, 2, 3], yticks=[2, 4, 6], xlabel='x', ylabel='y')
    # omraade mellom
    pts = curve_pts(f, -1, 2, tx, ty, 60) + curve_pts(g, 2, -1, tx, ty, 120)
    fig.poly(pts, fill=P['extra'], close=True, opacity=0.45)
    fig.plot(f, color=P['accent'], width=5)
    fig.plot(g, color=P['main'], width=5)
    fig.point(-1, 1, color=P['text'], r=10)
    fig.point(2, 4, color=P['text'], r=10)
    fig.text(tx(-1) - 22, ty(1) - 20, '(−1, 1)', 30, anchor='end', bold=True)
    fig.text(tx(2) + 24, ty(4) - 14, '(2, 4)', 30, anchor='start', bold=True)
    fig.text(tx(0.5), ty(2.2), 'A = 4,5', 36, color=P['extra'], bold=True)
    fig.text(1330, 240, 'y = x + 2', 32, color=P['accent'], bold=True)
    fig.text(1330, 300, 'y = x²', 32, color=P['main'], bold=True)
    fig.text(W / 2, 850, 'øverste minus nederste funksjon', 32, color=P['text'])
    save(fig, 'r2-2-7-areal-mellom-kurver.svg')


def r2_2_7_kryssende():
    fig = Fig('r2')
    P = fig.p
    # f - g = -x(x-2)(x-4)*0.3 => krysser i 0, 2, 4
    g = lambda x: 0.35 * x + 1.4
    diff = lambda x: -0.30 * x * (x - 2) * (x - 4)
    f = lambda x: g(x) + diff(x)
    tx, ty = fig.coords(-0.8, 5.2, -0.6, 4.6, box=(190, 120, 1410, 700), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    pts1 = curve_pts(f, 0, 2, tx, ty, 80) + curve_pts(g, 2, 0, tx, ty, 80)
    fig.poly(pts1, fill=P['extra'], close=True, opacity=0.55)
    pts2 = curve_pts(g, 2, 4, tx, ty, 80) + curve_pts(f, 4, 2, tx, ty, 80)
    fig.poly(pts2, fill=P['extra'], close=True, opacity=0.3)
    fig.plot(f, xmin=-0.5, xmax=4.9, color=P['main'], width=5)
    fig.plot(g, xmin=-0.5, xmax=4.9, color=P['accent'], width=5)
    for xv in (0, 2, 4):
        fig.point(xv, g(xv), color=P['text'], r=10)
    fig.text(tx(1), ty(g(1) + diff(1) / 2) + 70, 'A₁: ∫(f − g)', 30, color=P['extra'], bold=True)
    fig.text(tx(3), ty(g(3) + diff(3) / 2) - 60, 'A₂: ∫(g − f)', 30, color=P['extra'], bold=True)
    fig.text(tx(4.8), ty(f(4.8)) - 26, 'f', 32, color=P['main'], bold=True, italic=True)
    fig.text(tx(4.8), ty(g(4.8)) - 30, 'g', 32, color=P['accent'], bold=True, italic=True)
    fig.text(W / 2, 830, 'finn skjæringspunktene og del opp', 34, color=P['text'], bold=True)
    save(fig, 'r2-2-7-kryssende-kurver.svg')


# =====================================================================
# Kapittel 3: Integrasjonsmetoder
# =====================================================================

def r2_3_1_substitusjon():
    fig = Fig('r2')
    P = fig.p
    fig.title('Substitusjon: variabelskifte')
    cy = 300
    fig.text(330, cy, '∫', 64, anchor='start')
    fig.text(385, cy, '2x', 46, anchor='start', color=P['accent'], bold=True)
    fig.text(465, cy, '·', 46, anchor='start')
    fig.text(500, cy, 'e', 46, anchor='start')
    fig.text(528, cy - 18, 'x²', 36, anchor='start', color=P['main'], bold=True)
    fig.text(600, cy, 'dx', 46, anchor='start')
    fig.rect(488, cy - 62, 105, 78, stroke=P['main'], width=3.5, rx=10)
    fig.rect(372, cy - 48, 90, 64, stroke=P['accent'], width=3.5, rx=10)
    fig.text(540, cy - 90, 'u = x²', 32, color=P['main'], bold=True)
    fig.text(417, cy + 78, 'du = 2x dx', 32, color=P['accent'], bold=True)
    fig.arrow(760, cy - 14, 920, cy - 14, P['text'], 5)
    fig.text(970, cy, '∫e^u du = e^(x²) + C', 42, anchor='start', color=P['extra'], bold=True)
    fig.text(W / 2, 700, 'kjerne med sin deriverte som faktor', 34, color=P['text'], bold=True)
    save(fig, 'r2-3-1-substitusjon.svg')


def r2_3_3_delbrok():
    fig = Fig('r2')
    P = fig.p
    fig.text(W / 2, 100, '3/((x − 1)(x + 2)) = 1/(x − 1) − 1/(x + 2)', 38, bold=True)
    fig.text(W / 2 - 140, 152, '1/(x − 1) i cyan', 27, color=P['main'], anchor='end')
    fig.text(W / 2 + 140, 152, '−1/(x + 2) i magenta', 27, color=P['extra'], anchor='start')
    tx, ty = fig.coords(-5.5, 4.5, -4.2, 4.2, box=(220, 200, 1380, 790), grid=False,
                        xticks=[-2, 1], yticks=[], xlabel='x', ylabel='y')
    for xv in (1, -2):
        fig.line(tx(xv), ty(-4), tx(xv), ty(4), P['grid'], 3, dash='12 10')
    h = lambda x: 3 / ((x - 1) * (x + 2))
    f1 = lambda x: 1 / (x - 1)
    f2 = lambda x: -1 / (x + 2)
    fig.plot(f1, color=P['main'], width=3.5)
    fig.plot(f2, color=P['extra'], width=3.5)
    fig.plot(h, color=P['accent'], width=5)
    fig.text(tx(2.1), ty(f1(2.1)) - 24, '1/(x−1)', 27, color=P['main'], bold=True, anchor='start')
    fig.text(tx(-4.4), ty(f2(-4.4)) - 24, '−1/(x+2)', 27, color=P['extra'], bold=True, anchor='start')
    fig.text(tx(3.4), ty(h(3.4)) - 70, 'venstresiden', 27, color=P['accent'], bold=True)
    fig.text(W / 2, 860, 'én vanskelig brøk blir to enkle', 32, color=P['text'], bold=True)
    save(fig, 'r2-3-3-delbrokoppspalting.svg')


def r2_3_4_numerisk():
    fig = Fig('r2')
    P = fig.p
    f = lambda x: 0.55 + 0.5 * math.sin(2.1 * x + 0.4) + 0.1 * x
    a, b = 0.25, 1.75
    labels = ['rektangel', 'trapes', 'Simpson']
    for k, x0p in enumerate([120, 600, 1080]):
        box = (x0p, 170, x0p + 400, 640)
        tx, ty = fig.coords(0, 2, 0, 1.6, box=box, grid=False, xticks=[], yticks=[])
        if k == 0:
            fig.rect(tx(a), ty(f(a)), tx(b) - tx(a), ty(0) - ty(f(a)), fill=P['accent'], opacity=0.35)
            fig.rect(tx(a), ty(f(a)), tx(b) - tx(a), ty(0) - ty(f(a)), stroke=P['accent'], width=3)
        elif k == 1:
            fig.poly([(tx(a), ty(0)), (tx(a), ty(f(a))), (tx(b), ty(f(b))), (tx(b), ty(0))],
                     fill=P['accent'], close=True, opacity=0.35)
            fig.poly([(tx(a), ty(0)), (tx(a), ty(f(a))), (tx(b), ty(f(b))), (tx(b), ty(0))],
                     stroke=P['accent'], width=3, close=True)
        else:
            m = (a + b) / 2
            # parabel gjennom (a,f(a)), (m,f(m)), (b,f(b))
            def par(x):
                L0 = (x - m) * (x - b) / ((a - m) * (a - b))
                L1 = (x - a) * (x - b) / ((m - a) * (m - b))
                L2 = (x - a) * (x - m) / ((b - a) * (b - m))
                return f(a) * L0 + f(m) * L1 + f(b) * L2
            pts = [(tx(a), ty(0))] + curve_pts(par, a, b, tx, ty, 80) + [(tx(b), ty(0))]
            fig.poly(pts, fill=P['accent'], close=True, opacity=0.35)
            fig.poly(curve_pts(par, a, b, tx, ty, 80), stroke=P['accent'], width=3)
        fig.plot(f, xmin=0.05, xmax=1.95, color=P['main'], width=5)
        fig.text(x0p + 200, 720, labels[k], 32, color=P['extra'], bold=True)
    fig.text(W / 2, 830, 'feilen krymper: h, h², h⁴', 34, color=P['text'], bold=True)
    save(fig, 'r2-3-4-numeriske-metoder.svg')


def r2_3_5_flytskjema():
    fig = Fig('r2')
    P = fig.p
    cxL = 480
    fig.flow_box(cxL - 150, 60, 300, 76, 'start', shape='oval', size=30)
    fig.flow_box(cxL - 190, 186, 380, 80, 'les a, b, n', size=29)
    fig.flow_box(cxL - 330, 316, 660, 96, 'h = (b − a)/n\nsum = (f(a) + f(b))/2,  i = 1', size=27)
    # rombe
    dy0 = 470
    fig.flow_box(cxL - 170, dy0, 340, 130, 'i < n?', shape='diamond', size=32)
    # ja-grein til hoyre
    fig.flow_box(950, dy0 - 14, 470, 76, 'sum = sum + f(a + i·h)', size=27)
    fig.flow_box(1030, dy0 + 120, 310, 70, 'i = i + 1', size=27)
    # nei-grein ned
    fig.flow_box(cxL - 230, 680, 460, 76, 'areal = sum · h', size=29)
    fig.flow_box(cxL - 200, 800, 400, 72, 'skriv ut areal', shape='oval', size=28)
    arr = lambda x1, y1, x2, y2: fig.arrow(x1, y1, x2, y2, P['main'], 4, head=13)
    arr(cxL, 136, cxL, 182)
    arr(cxL, 266, cxL, 312)
    arr(cxL, 412, cxL, 466)
    arr(cxL + 170, dy0 + 65, 946, dy0 + 24)
    fig.text(800, dy0 + 14, 'ja', 30, color=P['accent'], bold=True)
    arr(1185, dy0 + 62, 1185, dy0 + 116)
    # sloyfe tilbake til romben
    fig.poly([(1185, dy0 + 190), (1185, dy0 + 250), (cxL, dy0 + 250), (cxL, dy0 + 134)],
             stroke=P['main'], width=4)
    fig.arrow(cxL, dy0 + 160, cxL, dy0 + 134, P['main'], 4, head=13)
    arr(cxL, dy0 + 130, cxL, 676)
    fig.text(cxL + 24, 660, 'nei', 30, color=P['accent'], bold=True, anchor='start')
    arr(cxL, 756, cxL, 796)
    fig.text(1290, 120, 'Trapesmetoden', 36, color=P['extra'], bold=True)
    save(fig, 'r2-3-5-flytskjema-trapesmetoden.svg')


def r2_3_6_omdreining():
    fig = Fig('r2')
    P = fig.p
    # venstre: flatt omraade
    tx, ty = fig.coords(-0.4, 4.6, -0.5, 2.6, box=(120, 200, 660, 640), grid=False,
                        xticks=[4], yticks=[2], xlabel='x', ylabel='y')
    f = lambda x: math.sqrt(max(x, 0))
    fig.shade_under(f, 0, 4, color=P['main'], opacity=0.3)
    fig.plot(f, xmin=0, xmax=4.3, color=P['main'], width=5)
    fig.text(390, 250, 'y = √x', 32, color=P['main'], bold=True)
    # rotasjonspil rundt x-aksen
    angle_arc(fig, tx(2.0), ty(0), 56, -60, 200, P['extra'], 4)
    aend = math.radians(200)
    hx, hy = tx(2.0) + 56 * math.cos(aend), ty(0) - 56 * math.sin(aend)
    fig.arrow(hx + 18, hy + 12, hx, hy, P['extra'], 4, head=13)
    # hoyre: konturprofil + speiling (horn)
    tx2, ty2 = fig.coords(-0.4, 4.6, -2.6, 2.6, box=(820, 150, 1480, 700), grid=False,
                          xticks=[], yticks=[], xlabel='x', ylabel='')
    fig.plot(f, xmin=0, xmax=4.2, color=P['main'], width=5)
    fig.plot(lambda x: -f(x), xmin=0, xmax=4.2, color=P['main'], width=5)
    fig.line(tx2(-0.2), ty2(0), tx2(4.5), ty2(0), P['grid'], 2.5, dash='12 10')
    # ende-ellipse ved x=4
    fig.raw(f'<ellipse cx="{tx2(4):.1f}" cy="{ty2(0):.1f}" rx="26" ry="{ty2(0) - ty2(2):.1f}" fill="none" stroke="{P["main"]}" stroke-width="3.5"/>')
    # skive ved x=2.4
    xs = 2.4
    rr = f(xs)
    fig.raw(f'<ellipse cx="{tx2(xs):.1f}" cy="{ty2(0):.1f}" rx="17" ry="{ty2(0) - ty2(rr):.1f}" fill="{P["accent"]}" opacity="0.55" stroke="{P["accent"]}" stroke-width="3"/>')
    fig.line(tx2(xs), ty2(0), tx2(xs), ty2(rr), P['text'], 3)
    fig.text(tx2(xs) + 30, ty2(rr / 2), 'r = √x', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(tx2(xs), ty2(-1.9), 'tykkelse dx', 28, color=P['accent'], bold=True)
    fig.text(W / 2, 840, 'V = π∫₀⁴ x dx = 8π', 38, color=P['text'], bold=True)
    save(fig, 'r2-3-6-omdreining-x-akse.svg')


def r2_3_6_skive_skall():
    fig = Fig('r2')
    P = fig.p
    # Venstre: skive (rotasjon om horisontal akse) - kontur + skive
    tx, ty = fig.coords(0, 4.5, -2.4, 2.4, box=(110, 160, 700, 640), grid=False, xticks=[], yticks=[])
    f = lambda x: 0.5 + 0.35 * x
    fig.plot(f, xmin=0.3, xmax=4.1, color=P['main'], width=4.5)
    fig.plot(lambda x: -f(x), xmin=0.3, xmax=4.1, color=P['main'], width=4.5)
    fig.line(tx(0), ty(0), tx(4.4), ty(0), P['grid'], 3, dash='12 10')
    fig.raw(f'<ellipse cx="{tx(4.1):.1f}" cy="{ty(0):.1f}" rx="22" ry="{ty(0) - ty(f(4.1)):.1f}" fill="none" stroke="{P["main"]}" stroke-width="3"/>')
    xs = 2.6
    fig.raw(f'<ellipse cx="{tx(xs):.1f}" cy="{ty(0):.1f}" rx="15" ry="{ty(0) - ty(f(xs)):.1f}" fill="{P["accent"]}" opacity="0.6" stroke="{P["accent"]}" stroke-width="3"/>')
    fig.text(405, 740, 'skive: dV = πr² dx', 32, color=P['accent'], bold=True)
    # Hoyre: skall (rotasjon om vertikal akse)
    cx2, cy2 = 1170, 430
    fig.line(cx2, 130, cx2, 700, P['grid'], 3, dash='12 10')
    # ytre legeme: bolle-kontur
    g = lambda u: 240 - 150 * math.exp(-((u / 130) ** 2))
    pts = [(cx2 + u, cy2 + 170 - (240 - g(u))) for u in range(-230, 231, 10)]
    # enklere: tegn to symmetriske kurver
    prof = lambda u: cy2 + 180 - 0.0033 * u * u
    left = [(cx2 + u, prof(u)) for u in range(-230, 231, 10)]
    fig.poly(left, stroke=P['main'], width=4.5)
    fig.raw(f'<ellipse cx="{cx2}" cy="{prof(230):.1f}" rx="230" ry="40" fill="none" stroke="{P["main"]}" stroke-width="3.5"/>')
    # sylinderskall inni
    rs = 120
    sh_top = cy2 - 90
    sh_bot = prof(rs)
    fig.raw(f'<ellipse cx="{cx2}" cy="{sh_top:.1f}" rx="{rs}" ry="22" fill="none" stroke="{P["main"]}" stroke-width="3.5"/>')
    fig.line(cx2 - rs, sh_top, cx2 - rs, sh_bot, P['main'], 3.5)
    fig.line(cx2 + rs, sh_top, cx2 + rs, sh_bot, P['main'], 3.5)
    fig.raw(f'<ellipse cx="{cx2}" cy="{sh_bot:.1f}" rx="{rs}" ry="22" fill="none" stroke="{P["main"]}" stroke-width="2.5" stroke-dasharray="8 8"/>')
    fig.text(cx2, 760, 'skall: dV = 2πx · f(x) dx', 32, color=P['main'], bold=True)
    fig.title('Skive vs. skall')
    save(fig, 'r2-3-6-skive-vs-skall.svg')


def r2_3_7_akkumulert():
    fig = Fig('r2')
    P = fig.p
    r = lambda t: 2.6 * math.exp(-((t - 3.2) ** 2) / 2.6) + 0.4
    tcut = 4.4
    tx, ty = fig.coords(0, 9, 0, 3.4, box=(170, 90, 1430, 370), grid=False,
                        xticks=[], yticks=[], ylabel='r(t)  (L/min)')
    fig.shade_under(r, 0, tcut, color=P['accent'], opacity=0.4)
    fig.plot(r, xmin=0, xmax=8.7, color=P['main'], width=5)
    # nederst: V(t)
    import functools
    def V(t, n=60):
        s = 0
        for i in range(n):
            s += r(t * (i + 0.5) / n) * t / n
        return s
    tx2, ty2 = fig.coords(0, 9, 0, 14, box=(170, 540, 1430, 820), grid=False,
                          xticks=[], yticks=[], xlabel='t', ylabel='V(t)  (liter)')
    fig.plot(V, xmin=0, xmax=8.7, color=P['extra'], width=5, n=120)
    # felles vertikal linje
    fig.line(tx(tcut), 90, tx2(tcut), 820, P['text'], 2.5, dash='10 9', opacity=0.6)
    fig.text(W / 2, 460, 'V(t) = ∫₀ᵗ r(s) ds', 38, color=P['text'], bold=True)
    save(fig, 'r2-3-7-akkumulert-mengde.svg')


# =====================================================================
# Kapittel 4: Trigonometri
# =====================================================================

def r2_4_1_radian():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 480, 480, 320
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    fig.line(cx, cy, cx + r, cy, P['main'], 5)
    fig.text(cx + r / 2, cy + 44, 'r', 34, color=P['main'], bold=True, italic=True)
    angle_arc(fig, cx, cy, r, 0, math.degrees(1), P['extra'], 7)
    fig.text(cx + (r + 46) * math.cos(0.5), cy - (r + 46) * math.sin(0.5), 'bue = r', 32, color=P['extra'], bold=True, anchor='start')
    fig.line(cx, cy, cx + r * math.cos(1), cy - r * math.sin(1), P['main'], 5)
    angle_arc(fig, cx, cy, 86, 0, math.degrees(1), P['accent'], 3.5)
    fig.text(cx + 150 * math.cos(0.5), cy - 150 * math.sin(0.5) + 8, '1 rad ≈ 57,3°', 30, color=P['accent'], bold=True, anchor='start')
    boxed_text(fig, 1230, 390, ['180° = π rad', '90° = π/2 rad', '360° = 2π rad'], 32, color=P['main'])
    save(fig, 'r2-4-1-radian-definisjon.svg')


def r2_4_1_buelengde():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 540, 500, 330
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    a0, a1 = 20, 80  # sektor pa 60 grader = pi/3
    # sektorfyll
    pts = [(cx, cy)]
    for i in range(41):
        a = math.radians(a0 + (a1 - a0) * i / 40)
        pts.append((cx + r * math.cos(a), cy - r * math.sin(a)))
    fig.poly(pts, fill=P['main'], close=True, opacity=0.4)
    for a in (a0, a1):
        ar = math.radians(a)
        fig.line(cx, cy, cx + r * math.cos(ar), cy - r * math.sin(ar), P['main'], 4)
    angle_arc(fig, cx, cy, r + 4, a0, a1, P['extra'], 7)
    angle_arc(fig, cx, cy, 80, a0, a1, P['accent'], 3.5, label='π/3', lab_r=130)
    am = math.radians((a0 + a1) / 2)
    fig.text(cx + (r + 50) * math.cos(am), cy - (r + 50) * math.sin(am), 'b = rθ ≈ 5,2', 31, color=P['extra'], bold=True, anchor='start')
    fig.text(cx + 0.62 * r * math.cos(am), cy - 0.62 * r * math.sin(am) + 10, 'A = ½r²θ ≈ 13,1', 29, color=P['text'], bold=True)
    fig.line(cx, cy, cx - r * 0.5, cy + r * 0.5 * 1.2, P['accent'], 0)  # noop for balanse
    fig.text(cx - r * 0.45, cy + r * 0.62, 'r = 5', 32, color=P['accent'], bold=True)
    fig.line(cx, cy, cx + r * math.cos(math.radians(218)), cy - r * math.sin(math.radians(218)), P['accent'], 3.5)
    save(fig, 'r2-4-1-buelengde-sektorareal.svg')


def r2_4_2_enhetssirkel():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 660, 470, 340
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    degs = sorted(set(list(range(0, 360, 30)) + list(range(45, 360, 90))))
    for d in degs:
        a = math.radians(d)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.line(cx, cy, x, y, P['main'], 1.8, opacity=0.5)
        marked = d in (30, 45, 60, 0, 90)
        col = P['main'] if d in (30, 45, 60) else (P['accent'] if d in (0, 90) else P['extra'])
        fig.circle(x, y, 9 if marked else 7, fill=col)
    for d, t in [(30, '(√3/2, 1/2)'), (45, '(√2/2, √2/2)'), (60, '(1/2, √3/2)')]:
        a = math.radians(d)
        fig.text(cx + (r + 30) * math.cos(a), cy - (r + 30) * math.sin(a) + 6, t, 29, color=P['main'], bold=True, anchor='start')
    fig.text(cx + r + 26, cy + 46, '(1, 0)', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(cx + 26, cy - r - 28, '(0, 1)', 30, color=P['accent'], bold=True, anchor='start')
    fig.text(1400, 760, 'hver π/6 og π/4', 30, color=P['extra'], anchor='end')
    save(fig, 'r2-4-2-enhetssirkel-komplett.svg')


def r2_4_2_referansevinkel():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 560, 470, 320
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    a150 = math.radians(150)
    a30 = math.radians(30)
    x1, y1 = cx + r * math.cos(a150), cy - r * math.sin(a150)
    x2, y2 = cx + r * math.cos(a30), cy - r * math.sin(a30)
    fig.line(cx, cy, x2, y2, P['main'], 3, opacity=0.5)
    fig.circle(x2, y2, 9, fill=P['main'])
    fig.line(cx, cy, x1, y1, P['main'], 5)
    fig.circle(x1, y1, 11, fill=P['main'])
    fig.text(x1 - 18, y1 - 26, '150°', 32, color=P['main'], bold=True, anchor='end')
    fig.text(x2 + 18, y2 - 26, '30°', 30, color=P['main'], bold=True, anchor='start')
    angle_arc(fig, cx, cy, 110, 150, 180, P['extra'], 4, label='30°', lab_r=160)
    fig.line(cx, cy - r - 30, cx, cy + 40, P['text'], 2.5, dash='10 9', opacity=0.6)
    fig.line(x1, y1, x2, y2, P['text'], 2, dash='8 8', opacity=0.5)
    boxed_text(fig, 1240, 300, ['sin 150° = sin 30° = 1/2', 'cos 150° = −√3/2'], 30)
    save(fig, 'r2-4-2-referansevinkel.svg')


def r2_4_2_fortegn():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 800, 440, 280
    fig.arrow(120, cy, 1480, cy, P['text'], 3)
    fig.arrow(cx, 830, cx, 80, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    quads = [
        (1170, 220, 'sin +, cos +, tan +'),
        (430, 220, 'sin +, cos −, tan −'),
        (430, 680, 'sin −, cos −, tan +'),
        (1170, 680, 'sin −, cos +, tan −'),
    ]
    for qx, qy, t in quads:
        # fargelegg + cyan, - magenta ved a dele teksten
        parts = t.split(', ')
        total_w = sum(len(p) for p in parts) * 15 + 60
        x = qx - total_w / 2
        for p in parts:
            col = P['main'] if p.endswith('+') else P['extra']
            fig.text(x, qy, p + ('' if p is parts[-1] else ','), 30, color=col, bold=True, anchor='start')
            x += len(p) * 15 + 30
    for i, lab in enumerate(['I', 'II', 'III', 'IV']):
        a = math.radians(45 + i * 90)
        fig.text(cx + 0.55 * r * math.cos(a), cy - 0.55 * r * math.sin(a) + 10, lab, 34, color=P['accent'], bold=True)
    fig.text(W / 2, 880, 'sin følger y, cos følger x', 32, color=P['text'], bold=True)
    save(fig, 'r2-4-2-fortegn-kvadranter.svg')


def r2_4_3_sin_sirkel():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 560, 470, 320
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    yv = math.sqrt(2) / 2
    yline = cy - r * yv
    fig.line(cx - r - 60, yline, cx + r + 70, yline, P['accent'], 3, dash='12 10')
    fig.text(cx + r + 76, yline + 10, 'y = √2/2', 30, color=P['accent'], anchor='start', bold=True)
    for d, lab in [(45, 'π/4'), (135, '3π/4')]:
        a = math.radians(d)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.line(cx, cy, x, y, P['main'], 4.5)
        fig.circle(x, y, 11, fill=P['main'])
        fig.text(x + (20 if d == 45 else -20), y - 26, lab, 32, color=P['main'], bold=True,
                 anchor='start' if d == 45 else 'end')
    fig.line(cx, cy - r - 40, cx, cy + 40, P['extra'], 3, dash='8 8')
    fig.text(1250, 250, 'sin x = √2/2', 38, color=P['accent'], bold=True)
    fig.text(W / 2, 850, 'x = π/4 + n · 2π  eller  x = 3π/4 + n · 2π', 36, bold=True)
    save(fig, 'r2-4-3-sinuslikning-enhetssirkel.svg')


def r2_4_3_sin_graf():
    fig = Fig('r2')
    P = fig.p
    tx, ty = fig.coords(0, 4 * PI + 0.4, -1.5, 1.7, box=(170, 150, 1430, 700), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    fig.plot(math.sin, xmax=4 * PI, color=P['main'], width=5)
    fig.line(tx(0), ty(0.5), tx(4 * PI + 0.3), ty(0.5), P['accent'], 3.5)
    fig.text(tx(0.1), ty(0.5) - 18, 'y = 0,5', 28, color=P['accent'], anchor='start', bold=True)
    for xv, lab in [(PI / 6, 'π/6'), (5 * PI / 6, '5π/6'), (13 * PI / 6, '13π/6'), (17 * PI / 6, '17π/6')]:
        fig.circle(tx(xv), ty(0.5), 11, fill=P['extra'])
        fig.line(tx(xv), ty(0.5), tx(xv), ty(0), P['extra'], 2, dash='6 7', opacity=0.7)
        fig.text(tx(xv), ty(0) + 44, lab, 29, color=P['extra'], bold=True)
    for xv, lab in [(2 * PI, '2π'), (4 * PI, '4π')]:
        fig.line(tx(xv), ty(0) - 10, tx(xv), ty(0) + 10, P['text'], 3)
        fig.text(tx(xv) + 8, ty(0) - 22, lab, 28)
    yt = ty(1.45)
    dbl_arrow(fig, tx(PI / 6), yt, tx(13 * PI / 6), yt, P['accent'], 4)
    fig.text(tx(PI / 6 + PI), yt - 18, 'periode 2π', 30, color=P['accent'], bold=True)
    fig.text(W / 2, 830, 'to løsninger per periode', 32, color=P['text'], bold=True)
    save(fig, 'r2-4-3-sinuslikning-graf.svg')


def r2_4_4_cos_sirkel():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 560, 470, 320
    fig.arrow(cx - r - 70, cy, cx + r + 80, cy, P['text'], 3)
    fig.arrow(cx, cy + r + 60, cx, cy - r - 70, P['text'], 3)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    xline = cx - r * 0.5
    fig.line(xline, cy - r - 50, xline, cy + r + 60, P['accent'], 3, dash='12 10')
    fig.text(xline, cy - r - 64, 'x = −1/2', 30, color=P['accent'], bold=True)
    for d, lab in [(120, '2π/3'), (240, '4π/3')]:
        a = math.radians(d)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.line(cx, cy, x, y, P['main'], 4.5)
        fig.circle(x, y, 11, fill=P['main'])
        fig.text(x - 22, y + (-22 if d == 120 else 44), lab, 32, color=P['main'], bold=True, anchor='end')
    fig.line(cx - r - 40, cy, cx + 40, cy, P['extra'], 3, dash='8 8')
    fig.text(1250, 250, 'cos x = −1/2', 38, color=P['accent'], bold=True)
    fig.text(W / 2, 860, 'x = ±2π/3 + n · 2π', 38, bold=True)
    save(fig, 'r2-4-4-cosinuslikning-enhetssirkel.svg')


def r2_4_5_tangens():
    fig = Fig('r2')
    P = fig.p
    # venstre: enhetssirkel med linje gjennom pi/4 og 5pi/4
    cx, cy, r = 360, 450, 240
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    fig.line(cx - r - 40, cy, cx + r + 50, cy, P['text'], 2.5)
    fig.line(cx, cy + r + 40, cx, cy - r - 50, P['text'], 2.5)
    a = math.radians(45)
    x1, y1 = cx + r * math.cos(a), cy - r * math.sin(a)
    x2, y2 = cx - r * math.cos(a), cy + r * math.sin(a)
    ext = 1.45
    fig.line(cx - ext * r * math.cos(a), cy + ext * r * math.sin(a),
             cx + ext * r * math.cos(a), cy - ext * r * math.sin(a), P['main'], 4.5)
    fig.circle(x1, y1, 10, fill=P['main'])
    fig.circle(x2, y2, 10, fill=P['main'])
    fig.text(x1 + 20, y1 - 18, 'π/4', 30, color=P['main'], bold=True, anchor='start')
    fig.text(x2 - 20, y2 + 40, '5π/4', 30, color=P['main'], bold=True, anchor='end')
    fig.text(cx, cy + r + 90, 'samme linje: periode π', 29, color=P['extra'], bold=True)
    # hoyre: tan-graf 0..2pi
    tx, ty = fig.coords(0, 2 * PI, -3.4, 3.4, box=(760, 130, 1460, 700), grid=False,
                        xticks=[], yticks=[1], xlabel='x', ylabel='y')
    for xv in (PI / 2, 3 * PI / 2):
        fig.line(tx(xv), ty(-3.3), tx(xv), ty(3.3), P['extra'], 3, dash='12 10')
    fig.plot(math.tan, color=P['main'], width=4.5)
    fig.line(tx(0), ty(1), tx(2 * PI), ty(1), P['accent'], 3.5)
    for xv, lab in [(PI / 4, 'π/4'), (5 * PI / 4, '5π/4')]:
        fig.circle(tx(xv), ty(1), 11, fill=P['accent'])
        fig.text(tx(xv) + 6, ty(1) - 26, lab, 30, color=P['accent'], bold=True, anchor='start')
    fig.text(1110, 800, 'x = π/4 + n · π', 36, bold=True)
    fig.text(380, 110, 'tan x = 1', 36, color=P['accent'], bold=True)
    save(fig, 'r2-4-5-tangenslikning.svg')


def r2_4_7_ren_sinus():
    fig = Fig('r2')
    P = fig.p
    # venstre: vektordiagram 3-4-5
    s = 88
    ox, oy = 180, 700
    fig.arrow(ox, oy, ox + 3 * s, oy, P['main'], 6, head=17)
    fig.text(ox + 1.5 * s, oy + 44, '3', 32, color=P['main'], bold=True)
    fig.arrow(ox + 3 * s, oy, ox + 3 * s, oy - 4 * s, P['accent'], 6, head=17)
    fig.text(ox + 3 * s + 26, oy - 2 * s, '4', 32, color=P['accent'], bold=True, anchor='start')
    fig.arrow(ox, oy, ox + 3 * s, oy - 4 * s, P['extra'], 6, head=17)
    fig.text(ox + 1.1 * s, oy - 2.4 * s, '5', 36, color=P['extra'], bold=True)
    ang = math.degrees(math.atan2(4, 3))
    angle_arc(fig, ox, oy, 95, 0, ang, P['text'], 3, label='φ', lab_r=140)
    fig.text(ox + 1.6 * s, oy - 4 * s + 6, 'tan φ = 4/3', 30, color=P['text'], bold=True)
    # hoyre: bolger
    tx, ty = fig.coords(0, 2 * PI, -5.6, 5.6, box=(700, 140, 1460, 730), grid=False,
                        xticks=[], yticks=[5, -5], xlabel='x', ylabel='')
    phi = math.atan2(4, 3)
    fig.plot(lambda x: 3 * math.sin(x), color=P['main'], width=3)
    fig.plot(lambda x: 4 * math.cos(x), color=P['accent'], width=3)
    fig.plot(lambda x: 5 * math.sin(x + phi), color=P['extra'], width=5.5)
    fig.text(1095, 100, '3 sin x + 4 cos x = 5 sin(x + φ)', 34, color=P['extra'], bold=True)
    fig.text(tx(4.2), ty(3 * math.sin(4.2)) + 44, '3 sin x', 27, color=P['main'], bold=True)
    fig.text(tx(2.6), ty(4 * math.cos(2.6)) + 48, '4 cos x', 27, color=P['accent'], bold=True)
    fig.text(tx(0.9 - phi + PI / 2) + 10, ty(5) - 20, 'amplitude 5', 28, color=P['extra'], bold=True)
    save(fig, 'r2-4-7-ren-sinusform.svg')


def r2_4_8_amplitude():
    fig = Fig('r2')
    P = fig.p
    f = lambda x: 3 * math.sin(2 * x - PI / 2) + 1
    tx, ty = fig.coords(0, 2 * PI + 0.3, -3.0, 5.6, box=(190, 110, 1410, 730), grid=False,
                        xticks=[], yticks=[-2, 1, 4], xlabel='x', ylabel='y')
    fig.line(tx(0), ty(1), tx(2 * PI + 0.2), ty(1), P['accent'], 3, dash='14 12')
    fig.text(tx(2 * PI + 0.2), ty(1) - 16, 'y = 1', 27, color=P['accent'], anchor='end')
    fig.plot(f, xmax=2 * PI, color=P['main'], width=5)
    # amplitude: topp ved 2x - pi/2 = pi/2 => x = pi/2
    xa = PI / 2
    dbl_arrow(fig, tx(xa), ty(1), tx(xa), ty(4), P['extra'], 4)
    fig.text(tx(xa) + 20, ty(2.5) + 10, 'amplitude 3', 30, color=P['extra'], bold=True, anchor='start')
    yt = ty(5.1)
    dbl_arrow(fig, tx(PI / 2), yt, tx(3 * PI / 2), yt, P['extra'], 4)
    fig.text(tx(PI), yt - 18, 'periode π', 30, color=P['extra'], bold=True)
    fig.arrow(tx(0.02), ty(-2.55), tx(PI / 4), ty(-2.55), P['warn'], 4)
    fig.text(tx(PI / 4) + 16, ty(-2.55) + 10, 'forskjøvet π/4 mot høyre', 28, color=P['warn'], bold=True, anchor='start')
    fig.text(520, 840, 'f(x) = 3 sin(2x − π/2) + 1', 36, color=P['main'], bold=True)
    save(fig, 'r2-4-8-amplitude-periode-fase.svg')


def r2_4_9_derivert():
    fig = Fig('r2')
    P = fig.p
    pts = [0.0, PI / 2, PI]
    tx, ty = fig.coords(0, 2 * PI + 0.3, -1.6, 1.6, box=(170, 90, 1430, 380), grid=False,
                        xticks=[], yticks=[], ylabel='sin x')
    fig.plot(math.sin, xmax=2 * PI, color=P['main'], width=5)
    for x0 in pts:
        s = math.cos(x0)
        dxl = 0.45
        fig.line(tx(x0 - dxl), ty(math.sin(x0) - s * dxl), tx(x0 + dxl), ty(math.sin(x0) + s * dxl), P['accent'], 5)
        fig.circle(tx(x0), ty(math.sin(x0)), 8, fill=P['accent'])
    tx2, ty2 = fig.coords(0, 2 * PI + 0.3, -1.6, 1.6, box=(170, 520, 1430, 810), grid=False,
                          xticks=[], yticks=[], ylabel='cos x')
    fig.plot(math.cos, xmax=2 * PI, color=P['extra'], width=5)
    for x0, lab in zip(pts, ['1', '0', '−1']):
        fig.circle(tx2(x0), ty2(math.cos(x0)), 9, fill=P['accent'])
        fig.line(tx(x0), ty(math.sin(x0)), tx2(x0), ty2(math.cos(x0)), P['text'], 2, dash='8 9', opacity=0.5)
        fig.text(tx2(x0) + 22, ty2(math.cos(x0)) + 8, lab, 28, color=P['accent'], bold=True, anchor='start')
    fig.text(W / 2, 463, '(sin x)′ = cos x', 38, color=P['accent'], bold=True)
    save(fig, 'r2-4-9-derivert-trigonometrisk.svg')


# =====================================================================
# Kapittel 5: Vektorer i rommet (3D isometrisk)
# =====================================================================

def r2_5_1_koordinatsystem():
    fig = Fig('r2')
    P = fig.p
    T = iso(700, 620, 92)
    axes3d(fig, T, xlen=3.4, ylen=4.6, zlen=5.6)
    x, y, z = 2, 3, 4
    # kasse
    corners = [(0, 0, 0), (x, 0, 0), (x, y, 0), (0, y, 0)]
    dash3(fig, T, (x, 0, 0), (x, y, 0), P['main'])
    dash3(fig, T, (0, y, 0), (x, y, 0), P['main'])
    for c in [(x, 0, 0), (x, y, 0), (0, y, 0), (0, 0, 0)]:
        dash3(fig, T, c, (c[0], c[1], z), P['main'])
    top = [(0, 0, z), (x, 0, z), (x, y, z), (0, y, z)]
    for i in range(4):
        dash3(fig, T, top[i], top[(i + 1) % 4], P['main'])
    # vei: langs x, parallelt y, opp z
    p0, p1, p2, p3 = (0, 0, 0), (x, 0, 0), (x, y, 0), (x, y, z)
    vec3(fig, T, p0, p1, P['main'], 5)
    vec3(fig, T, p1, p2, P['main'], 5)
    vec3(fig, T, p2, p3, P['main'], 5)
    m1 = T(x / 2, 0, 0); fig.text(m1[0] - 34, m1[1] + 14, '2', 32, color=P['main'], bold=True, anchor='end')
    m2 = T(x, y / 2, 0); fig.text(m2[0] + 16, m2[1] + 42, '3', 32, color=P['main'], bold=True, anchor='start')
    m3 = T(x, y, z / 2); fig.text(m3[0] + 26, m3[1] + 10, '4', 32, color=P['main'], bold=True, anchor='start')
    pe = T(x, y, z)
    fig.circle(pe[0], pe[1], 12, fill=P['extra'])
    fig.text(pe[0] + 26, pe[1] - 20, 'P(2, 3, 4)', 34, color=P['extra'], bold=True, anchor='start')
    save(fig, 'r2-5-1-koordinatsystem-rommet.svg')


def r2_5_1_vektorlengde():
    fig = Fig('r2')
    P = fig.p
    T = iso(680, 640, 80)
    axes3d(fig, T, xlen=3.2, ylen=4.4, zlen=7.6)
    x, y, z = 2, 3, 6
    # kasse stiplet
    for c in [(x, 0, 0), (x, y, 0), (0, y, 0)]:
        dash3(fig, T, c, (c[0], c[1], z), P['main'])
    dash3(fig, T, (x, 0, 0), (x, y, 0), P['main'])
    dash3(fig, T, (0, y, 0), (x, y, 0), P['main'])
    dash3(fig, T, (0, 0, 0), (x, 0, 0), P['main'])
    dash3(fig, T, (0, 0, 0), (0, y, 0), P['main'])
    top = [(0, 0, z), (x, 0, z), (x, y, z), (0, y, z)]
    for i in range(4):
        dash3(fig, T, top[i], top[(i + 1) % 4], P['main'])
    dash3(fig, T, (0, 0, 0), (0, 0, z), P['main'])
    # grunnflatediagonal
    a, b = T(0, 0, 0), T(x, y, 0)
    fig.line(a[0], a[1], b[0], b[1], P['accent'], 4.5)
    fig.text((a[0] + b[0]) / 2 + 10, (a[1] + b[1]) / 2 + 44, '√13', 30, color=P['accent'], bold=True)
    # romdiagonal
    vec3(fig, T, (0, 0, 0), (x, y, z), P['extra'], 6, label='v = [2, 3, 6]', lab_off=(24, -10))
    boxed_text(fig, 1180, 730, ['|v| = √(2² + 3² + 6²) = 7'], 31)
    fig.text(330, 120, 'Pytagoras to ganger', 32, color=P['text'], bold=True, anchor='start')
    save(fig, 'r2-5-1-vektorlengde-rommet.svg')


def r2_5_2_addisjon():
    fig = Fig('r2')
    P = fig.p
    T = iso(700, 600, 105)
    axes3d(fig, T, xlen=4.2, ylen=4.4, zlen=3.6)
    a = (3, 1, 0)
    b = (0, 2, 2)
    s = (3, 3, 2)
    vec3(fig, T, (0, 0, 0), a, P['main'], 5.5, label='a', lab_off=(-10, 48))
    vec3(fig, T, (0, 0, 0), b, P['extra'], 5.5, label='b', lab_off=(-34, -10))
    vec3(fig, T, (0, 0, 0), s, '#FFFFFF', 6, label='a + b', lab_off=(24, -12))
    dash3(fig, T, a, s, P['extra'])
    dash3(fig, T, b, s, P['main'])
    boxed_text(fig, 1170, 170, ['[3, 1, 0] + [0, 2, 2] = [3, 3, 2]'], 30)
    save(fig, 'r2-5-2-vektoraddisjon-rommet.svg')


def r2_5_3_vinkel():
    fig = Fig('r2')
    P = fig.p
    T = iso(720, 640, 130)
    axes3d(fig, T, xlen=2.6, ylen=3.4, zlen=3.4)
    a = (1, 2, 2)
    b = (2, 2, 1)
    o = T(0, 0, 0)
    pa, pb = T(*a), T(*b)
    vec3(fig, T, (0, 0, 0), a, P['main'], 5.5, label='a = [1, 2, 2]', lab_off=(-20, -26))
    vec3(fig, T, (0, 0, 0), b, P['extra'], 5.5, label='b = [2, 2, 1]', lab_off=(20, 28))
    # vinkelbue i skjermplanet mellom de projiserte retningene
    a1 = math.degrees(math.atan2(o[1] - pa[1], pa[0] - o[0]))
    a2 = math.degrees(math.atan2(o[1] - pb[1], pb[0] - o[0]))
    lo, hi = min(a1, a2), max(a1, a2)
    angle_arc(fig, o[0], o[1], 120, lo, hi, P['accent'], 4, label='θ ≈ 27°', lab_r=185)
    boxed_text(fig, 1190, 220, ['a · b = 8,  |a| = |b| = 3', 'cos θ = 8/9'], 30)
    save(fig, 'r2-5-3-skalarprodukt-vinkel.svg')


def r2_5_4_kryssprodukt():
    fig = Fig('r2')
    P = fig.p
    T = iso(760, 560, 120)
    # plan utspent av a og b
    a = (2.6, 0.6, 0)
    b = (0.6, 2.6, 0)
    quad = [(0, 0, 0), a, (a[0] + b[0], a[1] + b[1], 0), b]
    fig.poly([T(*q) for q in quad], fill=P['main'], close=True, opacity=0.18)
    fig.poly([T(*q) for q in quad], stroke=P['main'], width=2, close=True, opacity=0.5)
    vec3(fig, T, (0, 0, 0), a, P['main'], 5.5, label='a', lab_off=(0, 48))
    vec3(fig, T, (0, 0, 0), b, P['extra'], 5.5, label='b', lab_off=(28, 22))
    vec3(fig, T, (0, 0, 0), (0, 0, 2.8), P['accent'], 6, label='a × b', lab_off=(26, -8))
    o = T(0, 0, 0)
    # kvadratsymboler
    pa, pb, pz = T(*a), T(*b), T(0, 0, 2.8)
    for pv in (pa, pb):
        ux, uy = pv[0] - o[0], pv[1] - o[1]
        d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
        vx, vy = pz[0] - o[0], pz[1] - o[1]
        d2 = math.hypot(vx, vy); vx, vy = vx / d2, vy / d2
        right_angle_mark(fig, o[0], o[1], ux, uy, vx, vy, 20, P['accent'])
    # hoyrehandsbue rundt foten
    angle_arc(fig, o[0], o[1] - 60, 52, -40, 200, P['main'], 3.5)
    ae = math.radians(200)
    hx, hy = o[0] + 52 * math.cos(ae), o[1] - 60 - 52 * math.sin(ae)
    fig.arrow(hx + 16, hy - 12, hx, hy, P['main'], 3.5, head=12)
    fig.text(W / 2, 850, '|a × b| = arealet av parallellogrammet', 34, color=P['text'], bold=True)
    save(fig, 'r2-5-4-kryssprodukt.svg')


def r2_5_5_areal():
    fig = Fig('r2')
    P = fig.p
    ox, oy = 330, 660
    av = (760, -140)
    bv = (260, -360)
    A = (ox, oy)
    B = (ox + av[0], oy + av[1])
    C = (ox + av[0] + bv[0], oy + av[1] + bv[1])
    D = (ox + bv[0], oy + bv[1])
    fig.poly([A, B, C, D], fill=P['accent'], close=True, opacity=0.35)
    fig.poly([A, B, C], fill=P['bg'], close=True, opacity=0.25)
    fig.poly([A, B, C, D], stroke=P['accent'], width=3, close=True)
    fig.line(*A, *C, P['text'], 3, dash='12 10')
    fig.arrow(*A, *B, P['main'], 6, head=17)
    fig.arrow(*A, *D, P['extra'], 6, head=17)
    fig.text(B[0] - 60, B[1] + 52, 'a', 34, color=P['main'], bold=True, italic=True)
    fig.text(D[0] - 14, D[1] - 20, 'b', 34, color=P['extra'], bold=True, italic=True)
    a1 = math.degrees(math.atan2(-av[1], av[0]))
    a2 = math.degrees(math.atan2(-bv[1], bv[0]))
    angle_arc(fig, ox, oy, 100, a1, a2, P['text'], 3, label='θ', lab_r=145)
    fig.text((A[0] + C[0]) / 2 - 130, (A[1] + C[1]) / 2 - 70, 'areal = |a × b|', 32, color=P['accent'], bold=True)
    fig.text((A[0] + B[0] + C[0]) / 3 + 120, (A[1] + B[1] + C[1]) / 3 + 60, 'trekant: ½|a × b|', 30, color=P['text'], bold=True)
    save(fig, 'r2-5-5-areal-parallellogram.svg')


def r2_5_5_trippel():
    fig = Fig('r2')
    P = fig.p
    T = iso(740, 660, 120)
    b = (3.0, 0.4, 0)
    c = (0.5, 3.0, 0)
    a = (0.9, 0.9, 2.4)
    def add(p, q): return (p[0] + q[0], p[1] + q[1], p[2] + q[2])
    base = [(0, 0, 0), b, add(b, c), c]
    fig.poly([T(*q) for q in base], fill=P['main'], close=True, opacity=0.2)
    topf = [add(q, a) for q in base]
    # kanter
    for i in range(4):
        fig.poly([T(*base[i]), T(*base[(i + 1) % 4])], stroke=P['main'], width=3)
        fig.poly([T(*topf[i]), T(*topf[(i + 1) % 4])], stroke=P['main'], width=3)
        fig.poly([T(*base[i]), T(*topf[i])], stroke=P['main'], width=3)
    vec3(fig, T, (0, 0, 0), b, P['extra'], 5.5, label='b', lab_off=(-6, 46))
    vec3(fig, T, (0, 0, 0), c, P['accent'], 5.5, label='c', lab_off=(28, 24))
    vec3(fig, T, (0, 0, 0), a, P['main'], 5.5, label='a', lab_off=(-34, -10))
    # hoyde stiplet normal
    dash3(fig, T, a, (a[0], a[1], 0), P['text'], 2.5)
    boxed_text(fig, 1200, 200, ['V = |a · (b × c)|'], 34)
    fig.text(1200, 330, 'tetraeder: V/6', 32, color=P['extra'], bold=True)
    save(fig, 'r2-5-5-trippelprodukt-volum.svg')


def r2_5_6_plan():
    fig = Fig('r2')
    P = fig.p
    T = iso(700, 600, 110)
    axes3d(fig, T, xlen=3.6, ylen=4.4, zlen=3.8)
    # plan z = 1 (kvadrat)
    quad = [(0.4, 0.6, 1), (3.2, 0.6, 1), (3.2, 4.0, 1), (0.4, 4.0, 1)]
    fig.poly([T(*q) for q in quad], fill=P['main'], close=True, opacity=0.18)
    fig.poly([T(*q) for q in quad], stroke=P['main'], width=2.5, close=True, opacity=0.7)
    p0 = (1.4, 1.6, 1)
    pp = (2.6, 3.3, 1)
    o = T(*p0)
    fig.circle(o[0], o[1], 9, fill=P['text'])
    fig.text(o[0] - 18, o[1] + 42, 'P₀', 30, bold=True, anchor='end')
    vec3(fig, T, p0, pp, P['main'], 5, label='P', lab_off=(22, 26))
    vec3(fig, T, p0, (p0[0], p0[1], 2.6), P['extra'], 6, label='n', lab_off=(24, -6))
    pz = T(p0[0], p0[1], 2.6)
    pv = T(*pp)
    ux, uy = pv[0] - o[0], pv[1] - o[1]
    d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    vx, vy = pz[0] - o[0], pz[1] - o[1]
    d2 = math.hypot(vx, vy); vx, vy = vx / d2, vy / d2
    right_angle_mark(fig, o[0], o[1], ux, uy, vx, vy, 20, P['extra'])
    boxed_text(fig, 1210, 200, ['n · (P − P₀) = 0'], 34)
    fig.text(1210, 330, '2x + y + 2z = d', 32, color=P['main'], bold=True)
    save(fig, 'r2-5-6-plan-normalvektor.svg')


def r2_5_7_linjepar():
    fig = Fig('r2')
    P = fig.p
    labels = ['parallelle', 'skjærende', 'vindskjeve']
    for k, x0 in enumerate([110, 590, 1070]):
        cx = x0 + 210
        if k == 0:
            for dy in (-70, 70):
                fig.line(x0 + 30, 470 + dy + 60, x0 + 390, 290 + dy, P['main'], 4.5)
            # parallellpiler
            for dy in (-70, 70):
                mx, my = x0 + 210, 380 + dy + 30
                ang = math.atan2(290 - 530, 390 - 30)
                fig.arrow(mx, my, mx + 40 * math.cos(ang), my + 40 * math.sin(ang), P['accent'], 3.5, head=11)
        elif k == 1:
            fig.line(x0 + 30, 560, x0 + 390, 260, P['main'], 4.5)
            fig.line(x0 + 30, 280, x0 + 390, 540, P['main'], 4.5)
            # skjaeringspunkt (loses numerisk: linje1: p = A + t(B-A))
            fig.circle(x0 + 211, 409, 12, fill=P['accent'])
        else:
            # to linjer i "dybde": en bak (tynnere/svakere, hoyt), en foran
            fig.line(x0 + 20, 330, x0 + 400, 250, P['main'], 3, opacity=0.65)
            fig.line(x0 + 30, 560, x0 + 390, 420, P['main'], 5)
            fig.line(x0 + 210, 287, x0 + 210, 492, P['extra'], 3, dash='10 9')
        fig.text(cx, 700, labels[k], 32, color=P['extra'], bold=True)
        if k < 2:
            fig.line(x0 + 450, 160, x0 + 450, 640, P['grid'], 2)
    fig.title('Linjepar i rommet')
    save(fig, 'r2-5-7-linjepar-i-rommet.svg')


def r2_5_8_avstand_plan():
    fig = Fig('r2')
    P = fig.p
    T = iso(740, 660, 120)
    quad = [(0.2, 0.2, 0), (3.6, 0.2, 0), (3.6, 4.4, 0), (0.2, 4.4, 0)]
    fig.poly([T(*q) for q in quad], fill=P['main'], close=True, opacity=0.18)
    fig.poly([T(*q) for q in quad], stroke=P['main'], width=2.5, close=True, opacity=0.7)
    p = (1.6, 2.0, 2.6)
    foot = (1.6, 2.0, 0)
    other = (3.1, 3.8, 0)
    pp = T(*p)
    fig.circle(pp[0], pp[1], 12, fill=P['extra'])
    fig.text(pp[0] + 4, pp[1] - 26, 'P', 34, color=P['extra'], bold=True)
    vec3(fig, T, p, foot, P['accent'], 5)
    pf = T(*foot)
    po = T(*other)
    fig.line(pp[0], pp[1], po[0], po[1], P['text'], 2.5, dash='10 9', opacity=0.7)
    # kvadratsymbol i fotpunktet
    ux, uy = pp[0] - pf[0], pp[1] - pf[1]
    d = math.hypot(ux, uy); ux, uy = ux / d, uy / d
    vx, vy = po[0] - pf[0], po[1] - pf[1]
    d2 = math.hypot(vx, vy); vx, vy = vx / d2, vy / d2
    right_angle_mark(fig, pf[0], pf[1], ux, uy, vx, vy, 20, P['accent'])
    fig.text(pf[0] - 200, (pp[1] + pf[1]) / 2 + 50, 'd: korteste avstand', 30, color=P['accent'], bold=True)
    boxed_text(fig, 1140, 160, ['d = |ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)'], 28)
    save(fig, 'r2-5-8-avstand-punkt-plan.svg')


# =====================================================================
# Kapittel 6: Vektorfunksjoner og modellering
# =====================================================================

def r2_6_1_parameterkurver():
    fig = Fig('r2')
    P = fig.p
    # venstre: sirkel r=3
    cx, cy, r = 380, 450, 230
    fig.line(cx - r - 60, cy, cx + r + 70, cy, P['text'], 2.5)
    fig.line(cx, cy + r + 50, cx, cy - r - 60, P['text'], 2.5)
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    for d, lab, ax, ay in [(0, 't = 0', 24, 44), (90, 't = π/2', 24, -24), (180, 't = π', -24, 44)]:
        a = math.radians(d)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.circle(x, y, 10, fill=P['main'])
        fig.text(x + ax, y + ay, lab, 28, color=P['main'], bold=True, anchor='start' if ax > 0 else 'end')
    aa = math.radians(55)
    hx, hy = cx + r * math.cos(aa), cy - r * math.sin(aa)
    fig.arrow(hx + 38 * math.sin(aa), hy + 38 * math.cos(aa), hx, hy, P['extra'], 4, head=13)
    fig.text(cx, cy + r + 110, 'r(t) = [3 cos t, 3 sin t]', 30, color=P['accent'], bold=True)
    # hoyre: ellipse 4,2
    ex, ey = 1130, 450
    sa = 70
    fig.line(ex - 4 * sa - 50, ey, ex + 4 * sa + 60, ey, P['text'], 2.5)
    fig.line(ex, ey + 2 * sa + 110, ex, ey - 2 * sa - 120, P['text'], 2.5)
    fig.raw(f'<ellipse cx="{ex}" cy="{ey}" rx="{4 * sa}" ry="{2 * sa}" fill="none" stroke="{P["main"]}" stroke-width="5"/>')
    fig.line(ex, ey, ex + 4 * sa, ey, P['extra'], 3.5)
    fig.text(ex + 2 * sa, ey - 16, 'a = 4', 29, color=P['extra'], bold=True)
    fig.line(ex, ey, ex, ey - 2 * sa, P['extra'], 3.5)
    fig.text(ex + 16, ey - sa, 'b = 2', 29, color=P['extra'], bold=True, anchor='start')
    fig.text(ex, ey + 2 * sa + 110, 'r(t) = [4 cos t, 2 sin t]', 30, color=P['main'], bold=True)
    save(fig, 'r2-6-1-parameterkurver.svg')


def r2_6_2_tangentvektor():
    fig = Fig('r2')
    P = fig.p
    # parameterkurve: r(t) = (t, 2.2 + 1.4 sin t) skalert
    rx = lambda t: t
    ry = lambda t: 1.9 + 1.1 * math.sin(1.1 * t - 0.6)
    drx = lambda t: 1
    dry = lambda t: 1.1 * 1.1 * math.cos(1.1 * t - 0.6)
    tx, ty = fig.coords(0, 7, 0, 4.2, box=(170, 130, 1430, 740), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    pts = [(tx(rx(t)), ty(ry(t))) for t in [i * 0.05 for i in range(8, 132)]]
    fig.poly(pts, stroke=P['main'], width=5)
    speeds = [0.9, 1.5, 1.1]
    for i, t0 in enumerate([1.6, 3.4, 5.4]):
        vx, vy = drx(t0), dry(t0)
        d = math.hypot(vx, vy)
        L = speeds[i] * 1.1
        x0, y0 = rx(t0), ry(t0)
        fig.circle(tx(x0), ty(y0), 10, fill=P['main'])
        fig.arrow(tx(x0), ty(y0), tx(x0 + L * vx / d), ty(y0 + L * vy / d), P['accent'], 5, head=16)
    fig.text(tx(3.5) + 30, ty(ry(3.4) + 1.45), 'r′(t): fart og retning', 30, color=P['accent'], bold=True, anchor='start')
    # bevegelsesretning langs kurven
    t0 = 4.5
    fig.arrow(tx(rx(t0) - 0.3), ty(ry(t0 - 0.3)) + 60, tx(rx(t0) + 0.3), ty(ry(t0 + 0.3)) + 60, P['extra'], 3.5, head=12)
    fig.text(W / 2, 840, 'hastighetsvektoren ligger tangentielt til banen', 30, color=P['text'])
    save(fig, 'r2-6-2-tangentvektor.svg')


def r2_6_3_skratt_kast():
    fig = Fig('r2')
    P = fig.p
    v0, g = 20, 9.8
    vx = v0 * math.cos(PI / 4)
    vy = v0 * math.sin(PI / 4)
    T_end = 2 * vy / g
    Xmax = vx * T_end
    Ymax = vy * vy / (2 * g)
    fy = lambda x: x * vy / vx - g * x * x / (2 * vx * vx)
    tx, ty = fig.coords(-2, 46, 0, 14.5, box=(170, 160, 1430, 700),
                        xticks=[20.4, 40.8], yticks=[10.2], xlabel='x (m)', ylabel='y (m)')
    fig.plot(fy, xmin=0, xmax=Xmax, color=P['main'], width=5)
    # startvektor
    s = 0.42
    fig.arrow(tx(0), ty(0), tx(vx * s), ty(vy * s), P['accent'], 5.5, head=16)
    angle_arc(fig, tx(0), ty(0), 70, 0, 33, P['accent'], 3, label='45°', lab_r=115)
    # hastighetsvektorer i tre punkter
    for t0 in [0.35 * T_end, 0.5 * T_end, 0.78 * T_end]:
        x0 = vx * t0
        y0 = fy(x0)
        vvx, vvy = vx, vy - g * t0
        sc = 0.30
        fig.arrow(tx(x0), ty(y0), tx(x0 + vvx * sc), ty(y0 + vvy * sc), P['accent'], 4.5, head=14)
        fig.arrow(tx(x0), ty(y0), tx(x0), ty(max(y0 - 9.8 * sc, 0.2)), P['extra'], 4.5, head=14)
    fig.text(tx(Xmax / 2 + 4.5), ty(Ymax / 2), 'a = [0, −9,8]', 30, color=P['extra'], bold=True, anchor='start')
    fig.point(Xmax / 2, Ymax, color=P['main'], r=9)
    fig.text(tx(Xmax / 2), ty(Ymax) - 30, 'topp ≈ 10,2 m', 29, color=P['main'], bold=True)
    fig.text(tx(Xmax), ty(0) - 84, 'nedslag ≈ 40,8 m', 29, color=P['main'], bold=True)
    save(fig, 'r2-6-3-skratt-kast.svg')


def r2_6_3_sirkelbevegelse():
    fig = Fig('r2')
    P = fig.p
    cx, cy, r = 660, 460, 290
    fig.circle(cx, cy, r, stroke=P['accent'], width=5)
    fig.circle(cx, cy, 8, fill=P['accent'])
    def pair(deg, labeled):
        a = math.radians(deg)
        x, y = cx + r * math.cos(a), cy - r * math.sin(a)
        fig.circle(x, y, 12, fill=P['text'])
        # v tangentielt (mot klokka)
        tvx, tvy = -math.sin(a), -math.cos(a)
        fig.arrow(x, y, x + 150 * tvx, y + 150 * tvy, P['main'], 5, head=15)
        # a innover
        fig.arrow(x, y, x - 130 * math.cos(a), y + 130 * math.sin(a), P['extra'], 5, head=15)
        if labeled:
            fig.text(x + 175 * tvx + 10, y + 175 * tvy, 'v', 34, color=P['main'], bold=True, italic=True, anchor='start')
            fig.text(x - 80 * math.cos(a) - 110, y + 80 * math.sin(a) + 56, 'a: sentripetal', 30, color=P['extra'], bold=True, anchor='start')
            right_angle_mark(fig, x, y, tvx, tvy, -math.cos(a), math.sin(a), 20, P['main'])
    pair(40, True)
    pair(160, False)
    pair(280, False)
    fig.text(W / 2, 860, 'konstant fart, retningen endres', 32, color=P['text'], bold=True)
    save(fig, 'r2-6-3-sirkelbevegelse.svg')


def r2_6_4_modellering():
    fig = Fig('r2')
    P = fig.p
    steps = ['1. Forenkle', '2. Sett opp modell', '3. Løs matematikken', '4. Tolk svaret', '5. Vurder og forbedre']
    cx, cy, R = 800, 460, 300
    n = len(steps)
    bw, bh = 360, 90
    centers = []
    for i in range(n):
        a = math.radians(90 - i * 360 / n)
        x, y = cx + R * math.cos(a), cy - R * math.sin(a)
        centers.append((x, y))
    for i, (s, (x, y)) in enumerate(zip(steps, centers)):
        col = P['main'] if i % 2 == 0 else P['accent']
        fig.rect(x - bw / 2, y - bh / 2, bw, bh, fill=P['bg'], stroke=col, width=4, rx=14)
        fig.text(x, y + 11, s, 29, bold=True)
    # piler med klokka
    for i in range(n):
        x1, y1 = centers[i]
        x2, y2 = centers[(i + 1) % n]
        # punkt pa kanten av boksene langs forbindelseslinjen
        dx, dy = x2 - x1, y2 - y1
        d = math.hypot(dx, dy)
        ux, uy = dx / d, dy / d
        fig.arrow(x1 + ux * (bw / 2 - 40), y1 + uy * (bh / 2 + 28),
                  x2 - ux * (bw / 2 - 30), y2 - uy * (bh / 2 + 32), P['extra'], 4, head=14)
    fig.text(cx, cy + 10, 'en sirkel, ikke en linje', 32, color=P['extra'], bold=True)
    save(fig, 'r2-6-4-modelleringsprosess.svg')


def r2_6_5_regresjon():
    fig = Fig('r2')
    P = fig.p
    line = lambda x: 0.55 * x + 1.1
    tx, ty = fig.coords(0, 11, 0, 8.5, box=(190, 130, 1410, 720), grid=False,
                        xticks=[], yticks=[], xlabel='x', ylabel='y')
    resid = [0.9, -0.7, 0.5, -1.1, 0.8, -0.5, 1.0, -0.8, 0.6, -0.4]
    xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    sq_at = {2, 4, 7}
    for x, rr in zip(xs, resid):
        yv = line(x) + rr
        fig.line(tx(x), ty(yv), tx(x), ty(line(x)), P['extra'], 2.5)
        if x in sq_at:
            side = abs(ty(yv) - ty(line(x)))
            ybase = min(ty(yv), ty(line(x)))
            fig.rect(tx(x), ybase, side, side, fill=P['extra'], opacity=0.3)
            fig.rect(tx(x), ybase, side, side, stroke=P['extra'], width=2)
        fig.circle(tx(x), ty(yv), 9, fill=P['main'])
    fig.plot(line, xmin=0.4, xmax=10.6, color=P['accent'], width=5)
    boxed_text(fig, 380, 220, ['R² = 0,93'], 32, color=P['main'])
    fig.text(W / 2, 830, 'linjen minimerer de kvadrerte avvikene', 32, color=P['text'], bold=True)
    save(fig, 'r2-6-5-regresjon-residualer.svg')


def r2_6_6_bevistyper():
    fig = Fig('r2')
    P = fig.p
    # venstre kolonne: direkte
    fig.text(330, 130, 'direkte bevis', 34, color=P['main'], bold=True)
    boxes = ['antakelse', 'steg', 'konklusjon']
    y = 210
    for i, b in enumerate(boxes):
        fig.flow_box(150, y, 360, 86, b, size=29)
        if i < 2:
            fig.arrow(330, y + 90, 330, y + 142, P['main'], 4.5)
        y += 146
    # midt: kontrapositivt
    fig.text(800, 130, 'kontrapositivt bevis', 34, color=P['accent'], bold=True)
    fig.flow_box(620, 240, 360, 92, 'P ⇒ Q', size=32)
    fig.flow_box(620, 480, 360, 92, 'ikke Q ⇒ ikke P', size=30)
    dbl_arrow(fig, 800, 346, 800, 466, P['accent'], 4.5)
    fig.text(826, 414, 'likeverdige', 29, color=P['accent'], bold=True, anchor='start')
    # hoyre: induksjon
    fig.text(1270, 130, 'induksjon', 34, color=P['extra'], bold=True)
    base_y = 480
    for i in range(3):
        wd, hd = 44, 160
        tilt = -26 if i == 0 else 0
        cxx = 1130 + i * 105
        a = math.radians(tilt)
        pts = [(0, 0), (wd, 0), (wd, -hd), (0, -hd)]
        rot = [(cxx + px * math.cos(a) - py * math.sin(a), base_y + px * math.sin(a) + py * math.cos(a)) for px, py in pts]
        fig.poly(rot, stroke=P['extra'] if i == 0 else P['main'], width=4.5, close=True, fill=P['bg'])
    fig.arrow(1190, 560, 1330, 560, P['extra'], 4.5)
    fig.text(1270, 640, 'n = 1, så k ⇒ k + 1', 29, color=P['extra'], bold=True)
    fig.line(560, 110, 560, 760, P['grid'], 2)
    fig.line(1050, 110, 1050, 760, P['grid'], 2)
    save(fig, 'r2-6-6-bevistyper.svg')


ALL = [
    r2_1_1_folge, r2_1_2_trapp, r2_1_3_geometrisk, r2_1_5_kvadrat, r2_1_5_delsummer, r2_1_6_induksjon,
    r2_2_2_antiderivert, r2_2_3_integral_1x, r2_2_4_riemann, r2_2_5_fundamental,
    r2_2_6_fortegnsareal, r2_2_7_areal_mellom, r2_2_7_kryssende,
    r2_3_1_substitusjon, r2_3_3_delbrok, r2_3_4_numerisk, r2_3_5_flytskjema,
    r2_3_6_omdreining, r2_3_6_skive_skall, r2_3_7_akkumulert,
    r2_4_1_radian, r2_4_1_buelengde, r2_4_2_enhetssirkel, r2_4_2_referansevinkel, r2_4_2_fortegn,
    r2_4_3_sin_sirkel, r2_4_3_sin_graf, r2_4_4_cos_sirkel, r2_4_5_tangens,
    r2_4_7_ren_sinus, r2_4_8_amplitude, r2_4_9_derivert,
    r2_5_1_koordinatsystem, r2_5_1_vektorlengde, r2_5_2_addisjon, r2_5_3_vinkel,
    r2_5_4_kryssprodukt, r2_5_5_areal, r2_5_5_trippel, r2_5_6_plan, r2_5_7_linjepar, r2_5_8_avstand_plan,
    r2_6_1_parameterkurver, r2_6_2_tangentvektor, r2_6_3_skratt_kast, r2_6_3_sirkelbevegelse,
    r2_6_4_modellering, r2_6_5_regresjon, r2_6_6_bevistyper,
]

if __name__ == '__main__':
    for f in ALL:
        f()
    print(f'{len(ALL)} figurer generert i {os.path.normpath(OUT)}')
