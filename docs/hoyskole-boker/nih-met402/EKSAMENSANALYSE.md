# Eksamensanalyse: MET402 Kvantitativ metode (NIH, master)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på 6 komplette eksamenssett med tilhørende sensorveiledning fra Norges idrettshøgskole: tre ordinære (høst 2023, 2024, 2025) og tre utsatt/konte (februar 2024, 2025, 2026) — til sammen 12 dokumenter, alle med full fasit/vurderingskriterier. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorveiledninger. Emnet undervises kun om høsten med ordinær eksamen i november og konte i februar, så arkivet dekker de tre siste hele eksamenssyklusene. Analysen er kvantitativ der kildene tillater det.
>
> **Sentral advarsel om fagprofil:** Til tross for sluggen «kvantitativ metode» og temaordene «korrelasjon, ANOVA, regresjon, multivariat analyse» er dette **ikke** et regne-emne à la matematisk statistikk. Det er et *samfunnsvitenskapelig forskningsmetode-emne for idrettsforskere* der studenten skal (1) planlegge en kvantitativ studie i eget fagfelt og (2) *lese og fortolke ferdig SPSS-utskrift* med ord. Kandidaten regner aldri en test for hånd, utleder aldri en formel, og har ingen hjelpemidler fordi det ikke er noe å slå opp — poengene ligger i begrepsforståelse, metodevalg og tolkning. Pensum er Field, *Discovering Statistics Using IBM SPSS* (kap. 1–18) og Ringdal, *Enhet og mangfold* (utvalgte kapitler). Læreboken må skrives deretter.

---

## 1. Eksamensform og utvikling

### Form

| Element | Beskrivelse |
|---|---|
| **Type** | Skriftlig, individuell skoleeksamen (WISEflow), **4 timer**. Gradert karakter A–F. |
| **Hjelpemidler** | **Ingen.** Alt besvares fra hukommelsen; det finnes ingen formelark fordi eksamen ikke krever håndregning. |
| **Adgang** | Emnet er forbeholdt programstudenter (master). Arbeidskrav: to gruppeinnleveringer må være godkjent for å gå opp. |
| **Språk** | Bokmål og nynorsk (begge målformer i settet). Fasitene er på bokmål. |
| **Vekting** | Eksplisitt prosentvekting oppgitt på hvert sett; helhetsvurdering på tvers av alle oppgavene. |
| **Emneansvarlig** | Marte Bentzen (samme oppgavekonstruktør gjennom hele perioden — sterk stilkontinuitet). |

### Struktur- og vektingshistorikk

| Sett | Antall oppgaver | Vekting | Struktur |
|---|---|---|---|
| **H2023 ordinær** | 3 (Del A/B/C) | **70 / 10 / 20** | A: full studieplan-essay. B: korrelasjonsmatrise (SPSS). C: multippel regresjon (SPSS) i tre deloppgaver |
| **H2023 utsatt** | 3 (Del 1/2/3) | **70 / 20 / 10** | 1: uavhengig t-test-utskrift + full studieplan. 2: korrelasjon/Cronbachs alfa (rent begrep). 3: utvalgsstørrelse (rent begrep) |
| **H2024 ordinær** | 4 | **25 / 25 / 25 / 25** | 1: datainnsamling/utvalg. 2: kausalitet/design. 3: ANOVA (SPSS). 4: regresjon (SPSS) |
| **H2024 utsatt** | 4 | **25 / 25 / 25 / 25** | 1: problemstilling/hypoteser/populasjon. 2: datahåndtering. 3: korrelasjon (SPSS). 4: ANOVA (SPSS) |
| **H2025 ordinær** | 4 | **25 / 25 / 25 / 25** | 1: feilkilder i forskningsprosessen. 2: sannsynlighetsutvalg/vekting. 3: krysstabell/kjikvadrat (SPSS). 4: regresjon (SPSS) |
| **H2025 utsatt** | 4 | **25 / 25 / 25 / 25** | 1: utvalgsstørrelse. 2: problemstilling/design/variabler. 3: t-test (SPSS). 4: repeterte målinger ANOVA (SPSS) |

**Tydelig regimeskifte fra og med H2024:** Settet gikk fra **3 oppgaver med skjev vekting** (én dominerende 70 %-essay + to små tolkningsoppgaver) til **fire likeverdige oppgaver à 25 %**. Det nye formatet er stabilt over fire påfølgende sett og er sikreste prognose for H2026.

### Konstanter på tvers av alle 6 sett

