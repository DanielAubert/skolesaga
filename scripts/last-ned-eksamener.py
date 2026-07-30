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
  · Filnavn med MELLOMROM avvises av urllib — URL-en enkodes derfor først.
  · ⚠ MEN FELLEN GÅR BEGGE VEIER. Apache-indekser (UiB) har allerede %20 i
    href-ene sine. Enkoder man dem én gang til, blir %20 til %2520 og ALT med
    mellomrom svarer 404 — ni av tolv filer i én kjøring. Derfor står «%» i
    safe-lista under: det som alt er enkodet, skal stå i fred.

⚠ BEGRENSNING: skriptet leser ÉN arkivside. Det holder for UiO, men ikke for
NTNUs mattewiki, som sprer settene over mange undersider i samme namespace
(MA0001 har 73). Der trengs en krypende henter — se rapporten fra
mattewiki-agenten 30. juli 2026, som fikk 119 filer der dette skriptet fikk 0.

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

# ⚠ Endelsen kan stå MIDT i stien. NTNUs fysikkarkiv (Liferay) lenker slik:
#     /documents/10422/…/E_TFY4104_251202.pdf/<uuid>?t=1768815921571
# Et mønster som krever «.pdf» sist fant null filer der — 56 per emne, altså
# oppgave og løsningsforslag parvis for 28 eksamener.
DOKUMENT = re.compile(r'\.(pdf|docx?|rtf|odt)(\?|/|$)', re.I)
# Eksamenssett som ligger som HTML-side, ikke fil. Kjennetegn: emnekode + semester
# i filnavnet, f.eks. STV1100-2013H.html
# ⚠ Mønsteret krevde STORE bokstaver før 30. juli 2026. UiO skriver halvparten
# av sidene med små: STV1100-2010H.html ble hentet, stv1100-2015h.html ikke.
# Fire STV1100-sett, fem STV1200, fire INTER1000 og tre STV1400 lå usynlige.
HTML_SETT = re.compile(
    r'/[A-Za-zÆØÅæøå]{2,10}\d{3,4}[-_][^/]*\.html?$')
# Sider som matcher HTML_SETT, men aldri er eksamenssett.
IKKE_SETT = re.compile(r'(index\.html|/english/|personvern|kontakt|karakter|'
                       r'kalkulator|fusk|klage|tilrettelegging|sykdom|trekk|'
                       r'ny-eksamen|kildebruk)', re.I)
# Innloggingsvegg. Et par STV-sett er IKKE åpent publisert; sida svarer 200 med
# Weblogin-skjemaet. Slikt skal ikke i arkivet — se den rettslige rammen øverst.
INNLOGGING = re.compile(r'Logg inn med din UiO-konto|Weblogin', re.I)


