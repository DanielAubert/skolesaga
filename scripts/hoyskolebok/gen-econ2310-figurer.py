#!/usr/bin/env python3
"""Figurbibliotek for ECON2310 Makroøkonomi 2 (UiO).

Samme hus-stil som scripts/hoyskolebok/gen-mikrofigurer.py: viewBox 440x360
(bredere for to-panel- og flytskjema-figurer), origo (70, 300), Georgia-serif,
hvit bakgrunn, stiplede hjelpelinjer til aksene. Aksefarge #6b7280 (jf.
BYGGEKONTRAKT §Figurspråket). All geometri REGNES UT — skjæringspunkter,
helninger og skiftretninger verifiseres numerisk med assert før SVG-en skrives.

PRINSIPP: en figur skal bare vise det kapitlet FAKTISK har lært bort.

Bruk:
  python3 scripts/hoyskolebok/gen-econ2310-figurer.py [--dele 2-3] [ut-katalog]

Deler:
  2  Keynes-krysset, sparing mot investering (H2018-varianten), kontrastfiguren
  3  Paritetsbetingelsen i (i,E)-diagram, kurssjokkets to kanaler
  1  Vekst/Solow: fasediagram, tidsbaner, skift i s/n/delta/g, gullregelen,
     to stabile likevekter med ustabil terskel, drilloversikten, prøvefigurene
  7  Øvingseksamenene: (Y,i)-figurene til kap. 7.2 og 7.3

Etterpå: wire som image-blokker MED SKREDDERSYDD caption per plassering, og
kjør `npx tsx scripts/upload-media-storage.ts` (ellers 404 i prod).
"""
import os
import sys
import math

# ---------------------------------------------------------------- oppsett
ARGS = sys.argv[1:]
DELER = {'2', '3'}
if '--dele' in ARGS:
    i = ARGS.index('--dele')
    DELER = set(ARGS[i + 1].replace('-', ',').split(','))
    del ARGS[i:i + 2]
OUT = ARGS[0] if ARGS else 'public/images/textbook/econ2310'
os.makedirs(OUT, exist_ok=True)

OX, OY = 70, 300           # origo (nedre venstre) i standardpanelet
XMAX, YTOP = 400, 30       # akseender
RED, BLUE, GRN, PUR, ORG = '#c0392b', '#2471a3', '#1a7f37', '#8250df', '#bf8700'
AX = '#6b7280'             # aksefarge (BYGGEKONTRAKT)
GREY = '#666'
INK = '#222'

# ---------------------------------------------------------------- byggeklosser


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def header(label, w=440, h=360):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'font-family="Georgia, \'Times New Roman\', serif" role="img" aria-label="{esc(label)}">\n'
            f'  <rect width="{w}" height="{h}" fill="#ffffff"/>\n')


def rt(x, y, s, size=14, color='#000', italic=True, bold=False,
       anchor='start', opacity=None):
    """Tekst med _{subskript} og ^{superskript} (ekte tspans, ingen unicode)."""
    out, i, shift = [], 0, 0
    while i < len(s):
        if s[i] in '_^' and i + 1 < len(s) and s[i + 1] == '{':
            j = s.index('}', i + 2)
            target = 4 if s[i] == '_' else -5
            dy = target - shift
            shift = target
            out.append(f'<tspan font-size="{size * 0.72:.0f}" dy="{dy}">{esc(s[i+2:j])}</tspan>')
            i = j + 1
        else:
            j = i
            while j < len(s) and not (s[j] in '_^' and j + 1 < len(s) and s[j + 1] == '{'):
                j += 1
            chunk = esc(s[i:j])
            if shift:
                out.append(f'<tspan font-size="{size}" dy="{-shift}">{chunk}</tspan>')
                shift = 0
            else:
                out.append(chunk)
            i = j
    fs = ' font-style="italic"' if italic else ''
    fw = ' font-weight="bold"' if bold else ''
    an = f' text-anchor="{anchor}"' if anchor != 'start' else ''
    op = f' opacity="{opacity}"' if opacity else ''
    return (f'  <text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}"'
            f'{fs}{fw}{an}{op}>' + ''.join(out) + '</text>\n')


def line(p1, p2, color, w=2.4, dash=None, opacity=None):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    o = f' opacity="{opacity}"' if opacity else ''
    return (f'  <line x1="{p1[0]:.1f}" y1="{p1[1]:.1f}" x2="{p2[0]:.1f}" y2="{p2[1]:.1f}" '
            f'stroke="{color}" stroke-width="{w}"{d}{o}/>\n')


