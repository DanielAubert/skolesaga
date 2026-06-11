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
    fig.text(1330, 560, 'avdrag', 27, color=fig.p['main'], bold=True)
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
    fig.point(5, v5, 'ca. 177 000 kr', dx=24, dy=-10)
    fig.text(tx(6.4), ty(400000 * 0.85 ** 5.2), 'V = 400 000 · 0,85ˣ', 32, anchor='start', bold=True, color=fig.p['main'])
    fig.text(W / 2, 830, '15 % verditap per år gir vekstfaktor 0,85', 30, bold=True)
    save(fig, '2py-2-4-verditap-varebil')
