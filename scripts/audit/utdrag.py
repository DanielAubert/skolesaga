#!/usr/bin/env python3
"""Kompakt tekstutdrag av et Skolesaga-kapittel for en modellauditor — bare det eleven ser, uten JSON-syntaks.

Per blokk: én header-linje [id|type|tittel/nr|vanskegrad] + elevsynlig tekst (oppgave, løsning, deloppgaver med svar,
hint, alternativer med ✓ for riktig, formler, nøkkelbegreper). Bilder blir «[figur: alt-tekst]», bildestier kuttes.
`_meta` tas aldri med. Nynorsk tas bare med der maskin.py fant bm↔nn-avvik (resten er dekket maskinelt).
Med --maskin/--regn merkes blokk-headerne med maskinfunn (⚑) og regnedekning (✓regnet n/m), så modellen vet hva
som alt er sjekket.

Bruk:
  python3 utdrag.py 1t-3-2                         # til stdout
  python3 utdrag.py 1t 2p --utmappe ut/ [--bare-endret] [--maskin maskin.json] [--regn regn.json] [--nn-full]
  python3 utdrag.py 1t-3-2 1t-3-3 --maal           # mål tokens: rå JSON (bm+nn) mot utdrag
Med --utmappe skrives <id>.txt og <id>.manifest.json (blokk-hashene som ble vist — brukes av hukommelse.py fra-audit)."""
import argparse
import collections
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from felles import blokk_hash, blokker, er_repetisjon, felt, finn_ider, kap_sti, les_kap, tokens, skriv_json
import hukommelse


def rens(s):
    s = re.sub(r'!\[([^\]]*)\]\([^)]*\)', lambda m: '[figur: %s]' % (m.group(1).strip() or 'uten alt-tekst'), s)
    s = re.sub(r'\*\*(Løsning|Løysing):\*\*\s*', '', s)
    s = re.sub(r'[ \t]+\n', '\n', s)
    s = re.sub(r'\n{2,}', '\n', s)
    return s.strip()


def header(b, ctx, merker):
    t = b.get('type')
    deler = [b.get('id'), t]
    e = b.get('exercise') if isinstance(b.get('exercise'), dict) else None
    if e:
        deler.append('nr %s' % e.get('number', '?'))
        deler.append(str(e.get('difficulty', '–')))
        if er_repetisjon(b, ctx):
            deler.append('repetisjon')
        if e.get('type') and e.get('type') != 'classic':
            deler.append(e['type'])
    elif b.get('title') and t not in ('_kapittel',):
        deler.append(rens(b['title'])[:70])
    h = '[' + '|'.join(str(x) for x in deler) + ']'
    if merker:
        h += ' ' + ' '.join(merker)
    return h


