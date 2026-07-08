# Eksamensanalyse: PSYC2104 Kvantitativ metode A (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Basert på gjennomgang av **17 eksamenssett fra vår 2017 til vår 2026**, hvorav **14 har tilhørende sensorveiledning** (V2019, H2019, V2020, H2021, V2021 [= V2022-veiledningen i arkivet], V2022, H2022, V2023, H2023, V2024, H2024, V2025, H2025, V2026) samt tre eldre/nyere sett uten veiledning (V2017, H2017, V2020 hjemme). Emnet er **kvantitativ metode A på profesjonsstudiet i psykologi**, undervist av samme kjerneteam over hele perioden (samme fagansvarlige signatur i veiledningene). **Alt innhold er omskrevet med egne ord — ingen ordrette gjengivelser av oppgavetekster, tabelltall som ikke er strengt nødvendige, eller veiledninger.** Leses sammen med `fagbeskrivelse-psyc2104.md` (hvis den finnes) og i sammenheng med den allerede byggede PSY1010-analysen, som er UiOs *innførings*metodefag (se avgrensning i innledningen og del 7).

**Arketype: REGNE-/TOLKNINGSTUNG HYBRID med psykometrisk begrepskjerne.** PSYC2104 er verken et rent drøftingsfag eller et rent regnefag, men vippen står lenger mot det tekniske enn PSY1010. Hvert eneste sett i perioden består av (a) én til tre kortere *begrepsredegjørelser* i psykometri (reliabilitet, validitet, standardskårer, faktoranalyse), og (b) én stor, tungtveiende (~50 %) *tolkningsoppgave* der kandidaten leser ferdig SPSS-/jamovi-output fra multippel regresjon og medieringsanalyse og skal tolke koeffisienter, standardiserte koeffisienter, R², signifikans og mediatoreffekter. Tyngdepunktet ligger på å *lese og forstå statistisk output og psykometrisk logikk*, ikke på ren utregning fra rådata — men noen sett krever egen utregning (Z-/T-skårer, SEM, SEM for differanse, konfidensintervall for sann skåre), alltid med snille tall og der formelen enten er oppgitt eller forventes kjent. Læreboka må derfor bygges som en **psykometrisk begrepsbok med innebygd output-lesing**: hvert begrep skal kunne forklares i prosa, illustreres med et eksempel, OG gjenkjennes/tolkes i en tabell med regresjons- eller medieringsresultater.

---

## 1. Eksamensform og utvikling (2017–2026)

### Grunnformatet — «Alle oppgavene skal besvares»
Den viktigste strukturelle forskjellen fra PSY1010/PSYC1201 (som bruker «velg 3 av 4»): i PSYC2104 er **alle oppgavene obligatoriske**. Det står eksplisitt «Alle oppgavene skal besvares» i praktisk talt hvert sett.

- **3 timers skriftlig skoleeksamen** er hovedformen (2017–2019, 2022–2026). Digital i Inspera de senere årene.
- **Ingen hjelpemidler** er standard for skoleeksamenene (eksplisitt oppgitt 2017–2019, 2025). Enkel kalkulator forutsettes tilgjengelig når det skal regnes Z-/T-skårer/SEM.
- **Sensur etter tre uker.** Karakterskala A–F (bestått/ikke bestått-logikk vektlagt i veiledningene, se under).
- **Vektet oppgavestruktur (fra ca. 2022):** de nyere settene har en fast tredeling — **Oppgave 1 (25 %), Oppgave 2 (25 %), Oppgave 3 (50 %)**. Oppgave 1 og 2 er korte psykometriske begreps-/regneoppgaver; oppgave 3 er den store output-tolkningsoppgaven. Eldre sett (2017–2021) hadde 2–4 oppgaver med litt varierende vekting (V2021: oppgave 1–3 teller 50 % til sammen, oppgave 4 teller 50 %; H2021 hadde bare to likt vektede oppgaver som firetimers digital hjemmeeksamen).

### Bestått-mekanikken (styrer risikoprofilen)
Til forskjell fra 3-av-4-fagene finnes ingen «snitt av de tre beste». Veiledningene er tydelige:
- **Alle tre hovedoppgavene må være tilfredsstillende besvart for å bestå.** H2025-veiledningen sier det rett ut: en god besvarelse på oppgave 1 og 2 kan *ikke* veie opp for en manglende oppgave 3 — det regnes som en betydelig mangel i forståelse og gir «ikke bestått».
- **V2023-veiledningen:** «Alt må ikke være riktig, men både oppgave 1 og 2 må være tilfredsstillende besvart.»
- **Konsekvens for læreboka:** studenten kan *ikke* velge bort et hovedtema. Siden oppgave 3 (regresjon/mediering) alltid teller 50 % og er obligatorisk, er den enkelt-viktigste ferdigheten på hele eksamen å tolke regresjons- og medieringsoutput. Denne må drilles til refleks.

### Faser i formatet
1. **2017–2019 (ren skoleeksamen, ingen hjelpemidler, faktoranalyse-tung):** Faktoranalyse var et bærende tema — egen stor oppgave med SPSS-output (antall faktorer, rotasjon, faktorladninger, kommunalitet, enkel struktur) i V2017, H2017, H2018, V2019. V2019 gikk usedvanlig dypt (faktorladning som standardisert regresjonskoeffisient, Kaiser/Cattell/Horns parallellanalyse, Spearman-Brown-formelen, split-half). Regneinnslaget (SEM, Z/T) var også til stede.
2. **Vår 2020 (pandemi, hjemmeeksamen):** Åpen, individuell hjemmeeksamen (8–12 sider anbefalt), datafil (.sav) utlevert slik at kandidaten selv kjørte analysene i SPSS. Fire obligatoriske oppgaver: baserate/seleksjonsrate, reliabilitet, SEM-regning på WAIS, og en full Theory-of-Planned-Behavior-medieringsmodell med forutsetningssjekk. Dette er det eneste settet der kandidaten selv produserer output.
3. **Høst 2021 (digital hjemmeeksamen, 4 timer):** To likt vektede oppgaver; introduserte **moderering/interaksjonsledd** som eget deloppgave-tema (buffer-hypotese) i tillegg til mediering.
4. **2022 → (tilbake til skoleeksamen, fast 25/25/50-profil):** Output leveres nå ferdig i vedlegg (kandidaten tolker, kjører ikke selv). Faktoranalyse er tonet kraftig ned/ute; psykometrikjernen er nå reliabilitet + validitet + standardskårer, og oppgave 3 er alltid en regresjons-/medieringsoppgave med tabeller. Fra ca. H2024/2025 presenteres output i jamovi-stil (Estimate/SE/t/p/Stand. Estimate; egne «Mediation Estimates»- og «Path Estimates»-tabeller med a×b, direkte, total effekt og % mediering).

