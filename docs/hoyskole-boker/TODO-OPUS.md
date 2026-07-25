# TODO: Bokbygging med Opus — bare å sette i gang

Alt her er forberedt slik at en Opus-økt kan bygge én bok om gangen uten
forarbeid — og uten kvalitetssikring i etterkant: kvalitetsdommene ligger i
skjelettkontraktene, de ferdigskrevne promptene og de deterministiske
portene. **Kickoff per fag = lim inn denne ene setningen i Claude Code
(repo-rot), med fagets id:**

> Bygg boka for `<emne>` ved å følge docs/hoyskole-boker/BYGGEPLAN-MAL.md
> steg 0–4 MEKANISK (rammeverk: docs/hoyskole-boker/`<emne>`/). Bruk Opus på
> alle agenter, maks 2 samtidige, og gå aldri videre forbi en rød port.

Erfaringstall per bok (fra econ1310/jus1111): ~9 byggeagenter + wiring +
4–5 verifikatorer; med maks 2 samtidige ≈ 4–6 timer veggklokke, mest venting.
Bøkene er uavhengige — rekkefølgen under er anbefalt prioritet (størst
studentvolum + sterkest rammeverk først), men plukk fritt.

## PRIORITET: UiO BACHELOR, 1. SEMESTER (produkteier 25. juli 2026)

**Skjerpet fokus samme dag:** prioriteten er **UiO bachelor, 1. semester**. Det
tar `nokut-afb` (nasjonal sykepleieeksamen, ~6 000 kandidater) og `tdt4110` (NTNU,
~1 375 plasser) ut av toppen selv om de har størst volum — de er ikke UiO-bachelor.
Tier 1-tabellen under er derfor delt: UiO-bachelor-emnene først, resten som
reserve når UiO-listen er tom.

**UiO bachelor 1. semester, i volumrekkefølge:** `in1000` (~800) · `in1020` (~800)
· `in1900` (≥250, 🔄 under bygging) · `econ1100` (≥215, 🔄 under bygging) · `sos1004` (~140) ·
`fys1100` (~120) · `sosant1000` (91) · `fil1001` (59) · `ling1100` (40).
Alt bygget fra før i denne kategorien: `exphil03`, `jus1111`, `mat1100`, `econ1210`.

En komplett kartlegging av ALLE UiO-bachelorprogrammenes 1. semester er under
arbeid — inkludert hullene der vi ikke har materiale i det hele tatt. Den blir
den nye kilden for denne lista.

## Tidligere prioritetsnotat: 1.-semesteremner generelt

**Regel:** emner studentene tar i sitt FØRSTE semester bygges først. Innenfor
gruppa sorteres det etter studentvolum. Førstesemesterstudenten trenger boka mest
og har minst alternativer, og emnene er oftest obligatoriske for hele kull.

**Belegg:** semesterplasseringen under er verifisert 25. juli 2026 mot lærestedenes
emnesider OG programmenes anbefalte studieløp — undervisningssemester alene holder
ikke, siden 3. og 5. semester også er høst. Skjelettenes «Studieløp»-felt er lesevei
gjennom boka, ikke semesterplassering.

### Tier 1 — 1. semester, ferske studenter (bygg i denne rekkefølgen)

| # | Emne | Lærested | Volum | Merknad |
|---|---|---|---|---|
| 1 | `nokut-afb` | Nasjonal (13 inst.) | **~6 000 kandidater/år** | Eneste reelle kandidattall i lista (NOKUT). 1. sem. ved alle sjekkede sykepleierutdanninger |
| 2 | `tdt4110` | NTNU | ~1 375 plasser | Obligatorisk 1. sem. i 14 program. **NB:** de datatunge bruker søsterkoden TDT4109 med identisk navn — boka bør adressere begge |
| 3 | `in1000` | UiO | ~800 plasser | 1. sem. i fem IFI-bachelorprogram + informatikk-årsstudium (199) og maskinlæring/KI (80) |
| 4 | `in1020` | UiO | ~800 plasser | Samme kull som IN1000 — to bøker mot samme ferske studenter |
| 5 | `med1100` | UiO | 275 plasser | Alle nye medisinstudenter, to kull i året. Modulen spenner 1.–2. sem. |
| 6 | `in1900` | UiO | ≥250 plasser | 🔄 UNDER BYGGING (30/35 kap. per 25. juli). Realfagsprogrammene + lektor + honours |
| 7 | `econ1100` | UiO | ≥215 plasser | 🔄 UNDER BYGGING (7/37 kap. per 25. juli, oppdrag B1 ferdig). Fem økonomiprogram |
| 8 | `sos1004` | UiO | ~140 plasser | Bachelor + årsstudium sosiologi |
| 9 | `fys1100` | UiO | ~120 plasser | 1. sem. i Fysikk og astronomi + Elektronikk/IT |
| 10 | `sosant1000` | UiO | 91 plasser | NB: emnet har byttet tittel til «Antropologisk samfunnsanalyse» — bruk begge navn i SEO |
| 11 | `fil1001` | UiO | 59 plasser | Bachelor filosofi |
| 12 | `ling1100` | UiO | 40 plasser | Bachelor lingvistikk |
| 13 | `oslomet-mat1000` | OsloMet | 70 + 110 plasser | **Delvis:** 1. sem. for maskin/elektro, 1.–2. for bygg/energi, men **2. sem. for dataingeniør** (den største gruppa) |

### Tier 2 — 1. semester i et 2-årig MASTERprogram (annen målgruppe)

