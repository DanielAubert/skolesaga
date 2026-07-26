#!/usr/bin/env python3
"""rett-hardbrekk.py — slå sammen prosa som er hardt linjebrutt midt i setninger.

Rendreren (`latex-renderer.tsx`) gjør HVERT enkelt `\\n` om til `<br />`:

    result = result.replace(/\\n\\n/g, '</p><p class="my-3">');
    result = result.replace(/\\n/g,   '<br />');

Det er tilsiktet — byggekontrakten krever enkelt linjeskift mellom deloppgaver
(`**a)** …\\n**b)** …`), og hele plattformen er avhengig av det. Men når en
forfatter har brutt vanlig brødtekst ved ~60 tegn, ser leseren linjeskift midt
inne i setningene:

    …og de bærer
    hele Oppgave 4, den store modelleringen…

Derfor rettes DATAENE, ikke rendreren.

SAMMENSLÅINGSREGELEN er bevisst streng — den slår bare sammen når alt stemmer:
  · forrige linje slutter IKKE med setningstegn
  · neste linje starter med LITEN bokstav
  · ingen av dem er liste, overskrift, sitat, tabell, kodegjerde eller LaTeX
  · ingen av dem er tomme

Alt annet står urørt. Det gjør at vi heller lar en ekte hardbrekk stå enn å
lime sammen to ting som skulle vært adskilt.

Bruk:
    python3 scripts/rett-hardbrekk.py --tørrkjør            # tell, endre ingenting
    python3 scripts/rett-hardbrekk.py --tørrkjør in1000     # bare ett emne
    python3 scripts/rett-hardbrekk.py --skriv               # utfør
"""
import glob
import json
import os
import pathlib
import re
import sys

# Linjer som ALDRI skal slås sammen — verken som forrige eller neste linje.
#
# `[a-e])` var opprinnelig IKKE med, og det kostet: første kjøring 26. juli 2026
# limte 1 817 flervalgsalternativer i 430 filer inn i løpende prosa, fordi
# «b) tre ganger så stor» ser ut som en fortsettelse (liten forbokstav, forrige
# linje uten punktum). Regresjonssjekken min så det ikke — den lette etter fet
# merking (`**a)**`), mens alternativlister er umerkede.
HOPP = re.compile(r'^\s*(?:[-*+>|#]|\d+[.)]|[a-eA-E][.)]\s|\$\$|```|\\)')
SLUTT = re.compile(r'[.!?:;»)\]}]\s*$|\*\*$|\$$')


def slaa_sammen(tekst):
    """Returnerer (ny_tekst, antall_sammenslåinger)."""
    if '\n' not in tekst:
        return tekst, 0
    linjer = tekst.split('\n')
    ut = [linjer[0]]
    n = 0
    for linje in linjer[1:]:
        forrige = ut[-1]
        a, b = forrige.rstrip(), linje.strip()
        if (a and b
                and not HOPP.match(a) and not HOPP.match(b)
                and not SLUTT.search(a)
                and b[:1].islower()):
            ut[-1] = a + ' ' + b
            n += 1
        else:
            ut.append(linje)
    return '\n'.join(ut), n


def gaa(node):
    if isinstance(node, str):
        return slaa_sammen(node)
    if isinstance(node, dict):
        t = 0
        for k, v in node.items():
            node[k], m = gaa(v)
            t += m
        return node, t
    if isinstance(node, list):
        t = 0
        for i, v in enumerate(node):
            node[i], m = gaa(v)
            t += m
        return node, t
    return node, 0


def main():
    skriv = '--skriv' in sys.argv
    emne = next((a for a in sys.argv[1:] if not a.startswith('--')), None)
    mønster = f'src/lib/data/chapters/{emne}-*.json' if emne else 'src/lib/data/chapters/*.json'

    rørt, totalt = 0, 0
    for f in sorted(glob.glob(mønster)):
        if os.path.basename(f).startswith('_'):
            continue
        p = pathlib.Path(f)
        raw = p.read_text(encoding='utf-8')
        d = json.loads(raw)
        innhold = d.get('content')
        if innhold is None:
            continue
        d['content'], n = gaa(innhold)
        if not n:
            continue
        rørt += 1
        totalt += n
        if skriv:
            # Bevar filformatet. Kompakte énlinjes-filer må IKKE bli
            # innrykkede — det gir tusenvis av linjers falsk diff.
            kompakt = '\n' not in raw.strip()[1:200]
            ut = (json.dumps(d, ensure_ascii=False, separators=(',', ':')) if kompakt
                  else json.dumps(d, ensure_ascii=False, indent=2))
            p.write_text(ut + ('\n' if raw.endswith('\n') else ''), encoding='utf-8')

    ord_ = 'slått sammen' if skriv else 'ville blitt slått sammen'
    print(f'  {totalt} linjepar {ord_} i {rørt} kapitler')
    if not skriv:
        print('  (tørrkjøring — ingenting er endret. Kjør med --skriv for å utføre.)')


if __name__ == '__main__':
    main()
