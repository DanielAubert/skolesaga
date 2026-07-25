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
  4  Den åpne modellen i (Y,i)-planet: IS og RR alene, likevekten, høy-β-paret,
     de fire standardsjokkene, penge- mot finanspolitikk, drill- og prøvefigurer
  5  Hovedkurskjeden, målbetingelsen i (v,k)-planet, broen mellom relasjonssettene
  6  Todelt økonomi, kriselikevekt med tre skjæringer, KI i arbeidsmarkedet

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
    DELER = set()
    for _tok in ARGS[i + 1].split(','):
        if '-' in _tok:                      # intervall: «4-6» betyr 4, 5 og 6
            _lo, _hi = _tok.split('-')
            DELER |= {str(n) for n in range(int(_lo), int(_hi) + 1)}
        elif _tok:
            DELER.add(_tok)
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
    # figuren PÅSTÅR at det vannrette fallet er større enn det loddrette
    # skiftet i linjen (det er multiplikatoren leseren skal se) — sjekk det:
    assert (KY0 - KY1) > (A0 - A1), 'ΔY må overstige det loddrette skiftet'
    assert 0.0 < C1 < 1.0, 'etterspørselslinja må være slakere enn 45-graderslinja'
    # skiftet er PARALLELT: uendret helning, lavere skjæringspunkt
    assert near(((A1 + C1 * 70.0) - A1) / 70.0, C1) and A1 < A0

    # H2018-varianten: S = gY, I = I0 + aY, likevekt Y* = I0/(g-a).
    G0, G1, ALF, I0 = 0.25, 0.35, 0.15, 6.0
    HY0, HY1 = I0 / (G0 - ALF), I0 / (G1 - ALF)     # 60 og 30
    HS0, HS1 = G0 * HY0, G1 * HY1                   # 15 og 10.5
    assert G0 > ALF and G1 > ALF, 'stabilitetsvilkåret g > a må holde'
    assert near(HY0, 60.0) and near(HY1, 30.0), (HY0, HY1)
    assert near(HS0, I0 + ALF * HY0) and near(HS1, I0 + ALF * HY1), 'S = I i likevekt'
    assert HY1 < HY0, 'høyere sparerate må gi lavere Y'
    assert HS1 < HS0, 'realisert sparing/investering må FALLE (B lavere enn A)'
    # sparelinja MÅ være brattere enn investeringslinja (stabilitetsvilkåret
    # γ > α), og B skal ligge PÅ den uendrede investeringslinja:
    assert G0 > ALF and G1 > ALF
    assert near(HS1, I0 + ALF * HY1), 'B må ligge på investeringslinja'
    # fasiten i kap. 2.1 v1 b): dS*/dγ = -αI0/(γ-α)^2 < 0 når α > 0, og
    # nøyaktig 0 når α = 0 (grunnvarianten). Sjekk fortegnet numerisk:
    assert -ALF * I0 / (G0 - ALF) ** 2 < 0 and near(-0.0 * I0 / G0 ** 2, 0.0)

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
    # den nye sparekurven skal ligge OVER den gamle for all k > 0 (og bare
    # møte den i origo) — ellers er «svinger opp» feil ord:
    assert all(S1 * fk(0.25 * j) > S0 * fk(0.25 * j) for j in range(1, 49))
    assert near(S1 * fk(0.0), S0 * fk(0.0))
    # i den gamle likevekten gir den nye sparekurven Δk > 0 (pila mot høyre):
    assert S1 * fk(KS0) > NDEL * KS0, 'dynamikkpila må peke mot høyre'
    # kontrastfiguren PÅSTÅR motsatt pilretning i de to panelene:
    assert KS1 > KS0 and KY1 < KY0, 'samme sjokk, motsatt retning i panelene'

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
    # husstil: BEGGE etterspørselslinjene gjelder (før og etter sjokket), så
    # begge er heltrukne — utgangspunktet rødt, den nye oransje. Stiplet er
    # reservert for hjelpelinjer og hypotetiske grener.
    b += line((kx(0), kv(A0)), (kx(YEND), kv(A0 + C1 * YEND)), RED, 2.4)
    b += line((kx(0), kv(A1)), (kx(YEND), kv(A1 + C1 * YEND)), ORG, 2.4)
    b += rt(96, 46, '45°-linja: Y = etterspørsel', 11, GREY)
    b += rt(kx(YEND) + 6, kv(A0 + C1 * YEND) + 4, 'C + I_{0}', 13, RED)
    b += rt(kx(YEND) + 6, kv(A1 + C1 * YEND) + 4, 'lavere c_{0}', 12, ORG)
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
    # kort etikett ØVERST til høyre for dobbeltpila: der er kilen mellom pila og
    # 45-graderslinja bred nok. En lang etikett midt på pila blir krysset av
    # 45-graderslinja, og en etikett under pilspissen kolliderer med ΔY-pila.
    b += rt(xs + 6, kv(A0 + C1 * Ys) - 6, 'Δc_{0}', 12, INK)
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
        # etiketten står i den frie høyremargen (over linja kolliderer den med
        # sparestrålen, som er brattere og passerer rett over den her)
        s += rt(hx(HEND) + 4, hv(I0 + ALF * HEND) + 5, 'I = I_{0}+αY', 12, RED)
        s += dot(OX, hv(I0), RED, 3.5)
        s += rt(OX - 30, hv(I0) + 5, 'I_{0}', 13, RED)
        # sparelinja/-linjene (blå)
        if with_shift:
            # husstil: begge sparestrålene gjelder, så begge er heltrukne —
            # utgangspunktet blått, den nye lilla.
            s += line((hx(0), hv(0)), (hx(HEND), hv(G0 * HEND)), BLUE, 2.4)
            kend = 23.0 / G1
            s += line((hx(0), hv(0)), (hx(kend), hv(23.0)), PUR, 2.4)
            s += rt(hx(HEND) + 4, hv(G0 * HEND) + 5, 'S = γ_{0}Y', 13, BLUE)
            s += rt(hx(kend) + 4, hv(23.0) + 4, 'S = γ_{1}Y', 13, PUR)
            # pila viser at strålen svinger OPP om origo; de to merkede strålene
            # forteller hvilken som er ny, så pila står uten tekst (ellers kolliderer
            # etiketten med A eller med γ1-strålen).
            xa = 54.5
            s += arrow((hx(xa), hv(G0 * xa)), (hx(xa), hv(G1 * xa)), PUR, 1.5)
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
        # husstil: begge sparekurvene gjelder (før og etter), så begge er
        # heltrukne — utgangspunktet blått, den nye lilla.
        s += polyline([(xf(k), vf(S0 * fk(k))) for k in ks], BLUE, 2.4)
        s += polyline([(xf(k), vf(S1 * fk(k))) for k in ks], PUR, 2.4)
        s += line((xf(0), vf(0)), (xf(KEND), vf(NDEL * KEND)), GRN, 2.2)
        s += rt(xf(KEND) + 5, vf(NDEL * KEND) + 4, '(n+δ)k', 12, GRN)
        s += rt(xf(KEND) + 5, vf(S1 * fk(KEND)) + 4, 's_{1} f(k)', 12, PUR)
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
    b += line((rx(0), rv(A1)), (rx(RE), rv(A1 + C1 * RE)), ORG, 2.4)
    b += rt(rx(RE) + 6, rv(RE) + 4, '45°', 11, GREY, False)
    b += rt(rx(RE) + 6, rv(A0 + C1 * RE) + 4, 'C + I_{0}', 12, RED)
    b += rt(rx(RE) + 6, rv(A1 + C1 * RE) + 4, 'lavere c_{0}', 11, ORG)
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
    # prøve 3.D i kap. 3.P konkluderer at effekten KAN signeres (krona svekkes),
    # fordi dE = dEe + kappa*diF med BEGGE ledd positive. Bevis fortegnet:
    assert D_EE > 0 and KAP * D_IF > 0 and (D_EE + KAP * D_IF) > 0
    # ... og at det ubestemte tilfellet i kap. 3.1 v2 / prøve 3.B g) faktisk ER
    # ubestemt: med dEe < 0 og diF > 0 finnes moteksempler i BEGGE retninger.
    assert (-3.0 + KAP * 1.0) < 0, 'stort tillitsløft mot lite renteløft: krona styrkes'
    assert (-1.0 + KAP * 3.0) > 0, 'lite tillitsløft mot stort renteløft: krona svekkes'

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
    # husstil: alle tre linjene er faktiske stadier i analysen (utgangspunkt,
    # etter delskift 1, etter delskift 2), så alle tre er heltrukne.
    b += uip_line(IC2, ORG, 2.4, vf=uv3)
    b += uip_line(IC1, PUR, 2.2, vf=uv3)
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

