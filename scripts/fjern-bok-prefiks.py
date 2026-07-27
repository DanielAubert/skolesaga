#!/usr/bin/env python3
"""fjern-bok-prefiks.py — flytt interne lenker fra /bok/<kurs>/… til /<kurs>/…

Engangsmigrasjon 27. juli 2026. Beholdt fordi den dokumenterer nøyaktig hva som
ble endret, og fordi tørrkjøringen er den eneste måten å se om et framtidig
funn er en regresjon herfra.

FORANKRING — dette er hele poenget med skriptet:

Naiv erstatning av «/bok/» → «/» ØDELEGGER prosa. I norsk-vg1-4-2 står det

    - bok/bok/bog (substantiv)

om bøying i bokmål, nynorsk og dansk. Det inneholder «/bok/» uten å være en
adresse, og en usikret erstatning gjorde det til «bok/bog».

Derfor treffer skriptet kun der «/bok/» starter en URL — rett etter «](» i en
markdown-lenke, eller etter et anførselstegn i en JSON-verdi.

Kjør:  python3 scripts/fjern-bok-prefiks.py --torr    (vis, endre ingenting)
       python3 scripts/fjern-bok-prefiks.py --skriv
"""
import glob
import os
import re
import sys

ROT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# «/bok/» kun der en lenke faktisk begynner. Gruppa beholder tegnet foran.
LENKE = re.compile(r'(\]\(|["\'])/bok/')
# Bar «/bok» uten sti, som lenkemål: ]() eller ""
BAR = re.compile(r'(\]\(|["\'])/bok(?=[)"\'])')


def filer():
    m = os.path.join(ROT, 'src/lib/data/chapters')
    for f in glob.glob(os.path.join(m, '**/*.json'), recursive=True):
        if os.path.basename(f).startswith('_'):
            continue  # _all.json m.fl. bygges av combine-chapters
        yield f


def main():
    skriv = '--skriv' in sys.argv
    if not skriv and '--torr' not in sys.argv:
        print(__doc__)
        sys.exit(2)

    n_fil = n_lenke = n_bar = 0
    for f in filer():
        s = open(f, encoding='utf-8').read()
        ny, a = LENKE.subn(r'\1/', s)
        ny, b = BAR.subn(r'\1/', ny)
        if not (a or b):
            continue
        n_fil += 1
        n_lenke += a
        n_bar += b
        if skriv:
            # Skriv rått. Kapittelfilene er kompakt énlinjes JSON
            # (separators=(',',':')), og json.dump ville reformatert hver fil.
            open(f, 'w', encoding='utf-8').write(ny)

    ord_ = 'ENDRET' if skriv else 'TØRRKJØRING — ingenting skrevet'
    print(f'  {ord_}')
    print(f'    {n_lenke} lenker med sti  +  {n_bar} bare «/bok»  i {n_fil} filer')


if __name__ == '__main__':
    main()
