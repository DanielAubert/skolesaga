#!/usr/bin/env python3
"""Skiller eksamensmateriale fra alt annet i UiA-mellomlageret.

## Hvorfor mellomlager

UiAs arkiverte dokumenter ligger alle under samme sti, `/content/download/
<id>/<id>/file/<navn>`, og stien sier ingenting om hva fila er. 2 301 filer
er bevart i Wayback. Bare 9 % har emnekode i filnavnet — resten heter
«Oppgave.pdf» — og blant dem ligger årsrapporter, handlingsplaner for
likestilling, en jurybegrunnelse for Eilert Sundt-prisen og en veiledning i
å installere Office 365.

Å hente dem rett inn i arkivet ville forurenset det med materiale som ikke
er eksamensmateriale i det hele tatt. De hentes derfor til et mellomlager,
leses, og bare det som ER eksamen flyttes inn.

## Hvordan et UiA-eksamenssett kjenner seg igjen

To generasjoner, og begge må dekkes:

**Inspera (2016–)** åpner med en tabell:
    ORG947 1 Karriereveiledning
    Oppgaver  Oppgavetype  Vurdering
    Emnekode: ORG947 · Sensurfrist · Starttid · Tillatte hjelpemidler

**Eldre sett** åpner med institusjonsbrevhodet:
    INSTITUTT FOR NORDISK OG MEDIEFAG
    E K S A M E N (bokmål)
    Emnekode: NO-159 · Emnenavn: Norsk for utlendinger

⚠ «Emnekode» ALENE holder ikke. Emneplaner og studieplaner har også en
emnekode, og de er ikke eksamenssett. Det kreves derfor et ord til fra
eksamenssituasjonen — hjelpemidler, sensurfrist, oppgavetype, eksamensdato.

⚠ «E K S A M E N» med mellomrom mellom bokstavene er ekte, og en regex uten
`\\s*` mellom dem finner den ikke.

Kjør:  python3 scripts/sorter-uia-mellomlager.py --tørr   (viser bare)
       python3 scripts/sorter-uia-mellomlager.py          (flytter)
       python3 scripts/sorter-uia-mellomlager.py --selvtest
"""
import csv
import os
import re
import shutil
import subprocess
import sys

MELLOM = os.environ.get('MELLOM') or os.path.expanduser(
    '~/Desktop/Eksamner/_MELLOMLAGER-uia')
ARKIV = os.environ.get('MAAL') or os.path.expanduser(
    '~/Desktop/Eksamner/_nedlastet-2026-07-30')
TØRR = '--tørr' in sys.argv or '--torr' in sys.argv

# Ord som bare finnes i en eksamenssituasjon. Ett av dem MÅ være til stede.
EKSAMENSORD = re.compile(
    r'(?i)(tillatte\s+hjelpemidler|hjelpemidler\s*:|sensurfrist'
    r'|oppgavetype|vurderingsform|eksamensdato|eksamenstid|varighet\s*:'
    r'|e\s*k\s*s\s*a\s*m\s*e\s*n(?![a-zæøå])|examination|sensorveiledning'
    r'|kandidaten\s+skal|oppgavesett|del\s*1\s+av\s*2)')
# Emnekode i teksten. Inspera skriver «Emnekode: ORG947», de eldre «Emnekode:
# NO-159». UiA bruker både med og uten bindestrek.
EMNEKODE_TEKST = re.compile(
    r'(?i)emnekode\s*:?\s*\n?\s*([A-ZÆØÅ]{2,6}[\s-]?\d{2,4})')
# ⚠ re.I. Uten den ble «org964 h16 oppgave.pdf» forkastet — et ekte
# eksamenssett fra UiA, med koden i filnavnet, i små bokstaver.
EMNEKODE_NAVN = re.compile(
    r'(?<![A-Za-z0-9])([A-ZÆØÅ]{2,6}[\s-]?\d{2,4})(?![0-9])', re.I)
# Ting som ser ut som eksamen på ordnivå, men aldri er det.
IKKE_EKSAMEN = re.compile(
    r'(?i)(årsrapport|handlingsplan|juryens\s+begrunnelse|studiekatalog'
    r'|course\s+catalogue|installer|nyhetsbrev|strategi\s+20\d\d'
    r'|protokoll\s+fra|innkalling\s+til|referat\s+fra'
    # Disse slapp gjennom i første tørrkjøring. «Vurderingsrapport» for
    # praksisperioden i lærerutdanninga inneholder ordet «vurderingsform» og
    # traff derfor eksamensordet — men en praksisvurdering er ikke et
    # eksamenssett. «PRUK_06_21_sluttrapport_VR360» ble dessuten tildelt
    # emnekoden «VR360», som ikke er et emne.
    r'|vurderingsrapport|sluttrapport|masterhåndbok|infobrosjyre'
    r'|emnebeskrivelse|course\s+description|application\s+form'
    r'|følgeskjema|søknadsskjema|praktisk\s+informasjon)')

