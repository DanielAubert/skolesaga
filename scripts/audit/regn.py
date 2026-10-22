#!/usr/bin/env python3
"""Automatisk regnesjekk av likhetskjeder i Skolesaga-kapitler. 0 modelltokens.

Finner kjeder a = b = c (også ≈, aligned-rader og $$-linjer som starter med «=») i alle elevsynlige felt, oversetter
hvert ledd fra LaTeX til sympy (egen parser for norsk skolenotasjon; sympy.parsing.latex som reserve hvis antlr finnes)
og sjekker hvert nabopar numerisk. Toleranse etter oppgitte desimaler (≈ 3,33 → ±0,005; ≈ 1600 → ±50), pluss
avrundingsslakk fra avrundede tall i høyre ledd. Ledd med frie symboler hoppes over (likninger), unntatt kjeder med
≥ 3 symbolske ledd, som sjekkes som identiteter (egen, svakere klasse). Fasitfelt (subTasks[].answer) sjekkes mot
tallene i egen løsning.

Bruk:
  python3 regn.py 1t 2p [--nn] [--ut regn.json] [--vis 40]
Utdata: regn.json (dekning per kapittel + avvik) og kort sammendrag. Klasser:
  avvik            ledd som ikke er like (utenfor toleranse) — skal sjekkes
  avrunding-likhet «=» der verdien bare stemmer avrundet (bør være ≈) — info
  avrunding-mellomledd  avviket forklares av avrundede tall i venstre ledd (svaret er regnet fra eksakt verdi) — info
  motsigelse?      avvik i en blokk som handler om motsigelse/feil/påstand (bevisst «1 = 2») — info
  overslag         ≈ i en overslagsoppgave — info
  symbolsk-avvik   identitet i kjede med ≥3 symbolske ledd som ikke stemmer — sjekkes, flere falske positive
  fasitfelt        subTasks[].answer finnes ikke blant tallene i løsningen"""
import argparse
import collections
import json
import math
import os
import re
import signal
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from felles import blokker, felt, finn_ider, les_kap, segmenter, skriv_json

import sympy as sp

try:
    from sympy.parsing.latex import parse_latex as _parse_latex
    _parse_latex(r'\frac{1}{2}')
    HAR_ANTLR = True
except Exception:  # antlr4 mangler
    HAR_ANTLR = False

# ------------------------------------------------------------------ normalisering

ENHETER = set('''kr kroner NOK cm m mm km dm dam hm g kg hg mg t tonn L l dL dl mL ml cL cl s sek min h t timer time
døgn dager dag år mnd måneder uker uke kWh Wh W kW MW J kJ N Pa hPa kPa bar V A Hz kHz MHz GB MB kB TB personer stk
elever liter meter grader km/h m/s km/t cm^2 m^2 km^2 mm^2 dm^2 cm^3 m^3 dm^3 mm^3 cm² m² cm³ m³ prosent poeng kalorier
kcal C °C % ‰ promille ms µs μs ns mA mV kV GW GWh TWh MWh mm/h l/min km/l dB'''.split())
SKALA = {'tusen': 1000, 'million': 10 ** 6, 'millioner': 10 ** 6, 'mill.': 10 ** 6, 'mill': 10 ** 6, 'milliard': 10 ** 9,
         'milliarder': 10 ** 9, 'mrd.': 10 ** 9, 'mrd': 10 ** 9, 'billioner': 10 ** 12}
PLAIN_ENHETER = {'kr', 'cm', 'km', 'mm', 'kg', 'dm', 'ml', 'dl', 'min', 'kWh', 'mg', 'hg', 'dL', 'mL'}
SEP_KOMMANDOER = {'\\neq', '\\ne', '<', '>', '\\le', '\\leq', '\\ge', '\\geq', '\\lt', '\\gt', '\\leqslant', '\\geqslant',
                  '\\Rightarrow', '\\Leftrightarrow', '\\iff', '\\implies', '\\to', '\\rightarrow', '\\Longrightarrow',
                  '\\longrightarrow', '\\Leftarrow', '\\impliedby', '\\quad', '\\qquad', ',', ';', '\\in', '\\notin',
                  '\\cup', '\\cap', '\\land', '\\lor', '\\vee', '\\wedge', '\\mid', '\\equiv', '\\mapsto', '\\therefore',
                  '\\because', '\\forall', '\\exists', '\\subset', '\\subseteq', '\\perp', '\\parallel', '\\sim',
                  '\\Longleftrightarrow', '\\hspace', '\\text-ord', '\\colon', '\\wedge', '!=', '\\nless', '\\ngtr'}
REL = {'=': '=', '\\approx': '≈', '\\simeq': '≈', '\\doteq': '≈', '\\thickapprox': '≈', '\\cong': '≈'}
FJERN = re.compile(r'\\(?:displaystyle|textstyle|scriptstyle|left|right|bigl|bigr|Bigl|Bigr|biggl|biggr|big|Big|bigg|Bigg|'
                   r'limits|nolimits|!|middle)(?![a-zA-Z])\.?')


def normaliser(s):
    s = s.replace('−', '-').replace('–', '-').replace('·', '\\cdot ').replace('×', '\\cdot ').replace('÷', '\\div ')
    s = s.replace('≈', '\\approx ').replace('≤', '\\le ').replace('≥', '\\ge ').replace('≠', '\\neq ')
    s = s.replace('π', '\\pi ').replace('°', '^\\circ ').replace('²', '^2').replace('³', '^3').replace('√', '\\sqrt')
    s = s.replace('⇒', '\\Rightarrow ').replace('⇔', '\\Leftrightarrow ').replace('→', '\\to ')
    s = FJERN.sub(' ', s)
    s = re.sub(r'\\[dtc]frac(?![a-zA-Z])', r'\\frac', s)
    s = re.sub(r'(\d)\s*\{,\}\s*(\d)', r'\1.\2', s)
    s = re.sub(r'(\d)\{\.\}(\d)', r'\1.\2', s)
    # tusenskille: 12\,500 / 12 500 / 12~500 / 1\,000\,000
    s = re.sub(r'(?<![\d.])(\d{1,3})((?:(?:\\,|\\;|\\:|\\ |~|\{\\,\}|\\thinspace|[ \u00a0\u2009])\d{3})+)(?![\d])',
               lambda m: m.group(1) + re.sub(r'\D', '', m.group(2)), s)
    for _ in range(4):  # 0{,}000\,001 → 0.000001
        s = re.sub(r'(\.\d{3})(?:\\,|\\;|\\ |~|[ \u00a0\u2009])(?=\d{1,3}(?!\d))', r'\1', s)
    s = re.sub(r'\\[,;: ]|~|\\thinspace|\\enspace', ' ', s)
    s = re.sub(r'(?<=[\w)}%]):(?=\s)', ' ; ', s)  # «2022: 495 000», «Svar: 5» = etikett, ikke divisjon
    return s

