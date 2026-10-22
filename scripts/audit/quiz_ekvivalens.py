#!/usr/bin/env python3
"""Ekvivalenssjekk av flervalgsalternativer i Skolesaga-kapitler (22.10.2026). 0 modelltokens.

Leser alle quizspørsmål (exercise.questions[].options[] i -narrativ-filene, og exercise.options[] der questions mangler,
også i hovedkapitlene) og flagger:
  feil-antall-riktige  spørsmålet har ikke nøyaktig ett alternativ med isCorrect
  like-alternativer    to alternativer med samme tekst (normalisert: mellomrom, \\, , {,}/., \\dfrac → \\frac)
  ekvivalent-fasit     et galt alternativ er matematisk lik fasit (numerisk eller sympy-identitet, ledd for ledd)
  ekvivalente          to gale alternativer er matematisk like (bør: eleven kan utelukke begge)
  ekvivalent-form      spørsmålet spør etter en FORM (faktorisert, forkortet …) og alternativene er like i verdi, men
                       ulike i form — kan være bevisst distraktor → skjønn. sympy_lik=True: sympy gir samme objekt
                       (faktorer i annen rekkefølge ER feil, men sympy ganger også ut tall: 3(x+2) = 3x+6 — se selv)
  avrundet-lik         et galt alternativ er lik fasit innenfor avrundingen til et av dem (info, sjekkes)
Parseren er regn.py sin (normaliser → tokeniser → evaluer), så norsk skolenotasjon (desimalkomma, tusenskille, %, °)
tolkes likt. Alternativet deles i ledd på toppnivå ved relasjoner/skilletegn (=, <, ≤, komma …); to alternativer er
ekvivalente når tekst utenfor matte er lik, skilletegnene er like og hvert ledd er likt (samme tall, sympy-identitet
eller samme tokenstreng).

Bruk:
  python3 quiz_ekvivalens.py 1t [2p …] [--nn] [--ut quiz-ekv.json] [--vis 50]
"""
import argparse
import collections
import json
import os
import re
import signal
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from felles import finn_ider, les_kap, segmenter, skriv_json  # noqa: E402
import regn  # noqa: E402
from regn import E_ER_EULER, REL, SEP_KOMMANDOER, evaluer, normaliser, tokeniser  # noqa: E402

import sympy as sp  # noqa: E402


def quizspørsmål(kap):
    """→ [(blokk-id, spm-id, oppgavetekst, options)]"""
    ut = []

    def gå(o):
        if isinstance(o, dict):
            ex = o.get('exercise') if isinstance(o.get('exercise'), dict) else (o if o.get('type') == 'multiple-choice' and 'options' in o else None)
            if ex is not None:
                qs = ex.get('questions')
                if isinstance(qs, list) and qs:
                    for q in qs:
                        if isinstance(q, dict) and isinstance(q.get('options'), list):
                            ut.append((o.get('id') or ex.get('id'), q.get('id'), q.get('task', ''), q['options']))
                elif isinstance(ex.get('options'), list) and ex['options']:
                    ut.append((o.get('id') or ex.get('id'), ex.get('id'), ex.get('task', ''), ex['options']))
            for k, v in o.items():
                if k in ('_meta', 'exercise', 'questions', 'options'):
                    continue
                gå(v)
        elif isinstance(o, list):
            for v in o:
                gå(v)
    gå(kap.get('content'))
    gå(kap.get('exercises'))
    return ut


def nøkkel(tekst):
    s = normaliser(str(tekst))
    s = re.sub(r'\$', '', s)
    s = s.replace('{,}', '.').replace('\\,', '')
    s = re.sub(r'\\[dt]frac', r'\\frac', s)
    s = re.sub(r'\s+', '', s).lower()
    return s


