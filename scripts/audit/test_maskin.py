#!/usr/bin/env python3
"""Selvtest for maskin.py: lager et kunstig kapittel med én kjent feil per port i en tom mappe, kjører maskin.py mot den
og sjekker at hver port slår ut. Rører ikke de ekte kapitlene.
Bruk: python3 test_maskin.py <tom arbeidsmappe>   (f.eks. i scratchpad)"""
import json
import os
import subprocess
import sys

HER = os.path.dirname(os.path.abspath(__file__))
EKTE_ROOT = os.path.normpath(os.path.join(HER, '..', '..'))

BM = {
    'id': '1t-99-1', 'courseId': '1t', 'chapterNumber': '99.1', 'title': 'Testkapittel', 'description': 'Test.',
    'competenceGoals': [], 'exercises': [],
    'content': [
        {'id': 't-katex', 'type': 'text', 'content': 'Formel $\\frac{1}{$ og $x^{2$.'},
        {'id': 't-dollar', 'type': 'text', 'content': 'Prisen er $5 kroner.'},
        {'id': 't-prosent', 'type': 'text', 'content': 'Rente $5%$ per år.'},
        {'id': 't-kroll', 'type': 'text', 'content': 'Lengden er 2{,}5 m.'},
        {'id': 't-desimal', 'type': 'text', 'content': 'Vi får $x = 2.5$ og 3.75 kg.'},
        {'id': 't-tusen', 'type': 'text', 'content': 'Beløpet er $12,500$ kr.'},
        {'id': 't-litn', 'type': 'text', 'content': 'Første linje.\\nAndre linje.'},
        {'id': 't-ktrl', 'type': 'text', 'content': 'Brøk $\x0crac{1}{2}$.'},
        {'id': 't-bakstrek', 'type': 'text', 'content': 'Vi har $a cdot b$.'},
        {'id': 't-aeoa', 'type': 'text', 'content': 'Losningen er ogsa riktig nar vi regner.'},
        {'id': 't-forbudt', 'type': 'text', 'content': 'Grafen er konveks. Bruk SOH-CAH-TOA og IQR.'},
        {'id': 't-steg', 'type': 'example', 'title': 'Eksempel', 'problem': 'Regn ut $2+3$.',
         'solution': '1. Legg sammen\n$2 + 3 = 5$\n2. Ferdig'},
        {'id': 't-svar', 'type': 'example', 'title': 'Eksempel', 'problem': 'Regn ut $2+3$.',
         'solution': '$2 + 3$\n$= 5$'},
        {'id': 't-prosa', 'type': 'example', 'title': 'Eksempel', 'problem': 'Regn ut.',
         'solution': 'Vi regner først ut summen og ser at $2 + 3 = 5$, og deretter ganger vi med to slik at vi får '
                     '$5 \\cdot 2 = 10$, og til slutt trekker vi fra tre og får $10 - 3 = 7$ som er det endelige svaret '
                     'i denne oppgaven her. **Svar:** $7$'},
        {'id': 't-ex', 'type': 'exercise', 'exercise': {'id': 't-ex-1', 'number': '1', 'type': 'classic',
                                                         'difficulty': 'middels', 'task': 'Regn ut', 'solution': '$4$'}},
        {'id': 't-dobbel', 'type': 'text', 'content': 'A'},
        {'id': 't-dobbel', 'type': 'text', 'content': 'B'},
        {'id': 't-bilde', 'type': 'image', 'src': '/images/finnes-ikke-audit-test.png', 'alt': '', 'caption': 'Figur'},
        {'id': 't-fyll-1', 'type': 'text', 'content': 'x'},
        {'id': 't-fyll-2', 'type': 'text', 'content': 'y'},
        {'id': 't-fyll-3', 'type': 'text', 'content': 'z'},
        {'id': 't-kyrillisk', 'type': 'text', 'content': 'Fellesnemнaren er 6.'},
        {'id': 't-bmnn', 'type': 'text', 'content': 'Vi får $x = 4$ og 3 epler.'},
        {'id': 't-figref', 'type': 'text', 'content': 'Se på figuren nedenfor.'},
    ]}


def lag_nn(bm):
    nn = json.loads(json.dumps(bm))
    nn['_meta'] = {'tm': {'abc': 'ikke tell meg — konveks $5%'}}
    for b in nn['content']:
        if b['id'] == 't-bmnn':
            b['content'] = 'Vi får $x = 5$ og 4 eple. Dette er ikke riktig.'
        if b['id'] == 't-fyll-1':
            b['id'] = 't-fyll-1-nn'
    return nn


VENTET = ['katex', 'dollar', 'prosent-i-matte', 'krollkomma-tekst', 'desimalpunktum-matte', 'desimalpunktum-tekst',
          'tusenskille-komma', 'literal-n', 'kontrolltegn', 'mistet-bakstrek', 'aeoa', 'forbudt', 'stegnummer',
          'svar-mangler', 'prosa', 'vanskegrad', 'dobbel-id', 'bilde-mangler', 'alt-mangler', 'figurhenvisning',
          'bmnn-struktur', 'bmnn-matte', 'nn-bokmaal', 'fremmede-tegn']


def main():
    mappe = os.path.abspath(sys.argv[1])
    ch = os.path.join(mappe, 'src', 'lib', 'data', 'chapters')
    os.makedirs(os.path.join(ch, 'nn'), exist_ok=True)
    os.makedirs(os.path.join(mappe, 'public', 'images'), exist_ok=True)
    with open(os.path.join(ch, '1t-99-1.json'), 'w', encoding='utf-8') as f:
        json.dump(BM, f, ensure_ascii=False)
    with open(os.path.join(ch, 'nn', '1t-99-1.json'), 'w', encoding='utf-8') as f:
        json.dump(lag_nn(BM), f, ensure_ascii=False)
    env = dict(os.environ, SKOLESAGA_ROOT=mappe, KATEX_STI=os.path.join(EKTE_ROOT, 'node_modules', 'katex'))
    ut = os.path.join(mappe, 'maskin-test.json')
    subprocess.run([sys.executable, os.path.join(HER, 'maskin.py'), '1t-99-1', '--staving=korpus', '--ut', ut, '--stille'],
                   env=env, check=True)
    d = json.load(open(ut, encoding='utf-8'))
    porter = set(f['port'] for f in d['funn'])
    meta = [f for f in d['funn'] if 'ikke tell meg' in f.get('utdrag', '')]
    ok = True
    for p in VENTET:
        print('%-22s %s' % (p, 'OK' if p in porter else 'MANGLER'))
        ok = ok and p in porter
    print('_meta hoppet over: %s' % ('OK' if not meta else 'FEIL (%d funn fra _meta)' % len(meta)))
    sys.exit(0 if ok and not meta else 1)


if __name__ == '__main__':
    main()
