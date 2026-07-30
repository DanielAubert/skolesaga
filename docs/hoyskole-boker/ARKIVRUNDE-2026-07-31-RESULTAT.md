# Arkivrunden 31. juli 2026 — resultat

Fortsettelsen av `ARKIVRUNDE-2026-07-30-RESULTAT.md`, etter køen i
`ARKIV-NESTE-STEG.md`. To ting skjedde: arkivet ble større, og — viktigere —
det ble mindre gjettet.

## Kort

| | 30. juli | 31. juli |
|---|---:|---:|
| Filer | 15 978 | **18 482** |
| Eksamensterminer | 6 550 | **9 042** |
| Emner | 837 | **1 396** |
| Filer uten tolkbar termin | 3 054 | **2 360** |
| Filer med **innholdsverifisert** type | 3 301 (20,7 %) | **13 310 (72,0 %)** |
| Sensorveiledninger | 1 402 | **3 395** |
| Løsningsforslag | 4 270 | 3 706 |
| Terminer der vi har fasit | — | 4 903 av 9 042 |

Antallet sensorveiledninger er mer enn doblet uten at én eneste ny fil måtte
til for det: 1 993 av dem lå allerede i arkivet, feiletikettert av filnavnet
sitt.

## Det som ble hentet — 2 498 filer

| Kilde | Filer | Merknad |
|---|---:|---|
| UiO IFIKK (FIL, KUN, ANT, IDE, EST) | 853 | 148 arkivmapper i 110 av 245 emner |
| UiO ILOS (ENG, FRA, TYSK, SPA, RUS, BKS …) | 717 | 236 arkivmapper i 178 av 248 emner |
| UiO ILN | 499 | Hele samlearkivet: 122 mapper i 12 fagområder |
| UiO IKOS (ARA, JAP, KIN, REL, KULH …) | 253 | 129 arkivmapper i 120 av 180 emner |
| NTNU econ — halen | 78 | 84 uhentede lenker; halen var mindre enn antatt |
| UiO IAKH | 60 | HIS2xxx/HIS4xxx; forrige runde tok bare 1.-semesteremnene |
| UiO EXPHIL03 + EXFAC03-familien | 38 | Ni emner et mønster hadde hoppet over — se under |

### Tre publiseringsmønstre, tre framgangsmåter
- **ILN** har ett samlearkiv for hele instituttet, to nivå ned
  (`<fagområde>/<emnekode>/`). 122 mapper med dokument; forrige runde hadde
  hentet 7 av dem. Alt over 1000-nivå lå igjen.
- **IKOS, ILOS og IFIKK** har ingen indeks. Hvert emne har sin egen lille
  arkivmappe, og mappa heter noe forskjellig hver gang: `sensorrettleiingar`,
  `grading-guidelines`, `Eksamensoppgaver`, `sensorveiledninger`,
  `Previous exams and assessment guidelines`. Alle 673 emnene ble derfor
  prøvd, ikke lest av en indeks.
- **IAKH** har én indeksside med 33 emnemapper.

⚠ IAKH-arkivet ligger under to stier: `/emner/hf/iakh/…` og
`/program/historie/Tidligere%20eksamensoppgaver…`. Innholdet er identisk —
Vortex serverer samme mappe under et programalias. Krypes begge, dobles alt.

## Det som ble rettet

### Filtypene leses nå ut av dokumentet, ikke ut av navnet
`klassifiser-arkiv.py` kjører pdftotext (og `textutil` for Word og HTML) på
førstesidene av hver fil og avgjør typen ut fra teksten. Andelen filer med
verifisert type gikk fra 20,7 % til 72,0 %.

Det flytter filer inn i **sensorveiledning**-kategorien i hundretall — de
fleste fra «løsningsforslag». Det er ikke en kosmetisk endring:
sensorveiledning fra en offentlig institusjon kan hostes lovlig, tredjeparts
løsningsforslag kan det ikke, og bøkene bygger på «hva premierer sensor?»
framfor «hva er svaret?».

