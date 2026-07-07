# Eksamensanalyse: STK1110 – Statistiske metoder og dataanalyse (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på hele det
> tilgjengelige arkivet av **avsluttende skoleeksamener 2004–2025** (22
> oppgavesett) med tilhørende **offisielle løsningsforslag 2007–2025** (19 sett).
> Løsningsforslagene for **2015–2025 er lest grundig** (oppgaver + fasit), de for
> **2007–2014 er skumlest** sammen med oppgavesettene, og eldre oppgavesett uten
> løsningsforslag (2004–2006) er lest på oppgavenivå. Oppgavesettet for **2004
> forelå kun som skannet bilde** (ikke maskinlesbart) og er registrert med lav
> vekt. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av
> oppgavetekster eller fasitformuleringer. Formler og notasjon er standard faglig
> materiale uten verkshøyde. Analysen er kvantitativ der kildene tillater det
> (denominator = 22 sett der ikke annet er nevnt).
>
> **Viktig avgrensning — forholdet til STK1100.** STK1110 er UiOs *inferens*-emne
> og oppfølgeren til STK1100 (*sannsynlighet og modellering*). De to deler
> formelsamling og til dels notasjon, men er komplementære: STK1100 stopper ved
> konfidensintervall og har **null hypotesetesting**; STK1110 begynner der og
> gjør **hypotesetesting og lineær regresjon til bærebjelker**. STK1110 forutsetter
> STK1100s sannsynlighetsapparat (fordelinger, transformasjoner, gamma/χ²) og
> **re-tester det nesten aldri som selvstendig oppgave** — simultantettheter,
> MGF/Jacobi og Bayes-regelen som ren sannsynlighetsregning er så godt som borte.
> Progresjonen er dokumentert i del 8.

---

## 1. Eksamensform og utvikling

### Grunnform
- **Skriftlig skoleeksamen** med **godkjent kalkulator + formelsamling for
  STK1100/STK1110** som eneste hjelpemidler. Eldre sett (2018 og bakover) oppga
  gjerne «Formelsamling for STK1100 og STK1110» og hadde en **normalfordelings-/
  t-tabell som vedlegg**; nyere sett skriver «Formelsamling for STK1110» og
  «Vedlegg: Ingen» fordi kvantiltabellene ligger i formelsamlingen. **Eksamen
  tester bruk og utledning, ikke pugging** — men i motsetning til STK1100 legger
  STK1110 nødvendige kvantiler (z, t, χ², F) ofte inn i selve oppgaveteksten.
- **Karakter A–F.** Etter gjeldende ordning teller avsluttende eksamen 100 %, og
  **to obligatoriske innleveringer** må være godkjent for adgang.
- **Emnet het tidligere «Statistiske metoder og dataanalyse 1»** (2005–2008-settene
  bærer «1»-suffikset). *Merk kildekuriositet:* løsningsforslaget for 2015 har
  «STK1100» i topptekst, men innholdet (ML for gammaformet tetthet, hatmatrise-
  residualer, logistisk regresjon, to-utvalgsandeler, bootstrap) er utvetydig
  STK1110-inferens — antatt trykkfeil.

### Varighet og tidspunkt (utviklingstrekk)
| Periode | Varighet | Typisk klokkeslett | Antall oppgaver |
|---|---|---|---|
| 2005–2008 | **3 timer** | 09–12 eller 15.30–18.30 | 3–4 |
| 2011–2019 | **4 timer** | 14.30–18.30 eller 09–13 | 3–4 |
| 2020–2025 | **4 timer** | 09–13 (2020, 2022) eller 15–19 (2024, 2025) | **2–3** |

Overgangen fra 3 til 4 timer skjedde rundt 2009–2013. Oppgavesettet er
**kompakt** (typisk 4 sider) og har blitt noe mindre oppdelt de aller siste årene
(2024 hadde bare 2 oppgaver, 2025 tre). Hver oppgave er en **kjede med 4–7
punktdelte deloppgaver (a, b, c, …)** i samme kontekst, der tidlige svar gjenbrukes.

### Den faste tredelingen (stabil over hele perioden)
Nesten hvert sett dekker de samme tre søylene, én per storoppgave:
1. **Estimeringsteori** — momentestimator vs. ML, forventningsretthet, varians,
   Fisher-informasjon, MLE-asymptotikk, av og til Bayes/konjugering.
2. **Hypotesetesting + konfidensintervall** — t-test (ett/to utvalg, parvis),
   utledning av signifikansnivå, P-verdi, CI↔test-dualitet, styrke/dimensjonering,
   andelstest, F-test for varianser.
3. **Lineær regresjon** — enkel og/eller multippel: minste kvadrater, E/V av
   estimator, t-test for stigningstall, KI, prediksjonsintervall, residual-
   diagnostikk, R²/justert R², tolkning av **R-utskrift**.

### Utviklingstrekk (viktigst for boken)
1. **Regresjon er en bærebjelke, ikke en nykommer** (motsatt av STK1100). Enkel
   og/eller multippel lineær regresjon er med i praktisk talt hvert sett siden 2006
   og fyller alltid minst én hel storoppgave.
2. **R er verktøyet — ikke Python.** Regresjonsoppgavene presenterer **R-utskrift**
   (`lm`-sammendrag: Estimate, Std. Error, t value, Pr(>|t|), Residual standard
   error, Multiple/Adjusted R², F-statistic) som studenten skal **lese og tolke**.
   Dette er en skarp kontrast til STK1100, der simulering/bootstrap kjøres i
   Python/numpy. STK1110 forventer *ingen* kodeskriving.
3. **Fisher-informasjon og MLE-asymptotikk har fått mer plass** fra ca. 2016:
   `I(θ) = −E[∂²log f/∂θ²]`, `Var(θ̂) ≈ 1/(nI(θ))`, Wald-intervall og eksplisitt
   Cramér–Rao-referanse (2025).
4. **Bayesiansk inferens dukket opp sent** (2022 Weibull→gamma, 2025 Poisson→gamma)
   og ser ut til å være et nytt, roterende innslag.
5. **ANOVA (enveis variansanalyse)** kom inn i 2020–2021, koblet til
   dummy-regresjon.
6. **Ikke-parametrikk er lett men til stede:** bootstrap-persentilintervall (2015)
   og rangtest/Wilcoxon som robust alternativ til t-testen (2023).

