# Eksamensanalyse: ECON4130 Statistics 2 (UiO)

> Masternivå matematisk statistikk ved Økonomisk institutt, UiO. Undervist og
> eksaminert **på engelsk**. Denne analysen er grunnlag for en eksamensrettet
> lærebok (bokmål, engelsk fagterminologi beholdt). Alt innhold er **omskrevet**
> fra kildene — ingen ordrett gjengivelse av oppgavetekst (opphavsrett).

> **⚠️ EVIDENSSTYRKE — LES DETTE FØRST.**
> Arkivet inneholder **7 eksamenssett** (H2015–H2021, alle ordinære høsteksamener)
> og **ingen sensorveiledninger / fasit**. Alle utsagn om «sensorens krav» og
> «typiske feil» i del 4–5 er derfor **utledet fra oppgavetekstene selv** — særlig
> fra de innebygde hint-boksene, som avslører den forventede løsningsmetoden — og
> **ikke** verifisert mot offisiell retting. De er merket `(utledet)` der
> usikkerheten er reell. Temamønsteret (del 1–3) er derimot **sterkt belagt**:
> strukturen er påfallende stabil over alle 7 år. Manglende år: 2022 (siste
> avholdte eksamen — ikke i arkivet) og eventuelle kontinuasjonssett.

---

## 1. Eksamensform og utvikling

### Statusverifisering (viktig)

- **Emnet er NEDLAGT.** UiOs emneside (`https://www.uio.no/studier/emner/sv/oekonomi/ECON4130/`)
  viser banneret «This course is discontinued» (verifisert via WebFetch 2026-07-08).
- **Siste avholdte eksamen: høst 2022.** Emnesiden lister undervisning/eksamen
  t.o.m. høst 2021 og høst 2022; ingenting etter det.
- **Ingen direkte erstatningsemne oppgitt.** Emnesiden navngir ikke et etterfølgende
  emne. Beslektede aktive emner ved instituttet er ECON4160 (Econometrics —
  Modelling and Systems Estimation) og ECON4137/liknende metodeemner, men disse
  dekker et annet pensum (systemøkonometri / tidsrekker), ikke ECON4130s
  sannsynlighets- og likelihood-teori. **Boka bygges mot ECON4130s egen, siste
  form** slik den framstår i 2015–2022-settene, som er svært konsistente.
- **Konsekvens for boka:** Fordi emnet er avviklet vil det ikke komme nye sett.
  Arkivet (2015–2021) + det kjente 2022-settet definerer det komplette,
  «frosne» eksamensuniverset. Det gir høy trygghet for at temaprioriteringen
  under er varig — men også et tak på hvor mye ny evidens vi kan skaffe.

### Form

- **Tittel:** ECON4130 – Statistics 2, University of Oslo, Department of Economics.
  Masternivå, 10 studiepoeng, undervist på engelsk. Karakterskala **A–F** (F stryk).
- **Varighet:** **3 timers skoleeksamen** i hele arkivperioden (H2015–H2021).
  Emnesiden angir at siste form var **3-timers digital eksamen i Inspera**.
  Overgangen til Inspera skjedde mot slutten av emnets levetid (2020–2022); de
  eldre settene i arkivet er papir-/PDF-sett med samme oppgavestil.
- **Hjelpemidler: open book.** «All written and printed resources» er tillatt, samt
  kalkulator (fra H2018 spesifiseres godkjente modeller Aurora HC106 / Casio
  FX-85EX; i Inspera-perioden en innebygd digital vitenskapelig kalkulator).
  **Konsekvens:** oppgavene tester **utledning, korrekt forutsetningsbruk og
  tolkning**, ikke pugg. Alle relevante teoremer (mgf for gamma, Cramér–Rao,
  Slutsky, iterert forventning) forutsettes tilgjengelig i studentens papirer, og
  oppgavene ber ofte eksplisitt om å *bruke* et oppgitt resultat.

### Fast todelt struktur

