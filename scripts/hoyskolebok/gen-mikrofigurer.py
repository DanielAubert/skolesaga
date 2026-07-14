#!/usr/bin/env python3
"""Mikroøkonomi-figurbibliotek for regnefag-bøker (ECON/SOK/BI-mikro).
Genererer VERIFISERTE skjematiske standarddiagrammer: markedskryss, velferd
(KO/PO/SO), stykkskatt-kile, maksimalpris, monopol (tilpasning + velferd),
eksternalitet (Pigou), elastisitet. Geometrien regnes ut eksakt (skjæringer,
akse-avskjæringer, MI dobbelt så bratt osv.), så figurene er faglig korrekte.

Bruk (default skriver til econ1210):
  python3 scripts/hoyskolebok/gen-mikrofigurer.py [ut-katalog]
Etterpå: wire som image-blokker MED SKREDDERSYDD caption per plassering, og
kjør scripts/upload-media-storage.ts. Se DNA-regnefag.md «Figurkrav».
PRINSIPP: en figur skal bare vise det kapitlet FAKTISK har lært bort — del
figuren ved behov (jf. monopol-tilpasning for 5.1 vs monopol-velferd for 5.2).
"""
import sys
import os

OUT = sys.argv[1] if len(sys.argv) > 1 else 'public/images/textbook/econ1210'
os.makedirs(OUT, exist_ok=True)

# Aksefrat (samme som markedskryss)
OX, OY = 70, 300          # origo (nedre venstre)
XMAX, YTOP = 410, 30      # akseender
RED, BLUE, GRN, PUR, ORG = '#c0392b', '#2471a3', '#1a7f37', '#8250df', '#bf8700'
GREY = '#666'

def header(label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 360" '
            f'font-family="Georgia, \'Times New Roman\', serif" role="img" aria-label="{label}">\n'
            f'  <rect width="440" height="360" fill="#ffffff"/>\n')

def axes(xlab='x', ylab='p'):
    return (f'  <line x1="{OX}" y1="{OY}" x2="{XMAX}" y2="{OY}" stroke="#222" stroke-width="1.6"/>\n'
            f'  <line x1="{OX}" y1="{OY}" x2="{OX}" y2="{YTOP}" stroke="#222" stroke-width="1.6"/>\n'
            f'  <polygon points="{XMAX},{OY} {XMAX-8},{OY-4} {XMAX-8},{OY+4}" fill="#222"/>\n'
            f'  <polygon points="{OX},{YTOP} {OX-4},{YTOP+8} {OX+4},{YTOP+8}" fill="#222"/>\n'
            f'  <text x="{XMAX+6}" y="{OY+5}" font-size="16" font-style="italic">{xlab}</text>\n'
            f'  <text x="{OX-10}" y="{YTOP-4}" font-size="16" font-style="italic">{ylab}</text>\n')