---

## 2. Temafrekvens-tabell

Celleverdi = andel av de 22 settene (2004–2025) der temaet forekommer som minst
én deloppgave. Registreringen bygger på grundig lesing av løsningsforslag
2015–2025, skumlesing av 2007–2014 og oppgavelesing av 2004–2006. 2004 er
lavkonfidens (skannet). **Gjenganger-score = andel av 22.**

| Tema | **Gjenganger-score** |
|---|---|
| **Konfidensintervall** (t/z/χ²/Wald/pivot) | **≈21/22 = 95 %** |
| **Punktestimering** (ML og/eller moment) | **≈21/22 = 95 %** |
| **Enkel lineær regresjon** (LS, inferens for stigningstall) | **≈20/22 = 91 %** |
| **Hypotesetesting** (H₀/Hₐ, testobservator, nivå/P-verdi, konklusjon) | **≈20/22 = 91 %** |
| Forventningsretthet + varians av en estimator | **≈20/22 = 91 %** |
| **ML-utledning** (L→ℓ→score→løs→bekreft maks) | **≈18/22 = 82 %** |
| P-verdi (definere verbalt + beregne/avgrense fra tabell) | **≈14/22 = 64 %** |
| Tolkning av **R-utskrift** (lm-sammendrag) | **≈15/22 = 68 %** |
| Momentestimator (E(X)=X̄) | **≈11/22 = 50 %** |
| **Multippel regresjon** (flere prediktorer, konfundering) | **≈11/22 = 50 %** |
| Fisher-informasjon + MLE tilnærmet normalfordelt (`1/(nI(θ))`) | **≈10/22 = 45 %** |
| Residualdiagnostikk (residual-vs-fitted, scale-location, QQ) | **≈9/22 = 41 %** |
| R² / justert R² + modellvalg | **≈8/22 = 36 %** |
| To-utvalgs t-test / pooled varians `Sₚ` | **≈8/22 = 36 %** |
| Minste kvadraters **utledning** (normalligninger, matriseform) | **≈8/22 = 36 %** |
| Utledning av `E(β̂₁)`, `V(β̂₁)=σ²/Σ(xᵢ−x̄)²` | **≈6/22 = 27 %** |
| CI↔test-dualitet (eksplisitt) | **≈6/22 = 27 %** |
| Andelstest / to-utvalgs andeler (z, pooled `p̂`) | **≈5/22 = 23 %** |
| Poisson-modell / Poisson-test | **≈5/22 = 23 %** |
| Styrke / type II-feil / utvalgsstørrelse (`n`) | **≈5/22 = 23 %** |
| Eksakt/transformasjons-pivot (2X/θ→χ², χ²-basert CI) | **≈4/22 = 18 %** |
| Prediksjonsintervall for ny observasjon | **≈4/22 = 18 %** |
| Konsistens av estimator (Tsjebysjeff) | **≈4/22 = 18 %** |
| Kvadratledd / annengradsmodell i regresjon | **≈3/22 = 14 %** |
| KI for forventet respons `µ_Y|x` | **≈2–3/22 = 12 %** |
| Bayes / konjugerte fordelinger (Poisson→gamma, Weibull→gamma) | **≈2/22 = 9 %** |
| Enveis variansanalyse (ANOVA / F-test på grupper) | **≈2/22 = 9 %** |
| F-test for variansforhold (`S₁²/S₂² ∼ F`) | **≈2/22 = 9 %** |
| Ikke-parametrisk (bootstrap-persentil, rang/Wilcoxon) | **≈2/22 = 9 %** |
| Regresjon uten konstantledd (`Y=βx`) | **≈2/22 = 9 %** |
| Parvise data (differanser `Dᵢ`) | **≈2/22 = 9 %** |
| Likelihood-ratio-test (LRT, `Δ=2{ℓ_full−ℓ_H₀}∼χ²`) | **≈1–2/22 = 7 %** |
| Logistisk regresjon | **≈1/22 = 5 %** |
| Cramér–Rao eksplisitt nevnt | **≈1–2/22 = 7 %** |
| **Simultantetthet / marginal / MGF / Jacobi som egen oppgave** | **≈0/22 (ligger i STK1100)** |
| **Ren kombinatorikk / ordningsvariable** | **≈0/22 (ligger i STK1100)** |
| **Python/numpy-koding** | **0/22 (STK1110 bruker R-utskrift, ikke koding)** |

**Viktigste funn:**
- **Tre likestilte søyler bærer emnet:** estimeringsteori, hypotesetesting+KI, og
  regresjon opptrer hver i ~90 % av settene. Ingen enkeltferdighet dominerer slik
  pivotal-KI gjør i STK1100 — bredden er poenget.
- **Regresjon er tyngre og mer komplett enn i STK1100:** her kommer residual-
  diagnostikk, prediksjonsintervall, multippel regresjon, R²/justert R² og
  R-utskrift-tolkning inn — alt sammen fraværende eller elementært i STK1100.
- **ML-kjeden er kjernen i estimeringssøylen:** `L→ℓ→score→løs→bekreft maks`
  etterfulgt av forventningsretthet/varians og (fra 2016) Fisher-info→Wald-CI.
- **Hypotesetestens rituale er fast** (se del 3G): utled signifikansnivået fra
  `P(forkast H₀|H₀)`, definer P-verdien verbalt, koble til KI.
- **Fravær som definerer emnet:** ingen ren sannsynlighetsregning (simultan-
  tettheter, MGF, Jacobi, kombinatorikk, ordningsvariable) — det er STK1100s
  domene og forutsettes kjent.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med krav, foretrukket fasitmetode og plassering.

### A. Momentestimator vs. ML-estimator
- **Krav:** *Momentestimator* — sett første teoretiske moment `E(X)` lik empirisk
  `X̄` og løs for parameteren (H2005, H2015, H2019, H2020, H2021, H2024, H2025). Der
  `E(Xᵢ)=g(θ)` er ikke-triviell (Rayleigh `θ√(π/2)`, Weibull `βΓ(1+1/α)`) gir dette
  et eksplisitt uttrykk. *ML* — den faste kjeden `L(θ)=∏f(xᵢ;θ) → ℓ(θ)=log L →
  s(θ)=ℓ'(θ) → løs s(θ̂)=0`, og **bekreft maksimum** med `ℓ''(θ̂)<0` (fasiten gjør
  dette eksplisitt: H2015, H2022, H2023, H2024, H2025). Ofte skal du vise at
  moment- og ML-estimator sammenfaller (Poisson: begge = `X̄`, H2005/H2017/H2020).
