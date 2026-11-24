# æøå-porten (Daniel 06.11.2026: «vi burde ha en automatisk æøå sjekk hver gang det blir skrevet nytt materialet»).
# Finner strippet æøå («okonomi», «pa»), æøå satt inn feil («metøde») og kjente feilformer fra sveipen 06.11.2026.
#
#   python3 scripts/aeoa/sjekk.py <fil> [<fil> …]     .json/.html/.ts/.tsx/.txt; exit 1 ved funn
#   python3 scripts/aeoa/sjekk.py --stdin             ren tekst eller JSON på stdin
#   --json                                            funnene som JSON (for skript)
#   --kjente                                          bare kjente-feil.json (rask, lik overalt; brukt i pre-commit)
#
# To lag: (1) kjente-feil.json (alltid, også på noden og i CI); (2) macOS' ordbøker (nb, nn, en) når swiftc finnes:
# et ukjent ord som blir et gyldig norsk ord når æøå byttes, flagges. Tvetydige ord («pa», «nar», «ogsa» …) flagges
# bare mellom to norske ord. Ord i kjente-riktige.json (navn, nynorsk, eldre rettskrivning) flagges aldri.
# Mojibake («Ãkt», «Ã¸», «â€“», C1-tegn, U+FFFD; A14 i eksamenssett) flagges alltid, også med --kjente: mønstrene i mojibake.json.
import itertools, json, os, re, subprocess, sys
HER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HER)
from tekst import ord_i, rens, strenger, ts_strenger, norm, ORD, fremmed_kontekst
from mojibake import funn_i_tekster as mojibake_funn  # A14: UTF-8 lest som Latin-1/CP1252, mønstre i mojibake.json

KJENTE_FEIL = json.load(open(f'{HER}/kjente-feil.json')) if os.path.exists(f'{HER}/kjente-feil.json') else {}
KJENTE_RIKTIGE = set(json.load(open(f'{HER}/kjente-riktige.json'))) if os.path.exists(f'{HER}/kjente-riktige.json') else set()
TVETYDIGE = {'pa': 'på', 'nar': 'når', 'gar': 'går', 'star': 'står', 'ogsa': 'også', 'forst': 'først', 'sma': 'små',
             'bade': 'både', 'apen': 'åpen', 'apne': 'åpne', 'na': 'nå', 'ma': 'må', 'fa': 'få', 'far': 'får', 'ar': 'år', 'a': 'å'}
# Disse er så ofte riktige («far» = forelder, «bade», «ar» i AR(1), «a» som bokstav) at de bare flagges når teksten ellers er strippet.
SVAKE = {'far', 'bade', 'ar', 'fa', 'na', 'ma', 'a'}
SP_KILDE = f'{HER}/sp.swift'
SP_BIN = os.path.expanduser('~/.cache/aeoa-sp')


def ordbok():
    """Funksjon ord→(nb, nn, en) via macOS, eller None der stavekontrollen ikke finnes (noden, CI)."""
    if not os.path.exists(SP_BIN) or os.path.getmtime(SP_BIN) < os.path.getmtime(SP_KILDE):
        try:
            os.makedirs(os.path.dirname(SP_BIN), exist_ok=True)
            subprocess.run(['swiftc', '-O', SP_KILDE, '-o', SP_BIN], check=True, capture_output=True, timeout=300)
        except (OSError, subprocess.SubprocessError):
            return None
    cache = {}

    def slaa_opp(ordliste):
        nye = [w for w in set(ordliste) if w not in cache]
        if nye:
            p = subprocess.run([SP_BIN], input='\n'.join(nye) + '\n', capture_output=True, text=True, timeout=120)
            for linje in p.stdout.split('\n'):
                if '\t' in linje:
                    f, w = linje.split('\t', 1)
                    cache[w] = tuple(x == '1' for x in f.split())
        return {w: cache.get(w, (False, False, False)) for w in ordliste}
    return slaa_opp


def varianter(w):
    """Ordformer med æøå satt tilbake eller tatt bort, høyst to endringer."""
    red = []
    for i, ch in enumerate(w):
        if ch == 'a': red += [(i, i + 1, 'å'), (i, i + 1, 'æ')]
        if ch == 'o': red.append((i, i + 1, 'ø'))
        if ch == 'æ': red += [(i, i + 1, 'a'), (i, i + 1, 'e')]
        if ch == 'ø': red += [(i, i + 1, 'o'), (i, i + 1, '')]
        if ch == 'å': red += [(i, i + 1, 'a'), (i, i + 1, 'o')]
    for i in range(len(w) - 1):
        d = w[i:i + 2]
        if d == 'aa': red.append((i, i + 2, 'å'))
        if d == 'oe': red.append((i, i + 2, 'ø'))
        if d == 'ae': red.append((i, i + 2, 'æ'))
    ut = set()
    for n in (1, 2):
        for kombo in itertools.combinations(red, n):
            spenn = sorted((a, b) for a, b, _ in kombo)
            if any(spenn[k][1] > spenn[k + 1][0] for k in range(len(spenn) - 1)):
                continue
            s = w
            for a, b, r in sorted(kombo, reverse=True):
                s = s[:a] + r + s[b:]
            if s != w:
                ut.add(s)
    return ut


def tekster_i_fil(sti):
    s = open(sti, encoding='utf-8', errors='replace').read()
    if sti.endswith('.json') or sti.endswith('.jsonl'):
        try:
            data = [json.loads(l) for l in s.splitlines() if l.strip()] if sti.endswith('.jsonl') else json.loads(s)
            return [x for _, x in strenger(data)]
        except ValueError:
            return [s]
    if sti.endswith(('.ts', '.tsx', '.mjs', '.mts')):
        return list(ts_strenger(s))
    return [s]


