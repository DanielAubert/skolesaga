# Eksamensanalyse: SØK1011 Markeder og markedssvikt (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK1011/`: rundt 25 oppgavesett fra V2012 til V2025 (inkludert V2023 resit) og et titalls sensorveiledninger/fasiter fra V2015 til V2025. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modellsammenhenger, tallsvar og faglige fakta er gjengitt fritt (uten verkshøyde). Analysen er kvantitativ der kildene tillater det.
>
> **Emnekode- og statusmerknad:** Emnet skrives både «SØK1011» og «SOK1011» i arkivet (samme emne). Fullt navn: *Markeder og markedssvikt*, 7,5 studiepoeng, Institutt for samfunnsøkonomi, NTNU. Emnet er **under utfasing**: undervisningen er fra studieåret 2024/25 erstattet av SØK1022 og SØK1024, men SØK1011 er fortsatt **eksamensrelevant** for studenter på bachelorplaner fra 2023 eller tidligere. Eksamensarkivet går til og med V2025, og analysen dekker hele denne perioden. Pensumboka som sensorveiledningene henviser til (kap. 28.x om oligopol, kap. 29.x om markedsstrategi/etableringshindre, samt kapitler om eksternaliteter og fellesgoder) er en standard mikroøkonomisk lærebok i Krugman & Wells' tradisjon.

---

## 0. Kort om emnet og forholdet til beslektede emner (les dette først)

SØK1011 er NTNUs emne i **anvendt markeds- og velferdsanalyse med vekt på markedssvikt**. Der SOK1002 *Mikroøkonomisk analyse* bygger opp det formelle konsument- og produsentteoriapparatet (nyttemaksimering med Lagrange, kostnadsminimering, tilbudskurver), tar SØK1011 tak i **hva som skjer i markedet** når man slipper aktørene løs — og særlig i **når og hvorfor markedet svikter**. Dette er den anvendte analysen SOK1002 bevisst holder seg unna.

Den viktigste konklusjonen i analysen er derfor en **arbeidsdeling** mellom NTNU-emnene som speiler NTNU/UiO-skillet:

| | **SOK1002 (NTNU)** | **SØK1011 (NTNU)** |
|---|---|---|
| Grunnkarakter | Ren mikroøkonomisk teori (konsument + bedrift) | Markeds-, velferds- og **markedssvikt**-analyse |
| Kjernemodeller | Nyttemaks, kostnadsmin, tilbudskurve på firmanivå | Markedskryss, monopol, oligopol/spillteori, eksternaliteter, fellesgoder |
| Metode | Algebra/kalkulus: Lagrange, FOB, Cobb-Douglas | Optimering per bedrift + **grafisk velferdsanalyse** + spillteori |
| Fast eksamensmal | 2 symmetriske teorioppgaver (konsument + produsent) | 3 blokker: begreper + markedsmakt/oligopol + markedssvikt (eksternalitet/fellesgode) |
| Hjelpemidler | Formelsamling + kalkulator | **Samme** (kode C: Sydsæter/Strøm/Berck + kalkulator) |

**Temaene SOK1002-analysen sier ALDRI forekommer i SOK1002 er nettopp kjernen i SØK1011.** En tekstsøk-sammenligning bekrefter det direkte: der SOK1002-arkivet gir null treff på «monopol», «Nash», «spill», «oligopol», «eksternalitet», «kollektivt gode», «samfunnsøkonomisk overskudd» og «avgift», er alle disse begrepene *bærebjelker* i SØK1011. Monopoltilpasning, Cournot/Bertrand/Stackelberg, spillmatriser og Nash-likevekt, Pigou-avgift og kvotesystemer, betalingsvillighet for fellesgoder og effektivitetstap ved markedssvikt går igjen år etter år.

**Forhold til de allerede analyserte emnene:**

- **SOK1002** er komplementet, som beskrevet over. En student som tar begge, møter det fulle mikropensumet: teoriapparatet i SOK1002, anvendelsen og markedssvikten i SØK1011. Overlappet er *smalt*: begge bruker begrepet marginalkostnad og profittmaksimering, men SOK1002 utleder tilbudskurven fra kostnadsfunksjonen, mens SØK1011 tar tilbudskurven (eller konstant marginalkostnad) som gitt og analyserer *markedsutfallet*.
- **ECON1210 (UiO)** er det nærmeste motstykket. ECON1210 og SØK1011 deler nesten hele temakatalogen — markedskryss, velferd, skatt/subsidie, monopol, eksternaliteter, kollektive goder, spillteori — men med to systematiske forskjeller: (i) **ECON1210 er grafisk/verbalt** («forklar ved hjelp av en figur», lite algebra), mens **SØK1011 krever mer regning** (Lerner-indeks utledet, Cournot/Stackelberg-likevekter løst algebraisk, effektivitetstap regnet ut). (ii) ECON1210s tyngdepunkt er FK-markedet med skatt/subsidie-overveltning og karbonprising; **SØK1011s tyngdepunkt er markedsmakt/oligopol og eksternaliteter/fellesgoder** — stykkskatt/subsidie-overveltning med delingsbrøk (ECON1210s signatur) er nesten fraværende i SØK1011.
- **ECON1310** (makro) er urelatert (Keynes/IS-RR-PK), tatt med kun som strukturforbilde for denne analysen.
- Blant de øvrige SOK-emnene som er analysert (sok1001, sok1004, sok2009–2012, sok3001, sok3004) er SØK1011 nærmest **sok1001** (samfunnsøkonomiske grunnbegreper) på begrepssiden og et forstadium til videregående emner i konkurranseøkonomi og miljøøkonomi.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 5 timer (09.00–14.00), karakter A–F, 7,5 studiepoeng.** Digital gjennom Inspera; håndtegnede figurer kan leveres som håndskrevne ark/tegnebrett og lastes opp (ekstra tid, 15–30 min, satt av til opplasting).
- **Hjelpemidler:** normalt **kode C** — matematisk formelsamling (Knut Sydsæter, Arne Strøm & Peter Berck: *Matematisk formelsamling for økonomer*, og den engelske *Economists' Mathematical Manual*) + godkjent enkel kalkulator (Casio fx-82ES/EX, Citizen SR-270X, HP 30S). Under korona var det **kode A / alle hjelpemidler** (V2020, V2021 var hjemmeeksamen med fri hjelpemiddelbruk).
- **Målform:** oppgaveteksten gis på **bokmål og nynorsk**; enkelte år også på **engelsk** (V2019). V2022 og V2023 var gitt (helt eller delvis) på **engelsk** — V2023 og V2023-resit er rene engelske sett, V2022-fasiten er på engelsk.
- **Oppgavestillere/faglærere** (roterer, forklarer stilvariasjoner): Torberg Falch (de nyeste settene V2024–V2025), Hildegunn E. Stokke, Hans Bonesrønning, Anders Skonhoft, Bjarne Strøm, Hans Bonesrønning m.fl.

### Struktur — to «regimer»
Emnet har hatt to ganske ulike oppgavestiler:

**A) Det klassiske regimet (ca. 2012–2020):** 2–4 oppgaver, som oftest med **likt vektede** oppgaver eller en 40/60-fordeling. Fast innhold: én **oligopol-/markedsmaktoppgave** (monopol, Cournot, Bertrand, Stackelberg, spillmatrise), én **markedssvikt-oppgave** (eksternalitet med avgift/kvote, eller fellesgode med sum av betalingsvillighet), og gjerne en kortere begreps- eller effektivitetsoppgave. Oppgavene er bygget rundt en **generell funksjonsform** (`P = D − X`, konstant enhetskostnad `c`) som løses algebraisk.