- **Frekvens:** ML ~82 %, moment ~50 %. Nesten alltid Oppgave 1.
- **Omskrevet eksempel:** «Observasjonene er Poisson-fordelte med rate λ. Vis at
  `X̄` er både moment- og ML-estimator, at den er forventningsrett, og finn variansen.»

### B. Forventningsretthet, varians og estimator-sammenligning
- **Krav:** Vis `E(θ̂)=θ`; ved skjevhet, kvantifiser og foreslå korreksjon. Utled
  `V(θ̂)`. Ofte skal to estimatorer **sammenlignes på varians** (den med minst
  varians foretrekkes) — momentestimator vs. ML (H2019, H2021 Weibull), eller to
  ad hoc-estimatorer (H2012, H2014). Konsistens vises av og til via Tsjebysjeff
  (`V(θ̂)→0`, H2005, H2006, H2018).
- **Frekvens:** ~91 % (forventningsretthet/varians), sammenligning ~30 %.
- **Omskrevet eksempel:** «To forventningsrette estimatorer for β er gitt. Regn ut
  begge varianser og begrunn hvilken du foretrekker.»

### C. Fisher-informasjon og MLE-fordeling
- **Krav:** Forventet informasjon i én observasjon `I(θ)=−E[∂²log f/∂θ²]`; for hele
  utvalget `Iₙ(θ)=nI(θ)`. I store utvalg er MLE **tilnærmet normalfordelt** med
  forventning `θ` og varians **`1/(nI(θ))`** (H2016, H2018, H2019, H2020, H2022,
  H2024, H2025). Kobles til **Cramér–Raos nedre grense** (H2025) og til
  **invariansprinsippet** `ψ̂=g(θ̂)` for MLE av en transformert parameter (H2022).
- **Frekvens:** ~45 %, stigende siden 2016.
- **Omskrevet eksempel:** «Finn Fisher-informasjonen `I(β)` i én observasjon, og
  angi den tilnærmede fordelingen til ML-estimatoren for stor n.»

### D. Konfidensintervall
- **Krav:** Flere varianter, og fasiten signaliserer hvilken tydelig:
  (i) **t-intervall** ved ukjent σ og normale data: `X̄ ± t_{α/2,n−1}·S/√n`
      (H2017, H2020, H2021, H2022) — det klart hyppigste.
  (ii) **Wald-intervall** for en MLE med normaltilnærming: `θ̂ ± 1.96·se(θ̂)`
      (H2015, H2016, H2024, H2025). Der `se(θ̂)` selv avhenger av parameteren, gir
      fasiten også en **asymmetrisk pivot-form** `[θ̂/(1+z/√n), θ̂/(1−z/√n)]` og for
      enkelte år et **eksakt** intervall via `θ̂/θ ∼ χ²/(2n)` (H2015, H2016) — det
      asymmetriske er et *trekk, ikke en feil*.
  (iii) **Two-sample / differanse-CI** med pooled `Sₚ` (H2005, H2007, H2013, H2023,
      H2025) og **andels-CI** (H2012, H2015).
  (iv) **χ²-intervall for varians / F-intervall for variansforhold** (H2016).
- **Frekvens:** ~95 %. Nesten alltid koblet til en test via dualitet.
- **Omskrevet eksempel:** «Konstruer et 95 % konfidensintervall for µ når σ er
  ukjent, og forklar hvorfor du bruker t-fordelingen med n−1 frihetsgrader.»

### E. Hypotesetest-oppgaven (full pakke)
- **Krav:** Fasitens faste rituale: (1) formuler `H₀/Hₐ` og **begrunn retningen**
  (ensidig vs. tosidig); (2) definer testobservator og **oppgi fordelingen under
  `H₀`** (z, t med riktige frihetsgrader, F, χ²); (3) **utled at nivået blir α** ved
  å regne `P(forkast H₀|H₀ sann)` (fasiten skriver denne utledningen ut i detalj:
  H2019, H2021, H2022, H2025); (4) tallfest og sammenlign med kvantil/forkastnings-
  område; (5) **konkluder i ord i kontekst**. **P-verdien** defineres verbalt korrekt
  («sannsynligheten under `H₀` for et minst like ekstremt utfall») og leses fra
  tabell (H2019, H2021, H2022). **CI↔test-dualitet** brukes eksplisitt: sjekk om `θ₀`
  ligger i det tosidige intervallet (H2013, H2017, H2018, H2024).
- **Frekvens:** ~91 %. Test-typene: ett-utvalgs t (hyppigst), to-utvalgs t/pooled,
  parvis t (H2021), andels-z (H2011, H2012, H2015, H2018), Poisson-test (H2005,
  H2012, H2014, H2025), F-test for varianser (H2016, H2023), ANOVA-F (H2020, H2021),
  LRT (H2016), rangtest (H2023).
- **Omskrevet eksempel:** «Formuler hypotesene, utled at testen får nivå 5 %, regn
  ut testobservatoren, og konkluder om behandlingen har effekt.»

### F. Styrke, type II-feil og dimensjonering
- **Krav:** `β(µ₀) = P(feil av type II | µ=µ₀) = 1 − Φ(−z_α + (grense−µ₀)/(σ/√n))`;
  løs for `n` og **rund opp** (H2019: n≥9). Ved Poisson brukes normaltilnærming til
  å beregne tilnærmet styrke (H2005, H2012).
- **Frekvens:** ~23 %.
- **Omskrevet eksempel:** «Hvor mange prøver må tas for at sannsynligheten for å
  oppdage en overskridelse skal være minst 0,90?»

### G. To-utvalg og parvise data
- **Krav:** To-utvalgs t-test med **pooled varians** `Sₚ²=[(m−1)S₁²+(n−1)S₂²]/(m+n−2)`
  og `Ȳ₁−Ȳ₂ ± t_{α/2,m+n−2}·Sₚ√(1/m+1/n)` (H2005, H2007, H2013, H2014, H2023, H2025).
  **Parvise data** reduseres til differansene `Dᵢ` og behandles som ett utvalg
  (H2021). **To-utvalgs andeler:** z-test med pooled `p̂=(x₁+x₂)/(n₁+n₂)` under `H₀`
  (H2012, H2015). Fasiten viser gjerne at **samme to-utvalgssituasjon kan skrives
  som enkel regresjon** med dummy-koding (`x=±0.5`), der `Sₚ=σ̂` (H2025).
