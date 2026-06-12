#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk 6 (barnetrinn).

Kjør:  python3 scripts/svg/figurer-matematikk-6.py
Output: public/images/content/matematikk-6/*.svg

Palett: turkis (main), oransje (accent), limegrønn (extra), bringebærrød (warn).
Barnetrinns-stil: store elementer, tykke streker, tekst >= 30, få etiketter.
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, fmt, W, H

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..',
                   'public', 'images', 'content', 'matematikk-6')


def save(fig, name):
    path = os.path.normpath(os.path.join(OUT, name))
    fig.save(path)
    print('skrev', path)


# ---------------------------------------------------------------- hjelpere

def dim(fig, x1, y1, x2, y2, label, color=None, size=32, off=(0, -18), width=4):
    c = color or fig.p['text']
    fig.arrow(x1, y1, x2, y2, c, width, head=13)
    fig.arrow(x2, y2, x1, y1, c, width, head=13)
    fig.text((x1 + x2) / 2 + off[0], (y1 + y2) / 2 + off[1], label, size, bold=True)


def bubble(fig, cx, cy, w, h, lines, color=None, size=32, tail=None):
    c = color or fig.p['accent']
    if tail:
        fig.poly([(cx - 30, cy), (cx + 30, cy), tail], fill=fig.p['bg'],
                 stroke=c, width=4, close=True)
    fig.rect(cx - w / 2, cy - h / 2, w, h, fill=fig.p['bg'], stroke=c, width=5, rx=h / 2.6)
    if isinstance(lines, str):
        lines = [lines]
    n = len(lines)
    for i, ln in enumerate(lines):
        fig.text(cx, cy + 11 + (i - (n - 1) / 2) * (size + 12), ln, size, bold=True)


_clip_id = [0]


def choco(fig, x, y, w, h, parts, fills, stroke=None, rx=22, lw=4):
    """Avrundet stav delt i `parts` like deler. fills: farge/None per del."""
    st = stroke or fig.p['text']
    cid = f'cellclip{_clip_id[0]}'
    _clip_id[0] += 1
    fig.raw(f'<defs><clipPath id="{cid}"><rect x="{x:.1f}" y="{y:.1f}" '
            f'width="{w:.1f}" height="{h:.1f}" rx="{rx}"/></clipPath></defs>')
    fig.raw(f'<g clip-path="url(#{cid})">')
    for i in range(parts):
        f = fills[i] if i < len(fills) else None
        if f:
            fig.rect(x + w * i / parts, y, w / parts, h, fill=f)
    fig.raw('</g>')
    for i in range(1, parts):
        fig.line(x + w * i / parts, y, x + w * i / parts, y + h, st, lw)
    fig.rect(x, y, w, h, stroke=st, width=lw + 1, rx=rx)


def sector(fig, cx, cy, r, a1, a2, fill, stroke=None, width=4):
    """Fylt sektor fra a1 til a2 grader (mot klokka, y opp)."""
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1))
    x2, y2 = cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2))
    large = 1 if (a2 - a1) % 360 > 180 else 0
    s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
    fig.raw(f'<path d="M {cx:.1f},{cy:.1f} L {x1:.1f},{y1:.1f} A {r},{r} 0 {large} 0 '
            f'{x2:.1f},{y2:.1f} Z" fill="{fill}"{s} stroke-linejoin="round"/>')


def sector_circle(fig, cx, cy, r, n, filled, fill, lw=4):
    """Sirkel delt i n like sektorer der de første `filled` er fylt (fra kl 12, med klokka)."""
    for i in range(n):
        a_start = 90 - 360 * (i + 1) / n
        a_end = 90 - 360 * i / n
        sector(fig, cx, cy, r, a_start, a_end,
               fill if i < filled else fig.p['bg'], stroke=fig.p['text'], width=lw)
    fig.circle(cx, cy, r, stroke=fig.p['text'], width=lw + 1)


def right_angle_mark(fig, corner, dir1, dir2, size=28, color=None, width=4):
    c = color or fig.p['text']
    x, y = corner
    p1 = (x + dir1[0] * size, y + dir1[1] * size)
    p2 = (x + (dir1[0] + dir2[0]) * size, y + (dir1[1] + dir2[1]) * size)
    p3 = (x + dir2[0] * size, y + dir2[1] * size)
    fig.poly([p1, p2, p3], stroke=c, width=width)


def table(fig, x, y, widths, rh, rows, header_fill=None, size=32, lw=4):
    hf = header_fill or fig.p['grid']
    for r, row in enumerate(rows):
        cx = x
        for c, val in enumerate(row):
            fig.rect(cx, y + r * rh, widths[c], rh, stroke=fig.p['text'], width=lw,
                     fill=hf if r == 0 else fig.p['bg'])
            fig.text(cx + widths[c] / 2, y + r * rh + rh / 2 + 11, str(val),
                     size, bold=(r == 0))
            cx += widths[c]


def dice_face(fig, cx, cy, s, n, color=None):
    """Terningside med n øyne."""
    c = color or fig.p['main']
    fig.rect(cx - s / 2, cy - s / 2, s, s, fill=fig.p['bg'], stroke=c, width=5, rx=s * 0.16)
    d = s * 0.26
    pos = {1: [(0, 0)], 2: [(-d, -d), (d, d)], 3: [(-d, -d), (0, 0), (d, d)],
           4: [(-d, -d), (d, -d), (-d, d), (d, d)],
           5: [(-d, -d), (d, -d), (0, 0), (-d, d), (d, d)],
           6: [(-d, -d), (d, -d), (-d, 0), (d, 0), (-d, d), (d, d)]}
    for dx, dy in pos[n]:
        fig.circle(cx + dx, cy + dy, s * 0.08, fill=c)


# ================================================================ KAPITTEL 1

def f_6_1_1_utviding():
    fig = Fig('6')
    P = fig.p
    x, w, h = 280, 760, 105
    rows = [(2, 1, '1/2', 160), (4, 2, '2/4', 380), (8, 4, '4/8', 600)]
    for parts, filled, lab, y in rows:
        choco(fig, x, y, w, h, parts, [P['main']] * filled + [None] * (parts - filled))
        fig.text(x - 50, y + h / 2 + 14, lab, 44, anchor='end', bold=True, color=P['main'])
    # piler "· 2 oppe og nede" mellom radene
    for y1, y2 in [(160 + h, 380), (380 + h, 600)]:
        my = (y1 + y2) / 2
        fig.arrow(x + w + 60, y1 - 30, x + w + 60, y2 + 30, P['accent'], 6, head=16)
        fig.text(x + w + 100, my + 12, '· 2 oppe og nede', 32,
                 anchor='start', color=P['accent'], bold=True)
    fig.text(800, 830, '1/2 = 2/4 = 4/8', 52, bold=True)
    save(fig, '6-1-1-utviding.svg')


def f_6_1_1_forkorting():
    fig = Fig('6')
    P = fig.p
    sector_circle(fig, 370, 400, 250, 8, 6, P['warn'])
    sector_circle(fig, 1230, 400, 250, 4, 3, P['warn'])
    fig.text(800, 330, '6/8 = 3/4', 52, bold=True)
    fig.arrow(700, 420, 900, 420, P['extra'], 7, head=18)
    fig.text(800, 490, ': 2 oppe', 32, color='#6B9023', bold=True)
    fig.text(800, 532, 'og nede', 32, color='#6B9023', bold=True)
    bubble(fig, 800, 790, 760, 110, 'Samme mengde, enklere brøk!',
           color=P['accent'], size=36)
    save(fig, '6-1-1-forkorting.svg')


def f_6_1_1_fellesnevner():
    fig = Fig('6')
    P = fig.p
    x, w, h = 300, 900, 90
    rows = [(3, 1, '1/3', P['main'], 130), (4, 1, '1/4', P['accent'], 280),
            (12, 4, '4/12', P['main'], 480), (12, 3, '3/12', P['accent'], 630)]
    for parts, filled, lab, c, y in rows:
        choco(fig, x, y, w, h, parts, [c] * filled + [None] * (parts - filled))
        fig.text(x - 50, y + h / 2 + 14, lab, 42, anchor='end', bold=True, color=c)
    fig.line(x, 415, x + w, 415, P['grid'], 3, dash='10 12')
    fig.text(800, 820, 'Fellesnevner: 12', 48, bold=True)
    save(fig, '6-1-1-fellesnevner.svg')


def f_6_1_2_addisjon_lik_nevner():
    fig = Fig('6')
    P = fig.p
    x, w, h = 300, 1000, 140
    choco(fig, x, 230, w, h, 5, [P['main'], P['main'], P['accent'], None, None])
    parts = [('2/5', P['main']), ('+', P['text']), ('1/5', P['accent']),
             ('=', P['text']), ('3/5', P['text'])]
    xs = [560, 690, 800, 920, 1040]
    for (s, c), px in zip(parts, xs):
        fig.text(px, 560, s, 56, color=c, bold=True)
    bubble(fig, 800, 770, 920, 110, 'Lik nevner: legg bare sammen tellerne!',
           color=P['extra'], size=34)
    save(fig, '6-1-2-addisjon-lik-nevner.svg')


def f_6_1_3_trippelkort():
    fig = Fig('6')
    P = fig.p
    x, w, h = 300, 1000, 120
    choco(fig, x, 170, w, h, 4, [P['warn'], None, None, None])
    cards = [('1/4', P['main']), ('0,25', P['accent']), ('25 %', P['extra'])]
    cw, ch, cy = 250, 170, 450
    cxs = [450, 800, 1150]
    for (lab, c), cx in zip(cards, cxs):
        fig.rect(cx - cw / 2, cy, cw, ch, fill=fig.p['bg'], stroke=c, width=6, rx=20)
        fig.text(cx, cy + ch / 2 + 15, lab, 48, bold=True, color=c)
    # piler fra fylt del ned til første kort, og doble piler mellom kortene
    fig.arrow(x + w / 8, 310, 450, cy - 14, P['warn'], 5, head=14)
    for a, b in [(450 + cw / 2, 800 - cw / 2), (800 + cw / 2, 1150 - cw / 2)]:
        my = cy + ch / 2
        fig.arrow(a + 14, my, b - 14, my, P['text'], 5, head=14)
        fig.arrow(b - 14, my, a + 14, my, P['text'], 5, head=14)
    fig.text(800, 790, 'Tre måter å si det samme på', 38, bold=True)
    save(fig, '6-1-3-trippelkort.svg')


def f_6_1_3_hundrerutenett():
    fig = Fig('6')
    P = fig.p
    s = 64
    x0, y0 = 220, 130
    for r in range(10):
        for c in range(10):
            idx = r * 10 + c
            if idx < 37:
                fig.rect(x0 + c * s, y0 + r * s, s, s, fill=P['main'])
    for i in range(11):
        fig.line(x0 + i * s, y0, x0 + i * s, y0 + 10 * s, P['text'], 2.5)
        fig.line(x0, y0 + i * s, x0 + 10 * s, y0 + i * s, P['text'], 2.5)
    fig.rect(x0, y0, 10 * s, 10 * s, stroke=P['text'], width=5)
    for i, (lab, c) in enumerate([('37/100', P['main']), ('0,37', P['text']),
                                  ('37 %', P['accent'])]):
        fig.text(1180, 250 + i * 130, lab, 56, anchor='start', bold=True, color=c)
    bubble(fig, 1255, 720, 580, 110, 'Prosent betyr per hundre!',
           color=P['extra'], size=33)
    save(fig, '6-1-3-hundrerutenett.svg')


def f_6_1_4_prosent_av_tall():
    fig = Fig('6')
    P = fig.p
    x, w, h = 240, 1120, 140
    dim(fig, x, 200, x + w, 200, '80', size=40)
    choco(fig, x, 250, w, h, 4, [P['accent'], None, None, None])
    fig.text(x + w / 8, 460, '25 % = 20', 40, color=P['accent'], bold=True)
    fig.text(800, 620, '80 : 4 = 20', 52, bold=True)
    bubble(fig, 800, 780, 640, 110, '25 % er en firedel!', color=P['extra'], size=38)
    save(fig, '6-1-4-prosent-av-tall.svg')


# ================================================================ KAPITTEL 2

def f_6_2_2_proporsjonalitet():
    fig = Fig('6')
    P = fig.p
    table(fig, 140, 170, [300, 220], 95,
          [['Antall epler', 'Pris i kr'], ['1', '5'], ['2', '10'],
           ['3', '15'], ['4', '20']])
    tx, ty = fig.coords(0, 5, 0, 25, box=(840, 150, 1460, 760),
                        xticks=[1, 2, 3, 4], yticks=[5, 10, 15, 20],
                        xlabel='Antall epler', ylabel='Pris (kr)')
    fig.plot(lambda x: 5 * x, xmin=0, xmax=4.6, color=P['main'], width=5)
    for px in range(1, 5):
        fig.point(px, 5 * px, color=P['accent'], r=11)
    bubble(fig, 390, 790, 660, 110, 'Dobbelt så mange – dobbelt så dyrt!',
           color=P['extra'], size=30)
    save(fig, '6-2-2-proporsjonalitet.svg')


def f_6_2_3_romtegning():
    fig = Fig('6')
    P = fig.p
    # venstre: plantegning på ruteark
    g = 42
    gx0, gy0 = 150, 220
    for i in range(10):
        fig.line(gx0 + i * g, gy0, gx0 + i * g, gy0 + 7 * g, P['grid'], 2)
    for j in range(8):
        fig.line(gx0, gy0 + j * g, gx0 + 9 * g, gy0 + j * g, P['grid'], 2)
    fig.text(gx0 + 4.5 * g, 170, 'Målestokk 1 : 100', 34, bold=True)
    rx, ry = gx0 + 0.5 * g, gy0 + g
    fig.rect(rx, ry, 8 * g, 5 * g, stroke=P['main'], width=6)
    dim(fig, rx, ry + 5 * g + 44, rx + 8 * g, ry + 5 * g + 44, '8 cm', size=34, off=(0, 46))
    # pil
    fig.arrow(600, 450, 740, 450, P['accent'], 8, head=20)
    fig.text(670, 400, '· 100', 40, color=P['accent'], bold=True)
    # høyre: rommet i full størrelse (samme form, større)
    bx, by = 790, 180
    fig.rect(bx, by, 600, 375, stroke=P['extra'], width=8, rx=4)
    dim(fig, bx, by + 375 + 48, bx + 600, by + 375 + 48, '8 m', size=36, off=(0, 48))
    bubble(fig, 800, 790, 880, 110, '1 cm på tegningen = 1 m i virkeligheten',
           color=P['accent'], size=32)
    save(fig, '6-2-3-romtegning.svg')


# ================================================================ KAPITTEL 3

def f_6_3_1_grunnlinje_hoyde():
    fig = Fig('6')
    P = fig.p
    s = 82  # px per cm
    A = (420, 620)
    B = (A[0] + 8 * s, 620)
    C = (A[0] + 5.2 * s, 620 - 5 * s)
    fig.poly([A, B, C], fill=P['main'], opacity=0.3, close=True)
    fig.poly([A, B, C], stroke=P['main'], width=6, close=True)
    F = (C[0], 620)
    fig.line(C[0], C[1], F[0], F[1], P['accent'], 6, dash='14 12')
    right_angle_mark(fig, F, (-1, 0), (0, -1), size=30, color=P['accent'])
    fig.text((A[0] + B[0]) / 2, 620 + 56, 'g = 8 cm', 38, bold=True)
    fig.text(C[0] + 26, 620 - 2.5 * s, 'h = 5 cm', 38, anchor='start',
             color=P['accent'], bold=True)
    fig.text(800, 800, 'Areal = g · h : 2 = 20 cm²', 48, bold=True)
    save(fig, '6-3-1-grunnlinje-hoyde.svg')


def f_6_3_1_halvt_rektangel():
    fig = Fig('6')
    P = fig.p
    s = 86
    x, y, w, h = 360, 200, 8 * s, 5 * s
    # diagonal fra (x, y+h) til (x+w, y): nedre høyre trekant limegrønn
    fig.poly([(x, y + h), (x + w, y + h), (x + w, y)], fill=P['extra'],
             opacity=0.6, close=True)
    fig.rect(x, y, w, h, stroke=P['text'], width=6)
    fig.line(x, y + h, x + w, y, P['text'], 5)
    dim(fig, x, y - 40, x + w, y - 40, '8 cm', size=34)
    dim(fig, x - 44, y, x - 44, y + h, '5 cm', size=34, off=(-60, 10))
    bubble(fig, 1265, 330, 560, 140, ['Trekanten er halve', 'rektangelet!'],
           color=P['accent'], size=33, tail=(x + w - 80, y + h - 80))
    fig.text(800, 790, 'Rektangel: 40 cm²    Trekant: 20 cm²', 42, bold=True)
    save(fig, '6-3-1-halvt-rektangel.svg')


def f_6_3_1_hoyde_utenfor():
    fig = Fig('6')
    P = fig.p
    s = 92
    A = (640, 640)
    B = (A[0] + 6 * s, 640)
    C = (420, 640 - 4 * s)
    F = (420, 640)
    fig.poly([A, B, C], fill=P['main'], opacity=0.3, close=True)
    fig.poly([A, B, C], stroke=P['main'], width=6, close=True)
    fig.line(A[0], 640, F[0] - 30, 640, P['text'], 4, dash='12 10')
    fig.line(C[0], C[1], F[0], F[1], P['accent'], 6, dash='14 12')
    right_angle_mark(fig, F, (0, -1), (1, 0), size=30, color=P['accent'])
    fig.text((A[0] + B[0]) / 2, 640 + 56, 'g = 6 cm', 38, bold=True)
    fig.text(F[0] - 28, 640 - 2 * s, 'h = 4 cm', 38, anchor='end',
             color=P['accent'], bold=True)
    bubble(fig, 1180, 220, 600, 110, 'Høyden kan havne utenfor!',
           color=P['accent'], size=34)
    fig.text(800, 810, 'Areal = 6 · 4 : 2 = 12 cm²', 46, bold=True)
    save(fig, '6-3-1-hoyde-utenfor.svg')


def f_6_3_2_enhetskuber():
    fig = Fig('6')
    P = fig.p
    u = 112          # px per cm i front
    ox, oy = 56, -37  # dybde-forskyvning per kube
    fx, fy = 360, 660  # nedre venstre hjørne av front
    Wd, Hh, Dd = 4, 2, 3
    # topp
    fig.poly([(fx, fy - Hh * u), (fx + Dd * ox, fy - Hh * u + Dd * oy),
              (fx + Wd * u + Dd * ox, fy - Hh * u + Dd * oy), (fx + Wd * u, fy - Hh * u)],
             fill=P['extra'], opacity=0.45, close=True)
    # side
    fig.poly([(fx + Wd * u, fy - Hh * u), (fx + Wd * u + Dd * ox, fy - Hh * u + Dd * oy),
              (fx + Wd * u + Dd * ox, fy + Dd * oy), (fx + Wd * u, fy)],
             fill=P['main'], opacity=0.25, close=True)
    # front
    fig.rect(fx, fy - Hh * u, Wd * u, Hh * u, fill=P['main'], opacity=0.4)
    # fremhevet enhetskube (front, nede til venstre)
    fig.rect(fx, fy - u, u, u, fill=P['warn'], opacity=0.85)
    # rutenett front
    for i in range(Wd + 1):
        fig.line(fx + i * u, fy, fx + i * u, fy - Hh * u, P['text'], 3)
    for j in range(Hh + 1):
        fig.line(fx, fy - j * u, fx + Wd * u, fy - j * u, P['text'], 3)
    # rutenett topp
    for j in range(Dd + 1):
        fig.line(fx + j * ox, fy - Hh * u + j * oy,
                 fx + Wd * u + j * ox, fy - Hh * u + j * oy, P['text'], 3)
    for i in range(Wd + 1):
        fig.line(fx + i * u, fy - Hh * u, fx + i * u + Dd * ox, fy - Hh * u + Dd * oy,
                 P['text'], 3)
    # rutenett side
    for j in range(Dd + 1):
        fig.line(fx + Wd * u + j * ox, fy + j * oy,
                 fx + Wd * u + j * ox, fy - Hh * u + j * oy, P['text'], 3)
    for j in range(Hh + 1):
        fig.line(fx + Wd * u, fy - j * u, fx + Wd * u + Dd * ox, fy - j * u + Dd * oy,
                 P['text'], 3)
    fig.text(fx + u / 2, fy - u / 2 + 12, '1 cm³', 30, bold=True)
    fig.text(fx + Wd * u / 2, fy + 52, '4 cm', 36, bold=True)
    fig.text(fx - 28, fy - u, '2 cm', 36, anchor='end', bold=True)
    fig.text(fx + Wd * u + Dd * ox / 2 + 40, fy + Dd * oy / 2 + 30, '3 cm', 36,
             anchor='start', bold=True)
    fig.text(800, 830, 'Volum = 4 · 3 · 2 = 24 cm³', 48, bold=True)
    save(fig, '6-3-2-enhetskuber.svg')


def f_6_3_3_utbrett():
    fig = Fig('6')
    P = fig.p
    # venstre: boksen
    u = 52
    bx, by = 170, 560
    bw, bh = 4 * u, 2 * u
    dx, dy = 78, -51   # 3 enheter dybde
    fig.rect(bx, by - bh, bw, bh, fill=P['accent'], opacity=0.5)
    fig.poly([(bx, by - bh), (bx + dx, by - bh + dy), (bx + bw + dx, by - bh + dy),
              (bx + bw, by - bh)], fill=P['main'], opacity=0.5, close=True)
    fig.poly([(bx + bw, by - bh), (bx + bw + dx, by - bh + dy),
              (bx + bw + dx, by + dy), (bx + bw, by)], fill=P['extra'],
             opacity=0.5, close=True)
    fig.rect(bx, by - bh, bw, bh, stroke=P['text'], width=4)
    fig.poly([(bx, by - bh), (bx + dx, by - bh + dy), (bx + bw + dx, by - bh + dy),
              (bx + bw, by - bh)], stroke=P['text'], width=4, close=True)
    fig.poly([(bx + bw, by - bh), (bx + bw + dx, by - bh + dy),
              (bx + bw + dx, by + dy), (bx + bw, by)], stroke=P['text'], width=4, close=True)
    fig.text(bx + bw / 2, by + 48, '4 cm', 32, bold=True)
    fig.text(bx - 24, by - bh / 2 + 10, '2 cm', 32, anchor='end', bold=True)
    fig.text(bx + bw + dx / 2 + 34, by + dy / 2 + 26, '3 cm', 32, anchor='start', bold=True)
    fig.arrow(620, 440, 750, 440, P['text'], 6, head=18)
    # høyre: utbrettet nett (kryssform)
    ux = 52
    colx, colw = 900, 4 * ux
    y0 = 130
    rows = [(2, P['accent'], '8 cm²'), (3, P['main'], '12 cm²'),
            (2, P['accent'], None), (3, P['main'], None)]
    y = y0
    wing_y = None
    for hgt, c, lab in rows:
        fig.rect(colx, y, colw, hgt * ux, fill=c, opacity=0.55)
        fig.rect(colx, y, colw, hgt * ux, stroke=P['text'], width=4)
        if lab:
            fig.text(colx + colw / 2, y + hgt * ux / 2 + 11, lab, 30, bold=True)
        if hgt == 3 and wing_y is None:
            wing_y = y
        y += hgt * ux
    # vinger (sideflater 3x2) på den øverste 4x3-flaten
    for wx in (colx - 2 * ux, colx + colw):
        fig.rect(wx, wing_y, 2 * ux, 3 * ux, fill=P['extra'], opacity=0.55)
        fig.rect(wx, wing_y, 2 * ux, 3 * ux, stroke=P['text'], width=4)
    fig.text(colx - ux, wing_y + 3 * ux + 44, '6 cm²', 30, bold=True, color='#6B9023')
    fig.text(800, 830, 'Alle 6 flatene til sammen: 52 cm²', 44, bold=True)
    save(fig, '6-3-3-utbrett.svg')


def f_6_3_4_radius_diameter():
    fig = Fig('6')
    P = fig.p
    cx, cy, r = 540, 450, 290
    fig.circle(cx, cy, r, stroke=P['main'], width=7)
    fig.circle(cx, cy, 11, fill=P['text'])
    # diameter horisontalt
    fig.line(cx - r, cy, cx + r, cy, P['main'], 6)
    fig.text(cx, cy + 52, 'diameter d = 6 cm', 34, color='#0E7A8C', bold=True)
    # radius på 55 grader
    a = math.radians(55)
    fig.line(cx, cy, cx + r * math.cos(a), cy - r * math.sin(a), P['accent'], 6)
    fig.text(cx + 150, cy - 260, 'radius r = 3 cm', 34, anchor='start',
             color=P['accent'], bold=True)
    fig.arrow(cx + 260, cy - 235, cx + r * 0.55 * math.cos(a) + 16,
              cy - r * 0.55 * math.sin(a) - 10, P['accent'], 4, head=13)
    # omkretsen-lapp
    e = math.radians(205)
    fig.text(150, 760, 'omkretsen', 32, anchor='start', bold=True, color='#0E7A8C')
    fig.line(255, 730, cx + r * math.cos(e), cy - r * math.sin(e), P['main'], 4, dash='8 8')
    fig.text(1240, 430, 'd = 2 · r', 56, anchor='start', bold=True)
    save(fig, '6-3-4-radius-diameter.svg')


def f_6_3_4_pi_utrulling():
    fig = Fig('6')
    P = fig.p
    r = 115            # 1 m = 230 px  ->  pi m = 722 px
    scale = 2 * r
    gy = 600
    x_start = 300
    x_end = x_start + math.pi * scale
    fig.line(160, gy, 1440, gy, P['text'], 5)
    # målestreker hver meter + ende
    for k in range(4):
        mx = x_start + k * scale
        fig.line(mx, gy - 12, mx, gy + 12, P['text'], 4)
    fig.line(x_end, gy - 14, x_end, gy + 14, P['warn'], 6)
    # hjul ved start (helt), spøkelse midt, hjul ved slutt
    for x, op, mark_top in [(x_start, 1.0, False), ((x_start + x_end) / 2, 0.22, True),
                            (x_end, 1.0, False)]:
        fig.circle(x, gy - r, r, stroke=P['main'], width=6, opacity=op)
        my = gy - 2 * r + 14 if mark_top else gy - 14
        fig.circle(x, my, 13, fill=P['warn'], opacity=op)
    # diameter på det første hjulet
    fig.line(x_start - r, gy - r, x_start + r, gy - r, P['text'], 4, dash='10 8')
    fig.text(x_start, gy - r - 28, 'd = 1 m', 32, bold=True)
    dim(fig, x_start, gy + 70, x_end, gy + 70, 'π ≈ 3,14 m', color=P['accent'],
        size=40, off=(0, 60))
    fig.text(800, 850, 'Omkrets = π · d', 46, bold=True)
    save(fig, '6-3-4-pi-utrulling.svg')


# ================================================================ KAPITTEL 5

def f_6_5_1_terning_utfall():
    fig = Fig('6')
    P = fig.p
    dice_face(fig, 800, 240, 250, 6, color=P['main'])
    s = 140
    for i in range(6):
        cx = 290 + i * 205
        dice_face(fig, cx, 560, s, i + 1, color=P['main'])
    fig.circle(290 + 5 * 205, 560, 100, stroke=P['warn'], width=7)
    fig.text(640, 790, 'P(sekser) = 1/6', 48, bold=True)
    fig.text(1120, 790, '1 gunstig av 6 mulige', 32, color=P['warn'], bold=True)
    save(fig, '6-5-1-terning-utfall.svg')


def f_6_5_1_lykkehjul():
    fig = Fig('6')
    P = fig.p
    # venstre hjul: 4 like sektorer
    cx, cy, r = 400, 460, 260
    cols = [P['main'], P['accent'], P['extra'], P['warn']]
    for i, c in enumerate(cols):
        sector(fig, cx, cy, r, 90 - 90 * (i + 1), 90 - 90 * i, c,
               stroke=fig.p['bg'], width=5)
    fig.circle(cx, cy, r, stroke=P['text'], width=6)
    fig.poly([(cx - 26, cy - r - 40), (cx + 26, cy - r - 40), (cx, cy - r + 14)],
             fill=P['text'], close=True)
    fig.text(cx, 810, 'P(rød) = 1/4', 42, bold=True)
    # høyre hjul: rødt felt er halve
    cx2, cy2, r2 = 1190, 460, 220
    sector(fig, cx2, cy2, r2, -90, 90, P['warn'], stroke=fig.p['bg'], width=5)
    sector(fig, cx2, cy2, r2, 90, 180, P['main'], stroke=fig.p['bg'], width=5)
    sector(fig, cx2, cy2, r2, 180, 270, P['extra'], stroke=fig.p['bg'], width=5)
    fig.circle(cx2, cy2, r2, stroke=P['text'], width=6)
    fig.poly([(cx2 - 24, cy2 - r2 - 38), (cx2 + 24, cy2 - r2 - 38), (cx2, cy2 - r2 + 12)],
             fill=P['text'], close=True)
    fig.text(cx2, 770, 'Her er P(rød) = 1/2', 38, bold=True)
    bubble(fig, 800, 110, 760, 100, 'Like store felt – like stor sjanse!',
           color=P['accent'], size=34)
    save(fig, '6-5-1-lykkehjul.svg')


def f_6_5_2_typetall():
    fig = Fig('6')
    P = fig.p
    fig.text(800, 100, 'Skostørrelser i klassen', 42, bold=True)
    y = 680
    fig.line(300, y, 1300, y, P['text'], 5)
    data = [(35, 2, 440), (36, 5, 680), (37, 3, 920), (38, 1, 1160)]
    for val, n, x in data:
        fig.line(x, y - 14, x, y + 14, P['text'], 4)
        fig.text(x, y + 58, str(val), 36, bold=(val == 36))
        c = P['warn'] if val == 36 else P['main']
        for k in range(n):
            fig.circle(x, y - 52 - k * 62, 24, fill=c)
    fig.text(680, 250, 'TYPETALL: 36 – flest ganger!', 38, color=P['warn'], bold=True)
    fig.arrow(680, 280, 680, 340, P['warn'], 5, head=16)
    save(fig, '6-5-2-typetall.svg')


def f_6_5_3_undersokelse_prosess():
    fig = Fig('6')
    P = fig.p
    steps = [('1. Lag spørsmål', P['main']), ('2. Samle svar', P['accent']),
             ('3. Tell opp', P['extra']), ('4. Lag diagram', P['warn'])]
    bw, bh, y0 = 310, 420, 220
    xs = [110, 480, 850, 1220]
    for (lab, c), x in zip(steps, xs):
        fig.rect(x, y0, bw, bh, fill=c, opacity=0.18)
        fig.rect(x, y0, bw, bh, stroke=c, width=6, rx=24)
        fig.text(x + bw / 2, y0 + 64, lab, 32, bold=True)
        cx, cy = x + bw / 2, y0 + 260
        if lab.startswith('1'):
            fig.rect(cx - 70, cy - 100, 140, 180, fill=fig.p['bg'], stroke=c, width=5, rx=10)
            fig.text(cx, cy + 10, '?', 84, bold=True, color=c)
        elif lab.startswith('2'):
            fig.rect(cx - 105, cy - 90, 130, 90, fill=fig.p['bg'], stroke=c, width=5, rx=26)
            fig.rect(cx - 15, cy - 20, 130, 90, fill=fig.p['bg'], stroke=c, width=5, rx=26)
            fig.text(cx - 40, cy - 28, '…', 48, bold=True, color=c)
            fig.text(cx + 50, cy + 42, '…', 48, bold=True, color=c)
        elif lab.startswith('3'):
            for k in range(4):
                fig.line(cx - 66 + k * 30, cy - 70, cx - 66 + k * 30, cy + 30, c, 6)
            fig.line(cx - 80, cy + 20, cx + 40, cy - 60, c, 6)
        else:
            for k, hgt in enumerate([60, 130, 90]):
                fig.rect(cx - 80 + k * 60, cy + 40 - hgt, 44, hgt, fill=c)
            fig.line(cx - 95, cy + 40, cx + 105, cy + 40, P['text'], 4)
    for x in (xs[1] - 50, xs[2] - 50, xs[3] - 50):
        fig.arrow(x - 14, y0 + bh / 2, x + 40, y0 + bh / 2, P['text'], 6, head=18)
    save(fig, '6-5-3-undersokelse-prosess.svg')


def f_6_5_3_godt_sporsmal():
    fig = Fig('6')
    P = fig.p
    # venstre: godt spørsmål
    x, y, w, h = 120, 180, 620, 540
    fig.rect(x, y, w, h, fill=P['extra'], opacity=0.12)
    fig.rect(x, y, w, h, stroke=P['extra'], width=7, rx=24)
    fig.poly([(x + 60, y + 90), (x + 100, y + 130), (x + 170, y + 40)],
             stroke=P['extra'], width=12)
    fig.text(x + w / 2 + 50, y + 100, 'Hvilken frukt', 36, bold=True)
    fig.text(x + w / 2 + 50, y + 150, 'liker du best?', 36, bold=True)
    for i, alt in enumerate(['Eple', 'Banan', 'Pære']):
        ay = y + 240 + i * 90
        fig.rect(x + 110, ay, 46, 46, stroke=P['text'], width=4, rx=8)
        fig.text(x + 190, ay + 36, alt, 34, anchor='start')
    # høyre: ledende spørsmål
    x2 = 860
    fig.rect(x2, y, w, h, fill=P['warn'], opacity=0.1)
    fig.rect(x2, y, w, h, stroke=P['warn'], width=7, rx=24)
    fig.line(x2 + 70, y + 50, x2 + 170, y + 150, P['warn'], 12)
    fig.line(x2 + 170, y + 50, x2 + 70, y + 150, P['warn'], 12)
    fig.text(x2 + w / 2 + 50, y + 100, 'Du liker vel', 36, bold=True)
    fig.text(x2 + w / 2 + 50, y + 150, 'epler best?', 36, bold=True)
    fig.text(x2 + w / 2, y + 360, 'ledende!', 52, color=P['warn'], bold=True)
    save(fig, '6-5-3-godt-sporsmal.svg')


if __name__ == '__main__':
    f_6_1_1_utviding()
    f_6_1_1_forkorting()
    f_6_1_1_fellesnevner()
    f_6_1_2_addisjon_lik_nevner()
    f_6_1_3_trippelkort()
    f_6_1_3_hundrerutenett()
    f_6_1_4_prosent_av_tall()
    f_6_2_2_proporsjonalitet()
    f_6_2_3_romtegning()
    f_6_3_1_grunnlinje_hoyde()
    f_6_3_1_halvt_rektangel()
    f_6_3_1_hoyde_utenfor()
    f_6_3_2_enhetskuber()
    f_6_3_3_utbrett()
    f_6_3_4_radius_diameter()
    f_6_3_4_pi_utrulling()
    f_6_5_1_terning_utfall()
    f_6_5_1_lykkehjul()
    f_6_5_2_typetall()
    f_6_5_3_undersokelse_prosess()
    f_6_5_3_godt_sporsmal()
