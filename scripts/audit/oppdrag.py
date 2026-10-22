#!/usr/bin/env python3
"""Fyller OPPDRAG-MAL.md for en kjøringsmappe (brukes av kjor-audit.sh). Bruk: python3 oppdrag.py <kjøringsmappe>"""
import collections
import datetime
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from felles import AUDIT


def main():
    mappe = os.path.abspath(sys.argv[1])
    maskin = json.load(open(os.path.join(mappe, 'maskin.json'), encoding='utf-8'))
    regn = json.load(open(os.path.join(mappe, 'regn.json'), encoding='utf-8'))
    udir = os.path.join(mappe, 'utdrag')
    mf = collections.defaultdict(collections.Counter)
    for f in maskin['funn']:
        mf[f['kapittel']][f['alvor']] += 1
    ra = collections.Counter(x['kapittel'] for x in regn['avvik'] if x['klasse'] in ('avvik', 'symbolsk-avvik', 'fasitfelt'))
    rader = ['| kapittel | blokker i utdraget | tokens | maskinfunn feil/bør | regn-avvik å avgjøre |', '|---|---|---|---|---|']
    tot = 0
    endret = False
    for navn in sorted(os.listdir(udir)):
        if not navn.endswith('.manifest.json'):
            continue
        man = json.load(open(os.path.join(udir, navn), encoding='utf-8'))
        cid = man['kapittel']
        tot += man.get('tokens', 0)
        tekst = open(os.path.join(udir, cid + '.txt'), encoding='utf-8').read()
        endret = endret or 'uendret siden siste godkjente audit' in tekst
        rader.append('| `utdrag/%s.txt` | %d | %d | %d/%d | %d |' % (cid, len(man['blokker']), man.get('tokens', 0),
                                                                  mf[cid]['feil'], mf[cid]['bør'], ra[cid]))
    porter = '\n'.join('- **%s** — %s' % (k, v) for k, v in maskin['porter'].items())
    porter += ('\n- **regn.py** — likhetskjeder (=, ≈, aligned, «= …» på ny linje) regnet numerisk i alle felt; '
               'fasitfelt `{svar=…}` sjekket mot tallene i egen løsning. Dekning denne kjøringen: %.0f %% av leddene tolket, '
               '%d par sjekket.' % (100 * regn['dekning']['ledd_parset_andel'],
                                    regn['totalt'].get('par_numerisk', 0) + regn['totalt'].get('par_symbolsk', 0)))
    mal = open(os.path.join(AUDIT, 'OPPDRAG-MAL.md'), encoding='utf-8').read()
    ut = (mal.replace('{{DATO}}', datetime.date.today().isoformat()).replace('{{MAPPE}}', mappe)
          .replace('{{N_KAP}}', str(len(rader) - 2)).replace('{{TOKENS}}', str(tot))
          .replace('{{ENDRET}}', ' (bare blokker som er nye/endret/har åpne funn siden forrige audit)' if endret else '')
          .replace('{{PORTER}}', porter).replace('{{TABELL}}', '\n'.join(rader)))
    with open(os.path.join(mappe, 'OPPDRAG-MODELL.md'), 'w', encoding='utf-8') as f:
        f.write(ut)
    print('OPPDRAG-MODELL.md: %d kapitler, utdrag ≈ %d tokens' % (len(rader) - 2, tot))


if __name__ == '__main__':
    main()
