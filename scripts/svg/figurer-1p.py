#!/usr/bin/env python3
"""Genererer alle SVG-presisjonsfigurer for 1P-boka.

Kjør:  python3 scripts/svg/figurer-1p.py
Output: public/images/content/1p/*.svg
"""
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from figlib import Fig, fmt, W, H

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..',
                   'public', 'images', 'content', '1p')


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


def dice(fig, cx, cy, s, n, color=None):
    """Terningside med n øyne, sentrert i (cx, cy), sidelengde s."""
    c = color or fig.p['main']
    fig.rect(cx - s / 2, cy - s / 2, s, s, fill=fig.p['bg'], stroke=c, width=4, rx=s * 0.16)
    d = s * 0.26
    pos = {1: [(0, 0)],
           2: [(-d, -d), (d, d)],
           3: [(-d, -d), (0, 0), (d, d)],
           4: [(-d, -d), (d, -d), (-d, d), (d, d)],
           5: [(-d, -d), (d, -d), (0, 0), (-d, d), (d, d)],
           6: [(-d, -d), (d, -d), (-d, 0), (d, 0), (-d, d), (d, d)]}
    for dx, dy in pos[n]:
        fig.circle(cx + dx, cy + dy, s * 0.075, fill=c)


def box3d(fig, x, y, w, h, dx=70, dy=-45, color=None, fill=None, fill_top=None):
    """Rett prisme i skråprojeksjon. (x,y) = nedre venstre hjørne av frontflaten."""
    c = color or fig.p['main']
    # front
    fig.rect(x, y - h, w, h, fill=fill, stroke=c, width=4)
    # topp
    fig.poly([(x, y - h), (x + dx, y - h + dy), (x + w + dx, y - h + dy), (x + w, y - h)],
             fill=fill_top, stroke=c, width=4, close=True)
    # side
    fig.poly([(x + w, y - h), (x + w + dx, y - h + dy), (x + w + dx, y + dy), (x + w, y)],
             fill=None, stroke=c, width=4, close=True)


def cylinder(fig, cx, ytop, rx, h, color=None, base_fill=None):
    """Sylinder: topplokk-ellipse i (cx, ytop), høyde h. ry = rx*0.32."""
    c = color or fig.p['main']
    ry = rx * 0.32
    yb = ytop + h
    # bunn (halv-ellipse synlig) - tegn hele bunn-ellipsen fylt hvis base_fill
    if base_fill:
        fig.raw(f'<ellipse cx="{cx}" cy="{ytop}" rx="{rx}" ry="{ry}" fill="{base_fill}"/>')
    fig.line(cx - rx, ytop, cx - rx, yb, c, 4)
    fig.line(cx + rx, ytop, cx + rx, yb, c, 4)
    fig.raw(f'<path d="M {cx - rx},{yb} A {rx},{ry} 0 0 0 {cx + rx},{yb}" fill="none" stroke="{c}" stroke-width="4"/>')
    fig.raw(f'<path d="M {cx - rx},{yb} A {rx},{ry} 0 0 1 {cx + rx},{yb}" fill="none" stroke="{c}" stroke-width="4" stroke-dasharray="10 9"/>')
    fig.raw(f'<ellipse cx="{cx}" cy="{ytop}" rx="{rx}" ry="{ry}" fill="none" stroke="{c}" stroke-width="4"/>')
    return ry


def angle_arc(fig, cx, cy, r, a1, a2, color, width=4, double=False):
    """Vinkelbue fra a1 til a2 grader (mot klokka, mattekonvensjon, y opp)."""
    def pt(a, rr):
        return cx + rr * math.cos(math.radians(a)), cy - rr * math.sin(math.radians(a))
    for rr in ([r, r - 12] if double else [r]):
        x1, y1 = pt(a1, rr)
        x2, y2 = pt(a2, rr)
        large = 1 if (a2 - a1) % 360 > 180 else 0
        fig.raw(f'<path d="M {x1:.1f},{y1:.1f} A {rr},{rr} 0 {large} 0 {x2:.1f},{y2:.1f}" fill="none" stroke="{color}" stroke-width="{width}"/>')


def gauss(fig, cx, baseline, sigma_px, height_px, color, width=5, half_w=520):
    """Symmetrisk klokkekurve med toppunkt i (cx, baseline-height_px)."""
    pts = []
    n = 160
    for i in range(n + 1):
        x = -half_w + 2 * half_w * i / n
        y = height_px * math.exp(-(x * x) / (2 * sigma_px ** 2))
        pts.append((cx + x, baseline - y))
    fig.poly(pts, stroke=color, width=width)


def para_box(fig, x, y, w, h, label, size=28, skew=26):
    """Parallellogram (flytskjema-symbol for inn/ut)."""
    fig.poly([(x + skew, y), (x + w, y), (x + w - skew, y + h), (x, y + h)],
             stroke=fig.p['main'], width=4, close=True, fill=fig.p['bg'])
    fig.text(x + w / 2, y + h / 2 + 10, label, size)


def person(fig, x, ground, h, color=None):
    """Enkel strekfigur med føttene i (x, ground) og total høyde h."""
    c = color or fig.p['main']
    r = h * 0.13
    fig.circle(x, ground - h + r, r, stroke=c, width=5)
    fig.line(x, ground - h + 2 * r, x, ground - h * 0.32, c, 5)            # kropp
    fig.line(x, ground - h * 0.32, x - h * 0.16, ground, c, 5)             # bein
    fig.line(x, ground - h * 0.32, x + h * 0.16, ground, c, 5)
    fig.line(x - h * 0.2, ground - h * 0.62, x + h * 0.2, ground - h * 0.62, c, 5)  # armer


def lcg(seed=42):
    """Deterministisk pseudotilfeldig generator (0..1)."""
    state = seed
    while True:
        state = (state * 1103515245 + 12345) % (2 ** 31)
        yield state / (2 ** 31)


# ================================================================ KAPITTEL 1

def f_1_1_prosentbar():
    fig = Fig('1p')
    fig.title('30 % av 1200 kr')
    x, y, w, h = 200, 330, 1200, 130
    fig.text(x + w / 2, y - 90, '1200 kr (100 %)', 36, bold=True)
    dim(fig, x, y - 50, x + w, y - 50, '', width=2.5)
    fig.fraction_bar(x, y, w, h, 10, 3, fill=fig.p['accent'])
    fig.text(x + w * 0.15, y + h + 56, '30 % = 360 kr', 36, color=fig.p['accent'], bold=True)
    fig.line(x + w * 0.3, y + h + 8, x + w * 0.3, y + h + 70, fig.p['accent'], 3, dash='8 8')
    fig.text(W / 2, 660, '1200 · 0,30 = 360', 46, bold=True)
    save(fig, '1p-1-1-prosentbar.svg')


def f_1_1_vekstfaktor():
    fig = Fig('1p')
    fig.title('Vekstfaktor')
    rows = [(300, '+ 15 %', '· 1,15', '400 kr', '460 kr', fig.p['main']),
            (620, '− 20 %', '· 0,80', '400 kr', '320 kr', fig.p['accent'])]
    for y, hdr, fac, a, b, c in rows:
        fig.text(W / 2, y - 80, hdr, 40, color=c, bold=True)
        fig.rect(330, y - 50, 280, 100, stroke=c, width=5, rx=14)
        fig.text(470, y + 12, a, 38, bold=True)
        fig.arrow(650, y, 950, y, c, 6, head=18)
        fig.text(800, y - 26, fac, 40, color=c, bold=True)
        fig.rect(990, y - 50, 280, 100, stroke=c, width=5, rx=14)
        fig.text(1130, y + 12, b, 38, bold=True)
    save(fig, '1p-1-1-vekstfaktor.svg')


def f_1_2_rentesrente():
    fig = Fig('1p')
    fig.title('Rentesrente: 10 000 kr i 5 år til 5 %')
    x0, y0, w, h = 240, 150, 900, 520
    vals = [10000 * 1.05 ** n for n in range(6)]
    stacked = [[10000, v - 10000] for v in vals]
    vlabs = ['10 000 kr', None, None, None, None, '≈ 12 763 kr']
    fig.bar_chart(x0, y0, w, h, stacked, labels=[str(n) for n in range(6)],
                  colors=[fig.p['main'], fig.p['accent']], vmax=14000, value_labels=vlabs)
    # tegnforklaring
    fig.rect(1250, 260, 40, 40, fill=fig.p['main'])
    fig.text(1305, 290, 'beløp', 30, anchor='start')
    fig.rect(1250, 330, 40, 40, fill=fig.p['accent'])
    fig.text(1305, 360, 'rente', 30, anchor='start')
    fig.text(W / 2, 790, '10 000 · 1,05⁵ ≈ 12 763', 42, bold=True)
    fig.text(W / 2, 850, 'Du får rente av renten!', 34, color=fig.p['accent'], bold=True)
    save(fig, '1p-1-2-rentesrente.svg')


def f_1_3_serielan():
    fig = Fig('1p')
    fig.title('Serielån: like avdrag, synkende terminbeløp')
    x0, y0, w, h = 280, 160, 880, 500
    avdrag = 20000
    renter = [5000, 4000, 3000, 2000, 1000]
    stacked = [[avdrag, r] for r in renter]
    fig.bar_chart(x0, y0, w, h, stacked, labels=[f'Termin {i}' for i in range(1, 6)],
                  colors=[fig.p['main'], fig.p['accent']], vmax=27000)
    fig.text(x0 - 30, y0 - 30, 'Kroner', 30, anchor='start', italic=True)
    fig.rect(1240, 280, 40, 40, fill=fig.p['main'])
    fig.text(1295, 310, 'avdrag (likt hver gang)', 30, anchor='start')
    fig.rect(1240, 350, 40, 40, fill=fig.p['accent'])
    fig.text(1295, 380, 'renter (synker)', 30, anchor='start')
    fig.text(W / 2, 800, 'Like avdrag — terminbeløpet synker for hver termin', 34, bold=True)
    save(fig, '1p-1-3-serielan.svg')


def f_1_3_serie_vs_annuitet():
    fig = Fig('1p')
    fig.title('Serielån og annuitetslån')
    tx, ty = fig.coords(0, 10, 0, 10, box=(220, 160, 1380, 740), grid=True,
                        xticks=[], yticks=[], xlabel='Tid (terminer)', ylabel='Terminbeløp (kr)')
    # serielån: synker fra (0,9) til (10,3); annuitet konstant 6 -> kryss ved x=5
    fig.plot(lambda x: 9 - 0.6 * x, color=fig.p['main'], width=6)
    fig.plot(lambda x: 6, color=fig.p['accent'], width=6)
    fig.point(5, 6, color=fig.p['text'], r=11)
    fig.circle(tx(5), ty(6), 22, stroke=fig.p['text'], width=3)
    fig.text(tx(1.2), ty(9.0) - 20, 'serielån: synker', 32, color=fig.p['main'], anchor='start', bold=True)
    fig.text(tx(6.2), ty(6) + 52, 'annuitetslån: likt hele tiden', 32, color=fig.p['accent'], anchor='start', bold=True)
    save(fig, '1p-1-3-serie-vs-annuitet.svg')


