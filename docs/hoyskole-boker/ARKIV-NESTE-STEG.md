# Arkivrunden — overlevering til neste økt

Oppdatert 31. juli 2026 kl. 06. Køen fra 30. juli er tømt, og natten
31. juli tok UiO emne for emne (alle 45 institutter) og de nedlagte statlige
høgskolene via Wayback.

Les først: `ARKIVRUNDE-2026-07-31-NATT.md`,
`ARKIVRUNDE-2026-07-31-RESULTAT.md` og
`ARKIVRUNDE-2026-07-30-RESULTAT.md` (hva som ble gjort),
`ARKIV-SORTERING-2026-07-30.md` (metoden) og `BRUKSREGLER-ARKIV.md`
(hva vi har lov til, og hva vi har bestemt).

## Kjør dette først

```bash
python3 scripts/sorter-arkiv.py     # indekserer arkivet på nytt
python3 scripts/skriv-innhold.py    # regenererer arkivets INNHOLD.md
```

Sorteringen har en **selvtest på 48 ekte filnavn** og nekter å kjøre hvis
den feiler. Den har alt fanget ti feil som ellers hadde gått rett inn i
bøkene. Feiler den etter en endring, er det som regel parseren som er gal —
ikke dataene.

## Verktøykassa

Fire skript, og de dekker fire forskjellige måter en institusjon publiserer på.
Å velge feil skript er den vanligste grunnen til at et arkiv ser tomt ut.

| Publiseringsmønster | Skript |
|---|---|
| Ett samlearkiv for hele instituttet, mapper i flere nivå (ILN, SV-fak.) | `finn-arkivmapper.py` → kildeliste |
| Ingen indeks; hvert emne har sin egen lille arkivmappe (IKOS, ILOS) | `probe-emnearkiv.py` → kildeliste |
| Én arkivside per emne, kjent på forhånd | `last-ned-eksamener.py` med `KILDER=` |
| Materiale institusjonen har tatt ned | `wayback/hent-wayback.py` |

Kildelistene er CSV med `kode,arkiv_url,institutt` og går rett inn i
nedlasteren:

```bash
KILDER=<liste>.csv MAAL=~/Desktop/Eksamner/_nedlastet-2026-07-30 \
MANIFEST=MANIFEST-<runde>.csv python3 scripts/last-ned-eksamener.py
```

`DRY=1` foran tørrkjører. Gjør det først — det viser hvilke filer som ville
blitt hentet, uten å hente dem.

Etterpå, alltid:

```bash
python3 scripts/klassifiser-arkiv.py   # leser type ut av PDF-teksten
python3 scripts/sorter-arkiv.py
```

## Det som gjenstår, i prioritert rekkefølge

### 1. Andre universiteter, emne for emne
UiO er ferdig. Metoden virket der — 3 877 filer, og 26 av 45 institutter
avklart som tomme — men den er ikke prøvd andre steder. `probe-emnearkiv.py`
er skrevet for UiOs URL-form (`/studier/emner/<fak>/<inst>/<KODE>/`) og må
tilpasses per lærested. Kandidater: OsloMet, HVL, USN, UiS, Nord, INN.

⚠ Sjekk FØRST om emnesidene i det hele tatt lenker til arkiv. NTNU gjør det
ikke (verifisert), og da er per-emne-prøving bortkastet.

### 2. Haler som er rekjørbare
- **Flere nedlagte vertsnavn.** Wayback-CDX er inngangen, og den er billig:
  én spørring per vert. Ikke prøvd: samas.no, phs.no, forsvaret, hiho.no,
  dhs.no, mhs.no.

  ⚠ **RETTELSE 31. juli kl. 11.** Dette dokumentet listet tidligere tolv
  vertsnavn som «prøvd og tomme». **Den lista var feil og er fjernet.** To
  grunner, begge verifisert:

  1. Spørringene brukte PREFIKS (`url=hibo.no*`). Wayback kanoniserer bort
     `www.`, men ikke andre underdomener, så `fag.sib.hibo.no` faller utenfor.
     Målt på hibo.no: prefiks ga 273 PDF-er, `matchType=domain` ga **1 487**.
  2. Flere av spørringene fikk trolig et tomt svar uten at det ble merket.

  Alle verter som er hentet med prefiks bør kjøres om med `matchType=domain`
  — også de vi TROR er ferdige.
  ⚠ Les `BRUKSREGLER-ARKIV.md` om personlige kurskataloger først: en
  foreleser-side er ikke institusjonens forpliktende publisering, og et
  løsningsforslag skrevet der er vedkommendes åndsverk.
