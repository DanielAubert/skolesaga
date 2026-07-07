# Eksamensanalyse: MET4 Empiriske metoder (NHH)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i
> `~/Desktop/Eksamner/NHH/MET4/`: **17 skoleeksamener** (skoleeksamen V2017–V2025,
> begge semestre unntatt vår-only enkeltår) hvorav **16 med fullt løsningsforslag
> («fasit»)**, samt **14 hjemmeeksamener** (gruppe-prosjekteksamen V2017–V2024) hvorav
> 8 med løsningsforslag. De **8 nyeste skole-settene med fasit (V2022–H2025)** er lest
> grundig; skole-settene 2017–2021 og hjemme-settene er skummet for temaregistrering.
> **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av
> oppgavetekst eller sensorformuleringer. Statistiske formler, R-funksjonsnavn og
> modelligninger er standard faglig notasjon uten opphavsrettsvern. Analysen er
> kvantitativ der kildene tillater det.

**Sentral strukturell innsikt:** MET4 hadde historisk (2017–2024) en **todelt
vurdering**: en individuell, tidsbegrenset **skoleeksamen** (3–4 t) *og* en
**hjemmeeksamen** som gruppeprosjekt (48 t, rapport på maks 10 sider). Fra og med 2025
er hjemmeeksamenen fjernet, og skoleeksamenen er utvidet til **6 timer** og har absorbert
den anvendte dataanalysen. **En eksamensrettet lærebok skal målrettes mot
skoleeksamenen** (konkrete, gjennomregnbare sjangre med fasit). Hjemme-prosjektsporet
behandles som eget, sekundært spor (del 1 og 7 nedenfor).

---

## 1. Eksamensform og utvikling

### Gjeldende form (skoleeksamen, 2025-regimet)

| Element | Detalj |
|---|---|
| Type | Skriftlig, individuell skoleeksamen (digital, med tilsyn) |
| Varighet | **6 timer** (09:00–15:00) fra V2025. Var 3 t (2017–2018), deretter 3–4 t (2019–2024) |
| Struktur | **Del 1 – Dataanalyse med R** (medfølgende `.Rdata`-datasett) + **Del 2 – Regneoppgaver**. 5–7 oppgaver, hver deloppgave teller likt (maks 10 poeng) |
| Hjelpemidler | Kalkulator; **alle trykte/egenskrevne hjelpemidler** (kategori 3); én tospråklig ordbok. Medfølgende digitale vedlegg: **`MET4Formler.pdf`** (formelark) og **`relevante_r_kommandoer.pdf`** (R-kommandoliste) |
| Programvare | **R** (base-R + `dplyr`/`ggplot2`). I Del 1 kjøres/skrives R; i Del 2 er R en «kalkulator» for kritiske verdier og sannsynligheter |
| Karakter | A–F |
| Språk | Bokmål (enkelte år også nynorsk/engelsk innslag); besvarelse på norsk eller engelsk |
| Semester | **Både vår og høst** — kurset undervises og eksamineres hvert semester |

**Sensorformuleringer som går igjen ordrett i alle fasitene:** «Hver deloppgave teller
likt og gir maksimalt 10 poeng.» R-kode kreves i utgangspunktet **ikke** i besvarelsen
(men gir ikke trekk), og det gis **ingen «stilpoeng»** på figurer eller ligninger —
«så lenge sensor forstår hva som menes … skal det gis full uttelling».

### Todelt vurderingshistorikk (skole + hjemme)

| Spor | Periode | Form | Faglig profil |
|---|---|---|---|
| **Skoleeksamen** | 2017–2025 | Individuell, tidsbegrenset (3 t → 4 t → 6 t) | Gjennomregnbare sjangre med fasit: hypotesetesting, regresjon, tidsrekker, logistisk regresjon, klassifisering |
| **Hjemmeeksamen** | 2017–2024 (avviklet før 2025) | Gruppe (2–4 stud.), 48 t, rapport ≤10 s, oppgitt `.Rdata`-datasett | Åpent dataanalyseprosjekt: feature engineering, modellvalg/-benchmark, paneldata/faste effekter, diff-in-diff, maskinlæring (GBM), terskeloptimering |

### Tre regimer i skoleeksamenen (viktigste innsikt for boka)

Skoleeksamenen har utviklet seg **gradvis** (ikke ett brått skifte). Eldre sett tester en
smalere kjerne; de nyeste er brede.

| Regime | Periode | Signaturstoff | Konsekvens for boka |
|---|---|---|---|
| **A – Klassisk inferens** | 2017–2018 | Hypotesetesting (F/t/χ²/proporsjon) dominerer; OLS-regresjon; tidsrekker introduseres (eksponentiell glatting, AR/MA); **logistisk regresjon debuterer V2018** | Kjernen — fortsatt eksamensrelevant |
| **B – Anvendt regresjon + tidsrekker** | 2019–2023 | Tidsrekker **systematiseres** (ACF, dekomponering trend/sesong/residual, ARIMA); logistisk regresjon **etableres**; regresjonsdiagnostikk blir standard; kausalitet/eksperiment som fast innslag; paneldata/faste effekter dukker opp | Bygg boka på dette |
| **C – Bredt R-regime (6-timers)** | 2024–2025 | 6-timers eksamen med eksplisitt «Del 1 R + Del 2 regne». **KNN, forvekslingsmatrise/sensitivitet-spesifisitet, forventet gevinst/beslutningsteori** kommer inn (nye 2024–25). Full hands-on R-arbeidsflyt på oppgitt datasett | Prioriter — dette er nåtidsformen |

**Konsekvens:** Bygg boka på **regime B + C** (2019–2025). Alt kjernestoffet fra regime A
lever videre. Det nyeste tilskuddet — klassifisering, KNN og beslutningsteori (forventet
gevinst) — må med fordi det er nåtidens differensierende stoff.

### Vektings- og strukturhistorikk (skole, utvalgte sett)

