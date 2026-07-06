# Eksamensanalyse: ECON2130 Statistikk 1 (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på 8 ordinære eksamenssett (V2018–V2025), 7 sensorveiledninger for ordinær eksamen (V2018–V2024) og 5 utsatt-eksamener med sensorveiledning (2018, 2021, 2023, 2024, 2025) — totalt 13 komplette sett, 12 med fasit. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorveiledninger. Emnet gis kun i vårsemesteret, så arkivet dekker i praksis hele den moderne eksamenshistorikken. Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

### Form

| Periode | Form | Struktur | Kommentar |
|---|---|---|---|
| 2018–2019 | Skriftlig skoleeksamen på papir, **3 timer**. Hjelpemidler: *alle trykte og skrevne* + to godkjente kalkulatorer. Statistiske tabeller vedlagt settet (normalfordeling; Poisson-tabell i 2018, t-tabell fra 2019) | **2 store hovedoppgaver** med lik vekt, 6–8 deloppgaver hver som bygger på hverandre | Eneste år med eksplisitte karakterterskler i sensorveiledningen (se del 4) |
| 2020–2021 (korona) | Hjemme-/digital eksamen. I 2021 hadde kandidatene **R foran seg** og lastet ekte datasett fra nett (V-Dem, WVS, Our World in Data) | 3 oppgaver (utsatt 2021: 4 oppgaver) med eksplisitt prosentvekting (40/20/40) | Nye sjangre: hands-on dataanalyse i R, simuleringsbasert uavhengighetstest, kausalitetsdrøfting |
| 2022–2024 | Digital skoleeksamen **uten R-tilgang** (eksplisitt bekreftet i V2023-veiledningen). R-utskrifter og ferdige `qnorm`/`qt`/`pnorm`-verdier gis i oppgaveteksten i stedet for tabeller | **3 oppgaver** (typisk 40/35/25 eller lik deloppgavevekt), 13–16 deloppgaver totalt | Fast innledningstekst fra 2023: deloppgaver bygger på hverandre, men manglende mellomsvar kan erstattes av en eksplisitt antakelse |
| 2025 | Skoleeksamen (4 timer iht. gjeldende emnebeskrivelse). Oppgavene ber kandidaten **laste inn medfølgende CSV-datasett og kjøre R-analyse** (GSS-data ordinært, simulert RCT-datasett på utsatt) | 3 oppgaver, 20/40/40 (utsatt 45/20/35) | **Regimeskifte:** hands-on R er tilbake som del av skoleeksamen. Utsatt-veiledningen 2025 sier eksplisitt at svar «med R» og «for hånd» gir lik uttelling der begge er mulige. Settet i 2025 er på nynorsk |

### Vektings- og strukturhistorikk

| Sett | Oppgaver og vekting | Deloppgaver |
|---|---|---|
| V2018 | 2 × 50 % (lik vekt per deloppgave innen oppgaven) | 8 + 6 |
| V2018-utsatt | 2 oppgaver | 5 + 5 |
| V2019 | 2 oppgaver, alle deloppgaver lik vekt | 7 + 7 |
| V2020 | 3 oppgaver (uten oppgitt vekting) | 4 + 7 + 7 |
| V2021 | 40 / 20 / 40 (deloppgavevekter delvis spesifisert) | 8 + 3 + 8 |
| V2021-utsatt | 40 / 30 / 20 / 10 | 9 + 4 + 3 + 2 |
| V2022 | 3 oppgaver, alle deloppgaver i settet teller likt | 4 + 7 + 6 |
| V2023 | 40 / 35 / 25 | 6 + 4 + 4 |
| V2023-utsatt | 15 / 25 / 30 / 15 / 15 (5 oppgaver) | 2–3 per oppgave |
| V2024 | 3 oppgaver | 3 + 6 + 6 |
| V2024-utsatt | 3 oppgaver | 5 + 6 + 4 |
| V2025 | 20 / 40 / 40 | 4 + 6 + 5 |
| V2025-utsatt | 45 / 20 / 35 | 7 + 4 + 5 |

**Konstanter på tvers av alle 13 sett:**
- Hver oppgave er pakket inn i en **anvendt, ofte samfunnsfaglig kontekst**: oppfinnervirksomhet, rasefordommer (listeeksperiment), entreprenørforsinkelser, lønnsinntekt (NLSY), virusutbrudd, Birkebeinerrennet, demokrati og BNP (V-Dem), tillit/korrupsjon (World Values Survey), CO₂-utslipp, OL-dopingkontroll, inntektsulikhet (SSB), legemiddelvurdering, aksjeporteføljer, skoleresultater, kvinner i realfag, billettkontroll hos Ruter, fiske, fotballmål, skatteeksperiment (RCT).
- **R går igjen i hvert eneste sett**: skrive/beskrive simuleringskode, tolke gitt R-utskrift, eller (2021 og 2025) faktisk kjøre analysen. Pseudokode og presis verbal algoritmebeskrivelse godtas alltid som alternativ til ekte kode.
- Fordi **alle trykte/skrevne hjelpemidler er tillatt** (formelark ligger i praksis foran kandidaten), gir ren formelgjengivelse nesten ingen uttelling. Poengene ligger i metodevalg, forutsetningsdrøfting og tolkning.
- Ekte og realistiske datakilder brukes gjennomgående; sensorveiledningen for utsatt 2018 refererer til pensumbøkene til **Imai (Quantitative Social Science)** og **Yakir** — kursets faglige profil er «statistikk for samfunnsvitere med R», ikke matematisk statistikk med bevis.

---

## 2. Temafrekvens-tabell

Basert på alle 13 sett (8 ordinære + 5 utsatt; utsatt-settene er fullverdige og teller likt). Celleverdi = antall sett i årsgruppen der temaet forekommer som egen deloppgave eller mer.