**B) Torberg Falch-regimet (2024–2025):** helt fast **tredeling** med oppgitte vekter:
- **Oppgave 1 (20 %)** = seks korte begrepsforklaringer.
- **Oppgave 2 (35–40 %)** = oligopol/markedsmakt/etableringshindre (spillteori eller residualetterspørsel).
- **Oppgave 3 (40–45 %)** = markedssvikt — eksternalitet i produksjon (transport/forurensning) *eller* fellesgode (park), regnet på oppgitte lineære funksjoner, avsluttet med en **verbal politikkvurdering** («hva er din anbefaling?»).

**C) V2022/V2023-mellomspillet (engelske sett):** case-pregede, poengbaserte sett (25–36 poeng) med prisdiskriminering (2./3. grad), Cournot/Bertrand/Stackelberg, kvotemarked, Coase-forhandling og fellesgode-koordinering. V2022 (kjøttmarkedet/NRK-case) og H2022 hadde aktualiserte case (kvoteauksjoner på importkjøtt; «barmhjertig diktator»-lønnscase; nåverdi av utdanning).

### Vektings-/strukturhistorikk (utvalg)

| Sett | Struktur | Sett | Struktur |
|---|---|---|---|
| H2012 | 2 oppg. 40/60 (fellesgode + monopol/duopol) | V2019 | 2 oppg. (markedsmakt + priskonkurranse) |
| V2012 | 2 oppg. (velferd/eksternalitet + oligopol) | H2019 | 2 oppg. 35/65 (Lerner/monopol + konkurranseformer) |
| H2013 | 2 oppg. (konkurranseformer + eksternalitet) | V2020 | 3 oppg. 40/30/30 (oligopol + fellesgode + kvote) |
| V2013 | 4 oppg. 40/20/20/20 (oligopol/velferd/fellesgode) | H2020 | 3 oppg. (monopol+innovasjon / fellesgodespill / oligopol) |
| V2014 | 3 oppg. 25/60/15 | V2021 | 3 oppg. (oligopol + …) — hjemmeeks. |
| H2014 | 3 oppg. 50/30/20 (konkurranse + innovasjon + eksternalitet) | H2021 | 3 oppg. (oligopol + …) |
| V2015 | 2 oppg. (oligopol + eksternalitet/Coase) | **V2022** | case (kjøtt) + eksternaliteter + oligopol (eng.) |
| V2016 | 2 oppg. (oligopol + fellesgode) | **H2022** | kjøtt-case + lønn/humankapital + Cournot/Stackelberg |
| H2016 | 4 oppg. 20/40/15/25 (patent/eksternalitet/oligopol) | **V2023** | 6 poengoppg. (FK, prisdiskr., Cournot, spill, eksternalitet, fellesgode) |
| V2017 | 4 oppg. likt (monopol/oligopol/fellesgode) | **V2023 resit** | 6 poengoppg. (monopol, Bertrand/Cournot, kvote, Coase, prisdiskr., innovasjon) |
| H2017 | 3 oppg. (konkurranseformer + eksternalitet + fellesgode) | **V2024** | 3 oppg. 20/40/40 (begreper + oligopol + fellesgode) |
| V2018 | 2 oppg. (residualettersp./innovasjonsspill + eksternalitet/Coase) | **H2024** | 3 oppg. 20/40/40 (begreper + oligopol + fellesgode) |
| H2018 | 2 oppg. (monopol→Cournot→kartell + kvotepolitikk) | **V2025** | 3 oppg. 20/35/45 (begreper + spillteori + eksternalitet) |

**Konstanter på tvers av settene:**
1. **Nesten hvert sett har én oligopol-/markedsmaktoppgave og én markedssvikt-oppgave.** Dette er de to søylene emnet står på.
2. Oppgavene løses på en **generell funksjonsform** (`P = D − X` med konstant enhetskostnad `c`), ofte etterfulgt av en konkret tallversjon.
3. **Spillteori** brukes gjennomgående som verktøy — både formelt (spillmatrise, Nash-likevekt, delspillperfekt likevekt, gjentatt spill/tit-for-tat) og til å analysere etableringshindre.
4. **Eksternalitet + korrigerende virkemiddel** (Pigou-avgift eller kvote) og **fellesgode + sum av betalingsvillighet** er de to markedssvikt-arketypene, i rotasjon.

---

## 2. Temafrekvens

Vurderingen bygger på de settene der oppgaveteksten er lesbar (≈24 sett) samt de lesbare sensorveiledningene/fasitene. Score = andel sett der temaet inngår som deloppgave eller mer. Fordi hvert sett normalt har én markedsmaktoppgave og én markedssvikt-oppgave, deles frekvensanalysen i to spor pluss en begrepsdel.

