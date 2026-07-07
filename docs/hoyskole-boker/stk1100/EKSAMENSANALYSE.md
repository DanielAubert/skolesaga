# Eksamensanalyse: STK1100 – Sannsynlighetsregning og statistisk modellering (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på hele det tilgjengelige
> arkivet av **avsluttende skoleeksamener 2015–2024** (10 oppgavesett) med
> tilhørende **offisielle løsningsforslag 2018–2024** (7 sett lest grundig,
> oppgaver + fasit). Oppgavesettene 2015–2017 er lest grundig på oppgavenivå
> (uten løsningsforslag i arkivet). **Alt innhold er omskrevet med egne ord** —
> ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer.
> Formler og notasjon er standard faglig materiale uten verkshøyde. Analysen er
> kvantitativ der kildene tillater det (n = 10 sett, denominator gjennomgående 10).
>
> **Viktig avgrensning:** STK1100 er UiOs *modellerings*-emne. Arkivet er de
> avsluttende eksamenene (teller 2/3); midtveiseksamen (teller 1/3, flervalg)
> ligger ikke i arkivet, men refereres i ett sett (V2016, O2). Emnet deler
> formelsamling og til dels pensum med oppfølgeremnet **STK1110** (statistisk
> inferens), og grensen mellom de to forklarer den viktigste egenarten:
> **STK1100-eksamen inneholder ingen hypotesetesting** (se del 1 og del 8 om
> UiO/NTNU-forskjellene mot søsteremnet TMA4245).

---

## 1. Eksamensform og utvikling

### Grunnform (stabil over hele perioden)
- **Skriftlig skoleeksamen, 4 timer.** Klokkeslett 09:00–13:00 i alle sett
  2016–2024; V2015 var ettermiddag (14:30–18:30). Én unntaksperiode: V2020 var
  **digital hjemmeeksamen** (korona) — se under.
- **Hjelpemidler:** godkjent kalkulator + **formelsamling for STK1100/STK1110**.
  Enkelte sett oppgir formelsamling kun for STK1100 (V2024) og legger da inn
  nødvendige hjelperesultater direkte i oppgaveteksten (normalkvantiltabell,
  gammaintegralet ∫₀^∞ x^{a−1}e^{−x/b}dx = b^a Γ(a)). **Eksamen tester bruk og
  utledning, ikke pugging av formler.**
- **Karakter A–F.** Emnet vurderes samlet med midtveiseksamen (1/3) +
  avsluttende (2/3).
- **Fast oppgaveantall: 3–4 store fortellingsoppgaver.** Tidlige sett
  (V2015–V2017) og V2021 har **3 oppgaver**; V2018–V2020 og V2022–V2024 har
  **4 oppgaver**. Hver oppgave er en kjede med 3–7 deloppgaver (a, b, c, …) i
  samme kontekst. Ingen kortsvars-/flervalgsdel på selve skoleeksamen (den ligger
  i midtveiseksamen).

### To små strukturbrudd
| Periode | Særtrekk |
|---|---|
| **V2020 (korona)** | Digital hjemmeeksamen. Her kom **kjørbar Python-kode** inn i fasiten for fullt (numpy/scipy: simulering av estimatorer, parametrisk bootstrap, innlesing av datasett). Studenten forventes å kunne lese/skrive kode. |
| **V2024** | Formelsamling begrenset til STK1100; oppgavesettet legger selv ved normalkvantiltabell og gammaintegral. Ellers ordinær 4-oppgavers skoleeksamen. |

### Den typiske firedelingen
Settene er påfallende stabile i hva de fire (eller tre) oppgavene dekker:
1. **Sannsynlighet / diskret modell** — enten Bayes/total sannsynlighet, eller
   en diskret fordeling (Poisson, geometrisk) med forventning/varians (ofte via MGF).
2. **Kontinuerlig fordeling / simultantetthet** — en egendefinert eller «navngitt»
   tetthet: marginaler, uavhengighetssjekk, kumulativ fordeling, median,
   forventning/varians, ofte en transformasjon.
3. **Estimering + konfidensintervall** — kjernen: ML-estimator (eller
   moment-/annen estimator) → forventningsretthet → varians → transformasjon til
   gamma/kjikvadrat → **eksakt pivotal-KI** (+ CLT-basert tilnærmet KI som
   alternativ) → ofte bootstrap for standardfeil.
4. **Transformasjon / simultanfordeling / (ny) regresjon** — Jacobi-transformasjon
   av (X,Y), binormalfordeling, eller (fra 2022) enkel lineær regresjon.

### Utviklingstrekk (viktigst for boken)
1. **Estimering + eksakt pivotal-KI er ryggraden** og har vært det uendret siden
   V2015. Den store estimeringsoppgaven (oppgave 3) er i praksis identisk i
   oppbygning fra år til år: fordeling → estimator → egenskaper → gamma/χ²-pivot → KI.
2. **Simulering/bootstrap er et UiO-særtrekk med lang historie:** ikke-parametrisk
   bootstrap allerede i V2015 og V2016, parametrisk bootstrap i V2019/V2021, og
   full Python-kode fra V2020. Dette er *ikke* et nytt fenomen slik det er ved
   NTNU — det har vært fast inventar i et tiår.
3. **Regresjon er en nykommer og fortsatt liten:** enkel lineær regresjon dukker
   opp først i V2022 (via binormalfordelingen) og V2024 (eksplisitt minste
   kvadrater, to modeller). Elementær — ingen residualplott, ingen
   prediksjonsintervaller.
4. **«Navngitt eksotisk fordeling med hjelperesultater»** er en stabil sjanger:
   Laplace (V2016, V2024), Pareto (V2017), Rayleigh (V2019), lognormal (V2020),
   Weibull (V2021), binormal (V2022). Alltid håndterbar med standardteknikkene;
   oppgaven gir selv MGF-en, momentformelen eller integralet man trenger.
5. **Hypotesetesting glimrer med sitt fravær** i hele perioden — det ligger i
   STK1110.

---

## 2. Temafrekvens-tabell