| Sett | Struktur | Innhold i hovedtrekk |
|---|---|---|
| V2022 | 4 oppg. | F-test + to-utvalgs t (KN/USA), χ²-uavhengighet, multippel regresjon + F-test + prediksjonsintervall + interaksjon, tidsrekke (ikke-stasjonaritet, ARMA), publikasjonsbias |
| V2023 | 2–3 oppg. | Log–log-regresjon (elastisitet) + diagnostikk + avgifts-/enhetsendring, F-test + to-utvalgs t + **variansminimering** (vekt via derivasjon), tidsrekke (ACF, ARMA, dekomponering, prognose) |
| H2023 | 3 oppg. | **To-proporsjon z-test** + **goodness-of-fit** + CLT for andel, logistisk regresjon (odds, prediksjon, **invers logit**), tidsrekke (dekomponering + AR(1) + langtidsprognose mot stasjonært snitt) |
| V2024 | 1 stor + | Fordelingsform, F-test, Welch-t, **AR(1)-regresjon** (smitte/systematisk risiko) + interaksjon + KI + **utledning av E(Yₜ)**, logistisk regresjon + **ROC/sensitivitet-spesifisitet** |
| H2024 | 3 oppg. | F-test (SE→SD), ensidig Welch-t, **seleksjonsbias**, log–log/log–lin-regresjon + KI + **paneldata/faste effekter (within-transformasjon)**, logistisk regresjon (utdanningsdummyer) |
| V2025 | Del 1+2, 7 oppg. | Del 1 R: boksplott, F-test, to-utvalgs t, χ²-uavhengighet, enkel+multippel regresjon + prediksjon; Del 2: misvisende figur, **to-proporsjon z + RCT-kausalitet**, tidsrekke (stasjonaritet + eksp. glatting), **logistisk regresjon + KNN** |
| H2025 | Del 1+2, 6 oppg. | Del 1 R: `summary`/histogram/boksplott/søylediagram, ensidig to-utvalgs t, goodness-of-fit, logistisk regresjon + **forvekslingsmatrise/terskler + KNN + forventet nettogevinst (beslutningsteori)**; Del 2: **paret t-test**, regresjon + prediksjon + **AIC-modellvalg**, tidsrekke (sesong/stasjonaritet + **ARIMA(0,1,1)/MA(1)**), CLT-normaltilnærming, prognosekritikk |

**Konstanter i 2025-formen:** Del 1 er en sammenhengende hands-on-analyse av ett oppgitt
datasett (beskriv → test → regresjon/klassifiser → prediker/anbefal). Del 2 er
frittstående regneoppgaver (proporsjonstest, tidsrekke, sannsynlighet, beslutningsteori).
Hver deloppgave teller likt.

---

## 2. Temafrekvens

Cellene teller de **8 nyeste skole-settene med fasit (V2022, H2022, V2023, H2023, V2024,
H2024, V2025, H2025)** — nåtidsregimet. Verdi = antall sett der temaet forekommer som
egen deloppgave eller mer. Kolonnen «17–21» oppsummerer den skummede eldre skole-æraen.

| Tema | 17–21 (eldre) | Score 2022–2025 (8 sett) |
|---|---|---|
| **Hypotesetest, oppsett + gjennomføring** (H₀/H₁, testobservator, kritisk verdi, konklusjon i kontekst) | ● gjennomgående | **8/8 = 100 %** |
| **To-utvalgs t-test** (pooled S²ₚ og Welch, ensidig/tosidig) | ● | **7/8 = 88 %** |
| **Multippel/enkel regresjon (OLS)** + koeffisienttolkning | ● | **7/8 = 88 %** |
| **Tidsrekker** (stasjonaritet, ACF/sesong, dekomponering, AR/MA/ARMA/ARIMA, eksp. glatting, prognose) | ○→● fra 2019 | **7/8 = 88 %** |
| **F-test for lik varians** (største varians i teller → høyre hale) | ● | **6/8 = 75 %** |
| **Logistisk regresjon** (odds-tolkning, sannsynlighetsprediksjon, klassifisering) | ○ (debut 2018) | **6/8 = 75 %** |
| **Funksjonsform-tolkning** (log–log-elastisitet, log–lin ≈100·β %, dummy, interaksjon) | ○ | **6/8 = 75 %** |
| **Kjikvadrattest** (uavhengighet *og* goodness-of-fit) | ● | **5/8 = 63 %** |
| **Prediksjon fra regresjonsmodell** (`predict`/innsetting) | ○ | **5/8 = 63 %** |
| **Konfidensintervall for koeffisient/parameter** (β̂ ± 1,96·SE) | ● | **4/8 = 50 %** |
| **Residualdiagnostikk** (residualplott, QQ, heteroskedastisitet) | ○→● | **4/8 = 50 %** |
| **Regneregler E/Var + lineærkombinasjon/variansminimering** | ● | **3/8 = 38 %** |
| **Normalfordeling/CLT/normaltilnærming** (eksplisitt begrunnet) | ● | **3/8 = 38 %** |
| **Kausalitet/eksperiment/seleksjonsbias** (RCT, kontrafaktisk, OVB) | ○→● fra 2020 | **3/8 = 38 %** |
| **Utelatt-variabel/endogenitet** (koeffisient endrer seg når variabel legges til/fjernes) | ○ | **3/8 = 38 %** |
| **To-proporsjon z-test** | ● (2017, 2020) | **2/8 = 25 %** |
| **Paneldata / faste effekter** (within-transformasjon, LSDV) | ○ (debut 2020) | **2/8 = 25 %** |
| **Klassifisering: terskel/forvekslingsmatrise/sensitivitet-spesifisitet/ROC** | – | **2/8 = 25 %** (nye 2024–25) |
| **KNN (K-nærmeste-nabo-klassifisering)** | – | **2/8 = 25 %** (nye 2025) |
| **Invers logit** (løse for x gitt sannsynlighet p) | ○ | **2/8 = 25 %** |
| **Datakritikk** (misvisende figur, publikasjonsbias) | ○ (2020) | **2/8 = 25 %** |
| **F-test for felles nullhypotese** (flere koeffisienter = 0) | ○ | **2/8 = 25 %** |
| **Beslutningsteori / forventet nettogevinst** (E[G] over utfallsceller) | – | **1/8 = 13 %** (ny H2025; jf. hjemme 2018/2021) |
| **AIC / modellvalg** | ○ | **1/8 = 13 %** (skole); standard i hjemme |
| **Paret t-test** | – | **1/8 = 13 %** (ny H2025) |
| **Enhetsendring/skalering** (avgift → log(c·y)) | ○ | **1/8 = 13 %** |