def ledd(tekst):
    """→ (tekst utenfor matte (normalisert), skilletegn-tuple, [ledd-tokens]) eller None hvis ingen matte."""
    segs = segmenter(str(tekst), 'md')
    mat = [x for slag, x in segs if slag in ('inline', 'display')]
    if not mat:
        return None
    utenfor = re.sub(r'\s+', ' ', ' '.join(x for slag, x in segs if slag == 'tekst')).strip().lower()
    alle = []
    skille = []
    for m in mat:
        toks = tokeniser(normaliser(m))
        cur = []
        dybde = 0
        for t in toks:
            k, v = t[0], t[1]
            if k == 'ch' and v in '({[':
                dybde += 1
            elif k == 'ch' and v in ')}]':
                dybde -= 1
            elif k == 'cmd' and v in ('\\{', '\\langle'):
                dybde += 1
            elif k == 'cmd' and v in ('\\}', '\\rangle'):
                dybde -= 1
            if dybde == 0 and ((k == 'ch' and v in '=,;<>') or (k == 'cmd' and (v in REL or v in SEP_KOMMANDOER))):
                alle.append(cur)
                skille.append(v)
                cur = []
                continue
            cur.append(t)
        alle.append(cur)
        skille.append('|')
    return utenfor, tuple(skille), alle


def ledd_lik(a, b, stat):
    """'lik' | 'avrundet' | None"""
    if regn.toks_str(a) == regn.toks_str(b):
        return 'lik'
    if not a or not b:
        return None
    ea, eb = evaluer(a, stat), evaluer(b, stat)
    if 'feil' in ea or 'feil' in eb:
        return None
    if ea.get('verdi') is not None and eb.get('verdi') is not None:
        x, y = ea['verdi'], eb['verdi']
        if abs(x - y) <= 1e-9 * max(1.0, abs(x), abs(y)):
            return 'lik'
        desimal = any(t[0] == 'num' and '.' in t[1] for t in a + b)
        if desimal and abs(x - y) <= 0.005 * max(abs(x), abs(y)):
            return 'avrundet'
        return None
    if ea.get('uttr') is not None and eb.get('uttr') is not None and not ea['funksjon'] and not eb['funksjon']:
        try:
            signal.setitimer(signal.ITIMER_REAL, 1.0)
            d = sp.simplify(sp.expand(ea['uttr'] - eb['uttr']))
            if d == 0:
                return 'samme' if ea['uttr'] == eb['uttr'] else 'lik'
            syms = sorted(d.free_symbols, key=str)
            if not syms:
                return None
            for vals in ((1.37, 2.11, 0.73, 1.9), (0.61, 1.53, 2.47, 3.1), (-1.3, 0.4, 2.9, -0.7)):
                sub = {s: vals[i % 4] + 0.1 * i for i, s in enumerate(syms)}
                v = complex(sp.N(d.subs(sub)))
                if abs(v) > 1e-7 * max(1.0, abs(complex(sp.N(ea['uttr'].subs(sub))))):
                    return None
            return 'lik'
        except Exception:
            return None
        finally:
            signal.setitimer(signal.ITIMER_REAL, 0)
    return None


def ekvivalens(t1, t2, stat):
    """'lik' | 'avrundet' | None"""
    if nøkkel(t1) == nøkkel(t2):
        return 'tekst'
    a, b = ledd(t1), ledd(t2)
    if a is None or b is None:
        return None
    if a[0] != b[0] or a[1] != b[1] or len(a[2]) != len(b[2]):
        return None
    rang = {'samme': 0, 'lik': 1, 'avrundet': 2}
    beste = 'samme'
    for x, y in zip(a[2], b[2]):
        r = ledd_lik(x, y, stat)
        if r is None:
            return None
        if rang[r] > rang[beste]:
            beste = r
    return beste


# Spørsmål der FORMEN er det som spørres etter (faktorisert, forkortet, primtallsfaktorisert …): et ekvivalent
# alternativ i en annen form kan være en bevisst distraktor → skjønn, ikke automatisk feil. Faktorene i annen rekkefølge er alltid
# feil — se etter sympy_lik=True.
FORM = re.compile(r'faktoris|forkort|primtal|fellesnevner|felles nevner|fellesnemnar|felles nemnar|med nevneren|med nemnaren|'
                  r'skriv\b.*\bsom|skriv\b.*\bpå|hvordan bør|korleis bør|form|utvid|ferdig|fullstendig|enklast', re.I)


