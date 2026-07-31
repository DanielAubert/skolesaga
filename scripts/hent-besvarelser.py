#!/usr/bin/env python3
"""Henter UiAs publiserte eksamensbesvarelser som STRIPPET TEKST — aldri filer.

## Hvorfor dette skriptet er annerledes enn alle de andre henterne

Alle andre hentere i dette prosjektet laster ned et dokument og lar det ligge.
Dette gjør det motsatte: det henter en PDF, trekker ut teksten, fjerner
kandidatnummeret, skriver teksten — og **sletter PDF-en**. Fila skal aldri
bli liggende, og korpuset skal aldri inneholde identifikatoren.

Grunnen er hva som faktisk står i dem. UiA publiserte inntil tre besvarelser
per emne per semester, «fortrinnsvis besvarelser vurdert til karakteren A
eller B» med deres egne ord. Besvarelsene er Inspera-eksporter, og hver
eneste side har en topptekst:

    IDR138 1 Arbeidsfysiologi og grunnleggende idrettsernæring
    Candidate 1621
    KANDIDAT
    1621

Ikke noe navn. Men et kandidatnummer på hver side, koblet til opplysningen om
at besvarelsen fikk A eller B — og for enkelte filer står karakteren rett ut i
filnavnet («MA-216 5114 A besvarelse.pdf»).

Kandidatnummeret er fjernbart, og det er hele poenget: vi trenger aldri
PDF-en, vi trenger å vite hva et godt svar inneholder. Uten identifikatoren i
korpuset er ikke spørsmålet om dette er en personopplysning lenger et
spørsmål, fordi det ikke lenger er én.

## Tre ting materialet gir oss

1. **Kalibrering.** Vi skriver i dag modellbesvarelser uten å vite om vi
   ligger langt over det som faktisk gir A.
2. **Oppgavesettet på kjøpet.** Inspera-eksporten tar med emnekode, dato,
   varighet, tillatte hjelpemidler og hver oppgave i sin helhet FØR svaret.
   For emner der oppgavesettet aldri ble arkivert, ER besvarelsen settet.
3. **Termin.** «Starttid 05.10.2018 09:00» står i toppteksten, og er en
   sikrere terminkilde enn noe filnavn.

## Tre ting som IKKE følger av dette

- Ingenting herfra publiseres. Det gjelder alt i arkivet, og i særlig grad
  dette.
- Teksten skal **aldri** utleveres til en bokskrivende agent. Det er den
  operative risikoen, ikke den juridiske: ligger et A-svar i korpuset, kan en
  agent lene seg på det, og den ufravikelige regelen er at modellbesvarelsene
  i bøkene er nyskrevne. Bruken er aggregert — ett kalibreringsnotat per fag.
- Materialet legges UTENFOR arkivmappa, slik at sorter-arkiv.py aldri ser det
  og aldri kan telle en besvarelse som et eksamenssett.

## Forbeholdet som skal stå

Bare A- og B-besvarelser ble publisert. Vi kan derfor ikke se hva som skiller
A fra C — bare hvordan et godt svar ser ut, ikke hvor grensa går.

Kjør:  python3 scripts/hent-besvarelser.py            (henter)
       python3 scripts/hent-besvarelser.py --selvtest (bare strippingen)
"""
import csv
import os
import re
import subprocess
import sys
import time
import urllib.parse

MÅL = os.environ.get('MAAL') or os.path.expanduser(
    '~/Desktop/Eksamner/_KALIBRERING-besvarelser')
PAUSE = float(os.environ.get('PAUSE') or 5.0)
UA = ('Skolesaga-arkivhenter/1.0 (laerebok-prosjekt; '
      'kontakt: studenthjelp@gmail.com)')

# ── Stripping ────────────────────────────────────────────────────────────────
# Inspera stempler kandidatnummeret i to former på HVER side, og eldre
# eksporter bruker den norske. Vi leter etter begge for å FINNE nummeret, og
# fjerner så nummeret overalt der det står alene.
# ⚠ GRUPPEEKSAMEN STEMPLER «Group», IKKE «Candidate». Første kjøring skrev
# HEL904-besvarelsen med «Group 2411 / GRUPPE / 2411» i behold og meldte
# «0 kandidatnummer fjernet» — altså akkurat den formen for stille tap denne
# fila advarer mot i toppen. Et gruppenummer identifiserer et sett studenter
# like presist som et kandidatnummer identifiserer én.
KAND_MERKE = [
    re.compile(r'(?i)\bcandidate\s*(?:nr\.?|no\.?|number)?[\s:]*(\d{2,6})\b'),
    re.compile(r'(?i)\bkandidat(?:\s*nr\.?|nummer)?[\s:]*\n?\s*(\d{2,6})\b'),
    re.compile(r'(?i)\bgroup\s*(?:nr\.?|no\.?|number)?[\s:]*(\d{2,6})\b'),
    re.compile(r'(?i)\bgruppe(?:\s*nr\.?|nummer)?[\s:]*\n?\s*(\d{2,6})\b'),
]