**Viktigste funn:**

1. **Inferens-kjernen er ryggraden.** Kombinasjonen «sett opp H₀/H₁ → velg og begrunn
   testobservator → sammenlign med kritisk verdi → konkluder i kontekst» forekommer i
   **hvert eneste sett**. F-test for lik varians etterfulgt av to-utvalgs t-test (med
   valg av lik/ulik varians ut fra F-testen) er den mest stabile enkeltsjangeren.
2. **Regresjon + logistisk regresjon + tidsrekker er de tre store søylene** ved siden av
   inferens. Alle tre går i ~75–90 % av settene. Boka skal bygges rundt disse fire
   søylene (inferens, lineær regresjon, logistisk regresjon, tidsrekker).
3. **Tidsrekker er tungt og bredt** i MET4 — dette skiller emnet skarpt fra ECON2130 og
   fra ECON3150 (der ren tidsserie er utgått pensum). Kandidaten må kunne
   stasjonaritet, ACF/sesong, dekomponering (trend + sesong + residual), AR/MA/ARMA/ARIMA,
   eksponentiell glatting og prognose (kort sikt + langtidskonvergens mot stasjonært snitt).
4. **Klassifisering, KNN og beslutningsteori er ferske (2024–2025)** og bør inn som eget
   temaområde. De henter arv fra hjemme-prosjektsporet (terskeloptimering, forventet
   gevinst) og er nå en fast del av 6-timersformen.
5. **Kausalitet/seleksjon er et konseptuelt fast innslag** (RCT-tolkning, seleksjonsbias,
   OVB/endogenitet), men lettere enn i ren økonometri — det testes verbalt og gjennom
   koeffisientendringer, ikke gjennom IV/2SLS-maskineri.

### Divergens fra fagbeskrivelsen (viktig)

NHHs emnebeskrivelse fremhever **kausal inferens, instrumentvariabler, endogenitet,
paneldata/faste effekter, difference-in-differences og regresjonsdiskontinuitet**. Dette
stemmer i stor grad med **hjemme-prosjektsporet** (der DiD, faste effekter, naturlige
eksperimenter og impuls-responsfunksjoner faktisk forekommer), men **ikke** med
skoleeksamenen: **IV/2SLS, DiD og RDD forekommer aldri i skole-settene.** Skoleeksamenen
tester i stedet et bredere anvendt metodeapparat (tidsrekker, logistisk regresjon,
klassifisering/ML, beslutningsteori). En eksamensrettet bok skal følge **skoleeksamenens
faktiske innhold**, ikke emnebeskrivelsens aspirasjon. IV/DiD/RDD nevnes eventuelt kort
som prosjekt-/videreføringsstoff.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen i skoleeksamenen, med krav destillert fra fasitene.
«Frekvens» gjelder de 8 nyeste settene.

### A. F-test for lik varians (forspill til t-testen)
- **Krav:** Sett opp H₀: σ₁² = σ₂² mot tosidig H₁. **Legg den største estimerte variansen
  i telleren** slik at man kun trenger høyre-hale-kritisk verdi (0,975-persentilen i
  F-fordelingen med n₁−1 og n₂−1 frihetsgrader; `qf(0.975, df1, df2)`). Konkluder, og
  **bruk resultatet til å velge pooled vs. Welch i den etterfølgende t-testen**.
- **Fallgruve (H2024):** Når bare standardfeil (SE) er oppgitt må man **regne om til
  standardavvik**: S = SE·√n før variansene settes inn (−3 poeng ellers).
- **Frekvens:** 6/8.

### B. To-utvalgs t-test (kjernesjangeren)
- **Krav:** Definer µ-notasjon, sett opp H₀: µ₁ = µ₂ og **riktig ensidig/tosidig** H₁ ut
  fra spørsmålsformuleringen. Velg testobservator: **pooled** S²ₚ = [(n₁−1)S₁² +
  (n₂−1)S₂²]/(n₁+n₂−2) ved lik varians, ellers **Welch** (separate varianser). Ved store
  utvalg er kritisk verdi ≈ 1,96 (tosidig) / 1,64 (ensidig). Konkluder i kontekst og gjerne
  med **målt effekt** (X̄₁ − X̄₂).
- **Sensorpraksis:** «H0: mu1 = mu2» godtas notasjonsmessig. Feil hypotese men riktig
  gjennomføring gir delvis uttelling. R-løsning (`t.test(..., var.equal=, alternative=)`)
  gir full pott — men kandidaten må passe på argumentrekkefølge/nivårekkefølge for at
  `alternative` skal matche H₁.
- **Frekvens:** 7/8.

### C. Kjikvadrattest (to varianter)
- **Uavhengighet:** Krysstabell (`table`), H₀: kjennetegnene er uavhengige. Forventede
  frekvenser eᵢⱼ = fᵢ•·f•ⱼ/n; χ² = Σ(fᵢⱼ−eᵢⱼ)²/eᵢⱼ; (r−1)(c−1) frihetsgrader; `chisq.test`.
- **Goodness-of-fit:** H₀: p₁,…,p_k har oppgitte verdier (f.eks. alle = 1/3). Forventede
  frekvenser eᵢ = n·pᵢ; k−1 frihetsgrader; `chisq.test(x, p=p0)`.
- **Frekvens:** 5/8.

### D. To-proporsjon z-test
- **Krav:** p̂₁, p̂₂, **samlet (pooled) andel** p̂ = (X₁+X₂)/(n₁+n₂). Testobservator
  Z = (p̂₁−p̂₂)/√[p̂(1−p̂)(1/n₁+1/n₂)], sammenlign mot z-kritisk verdi (ensidig/tosidig).
