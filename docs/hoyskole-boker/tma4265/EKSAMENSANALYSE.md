# Eksamensanalyse: TMA4265 Stokastisk modellering (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på ~41 filer i arkivet (2010–2025), som til sammen dekker ~24 eksamenssett med tilhørende løsningsforslag/sensorveiledninger. Lest grundig (oppgaver + løsninger): 2022, 2023 (typeset LF), 2020, 2021 (inkl. sensorveiledning/grading), 2016, 2024. Grundig på oppgavenivå: 2017, 2018, 2019, 2010, 2011, 2013, 2014, 2015. Skummet/registrert: øvrige. **Alt innhold er skrevet om med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasit. Matematisk/statistisk notasjon og metodenavn er standard fagspråk.
>
> **Arbeidsdeling mot TMA4245:** Grunnleggende sannsynlighetsteori (fordelingslære, forventning/varians, betinget sannsynlighet, transformasjoner, sentralgrenseteoremet) forutsettes kjent fra TMA4245 Statistikk og dekkes *der*, ikke her. TMA4265 er kurset i stokastiske **prosesser** — det bygger på grunnkurset og bruker fordelingslæren som verktøy, men tyngdepunktet er tidsutvikling av tilfeldige systemer: Markov-kjeder, Poisson-prosesser, fødsels-/dødsprosesser, køer og gaussiske prosesser/Brownsk bevegelse. Boken skal ikke duplisere grunnkursets fordelingslære; den skal forutsette den og bruke plassen på prosessapparatet.

---

## Hovedfunn (les dette først)

1. **Fem søyler bærer hele emnet, og alle fem er praktisk talt obligatoriske hvert år.** Diskret-tids Markov-kjeder (DTMC), kontinuerlig-tids Markov-kjeder / fødsels-dødsprosesser (CTMC/BD), Poisson-prosessen, køteori (M/M/·, Little), og gaussiske prosesser / Brownsk bevegelse. Et typisk sett har omtrent én stor oppgave per søyle. Boken må bygges som fem kraftige moduler, ikke som en lang liste av teknikker.

2. **Eksamensformen er bemerkelsesverdig stabil:** 4 timer, hjelpemiddelkode C (formelsamling + kalkulator + gult A5-ark), og **10 likevektede deloppgaver** (hvert år eksplisitt formulert som «all ten subproblems are equally weighted»). Formelarket er alltid vedlagt og er *det samme* fra år til år — det inneholder alle de tunge formlene (Chapman-Kolmogorov, Kolmogorovs ligninger, BD-stasjonærformelen θₖ, M/M/1- og M/M/∞-fordelingene, Little, betinget gaussisk tetthet). Eksamen tester derfor **oppsett, modellvalg og tolkning**, ikke formelpugg.

3. **Topp 3–4 gjengangertemaer** (gjenganger-score = andel sett der temaet er minst én deloppgave):
   - **DTMC: klassifisering + stasjonær/grensefordeling + first-step-analyse ≈ 96 %** — åpner nesten hvert sett.
   - **CTMC / fødsels-dødsprosess med stasjonærfordeling ≈ 92 %** — den andre bæresøylen.
   - **Poisson-prosess (rate, ventetid/gamma, betinging, sammensetting/tynning) ≈ 88 %**.
   - **Gaussiske prosesser / Brownsk bevegelse ≈ 71 %** og **køteori (M/M/·, Little) ≈ 71 %** deler fjerdeplassen.

4. **First-step-analyse (førstesteg-analyse) er emnets viktigste enkeltteknikk.** Den brukes til forventet treffetid/absorpsjonstid, treffsannsynligheter og forventet returtid — i både diskret og kontinuerlig tid. Des. 2020 viet en hel 40 %-oppgave til å *forklare* first-step-analyse som konsept. Boken må gjøre denne teknikken til en gjennomgående rød tråd.

5. **Simulering/pseudokode er fast innslag og økende.** Fra ~2015 og markant fra 2020 skal kandidaten skrive eller forklare algoritmer: simulere en Markov-prosess fra generatormatrisen, simulere multivariat gaussisk via Cholesky, simulere en Brownsk bro, Monte Carlo-estimering av en sannsynlighet. Merk at NTNU-tradisjonen her bruker **pseudokode / R** (`rnorm`, `chol`), ikke Python/numpy som i TMA4245. Boken trenger et eget simuleringsspor.

6. **Konseptuell modellrefleksjon vektlegges tungt.** Ikke bare «regn ut», men «forklar hvorfor prosessen er en fødsels-dødsprosess», «er Yₙ en Markov-kjede?», «eksisterer grensefordelingen, og hvorfor?». Sensuren belønner presis begrunnelse og straffer regning uten modellrettferdiggjøring.

7. **Skann-hull (viktig for produksjon):** tre filer er rene skann / bilde-PDF-er uten uttrekkbar tekst, og to eksamenssett ligger kun som cover+formelark (oppgavene ble besvart på håndark og finnes ikke i filen). Se punkt 8. Enkelte løsningsforslag (2019, 2020-skisse) er håndskrevet og OCR-et til uleselig tekst.

---

## 1. Eksamensform og utvikling

