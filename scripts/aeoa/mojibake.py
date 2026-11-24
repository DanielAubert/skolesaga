# Mojibake-klassen i æøå-porten (FEILKLASSER A14, 24.11.2026): UTF-8 lest som Latin-1/CP1252 («Ãkt» for «Økt», «Ã¸» for «ø»,
# «â€“» for «–», usynlige C1-tegn U+0080–U+009F). Mønstrene har ETT hjem: mojibake.json ved siden av (også lest av
# scripts/aeoa/aeoa-vakt.mjs). Brukes av sjekk.py (vakten, porten, manuell sjekk) og repo-sjekk.py (CI). Ren Python.
# Kopi av eksamenssett/scripts/aeoa/mojibake.py (24.11.2026); repoene er adskilte — hold de to like.
#   python3 scripts/aeoa/mojibake.py <fil> [<fil> …]    rå sjekk av hele filer (også .md/.txt); exit 1 ved funn
import json, os, re, sys

HER = os.path.dirname(os.path.abspath(__file__))
_K = json.load(open(os.path.join(HER, 'mojibake.json'), encoding='utf-8'))
MONSTRE = [(m['navn'], m['regex']) for m in _K['monstre']]
# Én regex med navngitte grupper i kildens rekkefølge: finditer gir ikke-overlappende treff, og første alternativ vinner.
RX = re.compile('|'.join(f'(?P<m{i}>{rx})' for i, (_, rx) in enumerate(MONSTRE)))
# Høyst så mange treff per tekst: en binær eller helt ødelagt fil skal ikke gjøre vakten treg (1,6 MB C1 = 10,9 s uten tak).
MAKS = 200
# Sitert eksempel (lærestoff om tegnkoding): treffet står alene mellom anførselstegn/backticks.
AAPNE, LUKKE = _K['sitert_eksempel']['aapne'], _K['sitert_eksempel']['lukke']
# Rask forsil: et treff krever minst ett av disse tegnene (alle mønstre starter med ett av dem).
FORSIL = re.compile('[ÂÃÎÏâð\u0080-\u009f�]')


def synlig(s):
    """C1-tegn og U+FFFD vises som \\u0098, så treffet kan leses i en melding."""
    return re.sub('[\u0080-\u009f�]', lambda m: f'\\u{ord(m.group(0)):04x}', s)


def _som_bytes(s):
    ut = bytearray()
    for ch in s:
        if ord(ch) < 256:
            ut.append(ord(ch))
        else:
            try:
                ut += ch.encode('cp1252')
            except UnicodeEncodeError:
                return None
    return bytes(ut)


def forslag(s, etter=''):
    """Tegnet treffet skulle vært: tegnene tilbake til bytes (Latin-1, ellers CP1252) og lest som UTF-8. Mangler en
    fortsettelsesbyte, prøves de neste tegnene etter treffet (forslaget dekker da også dem). None når det ikke lar seg avgjøre (enslig C1, U+FFFD)."""
    for n in range(0, 3):
        b = _som_bytes(s + etter[:n])
        if b is None:
            return None
        try:
            r = b.decode('utf-8')
        except UnicodeDecodeError:
            continue
        if r != s + etter[:n] and not re.search('[\u0080-\u009f]', r):
            return r
    return None


def finn(tekst):
    """Treff i én tekst: liste av (start, slutt, treff, mønsternavn, forslag|None)."""
    if not tekst or not FORSIL.search(tekst):
        return []
    ut = []
    for m in RX.finditer(tekst):
        if len(ut) >= MAKS:
            break
        i = int(m.lastgroup[1:])
        ut.append((m.start(), m.end(), m.group(0), MONSTRE[i][0], forslag(m.group(0), tekst[m.end():m.end() + 2])))
    # Grupper treff som ligger kant i kant; en gruppe som fyller hele et sitat («Ã¸», "Ã¦Ã¸Ã¥", `Ã¥`) er et eksempel.
    beholdt, k = [], 0
    while k < len(ut):
        j = k
        while j + 1 < len(ut) and ut[j + 1][0] == ut[j][1]:
            j += 1
        a, b = ut[k][0], ut[j][1]
        if not (a > 0 and b < len(tekst) and tekst[a - 1] in AAPNE and tekst[b] in LUKKE):
            beholdt += ut[k:j + 1]
        k = j + 1
    return beholdt


def funn_i_tekster(tekster):
    """Funn i sjekk.py-format {ord, forslag, grunn, ctx}, ett per treff (like treff med lik kontekst slås sammen)."""
    funn, sett = [], set()
    for t in tekster:
        for a, b, treff, navn, fs in finn(t):
            ctx = re.sub(r'\s+', ' ', t[max(0, a - 50):b + 50])
            if (treff, ctx) in sett:
                continue
            sett.add((treff, ctx))
            funn.append({'ord': synlig(treff), 'forslag': fs if fs is not None else '? (finn tegnet i kilden)',
                         'grunn': f'mojibake: {navn}', 'ctx': synlig(ctx)})
    return funn


if __name__ == '__main__':
    n = 0
    for sti in sys.argv[1:]:
        try:
            s = open(sti, encoding='utf-8', errors='replace').read()
        except OSError:
            continue
        for nr, linje in enumerate(s.split('\n'), 1):
            for a, b, treff, navn, fs in finn(linje):
                n += 1
                print(f'{sti}:{nr}: «{synlig(treff)}» → «{fs or "?"}» ({navn}): …{synlig(linje[max(0, a - 40):b + 40]).strip()}…')
    sys.exit(1 if n else 0)
