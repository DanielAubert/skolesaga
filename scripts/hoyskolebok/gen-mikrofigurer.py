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

def polyline(pts, color, w=2.4, dash=None):  # åpen kurve (for hyperbler/trapper)
    d = f' stroke-dasharray="{dash}"' if dash else ''
    p = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    return f'  <polyline points="{p}" fill="none" stroke="{color}" stroke-width="{w}"{d}/>\n'

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

# ================= GJENBRUKS-KONTEKSTER =================
# Samme geometri som varemarkedet, men andre akser/etiketter (arbeidsmarked,
# prisgulv, handel). Beviser DNA-prinsippet «tekst-i-bildet per kontekst».

def curve_labels(dem, sup, dcol=RED, scol=BLUE, dx=(363,285), sx=(345,82)):
    return (txt(dx[0], dx[1], dem, dcol, 13, False, True)
            + txt(sx[0], sx[1], sup, scol, 13, False, True))

# ---------- 7) ARBEIDSMARKED-KRYSS (w/N) ----------
b = header('Arbeidsmarkedet som marked: lønn w loddrett, sysselsetting N vannrett. Fallende arbeidsetterspørsel (AE, bedriftene) og stigende arbeidstilbud (AT, arbeiderne) krysser i likevekten med lønn w-stjerne og sysselsetting N-stjerne.')
b += axes('N', 'w')
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('AE', 'AT')
b += hdash(A[0], A[1]); b += vdash(A[0], A[1]); b += dot(*A, '')
b += txt(OX-34, A[1]+5, 'w*', size=14); b += txt(A[0]-6, OY+18, 'N*', size=14)
save('arbeidsmarked-kryss', b)

# ---------- 8) LØNNSSKATT-KILE (w/N) ----------
b = header('Lønnsskatt som kile i arbeidsmarkedet: ved den nye, lavere sysselsettingen N1 betaler arbeidsgiveren w_AG (lest opp på arbeidsetterspørselen AE) mens arbeidstakeren sitter igjen med w_AT (lest ned på arbeidstilbudet AT). Den loddrette avstanden er lønnsskatten. Trekanten fram til likevekten er dødvektstapet.')
b += axes('N', 'w')
x1 = OX + (A[0]-OX)*0.62
pE = y_at(E1, E2, x1); pT = y_at(T1, T2, x1)
b += poly([(x1, pE), (x1, pT), A], ORG, 0.28)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('AE', 'AT')
b += line((x1, pE), (x1, pT), '#222', 1.6)
b += hdash(x1, pE); b += hdash(x1, pT); b += vdash(x1, (pE+pT)/2)
b += dot(x1, pE, ''); b += dot(x1, pT, ''); b += dot(*A, '', 8, -6)
b += sub(OX-46, pE+5, 'w', 'AG', size=13); b += sub(OX-44, pT+5, 'w', 'AT', size=13)
b += txt(x1+7, (pE+pT)/2+4, 't', size=15, bold=True)
b += sub(x1-8, OY+18, 'N', '1', size=14); b += txt(A[0]-6, OY+18, 'N*', size=14)
save('lonnsskatt-kile', b)

# ---------- 9) MINSTEPRIS (prisgulv, p/x) ----------
b = header('Minstepris over likevekt: ved prisgulvet p_min leses etterspurt mengde x_E (kortsiden) av på E-kurven og tilbudt mengde x_T av på T-kurven. Tilbudt overstiger etterspurt — differansen er tilbudsoverskuddet. Omsatt mengde er x_E.')
b += axes()
pmin = A[1] - (A[1]-YTOP)*0.42       # OVER p* (mindre y)
xE = x_at(E1, E2, pmin); xT = x_at(T1, T2, pmin)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('E', 'T')
b += line((OX, pmin), (378, pmin), GRN, 2.0, '7 4')
b += sub(342, pmin-7, 'p', 'min', GRN, 13)
b += dot(*A, 'A', 6, 16); b += hdash(A[0], A[1])
b += vdash(xE, pmin); b += vdash(xT, pmin); b += dot(xE, pmin, ''); b += dot(xT, pmin, '')
b += line((xE, pmin+16), (xT, pmin+16), '#222', 1.2, '3 3')
b += txt((xE+xT)/2-40, pmin+30, 'tilbudsoverskudd', '#222', 11, True)
b += sub(xE-6, OY+18, 'x', 'E', size=13); b += sub(xT-8, OY+18, 'x', 'T', size=13)
b += txt(OX-30, A[1]+5, 'p*', size=14)
save('minstepris', b)