### Grunnform (stabil 2010–2025)
- **Varighet:** 4 timer. Frem til og med 2020 om formiddagen (09–13); fra 2022 flyttet desembersettene til ettermiddag (15–19). Bokstavkarakter A–F hele veien.
- **Hjelpemidler:** Kode **C** i normalår: én bestemt enkel kalkulator med tomt minne, «Tabeller og formler i statistikk» (Tapir), K. Rottmanns matematiske formelsamling, tospråklig ordbok, og **ett gult, stemplet A5-ark med egne håndskrevne notater** (begge sider). Unntaket er koronaårene 2020–2021 (kode A, alle hjelpemidler).
- **Struktur:** **10 likevektede deloppgaver**, nesten alltid gruppert i 3–6 hovedoppgaver. Fast formulering: «all ten subproblems are equally weighted». Poeng per deloppgave er som regel 10 (sum 100), av og til vektet ulikt (2020: 20/20/20/40).
- **Vedlagt formelark:** Samme kjerneark hvert år (se pkt. 6). Kandidaten slipper å pugge Chapman-Kolmogorov, Kolmogorovs forover-/bakoverligninger, BD-stasjonærformelen, kø-fordelingene og betinget-gaussisk-formelen.
- **Prosjektarbeid teller:** I flere år (dokumentert 2021, referert 2020/2022) inngår 1–2 obligatoriske prosjekter i sluttkarakteren. 2021: total S = S₁ (prosjekt, 0–20) + 0,8·S₂ (eksamen, 0–100), med krav om at eksamen isolert må gi minst E.

### Epoker
| Periode | Særtrekk |
|---|---|
| 2010–2015 | Klassisk NTNU-prosessform. Bredere «lærebok-katalog»: også **forgreiningsprosesser** (2013), embedded (innebygde) kjeder med periodeanalyse, rene dødsprosesser, og køer med tilstandsavhengige rater. Noen sett med eksplisitt konseptforklaring («forklar M/M/k vs. M/G/k»). |
| 2016–2019 | Konsolidering rundt de fem søylene. **Gaussiske prosesser modnes**: kovariansfunksjon-modellering (salinitet vs. dyp, 2017), måling/Bayes-oppdatering av skjult tilstand (skredrisiko med støyende sensor, 2016 — i praksis et enkelt skjult-Markov-/filtreringsoppsett). |
| 2020–2021 (korona) | Digital Inspera-hjemmeeksamen, kode A. Færre, større oppgaver med prosentvekt (2020: 20/20/20/40). Én oppgave var et rent **fagessay** (skriv en innføring i first-step-analyse). Sitatkrav til pensumkilder (Pinsky & Karlin; forelesningsnotater). |
| 2022–2025 | Tilbake til skoleeksamen (kode C), Inspera-cover + **håndskrevne svarark**. 10 likevektede deloppgaver. Nye vrier: **generatormatrise A og matrikseksponential exp(tA)** (2024), **aksiomatisk definisjon av stokastisk variabel** og bevis (2024), Brownsk bro med Cholesky-simulering (2023), CI for grensefordelingens komponenter (2023). Emnet heter nå «Stokastisk modellering» (tidligere «Stochastic Processes»). |

### Utviklingstrekk (viktigst for boken)
1. **Simulering/pseudokode inn for fullt.** Simulere multivariat gaussisk via Cholesky (2022, 2023), Brownsk bro (2023), Markov-prosess fra A (2024), Monte Carlo-anslag for en sannsynlighet (2024). NTNU bruker R-idiomer (`rnorm`, `chol`, `outer`), ikke Python.
2. **Matriseformalisme for CTMC.** Generatormatrise (infinitesimalmatrise) A og tolkning av P(t) = exp(tA) dukket opp i 2024 — en mer «lineæralgebraisk» innpakning av det samme apparatet.
3. **Grunnlagsspørsmål.** 2024 spurte om den aksiomatiske definisjonen av en stokastisk variabel og bevis for at X+Y er en stokastisk variabel — et tegn på at teoretisk stringens periodevis testes.
4. **Konseptuelle «er dette en X?»-oppgaver** er blitt en fast sjanger: er {Yₙ} en Markov-kjede? er {X(t)} en fødsels-dødsprosess? er W(t) = tB(t) en Brownsk bevegelse? (2020, 2021, 2022). Svaret krever å sjekke definisjonen punkt for punkt.

---

## 2. Temafrekvens-tabell

Celleverdi = antall registrerte sett i perioden der temaet forekommer som minst én deloppgave. Perioder: 2010–15 (≈6 sett, blandet lesing), 2016–19 (4 sett), 2020–21 (2 sett), 2022–25 (≈5 sett). Totalt ≈17 registrerte sett med brukbar oppgavetekst (skann-hull holdt utenfor). Tall for 2010–15 er nedre anslag.