# ------------------------------------------------------------------ tokenisering

TOK = re.compile(r'\s*(?:(\d+(?:\.\d+)?)|(\\[a-zA-Z]+|\\.)|([A-Za-zÆØÅæøå]+)|(\S))')


def tokeniser(s):
    ut = []
    i = 0
    while i < len(s):
        m = TOK.match(s, i)
        if not m:
            break
        i = m.end()
        if m.group(1) is not None:
            ut.append(('num', m.group(1)))
        elif m.group(2) is not None:
            c = m.group(2)
            if c in ('\\text', '\\textrm', '\\mathrm', '\\textit', '\\mbox', '\\textbf', '\\mathbf', '\\operatorname',
                     '\\mathit', '\\textnormal'):
                # les {innhold} rått
                j = i
                while j < len(s) and s[j] == ' ':
                    j += 1
                if j < len(s) and s[j] == '{':
                    d, k = 0, j
                    while k < len(s):
                        if s[k] == '{':
                            d += 1
                        elif s[k] == '}':
                            d -= 1
                            if d == 0:
                                break
                        k += 1
                    innhold = s[j + 1:k]
                    i = k + 1
                    if innhold.strip() == 'av':  # «25 % av 36» = 25 % · 36
                        ut.append(('cmd', '\\cdot'))
                    elif innhold.strip() in ('‰', 'promille'):
                        ut.append(('cmd', '\\permil'))
                    else:
                        ut.append(('text', c, innhold))
                    continue
            ut.append(('cmd', c))
        elif m.group(3) is not None:
            ut.append(('run', m.group(3)))
        else:
            ut.append(('ch', m.group(4)))
    return ut


def tekst_er_enhet(x):
    x = x.strip().strip('.').strip()
    x2 = re.sub(r'\s+', ' ', x)
    return x2 == '' or x2 in ENHETER or bool(re.fullmatch(r'(?:[a-zA-Zæøå°]+(?:\^?\d)?(?:/[a-zA-Zæøå]+)?)', x2) and
                                             x2.split('/')[0].rstrip('^23²³') in ENHETER)


KOBLINGSORD = set('''og eller gir av så der når hvis for dvs altså som med i til er blir fordi men ved både enten mellom
fra ut inn eller da hvor at om på pr dersom slik ellers derfor eg ein ei eit frå når sidan difor kontroll sjekk prøve'''.split())


def tekst_er_kobling(x):
    ord_ = re.findall(r'[A-Za-zÆØÅæøå]+', x)
    if not ord_:
        return True
    return all(o.lower() in KOBLINGSORD for o in ord_) or len(ord_) >= 3


def splitt_kjeder(toks):
    """Toppnivå-splitting av en rad i kjeder: [([(rel, [tokens]), …], fortsetter), …]. rel for første ledd = None.
    fortsetter = True bare for første kjede når raden starter med et relasjonstegn («= 5» etter forrige linje)."""
    kjeder = []
    kjede = []
    cur = []
    rel = None
    dybde = 0
    for t in toks:
        k = t[0]
        v = t[1]
        if k == 'ch' and v in '({[':
            dybde += 1
        elif k == 'ch' and v in ')}]':
            dybde -= 1
        elif k == 'cmd' and v in ('\\{', '\\langle'):
            dybde += 1
        elif k == 'cmd' and v in ('\\}', '\\rangle'):
            dybde -= 1
        if dybde == 0:
            erel = (k == 'ch' and v == '=') or (k == 'cmd' and v in REL)
            esep = (k == 'cmd' and v in SEP_KOMMANDOER) or (k == 'ch' and v in ',;<>') or \
                   (k == 'text' and not tekst_er_enhet(t[2]) and tekst_er_kobling(t[2]))
            if erel:
                kjede.append((rel, cur))
                cur = []
                rel = REL.get(v, '=') if k == 'cmd' else '='
                continue
            if esep:
                kjede.append((rel, cur))
                kjeder.append(kjede)
                kjede, cur, rel = [], [], None
                continue
        if k == 'ch' and v == '&':
            continue
        cur.append(t)
    kjede.append((rel, cur))
    kjeder.append(kjede)
    forste = next((t for t in toks if not (t[0] == 'ch' and t[1] == '&')), None)
    starter_rel = forste is not None and ((forste[0] == 'ch' and forste[1] == '=') or (forste[0] == 'cmd' and forste[1] in REL))
    return [(kj, i == 0 and starter_rel) for i, kj in enumerate(kjeder)]

# ------------------------------------------------------------------ parser (rekursiv nedstigning)


class Uparserbar(Exception):
    pass


FUNK = {'\\sin': sp.sin, '\\cos': sp.cos, '\\tan': sp.tan, '\\ln': sp.log, '\\lg': lambda x: sp.log(x, 10),
        '\\log': lambda x: sp.log(x, 10), '\\exp': sp.exp, '\\arcsin': sp.asin, '\\arccos': sp.acos, '\\arctan': sp.atan}
INV = {'\\sin': sp.asin, '\\cos': sp.acos, '\\tan': sp.atan}
GRESK = set('alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota kappa lambda mu nu xi rho sigma tau '
            'phi varphi chi psi omega Gamma Delta Theta Lambda Xi Sigma Phi Psi Omega'.split())


