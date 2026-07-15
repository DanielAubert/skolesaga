#!/usr/bin/env python3
"""Generator-bibliotek for KONSEPTUELLE figurer i høyskole-tekstfag
(exphil03/jus1111/psy1010/stv1100).

Fire familier, alle i husets stil (Georgia serif, samme farger/piler som
gen-mikrofigurer.py):
  A. matrise()        — sammenligningsmatrise / 2x2-typologi (auto cellestorrelse)
  B. boks-og-pil      — flyt_vertikal / flyt_forgren / distinksjon / beslutningstre
                        / taksonomi_trapp / partsforhold / argumentkart
  C. akse             — tidslinje() / spektrum()
  D. plott (numpy)    — normalfordeling() / spredningsplott()  (EKSAKT geometri)

Nokkelpoeng: bokser/celler dimensjoneres fra MALT tekst (approx. Georgia-bredde)
med automatisk ordbryting, sa etiketter aldri flyter utenfor eller overlapper —
det gjentagende handteringsproblemet ved handtegning.

Bruk som bibliotek (importer byggerne) eller `python3 gen-tekstfigurer.py --demo <dir>`
for a generere valideringsfigurer.
"""
import sys, os, math, html

# ---------------------------------------------------------------- stil
SERIF = "Georgia, 'Times New Roman', serif"
RED, BLUE, GRN, PUR, GREY, INK = '#c0392b', '#2471a3', '#1e8449', '#7d3c98', '#666', '#222'
# lyse fyll for bokser (par med kant over)
FILL = {'blue':'#eaf1f8','red':'#fdecea','green':'#eafaf0','purple':'#f4f0fa',
        'grey':'#f2f2f2','yellow':'#fdf6e3','ink':'#eee'}
EDGE = {'blue':BLUE,'red':RED,'green':GRN,'purple':PUR,'grey':GREY,'ink':INK,'yellow':'#b8860b'}

# approx. tegn-bredde som andel av font-size for Georgia (proporsjonal serif)
_WIDE='mwMW@%'; _NARROW="iljtfI.,:;'!|() "
def _cw(ch):
    if ch in _WIDE: return 0.92
    if ch in _NARROW: return 0.30
    if ch.isupper(): return 0.68
    if ch.isdigit(): return 0.52
    return 0.50
def text_w(s, fs):
    return sum(_cw(c) for c in s) * fs

def wrap(text, fs, maxw):
    """Grådig ordbryting til pikselbredde. Respekterer eksplisitte \n."""
    out = []
    for para in text.split('\n'):
        words = para.split(' ')
        line = ''
        for w in words:
            trial = (line + ' ' + w).strip()
            if line and text_w(trial, fs) > maxw:
                out.append(line); line = w
            else:
                line = trial
        out.append(line)
    return out or ['']

def esc(s): return html.escape(str(s), quote=True)

# ---------------------------------------------------------------- SVG-primitiver
class SVG:
    def __init__(self, w, h, label):
        self.w, self.h = w, h
        self.parts = [
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'font-family="{SERIF}" role="img" aria-label="{esc(label)}">',
            f'<rect width="{w}" height="{h}" fill="#ffffff"/>']
    def raw(self, s): self.parts.append(s)
    def rect(self, x, y, w, h, fill, stroke, sw=1.8, rx=8):
        self.parts.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" '
                          f'rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
    def line(self, x1, y1, x2, y2, stroke=INK, sw=1.6, dash=None):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        self.parts.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" '
                          f'stroke="{stroke}" stroke-width="{sw}"{d}/>')
    def poly(self, pts, fill=INK, stroke='none', sw=0, op=None):
        p = ' '.join(f'{x:.1f},{y:.1f}' for x,y in pts)
        o = f' fill-opacity="{op}"' if op is not None else ''
        s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke!='none' else ''
        self.parts.append(f'<polygon points="{p}" fill="{fill}"{o}{s}/>')
    def polyline(self, pts, stroke=INK, sw=2.4, dash=None):
        p = ' '.join(f'{x:.1f},{y:.1f}' for x,y in pts)
        d = f' stroke-dasharray="{dash}"' if dash else ''
        self.parts.append(f'<polyline points="{p}" fill="none" stroke="{stroke}" stroke-width="{sw}"{d}/>')
    def txt(self, x, y, s, fs=13, fill=INK, anchor='middle', bold=False, ital=False):
        b = ' font-weight="bold"' if bold else ''
        i = ' font-style="italic"' if ital else ''
        self.parts.append(f'<text x="{x:.1f}" y="{y:.1f}" font-size="{fs}" fill="{fill}" '
                          f'text-anchor="{anchor}"{b}{i}>{esc(s)}</text>')
    def lines(self, cx, y0, lines, fs, fill=INK, bold=False, lh=None, anchor='middle'):
        lh = lh or fs*1.28
        for i, ln in enumerate(lines):
            self.txt(cx, y0 + i*lh, ln, fs, fill, anchor, bold)
    def arrow(self, x1, y1, x2, y2, stroke=INK, sw=1.8, head=7):
        """Rett pil med hode i (x2,y2)."""
        ang = math.atan2(y2-y1, x2-x1)
        bx, by = x2 - head*math.cos(ang), y2 - head*math.sin(ang)
        self.line(x1, y1, bx, by, stroke, sw)
        p = math.pi/2
        self.poly([(x2,y2),
                   (x2-head*math.cos(ang-0.4), y2-head*math.sin(ang-0.4)),
                   (x2-head*math.cos(ang+0.4), y2-head*math.sin(ang+0.4))], fill=stroke)
    def done(self):
        return '\n'.join(self.parts) + '\n</svg>\n'

