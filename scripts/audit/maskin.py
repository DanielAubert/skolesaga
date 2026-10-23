#!/usr/bin/env python3
"""Maskinelle porter for Skolesaga-kapitler (bm + nn, valgfritt narrativ). 0 modelltokens.

Bruk:
  python3 maskin.py 1t 2p                  # prefikser (alle 1t-*, 2p-*)
  python3 maskin.py 1t-3-2 2p-1-1 --narrativ
  python3 maskin.py 1t --ut rapport.json --staving=auto|lokal|node|korpus|av --bare bm|nn
Utdata: JSON (--ut, standard maskin.json i gjeldende mappe) + kort tabell på stdout.
Hvert funn: {port, alvor (feil|bør|info), kapittel, fil (bm|nn|narrativ|nn-narrativ), blokk, sti, utdrag}.
Porter: se PORTER under og README.md."""
import argparse
import collections
import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from felles import (AUDIT, PUBLIC, ROOT, blokker, er_repetisjon, felt, finn_ider, les_kap, segmenter, tall_i,
                    utenfor_matte, bok, skriv_json)
import aeoa

PORTER = collections.OrderedDict([
    ('katex', 'formel som KaTeX ikke kan rendre (eleven ser rød feiltekst)'),
    ('dollar', 'ubalansert $ – eleven ser et dollartegn / formelen rendres ikke'),
    ('prosent-i-matte', '% uten bakstrek i $…$ (resten av formelen forsvinner, A4)'),
    ('krollkomma-tekst', '{,} utenfor matte (A9)'),
    ('desimalpunktum-matte', 'desimalpunktum i matte (2.5 → 2{,}5)'),
    ('desimalpunktum-tekst', 'desimalpunktum i tekst (sannsynlig; unntatt kode, kapittelnr., datoer)'),
    ('tusenskille-komma', 'engelsk tusenskille i matte (12,500, A7)'),
    ('literal-n', 'literal \\n (A1)'),
    ('kontrolltegn', 'kontrolltegn/tab fra \\f \\t \\v \\r \\b (A2)'),
    ('mistet-bakstrek', 'LaTeX-kommando uten bakstrek i matte (A3: «frac{», «cdot»)'),
    ('aeoa', 'ord uten æøå som ordlista avviser, men godtar med æøå (A5)'),
    ('forbudt', 'forbudte ord/notasjon etter Daniels regler (C1–C6, C10, stegnumre, huskeregler …)'),
    ('stegnummer', 'synlige stegnumre i løsning («Steg 1», «1.» som linjestart)'),
    ('svar-mangler', 'eksempel/hovedoppgave med føring over flere linjer uten **Svar:**'),
    ('svar-mangler-rep', 'repetisjonsoppgave uten **Svar:** (info)'),
    ('prosa', 'prosaløsning: a) b) på én linje, eller én lang linje med regning uten føring'),
    ('vanskegrad', 'difficulty mangler eller er utenfor lett|medium|vanskelig'),
    ('vanskegrad-synker', 'vanskegraden synker innen en oppgaverekke (info)'),
    ('dobbel-id', 'samme id to ganger i fila'),
    ('tomt-felt', 'blokk uten elevsynlig innhold'),
    ('bilde-mangler', 'bildesti finnes ikke i public/'),
    ('alt-mangler', 'bilde uten alt-tekst'),
    ('figurhenvisning', 'teksten viser til «figuren/grafen nedenfor» uten figur i blokka eller nabo'),
    ('bmnn-fil', 'nn-fil mangler'),
    ('bmnn-struktur', 'blokk-id-er/rekkefølge/typer/felt ulike bm↔nn'),
    ('bmnn-fasit', 'fasitfelt (answer, isCorrect, difficulty, number, bilde …) ulike bm↔nn'),
    ('bmnn-matte', 'formlene ulike bm↔nn i samme felt'),
    ('bmnn-tall', 'tallene i teksten ulike bm↔nn i samme felt'),
    ('bmnn-svar', 'antall **Svar ulikt bm↔nn'),
    ('bmnn-kode', 'GeoGebra-/kodefelt ulike bm↔nn (info – kan være nynorske kommandonavn)'),
    ('nn-bokmaal', 'bokmålsord i nynorskteksten (fast liste)'),
    ('nn-bokmaal-ord', 'ord (≤10 tegn) i nn som nn_NO avviser og nb_NO godtar – distinkt ordliste (info, mange sammensetninger)'),
    ('fremmede-tegn', 'kyrillisk bokstav i prosa (ser ut som latinsk, men er feil tegn)'),
])
ALVOR = {'katex': 'feil', 'dollar': 'feil', 'prosent-i-matte': 'feil', 'krollkomma-tekst': 'feil',
         'desimalpunktum-matte': 'feil', 'desimalpunktum-tekst': 'bør', 'tusenskille-komma': 'bør', 'literal-n': 'feil',
         'kontrolltegn': 'feil', 'mistet-bakstrek': 'bør', 'aeoa': 'bør', 'stegnummer': 'feil', 'svar-mangler': 'bør',
         'svar-mangler-rep': 'info', 'prosa': 'bør', 'vanskegrad': 'feil', 'vanskegrad-synker': 'info',
         'dobbel-id': 'feil', 'tomt-felt': 'bør', 'bilde-mangler': 'feil', 'alt-mangler': 'bør', 'figurhenvisning': 'bør',
         'bmnn-fil': 'feil', 'bmnn-struktur': 'feil', 'bmnn-fasit': 'feil', 'bmnn-matte': 'bør', 'bmnn-tall': 'bør',
         'bmnn-svar': 'bør', 'bmnn-kode': 'info', 'nn-bokmaal': 'bør', 'nn-bokmaal-ord': 'info', 'fremmede-tegn': 'feil'}