# ===========================================================================
# G2 — DEL 4, 5 og 6: den åpne modellen i (Y,i)-planet, hovedkursmodellens
# flytskjemaer, målbetingelsen i (v,k)-planet, kriselikevekt med tre
# skjæringer, og KI-arbeidsmarkedet i to paneler.
# All geometri REGNES UT: helninger, skjæringer og skiftretninger verifiseres
# med assert før SVG-en skrives, og linjene klippes numerisk til plottvinduet.
# ===========================================================================
if DELER & {'4', '5', '6'}:

    def g2_arc(p1, p2, bow, color, w=1.8, dash=None, head=True):
        """Kvadratisk bézier fra p1 til p2, buet `bow` piksler ut fra korda."""
        mx, my = (p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2
        dx, dy = p2[0] - p1[0], p2[1] - p1[1]
        L = math.hypot(dx, dy) or 1.0
        nx, ny = -dy / L, dx / L
        cx, cy = mx + nx * bow * 2, my + ny * bow * 2
        d = f' stroke-dasharray="{dash}"' if dash else ''
        s = (f'  <path d="M {p1[0]:.1f} {p1[1]:.1f} Q {cx:.1f} {cy:.1f} '
             f'{p2[0]:.1f} {p2[1]:.1f}" fill="none" stroke="{color}" '
             f'stroke-width="{w}"{d}/>\n')
        if head:
            s += _head((cx, cy), p2, color, 7)
        return s

    def g2_polyarrow(pts, color, w=1.6, dash=None):
        """Knekt pil: polylinje med pilspiss i siste punkt."""
        return polyline(pts, color, w, dash) + _head(pts[-2], pts[-1], color, 7)


# ===========================================================================
# G2 — DEL 4: IS-RR i (Y,i)-planet (kap. 4.1–4.6 + prøvene)
# ===========================================================================
if DELER & {'4', '5', '6'}:
    # ---------------- felles tallgrunnlag for alle (Y,i)-figurer ------------
    # IS (kap. 4.1):  i = c_IS + s_IS·Y  der  s_IS = −1/[m(c2+b2+a2κ)]
    # RR (kap. 4.2):  i = c_RR + s_RR·Y  der  s_RR = g_Y/Y^n
    G2_YN = 100.0                      # potensielt BNP
    G2_YA, G2_IA = 96.0, 3.0           # utgangslikevekt A (svakt negativt gap)
    G2_M = 5.0 / 3.0                   # multiplikatoren m i standardtilfellet
    G2_R = 4.0                         # rentekanalene c2 + b2 + a2·κ
    G2_GY = 10.0                       # g_Y i renteregelen
    G2_SIS = -1.0 / (G2_M * G2_R)      # IS-helning  = −0,15
    G2_SRR = G2_GY / G2_YN             # RR-helning  = +0,10
    assert near(G2_SIS, -0.15) and near(G2_SRR, 0.10), (G2_SIS, G2_SRR)
    assert G2_SIS < 0 < G2_SRR, 'IS må falle og RR må stige'
    G2_CIS = G2_IA - G2_SIS * G2_YA    # konstantledd slik at A ligger på IS
    G2_CRR = G2_IA - G2_SRR * G2_YA    # ... og på RR
    assert near(G2_CIS + G2_SIS * G2_YA, G2_IA)
    assert near(G2_CRR + G2_SRR * G2_YA, G2_IA)

    def g2_kryss(cis, sis, crr, srr):
        """Skjæringen mellom IS og RR — regnet ut, ikke tegnet på øyemål."""
        assert not near(sis, srr), 'parallelle kurver har ingen skjæring'
        Y = (crr - cis) / (sis - srr)
        i = cis + sis * Y
        assert near(i, crr + srr * Y), 'punktet må ligge på BEGGE kurver'
        return Y, i

    assert near(g2_kryss(G2_CIS, G2_SIS, G2_CRR, G2_SRR)[0], G2_YA)
    assert near(g2_kryss(G2_CIS, G2_SIS, G2_CRR, G2_SRR)[1], G2_IA)

    def g2_paa(Y, i, s, c, navn):
        """KRAV: punktet (Y,i) ligger PÅ linja i = c + s·Y, og innenfor
        plottvinduet. Kalles for hver relasjon et likevektspunkt påstås å ligge
        på — et punkt som skal være en skjæring, må ligge på BEGGE kurvene."""
        assert near(i, c + s * Y), \
            f'{navn}: punktet ({Y:.4f}; {i:.4f}) ligger ikke på kurven ' \
            f'(kurven gir {c + s * Y:.4f})'
        assert G2_YLO <= Y <= G2_YHI and G2_ILO <= i <= G2_IHI, \
            f'{navn}: punktet ({Y:.2f}; {i:.2f}) faller utenfor plottvinduet'

    def g2_cis_skift(h):
        """Konstantledd for IS parallellforskjøvet h Y-enheter mot høyre (h>0)."""
        return G2_CIS - G2_SIS * h

    # ---------------- plottvindu og pikselavbildning ------------------------
    G2_YLO, G2_YHI = 70.0, 136.0
    G2_ILO, G2_IHI = 0.30, 7.60
    G2_SX = (XMAX - 10 - OX) / (G2_YHI - G2_YLO)      # px per Y-enhet
    G2_SY = 33.0                                      # px per rentepoeng
    assert OY - G2_SY * G2_IHI > YTOP, 'renteaksen må romme hele intervallet'

    def g2x(Y, ox=OX):
        return ox + G2_SX * (Y - G2_YLO)

    def g2y(i, oy=OY):
        return oy - G2_SY * i

    def g2_clip(s, c, ylo=None, yhi=None):
        """Klipper linja i = c + s·Y til plottvinduet; returnerer endepunktene."""
        ylo = G2_YLO if ylo is None else ylo
        yhi = G2_YHI if yhi is None else yhi
        cand = []
        for Y in (ylo, yhi):
            i = c + s * Y
            if G2_ILO - 1e-9 <= i <= G2_IHI + 1e-9:
                cand.append((Y, i))
        if abs(s) > 1e-12:
            for i in (G2_ILO, G2_IHI):
                Y = (i - c) / s
                if ylo - 1e-9 <= Y <= yhi + 1e-9:
                    cand.append((Y, i))
        cand.sort()
        assert len(cand) >= 2, f'linja (s={s}, c={c}) treffer ikke plottvinduet'
        return cand[0], cand[-1]

    def g2_kurve(s, c, color, w=2.4, dash=None, lab=None, lab_size=12,
                 at='end', dx=6, dy=4, anchor='start', ylo=None, yhi=None,
                 ox=OX, oy=OY):
        p, q = g2_clip(s, c, ylo, yhi)
        out = line((g2x(p[0], ox), g2y(p[1], oy)),
                   (g2x(q[0], ox), g2y(q[1], oy)), color, w, dash)
        if lab:
            ref = q if at == 'end' else p
            out += rt(g2x(ref[0], ox) + dx, g2y(ref[1], oy) + dy, lab, lab_size,
                      color, anchor=anchor)
        return out

    def g2_pt(Y, i, lab, dxy=(9, -10), open_=False, color=INK, xlab=None,
              ilab=None, ox=OX, oy=OY, helpers=True):
        x, y = g2x(Y, ox), g2y(i, oy)
        out = ''
        if helpers:
            out += line((x, y), (x, oy), GREY, 1.2, '5 4')
            out += line((ox, y), (x, y), GREY, 1.2, '5 4')
        out += (odot(x, y, color) if open_ else dot(x, y, color))
        out += rt(x + dxy[0], y + dxy[1], lab, 15, color, False, True)
        if xlab:
            out += rt(x - 9, oy + 17, xlab, 12.5)
        if ilab:
            out += rt(ox - 36, y + 5, ilab, 12.5)
        return out

    def g2_yn(ox=OX, oy=OY, lab=True):
        x = g2x(G2_YN, ox)
        out = line((x, oy), (x, oy - G2_SY * G2_IHI), GREY, 1.4, '6 4')
        if lab:
            out += rt(x - 9, oy + 34, 'Y^{n}', 12.5, GREY)
        return out


if '4' in DELER:
    # ---------------------- 1) IS-kurven alene (kap. 4.1) ------------------
    b = header('Diagram med produksjonen Y langs den vannrette aksen og renta i langs den '
               'loddrette. IS-kurven er en rett, fallende linje fra øvre venstre mot nedre '
               'høyre. Et punkt A ligger på kurven, med stiplede hjelpelinjer ned til '
               'produksjonen Y-null på den vannrette aksen og bort til renta i-null på den '
               'loddrette. Helningen er minus én delt på multiplikatoren ganger summen av '
               'rentens tre kanaler: konsumkanalen, investeringskanalen og valutakurskanalen.')
    b += axes('Y', 'i')
    b += g2_kurve(G2_SIS, G2_CIS, RED, 2.6, lab='IS', lab_size=15, dx=8, dy=5)
    b += g2_pt(G2_YA, G2_IA, 'A', (9, -10), xlab='Y_{0}', ilab='i_{0}')
    b += rt(236, 92, 'helning', 11.5, GREY, False)
    b += rt(236, 107, '−1 / [ m (c_{2}+b_{2}+a_{2}κ) ]', 11.5, GREY)
    b += rt(236, 128, 'flatere kurve = sterkere', 10.5, GREY, False)
    b += rt(236, 141, 'rentekanaler og større m', 10.5, GREY, False)
    save('is-kurven-aapen', b)

    # -------------------- 2) rentens tre kanaler (flytdiagram) ------------
    W, H = 620, 344
    b = header('Flytdiagram uten akser. Til venstre en boks der renta settes opp. Fra den går '
               'tre piler til tre bokser: lavere konsum, lavere investeringer, og sterkere krone '
               'som gir lavere nettoeksport. Alle tre peker inn i en felles boks der '
               'produksjonen faller. Ved den siste pilen står en sirkelpil merket med '
               'multiplikatoren.', W, H)
    b += box(82, 170, 132, 50, ['Renta opp', '(i opp)'], INK, 13, '#f4f6f8')
    b += box(300, 66, 236, 40, ['Konsum ned  (c_{2})'], BLUE, 12.5, '#eef4fa')
    b += box(300, 170, 236, 40, ['Investeringer ned  (b_{2})'], BLUE, 12.5, '#eef4fa')
    b += box(300, 274, 236, 50, ['Sterkere krone —',
                                 'nettoeksport ned  (a_{2}κ)'], BLUE, 12.5, '#eef4fa')
    for cy in (66, 170, 274):
        b += arrow((150, 170), (180, cy), GREY, 1.7)
        b += arrow((420, cy), (468, 170), GREY, 1.7)
    b += box(538, 170, 124, 50, ['Y ned'], RED, 14, '#fdeeec')
    b += g2_arc((458, 208), (458, 132), -22, ORG, 1.7)
    b += rt(538, 232, '× m', 12.5, ORG, anchor='middle')
    b += rt(538, 246, '(multiplikatoren)', 10.5, ORG, False, anchor='middle')
    b += rt(W / 2, 326, 'Tre kanaler — og hele summen ganges opp av multiplikatoren.',
            11, GREY, False, anchor='middle')
    save('rentens-tre-kanaler', b)

    # ---------------------- 3) RR-kurven alene (kap. 4.2) -----------------
    b = header('Diagram med produksjonen Y langs den vannrette aksen og renta i langs den '
               'loddrette. Renteregelen RR er en rett, stigende linje. En loddrett stiplet linje '
               'markerer potensielt BNP. Et punkt A ligger på kurven med stiplede hjelpelinjer '
               'til begge akser. Helningen er bankens respons på produksjonsgapet delt på '
               'potensielt BNP.')
    b += axes('Y', 'i')
    b += g2_yn()
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.6, lab='RR', lab_size=15, dx=8, dy=5)
    b += g2_pt(G2_YA, G2_IA, 'A', (-22, -11), xlab='Y_{0}', ilab='i_{0}')
    b += rt(118, 82, 'helning  g_{Y} / Y^{n}', 12, GREY)
    b += rt(118, 99, 'brattere kurve = banken', 10.5, GREY, False)
    b += rt(118, 112, 'svarer kraftigere på gapet', 10.5, GREY, False)
    save('rr-kurven', b)

    # -------------------- 4) RR-skift ved Z^i opp (kap. 4.2) --------------
    G2_UZI = 1.6
    b = header('Samme diagram med produksjonen vannrett og renta loddrett. To parallelle, '
               'stigende renteregelkurver: den nye ligger over den gamle, forskjøvet rett '
               'oppover og med uendret helning. Piler mellom dem peker oppover. En loddrett '
               'stiplet linje markerer potensielt BNP. Figuren viser at renta blir høyere for '
               'ethvert produksjonsnivå.')
    b += axes('Y', 'i')
    b += g2_yn()
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR + G2_UZI, PUR, 2.4, lab='RR_{1}', dx=7, dy=5)
    for Yv in (84.0, 116.0):
        b += arrow((g2x(Yv), g2y(G2_CRR + G2_SRR * Yv) - 4),
                   (g2x(Yv), g2y(G2_CRR + G2_UZI + G2_SRR * Yv) + 6), PUR, 1.6)
    b += rt(g2x(84.0) + 9, g2y(G2_CRR + G2_UZI + G2_SRR * 84.0) - 9, 'Z^{i} opp', 12, PUR)
    b += rt(112, 64, 'samme helning, høyere nivå:', 10.5, GREY, False)
    b += rt(112, 77, 'høyere rente for ethvert Y', 10.5, GREY, False)
    save('rr-skift-zi', b)

    # ------------- 5) likevekten der IS krysser RR (kap. 4.3) -------------
    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. En fallende IS-kurve og '
               'en stigende renteregelkurve krysser hverandre i punkt A, med stiplede '
               'hjelpelinjer ned til likevektsproduksjonen og bort til likevektsrenta. En '
               'loddrett stiplet linje ved potensielt BNP ligger til høyre for likevekten, så '
               'produksjonsgapet er negativt i utgangspunktet.')
    b += axes('Y', 'i')
    b += g2_yn()
    b += g2_kurve(G2_SIS, G2_CIS, RED, 2.6, lab='IS', lab_size=15, dx=8, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.6, lab='RR', lab_size=15, dx=8, dy=5)
    b += g2_pt(G2_YA, G2_IA, 'A', (-22, -11), xlab='Y*', ilab='i*')
    b += rt(g2x(100.0) + 8, 64, 'negativt produksjonsgap', 10.5, GREY, False)
    b += rt(g2x(100.0) + 8, 78, 'i utgangspunktet: Y* < Y^{n}', 10.5, GREY)
    save('is-rr-likevekt', b)

    # ----------------- 6) høy β: begge kurver brattere (kap. 4.3) --------
    G2_MH = 10.0 / 11.0                    # m når a3·β/Y^n er stor
    G2_SISH = -1.0 / (G2_MH * G2_R)        # brattere IS
    G2_SRRH = 0.85                         # brattere RR (kraftig g_Y)
    assert abs(G2_SISH) > abs(G2_SIS), 'høy β må gi brattere IS'
    assert G2_SRRH > G2_SRR, 'høy β må gi brattere RR'
    G2_H = 18.0                            # samme vannrette IS-skift i begge par
    G2_CISH = G2_IA - G2_SISH * G2_YA
    G2_CRRH = G2_IA - G2_SRRH * G2_YA
    G2_YB, G2_IB = g2_kryss(g2_cis_skift(G2_H), G2_SIS, G2_CRR, G2_SRR)
    G2_YBH, G2_IBH = g2_kryss(G2_CISH - G2_SISH * G2_H, G2_SISH, G2_CRRH, G2_SRRH)
    assert G2_YB > G2_YA and G2_IB > G2_IA, 'B skal ligge opp til høyre for A'
    assert G2_YBH > G2_YA and G2_IBH > G2_IA
    assert (G2_YBH - G2_YA) < 0.5 * (G2_YB - G2_YA), \
        'produksjonsvirkningen må være klart mindre i høy-β-tilfellet'
    assert (G2_IBH - G2_IA) > 2.0 * (G2_IB - G2_IA), \
        'rentevirkningen må være klart større i høy-β-tilfellet'
    print(f'  [Del 4] standard:  A=({G2_YA:.0f}; {G2_IA:.2f}) -> B=({G2_YB:.2f}; {G2_IB:.2f})')
    print(f'  [Del 4] høy β:     A=({G2_YA:.0f}; {G2_IA:.2f}) -> B′=({G2_YBH:.2f}; {G2_IBH:.2f})')

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett, og to kurvepar gjennom '
               'samme utgangspunkt A. Det slake paret er IS og renteregelen i standardtilfellet; '
               'det bratte paret gjelder når lønns- og prisveksten reagerer sterkt på presset i '
               'økonomien. Begge IS-kurver er skjøvet like langt mot høyre. Det slake paret gir '
               'en ny likevekt B langt til høyre og litt høyere; det bratte paret gir en ny '
               'likevekt bare litt til høyre for A, men mye høyere. Stiplede hjelpelinjer går '
               'fra begge nye likevekter til begge akser.', 440, 400)
    b += axes('Y', 'i')
    b += g2_kurve(G2_SIS, G2_CIS, RED, 2.2, lab='IS', dx=7, dy=5)
    b += g2_kurve(G2_SIS, g2_cis_skift(G2_H), RED, 2.2, '7 4', lab='IS_{1}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.2, lab='RR', dx=7, dy=5)
    b += g2_kurve(G2_SISH, G2_CISH, ORG, 2.2, lab='IS′', at='start', dx=-6, dy=-7, anchor='end')
    b += g2_kurve(G2_SISH, G2_CISH - G2_SISH * G2_H, ORG, 2.2, '7 4',
                  lab='IS_{1}′', at='start', dx=-6, dy=-7, anchor='end')
    b += g2_kurve(G2_SRRH, G2_CRRH, PUR, 2.2, lab='RR′', dx=6, dy=-6)
    b += g2_pt(G2_YB, G2_IB, 'B', (10, 18), xlab='Y_{B}', ilab='i_{B}')
    b += g2_pt(G2_YBH, G2_IBH, 'B′', (11, -10), color=PUR, ilab='i_{B}′')
    b += g2_pt(G2_YA, G2_IA, 'A', (-22, 18))
    _y82 = g2y(G2_CIS + G2_SIS * 82.0)
    b += arrow((g2x(82.0), _y82 - 3), (g2x(82.0 + G2_H), _y82 - 3), GREY, 1.6)
    b += rt((g2x(82.0) + g2x(82.0 + G2_H)) / 2, _y82 - 15, 'samme skift',
            10.5, GREY, False, anchor='middle')
    b += rt(OX, 358, 'IS og RR: standardtilfellet  ·  IS′ og RR′: høy β (begge brattere)',
            11, INK, False, True)
    b += rt(OX, 378, 'Samme IS-skift gir mye mindre Y-virkning — og mye større i-virkning.',
            10.5, GREY, False)
    save('hoy-beta-begge-brattere', b)

    # ------------------ 7) Z^D opp: bare IS skifter (kap. 4.4) -----------
    def g2_zd_opp(merke='Z^{D} opp'):
        s = axes('Y', 'i')
        s += g2_yn()
        s += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', dx=7, dy=5)
        s += g2_kurve(G2_SIS, g2_cis_skift(G2_H), ORG, 2.4, lab='IS_{1}', dx=7, dy=5)
        s += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR', dx=7, dy=5)
        s += g2_pt(G2_YB, G2_IB, 'B', (10, -10), xlab='Y_{B}', ilab='i_{B}')
        s += g2_pt(G2_YA, G2_IA, 'A', (-22, 18), xlab='Y_{A}', ilab='i_{A}')
        s += arrow((g2x(78.0), g2y(G2_CIS + G2_SIS * 78.0) - 3),
                   (g2x(78.0 + G2_H), g2y(G2_CIS + G2_SIS * 78.0) - 3), ORG, 1.7)
        s += rt(g2x(78.0) + 6, g2y(G2_CIS + G2_SIS * 78.0) - 10, merke, 12, ORG)
        return s

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. En fallende IS-kurve og '
               'en stigende renteregelkurve krysser i punkt A. IS skifter parallelt mot høyre '
               'fordi etterspørselsimpulsen øker, mens renteregelen ligger i ro. Den nye '
               'likevekten B ligger opp til høyre for A: både produksjonen og renta er høyere. '
               'Stiplede hjelpelinjer går fra A og B til begge akser, og en loddrett stiplet '
               'linje markerer potensielt BNP.')
    b += g2_zd_opp()
    save('skift-zd', b)

    # -------------- 8) Z^E opp: IS mot høyre OG RR opp (kap. 4.4) --------
    G2_HE = 20.0                       # vannrett IS-skift = m·a2·ΔZ^E
    G2_UA, G2_UB = 1.2, 4.5            # RR-skift = g_E·ΔZ^E: moderat og kraftig
    G2_CISE = g2_cis_skift(G2_HE)
    G2_YB1, G2_IB1 = g2_kryss(G2_CISE, G2_SIS, G2_CRR + G2_UA, G2_SRR)
    G2_YB2, G2_IB2 = g2_kryss(G2_CISE, G2_SIS, G2_CRR + G2_UB, G2_SRR)
    assert G2_IB1 > G2_IA and G2_IB2 > G2_IA, 'renta skal stige ENTYDIG i begge alternativer'
    assert G2_YB1 > G2_YA > G2_YB2, 'produksjonen skal være ubestemt — én B på hver side av A'
    print(f'  [Del 4] Z^E opp:   B1=({G2_YB1:.2f}; {G2_IB1:.2f})  B2=({G2_YB2:.2f}; {G2_IB2:.2f})')

    def g2_to_relasjoner(merke_is, merke_rr, note, undertekst):
        """Sjokk som treffer TO relasjoner: IS mot høyre og RR opp. Renta stiger
        entydig; produksjonen er ubestemt, vist med to alternative RR-skift
        (moderat og kraftig respons). Panelet er 400 px høyt — legenden ligger
        under aksen, slik at plottflaten holdes ren."""
        s = axes('Y', 'i')
        s += g2_yn()
        s += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', dx=7, dy=5)
        s += g2_kurve(G2_SIS, G2_CISE, ORG, 2.4, lab='IS_{1}', dx=7, dy=5)
        s += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=7, dy=5)
        s += g2_kurve(G2_SRR, G2_CRR + G2_UA, BLUE, 2.0, '7 4',
                      lab='RR_{1}', lab_size=11.5, dx=6, dy=14)
        s += g2_kurve(G2_SRR, G2_CRR + G2_UB, PUR, 2.0, '7 4',
                      lab='RR_{1}′', lab_size=11.5, dx=-6, dy=-9, anchor='end')
        s += g2_pt(G2_YB2, G2_IB2, 'B_{2}', (-33, 5), color=PUR, ilab='i_{B2}')
        s += g2_pt(G2_YB1, G2_IB1, 'B_{1}', (10, -10), color=ORG, ilab='i_{B1}')
        s += g2_pt(G2_YA, G2_IA, 'A', (-9, 20), xlab='Y_{A}', ilab='i_{A}')
        _yis = g2y(G2_CIS + G2_SIS * 104.0)
        s += arrow((g2x(104.0), _yis - 3), (g2x(104.0 + G2_HE), _yis - 3), ORG, 1.7)
        s += rt((g2x(104.0) + g2x(104.0 + G2_HE)) / 2, _yis - 14, merke_is, 10.5,
                ORG, False, anchor='middle')
        s += arrow((g2x(80.0), g2y(G2_CRR + G2_SRR * 80.0) - 4),
                   (g2x(80.0), g2y(G2_CRR + G2_UB + G2_SRR * 80.0) + 6), PUR, 1.7)
        s += rt(g2x(80.0) + 8, g2y(G2_CRR + G2_UB + G2_SRR * 80.0) + 14, merke_rr,
                10.5, PUR, False)
        s += darrow((g2x(G2_YB2), 292), (g2x(G2_YB1), 292), INK)
        s += rt((g2x(G2_YB2) + g2x(G2_YB1)) / 2, 282, note, 10.5, INK, False, anchor='middle')
        s += rt(OX, 358, undertekst, 11.5, INK, False, True)
        s += rt(OX, 378, 'RR_{1} = moderat respons', 10.5, BLUE)
        s += rt(OX + 176, 378, 'RR_{1}′ = kraftig respons', 10.5, PUR)
        return s

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. IS-kurven og '
               'renteregelen krysser i punkt A. Kronesvekkelsen skifter IS mot høyre fordi '
               'konkurranseevnen bedres, og renteregelen oppover fordi banken svarer. To '
               'stiplede renteregelkurver er tegnet, én for moderat og én for kraftig respons. '
               'De gir to nye likevekter på den nye IS-kurven: B-én til høyre for A og B-to til '
               'venstre for A. Begge ligger høyere enn A, så renta stiger entydig, mens '
               'retningen på produksjonen er ubestemt.', 440, 400)
    b += g2_to_relasjoner('bedret konkurranseevne', 'banken svarer', 'Y-retning ubestemt',
                          'Z^{E} opp — begge kurver skifter: i entydig opp, Y ubestemt')
    save('skift-ze', b)

    # -------------- 9) Z^D ned, med og uten renterespons (kap. 4.4) ------
    G2_CISN = g2_cis_skift(-G2_H)
    G2_YBN, G2_IBN = g2_kryss(G2_CISN, G2_SIS, G2_CRR, G2_SRR)
    G2_YC = (G2_IA - G2_CISN) / G2_SIS          # Y på IS_1 ved UENDRET rente
    assert G2_YBN < G2_YA and G2_IBN < G2_IA, 'B skal ligge ned til venstre for A'
    assert G2_YC < G2_YBN, 'uten rentekutt ville produksjonen falt LENGER'
    assert near(G2_CISN + G2_SIS * G2_YC, G2_IA), 'C skal ligge i samme høyde som A'
    print(f'  [Del 4] Z^D ned:   B=({G2_YBN:.2f}; {G2_IBN:.2f})  C=({G2_YC:.2f}; {G2_IA:.2f})')

    def g2_zd_ned(merke, med_c=True):
        s = axes('Y', 'i')
        s += g2_yn()
        s += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', dx=7, dy=5)
        s += g2_kurve(G2_SIS, G2_CISN, ORG, 2.4, lab='IS_{1}', at='start',
                      dx=-6, dy=-7, anchor='end')
        s += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR', dx=7, dy=5)
        if med_c:
            s += line((g2x(G2_YC), g2y(G2_IA)), (g2x(G2_YC), OY), GREY, 1.2, '5 4')
            s += odot(g2x(G2_YC), g2y(G2_IA), GREY)
            s += rt(g2x(G2_YC) - 9, g2y(G2_IA) - 13, 'C', 14, GREY, False, True)
            s += rt(OX + 4, 282, 'uten renterespons', 10, GREY, False)
            s += rt(g2x(G2_YC) - 9, OY + 17, 'Y_{C}', 12.5, GREY)
        s += g2_pt(G2_YBN, G2_IBN, 'B', (-22, -11), xlab='Y_{B}', ilab='i_{B}')
        s += g2_pt(G2_YA, G2_IA, 'A', (10, -10), xlab='Y_{A}', ilab='i_{A}')
        _yn114 = g2y(G2_CIS + G2_SIS * 114.0)
        s += arrow((g2x(114.0), _yn114 - 3), (g2x(114.0 - G2_H), _yn114 - 3), ORG, 1.7)
        s += rt((g2x(114.0) + g2x(114.0 - G2_H)) / 2, _yn114 - 14, merke, 11,
                ORG, anchor='middle')
        return s

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. IS-kurven skifter '
               'parallelt mot venstre langs en uendret renteregel, og den nye likevekten B '
               'ligger ned til venstre for A: både produksjonen og renta er lavere. Et lyst '
               'punkt C med åpen sirkel ligger lenger til venstre, i samme høyde som A, og '
               'viser hvor produksjonen ville havnet uten rentekuttet. En loddrett stiplet linje '
               'markerer potensielt BNP.')
    b += g2_zd_ned('Z^{D} ned')
    save('skift-zd-ned', b)

    # ----------------- 10) prisløft ute (kap. 4.4, sjokk 4) --------------
    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. Prisløftet ute skifter '
               'IS mot høyre fordi norske varer blir relativt billigere, og renteregelen oppover '
               'fordi importert prisvekst må motvirkes. To stiplede renteregelkurver gir to '
               'alternative likevekter på hver sin side av A vannrett, begge høyere enn A. Renta '
               'stiger entydig, mens retningen på produksjonen er ubestemt.', 440, 400)
    b += g2_to_relasjoner('bedret konkurranseevne', 'importert prisvekst',
                          'Y ubestemt — avhenger av g_{π}',
                          'Prisløft ute — i entydig opp, Y ubestemt')
    save('prissjokk-ute', b)

    # ------------- 11) penge- mot finanspolitikk (kap. 4.5) --------------
    G2_HP = 12.0                                    # sjokkets størrelse her
    G2_CISP = g2_cis_skift(-G2_HP)
    G2_IB1P = G2_CISP + G2_SIS * G2_YA              # renta som gir Y = Y_A på IS_1
    G2_CRRP = G2_IB1P - G2_SRR * G2_YA              # nytt RR-konstantledd
    assert G2_IB1P < G2_IA, 'pengepolitikken må kutte renta'
    assert G2_CRRP < G2_CRR, 'renteregelen skal skifte NED'
    assert near(g2_kryss(G2_CISP, G2_SIS, G2_CRRP, G2_SRR)[0], G2_YA), \
        'B1 skal ligge rett under A — samme produksjon'
    # PANEL 1: B1 er skjæringen mellom IS_1 og RR_1 — kontrollert mot begge.
    g2_paa(G2_YA, G2_IB1P, G2_SIS, G2_CISP, 'panel 1: B1 på IS_1')
    g2_paa(G2_YA, G2_IB1P, G2_SRR, G2_CRRP, 'panel 1: B1 på RR_1')
    # PANEL 2: pakken fører IS_1 nøyaktig tilbake til IS_0, og likevekten til A,
    # som er skjæringen mellom IS_0 og den uendrede RR_0.
    assert near(G2_CISP - G2_SIS * G2_HP, G2_CIS), \
        'panel 2: pakken må føre IS_1 nøyaktig tilbake til IS_0'
    g2_paa(G2_YA, G2_IA, G2_SIS, G2_CIS, 'panel 2: A på IS_0')
    g2_paa(G2_YA, G2_IA, G2_SRR, G2_CRR, 'panel 2: A på RR_0')
    # doseringen: det vannrette IS-skiftet er like stort i begge paneler
    assert near((G2_CIS - G2_CISP) / -G2_SIS, G2_HP), 'IS-skiftet skal være H_P i Y-enheter'
    print(f'  [Del 4] dosering:  B1=({G2_YA:.0f}; {G2_IB1P:.2f}) mot A=({G2_YA:.0f}; {G2_IA:.2f})')

    W, H = 880, 404
    POY, PTOP = 330, 76
    # STIPLINGSKONVENSJON (som i resten av (Y,i)-familien, jf. skift-zd, skift-ze
    # og econ2310-5-prove-is-rr-prissjokk): heltrukket = relasjon som FAKTISK
    # gjelder — utgangskurven i rødt/blått, den nye i oransje/lilla. Stiplet er
    # reservert for hjelpelinjer og for alternative, hypotetiske grener. Panelene
    # bruker derfor identisk strektype for samme kurve; retningen bæres av pilene.
    b = header('To paneler side ved side med samme akser: produksjonen Y vannrett og renta i '
               'loddrett. I begge paneler er IS skjøvet fra IS-null til IS-én mot venstre etter '
               'et etterspørselsfall. I venstre panel, pengepolitikk, skifter renteregelen ned '
               'til RR-én, og den nye likevekten B-én ligger rett under A: samme produksjon, '
               'lavere rente. I høyre panel, finanspolitikk, skyves IS-én tilbake til IS-null '
               'mens renteregelen ligger i ro, og likevekten er tilbake i A: samme produksjon og '
               'samme rente. Kurvene er tegnet med samme strektype i begge paneler: heltrukket '
               'for kurvene som gjelder, stiplet bare for hjelpelinjer. '
               'Undertekst: samme produksjon, ulik sammensetning.', W, H)
    b += rt(W / 2, 28, 'Dosert til samme produksjonseffekt', 16, INK, False, True, anchor='middle')
    b += rt(224, 58, 'Panel 1 — pengepolitikk', 13, INK, False, True, anchor='middle')
    b += rt(664, 58, 'Panel 2 — finanspolitikk', 13, INK, False, True, anchor='middle')
    b += line((440, 72), (440, 360), '#d0d4da', 1.4)
    for ox, xmax in ((OX, 400), (510, 840)):
        b += axes('Y', 'i', ox=ox, oy=POY, xmax=xmax, ytop=PTOP)
        b += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', dx=6, dy=5, ox=ox, oy=POY)
        b += g2_kurve(G2_SIS, G2_CISP, ORG, 2.4, lab='IS_{1}', at='start',
                      dx=-6, dy=-7, anchor='end', ox=ox, oy=POY)
    # ---- panel 1: renteregelen skifter ned, B1 rett under A ----
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=6, dy=5, ox=OX, oy=POY)
    b += g2_kurve(G2_SRR, G2_CRRP, PUR, 2.4, lab='RR_{1}', dx=6, dy=5, ox=OX, oy=POY)
    b += g2_pt(G2_YA, G2_IA, 'A', (10, -10), ox=OX, oy=POY, ilab='i_{A}')
    b += g2_pt(G2_YA, G2_IB1P, 'B_{1}', (12, 5), color=PUR, ox=OX, oy=POY,
               xlab='Y_{A}', ilab='i_{B1}')
    _Yrk = 136.0                              # pila står ved båndets høyre kant
    b += arrow((g2x(_Yrk, OX), g2y(G2_CRR + G2_SRR * _Yrk, POY) + 4),
               (g2x(_Yrk, OX), g2y(G2_CRRP + G2_SRR * _Yrk, POY) - 6), PUR, 1.6)
    # merkelappen inne i det loddrette båndet mellom RR_0 og RR_1, midt mellom
    # RR_0 og pila (ellers skjærer den gjennom RR_0 eller gjennom pila selv)
    _irk = (G2_CRR + G2_CRRP) / 2 + G2_SRR * 128.0
    b += rt((g2x((_irk - G2_CRR) / G2_SRR, OX) + g2x(_Yrk, OX)) / 2,
            g2y(_irk, POY) + 4, 'rentekutt', 10.5, PUR, False, anchor='middle')
    # sjokket måles vannrett mellom IS_0 og IS_1 ved en fast rente, i den åpne
    # kilen over A (under er B1 og merkingen dens)
    _isj = 4.5
    _ysj = g2y(_isj, POY)
    b += arrow((g2x((G2_CIS - _isj) / -G2_SIS, OX), _ysj),
               (g2x((G2_CISP - _isj) / -G2_SIS, OX), _ysj), GREY, 1.6)
    b += rt(g2x((G2_CIS - _isj) / -G2_SIS, OX) + 5, _ysj - 10, 'sjokket: Z^{D} ned',
            10.5, GREY)
    # ---- panel 2: renteregelen ligger i ro, pakken fører IS_1 tilbake ----
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=6, dy=5, ox=510, oy=POY)
    b += g2_pt(G2_YA, G2_IA, 'A', (10, -10), ox=510, oy=POY, xlab='Y_{A}', ilab='i_{A}')
    b += rt(600, 150, 'renteregelen ligger i ro', 10.5, BLUE, False)
    _ifp = 1.2
    _yfp = g2y(_ifp, POY)
    b += arrow((g2x((G2_CISP - _ifp) / -G2_SIS, 510), _yfp),
               (g2x((G2_CIS - _ifp) / -G2_SIS, 510), _yfp), GRN, 1.8)
    b += rt(g2x((G2_CIS - _ifp) / -G2_SIS, 510) + 10, _yfp - 3, 'offentlige kjøp opp',
            10.5, GRN, False)
    b += rt(W / 2, 388, 'Samme Y, ulik sammensetning — og krona beveges bare i panel 1.',
            11.5, GREY, False, anchor='middle')
    save('penge-vs-finans', b)

    # -------------------- 12) drill: eksportsvikt (kap. 4.6) -------------
    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. Etterspørselsfallet fra '
               'utlandet skifter IS parallelt mot venstre langs en uendret renteregel. Den nye '
               'likevekten B ligger ned til venstre for A, med lavere produksjon og lavere '
               'rente. Et lyst punkt C med åpen sirkel viser hvor produksjonen ville havnet uten '
               'rentekuttet. En loddrett stiplet linje markerer potensielt BNP.')
    b += g2_zd_ned('Z^{D} ned — treffer bare IS')
    save('drill-eksportsvikt', b)

    # ------------------ 13) drill: kombinasjonssjokk (kap. 4.6) ----------
    # Prisløft ute (IS mot høyre + RR opp) MOT lavere anslag på nøytral rente
    # (RR ned). RR-skiftets RETNING er ubestemt — og fasiten i kap. 4.6 er
    # eksplisitt på at da er OGSÅ produksjonsretningen ubestemt: ΔY > 0 krever
    # H > m(c_2+b_2+a_2κ)·r, altså at IS-skiftet slår RR-skiftet. Figuren må vise
    # begge fortegn: RR-opp-grenen er derfor dosert stor nok til at likevekten
    # glir til VENSTRE for A, mens RR-ned-grenen gir høyere Y.
    G2_UK1, G2_UK2 = 4.0, -2.8          # RR opp (prisimpuls) mot RR ned (Z^i ned)
    G2_CISK = g2_cis_skift(G2_H)
    G2_YK1, G2_IK1 = g2_kryss(G2_CISK, G2_SIS, G2_CRR + G2_UK1, G2_SRR)
    G2_YK2, G2_IK2 = g2_kryss(G2_CISK, G2_SIS, G2_CRR + G2_UK2, G2_SRR)
    g2_paa(G2_YK1, G2_IK1, G2_SIS, G2_CISK, 'B1 på IS_1')
    g2_paa(G2_YK1, G2_IK1, G2_SRR, G2_CRR + G2_UK1, 'B1 på RR opp')
    g2_paa(G2_YK2, G2_IK2, G2_SIS, G2_CISK, 'B2 på IS_1')
    g2_paa(G2_YK2, G2_IK2, G2_SRR, G2_CRR + G2_UK2, 'B2 på RR ned')
    assert G2_IK1 > G2_IA > G2_IK2, 'renta skal være ubestemt — én B over og én under A'
    assert G2_YK1 < G2_YA < G2_YK2, 'produksjonen skal være ubestemt — én B på hver side av A'
    # kontroll av fellen fasiten peker på: ΔY < 0 krever at RR-skiftet slår IS-skiftet
    assert G2_UK1 > G2_H * abs(G2_SIS), 'RR-opp-grenen må være stor nok til at Y faller'
    assert G2_UK2 < 0 < G2_UK1, 'de to grenene skal skifte RR i motsatt retning'
    print(f'  [Del 4] kombinasjon: B1=({G2_YK1:.2f}; {G2_IK1:.2f})  B2=({G2_YK2:.2f}; {G2_IK2:.2f})')

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. IS skifter entydig mot '
               'høyre. Renteregelen er tegnet med to stiplede alternativer, ett oppover og ett '
               'nedover, og et stort spørsmålstegn, fordi de to impulsene trekker rentenivået i '
               'motsatt retning. De to alternativene gir likevektene B-én og B-to på den nye '
               'IS-kurven, én på hver side av A: den øvre ligger til venstre for A, med høyere '
               'rente og lavere produksjon, den nedre til høyre for A, med lavere rente og '
               'høyere produksjon. Både renta og produksjonen er altså ubestemte.', 440, 400)
    b += axes('Y', 'i')
    b += g2_yn()
    b += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', at='start',
                  dx=-6, dy=-7, anchor='end')
    b += g2_kurve(G2_SIS, G2_CISK, ORG, 2.4, lab='IS_{1}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR + G2_UK1, PUR, 2.0, '7 4', lab='RR opp?', lab_size=10.5,
                  dx=-6, dy=-9, anchor='end')
    b += g2_kurve(G2_SRR, G2_CRR + G2_UK2, GRN, 2.0, '7 4', lab='RR ned?', lab_size=10.5,
                  dx=-6, dy=-9, anchor='end')
    b += rt(307, 105, '?', 26, INK, False, True, anchor='middle')
    b += g2_pt(G2_YK1, G2_IK1, 'B_{1}', (11, 5), color=PUR, xlab='Y_{B1}', ilab='i_{B1}')
    b += g2_pt(G2_YK2, G2_IK2, 'B_{2}', (13, 6), color=GRN, xlab='Y_{B2}', ilab='i_{B2}')
    b += g2_pt(G2_YA, G2_IA, 'A', (-22, 18), xlab='Y_{A}', ilab='i_{A}')
    _ik = 1.0                                     # rentenivå der IS-skiftet måles
    b += arrow((g2x((G2_CIS - _ik) / -G2_SIS), g2y(_ik)),
               (g2x((G2_CISK - _ik) / -G2_SIS), g2y(_ik)), ORG, 1.7)
    b += rt((g2x((G2_CIS - _ik) / -G2_SIS) + g2x((G2_CISK - _ik) / -G2_SIS)) / 2,
            g2y(_ik) - 10, 'IS mot høyre', 10.5, ORG, False, anchor='middle')
    b += darrow((g2x(G2_YK1), 290), (g2x(G2_YK2), 290), INK)
    b += rt(160, 281, 'Y-retning ubestemt', 10.5, INK, False, anchor='middle')
    b += rt(OX, 358, 'IS skifter entydig mot høyre — men både i og Y er ubestemt',
            11.5, INK, False, True)
    b += rt(OX, 378, 'RR opp? = prisløftet ute dominerer', 10.5, PUR)
    b += rt(OX + 186, 378, 'RR ned? = lavere Z^{i} dominerer', 10.5, GRN)
    save('drill-kombinasjonssjokk', b)

    # ---------------- 14–16) prøvefigurene i kap. 4.prøve ----------------
    b = header('Diagram med produksjonen Y vannrett og renta i loddrett, med kurvene merket '
               'IS-null, IS-én og RR. Boligbyggingsfallet skifter IS parallelt mot venstre langs '
               'en uendret renteregel, og den nye likevekten B ligger ned til venstre for A. '
               'Stiplede hjelpelinjer går fra A og B til begge akser, og en loddrett stiplet '
               'linje markerer potensielt BNP.')
    b += g2_zd_ned('boligbygging ned = Z^{D} ned', med_c=False)
    save('prove4-c-boligfall', b)

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. En høyere risikopremie '
               'på kroner skifter IS mot høyre og renteregelen oppover. To stiplede '
               'renteregelkurver gir to alternative likevekter, B-én til høyre for A og B-to til '
               'venstre, begge høyere enn A. Renta stiger entydig, mens retningen på '
               'produksjonen er ubestemt.', 440, 400)
    b += g2_to_relasjoner('bedret konkurranseevne', 'banken svarer på kursen', 'Y ubestemt',
                          'Risikopremie opp (Z^{E} opp) — i entydig opp, Y ubestemt')
    save('prove4-c-risikopremie', b)

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. Det internasjonale '
               'prisløftet skifter IS mot høyre og renteregelen oppover. To stiplede '
               'renteregelkurver gir to alternative likevekter, B-én til høyre for A og B-to til '
               'venstre, begge høyere enn A. En loddrett stiplet linje markerer potensielt BNP. '
               'Renta stiger entydig, mens retningen på produksjonen er ubestemt.', 440, 400)
    b += g2_to_relasjoner('bedret konkurranseevne', 'importert prisvekst', 'Y ubestemt',
                          'Prisløft ute — to skift, to mulige B-punkter')
    save('prove4-d-prisloft-ute', b)

