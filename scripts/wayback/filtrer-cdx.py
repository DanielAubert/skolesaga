#!/usr/bin/env python3
"""Plukker eksamensdokumenter ut av en rå CDX-dump, og hopper over det vi har.

## Hvorfor filtrere lokalt

Wayback-CDX svarer 504 på filtre av formen `.*ord.*` — de kan ikke brukes til
å lete etter «eksamen» i stien. Og et forankret filter (`.*\\.pdf$`) er felle
6 i ARKIV-NESTE-STEG.md: målt på `ntnu.no/documents*` ga det **0 rader
forankret mot 20 000 uforankret**, fordi mange URL-er har spørrestreng eller
etterfølgende sti.

Løsningen er å hente HELE domenet med `matchType=domain` og filtrere her.
Én spørring, ingen forankring, ingen 504.

⚠ `matchType=domain`, ikke prefiks. Wayback kanoniserer bort `www.`, men ikke
andre underdomener. Målt på hibo.no: prefiks ga 273 PDF-er,
`matchType=domain` ga 1 487.

## Tre ting den luker ut

**Persondata.** Se BRUKSREGLER-ARKIV.md: `hinesna.no/eksamen/moduler/**/
RPT0001.HTM` er 211 sider med studentnummer og karakterer.

**Studentbesvarelser.** Studentens åndsverk, ikke institusjonens oppgave.

**Det vi alt har.** Uten dette laster en ny runde ned hele forrige runde på
nytt. Sammenlikningen skjer på kilde-URL fra manifestene, ikke på filnavn —
«Oppgave.pdf» finnes i hundrevis av emner.

Kjør:  python3 scripts/wayback/filtrer-cdx.py <cdx-fil> <ut.json> [--vis]
"""
import json
import os
import re
import sys
import urllib.parse

ARKIV = os.environ.get('MAAL') or os.path.expanduser(
    '~/Desktop/Eksamner/_nedlastet-2026-07-30')

DOKUMENT = re.compile(r'\.(pdf|docx?|rtf|odt|ps|tex)(\?|$)', re.I)
# HTML-sett er ekte — halve HVL-arkivet lå slik (felle 3). Men en HTML-side
# må ha et eksamensord i STIEN for å bli med; ellers drar vi inn hele nettstedet.
HTML = re.compile(r'\.html?(\?|$)', re.I)

EKSAMEN = re.compile(
    r'(?i)(eksam|exam|eksm|oppgav|opgav|oppgv|sensor|losning|løsning|fasit'
    # ⚠ «kont» ALENE er en felle: hia.no har «hel-kont.htm», «idr-kont.htm»,
    # «syk-kont.htm» — kontaktsider, ikke kontinuasjonseksamener.
    # Kontinuasjon skrives i praksis alltid med tall etter («kont01.pdf») eller
    # fullt ut.
    r'|solution|facit|kont(?=[-_ ]?\d)|kontinuasjon|konte(?![a-zæøå])'
    r'|prøve|prove|klausur|besvar'
    r'|tidligere[-_ ]?prøv|previous[-_ ]?exam|gamle[-_ ]?oppg)')

# ⚠ Samme stoppord som henterne. Et dokument som ser ut som eksamen i stien,
# men heter «resultater», er en karakterliste.
PERSONDATA = re.compile(
    r'(?i)(resultat|karakter|sensurliste|/rpt\d|kandidatliste|studentliste'
    r'|oppmelding|klagesak|navneliste|deltakerliste)')
BESVARELSE = re.compile(
    r'(?i)(?<![a-z])(besvarelse|besvarelser|kandidat)[\s_.\-]*\d*(?![a-z])')

# Materiale som ligger i eksamensmapper, men ikke er eksamensmateriale.
# Cormen kap. 30 og Bradley/Hax/Magnanti kap. 9 kom inn på denne måten før.
# ⚠ ADMINISTRASJON RUNDT EKSAMEN ER IKKE EKSAMEN. Første kjøring mot hia.no
# dro inn «Examination Regulations06.doc», «Særordn-engelsk-soknad.rtf»,
# «eksamenskonserter.htm» og «prisoppgave.htm» — alle med et eksamensord i
# stien, ingen av dem et oppgavesett.
ADMIN = re.compile(
    r'(?i)(regulation|regelverk|forskrift|reglement|retningslinj'
    r'|s[øo]knad|s[æa]rordn|tilrettelegg|utsatt[-_ ]?pr[øo]ving[-_ ]?s'
    r'|eksamensplan|eksamenskonsert|prisoppgave|eksamensdato|timeplan'
    r'|klage|fusk|kalender|p[åa]melding|oppmeld|semesteravgift'
    r'|kontakt|contact|adresse|ansatt|employee)')

