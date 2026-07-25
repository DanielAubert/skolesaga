#!/usr/bin/env python3
"""Figurgenerator for ECON2220 Mikroøkonomi 2 (UiO).

Bygger på husets figurbibliotek `gen-mikrofigurer.py`: samme aksefrat
(viewBox 440x360, origo 70/300), samme fargepalett, Georgia-serif og samme
prinsipp — **en figur skal bare vise det kapitlet FAKTISK har lært bort**.

All geometri REGNES UT (tangeringer, kurvekryss, GK-minimum der MK skjærer,
nedleggingspris i minimum av gjennomsnittlig unngåelig kostnad,
bytteboks-likevekter der BEGGE markeder klarerer) — ingenting tegnes på
øyemål. Hver konstruksjon er kontrollert numerisk før SVG-en skrives.

Bruk:
  python3 scripts/hoyskolebok/gen-econ2220-figurer.py [ut-katalog] [--dele 4-8]

`--dele` tar en liste/intervall av temadeler: «4-8», «4,5,8», «5». Standard er
alle deler denne fila kjenner. Etterpå: wire som image-blokker MED SKREDDERSYDD
caption per plassering, og kjør `npx tsx scripts/upload-media-storage.ts`.

Eierskap: funksjonene under prefikset `f2_` (Del 4, 5 og 8) eies av agent F2.
Andre agenter legger til egne funksjoner med eget prefiks og egen del-nøkkel i
REGISTER nederst — ikke endre eksisterende funksjoner.
"""
import math
import os
import sys

# ---------------------------------------------------------------- aksefrat
OX, OY = 70, 300           # origo (nedre venstre) — som gen-mikrofigurer.py
XMAX, YTOP = 410, 30       # akseender
RED, BLUE, GRN, PUR, ORG = '#c0392b', '#2471a3', '#1a7f37', '#8250df', '#bf8700'
GREY = '#666'
INK = '#222'

# Edgeworth-boksens ramme (plass til fire aksenavn + kantetiketter)
BL, BR, BT, BB = 78, 372, 56, 286


def esc(s):
    return (str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            .replace('"', '&quot;'))


def header(label, w=440, h=360):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'font-family="Georgia, \'Times New Roman\', serif" role="img" '
            f'aria-label="{esc(label)}">\n'
            f'  <rect width="{w}" height="{h}" fill="#ffffff"/>\n')


def axes(xlab='x', ylab='p', xmax=XMAX, ytop=YTOP):
    return (f'  <line x1="{OX}" y1="{OY}" x2="{xmax}" y2="{OY}" stroke="{INK}" stroke-width="1.6"/>\n'
            f'  <line x1="{OX}" y1="{OY}" x2="{OX}" y2="{ytop}" stroke="{INK}" stroke-width="1.6"/>\n'
            f'  <polygon points="{xmax},{OY} {xmax-8},{OY-4} {xmax-8},{OY+4}" fill="{INK}"/>\n'
            f'  <polygon points="{OX},{ytop} {OX-4},{ytop+8} {OX+4},{ytop+8}" fill="{INK}"/>\n'
            f'  <text x="{xmax+6}" y="{OY+5}" font-size="16" font-style="italic">{esc(xlab)}</text>\n'
            f'  <text x="{OX-10}" y="{ytop-4}" font-size="16" font-style="italic">{esc(ylab)}</text>\n')


