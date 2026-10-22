#!/usr/bin/env python3
"""Hukommelse for auditene: én ledger per bok i scripts/audit/ledger/<bok>.json som husker, for hver blokk, hashen av
elevsynlig innhold (bm og nn) da den sist ble dømt, datoen, dommen (GODKJENT|FUNN), hvem og hvilken runde.
utdrag.py --bare-endret tar bare med blokker som er nye eller endret siden siste GODKJENT — resten koster 0 tokens.

Kommandoer:
  status <prefiks|id…>                         hvor mye som er endret/nytt/åpent siden forrige audit
  endret <id>                                  blokk-id-er som må auditeres på nytt
  marker-godkjent <id> [blokk…] --runde R [--hvem H]   (uten blokker: hele kapitlet slik det er NÅ)
  marker-funn <id> blokk… --runde R [--hvem H] [--notat «…»]
  fra-audit <kjøringsmappe> --runde R [--hvem H]       les utdrag/*.manifest.json + funn.jsonl: blokker med funn
                                               (feil|bør) → FUNN, de andre blokkene i utdraget → GODKJENT, med hashen
                                               fra da utdraget ble laget (endret fila seg siden, regnes blokka som endret)
Ledger skrives med fillås, så flere sesjoner kan bruke den samtidig."""
import argparse
import contextlib
import datetime
import fcntl
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from felles import AUDIT, blokk_hash, blokker, bok, finn_ider, les_kap, skriv_json

LEDGER = os.environ.get('AUDIT_LEDGER') or os.path.join(AUDIT, 'ledger')


def _sti(b):
    return os.path.join(LEDGER, '%s.json' % b)


def les(b):
    p = _sti(b)
    if os.path.exists(p):
        with open(p, encoding='utf-8') as f:
            return json.load(f)
    return {}


@contextlib.contextmanager
def skrivelås(b):
    os.makedirs(LEDGER, exist_ok=True)
    with open(_sti(b) + '.lock', 'w') as lf:
        fcntl.flock(lf, fcntl.LOCK_EX)
        try:
            data = les(b)
            yield data
            skriv_json(_sti(b), data)
        finally:
            fcntl.flock(lf, fcntl.LOCK_UN)


def nå_hasher(cid):
    """{blokk-id: {'bm': hash, 'nn': hash|None}} for kapitlet slik det er nå."""
    ut = {}
    bm = les_kap(cid, 'bm')
    nn = les_kap(cid, 'nn')
    if bm is not None:
        for b, _ in blokker(bm):
            ut.setdefault(b.get('id'), {})['bm'] = blokk_hash(b)
    if nn is not None:
        for b, _ in blokker(nn):
            ut.setdefault(b.get('id'), {})['nn'] = blokk_hash(b)
    return ut


def tilstand(cid, ledger=None):
    """→ {blokk: 'godkjent'|'endret'|'ny'|'funn'} (funn = siste dom FUNN, uansett endring)."""
    ledger = ledger if ledger is not None else les(bok(cid))
    lk = ledger.get(cid, {})
    ut = {}
    for bid, h in nå_hasher(cid).items():
        r = lk.get(bid)
        if r is None:
            ut[bid] = 'ny'
        elif r.get('dom') == 'FUNN':
            ut[bid] = 'funn'
        elif r.get('bm') == h.get('bm') and r.get('nn') == h.get('nn'):
            ut[bid] = 'godkjent'
        else:
            ut[bid] = 'endret'
    return ut


def må_auditeres(cid):
    return set(b for b, t in tilstand(cid).items() if t != 'godkjent')


def marker(cid, dommer, runde, hvem, hasher=None, notat=None):
    """dommer: {blokk: 'GODKJENT'|'FUNN'}; hasher: {blokk: {'bm','nn'}} (standard: nå)."""
    hasher = hasher or nå_hasher(cid)
    dato = datetime.datetime.now().isoformat(timespec='minutes')
    with skrivelås(bok(cid)) as L:
        lk = L.setdefault(cid, {})
        for bid, dom in dommer.items():
            h = hasher.get(bid)
            if h is None:
                continue
            gammel = lk.get(bid, {})
            rad = {'bm': h.get('bm'), 'nn': h.get('nn'), 'dom': dom, 'dato': dato, 'hvem': hvem, 'runde': runde}
            if notat:
                rad['notat'] = notat
            if gammel.get('dom') == 'FUNN' and dom == 'GODKJENT':
                rad['tidligere'] = 'FUNN %s' % gammel.get('runde', '')
            lk[bid] = rad
    return len(dommer)