- **To faste byggesteiner i hvert sett:** (1) minst én *skriv-din-egen-studie*-oppgave (problemstilling → hypoteser → variabler → design → datainnsamling/utvalg → datahåndtering → kritisk refleksjon), og (2) minst én *les-SPSS-utskrift*-oppgave. Fra H2024 er balansen typisk 2 essay + 2 utskrift.
- **«I ditt fagfelt»-instruksen går igjen overalt.** Kandidaten skal selv finne på en problemstilling, hypoteser og variabler fra idrettsfaget sitt. Det finnes ingen «riktig» innhold — sensor vurderer *metodisk sammenheng og kompleksitet*, ikke om eksemplet er det samme som fasiten.
- **All SPSS-tolkning er verbal.** Utskriftene (korrelasjonsmatrise, ANOVA-tabell, coefficients-tabell, t-test med Levene, krysstabell) er ferdig regnet. Kandidaten skal forklare hva tallene *betyr*, ikke reprodusere dem.
- **Fast tolkningskjede for hver utskrift:** hva slags forskningsspørsmål analysen egner seg for → hvilket datanivå/målenivå som kreves → beskriv nøkkeltallene → vurder signifikans → vurder effektstørrelse/styrke → konkluder i kontekst.
- **Faglig fokus er hele veien samfunnsvitenskapelig idrettsforskning** (motivasjon, trivsel, sosial støtte, fysisk form, karakter i kroppsøving, holdninger til idrettens samfunnsansvar). Statistikken under er alltid standard SPSS-pensum.

**Kryssreferanse til nih-met200 (Forskningsmetode):** MET402 og MET200 deler stort begreps­fundament — design, utvalg/populasjon, reliabilitet/validitet, kvantitativ metode og forskningsetikk. MET200 er bredere (også kvalitativ metode og vitenskapsteori) og har mappevurdering, mens MET402 er det rene *kvantitative* master-emnet med skoleeksamen og tyngre SPSS-tolkning (regresjon, ANOVA, faktoranalyse). Design-/utvalgs-/validitetskapitlene i de to lærebøkene bør skrives så de kan gjenbrukes og krysslenkes; MET402-boken legger på det statistiske tolkningslaget.

---

## 2. Temafrekvens-tabell

Basert på alle 6 sett (3 ordinære + 3 utsatt; utsatt-settene er fullverdige og teller likt). Celleverdi = antall sett der temaet forekommer som egen oppgave eller substansiell deloppgave.

| Tema | Ordinær (3) | Utsatt (3) | **Gjenganger-score** |
|---|---|---|---|
| Problemstilling + testbare hypoteser (retning + variabler) | 2 | 3 | **5/6 = 83 %** |
| Forskningsdesign (tverrsnitt/longitudinelt/eksperiment/kvasi/panel) | 2 | 3 | **5/6 = 83 %** |
| Beskrivelse av egne variabler (målenivå, indikatorer, subskalaer, Likert) | 2 | 3 | **5/6 = 83 %** |
| Utvalg/populasjon: representativitet, sannsynlighetsutvalg, seleksjon | 3 | 2 | **5/6 = 83 %** |
| Regresjon (multippel, OLS): R², ANOVA-del, koeffisienter, signifikans | 2 | 0 | **2/6 = 33 %** — men 2 av 3 ordinære |
| ANOVA (enveis + effektstørrelse eta²) | 1 | 2 | **3/6 = 50 %** |
| Korrelasjon (Pearsons r: styrke, retning, signifikans, ikke kausalitet) | 1 | 2 | **3/6 = 50 %** |
| Datahåndtering/screening (missing, uteliggere, normalitet, reversering) | 1 | 2 | **3/6 = 50 %** |
| Reliabilitet/validitet/generalisering som eksplisitt vurderingspunkt | 2 | 2 | **4/6 = 67 %** |
| t-test (uavhengig/parvis) + Levene-test for varianslikhet | 0 | 3 | **3/6 = 50 %** — kun på utsatt hittil |
| Kausalitet: betingelser, korrelasjon ≠ årsak, design for årsak | 1 | 0 | **1/6 = 17 %** (H2024 ordinær, tungt) |
| Effektstørrelse-tolkning (eta² 0,01/0,06/0,14; r liten/medium/stor) | 1 | 2 | **3/6 = 50 %** |
| Utvalgsstørrelse / hvor mange respondenter (styrke, frafall, type I/II) | 0 | 2 | **2/6 = 33 %** — fast konte-oppgave |
| Cronbachs alfa / intern konsistens for skalaer | 0 | 1 | **1/6 = 17 %** |
| Krysstabell + kjikvadrattest (kategoriske data) | 1 | 0 | **1/6 = 17 %** (ny i H2025) |
| Feilkilder gjennom hele forskningsprosessen (6 steg) | 1 | 0 | **1/6 = 17 %** (ny i H2025) |
| Type I- / type II-feil (nevnt i utvalgsstørrelse- og feilkilde-kontekst) | 1 | 2 | **3/6 = 50 %** |
| Vekting av utvalg (justering for skjevhet) | 1 | 0 | **1/6 = 17 %** (ny i H2025) |

### Viktigste funn