Ikke ferske studenter, men fortsatt «første semester» i sitt løp:
`nokut-barnevern` (~300–400 kandidater/år), `econ4310` (~115 plasser),
`tdt4120` (66 plasser i MITK; 3. sem. i BIT), `tdt4136` (85+ i MIDT/MSIT; 5. sem. i BIT).

### Tier 3 — senere semestre

Alt annet i listene under. To bøker som alt er bygget lå her (`econ2130` 2. sem.,
`fys1120` 3. sem.) — steg 0 for dem er ferdig og gyldig, men kapasiteten går til
Tier 1 først.

### ⚠ UTGÅTTE EMNER — IKKE BYGG. Arkivet beholdes for etterfølgeren.

Verifisert 25. juli 2026 mot emnesider og programplaner. **Ingen av disse skal
bygges som egen bok.** Arkivene beholdes, fordi de kan bære etterfølgeremnet — men
gjenbruken er betinget, og «direkte feil»-kolonnen er viktigere enn gjenbruksgraden.

| Emne | Etterfølger | Etterfølgerens semester | Gjenbruk | Det som er DIREKTE FEIL for etterfølgeren |
|---|---|---|---|---|
| `psy1000` (UiO, siste eksamen h2018, 20 sp) | **Ingen enkelt etterfølger.** Splittet: PSY1301 (5 sp) + PSY1250 (5 sp) + PSY1200 (10 sp); PSY1100 i 2. sem.; PSY2303 som 2000-emne | 1. semester (PSY1301/1250/1200) | **DELVIS** — arkivet MÅ splittes | Eksamensformen «6 t, 6 av 7, ingen hjelpemidler» finnes ikke lenger noe sted (etterfølgerne er 3 t; PSY1200 er semesteroppgave med KI-deklarering). Vårt HØYEST prioriterte tema — voksen- og alderdomsutvikling, 7 av 20 sett — er UTE av PSY1200s pensum. Freud og personlighetsforstyrrelser er ute av PSY1250. Ekman/universelle emosjoner er substansielt utdatert (Barrett et al. 2019). DSM-IV-innrammingen er foreldet (norsk praksis: ICD-10, ICD-11 under innføring). Sidereferansene i Del 1 peker på Teigen 1. utg.; PSY2303 bruker 2. utg. Del 0 og Del 11 er døde. Uten hjem: sansing/persepsjon (17 forekomster), psykiske lidelser, intelligensmåling |
| `kjm1110` (UiO, siste eksamen v2019) | **KJM1111 Organisk kjemi I** (UiO sier det ordrett) | 2. semester i kjemi-biokjemi | **HØY** — 4 søyler i 100 % av settene treffer læringsutbyttet, og eksamensrammene er uendret (4 t, molekylbyggesett) | Overlappet er bare **7 av 10 sp**. UiO advarer selv om pensumdrift etter flere lærebokbytter. Læreboka er byttet til norsk (Diesen & Sandtorv 2019) — men den kilden gjelder V2022, gjeldende pensum er USIKKER. Labkurset utvidet fra 38 t/6 øvelser til 48 t/8 øvelser. Arkivet mangler siste sett (V2019), og det finnes 0 KJM1111-sett |
| `sos1120` (UiO, nedlagt 2019) | **SOSGEO1120 Kvantitativ metode** (fullt 10 sp overlapp; kun kodeskifte, undervisningsopplegget videreført) | 2. semester i sosiologi bachelor + årsstudium | **HØY — UiO publiserer selv SOS1120-settene på SOSGEO1120s oppgaveside** | **Programvaren er byttet fra Stata til R/RStudio.** Det gjør `sos1120/SKJELETT.md` Del 9 «Stata i praksis» og §2d «Tolkningskontrakt og Stata-utskrift-format (AUTORITATIV)» feil, og feilen forplanter seg til alle regnekapitlene i Del 3–9: `Coef.`/`Std. Err.`/`P>\|t\|` skal være `Estimate`/`Std. Error`/`Pr(>\|t\|)`. Må skrives om til R før bygging. **Mulighet:** UiO har 8 SOSGEO1120-sett MED sensorveiledning (V2019–V2026) som arkivet vårt mangler helt |
| `tma4106` (NTNU, utgått, siste eksamen 19.05.2026) | **TMA4410 Matematikk 2A** (lin.alg + ODE + rekker) | 2. semester i MTTK | **LAV** for `tma4101`-arkivet (som er der TMA4106-analysen faktisk ligger — ikke i `tma4106/`): arkivet er 100 % flervariabel kalkulus, 0 treff på Fourier/ODE/egenverdier. `tma4110`-boka er DELVIS brukbar | `fagprofil/tma4101.json` og `tma4110.json` påstår «kode E, ingen hjelpemidler» — TMA4410 er **kode D med kalkulator**. Flervariabel/vektoranalyse ligger nå i TMA4411/TMA4420, ikke i TMA4410. Kompleks funksjonsteori er ute |
| `sok1002` (NTNU SØK1002, erstattet h2024) | **SØK1023 Mikroøkonomisk analyse** | 2. semester (vår) i BSØK — men kilden er studieår 2024/25, bør reverifiseres | **DELVIS**: kjerneteorien HØY, eksamensformen LAV | Arkivet bygger på **4 t, kode C, med formelsamling**; SØK1023 er **3 t, kode H, ingen hjelpemidler** — både tidsbudsjettet og all trening i formelsamlingsbruk er gal. **Generell likevektsteori er nytt pensum med null arkivbelegg**, og skjelettets 29 kapitler har ingen GE-søyle. Monopol-utelatelsen er en risiko: emnebeskrivelsen sier eksplisitt at monopol analyseres. **NB: navnekollisjonen med UiTs SOK-1002 er reell, men UiT-emnet er OGSÅ nedlagt** (siste eksamen vår 2026) |