| Tema | 2018–19 (3 sett) | 2020–21 (3) | 2022–23 (3) | 2024–25 (4) | **Gjenganger-score** |
|---|---|---|---|---|---|
| Hypotesetesting (oppsett H₀/H₁, testobservator, konklusjon) | 3 | 3 | 3 | 4 | **13/13 = 100 %** |
| Betinget sannsynlighet / total sannsynlighet / Bayes / uavhengighet | 3 | 3 | 3 | 4 | **13/13 = 100 %** |
| R-kode: skrive/forklare simulering eller tolke utskrift | 3 | 3 | 3 | 4 | **13/13 = 100 %** |
| Konfidensintervall med tolkning | 2 | 3 | 3 | 4 | **12/13 = 92 %** |
| Deskriptiv statistikk: histogram, kvantiler, `summary`, spredningsdiagram | 3 | 3 | 3 | 3 | **12/13 = 92 %** |
| Regneregler for forventning/varians, lineærkombinasjoner og -transformasjoner | 3 | 3 | 2 | 4 | **12/13 = 92 %** |
| Sentralgrenseteoremet / normaltilnærming (eksplisitt begrunnet) | 2 | 3 | 2 | 4 | **11/13 = 85 %** |
| To-utvalgs-sammenligning (gjennomsnitt eller andeler) | 3 | 3 | 2 | 3 | **11/13 = 85 %** |
| Normalfordeling: standardisering og tabell-/`pnorm`-oppslag | 3 | 1 | 3 | 4 | **11/13 = 85 %** |
| Estimatoregenskaper: forventningsrett (bevis), varians/SE, konsistens | 1 | 4 | 2 | 4 | **11/13 = 85 %** |
| Monte Carlo-simulering som *løsningsmetode* (ikke bare kodetolkning) | 3 | 3 | 3 | 2 | **11/13 = 85 %** |
| Type I-/type II-feil og teststyrke | 3 | 1 | 1 | 2 | **7/13 = 54 %** |
| Kausalitet, seleksjonsskjevhet, representativitet, forsøksdesign | 1 | 3 | 1 | 2 | **7/13 = 54 %** |
| Binomisk fordeling (med forutsetningsdrøfting) | 0 | 1 | 2 | 3 | **6/13 = 46 %** |
| p-verdi som eget spørsmål (beregning/tolkning/stokastisk egenskap) | 1 | 0 | 1 | 4 | **6/13 = 46 %** |
| Poisson-fordeling (med forutsetningsdrøfting og rate-skalering) | 1 | 0 | 0 | 3 | **4/13 = 31 %** (3 av 4 siste sett!) |
| Kombinatorikk / trekking uten tilbakelegging / symmetriargument | 1 | 0 | 1 | 1 | **3/13 = 23 %** |
| Simultanfordeling / kontingenstabell | 0 | 2 | 0 | 0 | **2/13 = 15 %** |
| Betinget forventning E(X\|A) | 1 | 1 | 0 | 0 | **2/13 = 15 %** |
| Korrelasjon (beregne/tolke) | 0 | 0 | 0 | 1 | **1/13 = 8 %** (først i V2025) |
| **Enkel lineær regresjon** | 0 | 0 | 0 | 0 | **0/13 = 0 %** |

**Viktigste funn:**
1. **Regresjon står i emnebeskrivelsen, men er aldri testet på åtte år.** Korrelasjon dukket opp første gang i V2025 (tolke `cor` + avvise kausal tolkning). Samvariasjon testes ellers alltid grafisk (spredningsdiagram) eller via gruppesammenligning (to-utvalgstest på indikatorvariabel). En eksamensrettet bok skal behandle regresjon lett og heller bore i to-utvalgsapparatet.
2. **Inferens-kjeden estimator → SE → KI → test → p-verdi → styrke er eksamens ryggrad** og bærer 60–80 % av poengene i hvert sett, alltid i anvendt kontekst.
3. **Poisson har eksplodert i 2024–25** (fiske, arbeidsulykker, fotballmål) etter seks års pause — med samme faste krav hver gang: nevn alle tre forutsetningene, skaler raten til riktig intervall, bruk at summer av uavhengige Poisson-variabler er Poisson.
4. **«Er p-verdien en stokastisk variabel?»** er stilt ordrett tre ganger (V2022, V2024-utsatt, V2025-utsatt) — et signaturspørsmål for emnet.
5. **Kausalitet/design er et fast innslag** som skiller dette kurset fra et rent metodefag: kontrafaktisk resonnement (V2018), skjevt testutvalg under pandemi (V2020), «blir Colombia rikere av OECD-medlemskap?» (V2021-utsatt), ikke-representativ kursevaluering (V2021-utsatt), RCT-design (V2025-utsatt).

---

## 3. Oppgavetype-katalog

De 14 sjangrene som faktisk går igjen, med krav destillert fra sensorveiledningene.

### A. Hendelsesalgebra og betinget sannsynlighet
- **Krav:** Regn P(A∩B) = P(B)P(A\|B), total sannsynlighet i nevner, Bayes for «omvendt» betinging, addisjonssetningen for union, komplement. Uavhengighet skal **sjekkes**, ikke antas: vis P(A∩B) = P(A)P(B) eller P(A\|B) = P(A) med tall.
- **Frekvens:** 13/13. I 2025 rendyrket som abstrakt oppgave (kun symboler, 20 %) — begge 2025-settene åpner eller fortsetter med identisk mal.
- **Omskrevet eksempel:** «Du får oppgitt P(B) = 0,25, P(A\|B) = 0,4 og P(A∩Bᶜ) = 0,6. Finn P(A∩B), P(A), P(A∪B) og P(B\|A), og avgjør med begrunnelse om A og B er uavhengige.»

