#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk 2P-Y.

Kjør fra repo-rot:  python3 scripts/svg/figurer-2py.py
Output: public/images/content/2py/*.svg
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, W, H, fmt  # noqa: E402

BOOK = '2py'
ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
OUT = os.path.join(ROOT, 'public', 'images', 'content', BOOK)
GREEN = '#3A8F5A'
RED = '#C0504D'


def save(fig, name):
    print('skrev', fig.save(os.path.join(OUT, name + '.svg')))


# ---------- nye primitiver (lokale hjelpefunksjoner) ----------

def htable(fig, x, y, col_w, row_h, rows, aligns=None, header=True,
           hl_rows=(), hl_color=None, size=28, bold_cells=(), color_cells=None):
    """Enkel tabell. rows = liste av rader (liste av celletekster, None = tom)."""
    xs = [x]
    for wc in col_w:
        xs.append(xs[-1] + wc)
    n = len(rows)
    for r in hl_rows:
        fig.rect(x, y + r * row_h, xs[-1] - x, row_h, fill=hl_color or fig.p['accent'], opacity=0.18)
    for i in range(n + 1):
        heavy = (i == 0 or i == n or (header and i == 1))
        fig.line(x, y + i * row_h, xs[-1], y + i * row_h,
                 fig.p['main'] if heavy else fig.p['grid'], 3 if heavy else 2)
    for vx in xs[1:-1]:
        fig.line(vx, y, vx, y + n * row_h, fig.p['grid'], 2)
    for vx in (xs[0], xs[-1]):
        fig.line(vx, y, vx, y + n * row_h, fig.p['main'], 3)
    color_cells = color_cells or {}
    for r, row in enumerate(rows):
        for c, val in enumerate(row):
            if val is None:
                continue
            a = aligns[c] if aligns else 'center'
            bold = (header and r == 0) or (r, c) in bold_cells
            col = color_cells.get((r, c))
            ty = y + r * row_h + row_h / 2 + size * 0.36
            if a == 'left':
                fig.text(xs[c] + 18, ty, val, size, anchor='start', bold=bold, color=col)
            elif a == 'right':
                fig.text(xs[c + 1] - 18, ty, val, size, anchor='end', bold=bold, color=col)
            else:
                fig.text((xs[c] + xs[c + 1]) / 2, ty, val, size, bold=bold, color=col)
    return xs


def boxplot(fig, tx, yc, mn, q1, med, q3, mx, h=130, color=None, fill=None):
    """Boksplott over en tallinje-mapping tx."""
    c = color or fig.p['main']
    fig.line(tx(mn), yc, tx(q1), yc, c, 4)
    fig.line(tx(q3), yc, tx(mx), yc, c, 4)
    for v in (mn, mx):
        fig.line(tx(v), yc - h * 0.3, tx(v), yc + h * 0.3, c, 4)
    if fill:
        fig.rect(tx(q1), yc - h / 2, tx(q3) - tx(q1), h, fill=fill, opacity=0.3)
    fig.rect(tx(q1), yc - h / 2, tx(q3) - tx(q1), h, stroke=c, width=4)
    fig.line(tx(med), yc - h / 2, tx(med), yc + h / 2, c, 6)


def dim_h(fig, x1, x2, y, label, color=None, size=30, above=True):
    c = color or fig.p['text']
    fig.arrow(x1, y, x2, y, c, 3, head=12)
    fig.arrow(x2, y, x1, y, c, 3, head=12)
    fig.text((x1 + x2) / 2, y - 14 if above else y + 40, label, size, bold=True)


def dim_v(fig, x, y1, y2, label, color=None, size=30, anchor='end', dx=-16):
    c = color or fig.p['text']
    fig.arrow(x, y1, x, y2, c, 3, head=12)
    fig.arrow(x, y2, x, y1, c, 3, head=12)
    fig.text(x + dx, (y1 + y2) / 2 + 10, label, size, anchor=anchor, bold=True)


def brace_h(fig, x1, x2, y, label=None, color=None, tick=16, size=28, lab_dy=44):
    """Hakeparentes under noe (tikker peker opp), etikett under."""
    c = color or fig.p['text']
    fig.line(x1, y, x2, y, c, 3.5)
    fig.line(x1, y, x1, y - tick, c, 3.5)
    fig.line(x2, y, x2, y - tick, c, 3.5)
    if label:
        fig.text((x1 + x2) / 2, y + lab_dy, label, size, bold=True)


def check(fig, x, y, s=22, color=GREEN, w=8):
    fig.poly([(x - s, y), (x - s * 0.25, y + s * 0.7), (x + s, y - s * 0.8)], stroke=color, width=w)


def crossmark(fig, x, y, s=18, color=None, w=8):
    c = color or fig.p['warn']
    fig.line(x - s, y - s, x + s, y + s, c, w)
    fig.line(x - s, y + s, x + s, y - s, c, w)


def ellipse(fig, cx, cy, rx, ry, fill=None, stroke=None, width=3, opacity=1, dash=None):
    f = fill or 'none'
    s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
    d = f' stroke-dasharray="{dash}"' if dash else ''
    fig.raw(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="{f}"{s}{d} opacity="{opacity}"/>')


def arc_h(fig, x1, x2, y, ry, color, width=4, lower=True, dash=None):
    """Halv-ellipsebue mellom (x1,y) og (x2,y); lower=True gir buk nedover."""
    rx = abs(x2 - x1) / 2
    sweep = 0 if lower else 1
    d = f' stroke-dasharray="{dash}"' if dash else ''
    fig.raw(f'<path d="M {x1:.1f},{y:.1f} A {rx:.1f},{ry:.1f} 0 0 {sweep} {x2:.1f},{y:.1f}" '
            f'fill="none" stroke="{color}" stroke-width="{width}"{d}/>')


def angle_arc(fig, cx, cy, r, a1, a2, color=None, width=4, label=None, lsize=30, lr_extra=40):
    """Vinkelbue fra a1 til a2 grader (matematisk retning, y opp)."""
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1))
    x2, y2 = cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2))
    c = color or fig.p['accent']
    fig.raw(f'<path d="M {x1:.1f},{y1:.1f} A {r},{r} 0 0 0 {x2:.1f},{y2:.1f}" fill="none" stroke="{c}" stroke-width="{width}"/>')
    if label:
        am = math.radians((a1 + a2) / 2)
        fig.text(cx + (r + lr_extra) * math.cos(am), cy - (r + lr_extra) * math.sin(am) + 10,
                 label, lsize, bold=True, italic=True)


def right_angle(fig, x, y, s, dx, dy, color=None):
    """Rett vinkel-symbol i hjørnet (x,y); dx,dy = ±1 angir retning innover."""
    c = color or fig.p['accent']
    fig.poly([(x + dx * s, y), (x + dx * s, y + dy * s), (x, y + dy * s)], stroke=c, width=3)


SUPS = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
        '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻', '−': '⁻'}


def sup(n):
    return ''.join(SUPS[ch] for ch in str(n))


def scatter(fig, tx, ty, pts, r=8, color=None):
    for x, y in pts:
        fig.circle(tx(x), ty(y), r, fill=color or fig.p['main'])


def panel_axes(fig, x0, y0, x1, y1, color=None):
    """Enkle akser (L-form) for småpaneler."""
    c = color or fig.p['text']
    fig.arrow(x0, y1, x1 + 16, y1, c, 3)
    fig.arrow(x0, y1, x0, y0 - 16, c, 3)


def price_tag(fig, cx, cy, w, h, label, size=32, fill=None, tcol=None):
    """Prislapp med spiss venstreende og hull."""
    tip = h * 0.55
    pts = [(cx - w / 2 + tip, cy - h / 2), (cx + w / 2, cy - h / 2),
           (cx + w / 2, cy + h / 2), (cx - w / 2 + tip, cy + h / 2), (cx - w / 2, cy)]
    fig.poly(pts, fill=fill or fig.p['bg'], stroke=fig.p['main'], width=4, close=True)
    fig.circle(cx - w / 2 + tip * 0.65, cy, 7, fill=fig.p['bg'], stroke=fig.p['main'], width=3)
    fig.text(cx + tip / 4, cy + size * 0.36, label, size, bold=True, color=tcol)


def cylinder(fig, cx, ytop, rx, ry, h, fill_top=None, stroke=None, width=4):
    """Sylinder i perspektiv: toppellipse, sider, frontbue i bunn (+ stiplet bakbue)."""
    c = stroke or fig.p['main']
    yb = ytop + h
    fig.line(cx - rx, ytop, cx - rx, yb, c, width)
    fig.line(cx + rx, ytop, cx + rx, yb, c, width)
    arc_h(fig, cx - rx, cx + rx, yb, ry, c, width, lower=True)
    arc_h(fig, cx - rx, cx + rx, yb, ry, c, 2.5, lower=False, dash='8 9')
    ellipse(fig, cx, ytop, rx, ry, fill=fill_top, stroke=c, width=width)


def yellow_box(fig, x, y, w, h, lines, size=29):
    """Signalgul merkeboks med tekstlinjer."""
    fig.rect(x, y, w, h, fill=fig.p['accent'], opacity=0.16, rx=12)
    fig.rect(x, y, w, h, stroke=fig.p['accent'], width=4, rx=12)
    n = len(lines)
    for i, ln in enumerate(lines):
        fig.text(x + w / 2, y + h / 2 + (i - (n - 1) / 2) * (size + 12) + size * 0.36, ln, size, bold=True)


# ---------- Kapittel 1: Økonomi ----------

def f_laerlingbudsjett():
    fig = Fig(BOOK)
    fig.title('Månedsbudsjett for en lærling')
    rows = [['Post', 'Kr'],
            ['Lærlinglønn', '14 000'],
            ['Husleie', '5 500'],
            ['Mat', '3 500'],
            ['Transport', '2 000'],
            ['Sparing', '3 000'],
            ['Sum utgifter', '14 000']]
    htable(fig, 170, 150, [360, 240], 88, rows, header=True,
           aligns=['left', 'right'], bold_cells={(6, 0), (6, 1)},
           hl_rows=(1,), hl_color=fig.p['main'])
    check(fig, 230, 818, 20)
    fig.text(270, 828, 'budsjettet går opp', 29, anchor='start', bold=True, color=GREEN)
    # sektordiagram med de fire utgiftspostene
    cx, cy, r = 1130, 470, 280
    sl = [(5500 / 14000, fig.p['main'], 'Husleie'),
          (3500 / 14000, fig.p['extra'], 'Mat'),
          (2000 / 14000, fig.p['warn'], 'Transport'),
          (3000 / 14000, fig.p['accent'], 'Sparing')]
    fig.pie(cx, cy, r, sl)
    fig.text(cx, cy + r + 70, 'slik fordeles lønnen', 29)
    save(fig, '2py-1-1-laerlingbudsjett')


def f_billan():
    fig = Fig(BOOK)
    fig.title('Billån: 200 000 kr over 5 år')
    tx, ty = fig.coords(0, 60, 0, 230000, box=(220, 150, 1000, 700),
                        xticks=[0, 12, 24, 36, 48, 60], yticks=[50000, 100000, 150000, 200000],
                        xlabel='Måneder', ylabel='Restgjeld (kr)', tick_size=24)
    # restgjeld synker trinnvis (halvårlige trinn à 20 000)
    pts = []
    for k in range(10):
        x0, x1 = k * 6, (k + 1) * 6
        v = 200000 - k * 20000
        pts += [(tx(x0), ty(v)), (tx(x1), ty(v))]
    pts.append((tx(60), ty(0)))
    fig.poly(pts, stroke=fig.p['main'], width=5)
    # tre terminbeløp-staver: avdrag likt, rentedel krymper
    bx0, bw = 1120, 100
    for i, (lab, rente) in enumerate([('start', 90), ('midt', 50), ('slutt', 12)]):
        x = bx0 + i * (bw + 50)
        fig.rect(x, 640 - 130, bw, 130, fill=fig.p['main'])
        fig.rect(x, 640 - 130 - rente, bw, rente, fill=fig.p['accent'])
        fig.text(x + bw / 2, 682, lab, 26)
    fig.text(1330, 400, 'renter', 27, color=fig.p['accent'], bold=True)
    fig.text(1320, 560, 'avdrag', 27, color='#FFFFFF', bold=True)
    fig.text(1245, 760, 'terminbeløp = avdrag + renter', 28, bold=True)
    fig.text(W / 2 - 180, 850, 'rentedelen krymper etter hvert som gjelden synker', 29)
    save(fig, '2py-1-2-billan')


def f_mva_faktura():
    fig = Fig(BOOK)
    # fakturaark
    fx, fy, fw, fh = 200, 110, 660, 660
    fig.rect(fx, fy, fw, fh, stroke=fig.p['main'], width=4, rx=10)
    fig.text(fx + 40, fy + 80, 'FAKTURA', 40, anchor='start', bold=True)
    fig.line(fx + 40, fy + 110, fx + fw - 40, fy + 110, fig.p['main'], 3)
    linjer = [('Arbeid', '8 000 kr', False, False),
              ('Materialer', '4 000 kr', False, False),
              ('Sum eks. mva', '12 000 kr', True, False),
              ('+ 25 % mva', '3 000 kr', False, True),
              ('Å betale', '15 000 kr', True, False)]
    for i, (t, v, bold, hl) in enumerate(linjer):
        ly = fy + 190 + i * 100
        if hl:
            fig.rect(fx + 24, ly - 56, fw - 48, 84, fill=fig.p['accent'], opacity=0.22, rx=8)
        fig.text(fx + 50, ly, t, 31, anchor='start', bold=bold)
        fig.text(fx + fw - 50, ly, v, 31, anchor='end', bold=bold)
        if i == 3:
            fig.line(fx + 40, ly + 44, fx + fw - 40, ly + 44, fig.p['main'], 3)
    # piler til høyre: · 1,25 og : 1,25
    bx = 980
    fig.rect(bx, 230, 420, 100, stroke=fig.p['main'], width=4, rx=12)
    fig.text(bx + 210, 292, 'uten mva: 12 000 kr', 30, bold=True)
    fig.rect(bx, 560, 420, 100, stroke=fig.p['main'], width=4, rx=12)
    fig.text(bx + 210, 622, 'med mva: 15 000 kr', 30, bold=True)
    fig.arrow(bx + 110, 340, bx + 110, 550, fig.p['accent'], 5, head=16)
    fig.text(bx + 88, 455, '· 1,25', 32, anchor='end', bold=True, color=fig.p['accent'])
    fig.arrow(bx + 310, 550, bx + 310, 340, fig.p['main'], 5, head=16)
    fig.text(bx + 332, 455, ': 1,25', 32, anchor='start', bold=True, color=fig.p['main'])
    save(fig, '2py-1-3-mva-faktura')


def f_resultat_kafe():
    fig = Fig(BOOK)
    fig.title('Resultat = inntekter − kostnader')
    s = 0.0045  # px per kr
    base = 740
    # inntektssøyle
    ih = 120000 * s
    fig.rect(330, base - ih, 240, ih, fill=fig.p['main'])
    fig.text(450, base - ih / 2 - 20, 'Inntekter', 31, color='#FFFFFF', bold=True)
    fig.text(450, base - ih / 2 + 26, '120 000 kr', 31, color='#FFFFFF', bold=True)
    # kostnadsstabel + resultat
    poster = [('Varekjøp 40 000', 40000, fig.p['extra']),
              ('Lønn 45 000', 45000, fig.p['main']),
              ('Husleie 15 000', 15000, fig.p['extra']),
              ('Annet 8 000', 8000, fig.p['main'])]
    x, acc = 800, 0
    for lab, v, c in poster:
        hh = v * s
        fig.rect(x, base - acc - hh, 240, hh, fill=c, opacity=0.85)
        fig.rect(x, base - acc - hh, 240, hh, stroke=fig.p['bg'], width=3)
        fig.text(x + 260, base - acc - hh / 2 + 9, lab, 28, anchor='start')
        acc += hh
    rh = 12000 * s
    fig.rect(x, base - acc - rh, 240, rh, fill=fig.p['accent'])
    fig.text(x + 260, base - acc - rh / 2 + 9, 'Resultat: + 12 000 kr', 29, anchor='start', bold=True, color=fig.p['accent'])
    fig.line(330, base - ih, x + 240, base - ih, fig.p['text'], 2.5, dash='9 9')
    fig.line(250, base, 1380, base, fig.p['text'], 3)
    fig.text(W / 2, 840, 'kostnader + resultat = inntekter', 30)
    save(fig, '2py-1-4-resultat-kafe')


# ---------- Kapittel 2: Funksjoner og modellering ----------

def f_timelonn():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 40, 0, 8000, box=(220, 130, 1380, 720),
                        xticks=[10, 20, 30, 40], yticks=[1800, 3600, 5400, 7200],
                        xlabel='Timer', ylabel='Lønn (kr)', tick_size=24)
    fig.plot(lambda x: 180 * x, 0, 40, color=fig.p['main'], width=5)
    for x in (10, 20):
        fig.line(tx(x), ty(0), tx(x), ty(180 * x), fig.p['grid'], 2.5, dash='8 8')
        fig.line(tx(0), ty(180 * x), tx(x), ty(180 * x), fig.p['grid'], 2.5, dash='8 8')
        fig.point(x, 180 * x, f'({x}, {fmt(180 * x)})', dx=20, dy=-18)
    # stigningstrinn
    fig.line(tx(26), ty(180 * 26), tx(31), ty(180 * 26), fig.p['accent'], 4)
    fig.line(tx(31), ty(180 * 26), tx(31), ty(180 * 31), fig.p['accent'], 4)
    fig.text(tx(32), ty(180 * 28.5) + 10, '180 kr per time', 29, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(620, 830, 'lønn = 180 · timer', 32, bold=True)
    save(fig, '2py-2-1-timelonn-graf')


def f_vekstfaktor():
    fig = Fig(BOOK)
    fig.title('Vekstfaktor: 5 % økning to år på rad')
    y = 330
    price_tag(fig, 330, y, 330, 130, '1 000 kr')
    price_tag(fig, 800, y, 330, 130, '1 050 kr')
    price_tag(fig, 1280, y, 360, 130, '1 102,50 kr')
    for x1, x2 in [(500, 615), (970, 1080)]:
        fig.arrow(x1, y, x2, y, fig.p['accent'], 6, head=18)
        fig.text((x1 + x2) / 2, y - 30, '· 1,05', 31, bold=True, color=fig.p['accent'])
    yellow_box(fig, 330, 540, 940, 150,
               ['1,05 · 1,05 = 1,1025', '→ 10,25 % økning, ikke 10 %'], size=32)
    save(fig, '2py-2-2-vekstfaktor')


def f_break_even_2py():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 200, 0, 32000, box=(220, 130, 1380, 700),
                        xticks=[50, 100, 150, 200], yticks=[6000, 12000, 18000, 24000, 30000],
                        xlabel='Antall fuglekasser', ylabel='Kroner', tick_size=24)
    fig.plot(lambda x: 6000 + 50 * x, 0, 200, color=fig.p['main'], width=5)
    fig.plot(lambda x: 150 * x, 0, 200, color=fig.p['accent'], width=5)
    fig.text(tx(165), ty(6000 + 50 * 165) - 24, 'kostnader', 30, bold=True, color=fig.p['main'])
    fig.text(tx(140), ty(150 * 140) - 24, 'inntekter', 30, bold=True, color=fig.p['accent'])
    fig.line(tx(60), ty(0), tx(60), ty(9000), fig.p['text'], 2.5, dash='8 8')
    fig.circle(tx(60), ty(9000), 14, fill=fig.p['bg'], stroke=fig.p['warn'], width=6)
    fig.text(tx(62), ty(9000) - 60, 'break-even: 60 kasser', 30, bold=True, color=fig.p['warn'], anchor='start')
    fig.text(W / 2, 830, 'til venstre: underskudd — til høyre: overskudd', 29)
    save(fig, '2py-2-3-break-even')


def f_verditap():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 10, 0, 450000, box=(240, 130, 1380, 700),
                        xticks=[2, 4, 6, 8, 10], yticks=[100000, 200000, 300000, 400000],
                        xlabel='Alder (år)', ylabel='Verdi (kr)', tick_size=24)
    fig.plot(lambda x: 400000 * 0.85 ** x, 0, 10, color=fig.p['main'], width=5)
    fig.point(0, 400000, '400 000 kr', dx=24, dy=4)
    v5 = 400000 * 0.85 ** 5
    fig.line(tx(5), ty(0), tx(5), ty(v5), fig.p['text'], 2.5, dash='8 8')
    fig.line(tx(0), ty(v5), tx(5), ty(v5), fig.p['text'], 2.5, dash='8 8')
    fig.point(5, v5, 'ca. 177 000 kr', dx=24, dy=-26)
    fig.text(tx(5.6), ty(290000), 'V = 400 000 · 0,85ˣ', 32, anchor='start', bold=True, color=fig.p['main'])
    fig.text(W / 2, 830, '15 % verditap per år gir vekstfaktor 0,85', 30, bold=True)
    save(fig, '2py-2-4-verditap-varebil')


# ---------- Kapittel 3: Geometri i yrkesfag ----------

def f_male_vegg():
    fig = Fig(BOOK)
    s = 188  # px per meter
    x0, y0 = 210, 170
    vw, vh = 5.0 * s, 2.4 * s
    fig.rect(x0, y0, vw, vh, fill=fig.p['main'], opacity=0.12)
    fig.rect(x0, y0, vw, vh, stroke=fig.p['main'], width=5)
    dw, dh = 0.9 * s, 2.1 * s
    dx0, dy0 = x0 + 3.5 * s, y0 + vh - dh
    fig.rect(dx0, dy0, dw, dh, fill=fig.p['bg'], stroke=fig.p['accent'], width=5)
    dim_h(fig, x0, x0 + vw, y0 - 40, '5,0 m')
    dim_v(fig, x0 - 44, y0, y0 + vh, '2,4 m')
    fig.text(dx0 + dw / 2, dy0 - 18, 'dør: 0,9 m × 2,1 m', 27, color=fig.p['accent'], bold=True)
    fig.text(x0 + 1.6 * s, y0 + 1.3 * s, 'vegg: 12,0 m²', 31, color=fig.p['main'], bold=True)
    fig.text(dx0 + dw / 2, dy0 + dh / 2 + 10, '1,89 m²', 27, color=fig.p['accent'], bold=True)
    fig.text(W / 2, 820, 'å male: 12,0 − 1,89 = 10,11 m²', 34, bold=True)
    save(fig, '2py-3-1-male-vegg')


def f_gulvlegging():
    fig = Fig(BOOK)
    fig.title('Gulvlegging: hvor mye parkett?')
    s = 135
    x0, y0 = 220, 190
    rw, rh = 4.2 * s, 3.6 * s
    fig.rect(x0, y0, rw, rh, fill=fig.p['main'], opacity=0.08)
    n_bord = 12
    for i in range(1, n_bord):
        fig.line(x0, y0 + rh * i / n_bord, x0 + rw, y0 + rh * i / n_bord, fig.p['grid'], 2)
    for i in range(1, n_bord):
        off = (i % 2) * rw / 3
        fig.line(x0 + off, y0 + rh * (i - 1) / n_bord, x0 + off, y0 + rh * i / n_bord, fig.p['grid'], 2)
    fig.rect(x0, y0, rw, rh, stroke=fig.p['main'], width=5)
    dim_h(fig, x0, x0 + rw, y0 - 36, '4,2 m')
    dim_v(fig, x0 - 44, y0, y0 + rh, '3,6 m')
    fig.text(1080, 330, 'areal:', 30, bold=True)
    fig.text(1080, 390, '4,2 · 3,6 = 15,12 m²', 34, bold=True)
    yellow_box(fig, 880, 470, 520, 130, ['+ 10 % svinn', '→ kjøp 17 m²'], size=31)
    save(fig, '2py-3-1-gulvlegging')


def f_listverk():
    fig = Fig(BOOK)
    fig.title('Gulvlister: omkrets minus dør')
    s = 135
    x0, y0 = 220, 190
    rw, rh = 4.2 * s, 3.6 * s
    fig.rect(x0, y0, rw, rh, stroke=fig.p['main'], width=3)
    # listverk i signalgult langs alle vegger, unntatt døråpning nederst
    g1, g2 = x0 + 1.6 * s, x0 + 2.5 * s  # døråpning 0,9 m
    fig.line(x0, y0, x0 + rw, y0, fig.p['accent'], 10)
    fig.line(x0, y0, x0, y0 + rh, fig.p['accent'], 10)
    fig.line(x0 + rw, y0, x0 + rw, y0 + rh, fig.p['accent'], 10)
    fig.line(x0, y0 + rh, g1, y0 + rh, fig.p['accent'], 10)
    fig.line(g2, y0 + rh, x0 + rw, y0 + rh, fig.p['accent'], 10)
    dim_h(fig, x0, x0 + rw, y0 - 36, '4,2 m')
    dim_v(fig, x0 - 44, y0, y0 + rh, '3,6 m')
    fig.text((g1 + g2) / 2, y0 + rh + 44, 'dør 0,9 m', 27, color=fig.p['main'], bold=True)
    fig.text(1070, 350, 'omkrets: 2 · (4,2 + 3,6) = 15,6 m', 30, bold=True)
    fig.text(1070, 430, 'minus dør:', 30)
    fig.text(1070, 500, '15,6 − 0,9 = 14,7 m gulvlist', 32, bold=True, color=fig.p['main'])
    save(fig, '2py-3-1-listverk')


def f_arealformler():
    fig = Fig(BOOK)
    fig.title('Arealformler')
    # rektangel (finérplate)
    rx, ry, rw, rh = 130, 250, 360, 240
    fig.rect(rx, ry, rw, rh, fill=fig.p['main'], opacity=0.12)
    fig.rect(rx, ry, rw, rh, stroke=fig.p['main'], width=5)
    dim_h(fig, rx, rx + rw, ry - 30, 'l')
    dim_v(fig, rx - 36, ry, ry + rh, 'b')
    fig.text(rx + rw / 2, 620, 'A = l · b', 34, bold=True)
    fig.text(rx + rw / 2, 680, 'plate', 27, color=fig.p['extra'])
    # trekant (takutstikk)
    ta, tb, tc = (620, 490), (1010, 490), (900, 260)
    fig.poly([ta, tb, tc], stroke=fig.p['main'], width=5, close=True)
    fig.line(tc[0], tc[1], tc[0], 490, fig.p['accent'], 3.5, dash='10 9')
    right_angle(fig, tc[0], 490, 26, -1, -1)
    dim_h(fig, ta[0], tb[0], 520, 'g', above=False)
    fig.text(tc[0] - 20, 380, 'h', 32, anchor='end', bold=True, italic=True, color=fig.p['accent'])
    fig.text(815, 620, 'A = (g · h)/2', 34, bold=True)
    fig.text(815, 680, 'takutstikk', 27, color=fig.p['extra'])
    # sirkel (kumlokk)
    cx, cy, cr = 1290, 370, 130
    fig.circle(cx, cy, cr, stroke=fig.p['main'], width=5, fill=fig.p['main'], opacity=0.12)
    fig.line(cx, cy, cx + cr, cy, fig.p['accent'], 4)
    fig.circle(cx, cy, 7, fill=fig.p['accent'])
    fig.text(cx + cr / 2, cy - 16, 'r', 32, bold=True, italic=True, color=fig.p['accent'])
    fig.text(cx, 620, 'A = π r²', 34, bold=True)
    fig.text(cx, 680, 'kumlokk', 27, color=fig.p['extra'])
    save(fig, '2py-3-1-arealformler')


def f_betongstoping():
    fig = Fig(BOOK)
    fig.title('Betongsåle: 6,0 m × 4,0 m × 0,1 m')
    u = 130
    x0, y0 = 250, 620
    L, D = 6 * u, 0.22 * u  # tykkelsen tegnes svakt forstørret
    ox, oy = 0.42 * 4 * u, -0.34 * 4 * u
    A = (x0, y0); Bp = (x0 + L, y0); C = (x0 + L, y0 - D); Dp = (x0, y0 - D)
    A2 = (A[0] + ox, A[1] + oy); B2 = (Bp[0] + ox, Bp[1] + oy)
    C2 = (C[0] + ox, C[1] + oy); D2 = (Dp[0] + ox, Dp[1] + oy)
    fig.poly([Dp, C, C2, D2], fill=fig.p['main'], opacity=0.15, close=True)
    fig.poly([A, Bp, C, Dp], stroke=fig.p['main'], width=5, close=True)
    fig.poly([Dp, D2, C2, C], stroke=fig.p['main'], width=5, close=True)
    fig.poly([Bp, B2, C2], stroke=fig.p['main'], width=5)
    dim_h(fig, A[0], Bp[0], y0 + 46, '6,0 m', above=False)
    fig.text((Bp[0] + B2[0]) / 2 + 44, (Bp[1] + B2[1]) / 2 + 26, '4,0 m', 30, bold=True, anchor='start')
    fig.text(Bp[0] + 26, y0 - D / 2 + 10, '0,1 m', 28, bold=True, anchor='start', color=fig.p['accent'])
    fig.text(620, 760, 'V = 6,0 · 4,0 · 0,1 = 2,4 m³', 36, bold=True)
    yellow_box(fig, 1010, 700, 420, 110, ['+ 5 % reserve:', 'bestill 2,5 m³'], size=29)
    save(fig, '2py-3-2-betongstoping')


def f_sylindertank():
    fig = Fig(BOOK)
    fig.title('Volum av sylindertank')
    cx, rx, ry = 430, 175, 52
    ytop, hh = 250, 438  # h/d = 1,5/1,2 = 1,25
    cylinder(fig, cx, ytop, rx, ry, hh, fill_top=fig.p['accent'])
    fig.line(cx, ytop, cx + rx, ytop, fig.p['main'], 4)
    fig.circle(cx, ytop, 7, fill=fig.p['main'])
    fig.text(cx + 60, ytop - 80, 'r = 0,6 m', 29, bold=True, anchor='start')
    dim_v(fig, cx + rx + 56, ytop, ytop + hh, 'h = 1,5 m', anchor='start', dx=16)
    fig.text(cx, ytop + hh + 110, 'grunnflate: π · 0,6²', 28, color=fig.p['accent'], bold=True)
    fig.text(1080, 400, 'V = π · 0,6² · 1,5', 36, bold=True)
    fig.text(1080, 480, '≈ 1,7 m³', 38, bold=True, color=fig.p['main'])
    fig.text(1080, 570, '= 1 700 liter', 32, bold=True, color=fig.p['accent'])
    save(fig, '2py-3-2-sylindertank')


def f_overflate_tank():
    fig = Fig(BOOK)
    fig.title('Overflaten av sylindertank')
    cx, rx, ry = 340, 145, 44
    ytop, hh = 270, 363
    cylinder(fig, cx, ytop, rx, ry, hh)
    fig.line(cx, ytop, cx + rx, ytop, fig.p['accent'], 4)
    fig.text(cx + 46, ytop - 66, 'r = 0,6 m', 27, color=fig.p['accent'], bold=True, anchor='start')
    dim_v(fig, cx + rx + 48, ytop, ytop + hh, 'h = 1,5 m', anchor='start', dx=16)
    # brettet ut
    fig.text(1030, 240, 'brettet ut:', 29, bold=True)
    fig.circle(830, 360, 80, stroke=fig.p['accent'], width=4, fill=fig.p['accent'], opacity=0.15)
    fig.circle(1030, 360, 80, stroke=fig.p['accent'], width=4, fill=fig.p['accent'], opacity=0.15)
    fig.text(1080, 480, 'topp + bunn: 1,13 m² hver', 27, color=fig.p['accent'], bold=True, anchor='end')
    fig.rect(700, 530, 565, 225, stroke=fig.p['main'], width=4, fill=fig.p['main'], opacity=0.12)
    fig.text(982, 652, 'sideflate: 5,65 m²', 28, color=fig.p['main'], bold=True)
    fig.text(982, 830, 'O = 2 · 1,13 + 5,65 ≈ 7,9 m²', 34, bold=True)
    save(fig, '2py-3-2-overflate-tank')


def f_volumformler():
    fig = Fig(BOOK)
    fig.title('Volumformler')
    # kasse
    u = 230
    x0, y0 = 180, 560
    ox, oy = 0.45 * u, -0.36 * u
    A = (x0, y0); Bp = (x0 + 1.5 * u, y0); C = (Bp[0], y0 - u); Dp = (x0, y0 - u)
    B2 = (Bp[0] + ox, Bp[1] + oy); C2 = (C[0] + ox, C[1] + oy); D2 = (Dp[0] + ox, Dp[1] + oy)
    fig.poly([A, Bp, B2, (A[0] + ox, A[1] + oy)], fill=fig.p['accent'], opacity=0.3, close=True)
    fig.poly([A, Bp, C, Dp], stroke=fig.p['main'], width=5, close=True)
    fig.poly([Dp, D2, C2, C], stroke=fig.p['main'], width=5, close=True)
    fig.poly([Bp, B2, C2], stroke=fig.p['main'], width=5)
    fig.poly([A, (A[0] + ox, A[1] + oy), B2, Bp], stroke=fig.p['main'], width=3, dash='9 9')
    fig.text((A[0] + Bp[0]) / 2, y0 + 44, 'l', 32, bold=True, italic=True)
    fig.text((Bp[0] + B2[0]) / 2 + 36, (Bp[1] + B2[1]) / 2 + 26, 'b', 32, bold=True, italic=True, anchor='start')
    fig.text(Bp[0] + ox + 50, y0 - u / 2 + oy / 2, 'h', 32, bold=True, italic=True, anchor='start')
    fig.text(420, 700, 'V = l · b · h', 34, bold=True)
    # sylinder
    scx = 1130
    cylinder(fig, scx, 230, 130, 40, 330, fill_top=fig.p['accent'])
    fig.line(scx, 230, scx + 130, 230, fig.p['main'], 4)
    fig.text(scx + 50, 158, 'r', 30, bold=True, italic=True, anchor='start')
    dim_v(fig, scx + 130 + 46, 230, 560, 'h', anchor='start', dx=14)
    fig.text(scx, 700, 'V = π r² · h', 34, bold=True)
    fig.text(W / 2, 800, 'Volum = grunnflate · høyde', 34, bold=True, color=fig.p['accent'])
    fig.rect(640, 130, 320, 76, stroke=fig.p['main'], width=3, rx=12)
    fig.text(800, 180, '1 m³ = 1000 L', 29, bold=True)
    save(fig, '2py-3-2-volumformler')


def f_stige_hms():
    fig = Fig(BOOK)
    s = 150  # px per meter
    gy = 760
    wx = 360
    h = math.sqrt(4.0 ** 2 - 1.0 ** 2)  # 3,873
    foot = (wx + 1.0 * s, gy)
    top = (wx, gy - h * s)
    fig.line(170, gy, 950, gy, fig.p['text'], 5)
    fig.line(wx, gy, wx, 120, fig.p['text'], 5)
    right_angle(fig, wx, gy, 34, 1, -1)
    dx, dy = top[0] - foot[0], top[1] - foot[1]
    ln = math.hypot(dx, dy)
    nx, ny = -dy / ln, dx / ln
    off = 13
    for sgn in (-1, 1):
        fig.line(foot[0] + sgn * off * nx, foot[1] + sgn * off * ny,
                 top[0] + sgn * off * nx, top[1] + sgn * off * ny, fig.p['main'], 6)
    for i in range(1, 9):
        t = i / 9
        mx, my = foot[0] + dx * t, foot[1] + dy * t
        fig.line(mx - off * nx, my - off * ny, mx + off * nx, my + off * ny, fig.p['main'], 4)
    fig.text((foot[0] + top[0]) / 2 + 48, (foot[1] + top[1]) / 2, '4,0 m', 33, bold=True, color=fig.p['main'], anchor='start')
    dim_h(fig, wx, foot[0], gy + 50, '1,0 m', above=False)
    fig.text(wx - 28, (gy + top[1]) / 2, 'h', 36, bold=True, italic=True, anchor='end')
    fig.text(1080, 280, 'h² = 4,0² − 1,0²', 36, bold=True, anchor='start')
    fig.text(1080, 360, 'h = √15 ≈ 3,9 m', 36, bold=True, anchor='start', color=fig.p['main'])
    yellow_box(fig, 1010, 480, 440, 140, ['4:1-regelen:', 'én ut for hver fjerde opp'], size=29)
    save(fig, '2py-3-3-stige-hms')


def f_345():
    fig = Fig(BOOK)
    fig.title('Er hjørnet rett? 3-4-5-metoden')
    sc = 6.5  # px per cm
    corner = (360, 660)
    # to bord i vinkel
    fig.rect(corner[0] - 48, 170, 48, 538, fill=fig.p['main'], opacity=0.18)
    fig.rect(corner[0] - 48, 170, 48, 538, stroke=fig.p['main'], width=4)
    fig.rect(corner[0] - 48, corner[1], 710, 48, fill=fig.p['main'], opacity=0.18)
    fig.rect(corner[0] - 48, corner[1], 710, 48, stroke=fig.p['main'], width=4)
    right_angle(fig, corner[0], corner[1], 30, 1, -1)
    m1 = (corner[0] + 80 * sc, corner[1])  # 80 cm langs bunnen
    m2 = (corner[0], corner[1] - 60 * sc)  # 60 cm opp
    for (mx, my), (ddx, ddy) in [(m1, (0, 1)), (m2, (-1, 0))]:
        fig.line(mx, my, mx + ddx * 34, my + ddy * 34, fig.p['accent'], 6)
    fig.line(m1[0], m1[1], m2[0], m2[1], fig.p['accent'], 4, dash='13 11')
    dim_h(fig, corner[0], m1[0], corner[1] + 92, '80 cm', above=False)
    dim_v(fig, corner[0] - 92, m2[1], corner[1], '60 cm')
    fig.text((m1[0] + m2[0]) / 2 + 30, (m1[1] + m2[1]) / 2 - 20, '100 cm', 30, bold=True, color=fig.p['accent'], anchor='start')
    fig.text(1130, 360, '60² + 80² = 100²', 36, bold=True)
    fig.text(1130, 440, '3 600 + 6 400 = 10 000', 30)
    check(fig, 980, 540, 20)
    fig.text(1020, 552, 'hjørnet er 90°', 32, bold=True, anchor='start', color=GREEN)
    save(fig, '2py-3-3-345-metoden')


def f_takvinkel():
    fig = Fig(BOOK)
    fig.title('Takstol: finn høyden')
    s = 160
    A = (270, 660)
    Bp = (270 + 3.5 * s, 660)
    C = (Bp[0], 660 - 3.5 * math.tan(math.radians(30)) * s)
    fig.poly([A, Bp, C], stroke=fig.p['main'], width=6, close=True)
    right_angle(fig, Bp[0], Bp[1], 30, -1, -1)
    angle_arc(fig, A[0], A[1], 120, 0, 30, label='30°', lr_extra=58)
    dim_h(fig, A[0], Bp[0], A[1] + 50, '3,5 m', above=False)
    fig.text(Bp[0] + 26, (Bp[1] + C[1]) / 2 + 10, 'x', 38, bold=True, italic=True, anchor='start', color=fig.p['accent'])
    fig.text(1190, 380, 'x = 3,5 · tan 30°', 36, bold=True)
    fig.text(1190, 470, 'x ≈ 2,0 m', 38, bold=True, color=fig.p['accent'])
    save(fig, '2py-3-3-takvinkel')


def f_sohcahtoa():
    fig = Fig(BOOK)
    A = (190, 700)   # vinkel v
    B = (890, 700)   # rett vinkel
    C = (890, 280)
    fig.poly([A, B, C], stroke=fig.p['text'], width=5, close=True)
    fig.line(A[0], A[1], B[0], B[1], fig.p['main'], 7)      # hosliggende
    fig.line(B[0], B[1], C[0], C[1], fig.p['accent'], 7)    # motstående
    right_angle(fig, B[0], B[1], 36, -1, -1, color=fig.p['text'])
    angle_arc(fig, A[0], A[1], 90, 0, math.degrees(math.atan2(420, 700)), label='v')
    fig.text((A[0] + B[0]) / 2, B[1] + 52, 'hosliggende', 31, color=fig.p['main'], bold=True)
    fig.text(B[0] + 26, (B[1] + C[1]) / 2 + 10, 'motstående', 31, color=fig.p['accent'], bold=True, anchor='start')
    fig.text((A[0] + C[0]) / 2 - 30, (A[1] + C[1]) / 2 - 40, 'hypotenus', 31, bold=True, anchor='end')
    fig.text(1300, 300, 'sin v = mot/hyp', 36, bold=True)
    fig.text(1300, 400, 'cos v = hos/hyp', 36, bold=True)
    fig.text(1300, 600, 'tan v = mot/hos', 36, bold=True)
    fig.text(1300, 720, 'SOH-CAH-TOA', 32, bold=True, color=fig.p['accent'])
    save(fig, '2py-3-3-sohcahtoa')


def f_byggetegning():
    fig = Fig(BOOK)
    fig.title('Byggetegning i målestokk 1 : 50')
    # tegneark med romplan
    fig.rect(170, 140, 800, 480, stroke=fig.p['grid'], width=3, rx=6)
    px0, py0, pw, ph = 280, 200, 560, 330  # vegg = 8 cm ved 70 px/cm
    fig.rect(px0, py0, pw, ph, stroke=fig.p['main'], width=5)
    fig.line(px0 + 180, py0 + ph, px0 + 280, py0 + ph, fig.p['bg'], 7)  # døråpning
    arc_h(fig, px0 + 180, px0 + 280, py0 + ph, 48, fig.p['grid'], 3, lower=False)
    # linjal under nederste vegg (70 px per cm)
    rx0, ry0 = px0, 560
    fig.rect(rx0 - 20, ry0, pw + 60, 76, fill='#F2EFE6', stroke=fig.p['text'], width=3)
    for c in range(9):
        fig.line(rx0 + c * 70, ry0, rx0 + c * 70, ry0 + 22, fig.p['text'], 2.5)
        fig.text(rx0 + c * 70, ry0 + 56, str(c), 24)
    brace_h(fig, px0, px0 + pw, ry0 + 150, '8,0 cm på tegningen', size=29, lab_dy=50)
    fig.text(1230, 330, '8,0 cm · 50', 36, bold=True)
    fig.text(1230, 410, '= 400 cm', 32)
    fig.text(1230, 490, '= 4,0 m i virkeligheten', 32, bold=True, color=fig.p['accent'])
    save(fig, '2py-3-4-byggetegning')


def f_motsatt_vei():
    fig = Fig(BOOK)
    fig.title('Fra virkelighet til tegning: 1 : 100')
    # terrassen i virkeligheten
    fig.rect(200, 200, 600, 200, fill=fig.p['main'], opacity=0.12)
    fig.rect(200, 200, 600, 200, stroke=fig.p['main'], width=5)
    dim_h(fig, 200, 800, 170, 'terrasse: 6,0 m')
    # tegningen
    fig.rect(370, 600, 60, 20, stroke=fig.p['main'], width=3)
    brace_h(fig, 370, 430, 664, '6 cm', size=28, lab_dy=46)
    fig.arrow(500, 430, 500, 580, fig.p['accent'], 6, head=18)
    fig.text(530, 515, ': 100', 32, bold=True, color=fig.p['accent'], anchor='start')
    fig.text(400, 790, '600 cm : 100 = 6 cm på tegningen', 32, bold=True, anchor='start')
    # regelboks
    fig.rect(940, 280, 510, 220, stroke=fig.p['main'], width=4, rx=14)
    fig.arrow(990, 360, 1090, 360, fig.p['main'], 4, head=12)
    fig.text(1110, 370, 'tegning → virkelighet: gang', 28, anchor='start', bold=True)
    fig.arrow(1090, 440, 990, 440, fig.p['accent'], 4, head=12)
    fig.text(1110, 450, 'virkelighet → tegning: del', 28, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '2py-3-4-motsatt-vei')


def f_kart_avstand():
    fig = Fig(BOOK)
    fig.title('Kart i målestokk 1 : 25 000')
    fig.rect(170, 150, 760, 440, stroke=fig.p['main'], width=4, rx=14)
    fig.poly([(170, 460), (320, 420), (460, 470), (620, 390), (930, 430)], stroke=fig.p['extra'], width=4)
    fig.poly([(170, 250), (340, 290), (520, 240), (700, 300), (930, 270)], stroke=fig.p['extra'], width=4, dash='4 10')
    A, Bx = (260, 500), (860, 500)
    fig.circle(*A, 11, fill=fig.p['accent'])
    fig.circle(*Bx, 11, fill=fig.p['accent'])
    fig.text(A[0], A[1] - 28, 'verksted', 27, bold=True)
    fig.text(Bx[0], Bx[1] - 28, 'kunde', 27, bold=True)
    fig.line(A[0], A[1], Bx[0], Bx[1], fig.p['accent'], 4, dash='12 10')
    # linjal (100 px per cm)
    rx0, ry0 = 260, 620
    fig.rect(rx0 - 26, ry0, 660, 84, fill='#F2EFE6', stroke=fig.p['text'], width=3)
    for c in range(7):
        fig.line(rx0 + c * 100, ry0, rx0 + c * 100, ry0 + 24, fig.p['text'], 3)
        fig.text(rx0 + c * 100, ry0 + 60, str(c), 25)
    brace_h(fig, rx0, rx0 + 600, ry0 + 124, '6 cm', size=29, lab_dy=-22)
    fig.text(1220, 360, '6 cm · 25 000', 34, bold=True)
    fig.text(1220, 430, '= 150 000 cm', 30)
    fig.text(1220, 500, '= 1,5 km', 38, bold=True, color=fig.p['accent'])
    save(fig, '2py-3-4-kart-avstand')


# ---------- Kapittel 4: Statistikk ----------

def f_kvalitetskontroll():
    fig = Fig(BOOK)
    fig.title('Kvalitetskontroll: registrer → presenter')
    rows = [['Feiltype', 'Antall'],
            ['Riper', '12'],
            ['Skjevhet', '7'],
            ['Sprekker', '3'],
            ['Annet', '2']]
    htable(fig, 170, 180, [320, 180], 92, rows, header=True, aligns=['left', 'right'])
    fig.arrow(720, 410, 830, 410, fig.p['accent'], 6, head=18)
    # søylediagram
    bx0, by0, bw, bh = 880, 200, 520, 420
    fig.bar_chart(bx0, by0, bw, bh, [12, 7, 3, 2],
                  labels=['Riper', 'Skjevhet', 'Sprekker', 'Annet'],
                  value_labels=['12', '7', '3', '2'], vmax=14)
    fig.text(bx0 - 26, by0 + 10, 'Antall feil', 26, anchor='end', italic=True)
    save(fig, '2py-4-1-kvalitetskontroll')


def f_diagramvelger():
    fig = Fig(BOOK)
    fig.title('Hvilket diagram passer?')
    y0, y1 = 200, 560
    # søylediagram
    x0 = 130
    panel_axes(fig, x0, y0, x0 + 360, y1)
    for i, v in enumerate([0.5, 0.85, 0.35, 0.65]):
        bw = 64
        fig.rect(x0 + 30 + i * 84, y1 - v * (y1 - y0 - 30), bw, v * (y1 - y0 - 30), fill=fig.p['main'])
    fig.text(x0 + 190, 630, 'søylediagram', 30, bold=True)
    fig.text(x0 + 190, 678, 'sammenligne kategorier', 26, color=fig.p['extra'])
    # linjediagram
    x0 = 620
    panel_axes(fig, x0, y0, x0 + 360, y1)
    pts = [(x0 + 30, y1 - 60), (x0 + 120, y1 - 140), (x0 + 210, y1 - 110), (x0 + 300, y1 - 250), (x0 + 350, y1 - 300)]
    fig.poly(pts, stroke=fig.p['main'], width=5)
    for q in pts:
        fig.circle(q[0], q[1], 8, fill=fig.p['main'])
    fig.text(x0 + 190, 630, 'linjediagram', 30, bold=True)
    fig.text(x0 + 190, 678, 'utvikling over tid', 26, color=fig.p['extra'])
    # sektordiagram
    cx, cy, r = 1290, (y0 + y1) / 2, 175
    fig.pie(cx, cy, r, [(0.5, fig.p['main'], None), (0.3, fig.p['accent'], None), (0.2, fig.p['extra'], None)])
    fig.text(cx, 630, 'sektordiagram', 30, bold=True)
    fig.text(cx, 678, 'andeler av en helhet', 26, color=fig.p['extra'])
    save(fig, '2py-4-1-diagramvelger')


def f_lonn_sentral():
    fig = Fig(BOOK)
    fig.title('Gjennomsnitt eller median?')
    base = 660
    s = 0.00055  # px per kr
    lonn = [450000, 450000, 450000, 450000, 950000]
    navn = ['ansatt', 'ansatt', 'ansatt', 'ansatt', 'leder']
    for i, v in enumerate(lonn):
        x = 200 + i * 190
        c = fig.p['accent'] if i == 4 else fig.p['main']
        fig.rect(x, base - v * s, 140, v * s, fill=c, opacity=0.9)
        fig.text(x + 70, base + 40, navn[i], 26)
    fig.text(270, base - 450000 * s - 16, '450 000', 26, bold=True)
    fig.text(1030, base - 950000 * s - 16, '950 000', 26, bold=True, color=fig.p['accent'])
    fig.line(170, base - 550000 * s, 1180, base - 550000 * s, fig.p['accent'], 3.5, dash='12 10')
    fig.line(170, base - 450000 * s, 1180, base - 450000 * s, fig.p['main'], 3.5, dash='12 10')
    fig.text(1205, base - 550000 * s + 9, 'gjennomsnitt: 550 000 kr', 27, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(1205, base - 450000 * s + 9, 'median: 450 000 kr', 27, anchor='start', bold=True, color=fig.p['main'])
    fig.line(170, base, 1180, base, fig.p['text'], 3)
    fig.text(W / 2, 790, 'lederlønnen drar gjennomsnittet opp', 30, bold=True)
    save(fig, '2py-4-2-lonn-sentralmaal')


def f_variasjonsbredde():
    fig = Fig(BOOK)
    fig.title('Kapptider: 8, 9, 10, 10, 13 minutter')
    y = 520
    tx = fig.number_line(6, 15, y=y, ticks=range(6, 16), labels={v: fmt(v) for v in range(6, 16)})
    for v in (8, 9, 13):
        fig.circle(tx(v), y - 40, 13, fill=fig.p['main'])
    fig.circle(tx(10), y - 40, 13, fill=fig.p['main'])
    fig.circle(tx(10), y - 76, 13, fill=fig.p['main'])
    ellipse(fig, tx(10), y - 58, 30, 56, stroke=fig.p['extra'], width=4)
    fig.text(tx(10), y - 152, 'typetall: 10', 28, bold=True, color=fig.p['extra'])
    fig.line(tx(10), y - 195, tx(10), 200, fig.p['main'], 3, dash='10 10')
    fig.text(tx(10), 175, 'gjennomsnitt: 50/5 = 10', 28, bold=True, color=fig.p['main'])
    brace_h(fig, tx(8), tx(13), y + 110, 'variasjonsbredde = 13 − 8 = 5', color=fig.p['accent'], size=30, lab_dy=50)
    save(fig, '2py-4-2-variasjonsbredde')


def f_frekvensklasser():
    fig = Fig(BOOK)
    fig.title('Ventetid gruppert i klasser')
    rows = [['Klasse', 'Frekvens'],
            ['[0, 10⟩', '6'],
            ['[10, 20⟩', '11'],
            ['[20, 30⟩', '8'],
            ['[30, 40⟩', '3']]
    htable(fig, 150, 180, [280, 180], 92, rows, header=True)
    tx, ty = fig.coords(0, 40, 0, 13, box=(760, 180, 1420, 660),
                        xticks=[0, 10, 20, 30, 40], yticks=[5, 10], tick_size=24)
    fig.text(1430, 760, 'Ventetid (minutter)', 27, italic=True, anchor='end')
    for a, b, f in [(0, 10, 6), (10, 20, 11), (20, 30, 8), (30, 40, 3)]:
        fig.rect(tx(a), ty(f), tx(b) - tx(a), ty(0) - ty(f), fill=fig.p['main'], opacity=0.8)
        fig.rect(tx(a), ty(f), tx(b) - tx(a), ty(0) - ty(f), stroke=fig.p['bg'], width=3)
        fig.text((tx(a) + tx(b)) / 2, ty(f) - 14, fmt(f), 27, bold=True, color=fig.p['main'])
    fig.text(W / 2, 800, 'klassebredde 10 minutter', 30, bold=True)
    save(fig, '2py-4-3-frekvensklasser')


def f_klassemidtpunkt():
    fig = Fig(BOOK)
    fig.title('Klassemidtpunkt')
    y = 300
    tx = fig.number_line(8, 22, y=y, x0=260, x1=1340, ticks=[10, 15, 20],
                         labels={10: '10', 20: '20'},
                         segment=(10, 20, Fig(BOOK).p['main']))
    fig.circle(tx(15), y, 14, fill=fig.p['accent'])
    fig.text(tx(15), y - 44, 'klassemidtpunkt = 15', 30, bold=True, color=fig.p['accent'])
    fig.text(tx(15), y + 100, 'klassen [10, 20⟩', 28, color=fig.p['main'], bold=True)
    rows = [['Midtpunkt', '5', '15', '25', '35'],
            ['Frekvens', '6', '11', '8', '3'],
            ['Produkt', '30', '165', '200', '105']]
    htable(fig, 260, 450, [280, 200, 200, 200, 200], 80, rows, header=False,
           bold_cells={(0, 0), (1, 0), (2, 0)})
    fig.text(W / 2, 800, 'gjennomsnitt ≈ (30 + 165 + 200 + 105) / 28 ≈ 17,9 min', 31, bold=True)
    save(fig, '2py-4-3-klassemidtpunkt')


# ---------- Kapittel 5: Sannsynlighet og risiko ----------

DEFEKTE = [(2, 1), (5, 6), (8, 3), (11, 8), (13, 2), (16, 5), (18, 9), (19, 0)]


def f_kk_sannsynlighet():
    fig = Fig(BOOK)
    fig.title('Sannsynlighet i kvalitetskontroll')
    gx, gy, cell = 170, 200, 33
    for r in range(10):
        for c in range(20):
            fig.rect(gx + c * cell, gy + r * cell, cell, cell, fill=fig.p['main'],
                     stroke=fig.p['bg'], width=2, opacity=0.25)
    for c, r in DEFEKTE:
        fig.rect(gx + c * cell, gy + r * cell, cell, cell, fill=fig.p['accent'], opacity=0.9)
        crossmark(fig, gx + c * cell + cell / 2, gy + r * cell + cell / 2, 8, color='#FFFFFF', w=4)
    fig.rect(gx, gy, 20 * cell, 10 * cell, stroke=fig.p['main'], width=4)
    fig.text(gx + 10 * cell, gy + 10 * cell + 44, '200 deler — 8 defekte', 29, bold=True)
    fig.text(1130, 330, 'P(defekt) =', 34, bold=True)
    fig.text(1130, 410, '8/200 = 0,04 = 4 %', 36, bold=True, color=fig.p['accent'])
    fig.text(1130, 520, 'gunstige/mulige', 29, italic=True, color=fig.p['extra'])
    save(fig, '2py-5-1-kvalitetskontroll-sannsynlighet')


def f_sannsynlighetslinje():
    fig = Fig(BOOK)
    fig.title('Sannsynlighetsskalaen')
    y = 470
    x0, x1 = 220, 1380
    tx = lambda v: x0 + v * (x1 - x0)
    fig.line(x0, y, x1, y, fig.p['main'], 6)
    for v, lab in [(0, '0 = umulig'), (0.5, '0,5 = like sannsynlig som ikke'), (1, '1 = helt sikkert')]:
        fig.line(tx(v), y - 20, tx(v), y + 20, fig.p['main'], 5)
        fig.text(tx(v), y + 64, lab, 28, bold=True)
    for v, lab, dy in [(0.04, 'maskinen feiler i dag: 0,04', -150),
                       (0.5, 'mynt viser kron: 0,5', -150),
                       (1.0, 'sola står opp i morgen: 1', -150)]:
        fig.circle(tx(v), y, 13, fill=fig.p['accent'])
        fig.line(tx(v), y - 26, tx(v), y + dy + 40, fig.p['grid'], 2.5)
        anc = 'start' if v < 0.1 else ('end' if v > 0.9 else 'middle')
        fig.text(tx(v) if anc == 'middle' else (tx(v) - 14 if anc == 'end' else tx(v) + 14),
                 y + dy + 20, lab, 27, anchor=anc, color=fig.p['accent'], bold=True)
    fig.text(tx(0.5), y + 130, '1/2 = 0,5 = 50 %', 30, bold=True, color=fig.p['extra'])
    save(fig, '2py-5-1-sannsynlighetslinje')


RISK_COLORS = [['#3A8F5A', '#3A8F5A', '#F2A900'],
               ['#3A8F5A', '#F2A900', '#C0504D'],
               ['#F2A900', '#C0504D', '#C0504D']]  # [sannsynlighet][konsekvens], rad 0 = lav


def risk_matrix(fig, x0, y0, cell, labels=True):
    for r in range(3):       # r = sannsynlighet (0 lav, nederst)
        for c in range(3):   # c = konsekvens
            fig.rect(x0 + c * cell, y0 + (2 - r) * cell, cell, cell,
                     fill=RISK_COLORS[r][c], opacity=0.55)
            fig.rect(x0 + c * cell, y0 + (2 - r) * cell, cell, cell, stroke=fig.p['bg'], width=4)
    fig.rect(x0, y0, 3 * cell, 3 * cell, stroke=fig.p['main'], width=4)
    if labels:
        for i, lab in enumerate(['liten', 'middels', 'stor']):
            fig.text(x0 + i * cell + cell / 2, y0 + 3 * cell + 40, lab, 26)
        for i, lab in enumerate(['lav', 'middels', 'høy']):
            fig.text(x0 - 18, y0 + (2 - i) * cell + cell / 2 + 9, lab, 26, anchor='end')


def f_risikomatrise():
    fig = Fig(BOOK)
    fig.title('Risikomatrise (HMS)')
    x0, y0, cell = 420, 160, 170
    risk_matrix(fig, x0, y0, cell)
    fig.text(x0 + 1.5 * cell, y0 + 3 * cell + 100, 'Konsekvens', 29, italic=True, bold=True)
    fig.text(x0 - 130, y0 + 1.5 * cell, 'Sannsynlighet', 29, italic=True, bold=True, anchor='end')
    # hendelser
    fig.circle(x0 + 2.5 * cell, y0 + 0.5 * cell, 14, fill=fig.p['text'])
    fig.text(x0 + 3 * cell + 30, y0 + 0.5 * cell + 10, 'fall fra stige', 29, anchor='start', bold=True, color='#C0504D')
    fig.circle(x0 + 0.5 * cell, y0 + 2.5 * cell, 14, fill=fig.p['text'])
    fig.text(x0 + 3 * cell + 30, y0 + 2.5 * cell + 10, 'papirkutt', 29, anchor='start', bold=True, color=GREEN)
    fig.line(x0 + 2.5 * cell + 20, y0 + 0.5 * cell, x0 + 3 * cell + 24, y0 + 0.5 * cell, fig.p['grid'], 2.5)
    fig.line(x0 + 0.5 * cell + 20, y0 + 2.5 * cell, x0 + 3 * cell + 24, y0 + 2.5 * cell, fig.p['grid'], 2.5)
    fig.text(W / 2, 830, 'risiko = sannsynlighet · konsekvens', 32, bold=True)
    save(fig, '2py-5-2-risikomatrise')


def f_tiltak_risiko():
    fig = Fig(BOOK)
    fig.title('Tiltak flytter risikoen')
    cell = 140
    xL, xR, y0 = 200, 920, 200
    risk_matrix(fig, xL, y0, cell)
    risk_matrix(fig, xR, y0, cell)
    fig.text(xL + 1.5 * cell, y0 - 24, 'før tiltak', 29, bold=True)
    fig.text(xR + 1.5 * cell, y0 - 24, 'etter tiltak', 29, bold=True)
    p1 = (xL + 2.5 * cell, y0 + 0.5 * cell)
    p2 = (xR + 0.5 * cell, y0 + 2.5 * cell)
    fig.circle(*p1, 14, fill=fig.p['text'])
    fig.circle(*p2, 14, fill=fig.p['text'])
    fig.text(p1[0], p1[1] - 30, 'arbeid i høyden', 26, bold=True)
    fig.arrow(p1[0] + 26, p1[1] + 20, p2[0] - 26, p2[1] - 20, fig.p['accent'], 6, head=18)
    fig.text(W / 2, 760, 'tiltak: fallsikring og opplæring', 31, bold=True, color=fig.p['accent'])
    save(fig, '2py-5-2-tiltak-flytter-risiko')


def f_valgtre_uniform():
    fig = Fig(BOOK)
    jx, bx, lx = 540, 920, 1240
    jakke_y = [210, 450, 690]
    jakke_c = [fig.p['main'], fig.p['accent'], fig.p['extra']]
    root = (170, 450)
    fig.text(jx, 90, '3 jakker', 29, bold=True)
    fig.text(bx, 90, '2 bukser', 29, bold=True)
    fig.text(lx, 90, '2 hjelmer', 29, bold=True)
    # tegn alle grener først, deretter nodene (unngår hakk i prikkene)
    nodes = []
    leaf_n = 0
    for j, (jy, jc) in enumerate(zip(jakke_y, jakke_c)):
        fig.line(root[0], root[1], jx, jy, fig.p['grid'], 3)
        nodes.append((jx, jy, 12, jc))
        for b in range(2):
            by = 150 + (j * 2 + b) * 120
            fig.line(jx, jy, bx, by, fig.p['grid'], 3)
            nodes.append((bx, by, 10, fig.p['main']))
            for h in range(2):
                ly = 120 + leaf_n * 60
                leaf_n += 1
                fig.line(bx, by, lx, ly, fig.p['grid'], 3)
                nodes.append((lx, ly, 8, fig.p['text']))
    fig.circle(*root, 12, fill=fig.p['text'])
    for nx_, ny_, nr_, nc_ in nodes:
        fig.circle(nx_, ny_, nr_, fill=nc_)
    brace_x = lx + 60
    fig.line(brace_x, 120, brace_x, 780, fig.p['accent'], 4)
    fig.line(brace_x, 120, brace_x - 14, 120, fig.p['accent'], 4)
    fig.line(brace_x, 780, brace_x - 14, 780, fig.p['accent'], 4)
    fig.text(brace_x + 24, 460, '12', 38, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(W / 2, 860, '3 · 2 · 2 = 12 mulige uniformer', 32, bold=True)
    save(fig, '2py-5-3-valgtre-uniform')


def f_kodelas():
    fig = Fig(BOOK)
    fig.title('Kodelås med fire hjul')
    bw, gap = 220, 70
    x0 = (W - 4 * bw - 3 * gap) / 2
    for i in range(4):
        x = x0 + i * (bw + gap)
        fig.rect(x, 250, bw, 240, stroke=fig.p['main'], width=5, rx=16)
        fig.rect(x + 40, 320, bw - 80, 100, fill=fig.p['accent'], opacity=0.25, rx=10)
        fig.text(x + bw / 2, 388, '0–9', 40, bold=True)
        fig.text(x + bw / 2, 550, '10 valg', 28, bold=True, color=fig.p['main'])
        if i < 3:
            fig.text(x + bw + gap / 2, 385, '·', 48, bold=True)
    fig.text(W / 2, 690, '10 · 10 · 10 · 10 = 10 000 mulige koder', 36, bold=True)
    fig.text(W / 2, 780, 'gang antall valg i hvert trinn', 29, color=fig.p['accent'], bold=True)
    save(fig, '2py-5-3-kodelas')


# ---------- Kapittel 6: Yrkesberegninger ----------

def f_terrassebord():
    fig = Fig(BOOK)
    fig.title('Terrasse: hvor mange bord?')
    s = 140
    x0, y0 = 220, 180
    rw, rh = 4.0 * s, 3.0 * s
    n = 25  # 3,0 m : 0,12 m
    for i in range(n):
        yy = y0 + i * rh / n
        fig.rect(x0, yy, rw, rh / n, fill=fig.p['main'], opacity=0.10 if i % 2 else 0.2)
    fig.rect(x0, y0, rw, rh, stroke=fig.p['main'], width=5)
    dim_h(fig, x0, x0 + rw, y0 - 36, '4,0 m')
    dim_v(fig, x0 - 44, y0, y0 + rh, '3,0 m')
    fig.line(x0 + rw + 14, y0, x0 + rw + 14, y0 + rh / n, fig.p['accent'], 5)
    fig.text(x0 + rw + 30, y0 + rh / n, 'bordbredde 0,12 m', 26, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(1130, 380, '3,0 : 0,12 = 25 bord', 34, bold=True)
    yellow_box(fig, 900, 460, 460, 130, ['+ 10 % svinn', '→ kjøp 28 bord'], size=30)
    save(fig, '2py-6-1-terrassebord')


def f_svinn():
    fig = Fig(BOOK)
    fig.title('Svinn: bestill mer enn netto')
    y0, hh = 260, 130
    x0 = 200
    w_netto, w_svinn = 900, 90  # 15 m² og 1,5 m²
    fig.rect(x0, y0, w_netto, hh, fill=fig.p['main'], opacity=0.85)
    fig.rect(x0 + w_netto, y0, w_svinn, hh, fill=fig.p['accent'])
    fig.text(x0 + w_netto / 2, y0 + hh / 2 + 11, 'netto behov: 15 m²', 31, color='#FFFFFF', bold=True)
    fig.text(x0 + w_netto + w_svinn + 24, y0 + hh / 2 - 12, '+ 10 % svinn:', 28, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(x0 + w_netto + w_svinn + 24, y0 + hh / 2 + 28, '1,5 m²', 28, anchor='start', bold=True, color=fig.p['accent'])
    brace_h(fig, x0, x0 + w_netto + w_svinn, y0 + hh + 36, 'bestill 16,5 m²', size=32)
    fig.text(W / 2, 600, 'hvor blir det av materialene?', 28, italic=True)
    for i, lab in enumerate(['kapp', 'skader', 'feilskjær']):
        bx = 380 + i * 300
        fig.rect(bx, 640, 240, 80, stroke=fig.p['accent'], width=3, rx=12)
        fig.text(bx + 120, 692, lab, 28, bold=True)
    save(fig, '2py-6-1-svinn')


def f_akkord():
    fig = Fig(BOOK)
    fig.title('Produktivitet: m² per time')
    # fliser: 6 x 4 ruter = 24 m²
    gx, gy, cell = 170, 170, 60
    for r in range(4):
        for c in range(6):
            fig.rect(gx + c * cell, gy + r * cell, cell, cell, fill=fig.p['main'],
                     stroke=fig.p['bg'], width=3, opacity=0.35)
    fig.rect(gx, gy, 6 * cell, 4 * cell, stroke=fig.p['main'], width=4)
    fig.text(gx + 3 * cell, gy + 4 * cell + 42, '24 m² lagt på 8 timer', 29, bold=True)
    yellow_box(fig, 700, 230, 540, 120, ['24 : 8 = 3 m² per time'], size=34)
    # tidslinje for 15 m² bad
    y = 640
    x0, x1 = 220, 1220
    tl = lambda t: x0 + t * (x1 - x0) / 5
    fig.line(tl(0), y, tl(5), y, fig.p['main'], 10, opacity=0.8)
    fig.arrow(x0 - 20, y, x1 + 60, y, fig.p['text'], 4)
    for t in range(6):
        fig.line(tl(t), y - 16, tl(t), y + 16, fig.p['text'], 3)
        fig.text(tl(t), y + 56, f'{t} t', 27)
    fig.text((tl(0) + tl(5)) / 2, y - 40, 'bad på 15 m²: 15 : 3 = 5 timer', 31, bold=True, color=fig.p['main'])
    save(fig, '2py-6-2-akkord')


def f_timepris():
    fig = Fig(BOOK)
    fig.title('Hva bygger opp timeprisen?')
    base, bx, bw = 740, 420, 280
    deler = [('timelønn', 250, fig.p['main']),
             ('sosiale kostnader', 110, fig.p['extra']),
             ('faste kostnader', 130, '#9DB2C6'),
             ('fortjeneste', 70, fig.p['accent'])]
    acc = 0
    for lab, hh, c in deler:
        fig.rect(bx, base - acc - hh, bw, hh, fill=c)
        fig.rect(bx, base - acc - hh, bw, hh, stroke=fig.p['bg'], width=3)
        fig.text(bx - 30, base - acc - hh / 2 + 9, lab, 29, anchor='end', bold=True, color=c if lab == 'fortjeneste' else fig.p['text'])
        acc += hh
    fig.line(bx, base, bx + bw, base, fig.p['text'], 4)
    tot = sum(h for _, h, _ in deler)
    x_br = bx + bw + 50
    fig.line(x_br, base, x_br, base - tot, fig.p['main'], 4)
    fig.line(x_br, base, x_br - 14, base, fig.p['main'], 4)
    fig.line(x_br, base - tot, x_br - 14, base - tot, fig.p['main'], 4)
    fig.text(x_br + 26, base - tot / 2 - 12, 'timepris', 32, anchor='start', bold=True, color=fig.p['main'])
    fig.text(x_br + 26, base - tot / 2 + 30, 'til kunde', 32, anchor='start', bold=True, color=fig.p['main'])
    fig.text(W / 2, 830, 'timeprisen er mer enn lønna', 30, bold=True)
    save(fig, '2py-6-3-timepris')


# ---------- Kapittel 7: Måling og enheter ----------

def f_enhetstrapp():
    fig = Fig(BOOK)
    fig.title('Enhetstrappen')
    steps = [('m', 'planke 2,4 m'), ('dm', None), ('cm', 'flis 30 cm'), ('mm', 'skrue 40 mm')]
    sw, sh = 270, 120
    x0, ytop = 170, 230
    for i, (enh, obj) in enumerate(steps):
        x = x0 + i * sw
        y = ytop + i * sh
        fig.rect(x, y, sw, ytop + 4 * sh - y + 60, fill=fig.p['main'], opacity=0.10 + 0.05 * i)
        fig.line(x, y, x + sw, y, fig.p['main'], 5)
        if i > 0:
            fig.line(x, ytop + (i - 1) * sh, x, y, fig.p['main'], 5)
        fig.text(x + sw / 2, y + 64, enh, 40, bold=True)
        if obj:
            fig.text(x + sw / 2, y + 112, obj, 25, color=fig.p['extra'])
    fig.arrow(x0 + sw * 0.8, ytop - 80, x0 + sw * 2.6, ytop - 80 + 1.8 * sh - 40, fig.p['accent'], 5, head=16)
    fig.text(x0 + sw * 2.2, ytop - 36, '· 10 per trinn ned', 29, bold=True, color=fig.p['accent'], anchor='start')
    fig.arrow(1300, 560, 830, 360, fig.p['main'], 5, head=16)
    fig.text(1130, 510, ': 10 per trinn opp', 29, bold=True, color=fig.p['main'], anchor='start')
    fig.text(W / 2, 850, '2,4 m = 24 dm = 240 cm = 2400 mm', 32, bold=True)
    save(fig, '2py-7-1-enhetstrapp')


def f_toleranse():
    fig = Fig(BOOK)
    fig.title('Toleranse: 25,00 ± 0,05 mm')
    y = 500
    x0, x1 = 200, 1400
    tx = lambda v: x0 + (v - 24.90) / 0.20 * (x1 - x0)
    fig.rect(x0, y - 50, tx(24.95) - x0, 100, fill='#C0504D', opacity=0.25)
    fig.rect(tx(25.05), y - 50, x1 - tx(25.05), 100, fill='#C0504D', opacity=0.25)
    fig.rect(tx(24.95), y - 50, tx(25.05) - tx(24.95), 100, fill=GREEN, opacity=0.3)
    fig.line(x0, y, x1, y, fig.p['text'], 4)
    for v in [24.90, 24.95, 25.00, 25.05, 25.10]:
        fig.line(tx(v), y - 16, tx(v), y + 16, fig.p['text'], 3)
        fig.text(tx(v), y + 110, fmt(v), 28, bold=True)
    fig.text((tx(24.95) + tx(25.05)) / 2, y - 90, 'godkjent (25,00 ± 0,05)', 29, bold=True, color=GREEN)
    fig.text(tx(24.92), y - 90, 'vrakes', 28, bold=True, color='#C0504D')
    fig.text(tx(25.08), y - 90, 'vrakes', 28, bold=True, color='#C0504D')
    for v, ok in [(24.98, True), (25.03, True), (25.08, False)]:
        fig.circle(tx(v), y, 12, fill=fig.p['main'])
        fig.text(tx(v), y + 58, fmt(v), 25, color=fig.p['main'])
        if ok:
            check(fig, tx(v), y - 170, 16)
        else:
            crossmark(fig, tx(v), y - 165, 14)
    save(fig, '2py-7-2-toleranse-tallinje')


def f_tommer():
    fig = Fig(BOOK)
    fig.title('Tommer og centimeter')
    rx0, ry0, rh = 150, 280, 200
    rw = 1300  # 13 cm ved 100 px/cm
    fig.rect(rx0, ry0, rw, rh, fill='#F2EFE6', stroke=fig.p['text'], width=3)
    for c in range(14):
        fig.line(rx0 + c * 100, ry0, rx0 + c * 100, ry0 + 30, fig.p['text'], 3)
        if c % 2 == 0:
            fig.text(rx0 + c * 100, ry0 + 64, str(c), 25)
    fig.text(rx0 + 50, ry0 - 16, 'cm', 27, bold=True, anchor='start')
    for t in range(6):
        x = rx0 + t * 254
        fig.line(x, ry0 + rh, x, ry0 + rh - 30, fig.p['accent'], 4)
        fig.text(x, ry0 + rh - 44, f'{t}″', 26, bold=True, color=fig.p['accent'])
    fig.text(rx0 + 50, ry0 + rh + 40, 'tommer', 27, bold=True, color=fig.p['accent'], anchor='start')
    fig.line(rx0 + 254, ry0 - 50, rx0 + 254, ry0 + rh + 60, fig.p['main'], 3.5, dash='11 10')
    fig.text(rx0 + 280, ry0 - 60, '1″ = 2,54 cm', 32, bold=True, anchor='start', color=fig.p['main'])
    fig.text(440, 690, 'skjerm: 27″ ≈ 68,6 cm', 30, bold=True)
    fig.text(1080, 690, 'planke: 2″ × 4″ ≈ 51 × 102 mm', 30, bold=True)
    save(fig, '2py-7-3-tommer')


# ---------- Kapittel 8: Problemløsning og digitale verktøy ----------

def f_problemlosning():
    fig = Fig(BOOK)
    fig.title('Fire steg i problemløsning')
    bw, bh, y0 = 300, 230, 300
    tekster = ['Forstå\nles oppgaven\nog tegningen', 'Planlegg\nlag en skisse,\nvelg formel',
               'Gjennomfør\nmål og regn ut', 'Kontroller\ner svaret\nrimelig?']
    for i, t in enumerate(tekster):
        x = 110 + i * (bw + 60)
        fig.flow_box(x, y0, bw, bh, t, size=27)
        fig.circle(x + bw / 2, y0 - 40, 34, fill=fig.p['accent'])
        fig.text(x + bw / 2, y0 - 28, str(i + 1), 34, bold=True)
        if i < 3:
            fig.arrow(x + bw + 6, y0 + bh / 2, x + bw + 54, y0 + bh / 2, fig.p['main'], 5, head=16)
    fig.text(W / 2, 680, 'kontrollspørsmålet: er svaret rimelig?', 29, color=fig.p['accent'], bold=True)
    save(fig, '2py-8-1-problemlosning')


def f_regneark_material():
    fig = Fig(BOOK)
    fig.rect(200, 120, 1200, 64, stroke=fig.p['text'], width=3, rx=8)
    fig.text(240, 164, 'D2', 30, bold=True, anchor='start')
    fig.line(330, 124, 330, 180, fig.p['grid'], 3)
    fig.text(370, 164, '=B2*C2', 30, anchor='start', color=fig.p['accent'], bold=True)
    rows = [['', 'A', 'B', 'C', 'D'],
            ['1', 'Materiale', 'Antall', 'Pris', 'Sum'],
            ['2', 'Terrassebord', '28', '89', '2 492'],
            ['3', 'Skruer (pk)', '2', '199', '398'],
            ['4', 'Beis (L)', '3', '249', '747'],
            ['5', 'Totalt', '', '', '3 637']]
    xs = htable(fig, 200, 220, [80, 420, 200, 200, 240], 82, rows, header=True,
                aligns=['center', 'left', 'right', 'right', 'right'],
                bold_cells={(1, 1), (1, 2), (1, 3), (1, 4), (5, 1), (5, 4)})
    fig.rect(xs[4], 220 + 2 * 82, xs[5] - xs[4], 82, stroke=fig.p['accent'], width=6)
    fig.text(xs[5], 220 + 6 * 82 + 56, 'Totalt-cellen: =SUMMER(D2:D4)', 28, anchor='end', color=fig.p['main'], bold=True)
    fig.text(W / 2, 850, 'endrer du antallet, oppdateres totalen', 30, bold=True)
    save(fig, '2py-8-2-regneark-material')


# ---------- Kapittel 9: Likninger, formler og proporsjonalitet ----------

def f_ohms_lov():
    fig = Fig(BOOK)
    fig.title('Ohms lov som formeltrekant')
    cx, top_y, bot_y = 480, 170, 620
    half = 300
    A = (cx, top_y); Bp = (cx - half, bot_y); C = (cx + half, bot_y)
    fig.poly([A, Bp, C], stroke=fig.p['main'], width=6, close=True)
    mid_y = (top_y + bot_y) / 2 + 40
    xl = cx - half * (mid_y - top_y) / (bot_y - top_y)
    xr = cx + half * (mid_y - top_y) / (bot_y - top_y)
    fig.line(xl, mid_y, xr, mid_y, fig.p['main'], 5)
    fig.line(cx, mid_y, cx, bot_y, fig.p['main'], 5)
    fig.text(cx, (top_y + mid_y) / 2 + 30, 'U', 52, bold=True, italic=True, color=fig.p['accent'])
    fig.text((xl + cx) / 2 - 10, (mid_y + bot_y) / 2 + 16, 'R', 48, bold=True, italic=True)
    fig.text((cx + xr) / 2 + 10, (mid_y + bot_y) / 2 + 16, 'I', 48, bold=True, italic=True)
    fig.text(1170, 280, 'U = R · I', 38, bold=True)
    fig.text(1170, 380, 'I = U / R', 38, bold=True)
    fig.text(1170, 480, 'R = U / I', 38, bold=True)
    fig.text(W / 2, 790, 'eksempel: I = 230/46 = 5 A', 33, bold=True, color=fig.p['accent'])
    save(fig, '2py-9-2-ohms-lov')


def f_omvendt_prop():
    fig = Fig(BOOK)
    fig.title('Omvendt proporsjonalitet')
    rows = [['Arbeidere', 'Timer'],
            ['2', '12'],
            ['4', '6'],
            ['6', '4']]
    htable(fig, 160, 220, [260, 200], 96, rows, header=True)
    tx, ty = fig.coords(0, 8, 0, 14, box=(760, 180, 1400, 700),
                        xticks=[2, 4, 6, 8], yticks=[4, 6, 12],
                        xlabel='Antall arbeidere', ylabel='Timer', tick_size=24)
    fig.plot(lambda x: 24 / x, 1.75, 8, color=fig.p['main'], width=5)
    for x, y in [(2, 12), (4, 6), (6, 4)]:
        fig.line(tx(x), ty(0), tx(x), ty(y), fig.p['grid'], 2.5, dash='8 8')
        fig.point(x, y, f'({x}, {y})', dx=20, dy=-16, size=26)
    fig.text(tx(5.4), ty(24 / 5.4) - 50, 'y = 24/x', 32, bold=True, color=fig.p['main'], anchor='start')
    fig.text(W / 2, 820, 'produktet er konstant: 2 · 12 = 4 · 6 = 6 · 4 = 24', 31, bold=True)
    save(fig, '2py-9-3-omvendt-proporsjonal')


def f_ulikhet_budsjett():
    fig = Fig(BOOK)
    fig.text(W / 2, 120, 'budsjett maks 12 000 kr: materialer 4 500 kr + 600 kr per time', 29)
    fig.text(330, 230, '4500 + 600t ≤ 12 000', 36, bold=True, anchor='start')
    fig.arrow(880, 218, 950, 218, fig.p['main'], 4, head=12)
    fig.text(990, 230, '600t ≤ 7 500', 36, bold=True, anchor='start')
    fig.text(W / 2, 340, 't ≤ 12,5', 40, bold=True, color=fig.p['accent'])
    y = 560
    tx = fig.number_line(0, 16, y=y, ticks=range(0, 17, 2), labels={v: fmt(v) for v in range(0, 17, 2)},
                         segment=(0, 12.5, Fig(BOOK).p['main']),
                         points=[(12.5, Fig(BOOK).p['main'], None)])
    fig.text(tx(12.5), y - 50, 'maks 12,5 timer', 30, bold=True, color=fig.p['main'])
    fig.text(W / 2, 790, 'arbeidet kan vare i høyst 12,5 timer', 29)
    save(fig, '2py-9-4-ulikhet-budsjett')


# ---------- Kapittel 10: Sparing, valuta og indeks ----------

def f_renters_rente():
    fig = Fig(BOOK)
    fig.title('Renters rente: 20 000 kr i 5 år med 4 %')
    base, s = 690, 0.0205
    bx0, bw, gap = 250, 140, 56
    for t in range(6):
        v = 20000 * 1.04 ** t
        x = bx0 + t * (bw + gap)
        fig.rect(x, base - 20000 * s, bw, 20000 * s, fill=fig.p['main'])
        fig.rect(x, base - v * s, bw, (v - 20000) * s, fill=fig.p['accent'])
        fig.text(x + bw / 2, base + 40, str(t), 27)
        if t == 0:
            fig.text(x + bw / 2, base - v * s - 16, '20 000 kr', 26, bold=True)
        if t == 5:
            fig.text(x + bw / 2, base - v * s - 16, '≈ 24 333 kr', 26, bold=True, color=fig.p['accent'])
    fig.line(bx0 - 30, base, bx0 + 6 * bw + 5 * gap + 30, base, fig.p['text'], 3)
    fig.text(bx0 + 3 * (bw + gap) - gap / 2, base + 92, 'År', 27, italic=True)
    x5 = bx0 + 5 * (bw + gap)
    v5 = 20000 * 1.04 ** 5
    fig.text(x5 + bw + 16, base - (20000 + (v5 - 20000) / 2) * s + 10, 'renter', 26, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(x5 + bw + 16, base - 10000 * s + 10, 'innskudd', 26, anchor='start', bold=True, color=fig.p['main'])
    fig.text(W / 2, 830, '20 000 · 1,04⁵ ≈ 24 333 — renten av renten gjør veksten raskere', 30, bold=True)
    save(fig, '2py-10-1-renters-rente')


def f_valutakurs():
    fig = Fig(BOOK)
    fig.title('Kjøps- og salgskurs')
    # kurstavle
    fig.rect(420, 140, 760, 130, fill=fig.p['main'], rx=14)
    fig.text(W / 2, 222, 'EUR    selger 11,70    kjøper 11,30', 36, color='#FFFFFF', bold=True)
    fig.rect(220, 360, 540, 180, stroke=fig.p['main'], width=4, rx=14)
    fig.text(490, 430, 'du kjøper 500 EUR:', 29, bold=True)
    fig.text(490, 495, '500 · 11,70 = 5 850 kr', 31, bold=True, color=fig.p['main'])
    fig.rect(840, 360, 540, 180, stroke=fig.p['main'], width=4, rx=14)
    fig.text(1110, 430, 'du selger 500 EUR:', 29, bold=True)
    fig.text(1110, 495, '500 · 11,30 = 5 650 kr', 31, bold=True, color=fig.p['main'])
    yellow_box(fig, 480, 640, 640, 120, ['differansen: banken tjener 200 kr'], size=31)
    save(fig, '2py-10-2-valutakurs')


# ---------- Kapittel 11: Boksplott og kvartiler ----------

def f_boksplott_2py():
    fig = Fig(BOOK)
    fig.title('Boksplott over monteringstider')
    axis_y = 700
    tx = fig.number_line(0, 60, y=axis_y, ticks=range(0, 61, 10),
                         labels={v: fmt(v) for v in range(0, 61, 10)})
    fig.text(1490, axis_y + 110, 'Minutter', 27, italic=True, anchor='end')
    yc = 380
    boxplot(fig, tx, yc, 12, 20, 28, 38, 55, h=150, fill=fig.p['main'])
    for v, lab in [(12, 'min 12'), (20, 'Q1 = 20'), (28, 'median 28'), (38, 'Q3 = 38'), (55, 'maks 55')]:
        fig.line(tx(v), yc + 80, tx(v), axis_y - 20, fig.p['text'], 2, dash='7 8')
        fig.text(tx(v), yc - 110, lab, 28, bold=True)
    fig.text((tx(20) + tx(38)) / 2, yc + 130, 'den midterste halvparten', 28, color=fig.p['main'], bold=True)
    save(fig, '2py-11-1-boksplott')


def f_sammenligne_boksplott():
    fig = Fig(BOOK)
    fig.title('To montørlag — samme median, ulik spredning')
    axis_y = 720
    tx = fig.number_line(0, 60, y=axis_y, ticks=range(0, 61, 10),
                         labels={v: fmt(v) for v in range(0, 61, 10)})
    fig.text(1490, axis_y + 110, 'Minutter per oppdrag', 26, italic=True, anchor='end')
    boxplot(fig, tx, 290, 18, 22, 25, 30, 35, h=110, fill=fig.p['main'])
    boxplot(fig, tx, 520, 8, 15, 25, 45, 55, h=110, color=fig.p['extra'], fill=fig.p['accent'])
    fig.text(tx(36) + 30, 240, 'Lag A: jevnt og forutsigbart', 29, bold=True, color=fig.p['main'], anchor='start')
    fig.text(tx(56) - 10, 440, 'Lag B: større spredning', 29, bold=True, color=fig.p['extra'], anchor='end')
    fig.line(tx(25), 200, tx(25), axis_y - 30, fig.p['warn'], 3, dash='10 10')
    fig.text(tx(25), 175, 'median 25', 27, bold=True, color=fig.p['warn'])
    save(fig, '2py-11-1-sammenligne-boksplott')


# ---------- Kapittel 12: Brøk, prosent og forhold ----------

def f_trippelkort():
    fig = Fig(BOOK)
    fig.title('Samme verdi — tre skrivemåter')
    bx, by, bw, bh = 300, 180, 900, 110
    fig.fraction_bar(bx, by, bw, bh, 4, 3, fill=fig.p['main'])
    kort_y = 470
    for i, lab in enumerate(['3/4', '0,75', '75 %']):
        kx = 300 + i * 340
        fig.rect(kx, kort_y, 240, 130, stroke=fig.p['main'], width=4, rx=14)
        fig.text(kx + 120, kort_y + 80, lab, 38, bold=True)
        fig.line(kx + 120, kort_y - 10, bx + bw * 3 / 8, by + bh + 14, fig.p['grid'], 2.5)
        if i < 2:
            fig.text(kx + 290, kort_y + 75, '=', 40, bold=True, color=fig.p['accent'])
    fig.text(W / 2, 780, 'tanken er 3/4 full = 75 %', 32, bold=True, color=fig.p['accent'])
    save(fig, '2py-12-1-trippelkort')


def f_rabatt():
    fig = Fig(BOOK)
    fig.title('30 % proffrabatt')
    price_tag(fig, 400, 200, 460, 120, 'Listepris: 2 400 kr', size=31)
    yellow_box(fig, 880, 145, 420, 110, ['30 % proffrabatt'], size=31)
    bx, by, bw, bh = 220, 380, 1160, 120
    for i in range(10):
        x = bx + i * bw / 10
        rabatt = i < 3
        fig.rect(x, by, bw / 10, bh, fill=fig.p['accent'] if rabatt else fig.p['main'],
                 stroke=fig.p['bg'], width=3, opacity=0.5 if rabatt else 0.9)
        if rabatt:
            crossmark(fig, x + bw / 20, by + bh / 2, 16, color=fig.p['accent'])
    brace_h(fig, bx, bx + bw * 0.3, by + bh + 30, 'rabatt: 720 kr', color=fig.p['accent'], size=29)
    brace_h(fig, bx + bw * 0.3, bx + bw, by + bh + 30, 'å betale: 1 680 kr', color=fig.p['main'], size=29)
    fig.text(W / 2, 760, 'snarvei: 2 400 · 0,70 = 1 680', 34, bold=True)
    save(fig, '2py-12-1-rabatt-materialer')


def f_skalere_oppskrift():
    fig = Fig(BOOK)
    fig.title('Skalere oppskrift i storkjøkken')
    rows4 = [['4 porsjoner', ''],
             ['Mel', '400 g'],
             ['Melk', '6 dl'],
             ['Egg', '2']]
    rows10 = [['10 porsjoner', ''],
              ['Mel', '1 000 g'],
              ['Melk', '15 dl'],
              ['Egg', '5']]
    htable(fig, 180, 200, [260, 200], 96, rows4, header=True, aligns=['left', 'right'])
    htable(fig, 960, 200, [260, 200], 96, rows10, header=True, aligns=['left', 'right'])
    fig.arrow(680, 390, 920, 390, fig.p['accent'], 7, head=20)
    fig.text(800, 340, '· 2,5', 38, bold=True, color=fig.p['accent'])
    fig.text(800, 460, '(fordi 10 : 4 = 2,5)', 28, color=fig.p['extra'])
    fig.text(W / 2, 780, 'alle ingrediensene ganges med samme tall', 30, bold=True)
    save(fig, '2py-12-2-skalere-oppskrift')


ALL = [f_laerlingbudsjett, f_billan, f_mva_faktura, f_resultat_kafe,
       f_timelonn, f_vekstfaktor, f_break_even_2py, f_verditap,
       f_male_vegg, f_gulvlegging, f_listverk, f_arealformler,
       f_betongstoping, f_sylindertank, f_overflate_tank, f_volumformler,
       f_stige_hms, f_345, f_takvinkel, f_sohcahtoa,
       f_byggetegning, f_motsatt_vei, f_kart_avstand,
       f_kvalitetskontroll, f_diagramvelger, f_lonn_sentral, f_variasjonsbredde,
       f_frekvensklasser, f_klassemidtpunkt,
       f_kk_sannsynlighet, f_sannsynlighetslinje, f_risikomatrise, f_tiltak_risiko,
       f_valgtre_uniform, f_kodelas,
       f_terrassebord, f_svinn, f_akkord, f_timepris,
       f_enhetstrapp, f_toleranse, f_tommer,
       f_problemlosning, f_regneark_material,
       f_ohms_lov, f_omvendt_prop, f_ulikhet_budsjett,
       f_renters_rente, f_valutakurs,
       f_boksplott_2py, f_sammenligne_boksplott,
       f_trippelkort, f_rabatt, f_skalere_oppskrift]

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for f in ALL:
        f()
    print(f'{len(ALL)} figurer generert i {OUT}')