def blokktekst(b, ctx):
    """Elevsynlig tekst for én blokk, kompakt."""
    t = b.get('type')
    F = felt(b)
    ut = []
    if t == 'image':
        alt = (b.get('alt') or '').strip()
        cap = rens(b.get('caption') or '')
        return ['[figur: %s]%s' % (alt or 'uten alt-tekst', (' — ' + cap) if cap else '')]
    if t == 'geogebra':
        d = rens(b.get('description') or '')
        return ([d] if d else []) + ['GGB: ' + '; '.join(b.get('commands') or [])]
    if t == 'exercise' and isinstance(b.get('exercise'), dict):
        e = b['exercise']
        if e.get('task'):
            ut.append('OPPG: ' + rens(e['task']))
        if e.get('image'):
            ut.append('[figur i oppgaven]')
        for s in e.get('subTasks') or []:
            if not isinstance(s, dict):
                continue
            linje = ' %s) %s' % (s.get('label', '?'), rens(s.get('task') or ''))
            if s.get('solution'):
                linje += '\n   → ' + rens(s['solution']).replace('\n', '\n     ')
            fasit = []
            if s.get('answer') is not None:
                fasit.append('svar=%s' % json.dumps(s['answer'], ensure_ascii=False))
            if s.get('expressionAnswer') is not None:
                fasit.append('uttrykk=%s' % json.dumps(s['expressionAnswer'], ensure_ascii=False))
            if fasit:
                linje += '  {' + ', '.join(fasit) + '}'
            ut.append(linje)
        for o in e.get('options') or []:
            if isinstance(o, dict):
                ut.append(' (%s) %s%s' % ('✓' if o.get('isCorrect') else ' ', rens(o.get('text') or ''),
                                          (' — ' + rens(o['feedback'])) if o.get('feedback') else ''))
            else:
                ut.append(' ( ) ' + rens(str(o)))
        # Quiz med delspørsmål (exercise.questions[], f.eks. lesevennlige versjoner): før 22.10.2026 viste utdraget bare
        # «(✓) placeholder» og spørsmålene ble aldri auditert.
        for qi, q in enumerate(e.get('questions') or []):
            if not isinstance(q, dict):
                continue
            ut.append(' Q%d: %s' % (qi + 1, rens(q.get('task') or q.get('question') or '')))
            for o in q.get('options') or []:
                if isinstance(o, dict):
                    ut.append('   (%s) %s' % ('✓' if o.get('isCorrect') else ' ', rens(o.get('text') or '')))
                else:
                    ut.append('   ( ) ' + rens(str(o)))
            for k in ('solution', 'explanation'):
                if isinstance(q.get(k), str) and q[k].strip():
                    ut.append('   → ' + rens(q[k]))
        for i, h in enumerate(e.get('hints') or []):
            if isinstance(h, str):
                ut.append('HINT: ' + rens(h))
        sol = e.get('solution')
        har_sub = any(isinstance(s, dict) and s.get('solution') for s in e.get('subTasks') or [])
        if isinstance(sol, str) and sol.strip():
            merke = 'FASIT(skjult)' if (e.get('hideInlineSolution') or har_sub) else 'LØSN'
            ut.append('%s: %s' % (merke, rens(sol)))
        elif isinstance(sol, dict):
            ut.append('LØSN: %s %s' % (rens(sol.get('answer') or ''), rens(sol.get('explanation') or '')))
        for k in ('answer', 'correctAnswer'):
            if e.get(k) is not None:
                ut.append('{%s=%s}' % (k, json.dumps(e[k], ensure_ascii=False)))
        return ut
    if t == 'example':
        if b.get('problem') or b.get('content'):
            ut.append('OPPG: ' + rens(b.get('problem') or b.get('content')))
        if b.get('solution'):
            ut.append('LØSN: ' + rens(b['solution']))
        for s in b.get('steps') or []:
            ut.append('- ' + rens(s))
        for sb in b.get('solutionContent') or []:
            if isinstance(sb, dict):
                ut += ['  ' + x for x in blokktekst(sb, ctx)]
        return ut
    if t == '_kapittel':
        if b.get('description'):
            ut.append(rens(b['description']))
        for k in b.get('keyTerms') or []:
            if isinstance(k, dict):
                ut.append('BEGREP %s: %s' % (rens(k.get('term') or ''), rens(k.get('definition') or '')))
        return ut
    if t == 'collapsible':
        return []
    for f in F:
        if f.rolle == 'tittel':
            continue
        if f.art == 'kode':
            ut.append('KODE: ' + f.tekst.strip())
        elif f.art == 'bilde':
            continue
        else:
            ut.append(rens(f.tekst))
    return ut


def lag_utdrag(cid, bare_endret=False, maskin=None, regn=None, nn_full=False):
    """→ (tekst, manifest)"""
    bm = les_kap(cid, 'bm')
    nn = les_kap(cid, 'nn')
    if bm is None:
        raise SystemExit('fant ikke %s' % cid)
    nn_map = {b.get('id'): b for b, _ in blokker(nn)} if nn else {}
    ta_med = hukommelse.må_auditeres(cid) if bare_endret else None
    tilst = hukommelse.tilstand(cid) if bare_endret else {}
    mfunn = collections.defaultdict(list)
    nn_avvik = collections.defaultdict(list)
    for f in (maskin or {}).get('funn', []):
        if f['kapittel'] != cid or f.get('alvor') == 'info':
            continue
        if f['port'].startswith('bmnn-'):
            nn_avvik[f['blokk']].append('%s %s' % (f['port'], f['sti']))
        elif not f['fil'].startswith('nn'):
            mfunn[f['blokk']].append(f['port'] if f['port'] != 'forbudt' else 'forbudt:' + f.get('regel', ''))
    ravvik = collections.defaultdict(list)
    for x in (regn or {}).get('avvik', []):
        if x['kapittel'] == cid and x['fil'] == 'bm' and x['klasse'] in ('avvik', 'symbolsk-avvik', 'fasitfelt'):
            ravvik[x['blokk']].append('%s: %s %s %s%s' % (x['klasse'], x['venstre'][:60], x['rel'], x['høyre'][:50],
                                                         '' if x.get('v') is None else ' (%.6g vs %.6g)' % (x['v'], x['h'])))
    rdekn = (regn or {}).get('per_blokk', {}).get(cid, {})
    linjer = ['# %s · %s %s' % (cid, bm.get('chapterNumber', ''), bm.get('title', ''))]
    if bm.get('competenceGoals'):
        linjer.append('Mål: ' + ' | '.join(bm['competenceGoals']))
    manifest = {'kapittel': cid, 'blokker': {}}
    hoppet = 0
    for b, ctx in blokker(bm):
        bid = b.get('id')
        if ta_med is not None and bid not in ta_med:
            hoppet += 1
            continue
        merker = []
        if ta_med is not None and tilst.get(bid) in ('endret', 'funn'):
            merker.append('(åpent funn)' if tilst[bid] == 'funn' else '(endret siden godkjent)')
        if bid in mfunn:
            merker.append('⚑maskin:' + ','.join(sorted(set(mfunn[bid]))))
        rd = rdekn.get(bid)
        if rd and rd['sjekket']:
            merker.append('✓regnet %d' % rd['sjekket'])
        if rd and rd['uparserbare_ledd']:
            merker.append('?%d ledd ikke tolket' % rd['uparserbare_ledd'])
        tekst = blokktekst(b, ctx)
        if not tekst and b.get('type') == 'collapsible':
            linjer.append('== %s (%s) ==' % (rens(b.get('title') or ''), bid))
        else:
            linjer.append(header(b, ctx, merker))
            linjer += tekst
        for r in ravvik.get(bid, []):
            linjer.append('⚑REGN ' + r)
        c = nn_map.get(bid)
        if nn_full and c is not None:
            linjer.append('NN: ' + '\nNN: '.join(blokktekst(c, ctx)))
        elif bid in nn_avvik and c is not None:
            linjer.append('⚑NN-AVVIK (%s):' % '; '.join(nn_avvik[bid][:3]))
            linjer += ['NN: ' + x for x in blokktekst(c, ctx)]
        manifest['blokker'][bid] = {'bm': blokk_hash(b), 'nn': blokk_hash(c) if c is not None else None}
    if hoppet:
        linjer.append('(%d blokker er uendret siden siste godkjente audit og er utelatt)' % hoppet)
    return '\n'.join(linjer) + '\n', manifest