### Strukturelle konstanter en lærebok kan banke på
1. **Alltid en stor output-tolkningsoppgave (~50 %)** bygget på multippel regresjon med en dikotom «gruppe»-variabel (diagnose/behandling/kjønn/støtte) + kontrollvariabler, som deretter utvides til en **medieringsmodell**. Dette har stått i *hvert eneste sett* 2017–2026.
2. **Alltid minst én reliabilitetsoppgave og én validitetsoppgave** blant de korte oppgavene.
3. **Standardskårer (Z, T, prosentiler) og SEM** kommer igjen med jevne mellomrom som liten regne-/tolkningsoppgave.
4. **Kausalitetsforbeholdet er obligatorisk finale:** nesten hver medieringsoppgave avsluttes med «betyr en mediatoreffekt at man har bevist kausalitet?» — svaret er alltid nei, og dette premieres.
5. **Massiv gjenbruk av scenarioer og deloppgaver** (se del 2). Å drille gamle sett er den mest treffsikre forberedelsen.

---

## 2. Temafrekvens-tabell

Opptelling over de 17 settene 2017–2026 (V = vår, H = høst). Et tema telles per sett der det opptrer som (del)oppgave. «★★★» = kjernetema, kommer så godt som garantert; «★★» = hyppig/differensierende; «★» = periferт/utfaset.

| Tema | Sett (år) | Ant. | Score + kommentar |
|---|---|---|---|
| **Multippel regresjon: tolke ustandardisert b (retning/enhet), dikotom vs. kontinuerlig prediktor, konstantledd = forventet skåre, forventet skåre for gruppe, R² som forklart varians** | V2017, H2017, H2018, V2019, H2019, V2020, H2021, V2021, V2022, H2022, V2023, H2023, V2024, V2025, H2025, V2026 | **16** | ★★★ Den suverene gjengangeren — kjernen i den 50 %-tunge oppgave 3 i hvert sett |
| **Mediering: mediator-begrep, indirekte effekt a×b, direkte (c′) vs. total (c) effekt, hel vs. delvis mediering, Baron & Kenny fire trinn, tegne mediatormodell** | V2017, H2017, H2018, V2019, H2019, V2020, H2021, V2021, V2022, H2022, V2023, H2024, H2025, V2026 | **14** | ★★★ Nesten alltid siste og tyngste ledd i oppgave 3 |
| **«Endrer b seg når kontrollvariabel legges til?» — statistisk kontroll, konfundering, isolering av unik effekt, korrelerte prediktorer** | H2018, V2021, H2022, V2023, H2024, V2024, V2025, H2025, V2026 | **9** | ★★★ Det sentrale A/B-skillet i regresjonsoppgaven |
| **Reliabilitet: klassisk testteori (X = T + e), de fire hovedformene (test–retest, alternativ/parallell form, split-half, intern konsistens/Cronbachs α), styrker/svakheter, stabilt vs. ustabilt trekk** | V2017, V2019, V2020, V2022, V2023, V2024, V2025, H2024, H2025, V2026 | **10** | ★★★ Fast kortoppgave |
| **Målingsvaliditet: innholds-, kriterie- (samtidig/prediktiv), begreps-/konstruktvaliditet (konvergent/diskriminant); validitetens avhengighet av testens hensikt** | H2019, H2021, V2022, V2023, V2024, V2025, H2024, H2025, V2026 | **9** | ★★★ Fast kortoppgave |
| **Cronbachs α i dybden: hva α avhenger av (antall ledd + interkorrelasjoner), «α if item deleted», høy α ≠ god skala (for smal/for like ledd → svekket innholds-/begrepsvaliditet), α vs. bredde** | V2017, V2019, V2023, V2024, V2025, H2024, H2025 | **7** | ★★★ Klassisk differensieringsledd (særlig «α = .95 — bra eller problematisk?») |
| **Standardskårer: Z-skåre, T-skåre (M = 50, SD = 10), IQ-skåre, Stanine/Sten; formler, tolkning mot normalfordeling/prosentiler; hvorfor råskårer er vanskelige** | V2017-nær, H2019, V2020, V2021, V2024, V2026, H2025 | **7** | ★★★ Fast regne-/redegjørelsesoppgave |
| **Standardiserte (beta-)koeffisienter: definisjon, tolkning i SD-enheter, sammenligning av prediktorers relative styrke, begrensning ved dikotome prediktorer** | H2019, V2020, V2021, V2022, H2024, V2025, H2025, V2026 | **8** | ★★★ Fast deloppgave i output-tolkningen |
| **Kausalitetsforbeholdet: mediering ≠ bevis for kausalitet, alternative kausalmodeller, «forårsaker X virkelig Y?»** | V2017, H2017, H2018, V2019, H2019, H2022, V2023, V2024, V2025, H2024 | **10** | ★★★ Obligatorisk finale i medieringsoppgaven |
| **Faktoranalyse (EFA): antall faktorer (Kaiser/egenverdi > 1, scree-plot/Cattell, parallellanalyse/Horn), rotasjon (ortogonal/varimax vs. oblik), faktorladning, kommunalitet, enkel/parsimonisk struktur, kryssladninger, faktorbaserte skårer vs. faktorskårer** | V2017, H2017, H2018, V2019 | **4** | ★★ Bærende 2017–2019, deretter så godt som **utfaset** (fravær påfallende siden 2020) |
| **Standardfeil for måling (SEM): X = T + e, SEM = σ√(1 − rₓₓ), avhengighet av SD og reliabilitet, konfidensintervall for sann skåre, SEM for differanse mellom to personer** | V2020, V2021, V2022, H2022 | **4** | ★★ Fast regneoppgave 2020–2022, deretter sjeldnere |
| **Forutsetninger for regresjon: linearitet, normalfordelte residualer, innflytelsesrike uteliggere, multikollinearitet (toleranse/VIF), kurvilineær sammenheng (kvadratledd, ΔR²)** | V2020, V2024, V2025, H2024, H2025 | **5** | ★★ Stigende; kurvilineær effekt via inntekt²/kvadratledd er ny gjenganger (V2025, H2025) |
| **Moderering/interaksjon: interaksjonsledd i regresjon, betinget effekt, buffer-/forsterkningshypotese, tolke fortegn på interaksjonskoeffisienten, ΔR²-test** | H2019 (begrep), H2021, V2021 | **3** | ★★ Introdusert 2021; skille mot mediering er A-stoff |
| **Bootstrapping av indirekte effekt / Hayes' Process / Preacher & Hayes-makro: konfidensintervall som ikke krysser null, fordel framfor Baron & Kenny (signifikanstest av a×b), Sobels test nevnt** | V2019, H2019, V2020, H2021, V2021, V2022, V2023, H2023, V2024 | **9** | ★★★ Fast «hvordan er den indirekte effekten testet?»-ledd |
| **Baserate/seleksjonsrate, sanne/falske positive/negative, hit-/miss-rate, testens nytteverdi i beslutninger** | V2020 (+ hjemme) | **1** | ★ Kun V2020 — perifert, men i pensum |
| **Kriterievaliditet undervurderes: restriction of range, mangelfullt kriteriemål, baserate-effekter på validitetskoeffisienten** | V2021 | **1** | ★ Kun V2021 — avansert deltema |
| **Refleksive vs. formative målemodeller; om reliabilitet er meningsfull for formative indikatorer** | H2017 | **1** | ★ Kun H2017 — perifert |
| **Rekoding av reverserte ledd før reliabilitetsanalyse** | V2023 | **1** | ★ Én gang; lettvint deloppgave |