- **Frekvens:** 2/8 (H2023, V2025) + eldre.

### E. Multippel regresjon: avlese og tolke koeffisienter
- **Krav:** Les `lm`-/`glm`-utskrift (estimat, SE, t/z, p-verdi, R², F). Tolk **etter
  funksjonsform**: nivå–nivå («én enhet → β enheter, kontrollert for …»); **log–lin**
  (≈100·β % endring, eksakt (e^β−1)·100 %); **log–log** (β = elastisitet, «1 % → β %»);
  **dummy** (forskjell fra referansekategori); **interaksjon** (ulik effekt/helning mellom
  grupper). Kommenter **signifikans** og bruk «assosiert med», ikke «forårsaker».
- **Sensorpraksis:** Tolkning av en dummy/kategorivariabel som kontinuerlig («en enhets
  økning i garasje …») gir full trekk på den tolkningen.
- **Frekvens:** 7/8 (koeffisienttolkning), funksjonsform 6/8.

### F. Konfidensintervall for koeffisient/parameter
- **Krav:** β̂ ± t₁₋α/₂·SE(β̂). Ved store n settes t-kvantilen til **1,96** (95 %) —
  begrunn at n er stor. Uvante nivåer forekommer.
- **Frekvens:** 4/8.

### G. Prediksjon fra regresjonsmodell
- **Krav:** Sett inn verdier i ŷ = β̂₀ + β̂₁x₁ + … (eller `predict(modell, newdata=)`).
  Skille **prediksjonsintervall** (usikkerhet om ett nytt utfall) fra **konfidensintervall**
  (usikkerhet om forventningen) — testet eksplisitt (V2022). Anvendt beslutning oppå:
  «lønner kampanjen seg?» → sammenlign predikert endring mot kostnad.
- **Frekvens:** 5/8.

### H. Regresjonsdiagnostikk
- **Krav:** Les residualplott (heteroskedastisitet = varierende spredning; ikke-linearitet),
  **histogram + QQ-plott** (normalitet/haletyngde/skjevhet), og **autokorrelasjonsplott**
  for tidsrekker. Konkluder om OLS-forutsetningene holder og hva det betyr for
  prediksjonsintervall/inferens.
- **Frekvens:** 4/8.

### I. Utelatt variabel / endogenitet (kvalitativt)
- **Krav:** Forklar hvorfor en koeffisient **endrer seg** (krymper/vokser/skifter fortegn)
  når en variabel legges til eller fjernes: korrelasjon mellom regressorene gjør at den ene
  «fanger opp» effekten av den andre (V2025: kjønnseffekt forsvinner når inntekt/reklame
  legges til; H2022: markedsbehov-koeffisient kollapser når konkurrenter droppes; H2024:
  faste effekter fjerner tidsstabil utelatt variabel). Knytt til **eksogenitet**.
- **Frekvens:** 3/8.

### J. Logistisk regresjon
- **Krav:** Skriv modellen p = e^z/(1+e^z), z = β̂₀ + β̂₁x₁ + … . **Odds-tolkning:** én
  enhets økning i x endrer oddsen med multiplikativ faktor e^β, dvs. (e^β−1)·100 %.
  Kommenter signifikans; behandle dummyer/referansekategori riktig. **Sannsynlighets-
  prediksjon:** regn z, sett inn, klassifiser mot terskel (f.eks. p̂ > 0,5). **Invers
  logit:** løs 0,547 + 0,017·x = logit(p) = log(p/(1−p)) for x gitt ønsket p.
- **Sensorpraksis:** Å skrive opp en **log-lineær** modell i stedet gir 0 poeng; «en enhets
  økning i race2 …» (kontinuerlig tolkning av dummy) gir trekk; tolkning **via odds** kreves
  for full pott.
- **Frekvens:** 6/8.

### K. Klassifisering: terskler, forvekslingsmatrise, sensitivitet/spesifisitet, ROC
- **Krav:** Bruk `predict(..., type="response")` + `ifelse(p > terskel, ...)` til å lage
  klassifiseringer; sett opp **forvekslingsmatrise** (`table(sann, klass)`). Lav terskel →
  høy **sensitivitet** (fanger flere sanne positive) men mange falske positive; høy terskel
  → høy **spesifisitet**. Drøft avveiningen ut fra hva som er kostbart å bomme på. ROC-kurve
  tolkes tilsvarende.
- **Frekvens:** 2/8 (nye 2024–25).

### L. KNN (K-nærmeste-nabo)
- **Krav:** Klassifiser en observasjon ved **flertallsavstemning** blant de K nærmeste
  (euklidisk avstand på standardiserte variabler). Regn total andel riktige fra
  forvekslingsmatrisen. Kjenn **tolkbarhet vs. prediksjon**: logistisk regresjon anbefales
  når man vil *forstå* hva som driver utfallet (tolkbare koeffisienter); KNN er
  ikke-parametrisk og vanskeligere å tolke.
- **Frekvens:** 2/8 (nye 2025).

### M. Beslutningsteori / forventet nettogevinst
- **Krav:** Definer en gevinstvariabel G med verdier for hver (faktisk, predikert)-celle
  (riktig/falsk positiv/negativ). Regn **E[G] = Σ (gevinst_celle · andel_celle)** ved å
  hente celleandeler fra den normaliserte forvekslingsmatrisen (`prop.table`). Sammenlign
  modeller/terskler på forventet gevinst — «beste» modell avhenger av hva som verdsettes.
- **Frekvens:** 1/8 (ny H2025; jf. hjemme 2018/2021 «terskeloptimering»).

