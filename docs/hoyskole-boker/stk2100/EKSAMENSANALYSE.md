# Eksamensanalyse: STK2100 – Maskinlæring og statistiske metoder for prediksjon og klassifikasjon (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på det tilgjengelige
> arkivet av **avsluttende eksamener i STK2100 (2017–2025)** samt et fullstendig
> **prøveeksamen-sett (trial exam, vår 2022)**. Løsningsforslag/fasiter er lest
> **grundig** for følgende: prøveeksamen (10 oppgaver med full fasit), 2025, 2024,
> 2023, 2022, 2021, 2020, 2019, 2018 og 2017. Oppgavesettene er lest grundig for de
> siste ~6 årene. **Merk to viktige avgrensninger for tellegrunnlaget:**
>
> 1. **2020 og 2021 var hjemmeeksamener** (pga. korona): «Permitted aids: Anything
>    available», og de krevde faktisk **R-programmering** (last ned data, kjør
>    `glmnet`, `kmeans`, `hclust`, `prcomp` osv.). Disse er **ikke representative**
>    for den ordinære skoleeksamen studenten nå møter og telles derfor separat.
> 2. **Mange sett finnes i både norsk (bokmål) og engelsk versjon** (samme oppgaver).
>    Disse er **ikke dobbelttalt**.
>
> Den kvantitative temafrekvensen bygger derfor på **N = 8 ordinære, lukkede
> skoleeksamener/prøveeksamener** (2017, 2018, 2019, 2022, 2023, 2024, 2025 +
> prøveeksamen V22). 2020/2021-hjemmeeksamenene brukes til å belyse pensumbredden,
> ikke som frekvensvekter. **Alt innhold er omskrevet med egne ord** — ingen ordrette
> gjengivelser av oppgavetekster eller fasitformuleringer. Formler og notasjon er
> standard faglig materiale uten verkshøyde.
>
> **Viktig avgrensning — forholdet til STK1110.** STK2100 forutsetter STK1110
> (statistisk inferens: sannsynlighetsmaksimering/MLE, forventningsrett estimator,
> varians, konfidensintervall, lineær regresjon). STK2100 **gjenbruker og bygger på**
> dette apparatet, men skifter *mål*: fra å estimere og teste parametre i én riktig
> modell (STK1110) til å **velge blant mange modeller/metoder ut fra prediksjonsevne**
> og håndtere **bias–varians-avveiningen, overtilpasning og høydimensjonale data**.
> Progresjonen er dokumentert i del 8.

---

## 1. Eksamensform og utvikling

### Grunnform
- **Skriftlig skoleeksamen**, 4 timer, karakter A–F, teller **100 %**. **To
  obligatoriske innleveringer** («mandatory assignments», med R-koding) må være
  **godkjent** for adgang til eksamen.
- **Hjelpemidler:** **godkjent kalkulator** + **formelsamling for STK1100/STK1110**
  (og de siste årene også en egen **formelsamling for STK2100**). Merk utviklingen i
  topptekstene: eldre sett (2017–2019, 2022–2023) oppgir «List of formulas for
  STK1100/STK1110 and STK2100»; 2024 oppgir kun «STK1100/STK1110»; 2025 oppgir «Formulas
  in STK2100». Formelsamlingen inneholder standardfordelinger, kvantiltabeller og
  bl.a. den **hypergeometriske fordelingen** (som brukes i random-forest-oppgaven 2024).
- **Pensumbøker:** Hastie, Tibshirani & Friedman, *The Elements of Statistical
  Learning* (ESL), og James et al., *An Introduction to Statistical Learning* (ISL).
  Fasitene refererer eksplisitt til ESL-figurer (f.eks. «Figure 15.7» i 2024).
- **Emneansvarlige i kildene:** Geir Storvik (prøveeksamen/eldre sett), Riccardo De
  Bin (2019/2020/2024-fasiter), Ingrid Hobæk Haff (obliger 2026). Fasitstilen varierer
  litt med forfatter, men kravene er stabile.

### Korona-avvik (viktig for tolkning av arkivet)
- **2020 og 2021 = hjemmeeksamen** med alle hjelpemidler og **obligatorisk R-koding**
  (2020 varte et helt døgn: «9.00 – June 17th, 9:00»). Disse ligner mer på obligene
  enn på en ordinær skoleeksamen. De er verdifulle for å se **hele pensumbredden**
  (lasso/ridge via `glmnet`, K-means-initialisering, hierarkisk klynging, PCA-scree),
  men studenten som nå tar faget møter **lukket 4-timers eksamen uten datamaskin**.

### Oppgavestruktur (stabil)
- Settene har **3–4 storoppgaver** (2024/2025 hadde 3–4; prøveeksamen hadde hele 10
  korte). Hver storoppgave er en **kjede med 4–7 deloppgaver (a, b, c, …)** i samme
  datasett-kontekst. **«All subquestions are counted equally»** står eksplisitt på
  flere sett — dvs. ingen del kan nedprioriteres taktisk.
- Den typiske tematiske tredelingen på et ordinært sett:
  1. **Regresjon / modellvalg** (lineær + GAM + tre + ensemble, tolke R-utskrift,
     AIC/BIC),
  2. **Klassifikasjon** (logistisk regresjon, LDA/QDA, tre, ROC/AUC),
  3. **Uveiledet læring** (klynging, PCA) — eller en **regularisering/utlednings-oppgave**
     (ridge/lasso-utledning, bias–varians, hatmatrise).

### Utviklingstrekk
1. **To sjangre lever side om side i hvert sett** (avgjørende for boken): (a) **verbal
   tolkning av R-utskrift, plott og figurer** (koeffisienter, P-verdier, AIC/BIC,
   ROC-kurver, GAM-plott, tredigrammer, dendrogrammer) og (b) **matematiske
   utledninger for hånd** (utled ridge/lasso-estimatoren, vis at bagging reduserer MSE,
   dekomponer bias–varians, hatmatrise-egenskaper, spline-frihetsgrader).
2. **AIC/BIC er blitt en ryggrad.** Fra 2017 og framover regnes AIC/BIC ut for hånd fra
   log-likelihood og antall parametre i nesten hvert sett — særlig for å **telle
   parametre i et tre** (blader vs. blader + splitter × 2) og for å sammenligne
   lineær/GAM/tre.
3. **Tre-baserte metoder og ensembler** (regresjonstre, klassifikasjonstre, bagging,
   random forest, boosting) er en fast gjenganger, ofte koblet til å **lese av en
   prediksjon ved å følge en sti i tredigrammet**.
4. **GAM/splines** (glattingssplines, `trace(S)` som frihetsgrader, «Anova for
   Nonparametric Effects») dukker opp jevnlig fra 2017.
