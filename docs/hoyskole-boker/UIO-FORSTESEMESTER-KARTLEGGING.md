# UiO 1. semester — komplett kartlegging og dekning

Studieløpene er målt 30. juli 2026 mot UiOs egne programsider. **Kildegrunnlaget
er målt på nytt 31. juli 2026**, etter at eksamensarkivet ble utvidet, og med et
script som kan kjøres om igjen:

```bash
python3 scripts/hoyskolebok/mal-forstesemester.py            # mål og skriv til JSON
python3 scripts/hoyskolebok/mal-forstesemester.py --torrkjor # bare vis
```

## Metode

Alle **67 bachelorprogrammer** og **5 profesjonsstudier** som tar imot ferske
studenter, hentet fra `uio.no/studier/program/<slug>/oppbygging/`. Programmer med
studieretninger som har ulikt 1. semester er ført som separate løp — det gir
**104 løp** og **136 unike emner**.

**Anbefalt studieløp, ikke undervisningssemester.** Et emne kan undervises om
høsten uten å ligge i 1. semester; 3. og 5. semester er også høst. Dette var
allerede dokumentert som fallgruve 25. juli, og kartleggingen bekreftet den:
`historie` har for eksempel *ikke* exphil i 1. semester, den ligger i 2.

⚠ **Studiepoeng ligger i `colspan`, ikke i teksten.** En agent leste HTML-tabellen
direkte i stedet for å stole på sammendrag, og fanget tre feil som ellers hadde
gått gjennom: psykologiemnene er 5 sp (ikke 10), `PED1001` er 20 sp, og
medievitenskaps tabell fyller bare 20 av 30 sp i UiOs egen HTML.

**Grunnlaget måles i eksamensterminer, ikke filer.** Bokmål, nynorsk og engelsk
er tre filer av samme eksamen. Hele `~/Desktop/Eksamner` er med: den indekserte
høstingen `_nedlastet-2026-07-30/` (26 975 filer, målt via `TERMINER.csv`) *og*
de eldre institusjonsmappene (`UiO/`, NTNU, USN, OsloMet m.fl., 13 000+ filer,
målt på filnavn fordi de ikke har indeks). De eldre mappene ga et reelt tillegg:
`MAT-INF1100` finnes *bare* der, og `PSY1250`, `PSYC1220`, `STV1010`, `IN1140`,
`FIL1005` og `PSYC1230` fikk påfyll derfra.

## Dekning per 6. august 2026

| kildegrunnlag | emner | andel |
|---|---|---|
| Ferdig bok | **23** | **17 %** |
| Solid grunnlag (≥5 eksamensterminer), ingen bok | 31 | 23 % |
| Tynt grunnlag (2–4 terminer) | 20 | 15 % |
| Svært tynt (0–1 termin) | 20 | 15 % |
| Ingen kilder i det hele tatt | 42 | 31 % |

**113 av 136 emner mangler bok.** Av dem er **31 byggeklare nå** (solid
grunnlag), 20 har tynt grunnlag, og **62 kan ikke bygges kalibrert** med
dagens arkiv.

| mål | bok i dag | bok + solid | + tynt |
|---|---|---|---|
| Løp der ALLE 1.-semesteremner er dekket | 11 av 103 (11 %) | 23 (22 %) | 38 (37 %) |
| Løp der minst ett emne er dekket | 70 (68 %) | 87 (84 %) | 93 (90 %) |

⚠ **Størst uttelling per bok: EXFAC03-familien.** Fire varianter mangler —
`EXFAC03-SPR` (6 rader), `-HARK` (4), `-NORD` (3), `-EAST` (2).

**Rekkevidden er 12 UNIKE studieløp, ikke 15.** Radsummen er 15, men
«Nordiske studier» ligger i både SPR og NORD, og to rader er studieretninger
innenfor samme program. Tell unike programnavn, ikke rader — samme
dobbelttellingsfelle som «6 av de 9 settene» i inter1000.

