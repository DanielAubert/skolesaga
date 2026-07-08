# Eksamensanalyse: PSY2014 Kvantitativ metode / Generell lineær modell (UiO, 10 sp)

> Grunnlagsdokument for eksamensrettet lærebok. Basert på gjennomgang av **7 eksamenssett fra vår 2018 til vår 2024** (V2018, V2019, V2020, V2021, V2022, V2023, V2024), hvorav **6 har tilhørende sensorveiledning** (V2019, V2020, V2022, V2023, V2024 med utfyllende svarmomenter; V2021 foreligger som eksamens-/vedleggsfil uten skrevne svarmomenter). V2018 foreligger som eksamensoppgave med formelark, uten egen veiledning. Emnet er **kvantitativ metode / generell lineær modell (GLM) på bachelor i psykologi ved Psykologisk institutt, UiO**, undervist av samme kjerneteam over hele perioden (samme signaturspråk i veiledningene, samme lærebok). **Alt innhold er omskrevet med egne ord — ingen ordrette gjengivelser av oppgavetekster, tabelltall som ikke er strengt nødvendige, eller veiledninger.** Leses i sammenheng med den allerede byggede PSY1010-analysen (UiOs *innførings*metodefag) og PSYC2104-analysen (kvantitativ metode A på profesjonsstudiet) — se avgrensning i innledningen og den eksplisitte arbeidsdelingen i del 7.

**Arketype: REGNE-/TOLKNINGSTUNGT GLM-FAG.** PSY2014 er det klareste regnefaget i UiOs psykologi-metodeløp — og samtidig et output-lesingsfag. Hvert eneste sett i perioden består av (a) én stor, dominerende (~55–65 %) **regresjonsoppgave** der kandidaten leser ferdig R-/SPSS-output fra fire til seks nøstede regresjonsmodeller og skal tolke koeffisienter, standardfeil, R²/justert R², konfidensintervaller, signifikans, standardiserte koeffisienter og forutsetningsdiagnostikk, (b) én **variansanalyseoppgave** (~25–35 %) med enveis og toveis ANOVA, F-testens rasjonale, utfylling av sladdede ANOVA-tabeller, interaksjonseffekter og post-hoc, og (c) én kortere **kji-kvadratoppgave** (~10–20 %) med krysstabell, forventede frekvenser, standardiserte residualer og uavhengighetstest. Selve ryggraden i faget er den **generelle lineære modellen som forenende rammeverk**: regresjon og ANOVA er samme modell (F-verdien i en dummy-kodet regresjon = F-verdien i enveis ANOVA), og dette er eksplisitt bærende A-stoff. Tyngdepunktet ligger på å *lese, regne og forklare statistisk output* — men PSY2014 krever oftere enn PSYC2104 og PSY1010 at kandidaten faktisk regner selv (forventet Y fra regresjonsligning, R² fra sum of squares, t = b/SE, kji-kvadrat fra en krysstabell for hånd, fylle inn manglende ANOVA-celler). Læreboka må derfor bygges som en **GLM-verktøybok med innebygd output-lesing og regnetrening**: hvert begrep skal kunne forklares i prosa, illustreres i en tabell med regresjons-/ANOVA-/krysstabelloutput, OG regnes ut med enkel kalkulator fra det oppgitte formelarket.

---

## 1. Eksamensform og utvikling (2018–2024)

### Grunnformatet — «Forsøk å besvare alle oppgavene»
Den viktigste strukturelle forskjellen fra PSY1010 (som bruker «velg 3 av 4»): i PSY2014 er **alle oppgavene obligatoriske**. Det står eksplisitt «Forsøk å besvare alle oppgavene» i settene.

- **3 timers skriftlig skoleeksamen** er hovedformen (V2018, V2019, V2022, V2023, V2024), digital i Inspera.
- **Kalkulator uten grafisk display og tekstlagringsfunksjon er tillatt.** Dette er en fast, definerende ramme: eksamen forutsetter regning.
- **Et formelark og en t-fordelingstabell ligger bakerst i hvert sett.** Formlene pugges *ikke* — men de skal kunne brukes. Formelarket inneholder gjennomsnitt, varians, standardavvik, kovarians, Pearson-r, minste kvadraters estimater (b̂₀, b̂₁), standardfeilen til b̂₁, standardisert koeffisient (βᵢ), r² og justert r², z-skåre, F-ratio (MS_reg/MS_res), t = b̂ᵢ/SE(b̂ᵢ), kji-kvadrat (O−E)²/E med df = (rader−1)(kol−1), samt sum-of-squares-dekomposisjonen (SST = SSM + SSE) og enveis-ANOVA-størrelsene (SSb, SSw, dfb = g−1, dfw = n−g) og SE_diff for to gjennomsnitt.
- **Digital håndtegning på utdelt skisseark** er tillatt (regresjonsplan, kausalmodell, linjediagram for interaksjon) — nyttig for interaksjons- og medieringsoppgaver.
- **Karakterskala A–F.**

### Faser i formatet
1. **Pandemien (V2021): åpen bok, digital hjemmeeksamen (3 timer).** All nødvendig output vedlegges; kandidaten kjører ikke R selv, men leser og tolker. Sju faner med oppgaver, tredelt (regresjon 60 % / ANOVA 25 % / kji-kvadrat 15 %). Introduserte polynomisk regresjon som eget deltema og «bør du stole på ekstrapolering utenfor dataområdet?» som ny felle. (V2021-veiledningsfilen i arkivet inneholder kun oppgavetekst + R-output, ikke skrevne svarmomenter.)
2. **V2022 (skoleeksamen tilbake, sekstall-format):** Uvanlig oppdelt i seks korte oppgaver i stedet for tre store, men samme kjernetemaer (regresjon med konfundering/suppressor, polynom, mediering via Baron & Kenny, enveis/toveis ANOVA, kji-kvadrat med håndregning, og «hvorfor er lineær regresjon dårlig egnet for en binær utfallsvariabel?»).
3. **V2023–V2024 (moden standardform, R-output):** Fast tredeling — stor regresjonsoppgave (~55 %) med fire modeller (konfundering, kategorisk prediktor med flere nivåer, polynom/kurvilinearitet, standardiserte koeffisienter, diagnostiske plot), ANOVA-oppgave (~25–35 %) med enveis + toveis + Bonferroni-post-hoc + interaksjon/figurmatching, og kji-kvadratoppgave (~10–20 %) med standardiserte residualer. Output presenteres i R-stil (`lm()`, `aov()`, `anova()`, `confint()`, `summary()`, AIC, `lm.beta`).

### Bestått-mekanikken (styrer risikoprofilen)
Alle tre hovedoppgaver skal besvares. Siden regresjonsoppgaven alltid teller mer enn halve eksamen og alltid er obligatorisk, er den enkelt-viktigste ferdigheten på hele eksamen å **tolke multippel regresjonsoutput og forstå hvorfor koeffisienter endres når prediktorer legges til/trekkes fra**. Denne må drilles til refleks. ANOVA- og kji-kvadratoppgavene er billigere, mer skjematiske poeng, men kan ikke velges bort.