1. **Emnet har to udiskutable bærebjelker som til sammen dukker opp i hvert eneste sett:** *studiedesign-essayet* (problemstilling → hypoteser → variabler → design → utvalg → datahåndtering → kritisk refleksjon) og *SPSS-utskriftstolkning*. En kandidat som mestrer disse to øvelsene perfekt har grunnlag for høy karakter uansett hvilken konkret analyse settet velger.
2. **De fire SPSS-analysene roterer.** Regresjon dominerer på ordinær (2/3), mens t-test og ANOVA er hyppigere på konte. Over de fire siste settene har alle fem analysetyper vært brukt: regresjon, ANOVA (også repeterte målinger), korrelasjon, t-test og krysstabell/kjikvadrat. Boken må dekke alle fem som *lese-utskrift*-ferdigheter.
3. **Effektstørrelse er et signaturkrav.** ANOVA-oppgavene gir alltid eta²/epsilon²/omega² i tabellen, og fasiten krever eksplisitt at kandidaten kjenner grensene η² = 0,01 (liten) / 0,06 (medium) / 0,14 (stor) og *tolker* størrelsen — ikke bare signifikansen. Samme logikk for r i korrelasjon (Cohens grenser).
4. **Kausalitet og «korrelasjon ≠ årsak» er gjennomgangstemaet** som binder essay og tolkning sammen. Det er egen tung oppgave i H2024, og det ligger som fast forbehold i alle korrelasjons- og tverrsnittsvar.
5. **H2025 introduserte tre ferske vinklinger** — feilkilder gjennom hele forskningsprosessen, krysstabell/kjikvadrat, og vekting av utvalg — som viser at oppgavekonstruktøren utvider repertoaret. Boken bør dekke også disse selv om de foreløpig har lav frekvens.
6. **«Utvalgsstørrelse»-oppgaven er en fast konte-klassiker** (identisk formulering H2024-utsatt og H2026-utsatt): hvor mange respondenter trengs, med drøfting av totalpopulasjon, design, seleksjon, representativitet, frafall og type I/II-feil.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav destillert fra sensorveiledningene.

### A. Studiedesign-essayet (den store gjennomgående oppgaven)
- **Krav:** Bygg en komplett, indre sammenhengende plan for en kvantitativ studie i eget idrettsfaglig felt. Fasiten forventer i tur: (1) presis problemstilling med kort faglig begrunnelse (interesse/relevans/ny kunnskap, *uten* litteraturkrav); (2) to testbare hypoteser der variabler og *antatt retning* på sammenhengen kommer tydelig fram; (3) beskrivelse av alle variabler med **målenivå** og om de er bygd av én eller flere indikatorer; (4) begrunnet design (tverrsnitt/longitudinelt/eksperiment); (5) datainnsamlingsmetode (spørreskjema online/offline/intervju, observasjon) med eksempel på hvordan variablene måles; (6) **utvalgsstrategi** med type (sannsynlighets- vs. ikke-sannsynlighetsutvalg + underkategori), antall respondenter som kontaktes og fremgangsmåte; (7) datahåndtering etter innsamling; (8) kritisk refleksjon om reliabilitet, validitet og generalisering. Sensor vurderer **helhet og kompleksitet**, ikke om eksemplet matcher en fasit.
- **Frekvens:** 5/6 (som stor essay eller fordelt på flere oppgaver).
- **Omskrevet eksempel:** «Formuler en problemstilling for å undersøke sammenhenger i ditt fagfelt, sett opp to testbare hypoteser, beskriv variablene og deres målenivå, velg og begrunn design og utvalgsstrategi, og drøft reliabilitet, validitet og overføringsverdi.»

### B. Problemstilling og hypoteser isolert
- **Krav:** Problemstillingen skal være presis og faglig begrunnet. Hypotesene skal være **testbare**: hvilke variabler inngår, og hvilken retning antas på sammenhengen. En vag hypotese som ikke kan operasjonaliseres gir lav uttelling.
- **Frekvens:** 5/6 (som egen deloppgave eller del av A).
- **Omskrevet eksempel:** «Sett opp én problemstilling om sammenhengen mellom to fenomener i idretten din, og utled to hypoteser som tydelig angir variabler og forventet retning.»

### C. Beskriv variablene dine (målenivå, indikatorer, skalaer)
- **Krav:** For hver variabel: identifiser målenivå (nominal/ordinal/intervall/forhold), om den er en enkeltindikator eller en **latent variabel** bygd av flere items, svarkategorier (typisk Likert 1–5 eller 1–7), og hvordan subskalaer lages. H2026-utsatt-fasiten krever eksplisitt at gode svar nevner testing av **intern konsistens (Cronbachs alfa)** for latente variabler. Kandidaten trenger ikke gjengi validerte spørreskjemaer, men skal kjenne skalatyper.
- **Frekvens:** 5/6.
- **Omskrevet eksempel:** «Beskriv grundig variablene du vil samle inn: målenivå, antall indikatorer, svarkategorier, hvordan subskalaer bygges, og hvordan du sjekker intern konsistens.»