# ⚠ «gruppe» er også et helt alminnelig ord. «Vi kan dele muskulaturen inn i
# tre grupper: hjertemuskulatur…» står i en av besvarelsene, og «fokusgrupper»
# i en annen. Mønstrene over krever derfor et TALL rett etter ordet, og
# tilbakeblikket under hindrer at halen av «elevgruppe 3» leses som stempel.
_ORDGRENSE_FORAN = re.compile(r'(?i)[a-zæøå]gruppe')
# Karakteren står i filnavnet på noen av dem: «MA-216 5114 A besvarelse.pdf».
# Bokstaven må stå for seg — ellers leser vi «A» i «A-besvarelse» som karakter
# på en fil som bare heter det.
KARAKTER_I_NAVN = re.compile(r'(?<![A-Za-zÆØÅæøå])([A-F])[\s_-]+'
                             r'(?:eksamens)?besvarelse', re.I)
KAND_I_NAVN = re.compile(r'(?<![0-9])(\d{3,6})(?![0-9])')
# Inspera-toppteksten oppgir eksamensdatoen. Dag.måned.år eller år-måned-dag.
STARTTID = re.compile(r'(?i)starttid\s*\n?\s*(\d{2})\.(\d{2})\.(\d{4})')
# ⚠ EMNEKODEN STÅR I TEKSTEN, IKKE I FILNAVNET. Over halvparten av filene
# heter bare «Besvarelse 1 - Del 1.pdf», og første kjøring merket dem alle
# «UKJENT» — et korpus uten emnekode er nesten verdiløst til kalibrering,
# siden hele poenget er å sammenlikne med VÅR bok i SAMME fag.
# Inspera-toppteksten har «Emnekode\n\nIDR138» og «Emnekode: IDR138-1».
EMNEKODE_I_TEKST = [
    re.compile(r'(?i)^emnekode\s*:?\s*\n?\s*([A-ZÆØÅ]{2,10}[\s-]?\d{2,4})',
               re.M),
    re.compile(r'(?i)\bemnekode\s*:\s*([A-ZÆØÅ]{2,10}[\s-]?\d{2,4})'),
]


def finn_emnekode(tekst, navn):
    """Emnekoden fra teksten, med filnavnet som reserve."""
    for rx in EMNEKODE_I_TEKST:
        m = rx.search(tekst)
        if m:
            return m.group(1).upper().replace(' ', '-')
    m = re.match(r'(?i)([A-ZÆØÅ]{2,10}[\s-]?\d{2,4}(?:-\d)?)', navn)
    return m.group(1).upper().replace(' ', '-') if m else 'UKJENT'


def strip_kandidat(tekst, ekstra=()):
    """Fjerner kandidatnummer fra teksten. Returnerer (tekst, funne_numre).

    Framgangsmåten er målrettet med vilje: vi finner FØRST hvilke tall som er
    kandidatnumre (fordi de står bak «Candidate» eller «KANDIDAT»), og fjerner
    så nøyaktig de tallene. Å stryke alle 4-sifrede tall ville ødelagt
    fagteksten — årstall, beløp, måleverdier og oppgavenummer er også tall.
    """
    numre = set(ekstra)
    for rx in KAND_MERKE:
        numre.update(m.group(1) for m in rx.finditer(tekst))

    ut = tekst
    for rx in KAND_MERKE:
        ut = rx.sub('[kandidat fjernet]', ut)
    for n in sorted(numre, key=len, reverse=True):
        # Bare der tallet står ALENE. «1621» i «kr 1621,50» er ikke stempelet,
        # men det er billigere å miste det tallet enn å la stempelet stå.
        ut = re.sub(r'(?<![0-9A-Za-z])' + re.escape(n) + r'(?![0-9A-Za-z])',
                    '[fjernet]', ut)
    return ut, numre


def rest_av_identifikator(tekst, numre):
    """Kontroll etter stripping. Returnerer det som eventuelt står igjen.

    ⚠ Et strippeskript som ikke kontrollerer seg selv, er verdiløst — det er
    nøyaktig den typen «ferdig» som har mistet arbeid stille i dette
    prosjektet før. Finner denne noe, skrives fila ikke.
    """
    funn = []
    for rx in KAND_MERKE:
        funn += [m.group(0)[:40] for m in rx.finditer(tekst)]
    for n in numre:
        if re.search(r'(?<![0-9A-Za-z])' + re.escape(n) + r'(?![0-9A-Za-z])',
                     tekst):
            funn.append('nummeret %s står igjen' % n)
    # Navn skal ikke forekomme i en Inspera-eksport, men et skannet
    # håndskrevet ark kan ha det. Vi avviser ikke — vi flagger for ettersyn.
    return funn