### B. Fordelingsvalg med forutsetningsdrøfting
- **Krav:** Identifiser riktig fordeling (binomisk/Poisson) og **drøft forutsetningene i konteksten**. Binomisk: n uavhengige delforsøk, to utfall, konstant p. Poisson: konstant rate, uavhengige hendelser i disjunkte intervaller, ingen to hendelser samtidig. V2024-veiledningen er eksplisitt: **alle tre Poisson-forutsetningene må nevnes for full uttelling**, og de beste svarene peker på hvilken forutsetning som er mest tvilsom i konteksten (f.eks. at mål i fotballkamper kan påvirke hverandre).
- **Frekvens:** binomisk 6/13, Poisson 4/13, minst én av dem i 9/13 sett.
- **Omskrevet eksempel:** «Antall arbeidsulykker per dag antas Poisson-fordelt med rate 3. Forklar hvilke antakelser dette bygger på, og drøft kort om de er rimelige her.»

### C. Rate-skalering og summer av fordelinger
- **Krav:** Skaler Poisson-raten proporsjonalt med intervallet (årsrate 6 → månedsrate 1/2; 8-timersdag → 9-timersdag ganger 9/8; 240 kamper → λ·240). Bruk at summen av uavhengige Poisson-variabler er Poisson med summen av ratene, og at binomisk X gir andel p̂ = X/n med kjent E og Var. Hendelser på gjennomsnittsform må oversettes til totalform: «snitt per kamp > 3» ⇔ «sum > 720».
- **Frekvens:** i alle Poisson-settene (4/13) + andelstransformasjoner i alle binomisk-settene.
- **Omskrevet eksempel:** «Sesongen består av 240 kamper med λ = 2,7 mål per kamp. Hva er fordelingen til totalt antall mål, og hva er sannsynligheten for at gjennomsnittet per kamp overstiger 3?»

### D. Regneregler for forventning og varians
- **Krav:** E og Var av aX + bY, konstanter ut i annen potens i variansen, og **eksplisitt påpekning av at uavhengighet (Cov = 0) trengs i variansleddet** (uthevet i V2018- og V2023-utsatt-fasit). Lineære transformasjoner av typen «dagbot = 100 000 · X» eller profittfunksjoner E(bX − kn²). Diskrete fordelinger satt opp fra frekvenstabell med E = Σx·p og Var = Σ(x−E)²·p.
- **Frekvens:** 12/13.
- **Omskrevet eksempel:** «A ~ N(0,1) og B ~ N(2,3) er uavhengige, og C = 2A + B. Finn E(C) og Var(C), og forklar hvilken rolle uavhengigheten spiller.»

### E. Normalfordeling, standardisering og normaltilnærming
- **Krav:** Standardiser Z = (X−μ)/σ og slå opp (tabell i papir-æraen, `pnorm` senere). Når eksakt z-verdi mangler i tabellen: ta snittet av naboverdiene (eksplisitt godkjent metode i V2023). Normaltilnærming av binomisk via N(np, np(1−p)) og av gjennomsnitt/rater via CLT — **CLT skal navngis** når den brukes, og de beste svarene kommenterer når tilnærmingen er dårlig (lite utvalg, skjev fordeling). V2024-utsatt-fasiten oppgir kursets tommelfingerregel: **n ≥ 30** før CLT påberopes for ukjent fordeling.
- **Frekvens:** 11/13 CLT-begrunnelse, 11/13 standardisering.
- **Omskrevet eksempel:** «Porteføljeverdien om tre måneder er normalfordelt med forventning 100 og varians 2. Hva er sannsynligheten for en verdi over 104?»

### F. Estimatoregenskaper og estimatorvalg
- **Krav:** Vis forventningsretthet ved å regne E(θ̂) med regnereglene og få θ (fast øvelse: p̂ = X/n for binomisk, λ̂ = X/n for Poisson, differansen mellom gruppegjennomsnitt i V2025-utsatt). Utled Var(θ̂) og SE = √Var, med **plug-in av estimatet** når parameteren inngår i variansuttrykket. Videregående varianter: velg vekten a i θ̂ = a·X/n_A + (1−a)·Y/n_B slik at estimatoren er forventningsrett, og deriver variansen for å finne minimumsvarianten (V2021-utsatt, V2024-utsatt — svaret er å vekte proporsjonalt med utvalgsstørrelsen); sammenlign gjennomsnitt mot median via simulering (kriterier: forventningsretthet først, deretter lav varians); ikke-lineære transformasjoner som exp(X̄) er konsistente men ikke forventningsrette (V2019, eksplisitt merket «bare de aller beste»).
- **Frekvens:** 11/13.
- **Omskrevet eksempel:** «Vis at p̂ = X/(0,98n) er en forventningsrett estimator for smitteandelen, og finn standardfeilen.»

### G. Konfidensintervall med z/t-valg og presis tolkning
- **Krav:** Standardform θ̂ ± (kritisk verdi)·SE. Metodesignalet sensor ser etter er valget av kritisk verdi:
  - Kjent populasjonsvarians eller stort utvalg → **z** (1,645 / 1,96 / 2,576).
  - Ukjent varians estimert fra lite utvalg → **t med n−1 frihetsgrader** (99 %-KI med t₂₆ = 2,779 i V2023; t med 10 frihetsgrader gir «ekstra uttelling» i V2022 når n = 10).
  - Ved stort n godtas z som tilnærming til t, **men valget skal begrunnes** (V2019, V2021-utsatt, V2022).
  - Uvante nivåer forekommer: 90 % (V2021-utsatt, V2022), 99 % (V2023, V2024), **85 %** (V2025-utsatt) — kandidaten må kunne finne kritisk verdi selv, ikke bare huske 1,96.
  - **Tolkningen er et eget poeng:** «ved gjentatte utvalg vil (nivå) % av slike intervaller dekke den sanne parameteren». V2021-utsatt sier rett ut at kandidater **skal trekkes** for å si at intervallet inneholder parameteren med 95 % sannsynlighet — parameteren er ikke stokastisk. V2022 gjentar samme advarsel. V2023-utsatt snur spørsmålet: «dekker intervallet ditt μ?» (ja — fordi dataene ble trukket fra en kjent fordeling).