5. **Nevrale nett** dukker opp sporadisk (2021 hjemmeeksamen; 2023 antall skjulte
   noder og validering) men er sjelden tungt utledet på lukket eksamen.
6. **Klynging (K-means + hierarkisk) og PCA** er blitt fast innslag som egen storoppgave
   eller siste deloppgave (2019, 2020, 2024).

---

## 2. Temafrekvens-tabell

Celleverdi = andel av de **8 ordinære, lukkede settene** (2017, 2018, 2019, 2022, 2023,
2024, 2025, prøveeksamen V22) der temaet forekommer som minst én deloppgave.
2020/2021-hjemmeeksamenene er **ikke** talt inn i denne kolonnen, men nevnt der de
dekker noe unikt. **Gjenganger-score = andel av 8.**

| Tema | **Gjenganger-score** |
|---|---|
| **Tolke R-utskrift / plott / figur** (koeffisienter, P-verdier, plott) | **≈8/8 = 100 %** |
| **AIC/BIC** (definisjon, utregning, modellsammenligning, parametertelling) | **≈8/8 = 100 %** |
| **Logistisk regresjon** (modell, oddsratio, tolkning, beslutningsgrense) | **≈7/8 = 88 %** |
| **Tre-baserte metoder** (regresjons-/klassifikasjonstre, lese sti, telle df) | **≈7/8 = 88 %** |
| **Bias–varians / overtilpasning** (begrep og/eller full dekomponering) | **≈6/8 = 75 %** |
| **Modellvalg / variabelseleksjon** (stegvis, subset, korrelasjon endrer P-verdi) | **≈6/8 = 75 %** |
| **Kryssvalidering** (K-fold/LOOCV, hvorfor, testsett vs. valideringssett) | **≈6/8 = 75 %** |
| **GAM / splines** (basisfunksjoner, `trace(S)`, ikke-lineære effekter) | **≈5/8 = 63 %** |
| **Regularisering (ridge / lasso)** (straffeledd, krymping, utledning) | **≈5/8 = 63 %** |
| **Ensembler** (bagging, random forest, boosting — beskrive/utlede) | **≈5/8 = 63 %** |
| **ROC-kurve + AUC** (definere, tolke, rangere modeller) | **≈4/8 = 50 %** |
| **Lineær regresjon på matriseform / MKM-utledning** (`β̂=(XᵀX)⁻¹XᵀY`) | **≈4/8 = 50 %** |
| **Klynging** (K-means + hierarkisk, link-typer, elbow) | **≈4/8 = 50 %** |
| **PCA / dimensjonsreduksjon** (scree, komprimere før klynging) | **≈3/8 = 38 %** |
| **kNN + forbannelsen ved dimensjonalitet** | **≈3/8 = 38 %** |
| **Bayes-klassifikator / tap / forventet feil** (`argmax Pr(Y=g\|x)`, kostnader) | **≈3/8 = 38 %** |
| **LDA / QDA** (utled beslutningsgrense, telle df, betinget uavhengighet) | **≈2/8 = 25 %** |
| **Hatmatrise / residualegenskaper** (`I−H`, `E[RSS]=σ²(n−p)`, ortogonalitet) | **≈2/8 = 25 %** |
| **Nevrale nett** (skjulte noder, regularisering, tolke variabilitet) | **≈2/8 = 25 %** |
| **Vektet MKM / GLS** (`β̂=(XᵀW⁻¹X)⁻¹XᵀW⁻¹Y`, forventningsrett, varians) | **≈1/8 = 13 %** |
| **Lokal regresjon / kjerneglatting** (utled lokal MKM, båndbredde `h`) | **≈1/8 = 13 %** (+prøveeks.) |
| **Backfitting / additive modeller (algoritme)** | **≈1/8 = 13 %** |
| **0.632-bootstrap / bootstrap for feilestimering** | **≈1/8 = 13 %** (2024) |
| **Binomisk/GLM-modellering av teller-respons** (aksept-andel osv.) | **≈2/8 = 25 %** |
| **Naiv Bayes / betinget uavhengighet** (spam-eksempel) | **prøveeks.** |
| **Lift-plott / forbedringsfaktor** | **2020 (hjemme)** |
| **Klassisk hypotesetesting med tabellkvantiler (STK1110-rituale)** | **≈0/8 (ligger i STK1110)** |
| **Ren sannsynlighetsregning (MGF, Jacobi, simultantetthet)** | **≈0/8 (STK1100/1110)** |

**Viktigste funn:**
- **To ferdigheter er universelle:** *tolke R-utskrift/plott* og *regne + tolke
  AIC/BIC*. Ingen ordinær eksamen mangler noen av dem. AIC/BIC er limet som binder
  modellsammenligningen sammen — og **parametertelling for trær** (blader, evt.
  blader + 2×splitter, evt. + σ²) er en klassisk snublestein som fasitene bruker mye
  plass på.
- **Klassifikasjon dominerer over ren regresjon** når man teller
  logistisk regresjon (88 %) + trær (88 %) + ROC/AUC (50 %) + LDA/QDA (25 %).
- **Utledningssjangeren er reell og tung:** ridge/lasso-normallikninger, bias–varians-
  dekomponering, bagging-MSE-ulikheten, hatmatrise-egenskaper og lokal-regresjons-
  likningssystemet går igjen. Studenten må kunne **derivere en penalisert
  tapsfunksjon og løse normallikningene**, ikke bare tolke utskrift.
- **Fravær som definerer emnet:** det klassiske STK1110-**hypotesetest-ritualet med
  tabellkvantiler** er så godt som borte som selvstendig oppgave. P-verdier
  *tolkes* (fra R-utskrift), men utledes ikke. Ren sannsynlighetsregning forutsettes.

---

## 3. Oppgavetype-katalog

To hovedsjangre løper gjennom alt: **(I) tolkning** (les R-utskrift/plott/figur og
forklar i ord) og **(II) utledning** (regn/vis for hånd). Mange deloppgaver blander
dem. Nedenfor katalogiseres arketypene med krav, foretrukket fasitmetode og plassering.

### A. Tolke R-utskrift fra en (lineær eller logistisk) regresjon  *(sjanger I)*
- **Krav:** Peke ut hvilke kovariater som er «viktige» ut fra **P-verdier**
  (Wald/z-test på hver koeffisient, betinget på de andre); **tolke en koeffisient i
  kontekst** («temp = 4,3 → forventet antall øker med ~4 sykler per grad, alt annet
  likt»); for logistisk: oversette til **oddsratio** `e^{β}` og
  sannsynlighet; forklare **hvorfor tolkningen er vanskelig** når kovariater henger
  sammen (f.eks. `hr` og `daynight`). Forstå kolonnene Estimate/Std.Error/t/z/Pr,
  Residual standard error, Multiple/Adjusted R², F-statistikk, Null/Residual deviance.