# auto-dimensjonert boks: returnerer (svg-tegning skjer via s, faktisk bredde/hoyde)
def box(s, cx, cy, text, color='blue', fs=13, bold=True, maxw=150, padx=14, pady=12,
        minw=90, title=None, align_top=False):
    """Tegn en avrundet boks sentrert i (cx,cy). Bredde/hoyde fra brutt tekst.
    Returnerer (w,h)."""
    lines = wrap(text, fs, maxw)
    tw = max((text_w(l, fs) for l in lines), default=0)
    tlines = wrap(title, fs+1, maxw) if title else []
    if tlines:
        tw = max(tw, max(text_w(l, fs+1) for l in tlines))
    w = max(minw, tw + 2*padx)
    lh = fs*1.28
    nlt = len(tlines)
    h = 2*pady + (nlt*(fs+1)*1.28 if nlt else 0) + len(lines)*lh
    x, y = cx - w/2, cy - h/2
    s.rect(x, y, w, h, FILL[color], EDGE[color])
    ty = y + pady + fs
    if tlines:
        s.lines(cx, ty, tlines, fs+1, EDGE[color], bold=True, lh=(fs+1)*1.28)
        ty += nlt*(fs+1)*1.28 + 2
    s.lines(cx, ty, lines, fs, INK, bold=bold, lh=lh)
    return w, h

# ================================================================ FAMILIE A: matrise
def matrise(navn, tittel, col_heads, row_heads, cells, caption,
            highlight=None, colcolors=None, cellfs=12, cw=None, mincw=110):
    """Sammenligningsmatrise / 2x2. cells[r][c] = tekst. highlight=(r,c) uthever celle.
    colcolors: liste med fargenokler per datakolonne (kant/topp-tint)."""
    rows, cols = len(row_heads), len(col_heads)
    padx, pady = 10, 8
    hz = 30 if tittel else 12
    # kolonnebredde: rowhead-kolonne + datakolonner (auto fra innhold)
    def wmax(strings, fs): return max((text_w(s, fs) for s in strings if s), default=0)
    rh_w = max(mincw, wmax(row_heads, cellfs) + 2*padx)
    if cw is None:
        cw = []
        for c in range(cols):
            colcells = [col_heads[c]] + [cells[r][c] for r in range(rows)]
            # tillat 2-3 linjers bryting: mål lengste ord for min, mål med rimelig maxw
            w = max(mincw, min(210, wmax(colcells, cellfs) + 2*padx))
            cw.append(w)
    # radhoyder fra brutt tekst
    rowh = []
    header_lines = [wrap(col_heads[c], cellfs, cw[c]-2*padx) for c in range(cols)]
    hh = pady*2 + max(len(l) for l in header_lines)*cellfs*1.26
    for r in range(rows):
        cand = [wrap(row_heads[r], cellfs, rh_w-2*padx)]
        for c in range(cols):
            cand.append(wrap(cells[r][c], cellfs, cw[c]-2*padx))
        rowh.append(pady*2 + max(len(l) for l in cand)*cellfs*1.26)
    tblw = rh_w + sum(cw)
    tblh = hh + sum(rowh)
    W = int(tblw + 40)
    H = int(hz + tblh + 46)
    s = SVG(W, H, caption)
    ox, oy = (W-tblw)/2, hz + 6
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    # header-rad
    x = ox + rh_w
    for c in range(cols):
        col = (colcolors or ['grey']*cols)[c]
        s.rect(x, oy, cw[c], hh, FILL[col], EDGE[col], sw=1.4, rx=4)
        s.lines(x+cw[c]/2, oy+pady+cellfs, header_lines[c], cellfs, EDGE[col], bold=True, lh=cellfs*1.26)
        x += cw[c]
    # hjornecelle tom
    s.rect(ox, oy, rh_w, hh, '#ffffff', GREY, sw=1.4, rx=4)
    # datarader
    y = oy + hh
    for r in range(rows):
        s.rect(ox, y, rh_w, rowh[r], '#f7f7f7', GREY, sw=1.2, rx=4)
        s.lines(ox+rh_w/2, y+pady+cellfs, wrap(row_heads[r], cellfs, rh_w-2*padx),
                cellfs, INK, bold=True, lh=cellfs*1.26)
        x = ox + rh_w
        for c in range(cols):
            hot = highlight == (r, c)
            fill = '#fff6d6' if hot else '#ffffff'
            stroke = '#b8860b' if hot else GREY
            s.rect(x, y, cw[c], rowh[r], fill, stroke, sw=1.8 if hot else 1.0, rx=4)
            s.lines(x+cw[c]/2, y+pady+cellfs, wrap(cells[r][c], cellfs, cw[c]-2*padx),
                    cellfs, INK, bold=hot, lh=cellfs*1.26)
            x += cw[c]
        y += rowh[r]
    s.txt(W/2, H-16, caption_short(caption), 11, GREY)
    return navn, s.done()