- **Frekvens:** 12/13.
- **Omskrevet eksempel:** «Konstruer et 99 % konfidensintervall for forventet testresultat basert på de 27 elevene, og forklar hvorfor du bruker t-fordelingen.»

### H. Hypotesetest etter oppskrift
- **Krav:** Fast firetrinnsoppskrift som fasitene følger slavisk: (1) definer notasjon og sett opp H₀/H₁ — **retningsbestemte spørsmål gir ensidig test**, og tosidig der konteksten er ensidig gir «noe, men ikke full uttelling» (eksplisitt i V2021-utsatt og V2024); (2) velg testobservator og **begrunn fordelingen** (z ved kjent varians/stort n, t ved estimert varians — V2024-utsatt underkjenner z ved n = 25); (3) velg signifikansnivå *på forhånd* når oppgaven ikke låser det; (4) sammenlign mot kritisk verdi eller p-verdi og **konkluder i kontekst**. Varianter som må sitte: én-utvalgs z og t; to-utvalgs t med pooled varians S² = [(n₁−1)S₁² + (n₀−1)S₀²]/(n₁+n₀−2) (V2019, V2023); to-utvalgs z med separate varianser (V2020, V2021-utsatt, V2023-utsatt); to andeler med felles p̂ under H₀ (V2024-utsatt); test av lineærkombinasjon av forventninger, f.eks. H₀: μ_m = 0,9·μ_k med SE = √(σ²ₘ/n_m + 0,81·σ²ₖ/n_k) (V2020); Welch/`t.test` i R-årene (V2021, V2025-utsatt). En hypotese kan også avgjøres direkte fra et KI (V2022).
- **Frekvens:** 13/13 — alltid den tyngste enkeltkomponenten.
- **Omskrevet eksempel:** «Ny medisin ga snittforløp 14,3 dager (s = 3, n = 71) mot 15 dager med gammel medisin. Formuler hypoteser for at den nye er bedre, gjennomfør testen og forklar valget av ensidig alternativ.»

### I. p-verdi-forståelse
- **Krav:** Tre nivåer testes: (i) *beregne* p-verdien fra testobservatoren (Φ(z) ensidig, 2Φ(−|z|) tosidig, `pnorm`/`pt`); (ii) *tolke* den i kontekst («sannsynligheten for et minst like ekstremt utfall dersom H₀ er sann» / «det laveste signifikansnivået som gir forkastning»); (iii) det konseptuelle signaturspørsmålet: **er p-verdien en stokastisk variabel?** Fasitsvar: ja — den er en funksjon av utvalget, et nytt utvalg gir en ny p-verdi. Kombineres med beslutning på flere nivåer samtidig (p = 0,08 → forkast på 10 %, ikke på 5 %).
- **Frekvens:** 6/13 som eksplisitt deloppgave, hvorav alle fire 2024–25-sett.
- **Omskrevet eksempel:** «Finn p-verdien til testen, gi en tolkning av den i denne sammenhengen, og avgjør om p-verdien selv er en stokastisk variabel.»

### J. Type I-/type II-feil og teststyrke
- **Krav:** Definer begge feiltypene *i oppgavens kontekst* (ikke bare abstrakt), forklar at P(type I) = α, og at lavere α øker type II-risikoen. Drøft hvilken feil som er mest alvorlig gitt kostnadene (dyr medisin vs. helsegevinst, V2022). Teststyrke beregnes analytisk under en gitt sann parameterverdi (V2018-utsatt: styrke 0,977; V2019: 0,577) **eller simuleres i R**: trekk data under H₁, kjør testen, gjenta 1000 ganger, andelen forkastninger er styrken (V2024: `rpois` + `t.test` i løkke gir styrke ≈ 0,82; V2024-utsatt: ≈ 0,5 — «tolk resultatet»). Bayes-vrien fra V2021: gitt 2 % sanne effekter, 80 % styrke og 5 % nivå, er bare ca. 25 % av signifikante funn ekte — replikasjonskrise-logikk som eksamensoppgave.
- **Frekvens:** 7/13.
- **Omskrevet eksempel:** «Simuler teststyrken: trekk 50 Poisson-observasjoner med λ = 4, test H₀: λ = 3,5 på 1 %-nivå, gjenta 1000 ganger og rapporter andelen forkastninger. Hva sier tallet deg?»

### K. Monte Carlo-simulering i R
- **Krav:** Kursets mest særpregede sjanger. Fast mønster: definer utfallsrommet som vektor (`rep`, `0:4`, kortstokk som `c(rep(1,13), …)`), trekk med `sample` (med/uten tilbakelegging og evt. `prob=`-vektor) eller `rpois`/`rnorm`/`rbinom`, pakk i `replicate(1e4–1e7, …)`, og estimer sannsynligheten som `mean()` av en logisk vektor. Spesialiteter som er testet: betinget sannsynlighet ved å **filtrere** simuleringene på betingelsen først (flertall kvinner gitt minst to, V2018-utsatt; sum = 17 gitt sum ≥ 10, V2023-utsatt); blandingsfordeling ved å sette en andel av utvalget til null og trekke resten fra normalfordelingen (konkursaksjen, V2023); simuleringsbasert forkastningsgrense ved å ta 95 %-kvantilen av differanser under H₀ (median-testen, V2021-utsatt). Sensorpraksis er rund: **alle ekvivalente framgangsmåter med omtrent riktig svar gir full uttelling**, pseudokode godtas, småfeil R ville fanget straffes ikke — men (V2022) **null uttelling for et teoretisk svar der oppgaven krever simulering**, og antall trekk må være høyt nok til presisjon.
- **Frekvens:** 11/13 som løsningsmetode; kodeskriving/-tolkning 13/13.
- **Omskrevet eksempel:** «Forklar hvordan du i R ville simulert sannsynligheten for at samlet forsinkelse i tre byggeprosjekter overstiger seks måneder, med presis beskrivelse av hvert trinn.»