### 2A. Markedsmakt og oligopol (oppgave «konkurranse»)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Cournot (mengdekonkurranse):** reaksjons-/beste-svar-kurver, Nash-likevekt | **~80 %** | Selve motoren; `xᵢ = (D−c)/3`, `P = c/3 + 2D/3` |
| **Monopoltilpasning** (MR = MC, `x = (D−c)/2`, profitt, effektivitetstap) | **~70 %** | Ofte utgangspunkt før duopol; grafisk dødvektstap |
| **Bertrand (priskonkurranse):** pris = enhetskostnad, Bertrand-paradokset | **~65 %** | «underbyr til p = c», residualetterspørsel horisontal |
| **Spillmatrise + Nash-likevekt** (definisjon, dominant strategi) | **~60 %** | Innovasjons-/samarbeidsspill; kartell vs. duopol |
| **Lerner-indeksen** (utledning, tolkning L = 1/\|ε\|) | **~40 %** | H2019, V2019, V2015, V2024 (begrep); markedsmakt-mål |
| **Stackelberg** (leder/følger, baklengs induksjon) | **~40 %** | `x_leder = (D−c)/2`, `x_følger = (D−c)/4`; lavere pris |
| **Etableringshindre / overinvestering / troverdig trussel** | **~40 %** | Spilltre, delspillperfekt likevekt; V2019, H2019, H2024, V2025 |
| **Gjentatt spill / tit-for-tat / diskonteringsfaktor** | **~30 %** | Kartell-samarbeid som Nash-likevekt (δ > 0,5) |
| **Kartell** (samarbeid = monopolutfall, deling av monopolprofitt) | **~30 %** | H2018, V2014, V2016 |
| **Prisdiskriminering** (1., 2., 3. grad; velferdseffekt) | **~25 %** | V2023 (+resit), V2024 (begrep), H2024 (begrep) |
| **Residualetterspørsel** (mot enkeltbedrift; elastisitet pris vs. mengde) | **~25 %** | V2018, V2024, H2024, V2025 (begrep) |
| **Innovasjon / prosessinnovasjon / patent** (insentiver, appropriabilitet) | **~30 %** | H2014, V2018, H2016, H2024/V2024 (begrep) |

### 2B. Markedssvikt (oppgave «eksternalitet / fellesgode»)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Negativ eksternalitet i produksjon** + samfunnsøkonomisk optimum + effektivitetstap | **~65 %** | MSC = MPC + marginal skade; markedet produserer for mye |
| **Pigou-avgift / stykkavgift** som korrigering (finn optimal `t`) | **~55 %** | `t` = marginal skade i optimum; V2013, H2014, H2016, V2025 |
| **Fellesgode:** definisjon (ikke-rival/ikke-ekskluderbar) + sum av betalingsvillighet | **~55 %** | Vertikal summering; `Σ MB = MC` |
| **Optimal produksjon av fellesgode** (Samuelson-betingelse) + antall individer | **~50 %** | Hvordan optimum vokser med N; gratispassasjer |
| **Utslippskvoter / kvotemarked** (kvotepris, antall kvoter) | **~40 %** | H2013, H2018, V2020, V2023(+resit); avgift vs. kvote |
| **Effektivitetstap / samfunnsøkonomisk tap** (regnet + illustrert) | **~50 %** | Trekant mellom MB og MSC; V2014, H2016, V2025 |
| **Coase-forhandling / eiendomsrett** (forhandlingsmengde, samarbeid øker velferd) | **~35 %** | V2015, V2018, V2023 resit; eiendomsrett bestemmer fordeling |
| **Fellesgode som spill** (bidra/ikke bidra, gratispassasjer, Nash) | **~20 %** | V2020, H2020; koordineringssvikt |
| **Statistisk diskriminering / kompenserende lønnsforskjeller / humankapital** (arbeidsmarked) | **~20 %** | H2022, V2024, H2024, V2025 (begrep) — nyere gjenganger |
| **Nåverdi** (av investering/utdanning) | **~20 %** | H2022, V2024/H2024 (begrep); neddiskontering |

### 2C. Begrepsoppgaven (fra 2024, 20 %)

Fast liste på seks korte begreper per sett. Gjengangere: markedssvikt, fellesgode/kollektivt gode, positiv/negativ eksternalitet, samfunnsøkonomisk overskudd, residualetterspørsel, 2./3. grads prisdiskriminering, Lerner-indeksen, stordriftsfordeler, nåverdi, innovasjon, humankapital, insentiver, statistisk diskriminering, kompenserende lønnsforskjeller, ikke-dupliserbar produksjonsfaktor.

**Viktigste funn:**
1. **Emnet ER markedsmakt + markedssvikt.** En lærebok skal bygges rundt (i) oligopolmodellene (monopol, Cournot, Bertrand, Stackelberg) med spillteori som fellesverktøy, og (ii) de to markedssvikt-arketypene: eksternalitet med Pigou-korrigering, og fellesgode med sum av betalingsvillighet. Alt annet er anvendelser.
2. **`P = D − X` med konstant enhetskostnad `c` er signaturformen.** Studenten må kunne sette opp profittfunksjonen, derivere marginalinntekten, finne beste-svar-kurver, løse likningssystemet, og tolke resultatene (`(D−c)/2` for monopol, `(D−c)/3` for Cournot per bedrift, `(D−c)/2` og `(D−c)/4` for Stackelberg leder/følger).
3. **Cournot er kjernemodellen i konkurransedelen.** Reaksjonsfunksjoner utledet fra førsteordensbetingelser, tegnet i (`xₐ`, `x_b`)-diagram, med Nash-likevekten i skjæringspunktet — spurt de fleste år.
4. **Eksternalitet + korrigerende virkemiddel er kronspørsmålet i markedssviktdelen.** Studenten skal finne markedsløsningen (der MPB = MPC), det samfunnsøkonomiske optimum (der MB = MSC = MPC + marginal skade), effektivitetstapet, og den avgiften/kvoten som lukker gapet.
5. **Spillteori er gjennomgående** — ikke bare i egne oppgaver, men som verktøy for etableringshindre (spilltre, delspillperfekt likevekt, troverdig trussel via overinvestering) og for karteller (gjentatt spill, tit-for-tat).
6. **Overlapp-funnet mot SOK1002:** Alt som SOK1002-analysen lister som «skal IKKE bygges på» — markedslikevekt, monopol/markedsmakt, oligopol/spillteori, eksterne virkninger, kollektive goder, samfunnsøkonomisk overskudd, avgift — er **selve pensumet** i SØK1011. Arbeidsdelingen er nesten kirurgisk ren.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med typisk plassering og krav.

