# Nattrunden 31. juli 2026 — UiO uthøstet, og de nedlagte høgskolene hentet inn

Fortsettelsen av `ARKIVRUNDE-2026-07-31-RESULTAT.md`, kjørt fra 02:30 til
06:11. To parallelle spor: **hvert eneste emne ved Universitetet i Oslo**, og
**de nedlagte statlige høgskolene via Wayback**.

## Kort

| | Før natten | Etter |
|---|---:|---:|
| Filer | 18 482 | **24 769** |
| Eksamensterminer | 9 042 | **12 653** |
| Emner | 1 396 | **2 733** |
| Sensorveiledninger | 3 395 | **4 732** |
| Terminer der vi har fasit | 4 903 | **6 259** |
| Filer med innholdsverifisert type | 13 310 (72,0 %) | **16 945 (68,4 %)** |

⚠ Andelen innholdsverifiserte gikk NED, fra 72,0 % til 68,4 %, selv om
antallet steg med 3 635. Grunnen er Agder: 844 filer som alle er skanninger
uten tekstlag. Andelen er et forhold, ikke en kvalitet — og et arkiv som
vokser med uleselige skanninger, får lavere andel uten at noe er blitt verre.

Emnetallet er nesten doblet. Det skyldes ikke at UiO ble større, men at
Høgskolen i Agder alene la til 687 emner ingen hadde sett på før.

## Spor 1: UiO, emne for emne — 3 877 filer

Alle **45 institutter** ved UiO er nå prøvd emne for emne: rundt 3 000
emnesider, hver lest for arkivlenker OG prøvd mot 25 kjente mappenavn.

| Institutt | Filer |
|---|---:|
| Jus | 1 941 |
| MATH | 732 |
| Økonomi | 320 |
| ISP (spesialpedagogikk) | 164 |
| Psykologi | 160 |
| IKRS (kriminologi) | 141 |
| SAI (sosialantropologi) | 109 |
| Teologi | 61 |
| SMR (menneskerettigheter) | 53 |
| ISS | 46 |
| Statsvitenskap | 36 |
| IMV (musikkvitenskap) | 30 |
| AFIN | 28 |
| SV-fakultetet | 18 |
| Kjemi | 15 |
| IPED, IFI, IBV, SUM, TIK | 23 til sammen |

**26 av 45 institutter hadde ingen arkiv i det hele tatt.** Det er også et
resultat: UiO er nå uthøstet, ikke bare delvis prøvd. FYS, geofag, astro,
farmasi, ITS, SFE, natfag, MN, ILS, IMK, CEMO, hele medisin- og
odontologifakultetet — ingen av dem publiserer eksamensarkiv per emne.

⚠ Handoverdokumentet fra 30. juli sa at «UiO MN-fakultetet publiserer i
praksis ikke». Det stemmer for åtte av ni MN-institutter — men ikke for MATH,
som ga 732 filer i 48 emner. Funnet kom via mappenavnet `oppgaver`, ett av de
tolv navnene som ble lagt til fordi de sto i arkivets egne manifester.

## Spor 2: de nedlagte høgskolene — 2 342 filer

Norske statlige høgskoler er slått sammen til universiteter, og nettstedene
deres er borte. Arkivene finnes i Wayback.

| Institusjon | Filer | Merknad |
|---|---:|---|
| Høgskolen i Agder (nå UiA) | 844 | `www.hia.no/stud/eksam/<termin>/<KODE>.pdf`, 2000–2006 |
| Høgskolen i Østfold | 650 | både gammelt arkiv og live-sider som er tatt ned |
| Høgskolen i Oslo (nå OsloMet) | 305 | inkl. bibliotekets eget eksamensarkiv |
| Høgskolen i Gjøvik (nå NTNU) | 174 | |
| UiA Grimstad | 128 | |
| Høgskolen i Akershus (nå OsloMet) | 91 | |
| Norges idrettshøgskole | 60 | |
| Høgskolen i Nord-Trøndelag (nå Nord) | 57 | |
| Høgskulen i Sogn og Fjordane (nå HVL) | 51 | |
| Høgskolen i Hedmark (nå INN) | 25 | |
| Høgskulen i Volda | 25 | |

Alle er merket `kildestatus = nedtatt-hentet-fra-wayback`. Dokumentets art
endres ikke av at det er tatt ned, men opphavet skal være synlig.

