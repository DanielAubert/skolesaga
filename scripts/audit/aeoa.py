"""Ordliste-porter (hunspell nb_NO/nn_NO):
  aeoa          ord uten æøå som ordlista avviser, men der en variant MED æøå godtas («losning» → «løsning»)
  nn-bokmaal-ord  ord i nynorskteksten som nn_NO avviser, men nb_NO godtar (bokmålsformer)
Kilder (--staving=auto): 1) hunspell lokalt (binær + ordbøker i $HUNSPELL_DICT eller ~/bk-norsk-1510/dict/),
2) hunspell på adhv-box over ssh — bare for ord som ikke alt står i hurtiglageret, 3) korpus (æøå-varianten er vanlig i
mattebøkene og ordet selv sjeldent). Alle hunspell-svar lagres i cache/hunspell-<språk>.json, så neste kjøring trenger
verken hunspell eller noden for kjente ord. Pluss en fast liste over kjente strippede ord (høy presisjon, alltid på).
Utdata er DISTINKTE ord med antall og eksempel (FEILKLASSER D8: legg fram ordparene, ikke bare et tall)."""
import collections
import glob
import itertools
import json
import os
import re
import shutil
import subprocess

from felles import AUDIT, CH, utenfor_matte, felt, blokker, skriv_json

CACHE = os.path.join(AUDIT, 'cache')
SSH = ['ssh', '-o', 'RequestTTY=no', '-o', 'RemoteCommand=none', '-o', 'ConnectTimeout=30', '-o', 'ServerAliveInterval=15',
       '-o', 'ServerAliveCountMax=3', 'adhv-box']
NODE_DICT = '~/bk-norsk-1510/dict/'
MATTEBOKER = ['1p', '1t', '2p', '2py', 'r1', 'r2', 's1', 's2']

KJENTE = re.compile(r'(forste|Forste|losning\w*|Losning\w*|ogsa|Ogsa|storre|hoyde\w*|sporsmal\w*|okning\w*|oker|omrade\w*|'
                    r'pastand\w*|hoyre\w*|Gjor|Avgjor|[Ff]remgangsmate\w*|foregaende|pafolgende|tilnaerm\w*|skjaering\w*|'
                    r'nodvendig\w*|onsker|[Aa]ltsa|bruttolonn|nettolonn|lonn(en|ing\w*)?|okonomi\w*|maned\w*|darlig\w*|'
                    r'pa|nar|Nar|aret|arene|Los|losningsforslag|hoyeste|stotte)')

# Ord som ordlista kan avvise, men som er riktige i mattetekst (GeoGebra, enheter, forkortelser, navn)
IGNORER = set('''RegLin RegEksp RegPot RegPoly RegLog NLøs Løs Solve CAS GeoGebra Python
cos sin tan log lg ln max min mod def print range for in and or not True False
cm mm km kg dm dl ml kr kWh mol Hz dB pH ok OK Jan Feb Mar Apr Jun Jul Aug Sep Okt Nov Des
Ola Anna Ali Omar Oda Jonas Sofie Nora Emma Oscar Tobias Jakob Lars Mona Maja Sara Hanna Ida Lea Noah Aksel Kasper Mats
KO SO PO TO Monte Carlo RegLogist RegSin InversNormal rater metron poengsum frivillige Heron'''.split())  # 22.10.2026: falske treff fra S2/R1/2P-rettingen


def _varianter(w):
    if len([c for c in w if c in 'aoAO']) > 6:
        return []
    opts = []
    for c in w:
        opts.append({'a': ['a', 'å', 'æ'], 'A': ['A', 'Å', 'Æ'], 'o': ['o', 'ø'], 'O': ['O', 'Ø']}.get(c, [c]))
    res = set(''.join(k) for k in itertools.product(*opts))
    res.discard(w)
    for a, b in (('aa', 'å'), ('ae', 'æ'), ('oe', 'ø'), ('Aa', 'Å')):
        if a in w:
            res.add(w.replace(a, b))
    return sorted(res)[:300]


