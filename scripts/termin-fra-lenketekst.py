#!/usr/bin/env python3
"""Les emnekode og eksamenstermin ut av sjølve arkivsida, ikkje ut av filnamnet.

NTNUs institutt-arkiv (Liferay) er bygde slik:

    <p>SØK1011 Markeder og markedssvikt
       <a href="/documents/10449/0/1011.pdf/…">V21</a>
       <a href="/documents/10449/0/S%C3%98K1011+V24.pdf/…">V24</a> …

Emnekoden står i avsnittet, terminen er sjølve lenketeksten — og fila heiter
`1011.pdf`. Ein hentar som les filnamnet får korkje kode eller termin ut av
den. Per 31. juli 2026 sto **607 av 948** filer frå NTNUs econ-arkiv i
INDEKS.csv UTAN termin, samtidig som arkivsida oppgav terminen for kvar
einaste ei.

Det betyr noko fordi TERMINER.csv er grunnlaget for «N av M sett»-påstandane i
bøkene. Ei fil utan termin tel ikkje, uansett kor god ho er.

⚠ TERMINEN HERFRÅ ER SISTE UTVEG, IKKJE FØRSTE. Skriptet skriv terminen inn i
eit manifest, og sorter-arkiv.py brukar han berre når filnamnet og kjelde-URL-en
ikkje gjev nokon termin. Grunnen står i dataene: `SØK1011_V23_EXAM_RESIT.pdf`
er lenka opp under «H23» (kontinuasjonseksamen hausten etter). Begge er sanne,
og filnamnet er nærare dokumentet enn lenketeksten er.

⚠ AVSNITTET, IKKJE HEILE SIDA. Kodene blir plukka per <p>-blokk. Ei
sidevid «siste kode før denne lenka»-regel ville arva koden frå førre emne
inn i kvart avsnitt utan eiga overskrift.

Køyr:
    python3 scripts/termin-fra-lenketekst.py \\
        https://www.ntnu.no/econ/eksamensoppgaver "NTNU ISØ" \\
        --join MANIFEST-ntnu-institutt.csv --ut MANIFEST-ntnu-econ-terminer.csv

`--tabell` for arkiv der terminen står i ei KOLONNEOVERSKRIFT framfor i
lenketeksten (NTNU biologi og IKB).
"""
import csv
import html
import os
import re
import subprocess
import sys
import urllib.parse

ROT = os.path.expanduser('~/Desktop/Eksamner/_nedlastet-2026-07-30')
UA = ('Skolesaga-arkivhenter/1.0 (laerebok-prosjekt; '
      'kontakt: studenthjelp@gmail.com)')
DOKUMENT = re.compile(r'\.(pdf|docx?|rtf|odt)(\?|/|$)', re.I)
KODE = re.compile(r'(?<![A-Za-z0-9])([A-ZÆØÅ]{2,6}\s?\d{4})(?![0-9])')
# Lenketekst som ER ein termin, og ingenting anna: «V21», «H2016», «vår 20».
# NTNUs econ-arkiv er skrive slik — lenketeksten er berre terminen.
TERMIN = re.compile(
    r'(?i)^\s*(?:(v|h)\s*(\d{2}|\d{4})'
    r'|(vår|var|vor|høst|host|haust)\s*(\d{2}|\d{4}))\s*$')
# Termin INNI ein lenketekst. NTNUs psykologiarkiv skriv heile setninga i
# lenka: «PSY1110 PSYK4110 - Psykologiens historie … - Høst 25». Der er både
# emnekoden og terminen i teksten, og eit mønster som krev at lenketeksten
# berre er terminen, finn null av 322 filer.
# ⚠ Berre skrivne årstidsord her, ikkje «V21»-forma. Ein lausare regel på fri
# tekst plukkar opp «H2» frå ein emnetittel og lagar ein termin av han.
TERMIN_I_TEKST = re.compile(
    r'(?i)(?<![a-zæøå])(v[åa]r(?:en|semester|semesteret)?|h[øo]st(?:en|semester|semesteret)?'
    r'|haust(?:en)?|spring|autumn|fall)\s*(?:semester\s*)?(\d{2}|\d{4})(?![0-9])')
# Same sak, men motsett rekkjefølgje: «2017 - vår». NTNUs IKB skriv lenkene
# slik, og eit mønster som krev årstidsordet først finn null av 168 filer.
TERMIN_SNUDD = re.compile(
    r'(?i)(?<!\d)(\d{4})\s*[-–—\s]\s*(v[åa]r(?:en)?|h[øo]st(?:en)?|haust(?:en)?'
    r'|spring|autumn|fall)(?![a-zæøå])')


