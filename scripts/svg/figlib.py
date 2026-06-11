#!/usr/bin/env python3
"""
figlib - deterministisk SVG-figurbibliotek for Skolesagas matematikkbøker.

Alle figurer tegnes i 1600x900 viewBox (16:9) og lagres som .svg.
Presisjon garanteres av koden - ingen bildemodell involvert.

Bruk:
    from figlib import Fig, PALETTES
    fig = Fig('1p')
    fig.number_line(...)
    fig.save('public/images/content/1p/1p-1-1-tallinje.svg')
"""
import math
import os

W, H = 1600, 900

# Fargepaletter per bok (fra promptfilenes stilspesifikasjoner)
PALETTES = {
    '5':   dict(bg='#FFFDF5', main='#4A9FE0', accent='#F25C54', extra='#8AC926', warn='#FFCA3A', text='#2B2D42', grid='#E5E0D5', dark=False),
    '6':   dict(bg='#FFFDF5', main='#17A2B8', accent='#F2762C', extra='#9ACD32', warn='#E0507A', text='#2B2D42', grid='#E5E0D5', dark=False),
    '7':   dict(bg='#FFFDF5', main='#1E6E8C', accent='#F2762C', extra='#6AA84F', warn='#F4B400', text='#2B2D42', grid='#E5E0D5', dark=False),
    '1p':  dict(bg='#FFFFFF', main='#1F4E79', accent='#E8762C', extra='#6699BB', warn='#C0504D', text='#1A1A2E', grid='#D8E0EA', dark=False),
    '1t':  dict(bg='#FCFCFA', main='#3B4856', accent='#2A7FC1', extra='#E8762C', warn='#C0504D', text='#22272E', grid='#E2E6EA', dark=False),
    '2p':  dict(bg='#FFFFFF', main='#0F5257', accent='#E4572E', extra='#5B8C8F', warn='#A23E48', text='#15252A', grid='#DAE5E4', dark=False),
    '2py': dict(bg='#FFFFFF', main='#1B3A5C', accent='#F2A900', extra='#5E81A6', warn='#C0504D', text='#16222E', grid='#DCE3EB', dark=False),
    's1':  dict(bg='#FDFDFD', main='#0E8060', accent='#5E3B8C', extra='#54A88C', warn='#C0504D', text='#1C2826', grid='#DFE8E4', dark=False),
    's2':  dict(bg='#FDFDFD', main='#1B4F8A', accent='#C0392B', extra='#5C84B1', warn='#8E44AD', text='#1A2433', grid='#DEE5EE', dark=False),
    'r1':  dict(bg='#0E1B2C', main='#39FF8E', accent='#FFD24A', extra='#39C6FF', warn='#FF6E91', text='#F2F6FA', grid='#23364D', dark=True),
    'r2':  dict(bg='#0A1220', main='#28E0E0', accent='#FFC23E', extra='#FF5FA8', warn='#9CFF57', text='#F2F6FA', grid='#1E3048', dark=True),
}

FONT = "system-ui, 'Segoe UI', Helvetica, Arial, sans-serif"


def esc(s):
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