### D. Design og kausalitet
- **Krav:** Kjenn de tre kausalitetsbetingelsene (samvariasjon; tidsrekkefølge/asymmetri der årsak kommer før virkning; kontroll for tredjevariabler/isolasjon) pluss teoretisk forankring som fjerde krav i samfunnsvitenskap. Kunne velge og begrunne ett design for å studere årsak–virkning: **ekte eksperiment** (randomisert eksperiment- og kontrollgruppe, sterk indre validitet, men kunstig og bare manipulerbare variabler), **kvasieksperiment**, **panel/longitudinell** (måler samme enheter over tid; frafall og instrumenteffekt som svakheter), eller **tverrsnitt/korrelasjonsstudie** (representativt utvalg på ett tidspunkt; kan bruke ikke-manipulerbare variabler, men korrelasjon beviser ikke årsak). Beskriv **kjennetegn + styrker + svakheter** for det valgte designet.
- **Frekvens:** 5/6 design; kausalitet eksplisitt 1/6, implisitt overalt.
- **Omskrevet eksempel:** «Hvilke betingelser må være oppfylt for å påstå en kausal sammenheng, og hvilket design ville du valgt for å studere årsak og virkning i ditt felt? Angi kjennetegn, styrker og svakheter.»

### E. Utvalg, populasjon og representativitet
- **Krav:** Definer populasjon som mengden man vil generalisere til. Redegjør for **sannsynlighetsutvalg** (enkel tilfeldig, systematisk, stratifisert — proporsjonalt/disproporsjonalt — og klynge/cluster) mot ikke-sannsynlighetsutvalg. Vurder kvalitet via representativitet og feilkilder: dekningsfeil, utvalgsfeil, frafallsfeil, justerings-/vektingsfeil. Kjenn **vekting** som korreksjon for skjevhet (gi over-/underrepresenterte grupper justert vekt). Kjenn frafallstyper **MCAR/MAR/MNAR** og hvorfor systematisk (ikke-tilfeldig) frafall truer generaliserbarhet mens tilfeldig frafall er mindre farlig.
- **Frekvens:** 5/6.
- **Omskrevet eksempel:** «Forklar hva et sannsynlighetsutvalg er med eksempler, hvordan kvaliteten vurderes, og hva det vil si å vekte et utvalg.»

### F. Datahåndtering og screening
- **Krav:** De sentrale stegene fra rådata til analyseklart datasett: sammenslåing (merge) av datasett, data screening (deskriptiv oversikt og grafisk visualisering), identifisere og behandle **missing data** og uteliggere, sjekke **normalfordeling**, reversere negativt formulerte spørsmål, konstruere **latente variabler/subskalaer** og teste intern konsistens. Begrunn *hvorfor* hvert steg forbedrer reliabilitet og validitet.
- **Frekvens:** 3/6.
- **Omskrevet eksempel:** «Gjør rede for de viktigste stegene fra data er samlet inn til de er klare for analyse, og forklar hvorfor hvert steg er viktig for studiens kvalitet.»

### G. Tolk korrelasjonsmatrise (SPSS)
- **Krav:** Fra deskriptiv tabell: les av N, at variablene er kontinuerlige (fordi det er min/maks/gjennomsnitt/standardavvik). Fra korrelasjonsmatrisen: forklar hva **Pearsons r** er (mål på styrke og retning på lineær sammenheng mellom to variabler), les av **retning** (positiv/negativ), **signifikans** (Sig. 2-tailed; * på 0,05, ** på 0,01), og **styrke** ut fra koeffisientens størrelse (kandidaten trenger ikke huske eksakte grenser, men bør vite at grenser finnes). Gi konkrete eksempler fra matrisen. **Fast forbehold:** korrelasjon sier bare noe om sammenheng mellom to variabler av gangen og kan **ikke** vise kausalitet, særlig ved tverrsnittsdata samlet på samme tidspunkt.
- **Frekvens:** 3/6.
- **Omskrevet eksempel:** «Beskriv hva du kan lese ut av den deskriptive tabellen og korrelasjonsmatrisen, med vekt på styrke, retning og signifikans, og gi en kort konklusjon.»

### H. Tolk ANOVA-utskrift (SPSS)
- **Krav:** Forklar at ANOVA tester forskjeller i gjennomsnitt mellom **tre eller flere** grupper (eller tidspunkt ved repeterte målinger), og at forutsetningen er én **kontinuerlig** avhengig variabel. Fra Descriptives: N, gjennomsnitt og SD per gruppe. Fra ANOVA-tabellen: **F-verdi og Sig.** — er p < 0,05 forkastes nullhypotesen om like gjennomsnitt. Fra effekt-tabellen: tolk **eta² (η²)** mot grensene 0,01/0,06/0,14 og oversett til praktisk betydning. Konkluder i kontekst («signifikant forskjell mellom SØS-gruppene i fysisk form, med stor effektstørrelse»). Repeterte målinger (H2026-utsatt): samme logikk over tidspunkt, og en lav η² betyr liten praktisk betydning selv når F er signifikant.
- **Frekvens:** 3/6.
- **Omskrevet eksempel:** «Forklar hva slags forskningsspørsmål ANOVA egner seg for, beskriv hva tabellene viser, og tolk effektstørrelsen.»