### Strukturelle konstanter en lærebok kan banke på
1. **Alltid en stor, nøstet regresjonsoppgave (~55–65 %)** bygget på ett scenario med én kontinuerlig hovedprediktor, som modell for modell utvides med kontrollvariabler, en kategorisk prediktor (dummy-kodet), et annengradsledd (polynom) og til slutt en «hvilke er signifikante?»-avlesning med sladdede tall. Dette har stått i *hvert eneste sett* 2018–2024.
2. **Alltid en ANOVA-oppgave** med (a) F-testens rasjonale (mellom- vs. innen-gruppe varians), (b) utfylling av en sladdet ANOVA-tabell, (c) enveis → toveis med interaksjon, og (d) «hvorfor endret F-verdien til hovedfaktoren seg fra enveis til toveis?».
3. **Alltid en kji-kvadratoppgave** med krysstabell, uavhengighets-H0, frihetsgrader = (R−1)(C−1), standardiserte residualer for celletolkning, og ofte en håndregning av χ²-verdien.
4. **GLM-broen er obligatorisk A-stoff:** minst annethvert sett spør eksplisitt hvordan ANOVA kan uttrykkes som regresjon med dummyvariabler (samme H0, samme F-verdi), eller hvorfor lineær regresjon er uegnet for en kategorisk/binær utfallsvariabel.
5. **Massiv gjenbruk av oppgavestruktur og deltemaer.** Scenarioene bytter (sjenerthet, tekstforståelse, verbal hukommelse, pupillestørrelse, popularitet, sosial angst, klimaangst), men *oppgaveforløpet* er nesten identisk fra sett til sett. Å drille gamle sett er den mest treffsikre forberedelsen.

---

## 2. Temafrekvens-tabell

Opptelling over de 7 settene 2018–2024. Et tema telles per sett der det opptrer som (del)oppgave. «★★★» = kjernetema, kommer så godt som garantert; «★★» = hyppig/differensierende; «★» = perifert.

| Tema | Sett | Ant. | Score + kommentar |
|---|---|---|---|
| **Multippel regresjon: tolke ustandardisert b (retning/enhet), konstantledd = forventet Y når alle prediktorer = 0, forventet Y for gitt profil (regne fra ligningen), R² som forklart varians** | V18, V19, V20, V21, V22, V23, V24 | **7** | ★★★ Den suverene gjengangeren — kjernen i den 55–65 %-tunge regresjonsoppgaven i hvert sett |
| **«Endrer b seg når kontrollvariabel legges til?» — konfundering, statistisk kontroll, isolering av unik effekt, korrelerte prediktorer** | V18, V19, V20, V22, V23, V24 | **6** | ★★★ Det sentrale A/B-skillet i regresjonsoppgaven; ofte kombinert med å *identifisere hvilken* variabel som forårsaker endringen |
| **Enveis ANOVA: F-testens rasjonale (mellom- vs. innen-gruppe varians, MSb/MSw, forventet F = 1 under H0), omnibus-test, utfylle sladdet ANOVA-tabell (SS/df/MS/F)** | V18, V19, V20, V21, V22, V23, V24 | **7** | ★★★ Fast oppgave; regne-/utfyllingsdelen er nesten garantert |
| **Toveis (faktoriell) ANOVA + interaksjonseffekt: hovedeffekter, interaksjon definert og lest ut av linjediagram, «hvorfor endret F for hovedfaktoren seg fra enveis til toveis?»** | V18, V19, V20, V22, V23, V24 | **6** | ★★★ Fast; F-endringen (redusert residual-MS når andre faktor kontrolleres) er A-markør |
| **Kji-kvadrat: uavhengighets-H0, df = (R−1)(C−1), kritisk verdi fra tabell, standardiserte residualer for celletolkning, χ²-fordelingen som samplingfordeling** | V18, V19, V20, V21, V22, V23, V24 | **7** | ★★★ Fast avsluttende oppgave |
| **GLM-broen: ANOVA = regresjon med dummyvariabler (samme H0, samme F); dummy-/kontrastkoding av kategorisk variabel; tolke dummy-koeffisient som gruppeforskjell mot referansekategori** | V18, V19, V20, V22, V23, V24 | **6** | ★★★ Faget er *bygget* rundt dette; eksplisitt spurt i flere sett |
| **Regresjonsforutsetninger via residualer: linearitet, normalfordelte residualer (histogram/QQ-plot), homoskedastisitet, uavhengighet, uteliggere — «hvilken antagelse er brutt i denne residualfiguren?»** | V18, V19, V20, V22, V23, V24 | **6** | ★★★ Fast; epsilon ~ N(0,σ²) som kilde til antagelsene |
| **Standardfeil til en regresjonskoeffisient: hva SE er (SD i samplingfordelingen til b̂), de tre forholdene som påvirker den (n, residualvarians s, varians i X), hvordan gjøre SE mindre** | V18, V19, V20, V21, V24 | **5** | ★★★ Fast; kobles til statistisk styrke og signifikans |
| **Polynomisk / kurvilineær regresjon: annengradsledd (X²), tolke fortegn (konkav/konveks, utflating), modell­sammenlikning (ΔR², AIC, nested-ANOVA F-test), residualer med kvadratisk struktur** | V18(implisitt), V19, V21, V22, V23, V24 | **6** | ★★★ Sterkt etablert gjenganger — nesten alltid ett ledd i regresjonsoppgaven |
| **Signifikansavlesning fra sladdet output: fastslå signifikans fra t-verdi (\|t\|>2), fra konfidensintervall (rommer 0?), eller fra oppgitt p; regne t = b̂ᵢ/SE(b̂ᵢ) når t er maskert; z-approksimasjon i store utvalg** | V19, V20, V22, V23, V24 | **5** | ★★★ Klassisk «vis at du forstår tabellen»-ledd |
| **Standardiserte (beta-)koeffisienter: definisjon (SD-endring i Y per SD-endring i X), hvorfor de muliggjør sammenlikning på tvers av skalaer/enheter, begrensning** | V18, V19, V20, V22, V23, V24 | **6** | ★★★ Fast «hvilken variabel er sterkest assosiert?»-ledd |
| **R² og justert R²: forklart varians, hvorfor justert R² kan synke når svake prediktorer legges til, straff for kompleksitet; regne R² fra SSE/SST** | V18, V19, V22, V23 | **4** | ★★★ Fast; regnedelen (vis at R² = X) er hyppig |
| **Interaksjon i regresjon (moderering): produktledd X1·X2, betinget effekt, to regresjonslinjer (én per gruppe når moderator er dikotom), tolke fortegn på interaksjonskoeffisienten** | V20, V22, V23 | **3** | ★★ Stigende; skille regresjonsinteraksjon fra ANOVA-interaksjon |
| **Multikollinearitet: høyt korrelerte prediktorer, VIF > 5, oppblåst SE, ustabile/ikke-signifikante enkeltkoeffisienter mens F samlet er signifikant, R²(multippel) << sum av bivariate R²** | V19, V21 | **2** | ★★ Differensierende; «hvor i utskriften ser du at prediktorene er høyt korrelert?» |
| **Innflytelses­statistikk: uteliggere i Y vs. X, leverage, Cook's distance, DFBETA, minste kvadraters følsomhet for uteliggere, «bør punktet fjernes?»** | V20, V24 | **2** | ★★ A-stoff; skille høy-residual-uten-innflytelse fra høy-leverage-med-innflytelse |
| **Mediering: mediator-begrep, klassisk firetrinns fremgangsmåte (X→Y, X→M, M→Y, redusert X→Y kontrollert for M), «gir modellene støtte til mediering?»** | V22 | **1** | ★★ Kun V2022, men klart pensum; skille mediering fra konfundering/suppressor |
| **Suppressoreffekt: b øker/skifter fortegn ved kontroll fordi prediktorene virker i motsatt retning og delvis kanselleres** | V19, V22 | **2** | ★★ Klassisk A-differensierer, ofte parallelt med konfundering |
| **Post-hoc og multippel testing: parvise sammenlikninger etter signifikant ANOVA, Bonferroni-korreksjon, familywise error, planlagte vs. post-hoc, effektstørrelse (η²)** | V20, V23, V24 | **3** | ★★ Stigende; Bonferroni-justerte p-verdier lest ut av output |
| **Lineær regresjon uegnet for kategorisk/binær utfallsvariabel: hvorfor (umulige predikerte verdier < 0 eller > 1), henvisning til kji-kvadrat/logistisk i stedet** | V18, V22 | **2** | ★★ Fast liten «forstår du modellvalg?»-felle |
| **Sentrering av prediktor: hvorfor konstantleddet blir tolkbart (forventet Y ved gjennomsnittlig X) etter sentrering** | V20, V21 | **2** | ★ Perifert, men elegant A-poeng |
| **Ekstrapolering: hvorfor man ikke bør stole på prediksjon utenfor dataområdet (særlig i polynommodeller)** | V21 | **1** | ★ Kun V2021; kort felle |
| **Standardfeil for differanse / t-test mellom to gjennomsnitt (SE_diff, df fra MSw)** | (formelark, ANOVA-kontekst) | — | ★ Formelarket støtter det; sjelden egen oppgave (t-testen bæres nå av GLM/ANOVA) |