- **Frekvens:** ~100 %. Åpner nesten alltid Oppgave 1.
- **Omskrevet eksempel:** «Ut fra R-utskriften, hvilke forklaringsvariabler er viktige?
  Tolk effekten av `temp`, og forklar hvorfor effekten av `hr` er vanskeligere å tolke.»

### B. AIC/BIC — utregning, parametertelling og modellvalg  *(sjanger I+II)*
- **Krav:** Kunne formlene `AIC = −2·ℓ(θ̂) + 2p` og `BIC = −2·ℓ(θ̂) + log(N)·p`; regne
  dem ut fra oppgitt log-likelihood; forklare at **BIC straffer kompleksitet hardere**
  (og derfor velger enklere modell), at **AIC passer for prediksjon**, **BIC for å
  finne «riktig» modell**; at **lavere er bedre**; og at AIC/BIC kan velge ulike
  (ikke-nøstede) modeller ved korrelerte variabler. **Kritisk delferdighet:** telle
  parametre — for et **tre** er det enten `#blader` (vanligst) eller
  `#blader + 2·#splitter` (+ evt. `σ²` for regresjonstre); for **GAM** brukes
  `p = trace(S)` (ikke-heltall). Fasitene gir ofte **begge** tre-tellingene.
- **Frekvens:** ~100 %.
- **Omskrevet eksempel:** «Regn ut AIC og BIC for treet med 11 blader, forklar hvordan
  du teller frihetsgradene, og sammenlign med den lineære modellen og GAM.»

### C. Bias–varians-dekomponering  *(sjanger II)*
- **Krav:** Vis `E[(Y−f̂)²|x] = Var(ε) + Bias[f̂]² + Var[f̂]` ved å legge til og trekke
  fra `E[Y|x]=f(x)` og `E[f̂(x)]`, og argumentere at kryssleddene faller bort. Koble til
  at **restriktive/enkle** modeller gir høy bias, lav varians; **fleksible** gir lav
  bias, høy varians; og at **treningsfeil undervurderer** testfeil (fører til
  overtilpasning hvis man bruker den til modellvalg). Varianter: telle-respons
  (`Var = Np(1−p)`, 2021) og klassifikasjonstap.
- **Frekvens:** ~75 % (begrep i mange, full dekomponering i ~4/8 + prøveeks.).
- **Omskrevet eksempel:** «Vis at forventet prediksjonsfeil splittes i irredusibelt
  ledd, kvadrert forventningsskjevhet og varians, og forklar avveiningen.»

### D. Regresjonstre / klassifikasjonstre — lese, telle, tolke  *(sjanger I)*
- **Krav:** **Følge en sti** gjennom tredigrammet for et gitt individ og lese av
  prediksjonen (klasse eller tallverdi); forklare at et tre gir **konstant
  prediksjon/sannsynlighet innen hver region** `Rm` (`µ_i=c_m` / `p_i=c_m`), og at
  ulike splitter på ulike variabler gir **interaksjoner**; forklare hvorfor **to
  søskenblader kan gi samme klasse** (treet estimerer sannsynligheter, ikke bare
  klasser). Telle blader/splitter til AIC (se B).
- **Frekvens:** ~88 %.
- **Omskrevet eksempel:** «Bruk klassifikasjonstreet til å predikere for en person med
  glukose 160 og BMI 28. Forklar hvorfor de to ytterste splittene finnes selv om begge
  barn gir samme klasse.»

### E. Ensembler: bagging, random forest, boosting  *(sjanger I+II)*
- **Krav:** *Beskrive algoritmene i ord/pseudokode:* **bagging** = mange trær på
  bootstrap-utvalg, gjennomsnitt (regresjon) / flertall (klassifikasjon); **random
  forest** = bagging + trekk et tilfeldig utvalg `m≤p` kovariater ved hver splitt (for
  å **dekorrelere** trærne); **boosting** = trær tilpasses **sekvensielt** til
  residualene, skalert med læringsrate `λ`. *Utlede:* vis at **populasjons-bagging
  aldri øker MSE** (`E[Y−f_ag]² ≤ E[Y−f*]²` via å legge til/trekke fra `f_ag`). Regne
  ut **sannsynligheten for å velge en relevant variabel** blant `m=⌊√p⌋` med
  **hypergeometrisk fordeling** (2024). Forklare hvorfor RF svekkes med mange
  støyvariabler.
- **Frekvens:** ~63 %.
- **Omskrevet eksempel:** «Vis matematisk at den ideelle bagging-estimatoren har
  mindre eller lik MSE som ett enkelt tre. Beskriv deretter random forest som en
  algoritme og pek på steget som skiller den fra bagging.»

### F. Regularisering: ridge og lasso — utledning og tolkning  *(sjanger II+I)*
- **Krav:** Skrive den penaliserte tapsfunksjonen `L_λ(β)=Σ(y_i−β₀−Σβ_jx_ij)² + λΣβ_j²`
  (ridge, L2) eller `+ λΣ|β_j|` (lasso, L1); **derivere mht. β₀ og β_k, sette lik null**
  og lande på ridge-normallikningene `[XᵀX+λI]β̂=XᵀY` (evt. sentrert, `β̂₀=ȳ`); vise at
  ridge gir **`E[β̂]=β/(1+λ)`** (skjev) og **redusert varians** (bias–varians igjen);
  forklare at **lasso setter noen koeffisienter eksakt = 0** (variabelseleksjon) mens
  ridge bare krymper; at **λ velges ved kryssvalidering**; at variablene bør **skaleres**
  når samme `λ` brukes på alle. Varianter: penalisere mot en verdi ≠ 0 (`λ(β₁−1.5)²`,
  2022) → vektet snitt av MKM og målverdi.
- **Frekvens:** ~63 %.
- **Omskrevet eksempel:** «Skriv opp ridge-kriteriet, deriver og finn `β̂` på
  matriseform. Vis at estimatoren blir forventningsskjev, og forklar hva `λ` gjør med
  bias og varians.»

### G. GAM / splines / basisfunksjoner  *(sjanger I+II)*
- **Krav:** Forklare at en GAM er **additiv i glatte, ikke-lineære ledd** bygget av
  **basisfunksjoner/splines**, at modellen er **lineær i parametrene gitt basisen** (så
  vanlig lineær-modell-maskineri gjelder), og at **frihetsgrader = `trace(S)`** der
  `ŷ=Sy`. Tolke GAM-plott (ikke-lineær effekt vs. tilnærmet lineær, brede
  konfidensbånd der data er tynne), og «Anova for Nonparametric Effects». Utlede
  **spline-frihetsgrader** ved å telle parametre minus kontinuitets-/deriverbarhets-
  betingelser (f.eks. stykkevis kvadratisk med `M−1` knuter → `M+2` frie parametre).