### L. Tolke R-utskrift og grafer
- **Krav:** Lese `summary`/`quantile`/`mean`/`sd`/`var`/`aggregate`-utskrifter og histogram/spredningsdiagram/boksplott. Faste tolkningspoeng: persentiler i ord («90 % av inntektene ligger under …», P90/P10 som ulikhetsmål i V2022), standardavvik som typisk avvik i samme enhet som dataene, **mean vs. median som symmetri-/skjevhetsindikator** (V2020, V2023-utsatt — kvartilresonnement avslører hvor massen ligger), sammenligning av grupper (hvilken rad er kvinner? begrunn ut fra konteksten), og gjenkjenning av fordelingsform i histogrammer (V2023: pek ut hvilket histogram som har samme sentrum men firedobbel varians — «svaret må begrunnes for å gi uttelling»). Konseptuell klassiker: forklar hva `var(replicate(1e4, mean(rnorm(n, μ, σ))))` estimerer, og sammenlign med det teoretiske σ²/n (V2020).
- **Frekvens:** 12/13.
- **Omskrevet eksempel:** «Utskriften viser mean = 4,70, sd = 0,507 og p50 = 4,88 for merketidene. Forklar hva standardavviket forteller, og hva forholdet mellom gjennomsnitt og median antyder om fordelingens form.»

### M. Datakritikk: seleksjon, representativitet, kausalitet
- **Krav:** Verbal drøfting med presise begreper. Tre gjengangere: (i) **seleksjonsskjevhet** — andelen positive blant testede symptomatiske er ikke befolkningsandelen (V2020); 22 frivillige av 151 studenter er ikke et tilfeldig utvalg, og da hjelper ingen statistisk test (V2021-utsatt); frivillig testdeltakelse kan være korrelert med sykdomsstatus (V2020); (ii) **korrelasjon ≠ kausalitet** — omvendt kausalitet, felles bakenforliggende årsak eller spuriøsitet må nevnes konkret (demokrati/BNP V2021, OECD/CO₂ V2021-utsatt, utdanning/inntekt V2025); (iii) **kontrafaktisk logikk og design** — effekten av å bo i sør krever det uobserverte kontrafaktiske utfallet, som bare kan erstattes av sammenlignbare enheter ved «as-if random» tildeling (V2018); randomisert eksperiment som gullstandard (skatteeksperimentet V2025-utsatt).
- **Frekvens:** 7/13 — og i begge 2025-settene.
- **Omskrevet eksempel:** «Testen viser at OECD-land har signifikant høyere utslipp. Kan vi konkludere med at Colombias utslipp vil øke når landet blir OECD-medlem? Begrunn.»

### N. Hands-on R-dataanalyse (2021- og 2025-regimet)
- **Krav:** Full arbeidsflyt i R på ekte data: `read.csv`, lag avledede variabler (`ifelse`-indikator, BNP per innbygger), `hist`/`plot`/`boxplot`/søylediagram, beregn andeler/gjennomsnitt, kjør `t.test` (Welch er standardutskriften og godtas; egen forklaring av hva utskriften viser kreves for full uttelling), og avslutt med KI-tolkning og kausalitetsforbehold. V2025-utsatt: R-svar og håndregning gir lik uttelling der begge er mulige.
- **Frekvens:** 4/13 (V2021, V2021-utsatt, V2025, V2025-utsatt) — men det er nåtidsregimet.
- **Omskrevet eksempel:** «Last inn datasettet, lag en indikator for minst 13 års skolegang, og test på 1 %-nivå om inntektsforskjellen mellom gruppene er signifikant. Gjør rede for forutsetningene.»

---

## 4. Sensorens krav

### Karakternivåer (eksplisitt kun i V2018, men konsistent med senere praksis)
- **Bestått (E):** omtrent tre deloppgaver besvart uten store svakheter; strengere hvis én hoveddel er nesten blank.
- **C:** svarer på oppgaver fra **begge/alle hoveddeler** og har rimelig dekkende svar på flertallet.
- **A:** dekkende svar på alle spørsmål — men **svakheter i enkelte deloppgaver tolereres**. Toppkarakter krever altså bredde, ikke feilfrihet.

### Faste metaregler på tvers av veiledningene
1. **Formlene er «gratis» — begrunnelsen er poenget.** Siden formelark og tabeller i praksis er vedlagt, sier V2023-veiledningen rett ut at passiv gjengivelse av formler som «ikke helt passer» skal gi begrenset uttelling. Uttellingen ligger i å velge riktig verktøy og forklare hvorfor.
2. **Metodefrihet med begrunnelsesplikt.** Gjennomgående formulering: alle framgangsmåter som ville gitt omtrent riktig svar, gir full uttelling; ingen metode er «bedre» enn andre (V2022, V2023, V2024). Men metoden må faktisk gjennomføres: teoretisk svar der simulering etterspørres gir null (V2022), og simulering der eksakt svar kreves aksepteres bare når oppgaven åpner for det.
3. **R-syntaksfeil tilgis.** Manglende parentes o.l. som R selv ville flagget, trekker ikke (V2023). Det som vurderes er om *algoritmen* er riktig og presist beskrevet.
4. **Feilforplantning straffes én gang.** Galt mellomsvar skal i minst mulig grad straffes videre i påfølgende deloppgaver (V2019); fra 2023 sier oppgaveteksten eksplisitt at man kan anta en manglende mellomverdi og bruke den åpent.
5. **Forutsetninger er selvstendige poeng.** «Diskuter forutsetningene» er en egen deloppgave i nesten hvert sett, og selv der det ikke spørres, markerer fasitene at gode svar nevner uavhengighet, konstant rate/p og normalitetsgrunnlag uoppfordret.
6. **Tolkning i kontekst avslutter hvert resonnement.** Fasitene formulerer alltid konklusjonen i oppgavens virkelighet («det er tilstrekkelig evidens for høyere diversitet i Afrika»), aldri bare «forkast H₀».