### Trendbrudd og konstanter læreboka må ta hensyn til
- **GLM-forening er fagets DNA (hele perioden).** I motsetning til PSY1010 (der t-test/ANOVA/regresjon presenteres som separate «testvalg») behandler PSY2014 dem som *én modell*. At enveis ANOVA er en dummy-kodet regresjon med identisk F, og at kji-kvadrat er en egen (ikke-lineær) modell for frekvenser, er selve den røde tråden.
- **Polynom/kurvilinearitet er nå fast (V2019 →).** Annengradsledd + modellsammenlikning (ΔR², AIC, nested-F) + kvadratisk struktur i residualene er nærmest garantert ett ledd i regresjonsoppgaven.
- **Output-formatet har vandret fra SPSS (V18–V19) via blandet til R (`lm`, `aov`, `anova`, `confint`, AIC, `lm.beta`) (V22 →).** Boka må trene *begge* dialekter, men vekten legges på R-stil (Estimate/Std.Error/t value/Pr(>|t|), stjernekodene `*** ** *`, `confint`-intervaller, AIC, nested-ANOVA).
- **Regnekjernen er billig og kommer syklisk igjen:** forventet Y fra ligningen, R² fra SSE/SST, t = b̂/SE, fylle inn sladdede ANOVA-celler (SSb = SST − SSw; dfb = g − 1; MS = SS/df; F = MSb/MSw), χ²-verdi fra en 2×2- eller 3×3-krysstabell. Snille tall, formel på arket.
- **Faste gjenbrukte oppgaveforløp:** regresjonsoppgaven med fire nøstede modeller (V18, V19, V20, V21, V24), «fyll inn sladdet ANOVA-tabell» (V18, V20, V21, V22, V24), «hvorfor endret F seg fra enveis til toveis» (V20, V22, V23, V24), «hvilke koeffisienter er signifikante — begrunn fra t/CI/p» (V19, V20, V23, V24).

---

## 3. Oppgavetype-katalog

### Type 1: Den store regresjonsoppgaven (~55–65 %, oppgave 1)
Ryggraden i faget. Standardforløp over de nøstede modellene, bygget på ett scenario med én kontinuerlig hovedprediktor X, en kontinuerlig utfallsvariabel Y, og et voksende sett kontroll-/mediator-/kategoriske variabler:

1. **«Oppsummer modell 1 (bivariat).»** Tolk b̂₁ (retning + enhet: «per enhets økning i X endres forventet Y med b̂₁»), b̂₀ (forventet Y når X = 0; ved sentrert X: forventet Y ved gjennomsnittlig X), signifikans (p mot 0,05, F-verdien, om CI rommer 0), og R² (andel forklart varians). Regn gjerne antall deltakere ut fra frihetsgradene i `anova`-tabellen (n = df_residual + p + 1).
2. **«Regn forventet Y for en gitt profil.»** Sett verdier inn i Ŷ = b̂₀ + b̂₁X₁ + b̂₂X₂ … og regn. Vist fremgangsmåte kreves.
3. **«Hvorfor endret b̂ for X seg når kontrollvariabler ble lagt til? Hvilken variabel forårsaket det?»** A/B-skillet: b̂ endres fordi prediktorene er korrelerte; kontrollvariabelen justeres statistisk bort → man isolerer den unike effekten av X. **Konfundering:** en tredjevariabel korrelert med *både* X og Y blåser opp (eller ned) den bivariate b̂; kontrollert forsvinner/krymper effekten. **Suppressor:** b̂ *øker* eller skifter fortegn ved kontroll fordi prediktorene virker i motsatt retning og delvis kanselleres. Toppsvar identifiserer *hvilken* av flere variabler som driver endringen (ut fra korrelasjonstabell/partielle korrelasjoner) og begrunner det.
4. **«Er sammenhengen kurvilineær? Hvorfor legge til X²?»** Polynomisk regresjon fanger ikke-lineære sammenhenger. Negativt X²-ledd → utflating/konkav kurve (effekten avtar, kan snu). Støttes av signifikant X²-koeffisient, ΔR², lavere AIC, signifikant nested-ANOVA-F, og av kvadratisk struktur i residualplottet fra den lineære modellen. A-markør: advar mot **ekstrapolering** langt utenfor dataområdet (polynomer «eksploderer»).
5. **«Kategorisk prediktor med flere nivåer (dummy-kodet).»** Konstantleddet = forventet Y for referansekategorien; hver dummy-koeffisient = forskjellen fra referansen. Forskjellen mellom to ikke-referanse-nivåer = differansen mellom deres koeffisienter (kan ikke leses direkte). F-verdien tester om *alle* dummy-koeffisienter samtidig er 0. Reversering av 0/1-koding: b̂₀ endres, b̂₁ skifter fortegn, R² uendret.
6. **«Hvilke koeffisienter er signifikante på 0,05-nivå? Begrunn.»** Les fra t (|t| > ~2 i store utvalg via z-approksimasjon), fra CI (rommer det 0?), eller fra oppgitt p. Når t er sladdet: regn t = b̂ᵢ/SE(b̂ᵢ). Definér gjerne konfidensintervall (verdiene som *ikke* kan forkastes).
7. **«Hvilken variabel er sterkest assosiert med Y?»** Se på **standardiserte (beta-)koeffisienter**, ikke ustandardiserte — de ustandardiserte avhenger av målenhet (minutter vs. timer). Beta = SD-endring i Y per SD-endring i X.
8. **«Hva forteller standardfeilen (Std. Error), og hvordan gjøre den mindre?»** SE er estimert SD i samplingfordelingen til koeffisienten. Tre forhold: (i) flere observasjoner n, (ii) mindre residualvarians s (reliabelt Y-mål, inkludere andre forklarende variabler), (iii) større spredning i X. Kobles til statistisk styrke.
9. **«Hvilken antagelse er brutt i denne residualfiguren?»** Fra epsilon ~ N(0,σ²): linearitet, normalfordelte residualer (histogram/QQ-plot), konstant varians (homoskedastisitet), uavhengige residualer, ingen uteliggere. Innflytelse: uteliggere i Y (høy residual) vs. i X (høy leverage); Cook's distance/DFBETA flagger innflytelsesrike punkter; minste kvadraters metode er følsom fordi residualene kvadreres. «Bør punktet fjernes?» — begrunn fra leverage + Cook's d + residual.
10. **(av og til) Mediering vs. moderering:** firetrinns fremgangsmåte (X→Y, X→M, M→Y, redusert direkte X→Y kontrollert for M) — mediering = mekanisme; interaksjon/produktledd = betingelse. Ikke bland med konfundering.