### A. Begrepsforklaringer (oppgave 1, når den finnes — 20 %)
- **Krav:** Presis definisjon + gjerne eksempel + matematisk uttrykk/figur der naturlig. Sensor vil ha at studenten «svarer poengtert»; eksempler honoreres eksplisitt.
- **Gjengangerbegreper:** markedssvikt (avvik mellom marginal betalingsvilje og sosial marginalkostnad), fellesgode (ikke-rivaliserende, evt. ikke-ekskluderbart), positiv/negativ eksternalitet, samfunnsøkonomisk overskudd (KO + PO), residualetterspørsel, 2./3. grads prisdiskriminering, Lerner-indeksen, stordriftsfordeler, nåverdi, innovasjon, humankapital, statistisk diskriminering, kompenserende lønnsforskjeller, insentiver, ikke-dupliserbar produksjonsfaktor.
- **Omskrevet eksempel:** «Forklar kort hva som menes med residualetterspørsel, og i hvilke markeder begrepet er relevant.»

### B. Monopoltilpasning og effektivitetstap
- **Metode:** `Max π = (P(x) − c)·x` med `P = D − x` → FOB gir `MR = MC`, altså `x = (D−c)/2`, `P = (D+c)/2`. Illustrer i figur (E-kurve, MR dobbelt så bratt, konstant MC), og vis dødvektstapet som trekanten mellom E-kurven og MC fra monopolmengden til den effektive mengden (der `P = MC`). Utled det analytiske uttrykket for effektivitetstapet.
- **Fasit-eksempler:** `P = 1000 − X`, `c = 200` → monopolmengde og pris beregnes og illustreres (V2017); `p = 15 − 2q`, `c = 3` → `q = 3`, `p = 9` (V2023 resit).
- **Omskrevet eksempel:** «En monopolist står overfor `P = a − bX` med konstant enhetskostnad `c`. Finn profittmaksimerende mengde, pris og overskudd, og illustrer det samfunnsøkonomiske effektivitetstapet.»

### C. Lerner-indeksen (utledning + tolkning)
- **Krav:** Start fra monopolets FOB, skriv den som `p − C'(x) = −p'(x)·x`, del på `p` og innfør etterspørselselastisiteten → `L = (p − MC)/p = 1/|ε|`. Tolk: avviket mellom pris og marginalkostnad er størst når etterspørselen er lite elastisk; under frikonkurranse er `ε` uendelig og `L = 0` (ingen markedsmakt). Ved duopol modifiseres uttrykket (`L = 1/(2|ε|)` for symmetrisk Cournot).
- **Omskrevet eksempel:** «Utled Lerner-indeksen for et monopol og forklar hva den sier om markedsmakt.»

### D. Cournot-konkurranse (mengde) — kjernesjangeren i konkurransedelen
- **Metode (fasitenes standard):**
  1. Skriv bedrift As inntekt `p·xₐ = [D − (xₐ + x_b)]·xₐ` og deriver → **marginalinntekt** `D − 2xₐ − x_b`.
  2. Sett `MR = c` → **beste-svar-kurven** `xₐ = (D − c − x_b)/2` (og symmetrisk for B). **Tolk kurven** (bedriftens optimale mengde faller når konkurrenten produserer mer).
  3. Tegn begge beste-svar-kurvene i (`xₐ`, `x_b`)-diagram; skjæringspunktet er **Nash-likevekten**: `xₐ = x_b = (D−c)/3`, samlet `X = 2(D−c)/3`, `P = (D + 2c)/3`, profitt per bedrift `(D−c)²/9`.
  4. **Begrunn hvorfor det er en Nash-likevekt:** ingen bedrift angrer gitt den andres valg.
- **Omskrevet eksempel:** «To bedrifter med lik konstant marginalkostnad `c` konkurrerer på mengde i markedet `P = D − X`. Sett opp optimeringsproblemene, utled beste-svar-kurvene, tegn dem, og finn Nash-likevekten.»

### E. Bertrand-konkurranse (pris) og Bertrand-paradokset
- **Krav:** Med identiske varer og priskonkurranse underbyr bedriftene hverandre til `p = c`; profitt = 0 (Bertrand-paradokset: to bedrifter er nok til frikonkurranseutfall). Residualetterspørselen mot én bedrift er **horisontal** (mister alle kunder ved minste prisøkning). Ved ulike enhetskostnader tar lavkostbedriften hele markedet ved å sette prisen like under høykostbedriftens `c`; profitt `(c_høy − c_lav)·x(c_høy)`.
- **Omskrevet eksempel:** «Forklar hva Bertrand-paradokset er, og hva som skjer i markedet dersom den ene bedriften har lavere enhetskostnad enn den andre.»

### F. Stackelberg (leder/følger)
- **Krav:** Løs ved **baklengs induksjon**: sett først opp følgerens beste-svar, sett den inn i lederens profitt, og maksimer. Resultat: leder `xₐ = (D−c)/2`, følger `x_b = (D−c)/4`, samlet mengde større enn i Cournot → lavere pris. Poeng: lederen «mykner» konkurrenten ved å binde seg til stor mengde; konsumentene tjener på Stackelberg (høyere KO) fremfor Cournot.
- **Omskrevet eksempel:** «Bedrift A velger mengde før bedrift B. Finn produksjonen i hver bedrift og markedsprisen, og sammenlign konsumentoverskuddet med Cournot-tilfellet.»

### G. Spillmatrise, Nash-likevekt og gjentatt spill
- **Krav:** Sett opp 2×2-matrise fra teksten (strategier: samarbeid/duopol, innovere/ikke, bidra/ikke), regn ut utbetalingene i hver celle, finn Nash-likevekten(e), definer **Nash-likevekt** («ingen angrer gitt den andres valg») og **dominant strategi**. Ved gjentatt spill: vis at samarbeid (kartell) kan opprettholdes som likevekt hvis **diskonteringsfaktoren er stor nok** (typisk δ > 0,5) via tit-for-tat.
- **Fasit-eksempler:** innovasjonsspill der prosessinnovasjon reduserer MC fra 4 til 2 mot kostnad 8 (V2018/H2022); kartell vs. duopol med `D = 4`, `c = 1` (H2018); fellesgode-bidragsspill (V2020, H2020).
- **Omskrevet eksempel:** «Sett opp spillmatrisen for de to bedriftenes valg mellom å produsere kartellmengde og duopolmengde, finn Nash-likevekten i ettperiodespillet, og vurder om samarbeid kan opprettholdes ved uendelig gjentakelse.»