E_ER_EULER = [True]
IKKE_REGNBAR = {'\\int', '\\iint', '\\oint', '\\sum', '\\prod', '\\lim', '\\to', '\\infty', '\\partial', '\\nabla',
                '\\max', '\\min', '\\det', '\\mathbb', '\\overrightarrow', '\\dots', '\\ldots', '\\cdots', '\\square',
                '\\Box', '\\pm', '\\mp', '\\angle', '\\triangle', '\\overline', '\\stackrel', '\\xrightarrow'}


class P(object):
    def __init__(self, toks, grader_av=False, trig_grader=False, skala=False):
        self.grader_av = grader_av
        self.trig_grader = trig_grader
        # del opp «run»-tokens til enkeltbokstaver, unntatt enheter rett etter tall
        self.t = []
        self.enheter = set()
        self.funksjon = False
        forrige = None
        hopp_eksponent = False
        for x in toks:
            if hopp_eksponent:
                if x == ('ch', '^'):
                    continue
                hopp_eksponent = False
                if x[0] == 'num' or (x[0] == 'ch' and x[1] in '{}'):
                    if x[0] == 'num' or x[1] == '}':
                        continue
                    continue
            if x[0] == 'cmd' and x[1] in IKKE_REGNBAR:
                raise Uparserbar('ikke regnbar: ' + x[1])
            if x[0] == 'run':
                if forrige is not None and forrige[0] == 'num' and x[1] in PLAIN_ENHETER:
                    self.enheter.add(x[1])
                    forrige = x
                    hopp_eksponent = True
                    continue
                for c in x[1]:
                    self.t.append(('let', c))
            elif x[0] == 'text':
                inn = x[2].strip()
                if inn in SKALA:
                    if skala:
                        self.t += [('cmd', '\\cdot'), ('num', str(SKALA[inn]))]
                    else:
                        self.enheter.add('×' + inn)
                    forrige = x
                    continue
                if not tekst_er_enhet(inn) and forrige is not None and (forrige[0] == 'num' or forrige == ('ch', ')')) \
                        and re.fullmatch(r'[A-Za-zÆØÅæøå.]+', inn):
                    self.enheter.add(inn)  # ett ord rett etter et tall er en enhet («427,35 euro», «27 stk»)
                    forrige = x
                    continue
                if tekst_er_enhet(inn):
                    if inn:
                        self.enheter.add(re.sub(r'\s+', '', inn))
                        hopp_eksponent = True
                    forrige = x
                    continue
                if x[1] == '\\mathrm' and inn == 'e':
                    self.t.append(('cmd', '\\e'))
                elif x[1] in ('\\mathrm', '\\mathbf', '\\mathit') and re.fullmatch(r'[A-Za-z]+', inn):
                    self.t.append(('let', inn))
                elif x[1] == '\\operatorname':
                    raise Uparserbar('operatorname')
                else:
                    self.t.append(('let', 'T_' + re.sub(r'\W+', '_', inn)[:20]))  # ord som variabel («pris»)
            else:
                self.t.append(x)
            forrige = x
        self.i = 0

    def kikk(self, k=0):
        j = self.i + k
        return self.t[j] if j < len(self.t) else (None, None)

    def ta(self):
        x = self.kikk()
        self.i += 1
        return x

    def forvent(self, k, v):
        x = self.ta()
        if x[0] != k or x[1] != v:
            raise Uparserbar('ventet %s fikk %s' % (v, x))

    def parse(self):
        if not self.t:
            raise Uparserbar('tomt')
        e = self.uttrykk()
        if self.i != len(self.t):
            raise Uparserbar('rest: %s' % (self.t[self.i:self.i + 3],))
        return e

    def uttrykk(self):
        e = self.ledd()
        while True:
            k, v = self.kikk()
            if k == 'ch' and v in '+-':
                self.ta()
                r = self.ledd()
                e = e + r if v == '+' else e - r
            elif k == 'cmd' and v in ('\\pm', '\\mp'):
                raise Uparserbar('±')
            else:
                return e

    def ledd(self):
        e = self.fortegn()
        while True:
            k, v = self.kikk()
            if (k == 'ch' and v in '*/:') or (k == 'cmd' and v in ('\\cdot', '\\times', '\\div', '\\ast')):
                self.ta()
                r = self.fortegn()
                e = e / r if (v in ('/', ':', '\\div')) else e * r
            elif self.starter_atom():
                r = self.potens()
                e = e * r
            else:
                return e

    def starter_atom(self):
        k, v = self.kikk()
        if k in ('num', 'let'):
            return True
        if k == 'ch' and v in '([{|':
            return True
        if k == 'cmd' and (v in FUNK or v in ('\\frac', '\\sqrt', '\\pi', '\\binom', '\\e', '\\{', '\\lvert', '\\vert',
                                             '\\boxed', '\\underbrace', '\\underline', '\\textcolor', '\\color', '\\cancel',
                                             '\\bar', '\\overline', '\\vec', '\\hat', '\\Delta', '\\infty')
                           or v[1:] in GRESK):
            return True
        return False

    def fortegn(self):
        k, v = self.kikk()
        if k == 'ch' and v == '-':
            self.ta()
            return -self.fortegn()
        if k == 'ch' and v == '+':
            self.ta()
            return self.fortegn()
        return self.potens()

    def potens(self):
        b = self.atom()
        while True:
            k, v = self.kikk()
            if k == 'ch' and v == '^':
                self.ta()
                k2, v2 = self.kikk()
                if k2 == 'cmd' and v2 == '\\circ':
                    self.ta()
                    b = b if self.grader_av else b * sp.pi / 180
                    continue
                if k2 == 'ch' and v2 == '{' and self.kikk(1) == ('cmd', '\\circ') and self.kikk(2) == ('ch', '}'):
                    self.i += 3
                    b = b if self.grader_av else b * sp.pi / 180
                    continue
                eks = self.arg_enkel()
                if isinstance(eks, sp.Basic) and eks.is_number and abs(float(eks)) > 400:
                    raise Uparserbar('stor eksponent')
                b = b ** eks
            elif k == 'ch' and v == '!':
                self.ta()
                if not (b.is_integer and b.is_nonnegative) or b > 200:
                    raise Uparserbar('fakultet')
                b = sp.factorial(b)
            elif k == 'cmd' and v == '\\%':
                self.ta()
                self.enheter.add('%')
                b = b / 100
            elif k == 'cmd' and v == '\\permil':
                self.ta()
                self.enheter.add('‰')
                b = b / 1000
            elif k == 'ch' and v == "'":
                raise Uparserbar('derivert')
            elif k == 'ch' and v == '_':
                raise Uparserbar('indeks')
            else:
                return b

    def gruppe(self):
        """{…} → uttrykk"""
        self.forvent('ch', '{')
        e = self.uttrykk()
        self.forvent('ch', '}')
        return e

    def arg_enkel(self):
        """Argument til ^ / \\sqrt / \\frac uten klammer: ETT tegn (LaTeX-semantikk: 2^10 = 2^1·0)."""
        k, v = self.kikk()
        if k == 'ch' and v == '{':
            return self.gruppe()
        if k == 'num':
            self.ta()
            if len(v) > 1:
                rest = v[1:]
                self.t.insert(self.i, ('num', rest))
                v = v[0]
            return sp.Rational(v)
        if k == 'ch' and v == '-':
            raise Uparserbar('minus i eksponent uten klammer')
        return self.atom()

    def atom(self):
        k, v = self.ta()
        if k == 'num':
            # blandet tall: 2\frac{1}{2}
            if self.kikk() == ('cmd', '\\frac') and '.' not in v:
                lagre = self.i
                try:
                    self.ta()
                    a = self.arg_enkel()
                    b = self.arg_enkel()
                    if a.is_Integer and b.is_Integer and 0 < a < b:
                        return sp.Rational(v) + a / b
                except Uparserbar:
                    pass
                self.i = lagre
            return sp.Rational(v)
        if k == 'let':
            if self.kikk() == ('ch', '(') and (v.isupper() or v in 'fghpqrsuvwF' or
                                              (self.kikk(1)[0] in ('num', 'let') and self.kikk(2) == ('ch', ')'))):
                self.funksjon = True
            if v in ('f', 'g', 'h') and self.kikk() == ('ch', '^'):
                self.funksjon = True
            if v == 'e' and E_ER_EULER[0]:
                return sp.E
            if self.kikk() == ('ch', '_'):
                self.ta()
                idx = self.ta()
                if idx == ('ch', '{'):
                    navn = []
                    while self.kikk() != ('ch', '}') and self.kikk()[0] is not None:
                        navn.append(str(self.ta()[1]))
                    self.ta()
                    idx = ('x', ''.join(navn))
                return sp.Symbol('%s_%s' % (v, idx[1]))
            if self.kikk() == ('ch', "'"):
                self.funksjon = True
                while self.kikk() == ('ch', "'"):
                    self.ta()
                return sp.Symbol(v + "'")
            return sp.Symbol(v)
        if k == 'ch' and v in '([':
            e = self.uttrykk()
            k2, v2 = self.ta()
            if k2 != 'ch' or v2 not in ')]':
                raise Uparserbar('parentes')
            return e
        if k == 'ch' and v == '{':
            e = self.uttrykk()
            self.forvent('ch', '}')
            return e
        if k == 'cmd' and v == '\\{':
            e = self.uttrykk()
            self.forvent('cmd', '\\}')
            return e
        if (k == 'ch' and v == '|') or (k == 'cmd' and v in ('\\lvert', '\\vert')):
            e = self.uttrykk()
            k2, v2 = self.ta()
            if not ((k2 == 'ch' and v2 == '|') or (k2 == 'cmd' and v2 in ('\\rvert', '\\vert'))):
                raise Uparserbar('abs')
            return sp.Abs(e)
        if k == 'cmd':
            if v == '\\frac':
                a = self.arg_enkel()
                b = self.arg_enkel()
                if b == 0:
                    raise Uparserbar('del på 0')
                return a / b
            if v == '\\binom':
                a = self.arg_enkel()
                b = self.arg_enkel()
                return sp.binomial(a, b)
            if v == '\\sqrt':
                if self.kikk() == ('ch', '['):
                    self.ta()
                    n = self.uttrykk()
                    self.forvent('ch', ']')
                    a = self.arg_enkel()
                    return sp.root(a, n) if not (a.is_number and a < 0 and n.is_odd) else -sp.root(-a, n)
                return sp.sqrt(self.arg_enkel())
            if v == '\\pi':
                return sp.pi
            if v == '\\e':
                return sp.E
            if v in ('\\boxed', '\\underline', '\\cancel', '\\bbox'):
                return self.arg_enkel()
            if v == '\\underbrace' or v == '\\overbrace':
                e = self.arg_enkel()
                if self.kikk() in (('ch', '_'), ('ch', '^')):
                    self.ta()
                    self.hopp_gruppe()
                return e
            if v in ('\\textcolor', '\\color'):
                self.hopp_gruppe()
                return self.arg_enkel() if v == '\\textcolor' else self.potens()
            if v in ('\\bar', '\\overline', '\\vec', '\\hat', '\\tilde', '\\dot'):
                k2 = self.kikk()
                if k2 == ('ch', '{'):
                    self.ta()
                    navn = []
                    while self.kikk() != ('ch', '}') and self.kikk()[0] is not None:
                        navn.append(str(self.ta()[1]))
                    self.ta()
                else:
                    navn = [str(self.ta()[1])]
                return sp.Symbol(v[1:] + '_' + ''.join(navn))
            if v == '\\Delta':
                return sp.Symbol('Delta')
            if v[1:] in GRESK:
                return sp.Symbol(v[1:])
            if v in ('\\log', '\\lg') and self.kikk() == ('ch', '_'):
                self.ta()
                base = self.arg_enkel()
                return sp.log(self.funk_arg(), base)
            if v == '\\circ':
                self.funksjon = True
                raise Uparserbar('sammensetning')
            if v in FUNK:
                f = FUNK[v]
                if self.kikk() == ('ch', '^'):
                    self.ta()
                    eks = self.arg_enkel()
                    arg = self.funk_arg()
                    if eks == -1 and v in INV:
                        return INV[v](arg) * (180 / sp.pi if self.trig_grader else 1)
                    return f(self.grad(v, arg)) ** eks
                return f(self.grad(v, self.funk_arg()))
            if v == '\\infty':
                raise Uparserbar('uendelig')
        raise Uparserbar('ukjent %s %s' % (k, v))

    def grad(self, v, arg):
        if self.trig_grader and v in ('\\sin', '\\cos', '\\tan') and arg.is_number and not arg.has(sp.pi):
            return arg * sp.pi / 180
        return arg

    def funk_arg(self):
        k, v = self.kikk()
        if k == 'ch' and v in '({[':
            return self.potens()
        # \sin 30^\circ, \sin x, \cos 3\pi, \sin 2x: implisitt produkt fram til neste funksjon/operator
        e = self.potens()
        while self.starter_atom() and (self.kikk()[0] in ('num', 'let') or self.kikk() == ('cmd', '\\pi') or
                                       (self.kikk()[0] == 'cmd' and self.kikk()[1][1:] in GRESK)):
            e = e * self.potens()
        return e

    def hopp_gruppe(self):
        if self.kikk() == ('ch', '{'):
            d = 0
            while True:
                k, v = self.ta()
                if k is None:
                    return
                if (k, v) == ('ch', '{'):
                    d += 1
                elif (k, v) == ('ch', '}'):
                    d -= 1
                    if d == 0:
                        return
        else:
            self.ta()