**Omskrevet eksempeloppgave:** *«En studie ser på hvordan en kontinuerlig prediktor X henger sammen med et utfall Y hos 200 personer. (a) Tolk b̂₁ og b̂₀ i modell 1 og regn forventet Y for en person med X = 8. (b) I modell 2 legges to kontrollvariabler til, og b̂₁ endrer seg. Forklar hvorfor, og avgjør hvilken kontrollvariabel som driver endringen. (c) I modell 3 legges X² til. Hva forteller residualplottet fra modell 1, ΔR², AIC og en nested-ANOVA om nytten av annengradsleddet? (d) I modell 4 (noen tall sladdet) — hvilke koeffisienter er signifikante på 0,05-nivå? Begrunn fra t, CI og p, og regn t der den mangler. (e) Hvilken av to prediktorer med ulik målenhet er sterkest assosiert med Y?»*

### Type 2: Variansanalyseoppgaven (~25–35 %, oppgave 2)
1. **«Forklar F-testens rasjonale / mellom- vs. innen-gruppe varians.»** Total variasjon (SST) deles i mellom-gruppe (SSb, gruppesnittenes avvik fra totalsnittet) og innen-gruppe (SSw, individenes avvik fra sitt gruppesnitt). MS = SS/df. Under H0 (alle gruppesnitt like i populasjonen) er *både* MSb og MSw forventningsrette estimater på populasjonsvariansen, så F = MSb/MSw har forventet verdi 1. Store F taler mot H0. Vanlig felle (V2020): påstanden «større innen- enn mellom-gruppe-variasjon er bevis mot H0» er **gal** — det er omvendt.
2. **«Fyll inn de sladdede verdiene i ANOVA-tabellen og konkluder.»** Bruk SST = SSb + SSw; dfb = g − 1; dfw = n − g; MS = SS/df; F = MSb/MSw. Konkludér: H0 = like gruppesnitt i populasjonen; høy signifikant F → forkast; forskjellene skyldes neppe tilfeldig samplingvariasjon.
3. **«Forklar interaksjonseffekt.»** Effekten av én faktor på utfallet avhenger av nivået til en annen faktor. Leses i linjediagram som ikke-parallelle linjer. Definér og gi substansiell tolkning i konteksten.
4. **«Tolk toveis ANOVA og forklar hvorfor F for hovedfaktoren endret seg fra enveis.»** Rapportér begge hovedeffekter (F, p) + interaksjonen. **Nøkkelpoenget (A-markør):** når en andre faktor inkluderes, forklarer den en del av det som i enveis-analysen lå i residualen (SSw/MSw krymper), så nevneren i F blir mindre og F for den opprinnelige faktoren blir *større* (mer statistisk styrke). Effektstørrelse (η²) og det at mye variasjon forblir uforklart bør nevnes.
5. **«Hvilket linjediagram (A/B/C) stemmer med output?»** Match hovedeffekter (nivåforskjeller) og interaksjon (parallelle vs. ikke-parallelle linjer) mot F/p-verdiene.
6. **Post-hoc:** ANOVA er en omnibus-test; etter en signifikant F kreves parvise sammenlikninger; korriger for multippel testing (Bonferroni) for å holde familywise error nede; les Bonferroni-justerte p-verdier ut av output.

**Omskrevet eksempeloppgave:** *«Deltakere er randomisert til tre betingelser. (a) Forklar innen- og mellom-gruppe varians og hvordan forholdet mellom dem brukes til å vurdere H0. (b) Fyll inn de manglende cellene i den vedlagte enveis-ANOVA-tabellen og konkluder. (c) En andre faktor legges til (toveis ANOVA). Tolk hovedeffekter og interaksjon, og forklar hvorfor F for den første faktoren nå er høyere enn i enveisanalysen. (d) Følg opp med passende post-hoc-sammenlikninger og forklar hvorfor korreksjon for antall tester er nødvendig.»*

### Type 3: Kji-kvadratoppgaven (~10–20 %, oppgave 3)
1. **«Er lineær regresjon egnet her? Begrunn.»** Nei når utfallet er kategorisk/binært: lineær modell gir umulige predikerte verdier (< 0 eller > 1). Bruk kji-kvadrat (uavhengighet) i stedet.
2. **«Forklar at samplingfordelingen til χ² følger en χ²-fordeling under H0.»** χ² måler samlet avstand mellom observerte og forventede frekvenser under uavhengighet; ved gjentatt sampling fra en populasjon der variablene faktisk er uavhengige, følger statistikken en χ²-fordeling med (R−1)(C−1) frihetsgrader.
3. **«Vis at χ² = X»/regn χ².** Forventet frekvens Eᵢⱼ = (rad-total × kolonne-total)/n; χ² = Σ(O−E)²/E. Håndregning på 2×2 eller 3×3 med snille tall.
4. **«Konkluder om sammenhengen.»** H0 = variablene er uavhengige; sammenlign χ² mot kritisk verdi (fra tabell) ved df = (R−1)(C−1); forkast om χ² > kritisk verdi. For *hvordan* variablene henger sammen: les **standardiserte residualer** (z-fordelte; |verdi| > 2 er av interesse) celle for celle. Kausalitetsforbehold: en signifikant sammenheng er ikke bevis for årsak.

**Omskrevet eksempeloppgave:** *«Et utvalg deles inn etter to kategoriske kjennetegn i en krysstabell. (a) Hvorfor er lineær regresjon uegnet? (b) Regn forventede frekvenser og vis at χ² tar den oppgitte verdien. (c) Med df = (R−1)(C−1) og kritisk verdi fra tabellen — hva konkluderer du, og hvilke celler avviker mest fra det forventede (standardiserte residualer)?»*

---

## 4. Sensorens krav — hva som skiller karakternivåene

Veiledningene deler en fast vurderingsfilosofi (samme kjerneteam over hele perioden), her omskrevet:

### Grunnprinsipper
- **Veiledningene lister «momenter som bør adresseres».** De er ikke en uttømmende fasit; kandidaten kan skåre godt uten å nevne alt, men må treffe kjernepoengene.
- **Forståelse trumfer fullstendighet.** «Andre ting som kan være relevant å nevne» markerer eksplisitt bonusstoff over grunnkravet.
- **Regneoppgaver: vis fremgangsmåten.** Utregning må vises (forventet Y, R², t = b̂/SE, χ², utfylte ANOVA-celler). Enkle regnefeil og fortegnsrot tilgis så lenge logikken er korrekt.
- **Definisjoner premieres når de brukes.** Å kort definere konfidensintervall, konfunder, mediator, interaksjon, standardisert koeffisient, leverage — og deretter *bruke* definisjonen på output — er gjennomgående honorert.
- **Figurer premieres.** Å tegne kausalmodell/regresjonsplan, kommentere linjediagram (interaksjon) og box-/spredningsplott trekker opp.