| Tema | 10–15 (6) | 16–19 (4) | 20–21 (2) | 22–25 (5) | **Gjenganger-score** |
|---|---|---|---|---|---|
| **DTMC:** overgangsmatrise, Chapman-Kolmogorov, klassifisering (rekurrent/transient/periode/irredusibel), stasjonær/grensefordeling | 6 | 4 | 2 | 5 | **≈17/17 ≈ 100 %** |
| **First-step-analyse:** forventet treffe-/absorpsjons-/returtid, treffsannsynlighet (diskret + kontinuerlig) | 5 | 3 | 2 | 5 | **≈15/17 ≈ 88 %** |
| **CTMC / fødsels-dødsprosess:** rater, ratediagram, stasjonærfordeling via θₖ, generatormatrise | 6 | 4 | 1 | 5 | **≈16/17 ≈ 94 %** |
| **Poisson-prosess:** rate·t, ventetid/gamma, betinging på antall (uniform arrivals), sammensetting/tynning, sum av uavhengige | 5 | 4 | 1 | 5 | **≈15/17 ≈ 88 %** |
| **Køteori:** M/M/1, M/M/∞, M/M/c/tap-system, Little (L=λW), tapt andel, forventet antall i system | 5 | 3 | 1 | 3 | **≈12/17 ≈ 71 %** |
| **Gaussiske prosesser / Brownsk bevegelse:** BM-egenskaper, betinget normal, kovariansfunksjon, Brownsk bro, sjekk «er dette BM?» | 3 | 3 | 2 | 4 | **≈12/17 ≈ 71 %** |
| **Eksponensialfordeling som byggekloss:** minneløshet, sojourntid, konkurrerende eksponensialer (min), sum → gamma | 5 | 3 | 2 | 4 | **≈14/17 ≈ 82 %** |
| **Betinget forventning / dobbel forventning / total sannsynlighet** (regneverktøy gjennom hele emnet) | 5 | 3 | 2 | 4 | **≈14/17 ≈ 82 %** |
| **Simulering / pseudokode / Monte Carlo** (Markov-prosess, multivariat gaussisk, Brownsk bro, MC-anslag) | 2 | 1 | 2 | 4 | **≈9/17 ≈ 53 % — sterkt økende, ~80 % i 2020–25** |
| **Modellrefleksjon «er dette en Markov-kjede / BD-prosess / BM?»** | 2 | 2 | 2 | 3 | **≈9/17 ≈ 53 %** |
| **Sammensatt Poisson / dobbel forventning for total sum** (E og Var for ΣCᵢ) | 3 | 2 | 0 | 1 | **≈6/17 ≈ 35 %** |
| **Uniformisering / innebygd (embedded) Markov-kjede for CTMC** | 3 | 1 | 1 | 2 | **≈7/17 ≈ 41 %** |
| **Grensefordeling: eksistens/entydighet-argument (regularitet)** | 3 | 2 | 2 | 3 | **≈10/17 ≈ 59 %** |
| **Sentralgrenseteorem-tilnærming av prosessstørrelse** (f.eks. gamma-ventetid ≈ normal) | 1 | 1 | 0 | 2 | **≈4/17 ≈ 24 % — ny/økende** |
| **Forgreiningsprosess (branching)** | 2 | 0 | 0 | 0 | **≈2/17 ≈ 12 % — nesten utdødd etter 2015** |
| **Generatormatrise A + matrikseksponential exp(tA)** | 0 | 0 | 0 | 2 | **2/17 — ny sjanger 2024** |

**Viktigste funn:**
- **DTMC og CTMC/BD er ryggraden** — nesten alltid hver sin store oppgave, og begge hviler på det samme stasjonær-/grense-apparatet og på first-step-analyse. Bygg boken rundt denne parallellen (diskret ↔ kontinuerlig), akkurat slik 2020-essayoppgaven ba om.
- **Eksponensialfordelingen er emnets kjæledegge blant fordelingene** — minneløshet, sojourntider, konkurrerende («min av eksponensialer») og sum→gamma er byggeklossene i hele CTMC-/Poisson-/kø-maskineriet. (Selve fordelingslæren forutsettes fra TMA4245; her handler det om *bruken* i prosesser.)
- **Poisson-prosessens tre triks** går igjen: (i) ventetid Wₙ ~ gamma(n, λ), (ii) betinget på N(t)=n er ankomsttidene uniformt fordelt, (iii) sammensetting/tynning gir nye uavhengige Poisson-prosesser (museumgjestene 2022, mindre/større feil 2018).
- **Simulering er ikke lenger valgfritt.** Fra 2020 har hvert sett minst én pseudokode-/algoritmeoppgave. Boken trenger et fullverdig simuleringskapittel med R-lignende pseudokode.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med foretrukket metode og typisk plassering.

### A. DTMC-grunnoppgaven (matrise → sannsynligheter)
- **Krav:** Fra en overgangsmatrise: fyll inn manglende rad-elementer (rader summerer til 1), regn flerstegssannsynligheter via Chapman-Kolmogorov / Markov-egenskapen, betingede sannsynligheter «bakover» P(X₂=0 | X₃=0, X₁=1) via Bayes + stasjonaritet.
- **Frekvens:** Nesten hvert sett, ofte som deloppgave 1a. Billige poeng som må sitte automatisk.
- **Omskrevet eksempel:** «Overgangsmatrisen mangler tre elementer. Bestem dem, og finn deretter P(X₅=0 | X₃=1) og den betingede sannsynligheten P(X₄=0 | X₅=0, X₃=1).»

### B. Klassifiseringsoppgaven
- **Krav:** Tegn tilstandsdiagram, avgjør reduserbar/irredusibel, finn ekvivalensklasser, avgjør transient/rekurrent for hver klasse, bestem periode, identifiser absorberende tilstander/mengder. Ofte etterfulgt av: eksisterer grensefordelingen, og er den lik stasjonærfordelingen? (krever regularitet: irredusibel + aperiodisk + positivt rekurrent).
- **Frekvens:** Svært høy. Ofte kombinert med et parametrisk oppsett (α, β, φ i [0,1]) der klassifiseringen avhenger av parameterverdiene (2023).
- **Omskrevet eksempel:** «For matrisen med parametere α, β, φ ∈ [0,1]: tegn diagrammet og angi når hver kant finnes, gi vilkårene for irredusibilitet, bestem periodene, og avgjør om kjeden er rekurrent.»

### C. Stasjonær-/grensefordelingsoppgaven
- **Krav:** Sett opp π = πP (eller πᵀ = Pᵀπ) pluss normeringen Σπᵢ=1, løs det lineære systemet. Tolk resultatet som langsiktig andel tid i hver tilstand; beregn avledede størrelser (langsiktig kostnad/inntekt per dag, andel av ord som er substantiv, andel dager været skifter).
- **Frekvens:** ≈100 % (som deloppgave). Nesten alltid en tolknings-/anvendelsesdel etterpå.
- **Omskrevet eksempel:** «Finn den langsiktige andelen tid i hver værtilstand, og beregn den langsiktige andelen dager der været skifter fra dagen før.»