def line(p1, p2, color, w=2.4, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    return (f'  <line x1="{p1[0]:.1f}" y1="{p1[1]:.1f}" x2="{p2[0]:.1f}" y2="{p2[1]:.1f}" '
            f'stroke="{color}" stroke-width="{w}"{d}/>\n')


def hdash(x, y, x0=OX):
    return line((x0, y), (x, y), GREY, 1.2, '5 4')


def vdash(x, y, y0=OY):
    return line((x, y), (x, y0), GREY, 1.2, '5 4')


def dot(x, y, lab='', dx=6, dy=-6, size=15, color=INK):
    s = f'  <circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="{color}"/>\n'
    if lab:
        s += (f'  <text x="{x+dx:.1f}" y="{y+dy:.1f}" font-size="{size}" '
              f'font-weight="bold" fill="{color}">{esc(lab)}</text>\n')
    return s


def txt(x, y, s, color='#000', size=15, italic=True, bold=False, anchor=None):
    fs = ' font-style="italic"' if italic else ''
    fw = ' font-weight="bold"' if bold else ''
    an = f' text-anchor="{anchor}"' if anchor else ''
    return (f'  <text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}"'
            f'{fs}{fw}{an}>{esc(s)}</text>\n')


def sub(x, y, main, s, color='#000', size=14, sup='', anchor=None):
    """Etikett med ekte subskript (og valgfritt superskript, f.eks. c_1^A)."""
    an = f' text-anchor="{anchor}"' if anchor else ''
    small = f'{size*0.7:.0f}'
    s_ = (f'  <text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}" '
          f'font-style="italic"{an}>{esc(main)}'
          f'<tspan font-size="{small}" dy="{size*0.28:.1f}" font-style="normal">{esc(s)}</tspan>')
    if sup:
        s_ += (f'<tspan font-size="{small}" dy="{-size*0.58:.1f}" '
               f'font-style="normal">{esc(sup)}</tspan>')
    return s_ + '</text>\n'


def poly(pts, fill, opacity=0.18, stroke=None, sw=1.0):
    p = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    st = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ''
    return f'  <polygon points="{p}" fill="{fill}" opacity="{opacity}"{st}/>\n'


def polyline(pts, color, w=2.4, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    p = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    return f'  <polyline points="{p}" fill="none" stroke="{color}" stroke-width="{w}"{d}/>\n'


def rect(x, y, w, h, fill='none', stroke=INK, sw=1.6, opacity=1.0, rx=0):
    return (f'  <rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" '
            f'fill="{fill}" stroke="{stroke}" stroke-width="{sw}" '
            f'opacity="{opacity}" rx="{rx}"/>\n')


def arrow(p1, p2, color=INK, w=1.8, dash=None, head=8.0):
    dx, dy = p2[0]-p1[0], p2[1]-p1[1]
    L = math.hypot(dx, dy) or 1.0
    ux, uy = dx/L, dy/L
    base = (p2[0]-ux*head, p2[1]-uy*head)
    px, py = -uy, ux
    tri = [(p2[0], p2[1]),
           (base[0]+px*head*0.42, base[1]+py*head*0.42),
           (base[0]-px*head*0.42, base[1]-py*head*0.42)]
    return line(p1, base, color, w, dash) + poly(tri, color, 1.0)


def dblarrow(p1, p2, color=INK, w=1.4, head=7.0):
    return arrow(p1, p2, color, w, None, head) + arrow(p2, p1, color, w, None, head)


def save(name, body, out):
    with open(f'{out}/{name}.svg', 'w') as f:
        f.write(body + '</svg>\n')
    print('  skrev', name + '.svg')


# ------------------------------------------------------- numerikk-hjelp
def bisect(f, a, b, n=90):
    """Rot for f på [a,b] med fortegnsskifte."""
    fa, fb = f(a), f(b)
    if fa*fb > 0:
        return None
    for _ in range(n):
        m = 0.5*(a+b)
        fm = f(m)
        if fa*fm <= 0:
            b, fb = m, fm
        else:
            a, fa = m, fm
    return 0.5*(a+b)


def samp(f, x0, x1, n=90):
    """Sampler f på [x0,x1] og returnerer datapunkter (hopper over ugyldige)."""
    pts = []
    for i in range(n+1):
        x = x0 + (x1-x0)*i/n
        try:
            y = f(x)
        except (ValueError, ZeroDivisionError):
            continue
        if y is None or not math.isfinite(y):
            continue
        pts.append((x, y))
    return pts


def clip_box(pts, w, h, pad=0.0):
    """Beholder bare punkter innenfor boksen [0,w] x [0,h]."""
    return [(x, y) for (x, y) in pts if -1e-9 <= x <= w+1e-9 and pad-1e-9 <= y <= h+1e-9]


class Scale:
    """Lineær data->piksel-skala for vanlige xy-diagram."""

    def __init__(self, xmax, ymax, xmin=0.0, ymin=0.0, xr=XMAX-18, yt=YTOP+14):
        self.xmin, self.xmax, self.ymin, self.ymax = xmin, xmax, ymin, ymax
        self.xr, self.yt = xr, yt

    def px(self, x):
        return OX + (x-self.xmin)/(self.xmax-self.xmin)*(self.xr-OX)

    def py(self, y):
        return OY - (y-self.ymin)/(self.ymax-self.ymin)*(OY-self.yt)

    def p(self, x, y):
        return (self.px(x), self.py(y))

    def curve(self, f, x0, x1, color, w=2.4, dash=None, n=140, ymax=None):
        top = self.ymax if ymax is None else ymax
        pts = [self.p(x, y) for (x, y) in samp(f, x0, x1, n)
               if self.ymin-1e-9 <= y <= top+1e-9]
        return polyline(pts, color, w, dash) if len(pts) > 1 else ''


class EBox:
    """Bytteboks (Edgeworth): As origo nede til venstre, Bs oppe til høyre."""

    def __init__(self, w, h):
        self.w, self.h = float(w), float(h)

    def px(self, x):
        return BL + x/self.w*(BR-BL)

    def py(self, y):
        return BB - y/self.h*(BB-BT)

    def p(self, x, y):
        return (self.px(x), self.py(y))

    def frame(self, g1='vare 1', g2='vare 2', o1=None, o2=None, sidelab=True):
        """Rammen med origoer, fire aksenavn og sidelengder."""
        b = rect(BL, BT, BR-BL, BB-BT, 'none', INK, 1.8)
        # As origo nede til venstre
        b += txt(BL-26, BB+15, 'O', INK, 15, False, True)
        b += f'  <text x="{BL-15}" y="{BB+20}" font-size="11" font-weight="bold">A</text>\n'
        # Bs origo oppe til høyre
        b += txt(BR+6, BT-8, 'O', INK, 15, False, True)
        b += f'  <text x="{BR+17}" y="{BT-13}" font-size="11" font-weight="bold">B</text>\n'
        # aksenavn: As akser langs nedre og venstre kant
        b += sub((BL+BR)/2, BB+24, 'c', '1', INK, 14, 'A', anchor='middle')
        b += sub(BL-54, (BT+BB)/2, 'c', '2', INK, 14, 'A')
        # Bs akser langs øvre og høyre kant (motsatt retning)
        b += sub((BL+BR)/2, BT-9, 'c', '1', GREY, 13, 'B', anchor='middle')
        b += sub(BR+8, (BT+BB)/2, 'c', '2', GREY, 13, 'B')
        # retningspiler
        b += arrow((BL+4, BB+8), (BL+40, BB+8), GREY, 1.1, None, 6)
        b += arrow((BL-8, BB-4), (BL-8, BB-40), GREY, 1.1, None, 6)
        b += arrow((BR-4, BT-4), (BR-40, BT-4), GREY, 1.1, None, 6)
        b += arrow((BR+4, BT+4), (BR+4, BT+40), GREY, 1.1, None, 6)
        if sidelab:
            def tall(v):
                return f'{v:g}'
            t1 = tall(o1 if o1 is not None else self.w)
            t2 = tall(o2 if o2 is not None else self.h)
            # sidelengdene: totalen for vare 1 UNDER aksenavnet, totalen for
            # vare 2 i det ledige hjørnet oppe til venstre (unna talletikettene)
            lab1 = f'= {t1} {g1}'
            b += sub((BL+BR)/2 - 8 - 3.4*len(lab1), BB+40, 'Ω', '1', GREY, 13)
            b += txt((BL+BR)/2 + 14 - 3.4*len(lab1), BB+40, lab1, GREY, 12, False)
            b += sub(BL-56, BT+2, 'Ω', '2', GREY, 13)
            b += txt(BL-36, BT+2, f'= {t2}', GREY, 12, False)
            b += txt(BL-56, BT+15, f'{g2}', GREY, 12, False)
        return b

    def curve(self, f, x0, x1, color, w=2.2, dash=None, n=160, ymin=0.0):
        pts = clip_box(samp(f, x0, x1, n), self.w, self.h, ymin)
        return polyline([self.p(x, y) for (x, y) in pts], color, w, dash) if len(pts) > 1 else ''

    def guides(self, x, y, lab_x=None, lab_y=None, size=12):
        """Stiplede hjelpelinjer fra (x,y) til nedre og venstre kant."""
        b = line(self.p(x, y), (self.px(x), BB), GREY, 1.2, '5 4')
        b += line(self.p(x, y), (BL, self.py(y)), GREY, 1.2, '5 4')
        if lab_x is not None:
            b += txt(self.px(x), BB+13, lab_x, GREY, size, False, anchor='middle')
        if lab_y is not None:
            b += txt(BL-8, self.py(y)+4, lab_y, GREY, size, False, anchor='end')
        return b

    def lens(self, fa, fb, x0, x1, fill=GRN, opacity=0.20, n=70):
        """Skravert linse mellom As kurve (fa) og Bs kurve (fb) på [x0,x1]."""
        up = [self.p(x, fa(x)) for x in [x0 + (x1-x0)*i/n for i in range(n+1)]]
        dn = [self.p(x, fb(x)) for x in [x1 - (x1-x0)*i/n for i in range(n+1)]]
        return poly(up + dn, fill, opacity)


# --------------------------------------------------- Cobb-Douglas-verktøy
def cd_ic(level, a):
    """Indifferenskurve c_1^a c_2^(1-a) = level, løst for c_2."""
    def f(c1):
        if c1 <= 1e-9:
            return None
        return (level / c1**a)**(1.0/(1.0-a))
    return f


def cd_level(a, c1, c2):
    return c1**a * c2**(1.0-a)


def cd_ic_B(level, a, w, h):
    """Bs indifferenskurve tegnet i As koordinater."""
    inner = cd_ic(level, a)

    def f(c1):
        v = inner(w - c1)
        return None if v is None else h - v
    return f


def cd_msb(a, c1, c2):
    return (a/(1.0-a))*(c2/c1)


def cd_likevekt(w, h, wA, aA, aB, p):
    """Likevektskontroll: klarerer BEGGE markeder ved relativprisen p (p2=1)?"""
    w1A, w2A = wA
    w1B, w2B = w - w1A, h - w2A
    mA, mB = p*w1A + w2A, p*w1B + w2B
    cA = (aA*mA/p, (1-aA)*mA)
    cB = (aB*mB/p, (1-aB)*mB)
    klar = abs(cA[0]+cB[0]-w) < 1e-9 and abs(cA[1]+cB[1]-h) < 1e-9
    return cA, cB, klar


def krav(vilkaar, melding):
    if not vilkaar:
        raise AssertionError('GEOMETRIKONTROLL FEILET: ' + melding)


def cd_pair(box, aA, aB, pt):
    """Indifferenskurvene til A og B gjennom As allokering pt = (c1, c2)."""
    lvA = cd_level(aA, pt[0], pt[1])
    lvB = cd_level(aB, box.w - pt[0], box.h - pt[1])
    return cd_ic(lvA, aA), cd_ic_B(lvB, aB, box.w, box.h)


def kryss(fa, fb, a, b):
    """Andre skjæringspunkt mellom to kurver på (a,b)."""
    return bisect(lambda x: fa(x) - fb(x), a, b)


# =====================================================================
# DEL 4 — Generell likevekt og velferdsteori (agent F2)
# =====================================================================

def f2_del4(out):
    n = 0

    # ---------- 4.1 (1): bytteboksens konstruksjon ----------
    B = EBox(12, 12)
    W, M = (9.0, 3.0), (6.0, 6.0)
    krav(W[0]+3 == 12 and W[1]+9 == 12, '4-1 boksen: sidene er totalene 12 og 12')
    b = header('Bytteboksen for to markedshager. Et kvadrat der bredden er '
               'totalmengden av vare 1, tolv kilo gulrøtter, og høyden er totalmengden '
               'av vare 2, tolv dusin egg. As origo ligger nede til venstre med As '
               'forbruk av vare 1 målt mot høyre og vare 2 oppover. Bs origo ligger '
               'oppe til høyre med Bs forbruk av vare 1 målt mot venstre og vare 2 '
               'nedover. Beholdningspunktet W ligger ni enheter til høyre og tre opp '
               'fra As origo, markert med stiplede hjelpelinjer til nedre og venstre '
               'kant. Midtpunktet M ligger seks og seks, midt i kvadratet.')
    b += B.frame('kg gulrøtter', 'dusin egg')
    b += B.guides(*W, lab_x='9', lab_y='3')
    b += B.guides(*M, lab_x='6', lab_y='6')
    b += dot(*B.p(*W), 'W', 8, 16)
    b += dot(*B.p(*M), 'M', 8, -8)
    b += txt(B.px(W[0])+14, B.py(W[1])+32, 'beholdningen', GREY, 11, False)
    b += txt(B.px(M[0])+14, B.py(M[1])+16, 'lik deling', GREY, 11, False)
    save('econ2220-4-1-bytteboks-konstruksjon', b, out)
    n += 1

    # ---------- 4.1 (2): byttelinsen i W ----------
    fA, fB = cd_pair(B, 0.5, 0.5, W)
    krav(abs(cd_msb(0.5, 9, 3) - 1/3) < 1e-12, '4-1 linse: MSB_A = 1/3 i W')
    krav(abs(cd_msb(0.5, 3, 9) - 3) < 1e-12, '4-1 linse: MSB_B = 3 i W')
    x2 = kryss(fA, fB, 1.0, 8.9)
    krav(x2 is not None and abs(x2 - 3.0) < 1e-6, '4-1 linse: andre kryss i c1 = 3')
    krav(8*4 > 27 and (12-8)*(12-4) > 27, '4-1 linse: punktet (8,4) ligger inne i linsen')
    b = header('Byttelinsen i beholdningspunktet. Kvadratisk bytteboks tolv ganger '
               'tolv. As indifferenskurve gjennom W er flat der, med helning i '
               'tallverdi en tredel, og krummer mot As origo nede til venstre. Bs '
               'indifferenskurve gjennom samme punkt er bratt, med helning i tallverdi '
               'tre, og krummer mot Bs origo oppe til høyre. De to kurvene krysser '
               'hverandre i W og avgrenser et skravert linseformet område som strekker '
               'seg opp og til venstre fra W. Punktet med åtte kilo gulrøtter og fire '
               'dusin egg til A er merket inne i linsen.')
    b += B.frame('kg gulrøtter', 'dusin egg')
    b += B.lens(fA, fB, x2, W[0])
    b += B.curve(fA, 2.0, 11.8, RED)
    b += B.curve(fB, 0.4, 10.0, BLUE)
    b += B.guides(*W, lab_x='9', lab_y='3')
    b += dot(*B.p(*W), 'W', 8, 16)
    b += dot(*B.p(8.0, 4.0), '', 0, 0)
    b += txt(B.px(8.0)-2, B.py(4.0)-9, '(8, 4)', INK, 11, False)
    b += txt(B.px(10.4), B.py(fA(10.4))-8, 'A', RED, 14, False, True)
    b += txt(B.px(1.0), B.py(fB(1.0))+16, 'B', BLUE, 14, False, True)
    b += txt(B.px(4.4), B.py(8.6), 'begge bedre stilt', GRN, 11, False)
    save('econ2220-4-1-bytteboks-linse', b, out)
    n += 1

    # ---------- 4.1 (3): tangering, kontraktkurve og felles budsjettlinje ----------
    gA, gB = cd_pair(B, 0.5, 0.5, M)
    krav(abs(cd_msb(0.5, M[0], M[1]) - 1.0) < 1e-12
         and abs(cd_msb(0.5, 12-M[0], 12-M[1]) - 1.0) < 1e-12,
         '4-1 M: MSB_A = MSB_B = 1, altså tangering i midtpunktet')
    krav((M[1]-W[1])/(M[0]-W[0]) == -1.0, '4-1 budsjettlinja gjennom W og M har helning -1')
    cA, cB, klar = cd_likevekt(12, 12, W, 0.5, 0.5, 1.0)
    krav(klar and abs(cA[0]-6) < 1e-9, '4-1: p = 1 klarerer begge markeder med E = (6,6)')
    b = header('Tangering, kontraktkurve og felles budsjettlinje i den kvadratiske '
               'bytteboksen. Diagonalen fra As origo nede til venstre til Bs origo oppe '
               'til høyre er stiplet og merket kontraktkurven. I midtpunktet M med seks '
               'kilo gulrøtter og seks dusin egg til A tangerer As og Bs '
               'indifferenskurve hverandre, altså har de samme helning der. Den felles '
               'budsjettlinja er en rett linje som går både gjennom '
               'beholdningspunktet W og gjennom M, og helningen er minus prisforholdet '
               'mellom vare en og vare to.')
    b += B.frame('kg gulrøtter', 'dusin egg')
    b += line(B.p(0, 0), B.p(12, 12), PUR, 1.6, '6 4')
    b += txt(B.px(4.9), B.py(11.0), 'kontraktkurven', PUR, 11, False)
    b += B.curve(gA, 3.2, 11.8, RED)
    b += B.curve(gB, 0.4, 8.8, BLUE)
    b += line(B.p(0, 12), B.p(12, 0), INK, 2.0)
    b += B.guides(*M, lab_x='6', lab_y='6')
    b += B.guides(*W, lab_x='9', lab_y='3')
    b += dot(*B.p(*M), 'M', 9, -9)
    b += dot(*B.p(*W), 'W', 9, 16)
    b += txt(B.px(10.6), B.py(gA(10.6))-8, 'A', RED, 14, False, True)
    b += txt(B.px(1.0), B.py(gB(1.0))+16, 'B', BLUE, 14, False, True)
    b += txt(B.px(7.3), B.py(6.7), 'budsjettlinja', INK, 11, False)
    b += txt(B.px(7.3), B.py(5.9), 'helning –p1/p2', INK, 11, False)
    save('econ2220-4-1-bytteboks-tangering-kontraktkurve', b, out)
    n += 1

    # ---------- 4.2 (1): likevekten mellom hyttenaboene ----------
    B = EBox(6, 20)
    W, E = (2.0, 12.0), (4.0, 8.0)
    cA, cB, klar = cd_likevekt(6, 20, W, 0.5, 0.25, 2.0)
    krav(klar, '4-2 likevekt: begge markeder klarerer ved p = 2')
    krav(abs(cA[0]-4) < 1e-9 and abs(cA[1]-8) < 1e-9, '4-2 likevekt: E = (4,8)')
    krav(abs(cd_msb(0.5, 4, 8)-2) < 1e-12 and abs(cd_msb(0.25, 2, 12)-2) < 1e-12,
         '4-2: MSB_A = MSB_B = p1/p2 = 2 i E')
    fA, fB = cd_pair(B, 0.5, 0.25, E)
    b = header('Markedslikevekt i bytteboksen mellom to hyttenaboer. Boksen er seks '
               'sekker ved bred og tjue enheter strøm høy. Beholdningspunktet W med to '
               'sekker ved og tolv enheter strøm til A ligger oppe til venstre. Den '
               'felles budsjettlinja gjennom W har helning minus to. '
               'Likevektsallokeringen E med fire sekker ved og åtte enheter strøm til A '
               'ligger nede til høyre for W på samme linje. Der tangerer As og Bs '
               'indifferenskurve både hverandre og budsjettlinja. Stiplede hjelpelinjer '
               'går fra E ned til fire på nedre kant og bort til åtte på venstre kant. '
               'En pil langs linja fra W til E viser at A kjøper to sekker ved og '
               'betaler fire enheter strøm.')
    b += B.frame('sekker ved', 'enheter strøm')
    b += line(B.p(0, 16), B.p(6, 4), INK, 2.0)
    b += B.curve(fA, 1.2, 6.0, RED)
    b += B.curve(fB, 0.2, 5.4, BLUE)
    b += B.guides(*E, lab_x='4', lab_y='8')
    b += arrow(B.p(2.35, 11.3), B.p(3.7, 8.6), GRN, 2.0)
    b += dot(*B.p(*W), 'W', -22, -6)
    b += dot(*B.p(*E), 'E', 9, -9)
    b += txt(B.px(5.0), B.py(fA(5.0))-8, 'A', RED, 14, False, True)
    b += txt(B.px(0.55), B.py(fB(0.55))+15, 'B', BLUE, 14, False, True)
    b += txt(B.px(1.15), B.py(6.2), 'A kjøper 2 sekker ved,', GRN, 11, False)
    b += txt(B.px(1.15), B.py(5.0), 'betaler 4 enheter strøm', GRN, 11, False)
    b += txt(B.px(3.5), B.py(15.4), 'helning –2', INK, 11, False)
    save('econ2220-4-2-bytteboks-likevekt', b, out)
    n += 1

    # ---------- 4.2 (2): pris som ikke klarerer ----------
    p = 1.5
    mA, mB = p*2 + 12, p*4 + 8
    TA = (0.5*mA/p, 0.5*mA)
    TBb = (0.25*mB/p, 0.75*mB)
    TBa = (6 - TBb[0], 20 - TBb[1])
    z1 = TA[0] + TBb[0] - 6
    krav(abs(TA[0]-5) < 1e-9 and abs(TA[1]-7.5) < 1e-9, '4-2 ikke-klarering: T^A = (5; 7,5)')
    krav(abs(TBa[0]-11/3) < 1e-9 and abs(TBa[1]-9.5) < 1e-9,
         '4-2 ikke-klarering: T^B lest i As koordinater er (11/3; 9,5)')
    krav(abs(z1 - (TA[0]-TBa[0])) < 1e-9 and z1 > 0,
         '4-2: overskuddsetterspørselen er nettopp den vannrette avstanden')
    for pt in (TA, TBa):
        krav(abs(pt[1] - (12 - p*(pt[0]-2))) < 1e-9, '4-2: begge tilpasninger ligger på linja')
    fA2 = cd_ic(cd_level(0.5, *TA), 0.5)
    fB2 = cd_ic_B(cd_level(0.25, *TBb), 0.25, 6, 20)
    b = header('En pris som ikke klarerer markedene. Samme bytteboks, seks sekker ved '
               'bred og tjue enheter strøm høy, og samme beholdningspunkt W. '
               'Budsjettlinja har nå en annen helning enn i likevekt. As '
               'indifferenskurve tangerer linja i punktet T-A, og Bs indifferenskurve '
               'tangerer den samme linja i et helt annet punkt T-B. De to ønskede '
               'tilpasningene faller altså ikke sammen. Den vannrette avstanden mellom '
               'punktene er markert med en dobbeltpil og merket overskuddsetterspørsel '
               'etter ved, og den er lik en og en tredels sekk.')
    b += B.frame('sekker ved', 'enheter strøm')
    b += line(B.p(0, 15), B.p(6, 6), INK, 2.0)
    b += B.curve(fA2, 1.6, 6.0, RED)
    b += B.curve(fB2, 0.2, 5.2, BLUE)
    b += line(B.p(*TA), (B.px(TA[0]), BB), GREY, 1.2, '5 4')
    b += line(B.p(*TBa), (B.px(TBa[0]), BB), GREY, 1.2, '5 4')
    b += dot(*B.p(*W), 'W', -22, -6)
    b += dot(*B.p(*TA), '', 0, 0)
    b += dot(*B.p(*TBa), '', 0, 0)
    b += sub(B.px(TA[0])+8, B.py(TA[1])+5, 'T', '', INK, 14, 'A')
    b += sub(B.px(TBa[0])-28, B.py(TBa[1])-4, 'T', '', INK, 14, 'B')
    b += dblarrow((B.px(TBa[0]), BB-16), (B.px(TA[0]), BB-16), ORG, 1.6)
    b += txt(B.px(1.05), BB-24, 'overskuddsetterspørsel etter ved = 4/3 sekk', ORG, 11, False)
    b += txt(B.px(4.55), B.py(fA2(4.55))-8, 'A', RED, 14, False, True)
    b += txt(B.px(0.55), B.py(fB2(0.55))+15, 'B', BLUE, 14, False, True)
    save('econ2220-4-2-ikke-klarering', b, out)
    n += 1

    # ---------- 4.3 (1): effektiv mot ineffektiv allokering ----------
    B = EBox(12, 18)
    P, Q = (8.0, 12.0), (9.0, 6.0)
    krav(abs(cd_msb(0.5, 8, 12) - cd_msb(0.5, 4, 6)) < 1e-12,
         '4-3: P = (8,12) har MSB_A = MSB_B = 3/2, altså tangering')
    krav(abs(cd_msb(0.5, 9, 6) - cd_msb(0.5, 3, 12)) > 1e-6,
         '4-3: Q = (9,6) har ulike MSB, altså kryssende kurver')
    fP_A, fP_B = cd_pair(B, 0.5, 0.5, P)
    fQ_A, fQ_B = cd_pair(B, 0.5, 0.5, Q)
    xq = kryss(fQ_A, fQ_B, 2.0, 8.9)
    krav(xq is not None and abs(xq - 4.0) < 1e-6, '4-3: linsen ved Q lukkes i c1 = 4')
    krav(8*8 > 54 and (12-8)*(18-8) > 36, '4-3: (8,8) ligger inne i linsen ved Q')
    b = header('Effektiv og ineffektiv allokering i samme bytteboks, tolv enheter av '
               'vare en bred og atten enheter av vare to høy. Diagonalen fra As origo '
               'nede til venstre til Bs origo oppe til høyre er stiplet og merket '
               'kontraktkurven. Punktet P med åtte enheter av vare en og tolv av vare '
               'to til A ligger på kontraktkurven, og der tangerer As og Bs '
               'indifferenskurve hverandre — allokeringen er Pareto-effektiv. Punktet Q '
               'med ni og seks til A ligger nede til høyre for kontraktkurven, og der '
               'krysser de to kurvene hverandre og avgrenser en skravert linse opp og '
               'til venstre. Punktet med åtte og åtte til A er merket inne i linsen.')
    b += B.frame('vare 1', 'vare 2')
    b += line(B.p(0, 0), B.p(12, 18), PUR, 1.6, '6 4')
    b += txt(B.px(6.6), B.py(16.2), 'kontraktkurven', PUR, 11, False)
    b += B.lens(fQ_A, fQ_B, xq, Q[0])
    b += B.curve(fP_A, 4.6, 12.0, RED)
    b += B.curve(fP_B, 0.4, 9.2, BLUE)
    b += B.curve(fQ_A, 3.0, 12.0, RED, 1.8)
    b += B.curve(fQ_B, 0.6, 10.4, BLUE, 1.8)
    b += dot(*B.p(*P), 'P', 9, -9)
    b += dot(*B.p(*Q), 'Q', 9, 16)
    b += dot(*B.p(8.0, 8.0), '', 0, 0)
    b += txt(B.px(8.0)+7, B.py(8.0)-7, '(8, 8)', INK, 11, False)
    b += txt(B.px(4.3), B.py(2.2), 'Pareto-effektiv: tangering', GRN, 11, False)
    b += txt(B.px(4.3), B.py(0.9), 'ineffektiv: kryssende kurver', ORG, 11, False)
    save('econ2220-4-3-kontraktkurve-effektiv-ineffektiv', b, out)
    n += 1

    # ---------- 4.3 (2): andre velferdsteorem ----------
    B = EBox(12, 12)
    aA, aB = 0.5, 0.25
    Wg, Eg = (2.0, 5.0), (6.0, 3.0)
    Wn, En = (3.0, 10.0), (9.0, 6.0)
    cA, cB, klar = cd_likevekt(12, 12, Wg, aA, aB, 0.5)
    krav(klar and abs(cA[0]-6) < 1e-9 and abs(cA[1]-3) < 1e-9,
         '4-3 andre teorem: W = (2,5) og p = 1/2 gir likevekten E = (6,3), begge markeder klarerer')
    cA2, cB2, klar2 = cd_likevekt(12, 12, Wn, aA, aB, 2.0/3.0)
    krav(klar2 and abs(cA2[0]-9) < 1e-9 and abs(cA2[1]-6) < 1e-9,
         "4-3 andre teorem: W' = (3,10) og p = 2/3 gir likevekten E' = (9,6), begge markeder klarerer")

    def kk(x):
        return 6.0*x/(18.0-x) if x < 18 else None
    krav(abs(kk(6)-3) < 1e-12 and abs(kk(9)-6) < 1e-12 and abs(kk(12)-12) < 1e-12,
         "4-3: kontraktkurven c2 = 6c1/(18 - c1) går gjennom E, E' og Bs origo")
    hA, hB = cd_pair(B, aA, aB, En)
    b = header('Andre velferdsteorem i bytteboksen. Kontraktkurven er tegnet stiplet '
               'fra As origo nede til venstre til Bs origo oppe til høyre. Den gamle '
               'budsjettlinja går gjennom beholdningspunktet W, og likevekten E ligger '
               'på kontraktkurven. Den ønskede allokeringen E-merket ligger et annet '
               'sted på kontraktkurven, lenger ut mot Bs origo. Gjennom E-merket går en '
               'ny og brattere budsjettlinje som tangerer både As og Bs '
               'indifferenskurve der. Det nye beholdningspunktet W-merket ligger på den '
               'nye linja, og en pil fra W til W-merket er merket kostnadsfri '
               'omfordeling.')
    b += B.frame('vare 1', 'vare 2')
    b += B.curve(kk, 0.0, 12.0, PUR, 1.6, '6 4')
    b += txt(B.px(3.4), B.py(0.9), 'kontraktkurven', PUR, 11, False)
    b += line(B.p(0, 6), B.p(12, 0), GREY, 1.8, '7 4')
    b += line(B.p(0, 12), B.p(12, 4), INK, 2.2)
    b += B.curve(hA, 5.0, 12.0, RED)
    b += B.curve(hB, 1.4, 11.4, BLUE)
    b += arrow(B.p(*Wg), B.p(*Wn), GRN, 2.0)
    b += dot(*B.p(*Wg), 'W', -6, 19)
    b += dot(*B.p(*Eg), 'E', 8, 15)
    b += dot(*B.p(*Wn), '', 0, 0)
    b += txt(B.px(Wn[0])+9, B.py(Wn[1])-7, "W'", INK, 15, False, True)
    b += dot(*B.p(*En), '', 0, 0)
    b += txt(B.px(En[0])+8, B.py(En[1])-8, "E'", INK, 15, False, True)
    b += txt(B.px(0.3), B.py(8.5), 'kostnadsfri', GRN, 10, False)
    b += txt(B.px(0.3), B.py(7.6), 'omfordeling', GRN, 10, False)
    b += txt(B.px(0.4), B.py(10.6), 'ny linje', INK, 11, False)
    b += txt(B.px(0.3), B.py(3.1), 'gammel linje', GREY, 11, False)
    save('econ2220-4-3-andre-velferdsteorem', b, out)
    n += 1

    # ---------- 4.4 (1): omfordeling gir ny likevekt ----------
    B = EBox(10, 20)
    Wg, Eg = (8.0, 8.0), (6.0, 12.0)
    Wn, En = (4.0, 8.0), (4.0, 8.0)
    cA, cB, klar = cd_likevekt(10, 20, Wg, 0.5, 0.5, 2.0)
    krav(klar and abs(cA[0]-6) < 1e-9 and abs(cA[1]-12) < 1e-9,
         '4-4: W = (8,8) og p = 2 gir likevekten E = (6,12), begge markeder klarerer')
    cA2, cB2, klar2 = cd_likevekt(10, 20, Wn, 0.5, 0.5, 2.0)
    krav(klar2 and abs(cA2[0]-4) < 1e-9 and abs(cA2[1]-8) < 1e-9,
         "4-4: W' = (4,8) og p = 2 gir likevekten E' = (4,8), begge markeder klarerer")
    krav(abs(Eg[1]-2*Eg[0]) < 1e-12 and abs(En[1]-2*En[0]) < 1e-12,
         "4-4: både E og E' ligger på kontraktkurven c2 = 2c1")
    b = header('Omfordeling av beholdningen gir en ny likevekt. Bytteboksen er ti '
               'sekker ved bred og tjue enheter strøm høy. Det gamle '
               'beholdningspunktet W med åtte og åtte til A og det nye W-merket med '
               'fire og åtte til A er forbundet med en vannrett pil merket fire sekker '
               'ved fra A til B. To parallelle budsjettlinjer med helning minus to er '
               'tegnet: den ene gjennom W med likevekten E i seks og tolv, den andre '
               'gjennom W-merket med likevekten E-merket som sammenfaller med '
               'W-merket. Diagonalen fra As origo til Bs origo er stiplet og merket '
               'kontraktkurven, og både E og E-merket ligger på den.')
    b += B.frame('sekker ved', 'enheter strøm')
    b += line(B.p(0, 0), B.p(10, 20), PUR, 1.6, '6 4')
    b += txt(B.px(6.9), B.py(16.6), 'kontraktkurven', PUR, 11, False)
    b += line(B.p(2, 20), B.p(10, 4), GREY, 1.8, '7 4')
    b += line(B.p(0, 16), B.p(8, 0), INK, 2.0)
    b += arrow(B.p(7.7, 8.0), B.p(4.3, 8.0), GRN, 2.0)
    b += B.guides(*Eg, lab_x='6', lab_y='12')
    b += dot(*B.p(*Wg), 'W', 9, 15)
    b += dot(*B.p(*Eg), 'E', 9, -9)
    b += dot(*B.p(*Wn), '', 0, 0)
    b += txt(B.px(4.0)-32, B.py(8.0)+5, "W' = E'", INK, 14, False, True)
    b += txt(B.px(4.4), B.py(9.3), '4 sekker ved fra A til B', GRN, 11, False)
    b += txt(B.px(3.3), B.py(18.7), 'gammel linje', GREY, 11, False)
    b += txt(B.px(0.5), B.py(10.4), 'ny linje', INK, 11, False)
    save('econ2220-4-4-omfordeling-ny-likevekt', b, out)
    n += 1

    # ---------- 4.4 (2): hjørneallokeringen ----------
    B = EBox(12, 12)
    lvH = cd_level(0.5, 12.0, 12.0)
    fH = cd_ic(lvH, 0.5)
    krav(all(fH(x) > 12.0 for x in (10.0, 11.0, 11.9)),
         '4-4 hjørne: As indifferenskurve gjennom hjørnet ligger over hele boksen')
    b = header('Hjørneallokeringen der A eier alt. Kvadratisk bytteboks. Allokeringen H '
               'ligger i hjørnet oppe til høyre, altså i Bs origo: A får hele '
               'totalmengden av begge varer og B ingenting. As indifferenskurve gjennom '
               'H berører boksen bare i selve hjørnet og buer utenfor boksen ellers, så '
               'hele boksen ligger på As lavere side. Boksen er lett skyggelagt og '
               'merket alle andre allokeringer gir A lavere nytte. En pil fra H innover '
               'i boksen er merket enhver overføring til B senker A.')
    b += rect(BL, BT, BR-BL, BB-BT, ORG, 'none', 0, 0.10)
    b += B.frame('vare 1', 'vare 2')
    b += polyline([B.p(x, fH(x)) for x in
                   [9.6+0.1*i for i in range(0, 45)] if fH(x) < 15.5], RED, 2.4)
    b += txt(B.px(0.9), B.py(11.4), 'As indifferenskurve gjennom H', RED, 11, False)
    b += txt(B.px(0.9), B.py(10.5), 'buer utenfor boksen', RED, 11, False)
    b += arrow(B.p(11.6, 11.6), B.p(8.2, 8.2), INK, 2.0)
    b += dot(BR, BT, '', 0, 0)
    b += txt(BR-16, BT+22, 'H', INK, 16, False, True)
    b += txt(B.px(1.6), B.py(7.2), 'enhver overføring', INK, 11, False)
    b += txt(B.px(1.6), B.py(6.4), 'til B senker A', INK, 11, False)
    b += txt(B.px(0.6), B.py(2.2), 'alle andre allokeringer gir A lavere nytte', ORG, 11, False)
    save('econ2220-4-4-hjorneallokering', b, out)
    n += 1

    # ---------- 4.5: drillcaset — øybygdene ----------
    B = EBox(7, 10)
    W, E = (2.0, 8.0), (3.0, 6.0)
    cA, cB, klar = cd_likevekt(7, 10, W, 0.5, 2.0/3.0, 2.0)
    krav(klar and abs(cA[0]-3) < 1e-9 and abs(cA[1]-6) < 1e-9,
         '4-5: p = 2 gir likevekten E = (3,6), begge markeder klarerer')
    krav(abs(cd_msb(0.5, 3, 6)-2) < 1e-12 and abs(cd_msb(2.0/3.0, 4, 4)-2) < 1e-12,
         '4-5: MSB_A = MSB_B = p1/p2 = 2 i E')

    def kk45(x):
        return 20.0*x/(7.0+x)
    krav(abs(kk45(3)-6) < 1e-12 and abs(kk45(7)-10) < 1e-12,
         '4-5: kontraktkurven c2 = 20c1/(7 + c1) går gjennom E og Bs origo')
    fA, fB = cd_pair(B, 0.5, 2.0/3.0, E)
    b = header('Likevekten i eksamenscaset med to øybygder. Bytteboksen er sju fat '
               'diesel bred og ti sekker korn høy. Beholdningspunktet W med to fat og '
               'åtte sekker til A ligger oppe til venstre, med stiplede hjelpelinjer '
               'til kantene. Den felles budsjettlinja gjennom W har helning minus to. '
               'Likevekten E med tre fat og seks sekker til A ligger nede til høyre for '
               'W på linja, og der tangerer As og Bs indifferenskurve hverandre og '
               'linja. Kontraktkurven er tegnet stiplet fra As origo gjennom E til Bs '
               'origo. En pil langs linja fra W til E er merket A kjøper ett fat '
               'diesel og betaler to sekker korn.')
    b += B.frame('fat diesel', 'sekker korn')
    b += B.curve(kk45, 0.0, 7.0, PUR, 1.6, '6 4')
    b += txt(B.px(0.35), B.py(1.5), 'kontraktkurven', PUR, 11, False)
    b += line(B.p(1, 10), B.p(6, 0), INK, 2.0)
    b += B.curve(fA, 1.0, 7.0, RED)
    b += B.curve(fB, 0.2, 6.2, BLUE)
    b += B.guides(*E, lab_x='3', lab_y='6')
    b += B.guides(*W, lab_x='2', lab_y='8')
    b += arrow(B.p(2.25, 7.5), B.p(2.78, 6.45), GRN, 2.0)
    b += dot(*B.p(*W), 'W', -22, -6)
    b += dot(*B.p(*E), 'E', 9, -9)
    b += txt(B.px(5.7), B.py(fA(5.7))-8, 'A', RED, 14, False, True)
    b += txt(B.px(0.5), B.py(fB(0.5))+15, 'B', BLUE, 14, False, True)
    b += txt(B.px(3.05), B.py(7.9), 'A kjøper 1 fat diesel,', GRN, 11, False)
    b += txt(B.px(3.05), B.py(7.2), 'betaler 2 sekker korn', GRN, 11, False)
    b += txt(B.px(0.35), B.py(3.0), 'helning –2', INK, 11, False)
    save('econ2220-4-5-drillcase-likevekt', b, out)
    n += 1

    # ---------- 4.P prøve 1: gårdsbrukene ----------
    # MERK — rettet inkonsistens i figurbestillingen (og i «figur i ord» i fasiten):
    # bestillingen ba om at linja gjennom W = (10,2) og E = (6,8) skulle merkes
    # «felles budsjettlinje med helning −p1/p2». Det kan ikke stemme: med
    # u = c1^(1/2)c2^(1/2) for begge er tangeringshelningen i E lik MSB = 8/6 = 4/3,
    # mens linja gjennom W og E har helning 3/2. Ved p1/p2 = 3/2 klarerer ikke
    # markedene (kontrollert under), og den ekte likevekten er p1/p2 = 4/3 med
    # allokeringen (5,75; 7 2/3) — ikke E. Prøveteksten spør bare om at E er
    # Pareto-effektiv og at handel fra W til E løfter begge; bytteforholdet 6/4 = 1,5
    # er nettopp den realiserte byttelinja. Figuren merker derfor linja som
    # BYTTELINJA gjennom W og E (1,5 saltsekker per høyball) og viser den felles
    # tangenten i E med sin egen helning 4/3 — ingen falsk prislinje.
    B = EBox(12, 16)
    W, E = (10.0, 2.0), (6.0, 8.0)
    aP = 0.5
    krav(abs(cd_msb(aP, 10, 2)-0.2) < 1e-12 and abs(cd_msb(aP, 2, 14)-7) < 1e-12,
         '4P1: MSB_A = 1/5 og MSB_B = 7 i W')
    krav(abs(E[1] - (4.0/3.0)*E[0]) < 1e-12,
         '4P1: E = (6,8) ligger på kontraktkurven c2 = 4c1/3')
    msbA_E, msbB_E = cd_msb(aP, E[0], E[1]), cd_msb(aP, 12-E[0], 16-E[1])
    krav(abs(msbA_E - msbB_E) < 1e-12 and abs(msbA_E - 4.0/3.0) < 1e-12,
         '4P1: tangering i E, og den felles helningen er 4/3 — ikke 3/2')
    bytteforhold = -(E[1]-W[1])/(E[0]-W[0])
    krav(abs(bytteforhold - 1.5) < 1e-12,
         '4P1: byttelinja gjennom W og E har helning -3/2 (1,5 sekker per høyball)')
    krav(0.2 < bytteforhold < 7.0,
         '4P1: bytteforholdet 1,5 ligger mellom MSB-ene i W, så begge sier ja')
    _, _, klar15 = cd_likevekt(12, 16, W, aP, aP, 1.5)
    krav(not klar15, '4P1: p1/p2 = 3/2 klarerer IKKE markedene — linja er ikke en prislinje')
    cEq, _, klarEq = cd_likevekt(12, 16, W, aP, aP, 4.0/3.0)
    krav(klarEq and abs(cEq[0]-5.75) < 1e-9 and abs(cEq[1]-23.0/3.0) < 1e-9,
         '4P1: den ekte likevekten er p1/p2 = 4/3 med allokeringen (5,75; 7 2/3)')
    fA, fB = cd_pair(B, aP, aP, W)
    gA, gB = cd_pair(B, aP, aP, E)
    xw = kryss(fA, fB, 0.6, 9.8)
    krav(xw is not None and abs(xw-1.5) < 1e-6, '4P1: linsen ved W lukkes i c1 = 1,5')
    tanA, tanB = (3.0, 12.0), (9.0, 4.0)     # felles tangent i E: helning -4/3
    for pt in (tanA, tanB):
        krav(abs(pt[1] - (E[1] - (4.0/3.0)*(pt[0]-E[0]))) < 1e-9,
             '4P1: tangentsegmentet har helning -4/3 gjennom E')
    b = header('Bytteboksen for de to gårdsbrukene i prøve 1. Boksen er tolv høyballer '
               'bred og seksten saltsekker høy. Beholdningspunktet W med ti høyballer '
               'og to saltsekker til A ligger nede til høyre, med stiplede hjelpelinjer '
               'til kantene. Gjennom W er As indifferenskurve svært flat, med helning i '
               'tallverdi en femdel, og Bs svært bratt, med tallverdi sju. Linsen '
               'mellom dem er skravert og strekker seg opp og til venstre. Den stiplede '
               'rette linja fra As origo til Bs origo er kontraktkurven, gitt ved at As '
               'forbruk av vare to er fire tredeler av As forbruk av vare en. Punktet E '
               'med seks høyballer og åtte saltsekker til A ligger på kontraktkurven, '
               'og der tangerer de to indifferenskurvene hverandre med felles helning i '
               'tallverdi fire tredeler. Den heltrukne linja gjennom W og E er '
               'byttelinja: den realiserte handelen på halvannen saltsekk per høyball, '
               'som ligger mellom en femdel og sju og derfor godtas av begge.')
    b += B.frame('høyballer', 'saltsekker')
    b += line(B.p(0, 0), B.p(12, 16), PUR, 1.6, '6 4')
    b += txt(B.px(5.9), B.py(12.7), 'kontraktkurven (4 opp per 3)', PUR, 11, False)
    b += B.lens(fA, fB, xw, W[0])
    b += B.curve(fA, 1.3, 12.0, RED, 1.8)
    b += B.curve(fB, 0.3, 10.6, BLUE, 1.8)
    b += B.curve(gA, 3.0, 12.0, RED)
    b += B.curve(gB, 0.6, 9.0, BLUE)
    b += line(B.p(2.0/3.0, 16), B.p(34.0/3.0, 0), INK, 2.0)
    b += line(B.p(*tanA), B.p(*tanB), GREY, 1.6, '6 3')
    b += B.guides(*W, lab_x='10', lab_y='2')
    b += B.guides(*E, lab_x='6', lab_y='8')
    b += arrow(B.p(9.5, 2.75), B.p(6.6, 7.1), GRN, 2.0)
    b += dot(*B.p(*W), 'W', 9, 16)
    b += dot(*B.p(*E), 'E', 9, -9)
    b += txt(B.px(11.0), B.py(fA(11.0))-7, 'A', RED, 13, False, True)
    b += txt(B.px(0.5), B.py(fB(0.5))+15, 'B', BLUE, 13, False, True)
    b += txt(B.px(6.2), B.py(15.4), 'byttelinja W → E:', INK, 11, False)
    b += txt(B.px(6.2), B.py(14.4), '1,5 sekker per høyball', INK, 11, False)
    b += txt(B.px(2.4), B.py(10.5), 'felles tangent i E: –4/3', GREY, 10.5, False)
    save('econ2220-4-prove-p1-boks', b, out)
    n += 1

    # ---------- 4.P prøve 4: omfordeling av fyringsolje ----------
    B = EBox(12, 12)
    aA, aB = 0.75, 0.5
    Wg, Eg = (4.0, 6.0), (6.0, 3.0)
    Wn, En = (9.0, 6.0), (9.0, 6.0)
    cA, cB, klar = cd_likevekt(12, 12, Wg, aA, aB, 1.5)
    krav(klar and abs(cA[0]-6) < 1e-9 and abs(cA[1]-3) < 1e-9,
         '4P4: W = (4,6) og p = 3/2 gir E = (6,3), begge markeder klarerer')
    cA2, cB2, klar2 = cd_likevekt(12, 12, Wn, aA, aB, 2.0)
    krav(klar2 and abs(cA2[0]-9) < 1e-9 and abs(cA2[1]-6) < 1e-9,
         "4P4: W' = (9,6) og p = 2 gir E' = W', begge markeder klarerer")

    def kk4(x):
        return 6.0*x/(18.0-x) if x < 18 else None
    krav(abs(kk4(6)-3) < 1e-12 and abs(kk4(9)-6) < 1e-12,
         "4P4: kontraktkurven går gjennom både E og E'")
    fA, fB = cd_pair(B, aA, aB, Eg)
    gA, gB = cd_pair(B, aA, aB, En)
    b = header('Omfordeling av fyringsolje i prøve 4. Kvadratisk bytteboks tolv ganger '
               'tolv. Det gamle beholdningspunktet W med fire fat olje og seks kilo '
               'fisk til A og det nye W-merket med ni fat og seks kilo er forbundet med '
               'en vannrett pil merket fem fat olje fra B til A. Den gamle '
               'budsjettlinja gjennom W har helning minus tre halve, med likevekten E i '
               'seks fat og tre kilo, der de to indifferenskurvene tangerer hverandre. '
               'Den nye, brattere budsjettlinja gjennom W-merket har helning minus to, '
               'og der sammenfaller likevekten E-merket med W-merket selv. '
               'Kontraktkurven er tegnet stiplet fra As origo til Bs origo og går '
               'gjennom begge likevektene.')
    b += B.frame('fat olje', 'kilo fisk')
    b += B.curve(kk4, 0.0, 12.0, PUR, 1.6, '6 4')
    b += txt(B.px(1.5), B.py(1.2), 'kontraktkurven', PUR, 11, False)
    b += line(B.p(0, 12), B.p(8, 0), GREY, 1.8, '7 4')
    b += line(B.p(6, 12), B.p(12, 0), INK, 2.2)
    b += B.curve(fA, 2.6, 12.0, RED, 1.8)
    b += B.curve(fB, 0.5, 10.6, BLUE, 1.8)
    b += B.curve(gA, 4.6, 12.0, RED)
    b += B.curve(gB, 1.4, 11.4, BLUE)
    b += arrow(B.p(4.35, 6.0), B.p(8.65, 6.0), GRN, 2.0)
    b += B.guides(*Eg, lab_x='6', lab_y='3')
    b += B.guides(*Wn, lab_x='9', lab_y='6')
    b += dot(*B.p(*Wg), 'W', -20, -7)
    b += dot(*B.p(*Eg), 'E', 8, 15)
    b += dot(*B.p(*Wn), '', 0, 0)
    b += txt(B.px(9.0)+9, B.py(6.0)-8, "W' = E'", INK, 14, False, True)
    b += txt(B.px(5.1), B.py(6.7), '5 fat olje fra B til A', GRN, 11, False)
    b += txt(B.px(0.35), B.py(10.6), 'gammel linje: –3/2', GREY, 11, False)
    b += txt(B.px(6.4), B.py(11.2), 'ny linje: –2', INK, 11, False)
    save('econ2220-4-prove-p4-omfordeling', b, out)
    n += 1

    return n


# =====================================================================
# DEL 5 — Produsentteori (agent F2)
# =====================================================================

def _minimum(f, a, b, n=4000):
    """Numerisk minimum av f på [a,b] — brukes til å kontrollere GK-bunnpunkt."""
    best = None
    for i in range(n+1):
        x = a + (b-a)*i/n
        try:
            y = f(x)
        except (ValueError, ZeroDivisionError):
            continue
        if best is None or y < best[1]:
            best = (x, y)
    return best


def f2_del5(out):
    n = 0

    # ---------- 5.1 (1): isokvantkartet ----------
    S = Scale(16, 16)
    krav(4*9 == 36 and 9*4 == 36, '5-1: A = (4,9) og B = (9,4) ligger på isokvanten KL = 36')
    b = header('Isokvantkart for produktfunksjonen kvadratrota av kapital ganger arbeid. '
               'Arbeidsmengden L er på den vannrette aksen, kapitalmengden K på den '
               'loddrette. Tre fallende, konvekse kurver bøyer mot origo og nærmer seg '
               'aksene asymptotisk uten å krysse hverandre. Innerst ligger kurven for '
               'produksjonsnivå fire, i midten seks og ytterst åtte. På mellomkurven er '
               'punktet A merket med fire arbeidsenheter og ni kapitalenheter, og '
               'punktet B med ni arbeidsenheter og fire kapitalenheter; begge har '
               'stiplede hjelpelinjer ned til begge akser. En pil utover fra origo er '
               'merket høyere produksjon.')
    b += axes('L', 'K')
    for lvl, col, lab in ((16, '#8fb3d1', '4'), (36, RED, '6'), (64, '#e6a49c', '8')):
        f = (lambda c, lv=lvl: lv/c)
        b += S.curve(f, lvl/16.0, 16.0, col, 2.4 if lvl == 36 else 2.0)
        b += txt(S.px(15.0)+5, S.py(lvl/15.0)-6, f'y = {lab}', col, 12, True)
    for (L_, K_, nm) in ((4.0, 9.0, 'A'), (9.0, 4.0, 'B')):
        b += hdash(S.px(L_), S.py(K_))
        b += vdash(S.px(L_), S.py(K_))
        b += dot(*S.p(L_, K_), nm, 8, -8)
        b += txt(S.px(L_)-4, OY+16, f'{L_:.0f}', GREY, 12, False)
        b += txt(OX-22, S.py(K_)+4, f'{K_:.0f}', GREY, 12, False)
    b += arrow(S.p(9.0, 9.0), S.p(13.0, 13.0), GRN, 1.8)
    b += txt(S.px(9.4), S.py(11.6), 'høyere produksjon', GRN, 11, False)
    save('econ2220-5-1-isokvantkart', b, out)
    n += 1

    # ---------- 5.1 (2): de tre skalaregimene ----------
    krav(2*2 == 4, '5-1 konstant: doblingspunktet (2,2) ligger PÅ isokvanten KL = 4')
    krav(2*2 > 2, '5-1 tiltakende: doblingspunktet ligger UTENFOR isokvanten KL = 2')
    krav(2*2 < 8, '5-1 avtakende: doblingspunktet ligger INNENFOR isokvanten KL = 8')
    b = header('Skalautbytte-testen i tre ruter side om side. Hver rute har '
               'arbeidsmengden L på den vannrette aksen og kapitalmengden K på den '
               'loddrette, to isokvanter — én for produksjonsnivå én og én for nivå to '
               '— og en rett stråle fra origo gjennom utgangspunktet på den nederste '
               'isokvanten. Doblingspunktet D ligger dobbelt så langt ut på strålen. I '
               'den første ruta, konstant skalautbytte, treffer D nøyaktig isokvanten '
               'for nivå to. I den andre, tiltakende skalautbytte, ligger D utenfor '
               'den. I den tredje, avtakende skalautbytte, ligger D innenfor den.',
               660, 250)
    paneler = (('konstant', 4.0, 'D treffer y = 2'),
               ('tiltakende', 2.0, 'D ligger utenfor'),
               ('avtakende', 8.0, 'D ligger innenfor'))
    for i, (navn, lvl2, merk) in enumerate(paneler):
        x0 = 26 + i*212
        px0, px1, py0, py1 = x0, x0+168, 210, 54
        M = 3.6

        def qx(v, px0=px0, px1=px1):
            return px0 + v/M*(px1-px0)

        def qy(v, py0=py0, py1=py1):
            return py0 - v/M*(py0-py1)
        b += line((px0, py0), (px1, py0), INK, 1.4)
        b += line((px0, py0), (px0, py1), INK, 1.4)
        b += txt(px1+4, py0+5, 'L', INK, 13)
        b += txt(px0-6, py1-5, 'K', INK, 13)
        b += txt(x0+84, 40, navn, INK, 14, False, True, 'middle')
        for lv, col, lab in ((1.0, '#9dbcd6', '1'), (lvl2, RED, '2')):
            pts = [(qx(L_), qy(lv/L_)) for L_ in [lv/M + (M - lv/M)*k/120 for k in range(121)]
                   if 0 < lv/L_ <= M and 0 < L_ <= M]
            b += polyline(pts, col, 2.0)
            b += txt(qx(M)-2, qy(lv/M)+12, lab, col, 11, True)
        b += line((qx(0), qy(0)), (qx(M), qy(M)), GREY, 1.2, '4 3')
        b += dot(qx(1.0), qy(1.0), '', 0, 0, 11)
        b += txt(qx(1.0)-16, qy(1.0)-6, '(K0, L0)', GREY, 10, False)
        b += dot(qx(2.0), qy(2.0), 'D', 7, -6, 13)
        b += txt(x0+84, 232, merk, GREY, 11, False, False, 'middle')
    save('econ2220-5-1-skalaregimer', b, out)
    n += 1

    # ---------- 5.2 (1): isokvant og isokost ----------
    S = Scale(16, 12)
    C, m = 36.0, 0.64                       # isokvant KL = 36, isokost-helning -w/r
    Ls = math.sqrt(C/m)
    Ks = C/Ls
    krav(abs(C/Ls**2 - m) < 1e-12, '5-2: isokvantens helning er lik isokostlinjas i A')
    kA = Ks + m*Ls                          # K-avskjæring for den tangerende linja
    kLow, kHigh = 7.0, 11.5
    krav(kLow**2 - 4*m*C < 0, '5-2: den nederste isokostlinja treffer ikke isokvanten')
    disc = kHigh**2 - 4*m*C
    krav(disc > 0, '5-2: den øverste isokostlinja skjærer isokvanten i to punkter')
    LB = (kHigh - math.sqrt(disc))/(2*m)
    LD = (kHigh + math.sqrt(disc))/(2*m)
    krav(abs(C/LB - (kHigh - m*LB)) < 1e-9 and abs(C/LD - (kHigh - m*LD)) < 1e-9,
         '5-2: B og D ligger både på isokvanten og på den øverste isokostlinja')
    b = header('Kostnadsminimering med isokvant og isokostlinjer. Arbeid L på den '
               'vannrette aksen, kapital K på den loddrette. Én fallende, konveks '
               'isokvant er merket produktfunksjonen lik en gitt mengde. Tre parallelle, '
               'fallende rette isokostlinjer med helning minus lønna delt på '
               'kapitalprisen er tegnet. Den nederste treffer ikke isokvanten og er '
               'merket for lavt kostnadsnivå. Den midterste tangerer isokvanten i '
               'punktet A, med stiplede hjelpelinjer til begge akser. Den øverste '
               'skjærer isokvanten i to punkter B og D, som begge gir riktig mengde, '
               'men er for dyre. En pil mot origo er merket lavere kostnad. Ved A står '
               'tangeringsbetingelsen: forholdet mellom marginalproduktet av kapital og '
               'marginalproduktet av arbeid er lik forholdet mellom kapitalprisen og '
               'lønna.')
    b += axes('L', 'K')
    b += S.curve(lambda L_: C/L_, C/12.0, 16.0, RED, 2.6)
    b += txt(S.px(13.4), S.py(C/13.4)-9, 'F(K, L) = y', RED, 12, True)
    b += line(S.p(0, kLow), S.p(kLow/m, 0), '#9dbcd6', 2.0)
    b += line(S.p(0, kA), S.p(kA/m, 0), BLUE, 2.4)
    b += line(S.p(0, kHigh), S.p(16, kHigh - m*16), '#5b8fbf', 2.0)
    b += hdash(S.px(Ls), S.py(Ks))
    b += vdash(S.px(Ls), S.py(Ks))
    b += dot(*S.p(Ls, Ks), 'A', 9, -8)
    b += dot(*S.p(LB, C/LB), 'B', -18, -6)
    b += dot(*S.p(LD, C/LD), 'D', 8, 16)
    b += sub(S.px(Ls)-8, OY+17, 'L', '*', GREY, 13)
    b += sub(OX-32, S.py(Ks)+5, 'K', '*', GREY, 13)
    b += txt(S.px(0.4), S.py(6.2), 'for lavt', '#5b8fbf', 11, False)
    b += txt(S.px(0.4), S.py(5.4), 'kostnadsnivå', '#5b8fbf', 11, False)
    b += txt(S.px(9.8), S.py(10.9), 'for dyrt', '#5b8fbf', 11, False)
    b += arrow(S.p(11.0, 6.6), S.p(7.4, 4.2), GRN, 1.8)
    b += txt(S.px(10.6), S.py(7.2), 'lavere kostnad', GRN, 11, False)
    b += txt(S.px(0.4), S.py(3.0), 'tangering i A:', INK, 10.5, False)
    b += txt(S.px(0.4), S.py(2.0), "F'K / F'L = r / w", INK, 10.5, True)
    save('econ2220-5-2-isokvant-isokost', b, out)
    n += 1

    # ---------- 5.2 (2): faktorsubstitusjon når lønna stiger ----------
    S = Scale(16, 15)
    m0, m1 = 0.5, 1.5
    L0, K0 = math.sqrt(C/m0), C/math.sqrt(C/m0)
    L1, K1 = math.sqrt(C/m1), C/math.sqrt(C/m1)
    krav(L1 < L0 and K1 > K0,
         '5-2: høyere lønn gir lavere arbeidsbruk og høyere kapitalbruk på SAMME isokvant')
    krav(abs(C/L0**2 - m0) < 1e-12 and abs(C/L1**2 - m1) < 1e-12,
         '5-2: begge punkter er ekte tangeringspunkter')
    b = header('Faktorsubstitusjon når lønna stiger. Arbeid L på den vannrette aksen, '
               'kapital K på den loddrette. Én isokvant er uendret. Den opprinnelige '
               'isokostlinja med den lave lønna tangerer isokvanten i punktet A. Den nye '
               'og brattere isokostlinja med høyere lønn tangerer den samme isokvanten i '
               'punktet B, som ligger lenger opp og til venstre. Stiplede hjelpelinjer '
               'fra A og B til begge akser viser at arbeidsbruken faller og '
               'kapitalbruken stiger. En merknad sier at bedriften beveger seg langs '
               'isokvanten, så produksjonsmengden er uendret.')
    b += axes('L', 'K')
    b += S.curve(lambda L_: C/L_, C/15.0, 16.0, RED, 2.6)
    b += txt(S.px(13.6), S.py(C/13.6)-9, 'F(K, L) = y', RED, 12, True)
    k0 = K0 + m0*L0
    k1 = K1 + m1*L1
    b += line(S.p(0, k0), S.p(k0/m0, 0), '#9dbcd6', 2.2)
    b += line(S.p(0, k1), S.p(k1/m1, 0), BLUE, 2.4)
    for (L_, K_, nm, lx, ly) in ((L0, K0, 'A', 'L*₀', 'K*₀'), (L1, K1, 'B', 'L*₁', 'K*₁')):
        b += hdash(S.px(L_), S.py(K_))
        b += vdash(S.px(L_), S.py(K_))
        b += dot(*S.p(L_, K_), nm, 9, -8)
    b += sub(S.px(L0)-10, OY+17, 'L', '0', GREY, 13, '*')
    b += sub(S.px(L1)-10, OY+17, 'L', '1', GREY, 13, '*')
    b += sub(OX-36, S.py(K0)+5, 'K', '0', GREY, 13, '*')
    b += sub(OX-36, S.py(K1)+5, 'K', '1', GREY, 13, '*')
    b += arrow(S.p(L0-0.5, K0+0.35), S.p(L1+0.5, K1-0.35), GRN, 2.0)
    b += txt(S.px(7.3), S.py(13.7), 'ny linje: helning –w1/r', BLUE, 11, False)
    b += txt(S.px(7.3), S.py(12.5), 'gammel: helning –w0/r', '#5b8fbf', 11, False)
    b += txt(S.px(7.6), S.py(9.4), 'bedriften beveger seg', GRN, 11, False)
    b += txt(S.px(7.6), S.py(8.5), 'LANGS isokvanten:', GRN, 11, False)
    b += txt(S.px(7.6), S.py(7.6), 'mengden er uendret', GRN, 11, False)
    save('econ2220-5-2-faktorsubstitusjon', b, out)
    n += 1

    # ---------- 5.3 (1): MK/GK-diagrammet ----------
    def MK(y):
        return 2.0*y

    def GK(y):
        return y + 100.0/y
    ym, gm = _minimum(GK, 2.0, 30.0)
    krav(abs(ym - 10.0) < 0.01 and abs(gm - 20.0) < 0.01,
         '5-3: GK-kurven har bunnpunkt i (10, 20)')
    krav(abs(MK(10.0) - GK(10.0)) < 1e-9,
         '5-3: MK skjærer GK nøyaktig i GK-minimum')
    krav(MK(8) < GK(8) and MK(12) > GK(12),
         '5-3: MK skjærer GK NEDENFRA (MK under GK til venstre for minimum)')
    S = Scale(30, 60)
    b = header('Diagrammet med marginalkostnad og gjennomsnittskostnad. Mengden y er på '
               'den vannrette aksen, kroner per enhet på den loddrette. '
               'Marginalkostnadskurven MK er en rett, stigende linje gjennom origo. '
               'Gjennomsnittskostnadskurven GK er U-formet: den faller bratt fra venstre, '
               'har bunnpunkt i punktet B ved mengde ti og kostnadsnivå tjue, og stiger '
               'deretter. Marginalkostnadskurven skjærer gjennomsnittskostnadskurven '
               'nedenfra nøyaktig i bunnpunktet. Stiplede hjelpelinjer går fra B til '
               'begge akser.')
    b += axes('y', 'kr/enhet')
    b += S.curve(MK, 0.0, 30.0, BLUE, 2.6)
    b += S.curve(GK, 1.8, 30.0, PUR, 2.6)
    b += txt(S.px(25.6), S.py(MK(29.2)), 'MK', BLUE, 14, False, True)
    b += txt(S.px(27.0), S.py(GK(27.0))+16, 'GK', PUR, 14, False, True)
    b += hdash(S.px(10.0), S.py(20.0))
    b += vdash(S.px(10.0), S.py(20.0))
    b += dot(*S.p(10.0, 20.0), 'B', 9, -9)
    b += txt(S.px(10.0)-6, OY+17, '10', GREY, 12, False)
    b += txt(OX-26, S.py(20.0)+4, '20', GREY, 12, False)
    b += txt(S.px(2.4), S.py(48.0), 'GK faller: MK < GK', GREY, 11, False)
    b += txt(S.px(13.4), S.py(12.0), 'GK stiger: MK > GK', GREY, 11, False)
    save('econ2220-5-3-mk-gk', b, out)
    n += 1

    # ---------- 5.3 (2): profitten som rektangelareal ----------
    p_, y_ = 40.0, 20.0
    krav(abs(GK(y_) - 25.0) < 1e-9, '5-3 rektangel: GK(20) = 25')
    krav(abs((p_ - GK(y_))*y_ - (p_*y_ - (y_**2 + 100))) < 1e-9,
         '5-3 rektangel: (p − GK(y))·y er identisk med py − c(y)')
    krav(p_ > gm, '5-3 rektangel: prislinja ligger over GK-bunnpunktet')
    b = header('Profitten som rektangelareal i diagrammet med marginalkostnad og '
               'gjennomsnittskostnad. Mengden y vannrett, kroner per enhet loddrett. '
               'Samme stigende marginalkostnadskurve og samme U-formede '
               'gjennomsnittskostnadskurve som før, med bunnpunkt B. En vannrett '
               'prislinje ligger over bunnpunktet. En stiplet loddrett hjelpelinje ved '
               'mengden y-stjerne treffer gjennomsnittskostnadskurven i punktet G og '
               'prislinja i punktet A. Rektangelet mellom de to punktene og den '
               'loddrette aksen er skravert og merket profitt lik prisen minus '
               'gjennomsnittskostnaden i y-stjerne, ganget med y-stjerne. Høyden er '
               'merket prisen minus gjennomsnittskostnaden, bredden er merket '
               'y-stjerne.')
    b += axes('y', 'kr/enhet')
    b += poly([S.p(0, GK(y_)), S.p(y_, GK(y_)), S.p(y_, p_), S.p(0, p_)], GRN, 0.22)
    b += S.curve(MK, 0.0, 30.0, BLUE, 2.4)
    b += S.curve(GK, 1.8, 30.0, PUR, 2.6)
    b += txt(S.px(25.6), S.py(MK(29.2)), 'MK', BLUE, 14, False, True)
    b += txt(S.px(27.0), S.py(GK(27.0))+16, 'GK', PUR, 14, False, True)
    b += line(S.p(0, p_), S.p(29, p_), INK, 2.0)
    b += txt(S.px(24.4), S.py(p_)-8, 'p', INK, 15)
    b += vdash(S.px(y_), S.py(p_))
    b += dot(*S.p(y_, p_), 'A', 8, -8)
    b += dot(*S.p(y_, GK(y_)), 'G', 8, 16)
    b += dot(*S.p(10.0, 20.0), 'B', -6, 18, 13)
    b += dblarrow((OX+12, S.py(GK(y_))), (OX+12, S.py(p_)), ORG, 1.4)
    b += txt(OX+18, (S.py(GK(y_))+S.py(p_))/2+4, 'p – GK(y*)', ORG, 11, False)
    b += dblarrow((OX+2, OY-8), (S.px(y_), OY-8), ORG, 1.4)
    b += sub(S.px(y_)/2 - 6, OY-12, 'y', '*', ORG, 12)
    b += sub(S.px(y_)-8, OY+17, 'y', '*', GREY, 13)
    b += txt(S.px(6.2), S.py(45.5), 'profitt = (p – GK(y*)) · y*', GRN, 12, False)
    save('econ2220-5-3-profittrektangel', b, out)
    n += 1

    # ---------- 5.3 (3): nedleggingsbetingelsen med sunk kost ----------
    def MKn(y):
        return 40.0*y

    def GKu(y):
        return 20.0*y + 180.0/y

    def GKf(y):
        return 20.0*y + 300.0/y
    yu, gu = _minimum(GKu, 1.0, 8.0)
    krav(abs(yu - 3.0) < 0.01 and abs(gu - 120.0) < 0.05,
         '5-3 nedlegging: den unngåelige GK-kurven har bunnpunkt i (3, 120)')
    krav(abs(MKn(3.0) - GKu(3.0)) < 1e-9,
         '5-3 nedlegging: MK skjærer den unngåelige GK-kurven i dens minimum')
    krav(all(GKf(y) > GKu(y) for y in (1.0, 2.0, 3.0, 5.0, 8.0)),
         '5-3 nedlegging: den fulle GK-kurven ligger over den unngåelige overalt')
    krav(abs((GKf(4.0)-GKu(4.0))*4.0 - 120.0) < 1e-9,
         '5-3 nedlegging: avstanden mellom kurvene ganger mengden er den sunkne kostnaden 120')
    S = Scale(8, 320)
    b = header('Nedleggingsbetingelsen med sunkne kostnader. Mengden y på den vannrette '
               'aksen, kroner per enhet på den loddrette. Tre kurver: en rett, stigende '
               'marginalkostnadskurve gjennom origo, en U-formet kurve for full '
               'gjennomsnittskostnad medregnet alle faste kostnader, og en lavere '
               'U-formet kurve for gjennomsnittlig unngåelig kostnad. Bunnpunktet på den '
               'unngåelige kurven er merket N ved mengde tre og kostnadsnivå hundre og '
               'tjue, med stiplede hjelpelinjer til begge akser, og '
               'marginalkostnadskurven skjærer den nøyaktig der. En vannrett linje ved '
               'hundre og tjue er merket nedleggingspris. Området under denne linja er '
               'lett skyggelagt og merket legg ned. En merknad sier at differansen '
               'mellom de to gjennomsnittskurvene er den sunkne kostnaden fordelt per '
               'enhet.')
    b += axes('y', 'kr/enhet')
    b += poly([S.p(0, 0), S.p(8, 0), S.p(8, 120), S.p(0, 120)], ORG, 0.12)
    b += S.curve(MKn, 0.0, 8.0, BLUE, 2.4)
    b += S.curve(GKf, 1.0, 8.0, PUR, 2.4)
    b += S.curve(GKu, 1.0, 8.0, GRN, 2.6)
    b += txt(S.px(7.0)+4, S.py(MKn(7.0))-6, 'MK', BLUE, 13, False, True)
    b += txt(S.px(2.35), S.py(202.0), 'GK (alle faste kostnader)', PUR, 10.5, False)
    b += txt(S.px(5.3), S.py(129.0), 'GK (bare unngåelige)', GRN, 10.5, False)
    b += line(S.p(0, 120), S.p(8, 120), INK, 1.8, '7 4')
    b += txt(S.px(4.25), S.py(104.0), 'nedleggingspris = 120', INK, 12, False)
    b += hdash(S.px(3.0), S.py(120.0))
    b += vdash(S.px(3.0), S.py(120.0))
    b += dot(*S.p(3.0, 120.0), 'N', -20, -9)
    b += txt(S.px(3.0)-4, OY+17, '3', GREY, 12, False)
    b += txt(OX-32, S.py(120.0)+4, '120', GREY, 12, False)
    b += txt(S.px(0.35), S.py(46.0), 'legg ned', ORG, 12, False, True)
    b += dblarrow(S.p(4.6, GKu(4.6)), S.p(4.6, GKf(4.6)), GREY, 1.3)
    b += txt(S.px(4.85), S.py(72.0), 'avstanden mellom kurvene', GREY, 10, False)
    b += txt(S.px(4.85), S.py(56.0), 'er sunk kost per enhet', GREY, 10, False)
    save('econ2220-5-3-nedlegging', b, out)
    n += 1

    # ---------- 5.4 (1): profittmaksimering i MK/GK-diagrammet ----------
    S = Scale(30, 60)
    krav(abs(MK(20.0) - 40.0) < 1e-9, '5-4: p = 40 gir y* = 20 fra p = c′(y)')
    krav(abs(GK(20.0) - 25.0) < 1e-9 and abs((40.0-25.0)*20.0 - 300.0) < 1e-9,
         '5-4: GK(20) = 25 og profitten er 300')
    b = header('Profittmaksimering i diagrammet med marginalkostnad og '
               'gjennomsnittskostnad. Mengden y vannrett, kroner per enhet loddrett. Den '
               'stigende marginalkostnadskurven og den U-formede '
               'gjennomsnittskostnadskurven med bunnpunkt i mengde ti og nivå tjue. En '
               'vannrett prislinje ved førti skjærer marginalkostnadskurven i punktet A '
               'ved mengde tjue — det er tilpasningen der prisen er lik '
               'marginalkostnaden. En stiplet loddrett hjelpelinje går ned til mengden '
               'tjue og treffer gjennomsnittskostnadskurven i punktet G ved nivå '
               'tjuefem. Rektangelet mellom prislinja og gjennomsnittskostnaden fra null '
               'til tjue er skravert og merket profitt lik tre hundre.')
    b += axes('y', 'kr/enhet')
    b += poly([S.p(0, 25.0), S.p(20.0, 25.0), S.p(20.0, 40.0), S.p(0, 40.0)], GRN, 0.22)
    b += S.curve(MK, 0.0, 30.0, BLUE, 2.6)
    b += S.curve(GK, 1.8, 30.0, PUR, 2.6)
    b += txt(S.px(25.6), S.py(MK(29.2)), 'MK', BLUE, 14, False, True)
    b += txt(S.px(27.0), S.py(GK(27.0))+16, 'GK', PUR, 14, False, True)
    b += line(S.p(0, 40.0), S.p(29, 40.0), INK, 2.0)
    b += txt(S.px(24.0), S.py(40.0)-8, 'p = 40', INK, 12, False)
    b += vdash(S.px(20.0), S.py(40.0))
    b += hdash(S.px(20.0), S.py(40.0))
    b += hdash(S.px(20.0), S.py(25.0))
    b += dot(*S.p(20.0, 40.0), 'A', 9, -8)
    b += dot(*S.p(20.0, 25.0), 'G', 9, 16)
    b += dot(*S.p(10.0, 20.0), '', 0, 0, 12)
    b += txt(S.px(10.0)-4, S.py(20.0)+18, '(10, 20)', GREY, 10, False)
    b += txt(S.px(20.0)+8, S.py(46.0), 'p = c′(y)', INK, 12, True)
    b += sub(S.px(20.0)-8, OY+17, 'y', '*', GREY, 13)
    b += txt(S.px(20.0)-10, OY+31, '= 20', GREY, 12, False)
    b += txt(OX-26, S.py(25.0)+4, '25', GREY, 12, False)
    b += txt(S.px(6.0), S.py(31.5), 'profitt = 300', GRN, 12, False, True)
    save('econ2220-5-4-tilpasning-mk-gk', b, out)
    n += 1

    # ---------- 5.4 (2): tilbudskurven ved avtakende skalautbytte ----------
    S = Scale(8, 320)
    krav(abs(40.0*3.0 - 120.0) < 1e-9, '5-4: nedleggingspunktet N = (3, 120) ligger på p = 40y')
    krav(abs(_minimum(GKu, 1.0, 8.0)[1] - 120.0) < 0.05,
         '5-4: springet skjer nøyaktig ved nedleggingsprisen 120')
    b = header('Tilbudskurven ved avtakende skalautbytte, med sprang. Mengden y på den '
               'vannrette aksen, prisen p på den loddrette. Kurven består av tre deler: '
               'en loddrett strek langs prisaksen fra null opp til hundre og tjue, som '
               'betyr at tilbudet er null; deretter et vannrett sprang bort til punktet '
               'N ved mengde tre og pris hundre og tjue; og derfra den rette, stigende '
               'linja p lik førti ganger y oppover mot høyre. Punktet N er merket '
               'nedleggingspunkt, med stiplede hjelpelinjer til begge akser. En tekstboks '
               'noterer at tapet ved drift i dette punktet er nøyaktig lik den sunkne '
               'kostnaden.')
    b += axes('y', 'p')
    b += line(S.p(0, 0), S.p(0, 120.0), BLUE, 3.0)
    b += line(S.p(0, 120.0), S.p(3.0, 120.0), BLUE, 2.2, '6 4')
    b += line(S.p(3.0, 120.0), S.p(8.0, 320.0), BLUE, 3.0)
    b += txt(S.px(7.2)+2, S.py(248.0)+4, 'p = 40y', BLUE, 12, True)
    b += hdash(S.px(3.0), S.py(120.0))
    b += vdash(S.px(3.0), S.py(120.0))
    b += dot(*S.p(3.0, 120.0), '', 0, 0)
    b += txt(S.px(3.0)+8, S.py(120.0)+16, 'N = (3, 120)', INK, 12, False, True)
    b += txt(S.px(3.0)+8, S.py(120.0)+30, 'nedleggingspunkt', INK, 11, False)
    b += txt(S.px(0.25), S.py(58.0), 'tilbud = 0', BLUE, 12, False)
    b += txt(S.px(3.0)-4, OY+17, '3', GREY, 12, False)
    b += txt(OX-32, S.py(120.0)+4, '120', GREY, 12, False)
    b += rect(S.px(3.6), S.py(300.0), 148, 44, '#ffffff', GREY, 1.0, 1.0, 4)
    b += txt(S.px(3.6)+8, S.py(300.0)+17, 'Ved p = 120 er tapet ved', GREY, 10, False)
    b += txt(S.px(3.6)+8, S.py(300.0)+31, 'drift lik den sunkne kostnaden.', GREY, 10, False)
    save('econ2220-5-4-tilbud-avtakende', b, out)
    n += 1

    # ---------- 5.4 (3): vannrett tilbudskurve ved konstant skalautbytte ----------
    S = Scale(24, 24)
    k_ = 12.0
    krav(abs((24.0 - k_) - 12.0) < 1e-9,
         '5-4 konstant: etterspørselen p = 24 − y krysser tilbudslinja p = 12 i y = 12')
    b = header('Vannrett tilbudskurve ved konstant skalautbytte. Mengden y på den '
               'vannrette aksen, prisen p på den loddrette. En vannrett linje ved '
               'enhetskostnaden tolv strekker seg mot høyre og er merket tilbud. Under '
               'linja står tilbud lik null, på linja står at bedriften er likegyldig, og '
               'over linja står ubegrenset tilbud. En fallende etterspørselskurve krysser '
               'den vannrette tilbudslinja i punktet E, med en stiplet hjelpelinje ned '
               'til likevektsmengden. En merknad sier at prisen bestemmes fra '
               'kostnadssiden, mens etterspørselen bare bestemmer mengden.')
    b += axes('y', 'p')
    b += line(S.p(0, k_), S.p(23.4, k_), BLUE, 2.8)
    b += txt(S.px(19.6), S.py(k_)-8, 'tilbud: p = k = 12', BLUE, 12, False)
    b += S.curve(lambda y: 24.0 - y, 0.0, 23.4, RED, 2.4)
    b += txt(S.px(19.0), S.py(24.0-19.0)+16, 'etterspørsel', RED, 12, False)
    b += vdash(S.px(12.0), S.py(k_))
    b += dot(*S.p(12.0, k_), 'E', 9, -9)
    b += txt(S.px(12.0)-6, OY+17, '12', GREY, 12, False)
    b += txt(OX-26, S.py(k_)+4, '12', GREY, 12, False)
    b += txt(S.px(1.0), S.py(6.0), 'p < k: tilbud = 0', GREY, 11, False)
    b += txt(S.px(1.0), S.py(20.0), 'p > k: ubegrenset', GREY, 11, False)
    b += txt(S.px(1.0), S.py(10.4), 'p = k: bedriften er likegyldig', GREY, 11, False)
    b += rect(S.px(12.6), S.py(23.4), 158, 50, '#ffffff', GREY, 1.0, 1.0, 4)
    b += txt(S.px(12.6)+8, S.py(23.4)+17, 'Prisen bestemmes fra', GREY, 10, False)
    b += txt(S.px(12.6)+8, S.py(23.4)+30, 'kostnadssiden — etterspørselen', GREY, 10, False)
    b += txt(S.px(12.6)+8, S.py(23.4)+43, 'bestemmer bare mengden.', GREY, 10, False)
    save('econ2220-5-4-tilbud-konstant', b, out)
    n += 1

    # ---------- 5.5 (1): åttestegs-kjeden som studiekart ----------
    b = header('Studiekart over de åtte stegene i produsentoppgaven, som et flytskjema '
               'med åtte bokser i to kolonner og piler nedover. Steg én: klassifiser '
               'teknologien med testen på produktfunksjonen når begge faktorer skaleres. '
               'Steg to: kostnadsminimer med Lagrange-funksjonen og '
               'førsteordensbetingelsene, slik at forholdet mellom marginalproduktene '
               'blir lik forholdet mellom faktorprisene. Steg tre: utled '
               'kostnadsfunksjonen. Steg fire: bestem kurveformen fra fortegnet på den '
               'andrederiverte. Steg fem: profittmaksimer med prisen lik '
               'marginalkostnaden. Steg seks: tilbudskurven, som avhenger av '
               'skalaregimet, og nedleggingsprisen. Steg sju: nullprofitt der skalaen er '
               'konstant. Steg åtte: halen, altså påstand eller åpen drøfting. En sidepil '
               'går fra steg tre til steg fem og er merket at kostnadsfunksjonen er '
               'innsatsvaren der. En tekstboks til høyre minner om at steg to og tre '
               'alltid kommer før steg fem.', 580, 400)
    steg = [('1', ['Klassifiser teknologien:', 'F(tK, tL)-testen']),
            ('2', ['Kostnadsminimer: Lagrange,', "FOB, F'K/F'L = r/w"]),
            ('3', ['Utled kostnadsfunksjonen', 'c(y) = rK* + wL*']),
            ('4', ['Kurveform: fortegnet', "på c''(y)"]),
            ('5', ['Profittmaksimer:', "p = c'(y)"]),
            ('6', ['Tilbudskurve (avhenger av', 'regimet) + nedleggingspris']),
            ('7', ['Nullprofitt der skalaen', 'er konstant']),
            ('8', ['Halen: påstand eller', 'åpen drøfting'])]
    BW, BH = 196, 56
    cols = (24, 246)
    rows = (48, 132, 216, 300)
    pos = {}
    for i, (num, lines) in enumerate(steg):
        cx = cols[i//4]
        cy = rows[i % 4]
        pos[num] = (cx, cy)
        farge = BLUE if i < 4 else GRN
        b += rect(cx, cy, BW, BH, '#f7f9fb', farge, 1.6, 1.0, 6)
        b += f'  <text x="{cx+13}" y="{cy+35}" font-size="19" font-weight="bold" fill="{farge}">{num}</text>\n'
        for j, ln in enumerate(lines):
            b += txt(cx+34, cy+24+j*15, ln, INK, 11.5, False)
    for a, c in (('1', '2'), ('2', '3'), ('3', '4'), ('5', '6'), ('6', '7'), ('7', '8')):
        xa, ya = pos[a]
        b += arrow((xa+BW/2, ya+BH), (xa+BW/2, pos[c][1]-3), GREY, 1.6)
    # kolonneskifte 4 -> 5: tekst under boks 4 + kort pil ned i boks 5
    x4, y4 = pos['4']
    x5, y5 = pos['5']
    b += txt(x4+BW/2, y4+BH+16, 'fortsetter i høyre kolonne →', GREY, 10.5, False,
             False, 'middle')
    b += arrow((x5+BW/2, y5-24), (x5+BW/2, y5-3), GREY, 1.6)
    # sidepil 3 -> 5
    x3, y3 = pos['3']
    b += f'  <path d="M {x3+BW} {y3+BH/2} C {x3+BW+34} {y3+BH/2}, {x5-34} {y5+BH/2}, {x5-6} {y5+BH/2}" fill="none" stroke="{ORG}" stroke-width="1.6"/>\n'
    b += arrow((x5-14, y5+BH/2), (x5-3, y5+BH/2), ORG, 1.6, None, 7)
    b += txt(246, 376, 'oransje pil: c(y) fra steg 3 er innsatsvaren i steg 5', ORG, 10, False)
    b += rect(448, 284, 126, 76, '#ffffff', ORG, 1.4, 1.0, 6)
    b += txt(456, 302, 'Steg 2–3 kommer', ORG, 10.5, False)
    b += txt(456, 317, 'ALLTID før steg 5 —', ORG, 10.5, False)
    b += txt(456, 332, 'ellers har du ingen', ORG, 10.5, False)
    b += txt(456, 347, 'c(y) å derivere.', ORG, 10.5, False)
    b += txt(24, 24, 'Produsentoppgaven, steg for steg', INK, 15, False, True)
    save('econ2220-5-5-kjeden', b, out)
    n += 1

    # ---------- 5.5 (2): betongverket ----------
    def MKb(y):
        return 24.0*math.sqrt(y)

    def GKb(y):
        return 16.0*math.sqrt(y)
    krav(abs(MKb(9.0) - 72.0) < 1e-9, '5-5: p = 72 gir y* = 9')
    krav(abs(GKb(9.0) - 48.0) < 1e-9 and abs((72.0-48.0)*9.0 - 216.0) < 1e-9,
         '5-5: GK(9) = 48 og profitten er 216')
    krav(all(MKb(y) > GKb(y) for y in (0.5, 2.0, 9.0, 16.0)),
         '5-5: MK ligger overalt 50 prosent over GK — kurvene krysser aldri')
    S = Scale(16, 100)
    b = header('Diagrammet for betongverket. Mengden y i tusen kubikkmeter på den '
               'vannrette aksen, kroner per enhet på den loddrette. To stigende, konkave '
               'kurver fra origo: marginalkostnaden øverst og gjennomsnittskostnaden '
               'nederst. Marginalkostnaden ligger overalt femti prosent over '
               'gjennomsnittskostnaden, så kurvene krysser aldri. En vannrett prislinje '
               'ved syttito skjærer marginalkostnadskurven i punktet A ved mengde ni. En '
               'stiplet loddrett hjelpelinje går ned til mengden ni og treffer '
               'gjennomsnittskostnadskurven i punktet G ved førtiåtte. Rektangelet '
               'mellom prislinja og gjennomsnittskostnaden fra null til ni er skravert '
               'og merket profitt lik to hundre og seksten.')
    b += axes('y', 'kr/enhet')
    b += poly([S.p(0, 48.0), S.p(9.0, 48.0), S.p(9.0, 72.0), S.p(0, 72.0)], GRN, 0.22)
    b += S.curve(MKb, 0.0, 16.0, BLUE, 2.6)
    b += S.curve(GKb, 0.0, 16.0, PUR, 2.6)
    b += txt(S.px(14.4), S.py(MKb(14.4))-8, 'MK', BLUE, 14, False, True)
    b += txt(S.px(14.0), S.py(GKb(14.0))+16, 'GK', PUR, 14, False, True)
    b += line(S.p(0, 72.0), S.p(15.4, 72.0), INK, 2.0)
    b += txt(S.px(11.4), S.py(72.0)-8, 'p = 72', INK, 12, False)
    b += vdash(S.px(9.0), S.py(72.0))
    b += hdash(S.px(9.0), S.py(72.0))
    b += hdash(S.px(9.0), S.py(48.0))
    b += dot(*S.p(9.0, 72.0), 'A', 9, -8)
    b += dot(*S.p(9.0, 48.0), 'G', 9, 16)
    b += sub(S.px(9.0)-8, OY+17, 'y', '*', GREY, 13)
    b += txt(S.px(9.0)-10, OY+31, '= 9', GREY, 12, False)
    b += txt(OX-26, S.py(48.0)+4, '48', GREY, 12, False)
    b += txt(OX-26, S.py(72.0)+4, '72', GREY, 12, False)
    b += txt(S.px(2.2), S.py(58.0), 'profitt = 216', GRN, 12, False, True)
    save('econ2220-5-5-betongverket', b, out)
    n += 1

    return n


# =====================================================================
# DEL 8 — Sjangertrening og øvingseksamener (agent F2)
# =====================================================================

def f2_del8(out):
    n = 0

    # ---------- 8.3 (1): Slutsky med beholdning (øvingseksamen 1, oppgave 1d) ----------
    W = (4.0, 24.0)
    A, Bp, Cp = (8.0, 16.0), (6.0, 24.0), (5.0, 20.0)
    p0, p1 = 2.0, 4.0
    m0 = p0*W[0] + W[1]
    m1 = p1*W[0] + W[1]
    ms = p1*A[0] + A[1]
    krav(abs(m0 - 32.0) < 1e-9 and abs(m1 - 40.0) < 1e-9 and abs(ms - 48.0) < 1e-9,
         '8-3 Slutsky: inntektene 32, 40 og kompensert 48')
    krav(abs(0.5*m0/p0 - A[0]) < 1e-9 and abs(0.5*m0 - A[1]) < 1e-9, '8-3: A = (8,16)')
    krav(abs(0.5*m1/p1 - Cp[0]) < 1e-9 and abs(0.5*m1 - Cp[1]) < 1e-9, '8-3: C = (5,20)')
    krav(abs(0.5*ms/p1 - Bp[0]) < 1e-9 and abs(0.5*ms - Bp[1]) < 1e-9, '8-3: B = (6,24)')
    krav(abs((Bp[0]-A[0]) + 2.0) < 1e-9 and abs((Cp[0]-Bp[0]) + 1.0) < 1e-9,
         '8-3: substitusjonseffekten er −2 og inntektsvirkningen −1')
    for pt, pp, mm in ((A, p0, m0), (W, p0, m0), (W, p1, m1), (Cp, p1, m1), (Bp, p1, ms), (A, p1, ms)):
        krav(abs(pp*pt[0] + pt[1] - mm) < 1e-9, '8-3: punktene ligger på riktig budsjettlinje')
    S = Scale(18, 50)
    b = header('Slutsky-dekomponering med beholdning. Vedmengden i favner er på den '
               'vannrette aksen, alt annet forbruk på den loddrette. '
               'Beholdningspunktet W med fire favner ved og tjuefire enheter annet '
               'forbruk ligger på begge budsjettlinjer. Den opprinnelige linja har '
               'helning minus to og skjærer aksene i seksten favner og trettito enheter; '
               'tilpasningen er punktet A med åtte favner og seksten enheter, der en '
               'konveks indifferenskurve tangerer linja. Etter prisøkningen roterer linja '
               'om W og blir brattere, med helning minus fire, og skjærer aksene i ti '
               'favner og førti enheter; den nye tilpasningen er punktet C med fem favner '
               'og tjue enheter. Den stiplede kompenserte linja har samme helning som den '
               'nye, men går gjennom det gamle punktet A og skjærer aksene i tolv favner '
               'og førtiåtte enheter; på den ligger punktet B med seks favner og '
               'tjuefire enheter. Stiplede hjelpelinjer ned til den vannrette aksen '
               'merker åtte, seks og fem. En pil fra A til B er merket '
               'substitusjonseffekt lik minus to, og en pil fra B til C er merket '
               'inntektsvirkning lik minus én.')
    b += axes('c1', 'c2')
    b += txt(OX+4, OY+40, 'c1 = favner ved   ·   c2 = alt annet forbruk', GREY, 11, False)
    b += line(S.p(0, 48.0), S.p(12.0, 0), GREY, 1.8, '7 4')
    b += line(S.p(0, 32.0), S.p(16.0, 0), '#5b8fbf', 2.2)
    b += line(S.p(0, 40.0), S.p(10.0, 0), BLUE, 2.4)
    for pt, lv in ((A, math.sqrt(A[0]*A[1])), (Bp, math.sqrt(Bp[0]*Bp[1])), (Cp, math.sqrt(Cp[0]*Cp[1]))):
        f = cd_ic(lv, 0.5)
        b += S.curve(f, max(1.6, lv*lv/50.0), 18.0, RED, 1.8)
    for pt, nm, dx, dy in ((A, 'A', 9, -8), (Bp, 'B', 9, -8), (Cp, 'C', -22, 17)):
        b += vdash(S.px(pt[0]), S.py(pt[1]))
        b += dot(*S.p(*pt), nm, dx, dy)
        b += txt(S.px(pt[0])-4, OY+17, f'{pt[0]:.0f}', GREY, 12, False)
    b += dot(*S.p(*W), 'W', 10, -6)
    b += arrow(S.p(7.7, 16.9), S.p(6.3, 23.1), GRN, 1.8)
    b += arrow(S.p(5.85, 24.0), S.p(5.15, 20.3), ORG, 1.8)
    b += txt(S.px(7.0), S.py(28.6), 'SE = –2', GRN, 11, False)
    b += txt(S.px(2.6), S.py(21.0), 'IE = –1', ORG, 11, False)
    b += txt(S.px(10.6), S.py(45.0), 'kompensert linje', GREY, 11, False)
    b += txt(S.px(6.6), S.py(38.4), 'ny linje: –4', BLUE, 11, False)
    b += txt(S.px(11.4), S.py(13.4), 'gammel: –2', '#5b8fbf', 11, False)
    b += txt(S.px(4.4), S.py(31.6), 'rotasjon om W', GREY, 10, False)
    save('econ2220-8-3-slutsky-beholdning', b, out)
    n += 1

    # ---------- 8.3 (2): Edgeworth-boksen med høy og poteter ----------
    B = EBox(12, 24)
    Wb, Eb = (2.0, 16.0), (5.0, 10.0)
    cA, cB, klar = cd_likevekt(12, 24, Wb, 0.5, 0.5, 2.0)
    krav(klar and abs(cA[0]-5) < 1e-9 and abs(cA[1]-10) < 1e-9,
         '8-3 Edgeworth: p = 2 gir E = (5,10), og BEGGE markeder klarerer')
    krav(abs(Eb[1] - 2.0*Eb[0]) < 1e-12,
         '8-3 Edgeworth: E ligger på kontraktkurven c2 = 2c1')
    krav(abs(Eb[1] - (Wb[1] - 2.0*(Eb[0]-Wb[0]))) < 1e-9,
         '8-3 Edgeworth: E ligger på budsjettlinja gjennom W med helning −2')
    fA, fB = cd_pair(B, 0.5, 0.5, Wb)
    gA, gB = cd_pair(B, 0.5, 0.5, Eb)
    xw = kryss(fA, fB, 2.2, 11.0)
    krav(xw is not None and xw > Wb[0], '8-3 Edgeworth: linsen fra W lukkes til høyre for W')
    b = header('Edgeworth-boksen for de to gårdsbrukene i øvingseksamen 1. Boksen er tolv '
               'enheter høy bred og tjuefire enheter poteter høy. As origo ligger nede '
               'til venstre, Bs origo oppe til høyre. Beholdningspunktet W med to enheter '
               'høy og seksten poteter til A ligger oppe til venstre, med stiplede '
               'hjelpelinjer til begge kanter. Den felles budsjettlinja gjennom W har '
               'helning minus to. Likevektsallokeringen E med fem enheter høy og ti '
               'poteter til A ligger nede til høyre for W på linja; der tangerer As og Bs '
               'indifferenskurver hverandre, og kurvene krummer mot hvert sitt origo. '
               'Linsen mellom de to kurvene gjennom W er skravert og merket '
               'Pareto-forbedringer fra W. Piler viser at A kjøper tre enheter høy og '
               'betaler seks poteter.')
    b += B.frame('enheter høy', 'poteter')
    b += line(B.p(0, 24), B.p(10, 4), PUR, 1.6, '6 4') if False else ''
    b += B.curve(lambda x: 2.0*x, 0.0, 12.0, PUR, 1.6, '6 4')
    b += txt(B.px(8.2), B.py(20.2), 'kontraktkurven', PUR, 11, False)
    b += B.lens(fA, fB, Wb[0], min(xw, 11.6))
    b += B.curve(fA, 1.0, 12.0, RED, 1.7)
    b += B.curve(fB, 0.4, 11.0, BLUE, 1.7)
    b += B.curve(gA, 2.4, 12.0, RED, 2.3)
    b += B.curve(gB, 0.8, 10.2, BLUE, 2.3)
    b += line(B.p(0, 20), B.p(10, 0), INK, 2.0)
    b += B.guides(*Wb, lab_x='2', lab_y='16')
    b += B.guides(*Eb, lab_x='5', lab_y='10')
    b += arrow(B.p(2.4, 15.2), B.p(4.6, 10.8), GRN, 2.0)
    b += dot(*B.p(*Wb), 'W', -22, -6)
    b += dot(*B.p(*Eb), 'E', 9, -9)
    b += txt(B.px(5.4), B.py(15.6), 'A kjøper 3 høy,', GRN, 11, False)
    b += txt(B.px(5.4), B.py(14.0), 'betaler 6 poteter', GRN, 11, False)
    b += txt(B.px(0.35), B.py(8.6), 'Pareto-forbedringer', GRN, 10, False)
    b += txt(B.px(0.35), B.py(7.2), 'fra W (linsen)', GRN, 10, False)
    b += txt(B.px(0.45), B.py(3.2), 'budsjettlinje: helning –2', INK, 11, False)
    save('econ2220-8-3-edgeworth-hoy-poteter', b, out)
    n += 1

    # ---------- 8.3 (3): MK/GK med profittareal (øvingseksamen 1, oppgave 3c) ----------
    def MK3(y):
        return 30.0*math.sqrt(y)

    def GK3(y):
        return 20.0*math.sqrt(y)
    krav(abs(MK3(9.0) - 90.0) < 1e-9, '8-3 produsent: p = 90 gir y* = 9')
    krav(abs(GK3(9.0) - 60.0) < 1e-9 and abs((90.0-60.0)*9.0 - 270.0) < 1e-9,
         '8-3 produsent: GK(9) = 60 og profitten er 270')
    krav(all(MK3(y) > GK3(y) for y in (0.5, 1.0, 9.0, 16.0)),
         '8-3 produsent: MK ligger over GK i hele området')
    S = Scale(16, 140)
    b = header('Diagram med marginalkostnad og gjennomsnittskostnad for trevarefabrikken '
               'i øvingseksamen 1. Mengden y på den vannrette aksen, kroner per enhet på '
               'den loddrette. Begge kurver stiger fra origo, og marginalkostnaden ligger '
               'over gjennomsnittskostnaden i hele området. En vannrett prislinje ved '
               'nitti skjærer marginalkostnadskurven ved mengde ni, markert med en '
               'stiplet loddrett linje ned til aksen. Gjennomsnittskostnaden i denne '
               'mengden er seksti, markert på den loddrette aksen med en stiplet '
               'vannrett linje. Profittrektangelet fra mengde null til ni, mellom '
               'seksti og nitti, er skravert og merket profitten er to hundre og sytti.')
    b += axes('y', 'kr/enhet')
    b += poly([S.p(0, 60.0), S.p(9.0, 60.0), S.p(9.0, 90.0), S.p(0, 90.0)], GRN, 0.22)
    b += S.curve(MK3, 0.0, 16.0, BLUE, 2.6)
    b += S.curve(GK3, 0.0, 16.0, PUR, 2.6)
    b += txt(S.px(14.0), S.py(MK3(14.0))-8, 'MK', BLUE, 14, False, True)
    b += txt(S.px(14.2), S.py(GK3(14.2))+16, 'GK', PUR, 14, False, True)
    b += line(S.p(0, 90.0), S.p(15.3, 90.0), INK, 2.0)
    b += txt(S.px(11.0), S.py(90.0)-8, 'p = 90', INK, 12, False)
    b += vdash(S.px(9.0), S.py(90.0))
    b += hdash(S.px(9.0), S.py(60.0))
    b += dot(*S.p(9.0, 90.0), '', 0, 0)
    b += dot(*S.p(9.0, 60.0), '', 0, 0)
    b += sub(S.px(9.0)-8, OY+17, 'y', '*', GREY, 13)
    b += txt(S.px(9.0)-10, OY+31, '= 9', GREY, 12, False)
    b += txt(OX-26, S.py(60.0)+4, '60', GREY, 12, False)
    b += txt(OX-26, S.py(90.0)+4, '90', GREY, 12, False)
    b += txt(S.px(1.6), S.py(73.0), 'profitt = 270', GRN, 12, False, True)
    save('econ2220-8-3-mk-gk-profittareal', b, out)
    n += 1

    # ---------- 8.4 (1): budsjettlinje med navngitte punkter ----------
    def uq(c1, c2):
        return 4.0*math.sqrt(c1) + c2
    krav(abs(uq(1, 11) - 15.0) < 1e-9 and abs(uq(9, 3) - 15.0) < 1e-9,
         '8-4: A = (1,11) og C = (9,3) ligger på SAMME indifferenskurve, nyttenivå 15')
    krav(abs(uq(4, 8) - 16.0) < 1e-9, '8-4: B = (4,8) ligger på den høyere kurven, nivå 16')
    krav(abs(2.0/math.sqrt(4.0) - 1.0) < 1e-12, '8-4: MSB i B er 1, altså tangering med helning −1')
    krav(abs(2.0/math.sqrt(1.0) - 2.0) < 1e-12 and abs(2.0/math.sqrt(9.0) - 2.0/3.0) < 1e-12,
         '8-4: MSB er 2 i A (krysser brattere) og 2/3 i C (krysser slakere)')
    krav(3 + 6 < 12, '8-4: D = (3,6) ligger innenfor budsjettlinja')
    for pt in ((1, 11), (4, 8), (9, 3)):
        krav(pt[0] + pt[1] == 12, '8-4: A, B og C ligger på budsjettlinja c1 + c2 = 12')
    S = Scale(14, 17)
    b = header('Budsjettlinje med fire navngitte punkter for den kvasi-lineære '
               'konsumenten. Konsertbilletter er på den vannrette aksen, alt annet forbruk '
               'på den loddrette. Budsjettlinja går fra null og tolv til tolv og null og '
               'har helning minus én. Punktene A med én billett og elleve enheter, B '
               'med fire og åtte, og C med ni og tre ligger alle på linja, mens '
               'punktet D med tre og seks ligger innenfor linja. Indifferenskurven gjennom '
               'B tangerer budsjettlinja. Den lavere indifferenskurven går gjennom både A '
               'og C og skjærer budsjettlinja i nettopp de to punktene: brattere i A og '
               'slakere i C. Stiplede hjelpelinjer går fra B til fire på den vannrette '
               'aksen og åtte på den loddrette. Piler langs linja fra A og fra C peker '
               'mot B og er merket kan bytte seg til høyere nytte.')
    b += axes('c1', 'c2')
    b += txt(OX+4, OY+40, 'c1 = konsertbilletter   ·   c2 = alt annet forbruk', GREY, 11, False)
    b += line(S.p(0, 12.0), S.p(12.0, 0), INK, 2.2)
    b += S.curve(lambda c: 16.0 - 4.0*math.sqrt(c), 0.25, 14.0, RED, 2.4)
    b += S.curve(lambda c: 15.0 - 4.0*math.sqrt(c), 0.25, 13.6, '#e0a6a0', 2.2)
    b += txt(S.px(12.1), S.py(16.0-4.0*math.sqrt(12.1))-8, 'u = 16', RED, 11, True)
    b += txt(S.px(10.1), S.py(2.4), 'u = 15', '#c98d86', 11, True)
    b += vdash(S.px(4.0), S.py(8.0))
    b += hdash(S.px(4.0), S.py(8.0))
    b += dot(*S.p(1.0, 11.0), 'A', -18, -8)
    b += dot(*S.p(4.0, 8.0), 'B', 9, -8)
    b += dot(*S.p(9.0, 3.0), 'C', 9, 15)
    b += dot(*S.p(3.0, 6.0), 'D', -8, 17)
    b += txt(S.px(4.0)-4, OY+17, '4', GREY, 12, False)
    b += txt(OX-22, S.py(8.0)+4, '8', GREY, 12, False)
    b += arrow(S.p(1.7, 10.3), S.p(3.3, 8.7), GRN, 1.8)
    b += arrow(S.p(8.3, 3.7), S.p(5.1, 6.9), GRN, 1.8)
    b += txt(S.px(6.4), S.py(11.0), 'kan bytte seg til', GRN, 11, False)
    b += txt(S.px(6.4), S.py(9.9), 'høyere nytte', GRN, 11, False)
    b += txt(S.px(0.9), S.py(4.2), 'D: inntekten er', GREY, 10, False)
    b += txt(S.px(0.9), S.py(3.2), 'ikke brukt opp', GREY, 10, False)
    save('econ2220-8-4-kvasilinear-punkter', b, out)
    n += 1

    # ---------- 8.4 (2): bytteboks med kvasi-lineære preferanser ----------
    Bx = EBox(5, 20)
    Wq, Eq = (3.0, 4.0), (1.0, 14.0)
    pq = 5.0
    c1A, c1B = 25.0/pq**2, 100.0/pq**2
    mA, mB = pq*3 + 4, pq*2 + 16
    c2A, c2B = mA - pq*c1A, mB - pq*c1B
    krav(abs(c1A + c1B - 5.0) < 1e-9 and abs(c2A + c2B - 20.0) < 1e-9,
         '8-4 bytteboks: p = 5 klarerer BEGGE markeder')
    krav(abs(c1A - Eq[0]) < 1e-9 and abs(c2A - Eq[1]) < 1e-9, '8-4 bytteboks: E = (1,14)')
    krav(abs(5.0/math.sqrt(c1A) - 10.0/math.sqrt(c1B)) < 1e-9,
         '8-4 bytteboks: MSB_A = MSB_B = 5 i E, altså tangering')
    krav(abs(Eq[1] - (Wq[1] - pq*(Eq[0]-Wq[0]))) < 1e-9,
         '8-4 bytteboks: E ligger på budsjettlinja gjennom W med helning −5')
    lvA = 10.0*math.sqrt(Eq[0]) + Eq[1]
    lvB = 20.0*math.sqrt(5.0-Eq[0]) + (20.0-Eq[1])
    krav(abs(lvA - 24.0) < 1e-9 and abs(lvB - 46.0) < 1e-9,
         '8-4 bytteboks: nyttenivåene i E er 24 for A og 46 for B')
    krav(10.0*math.sqrt(Eq[0]) + Eq[1] > 10.0*math.sqrt(Wq[0]) + Wq[1]
         and lvB > 20.0*math.sqrt(5.0-Wq[0]) + (20.0-Wq[1]),
         '8-4 bytteboks: BEGGE kommer bedre ut i E enn i W (handelsgevinst)')
    b = header('Bytteboks med kvasi-lineære preferanser fra øvingseksamen 2. Boksen er '
               'fem sekker saueull bred og tjue enheter annet forbruk høy. As origo '
               'ligger nede til venstre, Bs oppe til høyre. Beholdningspunktet W med '
               'tre sekker og fire enheter til A ligger nede til høyre. Den felles '
               'budsjettlinja gjennom W har helning minus fem. Likevekten E med én '
               'sekk og fjorten enheter til A ligger oppe til venstre på linja, og der '
               'tangerer de to indifferenskurvene hverandre. Kontraktkurven er en loddrett '
               'linje ved én sekk til A, merket alle effektive allokeringer har samme '
               'fordeling av vare én.')
    b += Bx.frame('sekker saueull', 'annet forbruk')
    b += line(Bx.p(1.0, 0), Bx.p(1.0, 20.0), PUR, 2.0, '6 4')
    b += txt(Bx.px(1.3), Bx.py(3.2), 'kontraktkurven:', PUR, 11, False)
    b += txt(Bx.px(1.3), Bx.py(1.8), 'samme fordeling av vare 1', PUR, 10, False)
    b += Bx.curve(lambda c: lvA - 10.0*math.sqrt(c), 0.2, 5.0, RED, 2.3)
    b += Bx.curve(lambda c: 20.0 - (lvB - 20.0*math.sqrt(5.0-c)), 0.05, 3.28, BLUE, 2.3)
    b += line(Bx.p(0.0, 19.0), Bx.p(3.8, 0.0), INK, 2.0)
    b += Bx.guides(*Eq, lab_x='1', lab_y='14')
    b += Bx.guides(*Wq, lab_x='3', lab_y='4')
    b += arrow(Bx.p(2.85, 4.8), Bx.p(1.2, 13.2), GRN, 2.0)
    b += dot(*Bx.p(*Wq), 'W', 10, 15)
    b += dot(*Bx.p(*Eq), 'E', 10, -8)
    b += txt(Bx.px(2.2), Bx.py(8.4), 'B kjøper 2 sekker,', GRN, 11, False)
    b += txt(Bx.px(2.2), Bx.py(6.9), 'betaler 10 enheter', GRN, 11, False)
    b += txt(Bx.px(1.9), Bx.py(11.2), 'helning –5', INK, 11, False)
    b += txt(Bx.px(4.45), Bx.py(6.6), 'A', RED, 13, False, True)
    b += txt(Bx.px(0.35), Bx.py(16.0), 'B', BLUE, 13, False, True)
    save('econ2220-8-4-bytteboks-kvasilinear', b, out)
    n += 1

    # ---------- 8.5 (1): kort sikt, nedleggingsgrense og dekningsbidrag ----------
    def MK5(y):
        return 8.0*y

    def GR5(y):
        return 4.0*y + 64.0/y
    ym5, gm5 = _minimum(GR5, 0.8, 10.0)
    krav(abs(ym5 - 4.0) < 0.01 and abs(gm5 - 32.0) < 0.02,
         '8-5: den relevante GK-kurven har minimum i (4, 32)')
    krav(abs(MK5(4.0) - GR5(4.0)) < 1e-9, '8-5: MK skjærer den relevante GK-kurven i minimum')
    krav(abs(MK5(5.0) - 40.0) < 1e-9, '8-5: p = 40 gir y* = 5')
    krav(abs(GR5(5.0) - 32.8) < 1e-9 and abs((40.0-GR5(5.0))*5.0 - 36.0) < 1e-9,
         '8-5: GK-rel(5) = 32,8 og dekningsbidraget er 36')
    S = Scale(10, 80)
    b = header('Kort sikt med sunk kost og nedleggingsgrense, øvingseksamen 3, oppgave '
               'to. Mengden y på den vannrette aksen, kroner per enhet på den loddrette. '
               'Marginalkostnaden er en rett, stigende linje gjennom origo. Den '
               'relevante gjennomsnittskostnaden, som teller variable kostnader pluss den '
               'gjenvinnbare tomteleia, er U-formet med minimum i mengde fire og nivå '
               'trettito, og marginalkostnadskurven skjærer den nøyaktig der. En stiplet '
               'vannrett linje ved trettito er merket nedleggingsgrense. Prislinja ved '
               'førti er vannrett og skjærer marginalkostnaden ved mengde fem, med en '
               'stiplet loddrett linje ned til aksen. Den relevante gjennomsnittskostnaden '
               'i mengde fem er trettito og åtte tideler. Rektangelet fra mengde null '
               'til fem, mellom trettito og åtte tideler og førti, er skravert '
               'og merket dekningsbidrag lik trettiseks.')
    b += axes('y', 'kr/enhet')
    b += poly([S.p(0, GR5(5.0)), S.p(5.0, GR5(5.0)), S.p(5.0, 40.0), S.p(0, 40.0)], GRN, 0.22)
    b += S.curve(MK5, 0.0, 10.0, BLUE, 2.6)
    b += S.curve(GR5, 0.85, 10.0, PUR, 2.6)
    b += txt(S.px(7.7), S.py(74.0), 'MK = 8y', BLUE, 12, True)
    b += txt(S.px(1.15), S.py(69.0), 'GK (variable +', PUR, 10.5, False)
    b += txt(S.px(1.15), S.py(63.0), 'gjenvinnbare faste)', PUR, 10.5, False)
    b += line(S.p(0, 32.0), S.p(9.5, 32.0), GREY, 1.6, '7 4')
    b += txt(S.px(5.8), S.py(27.0), 'nedleggingsgrense: p = 32', GREY, 11, False)
    b += line(S.p(0, 40.0), S.p(9.5, 40.0), INK, 2.0)
    b += txt(S.px(7.4), S.py(40.0)+13, 'p = 40', INK, 12, False)
    b += hdash(S.px(4.0), S.py(32.0))
    b += vdash(S.px(4.0), S.py(32.0))
    b += dot(*S.p(4.0, 32.0), '', 0, 0)
    b += txt(S.px(4.0)-56, S.py(32.0)-8, '(4, 32)', INK, 11, False)
    b += vdash(S.px(5.0), S.py(40.0))
    b += hdash(S.px(5.0), S.py(GR5(5.0)))
    b += dot(*S.p(5.0, 40.0), '', 0, 0)
    b += dot(*S.p(5.0, GR5(5.0)), '', 0, 0)
    b += sub(S.px(5.0)-8, OY+17, 'y', '*', GREY, 13)
    b += txt(S.px(5.0)-10, OY+31, '= 5', GREY, 12, False)
    b += txt(OX-30, S.py(40.0)+4, '40', GREY, 12, False)
    b += txt(OX-46, S.py(GR5(5.0))+14, '32,8', GREY, 11, False)
    b += txt(S.px(0.85), S.py(50.0), 'dekningsbidrag = 36', GRN, 12, False, True)
    save('econ2220-8-5-kortsikt-nedlegging', b, out)
    n += 1

    # ---------- 8.5 (2): PMK med MTB = MSB ----------
    P = (16.0, 12.0)
    Q = (18.0, math.sqrt(400.0 - 324.0))
    krav(abs(P[0]**2 + P[1]**2 - 400.0) < 1e-9 and abs(Q[0]**2 + Q[1]**2 - 400.0) < 1e-9,
         '8-5 PMK: P og Q ligger på kvartsirkelen med radius tjue')
    krav(abs(P[0]/P[1] - 4.0/3.0) < 1e-12, '8-5 PMK: MTB i P er 4/3, altså tangenthelning −4/3')
    krav(Q[0]/Q[1] > P[0]/P[1], '8-5 PMK: tangenten i Q er brattere enn i P')
    kk = 16.0/9.0                            # MSB = kk·c2/c1 = 4/3 i P
    krav(abs(kk*P[1]/P[0] - 4.0/3.0) < 1e-12,
         '8-5 PMK: indifferenskurven gjennom P har samme helning −4/3 der')
    lv = P[1]*P[0]**kk
    S = Scale(26, 26)
    b = header('Produksjonsmulighetskurve der marginal transformasjonsbrøk er lik '
               'marginal substitusjonsbrøk. Kvadratmeter skifer er på den vannrette aksen, '
               'kubikkmeter grus på den loddrette. Kurven er en konkav kvartsirkel fra '
               'null og tjue til tjue og null. En rett verdilinje med helning minus fire '
               'tredeler tangerer buen i punktet P med seksten kvadratmeter skifer og tolv '
               'kubikkmeter grus, med stiplede hjelpelinjer til seksten på den vannrette '
               'aksen og tolv på den loddrette. Konsumentens indifferenskurve er tegnet '
               'gjennom samme punkt og har samme helning der, slik at de to brøkene '
               'sammenfaller. I tillegg er det tegnet en brattere stiplet tangent i et '
               'annet punkt lenger til høyre på buen, merket at brøkene er ulike og at en '
               'Pareto-forbedring da er mulig.')
    b += axes('x1', 'x2')
    b += txt(OX+4, OY+40, 'x1 = kvadratmeter skifer   ·   x2 = kubikkmeter grus', GREY, 11, False)
    b += S.curve(lambda x: math.sqrt(max(0.0, 400.0-x*x)), 0.0, 20.0, GRN, 2.8)
    b += txt(S.px(1.5), S.py(17.2), 'PMK', GRN, 13, False, True)
    # verdilinje med helning -4/3 gjennom P — klippet til vindusrammen 26 x 26
    def klipp(k, s, xmax=26.0, ymax=26.0):
        """Endepunkter for linja c2 = k − s·c1 innenfor [0,xmax] x [0,ymax]."""
        start = (0.0, k) if k <= ymax else ((k-ymax)/s, ymax)
        slutt = (k/s, 0.0) if k/s <= xmax else (xmax, k - s*xmax)
        krav(0 <= start[0] <= xmax and 0 <= slutt[1] <= ymax,
             '8-5 PMK: linja er klippet innenfor vindusrammen')
        return start, slutt
    kP = P[1] + (4.0/3.0)*P[0]
    pa, pb = klipp(kP, 4.0/3.0)
    b += line(S.p(*pa), S.p(*pb), BLUE, 2.2)
    b += txt(S.px(7.4), S.py(25.2), 'verdilinje: helning –4/3', BLUE, 11, False)
    # indifferenskurve gjennom P
    b += S.curve(lambda c: lv/c**kk, 6.4, 26.0, RED, 2.4)
    b += txt(S.px(2.2), S.py(23.0), 'indifferenskurve', RED, 11, False)
    # brattere tangent i Q
    kQ = Q[1] + (Q[0]/Q[1])*Q[0]
    qa, qb = klipp(kQ, Q[0]/Q[1])
    b += line(S.p(*qa), S.p(*qb), ORG, 1.8, '6 4')
    b += hdash(S.px(P[0]), S.py(P[1]))
    b += vdash(S.px(P[0]), S.py(P[1]))
    b += dot(*S.p(*P), 'P', 9, -9)
    b += dot(*S.p(*Q), '', 0, 0)
    b += txt(S.px(P[0])-8, OY+17, '16', GREY, 12, False)
    b += txt(OX-26, S.py(P[1])+4, '12', GREY, 12, False)
    b += txt(S.px(17.6), S.py(9.0), 'MTB ≠ MSB her:', ORG, 11, False)
    b += txt(S.px(17.6), S.py(6.8), 'Pareto-forbedring mulig', ORG, 11, False)
    b += txt(S.px(2.0), S.py(5.2), 'I P: MTB = MSB = 4/3', INK, 11.5, False)
    save('econ2220-8-5-pmk-mtb-msb', b, out)
    n += 1

    return n


# =====================================================================
# DEL 1-3 — Konsumentteori: budsjett, tangering, Slutsky, beholdning
# (agent F1). Geometrien regnes ut fra Cobb-Douglas-etterspørselen og
# kontrolleres med krav() før SVG-en skrives.
# =====================================================================


def f1_lab(x, y, lab, color='#000', size=15, anchor=None):
    """Etikett som enten er ren tekst eller (hoveddel, subskript)."""
    if isinstance(lab, tuple):
        return sub(x, y, lab[0], lab[1], color, size, anchor=anchor)
    return txt(x, y, lab, color, size, True, anchor=anchor)


def f1_axes(xlab, ylab, xmax=XMAX, ytop=YTOP, xnote=None, ynote=None):
    """Akser med subskript-etiketter og valgfri enhetsnotis."""
    b = (f'  <line x1="{OX}" y1="{OY}" x2="{xmax}" y2="{OY}" stroke="{INK}" stroke-width="1.6"/>\n'
         f'  <line x1="{OX}" y1="{OY}" x2="{OX}" y2="{ytop}" stroke="{INK}" stroke-width="1.6"/>\n'
         f'  <polygon points="{xmax},{OY} {xmax-8},{OY-4} {xmax-8},{OY+4}" fill="{INK}"/>\n'
         f'  <polygon points="{OX},{ytop} {OX-4},{ytop+8} {OX+4},{ytop+8}" fill="{INK}"/>\n')
    b += f1_lab(xmax + 3, OY + 6, xlab)
    b += f1_lab(OX - 16, ytop - 5, ylab)
    if xnote:
        b += txt(xmax + 3, OY + 32, xnote, GREY, 10.5, False, anchor='end')
    if ynote:
        b += txt(OX + 8, ytop + 12, ynote, GREY, 10.5, False)
    return b


def f1_num(v, dec=0):
    """Norsk tallformat: mellomrom som tusenskille, komma som desimalskille."""
    s = f'{v:,.{dec}f}'.replace(',', ' ').replace('.', ',')
    return s


def f1_bline(S, xi, yi, col, w=2.4, dash=None):
    """Budsjettlinje gitt akse-avskjæringene (xi, 0) og (0, yi)."""
    return line(S.p(0.0, yi), S.p(xi, 0.0), col, w, dash)


def f1_pt(S, p, lab='', dx=8, dy=-8, guides=True, xlab=None, ylab=None,
          size=14, color=INK, gx=True, gy=True):
    """Punkt med stiplede hjelpelinjer til aksene og valgfrie aksetall."""
    b = ''
    if guides and gx:
        b += line(S.p(*p), (S.px(p[0]), OY), GREY, 1.1, '4 3')
    if guides and gy:
        b += line(S.p(*p), (OX, S.py(p[1])), GREY, 1.1, '4 3')
    b += dot(S.px(p[0]), S.py(p[1]), lab, dx, dy, size, color)
    if xlab is not None:
        b += txt(S.px(p[0]), OY + 16, xlab, GREY, 11, False, anchor='middle')
    if ylab is not None:
        b += txt(OX - 6, S.py(p[1]) + 4, ylab, GREY, 11, False, anchor='end')
    return b


def f1_cd(S, a, p, col=PUR, w=2.2, dash=None, x0=None, x1=None, n=170):
    """Indifferenskurve for u = c1^a c2^(1-a) gjennom punktet p."""
    lv = cd_level(a, p[0], p[1])
    f = cd_ic(lv, a)
    lo = x0 if x0 is not None else (lv / S.ymax**(1.0-a))**(1.0/a)*1.002 + 1e-9
    hi = x1 if x1 is not None else S.xmax
    if hi <= lo:
        return ''
    return S.curve(f, lo, hi, col, w, dash, n)


def f1_cd_arc(S, a, p, half, col=PUR, w=2.0, dash=None, n=40):
    """Kort bue av indifferenskurven rundt p (brukes når to kurver ligger tett)."""
    lv = cd_level(a, p[0], p[1])
    f = cd_ic(lv, a)
    return S.curve(f, max(p[0]-half, 1e-6), p[0]+half, col, w, dash, n)


def f1_tangent(S, p, slope, half, col=INK, w=1.5, dash='5 3'):
    """Tangentlinje med gitt (negativ) helning gjennom p, lengde 2*half i x."""
    x0, x1 = p[0]-half, p[0]+half
    return line(S.p(x0, p[1]+slope*(x0-p[0])), S.p(x1, p[1]+slope*(x1-p[0])),
                col, w, dash)


def f1_rotarrow(S, W, r=27, a0=-32, a1=-148, col=ORG, w=1.7):
    """Liten rotasjonsbue om beholdningspunktet W (piksler)."""
    cx, cy = S.p(*W)
    pts = []
    for i in range(25):
        t = math.radians(a0 + (a1-a0)*i/24.0)
        pts.append((cx + r*math.cos(t), cy + r*math.sin(t)))
    b = polyline(pts[:-1], col, w)
    b += arrow(pts[-2], pts[-1], col, w, None, 7)
    return b


def f1_xarrow(S, xa, xb, ypix, label, col, size=11, dy=13):
    """Vannrett dobbeltmarkert pil under x-aksen fra xa til xb."""
    b = arrow((S.px(xa), ypix), (S.px(xb), ypix), col, 1.5, None, 7)
    b += txt((S.px(xa)+S.px(xb))/2, ypix+dy, label, col, size, False, anchor='middle')
    return b


def f1_ybracket(S, y0, y1, xpix, label, col=INK, size=10.5, dx=6):
    """Loddrett klamme mellom y0 og y1 (dataverdier) med etikett."""
    ya, yb = S.py(y0), S.py(y1)
    b = line((xpix, ya), (xpix, yb), col, 1.4)
    b += line((xpix-4, ya), (xpix+4, ya), col, 1.4)
    b += line((xpix-4, yb), (xpix+4, yb), col, 1.4)
    b += txt(xpix+dx, (ya+yb)/2+4, label, col, size, False)
    return b


def f1_legend(S, x, y, lines, size=10, color=INK, dy=12.5):
    """Liten punktliste plassert ved datapunktet (x, y), linjer nedover."""
    b = ''
    for i, t in enumerate(lines):
        b += txt(S.px(x), S.py(y) + i*dy, t, color, size, False)
    return b


def f1_arrow_pts(S, p, q, lab, col, dx=0, dy=-7, size=11.5, w=1.8):
    """Pil mellom to datapunkter, med etikett ved midtpunktet."""
    b = arrow(S.p(*p), S.p(*q), col, w, None, 8)
    mx = (S.px(p[0])+S.px(q[0]))/2
    my = (S.py(p[1])+S.py(q[1]))/2
    b += txt(mx+dx, my+dy, lab, col, size, False, anchor='middle')
    return b


def f1_cd_check(a, p1, p2, c1, c2, navn):
    """Kontroll: MSB = p1/p2 i punktet (tangering), og punktet er CD-optimum."""
    krav(abs(cd_msb(a, c1, c2) - p1/p2) < 1e-9,
         f'{navn}: MSB {cd_msb(a, c1, c2)} != prisforhold {p1/p2}')


def f1_online(xi, yi, p, navn, tol=1e-7):
    """Kontroll: punktet p ligger på linja med akse-avskjæringene (xi,0),(0,yi)."""
    krav(abs(p[0]/xi + p[1]/yi - 1.0) < tol,
         f'{navn}: punktet {p} ligger ikke på linja ({xi}, {yi})')


# ------------------------------------------------------------- DEL 1
def f1_del1(out):
    n = 0

    # ---------- 1.1 Trappa og den glatte marginalkostnaden ----------
    # Fire produsenter à 4 tusen tonn med kostnad 1,2,3,4 kr/kg gir en trapp;
    # c(y) = y^2/8 + y/2 gir c'(y) = (y+2)/4 gjennom midtpunktet av hvert trinn.
    trinn = [(0, 4, 1), (4, 8, 2), (8, 12, 3), (12, 16, 4)]
    for (y0, y1, h) in trinn:
        mid = 0.5*(y0+y1)
        krav(abs((mid+2)/4.0 - h) < 1e-12,
             f'glatt MK treffer ikke midtpunktet av trinnet {y0}-{y1}')
    krav(abs((10+2)/4.0 - 3.0) < 1e-12, 'P = (10,3) ligger ikke på c\'(y)')
    S = Scale(20.0, 5.0)
    b = header('Marginalkostnad: en trapp med fire trinn i høydene 1, 2, 3 og 4 '
               'kroner per kilo over mengdeintervallene 0 til 4, 4 til 8, 8 til 12 '
               'og 12 til 16 tusen tonn, og en glatt, stigende rett linje som går '
               'gjennom midtpunktet av hvert trinn. En vannrett stiplet linje ved '
               'prisen 3 kroner treffer den glatte linja i punktet P ved 10 tusen '
               'tonn, og faller sammen med hele det tredje trinnet.')
    b += f1_axes(('y', ''), 'kr', xnote='tusen tonn', ynote='kroner per kilo')
    # skravert trinn ved p = 3 (der trappa er ubestemt)
    b += poly([S.p(8, 0), S.p(12, 0), S.p(12, 3), S.p(8, 3)], ORG, 0.14)
    # trappa
    pts = [S.p(0, trinn[0][2])]
    for (y0, y1, h) in trinn:
        pts.append(S.p(y0, h))
        pts.append(S.p(y1, h))
    pts.append(S.p(16, 0))
    b += polyline(pts, '#7a9cc0', 2.2)
    # glatt marginalkostnad c'(y) = (y+2)/4
    b += S.curve(lambda y: (y+2)/4.0, 0.0, 18.0, RED, 2.4)
    # prislinje p = 3
    b += line((OX, S.py(3.0)), (S.px(19.0), S.py(3.0)), GRN, 1.8, '7 4')
    b += txt(OX-8, S.py(3.0)+4, 'p = 3', GRN, 12, False, anchor='end')
    b += f1_pt(S, (10.0, 3.0), 'P', 8, -8, True, '10', None)
    b += txt(S.px(18.2), S.py((18.2+2)/4.0)-8, 'c′(y)', RED, 13, True, anchor='end')
    b += txt(S.px(5.0), S.py(1.35), 'trappa: ett trinn per produsent', '#4a6f92', 11, False)
    b += txt(S.px(8.2), S.py(3.0)+16, 'trappa er ubestemt her:', ORG, 10.5, False)
    b += txt(S.px(8.2), S.py(3.0)+28, 'alt mellom 8 og 12', ORG, 10.5, False)
    for x in (4, 8, 12, 16):
        b += txt(S.px(x), OY+16, str(x), GREY, 11, False, anchor='middle')
    for yv in (1, 2, 4):
        b += txt(OX-6, S.py(yv)+4, str(yv), GREY, 11, False, anchor='end')
    save('econ2220-1-1-trapp-til-glatt-mk', b, out)
    n += 1

    # ---------- 1.2 Indifferenskart og konveksitet ----------
    # u = sqrt(c1 c2): kurvene c1c2 = 16, 36, 64. A=(4,9), B=(9,4) paa u=6.
    a = 0.5
    A, B = (4.0, 9.0), (9.0, 4.0)
    M = (6.5, 6.5)
    krav(abs(cd_level(a, *A) - 6.0) < 1e-12 and abs(cd_level(a, *B) - 6.0) < 1e-12,
         'A og B ligger ikke paa nyttenivaa 6')
    krav(cd_level(a, *M) > 6.0, 'midtpunktet M maa ligge over kurven')
    S = Scale(14.0, 14.0)
    b = header('Indifferenskart med tre fallende, konvekse kurver som ikke krysser '
               'hverandre og som nærmer seg begge akser. Den midterste er merket '
               'nyttenivå 6 og går gjennom punktene A, som er fire enheter av vare '
               'én og ni av vare to, og B, som er ni av vare én og fire av vare to. '
               'Det rette linjestykket mellom A og B ligger over kurven, og '
               'midtpunktet M ligger tydelig over kurven, altså på en høyere '
               'indifferenskurve. En pil oppover mot høyre er merket høyere nytte.')
    b += f1_axes(('c', '1'), ('c', '2'))
    for lv, w in ((4.0, 1.8), (6.0, 2.8), (8.0, 1.8)):
        b += f1_cd(S, a, (lv, lv), PUR, w)
    b += txt(S.px(11.2), S.py(16.0/11.2)+16, 'ū = 4', PUR, 12, True)
    b += txt(S.px(8.9), S.py(36.0/8.9)-8, 'ū = 6', PUR, 13, True)
    b += txt(S.px(11.6), S.py(64.0/11.6)-8, 'ū = 8', PUR, 12, True)
    b += line(S.p(*A), S.p(*B), INK, 1.5, '5 3')
    b += f1_pt(S, A, 'A', -18, -8, True, '4', '9')
    b += f1_pt(S, B, 'B', 9, 16, True, '9', '4')
    b += f1_pt(S, M, 'M', 9, -9, True, '6,5', '6,5')
    b += f1_legend(S, 1.2, 2.6, ['M ligger over kurven:',
                                 'blandingen av A og B er bedre'], 10.5)
    b += arrow(S.p(10.8, 9.2), S.p(12.6, 11.4), GRN, 1.7)
    b += txt(S.px(10.0), S.py(11.9), 'høyere nytte', GRN, 11.5, False)
    save('econ2220-1-2-indifferenskurver-konveksitet', b, out)
    n += 1

    # ---------- 1.2 Avtakende marginal substitusjonsbrøk ----------
    a = 0.5
    P, Q = (6.0, 6.0), (12.0, 3.0)
    krav(abs(cd_level(a, *P) - cd_level(a, *Q)) < 1e-12, 'P og Q maa ligge paa samme kurve')
    krav(abs(cd_msb(a, *P) - 1.0) < 1e-12, 'MSB i P skal vaere 1')
    krav(abs(cd_msb(a, *Q) - 0.25) < 1e-12, 'MSB i Q skal vaere 0,25')
    S = Scale(16.0, 14.0)
    b = header('Én fallende, konveks indifferenskurve med to tangentlinjer. I '
               'punktet A, seks enheter av vare én og seks av vare to, er tangenten '
               'bratt med tallverdi én på helningen. I punktet B, tolv enheter av '
               'vare én og tre av vare to, er tangenten slak med tallverdi 0,25. '
               'Stiplede hjelpelinjer går fra begge punkter til begge akser.')
    b += f1_axes(('c', '1'), ('c', '2'))
    b += f1_cd(S, a, P, PUR, 2.6)
    b += f1_tangent(S, P, -1.0, 4.2, RED, 1.8, None)
    b += f1_tangent(S, Q, -0.25, 4.6, BLUE, 1.8, None)
    b += f1_pt(S, P, 'A', -20, -8, True, '6', '6')
    b += f1_pt(S, Q, 'B', 10, -10, True, '12', '3')
    b += txt(S.px(2.6), S.py(11.0), 'MSB = 1 i A', RED, 12, False)
    b += txt(S.px(2.6), S.py(10.1), 'bratt tangent', RED, 10.5, False)
    b += txt(S.px(11.0), S.py(6.2), 'MSB = 0,25 i B', BLUE, 12, False)
    b += txt(S.px(11.0), S.py(5.4), 'slak tangent', BLUE, 10.5, False)
    b += txt(S.px(1.6), S.py(1.4), 'tangenten blir slakere mot høyre', GREY, 10.5, False)
    save('econ2220-1-2-msb-avtakende', b, out)
    n += 1

    # ---------- 1.3 Tangering mot to punkter som krysser ----------
    # u = c1^{1/4} c2^{3/4}, 3c1 + 5c2 = 60  ->  E = (5, 9)
    a, p1, p2, m = 0.25, 3.0, 5.0, 60.0
    E = (a*m/p1, (1-a)*m/p2)
    krav(E == (5.0, 9.0), f'E skal vaere (5,9), ble {E}')
    f1_cd_check(a, p1, p2, *E, 'E i 1.3')
    G, H = (15.0, 3.0), (1.0, 11.4)
    xi, yi = m/p1, m/p2
    f1_online(xi, yi, G, 'G'); f1_online(xi, yi, H, 'H')
    krav(cd_level(a, *G) < cd_level(a, *E) and cd_level(a, *H) < cd_level(a, *E),
         'G og H maa ligge paa lavere nyttenivaa enn E')
    S = Scale(22.0, 14.0)
    b = header('Budsjettlinje fra tolv enheter av vare to på den loddrette aksen '
               'til tjue enheter av vare én på den vannrette, med helning minus tre '
               'femdeler. En konveks indifferenskurve tangerer linja i optimum E, '
               'fem enheter av vare én og ni av vare to, med stiplede hjelpelinjer '
               'til aksene. Punktene G til høyre og H til venstre ligger på linja, '
               'men på lavere indifferenskurver som krysser den, og piler langs '
               'linja peker fra G og H mot E.')
    b += f1_axes(('c', '1'), ('c', '2'))
    b += f1_bline(S, xi, yi, INK, 2.4)
    b += f1_cd(S, a, E, PUR, 2.6)
    b += f1_cd(S, a, G, PUR, 1.7, '6 4')
    b += f1_cd(S, a, H, PUR, 1.7, '6 4')
    b += f1_pt(S, E, 'E', 11, -12, True, '5', '9')
    b += f1_pt(S, G, 'G', 11, 16, False)
    b += f1_pt(S, H, 'H', 10, -9, False)
    b += arrow(S.p(13.6, 3.0+0.6*1.4), S.p(8.0, 9.0-0.6*3.0), GRN, 1.6, None, 7)
    b += arrow(S.p(2.6, 11.4-0.6*1.6), S.p(4.0, 9.0+0.6*1.0), GRN, 1.6, None, 7)
    b += txt(S.px(15.0), S.py(4.4), 'MSB < 3/5', PUR, 11, False)
    b += txt(S.px(2.9), S.py(13.2), 'MSB > 3/5', PUR, 11, False)
    b += txt(S.px(9.6), S.py(1.5), 'helning −3/5 = −p₁/p₂', INK, 11.5, False)
    b += txt(S.px(8.4), S.py(12.2), 'tangering: MSB = 3/5', GRN, 11.5, False)
    save('econ2220-1-3-tangering-lagrange', b, out)
    n += 1
    return n


# ------------------------------------------------------------- DEL 2
def f1_del2(out):
    n = 0

    # ---------- 2.1 Budsjettlinje med tangering ----------
    # m = 180, p1 = 3, p2 = 6, u = sqrt(c1 c2)  ->  E = (30, 15)
    a, p1, p2, m = 0.5, 3.0, 6.0, 180.0
    E = (a*m/p1, (1-a)*m/p2)
    krav(E == (30.0, 15.0), f'E skal vaere (30,15), ble {E}')
    f1_cd_check(a, p1, p2, *E, 'E i 2.1')
    xi, yi = m/p1, m/p2
    lav = (14.0, 200.0/14.0)                       # naabar, men lavere nytte
    hoy = cd_level(a, 20.0, 40.0)                  # uoppnaaelig kurve
    krav(max(x*(yi - (p1/p2)*x) for x in [i*0.01 for i in range(1, 6001)]) < 800.0,
         'den hoeye kurven maa ligge utenfor budsjettlinja')
    S = Scale(66.0, 34.0)
    b = header('Budsjettlinje fra tretti togbilletter på den loddrette aksen til '
               'seksti reservedeler på den vannrette, med lett skravert '
               'budsjettmengde under linja. Tre konvekse indifferenskurver: en '
               'lavere som krysser linja, en som tangerer i optimum E med tretti '
               'reservedeler og femten billetter, og en høyere som ligger helt '
               'utenfor budsjettmengden. Stiplede hjelpelinjer går fra E til begge '
               'akser.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='reservedeler', ynote='togbilletter')
    b += poly([S.p(0, 0), S.p(xi, 0), S.p(0, yi)], BLUE, 0.10)
    b += f1_bline(S, xi, yi, INK, 2.4)
    b += f1_cd(S, a, lav, PUR, 1.7, '6 4')
    b += f1_cd(S, a, E, PUR, 2.7)
    b += f1_cd(S, a, (20.0, 40.0), PUR, 1.7, '2 4')
    b += f1_pt(S, E, 'E', 10, -10, True, '30', '15')
    b += txt(S.px(24.0), S.py(4.2), 'budsjettmengden', '#2d5d86', 11, False)
    b += txt(S.px(44.0), S.py(21.0), 'uoppnåelig', PUR, 11, False)
    b += txt(S.px(6.0), S.py(9.6), 'lavere nytte', PUR, 11, False)
    b += txt(S.px(33.0), S.py(24.5), 'tangering: MSB = p₁/p₂ = 0,5', GRN, 11.5, False)
    b += txt(S.px(48.0), S.py(7.0), 'helning −0,5', INK, 11.5, False)
    save('econ2220-2-1-budsjett-tangering', b, out)
    n += 1

    # ---------- 2.1 Tre navngitte punkter (ett optimum, to ikke) ----------
    # 10c1 + 5c2 = 200; R = (8,24) er tangeringspunktet (MSB = 2), P og Q ikke.
    p1, p2, m = 10.0, 5.0, 200.0
    xi, yi = m/p1, m/p2
    R = (8.0, 24.0)
    kR = (p1/p2)*R[0]/R[1]               # a/(1-a) slik at MSB(R) = p1/p2
    aR = kR/(1.0 + kR)
    krav(abs(aR - 0.4) < 1e-12, f'a skal bli 0,4, ble {aR}')
    f1_cd_check(aR, p1, p2, *R, 'R i 2.1')
    P, Q = (5.0, 30.0), (12.0, 16.0)
    for nm, pt in (('P', P), ('Q', Q), ('R', R)):
        f1_online(xi, yi, pt, nm)
    krav(abs(cd_msb(aR, *P) - 4.0) < 1e-9, 'MSB i P skal vaere 4')
    krav(cd_msb(aR, *Q) < p1/p2, 'MSB i Q maa vaere mindre enn prisforholdet')
    krav(cd_level(aR, *P) < cd_level(aR, *R) and cd_level(aR, *Q) < cd_level(aR, *R),
         'P og Q maa ligge paa lavere nyttenivaa enn R')
    S = Scale(22.0, 44.0)
    b = header('Budsjettlinje fra førti enheter av vare to på den loddrette aksen '
               'til tjue enheter av vare én på den vannrette, med helning minus to. '
               'Tre punkter ligger på linja: P til venstre med en indifferenskurve '
               'som krysser brattere, R i midten med en indifferenskurve som '
               'tangerer, og Q til høyre med en indifferenskurve som krysser '
               'slakere. Piler langs linja går fra P mot høyre og fra Q mot '
               'venstre, begge mot R. Stiplede hjelpelinjer går fra alle tre '
               'punktene til aksene.')
    b += f1_axes(('c', '1'), ('c', '2'))
    b += f1_bline(S, xi, yi, INK, 2.4)
    b += f1_cd_arc(S, aR, P, 4.0, PUR, 2.0, '6 4')
    b += f1_cd(S, aR, R, PUR, 2.7)
    b += f1_cd_arc(S, aR, Q, 5.0, PUR, 2.0, '6 4')
    b += f1_pt(S, P, 'P', -22, -6, True, '5', '30')
    b += f1_pt(S, R, 'R', 11, -11, True, '8', '24')
    b += f1_pt(S, Q, 'Q', 12, 18, True, '12', '16')
    b += arrow(S.p(6.1, yi-(p1/p2)*6.1), S.p(7.1, yi-(p1/p2)*7.1), GRN, 1.7, None, 7)
    b += arrow(S.p(10.9, yi-(p1/p2)*10.9), S.p(9.1, yi-(p1/p2)*9.1), GRN, 1.7, None, 7)
    b += txt(S.px(1.4), S.py(41.5), 'i P: MSB = 4 > 2 — kjøp mer av vare 1', PUR, 10.5, False)
    b += txt(S.px(12.4), S.py(11.0), 'i Q: MSB < 2 — kjøp mindre', PUR, 10.5, False)
    b += f1_legend(S, 10.6, 33.0, ['R: MSB = 2 = p₁/p₂', 'altså optimum'], 11.5, GRN, 14.0)
    save('econ2220-2-1-ikke-optimale-punkter', b, out)
    n += 1

    # ---------- 2.2 Engel-kurven ----------
    # c1 = 0,35 m / 45. Punkter ved m = 8 000 og m = 12 000.
    a, p1 = 0.35, 45.0
    hell = a/p1
    m1, m2 = 8000.0, 12000.0
    c1a, c1b = hell*m1, hell*m2
    krav(abs(c1a - 62.222222) < 1e-4 and abs(c1b - 93.333333) < 1e-4,
         f'Engel-punktene ble {c1a}, {c1b}')
    krav(abs(hell*2*m1 - 2*c1a) < 1e-9, 'linja gjennom origo maa gi dobling ved dobling')
    S = Scale(14000.0, 110.0)
    b = header('Engel-kurven for togbilletter: inntekt i kroner langs den vannrette '
               'aksen og antall billetter langs den loddrette. En rett linje gjennom '
               'origo stiger med brøken 0,35 delt på 45. Ved inntekt åtte tusen '
               'kroner leses 62,2 billetter av, ved tolv tusen kroner 93,3 '
               'billetter, begge markert med stiplede hjelpelinjer.')
    b += f1_axes(('m', ''), ('c', '1'), xnote='kroner per måned', ynote='togbilletter')
    b += line(S.p(0.0, 0.0), S.p(13600.0, hell*13600.0), BLUE, 2.6)
    b += f1_pt(S, (m1, c1a), '', 0, 0, True, '8 000', '62,2')
    b += f1_pt(S, (m2, c1b), '', 0, 0, True, '12 000', '93,3')
    b += txt(S.px(9700.0), S.py(hell*9700.0)-10, 'Engel-kurven', BLUE, 12.5, False)
    b += txt(S.px(500.0), S.py(106.0), '∂c₁/∂m = a/p₁ = 0,35/45 ≈ 0,0078 > 0', INK, 11, False)
    b += f1_legend(S, 500.0, 98.0,
                   ['billetter per ekstra krone', '— altså et normalt gode.',
                    'Linja går gjennom origo:', 'budsjettandelen står stille.'],
                   10, GREY, 12.0)
    save('econ2220-2-2-engelkurve-normalitet', b, out)
    n += 1

    # ---------- 2.2 Krysspriseffekten er null ----------
    # u = sqrt(c1c2), m = 2000, p1 = 10, p2 = 20 -> 40
    a, p1, p2, p2b, m = 0.5, 10.0, 20.0, 40.0, 2000.0
    E = (a*m/p1, (1-a)*m/p2)
    Eb = (a*m/p1, (1-a)*m/p2b)
    krav(E == (100.0, 50.0) and Eb == (100.0, 25.0), f'E, E′ ble {E}, {Eb}')
    f1_cd_check(a, p1, p2, *E, 'E i 2.2')
    f1_cd_check(a, p1, p2b, *Eb, 'E-strek i 2.2')
    S = Scale(220.0, 110.0)
    b = header('To budsjettlinjer med felles skjæring ved to hundre enheter av vare '
               'én på den vannrette aksen. Den gamle skjærer den loddrette aksen ved '
               'hundre enheter av vare to, den nye ved femti etter at prisen på vare '
               'to er doblet. Tangeringspunktene E og E-strek ligger loddrett over '
               'hverandre ved hundre enheter av vare én, forbundet med en stiplet '
               'loddrett linje merket at konsumet av vare én er uendret.')
    b += f1_axes(('c', '1'), ('c', '2'))
    b += f1_bline(S, m/p1, m/p2, GREY, 2.2, '6 4')
    b += f1_bline(S, m/p1, m/p2b, RED, 2.4)
    b += f1_cd(S, a, E, PUR, 2.2)
    b += f1_cd(S, a, Eb, PUR, 2.0, '5 3')
    b += line(S.p(*Eb), S.p(*E), INK, 1.6, '4 3')
    b += f1_pt(S, E, 'E', 10, -10, True, '100', '50')
    b += f1_pt(S, Eb, 'E′', 10, 16, True, None, '25')
    b += txt(OX-6, S.py(100.0)+4, '100', GREY, 11, False, anchor='end')
    b += txt(S.px(200.0), OY+16, '200', GREY, 11, False, anchor='middle')
    b += txt(S.px(105.0), S.py(38.0), 'c₁ uendret', INK, 11.5, False)
    b += txt(S.px(126.0), S.py(66.0), 'gammel linje', GREY, 11, False)
    b += txt(S.px(14.0), S.py(27.0), 'ny linje (p₂ doblet)', RED, 11, False)
    b += f1_legend(S, 6.0, 13.0,
                   ['m/p₁ = 200 er uendret (p₁ står stille),',
                    'mens m/p₂ faller fra 100 til 50 når p₂ dobles'], 10, GREY, 12.0)
    save('econ2220-2-2-krysspris-uavhengighet', b, out)
    n += 1

    # ---------- 2.3 Slutsky A -> B -> C ----------
    # m = 1200, p1: 2 -> 3, p2 = 5, u = sqrt(c1c2). Maalt i enheter av vare 2.
    a, m, p1, p1b, p2 = 0.5, 1200.0, 2.0, 3.0, 5.0
    A = (a*m/p1, (1-a)*m/p2)
    C = (a*m/p1b, (1-a)*m/p2)
    ms = p1b*A[0] + p2*A[1]
    B = (a*ms/p1b, (1-a)*ms/p2)
    krav(A == (300.0, 120.0) and B == (250.0, 150.0) and C == (200.0, 120.0),
         f'A, B, C ble {A}, {B}, {C}')
    krav(abs(ms - 1500.0) < 1e-9, f'kompensert inntekt ble {ms}')
    for nm, pt, pp, mm in (('A', A, p1, m), ('B', B, p1b, ms), ('C', C, p1b, m)):
        f1_cd_check(a, pp, p2, *pt, nm + ' i 2.3')
        f1_online(mm/pp, mm/p2, pt, nm + ' i 2.3')
    krav(cd_level(a, *B) > cd_level(a, *A) > cd_level(a, *C),
         'nyttenivaaene skal vaere B > A > C med Slutsky-kompensasjon')
    S = Scale(660.0, 330.0)
    b = header('Slutsky-dekomponering. Den opprinnelige budsjettlinja tangerer en '
               'indifferenskurve i A, tre hundre kilowattimer og hundre og tjue '
               'enheter annet konsum. Den nye, brattere linja har samme skjæring på '
               'den loddrette aksen og tangerer en lavere kurve i C, to hundre '
               'kilowattimer. Den stiplede kompenserte linja er parallell med den '
               'nye og går gjennom A; den tangerer i B, to hundre og femti '
               'kilowattimer. Piler under den vannrette aksen viser '
               'substitusjonseffekten fra tre hundre til to hundre og femti og '
               'inntektseffekten fra to hundre og femti til to hundre.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='kilowattimer', ynote='alt annet')
    b += f1_bline(S, m/p1, m/p2, GREY, 2.2, '6 4')
    b += f1_bline(S, ms/p1b, ms/p2, INK, 1.7, '2 3')
    b += f1_bline(S, m/p1b, m/p2, RED, 2.4)
    b += f1_cd(S, a, C, PUR, 1.8)
    b += f1_cd(S, a, A, PUR, 2.6)
    b += f1_cd_arc(S, a, B, 130.0, PUR, 1.9, '5 3')
    b += f1_pt(S, A, 'A', 10, -10, True, '300', '120')
    b += f1_pt(S, B, 'B', -8, -14, True, '250', '150')
    b += f1_pt(S, C, 'C', -22, -10, True, '200', None)
    b += f1_xarrow(S, A[0], B[0], OY+30, 'SE = −50 kWh', GRN)
    b += f1_xarrow(S, B[0], C[0], OY+56, 'IE = −50 kWh', BLUE)
    b += txt(S.px(452.0), S.py(76.0), 'gammel linje', GREY, 11, False)
    b += txt(S.px(352.0), S.py(38.0), 'kompensert linje (m° = 300)', INK, 10.5, False)
    b += txt(S.px(196.0), S.py(96.0), 'ny linje', RED, 11, False)
    save('econ2220-2-3-slutsky-abc', b, out)
    n += 1

    # ---------- 2.3 Selve kompensasjonen ----------
    S = Scale(660.0, 330.0)
    b = header('Konstruksjonen av den kompenserte budsjettlinja. Den opprinnelige '
               'linja går gjennom punktet A. Den kompenserte linja er brattere, '
               'stiplet, og trukket gjennom nøyaktig samme punkt A. Skjæringene på '
               'den loddrette aksen er merket inntekten delt på prisen på vare to og '
               'den kompenserte inntekten delt på samme pris, med en klamme mellom '
               'dem merket kompensasjonen: prisøkningen ganget med det opprinnelige '
               'konsumet av vare én. Figuren viser bare konstruksjonen, uten '
               'indifferenskurver.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='kilowattimer', ynote='alt annet')
    b += f1_bline(S, m/p1, m/p2, GREY, 2.4, '6 4')
    b += f1_bline(S, ms/p1b, ms/p2, INK, 2.0, '2 3')
    b += f1_pt(S, A, 'A', 12, -10, True, '300', None)
    b += f1_ybracket(S, m/p2, ms/p2, OX+16, '', ORG, 10.5, 0)
    b += f1_legend(S, 122.0, 296.0,
                   ['kompensasjonen:', 'Δp₁ · c₁ = 1 · 300 = 300 kr',
                    '= 60 enheter av vare 2'], 10.5, ORG, 12.0)
    b += txt(OX-6, S.py(m/p2)+4, '240', GREY, 11, False, anchor='end')
    b += txt(OX-6, S.py(ms/p2)+4, '300', GREY, 11, False, anchor='end')
    b += txt(S.px(430.0), S.py(105.0), 'opprinnelig linje', GREY, 11, False)
    b += txt(S.px(330.0), S.py(215.0), 'kompensert linje:', INK, 11, False)
    b += txt(S.px(330.0), S.py(196.0), 'ny helning, gjennom A', INK, 11, False)
    b += txt(S.px(28.0), S.py(24.0), 'de nye, overkommelige kurvene ligger til venstre for A', GREY, 10.5, False)
    save('econ2220-2-3-slutsky-kompensasjon', b, out)
    n += 1

    # ---------- 2.4 Prissubsidie mot kontantstøtte ----------
    # u = sqrt(c1c2), m = 800, p1 = 40 -> 10 (subsidie), p2 = 10, T = 1200.
    a, m, p1, p1s, p2, T = 0.5, 800.0, 40.0, 10.0, 10.0, 1200.0
    U = (a*m/p1, (1-a)*m/p2)                       # uten tiltak
    Sp = (a*m/p1s, (1-a)*m/p2)                     # med subsidie
    K = (a*(m+T)/p1, (1-a)*(m+T)/p2)               # med kontantstøtte
    krav(U == (10.0, 40.0) and Sp == (40.0, 40.0) and K == (25.0, 100.0),
         f'punktene ble {U}, {Sp}, {K}')
    krav(abs((p1-p1s)*Sp[0] - T) < 1e-9, 'utlegget skal vaere likt for de to tiltakene')
    krav(abs(p1*Sp[0] + p2*Sp[1] - (m+T)) < 1e-9,
         'kontantstøttelinja skal gaa gjennom det subsidierte punktet')
    f1_cd_check(a, p1s, p2, *Sp, 'S i 2.4')
    f1_cd_check(a, p1, p2, *K, 'K i 2.4')
    krav(cd_level(a, *K) > cd_level(a, *Sp), 'K maa ligge paa hoeyere nyttenivaa enn S')
    S = Scale(88.0, 215.0)
    b = header('Tre budsjettlinjer i samme diagram. Den opprinnelige er bratt, med '
               'helning minus fire, og har tilpasningen uten tiltak ved ti '
               'kilowattimer. Subsidielinja har samme skjæring på den loddrette '
               'aksen, er slak med helning minus én, og tangerer en '
               'indifferenskurve i S med førti kilowattimer og førti enheter annet '
               'konsum. Kontantstøttelinja er parallell med den opprinnelige og går '
               'gjennom S, men indifferenskurven gjennom S skjærer den. Langs '
               'kontantstøttelinja finnes et høyere tangeringspunkt K med '
               'tjuefem kilowattimer og hundre enheter annet konsum, og en pil går '
               'fra S til K.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='kilowattimer', ynote='alt annet')
    b += f1_bline(S, m/p1, m/p2, GREY, 2.2, '6 4')
    b += f1_bline(S, m/p1s, m/p2, BLUE, 2.4)
    b += f1_bline(S, (m+T)/p1, (m+T)/p2, RED, 2.4)
    b += f1_cd(S, a, Sp, PUR, 2.6)
    b += f1_cd(S, a, K, PUR, 2.0, '5 3')
    b += f1_pt(S, U, '', 0, 0, False)
    b += txt(S.px(11.5), S.py(46.0), 'uten tiltak', GREY, 10.5, False)
    b += f1_pt(S, Sp, 'S', 11, 16, True, '40', '40')
    b += f1_pt(S, K, 'K', 11, -10, True, '25', '100')
    b += f1_arrow_pts(S, Sp, K, '', GRN, 0, 0, 11, 2.0)
    b += txt(S.px(15.0), S.py(70.0), 'høyere nytte', GRN, 11, False)
    b += txt(S.px(56.0), S.py(11.0), 'subsidielinje (helning −1)', BLUE, 10.5, False)
    b += txt(S.px(31.0), S.py(163.0), 'kontantstøtte:', RED, 11, False)
    b += txt(S.px(31.0), S.py(149.0), 'helning −4 gjennom S', RED, 11, False)
    b += f1_legend(S, 50.0, 118.0,
                   ['kurven gjennom S tangerer', 'subsidielinja, men skjærer',
                    'kontantstøttelinja'], 10)
    save('econ2220-2-4-subsidie-mot-kontantstotte', b, out)
    n += 1
    return n


# ------------------------------------------------------------- DEL 3
def f1_del3(out):
    n = 0

    # ================= 3.1 Beholdningsbudsjettet =================
    # omega = (200, 150), p1 = 6, p2 = 4 -> m = 1800; avskjaeringer 300 og 450.
    p1, p2, W = 6.0, 4.0, (200.0, 150.0)
    m = p1*W[0] + p2*W[1]
    xi, yi = m/p1, m/p2
    krav((xi, yi) == (300.0, 450.0), f'avskjaeringene ble {(xi, yi)}')
    f1_online(xi, yi, W, 'W i 3.1')
    S = Scale(330.0, 620.0)

    b = header('Beholdningsbudsjettet. Budsjettlinja går fra 450 kilo poteter på den '
               'loddrette aksen til 300 kilo gulrøtter på den vannrette, med helning '
               'minus 1,5. Beholdningspunktet W, to hundre kilo gulrøtter og hundre '
               'og femti kilo poteter, ligger på linja og er markert med stiplede '
               'hjelpelinjer til begge akser. Delen av linja til venstre for W er '
               'merket at hun selger vare én, delen til høyre at hun kjøper vare én.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='gulrøtter, kg', ynote='poteter, kg')
    b += f1_bline(S, xi, yi, INK, 2.6)
    b += f1_pt(S, W, 'W', -24, 18, True, '200', '150')
    b += arrow(S.p(170.0, yi-1.5*170.0+22.0), S.p(90.0, yi-1.5*90.0+22.0), GRN, 1.6, None, 7)
    b += txt(S.px(96.0), S.py(yi-1.5*130.0+52.0), 'selger vare 1', GRN, 11.5, False)
    b += arrow(S.p(232.0, yi-1.5*232.0+18.0), S.p(287.0, yi-1.5*287.0+18.0), RED, 1.6, None, 7)
    b += txt(S.px(228.0), S.py(yi-1.5*262.0+60.0), 'kjøper vare 1', RED, 11.5, False)
    b += txt(S.px(150.0), S.py(430.0), 'helning −p₁/p₂ = −1,5', INK, 11.5, False)
    b += txt(S.px(150.0), S.py(400.0), 'linja går alltid gjennom W', GREY, 10.5, False)
    save('econ2220-3-1-beholdningsbudsjett', b, out)
    n += 1

    # ---------- 3.1 Rotasjon om W ----------
    p1b = 8.0
    mb = p1b*W[0] + p2*W[1]
    xib, yib = mb/p1b, mb/p2
    krav((xib, yib) == (275.0, 550.0), f'nye avskjaeringer ble {(xib, yib)}')
    f1_online(xib, yib, W, 'W paa ny linje')
    b = header('To budsjettlinjer gjennom det samme beholdningspunktet W. Den gamle '
               'går fra 450 kilo poteter til 300 kilo gulrøtter, med helning minus '
               '1,5. Den nye går fra 550 kilo poteter til 275 kilo gulrøtter, med '
               'helning minus to. Begge krysser hverandre i W, hvor en '
               'rotasjonspil er tegnet. Den nye linja ligger over den gamle til '
               'venstre for W og under den til høyre.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='gulrøtter, kg', ynote='poteter, kg')
    b += f1_bline(S, xi, yi, GREY, 2.2, '6 4')
    b += f1_bline(S, xib, yib, RED, 2.6)
    b += f1_pt(S, W, 'W', -24, 19, True, '200', '150')
    b += f1_rotarrow(S, W, 30, -18, -150)
    b += txt(S.px(36.0), S.py(516.0), 'ny linje: helning −2', RED, 11.5, False)
    b += txt(S.px(150.0), S.py(414.0), 'gammel linje: helning −1,5', GREY, 11, False)
    b += txt(S.px(222.0), S.py(122.0), 'rotasjon om W', ORG, 11, False)
    b += f1_legend(S, 12.0, 250.0, ['ny linje over den gamle',
                                    'til venstre for W —',
                                    'under den til høyre'], 10.5, GREY)
    save('econ2220-3-1-rotasjon', b, out)
    n += 1

    # ---------- 3.1 Optimum for netto selger ----------
    a = 0.4
    E = (a*m/p1, (1-a)*m/p2)
    krav(E == (120.0, 270.0), f'E ble {E}')
    f1_cd_check(a, p1, p2, *E, 'E i 3.1')
    krav(E[0] < W[0], 'E maa ligge til venstre for W for en netto selger')
    b = header('Budsjettlinja fra 450 kilo poteter til 300 kilo gulrøtter med '
               'beholdningspunktet W ved to hundre kilo gulrøtter og hundre og femti '
               'kilo poteter. Optimum E ligger oppe til venstre for W, ved hundre og '
               'tjue kilo gulrøtter og to hundre og sytti kilo poteter, der en '
               'konveks indifferenskurve tangerer linja. Stiplede hjelpelinjer går '
               'fra E til begge akser, og en dobbeltpil langs den vannrette aksen '
               'fra hundre og tjue til to hundre er merket at hun selger åtti kilo.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='gulrøtter, kg', ynote='poteter, kg')
    b += f1_bline(S, xi, yi, INK, 2.4)
    b += f1_cd(S, a, E, PUR, 2.6)
    b += f1_pt(S, W, 'W', 13, 19, True, '200', '150')
    b += f1_pt(S, E, 'E', -22, -11, True, '120', '270')
    b += dblarrow((S.px(E[0]), OY+26), (S.px(W[0]), OY+26), GRN, 1.5, 7)
    b += txt(0.5*(S.px(E[0])+S.px(W[0])), OY+42, 'selger 80 kg', GRN, 11, False, anchor='middle')
    b += txt(S.px(150.0), S.py(392.0), 'tangering: MSB = 1,5', GRN, 11.5, False)
    b += txt(S.px(150.0), S.py(362.0), 'netto selger: E ligger venstre for W', GREY, 10.5, False)
    save('econ2220-3-1-optimum-nettoselger', b, out)
    n += 1

    # ================= 3.2 Slutsky med beholdning =================
    # omega = (60, 20), p1: 20 -> 25, p2 = 10, a = 0,5. Maalt i enheter av vare 2.
    a, p2 = 0.5, 10.0
    W2 = (60.0, 20.0)
    p1, p1b = 20.0, 25.0
    m = (p1*W2[0] + p2*W2[1])/p2          # inntekt maalt i enheter av vare 2
    mb = (p1b*W2[0] + p2*W2[1])/p2
    r0, r1 = p1/p2, p1b/p2
    krav((m, mb) == (140.0, 170.0), f'inntektene ble {(m, mb)}')
    A = (a*m/r0, (1-a)*m)
    C = (a*mb/r1, (1-a)*mb)
    ms = r1*A[0] + A[1]
    B = (a*ms/r1, (1-a)*ms)
    Bp = (a*m/r1, (1-a)*m)                 # ordinaer inntektseffekt: gammel pengeinntekt
    krav(A == (35.0, 70.0) and C == (34.0, 85.0), f'A, C ble {A}, {C}')
    krav(B == (31.5, 78.75), f'B ble {B}')
    krav(Bp == (28.0, 70.0), f'B-strek ble {Bp}')
    krav(abs(ms - 157.5) < 1e-9, f'kompensert inntekt ble {ms}')
    for nm, pt, rr, mm in (('A', A, r0, m), ('B', B, r1, ms), ('C', C, r1, mb), ("B′", Bp, r1, m)):
        f1_cd_check(a, rr, 1.0, *pt, nm + ' i 3.2')
        f1_online(mm/rr, mm, pt, nm + ' i 3.2')
    f1_online(m/r0, m, W2, 'W paa gammel linje 3.2')
    f1_online(mb/r1, mb, W2, 'W paa ny linje 3.2')
    krav(abs((B[0]-A[0]) + (Bp[0]-B[0]) + (C[0]-Bp[0]) - (C[0]-A[0])) < 1e-9,
         'de tre effektene summerer ikke til totalendringen')
    S = Scale(76.0, 185.0)

    b = header('Slutsky-dekomponering med beholdning. Den gamle budsjettlinja går '
               'fra 140 enheter annet konsum til sytti kilo lammekjøtt, den nye fra '
               '170 til 68 kilo, og begge går gjennom beholdningspunktet W ved seksti '
               'kilo og tjue enheter, hvor linja roterer. Den stiplede kompenserte '
               'linja har den nye helningen og går gjennom det gamle punktet A ved '
               'trettifem kilo. Punktet B ligger ved 31,5 kilo på den kompenserte '
               'linja og C ved trettifire kilo på den nye. Piler viser '
               'substitusjonseffekten fra A til B og de to inntektseffektene samlet '
               'fra B til C.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='lammekjøtt, kg', ynote='alt annet')
    b += f1_bline(S, m/r0, m, GREY, 2.2, '6 4')
    b += f1_bline(S, ms/r1, ms, INK, 1.7, '2 3')
    b += f1_bline(S, mb/r1, mb, RED, 2.4)
    b += f1_cd(S, a, A, PUR, 2.4)
    b += f1_cd(S, a, C, PUR, 2.0)
    b += f1_cd_arc(S, a, B, 9.0, PUR, 1.8, '5 3')
    b += f1_pt(S, W2, 'W', 12, 17, True, '60', '20')
    b += f1_pt(S, A, 'A', -9, 19, True, '35', '70')
    b += f1_pt(S, B, 'B', -21, -9, True, None, None)
    b += f1_pt(S, C, 'C', 10, -10, True, None, '85')
    b += f1_rotarrow(S, W2, 26, -22, -138)
    b += f1_xarrow(S, A[0], B[0], OY+30, 'SE = −3,5 kg', GRN)
    b += f1_xarrow(S, B[0], C[0], OY+56, 'IE samlet = +2,5 kg', BLUE)
    b += txt(S.px(5.0), S.py(176.0), 'ny linje (p₁ opp): helning −2,5', RED, 11, False)
    b += txt(S.px(8.0), S.py(46.0), 'kompensert linje (m° = 157,5)', INK, 10, False)
    b += txt(S.px(46.0), S.py(62.0), 'gammel linje', GREY, 10.5, False)
    b += f1_legend(S, 3.0, 30.0, ['A = (35; 70)', 'B = (31,5; 78,75)',
                                 'C = (34; 85)'], 10)
    save('econ2220-3-2-slutsky-beholdning', b, out)
    n += 1

    # ---------- 3.2 De to inntektseffektene hver for seg ----------
    b = header('Samme fire linjer som i Slutsky-figuren, men uten indifferenskurver: '
               'gammel linje, ny linje gjennom beholdningspunktet W, den stiplede '
               'kompenserte linja gjennom A, og en tynn hjelpelinje med den nye '
               'helningen og den gamle pengeinntekten. Punktene A ved trettifem kilo, '
               'B ved 31,5 kilo, B-strek ved tjueåtte kilo på hjelpelinja og C ved '
               'trettifire kilo. Pilen fra B til B-strek er merket ordinær '
               'inntektseffekt minus 3,5 kilo, og pilen fra B-strek til C er merket '
               'beholdnings-inntektseffekt pluss seks kilo.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='lammekjøtt, kg', ynote='alt annet')
    b += f1_bline(S, m/r0, m, GREY, 2.0, '6 4')
    b += f1_bline(S, ms/r1, ms, INK, 1.6, '2 3')
    b += f1_bline(S, m/r1, m, '#8a8a8a', 1.3, '1 3')
    b += f1_bline(S, mb/r1, mb, RED, 2.2)
    b += f1_pt(S, W2, 'W', 12, 19, True, '60', '20')
    b += f1_pt(S, A, 'A', -9, 19, True, None, None)
    b += f1_pt(S, B, 'B', -20, -9, True, None, None)
    b += f1_pt(S, Bp, 'B′', -25, -9, True, None, '70')
    b += f1_pt(S, C, 'C', 10, -10, True, None, '85')
    b += f1_xarrow(S, B[0], Bp[0], OY+30, 'ordinær IE = −3,5 kg', BLUE)
    b += f1_xarrow(S, Bp[0], C[0], OY+56, 'beholdnings-IE = +6 kg', GRN)
    b += txt(S.px(13.0), S.py(172.0), 'ny linje: helning −2,5 gjennom W', RED, 10.5, False)
    b += txt(S.px(13.0), S.py(151.0), 'kompensert linje (m° = 157,5)', INK, 10, False)
    b += txt(S.px(38.0), S.py(116.0), 'hjelpelinje: ny helning,', '#6f6f6f', 10, False)
    b += txt(S.px(38.0), S.py(106.0), 'gammel pengeinntekt 140', '#6f6f6f', 10, False)
    b += f1_legend(S, 2.0, 52.0, ['A = (35; 70)', 'B = (31,5; 78,75)',
                                  'B′ = (28; 70)', 'C = (34; 85)'], 10)
    save('econ2220-3-2-to-inntektseffekter', b, out)
    n += 1

    # ---------- 3.2 Kontrast: netto kjøper ----------
    W3 = (10.0, 190.0)
    mk = r0*W3[0] + W3[1]
    mkb = r1*W3[0] + W3[1]
    krav((mk, mkb) == (210.0, 215.0), f'inntektene ble {(mk, mkb)}')
    Ak = (a*mk/r0, (1-a)*mk)
    Ck = (a*mkb/r1, (1-a)*mkb)
    krav(Ak == (52.5, 105.0) and Ck == (43.0, 107.5), f'A, C ble {Ak}, {Ck}')
    f1_cd_check(a, r0, 1.0, *Ak, 'A i nettokjoeper')
    f1_cd_check(a, r1, 1.0, *Ck, 'C i nettokjoeper')
    krav(Ak[0] > W3[0] and cd_level(a, *Ck) < cd_level(a, *Ak),
         'netto kjøper: A til høyre for W, og C paa lavere nyttenivaa')
    S = Scale(115.0, 230.0)
    b = header('Kontrastfigur for en netto kjøper. Beholdningspunktet W ligger høyt '
               'oppe til venstre, ved ti kilo lammekjøtt og 190 enheter annet '
               'konsum. Den gamle budsjettlinja gjennom W har helning minus to og '
               'den nye minus 2,5; de roterer om W. Optimum A ligger til høyre for W '
               'ved 52,5 kilo, og det nye optimum C ved førtitre kilo på en lavere '
               'indifferenskurve. Området til høyre for W, der hun tilpasser seg, er '
               'skyggelagt, og der ligger den nye linja under den gamle.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='lammekjøtt, kg', ynote='alt annet')
    b += poly([S.p(*W3), S.p(mkb/r1, 0.0), S.p(mk/r0, 0.0)], ORG, 0.16)
    b += f1_bline(S, mk/r0, mk, GREY, 2.2, '6 4')
    b += f1_bline(S, mkb/r1, mkb, RED, 2.4)
    b += f1_cd(S, a, Ak, PUR, 2.4)
    b += f1_cd(S, a, Ck, PUR, 2.0, '5 3')
    b += f1_pt(S, W3, 'W', 11, -10, True, '10', '190')
    b += f1_pt(S, Ak, 'A', 12, 15, True, '52,5', '105')
    b += f1_pt(S, Ck, 'C', -22, -10, True, '43', None)
    b += f1_rotarrow(S, W3, 26, 20, 140)
    b += txt(S.px(56.0), S.py(64.0), 'her tilpasser hun seg —', ORG, 10.5, False)
    b += txt(S.px(56.0), S.py(52.0), 'ny linje ligger under', ORG, 10.5, False)
    b += txt(S.px(30.0), S.py(206.0), 'netto kjøper: A til høyre for W', GREY, 10.5, False)
    b += txt(S.px(30.0), S.py(194.0), 'og C på lavere kurve enn A', GREY, 10.5, False)
    save('econ2220-3-2-nettokjoper', b, out)
    n += 1

    # ================= 3.3 To-periode-modellen =================
    # m1 = 500, m2 = 210, r = 5 % -> W = 700, sluttverdi 735. a = 0,5.
    a = 0.5
    m1, m2, r = 500.0, 210.0, 0.05
    Wnv = m1 + m2/(1+r)
    krav(Wnv == 700.0, f'naaverdien ble {Wnv}')
    Y = (m1, m2)
    E = (a*Wnv, a*Wnv*(1+r))
    krav(E == (350.0, 367.5), f'E ble {E}')
    f1_cd_check(a, 1+r, 1.0, *E, 'E i 3.3')
    f1_online(Wnv, Wnv*(1+r), Y, 'inntektspunktet 3.3')
    f1_online(Wnv, Wnv*(1+r), E, 'E i 3.3')
    S = Scale(780.0, 820.0)
    b = header('Det intertemporale budsjettet. Budsjettlinja går fra 735 kroner '
               'konsum i morgen på den loddrette aksen til 700 kroner konsum i dag på '
               'den vannrette, med helning minus 1,05. Inntektspunktet, fem hundre '
               'kroner i dag og to hundre og ti i morgen, ligger på linja med '
               'stiplede hjelpelinjer. Optimum E ligger til venstre for '
               'inntektspunktet, ved 350 kroner i dag og 367,5 i morgen, der en '
               'konveks indifferenskurve tangerer linja. En dobbeltpil langs den '
               'vannrette aksen fra 350 til 500 er merket sparing 150 kroner.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='konsum i dag, kr', ynote='konsum i morgen, kr')
    b += f1_bline(S, Wnv, Wnv*(1+r), INK, 2.4)
    b += f1_cd(S, a, E, PUR, 2.6)
    b += f1_pt(S, Y, '', 0, 0, True, '500', '210')
    b += f1_legend(S, 528.0, 150.0,
                   ['inntektspunktet (500, 210):', 'konsumér inntekten',
                    'som den kommer'], 10.5)
    b += f1_pt(S, E, 'E', -22, -11, True, '350', '367,5')
    b += dblarrow((S.px(E[0]), OY+26), (S.px(Y[0]), OY+26), GRN, 1.5, 7)
    b += txt(0.5*(S.px(E[0])+S.px(Y[0])), OY+42, 'sparing 150', GRN, 11, False, anchor='middle')
    b += txt(S.px(300.0), S.py(700.0), 'helning −(1 + r) = −1,05', INK, 11.5, False)
    b += txt(S.px(300.0), S.py(660.0), 'tangering: u′₁/u′₂ = 1,05', GRN, 11, False)
    save('econ2220-3-3-to-periode-budsjett', b, out)
    n += 1

    # ---------- 3.3 Renterotasjon for spareren ----------
    rb = 0.25
    Wb = m1 + m2/(1+rb)
    krav(Wb == 668.0, f'ny naaverdi ble {Wb}')
    A = E
    C = (a*Wb, a*Wb*(1+rb))
    krav(C == (334.0, 417.5), f'C ble {C}')
    ws = A[0] + A[1]/(1+rb)
    B = (a*ws, a*ws*(1+rb))
    krav(abs(ws - 644.0) < 1e-9, f'kompensert naaverdi ble {ws}')
    krav(abs(B[0] - 322.0) < 1e-9 and abs(B[1] - 402.5) < 1e-9, f'B ble {B}')
    for nm, pt, rr, ww in (('A', A, 1+r, Wnv), ('B', B, 1+rb, ws), ('C', C, 1+rb, Wb)):
        f1_cd_check(a, rr, 1.0, *pt, nm + ' i renterotasjon')
        f1_online(ww, ww*rr, pt, nm + ' i renterotasjon')
    krav(cd_level(a, *C) > cd_level(a, *B) > cd_level(a, *A),
         'spareren skal komme hoeyere: C > B > A')
    S = Scale(780.0, 900.0)
    b = header('Renteøkning for en sparer. Den gamle budsjettlinja går fra 735 til '
               '700 kroner, den nye fra 835 til 668 kroner, og begge går gjennom '
               'inntektspunktet fem hundre og to hundre og ti, hvor det er tegnet en '
               'rotasjonspil. Den stiplede kompenserte linja har den nye helningen '
               'minus 1,25 og går gjennom det gamle optimum A ved 350 kroner. '
               'Punktet B ligger ved 322 kroner og det nye optimum C ved 334 kroner '
               'på en høyere indifferenskurve. Piler viser substitusjonseffekten fra '
               'A til B og inntektsvirkningen fra B til C. Området til venstre for '
               'inntektspunktet er merket sparerens side, der den nye linja ligger '
               'over den gamle.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='konsum i dag, kr', ynote='konsum i morgen, kr')
    b += f1_bline(S, Wnv, Wnv*(1+r), GREY, 2.2, '6 4')
    b += f1_bline(S, ws, ws*(1+rb), INK, 1.7, '2 3')
    b += f1_bline(S, Wb, Wb*(1+rb), RED, 2.4)
    b += f1_cd(S, a, A, PUR, 2.4)
    b += f1_cd(S, a, C, PUR, 2.0)
    b += f1_cd_arc(S, a, B, 95.0, PUR, 1.8, '5 3')
    b += f1_pt(S, Y, '', 0, 0, True, '500', '210')
    b += txt(S.px(516.0), S.py(188.0), 'inntektspunktet', INK, 10.5, False)
    b += f1_pt(S, A, 'A', 12, 18, True, '350', None)
    b += f1_pt(S, B, 'B', -22, -9, True, None, None)
    b += f1_pt(S, C, 'C', 11, -11, True, None, '417,5')
    b += f1_rotarrow(S, Y, 28, -20, -145)
    b += txt(S.px(150.0), OY+36, 'SE: 350 → 322 (−28 kr)', GRN, 10.5, False)
    b += txt(S.px(150.0), OY+52, 'IE: 322 → 334 (+12 kr)', BLUE, 10.5, False)
    b += txt(S.px(150.0), OY+68, 'til sammen −16 kr konsum i dag', INK, 10.5, False)
    b += txt(S.px(150.0), S.py(806.0), 'ny linje: helning −1,25', RED, 11, False)
    b += txt(S.px(150.0), S.py(766.0), 'sparerens side — ny linje ligger over', ORG, 10.5, False)
    b += txt(S.px(150.0), S.py(726.0), 'kompensert linje: gjennom A, ny helning', INK, 10, False)
    b += f1_legend(S, 2.0, 168.0, ['A = (350; 367,5)', 'B = (322; 402,5)',
                                   'C = (334; 417,5)'], 10)
    save('econ2220-3-3-renterotasjon', b, out)
    n += 1

    # ---------- 3.3 Kontrast: låntakeren ----------
    n1, n2 = 240.0, 630.0
    W0 = n1 + n2/(1+r)
    W1 = n1 + n2/(1+rb)
    krav((W0, W1) == (840.0, 744.0), f'naaverdiene ble {(W0, W1)}')
    Al = (a*W0, a*W0*(1+r))
    Cl = (a*W1, a*W1*(1+rb))
    krav(Al == (420.0, 441.0) and Cl == (372.0, 465.0), f'A, C ble {Al}, {Cl}')
    f1_cd_check(a, 1+r, 1.0, *Al, 'A i laantaker')
    f1_cd_check(a, 1+rb, 1.0, *Cl, 'C i laantaker')
    krav(Al[0] > n1 and cd_level(a, *Cl) < cd_level(a, *Al),
         'laantaker: A til høyre for inntektspunktet og C paa lavere kurve')
    S = Scale(930.0, 1010.0)
    b = header('Kontrastfigur for en låntaker. Inntektspunktet ligger høyt oppe til '
               'venstre, ved 240 kroner i dag og 630 i morgen. Den gamle '
               'budsjettlinja går fra 882 til 840 kroner med helning minus 1,05, den '
               'nye fra 930 til 744 kroner med helning minus 1,25, og begge går '
               'gjennom inntektspunktet. Optimum A ligger til høyre for '
               'inntektspunktet ved 420 kroner, og det nye optimum C ved 372 kroner '
               'på en lavere indifferenskurve. Området til høyre for '
               'inntektspunktet er skyggelagt og merket låntakerens side, der den '
               'nye linja ligger under den gamle.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='konsum i dag, kr', ynote='konsum i morgen, kr')
    b += poly([S.p(n1, n2), S.p(W1, 0.0), S.p(W0, 0.0)], ORG, 0.16)
    b += f1_bline(S, W0, W0*(1+r), GREY, 2.2, '6 4')
    b += f1_bline(S, W1, W1*(1+rb), RED, 2.4)
    b += f1_cd(S, a, Al, PUR, 2.4)
    b += f1_cd(S, a, Cl, PUR, 2.0, '5 3')
    b += f1_pt(S, (n1, n2), '', 0, 0, True, '240', '630')
    b += txt(S.px(266.0), S.py(676.0), 'inntektspunktet (240, 630)', INK, 10.5, False)
    b += f1_pt(S, Al, 'A', 12, 18, True, '420', '441')
    b += f1_pt(S, Cl, 'C', -23, -11, True, None, None)
    b += f1_rotarrow(S, (n1, n2), 27, 16, 142)
    b += txt(S.px(556.0), S.py(128.0), 'låntakerens side —', ORG, 10.5, False)
    b += txt(S.px(556.0), S.py(92.0), 'ny linje ligger under', ORG, 10.5, False)
    b += txt(S.px(150.0), S.py(966.0), 'ny linje: helning −1,25', RED, 11, False)
    b += txt(S.px(430.0), S.py(880.0), 'C på lavere kurve enn A:', GREY, 10, False)
    b += txt(S.px(430.0), S.py(846.0), 'låntakeren taper', GREY, 10, False)
    b += f1_legend(S, 430.0, 800.0, ['A = (420; 441)', 'C = (372; 465)'], 10, GREY)
    save('econ2220-3-3-laantaker', b, out)
    n += 1

    # ================= 3.4 Drill: to eksamenscase =================
    # Solcellekunden: omega = (9000, 30), p1: 2 -> 3, p2 = 100, a = 0,2.
    a, p2 = 0.2, 100.0
    Ws = (9000.0, 30.0)
    p1, p1b = 2.0, 3.0
    r0, r1 = p1/p2, p1b/p2
    m = (p1*Ws[0] + p2*Ws[1])/p2
    mb = (p1b*Ws[0] + p2*Ws[1])/p2
    krav((m, mb) == (210.0, 300.0), f'inntektene ble {(m, mb)}')
    A = (a*m/r0, (1-a)*m)
    C = (a*mb/r1, (1-a)*mb)
    ms = r1*A[0] + A[1]
    B = (a*ms/r1, (1-a)*ms)
    krav(A == (2100.0, 168.0) and C == (2000.0, 240.0), f'A, C ble {A}, {C}')
    krav(abs(ms - 231.0) < 1e-9, f'kompensert inntekt ble {ms}')
    krav(abs(B[0] - 1540.0) < 1e-9 and abs(B[1] - 184.8) < 1e-9, f'B ble {B}')
    for nm, pt, rr, mm in (('A', A, r0, m), ('B', B, r1, ms), ('C', C, r1, mb)):
        f1_cd_check(a, rr, 1.0, *pt, nm + ' i 3.4')
        f1_online(mm/rr, mm, pt, nm + ' i 3.4')
    f1_online(m/r0, m, Ws, 'W gammel linje 3.4')
    f1_online(mb/r1, mb, Ws, 'W ny linje 3.4')
    krav(cd_level(a, *C) > cd_level(a, *B) > cd_level(a, *A),
         'netto selger med prisøkning skal komme hoeyere: C > B > A')
    S = Scale(11200.0, 330.0)
    b = header('Solcellekunden. Den gamle budsjettlinja går fra 210 enheter annet '
               'konsum til 10 500 kilowattimer, den nye fra 300 enheter til 10 000 '
               'kilowattimer, og begge går gjennom beholdningspunktet W ved 9 000 '
               'kilowattimer og 30 enheter, hvor linja roterer. Den stiplede '
               'kompenserte linja har den nye helningen og går gjennom A ved 2 100 '
               'kilowattimer. Punktet B ligger ved 1 540 kilowattimer og det nye '
               'optimum C ved 2 000 kilowattimer på en høyere indifferenskurve enn A. '
               'Piler under aksen viser substitusjonseffekten og inntektsvirkningen.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='kWh strøm', ynote='alt annet')
    b += f1_bline(S, m/r0, m, GREY, 2.2, '6 4')
    b += f1_bline(S, ms/r1, ms, INK, 1.7, '2 3')
    b += f1_bline(S, mb/r1, mb, RED, 2.4)
    b += f1_cd(S, a, A, PUR, 2.4)
    b += f1_cd(S, a, C, PUR, 2.0)
    b += f1_cd_arc(S, a, B, 900.0, PUR, 1.8, '5 3')
    b += f1_pt(S, Ws, 'W', 12, -10, True, '9 000', '30')
    b += f1_pt(S, A, 'A', 12, 19, True, None, '168')
    b += f1_pt(S, B, 'B', -22, -9, True, None, None)
    b += f1_pt(S, C, 'C', 11, -11, True, None, '240')
    b += f1_rotarrow(S, Ws, 26, 150, 250)
    b += f1_xarrow(S, A[0], B[0], OY+30, 'SE = −560 kWh', GRN)
    b += f1_xarrow(S, B[0], C[0], OY+56, 'IE samlet = +460 kWh', BLUE)
    b += txt(S.px(2700.0), S.py(310.0), 'ny linje: helning −0,03', RED, 11, False)
    b += txt(S.px(7360.0), S.py(52.0), 'kompensert linje (gjennom A)', INK, 10, False)
    b += txt(S.px(4200.0), S.py(92.0), 'gammel linje: helning −0,02', GREY, 10, False)
    b += f1_legend(S, 7400.0, 292.0, ['A = (2 100; 168)', 'B = (1 540; 184,8)',
                                      'C = (2 000; 240)'], 10)
    save('econ2220-3-4-solcelle-rotasjon', b, out)
    n += 1

    # ---------- 3.4 Laksefiskeren: prisfall for en netto selger ----------
    a = 0.5
    Wf = (500.0, 200.0)
    q0, q1, q2 = 60.0, 40.0, 50.0          # p1 = 60 -> 40, p2 = 50
    r0, r1 = q0/q2, q1/q2
    m = (q0*Wf[0] + q2*Wf[1])/q2
    mb = (q1*Wf[0] + q2*Wf[1])/q2
    krav((m, mb) == (800.0, 600.0), f'inntektene ble {(m, mb)}')
    A = (a*m/r0, (1-a)*m)
    C = (a*mb/r1, (1-a)*mb)
    krav(abs(A[0] - 1000.0/3) < 1e-9 and A[1] == 400.0, f'A ble {A}')
    krav(C == (375.0, 300.0), f'C ble {C}')
    f1_cd_check(a, r0, 1.0, *A, 'A i laksefisker')
    f1_cd_check(a, r1, 1.0, *C, 'C i laksefisker')
    f1_online(m/r0, m, Wf, 'W gammel linje laksefisker')
    f1_online(mb/r1, mb, Wf, 'W ny linje laksefisker')
    krav(A[0] < Wf[0] and C[0] < Wf[0], 'netto selger: A og C til venstre for W')
    krav(cd_level(a, *C) < cd_level(a, *A), 'prisfall skal senke nytten for netto selger')
    S = Scale(800.0, 850.0)
    b = header('Laksefiskeren og prisfallet. Den gamle budsjettlinja går fra 800 '
               'enheter annet konsum til 666,7 enheter fisk med helning minus 1,2, '
               'den nye fra 600 enheter til 750 enheter fisk med den slakere '
               'helningen minus 0,8. Begge går gjennom beholdningspunktet W ved fem '
               'hundre enheter fisk og to hundre enheter annet konsum, hvor det er '
               'tegnet en rotasjonspil. Optimum A ved 333,3 enheter fisk og det nye '
               'optimum C ved 375 enheter ligger begge til venstre for W, og C '
               'ligger på en lavere indifferenskurve. Området til venstre for W er '
               'skyggelagt og merket selgerens side, der den nye linja ligger under '
               'den gamle.')
    b += f1_axes(('c', '1'), ('c', '2'), xnote='enheter fisk', ynote='alt annet')
    b += poly([S.p(*Wf), S.p(0.0, mb), S.p(0.0, m)], ORG, 0.16)
    b += f1_bline(S, m/r0, m, GREY, 2.2, '6 4')
    b += f1_bline(S, mb/r1, mb, RED, 2.4)
    b += f1_cd(S, a, A, PUR, 2.4)
    b += f1_cd(S, a, C, PUR, 2.0, '5 3')
    b += f1_pt(S, Wf, 'W', 12, -10, True, '500', '200')
    b += f1_pt(S, A, 'A', -22, -11, True, None, '400')
    b += f1_pt(S, C, 'C', -24, 18, True, None, '300')
    b += f1_rotarrow(S, Wf, 26, 155, 250)
    b += f1_legend(S, 26.0, 122.0,
                   ['selgerens side (skyggelagt):',
                    'her ligger den nye linja under den gamle'], 10.5, ORG)
    b += txt(S.px(330.0), S.py(824.0), 'gammel linje: helning −1,2', GREY, 11, False)
    b += txt(S.px(534.0), S.py(58.0), 'ny linje: helning −0,8', RED, 11, False)
    b += txt(S.px(330.0), S.py(776.0), 'C på lavere kurve enn A: hun taper', GREY, 10, False)
    b += f1_legend(S, 40.0, 320.0, ['A = (333,3; 400)', 'C = (375; 300)'], 10)
    save('econ2220-3-4-laksefisker-prisfall', b, out)
    n += 1
    return n


# =====================================================================
# SENTINEL_REGISTER
# =====================================================================


REGISTER = {}
REGISTER.update({'1': f1_del1, '2': f1_del2, '3': f1_del3})  # agent F1

# agent F2 — Del 4, 5 og 8
REGISTER.update({'4': f2_del4, '5': f2_del5, '8': f2_del8})


def main():
    args = [a for a in sys.argv[1:]]
    dele = None
    if '--dele' in args:
        i = args.index('--dele')
        spec = args[i+1]
        args = args[:i] + args[i+2:]
        dele = set()
        for part in spec.split(','):
            part = part.strip()
            if '-' in part:
                a, b = part.split('-')
                dele |= {str(k) for k in range(int(a), int(b)+1)}
            else:
                dele.add(part)
    out = args[0] if args else 'public/images/textbook/econ2220'
    os.makedirs(out, exist_ok=True)
    n = 0
    for key in sorted(REGISTER):
        if dele is not None and key not in dele:
            continue
        print(f'--- Del {key} ---')
        n += REGISTER[key](out)
    print(f'\nFerdig: {n} SVG-er skrevet til {out}')


if __name__ == '__main__':
    main()