⚠ Og de fire er IKKE varianter av samme emne. De deler emnekodefamilie og
rollen som obligatorisk examen facultatum, men innholdet er fire ulike fag:
SPR er fonetikk og fonologi, HARK er humanioras idéhistorie, NORD er nordisk
språk og litteratur, EAST er Øst-Asia som region. `SVEXFAC03`- og
`JFEXFAC04`-kontraktene er FORMMAL, ikke innholdskilder.

⚠ `HON1000` treffer 10 løp, men har **null kilder** i arkivet.

## Dekning per 31. juli 2026 (historisk)

| kildegrunnlag | emner | andel |
|---|---|---|
| Ferdig bok | 15 | **11 %** |
| Solid grunnlag (≥5 eksamensterminer), ingen bok | 39 | **29 %** |
| Tynt grunnlag (2–4 terminer) | 20 | 15 % |
| Svært tynt (0–1 termin, løse enkeltfiler) | 20 | 15 % |
| Ingen kilder i det hele tatt | 42 | 31 % |

**Byggegrunnlag = bok + solid: 54 emner = 40 %.** Med tynt grunnlag: 74 = 54 %.

Målt på studieløp i stedet:

| mål | bok i dag | bok + solid | + tynt |
|---|---|---|---|
| Løp der ALLE 1.-semesteremner er dekket | 10 av 103 (10 %) | 23 (**22 %**) | 38 (37 %) |
| Løp der minst ett emne er dekket | 64 (62 %) | 87 (**84 %**) | 93 (90 %) |

**Spriket mellom 11 % og 62 % på dagens bøker er `EXPHIL03`.** Det ene emnet
ligger i 1. semester i **36 av 104 løp**. Det drar «minst ett emne» kraftig opp
uten å dekke noe annet studenten trenger. `MAT1100` (16 løp) og `IN1900` (14) er
nummer to og tre — alle tre er dekket, så prioriteringen fra 25. juli traff.

## Hva utvidelsen av arkivet ga

Målingen 30. juli ga 15 bøker + 23 skrivbare emner = et tak på 28 %. Etter
utvidelsen er det **15 + 39 solide = 40 %**, og 54 % om tynt grunnlag teller med.
Det skrivbare grunnlaget er mer enn doblet.

⚠ **Tre av de gamle 23 var falske positiver.** `BIOS1110`, `SVEXFAC` og
`FARM1110` ble talt som «har kilder» fordi mappa fantes i `Eksamner/UiO/` — men
mappene er *tomme*, med undermappene `eksamen/ fasit/ losningsforslag/
sensorveiledning/ utsatt/` og null filer. De står nå som «ingen kilder».
Målescriptet teller derfor filer, aldri mapper.

⚠ **`_sortering/` er ikke en selvstendig kilde.** Den ser ut som 14 442 filer,
men 14 439 av dem er symlenker inn i de andre mappene. Talt med hadde alt blitt
dobbelttalt. Scriptet hopper over den og alle symlenker.

⚠ **Noen eksamener gjelder to emnekoder samtidig.** `psy1250_psyc1220-2019h.pdf`
er eksamen for både `PSY1250` og `PSYC1220`. Første versjon av målescriptet
krediterte bare den ene, og da falt `PSY1250` fra 13 filer til 2 og byttet nivå.
Verre: koden itererte over et `set`, så Pythons tilfeldige hash-rekkefølge
avgjorde hvem som tapte — tre kjøringer mot *samme* arkiv ga tre ulike
fordelinger. Nå krediteres alle emnekoder som står i stien, og kjøringen er
deterministisk. **Kjør målingen to ganger og sammenlikn før du siterer tall.**

## De 39 med solid grunnlag som ikke er skrevet

**10 har allerede ferdig skjelett** og kan bygges direkte: `SGO1001` (36
terminer), `UTV1000`, `INTER1000`, `STV1200`, `PSYC1202`, `STV1400`, `SOSANT1050`,
`SOS1004`, `IN1140`, `MAT-INF1100`.