### Trendbrudd læreboka må ta hensyn til
- **Faktoranalyse er nedprioritert (2020 →).** Fra å være halve eksamen 2017–2019 har EFA vært fraværende siden pandemien. Boka bør dekke EFA solid nok til å tolke en output (antall faktorer, rotasjon, ladninger, kommunalitet, enkel struktur), men behøver ikke gå til V2019-veiledningens matematiske dybde (Horns parallellanalyse-simulering, Spearman-Brown-utledning) som hovedstoff — dette bør stå som fordypning.
- **Output-tolkning har overtatt for egen utregning (2022 →).** Der 2019/2020 ba kandidaten kjøre analyser selv eller regne SEM for hånd, gis output nå ferdig; oppgaven er å *lese og forklare*. Boka må trene lesing av regresjons-, medierings- og path-tabeller (jamovi-stil: Estimate/SE/t/p/Stand. Estimate; Mediation Estimates med a×b, direkte, total, % mediering).
- **Kurvilineær sammenheng er ny fast deloppgave (V2025, H2025):** hva menes, og hvordan testes den (kvadratledd + signifikant ΔR²/signifikant kvadratkoeffisient, spredningsdiagram av residualer). Dette er stigende.
- **Regnekjernen (Z/T/SEM) er billig å vedlikeholde:** enkle formler, snille tall, kommer syklisk igjen (Z/T i V2021, V2024, V2026, H2025; SEM 2020–2022). Bør beholdes.
- **Faste gjenbrukte scenarioer:** MLQ/Meaning in Life-skalaen (V2023 = H2023, med antall barn → mening → positiv affekt allerede i V2017); BIAQ/kroppsbilde + sosial selvbevissthet (H2017 = V2022); depresjon → reaksjonstid → WAIS (H2018); TPB → intensjon → trening (V2020); depresjon/screeningtest + livskvalitet/tilfredshet-medieringer (V2025, H2025, V2026). Antall-barn-medieringen (V2017 → V2023) og BIAQ-medieringen (H2017 → V2022) er nesten ordrett gjenbrukt.

---

## 3. Oppgavetype-katalog

### Type 1: Den store regresjons-/medieringsoppgaven (~50 %, oppgave 3)
Selve ryggraden i faget. Standardforløp over deloppgavene, bygget på et scenario med én dikotom hovedprediktor (diagnose/behandlingsgruppe/kjønn/støtte, kodet 0/1), én utfallsvariabel Y, og en eller flere kontroll-/mediatorvariabler:
1. **«Tolk koeffisienten i modell 1 (bivariat). Hva er forventet Y for hver gruppe?»** Toppsvar: b for en 0/1-variabel = gjennomsnittsforskjellen mellom gruppene; konstantleddet = forventet Y for referansegruppen (kodet 0); forventet Y for gruppe 1 = konstant + b; kommenter fortegn/retning, statistisk signifikans (p mot 0,05), og R² som andel forklart varians med et realistisk forbehold («100 % ville betydd at alle i en gruppe hadde identisk skåre — urealistisk»).
2. **«Modellen utvides med kontrollvariabler (alder/kjønn/helse). Hvorfor endrer b seg?»** A/B-skillet: b endres fordi prediktorene er korrelerte; ved å inkludere kontrollvariabelen kontrolleres/justeres det statistisk for den, slik at man isolerer den *unike* effekten. Hvis b krymper mye, var den opprinnelige sammenhengen delvis konfundert. Toppsvar tallfester (f.eks. «gruppene sammenlignes som om de hadde samme alder»).
3. **«Beskriv resultatene i modell 2 — retning, styrke, signifikans.»** Tolk hver koeffisient (enhet for enhet for kontinuerlige, gruppeforskjell for dikotome), kommenter standardiserte koeffisienter for å sammenligne relativ styrke, kommenter R².
4. **«Hva viser standardiserte (beta-)koeffisienter, og er de nyttige her?»** SD-endring i Y per SD-endring i X; muliggjør sammenligning på tvers av ulike skalaer; A-markør: mindre meningsfull for dikotome prediktorer (ett SD er ikke en meningsfull enhet).
5. **«Er sammenhengen mellom X og Y kurvilineær? Hva menes, og hvordan testes det?»** (nyere) Ikke-lineær sammenheng (f.eks. avtakende effekt); inkluder kvadratledd (X²); signifikant X²-koeffisient eller signifikant ΔR² støtter kurvilinearitet.
6. **«Er en mediatoreffekt til stede? Hel eller delvis?»** Beskriv stiene: a (X→M), b (M→Y kontrollert for X), c (total X→Y), c′ (direkte X→Y kontrollert for M). Indirekte effekt = a×b (= c − c′). Delvis mediering hvis c′ fortsatt ≠ 0 men redusert; tilnærmet full hvis c′ blir liten/ikke-signifikant. A-markør: å beregne andel mediering (a×b / c) og ikke bruke ΔR² som medieringskriterium (eksplisitt minuspoeng i H2018/H2019).
7. **«Hvordan er den indirekte effekten testet / hva er fordelen?»** Bootstrapping (Hayes/Preacher & Hayes Process-makro) gir konfidensintervall for a×b; signifikant hvis KI ikke krysser null; fordelen framfor Baron & Kenny er at a×b faktisk signifikanstestes (Sobels test som eldre alternativ).
8. **«Betyr mediering at kausalitet er bevist?»** Nei — samvariasjon ≠ kausalitet; foreslå en alternativ kausalmodell; ikke-eksperimentelle data gir bare *støtte* for hypotesen.
9. **«Hvilke forutsetninger ville du sjekket?»** Linearitet, normalfordelte residualer, innflytelsesrike uteliggere, multikollinearitet (toleranse/VIF; ofte allerede avklart via prediktorenes interkorrelasjon).

