#!/usr/bin/env python3
"""Laster ned åpent publiserte eksamenssett fra katalogen i eksamensjakt-*.json.

ALT havner under ~/Desktop/Eksamner/_nedlastet-<dato>/ — bevisst adskilt fra det
eksisterende arkivet, så det alltid er tydelig hva som kom når. Sammenslåing er
en egen, senere beslutning.

RETTSLIG: eksamensoppgaver og sensorveiledninger fra offentlige institusjoner er
frie etter åndsverkloven § 14. Skriptet henter kun fra institusjonenes egne åpne
sider — ingen innlogging, ingen studentdelte kopier.

HØFLIGHET: én forespørsel av gangen med pause mellom, og en User-Agent som sier
hvem vi er. Vi laster ned fra offentlige universiteter; de skal ikke merke oss.

FALLGRUVER (funnet 30. juli 2026, alle håndtert her):
  · STV1100 H2010–H2015/H2017/H2021 finnes BARE som HTML-sider med oppgaveteksten
    i brødteksten. En nedlaster som ser etter .pdf hopper over halve arkivet.
  · MØNA-emnene staves MONA i URL.
  · HIS1200-stien har «+» som må enkodes %2B.
  · Noen filnavn har dobbel endelse (…h24.pdf.pdf).
  · UiO har en skrivefeil i én sti: «tidligerer-» (SOS1004).

Kjør:  python3 scripts/last-ned-eksamener.py            # alt
       python3 scripts/last-ned-eksamener.py SVEXFAC03  # ett emne
       DRY=1 python3 scripts/last-ned-eksamener.py      # vis hva som ville skjedd
"""
import csv
import html
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import ssl
import subprocess
import urllib.request
from datetime import date

DATO = date.today().isoformat()
ROT = os.path.expanduser('~/Desktop/Eksamner')
MÅL = os.path.join(ROT, '_nedlastet-' + DATO)
KATALOG = os.path.join(os.path.dirname(__file__), '..',
                       'docs/hoyskole-boker/eksamensjakt-2026-07-30.json')
UA = 'Skolesaga-arkivhenter/1.0 (laerebok-prosjekt; kontakt: studenthjelp@gmail.com)'
PAUSE = 1.2          # sekunder mellom forespørsler
# ASCII-navn er primært: `TØRR=1` med norsk tegn settes IKKE av zsh/bash, og
# skriptet lastet ned da jeg trodde det tørrkjørte. DRY er det som virker.
TØRR = bool(os.environ.get('DRY') or os.environ.get('TORR') or os.environ.get('TØRR'))

DOKUMENT = re.compile(r'\.(pdf|docx?|rtf|odt)(\?|$)', re.I)
# Eksamenssett som ligger som HTML-side, ikke fil. Kjennetegn: emnekode + semester
# i filnavnet, f.eks. STV1100-2013H.html
HTML_SETT = re.compile(r'/[A-ZÆØÅ]{2,8}\d{3,4}[-_]?\d{4}[HVhv]?\.html?$')


def hent(url, binaer=False):
    """Hent en URL. Faller tilbake til curl ved TLS-trøbbel.

    wiki.math.ntnu.no avviser Pythons OpenSSL med «TLSV1_ALERT_PROTOCOL_VERSION»,
    mens systemets curl henter samme side med 200 uten videre. Å senke
    sikkerhetsnivået i Pythons ssl-kontekst hjalp ikke; curl bruker en annen
    TLS-stack som serveren aksepterer. Fallbacken er derfor curl, ikke en svekket
    Python-tilkobling — vi slår ikke av sertifikatvalidering for å komme rundt.
    """
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            data = r.read()
            return data if binaer else data.decode('utf-8', 'replace')
    except (ssl.SSLError, urllib.error.URLError) as e:
        if 'SSL' not in str(e) and 'TLS' not in str(e):
            raise
    r = subprocess.run(['curl', '-sSL', '--max-time', '45', '-A', UA, url],
                       capture_output=True)
    if r.returncode != 0:
        raise RuntimeError('curl feilet: %s' % r.stderr.decode('utf-8', 'replace')[:160])
    return r.stdout if binaer else r.stdout.decode('utf-8', 'replace')