### D. First-step-analyse-oppgaven (kjerneferdigheten)
- **Krav:** Definer vᵢ = E[treffetid | start i i], sett opp vᵢ = 1 + Σⱼ Pᵢⱼ vⱼ med v(mål)=0, løs systemet. Varianter: forventet absorpsjonstid (setningslengde til punktum, 2022), forventet returtid til en tilstand (der man modifiserer betingelsen n≥1, 2023), treffsannsynlighet fₙ (hvilken hendelse inntreffer først, 2021), forventet tid til to biler ved pumpa (2024). Kontinuerlig variant: bruk sojourntidens forventning 1/vᵢ som «kostnaden» for hvert steg.
- **Frekvens:** ≈88 %. **Emnets viktigste utledningsferdighet** — 2020 viet hele Oppgave 4 (40 %) til å forklare den.
- **Omskrevet eksempel:** «En setning starter med et substantiv og slutter med punktum. Bruk first-step-analyse til å finne forventet antall ord i setningen.»

### E. Poisson-prosess-oppgaven
- **Krav:** Modellér antall hendelser i (0,t] som Poisson(λt); regn punktsannsynligheter og haler; forventet tid til n-te hendelse = n/λ (og fordelingen er gamma(n,λ) — på formelarket); betinget på N(t)=n er ankomsttidene uniforme (gir f.eks. P(ingen i (0,5] | 2 i (0,10]) = (1/2)²); sammensetting av uavhengige Poisson-prosesser (mindre + større feil), tynning med sannsynlighet p (rask/langsom gjest). Ofte koblet med sammensatt sum ΣCᵢ (total inntekt/kostnad) via dobbel forventning/varians.
- **Frekvens:** ≈88 %.
- **Omskrevet eksempel:** «Kunder ankommer et parkeringshus etter en Poisson-prosess med rate 0,5 per minutt. Finn P(ingen kunde de første 5 min), forventet antall de første 15 min, og — gitt at to ankom de første 10 min — sannsynligheten for at ingen ankom de første 5 min.»

### F. Fødsels-dødsprosess-oppgaven
- **Krav:** Argumentér for at prosessen er en BD-prosess (kontinuerlig indeks, hopp ±1, eksponensielle sojourntider, Markov-egenskap), oppgi fødselsrater λᵢ og dødsrater µᵢ, tegn ratediagram, sett opp balanselikningene (rate inn = rate ut) og finn stasjonærfordelingen via θₖ = (λ₀···λₖ₋₁)/(µ₁···µₖ) og π₀ = 1/Σθₖ. Kjenn igjen spesialtilfeller: konstant λ, µᵢ=iµ → M/M/∞ (Poisson-grensefordeling); λᵢ=λ, µᵢ=µ → M/M/1 (geometrisk).
- **Frekvens:** ≈94 %.
- **Omskrevet eksempel:** «Antall kunder i garasjen modelleres som en fødsels-dødsprosess med ankomstrate λ og total serviceraten iµ når det er i kunder. Finn ratene, tegn diagrammet, og bestem den langsiktige sannsynligheten for full garasje.»

### G. Køteori-oppgaven (M/M/·, Little)
- **Krav:** Identifiser kømodellen (M/M/1, M/M/∞, M/M/c med kapasitet/tap), bruk grensefordelingen fra formelarket, beregn forventet antall i systemet L, forventet oppholdstid W via Little L=λ_a·W (der λ_a er *effektiv* ankomstrate, korrigert for tapte kunder), andel tapte/blokkerte kunder, andel tid systemet er tomt. Ofte en økonomisk vri (spart strøm når tomt; ny λ som holder inntekten konstant).
- **Frekvens:** ≈71 %.
- **Omskrevet eksempel:** «Vis at antall raske gjester er en M/M/∞-kø, finn grensefordelingen (Poisson), og beregn ved Little forventet antall gjester i museet.»

### H. Gaussisk prosess / betinget normal
- **Krav:** Skriv en endelig samling prosessverdier som en multivariat normalvektor med gitt middel- og kovarians-struktur; bruk betinget-gaussisk-formelen (på formelarket) til E(X_A|X_B) og Var(X_A|X_B); modellér/tolk en kovariansfunksjon (eksponentiell/markovsk Cov(Xₛ,Xₜ)=σ²e^{−α|t−s|}, salinitet mot dyp; bivariat normal GPS-posisjon 2024). Ofte: finn fordelingen til en lineærkombinasjon X+Y.
- **Frekvens:** ≈71 % (sammen med BM).
- **Omskrevet eksempel:** «En GPS-posisjon (X,Y) er bivariat normal med gitt middel, standardavvik og korrelasjon 0,9. Finn den betingede fordelingen til Y gitt X=9, og fordelingen til W=X+Y.»

### I. Brownsk bevegelse-oppgaven
- **Krav:** Bruk BM-definisjonen (uavhengige, stasjonære, normalfordelte inkrementer med varians σ²·Δt, B(0)=0): standardiser og regn P(B(t)>a); betinget sannsynlighet gitt en senere observasjon (via betinget normal / Brownsk-bro-struktur, Cov(B(s),B(t))=min(s,t)); avgjør om en transformasjon er BM ((1/a)B(a²t) er det; tB(t) er ikke); utled middel- og kovariansfunksjon for en Brownsk bro. Modellkontekst: aksjekurs, eiendomspris med drift.
- **Frekvens:** Inngår i BM/gaussisk-søylen (~71 %).
- **Omskrevet eksempel:** «Aksjekursen modelleres som en Brownsk bevegelse med variansparameter σ². Finn sannsynligheten for at kursen overstiger en grense kl. 12, og — gitt sluttkursen kl. 16 — den betingede sannsynligheten for at kursen kl. 12 var over grensen.»

