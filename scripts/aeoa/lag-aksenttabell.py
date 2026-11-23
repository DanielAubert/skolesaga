# Bygger tabellene til aksentporten (aksent-sjekk.py) og fremmedordlista som verner æøå-verktøyene mot fremmedspråk.
# Daniel 23.11.2026: «Undersøk også aksentene og slikt og rett kontrolleren.» Kjøres sjelden, på noden (tungt):
#   python3 -m venv venv && ./venv/bin/pip install wordfreq spylls
#   ./venv/bin/python scripts/aeoa/lag-aksenttabell.py <ordbokmappe med fr/de/es/en/nb/nn .dic+.aff> [<språkbok-data>]
# Skriver scripts/aeoa/aksent-tabell.json og scripts/aeoa/fremmedord.json.
#
# aksent-tabell.json: {språk: {sikker: {strippet form: riktig form}, kontekst: {…}}} — bare former der den strippede formen
#   IKKE er et ord på språket selv, heller ikke på bokmål eller nynorsk, og der én form med tegn dominerer (×20).
#   «kontekst» = den strippede formen er et engelsk ord («atmosphere») og flagges bare med et ord på målspråket ved siden av.
#   Kilder: wordfreq-listene (topp 150 000 per språk) + alle ord med tegn i språkbøkene (når datamappe oppgis),
#   hver form kontrollert mot Hunspell for språket.
# norskord.json: vanlige norske ord som ikke er vanlige på fr/de/es/en (norsk nabolag → porten flagger ikke).
# fremmedord.json: {språk: [ord]} — de 3 000 vanligste ordene per språk (fr/de/es/en) som ikke er norske ord, også i
#   strippet form. Brukes av tekst.fremmed_kontekst() til å se at en setning er på et fremmedspråk.
#
# Lisenser (kildene er ordlister; tabellene er avledede lister over ordformer):
#   wordfreq (Robyn Speer) — kode Apache 2.0, ordfrekvensdata CC BY-SA 4.0 (https://github.com/rspeer/wordfreq).
#   Hunspell fr: Grammalecte «Classique» 7.0, MPL 2.0 (LibreOffice/dictionaries fr_FR).
#   Hunspell de: igerman98/de_DE_frami, GPL v2 eller v3 (LibreOffice/dictionaries de).
#   Hunspell es: RLA-ES, GPL v3+/LGPL v3+/MPL 1.1 (LibreOffice/dictionaries es).
#   Hunspell nb/nn: Norsk ordbank-baserte nb_NO/nn_NO, GPL v2 (LibreOffice/dictionaries no); en_GB: LGPL/BSD-varianter.
import json, os, re, sys, glob, unicodedata, collections
from spylls.hunspell import Dictionary
from wordfreq import top_n_list, word_frequency

ORDBOK = sys.argv[1]
DATA = sys.argv[2] if len(sys.argv) > 2 else None
HER = os.path.dirname(os.path.abspath(__file__))
SPRAAK = {'fr': 'fransk', 'de': 'tysk', 'es': 'spansk'}
D = {l: Dictionary.from_files(os.path.join(ORDBOK, l)) for l in ('fr', 'de', 'es', 'en', 'nb', 'nn')}
_c = {}


def gyldig(l, w):
    k = (l, w)
    if k not in _c:
        try:
            _c[k] = D[l].lookup(w)
        except Exception:
            _c[k] = False
    return _c[k]


def gyldig_noen(l, w):
    return gyldig(l, w) or gyldig(l, w.lower()) or gyldig(l, w[:1].upper() + w[1:])


def strip(w):
    w = w.replace('ß', 'ss').replace('œ', 'oe').replace('Œ', 'Oe')
    return ''.join(c for c in unicodedata.normalize('NFD', w) if unicodedata.category(c) != 'Mn')


def omskrevet(w):  # tysk: ä→ae, ö→oe, ü→ue, ß→ss
    return w.replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss')