**Omskrevet eksempeloppgave:** *«En forsker undersøker om personer med diagnosen X (kodet 1) skårer annerledes på et utfall enn personer uten (kodet 0). (a) Tolk koeffisienten i modell 1 og oppgi forventet skåre for hver gruppe. (b) Alder legges til som kontroll (gruppene er ulike i alder). Hvorfor endres gruppeforskjellen? (c) Beskriv modell 2 (retning, styrke, signifikans) og tolk de standardiserte koeffisientene. (d) Path- og medieringstabellene viser a×b, c′ og c. Er effekten helt eller delvis mediert? (e) Har du dermed bevist en årsakssammenheng?»*

### Type 2: Reliabilitetsoppgaven (kort, oppgave 1)
1. **«Gjør rede for ulike måter å estimere reliabilitet.»** Definer reliabilitet fra klassisk testteori (X = T + e; reliabilitet = andel sann varians i observert varians). Fire hovedformer: test–retest (stabilitet over tid — best for stabile trekk), alternativ/parallell form, split-half (+ Spearman-Brown-korreksjon for halvering), intern konsistens/Cronbachs α. Interrater kan nevnes. Styrker/svakheter: test–retest forveksler ekte endring med lav reliabilitet; α avhenger av antall ledd.
2. **«Tolk en gitt α-verdi.»** ≥ 0,70 tilfredsstillende for forskning; 0,45/0,68 for lav → mye målefeil. Tiltak: item-analyse («α if item deleted», item-total-korrelasjon), fjerne/reformulere svake ledd, legge til relevante ledd — men alltid veid mot innholdsdekning.
3. **«α = .95 — bra eller problematisk?»** (klassisk differensierer) Høy α = høy reliabilitet, men med få ledd kan svært høy α bety at leddene er *for like* og måler et *for smalt* aspekt → svekket innholds-/begrepsvaliditet. Avveining reliabilitet vs. bredde.
4. **«Ville du fjernet et ledd som øker α?»** Nei automatisk — liten α-økning må veies mot innholdsvaliditet (bred vs. smal måling); sjekk om leddet har negative/null-korrelasjoner (kan tyde på flerdimensjonalitet → faktoranalyse) eller måler et annet aspekt man vil beholde.

### Type 3: Validitetsoppgaven (kort, oppgave 2)
1. **«Gjør rede for former for målingsvaliditet.»** Innholdsvaliditet (ekspertvurdering av relevans + representativitet; face validity som svakere variant); kriterievaliditet (samtidig vs. prediktiv, målt som validitetskoeffisient/korrelasjon med kriterium); begreps-/konstruktvaliditet (konvergent = høy korrelasjon med beslektede mål; diskriminant = lav korrelasjon med urelaterte mål; multitrait-multimethod; faktoranalyse for intern struktur). A-markør: hvilken form som er viktigst avhenger av testens hensikt (måle et begrep vs. ta beslutninger/selektere).
2. **«Høy reliabilitet, men svak korrelasjon med etablerte mål — hva sier det?»** Lav konvergent validitet → testen måler kanskje noe annet; reliabel ≠ valid.
3. **«Høy begrepsvaliditet, men lav kriterievaliditet — konsekvens?»** Måler begrepet presist, men predikerer utfall dårlig → lite nyttig i praksis (diagnostikk, seleksjon).
4. **«Kan en test være valid uten å være reliabel?»** Nei — reliabilitet er en nødvendig, men ikke tilstrekkelig betingelse for validitet.

### Type 4: Standardskåre- og SEM-oppgaven (kort regning)
- **Z-skåre:** Z = (X − M)/SD; tolk mot normalfordeling (Z = 2 ≈ 97,5-percentilen). **T-skåre:** T = 50 + 10·Z. **IQ, Stanine, Sten** som andre transformasjoner. Formål: gjøre råskårer sammenlignbare på tvers av personer/tester/delskalaer.
- **Ved ikke-normalfordelte skårer:** bruk prosentiler eller stanine (fordelingsfrie relative posisjoner) i stedet for Z/T.
- **SEM:** SEM = σ√(1 − rₓₓ); vokser med SD, krymper med reliabilitet (rₓₓ = 1 → SEM = 0). Konfidensintervall for sann skåre: X ± 1,96·SEM. **SEM for differanse mellom to personer:** SEM_diff = σ√(2 − rₓₓ − rₓₓ); forskjell er «reell» på 95 %-nivå hvis den overstiger 1,96·SEM_diff.

**Omskrevet eksempeloppgave:** *«En skala har M = 18, SD = 3 i normutvalget. En person skårer 24. (a) Regn om til Z- og T-skåre og vurder avviket. (b) Skårene er ikke normalfordelte — hvilken alternativ måte kan vise personens relative posisjon?»*

### Type 5: Faktoranalyseoppgaven (2017–2019, nå fordypning)
Tolke en EFA-output: (a) antall faktorer via egenverdi > 1 (Kaiser — gir *maksimalt* antall), scree-plot (Cattell), parallellanalyse (Horn — sammenlign mot egenverdier fra strukturløse tilfeldige data); (b) enkel/parsimonisk struktur (hver variabel lader høyt på kun én faktor, ~0,32-grense; kryssladninger problematiske); (c) rotasjon (varimax = ortogonal/ukorrelerte faktorer, gjenkjennes ved at kvadrerte ladninger summerer til kommunaliteten; oblik = tillatt korrelasjon → mønster- vs. strukturmatrise); (d) faktorladning = standardisert regresjonskoeffisient (= korrelasjon når faktorene er ukorrelerte); kommunalitet = sum av kvadrerte ladninger = forklart varians i variabelen; (e) faktorbaserte skårer (lik vekting, sumskåre) vs. faktorskårer (ladningsvektet). Teoretisk/substansiell tolkning og navngiving av faktorer premieres.

### Type 6: Moderering/interaksjon (2021 →)
Interaksjonsledd i regresjon tester om effekten av X på Y er *betinget* av en tredje variabel (moderatoren). Tolk fortegn: negativt interaksjonsledd + positiv hovedeffekt → effekten er svakere i den ene gruppen (buffer). Signifikans vurderes via interaksjonskoeffisientens p ELLER ΔR² (samme p-verdi). Skille mediering (mekanisme, mellomliggende) fra moderering (betingelse) er eksplisitt A-stoff.

---

## 4. Sensorens krav — hva som skiller karakternivåene

Veiledningene deler en fast vurderingsfilosofi (samme kjerneteam over hele perioden), her omskrevet:

### Grunnprinsipper
- **Forståelse trumfer fullstendighet.** Veiledningene beskriver «hva en ideell besvarelse bør inneholde»; man kan bestå uten alt. «Ikke bestått» gis ved alvorlige faglige feil eller mangelfull dekning av sentrale temaer.
- **Alle tre hovedoppgaver må være tilfredsstillende** (se del 1) — ingen kompensasjon mellom oppgaver. Særlig: en manglende oppgave 3 gir «ikke bestått» uansett oppgave 1 og 2.
- **Eksempler trekker opp** — eksplisitt oppmuntret i validitets-, reliabilitets- og standardskåreoppgavene.
- **Regneoppgaver: vis fremgangsmåten.** Utregning må vises (Z/T/SEM); enkle regnefeil og fortegnsrot tilgis så lenge logikken er korrekt (V2019: «litt regnefeil og rot med fortegn … er tilgivelig så lenge logikken er på plass»).