- **UiB** er stengt. `org.uib.no/mi/eksamen/` har nøyaktig fire emnekoder, og
  22 andre instituttforkortelser ble prøvd med både `/eksamen/` og
  `/eksamensoppgaver/` — alle 404.
- **NTNU per emne** virker ikke: emnesidene (`ntnu.no/studier/emner/TMA4100`)
  lenker ikke til eksamensarkiv i det hele tatt. Der er det institutt-sidene og
  mattewikien som gjelder, og begge er hentet.
- **NMBU, Nord og INN** har eksamenssider uten arkivlenker. Bekreftet mot de
  faktiske sidene, ikke antatt.

### 3. NHH-innsyn (krever produkteier)
NHH publiserer i praksis ingenting — verifisert mot 10 711 URL-er, alle 548
emnesider og 615 ansattsider. Deres egne retningslinjer sier at
sensorveiledninger legges i Canvas. Som statlig høyskole er NHH omfattet av
offentleglova, og eksamensoppgaver er journalførte dokumenter. **Et
innsynskrav er trolig eneste lovlige rute.** Dette er en henvendelse et
menneske må sende.

### 4. Kan ikke nås herfra
`emnearkiv.ii.uib.no` løser DNS, men port 80/443 er filtrert utenfra. Krever
UiB-nett. Google indekserer et ekte II-emnearkiv med sensorveiledninger der.

### 5. 1 459 skannede PDF-er uten tekstlag
Typen deres kan ikke verifiseres mot innholdet, bare gjettes fra navnet. OCR
ville avgjøre dem. Ingen er startet, og det er ikke opplagt at det er verdt
det — men de er nå identifiserbare: `type_kilde` er ikke `pdf-verifisert`, og
`klassifiser-arkiv.py` fører dem som «for lite tekst (skanna?)».

## Hva som er UTHARVET (ikke bruk tid på)

- **NTNU elektro (TFE/TTK/TTT/TET), maskin, bygg, TIØ, materialteknologi,
  bioteknologi** — ingen åpne arkiv. Bekreftet av IE- og IV-fakultetets egne
  indekser og ~400 direkteprober.
- **UiT** — arkivsidene er tomme legacy-webshop-sider; UiT *solgte* trykte
  oppgavesamlinger. Dagens arkiv ligger på SharePoint (403).
- **Nord universitet** — 186 691 arkiverte URL-er gjennomgått; alt er reglement.
- **UiO MN-fakultetet** — publiserer i praksis ikke (kun MAT1105, KJM1101).
- **TFY4115** — utharvet per aug 2020. Fem innganger prøvd, alle 404.
- **UiB Matematisk institutt** — katalogrota har nøyaktig fire emnekoder, alle hentet.
- **HELE UiO** — alle 45 institutter er gjennomgått emne for emne, rundt
  3 000 emnesider. 26 av dem har ingen arkiv i det hele tatt: FYS, geofag,
  astro, farmasi, ITS, SFE, natfag, MN, ILS, IMK, CEMO, hele medisin- og
  odontologifakultetet, SKK, Ibsen-senteret m.fl.
  ⚠ MEN: «UiO MN publiserer ikke» stemmer for åtte av ni MN-institutter — og
  ikke for MATH, som ga 732 filer i 48 emner via mappenavnet `oppgaver`. En
  påstand om et helt fakultet tåler ikke ett moteksempel.
- **NTNU econ** — 1 005 av 1 005 dokumentlenker hentet.
- **KHiO, Høgskolen i Molde og Norges musikkhøgskole** — Wayback har PDF-ene
  deres, men det som ser ut som eksamensmateriale er det ikke: «opptaksprøver»,
  «Prosessbeskrivelse eksamen og vurdering», «Sikkerhetsinstruks for avvikling
  av hovedinstrumenteksamen». Fire–fem filer hver, alle administrative.
  ⚠ Merk fellen: et filter på «løsning» drar inn «Mellomløsning til fusjon».
  Et arkiv blir ikke bedre av å bli større.