### I. Tolk regresjonsutskrift (SPSS)
- **Krav:** Model summary: **R Square** som andel forklart varians i avhengig variabel (og at den varierer mellom 0 og 1, med skillet mot **adjusted R²**), R som multippel korrelasjon. ANOVA-delen (der den gis): F-testen for om modellen er signifikant bedre enn nullmodellen, via sum-of-squares (residualkvadratsummer i nullmodell vs. regresjonsmodell). Coefficients: **unstandardisert B** som endring i avhengig variabel per enhets endring i uavhengig variabel; **t-verdi og Sig.** per koeffisient; hvilke prediktorer som er signifikante og hvilke ikke. Det teller positivt å sette opp **regresjonslikningen** og predikere en verdi. Konkluder i kontekst. (H2024-fasit: «ingen kjønnsforskjell i fysisk form, men treningsglede og utdanning gir signifikant økt fysisk form».)
- **Frekvens:** 3/6 (2 av 3 ordinære).
- **Omskrevet eksempel:** «Beskriv de viktigste verdiene i model summary og coefficients-tabellen, avgjør hvilke prediktorer som er signifikante, og gi en kort konklusjon.»

### J. Tolk t-test-utskrift med Levene (SPSS)
- **Krav:** Forklar at t-testen tester forskjell i gjennomsnitt mellom **to** grupper på en kontinuerlig variabel, og skille **uavhengige grupper** (independent samples) fra **to målinger av samme gruppe** (paired samples). Les **Levenes test** først: er den signifikant (p < 0,05) er variansene ulike → bruk raden «Equal variances not assumed»; er den ikke signifikant → bruk «Equal variances assumed». Les så t-verdi, frihetsgrader og Sig. (2-tailed), gjennomsnittsforskjell og standardfeil, og konkluder (H2026-utsatt: p = 0,083 → ingen signifikant kjønnsforskjell i indre motivasjon). H2024-utsatt kobler i tillegg t-testen til effektstørrelse.
- **Frekvens:** 3/6 (alle utsatt-sett).
- **Omskrevet eksempel:** «Forklar hva t-testen brukes til, les av Levenes test for å velge riktig rad, og tolk t-verdi, signifikans og gjennomsnittsforskjell.»

### K. Tolk krysstabell / kjikvadrat (SPSS)
- **Krav:** Krysstabell egner seg for sammenheng/forskjell mellom to **kategoriske** variabler; testen er **kjikvadrat (kji²)**. Les av N og missing, sjekk forutsetningen om **minimum forventet cellefrekvens** (brytes den, svekkes tolkningen), les kjikvadratverdi og signifikans, og beskriv fordelingen i lys av en egenformulert problemstilling (med både H0 og H1). Ny sjanger fra H2025.
- **Frekvens:** 1/6.
- **Omskrevet eksempel:** «Forklar når en krysstabell egner seg og hvilke forutsetninger som gjelder, lag en passende problemstilling med kategoriske variabler, og tolk kjikvadrattesten.»

### L. Utvalgsstørrelse
- **Krav:** Drøft hva som bestemmer hvor mange respondenter man trenger: størrelsen på totalpopulasjonen, valgt design (og at man må ta høyde for frafall), seleksjonsmåte, ønsket representativitet, frafall, og **type I-/type II-feil** (styrke). Diskuter konsekvensene for studiens kvalitet av valgene som tas. Fast konte-oppgave med nær identisk ordlyd to år på rad.
- **Frekvens:** 2/6.
- **Omskrevet eksempel:** «Gjør rede for hva som er viktig når man bestemmer antall respondenter i en studie, og diskuter hvordan disse valgene påvirker kvaliteten.»

### M. Feilkilder i forskningsprosessen
- **Krav:** Beskriv de seks stegene (idé → problemstilling → design → datainnsamling → dataanalyse → rapportering), koble konkrete feilkilder til hvert steg (uklar/uoperasjonaliserbar problemstilling; design som ikke passer spørsmålet, f.eks. tverrsnitt der longitudinelt trengs; seleksjon/frafall/svake måleinstrumenter/modning i datainnsamlingen; screening-feil, feil analysevalg, type I/II og feiltolkning i analysen), og drøft konsekvensene for om funnene kan stoles på og for ytre validitet/generaliserbarhet. Ny sjanger fra H2025.
- **Frekvens:** 1/6.
- **Omskrevet eksempel:** «Beskriv stegene i den kvantitative forskningsprosessen, knytt feilkilder til hvert steg, og gjør rede for mulige konsekvenser.»

---

## 4. Sensorens krav

### Karakter og vurdering
- **Helhetsvurdering:** karakteren settes på et **vektet gjennomsnitt** av alle oppgavene i settet, ikke oppgave for oppgave isolert. En kandidat må levere på tvers av både essay- og tolkningsdelen.
- **Kompleksitet premieres:** studieplan-essayet vurderes eksplisitt «ut fra grad av kompleksitet» og «indre sammenheng». Det holder ikke å ramse opp elementer; de må henge sammen (design må passe problemstilling, variabler må passe design, analyse må passe målenivå).