**Hvert sett har nøyaktig to problemer (Problem 1 + Problem 2), hver delt i
seksjoner A–E/F med romertalls-underpunkter (i, ii, iii).** Dette er 100 % stabilt
over alle 7 sett. Vektlegging er ikke alltid tallfestet i teksten, men de to
problemene framstår som omtrent likeverdige.

**Problem 1 er ALLTID ren sannsynlighets- og estimeringsteori** (én eller to
random variables, utled fordeling, moment, estimator, CI, test). Dette er den
mest forutsigbare delen av eksamen.

**Problem 2 kommer i to varianter:**
- **Variant R — anvendt multippel regresjon med Stata-output** (H2015, H2016,
  H2019): dummyvariabler, interaksjonsledd, ceteris paribus-effekter, F-test av
  nøstede modeller, uteladt-variabel-resonnement via iterert forventning.
- **Variant D — videre fordelingsteori + MLE / goodness-of-fit** (H2017, H2018,
  H2020, H2021): navngitt fordeling (Pareto, Weibull, potens-/gammafamilie),
  MLE med Stata-MLE-output eller for hånd, Pearson kji-kvadrat tilpasningstest,
  eksakt CI via kji-kvadrat/gamma.

Fordeling i arkivet: 3 sett Variant R, 4 sett Variant D. **En kandidat må mestre
begge** — man vet ikke på forhånd hvilken Problem 2 gir. Merk at den underliggende
verktøykassen (iterert forventning, MLE, CI, test) er felles; det er *innpakningen*
som skifter.

### Utvikling over tid

- **Svært stabil.** Oppgavetypene i 2021 er gjenkjennelig de samme som i 2015.
- Enkelte «signatur-datasett» går igjen: **Pareto-modellen for norske kvinners
  inntekt (SSB 1998, n = 2361, b = 250 000)** brukes i både H2017 og H2020 — dette
  er tydelig et gjennomgående forelesningseksempel som gjenbrukes på eksamen.
- Overgang papir → Inspera (ca. 2020–2022) endret leveringsform, men ikke
  oppgavetype eller matematisk nivå.

---

## 2. Temafrekvens-tabell

Basert på alle 7 sett (H2015–H2021). Kolonnen **Sett** teller antall av de 7
settene der temaet er en egen, poenggivende deloppgave. **Gjenganger-score**
(0–5) veier frekvens × sentralitet × om det er strukturelt garantert.