### Hva som skiller toppkandidatene (markert i fasitene)
- Begrunner **hvorfor** estimatoren er forventningsrett/normalfordelt, ikke bare at den er det (V2021: «for full uttelling bør kandidaten også begrunne …»).
- Kommenterer **z-vs-t-valget uoppfordret** (V2022: «ekstra uttelling dersom studenten kommenterer at man må bruke t-test»).
- Tar opp **praktisk/økonomisk signifikans** ved siden av den statistiske (V2018: KI-et er signifikant, men spennet rommer alt fra trivielt til enormt; V2022: «er det i praksis stor forskjell på 14,5 og 15 dager?» gir «et pluss»).
- Ser **replikasjons-/seleksjonspoengene**: skjevt utvalg gjør testen verdiløs uansett utfall (V2021-utsatt); opphopning i null + skjev fordeling krever mer data før CLT bærer (V2022).
- Mestrer **strekkoppgavene** som bevisst ligger utenfor kjernestoffet: KI for exp(X̄) ved å transformere intervallgrensene («denne prosedyren har vi ikke sett i kurset, så bare de aller beste kan forventes å få det til», V2019); kji-kvadrat-lignende simuleringstest (V2021).

---

## 5. Typiske feil (eksplisitt nevnt eller innbakt i veiledningene)

1. **KI-tolkningsfellen** — å si at intervallet inneholder parameteren med 95 % sannsynlighet. Dette er den eneste feilen to veiledninger eksplisitt sier at kandidater *skal trekkes for* (V2021-utsatt, V2022). Riktig: ved gjentatte utvalg dekker slike intervaller parameteren i 95 % av tilfellene.
2. **z der t kreves** — bruke normalfordelingens kritiske verdier ved lite utvalg og estimert varians (n = 10 i V2022, n = 25 i V2024-utsatt, n = 27 i V2023). Speilfeilen finnes også: å bruke t uten begrunnelse er greit ved stort n, men umotivert bytte trekker.
3. **Tosidig test på et ensidig spørsmål** — «er den nye medisinen *bedre*», «er OECD-land *rikere*» krever ensidig alternativ; tosidig gir redusert uttelling (V2021-utsatt, V2024).
4. **Anta uavhengighet uten sjekk** — både i sannsynlighetsregning (multiplisere uten begrunnelse) og i varianser av summer (glemme at Cov = 0 krever uavhengighet).
5. **Utelate Poisson-/binomisk-forutsetninger** — nevne én av tre betingelser og gå videre; V2024 krever alle tre for full uttelling.
6. **Glemme rate-/intervallskalering** — bruke årsraten på en måned, 8-timersraten på en 9-timersdag, eller per-kamp-raten på en sesong.
7. **Svare teoretisk når simulering kreves** (null uttelling, V2022) — eller levere simulering med så få trekk at svaret blir upresist (V2024 advarer eksplisitt).
8. **Behandle et selektert utvalg som representativt** — regne videre på testandelen/svarprosenten uten å problematisere hvem som er med i utvalget (V2020, V2021-utsatt).
9. **Kausal tolkning av korrelasjon eller gruppeforskjell** — trekke politikk-konklusjoner («Afghanistan blir rikere av demokrati») av observasjonsdata; fasitene krever omvendt kausalitet/konfundering/spuriøsitet nevnt.
10. **Normaltilnærming ukritisk ved skjev fordeling eller lite utvalg** — inntektsdata med opphopning i null trenger større n før CLT bærer (V2022); n = 25 er under kursets tommelfingerregel (V2024-utsatt).
11. **P(X ≥ k) uten komplement-omskriving** — regnefeil unngås med 1 − P(X ≤ k−1); diskret variabel krever at «< 600» blir «≤ 599» (V2025-utsatt).
12. **Matematikk uten ord** — riktig regning uten forutsetninger og kontekst-konklusjon gir aldri full uttelling i dette emnet; alle fasiter avslutter i klartekst.

---

## 6. Formel- og notasjonsapparat

Notasjonen er stabil gjennom hele perioden. Læreboken bør bruke nøyaktig denne.

### Emnets notasjonsvalg (inkl. avvik fra andre kurs)
- **N(μ, σ²) angis med VARIANS som andre argument** — N(100, 2) betyr σ = √2; N(4, 4/50) er CLT-fordelingen til λ̂. Dette er den viktigste snublesteinen mot R: **`rnorm(n, mean, sd)` tar standardavvik**, og eksamen har testet nettopp oversettelsen — `rnorm(100, 2, 4)` trekker fra N(2, 16) (V2023-utsatt). Boken må drille konverteringen begge veier.
- Norske fagtermer brukes konsekvent: **forventningsrett** (ikke «unbiased»), **konsistent**, **testobservator**, **forkastningsområde/kritisk verdi**, **signifikansnivå**, **teststyrke**, **standardfeil**. Hypoteser skrives H₀/H₁ (av og til H_A).
- Estimatorer med hatt: p̂ = X/n, λ̂ = X/n, β̂ = Ȳᴮ − Ȳᴷ, θ̂. Utvalgsgjennomsnitt X̄, utvalgsstandardavvik S (mot populasjonens σ).
- Sannsynlighetsnotasjonen veksler mellom P(·) og Pr(·); hendelser med ∩, ∪, komplement som Aᶜ eller A med strek.
- I den grafiske R-verdenen: fasitene bruker base-R (`hist`, `plot`, `boxplot`), men én fasit (V2019) viser tidyverse/ggplot — kandidater står fritt.