### H. Etableringshindre / troverdig trussel / overinvestering
- **Krav:** Modeller etablering som et **spilltre** (nykommer velger etablere/ikke; etablert velger aggressiv priskrig/ordinær konkurranse) og finn den **delspillperfekte likevekten** ved baklengs induksjon. Poenget: en ren trussel om priskrig er *ikke troverdig* dersom aggressiv konkurranse ikke er optimal etter at nykommeren har etablert seg — men **overinvestering** som senker den etablertes marginalkostnad gjør trusselen troverdig (og avskrekker etablering). Andre virkemidler: prisgarantier, merkevarebygging, bindende kundekontrakter/bonuser.
- **Omskrevet eksempel:** «Bruk spillteori til å vurdere om et etablert selskap kan hindre en nykommer i å etablere seg, og forklar hvordan en overinvestering kan gjøre en priskrigstrussel troverdig.»

### I. Prisdiskriminering (1., 2., 3. grad)
- **Krav:** Definer de tre gradene og analyser velferdseffekten. 1. grad (perfekt): pris = marginal betalingsvillighet for hver enhet → effektiv mengde, men hele overskuddet til selger. 2. grad (meny/kvantumsrabatt, selvselektering): finn `(xᵢ, Fᵢ)` som maksimerer profitt, og senk høyprisplanens avgift slik at høytype-kunden er *indifferent* (insentivbetingelse). 3. grad (segmentert etter kundegruppe): sett `MR = MC` i hvert delmarked; velferdseffekten er tvetydig.
- **Fasit-eksempel (V2023, videostrømming):** to kundetyper `p = 20 − 4x` og `p = 20 − 2x`, MC = 0 → plan 1 `(x=5, F=50)`, plan 2 `(x=10, F=100)` ved full informasjon; ved selvselektering senkes `F₂` til 75.
- **Omskrevet eksempel:** «Forklar hva 2. grads prisdiskriminering er, og finn de profittmaksimerende abonnementene når bedriften ikke kan skille kundetypene fra hverandre.»

### J. Negativ eksternalitet + korrigerende virkemiddel — kjernesjangeren i markedssviktdelen
- **Krav (fast oppbygging):**
  1. **Markedsløsning:** der privat marginal betalingsvillighet = privat marginalkostnad (`MPB = MPC`).
  2. **Samfunnsøkonomisk optimum:** der `MB = MSC = MPC + marginal ekstern skade`. Mengden er lavere enn markedsmengden.
  3. **Effektivitetstap:** trekanten mellom MSC og MB fra optimal til markedsmengde; regn ut og illustrer.
  4. **Pigou-avgift:** en stykkavgift `t` = marginal skade i optimum flytter tilbudet slik at markedet gir optimum. Alternativt **kvote/kvotemarked**: sett total mengde = optimal mengde; kvoteprisen = marginal skade.
- **Fasit-eksempler:** `MB = 200 − 15X`, `MPC = 20 + 5X`, skade `20X` → finn markedsmengde, optimum og optimal avgift (H2016, V2013); `XE = 100 − 2P`, `XT = 10 + P`, skade 15 per enhet (V2025); skadefunksjon `Cs(x) = 3x²`, `C(x) = 5x²`, `P = 1600 − x` → markedsmengde ≈146, optimum ≈94 (V2022).
- **Omskrevet eksempel:** «Produksjonen forurenser med en marginal skade på 15 per enhet. Med `XE = 100 − 2P` og `XT = 10 + P`, finn markedsløsningen, det samfunnsøkonomiske optimum og effektivitetstapet uten regulering, og angi hvilken avgift som gir optimal produksjon.»

### K. Fellesgode: sum av betalingsvillighet og optimal produksjon
- **Krav:** Definer fellesgode (ikke-rivaliserende: én persons bruk reduserer ikke andres). Fordi alle nyter samme mengde, finnes **samlet betalingsvillighet ved vertikal summering** av individenes MB-kurver. Optimal produksjon der **`Σ MB = MC`** (Samuelson-betingelsen). Analyser hvordan optimal mengde og lønnsomhet endres med **antall individer N** (flere individer → høyere samlet betalingsvillighet → mer produseres/mer sannsynlig at godet bør produseres). Diskuter **gratispassasjerproblemet**: uregulert marked underproduserer fordi ingen enkelt vil betale for helheten.
- **Fasit-eksempel (H2024, park):** 10 innbyggere med `p = 10 − X` → samlet `P = 100 − 10X`; kostnad `P = 20 + 10X` → optimal størrelse der de krysser; utvidelse til to kommuner med endret betalingsvillighet, og lønnsomhetsvurdering av en vei som øker betalingsvilligheten.
- **Omskrevet eksempel:** «Ti innbyggere har hver betalingsvillighet `p = 10 − X` for en park. Finn samlet betalingsvillighet, og bestem den optimale størrelsen når marginalkostnaden er `20 + 10X`.»

### L. Coase-forhandling og eiendomsrett
- **Krav:** To aktører der A påfører B en eksternalitet. Finn A's ukoordinerte tilpasning (maksimer `πₐ`), deretter den koordinerte (maksimer `πₐ + π_b`). Vis at koordinering øker samlet velferd (Coase-teoremet ved fravær av transaksjonskostnader), og at **eiendomsretten bestemmer fordelingen, ikke den effektive mengden** — men bare når forhandling er mulig. Skisser forhandlingsmengden (mengdeintervallet der begge tjener på en avtale).
- **Fasit-eksempel (V2023 resit):** vindpark `πₐ = xₐ − ½xₐ²`, skade `π_b = −½xₐ` → ukoordinert `xₐ = 1`, koordinert `xₐ = ½`; koordinering øker velferden (0,125 mot 0), og B kan overføre til A slik at begge kommer bedre ut.
- **Omskrevet eksempel:** «Bedrift A forurenser bedrift B. Finn A's produksjon uten og med samarbeid, og forklar hvorfor et samarbeid øker den samlede velferden.»

