#!/usr/bin/env python3
"""sjekk-rutekollisjon.py — kolliderer en kurs-id med en toppnivårute?

Fra 27. juli 2026 ligger kursene i ROT-navnerommet:

    /1t/1t-1-1          i stedet for /bok/1t/1t-1-1

Segmentet `` var en tom videresending til forsiden og sto som dødvekt i
18 133 adresser. Prisen for å fjerne det er at 167 kurs-id-er nå deler
navnerom med 39 toppnivåruter — `/login`, `/quiz`, `/profil`, `/trinn` …

I Next.js vinner en statisk rute over et dynamisk segment. Et kurs med id-en
`quiz` ville derfor blitt UTILGJENGELIG, uten feilmelding noe sted: ruta ville
bare vist quiz-sida, og boka forsvunnet i stillhet.

Den porten finnes for å gjøre den stillheten til en byggefeil.

Kjør:  python3 scripts/sjekk-rutekollisjon.py
Exit 1 ved kollisjon.
"""
import glob
import os
import re
import sys

ROT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROT, 'src/app')

# Filer Next.js eier i rota, og som aldri kan være en kurs-id.
RESERVERT = {
    'api', 'sitemap.xml', 'robots.txt', 'manifest.json', 'favicon.ico',
    'icon', 'apple-icon', 'opengraph-image', 'nn', 'sme',
    # public/ serveres fra samme rot
    'images', 'audio', 'icons', 'fonts',
}


def toppnivaruter():
    ut = set(RESERVERT)
    for d in os.listdir(APP):
        p = os.path.join(APP, d)
        if not os.path.isdir(p):
            # sitemap.ts, robots.ts, layout.tsx …
            navn = d.rsplit('.', 1)[0]
            if navn not in ('layout', 'page', 'globals', 'not-found', 'loading'):
                ut.add(navn)
            continue
        if d.startswith('(') or d.startswith('_'):
            continue  # rutegruppe eller privat mappe — ikke en URL
        if d.startswith('['):
            continue  # selve det dynamiske kurssegmentet
        ut.add(d)
    return ut


def kursider():
    ut = set()
    for f in glob.glob(os.path.join(ROT, 'src/lib/data/textbook-courses*.ts')):
        s = open(f, encoding='utf-8').read()
        ut |= set(re.findall(r"id: '([a-z0-9-]+)',\s*\n\s*title:", s))
    return ut


def main():
    ruter, kurs = toppnivaruter(), kursider()
    kollisjon = sorted(ruter & kurs)

    print(f'  {len(kurs)} kurs-id-er kontrollert mot {len(ruter)} toppnivåruter')
    if kollisjon:
        print(f'\n  RUTEPORT AVVIK: {len(kollisjon)} kollisjon(er)\n')
        for k in kollisjon:
            print(f'    «{k}» er både en toppnivårute og en kurs-id.')
        print('\n  En statisk rute vinner over det dynamiske kurssegmentet, så boka')
        print('  ville blitt utilgjengelig UTEN feilmelding. Døp om det ene.')
        sys.exit(1)
    print('  RUTEPORT OK — ingen kurs-id kolliderer med en toppnivårute')


if __name__ == '__main__':
    main()