### Konkrete pluss (A/B-markører)
- Å tolke *hvorfor* en regresjonskoeffisient endres når kontrollvariabler legges til (statistisk kontroll / isolering av unik effekt / konfundering).
- Å beregne **andel mediering** (a×b / c) og formulere den indirekte effekten i ord.
- Å påpeke at **bootstrapping** signifikanstester den indirekte effekten (fordel framfor Baron & Kenny), og at KI som ikke krysser null = signifikant a×b.
- Å se at **høy Cronbachs α kan svekke innholds-/begrepsvaliditet** (for smal/for like ledd).
- Å knytte valg av reliabilitetsmetode til om trekket er **stabilt over tid** (test–retest for stabile trekk).
- Å påpeke at **standardiserte koeffisienter er lite meningsfulle for dikotome prediktorer**.
- Å problematisere den foreslåtte **kausalmodellen** (alternative forklaringer, retningsproblem, utelatte variabler).
- Å nevne at faktorladning = standardisert regresjonskoeffisient, og at Kaisers kriterium gir *maksimalt* antall faktorer (parallellanalyse er strengere).
- Å foreslå og tegne mediator-/moderatormodell.

### Eksplisitt trekk / minuspoeng
- **Å bruke endring i R² som kriterium for mediering** — eksplisitt minuspoeng (H2018, H2019).
- Å konkludere med bevist kausalitet fra en medieringsanalyse.
- Å ikke vise utregning i regneoppgaver.
- Å blande mediering og moderering.
- Å behandle høy α ukritisk som utelukkende bra.

### Nivåbilde (destillert — emnet har ikke publiserte karakterbeskrivelser per nivå)
- **A/B:** tolker hele output-oppgaven presist (retning, enhet, standardiserte koeffisienter, R², kontroll-logikk); beregner og forklarer indirekte effekt og andel mediering; skiller mediering/moderering; kobler α til validitet; problematiserer kausalitet; korrekt regning med vist fremgangsmåte.
- **C:** tolker koeffisienter og R² riktig, definerer reliabilitet/validitet korrekt, regner Z/T/SEM riktig, men blir stående i tolkningen — mangler kontroll-logikken, andel mediering, kausalitetsforbeholdet og de fine skillene.
- **D/E:** upresise definisjoner, feiltolker konstantledd/dikotome koeffisienter, klarer ikke koble output til begrep.
- **F:** en av de tre hovedoppgavene (særlig oppgave 3) reelt ubesvart, eller systematisk sammenblanding av grunnbegreper.

---

## 5. Typiske feil (fra veiledningenes egne advarsler)

1. **ΔR² som medieringskriterium** — den eneste feilen med eksplisitt minuspoeng-instruks (H2018, H2019). Mediering vurderes fra stiene/den indirekte effekten, ikke fra økning i forklart varians.
2. **Kausal overtolkning av mediering** — å konkludere at X *forårsaker* Y fordi a×b er signifikant, uten forbeholdet om at ikke-eksperimentelle data bare gir *støtte* for kausalhypotesen.
3. **Feiltolkning av konstantleddet** — å ikke se at konstanten er forventet Y for referansegruppen (kodet 0), og at den ved flere prediktorer gjelder når *alle* prediktorer er 0.
4. **Feiltolkning av dikotom koeffisient** — å behandle b for en 0/1-variabel som en «per enhet»-effekt i stedet for gruppeforskjellen; å tolke standardisert koeffisient for dikotom prediktor som meningsfull.
5. **Å overse hvorfor b endres med kontrollvariabler** — å ikke koble endringen til korrelerte prediktorer / konfundering / statistisk kontroll.
6. **Høy α tolket ukritisk** — å hylle α = .95 uten å se faren for for smal måling og svekket innholds-/begrepsvaliditet.
7. **Reliabel = valid-forvekslingen** — å ikke se at høy reliabilitet ikke garanterer validitet.
8. **Feil reliabilitetsmetode for ustabilt trekk** — å anbefale test–retest for et trekk som forventes å endre seg (da fanger lav test–retest ekte endring, ikke lav reliabilitet).
9. **Å blande mediering og moderering** — mekanisme (mellomliggende variabel) vs. betingelse (interaksjon).
10. **Å ikke vise regneframgang** (Z/T/SEM) — usynlig utregning kan ikke reddes.
11. **Faktoranalyse: Kaisers kriterium tatt bokstavelig** — å konkludere med «riktig» antall faktorer fra egenverdi > 1 uten å se at det gir *maksimalt* antall (parallellanalyse/scree er strengere) og uten teoretisk/substansiell vurdering.
12. **Å tolke uroterte i stedet for roterte ladninger** (V2019 advarer eksplisitt om at forklart varians fordeles annerledes etter rotasjon).
13. **Å ignorere kryssladninger / påstå enkel struktur uten dekning.**
14. **Å svare på validitet når det spørres om reliabilitet (og omvendt)** — blande de to hovedkvalitetsbegrepene.
15. **Å hoppe over kausalitets-/forbeholdsleddet** som avslutter medieringsoppgaven (nesten alltid siste deloppgave, ofte lavthengende poeng).

---

## 6. Begreps- og pensumapparat — statistiske/psykometriske begreper

### Pensumankere sensor refererer til
| Kilde | Rolle | Det veiledningene henter derfra |
|---|---|---|
| **Lærebok i teststatistikk / psykometri** (klassisk testteori) | Reliabilitet, validitet, standardskårer, SEM, baserate/seleksjonsrate | X = T + e; de fire reliabilitetsformene; Spearman-Brown; validitetstypologien (innhold/kriterie/begrep, konvergent/diskriminant, MTMM); SEM-formlene; baserate/seleksjonsrate og sanne/falske positive |
| **Lærebok/forelesning i regresjon og faktoranalyse** | Multippel regresjon, mediering, moderering, EFA | Tolkning av b/beta/R²; statistisk kontroll; Baron & Kenny fire trinn; Hayes/Preacher & Hayes Process-makro og bootstrapping; Sobels test; EFA (Kaiser/Cattell/Horn, rotasjon, ladning, kommunalitet, enkel struktur, faktor(baserte) skårer) |
| **Forelesningene (Canvas: reliabilitet.pdf m.m.)** | Selvstendig kilde | Split-half + Spearman-Brown-utledning; parallellanalyse-simulering; skille mediering/moderering; forbehold om at målefeil i mediator krever SEM-modell (utenfor pensum) |

### Kjernebegreper (alt under er spurt direkte minst én gang — bokas begreps-/flervalgsbank)

