#!/usr/bin/env python3
"""Sorterer det nedlastede eksamensarkivet til noe bøkene kan bygges på.

IKKE-DESTRUKTIVT. Skriptet flytter og omdøper ingenting. Det leser arkivet og
skriver tre oversikter ved siden av det:

    INDEKS.csv     én rad per fil: emnekode, termin, type, språk, md5, dubletter
    TERMINER.csv   én rad per (emne, termin): har vi oppgave? har vi fasit?
    _SORTERT.md    lesbart sammendrag per emne

Hvorfor termin og ikke fil? Fordi bøkenes «N av M sett»-påstander må bygge på
EKSAMENSTERMINER. Bokmål, nynorsk og engelsk er tre filer av samme eksamen;
TMA4110 har 201 filer og 68 terminer. En bok som teller filer bommer grovt.

FIRE FALLGRUVER, alle funnet i faktiske data 30. juli 2026:

1. FILNAVNET ER IKKE FILNAVNET. NTNUs mattewiki lagrer som
       fetch.php_tok_0441ac_media_http___www.math.ntnu.no_emner_TMA4110_eksamen_tma4115aug04.pdf
   der hele kilde-URL-en er flatet med «_». Å gjette hvor det ekte filnavnet
   begynner er umulig når filnavnet selv har understreker. Løsningen er å lese
   kilde_url fra MANIFEST*.csv — den dekker alle 196 slike filer.

2. ARKIVKODE ≠ EKSAMENSKODE. Filen over lå i TMA4110s arkiv, men ER en
   TMA4115-eksamen. Wikien krysslenker de to (samme fagslekt ved NTNU).
   Regelen: SISTE kodeforekomst i det ekte filnavnet er eksamenens kode.
   Uten den blander vi to emner i samme telling.

3. «\b» VIRKER IKKE mot koder mellom understreker — «_» er et ordtegn, så
   \bTMA4110\b matcher ikke «_TMA4110_». Kostet meg én runde med tall som var
   rent oppspinn. Bruk (?<![A-Za-z0-9]) i stedet.

4. LENGSTE ALTERNATIV FØRST i kode-regexen, ellers spiser MA\d{4} halen av
   TMA4110 og gir emnekoden «MA4110», som ikke finnes.

Kjør:  python3 scripts/sorter-arkiv.py
       python3 scripts/sorter-arkiv.py --selvtest
"""
import csv
import glob
import hashlib
import os
import re
import sys
import urllib.parse
from collections import defaultdict

ROT = os.path.expanduser('~/Desktop/Eksamner/_nedlastet-2026-07-30')

# Fallgruve 3 og 4: ingen \b, og lengste alternativ først.
# re.I fordi mattewikien skriver koden med små bokstaver i selve filnavnet
# («tma4115aug04.pdf») og med STORE i katalogstien. Tilbakeblikket
# (?<![A-Za-z0-9]) hindrer at «main2019» leses som emnekoden IN2019.
KODE = re.compile(
    r'(?<![A-Za-z0-9])'
    # EXFAC03-EAST, EXFAC03-NORD, EXFAC03-MUS … er EGNE emner, ikke EXFAC03.
    # Uten det valgfrie halet ble ti filer merket som «feil kode».
    r'(TMA\d{4}|TFY\d{4}|TDT\d{4}|EXPHIL\d{2}'
    r'|(?:SV|UV|TF)?EXFAC\d{2}(?:-[A-Za-z]{3,4})?'
    r'|MAT\d{3,4}|MEVIT\d{4}|SOSANT\d{4}|PSYC?\d{4}|STV\d{4}|SGO\d{4}'
    r'|LING\d{4}|NOR\d{4}|NFI\d{4}|JUR\d{4}|INTER\d{4}|SPED\d{4}|PED\d{4}'
    # SIF#### er NTNUs gamle emnekoder (SIF5017 = dagens TMA4135). De må
    # strykes som alle andre koder, ellers leses «SIF5017k03» som årstall 5017.
    r'|SIF\d{4}|JAP\d{4}|KIN\d{4}|ARA\d{4}|PER\d{4}|TYR\d{4}|MONA\d{4}'
    r'|ARK\d{4}|HIS\d{4}|FRA\d{4}|SOS\d{4}|KRIM\d{4}|BIOS\d{4}|MUS\d{4}'
    r'|STK\d{4}|ECON\d{4}|TFF\d{4}|JUS\d{4}'
    r'|MA\d{4}|ST\d{4}|FY\d{4}|IN\d{4}|KJM\d{4})'
    r'(?![0-9])', re.I)

MÅNED = {
    'januar': 1, 'jan': 1, 'februar': 2, 'feb': 2, 'mars': 3, 'mar': 3,
    'april': 4, 'apr': 4, 'mai': 5, 'may': 5, 'juni': 6, 'jun': 6,
    'juli': 7, 'jul': 7, 'august': 8, 'aug': 8, 'september': 9, 'sep': 9,
    'oktober': 10, 'okt': 10, 'oct': 10, 'november': 11, 'nov': 11,
    'desember': 12, 'des': 12, 'dec': 12,
    # Engelske former: arkivene har både «2004june» og «des07».
    'january': 1, 'february': 2, 'march': 3, 'june': 6, 'july': 7,
    'september': 9, 'october': 10, 'november': 11, 'december': 12,
}
# Lengste først, ellers matcher «des» før «desember» og etterlater «ember».
# Ingen ordgrense FORAN: måneden står ofte klistret til et prefiks («eksaug13»).
# Ordgrensen BAK er derimot nødvendig — uten den leses «des» i «design» og
# «mar» i «master» som måneder.
MÅNED_RX = r'(' + '|'.join(sorted(MÅNED, key=len, reverse=True)) + r')(?![a-z])'

# Kontinuasjonseksamen er en EGEN termin, ikke en variant av vår/høst. Den har
# egne oppgaver, og en bok som slår dem sammen med ordinær eksamen teller feil.
# «resit» og «deferred» er de engelske ordene for det samme. NTNU og UiO
# skriver dem i engelskspråklige filnavn — «SØK1011_V23_EXAM_RESIT_norsk.pdf»
# er kontinuasjonseksamenen høsten etter vårens ordinære, og uten ordet her
# ble den talt som en ANDRE fil på vårterminen framfor som en egen termin.
KONT = re.compile(r'(?i)(?<![a-z])(kont|konte|utsatt|sommer|summer|august|aug'
                  r'|resit|re-sit|deferred)(?![a-z])')

