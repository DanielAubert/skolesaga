#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for Matematikk 2P.

Kjør fra repo-rot:  python3 scripts/svg/figurer-2p.py
Output: public/images/content/2p/*.svg
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, W, H, fmt  # noqa: E402

BOOK = '2p'
ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
OUT = os.path.join(ROOT, 'public', 'images', 'content', BOOK)
GREEN = '#3A8F5A'


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


def warn_tri(fig, x, y, s=34, color=None):
    c = color or fig.p['warn']
    fig.poly([(x, y - s), (x + s * 0.95, y + s * 0.75), (x - s * 0.95, y + s * 0.75)],
             stroke=c, width=5, close=True)
    fig.text(x, y + s * 0.52, '!', 32, color=c, bold=True)


def ellipse(fig, cx, cy, rx, ry, fill=None, stroke=None, width=3, opacity=1, dash=None):
    f = fill or 'none'
    s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
    d = f' stroke-dasharray="{dash}"' if dash else ''
    fig.raw(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="{f}"{s}{d} opacity="{opacity}"/>')


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


SUPS = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
        '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻', '−': '⁻'}


def sup(n):
    return ''.join(SUPS[ch] for ch in str(n))


PIPS = {1: [(0, 0)], 2: [(-1, -1), (1, 1)], 3: [(-1, -1), (0, 0), (1, 1)],
        4: [(-1, -1), (1, -1), (-1, 1), (1, 1)],
        5: [(-1, -1), (1, -1), (0, 0), (-1, 1), (1, 1)],
        6: [(-1, -1), (1, -1), (-1, 0), (1, 0), (-1, 1), (1, 1)]}


def die(fig, cx, cy, s, face, fillc=None, pip='#FFFFFF'):
    fig.rect(cx - s / 2, cy - s / 2, s, s, fill=fillc or fig.p['main'], rx=s * 0.18)
    for px, py in PIPS[face]:
        fig.circle(cx + px * s * 0.26, cy + py * s * 0.26, s * 0.09, fill=pip)


def scatter(fig, tx, ty, pts, r=8, color=None):
    for x, y in pts:
        fig.circle(tx(x), ty(y), r, fill=color or fig.p['main'])


def panel_axes(fig, x0, y0, x1, y1, color=None):
    """Enkle akser (L-form) for småpaneler."""
    c = color or fig.p['text']
    fig.arrow(x0, y1, x1 + 16, y1, c, 3)
    fig.arrow(x0, y1, x0, y0 - 16, c, 3)


# ---------- Kapittel 1: Økonomi ----------

def f_budsjett_regnskap():
    fig = Fig(BOOK)
    fig.title('Budsjett og regnskap')
    fig.text(390, 200, 'Budsjett (planen)', 32, bold=True)
    fig.text(1210, 200, 'Regnskap (det som skjedde)', 32, bold=True)
    fig.text(800, 200, 'Avvik', 32, bold=True, color=fig.p['accent'])
    rows_b = [['Mat', '3 000'], ['Bolig', '8 000'], ['Transport', '1 500']]
    rows_r = [['Mat', '3 600'], ['Bolig', '8 000'], ['Transport', '1 200']]
    htable(fig, 170, 240, [250, 190], 100, rows_b, aligns=['left', 'right'], header=False)
    htable(fig, 990, 240, [250, 190], 100, rows_r, aligns=['left', 'right'], header=False)
    avvik = [('+600', fig.p['accent'], True), ('0', fig.p['text'], False), ('−300', fig.p['text'], False)]
    for i, (t, c, hl) in enumerate(avvik):
        yc = 240 + i * 100 + 50
        if hl:
            fig.rect(720, yc - 36, 160, 72, fill=fig.p['accent'], opacity=0.15, rx=10)
        fig.text(800, yc + 11, t, 32, color=c, bold=True)
    fig.text(W / 2, 660, 'Avvik = regnskap − budsjett', 30)
    fig.text(W / 2, 730, 'Maten ble 600 kr dyrere enn planlagt', 28, color=fig.p['accent'])
    save(fig, '2p-1-1-budsjett-regnskap')


def f_reallonn():
    fig = Fig(BOOK)
    fig.title('Nominell lønn og reallønn')
    base_y = 640
    # to lønnsstaver (proporsjonale: 500 og 515)
    fig.rect(230, base_y - 388, 170, 388, fill=fig.p['main'])
    fig.rect(490, base_y - 400, 170, 400, fill=fig.p['main'])
    fig.text(315, base_y + 44, '500 000 kr', 28, bold=True)
    fig.text(575, base_y + 44, '515 000 kr', 28, bold=True)
    fig.arrow(420, base_y - 430, 470, base_y - 430, fig.p['main'], 4)
    fig.text(445, base_y - 460, '+ 3 %', 32, color=fig.p['main'], bold=True)
    fig.text(315, base_y + 92, 'lønn i fjor', 26)
    fig.text(575, base_y + 92, 'lønn i år', 26)
    # prislapp
    fig.poly([(950, 220), (1330, 220), (1390, 300), (1330, 380), (950, 380)],
             stroke=fig.p['accent'], width=5, close=True)
    fig.circle(1352, 300, 9, fill=fig.p['accent'])
    fig.text(1140, 290, 'prisene steg', 30, color=fig.p['accent'], bold=True)
    fig.text(1140, 340, '4 %', 36, color=fig.p['accent'], bold=True)
    fig.arrow(1140, 440, 1140, 540, fig.p['accent'], 6, head=18)
    fig.text(1140, 600, 'reallønnen sank', 32, bold=True, color=fig.p['accent'])
    fig.text(1140, 650, 'prisene steg mer enn lønnen', 28)
    save(fig, '2p-1-1-reallonn')


def f_serie_annuitet():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 20, 0, 10000, box=(190, 150, 1420, 700),
                        xticks=[5, 10, 15, 20], yticks=[2000, 4000, 6000, 8000],
                        xlabel='Termin', ylabel='Terminbeløp (kr)')
    fig.plot(lambda x: 9000 - 200 * x, 0, 20, color=fig.p['main'], width=5)
    fig.plot(lambda x: 7000, 0, 20, color=fig.p['accent'], width=5)
    fig.text(tx(3.2), ty(9000 - 200 * 3.2) - 26, 'serielån: synker', 30, color=fig.p['main'], bold=True, anchor='start')
    fig.text(tx(12.5), ty(7000) + 52, 'annuitetslån: likt beløp', 30, color=fig.p['accent'], bold=True, anchor='start')
    fig.circle(tx(10), ty(7000), 11, fill=fig.p['text'])
    fig.text(W / 2, 800, 'serielån er billigst totalt, annuitetslån er jevnest', 30)
    save(fig, '2p-1-2-serie-vs-annuitet')


def f_kredittkort():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 24, 0, 35000, box=(190, 150, 1420, 720),
                        xticks=[6, 12, 18, 24], yticks=[10000, 20000, 30000],
                        xlabel='Måneder', ylabel='Gjeld (kr)')
    fig.plot(lambda x: 20000 * 1.25 ** (x / 12), 0, 24, color=fig.p['accent'], width=6)
    fig.plot(lambda x: 20000, 0, 24, color=fig.p['main'], width=4, dash='14 12')
    fig.text(tx(10), ty(20000 * 1.25 ** (10 / 12)) - 104, '25 % årlig rente,', 30, color=fig.p['accent'], bold=True, anchor='start')
    fig.text(tx(10), ty(20000 * 1.25 ** (10 / 12)) - 66, 'ingen nedbetaling', 30, color=fig.p['accent'], bold=True, anchor='start')
    fig.text(tx(13), ty(20000) + 44, 'uten renter', 28, color=fig.p['main'])
    # enkelt kredittkort i hjørnet
    fig.rect(280, 200, 230, 145, fill=fig.p['main'], rx=14)
    fig.rect(280, 232, 230, 30, fill=fig.p['bg'], opacity=0.85)
    fig.rect(300, 295, 70, 26, fill=fig.p['accent'], rx=5)
    save(fig, '2p-1-2-kredittkort')


def f_trinnskatt():
    fig = Fig(BOOK)
    fig.title('Trinnskatt: en trapp over inntekten')
    axis_y = 660
    zones = [(170, 420, 0, '0 %'), (420, 640, 70, '1,7 %'),
             (640, 1040, 160, '4,0 %'), (1040, 1430, 300, '13,7 %')]
    ops = [0.12, 0.25, 0.42, 0.65]
    for (x0, x1, h, lab), op in zip(zones, ops):
        if h > 0:
            fig.rect(x0, axis_y - h, x1 - x0, h, fill=fig.p['main'], opacity=op)
            fig.rect(x0, axis_y - h, x1 - x0, h, stroke=fig.p['main'], width=3)
        fig.text((x0 + x1) / 2, axis_y - h - 18, lab, 32, bold=True, color=fig.p['main'])
    fig.arrow(150, axis_y, 1470, axis_y, fig.p['text'], 4)
    fig.text(1400, axis_y + 44, 'Inntekt', 28, italic=True)
    # eksempelinntekt: horisontal stav delt etter sonene den krysser
    bar_y = axis_y + 60
    seg_cols = [0.12, 0.25, 0.42]
    for (x0, x1, h, lab), op in zip(zones[:3], seg_cols):
        x_end = min(x1, 900)
        fig.rect(x0, bar_y, x_end - x0, 44, fill=fig.p['accent'], opacity=0.25 + op)
        if x1 >= 900:
            break
    fig.rect(170, bar_y, 730, 44, stroke=fig.p['accent'], width=3)
    fig.text(540, bar_y + 96, 'eksempelinntekt: krysser tre soner', 28, color=fig.p['accent'], bold=True)
    fig.text(W / 2, 850, 'hver del av inntekten skattlegges med sin sats', 30)
    save(fig, '2p-1-3-trinnskatt')


def f_break_even():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 1000, 0, 110000, box=(210, 140, 1420, 720),
                        xticks=[200, 400, 600, 800, 1000], yticks=[30000, 60000, 90000],
                        xlabel='Antall solgte enheter', ylabel='Kroner')
    # overskudd/underskudd-soner
    fig.shade_under(lambda x: 104000, 600, 1000, color=fig.p['main'], opacity=0.08)
    fig.plot(lambda x: 100 * x, 0, 1000, color=fig.p['main'], width=5)
    fig.plot(lambda x: 30000 + 50 * x, 0, 1000, color=fig.p['accent'], width=5)
    fig.circle(tx(600), ty(60000), 13, fill=fig.p['text'])
    fig.text(tx(600), ty(60000) - 56, 'nullpunkt: går i null', 30, bold=True)
    fig.text(tx(840), ty(100 * 840) + 8, 'inntekter', 30, color=fig.p['main'], bold=True, anchor='end')
    fig.text(tx(900), ty(30000 + 50 * 900) + 52, 'kostnader', 30, color=fig.p['accent'], bold=True)
    fig.text(tx(300), ty(12000), 'underskudd', 28, color=fig.p['warn'])
    fig.text(tx(820), ty(30000), 'overskudd', 28, color=fig.p['main'])
    save(fig, '2p-1-4-break-even')


def f_faste_variable():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 1000, 0, 25000, box=(210, 140, 1420, 720),
                        xticks=[250, 500, 750, 1000], yticks=[5000, 15000, 25000],
                        xlabel='Antall brød', ylabel='Kostnad (kr)')
    fig.plot(lambda x: 15000, 0, 1000, color=fig.p['main'], width=5)
    fig.plot(lambda x: 15000 + 8 * x, 0, 1000, color=fig.p['accent'], width=5)
    fig.text(tx(80), ty(15000) + 50, 'faste kostnader', 30, color=fig.p['main'], bold=True, anchor='start')
    fig.text(tx(370), ty(15000 + 8 * 370) - 28, 'totale kostnader: 15 000 + 8 kr per brød', 30,
             color=fig.p['accent'], bold=True, anchor='start')
    fig.arrow(tx(820), ty(15000), tx(820), ty(15000 + 8 * 820), fig.p['warn'], 4, head=14)
    fig.arrow(tx(820), ty(15000 + 8 * 820), tx(820), ty(15000), fig.p['warn'], 4, head=14)
    fig.text(tx(820) + 22, ty(18200) + 10, 'variable kostnader', 28, color=fig.p['warn'], bold=True, anchor='start')
    save(fig, '2p-1-4-faste-variable')


def f_mva_stav():
    fig = Fig(BOOK)
    fig.title('Merverdiavgift (mva)')
    x0, y0, hh = 200, 190, 110
    w100 = 960  # 1200 kr
    w25 = 240   # 300 kr
    fig.rect(x0, y0, w100, hh, fill=fig.p['main'])
    fig.rect(x0 + w100, y0, w25, hh, fill=fig.p['accent'])
    fig.text(x0 + w100 / 2, y0 + hh / 2 + 11, 'uten mva: 1 200 kr (100 %)', 30, color='#FFFFFF', bold=True)
    fig.text(x0 + w100 + w25 / 2, y0 - 18, '+ 25 % mva', 28, color=fig.p['accent'], bold=True)
    fig.text(x0 + w100 + w25 / 2, y0 + hh / 2 + 11, '300 kr', 28, color='#FFFFFF', bold=True)
    brace_h(fig, x0, x0 + w100 + w25, y0 + hh + 26, 'totalt: 1 500 kr (125 %)', size=30)
    # tre satser
    fig.text(W / 2, 480, 'Mva-satsene i Norge', 30, bold=True)
    sats = [('25 %', 'generell', 250), ('15 %', 'mat', 150), ('12 %', 'transport, kino, hotell', 120)]
    for i, (s, lab, hrel) in enumerate(sats):
        bx = 330 + i * 380
        fig.rect(bx, 760 - hrel, 130, hrel, fill=fig.p['main'], opacity=0.85)
        fig.text(bx + 65, 760 - hrel - 16, s, 30, bold=True, color=fig.p['main'])
        fig.text(bx + 65, 808, lab, 26)
    fig.line(250, 760, 1350, 760, fig.p['text'], 3)
    save(fig, '2p-1-5-mva-stav')


# ---------- Kapittel 2: Funksjoner og modeller ----------

def f_abonnement():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 500, 0, 620, box=(190, 140, 1420, 720),
                        xticks=[100, 200, 300, 400, 500], yticks=[100, 200, 300, 400, 500, 600],
                        xlabel='Ringeminutter', ylabel='Pris (kr)')
    xs = 2500 / 9  # skjæring: 99 + x = 349 + 0,1x
    ys = 99 + xs
    fig.plot(lambda x: 99 + x, 0, 500, color=fig.p['main'], width=5)
    fig.plot(lambda x: 349 + 0.1 * x, 0, 500, color=fig.p['accent'], width=5)
    fig.line(tx(xs), ty(0), tx(xs), ty(ys), fig.p['text'], 2.5, dash='10 10')
    fig.line(tx(0), ty(ys), tx(xs), ty(ys), fig.p['text'], 2.5, dash='10 10')
    fig.circle(tx(xs), ty(ys), 12, fill=fig.p['text'])
    fig.text(tx(xs) + 20, ty(ys) - 30, 'her lønner det seg å bytte: ca. 278 min', 29, bold=True, anchor='start')
    fig.text(tx(390), ty(99 + 390) - 30, 'A: 99 kr + 1 kr/min', 29, color=fig.p['main'], bold=True, anchor='end')
    fig.text(tx(390), ty(349 + 39) + 52, 'B: 349 kr + 0,1 kr/min', 29, color=fig.p['accent'], bold=True, anchor='start')
    save(fig, '2p-2-1-abonnement')


def f_vekst_nedgang():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 10, 0, 420, box=(190, 140, 1420, 700),
                        xticks=[2, 4, 6, 8, 10], yticks=[100, 200, 300, 400],
                        xlabel='År', ylabel='Verdi')
    fig.plot(lambda x: 100 * 1.15 ** x, 0, 10, color=fig.p['main'], width=5)
    fig.plot(lambda x: 100 * 0.85 ** x, 0, 10, color=fig.p['accent'], width=5)
    fig.text(tx(7.6), ty(100 * 1.15 ** 7.6) - 6, 'y = 100 · 1,15ˣ', 32, color=fig.p['main'], bold=True, anchor='end')
    fig.text(tx(6.4), ty(100 * 0.85 ** 6.4) - 36, 'y = 100 · 0,85ˣ', 32, color=fig.p['accent'], bold=True, anchor='start')
    fig.text(W / 2, 810, 'vekstfaktor over 1 gir vekst, under 1 gir nedgang', 30)
    save(fig, '2p-2-2-vekst-og-nedgang')


def f_doblingstid():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 16, 0, 880, box=(190, 130, 1420, 700),
                        xticks=[5, 10, 15], yticks=[100, 200, 400, 800],
                        xlabel='År', ylabel='Antall')
    f = lambda x: 100 * 2 ** (x / 5)
    fig.plot(f, 0, 15.6, color=fig.p['main'], width=5)
    for x, y in [(0, 100), (5, 200), (10, 400), (15, 800)]:
        fig.line(tx(0), ty(y), tx(x), ty(y), fig.p['grid'], 2.5, dash='9 9')
        fig.line(tx(x), ty(0), tx(x), ty(y), fig.p['accent'], 2.5, dash='9 9')
        fig.circle(tx(x), ty(y), 10, fill=fig.p['accent'])
    for a in (0, 5, 10):
        fig.arrow(tx(a) + 8, ty(60), tx(a + 5) - 8, ty(60), fig.p['accent'], 3.5, head=10)
    fig.text(tx(7.5), ty(60) + 46, '5 år', 28, color=fig.p['accent'], bold=True)
    fig.text(W / 2, 820, 'doblingstid = 5 år — alltid like lang tid', 30, bold=True)
    save(fig, '2p-2-2-doblingstid')


REG_PTS = [(1, 1.9), (1.8, 2.0), (2.6, 3.4), (3.4, 3.1), (4.2, 4.6), (5.0, 4.3),
           (5.8, 5.5), (6.6, 6.4), (7.4, 6.1), (8.2, 7.6), (9.0, 7.2), (9.8, 8.6)]


def f_regresjon():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 11, 0, 10, box=(190, 130, 1420, 720), grid=False,
                        xlabel='x', ylabel='y')
    a, b = 0.72, 1.05  # tilnærmet minste kvadraters linje for punktene
    for x, y in REG_PTS:
        fig.line(tx(x), ty(y), tx(x), ty(a * x + b), fig.p['text'], 2.5, dash='8 8')
    fig.plot(lambda x: a * x + b, 0.3, 10.6, color=fig.p['accent'], width=5)
    scatter(fig, tx, ty, REG_PTS, r=9, color=fig.p['main'])
    fig.text(tx(2.2), ty(8.6), 'avvik — linjen gjør', 29, bold=True, anchor='start')
    fig.text(tx(2.2), ty(7.9), 'disse minst mulig', 29, bold=True, anchor='start')
    fig.arrow(tx(2.6), ty(8.3), tx(3.38), ty(3.3), fig.p['text'], 3, head=12)
    save(fig, '2p-2-3-regresjon')


def f_stykkevis():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 20, 0, 900, box=(190, 140, 1420, 720),
                        xticks=[5, 10, 15, 20], yticks=[299, 500, 700, 900],
                        xlabel='Antall timer', ylabel='Pris (kr)')
    fig.plot(lambda x: 299, 0, 10, color=fig.p['main'], width=6)
    fig.plot(lambda x: 299 + 50 * (x - 10), 10, 20, color=fig.p['accent'], width=6)
    fig.circle(tx(10), ty(299), 12, fill=fig.p['text'])
    fig.text(tx(10), ty(299) + 58, 'knekkpunkt', 29, bold=True)
    fig.text(tx(4.8), ty(299) - 30, 'fast pris inntil 10 timer', 29, color=fig.p['main'], bold=True)
    fig.text(tx(13.2), ty(299 + 50 * 5) - 30, '+ 50 kr per ekstra time', 29, color=fig.p['accent'], bold=True, anchor='start')
    save(fig, '2p-2-4-stykkevis-strom')


def f_trappetakst():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 350, 0, 90, box=(190, 140, 1420, 700),
                        xticks=[20, 100, 200, 300, 350], yticks=[27, 45, 75],
                        xlabel='Vekt (gram)', ylabel='Porto (kr)')
    steps = [(0, 20, 27), (20, 100, 45), (100, 350, 75)]
    for a, b, p in steps:
        fig.line(tx(a), ty(p), tx(b), ty(p), fig.p['main'], 6)
        fig.circle(tx(a), ty(p), 11, fill=fig.p['main'])
        if b < 350:
            fig.circle(tx(b), ty(p), 11, fill=fig.p['bg'], stroke=fig.p['main'], width=5)
    fig.text(tx(180), ty(58), 'prisen hopper ved grensene', 30, color=fig.p['accent'], bold=True)
    save(fig, '2p-2-4-trappetakst')


IS_PTS = [(12, 58), (14, 75), (16, 82), (18, 108), (20, 115), (21, 132),
          (23, 140), (25, 165), (27, 172), (29, 188)]


def f_issalg():
    fig = Fig(BOOK)
    tx, ty = fig.coords(10, 30, 0, 200, box=(210, 140, 1420, 720),
                        xticks=[10, 15, 20, 25, 30], yticks=[50, 100, 150, 200],
                        xlabel='Temperatur (°C)', ylabel='Solgte is')
    fig.plot(lambda x: 8 * x - 40, 10.5, 29.5, color=fig.p['accent'], width=5)
    scatter(fig, tx, ty, IS_PTS, r=9, color=fig.p['main'])
    fig.line(tx(25), ty(0), tx(25), ty(160), fig.p['text'], 2.5, dash='10 10')
    fig.line(tx(10), ty(160), tx(25), ty(160), fig.p['text'], 2.5, dash='10 10')
    fig.text(tx(14), ty(8 * 14 - 40) - 34, 'y = 8x − 40', 32, color=fig.p['accent'], bold=True)
    fig.text(tx(24.6), ty(178), 'ved 25 °C: ca. 160 is', 29, bold=True, anchor='end')
    save(fig, '2p-2-5-issalg-temperatur')


# ---------- Kapittel 3: Statistikk ----------

def f_boksplott():
    fig = Fig(BOOK)
    fig.title('Boksplott')
    axis_y = 700
    tx = fig.number_line(0, 50, y=axis_y, ticks=range(0, 51, 10),
                         labels={v: fmt(v) for v in range(0, 51, 10)})
    yc = 380
    boxplot(fig, tx, yc, 8, 18, 25, 34, 47, h=150, fill=fig.p['main'])
    for v, lab in [(8, 'min 8'), (18, 'Q1 = 18'), (25, 'median 25'), (34, 'Q3 = 34'), (47, 'maks 47')]:
        fig.line(tx(v), yc + 80, tx(v), axis_y - 20, fig.p['text'], 2, dash='7 8')
        fig.text(tx(v), yc - 110 if lab.startswith(('Q', 'median')) else yc - 110, lab, 28, bold=True)
    fig.text((tx(18) + tx(34)) / 2, yc + 130, 'den midterste halvparten av dataene', 28, color=fig.p['main'], bold=True)
    save(fig, '2p-3-1-boksplott')


def f_histogram():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 40, 0, 14, box=(210, 140, 1420, 700),
                        xticks=[0, 10, 20, 30, 40], yticks=[5, 10],
                        xlabel='Reisetid (minutter)', ylabel='Antall elever')
    freqs = [(0, 10, 5), (10, 20, 12), (20, 30, 8), (30, 40, 3)]
    for a, b, f in freqs:
        fig.rect(tx(a), ty(f), tx(b) - tx(a), ty(0) - ty(f), fill=fig.p['main'], opacity=0.8)
        fig.rect(tx(a), ty(f), tx(b) - tx(a), ty(0) - ty(f), stroke=fig.p['bg'], width=3)
        fig.text((tx(a) + tx(b)) / 2, ty(f) - 14, fmt(f), 28, bold=True, color=fig.p['main'])
    fig.text(W / 2, 810, 'stolpene henger sammen fordi tallene er gruppert i intervaller', 29)
    save(fig, '2p-3-1-histogram')


def f_frekvenstabell():
    fig = Fig(BOOK)
    fig.title('Frekvenstabell med kumulativ frekvens')
    rows = [['Karakter', 'Frekvens', 'Kumulativ frekvens'],
            ['2', '4', '4'],
            ['3', '8', '12'],
            ['4', '10', '22'],
            ['5', '6', '28'],
            ['Sum', '28', None]]
    xs = htable(fig, 330, 150, [280, 280, 380], 100, rows, header=True,
                bold_cells={(5, 0), (5, 1)})
    # buede piler: kumulativ bygges opp nedover
    ax = xs[3] + 40
    for i in range(1, 4):
        y1 = 150 + i * 100 + 50
        y2 = y1 + 100
        fig.raw(f'<path d="M {ax},{y1} C {ax + 70},{y1 + 25} {ax + 70},{y2 - 25} {ax + 4},{y2}" '
                f'fill="none" stroke="{fig.p["accent"]}" stroke-width="4"/>')
        fig.arrow(ax + 26, y2 - 16, ax + 4, y2, fig.p['accent'], 4, head=0.1)
    fig.text(ax + 88, 438, '+ neste', 26, color=fig.p['accent'], anchor='start', bold=True)
    fig.text(ax + 88, 478, 'frekvens', 26, color=fig.p['accent'], anchor='start', bold=True)
    fig.text(W / 2, 830, 'kumulativ = summen så langt', 30, bold=True)
    save(fig, '2p-3-1-frekvenstabell')


def f_normalfordeling():
    fig = Fig(BOOK)
    tx, ty, f = fig.normal_curve(178, 6, box=(190, 170, 1420, 660),
                                 zones=[(-4, 4, Fig(BOOK).p['main'], 0.18)],
                                 xlabels={-2: '166', -1: '172', 0: '178', 1: '184', 2: '190'})
    fig.line(tx(178), ty(0), tx(178), ty(1), fig.p['text'], 3, dash='10 10')
    fig.text(tx(178), ty(1) - 24, 'μ = 178', 32, bold=True)
    fig.arrow(tx(172), ty(0.45), tx(184), ty(0.45), fig.p['accent'], 4, head=14)
    fig.arrow(tx(184), ty(0.45), tx(172), ty(0.45), fig.p['accent'], 4, head=14)
    fig.text(tx(181), ty(0.45) - 22, 'σ = 6', 30, color=fig.p['accent'], bold=True)
    fig.text(tx(196), ty(0) + 44, 'Høyde (cm)', 28, italic=True, anchor='end')
    fig.text(W / 2, 820, 'de fleste ligger nær midten', 30)
    save(fig, '2p-3-2-normalfordeling')


def f_empirisk():
    fig = Fig(BOOK)
    p = Fig(BOOK).p
    tx, ty, f = fig.normal_curve(0, 1, box=(190, 130, 1420, 600),
                                 zones=[(-1, 1, p['main'], 0.55), (-2, -1, p['main'], 0.3),
                                        (1, 2, p['main'], 0.3), (-3, -2, p['main'], 0.14),
                                        (2, 3, p['main'], 0.14)],
                                 xlabels={-3: 'μ−3σ', -2: 'μ−2σ', -1: 'μ−σ', 0: 'μ',
                                          1: 'μ+σ', 2: 'μ+2σ', 3: 'μ+3σ'})
    fig.text(tx(0), ty(0.42), '68 %', 34, color='#FFFFFF', bold=True)
    brace_h(fig, tx(-1), tx(1), 690, 'μ ± 1σ: 68 %', size=28, lab_dy=-22)
    brace_h(fig, tx(-2), tx(2), 760, 'μ ± 2σ: 95 %', size=28, lab_dy=-22)
    brace_h(fig, tx(-3), tx(3), 830, 'μ ± 3σ: 99,7 %', size=28, lab_dy=-22)
    save(fig, '2p-3-2-empirisk-regel')


def f_zskar():
    fig = Fig(BOOK)
    fig.title('z-skår: hvilket resultat er best?')
    p = fig.p
    for (bx0, bx1, mu, sg, res, navn, z) in [
            (140, 760, 60, 10, 75, 'Matteprøve', 'z = 1,5'),
            (840, 1460, 70, 5, 78, 'Engelskprøve', 'z = 1,6')]:
        tx, ty, f = fig.normal_curve(mu, sg, box=(bx0, 250, bx1, 620),
                                     zones=[(-4, 4, p['main'], 0.14)],
                                     xlabels={0: fmt(mu)})
        zr = (res - mu) / sg
        fig.line(tx(res), ty(0), tx(res), ty(f(res)), p['accent'], 4)
        fig.circle(tx(res), ty(0), 10, fill=p['accent'])
        fig.text(tx(res) + 8, ty(f(res)) - 18, fmt(res), 30, color=p['accent'], bold=True)
        fig.text((bx0 + bx1) / 2, 215, f'{navn}: μ = {fmt(mu)}, σ = {fmt(sg)}', 30, bold=True)
        fig.text((bx0 + bx1) / 2, 740, z, 34, color=p['accent'], bold=True)
    fig.text(W / 2, 840, 'engelsk er relativt sett best', 32, bold=True)
    save(fig, '2p-3-2-zskar')


def f_avkuttet():
    fig = Fig(BOOK)
    data = [98, 99.5, 100.5, 101.5, 103]
    # venstre: kuttet akse
    tx, ty = fig.coords(0, 6, 95, 105, box=(170, 180, 700, 620),
                        xticks=[1, 2, 3, 4, 5], yticks=[95, 100, 105])
    pts = [(tx(i + 1), ty(v)) for i, v in enumerate(data)]
    fig.poly(pts, stroke=fig.p['accent'], width=5)
    for q in pts:
        fig.circle(q[0], q[1], 8, fill=fig.p['accent'])
    warn_tri(fig, 250, 240, 30)
    fig.text(435, 700, 'misvisende: kuttet akse', 29, color=fig.p['warn'], bold=True)
    # høyre: ærlig akse
    tx2, ty2 = fig.coords(0, 6, 0, 120, box=(880, 180, 1410, 620),
                          xticks=[1, 2, 3, 4, 5], yticks=[0, 40, 80, 120])
    pts2 = [(tx2(i + 1), ty2(v)) for i, v in enumerate(data)]
    fig.poly(pts2, stroke=fig.p['main'], width=5)
    for q in pts2:
        fig.circle(q[0], q[1], 8, fill=fig.p['main'])
    fig.text(1145, 700, 'ærlig: aksen starter på 0', 29, color=fig.p['main'], bold=True)
    fig.text(W / 2, 810, 'samme tall — helt ulikt inntrykk', 32, bold=True)
    save(fig, '2p-3-3-avkuttet-akse')


def f_ledende():
    fig = Fig(BOOK)
    fig.title('Nøytralt eller ledende spørsmål?')
    # venstre kort
    fig.rect(130, 160, 640, 560, stroke=fig.p['main'], width=4, rx=18)
    check(fig, 200, 230, 26)
    fig.text(250, 242, 'Nøytralt', 30, bold=True, anchor='start', color=GREEN)
    fig.text(170, 330, 'Hva synes du om', 30, anchor='start')
    fig.text(170, 372, 'skolematordningen?', 30, anchor='start')
    for i, alt in enumerate(['Svært bra', 'Bra', 'Dårlig', 'Svært dårlig']):
        yy = 430 + i * 66
        fig.rect(180, yy, 36, 36, stroke=fig.p['main'], width=3, rx=6)
        fig.text(240, yy + 28, alt, 27, anchor='start')
    # høyre kort
    fig.rect(830, 160, 640, 560, stroke=fig.p['accent'], width=4, rx=18)
    crossmark(fig, 900, 230, 20)
    fig.text(950, 242, 'Ledende', 30, bold=True, anchor='start', color=fig.p['warn'])
    fig.text(870, 330, 'Er du ikke enig i at den dyre', 30, anchor='start')
    fig.text(870, 372, 'ordningen bør avvikles?', 30, anchor='start')
    fig.text(870, 470, '«ikke enig», «dyre», «avvikles»', 28, anchor='start', color=fig.p['accent'], italic=True)
    fig.text(1150, 660, 'ledende ordlyd påvirker svaret', 28, color=fig.p['accent'], bold=True)
    save(fig, '2p-3-3-ledende-sporsmal')


def f_korr_kaus():
    fig = Fig(BOOK)
    fig.flow_box(560, 130, 480, 130, 'Varmt sommervær', size=32)
    fig.flow_box(170, 460, 440, 130, 'Issalg ↑', size=32)
    fig.flow_box(990, 460, 440, 130, 'Drukningsulykker ↑', size=32)
    fig.arrow(700, 270, 440, 450, fig.p['main'], 5, head=16)
    fig.arrow(900, 270, 1160, 450, fig.p['main'], 5, head=16)
    fig.text(490, 350, 'felles årsak', 29, color=fig.p['main'], bold=True, anchor='end')
    fig.text(1110, 350, 'felles årsak', 29, color=fig.p['main'], bold=True, anchor='start')
    fig.line(630, 525, 970, 525, fig.p['accent'], 5, dash='16 14')
    fig.arrow(950, 525, 985, 525, fig.p['accent'], 5, head=14)
    fig.text(800, 580, 'korrelasjon — IKKE årsak', 29, color=fig.p['accent'], bold=True)
    fig.text(W / 2, 760, 'samvariasjon beviser ikke årsak', 32, bold=True)
    save(fig, '2p-3-4-korrelasjon-kausalitet')


KORR_BASE = [(0.08, 0.13), (0.18, 0.31), (0.27, 0.22), (0.36, 0.45), (0.45, 0.38),
             (0.53, 0.60), (0.62, 0.55), (0.70, 0.78), (0.80, 0.70), (0.90, 0.92)]
KORR_NOISE = [0.31, -0.42, 0.18, -0.27, 0.44, -0.15, 0.38, -0.33, 0.22, -0.45]


def f_korrstyrke():
    fig = Fig(BOOK)
    fig.title('Korrelasjonsstyrke')
    panels = [('r = 0,9', 'sterk positiv', 0.9, False), ('r = 0,5', 'moderat', 0.5, False),
              ('r = 0', 'ingen', 0.0, False), ('r = −0,9', 'sterk negativ', 0.9, True)]
    for i, (rlab, navn, styrke, neg) in enumerate(panels):
        x0 = 100 + i * 360
        x1, y0, y1 = x0 + 300, 220, 620
        panel_axes(fig, x0, y0, x1, y1)
        for (bx, by), nz in zip(KORR_BASE, KORR_NOISE):
            if styrke == 0:
                yy = 0.5 + nz  # ren støy
            else:
                base = by if not neg else 1 - by
                yy = base * styrke + (0.5 + nz * 0.85) * (1 - styrke)
            yy = min(0.93, max(0.07, yy))
            fig.circle(x0 + 24 + bx * (x1 - x0 - 44), y1 - 24 - yy * (y1 - y0 - 44), 7, fill=fig.p['main'])
        fig.text((x0 + x1) / 2, 690, rlab, 30, bold=True, color=fig.p['accent'])
        fig.text((x0 + x1) / 2, 740, navn, 27)
    save(fig, '2p-3-4-korrelasjonsstyrke')


def f_piktogram():
    fig = Fig(BOOK)
    fig.title('Piktogram-fellen: salget doblet seg')
    base = 660

    def karton(cx, w, h):
        fig.rect(cx - w / 2, base - h, w, h * 0.82, fill=fig.p['main'], opacity=0.85)
        fig.poly([(cx - w / 2, base - h + h * 0.0), (cx, base - h - h * 0.16), (cx + w / 2, base - h)],
                 fill=fig.p['main'], close=True, opacity=0.85)

    karton(260, 110, 220)
    karton(490, 220, 440)
    fig.text(260, base + 44, '100 solgt', 27)
    fig.text(490, base + 44, '200 solgt', 27)
    fig.text(380, 770, 'ser ut som 4 ganger mer!', 30, color=fig.p['warn'], bold=True)
    warn_tri(fig, 640, 240, 32)
    # riktig fremstilling
    fig.line(820, 150, 820, 800, fig.p['grid'], 3)
    fig.rect(960, base - 220, 110, 220, fill=fig.p['accent'], opacity=0.9)
    fig.rect(1190, base - 440, 110, 440, fill=fig.p['accent'], opacity=0.9)
    fig.line(900, base, 1390, base, fig.p['text'], 3)
    fig.text(1015, base + 44, '100', 27)
    fig.text(1245, base + 44, '200', 27)
    fig.text(1145, 770, 'riktig: bare høyden dobles', 30, color=fig.p['accent'], bold=True)
    save(fig, '2p-3-5-piktogram-felle')


# ---------- Kapittel 4: Sannsynlighet ----------

def f_venn():
    fig = Fig(BOOK)
    fig.rect(260, 120, 1080, 520, stroke=fig.p['text'], width=4, rx=8)
    fig.text(300, 175, 'S', 36, bold=True, italic=True, anchor='start')
    fig.circle(660, 380, 200, fill=fig.p['main'], opacity=0.45)
    fig.circle(940, 380, 200, fill=fig.p['accent'], opacity=0.45)
    fig.circle(660, 380, 200, stroke=fig.p['main'], width=4)
    fig.circle(940, 380, 200, stroke=fig.p['accent'], width=4)
    fig.text(560, 390, 'A', 40, bold=True, color='#FFFFFF')
    fig.text(1040, 390, 'B', 40, bold=True, color='#FFFFFF')
    fig.text(800, 390, 'A∩B', 32, bold=True, color='#FFFFFF')
    fig.text(W / 2, 730, 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', 38, bold=True)
    fig.text(W / 2, 800, 'trekk fra overlappet — ellers telles det dobbelt', 29, color=fig.p['accent'])
    save(fig, '2p-4-1-venndiagram')


def f_valgtre_mynt():
    fig = Fig(BOOK)
    root = (250, 450)
    lvl1 = {'K': (700, 250), 'M': (700, 650)}
    leaves = [('KK', 1150, 150), ('KM', 1150, 350), ('MK', 1150, 550), ('MM', 1150, 750)]

    def edge(p1, p2, lab, frac=0.5, dy=-16):
        fig.line(p1[0], p1[1], p2[0], p2[1], fig.p['main'], 4)
        mx, my = p1[0] + (p2[0] - p1[0]) * frac, p1[1] + (p2[1] - p1[1]) * frac
        fig.text(mx, my + dy, lab, 27, color=fig.p['main'], bold=True)

    edge(root, lvl1['K'], 'kron (1/2)')
    edge(root, lvl1['M'], 'mynt (1/2)', dy=42)
    edge(lvl1['K'], (1150, 150), 'kron (1/2)')
    edge(lvl1['K'], (1150, 350), 'mynt (1/2)', dy=42)
    edge(lvl1['M'], (1150, 550), 'kron (1/2)')
    edge(lvl1['M'], (1150, 750), 'mynt (1/2)', dy=42)
    fig.circle(*root, 12, fill=fig.p['text'])
    for navn, pos in lvl1.items():
        fig.circle(pos[0], pos[1], 12, fill=fig.p['main'])
    for lab, x, y in leaves:
        fig.circle(x, y, 12, fill=fig.p['accent'])
        fig.text(x + 36, y + 10, f'{lab}   1/4', 32, anchor='start', bold=True)
    fig.text(W / 2, 850, 'gang sannsynlighetene langs grenene: 1/2 · 1/2 = 1/4', 30, bold=True)
    save(fig, '2p-4-1-valgtre-mynt')


def f_komplement():
    fig = Fig(BOOK)
    fig.title('Komplementsetningen')
    x0, y0, ww, hh = 240, 200, 1120, 360
    w_a = ww * 0.3
    fig.rect(x0, y0, w_a, hh, fill=fig.p['main'], opacity=0.85)
    fig.rect(x0 + w_a, y0, ww - w_a, hh, fill='#C9CFD4', opacity=0.6)
    fig.rect(x0, y0, ww, hh, stroke=fig.p['text'], width=4)
    fig.text(x0 + w_a / 2, y0 + hh / 2 + 12, 'A: 0,3', 34, color='#FFFFFF', bold=True)
    fig.text(x0 + w_a + (ww - w_a) / 2, y0 + hh / 2 + 12, 'ikke A: 0,7', 34, bold=True)
    brace_h(fig, x0, x0 + ww, y0 + hh + 30, 'alle utfall: P = 1', size=30)
    fig.text(W / 2, 780, 'P(Ā) = 1 − P(A)', 40, bold=True)
    save(fig, '2p-4-1-komplement')


def f_krysstabell():
    fig = Fig(BOOK)
    fig.title('Betinget sannsynlighet med krysstabell')
    rows = [['', 'Trener', 'Trener ikke', 'Sum'],
            ['Gutter', '30', '20', '50'],
            ['Jenter', '35', '15', '50']]
    htable(fig, 330, 160, [280, 240, 280, 180], 100, rows, header=True,
           hl_rows=(2,), hl_color=fig.p['accent'])
    fig.text(W / 2, 600, 'P(trener | jente) = 35/50 = 0,7', 38, bold=True)
    fig.text(W / 2, 690, 'betingelsen krymper utfallsrommet til én rad', 29, color=fig.p['accent'])
    save(fig, '2p-4-2-krysstabell')


def f_uten_tilbake():
    fig = Fig(BOOK)
    # pose med kuler
    fig.poly([(170, 280), (150, 600), (450, 600), (430, 280)], stroke=fig.p['text'], width=5, close=True)
    fig.text(300, 240, '3 røde og 2 blå', 28, bold=True)
    kuler = [(230, 360, fig.p['accent']), (310, 340, fig.p['accent']), (380, 380, fig.p['accent']),
             (250, 480, fig.p['extra']), (350, 490, fig.p['extra'])]
    for x, y, c in kuler:
        fig.circle(x, y, 36, fill=c)
    # valgtre
    root = (640, 440)
    n_r = (1000, 280)
    n_b = (1000, 640)

    def edge(p1, p2, lab, col, wdt=4, dy=-16):
        fig.line(p1[0], p1[1], p2[0], p2[1], col, wdt)
        fig.text((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2 + dy, lab, 27, color=col, bold=True)

    edge(root, n_r, 'rød (3/5)', fig.p['accent'], 6)
    edge(root, n_b, 'blå (2/5)', fig.p['extra'], 4, dy=42)
    edge(n_r, (1330, 190), 'rød (2/4)', fig.p['accent'], 6)
    edge(n_r, (1330, 380), 'blå (2/4)', fig.p['extra'], 4, dy=42)
    fig.circle(*root, 12, fill=fig.p['text'])
    fig.circle(*n_r, 12, fill=fig.p['accent'])
    fig.circle(*n_b, 12, fill=fig.p['extra'])
    fig.circle(1330, 190, 12, fill=fig.p['accent'])
    fig.circle(1330, 380, 12, fill=fig.p['extra'])
    fig.text(1400, 130, 'to røde: 3/5 · 2/4 = 3/10', 30, anchor='end', bold=True, color=fig.p['accent'])
    fig.text(W / 2, 830, 'nevneren synker — kulen legges ikke tilbake', 30, bold=True)
    save(fig, '2p-4-2-uten-tilbakelegging')


def f_binom_krav():
    fig = Fig(BOOK)
    fig.title('Tre krav til et binomisk forsøk')
    bx, bw = 130, 1340
    fig.rect(bx, 140, bw, 180, stroke=fig.p['main'], width=3, rx=14)
    fig.text(bx + 30, 200, '1. Fast antall forsøk: n = 10', 30, anchor='start', bold=True)
    for i in range(10):
        die(fig, bx + 80 + i * 92, 265, 62, (i % 6) + 1)
    fig.rect(bx, 350, bw, 180, stroke=fig.p['main'], width=3, rx=14)
    fig.text(bx + 30, 410, '2. Bare to utfall: sekser eller ikke sekser', 30, anchor='start', bold=True)
    die(fig, bx + 110, 475, 62, 6)
    fig.text(bx + 165, 487, 'sekser', 27, anchor='start', color=fig.p['main'], bold=True)
    die(fig, bx + 370, 475, 62, 3, fillc='#9AA5AD')
    fig.text(bx + 425, 487, 'ikke sekser', 27, anchor='start', color='#5C666E')
    fig.rect(bx, 560, bw, 160, stroke=fig.p['main'], width=3, rx=14)
    fig.text(bx + 30, 625, '3. Samme p hver gang, uavhengige forsøk', 30, anchor='start', bold=True)
    fig.text(bx + 30, 685, 'p = 1/6 ved hvert kast', 29, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(W / 2, 810, 'kast terning 10 ganger, tell seksere — binomisk!', 30, bold=True, color=fig.p['accent'])
    save(fig, '2p-4-3-binomisk-krav')


def f_binom_fordeling():
    fig = Fig(BOOK)
    from math import comb
    probs = [comb(10, k) / 1024 for k in range(11)]
    tx, ty = fig.coords(-0.7, 10.7, 0, 0.28, box=(210, 140, 1420, 700),
                        xticks=list(range(11)), yticks=[0.1, 0.2],
                        xlabel='Antall kron av 10 kast', ylabel='Sannsynlighet')
    bw = (tx(1) - tx(0)) * 0.7
    for k, p in enumerate(probs):
        c = fig.p['accent'] if k == 5 else fig.p['main']
        fig.rect(tx(k) - bw / 2, ty(p), bw, ty(0) - ty(p), fill=c, opacity=0.9)
    fig.text(tx(5), ty(probs[5]) - 22, 'E = n · p = 5', 32, color=fig.p['accent'], bold=True)
    save(fig, '2p-4-3-binomisk-fordeling')


def f_betinget_kort():
    fig = Fig(BOOK)
    fig.title('Trekning uten tilbakelegging')
    # kortvifte (baksider)
    for i, ang in enumerate(range(-24, 25, 12)):
        fig.raw(f'<g transform="translate({330 + i * 10},540) rotate({ang})">'
                f'<rect x="-85" y="-260" width="170" height="260" rx="14" '
                f'fill="{fig.p["main"]}" stroke="{fig.p["bg"]}" stroke-width="5"/></g>')
    fig.text(330, 640, '51 kort igjen', 28)
    # esset som er trukket
    fig.rect(640, 250, 180, 270, fill=fig.p['bg'], stroke=fig.p['text'], width=4, rx=14)
    fig.text(675, 320, 'A', 44, bold=True, color=fig.p['accent'])
    fig.text(730, 420, '♠', 60, color=fig.p['text'])
    fig.text(730, 580, 'første kort: ess', 27)
    fig.text(960, 330, 'P(første ess) = 4/52', 34, anchor='start', bold=True)
    fig.text(960, 450, 'P(andre ess | første ess) = 3/51', 34, anchor='start', bold=True, color=fig.p['accent'])
    fig.arrow(1080, 360, 1080, 405, fig.p['accent'], 4, head=12)
    fig.text(W / 2, 760, 'både teller og nevner endres etter første trekning', 29)
    save(fig, '2p-4-4-betinget-kort')


# ---------- Kapittel 5: Geometri ----------

def f_male_vegg():
    fig = Fig(BOOK)
    s = 195  # px per meter
    x0, y0 = 200, 190
    vw, vh = 4.8 * s, 2.4 * s
    fig.rect(x0, y0, vw, vh, fill=fig.p['main'], opacity=0.12)
    fig.rect(x0, y0, vw, vh, stroke=fig.p['main'], width=5)
    wx, wy = x0 + 2.9 * s, y0 + 0.55 * s
    fig.rect(wx, wy, 1.2 * s, 1.0 * s, fill=fig.p['bg'], stroke=fig.p['accent'], width=5)
    fig.line(wx + 0.6 * s, wy, wx + 0.6 * s, wy + 1.0 * s, fig.p['accent'], 3)
    fig.line(wx, wy + 0.5 * s, wx + 1.2 * s, wy + 0.5 * s, fig.p['accent'], 3)
    dim_h(fig, x0, x0 + vw, y0 - 40, '4,8 m')
    dim_v(fig, x0 - 44, y0, y0 + vh, '2,4 m')
    fig.text(wx + 0.6 * s, wy - 18, 'vindu: 1,2 m × 1,0 m', 27, color=fig.p['accent'], bold=True)
    fig.text(x0 + 1.4 * s, y0 + 1.6 * s, 'vegg: 11,52 m²', 30, color=fig.p['main'], bold=True)
    fig.text(wx + 0.6 * s, wy + 0.78 * s, '1,2 m²', 27, color=fig.p['accent'], bold=True)
    fig.text(W / 2, 820, 'å male: 11,52 − 1,2 = 10,32 m²', 34, bold=True)
    save(fig, '2p-5-1-male-vegg')


def f_basseng():
    fig = Fig(BOOK)
    fig.title('Volum av rektangulært basseng')
    u = 105
    x0, y0 = 260, 620  # front nederst venstre
    L, B, D = 8 * u, 4 * u, 1.5 * u
    ox, oy = 0.45 * B, -0.38 * B
    A = (x0, y0)
    Bp = (x0 + L, y0)
    C = (x0 + L, y0 - D)
    Dp = (x0, y0 - D)
    A2 = (A[0] + ox, A[1] + oy)
    B2 = (Bp[0] + ox, Bp[1] + oy)
    C2 = (C[0] + ox, C[1] + oy)
    D2 = (Dp[0] + ox, Dp[1] + oy)
    fig.poly([Dp, C, C2, D2], fill=fig.p['main'], opacity=0.15, close=True)
    fig.poly([A, Bp, C, Dp], stroke=fig.p['main'], width=5, close=True)
    fig.poly([Dp, D2, C2, C], stroke=fig.p['main'], width=5, close=True)
    fig.poly([Bp, B2, C2], stroke=fig.p['main'], width=5)
    fig.line(A[0], A[1], A2[0], A2[1], fig.p['main'], 3, dash='10 10')
    fig.line(A2[0], A2[1], B2[0], B2[1], fig.p['main'], 3, dash='10 10')
    fig.line(A2[0], A2[1], D2[0], D2[1], fig.p['main'], 3, dash='10 10')
    dim_h(fig, A[0], Bp[0], y0 + 46, '8 m', above=False)
    fig.text((Bp[0] + B2[0]) / 2 + 40, (Bp[1] + B2[1]) / 2 + 30, '4 m', 30, bold=True, anchor='start')
    dim_v(fig, Bp[0] + ox + 60, C2[1], B2[1], '1,5 m', anchor='start', dx=16)
    fig.text(W / 2, 790, 'V = 8 · 4 · 1,5 = 48 m³', 36, bold=True)
    fig.text(W / 2, 850, '= 48 000 liter', 32, color=fig.p['accent'], bold=True)
    save(fig, '2p-5-1-basseng')


def f_overflate_tank():
    fig = Fig(BOOK)
    fig.title('Overflaten av sylindertank')
    # sylinder
    cx, rw, rh = 360, 150, 44
    top_y, bot_y = 280, 660
    ellipse(fig, cx, top_y, rw, rh, stroke=fig.p['main'], width=5, fill=fig.p['main'], opacity=0.12)
    fig.line(cx - rw, top_y, cx - rw, bot_y, fig.p['main'], 5)
    fig.line(cx + rw, top_y, cx + rw, bot_y, fig.p['main'], 5)
    fig.raw(f'<path d="M {cx - rw},{bot_y} A {rw},{rh} 0 0 0 {cx + rw},{bot_y}" fill="none" stroke="{fig.p["main"]}" stroke-width="5"/>')
    fig.raw(f'<path d="M {cx - rw},{bot_y} A {rw},{rh} 0 0 1 {cx + rw},{bot_y}" fill="none" stroke="{fig.p["main"]}" stroke-width="3" stroke-dasharray="9 9"/>')
    fig.line(cx, top_y, cx + rw, top_y, fig.p['accent'], 4)
    fig.text(cx + 30, top_y - 16, 'r = 1 m', 28, color=fig.p['accent'], bold=True, anchor='start')
    dim_v(fig, cx + rw + 50, top_y, bot_y, 'h = 2 m', anchor='start', dx=16)
    # utbrettet
    fig.text(1050, 230, 'brettet ut:', 29, bold=True)
    fig.circle(840, 350, 85, stroke=fig.p['accent'], width=4, fill=fig.p['accent'], opacity=0.15)
    fig.circle(1060, 350, 85, stroke=fig.p['accent'], width=4, fill=fig.p['accent'], opacity=0.15)
    fig.text(950, 480, 'topp + bunn: 3,14 m² hver', 27, color=fig.p['accent'], bold=True)
    fig.rect(700, 530, 560, 178, stroke=fig.p['main'], width=4, fill=fig.p['main'], opacity=0.12)
    fig.text(980, 628, 'sideflate: 12,57 m²', 28, color=fig.p['main'], bold=True)
    fig.text(980, 800, 'O = 2 · 3,14 + 12,57 ≈ 18,8 m²', 34, bold=True)
    save(fig, '2p-5-1-overflate-tank')


def f_malestokk():
    fig = Fig(BOOK)
    fig.title('Målestokk 1 : 50 000')
    # abstrakt kart
    fig.rect(170, 150, 720, 460, stroke=fig.p['main'], width=4, rx=14)
    fig.poly([(170, 470), (300, 410), (430, 450), (560, 380), (700, 420), (890, 350)],
             stroke=fig.p['extra'], width=4)
    fig.poly([(170, 240), (320, 280), (480, 230), (640, 300), (890, 260)],
             stroke=fig.p['extra'], width=4, dash='4 10')
    A, Bx = (290, 480), (790, 480)
    fig.circle(*A, 11, fill=fig.p['accent'])
    fig.circle(*Bx, 11, fill=fig.p['accent'])
    fig.text(A[0], A[1] - 26, 'A', 30, bold=True)
    fig.text(Bx[0], Bx[1] - 26, 'B', 30, bold=True)
    fig.line(A[0], A[1], Bx[0], Bx[1], fig.p['accent'], 4, dash='12 10')
    # linjal under (100 px per cm)
    rx0, ry0 = 290, 600
    fig.rect(rx0 - 30, ry0, 660, 90, fill='#F2EFE6', stroke=fig.p['text'], width=3)
    for c in range(7):
        fig.line(rx0 + c * 100, ry0, rx0 + c * 100, ry0 + 26, fig.p['text'], 3)
        fig.text(rx0 + c * 100, ry0 + 64, str(c), 26)
        for mm in range(1, 10):
            if c < 6:
                fig.line(rx0 + c * 100 + mm * 10, ry0, rx0 + c * 100 + mm * 10, ry0 + (18 if mm == 5 else 12), fig.p['text'], 1.5)
    brace_h(fig, rx0, rx0 + 500, ry0 + 130, '5 cm', size=30, lab_dy=-24)
    fig.text(1180, 400, '5 cm · 50 000', 34, bold=True)
    fig.text(1180, 460, '= 250 000 cm = 2,5 km', 32, bold=True, color=fig.p['accent'])
    fig.text(1180, 580, '1 cm på kartet', 29)
    fig.text(1180, 624, '= 500 m i terrenget', 29)
    save(fig, '2p-5-1-malestokk')


def f_stige():
    fig = Fig(BOOK)
    s = 128  # px per meter
    gy = 790  # bakkenivå
    wx = 330  # vegg-x
    foot = (wx + 1.4 * s, gy)
    top = (wx, gy - 4.8 * s)
    fig.line(150, gy, 1000, gy, fig.p['text'], 5)
    fig.line(wx, gy, wx, 120, fig.p['text'], 5)
    # rett vinkel
    fig.poly([(wx + 36, gy), (wx + 36, gy - 36), (wx, gy - 36)], stroke=fig.p['accent'], width=3)
    # stige: to vanger + trinn
    dx, dy = top[0] - foot[0], top[1] - foot[1]
    ln = math.hypot(dx, dy)
    nx, ny = -dy / ln, dx / ln
    off = 13
    for sgn in (-1, 1):
        fig.line(foot[0] + sgn * off * nx, foot[1] + sgn * off * ny,
                 top[0] + sgn * off * nx, top[1] + sgn * off * ny, fig.p['main'], 6)
    for i in range(1, 10):
        t = i / 10
        mx, my = foot[0] + dx * t, foot[1] + dy * t
        fig.line(mx - off * nx, my - off * ny, mx + off * nx, my + off * ny, fig.p['main'], 4)
    fig.text(foot[0] / 2 + top[0] / 2 + 50, (foot[1] + top[1]) / 2, '5,0 m', 34, bold=True, color=fig.p['main'], anchor='start')
    dim_h(fig, wx, foot[0], gy + 50, '1,4 m', above=False)
    fig.text(wx - 30, (gy + top[1]) / 2, 'x', 38, bold=True, italic=True, anchor='end')
    fig.text(1130, 360, 'x² = 5² − 1,4²', 36, bold=True, anchor='start')
    fig.text(1130, 440, 'x = √23,04', 32, anchor='start')
    fig.text(1130, 520, 'x = 4,8 m', 38, bold=True, color=fig.p['accent'], anchor='start')
    save(fig, '2p-5-2-stige-pytagoras')


def f_sohcahtoa():
    fig = Fig(BOOK)
    # rettvinklet trekant: rett vinkel nede til høyre, vinkel v nede til venstre
    A = (190, 700)   # vinkel v
    B = (890, 700)   # rett vinkel
    C = (890, 280)   # topp
    fig.poly([A, B, C], stroke=fig.p['text'], width=5, close=True)
    fig.line(A[0], A[1], B[0], B[1], fig.p['main'], 7)      # hosliggende
    fig.line(B[0], B[1], C[0], C[1], fig.p['accent'], 7)    # motstående
    m = 36
    fig.poly([(B[0] - m, B[1]), (B[0] - m, B[1] - m), (B[0], B[1] - m)], stroke=fig.p['text'], width=3)
    angle_arc(fig, A[0], A[1], 90, 0, math.degrees(math.atan2(420, 700)), label='v')
    fig.text((A[0] + B[0]) / 2, B[1] + 52, 'hosliggende', 31, color=fig.p['main'], bold=True)
    fig.text(B[0] + 26, (B[1] + C[1]) / 2 + 10, 'motstående', 31, color=fig.p['accent'], bold=True, anchor='start')
    fig.text((A[0] + C[0]) / 2 - 30, (A[1] + C[1]) / 2 - 40, 'hypotenus', 31, bold=True, anchor='end')
    fig.text(1200, 360, 'sin v = mot/hyp', 36, bold=True)
    fig.text(1200, 460, 'cos v = hos/hyp', 36, bold=True)
    fig.text(1200, 560, 'tan v = mot/hos', 36, bold=True)
    save(fig, '2p-5-2-sohcahtoa')


def f_takhelling():
    fig = Fig(BOOK)
    s = 88
    cx = 620
    wall_y = 540
    apex = (cx, wall_y - 1.6 * s)
    eaveL = (cx - 4 * s, wall_y)
    eaveR = (cx + 4 * s, wall_y)
    # huskropp
    fig.rect(eaveL[0] + 50, wall_y, 8 * s - 100, 240, stroke=fig.p['main'], width=4)
    # tak
    fig.poly([eaveL, apex, eaveR], stroke=fig.p['main'], width=6)
    fig.line(eaveL[0], wall_y, eaveR[0], wall_y, fig.p['main'], 4)
    # trekant i venstre takhalvdel
    fig.line(eaveL[0], wall_y, cx, wall_y, fig.p['accent'], 3, dash='10 10')
    fig.line(cx, wall_y, apex[0], apex[1], fig.p['accent'], 3, dash='10 10')
    fig.poly([(cx - 30, wall_y), (cx - 30, wall_y - 30), (cx, wall_y - 30)], stroke=fig.p['accent'], width=3)
    ang = math.degrees(math.atan(1.6 / 4))
    angle_arc(fig, eaveL[0], wall_y, 110, 0, ang, label='v')
    fig.text(cx - 2 * s, wall_y + 42, '4,0 m', 30, bold=True)
    fig.text(cx + 18, wall_y - 0.8 * 1.6 * s + 20, '1,6 m', 30, bold=True, anchor='start')
    fig.text(1230, 400, 'tan v = 1,6/4,0', 36, bold=True)
    fig.text(1230, 490, 'v ≈ 21,8°', 38, bold=True, color=fig.p['accent'])
    save(fig, '2p-5-2-takhelling')


def f_tre_hoyde_placeholder():
    pass  # Gemini-figur


def f_finn_vinkel():
    fig = Fig(BOOK)
    fig.title('Rullestolrampe: finn vinkelen')
    s = 180
    A = (220, 660)
    Bp = (220 + 6 * s, 660)
    C = (220 + 6 * s, 660 - 0.5 * s)
    fig.poly([A, Bp, C], stroke=fig.p['main'], width=5, close=True)
    m = 30
    fig.poly([(Bp[0] - m, Bp[1]), (Bp[0] - m, Bp[1] - m), (Bp[0], Bp[1] - m)], stroke=fig.p['accent'], width=3)
    ang = math.degrees(math.atan(0.5 / 6))
    angle_arc(fig, A[0], A[1], 200, 0, ang, label='v', lr_extra=50)
    dim_h(fig, A[0], Bp[0], A[1] + 50, '6,0 m', above=False)
    fig.text(Bp[0] + 28, (Bp[1] + C[1]) / 2 + 10, '0,5 m', 30, bold=True, anchor='start')
    fig.text(560, 300, 'tan v = 0,5/6,0', 36, bold=True)
    fig.text(560, 380, 'v ≈ 4,8°', 38, bold=True, color=fig.p['accent'])
    fig.text(1050, 340, 'krav: maks 4,8° — akkurat godkjent', 29, color=fig.p['main'])
    save(fig, '2p-5-3-finn-vinkel')


def f_vektor_def():
    fig = Fig(BOOK)
    tx, ty = fig.coords(0, 6.5, 0, 5.4, box=(190, 130, 1180, 720),
                        xticks=[1, 2, 3, 4, 5, 6], yticks=[1, 2, 3, 4, 5])
    fig.line(tx(1), ty(1), tx(5), ty(1), fig.p['extra'], 3.5, dash='12 10')
    fig.line(tx(5), ty(1), tx(5), ty(4), fig.p['extra'], 3.5, dash='12 10')
    fig.vector(tx, ty, 1, 1, 4, 3, color=fig.p['accent'], width=6)
    fig.text(tx(3), ty(1) + 46, '4 mot øst', 29, color=fig.p['extra'], bold=True)
    fig.text(tx(5) + 20, ty(2.5) + 10, '3 mot nord', 29, color=fig.p['extra'], bold=True, anchor='start')
    fig.text(tx(2.6), ty(2.6) - 26, '|v| = 5', 34, color=fig.p['accent'], bold=True, anchor='end')
    fig.text(W / 2, 830, 'en vektor har både lengde og retning', 30, bold=True)
    save(fig, '2p-5-4-vektor-definisjon')


def f_bat():
    fig = Fig(BOOK)
    fig.title('Vektorer på sjøkartet')
    s = 130  # px per km
    start = (330, 720)
    east = (start[0] + 4 * s, start[1])
    north = (east[0], east[1] - 3 * s)
    fig.arrow(start[0], start[1], east[0], east[1], fig.p['main'], 6, head=18)
    fig.arrow(east[0], east[1], north[0], north[1], fig.p['main'], 6, head=18)
    fig.arrow(north[0], north[1], start[0], start[1], fig.p['accent'], 6, head=18)
    fig.text((start[0] + east[0]) / 2, start[1] + 46, '4 km øst', 30, color=fig.p['main'], bold=True)
    fig.text(east[0] + 24, (east[1] + north[1]) / 2 + 10, '3 km nord', 30, color=fig.p['main'], bold=True, anchor='start')
    fig.text((start[0] + north[0]) / 2 - 30, (start[1] + north[1]) / 2 - 26, '5 km i luftlinje', 30,
             color=fig.p['accent'], bold=True, anchor='end')
    fig.circle(start[0], start[1], 12, fill=fig.p['text'])
    fig.text(start[0] - 26, start[1] + 10, 'start', 28, anchor='end', bold=True)
    # kompass
    kc = (1320, 260)
    fig.circle(kc[0], kc[1], 70, stroke=fig.p['main'], width=4)
    fig.arrow(kc[0], kc[1] + 44, kc[0], kc[1] - 44, fig.p['accent'], 5, head=14)
    fig.text(kc[0], kc[1] - 92, 'N', 30, bold=True)
    fig.text(620, 850, '√(4² + 3²) = 5', 34, bold=True)
    save(fig, '2p-5-4-bat-skjaergard')


# ---------- Kapittel 6: Modellering og digitale verktøy ----------

def f_modellsirkel():
    fig = Fig(BOOK)
    fig.title('Modelleringsprosessen')
    bw, bh = 460, 150
    pos = {1: (160, 170), 2: (980, 170), 3: (980, 560), 4: (160, 560)}
    tekst = {1: '1. Virkelig problem', 2: '2. Matematisk modell\ny = ax + b',
             3: '3. Løsning\nles av grafen', 4: '4. Tolk og vurder\ner svaret rimelig?'}
    for k, (x, y) in pos.items():
        fig.flow_box(x, y, bw, bh, tekst[k], size=29)
    fig.arrow(pos[1][0] + bw + 8, 245, pos[2][0] - 8, 245, fig.p['main'], 5, head=16)
    fig.arrow(pos[2][0] + bw / 2, pos[2][1] + bh + 8, pos[3][0] + bw / 2, pos[3][1] - 8, fig.p['main'], 5, head=16)
    fig.arrow(pos[3][0] - 8, 635, pos[4][0] + bw + 8, 635, fig.p['main'], 5, head=16)
    fig.arrow(pos[4][0] + bw / 2, pos[4][1] - 8, pos[1][0] + bw / 2, pos[1][1] + bh + 8, fig.p['main'], 5, head=16)
    fig.arrow(pos[4][0] + bw + 8, pos[4][1] + 20, pos[2][0] + 120, pos[2][1] + bh + 8, fig.p['accent'], 4, head=14)
    fig.text(900, 460, 'juster modellen', 29, color=fig.p['accent'], bold=True, anchor='start')
    save(fig, '2p-6-1-modellsirkel')


def f_regneark():
    fig = Fig(BOOK)
    # formellinje
    fig.rect(240, 130, 1120, 64, stroke=fig.p['text'], width=3, rx=8)
    fig.text(280, 174, 'B6', 30, bold=True, anchor='start')
    fig.line(370, 134, 370, 190, fig.p['grid'], 3)
    fig.text(410, 174, '=SUMMER(B2:B5)', 30, anchor='start', color=fig.p['accent'], bold=True)
    rows = [['', 'A', 'B'],
            ['1', 'Post', 'Beløp'],
            ['2', 'Husleie', '9 000'],
            ['3', 'Mat', '4 500'],
            ['4', 'Transport', '1 200'],
            ['5', 'Strøm', '800'],
            ['6', 'Sum', '15 500']]
    xs = htable(fig, 240, 230, [90, 460, 320], 80, rows, header=True,
                aligns=['center', 'left', 'right'],
                bold_cells={(1, 1), (1, 2), (6, 1), (6, 2)})
    fig.rect(xs[2], 230 + 6 * 80, xs[3] - xs[2], 80, stroke=fig.p['accent'], width=6)
    fig.arrow(1280, 690, xs[3] + 16, 230 + 6 * 80 + 40, fig.p['accent'], 4, head=14)
    fig.text(1290, 720, 'endrer du ett tall,', 28, anchor='start')
    fig.text(1290, 760, 'oppdateres summen', 28, anchor='start')
    save(fig, '2p-6-2-regneark-budsjett')


R2_GOD = [(0.08, 0.13), (0.18, 0.24), (0.28, 0.30), (0.38, 0.43), (0.48, 0.50),
          (0.57, 0.55), (0.66, 0.70), (0.75, 0.72), (0.84, 0.86), (0.92, 0.90)]
R2_SVAK = [(0.08, 0.34), (0.18, 0.05), (0.28, 0.52), (0.38, 0.18), (0.48, 0.72),
           (0.57, 0.30), (0.66, 0.88), (0.75, 0.45), (0.84, 0.62), (0.92, 0.95)]


def f_rkvadrat():
    fig = Fig(BOOK)
    fig.title('Hvor god er modellen?')
    for i, (pts, lab, col) in enumerate([(R2_GOD, 'R² = 0,95: god modell', fig.p['main']),
                                         (R2_SVAK, 'R² = 0,40: svak modell', fig.p['accent'])]):
        x0 = 160 + i * 700
        x1, y0, y1 = x0 + 560, 190, 620
        panel_axes(fig, x0, y0, x1, y1)
        fig.line(x0 + 20, y1 - 30, x1 - 20, y0 + 30, col, 4)
        for bx, by in pts:
            fig.circle(x0 + 26 + bx * (x1 - x0 - 52), y1 - 26 - by * (y1 - y0 - 52), 8, fill=fig.p['main'])
        fig.text((x0 + x1) / 2, 690, lab, 30, bold=True, color=col)
    fig.text(W / 2, 800, 'R² nær 1 betyr god tilpasning', 30)
    save(fig, '2p-6-3-r-kvadrat')


BEFOLK = [(2000, 4.48), (2004, 4.59), (2008, 4.77), (2012, 5.02), (2016, 5.23), (2020, 5.37)]


def f_ekstrapolering():
    fig = Fig(BOOK)
    lin = lambda x: 4.48 + 0.0455 * (x - 2000)
    tx, ty = fig.coords(1998, 2062, 4, 8, box=(210, 150, 1420, 700),
                        xticks=[2000, 2020, 2040, 2060], yticks=[4, 5, 6, 7, 8],
                        xlabel='År', ylabel='Befolkning (mill.)')
    fig.rect(tx(2000), 150, tx(2020) - tx(2000), 550, fill=fig.p['main'], opacity=0.08)
    fig.rect(tx(2020), 150, tx(2060) - tx(2020), 550, fill=fig.p['accent'], opacity=0.10)
    fig.plot(lin, 2000, 2020, color=fig.p['main'], width=5)
    fig.plot(lin, 2020, 2060, color=fig.p['accent'], width=5, dash='14 12')
    scatter(fig, tx, ty, BEFOLK, r=9, color=fig.p['main'])
    fig.text(tx(2010), 215, 'interpolering: trygt', 28, color=fig.p['main'], bold=True)
    fig.text(tx(2010), 258, 'her har vi data', 26, color=fig.p['main'])
    fig.text(tx(2042), 215, 'ekstrapolering: usikkert', 28, color=fig.p['warn'], bold=True)
    warn_tri(fig, tx(2055), 240, 28)
    save(fig, '2p-6-4-ekstrapolering')


# ---------- Kapittel 7: Likninger og ulikheter ----------

def f_likningssett():
    fig = Fig(BOOK)
    tx, ty = fig.coords(-1, 6, -1, 6, box=(260, 130, 1140, 760),
                        xticks=list(range(-1, 7)), yticks=list(range(-1, 7)))
    fig.plot(lambda x: x + 1, -1, 5, color=fig.p['main'], width=5)
    fig.plot(lambda x: -x + 5, -1, 6, color=fig.p['accent'], width=5)
    fig.line(tx(2), ty(0), tx(2), ty(3), fig.p['text'], 2.5, dash='9 9')
    fig.line(tx(0), ty(3), tx(2), ty(3), fig.p['text'], 2.5, dash='9 9')
    fig.circle(tx(2), ty(3), 13, fill=fig.p['bg'], stroke=fig.p['text'], width=5)
    fig.text(tx(2) + 24, ty(3) - 24, '(2, 3)', 32, bold=True, anchor='start')
    fig.text(tx(4.1), ty(5.1) + 10, 'y = x + 1', 32, color=fig.p['main'], bold=True, anchor='start')
    fig.text(tx(0.0), ty(5.4) + 10, 'y = −x + 5', 32, color=fig.p['accent'], bold=True, anchor='end')
    fig.text(W / 2, 850, 'løsningen passer i begge: x = 2, y = 3', 30, bold=True)
    save(fig, '2p-7-2-likningssett-grafisk')


def f_ulikhet():
    fig = Fig(BOOK)
    fig.text(330, 180, '2x + 3 ≤ 11', 38, bold=True)
    fig.arrow(480, 168, 580, 168, fig.p['main'], 4, head=12)
    fig.text(710, 180, '2x ≤ 8', 38, bold=True)
    fig.arrow(820, 168, 920, 168, fig.p['main'], 4, head=12)
    fig.text(1050, 180, 'x ≤ 4', 38, bold=True, color=fig.p['accent'])
    tx = fig.number_line(0, 8, y=480, ticks=range(9), labels={v: fmt(v) for v in range(9)},
                         segment=(0, 4, Fig(BOOK).p['main']),
                         points=[(4, Fig(BOOK).p['main'], 'x ≤ 4')])
    fig.rect(280, 660, 1040, 90, stroke=fig.p['accent'], width=3, rx=14)
    fig.text(W / 2, 718, 'ganger/deler du med negativt tall: snu tegnet!', 29, color=fig.p['accent'], bold=True)
    save(fig, '2p-7-3-ulikhet')


# ---------- Kapittel 8: Måling og nøyaktighet ----------

def f_enhetshopp():
    fig = Fig(BOOK)
    # rad 1: lengde
    y1 = 180
    fig.line(170, y1, 770, y1, fig.p['main'], 6)
    for i in range(11):
        fig.line(170 + i * 60, y1 - 14, 170 + i * 60, y1 + 14, fig.p['main'], 3)
    fig.text(900, y1 + 11, '1 m = 10 dm', 32, anchor='start', bold=True)
    fig.text(1290, y1 + 11, 'lengde: · 10', 30, anchor='start', color=fig.p['accent'], bold=True)
    # rad 2: areal
    y2, sq = 280, 300
    for i in range(11):
        fig.line(170 + i * 30, y2, 170 + i * 30, y2 + sq, fig.p['grid'], 2)
        fig.line(170, y2 + i * 30, 170 + sq, y2 + i * 30, fig.p['grid'], 2)
    fig.rect(170, y2, sq, sq, stroke=fig.p['main'], width=5)
    fig.text(900, y2 + sq / 2 + 11, '1 m² = 100 dm²', 32, anchor='start', bold=True)
    fig.text(1290, y2 + sq / 2 + 11, 'areal: · 100', 30, anchor='start', color=fig.p['accent'], bold=True)
    # rad 3: volum (skråprojeksjon, antydet rutenett)
    y3, cu, ox, oy = 660, 180, 70, -55
    fig.poly([(170, y3), (170 + cu, y3), (170 + cu, y3 + cu), (170, y3 + cu)], stroke=fig.p['main'], width=5, close=True)
    fig.poly([(170, y3), (170 + ox, y3 + oy), (170 + cu + ox, y3 + oy), (170 + cu, y3)], stroke=fig.p['main'], width=4, close=True)
    fig.poly([(170 + cu, y3), (170 + cu + ox, y3 + oy), (170 + cu + ox, y3 + cu + oy), (170 + cu, y3 + cu)], stroke=fig.p['main'], width=4, close=True)
    for i in (1, 2):
        fig.line(170 + i * cu / 3, y3, 170 + i * cu / 3, y3 + cu, fig.p['grid'], 2)
        fig.line(170, y3 + i * cu / 3, 170 + cu, y3 + i * cu / 3, fig.p['grid'], 2)
    fig.text(900, y3 + cu / 2, '1 m³ = 1000 dm³', 32, anchor='start', bold=True)
    fig.text(1290, y3 + cu / 2, 'volum: · 1000', 30, anchor='start', color=fig.p['accent'], bold=True)
    save(fig, '2p-8-1-enhetshopp')


# ---------- Kapittel 9: Tall og tallforståelse ----------

def f_promille():
    fig = Fig(BOOK)
    fig.title('Prosent og promille')
    # hel stav
    bx, by, bw, bh = 140, 160, 1320, 80
    fig.rect(bx, by, bw, bh, fill=fig.p['main'], opacity=0.25)
    fig.rect(bx, by, bw, bh, stroke=fig.p['main'], width=4)
    fig.text(bx + bw / 2, by - 18, '1 hel = 1000 tusendeler', 30, bold=True)
    # zoomområde (10 tusendeler = 1 %)
    zx = bx + 0.30 * bw
    zw = bw * 10 / 1000
    fig.rect(zx, by, zw, bh, fill=fig.p['accent'], opacity=0.8)
    # zoomlinjer til forstørret stripe
    sx, sy, sw, sh = 400, 430, 800, 130
    fig.line(zx, by + bh, sx, sy, fig.p['text'], 2.5, dash='8 8')
    fig.line(zx + zw, by + bh, sx + sw, sy, fig.p['text'], 2.5, dash='8 8')
    for i in range(10):
        c = fig.p['accent'] if i == 3 else fig.p['bg']
        fig.rect(sx + i * sw / 10, sy, sw / 10, sh, fill=c, stroke=fig.p['main'], width=3)
    fig.text(sx + 3.5 * sw / 10, sy + sh + 44, '1 ‰ = 0,001', 30, color=fig.p['accent'], bold=True)
    brace_h(fig, sx, sx + sw, sy - 26, None, tick=-16)
    fig.text(sx + sw / 2, sy - 44, '1 % = 10 ‰', 30, bold=True)
    fig.text(W / 2, 830, 'eksempel: promillegrensen i trafikken er 0,2 ‰', 29)
    save(fig, '2p-9-1-promille')


def f_tierpotens():
    fig = Fig(BOOK)
    fig.title('Vitenskapelig notasjon: fra molekyl til måne')
    y = 500
    x0, x1 = 150, 1450
    emin, emax = -10, 9
    sx = (x1 - x0) / (emax - emin)
    tx = lambda e: x0 + (e - emin) * sx
    fig.arrow(x0 - 16, y, x1 + 30, y, fig.p['text'], 4)
    for e in range(emin, emax + 1, 2):
        fig.line(tx(e), y - 12, tx(e), y + 12, fig.p['text'], 3)
        fig.text(tx(e), y + 52, '10' + sup(e), 27)
    objekter = [(math.log10(3e-10), 'vannmolekyl', '3 · 10⁻¹⁰ m', True),
                (math.log10(8e-6), 'rød blodcelle', '8 · 10⁻⁶ m', False),
                (math.log10(1.8e6), 'Norges lengde', '1,8 · 10⁶ m', True),
                (math.log10(3.8e8), 'månen', '3,8 · 10⁸ m', False)]
    for e, navn, verdi, above in objekter:
        fig.circle(tx(e), y, 11, fill=fig.p['accent'])
        if above:
            fig.line(tx(e), y - 16, tx(e), y - 120, fig.p['accent'], 2.5)
            fig.text(tx(e), y - 175, navn, 28, bold=True)
            fig.text(tx(e), y - 135, verdi, 27, color=fig.p['accent'])
        else:
            fig.line(tx(e), y + 16, tx(e), y + 120, fig.p['accent'], 2.5)
            fig.text(tx(e), y + 165, navn, 28, bold=True)
            fig.text(tx(e), y + 205, verdi, 27, color=fig.p['accent'])
    fig.text(W / 2, 830, 'a · 10ⁿ der 1 ≤ a < 10', 32, bold=True)
    save(fig, '2p-9-2-tierpotens-skala')


def f_avrunding():
    fig = Fig(BOOK)
    fig.title('Avrundingsregler')
    y = 470
    x0, x1 = 200, 1400
    tx = lambda v: x0 + (v - 2.40) / 0.10 * (x1 - x0)
    fig.arrow(x0 - 20, y, x1 + 30, y, fig.p['text'], 4)
    for i in range(11):
        v = 2.40 + i * 0.01
        big = i % 5 == 0
        fig.line(tx(v), y - (18 if big else 11), tx(v), y + (18 if big else 11), fig.p['text'], 3 if big else 2)
        if big:
            fig.text(tx(v), y + 58, fmt(round(v, 2)), 30, bold=True)
    fig.circle(tx(2.43), y, 11, fill=fig.p['main'])
    fig.circle(tx(2.47), y, 11, fill=fig.p['accent'])
    fig.arrow(tx(2.43), y - 40, tx(2.405), y - 40, fig.p['main'], 5, head=14)
    fig.arrow(tx(2.47), y - 40, tx(2.495), y - 40, fig.p['accent'], 5, head=14)
    fig.text(tx(2.43), y - 130, '2,43', 30, bold=True, color=fig.p['main'])
    fig.text(tx(2.43), y - 80, '0–4: rund ned', 28, color=fig.p['main'])
    fig.text(tx(2.47), y - 130, '2,47', 30, bold=True, color=fig.p['accent'])
    fig.text(tx(2.47), y - 80, '5–9: rund opp', 28, color=fig.p['accent'])
    fig.line(tx(2.45), y - 26, tx(2.45), y + 26, fig.p['warn'], 3, dash='8 8')
    fig.text(W / 2, 760, 'eksempel: 34,86 ≈ 34,9', 32, bold=True)
    save(fig, '2p-9-3-avrunding')


ALL = [f_budsjett_regnskap, f_reallonn, f_serie_annuitet, f_kredittkort, f_trinnskatt,
       f_break_even, f_faste_variable, f_mva_stav,
       f_abonnement, f_vekst_nedgang, f_doblingstid, f_regresjon, f_stykkevis, f_trappetakst, f_issalg,
       f_boksplott, f_histogram, f_frekvenstabell, f_normalfordeling, f_empirisk, f_zskar,
       f_avkuttet, f_ledende, f_korr_kaus, f_korrstyrke, f_piktogram,
       f_venn, f_valgtre_mynt, f_komplement, f_krysstabell, f_uten_tilbake,
       f_binom_krav, f_binom_fordeling, f_betinget_kort,
       f_male_vegg, f_basseng, f_overflate_tank, f_malestokk, f_stige, f_sohcahtoa,
       f_takhelling, f_finn_vinkel, f_vektor_def, f_bat,
       f_modellsirkel, f_regneark, f_rkvadrat, f_ekstrapolering,
       f_likningssett, f_ulikhet, f_enhetshopp, f_promille, f_tierpotens, f_avrunding]

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for f in ALL:
        f()
    print(f'{len(ALL)} figurer generert i {OUT}')
