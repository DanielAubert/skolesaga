#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk 5 (barnetrinn).

Kjør:  python3 scripts/svg/figurer-matematikk-5.py
Output: public/images/content/matematikk-5/*.svg

Barnetrinns-stil: store elementer, tykke streker (4-5), tekst >= 30,
maks 4-5 etiketter, leken geometri med avrundede former.
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, fmt, W, H

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..',
                   'public', 'images', 'content', 'matematikk-5')


def save(fig, name):
    path = os.path.normpath(os.path.join(OUT, name))
    fig.save(path)
    print('skrev', path)


# ---------------------------------------------------------------- hjelpere

def dim(fig, x1, y1, x2, y2, label, color=None, size=32, off=(0, -18), width=4):
    """Maalpil med pilhoder i begge ender og etikett ved midtpunktet."""
    c = color or fig.p['text']
    fig.arrow(x1, y1, x2, y2, c, width, head=13)
    fig.arrow(x2, y2, x1, y1, c, width, head=13)
    fig.text((x1 + x2) / 2 + off[0], (y1 + y2) / 2 + off[1], label, size, bold=True)


def bubble(fig, cx, cy, w, h, lines, color=None, size=32, tail=None):
    """Leken tekstboble (avrundet boks). tail=(x,y) gir en liten snip mot punktet."""
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
    """Avrundet 'sjokoladeplate'-stav delt i `parts` like deler.
    fills: liste med farge/None per del."""
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


def angle_arc(fig, cx, cy, r, a1, a2, color, width=5):
    """Vinkelbue fra a1 til a2 grader (mot klokka, y opp)."""
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1))
    x2, y2 = cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2))
    large = 1 if (a2 - a1) % 360 > 180 else 0
    fig.raw(f'<path d="M {x1:.1f},{y1:.1f} A {r},{r} 0 {large} 0 {x2:.1f},{y2:.1f}" '
            f'fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>')


def sector(fig, cx, cy, r, a1, a2, fill, stroke=None, width=4):
    """Fylt sektor fra a1 til a2 grader (mot klokka, y opp)."""
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1))
    x2, y2 = cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2))
    large = 1 if (a2 - a1) % 360 > 180 else 0
    s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
    fig.raw(f'<path d="M {cx:.1f},{cy:.1f} L {x1:.1f},{y1:.1f} A {r},{r} 0 {large} 0 '
            f'{x2:.1f},{y2:.1f} Z" fill="{fill}"{s} stroke-linejoin="round"/>')


def side_tick(fig, p1, p2, n=1, length=26, color=None, width=4, gap=18):
    """n smaa hakk-merker paa tvers av midten av linjestykket p1-p2."""
    c = color or fig.p['text']
    mx, my = (p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2
    dx, dy = p2[0] - p1[0], p2[1] - p1[1]
    L = math.hypot(dx, dy)
    ux, uy = dx / L, dy / L
    nx, ny = -uy, ux
    for k in range(n):
        o = (k - (n - 1) / 2) * gap
        cx0, cy0 = mx + ux * o, my + uy * o
        fig.line(cx0 - nx * length / 2, cy0 - ny * length / 2,
                 cx0 + nx * length / 2, cy0 + ny * length / 2, c, width)


def right_angle_mark(fig, corner, dir1, dir2, size=30, color=None, width=4):
    """Kvadratsymbol for rett vinkel i `corner`, langs enhetsretningene dir1/dir2."""
    c = color or fig.p['text']
    x, y = corner
    p1 = (x + dir1[0] * size, y + dir1[1] * size)
    p2 = (x + (dir1[0] + dir2[0]) * size, y + (dir1[1] + dir2[1]) * size)
    p3 = (x + dir2[0] * size, y + dir2[1] * size)
    fig.poly([p1, p2, p3], stroke=c, width=width)


def table(fig, x, y, widths, rh, rows, header_fill=None, size=32, lw=4):
    """Enkel tabell. widths: kolonnebredder, rows: liste av rader (lister)."""
    hf = header_fill or fig.p['grid']
    for r, row in enumerate(rows):
        cx = x
        for c, val in enumerate(row):
            fig.rect(cx, y + r * rh, widths[c], rh, stroke=fig.p['text'], width=lw,
                     fill=hf if r == 0 else fig.p['bg'])
            fig.text(cx + widths[c] / 2, y + r * rh + rh / 2 + 11, str(val),
                     size, bold=(r == 0))
            cx += widths[c]


# ================================================================ KAPITTEL 1

def f_5_1_1_plassverdihus():
    fig = Fig('5')
    P = fig.p
    rooms = [('Tusener', '5', P['main']), ('Hundrere', '4', P['extra']),
             ('Tiere', '3', P['warn']), ('Enere', '2', P['accent'])]
    x0, y0, rw, rh = 300, 230, 250, 270
    # tak med tallet
    fig.poly([(x0 - 40, y0), (x0 + 4 * rw + 40, y0), (800, 70)],
             fill=P['grid'], stroke=P['text'], width=5, close=True)
    fig.text(800, 195, '5 432', 52, bold=True)
    for i, (name, digit, c) in enumerate(rooms):
        x = x0 + i * rw
        fig.rect(x, y0, rw, rh, fill=c, opacity=0.3)
        fig.rect(x, y0, rw, rh, stroke=c, width=6, rx=10)
        fig.text(x + rw / 2, y0 + 58, name, 32, bold=True)
        fig.text(x + rw / 2, y0 + 200, digit, 100, color=c, bold=True)
    # oppdeling under, farget per rom
    parts = [('5 000', P['main']), ('+', P['text']), ('400', P['extra']),
             ('+', P['text']), ('30', P['warn']), ('+', P['text']), ('2', P['accent'])]
    xs = [480, 625, 730, 845, 935, 1035, 1110]
    for (s, c), px in zip(parts, xs):
        fig.text(px, 660, s, 54, color=c, bold=True)
    fig.text(800, 790, 'Hvert siffer har sin egen verdi', 34)
    save(fig, '5-1-1-plassverdihus.svg')


def f_5_1_2_desimal_tallinje():
    fig = Fig('5')
    P = fig.p
    y = 280
    tx = fig.number_line(0, 1, y=y, x0=220, x1=1380,
                         ticks=[i / 10 for i in range(11)],
                         labels={0: '0', 0.5: '0,5', 1: '1'})
    fig.circle(tx(0.3), y, 14, fill=P['accent'])
    fig.text(tx(0.3), y - 40, '0,3', 36, color=P['accent'], bold=True)
    fig.circle(tx(0.7), y, 14, fill=P['main'])
    fig.text(tx(0.7), y - 40, '0,7', 36, color=P['main'], bold=True)
    # zoom-felt: 0,3 til 0,4 delt i ti
    zy, zx0, zx1 = 660, 400, 1200
    fig.line(tx(0.3), y + 24, zx0, zy - 50, P['extra'], 4, dash='12 10')
    fig.line(tx(0.4), y + 24, zx1, zy - 50, P['extra'], 4, dash='12 10')
    fig.line(zx0, zy, zx1, zy, P['text'], 5)
    for i in range(11):
        zx = zx0 + (zx1 - zx0) * i / 10
        fig.line(zx, zy - 16, zx, zy + 16, P['text'], 4)
    zm = (zx0 + zx1) / 2
    fig.circle(zm, zy, 14, fill=P['extra'])
    fig.text(zm, zy - 40, '0,35', 36, color=P['extra'], bold=True)
    fig.text(800, 820, 'Mellom 0,3 og 0,4 er det ti enda mindre deler', 32)
    save(fig, '5-1-2-desimal-tallinje.svg')


def f_5_1_2_desimal_plassverdi():
    fig = Fig('5')
    P = fig.p
    fig.text(800, 110, '3,47', 64, bold=True)
    cols = [('Enere', '3', P['main']), ('Tideler', '4', P['warn']),
            ('Hundredeler', '7', P['accent'])]
    x0, y0, cw, hh, dh = 370, 180, 290, 90, 230
    for i, (name, digit, c) in enumerate(cols):
        x = x0 + i * cw
        fig.rect(x, y0, cw, hh, fill=c, opacity=0.3)
        fig.rect(x, y0, cw, hh, stroke=c, width=5)
        fig.text(x + cw / 2, y0 + hh / 2 + 11, name, 32, bold=True)
        fig.rect(x, y0 + hh, cw, dh, stroke=c, width=5)
        fig.text(x + cw / 2, y0 + hh + dh / 2 + 30, digit, 92, color=c, bold=True)
    # komma som rund kule mellom enere og tideler
    fig.circle(x0 + cw, y0 + hh + dh - 28, 16, fill=P['text'])
    parts = [('3', P['main']), ('+', P['text']), ('0,4', P['warn']),
             ('+', P['text']), ('0,07', P['accent'])]
    xs = [610, 685, 790, 905, 1020]
    for (s, c), px in zip(parts, xs):
        fig.text(px, 660, s, 54, color=c, bold=True)
    fig.text(800, 790, 'Sifrene bak kommaet er deler av en hel', 32)
    save(fig, '5-1-2-desimal-plassverdi.svg')


def f_5_1_3_brokstaver():
    fig = Fig('5')
    P = fig.p
    rows = [(1, '1', P['warn']), (2, '1/2', P['accent']),
            (4, '1/4', P['main']), (8, '1/8', P['extra'])]
    x, w, h = 360, 980, 120
    for i, (parts, lab, c) in enumerate(rows):
        y = 130 + i * 185
        choco(fig, x, y, w, h, parts, [c] * parts, lw=4)
        fig.text(x - 50, y + h / 2 + 13, lab, 44, anchor='end', bold=True, color=c)
    fig.text(800, 870, 'Alle stavene er like lange', 32)
    save(fig, '5-1-3-brokstaver.svg')


def f_5_1_3_sammenligne_brok():
    fig = Fig('5')
    P = fig.p
    x, w, h = 300, 1000, 130
    choco(fig, x, 160, w, h, 7, [P['accent']] * 3 + [None] * 4)
    fig.text(x - 50, 160 + h / 2 + 13, '3/7', 44, anchor='end', bold=True, color=P['accent'])
    choco(fig, x, 470, w, h, 7, [P['main']] * 5 + [None] * 2)
    fig.text(x - 50, 470 + h / 2 + 13, '5/7', 44, anchor='end', bold=True, color=P['main'])
    fig.text(800, 405, '3/7  <  5/7', 56, bold=True)
    bubble(fig, 800, 770, 760, 110, 'Lik nevner: flest deler vinner!',
           color=P['extra'], size=36)
    save(fig, '5-1-3-sammenligne-brok.svg')


# ================================================================ KAPITTEL 2

def f_5_2_1_oppstilt_subtraksjon():
    fig = Fig('5')
    P = fig.p
    # svakt rutenett bak
    for gx in range(540, 1061, 130):
        fig.line(gx, 170, gx, 660, P['grid'], 2)
    for gy in range(170, 661, 122):
        fig.line(540, gy, 1060, gy, P['grid'], 2)
    cH, cT, cE = 670, 800, 930   # kolonner: hundrere, tiere, enere
    fig.text(480, 470, '−', 70, bold=True)
    # veksling: liten rød 4 over overstrøket 5, liten rød 1 foran 2
    fig.text(cT, 230, '4', 42, color=P['accent'], bold=True)
    fig.text(cE - 42, 320, '1', 42, color=P['accent'], bold=True)
    for x, d in [(cH, '4'), (cT, '5'), (cE, '2')]:
        fig.text(x, 350, d, 72, bold=True)
    fig.line(cT - 30, 360, cT + 30, 300, P['accent'], 5)  # strek over 5
    for x, d in [(cH, '2'), (cT, '1'), (cE, '8')]:
        fig.text(x, 480, d, 72, bold=True)
    fig.line(560, 520, 1040, 520, P['text'], 6)
    for x, d in [(cH, '2'), (cT, '3'), (cE, '4')]:
        fig.text(x, 630, d, 72, bold=True, color=P['main'])
    bubble(fig, 1255, 280, 420, 100, 'Husk å veksle!', color=P['extra'], size=36,
           tail=(cT + 60, 230))
    fig.text(800, 790, '452 − 218 = 234', 46, bold=True)
    save(fig, '5-2-1-oppstilt-subtraksjon.svg')


def f_5_2_2_gange_10_100():
    fig = Fig('5')
    P = fig.p

    def tall(cx, y, digits, size=76):
        wd = size * 0.62
        adv = [wd * 0.4 if d == ' ' else wd for d, _ in digits]
        total = sum(adv) - adv[-1]
        x = cx - total / 2
        for (d, c), a in zip(digits, adv):
            if d != ' ':
                fig.text(x, y, d, size, color=c, bold=True)
            x += a
    tall(800, 210, [('2', P['main']), ('3', P['extra'])])
    fig.arrow(700, 250, 480, 430, P['warn'], 7, head=18)
    fig.text(520, 320, '· 10', 44, anchor='end', color='#E0A800', bold=True)
    tall(430, 520, [('2', P['main']), ('3', P['extra']), ('0', P['text'])])
    fig.arrow(900, 250, 1120, 430, P['accent'], 7, head=18)
    fig.text(1080, 320, '· 100', 44, anchor='start', color=P['accent'], bold=True)
    tall(1190, 520, [('2', P['main']), ('3', P['extra']), (' ', P['text']),
                     ('0', P['text']), ('0', P['text'])])
    bubble(fig, 800, 740, 700, 110, 'Sifrene flytter plass!', color=P['extra'], size=38)
    save(fig, '5-2-2-gange-10-100.svg')


def f_5_2_4_regnerekkefolge():
    fig = Fig('5')
    P = fig.p
    # venstre: 3 + 4 · 2
    fig.text(330, 300, '3 +', 60, anchor='end', bold=True)
    fig.text(455, 300, '4 · 2', 60, bold=True)
    fig.raw(f'<ellipse cx="455" cy="282" rx="115" ry="62" fill="none" '
            f'stroke="{P["extra"]}" stroke-width="6"/>')
    fig.text(455, 390, 'gange først', 30, color=P['extra'], bold=True)
    fig.text(400, 560, '11', 84, bold=True)
    # høyre: (3 + 4) · 2
    fig.text(1115, 300, '(3 + 4)', 60, bold=True)
    fig.text(1290, 300, '· 2', 60, anchor='start', bold=True)
    fig.raw(f'<ellipse cx="1115" cy="282" rx="150" ry="62" fill="none" '
            f'stroke="{P["accent"]}" stroke-width="6"/>')
    fig.text(1115, 390, 'parentes først', 30, color=P['accent'], bold=True)
    fig.text(1200, 560, '14', 84, bold=True)
    fig.text(800, 560, '≠', 96, bold=True, color=P['warn'])
    fig.text(800, 760, 'Rekkefølgen endrer svaret!', 40, bold=True)
    save(fig, '5-2-4-regnerekkefolge.svg')


# ================================================================ KAPITTEL 3

def f_5_3_1_enhetstrapp():
    fig = Fig('5')
    P = fig.p
    steps = [('m', P['main']), ('dm', P['extra']), ('cm', P['warn']), ('mm', P['accent'])]
    x0, ytop, sw, sh, base = 250, 180, 270, 115, 640
    for i, (lab, c) in enumerate(steps):
        x = x0 + i * sw
        y = ytop + i * sh
        fig.rect(x, y, sw, base - y, fill=c, opacity=0.35)
        fig.rect(x, y, sw, base - y, stroke=c, width=5, rx=8)
        fig.text(x + sw / 2, y + 64, lab, 50, bold=True)
    fig.arrow(620, 170, 1300, 460, P['accent'], 6, head=18)
    fig.text(1010, 250, '· 10 for hvert trinn', 34, color=P['accent'], bold=True)
    fig.arrow(1180, 690, 330, 690, P['main'], 6, head=18)
    fig.text(760, 745, ': 10 for hvert trinn', 34, color=P['main'], bold=True)
    fig.text(800, 840, '3 m = 30 dm = 300 cm', 44, bold=True)
    save(fig, '5-3-1-enhetstrapp.svg')


def f_5_3_2_kvadratmeter_rutenett():
    fig = Fig('5')
    P = fig.p
    s = 132
    x0, y0 = 370, 170
    for r in range(3):
        for c in range(5):
            f = '#FFF3C2' if (r + c) % 2 == 0 else '#FFE9A0'
            fig.rect(x0 + c * s, y0 + r * s, s, s, fill=f)
    fig.rect(x0, y0, s, s, fill=P['warn'])
    fig.text(x0 + s / 2, y0 + s / 2 + 11, '1 m²', 32, bold=True)
    for i in range(6):
        fig.line(x0 + i * s, y0, x0 + i * s, y0 + 3 * s, P['text'], 3)
    for i in range(4):
        fig.line(x0, y0 + i * s, x0 + 5 * s, y0 + i * s, P['text'], 3)
    fig.rect(x0, y0, 5 * s, 3 * s, stroke=P['text'], width=6)
    dim(fig, x0, y0 - 44, x0 + 5 * s, y0 - 44, '5 m', size=36)
    dim(fig, x0 - 48, y0, x0 - 48, y0 + 3 * s, '3 m', size=36, off=(-58, 10))
    fig.text(800, 740, 'Areal = 5 · 3 = 15 m²', 48, bold=True)
    save(fig, '5-3-2-kvadratmeter-rutenett.svg')


def f_5_3_2_likt_areal_ulik_form():
    fig = Fig('5')
    P = fig.p
    s = 90
    # svakt ruteark
    for gx in range(170, 1431, s):
        fig.line(gx, 130, gx, 670, P['grid'], 2)
    for gy in range(130, 671, s):
        fig.line(170, gy, 1430, gy, P['grid'], 2)
    # venstre: 4 x 3 rektangel
    rx, ry = 260, 220
    fig.rect(rx, ry, 4 * s, 3 * s, fill=P['main'], opacity=0.55)
    for i in range(1, 4):
        fig.line(rx + i * s, ry, rx + i * s, ry + 3 * s, P['text'], 3)
    for i in range(1, 3):
        fig.line(rx, ry + i * s, rx + 4 * s, ry + i * s, P['text'], 3)
    fig.rect(rx, ry, 4 * s, 3 * s, stroke=P['text'], width=5)
    # høyre: L-form av 12 ruter (2 bred x 4 høy + fot 2 x 2)
    lx, ly = 890, 220
    fig.poly([(lx, ly), (lx + 2 * s, ly), (lx + 2 * s, ly + 2 * s),
              (lx + 4 * s, ly + 2 * s), (lx + 4 * s, ly + 4 * s), (lx, ly + 4 * s)],
             fill=P['extra'], opacity=0.55, close=True)
    for cr, cc in [(r, c) for r in range(4) for c in range(2)] + \
                  [(r, c) for r in range(2, 4) for c in range(2, 4)]:
        fig.rect(lx + cc * s, ly + cr * s, s, s, stroke=P['text'], width=3)
    fig.poly([(lx, ly), (lx + 2 * s, ly), (lx + 2 * s, ly + 2 * s),
              (lx + 4 * s, ly + 2 * s), (lx + 4 * s, ly + 4 * s), (lx, ly + 4 * s)],
             stroke=P['text'], width=5, close=True)
    fig.text(800, 790, 'Ulik form – likt areal: 12 ruter!', 44, bold=True)
    save(fig, '5-3-2-likt-areal-ulik-form.svg')


def f_5_3_3_trekant_omkrets():
    fig = Fig('5')
    P = fig.p
    s = 58
    A = (470, 620)             # rett hjørne
    B = (A[0] + 8 * s, 620)    # 8 cm bortover
    C = (A[0], 620 - 6 * s)    # 6 cm opp
    fig.line(A[0], A[1], C[0], C[1], P['extra'], 7)
    fig.line(A[0], A[1], B[0], B[1], P['main'], 7)
    fig.line(C[0], C[1], B[0], B[1], P['accent'], 7)
    fig.text(A[0] - 30, (A[1] + C[1]) / 2 + 12, '6 cm', 36, anchor='end',
             color=P['extra'], bold=True)
    fig.text((A[0] + B[0]) / 2, A[1] + 52, '8 cm', 36, color=P['main'], bold=True)
    fig.text((C[0] + B[0]) / 2 + 36, (C[1] + B[1]) / 2 - 24, '10 cm', 36,
             anchor='start', color=P['accent'], bold=True)
    # stiplet vei rundt figuren (skalert ut fra tyngdepunktet)
    gx = (A[0] + B[0] + C[0]) / 3
    gy = (A[1] + B[1] + C[1]) / 3
    k = 1.45
    Ao, Bo, Co = [(gx + k * (p[0] - gx), gy + k * (p[1] - gy)) for p in (A, B, C)]
    fig.poly([Ao, Bo, Co], stroke=P['warn'], width=5, close=True, dash='6 18')
    fig.arrow(Ao[0] + 220, Ao[1], Ao[0] + 190, Ao[1], '#E0A800', 5, head=16)
    fig.text(Bo[0] + 30, (Bo[1] + Co[1]) / 2, 'veien rundt', 30, anchor='start',
             color='#E0A800', bold=True)
    fig.text(800, 830, 'Omkrets = 6 + 8 + 10 = 24 cm', 46, bold=True)
    save(fig, '5-3-3-trekant-omkrets.svg')


def f_5_3_3_omkrets_vs_areal():
    fig = Fig('5')
    P = fig.p
    s = 86
    w, h = 6 * s, 4 * s
    for x, mode in [(170, 'omkrets'), (920, 'areal')]:
        y = 200
        if mode == 'omkrets':
            fig.rect(x, y, w, h, stroke=P['accent'], width=13, rx=6)
            fig.text(x + w / 2, y + h + 100, 'Omkrets: RUNDT', 38, bold=True, color=P['accent'])
        else:
            fig.rect(x, y, w, h, fill=P['extra'], opacity=0.5)
            fig.rect(x, y, w, h, stroke=P['extra'], width=5, rx=6)
            fig.text(x + w / 2, y + h + 100, 'Areal: INNI', 38, bold=True, color='#5C8A1E')
        fig.text(x + w / 2, y - 30, '6 m', 32, bold=True)
        fig.text(x - 26, y + h / 2 + 11, '4 m', 32, anchor='end', bold=True)
    fig.text(170 + w / 2, 700, '= 20 m', 40, bold=True, color=P['accent'])
    fig.text(920 + w / 2, 700, '= 24 m²', 40, bold=True, color='#5C8A1E')
    save(fig, '5-3-3-omkrets-vs-areal.svg')


# ================================================================ KAPITTEL 4

def f_5_4_1_vinkeltyper():
    fig = Fig('5')
    P = fig.p
    L = 330
    panels = [(180, 45, P['extra'], 'Spiss', 'mindre enn 90°'),
              (665, 90, P['warn'], 'Rett', 'akkurat 90°'),
              (1090, 135, P['accent'], 'Stump', 'mer enn 90°')]
    for x, ang, c, name, expl in panels:
        vy = 540
        a = math.radians(ang)
        fig.line(x, vy, x + L, vy, P['text'], 6)
        fig.line(x, vy, x + L * math.cos(a), vy - L * math.sin(a), P['text'], 6)
        if ang == 90:
            right_angle_mark(fig, (x, vy), (1, 0), (0, -1), size=42, color=c, width=5)
        else:
            angle_arc(fig, x, vy, 95, 0, ang, c, width=6)
        fig.circle(x, vy, 10, fill=P['text'])
        fig.text(x + 165, 660, name, 40, bold=True, color=c)
        fig.text(x + 165, 716, expl, 32)
    save(fig, '5-4-1-vinkeltyper.svg')


def f_5_4_1_gradskive():
    fig = Fig('5')
    P = fig.p
    cx, cy, R = 800, 650, 430
    # gradskive: halvsirkel med fyll
    fig.raw(f'<path d="M {cx - R},{cy} A {R},{R} 0 0 1 {cx + R},{cy} Z" '
            f'fill="{P["grid"]}" opacity="0.5" stroke="{P["main"]}" stroke-width="6"/>')
    for d in range(0, 181, 10):
        a = math.radians(d)
        r1 = R - (40 if d % 90 == 0 else 26)
        fig.line(cx + r1 * math.cos(a), cy - r1 * math.sin(a),
                 cx + R * math.cos(a), cy - R * math.sin(a), P['text'], 4)
    fig.text(cx + R + 50, cy - 10, '0', 34, bold=True)
    fig.text(cx, cy - R - 26, '90', 34, bold=True)
    fig.text(cx - R - 56, cy - 10, '180', 34, bold=True)
    # vinkelbein: ett langs 0°, ett på 60°
    a60 = math.radians(60)
    fig.line(cx, cy, cx + (R + 90) , cy, P['extra'], 7)
    fig.line(cx, cy, cx + (R + 90) * math.cos(a60), cy - (R + 90) * math.sin(a60),
             P['accent'], 7)
    fig.circle(cx, cy, 12, fill=P['text'])
    fig.circle(cx + R * math.cos(a60), cy - R * math.sin(a60), 14, fill=P['accent'])
    fig.text(cx + (R + 130) * math.cos(a60), cy - (R + 130) * math.sin(a60) + 10,
             '60°', 42, color=P['accent'], bold=True)
    bubble(fig, 380, 160, 660, 110, 'Toppunktet i midten,', color=P['extra'], size=33)
    fig.text(380, 207, 'ett bein på null!', 33, bold=True)
    save(fig, '5-4-1-gradskive.svg')


def f_5_4_2_trekanttyper():
    fig = Fig('5')
    P = fig.p
    base_y = 560
    # 1: likesidet, side 300
    A1, B1 = (150, base_y), (450, base_y)
    C1 = (300, base_y - 300 * math.sin(math.radians(60)))
    # 2: likebeint, grunnlinje 220, høyde 290
    A2, B2 = (690, base_y), (910, base_y)
    C2 = (800, base_y - 290)
    # 3: ulikesidet
    A3, B3 = (1130, base_y), (1470, base_y)
    C3 = (1210, base_y - 220)
    sets = [((A1, B1, C1), P['extra'], 'Likesidet', 'alle sider like', [1, 1, 1]),
            ((A2, B2, C2), P['main'], 'Likebeint', 'to sider like', [0, 1, 1]),
            ((A3, B3, C3), P['accent'], 'Ulikesidet', 'alle sider ulike', [0, 0, 0])]
    for (A, B, C), c, name, expl, marks in sets:
        fig.poly([A, B, C], fill=c, opacity=0.3, close=True)
        fig.poly([A, B, C], stroke=c, width=6, close=True)
        sides = [(A, B), (A, C), (B, C)]
        for (p1, p2), m in zip(sides, marks):
            if m:
                side_tick(fig, p1, p2, n=1, color=P['text'])
        mx = (A[0] + B[0]) / 2
        fig.text(mx, base_y + 90, name, 38, bold=True, color=c)
        fig.text(mx, base_y + 144, expl, 30)
    save(fig, '5-4-2-trekanttyper.svg')


def f_5_4_2_likesidet_60():
    fig = Fig('5')
    P = fig.p
    side = 560
    A = (520, 700)
    B = (A[0] + side, 700)
    C = (A[0] + side / 2, 700 - side * math.sin(math.radians(60)))
    fig.poly([A, B, C], fill=P['main'], opacity=0.25, close=True)
    fig.poly([A, B, C], stroke=P['main'], width=7, close=True)
    # vinkelbuer 60° i hvert hjørne
    angle_arc(fig, A[0], A[1], 80, 0, 60, P['warn'], 7)
    angle_arc(fig, B[0], B[1], 80, 120, 180, P['warn'], 7)
    angle_arc(fig, C[0], C[1], 80, 240, 300, P['warn'], 7)
    fig.text(A[0] + 105, A[1] - 38, '60°', 32, bold=True, color='#C7920A')
    fig.text(B[0] - 105, B[1] - 38, '60°', 32, bold=True, color='#C7920A', anchor='end')
    fig.text(C[0], C[1] + 135, '60°', 32, bold=True, color='#C7920A')
    fig.text((A[0] + B[0]) / 2, A[1] + 56, '5 cm', 36, bold=True)
    fig.text((A[0] + C[0]) / 2 - 44, (A[1] + C[1]) / 2, '5 cm', 36, anchor='end', bold=True)
    fig.text((B[0] + C[0]) / 2 + 44, (B[1] + C[1]) / 2, '5 cm', 36, anchor='start', bold=True)
    bubble(fig, 1255, 230, 540, 110, ['Like sider gir', 'like vinkler!'],
           color=P['extra'], size=34, tail=(B[0] - 40, C[1] + 160))
    save(fig, '5-4-2-likesidet-60.svg')


def f_5_4_3_firkanttyper():
    fig = Fig('5')
    P = fig.p
    y0 = 250
    # kvadrat 280x280
    x = 150
    s = 280
    fig.rect(x, y0, s, s, fill=P['main'], opacity=0.3)
    fig.rect(x, y0, s, s, stroke=P['main'], width=6)
    for p1, p2 in [((x, y0), (x + s, y0)), ((x, y0 + s), (x + s, y0 + s)),
                   ((x, y0), (x, y0 + s)), ((x + s, y0), (x + s, y0 + s))]:
        side_tick(fig, p1, p2, n=1, color=P['text'])
    for cnr, d1, d2 in [((x, y0), (1, 0), (0, 1)), ((x + s, y0), (-1, 0), (0, 1)),
                        ((x, y0 + s), (1, 0), (0, -1)), ((x + s, y0 + s), (-1, 0), (0, -1))]:
        right_angle_mark(fig, cnr, d1, d2, size=26, color=P['main'])
    fig.text(x + s / 2, y0 + s + 80, 'Kvadrat', 38, bold=True, color=P['main'])
    # rektangel 380x250
    x = 600
    w2, h2 = 380, 250
    yy = y0 + 15
    fig.rect(x, yy, w2, h2, fill=P['extra'], opacity=0.3)
    fig.rect(x, yy, w2, h2, stroke=P['extra'], width=6)
    side_tick(fig, (x, yy), (x + w2, yy), n=2, color=P['text'])
    side_tick(fig, (x, yy + h2), (x + w2, yy + h2), n=2, color=P['text'])
    side_tick(fig, (x, yy), (x, yy + h2), n=1, color=P['text'])
    side_tick(fig, (x + w2, yy), (x + w2, yy + h2), n=1, color=P['text'])
    for cnr, d1, d2 in [((x, yy), (1, 0), (0, 1)), ((x + w2, yy), (-1, 0), (0, 1)),
                        ((x, yy + h2), (1, 0), (0, -1)), ((x + w2, yy + h2), (-1, 0), (0, -1))]:
        right_angle_mark(fig, cnr, d1, d2, size=26, color='#5C8A1E')
    fig.text(x + w2 / 2, y0 + s + 80, 'Rektangel', 38, bold=True, color='#5C8A1E')
    # parallellogram
    x = 1090
    sk = 90
    pts = [(x + sk, yy), (x + sk + 330, yy), (x + 330, yy + h2), (x, yy + h2)]
    fig.poly(pts, fill=P['accent'], opacity=0.3, close=True)
    fig.poly(pts, stroke=P['accent'], width=6, close=True)

    def par_mark(p1, p2, n):
        mx, my = (p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2
        dx, dy = p2[0] - p1[0], p2[1] - p1[1]
        L = math.hypot(dx, dy)
        ux, uy = dx / L, dy / L
        for k in range(n):
            o = (k - (n - 1) / 2) * 22
            bx, by = mx + ux * o, my + uy * o
            fig.line(bx - ux * 16 - uy * 14, by - uy * 16 + ux * 14, bx + ux * 16, by + uy * 16, P['text'], 4)
            fig.line(bx - ux * 16 + uy * 14, by - uy * 16 - ux * 14, bx + ux * 16, by + uy * 16, P['text'], 4)
    par_mark(pts[0], pts[1], 1)
    par_mark(pts[3], pts[2], 1)
    par_mark(pts[1], pts[2], 2)
    par_mark(pts[0], pts[3], 2)
    fig.text(x + 210, y0 + s + 80, 'Parallellogram', 38, bold=True, color=P['accent'])
    save(fig, '5-4-3-firkanttyper.svg')


def f_5_4_3_firkantfamilien():
    fig = Fig('5')
    P = fig.p
    levels = [(800, 480, 700, 380, P['extra'], 'Firkanter'),
              (800, 540, 555, 295, P['main'], 'Parallellogrammer'),
              (800, 600, 415, 210, P['warn'], 'Rektangler'),
              (800, 655, 275, 130, P['accent'], 'Kvadrater')]
    for cx, cy, rx, ry, c, lab in levels:
        fig.raw(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{P["bg"]}"/>')
        fig.raw(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{c}" opacity="0.3"/>')
        fig.raw(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="none" '
                f'stroke="{c}" stroke-width="5"/>')
        fig.text(cx, cy - ry + 52, lab, 33, bold=True)
    # smaa eksempelfigurer i baandet ved hver etikett
    fig.poly([(595, 140), (690, 130), (705, 200), (605, 210)],
             stroke=P['text'], width=4, close=True)                       # skjev firkant
    fig.poly([(540, 345), (640, 345), (665, 287), (565, 287)],
             stroke=P['text'], width=4, close=True)                       # parallellogram
    fig.rect(575, 415, 110, 65, stroke=P['text'], width=4)                # rektangel
    fig.rect(760, 615, 80, 80, stroke=P['text'], width=4)                 # kvadrat
    bubble(fig, 1370, 95, 400, 115, ['Et kvadrat er også', 'et rektangel!'],
           color=P['accent'], size=30)
    save(fig, '5-4-3-firkantfamilien.svg')


# ================================================================ KAPITTEL 5

def f_5_5_1_tabell_til_soyle():
    fig = Fig('5')
    P = fig.p
    fig.text(800, 90, 'Favorittfrukt i klassen', 42, bold=True)
    table(fig, 150, 220, [280, 200], 95,
          [['Frukt', 'Antall'], ['Eple', '6'], ['Banan', '4'], ['Appelsin', '2']])
    # søylediagram
    x0, y0, w, h = 920, 200, 460, 440
    vmax = 6
    for v in (2, 4, 6):
        gy = y0 + h - v / vmax * h
        fig.line(x0, gy, x0 + w, gy, P['grid'], 2.5)
        fig.text(x0 - 20, gy + 10, str(v), 30, anchor='end')
    fig.text(x0 - 20, y0 + h + 10, '0', 30, anchor='end')
    fig.text(x0 - 30, y0 - 36, 'Antall', 30, anchor='start', italic=True)
    vals = [6, 4, 2]
    cols = [P['accent'], P['warn'], '#F2762C']
    labs = ['Eple', 'Banan', 'Appelsin']
    bw = 110
    for i, v in enumerate(vals):
        bx = x0 + 40 + i * 150
        fig.rect(bx, y0 + h - v / vmax * h, bw, v / vmax * h, fill=cols[i], rx=8)
        fig.text(bx + bw / 2, y0 + h + 44, labs[i], 30)
    fig.line(x0, y0 + h, x0 + w, y0 + h, P['text'], 4)
    fig.line(x0, y0, x0, y0 + h, P['text'], 4)
    fig.arrow(680, 420, 860, 420, P['extra'], 7, head=20)
    fig.text(800, 790, 'Tabellen og diagrammet viser de samme tallene', 34)
    save(fig, '5-5-1-tabell-til-soyle.svg')


def f_5_5_1_sektordiagram():
    fig = Fig('5')
    P = fig.p
    fig.text(800, 90, 'Kjæledyr i klassen', 42, bold=True)
    cx, cy, r = 520, 490, 300
    fig.pie(cx, cy, r, [(0.5, P['main'], '1/2'),
                        (0.25, P['warn'], '1/4'),
                        (0.25, P['extra'], '1/4')])
    legend = [(P['main'], 'Hund: halvparten'),
              (P['warn'], 'Katt: en firedel'),
              (P['extra'], 'Fisk: en firedel')]
    for i, (c, lab) in enumerate(legend):
        y = 350 + i * 110
        fig.rect(1000, y, 56, 56, fill=c, rx=12)
        fig.text(1080, y + 40, lab, 36, anchor='start', bold=True)
    save(fig, '5-5-1-sektordiagram.svg')


def f_5_5_1_avlese_diagram():
    fig = Fig('5')
    P = fig.p
    fig.text(800, 90, 'Bøker lest i vinterferien', 42, bold=True)
    x0, y0, w, h = 420, 160, 760, 520
    vmax = 6
    for v in range(1, 7):
        gy = y0 + h - v / vmax * h
        fig.line(x0, gy, x0 + w, gy, P['grid'], 2.5)
        fig.text(x0 - 20, gy + 10, str(v), 30, anchor='end')
    fig.text(x0 - 20, y0 + h + 10, '0', 30, anchor='end')
    fig.text(x0 - 36, y0 - 34, 'Antall bøker', 30, anchor='start', italic=True)
    vals = [3, 5, 2, 4]
    labs = ['Ali', 'Berit', 'Carlos', 'Dina']
    cols = [P['main'], P['accent'], P['extra'], P['warn']]
    bw = 120
    for i, v in enumerate(vals):
        bx = x0 + 50 + i * 180
        fig.rect(bx, y0 + h - v / vmax * h, bw, v / vmax * h, fill=cols[i], rx=8)
        fig.text(bx + bw / 2, y0 + h + 46, labs[i], 32)
    fig.line(x0, y0 + h, x0 + w, y0 + h, P['text'], 4)
    fig.line(x0, y0, x0, y0 + h, P['text'], 4)
    # hjelpelinje fra Berits søyle til 5
    by = y0 + h - 5 / vmax * h
    fig.line(x0 + 50 + 1 * 180 + bw / 2, by, x0, by, P['accent'], 5, dash='12 10')
    fig.circle(x0, by, 11, fill=P['accent'])
    fig.text(1260, 300, 'Les av på aksen!', 34, color=P['accent'], bold=True)
    fig.arrow(1260, 320, x0 + 320, by - 10, P['accent'], 4, head=14)
    save(fig, '5-5-1-avlese-diagram.svg')


if __name__ == '__main__':
    f_5_1_1_plassverdihus()
    f_5_1_2_desimal_tallinje()
    f_5_1_2_desimal_plassverdi()
    f_5_1_3_brokstaver()
    f_5_1_3_sammenligne_brok()
    f_5_2_1_oppstilt_subtraksjon()
    f_5_2_2_gange_10_100()
    f_5_2_4_regnerekkefolge()
    f_5_3_1_enhetstrapp()
    f_5_3_2_kvadratmeter_rutenett()
    f_5_3_2_likt_areal_ulik_form()
    f_5_3_3_trekant_omkrets()
    f_5_3_3_omkrets_vs_areal()
    f_5_4_1_vinkeltyper()
    f_5_4_1_gradskive()
    f_5_4_2_trekanttyper()
    f_5_4_2_likesidet_60()
    f_5_4_3_firkanttyper()
    f_5_4_3_firkantfamilien()
    f_5_5_1_tabell_til_soyle()
    f_5_5_1_sektordiagram()
    f_5_5_1_avlese_diagram()