### M. Innovasjon og eksterne effekter av innovasjon
- **Krav:** Analyser insentivene til prosessinnovasjon (lavere MC) under priskonkurranse med patent/teknologigenerasjoner. Kjernepoeng: innovatøren må **dele gevinsten med konsumentene** (KO øker), så den innkasserer *ikke* hele den samfunnsøkonomiske gevinsten → innovasjonsinsentivene er **for svake** (appropriabilitetsproblem). Positive eksternaliteter: lavere priser → høyere KO, og kunnskapsspredning til andre bedrifter. Negativ: under imperfekt konkurranse kan innovasjon brukes til å ta markedsmakt («business stealing»).
- **Omskrevet eksempel:** «Diskuter de eksterne effektene av innovasjon når innovasjon forstås som en bedrifts adopsjon av ny teknologi.»

### N. Verbal politikkvurdering (avslutning på markedssviktoppgaven, Falch-regimet)
- **Krav:** Vurder en påstand eller gi en anbefaling, uten ny modell. Fast type: en bransje hevder at en avgift/regulering «gir konkurser og tap av arbeidsplasser» — svaret er at avgiften **internaliserer den eksterne kostnaden** slik at de bedriftene som forsvinner, er de som ikke er samfunnsøkonomisk lønnsomme når skaden regnes med; ressursene frigjøres til bedre anvendelser. Eller: «avgiften er for høy fordi inntektene overstiger skaden» — feil, fordi avgiften betales på hele mengden mens skaden gjelder marginen.
- **Omskrevet eksempel:** «Transportbransjen hevder at en veiavgift bare gir konkurser og færre jobber. Vurder påstanden, og gi din anbefaling til politikerne.»

---

## 4. Sensorens krav

### Faste metaregler (gjentas på tvers av veiledningene)
1. **Regning OG figur OG intuisjon.** SØK1011 ligger mellom SOK1002 (tung algebra) og ECON1210 (grafisk/verbalt): matematikken teller (Cournot-likevekter, Lerner-indeks, avgiftsberegning skal utledes), men sensor understreker gjentatte ganger at «kandidater som understøtter regninga med økonomisk intuisjon og klargjørende figurer, belønnes». Figuren skal forklares, ikke bare tegnes.
2. **Tolk resultatene.** Beste-svar-kurver «må tolkes», Nash-likevekten «må begrunnes», og tallsvar (elastisitet, effektivitetstap, kvotepris) skal oversettes til økonomisk innhold.
3. **Definisjoner må sitte.** Nash-likevekt, markedssvikt, fellesgode, Bertrand-paradokset, Lerner-indeks — disse skal defineres eksplisitt, ikke forutsettes kjent.
4. **Svar poengtert.** Studenten skal svare på det det spørres om; en generell diskusjon av f.eks. Cournot uten kobling til den oppgitte etterspørselen gir bare delvis uttelling.
5. **Undervisningsnærhet.** Veiledningene henviser til konkrete lærebokkapitler (kap. 28.1/28.2 om residualetterspørsel og konkurranseformer, kap. 28.3 om Bertrand, kap. 29.2/29.4 om spill og etableringshindre) og til stoff som er «gått gjennom på forelesning» selv om det ikke står i boka (f.eks. Stackelberg). Enkelte deloppgaver er eksplisitt merket som «ikke direkte diskutert i læreboka» — der belønnes selvstendig resonnement.

### Hva som skiller karakternivåene
- **Bunn (E–D):** riktig oppsett av optimeringsproblemet, korrekt monopol-/Cournot-tilpasning, riktig figur med riktig dødvektstap, og hovedkonklusjonen (mengde, pris, effektivitetstap eller optimal avgift).
- **Midt (C):** komplett beste-svar-utledning med korrekt Nash-likevekt, korrekt Lerner-indeks, korrekt markedsløsning vs. optimum for eksternalitet med riktig avgift, og korrekt sum-av-betalingsvillighet for fellesgode.
- **Topp (A/B):** behersker **delspillperfekt likevekt og troverdighet** i etableringsspill; ser at **innovasjonsinsentivene er for svake** fordi gevinsten deles med konsumentene; skiller **priskonkurransens vs. mengdekonkurransens** virkning på residualetterspørselens elastisitet; forstår at **eiendomsretten avgjør fordeling, ikke effektiv mengde** i Coase-forhandling; ser **gratispassasjer- og koordineringssvikten** i fellesgodespill; og drøfter grensetilfeller (svært lav `d` i monopolprofitten → tilnærmet frikonkurranse; Stackelberg gir høyere KO enn Cournot).

### Hva som gir uttelling
- **Mekanismen bak resultatet** teller mer enn selve tallet: *hvorfor* gir priskonkurranse `p = c`, *hvorfor* er trusselen ikke troverdig uten overinvestering, *hvorfor* underproduserer markedet fellesgoder.
- **Selvstendig resonnement** premieres der læreboka slutter (Stackelberg, sammensatte spill, «ikke direkte i boka»-oppgaver).
- **Klargjørende figurer** honoreres gjennomgående — men de må forklares.

---

## 5. Typiske feil

Utledet av det veiledningene advarer mot og det oppgavene er bygget for å avsløre:

1. **Ikke tolke beste-svar-kurvene / ikke begrunne Nash-likevekten** — bare regne ut skjæringspunktet uten å forklare at ingen angrer.
2. **Behandle en priskrigstrussel som troverdig** uten å sjekke om aggressiv konkurranse faktisk er optimal etter etablering (delspillperfekthet) — og dermed overse hvorfor overinvestering trengs.
3. **Blande markedsløsning og samfunnsøkonomisk optimum** ved eksternalitet: sette optimum der `MPB = MPC` i stedet for `MB = MPC + marginal skade`.
4. **Sette avgiften lik total skade** i stedet for **marginal skade i optimum** — eller å tro at «inntekt > skade» betyr at avgiften er for høy (avgiften betales på hele mengden, skaden gjelder marginen).
5. **Summere fellesgode-etterspørsel horisontalt** (som for private goder) i stedet for **vertikalt**; eller glemme at optimal mengde vokser med antall individer.
6. **Overse gratispassasjerproblemet** — konkludere at et lønnsomt fellesgode automatisk blir produsert i et uregulert marked.
7. **Feil elastisitetssammenligning** for residualetterspørsel: ikke se at den er *mer* elastisk ved priskonkurranse enn ved mengdekonkurranse (fordi konkurrentenes priser er låst ved priskonkurranse, men reagerer ved mengdekonkurranse).
8. **Hoppe over intuisjon/figur** — ren algebra uten forklaring gir ikke full uttelling.
9. **Generell teori uten å bruke de oppgitte funksjonene** — sensor honorerer bare i den grad de faktiske spørsmålene besvares.
10. **Glemme at innovasjonsgevinsten deles med konsumentene** → feilaktig konkludere at innovasjonsinsentivene er riktige.
11. **Uklare figurer:** kurver, tilpasningspunkter, dødvektstap-trekanter og forhandlingsmengder må navngis for at resonnementet skal kunne følges.