# ------------------------------------------------------------------ regler for forbudte ord / notasjon
# (navn, regex, alvor, hvor: 'tekst' = utenfor matte, 'alt' = hele feltet, bøker: None = alle, ellers sett av bok-prefikser)
UNDER_R1 = {'1p', '1t', '2p', '2py', '8', '9', '10'}
FORBUDT = [
    ('konveks/konkav', r'\b[Kk]onve[kc]s\w*|\b[Kk]onkav\w*', 'feil', 'tekst', None),
    ('smilende/sur graf', r'\b[Ss]mil(?:er|ende)\b|\bsur(?:t)?\b', 'bør', 'tekst', None),
    ('andrederivert', r'\b[Aa]ndrederiv\w*|\b[Aa]ndre deriverte\b', 'feil', 'tekst', None),
    ('IQR/interkvartil', r'\bIQR\b|[Ii]nterkvartil\w*', 'feil', 'alt', None),
    ('arcsin/arccos/arctan', r'arc(?:sin|cos|tan)', 'feil', 'alt', None),
    ('engelsk huskeregel', r'\b(?:SOH|CAH|TOA|PEMDAS|BODMAS|FOIL|PEEL)\b', 'feil', 'alt', None),
    ('«Steg N»', r'(?:^|\*\*|\()\s*(?:Steg|Skritt|Trinn) \d+\b', 'feil', 'tekst', None),
    ('vitenskapelig notasjon', r'[Vv]itenskapel[ei]g (?:notasjon|form)', 'feil', 'tekst', None),
    ('kvotientregel', r'[Kk]votientregel\w*', 'feil', 'tekst', None),
    ('ligning (→ likning)', r'\b[Ll]igning\w*|\w+(?<![Ss]ammen)ligning\w*', 'bør', 'tekst', None),
    ('universitetsord', r'\b[Ii]njektiv\w*|\b[Dd]omenet?\b|\b[Vv]erdiområde\w*|\bHorners?\b|\b[Ss]urjektiv\w*', 'feil', 'tekst', None),
    ('engelske fagord', r'\b[Oo]utliers?\b|\b[Ww]hiskers?\b|[Bb]ox-and|[Bb]reak-even|[Tt]reediagram\w*|[Kk]vadratformel\w*', 'feil', 'tekst', None),
    ('permille (→ promille)', r'[Pp]ermille', 'feil', 'tekst', None),
    ('modelltenkning', r'\bVent,|\b[Ll]a meg sjekke|\bHmm\b|\b[Nn]ei vent\b|\bvent litt\b', 'feil', 'tekst', None),
    ('intern notis', r'\b[VH]2\d\b(?!\s*\d)|\bKM\d{2,}\b|\bQ\d{1,2}\b', 'bør', 'tekst', None),
    ('intervall med ( ) (C2)', r'\\infty\s*(?:\\right)?\s*\)|\(\s*-\s*\\infty|∞\s*\)|\(\s*[-−]\s*∞|\[\s*0\s*,\s*\\infty', 'feil', 'alt', None),
    ('ln/e under R1', r'\\ln\b|\bln\s*\(|\\mathrm\{e\}|(?<![A-Za-z\\])e\^', 'bør', 'alt', UNDER_R1),
    ('R1-stoff i 1T/2P (vendepunkt, kjerneregel, produktregel for derivasjon)', r'\b[Vv]endepunkt\w*|\b[Kk]jerneregel\w*|[Pp]roduktregelen for derivasjon|derivere et produkt', 'bør', 'tekst', UNDER_R1),
    ('kildeforbud (lærebok/forlag)', r'\b(?:Aschehoug|Cappelen|Gyldendal|Fagbokforlaget|Aunivers|Sinus-boka|Sinus 1T|Matematikk 1T-boka)\b', 'bør', 'tekst', None),
    ('læreplanprat', r'[Kk]ompetansemål\w*|\b[Ll]æreplan(?:en|ar|er)?\b|\bLK20\b', 'bør', 'tekst', None),
    ('Hvorfor-boks', r'^\s*(?:\*\*|#+\s*)?Hvorfor\b[^?\n]{0,60}(?:\*\*)?\s*$', 'bør', 'tittel', None),
    ('\\checkmark', r'\\checkmark|✓|✔', 'info', 'alt', None),
]
FORBUDT = [(n, re.compile(r, re.M), a, h, b) for n, r, a, h, b in FORBUDT]