Celleverdi = antall av de 10 settene (2015–2024) der temaet forekommer som minst
én deloppgave. Registreringen bygger på grundig lesing av oppgavetekst
(alle 10) og løsningsforslag (2018–2024). **Gjenganger-score = andel av 10 sett.**

| Tema | Sett med temaet | **Gjenganger-score** |
|---|---|---|
| Forventning/varians/standardfeil, regneregler for lineærkombinasjoner | 2015–2024 (alle) | **10/10 = 100 %** |
| Konfidensintervall (pivotal + CLT-tilnærmet + bootstrap-SE) | 2015–2024 (alle) | **10/10 = 100 %** |
| Punktestimering: ML/moment/annen estimator, forventningsretthet, varians | 2015,17,18,19,20,21,22,23,24 | **9/10 = 90 %** |
| Transformasjon av variable (CDF-metode, Jacobi, MGF-identifikasjon) | nesten alle | **9/10 = 90 %** |
| Median/kvantil ved å løse F(m) = p | 2015,16,17,18,19,20,21,23,24 | **9/10 = 90 %** |
| Simultanfordeling: marginaler, uavhengighetssjekk, betinget tetthet | 2016,17,18,19,20,22,23,24 | **8/10 = 80 %** |
| Normalfordeling: standardisering, egenskaper, binormal/lognormal | 2016,18,20,22,23,24 (+ std.norm. som verktøy nesten overalt) | **~8/10 = 80 %** |
| Gammafordeling / kjikvadrat (inkl. sum → gamma, χ²ₙ = gamma(n/2,2)) | 2015,17,18,19,21,22,23 | **7/10 = 70 %** |
| **Eksakt pivotal-KI via gamma/χ²** (kjerne-signaturen) | 2015,17,18,19,21,22,23 | **7/10 = 70 %** |
| Betinget sannsynlighet / total sannsynlighet / Bayes | 2016,17,18,20,21,22,23 | **7/10 = 70 %** |
| Momentgenererende funksjon (utlede E/V; identifisere sum-fordeling) | 2015,16,18,21,22,23 (+ normal-MGF 2020) | **6–7/10 ≈ 65 %** |
| «Navngitt eksotisk» kontinuerlig fordeling (Laplace/Pareto/Rayleigh/lognormal/Weibull/binormal) | 2016,17,19,20,21,24 | **6/10 = 60 %** |
| Simulering / bootstrap / Python (numpy) | 2015,16,19,20,21,24 | **6/10 = 60 %** |
| Eksponensialfordeling (eksplisitt, inkl. minneløshet) | 2015,16,19,21,23 | **5/10 = 50 %** |
| Sentralgrenseteoremet (eksplisitt begrunnet, til tilnærmet KI) | 2020,22,23,24 | **4/10 = 40 %** |
| Poisson / Poisson-prosess | 2019,22,24 | **3/10 = 30 %** |
| Binomisk fordeling | 2016,20,24 | **3/10 = 30 %** |
| Betinget forventning / prediksjon / MSE-minimering | 2015,17,22 | **3/10 = 30 %** |
| Kovarians / korrelasjon | 2015,22 | **2/10 = 20 %** |
| Enkel lineær regresjon (minste kvadrater, bias–varians) | 2022,24 | **2/10 = 20 %** — men begge de to siste ordinære settene |
| Geometrisk / negativ binomisk fordeling | 2021 | **1/10 = 10 %** |
| Geometrisk sannsynlighet (areal-/integral-argument, f.eks. Buffons nål) | 2018 | **1/10 = 10 %** |
| **Hypotesetesting** | ingen | **0/10 = 0 %** |
| **Kombinatorikk** (uordnede/ordnede utvalg) | ingen | **0/10 = 0 %** |
| **Ordningsvariable** (min/maks, serie/parallell) | ingen | **0/10 = 0 %** |
| **Deskriptiv/grafisk statistikk** (boksplott, histogram, Q-Q) | ingen (kun tolkning av simulerte fordelinger) | **0/10 = 0 %** |

**Viktigste funn:**
- **Kjernen er én lang kjede, gjentatt hvert år:** *fordeling → estimator →
  forventningsretthet/varians → transformasjon til gamma/χ² → eksakt pivotal-KI
  (→ CLT-tilnærmet KI som alternativ, → bootstrap for SE).* Boken må bygges rundt
  denne kjeden, ikke rundt isolerte teknikker.
- **Transformasjonsapparatet bærer emnet.** CDF-metoden, Jacobi-formelen for
  (X,Y) → (U,V), og MGF-identifikasjon av summer/gjennomsnitt er de mest brukte
  teknikkene overhodet (~9/10). Kroneksemplene: (X/θ)² → gamma, ((X−µ)/σ)² → χ²₁,
  Σ standardiserte kvadrater → χ²ₙ, 2X/µ → eksponensial, U = X+Y via Jacobi.
- **Gamma/kjikvadrat er STK1100s «kjæledegge».** Identiteten χ²ₙ = gamma(n/2, 2),
  «sum av uavhengige gamma med felles skalaparameter er gamma(Σα, β)», og
  E(V^r) = β^r Γ(α+r)/Γ(α) går igjen som byggeklosser for både pivotaler og
  forventningsretthet.
- **Simulering/bootstrap må ha eget kapittel** — det er en 60 %-gjenganger med
  røtter helt tilbake til 2015, og full Python siden 2020.
- **Fravær som definerer emnet:** ingen hypotesetesting, ingen kombinatorikk,
  ingen ordningsvariable, ingen klassisk deskriptiv/grafisk statistikk. Dette er
  den skarpeste kontrasten til NTNUs TMA4245 (se del 8).

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav og typisk plassering.

### A. Bayes-/total-sannsynlighetsoppgaven
- **Krav:** Definere hendelser eksplisitt med egne symboler, sette opp loven om
  total sannsynlighet P(B) = ΣP(B|Aᵢ)P(Aᵢ) og Bayes' formel, tolke svaret. Ofte
  flere runder på samme oppsett (oppdatere sannsynligheter over generasjoner/tester).