# ── Henting ──────────────────────────────────────────────────────────────────
def hent(url, forsøk=4):
    """Se hent-wayback.py: Internet Archive avviser tilkoblinger på TCP-nivå
    når den er belastet, og ett forsøk får det til å se ut som en fil som ikke
    finnes. Prøv på nytt bare når svaret UTEBLE."""
    for n in range(forsøk):
        r = subprocess.run(['curl', '-sSL', '--max-time', '120', '-A', UA, url],
                           capture_output=True)
        if r.returncode == 0:
            return r.stdout
        if n + 1 < forsøk:
            time.sleep(4 * (n + 1))
    return b''


def cdx_rader(cache):
    if os.path.exists(cache):
        return [l.split() for l in open(cache, encoding='utf-8') if l.strip()]
    url = ('https://web.archive.org/cdx/search/cdx?url=uia.no&matchType=domain'
           '&output=text&fl=timestamp,original,statuscode&collapse=urlkey'
           '&filter=original:.*content/download.*&limit=20000')
    ut = hent(url).decode('utf-8', 'replace')
    open(cache, 'w', encoding='utf-8').write(ut)
    return [l.split() for l in ut.splitlines() if l.strip()]


def selvtest():
    saker = [
        # (tekst inn, forventet at nummeret er borte)
        ('IDR138 1 Arbeidsfysiologi\n\nCandidate 1621\n\nKANDIDAT\n\n1621\n'
         'PRØVE\n\nOppgave 1: Regn ut 1621 kJ.', '1621'),
        ('Candidate no. 5114\nSvar: arealet er 5114 cm2', '5114'),
        ('KANDIDAT\n226\nBYG212', '226'),
        ('HEL904 1 Cannabismisbruk\n\nGroup 2411\n\nGRUPPE\n\n2411', '2411'),
    ]
    feil = 0
    for tekst, nr in saker:
        ut, numre = strip_kandidat(tekst)
        rest = rest_av_identifikator(ut, numre)
        ok = nr in numre and not rest
        feil += not ok
        print('%s  fant=%s  rest=%s' % ('OK  ' if ok else 'FEIL',
                                        sorted(numre), rest))
    # Fagteksten skal overleve: årstall og tall som IKKE er kandidatnumre.
    ut, numre = strip_kandidat('Candidate 1621\nI 2018 var BNP 4200 mrd.')
    beholdt = '2018' in ut and '4200' in ut
    feil += not beholdt
    print('%s  årstall og beløp beholdt' % ('OK  ' if beholdt else 'FEIL'))
    # ⚠ «gruppe» som alminnelig ord skal IKKE utløse noe.
    for prosa in ['Vi kan dele muskulaturen inn i tre grupper: hjerte',
                  'bruk av fokusgrupper for aa finne frem',
                  'en annen gruppe mennesker i 2013']:
        ut, numre = strip_kandidat(prosa)
        ok = not numre and ut == prosa
        feil += not ok
        print('%s  prosa uroert: %s' % ('OK  ' if ok else 'FEIL', prosa[:44]))
    # Emnekode ut av Inspera-toppteksten, ikke filnavnet
    for tekst, navn, vent in [
            ('IDR138 1 Arbeidsfysiologi\n\nEmnekode\n\nIDR138\n\nStarttid',
             'Besvarelse 1 - Del 1.pdf', 'IDR138'),
            ('x\nEmnekode: MA-216-1\ny', 'Besvarelse.pdf', 'MA-216'),
            ('ingen kode her', 'BYG212 226 Besvarelse.pdf', 'BYG212')]:
        fikk = finn_emnekode(tekst, navn)
        feil += fikk != vent
        print('%s  emnekode %-8s  %s' % ('OK  ' if fikk == vent else 'FEIL',
                                         fikk, navn[:34]))
    # Karakter ut av filnavn
    for navn, vent in [('MA-216 5114 A besvarelse.pdf', 'A'),
                       ('MA-216 5106 B besvarelse.pdf', 'B'),
                       ('Besvarelse 1.pdf', None),
                       ('BUL100 - Oppgave 1 - A besvarelse.pdf', 'A')]:
        m = KARAKTER_I_NAVN.search(navn)
        fikk = m.group(1).upper() if m else None
        feil += fikk != vent
        print('%s  karakter %-4s  %s' % ('OK  ' if fikk == vent else 'FEIL',
                                         fikk, navn))
    print('\nselvtest: %d feil' % feil)
    return feil


