# Aksentporten for fremmedspråk (Daniel 23.11.2026: «Undersøk også aksentene og slikt og rett kontrolleren.»).
# Søsterport til æøå-porten: feller strippede aksenter, omlyd, ß, ñ, ç og œ i språkbøkene (fransk, tysk, spansk) —
# «garcons», «allee», «uber», «Strasse», «manana» — og æøå som har sneket seg inn i fremmedspråket («est å la»).
# Bakgrunn: fransk 1 kap. 15.4/17.2 hadde aksentene strippet overalt, også i fasit; målt 23.11 var 4 720 ord i 502 filer
# rammet (aksentsveip-2311). Ren Python, ingen avhengigheter: tabellene ligger ved siden av (lag-aksenttabell.py).
#
#   python3 scripts/aeoa/aksent-sjekk.py                 hele repoet (CI); exit 1 ved funn
#   python3 scripts/aeoa/aksent-sjekk.py <fil> [<fil>…]  bare språkbokfiler sjekkes, andre hoppes over (pre-commit)
#   python3 scripts/aeoa/aksent-sjekk.py --stdin --spraak fr|de|es [--json]   tekst/JSON på stdin (vakta)
#
# Hvilke filer: src/lib/data/chapters/(nn/)?<bok>-*.json, src/lib/data/quiz-data-<bok>-*.ts, src/lib/data/quiz/nn/<bok>-*.json,
# src/lib/data/meta/nn/<bok>-*.json for bok = fransk/tysk/spansk (språket følger filnavnet).
# Riktige ord som flagges (navn, titler, bevisst gale svaralternativ i en oppgave om aksenter): legg dem i
# scripts/aeoa/aksent-kjente-riktige.json — {"*": ["ord"]} for alle filer, {"<relativ fil>": ["ord"]} for én fil.
import json, os, re, sys

HER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HER)
from tekst import rens, strenger, HOPP_NOKLER, NORSKE_SMAAORD

TABELL = json.load(open(os.path.join(HER, 'aksent-tabell.json'), encoding='utf-8'))
FREMMED = {l: set(v) for l, v in json.load(open(os.path.join(HER, 'fremmedord.json'), encoding='utf-8')).items()}
_kr = os.path.join(HER, 'aksent-kjente-riktige.json')
KJENTE_RIKTIGE = json.load(open(_kr, encoding='utf-8')) if os.path.exists(_kr) else {}
BOK = {'fransk': 'fr', 'tysk': 'de', 'spansk': 'es'}
FIL = re.compile(r'(?:^|/)src/lib/data/(?:chapters/(?:nn/)?|quiz/nn/|meta/nn/|quiz-data-)(fransk|tysk|spansk)-[^/]*\.(json|ts)$')
TAKSONOMI = re.compile(r'^(kapittel|delkapittel|tags|tag|topic|subTopic|tema|key|courseId|chapterNumber|linkedChapterId|'
                       r'sourceHash|translatedAt|model|difficulty|number)$')
# Norske småord: står ett av dem ved siden av, er setningen norsk (æøå er da riktig).
_no = os.path.join(HER, 'norskord.json')
NORSK = set(NORSKE_SMAAORD) | (set(json.load(open(_no, encoding='utf-8'))) if os.path.exists(_no) else set())
ORD = re.compile(r"[^\W\d_]+")
FR_ETTER_A = {'la', 'le', 'les', 'l', 'un', 'une', 'ses', 'mes', 'tes', 'son', 'sa', 'ma', 'mon', 'ton', 'ta', 'leur',
              'leurs', 'nos', 'vos', 'cette', 'ce', 'côté', 'droite', 'gauche', 'pied', 'midi', 'Paris'}
SKILLE = re.compile(r'\n|\||\(|\)|\s[-–—]\s|\*\*|"|«|»|“|”|=|/|;|\[|\]|→|->')