**Klassisk testteori:** observert skåre X = sann skåre T + målefeil e; reliabilitet som andel sann varians; parallelle målinger; standardfeil for måling (SEM); konfidensintervall for sann skåre; SEM for differanse.

**Reliabilitet:** test–retest (stabilitet); alternativ/parallell form; split-half + Spearman-Brown-korreksjon; intern konsistens/Cronbachs α (avhengig av antall ledd + interkorrelasjoner); standardisert vs. ustandardisert α; interrater; «α if item deleted»; item-total-korrelasjon; bred vs. smal måling; stabilt vs. ustabilt trekk.

**Validitet:** målingsvaliditet (gyldighet); innholdsvaliditet (relevans + representativitet, ekspertvurdering); face validity; kriterievaliditet (samtidig/concurrent + prediktiv; validitetskoeffisient; restriction of range; mangelfullt kriterium); begreps-/konstruktvaliditet (konvergent, diskriminant, multitrait-multimethod, intern struktur via faktoranalyse); reliabel ≠ valid (reliabilitet som nødvendig, ikke tilstrekkelig betingelse); baserate, seleksjonsrate, sanne/falske positive/negative, hit-/miss-rate, testens nytteverdi.

**Standardskårer:** råskåre/sumskåre; Z-skåre (M = 0, SD = 1); T-skåre (M = 50, SD = 10); IQ-skåre; Stanine/Standard Nine; Sten/Standard Ten; percentiler; normalfordeling som grunnlag; 68/95/99,7; formål (sammenlignbarhet på tvers av personer/tester/delskalaer); fordelingsfrie alternativer ved ikke-normalitet.

**Faktoranalyse (EFA):** latent variabel/faktor; observert indikator; faktorladning (= standardisert regresjonskoeffisient; = korrelasjon når faktorer er ukorrelerte); kommunalitet; egenverdi; kriterier for antall faktorer (Kaiser/egenverdi > 1 = maksimalt antall; Cattells scree-plot; Horns parallellanalyse); rotasjon (ortogonal/varimax vs. oblik; mønster- vs. strukturmatrise); enkel/parsimonisk struktur; kryssladninger; komplekst ledd; faktorbaserte skårer vs. faktorskårer; datareduksjon; refleksiv vs. formativ målemodell; PCA vs. faktoranalyse (skille ikke krevd); EFA vs. CFA (CFA nevnt, ikke pensum).

**Regresjon:** enkel vs. multippel lineær regresjon; prediktor/uavhengig variabel og kriterium/avhengig variabel; ustandardisert regresjonskoeffisient b (enhet-for-enhet; gruppeforskjell for dikotom); konstantledd/intercept (forventet Y ved alle prediktorer = 0); standardisert (beta-)koeffisient (SD-per-SD; begrenset mening for dikotome); dummy-/0-1-koding; R² som forklart varians (og ΔR²); statistisk signifikans (p mot α = 0,05, «<.001»); statistisk kontroll / justering; unik vs. delt forklaringskraft; konfundering; suppressoreffekt (b øker/skifter fortegn ved kontroll); forutsetninger (linearitet, normalfordelte residualer, homoskedastisitet, uteliggere, multikollinearitet med toleranse/VIF); kurvilineær effekt (kvadratledd, ΔR², logaritmisk transformasjon [nevnt, ikke krevd]); korrelasjon som spesialtilfelle (standardisert b = r ved én prediktor).

**Mediering:** mediator/mellomliggende variabel; kausalkjede X→M→Y; sti a (X→M), b (M→Y | X), c (total X→Y), c′ (direkte X→Y | M); indirekte effekt = a×b = c − c′; hel vs. delvis mediering; andel mediering (a×b / c); Baron & Kenny fire trinn; Sobels test; bootstrapping (Hayes/Preacher & Hayes Process-makro; percentil-KI; 5000 bootstrap-utvalg; signifikant hvis KI ikke krysser null); målefeil i mediator (SEM som ideell løsning, utenfor pensum).

**Moderering:** moderator; interaksjonsledd; betinget/enkel effekt; buffer- vs. forsterkningseffekt; tolkning av interaksjonskoeffisientens fortegn; ΔR²-test; skille mediering ↔ moderering.

**Kausalitet i ikke-eksperimentell forskning:** samvariasjon ≠ kausalitet; retningsproblem; tredjevariabel/konfundering; spuriøsitet; alternative kausalmodeller; statistisk kontroll som (ufullstendig) surrogat for randomisering; mediering/moderering som *foreslåtte* kausalmodeller, ikke bevis.

### Statistisk notasjon boka må normalisere
| Notasjon | Betydning |
|---|---|
| X = T + e | observert = sann skåre + målefeil (klassisk testteori) |
| rₓₓ (rxx′, ρxx′) | reliabilitetskoeffisient |
| α (Cronbachs alfa) | intern konsistens-reliabilitet |
| SEM = σ√(1 − rₓₓ) | standardfeil for måling |
| SEM_diff = σ√(2 − rₓₓ − rₓₓ) | standardfeil for differanse mellom to personer |
| Z = (X − M)/SD ; T = 50 + 10·Z | standardskåre-transformasjoner |
| b, β (Stand. Estimate) | ustandardisert / standardisert regresjonskoeffisient |
| R², ΔR² | forklart varians; endring i forklart varians |
| a, b, c, c′ ; a×b | medieringsstier og indirekte effekt |
| LLCI/ULCI, BootLLCI/BootULCI | nedre/øvre konfidensgrense (bootstrap) |
| p, «<.001» | signifikanssannsynlighet mot α = 0,05 |

Regneferdighetene som faktisk er krevd (snille tall, formel oppgitt eller forventet): Z- og T-skåre fra M, SD og X; forventet Y for gruppe fra konstant + b; SEM fra σ og rₓₓ; konfidensintervall for sann skåre (X ± 1,96·SEM); SEM_diff og «reell forskjell?»-test; indirekte effekt a×b og andel mediering a×b/c; avlesning av regresjons-, medierings-, path- og faktoranalysetabeller.

---

## 7. Prognose og prioritering

### Avgrensning mot PSY1010 (kritisk — unngå dublering)
PSY1010 er UiOs **innførings**metodefag: korrelasjon (tolke r, korrelasjon ≠ kausalitet, tredjevariabler), nullhypotesetesting (H0/H1, p-verdi, Type I/II, power), forskningsdesign (eksperiment/kvasi, mellom-/innengruppe, validitet), deskriptiv statistikk (sentraltendens, SD, SE, t-test), utvalg og kvalitativ metode. PSYC2104 **forutsetter** dette nivået og bygger *videre og dypere*:

| PSY1010 (forutsettes kjent — repeteres kort, ikke dybde) | PSYC2104 (nytt/avansert — bokas tyngde) |
|---|---|
| Enkel korrelasjon; r; korrelasjon ≠ kausalitet | **Multippel** lineær regresjon; statistisk kontroll; unik vs. delt varians; **suppressoreffekter**; kurvilinearitet (kvadratledd) |
| Reliabilitet nevnt overflatisk (test–retest, α) | **Klassisk testteori (X = T + e); SEM; KI for sann skåre; Spearman-Brown; α i dybden (α ↔ validitet)** |
| Validitetstyper nevnt | **Målingsvaliditet i dybden**: konvergent/diskriminant, MTMM, faktoranalyse for intern struktur, baserate/seleksjonsrate |
| Regresjonslinjen Ŷ = a + bX som «videreføring av korrelasjon»; enkel prediksjon | **Tolkning av full regresjonsoutput**: b, beta, R², konstant, dikotome vs. kontinuerlige prediktorer, forutsetningssjekk (VIF, residualer) |
| Tredjevariabler/kausalmodeller på begrepsnivå | **Mediering** (a×b, c/c′, hel/delvis, Baron & Kenny, bootstrapping) og **moderering** (interaksjonsledd) som fulle statistiske analyser |
| Standardskårer/z så vidt nevnt | **Z/T/IQ/Stanine/Sten som testteori**, prosentiler ved ikke-normalitet |
| — | **Dimensjonalitet / eksplorerende faktoranalyse** (ny) |

Kort: PSY1010-boka lærer *hva* korrelasjon og hypotesetesting er; PSYC2104-boka lærer *hvordan man konstruerer og evaluerer måleinstrumenter (psykometri)* og *hvordan man analyserer og tolker multivariate sammenhenger med statistisk kontroll, mediering og moderering i ikke-eksperimentelle data*. PSYC2104-boka bør åpne med en kort «du kan dette fra PSY1010»-bro og deretter gå rett på det nye. (Også bygget: PSY1000 generell, PSYC1201 sosial — ingen overlapp av betydning.)

### Må beherskes perfekt (bærer eksamen)
1. **Output-tolkning av multippel regresjon:** b (retning/enhet/gruppeforskjell), konstant, standardiserte koeffisienter, R²; *hvorfor koeffisienter endres når kontrollvariabler legges til* (statistisk kontroll/konfundering). Obligatorisk 50 %-oppgave i hvert sett.
2. **Medieringsanalyse:** stiene a/b/c/c′, indirekte effekt a×b, hel/delvis mediering, andel mediering, Baron & Kenny fire trinn, bootstrapping/Process, og kausalitetsforbeholdet som finale. I ~14 av 17 sett.
3. **Reliabilitet:** klassisk testteori, de fire formene med styrker/svakheter, α-tolkning inkl. «høy α ≠ god skala». Fast kortoppgave.
4. **Målingsvaliditet:** innhold/kriterie (samtidig/prediktiv)/begrep (konvergent/diskriminant), reliabel ≠ valid, hensiktsavhengighet. Fast kortoppgave.
5. **Standardskårer og SEM:** Z/T-utregning og -tolkning, prosentiler ved ikke-normalitet, SEM-formel og KI for sann skåre, SEM_diff. Syklisk regneoppgave.

### Må kunne (differensierer; A-stoffet)
6. **Standardiserte koeffisienter** — tolkning og begrensning for dikotome prediktorer.
7. **Regresjonsforutsetninger** — linearitet, residualer, uteliggere, multikollinearitet (VIF); **kurvilineær effekt** via kvadratledd/ΔR² (stigende).
8. **Moderering/interaksjon** og det skarpe skillet mot mediering.
9. **Bootstrapping vs. Baron & Kenny** — hvorfor bootstrap signifikanstester a×b.

### Bør kjenne til (lavfrekvent/utfaset — fordypning/flervalgsbank)
10. **Eksplorerende faktoranalyse** — antall faktorer (Kaiser/Cattell/Horn), rotasjon, ladning, kommunalitet, enkel struktur, faktor(baserte) skårer. Bærende 2017–2019, dekk solid men ikke til V2019-veiledningens matematiske dybde.
11. **Baserate/seleksjonsrate** (V2020), **restriction of range** (V2021), **refleksiv/formativ målemodell** (H2017), **rekoding av reverserte ledd** (V2023) — én gang hver; kort dekning.

### Anbefalt bokdesign som følge av analysen
- **Kapittelstruktur speiler oppgavetypene:** (1) klassisk testteori + reliabilitet, (2) målingsvaliditet, (3) standardskårer + SEM, (4) dimensjonalitet/faktoranalyse, (5) multippel regresjon + forutsetninger, (6) mediering, (7) moderering + kausalitet i ikke-eksperimentell forskning — hvert kapittel avsluttet med en «output-simulator».
- **Output-lesebibliotek:** siden hele oppgave 3 er tabelltolkning, bygg en bank av *omskrevne, egenkonstruerte* regresjons-, medierings-, path- og faktoranalysetabeller (jamovi- og SPSS-stil) med ferdige tolkninger på C- og A-nivå. Ikke gjenbruk UiOs tall.
- **Differensierte modellsvar:** for hver kjerneoppgave en «bestått-versjon» (definisjon + korrekt grunntolkning) og en «A-versjon» (kontroll-logikk + andel mediering + kausalitetsforbehold + standardisert-koeffisient-nyanse), med sensorkommentar bygget på veiledningenes pluss/minus-språk.
- **Regnetrening:** Z/T/SEM/SEM_diff/KI/a×b/andel-mediering som gjennomregnede eksempler med snille tall + varianter.
- **«Feilvaksine»:** drill de 15 feilene i del 5 — særlig ΔR²-som-medieringskriterium, kausal overtolkning, konstantledd-/dikotom-tolkning, høy-α-fellen, mediering-vs-moderering.
- **Begrepsdriller (quiz/flashcards):** reliabilitet vs. validitet; konvergent vs. diskriminant; samtidig vs. prediktiv; mediering vs. moderering; a/b/c/c′; ortogonal vs. oblik rotasjon; Z vs. T; b vs. beta. Dekker naturlig 500+-kravet.
- **Treningssett bygget over hvert faktiske sett 2019–2026** (omskrevet), siden gjenbruk er dokumentert norm.

---

## 8. Kildeliste

Alle kilder er lest (sensorveiledninger og 2019–2026-sett grundig; 2017–2018 grundig for oppgavestruktur; vedlegg-PDF-er er skannede tabeller/output som oppgavene bygger på — innholdet er utledet fra oppgavetekst og veiledning). **Alt er omskrevet — ingen ordrette gjengivelser** av oppgave- eller veiledningstekst inngår i denne analysen eller skal inngå i læreboka. Arkiv: `/Users/danielandreasaubert/Desktop/Eksamner/UiO/PSYC2104/`.