| # | Tema (English term) | Sett (av 7) | Gjenganger-score | Kommentar |
|---|---------------------|:-----------:|:----------------:|-----------|
| 1 | **Transformasjon av rv** (finn fordeling/pdf/cdf til funksjon av X; monotone transformer) | 7/7 | **5** | Strukturelt garantert. Y=λX, X=−lnY, Z=100X, R=Y/X, U=X/m, cY (Weibull), Y=bV^{1/d} |
| 2 | **cdf/pdf-egenskaper** (vis gyldig fordeling, skisser graf, kvantilfunksjon) | 7/7 | **5** | Åpner nesten alltid Problem 1 |
| 3 | **Moment method estimator (mme)** | 7/7 | **5** | Fast innslag; ofte sammenliknet med MLE |
| 4 | **Maximum likelihood estimation (MLE)** — utled estimator | 6/7 | **5** | H2019 er «MLE bryter sammen»-varianten (regularitetsbrudd) |
| 5 | **Konfidensintervall** (approx. via Slutsky ELLER eksakt via χ²/ordensstatistikk) | 7/7 | **5** | Både store-utvalgs- og eksakte CI forekommer |
| 6 | **Hypotesetest** (Wald/z-test, test på middelverdi/parameter, p-verdi) | 7/7 | **5** | En form for test i hvert sett |
| 7 | **E[X^r] via gammafunksjon / mgf** | 6/7 | **4** | Standard-triks; gammafunksjon-identiteten Γ(t) gjentas |
| 8 | **Iterert (total) forventning** E(Y)=E(E(Y\|X)) og E(XY)=E(X·E(Y\|X)) | 6/7 | **4** | Grunnverktøy for regresjonsfunksjon og kovarians |
| 9 | **Regresjonsfunksjon E(Y\|x) + homo-/heteroskedastisitet-klassifisering** | 6/7 | **4** | Teoretisk (H2018/20/21) + anvendt (H2015/16/19) |
| 10 | **Korrelasjon / kovarians / kovariansmatrise** | 5/7 | **4** | corr(X,Y), cov-matrise, cov(W+c)=cov(W) |
| 11 | **Konsistens-argument** (for mme/MLE) | 5/7 | **3** | Ofte «why is … consistent?» |
| 12 | **Multippel lineær regresjon m/ Stata-OLS-output** (dummy, interaksjon, ceteris paribus) | 3/7 | **4** | Definerer Variant R; tung når den kommer |
| 13 | **F-test av nøstede modeller / spesifikasjonstest** | 3/7 | **4** | Følger alltid med Variant R |
| 14 | **Pearson kji-kvadrat tilpasningstest** (multinomisk, forventede frekvenser) | 3/7 | **4** | Definerer del av Variant D (H2018/20/21) |
| 15 | **Fisher-informasjon + asymptotisk normalitet av MLE** (√(nI(θ))(θ̂−θ)→N) | 3/7 | **3** | Eksplisitt i H2015/18; brukt implisitt ellers |
| 16 | **Slutsky's lemma** (eksplisitt navngitt og krevd forklart) | 4/7 | **3** | «If you need Slutsky, explain how it is used» går igjen ordrett |
| 17 | **Uteladt variabel / kobling av regresjonskoeffisienter via total forventning** | 3/7 | **3** | β₁ = β₁* + β₂c₁ + β₃d₁-typen; kun Variant R |
| 18 | **Efficiency / minimum-varians (Cramér–Rao)** | 2/7 | **3** | «smallest variance among all unbiased estimators» (H2016/17) |
| 19 | **Bias–variance / MSE-sammenlikning av estimatorer** | 2/7 | **3** | H2020 (unbiased modifisering), H2021 (predictor-MSE) |
| 20 | **Simulering / inverse-transform sampling** | 2/7 | **2** | H2018, H2020 — transformer uniforme/normale trekk til (X,Y) |
| 21 | **Likelihood ratio (LR) test** | 2/7 | **3** | H2017 (eksponentiell vs gamma), H2019 (df-drøfting) |
| 22 | **Navngitte fordelinger som verktøy**: exponential, gamma, Pareto, Weibull, uniform, (bivariat) normal, binomial, χ², multinomisk | 7/7 | **5** | Gamma/eksponentiell er «arbeidshesten»; Pareto og Weibull er signaturmodeller |
| 23 | **Ordensstatistikk** (max/min) som estimator | 1/7 | **2** | H2019 (max som estimator for øvre grense) |
| 24 | **Best lineær prediktor** a+bX + MSE | 1/7 | **2** | H2021 D–E |
| 25 | **Bivariat normalfordeling** (marginal via mgf, betinget = normal) | 2/7 | **3** | H2017 (E), H2018 (vis at (X,Y) IKKE er binormal) |

**Lesning av tabellen:** Score 5-temaene (1–6, 22) er *garantert* på hver eksamen
og bør beherskes feilfritt — de avgjør bestått/ikke bestått. Score 4-temaene er
høyt sannsynlige og gir mesteparten av de resterende poengene. Score 2–3-temaene
differensierer mot A.

---

## 3. Oppgavetype-katalog (oppgavesjangre)

Hver sjanger er et gjenkjennelig «mønster» med fast forventet framgangsmåte.

### A. «Vis at dette er en gyldig fordeling / finn cdf fra pdf»
Verifiser at F er ikke-avtakende, F(−∞)=0, F(∞)=1, høyrekontinuerlig; eller
integrer pdf til cdf. Skisser graf. **Åpner Problem 1 i nær sagt hvert sett.**
(H2015 1A, H2016 1A, H2018 1A, H2019 1A/1B, H2021 1A.)