TREDJEPART = re.compile(
    r'(?i)(chapter[-_ ]?\d|kapittel[-_ ]?\d|lecture|forelesning|slides?'
    r'|pensumkompendium|kompendium|laerebok|textbook|springer|elsevier)')


def kjente_url_er():
    """Kilde-URL-ene vi alt har lastet ned, fra alle manifestene."""
    sett = set()
    import csv
    import glob
    for f in glob.glob(os.path.join(ARKIV, 'MANIFEST*.csv')):
        try:
            for r in csv.DictReader(open(f, encoding='utf-8')):
                u = (r.get('kilde_url') or '').strip()
                if u:
                    sett.add(normaliser_url(u))
        except Exception:
            continue
    return sett


def normaliser_url(u):
    """Samme fil, ulik skrivemåte. Wayback-prefiks og port strippes."""
    u = re.sub(r'^https?://web\.archive\.org/web/\d+(?:id_|if_)?/', '', u)
    u = re.sub(r'^https?://', '', u)
    u = re.sub(r':80(?=/)', '', u)
    return urllib.parse.unquote(u).rstrip('/').lower()


def main():
    cdx, ut = sys.argv[1], sys.argv[2]
    vis = '--vis' in sys.argv
    kjent = kjente_url_er()
    print('%d kilde-URL-er kjent fra før' % len(kjent))

    tall = dict(rader=0, ikke200=0, ikke_dok=0, ikke_eksamen=0,
                persondata=0, besvarelse=0, tredjepart=0, admin=0,
                alt_hentet=0, ny=0)
    treff, sett = [], set()
    for linje in open(cdx, encoding='utf-8', errors='replace'):
        d = linje.split()
        if len(d) < 3:
            continue
        tall['rader'] += 1
        ts, url, kode = d[0], d[1], d[2]
        if kode != '200':
            tall['ikke200'] += 1
            continue
        klar = urllib.parse.unquote(url)
        er_dok, er_html = DOKUMENT.search(klar), HTML.search(klar)
        if not er_dok and not er_html:
            tall['ikke_dok'] += 1
            continue
        if not EKSAMEN.search(klar):
            tall['ikke_eksamen'] += 1
            continue
        if PERSONDATA.search(klar):
            tall['persondata'] += 1
            continue
        if BESVARELSE.search(klar):
            tall['besvarelse'] += 1
            continue
        if TREDJEPART.search(klar):
            tall['tredjepart'] += 1
            continue
        if ADMIN.search(klar):
            tall['admin'] += 1
            continue
        n = normaliser_url(url)
        if n in kjent:
            tall['alt_hentet'] += 1
            continue
        if n in sett:
            continue
        sett.add(n)
        treff.append([ts, url])
        tall['ny'] += 1

    json.dump(treff, open(ut, 'w'))
    print('\n%(rader)7d rader lest' % tall)
    for k, tekst in [
            ('ikke200', 'ikke status 200'),
            ('ikke_dok', 'ikke dokument eller HTML'),
            ('ikke_eksamen', 'ingen eksamensord i stien'),
            ('persondata', '⚠ mulige personopplysninger'),
            ('besvarelse', '⚠ studentbesvarelser'),
            ('tredjepart', 'tredjeparts materiale / forelesninger'),
            ('admin', 'administrasjon rundt eksamen (regelverk, planer)'),
            ('alt_hentet', 'ALT HENTET FØR')]:
        print('%7d  %s' % (tall[k], tekst))
    print('%7d  NYE → %s' % (tall['ny'], ut))
    if vis:
        for ts, u in treff[:40]:
            print('    ', urllib.parse.unquote(u)[:110])


if __name__ == '__main__':
    main()
