#!/usr/bin/env python3
"""Slutsky/Hicks-dekomponering for konsumentteori (econ1210 kap 7).
Regner geometrien EKSAKT for Cobb-Douglas U = x1^a * x2^(1-a): begge optima og
substitusjonspunktet (tangens på ORIGINAL indifferenskurve med NY prisstigning)
beregnes analytisk, og indifferenskurvene samples fra den ekte kurven -> ekte,
konveks tangering. Stil matcher gen-mikrofigurer.py.
  python3 scripts/hoyskolebok/gen-slutsky.py [ut-katalog]
"""
import sys, os, math
OUT = sys.argv[1] if len(sys.argv) > 1 else 'public/images/textbook/econ1210'
os.makedirs(OUT, exist_ok=True)

RED, BLUE, PUR, GRN, GREY = '#c0392b', '#2471a3', '#8250df', '#1a7f37', '#666'
OX, OY = 74, 300          # origo
XW, YH = 372, 262         # akselengder (piksler)

def slutsky(name, M, p1a, p1b, p2, a, x1lab, x2lab, caption,
            x1max=None, x2max=None):
    # --- eksakt geometri ---
    b = 1 - a
    # optima (Cobb-Douglas: x1 = a*M/p1, x2 = b*M/p2)
    E0 = (a*M/p1a, b*M/p2)
    E1 = (a*M/p1b, b*M/p2)
    U0 = E0[0]**a * E0[1]**b          # nyttenivaa foer
    C0 = E0[0]*E0[1]                  # x1*x2 langs U0 (for a=b=0.5)
    C1 = E1[0]*E1[1]
    # Hicks-substitusjon: paa U0, tangent til NY prisstigning r=p1b/p2
    # MRS = (a/b)*(x2/x1) = r  =>  x2 = (b/a)*r*x1 ; sett inn i x1^a x2^b = U0
    r = p1b/p2
    k = (b/a)*r
    # x1^a * (k x1)^b = U0  =>  x1 * k^b = U0  (siden a+b=1) => x1 = U0 / k^b
    x1B = U0 / (k**b)
    B = (x1B, k*x1B)
    # akse-avskjaeringer for budsjettlinjene
    xint0, yint = M/p1a, M/p2        # foer:  (xint0,0)-(0,yint)
    xint1 = M/p1b                    # etter: (xint1,0)-(0,yint)
    # kompensert budsjett (ny stigning r, tangerer U0 i B): avskjaeringer
    xintC = B[0] + B[1]/r
    yintC = B[1] + r*B[0]
    # skala
    x1max = x1max or (max(xint0, xintC)*1.06)
    x2max = x2max or (max(yint, yintC)*1.06)
    def qx(x): return OX + x/x1max*XW
    def qy(y): return OY - y/x2max*YH
    # --- SVG ---
    W, H = 470, 372
    s = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
         f'font-family="Georgia, \'Times New Roman\', serif" role="img" aria-label="{caption}">\n'
         f'  <rect width="{W}" height="{H}" fill="#ffffff"/>\n')
    # akser
    s += (f'  <line x1="{OX}" y1="{OY}" x2="{OX+XW+14}" y2="{OY}" stroke="#222" stroke-width="1.6"/>\n'
          f'  <line x1="{OX}" y1="{OY}" x2="{OX}" y2="{OY-YH-14}" stroke="#222" stroke-width="1.6"/>\n'
          f'  <polygon points="{OX+XW+14},{OY} {OX+XW+6},{OY-4} {OX+XW+6},{OY+4}" fill="#222"/>\n'
          f'  <polygon points="{OX},{OY-YH-14} {OX-4},{OY-YH-6} {OX+4},{OY-YH-6}" fill="#222"/>\n'
          f'  <text x="{OX+XW+18}" y="{OY+5}" font-size="14" font-style="italic">{x1lab}</text>\n'
          f'  <text x="{OX-12}" y="{OY-YH-18}" font-size="14" font-style="italic">{x2lab}</text>\n')
    def L(p, q, col, w=2.4, dash=None):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        return f'  <line x1="{qx(p[0]):.1f}" y1="{qy(p[1]):.1f}" x2="{qx(q[0]):.1f}" y2="{qy(q[1]):.1f}" stroke="{col}" stroke-width="{w}"{d}/>\n'
    def CURVE(C, col, w=2.4, dash=None, lo=None, hi=None):
        lo = lo or C/x2max*1.02
        hi = hi or x1max*0.99
        pts, N = [], 60
        for i in range(N+1):
            x = lo + (hi-lo)*i/N
            y = C/x
            if y <= x2max*1.02:
                pts.append(f'{qx(x):.1f},{qy(y):.1f}')
        d = f' stroke-dasharray="{dash}"' if dash else ''
        return f'  <polyline points="{" ".join(pts)}" fill="none" stroke="{col}" stroke-width="{w}"{d}/>\n'
    def DOT(p, main, subn=None, dx=8, dy=-6):
        r = f'  <circle cx="{qx(p[0]):.1f}" cy="{qy(p[1]):.1f}" r="4" fill="#222"/>\n'
        subtxt = f'<tspan font-size="9" dy="3">{subn}</tspan>' if subn is not None else ''
        r += f'  <text x="{qx(p[0])+dx:.1f}" y="{qy(p[1])+dy:.1f}" font-size="14" font-weight="bold">{main}{subtxt}</text>\n'
        return r
    def VD(p):  # stiplet loddrett ned til x1-aksen
        return f'  <line x1="{qx(p[0]):.1f}" y1="{qy(p[1]):.1f}" x2="{qx(p[0]):.1f}" y2="{OY:.1f}" stroke="{GREY}" stroke-width="1.1" stroke-dasharray="4 3"/>\n'
    # indifferenskurver
    s += CURVE(C0, PUR, 2.4)
    s += CURVE(C1, PUR, 2.0)
    s += f'  <text x="{qx(hiU0:=x1max*0.96):.1f}" y="{qy(C0/hiU0)-6:.1f}" font-size="13" fill="{PUR}" font-weight="bold">U<tspan font-size="9" dy="3">0</tspan></text>\n'
    s += f'  <text x="{qx(hiU1:=x1max*0.80):.1f}" y="{qy(C1/hiU1)+16:.1f}" font-size="13" fill="{PUR}" font-weight="bold">U<tspan font-size="9" dy="3">1</tspan></text>\n'
    # budsjettlinjer
    s += L((0, yint), (xint0, 0), GREY, 2.0, '6 4')      # foer (stiplet graa)
    s += L((0, yintC), (xintC, 0), '#111', 1.6, '2 3')   # kompensert (tynn prikk)
    s += L((0, yint), (xint1, 0), RED, 2.4)              # etter (roed)
    # punkter + loddlinjer
    for p in (E0, B, E1): s += VD(p)
    s += DOT(E0, 'E', '0', dx=10, dy=-8)
    s += DOT(B , 'B', None, dx=-2, dy=-16)
    s += DOT(E1, 'E', '1', dx=-20, dy=-8)
    # dekomponering paa x1-aksen (under)
    yb = OY + 24
    def bracket(xa, xb, y, col, label):
        xa_, xb_ = qx(xa), qx(xb)
        mid = (xa_+xb_)/2
        r  = f'  <line x1="{xa_:.1f}" y1="{y}" x2="{xb_:.1f}" y2="{y}" stroke="{col}" stroke-width="1.6"/>\n'
        r += f'  <line x1="{xa_:.1f}" y1="{y-4}" x2="{xa_:.1f}" y2="{y+4}" stroke="{col}" stroke-width="1.4"/>\n'
        r += f'  <line x1="{xb_:.1f}" y1="{y-4}" x2="{xb_:.1f}" y2="{y+4}" stroke="{col}" stroke-width="1.4"/>\n'
        r += f'  <text x="{mid:.1f}" y="{y+16}" font-size="11" fill="{col}" text-anchor="middle">{label}</text>\n'
        return r
    s += bracket(B[0], E0[0], yb, GRN, 'substitusjon')
    s += bracket(E1[0], B[0], yb+30, BLUE, 'inntekt')
    s += bracket(E1[0], E0[0], yb+60, '#111', 'total virkning')
    return name, s + '</svg>\n', caption

