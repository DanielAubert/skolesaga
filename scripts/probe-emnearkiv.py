#!/usr/bin/env python3
"""Finn eksamensarkiv som ligg som UNDERMAPPE under kvar emneside.

To ulike måtar å publisere på, og dei krev kvar sin hentar:

  · SAMLEARKIV  — eitt arkiv for heile instituttet (ILN, SV-fakultetet).
    Der held `finn-arkivmapper.py`, som krypar nedover frå éi rot.
  · PER EMNE    — eit lite arkiv under kvar emneside:
        /studier/emner/hf/ikos/ARA1010/sensorrettleiingar/
        /studier/emner/hf/ilos/ENG2515/Eksamensoppgaver/
    Det finst inga rot å krype frå. Dette skriptet dekkjer dét tilfellet.

TO INNGANGAR, fordi ingen av dei åleine er nok:

1. LES EMNESIDA og følg lenker som ser ut som eit arkiv. Dekkjer det meste.
2. PRØV KJENDE MAPPENAMN direkte med HEAD. Nødvendig fordi arkivet ikkje
   alltid er lenka: IKOS' JAP1501 har eit arkiv på /grading-guidelines/, men
   emnesida nemner det ikkje med eit ord (verifisert 30. juli 2026). Berre
   inngang 1 hadde mist det.

⚠ STIANE ER KASUSSENSITIVE. `ENG2515/Eksamensoppgaver/` svarer 200,
`ENG2515/eksamensoppgaver/` svarer 404, og `ara1010/…` gjer det same. Difor
står same ordet fleire gonger i MAPPENAMN med ulik kasus — det er ikkje slurv.
Dette er fallgruve 2 i ARKIV-NESTE-STEG.md, som har kosta 14 sett før.

⚠ HEAD 200 TYDER IKKJE AT DET FINST FILER. Mappa kan vere tom, og ho kan vere
ei innloggingsside som svarer 200 (fallgruve 4). Difor blir kvar treff-mappe
lesen med GET og teken med berre dersom ho faktisk har dokument i seg.

Skriptet lastar ikkje ned noko. Det skriv ei kjeldeliste:

    kode,arkiv_url,institutt

som går inn i `KILDER=` på last-ned-eksamener.py.

Køyr:
    python3 scripts/probe-emnearkiv.py hf/ikos "UiO IKOS" > ikos-kilder.csv
    python3 scripts/probe-emnearkiv.py hf/ilos "UiO ILOS" --emne ENG1100,ENG1200
"""
import html
import re
import subprocess
import sys
import time
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

UA = ('Skolesaga-arkivhenter/1.0 (laerebok-prosjekt; '
      'kontakt: studenthjelp@gmail.com)')
BASE = 'https://www.uio.no/studier/emner/'
# Høflegheit. HEAD er ei billig førespurnad, men det er eit offentleg
# universitet vi bankar på — ikkje meir enn eit par i sekundet totalt.
ARBEIDARAR = 3
PAUSE = 0.5

# Mappenamn observerte i faktiske UiO-stiar (CDX-uttrekk frå IKOS, ILOS og
# IFIKK + det som alt låg i arkivet). Rekkjefølgja er etter kor ofte dei traff.
MAPPENAMN = [
    'tidligere-eksamensoppgaver',
    'tidligere-eksamensoppgaver-og-sensorveiledninger',
    'eksamensoppgaver-og-sensorveiledninger',
    'eksamensoppgaver-og-sensurveiledning',
    'Eksamensoppgaver',
    'eksamensoppgaver',
    'sensorveiledning',
    'sensorveiledninger',
    'sensorrettleiingar',
    'grading-guidelines',
    'tidligere-gitte-sensorveiledninger',
    'assessment-guidelines',
    'exam-papers',
]
# Lenketekst/sti på emnesida som tyder arkiv (inngang 1).
ARKIVORD = re.compile(r'(?i)(sensor|eksamensoppg|eksamensoppgåv|grading|'
                      r'assessment|rettleiing|exam-paper|oppgavetekst)')
DOKUMENT = re.compile(r'\.(pdf|docx?|rtf|odt)(\?|/|$)', re.I)
HTML_SETT = re.compile(r'/[A-Za-zÆØÅæøå]{2,10}\d{3,4}[-_][^/]*\.html?$')
INNLOGGING = re.compile(r'Logg inn med din UiO-konto|Weblogin|Feide', re.I)