### B. «Transformer rv — finn fordelingen til g(X)»
Standardgrep: cdf-metoden (P(g(X)≤y) = P(X ≤ g⁻¹(y))), deretter deriver. Vis at
resultatet er en kjent fordeling (typisk exp(1), gamma eller Weibull).
Dette er **den mest gjennomgående enkeltoppgaven** i emnet. (Alle 7 sett.)

### C. «Finn E[X^r] / momenter via gammafunksjon eller mgf»
Bruk den oppgitte identiteten E[V^r]=Γ(α+r)/(λ^r Γ(α)) for gamma, eller mgf. Ofte
et delsteg mot mme eller varians. (H2015, H2016, H2017, H2019, H2020, H2021.)

### D. «Utled mme OG MLE, regn ut begge estimatene»
Sett opp momentligning E(X)=x̄ og løs; sett opp log-likelihood, deriver, løs
likelihoodligningen. Regn tallverdier fra oppgitte summer (Σxᵢ, Σln xᵢ).
Ofte etterfulgt av «why is the mme/MLE consistent?». (H2015, H2016, H2017, H2018,
H2020, H2021.)

### E. «Konstruer et (approksimativt eller eksakt) 95 % CI»
To undervarianter:
- **Approksimativt:** bruk asymptotisk normalitet av MLE + Fisher-info, med
  Slutsky's lemma for å bytte θ med θ̂ i variansen. **Oppgaven ber eksplisitt om
  at du forklarer hvordan Slutsky brukes.** (H2015, H2016, H2018, H2021.)
- **Eksakt:** bygg på en pivot med kjent fordeling — nθ̂/θ ~ χ²ₙ (H2017),
  2λY ~ χ²₂ₙ (H2020), eller Y/θ = maks-ordensstatistikk med kjent fordeling
  (H2019). Transformer sannsynlighetsutsagnet til et intervall.

### F. «Utfør en hypotesetest og konkluder»
Sett opp H₀/H₁, teststørrelse (ofte Wald: (θ̂−θ₀)/SE), regn p-verdi
approksimativt via standardnormal, konkluder på oppgitt signifikansnivå. Enkelte
sett ber om å utnytte et allerede beregnet CI til å svare. (Alle 7 sett, i en form.)

### G. «Pearson kji-kvadrat tilpasningstest» (Variant D)
Grupper data i intervaller, regn forventede frekvenser Eⱼ = n·pⱼ under H₀
(pⱼ fra modellens cdf), teststørrelse Σ(Oⱼ−Eⱼ)²/Eⱼ, sammenlign med χ²-kvantil.
Pass på **frihetsgrader = antall kategorier − 1 − antall estimerte parametere**.
(H2018, H2020, H2021 — inkluderer ofte «fyll inn manglende celle»-delspørsmål.)

### H. «Tolk Stata OLS-output for multippel regresjon» (Variant R)
Les koeffisienter, standardfeil, R², F-verdi. Sett opp ceteris paribus-effekt
(inkl. interaksjonsledd: ∂E(Y|·)/∂x = β₁ + β₄g + β₅a). Estimer betingede
gruppegjennomsnitt ved felles kovariatverdi. (H2015, H2016, H2019.)

### I. «F-test / LR-test av nøstet modell» (spesifikasjonstest)
Test full modell mot redusert modell. F = [(SSR_red − SSR_full)/q] /
[SSR_full/(n−k)], eller LR = 2(ℓ_full − ℓ_red) ~ χ²_q. Oppgaven oppgir ofte
begge modellenes output og ber deg regne differansen. **Hint-boksene forteller at
sensor godtar «gjett kritisk verdi fra nærmeste tabellverdier» når nøyaktig df
mangler i Rice-tabellen** — et konkret vindu inn i forventet praksis. (H2015 F-test
av like varianser, H2016 modell 2 vs 3, H2019 modell 2 vs 1.)