def lenker(sidehtml, base):
    """Alle absolutte lenker på siden."""
    ut = []
    for m in re.finditer(r'href=["\']([^"\'#]+)', sidehtml):
        u = html.unescape(m.group(1))
        if u.startswith(('mailto:', 'javascript:', 'tel:')):
            continue
        ut.append(urllib.parse.urljoin(base, u))
    return ut


def trygt_navn(url):
    n = urllib.parse.unquote(url.rsplit('/', 1)[-1]) or 'index.html'
    n = re.sub(r'[^\w.\-æøåÆØÅ() ]', '_', n)
    # dobbel endelse: …h24.pdf.pdf → …h24.pdf
    n = re.sub(r'\.(pdf|docx?)\.\1$', r'.\1', n, flags=re.I)
    return n[:150]


def emner():
    d = json.load(open(KATALOG, encoding='utf-8'))
    ut = []
    for gruppe, v in d['kilder'].items():
        for e in v.get('emner', []):
            if e.get('funnet') and e.get('arkiv_url'):
                e['_gruppe'] = gruppe
                ut.append(e)
    return ut


def main():
    valgt = {a.upper() for a in sys.argv[1:]}
    liste = [e for e in emner() if not valgt or e['kode'].upper() in valgt]
    if not liste:
        sys.exit('Fant ingen emner å hente. Kjente koder: '
                 + ', '.join(sorted(e['kode'] for e in emner())))

    os.makedirs(MÅL, exist_ok=True)
    manifest = os.path.join(MÅL, 'MANIFEST.csv')
    ny_fil = not os.path.exists(manifest)
    mf = open(manifest, 'a', newline='', encoding='utf-8')
    w = csv.writer(mf)
    if ny_fil:
        w.writerow(['emnekode', 'larested', 'filnavn', 'type', 'bytes',
                    'kilde_url', 'arkiv_url', 'hentet'])

    print('Mål: %s' % MÅL)
    print('%d emner%s\n' % (len(liste), '  (TØRRKJØRING)' if TØRR else ''))
    tot_fil = tot_byte = 0

    for e in liste:
        kode = e['kode'].upper()
        mappe = os.path.join(MÅL, kode)
        print('── %s  (%s)' % (kode, e.get('arkiv_url', '')[:78]))
        try:
            side = hent(e['arkiv_url'])
        except Exception as ex:
            print('   KUNNE IKKE HENTE ARKIVSIDEN: %s' % ex)
            continue
        time.sleep(PAUSE)

        kandidater = []
        for u in lenker(side, e['arkiv_url']):
            if DOKUMENT.search(u):
                kandidater.append((u, 'dokument'))
            elif HTML_SETT.search(u):
                kandidater.append((u, 'html-sett'))
        # dedupliser, behold rekkefølge
        sett = set(); unike = []
        for u, t in kandidater:
            if u not in sett:
                sett.add(u); unike.append((u, t))

        if not unike:
            print('   ingen filer funnet på siden')
            continue
        print('   %d filer' % len(unike))
        if TØRR:
            for u, t in unike[:5]:
                print('      %-9s %s' % (t, trygt_navn(u)))
            if len(unike) > 5:
                print('      … og %d til' % (len(unike) - 5))
            continue

        os.makedirs(mappe, exist_ok=True)
        for u, t in unike:
            navn = trygt_navn(u)
            sti = os.path.join(mappe, navn)
            if os.path.exists(sti) and os.path.getsize(sti) > 0:
                continue
            try:
                data = hent(u, binaer=True)
            except Exception as ex:
                print('      FEIL %s: %s' % (navn, ex))
                continue
            if len(data) < 400:
                print('      HOPPET OVER %s (bare %d B — trolig feilside)' % (navn, len(data)))
                continue
            open(sti, 'wb').write(data)
            w.writerow([kode, e.get('institutt', ''), navn, t, len(data),
                        u, e.get('arkiv_url', ''), DATO])
            tot_fil += 1; tot_byte += len(data)
            time.sleep(PAUSE)
        mf.flush()

    mf.close()
    print('\n%d filer, %.1f MB' % (tot_fil, tot_byte / 1024 / 1024))
    if not TØRR:
        print('Manifest: %s' % manifest)


if __name__ == '__main__':
    main()