- **Frekvens:** to-utvalg ~36 %, parvis ~9 %, andeler ~23 %.
- **Omskrevet eksempel:** «Sammenlign forventet måling ved de to strendene med en
  to-utvalgs t-test på 1 %-nivå, og angi et 99 % konfidensintervall for differansen.»

### H. Enkel lineær regresjon
- **Krav:** Utled **minste kvadraters estimator** ved å minimere `Σ(yᵢ−ŷᵢ)²`
  (ekvivalent med ML under normalfeil — vises eksplisitt, H2011, H2015, H2017); vis
  `E(β̂₁)=β₁` og `V(β̂₁)=σ²/Σ(xᵢ−x̄)²` (H2017, H2024). **Test av stigningstall:**
  `T=(β̂₁−β₁⁰)/se(β̂₁) ∼ t_{n−2}` (teller normal, `(n−2)S²/σ²∼χ²_{n−2}`, uavhengige →
  t), les t-verdi/P-verdi fra R-utskrift (H2011, H2015, H2023, H2024). KI for `β₁`:
  `β̂₁ ± t_{α/2,n−2}·se`. **Tolk koeffisientene i kontekst** og advar mot
  ekstrapolering til x=0 (H2018, H2020, H2024). For enkel regresjon: `R²` =
  kvadratet av korrelasjonen mellom x og y (H2018, H2024).
- **Frekvens:** ~91 %. Alltid en hel storoppgave, oftest med R-utskrift.
- **Omskrevet eksempel:** «Tolk `β̂₀` og `β̂₁`, konstruer et 95 % KI for stignings-
  tallet, og avgjør om `β₁=0,25` kan forkastes.»

### I. Multippel regresjon
- **Krav:** Legg til forklaringsvariabler; skriv modellen på matriseform
  `Y=Xβ+ε`, `β̂=(XᵀX)⁻¹XᵀY` og forklar entydighetskravet (full rang, H2024). Sammenlign
  **`R²` og justert `R²`** — bruk justert `R²` for modellvalg siden `R²` alltid øker
  (H2013, H2015, H2018, H2024, H2025). Forklar **konfundering**: hvorfor en
  koeffisient endrer seg (eller ikke, ved balansert/ortogonalt design) når en
  variabel legges til (H2018, H2019, H2020, H2024). Prediksjon og KI for forventet
  respons med kovariansledd i variansen (H2019). Ved sentrerte, ukorrelerte
  prediktorer blir `XᵀX` diagonal og `R²=r₁²+r₂²` (H2018, H2025).
- **Frekvens:** ~50 %.
- **Omskrevet eksempel:** «Estimatet for høyde-effekten synker når vekt inkluderes.
  Forklar hvorfor, og vurder om den nye modellen er å foretrekke ut fra justert R².»

### J. Modelldiagnostikk (regresjon)
- **Krav:** Kjenne de tre standardplottene og hva de avdekker — **residualer mot
  tilpassede** (kurvatur → ikke-linearitet), **scale-location `√|eᵢ|` mot tilpassede**
  (trend → heteroskedastisitet), **QQ-plott** mot normalkvantiler (avvik fra rett
  linje → ikke-normalitet) (H2010, H2011, H2015, H2017, H2018, H2020, H2022, H2024).
  På matrisenivå: hatmatrisen `H=X(XᵀX)⁻¹Xᵀ`, residualer `E=(I−H)Y`, `E(E)=0`,
  `Cov(E)=σ²(I−H)`; standardiserte residualer `e*ᵢ=eᵢ/√(1−hᵢᵢ)` (H2015).
- **Frekvens:** ~41 %.
- **Omskrevet eksempel:** «Vurder ut fra de tre residualplottene om
  modellantakelsene holder, og forklar hva et parabelmønster i det første plottet betyr.»

### K. Prediksjonsintervall vs. KI for forventet respons
- **Krav:** Skille **KI for forventningen** `ŷ₀ ± t·σ̂√(1/n+(x₀−x̄)²/Sₓₓ)` (H2019,
  H2020) fra **prediksjonsintervall** for en ny observasjon `ŷ₀ ± t·σ̂√(1+1/n+
  (x₀−x̄)²/Sₓₓ)` (H2011, H2014, H2016, H2023) — sistnevnte har `1+…` under rota fordi
  den inkluderer støyleddets varians. Fasiten advarer mot **ekstrapolering** langt
  utenfor dataområdet (H2020: x₀=301 gir absurd bredt intervall).
- **Frekvens:** prediksjonsintervall ~18 %.
- **Omskrevet eksempel:** «Angi et 95 % prediksjonsintervall for en ny måling ved
  x₀, og forklar hvorfor det er bredere enn intervallet for forventet respons.»

### L. Bayesiansk inferens
- **Krav:** Aposteriori `π(θ|x) ∝ π(θ)·L(θ)`; gjenkjenn **konjugerte par** ved å
  samle eksponenter og lese av fordelingsfamilien (Poisson→**gamma**, H2025;
  Weibull/gamma-oppsett→gamma, H2022). Oppgi aposteriori forventning fra kjent
  formel (gamma: `E=αβ`) og kommentér at den ligger nær MLE for store `n`.
- **Frekvens:** ~9 %, nytt siden 2022.
- **Omskrevet eksempel:** «Vis at gamma-fordelingen er konjugert apriori for
  Poisson-raten, angi aposteriorifordelingen og Bayes-estimatoren.»

### M. Enveis variansanalyse (ANOVA)
- **Krav:** Modellen `Xᵢⱼ=µᵢ+εᵢⱼ`, `εᵢⱼ∼N(0,σ²)`; test `H₀: µ₁=µ₂=µ₃` mot at minst
  én skiller seg, via **F-test** (les P-verdi fra R-utskrift). Kobles til
  **dummy-regresjon** der gruppeforskjeller uttrykkes med indikatorvariabler, og
  gruppekontraster testes med t-tester (H2020, H2021).