# ⚠ SENSORVEILEDNING OG LØSNINGSFORSLAG ER IKKE DET SAMME, juridisk.
# Prosjektets regler (docs/juridisk-kartlegging-losningsforslag.md, håndhevet
# 6. juli 2026 da 343 filer ble slettet fra storage):
#
#   · sensorveiledning fra offentlig institusjon  → LOV å hoste
#   · tredjeparts løsningsforslag                 → IKKE lov å hoste
#     (lov å lenke til eksternt, og lov å bruke som referanse lokalt)
#
# Ett samlebegrep «losning» skjuler nettopp den forskjellen. 3 307
# løsningsforslag sto som fritt institusjonsmateriale før dette skillet kom
# inn — samme kategori som de 343 som måtte slettes.
SENSORVEILEDNING = re.compile(
    r'(?i)sensor[\s_.\-]*(veiledning|veiledninger|rettleiing|rettleiingar'
    r'|veiled|guide|vegleiing)|sensurveiledning'
    r'|(?<![a-z])(vurderingskriterier|grading[\s_.\-]*guidelines?)(?![a-z])')
LØSNING = re.compile(
    r'(?i)(?<![a-z])(lf|losning|l\xf8sning|losningsforslag|l\xf8sningsforslag'
    r'|solution|solutions|sol|fasit|facit|answers?|corrige|corrig\xe9|sensur'
    r'|sensorveiledning|sensorrettleiing|sensorveiledninger|retningslinjer'
    r'|grading|guidelines|vurderingskriterier)')
PENSUM = re.compile(r'(?i)(?<![a-z])(pensum|syllabus|litteraturliste|formelsamling|formler)')

# ⚠ NTNUs fysikkarkiv koder typen som ÉN BOKSTAV foran: «E_TFY4165_181219.pdf»
# er eksamen, «L_TFY4165_181219.pdf» er løsningsforslag. Uten denne regelen ble
# alle 47 løsningsforslag i TFY4165 talt som oppgaver, og emnet sto med 0 %
# fasitdekning i indeksen — et tall som ville ført rett inn i bøkene.
# Gjelder alle elleve TFY-/FY-mappene.
LIFERAY_LF = re.compile(r'(?i)^l[-_]')
LIFERAY_OPPG = re.compile(r'(?i)^e[-_]')

# ⚠ NTNUs statistikkarkiv koder type OG språk som ÉN SLUTTBOKSTAV:
#     eksAug09l = løsning · b = bokmål · n = nynorsk · e = engelsk
# («eks14Aug08b» har også en dag foran måneden.) Fordelingen i arkivet er
# l 87, b 81, n 72, e 61 — altså et gjennomført skjema, ikke tilfeldigheter.
# Uten regelen ble alle 121 TMA4245-filene talt som oppgaver og emnet sto med
# 0 % fasit.
EKS_SUFFIKS = re.compile(r'(?i)^eks\d{0,2}[a-z]{3}\d{2,4}(?:[-_]\d)?([blne])(?![a-z])')
_SUFFIKS_SPRÅK = {'b': 'nb', 'n': 'nn', 'e': 'en'}

SPRÅK = [
    ('nn', re.compile(r'(?i)(?<![a-z])(nn|nynorsk|sjolvstudium|sj\xf8lvstudium|haust|rettleiing)(?![a-z])')),
    ('en', re.compile(r'(?i)(?<![a-z])(en|eng|english|engelsk|exam|spring|autumn)(?![a-z])')),
    ('nb', re.compile(r'(?i)(?<![a-z])(nb|no|nor|norsk|bokmal|bokm\xe5l|bokmaal)(?![a-z])')),
]


# Eldste sett i arkivet er fra 1990-tallet; ingenting kan være fra framtiden.
# ⚠ UTEN denne grensen ble emnekoder lest som årstall: JUR1590 ga «5590», og
# indeksen fikk 33 terminer med umulige år, den verste «9501». Et årstall som
# ikke kan stemme skal ikke bli en termin — da er det bedre å ha ingen.
ÅR_MIN, ÅR_MAX = 1980, 2027


def firesifret(å):
    """«07» → 2007, «96» → 1996, eller None om tallet ikke kan være et årstall."""
    å = int(å)
    if å <= 99:
        å = 1900 + å if å >= 90 else 2000 + å
    return å if ÅR_MIN <= å <= ÅR_MAX else None


def ekte_filnavn(mappe, filnavn, kilde_url):
    """Det virkelige filnavnet — se fallgruve 1.

    Mattewikiens `fetch.php_tok_…_media_<flatet URL>` gjør det umulig å skille
    understreker i katalognavn fra understreker i filnavnet. Kilde-URL-en har
    ekte skråstreker, så siste segment der er svaret.

    ⚠ FILNAVNET LIGGER I SPØRRESTRENGEN, ikke i stien. Mattewikien lenker slik:
        …/lib/exe/fetch.php?tok=013a47&media=http%3A%2F%2F…%2Ftma4110h13eng.pdf
    Å lese siste segment av PATH gir «fetch.php» for alle 196 filene — samme
    verdiløse navn på hver. Det ekte navnet er i `media`-parameteren, som selv
    er en prosentenkodet URL og må dekodes før den splittes.
    """
    if not kilde_url:
        return filnavn
    d = urllib.parse.urlsplit(kilde_url)
    kandidat = ''
    if d.query:
        q = urllib.parse.parse_qs(d.query)
        for nøkkel in ('media', 'file', 'f'):
            if q.get(nøkkel):
                kandidat = urllib.parse.urlsplit(q[nøkkel][0]).path
                break
    if not kandidat and filnavn.startswith('fetch.php'):
        kandidat = d.path
    if kandidat:
        seg = [s for s in urllib.parse.unquote(kandidat).split('/') if s]
        if seg:
            return seg[-1]
    return filnavn


# «lftma4110des10.pdf» — LF-prefikset er KLISTRET til emnekoden, så
# tilbakeblikket (?<![A-Za-z0-9]) ser «f» og avviser treffet. Vi skiller dem
# med understrek først. Prefikset må følges av emnekode-form (to-fem bokstaver
# og et siffer), ellers ville et ord som «lfelt» blitt kuttet.
LF_PREFIKS = re.compile(r'(?i)^(lf|lsf)(?=[a-z]{2,5}\d)')

# Samme problem, men midt i navnet: «eksamenma1301h06.pdf» og
# «sensorveiledningjus5590jur159024.pdf» har emnekoden klistret til et ord.
# Da ser tilbakeblikket en bokstav og avviser koden — og fordi koden ikke blir
# strøket, blokkerer sifrene i den også terminlesingen. Vi skyter inn en
# understrek foran kode-formede tokens. Kravet om fire sifre etter holder
# falske treff nede: et ord må ha både riktig prefiks OG et firesifret tall.
#
# ⚠ LENGSTE PREFIKS FØRST, ellers finner mønsteret «ma4115» inne i «tma4115»
# og deler ordet på feil sted — emnekoden ble «MA4115», som ikke finnes.
# Selvtesten fanget det på nitten saker.
GLIMT_KODE = re.compile(
    r'(?i)(?<=[a-z])(?=(?:' + '|'.join(sorted(
        ['TMA', 'TFY', 'TDT', 'MEVIT', 'SOSANT', 'PSYC', 'PSY', 'STV', 'SGO',
         'LING', 'MAT', 'NOR', 'NFI', 'JUR', 'JUS', 'INTER', 'SPED', 'PED',
         'SIF', 'KJM', 'JAP', 'KIN', 'ARA', 'PER', 'TYR', 'MONA', 'ARK',
         'HIS', 'FRA', 'SOS', 'KRIM', 'BIOS', 'MUS', 'STK', 'ECON', 'TFF',
         'MA', 'ST', 'FY', 'IN'], key=len, reverse=True))
    + r')\d{3,4}(?!\d))')