### Må beherskes aktivt (regnes med på nesten hver eksamen)

**1. Sannsynlighetsalgebra:**
- P(A∩B) = P(B)·P(A\|B); total sannsynlighet P(A) = P(A\|B)P(B) + P(A\|Bᶜ)P(Bᶜ); Bayes P(B\|A) = P(A\|B)P(B)/P(A); addisjon P(A∪B) = P(A)+P(B)−P(A∩B); uavhengighet ⇔ P(A∩B) = P(A)P(B).
- Uniformt trekk: symmetriargumentene P(trukket først) = 1/n og P(trukket i det hele tatt) = k/n; kombinatorikk med binomialkoeffisienter (₂₀C₄; hypergeometriske brøker for kortstokk).

**2. Diskrete fordelinger:**
- Binomisk: P(X = k) = C(n,k)p^k(1−p)^(n−k), E = np, Var = np(1−p). Tabell/`dbinom`/`pbinom`; P(X ≥ k) = 1 − P(X ≤ k−1).
- Poisson: P(X = k) = λ^k e^(−λ)/k!, E = Var = λ; rate-skalering λ·(t/t₀); sum av uavhengige Poisson er Poisson med λ₁+λ₂. Tabell/`dpois`/`ppois`.
- Egendefinerte diskrete fordelinger fra frekvenstabeller, med E = Σxp og Var = Σ(x−E)²p; betinget forventning E(X\|X>0) ved å renormalisere sannsynlighetene.

**3. Regneregler:**
- E(aX+bY) = aE(X)+bE(Y); Var(aX+bY) = a²Var(X)+b²Var(Y)+2abCov(X,Y), med Cov = 0 under uavhengighet; Var(aX) = a²Var(X).
- For gjennomsnitt: E(X̄) = μ, Var(X̄) = σ²/n, SE = σ/√n (estimert: S/√n).

**4. Normalfordeling og CLT:**
- Standardisering Z = (X−μ)/σ; tabelloppslag med interpolering; `pnorm`/`qnorm`.
- CLT: X̄ ≈ N(μ, σ²/n) for stort n (tommelfingerregel n ≥ 30); binomisk X ≈ N(np, np(1−p)); andel p̂ ≈ N(p, p(1−p)/n).
- Sum og lineærkombinasjon av uavhengige normale er normal.

**5. Inferens-kjeden:**
- Forventningsretthet: E(θ̂) = θ vist med regnereglene; plug-in-SE når parameteren inngår i variansen.
- KI: θ̂ ± c·SE med c = z_{α/2} eller t_{α/2, n−1}; kritiske verdier 1,282/1,645/1,96/2,326/2,576 og t-tabell/`qt`.
- Test: T = (θ̂ − θ₀)/SE mot kritisk verdi eller p-verdi; pooled varians for to utvalg S² = [(n₁−1)S₁² + (n₀−1)S₀²]/(n₁+n₀−2) med n₁+n₀−2 frihetsgrader; to andeler med felles p̂ under H₀; lineærkombinasjonstester med SE = √(a²σ₁²/n₁ + b²σ₂²/n₂).
- Teststyrke = P(forkaste H₀ \| sann parameter under H₁), analytisk via forskyvning av testobservatoren eller ved simulering.

**6. R-vokabularet** (skal kunne skrives uten R foran seg): `sample` (med `replace=` og `prob=`), `replicate`, `mean` av logisk vektor, `rnorm`/`rpois`/`rbinom`, `dbinom`/`pbinom`/`dpois`/`ppois`/`pnorm`/`qnorm`/`qt`, `read.csv`, `ifelse`, `hist`/`plot`/`boxplot`, `summary`/`quantile`/`sd`/`var`/`aggregate`, `t.test` (inkl. `alternative=` og `conf.level=`), funksjonsdefinisjon og for-løkke som alternativ til `replicate`.

### Må forstås kvalitativt
- Store talls lov (konsistens-argumentet) og forholdet til CLT.
- KI-tolkningens frekventistiske logikk og p-verdien som stokastisk variabel.
- Type I/II-avveiningen og styrke som funksjon av n, α og effektstørrelse; «signifikant funn ≠ sann effekt»-regnestykket (Bayes på forskningsresultater).
- Seleksjonsskjevhet, ikke-respons, representativitet; kontrafaktisk utfall, konfundering, omvendt kausalitet; randomisering som identifikasjonsstrategi.
- Praktisk/økonomisk vs. statistisk signifikans.

### Skal IKKE bygges tungt på (til tross for emnebeskrivelsen)
- **Enkel lineær regresjon:** aldri testet på 13 sett. Dekkes lett (én seksjon), primært som tolkning.
- **Korrelasjon:** kun én forekomst (V2025) — beregne/tolke `cor` og avvise kausal tolkning. Ingen regning med kovariansformler på data.
- Kontinuerlige fordelinger utover normalfordelingen (eksponensial, uniform osv.): aldri testet.
- Formelle bevis og momentgenererende funksjoner: forekommer ikke; alle utledninger er regneregel-manipulasjoner på 3–5 linjer.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Hypotesetest-oppskriften i alle varianter** (13/13): definer notasjon → H₀/H₁ med riktig retning → begrunnet testobservator (z/t, én/to utvalg, pooled/separat/andeler) → konklusjon i kontekst. Ensidig/tosidig-valget og z/t-valget er de to metodesignalene sensor alltid ser etter.
2. **Konfidensintervall med korrekt kritisk verdi og ordrett presis tolkning** (12/13). Tren på uvante nivåer (85 %, 90 %, 99 %) og på gjentatte-utvalg-formuleringen til den sitter feilfritt.
3. **Regnereglene for E/Var + forventningsrett-beviset** (12/13): standardbeviset E(X/(cn)) = p-typen går igjen nesten årlig, alltid med plug-in-SE som oppfølger.
4. **Monte Carlo-mønsteret i R** (13/13 kode, 11/13 som metode): utfallsrom → `sample`/`r*`-trekk → `replicate` → `mean(logisk)`. Inkluder de tre vriene: filtrering for betingede sannsynligheter, blandingsfordelinger, simulert forkastningsgrense/styrke.
5. **Fordelingsforutsetningene som ritual** (alle sett med binomisk/Poisson): tre binomisk-krav, tre Poisson-krav, CLT-vilkår — nevn alle, pek på den svakeste i konteksten, skaler raten riktig.