def epost_eller_adresse(s, a, b):
    return (a > 0 and s[a - 1] in '@.') or (b < len(s) and (s[b] == '@' or (s[b] == '.' and b + 1 < len(s) and s[b + 1].isalpha())))


# Faste uttrykk der hvert ord også finnes uten tegn, men uttrykket bare med (grammatikktermer). Aksentsveip 23.11.2026.
FRASER = {'fr': [(r'\b([Pp])asse ([Cc])ompose\b', 'passé composé'), (r'\b([Pp])articipe passe\b', 'participe passé'),
                 (r'\b([Ff])utur anterieur\b', 'futur antérieur'), (r'\b([Pp])resent de l.indicatif\b', "présent de l'indicatif")],
          'de': [], 'es': []}


def sjekk_tekst(s, l, kjente=()):
    """Funn i én streng på språket l: [{ord, forslag, grunn, ctx}]."""
    funn = []
    r = rens(s)
    for rx, riktig in FRASER.get(l, []):
        for m in re.finditer(rx, r):
            if m.group(0).lower() not in kjente:
                funn.append({'ord': m.group(0), 'forslag': riktig, 'grunn': 'strippet fast uttrykk',
                             'ctx': re.sub(r'\s+', ' ', r[max(0, m.start() - 40):m.end() + 40])})
    for seg in SKILLE.split(r):
        toks = [(m.start(), m.end(), m.group(0)) for m in ORD.finditer(seg)]
        for i, (a, b, w) in enumerate(toks):
            nab = [toks[j][2] for j in (i - 1, i + 1) if 0 <= j < len(toks)]
            nab_l = [x.lower() for x in nab]
            lw = w.lower()
            forslag = grunn = None
            if w == 'å' and l == 'fr' and i > 0 and i + 1 < len(toks):
                # «est å la bibliothèque», «parle å ses amis» (æøå-sveipen 6.11 satte å inn for preposisjonen à)
                fo, et = toks[i - 1][2].lower(), toks[i + 1][2]
                if fo in FREMMED['fr'] and fo not in NORSK and et in FR_ETTER_A:
                    funn.append({'ord': w, 'forslag': 'à', 'grunn': 'æøå i tekst på fr',
                                 'ctx': re.sub(r'\s+', ' ', seg[max(0, a - 40):b + 40])})
                continue
            if len(w) < 3 or (w.isupper() and len(w) > 1) or w in kjente or lw in kjente:
                continue
            if epost_eller_adresse(seg, a, b):
                continue
            if re.search('[æøåÆØÅ]', w):
                # æøå inne i fremmedspråk: den strippede formen er et vanlig ord på målspråket, et ord på målspråket ved
                # siden av og ingen norske småord rundt («Im Følgenden», «die Strøm»)
                g = w.translate(str.maketrans('åÅøØ', 'aAoO')).replace('æ', 'ae').replace('Æ', 'Ae')
                fremmede = [x for x in nab_l if x in FREMMED[l]]
                g2 = w.replace('æ', 'ä').replace('Æ', 'Ä').replace('ø', 'ö').replace('Ø', 'Ö')  # tysk: «erklært» → «erklärt»
                tysk_form = l == 'de' and g2 != w and g2.lower() in FREMMED[l] and fremmede and \
                    not any(x in NORSK for x in nab_l)  # også når ordet finnes på norsk: tysk nabolag avgjør
                if tysk_form:
                    forslag, grunn = g2, 'æøå i tekst på de'
                elif (g.lower() in FREMMED[l] or g.lower() in TABELL[l]['sikker']) and lw not in NORSK \
                        and not any(x in NORSK for x in nab_l) and \
                        (len(fremmede) == 2 or (fremmede and g.lower() in TABELL[l]['sikker'] and 'æ' not in lw)):
                    forslag, grunn = g, 'æøå i tekst på ' + l
            elif re.fullmatch(r'[A-Za-z]+', w) and lw not in NORSK:  # aldri norske ord («andres»); i norsk setning: «avoir eller etre»
                t = TABELL[l]['sikker'].get(lw)
                if t:
                    grunn = 'strippet aksent/omlyd'
                else:
                    t = TABELL[l]['kontekst'].get(lw)
                    if t and any(x in FREMMED[l] for x in nab_l) and not any(x in NORSK for x in nab_l):
                        grunn = 'strippet aksent/omlyd (ord på målspråket ved siden av)'
                if t and grunn:
                    forslag = t[0].upper() + t[1:] if w[0].isupper() else t
            if forslag:
                funn.append({'ord': w, 'forslag': forslag, 'grunn': grunn,
                             'ctx': re.sub(r'\s+', ' ', seg[max(0, a - 40):b + 40])})
    return funn