- **Frekvens:** ~63 % (spline-utledningen særlig i prøveeksamen).
- **Omskrevet eksempel:** «En stykkevis kvadratisk funksjon med `M−1` knutepunkter
  kreves kontinuerlig med kontinuerlig derivert. Hvor mange frie parametre gjenstår?»

### H. Logistisk regresjon — modell, oddsratio, beslutningsgrense  *(sjanger I+II)*
- **Krav:** Skrive `Pr(Y=1|x)=e^{β₀+Σβ_jx_j}/(1+e^{β₀+Σβ_jx_j})`; regne ut en
  **sannsynlighet** for gitte kovariatverdier; oversette koeffisient til **oddsratio**
  `e^{β}`; finne **terskelen** i en kovariat som gir `p=0,5` (sett lineær-prediktor = 0);
  tolke **konstantleddet** (baseline; ofte uten fysisk mening → sentrér); forklare
  hvorfor en koeffisient blir (ikke-)signifikant avhengig av hvilke andre variabler som
  er med (korrelasjon/konfundering). Utlede at **beslutningsgrensen er lineær**
  (`β₀+Σβ_jx_j=0`) og telle frihetsgrader (`p+1`).
- **Frekvens:** ~88 %.
- **Omskrevet eksempel:** «Regn ut sannsynligheten for sykdom for et individ med
  `pregnant=2, glucose=160`. Hvor lavt må glukosenivået være for at sannsynligheten
  skal bli under 0,5?»

### I. LDA / QDA — beslutningsgrense og frihetsgrader  *(sjanger II)*
- **Krav:** Bruke **Bayes' regel** `Pr(Y=k|x) ∝ π_k f_k(x)` med gaussiske `f_k`; sette
  de to log-posteriorene like og **utlede at LDA gir lineær** og **QDA gir kvadratisk**
  beslutningsgrense; **telle parametre/frihetsgrader** (LDA: `1+2p+p(p+1)/2`; QDA:
  `1+2p+2·p(p+1)/2`; QDA med betinget uavhengighet/diagonal `Σ`: `4p+1`), og rangere
  modellene etter kompleksitet. Koble til at **logistisk regresjon** har den *samme*
  lineære grensen som LDA, men færre parametre.
- **Frekvens:** ~25 % (men tung når den kommer — hel storoppgave i 2025).
- **Omskrevet eksempel:** «Vis at LDA gir en lineær beslutningsgrense og QDA en
  kvadratisk. Angi antall frie parametre i hver modell og ranger dem etter kompleksitet.»

### J. ROC-kurve og AUC  *(sjanger I)*
- **Krav:** Definere **true/false positive rate** (sensitivitet og 1−spesifisitet) som
  funksjon av terskel `τ`; forklare at **ROC-kurven** plotter (tpr, fpr) over alle `τ`;
  at en **perfekt klassifikator** ligger i øvre venstre hjørne (AUC=1) og **tilfeldig
  gjetting** langs diagonalen (AUC=0,5); **rangere modeller** etter hvor nær øvre
  venstre hjørne / hvor stor AUC (og håndtere kryssende kurver ved å supplere med
  feilrate/antall parametre).
- **Frekvens:** ~50 %.
- **Omskrevet eksempel:** «Forklar hvordan en ROC-kurve konstrueres, hva AUC måler, og
  ranger de tre modellene ut fra figuren.»

### K. Kryssvalidering, treningsfeil vs. testfeil, bootstrap  *(sjanger I+II)*
- **Krav:** Forklare hvorfor **treningsfeil er for optimistisk** (modellen tilpasser
  også støyen); hvorfor man trenger et **eget testsett** (og et **tredje sett** når man
  også har gjort modellvalg på valideringssettet); **K-fold / LOOCV**-prosedyren (del i
  K folder, tren på K−1, valider på den siste, roter, midle) og avveiningen (utnytter
  data vs. tung beregning); at CV kan velge tuning-parameter. Beskrive **0.632-bootstrap**
  (blande bootstrap-feil og treningsfeil; vekten 0,632 = sannsynligheten for at en
  observasjon er med i et bootstrap-utvalg) og hvorfor den svikter for veldig
  overtilpassende metoder (liten `k` i kNN) → 0.632+.
- **Frekvens:** ~75 %.
- **Omskrevet eksempel:** «Forklar hvorfor treningsfeilen undervurderer testfeilen, og
  beskriv hvordan K-fold kryssvalidering gir et bedre estimat.»

### L. kNN og forbannelsen ved dimensjonalitet  *(sjanger I+II)*
- **Krav:** Beskrive kNN (`P(Y=g|x₀)=(1/K)Σ_{i∈N₀}I(y_i=g)`, klassifiser til flertall);
  forklare at **liten `K` → lav bias, høy varians** (1-NN har treningsfeil = 0, ekstrem
  overtilpasning) og motsatt; koble til bias–varians. Bruke **medianavstand-formelen**
  `d(p,n)=(1−(1/2)^{1/n})^{1/p}` til å vise at nærmeste nabo blir eksponentielt lengre
  unna når dimensjonen `p` vokser → ikke-parametriske metoder svikter; foreslå
  **dimensjonsreduksjon (PCA)** som botemiddel.
- **Frekvens:** ~38 %.
- **Omskrevet eksempel:** «Forklar hvorfor 1-NN har treningsfeil null, og bruk
  avstandsformelen til å illustrere forbannelsen ved dimensjonalitet.»

### M. Bayes-klassifikatoren og forventet tap  *(sjanger II)*
- **Krav:** Vise at **0–1-tap minimeres** ved å velge `Ŷ = argmax_g Pr(Y=g|x)`; utvide
  til **asymmetriske kostnader** (`c_R, c_S`) og finne den optimale terskelen
  `Pr(Y=1|x) > c_R/(c_R+c_S)`; bruke **Bayes' regel** til å regne posterior-
  sannsynligheter (spam-eksempel) og **naiv Bayes / betinget uavhengighet** for mange
  ord.
- **Frekvens:** ~38 %.
- **Omskrevet eksempel:** «Vis at den optimale klassifikatoren under 0–1-tap velger
  klassen med størst betinget sannsynlighet, og finn terskelen ved ulike feilkostnader.»

### N. Klynging: K-means og hierarkisk  *(sjanger I+II)*
- **Krav:** Beskrive **K-means** (fast `K`; iterér allokering `argmin_k‖x_i−m_k‖²` og
  oppdatering av sentroider til stabilitet); forklare svakhetene (må velge `K`; kun
  numeriske variabler; **sensitiv for startverdier → lokalt minimum**); at **CV ikke
  kan brukes** (uveiledet, ingen fasit); **elbow-metoden** for `K`. For **hierarkisk**:
  agglomerativ vs. divisiv, **single vs. complete link** (og hvilke gruppeformer de
  finner), lese **dendrogram** og velge kutt. Forklare at «within + between dissimilarity»
  summerer til en konstant.