def cmd_status(args):
    tot = {'godkjent': 0, 'endret': 0, 'ny': 0, 'funn': 0}
    print('%-14s %6s %8s %7s %5s %5s' % ('kapittel', 'blokker', 'godkjent', 'endret', 'nye', 'FUNN'))
    ledgere = {}
    for cid in finn_ider(args.kapitler):
        L = ledgere.setdefault(bok(cid), les(bok(cid)))
        t = tilstand(cid, L)
        c = {k: sum(1 for v in t.values() if v == k) for k in tot}
        for k in tot:
            tot[k] += c[k]
        if not args.kort or c['endret'] or c['funn']:
            print('%-14s %6d %8d %7d %5d %5d' % (cid, len(t), c['godkjent'], c['endret'], c['ny'], c['funn']))
    n = sum(tot.values()) or 1
    print('SUM: %d blokker · godkjent uendret %d (%.0f %%) · endret %d · nye %d · åpne FUNN %d → utdrag --bare-endret '
          'tar med %d blokker (%.0f %%)' % (n, tot['godkjent'], 100.0 * tot['godkjent'] / n, tot['endret'], tot['ny'],
                                             tot['funn'], n - tot['godkjent'], 100.0 * (n - tot['godkjent']) / n))


def cmd_fra_audit(args):
    mappe = args.mappe
    funn = {}
    fp = os.path.join(mappe, 'funn.jsonl')
    if os.path.exists(fp):
        with open(fp, encoding='utf-8') as f:
            for linje in f:
                linje = linje.strip()
                if not linje:
                    continue
                try:
                    x = json.loads(linje)
                except ValueError:
                    print('hopper over ugyldig linje i funn.jsonl: %s' % linje[:80])
                    continue
                if x.get('alvor', 'feil') in ('feil', 'bør') and x.get('blokk'):
                    funn.setdefault(x.get('kapittel'), set()).add(x['blokk'])
    udir = os.path.join(mappe, 'utdrag')
    n_g = n_f = 0
    for navn in sorted(os.listdir(udir)):
        if not navn.endswith('.manifest.json'):
            continue
        with open(os.path.join(udir, navn), encoding='utf-8') as f:
            man = json.load(f)
        cid = man['kapittel']
        dommer = {bid: ('FUNN' if bid in funn.get(cid, ()) else 'GODKJENT') for bid in man['blokker']}
        marker(cid, dommer, args.runde, args.hvem, hasher=man['blokker'])
        n_f += sum(1 for d in dommer.values() if d == 'FUNN')
        n_g += sum(1 for d in dommer.values() if d == 'GODKJENT')
    ukjente = [(k, b) for k, bs in funn.items() for b in bs
               if not os.path.exists(os.path.join(udir, '%s.manifest.json' % k))]
    print('fra-audit: %d blokker GODKJENT, %d FUNN (runde %s)%s' % (
        n_g, n_f, args.runde, ('; %d funn i kapitler uten manifest ble ikke ført' % len(ukjente)) if ukjente else ''))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest='cmd')
    s = sub.add_parser('status')
    s.add_argument('kapitler', nargs='+')
    s.add_argument('--kort', action='store_true', help='bare kapitler med endrede blokker eller åpne funn')
    s = sub.add_parser('endret')
    s.add_argument('kapittel')
    for navn in ('marker-godkjent', 'marker-funn'):
        s = sub.add_parser(navn)
        s.add_argument('kapittel')
        s.add_argument('blokker', nargs='*')
        s.add_argument('--runde', required=True)
        s.add_argument('--hvem', default='ukjent')
        s.add_argument('--notat')
    s = sub.add_parser('fra-audit')
    s.add_argument('mappe')
    s.add_argument('--runde', required=True)
    s.add_argument('--hvem', default='modellauditor')
    a = ap.parse_args()
    if a.cmd == 'status':
        cmd_status(a)
    elif a.cmd == 'fra-audit':
        cmd_fra_audit(a)
    elif a.cmd == 'endret':
        t = tilstand(a.kapittel)
        for bid, v in t.items():
            if v != 'godkjent':
                print('%-8s %s' % (v, bid))
    elif a.cmd in ('marker-godkjent', 'marker-funn'):
        alle = list(nå_hasher(a.kapittel))
        bl = a.blokker or (alle if a.cmd == 'marker-godkjent' else [])
        if not bl:
            sys.exit('marker-funn krever blokk-id-er')
        ukjent = [b for b in bl if b not in alle]
        if ukjent:
            sys.exit('ukjente blokk-id-er: %s' % ukjent)
        n = marker(a.kapittel, {b: 'GODKJENT' if a.cmd == 'marker-godkjent' else 'FUNN' for b in bl}, a.runde, a.hvem,
                   notat=a.notat)
        print('%s: %d blokker merket %s (runde %s)' % (a.kapittel, n, 'GODKJENT' if a.cmd == 'marker-godkjent' else 'FUNN', a.runde))
    else:
        ap.print_help()


if __name__ == '__main__':
    main()