def strenger_ts(kode):
    kode = re.sub(r'//[^\n]*|/\*.*?\*/', ' ', kode, flags=re.S)
    for m in re.finditer(r"'((?:[^'\\\n]|\\.)*)'|\"((?:[^\"\\\n]|\\.)*)\"|`((?:[^`\\]|\\.)*)`", kode):
        s = next(g for g in m.groups() if g is not None)
        if ' ' in s or re.search(r'[^\x00-\x7f]', s):
            yield s.replace("\\'", "'").replace('\\"', '"')


def strenger_json(o):
    if isinstance(o, str):
        yield o
    elif isinstance(o, dict):
        for k, v in o.items():
            if k in ('_meta', 'tm') or TAKSONOMI.match(k) or (isinstance(v, str) and HOPP_NOKLER.search(k)):
                continue
            yield from strenger_json(v)
    elif isinstance(o, list):
        for v in o:
            yield from strenger_json(v)


def sjekk_fil(sti, rel=None):
    rel = rel or os.path.relpath(os.path.abspath(sti))
    m = FIL.search(rel.replace(os.sep, '/'))
    if not m:
        return []
    l = BOK[m.group(1)]
    kjente = set(KJENTE_RIKTIGE.get('*', [])) | set(KJENTE_RIKTIGE.get(rel, []))
    s = open(sti, encoding='utf-8').read()
    tekster = strenger_ts(s) if sti.endswith('.ts') else strenger_json(json.loads(s))
    ut = []
    for t in tekster:
        for f in sjekk_tekst(t, l, kjente):
            f['fil'] = rel
            ut.append(f)
    return ut


def main(argv):
    som_json = '--json' in argv
    argv = [a for a in argv if a != '--json']
    if '--stdin' in argv:
        l = argv[argv.index('--spraak') + 1] if '--spraak' in argv else 'fr'
        s = sys.stdin.read()
        try:
            tekster = list(strenger_json(json.loads(s)))
        except ValueError:
            tekster = [s]
        funn = [f for t in tekster for f in sjekk_tekst(t, l, set(KJENTE_RIKTIGE.get('*', [])))]
    elif argv:
        funn = [f for sti in argv if os.path.exists(sti) for f in sjekk_fil(sti)]
    else:
        rot = os.path.abspath(os.path.join(HER, '../..'))
        funn = []
        for d, _, filer in os.walk(os.path.join(rot, 'src/lib/data')):
            if '/kursbunter' in d or '/sme' in d:
                continue
            for fn in sorted(filer):
                p = os.path.join(d, fn)
                rel = os.path.relpath(p, rot)
                if FIL.search(rel):
                    funn += sjekk_fil(p, rel)
    if som_json:
        print(json.dumps(funn, ensure_ascii=False))
    else:
        for f in funn[:300]:
            print(f"{f.get('fil', '-')}: «{f['ord']}» → «{f['forslag']}» ({f['grunn']}): …{f['ctx']}…")
        print(f'{len(funn)} strippede aksenter/omlyd i språkbøkene' + (
            '. Rett tegnene, eller legg et ord som er riktig (navn, tittel) i scripts/aeoa/aksent-kjente-riktige.json.'
            if funn else ''), file=sys.stderr)
    return 1 if funn else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