# ---------- 10) MINSTELØNN (prisgulv, w/N) ----------
b = header('Minstelønn over likevekt: ved lønnsgulvet w_min etterspør bedriftene bare N_E arbeidskraft (kortsiden), mens N_T ønsker å jobbe. Differansen N_T minus N_E er arbeidsledigheten. Sysselsettingen blir N_E.')
b += axes('N', 'w')
wmin = A[1] - (A[1]-YTOP)*0.42
NE = x_at(E1, E2, wmin); NT = x_at(T1, T2, wmin)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('AE', 'AT')
b += line((OX, wmin), (378, wmin), GRN, 2.0, '7 4')
b += sub(340, wmin-7, 'w', 'min', GRN, 13)
b += dot(*A, '', 6, 16); b += hdash(A[0], A[1])
b += vdash(NE, wmin); b += vdash(NT, wmin); b += dot(NE, wmin, ''); b += dot(NT, wmin, '')
b += line((NE, wmin+16), (NT, wmin+16), '#222', 1.2, '3 3')
b += txt((NE+NT)/2-32, wmin+30, 'arbeidsledighet', '#222', 11, True)
b += sub(NE-6, OY+18, 'N', 'E', size=13); b += sub(NT-8, OY+18, 'N', 'T', size=13)
b += txt(OX-34, A[1]+5, 'w*', size=14)
save('minstelonn', b)

# ---------- 11) HANDEL: IMPORT (verdenspris under autarki) ----------
b = header('Handelsåpning for import: innenlandsk E og T krysser i autarkiprisen p_A. Verdensprisen p_V ligger under. Ved p_V tilbyr innenlandske produsenter x_T, mens forbrukerne etterspør x_E — differansen dekkes av import. Den grønne trekanten er den samlede velferdsgevinsten ved handel.')
b += axes()
pV = A[1] + (OY-A[1])*0.42            # verdenspris UNDER autarki (større y)
xT = x_at(T1, T2, pV); xE = x_at(E1, E2, pV)
b += poly([A, (xT, pV), (xE, pV)], GRN, 0.18)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('E', 'T')
b += line((OX, pV), (400, pV), '#111', 1.8)
b += sub(354, pV-7, 'p', 'V', '#111', 13)
b += dot(*A, ''); b += hdash(A[0], A[1]); b += sub(OX-34, A[1]+5, 'p', 'A', size=13)
b += vdash(xT, pV); b += vdash(xE, pV); b += dot(xT, pV, ''); b += dot(xE, pV, '')
b += line((xT, pV+16), (xE, pV+16), '#222', 1.2, '3 3')
b += txt((xT+xE)/2-16, pV+30, 'import', '#222', 12, True)
b += sub(xT-8, OY+18, 'x', 'T', size=12); b += sub(xE-6, OY+18, 'x', 'E', size=12)
save('handel-import', b)