# ===========================================================================
# G2 — DEL 5: hovedkursmodellen (flytskjema), målbetingelsen i (v,k)-planet,
# broen mellom relasjonssettene, og prøvefiguren med prissjokk.
# ===========================================================================
if '5' in DELER:
    # ------------------ 1) hovedkurskjeden utenfra og inn -----------------
    W, H = 880, 424
    b = header('Flytdiagram uten akser, lest fra venstre mot høyre. Lengst til venstre en boks '
               'med de eksogene størrelsene utenfra: prisvekst på konkurranseutsatte varer, '
               'prisvekst på importvarer og vekst i valutakursen. Derfra går piler til to bokser '
               'med kroneprisveksten på konkurranseutsatte varer og på importvarer. Fra den '
               'første går pilen videre til lønnsveksten, som er kroneprisveksten pluss '
               'produktivitetsveksten i konkurranseutsatt sektor pluss et avvik fra hovedkursen; '
               'to sidepiler ovenfra markerer disse to tilleggene. Fra lønnsveksten går pilen til '
               'prisveksten i skjermet sektor, som er lønnsveksten minus produktivitetsveksten '
               'der; en sidepil ovenfra markerer fradraget. Til slutt går piler fra '
               'importprisveksten og fra prisveksten i skjermet sektor inn i en stiplet boks med '
               'konsumprisveksten, et vektet snitt der importandelen er vekten på importprisene. '
               'Den stiplede boksen er merket med at den ikke oppgis på eksamen og må suppleres '
               'selv. Underteksten sier at alle størrelser er vekstrater.', W, H)
    b += box(86, 210, 140, 70, ['Utenfra:', 'q_{k}, q_{i}, v'], INK, 13, '#f4f6f8')
    b += box(268, 118, 158, 46, ['p_{k} = q_{k} + v'], BLUE, 13, '#eef4fa')
    b += box(268, 302, 158, 46, ['p_{i} = q_{i} + v'], BLUE, 13, '#eef4fa')
    b += box(468, 118, 194, 46, ['w = p_{k} + z_{k} + k'], GRN, 13, '#eef7ef')
    b += box(678, 118, 172, 46, ['p_{s} = w − z_{s}'], GRN, 13, '#eef7ef')
    b += box(560, 316, 302, 78, ['π = α p_{i} + (1 − α) p_{s}',
                                 'oppgis ikke på eksamen —', 'suppleres selv'],
             ORG, 12.5, '#fdf6e6', dash='6 4')
    b += arrow((158, 192), (188, 132), GREY, 1.8)
    b += arrow((158, 228), (188, 288), GREY, 1.8)
    b += arrow((348, 118), (370, 118), GREY, 1.8)
    b += arrow((566, 118), (590, 118), GREY, 1.8)
    b += arrow((432, 66), (440, 93), GRN, 1.6)
    b += rt(432, 58, '+ z_{k}', 11.5, GRN, anchor='middle')
    b += arrow((506, 66), (498, 93), GRN, 1.6)
    b += rt(506, 58, '+ k', 11.5, GRN, anchor='middle')
    b += arrow((678, 66), (678, 93), GRN, 1.6)
    b += rt(678, 58, '− z_{s}', 11.5, GRN, anchor='middle')
    b += arrow((348, 302), (406, 308), ORG, 1.8)
    b += rt(370, 292, 'α', 14, ORG)
    b += arrow((678, 142), (660, 274), ORG, 1.8)
    b += rt(686, 208, '1 − α', 12.5, ORG)
    b += rt(86, 264, 'eksogent utenfra', 10.5, GREY, False, anchor='middle')
    b += rt(468, 154, 'frontfagsmodellen: hovedkursen p_{k} + z_{k}', 10.5, GREY,
            anchor='middle')
    b += rt(W / 2, 410, 'Alle størrelser er vekstrater — ikke nivåer.', 11.5, GREY, False,
            anchor='middle')
    save('econ2310-5-1-hovedkurskjeden', b)

    # ------------- 2) målbetingelsen som linje i (v,k)-planet -------------
    # π = π* + v + (1−α)k. Målet krever v + (1−α)k = π^mål − π*.
    G2_ALFA = 0.30                       # importandel i konsumet
    G2_PISTAR, G2_PIMAL = 5.0, 2.0       # prisvekst ute over inflasjonsmålet
    G2_RHS = G2_PIMAL - G2_PISTAR        # høyresiden: −3, altså negativ
    G2_HELN = -1.0 / (1.0 - G2_ALFA)     # helningen dk/dv = −1/(1−α)
    assert G2_RHS < 0, 'figuren gjelder tilfellet der prisveksten ute ligger OVER målet'
    assert near(G2_HELN, -1.0 / 0.7)

    def g2_k_av_v(v):
        return (G2_RHS - v) / (1.0 - G2_ALFA)

    G2_KA = g2_k_av_v(0.0)                       # punkt A: uendret krone
    G2_VB = G2_RHS                               # punkt B: uendret lønnsvekst
    assert G2_KA < 0, 'med uendret krone må lønnsveksten ligge UNDER hovedkursen'
    assert near(G2_KA, G2_RHS / (1 - G2_ALFA))
    assert near(g2_k_av_v(G2_VB), 0.0) and G2_VB < 0, 'i punkt B må krona STYRKE seg'
    assert near((g2_k_av_v(2.0) - g2_k_av_v(0.0)) / 2.0, G2_HELN), 'helningen skal være −1/(1−α)'
    # kontroll: inflasjonen treffer målet i BEGGE punkter, og ligger over til høyre
    def g2_pi(v, k):
        return G2_PISTAR + v + (1 - G2_ALFA) * k
    assert near(g2_pi(0.0, G2_KA), G2_PIMAL) and near(g2_pi(G2_VB, 0.0), G2_PIMAL)
    assert g2_pi(1.0, 0.0) > G2_PIMAL, 'over/til høyre for linja må inflasjonen ligge over målet'
    print(f'  [Del 5] målbetingelsen: helning {G2_HELN:.3f}, A=(0; {G2_KA:.3f}), '
          f'B=({G2_VB:.1f}; 0)')

    W, H = 470, 400
    CX, CY = 246, 178                    # origo midt i figuren
    VSC, KSC = 33.0, 21.5                # px per prosentpoeng
    VLO, VHI = -6.0, 4.0
    KLO, KHI = -7.0, 5.0

    def vx(v):
        return CX + VSC * v

    def ky(k):
        return CY - KSC * k

    assert vx(VLO) > 8 and vx(VHI) < W - 40 and ky(KHI) > 26 and ky(KLO) < H - 44

    b = header('Koordinatsystem med origo midt i figuren. Den vannrette aksen er veksten i '
               'valutakursen: mot venstre styrkes krona, mot høyre svekkes den. Den loddrette '
               'aksen er den ekstraordinære lønnsveksten, altså avviket fra hovedkursen. En rett, '
               'fallende linje viser alle kombinasjoner som gir inflasjon lik målet når '
               'prisveksten hos handelspartnerne ligger over målet. Linja skjærer den loddrette '
               'aksen under origo i punkt A, der krona er uendret og lønnsveksten ligger under '
               'hovedkursen, og den vannrette aksen til venstre for origo i punkt B, der '
               'lønnsveksten følger hovedkursen og krona styrker seg. Området over og til høyre '
               'for linja er skyggelagt og merket at inflasjonen ligger over målet.', W, H)
    # skyggelagt område: v + (1−α)k > høyresiden
    _p1 = (vx(VLO), ky(g2_k_av_v(VLO)))
    _vk = G2_RHS - (1 - G2_ALFA) * KLO           # v der linja treffer nedre kant
    _p2 = (vx(_vk), ky(KLO))
    b += (f'  <polygon points="{_p1[0]:.1f},{_p1[1]:.1f} {vx(VLO):.1f},{ky(KHI):.1f} '
          f'{vx(VHI):.1f},{ky(KHI):.1f} {vx(VHI):.1f},{ky(KLO):.1f} '
          f'{_p2[0]:.1f},{_p2[1]:.1f}" fill="{RED}" opacity="0.09"/>\n')
    # aksekors
    b += line((vx(VLO) - 8, CY), (vx(VHI) + 14, CY), AX, 1.6)
    b += line((CX, ky(KLO) - 14), (CX, ky(KHI) - 12), AX, 1.6)
    b += (f'  <polygon points="{vx(VHI)+14:.1f},{CY} {vx(VHI)+6:.1f},{CY-4} '
          f'{vx(VHI)+6:.1f},{CY+4}" fill="{AX}"/>\n')
    b += (f'  <polygon points="{CX},{ky(KHI)-12:.1f} {CX-4},{ky(KHI)-4:.1f} '
          f'{CX+4},{ky(KHI)-4:.1f}" fill="{AX}"/>\n')
    b += rt(vx(VHI) + 18, CY + 5, 'v', 15, INK)
    b += rt(CX - 12, ky(KHI) - 18, 'k', 15, INK)
    b += rt(CX - 14, CY + 16, '0', 11, GREY, False, anchor='end')
    b += rt(vx(-1.0), CY + 20, 'krona styrkes', 10.5, GREY, False, anchor='end')
    b += rt(vx(0.6), CY + 20, 'krona svekkes', 10.5, GREY, False)
    b += rt(CX + 10, ky(KHI) - 2, 'lønnsvekst over hovedkursen', 10, GREY, False)
    b += rt(CX - 12, ky(KLO) + 4, 'lønnsvekst under hovedkursen', 10, GREY, False, anchor='end')
    # sjølve linja
    b += line(_p1, _p2, BLUE, 2.6)
    b += rt(_p1[0] + 8, _p1[1] - 8, 'v + (1 − α)k = π^{mål} − π*', 12, BLUE)
    b += rt(_p1[0] + 8, _p1[1] + 8, 'helning −1/(1 − α)', 10.5, BLUE)
    # punktene A og B
    b += line((CX, ky(G2_KA)), (vx(1.4), ky(G2_KA)), GREY, 1.2, '5 4')
    b += dot(CX, ky(G2_KA))
    b += rt(CX + 10, ky(G2_KA) + 18, 'A', 15, INK, False, True)
    b += rt(CX + 26, ky(G2_KA) + 18, 'uendret krone, k < 0', 10.5, GREY, False)
    b += line((vx(G2_VB), CY), (vx(G2_VB), ky(-2.2)), GREY, 1.2, '5 4')
    b += dot(vx(G2_VB), CY)
    b += rt(vx(G2_VB) - 10, CY - 12, 'B', 15, INK, False, True, anchor='end')
    b += rt(vx(G2_VB) + 9, CY - 15, 'k = 0: krona styrkes', 10.5, GREY, False)
    b += rt(vx(1.1), ky(3.4), 'inflasjon over målet', 11, RED, False, True)
    b += rt(vx(-4.9), ky(-4.6), 'inflasjon under målet', 10.5, GREY, False)
    b += rt(24, H - 26, 'Modellen gir to knapper når prisveksten ute ligger over målet:',
            11, INK, False, True)
    b += rt(24, H - 10, 'styrke krona (v < 0) eller holde lønnsveksten under hovedkursen '
            '(k < 0) — eller en blanding.', 10.5, GREY, False)
    save('econ2310-5-3-inflasjonsmaal-linje', b)

    # -------------------- 3) broen mellom relasjonssettene ---------------
    W, H = 700, 344
    b = header('Diagram med to like store bokser side ved side. Venstre boks er merket '
               'hovedkursmodellen og har kulepunktene inflasjon, reallønnsvekst og lønnsomhet i '
               'konkurranseutsatt sektor. Høyre boks er merket den åpne modellen med IS, '
               'renteregelen og Phillips-kurven, og har kulepunktene produksjon, rente og '
               'valutakurs. Mellom boksene går en bred tosidig pil merket at valutakursen er '
               'broen mellom dem, med underteksten at høyere rente styrker krona, slik at '
               'kursveksten blir negativ. Under høyre boks står en note om at prisimpulsen er '
               'samme sjokk som høyere prisvekst ute.', W, H)
    for cx, tittel, punkter in ((152, 'Hovedkursmodellen',
                                 ['inflasjon  π', 'reallønnsvekst  w − π',
                                  'lønnsomhet i K-sektor  (k)']),
                                (548, 'Åpen IS-RR-PK',
                                 ['produksjon  Y', 'rente  i', 'valutakurs  E'])):
        b += (f'  <rect x="{cx-120}" y="82" width="240" height="180" rx="8" '
              f'fill="#f7f9fb" stroke="{INK}" stroke-width="1.8"/>\n')
        b += rt(cx, 112, tittel, 13, INK, False, True, anchor='middle')
        for j, pk in enumerate(punkter):
            b += rt(cx - 100, 148 + 30 * j, '•', 12, GREY, False)
            b += rt(cx - 86, 148 + 30 * j, pk, 12, INK)
    b += rt(350, 130, 'valutakursen', 11.5, INK, False, True, anchor='middle')
    b += rt(350, 145, '— broen —', 11.5, INK, False, True, anchor='middle')
    b += darrow((284, 176), (416, 176), INK, 3.0, 9)
    b += rt(350, 202, 'i ↑  ⇒  E ↓  ⇒  v < 0', 11, GREY, anchor='middle')
    b += rt(350, 218, '(sterkere krone)', 10, GREY, False, anchor='middle')
    b += rt(548, 288, 'Z^{π} = samme sjokk som høyere q_{k}, q_{i}', 11, GREY,
            anchor='middle')
    b += rt(152, 288, 'lønns- og prisdannelsen', 11, GREY, False, anchor='middle')
    b += rt(W / 2, 326, 'To relasjonssett, én kobling: renta bestemmer kursen, og '
            'kursveksten går rett inn i kroneprisene.', 10.5, GREY, False, anchor='middle')
    save('econ2310-5-3-samspill-bro', b)

    # ------------- 4) prøve 5.D: prissjokk ute + kronesvekkelse ----------
    # Dosert slik at de to skiftene nøyaktig nuller ut hverandre i Y-retningen:
    # da ligger B rett over A, og retningen på Y er nettopp det ubestemte.
    G2_H5 = 20.0
    G2_U5 = -G2_SIS * G2_H5                      # = 3,0: gir Y_B = Y_A eksakt
    G2_CIS5 = g2_cis_skift(G2_H5)
    G2_YB5, G2_IB5 = g2_kryss(G2_CIS5, G2_SIS, G2_CRR + G2_U5, G2_SRR)
    assert near(G2_YB5, G2_YA), 'B skal ligge rett over A i denne doseringen'
    assert G2_IB5 > G2_IA, 'renta skal stige entydig'
    print(f'  [Del 5] prøve 5.D: B=({G2_YB5:.2f}; {G2_IB5:.2f}) rett over A=({G2_YA:.0f}; {G2_IA:.2f})')

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. En fallende IS-kurve og '
               'en stigende renteregelkurve krysser i punkt A. Renteregelen skifter oppover fordi '
               'prisimpulsen og kursimpulsen begge tilsier høyere rente, og IS skifter mot høyre '
               'fordi konkurranseevnen bedres. Den nye likevekten B ligger klart høyere enn A og '
               'omtrent rett over A langs den vannrette aksen. Et spørsmålstegn ved '
               'produksjonsnivået i B og en tosidig vannrett pil gjennom B viser at retningen på '
               'produksjonen er ubestemt. Stiplede hjelpelinjer går fra A og B til begge akser.',
               440, 412)
    b += axes('Y', 'i')
    b += g2_yn()
    b += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', dx=7, dy=5)
    b += g2_kurve(G2_SIS, G2_CIS5, ORG, 2.4, lab='IS_{1}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR + G2_U5, PUR, 2.4, lab='RR_{1}', dx=-6, dy=-9, anchor='end')
    _y5 = g2y(G2_CIS + G2_SIS * 106.0)
    b += arrow((g2x(106.0), _y5 - 3), (g2x(106.0 + G2_H5), _y5 - 3), ORG, 2.0)
    b += arrow((g2x(78.0), g2y(G2_CRR + G2_SRR * 78.0) - 4),
               (g2x(78.0), g2y(G2_CRR + G2_U5 + G2_SRR * 78.0) + 6), PUR, 2.0)
    b += g2_pt(G2_YB5, G2_IB5, 'B', (11, -10), color=PUR, ilab='i_{B}')
    b += g2_pt(G2_YA, G2_IA, 'A', (-22, 18), xlab='Y_{A}', ilab='i_{A}')
    b += darrow((g2x(G2_YB5) - 46, g2y(G2_IB5)), (g2x(G2_YB5) + 46, g2y(G2_IB5)), INK)
    b += rt(g2x(G2_YB5) + 54, g2y(G2_IB5) + 5, '?', 20, INK, False, True)
    b += rt(OX, 352, 'Renta stiger entydig — retningen på Y er ubestemt', 11.5, INK, False, True)
    b += rt(OX, 372, 'IS_{0} → IS_{1}: bedret konkurranseevne', 10.5, ORG)
    b += rt(OX + 196, 372, 'RR_{0} → RR_{1}: Z^{π} og Z^{E} opp', 10.5, PUR)
    b += rt(OX, 390, 'Hvor B havner vannrett, avhenger av hvor kraftig banken svarer '
            'på kursimpulsen.', 10.5, GREY, False)
    save('econ2310-5-prove-is-rr-prissjokk', b)


# ===========================================================================
# G2 — DEL 6: todelt økonomi, kriselikevekt med tre skjæringer, KI i
# arbeidsmarkedet, og prøvefiguren med to motstridende IS-skift.
# ===========================================================================
if '6' in DELER:
    # ------------------ 1) todelt økonomi og ringvirkningen --------------
    W, H = 690, 402
    b = header('Diagram med to like store sektorbokser side ved side: varesektoren, som er åpen, '
               'og tjenestesektoren, som er delvis stengt. Mellom boksene går to buede piler i '
               'motsatt retning, merket kryssvis etterspørsel. En tykk pil utenfra treffer '
               'tjenestesektoren ovenfra og er merket nedstenging, altså en tilbudsbegrensning. '
               'Under boksene går en stiplet pil fra tjenestesektoren til varesektoren, merket at '
               'lavere inntekt gir lavere vareetterspørsel, og en tynnere stiplet pil tilbake, '
               'merket ringvirkning. Underteksten sier at det samlede fallet er større enn den '
               'direkte nedstengingen.', W, H)
    b += box(160, 162, 214, 92, ['Varesektor', '(åpen)'], BLUE, 13.5, '#eef4fa')
    b += box(504, 162, 234, 92, ['Tjenestesektor', '(delvis stengt)'], RED, 13.5, '#fdeeec')
    b += arrow((504, 52), (504, 112), INK, 4.2, size=11)
    b += rt(504, 30, 'Nedstenging', 12.5, INK, False, True, anchor='middle')
    b += rt(504, 44, '(tilbudsbegrensning)', 10.5, GREY, False, anchor='middle')
    b += g2_arc((270, 142), (384, 142), 16, GREY, 1.8)
    b += g2_arc((384, 182), (270, 182), 16, GREY, 1.8)
    b += rt(327, 108, 'kryssvis', 10.5, GREY, False, anchor='middle')
    b += rt(327, 121, 'etterspørsel', 10.5, GREY, False, anchor='middle')
    b += g2_polyarrow([(504, 208), (504, 264), (170, 264), (170, 210)], RED, 1.8, '7 4')
    b += rt(337, 286, '1.  lavere inntekt  →  lavere vareetterspørsel', 11, RED, False,
            anchor='middle')
    b += g2_polyarrow([(148, 208), (148, 318), (492, 318), (492, 210)], ORG, 1.5, '7 4')
    b += rt(337, 336, '2.  ringvirkning tilbake til tjenestene', 10.5, ORG, False,
            anchor='middle')
    b += rt(W / 2, 372, 'Samlet fall  >  direkte nedstenging', 13, INK, False, True,
            anchor='middle')
    b += rt(W / 2, 390, 'En aggregert modell ser bare summen — den todelte ser hvor fallet '
            'kommer fra.', 10.5, GREY, False, anchor='middle')
    save('econ2310-6-2-todelt-ringvirkning', b)

    # ---------- 2) kriselikevekt: S-formet etterspørsel, TRE kryss -------
    # D(Y) = a·Y + K + Amp·L((Y−Ym)/s) med L logistisk. Stabilitetsregelen i
    # kap. 6.3: D′ < 1 gir stabil likevekt, D′ > 1 ustabil terskel.
    G2_A6, G2_K6, G2_AMP, G2_S6, G2_YM = 0.55, 5.7, 33.6, 8.0, 50.0

    def g2_L(x):
        return 1.0 / (1.0 + math.exp(-x))

    def g2_D(Y):
        return G2_A6 * Y + G2_K6 + G2_AMP * g2_L((Y - G2_YM) / G2_S6)

    def g2_Dd(Y):
        u = g2_L((Y - G2_YM) / G2_S6)
        return G2_A6 + (G2_AMP / G2_S6) * u * (1.0 - u)

    def g2_rot(lo, hi):
        """Halveringsmetoden på D(Y) − Y = 0."""
        f = lambda Y: g2_D(Y) - Y
        assert f(lo) * f(hi) < 0, (lo, hi, f(lo), f(hi))
        for _ in range(200):
            mid = 0.5 * (lo + hi)
            if f(lo) * f(mid) <= 0:
                hi = mid
            else:
                lo = mid
        return 0.5 * (lo + hi)

    G2_YL = g2_rot(1.0, 30.0)
    G2_YT = g2_rot(30.0, 70.0)
    G2_YH = g2_rot(70.0, 99.0)
    assert G2_YL < G2_YT < G2_YH, 'de tre skjæringene skal ligge i rekkefølge'
    for _Y in (G2_YL, G2_YT, G2_YH):
        assert near(g2_D(_Y), _Y, 1e-6), 'skjæringen skal ligge PÅ 45-graderslinja'
    assert g2_Dd(G2_YL) < 1.0, 'lavlikevekten skal være stabil (D′ < 1)'
    assert g2_Dd(G2_YT) > 1.0, 'terskelen skal være ustabil (D′ > 1)'
    assert g2_Dd(G2_YH) < 1.0, 'høylikevekten skal være stabil (D′ < 1)'
    # dynamikkretningene: D > Y gir pil mot høyre, D < Y gir pil mot venstre
    G2_DYN = [(0.5 * G2_YL, +1), (0.5 * (G2_YL + G2_YT), -1),
              (0.5 * (G2_YT + G2_YH), +1), (0.5 * (G2_YH + 100.0), -1)]
    for _Y, _sign in G2_DYN:
        assert (1 if g2_D(_Y) > _Y else -1) == _sign, f'feil pilretning ved Y = {_Y:.1f}'
    print(f'  [Del 6] kriselikevekt: Y_L={G2_YL:.2f} (D′={g2_Dd(G2_YL):.3f}), '
          f'Ȳ={G2_YT:.2f} (D′={g2_Dd(G2_YT):.3f}), Y_H={G2_YH:.2f} (D′={g2_Dd(G2_YH):.3f})')

    W, H = 440, 386
    SC = 2.6                                     # LIK skala på begge akser -> ekte 45°
    K6OY, K6OX = 300, 70

    def k6x(Y):
        return K6OX + SC * Y

    def k6y(v):
        return K6OY - SC * v

    assert near(SC, SC), 'begge akser må ha samme skala for at 45-graderslinja skal bli 45°'
    assert k6x(100.0) < 400 and k6y(100.0) > 30

    b = header('Diagram med samlet produksjon langs den vannrette aksen og samlet etterspørsel '
               'langs den loddrette, med samme skala på begge akser. En stiplet rett linje fra '
               'origo viser alle punkter der etterspørselen er lik produksjonen. '
               'Etterspørselskurven er S-formet: slak ved lav produksjon fordi risikopremien er '
               'høy, brattere enn den stiplede linja i midtområdet fordi premien faller raskt, og '
               'slak igjen ved høy produksjon. Kurven krysser den stiplede linja i tre punkter. '
               'De to ytterste er stabile og merket kriselikevekten og høylikevekten; det '
               'midterste er en ustabil terskel og tegnet med åpen sirkel. Alle tre har stiplede '
               'hjelpelinjer ned til den vannrette aksen. Under aksen peker dynamikkpiler mot '
               'kriselikevekten i de to intervallene under terskelen og mot høylikevekten i de to '
               'intervallene over den.', W, H)
    b += axes('Y', 'samlet etterspørsel', ox=K6OX, oy=K6OY, xmax=400, ytop=30,
              ylab_italic=False, ylab_size=12)
    b += line((k6x(0), k6y(0)), (k6x(100), k6y(100)), GREY, 1.8, '7 5')
    b += rt(k6x(100) + 6, k6y(100) + 5, '45°', 11, GREY, False)
    _pts = [(k6x(Y * 0.5), k6y(g2_D(Y * 0.5))) for Y in range(0, 201)]
    b += polyline(_pts, BLUE, 2.6)
    b += rt(k6x(100) + 6, k6y(g2_D(100.0)) + 5, 'D(Y)', 12, BLUE)
    for _Y, _lab, _open, _dx in ((G2_YL, 'Y_{L}', False, -20), (G2_YT, 'Ȳ', True, -8),
                                 (G2_YH, 'Y_{H}', False, 10)):
        b += line((k6x(_Y), k6y(_Y)), (k6x(_Y), K6OY), GREY, 1.2, '5 4')
        b += (odot(k6x(_Y), k6y(_Y)) if _open else dot(k6x(_Y), k6y(_Y)))
        b += rt(k6x(_Y) + _dx, k6y(_Y) - 10, _lab, 14, INK, False, True)
        b += rt(k6x(_Y) - 9, K6OY + 17, _lab, 12, GREY)
    b += rt(k6x(G2_YL) - 4, k6y(G2_YL) + 22, 'stabil', 9.5, GREY, False, anchor='middle')
    b += rt(k6x(G2_YT) - 14, k6y(G2_YT) + 16, 'ustabil terskel', 9.5, GREY, False,
            anchor='end')
    b += rt(k6x(G2_YH) + 6, k6y(G2_YH) + 22, 'stabil', 9.5, GREY, False)
    for _Y, _sign in G2_DYN:
        _len = 22.0
        _x0 = k6x(_Y) - _sign * _len / 2
        b += arrow((_x0, K6OY + 34), (_x0 + _sign * _len, K6OY + 34), INK, 1.5, size=6)
    b += rt(78, 214, 'høy risikopremie —', 10, GREY, False)
    b += rt(78, 226, 'dyre lån, svak etterspørsel', 10, GREY, False)
    b += rt(228, 46, 'lav risikopremie', 10, GREY, False)
    b += rt(K6OX, 366, 'Slakere enn 45°-linja = stabil  ·  brattere = ustabil terskel',
            11, INK, False, True)
    save('econ2310-6-3-kriselikevekt', b)

    # ------------- 3) KI i arbeidsmarkedet: erstatte mot forsterke -------
    # Etterspørsel: w = 100 − 0,8·L. Tilbud: w = 20 + 0,6·L.
    G2_WD0, G2_BD = 100.0, 0.8
    G2_WS0, G2_BS = 20.0, 0.6
    G2_SKIFT = 25.0

    def g2_am(wd0, ws0):
        """Likevekten der arbeidsetterspørsel møter arbeidstilbud."""
        L = (wd0 - ws0) / (G2_BD + G2_BS)
        w = wd0 - G2_BD * L
        assert near(w, ws0 + G2_BS * L), 'punktet må ligge på BEGGE kurver'
        return L, w

    G2_LA, G2_WA = g2_am(G2_WD0, G2_WS0)
    # erstattende teknologi: tilbudet skifter mot høyre (robotene er «nye arbeidere»)
    G2_LB1, G2_WB1 = g2_am(G2_WD0, G2_WS0 - G2_BS * G2_SKIFT)
    # forsterkende teknologi: etterspørselen skifter mot høyre (høyere verdi per time)
    G2_LB2, G2_WB2 = g2_am(G2_WD0 + G2_BD * G2_SKIFT, G2_WS0)
    assert G2_WB1 < G2_WA and G2_LB1 > G2_LA, 'erstattende teknologi må gi LAVERE lønn'
    assert G2_WB2 > G2_WA and G2_LB2 > G2_LA, 'forsterkende teknologi må gi HØYERE lønn'
    print(f'  [Del 6] arbeidsmarked: A=({G2_LA:.2f}; {G2_WA:.2f}), '
          f'erstattende B=({G2_LB1:.2f}; {G2_WB1:.2f}), '
          f'forsterkende B=({G2_LB2:.2f}; {G2_WB2:.2f})')

    W, H = 880, 400
    AOY, ATOP = 322, 76
    LSC, WSC = 3.1, 2.35

    def amx(L, ox):
        return ox + LSC * L

    def amy(w):
        return AOY - WSC * w

    assert amy(102.0) > ATOP and amx(100.0, 510) < 840

    b = header('Todelt figur med to arbeidsmarkedsdiagrammer side ved side. I begge har den '
               'vannrette aksen arbeidsmengde og den loddrette lønn, med en fallende '
               'arbeidsetterspørselskurve, en stigende arbeidstilbudskurve og likevekten A merket '
               'med stiplede hjelpelinjer. I venstre panel, erstattende teknologi, skifter '
               'tilbudskurven mot høyre fordi maskinene virker som nye arbeidere, og den nye '
               'likevekten B har lavere lønn og større arbeidsmengde. I høyre panel, forsterkende '
               'teknologi, skifter etterspørselskurven mot høyre fordi verdien av en arbeidstime '
               'stiger, og den nye likevekten B har høyere lønn og større arbeidsmengde. Samme '
               'teknologi, motsatt fortegn på lønna.', W, H)
    b += rt(W / 2, 28, 'Kunstig intelligens i arbeidsmarkedet', 16, INK, False, True,
            anchor='middle')
    b += rt(224, 58, 'Erstattende teknologi', 13, INK, False, True, anchor='middle')
    b += rt(664, 58, 'Forsterkende teknologi', 13, INK, False, True, anchor='middle')
    b += line((440, 72), (440, 352), '#d0d4da', 1.4)
    for _ox, _xmax, _erstatt in ((70, 400, True), (510, 840, False)):
        b += axes('L', 'w', ox=_ox, oy=AOY, xmax=_xmax, ytop=ATOP)
        b += line((amx(0, _ox), amy(G2_WD0)), (amx(96.0, _ox), amy(G2_WD0 - G2_BD * 96.0)),
                  RED, 2.4)
        b += line((amx(0, _ox), amy(G2_WS0)), (amx(96.0, _ox), amy(G2_WS0 + G2_BS * 96.0)),
                  BLUE, 2.4)
        if _erstatt:
            b += line((amx(G2_SKIFT, _ox), amy(G2_WS0)),
                      (amx(96.0, _ox), amy(G2_WS0 + G2_BS * (96.0 - G2_SKIFT))),
                      PUR, 2.4, '7 4')
            b += rt(amx(96.0, _ox) + 6, amy(G2_WS0 + G2_BS * 96.0) + 4, 'T_{0}', 12.5, BLUE)
            b += rt(amx(96.0, _ox) + 6, amy(G2_WS0 + G2_BS * (96.0 - G2_SKIFT)) + 4,
                    'T_{1}', 12.5, PUR)
            b += rt(amx(96.0, _ox) - 6, amy(G2_WD0 - G2_BD * 96.0) - 8, 'E', 12.5, RED,
                    anchor='end')
            _wp = 40.0
            _L0 = (_wp - G2_WS0) / G2_BS
            b += arrow((amx(_L0, _ox), amy(_wp)), (amx(_L0 + G2_SKIFT, _ox), amy(_wp)),
                       PUR, 1.7)
            b += rt(amx(_L0 + 1.0, _ox), amy(_wp) + 16, 'roboter = nye arbeidere',
                    10.5, PUR, False)
            _LB, _WB, _dxy = G2_LB1, G2_WB1, (11, 18)
        else:
            b += line((amx(G2_SKIFT, _ox), amy(G2_WD0)),
                      (amx(96.0, _ox), amy(G2_WD0 - G2_BD * (96.0 - G2_SKIFT))),
                      ORG, 2.4, '7 4')
            b += rt(amx(96.0, _ox) - 6, amy(G2_WD0 - G2_BD * 96.0) - 8, 'E_{0}', 12.5, RED,
                    anchor='end')
            b += rt(amx(96.0, _ox) + 6, amy(G2_WD0 - G2_BD * (96.0 - G2_SKIFT)) + 4,
                    'E_{1}', 12.5, ORG)
            b += rt(amx(96.0, _ox) + 6, amy(G2_WS0 + G2_BS * 96.0) + 4, 'T', 12.5, BLUE)
            _wp = 90.0
            _L0 = (G2_WD0 - _wp) / G2_BD
            b += arrow((amx(_L0, _ox), amy(_wp)), (amx(_L0 + G2_SKIFT, _ox), amy(_wp)),
                       ORG, 1.7)
            b += rt(amx(_L0 + 1.0, _ox), amy(_wp) + 16, 'høyere verdi per arbeidstime',
                    10.5, ORG, False)
            _LB, _WB, _dxy = G2_LB2, G2_WB2, (11, -11)
        for _L, _w, _lab, _d, _col in ((G2_LA, G2_WA, 'A', (-22, -11), INK),
                                       (_LB, _WB, 'B', _dxy, PUR if _erstatt else ORG)):
            _x, _y = amx(_L, _ox), amy(_w)
            b += line((_x, _y), (_x, AOY), GREY, 1.2, '5 4')
            b += line((_ox, _y), (_x, _y), GREY, 1.2, '5 4')
            b += dot(_x, _y, _col)
            b += rt(_x + _d[0], _y + _d[1], _lab, 15, _col, False, True)
        b += rt(_ox - 30, amy(G2_WA) + 5, 'w_{A}', 12, INK)
        b += rt(_ox - 30, amy(_WB) + 5, 'w_{B}', 12, PUR if _erstatt else ORG)
    b += rt(224, 372, 'Lønna FALLER — inntekt flyttes fra lønn til kapital', 11, PUR, False,
            True, anchor='middle')
    b += rt(664, 372, 'Lønna STIGER — arbeidskraften blir mer verdt', 11, ORG, False, True,
            anchor='middle')
    b += rt(W / 2, 390, 'L = utført arbeid, w = lønn per time.  Samme teknologi kan '
            'erstatte i ett yrke og forsterke i et annet.', 10.5, GREY, False,
            anchor='middle')
    save('econ2310-6-3-ki-arbeidsmarked', b)

    # ------- 4) prøve 6.D: RR opp og TO motstridende IS-skift ------------
    # Fasiten til 6.D er eksplisitt: BEGGE koordinatene til den nye likevekten er
    # ubestemte. Kursimpulsen trekker renta opp (g_E-leddet), men et stort nok
    # etterspørselsfall ute trekker den ned gjennom produksjonsgapet (g_Y-leddet).
    # Figuren tegner derfor TO alternative likevekter — én over og til høyre for A,
    # én under og til venstre — hver på skjæringen mellom RR_1 og sin egen
    # IS-gren. Ingen likevekt plasseres på IS_0 (den gjelder ikke lenger).
    G2_U6 = 1.0                        # RR opp: valutakursimpulsen g_E·Z^E
    G2_H6 = 30.0                       # like store, motsatte IS-impulser
    G2_CIS6H = g2_cis_skift(G2_H6)     # bedret konkurranseevne dominerer
    G2_CIS6V = g2_cis_skift(-G2_H6)    # svakere vekst ute dominerer
    G2_YB6H, G2_IB6H = g2_kryss(G2_CIS6H, G2_SIS, G2_CRR + G2_U6, G2_SRR)
    G2_YB6V, G2_IB6V = g2_kryss(G2_CIS6V, G2_SIS, G2_CRR + G2_U6, G2_SRR)
    g2_paa(G2_YB6H, G2_IB6H, G2_SIS, G2_CIS6H, 'B1 på IS høyre')
    g2_paa(G2_YB6H, G2_IB6H, G2_SRR, G2_CRR + G2_U6, 'B1 på RR_1')
    g2_paa(G2_YB6V, G2_IB6V, G2_SIS, G2_CIS6V, 'B2 på IS venstre')
    g2_paa(G2_YB6V, G2_IB6V, G2_SRR, G2_CRR + G2_U6, 'B2 på RR_1')
    assert G2_YB6V < G2_YA < G2_YB6H, 'Y-retningen skal være ubestemt — én B på hver side av A'
    assert G2_IB6V < G2_IA < G2_IB6H, 'i-retningen skal være ubestemt — én B under og én over A'
    # venstre-grenen krever at g_Y-leddet slår kursimpulsen; kontroller regnestykket
    assert near(G2_IB6V - G2_IA, G2_U6 + G2_SRR * (G2_YB6V - G2_YA)), \
        'rentevirkningen er kursimpulsen pluss renteregelens svar på gapet'
    assert G2_U6 < G2_SRR * (G2_YA - G2_YB6V), 'produksjonsgapet må dominere i venstre gren'
    print(f'  [Del 6] prøve 6.D: B1=({G2_YB6H:.2f}; {G2_IB6H:.2f})  '
          f'B2=({G2_YB6V:.2f}; {G2_IB6V:.2f})  A=({G2_YA:.0f}; {G2_IA:.2f})')

    b = header('Diagram med produksjonen Y vannrett og renta i loddrett. En fallende IS-kurve og '
               'en stigende renteregelkurve krysser i punkt A. Renteregelen skifter oppover fordi '
               'krona er svekket. IS er tegnet med to stiplede alternativer på hver sin side av '
               'utgangskurven: ett mot høyre fordi konkurranseevnen bedres, og ett mot venstre '
               'fordi veksten ute er svakere. Hvert alternativ krysser den nye renteregelkurven '
               'i sin egen likevekt: B-én ligger opp til høyre for A, B-to ned til venstre for A. '
               'En vannrett dobbeltpil nederst og en loddrett dobbeltpil til høyre viser at både '
               'produksjonen og renta kan gå begge veier. Stiplede hjelpelinjer går fra alle tre '
               'punktene til begge akser.', 440, 412)
    b += axes('Y', 'i')
    b += g2_yn()
    b += g2_kurve(G2_SIS, G2_CIS, RED, 2.4, lab='IS_{0}', dx=7, dy=5)
    b += g2_kurve(G2_SIS, G2_CIS6H, ORG, 2.0, '7 4', lab='IS høyre', lab_size=10.5,
                  at='start', dx=-6, dy=-4, anchor='end')
    b += g2_kurve(G2_SIS, G2_CIS6V, GRN, 2.0, '7 4', lab='IS venstre', lab_size=10.5,
                  at='start', dx=-6, dy=3, anchor='end')
    b += g2_kurve(G2_SRR, G2_CRR, BLUE, 2.4, lab='RR_{0}', dx=7, dy=5)
    b += g2_kurve(G2_SRR, G2_CRR + G2_U6, PUR, 2.4, lab='RR_{1}', dx=-6, dy=-9, anchor='end')
    b += arrow((g2x(125.0), g2y(G2_CRR + G2_SRR * 125.0) - 4),
               (g2x(125.0), g2y(G2_CRR + G2_U6 + G2_SRR * 125.0) + 6), PUR, 1.8)
    # ubestemt Y: dobbeltpil mellom de to likevektene, like over aksen
    b += darrow((g2x(G2_YB6V), 292), (g2x(G2_YB6H), 292), INK)
    b += rt(200, 282, 'Y-retning ubestemt', 10.5, INK, False, anchor='middle')
    # ubestemt i: dobbeltpil mellom de to rentenivåene, i den frie høyremargen
    b += darrow((388, g2y(G2_IB6V)), (388, g2y(G2_IB6H)), INK)
    b += rt(378, (g2y(G2_IB6V) + g2y(G2_IB6H)) / 2 - 3, 'i-retning', 10.5, INK, False,
            anchor='end')
    b += rt(378, (g2y(G2_IB6V) + g2y(G2_IB6H)) / 2 + 10, 'ubestemt', 10.5, INK, False,
            anchor='end')
    b += g2_pt(G2_YB6H, G2_IB6H, 'B_{1}', (-8, -12), color=ORG,
               xlab='Y_{B1}', ilab='i_{B1}')
    b += g2_pt(G2_YB6V, G2_IB6V, 'B_{2}', (-4, -24), color=GRN,
               xlab='Y_{B2}', ilab='i_{B2}')
    b += g2_pt(G2_YA, G2_IA, 'A', (11, 18), xlab='Y_{A}', ilab='i_{A}')
    b += rt(OX, 352, 'Både renta og produksjonen er ubestemte', 11.5, INK, False, True)
    b += rt(OX, 372, 'RR_{0} → RR_{1}: Z^{E} opp (svakere krone)', 10.5, PUR)
    b += rt(OX, 390, 'IS høyre: bedret konkurranseevne', 10.5, ORG)
    b += rt(OX + 196, 390, 'IS venstre: svakere vekst ute', 10.5, GRN)
    save('econ2310-6-prove-is-rr-6d', b)

print('\nFerdig — ECON2310-figurer for del ' + '+'.join(sorted(DELER)) + ' generert.')
