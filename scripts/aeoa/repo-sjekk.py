# Repoets innholdsfiler mot kjente-feil.json: ingen ordform som sveipen 06.11.2026 dømte som æøå-feil skal stå i lesbar
# tekst (samme beskyttelse som rettingen: kode, matte, lenker, slugs og taksonomifelt røres ikke). Brukes av
# src/__tests__/aeoa-kjente-feil.test.ts. Ingen ordbok, så resultatet er likt på Mac, node og CI.
#   python3 scripts/aeoa/repo-sjekk.py [<repo>]      exit 1 og liste ved funn
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tekst import HOPP_NOKLER, TS_STRENG
from rett import Regler

REPO = sys.argv[1] if len(sys.argv) > 1 else os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
KILDER = [('private-solutions', ('.html',)), ('public/solutions', ('.html',)), ('src/lib/data', ('.ts', '.json'))]
HOPP_MAPPER = re.compile(r'/(bak-|pre-|node_modules|__tests__)')
# Skolesaga: egne kilder i aeoa-oppsett.json ved siden av skriptet ({"kilder": [[rot, [endelser]]], "hopp": regex})
_opp = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'aeoa-oppsett.json')
if os.path.exists(_opp):
    _o = json.load(open(_opp))
    KILDER = [(r, tuple(e)) for r, e in _o['kilder']]
    HOPP_MAPPER = re.compile(HOPP_MAPPER.pattern + '|' + _o.get('hopp', r'$^'))
HOPP_FILER = re.compile(r'^src/lib/ruter/|^src/lib/data/vgs-kapitler/tema-plassering')
TAKSONOMI = re.compile(r'^(kapittel|delkapittel|delkapitler|kapittelSlugs|typer|kort|tags|tag|topic|subTopic|subtopics|'
                       r'subTopics|tema|temaer|undertema|kategori|category|key|nokkel)$')
HER = os.path.dirname(os.path.abspath(__file__))
# Kontrollerte unntak per fil (kode, nynorsk, bevisst gale svaralternativer, sitater): {fil: [ordform]}.
UNNTAK = json.load(open(os.path.join(HER, 'unntak-filer.json')))
regler = Regler(json.load(open(os.path.join(HER, 'kjente-feil.json'))), {},
                blokk={(rel, '', o) for rel, ord_ in UNNTAK.items() for o in ord_})
funn = []


def gaa(o, rel):
    if isinstance(o, str):
        funn.extend((rel, g, ctx) for g, _, ctx in regler.rett(rel, '', o)[1])
    elif isinstance(o, dict):
        for k, v in o.items():
            if not ((isinstance(v, str) and HOPP_NOKLER.search(k)) or TAKSONOMI.match(k)):
                gaa(v, rel)
    elif isinstance(o, list):
        for v in o:
            gaa(v, rel)


def sjekk_fil(p, rel):
    if HOPP_FILER.search(rel) or HOPP_MAPPER.search('/' + os.path.dirname(rel) + '/'):
        return
    try:
        s = open(p, encoding='utf-8').read()
    except (UnicodeDecodeError, OSError):
        return
    if p.endswith('.html'):
        gaa(s, rel)
    elif p.endswith('.ts'):
        kode = re.sub(r'//[^\n]*|/\*.*?\*/', ' ', s, flags=re.S)
        for m in TS_STRENG.finditer(kode):
            inni = next(g for g in m.groups() if g is not None)
            if (' ' in inni or re.search('[æøåÆØÅ]', inni)) and '${' not in inni:
                gaa(inni, rel)
    elif p.endswith('.json'):
        try:
            gaa(json.loads(s), rel)
        except ValueError:
            pass


def sjekk_repo():
    for rot, ender in KILDER:
        for d, _, filer in os.walk(os.path.join(REPO, rot)):
            if HOPP_MAPPER.search(d + '/'):
                continue
            for fn in filer:
                if fn.endswith(ender):
                    p = os.path.join(d, fn)
                    sjekk_fil(p, os.path.relpath(p, REPO))


if __name__ == '__main__':
    sjekk_repo()
    for rel, g, ctx in funn[:200]:
        print(f'{rel}: «{g}»: …{ctx}…')
    print(f'{len(funn)} kjente æøå-feilformer i repoet', file=sys.stderr)
    sys.exit(1 if funn else 0)