def curl(url):
    r = subprocess.run(['curl', '-sSL', '--max-time', '60', '-A', UA, url],
                       capture_output=True)
    return r.stdout.decode('utf-8', 'replace') if r.returncode == 0 else ''


def normaliser_termin(tekst):
    t = html.unescape(tekst).replace('\xa0', ' ')
    m = TERMIN.match(t)
    if m:
        if m.group(1):
            bokstav, år = m.group(1).upper(), m.group(2)
        else:
            ord_, år = m.group(3).lower(), m.group(4)
            bokstav = 'V' if ord_.startswith('v') else 'H'
    else:
        m = TERMIN_I_TEKST.search(t)
        if m:
            ord_, år = m.group(1).lower(), m.group(2)
        else:
            m = TERMIN_SNUDD.search(t)
            if not m:
                return ''
            år, ord_ = m.group(1), m.group(2).lower()
        bokstav = 'V' if ord_.startswith(('v', 's')) else 'H'
    år = int(år)
    if år < 100:
        # Tosifra år: arkiva startar på 1990-talet, så 95 er 1995 og 21 er 2021.
        år += 2000 if år < 90 else 1900
    return '%d%s' % (år, bokstav)


def les(url):
    """[(kode, termin, dok-url)] — eitt innslag per dokumentlenke med termin.

    To reglar, og begge er henta ut av kva som faktisk feila:

    · FØRSTE kode i blokka, ikkje den siste. Overskriftene lyder «SØK1000
      Innføring i samfunnsøkonomi - nedlagt emne, blitt til SØK1021 og
      SØK1022». Ein «nærast kode før lenka»-regel les då SØK1021, og 162 av
      844 filer fekk feil emne i første forsøket. Emnet blokka handlar om,
      står først; det som kjem etterpå, er merknader.

    · Blokker UTAN kode arvar koden frå førre blokk som hadde ein. Koden står
      ikkje alltid i same <p> som lenkene. Ein regel som krev kode i same
      blokk mista 335 av 1 005 lenker.
    """
    side = curl(url)
    if not side:
        sys.exit('kunne ikkje hente %s' % url)
    rein = html.unescape(side)

    ut = []
    gjeldande = ''
    for blokk in re.split(r'(?i)</?(?:p|li|h[1-6]|tr|div|table)\b[^>]*>', rein):
        # Koden blir leita etter i teksten UTANFOR taggar, så ein «SOK1000»
        # inne i eit filnamn i ein href ikkje blir lesen som ei overskrift.
        synleg = re.sub(r'<[^>]+>', ' ', blokk)
        funne = KODE.findall(synleg)
        if funne:
            gjeldande = funne[0].replace(' ', '').upper()
        for m in re.finditer(r'href=["\']([^"\'#]+)["\'][^>]*>(.*?)</a>',
                             blokk, re.S | re.I):
            u = urllib.parse.urljoin(url, m.group(1))
            if not DOKUMENT.search(u):
                continue
            lenketekst = re.sub(r'<[^>]+>', '', m.group(2))
            t = normaliser_termin(lenketekst)
            if not t:
                continue
            # Ber lenketeksten sjølv ein emnekode, er han meir presis enn
            # blokkens: psykologiarkivet har ei tabellrad per emne, og heile
            # tabellen er éin blokk.
            eigen = KODE.search(lenketekst)
            kode = eigen.group(1).replace(' ', '').upper() if eigen else gjeldande
            if kode:
                ut.append((kode, t, u))
    return ut


def les_tabell(url):
    """[(kode, termin, dok-url)] når terminen står i en TABELLKOLONNE.

    NTNUs biologi- og IKB-arkiv er bygd som ei rutenett-tabell:

        <thead><tr><th>Vår 2018</th><th>Høst 2018</th></tr></thead>
        <tbody><tr><td><a href="…">BI2012 Cellebiologi</a></td><td>…</td></tr>

    Terminen står altså verken i lenketeksten eller i filnamnet — han står i
    kolonneoverskrifta. `les()` finn null her, og 143 filer sto utan termin av
    den grunn.

    ⚠ KOLONNETELJINGA MÅ FØLGJE `colspan`. Ei rad med ei samanslegen celle
    forskyv alle cellene etter henne, og då hamnar hausteksamenar i
    vårkolonnen.
    """
    side = curl(url)
    if not side:
        sys.exit('kunne ikkje hente %s' % url)
    rein = html.unescape(side)
    ut = []
    for tab in re.findall(r'(?is)<table\b.*?</table>', rein):
        hovud = re.search(r'(?is)<thead\b.*?</thead>', tab)
        if not hovud:
            continue
        terminar = []
        for c in re.findall(r'(?is)<th\b[^>]*>(.*?)</th>', hovud.group(0)):
            terminar.append(normaliser_termin(re.sub(r'<[^>]+>', ' ', c)))
        if not any(terminar):
            continue
        for rad in re.findall(r'(?is)<tr\b.*?</tr>', tab.split('</thead>')[-1]):
            i = 0
            for c in re.finditer(r'(?is)<t[dh]\b([^>]*)>(.*?)</t[dh]>', rad):
                spenn = re.search(r'colspan\s*=\s*["\']?(\d+)', c.group(1), re.I)
                t = terminar[i] if i < len(terminar) else ''
                if t:
                    for lm in re.finditer(r'(?is)href=["\']([^"\'#]+)["\'][^>]*>(.*?)</a>',
                                          c.group(2)):
                        u = urllib.parse.urljoin(url, lm.group(1))
                        if not DOKUMENT.search(u):
                            continue
                        k = KODE.search(re.sub(r'<[^>]+>', '', lm.group(2)))
                        if k:
                            ut.append((k.group(1).replace(' ', '').upper(), t, u))
                i += int(spenn.group(1)) if spenn else 1
    return ut