- **Frekvens:** 7/10. Nesten alltid oppgave 1.
- **Kontekster (omskrevet):** antistoff-/diagnosetester med sensitivitet og
  spesifisitet (V2020, V2021), genetikk/recessivt gen (V2017), eneggede vs.
  toeggede tvillinger (V2018), jukseterning valgt tilfeldig (V2022), bakterier
  med mutasjon (V2023).
- **Omskrevet eksempel:** «En hurtigtest har sensitivitet 94 % og spesifisitet
  99,8 %, og 1 % av befolkningen har antistoffer. Finn sannsynligheten for
  positiv test, og for antistoffer gitt positiv test.»

### B. Diskret-fordelingsoppgaven (Poisson/geometrisk/binomisk)
- **Krav:** Oversette en situasjon til riktig diskret modell; regne punkt-, hale-
  og betingede sannsynligheter (grepet P(X≥1) = 1 − P(X=0) og uavhengighet →
  multipliser); ofte utlede E og V **via momentgenererende funksjon**; vise at en
  sum er samme fordeling (Poisson → Poisson) via MGF; konstruere en estimator og
  finne standardfeilen.
- **Frekvens:** Poisson 3/10 (drikkevanns-E.coli V2024, seldyrtelling V2022,
  fødsler som Poisson-prosess V2019); geometrisk/negativ binomisk 1/10 (V2021);
  binomisk 3/10 (flervalg V2016, falske negative V2020, alternativ til Poisson V2024).
- **Omskrevet eksempel:** «Antall bakterier i v₀ liter vann er Poisson-fordelt
  med rate λ per liter. Finn E og V, sannsynligheten for minst én bakterie, og
  hvor stor prøve som trengs for at denne sannsynligheten skal overstige 0,9975.»

### C. Egendefinert/«eksotisk» kontinuerlig fordeling
- **Krav:** Gitt en tetthet (evt. med oppgitt MGF/momentformel): bestem
  normeringskonstant, utled F(x), finn median ved å løse F(m) = ½, regn P-er og
  betingede sannsynligheter, beregn E[X], E[X²], Var[X] ved integrasjon (ofte via
  gammaintegralet og Γ-funksjonen). La deg **ikke** skremme av ukjent
  fordelingsnavn — oppgaven gir hjelperesultatene.
- **Frekvens:** 6/10 som «navngitt» fordeling; egendefinerte tettheter i tillegg.
  Laplace (V2016, V2024), Pareto/inntekt (V2017), Rayleigh (V2019), lognormal/
  alkoholforbruk (V2020), Weibull/levetid (V2021).
- **Omskrevet eksempel:** «Inntekten er Pareto-fordelt med kjent minsteinntekt k
  og formparameter θ. Utled den kumulative fordelingen, vis at medianen er
  k·2^{1/θ}, og at 2θ·ln(X/k) er gammafordelt.»

### D. Simultantetthet-oppgaven (kontinuerlig)
- **Krav:** Fra en simultantetthet f(x,y): finn normeringskonstant; utled
  marginaltettheter ved å integrere ut den andre variabelen; **avgjør
  uavhengighet ved å sjekke om f(x,y) = fₓ(x)·f_Y(y) for ALLE (x,y)** — inkludert
  der begge er 0 (fasit skriver dette ut eksplisitt); regn P(område) via
  dobbeltintegral (**tegn integrasjonsområdet** for å sette grensene korrekt);
  finn betinget tetthet f_{Y|X=x}(y) og betinget forventning; av og til en
  geometrisk sannsynlighet (P(X²+Y² ≤ …)).
- **Frekvens:** 8/10. Nesten alltid oppgave 2 (eller 4).
- **Omskrevet eksempel:** «(X,Y) har tetthet proporsjonal med x(x+y) på et
  rektangel. Finn P(Y ≥ X), begge marginaltetthetene, og avgjør med begrunnelse
  om X og Y er uavhengige.»

### E. Transformasjonsoppgaven
- **Krav:** Tre teknikker som må sitte:
  (i) **CDF-metoden** — F_Y(y) = P(g(X) ≤ y), deriver for å få tettheten;
  (ii) **Jacobi-metoden** for (X,Y) → (U,V) — invers transformasjon +
  Jacobi-determinant, gir simultantetthet, integrer ut for marginal;
  (iii) **MGF-metoden** — M_{ΣX}(t) = ΠM_X(t), gjenkjenn resultatfordelingen.
  Kroneksemplene: (X−µ)²/σ² → χ²₁ = gamma(½,2); (X/θ)² → gamma(1,2); 2X/µ →
  eksponensial; (X/β)^α → eksponensial (Weibull); U = X+Y, V = X/(X+Y) via Jacobi.
- **Frekvens:** ~9/10, stabilt. Nesten alltid broen til pivotalen i sjanger G.
- **Omskrevet eksempel:** «La X være standardnormal og Y = X². Vis ved
  CDF-metoden at Y er gammafordelt med formparameter ½ og skalaparameter 2.»

### F. Momentgenererende funksjon-oppgaven
- **Krav:** Utlede M_X(t) ved integrasjon (**husk konvergenskravet på t**);
  finne E(X) = M′(0), E(X²) = M″(0) → V(X); for en sum av uavhengige variable
  multiplisere MGF-ene og **identifisere resultatfordelingen** (Poisson-sum →
  Poisson, eksponensial-sum → gamma, gjennomsnitt av eksponensiale → gamma(n, µ/n)).
  Av og til brukes kumulantgenererende funksjon R(t) = ln M(t) som snarvei.
- **Frekvens:** 6–7/10.
- **Omskrevet eksempel:** «Vis at gammafordelingens MGF er (1 − βt)^{−α} for
  t < 1/β, og bruk den til å finne forventning og varians.»