def f_1_4_forkorting_utviding():
    fig = Fig('1p')
    fig.title('Forkorting og utviding')
    x, w, h = 330, 940, 110
    y1, y2 = 230, 540
    fig.fraction_bar(x, y1, w, h, 8, 6, fill=fig.p['main'], label='6/8')
    fig.fraction_bar(x, y2, w, h, 4, 3, fill=fig.p['accent'], label='3/4')
    fig.line(x, y1 + h + 8, x, y2 - 8, fig.p['grid'], 2, dash='6 8')
    fig.line(x + w * 0.75, y1 + h + 8, x + w * 0.75, y2 - 8, fig.p['grid'], 2, dash='6 8')
    mid = (y1 + h + y2) / 2
    fig.arrow(x + w + 60, y1 + h / 2, x + w + 60, y2 + h / 2, fig.p['main'], 5, head=16)
    fig.text(x + w + 100, mid - 8, ': 2', 34, anchor='start', color=fig.p['main'], bold=True)
    fig.text(x + w + 100, mid + 36, '(forkorting)', 30, anchor='start', color=fig.p['main'], bold=True)
    fig.arrow(x - 220, y2 + h / 2, x - 220, y1 + h / 2, fig.p['accent'], 5, head=16)
    fig.text(x - 180, mid - 8, '· 2', 34, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(x - 180, mid + 36, '(utviding)', 30, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(W / 2, 790, 'Like lange fylte deler: 6/8 = 3/4', 36, bold=True)
    save(fig, '1p-1-4-forkorting-utviding.svg')


def f_1_4_brokdel_av_tall():
    fig = Fig('1p')
    fig.title('3/4 av 240 kr')
    x, y, w, h = 250, 280, 1100, 130
    fig.text(x + w / 2, y - 60, '240 kr', 36, bold=True)
    dim(fig, x, y - 30, x + w, y - 30, '', width=2.5)
    fig.fraction_bar(x, y, w, h, 4, 3, fill=fig.p['accent'])
    for i in range(4):
        fig.text(x + w * (i + 0.5) / 4, y + h / 2 + 12, '60 kr', 32,
                 color='#FFFFFF' if i < 3 else fig.p['text'], bold=True)
    fig.text(x + w * 3 / 8, y + h + 58, '3/4 = 180 kr', 38, color=fig.p['accent'], bold=True)
    fig.text(W / 2, 640, '240 : 4 = 60', 40, bold=True)
    fig.text(W / 2, 720, '60 · 3 = 180', 40, bold=True)
    save(fig, '1p-1-4-brokdel-av-tall.svg')


# ================================================================ KAPITTEL 2

def f_2_1_parentes_areal():
    fig = Fig('1p')
    fig.text(W / 2, 90, '3(x + 2)', 52, bold=True)
    x, y, h = 380, 260, 280
    wx, w2 = 620, 240
    fig.rect(x, y, wx, h, fill=fig.p['main'], opacity=0.85)
    fig.rect(x + wx, y, w2, h, fill=fig.p['accent'], opacity=0.9)
    fig.rect(x, y, wx + w2, h, stroke=fig.p['text'], width=4)
    fig.line(x + wx, y, x + wx, y + h, fig.p['bg'], 4)
    fig.text(x - 40, y + h / 2 + 14, '3', 44, bold=True)
    fig.text(x + wx / 2, y - 26, 'x', 44, bold=True, italic=True)
    fig.text(x + wx + w2 / 2, y - 26, '2', 44, bold=True)
    fig.text(x + wx / 2, y + h / 2 + 16, '3x', 48, color='#FFFFFF', bold=True)
    fig.text(x + wx + w2 / 2, y + h / 2 + 16, '6', 48, color='#FFFFFF', bold=True)
    # piler: 3 ganges med begge ledd
    fig.arrow(700, 120, x + wx / 2 - 60, y - 60, fig.p['accent'], 4)
    fig.arrow(840, 120, x + wx + w2 / 2, y - 60, fig.p['accent'], 4)
    fig.text(W / 2, 660, '= 3x + 6', 52, bold=True)
    fig.text(W / 2, 760, '3 ganges med begge leddene', 32, color=fig.p['accent'])
    save(fig, '1p-2-1-parentes-areal.svg')


def f_2_3_omforme_formel():
    fig = Fig('1p')
    fig.title('Formeltrekanten: strekning, fart og tid')
    cx, cy, r = 520, 470, 250
    A = (cx, cy - r)
    B = (cx - r * 0.95, cy + r * 0.62)
    C = (cx + r * 0.95, cy + r * 0.62)
    fig.poly([A, B, C], stroke=fig.p['main'], width=6, close=True)
    my = cy + r * 0.05
    lx = cx - r * 0.95 * ((my - A[1]) / (B[1] - A[1]))
    fig.line(cx - (cx - B[0]) * (my - A[1]) / (B[1] - A[1]), my,
             cx + (C[0] - cx) * (my - A[1]) / (C[1] - A[1]), my, fig.p['main'], 5)
    fig.line(cx, my, cx, B[1], fig.p['main'], 5)
    fig.text(cx, cy - r * 0.32, 's', 56, bold=True, italic=True)
    fig.text(cx - r * 0.42, cy + r * 0.46, 'v', 52, bold=True, italic=True)
    fig.text(cx + r * 0.42, cy + r * 0.46, 't', 52, bold=True, italic=True)
    for i, (frm, expl) in enumerate([('s = v · t', 'dekk til s'),
                                     ('v = s/t', 'dekk til v'),
                                     ('t = s/v', 'dekk til t')]):
        y = 280 + i * 150
        fig.text(1080, y, frm, 46, anchor='start', bold=True)
        fig.text(1080, y + 44, expl, 28, anchor='start', color=fig.p['accent'])
    fig.arrow(1040, 270, cx + 120, cy - r * 0.45, fig.p['accent'], 4)
    fig.text(W / 2, 850, 'Dekk til bokstaven du vil finne — resten gir formelen', 32)
    save(fig, '1p-2-3-omforme-formel.svg')


def f_2_4_potenser_visuelt():
    fig = Fig('1p')
    fig.title('Potenser med grunntall 3')
    rp = 14
    # 3^1: rad med 3 prikker
    bx = 240
    for i in range(3):
        fig.circle(bx + i * 70, 300, rp, fill=fig.p['main'])
    fig.text(bx + 70, 420, '3¹ = 3', 40, bold=True)
    # 3^2: 3x3
    bx = 660
    for i in range(3):
        for j in range(3):
            fig.circle(bx + i * 70, 230 + j * 70, rp, fill=fig.p['main'])
    fig.text(bx + 70, 480, '3² = 9', 40, bold=True)
    # 3^3: 3 lag à 3x3, forskjøvet
    bx = 1100
    for k in range(2, -1, -1):
        for i in range(3):
            for j in range(3):
                if k == 0:
                    fig.circle(bx + i * 70, 230 + j * 70, rp, fill=fig.p['main'])
                else:
                    fig.circle(bx + i * 70 + k * 30, 230 + j * 70 - k * 30, rp - 3,
                               stroke=fig.p['extra'], width=3, opacity=0.85)
    fig.text(bx + 95, 480, '3³ = 27', 40, bold=True)
    # skrivemåte med piler
    fig.text(700, 700, '3', 80, anchor='end', bold=True)
    fig.text(702, 660, '2', 48, anchor='start', bold=True, color=fig.p['accent'])
    fig.arrow(560, 780, 668, 700, fig.p['main'], 4)
    fig.text(545, 800, 'grunntall', 32, anchor='end', color=fig.p['main'], bold=True)
    fig.arrow(880, 600, 740, 645, fig.p['accent'], 4)
    fig.text(895, 605, 'eksponent', 32, anchor='start', color=fig.p['accent'], bold=True)
    save(fig, '1p-2-4-potenser-visuelt.svg')


def f_2_6_proporsjonal_graf():
    fig = Fig('1p')
    fig.text(430, 80, 'Proporsjonal: y = 30x', 36, bold=True, color=fig.p['main'])
    tx, ty = fig.coords(0, 4, 0, 120, box=(160, 150, 740, 720), xticks=[1, 2, 3, 4],
                        yticks=[30, 60, 90, 120], xlabel='kg epler', ylabel='pris (kr)')
    fig.plot(lambda x: 30 * x, color=fig.p['main'], width=5)
    for px, py in [(1, 30), (2, 60), (3, 90)]:
        fig.point(px, py, color=fig.p['accent'], r=10)
    fig.text(1190, 80, 'Omvendt proporsjonal: y = 12/x', 36, bold=True, color=fig.p['accent'])
    tx2, ty2 = fig.coords(0, 5, 0, 14, box=(940, 150, 1500, 720), xticks=[1, 2, 3, 4, 5],
                          yticks=[3, 6, 9, 12], xlabel='antall personer', ylabel='timer per person')
    fig.plot(lambda x: 12 / x, xmin=0.9, xmax=5, color=fig.p['accent'], width=5)
    for px, py in [(1, 12), (2, 6), (4, 3)]:
        fig.point(px, py, color=fig.p['main'], r=10)
    save(fig, '1p-2-6-proporsjonal-graf.svg')


def f_2_6_kryssregning():
    fig = Fig('1p')
    fig.text(W / 2, 110, '4 epler koster 12 kr — hva koster 7 epler?', 40, bold=True)
    # to brøker med likhetstegn
    def frac(cx, top, bot, color):
        fig.text(cx, 360, top, 56, bold=True)
        fig.line(cx - 55, 392, cx + 55, 392, fig.p['text'], 5)
        fig.text(cx, 470, bot, 56, bold=True, color=color)
        return cx
    a = frac(620, '4', '12', fig.p['text'])
    fig.text(800, 430, '=', 60, bold=True)
    b = frac(980, '7', 'x', fig.p['accent'])
    # kryss-piler
    fig.arrow(670, 350, 930, 470, fig.p['accent'], 6, head=18)
    fig.arrow(670, 480, 930, 360, fig.p['accent'], 6, head=18)
    fig.text(W / 2, 640, '4 · x = 12 · 7', 48, bold=True)
    fig.text(W / 2, 760, 'x = 21 kr', 52, bold=True, color=fig.p['accent'])
    save(fig, '1p-2-6-kryssregning.svg')


# ================================================================ KAPITTEL 3

def f_3_1_funksjonsmaskin():
    fig = Fig('1p')
    fig.title('Funksjonen som maskin')
    bx, by, bw, bh = 560, 240, 480, 220
    fig.rect(bx, by, bw, bh, stroke=fig.p['main'], width=6, rx=18, fill=fig.p['bg'])
    fig.text(bx + bw / 2, by + bh / 2 + 14, 'f(x) = 2x + 3', 44, bold=True)
    fig.text(330, by - 40, 'inn: x', 34, italic=True, color=fig.p['main'], bold=True)
    fig.text(1270, by - 40, 'ut: f(x)', 34, italic=True, color=fig.p['accent'], bold=True)
    fig.arrow(220, by + bh / 2, bx - 14, by + bh / 2, fig.p['main'], 6, head=18)
    fig.circle(260, by + bh / 2 - 60, 42, stroke=fig.p['main'], width=5)
    fig.text(260, by + bh / 2 - 47, '4', 40, bold=True)
    fig.arrow(bx + bw + 14, by + bh / 2, 1380, by + bh / 2, fig.p['accent'], 6, head=18)
    fig.circle(1340, by + bh / 2 - 60, 42, stroke=fig.p['accent'], width=5)
    fig.text(1340, by + bh / 2 - 47, '11', 40, bold=True)
    # verditabell
    tx0, ty0, cw, rh = 530, 580, 180, 76
    fig.text(tx0 + cw / 2, ty0 - 24, '', 30)
    rows = [('x', '0', '1', '4'), ('f(x)', '3', '5', '11')]
    for r, row in enumerate(rows):
        for c, val in enumerate(row):
            x = tx0 + c * cw
            y = ty0 + r * rh
            fig.rect(x, y, cw, rh, stroke=fig.p['main'], width=3,
                     fill=fig.p['grid'] if c == 0 else fig.p['bg'])
            fig.text(x + cw / 2, y + rh / 2 + 11, val, 34, bold=(c == 0), italic=(c == 0))
    save(fig, '1p-3-1-funksjonsmaskin.svg')


def f_3_2_stigningstall():
    fig = Fig('1p')
    fig.title('f(x) = 2x + 1')
    tx, ty = fig.coords(-1, 5, -1, 6, box=(380, 140, 1220, 800),
                        xticks=list(range(-1, 6)), yticks=list(range(-1, 7)))
    fig.plot(lambda x: 2 * x + 1, color=fig.p['main'], width=5)
    fig.circle(tx(0), ty(1), 24, stroke=fig.p['accent'], width=5)
    fig.text(tx(0.45), ty(0.45), 'b = 1', 34, anchor='start', bold=True, color=fig.p['accent'])
    # trappetrinn (1,3) -> (2,3) -> (2,5)
    fig.line(tx(1), ty(3), tx(2), ty(3), fig.p['accent'], 5, dash='10 8')
    fig.line(tx(2), ty(3), tx(2), ty(5), fig.p['accent'], 5, dash='10 8')
    fig.text(tx(1.5), ty(3) + 44, '1 mot høyre', 30, color=fig.p['accent'], bold=True)
    fig.text(tx(2) + 18, ty(4) + 10, '2 opp', 30, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(tx(2.9), ty(4.4), 'a = 2', 36, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-3-2-stigningstall.svg')


def f_3_3_skjaeringspunkt():
    fig = Fig('1p')
    fig.title('To mobilabonnement')
    tx, ty = fig.coords(0, 10, 0, 500, box=(230, 150, 1380, 760),
                        xticks=[2, 4, 6, 8, 10], yticks=[100, 200, 300, 400, 500],
                        xlabel='Databruk (GB)', ylabel='Pris (kr)')
    fig.plot(lambda x: 100 + 30 * x, color=fig.p['main'], width=5)
    fig.plot(lambda x: 250 + 10 * x, color=fig.p['accent'], width=5)
    fig.text(tx(8.3), ty(100 + 30 * 8.3) - 26, 'A', 36, bold=True, color=fig.p['main'])
    fig.text(tx(8.6), ty(250 + 10 * 8.6) + 48, 'B', 36, bold=True, color=fig.p['accent'])
    fig.circle(tx(7.5), ty(325), 22, stroke=fig.p['text'], width=4)
    fig.circle(tx(7.5), ty(325), 9, fill=fig.p['text'])
    fig.text(tx(7.3), ty(325) - 46, '(7,5 , 325): her koster de det samme', 32, anchor='end', bold=True)
    save(fig, '1p-3-3-skjaeringspunkt.svg')


def f_3_4_kastebane():
    fig = Fig('1p')
    fig.title('Ballbanen er en parabel')
    f = lambda x: 2 + 10 * x - 5 * x * x
    x_null = (10 + math.sqrt(140)) / 10
    tx, ty = fig.coords(0, 2.6, 0, 8, box=(230, 150, 1380, 760),
                        xticks=[1, 2], yticks=[2, 4, 6, 8],
                        xlabel='Tid (s)', ylabel='Høyde (m)')
    fig.plot(f, xmin=0, xmax=x_null, color=fig.p['main'], width=6)
    fig.point(0, 2, color=fig.p['main'], r=10)
    fig.text(tx(0) + 20, ty(2) + 44, 'start (0, 2)', 30, anchor='start')
    fig.circle(tx(1), ty(7), 22, stroke=fig.p['accent'], width=5)
    fig.circle(tx(1), ty(7), 9, fill=fig.p['accent'])
    fig.text(tx(1), ty(7) - 44, 'toppunkt (1, 7)', 34, bold=True, color=fig.p['accent'])
    fig.point(x_null, 0, color=fig.p['accent'], r=11)
    fig.text(tx(x_null) + 6, ty(0) - 30, 'ballen treffer bakken', 30, anchor='end', color=fig.p['accent'], bold=True)
    save(fig, '1p-3-4-kastebane.svg')


def f_3_4_parabel_anatomi():
    fig = Fig('1p')
    f = lambda x: x * x - 4 * x + 3
    tx, ty = fig.coords(-1, 5, -2.5, 5, box=(180, 110, 1020, 800),
                        xticks=list(range(-1, 6)), yticks=[-2, -1, 1, 2, 3, 4, 5])
    fig.line(tx(2), ty(-2.4), tx(2), ty(4.9), fig.p['extra'], 4, dash='12 10')
    fig.text(tx(2) + 14, ty(4.6), 'symmetrilinje', 30, anchor='start', color=fig.p['extra'], bold=True)
    fig.plot(f, xmin=-0.55, xmax=4.55, color=fig.p['main'], width=6)
    fig.circle(tx(2), ty(-1), 20, stroke=fig.p['accent'], width=5)
    fig.circle(tx(2), ty(-1), 8, fill=fig.p['accent'])
    fig.text(tx(2), ty(-1) + 58, 'bunnpunkt', 32, bold=True, color=fig.p['accent'])
    for r in (1, 3):
        fig.circle(tx(r), ty(0), 13, fill=fig.p['bg'], stroke=fig.p['accent'], width=5)
    fig.text(tx(3) + 26, ty(0) - 26, 'nullpunkter', 32, anchor='start', bold=True, color=fig.p['accent'])
    fig.circle(tx(0), ty(3), 13, fill=fig.p['main'])
    fig.text(tx(0) - 22, ty(3) - 20, 'skjærer y-aksen', 28, anchor='end')
    # liten sur parabel
    fig.text(1300, 200, 'negativt andregradsledd:', 28)
    tx2, ty2 = fig.coords(-2, 2, -2, 2, box=(1130, 240, 1470, 580), grid=False, xticks=[], yticks=[])
    fig.plot(lambda x: 1 - x * x, xmin=-1.7, xmax=1.7, color=fig.p['accent'], width=5)
    fig.circle(tx2(0), ty2(1), 14, stroke=fig.p['main'], width=4)
    fig.text(tx2(0), ty2(1) - 36, 'toppunkt', 30, bold=True, color=fig.p['main'])
    save(fig, '1p-3-4-parabel-anatomi.svg')


def f_3_5_eksponentiell_vs_linear():
    fig = Fig('1p')
    fig.title('Lineær eller eksponentiell vekst?')
    lin = lambda x: 100 + 40 * x
    eks = lambda x: 100 * 1.25 ** x
    # kryss: finn numerisk
    xc = 5.0
    for _ in range(60):
        xc = xc - (eks(xc) - lin(xc)) / (eks(xc) * math.log(1.25) - 40)
    tx, ty = fig.coords(0, 10, 0, 1000, box=(230, 150, 1380, 760),
                        xticks=[2, 4, 6, 8, 10], yticks=[200, 400, 600, 800, 1000],
                        xlabel='År', ylabel='Beløp (kr)')
    fig.plot(lin, color=fig.p['main'], width=5)
    fig.plot(eks, color=fig.p['accent'], width=5)
    fig.text(tx(8.6), ty(lin(8.6)) - 28, '100 + 40x', 32, bold=True, color=fig.p['main'], anchor='end')
    fig.text(tx(9.2), ty(eks(9.2)) - 10, '100 · 1,25ˣ', 32, bold=True, color=fig.p['accent'], anchor='end')
    fig.circle(tx(xc), ty(lin(xc)), 20, stroke=fig.p['text'], width=4)
    fig.text(tx(xc) + 26, ty(lin(xc)) + 52, 'eksponentiell vekst vinner til slutt', 32, anchor='start', bold=True)
    save(fig, '1p-3-5-eksponentiell-vs-linear.svg')


def f_3_5_verdifall_bil():
    fig = Fig('1p')
    fig.title('Verdifall: V = 300 000 · 0,85ˣ')
    f = lambda x: 300000 * 0.85 ** x
    tx, ty = fig.coords(0, 10, 0, 320000, box=(260, 150, 1380, 740),
                        xticks=[2, 4, 6, 8, 10], yticks=[100000, 200000, 300000],
                        xlabel='Alder (år)', ylabel='Verdi (kr)')
    fig.plot(f, color=fig.p['main'], width=6)
    fig.point(0, 300000, color=fig.p['accent'], r=11)
    fig.text(tx(0.15), ty(300000) - 24, '300 000 kr', 32, anchor='start', bold=True)
    fig.point(4, f(4), color=fig.p['accent'], r=11)
    fig.text(tx(4.2), ty(f(4)) - 24, '≈ 156 600 kr', 32, anchor='start', bold=True)
    fig.line(tx(4), ty(0), tx(4), ty(f(4)), fig.p['accent'], 3, dash='8 8')
    fig.text(tx(5.4), ty(255000), '15 % verditap per år', 32, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(tx(5.4), ty(225000), 'gir vekstfaktor 0,85', 32, anchor='start', color=fig.p['accent'], bold=True)
    save(fig, '1p-3-5-verdifall-bil.svg')


def f_3_6_grafisk_losning():
    fig = Fig('1p')
    fig.title('Grafisk løsning: 2x + 1 = −x + 7')
    tx, ty = fig.coords(-1, 5, -1, 8, box=(330, 140, 1270, 800),
                        xticks=list(range(-1, 6)), yticks=list(range(-1, 9)))
    fig.plot(lambda x: 2 * x + 1, color=fig.p['main'], width=5)
    fig.plot(lambda x: -x + 7, color=fig.p['accent'], width=5)
    fig.text(tx(2.9), ty(2 * 2.9 + 1) + 8, 'y = 2x + 1', 32, anchor='start', bold=True, color=fig.p['main'])
    fig.text(tx(3.6), ty(-3.6 + 7) - 22, 'y = −x + 7', 32, anchor='start', bold=True, color=fig.p['accent'])
    fig.line(tx(2), ty(5), tx(2), ty(0), fig.p['text'], 3, dash='9 9')
    fig.circle(tx(2), ty(5), 20, stroke=fig.p['text'], width=4)
    fig.circle(tx(2), ty(5), 8, fill=fig.p['text'])
    fig.text(tx(2) - 28, ty(5) - 32, 'løsning: x = 2', 34, anchor='end', bold=True)
    save(fig, '1p-3-6-grafisk-losning.svg')


# ================================================================ KAPITTEL 4

def f_4_1_arealformler_plakat():
    fig = Fig('1p')
    fig.title('Arealformler')
    panels = [(90, 'A = b · h'), (590, 'A = (g · h)/2'), (1090, 'A = π r²')]
    for x, _ in panels:
        fig.rect(x, 130, 420, 620, stroke=fig.p['grid'], width=3, rx=16)
    # rektangel
    x = 90
    fig.rect(x + 80, 260, 260, 180, fill=fig.p['main'], opacity=0.25)
    fig.rect(x + 80, 260, 260, 180, stroke=fig.p['main'], width=5)
    dim(fig, x + 80, 490, x + 340, 490, 'b', size=32, off=(0, 40))
    dim(fig, x + 50, 260, x + 50, 440, 'h', size=32, off=(-26, 6))
    fig.text(x + 210, 680, 'A = b · h', 40, bold=True)
    # trekant
    x = 590
    A = (x + 60, 470); B = (x + 360, 470); T = (x + 250, 240)
    fig.poly([A, B, T], fill=fig.p['accent'], opacity=0.25, close=True)
    fig.poly([A, B, T], stroke=fig.p['accent'], width=5, close=True)
    fig.line(T[0], T[1], T[0], 470, fig.p['text'], 3, dash='9 8')
    m = 24
    fig.poly([(T[0] - m, 470), (T[0] - m, 470 - m), (T[0], 470 - m)], stroke=fig.p['text'], width=3)
    fig.text(T[0] - 20, 360, 'h', 32, anchor='end', bold=True)
    dim(fig, A[0], 520, B[0], 520, 'g', size=32, off=(0, 40))
    fig.text(x + 210, 680, 'A = (g · h)/2', 40, bold=True)
    # sirkel
    x = 1090
    cx, cy, r = x + 210, 360, 130
    fig.circle(cx, cy, r, fill=fig.p['extra'], opacity=0.3)
    fig.circle(cx, cy, r, stroke=fig.p['main'], width=5)
    fig.circle(cx, cy, 6, fill=fig.p['text'])
    fig.arrow(cx, cy, cx + r * 0.97, cy, fig.p['accent'], 4, head=12)
    fig.text(cx + r / 2, cy - 16, 'r', 32, bold=True, italic=True)
    fig.text(x + 210, 680, 'A = π r²', 40, bold=True)
    save(fig, '1p-4-1-arealformler-plakat.svg')


def f_4_1_gulvareal():
    fig = Fig('1p')
    fig.title('Gulvareal og omkrets')
    # 5,2 x 3,8 -> skala 170 px/m
    s = 170
    w, h = 5.2 * s, 3.8 * s
    x, y = (W - w) / 2, 180
    fig.rect(x, y, w, h, fill=fig.p['main'], opacity=0.15)
    fig.rect(x, y, w, h, stroke=fig.p['accent'], width=9)
    fig.text(x + w / 2, y + h / 2 - 10, 'areal: 19,76 m²', 38, bold=True, color=fig.p['main'])
    fig.text(x + w / 2, y + h / 2 + 40, '(gulvbelegg)', 30, color=fig.p['main'])
    dim(fig, x, y - 36, x + w, y - 36, '5,2 m', size=32)
    dim(fig, x - 40, y, x - 40, y + h, '3,8 m', size=32, off=(-64, 8))
    fig.text(W / 2, y + h + 70, 'omkrets: 18 m  (gulvlister)', 36, bold=True, color=fig.p['accent'])
    save(fig, '1p-4-1-gulvareal.svg')


def f_4_1_sirkel_plen():
    fig = Fig('1p')
    fig.title('Sirkelrund plen')
    cx, cy, r = 560, 490, 290
    fig.circle(cx, cy, r, fill=fig.p['extra'], opacity=0.35)
    fig.circle(cx, cy, r, stroke=fig.p['accent'], width=12)
    fig.circle(cx, cy, 7, fill=fig.p['text'])
    fig.arrow(cx, cy, cx + (r - 8) * math.cos(-0.5), cy + (r - 8) * math.sin(-0.5), fig.p['main'], 5, head=14)
    fig.text(cx + 110, cy - 60, 'r = 4 m', 36, bold=True, color=fig.p['main'])
    fig.text(1130, 380, 'areal ≈ 50,3 m²', 38, anchor='start', bold=True, color=fig.p['main'])
    fig.text(1130, 430, '(gressfrø)', 30, anchor='start', color=fig.p['main'])
    fig.text(1130, 560, 'omkrets ≈ 25,1 m', 38, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(1130, 610, '(kantstein)', 30, anchor='start', color=fig.p['accent'])
    save(fig, '1p-4-1-sirkel-plen.svg')


def f_4_1_sammensatt_fasade():
    fig = Fig('1p')
    fig.title('Sammensatt figur: husfasade')
    s = 105  # px per m
    bw, bh, gh = 6 * s, 4 * s, 2 * s
    x = 330
    ytop = 160
    yd = ytop + gh           # skille rektangel/gavl
    yb = yd + bh             # bakke
    fig.rect(x, yd, bw, bh, fill=fig.p['main'], opacity=0.15)
    fig.rect(x, yd, bw, bh, stroke=fig.p['main'], width=5)
    fig.poly([(x, yd), (x + bw, yd), (x + bw / 2, ytop)], fill=fig.p['accent'], opacity=0.2, close=True)
    fig.poly([(x, yd), (x + bw, yd), (x + bw / 2, ytop)], stroke=fig.p['accent'], width=5, close=True)
    fig.line(x, yd, x + bw, yd, fig.p['text'], 4, dash='14 10')
    # gavlhøyde
    fig.line(x + bw / 2, ytop, x + bw / 2, yd, fig.p['text'], 3, dash='8 8')
    m = 22
    fig.poly([(x + bw / 2 - m, yd), (x + bw / 2 - m, yd - m), (x + bw / 2, yd - m)], stroke=fig.p['text'], width=3)
    fig.text(x + bw / 2 + 16, yd - gh / 2 + 10, '2 m', 30, anchor='start', bold=True)
    fig.text(x + bw / 2 + 130, yd - 36, '6 m²', 40, bold=True, color=fig.p['accent'])
    fig.text(x + bw / 2, yd + bh / 2 + 14, '24 m²', 44, bold=True, color=fig.p['main'])
    dim(fig, x, yb + 44, x + bw, yb + 44, '6 m', size=32, off=(0, 42))
    dim(fig, x - 44, yd, x - 44, yb, '4 m', size=32, off=(-58, 8))
    fig.text(1240, 420, 'til sammen', 36, anchor='start')
    fig.text(1240, 480, '24 + 6 = 30 m²', 40, anchor='start', bold=True)
    save(fig, '1p-4-1-sammensatt-fasade.svg')


def f_4_1_omkrets_vs_areal():
    fig = Fig('1p')
    fig.title('Omkrets og areal')
    s = 88
    w, h = 6 * s, 4 * s
    for x, mode in [(150, 'omkrets'), (920, 'areal')]:
        y = 230
        if mode == 'omkrets':
            fig.rect(x, y, w, h, stroke=fig.p['accent'], width=12)
            fig.text(x + w / 2, y + h + 90, 'omkrets: rundt = 20 m', 36, bold=True, color=fig.p['accent'])
        else:
            fig.rect(x, y, w, h, fill=fig.p['main'], opacity=0.3)
            fig.rect(x, y, w, h, stroke=fig.p['main'], width=4)
            fig.text(x + w / 2, y + h + 90, 'areal: inni = 24 m²', 36, bold=True, color=fig.p['main'])
        fig.text(x + w / 2, y - 30, '6 m', 30, bold=True)
        fig.text(x - 26, y + h / 2 + 10, '4 m', 30, anchor='end', bold=True)
    save(fig, '1p-4-1-omkrets-vs-areal.svg')


def f_4_2_pytagoras_kvadrater():
    fig = Fig('1p')
    u = 64  # px per enhet
    # rett vinkel i C, B til høyre (4), A opp (3)
    Cx, Cy = 500, 540
    Bx, By = Cx + 4 * u, Cy
    Ax, Ay = Cx, Cy - 3 * u
    # kvadrat på katet a (vertikal, 3): til venstre
    fig.rect(Cx - 3 * u, Ay, 3 * u, 3 * u, fill=fig.p['main'], opacity=0.22)
    for i in range(4):
        fig.line(Cx - 3 * u + i * u, Ay, Cx - 3 * u + i * u, Cy, fig.p['main'], 2)
        fig.line(Cx - 3 * u, Ay + i * u, Cx, Ay + i * u, fig.p['main'], 2)
    fig.text(Cx - 1.5 * u, Cy - 1.5 * u + 14, '9', 44, bold=True, color=fig.p['main'])
    # kvadrat på katet b (horisontal, 4): under
    fig.rect(Cx, Cy, 4 * u, 4 * u, fill=fig.p['accent'], opacity=0.22)
    for i in range(5):
        fig.line(Cx + i * u, Cy, Cx + i * u, Cy + 4 * u, fig.p['accent'], 2)
        fig.line(Cx, Cy + i * u, Bx, Cy + i * u, fig.p['accent'], 2)
    fig.text(Cx + 2 * u, Cy + 2 * u + 14, '16', 44, bold=True, color=fig.p['accent'])
    # kvadrat på hypotenusen AB: utover (opp-høyre)
    hx, hy = (Bx - Ax) / 5, (By - Ay) / 5  # enhetsvektor * u/... faktisk (4u/5, 3u/5)
    # normal som peker bort fra C: n = (hy, -hx) sjekk retning
    nx, ny = (By - Ay) / 5, -(Bx - Ax) / 5
    P1 = (Ax, Ay); P2 = (Bx, By)
    P3 = (Bx + nx * 5, By + ny * 5); P4 = (Ax + nx * 5, Ay + ny * 5)
    fig.poly([P1, P2, P3, P4], fill=fig.p['extra'], opacity=0.25, close=True)
    for i in range(6):
        fig.line(Ax + hx * i, Ay + hy * i, Ax + hx * i + nx * 5, Ay + hy * i + ny * 5, fig.p['extra'], 2)
        fig.line(Ax + nx * i, Ay + ny * i, Bx + nx * i, By + ny * i, fig.p['extra'], 2)
    mx, my = (P1[0] + P3[0]) / 2, (P1[1] + P3[1]) / 2
    fig.text(mx, my + 14, '25', 44, bold=True, color=fig.p['main'])
    # trekanten
    fig.poly([(Cx, Cy), (Bx, By), (Ax, Ay)], fill=fig.p['bg'], stroke=fig.p['text'], width=6, close=True)
    m = 26
    fig.poly([(Cx + m, Cy), (Cx + m, Cy - m), (Cx, Cy - m)], stroke=fig.p['text'], width=3)
    fig.text(Cx + 18, Cy - 1.5 * u + 12, '3', 36, anchor='start', bold=True)
    fig.text(Cx + 2 * u, Cy - 18, '4', 36, bold=True)
    fig.text((Ax + Bx) / 2 + 26, (Ay + By) / 2 - 20, '5', 36, anchor='start', bold=True)
    fig.text(1240, 380, 'a² + b² = c²', 46, anchor='start', bold=True)
    fig.text(1240, 460, '9 + 16 = 25', 42, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-4-2-pytagoras-kvadrater.svg')


def f_4_2_finn_hypotenus():
    fig = Fig('1p')
    fig.title('Finn hypotenusen')
    u = 62
    A, B, C = fig.right_triangle(280, 700, 8 * u, 6 * u,
                                 labels={'base': '8,0 m', 'height': '6,0 m'})
    fig.text((B[0] + C[0]) / 2 + 34, (B[1] + C[1]) / 2 - 18, 'x', 46,
             anchor='start', bold=True, italic=True, color=fig.p['accent'])
    fig.arrow(1010, 280, (B[0] + C[0]) / 2 + 50, (B[1] + C[1]) / 2 - 70, fig.p['accent'], 4)
    fig.text(1025, 270, 'lengste side — rett overfor', 28, anchor='start', color=fig.p['accent'])
    fig.text(1025, 306, 'den rette vinkelen', 28, anchor='start', color=fig.p['accent'])
    fig.text(1040, 480, 'x² = 6² + 8²', 44, anchor='start', bold=True)
    fig.text(1040, 580, 'x = 10 m', 48, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-4-2-finn-hypotenus.svg')


def f_4_2_finn_katet():
    fig = Fig('1p')
    fig.title('Finn kateten')
    u = 46
    A, B, C = fig.right_triangle(280, 700, 12 * u, 5 * u,
                                 labels={'base': '12 cm', 'hyp': '13 cm'})
    fig.text(A[0] - 24, (A[1] + C[1]) / 2 + 12, 'x', 46, anchor='end',
             bold=True, italic=True, color=fig.p['accent'])
    fig.text(1140, 420, 'x² = 13² − 12²', 44, anchor='start', bold=True)
    fig.text(1140, 520, 'x = 5 cm', 48, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(1140, 620, 'kjent hypotenus: trekk fra', 30, anchor='start', color=fig.p['accent'])
    save(fig, '1p-4-2-finn-katet.svg')


def f_4_2_stige_praktisk():
    fig = Fig('1p')
    fig.title('Stigen mot veggen')
    s = 160  # px per m
    gx, gy = 420, 760           # hjørne vegg/bakke
    topx, topy = gx, gy - 3.2 * s
    footx = gx + 2.4 * s
    fig.line(gx, gy, gx + 2.4 * s + 220, gy, fig.p['text'], 6)            # bakke
    fig.line(gx, gy, gx, topy - 60, fig.p['main'], 10)                    # vegg
    m = 30
    fig.poly([(gx + m, gy), (gx + m, gy - m), (gx, gy - m)], stroke=fig.p['text'], width=3)
    fig.line(footx, gy, topx, topy, fig.p['accent'], 12)                  # stige
    for t in range(1, 8):                                                  # trinn
        lx = footx + (topx - footx) * t / 8
        ly = gy + (topy - gy) * t / 8
        fig.line(lx - 18, ly - 12, lx + 18, ly + 12, fig.p['accent'], 5)
    fig.text((footx + topx) / 2 + 56, (gy + topy) / 2, '4,0 m', 36, anchor='start', bold=True, color=fig.p['accent'])
    dim(fig, gx, gy + 50, footx, gy + 50, '2,4 m', size=32, off=(0, 44))
    dim(fig, gx - 50, topy, gx - 50, gy, '3,2 m', size=32, off=(-66, 8))
    fig.text(1080, 400, 'høyde² = 4,0² − 2,4²', 40, anchor='start', bold=True)
    fig.text(1080, 490, 'høyde = 3,2 m', 44, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-4-2-stige-praktisk.svg')


def f_4_2_er_vinkelen_rett():
    fig = Fig('1p')
    fig.title('Er vinkelen rett? 3-4-5-metoden')
    s = 5.6  # px per cm
    gx, gy = 330, 720
    bw = 56  # bordbredde
    # to "bord" fra hjørnet
    fig.rect(gx, gy - bw, 80 * s + 160, bw, fill=fig.p['main'], opacity=0.18)
    fig.rect(gx, gy - bw, 80 * s + 160, bw, stroke=fig.p['main'], width=4)
    fig.rect(gx, gy - 60 * s - 170, bw, 60 * s + 170 - bw, fill=fig.p['main'], opacity=0.18)
    fig.rect(gx, gy - 60 * s - 170, bw, 60 * s + 170 - bw, stroke=fig.p['main'], width=4)
    # merker: 80 cm langs bunn, 60 cm opp
    P = (gx + bw / 2 + 80 * s, gy - bw / 2)
    Q = (gx + bw / 2, gy - bw / 2 - 60 * s)
    O = (gx + bw / 2, gy - bw / 2)
    for pt in (P, Q):
        fig.circle(pt[0], pt[1], 10, fill=fig.p['accent'])
    fig.line(P[0], P[1], Q[0], Q[1], fig.p['accent'], 5, dash='14 10')
    dim(fig, O[0], gy + 40, P[0], gy + 40, '80 cm', size=30, off=(0, 42))
    dim(fig, gx - 44, O[1], gx - 44, Q[1], '60 cm', size=30, off=(-64, 8))
    fig.text((P[0] + Q[0]) / 2 + 30, (P[1] + Q[1]) / 2 - 20, '100 cm', 32, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(1080, 360, '60² + 80² = 100²', 42, anchor='start', bold=True)
    fig.text(1080, 450, '3600 + 6400 = 10 000', 34, anchor='start')
    fig.text(1080, 550, 'vinkelen er 90°', 44, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-4-2-er-vinkelen-rett.svg')


def f_4_3_volumformler_plakat():
    fig = Fig('1p')
    fig.title('Volum = grunnflate · høyde')
    # prisme
    x, y, w, h = 230, 660, 360, 240
    fig.poly([(x, y), (x + w, y), (x + w + 80, y - 52), (x + 80, y - 52)],
             fill=fig.p['accent'], opacity=0.3, close=True)  # bunnflate via skygge? nei: marker grunnflate nederst
    box3d(fig, x, y, w, h, dx=80, dy=-52)
    dim(fig, x, y + 46, x + w, y + 46, 'l', size=32, off=(0, 40))
    fig.text(x + w + 64, y - 8, 'b', 32, anchor='start', bold=True, italic=True)
    dim(fig, x - 44, y - h, x - 44, y, 'h', size=32, off=(-30, 8))
    fig.text(x + (w + 80) / 2, y + 140, 'V = l · b · h', 42, bold=True)
    # sylinder
    cx, ytop, rx, ch = 1130, 300, 170, 380
    yb = ytop + ch
    fig.raw(f'<ellipse cx="{cx}" cy="{yb}" rx="{rx}" ry="{rx*0.32}" fill="{fig.p["accent"]}" opacity="0.35"/>')
    cylinder(fig, cx, ytop, rx, ch)
    fig.text(cx, ytop + ch + 150, 'V = π r² · h', 42, bold=True)
    fig.arrow(cx, ytop, cx + rx * 0.94, ytop, fig.p['accent'], 4, head=12)
    fig.text(cx + rx / 2, ytop - 20, 'r', 32, bold=True, italic=True)
    dim(fig, cx + rx + 50, ytop, cx + rx + 50, ytop + ch, 'h', size=32, off=(40, 8))
    save(fig, '1p-4-3-volumformler-plakat.svg')


def f_4_3_akvarium():
    fig = Fig('1p')
    fig.title('Akvarium')
    x, y, w, h = 420, 640, 560, 300
    box3d(fig, x, y, w, h, dx=130, dy=-80, fill='#D8E8F5')
    dim(fig, x, y + 50, x + w, y + 50, '60 cm', size=32, off=(0, 42))
    fig.text(x + w + 84, y - 14, '30 cm', 30, anchor='start', bold=True)
    dim(fig, x - 48, y - h, x - 48, y, '40 cm', size=32, off=(-76, 8))
    fig.text(W / 2, 790, 'V = 60 · 30 · 40 = 72 000 cm³', 42, bold=True)
    fig.text(W / 2, 856, '= 72 liter', 40, bold=True, color=fig.p['accent'])
    save(fig, '1p-4-3-akvarium.svg')


def f_4_3_sylindertank():
    fig = Fig('1p')
    fig.title('Sylinderformet vanntank')
    cx, ytop, rx = 560, 230, 190
    ch = int(190 * 2 * 1.2)  # h/diameter = 1,2
    # grunnflate (bunn) fremhevet
    yb = ytop + ch
    fig.raw(f'<ellipse cx="{cx}" cy="{yb}" rx="{rx}" ry="{rx*0.32}" fill="{fig.p["accent"]}" opacity="0.35"/>')
    cylinder(fig, cx, ytop, rx, ch)
    fig.arrow(cx, ytop, cx + rx * 0.94, ytop, fig.p['accent'], 4, head=12)
    fig.text(cx + rx / 2 - 10, ytop - 22, 'r = 0,5 m', 32, bold=True)
    dim(fig, cx + rx + 60, ytop, cx + rx + 60, yb, 'h = 1,2 m', size=32, off=(96, 8))
    fig.text(1230, 440, 'V = π · 0,5² · 1,2', 40, anchor='middle', bold=True)
    fig.text(1230, 510, '≈ 0,94 m³', 40, anchor='middle', bold=True)
    fig.text(1230, 600, '= 940 liter', 40, anchor='middle', bold=True, color=fig.p['accent'])
    save(fig, '1p-4-3-sylindertank.svg')


def f_4_3_kubikk_og_liter():
    fig = Fig('1p')
    fig.title('Volumenheter og liter')
    cubes = [(160, 660, 280, '1 m³ = 1000 L'),
             (760, 620, 150, '1 dm³ = 1 L'),
             (1170, 580, 60, '1 cm³ = 1 mL')]
    for x, y, s, lab in cubes:
        box3d(fig, x, y, s, s, dx=s * 0.38, dy=-s * 0.26)
        fig.text(x + s / 2 + s * 0.19, y + 64, lab, 34, bold=True)
    fig.text(905, 740, '(melkekartong)', 26, color=fig.p['extra'])
    fig.text(1230, 700, '(teskje)', 26, color=fig.p['extra'])
    # piler
    for x1, x2 in [(530, 700), (980, 1120)]:
        fig.arrow(x1, 330, x2, 330, fig.p['accent'], 5, head=16)
        fig.text((x1 + x2) / 2, 300, ': 1000', 32, bold=True, color=fig.p['accent'])
        fig.arrow(x2, 410, x1, 410, fig.p['main'], 5, head=16)
        fig.text((x1 + x2) / 2, 466, '· 1000', 32, bold=True, color=fig.p['main'])
    save(fig, '1p-4-3-kubikk-og-liter.svg')


def f_4_4_prefikstrapp():
    fig = Fig('1p')
    fig.title('Måleenhetstrappa')
    names = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']
    x0, y0 = 170, 180
    sw, sh = 130, 72  # trinnbredde/-høyde
    for i, nm in enumerate(names):
        x = x0 + i * sw
        y = y0 + i * sh
        fig.rect(x, y, sw, (7 - i) * sh, fill=fig.p['main'], opacity=0.13)
        fig.line(x, y, x + sw, y, fig.p['main'], 5)
        fig.line(x + sw, y, x + sw, y + sh, fig.p['main'], 5)
        fig.text(x + sw / 2, y + 48, nm, 32, bold=True)
    fig.line(x0, y0, x0, y0 + 7 * sh, fig.p['main'], 5)
    fig.line(x0, y0 + 7 * sh, x0 + 7 * sw, y0 + 7 * sh, fig.p['main'], 5)
    # eksempel: km -> m = tre trinn ned (hoppepiler)
    for i in range(3):
        x1 = x0 + i * sw + sw / 2
        x2 = x0 + (i + 1) * sw + sw / 2
        y1 = y0 + i * sh - 24
        y2 = y0 + (i + 1) * sh - 24
        fig.raw(f'<path d="M {x1},{y1} Q {(x1 + x2) / 2},{y1 - 60} {x2 - 8},{y2 - 10}" fill="none" stroke="{fig.p["accent"]}" stroke-width="4"/>')
        fig.arrow((x1 + x2) / 2 + 30, (y1 + y2) / 2 - 44, x2 - 4, y2 - 6, fig.p['accent'], 4, head=11)
    fig.text(1230, 200, '3,5 km = 3500 m', 38, bold=True, color=fig.p['accent'])
    fig.text(1230, 252, '(tre trinn ned)', 28, color=fig.p['accent'])
    # retningspiler til høyre for trappa
    fig.arrow(1170, 400, 1330, 510, fig.p['accent'], 5, head=16)
    fig.text(1260, 570, '· 10 per trinn', 32, bold=True, color=fig.p['accent'])
    fig.arrow(1330, 660, 1170, 770, fig.p['main'], 5, head=16)
    fig.text(1260, 830, ': 10 per trinn', 32, bold=True, color=fig.p['main'])
    save(fig, '1p-4-4-prefikstrapp.svg')


def f_4_4_arealomregning():
    fig = Fig('1p')
    fig.title('Arealenheter hopper med 100')
    s = 560
    x, y = 300, 180
    fig.rect(x, y, s, s, fill=fig.p['main'], opacity=0.08)
    c = s / 10
    fig.rect(x + 4 * c, y + 3 * c, c, c, fill=fig.p['accent'])
    for i in range(11):
        fig.line(x + i * c, y, x + i * c, y + s, fig.p['main'], 1.5)
        fig.line(x, y + i * c, x + s, y + i * c, fig.p['main'], 1.5)
    fig.rect(x, y, s, s, stroke=fig.p['main'], width=5)
    fig.text(x + 4.5 * c, y + 3 * c - 14, '1 dm²', 30, bold=True, color=fig.p['accent'])
    dim(fig, x, y - 34, x + s, y - 34, '1 m', size=30)
    dim(fig, x - 36, y, x - 36, y + s, '1 m', size=30, off=(-46, 8))
    fig.text(1180, 380, '1 m² = 10 · 10', 40, bold=True)
    fig.text(1180, 446, '= 100 dm²', 40, bold=True)
    fig.text(1180, 580, 'areal: · 100 per enhetstrinn', 32, bold=True, color=fig.p['accent'])
    save(fig, '1p-4-4-arealomregning.svg')


def f_4_4_kmh_til_ms():
    fig = Fig('1p')
    fig.title('Fra km/h til m/s')
    # fartsskilt (sirkel) og boks
    fig.circle(360, 380, 150, fill=fig.p['bg'], stroke=fig.p['warn'], width=14)
    fig.text(360, 368, '72', 60, bold=True)
    fig.text(360, 428, 'km/h', 38, bold=True)
    fig.rect(1090, 250, 320, 260, stroke=fig.p['main'], width=6, rx=18)
    fig.text(1250, 360, '20', 60, bold=True)
    fig.text(1250, 430, 'm/s', 38, bold=True)
    fig.arrow(580, 320, 1020, 320, fig.p['accent'], 6, head=18)
    fig.text(800, 288, ': 3,6', 38, bold=True, color=fig.p['accent'])
    fig.arrow(1020, 460, 580, 460, fig.p['main'], 6, head=18)
    fig.text(800, 520, '· 3,6', 38, bold=True, color=fig.p['main'])
    fig.text(W / 2, 740, '72 000 m på 3600 s = 20 m/s', 40, bold=True)
    save(fig, '1p-4-4-kmh-til-ms.svg')


def f_4_4_tidsomregning():
    fig = Fig('1p')
    fig.title('Tid følger ikke tiersystemet')
    cx, cy, r = 330, 430, 180
    fig.circle(cx, cy, r, stroke=fig.p['main'], width=8)
    for i in range(12):
        a = math.radians(i * 30)
        fig.line(cx + (r - 22) * math.sin(a), cy - (r - 22) * math.cos(a),
                 cx + (r - 6) * math.sin(a), cy - (r - 6) * math.cos(a), fig.p['main'], 4)
    fig.line(cx, cy, cx, cy - r * 0.55, fig.p['text'], 7)
    fig.line(cx, cy, cx + r * 0.72, cy, fig.p['text'], 5)
    fig.text(cx, cy + r + 64, '1 time = 60 min', 36, bold=True)
    fig.text(700, 330, '2,5 t = 2 t 50 min', 40, anchor='start', bold=True)
    fig.text(1240, 330, '✗', 52, anchor='start', bold=True, color=fig.p['warn'])
    fig.text(700, 470, '2,5 t = 2 t 30 min', 40, anchor='start', bold=True)
    fig.text(1240, 470, '✓', 52, anchor='start', bold=True, color='#3D8B37')
    fig.text(700, 610, '0,5 · 60 = 30', 36, anchor='start', color=fig.p['accent'], bold=True)
    save(fig, '1p-4-4-tidsomregning.svg')


def f_4_5_formlike_trekanter():
    fig = Fig('1p')
    fig.title('Formlike trekanter')
    u = 52
    # liten 3-4-5 og stor 6-8-10, rette vinkler nede til venstre
    def tri(x, y, b, h, color, labels):
        A = (x, y); B = (x + b, y); C = (x, y - h)
        fig.poly([A, B, C], fill=color, opacity=0.15, close=True)
        fig.poly([A, B, C], stroke=color, width=5, close=True)
        m = 22
        fig.poly([(x + m, y), (x + m, y - m), (x, y - m)], stroke=color, width=3)
        fig.text(x + b / 2, y + 40, labels[0], 32, bold=True)
        fig.text(x - 18, y - h / 2 + 10, labels[1], 32, anchor='end', bold=True)
        fig.text(x + b / 2 + 28, y - h / 2 - 26, labels[2], 32, anchor='start', bold=True)
        # vinkelmerker: i B (enkel bue) og C (dobbel bue)
        angB = math.degrees(math.atan2(h, b))
        angle_arc(fig, B[0], B[1], 46, 180 - angB, 180, fig.p['accent'], 4)
        angle_arc(fig, C[0], C[1], 46, 270, 270 + (90 - angB), fig.p['extra'], 4, double=True)
        return A, B, C
    tri(220, 660, 4 * u, 3 * u, fig.p['main'], ['4', '3', '5'])
    tri(820, 700, 8 * u, 6 * u, fig.p['main'], ['8', '6', '10'])
    fig.text(W / 2, 810, 'k = 6/3 = 2: alle sider · 2, vinklene uendret', 36, bold=True, color=fig.p['accent'])
    save(fig, '1p-4-5-formlike-trekanter.svg')


def f_4_5_skygge():
    fig = Fig('1p')
    fig.title('Hvor høyt er treet?')
    s = 56  # px per m
    ground = 740
    # person: høyde 1,8, skygge 2,0 (mot venstre? la skygge gå mot høyre)
    px = 280
    person(fig, px, ground, 1.8 * s, color=fig.p['main'])
    fig.line(px, ground, px + 2.0 * s, ground, fig.p['accent'], 10)
    fig.line(px, ground - 1.8 * s, px + 2.0 * s, ground, fig.p['extra'], 3, dash='10 9')
    fig.text(px + 1.0 * s, ground + 44, '2,0 m', 30, bold=True, color=fig.p['accent'])
    fig.text(px - 26, ground - 0.9 * s, '1,8 m', 30, anchor='end', bold=True)
    # tre: høyde 9, skygge 10
    tx0 = 660
    trunk_h = 3 * s
    fig.rect(tx0 - 14, ground - trunk_h, 28, trunk_h, fill='#8A5A36')
    fig.poly([(tx0 - 2.1 * s, ground - trunk_h + 20), (tx0 + 2.1 * s, ground - trunk_h + 20),
              (tx0, ground - 9 * s)], fill=fig.p['extra'], opacity=0.85, close=True)
    fig.line(tx0, ground, tx0 + 10 * s, ground, fig.p['accent'], 10)
    fig.line(tx0, ground - 9 * s, tx0 + 10 * s, ground, fig.p['extra'], 3, dash='10 9')
    fig.text(tx0 + 5 * s, ground + 44, '10,0 m', 30, bold=True, color=fig.p['accent'])
    fig.text(tx0 - 2.1 * s - 16, ground - 4.5 * s, 'x', 40, anchor='end', bold=True, italic=True, color=fig.p['main'])
    fig.line(200, ground, 1440, ground, fig.p['text'], 5)
    fig.text(1330, 300, 'x/10 = 1,8/2', 40, bold=True)
    fig.text(1330, 380, 'x = 9 m', 44, bold=True, color=fig.p['accent'])
    save(fig, '1p-4-5-skygge.svg')


def f_4_5_trekant_i_trekant():
    fig = Fig('1p')
    fig.title('Parallell linje gir formlikhet')
    Ax, Ay = 620, 160
    Bx, By = 320, 760
    Cx, Cy = 1000, 760
    t = 0.5  # AD/AB
    Dx, Dy = Ax + (Bx - Ax) * t, Ay + (By - Ay) * t
    Ex, Ey = Ax + (Cx - Ax) * t, Ay + (Cy - Ay) * t
    fig.poly([(Ax, Ay), (Bx, By), (Cx, Cy)], fill=fig.p['main'], opacity=0.10, close=True)
    fig.poly([(Ax, Ay), (Dx, Dy), (Ex, Ey)], fill=fig.p['accent'], opacity=0.25, close=True)
    fig.poly([(Ax, Ay), (Bx, By), (Cx, Cy)], stroke=fig.p['main'], width=5, close=True)
    fig.line(Dx, Dy, Ex, Ey, fig.p['accent'], 5)
    # parallellmerker (piler) på DE og BC
    for (x1, y1, x2, y2) in [(Dx, Dy, Ex, Ey), (Bx, By, Cx, Cy)]:
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2
        fig.poly([(mx - 14, my - 12), (mx + 10, my), (mx - 14, my + 12)], stroke=fig.p['text'], width=3)
    fig.text(Ax, Ay - 20, 'A', 34, bold=True)
    fig.text(Bx - 30, By + 14, 'B', 34, bold=True)
    fig.text(Cx + 30, Cy + 14, 'C', 34, bold=True)
    fig.text(Dx - 30, Dy + 10, 'D', 34, bold=True)
    fig.text(Ex + 30, Ey + 10, 'E', 34, bold=True)
    fig.text((Ax + Dx) / 2 - 30, (Ay + Dy) / 2, 'AD = 4', 30, anchor='end', bold=True)
    fig.text(Bx - 60, (Ay + By) / 2 + 60, 'AB = 8', 30, anchor='end', bold=True)
    fig.text((Dx + Ex) / 2, Dy - 18, 'DE = 5', 30, bold=True, color=fig.p['accent'])
    fig.text((Bx + Cx) / 2, By + 52, 'BC = x', 30, bold=True, color=fig.p['main'])
    fig.text(1260, 420, 'x = 5 · 8/4 = 10', 42, bold=True)
    save(fig, '1p-4-5-trekant-i-trekant.svg')


def f_4_5_areal_volumfaktor():
    fig = Fig('1p')
    fig.title('Hva gjør k = 2?')
    u = 96
    # lengde
    y = 260
    fig.line(160, y, 160 + u, y, fig.p['main'], 9)
    fig.line(160, y + 70, 160 + 2 * u, y + 70, fig.p['accent'], 9)
    fig.text(160 + u, y + 160, 'lengde · 2', 32, bold=True)
    # areal
    x = 620
    fig.rect(x, y - 40, u, u, fill=fig.p['main'], opacity=0.3)
    fig.rect(x, y - 40, u, u, stroke=fig.p['main'], width=4)
    x2 = x + u + 60
    fig.rect(x2, y - 40, 2 * u, 2 * u, fill=fig.p['accent'], opacity=0.25)
    for i in range(3):
        fig.line(x2 + i * u, y - 40, x2 + i * u, y - 40 + 2 * u, fig.p['accent'], 3)
        fig.line(x2, y - 40 + i * u, x2 + 2 * u, y - 40 + i * u, fig.p['accent'], 3)
    fig.text(x + (3 * u + 60) / 2, y + 2 * u + 20, 'areal · 4', 32, bold=True)
    # volum
    x = 1130
    box3d(fig, x, y + u - 40, u, u, dx=u * 0.4, dy=-u * 0.27)
    x2 = x + u + 110
    for k in (1, 0):
        for j in (1, 0):
            for i in range(2):
                box3d(fig, x2 + i * u * 0.7 + k * u * 0.28, y + 2 * u - 44 - j * u * 0.7 - k * u * 0.19,
                      u * 0.7, u * 0.7, dx=u * 0.28, dy=-u * 0.19, fill='#EDF2F8', fill_top='#F7FAFC')
    fig.text(x + 220, y + 2 * u + 20, 'volum · 8', 32, bold=True)
    fig.text(W / 2, 760, 'k for lengder, k² for areal, k³ for volum', 40, bold=True, color=fig.p['accent'])
    save(fig, '1p-4-5-areal-volumfaktor.svg')


def f_4_5_kart_malestokk():
    fig = Fig('1p')
    fig.title('Målestokk 1 : 25 000')
    mx, my, mw, mh = 200, 140, 800, 560
    fig.rect(mx, my, mw, mh, stroke=fig.p['main'], width=5, rx=10, fill='#F4F8FB')
    # høydekurver
    for i, (cx, cy, r) in enumerate([(mx + 240, my + 360, 150), (mx + 240, my + 360, 100),
                                     (mx + 240, my + 360, 55)]):
        fig.raw(f'<ellipse cx="{cx}" cy="{cy}" rx="{r * 1.35:.0f}" ry="{r:.0f}" fill="none" stroke="#B9A37E" stroke-width="2.5"/>')
    # sti
    fig.raw(f'<path d="M {mx + 60},{my + 120} Q {mx + 340},{my + 60} {mx + 520},{my + 200} T {mx + 740},{my + 430}" fill="none" stroke="{fig.p["accent"]}" stroke-width="4" stroke-dasharray="16 12"/>')
    # hytter
    h1 = (mx + 170, my + 130)
    h2 = (mx + 660, my + 440)
    for hx, hy in (h1, h2):
        fig.rect(hx - 22, hy - 22, 44, 44, fill=fig.p['main'])
        fig.poly([(hx - 30, hy - 22), (hx + 30, hy - 22), (hx, hy - 52)], fill=fig.p['accent'], close=True)
    # målelinje
    fig.line(h1[0], h1[1], h2[0], h2[1], fig.p['text'], 4, dash='10 9')
    fig.text((h1[0] + h2[0]) / 2 + 40, (h1[1] + h2[1]) / 2 - 20, '6 cm', 38, anchor='start', bold=True)
    fig.text(1070, 380, 'på kartet: 6 cm', 34, anchor='start', bold=True)
    fig.text(1070, 460, '6 cm · 25 000', 36, anchor='start', bold=True)
    fig.text(1070, 530, '= 150 000 cm', 36, anchor='start', bold=True)
    fig.text(1070, 610, '= 1,5 km i terrenget', 38, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-4-5-kart-malestokk.svg')


# ================================================================ KAPITTEL 5

def f_5_1_tre_sentralmaal():
    fig = Fig('1p')
    fig.title('Datasettet 2, 3, 3, 5, 7')
    for x in (60, 580, 1100):
        fig.rect(x, 130, 440, 660, stroke=fig.p['grid'], width=3, rx=16)
    # --- gjennomsnitt: vippehuske i balanse på 4
    x0 = 60
    fig.text(x0 + 220, 200, 'Gjennomsnitt = 4', 36, bold=True, color=fig.p['main'])
    beam_y = 560
    bx0, bx1 = x0 + 50, x0 + 390
    sx = (bx1 - bx0) / 6  # verdier 1..7
    vx = lambda v: bx0 + (v - 1) * sx
    fig.poly([(vx(4) - 34, 660), (vx(4) + 34, 660), (vx(4), beam_y + 6)], fill=fig.p['accent'], close=True)
    fig.line(bx0, beam_y, bx1, beam_y, fig.p['main'], 8)
    # klosser, stable 3-ene
    done = {}
    for v in (2, 3, 3, 5, 7):
        lvl = done.get(v, 0)
        done[v] = lvl + 1
        fig.rect(vx(v) - 22, beam_y - 52 - lvl * 52, 44, 44, fill=fig.p['main'], rx=6)
        fig.text(vx(v), beam_y - 52 - lvl * 52 + 32, str(v), 26, color='#FFFFFF', bold=True)
    for v in (1, 4, 7):
        fig.text(vx(v), beam_y + 140, str(v), 28)
    # --- median
    x0 = 580
    fig.text(x0 + 220, 200, 'Median = 3', 36, bold=True, color=fig.p['accent'])
    vals = ['2', '3', '3', '5', '7']
    for i, v in enumerate(vals):
        cx = x0 + 60 + i * 80
        fig.text(cx, 480, v, 40, bold=True)
    fig.circle(x0 + 60 + 2 * 80, 466, 36, stroke=fig.p['accent'], width=5)
    fig.text(x0 + 220, 590, 'midterste verdi', 28, color=fig.p['accent'])
    fig.text(x0 + 220, 640, '(sortert rekkefølge)', 26)
    # --- typetall
    x0 = 1100
    fig.text(x0 + 220, 200, 'Typetall = 3', 36, bold=True, color=fig.p['extra'])
    for i, v in enumerate(vals):
        cx = x0 + 60 + i * 80
        hot = v == '3'
        fig.text(cx, 480, v, 40, bold=True, color=fig.p['accent'] if hot else fig.p['text'])
        if hot:
            fig.rect(cx - 32, 434, 64, 64, stroke=fig.p['accent'], width=4, rx=10)
    fig.text(x0 + 220, 590, 'verdien som', 28, color=fig.p['accent'])
    fig.text(x0 + 220, 632, 'forekommer oftest', 28, color=fig.p['accent'])
    save(fig, '1p-5-1-tre-sentralmaal.svg')


def f_5_1_median_partall():
    fig = Fig('1p')
    fig.title('Median når antallet er partall')
    vals = ['4', '6', '7', '9', '12', '14']
    for i, v in enumerate(vals):
        cx = 330 + i * 190
        fig.text(cx, 350, v, 52, bold=True)
    for i in (2, 3):
        fig.circle(330 + i * 190, 333, 56, stroke=fig.p['accent'], width=6)
    midx = 330 + 2.5 * 190
    fig.arrow(midx, 420, midx, 540, fig.p['accent'], 5, head=16)
    fig.text(W / 2, 620, 'median = (7 + 9)/2 = 8', 48, bold=True, color=fig.p['accent'])
    fig.text(W / 2, 740, 'to midterste verdier: ta gjennomsnittet av dem', 32)
    save(fig, '1p-5-1-median-partall.svg')


def f_5_2_spredning():
    fig = Fig('1p')
    fig.title('Likt gjennomsnitt — ulik spredning')
    def dotplot(y0, data, label, range_txt):
        x0, x1 = 280, 1180
        sx = (x1 - x0) / 5
        vx = lambda v: x0 + (v - 1) * sx
        fig.arrow(x0 - 30, y0, x1 + 50, y0, fig.p['text'], 4)
        for t in range(1, 7):
            fig.line(vx(t), y0 - 10, vx(t), y0 + 10, fig.p['text'], 3)
            fig.text(vx(t), y0 + 46, str(t), 28)
        counts = {}
        for v in data:
            lvl = counts.get(v, 0)
            counts[v] = lvl + 1
            fig.circle(vx(v), y0 - 28 - lvl * 42, 16, fill=fig.p['main'])
        fig.line(vx(4), y0 - 190, vx(4), y0 + 14, fig.p['accent'], 4, dash='10 8')
        fig.text(vx(4), y0 - 208, 'gjennomsnitt 4', 28, color=fig.p['accent'], bold=True)
        fig.text(1300, y0 - 60, label, 32, anchor='start', bold=True)
        fig.text(1300, y0 - 18, range_txt, 28, anchor='start')
    dotplot(360, [3, 4, 4, 4, 5], 'Klasse A:', 'liten spredning')
    dotplot(730, [1, 2, 4, 5, 6, 6], 'Klasse B:', 'stor spredning')
    fig.text(W / 2, 850, 'variasjonsbredde: A = 5 − 3 = 2,  B = 6 − 1 = 5', 34, bold=True)
    save(fig, '1p-5-2-spredning.svg')


def f_5_2_standardavvik():
    fig = Fig('1p')
    fig.title('Standardavvik = typisk avstand fra gjennomsnittet')
    base = 720
    cx = W / 2
    gauss(fig, cx, base, 90, 460, fig.p['main'], width=6, half_w=560)
    gauss(fig, cx, base, 230, 200, fig.p['accent'], width=6, half_w=560)
    fig.line(180, base, 1420, base, fig.p['text'], 4)
    fig.line(cx, base, cx, base - 500, fig.p['text'], 4, dash='12 10')
    fig.text(cx, base + 48, 'gjennomsnitt', 32, bold=True)
    fig.text(cx + 130, 300, 'lite standardavvik', 34, anchor='start', bold=True, color=fig.p['main'])
    fig.text(cx + 320, 500, 'stort standardavvik', 34, anchor='start', bold=True, color=fig.p['accent'])
    save(fig, '1p-5-2-standardavvik.svg')


def f_5_3_diagramvelger():
    fig = Fig('1p')
    fig.title('Velg riktig diagram')
    panels = [(70, 'søylediagram', 'sammenligne kategorier'),
              (440, 'linjediagram', 'utvikling over tid'),
              (810, 'sektordiagram', 'deler av en helhet'),
              (1180, 'histogram', 'gruppert tallmateriale')]
    py, ph, pw = 150, 420, 350
    for x, name, use in panels:
        fig.rect(x, py, pw, ph, stroke=fig.p['grid'], width=3, rx=14)
        fig.text(x + pw / 2, py + ph + 60, name, 32, bold=True)
        fig.text(x + pw / 2, py + ph + 104, use, 27, color=fig.p['accent'])
    # søyler
    x = 70
    bx0, by1 = x + 60, py + ph - 60
    for i, v in enumerate([140, 220, 100, 180]):
        fig.rect(bx0 + i * 62, by1 - v, 44, v, fill=fig.p['main'])
    fig.line(bx0 - 14, by1, bx0 + 250, by1, fig.p['text'], 3)
    fig.line(bx0 - 14, by1, bx0 - 14, py + 50, fig.p['text'], 3)
    # linje
    x = 440
    bx0, by1 = x + 50, py + ph - 60
    pts = [(0, 60), (60, 130), (120, 100), (180, 210), (240, 250)]
    fig.poly([(bx0 + dx, by1 - dy) for dx, dy in pts], stroke=fig.p['accent'], width=5)
    for dx, dy in pts:
        fig.circle(bx0 + dx, by1 - dy, 8, fill=fig.p['accent'])
    fig.line(bx0 - 14, by1, bx0 + 264, by1, fig.p['text'], 3)
    fig.line(bx0 - 14, by1, bx0 - 14, py + 50, fig.p['text'], 3)
    # sektor
    fig.pie(810 + pw / 2, py + ph / 2, 140,
            [(0.45, fig.p['main'], None), (0.3, fig.p['accent'], None), (0.25, fig.p['extra'], None)])
    # histogram (sammenhengende stolper)
    x = 1180
    bx0, by1 = x + 56, py + ph - 60
    for i, v in enumerate([80, 170, 250, 190, 90]):
        fig.rect(bx0 + i * 50, by1 - v, 50, v, fill=fig.p['main'], opacity=0.8, stroke=fig.p['bg'], width=2)
    fig.line(bx0 - 14, by1, bx0 + 270, by1, fig.p['text'], 3)
    fig.line(bx0 - 14, by1, bx0 - 14, py + 50, fig.p['text'], 3)
    save(fig, '1p-5-3-diagramvelger.svg')


def f_5_3_sektordiagram_grader():
    fig = Fig('1p')
    fig.title('Fra prosent til grader')
    rows = [('Buss', '50 %', '180°', fig.p['main']),
            ('Sykkel', '25 %', '90°', fig.p['accent']),
            ('Gange', '25 %', '90°', fig.p['extra'])]
    ty0 = 240
    for i, (nm, pct, deg, c) in enumerate(rows):
        y = ty0 + i * 110
        fig.rect(150, y - 38, 52, 52, fill=c, rx=8)
        fig.text(240, y, nm, 34, anchor='start', bold=True)
        fig.text(450, y, pct, 34, anchor='start')
        fig.text(590, y, '→', 34)
        fig.text(660, y, deg, 34, anchor='start', bold=True, color=c)
    fig.text(150, 640, 'grader = prosent · 3,6', 36, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(150, 706, 'f.eks. 50 · 3,6 = 180', 30, anchor='start')
    fig.pie(1130, 470, 290, [(0.5, fig.p['main'], 'Buss 180°'),
                             (0.25, fig.p['accent'], 'Sykkel 90°'),
                             (0.25, fig.p['extra'], 'Gange 90°')])
    save(fig, '1p-5-3-sektordiagram-grader.svg')


def f_5_4_kuttet_akse():
    fig = Fig('1p')
    fig.title('Samme tall — to historier')
    # venstre: akse fra 40
    def axes(x0, y0, w, h, yticks, vmin, vmax, vals, lab):
        sx = w / 2
        for t in yticks:
            yy = y0 + h - (t - vmin) / (vmax - vmin) * h
            fig.line(x0, yy, x0 + w, yy, fig.p['grid'], 2)
            fig.text(x0 - 14, yy + 9, str(t), 26, anchor='end')
        for i, v in enumerate(vals):
            bw = 130
            bx = x0 + 70 + i * (bw + 110)
            bh = (v - vmin) / (vmax - vmin) * h
            fig.rect(bx, y0 + h - bh, bw, bh, fill=[fig.p['main'], fig.p['accent']][i])
            fig.text(bx + bw / 2, y0 + h + 40, ['Parti A', 'Parti B'][i], 28)
            fig.text(bx + bw / 2, y0 + h - bh - 14, f'{v} %', 28, bold=True)
        fig.line(x0, y0 + h, x0 + w, y0 + h, fig.p['text'], 3)
        fig.line(x0, y0 + h, x0, y0 - 10, fig.p['text'], 3)
        fig.text(x0 + w / 2, y0 + h + 110, lab, 30, bold=True)
    axes(180, 200, 520, 420, [40, 41, 42, 43, 44], 40, 44, [41, 43],
         'misvisende: aksen starter på 40')
    axes(920, 200, 520, 420, [0, 10, 20, 30, 40], 0, 45, [41, 43],
         'riktig: aksen starter på 0')
    # varselsymbol
    fig.poly([(150, 180), (210, 180), (180, 128)], stroke=fig.p['warn'], width=5, close=True)
    fig.text(180, 172, '!', 34, bold=True, color=fig.p['warn'])
    save(fig, '1p-5-4-kuttet-akse.svg')


def f_5_4_snitt_vs_median_lonn():
    fig = Fig('1p')
    fig.title('Én ekstremverdi drar gjennomsnittet opp')
    x0, y0, w, h = 240, 160, 800, 480
    vals = [400, 400, 400, 400, 1600]
    labs = ['ansatt', 'ansatt', 'ansatt', 'ansatt', 'direktør']
    vmax = 1700
    bw = 110
    for i, v in enumerate(vals):
        bx = x0 + i * (bw + 50)
        bh = v / vmax * h
        c = fig.p['main'] if i < 4 else fig.p['accent']
        fig.rect(bx, y0 + h - bh, bw, bh, fill=c)
        fig.text(bx + bw / 2, y0 + h + 40, labs[i], 26)
        fig.text(bx + bw / 2, y0 + h - bh - 14, '400 000' if i < 4 else '1 600 000', 24, bold=True)
    fig.line(x0 - 20, y0 + h, x0 + 5 * (bw + 50), y0 + h, fig.p['text'], 3)
    fig.text(1180, 350, 'gjennomsnitt:', 32, anchor='start')
    fig.text(1180, 396, '640 000 kr', 36, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(1180, 490, 'median:', 32, anchor='start')
    fig.text(1180, 536, '400 000 kr', 36, anchor='start', bold=True, color=fig.p['main'])
    save(fig, '1p-5-4-snitt-vs-median-lonn.svg')


# ================================================================ KAPITTEL 6

def f_6_1_terning_utfallsrom():
    fig = Fig('1p')
    fig.title('Utfallsrommet for ett terningkast')
    s = 150
    y = 330
    for i in range(6):
        cx = 220 + i * (s + 80)
        dice(fig, cx, y, s, i + 1)
        if (i + 1) % 2 == 0:
            fig.circle(cx, y, s * 0.7, stroke=fig.p['accent'], width=6)
    fig.text(W / 2, 540, '6 like sannsynlige utfall — partallene er ringet inn', 32)
    fig.text(W / 2, 660, 'P(partall) = 3/6 = 1/2', 46, bold=True, color=fig.p['accent'])
    fig.text(W / 2, 760, 'gunstige delt på mulige', 32)
    save(fig, '1p-6-1-terning-utfallsrom.svg')


def f_6_1_to_terninger():
    fig = Fig('1p')
    fig.title('To terninger: 36 utfall')
    c = 84
    x0, y0 = 330, 200
    fig.text(x0 - 130, y0 + 3 * c + 10, 'terning 1', 28, anchor='end')
    fig.text(x0 + 3 * c, y0 - 56, 'terning 2', 28)
    for i in range(6):
        fig.text(x0 - 30, y0 + i * c + c / 2 + 10, str(i + 1), 30, anchor='end', bold=True)
        fig.text(x0 + i * c + c / 2, y0 - 16, str(i + 1), 30, bold=True)
    for r in range(6):
        for k in range(6):
            x, y = x0 + k * c, y0 + r * c
            hot = (r + 1) + (k + 1) == 7
            fig.rect(x, y, c, c, fill=fig.p['accent'] if hot else '#F0F2F5',
                     stroke=fig.p['grid'], width=2)
            if hot:
                fig.text(x + c / 2, y + c / 2 + 11, '7', 32, color='#FFFFFF', bold=True)
    fig.rect(x0, y0, 6 * c, 6 * c, stroke=fig.p['main'], width=4)
    fig.text(1190, 420, 'P(sum 7) = 6/36 = 1/6', 40, bold=True, color=fig.p['accent'])
    fig.text(1190, 500, '6 av 36 ruter gir sum 7', 30)
    save(fig, '1p-6-1-to-terninger.svg')


def f_6_2_valgtre_klesvalg():
    fig = Fig('1p')
    fig.title('Valgtre: 3 gensere · 2 bukser')
    rooty = 170
    g_y, b_y = 400, 640
    g_cols = [fig.p['main'], fig.p['accent'], fig.p['extra']]
    b_cols = ['#555F6E', '#9AA5B1']
    gx = [380, 800, 1220]
    fig.circle(W / 2, rooty, 16, fill=fig.p['text'])
    for i, x in enumerate(gx):
        fig.line(W / 2, rooty + 14, x, g_y - 46, fig.p['text'], 3.5)
        fig.rect(x - 110, g_y - 46, 220, 76, fill=g_cols[i], rx=12)
        fig.text(x, g_y + 2, f'genser {"ABC"[i]}', 28, color='#FFFFFF', bold=True)
        for j in range(2):
            bx = x - 110 + j * 220
            fig.line(x, g_y + 32, bx, b_y - 40, fig.p['text'], 3)
            fig.rect(bx - 95, b_y - 40, 190, 70, fill=fig.p['bg'], stroke=b_cols[j], width=5, rx=12)
            fig.text(bx, b_y + 4, f'bukse {j + 1}', 27, bold=True)
    fig.text(W / 2, 800, '3 · 2 = 6 mulige antrekk', 44, bold=True, color=fig.p['accent'])
    save(fig, '1p-6-2-valgtre-klesvalg.svg')


def f_6_2_kodelas():
    fig = Fig('1p')
    fig.title('Firesifret kode')
    s = 190
    y = 280
    for i in range(4):
        x = 290 + i * (s + 90)
        fig.rect(x, y, s, s, stroke=fig.p['main'], width=6, rx=18)
        fig.text(x + s / 2, y + s / 2 - 6, '0–9', 44, bold=True)
        fig.text(x + s / 2, y + s / 2 + 56, '10 valg', 30, color=fig.p['accent'], bold=True)
        if i < 3:
            fig.text(x + s + 45, y + s / 2 + 16, '·', 54, bold=True)
    fig.text(W / 2, 640, '10 · 10 · 10 · 10 = 10 000 mulige koder', 44, bold=True)
    fig.text(W / 2, 750, 'gang antall valg i hvert trinn', 32, color=fig.p['accent'])
    save(fig, '1p-6-2-kodelas.svg')


def f_6_3_store_talls_lov():
    fig = Fig('1p')
    fig.title('Store talls lov: andel kron nærmer seg 0,5')
    rng = lcg(7)
    heads = 0
    pts = []
    for n in range(1, 401):
        if next(rng) < 0.5:
            heads += 1
        pts.append((n, heads / n))
    tx, ty = fig.coords(0, 400, 0, 1, box=(240, 150, 1380, 760),
                        xticks=[100, 200, 300, 400], yticks=[0.25, 0.5, 0.75, 1],
                        xlabel='Antall kast', ylabel='Andel kron')
    fig.line(tx(0), ty(0.5), tx(400), ty(0.5), fig.p['accent'], 4, dash='14 10')
    fig.text(tx(330), ty(0.5) - 20, 'teoretisk: 0,5', 32, bold=True, color=fig.p['accent'])
    fig.poly([(tx(n), ty(a)) for n, a in pts], stroke=fig.p['main'], width=4)
    # mynt
    fig.circle(1300, 260, 56, fill='#F2C94C', stroke='#B8860B', width=4)
    fig.text(1300, 274, 'K', 40, bold=True, color='#7A5800')
    save(fig, '1p-6-3-store-talls-lov.svg')


def f_6_3_minst_en_sekser():
    fig = Fig('1p')
    fig.title('Minst én sekser på fire kast')
    s = 110
    for i, n in enumerate([6, 3, 2, 5]):
        dice(fig, 560 + i * (s + 50), 220, s, n)
    x, y, w, h = 240, 380, 1120, 130
    w1 = w * 0.48
    fig.rect(x, y, w1, h, fill=fig.p['main'], opacity=0.35)
    fig.rect(x + w1, y, w - w1, h, fill=fig.p['accent'])
    fig.rect(x, y, w, h, stroke=fig.p['text'], width=4)
    fig.text(x + w / 2, y - 28, 'alle muligheter = 1', 32, bold=True)
    fig.text(x + w1 / 2, y + h + 56, 'ingen seksere: (5/6)⁴ ≈ 0,48', 32, bold=True, color=fig.p['main'])
    fig.text(x + w1 + (w - w1) / 2, y + h / 2 + 12, '1 − 0,48 = 0,52', 32, color='#FFFFFF', bold=True)
    fig.text(x + w1 + (w - w1) / 2, y + h + 56, 'minst én sekser: 0,52', 32, bold=True, color=fig.p['accent'])
    fig.text(W / 2, 730, 'det motsatte av «minst én» er «ingen»', 36, bold=True)
    save(fig, '1p-6-3-minst-en-sekser.svg')


# ================================================================ KAPITTEL 7

def f_7_1_taxipris():
    fig = Fig('1p')
    fig.title('Taxipris: P(x) = 15x + 50')
    f = lambda x: 15 * x + 50
    tx, ty = fig.coords(0, 20, 0, 400, box=(240, 150, 1380, 760),
                        xticks=[5, 10, 15, 20], yticks=[100, 200, 300, 400],
                        xlabel='Kjørelengde (km)', ylabel='Pris (kr)')
    fig.plot(f, color=fig.p['main'], width=6)
    fig.circle(tx(0), ty(50), 22, stroke=fig.p['accent'], width=5)
    fig.text(tx(0.5), ty(50) - 36, 'startpris 50 kr', 32, anchor='start', bold=True, color=fig.p['accent'])
    # trappetrinn (8,170)->(12,170)->(12,230)
    fig.line(tx(8), ty(f(8)), tx(12), ty(f(8)), fig.p['accent'], 4, dash='10 8')
    fig.line(tx(12), ty(f(8)), tx(12), ty(f(12)), fig.p['accent'], 4, dash='10 8')
    fig.text(tx(12.4), ty(200) + 10, '15 kr per km', 32, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(tx(15), ty(f(15)) - 34, 'P(x) = 15x + 50', 36, bold=True, color=fig.p['main'])
    save(fig, '1p-7-1-taxipris.svg')


def f_7_2_regneark_formel():
    fig = Fig('1p')
    fig.title('Regneark: formel i celle D2')
    # formellinje
    fx, fy = 240, 130
    fig.rect(fx, fy, 180, 64, stroke=fig.p['grid'], width=3)
    fig.text(fx + 90, fy + 42, 'D2', 30, bold=True)
    fig.rect(fx + 180, fy, 880, 64, stroke=fig.p['grid'], width=3)
    fig.text(fx + 210, fy + 42, '=B2*C2', 32, anchor='start', bold=True, color=fig.p['accent'])
    fig.text(fx + 1090, fy + 42, '← timer · timelønn', 30, anchor='start', color=fig.p['accent'])
    # rutenett
    cols = ['', 'A', 'B', 'C', 'D']
    colw = [90, 280, 220, 260, 260]
    rows = [['1', 'Navn', 'Timer', 'Timelønn', 'Lønn'],
            ['2', 'Ida', '20', '185', '3700'],
            ['3', 'Jon', '15', '185', '2775'],
            ['4', 'Eva', '12', '190', '2280']]
    x0, y0, rh = 240, 240, 86
    # kolonnehoder
    cx = x0
    for j, cname in enumerate(cols):
        fig.rect(cx, y0, colw[j], rh * 0.7, fill='#E8EDF3', stroke=fig.p['grid'], width=2)
        fig.text(cx + colw[j] / 2, y0 + rh * 0.7 / 2 + 10, cname, 28, bold=True)
        cx += colw[j]
    for r, row in enumerate(rows):
        y = y0 + rh * 0.7 + r * rh
        cx = x0
        for j, val in enumerate(row):
            head = j == 0 or r == 0
            fig.rect(cx, y, colw[j], rh, fill='#E8EDF3' if head else fig.p['bg'],
                     stroke=fig.p['grid'], width=2)
            fig.text(cx + colw[j] / 2, y + rh / 2 + 10, val, 28, bold=head)
            cx += colw[j]
    # marker D2 (r=1, j=4)
    dx0 = x0 + sum(colw[:4])
    dy0 = y0 + rh * 0.7 + 1 * rh
    fig.rect(dx0, dy0, colw[4], rh, stroke=fig.p['main'], width=6)
    fig.rect(dx0 + colw[4] - 12, dy0 + rh - 12, 14, 14, fill=fig.p['main'])
    fig.arrow(dx0 + colw[4] + 60, dy0 + rh + 130, dx0 + colw[4] + 2, dy0 + rh + 2, fig.p['accent'], 4)
    fig.text(dx0 + colw[4] + 70, dy0 + rh + 170, 'dra for å kopiere', 30, anchor='end', color=fig.p['accent'], bold=True)
    save(fig, '1p-7-2-regneark-formel.svg')


REG_PTS = [(1, 28), (2, 30), (2.8, 45), (3.6, 38), (4.5, 55),
           (5.5, 60), (6.4, 58), (7.2, 75), (8.2, 72), (9, 88)]


def f_7_3_spredningsdiagram():
    fig = Fig('1p')
    fig.title('Lineær regresjon')
    # minste kvadraters metode
    n = len(REG_PTS)
    sx = sum(p[0] for p in REG_PTS); sy = sum(p[1] for p in REG_PTS)
    sxy = sum(p[0] * p[1] for p in REG_PTS); sxx = sum(p[0] ** 2 for p in REG_PTS)
    a = (n * sxy - sx * sy) / (n * sxx - sx * sx)
    b = (sy - a * sx) / n
    tx, ty = fig.coords(0, 10, 0, 100, box=(240, 150, 1380, 760),
                        xticks=[2, 4, 6, 8, 10], yticks=[20, 40, 60, 80, 100],
                        xlabel='Treningstimer per uke', ylabel='Poeng på test')
    for px, py in REG_PTS:
        fig.circle(tx(px), ty(py), 11, fill=fig.p['main'])
    fig.plot(lambda x: a * x + b, xmin=0.3, xmax=9.7, color=fig.p['accent'], width=5)
    fig.text(tx(4.6), ty(a * 4.6 + b) + 60, 'regresjonslinje: ligger så nær', 30, anchor='start', color=fig.p['accent'], bold=True)
    fig.text(tx(4.6), ty(a * 4.6 + b) + 100, 'punktene som mulig', 30, anchor='start', color=fig.p['accent'], bold=True)
    save(fig, '1p-7-3-spredningsdiagram.svg')


def f_7_3_korrelasjon():
    fig = Fig('1p')
    fig.title('Korrelasjon')
    rng = lcg(11)
    panels = [(90, 'r ≈ 1: sterk positiv', lambda u, v: (u, 0.15 + 0.7 * u + 0.12 * (v - 0.5))),
              (590, 'r ≈ 0: ingen samvariasjon', lambda u, v: (u, v)),
              (1090, 'r ≈ −1: sterk negativ', lambda u, v: (u, 0.85 - 0.7 * u + 0.12 * (v - 0.5)))]
    pw, ph, py = 420, 420, 180
    for x, lab, f in panels:
        fig.line(x, py + ph, x + pw, py + ph, fig.p['text'], 3)
        fig.line(x, py + ph, x, py, fig.p['text'], 3)
        for _ in range(14):
            u, v = next(rng), next(rng)
            qx, qy = f(0.08 + 0.84 * u, v)
            fig.circle(x + 24 + qx * (pw - 48), py + ph - 24 - qy * (ph - 48), 9, fill=fig.p['main'])
        fig.text(x + pw / 2, py + ph + 70, lab, 30, bold=True)
    save(fig, '1p-7-3-korrelasjon.svg')


def f_7_4_velge_modell():
    fig = Fig('1p')
    fig.title('Hvilken modell passer? Bakterievekst')
    rng = lcg(23)
    data = [(x, 20 * 1.45 ** x * (0.92 + 0.16 * next(rng))) for x in range(9)]
    tx, ty = fig.coords(0, 8.6, 0, 450, box=(240, 150, 1380, 760),
                        xticks=[2, 4, 6, 8], yticks=[100, 200, 300, 400],
                        xlabel='Timer', ylabel='Antall bakterier')
    # lineær "fit" som bommer i endene
    fig.plot(lambda x: -60 + 50 * x, xmin=1.2, xmax=8.55, color=fig.p['main'], width=5, dash='16 12')
    fig.plot(lambda x: 20 * 1.45 ** x, xmin=0, xmax=8.4, color=fig.p['accent'], width=5)
    for px, py in data:
        fig.circle(tx(px), ty(py), 11, fill=fig.p['text'])
    fig.text(tx(7.6), ty(-60 + 50 * 7.6) + 56, 'lineær: passer dårlig', 32, anchor='end', bold=True, color=fig.p['main'])
    fig.text(tx(6.1), ty(20 * 1.45 ** 6.1) - 30, 'eksponentiell: passer godt', 32, anchor='end', bold=True, color=fig.p['accent'])
    save(fig, '1p-7-4-velge-modell.svg')


def f_7_5_funksjonsdrofting():
    fig = Fig('1p')
    f = lambda x: x ** 3 - 6 * x ** 2 + 9 * x - 2
    r1, r2, r3 = 2 - math.sqrt(3), 2.0, 2 + math.sqrt(3)
    tx, ty = fig.coords(-0.6, 5, -4.4, 4.6, box=(260, 110, 1340, 700),
                        xticks=[1, 2, 3, 4], yticks=[-4, -2, 2, 4])
    fig.plot(f, xmin=-0.35, xmax=4.55, color=fig.p['main'], width=6)
    fig.circle(tx(1), ty(2), 18, stroke=fig.p['accent'], width=5)
    fig.text(tx(1), ty(2) - 38, 'toppunkt', 30, bold=True, color=fig.p['accent'])
    fig.circle(tx(3), ty(-2), 18, stroke=fig.p['accent'], width=5)
    fig.text(tx(3) + 30, ty(-2) + 12, 'bunnpunkt', 30, anchor='start', bold=True, color=fig.p['accent'])
    for r in (r1, r2, r3):
        d = 13
        fig.line(tx(r) - d, ty(0) - d, tx(r) + d, ty(0) + d, fig.p['warn'], 5)
        fig.line(tx(r) - d, ty(0) + d, tx(r) + d, ty(0) - d, fig.p['warn'], 5)
    fig.text(tx(r3) + 26, ty(0) - 22, 'nullpunkter', 30, anchor='start', bold=True, color=fig.p['warn'])
    # intervallstaver under x-aksen
    bary = 780
    grow = fig.p['extra']
    for (x1, x2, c, lab) in [(-0.35, 1, grow, 'vokser'), (1, 3, fig.p['accent'], 'avtar'),
                             (3, 4.55, grow, 'vokser')]:
        fig.line(tx(x1) + 8, bary, tx(x2) - 8, bary, c, 14)
        fig.text((tx(x1) + tx(x2)) / 2, bary + 50, lab, 30, bold=True, color=c)
    save(fig, '1p-7-5-funksjonsdrofting.svg')


def f_7_5_df_vf():
    fig = Fig('1p')
    fig.title('Definisjonsmengde og verdimengde')
    f = lambda x: 4 - 2 * math.cos(math.pi * x / 4)
    tx, ty = fig.coords(-1, 9, -1, 7.5, box=(300, 140, 1340, 760),
                        xticks=[2, 4, 6, 8], yticks=[2, 4, 6])
    fig.plot(f, xmin=0, xmax=8, color=fig.p['main'], width=6)
    for px in (0, 8):
        fig.circle(tx(px), ty(f(px)), 11, fill=fig.p['main'])
    # Df-stav langs x-aksen
    fig.line(tx(0), ty(0) + 64, tx(8), ty(0) + 64, fig.p['accent'], 12)
    fig.text(tx(4), ty(0) + 118, 'Df = [0, 8]', 34, bold=True, color=fig.p['accent'])
    # Vf-stav langs y-aksen
    fig.line(tx(0) - 40, ty(2), tx(0) - 40, ty(6), fig.p['main'], 12)
    fig.text(tx(0) - 64, ty(4.2), 'Vf = [2, 6]', 34, anchor='end', bold=True, color=fig.p['main'])
    fig.line(tx(0), ty(6), tx(4), ty(6), fig.p['main'], 3, dash='9 9')
    fig.line(tx(4), ty(6), tx(4), ty(0), fig.p['grid'], 3, dash='9 9')
    fig.line(tx(0), ty(2), tx(8), ty(2), fig.p['main'], 3, dash='9 9')
    save(fig, '1p-7-5-df-vf.svg')


# ================================================================ KAPITTEL 8

def f_8_1_brutto_netto():
    fig = Fig('1p')
    fig.title('Fra brutto til netto')
    x, y, w, h = 200, 300, 1200, 150
    fig.text(x + w / 2, y - 70, 'bruttolønn 35 000 kr', 38, bold=True)
    dim(fig, x, y - 36, x + w, y - 36, '', width=2.5)
    w_skatt = w * 0.25
    fig.rect(x, y, w_skatt, h, fill=fig.p['accent'])
    fig.rect(x + w_skatt, y, w - w_skatt, h, fill=fig.p['main'])
    fig.text(x + w_skatt / 2, y + h + 56, 'skatt 25 %', 32, bold=True, color=fig.p['accent'])
    fig.text(x + w_skatt / 2, y + h + 100, '= 8 750 kr', 32, bold=True, color=fig.p['accent'])
    fig.text(x + w_skatt + (w - w_skatt) / 2, y + h / 2 + 12, 'nettolønn 26 250 kr', 36, color='#FFFFFF', bold=True)
    fig.text(W / 2, 720, 'netto = brutto − skatt', 42, bold=True)
    save(fig, '1p-8-1-brutto-netto.svg')


def f_8_2_budsjett():
    fig = Fig('1p')
    fig.title('Månedsbudsjett')
    rows = [('Inntekt: lønn', '6 000 kr', fig.p['text'], True),
            ('Mat', '1 500', fig.p['main'], False),
            ('Transport', '800', fig.p['accent'], False),
            ('Fritid', '1 700', fig.p['extra'], False),
            ('Sparing', '2 000', '#5E81A6', False),
            ('Sum utgifter', '6 000 kr', fig.p['text'], True)]
    x0, y0, rh, cw1, cw2 = 150, 170, 88, 420, 260
    for i, (nm, val, c, bold) in enumerate(rows):
        y = y0 + i * rh
        fig.rect(x0, y, cw1 + cw2, rh, stroke=fig.p['grid'], width=2,
                 fill='#EEF2F7' if bold else fig.p['bg'])
        if not bold:
            fig.rect(x0 + 18, y + rh / 2 - 16, 32, 32, fill=c, rx=6)
        fig.text(x0 + 70, y + rh / 2 + 10, nm, 30, anchor='start', bold=bold)
        fig.text(x0 + cw1 + cw2 - 24, y + rh / 2 + 10, val, 30, anchor='end', bold=bold)
    fig.text(x0 + 40, y0 + 6 * rh + 70, '✓ budsjettet går opp', 36, anchor='start', bold=True, color='#3D8B37')
    fig.pie(1190, 450, 280, [(0.25, fig.p['main'], 'Mat'),
                             (800 / 6000, fig.p['accent'], None),
                             (1700 / 6000, fig.p['extra'], 'Fritid'),
                             (2000 / 6000, '#5E81A6', 'Sparing')])
    fig.text(1190 + 280 * 0.82, 450 - 280 * 0.55, 'Transport', 28, anchor='start', color=fig.p['accent'], bold=True)
    save(fig, '1p-8-2-budsjett.svg')


def f_8_3_trinnskatt():
    fig = Fig('1p')
    fig.title('Trinnskatt: en trapp')
    steps = [('0 %', 0), ('1,7 %', 1), ('4,0 %', 2), ('13,7 %', 3)]
    x0, ybase = 200, 700
    swid, shgt = 290, 130
    for i, (lab, lvl) in enumerate(steps):
        x = x0 + i * swid
        h = 60 + lvl * shgt
        fig.rect(x, ybase - h, swid, h, fill=fig.p['main'], opacity=0.16 + 0.16 * i)
        fig.rect(x, ybase - h, swid, h, stroke=fig.p['main'], width=4)
        fig.text(x + swid / 2, ybase - h + 56, lab, 36, bold=True)
    fig.arrow(x0, ybase + 40, x0 + 4 * swid + 40, ybase + 40, fig.p['text'], 4)
    fig.text(x0 + 2 * swid, ybase + 92, 'inntekt →', 30, italic=True)
    # lønnspose i tredje sone
    px = x0 + 2.5 * swid
    fig.circle(px, ybase - 60 - 2 * shgt - 70, 46, fill=fig.p['accent'])
    fig.text(px, ybase - 60 - 2 * shgt - 56, 'kr', 30, color='#FFFFFF', bold=True)
    fig.poly([(px - 16, ybase - 60 - 2 * shgt - 112), (px + 16, ybase - 60 - 2 * shgt - 112),
              (px, ybase - 60 - 2 * shgt - 134)], stroke=fig.p['accent'], width=4, close=True)
    fig.text(W / 2, 180, 'bare inntekten over hvert trinn får den høyere satsen', 34, bold=True, color=fig.p['accent'])
    save(fig, '1p-8-3-trinnskatt.svg')


def f_8_4_mva():
    fig = Fig('1p')
    fig.title('Merverdiavgift (mva)')
    x, y, w, h = 240, 260, 1120, 140
    w_uten = w * 0.8
    fig.rect(x, y, w_uten, h, fill=fig.p['main'])
    fig.rect(x + w_uten, y, w - w_uten, h, fill=fig.p['accent'])
    fig.text(x + w_uten / 2, y + h / 2 + 12, 'uten mva: 800 kr (100 %)', 34, color='#FFFFFF', bold=True)
    fig.text(x + w_uten + (w - w_uten) / 2, y - 28, '+ 25 % mva: 200 kr', 30, bold=True, color=fig.p['accent'])
    fig.text(x + w / 2, y + h + 60, 'med mva: 1000 kr (125 %)', 36, bold=True)
    dim(fig, x, y + h + 96, x + w, y + h + 96, '', width=2.5)
    fig.arrow(500, 620, 1100, 620, fig.p['accent'], 5, head=16)
    fig.text(800, 590, '· 1,25 legger til mva', 32, bold=True, color=fig.p['accent'])
    fig.arrow(1100, 740, 500, 740, fig.p['main'], 5, head=16)
    fig.text(800, 800, ': 1,25 finner pris uten mva', 32, bold=True, color=fig.p['main'])
    save(fig, '1p-8-4-mva.svg')


def f_8_5_kpi_kroneverdi():
    fig = Fig('1p')
    fig.title('Konsumprisindeksen stiger')
    years = list(range(0, 21, 5))
    tx, ty = fig.coords(0, 20, 90, 160, box=(240, 140, 1380, 520),
                        xticks=[], yticks=[100, 125, 150],
                        xlabel='', ylabel='KPI')
    for v in years:
        fig.line(tx(v), 140, tx(v), ty(90), fig.p['grid'], 1.5)
    # litt buet stigning 100 -> 150
    f = lambda x: 100 + 50 * (x / 20) ** 1.15
    fig.plot(f, color=fig.p['main'], width=6)
    fig.point(0, 100, color=fig.p['accent'], r=10)
    fig.point(20, 150, color=fig.p['accent'], r=10)
    # bytt x-etiketter til årstall: legg på under
    for v, lab in zip(years, ['2005', '2010', '2015', '2020', '2025']):
        fig.text(tx(v), ty(90) + 42, lab, 28)
    # handlekurver
    def basket(cx, cy, c):
        fig.poly([(cx - 70, cy - 60), (cx + 70, cy - 60), (cx + 48, cy + 40), (cx - 48, cy + 40)],
                 stroke=c, width=6, close=True)
        fig.raw(f'<path d="M {cx - 34},{cy - 60} A 40,46 0 0 1 {cx + 34},{cy - 60}" fill="none" stroke="{c}" stroke-width="6"/>')
        fig.line(cx - 24, cy - 36, cx - 30, cy + 16, c, 4)
        fig.line(cx, cy - 36, cx, cy + 16, c, 4)
        fig.line(cx + 24, cy - 36, cx + 30, cy + 16, c, 4)
    basket(400, 740, fig.p['main'])
    fig.text(400, 850, '1 000 kr (indeks 100)', 30, bold=True, color=fig.p['main'])
    basket(1200, 740, fig.p['accent'])
    fig.text(1200, 850, '1 500 kr (indeks 150)', 30, bold=True, color=fig.p['accent'])
    fig.arrow(560, 740, 1040, 740, fig.p['text'], 4, head=14)
    fig.text(800, 710, '1 000 · 150/100 = 1 500 kr', 32, bold=True)
    save(fig, '1p-8-5-kpi-kroneverdi.svg')


# ================================================================ KAPITTEL 9

def f_9_1_flytskjema():
    fig = Fig('1p')
    cx = W / 2
    bw, bh = 380, 86
    fig.flow_box(cx - 130, 60, 260, 76, 'Start', shape='oval', size=30)
    fig.arrow(cx, 136, cx, 186, fig.p['main'], 4, head=12)
    para_box(fig, cx - bw / 2, 190, bw, bh, 'Les inn tallet n', 30)
    fig.arrow(cx, 276, cx, 326, fig.p['main'], 4, head=12)
    dw, dh = 560, 190
    fig.flow_box(cx - dw / 2, 330, dw, dh, 'Er resten av\nn : 2 lik 0?', shape='diamond', size=30)
    # ja -> venstre, nei -> høyre
    lx, rx = 330, 1270
    fig.arrow(cx - dw / 2, 425, lx + 180, 425, fig.p['main'], 4, head=12)
    fig.text((cx - dw / 2 + lx + 180) / 2, 400, 'Ja', 32, bold=True, color=fig.p['accent'])
    fig.arrow(cx + dw / 2, 425, rx - 180, 425, fig.p['main'], 4, head=12)
    fig.text((cx + dw / 2 + rx - 180) / 2, 400, 'Nei', 32, bold=True, color=fig.p['accent'])
    fig.flow_box(lx - 180, 540, 360, 90, 'Skriv: partall', size=30)
    fig.flow_box(rx - 180, 540, 360, 90, 'Skriv: oddetall', size=30)
    fig.line(lx, 425, lx, 540, fig.p['main'], 4)
    fig.arrow(lx, 530, lx, 538, fig.p['main'], 4, head=12)
    fig.line(rx, 425, rx, 540, fig.p['main'], 4)
    fig.arrow(rx, 530, rx, 538, fig.p['main'], 4, head=12)
    fig.line(lx, 630, lx, 700, fig.p['main'], 4)
    fig.line(rx, 630, rx, 700, fig.p['main'], 4)
    fig.line(lx, 700, rx, 700, fig.p['main'], 4)
    fig.arrow(cx, 700, cx, 740, fig.p['main'], 4, head=12)
    fig.flow_box(cx - 130, 744, 260, 76, 'Slutt', shape='oval', size=30)
    save(fig, '1p-9-1-flytskjema.svg')


# ================================================================ kjør alt

ALL = [v for k, v in sorted(globals().items()) if k.startswith('f_') and callable(v)]

if __name__ == '__main__':
    for fn in ALL:
        fn()
    print(f'{len(ALL)} figurer generert.')