def hent(url, binaer=False):
    """Hent en URL. Faller tilbake til curl ved TLS-trøbbel.

    ⚠ URL-en enkodes først: filnavn med MELLOMROM (`eksamen MA0001H2007.pdf`)
    avvises av urllib med en lite hjelpsom feil. Funnet 30. juli 2026 på NTNUs
    mattewiki, der flere eldre filer har mellomrom i navnet.

    wiki.math.ntnu.no avviser Pythons OpenSSL med «TLSV1_ALERT_PROTOCOL_VERSION»,
    mens systemets curl henter samme side med 200 uten videre. Å senke
    sikkerhetsnivået i Pythons ssl-kontekst hjalp ikke; curl bruker en annen
    TLS-stack som serveren aksepterer. Fallbacken er derfor curl, ikke en svekket
    Python-tilkobling — vi slår ikke av sertifikatvalidering for å komme rundt.
    """
    d = urllib.parse.urlsplit(url)
    url = urllib.parse.urlunsplit(
        (d.scheme, d.netloc, urllib.parse.quote(d.path, safe='/%:@'), d.query, ''))
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
    """Alle absolutte lenker på siden.

    ⚠ Filer som bare er lenket gjennom Microsofts nettviser
    (view.officeapps.live.com/op/view.aspx?src=<prosentkodet URL>.docx&wdOrigin=…)
    pakkes ut til den ekte URL-en. Endelsen står da midt i spørrestrengen med `&`
    etter, så DOKUMENT ser den ikke. STV1100 og STV1200 hadde én
    sensorveiledning hver som lå usynlig på denne måten.
    """
    ut = []
    for m in re.finditer(r'href=["\']([^"\'#]+)', sidehtml):
        u = html.unescape(m.group(1))
        if u.startswith(('mailto:', 'javascript:', 'tel:')):
            continue
        u = urllib.parse.urljoin(base, u)
        if 'officeapps.live.com' in u or 'docs.google.com/viewer' in u:
            q = urllib.parse.parse_qs(urllib.parse.urlparse(u).query)
            for v in (q.get('src') or q.get('url') or []):
                if re.search(r'\.(pdf|docx?|rtf|odt)', v, re.I):
                    ut.append(v)
            continue
        # DokuWiki (NTNUs mattewiki) serverer eldre vedlegg gjennom
        # lib/exe/fetch.php?media=<prosentkodet URL>. Uten utpakking blir
        # filnavnet «fetch.php» for alle sammen. Fire TMA4105-sett lå slik.
        if '/lib/exe/fetch.php' in u:
            q = urllib.parse.parse_qs(urllib.parse.urlparse(u).query)
            for v in q.get('media', []):
                if re.search(r'\.(pdf|docx?|rtf|odt)', v, re.I):
                    ut.append(v)
            continue
        ut.append(u)
    return ut


def alle_sider(rot):
    """Arkivsiden og alle sidene bak pagineringen.

    ⚠ UiOs mappelister (Vortex) viser bare de første ~20–25 oppføringene og
    legger resten bak «?page=2&u-page=2». Fram til 30. juli 2026 leste denne
    hentekoden bare side 1 — MAT1120 manglet 9 sett og NOR1300 18 av den grunn.
    """
    ut, sett, u = [], set(), rot
    for _ in range(40):
        if u in sett:
            break
        sett.add(u)
        try:
            s = hent(u)
        except Exception as ex:
            print('   KUNNE IKKE HENTE %s: %s' % (u, str(ex)[:90]))
            break
        time.sleep(PAUSE)
        ut.append((u, s))
        neste = None
        for l in lenker(s, u):
            if re.search(r'[?&]page=\d+', l) and l not in sett and \
                    l.split('?')[0].rstrip('/') == rot.split('?')[0].rstrip('/'):
                neste = l
                break
        if not neste:
            break
        u = neste
    return ut


def trygt_navn(url):
    # Ligger endelsen midt i stien, er det DET segmentet som er filnavnet —
    # siste segment er en UUID (se DOKUMENT-kommentaren).
    sti = urllib.parse.urlparse(url).path
    seg = [x for x in sti.split('/') if x]
    n = ''
    for x in seg:
        if re.search(r'\.(pdf|docx?|rtf|odt)$', x, re.I):
            n = x
    n = urllib.parse.unquote(n or (seg[-1] if seg else 'index.html'))
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
        # Koder som «PSY1300/PSYC1230» ville laget en NESTET mappe og lastet ned
        # alt på nytt ved siden av det som alt lå der. Skråstrek → understrek.
        kode = e['kode'].upper().replace('/', '_')
        mappe = os.path.join(MÅL, kode)
        print('── %s  (%s)' % (kode, e.get('arkiv_url', '')[:78]))
        sider = alle_sider(e['arkiv_url'])
        if not sider:
            continue
        if len(sider) > 1:
            print('   %d sider (paginert)' % len(sider))

        kandidater = []
        for base, side in sider:
            for u in lenker(side, base):
                if DOKUMENT.search(u):
                    kandidater.append((u, 'dokument'))
                elif HTML_SETT.search(u) and not IKKE_SETT.search(u):
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
            if t == 'html-sett' and INNLOGGING.search(
                    data[:20000].decode('utf-8', 'replace')):
                print('      HOPPET OVER %s (innloggingsvegg, ikke åpent '
                      'publisert)' % navn)
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