### G. Estimerings- og pivotal-KI-oppgaven (kjerneoppgaven)
- **Krav:** Den store oppgaven i praktisk talt hvert sett. Kjeden:
  1. **Estimator:** skriv opp likelihood for n uavhengige observasjoner, ta
     logaritme, deriver, sett = 0, løs (ML). Alternativt momentestimator (avstem
     E(X) mot X̄) eller en annen foreslått estimator.
  2. **Forventningsretthet:** vis E(θ̂) = θ (ofte via Γ-funksjon-integraler eller
     E(V^r)-formelen). Der estimatoren er **skjev**, kvantifiser skjevheten
     (Weibull-β̂: faktoren Γ(n+1/α)/(n^{1/α}Γ(n)) ≠ 1; √σ̂² skjev for σ selv om
     σ̂² er forventningsrett for σ² — V2018) og foreslå en forventningsrett korreksjon.
  3. **Varians/standardfeil:** utled V(θ̂), oppgi estimert standardfeil.
  4. **Transformasjon til kjent fordeling:** vis at en passende pivot er
     gamma/χ²-fordelt (2nµ̂/µ ~ χ²_{2n}; nσ̂²/σ² ~ χ²ₙ; n(β̂/β)^α ~ gamma(n,1);
     2θ·n/θ̂ ~ gamma(n,2)).
  5. **Eksakt konfidensintervall:** sett kvantiler rundt pivoten, løs ulikheten
     for parameteren. Resultatet er ofte **asymmetrisk** — det er et trekk, ikke en feil.
  6. **Alternativt CLT-KI:** når n er stor, bruk at θ̂ er tilnærmet normalfordelt
     ((θ̂−θ)/(θ/√n) ~ N(0,1)) og gi et tilnærmet intervall.
- **Frekvens:** 9/10 (estimering) med pivotal-KI i 7/10. **Emnets viktigste ferdighet.**
- **Omskrevet eksempel:** «Levetidene er eksponensialfordelte med forventning µ.
  Utled ML-estimatoren, vis at 2nµ̂/µ er kjikvadratfordelt med 2n frihetsgrader,
  og konstruer et eksakt 95 %-konfidensintervall for µ.»

### H. Eksakt-pivot vs. Wald/CLT-KI (metode-sammenligningen)
- **Krav:** Konstruere BÅDE det eksakte pivotal-intervallet og det CLT-baserte
  Wald-intervallet, og **sammenligne dekningen**. Fasiten viser eksplisitt at det
  eksakte har bedre dekning ved lav/moderat n (V2024: for n = 10 dekket eksakt
  pivot 95,9 % mot Wald 91,1 %; for n = 100 er begge ~94 %). Simuleringsstudien i
  oppgaven leverer dekningstallene; studenten skal tolke dem.
- **Frekvens:** eksplisitt i V2024; implisitt (eksakt + CLT som to alternativer) i
  flere sett (V2016, V2023).
- **Omskrevet eksempel:** «To konfidensintervaller ble beregnet 1000 ganger i en
  simuleringsstudie. Det eksakte dekket sann σ 959 ganger, Wald-intervallet 911.
  Forklar hvorfor, og hvilket intervall du foretrekker.»

### I. Simulering-/bootstrap-/Python-oppgaven
- **Krav:** Tre undertyper:
  (1) **Simuleringsmetode** — beskriv eller kod inversjonsmetoden X = F⁻¹(U) for
  å trekke fra en fordeling (V2016 Laplace, V2019 Rayleigh);
  (2) **Bootstrap for standardfeil** — beskriv algoritmen: for b = 1…B, trekk et
  nytt utvalg (ikke-parametrisk fra data, eller parametrisk fra tilpasset
  fordeling), regn estimatoren på nytt, og estimer SE som empirisk standardavvik
  av de B verdiene (V2015, V2016 ikke-parametrisk; V2019, V2021 parametrisk);
  (3) **Full Python-kode** — les/skriv kjørbar numpy/scipy: `stats.norm.rvs`,
  `np.mean`, `np.var(x, ddof=1)`, løkke over B, sammenligning av estimatorer
  (V2020).
- **Frekvens:** 6/10, jevnt fordelt over hele perioden. Krever korrekt bruk av
  `ddof=1` (fasiten V2020 påpeker at mange studenter glemmer dette).
- **Omskrevet eksempel:** «Beskriv hvordan du med parametrisk bootstrap kan
  estimere standardfeilen til β̂, og skriv Python-koden som gjennomfører B = 10000
  gjentak.»

### J. Simultanfordeling via Jacobi-transformasjon
- **Krav:** Fra (X,Y) med kjent simultantetthet, finn simultantettheten til
  (U,V) = (g₁(X,Y), g₂(X,Y)): invers transformasjon, Jacobi-determinant,
  f_{UV}(u,v) = f_{XY}(…)·|J|; deretter marginaltettheten til U ved integrasjon
  (tegn området!). Typiske par: U = X+Y & V = X (V2020), U = X+Y & V = X/(X+Y) (V2019).
- **Frekvens:** ~3/10 som ren Jacobi-oppgave; inngår i sjanger D/E ellers.
- **Omskrevet eksempel:** «X og Y er uavhengige. Sett U = X+Y og V = X/(X+Y).
  Finn simultantettheten til (U,V) ved Jacobi-formelen.»

### K. Regresjonsoppgaven (ny, V2022/V2024)
- **Krav:** Modellen Yᵢ = f(xᵢ) + εᵢ med uavhengige feil, E(εᵢ) = 0, V(εᵢ) = σ².
  Utlede minste kvadraters estimator ved å minimere Σ(yᵢ − ŷᵢ)² (deriver, sett = 0);
  finne E og V av estimatoren under gitt modell; konstruere KI via θ̂ ± z_{α/2}·SE
  og velge modell ut fra om intervallet inneholder 0; drøfte **bias–varians-
  avveiningen** (modell uten konstantledd kan gi lavere varians mot litt
  forventningsskjevhet: V[γ̂₁] < V[β̂₁]). I V2022 kommer regresjonen ut av
  **binormalfordelingen** (den betingede fordelingen [Y|X=x] ER en lineær
  regresjonsmodell). **Ingen residualplott, ingen prediksjonsintervaller** —
  vesentlig enklere enn NTNU-varianten.
- **Frekvens:** 2/10, men begge de to siste ordinære settene → sannsynlig
  fast innslag framover.
- **Omskrevet eksempel:** «Utled minste kvadraters estimator for helningen i
  modellen Y = γx (uten konstantledd), finn forventning og varians, og forklar
  når denne kan foretrekkes selv om den fulle modellen Y = β₀ + β₁x er riktig.»