class Fig:
    def __init__(self, book, pad=60):
        self.p = PALETTES[book]
        self.book = book
        self.pad = pad
        self.parts = []
        self.parts.append(f'<rect width="{W}" height="{H}" fill="{self.p["bg"]}"/>')

    # ---------- lavnivå ----------
    def raw(self, svg):
        self.parts.append(svg)

    def line(self, x1, y1, x2, y2, color=None, width=3, dash=None, opacity=1):
        c = color or self.p['main']
        d = f' stroke-dasharray="{dash}"' if dash else ''
        self.parts.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{c}" stroke-width="{width}"{d} opacity="{opacity}" stroke-linecap="round"/>')

    def rect(self, x, y, w, h, fill=None, stroke=None, width=2.5, rx=0, opacity=1):
        f = fill or 'none'
        s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
        self.parts.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" fill="{f}"{s} rx="{rx}" opacity="{opacity}"/>')

    def circle(self, cx, cy, r, fill=None, stroke=None, width=3, opacity=1):
        f = fill or 'none'
        s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
        self.parts.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="{f}"{s} opacity="{opacity}"/>')

    def poly(self, pts, fill=None, stroke=None, width=3, close=False, opacity=1, dash=None):
        d = 'M ' + ' L '.join(f'{x:.1f},{y:.1f}' for x, y in pts) + (' Z' if close else '')
        f = fill or 'none'
        s = f' stroke="{stroke}" stroke-width="{width}"' if stroke else ''
        dd = f' stroke-dasharray="{dash}"' if dash else ''
        self.parts.append(f'<path d="{d}" fill="{f}"{s}{dd} opacity="{opacity}" stroke-linejoin="round" stroke-linecap="round"/>')

    def text(self, x, y, s, size=34, color=None, anchor='middle', bold=False, italic=False):
        c = color or self.p['text']
        w = ' font-weight="bold"' if bold else ''
        i = ' font-style="italic"' if italic else ''
        self.parts.append(f'<text x="{x:.1f}" y="{y:.1f}" font-family="{FONT}" font-size="{size}" fill="{c}" text-anchor="{anchor}"{w}{i}>{esc(s)}</text>')

    def arrow(self, x1, y1, x2, y2, color=None, width=4, head=14):
        c = color or self.p['accent']
        self.line(x1, y1, x2, y2, c, width)
        ang = math.atan2(y2 - y1, x2 - x1)
        for da in (math.radians(150), math.radians(-150)):
            self.line(x2, y2, x2 + head * math.cos(ang + da), y2 + head * math.sin(ang + da), c, width)

    def title(self, s, size=44):
        self.text(W / 2, 70, s, size=size, bold=True)

    # ---------- koordinatsystem og grafer ----------
    def coords(self, xmin, xmax, ymin, ymax, box=(170, 130, 1430, 800), grid=True,
               xticks=None, yticks=None, xlabel='', ylabel='', tick_size=26):
        """Sett opp koordinatsystem. Returnerer (tx, ty) som mapper matematiske koordinater til piksler."""
        x0, y0, x1, y1 = box
        sx = (x1 - x0) / (xmax - xmin)
        sy = (y1 - y0) / (ymax - ymin)
        tx = lambda x: x0 + (x - xmin) * sx
        ty = lambda y: y1 - (y - ymin) * sy
        if grid:
            for gx in (xticks or []):
                self.line(tx(gx), y0, tx(gx), y1, self.p['grid'], 1.5)
            for gy in (yticks or []):
                self.line(x0, ty(gy), x1, ty(gy), self.p['grid'], 1.5)
        axc = self.p['text']
        # akser gjennom 0 hvis synlig, ellers langs kanten
        ax_y = ty(0) if ymin <= 0 <= ymax else y1
        ax_x = tx(0) if xmin <= 0 <= xmax else x0
        self.arrow(x0 - 10, ax_y, x1 + 25, ax_y, axc, 3)
        self.arrow(ax_x, y1 + 10, ax_x, y0 - 25, axc, 3)
        for gx in (xticks or []):
            if abs(gx) > 1e-12 or not (ymin <= 0 <= ymax):
                self.text(tx(gx), ax_y + 36, fmt(gx), tick_size)
        for gy in (yticks or []):
            if abs(gy) > 1e-12 or not (xmin <= 0 <= xmax):
                self.text(ax_x - 14, ty(gy) + 9, fmt(gy), tick_size, anchor='end')
        if xlabel: self.text(x1 + 10, ax_y - 16, xlabel, 28, anchor='end', italic=True)
        if ylabel: self.text(ax_x + 14, y0 - 8, ylabel, 28, anchor='start', italic=True)
        self._clip = (xmin, xmax, ymin, ymax, tx, ty)
        return tx, ty

    def plot(self, f, xmin=None, xmax=None, color=None, width=4, n=400, dash=None):
        """Tegn funksjonsgraf med sampling. Bruker koordinatsystemet fra siste coords()."""
        cxmin, cxmax, cymin, cymax, tx, ty = self._clip
        a = cxmin if xmin is None else xmin
        b = cxmax if xmax is None else xmax
        lo = cymin - 0.04 * (cymax - cymin)
        hi = cymax + 0.04 * (cymax - cymin)
        pts, runs = [], []
        prev = None  # (x, y) forrige gyldige sample
        for i in range(n + 1):
            x = a + (b - a) * i / n
            try:
                y = f(x)
                if y != y or abs(y) == float('inf'):
                    y = None
            except Exception:
                y = None
            inside = y is not None and lo <= y <= hi
            if inside:
                if prev is not None and not (lo <= prev[1] <= hi):
                    # interpolér inn fra kanten
                    edge = hi if prev[1] > hi else lo
                    t = (edge - prev[1]) / (y - prev[1])
                    pts.append((tx(prev[0] + t * (x - prev[0])), ty(edge)))
                pts.append((tx(x), ty(y)))
            else:
                if pts and y is not None and prev is not None and lo <= prev[1] <= hi:
                    # interpolér ut til kanten, avslutt løpet
                    edge = hi if y > hi else lo
                    t = (edge - prev[1]) / (y - prev[1])
                    pts.append((tx(prev[0] + t * (x - prev[0])), ty(edge)))
                if pts: runs.append(pts); pts = []
            prev = (x, y) if y is not None else None
        if pts: runs.append(pts)
        for r in runs:
            if len(r) > 1:
                self.poly(r, stroke=color or self.p['main'], width=width, dash=dash)

    def point(self, x, y, label=None, color=None, r=9, dx=18, dy=-14, size=28):
        _, _, _, _, tx, ty = self._clip
        self.circle(tx(x), ty(y), r, fill=color or self.p['accent'])
        if label:
            self.text(tx(x) + dx, ty(y) + dy, label, size, anchor='start', bold=True)

    def shade_under(self, f, a, b, color=None, opacity=0.35, n=200, baseline=0):
        """Skraver området mellom graf og y=baseline fra a til b."""
        _, _, _, _, tx, ty = self._clip
        pts = [(tx(a), ty(baseline))]
        for i in range(n + 1):
            x = a + (b - a) * i / n
            pts.append((tx(x), ty(f(x))))
        pts.append((tx(b), ty(baseline)))
        self.poly(pts, fill=color or self.p['accent'], close=True, opacity=opacity)

    # ---------- spesialfigurer ----------
    def number_line(self, xmin, xmax, y=H / 2, x0=140, x1=1460, ticks=None, labels=None,
                    points=None, open_points=None, segment=None, tick_h=14):
        """Tallinje. points: [(verdi, farge, etikett)], segment: (fra, til, farge)."""
        sx = (x1 - x0) / (xmax - xmin)
        tx = lambda v: x0 + (v - xmin) * sx
        if segment:
            a, b, c = segment
            self.line(tx(a), y, tx(b), y, c, 12, opacity=0.85)
        self.arrow(x0 - 20, y, x1 + 30, y, self.p['text'], 4)
        for t in (ticks or []):
            self.line(tx(t), y - tick_h, tx(t), y + tick_h, self.p['text'], 3)
        for t, lab in (labels or {}).items():
            self.text(tx(t), y + 56, lab, 30)
        for v, c, lab in (points or []):
            self.circle(tx(v), y, 12, fill=c)
            if lab: self.text(tx(v), y - 34, lab, 30, bold=True)
        for v, c, lab in (open_points or []):
            self.circle(tx(v), y, 12, fill=self.p['bg'], stroke=c, width=5)
            if lab: self.text(tx(v), y - 34, lab, 30, bold=True)
        return tx

    def fraction_bar(self, x, y, w, h, parts, filled, fill=None, label=None, stroke=None):
        """Stav delt i `parts` like deler der de første `filled` er fylt."""
        st = stroke or self.p['text']
        for i in range(parts):
            px = x + w * i / parts
            f = (fill or self.p['accent']) if i < filled else self.p['bg']
            self.rect(px, y, w / parts, h, fill=f, stroke=st, width=3)
        if label:
            self.text(x - 24, y + h / 2 + 11, label, 34, anchor='end', bold=True)

    def bar_chart(self, x0, y0, w, h, values, labels=None, colors=None, vmax=None,
                  stacked=None, value_labels=None, bar_gap=0.35):
        """Søylediagram. stacked: liste av (bunnverdi, toppverdi, bunnfarge, toppfarge)."""
        vmax = vmax or max((sum(v) if isinstance(v, (list, tuple)) else v) for v in values) * 1.15
        n = len(values)
        bw = w / (n + bar_gap * (n + 1))
        gap = bw * bar_gap
        for i, v in enumerate(values):
            bx = x0 + gap + i * (bw + gap)
            if isinstance(v, (list, tuple)):
                acc = 0
                for j, seg in enumerate(v):
                    sh = seg / vmax * h
                    c = (colors[j] if colors else [self.p['main'], self.p['accent']][j % 2])
                    self.rect(bx, y0 + h - acc / vmax * h - sh, bw, sh, fill=c)
                    acc += seg
                tot = sum(v)
            else:
                c = colors[i] if (colors and isinstance(colors, list) and len(colors) == n) else self.p['main']
                self.rect(bx, y0 + h - v / vmax * h, bw, v / vmax * h, fill=c)
                tot = v
            if labels:
                self.text(bx + bw / 2, y0 + h + 40, str(labels[i]), 28)
            if value_labels and value_labels[i] is not None:
                self.text(bx + bw / 2, y0 + h - tot / vmax * h - 14, str(value_labels[i]), 28, bold=True)
        self.line(x0, y0 + h, x0 + w, y0 + h, self.p['text'], 3)

    def normal_curve(self, mu=0, sigma=1, box=(170, 160, 1430, 720), zones=None, xlabels=None):
        """Normalfordelingskurve. zones: [(fra_sigma, til_sigma, farge, opacity)]."""
        xmin, xmax = mu - 4 * sigma, mu + 4 * sigma
        f = lambda x: math.exp(-((x - mu) ** 2) / (2 * sigma ** 2))
        x0, y0, x1, y1 = box
        sx = (x1 - x0) / (xmax - xmin)
        sy = (y1 - y0) / 1.12
        tx = lambda x: x0 + (x - xmin) * sx
        ty = lambda v: y1 - v * sy
        for a, b, c, op in (zones or []):
            pts = [(tx(mu + a * sigma), ty(0))]
            for i in range(101):
                x = mu + a * sigma + (b - a) * sigma * i / 100
                pts.append((tx(x), ty(f(x))))
            pts.append((tx(mu + b * sigma), ty(0)))
            self.poly(pts, fill=c, close=True, opacity=op)
        pts = [(tx(xmin + (xmax - xmin) * i / 400), ty(f(xmin + (xmax - xmin) * i / 400))) for i in range(401)]
        self.poly(pts, stroke=self.p['main'], width=5)
        self.line(x0, ty(0), x1, ty(0), self.p['text'], 3)
        for k, lab in (xlabels or {}).items():
            self.line(tx(mu + k * sigma), ty(0) - 8, tx(mu + k * sigma), ty(0) + 8, self.p['text'], 3)
            self.text(tx(mu + k * sigma), ty(0) + 44, lab, 28)
        return tx, ty, f

    def unit_circle(self, cx=520, cy=480, r=330, marked=None, show_axes=True):
        """Enhetssirkel. marked: [(grader, etikett, vis_koordinat)]."""
        if show_axes:
            self.arrow(cx - r - 60, cy, cx + r + 70, cy, self.p['text'], 3)
            self.arrow(cx, cy + r + 60, cx, cy - r - 70, self.p['text'], 3)
        self.circle(cx, cy, r, stroke=self.p['main'], width=5)
        for deg, lab, show_xy in (marked or []):
            a = math.radians(deg)
            x, y = cx + r * math.cos(a), cy - r * math.sin(a)
            self.line(cx, cy, x, y, self.p['accent'], 3)
            self.circle(x, y, 10, fill=self.p['accent'])
            # Etikettplassering: langs strålen, med spesialhåndtering ved aksene
            d = deg % 360
            if d in (90, 270):
                lx, ly = x + 22, y - 26 if d == 90 else y + 44
                anchor = 'start'
            elif d in (0, 180):
                lx, ly = x + (24 if d == 0 else -24), y + 52
                anchor = 'start' if d == 0 else 'end'
            else:
                lr = r + 88
                lx, ly = cx + lr * math.cos(a), cy - lr * math.sin(a) + 10
                anchor = 'start' if math.cos(a) > 0.1 else ('end' if math.cos(a) < -0.1 else 'middle')
            if lab:
                self.text(lx, ly, lab, 30, anchor=anchor, bold=True)
            if show_xy:
                self.text(lx, ly + 38, show_xy, 26, anchor=anchor, color=self.p['extra'])

    def right_triangle(self, x, y, base, height, labels=None, angle_marks=None, flip=False):
        """Rettvinklet trekant med katetene langs aksene; rett vinkel nede til venstre.
        labels: dict med 'base','height','hyp'."""
        sgn = -1 if flip else 1
        A = (x, y)               # rett vinkel
        B = (x + sgn * base, y)  # langs grunnlinjen
        C = (x, y - height)      # opp
        self.poly([A, B, C], stroke=self.p['main'], width=5, close=True)
        m = 34
        self.poly([(x + sgn * m, y), (x + sgn * m, y - m), (x, y - m)], stroke=self.p['accent'], width=3)
        L = labels or {}
        if L.get('base'): self.text((A[0] + B[0]) / 2, y + 44, L['base'], 32, bold=True)
        if L.get('height'): self.text(x - sgn * 22, y - height / 2 + 10, L['height'], 32, anchor='end' if not flip else 'start', bold=True)
        if L.get('hyp'): self.text((B[0] + C[0]) / 2 + sgn * 30, (B[1] + C[1]) / 2 - 16, L['hyp'], 32, anchor='start' if not flip else 'end', bold=True)
        return A, B, C

    def pie(self, cx, cy, r, slices, start_deg=90):
        """Sektordiagram. slices: [(andel_0til1, farge, etikett)]. Tegnes med klokka fra start."""
        a0 = math.radians(start_deg)
        acc = 0
        for frac, color, lab in slices:
            a1 = a0 - 2 * math.pi * acc
            acc += frac
            a2 = a0 - 2 * math.pi * acc
            x1, y1 = cx + r * math.cos(a1), cy - r * math.sin(a1) * -1 - 2 * (cy - cy)
            # bruk standard skjermkoordinater: y ned
            x1, y1 = cx + r * math.cos(-a1), cy + r * math.sin(-a1)
            x2, y2 = cx + r * math.cos(-a2), cy + r * math.sin(-a2)
            large = 1 if frac > 0.5 else 0
            self.parts.append(f'<path d="M {cx},{cy} L {x1:.1f},{y1:.1f} A {r},{r} 0 {large} 1 {x2:.1f},{y2:.1f} Z" fill="{color}" stroke="{self.p["bg"]}" stroke-width="4"/>')
            if lab:
                am = (-a1 + -a2) / 2
                lx, ly = cx + 0.65 * r * math.cos(am), cy + 0.65 * r * math.sin(am)
                tcol = '#FFFFFF' if not self.p['dark'] else self.p['text']
                self.text(lx, ly + 10, lab, 30, color=tcol, bold=True)

    def sign_chart(self, x0, x1, y, breakpoints, signs, labels=None, factor_label=None):
        """Fortegnslinje: breakpoints=[x-verdier], signs=['+','-','+'] for hvert intervall."""
        self.line(x0, y, x1, y, self.p['text'], 3)
        n = len(breakpoints)
        positions = [x0 + (x1 - x0) * (i + 1) / (n + 1) for i in range(n)]
        if factor_label:
            self.text(x0 - 28, y + 10, factor_label, 30, anchor='end', bold=True)
        for px, bp in zip(positions, breakpoints):
            self.line(px, y - 16, px, y + 16, self.p['text'], 3)
            self.text(px, y - 30, fmt(bp), 28, bold=True)
        edges = [x0] + positions + [x1]
        for i, s in enumerate(signs):
            mx = (edges[i] + edges[i + 1]) / 2
            color = self.p['main'] if s == '+' else self.p['warn']
            if s == '0':
                continue
            # tegn heltrukket for +, stiplet for -
            self.line(edges[i] + 24, y, edges[i + 1] - 24, y, color, 7, dash=None if s == '+' else '14 12')
            self.text(mx, y + 48, s, 36, color=color, bold=True)

    def flow_box(self, x, y, w, h, label, shape='rect', size=28):
        if shape == 'diamond':
            self.poly([(x + w / 2, y), (x + w, y + h / 2), (x + w / 2, y + h), (x, y + h / 2)],
                      stroke=self.p['main'], width=4, close=True, fill=self.p['bg'])
        elif shape == 'oval':
            self.parts.append(f'<ellipse cx="{x + w / 2}" cy="{y + h / 2}" rx="{w / 2}" ry="{h / 2}" fill="{self.p["bg"]}" stroke="{self.p["main"]}" stroke-width="4"/>')
        else:
            self.rect(x, y, w, h, fill=self.p['bg'], stroke=self.p['main'], width=4, rx=10)
        for i, ln in enumerate(str(label).split('\n')):
            self.text(x + w / 2, y + h / 2 + 10 + (i - (len(str(label).split('\n')) - 1) / 2) * (size + 8), ln, size)

    def vector(self, tx, ty, x0, y0, dx, dy, color=None, label=None, width=5, lab_off=(20, -16)):
        """Vektor i koordinatsystem fra coords()."""
        self.arrow(tx(x0), ty(y0), tx(x0 + dx), ty(y0 + dy), color or self.p['accent'], width, head=18)
        if label:
            self.text(tx(x0 + dx) + lab_off[0], ty(y0 + dy) + lab_off[1], label, 32, anchor='start', bold=True, italic=True)

    # ---------- lagring ----------
    def save(self, path):
        os.makedirs(os.path.dirname(path), exist_ok=True)
        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
               f'width="{W}" height="{H}" role="img">' + ''.join(self.parts) + '</svg>')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(svg)
        return path


def fmt(v):
    """Norsk tallformat: desimalkomma, ingen unødvendige desimaler."""
    if isinstance(v, float) and abs(v - round(v)) < 1e-9:
        v = round(v)
    s = str(v).replace('.', ',').replace('-', '−')
    return s