- **Frekvens:** ~50 %.
- **Omskrevet eksempel:** «Beskriv K-means-algoritmen, forklar hvorfor resultatet
  avhenger av startverdiene, og hvorfor man ikke kan velge `K` med kryssvalidering.»

### O. PCA / dimensjonsreduksjon  *(sjanger I)*
- **Krav:** Forklare PCA som lineære kombinasjoner som fanger mest mulig varians; lese
  **scree-plott** (andel forklart varians per komponent); bruke de **første
  komponentene** til å komprimere før klynging/regresjon og som botemiddel mot
  forbannelsen ved dimensjonalitet. (Tyngst i hjemmeeksamen 2020 med `prcomp`.)
- **Frekvens:** ~38 %.
- **Omskrevet eksempel:** «Forklar hva de to første prinsipalkomponentene fanger, og
  hvorfor klyngingen blir bedre etter dimensjonsreduksjon.»

### P. Matriseregresjon: MKM, hatmatrise, vektet/GLS  *(sjanger II)*
- **Krav:** Utlede `β̂=(XᵀX)⁻¹XᵀY` ved å minimere `RSS=(Y−Xβ)ᵀ(Y−Xβ)`; for **vektet
  MKM** med diagonal `W`: `β̂=(XᵀW⁻¹X)⁻¹XᵀW⁻¹Y`, vise **forventningsretthet** og
  `Var(β̂)=(XᵀW⁻¹X)⁻¹σ²`, og at en `√w_i`-transformasjon gir vanlig regresjon.
  **Hatmatrise** `H=X(XᵀX)⁻¹Xᵀ`: residualene `E=(I−H)ε`, `E[E]=0`,
  `Cov(E)=σ²(I−H)`, `E[RSS]=σ²(n−p)` (via spor), og `Cov(ŷ,E)=0` (ortogonalitet).
- **Frekvens:** ~50 % (grunnleggende MKM/matriseform) — hatmatrise ~25 % (tung).
- **Omskrevet eksempel:** «Utled minste kvadraters estimator for vektet regresjon, og
  vis at den er forventningsrett med varians `(XᵀW⁻¹X)⁻¹σ²`.»

### Q. Lokal regresjon / backfitting  *(sjanger II)*  — sjeldnere, men karaktersettende
- **Krav:** Utlede **lokalt vektet MKM** ved å minimere `Σ K(x_i,x₀)(y_i−β₀−β₁x_i)²`,
  vise at `f̂(x₀)` blir en **lineær funksjon av y-ene** (`ŷ=Sy`), og at
  frihetsgrader = `trace(S)`; forklare **backfitting** for additive modeller (estimer én
  funksjon om gangen på residualene, roter).
- **Frekvens:** ~13 % (prøveeksamen; koblet til GAM).

---

## 4. Sensorens krav (fra løsningsforslagene)

Fasitene er faglærerskrevne, **konsise og punktvise** («SKETCH of the SOLUTIONS»). De
premierer **presis begrunnelse i ord kombinert med korrekt utledning/regning**. Krav som
går igjen:

1. **Tolk i kontekst, ikke mekanisk.** En koeffisient tolkes «alt annet likt»; en
   ikke-signifikant variabel er ikke «uviktig» — testen er **betinget** på de øvrige, og
   korrelasjon kan skjule/flytte effekten. Fasitene bruker mye plass på **hvorfor en
   P-verdi endrer seg** når modellen endres.
2. **AIC/BIC riktig — særlig parametertellingen.** Kunne begge formlene, regne dem ut,
   og telle `p` korrekt (tre: blader vs. blader+2×splitter(+σ²); GAM: `trace(S)`).
   Fasitene gir ofte begge tre-tellingene og aksepterer begge, men **feil telling
   straffes**.
3. **Utledninger skal vises fullstendig.** Ved ridge/lasso: skriv tapsfunksjonen,
   **deriver**, sett lik null, løs — gjerne både komponentvis og på matriseform. Ved
   bias–varians og bagging-MSE: **legg til/trekk fra** riktig ledd og **argumenter at
   kryssleddet er null**. Ved hatmatrise: bruk `(I−H)` idempotent + spor-triks.
4. **Skill trening / validering / test eksplisitt.** Treningsfeil er for optimistisk;
   modellvalg på valideringssettet krever et **eget testsett** for endelig evaluering.
   Dette er et gjennomgående «gotcha» (pre-seleksjon på hele datasettet = feil, 2020).
5. **Koble alt til bias–varians / overtilpasning.** Nesten hver metode (kNN, `λ`, `K`,
   antall noder, treets størrelse) diskuteres som en **fleksibilitetsknapp** med
   tilhørende bias–varians-effekt. Fasitene vil se denne koblingen.
6. **Riktig frihetsgrad-/parameter-telling** for LDA/QDA, trær, GAM og logistisk
   regresjon — brukt til å **rangere modellkompleksitet**.
7. **Beslutningsgrenser utledes, ikke pugges:** logistisk/LDA → lineær; QDA → kvadratisk;
   tre → aksefaste rektangler; kNN → fleksible «øyer». Fasitene vil se
   grenseutledningen (sett log-odds/log-posterior = 0).
8. **Klynging er uveiledet:** ingen CV, `K` velges heuristisk (elbow/dendrogram);
   nevn sensitivitet for startverdier (K-means) og link-valg (hierarkisk).
9. **Tolk plott i mønstre og med forbehold:** ikke-lineær GAM-effekt, brede
   konfidensbånd i tynne dataområder, **advar mot ekstrapolering** utenfor dataområdet.
10. **Flere svar kan være riktige.** Fasitene sier eksplisitt at ulike rimelige,
    **evidensunderbygde** tolkninger godtas (særlig i klynging og modellrangering) — men
    de må **begrunnes**.

**Karakterskiller (utledet av oppgavestrukturen):** Bestått-nivået krever å **lese
R-utskrift**, regne **AIC/BIC**, skrive opp logistisk/lineær modell og følge en
**tresti**. Midtsjiktet mestrer **full ridge/lasso-utledning**, **bias–varians-
dekomponeringen**, **kryssvaliderings-resonnementet** og **ROC/AUC-tolkning**.
Toppsjiktet skiller seg på de tunge utledningene: **bagging-MSE-ulikheten +
random-forest-sannsynlighet (hypergeometrisk), LDA/QDA-grense og df-telling,
hatmatrise-egenskaper, vektet MKM, spline-frihetsgrader og lokal-regresjon/backfitting.**

---

## 5. Typiske feil

Feilmønstre som fasitene adresserer eller bygger feller rundt:

1. **Feil parametertelling for trær** i AIC/BIC — glemme splittene (2 parametre hver)
   eller `σ²` for regresjonstre; eller motsatt, ikke vite at «antall blader» ofte brukes.