### L. Betinget forventning / prediksjon / MSE
- **Krav:** Vise at forventningen minimerer forventet kvadratisk avvik
  E[(θ − X)²]; bruke betinget forventning E(Y|X=x₀) som beste prediksjon når X,Y
  er korrelerte; regne E(Y|X=x), V(Y|X=x). Kobles til binormal/regresjon.
- **Frekvens:** 3/10 (V2015, V2017, V2022).
- **Omskrevet eksempel:** «Vis at θ = µ minimerer E[(θ − X)²], og at det beste
  gjettet på Y etter å ha observert X = x₀ er E(Y|X=x₀) = ρx₀.»

---

## 4. Sensorens krav (fra løsningsforslagene)

Løsningsforslagene er skrevet av faglærer og viser hva en fullgod besvarelse skal
inneholde. STK1100-fasiten er **konsis og utledningsdrevet**: vis regnekjeden
kompakt, ikke lange verbale forklaringer.

1. **Definer variable og hendelser eksplisitt før du regner.** Fasit starter
   konsekvent med «La A være hendelsen …» / «La X = antall …, da er X ~ …» med
   parametre. Uten definert modell regnes svaret som ufullstendig.
2. **Uavhengighet SKAL bevises ved faktorisering, ikke intuisjon.** For
   simultantettheter viser fasiten f(x,y) = fₓ(x)·f_Y(y) for **alle** (x,y),
   inkludert der begge sider er 0. Ett moteksempel (én celle/ett område) er nok
   til å motbevise uavhengighet.
3. **Tegn integrasjonsområdet** for dobbeltintegral — fasiten sier det uttrykkelig
   («tegn figur over området for å se integrasjonsgrensene»). Feil grenser er den
   vanligste tabben her.
4. **MGF-utledninger skal ha konvergenskravet med** (M_X(t) definert bare for
   t < 1/β e.l.), og E/V hentes som M′(0), M″(0).
5. **ML-utledninger skal ha alle trinn:** L(θ) → ℓ(θ) = log L → derivér → løs.
   (STK1100-fasiten er noe mildere enn NTNU på å eksplisitt verifisere at det
   kritiske punktet er et maksimum — men vis hele regnekjeden.)
6. **Forventningsretthet og varians vises fullstendig**, ofte via Γ-funksjon-
   integraler eller E(V^r)-formelen. Skjevhet skal **kvantifiseres** og korrigeres
   når oppgaven ber om en forventningsrett estimator. Skill mellom **estimator**
   (stor bokstav, stokastisk) og **estimat** (tall).
7. **Eksakt pivotal-KI foretrekkes framfor Wald** når standardavviket avhenger av
   parameteren. Fasiten dokumenterer at eksakt pivot har bedre dekning ved
   lav/moderat n. CLT-/Wald-intervallet godtas som **alternativ**, men skal ikke
   presenteres som det beste for lite utvalg. Et **asymmetrisk** eksakt intervall
   er riktig, ikke en feil.
8. **Sentralgrenseteoremet nevnes eksplisitt** når normaltilnærming brukes:
   gjennomsnitt/estimator er tilnærmet normalfordelt for stor n → begrunner det
   tilnærmede KI-et.
9. **Transformasjoner skal gjennomføres med metode:** CDF-metode (deriver til
   slutt), Jacobi (invers + determinant), eller MGF-identifikasjon — ikke
   gjettede tettheter.
10. **Bootstrap-svar skal beskrive algoritmen presist** (trekk B utvalg, regn
    estimatoren på nytt, SE = empirisk SD). Python-kode skal være korrekt og
    kjørbar (numpy-idiomatisk, `ddof=1` der n−1 kreves).
11. **Tallsvar oppgis med enheter/tolkning.** Fasiten regner integraler med
    mellomledd, viser standardiseringer, og angir hvilke kvantiler/persentiler som
    brukes (χ²_{60,0.975} = 40,48 osv.).

**Karakterskiller (utledet av oppgavestrukturen):** Åpningsdelene (Bayes,
standardisering, enkle P-er, marginaltettheter, median) definerer bestått-nivået.
Midtsjiktet mestrer ML-utledningen, forventningsretthet/varians og et standard
KI. Toppsjiktet skiller seg på: **eksakt pivotal-utledninger og
gamma/χ²-identifikasjonene**, transformasjonsbevisene (Jacobi, MGF),
skjevhetskorreksjon via Γ-funksjonen, og simulering/bootstrap med korrekt kode.

---

## 5. Typiske feil

Feilmønstre som løsningsforslagene adresserer eller bygger feller rundt:

1. **Påstå uavhengighet uten å sjekke faktoriseringen** f(x,y) = fₓ(x)·f_Y(y) —
   eller sjekke den bare der tettheten er positiv og glemme null-området.
2. **Feil grenser i dobbeltintegral** fordi man ikke har tegnet
   integrasjonsområdet (særlig ved P(Y ≥ X) og ved Jacobi-marginalisering).
3. **Hoppe rett til Wald/CLT-KI** uten å vurdere det eksakte pivotal-intervallet
   (dårligere dekning ved lav n), eller tro at et asymmetrisk eksakt intervall er feil.
4. **Blande tetthet og sannsynlighet:** tro at P(X = x) = f(x) for kontinuerlig X,
   eller at P(Y = y) > 0.
5. **Glemme konvergenskravet på t** i MGF-utledninger.
6. **Reparametriserings-forvirring:** eksponensialfordelingen opptrer BÅDE med
   rate λ (f = λe^{−λt}) og med forventning µ = 1/λ (f = (1/µ)e^{−x/µ}) i ulike
   sett — bland dem ikke, og les hvilken parametrisering oppgaven bruker.
7. **Skjevhets-slurv:** anta at enhver ML-estimator er forventningsrett;
   forveksle at σ̂² kan være forventningsrett for σ² samtidig som √σ̂² er skjev for
   σ (fordi E(√·) ≠ √E(·)); glemme Γ-faktoren i Weibull-/gamma-estimatorer.