def caption_short(c):
    return c if len(c) < 95 else c[:92]+'…'

# ================================================================ FAMILIE B: boks-og-pil
def flyt_vertikal(navn, tittel, steps, caption, colors=None, gap=26, maxw=250):
    """Vertikal pilkjede av bokser. steps = liste av tekst (evt. '\n' internt)."""
    n = len(steps)
    colors = colors or ['blue']*n
    # forhandsmål bokser
    tmp = SVG(10,10,'')
    dims = [box(tmp, 0,0, t, colors[i], maxw=maxw) for i,t in enumerate(steps)]
    bw = max(w for w,h in dims)
    total_h = sum(h for w,h in dims) + gap*(n-1)
    hz = 30 if tittel else 8
    W = int(bw + 60); H = int(hz + total_h + 40)
    s = SVG(W, H, caption)
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    cy = hz + dims[0][1]/2 + 4
    for i, t in enumerate(steps):
        w, h = box(s, W/2, cy, t, colors[i], maxw=maxw)
        if i < n-1:
            nexth = dims[i+1][1]
            y1 = cy + h/2
            y2 = cy + h/2 + gap
            s.arrow(W/2, y1+2, W/2, y2-2, INK, 2.0, head=8)
            cy = y2 + nexth/2
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

def flyt_forgren(navn, tittel, root, branches, caption, root_color='blue'):
    """Én rot-boks med piler ned til N grener side om side. branches = [(tekst,color),...]."""
    tmp = SVG(10,10,'')
    rd = box(tmp,0,0, root, root_color, maxw=300)
    bdims = [box(tmp,0,0, t, c, maxw=190) for t,c in branches]
    bw = max(w for w,h in bdims); bh = max(h for w,h in bdims)
    nb = len(branches)
    gapx = 30
    row_w = nb*bw + (nb-1)*gapx
    W = int(max(rd[0], row_w) + 60)
    hz = 30 if tittel else 10
    root_y = hz + rd[1]/2 + 4
    branch_y = root_y + rd[1]/2 + 52 + bh/2
    H = int(branch_y + bh/2 + 40)
    s = SVG(W, H, caption)
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    box(s, W/2, root_y, root, root_color, maxw=300)
    x0 = (W - row_w)/2 + bw/2
    for i,(t,c) in enumerate(branches):
        cx = x0 + i*(bw+gapx)
        s.arrow(W/2, root_y+rd[1]/2+2, cx, branch_y-bh/2-2, INK, 1.8, head=8)
        box(s, cx, branch_y, t, c, maxw=190)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

def distinksjon(navn, tittel, left, right, rows, caption, lcolor='blue', rcolor='red', midlabel=None):
    """To kolonner (venstre/hoyre) med rad-etiketter. left/right = kolonneoverskrift.
    rows = [(radlabel, venstretekst, hoyretekst), ...]."""
    return matrise(navn, tittel, [left, right],
                   [r[0] for r in rows],
                   [[r[1], r[2]] for r in rows],
                   caption, colcolors=[lcolor, rcolor])