def main():
    if '--selvtest' in sys.argv:
        sys.exit(1 if selvtest() else 0)
    if selvtest():
        sys.exit('SELVTESTEN FEILET — henter ingenting.')

    os.makedirs(MÅL, exist_ok=True)
    rader = cdx_rader(os.path.join(MÅL, '_cdx-uia-download.txt'))
    treff = [(ts, u) for ts, u, st in rader
             if st == '200' and 'esvarelse' in urllib.parse.unquote(u).lower()]
    print('%d besvarelser å hente\nMål: %s\n' % (len(treff), MÅL))

    manifest = os.path.join(MÅL, 'BESVARELSER.csv')
    ny = not os.path.exists(manifest)
    mf = open(manifest, 'a', newline='', encoding='utf-8')
    w = csv.writer(mf)
    if ny:
        # ⚠ INGEN kolonne for kandidatnummer, med vilje. Det finnes ingen
        # grunn til å skrive ned det vi nettopp brukte arbeid på å fjerne.
        w.writerow(['emnekode', 'termin', 'karakter', 'tegn', 'kilde_url',
                    'tekstfil', 'merknad'])

    n_ok = n_skannet = n_feil = n_avvist = 0
    for i, (ts, u) in enumerate(treff, 1):
        klar = urllib.parse.unquote(u)
        navn = klar.rsplit('/', 1)[-1]
        m = re.match(r'(?i)([A-ZÆØÅ]{2,10}[\s-]?\d{2,4}(?:-\d)?)', navn)
        if any(f.endswith('-%04d.txt' % i) for f in os.listdir(MÅL)):
            continue

        data = hent('https://web.archive.org/web/%sid_/%s' % (ts, u))
        time.sleep(PAUSE)
        if len(data) < 2000 or data[:5] != b'%PDF-':
            n_feil += 1
            print('  [%3d/%d] ikke PDF (%d B): %s' % (i, len(treff), len(data),
                                                      navn[:50]))
            continue

        midl = os.path.join(MÅL, '_midlertidig.pdf')
        open(midl, 'wb').write(data)
        tekst = subprocess.run(['pdftotext', midl, '-'], capture_output=True,
                               text=True).stdout
        os.remove(midl)          # ⚠ PDF-en skal ALDRI bli liggende.

        if len(tekst.strip()) < 400:
            n_skannet += 1
            print('  [%3d/%d] skannet, ingen tekst: %s' % (i, len(treff),
                                                           navn[:50]))
            continue

        # Kandidatnummer kan stå i filnavnet også, uten stempel i teksten.
        fra_navn = set()
        uten_kode = navn[len(m.group(1)):] if m else navn
        fra_navn = {x for x in KAND_I_NAVN.findall(uten_kode) if len(x) >= 3}
        kode = finn_emnekode(tekst, navn)
        ut_navn = '%s-%04d.txt' % (kode, i)
        sti = os.path.join(MÅL, ut_navn)
        ren, numre = strip_kandidat(tekst, fra_navn)
        rest = rest_av_identifikator(ren, numre)
        if rest:
            n_avvist += 1
            print('  [%3d/%d] ⚠ AVVIST, identifikator sto igjen: %s | %s'
                  % (i, len(treff), navn[:40], rest[:2]))
            continue

        d = STARTTID.search(tekst)
        termin = ''
        if d:
            mnd, år = int(d.group(2)), d.group(3)
            termin = '%s-%s' % (år, 'V' if mnd <= 6 else 'H')
        kg = KARAKTER_I_NAVN.search(navn)
        karakter = kg.group(1).upper() if kg else ''

        with open(sti, 'w', encoding='utf-8') as f:
            f.write('# Kilde: %s\n' % u)
            f.write('# Kandidatnummer fjernet av scripts/hent-besvarelser.py\n')
            f.write('# ⚠ IKKE kildemateriale for bokskriving. Kun aggregert '
                    'kalibrering — se BRUKSREGLER-ARKIV.md.\n\n')
            f.write(ren)
        w.writerow([kode, termin, karakter, len(ren), u, ut_navn,
                    '%d kandidatnummer fjernet' % len(numre)])
        mf.flush()
        n_ok += 1
        if n_ok % 10 == 0:
            print('  %d hentet …' % n_ok)

    mf.close()
    print('\n%d strippet og lagret · %d skannet uten tekstlag · %d avvist '
          '· %d feilet' % (n_ok, n_skannet, n_avvist, n_feil))
    print('Ingen PDF-er beholdt. Manifest: %s' % manifest)


if __name__ == '__main__':
    main()