**RETTELSE av mitt eget flagg:** `tma4135` sto oppført som «borte fra NTNUs
2025-/2026-planer». **Det er feil.** Emnet undervises høst 2026 med ordinær eksamen
04.01.2027, kode C, og faglig innhold ordrett identisk med 2024. Boka er byggeverdig
som den er. Emnet er likevel i utfasing for nye kull (MTKOM har TMA4432 i stedet fra
kull25), og etterfølgerne TMA4431/TMA4432/TMA4420/TMA4430 er **alle kode D uten
hjelpemidler** — det knekker analysens bærende premiss om at «formelarket er alltid
tilgjengelig», så en bok profilert mot 44xx-serien må bygges om, ikke bare merkes.

### HULLENE i UiO 1. semester — emner uten noe materiale i repoet

Kartlagt 25. juli 2026 mot alle UiO-bachelorprogram. Dette er de største hullene,
altså emner som er 1. semester for hele kull der vi ikke har noe:

| Emne | Plasser | 1. semester i |
|---|---|---|
| **UVEXFAC10** Ex.fac., utdanningsvitenskapelig | ~421 | pedagogikk (241), spesialpedagogikk (180) |
| **SVEXFAC03** Ex.fac., samfunnsvitenskapelig | ~372 | psykologi, sosiologi, samfunnsgeografi, utviklingsstudier, honours |
| **STV1010** Politisk analyse 1 | ~284 | statsvitenskap, årsstudium, offadm, honours |
| **HIS1000 + HIS1200** Innføring i historiefaget + Eldre historie | ~238 | historie (150), årsstudium (88), lektor |
| **PSY1301 + PSY1200** Kognitiv + utviklingspsykologi | ~226 hver | psykologi (174), årsstudium (52), honours |
| **ENG1100** English Grammar | ~218 | engelsk-årsstudium, euram/engelsk, lektor |
| **PED1001** Læring og undervisning (20 sp) | 241 | pedagogikk |
| **EUS1000** Innføring i fremmedspråkstudier | ~190 | fransk/italiensk/spansk/tysk-årsstudium, euram, lektor |
| **SPED1100 + SPED1200** | 180+ | spesialpedagogikk |
| **MAT1050** Matematikk for anvendelser 1 | ~160 | geologi, årsstudium-matematikk (R1-løpet), kjemi-biokjemi |
| **BIOS1101/1110/1150** | ~156 | biovitenskap (156), lektor biologi |

**Det største strukturelle funnet:** vi har bygget EXPHIL03, men **ingen** av de
ti andre EXFAC/EXPHIL-variantene finnes i repoet (SVEXFAC03, UVEXFAC10,
TFEXFAC03, EXFAC03-SPR/-HARK/-NORD/-EAST/-MVIT/-EST/-LIT). Til sammen godt over
1 500 plasser, alle 1. semester, samme sjanger som en bok vi allerede kan lage.

**Volumkorreksjon:** `in1000` og `in1020` er **~800 plasser hver**, ikke ~600 —
informatikk-årsstudium (199) og maskinlæring/KI (80) manglet i mitt anslag.

### Én kodeavklaring

`econ3120` er kodet på bachelor-koden (5. sem.). Masterens 1. semester har
tvillingkoden **ECON4120** — vil du treffe den målgruppa, er det den koden som
gjelder.

## A. Klare til bygging (rammeverk ferdig — bare kjør kickoff)

- [x] `exphil03` — **BYGGET (i main per 24. juli 2026, 34 kap).** EXPHIL03 Examen
      philosophicum (UiO). Størst volum av alle (obligatorisk for alle UiO-studenter).
- [x] `psy1010` — **BYGGET 11. juli 2026** (41 kap, 548 quiz, 520 fc, BOKPORT OK,
      4 verifikatorer grønne, prod-curl 9/9, kildegrunnlag-side). Hybrid drøfting/tall;
      stort kull. NB: hybrid-valgene står i skjelettets §2.
- [x] `econ1210` — **BYGGET 14. juli 2026** (41 kap, 545 quiz, 513 fc, BOKPORT OK,
      4 verifikatorer grønne, prod-curl 10/10, kildegrunnlag + markedskryss.svg).
      Regnefag; CORE-anleggs-
      modellen er bokstandard (IKKE standard produsentteori).
- [x] `tma4245` — **BYGGET (i main per 24. juli 2026, 44 kap).** TMA4245 Statistikk
      (NTNU). Størst NTNU-emne; eget Python/Monte Carlo-kapittel.
- [x] `fys1001` — **BYGGET 25. juli 2026** (35 kap + 7 prøver = 42 filer, 550 fc,
      558 quiz, 109 SVG i Storage, BOKPORT + LATEX-PORT OK). Steg 3 komplett:
      ~1 880 numeriske sjekker i 5 verifikatorbølger, 48 avvik rettet — bl.a. feil
      omløpsretning for ladd partikkel, en figur med fysisk umulig kraftretning,
      feil netto stråling (255 W), og 6 øvingseksamen-oppgaver som var ordrett
      identiske med gjennomregnede eksempler tidligere i boka.