### N. Tidsrekker (stort temaområde)
- **Krav — fem underferdigheter:**
  1. **Stasjonaritet:** tre betingelser (konstant forventning, konstant/endelig varians,
     kovarians avhenger bare av tidsavstand). Påvis brudd fra figur (trend/sesong/avtakende
     spredning).
  2. **Autokorrelasjon/sesong:** les ACF-plott (positiv topp ved lag 12 = årssesong;
     negativ ved lag 6).
  3. **Dekomponering:** Yₜ = Tₜ (trend) + Sₜ (sesong) + Rₜ (residual); prognose settes
     sammen av de tre komponentene.
  4. **AR/MA/ARMA/ARIMA:** skriv modellen fra utskrift, f.eks. AR(1) Rₜ = φRₜ₋₁ + uₜ
     (stasjonær hvis |φ|<1); ARMA(p,q); ARIMA(0,1,1) ⇔ ΔXₜ er MA(1). Definer **hvit støy**
     uₜ og dens varians.
  5. **Prognose:** ett steg (R̂ₜ₊₁ = φRₜ, siden E[uₜ₊₁]=0), flere steg (iterér, R̂ₜ₊ₖ = φᵏRₜ
     → 0), og **langtidskonvergens mot stasjonært snitt** — langt fram dominerer trend/sesong.
     **Eksponentiell glatting:** Sₜ = w·yₜ + (1−w)·Sₜ₋₁, prognose ŷₜ₊₁ = Sₜ; svakhet:
     **underpredikerer systematisk ved stigende trend**.
- **Frekvens:** 7/8.

### O. Regneregler, lineærkombinasjon og variansminimering
- **Krav:** E(aU + bV) = aE(U) + bE(V); Var(aU+bV) = a²Var(U) + b²Var(V) + 2ab·Cov(U,V) —
  **kovariansleddet må med** når variablene ikke er uavhengige. Videregående: finn vekten w
  i Y = w·U + (1−w)·V som **minimerer variansen** ved å derivere Var(Y) mhp. w og sette lik
  null (svar: w = (σ_v² − σ_uv)/(σ_u² + σ_v² − 2σ_uv)). Utledning av E(Yₜ) for AR(1) via
  geometrisk rekke → (β₀ + β₁µ_x)/(1−φ).
- **Frekvens:** 3/8.

### P. Normalfordeling, CLT og normaltilnærming
- **Krav:** Bruk **sentralgrenseteoremet** til å begrunne at en sum/gjennomsnitt/andel er
  tilnærmet normalfordelt (navngi CLT). Standardiser Z = (X−µ)/σ og slå opp med `pnorm`
  (eller tabell); husk **N(µ, σ²) oppgis med varians**. Andel p̂ = X̄ av dummyer er ≈ N(p,
  p(1−p)/n) — grunnlaget for proporsjonstesten.
- **Frekvens:** 3/8.

### Q. Kausalitet, eksperiment og seleksjonsbias (verbal drøfting)
- **Krav:** I et **randomisert eksperiment** (RCT) kan en observert gruppeforskjell tolkes
  **kausalt** (V2022 insentiver, V2025 tillitsnudge). I **observasjonsdata** må man være
  skeptisk: **seleksjonsbias** (de innlagte er sykere enn de ikke-innlagte → sammenligningen
  svarer ikke på om sykehus virker, H2024), ikke-representative/filtrerte utvalg (hjemme
  V2024), korrelasjon ≠ kausalitet. Knytt til **kontrafaktisk** resonnement.
- **Frekvens:** 3/8.

### R. Datakritikk
- **Krav:** Avslør **misvisende figurer** (trunkert/høyt startende y-akse overdriver liten
  relativ endring, V2025) og **publikasjonsbias** («skrivebordsskuff-effekten»: |Z|>1,96
  publiseres oftere, V2022).
- **Frekvens:** 2/8.

### S. Paneldata / faste effekter (skjæringspunkt med hjemme-sporet)
- **Krav:** Gjenkjenn paneldata (samme enheter over tid). Faste effekter ηᵢ fjerner
  **tidsstabile** utelatte variabler via **within-transformasjon** (trekk fra
  enhetsgjennomsnittet). Poeng: en **tidsinvariant** kovariat kan ikke estimeres innen faste
  effekter — man trenger enheter som *endrer* status over tid. Faste effekter for
  lag/dommer (H2022), husholdning (H2024).
- **Frekvens:** 2/8.

---

## 4. Sensorens krav

### Faste metaregler (gjentas i alle fasitene)
1. **Hver deloppgave teller likt (maks 10 poeng).** Prioriter tiden deretter — ingen enkelt
   oppgave bærer eksamenen.
2. **Ingen stilpoeng.** Figurer og ligninger vurderes på innhold, ikke utseende: «så lenge
   sensor forstår hva som menes … full uttelling». Notasjonsslurv (S² vs σ², mu1=mu2)
   straffes ikke når meningen er klar.
3. **R-kode kreves ikke i besvarelsen** (men gir ikke trekk). Fasitene *viser* R, men
   kandidaten kan svare «for hånd». I Del 2 er R en kalkulator for kritiske verdier.
4. **Metodefrihet med begrunnelsesplikt.** Flere ekvivalente framgangsmåter gir full pott
   (f.eks. tre ulike `t.test`-oppsett med riktig `alternative`). Men **valget skal
   begrunnes** (ensidig/tosidig, pooled/Welch, z/t).
5. **Konklusjon i kontekst avslutter hvert resonnement** — aldri bare «forkast H₀», men
   «det ser ut til at kunder med tidlig skade kjører lengre».
6. **Delpoeng er finmasket og oppgitt per deloppgave** i fasitene (typisk 3 for hypoteser,
   4 for gjennomføring, 3 for konklusjon). Regnefeil gir fast trekk (ofte −3), men **riktig
   konklusjon gitt regnefeil premieres** (følgefeil straffes ikke dobbelt).

### Poeng-anatomi (gjennomgående mal)
- Hypotesetest: ~3 p oppsett + ~4 p gjennomføring + ~3 p konklusjon.
- Regresjonstolkning: ~3–4 p riktig modell + ~3 p per koeffisienttolkning.
- **Feil kritisk verdi:** −2 p. **SE brukt der SD kreves:** −3 p (men ikke følgefeil videre).

### Hva som skiller toppkandidatene
- **Begrunner metodevalget uoppfordret**: hvorfor pooled vs. Welch (koblet til F-testen),
  hvorfor ensidig, hvorfor t → z ved stor n.