def save(name, body):
    with open(f'{OUT}/{name}.svg', 'w') as f: f.write(body)
    print('skrev', name)

# --- Eksempel 3 (econ1210-7-1): M=1600, p1 40->50, p2=20 (skriver til eksisterende filnavn) ---
n, b, _ = slutsky('econ1210-7-1-prisokning', 1600, 40, 50, 20, 0.5,
    'x₁ (mat)', 'x₂ (annet)',
    'Prisøkning på mat: budsjettlinja roterer innover om det loddrette endepunktet. E0 tangerer U0, E1 tangerer en lavere U1. Substitusjonseffekten (E0 til B langs U0) og inntektseffekten (B til E1) er markert paa x1-aksen.')
save(n, b)

# --- Prøve 1 (econ1210-7-prove): M=1200, p1 30->40, p2=20 (skriver til eksisterende filnavn) ---
n, b, _ = slutsky('econ1210-7-prove-p1-prisrotasjon', 1200, 30, 40, 20, 0.5,
    'x₁ (mat)', 'x₂ (annet)',
    'Slutsky/Hicks-dekomponering ved matprisøkning: substitusjonseffekt langs U0 og inntektseffekt ned til U1, vist paa x1-aksen.')
save(n, b)
print('\nFerdig — Slutsky-figurer generert.')