8. **ML-slurv:** derivere uten å ta logaritme først, ikke løse fullstendig, eller
   forveksle estimator (stor bokstav, stokastisk) og estimat (tall).
9. **Glemme kovariansleddet** i V(aX + bY) når X og Y er korrelerte — eller ta det
   med når de er uavhengige (binormal-oppgaven tester nettopp koblingen
   ρ = 0 ⇔ uavhengighet).
10. **Transformasjon uten metode:** gjette tettheten til Y = g(X) i stedet for å
    gå via CDF-metoden/Jacobi, eller glemme |J| (Jacobi-determinantens
    absoluttverdi) i den bivariate transformasjonen.
11. **Bootstrap/Python-feil:** glemme `ddof=1` (deler på n i stedet for n−1),
    eller beskrive bootstrap uten å si at man trekker med tilbakelegging (ikke-
    parametrisk) / fra tilpasset fordeling (parametrisk).
12. **Median-algebra:** feil når man løser F(m) = ½ (særlig andregradsligninger,
    logaritmer og potenser i Weibull/Pareto/Rayleigh).
13. **Feil frihetsgrader i pivoten:** χ²_{2n} for eksponensial-pivoten mot χ²ₙ for
    normal-med-kjent-µ-pivoten — les hvilken gamma/χ² som gjelder.

---

## 6. Formel- og notasjonsapparat

### Hva som ligger i formelsamlingen (og derfor IKKE skal pugges)
«Formelsamling for STK1100/STK1110» er alltid tillatt og inneholder oversikt over
standardfordelingene (tetthet/punktsannsynlighet, E, Var, MGF), gammafunksjonens
egenskaper, kvantiltabeller for standardnormal (Φ, z_α), t, kjikvadrat og gamma,
samt standard KI-formler. Enkelte sett legger i tillegg inn nødvendige
hjelperesultater direkte (E(V^r)-formelen, gammaintegralet, MGF-en til en gitt
fordeling). **Konsekvens for boken:** treningen skal ligge på å *velge* riktig
fordeling/pivot, *bruke* tabellene korrekt (riktige persentiler og
frihetsgrader), og *utlede* det som ikke står der (ML, pivotaler,
transformasjoner, bootstrap) — ikke på memorering.

### Må beherskes aktivt (utledes/regnes uten oppskrift)

**1. Sannsynlighetsgrunnlag:** betinget sannsynlighet P(A|B) = P(A∩B)/P(B); lov om
total sannsynlighet; Bayes' formel; uavhengighetsdefinisjonen (og for tettheter:
f(x,y) = fₓ(x)·f_Y(y) for alle (x,y)). **Merk:** ren kombinatorikk kreves i praksis
ikke på STK1100-eksamen.

**2. Fordelingskatalogen med bruksområde:**
- *Diskret:* binomisk(n,p); Poisson(λ)/Poisson-prosess(λt); geometrisk;
  negativ binomisk.
- *Kontinuerlig:* uniform; **eksponensial** (både rate-λ og forventning-µ
  parametrisering; minneløshet P(X>s+t | X>t) = P(X>s)); **gamma(α,β)** med skala
  β og forventning αβ; **kjikvadrat = gamma(n/2, 2)**; normal og standardnormal
  (Φ); lognormal; og «oppskriftsfordelinger» gitt i oppgaven (Laplace, Pareto,
  Rayleigh, Weibull, binormal) håndtert med standardteknikkene.

**3. Moment-regnereglene:** E(aX + bY) = aE(X) + bE(Y);
V(aX + bY) = a²V(X) + b²V(Y) + 2ab·Cov(X,Y); Cov/Corr-definisjoner og skalering;
E[g(X)] = ∫g·f; for simultanfordelinger E[g(X,Y)] = ∬g·f.

**4. Momentgenererende funksjoner:**
- Gamma: M(t) = (1 − βt)^{−α}, t < 1/β. Poisson: M(t) = e^{λ(e^t − 1)}.
  Normal: M(t) = e^{µt + σ²t²/2}. Geometrisk: e^t p / (1 − (1−p)e^t).
- E(X) = M′(0), E(X²) = M″(0), V = E(X²) − E(X)². Snarvei: kumulantgenererende
  R(t) = ln M(t), E = R′(0), V = R″(0).
- Sum av uavhengige: M_{ΣX}(t) = ΠM_X(t) → identifiser fordelingen (Poisson-sum →
  Poisson(Σλ); eksponensial-sum → gamma; gjennomsnitt av eksponensiale →
  gamma(n, µ/n)).

**5. Transformasjonsteknikkene:**
- **CDF-metoden:** F_Y(y) = P(g(X) ≤ y), deriver.
- **Jacobi (bivariat):** invers X = X(U,V), Y = Y(U,V);
  f_{UV}(u,v) = f_{XY}(…)·|∂(x,y)/∂(u,v)|; integrer ut for marginal.
- **Inversjonsmetoden for simulering:** X = F⁻¹(U), U ~ uniform(0,1).
- Nøkkelidentiteter: (X−µ)²/σ² ~ χ²₁ = gamma(½,2); Σ(standardiserte)² ~ χ²ₙ;
  2X/µ ~ eksponensial; (X/β)^α ~ eksponensial (Weibull); «sum av uavhengige
  gamma med felles skala er gamma(Σα, β)».

**6. Gamma-/momentverktøy:**
- Γ(½) = √π, Γ(1) = 1, Γ(α+1) = αΓ(α), Γ(a) = (a−1)! for heltall a.
- Gammaintegralet: ∫₀^∞ x^{a−1}e^{−x/b}dx = b^a Γ(a).
- E(V^r) = β^r Γ(α+r)/Γ(α) for V ~ gamma(α,β), r > −α (brukes til skjevhet av
  potens-/rot-estimatorer).

**7. Estimering og konfidensintervall (kjerneteknikken):**
- **ML:** L(θ) = Πf(xᵢ; θ) → ℓ(θ) → ℓ′(θ) = 0 → θ̂. **Moment:** avstem E(X) mot X̄.
- **Forventningsretthet:** E(θ̂) = θ; kvantifiser og korriger skjevhet.
  **Varians/standardfeil:** V(θ̂); estimert SE.