def normaliser(navn):
    """Skyter inn skille foran emnekoder som er klistret til et ord.

    ⚠ BARE når den strenge kode-regexen ikke finner noe. Kjørte den alltid,
    delte den «tma4115» i «t_ma4115» og fant emnekoden MA4115. Er koden
    allerede lesbar, skal navnet være i fred.
    """
    n = LF_PREFIKS.sub(r'\1_', navn)
    if not KODE.search(n):
        n = GLIMT_KODE.sub('_', n)
    return n


def finn_kode(navn, mappe):
    """Fallgruve 2: SISTE kode i navnet er eksamenens, ikke arkivets."""
    treff = KODE.findall(normaliser(navn))
    if treff:
        return treff[-1].upper()
    return mappe.upper()


def finn_termin(navn):
    """(år, sesong) der sesong er V, H eller K. (None, None) om ingenting finnes.

    Rekkefølgen er nøye: de mest spesifikke mønstrene først, ellers stjeler et
    løst firesifret årstall treffet fra «2019v».

    ⚠ EMNEKODEN STRYKES FØRST. «tma4110h13eng» er høst 2013, men sifrene i
    koden står rett foran «h», så et tilbakeblikk på (?<![a-z0-9]) blokkerte
    treffet. Selvtesten fanget det på fire filnavn. Koden er dessuten full av
    sifre som ligner årstall — TMA4110 inneholder «4110».
    """
    n = KODE.sub('_', normaliser(navn).lower())
    kont = bool(KONT.search(n))

    # Full dato: «lf-2012-12-13», «lf_ma1102_20140527_b». Må stå FØRST — ellers
    # leser mønsteret under «2014» som årstall og mister måneden, og en
    # kontinuasjonseksamen i august blir feilført som vår.
    # ⚠ Et mønster som treffer, men gir et umulig årstall, skal ikke stoppe
    # letingen — da mister vi terminen helt. Derfor `if å:` på hvert trinn og
    # videre til neste mønster, ikke `return` med det gale tallet.
    m = re.search(r'(?<!\d)(19[89]\d|20[0-3]\d)[\-_.]?(\d{2})[\-_.]?(\d{2})(?!\d)', n)
    if m and 1 <= int(m.group(2)) <= 12 and 1 <= int(m.group(3)) <= 31:
        å = firesifret(m.group(1))
        if å:
            return å, _sesong(int(m.group(2)), kont)

    # «2022h», «2013v», «2003_h», «2016hb» (h=høst, b=bokmål), «2005-hoest»
    # Halen etter sesongbokstaven er språkkode eller ordrest, ikke noe som
    # ugyldiggjør treffet — derfor bare (?![0-9]) og ikke (?![a-z0-9]).
    # «k» må med: «eksamen-2013k-no», «tma4100_2025k», «SIF501X-2001-k».
    # (?!\d{2}) i stedet for (?![0-9]) slik at «midtsem_2004h1» (høst, del 1)
    # treffer, men «h13» fortsatt overlates til sesong-først-mønsteret.
    # ⚠ finditer, IKKE search. Se forklaringen ved «h13»-mønsteret nedenfor:
    # et første treff med et umulig årstall skal ikke stoppe letingen etter
    # det neste treffet i SAMME navn.
    for m in re.finditer(r'(?<!\d)(\d{4})[\s_.\-]?(v|h|k)(?!\d{2})', n):
        å = firesifret(m.group(1))
        if å:
            s_ = 'K' if (kont or m.group(2) == 'k') else m.group(2).upper()
            return å, s_
    # «kont16», «kont2016» — hele ordet, ikke bare bokstaven.
    m = re.search(r'(?<![a-z])(kont|konte|utsatt)[\s_.\-]?(\d{2,4})(?![0-9])', n)
    if m:
        å = firesifret(m.group(2))
        if å:
            return å, 'K'

    # «des07», «juni14», «aug04», «mai1998», «eksAug13e», «eksNov17n»
    # ⚠ Måneden er ofte KLISTRET til et prefiks («eksaug13»), så et krav om
    # ordgrense foran den drepte treffet. Vi matcher månedsnavnene direkte i
    # stedet, med lengste først, og krever bare at det IKKE følger en bokstav —
    # det hindrer at «des» i «design» eller «mar» i «master» leses som måned.
    #
    # ⚠ MÅ STÅ FØR sesongbokstav-mønsteret. «eksNov17n» inneholder «v17», og da
    # sesongmønsteret gikk først leste det november som VÅR. Selvtesten fanget
    # det; måneden er det mer spesifikke mønsteret og har forrang.
    for m in re.finditer(MÅNED_RX, n):
        etter = re.match(r'[\s_.\-]?(\d{2,4})(?![0-9])', n[m.end():])
        if etter:
            å = firesifret(etter.group(1))
            if å:
                return å, _sesong(MÅNED[m.group(1)], kont)

    # Tosifret år FORAN sesongbokstaven: «TMA4135-04h», «TMA4135-05k».
    # ⚠ Dette må stå her, ikke lenger nede. Uten mønsteret ga filnavnet
    # ingenting, og URL-fallbacken hentet terminen fra KATALOGEN filen lå i —
    # «TMA4135-05k.pdf» lå på 2004h-sida og ble ført som 2004H. Filnavnet er
    # mer autoritativt enn mappa; kontinuasjonseksamener arkiveres ofte på
    # forrige semesters side.
    m = re.search(r'(?<!\d)(\d{2})[\s_.\-]?(v|h|k)(?![a-z0-9])', n)
    if m:
        å = firesifret(m.group(1))
        if å:
            s = 'K' if (kont or m.group(2) == 'k') else m.group(2).upper()
            return å, s

    # «2004june» — årstallet står FØR måneden. Alle mønstrene over har
    # måneden først, så dette falt mellom dem.
    for m in re.finditer(r'(?<!\d)(19[89]\d|20[0-3]\d)[\s_.\-]?' + MÅNED_RX, n):
        å = firesifret(m.group(1))
        if å and m.group(2) in MÅNED:
            return å, _sesong(MÅNED[m.group(2)], kont)

    # «h13», «v18», «v2013», «k19» (k = kontinuasjon), «eksamh2012»
    #
    # ⚠ finditer, IKKE search — og det er ikke kosmetikk. `re.search` gir bare
    # DET FØRSTE treffet, og faller årstallet der utenfor 1980–2027, gikk koden
    # videre til neste MØNSTER framfor til neste TREFF i samme navn.
    # «0_Sensorveiledning SØK1000 V2024.pdf»: emnekoden SØK1000 står ikke i
    # KODE-regexen, så «k1000» ble lest som «kont år 1000», forkastet som
    # umulig — og «v2024» lenger ute i navnet ble aldri prøvd. Fila endte med
    # år 2024 og INGEN sesong, og festet seg dermed ikke til terminen 2024V.
    # For sensorveiledninger er det direkte synlig i TERMINER.csv: terminen sto
    # med «har_fasit = nei» selv om fasiten lå i mappa.
    for m in re.finditer(r'(?<![0-9])(v|h|k)[\s_.\-]?(\d{2,4})(?![0-9])', n):
        å = firesifret(m.group(2))
        if å:
            return å, ('K' if (kont or m.group(1) == 'k') else m.group(1).upper())
    for m in re.finditer(r'(\d{1,2})[\s_.\-]?([a-z]{3,9})[\s_.\-]?(\d{2,4})(?![0-9])', n):
        if m.group(2) in MÅNED:
            å = firesifret(m.group(3))
            if å:
                return å, _sesong(MÅNED[m.group(2)], kont)

    # «vår 2019», «host_2019», «haust2018»
    m = re.search(r'(?<![a-z])(v\xe5ren|varen|vaaren|v\xe5r|var|vaar|spring'
                  r'|h\xf8sten|hosten|hausten|h\xf8st|host|haust|autumn|fall)'
                  r'[\s_.\-]*(\d{2,4})(?![0-9])', n)
    if m:
        s = 'V' if m.group(1).startswith(('v', 'sp')) else 'H'
        å = firesifret(m.group(2))
        if å:
            return å, ('K' if kont else s)
    m = re.search(r'(?<!\d)(\d{4})[\s_.\-]*(v\xe5r|var|vaar|spring|h\xf8st|host|haust)', n)
    if m:
        s = 'V' if m.group(2) in ('v\xe5r', 'var', 'vaar', 'spring') else 'H'
        å = firesifret(m.group(1))
        if å:
            return å, ('K' if kont else s)

    # NTNU Liferay: E_TFY4165_181219 = YYMMDD
    m = re.search(r'(?<!\d)(\d{2})(\d{2})(\d{2})(?!\d)', n)
    if m and 1 <= int(m.group(2)) <= 12 and 1 <= int(m.group(3)) <= 31:
        å = firesifret(m.group(1))
        if å:
            return å, _sesong(int(m.group(2)), kont)

    # bart årstall
    m = re.search(r'(?<!\d)(19[89]\d|20[0-3]\d)(?!\d)', n)
    if m:
        return int(m.group(1)), ('K' if kont else None)
    return None, ('K' if kont else None)