2. **Tolke en ikke-signifikant koeffisient som «ingen effekt»** uten å huske at testen er
   **betinget** på de andre variablene; ikke forklare at **korrelasjon** flytter
   signifikans mellom variabler.
3. **Bruke treningsfeilen til modellvalg** — den synker alltid med kompleksitet og gir
   overtilpasning; glemme at **modellvalg på valideringssettet** krever et **eget
   testsett** til slutt.
4. **Pre-seleksjon/tuning på hele datasettet** (inkl. testdata) før splitt — lekkasje som
   gir kunstig lav feil (klassisk felle, 2020 c).
5. **Glemme kryssleddet i utledninger** — ikke vise at det er null i bias–varians eller
   bagging-MSE; hoppe over `E[Y|x]=f(x)`-innskuddet.
6. **Ridge/lasso-forvirring:** tro at **ridge** kan nulle ut koeffisienter (det er
   **lasso** som gir eksakte nuller); glemme at variablene bør **skaleres** ved felles `λ`;
   glemme at ridge er **forventningsskjev**.
7. **Blande AIC og BIC:** tro de alltid velger samme (nøstede) modell, eller ikke vite at
   **BIC straffer hardere** (`log N > 2` for `N>7`).
8. **Feil frihetsgrader for LDA/QDA** — glemme at felles `Σ` (LDA) har `p(p+1)/2`
   parametre, eller at diagonal QDA har bare `2p` variansparametre.
9. **Regne GAM-df som heltall** — det er `trace(S)`, typisk ikke-heltall.
10. **Feillese en tresti** — ta feil retning ved en splitt, eller tro at treet gir en
    klasse direkte i stedet for en **estimert sannsynlighet** (derav to like søskenblader).
11. **Klynging med kryssvalidering** — CV gir ikke mening uten fasit; en større `K` gir
    alltid lavere within-dissimilaritet, så «mer er bedre» er feil argument.
12. **Ekstrapolere** en GAM/spline/regresjon langt utenfor dataområdet uten forbehold;
    tolke konstantleddet ved `x=0` når `x=0` er urealistisk (sentrér i stedet).
13. **kNN-bias–varians feil vei** — tro at stor `K` overtilpasser (det er **liten** `K`
    som gjør det).
14. **ROC/AUC:** rangere modeller ut fra kryssende ROC-kurver uten å supplere med AUC/
    feilrate; forveksle sensitivitet og spesifisitet.
15. **Bootstrap-vekten 0,632** — ikke vite at den er `≈ 1−e⁻¹` (sannsynligheten for at en
    observasjon er med i utvalget) og at 0.632-bootstrap svikter ved sterk overtilpasning.

---

## 6. Formel-, definisjons- og notasjonsapparat

### Hva som ligger i formelsamlingen (og derfor IKKE skal pugges)
Formelsamlingen for STK1100/STK1110 (og en egen STK2100-samling) er alltid tillatt og
inneholder standardfordelinger (inkl. **hypergeometrisk** og **binomisk**, brukt i
2024/2023), kvantiltabeller, samt grunnleggende regresjons- og MKM-formler. **Konsekvens
for boken:** treningen skal ligge på å *velge* riktig metode/modell, *tolke* R-utskrift
og plott, *regne* AIC/BIC og feilrater, og *utlede* det som ikke står der (penaliserte
estimatorer, bias–varians, bagging-MSE, LDA/QDA-grenser, hatmatrise-egenskaper) — ikke på
memorering.

### Må beherskes aktivt (utledes/regnes uten oppskrift)

**1. Modellvalg og feilvurdering:**
- `AIC = −2ℓ(θ̂) + 2p`, `BIC = −2ℓ(θ̂) + log(N)·p`. Parametertelling: lineær = `#β`;
  logistisk = `p+1`; tre = `#blader` (evt. `+2·#splitter (+σ²)`); GAM = `trace(S)`;
  LDA = `1+2p+p(p+1)/2`; QDA = `1+2p+p(p+1)`; diagonal QDA = `4p+1`.
- **Bias–varians:** `E[(Y−f̂)²|x] = Var(ε) + (f(x)−E[f̂(x)])² + Var[f̂(x)]`.
- **Kryssvalidering:** K-fold/LOOCV; tren/valider/test-skille; treningsfeil ↓ optimistisk.
- **0.632-bootstrap:** vekt `0,632 = 1−e⁻¹` = P(observasjon i bootstrap-utvalg).

**2. Regularisering:**
- Ridge: `L_λ(β)=RSS + λ‖β‖²` → `β̂=(XᵀX+λI)⁻¹XᵀY`; `E[β̂]=β/(1+λ)` (sentrert/ortogonal),
  `Var[β̂]=σ²/(1+λ)²` — krymper, forventningsskjev, redusert varians.
- Lasso: `L_λ(β)=RSS + λ‖β‖₁` → gir **eksakte nuller** (variabelseleksjon). `λ` via CV.

**3. Lineær/vektet regresjon (matrise):**
- MKM: `β̂=(XᵀX)⁻¹XᵀY`. Vektet/GLS: `β̂=(XᵀW⁻¹X)⁻¹XᵀW⁻¹Y`, `E[β̂]=β`,
  `Var[β̂]=(XᵀW⁻¹X)⁻¹σ²`.
- Hatmatrise: `H=X(XᵀX)⁻¹Xᵀ` (idempotent, symmetrisk); `E=(I−H)Y`, `Cov(E)=σ²(I−H)`,
  `E[RSS]=σ²(n−p)`, `Cov(ŷ,E)=0`.

**4. Klassifikasjon:**
- Logistisk: `Pr(Y=1|x)=e^{η}/(1+e^{η})`, `η=β₀+Σβ_jx_j`; oddsratio `e^{β_j}`; grense `η=0`.
- Bayes-klassifikator: `Ŷ=argmax_g Pr(Y=g|x)` (0–1-tap); kostnadsterskel
  `Pr(Y=1|x)>c_R/(c_R+c_S)`.
- LDA/QDA: `Pr(Y=k|x)∝π_k f_k(x)`, gaussisk `f_k`; LDA (felles `Σ`) → lineær grense,
  QDA → kvadratisk grense.
- kNN: `P̂(Y=g|x₀)=(1/K)Σ_{i∈N₀}I(y_i=g)`; forbannelse: `d(p,n)=(1−2^{−1/n})^{1/p}`.
- ROC/AUC: `tpr=ΣI(ŷ=1,y=1)/ΣI(y=1)`, `fpr=ΣI(ŷ=1,y=0)/ΣI(y=0)`; AUC∈[0,5;1].