- **Eksakt pivotal-KI:** finn W(X, θ) med kjent gamma/χ²-fordeling uavhengig av θ,
  sett persentiler rundt, løs for θ. Standardpivotaler: 2nµ̂/µ ~ χ²_{2n}
  (eksponensial, mean µ); nσ̂²/σ² ~ χ²ₙ (normal, kjent µ); n(β̂/β)^α ~ gamma(n,1)
  (Weibull); 2nθ/θ̂ ~ gamma(n,2) (Pareto).
- **CLT-tilnærmet KI:** (θ̂ − θ)/(σ/√n) ≈ N(0,1) → θ̂ ± z_{α/2}·SE.
- **Bootstrap-SE:** empirisk SD av B gjenberegnede estimater (parametrisk fra
  tilpasset fordeling, eller ikke-parametrisk fra data med tilbakelegging).

**8. Betinget forventning / prediksjon:** E(Y|X=x), V(Y|X=x); forventningen
minimerer E[(θ−X)²]; binormal ⇒ E(Y|X=x) = µ₂ + ρ(σ₂/σ₁)(x−µ₁),
V(Y|X=x) = σ₂²(1−ρ²), som ER en lineær regresjonsmodell.

**9. Regresjonsapparatet (elementært):** β̂₁ = Σ(xᵢ−x̄)(Yᵢ−Ȳ)/Σ(xᵢ−x̄)²,
β̂₀ = Ȳ − β̂₁x̄; uten konstantledd γ̂₁ = ΣxᵢYᵢ/Σxᵢ²; E og V av estimatoren under
gitt modell; KI via θ̂ ± z_{α/2}·SE; bias–varians-avveining V[γ̂₁] < V[β̂₁].

**10. numpy/scipy-idiomer:** `stats.norm.rvs(µ, σ, size=n)`,
`np.random.uniform`, `np.mean`, `np.var(x, ddof=1)`, `np.std(x, ddof=1)`,
`np.exp`, `np.log`, løkke `for _ in range(B)` for bootstrap/simulering,
indikator-gjennomsnitt som sannsynlighetsestimat.

### Notasjonskonvensjoner i settene
- Store bokstaver for stokastiske variable, små for observasjoner; hatt for
  estimatorer (θ̂, µ̂, σ̂, β̂); X̄ og S² for utvalgsgjennomsnitt/-varians;
  X ~ N(µ, σ²) med **varians** som annet argument; Φ for standardnormal CDF;
  kvantilnotasjon z_α, χ²_{ν,α} (øvre haleareal).
- **Gamma(α, β) med β = skalaparameter** (forventning αβ). Kjikvadrat med n
  frihetsgrader = gamma(n/2, 2).
- **Eksponensialfordelingen parametriseres inkonsekvent** fra sett til sett — noen
  ganger med rate λ, andre ganger med forventning µ (og Weibull med skala β).
  Oppgaven definerer parametriseringen hver gang; boken bør vise begge og venne
  studenten til å lese oppgavens egen definisjon.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer 60–70 % av poengene)
1. **Estimerings-kjeden ML → forventningsretthet → varians → gamma/χ²-pivot →
   eksakt KI (+ CLT-KI som alternativ)** som én sammenhengende ferdighet. Den
   store oppgaven i praktisk talt hvert sett. Dette er emnets ryggrad.
2. **Simultantetthet komplett:** normeringskonstant, marginaler,
   uavhengighetssjekk ved faktorisering, betinget tetthet, P(område) via
   dobbeltintegral (tegn området!). ~80 % frekvens.
3. **Transformasjonsteknikkene:** CDF-metoden, Jacobi for (X,Y)→(U,V),
   MGF-identifikasjon. ~90 %, broen til alle pivotalene.
4. **Gamma/kjikvadrat-maskineriet:** χ²ₙ = gamma(n/2,2), sum av uavhengige gamma
   med felles skala, E(V^r)-formelen, Γ-funksjonens regler.
5. **Betinget sannsynlighet / total sannsynlighet / Bayes** med
   hendelsesdefinisjoner (diagnosetest-oppsettet).
6. **Momentgenererende funksjoner:** utlede E/V (med konvergenskrav) og
   identifisere sum-/gjennomsnittsfordelinger.
7. **Median/kvantil** ved å løse F(m) = ½.

### Nivå 2 — må kunne (avgjør C mot B)
8. **Simulering og bootstrap** (parametrisk og ikke-parametrisk) med **kjørbar
   Python/numpy-kode** — 60 %-gjenganger siden 2015, full kode siden 2020. Boken
   må ha et fullverdig simuleringskapittel med kodetrening.
9. **«Navngitt eksotisk» kontinuerlig fordeling** (Laplace, Pareto, Rayleigh,
   lognormal, Weibull, binormal) håndtert med standardverktøyene — treningen er å
   ikke la ukjent navn skremme.
10. **Diskret modellvalg:** Poisson/Poisson-prosess (rateskalering,
    forutsetninger), binomisk, geometrisk/negativ binomisk.
11. **Estimator-sammenligning** (forventningsretthet, varians, skjevhetskorreksjon
    via Γ-funksjon) og **eksakt-pivot vs. Wald-dekning**.
12. **Sentralgrenseteoremet** presist formulert og brukt til tilnærmet KI.

### Nivå 3 — bør kjenne til (topper karakteren, differensierer A)
13. **Enkel lineær regresjon** (minste kvadrater med/uten konstantledd, E/V av
    estimator, bias–varians-avveining) — ny gjenganger 2022/2024, sannsynlig fast
    innslag framover. NB: elementær, uten residualplott/prediksjonsintervall.
14. **Binormalfordelingen** (ρ = 0 ⇔ uavhengighet; betinget fordeling = lineær
    regresjon).
15. **Betinget forventning / prediksjon / MSE-minimering.**
16. **Kovarians/korrelasjon** i lineærkombinasjoner.

### Prognose for neste ordinære eksamen
4 timer (09–13), godkjent kalkulator + formelsamling, skriftlig skoleeksamen med
**4 oppgaver** som til sammen dekker:
- (i) én **sannsynlighetsoppgave** — Bayes/total sannsynlighet, eller en diskret
  fordeling (Poisson/geometrisk) med MGF-utledet E/V og en estimator;