Klassifiseringen er **konservativ i den retningen den er svakest**. De tre
dokumenttypene inneholder hverandre: et løsningsforslag gjentar hele framsida
av oppgavesettet, og en sensorveiledning inneholder gjerne fasiten — UiOs
ECON1710 H2015 åpner bokstavelig med «"FASIT" PÅ STIKKORDS FORM» og er
like fullt instituttets publiserte sensorveiledning. Derfor godtas en
omklassifisering bare når det nye ordet er mer spesifikt enn den gamle
gjettingen. Uten den regelen gjorde en stikkprøve fire løsningsforslag om til
oppgavesett og én sensorveiledning om til et løsningsforslag.

Prisen er kjent: oppgavesett som ER feilnavngitt («…svar.pdf») blir ikke
rettet. Da står den gamle gjettingen — fortsatt synlig som gjetting i
`type_kilde`. Det er sant, og det er billigere enn et feil stempel.

Rundt 1 100 PDF-er er skannet uten tekstlag og kan ikke verifiseres slik.

### Terminen hentes fra arkivsidas egen lenketekst
NTNUs institutt-arkiv merker hver lenke med terminen, mens fila selv heter
`1011.pdf`. **607 av 948 econ-filer sto uten termin** i indeksen mens sida
oppga terminen for hver eneste én. Etter kjøringen: 56.

Det betyr noe fordi `TERMINER.csv` er grunnlaget for «N av M sett»-påstandene
i bøkene. En fil uten termin teller ikke.

Terminen fra lenketeksten er **siste utvei, ikke første**: `SØK1011_V23_EXAM_
RESIT.pdf` er lenket opp under «H23» (kontinuasjonseksamen høsten etter).
Begge er sanne, og filnavnet er nærmere dokumentet enn lenketeksten er, så
filnavn og kilde-URL får fortsatt forrang.

Samme metode virket på psykologi (322 filer) og ISS (106). Den virket **ikke**
på biologi og IKB, som legger terminen i en tabellkolonne framfor i lenka.

### Sesongen som forsvant i det første treffet
A/B-kontrollen av terminendringen ovenfor avdekket en eldre feil i
`finn_termin`: 34 filer MISTET en termin. De fleste var riktige (sorteringen
lar være å lage en syntetisk «år uten sesong»-termin når emnet alt har en ekte
termin det året — ellers dobbelttelles samme eksamen), men de førte til et
spørsmål: hvorfor sto `0_Sensorveiledning SØK1000 V2024.pdf` uten sesong i det
hele tatt?

Fordi emnekoden `SØK1000` ikke står i kode-regexen, så «k1000» ble lest som
«kont år 1000», forkastet som umulig — og `re.search` gir bare det FØRSTE
treffet, så «v2024» lenger ute i navnet ble aldri prøvd. Koden gikk videre til
neste MØNSTER framfor til neste TREFF. Fila endte med år 2024 og ingen sesong,
og festet seg dermed ikke til terminen 2024V: `TERMINER.csv` sa
«har_fasit = nei» selv om fasiten lå i mappa.

Rettet med `finditer` framfor `search`. **120 filer fikk en sesong de ikke
hadde**, og «resit»/«deferred» er lagt til som engelske former av
«kontinuasjon» — `SØK1011_V23_EXAM_RESIT.pdf` er høstens kontinuasjonseksamen,
ikke en andre fil på vårterminen.

## Nye verktøy

| skript | gjør |
|---|---|
| `finn-arkivmapper.py` | Kryper et samlearkiv nedover og skriver kildeliste. |
| `probe-emnearkiv.py` | Prøver hvert emne for seg når det ikke finnes noen indeks. To innganger: les emnesida, og prøv kjente mappenavn direkte. |
| `klassifiser-arkiv.py` | Leser type ut av dokumentteksten. Skriver beviset sitt i en egen kolonne. |
| `termin-fra-lenketekst.py` | Henter emnekode og termin fra arkivsidas HTML når filnavnet ikke bærer dem. |