def sjekk_tekster(tekster, bruk_ordbok=True):
    """Liste av funn {ord, forslag, grunn, ctx}."""
    # Mojibake sjekkes i RÅ tekst, også inne i matte og kode, uavhengig av ordboka (likt på Mac, node og CI).
    funn = mojibake_funn(tekster)
    alle = []
    for t in tekster:
        r = rens(t)
        for m in ORD.finditer(r):
            alle.append((m.group(0), r, m.start(), m.end()))
    ordformer = {w.lower() for w, *_ in alle}
    # Ord som bare står med stor forbokstav, er nesten alltid navn: de flagges bare som kjente feilformer.
    smaa = {w for w, *_ in alle if not w[:1].isupper()}
    slaa_opp = ordbok() if bruk_ordbok else None
    mistenkt = {}
    for w in ordformer:
        if w in KJENTE_FEIL:
            mistenkt[w] = (KJENTE_FEIL[w], 'kjent feilform')
    if slaa_opp:
        res = slaa_opp(sorted(ordformer))
        ukjente = [w for w in ordformer if len(w) > 2 and w in smaa and not any(res[w]) and w not in KJENTE_RIKTIGE and w not in mistenkt]
        var = {w: varianter(w) for w in ukjente if len(w) <= 30}
        vres = slaa_opp(sorted({v for s in var.values() for v in s}))
        for w, vs in var.items():
            gode = sorted((v for v in vs if vres[v][0] or vres[v][1]), key=lambda v: (abs(len(v) - len(w)), v))
            if gode:
                mistenkt[w] = (gode[0], 'ukjent ord, gyldig med æøå byttet')
    strippet_felt = bool(mistenkt)
    sett = set()
    for w, r, a, b in alle:
        lw = w.lower()
        grunn = None
        if fremmed_kontekst(r, a, b):
            continue  # ord i fransk/tysk/spansk/engelsk tekst: aldri æøå-forslag (aksentsveip 23.11.2026)
        if lw in mistenkt:
            forslag, grunn = mistenkt[lw]
        elif w in TVETYDIGE and (w not in SVAKE or strippet_felt):
            for_ = re.findall(r'[A-Za-zÆØÅæøå]+', r[max(0, a - 30):a])
            etter = re.findall(r'[A-Za-zÆØÅæøå]+', r[b:b + 30])
            if for_ and etter and etter[0].islower() and slaa_opp:
                a_, e_ = for_[-1].lower(), etter[0]
                fr = slaa_opp([a_, e_])
                norsk = lambda x: fr[x][0] or x in mistenkt
                if norsk(a_) and norsk(e_) and not (fr[a_][2] and fr[e_][2]) and e_ not in ('og', 'eller', 'er'):
                    forslag, grunn = TVETYDIGE[w], 'tvetydig ord mellom norske ord'
        if grunn and (lw, r[max(0, a - 40):b + 40]) not in sett:
            sett.add((lw, r[max(0, a - 40):b + 40]))
            funn.append({'ord': w, 'forslag': forslag, 'grunn': grunn, 'ctx': re.sub(r'\s+', ' ', r[max(0, a - 50):b + 50])})
    return funn


def main(argv):
    som_json = '--json' in argv
    bare_kjente = '--kjente' in argv
    argv = [a for a in argv if a not in ('--json', '--kjente')]
    if argv[:1] == ['--stdin']:
        s = sys.stdin.read()
        try:
            tekster = [x for _, x in strenger(json.loads(s))]
        except ValueError:
            tekster = [s]
        funn = sjekk_tekster(tekster, not bare_kjente)
    else:
        funn = []
        if bare_kjente:
            # Samme beskyttelse som rettingen (slugs, kode, taksonomifelt): repo-sjekk.py sin filsjekk.
            import importlib.util
            spec = importlib.util.spec_from_file_location('repo_sjekk', f'{HER}/repo-sjekk.py')
            rs = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(rs)
            for sti in argv:
                rs.sjekk_fil(sti, os.path.relpath(os.path.abspath(sti)))
            import mojibake as mb
            ut = lambda g: re.sub(r'\\u([0-9a-f]{4})', lambda m: chr(int(m.group(1), 16)), g)
            funn = [{'fil': rel, 'ord': g, 'ctx': ctx,
                     **({'forslag': KJENTE_FEIL[g.lower()], 'grunn': 'kjent feilform'} if g.lower() in KJENTE_FEIL else
                        {'forslag': mb.forslag(ut(g)) or '? (finn tegnet i kilden)', 'grunn': 'mojibake'})}
                    for rel, g, ctx in rs.funn]
            argv = []
        for sti in argv:
            for f in sjekk_tekster(tekster_i_fil(sti), not bare_kjente):
                f['fil'] = sti
                funn.append(f)
    if som_json:
        print(json.dumps(funn, ensure_ascii=False))
    else:
        for f in funn:
            print(f"{f.get('fil', '-')}: «{f['ord']}» → «{f['forslag']}» ({f['grunn']}): …{f['ctx']}…")
        if funn:
            print(f'\n{len(funn)} mistenkte æøå-feil. Rett dem, eller legg et ord som er riktig (navn, nynorsk, sitat) i '
                  f'scripts/aeoa/kjente-riktige.json.', file=sys.stderr)
    return 1 if funn else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
