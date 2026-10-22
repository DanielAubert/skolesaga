#!/usr/bin/env python3
"""Mutasjonstest for regn.py (måler følsomhet): tar likhetskjeder som regn.py godkjenner, endrer ETT tall i det siste
leddet i kildeteksten (siste siffer +1 eller ×1,1) og sjekker om regn.py da melder avvik. Leser bare kapitlene.
Bruk: python3 test_regn.py 1t 2p [--maks 400]"""
import argparse
import random
import re
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import regn
from felles import blokker, felt, finn_ider, les_kap


def sjekk_felt(tekst, art):
    ut = []
    for kj in regn.kjeder_i_felt(tekst, art):
        if len(kj) < 2:
            continue
        ledd = [regn.evaluer(t, None) for _, t in kj]
        for i in range(1, len(ledd)):
            ut.append(regn.sjekk_par(ledd[i - 1], ledd[i], kj[i][0] or '='))
    return ut


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('kapitler', nargs='+')
    ap.add_argument('--maks', type=int, default=400)
    a = ap.parse_args()
    random.seed(22102026)
    kandidater = []
    for cid in finn_ider(a.kapitler):
        regn.E_ER_EULER[0] = cid.split('-')[0] not in ('1p', '1t', '2p', '2py')
        for b, _ in blokker(les_kap(cid)):
            for fe in felt(b):
                if fe.art != 'md' or fe.rolle not in ('losning', 'skjult-losning'):
                    continue
                r = sjekk_felt(fe.tekst, fe.art)
                if r and all(x in ('ok', None) for x in r) and 'ok' in r:
                    kandidater.append((cid, fe.tekst))
    random.shuffle(kandidater)
    res = {'siffer+1': [0, 0, 0], 'x1,1': [0, 0, 0]}
    eks = []
    for cid, tekst in kandidater[:a.maks]:
        regn.E_ER_EULER[0] = cid.split('-')[0] not in ('1p', '1t', '2p', '2py')
        # siste tall i siste matte-segment med «=» eller «≈»
        segs = list(re.finditer(r'\$\$([\s\S]*?)\$\$|\$([^$\n]+?)\$', tekst))
        segs = [m for m in segs if re.search(r'=|\\approx', m.group(0))]
        if not segs:
            continue
        m = segs[-1]
        tall = list(re.finditer(r'(\d+)(?:\{,\}(\d+))?', m.group(0)))
        if not tall:
            continue
        t = tall[-1]
        start = m.start() + t.start()
        slutt = m.start() + t.end()
        orig = t.group(0)
        heltall, des = t.group(1), t.group(2)
        # siffer+1
        if des:
            ny1 = heltall + '{,}' + des[:-1] + str((int(des[-1]) + 1) % 10)
        else:
            ny1 = heltall[:-1] + str((int(heltall[-1]) + 1) % 10)
        v = float(heltall + ('.' + des if des else ''))
        ny2 = ('%.*f' % (len(des) if des else 0, v * 1.1)).replace('.', '{,}')
        for navn, ny in (('siffer+1', ny1), ('x1,1', ny2)):
            if ny == orig:
                continue
            mut = tekst[:start] + ny + tekst[slutt:]
            regn.CACHE.clear()
            r = sjekk_felt(mut, 'md')
            res[navn][1] += 1
            if 'avvik' in r or 'avrunding-likhet' in r:
                res[navn][0] += 1
                res[navn][2] += 1
            elif 'avrunding-mellomledd' in r:
                res[navn][2] += 1
            elif len(eks) < 12:
                eks.append((navn, cid, orig, ny, m.group(0)[:90].replace('\n', ' ')))
    for k, (fanget, n, alle) in res.items():
        print('%-9s fanget som avvik %d av %d mutasjoner (%.0f %%); med info-klassen avrunding-mellomledd %d (%.0f %%)' % (
            k, fanget, n, 100.0 * fanget / (n or 1), alle, 100.0 * alle / (n or 1)))
    print('eksempler på ufangede (siste tall endret, men regn.py melder ikke):')
    for e in eks:
        print('  ', e)


if __name__ == '__main__':
    main()