### J. «Iterert forventning / kovarians for betinget konstruert (X,Y)»
Gitt X-fordeling + betinget Y|x, finn E(Y), var(Y), cov(X,Y), corr(X,Y),
regresjonsfunksjon. Bruk E(Y)=E(E(Y|X)) og E(XY)=E(X·E(Y|X)). Klassifiser
homo-/heteroskedastisitet. (H2017, H2018, H2020, H2021.)

### K. «Simuler observasjoner ved inverse-transform»
Gitt uniforme (og/eller normale) trekk, transformer til observasjoner av (X,Y)
via kvantilfunksjonen. Krever at man kjenner kvantilfunksjonen til modellen.
(H2018, H2020.)

### L. «Estimatorsammenlikning: bias, varians, MSE, efficiency»
Vis forventningsrett/skjevhet, regn varians, sammenlign to estimatorer via MSE
(MSE = var + bias²), eller argumenter for minimum-varians via Cramér–Rao.
(H2016, H2017, H2019, H2020, H2021.)

---

## 4. Sensorens krav

> **⚠️ Ingen sensorveiledning finnes i arkivet.** Punktene under er **utledet**
> fra oppgavenes ordlyd og hint-bokser, ikke fra offisiell retting. Behandle som
> velbegrunnede hypoteser, ikke fasit.

### Utledet fra oppgavetekstene (relativt trygt)

- **Begrunn hvert steg — svaret er utledningen, ikke tallet.** Oppgavene sier
  gjennomgående «Show that…», «Explain why…», «Give a reason for your answer».
  Et korrekt sluttall uten mellomregning gir trolig lite. (utledet)
- **Forklar hvordan Slutsky's lemma brukes når du bruker det.** Denne
  formuleringen er ordrett gjentatt i flere sett — sensor vil eksplisitt se at
  kandidaten skjønner at man bytter en ukjent parameter med en konsistent
  estimator i variansuttrykket. (sterkt belagt i oppgavetekst)
- **Sjekk regularitetsbetingelser før du bruker standard MLE-teori.** H2019 er
  helt bygd rundt at MLE *ikke* oppfører seg pent når støtten avhenger av
  parameteren — kandidaten må kunne identifisere når asymptotisk normalitet IKKE
  gjelder. (sterkt belagt)
- **Oppgi og bruk korrekt fordeling under H₀.** Særlig i kji-kvadrat- og
  ADF-liknende sammenhenger: riktig frihetsgrad = kategorier − 1 − estimerte
  parametere. (utledet)
- **Kandidaten forventes å hente teoremer fra vedlegg/egne papirer** (mgf-formler,
  Γ-identiteter, χ²-normaltilnærming). Hint-boksene oppgir dem eksplisitt «that
  you do not have to prove» — poenget er *anvendelse*, ikke reproduksjon. (sterkt belagt)
- **Tolkning teller i regresjonsdelen.** Variant R-oppgavene ber om at kandidaten
  *kommenterer* utskriften og velger «most suitable model … for studying the
  influence of X on Y» — altså statistisk skjønn, ikke bare regning. (utledet)

### Hva som trolig skiller toppkandidatene (utledet)

- Presis behandling av **betinget vs marginal** fordeling (H2017/18/21).
- Å kunne vise at et resultat holder på **flere måter** (oppgavene tilbyr ofte to
  approaches — den som velger elegant og fullfører får trolig uttelling).
- Korrekt **transformasjon av et CI** fra én parameter til en monoton funksjon av
  den (H2019 σ, H2020, H2021 p=P(Y>30)) — et lite, men avslørende ferdighetstegn.

---

## 5. Typiske feil

> Utledet fra oppgavestrukturen og hint-boksene (der oppgaven «advarer» mot en
> felle), ikke fra sensorkommentarer. (utledet gjennomgående)