def line(p1, p2, color, w=2.4, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    return f'  <line x1="{p1[0]:.1f}" y1="{p1[1]:.1f}" x2="{p2[0]:.1f}" y2="{p2[1]:.1f}" stroke="{color}" stroke-width="{w}"{d}/>\n'

def hdash(x, y):  # stiplet vannrett fra akse til (x,y)
    return line((OX, y), (x, y), GREY, 1.2, '5 4')
def vdash(x, y):  # stiplet loddrett fra (x,y) ned til akse
    return line((x, y), (x, OY), GREY, 1.2, '5 4')

def dot(x, y, lab='', dx=6, dy=-6, size=15):
    s = f'  <circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="#222"/>\n'
    if lab:
        s += f'  <text x="{x+dx:.1f}" y="{y+dy:.1f}" font-size="{size}" font-weight="bold">{lab}</text>\n'
    return s

def txt(x, y, s, color='#000', size=15, italic=True, bold=False):
    fs = ' font-style="italic"' if italic else ''
    fw = ' font-weight="bold"' if bold else ''
    return f'  <text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}"{fs}{fw}>{s}</text>\n'

def sub(x, y, main, s, color='#000', size=14):  # etikett med ekte subskript
    return (f'  <text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}" font-style="italic">{main}'
            f'<tspan font-size="{size*0.72:.0f}" dy="4" font-style="normal">{s}</tspan></text>\n')

def poly(pts, fill, opacity=0.18):
    p = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    return f'  <polygon points="{p}" fill="{fill}" opacity="{opacity}"/>\n'

# Geometrihjelp: skjæring mellom to linjer gitt ved endepunkter
def intersect(a1, a2, b1, b2):
    x1, y1 = a1; x2, y2 = a2; x3, y3 = b1; x4, y4 = b2
    den = (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4)
    px = ((x1*y2-y1*x2)*(x3-x4) - (x1-x2)*(x3*y4-y3*x4)) / den
    py = ((x1*y2-y1*x2)*(y3-y4) - (y1-y2)*(x3*y4-y3*x4)) / den
    return (px, py)
def y_at(p1, p2, x):  # y på linje p1-p2 ved gitt x
    return p1[1] + (x - p1[0])*(p2[1]-p1[1])/(p2[0]-p1[0])
def x_at(p1, p2, y):  # x på linje p1-p2 ved gitt y
    return p1[0] + (y - p1[1])*(p2[0]-p1[0])/(p2[1]-p1[1])

def save(name, body):
    with open(f'{OUT}/{name}.svg', 'w') as f:
        f.write(body + '</svg>\n')
    print('skrev', name)

# Felles E og T (fallende / stigende), skjærer i A
E1, E2 = (85, 60), (385, 290)      # etterspørsel: høy pris/lav x → lav pris/høy x
T1, T2 = (95, 290), (385, 70)      # tilbud: lav pris/lav x → høy pris/høy x
A = intersect(E1, E2, T1, T2)

# ---------- 1) VELFERD: KO/PO/SO ----------
b = header('Velferdsgeometrien: konsumentoverskudd KO over likevektsprisen og under E-kurven, produsentoverskudd PO under likevektsprisen og over T-kurven, med sum SO.')
b += axes()
# akse-avskjæringer for E og T
E_yint = y_at(E1, E2, OX)   # E treffer prisaksen (x=OX)
T_yint = y_at(T1, T2, OX)
# KO-trekant: (OX, p*)-(OX, E_yint)-(A) — rødtint matcher E/etterspørsel/konsument
b += poly([(OX, A[1]), (OX, E_yint), A], RED, 0.15)
# PO-trekant: (OX, p*)-(OX, T_yint)-(A) — blåtint matcher T/tilbud/produsent
b += poly([(OX, A[1]), (OX, T_yint), A], BLUE, 0.15)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += txt(365, 285, 'E', RED, 16, False, True); b += txt(365, 82, 'T', BLUE, 16, False, True)
b += hdash(A[0], A[1]); b += vdash(A[0], A[1])
b += dot(*A, 'A')
b += txt(OX-32, A[1]+5, 'p*', size=14)
b += txt(A[0]-6, OY+18, 'x*', size=14)
b += txt((OX+A[0])/2-8, (E_yint+A[1])/2-14, 'KO', RED, 14, False, True)
b += txt((OX+A[0])/2-8, (T_yint+A[1])/2+22, 'PO', BLUE, 14, False, True)
save('velferd-kopo', b)

# ---------- 2) STYKKSKATT: skattekile ----------
# En stykkskatt kiler kjøperpris (opp på E) og selgerpris (ned på T) fra hverandre.
# Ny mengde x1 < x*. Kile = t. Dødvektstap-trekant til høyre for kilen mot A.
b = header('Stykkskatt som en kile: kjøperprisen p-kjøper leses opp på E-kurven og selgerprisen p-selger ned på T-kurven ved den nye, lavere mengden x1. Den loddrette avstanden mellom dem er skatten t. Trekanten mellom kilen og likevektspunktet A er dødvektstapet.')
b += axes()
x1 = OX + (A[0]-OX)*0.62          # ny, lavere mengde
pE = y_at(E1, E2, x1)            # kjøperpris (på E)
pT = y_at(T1, T2, x1)           # selgerpris (på T)
# dødvektstap-trekant: (x1,pE)-(x1,pT)-A
b += poly([(x1, pE), (x1, pT), A], ORG, 0.28)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += txt(365, 285, 'E', RED, 16, False, True); b += txt(365, 82, 'T', BLUE, 16, False, True)
# kile-markering (dobbeltpil-aktig loddrett segment)
b += line((x1, pE), (x1, pT), '#222', 1.6)
b += hdash(x1, pE); b += hdash(x1, pT)
b += vdash(x1, (pE+pT)/2)
b += dot(x1, pE, ''); b += dot(x1, pT, ''); b += dot(*A, 'A', 8, -6)
b += sub(OX-54, pE+5, 'p', 'kjøper', size=13)
b += sub(OX-52, pT+5, 'p', 'selger', size=13)
b += txt(x1+7, (pE+pT)/2+4, 't', size=15, bold=True)
b += sub(x1-8, OY+18, 'x', '1', size=14)
b += txt(A[0]-6, OY+18, 'x*', size=14)
save('stykkskatt-kile', b)

# ---------- 3) MAKSIMALPRIS ----------
# Bindende maksimalpris under p*: tilbudt (kortside) < etterspurt → mangel.
b = header('Maksimalpris under likevekt: ved den fastsatte maksprisen leses tilbudt mengde x_T (kortsiden) av på T-kurven og etterspurt mengde x_E av på E-kurven. Differansen x_E minus x_T er mangelen. Omsatt mengde er x_T.')
b += axes()
pmax = A[1] + (OY-A[1])*0.45     # maksimalpris UNDER p* (større y = lavere pris)
xT = x_at(T1, T2, pmax)         # tilbudt ved pmax (kortside)
xE = x_at(E1, E2, pmax)         # etterspurt ved pmax
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += txt(365, 285, 'E', RED, 16, False, True); b += txt(365, 82, 'T', BLUE, 16, False, True)
# maksprislinje (horisontal, grønn); etikett over linjen så den ikke klippes
b += line((OX, pmax), (378, pmax), GRN, 2.0, '7 4')
b += sub(342, pmax-7, 'p', 'maks', GRN, 13)
b += dot(*A, 'A', 6, -6)
b += hdash(A[0], A[1])
b += vdash(xT, pmax); b += vdash(xE, pmax)
b += dot(xT, pmax, ''); b += dot(xE, pmax, '')
# mangel-markering (pil langs maksprislinjen)
b += line((xT, pmax-14), (xE, pmax-14), '#222', 1.2, '3 3')
b += txt((xT+xE)/2-22, pmax-18, 'mangel', '#222', 12, True)
b += sub(xT-8, OY+18, 'x', 'T', size=13); b += sub(xE-6, OY+18, 'x', 'E', size=13)
b += txt(OX-30, A[1]+5, 'p*', size=14)
save('maksimalpris', b)

# ---------- 4) MONOPOL: MI = MK ----------
# Lineær E gir MI med samme prisavskjæring og dobbel helning (treffer x-aksen halvveis).
# Monopol: x_M der MI=MK; p_M leses OPP til E. x_opt der E=MK. DVT-trekant mellom.
b = header('Monopoltilpasning: den fallende E-kurven, marginalinntektskurven MI med dobbelt så bratt fall, og en vannrett marginalkostnad MK. Monopolisten velger mengden x_M der MI er lik MK, og tar prisen p_M lest opp på E-kurven. Den samfunnsøkonomisk riktige mengden x_opt er der E møter MK. Trekanten mellom x_M og x_opt er dødvektstapet.')
b += axes()
# E som fallende linje
Em1 = (OX+8, 70); Em2 = (360, OY)          # E treffer x-aksen ved x=360
E_xint = 360
# MI: samme prisavskjæring (ved x=OX) som E, dobbel helning → x-avskjæring halvveis
E_pint = y_at(Em1, Em2, OX)
MI_xint = OX + (E_xint - OX)/2             # halvveis
MIp1 = (OX, E_pint); MIp2 = (MI_xint, OY)
# MK vannrett
mk_y = 235
MK1, MK2 = (OX, mk_y), (395, mk_y)
xM = x_at(MIp1, MIp2, mk_y)                # der MI=MK
pM = y_at(Em1, Em2, xM)                    # pris opp på E
xopt = x_at(Em1, Em2, mk_y)                # der E=MK
# --- to varianter: 5-1 (kun tilpasning) og 5-2 (+ x_opt + dødvektstap) ---
def monopol_base():
    b  = line(Em1, Em2, RED) + line(MIp1, MIp2, '#a94db0', 2.0) + line(MK1, MK2, GRN, 2.2)
    b += txt(345, y_at(Em1,Em2,345)-8, 'E', RED, 16, False, True)
    b += txt(MI_xint-2, OY-8, 'MI', '#a94db0', 14, False, True)
    b += txt(398, mk_y+5, 'MK', GRN, 14, False, True)
    b += hdash(xM, pM) + vdash(xM, pM) + dot(xM, pM, '')
    b += sub(OX-34, pM+5, 'p', 'M', size=13) + sub(xM-8, OY+18, 'x', 'M', size=13)
    return b
# 5-1: monopolets tilpasning (MI = MK), uten velferd
b_t = header('Monopoltilpasning: den fallende E-kurven, marginalinntekten MI som faller dobbelt så bratt, og en vannrett marginalkostnad MK. Monopolisten velger mengden x_M der MI er lik MK, og leser prisen p_M rett opp på E-kurven. Stiplede hjelpelinjer viser p_M på prisaksen og x_M på mengdeaksen.')
b_t += axes() + monopol_base()
save('monopol-tilpasning', b_t)
# 5-2: samme + samfunnsøkonomisk optimum og dødvektstap
b_v = header('Monopolets velferdstap: samme diagram med E, MI og MK, der monopolisten produserer x_M og tar prisen p_M. Den samfunnsøkonomisk riktige mengden x_opt er der E møter MK. Den skraverte trekanten mellom x_M og x_opt, avgrenset av E-kurven over og MK under, er dødvektstapet ved monopol.')
b_v += axes()
b_v += poly([(xM, pM), (xM, mk_y), (xopt, mk_y)], ORG, 0.28)
b_v += monopol_base()
b_v += dot(xopt, mk_y, '', 4, 0)
b_v += sub(xopt-10, OY+18, 'x', 'opt', size=13)
b_v += txt((xM+xopt)/2-16, (pM+mk_y)/2+6, 'DVT', ORG, 12, True)
save('monopol-velferd', b_v)

# ---------- 5) EKSTERNALITET (negativ, Pigou) ----------
# Privat MK (=T) og samfunnsøkonomisk marginalkostnad SMK over (marginal ekstern skade).
# Marked: E=MK (for mye). Optimum: E=SMK (lavere). DVT-trekant.
b = header('Negativ eksternalitet: E-kurven, den private marginalkostnaden MK (privat tilbud) og den samfunnsøkonomiske marginalkostnaden SMK som ligger over MK med den marginale eksterne skaden. Markedet havner der E møter MK (for stor mengde x_marked), mens samfunnsøkonomisk optimum er der E møter SMK (lavere x_opt). Trekanten mellom de to mengdene er dødvektstapet.')
b += axes()
# E fallende, MK (privat tilbud) stigende, SMK parallelt over MK
E1e, E2e = (85, 70), (375, 285)
MK1e, MK2e = (95, 285), (375, 95)
# SMK = MK forskjøvet oppover (mindre y) med konstant loddrett skift
shift = 55
SMK1, SMK2 = (MK1e[0], MK1e[1]-shift), (MK2e[0], MK2e[1]-shift)
A_mkt = intersect(E1e, E2e, MK1e, MK2e)      # marked
A_opt = intersect(E1e, E2e, SMK1, SMK2)      # optimum
# DVT-trekant: mellom SMK og E fra x_opt til x_marked: (A_opt),(A_mkt),(x_mkt på SMK)
smk_at_xmkt = (A_mkt[0], y_at(SMK1, SMK2, A_mkt[0]))
b += poly([A_opt, A_mkt, smk_at_xmkt], ORG, 0.26)
b += line(E1e, E2e, RED); b += line(MK1e, MK2e, BLUE); b += line(SMK1, SMK2, '#a94db0', 2.2)
b += txt(357, 283, 'E', RED, 16, False, True)
b += txt(360, 100, 'MK', BLUE, 13, False, True)
b += txt(352, 45, 'SMK', '#a94db0', 13, False, True)
b += dot(*A_mkt, ''); b += dot(*A_opt, '')
b += vdash(A_mkt[0], A_mkt[1]); b += vdash(A_opt[0], A_opt[1])
b += sub(A_mkt[0]-14, OY+18, 'x', 'marked', size=12)
b += sub(A_opt[0]-34, OY+18, 'x', 'opt', size=12)
save('eksternalitet-pigou', b)

# ---------- 6) ELASTISITET (bratt vs slak) ----------
# To E-kurver gjennom felles punkt: bratt = uelastisk, slak = elastisk.
b = header('Elastisitet: to etterspørselskurver gjennom samme punkt. Den bratte kurven er lite elastisk (uelastisk) — mengden endrer seg lite når prisen endrer seg. Den slake kurven er svært elastisk — mengden endrer seg mye ved samme prisendring.')
b += axes()
C = (230, 175)                     # felles punkt
steep = ((C[0]-38, YTOP+40), (C[0]+38, OY-30))       # bratt
flat = ((OX+15, C[1]-70), (395, C[1]+70))            # slak
b += line(*steep, RED); b += line(*flat, ORG, 2.4)
b += dot(*C, '')
b += txt(steep[0][0]-30, steep[0][1]+6, 'bratt', RED, 12, True)
b += txt(steep[0][0]-30, steep[0][1]+22, '(uelastisk)', RED, 11, True)
b += txt(flat[1][0]-70, flat[1][1]+16, 'slak (elastisk)', ORG, 12, True)
save('elastisitet', b)

print('\nFerdig — 6 nye SVG-er generert.')
