#!/usr/bin/env python3
"""Skriver arkivets INNHOLD.md fra indeksen, ikke for hånd.

Den håndskrevne INNHOLD.md kom i utakt med disken tre ganger på én dag —
nedlastinger fortsatte etter at den var skrevet. Genereres den fra
TERMINER.csv, kan den ikke lyve om hva som ligger der.

Kjør ETTER scripts/sorter-arkiv.py.
"""
import csv
import os
from collections import defaultdict

ROT = os.path.expanduser('~/Desktop/Eksamner/_nedlastet-2026-07-30')


def les(navn):
    with open(os.path.join(ROT, navn), encoding='utf-8') as f:
        return list(csv.DictReader(f))


def main():
    idx = les('INDEKS.csv')
    term = les('TERMINER.csv')

    per_emne = defaultdict(lambda: {'term': 0, 'fasit': 0, 'ar': []})
    for t in term:
        e = per_emne[t['emnekode']]
        e['term'] += 1
        e['ar'].append(int(t['ar']))
        if t['har_fasit'] == 'ja':
            e['fasit'] += 1

    filer_per_emne = defaultdict(int)
    for r in idx:
        filer_per_emne[r['emnekode']] += 1

    bytes_tot = sum(int(r['bytes']) for r in idx)
    fasit_tot = sum(1 for t in term if t['har_fasit'] == 'ja')

    L = []
    w = L.append
    w('# Hva ligger i denne mappa')
    w('')
    w('Lastet ned 30. juli 2026. **Alt her er nytt i denne runden** — mappa er')
    w('bevisst holdt adskilt fra det eksisterende arkivet i `~/Desktop/Eksamner/`,')
    w('så det alltid er tydelig hva som kom når. Sammenslåing er en egen,')
    w('senere beslutning.')
    w('')
    w('Denne fila er GENERERT fra `TERMINER.csv` av `scripts/skriv-innhold.py`.')
    w('Ikke rediger den for hånd — kjør skriptet på nytt. Den håndskrevne')
    w('versjonen kom i utakt med disken tre ganger samme dag.')
    w('')
    w('## Rettslig grunnlag')
    w('')
    w('Eksamensoppgaver og sensorveiledninger fra offentlige institusjoner er')
    w('frie etter åndsverkloven § 14. Alt her er hentet fra institusjonenes')
    w('EGNE åpne sider — ingen innlogging, ingen studentdelte kopier')
    w('(Studocu, CourseHero, private repo), ingen omgåelse av tilgangskontroll.')
    w('')
    w('Sider som svarte 200 men viste et innloggingsskjema er avvist, ikke')
    w('lastet ned. Det gjelder minst tre: to STV-sett hos UiO og')
    w('`molbio.wiki.uib.no`. Statuskoden lyver — innholdet avgjør.')
    w('')
    w('## Nøkkeltall')
    w('')
    w('| mål | tall |')
    w('|---|---|')
    w('| Filer | %d |' % len(idx))
    w('| Størrelse | %.1f GB |' % (bytes_tot / 1024**3))
    w('| **Unike eksamensterminer** | **%d** |' % len(term))
    w('| Emner | %d |' % len(per_emne))
    w('| Terminer med fasit | %d (%.0f %%) |' % (fasit_tot, 100 * fasit_tot / len(term)))
    w('')
    w('## ⚠ Bruk TERMINER, ikke filtellinger')
    w('')
    w('Bokmål, nynorsk og engelsk er **tre filer av samme eksamen**. `TMA4110`')
    w('har over 200 filer og 34 terminer. Alle «N av M sett»-påstander i bøkene')
    w('og i markedsføringen skal bygge på `TERMINER.csv`.')
    w('')
    w('Kontinuasjonseksamen (`K`) er en egen termin, ikke en variant av vår')
    w('eller høst — den har egne oppgaver.')
    w('')
    w('Tallene er et **gulv, ikke et tak**: %d filer har ingen tolkbar termin'
      % sum(1 for r in idx if not r['termin']))
    w('(`formelark.pdf`, `eksempeleksamen_1.pdf` og liknende) og er ikke talt.')
    w('')
    w('## Filene')
    w('')
    w('| fil | innhold |')
    w('|---|---|')
    w('| `INDEKS.csv` | én rad per fil: emnekode, termin, type, språk, md5, dublett |')
    w('| `TERMINER.csv` | én rad per (emne, termin): har vi oppgave? har vi fasit? |')
    w('| `KRYSSREFERANSER.csv` | filer med annen emnekode enn arkivet — må avgjøres av et menneske |')
    w('| `_SORTERT.md` | sammendrag per emne |')
    w('| `MANIFEST.csv` | rå nedlastingslogg. **Ikke en pålitelig indeks** — flere jobber skrev til mappa, mange filer mangler rad |')
    w('')
    w('## Mapper som IKKE er emner')
    w('')
    w('| mappe | hva det er |')
    w('|---|---|')
    w('| `_INSTITUTTARKIV-IMK-medievitenskap` | hele instituttets arkiv, 79 emnekoder. Bare 8 filer gjelder MEVIT1010 |')
    w('| `_INSTITUTTARKIV-IMV-musikkvitenskap` | samme, for musikkvitenskap |')
    w('| `_TILLEGG-forelesningsnotater` | lysark, **ikke eksamenssett**. Telles ikke. Har ikke nødvendigvis samme frie stilling etter § 14 |')
    w('| `_feilplassert` | filer som ikke lot seg plassere |')
    w('')
    w('## Per emne')
    w('')
    w('Sortert på antall terminer. «Fasit» betyr at terminen har minst ett')
    w('løsningsforslag eller én sensorveiledning.')
    w('')
    w('| emne | terminer | med fasit | dekning | spenn | filer |')
    w('|---|---|---|---|---|---|')
    for kode, v in sorted(per_emne.items(), key=lambda x: (-x[1]['term'], x[0])):
        w('| `%s` | %d | %d | %.0f %% | %d–%d | %d |'
          % (kode, v['term'], v['fasit'], 100 * v['fasit'] / v['term'],
             min(v['ar']), max(v['ar']), filer_per_emne.get(kode, 0)))
    w('')

    ut = os.path.join(ROT, 'INNHOLD.md')
    with open(ut, 'w', encoding='utf-8') as f:
        f.write('\n'.join(L))
    print('Skrev %s (%d emner)' % (ut, len(per_emne)))


if __name__ == '__main__':
    main()