- **Tolker via odds** (ikke sannsynlighet) i logistisk regresjon, og bruker eksakt
  (e^β−1)-omregning når β er stor.
- **Ser modellkritikken**: lav R², brutte OLS-forutsetninger, at prediksjonsintervall ikke
  kan stoles på ved ikke-normale residualer; at autoregressive ledd gjør vanlig
  koeffisienttolkning ugyldig.
- **Fanger kausalitets-/seleksjonspoenget** uoppfordret: RCT ⇒ kausal tolkning tillatt;
  observasjonsdata ⇒ seleksjon/OVB må nevnes konkret.
- **Kobler beslutning til statistikk**: velger terskel/modell ut fra forventet gevinst og
  hva som er kostbart å bomme på, ikke bare ut fra treffprosent.

---

## 5. Typiske feil (fra fasitene)

1. **SE forvekslet med SD** i F-testen — glemme S = SE·√n (H2024, eksplisitt −3 p).
2. **Feil teller/hale i F-testen** — ikke legge største varians i telleren, så man ender
   opp med feil (venstre-hale) kritisk verdi.
3. **Tosidig test på et ensidig spørsmål** (eller motsatt) — «er A *høyere* enn B» krever
   ensidig H₁; valget skal begrunnes.
4. **Pooled vs. Welch valgt uten kobling til F-testen** — antar lik varians der F-testen
   forkastet den, eller motsatt.
5. **Dummy/kategorivariabel tolket som kontinuerlig** — «en enhets økning i garasje/kjønn/
   race2 …» (trekk, ofte −3).
6. **Logistisk modell skrevet som log-lineær** — 0 poeng; og tolkning **ikke via odds** —
   trekk.
7. **Kausal tolkning av observasjonsdata** — konkludere at sykehus/utdanning *forårsaker*
   uten å nevne seleksjon/OVB; speilfeilen: å nekte kausal tolkning selv i et rent RCT.
8. **Koeffisienttolkning ved autoregressive ledd** — tolke βₓ «på vanlig måte» når modellen
   har φYₜ₋₁ (må tolkes via langtidsgjennomsnittet).
9. **Prediksjonsintervall forvekslet med konfidensintervall** (V2022).
10. **Eksponentiell glatting brukt ukritisk ved trend** — glemme at glattingen
    underpredikerer systematisk når serien stiger jevnt.
11. **Stasjonaritet feilvurdert** — dra inn irrelevante momenter, eller ikke se at
    sesong/trend/avtakende varians bryter betingelsene.
12. **Regning uten ord** — riktig testobservator uten hypoteseoppsett eller kontekst-
    konklusjon gir aldri full pott; fasitene avslutter alltid i klartekst.
13. **Glemme kovariansleddet** i Var(aU+bV) når variablene ikke er uavhengige.
14. **Prediksjon uten å ta høyde for at forklaringsvariabler må være kjent fremover** i
    tid (tidsrekke-/regresjonsprognose).

---

## 6. Formel- og notasjonsapparat

Notasjonen er stabil. Boka bør bruke nøyaktig denne (den ligger dessuten i det medfølgende
`MET4Formler.pdf` og `relevante_r_kommandoer.pdf`).

### Emnets notasjonsvalg
- **N(µ, σ²) angis med VARIANS** som andre argument (viktig snublestein mot R, der
  `rnorm(n, mean, sd)` tar **standardavvik**).
- Norske fagtermer: **forventningsrett**, **testobservator**, **kritisk verdi**,
  **signifikansnivå**, **standardfeil (SE)**, **hvit støy**. Hypoteser H₀/H₁ (eller Hₐ).
- Estimatorer med hatt: p̂, β̂, X̄, S (utvalg) mot σ (populasjon). Pooled varians S²ₚ.
- Odds og logit: p = e^z/(1+e^z), logit(p) = log(p/(1−p)).

### Må beherskes aktivt (regne, utlede, avlese)

**1. Hypotesetesting**
- F-test lik varians: F = S²_stor/S²_liten mot F_{0,975; n₁−1, n₂−1} (`qf`).
- To-utvalgs t: pooled S²ₚ = [(n₁−1)S₁²+(n₂−1)S₂²]/(n₁+n₂−2); Welch T =
  (X̄₁−X̄₂)/√(S₁²/n₁+S₂²/n₂). Store n ⇒ kritisk verdi ≈ 1,96/1,64.
- Paret t: T = ȳ/(s_y/√n), differanser y = A − B.
- Kjikvadrat: χ² = Σ(fᵢⱼ−eᵢⱼ)²/eᵢⱼ; uavhengighet eᵢⱼ = fᵢ•f•ⱼ/n, df=(r−1)(c−1);
  goodness-of-fit eᵢ = npᵢ, df = k−1 (`qchisq`).
- To-proporsjon z: Z = (p̂₁−p̂₂)/√[p̂(1−p̂)(1/n₁+1/n₂)], pooled p̂.

**2. Regresjon (lineær)**
- ŷ = β̂₀ + β̂₁x₁ + …; les estimat/SE/t/p/R²/F fra `summary(lm(...))`.
- KI: β̂ ± 1,96·SE. F-test felles nullhypotese fra utskrift.
- Funksjonsform: nivå–nivå, log–lin (≈100·β %, eksakt (e^β−1)·100 %), log–log (elastisitet),
  dummy, interaksjon. Enhetsendring: log(c·y) = log c + log y.

**3. Logistisk regresjon**
- p = e^z/(1+e^z); odds-endring e^β, (e^β−1)·100 %; invers logit for å løse for x.
- Klassifisering mot terskel; `glm(..., family=binomial)`.

**4. Klassifisering/ML**
- Forvekslingsmatrise, sensitivitet, spesifisitet; total treffandel = diag/sum.
- KNN: flertall blant K nærmeste (euklidisk avstand, standardiserte variabler).
- E[G] = Σ gevinst_celle · andel_celle (`prop.table`).

