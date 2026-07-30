# Arkivrunden — overlevering til neste økt

Skrevet 30. juli 2026, ved slutten av økta som utvidet arkivet fra ~2 800 til
~15 980 filer. Grunnen til overleveringen: **agentgrensen på 200 er nådd**, og
resten er raskere med agenter enn manuelt.

Les først: `ARKIVRUNDE-2026-07-30-RESULTAT.md` (hva som ble gjort),
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

## Det som gjenstår, i prioritert rekkefølge

### 1. UiO IAKH — rundt 35 uhentede arkiv
`https://www.uio.no/studier/emner/hf/iakh/tidligere-gitte-sensorveiledninger/`
lister HIS2xxx- og HIS4xxx-emner som ingen har vært innom. Forrige runde tok
bare 1.-semesteremner. Samme gjelder trolig ILN, IKOS, ILOS og IFIKK — vi har
1–2 filer for flere IKOS-emner og har ikke sjekket om det finnes mer.

### 2. Haler som er rekjørbare
- NTNU econ: 657 av ~1 013 lenker hentet. Marginalraten var lav, men resten finnes.
- UiA og HVL: crawlene traff sidetak med kø igjen.
- HiØ `ia.hiof.no` / `it.hiof.no`: mangler rotindeks, så flere åpne fagkataloger
  kan finnes via søkemotorspørringer.

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
   fikk 119.
10. **Scratchpad-rota har en `struct.py`** som skygger for standardbiblioteket
    og kræsjer ethvert Python-skript som kjøres derfra. Kjør fra en undermappe.

## Krav til enhver ny nedlastingsjobb

**Skriv manifest.** Uten `kilde_url` kan vi ikke skille et instituttarkiv fra
en ansatts personlige katalog, og det skillet er det bruksreglene hviler på.
Kolonner:

    emnekode,larested,filnavn,type,bytes,kilde_url,arkiv_url,hentet,type_kilde,kildestatus

- `type` = `oppgave` · `sensorveiledning` · `losningsforslag`. De tre er
  juridisk ulike og skal aldri slås sammen.
- `type_kilde` = `innhold` hvis verifisert mot PDF-teksten, ellers `filnavn`.
  ⚠ **Filnavn lyver i begge retninger:** i én runde var 276 filer som het
  «eksamen…» løsningsforslag, og 83 som het «…svar/los» var oppgavesett.
- `kildestatus` = tomt normalt, `nedtatt-hentet-fra-wayback` for materiale
  institusjonen har fjernet.
- Er du i tvil, la feltet stå **tomt**. En gjettet verdi er verre enn en tom,
  fordi den ser troverdig ut.

**Ikke last ned tredjeparts materiale.** Et arkiv som krypes automatisk, får
med seg det kursmaterialet lenker til — og det er ikke nødvendigvis
institusjonens eget. To lærebokkapitler (Cormen kap. 30, Bradley/Hax/Magnanti
kap. 9) slapp gjennom og ligger nå i `_KARANTENE-tredjeparts-laerebok/`.
Vitenskapelige artikler i `articles/`-mapper er samme sak.

## En korreksjon å arve

En tidligere rapport i denne økta oppga «45 sensorveiledninger for BEA200» hos
NHH. **BEA200 finnes ikke i arkivet i det hele tatt** — null treff i 4 634
CDX-rader. Det som faktisk finnes er 26 sensorveiledninger, hovedsakelig for
SAM100. Tallet ble gjentatt videre før det ble kontrollert; kontroller
agentrapporter mot data før de siteres.