import re as _re
def _split_answer(out, default='Nei'):
    """Trekk ut grensvar-prefiks ('Ja → ...' / 'Nei → ...') fra utfallsteksten.
    Returnerer (svar, ren_tekst). Uten prefiks: (default, out)."""
    m = _re.match(r'^\s*(Ja|Nei)\s*(?:→|->)\s*(.*)$', out, _re.S)
    if m:
        return m.group(1), m.group(2).strip()
    return default, out
def _anscol(a): return GRN if a == 'Ja' else RED

def beslutningstre(navn, tittel, gates, caption, end_yes=''):
    """Vertikal kjede av ja/nei-porter. gates = [(spørsmål, utfall), ...].
    Utfallet KAN prefikses med grensvaret: 'Ja → ...' eller 'Nei → ...' — da
    labeles sidegrenen med det svaret (og hovedløpet nedover med det motsatte),
    og prefikset fjernes fra boksteksten. Uten prefiks: sidegren = 'Nei',
    nedover = 'Ja'. Etiketter fargelegges etter SVARET (Ja=grønn, Nei=rød),
    uavhengig av geometri. end_yes = grønn sluttboks når hovedløpet når bunnen."""
    n = len(gates)
    tmp = SVG(10,10,'')
    parsed = [_split_answer(g[1]) for g in gates]        # (sidesvar, ren_tekst)
    downs = ['Nei' if side == 'Ja' else 'Ja' for side, _ in parsed]
    gdims = [box(tmp,0,0, g[0], 'yellow', maxw=230) for g in gates]
    odims = [box(tmp,0,0, ot, 'grey', maxw=170) for _, ot in parsed]
    gbw = max(w for w,h in gdims)
    obw = max(w for w,h in odims)
    gap = 40
    colx = 60 + gbw/2
    branchx = colx + gbw/2 + 60 + obw/2
    W = int(branchx + obw/2 + 40)
    hz = 30 if tittel else 10
    endh = box(tmp,0,0, end_yes, 'green', maxw=200)[1] if end_yes else 0
    end_extra = (gap + endh) if end_yes else 0
    H = int(hz + sum(h for w,h in gdims) + gap*(n-1) + end_extra + 52)
    s = SVG(W, H, caption)
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    cy = hz + gdims[0][1]/2 + 4
    for i,(q, _out) in enumerate(gates):
        side, otext = parsed[i]; down = downs[i]
        gw, gh = box(s, colx, cy, q, 'yellow', maxw=230)
        # sidegren til høyre (labelet med sidesvaret)
        s.arrow(colx+gw/2+2, cy, branchx-obw/2-2, cy, GREY, 1.6, head=7)
        s.txt((colx+gw/2+branchx-obw/2)/2, cy-6, side, 10, _anscol(side), bold=True)
        box(s, branchx, cy, otext, 'grey', maxw=170)
        if i < n-1:
            y1 = cy+gh/2; y2 = cy+gh/2+gap
            s.arrow(colx, y1+2, colx, y2-2, _anscol(down), 2.0, head=8)
            s.txt(colx+10, (y1+y2)/2+3, down, 10, _anscol(down), bold=True, anchor='start')
            cy = y2 + gdims[i+1][1]/2
    if end_yes:
        y1 = cy+gdims[-1][1]/2
        last_down = downs[-1]
        s.arrow(colx, y1+2, colx, y1+gap-2, _anscol(last_down), 2.0, head=8)
        s.txt(colx+10, y1+gap/2+3, last_down, 10, _anscol(last_down), bold=True, anchor='start')
        box(s, colx, y1+gap+endh/2, end_yes, 'green', maxw=200)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

def taksonomi_trapp(navn, tittel, steps, caption, colors=None):
    """Trappesteg oppover mot hoyre (nominal→ordinal→…). steps = liste tekst."""
    n = len(steps)
    colors = colors or ['blue']*n
    tmp = SVG(10,10,'')
    dims = [box(tmp,0,0, t, colors[i], maxw=170) for i,t in enumerate(steps)]
    bw = max(w for w,h in dims); bh = max(h for w,h in dims)
    stepx = bw + 16; stepy = bh*0.82   # bokser side om side, steg opp
    W = int(bw + stepx*(n-1) + 60)
    hz = 30 if tittel else 10
    H = int(hz + bh + stepy*(n-1) + 46)
    s = SVG(W, H, caption)
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    base_y = H - 40
    prev = None
    for i, t in enumerate(steps):
        cx = 40 + bw/2 + i*stepx
        cy = base_y - i*stepy - bh/2
        if prev:
            # trinn-pil fra forrige boks' topp-hoyre til denne boks' bunn-venstre
            s.arrow(prev[0]+bw/2, prev[1]-bh/2, cx-bw/2, cy+bh/2, GREY, 1.8, head=8)
        box(s, cx, cy, t, colors[i], maxw=170)
        prev = (cx, cy)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