# ---------- 12) HANDEL: EKSPORT (verdenspris over autarki) ----------
b = header('Handelsåpning for eksport: verdensprisen p_V ligger over autarkiprisen p_A. Ved p_V etterspør innenlandske forbrukere bare x_E, mens produsentene tilbyr x_T — differansen eksporteres. Den grønne trekanten er den samlede velferdsgevinsten.')
b += axes()
pV = A[1] - (A[1]-YTOP)*0.42          # verdenspris OVER autarki (mindre y)
xE = x_at(E1, E2, pV); xT = x_at(T1, T2, pV)
b += poly([A, (xE, pV), (xT, pV)], GRN, 0.18)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('E', 'T')
b += line((OX, pV), (400, pV), '#111', 1.8)
b += sub(354, pV-7, 'p', 'V', '#111', 13)
b += dot(*A, ''); b += hdash(A[0], A[1]); b += sub(OX-34, A[1]+16, 'p', 'A', size=13)
b += vdash(xE, pV); b += vdash(xT, pV); b += dot(xE, pV, ''); b += dot(xT, pV, '')
b += line((xE, pV+16), (xT, pV+16), '#222', 1.2, '3 3')
b += txt((xE+xT)/2-16, pV+30, 'eksport', '#222', 12, True)
b += sub(xE-6, OY+18, 'x', 'E', size=12); b += sub(xT-8, OY+18, 'x', 'T', size=12)
save('handel-eksport', b)

# ================= HJELPEFIGURER (forstå oppgavene) =================

# ---------- 13) KURVESKIFT (komparativ statikk: T inn) ----------
b = header('Komparativ statikk: et tilbudsskift. Den fallende E-kurven ligger fast. Tilbudet skifter inn (opp til venstre) fra T til T-merket fordi innsatsen blir dyrere. Likevekten flytter seg fra A til A-merket: høyere pris og lavere mengde. Stiplede hjelpelinjer viser begge prisene og mengdene på aksene.')
b += axes()
Ts1, Ts2 = (T1[0], T1[1]-48), (T2[0], T2[1]-48)   # T' skiftet opp (dyrere innsats)
Anew = intersect(E1, E2, Ts1, Ts2)
b += line(E1, E2, RED)
b += line(T1, T2, BLUE, 1.6, '5 4'); b += line(Ts1, Ts2, BLUE)
b += txt(365, 285, 'E', RED, 16, False, True)
b += txt(300, 60, "T'", BLUE, 15, False, True); b += txt(352, 92, 'T', BLUE, 13, False, True)
b += hdash(A[0], A[1]); b += vdash(A[0], A[1]); b += dot(*A, '')
b += hdash(Anew[0], Anew[1]); b += vdash(Anew[0], Anew[1]); b += dot(*Anew, '')
b += txt(A[0]+7, A[1]+15, 'A', size=14, bold=True)
b += txt(Anew[0]-16, Anew[1]-7, "A'", size=14, bold=True)
b += txt(OX-30, A[1]+5, 'p*', size=13); b += sub(OX-36, Anew[1]+5, 'p', '1', size=13)
b += txt(A[0]-6, OY+18, 'x*', size=13); b += sub(Anew[0]-8, OY+18, 'x', '1', size=13)
save('kurveskift', b)

# ---------- 14) STYKKSUBSIDIE-KILE (speil av skatt; overproduksjon) ----------
b = header('Stykksubsidie som kile: subsidien utvider mengden til x1, større enn likevektsmengden x*. Ved x1 får selgeren p_selger (lest opp på T-kurven) mens kjøperen betaler p_kjøper (lest ned på E-kurven). Avstanden er subsidien s. Trekanten mellom likevekten A og den nye mengden er dødvektstapet — samfunnet taper selv om begge sider «vinner» (subsidie-paradokset).')
b += axes()
x1 = A[0] + (385 - A[0])*0.42       # ny mengde til HØYRE for x*
pE = y_at(E1, E2, x1); pT = y_at(T1, T2, x1)
b += poly([A, (x1, pT), (x1, pE)], ORG, 0.28)
b += line(E1, E2, RED); b += line(T1, T2, BLUE)
b += curve_labels('E', 'T')
b += line((x1, pE), (x1, pT), '#222', 1.6)
b += hdash(x1, pE); b += hdash(x1, pT); b += vdash(x1, (pE+pT)/2)
b += dot(x1, pE, ''); b += dot(x1, pT, ''); b += dot(*A, 'A', -16, -4)
b += sub(OX-52, pT+5, 'p', 'selger', size=12); b += sub(OX-54, pE+5, 'p', 'kjøper', size=12)
b += txt(x1+7, (pE+pT)/2+4, 's', size=15, bold=True)
b += txt(A[0]-16, OY+18, 'x*', size=13); b += sub(x1-8, OY+18, 'x', '1', size=13)
save('stykksubsidie-kile', b)