### Konkrete pluss (A/B-markører)
- Å forklare *hvorfor* en regresjonskoeffisient endres når kontrollvariabler legges til (statistisk kontroll / isolering av unik effekt), og **identifisere hvilken** variabel som driver endringen (fra korrelasjonstabell/partielle korrelasjoner).
- Å skille **konfundering** fra **suppressor** (b̂ krymper vs. b̂ vokser/skifter fortegn) og fra **mediering** (mekanisme).
- Å se at ustandardiserte koeffisienter avhenger av målenhet, og at **standardiserte** koeffisienter kreves for å sammenligne relativ styrke.
- Å forklare **GLM-broen**: at enveis ANOVA er en dummy-kodet regresjon med *samme* H0 og *samme* F-verdi; at antagelsene er de samme (lik varians i gruppene, normalfordelte residualer, uavhengige observasjoner).
- Å forklare **hvorfor F for hovedfaktoren øker fra enveis til toveis ANOVA** (redusert residual-MS).
- Å begrunne signifikans korrekt fra **t (|t|>2 via z-approksimasjon i store utvalg), CI (rommer 0?) eller p**, og regne t når den er sladdet.
- Å velge **polynom** og begrunne det fra residualstruktur + ΔR²/AIC/nested-F; og å advare mot **ekstrapolering**.
- Å diagnostisere **multikollinearitet** (VIF > 5, oppblåst SE, R²_multippel << Σ bivariate R², ikke-signifikante enkeltkoeffisienter men signifikant samlet F).
- Å skille **uteliggere i Y (høy residual, lav innflytelse)** fra **høy leverage / høy Cook's d (innflytelsesrike)** og begrunne om et punkt bør fjernes.
- Å korrigere for **multippel testing** (Bonferroni) og drøfte familywise error / effektstørrelse (η²) i ANOVA.
- Å nevne at forventningsrette estimater på populasjonsvariansen (MSb, MSw) er grunnlaget for F.

### Eksplisitt trekk / minuspoeng
- Å tolke «større innen- enn mellom-gruppe-variasjon som bevis mot H0» (V2020: påstanden er **gal**).
- Å ikke vise utregning i regne-/utfyllingsoppgaver.
- Å tolke en dummy-koeffisient som en «per enhet»-effekt i stedet for en gruppeforskjell, eller å lese forskjellen mellom to ikke-referanse-nivåer rett fra tabellen uten å subtrahere koeffisientene.
- Å konkludere med årsakssammenheng fra en observasjonell regresjons-/kji-kvadratanalyse.
- Å bruke ustandardiserte koeffisienter til å rangere prediktorer med ulik målenhet.
- Å behandle en binær/kategorisk utfallsvariabel med lineær regresjon.
- Å ekstrapolere en polynommodell langt utenfor dataområdet uten forbehold.

### Nivåbilde (destillert — emnet har ikke publiserte karakterbeskrivelser per nivå)
- **A/B:** tolker hele regresjonsoutput presist (b, b̂₀, R²/justert R², CI, standardiserte koeffisienter, kontroll-logikk), skiller konfunder/suppressor/mediering, begrunner signifikans fra t/CI/p (og regner t), velger og begrunner polynom, diagnostiserer forutsetningsbrudd/innflytelse, forklarer GLM-broen og F-endringen enveis→toveis, korrigerer for multippel testing; korrekt regning med vist fremgangsmåte.
- **C:** tolker koeffisienter og R² riktig, fyller inn ANOVA-tabellen, regner χ² og forventet Y riktig, definerer begreper, men blir stående i grunntolkningen — mangler kontroll-logikken, suppressor/mediering-skillet, GLM-broen og de fine forutsetnings-/innflytelsespoengene.
- **D/E:** upresise tolkninger, feiltolker konstantledd/dummy-koeffisient, blander konfundering/mediering, klarer ikke koble output til begrep, roter i ANOVA-tabellutfyllingen.
- **F:** en av de tre hovedoppgavene (særlig regresjonsoppgaven) reelt ubesvart, eller systematisk sammenblanding av grunnbegreper.

---

## 5. Typiske feil (fra veiledningenes egne advarsler og krav)

1. **«Innen > mellom-gruppe-variasjon = bevis mot H0»** — eksplisitt gal påstand (V2020). F = MSb/MSw; det er *stor mellom-* relativt til innen-gruppe-varians som taler mot H0.
2. **Feiltolkning av konstantleddet** — å ikke se at b̂₀ er forventet Y når *alle* prediktorer er 0 (og at det blir tolkbart som «forventet Y ved gjennomsnittet» først når prediktoren er sentrert).
3. **Feiltolkning av dummy-koeffisient** — å behandle b̂ for en 0/1- eller kategorivariabel som en «per enhet»-effekt i stedet for gruppeforskjellen mot referansen; å lese forskjellen mellom to ikke-referanse-nivåer rett fra tabellen uten å trekke koeffisientene fra hverandre.
4. **Å overse hvorfor b̂ endres med kontrollvariabler** — å ikke koble endringen til korrelerte prediktorer / konfundering / suppressor, eller å ikke identifisere hvilken variabel som driver den.
5. **Konfundering vs. suppressor vs. mediering blandet** — krymping (konfunder), vekst/fortegnsskifte (suppressor) og mekanisme (mediator) er tre ulike ting.
6. **Ustandardiserte koeffisienter brukt til å rangere prediktorer** med ulik målenhet — må bruke standardiserte (beta).
7. **Signifikans feil avlest** — å ikke kunne fastslå signifikans fra t (|t|>2), fra CI (rommer 0?) eller fra p; å ikke regne t = b̂/SE når t er sladdet.
8. **Å behandle en binær/kategorisk utfallsvariabel med lineær regresjon** — gir umulige predikerte verdier; kji-kvadrat/logistisk er riktig.
9. **Å ikke velge/begrunne polynom** når residualene viser kvadratisk struktur — eller å ekstrapolere polynommodellen utenfor dataområdet uten forbehold.
10. **Å overse multikollinearitet** — å ikke gjenkjenne oppblåst SE / VIF > 5 / ikke-signifikante enkeltkoeffisienter med signifikant samlet F.
11. **Uteligger vs. innflytelse blandet** — å behandle enhver uteligger som innflytelsesrik uten å skille leverage/Cook's d fra residualstørrelse.
12. **Å ikke forklare F-endringen enveis→toveis** (redusert residual-MS) — bare rapportere at F ble større.
13. **ANOVA-tabellen feil utfylt** — å rote med SST = SSb + SSw, dfb = g − 1, dfw = n − g, MS = SS/df, F = MSb/MSw.
14. **Å hoppe over post-hoc/multippel testing-korreksjon** etter en signifikant omnibus-ANOVA.
15. **Kausal overtolkning** av regresjon eller kji-kvadrat på observasjonelle data.
16. **Å ikke vise utregning** i regne-/utfyllingsoppgaver — usynlig regning kan ikke reddes.
17. **GLM-broen misforstått** — å ikke se at enveis ANOVA og en dummy-kodet regresjon tester samme H0 og gir samme F.

---

## 6. Begreps- og pensumapparat