def partsforhold(navn, tittel, nodes, edges, caption):
    """Noder pa en horisontal rekke med relasjonspiler. nodes=[(tekst,color),...].
    edges=[(i, j, label), ...] pil fra node i til node j."""
    tmp = SVG(10,10,'')
    dims = [box(tmp,0,0, t, c, maxw=150) for t,c in nodes]
    bw = max(w for w,h in dims); bh = max(h for w,h in dims)
    n = len(nodes); gap = 70
    W = int(n*bw + (n-1)*gap + 60)
    hz = 30 if tittel else 10
    H = int(hz + bh + 70)
    s = SVG(W, H, caption)
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    cy = hz + bh/2 + 8
    xs = [40 + bw/2 + i*(bw+gap) for i in range(n)]
    for (i,j,lab) in edges:
        x1 = xs[i]+bw/2; x2 = xs[j]-bw/2
        s.arrow(x1+2, cy, x2-2, cy, INK, 1.8, head=8)
        if lab: s.txt((x1+x2)/2, cy-8, lab, 10, GREY)
    for i,(t,c) in enumerate(nodes):
        box(s, xs[i], cy, t, c, maxw=150)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

def argumentkart(navn, tittel, premises, conclusion, caption, prem_color='grey', concl_color='green'):
    """Premiss-bokser stablet, pil ned til konklusjon."""
    steps = premises
    tmp = SVG(10,10,'')
    pdims = [box(tmp,0,0, p, prem_color, maxw=280) for p in premises]
    cd = box(tmp,0,0, conclusion, concl_color, maxw=280)
    bw = max([w for w,h in pdims]+[cd[0]])
    gap = 20
    hz = 30 if tittel else 10
    total = sum(h for w,h in pdims)+gap*len(premises)+cd[1]
    W = int(bw+60); H = int(hz+total+40)
    s = SVG(W,H,caption)
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    cy = hz + pdims[0][1]/2 + 4
    for i,p in enumerate(premises):
        w,h = box(s, W/2, cy, p, prem_color, maxw=280)
        y2 = cy+h/2+gap
        s.line(W/2, cy+h/2+2, W/2, y2-2, GREY, 1.4)
        if i<len(premises)-1:
            cy = y2 + pdims[i+1][1]/2
        else:
            cy = y2 + cd[1]/2
    # siste pil med hode inn i konklusjon
    s.arrow(W/2, cy-cd[1]/2-gap+2, W/2, cy-cd[1]/2-2, INK, 2.0, head=9)
    box(s, W/2, cy, conclusion, concl_color, maxw=280)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

# ================================================================ FAMILIE C: akse
def tidslinje(navn, tittel, markers, caption, zones=None, span=(0,10)):
    """Horisontal tidsakse. markers=[(pos, label, over?), ...] pos i [span].
    zones=[(a,b,label,color), ...] skraverte soner."""
    W, H = 560, 190 + (26 if tittel else 0)
    s = SVG(W, H, caption)
    hz = 30 if tittel else 8
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    ax_y = hz + 110
    ox, ex = 60, W-40
    def X(p): return ox + (p-span[0])/(span[1]-span[0])*(ex-ox)
    for (a,b,lab,col) in (zones or []):
        s.poly([(X(a),ax_y-16),(X(b),ax_y-16),(X(b),ax_y+16),(X(a),ax_y+16)],
               fill=EDGE[col], op=0.18)
        s.txt((X(a)+X(b))/2, ax_y-24, lab, 11, EDGE[col], bold=True)
    s.line(ox, ax_y, ex, ax_y, INK, 1.6)
    s.poly([(ex+10,ax_y),(ex+2,ax_y-4),(ex+2,ax_y+4)], fill=INK)
    for i,(p, lab, over) in enumerate(markers):
        x = X(p)
        s.line(x, ax_y-8, x, ax_y+8, INK, 1.6)
        s.raw(f'<circle cx="{x:.1f}" cy="{ax_y}" r="3.5" fill="{INK}"/>')
        ly = ax_y-20 if over else ax_y+22
        for j, ln in enumerate(wrap(lab, 11, 120)):
            s.txt(x, ly + (j*14 if not over else -(len(wrap(lab,11,120))-1-j)*14), ln, 11, INK)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