def polyline(pts, color, w=2.4, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    p = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    return f'  <polyline points="{p}" fill="none" stroke="{color}" stroke-width="{w}"{d}/>\n'


def _head(p_from, p_to, color, size=7):
    """Pilspiss i p_to, orientert langs p_from -> p_to."""
    dx, dy = p_to[0] - p_from[0], p_to[1] - p_from[1]
    L = math.hypot(dx, dy) or 1.0
    ux, uy = dx / L, dy / L
    bx, by = p_to[0] - ux * size, p_to[1] - uy * size
    w = size * 0.5
    pts = [(p_to[0], p_to[1]), (bx - uy * w, by + ux * w), (bx + uy * w, by - ux * w)]
    p = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    return f'  <polygon points="{p}" fill="{color}"/>\n'


def arrow(p1, p2, color=INK, w=1.6, dash=None, size=7):
    return line(p1, p2, color, w, dash) + _head(p1, p2, color, size)


def darrow(p1, p2, color=INK, w=1.4, size=6.5):
    return line(p1, p2, color, w) + _head(p2, p1, color, size) + _head(p1, p2, color, size)


def dot(x, y, color=INK, r=4):
    return f'  <circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="{color}"/>\n'


def odot(x, y, color=INK, r=4.5):
    return (f'  <circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="#ffffff" '
            f'stroke="{color}" stroke-width="1.8"/>\n')


def axes(xlab, ylab, ox=OX, oy=OY, xmax=XMAX, ytop=YTOP, ylab_italic=True,
         ylab_size=14, xlab_italic=True):
    s = (f'  <line x1="{ox}" y1="{oy}" x2="{xmax}" y2="{oy}" stroke="{AX}" stroke-width="1.6"/>\n'
         f'  <line x1="{ox}" y1="{oy}" x2="{ox}" y2="{ytop}" stroke="{AX}" stroke-width="1.6"/>\n'
         f'  <polygon points="{xmax},{oy} {xmax-8},{oy-4} {xmax-8},{oy+4}" fill="{AX}"/>\n'
         f'  <polygon points="{ox},{ytop} {ox-4},{ytop+8} {ox+4},{ytop+8}" fill="{AX}"/>\n')
    s += rt(xmax + 6, oy + 5, xlab, 15, INK, xlab_italic)
    s += rt(ox - 10, ytop - 6, ylab, ylab_size, INK, ylab_italic)
    return s


def box(cx, cy, w, h, lines, color=INK, size=12, fill='#ffffff', dash=None,
        italic=False, lw=1.8):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    s = (f'  <rect x="{cx-w/2:.1f}" y="{cy-h/2:.1f}" width="{w:.1f}" height="{h:.1f}" rx="6" '
         f'fill="{fill}" stroke="{color}" stroke-width="{lw}"{d}/>\n')
    n = len(lines)
    for k, ln in enumerate(lines):
        y = cy + (k - (n - 1) / 2) * (size + 4) + size * 0.36
        s += rt(cx, y, ln, size, INK, italic, anchor='middle')
    return s


def save(name, body):
    with open(f'{OUT}/{name}.svg', 'w') as f:
        f.write(body + '</svg>\n')
    print('skrev', name + '.svg')


def near(a, b, tol=1e-9):
    return abs(a - b) < tol


# ===========================================================================
# G1 — DEL 2: etterspørselsmodellen (Keynes-krysset) og H2018-varianten
# ===========================================================================
if '2' in DELER:
    # ---------------- felles tallgrunnlag, verifisert -----------------------
    # Keynes-krysset: Z = (c0+I0) + c1*Y, likevekt der Z = Y.
    C1, A0, A1 = 0.6, 20.0, 10.0            # A = c0 + I0 (autonom etterspørsel)
    KY0, KY1 = A0 / (1 - C1), A1 / (1 - C1)  # 50 og 25
    MULT = 1 / (1 - C1)
    assert near(KY0, 50.0) and near(KY1, 25.0), (KY0, KY1)
    assert near(KY0 - KY1, MULT * (A0 - A1)), 'multiplikatoren må gi hele fallet'
    assert KY1 < KY0, 'lavere c0 må gi lavere likevektsproduksjon'
    # skjæringene ligger PÅ 45-graderslinja:
    assert near(A0 + C1 * KY0, KY0) and near(A1 + C1 * KY1, KY1)

    # H2018-varianten: S = gY, I = I0 + aY, likevekt Y* = I0/(g-a).
    G0, G1, ALF, I0 = 0.25, 0.35, 0.15, 6.0
    HY0, HY1 = I0 / (G0 - ALF), I0 / (G1 - ALF)     # 60 og 30
    HS0, HS1 = G0 * HY0, G1 * HY1                   # 15 og 10.5
    assert G0 > ALF and G1 > ALF, 'stabilitetsvilkåret g > a må holde'
    assert near(HY0, 60.0) and near(HY1, 30.0), (HY0, HY1)
    assert near(HS0, I0 + ALF * HY0) and near(HS1, I0 + ALF * HY1), 'S = I i likevekt'
    assert HY1 < HY0, 'høyere sparerate må gi lavere Y'
    assert HS1 < HS0, 'realisert sparing/investering må FALLE (B lavere enn A)'

    # Vekstmodellen: y = f(k) = k^0.5, sparekurve s*f(k), utvanning (n+d)k.
    NDEL, S0, S1 = 0.10, 0.20, 0.30
    def fk(k): return math.sqrt(k)
    KS0, KS1 = (S0 / NDEL) ** 2, (S1 / NDEL) ** 2   # k* = (s/(n+d))^2 = 4 og 9
    assert near(S0 * fk(KS0), NDEL * KS0) and near(S1 * fk(KS1), NDEL * KS1)
    assert KS1 > KS0, 'høyere sparerate må gi høyere k*'
    # konkavitet: helningen til s*f(k) skal avta
    assert (S0 * fk(2) - S0 * fk(1)) > (S0 * fk(9) - S0 * fk(8))
    # og sparekurven skal krysse strålen ovenfra->nedenfra (stabilitet)
    assert S0 * fk(KS0 - 1) > NDEL * (KS0 - 1) and S0 * fk(KS0 + 1) < NDEL * (KS0 + 1)

    print(f'  [Del 2] Keynes: Y0={KY0:.0f} Y1={KY1:.0f} (multiplikator {MULT:.1f})')
    print(f'  [Del 2] H2018:  Y0={HY0:.0f} (S=I={HS0:.1f}) -> Y1={HY1:.0f} (S=I={HS1:.1f})')
    print(f'  [Del 2] Solow:  k*0={KS0:.0f} -> k*1={KS1:.0f}')

    # ------------------------------------------------ 1) Keynes-krysset ----
    KX, KV = 3.0, 3.0        # LIKE skalaer -> 45-graderslinja blir visuelt 45 grader
    def kx(v): return OX + KX * v
    def kv(v): return OY - KV * v
    assert near(KX, KV), '45-graderslinja krever samme skala på begge akser'

    YEND = 78.0
    b = header('Keynes-krysset med produksjon Y vannrett og samlet etterspørsel loddrett. '
               'En rett 45-graderslinje fra origo og en slakere etterspørselslinje C pluss I-null '
               'krysser i punkt A. Etterspørselslinjen skyves parallelt nedover til en ny krysning '
               'B ved lavere produksjon. Det vannrette fallet i produksjonen er større enn det '
               'loddrette fallet i etterspørselslinjen.')
    b += axes('Y', 'etterspørsel', ylab_italic=False, ylab_size=13)
    # 45-graderslinja
    b += line((kx(0), kv(0)), (kx(YEND), kv(YEND)), INK, 1.8)
    # etterspørselslinjene
    b += line((kx(0), kv(A0)), (kx(YEND), kv(A0 + C1 * YEND)), RED, 2.4)
    b += line((kx(0), kv(A1)), (kx(YEND), kv(A1 + C1 * YEND)), RED, 2.2, '7 4')
    b += rt(96, 46, '45°-linja: Y = etterspørsel', 11, GREY)
    b += rt(kx(YEND) + 6, kv(A0 + C1 * YEND) + 4, 'C + I_{0}', 13, RED)
    b += rt(kx(YEND) + 6, kv(A1 + C1 * YEND) + 4, 'lavere c_{0}', 12, RED)
    # likevektene
    # A merkes nede til høyre for krysset (den eneste kilen som er fri for linjer)
    for Y, lab, dxy in ((KY0, 'A', (9, 15)), (KY1, 'B', (-17, -7))):
        b += line((kx(Y), kv(Y)), (kx(Y), OY), GREY, 1.2, '5 4')
        b += dot(kx(Y), kv(Y))
        b += rt(kx(Y) + dxy[0], kv(Y) + dxy[1], lab, 15, INK, False, True)
    b += rt(kx(KY1) - 6, OY + 17, 'Y_{1}', 13)
    b += rt(kx(KY0) - 6, OY + 17, 'Y_{0}', 13)
    # multiplikatoren: vannrett fall (stort) mot loddrett skift (lite)
    b += darrow((kx(KY1), 272), (kx(KY0), 272), INK)
    b += rt((kx(KY1) + kx(KY0)) / 2 - 10, 266, 'ΔY', 13)
    xs = 92.0
    Ys = (xs - OX) / KX
    b += darrow((xs, kv(A0 + C1 * Ys)), (xs, kv(A1 + C1 * Ys)), INK)
    b += rt(xs + 8, kv(A1 + C1 * Ys) - 6, 'fall i c_{0}', 11, INK)
    save('keynes-kryss-spareparadoks', b)

    # ------------------------- 2) sparing mot investering (H2018) ----------
    def hx(v): return OX + 3.3 * v
    def hv(v): return OY - 10.0 * v
    HEND = 88.0
    YF = 82.0
    assert YF > HY0, 'full sysselsetting må ligge til høyre for likevekten'

    def h_base(with_shift=False, with_yf=False, label=''):
        s = axes('Y', 'sparing og investering', ylab_italic=False, ylab_size=12)
        # investeringslinja (etterspørselssiden: rød), i ro
        s += line((hx(0), hv(I0)), (hx(HEND), hv(I0 + ALF * HEND)), RED, 2.4)
        s += rt(hx(HEND) - 4, hv(I0 + ALF * HEND) - 10, 'I = I_{0} + αY', 13, RED, anchor='end')
        s += dot(OX, hv(I0), RED, 3.5)
        s += rt(OX - 30, hv(I0) + 5, 'I_{0}', 13, RED)
        # sparelinja/-linjene (blå)
        if with_shift:
            s += line((hx(0), hv(0)), (hx(HEND), hv(G0 * HEND)), BLUE, 1.8, '6 4')
            kend = 23.0 / G1
            s += line((hx(0), hv(0)), (hx(kend), hv(23.0)), BLUE, 2.4)
            s += rt(hx(HEND) + 4, hv(G0 * HEND) + 5, 'S = γ_{0}Y', 13, BLUE)
            s += rt(hx(kend) + 4, hv(23.0) + 4, 'S = γ_{1}Y', 13, BLUE)
            # pila viser at strålen svinger OPP om origo; de to merkede strålene
            # forteller hvilken som er ny, så pila står uten tekst (ellers kolliderer
            # etiketten med A eller med γ1-strålen).
            xa = 54.5
            s += arrow((hx(xa), hv(G0 * xa)), (hx(xa), hv(G1 * xa)), GREY, 1.4)
        else:
            s += line((hx(0), hv(0)), (hx(HEND), hv(G0 * HEND)), BLUE, 2.4)
            s += rt(hx(HEND) + 4, hv(G0 * HEND) + 5, 'S = γY', 13, BLUE)
        # likevektspunktene
        pts = [(HY0, HS0, 'A', (8, -8))]
        if with_shift:
            pts.append((HY1, HS1, 'B', (-18, -7)))
        for Y, S, lab, dxy in pts:
            s += line((hx(Y), hv(S)), (hx(Y), OY), GREY, 1.2, '5 4')
            s += line((OX, hv(S)), (hx(Y), hv(S)), GREY, 1.2, '5 4')
            s += dot(hx(Y), hv(S))
            s += rt(hx(Y) + dxy[0], hv(S) + dxy[1], lab, 15, INK, False, True)
        if with_shift:
            s += rt(hx(HY1) - 8, OY + 17, 'Y_{1}', 13)
            s += rt(hx(HY0) - 8, OY + 17, 'Y_{0}', 13)
            # realisert sparing/investering er LAVERE i B — vist som loddrett
            # dobbeltpil mellom de to hjelpelinjene inn på den loddrette aksen
            s += darrow((105, hv(HS0)), (105, hv(HS1)), INK, 1.3)
            s += rt(112, (hv(HS0) + hv(HS1)) / 2 + 4, 'sparingen faller', 10, GREY)
        else:
            s += rt(hx(HY0) - 10, OY + 17, 'Y*', 13)
            s += rt(OX - 52, hv(HS0) + 5, 'S* = I*', 12)
        if with_yf:
            s += line((hx(YF), OY), (hx(YF), 120), GREY, 1.4, '6 4')
            s += rt(hx(YF) - 10, OY + 17, 'Y_{F}', 13)
            # loddrett tekst LANGS YF-linja (vannrett tekst kolliderer med I-linja)
            xr, yr = hx(YF) - 6, 244.0
            s += (f'  <text transform="rotate(-90 {xr:.1f} {yr:.1f})" x="{xr:.1f}" y="{yr:.1f}" '
                  f'font-size="10.5" fill="{GREY}">full sysselsetting</text>\n')
            y = 258.0
            s += darrow((hx(HY0), y), (hx(YF), y), INK)
            s += rt((hx(HY0) + hx(YF)) / 2, y - 8, 'ledighetsgap', 11, INK, anchor='middle')
        return s

    b = header('Diagram med produksjon Y vannrett og sparing og investering loddrett. En bratt '
               'rett stråle fra origo er sparingen S lik gamma ganger Y. En slakere rett linje som '
               'starter i I-null på den loddrette aksen er investeringene. De krysser i punkt A, med '
               'stiplede hjelpelinjer til likevektsproduksjonen Y-stjerne og til det felles nivået for '
               'sparing og investering. Lenger til høyre står en loddrett stiplet linje ved produksjonen '
               'ved full sysselsetting, og avstanden dit er merket ledighetsgap.')
    b += h_base(with_shift=False, with_yf=True)
    save('h2018-sparing-investering', b)

    b = header('Samme diagram med produksjon Y vannrett og sparing og investering loddrett. '
               'Sparestrålen svinger oppover rundt origo fra gamma-null til gamma-én, mens '
               'investeringslinjen ligger i ro. Likevekten flytter seg fra A til B nedover langs '
               'investeringslinjen: B ligger både til venstre for A og lavere enn A, så både '
               'produksjonen og den realiserte sparingen er lavere.')
    b += h_base(with_shift=True, with_yf=False)
    save('h2018-gamma-skift', b)

    b = header('Diagram med produksjon Y vannrett og sparing og investering loddrett. To '
               'sparestråler fra origo, den nye brattere enn den gamle, og én investeringslinje '
               'som starter i I-null og ligger i ro. Likevekten flytter seg fra A til B, som ligger '
               'til venstre for og lavere enn A. En loddrett stiplet linje til høyre viser '
               'produksjonen ved full sysselsetting, og avstanden fra den gamle likevekten dit er '
               'merket ledighetsgap.')
    b += h_base(with_shift=True, with_yf=True)
    save('prove-2b-sparing-investering', b)

    # ---------------------------- 3) Solow: sparerateskift -----------------
    def sx(v): return OX + 25.0 * v
    def sv(v): return OY - 178.57 * v
    KEND = 12.0

    def solow_panel(xf, vf, oy):
        s = ''
        ks = [0.03 * j for j in range(1, int(KEND / 0.03) + 1)]
        s += polyline([(xf(k), vf(S0 * fk(k))) for k in ks], BLUE, 2.2, '6 4')
        s += polyline([(xf(k), vf(S1 * fk(k))) for k in ks], BLUE, 2.4)
        s += line((xf(0), vf(0)), (xf(KEND), vf(NDEL * KEND)), GRN, 2.2)
        s += rt(xf(KEND) + 5, vf(NDEL * KEND) + 4, '(n+δ)k', 12, GRN)
        s += rt(xf(KEND) + 5, vf(S1 * fk(KEND)) + 4, 's_{1} f(k)', 12, BLUE)
        s += rt(xf(KEND) + 5, vf(S0 * fk(KEND)) + 4, 's_{0} f(k)', 12, BLUE)
        for k, lab, dxy in ((KS0, 'A', (-17, -7)), (KS1, 'B', (7, -8))):
            s += line((xf(k), vf(NDEL * k)), (xf(k), oy), GREY, 1.2, '5 4')
            s += dot(xf(k), vf(NDEL * k))
            s += rt(xf(k) + dxy[0], vf(NDEL * k) + dxy[1], lab, 15, INK, False, True)
        s += rt(xf(KS0) - 12, oy + 17, 'k_{0}*', 13)
        s += rt(xf(KS1) - 12, oy + 17, 'k_{1}*', 13)
        s += arrow((xf(KS0) + 22, oy + 27), (xf(KS1) - 8, oy + 27), INK, 1.6)
        return s

    b = header('Fasediagram med kapital per arbeider k vannrett. To konkave, stigende sparekurver '
               'fra origo: den nye ligger over den gamle overalt. En rett stråle fra origo viser '
               'utvanningen, n pluss delta ganger k. Den gamle sparekurven krysser strålen i punkt A '
               'ved k-null-stjerne, den nye i punkt B ved en høyere k-én-stjerne, begge med stiplede '
               'hjelpelinjer ned til k-aksen. En pil langs k-aksen peker mot høyre, fra den gamle til '
               'den nye likevekten.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += solow_panel(sx, sv, OY)
    save('prove-2d-solow-s-skift', b)

    # ------------------------- 4) kontrastfiguren, to paneler --------------
    W, H = 880, 380
    POY = 320
    def lx(v): return 70 + 25.0 * v            # venstre panel: k
    def lv(v): return POY - 178.57 * v
    def rx(v): return 510 + 3.0 * v            # høyre panel: Y (lik skala)
    def rv(v): return POY - 3.0 * v

    b = header('To paneler side ved side under overskriften Økt sparerate. Venstre panel er '
               'vekstmodellen: kapital per arbeider vannrett, to konkave sparekurver og en rett '
               'utvanningsstråle, likevekten flytter seg fra A til B mot HØYRE, til høyere kapital '
               'per arbeider. Høyre panel er Keynes-krysset: produksjon vannrett, en 45-graderslinje '
               'og en etterspørselslinje som skyves parallelt nedover, likevekten flytter seg fra A '
               'til B mot VENSTRE, til lavere produksjon. Samme sjokk gir motsatt pilretning i de to '
               'panelene.', W, H)
    b += rt(W / 2, 26, 'Økt sparerate', 17, INK, False, True, anchor='middle')
    b += rt(220, 52, 'Vekstmodellen (lang sikt)', 13, INK, False, True, anchor='middle')
    b += rt(660, 52, 'Keynes-krysset (kort sikt)', 13, INK, False, True, anchor='middle')
    b += line((440, 68), (440, 344), '#d0d4da', 1.4)
    # venstre panel
    b += axes('k', 'investering og utvanning', ox=70, oy=POY, xmax=400, ytop=68,
              ylab_italic=False, ylab_size=11)
    b += solow_panel(lx, lv, POY)
    b += rt(lx(KS0) + 26, POY + 44, 'k stiger', 11, GREY)
    # høyre panel
    b += axes('Y', 'etterspørsel', ox=510, oy=POY, xmax=840, ytop=68,
              ylab_italic=False, ylab_size=12)
    RE = 78.0
    b += line((rx(0), rv(0)), (rx(RE), rv(RE)), INK, 1.8)
    b += line((rx(0), rv(A0)), (rx(RE), rv(A0 + C1 * RE)), RED, 2.4)
    b += line((rx(0), rv(A1)), (rx(RE), rv(A1 + C1 * RE)), RED, 2.2, '7 4')
    b += rt(rx(RE) + 6, rv(RE) + 4, '45°', 11, GREY, False)
    b += rt(rx(RE) + 6, rv(A0 + C1 * RE) + 4, 'C + I_{0}', 12, RED)
    b += rt(rx(RE) + 6, rv(A1 + C1 * RE) + 4, 'lavere c_{0}', 11, RED)
    for Y, lab, dxy in ((KY0, 'A', (9, 15)), (KY1, 'B', (-18, -7))):
        b += line((rx(Y), rv(Y)), (rx(Y), POY), GREY, 1.2, '5 4')
        b += dot(rx(Y), rv(Y))
        b += rt(rx(Y) + dxy[0], rv(Y) + dxy[1], lab, 15, INK, False, True)
    b += rt(rx(KY1) - 8, POY + 17, 'Y_{1}', 13)
    b += rt(rx(KY0) - 8, POY + 17, 'Y_{0}', 13)
    b += arrow((rx(KY0) - 20, POY + 27), (rx(KY1) + 8, POY + 27), INK, 1.6)
    b += rt(rx(KY1) - 26, POY + 44, 'Y faller', 11, GREY)
    save('kontrast-to-paneler', b)

# ===========================================================================
# G1 — DEL 3: paritetsbetingelsen og kurssjokkets to kanaler
# ===========================================================================
if '3' in DELER:
    # E = Ee + kappa*(iF - i): fallende rett linje med helning -kappa.
    EE, KAP, IF = 7.0, 1.5, 3.0
    ICEPT = EE + KAP * IF                       # skjæring med E-aksen: 11.5
    def Euip(i, icept=None): return (ICEPT if icept is None else icept) - KAP * i
    I_0, I_1 = 3.0, 5.6
    EA = Euip(I_0)
    EC = Euip(I_1)
    assert near(ICEPT, 11.5)
    assert near(Euip(0), ICEPT), 'aksekrysset skal være Ee + kappa*iF'
    assert near((Euip(4) - Euip(2)) / (4 - 2), -KAP), 'helningen skal være minus kappa'
    assert EC < EA, 'høyere norsk rente må gi STERKERE krone (lavere E) langs linja'
    SHIFT_UP = 2.5                              # kappa*d(iF) eller d(Ee) opp
    EB = Euip(I_0, ICEPT + SHIFT_UP)
    assert EB > EA, 'skift oppover må gi svakere krone ved samme norske rente'
    assert near(EB - EA, SHIFT_UP), 'skiftet skal være parallelt (uendret helning)'
    # Prøve 3.D i kapitlet: BEGGE sjokkene skyver linjen OPP (høyere i^F, så
    # høyere E^e) — de forsterker hverandre, og samleteffekten kan signeres.
    D_IF, D_EE = 2.5, 2.5                       # kappa*d(iF) og d(Ee)
    IC1, IC2 = ICEPT + D_IF, ICEPT + D_IF + D_EE
    EM, EBD = Euip(I_0, IC1), Euip(I_0, IC2)
    assert EM > EA and EBD > EM, 'to skift oppover skal gi stigende E hele veien'
    assert near(EBD - EA, D_IF + D_EE), 'samlet skift = summen av delskiftene'
    assert near((Euip(4, IC2) - Euip(2, IC2)) / 2, -KAP), 'helningen er uendret'

    def ux(i): return OX + 40.0 * i
    def uv(E): return OY - 18.571 * E
    def uv3(E): return OY - 15.2 * E            # egen E-skala for tre-linjers-figuren
    IEND = 7.2
    print(f'  [Del 3] UIP: aksekryss={ICEPT:.1f}, helning={-KAP:.1f}, '
          f'E_A={EA:.2f} E_B={EB:.2f} E_C={EC:.2f}')
    print(f'  [Del 3] prøve 3.D: E_A={EA:.2f} -> E_M={EM:.2f} -> E_B={EBD:.2f} '
          f'(begge skift opp)')

    def uip_axes(a_from=250.0, a_to=190.0):
        """Akser + pil langs E-aksen («svakere krone»). Pilens plassering velges
        per figur slik at den roterte teksten ikke havner oppå E-etikettene."""
        s = axes('i', 'E', ylab_italic=True)
        s += arrow((50, a_from), (50, a_to), GREY, 1.4)
        y0 = a_from + 4
        s += (f'  <text transform="rotate(-90 44 {y0:.1f})" x="44" y="{y0:.1f}" '
              f'font-size="10.5" fill="{GREY}" font-style="italic">svakere krone</text>\n')
        return s

    def uip_line(icept, color, w=2.4, dash=None, lab=None, lab_size=12, lab_at=6.4,
                 vf=None):
        vf = vf or uv
        s = line((ux(0), vf(Euip(0, icept))), (ux(IEND), vf(Euip(IEND, icept))),
                 color, w, dash)
        if lab:
            s += rt(ux(lab_at) + 6, vf(Euip(lab_at, icept)) + 4, lab, lab_size, color)
        return s

    def helpers(x, y, lab, dxy=(8, -8), open_dot=False, color=INK):
        s = line((x, y), (x, OY), GREY, 1.2, '5 4')
        s += line((OX, y), (x, y), GREY, 1.2, '5 4')
        s += (odot(x, y, color) if open_dot else dot(x, y, color))
        s += rt(x + dxy[0], y + dxy[1], lab, 15, color, False, True)
        return s

    # ---------------------------------------- 1) paritetslinja -------------
    b = header('Diagram med norsk rente i vannrett og valutakursen E, kroner per enhet utenlandsk '
               'valuta, loddrett. En pil oppover langs den loddrette aksen er merket svakere krone. '
               'Paritetsbetingelsen er en rett, fallende linje med helning minus kappa, som skjærer '
               'den loddrette aksen i forventet langsiktskurs pluss kappa ganger utenlandsk rente. '
               'Ved startrenten i-null ligger punkt A på linjen, med stiplede hjelpelinjer til begge '
               'akser.')
    b += uip_axes(152, 68)          # ledig plass øverst: E_0 står ved y ≈ 175
    b += uip_line(ICEPT, BLUE, lab='E = E^{e} + κ(i^{F} − i)', lab_size=12, lab_at=5.3)
    b += dot(OX, uv(ICEPT), BLUE, 3.5)
    b += rt(OX + 8, uv(ICEPT) - 8, 'E^{e} + κi^{F}', 12, BLUE)
    b += helpers(ux(I_0), uv(EA), 'A')
    b += rt(ux(I_0) - 8, OY + 17, 'i_{0}', 13)
    b += rt(OX - 34, uv(EA) + 5, 'E_{0}', 13)
    save('uip-linje', b)

    # -------------------------- 2) skift OG bevegelse langs linja ----------
    b = header('Samme diagram med norsk rente vannrett og valutakursen loddrett. Den opprinnelige '
               'fallende linjen har punkt A ved startrenten. En ny linje er skjøvet parallelt '
               'oppover, med punkt B rett over A ved samme norske rente: det er et skift i linjen, '
               'og krona svekkes. På den opprinnelige linjen ligger punkt C ned til høyre ved en '
               'høyere norsk rente: det er en bevegelse langs linjen, og krona styrkes. Stiplede '
               'hjelpelinjer går fra A, B og C til begge akser.')
    b += uip_axes()
    b += uip_line(ICEPT + SHIFT_UP, PUR, 2.2)
    b += uip_line(ICEPT, BLUE, 2.4)
    # linjenavn i den frie høyremargen (begge linjene sveiper hele diagrammet)
    b += rt(362, uv(Euip(IEND, ICEPT + SHIFT_UP)) + 4, 'ny linje', 11, PUR)
    b += rt(362, uv(Euip(IEND, ICEPT)) + 2, 'utgangspunkt', 11, BLUE)
    b += helpers(ux(I_0), uv(EB), 'B', (-18, -8))
    b += helpers(ux(I_0), uv(EA), 'A', (-18, 16))
    b += helpers(ux(I_1), uv(EC), 'C', (9, 16))
    # SKIFT: loddrett pil A -> B ved uendret rente
    b += arrow((ux(I_0) + 9, uv(EA) - 6), (ux(I_0) + 9, uv(EB) + 8), PUR, 1.6)
    b += rt(202, 100, 'skift i linjen:', 11, PUR)
    b += rt(202, 113, 'i^{F}, E^{e} eller risikopremie opp', 11, PUR)
    # BEVEGELSE: pil parallelt UNDER den opprinnelige linja, A -> C
    _pa, _pc = 3.4, 5.15
    _ox, _oy = -5.7, 8.2                        # loddrett på linja, mot nedre venstre
    b += arrow((ux(_pa) + _ox, uv(Euip(_pa)) + _oy),
               (ux(_pc) + _ox, uv(Euip(_pc)) + _oy), BLUE, 1.6)
    b += rt(96, 338, 'bevegelse langs linjen: norsk rente opp (fra A til C)', 11, BLUE)
    b += rt(ux(I_0) - 8, OY + 17, 'i_{0}', 13)
    b += rt(ux(I_1) - 8, OY + 17, 'i_{1}', 13)
    b += rt(OX - 36, uv(EA) + 5, 'E_{A}', 12)
    b += rt(OX - 36, uv(EB) + 5, 'E_{B}', 12)
    save('uip-skift-og-bevegelse', b)

    # ------------------------------- 3) to påfølgende skift ---------------
    b = header('Samme diagram med norsk rente vannrett og valutakursen loddrett, og tre parallelle '
               'fallende linjer med samme helning. Den nederste er utgangspunktet, med punkt A ved '
               'startrenten. Den midterste er skjøvet opp fordi den utenlandske renten stiger, med '
               'mellompunktet M rett over A. Den øverste er skjøvet enda et hakk opp fordi forventet '
               'langsiktskurs stiger etter nedjusterte utsikter, med punkt B rett over M. Ved uendret '
               'norsk rente ender kursen i B, klart høyere enn i A: begge sjokkene trekker samme vei, '
               'så samleteffekten kan signeres — krona svekkes. Stiplede hjelpelinjer går fra alle tre '
               'punktene til begge akser.')
    b += uip_axes(290, 225)
    b += uip_line(IC2, ORG, 2.4, vf=uv3)
    b += uip_line(IC1, PUR, 2.2, '7 4', vf=uv3)
    b += uip_line(ICEPT, BLUE, 2.4, vf=uv3)
    b += rt(362, uv3(Euip(IEND, IC2)) + 4, 'E^{e} opp', 11, ORG)
    b += rt(362, uv3(Euip(IEND, IC1)) + 4, 'i^{F} opp', 11, PUR)
    b += rt(362, uv3(Euip(IEND, ICEPT)) + 2, 'utgangspunkt', 11, BLUE)
    b += helpers(ux(I_0), uv3(EBD), 'B', (10, -8))
    b += helpers(ux(I_0), uv3(EM), 'M', (-19, 17))
    b += helpers(ux(I_0), uv3(EA), 'A', (-18, 16))
    # de to delskiftene som loddrette piler ved uendret rente
    b += arrow((196, uv3(EA) - 6), (196, uv3(EM) + 7), PUR, 1.6)
    b += rt(203, 181, '1', 13, PUR, False, True)
    b += arrow((196, uv3(EM) - 6), (196, uv3(EBD) + 7), ORG, 1.6)
    b += rt(203, 146, '2', 13, ORG, False, True)
    for k, ln in enumerate(['begge skiftene går', 'samme vei — samlet', 'effekt kan signeres']):
        b += rt(86, 248 + 13 * k, ln, 10, GREY)
    b += rt(ux(I_0) - 8, OY + 17, 'i_{0}', 13)
    b += rt(OX - 36, uv3(EA) + 5, 'E_{A}', 12)
    b += rt(OX - 36, uv3(EBD) + 5, 'E_{B}', 12)
    b += rt(86, 334, '1: høyere i^{F} skyver linjen opp', 11, PUR)
    b += rt(248, 334, '2: høyere E^{e} skyver videre opp', 11, ORG)
    save('prove-3d-uip-to-sjokk', b)

    # --------------------------- 4) kurssjokkets to kanaler ---------------
    W, H = 560, 470
    b = header('Flytskjema. Øverst en boks: krona svekkes, E opp. Derfra går to piler. Den venstre, '
               'merket direkte, rask og entydig, går til boksen importvarer dyrere i kroner, prisvekst '
               'på import opp. Den høyre, merket indirekte, treg og betinget og påført et stort '
               'spørsmålstegn, går til en loddrett kjede: bedret konkurranseevne, deretter produksjonen '
               'opp, deretter ledigheten ned, deretter lønnsveksten opp, og til slutt prisvekst på '
               'norskproduserte varer opp. Begge veier ender i den samme sluttboksen: KPI-inflasjonen '
               'lik importandelen ganger importprisveksten pluss én minus importandelen ganger prisveksten '
               'på norske varer. Pilen fra den direkte kanalen er merket med importandelen, pilen fra '
               'kjeden med én minus importandelen. En note ved kjeden sier at den avhenger av '
               'sentralbankens respons og ikke kan signeres.', W, H)
    b += box(280, 42, 224, 38, ['Krona svekkes (E opp)'], INK, 13, '#f4f6f8')
    b += box(128, 152, 212, 54, ['Importvarer dyrere', 'i kroner (p_{i} opp)'], BLUE, 12.5, '#eef4fa')
    chain = ['Bedret konkurranseevne', 'Y opp', 'Ledighet ned', 'Lønnsvekst opp', 'p_{s} opp']
    cys = [130, 182, 234, 286, 338]
    for lab, cy in zip(chain, cys):
        b += box(424, cy, 200, 34, [lab], ORG, 12.5, '#fdf6e6')
    for a, c in zip(cys, cys[1:]):
        b += arrow((424, a + 17), (424, c - 17), ORG, 1.6)
    b += box(280, 420, 340, 48, ['KPI-inflasjonen', 'π = α p_{i} + (1 − α) p_{s}'], INK, 13, '#f4f6f8')
    # de to pilene ut av toppboksen
    b += arrow((238, 62), (150, 122), BLUE, 1.8)
    b += rt(24, 96, 'direkte —', 10.5, BLUE)
    b += rt(24, 109, 'rask og entydig', 10.5, BLUE)
    b += arrow((322, 62), (400, 111), ORG, 1.8)
    b += rt(438, 84, 'indirekte —', 10.5, ORG)
    b += rt(438, 97, 'treg og betinget', 10.5, ORG)
    b += rt(368, 80, '?', 22, ORG, False, True)
    # inn i sluttboksen, med vektene
    b += arrow((128, 180), (204, 394), BLUE, 1.8)
    b += rt(138, 300, 'α', 14, BLUE)
    b += arrow((424, 356), (368, 394), ORG, 1.8)
    b += rt(430, 380, '1 − α', 13, ORG)
    for k, ln in enumerate(['avhenger av', 'sentralbankens', 'respons — kan', 'ikke signeres']):
        b += rt(212, 212 + 14 * k, ln, 10.5, GREY)
    save('kurssjokk-to-kanaler', b)

# ===========================================================================
# G3 — DEL 1: vekstbiblioteket (fasediagram, tidsbaner, skift i s/n/delta/g,
#             gullregelen, to stabile likevekter) og DEL 7 (øvingseksamener)
# ===========================================================================
# Felles hjelpere for G3-figurene. All geometri regnes ut fra modellen:
# f(k) = k^alpha, likevekt k* = (s/nd)^(1/(1-alpha)) med nd = n+delta (evt.
# n+g+delta), og hver konstruksjon parametersjekkes med assert før tegning.


def g3_kstar(s, nd, alpha=0.5):
    """Steady state for f(k) = k^alpha: s k^alpha = nd k."""
    return (s / nd) ** (1.0 / (1.0 - alpha))


def g3_map(kmax, vmax, ox=OX, oy=OY, xmax=XMAX, ytop=YTOP, xpad=30, vpad=1.10):
    """Skalafunksjoner (fx, fv) som gir plass til hele kurvefamilien."""
    sx = (xmax - xpad - ox) / float(kmax)
    sv = (oy - ytop - 12) / (vmax * vpad)
    return (lambda k: ox + sx * k), (lambda v: oy - sv * v)


def g3_pts(fx, fv, f, a, b, n=160):
    return [(fx(a + (b - a) * j / n), fv(f(a + (b - a) * j / n))) for j in range(n + 1)]


def g3_eq(fx, fv, k, v, lab, dxy=(8, -9), xlab=None, xdx=-13, oy=OY,
          open_dot=False, color=INK, vdash_to=None):
    """Likevektspunkt med stiplet hjelpelinje ned til k-aksen."""
    s = line((fx(k), fv(v)), (fx(k), oy if vdash_to is None else vdash_to), GREY, 1.2, '5 4')
    s += (odot(fx(k), fv(v), color) if open_dot else dot(fx(k), fv(v), color))
    s += rt(fx(k) + dxy[0], fv(v) + dxy[1], lab, 15, color, False, True)
    if xlab:
        s += rt(fx(k) + xdx, oy + 17, xlab, 13)
    return s


def g3_axarrow(fx, k_from, k_to, y=OY + 28, color=INK, lab=None, labdy=13):
    """Dynamikkpil langs k-aksen, fra k_from mot k_to."""
    s = arrow((fx(k_from), y), (fx(k_to), y), color, 1.6)
    if lab:
        s += rt((fx(k_from) + fx(k_to)) / 2, y + labdy, lab, 11, GREY, False, anchor='middle')
    return s


def g3_path(k0, s, nd, alpha=0.5, steps=70, dt=1.0):
    """Diskret bane for k: k_{t+1} = k_t + dt*(s k^alpha - nd k)."""
    ks = [k0]
    for _ in range(steps):
        k = ks[-1]
        ks.append(k + dt * (s * k ** alpha - nd * k))
    return ks


if '1' in DELER or '7' in DELER:
    # ------------------------------------------------ tallgrunnlag Del 1 ----
    ALF = 0.5                              # f(k) = sqrt(k) i standardfamilien

    def f2(k):                             # produktfunksjonen i standardfiguren
        return k ** ALF

    # (a) grunnfiguren i 1.2: s = 0,30 og n+delta = 0,10 gir k* = 9
    S_B, ND_B = 0.30, 0.10
    K_B = g3_kstar(S_B, ND_B)
    assert near(K_B, 9.0), K_B
    assert near(S_B * f2(K_B), ND_B * K_B), 'likevektsbetingelsen må holde i k*'
    # stabilitet: sparekurven over strålen til venstre, under til høyre
    assert S_B * f2(K_B - 2) > ND_B * (K_B - 2)
    assert S_B * f2(K_B + 2) < ND_B * (K_B + 2)
    # konkavitet: helningen avtar
    assert (f2(2) - f2(1)) > (f2(9) - f2(8))
    # konsum per arbeider i likevekt
    C_B = (1 - S_B) * f2(K_B)
    assert near(C_B, f2(K_B) - ND_B * K_B), 'c* = f(k*) - (n+delta)k* i likevekt'

    # (b) sparerateskiftet i 1.3: 0,25 -> 0,35 med n+delta = 0,10
    S0, S1 = 0.25, 0.35
    KS0, KS1 = g3_kstar(S0, ND_B), g3_kstar(S1, ND_B)
    assert near(KS0, 6.25) and near(KS1, 12.25), (KS0, KS1)
    assert KS1 > KS0, 'høyere sparerate må gi høyere k*'
    assert S1 * f2(KS0) > ND_B * KS0, 'i gammel likevekt må ny sparekurve ligge over strålen'

    # (c) n- og delta-skiftet i 1.3 (og g-skiftet i 1.4): 0,10 -> 0,15
    ND0, ND1 = 0.10, 0.15
    KN0, KN1 = g3_kstar(S_B, ND0), g3_kstar(S_B, ND1)
    assert near(KN0, 9.0) and near(KN1, 4.0), (KN0, KN1)
    assert KN1 < KN0, 'brattere stråle må gi lavere k*'
    assert S_B * f2(KN0) < ND1 * KN0, 'i gammel likevekt ligger den nye strålen over sparekurven'

    # (d) gullregelen i 1.5: n+delta = 0,20 gir k^gull = 6,25 og s^gull = 0,50
    ND_G = 0.20
    K_GULL = (ALF / ND_G) ** (1.0 / (1.0 - ALF))          # f'(k) = n+delta
    S_GULL = ND_G * K_GULL ** (1 - ALF)
    assert near(K_GULL, 6.25), K_GULL
    assert near(S_GULL, 0.5), S_GULL
    assert near(ALF * K_GULL ** (ALF - 1), ND_G), 'tangenten må ha helning n+delta'
    assert near(g3_kstar(S_GULL, ND_G), K_GULL), 'gullregel-spareraten gir k* = k^gull'
    C_GULL = f2(K_GULL) - ND_G * K_GULL
    assert near(C_GULL, (1 - S_GULL) * f2(K_GULL)), 'c = f - stråle = (1-s)f i likevekt'
    # maksimum: forbruket faller på BEGGE sider av k^gull

    def c_of_k(k):
        return f2(k) - ND_G * k
    assert c_of_k(K_GULL) > c_of_k(K_GULL - 2) and c_of_k(K_GULL) > c_of_k(K_GULL + 2)
    assert max(c_of_k(0.02 * j) for j in range(1, 600)) <= c_of_k(K_GULL) + 1e-9

    # forbruk som funksjon av spareraten: c*(s) = (1-s) f(k*(s))
    def c_of_s(s):
        return (1 - s) * f2(g3_kstar(s, ND_G))
    assert near(c_of_s(S_GULL), C_GULL), 'de to 1.5-figurene skal gi samme toppverdi'
    assert max(c_of_s(0.001 * j) for j in range(1, 1000)) <= c_of_s(S_GULL) + 1e-9
    assert c_of_s(0.001) < 0.02 and c_of_s(0.999) < 0.02, 'null forbruk i begge endene'

    # (e) to likevekter i 1.6: f(k) = k^(1/3), trappetrinnssparing
    ALF3 = 1.0 / 3.0

    def f3(k):
        return k ** ALF3

    ND_T = 0.10
    SL, SH, KBAR = 0.30, 0.75, 10.0
    KL = g3_kstar(SL, ND_T, ALF3)
    KH = g3_kstar(SH, ND_T, ALF3)
    S_GULL3 = ND_T * KL ** 0.0 * (ALF3 / ND_T) ** 0.0      # settes under
    K_GULL3 = (ALF3 / ND_T) ** (1.0 / (1.0 - ALF3))
    S_GULL3 = ND_T * K_GULL3 ** (1 - ALF3)
    assert near(S_GULL3, ALF3), S_GULL3                     # s^gull = kapitalandelen
    assert KL < KBAR < KH, (KL, KBAR, KH)
    assert SL * f3(KBAR) < ND_T * KBAR, 'under terskelen må lav sparekurve ligge under strålen'
    assert SH * f3(KBAR) > ND_T * KBAR, 'over terskelen må høy sparekurve ligge over strålen'
    # dynamikken i de fire intervallene
    assert SL * f3(KL / 2) > ND_T * (KL / 2)                      # (0, kL*): pil høyre
    assert SL * f3((KL + KBAR) / 2) < ND_T * (KL + KBAR) / 2      # (kL*, kbar): pil venstre
    assert SH * f3((KBAR + KH) / 2) > ND_T * (KBAR + KH) / 2      # (kbar, kH*): pil høyre
    assert SH * f3(KH + 4) < ND_T * (KH + 4)                      # over kH*: pil venstre
    # forbruksvrien: lavlikevekten kan gi HØYEST forbruk når s_H er svært høy
    CL = f3(KL) - ND_T * KL
    CH = f3(KH) - ND_T * KH
    assert CL > CH, (CL, CH)
    assert SH > 2 * S_GULL3, 'vrien krever en sparerate godt over gullregelnivået'
    assert SL < S_GULL3, 'lavlikevekten skal ligge under gullregelnivået'

    # (f) endogen befolkningsvekst i 1.6: knekt stråle
    S_E, NDH, NDL = 0.33, 0.10, 0.045
    KEL = g3_kstar(S_E, NDH, ALF3)
    KEH = g3_kstar(S_E, NDL, ALF3)
    KEBAR = 10.0
    assert KEL < KEBAR < KEH, (KEL, KEBAR, KEH)
    assert NDH > NDL, 'befolkningsveksten faller når kapitalintensiteten passerer terskelen'
    assert S_E * f3(KEL / 2) > NDH * (KEL / 2)
    assert S_E * f3((KEL + KEBAR) / 2) < NDH * (KEL + KEBAR) / 2
    assert S_E * f3((KEBAR + KEH) / 2) > NDL * (KEBAR + KEH) / 2
    assert S_E * f3(KEH + 4) < NDL * (KEH + 4)
    K0_E = 8.0
    assert KEL < K0_E < KEBAR and S_E * f3(K0_E) < NDH * K0_E, 'startpunktet glir tilbake til kL*'
    K0_LOFT = 12.5
    assert KEBAR < K0_LOFT < KEH and S_E * f3(K0_LOFT) > NDL * K0_LOFT, 'løftet må bære videre opp'

    print(f'  [Del 1] grunnfigur: k*={K_B:.2f}, c*={C_B:.3f}')
    print(f'  [Del 1] s-skift: {KS0:.2f} -> {KS1:.2f} · stråleskift: {KN0:.2f} -> {KN1:.2f}')
    print(f'  [Del 1] gullregel: k^gull={K_GULL:.2f}, s^gull={S_GULL:.2f}, c^gull={C_GULL:.3f}')
    print(f'  [Del 1] trappetrinn: kL*={KL:.2f} kbar={KBAR:.1f} kH*={KH:.2f} '
          f'(c_L={CL:.3f} > c_H={CH:.3f}, s^gull={S_GULL3:.3f})')
    print(f'  [Del 1] endogen n: kL*={KEL:.2f} kbar={KEBAR:.1f} kH*={KEH:.2f}')

if '1' in DELER:
    # ================================================== 1.2 fasediagrammet ==
    KE = 18.0
    fx, fv = g3_map(KE, ND_B * KE)

    def g3_fase_base(fx, fv, s, nd, kend, f=f2, slab='s f(k)', rlab='(n+δ)k',
                     scol=BLUE, rcol=GRN, sdash=None, rdash=None):
        s_ = polyline(g3_pts(fx, fv, lambda k: s * f(k), 0.0, kend), scol, 2.4, sdash)
        s_ += line((fx(0), fv(0)), (fx(kend), fv(nd * kend)), rcol, 2.2, rdash)
        s_ += rt(fx(kend) + 5, fv(nd * kend) + 4, rlab, 12, rcol)
        s_ += rt(fx(kend) + 5, fv(s * f(kend)) + 4, slab, 12, scol)
        return s_

    b = header('Fasediagram med kapital per arbeider vannrett og investering og utvanning per '
               'arbeider loddrett. En konkav, stigende kurve fra origo viser sparingen per '
               'arbeider, og en rett stråle fra origo viser utvanningen. De krysser i punkt A, '
               'og en stiplet hjelpelinje går ned til likevektsverdien for kapital per arbeider. '
               'Langs den vannrette aksen peker en pil mot høyre til venstre for likevekten og en '
               'pil mot venstre til høyre for den, så likevekten nås fra begge sider.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += g3_fase_base(fx, fv, S_B, ND_B, KE)
    b += g3_eq(fx, fv, K_B, ND_B * K_B, 'A', (9, -9), 'k*')
    b += g3_axarrow(fx, 1.2, K_B - 1.0, lab='Δk > 0')
    b += g3_axarrow(fx, KE - 1.2, K_B + 1.0, lab='Δk < 0')
    save('solow-fasediagram', b)

    # =========================== 1.2 fasediagram med produktfunksjonen =====
    fx2, fv2 = g3_map(KE, f2(KE))
    b = header('Samme fasediagram, men med produktfunksjonen tegnet inn øverst. Nederst ligger '
               'sparekurven og den rette utvanningsstrålen, som krysser i punkt A over '
               'likevektsverdien for kapital per arbeider. Rett over A ligger produksjonen per '
               'arbeider i likevekt, markert med en stiplet hjelpelinje bort til den loddrette '
               'aksen. Den loddrette avstanden mellom produktfunksjonen og sparekurven i '
               'likevekten er skravert og merket konsum per arbeider, altså én minus spareraten '
               'ganger produksjonen per arbeider.')
    b += axes('k', 'produksjon, investering og utvanning per arbeider',
              ylab_italic=False, ylab_size=10.5)
    b += polyline(g3_pts(fx2, fv2, f2, 0.0, KE), PUR, 2.4)
    b += rt(fx2(KE) + 5, fv2(f2(KE)) + 4, 'f(k)', 13, PUR)
    b += g3_fase_base(fx2, fv2, S_B, ND_B, KE)
    # konsum per arbeider: skravert bånd mellom f(k*) og s f(k*)
    xk = fx2(K_B)
    b += (f'  <rect x="{xk-6:.1f}" y="{fv2(f2(K_B)):.1f}" width="12" '
          f'height="{fv2(S_B*f2(K_B))-fv2(f2(K_B)):.1f}" fill="{PUR}" opacity="0.14"/>\n')
    b += darrow((xk, fv2(f2(K_B)) + 2), (xk, fv2(S_B * f2(K_B)) - 2), INK)
    b += rt(xk + 12, (fv2(f2(K_B)) + fv2(S_B * f2(K_B))) / 2 - 4, 'konsum per arbeider', 11, INK, False)
    b += rt(xk + 12, (fv2(f2(K_B)) + fv2(S_B * f2(K_B))) / 2 + 10, '(1 − s) f(k*)', 11, INK)
    b += line((OX, fv2(f2(K_B))), (xk, fv2(f2(K_B))), GREY, 1.2, '5 4')
    b += dot(xk, fv2(f2(K_B)), PUR, 3.6)
    b += rt(OX - 34, fv2(f2(K_B)) + 5, 'y*', 13)
    b += g3_eq(fx2, fv2, K_B, ND_B * K_B, 'A', (9, 12), 'k*')
    save('solow-fasediagram-med-produksjon', b)

    # ======================================== 1.2 tidsbanen (k og y mot k*) =
    K0_T = 3.0
    kpath = g3_path(K0_T, S_B, ND_B, steps=64)
    assert kpath[-1] < K_B and kpath[-1] > K_B - 0.5, kpath[-1]
    dk = [kpath[j + 1] - kpath[j] for j in range(len(kpath) - 1)]
    assert all(d > 0 for d in dk), 'banen må stige hele veien'
    assert all(dk[j] > dk[j + 1] for j in range(len(dk) - 1)), 'konkav: tilveksten må avta'
    ypath = [f2(k) for k in kpath]
    dy = [ypath[j + 1] - ypath[j] for j in range(len(ypath) - 1)]
    assert all(dy[j] > dy[j + 1] for j in range(len(dy) - 1)), 'også y-banen må være konkav'

    TN = len(kpath) - 1
    def tx(j): return OX + (370.0 - OX) * j / TN
    YK, YY = OY - 100.0, OY - 240.0        # asymptotenivå for k og y (ulike skalaer)
    def kv_(k): return OY - 100.0 * k / K_B
    def yv_(y): return OY - 240.0 * y / f2(K_B)
    assert yv_(ypath[0]) < YK - 30, 'y-banen skal starte klart over k-asymptoten'

    b = header('Tidsbanediagram med tiden vannrett og nivå loddrett. To stigende, konkave kurver '
               'starter lavt til venstre og flater ut mot hver sin vannrette stiplede asymptote: '
               'den nedre er kapital per arbeider mot likevektsverdien, den øvre er produksjon '
               'per arbeider mot produksjonen i likevekt. Begge er brattest helt i starten, og en '
               'pil peker på den bratte delen med teksten at veksten er sterkest i starten og '
               'avtar.')
    b += axes('t', 'nivå', ylab_italic=False, ylab_size=13)
    b += line((OX, YK), (372, YK), GREY, 1.3, '6 4')
    b += line((OX, YY), (372, YY), GREY, 1.3, '6 4')
    b += rt(OX - 34, YK + 5, 'k*', 13)
    b += rt(OX - 40, YY + 5, 'y*', 13)
    b += rt(378, YK + 4, 'k', 13, BLUE)
    b += rt(378, YY + 4, 'y', 13, PUR)
    b += polyline([(tx(j), kv_(kpath[j])) for j in range(TN + 1)], BLUE, 2.4)
    b += polyline([(tx(j), yv_(ypath[j])) for j in range(TN + 1)], PUR, 2.4)
    b += arrow((tx(25), 164), (tx(6) + 4, yv_(ypath[6]) + 10), GREY, 1.5)
    b += rt(tx(26), 168, 'veksten er sterkest', 10.5, GREY, False)
    b += rt(tx(26), 180, 'i starten og avtar', 10.5, GREY, False)
    save('solow-tidsbane', b)

    # ================================================ 1.3 skift i spareraten
    KE2 = 18.0
    fx3, fv3 = g3_map(KE2, ND_B * KE2)
    b = header('Fasediagram med kapital per arbeider vannrett. Utvanningsstrålen fra origo ligger '
               'i ro. Den opprinnelige, stiplede sparekurven krysser strålen i punkt A, og den nye '
               'sparekurven, som ligger over den gamle overalt bortsett fra i origo, krysser '
               'strålen i punkt B lenger til høyre. Begge punktene har stiplede hjelpelinjer ned '
               'til aksen, og en pil langs aksen peker fra den gamle mot den nye likevekten.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += polyline(g3_pts(fx3, fv3, lambda k: S0 * f2(k), 0.0, KE2), BLUE, 2.2, '6 4')
    b += polyline(g3_pts(fx3, fv3, lambda k: S1 * f2(k), 0.0, KE2), BLUE, 2.4)
    b += line((fx3(0), fv3(0)), (fx3(KE2), fv3(ND_B * KE2)), GRN, 2.2)
    b += rt(fx3(KE2) + 5, fv3(ND_B * KE2) + 4, '(n+δ)k', 12, GRN)
    b += rt(fx3(KE2) + 5, fv3(S1 * f2(KE2)) + 4, 's_{1} f(k)', 12, BLUE)
    b += rt(fx3(KE2) + 5, fv3(S0 * f2(KE2)) + 6, 's_{0} f(k)', 12, BLUE)
    b += arrow((fx3(3.0), fv3(S0 * f2(3.0)) - 4), (fx3(3.0), fv3(S1 * f2(3.0)) + 4), BLUE, 1.5)
    b += rt(fx3(3.0) - 5, fv3(S0 * f2(3.0)) + 16, 's opp', 11, BLUE, anchor='end')
    b += g3_eq(fx3, fv3, KS0, ND_B * KS0, 'A', (-19, -8), 'k_{0}*')
    b += g3_eq(fx3, fv3, KS1, ND_B * KS1, 'B', (9, -9), 'k_{1}*')
    b += g3_axarrow(fx3, KS0 + 0.5, KS1 - 0.4, lab='Δk > 0 i hele intervallet')
    save('solow-skift-s', b)

    # =============================== 1.3 tidsbane for konsum ved s-skift ====
    # variant 1 (under gullregelen): s 0,25 -> 0,35 gir varig HØYERE forbruk
    cA0 = (1 - S0) * f2(KS0)
    cA1 = (1 - S1) * f2(KS1)
    assert S1 < S_GULL and cA1 > cA0, (cA0, cA1)
    pathA = g3_path(KS0, S1, ND_B, steps=60)
    cAs = [(1 - S1) * f2(k) for k in pathA]
    assert cAs[0] < cA0, 'forbruket faller brått i sjokkøyeblikket'
    assert all(cAs[j + 1] > cAs[j] for j in range(len(cAs) - 1)), 'deretter stigende bane'
    # variant 2 (over gullregelen): s 0,60 -> 0,75 gir varig LAVERE forbruk
    SB0, SB1 = 0.60, 0.75
    KB0, KB1 = g3_kstar(SB0, ND_B), g3_kstar(SB1, ND_B)
    cB0, cB1 = (1 - SB0) * f2(KB0), (1 - SB1) * f2(KB1)
    assert SB0 > S_GULL and cB1 < cB0, (cB0, cB1)
    pathB = g3_path(KB0, SB1, ND_B, steps=60)
    cBs = [(1 - SB1) * f2(k) for k in pathB]
    assert cBs[0] < cB1 and all(cBs[j + 1] > cBs[j] for j in range(len(cBs) - 1))
    iA = [c / cA0 for c in cAs]                 # indeksert til det gamle nivået
    iB = [c / cB0 for c in cBs]
    assert iA[-1] > 1.0 > iA[0] and iB[-1] < 1.0 and iB[0] < iB[-1]

    T0 = 16
    NT = T0 + len(iA)
    def ux2(j): return OX + (368.0 - OX) * j / (NT - 1)
    def cv(v): return OY - 190.0 * v / 1.30
    b = header('Tidsbane for konsum per arbeider når spareraten øker varig. Til venstre for '
               'skifttidspunktet ligger konsumet på en vannrett linje. I skifttidspunktet faller '
               'det loddrett, og deretter stiger det langs en konkav bane mot en ny vannrett '
               'asymptote. Figuren viser to varianter: i den ene ligger den nye asymptoten over '
               'det gamle nivået, i den andre under. Hvilken som gjelder, avhenger av om '
               'økonomien lå under eller over gullregelnivået før økningen.')
    b += axes('t', 'konsum per arbeider (1 − s) f(k)', ylab_italic=False, ylab_size=11)
    b += line((OX, cv(1.0)), (368, cv(1.0)), GREY, 1.2, '6 4')
    b += rt(OX - 46, cv(1.0) + 5, 'gammelt', 10, GREY, False)
    b += rt(OX - 46, cv(1.0) + 16, 'nivå', 10, GREY, False)
    b += line((ux2(T0), OY), (ux2(T0), 44), GREY, 1.2, '5 4')
    b += rt(ux2(T0) - 8, OY + 17, 't_{0}', 13)
    # felles nivå fram til t0
    b += line((ux2(0), cv(1.0)), (ux2(T0), cv(1.0)), INK, 2.4)
    # variant A
    b += line((ux2(T0), cv(1.0)), (ux2(T0), cv(iA[0])), BLUE, 2.4)
    b += polyline([(ux2(T0 + j), cv(iA[j])) for j in range(len(iA))], BLUE, 2.4)
    b += line((ux2(T0), cv(iA[-1])), (368, cv(iA[-1])), BLUE, 1.2, '4 4')
    b += rt(372, cv(iA[-1]) - 4, 'nytt nivå:', 10.5, BLUE, False)
    b += rt(372, cv(iA[-1]) + 8, 'høyere', 10.5, BLUE, False)
    # variant B (litt forskjøvet i t0 slik at begge de loddrette fallene synes)
    b += line((ux2(T0) + 4, cv(1.0)), (ux2(T0) + 4, cv(iB[0])), ORG, 2.2)
    b += polyline([(ux2(T0 + j) + 4, cv(iB[j])) for j in range(len(iB))], ORG, 2.2, '7 4')
    b += line((ux2(T0), cv(iB[-1])), (368, cv(iB[-1])), ORG, 1.2, '4 4')
    b += rt(372, cv(iB[-1]) - 4, 'nytt nivå:', 10.5, ORG, False)
    b += rt(372, cv(iB[-1]) + 8, 'lavere', 10.5, ORG, False)
    b += rt(ux2(T0 + 7), cv(iA[-1]) - 10, 'lå under gullregelnivået', 10.5, BLUE, False)
    b += rt(ux2(T0 + 7), cv(iB[0]) + 18, 'lå over gullregelnivået', 10.5, ORG, False)
    b += rt(ux2(T0) + 6, cv(0.40), 'begge faller brått i t_{0}', 10.5, GREY, False)
    save('solow-skift-s-tidsbane', b)

    # ============================== 1.3 skift i n og i delta (samme figur) ==
    def g3_stralesift(rlab0, rlab1, note, alt, ylab='investering og utvanning per arbeider'):
        fxa, fva = g3_map(KE2, ND1 * KE2)
        s_ = axes('k', ylab, ylab_italic=False, ylab_size=11)
        s_ += polyline(g3_pts(fxa, fva, lambda k: S_B * f2(k), 0.0, KE2), BLUE, 2.4)
        s_ += rt(fxa(KE2) + 5, fva(S_B * f2(KE2)) + 4, 's f(k)', 12, BLUE)
        s_ += line((fxa(0), fva(0)), (fxa(KE2), fva(ND0 * KE2)), GRN, 2.2, '6 4')
        s_ += line((fxa(0), fva(0)), (fxa(KE2 * ND0 / ND1), fva(ND0 * KE2)), GRN, 2.4)
        s_ += rt(fxa(KE2) + 5, fva(ND0 * KE2) + 4, rlab0, 12, GRN)
        s_ += rt(fxa(KE2 * ND0 / ND1) - 2, fva(ND0 * KE2) - 8, rlab1, 12, GRN, anchor='end')
        s_ += g3_eq(fxa, fva, KN0, ND0 * KN0, 'A', (9, 12), 'k_{0}*')
        s_ += g3_eq(fxa, fva, KN1, ND1 * KN1, 'B', (-19, -8), 'k_{1}*')
        s_ += g3_axarrow(fxa, KN0 - 0.4, KN1 + 0.4, lab='Δk < 0 i hele intervallet')
        s_ += rt(fxa(1.0), 46, note, 10.5, GREY, False)
        return header(alt) + s_

    b = g3_stralesift(
        '(n_{0}+δ)k', '(n_{1}+δ)k', 'strålen svinger opp om origo',
        'Fasediagram med kapital per arbeider vannrett. Sparekurven ligger i ro. To rette stråler '
        'går ut fra origo: den opprinnelige, stiplede, og en ny og brattere stråle som svarer til '
        'høyere befolkningsvekst. Den gamle likevekten A ligger der sparekurven møter den slake '
        'strålen, den nye likevekten B ligger lenger til venstre der sparekurven møter den bratte. '
        'Begge har stiplede hjelpelinjer ned til aksen, og en pil langs aksen peker mot venstre.')
    save('solow-skift-n', b)

    b = g3_stralesift(
        '(n+δ_{0})k', '(n+δ_{1})k', 'samme figur som ved høyere n — helningen er n+δ',
        'Fasediagram med kapital per arbeider vannrett. Sparekurven ligger i ro. To rette stråler '
        'fra origo: den opprinnelige, stiplede, og en ny og brattere stråle som svarer til høyere '
        'kapitalslit. Den gamle likevekten A ligger der sparekurven møter den slake strålen, den '
        'nye likevekten B ligger lenger til venstre. Figuren er den samme som for høyere '
        'befolkningsvekst, fordi helningen på strålen er summen av befolkningsvekst og '
        'kapitalslit.')
    save('solow-skift-delta', b)

    # ================================= 1.4 skift i produktivitetsveksten ===
    b = g3_stralesift(
        '(n+g_{0}+δ)k', '(n+g_{1}+δ)k', 'k måles per effektivitetsenhet',
        'Fasediagram der den vannrette aksen er kapital per effektivitetsenhet. Sparekurven '
        'ligger i ro. To rette stråler fra origo: den opprinnelige, stiplede, med summen av '
        'befolkningsvekst, opprinnelig produktivitetsvekst og kapitalslit, og en ny og brattere '
        'stråle med høyere produktivitetsvekst. Den gamle likevekten A ligger til høyre for den '
        'nye likevekten B, begge med stiplede hjelpelinjer ned til aksen, og en pil langs aksen '
        'peker mot venstre.',
        ylab='investering og utvanning per effektivitetsenhet')
    save('solow-skift-g', b)

    # ============================ 1.4 tidsbane med logaritmisk akse ========
    G0, G1G = 0.02, 0.04
    NB, DEL = 0.01, 0.05
    assert near(NB + G0 + DEL, 0.08) and near(NB + G1G + DEL, 0.10)
    kg0 = g3_kstar(S_B, NB + G0 + DEL)
    kg1 = g3_kstar(S_B, NB + G1G + DEL)
    assert near(kg0, 14.0625) and near(kg1, 9.0), (kg0, kg1)
    gp = g3_path(kg0, S_B, NB + G1G + DEL, steps=52)
    assert all(gp[j + 1] < gp[j] for j in range(len(gp) - 1)), 'k per effektivitetsenhet faller'
    lnyt = [G1G * j + 0.5 * math.log(gp[j] / kg0) for j in range(len(gp))]
    slopes = [lnyt[j + 1] - lnyt[j] for j in range(len(lnyt) - 1)]
    assert G0 < slopes[0] < G1G, slopes[0]
    assert all(slopes[j] < slopes[j + 1] for j in range(len(slopes) - 1)), 'helningen skal stige'
    assert abs(slopes[-1] - G1G) < 0.002, slopes[-1]
    TB = 22
    NG = TB + len(lnyt)
    def gx(j): return OX + (366.0 - OX) * j / (NG - 1)
    LO = -G0 * TB - 0.10
    def gv(l): return OY - (OY - 46.0) * (l - LO) / (lnyt[-1] - LO)
    b = header('Tidsbane med logaritmen av produksjonen per arbeider loddrett og tiden vannrett. '
               'Fram til tidspunktet der produktivitetsveksten øker, er banen en rett linje med '
               'helning lik den opprinnelige produktivitetsveksten. Fra det tidspunktet knekker '
               'banen oppover: den er først bare litt brattere, deretter stadig brattere, og '
               'nærmer seg en rett stiplet linje med helning lik den nye, høyere '
               'produktivitetsveksten. Det er ingen loddrette hopp i banen, bare et brudd i '
               'helningen.')
    b += axes('t', 'ln y  (produksjon per arbeider)', ylab_italic=False, ylab_size=11)
    b += line((gx(0), gv(-G0 * TB)), (gx(TB), gv(0.0)), BLUE, 2.4)
    b += line((gx(TB), gv(0.0)), (gx(NG - 1), gv(G0 * (NG - 1 - TB))), BLUE, 1.6, '6 4')
    b += rt(gx(NG - 1) - 4, gv(G0 * (NG - 1 - TB)) - 9, 'helning g_{0}', 11.5, BLUE, anchor='end')
    lasym = lnyt[-1] - G1G * (len(lnyt) - 1)
    b += line((gx(TB), gv(lasym)), (gx(NG - 1), gv(lnyt[-1])), ORG, 1.8, '7 4')
    b += rt(gx(NG - 1) - 2, gv(lnyt[-1]) - 23, 'helning g_{1}', 11.5, ORG, anchor='end')
    b += rt(gx(NG - 1) - 2, gv(lnyt[-1]) - 11, '(etter økningen i g)', 10.5, ORG, False, anchor='end')
    b += polyline([(gx(TB + j), gv(lnyt[j])) for j in range(len(lnyt))], PUR, 2.6)
    b += line((gx(TB), OY), (gx(TB), 52), GREY, 1.2, '5 4')
    b += rt(gx(TB) - 8, OY + 17, 't_{0}', 13)
    b += dot(gx(TB), gv(0.0), PUR, 4)
    b += rt(gx(TB) + 8, gv(0.0) + 20, 'ingen hopp i nivået —', 10.5, GREY, False)
    b += rt(gx(TB) + 8, gv(0.0) + 32, 'bare knekk i helningen', 10.5, GREY, False)
    save('solow-tidsbane-g', b)

    # ================================================== 1.5 gullregelen ====
    KEG = 12.0
    fxg, fvg = g3_map(KEG, f2(KEG))
    b = header('Fasediagram med kapital per arbeider vannrett. Øverst ligger produktfunksjonen, '
               'konkav og stigende. Fra origo går den rette utvanningsstrålen, og under '
               'produktfunksjonen ligger sparekurven. En stiplet tangent til produktfunksjonen er '
               'parallell med strålen; berøringspunktet ligger over gullregelverdien for kapital '
               'per arbeider, markert med en stiplet hjelpelinje ned til aksen. Den loddrette '
               'avstanden mellom produktfunksjonen og strålen i dette punktet er markert med en '
               'dobbeltpil og merket konsum per arbeider, og den er størst nettopp her.')
    b += axes('k', 'produksjon, investering og utvanning per arbeider',
              ylab_italic=False, ylab_size=10.5)
    b += polyline(g3_pts(fxg, fvg, f2, 0.0, KEG), PUR, 2.4)
    b += rt(fxg(KEG) + 5, fvg(f2(KEG)) + 4, 'f(k)', 13, PUR)
    b += line((fxg(0), fvg(0)), (fxg(KEG), fvg(ND_G * KEG)), GRN, 2.2)
    b += rt(fxg(KEG) + 5, fvg(ND_G * KEG) + 4, '(n+δ)k', 12, GRN)
    b += polyline(g3_pts(fxg, fvg, lambda k: S_GULL * f2(k), 0.0, KEG), BLUE, 2.4)
    b += rt(fxg(KEG) + 5, fvg(S_GULL * f2(KEG)) + 4, 's^{gull} f(k)', 12, BLUE)
    # tangenten: y = c^gull + (n+delta)k
    b += line((fxg(0.6), fvg(C_GULL + ND_G * 0.6)), (fxg(11.2), fvg(C_GULL + ND_G * 11.2)),
              INK, 1.6, '7 4')
    b += rt(fxg(11.2) - 2, fvg(C_GULL + ND_G * 11.2) - 8, 'tangent: f′(k) = n+δ', 11.5, INK, anchor='end')
    xg = fxg(K_GULL)
    b += line((xg, fvg(f2(K_GULL))), (xg, OY), GREY, 1.2, '5 4')
    b += dot(xg, fvg(f2(K_GULL)), PUR, 4)
    b += dot(xg, fvg(ND_G * K_GULL), GRN, 4)
    b += darrow((xg, fvg(f2(K_GULL)) + 3), (xg, fvg(ND_G * K_GULL) - 3), INK)
    b += rt(xg + 11, fvg(f2(K_GULL)) + 19, 'konsum per', 11, INK, False)
    b += rt(xg + 11, fvg(f2(K_GULL)) + 31, 'arbeider — størst her', 11, INK, False)
    b += rt(xg - 16, OY + 17, 'k^{gull}', 13)
    save('solow-gullregelen', b)

    # ================================= 1.5 konsum som funksjon av s ========
    def sx4(s): return OX + 300.0 * s
    def sv4(c): return OY - 200.0 * c / (C_GULL * 1.18)
    b = header('Kurve med spareraten vannrett fra null til én og langsiktig konsum per arbeider '
               'loddrett. Kurven starter i origo, stiger til et toppunkt ved gullregel-spareraten '
               'og faller tilbake til null når spareraten er én. Toppunktet er markert med '
               'stiplede hjelpelinjer til begge akser. Området til venstre for toppen er merket '
               'for lite sparing, området til høyre for mye sparing.')
    b += axes('s', 'langsiktig konsum per arbeider c*(s)', ylab_italic=False, ylab_size=11)
    b += polyline([(sx4(0.002 * j), sv4(c_of_s(0.002 * j))) for j in range(1, 500)], BLUE, 2.6)
    b += line((sx4(S_GULL), sv4(C_GULL)), (sx4(S_GULL), OY), GREY, 1.2, '5 4')
    b += line((OX, sv4(C_GULL)), (sx4(S_GULL), sv4(C_GULL)), GREY, 1.2, '5 4')
    b += dot(sx4(S_GULL), sv4(C_GULL))
    b += rt(sx4(S_GULL) - 22, OY + 17, 's^{gull}', 13)
    b += rt(OX - 40, sv4(C_GULL) + 5, 'c^{gull}', 12)
    b += rt(sx4(0.0) + 8, OY + 17, '0', 12, INK, False)
    b += rt(sx4(1.0) - 4, OY + 17, '1', 12, INK, False)
    b += line((sx4(1.0), OY), (sx4(1.0), OY - 8), AX, 1.4)
    b += rt(sx4(0.20), 90, 'for lite sparing', 11.5, GREY, False, anchor='middle')
    b += rt(sx4(0.80), 90, 'for mye sparing', 11.5, GREY, False, anchor='middle')
    b += arrow((sx4(0.13), 104), (sx4(0.13), sv4(c_of_s(0.13)) - 8), GREY, 1.4)
    b += arrow((sx4(0.87), 104), (sx4(0.87), sv4(c_of_s(0.87)) - 8), GREY, 1.4)
    save('solow-konsum-mot-s', b)

    # =================================== 1.6 trappetrinnssparing (to likev.)
    KET = 26.0

    def g3_trapp(fxt, fvt, kend, oy=OY, with_f=False):
        """Sparekurve med hopp i kbar + stråle; returnerer tegningen."""
        s_ = polyline(g3_pts(fxt, fvt, lambda k: SL * f3(k), 0.0, KBAR), BLUE, 2.4)
        s_ += polyline(g3_pts(fxt, fvt, lambda k: SH * f3(k), KBAR, kend), BLUE, 2.4)
        s_ += line((fxt(KBAR), fvt(SL * f3(KBAR))), (fxt(KBAR), fvt(SH * f3(KBAR))), BLUE, 1.8, '4 3')
        s_ += line((fxt(0), fvt(0)), (fxt(kend), fvt(ND_T * kend)), GRN, 2.2)
        s_ += rt(fxt(kend) + 5, fvt(ND_T * kend) + 4, '(n+δ)k', 12, GRN)
        s_ += rt(fxt(KBAR) - 6, fvt(SL * f3(KBAR)) + 15, 's_{L} f(k)', 12, BLUE, anchor='end')
        s_ += rt(fxt(kend) + 5, fvt(SH * f3(kend)) + 4, 's_{H} f(k)', 12, BLUE)
        s_ += g3_eq(fxt, fvt, KL, ND_T * KL, 'A', (-19, -8), 'k_{L}*', oy=oy)
        s_ += g3_eq(fxt, fvt, KH, ND_T * KH, 'B', (9, -9), 'k_{H}*', oy=oy)
        s_ += line((fxt(KBAR), fvt(ND_T * KBAR)), (fxt(KBAR), oy), GREY, 1.2, '5 4')
        s_ += odot(fxt(KBAR), oy)
        s_ += rt(fxt(KBAR) - 12, oy + 17, 'k̄', 14)
        return s_

    fxt, fvt = g3_map(KET, ND_T * KET)
    b = header('Fasediagram med kapital per arbeider vannrett. Utvanningsstrålen er en rett linje '
               'fra origo. Sparekurven er delt i to: en lav konkav kurve fra origo fram til '
               'terskelen, et loddrett hopp opp i terskelen, og deretter en høyere konkav kurve. '
               'Strålen krysses tre steder: den lave kurven krysser i den stabile lavlikevekten A, '
               'terskelen er markert med åpen sirkel som ustabilt vippepunkt, og den høye kurven '
               'krysser i den stabile høylikevekten B. Under aksen står fire piler: mot høyre '
               'under lavlikevekten, mot venstre mellom lavlikevekten og terskelen, mot høyre '
               'mellom terskelen og høylikevekten, og mot venstre til høyre for høylikevekten.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += g3_trapp(fxt, fvt, KET)
    b += g3_axarrow(fxt, 0.5, KL - 0.5)
    b += g3_axarrow(fxt, KBAR - 0.5, KL + 0.5)
    b += g3_axarrow(fxt, KBAR + 0.5, KH - 0.6)
    b += g3_axarrow(fxt, KET - 0.5, KH + 0.6)
    b += rt(fxt(KBAR), OY + 46, 'vippepunkt', 10.5, GREY, False, anchor='middle')
    save('solow-trappetrinn-s', b)

    # ===================================== 1.6 endogen befolkningsvekst ====
    KEE = 26.0
    fxe, fve = g3_map(KEE, max(NDL * KEE, NDH * KEBAR))

    def g3_endogen(fxe, fve, kend, oy=OY, labels=True):
        s_ = polyline(g3_pts(fxe, fve, lambda k: S_E * f3(k), 0.0, kend), BLUE, 2.4)
        s_ += rt(fxe(kend) + 5, fve(S_E * f3(kend)) + 4, 's f(k)', 12, BLUE)
        s_ += line((fxe(0), fve(0)), (fxe(KEBAR), fve(NDH * KEBAR)), GRN, 2.4)
        s_ += line((fxe(0), fve(0)), (fxe(kend), fve(NDL * kend)), GRN, 2.4)
        s_ += line((fxe(KEBAR), fve(NDH * KEBAR)), (fxe(KEBAR), fve(NDL * KEBAR)), GRN, 1.8, '4 3')
        s_ += rt(fxe(KEBAR) - 4, fve(NDH * KEBAR) - 8, '(n_{H}+δ)k', 12, GRN, anchor='end')
        s_ += rt(fxe(kend) + 5, fve(NDL * kend) + 4, '(n_{L}+δ)k', 12, GRN)
        s_ += g3_eq(fxe, fve, KEL, NDH * KEL, 'A', (-19, -8), 'k_{L}*', oy=oy)
        s_ += g3_eq(fxe, fve, KEH, NDL * KEH, 'B', (9, -9), 'k_{H}*', oy=oy)
        s_ += line((fxe(KEBAR), fve(NDL * KEBAR)), (fxe(KEBAR), oy), GREY, 1.2, '5 4')
        s_ += odot(fxe(KEBAR), oy)
        s_ += rt(fxe(KEBAR) - 12, oy + 17, 'k̄', 14)
        return s_

    b = header('Fasediagram med kapital per arbeider vannrett. Sparekurven er én sammenhengende '
               'konkav kurve fra origo. Utvanningslinjen er knekt: et bratt stykke fra origo fram '
               'til terskelen, et loddrett fall i terskelen, og deretter et slakere stykke som '
               'også peker mot origo. Sparekurven møter den bratte delen i den stabile '
               'lavlikevekten A og den slake delen i den stabile høylikevekten B. Terskelen er '
               'markert med åpen sirkel og er ustabil. Under aksen står fire piler: mot høyre '
               'under lavlikevekten, mot venstre mellom lavlikevekten og terskelen, mot høyre '
               'mellom terskelen og høylikevekten, og mot venstre til høyre for høylikevekten.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += g3_endogen(fxe, fve, KEE)
    b += g3_axarrow(fxe, 0.5, KEL - 0.5)
    b += g3_axarrow(fxe, KEBAR - 0.5, KEL + 0.5)
    b += g3_axarrow(fxe, KEBAR + 0.5, KEH - 0.6)
    b += g3_axarrow(fxe, KEE - 0.5, KEH + 0.6)
    b += rt(fxe(KEBAR), OY + 46, 'vippepunkt', 10.5, GREY, False, anchor='middle')
    b += rt(fxe(1.0), 52, 'befolkningsveksten faller når k passerer k̄', 10.5, GREY, False)
    save('solow-endogen-n', b)

    # ============================= 1.6 forbruk i begge likevekter ==========
    fxc, fvc = g3_map(KET, f3(KET))
    b = header('Samme fasediagram med trappetrinnssparing, men med produktfunksjonen tegnet inn '
               'øverst. To loddrette dobbeltpiler viser konsumet per arbeider i hver av de to '
               'stabile likevektene, altså avstanden mellom produktfunksjonen og '
               'utvanningsstrålen. Pilen i lavlikevekten er tydelig lengre enn pilen i '
               'høylikevekten: i det tilfellet som er tegnet, gir lavlikevekten høyest konsum, '
               'fordi den høye spareraten fører økonomien langt over gullregelnivået.')
    b += axes('k', 'produksjon, investering og utvanning per arbeider',
              ylab_italic=False, ylab_size=10.5)
    b += polyline(g3_pts(fxc, fvc, f3, 0.0, KET), PUR, 2.4)
    b += rt(fxc(KET) + 5, fvc(f3(KET)) + 4, 'f(k)', 13, PUR)
    b += g3_trapp(fxc, fvc, KET)
    for k, lab, dx in ((KL, 'konsum i lavlikevekten', 10), (KH, 'konsum i høylikevekten', -10)):
        xx = fxc(k)
        b += darrow((xx, fvc(f3(k)) + 3), (xx, fvc(ND_T * k) - 3), INK)
        b += dot(xx, fvc(f3(k)), PUR, 3.6)
        b += rt(xx + dx, fvc(f3(k)) - 10, lab, 10.5, INK, False,
                anchor='start' if dx > 0 else 'end')
    b += rt(fxc(1.0), 46, 'tegnet med s_{H} godt over gullregelnivået', 10.5, GREY, False)
    save('solow-felle-konsum', b)

    # ============================================ 1.7 drilloversikten ======
    W7, H7 = 560, 520
    steps7 = [
        ['1  Oversett egenskapene: y = f(k),', 'Δk = s f(k) − (n+δ)k'],
        ['2  Tolk hvert ledd i ord', '(her ligger flest poeng)'],
        ['3  Fasediagram: marker k*,', 'argumenter for stabilitet'],
        ['4  Tidsbane: k og y mot asymptotene'],
        ['5  Presiser: per arbeider konstant,', 'totalt vokser med n'],
        ['6  Kjør skiftet: figur + kort og', 'lang sikt + mekanisme'],
        ['7  Møt utvidelsen: gullregel /', 'to likevekter / g — flagg det ubestemte'],
    ]
    b = header('Flytskjema med sju bokser i en loddrett kjede, forbundet med piler nedover. Boks '
               'én: oversett egenskapene til produktfunksjonen og bevegelsesligningen. Boks to: '
               'tolk hvert ledd i ord, det er der flest poeng ligger. Boks tre: tegn '
               'fasediagrammet, marker likevekten og argumenter for stabilitet. Boks fire: tegn '
               'tidsbanen for kapital og produksjon per arbeider mot asymptotene. Boks fem: '
               'presiser at størrelsene per arbeider er konstante mens totalstørrelsene vokser '
               'med befolkningsveksten. Boks seks: kjør skiftet med figur, skille mellom kort og '
               'lang sikt og mekanismen i ord. Boks sju: møt utvidelsen — gullregelen, to '
               'likevekter eller produktivitetsvekst — og flagg eksplisitt det som er ubestemt.',
               W7, H7)
    b += rt(W7 / 2, 30, 'Løsningsoppskriften i sju steg', 15, INK, False, True, anchor='middle')
    cy0, dcy = 76, 62
    for j, lines in enumerate(steps7):
        cy = cy0 + j * dcy
        col = ORG if j in (2, 3) else INK
        b += box(W7 / 2, cy, 470, 46 if len(lines) > 1 else 34, lines, col, 12.5,
                 '#fdf6e6' if j in (2, 3) else '#f4f6f8')
        if j:
            b += arrow((W7 / 2, cy - dcy + 24), (W7 / 2, cy - 24), GREY, 1.6)
    b += rt(W7 / 2, H7 - 12, 'stegene 3 og 4 er de to figurene sensor spør etter',
            11, GREY, False, anchor='middle')
    save('solow-drill-oversikt', b)

    # ===================================== prøve 1.B: fasediagram med k_0 ==
    K0_P = 3.0
    assert S_B * f2(K0_P) > ND_B * K0_P, 'startpunktet må ligge under k*'
    GAP = S_B * f2(K0_P) - ND_B * K0_P
    assert GAP > 0 and near(GAP, 0.3 * math.sqrt(3.0) - 0.3)
    b = header('Fasediagram med kapital per arbeider vannrett og investering og utvanning per '
               'arbeider loddrett. Den konkave sparekurven og den rette utvanningsstrålen krysser '
               'i punkt A over likevektsverdien. Langt til venstre for likevekten er startpunktet '
               'markert på aksen, med en loddrett stiplet linje opp til begge kurvene. Den '
               'loddrette avstanden mellom sparekurven og strålen der er markert med en dobbeltpil '
               'og merket at endringen i kapital per arbeider er positiv, og en pil langs aksen '
               'peker mot høyre, mot likevekten.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += g3_fase_base(fx, fv, S_B, ND_B, KE)
    b += g3_eq(fx, fv, K_B, ND_B * K_B, 'A', (9, -9), 'k*')
    x0 = fx(K0_P)
    b += line((x0, OY), (x0, fv(S_B * f2(K0_P)) - 4), GREY, 1.3, '5 4')
    b += dot(x0, fv(S_B * f2(K0_P)), BLUE, 3.6)
    b += dot(x0, fv(ND_B * K0_P), GRN, 3.6)
    b += darrow((x0, fv(ND_B * K0_P) - 2), (x0, fv(S_B * f2(K0_P)) + 2), INK)
    b += rt(x0 - 7, fv(S_B * f2(K0_P)) - 9, 'Δk > 0', 12.5, INK, anchor='end')
    b += rt(x0 - 10, OY + 17, 'k_{0}', 13)
    b += g3_axarrow(fx, K0_P, K_B - 0.8, lab='økonomien vandrer mot A')
    save('solow-prove-1b-fasediagram', b)

    # ============== prøve 1.C: delta-skift + tidsbane for y (to paneler) ===
    W8, H8, POY8 = 880, 380, 320
    dpath = g3_path(KN0, S_B, ND1, steps=60)
    assert all(dpath[j + 1] < dpath[j] for j in range(len(dpath) - 1)), 'k faller mot ny likevekt'
    assert dpath[-1] > KN1 - 0.05
    dy2 = [f2(k) for k in dpath]
    assert near(dy2[0], f2(KN0)) and dy2[-1] < f2(KN0)
    dd = [dy2[j] - dy2[j + 1] for j in range(len(dy2) - 1)]
    assert all(dd[j] > dd[j + 1] for j in range(len(dd) - 1)), 'fallet skal avta (ingen hopp)'

    b = header('To paneler side ved side. Venstre panel er et fasediagram med kapital per arbeider '
               'vannrett: sparekurven ligger i ro, og en ny og brattere utvanningsstråle flytter '
               'likevekten fra A til B, som ligger lenger til venstre. Høyre panel er en tidsbane '
               'med tiden vannrett og produksjon per arbeider loddrett: banen er vannrett fram til '
               'skifttidspunktet og faller deretter jevnt og uten loddrett hopp mot en ny, lavere '
               'vannrett asymptote.', W8, H8)
    b += rt(220, 34, 'Fasediagrammet: strålen svinger opp', 13, INK, False, True, anchor='middle')
    b += rt(660, 34, 'Tidsbanen for produksjonen per arbeider', 13, INK, False, True, anchor='middle')
    b += line((440, 56), (440, 344), '#d0d4da', 1.4)
    fxl, fvl = g3_map(KE2, ND1 * KE2, ox=70, oy=POY8, xmax=400, ytop=60)
    b += axes('k', 'investering og utvanning', ox=70, oy=POY8, xmax=400, ytop=60,
              ylab_italic=False, ylab_size=11)
    b += polyline(g3_pts(fxl, fvl, lambda k: S_B * f2(k), 0.0, KE2), BLUE, 2.4)
    b += rt(fxl(KE2) + 4, fvl(S_B * f2(KE2)) + 4, 's f(k)', 11.5, BLUE)
    b += line((fxl(0), fvl(0)), (fxl(KE2), fvl(ND0 * KE2)), GRN, 2.2, '6 4')
    b += line((fxl(0), fvl(0)), (fxl(KE2 * ND0 / ND1), fvl(ND0 * KE2)), GRN, 2.4)
    b += rt(fxl(KE2) + 4, fvl(ND0 * KE2) + 4, '(n+δ_{0})k', 11.5, GRN)
    b += rt(fxl(KE2 * ND0 / ND1) - 2, fvl(ND0 * KE2) - 8, '(n+δ_{1})k', 11.5, GRN, anchor='end')
    b += g3_eq(fxl, fvl, KN0, ND0 * KN0, 'A', (9, 12), 'k_{0}*', oy=POY8)
    b += g3_eq(fxl, fvl, KN1, ND1 * KN1, 'B', (-19, -8), 'k_{1}*', oy=POY8)
    b += g3_axarrow(fxl, KN0 - 0.4, KN1 + 0.4, y=POY8 + 28)
    TD = len(dy2) - 1
    T0D = 14
    def dx_(j): return 510 + (840 - 20 - 510) * j / (TD + T0D)
    def dv_(y): return POY8 - 200.0 * y / (f2(KN0) * 1.12)
    b += axes('t', 'y (produksjon per arbeider)', ox=510, oy=POY8, xmax=840, ytop=60,
              ylab_italic=False, ylab_size=11)
    b += line((dx_(0), dv_(dy2[0])), (dx_(T0D), dv_(dy2[0])), PUR, 2.4)
    b += polyline([(dx_(T0D + j), dv_(dy2[j])) for j in range(TD + 1)], PUR, 2.4)
    b += line((510, dv_(dy2[0])), (830, dv_(dy2[0])), GREY, 1.2, '6 4')
    b += line((510, dv_(dy2[-1])), (830, dv_(dy2[-1])), GREY, 1.2, '6 4')
    b += rt(506, dv_(dy2[0]) + 5, 'y_{0}*', 12, INK, True, anchor='end')
    b += rt(506, dv_(dy2[-1]) + 5, 'y_{1}*', 12, INK, True, anchor='end')
    b += line((dx_(T0D), POY8), (dx_(T0D), 70), GREY, 1.2, '5 4')
    b += rt(dx_(T0D) - 8, POY8 + 17, 't_{0}', 13)
    b += rt(dx_(T0D) + 8, 84, 'ingen loddrett hopp i t_{0}', 10.5, GREY, False)
    save('solow-prove-1c-delta', b)

    # ================== prøve 1.D: endogen n med startpunkt og engangsløft =
    b = header('Fasediagram med kapital per arbeider vannrett, sparekurven som én konkav kurve og '
               'en knekt utvanningslinje: bratt fram til terskelen, loddrett fall i terskelen, '
               'deretter slakere. Lavlikevekten A og høylikevekten B er stabile, terskelen er '
               'markert med åpen sirkel. Et startpunkt mellom lavlikevekten og terskelen er '
               'markert, med en pil som viser at økonomien glir tilbake til lavlikevekten. En '
               'stiplet pil over aksen viser et engangsløft som bringer økonomien forbi '
               'terskelen, og derfra peker en pil videre mot høylikevekten.')
    b += axes('k', 'investering og utvanning per arbeider', ylab_italic=False, ylab_size=11)
    b += g3_endogen(fxe, fve, KEE)
    b += dot(fxe(K0_E), fve(S_E * f3(K0_E)), BLUE, 3.6)
    b += line((fxe(K0_E), fve(S_E * f3(K0_E))), (fxe(K0_E), OY), GREY, 1.2, '5 4')
    b += rt(fxe(K0_E) - 10, OY + 17, 'k_{0}', 13)
    b += g3_axarrow(fxe, K0_E, KEL + 0.5, lab='glir tilbake')
    b += arrow((fxe(K0_E), OY - 58), (fxe(K0_LOFT), OY - 58), PUR, 1.8, '7 4')
    b += rt(fxe(K0_E) + 4, OY - 64, 'engangsløft over k̄', 11, PUR, False)
    b += g3_axarrow(fxe, K0_LOFT, KEH - 0.6, y=OY + 46, color=PUR, lab='og videre av seg selv')
    save('solow-prove-1d-endogen-n', b)

if '7' in DELER:
    # =======================================================================
    # G3 — DEL 7: øvingseksamenenes (Y,i)-figurer (kap. 7.2 og 7.3)
    # =======================================================================
    # Modellen: RR: i = Z^i + g_Y (Y-Y^n)/Y^n · IS: i = a - 0,05 Y (avtakende
    # etterspørsel). Alle skjæringspunkter løses eksakt og sjekkes med assert.
    YN = 100.0
    W7B = 500                                  # ekstra bredde til kurvemerking

    def rr(Y, zi=2.0, gy=3.0):
        return zi + gy * (Y - YN) / YN

    def is_(Y, a):
        return a - 0.05 * Y

    def cross(a, zi=2.0, gy=3.0):
        """Løser a - 0,05Y = zi + 0,03(Y - 100)."""
        Y = (a - zi + 3.0) / 0.08
        i = is_(Y, a)
        assert abs(rr(Y, zi, gy) - i) < 1e-9, 'skjæringspunktet må ligge på begge kurvene'
        return Y, i

    YLO, YHI, ILO, IHI = 60.0, 130.0, 0.6, 4.2

    def yx(Y): return OX + (XMAX - 34 - OX) * (Y - YLO) / (YHI - YLO)
    def iv(i): return OY - (OY - YTOP - 22) * (i - ILO) / (IHI - ILO)

    def g3_seg(fi):
        """Delintervallet av [YLO,YHI] der den rette linja i = fi(Y) ligger i boksen."""
        a, b = fi(YLO), fi(YHI)
        sl = (b - a) / (YHI - YLO)
        cand = [YLO, YHI]
        for lev in (ILO, IHI):
            if abs(sl) > 1e-12:
                Y = YLO + (lev - a) / sl
                if YLO < Y < YHI:
                    cand.append(Y)
        cand.sort()
        best = None
        for j in range(len(cand) - 1):
            m = 0.5 * (cand[j] + cand[j + 1])
            if ILO - 1e-9 <= fi(m) <= IHI + 1e-9:
                if best is None or cand[j + 1] - cand[j] > best[1] - best[0]:
                    best = (cand[j], cand[j + 1])
        assert best is not None, 'linja ligger utenfor diagramboksen'
        return best

    def g3_yi_line(fi, color, w=2.4, dash=None):
        y0, y1 = g3_seg(fi)
        return line((yx(y0), iv(fi(y0))), (yx(y1), iv(fi(y1))), color, w, dash), (y1, fi(y1)), (y0, fi(y0))

    def g3_yi_point(Y, i, lab, dxy=(9, -9), open_dot=False, color=INK):
        s = line((yx(Y), iv(i)), (yx(Y), OY), GREY, 1.2, '5 4')
        s += line((OX, iv(i)), (yx(Y), iv(i)), GREY, 1.2, '5 4')
        s += (odot(yx(Y), iv(i), color) if open_dot else dot(yx(Y), iv(i), color))
        s += rt(yx(Y) + dxy[0], iv(i) + dxy[1], lab, 15, color, False, True)
        return s

    def g3_yn_line():
        s = line((yx(YN), OY), (yx(YN), 44), GREY, 1.4, '6 4')
        s += rt(yx(YN) - 4, 38, 'Y^{n}', 12.5, INK, anchor='middle')
        return s

    # ---- 7.2: etterspørselsfall (Z^D ned) treffer bare IS ------------------
    A_IS0 = 7.0
    YA2, IA2 = cross(A_IS0)
    assert near(YA2, 100.0) and near(IA2, 2.0), (YA2, IA2)
    SHIFT_Y = 25.0                                  # IS skifter 25 mot venstre
    A_IS1 = A_IS0 - 0.05 * SHIFT_Y
    YB2, IB2 = cross(A_IS1)
    assert YB2 < YA2 and IB2 < IA2, 'både Y og i faller når IS skifter mot venstre'
    YC2 = (A_IS1 - IA2) / 0.05                      # samme rente som i A
    assert YC2 < YB2, 'uten renterespons faller Y mer — pengepolitikken demper'
    assert near(YA2 - YC2, SHIFT_Y), 'C skal ligge nøyaktig det horisontale skiftet til venstre'
    print(f'  [Del 7] etterspørselsfall: A=({YA2:.1f},{IA2:.2f}) B=({YB2:.2f},{IB2:.2f}) '
          f'C=({YC2:.1f},{IA2:.2f})')

    b = header('Diagram med produksjon vannrett og rente loddrett. Den fallende '
               'etterspørselskurven og den stigende renteregelen krysser i punkt A, som ligger på '
               'den loddrette stiplede linjen for normal produksjon. Etterspørselskurven skyves '
               'parallelt mot venstre, og den nye likevekten B ligger nede til venstre på den '
               'uendrede renteregelen: både produksjonen og renten er lavere. Et lyst, åpent punkt '
               'lenger til venstre i samme høyde som A viser hvor produksjonen ville havnet uten '
               'renterespons, altså at pengepolitikken demper fallet, men ikke nøytraliserer det.',
               W7B, 360)
    b += axes('Y', 'i')
    b += g3_yn_line()
    sv_, rend, _ = g3_yi_line(lambda Y: rr(Y), BLUE, 2.4)
    b += sv_ + rt(yx(rend[0]) + 5, iv(rend[1]) + 4, 'RR', 13, BLUE, False, True)
    sv_, iend0, _ = g3_yi_line(lambda Y: is_(Y, A_IS0), RED, 2.4)
    b += sv_ + rt(yx(iend0[0]) + 6, OY - 8, 'IS_{0}', 13, RED, False, True)
    sv_, iend1, _ = g3_yi_line(lambda Y: is_(Y, A_IS1), RED, 2.2, '7 4')
    b += sv_ + rt(yx(iend1[0]) + 6, OY - 8, 'IS_{1}', 13, RED, False, True)
    # det horisontale skiftet, målt ved en fast rente
    ISH = 2.5
    YH0, YH1 = (A_IS0 - ISH) / 0.05, (A_IS1 - ISH) / 0.05
    assert near(YH0 - YH1, SHIFT_Y)
    b += arrow((yx(YH0), iv(ISH)), (yx(YH1), iv(ISH)), RED, 1.7)
    b += rt((yx(YH0) + yx(YH1)) / 2, iv(ISH) - 10, 'Z^{D} ned', 11.5, RED, anchor='middle')
    b += g3_yi_point(YA2, IA2, 'A', (10, -9))
    b += g3_yi_point(YB2, IB2, 'B', (-19, 16))
    b += odot(yx(YC2), iv(IA2), GREY)
    b += rt(yx(YC2) - 7, iv(IA2) - 9, 'C', 14, GREY, False, True, anchor='end')
    b += rt(OX + 10, 46, 'C: Y uten renterespons', 10.5, GREY, False)
    b += darrow((yx(YC2), iv(0.95)), (yx(YB2), iv(0.95)), GREY, 1.3)
    b += rt((yx(YC2) + yx(YB2)) / 2, iv(0.95) - 8, 'renta demper', 10, GREY, False, anchor='middle')
    save('is-rr-etterspoerselsfall', b)

    # ---- 7.3: kostnadssjokk i stramt arbeidsmarked -------------------------
    A_IS3 = 8.2
    YA3, IA3 = cross(A_IS3)
    assert near(YA3, 115.0) and near(IA3, 2.45), (YA3, IA3)
    assert YA3 > YN, 'utgangspunktet skal ligge til høyre for Y^n (stramt arbeidsmarked)'
    ZI1 = 3.2                                      # RR skifter entydig opp
    YB3, IB3 = cross(A_IS3, ZI1)
    assert near(YB3, 100.0) and near(IB3, 3.2), (YB3, IB3)
    A_RIGHT = A_IS3 + 0.05 * 15.0                  # IS 15 mot høyre
    A_LEFT = A_IS3 - 0.05 * 15.0                   # IS 15 mot venstre
    YR, IR = cross(A_RIGHT, ZI1)
    YL, IL = cross(A_LEFT, ZI1)
    assert IR > IA3 and IL > IA3 and IB3 > IA3, 'renta stiger entydig i alle tre tilfellene'
    assert YL < YB3 < YR, 'Y kan gå begge veier — B ligger mellom de to alternativene'
    assert IL < IB3 < IR, 'renteutfallet blir størst når IS også skifter mot høyre'
    print(f'  [Del 7] kostnadssjokk: A=({YA3:.1f},{IA3:.2f}) B=({YB3:.1f},{IB3:.2f}) '
          f'IS høyre -> ({YR:.1f},{IR:.2f}), IS venstre -> ({YL:.1f},{IL:.2f})')

    b = header('Diagram med produksjon vannrett og rente loddrett. Den fallende '
               'etterspørselskurven og den stigende renteregelen krysser i punkt A, som ligger til '
               'høyre for den loddrette stiplede linjen for normal produksjon, altså et stramt '
               'arbeidsmarked. Renteregelen skifter entydig oppover. Etterspørselskurven er tegnet '
               'med to stiplede alternativer: ett mot høyre for bedret konkurranseevne og ett mot '
               'venstre for prisimpulsen som demper etterspørselen. Den nye likevekten B ligger '
               'klart høyere i renten enn A, men en vannrett dobbeltpil gjennom B viser at '
               'retningen på produksjonen er ubestemt.', W7B, 360)
    b += axes('Y', 'i')
    b += g3_yn_line()
    sv_, r0end, _ = g3_yi_line(lambda Y: rr(Y), BLUE, 2.2, '7 4')
    b += sv_ + rt(yx(r0end[0]) + 5, iv(r0end[1]) + 4, 'RR_{0}', 13, BLUE, False, True)
    sv_, r1end, _ = g3_yi_line(lambda Y: rr(Y, ZI1), BLUE, 2.4)
    b += sv_ + rt(yx(r1end[0]) + 5, iv(r1end[1]) + 4, 'RR_{1}', 13, BLUE, False, True)
    YRRA = 78.0
    b += arrow((yx(YRRA), iv(rr(YRRA)) - 3), (yx(YRRA), iv(rr(YRRA, ZI1)) + 3), BLUE, 1.7)
    b += rt(yx(YRRA) + 8, iv(rr(YRRA, ZI1)) + 21, 'Z^{E} og Z^{π} opp', 11, BLUE)
    sv_, i0end, _ = g3_yi_line(lambda Y: is_(Y, A_IS3), RED, 2.4)
    b += sv_ + rt(yx(i0end[0]) + 5, iv(i0end[1]) + 5, 'IS_{0}', 13, RED, False, True)
    sv_, rgt, _ = g3_yi_line(lambda Y: is_(Y, A_RIGHT), RED, 1.8, '4 4')
    b += sv_ + rt(yx(rgt[0]) + 5, iv(rgt[1]) - 2, 'bedret', 10, RED, False)
    b += rt(yx(rgt[0]) + 5, iv(rgt[1]) + 10, 'konkurranseevne', 10, RED, False)
    sv_, lft, _ = g3_yi_line(lambda Y: is_(Y, A_LEFT), RED, 1.8, '4 4')
    b += sv_ + rt(yx(lft[0]) + 5, iv(lft[1]) - 2, 'prisimpuls', 10, RED, False)
    b += rt(yx(lft[0]) + 5, iv(lft[1]) + 10, 'demper', 10, RED, False)
    b += g3_yi_point(YA3, IA3, 'A', (10, 17))
    b += g3_yi_point(YB3, IB3, 'B', (10, -10))
    b += darrow((yx(YL), iv(IB3)), (yx(YR), iv(IB3)), INK, 1.4)
    b += rt(yx(YL) - 68, iv(IB3) - 25, 'Y-retning', 10.5, INK, False, anchor='end')
    b += rt(yx(YL) - 68, iv(IB3) - 13, 'ubestemt', 10.5, INK, False, anchor='end')
    save('is-rr-kostnadssjokk-stramt', b)

print('\nFerdig — ECON2310-figurer for del ' + '+'.join(sorted(DELER)) + ' generert.')