- (ii) én **simultantetthet-oppgave** — marginaler, uavhengighetssjekk,
  median/CDF, med en transformasjon;
- (iii) én **estimerings-oppgave** (den tunge) — ML/annen estimator →
  forventningsretthet/varians → gamma/χ²-pivot → eksakt KI (+ CLT-KI), på en
  «navngitt eksotisk» fordeling;
- (iv) én oppgave med **transformasjon/Jacobi, regresjon eller binormal**, og/eller
  et **simulerings-/bootstrap-/Python-innslag**.
Sannsynlige gjengangere på rotasjon: eksakt-pivot-vs-Wald-sammenligning med
simulert dekning, parametrisk bootstrap for standardfeil, skjevhetskorreksjon via
Γ-funksjonen. **Ikke forvent hypotesetesting, kombinatorikk eller ordningsvariable.**

---

## 8. UiO/NTNU-forskjeller (STK1100 vs. TMA4245)

STK1100 og NTNUs TMA4245/TMA4240 dekker overlappende sannsynlighetsteori, men er
**ikke utbyttbare** på eksamensnivå. De skarpeste forskjellene:

| Trekk | STK1100 (UiO) | TMA4245 (NTNU) |
|---|---|---|
| **Hypotesetesting** | **Fraværende (0/10)** — ligger i STK1110 | Kjerneferdighet (~82 %), full test-rituale med styrke |
| **Kombinatorikk** | **Fraværende (0/10)** | ~39 %, tilbake for fullt 2024–26 |
| **Ordningsvariable (min/maks)** | **Fraværende** | ~22 %, serie-/parallellsystemer |
| **Deskriptiv/grafisk statistikk** | Fraværende | ~35 %, boksplott/histogram/Q-Q |
| **Regresjon** | Liten og elementær (2/10, kun 2022/2024; ingen residualplott/PI) | ~59 %, med residualdiagnostikk, prediksjonsintervall, modell uten konstantledd |
| **Transformasjon/MGF/Jacobi** | **Tungt vektet (~90 %)** — bærebjelke | ~59 %, mest som bro til KI |
| **Simultan kontinuerlig tetthet** | **~80 %**, egen stor oppgave nesten hvert år | ~49 % |
| **«Eksotiske» kontinuerlige fordelinger** | **~60 %**, egen sjanger (Laplace/Pareto/Rayleigh/lognormal/Weibull/binormal) | Forekommer, men mer som variasjon |
| **Simulering/bootstrap/Python** | **~60 %, fast siden 2015**; full Python siden 2020 | Nytt fenomen fra des. 2023 (~90 % av nyeste sett) |
| **Eksakt pivotal-KI (gamma/χ²)** | **~70 %, signaturferdighet** | Forekommer (eksponensial-pivotalen), men deler plass med t-/z-KI |
| **Eksamensformat** | 3–4 store oppgaver, ingen kortsvars-/flervalgsdel (den ligger i midtveis) | Veksler mellom papir og Inspera-hybrid med kortsvar/flervalg |
| **Inferens-kjedens endepunkt** | Ender ved **konfidensintervall** (ingen test/styrke) | Fortsetter til **hypotesetest + styrke + dimensjonering** |

**Konsekvens for læreboken:** En STK1100-bok skal vektlegge det *modellerings- og
sannsynlighetsteoretiske* fundamentet — transformasjoner, MGF, simultanfordelinger,
gamma/χ²-maskineriet og eksakt pivotal-KI — pluss simulering/bootstrap med Python.
Den skal **ikke** bruke plass på hypotesetesting, kombinatorikk, ordningsvariable
eller residualdiagnostikk; det hører hjemme i STK1110-boken. NTNU-analysen
(TMA4245) er et godt strukturforbilde, men temavektene må vris kraftig: opp på
transformasjon/MGF/simultan/eksotiske fordelinger/simulering, og helt bort fra
testing/kombinatorikk/ordningsvariable.

---

## 9. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/STK1100/`.
Arkivet har tre deler: oppgavesett i rot (`stk1100_ÅÅÅÅ.pdf`, 2015–2024),
oppgavesett under `eksamen/` (`STK1100-VÅÅÅÅ.pdf`, 2018–2024, **identiske** med
rot-filene for samme år), og løsningsforslag under `fasit/`
(`STK1100-VÅÅÅÅ-fasit.pdf` / `-losning.pdf`, 2018–2024).

**Lest grundig — oppgaver og løsningsforslag (7 sett):**
- V2024, V2023, V2022, V2021, V2020, V2019, V2018 (oppgavesett + offisielt løsningsforslag).

**Lest grundig — oppgaver uten løsningsforslag i arkivet (3 sett):**
- V2017, V2016, V2015 (kun oppgavesett; temaregistrering på oppgavenivå).

**Unike eksamenssett totalt:** 10 (2015–2024). **Løsningsforslag:** 7 (2018–2024).

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside for STK1100 (scratchpad:
`fagbeskrivelse-stk1100.md`). Emnet er verifisert aktivt (undervises hver vår, per juli 2026).

**Strukturforbilde:** `docs/hoyskole-boker/tma4245/EKSAMENSANALYSE.md` (NTNUs
søsteremne) — samme 8-delers struktur, men med de betydelige UiO/NTNU-forskjellene
dokumentert i del 8.

**Merknader om kildene:**
- Rot-filene `stk1100_2018…2024.pdf` er byte-for-byte samme innhold som
  `eksamen/STK1100-V2018…2024.pdf` (verifisert ved lik linjelengde). Analysen
  behandler dem som ett sett per år.
- V2020 var digital hjemmeeksamen (korona) og er den eneste med full kjørbar
  Python-kode i fasiten; den er atypisk i format, men tematisk representativ.
- V2015 hadde ettermiddagstid (14:30–18:30); alle øvrige 09:00–13:00.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller
  fasitformuleringer er gjengitt ordrett. Formler og notasjon er standard faglig
  innhold uten verkshøyde.
</content>
</invoke>