def _sesong(mnd, kont):
    if kont or mnd in (7, 8):
        return 'K'
    return 'V' if mnd <= 6 else 'H'


def finn_type(navn):
    if PENSUM.search(navn):
        return 'pensum'
    # Sensorveiledning FØRST: den er lov å hoste, løsningsforslag er det ikke.
    if SENSORVEILEDNING.search(navn):
        return 'sensorveiledning'
    m = EKS_SUFFIKS.match(navn)
    if m:
        return 'losningsforslag' if m.group(1).lower() == 'l' else 'oppgave'
    if LIFERAY_LF.match(navn):
        return 'losningsforslag'
    if LIFERAY_OPPG.match(navn):
        return 'oppgave'
    if LØSNING.search(navn):
        return 'losningsforslag'
    return 'oppgave'


def finn_sprak(navn):
    m = EKS_SUFFIKS.match(navn)
    if m and m.group(1).lower() in _SUFFIKS_SPRÅK:
        return _SUFFIKS_SPRÅK[m.group(1).lower()]
    for kode, rx in SPRÅK:
        if rx.search(navn):
            return kode
    return ''


# ── Bruksklasse ──────────────────────────────────────────────────────────
# Hva vi HAR lov til å gjøre med filen, ikke hva den inneholder. Regelen må
# følge dataene: et notat i en README blir ikke lest når boka faktisk skrives.
#
# ⚠ INGENTING I ARKIVET PUBLISERES. Produkteier har bestemt at hverken
# eksamensoppgaver, sensorveiledninger eller løsningsforslag deles på
# skolesaga.no. Arkivet er kildemateriale for å SKRIVE bøker, ikke innhold
# som skal serveres. Kolonnen `deles_pa_nett` er derfor `nei` for alt.
#
# `juridisk_status` sier hva vi LOVLIG kunne gjort, ikke hva vi gjør:
#   kan-hostes-lovlig — eksamensoppgave eller sensorveiledning fra en
#       offentlig institusjons EGET arkiv
#   kan-ikke-hostes   — tredjeparts løsningsforslag, materiale fra ansattes
#       personlige kataloger, pensum/temanotater, lærebokstoff
#
# Hvorfor beholde et skille vi ikke bruker? Fordi produktvalget kan endres,
# og da skal ingen måtte klassifisere 15 000 filer på nytt.
#
# To ting havner i «internt-referanse»:
#  1. Materiale fra ansattes PERSONLIGE sider (folk.*). Selve eksamensoppgaven
#     er fortsatt en offentlig eksamensoppgave, men et løsningsforslag skrevet
#     av foreleseren selv er vedkommendes åndsverk, og en personlig side er
#     ikke institusjonens forpliktende publisering.
#  2. Pensumlister, formelsamlinger og temanotater — undervisningsmateriell,
#     ikke eksamensoppgaver. § 14 dekker dem ikke.
#
# ⚠ Uansett klasse: bøkenes modellbesvarelser er NYSKREVNE. Vi gjengir aldri
# et løsningsforslag ordrett. Klassen styrer hvor forsiktige vi må være, ikke
# om vi kan kopiere.
# ⚠ «folk» kan stå hvor som helst i vertsnavnet. Mønsteret krevde først
# folk.<ett ord>.no, og slapp da gjennom `folk.idi.ntnu.no` — 13 TDT4125-filer
# fra en personlig side ble klassifisert som institusjonsarkiv. Nok en variant:
# `www.idi.ntnu.no/~alfw/` ligger på en INSTITUSJONELL vert, så vertsnavnet
# alene er ikke nok — det er `/~` i stien som avslører den.
PERSONLIG_VERT = re.compile(r'(?i)(^|\.)folk\.')
# Mapper der ALT stammer fra en personlig side, også når manifestraden mangler.
PERSONLIG_MAPPE = {'PROG1001', 'PROG1003'}