### J. Simulerings-/pseudokodeoppgaven
- **Krav:** Skriv leselig pseudokode (R-lignende: `rnorm`, `chol`, `outer` er tillatt) og *forklar hvorfor den gir riktig fordeling*. Undertyper: (1) simuler multivariat gaussisk x = µ + Lz med L = Cholesky-faktor av Σ, og tilpass til betinget simulering gitt X₁=x₁; (2) simuler en Brownsk bro via kovariansmatrisen og Cholesky (fjern endepunktene der variansen er 0); (3) simuler en Markov-prosess fra generatormatrisen A (sojourntid ~ exp(vᵢ), hopp etter innebygd kjede); (4) Monte Carlo-anslag for en sannsynlighet ved gjentatt trekking fra en eksponensialfordeling og gjennomsnitt av indikatorer.
- **Frekvens:** ≈53 % totalt, men ~80 % i 2020–25. **Må ha eget kapittel/spor i boken.**
- **Omskrevet eksempel:** «La Σ = LLᵀ være Cholesky-faktoriseringen. Skriv pseudokode som trekker én realisasjon fra N(µ,Σ) gitt at du kan trekke fra N(0,I), og forklar matematisk hvorfor resultatet har riktig fordeling.»

### K. Modellrefleksjons-oppgaven («er dette en …?»)
- **Krav:** Sjekk definisjonen punkt for punkt. Er {Yₙ}=Xₙ+Xₙ₊₁ en Markov-kjede? (Nei — fremtiden avhenger av mer enn nåtilstanden.) Er den observerte totalprosessen en fødsels-dødsprosess? (Nei — dødsraten avhenger av sammensetningen, ikke bare antallet, så den er ikke minneløs.) Er tB(t) en Brownsk bevegelse? (Nei — feil inkrement-varians.) Krever presis argumentasjon mot hvert aksiom.
- **Frekvens:** ≈53 %. Skiller de sterke kandidatene.
- **Omskrevet eksempel:** «Avgjør med begrunnelse om prosessen Yₙ = Xₙ + Xₙ₊₁ er en Markov-kjede.»

### L. Konsept-/teorioppgaven
- **Krav:** Definér presist (Markov-egenskap og stasjonaritet i ord + notasjon; hva first-step-analyse er og hva den brukes til; M/M/k vs. M/G/k; aksiomatisk definisjon av stokastisk variabel). 2020 hadde en 40 %-essayoppgave; 2024 krevde et lite bevis fra sannsynlighetsaksiomene.
- **Frekvens:** Minst én teori-/definisjonsbit i de fleste sett; sjelden en hel oppgave (unntak 2020).

---

## 4. Sensorens krav (fra løsningsforslag og sensorveiledning)

Fra de typesatte fasitene (2016, 2022, 2023) og sensorveiledningen 2021:

1. **Definér modellen og notasjonen eksplisitt før du regner.** Fasitene begynner med «La X(t) = antall …, en fødsels-dødsprosess med λᵢ = …, µᵢ = …». First-step-analyse skal alltid innledes med «La vᵢ = E[…|X₀=i]». Svar uten definert modell/notasjon regnes som ufullstendige.
2. **Alle svar må begrunnes; alle nødvendige utledninger og mellomregninger skal med.** Fast setning på coveret hvert år: «All answers must be justified, and all necessary derivations and calculations must be included.»
3. **Feil som skyldes en tidligere feil straffes ikke på nytt** (eksplisitt i sensorveiledningen 2021) — *med mindre* den tidligere feilen forenkler den nåværende oppgaven urimelig. Dette premierer å vise metode selv når et tall er galt.
4. **Riktig apparat til riktig situasjon:** t-kontinuerlig BD-formel (θₖ) vs. diskret π=πP; effektiv ankomstrate λ_a (ikke rå λ) i Little når kunder mistes; sojourntid 1/vᵢ i kontinuerlig first-step-analyse; betinget-normal-formelen (ikke ad hoc) for gaussiske prosesser.
5. **Eksistens- og entydighetsargumenter skal føres, ikke antas.** For grensefordeling: sjekk irredusibel + aperiodisk + positivt rekurrent (regularitet). Fasit 2023 poengterer at stasjonærfordelingen *ikke* er grensefordeling hvis kjeden kan være periodisk (α=β=φ=0).
6. **Konklusjoner i ord og i kontekst.** Et tall uten tolkning gir ikke full uttelling: «5/24 av tiden er systemet i substantiv-tilstand, altså er en fjerdedel av de genererte ordene substantiv».
7. **Pseudokode skal være korrekt og forklart.** Fasitene viser komplett algoritme *pluss* en linje-for-linje-begrunnelse for hvorfor utdataet har riktig fordeling (Cholesky-argument, bilineær kovarians). Delvis riktig kode med riktig struktur gir delvis uttelling.
8. **Numerisk bevissthet premieres på toppnivå.** 2023 3c ber eksplisitt om å skrive θᵢ på en form som kan beregnes numerisk (unngå k! som flyter over) — et A-differensierende poeng.
9. **Modellrefleksjon skal begrunnes mot definisjonen**, ikke mot magefølelse: «ikke Markov fordi …», «ikke BD fordi dødsraten ikke er minneløs».

**Karakterskiller (fra grading 2021 + oppgavestruktur):** Bestått-nivået (E) defineres av standard-regneoppgavene (fyll inn matrise, regn π, sett opp BD-balanse, standardiser BM). C–B: korrekt first-step-analyse, riktig kø-/BD-stasjonærfordeling med riktig effektiv rate, betinget-normal-regning. A: eksistens-/entydighetsargumenter, «er dette en …?»-refleksjon med presis begrunnelse, korrekt og forklart simuleringskode, numerisk stabilitet, og de tyngste transformasjons-/bro-utledningene. (Sensor justerte i 2021 C-grensen ned fordi ~40 % fikk 0 på en first-step-oppgave, og A-grensen ned fordi grense­fordelingens degenerte tilfelle var for vanskelig — indikerer hvor de reelle vanskene ligger.)