### Pensumankere sensor refererer til
| Kilde | Rolle | Det veiledningene henter derfra |
|---|---|---|
| **Agresti, *Statistical Methods for the Social Sciences*** (eksplisitt henvist, f.eks. «avsnitt 12.3») | Hovedbok for hele GLM-løpet | Regresjon (b, β, R², SE, minste kvadrater); dekomposisjon SST = SSM + SSE; enveis- og toveis-ANOVA (SSb/SSw, MS, F, forventningsrette variansestimater); kji-kvadrat (O−E)²/E, df, standardiserte residualer; kontraster/post-hoc/multippel testing |
| **Forelesningene (Canvas: «forelesning 7» m.m.)** | Selvstendig kilde | Innen-/mellom-gruppe varians; residualdiagnostikk (histogram, QQ-plot, scatter); innflytelses­statistikk (leverage, Cook's d, DFBETA); GLM-broen ANOVA↔regresjon; polynom + modellsammenlikning (AIC, nested-ANOVA); firetrinns mediering |
| **Formelark + t-tabell (utdelt på eksamen)** | Regnegrunnlag | Alle formlene i notasjonstabellen under; brukes, pugges ikke |

### Kjernebegreper (alt under er spurt direkte minst én gang — bokas begreps-/flervalgsbank)

**Generell lineær modell (rammeverket):** GLM som forenende ramme; regresjon og ANOVA som samme modell; dummy-/kontrastkoding av kategoriske prediktorer; enveis ANOVA = dummy-regresjon (samme H0, samme F); felles antagelser (lik varians i grupper, normalfordelte residualer, uavhengige observasjoner); kji-kvadrat som egen modell for frekvenstabeller (ikke lineær).

**Regresjon:** enkel vs. multippel lineær regresjon; prediktor/uavhengig og kriterium/avhengig variabel; ustandardisert koeffisient b (enhet-for-enhet; gruppeforskjell for dummy); partiell regresjonskoeffisient; konstantledd/intercept (forventet Y ved alle prediktorer = 0); sentrering av prediktor; standardisert (beta-)koeffisient (SD-per-SD; β = r ved én prediktor); minste kvadraters metode (SSE minimeres, følsom for uteliggere); R² (SSM/SST = 1 − SSE/SST) og justert R² (straffer kompleksitet); ΔR²; F-test av samlet modell (MS_reg/MS_res); t-test av enkeltkoeffisient (t = b̂/SE, df = n − p − 1); standardfeil SE(b̂₁) og dens tre determinanter (n, residualvarians s, spredning i X); konfidensintervall (verdiene som ikke kan forkastes; rommer 0 → ikke signifikant); ekstrapolering.

**Modellutvidelse og -sammenlikning:** konfunder (korrelert med X og Y; bivariat b̂ spuriøst høy/lav); statistisk kontroll / justering; unik vs. delt varians; suppressor (b̂ vokser/skifter fortegn ved kontroll); mediering (mediator, kausalkjede X→M→Y, firetrinns fremgangsmåte, redusert direkte effekt); moderering/interaksjon i regresjon (produktledd, betinget effekt, to linjer ved dikotom moderator); polynom/kurvilineær regresjon (X², konkav/konveks, utflating); modellsammenlikning (ΔR², AIC, nested-ANOVA-F); forward/backward-seleksjon (nevnt).

**Forutsetninger og diagnostikk:** epsilon εᵢ ~ N(0, σ²); linearitet; normalfordelte residualer (histogram, QQ-plot); homoskedastisitet (konstant residualvarians); uavhengige residualer; uteliggere (i Y = høy residual; i X = høy leverage); innflytelses­statistikk (leverage, Cook's distance, DFBETA, standardiserte/studentiserte residualer); multikollinearitet (VIF > 5, toleranse, oppblåst SE, R²_multippel << Σ bivariate R², ustabile enkeltkoeffisienter med signifikant samlet F).

**Variansanalyse:** faktor, nivå, celle; enveis mellom-gruppe ANOVA; total/mellom-/innen-gruppe variasjon (SST, SSb, SSw); frihetsgrader (dfb = g − 1, dfw = n − g); mean squares (MS = SS/df); F = MSb/MSw (forventet 1 under H0; forventningsrette variansestimater); omnibus-test; toveis (faktoriell) ANOVA; hovedeffekt; interaksjonseffekt (ikke-parallelle linjer i linjediagram; effekten av én faktor avhenger av den andre); F-endring enveis→toveis (redusert residual-MS); post-hoc / parvise sammenlikninger; planlagte vs. post-hoc kontraster; multippel testing og familywise error; Bonferroni-korreksjon; effektstørrelse (η²).

**Kji-kvadrat / kategoriske data:** krysstabell; observert (O) vs. forventet (E) frekvens (E = rad-total × kol-total / n); χ² = Σ(O−E)²/E; frihetsgrader (R−1)(C−1); χ²-fordelingen som samplingfordeling under H0; uavhengighets-H0; kritisk verdi fra tabell; standardiserte residualer (z-fordelte; |z| > 2 av interesse); hvorfor lineær regresjon er uegnet for kategorisk/binær utfallsvariabel.

**Slutningslogikk (forutsettes fra PSY1010):** populasjon vs. utvalg; samplingfordeling; standardfeil; H0/H1; α = 0,05; p-verdi; z-approksimasjon til t i store utvalg (kritiske verdier ±2 / ±1,96); statistisk styrke; korrelasjon (Pearson r); r² som forklart varians; korrelasjon ≠ kausalitet.

### Statistisk notasjon boka må normalisere (alt fra formelarket + output)
| Notasjon | Betydning |
|---|---|
| X̄, s²ₓ, sₓ | gjennomsnitt, varians, standardavvik |
| sₓᵧ | kovarians |
| r = sₓᵧ/(sₓsᵧ) | Pearson-korrelasjon |
| b̂₁ = sₓᵧ/s²ₓ ; b̂₀ = Ȳ − b̂₁·X̄ | minste kvadraters estimater (bivariat) |
| SE(b̂₁) = s/√Σ(Xᵢ−X̄)² | standardfeil til stigningskoeffisienten |
| βᵢ = bᵢ·(sₓ/sᵧ) | standardisert regresjonskoeffisient |
| s = √[Σ(Y−Ŷ)²/(n−p−1)] | residual standardavvik |
| r² = 1 − SSE/SST ; justert r² = 1 − (n−1)(1−r²)/(n−p−1) | forklart varians; justert |
| Z = (X − X̄)/sₓ | z-skåre |
| F = MS_M/MS_E ~ F(p, n−p−1) | F-ratio (regresjon/ANOVA) |
| t = b̂ᵢ/SE(b̂ᵢ) ~ t(n−p−1) | t-test av koeffisient |
| SST = SSM + SSE ; SSb, SSw ; dfb = g−1, dfw = n−g | sum-of-squares-dekomposisjon; ANOVA |
| χ² = Σ(O−E)²/E ~ χ²((R−1)(C−1)) | kji-kvadrat; E = Rⱼ·Cᵢ/n |
| SE_diff = √(2·MS_w/n) | standardfeil for differanse mellom to snitt |
| `Estimate / Std. Error / t value / Pr(>\|t\|)` ; `*** ** *` ; AIC ; `confint` ; `lm.beta` | R-output boka må lese |

Regneferdighetene som faktisk er krevd (snille tall, formel på arket): forventet Y fra regresjonsligningen; b̂₁ fra kovarians/varians; R² fra SSE/SST; t = b̂ᵢ/SE(b̂ᵢ); n fra frihetsgradene; fylle inn sladdede ANOVA-celler (SSb = SST − SSw, dfb = g − 1, MS = SS/df, F = MSb/MSw); forventede frekvenser og χ² fra en krysstabell.

---

## 7. Prognose og prioritering

### Avgrensning mot PSY1010 og PSYC2104 (kritisk — unngå dublering)
PSY2014 sitter mellom UiOs innføringsfag (PSY1010) og profesjonsstudiets kvantitativ metode A (PSYC2104). Boka må eie GLM-rammeverket og eksplisitt henvise de andre bøkene for stoff som er deres.

| PSY1010 (forutsettes kjent — repeteres kort) | PSY2014 (bokas tyngde — GLM) | PSYC2104 (hører dit — psykometri) |
|---|---|---|
| Enkel korrelasjon; r; korrelasjon ≠ kausalitet; regresjonslinjen Ŷ = a + bX som «videreføring av korrelasjon» | **Multippel** regresjon; statistisk kontroll; konfunder/**suppressor**; standardiserte koeffisienter; SE(b̂) og dens determinanter; **polynom/kurvilinearitet**; multikollinearitet (VIF); forutsetningsdiagnostikk (residualer, leverage, Cook's d) | Regresjonsoutput inngår også her, men i tjeneste for **mediering/moderering** og psykometri |
| «Testvalg»: t-test vs. ANOVA vs. ANCOVA på begrepsnivå; familywise error nevnt | **ANOVA som GLM**: enveis + **toveis (faktoriell) ANOVA**, interaksjon, F-testens rasjonale, ANOVA-tabellutfylling, F-endring enveis→toveis, post-hoc/Bonferroni, η²; **dummykoding**; **ANOVA = dummy-regresjon** | — |
| H0/H1, p-verdi, Type I/II, power; standardfeil, samplingfordeling | **Signifikans lest fra t/CI/p i multivariat output**; z-approksimasjon i store utvalg; regne t = b̂/SE | Samme slutningslogikk, i psykometrisk kontekst |
| Nominal/ordinal/intervall; reliabilitet/validitet *nevnt overflatisk* | **Kji-kvadrat** for kategoriske data (uavhengighet, forventede frekvenser, standardiserte residualer); hvorfor lineær regresjon er uegnet for kategorisk utfall | **Klassisk testteori (X = T + e), reliabilitet (α, test–retest, split-half, SEM), målingsvaliditet, standardskårer (Z/T), faktoranalyse** |
| Tredjevariabler/kausalmodeller på begrepsnivå | **Konfundering og mediering som fulle regresjonsanalyser** (firetrinns fremgangsmåte); moderering via produktledd | **Mediering/moderering i dybden** (a×b, c/c′, bootstrapping/Process) er PSYC2104s tyngdepunkt |

**Kort:** PSY1010-boka lærer *hva* korrelasjon, hypotesetesting og design er. **PSY2014-boka eier den generelle lineære modellen** — regresjon og ANOVA forent, faktoriell ANOVA, interaksjon, dummy-/kontrastkoding, polynom, forutsetnings- og innflytelsesdiagnostikk, kji-kvadrat, og GLM-broen mellom dem. PSYC2104-boka eier det **psykometriske** stoffet (klassisk testteori, reliabilitet/α, SEM, målingsvaliditet, standardskårer, faktoranalyse) og den tunge **medierings-/modereringspipelinen** (Baron & Kenny, bootstrapping/Hayes Process). Der fagene overlapper på regresjons-output-tolkning, holder PSY2014 seg til GLM-vinkelen (kontroll-logikk, dummy, polynom, ANOVA-ekvivalens) og henviser mediering-i-dybden og psykometri til PSYC2104. PSY2014-boka bør åpne med en kort «du kan dette fra PSY1010»-bro (korrelasjon, hypotesetesting, SE) og deretter gå rett på GLM.

Nevnes uten overlapp av betydning: **PSY1000** (generell psykologi — ikke metode), **PSY2013** (kvalitativ metode — komplementær, ingen statistisk overlapp), **PSYC1201** (sosialpsykologi — substansfag).

### Må beherskes perfekt (bærer eksamen)
1. **Output-tolkning av multippel regresjon:** b (retning/enhet/dummy-gruppeforskjell), konstant, R²/justert R², CI, standardiserte koeffisienter; *hvorfor koeffisienter endres når kontrollvariabler legges til* (konfunder/suppressor) og hvilken variabel som driver det. Obligatorisk 55–65 %-oppgave i hvert sett.
2. **Enveis + toveis ANOVA:** F-testens rasjonale (mellom/innen-gruppe varians), utfylle sladdet ANOVA-tabell, interaksjon lest av linjediagram, F-endringen enveis→toveis, post-hoc/Bonferroni. Fast i hvert sett.
3. **GLM-broen:** ANOVA = dummy-kodet regresjon (samme H0, samme F); dummy-/kontrastkoding; hvorfor lineær regresjon er uegnet for kategorisk/binær utfall. Fagets røde tråd.
4. **Kji-kvadrat:** uavhengighets-H0, forventede frekvenser, χ² for hånd, df = (R−1)(C−1), kritisk verdi, standardiserte residualer. Fast avsluttende oppgave.
5. **Regnekjernen:** forventet Y fra ligningen, R² fra SSE/SST, t = b̂/SE, n fra frihetsgrader, ANOVA-celler, χ² — alt med vist fremgangsmåte fra formelarket.

### Må kunne (differensierer; A-stoffet)
6. **Konfunder vs. suppressor vs. mediering** — de tre grunnene til at en koeffisient endres, holdt skarpt fra hverandre; firetrinns mediering.
7. **Polynom/kurvilinearitet** — begrunne annengradsledd fra residualstruktur + ΔR²/AIC/nested-F; ekstrapoleringsforbehold.
8. **Standardiserte koeffisienter** — for å rangere prediktorer med ulik målenhet.
9. **Standardfeilen til en koeffisient** og de tre determinantene (n, s, spredning i X) — koblet til statistisk styrke.
10. **Forutsetnings- og innflytelsesdiagnostikk** — residualplott/QQ/histogram; uteliggere vs. leverage vs. Cook's d; multikollinearitet (VIF).
11. **Interaksjon i regresjon (moderering)** og skillet mot ANOVA-interaksjon.

### Bør kjenne til (lavfrekvent — fordypning/flervalgsbank)
12. **Sentrering av prediktor** (tolkbart konstantledd); **effektstørrelse η²**; **modellseleksjon** (forward/backward, AIC); **SE_diff / t-test mellom to snitt** (nå absorbert i GLM); **planlagte vs. post-hoc kontraster**.

### Anbefalt bokdesign som følge av analysen
- **Kapittelstruktur speiler GLM-rammeverket og oppgavetypene:** (1) fra korrelasjon til enkel regresjon (bro fra PSY1010), (2) multippel regresjon + statistisk kontroll (konfunder/suppressor), (3) standardiserte koeffisienter + standardfeil + signifikansavlesning, (4) forutsetninger, residualdiagnostikk og innflytelse, (5) polynom/kurvilinearitet + modellsammenlikning, (6) interaksjon/moderering + (kort) mediering med henvisning til PSYC2104, (7) enveis ANOVA + F-testens rasjonale, (8) toveis ANOVA + interaksjon + post-hoc, (9) GLM-broen (ANOVA = dummy-regresjon), (10) kji-kvadrat + kategoriske data — hvert kapittel avsluttet med en «output-simulator».
- **Output-lesebibliotek i to dialekter:** siden hele oppgave 1–3 er tabelltolkning, bygg en bank av *omskrevne, egenkonstruerte* regresjons-, ANOVA- og krysstabelloutput i både R-stil (`lm`/`aov`/`anova`/`confint`/AIC/`lm.beta`) og SPSS-stil, med ferdige tolkninger på C- og A-nivå. Ikke gjenbruk UiOs tall.
- **«Fyll inn de sladdede tallene»-drill:** ANOVA-tabellutfylling, maskert t-verdi (regn t = b̂/SE), R² fra SSE/SST, χ² fra krysstabell — som gjennomregnede eksempler med snille tall.
- **Differensierte modellsvar:** for hver kjerneoppgave en «bestått-versjon» (grunntolkning + korrekt regning) og en «A-versjon» (konfunder/suppressor-skille, GLM-broen, F-endringsforklaring, forutsetnings-/innflytelsesnyanse, multippel-testing-korreksjon), med sensorkommentar bygget på veiledningenes momentspråk.
- **«Feilvaksine»:** drill de 17 feilene i del 5 — særlig innen/mellom-gruppe-vranglæren, dummy-/konstantledd-tolkning, konfunder-vs-suppressor, ustandardisert-vs-standardisert, lineær-regresjon-på-binært-utfall, og GLM-broen.
- **Begrepsdriller (quiz/flashcards):** konfunder vs. suppressor vs. mediator; hovedeffekt vs. interaksjon; enveis vs. toveis ANOVA; SSb vs. SSw; b vs. β; R² vs. justert R²; uteligger vs. leverage vs. Cook's d; regresjon vs. ANOVA vs. kji-kvadrat. Dekker naturlig 500+-kravet.
- **Treningssett bygget over hvert faktiske sett 2018–2024** (omskrevet), siden gjenbruk av oppgaveforløp er dokumentert norm.

---

## 8. Kildeliste

Alle kilder er lest (sensorveiledningene og settene grundig). **Alt er omskrevet — ingen ordrette gjengivelser** av oppgave- eller veiledningstekst inngår i denne analysen eller skal inngå i læreboka. Arkiv: `/Users/danielandreasaubert/Desktop/Eksamner/UiO/PSY2014/`.

### Sensorveiledninger og sett med svarmomenter (kjernen i analysen — lest grundig)
| Fil | Innhold |
|---|---|
| `sensorveiledning-psy2014-v24.docx` (+ `eksamensoppgave-psy2014-v24_norsk.pdf`, `eksamensoppgave-psy2014-v24_engelsk.pdf`) | V2024: klimaangst→fremtidsplaner-regresjon (leverage/Cook's d/residual, konfunder-identifisering, kategorisk SES, standardiserte koeffisienter, polynom alder² + AIC/F-test/diagnostiske plot); musikk×treningsform ANOVA (innen/mellom-varians, tabellutfylling, Bonferroni-post-hoc, interaksjon, F-endring enveis→toveis); arbeidsmiljø×innovasjon kji-kvadrat + standardiserte residualer |
| `psy2014-2019v-sensorveiledning.pdf` | V2019: tekstforståelse-regresjon (SE-determinanter, konfunder/suppressor, dummy-reversering, polynom alder², signifikans fra t/CI/p, residualdiagnostikk, multikollinearitet høyt/lavt korrelerte prediktorer/VIF); tablettfarge ANOVA (F-rasjonale, tabellutfylling, ANOVA=dummy-regresjon/GLM, toveis + interaksjonsfigurer) |
| `psy2014-2020v-eksamensoppgave-og-sensorveiledning.pdf` | V2020: verbal hukommelse-regresjon (sentrert prediktor, interaksjon SØVN×ABSTRAKT som to linjer, konfunder ALDER, SE-faktorer, standardiserte koeffisienter/enheter, epsilon-antagelser, uteliggere/leverage/Cook's d); innsats-ANOVA (F-rasjonale, dummy-regresjon-ekvivalens, toveis + η²/effektstørrelse); tastatur×syn kji-kvadrat + standardiserte residualer |
| `psy2014-v22---eksamensoppgaver-og-sensorveiledning.pdf` | V2022: seks korte oppgaver — popularitet-regresjon (konfunder SES/suppressor introversjon, CI, forventet Y); tilfredshet-polynom (stress²); navigasjon-mediering (firetrinns fremgangsmåte); avbrytelser×erfaring enveis/toveis ANOVA (tabellutfylling, F-endring, interaksjon); enebarn×sosial angst kji-kvadrat (χ² for hånd, standardiserte residualer, lineær regresjon uegnet for binær DV) |
| `psy2014-eksamensoppgaver-og-sensorveiledning-v23.pdf` | V2023: sosial angst-regresjon (AIC/nested-ANOVA-modellsammenlikning, justert R², interaksjon sosiale medier×foreldreutdanning + kurvilineær residual, kategorisk 3-nivå skoletype, konfunder mobbing); emosjonsregulering×intensitet kji-kvadrat (standardiserte residualer); fag×metode enveis/toveis ANOVA + Bonferroni-post-hoc + figurmatching |

### Eksamensoppgaver uten skrevne svarmomenter (lest for struktur)
| Fil | År | Merknad |
|---|---|---|
| `psy2014_v18.pdf` | V2018 | Eksamensoppgave med formelark, ingen egen veiledning: sjenerthet-regresjon (konfunder, R²-utregning, standardiserte koeffisienter, residual-antagelsesbrudd); drømmehukommelse enveis/toveis ANOVA (interaksjon); kjæledyr×filmsjanger kji-kvadrat (lineær regresjon uegnet, χ²-samplingfordeling). Svarmomenter utledet fra oppgavetekst + parallelle senere veiledninger |
| `psy2014-eksamensoppgave- -vedlegg-v21.pdf` og `SENSORVEILEDNING_psy2014-eksamensoppgave- -vedlegg-v21.pdf` | V2021 | Åpen bok, digital hjemmeeksamen. **Begge filene inneholder kun oppgavetekst + R-output (anova/confint m.m.), IKKE skrevne svarmomenter** — «SENSORVEILEDNING»-filen er reelt en duplikat av eksamens-/vedleggsfilen. Pupillestørrelse-regresjon (n/R² fra anova-output, polynom NDIST², ekstrapoleringsforbehold, multikollinearitet-problem, standardiserte koeffisienter, dummy FARGE, moderering-oppsett); Tetris-ANOVA (tabellutfylling, figurmatching); firedagers-uke kji-kvadrat |

### Vedlegg (output-tabeller/skann til oppgavene)
| Fil | Merknad |
|---|---|
| `vedlegg-1-til-oppgave-1.pdf`, `vedlegg-2-til-oppgave-1.pdf`, `vedlegg-til-oppgave-2.pdf`, `vedlegg-til-oppgave-3.pdf` | Output-vedlegg (regresjons-, ANOVA- og krysstabelloutput) til et av settene. Tekstlaget inneholder tallene, men de er ikke reprodusert her — de svarer til oppgaveforløpene beskrevet over (regresjon i oppg. 1, ANOVA i oppg. 2, kji-kvadrat i oppg. 3). Behandlet som støtte til oppgavene, ikke selvstendige kilder |

**Hull i arkivet:** ingen sett før V2018; kun vårsett (emnet eksamineres i vårsemesteret); ingen skrevne svarmomenter for V2018 (eksamens-PDF uten veiledning) og V2021 (begge V2021-filer er oppgave/output uten momenter) — disse er dekket via oppgavetekst + de nesten identiske oppgaveforløpene i V2019/V2020/V2022–V2024-veiledningene. Enkelte navnevarianter i arkivet peker på samme semester og er behandlet som ett sett per år.