- [x] `econ2310` — **BYGGET 25. juli 2026** (29 kap + 6 prøver = 35 filer, 542 fc,
      528 quiz, 54 SVG i Storage, BOKPORT + LATEX-PORT + FIGURPORT OK). Bygger videre
      på econ1310-boka. Steg 3 komplett: ~5 100 sjekker i tre verifikatorbølger,
      ~40 avvik rettet — bl.a. en hovedkursanalyse som påsto at kronestyrking kunne
      skåne både inflasjon OG lønnsomhet (K-sektors margin er uavhengig av kursen),
      en fasit som signerte en produksjonsvirkning som ikke kan signeres, tre
      figurer som motsa fasiten (én med «Renta stiger entydig» der renta er
      ubestemt), fire av åtte hendelser i prøve 3.B som var gjenbruk av
      gjennomregnede eksempler, og «fasit alltid kortest»-skjevheten (73 % i ett
      kapittel) fjernet ved å korte distraktorene.
- [x] `econ2220` — **BYGGET 25. juli 2026** (34 kap + 7 prøver = 41 filer, 554 fc,
      570 quiz, 53 SVG i Storage, BOKPORT + LATEX-PORT OK). Bygger på econ1210-boka;
      brokapittel CORE→c′(y) på plass. Steg 3 komplett: ~2 400 sjekker i tre
      verifikatorbølger, ~60 avvik rettet — bl.a. MTSB forvekslet med den inverse
      isokvanthelningen i fem tekststeder + figuretikett, et nedleggingsregnestykke
      som brukte GK-minimumsmengden i stedet for p = MK, et quizspørsmål der
      distraktoren også var faglig riktig, og 6 duplikat-datasett i Del 8 som var
      gjenbruk fra Del 1/4/5/6 (alle erstattet med nye tall og nye kontekster).
- [ ] `svmet1010` — SVMET1010 Kvalitative metoder (UiO). Drøfting; skjelettet
      var pilot og følger eldre headingformat — konverter number til
      del-basert i fase 5 (wiring-skriptet håndterer det, jf. jus1111).

- [x] `mat1100` — **BYGGET (i main per 24. juli 2026, 42 kap).** MAT1100 Kalkulus
      (UiO). To treningsformer (flervalg midtveis + langsvar slutteksamen).
- [ ] `econ2130` — ECON2130 Statistikk 1 (UiO). R-integrert (2025-regimet
      hands-on med CSV); metodesignalene bærer poengene.

- [ ] `econ3150` — ECON3150 Introductory Econometrics (UiO). Regnefag;
      kausalitet som akse, OVB-baklengs-drill, tospråklig begrepsbank
      (eksamen på engelsk).
- [ ] `jus1211` — JUS1211 Privatrett II (UiO). Jus; rettstilstandssjekk gjort
      i skjelettet (arveloven 2019, 15G-tak, hevdslova § 8). NB: fase 6 SKAL
      ha Lovdata-verifikatør — el. § 59/§ 61-leddstruktur er (verifiser)-merket.

- [ ] `fys1120` — FYS1120 Elektromagnetisme (UiO). Eget Python-spor (100 %
      siden 2018); «navngi loven» + symmetriargument er drillmål.
- [x] `mat111-uib` — **BYGGET (i main per 24. juli 2026, 41 kap; 549 def, 528 quiz,
      BOKPORT OK, prod-curl 13/13).** MAT111 (UiB). Åpen bok; difflikninger/Newton/Taylor.
- [x] `stk1100` — **BYGGET (i main per 24. juli 2026, 35 kap).** STK1100 (UiO).
      Pivotal-kjeden som ryggrad; ingen hypotesetesting/kombinatorikk (UiO-egenart).
- [ ] `in1900` **[1. sem]** — IN1900 (UiO). Kodefag-DNA (API-lister, kodesporing);
      ODESolver post-2023-signatur; rekursjon forbudt.
- [ ] `tdt4120` **[1. sem master]** — TDT4120 (NTNU). Kortsvars-presisjon («lange svar teller
      ikke positivt»); CLRS-standard; reduksjonsretning-drill.
- [ ] `met4-nhh` — MET4 (NHH). 2025-formen (6 t, R-del + regnedel);
      tidsrekker tungt; IV/DiD/RDD utelatt (aldri testet på skoleeksamen).
- [ ] `jus2111` — JUS2111 (UiO). Jus; rettstilstandssjekk gjort (§ 89-ordlyd
      2020, CRPD inkorporert 1.1.2026, derogasjon nedstemt). Fase 6 SKAL ha
      Lovdata-verifikatør.
- [ ] `sosant1000` **[1. sem]** — SOSANT1000 (UiO). Drøfting; etnografisk eksempellager
      per tema; monografikapittel ⚠ utgavesensitiv (sjekk pensumliste).

## C. Transje 2 — rammeverk FERDIG (klare til bygging, samme kickoff som A)

Prioritert etter studentvolum og materialstyrke:
- [ ] `nokut-afb` **[1. sem]** — Nasjonal deleksamen anatomi/fysiologi/biokjemi, sykepleie (87 filer; alle sykepleiestudenter i Norge)
- [ ] `oslomet-mat1000` **[1. sem]** — Matematikk 1000, ingeniør (OsloMet, 669 filer)
- [ ] `econ1100` **[1. sem]** — Matematikk I (UiO, 60 filer, SV)
- [ ] `econ1410` — Internasjonal økonomi (UiO, 45 filer, SV)
- [ ] `fys1100` **[1. sem]** — Mekanikk og modellering (UiO, 36 filer, SV)
- [ ] `mek1100` — Feltteori og vektoranalyse (UiO, 50 filer)
- [ ] `mat1110` — Kalkulus og lineær algebra (UiO, 26 filer)
- [x] `stk1110` — **BYGGET 24. juli 2026** (28 kap, 515 quiz, 505 fc, BOKPORT OK,
      5 verifikatorer grønne (~1100 sjekker, 2 regnekjeder + 12 desimalavvik rettet),
      prod-curl 9/9, kildegrunnlag-side, 9 SVG). Oppfølger til stk1100.