**5. Trær og ensembler:**
- Tre: konstant `c_m`/`p_m` per region `Rm`; splitter gir interaksjoner.
- Bagging: snitt/flertall over bootstrap-trær; **`E[Y−f_ag]² ≤ E[Y−f*]²`**.
- Random forest: bagging + `m≤p` tilfeldige kovariater per splitt (`m=⌊√p⌋` default);
  P(relevant valgt) via **hypergeometrisk fordeling**.
- Boosting: sekvensiell tilpasning til residualer, læringsrate `λ`.

**6. Glatting og additive modeller:**
- Splines/GAM: lineær i parametre gitt basisen; `ŷ=Sy`, df=`trace(S)`; stykkevis
  polynom-df = #parametre − #(kontinuitets-/deriverbarhets-)betingelser.
- Lokal regresjon: minimer `Σ K(x_i,x₀)(y_i−β₀−β₁x_i)²`; `f̂` lineær i `y` (`ŷ=Sy`).
- Backfitting: estimer én additiv komponent om gangen på residualene, roter.

**7. Uveiledet:**
- K-means: iterér allokering (`argmin_k‖x_i−m_k‖²`) + sentroide-oppdatering; sensitiv for
  start; `K` via elbow. Hierarkisk: single vs. complete link; dendrogram.
- PCA: lineære komponenter etter forklart varians; scree-plott.

### Notasjonskonvensjoner i settene
- `Y` respons, `x`/`X` kovariat(er)/designmatrise; `f̂`, `β̂`, `p̂` estimatorer; `Rm`
  tre-region, `c_m` regionverdi; `S` glattematrise; `λ` straffe-/tuning-parameter; `K`
  antall folder/klynger; `m` kovariater per splitt; `π_k` klasse-a-priori; `f_k(x)`
  klasse-betinget tetthet; `H` hatmatrise. `ℓ(θ̂)` er log-likelihood (brukt i AIC/BIC).
- **R-utskrift** brukes gjennomgående — boken må lære studenten å **lese** den (glm/lm-
  sammendrag, deviance, AIC, «Anova for Nonparametric Effects», tredigram, dendrogram,
  scree-, ROC- og lift-plott), ikke å **skrive kode** (det hører til obligene).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer 60–70 % av poengene)
1. **Tolke R-utskrift** for lineær og logistisk regresjon (viktige variabler,
   koeffisient i kontekst, oddsratio, hvorfor P-verdier endrer seg).
2. **AIC/BIC** — begge formlene, utregning, korrekt **parametertelling** (særlig trær og
   GAM), og modellsammenligning (BIC hardere, AIC for prediksjon).
3. **Logistisk regresjon** komplett: sannsynlighet, oddsratio, terskel for `p=0,5`,
   lineær beslutningsgrense.
4. **Tre-baserte metoder:** lese en sti, forstå konstant prediksjon per region,
   interaksjoner, telle df.
5. **Bias–varians / overtilpasning** — både begrepet og den fulle dekomponeringen; koble
   til fleksibilitetsknapper (`λ`, `K`, treets størrelse).
6. **Kryssvalidering** og tren/validering/test-skillet.

### Nivå 2 — må kunne (avgjør C mot B)
7. **Ridge og lasso** — full utledning av normallikningene, krymping vs. seleksjon,
   forventningsskjevhet, `λ` via CV.
8. **GAM/splines** — basisfunksjoner, `trace(S)`, tolke ikke-lineære effekter,
   spline-frihetsgrader.
9. **Ensembler** — beskrive bagging/random forest/boosting som algoritmer og forskjellene.
10. **ROC/AUC** — definisjon, tolkning, modellrangering.
11. **Klynging** — K-means + hierarkisk, valg av `K`, hvorfor ikke CV.
12. **Bayes-klassifikator og forventet tap** (inkl. asymmetriske kostnader).

### Nivå 3 — bør kjenne til (topper karakteren, differensierer A)
13. **Bagging-MSE-ulikheten** utledet + **random-forest-sannsynlighet** (hypergeometrisk).
14. **LDA/QDA** — utled lineær/kvadratisk grense og tell frihetsgrader (inkl. diagonal QDA).
15. **Hatmatrise-egenskaper** (`E[RSS]=σ²(n−p)`, ortogonalitet) og **vektet MKM/GLS**.
16. **kNN + forbannelsen ved dimensjonalitet** med avstandsformelen; **PCA** som botemiddel.
17. **Lokal regresjon / backfitting** og **0.632(+)-bootstrap**.
18. **Nevrale nett** (skjulte noder, regularisering, variabilitet ved tilfeldig start).

### Prognose for neste ordinære eksamen
4 timer, lukket, godkjent kalkulator + formelsamling(er). Forvent **3–4 storoppgaver**,
«all subquestions counted equally», organisert rundt disse søylene:
- (i) en **regresjons-/modellvalgsoppgave** på et reelt datasett med **R-utskrift**:
  tolke koeffisienter/P-verdier, regne **AIC/BIC**, sammenligne lineær/**GAM**/**tre**/
  **ensemble**, telle frihetsgrader, følge en tresti;
- (ii) en **klassifikasjonsoppgave:** **logistisk regresjon** (sannsynlighet, oddsratio,
  grense) og/eller **LDA/QDA** (grenseutledning, df), **ROC/AUC**-tolkning;
- (iii) en **utledningsoppgave:** **ridge/lasso** (deriver normallikningene, bias–
  varians), **bias–varians-dekomponering**, **bagging-MSE**, **hatmatrise** eller
  **vektet MKM**;
- (iv) ofte en **uveiledet** avslutning: **K-means + hierarkisk klynging**, valg av `K`,
  evt. **PCA**.
Sannsynlige gjengangere på rotasjon: **bagging-MSE + random-forest-hypergeometrisk,
LDA/QDA-grense, spline-frihetsgrader, kNN/forbannelse, Bayes-tap med kostnader,
0.632-bootstrap.**
**Ikke forvent** (på lukket eksamen): omfattende R-koding (det ligger i obligene og var
et korona-avvik i 2020/2021), eller det klassiske STK1110-hypotesetest-ritualet med
tabellkvantiler — P-verdier **tolkes** her, de utledes ikke.

---

## 8. Progresjon og overlapp: STK1110 → STK2100 (forkunnskaper)

STK2100 forutsetter **STK1110** (statistisk inferens/dataanalyse). Broen er tydelig:
STK1110 lærer studenten **sannsynlighetsmaksimering (MLE)**, **forventningsrett
estimator**, **varians av en estimator**, **konfidensintervall** og **lineær
regresjon med MKM** — akkurat verktøyene STK2100 gjenbruker. Men *målet* skifter.