# ⚠ UNDERMAPPENAVNET SIER HVA FILEN ER. Nedlasterne har lagt undervisnings-
# materiell i egne undermapper — «forelesningsnotater», «ovinger-og-losninger»,
# «wiki-vedlegg». Det er ikke eksamenssett og skal ikke telles som terminer,
# uansett hva filnavnet sier.
#
# ⚠ IKKE «wiki-vedlegg»/«wiki-sider». Jeg tok dem med først, og feilmerket da
# 43 EKTE TDT4100-eksamener som internt materiale — Confluence-eksporterte
# `.doc`-filer med både oppgavetekst og løsningsforslag. Et vedlegg på en wiki
# er ikke undervisningsmateriell i seg selv; det avhenger av hva vedlegget ER.
# Bare mapper som SIER at innholdet er undervisningsstoff, teller her.
UNDERMAPPE_INTERN = re.compile(
    r'(?i)(forelesning|ovinger|\xf8vinger|notat|slides|pensum)')


# ⚠ «~brukernavn» i STIEN er samme gråsone som folk.*-vertene, bare på et
# annet sted i URL-en: `ux.uis.no/~bruker/`, `arken.nmbu.no/~eiriro/`,
# `cs.oslomet.no/~bruker/`. Det er institusjonens egen server, men en ansatts
# personlige katalog — ikke instituttets forpliktende arkiv. Halvparten av
# materialet fra UiS, UiA, NMBU og HVL ligger slik.
PERSONLIG_STI = re.compile(r'/~[A-Za-z0-9._-]+/')


def juridisk_status(mappe, kilde_url, typ, undermappe=''):
    if typ in ('pensum', 'temanotat'):
        return 'kan-ikke-hostes'
    # ⚠ DENNE FUNKSJONEN SIER HVA SOM ER LOVLIG, IKKE HVA VI GJØR.
    # At ingenting deles på nett, står i kolonnen `deles_pa_nett`. Blander
    # man de to, blir den juridiske vurderingen verdiløs — og den er nettopp
    # det som trengs den dagen produktvalget endres.
    #
    # Tredjeparts løsningsforslag kan ikke hostes uansett hvor åpent de lå.
    # Det er en dokumenttypevurdering, ikke en kildevurdering, og det er
    # regelen prosjektet håndhevet da 343 slike ble slettet 6. juli 2026.
    # Sensorveiledninger fra offentlige institusjoner er derimot lovlige.
    if typ == 'losningsforslag':
        return 'kan-ikke-hostes'
    if undermappe and UNDERMAPPE_INTERN.search(undermappe):
        return 'kan-ikke-hostes'
    if mappe.upper() in PERSONLIG_MAPPE:
        return 'kan-ikke-hostes'
    if kilde_url:
        d = urllib.parse.urlsplit(kilde_url)
        if PERSONLIG_VERT.search(d.netloc) or PERSONLIG_STI.search(d.path):
            return 'kan-ikke-hostes'
        return 'kan-hostes-lovlig'
    # ⚠ INGEN KILDE-URL = INGEN SIKKER KLASSIFISERING. 43 % av filene mangler
    # manifestrad, og for dem VET vi ikke om kilden var et instituttarkiv eller
    # en ansatts personlige katalog. «apen-institusjonell» er standardvalget
    # fordi de fleste arkivene er institusjonelle — men det er en ANTAKELSE, og
    # den skal stå i dataene. Se kolonnen status_sikkerhet.
    return 'kan-hostes-lovlig'


def status_sikkerhet(kilde_url, mappe, typ, undermappe=''):
    """«sikker» når noe faktisk avgjorde klassen, «antatt» når vi bare falt tilbake."""
    if typ in ('pensum', 'temanotat'):
        return 'sikker'
    if undermappe and UNDERMAPPE_INTERN.search(undermappe):
        return 'sikker'
    if mappe.upper() in PERSONLIG_MAPPE:
        return 'sikker'
    return 'sikker' if kilde_url else 'antatt'


def md5(sti):
    h = hashlib.md5()
    with open(sti, 'rb') as f:
        for blokk in iter(lambda: f.read(1 << 20), b''):
            h.update(blokk)
    return h.hexdigest()


# Typer i manifestene som er VERIFISERT mot PDF-teksten, ikke gjettet fra
# filnavnet. Mattewiki-jobben kjørte pdftotext på førstesidene av alle 1 938
# filer og omklassifiserte 49 av dem. Filnavn lyver i BEGGE retninger:
# «MA1201/2007h.pdf» ER et løsningsforslag, «MidtSem_UtenFasit15.pdf» er det
# ikke. En slik verifisert type skal alltid slå vår egen navnegjetting.
MANIFEST_TYPE = {
    'losningsforslag': 'losningsforslag',
    'l\xf8sningsforslag': 'losningsforslag',
    'sensorveiledning': 'sensorveiledning',
    'oppgave': 'oppgave',
    'temanotat': 'temanotat',   # forelesningsstoff — teller ikke som eksamenssett
}


# ⚠ ET MANIFEST SOM OPPGIR EN TYPE, SIER IKKE DERMED HVORDAN DEN VET DET.
# Manifestet for de andre lærestedene har 1 363 innholdsverifiserte rader og
# 938 som bare er utledet av filnavnet (534 ikke-PDF, 404 skannede PDF-er uten
# tekstlag). Behandler vi alle likt, påstår indeksen at 938 filer er verifisert
# når de ikke er det — nøyaktig den feilklassen vi har brukt kvelden på å luke
# ut. Kolonnen `type_kilde` avgjør; mangler den, sier vi «uspesifisert» framfor
# å anta det beste.
#
# Unntaket er mattewiki-manifestet: rapporten derfra sier eksplisitt at ALLE
# 1 938 filene ble klassifisert på nytt med pdftotext på førstesidene, og at 49
# skiftet kategori. Det er dokumentert, derfor oppført her.
INNHOLDSVERIFISERTE_MANIFEST = {'MANIFEST-mattewiki.csv'}