# ------------------------------------------------------------------ evaluering


class Tidsavbrudd(Exception):
    pass


def _alarm(signum, frame):
    raise Tidsavbrudd()


signal.signal(signal.SIGALRM, _alarm)
CACHE = {}


def toks_str(toks):
    return ' '.join(str(t[1]) if t[0] != 'text' else '\\text{%s}' % t[2] for t in toks)


def evaluer(toks, stat):
    """→ dict(verdi (float|None), sym (bool), uttr (sympy|None), enheter, lit (desimaler|None), funksjon, kilde)"""
    key = toks_str(toks)
    if key in CACHE:
        return CACHE[key]
    r = {'verdi': None, 'sym': False, 'uttr': None, 'enheter': frozenset(), 'lit': None, 'funksjon': False,
         'kilde': None, 'tekst': key}
    p = None
    try:
        signal.setitimer(signal.ITIMER_REAL, 0.5)
        try:
            if re.search(r'\\frac \{ d[a-zA-Z]? \} \{ d|\\frac \{ d \}|\{ d [a-z] \}', key):
                raise Uparserbar('derivert')
            p = P(toks)
            e = p.parse()
            if len(p.t) == 1 and p.t[0][0] == 'let':
                e = sp.Symbol(p.t[0][1])
            r['kilde'] = 'egen'
        except Uparserbar as ux:
            if not HAR_ANTLR or (p is not None and p.funksjon) or re.search(
                    r"\\(?:int|sum|prod|lim|log|ln|lg|circ|text|mathrm|operatorname|infty|to|pm|mp|overline)|_|'|\bd[xtu]\b|\|", key) \
                    or str(ux).startswith(('ikke regnbar', 'sammensetning', 'derivert', 'tekst')):
                raise
            e = _parse_latex(key.replace('\\%', '/100'))
            if p is not None and not e.free_symbols and p.enheter:
                pass
            r['kilde'] = 'parse_latex'
        r['enheter'] = frozenset(p.enheter) if p is not None else frozenset()
        r['funksjon'] = bool(p is not None and p.funksjon)
        har_bokstav = p is not None and (any(t[0] == 'let' and not (t[1] == 'e' and E_ER_EULER[0]) for t in p.t) or
                                         (len(p.t) == 1 and p.t[0][0] == 'let'))
        if p is not None and p.funksjon:
            r['sym'] = True
            r['uttr'] = e
        elif e.free_symbols or har_bokstav:
            r['sym'] = True
            r['uttr'] = e
        else:
            v = sp.N(e, 30)
            if v.is_real and v.is_finite:
                r['verdi'] = float(v)
                r['uttr'] = e
        # rent tall-ledd? (for toleranse)
        tall = [t for t in p.t if t[0] == 'num'] if p is not None else []
        ikke_tall = [t for t in p.t if not (t[0] == 'num' or t == ('ch', '-') or t == ('cmd', '\\%') or
                                            (t[0] == 'ch' and t[1] in '{}^') or t == ('cmd', '\\circ'))] if p is not None else [1]
        if len(tall) == 1 and not ikke_tall:
            v = tall[0][1]
            d = len(v.split('.')[1]) if '.' in v else 0
            nuller = (len(v) - len(v.rstrip('0'))) if '.' not in v else 0
            skala = abs(r['verdi'] / float(v)) if (r['verdi'] is not None and float(v) != 0) else 1.0
            r['lit'] = (d, nuller, skala)
        # %-alternativ: «5 + 8 − 10 = 3 %» (prosentpoeng) — % som enhet i stedet for /100
        alt = []
        if p is not None and r['verdi'] is not None:
            varianter = []
            if ('cmd', '\\%') in p.t or ('cmd', '\\permil') in p.t:
                varianter.append((lambda: P([x for x in toks if x not in (('cmd', '\\%'), ('cmd', '\\permil'))])))
            if ('cmd', '\\circ') in p.t:
                varianter.append(lambda: P(toks, grader_av=True))
            if any(t[0] == 'cmd' and t[1] in ('\\sin', '\\cos', '\\tan') for t in p.t):
                varianter.append(lambda: P(toks, trig_grader=True))
            if any(x[0] == 'text' and x[2].strip() in SKALA for x in toks):
                varianter.append(lambda: P(toks, skala=True))
            for lag in varianter:
                try:
                    alt.append(float(sp.N(lag().parse(), 30)))
                except Exception:
                    pass
        if alt:
            r['alt'] = alt
        # avrundingsslakk fra desimaltall i leddet (relativ og absolutt), forsterket av eksponenter
        if p is not None and r['verdi'] is not None:
            sl = 0.0
            sa = 0.0
            eks = [abs(float(p.t[j + 1][1])) for j in range(len(p.t) - 1) if p.t[j] == ('ch', '^') and p.t[j + 1][0] == 'num']
            eks += [abs(float(p.t[j + 2][1])) for j in range(len(p.t) - 2)
                    if p.t[j] == ('ch', '^') and p.t[j + 1] == ('ch', '{') and p.t[j + 2][0] == 'num']
            forst = 1.0 + (max(eks) if eks else 0.0)
            for t in tall:
                if '.' in t[1] and float(t[1]) != 0:
                    d = len(t[1].split('.')[1])
                    sl += 0.5 * 10 ** (-d) / abs(float(t[1])) * forst
                    sa += 0.5 * 10 ** (-d) * forst
            if r['lit'] is not None:  # rent tall: literal-toleransen gjelder, ikke slakk
                sl = sa = 0.0
            if any(t in p.t for t in (('cmd', '\\%'), ('cmd', '\\permil'), ('cmd', '\\circ'), ('cmd', '\\frac'),
                                      ('cmd', '\\cdot'), ('ch', '^'), ('ch', '/'), ('ch', ':'))):
                sa = 0.0  # absolutt slakk bare for rene summer/differanser
            r['slakk'] = sl
            r['slakk_abs'] = sa
    except (Uparserbar, Tidsavbrudd, Exception) as ex:
        r['feil'] = type(ex).__name__ + ':' + str(ex)[:40]
    finally:
        signal.setitimer(signal.ITIMER_REAL, 0)
    CACHE[key] = r
    return r