def spektrum(navn, tittel, left_pole, right_pole, mark_label, caption, mark_pos=0.5):
    """Én akse med to poler og et markert balansepunkt."""
    W, H = 540, 150 + (26 if tittel else 0)
    s = SVG(W, H, caption)
    hz = 30 if tittel else 8
    if tittel: s.txt(W/2, 22, tittel, 15, INK, bold=True)
    y = hz + 70
    ox, ex = 90, W-90
    s.line(ox, y, ex, y, INK, 1.8)
    s.poly([(ox-10,y),(ox-2,y-5),(ox-2,y+5)], fill=BLUE)
    s.poly([(ex+10,y),(ex+2,y-5),(ex+2,y+5)], fill=RED)
    s.lines(ox-14, y+4, wrap(left_pole,12,90), 12, BLUE, bold=True, anchor='end', lh=15)
    s.lines(ex+14, y+4, wrap(right_pole,12,90), 12, RED, bold=True, anchor='start', lh=15)
    mx = ox + mark_pos*(ex-ox)
    s.line(mx, y-14, mx, y+14, INK, 1.6)
    s.raw(f'<circle cx="{mx:.1f}" cy="{y}" r="5" fill="{INK}"/>')
    s.lines(mx, y-22, wrap(mark_label,12,160), 12, INK, bold=True, lh=15)
    s.txt(W/2, H-14, caption_short(caption), 11, GREY)
    return navn, s.done()

# ================================================================ FAMILIE D: plott (numpy)
def _axes(s, ox, oy, xw, yh, xlab, ylab):
    s.line(ox, oy, ox+xw+12, oy, INK, 1.6)
    s.line(ox, oy, ox, oy-yh-12, INK, 1.6)
    s.poly([(ox+xw+12,oy),(ox+xw+4,oy-4),(ox+xw+4,oy+4)], fill=INK)
    s.poly([(ox,oy-yh-12),(ox-4,oy-yh-4),(ox+4,oy-yh-4)], fill=INK)
    if xlab: s.txt(ox+xw+16, oy+5, xlab, 13, INK, anchor='start', ital=True)
    if ylab: s.txt(ox-8, oy-yh-16, ylab, 13, INK, ital=True)

def normalfordeling(navn, tittel, caption, bands=True, mu=0, sd=1):
    """Standard normalfordeling med 68-95-99,7-band (EKSAKT: sampler PDF)."""
    import numpy as np
    W, H = 500, 320 + (24 if tittel else 0)
    s = SVG(W, H, caption)
    hz = 24 if tittel else 6
    if tittel: s.txt(W/2, 20, tittel, 15, INK, bold=True)
    ox, oy = 40, H-56
    xw, yh = W-80, H-hz-90
    lo, hi = mu-3.6*sd, mu+3.6*sd
    xs = np.linspace(lo, hi, 240)
    pdf = np.exp(-0.5*((xs-mu)/sd)**2)
    pmax = pdf.max()
    def X(x): return ox + (x-lo)/(hi-lo)*xw
    def Y(p): return oy - p/pmax*yh
    band_defs = [(1,'#2471a3','68%'),(2,'#7d3c98','95%'),(3,'#1e8449','99,7%')]
    if bands:
        for k,col,lab in reversed(band_defs):
            m = (xs>=mu-k*sd)&(xs<=mu+k*sd)
            pts=[(X(lo),oy)]+[(X(x),Y(p)) for x,p in zip(xs[m],pdf[m])]+[(X(xs[m][-1]),oy)]
            pts=[(X(x),Y(p)) for x,p in zip(xs[m],pdf[m])]
            poly=[(X(xs[m][0]),oy)]+pts+[(X(xs[m][-1]),oy)]
            s.poly(poly, fill=col, op=0.16)
    s.polyline([(X(x),Y(p)) for x,p in zip(xs,pdf)], stroke=RED, sw=2.6)
    _axes(s, ox, oy, xw, yh, '', '')
    # SD-merker
    for k in range(-3,4):
        x=X(mu+k*sd)
        s.line(x, oy, x, oy+5, INK, 1.2)
        s.txt(x, oy+18, ('μ' if k==0 else f'{k:+d}σ'), 11, INK)
    if bands:
        for k,col,lab in band_defs:
            s.txt(X(mu), Y(pmax*[0,0.62,0.28,0.09][k]), lab, 12, col, bold=True)
    s.txt(W/2, H-12, caption_short(caption), 11, GREY)
    return navn, s.done()