- **Frekvens:** ~9 %.
- **Omskrevet eksempel:** «Test med enveis variansanalyse om de tre behandlings-
  gruppene har lik forventet vektøkning, og tolk F-testens P-verdi.»

### N. Eksakt fordelingsteori / transformasjons-pivot
- **Krav:** Bruk **transformasjonsformelen** `g(v)=f(x(v))·|dx/dv|` for å vise at
  f.eks. `2Xᵢ/θ ∼ χ²₂` (H2016), og bygg **eksakt CI eller F-test for variansforhold**
  på slike egenskaper (`F=Ȳ/X̄` F-fordelt, H2016; Pareto/inntekt-χ²-pivot for en
  ensidig test, H2013; fordelingen til ordningsvariabelen `min Xᵢ` for skjøvet
  eksponensial, H2005). Dette er STK1100-teknikker gjenbrukt til inferens.
- **Frekvens:** ~18 %.
- **Omskrevet eksempel:** «Vis at `2ΣXᵢ/θ` er kjikvadratfordelt, og bruk det til en
  eksakt test av `H₀: θ≤θ₀`.»

### O. Ikke-parametrikk og bootstrap
- **Krav:** *Bootstrap* — estimer `F` med empirisk fordelingsfunksjon
  `F̂(x)=(1/n)ΣI(xᵢ≤x)`, simuler ved trekking med tilbakelegging, og les av
  **persentil-intervallet**; kommentér at det ligner normaltilnærmingens intervall
  når bootstrap-histogrammet er tilnærmet normalt (H2015). *Rangbasert alternativ*
  — når QQ-plottet antyder ikke-normalitet, foretrekkes en ikke-parametrisk test
  (rang/Wilcoxon) framfor t-testen; svakere antakelser gir gjerne svakere/høyere
  P-verdi (H2023).
- **Frekvens:** ~9 %.
- **Omskrevet eksempel:** «Forklar hvordan et ikke-parametrisk bootstrap-persentil-
  intervall konstrueres, og sammenlign det med normaltilnærmingens intervall.»

### P. Logistisk regresjon
- **Krav:** Modellér `P(Y=1|x)=e^{β₀+β₁x}/(1+e^{β₀+β₁x})`; med dummy `x∈{0,1}` svarer
  **`β₁=0` til lik sannsynlighet i to grupper**, slik at en gruppeforskjell kan
  testes innenfor logistisk regresjon (H2015).
- **Frekvens:** ~5 % (kjerneferdighet i emnebeskrivelsen, men sjelden testet tungt).
- **Omskrevet eksempel:** «Uttrykk to-gruppe-sammenligningen som en logistisk
  regresjon, og vis at nullhypotesen om lik andel svarer til `β₁=0`.»

---

## 4. Sensorens krav (fra løsningsforslagene)

Løsningsforslagene er faglærerskrevne og **utledningsdrevne og konsise** — vis
regnekjeden kompakt, ikke lange verbale utlegninger. Kravene som går igjen:

1. **Definer modell og variable eksplisitt før du regner** («La `Xᵢ` = … , da er
   `Xᵢ ∼ …`» med parametre). Uten definert modell er svaret ufullstendig.
2. **ML-utledninger skal ha alle trinn** `L(θ)→ℓ(θ)→s(θ)=ℓ'(θ)→løs`, og fasiten
   **bekrefter maksimum** med fortegn på `ℓ''(θ̂)` eller `s'(θ)<0`. Skille
   **estimator** (stor bokstav, stokastisk) og **estimat** (tall).
3. **Forventningsretthet og varians vises fullstendig.** Skjevhet skal
   kvantifiseres og korrigeres når oppgaven ber om en forventningsrett estimator.
4. **Nevn MLE-asymptotikk / sentralgrenseteoremet eksplisitt** når normaltilnærming
   brukes for et gjennomsnitt eller en estimator — og koble Wald-variansen til
   `1/(nI(θ))` (og Cramér–Rao der relevant).
5. **Hypotesetestens rituale er obligatorisk:** `H₀/Hₐ` (med begrunnet retning) →
   testobservator **med fordeling under `H₀`** → **utledning av at nivået blir α** →
   tallfesting → **konklusjon i ord i kontekst**. P-verdien defineres verbalt
   korrekt og avgrenses fra kvantiltabell.
6. **Riktig fordeling og frihetsgrader:** t (ikke z) når σ er estimert; `n−1`,
   `n−2` (enkel regresjon), `m+n−2` (pooled to-utvalg), `n−k−1` (multippel). Fasiten
   straffer feil frihetsgrader.
7. **Eksakt/pivot-CI foretrekkes framfor Wald** når standardavviket avhenger av
   parameteren; et **asymmetrisk** eksakt intervall er riktig, ikke en feil.
8. **Regresjon: tolk koeffisientene i kontekst**, bruk **justert R²** (ikke R²) til
   modellsammenligning, og forklar **konfundering** når en koeffisient endrer seg
   ved inklusjon av en ny variabel. Advar mot **ekstrapolering** og forveksling av
   **konfidens-** og **prediksjonsintervall**.
9. **Residualplott tolkes i mønstre** («parabelmønster → kvadratisk effekt / brutt
   konstant varians»), ikke «ser greit ut».
10. **Tolkning av R-utskrift skal være presis:** vite hvilken kolonne som er estimat,
    standardfeil, t-verdi og P-verdi, og hva Residual standard error, Multiple/
    Adjusted R² og F-statistikken betyr.
11. **Tallsvar med rimelig presisjon, riktig kvantil og enhet.**

**Karakterskiller (utledet av oppgavestrukturen):** Åpningsdelene (definer modell,
enkel estimator, standard t-CI, tolke R-utskrift) definerer bestått-nivået.
Midtsjiktet mestrer full ML-utledning, det komplette test-ritualet og standard
regresjonsinferens. Toppsjiktet skiller seg på: **Fisher-info→Wald-CI med
Cramér–Rao-forankring, eksakt/pivot-utledninger, matriseregresjon (hatmatrise,
`(XᵀX)⁻¹`), konfunderingsargumentet, konjugering/Bayes og de ikke-parametriske
alternativene.**

---

## 5. Typiske feil

Feilmønstre som løsningsforslagene adresserer eller bygger feller rundt:

1. **z der det skal være t** — normalkvantil når σ er estimert, eller feil
   frihetsgrader (`n` i stedet for `n−1`; `n−1` i stedet for `n−2` i enkel regresjon;
   glemme `m+n−2` i pooled to-utvalg).
2. **Hoppe rett til Wald-CI** uten å vurdere eksakt/pivot der SD avhenger av
   parameteren, eller tro at et asymmetrisk eksakt intervall er feil.
3. **Glemme å bekrefte at ML-punktet er et maksimum** (`ℓ''(θ̂)<0`).
4. **Behandle parrede data som to uavhengige utvalg** — differansene `Dᵢ` skal
   analyseres som ett utvalg (H2021).
5. **Feil retning i `Hₐ`** — ensidig/tosidig påvirker både forkastningsgrense og
   P-verdi; retningen skal følge av det situasjonen ber om å påvise.
6. **Mistolke P-verdien** — den er ikke «sannsynligheten for at `H₀` er sann», men
   sannsynligheten under `H₀` for et minst like ekstremt utfall.
7. **Bruke `R²` i stedet for justert `R²`** til modellsammenligning (`R²` øker alltid
   når en variabel legges til).
8. **Forveksle konfidens- og prediksjonsintervall** (sistnevnte har `1+…` under rota).
9. **Ekstrapolere regresjonsmodellen** langt utenfor dataområdet uten forbehold
   (H2020: x₀ langt til høyre gir meningsløst bredt intervall), eller tolke
   konstantleddet ved x=0 når x=0 er urealistisk.
10. **Feiltolke en koeffisient i multippel regresjon** som «hele effekten» — den er
    effekten *med de andre variablene holdt konstant*; konfundering forklarer at den
    endrer seg fra enkel til multippel regresjon.
11. **Påstå konjugering uten å samle eksponentene** og gjenkjenne fordelingsfamilien.
12. **Estimator vs. estimat** — forveksle den stokastiske estimatoren (stor bokstav)
    med det observerte tallet.
13. **Feil frihetsgrader i eksakt pivot** (χ²_{2n} vs. χ²ₙ vs. χ²_{n−1}) — les hvilken
    gamma/χ² som gjelder.
14. **Lese R-utskrift feil** — forveksle Std. Error-kolonnen med t-verdien, eller
    tolke en ikke-signifikant koeffisient som «uviktig» uten å ta hensyn til at
    testen er betinget på de øvrige variablene i modellen (H2023).

---

## 6. Formel- og notasjonsapparat

### Hva som ligger i formelsamlingen (og derfor IKKE skal pugges)
«Formelsamling for STK1100/STK1110» er alltid tillatt og inneholder standard-
fordelingene (tetthet/punktsannsynlighet, E, Var, MGF), kvantiltabeller (Φ/z, t,
χ², F), standard KI- og testformler, samt regresjonsformlene. Enkelte sett legger
i tillegg z-/t-tabellen direkte i oppgaveteksten. **Konsekvens for boken:**
treningen skal ligge på å *velge* riktig fordeling/test/intervall, *bruke*
tabellene korrekt (riktige kvantiler og frihetsgrader), *tolke R-utskrift* og
*utlede* det som ikke står der (ML, Fisher-info, pivotaler, LS-estimatorer,
E/V av estimatorer) — ikke på memorering.

### Må beherskes aktivt (utledes/regnes uten oppskrift)

**1. Estimering:**
- **ML:** `L(θ)=∏f(xᵢ;θ) → ℓ(θ) → s(θ)=ℓ'(θ)=0 → θ̂`, bekreft `ℓ''(θ̂)<0`.
  **Moment:** avstem `E(X)` mot `X̄`. Invariansprinsipp: `ψ̂=g(θ̂)`.
- **Forventningsretthet** `E(θ̂)=θ`; **varians** `V(θ̂)`; **konsistens** via
  Tsjebysjeff (`V(θ̂)→0`); **MSE** = varians + skjevhet² ved sammenligning.
- **Fisher-informasjon:** `I(θ)=−E[∂²log f/∂θ²]`, `Iₙ(θ)=nI(θ)`; MLE tilnærmet
  `N(θ, 1/(nI(θ)))`; **Cramér–Rao:** ingen forventningsrett estimator har mindre
  varians enn `1/(nI(θ))`.

**2. Konfidensintervall:**
- t-intervall: `X̄ ± t_{α/2,n−1}·S/√n`. Wald: `θ̂ ± z_{α/2}·se(θ̂)`.
- Pivot/eksakt: finn `W(X,θ)` med kjent χ²/F-fordeling uavhengig av θ, sett
  kvantiler rundt, løs — gir ofte asymmetrisk intervall.
- To-utvalg: `Ȳ₁−Ȳ₂ ± t_{α/2,m+n−2}·Sₚ√(1/m+1/n)`, `Sₚ²=[(m−1)S₁²+(n−1)S₂²]/(m+n−2)`.
- Andeler: `p̂ ± z_{α/2}√(p̂(1−p̂)/n)`; varians σ²: χ²-intervall; variansforhold: F.

**3. Hypotesetesting:**
- Rituale: `H₀/Hₐ` → testobservator med fordeling under `H₀` → utled `P(forkast
  H₀|H₀)=α` → tallfest → konkluder i ord.
- P-verdi: `P(minst like ekstremt utfall | H₀)`.
- Styrke/dimensjonering: `β(µ₀)=1−Φ(−z_α+(grense−µ₀)/(σ/√n))`; løs for `n`, rund opp.
- Testtyper: ett-/to-utvalgs t, parvis t (på `Dᵢ`), andels-z (pooled `p̂`),
  Poisson-test, χ²/F for varians(-forhold), ANOVA-F, LRT `Δ=2{ℓ_full−ℓ_H₀}∼χ²_df`.

**4. Enkel lineær regresjon:** `β̂₁=Σ(xᵢ−x̄)(Yᵢ−Ȳ)/Σ(xᵢ−x̄)²`, `β̂₀=Ȳ−β̂₁x̄`;
`E(β̂₁)=β₁`, `V(β̂₁)=σ²/Σ(xᵢ−x̄)²`; `S²=SSE/(n−2)`;
`T=(β̂₁−β₁⁰)/se(β̂₁)∼t_{n−2}`; KI `β̂₁±t_{α/2,n−2}·se`; uten konstantledd
`γ̂=ΣxᵢYᵢ/Σxᵢ²`; ML = LS under normalfeil; `R²=` korr²(x,y) i enkel regresjon.