def curl(url, head=False):
    k = ['curl', '-sSL', '--max-time', '30', '-A', UA]
    if head:
        k += ['-I', '-o', '/dev/null', '-w', '%{http_code}']
    r = subprocess.run(k + [url], capture_output=True)
    if r.returncode != 0:
        return ''
    return r.stdout.decode('utf-8', 'replace')


def lenker(sidehtml, base):
    ut = []
    for m in re.finditer(r'href=["\']([^"\'#]+)', sidehtml):
        u = html.unescape(m.group(1))
        if u.startswith(('mailto:', 'javascript:', 'tel:')):
            continue
        ut.append(urllib.parse.urljoin(base, u))
    return ut


def emnekoder(institutt):
    """Alle emnekodene instituttet listar opp på oversiktssida."""
    s = curl(BASE + institutt + '/')
    # ⚠ TO SIFFER, IKKJE FIRE. Emnekodene har fire siffer — bortsett frå
    # EXPHIL03 og heile EXFAC03-familien (EXFAC03-EAST, -FIL, -KUN, -LIT …),
    # som har to. Eit mønster som krev fire hoppa over ni emne ved IKOS, ILOS
    # og IFIKK, og eitt av dei var EXPHIL03 — som denne kodebasen har ei
    # lærebok for.
    return sorted(set(re.findall(
        r'/studier/emner/%s/([A-ZÆØÅ]{2,10}[0-9]{2,4}[A-Za-z0-9-]*)/'
        % re.escape(institutt), s)))


def har_dokument(url):
    """GET på mappa. Returnerer talet på dokument, 0 om ho er tom eller stengd.

    Ei HEAD-200 er ikkje nok (fallgruve 4): sida kan vere eit innloggingsskjema.
    """
    s = curl(url)
    if not s or INNLOGGING.search(s[:20000]):
        return 0
    return sum(1 for l in lenker(s, url)
               if DOKUMENT.search(l) or HTML_SETT.search(l))


def for_emne(institutt, kode):
    rot = '%s%s/%s/' % (BASE, institutt, kode)
    kandidatar = []

    # Inngang 1: les emnesida.
    side = curl(rot)
    time.sleep(PAUSE)
    if side and not INNLOGGING.search(side[:20000]):
        for l in lenker(side, rot):
            if l.startswith(rot) and l.endswith('/') and ARKIVORD.search(l):
                kandidatar.append(l)

    # Inngang 2: prøv kjende mappenamn som sida ikkje nemner.
    for navn in MAPPENAMN:
        u = rot + navn + '/'
        if u in kandidatar:
            continue
        if curl(u, head=True).strip() == '200':
            kandidatar.append(u)
        time.sleep(PAUSE)

    ut = []
    for u in dict.fromkeys(kandidatar):
        n = har_dokument(u)
        time.sleep(PAUSE)
        if n:
            ut.append((kode, u, n))
        print('  %-14s %-3s %s' % (kode, n or '-', u[len(rot):]), file=sys.stderr)
    if not kandidatar:
        print('  %-14s  -' % kode, file=sys.stderr)
    return ut


def main():
    if len(sys.argv) < 3:
        sys.exit('bruk: probe-emnearkiv.py hf/ikos "UiO IKOS" [--emne A,B]')
    institutt, larested = sys.argv[1].strip('/'), sys.argv[2]
    if '--emne' in sys.argv:
        koder = sys.argv[sys.argv.index('--emne') + 1].split(',')
    else:
        koder = emnekoder(institutt)
    print('%d emne under %s' % (len(koder), institutt), file=sys.stderr)

    with ThreadPoolExecutor(max_workers=ARBEIDARAR) as p:
        resultat = list(p.map(lambda k: for_emne(institutt, k), koder))

    print('kode,arkiv_url,institutt')
    n = 0
    for rader in resultat:
        for kode, url, _ in rader:
            print('%s,%s,%s' % (kode, url, larested))
            n += 1
    print('\n%d arkivmapper med dokument i %d emne'
          % (n, sum(1 for r in resultat if r)), file=sys.stderr)


if __name__ == '__main__':
    main()