NN_BOKMAAL = re.compile(
    r'(?<![\w/\\-])(ikke|Ikke|hvis|Hvis|hva|Hva|hvordan|Hvordan|hvorfor|Hvorfor|hvilken|hvilke|hvilket|Hvilken|Hvilke|'
    r'hvor|Hvor|hver|hvert|Hver|hvem|Hvem|noen|Noen|mye|Mye|selv|kun|Kun|fra|Fra|bare|Bare|'
    r'løsning|løsningen|løsninger|Løsning|oppgave|oppgaven|oppgaver|oppgavene|Oppgave|tall|tallet|tallene|Tall|'
    r'heltall\w*|brøker|brøkene|nevner|nevneren|telleren|regne|regner|regnet|beregn\w*|Beregn\w*|hele|Hele|samme|Samme|'
    r'sammen|uten|Uten|penger|jeg|Jeg|hun|Hun|ganger|økning|øke|øker|Da|være|vært|disse|Disse|dem|gjør|Gjør|sier|'
    r'(?!forskjellig)\w{2,}lige?|(?!forskjellig)\w{2,}ligt|\w{3,}het(?:en|er|ene)?|[Tt]egn\w*|\w+tegn\w*|røtter|akser|aksene|foran|[Ss]amlet|'
    r'\w{3,}(?:gis|ldes|fales)|'
    r'forteller|finner|trenger|sannsynlighet\w*|Sannsynlighet\w*|eller hvis|Ei metode|NLøs\(|Løs\(|Skjæring\()'
    r'(?![\w/-])')

FIGURORD = re.compile(r'\b(?:figuren|figur(?:en)? (?:under|over|nedenfor|ovenfor)|(?:bildet|biletet) (?:under|over|nedenfor|ovenfor)|skissen|skissa|'
                      r'(?:grafen|diagrammet|tabellen) (?:under|nedanfor|nedenfor|over|ovanfor|ovenfor))\b', re.I)
FIGURTYPER = {'image', 'asymptote', 'geogebra', 'illustration', 'dynamic-plot', 'sign-diagram'}
LATEX_N = re.compile(r'\\n(?:eq|e|eg|abla|u|ot|otin|i|ewline|ormalsize|olimits|atural|earrow|warrow|exists|leq|geq|less|gtr|'
                     r'mid|parallel|subseteq|supseteq|leftarrow|rightarrow|Leftarrow|Rightarrow|leftrightarrow|cong|sim|'
                     r'prec|succ|vdash|ewcommand|onumber)(?![a-zA-Z])')
KOMMANDOER = r'frac|dfrac|cdot|sqrt|approx|times|left|right|text|mathrm|infty|langle|rangle|leq|geq|neq|implies|Rightarrow|Leftrightarrow'
MISTET = re.compile(r'(?<![\\a-zA-Z])(?:' + KOMMANDOER + r')(?=[{\s(\[]|$)')
STEGLINJE = re.compile(r'(?m)^\s*(?:\*\*)?\s*\d{1,2}[.)]\s+(?:\*\*)?\S')
SVAR = re.compile(r'\*\*\s*Svar')
DIFF_OK = ('lett', 'medium', 'vanskelig')
DIFF_RANG = {'lett': 0, 'medium': 1, 'middels': 1, 'vanskelig': 2}
UTEN_SVAR_OK = re.compile(r'\b(?:Vis at|Bevis|Forklar|Begrunn|Tegn|Skisser|Lag|Beskriv|Diskuter|Drøft|Vurder|'
                          r'Undersøk|Utforsk|Sjekk|Kontroller|Teikn|Grunngi)\b', re.I)  # nn-former (22.10: «Teikn», «Grunngi» ga falske svar-mangler)


def kort(s, n=110):
    s = s.replace('\n', '⏎')
    return s if len(s) <= n else s[:n] + '…'


def ktx(s, start, slutt, n=45):
    return kort(s[max(0, start - n):slutt + n], 2 * n + 20)