**5. Multippel regresjon:** `Y=Xβ+ε`, `β̂=(XᵀX)⁻¹XᵀY` (krever full rang);
`S²=SSE/(n−k−1)`; `R²=1−SSE/SST`, justert `R²=1−[SSE/(n−k−1)]/[SST/(n−1)]`;
hatmatrise `H=X(XᵀX)⁻¹Xᵀ`, `E=(I−H)Y`, `Cov(E)=σ²(I−H)`, `e*ᵢ=eᵢ/√(1−hᵢᵢ)`.

**6. Prediksjon:** KI for forventet respons `ŷ₀±t_{n−2}σ̂√(1/n+(x₀−x̄)²/Sₓₓ)`;
prediksjonsintervall `ŷ₀±t_{n−2}σ̂√(1+1/n+(x₀−x̄)²/Sₓₓ)`.

**7. Bayes:** `π(θ|x)∝π(θ)·L(θ)`; konjugerte par (Poisson→gamma, gamma→gamma);
gamma-forventning `αβ`; Bayes-estimator ≈ MLE for stor n.

**8. R-utskriftens anatomi:** koeffisienttabell (Estimate | Std. Error | t value |
Pr(>|t|)), Residual standard error (`σ̂` med df = n−k−1), Multiple/Adjusted
R-squared, F-statistic (samlet signifikans).

### Notasjonskonvensjoner i settene
- Store bokstaver for stokastiske variable, små for observasjoner; hatt for
  estimatorer (`θ̂, µ̂, σ̂, β̂`); `X̄`, `S²` for utvalgsgjennomsnitt/-varians;
  `X ∼ N(µ, σ²)` med **varians** som annet argument; Φ for standardnormal CDF;
  kvantilnotasjon `z_α`, `t_{ν,α}`, `χ²_{ν,α}`, `F_{ν₁,ν₂}` (øvre haleareal).
- Regresjon: `β₀` konstantledd, `β₁,…,β_k` helninger; feilledd `εᵢ∼N(0,σ²)`
  uavhengige; enkelte år sentreres prediktorene (`xᵢ−x̄`) slik at `β₀` blir
  forventet respons ved gjennomsnittlig x.
- **R-utskrift** brukes gjennomgående for regresjon — boken må lære studenten å
  lese den, ikke å skrive kode.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer 60–70 % av poengene)
1. **Estimeringskjeden:** moment vs. ML (`L→ℓ→score→løs→bekreft maks`) →
   forventningsretthet → varians → (Fisher-info → Wald-CI). Den faste Oppgave 1.
2. **Hypotesetestens rituale komplett** (`H₀/Hₐ` → observator med fordeling →
   utled nivå α → P-verdi → konklusjon i ord), med t-test som arbeidshest og
   CI↔test-dualiteten.
3. **Konfidensintervall** i alle standardformer: t (ukjent σ), Wald (MLE),
   to-utvalg/pooled, andeler.
4. **Enkel lineær regresjon komplett:** LS-utledning, `E/V(β̂₁)`, t-test og KI for
   stigningstall, tolkning i kontekst, **lese R-utskrift**.
5. **Multippel regresjon:** matriseform, R²/justert R², konfundering, modellvalg.

### Nivå 2 — må kunne (avgjør C mot B)
6. **Fisher-informasjon, MLE-asymptotikk og Cramér–Rao** som grunnlag for Wald-CI.
7. **Residualdiagnostikk** (de tre plottene) og hva de avdekker.
8. **To-utvalgs og parvise design** — særlig skillet mellom dem, og pooled varians.
9. **Estimator-sammenligning** (forventningsretthet, varians, konsistens) og valg
   av best estimator.
10. **Prediksjonsintervall vs. KI for forventet respons** — `1+…`-forskjellen og
    faren ved ekstrapolering.
11. **Styrke og dimensjonering** av utvalgsstørrelse.
12. **Andelstest / Poisson-test** med normaltilnærming.

### Nivå 3 — bør kjenne til (topper karakteren, differensierer A)
13. **Matriseregresjon i detalj:** hatmatrise, `(XᵀX)⁻¹`, standardiserte residualer,
    diagonalisering ved sentrerte/ortogonale prediktorer.
14. **Bayesiansk inferens:** konjugering (Poisson→gamma, gamma→gamma), Bayes-
    estimator, kobling til MLE (ny gjenganger 2022/2025).
15. **Enveis variansanalyse (ANOVA)** koblet til dummy-regresjon.
16. **Eksakt/transformasjons-pivot** (`2X/θ→χ²`, F-test for variansforhold) og
    **LRT**.
17. **Ikke-parametrikk:** bootstrap-persentilintervall, rang/Wilcoxon som robust
    alternativ når normalitet svikter.
18. **Logistisk regresjon** for to-gruppe-sammenligning.

### Prognose for neste ordinære eksamen
4 timer, godkjent kalkulator + formelsamling for STK1110, skriftlig skoleeksamen
med **2–3 oppgaver** som til sammen dekker de tre søylene:
- (i) én **estimeringsoppgave** — moment/ML på en gitt (ofte lett «eksotisk»)
  fordeling → forventningsretthet/varians → Fisher-info → Wald-CI, evt. med et
  Bayes-/konjugerings-punkt eller en eksakt pivot til slutt;
- (ii) én **test-/KI-oppgave** — ett- eller to-utvalgs t (evt. parvis eller andeler),
  full testutledning med nivå og P-verdi, CI↔test-dualitet, evt. styrke/dimensjonering;
- (iii) én **regresjonsoppgave** (den tunge) — enkel og/eller multippel med
  R-utskrift: LS/matriseform, inferens for koeffisienter, R²/justert R²,
  residualdiagnostikk og/eller prediksjonsintervall, konfunderingsdrøfting.
Sannsynlige gjengangere på rotasjon: **Bayes/konjugering, ANOVA/dummy-regresjon,
F-test for varianser, ikke-parametrisk alternativ, eksakt χ²-pivot.**
**Ikke forvent** ren sannsynlighetsregning (simultantettheter, MGF, Jacobi,
kombinatorikk, ordningsvariable) eller Python-koding — det er henholdsvis STK1100s
domene og STK1100s verktøy.