### Faste metaregler på tvers av veiledningene
1. **Sammenheng er alt.** Problemstilling → hypoteser → variabler → design → analyse skal danne én rød tråd. Fasitene vurderer gjentatte ganger «om X henger sammen med Y» (om variablene passer problemstillingen, om analysevalget passer målenivået).
2. **Egne, faglig relevante eksempler kreves — men innholdet er fritt.** Sensor vurderer ikke om eksemplet er «riktig», bare om det er metodisk holdbart og hører hjemme i kandidatens fagfelt. Flere fasitpunkter sier rett ut «evaluer om eksemplet henger sammen med svaret i del a».
3. **Målenivå er en gjennomgående nøkkel.** Nesten hver analyse-oppgave krever at kandidaten begrunner at forutsetningen om riktig datanivå er oppfylt (kontinuerlig avhengig variabel for t-test/ANOVA/regresjon; kategoriske variabler for krysstabell).
4. **Effektstørrelse i tillegg til signifikans.** Å konkludere kun med «signifikant» er ikke nok der utskriften gir effektmål — fasiten krever tolkning av η²/r-styrken og hva den betyr *praktisk*.
5. **Korrelasjon/tverrsnitt = ingen kausalitet.** Dette forbeholdet skal med hver gang, spesielt når data er samlet på ett tidspunkt.
6. **Konkluder i kontekst.** Hver tolkning skal avsluttes med hva funnet betyr for den konkrete (fag)problemstillingen, ikke bare «forkast H0».

### Hva som skiller toppkandidatene (markert i fasitene)
- **Går bak overflaten på nøkkelbegreper.** For R² skiller de mellom «fem prosent bedre» (overfladisk) og residualkvadratsum-forståelsen (nullmodell vs. regresjonsmodell) og nevner adjusted R² og hva R er.
- **Nevner nyanser uoppfordret:** frafallstyper MCAR/MAR/MNAR, latente variabler og Cronbachs alfa, disproporsjonal stratifisering, cellefrekvens-forutsetningen i kjikvadrat.
- **Bruker konkrete, illustrerende eksempler** på abstrakte begreper (hva vekting gjør, når stratifisering trengs).
- **Reflekterer kritisk over hele designet** — alternative valg, avveiing mellom gjennomførbarhet og validitet, og overføringsverdi.

---

## 5. Typiske feil (utledet av vurderingskriteriene)

1. **Uklar/uoperasjonaliserbar problemstilling eller vage hypoteser** — hypoteser uten tydelige variabler og retning kan ikke testes og gir lav uttelling.
2. **Manglende rød tråd** — design som ikke passer problemstillingen (tverrsnitt der longitudinelt trengs), eller analysevalg som ikke passer variablenes målenivå.
3. **Kausal tolkning av korrelasjon/tverrsnitt** — å påstå årsak fra samvariasjon uten eksperimentelt/longitudinelt design; korrelasjon på ett tidspunkt beviser aldri årsak.
4. **Stoppe ved signifikans** — å konkludere med «signifikant» uten å tolke **effektstørrelse** (η², r) og praktisk betydning; en signifikant F med lav η² betyr liten praktisk forskjell.
5. **Feil rad i t-testen** — å overse **Levenes test** og lese «Equal variances assumed» når variansene faktisk er ulike (eller motsatt).
6. **Glemme forutsetninger** — ikke sjekke at avhengig variabel er kontinuerlig (t-test/ANOVA/regresjon) eller at data er kategoriske og cellefrekvensen høy nok (kjikvadrat).
7. **Overse seleksjon og frafall** — behandle et frivillig/skjevt utvalg som representativt; ikke skille systematisk (farlig) fra tilfeldig (mindre farlig) frafall.
8. **Tynn variabelbeskrivelse** — ikke angi målenivå, indikatorer/subskalaer, svarkategorier eller intern-konsistens-testing.
9. **Overfladisk R²** — «modellen forklarer fem prosent» uten forståelse av forklart varians, adjusted R² eller nullmodell-sammenligningen.
10. **Ren gjengivelse uten tolkning** — å lese av tall fra SPSS-utskrift uten å si hva de *betyr* i kontekst; alt skal ende i en konklusjon på fagproblemstillingen.
11. **Utelate reliabilitet/validitet/generalisering** — den kritiske refleksjonen er et selvstendig og fast vurderingspunkt, ikke pynt.

---

## 6. Begreps- og faktaapparat

Emnet er begrepsdrevet, ikke formeldrevet. Læreboken bør bygge på **presis norsk metodeterminologi** (Ringdal) koblet til **SPSS-utskriftslesing** (Field). Ingen håndregning, ingen bevis, ingen formelutledning.

### Forskningsdesign og prosess
- Kvantitativ forskningsprosess i seks steg: idé → problemstilling → design → datainnsamling → dataanalyse → rapportering.
- Design: **tverrsnitt** (korrelasjons-/hypotesetestende studie, ett tidspunkt), **longitudinell/panel** (samme enheter over tid), **ekte eksperiment** (randomisering, eksperiment- vs. kontrollgruppe), **kvasieksperiment**.
- Problemstilling → testbare hypoteser (variabler + retning) → operasjonalisering.