---

## 5. Typiske feil

Feilmønstre fasit/veiledning eksplisitt adresserer eller bygger feller rundt:

1. **First-step-analyse feil oppsatt** — glemme «+1» for det første steget, feil grensebetingelse (v(mål)=0), eller — i returtid-oppgaver — å behandle start = mål som treff umiddelbart (n≥1-finessen, 2023). Dette er den enkeltfeilen som veltet flest kandidater i 2021.
2. **Forveksle stasjonærfordeling og grensefordeling** — anta at π automatisk er grensen uten å sjekke aperiodisitet; overse det periodiske degenererte tilfellet.
3. **Feil radretning i π=πP** — løse Pπ=π i stedet for πP=π (venstre vs. høyre egenvektor).
4. **Little med rå ankomstrate i stedet for effektiv rate** — i tap-/kapasitetssystemer må λ_a = λ·(1−P_blokkert). Glemmes ofte.
5. **BD-stasjonær: feil θₖ** — bytte om λ og µ i produktet, eller starte indekseringen feil (θ₀=1).
6. **Poisson: bruke rate der man skal bruke rate·t**, eller glemme at ankomsttider betinget på N(t)=n er uniforme (regner tungt i stedet for (1/2)²-trikset).
7. **Behandle en ikke-Markov-prosess som Markov** — f.eks. anta at Yₙ=Xₙ+Xₙ₊₁ eller den aggregerte kø-prosessen er Markov/BD uten å sjekke minneløsheten.
8. **Eksponensial-minneløshet misbrukt eller glemt** — enten regne langt der minneløsheten gir svaret direkte, eller påberope den for ikke-minneløse ventetider (f.eks. tid til n-te hendelse).
9. **BM: glemme at variansen skaleres med tid** (Var(B(t)−B(s)) = σ²(t−s)), eller feil kovarians min(s,t); feil oppsett av betinget normal gitt en senere verdi.
10. **Cholesky/simulering:** bruke Σ i stedet for L (Cholesky-faktoren) i x=µ+Lz; simulere en Brownsk bro uten å fjerne endepunktene der variansen er 0 (singulær Σ).
11. **Konkurrerende eksponensialer:** feil rate for «tiden til første av flere hendelser» (skal være summen av ratene), eller feil sannsynlighet for hvilken som kommer først (λᵢ/Σλ).
12. **Sammensatt sum: glemme variansleddet fra tilfeldig antall** — Var(ΣCᵢ) = E[N]Var(C) + Var(N)E[C]² (dobbel varians), ofte forenklet feil.
13. **Regning uten modellbegrunnelse / tolkning** — tall uten «hvorfor prosessen er BD» eller «hva svaret betyr», straffes.

---

## 6. Teorem-, notasjons- og formelapparat

### Hva som står på det vedlagte formelarket (og derfor IKKE skal pugges)
Samme kjerneark hvert år. Det inneholder:
- **Lov om total sannsynlighet / total forventning** (betinget på en partisjon).
- **DTMC:** Chapman-Kolmogorov P^{(m+n)}_{ij}=Σ P^{(m)}_{ik}P^{(n)}_{kj}; stasjonærligningene πⱼ=ΣπᵢPᵢⱼ, Σπᵢ=1 (for irredusibel og ergodisk kjede); mean passage time / forventet passeringstid Mᵢⱼ = 1 + Σₖ PᵢₖMₖⱼ.
- **Poisson-prosessen:** definisjon (uavhengige inkrementer, N(s+t)−N(s)~Pois(λt), N(0)=0); ventetiden Wₙ ~ gamma(n,λ) med tetthet λⁿtⁿ⁻¹e^{−λt}/(n−1)!; betinget ankomsttids-tetthet n!/tⁿ (uniforme ordningsvariable).
- **CTMC / BD:** definisjon via Pᵢ,ᵢ₊₁(h)=λᵢh+o(h) osv.; Chapman-Kolmogorov i kontinuerlig tid; grenserelasjonene (vᵢ, qᵢⱼ); Kolmogorovs forover- og bakoverligninger; grensefordelingen vⱼπⱼ=Σ qₖⱼπₖ; **BD-stasjonærformelen** π₀=1/Σθₖ, πₖ=θₖπ₀, θₖ=(λ₀···λₖ₋₁)/(µ₁···µₖ).
- **Køteori:** Little L=λ_aW, L_Q=λ_aW_Q; M/M/1-grensefordeling (geometrisk, πₖ=(λ/µ)ᵏ(1−λ/µ), krever λ<µ); M/M/∞-grensefordeling (Poisson(λ/µ)). (Eldre ark hadde også V=λ_aE[SW*_Q]+λ_aE[S²]/2.)
- **Gaussiske prosesser:** multivariat normal tetthet; **betinget-gaussisk-formelen** E(x_A|x_B)=µ_A+Σ_{A,B}Σ_B⁻¹(x_B−µ_B), Var(x_A|x_B)=Σ_A−Σ_{A,B}Σ_B⁻¹Σ_{B,A}.
- **Brownsk bevegelse:** uavhengige, stasjonære, gaussiske inkrementer med varians σ²Δt; B(0)=0.
- **Geometriske rekker:** Σaᵏ og Σkaᵏ for |a|<1.

**Konsekvens for boken:** Treningen skal ligge på å *velge* riktig apparat, *sette opp* modellen korrekt, og *utlede* det som ikke står der (first-step-systemene, klassifisering, eksistensargumenter, simuleringskode, «er dette en …?»-begrunnelser) — ikke på å memorere formlene på arket.

### Må beherskes aktivt (utledes/settes opp uten oppskrift)