- [ ] `in1010` — Objektorientert programmering (UiO, 25 filer, SV)
- [ ] `in2010` — Algoritmer og datastrukturer (UiO, 34 filer, SV)
- [ ] `tdt4100` — Objektorientert programmering (NTNU, 45 filer)
- [ ] `tdt4145` — Datamodellering og databasesystemer (NTNU, 40 filer, SV)


## C3. Transje 3 — rammeverk FERDIG (klare til bygging, samme kickoff som A)

- [ ] `mat121-uib` — Lineær algebra (UiB, 110 filer)
- [ ] `tfy4125` — Fysikk (NTNU, 92 filer, SV)
- [ ] `tfy4115` — Fysikk (NTNU, 50 filer)
- [ ] `mat2200` — Grupper, ringer og kropper (UiO, 43 filer)
- [ ] `ma0301` — Elementær diskret matematikk (NTNU, 43 filer)
- [ ] `sos1120` **[⚠ UTGÅTT — etterfølger SOSGEO1120; Stata må byttes til R]** — Kvantitativ metode (UiO, 41 filer)
- [ ] `mat2400` — Reell analyse (UiO, 33 filer)
- [ ] `stv1020` — Politisk analyse 2: forskningsdesign/kvantitativ (UiO, 32 filer)
- [ ] `kj2050` — Analytisk kjemi grunnkurs (NTNU, 28 filer)
- [ ] `in1000` **[1. sem]** — Introduksjon til objektorientert programmering (UiO, 27 filer)
- [ ] `fil1001` **[1. sem]** — Innføring i metafysikk og bevissthetsfilosofi (UiO, 22 filer)

## C4. Transje 4 — rammeverk FERDIG (klare til bygging, samme kickoff som A)

- [ ] `mat112-uib` — Kalkulus II (UiB, 65 filer; oppfølger MAT111)
- [ ] `tfy4104` — Fysikk (NTNU, 55 filer; nær TFY4115)
- [ ] `psy1000` **[⚠ UTGÅTT — arkivet må SPLITTES på PSY1301/1250/1200]** — Innføring i generell psykologi (UiO, 42 filer)
- [ ] ~~`econ2200`~~ — NEDLAGT (siste V2018); pensum delt mellom ECON1100 + ECON2220, som begge har rammeverk. Skjelett droppet (redundant); analyse beholdt.
- [ ] `sok1002` **[⚠ UTGÅTT — etterfølger SØK1023; UiT-varianten også nedlagt]** — Mikroøkonomi (NTNU, 34 filer)
- [ ] `tma4135` **[AKTIV h2026 — mitt tidligere «utgått»-flagg var feil]** — Matematikk 4D (NTNU, 26 filer)
- [ ] `sos1004` **[1. sem]** — Innføring i sosiologi (UiO; SOS1001/SOS1000/SOS1003 nedlagt →
      etterfølger-profilert mot aktivt SOS1004, arkiv ~72 filer på tvers av
      forgjengerkodene). Rammeverk underveis (8. juli 2026).
- [ ] `kjm1110` **[⚠ UTGÅTT — etterfølger KJM1111, 7 av 10 sp overlapp]** — Kjemi (UiO, 22 filer)
- [ ] `in1020` **[1. sem]** — Introduksjon til datateknologi (UiO, 22 filer)
- [ ] `econ1220` — Velferd og økonomisk politikk (UiO, 22 filer)
- [ ] `psyc1201` — Sosialpsykologi (UiO, 17 filer)
- [ ] `sosant1090` — Antropologisk metode (UiO, 16 filer; AKTIVT — sensor-
      veiledning t.o.m. V2026). Rammeverk underveis (8. juli 2026).

## C5. Transje 5 — rammeverk FERDIG unntatt tdt4186-skjelett underveis (8. juli 2026; alle AKTIV-verifisert)

- [ ] `sos2200` — Organisasjon, ledelse og arbeid (UiO, 38 filer)
- [ ] `jus4111` — Metode og etikk (UiO, 22 filer; jus)
- [ ] `econ2500` — Investering og finansiering (UiO, 22 filer)
- [ ] `econ1910` — Poverty and Distribution in Developing Countries (UiO, 21 filer)
- [ ] `tdt4136` **[1. sem master]** — Introduksjon til kunstig intelligens (NTNU, 17 filer)
- [ ] `tdt4110` **[1. sem]** — Informasjonsteknologi grunnkurs (NTNU, 17 filer)
- [ ] `econ4310` **[1. sem master]** — Macroeconomic Theory (UiO, 16 filer)
- [ ] `tdt4171` — Metoder i kunstig intelligens (NTNU, 15 filer)
- [ ] `fys2140` — Kvantefysikk (UiO, 15 filer)
- [ ] `mat1120` — Lineær algebra (UiO, 12 filer)
- [ ] `in2060` — Digitalteknikk og datamaskinarkitektur (UiO, 12 filer)
- [ ] `tdt4186` — Operativsystemer (NTNU, 11 filer)

## C6. Transje 6 — analyse + skjelett underveis (8. juli 2026; status verifisert per fag)