# ⚠ ARKIVET BRUKER FORMEN UTEN SKILLETEGN. 3 709 mapper heter «BE401», to
# heter «BE-401». «ORG947» og «ORG-947» er samme emne, og uten normalisering
# fikk det to mapper — som gir to halve emner i telleverket i stedet for ett
# helt.
def normaliser(kode):
    return re.sub(r'[\s-]', '', kode).upper()

TEKSTVERKTØY = {'.pdf': None, '.txt': None, '.tex': None, '.md': None}
TEKSTUTIL = {'.doc', '.docx', '.odt', '.rtf', '.html', '.htm'}


def tekst_av(sti):
    e = os.path.splitext(sti)[1].lower()
    try:
        if e == '.pdf':
            return subprocess.run(['pdftotext', sti, '-'], capture_output=True,
                                  text=True, timeout=90).stdout
        if e in TEKSTUTIL:
            return subprocess.run(['textutil', '-convert', 'txt', '-stdout', sti],
                                  capture_output=True, text=True,
                                  timeout=90).stdout
        if e in TEKSTVERKTØY:
            return open(sti, encoding='utf-8', errors='replace').read()
    except Exception:
        return ''
    return ''


def vurder(tekst, filnavn):
    """→ (er_eksamen, emnekode, begrunnelse)

    ⚠ Rekkefølgen er ikke tilfeldig. Avvisningsordene sjekkes FØRST, fordi en
    årsrapport som nevner «eksamen» i en setning ellers ville sluppet inn på
    ett tilfeldig ord.
    """
    t = tekst[:6000]           # avgjørelsen tas på forsida, ikke i brødteksten
    if IKKE_EKSAMEN.search(t):
        return False, None, 'avvist: ' + IKKE_EKSAMEN.search(t).group(0)[:30]

    m_kode = EMNEKODE_TEKST.search(t)
    m_ord = EKSAMENSORD.search(t)

    if not t.strip():
        # Ingen tekst å lese. Da er filnavnet det eneste vi har, og det får
        # bare avgjøre når det BÅDE har en emnekode og et eksamensord.
        n = filnavn
        if EMNEKODE_NAVN.search(n) and re.search(
                r'(?i)(oppgave|eksamen|exam|sensor|kont|utsatt)', n):
            return True, normaliser(EMNEKODE_NAVN.search(n).group(1)), \
                'ingen tekstlag — godtatt på filnavn'
        return False, None, 'ingen tekstlag, filnavnet sier ingenting'

    if not m_ord:
        return False, None, 'ingen eksamensord'
    if not m_kode:
        m = EMNEKODE_NAVN.search(filnavn)
        if m:
            return True, normaliser(m.group(1)), \
                'kode fra filnavn: ' + m_ord.group(0)[:22]
        # ⚠ «Emnekode:» kan stå UTEN koden etter seg. UiAs eldre skjema har
        # etikettene i én kolonne og verdiene i en annen, og pdftotext leser
        # dem i feil rekkefølge: «EKSAMEN Emnekode: Emnenavn: ORG-964 Rektor».
        # Står etiketten der, er koden et sted i nærheten.
        if re.search(r'(?i)emnekode', t):
            m2 = EMNEKODE_NAVN.search(t)
            if m2:
                return True, normaliser(m2.group(1)), \
                    'kode fra kolonnesprik: ' + m_ord.group(0)[:18]
        return False, None, 'eksamensord, men ingen emnekode noe sted'
    return True, normaliser(m_kode.group(1)), m_ord.group(0)[:24]