`last-ned-eksamener.py` tar nå `MAAL=`, `KILDER=`, `MANIFEST=` og `PAUSE=`
fra miljøet. `sorter-arkiv.py` lar innholdsverifisert type vinne fordi den er
verifisert — ikke fordi `glob()` tilfeldigvis kom til den sist — og godtar
`termin` fra manifestet.

## Tre feil som gjorde arbeid usynlig framfor å feile

Alle tre ble funnet under kjøringen, og alle tre er av samme slag: skriptet
svarte «ferdig» mens materiale forsvant.

1. **Klassifikatoren skrev manifestet med `w`.** Standardkjøringen går bare
   gjennom filer som ikke alt er verifisert. Andre kjøring skrev 2 551 rader
   og slettet de 7 458 fra første — de filene ville blitt gjettinger igjen ved
   neste sortering, uten at noe sa fra.
2. **Emnekode-mønsteret krevde fire siffer.** EXPHIL03 og hele
   EXFAC03-familien har to. Ni emner ble hoppet over uten spor i loggen, og
   ett av dem var EXPHIL03 — som denne kodebasen har lærebok for. Alene har
   det emnet 137 dokumenter.
3. **Mappekryperen utelot rota fra treffene.** Feil for arkiv uten
   undermapper: EXPHIL03-arkivet har 87 dokumenter rett i rota, og skriptet
   meldte «0 mapper med dokument».

## Andre feller funnet denne runden

Tillegg til lista i `ARKIV-NESTE-STEG.md`:

- **Samme arkiv, to stier** (IAKH, se over).
- **Stiene er kasussensitive.** `ENG2515/Eksamensoppgaver/` svarer 200,
  `ENG2515/eksamensoppgaver/` svarer 404 — og begge formene finnes, på hvert
  sitt emne. Å gjette kasus gir 404; begge må prøves.
- **Arkivet er ikke alltid lenket fra emnesida.** IKOS' JAP1501 har et arkiv
  på `/grading-guidelines/` som emnesida ikke nevner med et ord. En hentar som
  bare følger lenker finner det aldri.
- **«Nærmeste kode før lenka» er feil regel.** Overskriftene lyder «SØK1000
  Innføring i samfunnsøkonomi - nedlagt emne, blitt til SØK1021 og SØK1022».
  Regelen ga 162 av 844 filer feil emne. Emnet blokka handler om står
  **først**; resten er merknader.
- **Filnavnet lyver også om sensorveiledninger.** «SENSURveiledning» med u er
  NTNU-psykologiens skrivemåte, og et mønster som krever «sensor» går forbi.

## Kontroller som ble kjørt

- `sorter-arkiv.py --selvtest`: 0 av 48 saker feilet, etter hver endring.
- Kodene `termin-fra-lenketekst.py` leser ut av sida ble holdt opp mot mappa
  filene allerede lå i, utledet av et helt annet skript fra filnavnet: econ
  889 av 904, psykologi 321 av 321, ISS 106 av 106. Første versjon av regelen
  traff 682 av 844 — den forskjellen er hele grunnen til at regelen ble
  skrevet om.
- Omklassifiseringene som flytter en fil fra «løsningsforslag» til
  «sensorveiledning» — de som endrer juridisk klasse — ble stikkprøvd mot
  dokumentteksten. 12 av 12 riktige.
- De 2 498 nye filene ble skannet for tredjeparts materiale (lærebokkapitler,
  artikler, kompendier). Ingen treff; de fire navnene som slo ut, slo ut på
  «bok» inni «bokmal».
- **A/B-kjøring av terminendringen**: hele arkivet sortert to ganger, med og
  uten manifest-terminene, og INDEKS.csv sammenliknet fil for fil. 846 filer
  fikk en termin de ikke hadde; ingen fikk en eksisterende termin overskrevet.
  De 34 som mistet en «U»-termin, mistet den til sorteringens egen regel mot
  dobbelttelling — og ett av dem førte til at sesongfeilen over ble funnet.