def norsk_el_engelsk(w):
    return any(gyldig_noen(l, w) for l in ('nb', 'nn', 'en'))


def korpus(l):
    ut = collections.Counter()
    if not DATA:
        return ut
    bok = SPRAAK[l]
    for f in glob.glob(f'{DATA}/chapters/{bok}-*.json') + glob.glob(f'{DATA}/quiz-data-{bok}-*.ts'):
        for w in re.findall(r'[^\W\d_]+', open(f, encoding='utf-8').read()):
            if w != strip(w):
                ut[w.lower()] += 1
    return ut


tabell, fremmed = {}, {}
for l in ('fr', 'de', 'es'):
    kand = collections.defaultdict(dict)
    kilder = {w: word_frequency(w, l) for w in top_n_list(l, 150000)}
    for w, n in korpus(l).items():
        kilder.setdefault(w, max(word_frequency(w, l), 1e-9))
    for w, fr in kilder.items():
        if len(w) < 3 or w == strip(w) or not re.fullmatch(r'[^\W\d_]+', w) or not gyldig_noen(l, w):
            continue
        nokler = {strip(w)} | ({omskrevet(w)} if l == 'de' else set())
        for k in nokler:
            if k != w:
                kand[k][w] = fr
    t, kt = {}, {}
    for k, former in kand.items():
        if gyldig_noen(l, k) or gyldig_noen('nb', k) or gyldig_noen('nn', k):
            continue
        best = sorted(former.items(), key=lambda kv: -kv[1])
        if len(best) == 1 or best[0][1] >= 20 * best[1][1]:
            # engelske ord («atmosphere», «ecole»?) flagges bare når nabolaget er på målspråket
            (kt if gyldig_noen('en', k) else t)[k] = best[0][0]
    tabell[l] = {'sikker': dict(sorted(t.items())), 'kontekst': dict(sorted(kt.items()))}
    print(l, len(t), 'sikre,', len(kt), 'kontekstavhengige (engelske ord)', flush=True)
# Norske ord = de 30 000 vanligste i wordfreq (nb). Hunspell nb godtar for mye («est», «elle», «sont», «and»).
NORSK_VANLIG = set(top_n_list('nb', 30000))
for l in ('fr', 'de', 'es', 'en'):
    ord_ = []
    for w in top_n_list(l, 6000):
        # med hvis ordet ikke er vanlig norsk, eller er minst ti ganger vanligere på språket enn på norsk («est», «elle»)
        if len(w) < 2 or not re.fullmatch(r'[^\W\d_]+', w) or \
                (w in NORSK_VANLIG and word_frequency(w, l) < 10 * word_frequency(w, 'nb')):
            continue
        ord_.append(w)
        if strip(w) != w and (strip(w) not in NORSK_VANLIG or word_frequency(w, l) >= 10 * word_frequency(strip(w), 'nb')):
            ord_.append(strip(w))
        if len(ord_) >= 3000:
            break
    fremmed[l] = sorted(set(ord_))
    print(l, len(fremmed[l]), 'fremmedord', flush=True)
json.dump(tabell, open(os.path.join(HER, 'aksent-tabell.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
json.dump(fremmed, open(os.path.join(HER, 'fremmedord.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
# norskord.json: vanlige norske ord (wordfreq nb topp 20 000) som er minst ti ganger vanligere på norsk enn på fransk,
# tysk, spansk og engelsk — står et av dem ved siden av, er setningen norsk («respektere andres meninger»).
norsk = [w for w in top_n_list('nb', 20000) if re.fullmatch(r'[^\W\d_]+', w) and
         word_frequency(w, 'nb') >= 10 * max(word_frequency(w, l) for l in ('fr', 'de', 'es', 'en'))]
json.dump(sorted(norsk), open(os.path.join(HER, 'norskord.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print('norskord', len(norsk), flush=True)
