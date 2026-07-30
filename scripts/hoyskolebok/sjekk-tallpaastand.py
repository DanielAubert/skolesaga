#!/usr/bin/env python3
"""Etterregner RENT NUMERISKE likhetskjeder i bøkenes matte.

Måler én konkret del av faglig riktighet: at tallene stemmer. Kan ikke måle om
et resonnement er riktig — bare om «$12 \\cdot 3 = 36$» faktisk er 36.

Grepet er hentet fra byggeagentenes egne sluttporter, som leste tallpåstander
RETT UT av de ferdige JSON-filene framfor å stole på byggeskriptet. Del 6+7 i
tfy4115 fant 5 reelle feil slik, ma1301 Del 2+3 fant 5.

⚠ TO FELLER, begge dokumentert av agentene:
  1. Mattespenn må pares på dollarnummer fra strengens start. Et regex som
     `\\$[^$]*\\$` parer et avsluttende dollartegn med det neste åpnende.
  2. Kjeder med SYMBOLER skal ikke evalueres. Den naive varianten leste «1=6»
     ut av `6^{k+1}-1=6\\cdot 6^k-1`. Derfor: bare kjeder som utelukkende
     inneholder siffer og operatorer.
"""
import glob, json, os, re, sys, collections
from fractions import Fraction

GJERDE = re.compile(r'```[\s\S]*?```')
IKODE = re.compile(r'`[^`\n]*`')
ESC = re.compile(r'\\\$')

def spenn2(s):
    """Som spenn(), men gir også startposisjonen, så konteksten kan leses."""
    mk = list(s)
    for rx in (GJERDE, IKODE, ESC):
        for t in rx.finditer(''.join(mk)):
            for i in range(t.start(), t.end()): mk[i] = '\x00'
    mkt = ''.join(mk); ut = []
    for t in re.finditer(r'\$\$[\s\S]*?\$\$', mkt):
        ut.append((t.group(0)[2:-2], t.start()))
        for i in range(t.start(), t.end()): mk[i] = '\x00'
    pos = [i for i, c in enumerate(''.join(mk)) if c == '$']
    for a, b in zip(pos[0::2], pos[1::2]):
        ut.append((s[a+1:b], a))
    return ut


def spenn(s):
    mk = list(s)
    for rx in (GJERDE, IKODE, ESC):
        for t in rx.finditer(''.join(mk)):
            for i in range(t.start(), t.end()): mk[i] = '\x00'
    mkt = ''.join(mk); ut = []
    for t in re.finditer(r'\$\$[\s\S]*?\$\$', mkt):
        ut.append(t.group(0)[2:-2])
        for i in range(t.start(), t.end()): mk[i] = '\x00'
    pos = [i for i, c in enumerate(''.join(mk)) if c == '$']
    for a, b in zip(pos[0::2], pos[1::2]):
        ut.append(s[a+1:b])
    return ut

# tillatte tegn i et RENT numerisk uttrykk
TILLATT = re.compile(r'^[\s0-9+\-*/^().,\\cdotimesfrqsqtbig{}%]+$')
KJENTE = ['\\cdot','\\times','\\div','\\left','\\right','\\,','\;','\\!','\\ ',
          '\\big','\\Big','\\bigl','\\bigr','\\%','\\dots']

def normaliser(t):
    t = t.strip()
    for k in KJENTE:
        t = t.replace(k, '*' if k in ('\\cdot','\\times') else ('/' if k=='\\div' else ' '))
    # \frac{a}{b} → (a)/(b), gjentatt for nesting
    for _ in range(6):
        ny = re.sub(r'\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}', r'((\1)/(\2))', t)
        if ny == t: break
        t = ny
    t = re.sub(r'\\sqrt\s*\{([^{}]*)\}', r'((\1)**0.5)', t)
    t = re.sub(r'\{,\}', '.', t)          # norsk desimalkomma
    t = re.sub(r'\\,', '', t)
    t = t.replace('^', '**')
    t = re.sub(r'\{([^{}]*)\}', r'(\1)', t)
    t = t.replace('\\', '')
    return t

def evaluer(t):
    t = normaliser(t)
    if not re.fullmatch(r'[\s0-9+\-*/().]+', t): return None
    if not re.search(r'\d', t): return None
    try:
        return float(eval(t, {'__builtins__': {}}, {}))
    except Exception:
        return None


def like(a, c):
    """Sammenlign med relativ toleranse.

    ⚠ Eksakt brøksammenligning er GALT her. `\sqrt{36}\cdot\sqrt{2} = 6\sqrt{2}`
    er sant, men to flyttallsavrundinger av 8,4853… blir aldri identiske brøker.
    Første versjon meldte 1 668 «avvik», nesten alle av den typen.

    Bøkene runder dessuten av med vilje: «= 8,49» etter et eksakt uttrykk er
    korrekt formidling, ikke en feil. Toleransen må derfor romme avrunding til
    3 gjeldende siffer — ellers måler porten formatering, ikke riktighet.
    """
    if a == c:
        return True
    skala = max(abs(a), abs(c))
    if skala == 0:
        return abs(a - c) < 1e-12
    return abs(a - c) / skala < 5e-3