def rå_tegn(cid):
    n = 0
    for sprak in ('bm', 'nn'):
        p = kap_sti(cid, sprak)
        if os.path.exists(p):
            with open(p, encoding='utf-8') as f:
                d = json.load(f)
            d.pop('_meta', None)
            # slik en modell typisk leser fila: pent formatert JSON (minifisert fil leses også ofte slik via json.dumps)
            n += len(json.dumps(d, ensure_ascii=False, indent=1))
    return n


def rå_tegn_fil(cid):
    return sum(os.path.getsize(kap_sti(cid, s)) for s in ('bm', 'nn') if os.path.exists(kap_sti(cid, s)))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('kapitler', nargs='+')
    ap.add_argument('--bare-endret', action='store_true')
    ap.add_argument('--maskin')
    ap.add_argument('--regn')
    ap.add_argument('--nn-full', action='store_true')
    ap.add_argument('--utmappe')
    ap.add_argument('--maal', action='store_true')
    a = ap.parse_args()
    maskin = json.load(open(a.maskin, encoding='utf-8')) if a.maskin else None
    regn = json.load(open(a.regn, encoding='utf-8')) if a.regn else None
    ider = finn_ider(a.kapitler)
    if a.maal:
        print('%-10s %10s %10s %10s %10s %7s' % ('kapittel', 'fil-tok', 'json-tok', 'utdrag', 'endret', 'spart'))
        S = collections.Counter()
        for cid in ider:
            fil = tokens(rå_tegn_fil(cid))
            js = tokens(rå_tegn(cid))
            u = tokens(len(lag_utdrag(cid, maskin=maskin, regn=regn)[0]))
            e = tokens(len(lag_utdrag(cid, bare_endret=True, maskin=maskin, regn=regn)[0]))
            S.update({'fil': fil, 'json': js, 'utdrag': u, 'endret': e})
            print('%-10s %10d %10d %10d %10d %6.0f %%' % (cid, fil, js, u, e, 100.0 * (1 - u / max(fil, 1))))
        print('%-10s %10d %10d %10d %10d %6.0f %%' % ('SUM', S['fil'], S['json'], S['utdrag'], S['endret'],
                                                     100.0 * (1 - S['utdrag'] / max(S['fil'], 1))))
        print('(tokens ≈ tegn/4; fil = bm+nn-filene på disk inkl. _meta; json = bm+nn uten _meta, innrykket; '
              'endret = utdrag --bare-endret mot nåværende ledger)')
        return
    for cid in ider:
        tekst, man = lag_utdrag(cid, a.bare_endret, maskin, regn, a.nn_full)
        if a.utmappe:
            os.makedirs(a.utmappe, exist_ok=True)
            with open(os.path.join(a.utmappe, cid + '.txt'), 'w', encoding='utf-8') as f:
                f.write(tekst)
            man['tokens'] = tokens(len(tekst))
            skriv_json(os.path.join(a.utmappe, cid + '.manifest.json'), man)
        else:
            sys.stdout.write(tekst)


if __name__ == '__main__':
    main()
