# Eksamensanalyse: ECON3150 Introductory Econometrics (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på eksamensarkivet i
> `~/Desktop/Eksamner/UiO/ECON3150/` (24 ordinære sett H2003–V2025, 21 utsatt-sett
> og 28 sensorveiledninger/løsningsforslag V2004–V2025). **Alle** sensorveiledninger
> er lest grundig; ordinære sett fra de siste ~12 år er lest grundig, eldre er skummet.
> **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekst
> eller sensorformuleringer. Modelligninger og statistiske formler er standard faglig
> notasjon uten opphavsrettsvern. Analysen er kvantitativ der kildene tillater det.
> Fagterminologi oppgis på engelsk i parentes ved første forekomst, siden faget
> undervises og eksamineres på engelsk.

Emnet er dobbeltkodet: **ECON3150 (bachelor) og ECON4150 (master) har felles
oppgavesett og felles sensorveiledning.** Alt nedenfor gjelder begge.

---

## 1. Eksamensform og utvikling

### Form (gjeldende)

| Element | Detalj |
|---|---|
| Type | Skriftlig skoleeksamen i Inspera (tidligere papir) |
| Varighet | **3 timer** (fast siden minst 2003; 5 t under korona-hjemmeeksamen V2020/V2021) |
| Hjelpemidler | **Åpen bok** — alle trykte og skriftlige ressurser tillatt + (digital) vitenskapelig kalkulator |
| Vedlegg | Standardnormaltabell Φ(z); fra V2024 også invers-normal Φ⁻¹(q) og tabell over kritiske verdier for Fₘ,∞ |
| Karakter | A–F (A best, E svakeste ståkarakter, F stryk) |
| Språk | Engelsk (2003–2009 var settene tospråklige norsk/engelsk) |
| Semester | **Kun vår** siden 2010 (2003–2008 hadde både vår og høst) |
| Struktur | 2–4 oppgaver med oppgitt vekting; **alle deloppgaver teller likt innen sin oppgave** |

Sensor ber uttrykkelig om **korte, poengterte svar som alltid begrunnes** — ikke lange
essay, og «ikke svar ja/nei uten begrunnelse». «If you are asked to derive something,
give all intermediate steps.»

### Tre tydelige regimer

Emnet har byttet lærebok, programvare og faglig profil to ganger. Dette er den viktigste
enkeltinnsikten for en lærebok: **eldre sett tester delvis stoff som ikke lenger er pensum.**

