#!/usr/bin/env python3
"""Data-eksakte figurer for ECON1210 8.5 Oppgave 2 (Strømmarkedet).
E: x=1000-2p  (p=500-x/2)   T: x=2p-200 (p=100+x/2)  → A=(400,300)
c): T': x=2p-400 (p=200+x/2) → B=(300,350). Lekkasje: ved p0=300 tilbyr T' 200,
omsatt faller bare til 300 (bortfall 200 GWh vs omsetningsfall 100 GWh)."""
import os, sys
OUT = sys.argv[1] if len(sys.argv) > 1 else 'public/images/textbook/econ1210'
os.makedirs(OUT, exist_ok=True)
RED, BLUE, GRN, GREY = '#c0392b', '#2471a3', '#1a7f37', '#666'
OX, OY = 70, 300
# data→SVG: x 0..1100 → 70..400 ; p 0..550 → 300..40
def px(xd): return 70 + xd/1100*330
def py(pd): return 300 - pd/550*260

def header(label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 360" '
            f'font-family="Georgia, \'Times New Roman\', serif" role="img" aria-label="{label}">\n'
            f'  <rect width="440" height="360" fill="#ffffff"/>\n')
def axes(xlab='x (GWh)', ylab='p (øre/kWh)'):
    return (f'  <line x1="{OX}" y1="{OY}" x2="410" y2="{OY}" stroke="#222" stroke-width="1.6"/>\n'
            f'  <line x1="{OX}" y1="{OY}" x2="{OX}" y2="30" stroke="#222" stroke-width="1.6"/>\n'
            f'  <polygon points="410,{OY} 402,{OY-4} 402,{OY+4}" fill="#222"/>\n'
            f'  <polygon points="{OX},30 {OX-4},38 {OX+4},38" fill="#222"/>\n'
            f'  <text x="406" y="{OY+26}" font-size="13" font-style="italic" text-anchor="end">{xlab}</text>\n'
            f'  <text x="{OX-8}" y="24" font-size="13" font-style="italic">{ylab}</text>\n')
def line(x1,y1,x2,y2,color,w=2.4,dash=None):
    d=f' stroke-dasharray="{dash}"' if dash else ''
    return f'  <line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{color}" stroke-width="{w}"{d}/>\n'
def dot(xd,pd,lab='',dx=8,dy=-8):
    x,y=px(xd),py(pd)
    s=f'  <circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="#222"/>\n'
    if lab: s+=f'  <text x="{x+dx:.1f}" y="{y+dy:.1f}" font-size="16" font-weight="bold">{lab}</text>\n'
    return s
def dash_to_axes(xd,pd):
    x,y=px(xd),py(pd)
    return (line(OX,y,x,y,GREY,1.2,'5 4')+line(x,y,x,OY,GREY,1.2,'5 4'))
def tick(xd,pd,s,dx=0,dy=0,anchor='middle',color='#000',size=13):
    x,y=px(xd),py(pd)
    return f'  <text x="{x+dx:.1f}" y="{y+dy:.1f}" font-size="{size}" fill="{color}" text-anchor="{anchor}">{s}</text>\n'
def lbl(xd,pd,s,color,dx=0,dy=0,size=16):
    return f'  <text x="{px(xd)+dx:.1f}" y="{py(pd)+dy:.1f}" font-size="{size}" fill="{color}" font-weight="bold">{s}</text>\n'

# ---------- b) LIKEVEKT ----------
b = header('Strømmarkedet i likevekt: fallende E-kurve (skjærer prisaksen ved 500, mengdeaksen ved 1000) og stigende T-kurve (skjærer prisaksen ved 100) krysser i likevektspunktet A med mengde 400 GWh og pris 300 øre/kWh.')
b += axes()
b += line(px(0),py(500), px(1000),py(0), RED)     # E: (0,500)-(1000,0)
b += line(px(0),py(100), px(800),py(500), BLUE)    # T: (0,100)-(800,500)
b += dash_to_axes(400,300)
b += dot(400,300,'A')
# kurve-etiketter
b += f'  <text x="{px(880):.1f}" y="{py(120)-4:.1f}" font-size="16" fill="{RED}" font-weight="bold" font-style="italic">E</text>\n'
b += f'  <text x="{px(720):.1f}" y="{py(500)-4:.1f}" font-size="16" fill="{BLUE}" font-weight="bold" font-style="italic">T</text>\n'
# akse-avlesninger
b += tick(0,500,'500',dx=-6,dy=5,anchor='end')
b += tick(0,100,'100',dx=-6,dy=5,anchor='end')
b += tick(0,300,'p₀=300',dx=-6,dy=5,anchor='end',color=GREY)
b += tick(1000,0,'1000',dx=0,dy=16)
b += tick(400,0,'x₀=400',dx=0,dy=16,color=GREY)
open(f'{OUT}/strommarked-likevekt.svg','w').write(b+'</svg>\n'); print('skrev strommarked-likevekt')

# ---------- c) TILBUDSKUTT MED LEKKASJE ----------
c = header('Tilbudskutt i strømmarkedet: T-kurven skifter parallelt innover til T-prime (x=2p-400). Ny likevekt B (mengde 300, pris 350) ligger oppe til venstre for den opprinnelige likevekten A (400, 300). Ved den gamle prisen 300 tilbyr det skadde markedet bare 200 GWh, men omsatt mengde faller bare til 300 fordi den høyere prisen trekker inn igjen anlegg — lekkasjen.')
c += axes()
c += line(px(0),py(500), px(1000),py(0), RED)      # E
c += line(px(0),py(100), px(800),py(500), BLUE)     # T
c += line(px(0),py(200), px(600),py(500), BLUE, dash='6 4')  # T': (0,200)-(600,500)
c += dash_to_axes(400,300)
c += dash_to_axes(300,350)
c += dot(400,300,'A')
c += dot(300,350,'B',dx=-20,dy=-6)
c += f'  <text x="{px(880):.1f}" y="{py(120)-4:.1f}" font-size="16" fill="{RED}" font-weight="bold" font-style="italic">E</text>\n'
c += f'  <text x="{px(720):.1f}" y="{py(500)-4:.1f}" font-size="16" fill="{BLUE}" font-weight="bold" font-style="italic">T</text>\n'
c += f'  <text x="{px(560):.1f}" y="{py(500)-4:.1f}" font-size="15" fill="{BLUE}" font-weight="bold" font-style="italic">T′</text>\n'
c += tick(0,300,'300',dx=-6,dy=5,anchor='end',color=GREY)
c += tick(0,350,'350',dx=-6,dy=-3,anchor='end',color=GREY)
c += tick(300,0,'300',dx=0,dy=16,color=GREY,size=12)
c += tick(400,0,'400',dx=0,dy=32,color=GREY,size=12)
open(f'{OUT}/strommarked-kutt.svg','w').write(c+'</svg>\n'); print('skrev strommarked-kutt')