### Kausalitet
- Betingelser: samvariasjon; tidsrekkefølge/asymmetri (årsak før virkning); kontroll for tredjevariabler/isolasjon av mekanismen; teoretisk forankring i samfunnsvitenskap.
- Korrelasjon ≠ kausalitet; indre vs. ytre validitet; hvorfor bare manipulerbare variabler kan være årsaker i eksperiment.

### Utvalg og populasjon
- Populasjon vs. utvalg; generalisering.
- Sannsynlighetsutvalg: **enkel tilfeldig (n/N), systematisk, stratifisert (proporsjonal/disproporsjonal), klynge/cluster**. Ikke-sannsynlighetsutvalg med underkategorier.
- Kvalitetsfeil: dekningsfeil, utvalgsfeil, frafallsfeil, justerings-/vektingsfeil.
- **Vekting** av utvalg; frafallstyper **MCAR/MAR/MNAR**; utvalgsstørrelse (populasjon, design, ressurser, ønsket presisjon, styrke, type I/II).

### Variabler og måling
- Målenivå: nominal, ordinal, intervall, forhold.
- Indikatorer, **latente variabler**, subskalaer, Likert-skalaer (1–5, 1–7).
- **Cronbachs alfa** som mål på intern konsistens (bygger på korrelasjon mellom items; anbefalt cut-off).
- Reversering av negativt formulerte items.

### Datahåndtering / screening
- Merge av datasett; missing data (identifisering og behandling); uteliggere; normalfordeling; sentraltendens og spredning; konstruksjon av subskalaer.
- Reliabilitet, validitet og generalisering/overføringsverdi som kvalitetsdimensjoner.

### Statistiske analyser (lese SPSS-utskrift — ikke regne)
- **Deskriptiv statistikk:** N, min/maks, gjennomsnitt, standardavvik; at kontinuerlige variabler gjenkjennes på disse tallene.
- **Korrelasjon:** Pearsons r (styrke, retning, signifikans), Spearmans rho, Sig. (2-tailed), * (0,05) / ** (0,01); Cohen-grenser for r (liten/medium/stor).
- **t-test:** uavhengig (independent samples) vs. parvis (paired samples); **Levenes test** for varianslikhet → valg av rad; t, df, Sig. (2-tailed), gjennomsnittsforskjell, standardfeil.
- **ANOVA:** enveis og repeterte målinger; nullhypotese om like gjennomsnitt; F-verdi og Sig.; sum of squares (between/within), df, mean square; **effektstørrelse eta² (η²)** med grenser **0,01 / 0,06 / 0,14**.
- **Regresjon (multippel, OLS):** R, **R Square** (forklart varians, 0–1), adjusted R²; ANOVA-del/F-test mot nullmodell; **unstandardisert B**, standardfeil, t, Sig. per prediktor; regresjonslikning og prediksjon; standardiserte betaer nevnt.
- **Krysstabell / kjikvadrat (kji²):** kategoriske variabler; forutsetning om minimum forventet cellefrekvens; N og missing.
- **Interaksjons-/samspilleffekter:** en uavhengig variabels effekt er betinget av en annen; lages som produktledd i regresjonen.

### Skal IKKE bygges tungt på
- **Formelutledning, sannsynlighetsregning for hånd, bevis, tabelloppslag** — forekommer aldri; det er ikke et regne-emne, og hjelpemidler er ikke tillatt fordi det ikke er noe å regne.
- **Faktoranalyse** står i emnebeskrivelsen, men er ikke testet på seks sett — dekkes lett/konseptuelt (dimensjonering, latente variabler).
- **Kode/programvare-syntaks:** SPSS brukes i undervisningen, men eksamen krever ingen kommandoer — kun tolkning av ferdig utskrift.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Studiedesign-essayet fra ende til annen** (5/6): problemstilling → to testbare hypoteser med retning → variabler med målenivå og indikatorer → begrunnet design → utvalgsstrategi → datahåndtering → kritisk refleksjon om reliabilitet/validitet/generalisering. Dette er emnets ryggrad; øv på å skrive den *sammenhengende* for et selvvalgt idrettsfaglig eksempel.
2. **SPSS-utskriftstolkning for alle fem analysene** (regresjon, ANOVA, korrelasjon, t-test, krysstabell). Fast oppskrift: egnet forskningsspørsmål → forutsetning om målenivå → beskriv nøkkeltallene → signifikans → effektstørrelse → konklusjon i kontekst.
3. **Effektstørrelse-grensene** (η² 0,01/0,06/0,14; r liten/medium/stor) og forskjellen mellom statistisk signifikans og praktisk betydning.
4. **Utvalg, populasjon og representativitet** (5/6): sannsynlighetsutvalgets fire typer, feilkilder, vekting og frafall.

