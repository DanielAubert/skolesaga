#!/usr/bin/env python3
"""Henter eksamensmateriale fra arkiv institusjonene har tatt ned, via Wayback.

RETTSLIG: eksamensoppgaver og sensorveiledninger fra offentlige institusjoner.
At materialet er tatt ned endrer ikke dokumentets art, men HVER rad merkes med
kildestatus=nedtatt-hentet-fra-wayback, så det er mulig å finne igjen nøyaktig
dette materialet hvis noen vil vurdere det på nytt.

⚠ Ingenting herfra publiseres. Arkivet er kildemateriale for å skrive bøker.

HØFLIGHET: Internet Archive er en veldedig stiftelse. 2 sekunder mellom
forespørsler, og vi backer av ved 429/503 framfor å hamre.
"""
import csv
import hashlib
import json
import os
import re
import subprocess
import sys
import time
import urllib.parse
from datetime import date

MÅL = os.path.expanduser('~/Desktop/Eksamner/_nedlastet-2026-07-30')
# ⚠ IKKE HARDKODE DATOEN. `hentet` sto som '2026-07-30' i kildekoden, så da
# skriptet ble kjørt igjen natt til 31. juli, fikk 1 506 nye filer en dato de
# ikke var hentet på. Kolonnen finnes nettopp for å kunne se hva som kom når.
DATO = date.today().isoformat()
MANIFEST = os.path.join(MÅL, 'MANIFEST-wayback.csv')
UA = 'Skolesaga-arkivhenter/1.0 (laerebok-prosjekt; kontakt: studenthjelp@gmail.com)'
PAUSE = 2.0

SENSOR = re.compile(r'(?i)sensor[\s_.\-]*(veiledning|veil|rettleiing|guide)')
LØSNING = re.compile(r'(?i)(?<![a-z])(lf|losning|l\xf8sning|fasit|solution|answers?)')


def emnekode(url, standard):
    """Emnekoden ligger i STIEN hos euro.nhh.no: /sam/sam100/h2002/…

    Filnavnet har den sjelden. NHHs koder er tre bokstaver + tre siffer.
    """
    # 3-4 siffer: NHH bruker SAM100, OsloMet bruker ARK2100 og «RE 301».
    m = re.findall(r'(?i)/([a-z]{2,4})[\s_-]?(\d{3,4})(?:[/-]|\b)', url)
    if m:
        return (m[0][0] + m[0][1]).upper()
    m = re.search(r'(?i)([a-z]{2,4})[\s_-]?(\d{3,4})',
                  urllib.parse.unquote(url).split('/')[-1])
    return (m.group(1) + m.group(2)).upper() if m else standard


def trygt_navn(url):
    n = urllib.parse.unquote(urllib.parse.urlsplit(url).path).split('/')[-1]
    n = re.sub(r'[^\w.\-æøåÆØÅ() ]', '_', n)
    return n[:150] or 'ukjent.pdf'


def hent(url):
    """Wayback med id_-suffiks gir originalfila uten HTML-rammen rundt."""
    r = subprocess.run(['curl', '-sSL', '--max-time', '90', '-A', UA, url],
                       capture_output=True)
    return r.stdout if r.returncode == 0 else b''


def finn_type(navn, url):
    if SENSOR.search(navn) or SENSOR.search(url):
        return 'sensorveiledning'
    if LØSNING.search(navn):
        return 'losningsforslag'
    return 'oppgave'


def main():
    treff = json.load(open(sys.argv[1]))
    larested = sys.argv[2]
    standard = sys.argv[3] if len(sys.argv) > 3 else 'UKJENT'

    ny = not os.path.exists(MANIFEST)
    mf = open(MANIFEST, 'a', newline='', encoding='utf-8')
    w = csv.writer(mf)
    if ny:
        w.writerow(['emnekode', 'larested', 'filnavn', 'type', 'bytes',
                    'kilde_url', 'arkiv_url', 'hentet', 'type_kilde',
                    'kildestatus'])

    n_ny = n_hopp = n_feil = 0
    sett_md5 = {}
    for ts, url in treff:
        kode = emnekode(url, standard)
        mappe = os.path.join(MÅL, kode)
        navn = trygt_navn(url)
        sti = os.path.join(mappe, navn)
        if os.path.exists(sti) and os.path.getsize(sti) > 0:
            n_hopp += 1
            continue
        wb = 'https://web.archive.org/web/%sid_/%s' % (ts, url)
        data = hent(wb)
        time.sleep(PAUSE)
        if len(data) < 400:
            n_feil += 1
            print('   for liten (%d B): %s' % (len(data), navn[:60]))
            continue
        # ⚠ Wayback svarer ofte 200 med en HTML-feilside. Sjekk magien.
        if not (data[:5] == b'%PDF-' or data[:4] == b'\xd0\xcf\x11\xe0'
                or data[:2] == b'PK' or data[:5] == b'{\\rtf'):
            n_feil += 1
            print('   ikke dokument: %s' % navn[:60])
            continue
        h = hashlib.md5(data).hexdigest()
        if (kode, h) in sett_md5:
            n_hopp += 1
            continue
        sett_md5[(kode, h)] = navn
        os.makedirs(mappe, exist_ok=True)
        open(sti, 'wb').write(data)
        w.writerow([kode, larested, navn, finn_type(navn, url), len(data),
                    url, wb, DATO, 'filnavn',
                    'nedtatt-hentet-fra-wayback'])
        mf.flush()
        n_ny += 1
        if n_ny % 10 == 0:
            print('   %d nye …' % n_ny)
    mf.close()
    print('\n%s: %d nye, %d hoppet over, %d feilet' % (larested, n_ny, n_hopp, n_feil))


if __name__ == '__main__':
    main()