**5. Tidsrekker**
- Stasjonaritet (tre betingelser); ACF; dekomponering Yₜ = Tₜ + Sₜ + Rₜ.
- AR(1): Rₜ = φRₜ₋₁ + uₜ (|φ|<1 stasjonær); ARMA(p,q); ARIMA(0,1,1) ⇔ ΔXₜ = MA(1).
- Prognose: R̂ₜ₊ₖ = φᵏRₜ → 0. Eksponentiell glatting Sₜ = w·yₜ + (1−w)·Sₜ₋₁, ŷₜ₊₁ = Sₜ.

**6. Regneregler + CLT**
- E/Var av lineærkombinasjon (med kovariansledd); variansminimering ved derivasjon.
- CLT for sum/snitt/andel; standardisering; N(µ,σ²) med varians.

**7. R-vokabular** (skal kunne uten R foran seg): `t.test` (`var.equal=`, `alternative=`),
`var.test`, `chisq.test` (`p=`), `lm`/`glm`/`summary`/`coef`/`predict` (`type="response"`),
`table`/`prop.table`, `qnorm`/`pnorm`/`qt`/`qf`/`qchisq`, `ifelse`, `exp`/`log`, `filter`/
`select`/`pull` (dplyr), `ggplot` + `geom_boxplot`/`geom_histogram`/`geom_bar`, `summary`,
`mean`/`sd`/`var`, `train(method="knn")` (caret), `arima`/glatting.

### Må forstås kvalitativt
- OLS-forutsetninger og hva brudd betyr (heteroskedastisitet, ikke-normalitet,
  autokorrelasjon, avhengige observasjoner).
- Odds vs. sannsynlighet; tolkbarhet (logistisk) vs. prediksjonskraft (KNN/ML).
- Sensitivitet–spesifisitet-avveiningen og terskelvalg mot forventet gevinst.
- Stasjonaritet og hvorfor langtidsprognoser konvergerer mot trend/sesong.
- Kausalitet: RCT vs. observasjonsdata, seleksjonsbias, OVB/eksogenitet, kontrafaktisk.
- Praktisk/økonomisk vs. statistisk signifikans.

### Skal IKKE bygges tungt på (til tross for emnebeskrivelsen)
- **Instrumentvariabler / 2SLS / Wald** — forekommer aldri i skoleeksamenen.
- **Difference-in-differences og regresjonsdiskontinuitet** — kun i hjemme-prosjektsporet,
  aldri i skole-settene.
- **Formelle bevis / momentgenererende funksjoner** — forekommer ikke; alle utledninger er
  regneregel-manipulasjoner (E(Yₜ)-utledningen er den tyngste, og bygger på geometrisk rekke).
- **Sannsynlighetsteori for hånd** (kombinatorikk, Bayes, betinget sannsynlighet) er lite
  vektlagt sammenlignet med ECON2130 — MET4 er anvendt R-metode, ikke sannsynlighetsregning.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Hypotesetest-oppskriften i alle varianter** (8/8): F-test lik varians → to-utvalgs t
   (pooled/Welch, ensidig/tosidig) → konklusjon i kontekst. Ensidig/tosidig- og
   pooled/Welch-valget er de to metodesignalene sensor alltid ser etter.
2. **Multippel regresjon: avlese utskrift og tolke koeffisienter etter funksjonsform**
   (7/8) — log–log-elastisitet, log–lin, dummy, interaksjon; «assosiert med», ikke
   «forårsaker»; KI og prediksjon oppå.
3. **Logistisk regresjon** (6/8): skrive modellen, tolke **via odds** (e^β−1), predikere
   sannsynlighet, klassifisere mot terskel, invers logit.
4. **Tidsrekker** (7/8): stasjonaritet, ACF/sesong, dekomponering, AR/MA/ARMA/ARIMA,
   eksponentiell glatting, prognose (kort + langtidskonvergens).
5. **Kjikvadrat- og to-proporsjonstest** (χ² 5/8, proporsjon 2/8 + eldre) — begge
   χ²-variantene og pooled-andel-z.

### Nivå 2 — må kunne (de fleste resterende poengene)
6. **Regresjonsdiagnostikk** (4/8): residualplott/QQ/heteroskedastisitet, og hva brudd
   betyr for inferens/prediksjonsintervall.
7. **Klassifisering: forvekslingsmatrise, sensitivitet/spesifisitet, terskler, KNN** (2/8
   hver, nye 2024–25) — inkludert modellanbefaling (tolkbarhet vs. prediksjon).
8. **Beslutningsteori / forventet nettogevinst** (1/8, ny) — E[G] over utfallsceller,
   modell-/terskelvalg på forventet gevinst.
9. **Regneregler + variansminimering + CLT** (3/8 + 3/8) — lineærkombinasjon med
   kovariansledd, vekt-minimering ved derivasjon, CLT-begrunnelse.
10. **Kausalitet/seleksjon/OVB** (3/8) — RCT vs. observasjon, seleksjonsbias, koeffisient-
    endring når variabel legges til/fjernes.

### Nivå 3 — bør kjenne til (differensierer mot A / kan komme igjen)
11. **Paneldata / faste effekter** (2/8) — within-transformasjon, tidsinvariant kovariat kan
    ikke estimeres innen FE.
12. **Paret t-test** (ny H2025), **AIC-modellvalg** (1/8 skole, standard i hjemme),
    **enhetsendring/skalering** (avgift → log).
13. **Datakritikk** (2/8) — misvisende figur, publikasjonsbias.
14. **Utledning av E(Yₜ) for AR(1)** via geometrisk rekke (toppnivå-differensiator, V2024).

