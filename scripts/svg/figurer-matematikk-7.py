#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk 7 (mellomtrinn).

Kjør:  python3 scripts/svg/figurer-matematikk-7.py
Output: public/images/content/matematikk-7/*.svg

Palett: petrolblå (main), oransje (accent), gressgrønn (extra), solgul (warn).
Mellomtrinns-stil: store elementer, tykke streker, tekst >= 30, få etiketter.
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, fmt, W, H

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..',
                   'public', 'images', 'content', 'matematikk-7')

GUL_TXT = '#B8860B'   # lesbar mørk gul til tekst


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


def angle_arc(fig, cx, cy, r, a1, a2, color, width=5, double=False):
    """Vinkelbue fra a1 til a2 grader (mot klokka, y opp)."""
    for rr in ([r, r - 14] if double else [r]):
        x1, y1 = cx + rr * math.cos(math.radians(a1)), cy - rr * math.sin(math.radians(a1))
        x2, y2 = cx + rr * math.cos(math.radians(a2)), cy - rr * math.sin(math.radians(a2))
        large = 1 if (a2 - a1) % 360 > 180 else 0
        fig.raw(f'<path d="M {x1:.1f},{y1:.1f} A {rr},{rr} 0 {large} 0 {x2:.1f},{y2:.1f}" '
                f'fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>')


def sector(fig, cx, cy, r, a1, a2, fill, stroke=None, width=4):
    """Fylt sektor fra a1 til a2 grader (mot klokka, y opp)."""
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1))
    x2, y2 = cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2))
    large = 1 if (a2 - a1) % 360 > 180 else 0
    s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
    fig.raw(f'<path d="M {cx:.1f},{cy:.1f} L {x1:.1f},{y1:.1f} A {r},{r} 0 {large} 0 '
            f'{x2:.1f},{y2:.1f} Z" fill="{fill}"{s} stroke-linejoin="round"/>')


def right_angle_mark(fig, corner, dir1, dir2, size=28, color=None, width=4):
    c = color or fig.p['text']
    x, y = corner
    p1 = (x + dir1[0] * size, y + dir1[1] * size)
    p2 = (x + (dir1[0] + dir2[0]) * size, y + (dir1[1] + dir2[1]) * size)
    p3 = (x + dir2[0] * size, y + dir2[1] * size)
    fig.poly([p1, p2, p3], stroke=c, width=width)


def side_tick(fig, p1, p2, n=1, length=26, color=None, width=4, gap=18):
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


def frac(fig, cx, cy, top, bot, size=48, top_color=None, bot_color=None, lw=5):
    """Brøk med teller over brøkstrek over nevner, sentrert i (cx, cy)."""
    fig.text(cx, cy - 14, top, size, bold=True, color=top_color)
    hw = size * 0.42 * max(len(str(top)), len(str(bot)))
    fig.line(cx - hw, cy + 4, cx + hw, cy + 4, fig.p['text'], lw)
    fig.text(cx, cy + size + 4, bot, size, bold=True, color=bot_color)


def hop(fig, x1, x2, y, h, color, width=5):
    """Buehopp fra (x1,y) til (x2,y) med pilspiss ved landing."""
    mx = (x1 + x2) / 2
    fig.raw(f'<path d="M {x1:.1f},{y:.1f} Q {mx:.1f},{y - h:.1f} {x2:.1f},{y:.1f}" '
            f'fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"/>')
    ang = math.atan2(h, (x2 - mx))
    for da in (math.radians(150), math.radians(-150)):
        fig.line(x2, y, x2 + 14 * math.cos(ang + da), y - 14 * math.sin(ang + da),
                 color, width)


def star(fig, cx, cy, r, color):
    pts = []
    for i in range(10):
        a = math.pi / 2 + i * math.pi / 5
        rr = r if i % 2 == 0 else r * 0.45
        pts.append((cx + rr * math.cos(a), cy - rr * math.sin(a)))
    fig.poly(pts, fill=color, close=True)


# ================================================================ KAPITTEL 1

def f_7_1_1_tallinje_hopp():
    fig = Fig('7')
    P = fig.p
    fig.text(800, 150, '(−3) + 5 = 2', 56, bold=True)
    y = 480
    tx = fig.number_line(-5, 5, y=y, x0=180, x1=1420,
                         ticks=list(range(-5, 6)),
                         labels={i: fmt(i) for i in range(-5, 6)})
    fig.line(tx(0), y - 24, tx(0), y + 24, P['main'], 7)
    for v in range(-3, 2):
        hop(fig, tx(v), tx(v + 1), y - 12, 95, P['extra'], 6)
    fig.circle(tx(-3), y, 15, fill=P['accent'])
    star(fig, tx(2), y, 34, P['warn'])
    bubble(fig, 800, 750, 760, 110, 'Pluss betyr hopp mot høyre!',
           color=P['extra'], size=36)
    save(fig, '7-1-1-tallinje-hopp.svg')


def f_7_1_2_regnetrapp():
    fig = Fig('7')
    P = fig.p
    steps = [('1. Parenteser', P['main'], 100, 150),
             ('2. Potenser', P['accent'], 180, 320),
             ('3. Gange og dele', P['extra'], 260, 490)]
    for lab, c, x, y in steps:
        fig.rect(x, y, 460, 150, fill=c, opacity=0.25)
        fig.rect(x, y, 460, 150, stroke=c, width=5, rx=14)
        fig.text(x + 230, y + 88, lab, 36, bold=True)
    fig.rect(340, 660, 460, 150, fill=P['warn'], opacity=0.25)
    fig.rect(340, 660, 460, 150, stroke=P['warn'], width=5, rx=14)
    fig.text(570, 748, '4. Plusse og trekke fra', 34, bold=True)
    # eksempel til høyre
    fig.text(1180, 220, '2 + 3 · 4²', 54, bold=True)
    lines = [('4² = 16', P['warn'], 370), ('3 · 16 = 48', P['extra'], 510),
             ('2 + 48 = 50', P['accent'], 650)]
    for s, c, y in lines:
        fig.rect(1180 - 175, y - 52, 350, 80, stroke=c, width=6, rx=40)
        fig.text(1180, y, s, 42, bold=True)
    save(fig, '7-1-2-regnetrapp.svg')


def f_7_1_3_brok_gange_areal():
    fig = Fig('7')
    P = fig.p
    x0, y0, cw, rh = 460, 150, 120, 160
    wq, hq = 4 * cw, 3 * rh
    # 2/3 nederst: lys oransje flate + horisontale striper
    fig.rect(x0, y0 + rh, wq, 2 * rh, fill=P['accent'], opacity=0.18)
    for sy in range(int(y0 + rh + 20), int(y0 + hq), 40):
        fig.line(x0 + 5, sy, x0 + wq - 5, sy, P['accent'], 5, opacity=0.9)
    # 3/4 venstre: lys petrol flate + vertikale striper
    fig.rect(x0, y0, 3 * cw, hq, fill=P['main'], opacity=0.15)
    for sx in range(int(x0 + 20), int(x0 + 3 * cw), 40):
        fig.line(sx, y0 + 5, sx, y0 + hq - 5, P['main'], 5, opacity=0.9)
    for i in range(5):
        fig.line(x0 + i * cw, y0, x0 + i * cw, y0 + hq, P['text'], 3)
    for j in range(4):
        fig.line(x0, y0 + j * rh, x0 + wq, y0 + j * rh, P['text'], 3)
    fig.rect(x0, y0, wq, hq, stroke=P['text'], width=5)
    fig.line(x0 - 26, y0 + rh, x0 - 26, y0 + hq, P['accent'], 6)
    fig.text(x0 - 50, y0 + 2 * rh + 14, '2/3', 44, anchor='end', bold=True, color=P['accent'])
    fig.line(x0, y0 - 26, x0 + 3 * cw, y0 - 26, P['main'], 6)
    fig.text(x0 + 1.5 * cw, y0 - 50, '3/4', 44, bold=True, color=P['main'])
    fig.text(800, 790, '2/3 · 3/4 = 6/12 = 1/2', 50, bold=True)
    save(fig, '7-1-3-brok-gange-areal.svg')


def f_7_1_3_dele_pa_halv():
    fig = Fig('7')
    P = fig.p
    w, h = 300, 110
    xs = [240, 620, 1000]
    for x in xs:
        choco(fig, x, 150, w, h, 1, [P['accent']])
    fig.arrow(800, 310, 800, 380, P['text'], 6, head=18)
    n = 1
    for x in xs:
        choco(fig, x, 410, w, h, 2, [P['accent'], P['accent']])
        for half in range(2):
            fig.text(x + w / 4 + half * w / 2, 410 + h / 2 + 13, str(n), 40,
                     color='#FFFFFF', bold=True)
            n += 1
    fig.text(800, 660, '3 : 1/2 = 6', 54, bold=True)
    bubble(fig, 800, 800, 820, 110, 'Hvor mange halve i 3 hele? Seks!',
           color=P['extra'], size=36)
    save(fig, '7-1-3-dele-pa-halv.svg')


def f_7_1_3_omvendt_brok():
    fig = Fig('7')
    P = fig.p
    frac(fig, 600, 230, '4', '5')
    fig.text(700, 260, ':', 54, bold=True)
    frac(fig, 800, 230, '2', '3', top_color=P['accent'], bot_color=P['extra'])
    # svingpil som snur brøken
    fig.raw(f'<path d="M 900,200 C 1050,200 1050,440 900,460" fill="none" '
            f'stroke="{P["main"]}" stroke-width="6" stroke-linecap="round"/>')
    fig.arrow(910, 458, 895, 461, P['main'], 6, head=16)
    fig.text(1070, 330, 'snu!', 36, color=P['main'], bold=True)
    frac(fig, 600, 500, '4', '5')
    fig.text(700, 530, '·', 54, bold=True)
    frac(fig, 800, 500, '3', '2', top_color=P['extra'], bot_color=P['accent'])
    fig.text(905, 530, '=', 54, bold=True)
    frac(fig, 1020, 500, '12', '10')
    fig.text(1135, 530, '=', 54, bold=True)
    frac(fig, 1250, 500, '6', '5')
    bubble(fig, 800, 790, 860, 110, 'Snu den bakerste brøken og gang!',
           color=P['accent'], size=36)
    save(fig, '7-1-3-omvendt-brok.svg')


def f_7_1_4_potens_dobling():
    fig = Fig('7')
    P = fig.p
    cx0 = 480
    rows = [(1, 140, 26, None), (2, 280, 24, '2¹ = 2'), (4, 420, 20, '2² = 4'),
            (8, 560, 16, '2³ = 8'), (16, 700, 12, '2⁴ = 16')]
    centers_prev = None
    for n, y, r, lab in rows:
        if n == 1:
            xs = [cx0]
        else:
            spread = 540
            step = spread / (n - 1)
            xs = [cx0 - spread / 2 + i * step for i in range(n)]
        if centers_prev:
            for i, x in enumerate(xs):
                px = centers_prev[i // 2][0]
                py = centers_prev[i // 2][1]
                fig.line(px, py + centers_prev[i // 2][2], x, y - r, P['grid'], 3)
        for x in xs:
            fig.circle(x, y, r, fill=P['main'])
        if lab:
            fig.text(860, y + 12, lab, 38, anchor='start', bold=True)
        centers_prev = [(x, y, r) for x in xs]
    # skrivemåte med piler
    fig.text(1140, 350, '2', 70, bold=True)
    fig.text(1180, 312, '4', 44, bold=True, color=P['accent'])
    fig.text(1215, 350, '= 2 · 2 · 2 · 2', 44, anchor='start', bold=True)
    fig.arrow(1095, 470, 1130, 375, P['main'], 4, head=13)
    fig.text(1085, 510, 'grunntall', 32, color=P['main'], bold=True)
    fig.arrow(1280, 230, 1195, 295, P['accent'], 4, head=13)
    fig.text(1295, 222, 'eksponent', 32, anchor='start', color=P['accent'], bold=True)
    save(fig, '7-1-4-potens-dobling.svg')


# ================================================================ KAPITTEL 2

def f_7_2_1_samle_ledd():
    fig = Fig('7')
    P = fig.p
    fig.text(800, 140, '2x + 3 + x + 1', 56, bold=True)

    def xtile(x, y):
        fig.rect(x, y, 140, 80, fill=P['accent'], rx=16)
        fig.text(x + 70, y + 53, 'x', 40, color='#FFFFFF', bold=True, italic=True)

    def unit(x, y):
        fig.rect(x, y, 64, 64, fill=P['main'], rx=10)
    # usortert
    y = 240
    xtile(250, y); xtile(420, y)
    unit(620, y + 8); unit(710, y + 8); unit(800, y + 8)
    xtile(920, y)
    unit(1120, y + 8)
    fig.arrow(800, 390, 800, 470, P['text'], 6, head=18)
    fig.text(850, 440, 'samle like ledd', 34, anchor='start', color=P['extra'], bold=True)
    # sortert
    y = 520
    xtile(330, y); xtile(490, y); xtile(650, y)
    unit(900, y + 8); unit(990, y + 8); unit(1080, y + 8); unit(1170, y + 8)
    fig.text(800, 720, '3x + 4', 60, bold=True)
    bubble(fig, 800, 830, 700, 100, 'x-er for seg, tall for seg!',
           color=P['extra'], size=34)
    save(fig, '7-2-1-samle-ledd.svg')


def f_7_2_3_ulikhet_tallinje():
    fig = Fig('7')
    P = fig.p
    for header, y, val, open_pt, right, c, note in [
            ('x > 2', 280, 2, True, True, P['extra'], '2 er ikke med'),
            ('x ≤ 3', 660, 3, False, False, P['accent'], '3 er med')]:
        fig.text(180, y - 110, header, 48, anchor='start', bold=True, color=c)
        tx = fig.number_line(-5, 5, y=y, x0=240, x1=1400,
                             ticks=list(range(-5, 6)),
                             labels={i: fmt(i) for i in range(-5, 6)})
        if right:
            fig.arrow(tx(val) + 16, y, tx(5) + 60, y, c, 9, head=20)
        else:
            fig.arrow(tx(val) - 16, y, tx(-5) - 60, y, c, 9, head=20)
        if open_pt:
            fig.circle(tx(val), y, 15, fill=P['bg'], stroke=c, width=6)
        else:
            fig.circle(tx(val), y, 15, fill=c)
        fig.text(tx(val) + 30, y - 56, note, 30, anchor='start', color=c, bold=True)
    save(fig, '7-2-3-ulikhet-tallinje.svg')


# ================================================================ KAPITTEL 3

def f_7_3_1_fire_kvadranter():
    fig = Fig('7')
    P = fig.p
    tx, ty = fig.coords(-5, 5, -5, 5, box=(500, 150, 1180, 830),
                        xticks=list(range(-5, 6)), yticks=list(range(-5, 6)),
                        xlabel='x', ylabel='y', tick_size=22)
    for num, qx, qy in [('I', 2.5, 2.5), ('II', -2.5, 2.5),
                        ('III', -2.5, -2.5), ('IV', 2.5, -2.5)]:
        fig.text(tx(qx), ty(qy) + 35, num, 100, color='#D8D0BE', bold=True)
    pts = [(3, 2, P['extra'], '#4D7A38'), (-2, 4, P['accent'], P['accent']),
           (-3, -1, P['main'], P['main']), (2, -3, P['warn'], GUL_TXT)]
    for x, y, c, tc in pts:
        fig.circle(tx(x), ty(y), 12, fill=c)
        anchor = 'start' if x > 0 else 'end'
        dy = -20 if y > 0 else 52   # under punktet i nedre halvplan (unngaa akse-tall)
        fig.text(tx(x) + (20 if x > 0 else -20), ty(y) + dy,
                 f'({fmt(x)}, {fmt(y)})', 32, anchor=anchor, bold=True, color=tc)
    bubble(fig, 240, 230, 420, 150, ['Først bortover (x),', 'så oppover (y)!'],
           color=P['extra'], size=30)
    save(fig, '7-3-1-fire-kvadranter.svg')


def f_7_3_2_stigningstall():
    fig = Fig('7')
    P = fig.p
    fig.title('y = 2x + 1')
    tx, ty = fig.coords(-1, 5, -1, 6, box=(420, 140, 1220, 800),
                        xticks=list(range(-1, 6)), yticks=list(range(-1, 7)),
                        tick_size=24)
    fig.plot(lambda x: 2 * x + 1, color=P['main'], width=6)
    fig.circle(tx(0), ty(1), 24, stroke=P['accent'], width=6)
    fig.text(tx(0.4), ty(0.35), 'starter på 1', 32, anchor='start', bold=True,
             color=P['accent'])
    # trappetrinn mellom (1,3) og (2,5)
    fig.line(tx(1), ty(3), tx(2), ty(3), P['accent'], 6, dash='12 9')
    fig.line(tx(2), ty(3), tx(2), ty(5), P['accent'], 6, dash='12 9')
    fig.text(tx(1.5), ty(3) + 46, '1 mot høyre', 30, color=P['accent'], bold=True)
    fig.text(tx(2) + 18, ty(4) + 10, '2 opp', 30, anchor='start', color=P['accent'], bold=True)
    fig.text(tx(2.7), ty(4.2), 'stigningstall = 2', 34, anchor='start', bold=True)
    save(fig, '7-3-2-stigningstall.svg')


def f_7_3_3_avstand_tid():
    fig = Fig('7')
    P = fig.p
    tx, ty = fig.coords(0, 60, 0, 8, box=(260, 140, 1380, 740),
                        xticks=[10, 20, 30, 40, 50, 60], yticks=[2, 4, 6, 8],
                        xlabel='Tid (minutter)', ylabel='Avstand hjemmefra (km)')
    pts = [(0, 0), (20, 6), (35, 6), (60, 0)]
    fig.poly([(tx(x), ty(y)) for x, y in pts], stroke=P['main'], width=7)
    for x, y in pts[1:3]:
        fig.circle(tx(x), ty(y), 10, fill=P['accent'])
    fig.text(tx(8.5), ty(4.1), 'sykler jevnt', 32, anchor='end', color='#4D7A38', bold=True)
    fig.text(tx(27.5), ty(6) - 34, 'pause – står stille', 32, color=P['accent'], bold=True)
    fig.text(tx(50), ty(3.6), 'sykler hjem', 32, anchor='start', color=P['main'], bold=True)
    save(fig, '7-3-3-avstand-tid.svg')


def f_7_3_3_bratt_og_slak():
    fig = Fig('7')
    P = fig.p
    tx, ty = fig.coords(0, 10, 0, 10, box=(300, 150, 1300, 760), grid=False,
                        xticks=[], yticks=[], xlabel='Tid', ylabel='Avstand')
    fig.plot(lambda x: 1.3 * x, color=P['extra'], width=7)
    fig.plot(lambda x: 0.4 * x, color=P['accent'], width=7)
    fig.text(tx(6.4), ty(7.4), 'rask – bratt graf', 34, anchor='start',
             color='#4D7A38', bold=True)
    fig.text(tx(7.6), ty(2.4), 'langsom – slak graf', 34, anchor='start',
             color=P['accent'], bold=True)
    bubble(fig, 700, 850, 880, 95, 'Jo brattere graf, jo høyere fart!',
           color=P['main'], size=34)
    save(fig, '7-3-3-bratt-og-slak.svg')


# ================================================================ KAPITTEL 4

def f_7_4_1_vinkelsum_180():
    fig = Fig('7')
    P = fig.p
    A, B, C = (250, 640), (750, 640), (413, 357)
    fig.poly([A, B, C], fill=P['main'], opacity=0.15, close=True)
    fig.poly([A, B, C], stroke=P['main'], width=6, close=True)
    angle_arc(fig, A[0], A[1], 80, 0, 60, P['extra'], 7)
    angle_arc(fig, B[0], B[1], 80, 140, 180, P['warn'], 7)
    angle_arc(fig, C[0], C[1], 70, 240, 320, P['accent'], 7)
    fig.text(A[0] + 130, A[1] - 50, '60°', 32, bold=True, color='#4D7A38')
    fig.text(B[0] - 120, B[1] - 44, '40°', 32, bold=True, color=GUL_TXT)
    fig.text(C[0] + 22, C[1] + 130, '80°', 32, bold=True, color=P['accent'])
    fig.arrow(880, 480, 990, 480, P['text'], 6, head=18)
    # halvsirkel av de tre vinklene
    Px, Py, r = 1200, 560, 180
    fig.line(Px - 200, Py, Px + 230, Py, P['text'], 5)
    sector(fig, Px, Py, r, 0, 40, P['warn'], stroke=P['text'], width=3)
    sector(fig, Px, Py, r, 40, 120, P['accent'], stroke=P['text'], width=3)
    sector(fig, Px, Py, r, 120, 180, P['extra'], stroke=P['text'], width=3)
    fig.text(Px + 215 * math.cos(math.radians(20)),
             Py - 215 * math.sin(math.radians(20)) + 10, '40°', 30, bold=True, color=GUL_TXT)
    fig.text(Px + 215 * math.cos(math.radians(80)),
             Py - 215 * math.sin(math.radians(80)) + 10, '80°', 30, bold=True, color=P['accent'])
    fig.text(Px + 230 * math.cos(math.radians(152)),
             Py - 230 * math.sin(math.radians(152)) + 10, '60°', 30, bold=True, color='#4D7A38')
    fig.text(Px, Py + 80, '60° + 80° + 40° = 180°', 38, bold=True)
    save(fig, '7-4-1-vinkelsum-180.svg')


def f_7_4_1_ukjent_vinkel():
    fig = Fig('7')
    P = fig.p
    C, B = (380, 700), (1080, 700)
    A = (380, 700 - 700 * math.tan(math.radians(35)))   # 35° i B
    fig.poly([A, B, C], fill=P['main'], opacity=0.15, close=True)
    fig.poly([A, B, C], stroke=P['main'], width=6, close=True)
    right_angle_mark(fig, C, (1, 0), (0, -1), size=36)
    angle_arc(fig, B[0], B[1], 110, 145, 180, P['extra'], 6)
    fig.text(B[0] - 160, B[1] - 44, '35°', 34, bold=True, anchor='end', color='#4D7A38')
    angle_arc(fig, A[0], A[1], 100, -55, 0, P['accent'], 6)
    fig.text(A[0] + 60, A[1] + 150, 'x?', 48, anchor='start', bold=True,
             color=P['accent'], italic=True)
    fig.text(800, 840, 'x = 180° − 90° − 35° = 55°', 46, bold=True)
    save(fig, '7-4-1-ukjent-vinkel.svg')


def f_7_4_1_trekanttyper_vinkler():
    fig = Fig('7')
    P = fig.p
    base_y = 600
    # likesidet
    A1, B1 = (140, base_y), (440, base_y)
    C1 = (290, base_y - 300 * math.sin(math.radians(60)))
    fig.poly([A1, B1, C1], fill=P['extra'], opacity=0.2, close=True)
    fig.poly([A1, B1, C1], stroke=P['extra'], width=6, close=True)
    angle_arc(fig, A1[0], A1[1], 60, 0, 60, P['text'], 4)
    angle_arc(fig, B1[0], B1[1], 60, 120, 180, P['text'], 4)
    angle_arc(fig, C1[0], C1[1], 60, 240, 300, P['text'], 4)
    fig.text(A1[0] + 90, A1[1] - 30, '60°', 28, bold=True)
    fig.text(B1[0] - 90, B1[1] - 30, '60°', 28, bold=True, anchor='end')
    fig.text(C1[0], C1[1] + 105, '60°', 28, bold=True)
    # rettvinklet 90-60-30
    C2 = (640, base_y)
    B2 = (640 + 300, base_y)
    A2 = (640, base_y - 300 * math.tan(math.radians(30)))
    fig.poly([A2, B2, C2], fill=P['main'], opacity=0.2, close=True)
    fig.poly([A2, B2, C2], stroke=P['main'], width=6, close=True)
    right_angle_mark(fig, C2, (1, 0), (0, -1), size=30)
    fig.text(C2[0] + 52, C2[1] - 48, '90°', 28, bold=True, anchor='start')
    angle_arc(fig, B2[0], B2[1], 80, 150, 180, P['text'], 4)
    fig.text(B2[0] - 105, B2[1] - 32, '30°', 28, bold=True, anchor='end')
    angle_arc(fig, A2[0], A2[1], 56, 270, 330, P['text'], 4)
    fig.text(A2[0] + 30, A2[1] + 100, '60°', 28, bold=True, anchor='start')
    # stumpvinklet 120-35-25
    P0 = (1180, base_y)
    P1 = (1420, base_y)
    Ap = (1091.6, base_y - 153.2)
    fig.poly([P0, P1, Ap], fill=P['accent'], opacity=0.2, close=True)
    fig.poly([P0, P1, Ap], stroke=P['accent'], width=6, close=True)
    angle_arc(fig, P0[0], P0[1], 46, 0, 120, P['text'], 4)
    fig.text(P0[0] - 10, P0[1] + 56, '120°', 28, bold=True, anchor='end')
    angle_arc(fig, P1[0], P1[1], 90, 155, 180, P['text'], 4)
    fig.text(P1[0] - 110, P1[1] - 26, '25°', 28, bold=True, anchor='end')
    angle_arc(fig, Ap[0], Ap[1], 70, 300, 335, P['text'], 4)
    fig.text(Ap[0] - 6, Ap[1] - 26, '35°', 28, bold=True)
    bubble(fig, 800, 790, 660, 100, 'Alltid 180° til sammen!', color=P['accent'], size=36)
    save(fig, '7-4-1-trekanttyper-vinkler.svg')


def f_7_4_2_midtnormal():
    fig = Fig('7')
    P = fig.p
    A, B = (440, 500), (1160, 500)
    M = (800, 500)
    r = 470
    top, bot = (800, 198), (800, 802)
    fig.line(A[0], A[1], B[0], B[1], P['main'], 6)
    # passerbuer fra A og B
    for cx, a1, a2 in [(A[0], 24, 56), (A[0], -56, -24), (B[0], 124, 156), (B[0], -156, -124)]:
        angle_arc(fig, cx, 500, r, a1, a2, P['accent'], 5)
    fig.line(800, 150, 800, 850, P['extra'], 6)
    for pt in (top, bot):
        fig.circle(pt[0], pt[1], 10, fill=P['text'])
    fig.circle(A[0], A[1], 11, fill=P['main'])
    fig.circle(B[0], B[1], 11, fill=P['main'])
    fig.circle(M[0], M[1], 11, fill=P['extra'])
    right_angle_mark(fig, M, (1, 0), (0, -1), size=30)
    side_tick(fig, A, M, n=1, color=P['text'])
    side_tick(fig, M, B, n=1, color=P['text'])
    fig.text(A[0] - 36, A[1] + 14, 'A', 42, anchor='end', bold=True)
    fig.text(B[0] + 36, B[1] + 14, 'B', 42, anchor='start', bold=True)
    fig.text(M[0] + 26, M[1] + 58, 'M', 40, anchor='start', bold=True, color='#4D7A38')
    fig.text(830, 180, 'midtnormalen', 34, anchor='start', bold=True, color='#4D7A38')
    fig.text(280, 800, 'Samme radius', 30, color=P['accent'], bold=True)
    fig.text(280, 842, 'fra A og B', 30, color=P['accent'], bold=True)
    save(fig, '7-4-2-midtnormal.svg')


def f_7_4_2_vinkelhalvering():
    fig = Fig('7')
    P = fig.p
    V = (360, 700)
    L = 640
    a60 = math.radians(60)
    fig.line(V[0], V[1], V[0] + L, V[1], P['main'], 6)
    fig.line(V[0], V[1], V[0] + L * math.cos(a60), V[1] - L * math.sin(a60), P['main'], 6)
    # passerbue fra toppunktet
    angle_arc(fig, V[0], V[1], 330, -12, 72, P['text'], 4)
    P1 = (V[0] + 330, V[1])
    P2 = (V[0] + 330 * math.cos(a60), V[1] - 330 * math.sin(a60))
    for pt in (P1, P2):
        fig.circle(pt[0], pt[1], 10, fill=P['text'])
    # to smaa buer som møtes i Q
    Q = (824.5, 431.8)
    angle_arc(fig, P1[0], P1[1], 300, 48, 78, P['text'], 4)
    angle_arc(fig, P2[0], P2[1], 300, -18, 12, P['text'], 4)
    fig.circle(Q[0], Q[1], 10, fill=P['accent'])
    # halveringslinjen
    a30 = math.radians(30)
    fig.line(V[0], V[1], V[0] + 720 * math.cos(a30), V[1] - 720 * math.sin(a30),
             P['accent'], 6)
    angle_arc(fig, V[0], V[1], 120, 0, 30, P['extra'], 5)
    angle_arc(fig, V[0], V[1], 140, 30, 60, P['extra'], 5)
    fig.text(V[0] + 200 * math.cos(math.radians(14)),
             V[1] - 200 * math.sin(math.radians(14)) + 10, '30°', 30, bold=True, color='#4D7A38')
    fig.text(V[0] + 215 * math.cos(math.radians(46)),
             V[1] - 215 * math.sin(math.radians(46)) + 10, '30°', 30, bold=True, color='#4D7A38')
    fig.text(1130, 250, 'Halveringslinjen deler', 34, anchor='start', bold=True)
    fig.text(1130, 296, 'vinkelen i to like deler', 34, anchor='start', bold=True)
    save(fig, '7-4-2-vinkelhalvering.svg')


def f_7_4_2_konstruere_60():
    fig = Fig('7')
    P = fig.p
    A = (400, 700)
    fig.line(220, 700, 1240, 700, P['main'], 6)
    Bp = (780, 700)
    Cp = (590, 371)
    # bue fra A og bue fra B (samme radius 380)
    angle_arc(fig, A[0], A[1], 380, -10, 78, P['text'], 4)
    angle_arc(fig, Bp[0], Bp[1], 380, 96, 144, P['text'], 4)
    fig.circle(Bp[0], Bp[1], 10, fill=P['text'])
    fig.circle(Cp[0], Cp[1], 11, fill=P['accent'])
    a60 = math.radians(60)
    fig.line(A[0], A[1], A[0] + 660 * math.cos(a60), A[1] - 660 * math.sin(a60),
             P['accent'], 6)
    angle_arc(fig, A[0], A[1], 130, 0, 60, P['extra'], 6)
    fig.text(A[0] + 185 * math.cos(math.radians(30)),
             A[1] - 185 * math.sin(math.radians(30)) + 10, '60°', 34, bold=True,
             color='#4D7A38')
    fig.circle(A[0], A[1], 11, fill=P['main'])
    fig.text(A[0] - 14, 752, 'A', 40, anchor='end', bold=True)
    bubble(fig, 1150, 200, 640, 110, 'Samme passeråpning hele tiden!',
           color=P['accent'], size=32)
    save(fig, '7-4-2-konstruere-60.svg')


def f_7_4_3_pytagoras_kvadrater():
    fig = Fig('7')
    P = fig.p
    u = 60
    Cx, Cy = 560, 540
    Ax, Ay = Cx, Cy - 3 * u
    Bx, By = Cx + 4 * u, Cy
    # kvadrat på katet 3 (venstre) - grønt, 3x3 ruter
    fig.rect(Cx - 3 * u, Ay, 3 * u, 3 * u, fill=P['extra'], opacity=0.3)
    for i in range(4):
        fig.line(Cx - 3 * u + i * u, Ay, Cx - 3 * u + i * u, Cy, P['extra'], 2.5)
        fig.line(Cx - 3 * u, Ay + i * u, Cx, Ay + i * u, P['extra'], 2.5)
    fig.text(Cx - 1.5 * u, Cy - 1.5 * u + 16, '9', 48, bold=True, color='#4D7A38')
    # kvadrat på katet 4 (under) - oransje, 4x4 ruter
    fig.rect(Cx, Cy, 4 * u, 4 * u, fill=P['accent'], opacity=0.3)
    for i in range(5):
        fig.line(Cx + i * u, Cy, Cx + i * u, Cy + 4 * u, P['accent'], 2.5)
        fig.line(Cx, Cy + i * u, Bx, Cy + i * u, P['accent'], 2.5)
    fig.text(Cx + 2 * u, Cy + 2 * u + 16, '16', 48, bold=True, color=P['accent'])
    # kvadrat på hypotenusen - petrolblått, 5x5 ruter
    hx, hy = (Bx - Ax) / 5, (By - Ay) / 5
    nx, ny = (By - Ay) / 5, -(Bx - Ax) / 5
    P1, P2 = (Ax, Ay), (Bx, By)
    P3 = (Bx + nx * 5, By + ny * 5)
    P4 = (Ax + nx * 5, Ay + ny * 5)
    fig.poly([P1, P2, P3, P4], fill=P['main'], opacity=0.3, close=True)
    for i in range(6):
        fig.line(Ax + hx * i, Ay + hy * i, Ax + hx * i + nx * 5, Ay + hy * i + ny * 5,
                 P['main'], 2.5)
        fig.line(Ax + nx * i, Ay + ny * i, Bx + nx * i, By + ny * i, P['main'], 2.5)
    fig.text((P1[0] + P3[0]) / 2, (P1[1] + P3[1]) / 2 + 16, '25', 48, bold=True,
             color=P['main'])
    # selve trekanten
    fig.poly([(Cx, Cy), (Bx, By), (Ax, Ay)], fill=P['bg'], stroke=P['text'],
             width=6, close=True)
    right_angle_mark(fig, (Cx, Cy), (1, 0), (0, -1), size=26)
    fig.text(Cx + 20, Cy - 1.3 * u + 12, '3', 38, anchor='start', bold=True)
    fig.text(Cx + 2 * u, Cy + 40, '4', 38, bold=True)
    fig.text((Ax + Bx) / 2 + 20, (Ay + By) / 2 - 22, '5', 38, anchor='start', bold=True)
    fig.text(1190, 400, '3² + 4² = 5²', 50, anchor='start', bold=True)
    fig.text(1190, 490, '9 + 16 = 25', 44, anchor='start', bold=True, color=P['accent'])
    save(fig, '7-4-3-pytagoras-kvadrater.svg')


def f_7_4_3_finn_hypotenus():
    fig = Fig('7')
    P = fig.p
    u = 58
    A, B, C = fig.right_triangle(300, 700, 8 * u, 6 * u,
                                 labels={'base': '8 cm', 'height': '6 cm'})
    fig.text((B[0] + C[0]) / 2 + 36, (B[1] + C[1]) / 2 - 20, 'x', 50,
             anchor='start', bold=True, italic=True, color=P['accent'])
    fig.text(1080, 360, 'x² = 36 + 64 = 100', 46, anchor='start', bold=True)
    fig.text(1080, 460, 'x = 10 cm', 50, anchor='start', bold=True, color=P['accent'])
    bubble(fig, 1190, 640, 600, 140, ['Alltid motsatt den', 'rette vinkelen'],
           color=P['accent'], size=32, tail=((B[0] + C[0]) / 2 + 60, (B[1] + C[1]) / 2 - 60))
    save(fig, '7-4-3-finn-hypotenus.svg')


def f_7_4_3_finn_katet():
    fig = Fig('7')
    P = fig.p
    u = 42
    A, B, C = fig.right_triangle(300, 700, 12 * u, 5 * u,
                                 labels={'hyp': '13 cm'})
    # katet 5 og hypotenus 13 er kjent - den lange kateten er x
    fig.text(A[0] - 26, (A[1] + C[1]) / 2 + 12, '5 cm', 36, anchor='end', bold=True)
    fig.text((A[0] + B[0]) / 2, A[1] + 48, 'x', 48, bold=True, italic=True,
             color=P['extra'])
    fig.text(1100, 360, 'x² = 169 − 25 = 144', 46, anchor='start', bold=True)
    fig.text(1100, 460, 'x = 12 cm', 50, anchor='start', bold=True, color=P['extra'])
    bubble(fig, 1190, 640, 620, 110, 'Kjenner du hypotenusen? Trekk fra!',
           color=P['extra'], size=30)
    save(fig, '7-4-3-finn-katet.svg')


def f_7_4_3_stige_vegg():
    fig = Fig('7')
    P = fig.p
    s = 110
    gx, gy = 420, 760
    topy = gy - 4 * s
    footx = gx + 3 * s
    fig.line(gx - 80, gy, footx + 320, gy, P['text'], 6)        # bakke
    fig.line(gx, gy, gx, topy - 80, P['main'], 11)              # vegg
    right_angle_mark(fig, (gx, gy), (1, 0), (0, -1), size=34)
    fig.line(footx, gy, gx, topy, P['accent'], 12)              # stige
    for t in range(1, 8):
        lx = footx + (gx - footx) * t / 8
        ly = gy + (topy - gy) * t / 8
        fig.line(lx - 20, ly - 13, lx + 20, ly + 13, P['accent'], 5)
    fig.text((footx + gx) / 2 + 60, (gy + topy) / 2, '5 m', 40, anchor='start',
             bold=True, color=P['accent'])
    dim(fig, gx, gy + 52, footx, gy + 52, '3 m', size=34, off=(0, 46))
    dim(fig, gx - 52, topy, gx - 52, gy, '4 m', size=34, off=(-66, 10), color=P['accent'])
    fig.text(1000, 380, 'høyde = √(5² − 3²) = 4 m', 44, anchor='start', bold=True)
    save(fig, '7-4-3-stige-vegg.svg')


def f_7_4_4_sammensatt_figur():
    fig = Fig('7')
    P = fig.p
    s = 90
    x, y = 320, 180
    # toppdel 8x3, bunndel 4x2
    fig.rect(x, y, 8 * s, 3 * s, fill=P['extra'], opacity=0.3)
    fig.rect(x, y + 3 * s, 4 * s, 2 * s, fill=P['accent'], opacity=0.3)
    fig.poly([(x, y), (x + 8 * s, y), (x + 8 * s, y + 3 * s), (x + 4 * s, y + 3 * s),
              (x + 4 * s, y + 5 * s), (x, y + 5 * s)], stroke=P['text'], width=6, close=True)
    fig.line(x, y + 3 * s, x + 4 * s, y + 3 * s, P['text'], 4, dash='14 12')
    fig.text(x + 4 * s, y + 1.5 * s + 14, '24 m²', 44, bold=True, color='#4D7A38')
    fig.text(x + 2 * s, y + 4 * s + 14, '8 m²', 40, bold=True, color=P['accent'])
    dim(fig, x, y - 42, x + 8 * s, y - 42, '8 m', size=34)
    dim(fig, x + 8 * s + 46, y, x + 8 * s + 46, y + 3 * s, '3 m', size=34, off=(64, 10))
    dim(fig, x - 46, y + 3 * s, x - 46, y + 5 * s, '2 m', size=34, off=(-62, 10))
    dim(fig, x, y + 5 * s + 46, x + 4 * s, y + 5 * s + 46, '4 m', size=34, off=(0, 48))
    bubble(fig, 1280, 520, 480, 150, ['Del figuren i biter', 'du kjenner!'],
           color=P['main'], size=32)
    fig.text(800, 820, '24 + 8 = 32 m²', 50, bold=True)
    save(fig, '7-4-4-sammensatt-figur.svg')


def f_7_4_4_arealformler_plakat():
    fig = Fig('7')
    P = fig.p
    panels = [(120, 100, P['main']), (840, 100, P['extra']),
              (120, 500, P['accent']), (840, 500, P['warn'])]
    for x, y, c in panels:
        fig.rect(x, y, 640, 360, stroke=c, width=5, rx=18)
    # rektangel
    x, y = 120, 100
    fig.rect(x + 70, y + 90, 260, 160, fill=P['main'], opacity=0.25)
    fig.rect(x + 70, y + 90, 260, 160, stroke=P['main'], width=5)
    fig.text(x + 200, y + 66, 'l', 34, bold=True, italic=True)
    fig.text(x + 44, y + 180, 'b', 34, bold=True, italic=True)
    fig.text(x + 470, y + 190, 'A = l · b', 42, bold=True)
    # trekant
    x, y = 840, 100
    A1, B1, T1 = (x + 60, y + 280), (x + 360, y + 280), (x + 260, y + 80)
    fig.poly([A1, B1, T1], fill=P['extra'], opacity=0.25, close=True)
    fig.poly([A1, B1, T1], stroke=P['extra'], width=5, close=True)
    fig.line(T1[0], T1[1], T1[0], A1[1], P['text'], 3, dash='9 8')
    right_angle_mark(fig, (T1[0], A1[1]), (-1, 0), (0, -1), size=20, width=3)
    fig.text(T1[0] + 22, y + 190, 'h', 32, anchor='start', bold=True, italic=True)
    fig.text((A1[0] + B1[0]) / 2, A1[1] + 42, 'g', 32, bold=True, italic=True)
    fig.text(x + 500, y + 190, 'A = g · h : 2', 40, bold=True, anchor='middle')
    # parallellogram
    x, y = 120, 500
    pts = [(x + 60, y + 280), (x + 320, y + 280), (x + 390, y + 100), (x + 130, y + 100)]
    fig.poly(pts, fill=P['accent'], opacity=0.25, close=True)
    fig.poly(pts, stroke=P['accent'], width=5, close=True)
    fig.line(x + 300, y + 100, x + 300, y + 280, P['text'], 3, dash='9 8')
    right_angle_mark(fig, (x + 300, y + 280), (-1, 0), (0, -1), size=20, width=3)
    fig.text(x + 322, y + 200, 'h', 32, anchor='start', bold=True, italic=True)
    fig.text(x + 190, y + 322, 'g', 32, bold=True, italic=True)
    fig.text(x + 500, y + 190, 'A = g · h', 40, bold=True)
    # sirkel
    x, y = 840, 500
    cx, cy, r = x + 200, y + 180, 130
    fig.circle(cx, cy, r, fill=P['warn'], opacity=0.25)
    fig.circle(cx, cy, r, stroke=GUL_TXT, width=5)
    fig.circle(cx, cy, 7, fill=P['text'])
    fig.arrow(cx, cy, cx + r - 6, cy, P['text'], 4, head=12)
    fig.text(cx + r / 2, cy - 18, 'r', 32, bold=True, italic=True)
    fig.text(x + 480, y + 190, 'A = π · r²', 40, bold=True)
    save(fig, '7-4-4-arealformler-plakat.svg')


def f_7_4_4_sylinder_volum():
    fig = Fig('7')
    P = fig.p
    cx, ytop, rx, h = 480, 240, 175, 380
    ry = rx * 0.3
    yb = ytop + h
    # grunnflate (bunn) fremhevet
    fig.raw(f'<ellipse cx="{cx}" cy="{yb}" rx="{rx}" ry="{ry}" fill="{P["accent"]}" opacity="0.6"/>')
    fig.line(cx - rx, ytop, cx - rx, yb, P['main'], 5)
    fig.line(cx + rx, ytop, cx + rx, yb, P['main'], 5)
    fig.raw(f'<path d="M {cx - rx},{yb} A {rx},{ry} 0 0 0 {cx + rx},{yb}" fill="none" '
            f'stroke="{P["main"]}" stroke-width="5"/>')
    fig.raw(f'<path d="M {cx - rx},{yb} A {rx},{ry} 0 0 1 {cx + rx},{yb}" fill="none" '
            f'stroke="{P["main"]}" stroke-width="5" stroke-dasharray="10 9"/>')
    fig.raw(f'<ellipse cx="{cx}" cy="{ytop}" rx="{rx}" ry="{ry}" fill="{P["bg"]}" '
            f'stroke="{P["main"]}" stroke-width="5"/>')
    fig.circle(cx, ytop, 7, fill=P['text'])
    fig.arrow(cx, ytop, cx + rx - 8, ytop, P['text'], 4, head=12)
    fig.text(cx + rx / 2, ytop - 70, 'r = 5 cm', 34, bold=True)
    dim(fig, cx + rx + 60, ytop, cx + rx + 60, yb, 'h = 10 cm', size=34, off=(96, 10))
    fig.text(cx, yb + 110, 'grunnflate: π · r² ≈ 78,5 cm²', 34, color=P['accent'], bold=True)
    fig.arrow(cx + 110, yb + 80, cx + 50, yb + 16, P['accent'], 4, head=13)
    # skivestabel
    sx, sy = 1230, 580
    for k in range(6):
        yy = sy - k * 52
        fig.raw(f'<ellipse cx="{sx}" cy="{yy}" rx="130" ry="34" fill="{P["bg"]}" '
                f'stroke="{P["main"]}" stroke-width="4"/>')
    fig.text(sx, 700, 'sirkler stablet i høyden', 30)
    fig.text(800, 850, 'Volum = grunnflate · høyde ≈ 785 cm³', 44, bold=True)
    save(fig, '7-4-4-sylinder-volum.svg')


# ================================================================ KAPITTEL 5

def f_7_5_2_diagramvelger():
    fig = Fig('7')
    P = fig.p
    panels = [(110, 'Søyler:', 'sammenligne antall'),
              (610, 'Linje:', 'endring over tid'),
              (1110, 'Sektor:', 'deler av en helhet')]
    pw, ph, py = 380, 560, 130
    for i, (x, t1, t2) in enumerate(panels):
        fig.rect(x, py, pw, ph, stroke=P['grid'], width=4, rx=18)
        fig.text(x + pw / 2, py + ph + 70, t1, 36, bold=True)
        fig.text(x + pw / 2, py + ph + 118, t2, 32)
    # mini søylediagram
    x = 110
    bx, bb = x + 60, py + 440
    for k, (hgt, c) in enumerate([(180, P['main']), (290, P['accent']), (230, P['extra'])]):
        fig.rect(bx + k * 95, bb - hgt, 64, hgt, fill=c, rx=6)
    fig.line(bx - 20, bb, bx + 300, bb, P['text'], 4)
    fig.line(bx - 20, bb, bx - 20, py + 80, P['text'], 4)
    # mini linjediagram
    x = 610
    lx, lb = x + 50, py + 440
    pts = [(lx, lb - 80), (lx + 100, lb - 200), (lx + 200, lb - 150), (lx + 290, lb - 310)]
    fig.poly(pts, stroke=P['accent'], width=6)
    for px, pyy in pts:
        fig.circle(px, pyy, 10, fill=P['main'])
    fig.line(lx - 20, lb, lx + 310, lb, P['text'], 4)
    fig.line(lx - 20, lb, lx - 20, py + 80, P['text'], 4)
    # mini sektordiagram
    x = 1110
    fig.pie(x + pw / 2, py + 270, 150, [(0.5, P['main'], None), (0.3, P['accent'], None),
                                        (0.2, P['warn'], None)])
    save(fig, '7-5-2-diagramvelger.svg')


def f_7_5_2_regneark_diagram():
    fig = Fig('7')
    P = fig.p
    x0, y0 = 130, 160
    cols = [60, 200, 290]
    rh = 84
    # kolonnebokstaver
    fig.rect(x0, y0, cols[0], rh, fill=P['grid'], stroke=P['text'], width=3)
    for i, letter in enumerate(['A', 'B']):
        cx = x0 + cols[0] + sum(cols[1:i + 1])
        fig.rect(cx, y0, cols[i + 1], rh, fill=P['grid'], stroke=P['text'], width=3)
        fig.text(cx + cols[i + 1] / 2, y0 + rh / 2 + 11, letter, 32, bold=True)
    rows = [('1', 'Måned', 'Solgte boller'), ('2', 'jan', '40'), ('3', 'feb', '55'),
            ('4', 'mar', '35'), ('5', 'apr', '60')]
    for r, row in enumerate(rows):
        yy = y0 + (r + 1) * rh
        cx = x0
        for c, val in enumerate(row):
            fig.rect(cx, yy, cols[c], rh, stroke=P['text'], width=3,
                     fill=P['grid'] if c == 0 else P['bg'])
            fig.text(cx + cols[c] / 2, yy + rh / 2 + 11, val, 30, bold=(r == 0 and c > 0))
            cx += cols[c]
    # markert område
    fig.rect(x0 + cols[0], y0 + rh, cols[1] + cols[2], 5 * rh,
             stroke=P['main'], width=7)
    fig.arrow(750, 420, 860, 420, P['accent'], 8, head=20)
    # søylediagram
    bx0, bb = 920, 640
    vals = [40, 55, 35, 60]
    labs = ['jan', 'feb', 'mar', 'apr']
    for k, v in enumerate(vals):
        hgt = v * 6
        fig.rect(bx0 + k * 130, bb - hgt, 90, hgt, fill=P['main'], rx=8)
        fig.text(bx0 + k * 130 + 45, bb - hgt - 18, str(v), 30, bold=True)
        fig.text(bx0 + k * 130 + 45, bb + 44, labs[k], 30)
    fig.line(bx0 - 30, bb, bx0 + 4 * 130, bb, P['text'], 4)
    fig.line(bx0 - 30, bb, bx0 - 30, 200, P['text'], 4)
    fig.text(bx0 - 44, 180, 'Antall', 28, anchor='start', italic=True)
    bubble(fig, 800, 810, 760, 100, 'Marker tallene – velg diagram!',
           color=P['accent'], size=34)
    save(fig, '7-5-2-regneark-diagram.svg')


def f_7_5_3_lommepenger_budsjett():
    fig = Fig('7')
    P = fig.p
    fig.text(520, 110, '500 kr i alt', 44, bold=True)
    cx, cy, r = 520, 510, 300
    slices = [(0.4, P['extra'], '40 %'), (0.3, P['accent'], '30 %'),
              (0.2, P['warn'], '20 %'), (0.1, P['main'], None)]
    fig.pie(cx, cy, r, slices)
    legend = [(P['extra'], 'Sparing 200 kr (40 %)'), (P['accent'], 'Fritid 150 kr (30 %)'),
              (P['warn'], 'Snacks 100 kr (20 %)'), (P['main'], 'Annet 50 kr (10 %)')]
    for i, (c, lab) in enumerate(legend):
        y = 300 + i * 100
        fig.rect(960, y, 52, 52, fill=c, rx=10)
        fig.text(1036, y + 38, lab, 34, anchor='start', bold=True)
    save(fig, '7-5-3-lommepenger-budsjett.svg')


def f_7_5_4_rabatt():
    fig = Fig('7')
    P = fig.p
    ROD = '#D64545'
    # prislapp
    fig.poly([(250, 130), (560, 130), (610, 200), (560, 270), (250, 270)],
             fill=P['warn'], opacity=0.25, close=True)
    fig.poly([(250, 130), (560, 130), (610, 200), (560, 270), (250, 270)],
             stroke=GUL_TXT, width=5, close=True)
    fig.circle(580, 200, 9, fill=GUL_TXT)
    fig.text(405, 214, 'Jakke: 800 kr', 38, bold=True)
    # salgsskilt
    fig.rect(950, 130, 400, 140, fill=ROD, opacity=0.12)
    fig.rect(950, 130, 400, 140, stroke=ROD, width=6, rx=18)
    fig.text(1150, 214, '25 % rabatt', 42, bold=True, color=ROD)
    # stav delt i fire
    x, w, h = 240, 1120, 130
    dim(fig, x, 390, x + w, 390, '800 kr', size=36)
    choco(fig, x, 440, w, h, 4, [P['extra']] * 3 + [None])
    lx = x + w * 7 / 8
    fig.line(lx - 90, 470, lx + 90, 440 + h - 30, ROD, 7)
    fig.line(lx + 90, 470, lx - 90, 440 + h - 30, ROD, 7)
    fig.text(x + w * 3 / 8, 640, 'ny pris: 600 kr', 38, color='#4D7A38', bold=True)
    fig.text(lx, 640, 'rabatt: 200 kr', 34, color=ROD, bold=True)
    fig.text(800, 800, '800 − 200 = 600 kr', 48, bold=True)
    save(fig, '7-5-4-rabatt.svg')


def f_7_5_4_prosentvis_endring():
    fig = Fig('7')
    P = fig.p
    fig.text(800, 110, 'Bussbilletten', 44, bold=True)
    bb = 680
    px_per_kr = 8
    # i fjor: 40 kr
    fig.rect(500, bb - 40 * px_per_kr, 180, 40 * px_per_kr, fill=P['main'], rx=10)
    fig.text(590, bb - 40 * px_per_kr - 22, '40 kr', 36, bold=True)
    fig.text(590, bb + 50, 'i fjor', 34)
    # i år: 50 kr = 40 + 10
    fig.rect(900, bb - 40 * px_per_kr, 180, 40 * px_per_kr, fill=P['main'], rx=0)
    fig.rect(900, bb - 50 * px_per_kr, 180, 10 * px_per_kr, fill=P['accent'], rx=0)
    fig.text(990, bb - 50 * px_per_kr - 22, '50 kr', 36, bold=True)
    fig.text(990, bb + 50, 'i år', 34)
    fig.text(1120, bb - 45 * px_per_kr + 10, '+10 kr', 36, anchor='start',
             color=P['accent'], bold=True)
    fig.line(440, bb, 1180, bb, P['text'], 5)
    fig.text(800, 830, '10 : 40 = 25 % økning', 46, bold=True)
    save(fig, '7-5-4-prosentvis-endring.svg')


if __name__ == '__main__':
    f_7_1_1_tallinje_hopp()
    f_7_1_2_regnetrapp()
    f_7_1_3_brok_gange_areal()
    f_7_1_3_dele_pa_halv()
    f_7_1_3_omvendt_brok()
    f_7_1_4_potens_dobling()
    f_7_2_1_samle_ledd()
    f_7_2_3_ulikhet_tallinje()
    f_7_3_1_fire_kvadranter()
    f_7_3_2_stigningstall()
    f_7_3_3_avstand_tid()
    f_7_3_3_bratt_og_slak()
    f_7_4_1_vinkelsum_180()
    f_7_4_1_ukjent_vinkel()
    f_7_4_1_trekanttyper_vinkler()
    f_7_4_2_midtnormal()
    f_7_4_2_vinkelhalvering()
    f_7_4_2_konstruere_60()
    f_7_4_3_pytagoras_kvadrater()
    f_7_4_3_finn_hypotenus()
    f_7_4_3_finn_katet()
    f_7_4_3_stige_vegg()
    f_7_4_4_sammensatt_figur()
    f_7_4_4_arealformler_plakat()
    f_7_4_4_sylinder_volum()
    f_7_5_2_diagramvelger()
    f_7_5_2_regneark_diagram()
    f_7_5_3_lommepenger_budsjett()
    f_7_5_4_rabatt()
    f_7_5_4_prosentvis_endring()