Størst breddeeffekt blant dem uten skjelett, sortert på antall studieløp:

| emne | løp | terminer | hva det er |
|---|---|---|---|
| `EXFAC03-SPR` | 6 | 6 | Examen facultatum, språkvitenskap |
| `SVEXFAC03` | 5 | 22 | Examen facultatum, samfunnsvitenskapelig |
| `EXFAC03-HARK` | 4 | 6 | Examen facultatum, historie/arkeologi |
| `EXFAC03-NORD` · `STV1010` | 3 | 6 · 5 | nordisk exfac · politisk analyse |
| `FIL1005` | 2 | 18 | Filosofihistorie frem til 1800 |
| `LING1111` · `PSY1200` · `EXFAC03-EAST` · `NFI1100` · `KIN1500` · `MUS1445` · `SOS1100` | 2 hver | 5–9 | |
| `NOR1300` · `PSYC1100` · `SGO2500` | 1 hver | 26–29 | dypest arkiv av alle uskrevne |

**Examen facultatum er nå det største enkeltgrepet.** `EXFAC03-SPR`,
`SVEXFAC03`, `EXFAC03-HARK` og `EXFAC03-NORD` dekker til sammen 18 løp, og alle
fire har nå solid grunnlag — i juli-målingen hadde bare `SVEXFAC03` kilder. Samme
emnetype som exphil: obligatorisk innføring, mange studenter, lite konkurranse
fra forlagene.

## Hva som fortsatt ikke kan skrives

42 emner har ingen kilder overhodet. De største:

| emne | løp | hva det er |
|---|---|---|
| `HON1000` | 10 | Honours-programmets fellesemne |
| `KONS1000` | 3 | Introduction to conservation and collection care |
| `GEO1100` · `KFL1010` · `PSY1301` | 2 hver | jordens utvikling · kjønnsstudier · kognitiv psykologi |

`HON1000` alene er 10 løp og det klart største enkelthullet. Farmasi
(`FARM1100/1110/1120`), biovitenskap (`BIOS1101/1110/1150`) og de fleste
språkemnene (`RUS1001`, `SPA1111`, `LAT1001`, `HIN1010`) har heller ingenting.

De 20 med «svært tynt» grunnlag — 1–3 løse filer, oftest én sensorveiledning —
er ikke nok til en eksamensrettet bok. Blant dem `MØNA1000`/`MØNA1505` (3 løp
hver), `ARK1000`, `ARA1010`, `JAP1010`, `KIN1010`, `TYR1010`, `TFEXFAC03` og
`UVEXFAC10` (2 løp hver). De er de billigste å løfte hvis arkivet utvides igjen:
emnene finnes, det er bare årganger som mangler.

**Taket er 54 % emnedekning** med dagens arkiv, og 40 % om vi holder oss til
solid grunnlag. Vil du forbi det, må arkivet utvides — ikke bøkene skrives
raskere.

## Forbehold

Fire programmer i tallene er **nedlagte** og tar ikke imot nye studenter: `aas`,
`matematikk-informatikk`, `matematikk-okonomi` og `nordisk`. `MAT-INF1100` er
også nedlagt som emne. Den reelle dekningen er marginalt bedre enn tallene viser.

`euram` og flere språkprogrammer har nesten bare valgfrie emner i 1. semester —
italiensk og spansk har ingen fast emnekode i det hele tatt. De kan ikke dekkes
med ett emne uansett hvor mye vi skriver. Slike valgfrie slots er holdt utenfor
de 136 emnene.

**Dette er 1. semester, ikke hele første studieår.** 2. semester er ikke
kartlagt.

Terminanslaget for de eldre, uindekserte mappene leses av filnavnet og er
grovere enn `TERMINER.csv`. Det brukes bare der indeksen ikke rekker, og kan
underestimere for filer uten årstall i navnet.

Rådataene ligger i `docs/hoyskole-boker/uio-forstesemester.json` under
`maaling.emner` — én rad per emne med `lop`, `terminer`, `filer` og `niva`.