---

## 8. Progresjon og overlapp: STK1100 → STK1110

STK1100 (*sannsynlighet og modellering*) og STK1110 (*inferens og dataanalyse*)
deler formelsamling og til dels notasjon, men er **komplementære, ikke
overlappende** på eksamensnivå. STK1110 forutsetter STK1100 og bygger videre.

| Trekk | STK1100 (sannsynlighet) | **STK1110 (inferens)** |
|---|---|---|
| **Hypotesetesting** | Fraværende (0/10) | **Bærebjelke (~91 %)** — fullt test-rituale, styrke |
| **Lineær regresjon** | Liten og elementær (2/10, ingen residualplott/PI) | **Bærebjelke (~91 %)**, med diagnostikk, PI, multippel, R-utskrift |
| **Fisher-info / Cramér–Rao / MLE-asymptotikk** | Så godt som fraværende | **~45 %, økende** — Wald-CI-grunnlaget |
| **Bayes / konjugering** | Fraværende | **~9 %, nytt siden 2022** |
| **ANOVA** | Fraværende | **~9 %** (2020–2021) |
| **To-utvalg / parvis / andeler** | Fraværende | **~36 %/9 %/23 %** |
| **Ikke-parametrikk (rang/Wilcoxon)** | Fraværende | Lett til stede (~9 %) |
| **Logistisk regresjon** | Fraværende | ~5 % (pensumkjerne, sjelden tungt testet) |
| **ML-estimering, forventningsretthet, varians** | ~90 % (kjerne) | ~91 % (kjerne) — **den store felles ferdigheten** |
| **Konfidensintervall** | ~100 %, med tung vekt på eksakt/pivotal-KI | ~95 %, med tung vekt på **t-CI og Wald-CI** |
| **Gamma/χ²-pivot, transformasjon, MGF/Jacobi** | **Tungt vektet (~90 %)** — bærebjelke | Lett gjenbrukt (~18 %) som verktøy til eksakt inferens |
| **Simultantetthet / marginaler / uavhengighet** | ~80 %, egen storoppgave | **~0 %** (forutsettes kjent) |
| **Simulering / kode** | ~60 %, **Python/numpy**, full kode | **R-utskrift til tolkning** (~68 %), **ingen koding** |
| **Bootstrap** | ~60 %, fast siden 2015 | ~5–9 % (2015) |
| **Kombinatorikk / ordningsvariable** | Fraværende (0/10) | ~0 % (ordningsvariabel som pivot-verktøy 1 gang) |
| **Inferens-kjedens endepunkt** | Ender ved **konfidensintervall** | Fortsetter til **test + regresjon + modellvalg** |

**Den viktigste broen** mellom emnene er **ML-kjeden** (`L→ℓ→score→løs→
forventningsretthet→varians→KI`), som er felles kjerne. STK1110 forlenger den i to
retninger: **nedover mot testing** (utled nivå, P-verdi, styrke, dualitet) og
**utover mot regresjon** (LS = ML under normalfeil, matriseform, diagnostikk,
prediksjon). Transformasjons-/gamma-/χ²-apparatet fra STK1100 gjenbrukes, men bare
som *verktøy* til eksakte pivotaler — ikke som mål i seg selv.

**Konsekvens for læreboken:** STK1110-boken skal ha **tre tunge deler i balanse** —
(1) estimeringsteori (moment/ML, forventningsretthet/varians, Fisher-info/
Cramér–Rao, litt Bayes), (2) hypotesetesting + konfidensintervall (t/z/χ²/F, ett-/
to-utvalg/parvis/andeler, styrke, dualitet, ANOVA, ikke-parametrisk alternativ), og
(3) lineær regresjon (enkel + multippel, LS/matrise, diagnostikk, prediksjon,
R-utskrift). Den skal **forutsette, ikke gjenta**, STK1100s sannsynlighetsapparat,
og skal trene **tolkning av R-utskrift** framfor koding. STK1100-boken (som allerede
har skjelett) er det naturlige forkunnskapsankeret: kryssbok-lenker bør peke på
STK1100 for fordelinger, transformasjoner, gamma/χ² og ML-grunnlaget.

---

## 9. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/STK1110/`,
delt i `eksamen/` (oppgavesett `STK1110-HÅÅÅÅ.pdf`, 2004–2025 = 22 sett) og
`losningsforslag/` (`STK1110-HÅÅÅÅ-losningsforslag.pdf` / `-fasit.pdf`, 2007–2025 =
19 sett).

**Lest grundig — oppgaver og løsningsforslag (11 sett):**
- H2025, H2024, H2023, H2022, H2021, H2020, H2019, H2018, H2017, H2016, H2015.

**Skumlest — oppgaver + løsningsforslag (8 sett):**
- H2014, H2013, H2012, H2011, H2010, H2009, H2008, H2007.

**Lest på oppgavenivå (uten løsningsforslag i arkivet, 2 sett):**
- H2006, H2005.

**Registrert med lav vekt (skannet, ikke maskinlesbar):** H2004.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside for STK1110 (scratchpad:
`fagbeskrivelse-stk1110.md`). Emnet er verifisert aktivt (undervises hver høst,
t.o.m. høst 2026, per juli 2026).

**Strukturforbilder:**
- `docs/hoyskole-boker/stk1100/EKSAMENSANALYSE.md` — forgjengeren; progresjonen
  STK1100→STK1110 er dokumentert i del 8.
- `docs/hoyskole-boker/tma4245/EKSAMENSANALYSE.md` — NTNUs beslektede statistikkemne;
  samme 8-delers analysestruktur.

**Merknader om kildene:**
- Emnet het tidligere «Statistiske metoder og dataanalyse 1»; løsningsforslaget for
  H2015 har feilaktig «STK1100» i topptekst (innholdet er STK1110-inferens).
- Eksamensvarigheten økte fra 3 til 4 timer rundt 2009–2013; klokkeslettet veksler
  mellom formiddag (09–13) og ettermiddag (14.30/15.00–18.30/19.00).
- H2004-oppgavesettet forelå kun som skannet bilde uten maskinlesbar tekst og er
  derfor registrert med lav konfidens.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller
  fasitformuleringer er gjengitt ordrett. Formler og notasjon er standard faglig
  innhold uten verkshøyde.