def manifest():
    """(kode, filnavn) → (kilde_url, type, type_kilde, kildestatus, termin).

    `kildestatus` er tomt for alt som ligger åpent hos institusjonen i dag, og
    «nedtatt-hentet-fra-wayback» for materiale institusjonen har fjernet.
    Dokumentets art endres ikke av at det er tatt ned, men opphavet skal være
    synlig — dette er materiale noen kan ville vurdere på nytt.
    """
    m = {}
    for f in glob.glob(os.path.join(ROT, 'MANIFEST*.csv')):
        base = os.path.basename(f)
        with open(f, encoding='utf-8') as fh:
            for r in csv.DictReader(fh):
                nøkkel = (r['emnekode'].upper(), r['filnavn'])
                typ = MANIFEST_TYPE.get((r.get('type') or '').strip().lower(), '')
                url = r.get('kilde_url', '')
                kolonne = (r.get('type_kilde') or '').strip().lower()
                if kolonne == 'innhold':
                    kilde = 'pdf-verifisert'
                elif kolonne == 'filnavn':
                    kilde = 'manifest-filnavn'
                elif base in INNHOLDSVERIFISERTE_MANIFEST:
                    kilde = 'pdf-verifisert'
                else:
                    kilde = 'manifest-uspesifisert'
                # Flere manifester dekker samme fil. Behold den raden som
                # faktisk bærer informasjon framfor å la den siste vinne.
                #
                # ⚠ OG LA IKKE FILSYSTEMET AVGJØRE HVA SOM ER SANT. Fram til
                # 31. juli 2026 vant den SISTE raden med en type, og
                # rekkefølgen kom fra glob() — altså katalogrekkefølgen på
                # disk. Da klassifiser-arkiv.py la til et manifest med typer
                # lest ut av PDF-teksten, ville en navnegjetting i et annet
                # manifest kunne slå den, avhengig av hvilken fil glob
                # tilfeldigvis kom til sist. En innholdsverifisert type skal
                # vinne fordi den er verifisert, ikke fordi den kom sist.
                status = (r.get('kildestatus') or '').strip()
                # ⚠ TERMIN FRA ET MANIFEST ER SISTE UTVEG. Arkivsidene merker
                # hver lenke med terminen («V21»), og for NTNUs econ-arkiv sto
                # 607 av 948 filer uten termin fordi filnavnet bare het
                # «1011.pdf». Men lenketeksten er ikke alltid enig med fila:
                # SØK1011_V23_EXAM_RESIT.pdf er lenket opp under «H23».
                # Filnavnet er nærmere dokumentet, så det får fortsatt forrang
                # — se bruken i main().
                termin = (r.get('termin') or '').strip().upper()
                gml = m.get(nøkkel, ('', '', '', '', ''))
                bedre = typ and (not gml[1] or
                                 (kilde == 'pdf-verifisert' and gml[2] != 'pdf-verifisert'))
                m[nøkkel] = (url or gml[0],
                             typ if bedre else gml[1],
                             kilde if bedre else gml[2],
                             status or gml[3],
                             termin or gml[4])
    return m


def selvtest():
    """Faktiske filnavn fra arkivet. Feiler testen, er parseren gal — ikke dataene."""
    saker = [
        ('tma4115aug04.pdf',                       'TMA4115', 2004, 'K', 'oppgave'),
        ('lftma4110des10.pdf',                     'TMA4110', 2010, 'H', 'losningsforslag'),
        ('tma4110h13eng.pdf',                      'TMA4110', 2013, 'H', 'oppgave'),
        ('MAT111_2003_h_fasit_eksamen.pdf',        'MAT111',  2003, 'H', 'losningsforslag'),
        ('MAT111_2004_v_pensum.pdf',               'MAT111',  2004, 'V', 'pensum'),
        ('E_TFY4165_181219.pdf',                   'TFY4165', 2018, 'H', 'oppgave'),
        ('tma4110_2022h_nb.pdf',                   'TMA4110', 2022, 'H', 'oppgave'),
        ('TMA4110_host_2019_nynorsk.pdf',          'TMA4110', 2019, 'H', 'oppgave'),
        ('v2013english.pdf',                       None,      2013, 'V', 'oppgave'),
        ('tma4115v16_english_solutions.pdf',       'TMA4115', 2016, 'V', 'losningsforslag'),
        ('kont2014nor.pdf',                        None,      2014, 'K', 'oppgave'),
        ('tma4115juni14.pdf',                      'TMA4115', 2014, 'V', 'oppgave'),
        ('E-74306-23mai1998.pdf',                  None,      1998, 'V', 'oppgave'),
        ('2015-kont-solution2.pdf',                None,      2015, 'K', 'losningsforslag'),
        # Runde to: mønstre indekseringen selv avdekket som utolkbare.
        ('lf-2012-12-13.pdf',                      None,      2012, 'H', 'losningsforslag'),
        ('2023-11-28-lf.pdf',                      None,      2023, 'H', 'losningsforslag'),
        ('lf_ma1102_20140527_b.pdf',               'MA1102',  2014, 'V', 'losningsforslag'),
        ('eksAug13e.pdf',                          None,      2013, 'K', 'oppgave'),
        ('eksNov17n.pdf',                          None,      2017, 'H', 'oppgave'),
        ('lf-eksamh2012.pdf',                      None,      2012, 'H', 'losningsforslag'),
        ('2016hb.pdf',                             None,      2016, 'H', 'oppgave'),
        ('tma4125-30-35-k19-lf.pdf',               'TMA4125', 2019, 'K', 'losningsforslag'),
        ('TMA4125-30-2005-hoest-m2.pdf',           'TMA4125', 2005, 'H', 'oppgave'),
        ('lfTMA4130k04.pdf',                       'TMA4130', 2004, 'K', 'losningsforslag'),
        # Kontrollsaker mot falske treff: «design» og «master» inneholder
        # månedsnavn, «main2019» ligner en emnekode.
        ('kursdesign-master-2019.pdf',             None,      2019, None, 'oppgave'),
        # Runde tre: feil indeksen selv avslørte.
        ('TMA4135-04h.pdf',                        'TMA4135', 2004, 'H', 'oppgave'),
        ('TMA4135-05k.pdf',                        'TMA4135', 2005, 'K', 'oppgave'),
        ('SIF5017k03.pdf',                         'SIF5017', 2003, 'K', 'oppgave'),
        ('L_TFY4165_181219.pdf',                   'TFY4165', 2018, 'H', 'losningsforslag'),
        ('E_TFY4165_181219.pdf',                   'TFY4165', 2018, 'H', 'oppgave'),
        ('L-74306-23mai1998.pdf',                  None,      1998, 'V', 'losningsforslag'),
        ('eksAug09l.pdf',                          None,      2009, 'K', 'losningsforslag'),
        ('eksAug10b.pdf',                          None,      2010, 'K', 'oppgave'),
        ('eks14Aug08b.pdf',                        None,      2008, 'K', 'oppgave'),
        ('eksNov17n.pdf',                          None,      2017, 'H', 'oppgave'),
        # Sensorveiledning er IKKE løsningsforslag — den ene er lov å
        # hoste, den andre ikke. Blandes de, hoster vi noe vi ikke kan.
        ('ECON1310-H2025-sensorveiledning.pdf',    'ECON1310', 2025, 'H', 'sensorveiledning'),
        ('sensorrettleiing-ara1010-v22.pdf',       'ARA1010',  2022, 'V', 'sensorveiledning'),
        ('tdt4237-2016-sensorguide.pdf',           'TDT4237',  2016, None, 'sensorveiledning'),
        ('lftma4110des10.pdf',                     'TMA4110',  2010, 'H', 'losningsforslag'),
        # Runde fire: mønstre indeksen fortsatt sto uten termin på.
        ('eksamen-2013k-no.pdf',                   None,      2013, 'K', 'oppgave'),
        ('tma4100_2025k.pdf',                      'TMA4100', 2025, 'K', 'oppgave'),
        ('tma4115kont16_nynorsk.pdf',              'TMA4115', 2016, 'K', 'oppgave'),
        ('eksamenma1301h06.pdf',                   'MA1301',  2006, 'H', 'oppgave'),
        ('lfeksamenma1301h04.pdf',                 'MA1301',  2004, 'H', 'losningsforslag'),
        ('2004june.pdf',                           None,      2004, 'V', 'oppgave'),
        ('midtsem_2004h1.pdf',                     None,      2004, 'H', 'oppgave'),
        ('sensorveiledning-jap1501-hosten-2025.pdf','JAP1501', 2025, 'H', 'sensorveiledning'),
        ('kin1503-sensorveiledning-varen-2026.pdf', None,      2026, 'V', 'sensorveiledning'),
    ]
    feil = 0
    for navn, kode, år, ses, typ in saker:
        k = finn_kode(navn, 'MAPPE')
        å, s = finn_termin(navn)
        t = finn_type(navn)
        v = []
        if kode and k != kode:
            v.append('kode %s != %s' % (k, kode))
        if å != år:
            v.append('år %s != %s' % (å, år))
        if s != ses:
            v.append('sesong %s != %s' % (s, ses))
        if t != typ:
            v.append('type %s != %s' % (t, typ))
        if v:
            feil += 1
            print('  FEIL %-42s %s' % (navn, '; '.join(v)))
    print('selvtest: %d av %d saker feilet' % (feil, len(saker)))
    return feil == 0