class Kjoring(object):
    def __init__(self, staving):
        self.funn = []
        self.katex_jobber = []  # (tex, display, meta)
        self.ord = {'nb_NO': {}, 'nn_NO': {}}
        self.staving = staving
        self.n_felt = 0
        self.n_blokker = 0

    def f(self, port, cid, fil, blokk, sti, utdrag, alvor=None, **ekstra):
        d = {'port': port, 'alvor': alvor or ALVOR.get(port, 'bør'), 'kapittel': cid, 'fil': fil, 'blokk': blokk,
             'sti': sti, 'utdrag': utdrag}
        d.update(ekstra)
        self.funn.append(d)

    # ---------------------------------------------------------------- tekstporter per felt
    def tekstporter(self, cid, fil, b, ctx, F):
        bid = b.get('id')
        bk = bok(cid)
        lang = 'nn_NO' if fil.startswith('nn') else 'nb_NO'
        for fe in F:
            self.n_felt += 1
            s = fe.tekst
            if fe.art == 'bilde' or fe.art == 'fasit':
                if fe.art == 'fasit' and re.search(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', s):
                    self.f('kontrolltegn', cid, fil, bid, fe.sti, kort(repr(s)))
                continue
            # kontrolltegn (også i kode) og tab som er spist \t
            for m in re.finditer(r'[\x00-\x08\x0b\x0c\x0e-\x1f]|\t(?=ext|imes|an\b|heta|au|riangle|frac)|\r(?=ight|ho)', s):
                self.f('kontrolltegn', cid, fil, bid, fe.sti, '%r i …%s…' % (m.group(0), kort(s[max(0, m.start() - 20):m.end() + 20], 60)))
                break
            if fe.art == 'kode':
                continue
            seg = segmenter(s, fe.art)
            tekst = ''.join(x for sl, x in seg if sl == 'tekst')
            maths = [(sl, x) for sl, x in seg if sl in ('inline', 'display')]
            # KaTeX-jobber
            for sl, x in maths:
                self.katex_jobber.append((x, sl == 'display', (cid, fil, bid, fe.sti)))
            # dollar
            t_uten_esc = tekst.replace('\\$', '')
            if '$' in t_uten_esc:
                i = t_uten_esc.index('$')
                self.f('dollar', cid, fil, bid, fe.sti, ktx(t_uten_esc, i, i + 1))
            # literal \n
            for m in re.finditer(r'\\n', tekst):
                self.f('literal-n', cid, fil, bid, fe.sti, ktx(tekst, m.start(), m.end()))
                break
            for sl, x in maths:
                for m in re.finditer(r'\\n', x):
                    if not LATEX_N.match(x, m.start()):
                        self.f('literal-n', cid, fil, bid, fe.sti, '$' + kort(x, 80) + '$')
                        break
            # {,} utenfor matte
            if '{,}' in tekst:
                i = tekst.index('{,}')
                self.f('krollkomma-tekst', cid, fil, bid, fe.sti, ktx(tekst, i, i + 3))
            m = re.search(r'[\u0400-\u04ff]', tekst)
            if m:
                self.f('fremmede-tegn', cid, fil, bid, fe.sti, 'U+%04X i %s' % (ord(m.group(0)), ktx(tekst, m.start(), m.end(), 20)))
            # matteporter
            for sl, x in maths:
                xx = re.sub(r'\\text\{[^{}]*\}|\\operatorname\{[^{}]*\}|\\mathrm\{[^{}]*\}', ' ', x)
                m = re.search(r'(?<![\d.\\{])\d+\.\d+(?![\d.])', xx)
                if m:
                    self.f('desimalpunktum-matte', cid, fil, bid, fe.sti, '$' + kort(x, 90) + '$')
                if re.search(r'(?<!\\)%', x):
                    self.f('prosent-i-matte', cid, fil, bid, fe.sti, '$' + kort(x, 90) + '$')
                if re.search(r'(?<![\d{])\d{1,3},\d{3}(?![\d}])', xx) and not re.search(r'[(\[]\s*-?\d{1,3},\d{3}\s*[)\]]', xx):
                    self.f('tusenskille-komma', cid, fil, bid, fe.sti, '$' + kort(x, 90) + '$')
                m = MISTET.search(re.sub(r'\\text\{[^{}]*\}', ' ', x))
                if m:
                    self.f('mistet-bakstrek', cid, fil, bid, fe.sti, '$' + kort(x, 90) + '$')
            # desimalpunktum i tekst (sannsynlig)
            for m in re.finditer(r'(?<![\w.,/#-])(\d+)\.(\d+)(?![\d.]|\.\d)', tekst):
                før = tekst[max(0, m.start() - 22):m.start()]
                if re.search(r'(?:[Kk]apittel|[Kk]ap\.|[Dd]elkapittel|[Oo]ppg(?:ave|åve)\w*|[Ee]ksempel|[Ff]igur|[Tt]abell|'
                             r'[Ss]eksjon|[Aa]vsnitt|[Dd]el|[Pp]unkt|[Vv]ersjon|[Tt]ema|[Ss]etning|[Dd]efinisjon|kl\.|'
                             r'[Rr]egel|[Mm]ål|[Ss]e|[Ss]jå|jf\.?|[Ii]|[Ff]ra|[Ff]rå|[Kk]lokk[ae]n?)\s*\(?$', før):
                    continue
                if re.match(r'\s*#', tekst[tekst.rfind('\n', 0, m.start()) + 1:m.start()] or ''):
                    continue
                if re.search(r'\d\.\d{1,2}\.\d', tekst[max(0, m.start() - 3):m.end() + 4]):
                    continue
                if re.search(r'\]\(|https?://|/\S*$', tekst[max(0, m.start() - 40):m.start()]):
                    continue
                self.f('desimalpunktum-tekst', cid, fil, bid, fe.sti, ktx(tekst, m.start(), m.end(), 30))
                break
            # forbudt
            for navn, rx, alv, hvor, bøker in FORBUDT:
                if bøker is not None and bk not in bøker:
                    continue
                if hvor == 'tittel':
                    if fe.rolle != 'tittel' and not (fe.sti.endswith('content') and rx.search(s[:80])):
                        continue
                    mål = s[:120]
                else:
                    mål = tekst if hvor == 'tekst' else s
                m = rx.search(mål)
                if m and navn == 'læreplanprat' and ('fordypning' in s.lower() or 'fordjuping' in s.lower()):
                    alv = 'info'  # «Fordypning — ikke en del av læreplanen» er pålagt merking
                if m:
                    self.f('forbudt', cid, fil, bid, fe.sti, '%s: %s' % (navn, ktx(mål, m.start(), m.end(), 35)),
                           alvor=alv, regel=navn)
            # stegnummer i løsninger
            if fe.rolle in ('losning', 'skjult-losning'):
                m = STEGLINJE.search(re.sub(r'```[\s\S]*?```', '', s))
                if m and not any(re.search(r'(?:^|\s)1[.)]\s', g.tekst) for g in F if g.rolle == 'oppgave'):
                    self.f('stegnummer', cid, fil, bid, fe.sti, ktx(s, m.start(), m.end(), 20))
            # æøå-ord samles
            for w in aeoa.ord_i(tekst):
                rad = self.ord[lang].get(w)
                if rad is None:
                    i = tekst.find(w)
                    rad = self.ord[lang][w] = [0, [(cid, fil, bid, ktx(tekst, i, i + len(w), 25))]]
                rad[0] += 1
            # bokmål i nn
            if fil.startswith('nn'):
                for m in NN_BOKMAAL.finditer(tekst):
                    self.f('nn-bokmaal', cid, fil, bid, fe.sti, '«%s»: %s' % (m.group(1), ktx(tekst, m.start(), m.end(), 30)),
                           ord=m.group(1))

    # ---------------------------------------------------------------- struktur per fil
    def strukturporter(self, cid, fil, kap):
        bl = blokker(kap)
        ider = collections.Counter()
        for b, ctx in bl:
            ider[b.get('id')] += 1
            e = b.get('exercise')
            if isinstance(e, dict) and e.get('id') and e['id'] != b.get('id'):
                ider[e['id']] += 1
        for i, n in ider.items():
            if n > 1 and i:
                self.f('dobbel-id', cid, fil, i, '', '%d forekomster' % n)
        forrige_diff = None
        for k, (b, ctx) in enumerate(bl):
            self.n_blokker += 1
            bid = b.get('id')
            t = b.get('type')
            F = felt(b)
            if not F and t not in ('_kapittel', 'audio', 'video', 'finance-calculator'):
                self.f('tomt-felt', cid, fil, bid, '', 'type %s uten elevsynlig innhold' % t)
            self.tekstporter(cid, fil, b, ctx, F)
            # bilder
            srcs = [fe for fe in F if fe.art == 'bilde']
            for fe in F:
                if fe.art in ('md',):
                    for m in re.finditer(r'!\[([^\]]*)\]\(([^)\s]+)\)', fe.tekst):
                        srcs.append(type(fe)(fe.sti, m.group(2), 'bilde', 'bilde'))
            for fe in srcs:
                u = fe.tekst.split('?')[0].split('#')[0]
                if u.startswith('/') and not os.path.exists(os.path.join(PUBLIC, u.lstrip('/'))):
                    self.f('bilde-mangler', cid, fil, bid, fe.sti, u)
            if t == 'image' and not (b.get('alt') or '').strip():
                self.f('alt-mangler', cid, fil, bid, 'alt', b.get('src', ''))
            # figurhenvisning uten figur
            har_fig = bool(srcs) or t in FIGURTYPER
            if not har_fig:
                nabo = [bl[j][0] for j in range(max(0, k - 3), min(len(bl), k + 4)) if j != k]
                if not any(n.get('type') in FIGURTYPER or '![' in json.dumps(n, ensure_ascii=False) for n in nabo):
                    for fe in F:
                        if fe.art == 'md':
                            tx = utenfor_matte(fe.tekst)
                            m = FIGURORD.search(tx)
                            if m and not re.search(r'\b(?:[Tt]egn|[Ll]ag|[Ss]kisser|[Tt]eikn)\b[^.]{0,40}$', tx[:m.start()]):
                                self.f('figurhenvisning', cid, fil, bid, fe.sti, ktx(tx, m.start(), m.end(), 35))
                                break
            # oppgaver: vanskegrad, svar, prosa
            rep = er_repetisjon(b, ctx)
            if t == 'exercise' and isinstance(b.get('exercise'), dict):
                e = b['exercise']
                d = e.get('difficulty')
                if d not in DIFF_OK and not (d is None and 'narr' in fil):
                    self.f('vanskegrad', cid, fil, bid, 'exercise.difficulty', repr(d))
                if not rep:
                    if forrige_diff is not None and d in DIFF_RANG and DIFF_RANG[d] < forrige_diff[0]:
                        self.f('vanskegrad-synker', cid, fil, bid, 'exercise.difficulty', '%s etter %s (%s)' % (d, forrige_diff[1], forrige_diff[2]))
                    if d in DIFF_RANG:
                        forrige_diff = (DIFF_RANG[d], d, bid)
            elif t not in ('_kapittel',) and t != 'exercise':
                if t in ('text', 'definition', 'theorem', 'example'):
                    forrige_diff = None  # ny oppgaverekke etter teori
            oppg = ' '.join(fe.tekst for fe in F if fe.rolle == 'oppgave')
            for fe in F:
                if fe.rolle not in ('losning',) and not (fe.rolle == 'skjult-losning' and rep):
                    continue
                if fe.art != 'md' or '.feedback' in fe.sti or '.explanation' in fe.sti:
                    continue
                s = fe.tekst
                linjer = [l for l in s.split('\n') if l.strip()]
                if t == 'example':
                    if not SVAR.search(s) and fe.sti == 'solution':
                        if UTEN_SVAR_OK.search(b.get('problem') or ''):
                            continue
                        self.f('svar-mangler', cid, fil, bid, fe.sti, kort(linjer[-1] if linjer else '', 90))
                elif t == 'exercise':
                    if not SVAR.search(s) and len(linjer) >= 2 and not UTEN_SVAR_OK.search(oppg):
                        self.f('svar-mangler-rep' if rep else 'svar-mangler', cid, fil, bid, fe.sti,
                               kort(linjer[-1], 90))
                # prosa (bare synlige løsninger; bilder teller ikke som tekst)
                for l in ([] if fe.rolle != 'losning' else [re.sub(r'!\[[^\]]*\]\([^)]*\)', '', x) for x in linjer]):
                    if SVAR.match(l.strip()):
                        continue
                    if re.search(r'(?:^|\s)a\)', l) and re.search(r'\sb\)', l) and fe.rolle == 'losning':
                        self.f('prosa', cid, fil, bid, fe.sti, 'a) b) på én linje: ' + kort(l, 90))
                        break
                    ut = utenfor_matte(l)
                    nord = len(re.findall(r'[A-Za-zÆØÅæøå]{2,}', ut))
                    nrel = len(re.findall(r'=|≈|\\approx', l))
                    if len(l) > 220 and nord >= 14 and nrel >= 2:
                        self.f('prosa', cid, fil, bid, fe.sti, 'lang linje (%d tegn, %d ord, %d =): %s' % (len(l), nord, nrel, kort(l, 70)))
                        break
        return bl

    # ---------------------------------------------------------------- bm↔nn
    def bmnn(self, cid, bm, nn):
        if nn is None:
            self.f('bmnn-fil', cid, 'nn', '', '', 'nn/%s.json finnes ikke' % cid)
            return
        A = [(b, c) for b, c in blokker(bm)]
        B = [(b, c) for b, c in blokker(nn)]
        ia = [b.get('id') for b, _ in A]
        ib = [b.get('id') for b, _ in B]
        mb = {b.get('id'): b for b, _ in B}
        mangler = [i for i in ia if i not in mb]
        ekstra = [i for i in ib if i not in set(ia)]
        for i in mangler:
            self.f('bmnn-struktur', cid, 'nn', i, '', 'blokka mangler i nn')
        for i in ekstra:
            self.f('bmnn-struktur', cid, 'nn', i, '', 'blokka finnes bare i nn')
        felles = [i for i in ia if i in mb]
        if felles != [i for i in ib if i in set(felles)]:
            self.f('bmnn-struktur', cid, 'nn', '', '', 'blokkrekkefølgen er ulik')
        for b, _ in A:
            i = b.get('id')
            if i not in mb:
                continue
            c = mb[i]
            if b.get('type') != c.get('type'):
                self.f('bmnn-struktur', cid, 'nn', i, 'type', '%s vs %s' % (b.get('type'), c.get('type')))
                continue
            Fa = {f.sti: f for f in felt(b)}
            Fb = {f.sti: f for f in felt(c)}
            for s in Fa:
                if s not in Fb:
                    self.f('bmnn-struktur', cid, 'nn', i, s, 'feltet mangler i nn')
            for s in Fb:
                if s not in Fa:
                    self.f('bmnn-struktur', cid, 'nn', i, s, 'feltet finnes bare i nn')
            for s, fa in Fa.items():
                fb = Fb.get(s)
                if fb is None:
                    continue
                if fa.art == 'bilde':
                    if re.sub(r'-nn(?=\.\w+$)', '', fa.tekst) != re.sub(r'-nn(?=\.\w+$)', '', fb.tekst):
                        self.f('bmnn-fasit', cid, 'nn', i, s, '%s vs %s' % (fa.tekst, fb.tekst))
                    continue
                if fa.art == 'fasit':
                    na, nb = fa.tekst, fb.tekst
                    if s.endswith('expressionAnswer'):
                        na, nb = re.sub(r'\s', '', na), re.sub(r'\s', '', nb)
                    if na != nb:
                        self.f('bmnn-fasit', cid, 'nn', i, s, '%s vs %s' % (kort(fa.tekst, 50), kort(fb.tekst, 50)))
                    continue
                if fa.art == 'kode':
                    if fa.tekst != fb.tekst:
                        self.f('bmnn-kode', cid, 'nn', i, s, '%s vs %s' % (kort(fa.tekst, 50), kort(fb.tekst, 50)))
                    continue
                ma = [norm_matte(x) for _, x in segmenter(fa.tekst, fa.art) if _ in ('inline', 'display')]
                mbb = [norm_matte(x) for _, x in segmenter(fb.tekst, fb.art) if _ in ('inline', 'display')]
                if ma != mbb:
                    d = [(x, y) for x, y in zip(ma, mbb) if x != y][:1]
                    hint = ('%s vs %s' % (kort(d[0][0], 50), kort(d[0][1], 50))) if d else '%d vs %d formler' % (len(ma), len(mbb))
                    self.f('bmnn-matte', cid, 'nn', i, s, hint)
                elif tall_i(utenfor_matte(fa.tekst, fa.art)) != tall_i(utenfor_matte(fb.tekst, fb.art)):
                    ta = collections.Counter(tall_i(utenfor_matte(fa.tekst, fa.art)))
                    tb = collections.Counter(tall_i(utenfor_matte(fb.tekst, fb.art)))
                    self.f('bmnn-tall', cid, 'nn', i, s, 'bare bm: %s · bare nn: %s' % (
                        sorted((ta - tb).elements())[:6], sorted((tb - ta).elements())[:6]))
                if len(SVAR.findall(fa.tekst)) != len(re.findall(r'\*\*\s*Svar', fb.tekst)):
                    self.f('bmnn-svar', cid, 'nn', i, s, '%d vs %d' % (len(SVAR.findall(fa.tekst)), len(SVAR.findall(fb.tekst))))

    # ---------------------------------------------------------------- KaTeX (én node-prosess for alt)
    def kjor_katex(self):
        if not self.katex_jobber:
            return 'ingen formler'
        node = os.environ.get('NODE') or 'node'
        katex = os.environ.get('KATEX_STI') or os.path.join(ROOT, 'node_modules', 'katex')
        inn = '\n'.join(json.dumps({'i': i, 'tex': t, 'display': d}) for i, (t, d, _) in enumerate(self.katex_jobber))
        try:
            p = subprocess.run([node, os.path.join(AUDIT, 'katex_port.cjs'), katex], input=inn, capture_output=True,
                               text=True, timeout=600)
        except Exception as e:
            return 'KaTeX-porten kunne ikke kjøres: %s' % e
        for linje in p.stdout.splitlines():
            r = json.loads(linje)
            t, d, (cid, fil, bid, sti) = self.katex_jobber[r['i']]
            self.f('katex', cid, fil, bid, sti, '%s ← $%s$' % (r['feil'][:90], kort(t, 70)))
        return p.stderr.strip()


def norm_matte(x):
    x = re.sub(r'\\(?:text|mathrm|textrm|operatorname)\{[^{}]*\}', 'T', x)
    return re.sub(r'\s+|\\[,;: !]', '', x)


def tabell(funn, ider):
    per = collections.OrderedDict((p, collections.Counter()) for p in PORTER)
    for f in funn:
        per.setdefault(f['port'], collections.Counter())
        per[f['port']]['narr' if 'narr' in f['fil'] else ('nn' if f['fil'].startswith('nn') else 'bm')] += 1
        per[f['port']]['kap:' + f['kapittel']] += 1
    rader = ['%-22s %5s %5s %5s %5s  %s' % ('port', 'bm', 'nn', 'narr', 'kap', 'alvor')]
    for p, c in per.items():
        nk = len([k for k in c if k.startswith('kap:')])
        rader.append('%-22s %5d %5d %5d %5d  %s' % (p, c['bm'], c['nn'], c['narr'], nk, ALVOR.get(p, 'var.')))
    return '\n'.join(rader)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('kapitler', nargs='+')
    ap.add_argument('--ut', default='maskin.json')
    ap.add_argument('--narrativ', action='store_true')
    ap.add_argument('--bare', choices=['bm', 'nn'])
    ap.add_argument('--staving', default='auto', choices=['auto', 'lokal', 'node', 'korpus', 'av'])
    ap.add_argument('--stille', action='store_true')
    ap.add_argument('--tsv', help='skriv også en kompakt funnliste (én linje per funn) for den som skal rette')
    a = ap.parse_args()
    ider = finn_ider(a.kapitler, narrativ=a.narrativ)
    if not ider:
        sys.exit('ingen kapitler funnet for %s' % a.kapitler)
    K = Kjoring(a.staving)
    for cid in ider:
        narr = cid.endswith('-narrativ')
        bm = les_kap(cid, 'bm')
        nn = les_kap(cid, 'nn')
        if bm is not None and a.bare != 'nn':
            K.strukturporter(cid, 'narrativ' if narr else 'bm', bm)
        if nn is not None and a.bare != 'bm':
            K.strukturporter(cid, 'nn-narrativ' if narr else 'nn', nn)
        if not narr and a.bare is None and bm is not None:
            K.bmnn(cid, bm, nn)
    katex_status = K.kjor_katex()
    occ = {lang: d for lang, d in K.ord.items() if d}
    aeoa_funn, nnb_funn, aeoa_kilde = aeoa.sjekk(occ, staving=a.staving)
    for x in nnb_funn:
        if len(x['ord']) > 10:
            continue
        for (cid, fil, bid, kt) in x['eks'][:1]:
            K.f('nn-bokmaal-ord', cid, fil, bid, '', '«%s» (×%d): %s' % (x['ord'], x['antall'], kt), ord=x['ord'], antall=x['antall'])
    for x in aeoa_funn:
        for (cid, fil, bid, kt) in x['eks'][:1]:
            K.f('aeoa', cid, fil, bid, '', '«%s» → %s (×%d): %s' % (x['ord'], '/'.join(x['forslag'][:2]), x['antall'], kt),
                ord=x['ord'], forslag=x['forslag'], antall=x['antall'])
    teller = collections.Counter(f['port'] for f in K.funn)
    ut = {'verktoy': 'scripts/audit/maskin.py', 'kapitler': ider, 'blokker': K.n_blokker, 'felt': K.n_felt,
          'formler': len(K.katex_jobber), 'katex': katex_status, 'staving': aeoa_kilde,
          'teller': dict(teller), 'porter': PORTER, 'funn': K.funn}
    skriv_json(a.ut, ut)
    if a.tsv:
        with open(a.tsv, 'w', encoding='utf-8') as f:
            f.write('alvor\tport\tkapittel\tfil\tblokk\tsti\tutdrag\n')
            for x in sorted(K.funn, key=lambda x: ({'feil': 0, 'bør': 1}.get(x['alvor'], 2), x['kapittel'], x['port'])):
                f.write('\t'.join(str(x.get(k, '')).replace('\t', ' ') for k in
                                   ('alvor', 'port', 'kapittel', 'fil', 'blokk', 'sti', 'utdrag')) + '\n')
    if not a.stille:
        print('maskin.py: %d kapitler, %d blokker, %d felt, %d formler (%s), staving: %s' % (
            len(ider), K.n_blokker, K.n_felt, len(K.katex_jobber), katex_status, aeoa_kilde))
        print(tabell(K.funn, ider))
        print('funn totalt: %d (feil %d, bør %d, info %d) → %s' % (
            len(K.funn), sum(1 for f in K.funn if f['alvor'] == 'feil'), sum(1 for f in K.funn if f['alvor'] == 'bør'),
            sum(1 for f in K.funn if f['alvor'] == 'info'), a.ut))


if __name__ == '__main__':
    main()