### Nivå 2 — må kunne (gir de fleste resterende poengene)
5. **Kausalitet og design for årsak–virkning:** de tre/fire betingelsene, eksperiment/kvasi/panel/tverrsnitt med kjennetegn + styrker + svakheter, og «korrelasjon ≠ kausalitet».
6. **Variabelbeskrivelse i dybden:** målenivå, latente variabler, subskalaer, Likert, og **Cronbachs alfa** for intern konsistens.
7. **Datahåndtering/screening:** missing (MCAR/MAR/MNAR), uteliggere, normalitet, reversering, subskala-bygging — og hvorfor hvert steg hever kvaliteten.
8. **t-testens Levene-logikk** (velg riktig rad) og skillet uavhengig vs. parvis.
9. **Regresjonens R²-dybde** (forklart varians, adjusted R², nullmodell) og koeffisienttolkning + regresjonslikning + prediksjon.

### Nivå 3 — bør kjenne til (differensierer mot A og fanger nye vinklinger)
10. **Feilkilder gjennom hele forskningsprosessen** (seksstegs-rammen med konsekvenser) — ny i H2025, sannsynlig gjenganger.
11. **Krysstabell/kjikvadrat** med cellefrekvens-forutsetningen — ny i H2025.
12. **Vekting av utvalg** som korreksjon for skjevhet — ny i H2025.
13. **Utvalgsstørrelse/styrke** med type I/II — fast konte-klassiker.
14. **Interaksjons-/samspilleffekter** i regresjon (produktledd, betinget effekt).
15. **Repeterte målinger-ANOVA** (endring over tid).

**Prognose for neste eksamen (H2026 ordinær):** Fire likeverdige oppgaver à 25 % i 2024–25-malen. Forvent (1) én essay-oppgave om forskningsprosessen/design/utvalg — enten det store studiedesign-essayet, en utvalgs-/populasjonsoppgave, eller en feilkilde-oppgave; (2) én essay-/begrepsoppgave til (variabler/datahåndtering, kausalitet eller utvalgsstørrelse); og (3–4) to SPSS-tolkningsoppgaver, med **regresjon nesten sikker på ordinær** (2 av 3 hittil) og den andre trukket blant ANOVA, korrelasjon, t-test eller krysstabell. Effektstørrelse-tolkning og «korrelasjon ≠ kausalitet» er de mest sannsynlige tilleggskravene. På konte H2027 ligger utvalgsstørrelse-oppgaven og t-test-/ANOVA-tolkning erfaringsmessig klar. Boken bør derfor trene studenten i å **skrive en sammenhengende kvantitativ studieplan** *og* **lese alle fem SPSS-utskriftene** med den faste tolkningskjeden — begge ferdigheter er dokumentert i hvert eneste sett.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NIH/MET402/`.

**Ordinære eksamenssett lest grundig (3):**
- `met-402-2324.pdf` (H2023 ordinær, 27.11.2023) + `met-402-2324-sensorveiledning.pdf`
- `met-402-2425.pdf` (H2024 ordinær, 27.11.2024) + `met-402-2425-sensorveiledning.pdf`
- `met-402-2526.pdf` (H2025 ordinær, 26.11.2025) + `met-402-2526-sensorveiledning.pdf`

**Utsatt-/konteeksamener lest grundig (3):**
- `met-402-2324-utsatt.pdf` (20.02.2024) + `met-402-2324-utsatt-sensorveiledning.pdf`
- `met-402-2425-utsatt.pdf` (18.02.2025) + `met-402-2425-utsatt-sensorveiledning.pdf`
- `met-402-2526-utsatt.pdf` (19.02.2026) + `met-402-2526-utsatt-sensorveildning.pdf`

**Til sammen 12 dokumenter — 6 komplette sett, alle med fasit/vurderingskriterier.** Alle PDF-er hadde ekstraherbar tekst (`pdftotext -layout`); ingen ren skann, ingen OCR nødvendig.

**Fagbeskrivelse:** Utledet fra emneplanen som er vedlagt sensorveiledningene (NIH, emneansvarlig Marte Bentzen). Emnet er master-nivå, 10 sp, kun høst, forbeholdt programstudenter, med to godkjente gruppeinnleveringer som arbeidskrav. Pensum: Field, *Discovering Statistics Using IBM SPSS Statistics* (5. utg., kap. 1–18) og Ringdal, *Enhet og mangfold* (4. utg., kap. 1, 5, 6, 10, 13–18, 20–22). Status verifisert aktiv (STATUS.md, juli 2026).

**Merknader om kildene:**
- Oppgavesettene finnes i både bokmål og nynorsk; analysen er normalisert til bokmål.
- Tydelig formatskifte mellom H2023 (3 oppgaver, skjev vekting) og H2024–H2025 (4 likeverdige oppgaver à 25 %) — prognosen bygger på det nyeste regimet.
- Samme emneansvarlige/oppgavekonstruktør gjennom hele perioden gir høy stilkontinuitet og gjør gjengangermønstrene pålitelige.
- Kryssreferanse: se `nih-met200` (Forskningsmetode) for delt design-/utvalgs-/validitetsstoff; MET402 legger på det statistiske SPSS-tolkningslaget.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsforslag og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Statistiske begreper, SPSS-tabellnavn og standard effektstørrelse-grenser er alminnelig faglig terminologi og ikke opphavsrettslig beskyttet tekst.