---

## 6. Modell- og notasjonsapparat

Notasjonen er stabil og bør brukes nøyaktig i læreboka (med en merknad om at ECON1210 bruker E-/T-kurve-notasjon der SØK1011 skriver `P = D − X`).

### Notasjonskonvensjoner
- **Marked:** invers etterspørsel `P = D − X` (eller `P = a − bX`), samlet mengde `X = xₐ + x_b`, konstant enhetskostnad `c` (evt. ulike `cₐ`, `c_b`). Marginalinntekt `MR`, marginalkostnad `MC`.
- **Oligopol:** beste-svar/reaksjonskurver `xᵢ(x_j)`, Nash-likevekt, monopolmengde `(D−c)/2`, Cournot per bedrift `(D−c)/3`, Stackelberg leder/følger `(D−c)/2` og `(D−c)/4`. Lerner-indeks `L = (p−MC)/p = 1/|ε|`.
- **Markedssvikt:** marginal (privat) betalingsvillighet `MB/MPB`, marginal privat kostnad `MPC`, marginal samfunnsøkonomisk kostnad `MSC = MPC + marginal skade`, skadefunksjon `Cs(x)` eller `E(x)`, Pigou-avgift `t`, kvotepris `q`. Fellesgode: samlet `Σ MB = MC`.
- **Spill:** strategier, utbetalingsmatrise, Nash-likevekt, dominant strategi, delspillperfekt likevekt, diskonteringsfaktor `δ`, tit-for-tat.
- **Velferd:** konsumentoverskudd `KO`, produsentoverskudd `PO`, samfunnsøkonomisk overskudd `SO = KO + PO`, effektivitetstap/dødvektstap.

### Må beherskes aktivt (regnes, tegnes og forklares)
1. **Monopoltilpasning:** `MR = MC`, mengde/pris/profitt, dødvektstap analytisk og grafisk.
2. **Lerner-indeksen:** utledning fra FOB + tolkning.
3. **Cournot:** beste-svar-kurver fra FOB, tegning i (`xₐ`, `x_b`)-plan, Nash-likevekt, samlet mengde/pris/profitt.
4. **Bertrand:** `p = c`-resultatet, Bertrand-paradokset, residualetterspørsel, ulike enhetskostnader.
5. **Stackelberg:** baklengs induksjon, leder/følger-mengder, KO-sammenligning.
6. **Spillmatrise:** utbetalinger, Nash-likevekt, dominant strategi, gjentatt spill/tit-for-tat med diskonteringsfaktor.
7. **Etableringsspill:** spilltre, delspillperfekt likevekt, troverdig trussel via overinvestering.
8. **Eksternalitet:** markedsløsning vs. optimum (`MB = MSC`), effektivitetstap, Pigou-avgift = marginal skade i optimum, kvotemarked med kvotepris.
9. **Fellesgode:** vertikal summering, Samuelson-betingelsen `Σ MB = MC`, virkning av antall individer, gratispassasjer.
10. **Coase-forhandling:** ukoordinert vs. koordinert tilpasning, velferdsgevinst, eiendomsrettens rolle, forhandlingsmengde.
11. **Prisdiskriminering:** 1./2./3. grad, selvselektering/insentivbetingelse, velferdseffekter.

### Matematisk verktøykasse (formelsamling tillatt)
Derivasjon (marginalinntekt/-kostnad), løsning av 2×2-likningssystemer (Nash-likevekt), førsteordensbetingelser for profittmaks, baklengs induksjon, enkel nåverdi. Nivået ligger mellom ECON1210 (nesten ren geometri) og SOK1002 (Lagrange og komparativ statikk).

### Skal IKKE overvektes
- **Full Lagrange-basert konsument-/produsentteori** (det er SOK1002s domene). SØK1011 tar tilbudssiden som gitt (konstant MC eller enkel kostnadsfunksjon) og analyserer markedsutfallet.
- **Stykkskatt/-subsidie med delingsbrøk `c/(b+c)`** (ECON1210s signatur) — nesten fraværende her; avgifter i SØK1011 er Pigou-korrigering av eksternaliteter, ikke overveltningsanalyse.
- **Makroøkonomi, IS-LM, vekstteori** — ikke i emnet.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Cournot-modellen komplett** — beste-svar-kurver, tegning, Nash-likevekt, `(D−c)/3`-resultatet. ~80 % frekvens, ryggraden i konkurransedelen.
2. **Monopoltilpasning + effektivitetstap** — `MR = MC`, `(D−c)/2`, dødvektstap analytisk og grafisk. ~70 %.
3. **Negativ eksternalitet + Pigou-avgift/kvote** — markedsløsning vs. optimum, effektivitetstap, optimal avgift = marginal skade. ~65 % (den ene markedssviktsøylen).
4. **Fellesgode: sum av betalingsvillighet + Samuelson-betingelsen** — vertikal summering, optimal mengde, N-avhengighet, gratispassasjer. ~55 % (den andre markedssviktsøylen).
5. **Spillmatrise + Nash-likevekt** — oppsett, definisjon, dominant strategi, gjentatt spill. ~60 %, og det gjennomgående verktøyet.

### Nivå 2 — må kunne (gir 20–40 % når de kommer)
6. **Bertrand + Bertrand-paradokset + residualetterspørsel** — `p = c`, elastisitet pris vs. mengde.
7. **Lerner-indeksen** — utledning + tolkning; fast begreps- og deloppgave.
8. **Stackelberg** — leder/følger, baklengs induksjon, KO-sammenligning.
9. **Etableringshindre / troverdig trussel / overinvestering** — spilltre og delspillperfekthet.
10. **Coase-forhandling / eiendomsrett** — koordinering øker velferd, forhandlingsmengde.
11. **Begrepsrepertoaret** (ca. 15 gjengangere) — sikrer 20 % når begrepsoppgaven kommer (fast fra 2024).