1. **Bruke feil fordeling under H₀** i kji-kvadrat / test (f.eks. standard normal
   der en χ²- eller DF-fordeling gjelder). Hint-bokser peker mot dette.
2. **Feil frihetsgrader** i tilpasningstest — glemme å trekke fra estimerte
   parametere.
3. **Glemme Jacobi-determinanten** ved transformasjon av kontinuerlig rv (pdf av
   g(X) krever |dg⁻¹/dy|). Sannsynlig vanligste regnefeil i sjanger B.
4. **Anvende standard MLE-asymptotikk der regularitet svikter** (H2019-fella:
   støtte avhengig av parameter → estimatoren er ikke asymptotisk normal).
5. **Ikke forklare Slutsky** når man bytter θ→θ̂ i variansen — trekker fordi
   oppgaven eksplisitt ber om forklaringen.
6. **Forveksle betinget og marginal varians/forventning** (bruke var(Y|x) der
   var(Y)=E(var(Y|X))+var(E(Y|X)) trengs).
7. **Feiltolke ikke-signifikante enkeltkoeffisienter** som «ingen forklaringskraft»
   når den samlede F-testen er signifikant (multikollinearitet) — H2019 tester
   nettopp denne forståelsen eksplisitt.
8. **Feil ceteris paribus-effekt i interaksjonsmodell** — glemme at effekten av X
   avhenger av de andre regressorene (∂/∂x = β₁ + β₄g + β₅a).
9. **Ikke transformere CI-et korrekt** for en monoton funksjon av parameteren
   (bytte endepunkter når funksjonen er avtakende).
10. **Regne p-verdi bare énhalet der testen er tosidig** (eller motsatt).

---

## 6. Symbol- og metodeapparat

### Notasjon brukt i emnet (engelsk, behold i boka)

- `rv` = random variable; `iid` = independent and identically distributed;
  `pdf`, `cdf`, `mgf` = probability density / cumulative distribution / moment
  generating function.
- `mle`/`MLE` = maximum likelihood estimator; `mme` = moment method estimator.
- `CI` = confidence interval; `SE` = standard error; `LR` = likelihood ratio.
- `X ~ exp(λ)`, `Γ(α,λ)` (shape α, scale/rate λ — **merk parametriseringen varierer**;
  emnet bruker mgf M(t)=(λ/(λ−t))^α), `Pareto(b,α)`, `Weibull(b,d)`,
  `N(μ,σ²)`, `χ²_r`, `Bin(n,p)`, multinomisk.
- `Γ(t)` = gammafunksjonen; identiteten E[V^r]=Γ(α+r)/(λ^r Γ(α)) er sentral.

### Må beherskes aktivt (regnes på nesten hver eksamen)

- **cdf↔pdf**: integrasjon/derivasjon, kvantilfunksjon q_p (løs F(q_p)=p).
- **Transformasjonsteknikk**: cdf-metoden + Jacobi for monotone g(X).
- **Gammafunksjon-momenter** og mgf-manipulasjon (utled E, Var, vis sum av
  gammaer er gamma).
- **Iterert forventning**: E(Y)=E(E(Y|X)); Var(Y)=E(Var(Y|X))+Var(E(Y|X));
  E(XY)=E(X·E(Y|X)).
- **MLE-maskineri**: log-likelihood ℓ(θ), score, likelihoodligning; Fisher-info
  I(θ) for én observasjon; asymptotisk √(nI(θ))(θ̂−θ) → N(0,1).
- **mme**: sett teoretisk moment = empirisk moment, løs.
- **CI-konstruksjon**: (a) approksimativt via MLE-normalitet + Slutsky;
  (b) eksakt via pivot (nθ̂/θ~χ²ₙ, 2λY~χ²₂ₙ, ordensstatistikk).
- **Wald-test / z-test**: (θ̂−θ₀)/SE, p-verdi via Φ.
- **Pearson χ²**: Σ(O−E)²/E, forventede frekvenser fra modell-cdf, korrekt df.
- **OLS-tolkning**: koeffisient, SE, t, R², F; ceteris paribus i interaksjonsmodell.
- **F-test / LR-test** av nøstede modeller.