- [ ] `jus2211` — Forvaltningsrett og EØS-rett (UiO, 22 filer; jus, AKTIV)
- [ ] `med1100` **[1. sem]** — Medisinstudiet modul 1 (UiO, 42 filer; AKTIV)
- [ ] `ttm4100` — Kommunikasjon: Tjenester og nett (NTNU, 32 filer; AKTIV)
- [ ] `met2910-bi` — Matematikk for økonomer (BI, 23 filer; AKTIV)
- [ ] `sok3500-bi` — Samfunnsøkonomi II (BI, 21 filer; AKTIV)
- [ ] `econ3120` — Mathematics 2 (UiO, 18+15 filer; AKTIV; «equivalent with
      ECON4120» — ett rammeverk dekker begge kodene)
- [ ] `econ3010` — Anvendt økonomisk analyse (UiO, 19 filer; AKTIV)
- [ ] `ttm4135` — Anvendt kryptografi og nettverkssikkerhet (NTNU, 27 filer; AKTIV)
- [x] `tma4111` → **BYGGET 24. juli 2026 som `tma4110`** «Lineær algebra, komplekse
      tall og differensiallikninger» (52 kap, 816 flashcards, 671 quiz, BOKPORT OK,
      steg 3 komplett: ~475 sjekker over alle 11 deler, 0 fasitavvik; build grønn
      11 023 kap, prod-curl 11/11). Arkiv TMA4110 196 filer; kodetilhørighet merket
      (NTNU-reformen spredte stoffet på TMA4101/4106/4111 — dokumentert i Del 0).
- [ ] `tma4106` **[⚠ UTGÅTT — arkiv ligger i tma4101/, etterfølger TMA4410]** — Matematikk 2 (NTNU; arkiv TMA4105 114 filer; ERSTATTET av
      TMA4106 — etterfølger-profilert)
- [ ] `tdt4237` — Programvaresikkerhet og personvern (NTNU, 13 filer; AKTIV)
- [ ] `ling1100` **[1. sem]** — Innføring i semantikk og pragmatikk (UiO, 13 filer; AKTIV)
- [ ] `econ4915` — Development Economics (UiO, 11 filer; AKTIV; bygger på econ1910)
- [ ] `econ4260` — Behavioral Economics (UiO, 10 filer; AKTIV)

Hoppet over (verifisert, dokumentert her så de ikke gjenåpnes): TMA4140
Diskret matematikk UTGÅTT → dekket av `ma0301`; TFY4102 ERSTATTET → dekket av
`tfy4104`; ECON3610 UTGÅTT uten etterfølger (econ2200-presedens). Kandidater
for transje 7: JUS3112 (arkiv JUS3111, 14), JUS4212/JUS4213 (arkiv JUS4211,
20, splittet etterfølger), TMA4121 (arkiv TMA4120, 47), resten av BI-porteføljen.

## C7. Transje 7 — analyse + skjelett underveis (8. juli 2026; sluttfører det vettede universet)

Mål: fullføre ALLE gjenværende fagbeskrivelse-vettede emner med brukbart arkiv.
Bygges (AKTIVE med ≥5 filer + høyverdi-etterfølgere):
- **Matte-reform-etterfølgere (NTNU):** `tma4121` (←TMA4120, 47 f). NB: NTNUs
  matematikkreform spredte innhold på tvers av koder, så de to store matte-
  arkivene er retargetet til det de FAKTISK inneholder (ikke kodeetiketten):
  - ⚠ `tma4106` → bygget som `tma4101` «Flervariabel kalkulus og vektoranalyse»:
    TMA4105-arkivet (114 f) er 100 % flervariabel/vektoranalyse; reformen la det i
    TMA4101 Matematikk 1, mens TMA4106 tester ODE/Fourier/kompleks (annet pensum).
  - ⚠ `tma4111` → bygget som `tma4110` «Lineær algebra, komplekse tall og
    differensiallikninger»: TMA4110-arkivet (196 f) er lin.alg + elementære
    komplekse tall + ODE; dagens TMA4111 (vektorkalkulus/PDE) dekkes av tma4101 +
    tma4135. Arkivet fikk ærlig, arkivbelagt hjem under sitt gamle innhold.
  - Begge har kodetilhørighet merket (verifiser); TMA4106/TMA4111s greenfield-
    pensum (ODE/Fourier hhv. vektorkalkulus/PDE-som-eget-emne) HOPPET OVER —
    krever egne post-reform eksamenssett (ikke i arkivet); dekkes delvis av
    tma4101/tma4135/tma4110.
- **BI-portefølje (første BI-fag i fabrikken):** `met2910-bi`, `sok3500-bi`,
  `met2920-bi`, `met1190-bi`, `bok3423-bi`, `bok3532-bi`, `bok3632-bi`,
  `fin3521-bi`, `jur3420-bi`, `str3605-bi`, `org3620-bi`, `mrk3481-bi`.
- **UiO:** `ling1100`, `econ4260`, `econ4220`, `econ2610`, `jus3213`, `jus5511`,
  `fil1003`, `in1030`, `in2040`, `mat2500`, `jus3112` (←JUS3111), `jus4212`+
  `jus4213` (←JUS4211 splittet), `kj1020`/`in1140`/`econ4160` (etterfølger-profilert).
- **NTNU:** `tdt4160`, `tdt4300`, `tdt4137`, `it2805`, `ttk4240`, `tio4215`,
  `tdt4102`, `tdt4260`, `tdt4225`, `tfe4101`, `tfe4171`, `ttt4120`, `tgb4100`.