def toleranse(a, b, rel):
    """Hvor stort avvik som godtas mellom a og b (absolutt)."""
    t = 1e-9 * max(1.0, abs(a['verdi']), abs(b['verdi']))
    for x in (a, b):
        if x.get('lit'):
            d, nuller, skala = x['lit']
            lt = 0.5 * 10 ** (-d) * skala * 1.0001
            if rel == '≈' and nuller:
                lt = max(lt, 0.5 * 10 ** nuller * skala * 1.0001)
            t = max(t, lt)
    return t


def mellom_slakk(a, gitt):
    """Relativ slakk fra desimaltall i a som IKKE står i oppgaveteksten (avrundede mellomverdier)."""
    sl = 0.0
    for t in re.findall(r'(?<![\d.])\d+\.\d+', a['tekst']):
        if t in gitt or float(t) == 0 or len(t.split('.')[1]) < 2 or len(t.replace('.', '').lstrip('0')) < 3:
            continue  # bare tall med ≥ 2 desimaler og ≥ 3 gjeldende siffer regnes som avrundede mellomverdier
        sl += 0.5 * 10 ** (-len(t.split('.')[1])) / abs(float(t))
    return sl


def sjekk_par(a, b, rel, gitt=frozenset()):
    """→ 'ok' | 'avrunding-likhet' | 'avvik' | None (ikke sjekkbar)."""
    if a.get('verdi') is None or b.get('verdi') is None:
        return None
    ea = set(x for x in a['enheter'] if not x.startswith('×'))
    eb = set(x for x in b['enheter'] if not x.startswith('×'))
    if ea and eb and ea != eb:
        return None
    tol = toleranse(a, b, rel)
    m = max(abs(a['verdi']), abs(b['verdi']))
    slakk = max(b.get('slakk', 0.0) * m, b.get('slakk_abs', 0.0))
    grense = max(tol, slakk * 1.0001 + 1e-12)
    beste = None
    for x in [a['verdi']] + a.get('alt', []):
        for y in [b['verdi']] + b.get('alt', []):
            # alternativ tolkning (%, grader, «millioner») skalerer toleransen likt
            sk = max(abs(x / a['verdi']) if a['verdi'] else 1.0, abs(y / b['verdi']) if b['verdi'] else 1.0, 1e-300)
            d = abs(x - y)
            if d <= 1e-9 * max(1.0, abs(x), abs(y)):
                return 'ok'
            if d <= grense * sk:
                beste = 'ok' if rel == '≈' else 'avrunding-likhet'
    if beste:
        return beste
    # avvik som forklares av avrundede mellomverdier i VENSTRE ledd («50 000 · 1,2653 ≈ 63 266», der 63 266 er regnet
    # fra eksakt verdi): ikke en regnefeil, men vis det som info
    sa = mellom_slakk(a, gitt) * m * 1.0001
    if sa and min(abs(x - y) for x in [a['verdi']] + a.get('alt', []) for y in [b['verdi']] + b.get('alt', [])) <= max(grense, sa) + tol:
        return 'avrunding-mellomledd'
    return 'avvik'