def spredningsplott(navn, tittel, caption, r=0.7, n=60, xlab='X', ylab='Y', seed=1, reg=True):
    """Spredningsplott med mål-korrelasjon r (EKSAKT: genererer punkter med gitt r)."""
    import numpy as np
    rng = np.random.default_rng(seed)
    z1, z2 = rng.standard_normal(n), rng.standard_normal(n)
    x = z1
    y = r*z1 + math.sqrt(max(0,1-r*r))*z2
    # normaliser til plott-vindu
    def scale(v): return (v-v.min())/(np.ptp(v)+1e-9)
    xs, ys = scale(x), scale(y)
    W, H = 360, 300 + (24 if tittel else 0)
    s = SVG(W, H, caption)
    hz = 24 if tittel else 6
    if tittel: s.txt(W/2, 20, tittel, 14, INK, bold=True)
    ox, oy = 46, H-50
    xw, yh = W-80, H-hz-80
    def PX(v): return ox + 8 + v*(xw-16)
    def PY(v): return oy - 8 - v*(yh-16)
    _axes(s, ox, oy, xw, yh, xlab, ylab)
    if reg and abs(r)>0.15:
        b = np.polyfit(xs, ys, 1)
        x0,x1 = 0,1
        s.line(PX(x0), PY(b[0]*x0+b[1]), PX(x1), PY(b[0]*x1+b[1]), BLUE, 2.0, dash='6 4')
    for xi, yi in zip(xs, ys):
        s.raw(f'<circle cx="{PX(xi):.1f}" cy="{PY(yi):.1f}" r="3.2" fill="{RED}" fill-opacity="0.72"/>')
    s.txt(ox+xw-6, oy-yh+6, f'r ≈ {r:+.2f}'.replace('.',','), 13, INK, anchor='end', bold=True)
    s.txt(W/2, H-12, caption_short(caption), 11, GREY)
    return navn, s.done()

# ================================================================ demo / validering
def _save(outdir, navn, body):
    with open(os.path.join(outdir, navn+'.svg'), 'w') as f: f.write(body)
    print('skrev', navn+'.svg')