# ---------- 15) ELASTISITET LANGS EN RETT LINJE ----------
b = header('Elastisiteten varierer langs én rett etterspørselskurve: i den øvre delen (høy pris, lav mengde) er den elastisk (tallverdi over 1), i den nedre delen (lav pris, høy mengde) er den uelastisk (tallverdi under 1), og nøyaktig i midtpunktet er den enhetselastisk (tallverdi lik 1). Stigningstallet er det samme hele veien — elastisiteten er det ikke.')
b += axes()
Ee1, Ee2 = (92, 52), (382, 292)
mid = ((Ee1[0]+Ee2[0])/2, (Ee1[1]+Ee2[1])/2)
b += line(Ee1, Ee2, RED)
b += dot(*mid, '')
b += txt(Ee1[0]+18, Ee1[1]+34, 'elastisk', GRN, 13, False, True)
b += txt(Ee1[0]+18, Ee1[1]+50, '|ε| > 1', GRN, 12, True)
b += txt(mid[0]+12, mid[1]-6, '|ε| = 1', '#222', 12, True)
b += txt(Ee2[0]-96, Ee2[1]-30, 'uelastisk', ORG, 13, False, True)
b += txt(Ee2[0]-96, Ee2[1]-14, '|ε| < 1', ORG, 12, True)
b += txt(365, 288, 'E', RED, 15, False, True)
save('elastisitet-langs-linja', b)

# ---------- 16) ANLEGGSMODELLEN: TILBUD SOM TRAPPETRINN ----------
b = header('Tilbudskurven i anleggsmodellen: hvert anlegg produserer til sin egen konstante enhetskostnad. Ordner vi anleggene fra billigst til dyrest, danner de en stigende trapp — hvert trinn er ett anlegg som slås på når prisen når enhetskostnaden. Den glatte, stigende T-kurven er trappa når anleggene er mange og små.')
b += axes()
costs = [252, 222, 194, 168, 144, 122]     # y (stigende pris = synkende y)
w = 50; xk = OX + 8; trapp = [(xk, costs[0])]
for c in costs:
    trapp.append((xk, c)); xk += w; trapp.append((xk, c))
b += polyline(trapp, '#7a9cc0', 2.0)        # trappa (lys blå)
b += line((OX+8, 262), (xk, 118), BLUE, 2.4)  # glatt T-kurve gjennom trappa
b += txt(xk-6, 132, 'T', BLUE, 16, False, True)
b += txt(OX+70, 270, 'hvert trinn = ett anlegg', '#555', 11, True)
save('anleggsmodell-tilbud', b)

# ---------- 17) ETTERSPØRSEL FRA BETALINGSVILLIGHET ----------
b = header('Etterspørselskurven bygges av betalingsvillighet: still kjøperne opp etter hvor mye de maksimalt vil betale, fra høyest til lavest. Hver kjøper er ett trinn — de med høy betalingsvillighet kjøper først. Den glatte, fallende E-kurven er denne trappa når kjøperne er mange.')
b += axes()
wtp = [86, 116, 148, 182, 214, 244]        # y stigende → synkende pris til høyre
w = 50; xk = OX + 8; trapp = [(xk, wtp[0])]
for c in wtp:
    trapp.append((xk, c)); xk += w; trapp.append((xk, c))
b += polyline(trapp, '#d19a94', 2.0)        # trappa (lys rød)
b += line((OX+8, 78), (xk, 252), RED, 2.4)  # glatt E-kurve
b += txt(xk-4, 260, 'E', RED, 16, False, True)
b += txt(OX+64, 96, 'hvert trinn = én kjøpers betalingsvillighet', '#555', 10, True)
save('etterspoersel-bv', b)