### Må forstås kvalitativt

- **Homo- vs heteroskedastisitet**: klassifiser Var(Y|x) som konstant eller
  x-avhengig, og begrunn.
- **Konsistens, forventningsrett, efficiency, MSE = var + bias²** — begrepene og
  når de gjelder.
- **Regularitetsbetingelser for MLE** (når asymptotisk teori bryter sammen).
- **Bivariat normal**: at betinget normal + normal marginal ⇏ alltid binormal
  (H2018 motbevis).
- **Best lineær prediktor** og hvorfor MSE(â+b̂X) = var(u).

### Skal IKKE bygges tungt på

- Ren tidsrekke-/systemøkonometri (VAR, kointegrasjon) — det hører til ECON4160,
  ikke ECON4130. Ingen spor i arkivet.
- Bayesiansk inferens og bootstrapping nevnes i emnebeskrivelsen, men opptrer
  **ikke** som egne oppgaver i noe av de 7 settene. Ta med kort, men prioriter lavt.
  (verifiser mot 2022-settet hvis det blir tilgjengelig)

---

## 7. Prognose og prioritering

Fordi emnet er **nedlagt** vil ikke pensum endre seg — prioriteringen under er
«frosset» og gjelder for repetisjon mot de eksisterende settene (og et evt.
gjenstående 2022-sett).

### Nivå 1 — må beherskes feilfritt (avgjør bestått)

1. **Transformasjon av rv** (cdf-metoden + Jacobi) — garantert, hvert sett.
2. **cdf/pdf-egenskaper, kvantilfunksjon** — garantert åpning.
3. **mme + MLE-utledning med tallverdier** — garantert.
4. **CI-konstruksjon** (både approx-via-Slutsky og eksakt-via-pivot).
5. **Hypotesetest med p-verdi** (Wald/z).
6. **Iterert forventning + betingede momenter** (E, Var, cov, corr av (X,Y)).

### Nivå 2 — må kunne (gir mesteparten av resten)

7. **Regresjonsfunksjon + homo-/heteroskedastisitet-klassifisering.**
8. **Pearson kji-kvadrat tilpasningstest** (Variant D-sett).
9. **Multippel regresjon m/ Stata-output + ceteris paribus + F-test** (Variant R-sett).
10. **Konsistens/forventningsrett-argumenter.**
11. **E[X^r] via gammafunksjon/mgf.**
12. **Fisher-info + asymptotisk normalitet av MLE.**

### Nivå 3 — bør kjenne til (differensierer mot A)

13. **MSE-/bias–varians-sammenlikning** og efficiency (Cramér–Rao).
14. **LR-test** av nøstede modeller.
15. **Eksakt CI via ordensstatistikk** og gjenkjenning av at MLE kan bryte sammen.
16. **Simulering (inverse-transform).**
17. **Bivariat normal** (marginal via mgf; motbevis for binormalitet).
18. **Transformasjon av CI** for monoton funksjon av parameter.
19. **Best lineær prediktor + MSE.**

### Anbefalt bokstruktur (konsekvens av prognosen)

Fordi Problem 1 alltid er teori og Problem 2 veksler R/D, bør boka ha:
- En **solid teoridel** (sannsynlighet, transformasjon, betingede fordelinger,
  estimering, asymptotikk, testing) som dekker Problem 1 fullt ut.
- **To parallelle anvendelsesdeler**: (R) lineær regresjon m/ Stata-output og
  (D) navngitte fordelinger + goodness-of-fit + MLE-praksis — begge må dekkes
  fordi kandidaten ikke vet hvilken som kommer.
- **Gjennomregnede eksamensoppgaver** basert på alle 7 sett, med vekt på
  utledning og forutsetningsdrøfting (open book ⇒ metoden er poenget).

---

## 8. Anbefalt arketype