def _trenger_varianter(w):
    return not re.search('[æøåÆØÅ]', w) and re.search('[aoAO]', w)


def _hunspell_dict():
    d = os.environ.get('HUNSPELL_DICT') or os.path.expanduser('~/bk-norsk-1510/dict/')
    return d if (shutil.which('hunspell') and os.path.exists(os.path.join(d, 'nb_NO.dic'))) else None


REMOTE = r'''
import sys,json,subprocess,os
D=os.path.expanduser("%s")
inn=json.load(sys.stdin); ut={}
for lang,ws in inn.items():
    p=subprocess.run(["hunspell","-d",D+lang,"-l"],input="\n".join(ws),capture_output=True,text=True)
    ut[lang]=sorted(set(p.stdout.split()))
json.dump(ut,sys.stdout)
''' % NODE_DICT


def _shq(s):
    return "'" + s.replace("'", "'\"'\"'") + "'"


def _avvis(per_lang, modus):
    """per_lang: {lang: [ord]} → {lang: set(avviste)} eller None."""
    per_lang = {k: v for k, v in per_lang.items() if v}
    if not per_lang:
        return {}
    if modus == 'lokal':
        d = _hunspell_dict()
        ut = {}
        for lang, ws in per_lang.items():
            p = subprocess.run(['hunspell', '-d', os.path.join(d, lang), '-l'], input='\n'.join(ws), capture_output=True,
                               text=True, timeout=600)
            ut[lang] = set(p.stdout.split())
        return ut
    try:
        p = subprocess.run(SSH + ['python3 -c ' + _shq(REMOTE)], input=json.dumps(per_lang), capture_output=True,
                           text=True, timeout=600)
        if p.returncode != 0:
            return None
        return {k: set(v) for k, v in json.loads(p.stdout).items()}
    except Exception:
        return None


def _last_cache(lang):
    p = os.path.join(CACHE, 'hunspell-%s.json' % lang)
    if os.path.exists(p):
        with open(p, encoding='utf-8') as f:
            return json.load(f)
    return {}


def _lagre_cache(lang, c):
    os.makedirs(CACHE, exist_ok=True)
    skriv_json(os.path.join(CACHE, 'hunspell-%s.json' % lang), c)


def _slå_opp(cacher, ønsket, modus):
    """ønsket: {lang: set(ord)}. Fyller cacher[lang][ord] = True (godtatt) | [æøå-varianter som godtas]. Returnerer
    True hvis oppslaget lyktes (eller ikke trengtes)."""
    ukjente = {lang: sorted(w for w in ws if w not in cacher[lang]) for lang, ws in ønsket.items()}
    if not any(ukjente.values()):
        return 'cache'
    avvist = _avvis(ukjente, modus)
    if avvist is None:
        return False
    var = {lang: sorted(set(v for w in avvist.get(lang, ()) if _trenger_varianter(w) for v in _varianter(w)))
           for lang in ukjente}
    vavvist = _avvis(var, modus)
    if vavvist is None:
        return False
    for lang, ws in ukjente.items():
        av = avvist.get(lang, set())
        vav = vavvist.get(lang, set())
        vset = set(var.get(lang, ()))
        for w in ws:
            if w not in av:
                cacher[lang][w] = True
            else:
                cacher[lang][w] = [v for v in _varianter(w) if v in vset and v not in vav] if _trenger_varianter(w) else []
        _lagre_cache(lang, cacher[lang])
    return True