Hoppet over (dokumentert): TMA4240 Statistikk → dekket av `tma4245`; TMA4115
Matematikk 3 → dekket av `tma4111`-familien; TFE4101 Krets- og digitalteknikk
(nedlagt; krets+digital dekket av `ttk4240`/`in2060`/`tdt4160`); ECON4130
Statistics 2 (nedlagt uten etterfølger, dekket av `stk1110`); ECON4160 (nedlagt);
MET3590/EMS3666 (≤2 filer), FARM1110/BIOS1100/BIOS1110 (0 filer), samt rene
3–4-fils avanserte valgemner uten sensorveiledning (TDT4200/4215/4242/4258,
TTT4185, MRK3580, ORG3403/3610, BØK3430/3657, FYS1105) — for tynt arkiv for
kvalitetsanalyse. Kan tas senere ved behov; arkiv finnes.

**STATUS transje 7 FULLFØRT (8. juli 2026):** alle skjeletter levert, gatet og
pushet — inkludert de to siste (`kj1020`, `tfe4171`) etter at Opus-kvoten kom
tilbake. **HELE DET VETTEDE FAGBESKRIVELSES-UNIVERSET ER NÅ KOMPLETT:** 118
skjeletter (115 gjennom porten; 3 kjente ufarlige avvik = econ1310/jus1111 live-
bøker + svmet1010-pilot), 119 analyser, ~4 112 kapitler, ~69 900 quiz og ~69 000
flashcards planlagt. Alle gjenværende arkiver er enten bygget, etterfølger-
profilert, eller dokumentert hoppet over (nedlagt-uten-etterfølger / for tynt
arkiv). Neste steg er BOKBYGGING (fase 3–7) via kickoff-setningene over — ikke
flere rammeverk.

## C8. Transje 8-kandidater — funn fra full arkivgjennomgang (8. juli 2026)

Brukeren ba om ny nøye gjennomgang av hele ~/Desktop/Eksamner. Konklusjon:
innenfor det fagbeskrivelse-vettede mandatet er ingenting glemt (alle hopp er
dokumentert i C7), MEN korpuset har ~130 udekkede arkiver med ≥5 løsninger/
sensorveiledninger som aldri var i mandatet. Prioritert etter kategori:

**K1 — reelle glipper (samme kategori som fag vi HAR bygget):**
- [ ] `nokut-glu-matte` — NOKUT nasjonal deleksamen GLU-matematikk (103 filer,
      30 sensorveil.; ALLE grunnskolelærerstudenter nasjonalt — søster til
      nokut-afb som ble bygget). Klarest glipp i hele korpuset.
- [ ] `nokut-barnevern` **[1. sem master]** — NOKUT nasjonal deleksamen barnevern (36 f, 8 sv).
- [ ] `med-avsluttende` — UiO/nasjonal felles avsluttende deleksamen medisin
      (71 f, 56 m/fasit!); med1100-analysen holdt den bevisst utenfor modul
      1-boka — men den bærer sin EGEN bok (klinisk sluttkompetanse).
- [ ] `med-fagproven` — fagprøven for leger utdannet utenfor EØS (40 f, 24 sv).
- [ ] MEDISIN-modul 2–6 + 8 (7–23 f hver) — framtidig medisinserie ved behov.

**K2 — sterke arkiver utenfor fagbeskrivelses-mandatet (topp etter løsninger):**
- HiØ IT-serie: ITD15020/13-matematikk (125 f/56 løsn), ITF10705-diskret
  (98/46), ITF20006-algdat (141/0)
- HVL MAS116 Hydrodynamikk (188/53 — størst udekket m/løsninger)
- NTNU matte-/statistikkserie: TMA4125 Matematikk 4N (116/52), MA1101 (78/41),
  MA1301 (82/34), MA0001 (63/29), MA1102 (73/28), TMA4123 (38/27), TMA4180
  optimering (34/23), TMA4250 (57/22), TMA4165 (43/20), TMA4265 (41/17),
  MA1202 (60/15), TMA4160 kryptografi (40/14), TMA4145 (44/13), TMA4320 (24/13)
- NTNU SOK-serie (Trondheim-økonomi, parallelt program): SOK1012 (43/18),
  SOK3004 (48/13), SOK1011 (40/13), SOK3001 (50/12), SOK1000 (39/11) m.fl.
- OsloMet: DAPE1300 diskret matematikk (120/26), DATA2500 operativsyst. (40/20)
- UiO-bredde: SVEXFAC03 exfac SV (29/17), PSYC2104 (25/15), PSYC1202 (25/13),
  IN2080 beregnbarhet (25/12), PSYC4305 (35/11), PSY2101 (34/11), SOS2100
  (28/11), SOSANT1200 (18/11), MAT2410 kompleks analyse (44/10), SGO1001 (48/8),
  STK2100 (42/7), OD-serien (odontologi)
- NIH (idrettshøgskolen): SPM103 (20/10), SPM102 (18/9) + ~15 småfag m/fasit
- NMBU ECN-serien (økonomi, uten løsninger)

**K3 — vurdert og IKKE verdt:**
- USN HiT-arkiv (3 273 f): semesterdumper uten faggruppering — krever stor
  manuell sortering før noe kan bygges.
- _sortering/publiserbart (13 449 f): samme korpus re-kategorisert (manifest-
  bekreftet) — ingen nye fag.
- MEDISIN-modul-1 (45 f): identisk med MED1100-arkivet (42/42 overlapp).
- Småinstitusjoner (Ansgar/Nord/HiMolde/Kristiania/Volda/UiT/USN-toppnivå):
  1–15 filer per fag, som regel uten løsninger — under kvalitetsterskelen.
- FY/TFY/SIF-serier uten løsninger der tilsv. fag alt er dekket.