# ---------- 18) NATURLIG MONOPOL (fallende GK, konstant MK) ----------
def _px(xd): return OX + 10 + (xd-0.5)/(11-0.5)*(392-(OX+10))
def _py(pd): return OY - pd/12.0*(OY-(YTOP+8))
b = header('Naturlig monopol: gjennomsnittskostnaden GK faller mot den konstante marginalkostnaden MK fordi den store faste kostnaden fordeles på flere enheter. Regulatoren står i et dilemma: pris lik GK gjør bedriften selvfinansierende (punktet der E møter GK), men pris lik MK er samfunnsøkonomisk effektivt og gir underskudd (der E møter MK, under GK).')
b += axes()
c_, B_ = 2.0, 8.0
gk = [(_px(x), _py(c_ + B_/x)) for x in [1,1.3,1.7,2.2,2.8,3.6,4.6,6,7.5,9,11]]
b += polyline(gk, PUR, 2.4)
b += line((_px(0.5), _py(c_)), (392, _py(c_)), GRN, 2.2)
b += line((_px(0.5), _py(11-0.9*0.5)), (_px(11), _py(11-0.9*11)), RED, 2.4)
xGK, pGK = 9.01, 2.89          # E = GK
xMK, pMK = 10.0, 2.0           # E = MK
b += dot(_px(xGK), _py(pGK), ''); b += dot(_px(xMK), _py(pMK), '')
b += txt(_px(1)-2, _py(c_+B_/1)-6, 'GK', PUR, 14, False, True)
b += txt(300, _py(c_)-8, 'MK', GRN, 14, False, True)
b += txt(_px(4)+8, _py(11-0.9*4)-4, 'E', RED, 15, False, True)
b += txt(_px(xGK)-4, _py(pGK)-10, 'pris = GK', PUR, 11, True)
b += txt(_px(xMK)-2, OY+18, 'pris = MK', GRN, 11, True)
save('naturlig-monopol', b)

# ---------- 19) BUDSJETTLINJE OG INDIFFERENSKURVER ----------
def _qx(xd): return OX + xd/11.0*(392-OX)
def _qy(yd): return OY - yd/11.0*(OY-(YTOP+8))
b = header('Konsumentens tilpasning: budsjettlinja viser alle kombinasjoner av gode 1 og gode 2 som forbrukeren har råd til (helning minus prisforholdet). Indifferenskurven samler kombinasjoner med lik nytte og buer inn mot origo. Det beste valget er tangeringspunktet der budsjettlinja akkurat berører den høyeste nåbare indifferenskurven.')
b += axes('x₁', 'x₂')
# budsjettlinje fra (0,10) til (10,0); optimum Cobb-Douglas i (5,5)
b += line((_qx(0), _qy(10)), (_qx(10), _qy(0)), '#111', 2.2)
# indifferenskurve x1*x2 = 25 (tangerer budsjettlinja i (5,5))
ind = [(_qx(x), _qy(25.0/x)) for x in [2.6,3,3.5,4,4.5,5,5.6,6.3,7.2,8.3,9.6]]
b += polyline(ind, PUR, 2.4)
# en lavere (nåbar, men dårligere) og en høyere (unåbar) indifferenskurve, svakt
b += polyline([(_qx(x), _qy(12.0/x)) for x in [1.4,1.8,2.4,3,4,5,6.5,8.5]], PUR, 1.3, '4 3')
b += dot(_qx(5), _qy(5), '')
b += txt(_qx(5)+7, _qy(5)-6, 'tilpasning', '#222', 12, True)
b += txt(_qx(6.6), _qy(25.0/6.6)+2, 'indifferenskurve', PUR, 11, True)
b += txt(_qx(7.2), _qy(3.2)+16, 'budsjettlinje', '#111', 11, True)
save('budsjett-indifferens', b)

print('\nFerdig — figurbiblioteket generert (kjerne + gjenbruks + hjelpefigurer).')