def main():
    if '--selvtest' in sys.argv:
        sys.exit(0 if selvtest() else 1)
    if not selvtest():
        sys.exit('Selvtesten feilet — parseren er gal. Retter du den ikke først, '
                 'blir hele indeksen feil.')

    man = manifest()
    rader = []
    sett_md5 = {}
    for mappe in sorted(os.listdir(ROT)):
        d = os.path.join(ROT, mappe)
        if not os.path.isdir(d):
            continue
        # ⚠ GÅ REKURSIVT. Nedlasterne har lagt materiale i undermapper —
        # «TDT4120/arkiv» (179 filer), «PROG1001/eksamen» (93) — og en
        # os.listdir over ett nivå så ingen av dem. 653 filer var usynlige for
        # indeksen, og PROG1001 sto med NULL rader mens mappa hadde 93 filer.
        for rot, _, filer in os.walk(d):
            undermappe = os.path.relpath(rot, d)
            undermappe = '' if undermappe == '.' else undermappe
            for fn in sorted(filer):
                sti = os.path.join(rot, fn)
                if not os.path.isfile(sti) or fn.startswith('.'):
                    continue
                url, verifisert_type, type_kilde_manifest, kildestatus, \
                    manifest_termin = \
                    man.get((mappe.upper(), fn), ('', '', '', '', ''))
                ekte = ekte_filnavn(mappe, fn, url)
                h = md5(sti)
                # ⚠ DEDUPLISER PER EMNE, ikke globalt. TMA4240 og TMA4245 deler
                # eksamensarkiv ved NTNU: 118 av 121 filer er bit-identiske. Med
                # global deduplisering ble hele det ene emnet strøket til 3
                # terminer, som om arkivet var tomt. Samme eksamen kan høre til to
                # emner — det er duplikater INNAD i ett emne som ikke skal telles
                # to ganger.
                kode_nå = finn_kode(ekte, mappe)
                dublett = sett_md5.get((kode_nå, h), '')
                if not dublett:
                    sett_md5[(kode_nå, h)] = '%s/%s' % (mappe, fn)
                # Terminen står ofte i STIEN, ikke i filnavnet: mattewikien lagrer
                # som /_media/ma1102/2019v/eksamen.pdf, der «eksamen.pdf» er helt
                # navnløst. Filnavnet får forrang — det er mest spesifikt — men
                # faller det tomt, er stien neste beste kilde. Dette alene bergo
                # flere hundre filer fra å bli stående uten termin.
                år, ses = finn_termin(ekte)
                if not år and url:
                    sti_tekst = urllib.parse.unquote(
                        urllib.parse.urlsplit(url).query or urllib.parse.urlsplit(url).path)
                    sti_tekst = sti_tekst.rsplit('/', 1)[0]  # uten filnavnet selv
                    år, ses2 = finn_termin(sti_tekst)
                    ses = ses or ses2
                # Tredje og siste kilde: terminen arkivsiden selv satte på
                # lenka. NTNUs econ-arkiv skriver «<a …>V21</a>» til en fil som
                # heter «1011.pdf» — 607 av 948 filer sto uten termin fordi
                # navnet ikke bar den. Den står sist fordi lenketeksten er
                # institusjonens ORDNING av filene, mens filnavnet er
                # dokumentet selv: SØK1011_V23_EXAM_RESIT.pdf er lenket opp
                # under «H23». Begge er sanne; det mest spesifikke vinner.
                if not år and manifest_termin:
                    m_t = re.match(r'^(\d{4})([VHK])$', manifest_termin)
                    if m_t and ÅR_MIN <= int(m_t.group(1)) <= ÅR_MAX:
                        år, ses = int(m_t.group(1)), m_t.group(2)
                rader.append({
                    'mappe': mappe,
                    'undermappe': undermappe,
                    'filnavn': fn,
                    'ekte_filnavn': ekte,
                    'emnekode': kode_nå,
                    'ar': år or '',
                    'sesong': ses or '',
                    'termin': ('%d%s' % (år, ses)) if år and ses else '',
                    # Verifisert mot PDF-teksten slår vår navnegjetting.
                    # ⚠ MEN undermappa slår begge: ligger fila i
                    # «forelesningsnotater/» eller «ovinger-og-losninger/», er
                    # den ikke et eksamenssett uansett hva navnet eller
                    # manifestet sier. Manifestskjemaet har bare «oppgave» og
                    # «losningsforslag», så 98 forelesningsnotater kom inn som
                    # «oppgave» — og 60 av dem ble talt som EKSAMENSTERMINER.
                    'type': ('temanotat'
                             if undermappe and UNDERMAPPE_INTERN.search(undermappe)
                             else verifisert_type or finn_type(ekte)),
                    'type_kilde': type_kilde_manifest if verifisert_type else 'filnavn',
                    # Produktvalget først: ingenting herfra går på nett.
                    'deles_pa_nett': 'nei',
                    'juridisk_status': juridisk_status(
                        mappe, url, verifisert_type or finn_type(ekte),
                        undermappe),
                    'status_sikkerhet': status_sikkerhet(
                        url, mappe, verifisert_type or finn_type(ekte),
                        undermappe),
                    'sprak': finn_sprak(ekte),
                    'bytes': os.path.getsize(sti),
                    'md5': h,
                    'dublett_av': dublett,
                    'kilde_url': url,
                    'kildestatus': kildestatus,
                })

    # ⚠ ÅR UTEN SESONG er ikke ingenting. 1 255 filer har et lesbart årstall,
    # men ingen V/H/K i navnet — «TDT4100 - Eksamen 2009.doc». De falt helt ut
    # av tellingen, som om eksamenen ikke fantes. De får sesong «U» (ukjent).
    #
    # MEN bare når emnet ikke ALT har en ekte termin det året: har vi 2009V fra
    # før, er 2009U nesten sikkert samme eksamen, og to rader ville blåst opp
    # settellingen. Regelen er konservativ med vilje — tallet skal være et
    # gulv, ikke et tak.
    ekte_terminer = {(r['emnekode'], r['ar']) for r in rader if r['termin']}
    lagt_til = 0
    for r in rader:
        if not r['termin'] and r['ar'] and (r['emnekode'], r['ar']) not in ekte_terminer:
            r['sesong'] = 'U'
            r['termin'] = '%sU' % r['ar']
            lagt_til += 1
    if lagt_til:
        print('  år uten sesong, ført som «U»: %d filer' % lagt_til)

    ut = os.path.join(ROT, 'INDEKS.csv')
    with open(ut, 'w', newline='', encoding='utf-8') as f:
        w = csv.DictWriter(f, fieldnames=list(rader[0].keys()))
        w.writeheader()
        w.writerows(rader)

    # Terminer: bare unike filer teller, og pensum er ikke et eksamenssett.
    term = defaultdict(lambda: {'oppgave': 0, 'losning': 0, 'sprak': set()})
    for r in rader:
        if (r['dublett_av'] or r['type'] in ('pensum', 'temanotat')
                or not r['termin']):
            continue
        t = term[(r['emnekode'], r['termin'])]
        # Begge teller som fasit for VÅRT formål (kontrollere egne løsninger),
        # men de holdes adskilt fordi bare den ene kan hostes.
        t['losning' if r['type'] in ('sensorveiledning', 'losningsforslag')
          else r['type']] += 1
        if r['sprak']:
            t['sprak'].add(r['sprak'])

    tut = os.path.join(ROT, 'TERMINER.csv')
    with open(tut, 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['emnekode', 'termin', 'ar', 'sesong', 'oppgavefiler',
                    'losningsfiler', 'har_fasit', 'sprak'])
        for (kode, t), v in sorted(term.items()):
            w.writerow([kode, t, t[:4], t[4:], v['oppgave'], v['losning'],
                        'ja' if v['losning'] else 'nei', '+'.join(sorted(v['sprak']))])

    per_emne = defaultdict(lambda: {'term': 0, 'fasit': 0})
    for (kode, t), v in term.items():
        per_emne[kode]['term'] += 1
        if v['losning']:
            per_emne[kode]['fasit'] += 1

    dubletter = sum(1 for r in rader if r['dublett_av'])
    uten_termin = sum(1 for r in rader if not r['termin'])

    # ⚠ MANIFEST.csv er IKKE en pålitelig indeks over arkivet — flere jobber har
    # skrevet til mappa, og over tusen filer mangler rad. Sorteringen bruker den
    # kun til å slå opp kilde-URL for «fetch.php»-navnene. Bommer det oppslaget,
    # står filen igjen med et navn uten informasjon, og den MÅ ropes ut framfor
    # å forsvinne stille inn i «uten termin».
    uløste = [r for r in rader if r['ekte_filnavn'].startswith('fetch.php')]
    if uløste:
        print('\n⚠ %d filer heter fortsatt «fetch.php» — mangler rad i '
              'MANIFEST*.csv, så det ekte navnet er ukjent:' % len(uløste))
        for r in uløste[:5]:
            print('    %s/%s' % (r['mappe'], r['filnavn'][:70]))

    # Kryssreferanser: filen ligger i ett emnes arkiv, men bærer en ANNEN
    # emnekode i navnet. Det er som regel ikke en feil — NTNU har endret koder
    # over tid (samme fag, ny kode) og wikien krysslenker slektskapet. Men
    # PÅSTANDEN om hvilke som er samme fag er ikke verifisert her, så de føres
    # som noe et menneske må avgjøre, ikke som en sannhet skriptet slår fast.
    kryss = defaultdict(int)
    for r in rader:
        if r['emnekode'] != r['mappe'].upper() and not r['mappe'].startswith('_'):
            kryss[(r['mappe'].upper(), r['emnekode'])] += 1
    with open(os.path.join(ROT, 'KRYSSREFERANSER.csv'), 'w', newline='',
              encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['arkiv_emne', 'kode_i_filnavnet', 'filer', 'ma_avgjores_av_menneske'])
        for (a, b), n in sorted(kryss.items(), key=lambda x: -x[1]):
            w.writerow([a, b, n, 'samme fag med gammel kode? eller feilplassert?'])
    utenfor = sum(kryss.values())

    with open(os.path.join(ROT, '_SORTERT.md'), 'w', encoding='utf-8') as f:
        f.write('# Sortert arkiv\n\n')
        f.write('Maskinlest av `scripts/sorter-arkiv.py`. Ingen filer er flyttet '
                'eller omdøpt.\n\n')
        f.write('| mål | tall |\n|---|---|\n')
        f.write('| Filer | %d |\n' % len(rader))
        f.write('| Bit-identiske dubletter | %d |\n' % dubletter)
        f.write('| Filer med annen emnekode enn arkivet (kryssref.) | %d |\n' % utenfor)
        f.write('| Filer uten tolkbar termin | %d |\n' % uten_termin)
        f.write('| **Unike eksamensterminer** | **%d** |\n' % len(term))
        f.write('| Terminer med fasit | %d |\n\n' % sum(1 for v in term.values() if v['losning']))
        f.write('## Per emne\n\n| emne | terminer | med fasit | dekning |\n|---|---|---|---|\n')
        for kode, v in sorted(per_emne.items(), key=lambda x: -x[1]['term']):
            f.write('| `%s` | %d | %d | %.0f %% |\n'
                    % (kode, v['term'], v['fasit'], 100 * v['fasit'] / v['term']))

    print('\n%d filer  →  %d unike terminer i %d emner'
          % (len(rader), len(term), len(per_emne)))
    print('  bit-identiske dubletter: %d' % dubletter)
    print('  kryssreferanser (annen kode enn arkivet): %d' % utenfor)
    print('  uten tolkbar termin: %d' % uten_termin)
    print('\nSkrev INDEKS.csv, TERMINER.csv, _SORTERT.md i %s' % ROT)


if __name__ == '__main__':
    main()
