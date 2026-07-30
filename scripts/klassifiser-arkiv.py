#!/usr/bin/env python3
"""Avgjer om ei arkivfil er oppgåve, sensorveiledning eller løysingsforslag —
ut frå TEKSTEN i fila, ikkje filnamnet.

KVIFOR: filnamn lyg i begge retningar. I éi tidlegare runde var 276 filer som
heitte «eksamen…» løysingsforslag, og 83 som heitte «…svar/los» var
oppgåvesett. Per 31. juli 2026 hadde 12 677 av 15 978 filer i arkivet ein type
som berre var GJETTA frå namnet. Dei tre klassane er juridisk ulike
(BRUKSREGLER-ARKIV.md), og «har vi fasit for denne terminen?» er eit spørsmål
bøkene byggjer påstandar på. Ei gjetting ser like truverdig ut som ei
verifisering når ho først står i ei kolonne.

KONSERVATIVT MED VILJE. Finn skriptet ikkje tydelege spor, skriv det INGEN
type — då står den gamle, namnebaserte gjettinga att, og `type_kilde` avslører
framleis at ho er ei gjetting. Ein gjetta verdi som utgir seg for å vere
verifisert, er verre enn ingen verdi.

KVAR RAD BER BEVISET SITT. Kolonnen `bevis` inneheld dei faktiske orda som
avgjorde. Utan den kan ingen ettergå ei omklassifisering utan å opne 12 000
PDF-ar på nytt.

RANGERINGA er etter kor spesifikt eit ord er, ikkje kor ofte det står:
  1. sensorveiledning — eit oppgåvesett seier nesten aldri «sensorveiledning»,
     medan ei sensorveiledning gjerne gjentek heile oppgåveteksten. Står ordet
     der, er dokumentet ei rettleiing.
  2. løysingsforslag  — same argument eit hakk ned.
  3. oppgåve          — det som står att når ingen av dei to over er der.

⚠ Ord som berre VISER TIL ei rettleiing («sensorveiledning publiseres etter
eksamen») er lukka ute eksplisitt. Utan det blir oppgåvesett feilklassifiserte
av si eiga fotnote.

Skriv MANIFEST-innholdsklassifisering.csv ved sida av arkivet. Køyr
sorter-arkiv.py etterpå for at indeksen skal ta det inn.

Køyr:  python3 scripts/klassifiser-arkiv.py            # alle ugjennomgåtte
       python3 scripts/klassifiser-arkiv.py --prove 40 # stikkprøve, skriv ingenting
       python3 scripts/klassifiser-arkiv.py --alle     # også dei alt verifiserte
"""
import csv
import os
import random
import re
import subprocess
import sys
from collections import Counter

ROT = os.path.expanduser('~/Desktop/Eksamner/_nedlastet-2026-07-30')
INDEKS = os.path.join(ROT, 'INDEKS.csv')
UT = os.path.join(ROT, 'MANIFEST-innholdsklassifisering.csv')
DATO = '2026-07-31'
SIDER = 3          # framsida ber typen; tre sider tek med forord og forside

