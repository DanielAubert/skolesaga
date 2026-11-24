# Felles tekstuttrekk for æøå-sjekken: hvilke strenger som er elevtekst, og hvordan de deles i ord.
# Brukes av sveipen (scripts/aeoa/sveip.py) og porten (scripts/aeoa/sjekk.py). Ren Python, ingen avhengigheter.
import json, re

# Nøkler som aldri er elevtekst (id-er, slugs, filstier, lenker).
HOPP_NOKLER = re.compile(r'(^|_)(id|ids|slug|url|href|src|image|img|path|file|fil|video|videoid|hash|key|type|kind|color|farge)$|Id$|Slug$|Url$', re.I)

# Matte: hele uttrykket ut, men \text{…} beholdes, siden det er vanlig tekst.
MATTE = re.compile(r'\$\$.*?\$\$|\$[^$\n]*\$|\\\(.*?\\\)|\\\[.*?\\\]', re.S)
TEXT_I_MATTE = re.compile(r'\\(?:text|textrm|mathrm|textit|textbf|operatorname)\{([^{}]*)\}')
SKRIPT = re.compile(r'<(script|style|svg|code|pre)\b.*?</\1>', re.S | re.I)
TAGG = re.compile(r'<[^>]+>')
URL = re.compile(r'https?://\S+|www\.\S+|\b[\w.-]+@[\w.-]+\b')
ENTITET = {'&aring;': 'å', '&Aring;': 'Å', '&oslash;': 'ø', '&Oslash;': 'Ø', '&aelig;': 'æ', '&AElig;': 'Æ',
           '&nbsp;': ' ', '&amp;': '&', '&shy;': ''}
ORD = re.compile(r"(?<![\w\\-])[A-Za-zÆØÅæøåÉéÜüÖöÄä]+(?![\w])")


KODEBLOKK = re.compile(r'```.*?```|`[^`\n]*`', re.S)


def rens(s):
    """Fjerner kode, matte (unntatt \\text{}), tagger og lenker, så bare lesbar tekst står igjen."""
    s = SKRIPT.sub(' ', s)
    s = KODEBLOKK.sub(' ', s)
    s = MATTE.sub(lambda m: ' ' + ' '.join(TEXT_I_MATTE.findall(m.group(0))) + ' ', s)
    for k, v in ENTITET.items():
        s = s.replace(k, v)
    s = TAGG.sub(' ', s)
    s = URL.sub(' ', s)
    return s


def ord_i(s):
    return ORD.findall(rens(s))


def strenger(o, sti=''):
    """Alle strengverdier i et JSON-objekt som kan være elevtekst, med JSON-sti."""
    if isinstance(o, str):
        yield sti, o
    elif isinstance(o, dict):
        for k, v in o.items():
            if isinstance(v, str) and HOPP_NOKLER.search(k):
                continue
            yield from strenger(v, f'{sti}.{k}')
    elif isinstance(o, list):
        for i, v in enumerate(o):
            yield from strenger(v, f'{sti}[{i}]')


TS_STRENG = re.compile(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"|`((?:[^`\\]|\\.)*)`", re.S)


def ts_strenger(kode):
    """Strenglitteraler i en .ts/.tsx-fil (identifikatorer og kommentarer er ikke elevtekst)."""
    kode = re.sub(r'//[^\n]*|/\*.*?\*/', ' ', kode, flags=re.S)
    for m in TS_STRENG.finditer(kode):
        s = next(g for g in m.groups() if g is not None)
        # enkeltord uten mellomrom er nesten alltid nøkler; mojibake-tegn (A14) tas likevel med
        if ' ' in s or re.search(r'[æøåÆØÅ]', s) or MOJIBAKE_FORSIL.search(s):
            yield s


# Tegn som kan innlede mojibake (A14, 24.11.2026); hele mønstrene står i mojibake.json / mojibake.py.
MOJIBAKE_FORSIL = re.compile('[\u00c2\u00c3\u00ce\u00cf\u00e2\u00f0\u0080-\u009f\ufffd]')


FOLD = str.maketrans({'æ': 'a', 'ø': 'o', 'å': 'a', 'Æ': 'A', 'Ø': 'O', 'Å': 'A'})


def norm(s):
    """Invarianten for tegnrettinger: æøå foldet og «oe/ae/aa» slått sammen. norm(ny) må være lik norm(gammel)."""
    s = re.sub(r'(?i)(?<=o)e|(?<=a)[ea]', '', s)
    return s.translate(FOLD).lower()


# Vern mot at æøå-verktøyene rører fremmedspråk (aksentsveip 23.11.2026: sveipen 6.11 gjorde «est a la» til «est å la»
# i fransk og «star power» til «står power» i engelsk). fremmedord.json = vanlige fr/de/es/en-ord som ikke er norske.
import os as _os
_FO = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), 'fremmedord.json')
FREMMEDORD = set()
if _os.path.exists(_FO):
    for _v in json.load(open(_FO, encoding='utf-8')).values():
        FREMMEDORD.update(_v)
# Bare småord som ikke også er vanlige ord på fransk/tysk/spansk/engelsk (ikke «et», «en», «de», «du», «der», «den»,
# «er», «for», «i», «a», «at», «men», «han», «sin», «dem», «vi»), så en fremmedspråklig setning ikke tas for norsk.
NORSKE_SMAAORD = {'og', 'på', 'pa', 'å', 'som', 'det', 'til', 'med', 'av', 'ikke', 'ikkje', 'jeg', 'eg', 'hun', 'ho', 'dei',
                  'har', 'kan', 'skal', 'må', 'ma', 'vil', 'blir', 'vert', 'var', 'om', 'så', 'sa', 'når', 'nar', 'eller',
                  'også', 'ogsa', 'òg', 'fra', 'frå', 'hva', 'kva', 'dette', 'denne', 'ein', 'eit', 'seg', 'sitt', 'sine',
                  'oss', 'meg', 'deg', 'bare', 'berre', 'betyr', 'tyder', 'heter', 'heiter', 'viktig', 'kjem', 'kommer',
                  'bruker', 'brukes', 'ord', 'setning', 'norsk', 'hvordan', 'korleis', 'skriv', 'ikkje', 'hvor',
                  'kor', 'her', 'mye', 'mykje', 'noen', 'nokon', 'andre', 'eksempel', 'døme'}
FremmedSkille = re.compile(r'[\n|()«»"“”\[\]]')


def fremmed_kontekst(s, a, b, n=5):
    """True når ordet s[a:b] står i en setning på et fremmedspråk (minst to vanlige fremmedord rundt, ingen norske
    småord), eller rett ved et fremmedord uten norske småord rundt. Da skal æøå-verktøyene ikke røre det."""
    venstre = FremmedSkille.split(s[max(0, a - 160):a])[-1]
    hoyre = FremmedSkille.split(s[b:b + 160])[0]
    fo = [w.lower() for w in re.findall(r"[^\W\d_]+", venstre)][-n:]
    et = [w.lower() for w in re.findall(r"[^\W\d_]+", hoyre)][:n]
    rundt = fo + et
    norske = sum(1 for w in rundt if w in NORSKE_SMAAORD)
    fremmede = sum(1 for w in rundt if w in FREMMEDORD and w not in NORSKE_SMAAORD)
    nabo = (fo[-1:] + et[:1])
    if norske:
        return False
    return fremmede >= 2 or any(w in FREMMEDORD for w in nabo)