# Notasjon som SER UT som aritmetikk, men ikke er det. Uten disse ble
# ma1301 meldt med 246 «avvik» — alle Legendre-symboler, `\left(\frac{3}{11}\right)`,
# lest som divisjon 3/11. Det er grunnen til at byggeagentene skrev skreddersydde
# sluttporter per bok framfor én universell: notasjonen er fagavhengig.
NOTASJON = re.compile(
    r'\\left\s*\(\s*\\[dt]?frac'      # Legendre/Jacobi-symbol
    r'|\\binom|\\choose'               # binomialkoeffisient
    r'|\\begin\{[bpvV]?matrix\}'         # matriser
    r'|\\overline|\\vec|\\hat'          # markert notasjon
    r'|\\bmod|\\pmod|\\equiv'           # kongruenser: = betyr noe annet
    r'|\\lfloor|\\lceil'                # heltallsdel
    r'|\\mid|\\nmid'                    # delelighet
)


def kjeder(tex):
    """Deler et uttrykk i likhetskjeder og gir (venstre, høyre)-par."""
    # fjern tekstblokker: \text{...}
    if NOTASJON.search(tex): return []
    t = re.sub(r'\\(?:text|mathrm|mbox)\s*\{[^{}]*\}', ' ', tex)
    if re.search(r'[A-Za-zÆØÅæøå]', re.sub(r'\\[a-zA-Z]+', '', t)): return []
    ledd = re.split(r'(?<![<>!])=(?!=)', t)
    if len(ledd) < 2: return []
    return [(ledd[i], ledd[i+1]) for i in range(len(ledd)-1)]

# Felt der en GAL likhet er meningen: distraktorer skal være feil.
HOPP_FELT = {'options', 'multipleChoiceOptions', 'distractors', 'alternativer',
             'wrongAnswers', 'feil'}

# Prosa som markerer at det som følger er en FEIL, ikke en påstand.
FEILMARKOR = re.compile(
    r'\b(feil|galt|gale|ikke riktig|uriktig|misforst|fallgruve|felle|typisk feil'
    r'|vanlig feil|ville gitt|hadde du|glemt|glemmer|forveksl|ugyldig'
    r'|IKKE\b|ville blitt|gal(t)? svar'
    # Bevisst USANNE utsagn, brukt pedagogisk. 1t bruker «$-1 = 0$» for å vise
    # at en likning ikke har løsning, og skriver rett etterpå «Men $-1$ er aldri
    # lik $0$». Uten disse markørene meldes selve lærepoenget som en feil.
    r'|usant|usanne|aldri lik|ingen løsning|inga løysing|motsigelse|selvmotsi'
    r'|umulig|absurd|kansellerer|strider|holder ikke|stemmer ikke)', re.I)


def strenger(o, ut=None, i_hopp=False):
    """Tekstfelt som skal etterregnes. Hopper over alternativtekster.

    Et distraktoralternativ SKAL være galt — `$(-5)^2 = -25$` i 1t er et
    bevisst feilsvar, ikke en feil i boka. Uten dette filteret ble 27 av 27
    «avvik» i 1t falske positive.
    """
    ut = ut if ut is not None else []
    if isinstance(o, dict):
        for k, v in o.items():
            hopp = i_hopp or k in HOPP_FELT
            if isinstance(v, str):
                if not hopp: ut.append(v)
            else:
                strenger(v, ut, hopp)
    elif isinstance(o, list):
        for x in o: strenger(x, ut, i_hopp)
    return ut

def kjør(filer):
    feil = []; kontrollert = 0
    for p in sorted(filer):
        b = os.path.basename(p)
        if b.startswith('_'): continue
        try: d = json.load(open(p, encoding='utf-8'))
        except Exception: continue
        for s in strenger(d):
            if '$' not in s: continue
            for tex, pos in spenn2(s):
                # Er likheten omtalt som en FEIL i prosaen rundt? Da er den ment
                # å være gal, og et avvik er riktig oppførsel.
                rundt = s[max(0, pos-220):pos+220]
                if FEILMARKOR.search(rundt):
                    continue
                for v, h in kjeder(tex):
                    a, c = evaluer(v), evaluer(h)
                    if a is None or c is None: continue
                    kontrollert += 1
                    if not like(a, c):
                        feil.append((b, tex.strip()[:150], '%.6g' % a, '%.6g' % c))
    return kontrollert, feil

if __name__ == '__main__':
    møn = sys.argv[1:] or ['src/lib/data/chapters/*.json']
    filer = [p for m in møn for p in glob.glob(m)]
    n, feil = kjør(filer)
    print('%d likhetsledd etterregnet i %d filer' % (n, len(filer)))
    print('%d avvik' % len(feil))
    perbok = collections.Counter(re.sub(r'-\d+(?:-|$).*','', f[0][:-5]) for f in feil)
    for bok, c in perbok.most_common(12): print('   %-22s %d' % (bok, c))
    for f in feil[:14]:
        print('\n  %s' % f[0]); print('    %s' % f[1]); print('    venstre=%s  høyre=%s' % (f[2], f[3]))
