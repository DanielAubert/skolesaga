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
        if ' ' in s or re.search(r'[æøåÆØÅ]', s):  # enkeltord uten mellomrom er nesten alltid nøkler
            yield s


FOLD = str.maketrans({'æ': 'a', 'ø': 'o', 'å': 'a', 'Æ': 'A', 'Ø': 'O', 'Å': 'A'})


def norm(s):
    """Invarianten for tegnrettinger: æøå foldet og «oe/ae/aa» slått sammen. norm(ny) må være lik norm(gammel)."""
    s = re.sub(r'(?i)(?<=o)e|(?<=a)[ea]', '', s)
    return s.translate(FOLD).lower()