**1. DTMC-maskineriet:** klassifisering (kommuniserende klasser, transient/rekurrent, periode, absorbering); oppsett og løsning av π=πP; first-step-systemer for treffetid/treffsannsynlighet/returtid; regularitet ⇒ grensefordeling = stasjonær.

**2. Poisson-prosessens verktøykasse:** rate·t-skalering, forutsetningene, sammensetting og tynning (gir nye uavhengige Poisson-prosesser), ventetid=gamma, betinget-uniforme ankomsttider, sammensatt sum via dobbel forventning/varians.

**3. CTMC/BD-maskineriet:** rater fra en verbal beskrivelse, ratediagram, balanselikninger (rate inn = rate ut), θₖ-produktet, gjenkjenning av M/M/1 og M/M/∞; sojourntid ~ exp(vᵢ) og innebygd kjede Pᵢⱼ=qᵢⱼ/vᵢ; kontinuerlig first-step-analyse; generatormatrise A og tolkning av exp(tA).

**4. Køapparatet:** modellidentifikasjon, effektiv ankomstrate ved tap, Little, L og W, tapt/blokkert andel.

**5. Gaussiske prosesser / BM:** skrive prosessverdier som MVN, betinget normal, kovariansfunksjon-modellering, BM-egenskaper og standardisering, betinget BM/Brownsk bro (Cov(B(s),B(t))=min(s,t)), «er dette BM?»-sjekk.

**6. Eksponensial-byggeklossene:** minneløshet, konkurrerende eksponensialer (min ~ exp(Σλ); P(i vinner)=λᵢ/Σλ), sum → gamma.

**7. Simuleringsapparatet:** Cholesky-simulering av MVN (x=µ+Lz), betinget simulering, Brownsk bro-simulering, simulering av Markov-prosess fra A, Monte Carlo-anslag ved indikatorgjennomsnitt.

### Notasjonskonvensjoner i settene
- {Xₙ : n=0,1,…} for diskret tid, {X(t) : t≥0} for kontinuerlig tid. Overgangsmatrise P med Pᵢⱼ=P(Xₙ₊₁=j|Xₙ=i); n-stegs P^{(n)}. Stasjonær/grensefordeling π=(π₀,π₁,…).
- CTMC: fødselsrater λᵢ, dødsrater µᵢ, total utgangsrate vᵢ (også skrevet qᵢ), hoppintensiteter qᵢⱼ, generatormatrise A. θₖ for BD-produktet.
- Poisson: rate λ; N(t) antall hendelser; Wₙ (eller Sₙ/Xₙ i eldre ark) ventetid til n-te hendelse.
- Kø: L, L_Q, W, W_Q, λ_a (effektiv/faktisk ankomstrate), µ servicerate.
- Gaussisk: X~N(µ,Σ) med **kovarians** (ikke SD) som annet argument; Cholesky-faktor L (nedre trekantet, Σ=LLᵀ); Brownsk bevegelse B(t) med variansparameter σ²; Brownsk bro B⁰(t).
- **NB — R, ikke Python:** simuleringsspråket i TMA4265-tradisjonen er R/pseudokode (`rnorm`, `chol`, `outer`), til forskjell fra TMA4245 som bruker numpy. Boken bør følge R-idiomet for dette emnet.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer 60–70 % av poengene)
1. **DTMC komplett:** overgangsmatrise-regning (Chapman-Kolmogorov, betingede sannsynligheter), klassifisering, og π=πP med tolkning. ≈100 % frekvens — åpner nesten hvert sett.
2. **First-step-analyse** i både diskret og kontinuerlig tid: treffetid, absorpsjonstid, returtid, treffsannsynlighet. Emnets viktigste enkeltteknikk og den hyppigste snublesteinen.
3. **Fødsels-dødsprosess:** rater fra beskrivelse, ratediagram, balanselikninger, θₖ-stasjonærfordeling, og gjenkjenning av M/M/1 / M/M/∞. Den andre bæresøylen.
4. **Poisson-prosessens tre triks:** rate·t og gamma-ventetid, betinget-uniforme ankomsttider, sammensetting/tynning; pluss sammensatt sum via dobbel forventning/varians.
5. **Køteori med Little:** riktig modell, effektiv ankomstrate, L og W, tapt andel, tom-andel.

### Nivå 2 — må kunne (avgjør C mot B)
6. **Gaussiske prosesser og betinget normal:** skrive prosessverdier som MVN, bruke betinget-gaussisk-formelen, kovariansfunksjon-modellering.
7. **Brownsk bevegelse:** egenskaper og standardisering, betinget BM/Brownsk bro, «er dette BM?»-sjekk.
8. **Simulering/pseudokode:** Cholesky-MVN, Brownsk bro, Markov-prosess fra A, Monte Carlo-anslag — med korrekt *og forklart* kode. ~80 % av settene siden 2020; **boken må ha et fullverdig simuleringsspor i R-stil.**
9. **Eksponensial-byggeklossene:** minneløshet, konkurrerende eksponensialer, sum→gamma — limet i hele CTMC/kø-maskineriet.
10. **Eksistens- og entydighetsargumenter** for grensefordeling (regularitet), og modellrefleksjon «er dette en Markov-kjede / BD-prosess?».

### Nivå 3 — bør kjenne til (topper karakteren, differensierer A)
11. **Generatormatrise A og matrikseksponential exp(tA)** (2024 — sannsynlig gjenbruk i moderne form).
12. **Numerisk stabilitet** (skrive θₖ / summer på en form som ikke flyter over — 2023).
13. **Uniformisering / innebygd kjede** for CTMC og periodeanalyse av embedded chains.
14. **Grunnlagsteori:** presis definisjon av Markov-egenskap/stasjonaritet, aksiomatisk stokastisk variabel og enkle bevis (2024), fagessay-format (2020).
15. **Forgreiningsprosess (branching)** — sjelden etter 2015, men på pensum; lav prioritet, men bør nevnes.
16. **Sentralgrenseteorem-tilnærming** av en prosessstørrelse (gamma-ventetid ≈ normal for stort n, 2024).