def _korpus(lang):
    p = os.path.join(CACHE, 'korpus-%s.json' % lang)
    if os.path.exists(p):
        with open(p, encoding='utf-8') as f:
            return collections.Counter(json.load(f))
    c = collections.Counter()
    base = CH if lang == 'nb_NO' else os.path.join(CH, 'nn')
    for b in MATTEBOKER:
        for fp in glob.glob(os.path.join(base, b + '-*.json')):
            if fp.endswith('-narrativ.json'):
                continue
            try:
                d = json.load(open(fp, encoding='utf-8'))
            except Exception:
                continue
            for blk, _ in blokker(d):
                for f in felt(blk):
                    if f.art in ('md', 'ren'):
                        c.update(ord_i(utenfor_matte(f.tekst, f.art)))
    os.makedirs(CACHE, exist_ok=True)
    skriv_json(p, dict(c))
    return c


def ord_i(tekst):
    """Ord i prosatekst; lenker, bildestier og domener fjernes først."""
    t = re.sub(r'!?\[[^\]]*\]\([^)]*\)', lambda m: re.sub(r'\]\([^)]*\)$', ']', m.group(0)), tekst)
    t = re.sub(r'https?://\S+|\b[\w.-]+\.(?:no|com|org|net|io)\b|/[\w/.-]+\.\w{2,4}\b', ' ', t)
    return re.findall(r'[A-Za-zÆØÅæøå]{2,}', t)


def sjekk(forekomster, staving='auto'):
    """forekomster: {lang: {ord: [antall, [(kapittel, fil, blokk, kontekst) …]]}} for alle ord i prosa.
    Returnerer (aeoa_funn, nn_bokmaal_funn, kilde)."""
    cacher = {'nb_NO': _last_cache('nb_NO'), 'nn_NO': _last_cache('nn_NO')}
    kilde = 'hurtiglager'
    if staving != 'av' and staving != 'korpus':
        modus = None
        if staving in ('auto', 'lokal') and _hunspell_dict():
            modus = 'lokal'
        elif staving in ('auto', 'node'):
            modus = 'node'
        if modus:
            ønsket = {lang: set(w for w in occ if w not in IGNORER) for lang, occ in forekomster.items()}
            ønsket.setdefault('nb_NO', set())
            ok = _slå_opp(cacher, ønsket, modus)
            # nn-ord som nn avviser: slå dem opp i nb også (for nn-bokmaal-ord)
            if ok and 'nn_NO' in forekomster:
                avv = set(w for w in forekomster['nn_NO'] if isinstance(cacher['nn_NO'].get(w), list))
                ok = _slå_opp(cacher, {'nb_NO': avv}, modus)
            kilde = ('hurtiglager (alle ord kjent)' if ok == 'cache' else
                     ('hunspell lokalt' if modus == 'lokal' else 'hunspell på adhv-box') if ok else 'hurtiglager (hunspell utilgjengelig)')
    aeoa_funn, nnb = [], []
    if staving == 'av':
        return aeoa_funn, nnb, 'av'
    for lang, occ in forekomster.items():
        korpus = None
        for w, (n, eks) in occ.items():
            if w in IGNORER or not _trenger_varianter(w):
                continue
            c = cacher[lang].get(w)
            forslag = None
            if isinstance(c, list):
                forslag = c or None
            elif c is None:
                if korpus is None:
                    korpus = _korpus(lang)
                    kilde += ' + korpus'
                vs = [v for v in _varianter(w) if korpus.get(v, 0) >= 3 and korpus.get(w, 0) * 5 < korpus.get(v, 0)]
                forslag = vs or None
            if not forslag and KJENTE.fullmatch(w):
                forslag = ['(kjent strippet ord)']
            if forslag:
                aeoa_funn.append({'lang': lang, 'ord': w, 'forslag': forslag[:4], 'antall': n, 'eks': eks})
    for w, (n, eks) in forekomster.get('nn_NO', {}).items():
        if w in IGNORER:
            continue
        if isinstance(cacher['nn_NO'].get(w), list) and not cacher['nn_NO'][w] and cacher['nb_NO'].get(w) is True:
            nnb.append({'lang': 'nn_NO', 'ord': w, 'antall': n, 'eks': eks})
    return aeoa_funn, nnb, kilde