def selvtest():
    saker = [
        ('ORG947 1 Karriereveiledning Oppgaver Oppgavetype Vurdering 1 '
         'Generell informasjon Emnekode: ORG947', 'ORG947 Oppgave.pdf',
         True, 'ORG947'),
        ('INSTITUTT FOR NORDISK OG MEDIEFAG E K S A M E N (bokmål) '
         'Emnekode: NO-159 Emnenavn: Norsk for utlendinger', 'NO-159.pdf',
         True, 'NO159'),
        ('Nettverk for profesjonsrettet forskning ved UiA (PRONETT) '
         'Årsrapport for 2019 INNHOLD FORORD', 'Aarsrapport PRONETT 2019.pdf',
         False, None),
        ('Juryens begrunnelse 2021 Innledende ord Juryen for utdeling av '
         'Eilert Sundt-prisen', 'Juryens begrunnelse ES-prisen 2021.pdf',
         False, None),
        ('1 UiA 2021-2024 Handlingsplan Likestilling, inkludering og mangfold',
         'Likestilling-2020-norsk.pdf', False, None),
        ('Installering av Office 365 til PC Innhold', 'Installer_Office365.pdf',
         False, None),
        # Emneplan: har emnekode, men ingen eksamenssituasjon.
        ('Emnekode: SV-135 Emnenavn: Metode Studiepoeng: 10 Læringsutbytte',
         'emneplan.pdf', False, None),
        # Uten tekstlag: filnavnet må ha BÅDE kode og eksamensord.
        ('', 'BE-410 Oppgave.pdf', True, 'BE410'),
        ('', 'NEOMA course catalogue 2022-23.pdf', False, None),
        # Kolonnesprik: koden står etter «Emnenavn:», ikke etter «Emnekode:».
        ('UNIVERSITETET I AGDER Bokmål EKSAMEN Emnekode: Emnenavn: ORG-964 '
         'Rektor kull Varighet: 4 timer', 'org964 h16 oppgave.pdf',
         True, 'ORG964'),
        # Praksisvurdering er ikke eksamen, selv om skjemaet sier
        # «Vurderingsform».
        ('Vurderingsrapport praksis Vurderingsform PRA106-1 GLU',
         'Vurderingsrapport_PRA106-1.doc', False, None),
        ('PRUK sluttrapport VR360 i partnerskap Vurderingsform',
         'PRUK_06_21_sluttrapport_VR360.pdf', False, None),
        # Samme emne, to skrivemåter → én mappe.
        ('Emnekode: ORG-947 Oppgavetype', 'a.pdf', True, 'ORG947'),
        ('Emnekode: ORG947 Oppgavetype', 'b.pdf', True, 'ORG947'),
    ]
    feil = 0
    for tekst, navn, vent_e, vent_k in saker:
        e, k, hvorfor = vurder(tekst, navn)
        ok = e == vent_e and (not vent_e or k == vent_k)
        feil += not ok
        print('%s  %-5s %-8s %-38s %s' % ('OK  ' if ok else 'FEIL', e, k or '-',
                                          navn[:38], hvorfor[:34]))
    print('\nselvtest: %d feil' % feil)
    return feil


def main():
    if '--selvtest' in sys.argv:
        sys.exit(1 if selvtest() else 0)
    if selvtest():
        sys.exit('SELVTESTEN FEILET — flytter ingenting.')
    print()

    kilder = {}
    mf = os.path.join(MELLOM, 'MANIFEST-uia-cdx.csv')
    if os.path.exists(mf):
        for r in csv.DictReader(open(mf, encoding='utf-8')):
            kilder[r['filnavn']] = r

    ut = os.path.join(ARKIV, 'MANIFEST-uia-sortert.csv')
    ny = not os.path.exists(ut)
    w = csv.writer(open(ut, 'a', newline='', encoding='utf-8'))
    if ny:
        w.writerow(['emnekode', 'larested', 'filnavn', 'type', 'bytes',
                    'kilde_url', 'arkiv_url', 'hentet', 'type_kilde',
                    'kildestatus'])

    n_inn = n_ut = 0
    grunner = {}
    for rot, _, filer in os.walk(MELLOM):
        for f in sorted(filer):
            if f.endswith('.csv'):
                continue
            sti = os.path.join(rot, f)
            e, kode, hvorfor = vurder(tekst_av(sti), f)
            if not e:
                n_ut += 1
                grunner[hvorfor.split(':')[0]] = grunner.get(
                    hvorfor.split(':')[0], 0) + 1
                continue
            n_inn += 1
            if TØRR:
                if n_inn <= 25:
                    print('  → %-10s %-46s %s' % (kode, f[:46], hvorfor[:28]))
                continue
            mappe = os.path.join(ARKIV, kode)
            os.makedirs(mappe, exist_ok=True)
            mål = os.path.join(mappe, f)
            if os.path.exists(mål):
                continue
            shutil.move(sti, mål)
            k = kilder.get(f, {})
            w.writerow([kode, 'UIA', f, '', os.path.getsize(mål),
                        k.get('kilde_url', ''), k.get('arkiv_url', ''),
                        k.get('hentet', ''), 'innhold-uia',
                        k.get('kildestatus', 'nedtatt-hentet-fra-wayback')])

    print('\n%d eksamensdokumenter%s · %d forkastet'
          % (n_inn, ' (TØRRKJØRING — ingenting flyttet)' if TØRR else
             ' flyttet inn i arkivet', n_ut))
    for g, n in sorted(grunner.items(), key=lambda x: -x[1]):
        print('   %5d  %s' % (n, g))
    if not TØRR:
        print('\nManifest: %s' % ut)
        print('Kjør deretter klassifiser-arkiv.py og sorter-arkiv.py.')


if __name__ == '__main__':
    main()