### To vurderinger som ble tatt, ikke gjettet

**Terminmappene hos HiA heter `03hu`, `04vg`, `01vut`.** Suffiksene lar seg
ikke avgjøre: PDF-ene er skannet uten tekstlag, og arkivsiden forklarer dem
ikke. Vi tar år + V/H, som er entydig, og gjetter ikke resten. Verste utfall
er at en utsatt eksamen telles i samme termin som den ordinære — en
underrapportering, ikke en falsk påstand.

**KHiO, Høgskolen i Molde og Norges musikkhøgskole ble droppet.** De har
PDF-er i Wayback, men det som ser ut som eksamensmateriale er administrasjon:
«opptaksprøver», «Prosessbeskrivelse eksamen og vurdering», «Sikkerhetsinstruks
for avvikling av hovedinstrumenteksamen». Og et filter på «løsning» drar inn
«Mellomløsning til fusjon». Et arkiv blir ikke bedre av å bli større.

## Fire feil som gjorde arbeid usynlig framfor å feile

Alle fire ble funnet i natt, alle av samme slag: skriptet svarte «ferdig» mens
materiale forsvant.

1. **Klassifikatoren skrev manifestet med `w`.** Standardkjøringen går bare
   gjennom filer som ikke alt er verifisert, så andre kjøring skrev 2 551
   rader og slettet de 7 458 fra første.
2. **Emnekode-mønsteret krevde fire siffer.** EXPHIL03 og hele
   EXFAC03-familien har to. Ni emner ble hoppet over uten spor i loggen — ett
   av dem EXPHIL03, som denne kodebasen har lærebok for. Alene 137 dokumenter.
3. **Wayback-hentaren hadde datoen hardkodet** som `'2026-07-30'`, så 1 517
   filer hentet i natt fikk gårsdagens dato. Kolonnen finnes nettopp for å
   kunne se hva som kom når.
4. **Kjørelistene manglet avsluttende linjeskift.** `while read` returnerer
   usant på siste linje uten `\n`, så hio.no ble aldri kjørt — og «FERDIG» ble
   skrevet ut som om alt var gjort. Samme feil lå i to andre planfiler.

Alle fire er rettet, og alle fire står nå som nummererte feller i
`ARKIV-NESTE-STEG.md`. Kontrollen som fanger den siste er triviell: **tell
radene i planen mot radene i loggen.**

## Nytt siden forrige runde

- `arkivrunde-uio.sh` — kjører probe → nedlasting for ett institutt av gangen,
  i prioritert rekkefølge, og hopper over det som alt er gjort.
- `termin-fra-lenketekst.py --tabell` — leser terminen ut av en
  kolonneoverskrift (NTNU biologi), og `TERMIN_SNUDD` tar «2017 - vår» (IKB).
  Med det er alle fire måtene NTNU oppgir terminen på dekket.
- `probe-emnearkiv.py` prøver 25 mappenavn framfor 13. De tolv nye er ikke
  gjettet — de er hentet ut av `arkiv_url` i manifestene og sortert etter hvor
  mange filer de faktisk har gitt.

## Kartlagt som stengt (ikke bruk tid på)

- **UiB**: `org.uib.no/mi/eksamen/` har nøyaktig fire emnekoder. 22 andre
  instituttforkortelser prøvd med to stivarianter hver — alle 404.
- **NTNU per emne**: emnesidene lenker ikke til eksamensarkiv i det hele tatt.
  Institutt-sidene og mattewikien er det som finnes, og begge er hentet.
- **NMBU, Nord, INN**: eksamenssider uten arkivlenker.
- **cs.oslomet.no, home.hvl.no, grimstad.uia.no**: personlige kurskataloger.

⚠ **RETTELSE 31. juli kl. 12.** `ux.uis.no` sto i lista over som «uten
katalogindeks (403)». Det er feil, og konklusjonen ble trukket fra ÉN
403-respons. **Apache autoindex er på** der hjemmekatalogen er lesbar:
`~s-skj/ResTek1-v03/EksOpg/` og `~per-am/km/` gir fulle kataloglister
(verifisert 31. juli kl. 12). 403 kommer av filrettigheter på den enkelte
katalogen, ikke av `Options -Indexes`. Av 56 prøvde brukere er 16 lesbare, 22
gir 403 og 18 gir 404 — og det lå 186 dokumenter der.