| Trekk | STK1110 (inferens) | **STK2100 (maskinlæring/prediksjon)** |
|---|---|---|
| **Grunnmål** | Estimere/teste parametre i **én riktig modell** | **Velge blant mange modeller/metoder** etter **prediksjonsevne** |
| **MLE / log-likelihood** | Kjerneverktøy (utled `L→ℓ→score→løs`) | **Gjenbrukt** som byggestein i **AIC/BIC** (`−2ℓ+…`) og GLM/logistisk |
| **Forventningsrett + varians av estimator** | Bærebjelke | Gjenbrukt i **bias–varians-avveiningen** (nå er litt skjevhet ofte *ønsket*, jf. ridge) |
| **Lineær regresjon (MKM, matriseform)** | Bærebjelke, inferens for `β` | **Utgangspunkt** — utvides til ridge/lasso, GAM, trær, ensembler |
| **Hypotesetesting med tabellkvantiler** | Bærebjelke (fullt rituale) | **Så godt som borte** — P-verdier **tolkes** fra R-utskrift, ikke utledes |
| **Konfidensintervall** | ~95 %, sentralt | Perifert; erstattes av **testfeil/CV/AIC/BIC** som «usikkerhetsmål» |
| **Bias–varians / overtilpasning** | Nesten fraværende | **Gjennomgående rammeverk (~75 %)** |
| **Regularisering (ridge/lasso)** | Fraværende | **~63 %** — ny kjerneferdighet |
| **Klassifikasjon (logistisk/LDA/QDA/kNN/tre)** | Kun så vidt logistisk | **Halve emnet** |
| **Modellvalg (AIC/BIC/CV)** | Lett berørt | **Bærebjelke (~100 %)** |
| **Trær, ensembler, GAM, klynging, PCA, nevrale nett** | Fraværende | **Kjernepensum** |
| **R** | R-utskrift til **tolkning** | R-utskrift til **tolkning** på eksamen + **full R-koding i obligene** |
| **Ren sannsynlighetsregning (MGF/Jacobi)** | Forutsatt fra STK1100 | Forutsatt (dukker ikke opp) |

**Konkret om forkunnskaper fra STK1110 som STK2100 bygger direkte på:**
- **MLE og log-likelihood:** studenten må kunne kjenne igjen og bruke log-likelihood —
  den er selve inngangen til **AIC/BIC** og til å tilpasse logistisk regresjon/GLM.
- **Forventningsrett estimator og varians:** hele **bias–varians-avveiningen** er en
  omformulering av dette. STK1110 lærer at forventningsretthet er bra; STK2100 viser at
  man **frivillig ofrer forventningsretthet** (ridge/lasso, krymping) for **mindre
  varians** og bedre prediksjon.
- **Lineær regresjon (MKM, `β̂=(XᵀX)⁻¹XᵀY`, forventning/varians):** dette er
  utgangspunktet som utvides til penalisert regresjon, vektet MKM, GAM og trær. Studenten
  bør kunne **derivere MKM-estimatoren** før STK2100.
- **Konfidensintervall / usikkerhet:** ideen om usikkerhet i estimater videreføres, men
  **måleredskapet** blir testfeil, kryssvalidering og informasjonskriterier snarere enn
  klassiske intervaller.

**Konsekvens for læreboken:** STK2100-boken skal ha **fire tunge deler i balanse** — (1)
**veiledet regresjon + modellvalg** (lineær/ridge/lasso/GAM, AIC/BIC/CV, bias–varians,
R-utskrift), (2) **klassifikasjon** (logistisk, LDA/QDA, kNN, ROC/AUC, Bayes-tap), (3)
**trær og ensembler** (tre, bagging, random forest, boosting), og (4) **uveiledet læring
+ høydimensjonalitet** (K-means, hierarkisk klynging, PCA, forbannelsen ved
dimensjonalitet). Den skal **forutsette, ikke gjenta**, STK1110s MLE-/regresjonsapparat,
og skal trene **begge eksamenssjangrene**: (a) **tolkning** av R-utskrift/plott/figurer og
(b) **matematiske utledninger for hånd**. Kryssbok-lenker bør peke på **STK1110** for MLE,
forventningsrett/varians, lineær regresjon og konfidensintervall.

---

## 9. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/STK2100/`
(oppgavesett, fasiter, formelsamlinger og obliger), med tekstuttrekk i scratchpad-mappen
`stk2100/`.

**Lest grundig — oppgaver og løsningsforslag/fasit (ordinære lukkede sett):**
- 2025 (V, «Sketch of Solution»), 2024 (V), 2023 (V), 2022 (V), 2019 (V), 2018 (V),
  2017 (V), samt **prøveeksamen vår 2022** (10 oppgaver med full fasit — bredest
  tematisk dekning).

**Lest grundig, men holdt utenfor frekvenstellingen (korona-hjemmeeksamener med
R-koding, «Anything available»):**
- 2020 (V, døgnlang hjemmeeksamen, `glmnet`/`kmeans`/`hclust`/`prcomp`), 2021 (V,
  hjemmeeksamen).

**Obliger (adgangskrav, R-koding):**
- `oblig_1_2026.pdf`, `oblig_2_2026.pdf` (2026-versjon), samt `oblig1/2_v22.pdf` og
  `oblig1/2_v23.pdf`. Emansvarlig 2026: Ingrid Hobæk Haff. Obligene dekker
  transformasjon til lineær modell, regresjonstrær vs. regioninndeling, m.m. — de er
  **kodetunge** og speiler ikke eksamens lukkede format.

**Formelsamlinger:** `formelsamling-stk2100-2025/2026.pdf`, `stk2100_formula.pdf`,
`formelsamling-stk-1100-1110_eng_nov_2015.pdf` (inneholder bl.a. hypergeometrisk og
binomisk fordeling brukt i 2024/2023).

**Pensumbøker (referert i fasitene):** Hastie, Tibshirani & Friedman, *The Elements of
Statistical Learning* (ESL — figur 15.7 sitert i 2024); James et al., *An Introduction to
Statistical Learning* (ISL).

**Strukturforbilde:**
- `docs/hoyskole-boker/stk1110/EKSAMENSANALYSE.md` — nærmeste statistikk-forbilde
  (tone og 8-delers struktur); progresjonen STK1110→STK2100 er dokumentert i del 8.

**Merknader om kildene:**
- **Merk dobbeltføring:** flere år finnes i både bokmål og engelsk versjon (samme
  oppgaver) — kun talt én gang.
- **2020/2021 var hjemmeeksamener** med R-koding og alle hjelpemidler (korona) og er
  derfor ikke representative for dagens lukkede 4-timers skoleeksamen; de er talt separat.
- Fasitene er «SKETCH of the SOLUTIONS» — konsise skisser, ikke fullstendige løp; de
  angir eksplisitt at flere rimelige, evidensbaserte tolkninger godtas (særlig i klynging
  og modellrangering).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er parafrasert
  og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt
  ordrett. Formler og notasjon er standard faglig innhold uten verkshøyde.