def trygt_navn(url):
    """Same namngjeving som last-ned-eksamener.py — elles peikar radene på
    filer som ikkje finst. Endelsen kan stå MIDT i stien hos Liferay."""
    seg = [x for x in urllib.parse.urlparse(url).path.split('/') if x]
    n = ''
    for x in seg:
        if re.search(r'\.(pdf|docx?|rtf|odt)$', x, re.I):
            n = x
    n = urllib.parse.unquote(n or (seg[-1] if seg else 'index.html'))
    n = re.sub(r'[^\w.\-æøåÆØÅ() ]', '_', n)
    return re.sub(r'\.(pdf|docx?)\.\1$', r'.\1', n, flags=re.I)[:150]


def main():
    if len(sys.argv) < 3:
        sys.exit('bruk: termin-fra-lenketekst.py <arkiv-url> <larested> '
                 '[--join <manifest>] [--ut <manifest>]')
    url, larested = sys.argv[1], sys.argv[2]
    join = sys.argv[sys.argv.index('--join') + 1] if '--join' in sys.argv else ''
    ut_navn = (sys.argv[sys.argv.index('--ut') + 1] if '--ut' in sys.argv
               else 'MANIFEST-terminer.csv')

    funne = les_tabell(url) if '--tabell' in sys.argv else les(url)
    print('%d dokumentlenker med termin på sida' % len(funne))

    # Eksisterande filer: slå opp på kjelde-URL for å finne mappe og filnamn
    # slik dei FAKTISK ligg. Dei blei lasta ned av eit anna skript med eit
    # anna namngjevingsmønster («0_FIN3005 EN.pdf»), så namnet kan ikkje
    # reknast ut på nytt her.
    kjend = {}
    if join:
        with open(os.path.join(ROT, join), encoding='utf-8') as f:
            for r in csv.DictReader(f):
                if r.get('kilde_url'):
                    kjend[r['kilde_url']] = (r['emnekode'], r['filnavn'])

    rader, nye, enig, uenig = [], 0, 0, []
    for kode, termin, u in funne:
        if u in kjend:
            mappe, filnavn = kjend[u]
            # KONTROLL AV METODEN. For filer som alt er henta, veit vi kva
            # mappe dei ligg i — utleidd av eit heilt anna skript, frå
            # filnamnet. Er koden vi no les ut av sida ei anna, er «nærast
            # kode før lenka»-regelen feil, og då er terminen frå same regel
            # heller ikkje til å stole på. Talet skal stå i utskrifta.
            if kode == mappe.upper():
                enig += 1
            else:
                uenig.append((kode, mappe, filnavn))
        else:
            mappe, filnavn = kode, trygt_navn(u)
            nye += 1
        rader.append([mappe, larested, filnavn, '', '', u, url, '', '', '',
                      termin])

    sti = os.path.join(ROT, ut_navn)
    with open(sti, 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['emnekode', 'larested', 'filnavn', 'type', 'bytes',
                    'kilde_url', 'arkiv_url', 'hentet', 'type_kilde',
                    'kildestatus', 'termin'])
        w.writerows(rader)
    print('%d rader (%d peikar på filer som ikkje er henta enno)' % (len(rader), nye))
    if kjend:
        print('Kontroll mot %s: %d av %d kodar stemmer med mappa fila alt ligg i'
              % (join, enig, enig + len(uenig)))
        for kode, mappe, filnavn in uenig[:10]:
            print('   sida seier %-10s fila ligg i %-10s %s' % (kode, mappe, filnavn[:44]))
        if len(uenig) > 10:
            print('   … og %d til' % (len(uenig) - 10))
    print('Skreiv %s' % sti)


if __name__ == '__main__':
    main()