# ── Markørar ────────────────────────────────────────────────────────────────
# Nynorsk og engelsk står side om side med bokmål: arkivet har alle tre, og ei
# sensorveiledning på nynorsk heiter «sensorrettleiing».
SENSOR = [
    r'sensor\s*-?\s*(?:veiledning|rettleiing|veiledninger|rettleiingar|'
    r'veiledn|instruks)',
    # ⚠ «SENSURveiledning», ikkje «SENSORveiledning». NTNUs psykologimalar
    # skriv det slik, og PSYPRO4413 slapp berre unna fordi ho tilfeldigvis
    # også sa «karakterbeskrivelse».
    r'sensur\s*-?\s*(?:veiledning|rettleiing|veiledninger|rettleiingar)',
    r'veiledning\s+til\s+sensor', r'rettleiing\s+til\s+sensor',
    r'retningslinjer\s+for\s+sensur', r'til\s+sensorene?\b', r'for\s+sensorane?\b',
    r'grading\s+guidelines?', r'assessment\s+guidelines?',
    r'guidelines?\s+for\s+(?:the\s+)?(?:grader|examiner|marking)',
    r'marking\s+criteria', r'vurderingskriterier\s+for\s+sensur',
    r'karakterbeskrivelse', r'karakterskildring',
]
LØSNING = [
    r'l[øo]sningsforslag', r'l[øy]ysingsforslag', r'l[øy]ysingsframlegg',
    r'l[øo]sningsskisse', r'l[øy]ysingsskisse', r'l[øo]sningsforsl',
    r'\bfasit\b', r'suggested\s+solutions?', r'solutions?\s+to\s+(?:the\s+)?exam',
    r'answer\s+key', r'sample\s+answers?', r'l[øo]sning\s+p[åa]\s+oppgave',
    r'forslag\s+til\s+l[øo]sning', r'framlegg\s+til\s+l[øy]ysing',
    r'solution\s+proposal', r'^\s*solutions?\s*$',
]
# ⚠ «solution» åleine står IKKE her. Ei økonomieksamensoppgave skriv «find the
# solution to the maximisation problem» på første side, og ordet ville gjort
# oppgåvesettet til eit løysingsforslag. Berre samanstillingar som eit
# oppgåvesett ikkje kan ha, er tekne med over.
OPPGAVE = [
    r'eksamensoppgave', r'eksamensoppg[åa]ve', r'oppgavesett',
    r'skriftlig\s+eksamen', r'skriftleg\s+eksamen', r'skoleeksamen',
    r'hjemmeeksamen', r'heimeeksamen', r'\beksamen\s+i\b',
    r'tillatte\s+hjelpemidler', r'hjelpemidler\s*:', r'hjelpemiddel\s*:',
    r'examination\s+paper', r'written\s+(?:school\s+)?exam', r'permitted\s+aids',
    r'kandidatnummer', r'candidate\s+number', r'varighet\s*:', r'varigheit\s*:',
    r'eksamensdato', r'eksamenstid',
    # UiOs engelske framside — heile ECON- og SGO-arkivet ser slik ut, og utan
    # desse sto 40 % av stikkprøva som «ingen markører».
    r'date\s+of\s+exam', r'time\s+for\s+exam', r'the\s+problem\s+set\s+covers',
    r'resources\s+allowed', r'grades?\s+are\s+given', r'\bexam\s*:',
    r'sensuren?\s+faller', r'antall\s+sider', r'oppgave[nt]\s+best[åa]r\s+av',
    r'oppg[åa]va\s+best[åa]r\s+av', r'les\s+n[øy]ye\s+gjennom',
    r'^\s*oppgave\s+1\b', r'^\s*oppg[åa]ve\s+1\b',
]
# ⚠ «Sensorveiledningen publiseres etter eksamen» står PÅ oppgåvesettet. Utan
# denne lista blir settet lest som ei rettleiing. Same for løysingsforslag:
# mange oppgåvesett lovar at eit forslag kjem seinare.
VISER_TIL = re.compile(
    r'(?i)(sensorveiledning(?:en|a)?|sensorrettleiing(?:a|en)?|'
    r'l[øo]sningsforslag(?:et)?|fasit(?:en)?)\s+'
    r'(?:vil\s+bli|blir|blei|ble|kan|publiseres|publiserast|legges|leggjast|'
    r'kommer|kjem|foreligger|finnes|finst|er\s+tilgjengelig)')


def treff(mønstre, tekst):
    ut = []
    for m in mønstre:
        f = re.search('(?im)' + m, tekst)   # m: flere mønstre er forankra i linjestart
        if f:
            ut.append(f.group(0).lower().replace('\n', ' ').strip())
    return ut


def tekst_av(sti):
    """Første sider som rein tekst. Tom streng for skanna PDF-ar utan tekstlag."""
    if not sti.lower().endswith('.pdf'):
        return ''
    r = subprocess.run(
        ['pdftotext', '-f', '1', '-l', str(SIDER), '-q', sti, '-'],
        capture_output=True, timeout=60)
    return r.stdout.decode('utf-8', 'replace')


def klassifiser(tekst):
    """(type, bevis). Type er '' når ingenting er tydeleg — sjå toppen."""
    if len(tekst.strip()) < 80:
        return '', 'for lite tekst (skanna?)'
    # Fjern setningar som berre VISER TIL ei rettleiing, før markørane blir talde.
    reinsa = VISER_TIL.sub(' ', tekst)
    s, l, o = treff(SENSOR, reinsa), treff(LØSNING, reinsa), treff(OPPGAVE, reinsa)
    if s:
        return 'sensorveiledning', '; '.join(s[:3])
    if l:
        return 'losningsforslag', '; '.join(l[:3])
    if o:
        return 'oppgave', '; '.join(o[:3])
    return '', 'ingen markører'


# ⚠ EIN ASYMMETRI SOM MÅ STÅ: INNHALD SLÅR IKKJE NAMN I ALLE RETNINGAR.
#
# Grunnen er at dei tre dokumenttypane inneheld kvarandre. Ei sensorveiledning
# og eit løysingsforslag gjentek som regel HEILE framsida av oppgåvesettet, med
# «Tillatte hjelpemidler» og alt — så «oppgåvemarkørar til stades» tyder berre
# at dokumentet INNEHELD ei oppgåve, ikkje at det ER oppgåvesettet. Og ei
# sensorveiledning inneheld gjerne fasiten: ECON1710 H2015 opnar med
# «ECON1710, H2015 — "FASIT" PÅ STIKKORDS FORM» og er like fullt UiOs
# publiserte sensorveiledning.
#
# Difor godtek vi ei omklassifisering berre når det nye ordet er MEIR
# spesifikt enn den førre gjettinga:
#
#   → sensorveiledning  alltid. Eit oppgåvesett seier ikkje «sensorveiledning»
#                       om seg sjølv (og formuleringar som berre viser til éi,
#                       er alt luka bort i VISER_TIL).
#   → losningsforslag   ikkje når namnet alt sa sensorveiledning. «Fasit» i ei
#                       rettleiing er innhald, ikkje motbevis — og forskjellen
#                       er juridisk: sensorveiledning frå offentleg institusjon
#                       kan hostast lovleg, tredjeparts løysingsforslag ikkje.
#   → oppgave           berre når den førre gjettinga ikkje sa fasit/rettleiing.
#
# Prisen er kjend og akseptert: oppgåvesett som ER feilnamngjevne («…svar.pdf»)
# blir ikkje retta av dette skriptet. Å la ei gjetting stå — framleis synleg
# som gjetting i `type_kilde` — er billigare enn å stemple ho som verifisert i
# feil retning. Utan denne dempinga gjorde stikkprøva 31. juli 2026 fire
# løysingsforslag om til oppgåvesett og éi sensorveiledning om til eit
# løysingsforslag.
IKKJE_OVERSTYR = {
    'losningsforslag': {'sensorveiledning'},
    'oppgave': {'sensorveiledning', 'losningsforslag'},
}