## Feller enhver ny henter MÅ håndtere

Alle er funnet i faktiske data, og hver enkelt har kostet materiale:

1. **Paginering.** Vortex-mappelister viser ~20–25 oppføringer og legger resten
   bak `?page=2`. Kostet 27 sett i to emner.
2. **Små bokstaver.** UiO skriver halvparten av HTML-sidene med små:
   `STV1100-2010H.html` OG `stv1100-2015h.html`. Kostet 14 sett.
3. **HTML-sett.** Flere eksamenssett finnes bare som HTML-sider med
   oppgaveteksten i brødteksten. Halve HVL-arkivet lå slik.
4. **Statuskoden lyver.** Minst fire sider svarte `200 OK` med et
   innloggingsskjema som innhold. Sjekk innholdet, ikke koden.
5. **URL-enkoding går BEGGE veier.** Uenkodede mellomrom feiler — men
   dobbeltenkoding av et alt enkodet `%20` gir `%2520` og 404. Bruk
   `quote(path, safe='/%')`. Begge har rammet dette prosjektet.
6. **Endelsen kan stå midt i stien.** Liferay:
   `/documents/10422/…/E_TFY4104_251202.pdf/<uuid>?t=…`. Et mønster som krever
   `.pdf` sist finner null.
7. **Filnavnet kan ligge i spørrestrengen.** DokuWiki:
   `fetch.php?media=<prosentkodet URL>`. Uten utpakking heter 196 filer det
   samme.
8. **Arkiv-URL-en kan VÆRE fila**, ikke en side med lenker.
9. **Ett nivå er ikke nok.** NTNUs mattewiki sprer settene over mange
   undersider (MA0001 hadde 73). En ettnivås henter fikk null der en kryper
   fikk 119. ILNs samlearkiv ligger to nivå ned.
10. **Scratchpad-rota har en `struct.py`** som skygger for standardbiblioteket
    og kræsjer ethvert Python-skript som kjøres derfra. Kjør fra en undermappe.
11. **Samme arkiv kan ligge på to stier.** UiO serverer IAKH-arkivet både under
    `/emner/hf/iakh/…` og `/program/historie/…`, med identisk innhold. Krypes
    begge, dobles alt.
12. **Stiene er kasussensitive.** `ENG2515/Eksamensoppgaver/` svarer 200,
    `ENG2515/eksamensoppgaver/` svarer 404 — og begge formene finnes, på hvert
    sitt emne. Prøv begge; ikke gjett.
13. **Arkivet er ikke alltid lenket fra emnesida.** IKOS' JAP1501 har et arkiv
    på `/grading-guidelines/` som emnesida ikke nevner. En hentar som bare
    følger lenker finner det aldri — derfor prøver `probe-emnearkiv.py` også
    kjente mappenavn direkte.
14. **«Nærmeste emnekode før lenka» er feil regel.** Overskriftene lyder
    «SØK1000 … - nedlagt emne, blitt til SØK1021 og SØK1022». Regelen ga 162 av
    844 filer feil emne. Koden blokka handler om står FØRST.
15. **Emnekoder har ikke alltid fire siffer.** EXPHIL03 og hele
    EXFAC03-familien har to. Et mønster som krevde fire hoppet over ni emner
    uten spor i loggen — ett av dem EXPHIL03, med 137 dokumenter.
16. **En kjøreliste uten avsluttende linjeskift mister siste linje.**
    `while read` returnerer usant på en siste linje uten `\n`, så løkkekroppen
    kjøres aldri for den. Wayback-runden hoppet over hio.no uten et ord i
    loggen — og «FERDIG» ble skrevet ut som om alt var gjort. Skriv alltid
    `'\n'.join(...) + '\n'`, og tell radene i planen mot radene i loggen.
17. **Wayback-CDX med PREFIKS mister underdomener.** `url=hibo.no*`
    kanoniserer bort `www.`, men ikke `fag.sib.hibo.no`. Målt: 273 PDF-er med
    prefiks, 1 487 med `matchType=domain`. Bruk domenematch.