### Sensorveiledninger (kjernen i analysen — alle lest grundig)
| Fil | Innhold |
|---|---|
| `psyc2104-sensorveiledning-v26.pdf` + `psyc2104-eksamensoppgave-v26.pdf` | V2026: APS-6-prokrastineringsskala (reliabilitetsvalg 3 vs. 6 ledd, Z/T-skåre, prosentil/stanine); målingsvaliditet; TMT-B multippel regresjon (dikotom depresjon + alder/kjønn-kontroll) + alder→fysisk aktivitet→TMT-B-mediering |
| `psyc2104-sensorveiledning-h25.pdf` + `psyc2104-eksamensoppgave-h25.pdf` | H2025: innholdsvaliditet + prediktiv/samtidig; intern konsistens + «α = .95 problematisk?»; livstilfredshet-regresjon (støtte + helse/inntekt), kurvilineær effekt (inntekt²), støtte→helse→tilfredshet-mediering |
| `psyc2104-sensorveiledning-host-24.pdf` + `psyc2104-eksamensoppgave-h24.pdf` | H2024: test–retest + α-tolkning + forbedringstiltak; tre validitetsformer; jobbtilfredshet-regresjon (arbeidstimer + fjernarbeid, r = .30), forutsetninger, kausalitetsforbehold |
| `psyc2104-eksamensoppgave-og-sensorveiledning-v25.pdf` | V2025: to reliabilitetsmetoder + faktorer + α = 0,45-tiltak; validitet (konvergent/diskriminant, begreps- vs. kriterievaliditet); livskvalitet-regresjon (depresjon + søvn/alder), kurvilinearitet, kausalitet |
| `psyc2104-eksamensoppgave-og-sensorveiledning-v24.pdf` | V2024: høy α ↔ begrepsvaliditet; standardskårer (Z/T/prosentil); COVID-hjemmekontor→ensomhet-regresjon (+ husstand), forutsetninger, ensomhet som mediator mot depresjonssymptomer (Process, bootstrap) |
| `psyc2104-eksamensoppgave-og-sensorveiledning-h23.pdf` | H2023: MLQ-reliabilitet (α, item deleted, målingsvaliditet); MBT vs. CBT-regresjon, RFS-mediering (Baron & Kenny, bootstrap, «uenig med forsker»-ledd) |
| `psyc2104-eksamensoppave-og-sensorveiledning-v23.pdf` | V2023: MLQ-reliabilitet (rekoding, α if item deleted, test–retest for stabile trekk); antall barn→mening→positiv affekt-mediering (modell 2/3 + Process); kausalitetsforbehold |
| `psyc2104-eksamensoppgave-og-sensorveiledning-h22.pdf` | H2022: SEM (X = T + e, avhengighet av SD/reliabilitet); begrepsvaliditet (konvergent/diskriminant, MTMM, faktoranalyse); altruisme→regelbrudd-regresjon (+ kjønn), holdning som mediator (Process, andel mediering) |
| `psyc2104-sensorveiledning-ord-v2022.pdf` | V2022: reliabilitetsformer (fordeler/ulemper); Z/T-utregning (V/N-evnetest) + SEM; BIAQ-regresjon (kjønn + alder), sosial selvbevissthet som mediator (Process, kovariat alder), standardiserte koeffisienter |
| `psyc2104_eksamensoppgave-og-sensorveiledning-h21.pdf` | H2021 (4-timers hjemme): målingsvaliditet; depresjonsmestring-intervensjon — histogram, BDI-regresjon, depresjonskontroll som mediator (Process), **interaksjon/moderering** (støtte × kontroll, buffer) |
| `psyc2104-v2021-sensorveiledning.pdf` | V2021: kriterievaliditet undervurderes (restriction of range); SEM_diff-regning; ≥ 3 standardskåretransformasjoner; medieomtale-belastning — histogram, multippel regresjon, **moderering** (støtte-buffer), mediering mot angst/depresjon (Process) |
| `sensorveiledningv20-psyc2104.txt` (`sensorveiledningv20-psyc2104.pdf`) | V2020: baserate/seleksjonsrate + sanne/falske positive; reliabilitetsestimering; SEM + KI for sann skåre + SEM_diff (WAIS); TPB-mediering (holdning/norm/kontroll → intensjon → trening), forutsetninger (linearitet/VIF/residualer) |
| `psyc2104-2019h-sensorveiledning.pdf` + `psyc2104-2019h.pdf` | H2019: former for målingsvaliditet; standardskårer (Z/T, hvorfor); kontroll→jobbstress→helse-mediering (Baron & Kenny, bootstrap-fordel), moderatorbegrep |
| `psyc2104-v2019-sensorveiledning.pdf` + `psyc2104-v2019.pdf` | V2019: dyp faktoranalyse (faktorladning = std. regresjonskoeff., Kaiser/Cattell/Horns parallellanalyse, varimax, kommunalitet, Spearman-Brown/split-half); yoga→søvn→depresjon-mediering (fire trinn, SEM-modell nevnt, kausalitet) |

### Eksamensoppgaver uten egen veiledning (lest for struktur)
| Fil | År | Merknad |
|---|---|---|
| `hjemmeeksamen-v20.pdf` | V2020 (hjemme) | Åpen individuell hjemmeeksamen, .sav-datafil utlevert; fire obligatoriske oppgaver (baserate, reliabilitet, SEM, TPB-mediering). Veiledning = `sensorveiledningv20` |
| `psyc2104_v2017.pdf` | V2017 | Bokmål + nynorsk; konsentrasjonsskala-reliabilitet, EFA (positiv/negativ affekt), antall barn→mening→positiv affekt-mediering |
| `eksamen-psyc2104_h17.pdf` | H2017 | Refleksiv vs. formativ målemodell; EFA; BIAQ + sosial selvbevissthet-mediering (gjenbrukt V2022) |
| `psyc2104-2018h.pdf` (+ `psyc2104-2018h-sensorveiledning.pdf`) | H2018 | EFA (15 ledd, parallellanalyse); depresjon→reaksjonstid→WAIS-IV-mediering; eksplisitt minus for ΔR²-som-medieringskriterium |

### Vedlegg (skannede tabeller/output — ikke tekstbærende)
| Fil | Merknad |
|---|---|
| `psyc2104-vedlegg-1-2020v.pdf` | Regresjonsmodell 1–3 + Modell 4 (Preacher & Hayes-makro) for V2020-medieringen — kun figuroverskrifter i tekstlaget; tallene er skannet bilde |

**Hull i arkivet:** ingen egen veiledning for V2017/H2017 (dekket via nesten identiske senere sett); ingen sett før 2017; vedlegg-tabellene foreligger som skann (regresjonstall er utledet fra oppgavetekst + veiledning). Arkivet inneholder noen navnevarianter for samme semester (f.eks. `sensorveiledning-ord-v2022` = ordinær V2022); disse er behandlet som ett sett per semester.
