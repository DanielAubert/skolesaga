#!/usr/bin/env python3
"""interne-lenker.py — kartlegg og valider alle interne lenker i kapittelinnhold.

Hvorfor dette finnes: en URL-omlegging fanges IKKE av redirects der lenka står
inne i kapitteltekst. Redirects redder besøkende som klikker, men teksten peker
fortsatt på den gamle adressen, og hvert klikk blir et ekstra hopp. Ved en
omlegging må disse skrives om i dataene.

Det finnes 10 520 slike lenker per 27. juli 2026, fordelt på 27 bøker.

Skriptet gjør tre ting:

  --kart      skriv src/lib/data/chapters/_lenkekart.json — maskinlesbart
              register over hver eneste interne lenke: hvilken fil den står i,
              hvilken form den har, og hva den peker på. DET er «markøren»:
              ett oppslag i stedet for et fullt sveip når strukturen endres.
  --sjekk     valider at hvert lenkemål faktisk finnes. Exit 1 ved døde lenker.
              Fant 144 døde lenker til den nedlagte /kurs/…/kapittel/…-formen
              i helseoppvekst-vg1 første gang den kjørte.
  --form      tell lenkene per URL-form, så omfanget av en omlegging er kjent
              før den settes i gang.

Kjør:
    python3 scripts/interne-lenker.py --sjekk           # port: dør på døde lenker
    python3 scripts/interne-lenker.py --kart            # oppdater registeret
    python3 scripts/interne-lenker.py --form            # omfangsmåling
"""
import glob
import json
import os
import re
import sys

ROT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAP = os.path.join(ROT, 'src/lib/data/chapters')
KART = os.path.join(KAP, '_lenkekart.json')

# Markdown-lenker til interne stier. Eksterne (http…) og ankere (#) er utenfor.
LENKE = re.compile(r'\]\((/[^)\s]+)\)')

# Ruter som ikke er kapittelsider, og derfor ikke skal valideres mot registeret.
IKKE_KAPITTEL = ('/images/', '/audio/', '/api/')


def alle_kapitler():
    d = json.load(open(os.path.join(KAP, '_all.json'), encoding='utf-8'))
    return set(d['chapters']), d.get('aliases', {})


def skann():
    """→ [(fil, url, form)] for hver interne lenke i hvert kapittel."""
    funn = []
    for f in sorted(glob.glob(f'{KAP}/*.json') + glob.glob(f'{KAP}/nn/*.json')):
        if os.path.basename(f).startswith('_'):
            continue
        rå = open(f, encoding='utf-8').read()
        if '](/' not in rå:
            continue
        rel = os.path.relpath(f, ROT)
        for m in LENKE.finditer(rå):
            funn.append((rel, m.group(1)))
    return funn


def form_av(url):
    d = url.strip('/').split('/')
    if url.startswith(IKKE_KAPITTEL):
        return 'ressurs'
    if d[0] != 'bok':
        return f'/{d[0]}/…'
    if len(d) > 1 and d[1] == 'trinn':
        return '/trinn/…'
    return {1: '/', 2: '/<kurs>', 3: '/<kurs>/<kapittel>'}.get(
        len(d), '/<kurs>/<kapittel>/<mer>')


def main():
    modus = sys.argv[1] if len(sys.argv) > 1 else '--sjekk'
    funn = skann()
    kapitler, aliaser = alle_kapitler()

    if modus == '--form':
        import collections
        c = collections.Counter(form_av(u) for _, u in funn)
        print(f'  {len(funn)} interne lenker i kapittelinnhold\n')
        for k, n in c.most_common():
            print(f'    {n:6d}  {k}')
        return

    # Valider: peker lenka på et kapittel som finnes?
    døde = []
    for fil, url in funn:
        if form_av(url) != '/<kurs>/<kapittel>':
            continue
        cid = url.strip('/').split('/')[2]
        if cid not in kapitler and aliaser.get(cid) not in kapitler:
            døde.append((fil, url))

    if modus == '--kart':
        import collections
        per_fil = collections.defaultdict(list)
        for fil, url in funn:
            per_fil[fil].append(url)
        kart = {
            '_note': ('Generert av scripts/interne-lenker.py --kart. Register over '
                      'interne lenker i kapittelinnhold, slik at en URL-omlegging '
                      'kan gjøres fra ett oppslag i stedet for et fullt sveip.'),
            'antall': len(funn),
            'former': dict(collections.Counter(form_av(u) for _, u in funn)),
            'filer': {f: sorted(set(u)) for f, u in sorted(per_fil.items())},
        }
        json.dump(kart, open(KART, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(f'  _lenkekart.json skrevet: {len(funn)} lenker i {len(per_fil)} filer')
        return

    print(f'  {len(funn)} interne lenker kontrollert i kapittelinnhold')
    if døde:
        print(f'  LENKEPORT AVVIK: {len(døde)} peker på kapitler som ikke finnes\n')
        for fil, url in døde[:20]:
            print(f'    {os.path.basename(fil)}: {url}')
        if len(døde) > 20:
            print(f'    … og {len(døde) - 20} til')
        sys.exit(1)
    print('  LENKEPORT OK — alle interne kapittellenker peker på kapitler som finnes')


if __name__ == '__main__':
    main()