18. **Et NULL fra Internet Archive er ikke bevis.** Tjenesten svarer med
    tilkoblingsfeil eller tomt under last, og et skript som skriver resultatet
    rett i en fil, lagrer «ingenting finnes». Målt samme minutt:
    `fag.sib.hibo.no` ga 0 rader på første forsøk og 500 på andre. **Gjenta
    hver spørring som gir null, minst to ganger, før du konkluderer.**
19. **Karakterutskrifter ser ut som eksamensarkiv.**
    `hinesna.no/eksamen/moduler/**/RPT0001.HTM` — 211 sider med emnekode og
    dato i stien, akkurat som et institusjonsarkiv. Innholdet er
    studentnummer og karakterer. Et navnefilter alene drar hele bunken inn.
    **Åpne alltid én fil fra en ny mappe før mappa tas med.**
20. **`re.search` gir bare FØRSTE treff.** Forkastes det (umulig årstall, feil
    kode), skal letingen gå til neste TREFF i samme navn, ikke til neste
    mønster. `SØK1000 V2024.pdf` mistet sesongen sin fordi «k1000» ble prøvd
    først og forkastet. Bruk `finditer` når et treff kan bli forkastet.

## Krav til enhver ny nedlastingsjobb

**Skriv manifest.** Uten `kilde_url` kan vi ikke skille et instituttarkiv fra
en ansatts personlige katalog, og det skillet er det bruksreglene hviler på.
Kolonner:

    emnekode,larested,filnavn,type,bytes,kilde_url,arkiv_url,hentet,type_kilde,kildestatus[,termin]

- `emnekode` er **mappenavnet fila ligger i**, ikke den utledede emnekoden.
  Det er nøkkelen `sorter-arkiv.py` slår opp på, og for 984 kryssreferanser er
  de to forskjellige.
- `type` = `oppgave` · `sensorveiledning` · `losningsforslag`. De tre er
  juridisk ulike og skal aldri slås sammen. **La den stå tom i nedlastinga** —
  `klassifiser-arkiv.py` fyller den fra PDF-teksten etterpå.
- `type_kilde` = `innhold` hvis verifisert mot PDF-teksten, ellers `filnavn`.
  ⚠ **Filnavn lyver i begge retninger:** i én runde var 276 filer som het
  «eksamen…» løsningsforslag, og 83 som het «…svar/los» var oppgavesett.
- `kildestatus` = tomt normalt, `nedtatt-hentet-fra-wayback` for materiale
  institusjonen har fjernet.
- `termin` (valgfri) = `2021V` / `2016H`. Bare når arkivsida selv oppgir den.
  Sorteringen bruker den kun når filnavn og URL ikke gir noen termin.
- Er du i tvil, la feltet stå **tomt**. En gjettet verdi er verre enn en tom,
  fordi den ser troverdig ut.

**Ikke last ned tredjeparts materiale.** Et arkiv som krypes automatisk, får
med seg det kursmaterialet lenker til — og det er ikke nødvendigvis
institusjonens eget. To lærebokkapitler (Cormen kap. 30, Bradley/Hax/Magnanti
kap. 9) slapp gjennom og ligger nå i `_KARANTENE-tredjeparts-laerebok/`.
Vitenskapelige artikler i `articles/`-mapper er samme sak.

**Kontroller det du kan kontrollere.** Metoden i `termin-fra-lenketekst.py`
ble bare tatt i bruk fordi kodene den leser ut av sida kunne holdes opp mot
mappa filene allerede lå i — utledet av et helt annet skript, fra filnavnet.
889 av 904 stemte. Første forsøk stemte i 682 av 844, og den forskjellen er
hele grunnen til at regelen ble skrevet om.

## En korreksjon å arve

En tidligere rapport 30. juli oppga «45 sensorveiledninger for BEA200» hos
NHH. **BEA200 finnes ikke i arkivet i det hele tatt** — null treff i 4 634
CDX-rader. Det som faktisk finnes er 26 sensorveiledninger, hovedsakelig for
SAM100. Tallet ble gjentatt videre før det ble kontrollert; kontroller
agentrapporter mot data før de siteres.