def sjekk_symbolsk(a, b):
    if a.get('uttr') is None or b.get('uttr') is None or a['funksjon'] or b['funksjon']:
        return None
    if len(a['uttr'].free_symbols) == 0 or len(b['uttr'].free_symbols) == 0:
        return None
    if a['uttr'].is_Symbol or b['uttr'].is_Symbol:
        return None
    if a['uttr'].free_symbols != b['uttr'].free_symbols:
        return None  # innsetting/sammenlikning av koeffisienter, ikke identitet
    try:
        signal.setitimer(signal.ITIMER_REAL, 1.0)
        d = sp.simplify(sp.expand(a['uttr'] - b['uttr']))
        if d == 0:
            return 'ok'
        # numerisk prøve med tilfeldige positive verdier (unngår simplify-svakheter)
        syms = sorted(d.free_symbols, key=str)
        for vals in ((1.37, 2.11, 0.73, 1.9), (0.61, 1.53, 2.47, 3.1)):
            sub = {s: vals[i % 4] + 0.1 * i for i, s in enumerate(syms)}
            v = complex(sp.N(d.subs(sub)))
            if abs(v) > 1e-7 * max(1.0, abs(complex(sp.N(a['uttr'].subs(sub))))):
                return 'symbolsk-avvik'
        return 'ok'
    except Exception:
        return None
    finally:
        signal.setitimer(signal.ITIMER_REAL, 0)

# ------------------------------------------------------------------ kjeder i et felt


def rader(matte_tekst):
    s = normaliser(matte_tekst)
    if re.search(r'\\begin\{(?:array|cases|matrix|pmatrix|bmatrix|tabular|vmatrix)\}', s):
        return []
    s = re.sub(r'\\(?:begin|end)\{(?:aligned|align\*?|gathered|split|alignedat|eqnarray\*?)\}(?:\{\d+\})?', ' ', s)
    return [r for r in re.split(r'\\\\(?:\[[^\]]*\])?', s)]