**DNA-regnefag.** ECON4130 er et kvantitativt fag (matematisk statistikk) på linje
med ECON2130 Statistikk 1, som allerede er tilordnet `regnefag` i README-oversikten.
Eksamen er utledningstung og open book, med teoremanvendelse og gjennomregning som
kjerne — nøyaktig regnefag-DNAets styrke (teori → gjennomregnet eksempel →
oppgave).

**Lånte trekk fra DNA-drøfting (hybrid-innslag):** Variant R-oppgavene krever
*tolkning og modellvalg* («which model is most suitable»), og flere Problem 1-punkter
ber om kvalitativ begrunnelse (homo-/heteroskedastisitet, «why is … consistent»,
regularitetsbrudd). Boka bør derfor låne drøftings-DNAets krav til begrunnet
resonnement i tolknings- og modellvalgspartiene, men primærarketypen er utvetydig
**regnefag**.

---

## 9. Kildeliste

**Primærkilder (eksamensarkiv, `~/Desktop/Eksamner/UiO/ECON4130/`):**
- ECON4130 Statistics 2 — Ordinær eksamen H2015 (Problem 1: exp/gamma-familie,
  mme/MLE, Fisher-info, CI, test; Problem 2: multippel regresjon m/ dummy+interaksjon,
  Stata, F-test av varianser).
- ECON4130 — Ordinær eksamen H2016 (potensfordeling, MLE/mme, efficiency;
  Problem 2: modell 1/2/3 m/ interaksjon, kovariansmatrise, F-test, modellvalg).
- ECON4130 — Ordinær eksamen H2017 (bivariat normal, χ²-basert eksakt CI;
  Problem 2: Pareto→exp/gamma, MLE Stata-output, Wald + LR-test).
- ECON4130 — Ordinær eksamen H2018 (triangulær fordeling, joint pdf, ikke-binormal,
  simulering; Problem 2: potens-MLE, asymptotikk, Pearson χ² goodness-of-fit, CLT-CI).
- ECON4130 — Ordinær eksamen H2019 (kvantilfunksjon, ordensstatistikk-estimator,
  MLE-sammenbrudd; Problem 2: ANCOVA m/ dummy+interaksjon, F-test, CI via kovariansmatrise).
- ECON4130 — Ordinær eksamen H2020 (uniform+betinget exp, uavhengighet;
  Problem 2: Pareto MLE, MSE-modifisering, Pareto-trunkering, Pearson χ² (2 grupper),
  eksakt CI via 2λY~χ²₂ₙ).
- ECON4130 — Ordinær eksamen H2021 (exp+betinget gamma, best lineær prediktor, MSE;
  Problem 2: binomisk CI, Weibull, Pearson χ², MLE m/ Stata-output, CI-transformasjon).

**Sekundærkilder:**
- UiO emnebeskrivelse ECON4130 (`https://www.uio.no/studier/emner/sv/oekonomi/ECON4130/`),
  verifisert 2026-07-08 — status «discontinued», siste eksamen H2022, 3-timers
  Inspera open-book, pensumoversikt.
- Fagbeskrivelse-sammendrag i `fagbeskrivelser-samlet 2.md` (omskrevet UiO-tekst).
- Forbilder for struktur/stil: `econ2130/EKSAMENSANALYSE.md` (Statistikk 1),
  `stk1110/EKSAMENSANALYSE.md`, `econ3150/EKSAMENSANALYSE.md` (Introductory Econometrics).

**Evidensmangler (vær ærlig i boka):**
- **Ingen sensorveiledninger/fasit** i arkivet → del 4–5 er utledet, ikke verifisert.
- **2022-settet mangler** (siste avholdte eksamen) → temaprognosen kan ikke
  krysssjekkes mot allersiste form. Merk usikre detaljer med `(verifiser)`.
- Bare 7 sett totalt (lite arkiv) → lavfrekvente temaer (score 2) kan være
  under- eller overrepresentert ved tilfeldighet.