def demo(outdir):
    os.makedirs(outdir, exist_ok=True)
    figs = []
    # A. sammenligningsmatrise (stv1100-1-2 Berlin vs Pettit)
    figs.append(matrise('demo-matrise-berlin-pettit', 'Frihet: Berlin vs. Pettit',
        ['Berlin (negativ frihet)', 'Pettit (frihet som ikke-dominans)'],
        ['Grunnspørsmål', 'Hva teller som ufrihet', 'Slaven med snill herre', 'Liberal despot'],
        [['Blir jeg faktisk hindret?', 'Kan noen hindre meg vilkårlig?'],
         ['Faktisk innblanding', 'Mulighet for ukontrollert innblanding'],
         ['Fri (ingen blander seg)', 'Ufri (herren KAN gripe inn)'],
         ['Kan være fri', 'Ufri (makt uten kontroll)']],
        'Berlin måler faktisk innblanding; Pettit måler muligheten for vilkårlig innblanding — derfor er slaven med en snill herre fri for Berlin, men ufri for Pettit.',
        highlight=(2,1), colcolors=['blue','red']))
    # A. 2x2-typologi (stv1100-1-1 liberal despot)
    figs.append(matrise('demo-typologi-frihet', 'To frihetsbegreper er logisk uavhengige',
        ['Positiv frihet: JA', 'Positiv frihet: NEI'],
        ['Negativ frihet: JA', 'Negativ frihet: NEI'],
        [['Full frihet', 'Liberal despot (lar deg i fred, men du styrer ikke)'],
         ['Selvstyre uten rom', 'Ufri på begge vis']],
        'De to frihetsbegrepene kan opptre uavhengig: den liberale despoten gir negativ frihet uten positiv.',
        highlight=(0,1), colcolors=['green','grey']))
    # B. vertikal flyt (stv1100-2-1 Rawls)
    figs.append(flyt_vertikal('demo-flyt-rawls', "Rawls' argumentkjede",
        ['Utgangsposisjon + slør av uvitenhet', 'Trussel og fordel nøytralisert',
         'Radikal usikkerhet om egen plass', 'Velg maximin-regelen',
         'Beskytt de dårligst stilte', 'De to rettferdighetsprinsippene'],
        'Fra sløret av uvitenhet følger maximin-resonnementet fram til de to prinsippene.',
        colors=['purple','purple','purple','blue','blue','green']))
    # B. distinksjon (stv1100-1-1)
    figs.append(distinksjon('demo-distinksjon-frihet', 'Negativ vs. positiv frihet',
        'Negativ frihet', 'Positiv frihet',
        [('Grunnspørsmål', 'Hvor mange dører er åpne?', 'Hvem styrer meg?'),
         ('Kjerne', 'Fravær av andres hindring', 'Selvstyre / selvrealisering'),
         ('Fare', 'Formell frihet uten evne', 'Kan rettferdiggjøre tvang «for ditt eget beste»')],
        'Negativ frihet handler om fravær av hindringer; positiv frihet om selvstyre.'))
    # B. beslutningstre (jus1111-1.1 avtaleinngåelse)
    figs.append(beslutningstre('demo-tre-avtale', 'Er bindende avtale inngått?',
        [('Foreligger tilbud? (§ 9: bestemt og ment å binde)', 'Nei → ingen avtale, kun invitasjon'),
         ('Rettidig aksept? (§§ 2–3)', 'Nei → tilbudet er falt bort'),
         ('Samsvarende aksept? (§ 6)', 'Nei → avvikende aksept = nytt tilbud § 6(1)')],
        'Alle tre vilkår må være oppfylt for binding; hvert nei grener til sitt utfall.',
        end_yes='Bindende avtale inngått'))
    # B. taksonomi-trapp (psy1010-1-2 målenivåer)
    figs.append(taksonomi_trapp('demo-trapp-maalenivaa', 'Målenivåer bygger på hverandre',
        ['Nominal\n(bare kategorier)', 'Ordinal\n(+ rangering)',
         'Intervall\n(+ like avstander)', 'Forhold\n(+ ekte nullpunkt)'],
        'Hvert nivå arver egenskapene under og legger til én ny.',
        colors=['grey','blue','purple','green']))
    # B. partsforhold (jus1111-2.5)
    figs.append(partsforhold('demo-parts-kontroll', 'Kontrollansvar i kontraktskjede',
        [('Kjøper','blue'),('Selger','purple'),('Underleverandør','red')],
        [(1,0,'leverer'),(2,1,'svikter')],
        'Selgers kontrollansvar kan strekke seg til svikt hos tredjeperson (§ 27(2)).'))
    # B. argumentkart (exphil03-3.1 funksjonsargumentet)
    figs.append(argumentkart('demo-argument-funksjon', 'Funksjonsargumentet (Aristoteles)',
        ['P1: Alt med en funksjon har sitt gode i å utføre den godt',
         'P2: Mennesket har en særegen funksjon — rasjonell aktivitet',
         'P3: Å utføre den godt = å handle i tråd med dyd'],
        'K: Menneskets gode (eudaimonia) er rasjonell aktivitet i tråd med dyd',
        'Fra premissene om funksjon og dyd følger konklusjonen om det gode liv.'))
    # C. tidslinje (jus1111-1.1)
    figs.append(tidslinje('demo-tidslinje-tilbakekall', 'Tilbakekall av tilbud (§ 7)',
        [(2,'Tilbud kommet frem', True),(5,'Tilbakekall kommet frem', False),
         (7.5,'Mottaker leser (kunnskap)', True)],
        'Tilbakekall må komme frem før eller samtidig med at mottaker får kunnskap om tilbudet.',
        zones=[(5,7.5,'angrevindu','yellow')]))
    # C. spektrum (stv1100-2.5)
    figs.append(spektrum('demo-spektrum-pluralisme', 'Universalisme vs. pluralisme',
        'Universalisme', 'Pluralisme', 'Pragmatisk pluralisme',
        'Balansepunkt: pragmatisk pluralisme mellom de to polene.', mark_pos=0.55))
    # D. normalfordeling (psy1010-3.2)
    figs.append(normalfordeling('demo-normal-6895997', '68–95–99,7-regelen',
        'Andelen av observasjoner innenfor ±1, ±2 og ±3 standardavvik fra gjennomsnittet.'))
    # D. spredningsplott (psy1010-5.1)
    figs.append(spredningsplott('demo-spredning-r085', 'Sterk positiv sammenheng',
        'Punktene grupperer seg tett rundt en stigende linje (r ≈ +0,85).', r=0.85, seed=3))
    for navn, body in figs:
        _save(outdir, navn, body)
    print(f'\n{len(figs)} valideringsfigurer skrevet til {outdir}')

if __name__ == '__main__':
    if len(sys.argv) >= 2 and sys.argv[1] == '--demo':
        demo(sys.argv[2] if len(sys.argv) > 2 else '/tmp/tekstfig')
    else:
        print(__doc__)