**Prognose for neste skoleeksamen:** 6-timers sett i 2025-malen. **Del 1 – Dataanalyse med
R** på ett oppgitt `.Rdata`-datasett: deskriptiv start (boksplott/histogram/`summary`) →
hypotesetest(er) (F-test + to-utvalgs t og/eller χ²) → regresjon (lineær *og/eller*
logistisk) med tolkning og prediksjon → klassifisering (terskel/forvekslingsmatrise/KNN) og
gjerne en beslutnings-/gevinstvurdering. **Del 2 – Regneoppgaver**: én proporsjons-/
sannsynlighetsoppgave, én tidsrekkeoppgave (stasjonaritet + dekomponering/ARIMA/glatting +
prognose), og gjerne en kausalitets-/datakritikk- eller beslutningsteoretisk oppgave.
Teststyrke er sjelden; IV/DiD/RDD kommer ikke. De mest sannsynlige tilleggsspørsmålene er
KNN-vs-logistisk-anbefaling, invers logit, og forventet-gevinst-sammenligning.

### Anbefalt arketype: hybrid, med regnefag som base

MET4 er et **regnefag med kraftig R- og tolkningskomponent** — en **hybrid som lener seg mot
regnefag-arketypen** (jf. `DNA-regnefag.md`). Argumenter:
- **For regnefag-base:** Sjangrene gjentar seg år etter år med (nesten) entydige fasitsvar —
  F-test, to-utvalgs t, χ², regresjonstolkning, odds, tidsrekkeprognose. Boka skal bygges som
  **målrettet drill** mot disse mønstrene, med drillkapitler for Nivå-1-temaene og komplette
  øvings-skoleeksamener i 6-timersmalen.
- **Hybrid-tilpasning (fra ECON2130-arven):** En stor andel av poengene ligger i **verbal
  tolkning og drøfting** — kausalitet/seleksjon, modellkritikk, sensitivitet-spesifisitet-
  avveininger, beslutningsanbefalinger. Disse må få **egne tolknings-/drøftingssjangre**
  (ikke bare regnekapitler), med A-besvarelser som viser hvordan man skriver konklusjon i
  kontekst og begrunner metodevalg.
- **R som gjennomgående verktøy:** Hvert kapittel skal koble teori til den konkrete
  R-utskriften/-kommandoen eksamen bruker (og til det medfølgende formel-/R-arket), fordi Del
  1 er ren hands-on R-arbeidsflyt.

Praktisk struktur: **Del 0 Eksamenskart** → temadeler (1) Inferens/hypotesetesting, (2)
Lineær regresjon, (3) Logistisk regresjon + klassifisering/KNN + beslutningsteori, (4)
Tidsrekker, (5) Kausalitet/design/datakritikk (kortere, drøftingstung) → **Del Eksamens-
trening** (sjangerkapitler + øvings-skoleeksamener i 6-timersmalen). Tidsrekker og
logistisk/klassifisering fortjener mest omfang etter frekvens og fordi de skiller MET4 fra
nabofagene.

---

## 8. Kildeliste

Alle filer i `/Users/danielandreasaubert/Desktop/Eksamner/NHH/MET4/`.

**Skoleeksamener lest grundig med fasit (8, V2022–H2025):**
`eksamen/MET4-skole-22-v.pdf` … `MET4-skole-25-h.pdf` med tilhørende
`losningsforslag/MET4-skole-{22..25}-{v,h}-fasit.pdf`.

**Skoleeksamener + fasit skummet for temaregistrering (2017–2021):**
`MET4-skole-17-v` … `MET4-skole-21-h` (begge semestre) med fasit. Merk: `MET4-skole-17-h.pdf`
gir tom tekstuttrekk (skannet/bilde), men fasiten `MET4-skole-17-h-fasit.pdf` finnes.

**Hjemmeeksamener (gruppe-prosjekteksamen) skummet, 2017–2024 (14 sett, 8 med
løsningsforslag):** `MET4-hjemme-17-h` … `MET4-hjemme-24-v`, løsningsforslag
`…-solprop.pdf` for 2017h/2018/2019/2020/2021v. Prosjektsporet dekker EDA/feature
engineering, modellvalg/-benchmark (inkl. GBM/maskinlæring), paneldata/faste effekter,
difference-in-differences, naturlige eksperimenter, ARIMA/tapsfunksjoner og
terskeloptimering/forventet gevinst — nyttig som kilde til de anvendte kontekstene, men
**ikke** styrende for den eksamensrettede boka mot skoleeksamenen.

**Fagbeskrivelse:** omskrevet sammendrag av NHHs emnebeskrivelse (scratchpad:
`fagbeskrivelse-met4-nhh.md`; kilde `https://www.nhh.no/emner/empiriske-metoder/`). MET4 er
verifisert **aktiv** (undervises vår og høst, tilbys høst 2026), 7,5 ECTS.

**Beslektede analyser (overlapp/forskjeller):**
- **ECON2130 (UiO, Statistikk 1):** stor overlapp i inferens-kjernen (hypotesetest, KI,
  to-utvalg, CLT, R). MET4 er bredere (tidsrekker, logistisk regresjon, klassifisering) og
  mindre tung på ren sannsynlighetsregning/kombinatorikk/Bayes. Begge premierer tolkning i
  kontekst over formelgjengivelse.
- **ECON3150 (UiO, Introductory Econometrics):** overlapp i regresjons-/kausalitetstenkning
  (funksjonsform, OVB, faste effekter). **Forskjell:** ECON3150 er bygd rundt
  IV/2SLS/DiD/RDD (som i MET4 kun finnes i hjemme-sporet), mens MET4-skoleeksamenen i stedet
  vektlegger tidsrekker, logistisk regresjon, klassifisering/KNN og beslutningsteori.
  ECON3150 bruker R/`feols`; MET4 bruker base-R + `dplyr`/`ggplot2` + `glm`/`caret`.

**Merknader om kildene:**
- **Todelt vurdering:** Arkivet inneholder to eksamensspor (individuell skoleeksamen +
  gruppe-hjemmeeksamen). Boka målrettes mot skoleeksamenen; hjemme-sporet gir kontekst.
- **Regimeutvikling:** Skoleeksamenen har utviklet seg gradvis fra klassisk inferens
  (2017–18) til bredt R-regime (2024–25); analysen prioriterer det gjeldende regimet.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekst, fasit eller
  sensorformulering er gjengitt ordrett. Formler, R-funksjonsnavn og modelligninger er
  standard faglig notasjon uten opphavsrettsvern.
</content>
</invoke>