### Nivå 3 — bør kjenne godt (roterer inn)
12. **Prisdiskriminering** (1./2./3. grad, selvselektering) — voksende fra 2023.
13. **Innovasjon / patent / appropriabilitet** — for svake insentiver, kunnskapseksternaliteter.
14. **Arbeidsmarkedsbegreper** (statistisk diskriminering, kompenserende lønnsforskjeller, humankapital) — nyere begrepsgjengangere.
15. **Nåverdi** — av investering/utdanning; enkel neddiskontering.

### Prognose for neste eksamen
Med Falch-regimet som gjeldende mal (V2024, H2024, V2025), forvent **tredeling**:
- **Oppgave 1 (20 %):** seks korte begreper fra gjenganger-listen (markedssvikt, fellesgode, eksternalitet, residualetterspørsel, prisdiskriminering, Lerner, nåverdi, humankapital er de varmeste).
- **Oppgave 2 (35–40 %):** oligopol/markedsmakt — enten et **spillteoretisk etableringshinder** (spilltre, troverdig trussel, overinvestering) eller **residualetterspørsel/oligopoltilpasning** (Cournot vs. Bertrand vs. Stackelberg).
- **Oppgave 3 (40–45 %):** markedssvikt — **eksternalitet i produksjon** (transport/forurensning, regnet på lineære funksjoner, med Pigou-avgift/kvote og effektivitetstap) *eller* **fellesgode** (park/infrastruktur, sum av betalingsvillighet), avsluttet med en **verbal politikkvurdering**.

Boken bør derfor bygges som **to søyler** — (i) markedsmakt/oligopol med spillteori som fellesverktøy, og (ii) markedssvikt (eksternalitet + fellesgode) med velferdsanalyse — med et felles kapittel om markedskryss, samfunnsøkonomisk overskudd og effektivitet i bunn, og bevisst **utelate** SOK1002s Lagrange-apparat og ECON1210s overveltnings-delingsbrøk.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK1011/`.

**Sensorveiledninger/fasiter lest grundig (lesbare):** `SØK1011 sensorveiledning.pdf` (V2025), `søk1011_sensorveiledning h24.pdf` (V2024-tekst — merk avvik, se nedenfor), `SØK1011 Eksamen vår 2024_sensorveiledning_2.pdf` (V2024 full fasit), `SØK1011-Sensorveiledning.pdf` / `SØK1011Sensorveiledningv15(1).pdf` (identiske, monopol/Cournot/Stackelberg + eksternalitet/Coase), `SØK1011Sensorveiledning V2018 (1).pdf` (V2018 med fasit), `SENSORVEILEDNINGsøk1011vår 2019.pdf` (V2019 full fasit), `Sensorveiledning SØK1011 V22.pdf` (V2022, engelsk, fellesgoder/eksternaliteter), `Sensorveiledning SØK1011 Høst 2020.pdf` (H2020), `sensorveiledningSØK1011-V20.pdf` (V2020, Cournot/Stackelberg), `sensorveiledning_søk1011_h21.pdf` (H2021, delvis — Cournot/Bertrand/Stackelberg-tail).

**Løsningsforslag/fasit lest (docx):** `EKSAMEN SØK1011 H2022  med svar.docx` (H2022 full fasit: kjøttmarked/kvoter, lønn/humankapital/nåverdi, Cournot/Stackelberg), `SØK1011_V23_EXAM_RESIT_SOLUTION.docx` (V2023-resit full fasit), `SØK1011_V23_EXAM_AnswerKey.pdf` (V2023 answer key).

**Eksamensoppgaver lest grundig (siste ~8 år):** `SØK1011 V25.pdf`, `SØK1011 V24.pdf`, `SØK1011 H24.pdf`, `SØK1011_V23_EXAM.pdf`, `SØK1011_V23_EXAM_RESIT_norsk.pdf`, `1011.pdf` (V2021), `SØK1011_V20.pdf`, `SØK1011H-19.pdf`, `SØK1011V-19.pdf`, `SØK1011H-18.pdf`, `SØK1011V-18.pdf`, `SØK1011H-17.pdf`, `SØK1011V-17.pdf`.

**Eksamensoppgaver skummet (eldre 2012–2016):** `SØK1011V-16.pdf`, `H-16`, `V-15`, `V-14`, `H-14`, `V-13`, `H-13`, `V-12`, `H-12`.

**Merknader om kildene:**
- **Skanninger (ingen/nesten ingen tekst med `pdftotext`):** `Sensurveiledning SØK1011 V21.pdf`, `SensorveiledningSØK1011-vår-17.pdf`, `SensurveiledningSØK1011-V2016.pdf` (alle bildebaserte, ~2 MB), samt `SØk1011 v22.pdf` og `SØK1011 V24.pdf`s innebygde oppgave-PDF (håndtegnings-omslag). Innholdet i disse settene er likevel dekket via tilhørende sensorveiledninger/fasiter og de lesbare oppgavesettene (bl.a. dekker H2022-docx og V2022-fasiten det engelske mellomspillet, og h21-sensorveiledningen dekker H2021).
- **Filnavn-forvirring:** `søk1011_sensorveiledning h24.pdf` inneholder tittelen «Sensorveiledning SØK 1011, vår 2024» men følger H2024-oppgavesettets begreper/oligopoloppgave (residualetterspørsel, oligopolist, monopolistens etableringshindre) — den er reelt H2024-veiledningen. `SØK1011 Eksamen vår 2024_sensorveiledning_2.pdf` er den ekte V2024-fasiten (samfunnsøkonomisk overskudd, ikke-dupliserbar produksjonsfaktor, vedmarked-Cournot/Stackelberg). Analysen omtaler settene etter faktisk innhold.
- **Pensum:** sensorveiledningene henviser til lærebokkapitler i 20-/30-tallet (kap. 28.x oligopol/residualetterspørsel, kap. 29.x markedsstrategi/etableringshindre, samt kapitler om eksternaliteter og fellesgoder) — konsistent med en mikroøkonomisk lærebok i Krugman & Wells' tradisjon. Enkelte tema (Stackelberg, sammensatte spill) er «gått gjennom på forelesning» uten å stå i boka.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modellsammenhengene og tallsvarene er faglige fakta uten verkshøyde.
