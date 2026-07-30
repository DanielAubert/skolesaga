#!/usr/bin/env python3
"""Krypar eit institusjonsarkiv og skriv ei kjeldeliste last-ned-eksamener.py kan hente frå.

Bakgrunn: fallgruve 9 i ARKIV-NESTE-STEG.md — «ett nivå er ikke nok». ILNs
samlearkiv ligg som
    /iln/tidligere-eksamensoppgaver/<fagområde>/<emnekode>/<fil>.pdf
altså TO nivå under rota. Ein hentar som les rotsida finn null filer der, fordi
rotsida berre inneheld mapper. Dette skriptet går nedover til det finn mapper
som faktisk har dokument i seg, og skriv ei rad per slik mappe:

    kode,arkiv_url,institutt

Fila går rett inn i `KILDER=` på last-ned-eksamener.py, som eig sjølve
nedlastinga (og dermed paginering, innloggingsvegg-sjekk, URL-enkoding).
Arbeidsdelinga er med vilje: oppdaging og nedlasting feilar på ulike måtar, og
ei kjeldeliste kan lesast av eit menneske FØR noko blir lasta ned.

FELLER SOM ER HANDTERTE HER (alle frå ARKIV-NESTE-STEG.md):

1. PAGINERING. Vortex-mappelister viser ~20-25 oppføringar og legg resten bak
   `?page=2`. Ei mappeliste som ikkje blir paginert ut, skjuler emne — ikkje
   berre filer.
2. STORE OG SMÅ BOKSTAVAR. UiO skriv halvparten av stiane med små. Vi les det
   som står i HTML-en og gjettar aldri på kasus.
3. EMNEKODEN ER IKKJE MAPPENAMNET. `his2324-his4324` er eitt arkiv for to
   emne; `EXFAC03-HARK` er eitt emne der halen høyrer til koden; `nor/NOR100`
   er ei fagområdemappe som inneheld NOR1100-filer. Difor: koden blir gjetta
   ut frå mappenamnet, men det er sorter-arkiv.py som avgjer den ekte koden ut
   frå filnamnet. Koden her styrer berre kva mappe filene hamnar i.
4. STATUSKODEN LYG. Ei side kan svare 200 med eit innloggingsskjema. Ei mappe
   med innloggingsvegg blir ikkje ført opp.

Køyr:
    python3 scripts/finn-arkivmapper.py <rot-url> <institutt> > kilder.csv
    python3 scripts/finn-arkivmapper.py <rot-url> <institutt> --djupn 3
"""
import html
import re
import subprocess
import sys
import time
import urllib.parse

UA = ('Skolesaga-arkivhenter/1.0 (laerebok-prosjekt; '
      'kontakt: studenthjelp@gmail.com)')
PAUSE = 1.0
DOKUMENT = re.compile(r'\.(pdf|docx?|rtf|odt)(\?|/|$)', re.I)
# Eit eksamenssett kan ligge som HTML-side, ikkje fil (fallgruve 3). Slike
# mapper må reknast som «har innhald» sjølv om dei ikkje har éin PDF.
HTML_SETT = re.compile(r'/[A-Za-zÆØÅæøå]{2,10}\d{3,4}[-_][^/]*\.html?$')
INNLOGGING = re.compile(r'Logg inn med din UiO-konto|Weblogin|Feide', re.I)
# Mapper som aldri er emnearkiv, uansett kor dei dukkar opp.
STØY = re.compile(r'(/english/|/nn/|/personvern|/kontakt|/aktuelt|/om/|'
                  r'/undervisning/|/pensum/|/beskjeder/|/timeplan)', re.I)


def hent(url):
    """Berre curl. Skriptet les HTML, aldri binærfiler, og curl kjem gjennom
    TLS-oppsett som Pythons ssl-modul avviser (sjå last-ned-eksamener.py)."""
    r = subprocess.run(['curl', '-sSL', '--max-time', '45', '-A', UA, url],
                       capture_output=True)
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


def sider(url):
    """Mappesida og alle sidene bak pagineringa (fallgruve 1)."""
    ut, sett, u = [], set(), url
    for _ in range(40):
        if u in sett:
            break
        sett.add(u)
        s = hent(u)
        time.sleep(PAUSE)
        if not s or INNLOGGING.search(s[:20000]):
            break
        ut.append((u, s))
        neste = next((l for l in lenker(s, u)
                      if re.search(r'[?&]page=\d+', l) and l not in sett
                      and l.split('?')[0].rstrip('/') == url.split('?')[0].rstrip('/')),
                     None)
        if not neste:
            break
        u = neste
    return ut


def kode_av(mappenavn):
    """Gjett emnekode ut frå mappenamnet. Sjå fallgruve 3 — dette styrer berre
    kva mappe filene hamnar i, ikkje kva emne dei blir talde som."""
    n = urllib.parse.unquote(mappenavn).strip('/')
    # (?![A-Za-z0-9-]) og ikkje berre (?![A-Za-z0-9]): «ibs2240-og-ibs4240» er
    # to emne bundne saman med «og», og utan bindestreken i lookaheaden blir
    # koden «IBS2240-OG». EXFAC03-HARK/ endar på skråstrek og går fri.
    m = re.match(r'([A-Za-zÆØÅæøå]{2,10}\d{2,4})(-[A-Za-z]{2,5}(?![A-Za-z0-9-]))?', n)
    if not m:
        # Mapper utan emnekode i namnet finst («Semesteroppgaver på Ibsen»).
        # Dei skal ikkje bli til mappenamn med mellomrom og norske teikn.
        return re.sub(r'[^A-Za-z0-9]+', '-', n).strip('-').upper()[:40]
    return (m.group(1) + (m.group(2) or '')).upper()


def kryp(rot, djupn):
    """Bredde-først nedover frå rota. Returnerer mapper som har dokument."""
    funne = {}
    besøkt = set()
    kø = [(rot, 0)]
    while kø:
        url, niv = kø.pop(0)
        n = url.split('?')[0]
        if n in besøkt or niv > djupn:
            continue
        besøkt.add(n)
        s = sider(url)
        if not s:
            print('  kunne ikkje lese %s' % url, file=sys.stderr)
            continue
        dok = 0
        undermapper = set()
        for base, side in s:
            for l in lenker(side, base):
                if not l.startswith(rot) or STØY.search(l):
                    continue
                if DOKUMENT.search(l) or HTML_SETT.search(l):
                    dok += 1
                elif l.endswith('/') and l.split('?')[0] not in besøkt \
                        and l.rstrip('/') != url.rstrip('/'):
                    undermapper.add(l)
        if dok and url != rot:
            funne[url] = dok
        for u in sorted(undermapper):
            kø.append((u, niv + 1))
        print('  %-3d dok  %s' % (dok, url[len(rot):] or '/'), file=sys.stderr)
    return funne


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__.strip().splitlines()[-3].strip())
    rot = sys.argv[1]
    if not rot.endswith('/'):
        rot += '/'
    institutt = sys.argv[2]
    djupn = 2
    if '--djupn' in sys.argv:
        djupn = int(sys.argv[sys.argv.index('--djupn') + 1])

    print('Krypar %s (djupn %d)' % (rot, djupn), file=sys.stderr)
    funne = kryp(rot, djupn)
    print('kode,arkiv_url,institutt')
    for url in sorted(funne):
        kode = kode_av(url[len(rot):].rstrip('/').split('/')[-1])
        print('%s,%s,%s' % (kode, url, institutt))
    print('\n%d mapper med dokument' % len(funne), file=sys.stderr)


if __name__ == '__main__':
    main()