| Regime | Periode | Programvare | Lærebok-profil | Signaturstoff |
|---|---|---|---|---|
| **A – Klassisk** | 2003–2013 | Stata-utskrifter (og for hånd) | Biørn/Nymoen (HGL/Wooldridge). Sannsynlighetsteori + tidsserie | Heteroskedastisitetstesting, autokorrelasjon/**Durbin–Watson**, GLS/WLS, forventningsrett/BLUE-bevis, **delta-metode**, method of moments, dynamiske Phillips-kurvemodeller, simultanitet |
| **B – Anvendt Stata** | 2014–2021 | `regress …, robust` (Stata) | Stock & Watson. Anvendt mikroøkonometri | **Paneldata/fixed effects**, **probit/logit**, **IV/2SLS**, weak instruments/J-test, attrisjon/compliance, DiD, sant/usant-konseptspørsmål |
| **C – Nåværende (feols)** | 2022–2025 | **R: `feols()`/`fixest`** (av og til `lm`) ANSWER-HINT-utskrift | Stock & Watson + Angrist-inspirert kausalitet | «Les denne R-utskriften»-sjangeren, **skrive R-kode**, revers-OVB-regning, RDD (fuzzy), DiD 2×2, LATE/compliers, presisjon↔utvalgsstørrelse |

**Konsekvens for boka:** Bygg på **regime C** (2022–2025), supplert med de delene av
regime B som fortsatt går igjen (IV, DiD, LPM, interaksjoner, kausalitet). Regime A-stoffet
(Durbin–Watson, GLS, method of moments, ren tidsserie) er **ikke lenger eksamensrelevant** og
skal ikke drive strukturen — men enkelte begrep (heteroskedastisitet, delta-metode/SE for
lineærkombinasjon) lever videre i moderne form.

### Vektings- og struktur­historikk (utvalgte ordinære sett)

| Sett | Struktur / vekting | Merknad |
|---|---|---|
| V2013 | A (1/3) + B (2/3) | Teoribevis + tidsserie-Phillipskurve |
| V2014 | Oppg. 1–2 (2/3) + 3–4 (1/3) | IV, panel, sant/usant, simultanitet |
| V2015–V2018 | 12 / 15 deloppgaver, hver teller likt | Panel + probit/logit + IV + DiD + sant/usant |
| V2019 | 5 oppgaver 15/7,5/7,5/20/50 % | OLS for hånd, Gauss–Markov, IV |
| V2020, V2021 | 20 deloppgaver × 5 p = 100 p (hjemmeeksamen, eksplisitte karaktergrenser) | Panel-FE + probit/logit + IV, LPM |
| V2022, V2023 | Oppg. 1 (80 %) + oppg. 2 (20 %) | R-utskrift; oppg. 2 = IV eller DiD |
| V2024 | Oppg. 1 (60 %) + oppg. 2 (40 %) | Katolsk skole; OLS-blokk + IV/Wald |
| V2025 | 4 oppgaver: 2 + 4 + 8 + 6 poeng (20 p) | Presisjon, R-kode fra figur, OLS-blokk, fuzzy RDD |

**Konstanter siden 2022:** Én stor OLS-tolkningsblokk bygd på en R-utskrift med
4–7 regresjoner (reg1…reg7) utgjør 60–80 % av settet, etterfulgt av en mindre
kausalitetsoppgave (IV/Wald, DiD eller RDD) på 20–40 %. Deloppgaver teller likt.

---

## 2. Temafrekvens

Cellene teller antall ordinære vårsett i perioden der temaet forekommer som deloppgave
eller mer. Kolonnene deler den **eksamensrelevante moderne æraen (2014–2025, 12 sett)**;
kolonnen «03–13» oppsummerer det klassiske regimet (skummet). Gjenganger-scoren gjelder
**2014–2025** med mindre annet er nevnt. Utsatt-settene bekrefter mønsteret uten å endre det.

| Tema (engelsk term) | 03–13 | 14–17 (4) | 18–21 (4) | 22–25 (4) | **Score 14–25** |
|---|---|---|---|---|---|
| **OLS-koeffisienttolkning** (nivå/log/dummy) | ● | 4 | 4 | 4 | **12/12 = 100 %** |
| **Kausal tolkning + antakelser** (betinget uavhengighet) | ○ | 3 | 4 | 4 | **11/12 = 92 %** |
| **Instrumentvariabler / 2SLS / Wald** | ○ | 4 | 4 | 4 | **12/12 = 100 %** |
| **Funksjonsform: log/elastisitet, log–nivå, log–log** | ● | 3 | 4 | 4 | **11/12 = 92 %** |
| **Utelatt variabel-skjevhet (OVB)** — tolke + regne | ● | 3 | 4 | 4 | **11/12 = 92 %** |
| **Hypotesetest / t-verdi** (også ensidig, test mot c≠0) | ● | 3 | 4 | 4 | **11/12 = 92 %** |
| **Konfidensintervall** (β̂ ± z·SE) | ● | 2 | 4 | 4 | **10/12 = 83 %** |
| **F-test for felles nullhypotese** | ● | 3 | 3 | 4 | **10/12 = 83 %** |
| **Dummyvariabler + interaksjonsledd** (ulik helning/effekt) | ○ | 3 | 4 | 4 | **11/12 = 92 %** |
| **Standardfeil / SE for β̂** (avlese, tolke presisjon) | ● | 2 | 4 | 4 | **10/12 = 83 %** |
| **R²-beregning / -tolkning** | ● | 2 | 2 | 3 | **7/12 = 58 %** |
| **Konstantleddets tolkning** (E[y\|x=0], ofte meningsløst) | ○ | 1 | 3 | 4 | **8/12 = 67 %** |
| **LPM / predikerte sannsynligheter** (binært utfall, y>1-felle) | – | 2 | 4 | 3 | **9/12 = 75 %** |
| **Endring av måleenhet** (skalering, log(c·y)=log c+log y) | ● | 1 | 1 | 4 | **6/12 = 50 %** (alle fire 22–25) |
| **Paneldata / fixed effects** (within, LSDV, tid+enhet) | ○ | 3 | 4 | 0 | **7/12 = 58 %** (borte etter 2021) |
| **Probit / logit** (predikere P, marginaleffekt) | ○ | 3 | 4 | 0 | **7/12 = 58 %** (borte fra ordinære 22–25) |
| **Difference-in-differences (DiD)** | – | 1 | 1 | 2 | **4/12 = 33 %** (voksende) |
| **Kvadratledd + gjennomsnittlig marginaleffekt** | ● | 1 | 0 | 2 | **3/12 = 25 %** (+ delta-SE, toppnivå) |
| **SE for lineærkombinasjon / delta-metode** | ● | 0 | 1 | 1 | **2/12 = 17 %** (toppnivå-differensiator) |
| **Skrive R-kode (`feols(...)`)** | – | 0 | 0 | 4 | **4/12 = 33 %** (signatur 22–25) |
| **Regresjons-diskontinuitet (RDD, fuzzy=2SLS)** | – | 0 | 0 | 2 | **2/12 = 17 %** (ny, 24–25 + utsatt) |
| **Heteroskedastisitet / robuste SE** (eksplisitt testet) | ● | 1 | 0 | 0 | klassisk; nå bare default-SE |
| **Sant/usant- eller «diskuter påstanden»-konseptspørsmål** | ● | 2 | 2 | 1 | **5/12 = 42 %** |
| **Presisjon ↔ utvalgsstørrelse** (bakregne SE/n fra p-verdi) | – | 0 | 0 | 1 | **1/12 = 8 %** (ny V2025) |
| **Gauss–Markov / forventningsrett / BLUE / plim** (bevis) | ● | 1 | 1 | 0 | klassisk-rest, sjelden |
| **Tidsserie: autokorrelasjon, Durbin–Watson, GLS, dynamikk** | ● | 0 | 0 | 0 | **0/12** — utgått pensum |
| **Method of moments, simultanitet, ren sannsynlighetsteori** | ● | 1 | 0 | 0 | ~utgått |

**Viktigste funn:**

1. **Kausal inferens er ryggraden.** Kombinasjonen OLS-tolkning + OVB + IV/2SLS + kausalitets­antakelser
   forekommer i praksis i **hvert eneste moderne sett**. Boka skal organiseres rundt spørsmålet
   «når kan en regresjonskoeffisient tolkes kausalt, og hva gjør vi når den ikke kan det».
2. **IV/2SLS/Wald-estimatoren er den mest stabile enkeltteknikken** — 12/12 moderne sett. Beregnes
   nesten alltid som **redusert form / første steg** (`RF/FS`), og de to betingelsene (relevans +
   eksklusjon/eksogenitet) drøftes hver gang.
3. **Paneldata/fixed effects og probit/logit** var tunge i 2014–2021, men er **fraværende i de
   ordinære settene 2022–2025** (probit/logit dukker fortsatt opp i utsatt-sett). De skal med i boka,
   men underordnet kausalitetstemaene.
4. **Ren tidsserie/Durbin–Watson/GLS (regime A) er utgått** — 0 forekomster på 12 år. Skal ikke
   struktureres inn (nevnes eventuelt kort som historisk kontekst).
5. **R-kode-skriving og «minimal korrekt spesifikasjon fra en figur»** er en ny, fast sjanger siden 2022.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen i den moderne æraen. «Vekt» angir typisk andel.

### A. «Tolk denne koeffisienten» — kjernen i hvert sett
Avlese én koeffisient fra R-/Stata-utskrift og formulere korrekt tolkning **avhengig av funksjonsform**:
- *Nivå–nivå:* «én enhets økning i x er assosiert med β enheters endring i y, alt annet likt».
- *Log–nivå* (`log(y) ~ x`): ≈ **100·β prosent** endring i y per enhet x.
- *Log–log:* β er en **elastisitet** («10 % økning i x → 10·β % endring i y»).
- *Dummy:* forskjell i forventet y mellom gruppe 1 og referansegruppe (0), gitt de andre variablene.
- *Interaksjon* (`d:x`): forskjell i helning/effekt mellom gruppene.
- **Krav:** «assosiert med» (aldri «forårsaker»); legg til **«adjusting for / keeping … fixed»** ved
  kontrollvariabler; skill **prosentpoeng (percentage points) vs. prosent (percent)** ved dummy-/LPM-utfall.
- **Vekt/år:** flere deloppgaver i alle 12 moderne sett.

### B. Konstantleddets tolkning
Forventet y når **alle** regressorer = 0, uttrykt som betinget forventning `E[y|x=0, d=0, …]`.
Sensor forventer at studenten påpeker at tolkningen ofte er **meningsløs** (timelønn for en 0-åring;
`lfaminc=0` ⇒ familieinntekt = 1 dollar; recentrert `age` ⇒ konstant = utfall ved gjennomsnittsalder).

### C. Konfidensintervall
`β̂ ± z_{α/2}·SE` med **z-verdier fra vedlagt normaltabell** (ikke t; store n). Faste verdier:
90 % → 1,64/1,65; 95 % → 1,96; 99 % → 2,58; 68 % → 1; 80 % → 1,28; 86 % → 1,48.
Krav: (i) frekvenstolkning («intervaller konstruert slik dekker den sanne parameteren X % av gangene
over gjentatte utvalg»), (ii) signifikanskonklusjon (inneholder intervallet 0?). Ofte spør oppgaven om
et «rart» konfidensnivå (86 %, 68 %, 80 %) nettopp for å tvinge fram korrekt tabellbruk.

### D. t-test og hypotesetesting
`t = (estimat − c)/SE`. Test mot annen verdi enn 0 (`(β̂ − 1)/SE`) forekommer. **Ensidig test** via
symmetri i normalfordelingen (`P(Z<−z)=1−P(Z<z)`) og riktig plassering av forkastningsmassen i **én**
hale — en klassisk felle som testes eksplisitt (V2023 d). Fra p-verdi bakover: `p = 2·(1−Φ(|t|))`.

### E. F-test for felles nullhypotese (flere koeffisienter = 0)
Sensor bruker begge formene om hverandre:
- **RSS/SSR-form:** `F = [(SSR_r − SSR_ur)/q] / [SSR_ur/(n−k−1)]`.
- **R²-form:** `F = [(R²_ur − R²_r)/q] / [(1 − R²_ur)/(n−k−1)]`.
Sammenlign med kritisk verdi fra **Fₘ,∞-tabell** (vedlagt; f.eks. F₂,∞ = 3,00 på 5 %). **Homoskedastisitet
antas eksplisitt** for denne testen — å nevne dette premieres. Den restringerte modellen med bare
konstantledd gir `SSR_r = TSS = (n−1)·SD_y²`.

### F. Utelatt variabel-skjevhet (OVB), «baklengs» — signaturoppgaven
OVB-formelen `β̃₁ = β̂₁ + β̂₂·cov(x₁,x₂)/var(x₁)` brukes på to måter, ofte i samme sett:
1. **Kvalitativt:** forklare hvorfor en koeffisient endrer seg (synker/vokser) når en variabel legges til,
   og koble fortegnet på biasen til fortegnet på `β̂₂` og på korrelasjonen mellom regressorene.
2. **Kvantitativt:** regne ut **ukjent kovarians/korrelasjon** mellom to regressorer gitt to regresjoner
   (V2023 j, V2024 c, V2025 g, V2023-utsatt f). Å beherske dette begge veier er nesten garantert poeng.

### G. Kausal tolkning + antakelser
Standardsvar: OLS gir kausaleffekt bare hvis **betinget uavhengighet / ingen gjenstående utelatte
variabler** (regressoren «as good as randomly assigned» gitt kontrollene). Sensor forventer at studenten
**er skeptisk** og navngir **konkrete plausible utelatte variabler** i akkurat den konteksten
(evne, motivasjon, helse, kosthold, alkohol, søvn, stress …).

### H. Instrumentvariabler / Wald-estimator
Foretrukket beregning: **IV = redusert form / første steg** (`RF/FS`). Ved binært instrument regnes RF
og FS som forskjeller i grupperte gjennomsnitt/andeler (kryssingstabell). To betingelser drøftes alltid:
- **Relevans (relevance):** signifikant første steg (t/F-test; tommelfingerregel F > 10).
- **Eksklusjon/eksogenitet (exclusion/exogeneity):** instrumentet påvirker y bare via den endogene
  variabelen og er ukorrelert med feilleddet.
For binære andeler: `var = p(1−p)/N`; uavhengige grupper ⇒ ingen kovarians ⇒ SE for første steg.
Ugyldige/svake instrumenter skal **identifiseres** (ikke-signifikant første steg; uventet fortegn på
IV-estimatet som avslører eksklusjonsbrudd — V2023 m–o).

### I. 2SLS-oppsett og LATE
Skrive **første steg** (endogen variabel på instrument + kontroller) og **andre steg** (utfall på
predikert endogen + kontroller) eksplisitt. Tolke koeffisienten som **LATE** (lokal gjennomsnittlig
behandlingseffekt for compliers) under heterogene effekter; utelukke defiers.

### J. Regresjons-diskontinuitet (RDD)
Når behandling tildeles ved en **terskel** på en løpende score: identifiser designet. Tar ikke alle over
terskelen behandlingen ⇒ **fuzzy RDD**, estimert som **2SLS** med terskelindikatoren `1[score>c]` som
instrument og en **kontinuerlig funksjon av scoren** (minst lineær) som kontroll. Lokal effekt ved
terskelen. Antakelse: potensielle utfall er kontinuerlige i scoren. Robusthetssjekk: bunching-histogram,
balanse i kovariater rundt terskelen. (V2025 oppg. 4, V2022-utsatt 2b, V2023-utsatt e.)

### K. Difference-in-differences (DiD)
2×2-estimat: `(ȳ_beh,etter − ȳ_beh,før) − (ȳ_kontroll,etter − ȳ_kontroll,før)`. Regresjonsform:
`y = b₀ + b₁·(after×treated) + b₂·treated + b₃·after + e`, der **b₁** er DiD-estimatet. Nøkkelantakelse:
**parallelle/felles trender** (common trend) — skal forklares i oppgavens kontekst, og gjerne vurderes
mot pre-trend-tall i dataene (V2024-utsatt 2). R-kode med `i(firm)`/interaksjoner (V2024-utsatt d,e).

### L. LPM og predikerte sannsynligheter
Binært utfall estimert med OLS: regn predikert verdi ved innsetting; hvis den overstiger 1 (eller er < 0)
⇒ modellen er **feilspesifisert (misspecified)** og **probit/logit** ville vært bedre for prediksjon
(V2024 e, V2023-utsatt b). Poeng: probit/logit og LPM gir typisk svært like gjennomsnittlige
marginaleffekter — forskjellen betyr mest for prediksjon, ikke for kausal tolkning.

### M. Endring av måleenhet — «vis algebraen»
Skalering av y med c multipliserer alle koeffisienter (nivå) med c; ved `log(c·y)=log(c)+log(y)` endres
**kun konstantleddet**; reskalering av x endrer bare koeffisienten på den x-en (og evt. konstanten).
Sensor vil se **utledningen**, ikke bare svaret (V2023 f/h, V2024 g, V2025 f).

### N. Ikke-lineære spesifikasjoner (kvadratledd) og marginaleffekter
For `y = β₀+β_age·age+β_age²·age²`: gjennomsnittlig marginaleffekt = `β_age + 2·β_age²·x̄`. **SE for
marginaleffekten** via delta-metoden / S&W «Key Concept» for varians av en lineærkombinasjon:
`var(a·β_j + b·β_k) = a²var(β_j)+b²var(β_k)+2ab·cov(β_j,β_k)` — verdiene hentes fra den utskrevne
vcov-matrisen (V2022 f,g). Å teste avtakende helning ⇒ legge til kvadratledd og teste fortegnet.

### O. Skrive R-kode / «minimal korrekt spesifikasjon fra en figur»
Oversette en spesifikasjon til `feols(...)`-syntaks: interaksjoner med `*`/`:`, dummy-/transformasjon med
`I(...)` (`I(motheduc>=12)`, `I(age^2)`), robuste SE med `vcov="hetero"`. Fra en figur velges **minimal
korrekt spesifikasjon**: log ved eksponentiell trend, dummy+interaksjon ved to grupper, knekk-/spline-ledd
`I(x-c):I(x>c)` ved diskontinuitet i helning (V2025 oppg. 2).

### P. Paneldata / fixed effects (regime B — fortsatt pensum, sjeldnere)
Innenfor-estimator (within) vs. LSDV (dummyer); enhets- **og** tid-faste effekter; tolke at en tidsinvariant
kovariat (f.eks. `no_english`) **droppes** pga. perfekt multikollinearitet; at FE + tid-FE **ikke**
eliminerer OVB fra variabler som varierer både over tid og enhet. Første-differanse = within ved T=2.

### Q. Sant/usant og «diskuter denne påstanden»
Kortsvar med begrunnelse om konsepter: «korrelasjon impliserer ikke kausalitet» (og omvendt-fella);
«høy R² ⇒ ingen OVB» (usant); homoskedastisitet som spesialtilfelle; forventningsskjev men konsistent
estimator; attrisjon som trussel mot indre vs. ytre gyldighet (V2025-utsatt 1, V2014 oppg. 3).

---

## 4. Sensorens krav

### Faste metaregler (gjentas nesten hvert år)
1. **«Be brief and to the point. Always motivate your answers.»** Konsise, begrunnede svar — lange
   verbale utlegninger uten regning gir ikke ekstra uttelling.
2. **Vis alle mellomsteg** når noe skal utledes/regnes — ikke bare sluttsvaret (særlig ved
   enhetsendring, OVB-regning og delta-metode).
3. **Aldri «ja/nei» alene.** Hver konklusjon skal begrunnes.
4. **Alle deloppgaver teller likt** innen sin oppgave — prioriter tiden deretter.
5. **Bruk vedlagte tabeller** (normaltabell, invers-normal, Fₘ,∞) der det trengs; les av riktig verdi.

### Sensorveiledningenes format
De nyeste veiledningene (2022–2025) er skrevet som kompakte **«ANSWER HINT»** — én til fire linjer per
deloppgave, med regnekjeden vist eksplisitt og en avsluttende tolkningssetning. Dette er den beste malen
for løsningsforslagene i boka: vis regningen kompakt, avslutt med tolkning i klartekst.

### Hva som skiller karakternivåene
- **Bestått (E):** riktig metode på et flertall av deloppgavene, med i det minste forsøk på tolkning.
- **Midtsjikt (C/D):** korrekte utregninger og standardtolkninger, men uten den kritiske drøftingen.
- **Toppsjikt (A/B):** kjennetegnet av det veiledningene fremhever:
  - **Regner OVB begge veier** og kobler biasretning til fortegn på korrelasjon/β̂₂.
  - **Er genuint skeptisk til kausalitet** — navngir konkrete utelatte variabler i konteksten, drøfter
    eksklusjonsrestriksjonen realistisk (ikke bare mekanisk).
  - Behersker **presisjons-/tabell-bakregning** (SE fra p-verdi, n fra SE), **delta-metode-SE** og
    **enhetsalgebra** — de tekniske «strekkoppgavene» som skiller topp fra midt.
  - Skiller konsekvent **prosentpoeng vs. prosent** og **z- vs. t-kritiske verdier**.
  - Ser at **R² ikke kan sammenlignes** på tvers av modeller med ulik avhengig variabel (nivå vs. log).

### Hva som gir uttelling
- **Riktig metode + tolkning** premieres; små regnefeil straffes lite når metoden og resonnementet er
  riktig («any errors in the computations should not be penalized» — V2013).
- **Kontekstforankret drøfting** av antakelser (nevne akkurat de plausible utelatte variablene for
  akkurat denne applikasjonen).
- **Presist statistisk språk:** «assosiert med … alt annet likt» vs. kausalitet; frekvenstolkning av KI;
  «feilspesifisert» ved predikert P > 1.

---

## 5. Typiske feil (eksplisitt eller implisitt straffet i veiledningene)

1. **Kausalitetsspråk uten dekning** — skrive «x forårsaker y» der bare en betinget korrelasjon er vist.
   Sensor insisterer på «assosiert med … keeping … fixed».
2. **Prosent vs. prosentpoeng** — blande sammen ved dummy-/andel-/LPM-utfall og log-modeller.
3. **z vs. t** — bruke t-tabell der store n tilsier normaltabellen; eller lese av feil kritisk verdi for
   et uvant konfidensnivå (86 %, 68 %, 80 %).
4. **Ensidig test feil** — plassere forkastningsmassen i feil hale eller bruke tosidig kritisk verdi.
5. **Glemme homoskedastiske-antakelsen ved F-testen** — den forutsettes eksplisitt og skal nevnes.
6. **Sammenligne R² på tvers av ulik avhengig variabel** (nivå vs. log) — ugyldig, men fristende felle.
7. **Bare påstå OVB-retning uten å regne den** når data tillater utregning; eller feil kobling mellom
   biasfortegn og korrelasjonsfortegn.
8. **Konstantleddet tolket bokstavelig** uten å påpeke at x=0 er urealistisk/utenfor datastøtte.
9. **LPM-diagnosen glemt** — ikke se at predikert P > 1 (eller < 0) betyr feilspesifikasjon.
10. **IV-diagnostikk hoppet over** — utelate relevans- og/eller eksklusjonsdrøftingen, eller ikke fange
    at et uventet IV-fortegn avslører et ugyldig instrument.
11. **Enhetsendring uten algebra** — bare oppgi hvilke koeffisienter som endres i stedet for å vise
    `log(c·y)=log c+log y`.
12. **Ja/nei uten begrunnelse**, eller lange essay der en kompakt regnekjede + én tolkningssetning var alt
    som ble bedt om.
13. **FE-fallgruver** — tro at enhets- + tid-faste effekter fjerner all OVB, eller ikke se at en
    tidsinvariant kovariat er kollineær med enhets-FE.

---

## 6. Notasjons- og formelapparat

Boka bør bruke den notasjonen sensor faktisk bruker (Stock & Watson + `fixest`/R).

### Må beherskes aktivt (regne, utlede, avlese fra utskrift)

**1. OLS-modellen og estimatoren**
- `y = β₀ + β₁x₁ + … + β_k x_k + u`; enkel OLS for hånd: `β̂₁ = cov(x,y)/var(x)`, `β̂₀ = ȳ − β̂₁x̄`.
- Avlese estimat, SE (i parentes), N, R², RMSE/SSR fra `feols`/`etable`- eller `regress, robust`-utskrift.

**2. Standardfeil, t og konfidensintervall**
- `t = (β̂ − c)/SE`; `KI = β̂ ± z_{α/2}·SE`; z fra vedlagt Φ- og Φ⁻¹-tabell.
- Fra p-verdi: `p = 2·(1 − Φ(|t|))`; bakregning `SE = SD/√n`.

**3. F-test (begge former)**
- `F = [(SSR_r − SSR_ur)/q]/[SSR_ur/(n−k−1)]` = `[(R²_ur − R²_r)/q]/[(1 − R²_ur)/(n−k−1)]`.
- `TSS = (n−1)·SD_y²`; `R² = 1 − SSR/TSS = 1 − RMSE²/var(y) = var(ŷ)/var(y)`.

**4. Funksjonsformer og marginaleffekter**
- Nivå–nivå, log–nivå (≈100·β %), log–log (elastisitet).
- Kvadratledd: gjennomsnittlig marginaleffekt `β_x + 2β_{x²}x̄`.
- SE for lineærkombinasjon (delta-metode): `var(aβ_j+bβ_k)=a²var(β_j)+b²var(β_k)+2ab·cov(β_j,β_k)`.

**5. OVB-formelen** — `β̃₁ = β̂₁ + β̂₂·cov(x₁,x₂)/var(x₁)`; løses også for `cov`/`cor`.

**6. Dummyer og interaksjoner** — referansegruppe; interaksjon `d:x` = differansen i helning;
`I(motheduc>=12)`, `I(age^2)`, `I(x-c):I(x>c)` (spline/knekk).

**7. IV / 2SLS / Wald**
- `β̂_IV = RF/FS = S_{ZY}/S_{ZX}`; binært instrument ⇒ `[Ē(y|z=1)−Ē(y|z=0)]/[Ē(x|z=1)−Ē(x|z=0)]`.
- Første steg `x = π₀ + π₁z + kontroller`; andre steg `y = β₀ + β₁x̂ + kontroller`.
- Binær andel: `var = p(1−p)/N`; første-stegs-`F = t²`; tommelregel F > 10.

**8. DiD** — `y = b₀ + b₁(after×treated) + b₂treated + b₃after + e`; 2×2-differanse; common trend.

**9. RDD (fuzzy)** — instrument `1[score>c]`, kontroll = kontinuerlig funksjon av score; lokal effekt.

**10. Paneldata** — `y_it = β₀ + β₁x_it + α_i (+ τ_t) + u_it`; within/LSDV; T=2 ⇒ within = første-differanse.

**11. LPM / probit / logit** — `Pr(y=1)=G(β₀+…)`, logit `G(z)=1/(1+e^{−z})`, probit `G(z)=Φ(z)`;
predikert P, marginaleffekt `∂P/∂x` (logit `β·p(1−p)`); LPM-feilspesifikasjon når P∉[0,1].

### Må forstås kvalitativt (drøftes, sjelden utledes)
- Betinget uavhengighet / «as good as random assignment»; indre vs. ytre gyldighet.
- Attrisjon, partiell compliance, «failure to follow treatment protocol» → IV-løsning.
- LATE / compliers / defiers; heterogene behandlingseffekter.
- Weak instruments; J-test for over-identifiserende restriksjoner (eksogenitet, ikke relevans).
- Heteroskedastisitet: OLS fortsatt forventningsrett, men SE feil ⇒ robuste SE.

### Skal IKKE bygge strukturen (utgått pensum, tross tidligere sett)
- **Durbin–Watson / autokorrelasjonstesting, GLS/WLS-utledning, ren tidsserie/dynamiske modeller** — 0
  forekomster 2014–2025.
- **Method of moments, Slutsky, BLUE-/forventningsrett-bevis som hovedoppgave, ren sannsynlighetsteori** —
  klassisk regime A, praktisk talt borte.
- Merk likevel: heteroskedastisitet (som begrep) og delta-metoden lever videre i moderne, anvendt form.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **OLS-koeffisienttolkning i alle funksjonsformer** (nivå/log-nivå/log-log/dummy/interaksjon), med
   presist «assosiert med … keeping … fixed» og prosentpoeng-vs-prosent. 100 % frekvens, flere
   deloppgaver hvert sett.
2. **Kausalitetsvurdering + OVB (begge veier).** Forklare fortegnsendring når variabler legges til, og
   regne ut ukjent korrelasjon/kovarians fra to regresjoner. Ryggraden i hver oppgave 1.
3. **IV / 2SLS / Wald** med RF/FS-beregning og full relevans-/eksklusjonsdrøfting. 12/12 moderne sett.
4. **t-test, konfidensintervall og F-test** med korrekt tabellbruk (z fra normaltabell; Fₘ,∞), ensidig
   vs. tosidig, homoskedastisk-antakelse ved F. Nesten hvert sett.
5. **Avlese R-/Stata-utskrift** (estimat, SE, N, R², SSR/RMSE, vcov-matrise) og **skrive `feols`-kode**.

### Nivå 2 — må kunne (de fleste sett, betydelig andel av poengene)
6. **Funksjonsform og enhetsendring** — log/elastisitet, `log(c·y)=log c+log y`, hvilke koeffisienter
   som endres, med algebra.
7. **LPM og predikerte sannsynligheter** — y>1-fella og probit/logit-diagnosen.
8. **Konstantleddets tolkning** som betinget forventning, med realisme-forbehold.
9. **Difference-in-differences** — 2×2, regresjonsform, common-trend-drøfting (voksende).
10. **Kvadratledd + gjennomsnittlig marginaleffekt** og **delta-metode-SE** (toppnivå-differensiator).

### Nivå 3 — bør kjenne til (lavfrekvent, men skiller toppkarakterene / kan komme igjen)
11. **Regresjons-diskontinuitet (fuzzy = 2SLS)** — ny sjanger 2024–2025, sannsynlig gjenganger.
12. **Presisjon ↔ utvalgsstørrelse** — bakregne SE/SD/n fra p-verdi og CLT (V2025).
13. **Paneldata / fixed effects** — within/LSDV, tid+enhet, kollinearitet, T=2-ekvivalensen. Fortsatt
    pensum, men fraværende i de siste ordinære settene.
14. **Probit/logit-mekanikk** — predikert P og marginaleffekt (dukker opp i utsatt-settene).
15. **Sant/usant-konseptspørsmål** — korrelasjon/kausalitet, R²/OVB, attrisjon, homoskedastisitet.

**Prognose for neste ordinære sett:** Én stor OLS-tolkningsblokk (60–80 %) bygd på én R-utskrift med
4–7 `feols`-regresjoner over ett anvendt datasett (lønn, utdanning, helse, boligpriser e.l.):
koeffisienttolkning i flere funksjonsformer → konstantledd → KI/t/F → OVB (regnet begge veier) →
enhetsendring → skrive én `feols`-linje. Deretter én mindre kausalitetsoppgave (20–40 %) — **IV/Wald**
med RF/FS og betingelsesdrøfting er mest sannsynlig, med **DiD** eller **fuzzy RDD** som nære alternativer.
Vedlagt normaltabell, invers-normal og Fₘ,∞-tabell forutsettes brukt.

---

## 8. Kildeliste

Alle filer i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/ECON3150/`.

**Sensorveiledninger/løsningsforslag lest grundig (28):**
`sensorveiledning/ECON3150-V2004-`, `-V2005-`, `-V2010-` … `-V2025-sensorveiledning.pdf`
(ordinære V2004, V2005, V2010–V2025) samt utsatt-veiledningene `-V2014-utsatt-` …
`-V2025-utsatt-sensorveiledning.pdf` (V2014–V2025, unntatt V2019).

**Ordinære eksamenssett lest grundig (2013–2025):** `eksamen/ECON3150-V2013.pdf` …
`ECON3150-V2025.pdf` (V2022–V2025 er integrert i sensorveiledningene med full oppgavetekst).

**Ordinære sett + utsatt-sett skummet for temaregistrering:** `eksamen/ECON3150-H2003`, `-V2004`,
`-V2005`, `-V2006`, `-H2006`, `-H2007`, `-H2008`, `-V2009` … `-V2012`, samt `utsatt/`-mappen
(21 sett H2003–V2025).

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse ECON3150
(scratchpad: `fagbeskrivelse-econ3150.md`; kilde `https://www.uio.no/studier/emner/sv/oekonomi/ECON3150/`).

**Merknader om kildene:**
- **Regimeskifter:** Arkivet spenner over tre kurs-regimer (klassisk tidsserie 2003–2013; anvendt Stata
  2014–2021; R/`feols` 2022–2025). Analysen prioriterer det moderne, gjeldende regimet; eldre sett brukes
  til å datere hva som er utgått pensum.
- **Manglende filer:** Ingen sensorveiledninger for 2006–2009; V2019 mangler utsatt-veiledning. Dette
  påvirker ikke frekvensmønsteret, som er svært stabilt.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og
  omstrukturert med egne ord. Ingen oppgavetekst, fasit eller sensorformulering er gjengitt ordrett.
  Modelligninger og statistiske formler er standard faglig notasjon uten opphavsrettsvern.