ENHET_ETTER = re.compile(r'^[ \u00a0]*(tusen|millioner|million|milliarder|milliard|mrd\.?|' + '|'.join(sorted((re.escape(e) for e in ENHETER if e not in ('C', 'A', 'V', 'W', 'N', 'J', 't', 's', 'h', 'g', 'l', 'L', 'T', 'm')), key=len, reverse=True)) + r'|m|s|h|g|L|t)(?![\wæøå])')


def kjeder_i_felt(tekst, art):
    """→ liste av kjeder; hver kjede = liste av (rel, tokens). Enhet rett etter $…$ i teksten («$= 4000$ m») hektes på
    siste ledd, så enhetsomregninger ikke sammenliknes som rene tall."""
    ut = []
    forrige_siste = None
    forrige_slag = None
    segs = segmenter(tekst, art)
    for nr, (slag, x) in enumerate(segs):
        if slag in ('inline', 'display') and nr + 1 < len(segs) and segs[nr + 1][0] == 'tekst':
            me = ENHET_ETTER.match(segs[nr + 1][1])
            if me:
                x = x + ' \\text{%s}' % me.group(1)
        if slag not in ('inline', 'display'):
            if slag == 'tekst' and x.strip() and not re.fullmatch(r'\s*(?:[:.,]|og|eller|altså|så|dvs\.?)?\s*', x):
                forrige_siste = None if '\n\n' in x or len(x.strip()) > 3 else forrige_siste
            if slag == 'tekst' and '\n' in x and forrige_slag == 'inline':
                forrige_siste = None
            continue
        if slag != forrige_slag and forrige_slag is not None:
            forrige_siste = None  # inline → display (eller omvendt) er ikke en fortsatt kjede
        forrige_slag = slag
        for rad in rader(x):
            toks = tokeniser(rad)
            if not toks:
                continue
            for kj, fortsetter in splitt_kjeder(toks):
                if fortsetter and len(kj) > 1 and forrige_siste is not None:
                    kj = [(None, forrige_siste)] + kj[1:]
                kj = [(r, c) for r, c in kj if c]
                if kj:
                    ut.append(kj)
                    forrige_siste = kj[-1][1]
    return ut

MOTSIGELSE = re.compile(r'\b(?:usant|usann|falsk|stemmer ikke|stemmer ikkje|motsigelse|motseiing|forkast\w*|ikke en løsning|'
                        r'ikkje ei løysing|gjelder ikke|gjeld ikkje|umulig|uråd|ingen løsning|inga løysing|selvmotsigelse|'
                        r'feil|galt|gale|mistak|vanlig feil|typisk feil|påstand|finn feilen|kva er gale|hva er galt)\b', re.I)

# ------------------------------------------------------------------ fasitfelt


def tall_i_tekst(s):
    s = normaliser(s)
    s = re.sub(r'(?<=\d),(?=\d)', '.', s)
    return [float(x) for x in re.findall(r'-?\d+(?:\.\d+)?', s)]


def sjekk_fasit(svar, losning):
    try:
        v = float(str(svar).replace(',', '.').replace(' ', '').replace('\u2009', ''))
    except ValueError:
        return None
    tall = tall_i_tekst(losning)
    if not tall:
        return None
    d = len(str(svar).split('.')[1]) if '.' in str(svar) else 0
    tol = max(0.5 * 10 ** (-d), 1e-9 * abs(v))
    for x in tall:
        for kandidat in (x, -x, x / 100, x * 100):
            if abs(kandidat - v) <= tol:
                return 'ok'
    return 'fasitfelt'

