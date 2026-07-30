# Arkivrunden 30. juli 2026 — resultat

Utvidelse av eksamensarkivet fra ~2 800 til **15 475 filer**. Alt ligger i
`~/Desktop/Eksamner/_nedlastet-2026-07-30/`, bevisst adskilt fra det gamle
arkivet.

Se også `ARKIV-SORTERING-2026-07-30.md` (metoden) og
`BRUKSREGLER-ARKIV.md` (hva vi har lov til å gjøre med materialet).

## Resultatet

| mål | tall |
|---|---|
| Filer | 15 657 |
| Størrelse | ~6,2 GB |
| **Unike eksamensterminer** | **6 463** |
| Emner | 794 |
| Emner med ≥5 terminer med fasit | **190** |
| — herav ≥10 terminer med fasit | 99 |

Til sammenligning: vi har 15 bøker i dag.

## Hva som ble funnet hvor

| kilde | omfang |
|---|---|
| UiO SV-fakultetets samlearkiv (`sv.uio.no`) | 4 252 filer, 231 emner |
| NTNU utenfor matte/fysikk (econ, psykologi, biologi, kjemi, ISS, medisin, IDI) | 4 321 filer, 314 emner |
| NTNU mattewiki + Apache-arkiv | 1 938 filer, 15 emner |
| Andre læresteder (NIH, OsloMet, HVL, UiS, UiA, NMBU, HiØ) | ~2 300 filer |
| UiB Matematisk institutt | 320 filer |

## Det viktigste strukturelle funnet

**Norske læresteder har som regel ikke ett sentralt eksamensarkiv.**
Materialet ligger spredt på instituttarkiv, wikier, Liferay-portaler og —
i overraskende stor grad — **ansattes kurskataloger** på institusjonens
egen webserver, der katalogvisning tilfeldigvis er slått på.

Konsekvensen for framtidige runder: **å søke «tidligere
eksamensoppgaver» på hovednettstedet gir falske negativer.** Fire
læresteder så tomme ut på den måten, men hadde flere hundre sett hver på
`~brukerkataloger`.

Norges idrettshøgskole er unntaket som bekrefter regelen: ett sentralt,
velorganisert arkiv med 82 emner og 257 sensorveiledninger.

## Verifiserte negative funn

Disse er undersøkt grundig, ikke bare «ikke funnet»:

- **NTNU elektro (TFE/TTK/TTT/TET), maskin, bygg, TIØ, materialteknologi,
  bioteknologi** — ingen åpne arkiv. Bekreftet av IE- og IV-fakultetets
  egne indekser og ~400 direkteprober.
- **UiT** — arkivsidene er tomme legacy-webshop-sider; UiT *solgte*
  trykte oppgavesamlinger. Dagens arkiv ligger på SharePoint (403).
- **NHH** — sitemap på 10 711 URL-er, alle 548 emnesider og 615
  ansattsider skannet. Null sett. NHHs egne retningslinjer sier at
  sensorveiledninger legges i Canvas.
- **Nord universitet** — 186 691 arkiverte URL-er via Wayback CDX, 1 326
  eksamensrelaterte; hver eneste er reglement.
- **UiO MN-fakultetet** — publiserer i praksis ikke (kun MAT1105, KJM1101).

## Grenser vi traff

- **`TFY4115` er utharvet per aug 2020.** Nyere sett er ikke åpent
  publisert; de ligger bak Blackboard/Inspera.
- **`emnearkiv.ii.uib.no`** krever UiB-nett. Kan ikke nås herfra.
- **Fire sider svarte 200 med innloggingsskjema** — to STV-sett hos UiO,
  to hos SV, og `molbio.wiki.uib.no`. Avvist på innhold, ikke statuskode.
- **Fire filer svarte 401.** Ikke omgått.

## Åpne beslutninger

1. **Tre døde arkiv finnes bare i Wayback Machine** — NHHs `euro.nhh.no`
   (45 sensorveiledninger for BEA200), OsloMets `edu.hioa.no` (revisjon,
   årsregnskap, skatterett med sensorveiledninger), UiAs `old.uia.no`.
   Ikke hentet: materialet var åpent publisert den gangen, men å hente
   det fra et arkiv institusjonen selv har tatt ned er en annen sak.
2. **NHH-innsyn.** Som statlig høyskole er NHH omfattet av
   offentleglova, og eksamensoppgaver er journalførte dokumenter. Trolig
   eneste lovlige rute til MET/BED/SAM-sett. Krever en henvendelse.
3. **Rekjørbare haler:** NTNUs econ-arkiv (657 av ~1 013 lenker),
   biologi/IKB (~15 filer), UiA og HVL (fallende utbytte).

## Kvalitetsforbehold

- **2 964 filer har ingen tolkbar termin** og er ikke talt. Tallene er et
  gulv, ikke et tak.
- **4 137 filer mangler kilde-URL**, så bruksklassen deres er *antatt*,
  ikke avklart. Se kolonnen `bruksklasse_sikkerhet` i `INDEKS.csv`.
- **937 filer bærer en annen emnekode enn arkivet de lå i.** Som regel
  ikke en feil — NTNU har endret koder over tid — men listet i
  `KRYSSREFERANSER.csv` for menneskelig avgjørelse.
- **Typen er innholdsverifisert for 3 301 filer** (`pdf-verifisert`) og
  utledet av filnavnet for resten. Kolonnen `type_kilde` sier hvilken, og
  skiller også ut de 938 der et manifest oppga en type uten at innholdet
  avgjorde den. Skillet er ikke pedanteri: der innholdet FAKTISK ble
  lest, overstyrte det filnavnet i 359 tilfeller — 276 filer som het
  «eksamen…» var løsningsforslag, og 83 som het «…svar/los» var
  oppgavesett.