### Nivå 2 — må kunne (gir de fleste resterende poengene)
6. **Normalfordelingsregning** med standardisering, tabellinterpolering og normaltilnærming av binomisk/Poisson/andeler (11/13).
7. **p-verdi-teorien**: beregning begge retninger, tolkning, beslutning på flere nivåer, og signatursvaret på om p-verdien er stokastisk (alle fire 2024–25-sett).
8. **Type I/II og teststyrke** analytisk og simulert (7/13, stigende), inkludert alvorlighetsdrøfting i kontekst og V2021-regnestykket om andel sanne funn blant signifikante resultater.
9. **Deskriptiv verktøykasse**: kvantiler i ord (P90/P10), mean vs. median som formsignal, histogram-/boksplottlesing, «hvilken utskrift tilhører hvilken gruppe»-begrunnelser (12/13).
10. **Datakritikk-repertoaret**: seleksjonsskjevhet, ikke-tilfeldige utvalg, korrelasjon-vs-kausalitet med konkrete mekanismer, kontrafaktisk logikk og RCT (7/13, fast i 2025-regimet).
11. **Hands-on R-arbeidsflyt** på CSV-datasett: innlasting, avledede variabler, plott, `t.test`-utskrift forklart linje for linje — dette er 2025-formens store oppgave (40–45 %).

### Nivå 3 — bør kjenne til (differensierer mot A)
12. **Estimator-optimering**: vektede estimatorer med variansminimering (derivér og sett lik null), gjennomsnitt-vs-median-duellen via simulering, konsistens uten forventningsretthet (exp(X̄)-typen).
13. **Betinget forventning** på diskrete fordelinger (2/13, men billig når den kommer).
14. **Simultanfordelinger/kontingenstabeller** med simuleringsbasert uavhengighetstest (kji-kvadrat-logikk uten navnet, V2021).
15. **Kombinatorikk-verktøyet**: binomialkoeffisienter, hypergeometriske brøker, symmetriargumenter (3/13, alltid som åpning).
16. **Økonomisk innpakning**: forventet profitt-maksimering (derivasjon av E(π), V2024), dagbøter, porteføljerisiko som variansforståelse — boken bør vise at «økonomi-laget» alltid er tynt og statistikken under er standard.
17. **Korrelasjon og et lett regresjonskapittel** — korrelasjon er nå testet én gang og emnebeskrivelsens regresjonspunkt gjør et komebakk mulig, men invester deretter.

**Prognose for neste eksamen (V2026):** 3 oppgaver i 2025-malen. Én ren sannsynlighetsoppgave (15–20 %) i abstrakt hendelsesalgebra eller kort kontekst; én fordelings-/inferensoppgave (35–40 %) rundt binomisk eller Poisson med forutsetningsdrøfting, KI, ensidig test og p-verdi-spørsmål (Poisson har gått tre av fire siste sett — binomisk/myntkast-typen ligger også klar); og én stor dataanalyseoppgave (40–45 %) på et medfølgende CSV-datasett med R: deskriptiv start, indikatorvariabel, to-utvalgstest, KI-tolkning og kausalitets-/designdrøfting til slutt. Teststyrke-simulering og «er p-verdien stokastisk?» er de mest sannsynlige tilleggsspørsmålene. Boken bør derfor trene studenten i å *skrive* R-kode for hånd (2022–24-formen) **og** kjøre full analyse (2025-formen) — begge regimer er dokumentert i live bruk.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/ECON2130/`.

**Ordinære eksamenssett lest grundig (8):**
`eksamen/ECON2130-V2018.pdf` … `eksamen/ECON2130-V2025.pdf` (V2018–V2025, ett sett per år; emnet gis kun om våren).

**Sensorveiledninger for ordinær eksamen lest grundig (7):**
`sensorveiledning/ECON2130-V2018-sensorveiledning.pdf` … `ECON2130-V2024-sensorveiledning.pdf`. Sensorveiledning for V2025 ordinær finnes ikke i arkivet; V2025-settet er analysert via oppgaveteksten og den fullstendige utsatt-veiledningen fra samme semester.

**Utsatt-eksamener med sensorveiledning lest grundig (5 sett, 10 filer):**
`utsatt/ECON2130-V2018-utsatt.pdf` + `-sensorveiledning`, tilsvarende for V2021, V2023, V2024 og V2025.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse (scratchpad: `fagbeskrivelse-econ2130.md`). Merk at emnesiden nå bruker tittelen «Statistikk for økonomer» (samme kode, undervises hver vår; verifisert aktiv juli 2026).

**Merknader om kildene:**
- Sensorveiledningene veksler mellom bokmål, nynorsk og delvis engelsk (V2018-fasiten har engelske avsnitt); oppgavesettene V2024–V2025 er helt eller delvis på nynorsk. Analysen normaliserer alt til bokmål.
- V2020- og V2021-settene mangler forsider i arkivet (korona-årenes hjemme-/digitalformat); eksamensform for disse er utledet av innhold (nettbaserte datasett, R-krav) og av kjent UiO-praksis.
- V2018-utsatt-veiledningen refererer til pensum (Imai kap. 7.2.4, Yakir kap. 13) — nyttig forankring for lærebokens teoridisposisjon.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Formler og R-funksjonsnavn er standard faglig notasjon og ikke opphavsrettslig beskyttet tekst.