# ------------------------------------------------------------------ hoved


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('kapitler', nargs='+')
    ap.add_argument('--nn', action='store_true', help='sjekk også nn-filene (tallene skal være like – dekket av maskin.py)')
    ap.add_argument('--ut', default='regn.json')
    ap.add_argument('--vis', type=int, default=30, help='antall avvik som skrives ut')
    ap.add_argument('--roller', default='alle', help='alle | losning (bare løsninger/eksempler/fasit)')
    a = ap.parse_args()
    ider = finn_ider(a.kapitler)
    totalt = collections.Counter()
    per_kap = {}
    avvik = []
    per_blokk = collections.defaultdict(dict)
    uparsbar_grunn = collections.Counter()
    for cid in ider:
        E_ER_EULER[0] = cid.split('-')[0] not in ('1p', '1t', '2p', '2py', '8', '9', '10')
        for sprak in (['bm', 'nn'] if a.nn else ['bm']):
            kap = les_kap(cid, sprak)
            if kap is None:
                continue
            c = collections.Counter()
            for b, ctx in blokker(kap):
                for_b = (c['kjeder'], c['kjeder_sjekket'], c['ledd_uparserbar'])
                F = felt(b)
                blokktekst = ' '.join(f.tekst for f in F)
                gitt = frozenset(re.findall(r'(?<![\d.])\d+\.\d+', normaliser(' '.join(
                    f.tekst for f in F if f.rolle in ('oppgave', 'teori', 'tittel')))))
                overslag = any(re.search(r'[Oo]verslag|[Aa]nslå|[Aa]nslag|[Oo]mtrentleg|avrund til', f.tekst) for f in F)
                for fe in F:
                    if fe.art not in ('md', 'latex'):
                        continue
                    if a.roller == 'losning' and fe.rolle not in ('losning', 'skjult-losning') and b.get('type') != 'example':
                        continue
                    for kj in kjeder_i_felt(fe.tekst, fe.art):
                        if len(kj) < 2:
                            continue
                        c['kjeder'] += 1
                        ledd = [evaluer(t, uparsbar_grunn) for _, t in kj]
                        c['ledd'] += len(ledd)
                        for l in ledd:
                            if 'feil' in l:
                                c['ledd_uparserbar'] += 1
                                uparsbar_grunn[l['feil'].split(':')[1][:22] if ':' in l['feil'] else l['feil']] += 1
                            elif l['sym']:
                                c['ledd_symbolsk'] += 1
                            else:
                                c['ledd_numerisk'] += 1
                                if l['kilde'] == 'parse_latex':
                                    c['ledd_parse_latex'] += 1
                        nsym = sum(1 for l in ledd if l['sym'])
                        if any('180' in l['tekst'] and '\\pi' in l['tekst'] for l in ledd) and any('\\circ' in l['tekst'] for l in ledd):
                            c['kjeder_omregning'] += 1
                            continue
                        flere_enheter = len(set(l['enheter'] - {'%', '‰'} for l in ledd if 'feil' not in l and l['enheter'] - {'%', '‰'})) >= 2
                        sjekket = False
                        for i in range(1, len(ledd)):
                            rel = kj[i][0] or '='
                            r = sjekk_par(ledd[i - 1], ledd[i], rel, gitt)
                            if r is not None and flere_enheter and bool(ledd[i - 1]['enheter']) != bool(ledd[i]['enheter']):
                                r = None  # enhetsomregning i kjeden: ledd uten enhet kan ikke sammenliknes
                            if r is None and nsym >= 3 and rel == '=' and len(ledd) >= 3:
                                r = sjekk_symbolsk(ledd[i - 1], ledd[i])
                                if r:
                                    c['par_symbolsk'] += 1
                                if r == 'symbolsk-avvik' and i == 1:
                                    r = 'likning?'  # første par i en kjede er ofte likningen selv, ikke en omforming
                            elif r is not None:
                                c['par_numerisk'] += 1
                            if r is None:
                                c['par_ikke_sjekkbar'] += 1
                                continue
                            sjekket = True
                            c['par_' + r] += 1
                            if r == 'avvik' and MOTSIGELSE.search(blokktekst):
                                r = 'motsigelse?'
                            if r == 'avvik' and rel == '≈' and overslag:
                                r = 'overslag'
                            if r not in ('ok', 'likning?'):
                                avvik.append({'klasse': r, 'kapittel': cid, 'fil': sprak, 'blokk': b.get('id'),
                                              'sti': fe.sti, 'rolle': fe.rolle,
                                              'venstre': ledd[i - 1]['tekst'][:80], 'høyre': ledd[i]['tekst'][:80],
                                              'rel': rel, 'v': ledd[i - 1].get('verdi'), 'h': ledd[i].get('verdi')})
                        c['kjeder_sjekket'] += sjekket
                nb = (c['kjeder'] - for_b[0], c['kjeder_sjekket'] - for_b[1], c['ledd_uparserbar'] - for_b[2])
                if nb[0] and sprak == 'bm':
                    per_blokk[cid][b.get('id')] = {'kjeder': nb[0], 'sjekket': nb[1], 'uparserbare_ledd': nb[2]}
                # fasitfelt
                e = b.get('exercise') if isinstance(b.get('exercise'), dict) else None
                if e:
                    for j, s in enumerate(e.get('subTasks') or []):
                        if isinstance(s, dict) and s.get('answer') is not None and isinstance(s.get('solution'), str):
                            if isinstance(s['answer'], (list, dict)):
                                continue
                            r = sjekk_fasit(s['answer'], s['solution'])
                            if r == 'fasitfelt' and re.search(r'løsning|løysing|antall|tal på', (s.get('task') or '') + e.get('task', ''), re.I) \
                                    and str(s['answer']).isdigit() and int(s['answer']) <= 12:
                                r = 'ok'  # svaret er et antall løsninger
                            if r:
                                c['fasit_sjekket'] += 1
                            if r == 'fasitfelt':
                                c['fasit_avvik'] += 1
                                avvik.append({'klasse': 'fasitfelt', 'kapittel': cid, 'fil': sprak, 'blokk': b.get('id'),
                                              'sti': 'exercise.subTasks[%d].answer' % j, 'rolle': 'fasit',
                                              'venstre': str(s['answer']), 'høyre': s['solution'][-80:].replace('\n', '⏎'),
                                              'rel': 'i', 'v': None, 'h': None})
            per_kap[cid + ('' if sprak == 'bm' else ' (nn)')] = dict(c)
            totalt.update(c)
    kl = collections.Counter(x['klasse'] for x in avvik)
    led = totalt['ledd'] or 1
    ut = {'verktoy': 'scripts/audit/regn.py', 'antlr': HAR_ANTLR, 'kapitler': ider, 'totalt': dict(totalt),
          'dekning': {'ledd_parset_andel': round(1 - totalt['ledd_uparserbar'] / led, 3),
                      'kjeder_med_sjekk_andel': round(totalt['kjeder_sjekket'] / (totalt['kjeder'] or 1), 3)},
          'uparserbar_grunner': uparsbar_grunn.most_common(25), 'klasser': dict(kl), 'per_kapittel': per_kap,
          'per_blokk': per_blokk, 'avvik': avvik}
    skriv_json(a.ut, ut)
    print('regn.py: %d kapitler, %d kjeder (%d med minst ett sjekket par = %.0f %%), %d ledd (%.0f %% parset; '
          '%d numeriske, %d symbolske, %d uparserbare; parse_latex-reserve %d)' % (
              len(ider), totalt['kjeder'], totalt['kjeder_sjekket'], 100.0 * totalt['kjeder_sjekket'] / (totalt['kjeder'] or 1),
              totalt['ledd'], 100.0 * (1 - totalt['ledd_uparserbar'] / led), totalt['ledd_numerisk'],
              totalt['ledd_symbolsk'], totalt['ledd_uparserbar'], totalt['ledd_parse_latex']))
    print('par: %d numeriske, %d symbolske, %d ikke sjekkbare · fasitfelt sjekket %d' % (
        totalt['par_numerisk'], totalt['par_symbolsk'], totalt['par_ikke_sjekkbar'], totalt['fasit_sjekket']))
    print('klasser: %s → %s' % (dict(kl), a.ut))
    for x in [y for y in avvik if y['klasse'] == 'avvik'][:a.vis] + [y for y in avvik if y['klasse'] != 'avvik'][:max(0, a.vis // 3)]:
        print('  %-16s %s %-28s %-28s %s  %s %s %s' % (x['klasse'], x['kapittel'], x['blokk'][-28:], x['sti'][-28:],
                                                    x['venstre'][:50], x['rel'], x['høyre'][:50],
                                                    '' if x['v'] is None else '(%.6g vs %.6g)' % (x['v'], x['h'])))


if __name__ == '__main__':
    main()