def temper(typ, bevis, forrige):
    if forrige in IKKJE_OVERSTYR.get(typ, ()):
        return '', '%s-markørar, men namnet seier %s — for uklart' % (typ, forrige)
    return typ, bevis


def rader():
    with open(INDEKS, encoding='utf-8') as f:
        return list(csv.DictReader(f))


def sti_av(r):
    # ⚠ UNDERMAPPE MÅ MED. 653 filer ligg i undermapper («TDT4120/arkiv»,
    # «PROG1001/eksamen»); utan dette leddet finn skriptet ingen av dei og
    # rapporterer «fann ikkje fila» for kvar einaste.
    return os.path.join(ROT, r['mappe'], r.get('undermappe', ''), r['filnavn'])


def main():
    alle = '--alle' in sys.argv
    prøve = int(sys.argv[sys.argv.index('--prove') + 1]) if '--prove' in sys.argv else 0

    r = [x for x in rader() if x['filnavn'].lower().endswith('.pdf')]
    if not alle:
        r = [x for x in r if x.get('type_kilde') != 'pdf-verifisert']
    if prøve:
        random.seed(20260731)      # same stikkprøve kvar gong — elles kan ingen ettergå henne
        r = random.sample(r, min(prøve, len(r)))
    print('%d PDF-ar å gå gjennom%s' % (len(r), '  (STIKKPRØVE)' if prøve else ''))

    tel = Counter()
    endra = Counter()
    uavklart = Counter()
    ut = []
    for i, x in enumerate(r, 1):
        sti = sti_av(x)
        if not os.path.exists(sti):
            tel['fann ikkje fila'] += 1
            continue
        try:
            t = tekst_av(sti)
        except Exception:
            tel['pdftotext feila'] += 1
            continue
        typ, bevis = klassifiser(t)
        typ, bevis = temper(typ, bevis, x['type'])
        tel[typ or '(uavklart)'] += 1
        if not typ:
            # Kvifor noko står att som uavklart er det einaste sporet vi har
            # til kva neste markør bør vere. Utan denne tellinga er 4 000
            # uavklarte filer berre eit tal.
            uavklart[bevis.split(',')[0][:46]] += 1
        if typ and typ != x['type']:
            endra['%s → %s' % (x['type'], typ)] += 1
        if typ:
            # ⚠ `mappe`, IKKJE `emnekode`. sorter-arkiv.py slår opp i manifestet
            # på (MAPPENAMN, filnamn). Emnekoden i INDEKS.csv er den UTLEIDDE
            # koden, og for 943 kryssreferansar er dei to ulike — ein TMA4115-
            # eksamen som ligg i TMA4110-mappa ville aldri blitt funnen igjen.
            ut.append([x['mappe'], x.get('larested', ''), x['filnavn'], typ,
                       x.get('bytes', ''), x.get('kilde_url', ''), '', DATO,
                       'innhold', x.get('kildestatus', ''), bevis])
        if prøve:
            print('  %-16s %-42s %s' % (typ or '(uavklart)', x['filnavn'][:42], bevis[:60]))
        elif i % 500 == 0:
            print('  %d/%d …' % (i, len(r)))

    print('\nResultat:')
    for k, v in tel.most_common():
        print('  %-18s %5d' % (k, v))
    if endra:
        print('\nOmklassifiseringar (gammal type frå filnamn → ny frå innhald):')
        for k, v in endra.most_common(15):
            print('  %-34s %5d' % (k, v))
    if uavklart:
        print('\nKvifor uavklart:')
        for k, v in uavklart.most_common(10):
            print('  %-48s %5d' % (k, v))

    if prøve:
        print('\nStikkprøve — ingenting skrive.')
        return
    with open(UT, 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['emnekode', 'larested', 'filnavn', 'type', 'bytes',
                    'kilde_url', 'arkiv_url', 'hentet', 'type_kilde',
                    'kildestatus', 'bevis'])
        w.writerows(ut)
    print('\nSkreiv %d rader til %s' % (len(ut), UT))
    print('Køyr sorter-arkiv.py for at INDEKS.csv skal ta det inn.')


if __name__ == '__main__':
    main()