def sjekk(ider, språk):
    funn = []
    n = collections.Counter()
    stat = collections.Counter()
    for cid in ider:
        E_ER_EULER[0] = cid.split('-')[0] not in ('1p', '1t', '2p', '2py', '8', '9', '10')
        for sp_ in språk:
            kap = les_kap(cid, sp_)
            if kap is None:
                continue
            for blokk, qid, task, opts in quizspørsmål(kap):
                n['spørsmål'] += 1
                riktige = [o for o in opts if isinstance(o, dict) and o.get('isCorrect')]
                base = {'kapittel': cid, 'fil': sp_, 'blokk': blokk, 'spm': qid, 'oppgave': str(task)[:160]}
                if len(riktige) != 1:
                    funn.append(dict(base, klasse='feil-antall-riktige', antall=len(riktige)))
                for i in range(len(opts)):
                    for j in range(i + 1, len(opts)):
                        oi, oj = opts[i], opts[j]
                        if not (isinstance(oi, dict) and isinstance(oj, dict)):
                            continue
                        r = ekvivalens(oi.get('text', ''), oj.get('text', ''), stat)
                        if r is None:
                            continue
                        fasit = bool(oi.get('isCorrect')) or bool(oj.get('isCorrect'))
                        if r == 'tekst':
                            k = 'like-alternativer'
                        elif r in ('samme', 'lik'):
                            if FORM.search(str(task)):
                                k = 'ekvivalent-form'
                            else:
                                k = 'ekvivalent-fasit' if fasit else 'ekvivalente'
                        else:
                            k = 'avrundet-lik' if fasit else None
                        if k:
                            funn.append(dict(base, klasse=k, sympy_lik=(r == 'samme'), fasit_involvert=fasit,
                                             a=[oi.get('id'), oi.get('text'), bool(oi.get('isCorrect'))],
                                             b=[oj.get('id'), oj.get('text'), bool(oj.get('isCorrect'))]))
    return n, funn


ALVOR = {'feil-antall-riktige': 'feil', 'like-alternativer': 'feil', 'ekvivalent-fasit': 'feil', 'ekvivalente': 'bør',
         'ekvivalent-form': 'skjønn', 'avrundet-lik': 'info'}


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('kapitler', nargs='+', help='id-er eller prefikser (1t, 2p, 1t-3)')
    ap.add_argument('--nn', action='store_true', help='sjekk også nn-filene')
    ap.add_argument('--ut', default=None)
    ap.add_argument('--vis', type=int, default=60)
    a = ap.parse_args()
    ider = finn_ider(a.kapitler, narrativ=True)
    n, funn = sjekk(ider, ['bm', 'nn'] if a.nn else ['bm'])
    for f in funn:
        f['alvor'] = ALVOR[f['klasse']]
    funn.sort(key=lambda f: (['feil', 'bør', 'skjønn', 'info'].index(f['alvor']), regn_nat(f['kapittel']), f['fil']))
    tell = collections.Counter(f['klasse'] for f in funn)
    print('quiz_ekvivalens: %d kapittelfiler, %d spørsmål sjekket · %s' % (len(ider), n['spørsmål'], dict(tell)))
    for f in funn[:a.vis]:
        if f['klasse'] == 'feil-antall-riktige':
            print('  %-20s %-4s %-4s %s  (%d riktige)' % (f['klasse'], f['alvor'], f['fil'], f['spm'], f['antall']))
        else:
            print('  %-20s %-4s %-4s %s  %s%s | %s%s' % (f['klasse'], f['alvor'], f['fil'], f['spm'], f['a'][1],
                                                        ' ✓' if f['a'][2] else '', f['b'][1], ' ✓' if f['b'][2] else ''))
    if a.ut:
        skriv_json(a.ut, {'antall_sporsmal': n['spørsmål'], 'tell': dict(tell), 'funn': funn})
        print('→', a.ut)
    return 1 if any(f['alvor'] == 'feil' for f in funn) else 0


def regn_nat(s):
    return [int(t) if t.isdigit() else t for t in re.split(r'(\d+)', s)]


if __name__ == '__main__':
    sys.exit(main())