NB: K1/K2-fagene mangler fagbeskrivelse-ekstrakt → analyseagentene må hente
emnebeskrivelse fra institusjonssidene (WebFetch) og statusverifisere AKTIV
selv, som sos1004/sosant1090-mønsteret.

## D. Etterarbeid på eksisterende bøker (valgfritt, når som helst)

- [ ] Narrativ-versjoner (lesevennlig toggle) for `econ1310` (35 kap) og
      `jus1111` (42 kap) — bruk `/narrativ`-mønsteret; husk registry +
      linkedChapterId (se minne/matte-strukturløft-metoden).
- [ ] Forsidebilder for `econ1310` og `jus1111` (`/forsidebilder`-skillen).
- [ ] Lydbøker/illustrasjoner ved behov (egne skills finnes).

## Huskeregler for Opus-økten (kortversjon — detaljer i PRODUKSJONSLOYPE)

1. Maks 2 samtidige agenter. Etter hver bølge: MÅL DISK og gap-fill.
2. Kvotesammendraget i skjelettet er fasit (quiz/flashcards ≥500/500).
3. Flashcards = toppnivå definition-blokker med title. Quiz: options[0] riktig.
4. Wiring: metadata + sectionNames + registry + quiz-merge + institusjoner.ts
   (mønster: scripts i økten for econ1310/jus1111; se PRODUKSJONSLOYPE fase 5).
5. Verifiseringsbølge FØR commit; jus alltid med Lovdata-agent.
6. ALDRI meld ferdig uten grønn `npm run build` + prod-server-curl (200 +
   innholdssjekk). Commit + push til slutt.

## §C9 — Restanse per 10. juli 2026 (neste økt starter her)

> **STATUS: §C9-SKJELETTKØEN ER FULLFØRT (11. juli 2026, bølge 1–8, 4
> samtidige Opus-agenter).** 30 skjeletter bygget med KVALITETSPORT OK +
> committet enkeltvis + pushet: od4200, od5100, od5200; hele NIH-serien
> (nih-ti100, ti300, met200, met402, is205, is225, faf311, ppu406, spm102,
> spm103, spm105, spm245); ingeniørmatte (hio-diskretmatte, hio-ingmatte,
> hio-statistikk-okonomi [etterfølger-profilert, ITD20106 utfaset],
> oslomet-diskretmatte, oslomet-data2500); TMA (tma4145, tma4150, tma4160,
> tma4165, tma4180, tma4195, tma4250, tma4265, tma4275, tma4320 — alle ti
> statusverifisert AKTIVE ved NTNU). Dokumentert SKIP (STATUS.md): tma4123,
> tma4125 (nedlagt, dekket av tma4135/tma4121). Fra før: econ4130 ✅,
> fys-mek1110/tma4185/tma4212 skip ✅. Køen under er dermed TOM — neste
> steg er BOKBYGGING (kickoff-setningene øverst i denne fila).
> Wiring-merknad: OsloMet/HiØ/NIH må inn i institusjoner.ts ved bokbygging
> (dokumentert i skjelettene).

**Læringsløkke-kontrakten er nå satt inn i ALLE skjeletter** (Teori→Eksempel→
Oppgave inline + full forkunnskapsdekning) — bøker bygget fra skjelettene får
riktig rekkefølge med en gang. Autoritativ kilde: README «Leserkrav» + DNA-filene.
jus1111 + econ1310 (live) er allerede ombygd til løkker.

### Skjelettkø som gjenstår (~24 fag, analyse finnes — samme oppskrift som §C8)
Én Opus-agent per fag («IKKE spawn under-agenter»), verifiser AKTIV først
(ellers STATUS-SKIP.md), v3 + kvotegulv (per-kapittel MÅ summere ≥500/≥500),
gate `sjekk-skjelett.py`, commit enkeltvis, maks 4 samtidige:
- **UiO realfag/CS:** econ4130, fys-mek1110
- **UiO odontologi (analyse finnes, husk bildeavhengighet fra analysene):**
  od4200, od5100, od5200
- **NIH rest (12):** nih-ti100, nih-ti300, nih-met200, nih-met402, nih-is205,
  nih-is225, nih-faf311, nih-ppu406, nih-spm102, nih-spm103, nih-spm105, nih-spm245
- **Ingeniørmatte (5):** hio-diskretmatte, hio-ingmatte, hio-statistikk-okonomi,
  oslomet-diskretmatte, oslomet-data2500
- **NTNU TMA advanced (14) — agent MÅ verifisere aktiv (mange reformdøde):**
  tma4123, tma4125, tma4145, tma4150, tma4160, tma4165, tma4180, tma4185,
  tma4195, tma4212, tma4250, tma4265, tma4275, tma4320
- SKIP-liste (ikke bygg): econ2200, jus4211, met2911-bi, psyc4305

### Forretningslansering
Se `docs/LANSERING-TODO.md` (betaling/Stripe-Vipps størst; stubber i
`checkCredits()` + `hasPlusAccess()`; /priser; DPIA for AI-sensor; emnekode-SEO).
AI-sensor + fasit-mur er BYGGET og SKJULT bak flagg — ikke ute på siden.

### Kjente pilot-avvik (bevisst, ikke fiks uoppfordret)
econ1310/jus1111/svmet1010-skjelettene mangler sectionNames (pre-v3) — bøkene
er live og fungerer; avviket gjelder kun skjelettfila.

**STV1100 BYGGET 10. juli 2026** — første bok med læringsløkke fra første bygg
(24 kap, 560 quiz, 588 flashcards, BOKPORT OK, build grønn, prod-curl 7/7).
Gjenstår for stv1100 (som econ1310/jus1111): narrativ-versjoner + coverImage.