### Prognose for neste ordinære eksamen
4 timer, kode C, Inspera-cover med håndskrevne svarark, **10 likevektede deloppgaver**, vedlagt standard formelark. Forventet fordeling: én stor **DTMC**-oppgave (matrise-regning + klassifisering + π/grensefordeling + first-step-analyse), én stor **CTMC/BD**-oppgave (rater + diagram + stasjonærfordeling, ofte som en M/M/·-kø med Little og tapt andel), én **Poisson-prosess**-oppgave (ventetid/betinging/tynning, evt. sammensatt sum), og én **gaussisk/BM**-oppgave (betinget normal eller Brownsk bevegelse/bro). Minst én **pseudokode-/simuleringsdel** (Cholesky-MVN, Brownsk bro, prosess fra A, eller MC-anslag) og minst én **modellrefleksjons-/konseptdel** («er dette en …?» eller en presis definisjon). Sannsynlige roterende innslag: generatormatrise + exp(tA), numerisk stabilitet, konkurrerende eksponensialer, uniformisering.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4265/`. Filnavngivningen er uensartet (blandet årstall_beskrivelse), og desember-/august-varianter blandes; analysen bygger på faktisk innhold, ikke filnavn.

**Lest grundig — oppgaver og typesatt løsningsforslag:**
- `2016_eng.pdf` + `2016-sol.pdf` (des. 2016)
- `2022Exam_TMA4265-2022.pdf` + `2022Exam_TMA4265-solutions.pdf` (des. 2022)
- `2023_TMA4265_full.pdf` + `2023solutions.pdf` (des. 2023)
- `2020_final.pdf` (des. 2020, oppgavetekst) + `2020_sketchSol.pdf` (håndskrevet skisse, OCR delvis uleselig)
- `2021_TMA4265.pdf` + `2021_TMA4265_solutions(3).pdf` + **`2021gradingDocument.pdf`** (sensorveiledning med karakterskala og poengoppdeling)
- `2024_TMA4265.pdf` (des. 2024, oppgavetekst)

**Lest grundig på oppgavenivå (typeset oppgavetekst; løsning skummet/håndskrevet):**
- `2017_eng.pdf` / `2017_eng(1).pdf` + `2017_lf.pdf`, `2017_k_lf(1).pdf`
- `2018_eng.pdf` + `2018_lf.pdf`
- `2019(1).pdf` / `2019k.pdf` + `2019_solution(1).pdf`, `2019_k_lf.pdf` (fasit håndskrevet, OCR uleselig)
- `2010Eksamen_tma4265_des_10_eng.pdf` + `2010eksDec10lf.pdf`
- `2011Eksamen_des_11_eng.pdf` + `2011eksDec11lf.pdf`
- `2013tma4265_des_13.pdf` + `2013tma4265_hs13_solution.pdf`; `2013_k_tma4265_aug_13_eng.pdf` + `2013eksAug13lf.pdf`
- `2014tma4265_des_14_eng.pdf` + `2014tma4265_hs14_sol.pdf`; `2014_k_tma4265_aug_14.pdf` + `2014_k_tma4265_aug14_solution.pdf`
- `2015tma4265_hs15_en.pdf` (+ `2012eksDec12lf.pdf` fasit)

**Skann-hull og kjente svakheter i grunnlaget:**
- **Rene skann / bilde-PDF-er uten uttrekkbar tekst (ikke analysert):** `2015tma4265_hs15_solution.pdf`, `2025LFtma4265inspera.pdf`, `2024LFTma4265stokmodWithCommentsVer1.pdf`. Disse bør OCR-behandles eller leses manuelt i en senere fase hvis fullstendig fasit-dekning for 2015/2024/2025 ønskes.
- **Kun cover + formelark (oppgaver mangler i filen):** `2025tma4265inspera.pdf` og løsningsfilen for august 2025 — problemene ble besvart på håndark og er ikke i PDF-en. **Aug 2025-oppgavene er derfor ikke registrert** (bare formatet: 3 oppgaver, 40/40/20 poeng).
- **Håndskrevne, OCR-uleselige løsningsforslag:** `2019_solution(1).pdf` og `2020_sketchSol.pdf` gav ubrukelig tekst; oppgavetekstene for disse årene er likevel lest (2020 typeset; 2019 typeset).
- `2025chatgpt1_3Examtma4265.pdf` er tilsynelatende et AI-generert løsningsutkast (inneholder «compound Poisson»-referanse som ikke gjenfinnes i de faktiske settene) — **ikke brukt som kilde** for temaregistrering.
- Frekvenstallene for 2010–2015 er nedre anslag (blandet lesedybde, noen august/desember-duplikater).

**Emneidentitet:** Verifisert mot faktiske sett. TMA4265 «Stokastisk modellering» (7,5 sp, aktivt, skriftlig skoleeksamen) følger en Ross/Pinsky-Karlin-syllabus sentrert på Markov-kjeder (diskret og kontinuerlig), Poisson-prosesser, fødsels-dødsprosesser, køteori og gaussiske prosesser/Brownsk bevegelse. **Renewal-teori og martingaler forekommer ikke** i noe sett (bekreftet ved søk) — disse er *ikke* del av emnets eksamenstradisjon, i motsetning til det generiske «stokastisk modellering»-pensumet nevnt i oppdraget. Forgreiningsprosesser forekommer sparsomt (2013). Prosjektarbeid inngår i sluttkarakteren enkelte år.

**Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Formler og notasjon er standard faglig innhold uten verkshøyde.
