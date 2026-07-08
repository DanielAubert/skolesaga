# Eksamensanalyse: TMA4250 Romlig statistikk (Spatial Statistics), NTNU

> Grunnlagsdokument for eksamensrettet lærebok (fase 1 i produksjonsløypa). Bygger på ~20 selvstendige eksamenssett med tekst fra arkivet 2005–2025, samt tre nyere OCR-lesbare løsningsforslag (2023–2024). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsninger. Matematiske uttrykk og metodenavn er standard fagnotasjon uten verkshøyde.
>
> **Emnet er verifisert aktivt** (NTNUs emneside, status «aktiv», undervises vår 2027). 7,5 studiepoeng.
>
> **Kritisk om vurderingsformen:** Samlet karakter (bokstav) = **skriftlig avsluttende eksamen (70 %) + mappeevaluering (30 %)**. Skriftlig del er 4-timers skoleeksamen, hjelpemiddelkode C. Mappen består av tre skriftlige rapporter levert gjennom semesteret pluss én revidert sluttrapport (levert innen eksamensdagen); studenten får tilbakemelding på hver rapport og velger én å revidere. Kun den reviderte rapporten teller til mappekarakteren. Arbeidsdelingen mellom den skriftlige eksamen (teori + regning) og mappen (databaserte analyser, R/kode, rapportskriving) er avgjørende for bokstrukturen — se pkt. 1.
>
> **Arbeidsdeling mot TMA4245:** Grunnleggende sannsynlighet og statistisk inferens (fordelinger, estimering, ML, konfidensintervall, hypotesetesting) er dekket av grunnkurset TMA4245. TMA4250 er et **videregående** emne som *bygger på* dette, ikke duplikerer det. Overlappet er kort: ML-prinsippet, det multivariate normalfordelingsapparatet, betingede gaussiske fordelinger og MSE/forventningsretthet forutsettes kjent. Boken skal repetere disse **komprimert** (ett oppfriskningskapittel) og bruke energien på det som er nytt: romlig avhengighet, tilfeldige felt, punktprosesser og romlig MCMC.

---

## Hovedfunn (les dette først)

1. **Eksamen har en usedvanlig stabil tredeling som har vart uendret siden minst 2005:** hvert skriftlig sett består av tre store oppgaver med overskriftene **«Continuous random field(s)»** (kontinuerlige/gaussiske felt → kriging), **«Event random field(s)»** (punktprosesser → Poisson/Cox), og **«Mosaic random field(s)» / Markov random field** (diskrete felt → Ising/GMRF med MCMC). Nyere sett (2023–2025) har utvidet til 3–5 oppgaver, men de samme tre søylene bærer alltid ~90–100 % av poengene. **Boken bør bygges rundt disse tre pilarene, i denne rekkefølgen.**

2. **Topp gjengangere (score = andel av tekstlesbare sett der temaet er en egen deloppgave):**
   - **Gyldig kovarians-/korrelasjonsfunksjon + kriging/BLUP-prediksjon** (kontinuerlig felt): **~100 %** — pilaren i oppgave 1 i praktisk talt hvert sett.
   - **Homogen Poisson-punktprosess** (E/Var for antall punkt, sannsynligheter, tynning/thinning, betinging) — **~100 %** i oppgave 2.
   - **Markov/Gibbs random field: Ising-modellen + MCMC-simulering** (Gibbs sampler / Metropolis–Hastings) — **~95 %** i oppgave 3.
   - **GMRF med presisjonsmatrise** (betingede fordelinger, cliquer, graf) — **~55 %**, sterkt økende de siste ti år og nå fast i mosaikk-oppgaven.

3. **Emnet er teori- og utledningstungt, ikke tallregningstungt.** Til tross for hjelpemiddelkode C og kalkulator er de fleste deloppgavene «utled uttrykket for …», «spesifiser kravene til …», «sett opp minimeringssystemet (uten å løse det)», «forklar/diskuter/skisser». Kalkulatorregning er sekundært. Dette er det motsatte av TMA4245-tradisjonen.

4. **Skann-hull (viktig begrensning):** **Alle 19 `Losning_*`-filene (1997–2019) er rene skann uten OCR** (3–12 tegn tekst hver) og kunne ikke leses maskinelt. Løsningsanalysen hviler derfor på: (a) de to OCR-leste håndskrevne løsningsforslagene fra 2023 og 2024 (delvis degradert OCR), og (b) det som løsningsstrukturen kan sluttes fra oppgaveformuleringene og fasit-fragmentene i selve oppgavesettene (flere nyere sett oppgir mellomsvar). **`Exam2025_solutions` er også ren skann** (13 tegn). Oppgavesettene 1997–2004 (bokmål) og enkelte engelske varianter er også skann; topplisten for de eldste settene er derfor et nedre anslag. Ingen sensorveiledning med eksplisitte poengfordelinger var maskinlesbar.

---

## 1. Eksamensform og utvikling

### Vurderingsformen (todelt siden mappa ble innført)

Samlet karakter settes ut fra **skriftlig avsluttende eksamen (70 %)** og **mappeevaluering (30 %)**. Dette er dokumentets viktigste rammebetingelse.

| Komponent | Vekt | Form | Hva den tester |
|---|---|---|---|
| Skriftlig eksamen | **70 %** | 4-timers skoleeksamen (09:00–13:00), hjelpemiddelkode C (formelsamling «Tabeller og formler i statistikk», enkel/godkjent kalkulator, gult A5-ark med egne håndskrevne notater) | Teori, modellforståelse, utledninger, oppsett av minimeringssystemer, algoritmeskisser (pseudokode), skisser og diskusjon. Lite ren tallregning. |
| Mappe | **30 %** | Tre skriftlige rapporter gjennom semesteret + én revidert sluttrapport innen eksamensdagen. Alle må leveres; kun den reviderte teller. | Databaserte romlige analyser: variogramestimering, kriging på reelle data, simulering av punktprosesser og MRF, GMRF-inferens — typisk i R (`geoR`, `spatstat`, `INLA`/`RandomFields`-tradisjonen) med rapportskriving og figurtolkning. |

**Konsekvens for boken (arbeidsdeling teori vs. mappe):**
- Kapitlene skal ha to lag: (i) et **eksamenslag** (utledninger, definisjoner, «sett opp systemet»-oppgaver, pseudokode, skisseoppgaver) som speiler den skriftlige 70 %-delen, og (ii) et **mappelag** (praktiske dataøvelser med kode, figurtolkning, rapportmaler) som støtter 30 %-delen. Disse to har ulik karakter og bør merkes tydelig.
- Den skriftlige delen belønner **å kunne utlede og forklare**, ikke å kunne kjøre kode. Mappen er der programvaren (R) faktisk brukes. Boken må dekke begge, men ikke blande dem.

### Kontinuasjon
Ved kontinuasjon i august kan den skriftlige delen bli **muntlig**. Ved forbedring av bestått karakter må **begge** komponenter tas på nytt (skriftlig + mappe).

### Historisk utvikling av den skriftlige delen

| Periode | Struktur | Kommentar |
|---|---|---|
| ~1997–2004 | Skoleeksamen 4 t, kode C. (Kun skann i arkivet — struktur ikke maskinlest.) | Antatt samme tredeling; ikke verifisert selvstendig. |
| 2005–2019 | **Fast tredeling**: Problem 1 «Continuous random field(s)», Problem 2 «Event random field(s)», Problem 3 «Mosaic/Markov random field». 3 store oppgaver, hver med 3–5 deloppgaver. Ofte tospråklig (bokmål/nynorsk/engelsk). | Den klassiske Omre/Eidsvik/Steinsland-formen. Utledningstung. Kriging + Poisson + Ising/MCMC hver gang. |
| 2016–2019 | Samme tredeling, men mer **bayesiansk/hierarkisk** vinkling og eksplisitt **GMRF med presisjonsmatrise** inn i mosaikk-delen (2017-settet bruker hierarkisk modell, Laplace-approksimasjon, GMRF-graf; 2019 har koblede felt r(x)/s(x)). Anvendte «fortelling»-rammer dukker opp (2017: «humidity start-up», «cell firing of a rat»). | Overgang mot INLA-/GMRF-tidsånden i norsk romlig statistikk. |
| 2023–2025 | **Utvidet til 3–5 oppgaver** (2024 har 5, 2025 har 3 store), fortsatt med de tre søylene som kjerne. Nye innslag: **derivert av gaussisk felt** (2024 P3), **Neyman–Scott/klyngeprosess** (2024 P4), **intrinsisk GMRF / Besag-modell** (2023 P3, 2024 P5), **kjikvadrat-test for CSR** på rutenett (2025 P2), **nærmeste-nabo-avstandsfordeling** (2025 P2). | Emnet er blitt bredere og mer moderne, men kjernen står. Fasitene er nå håndskrevne (kun 2023–2024 OCR-lesbare). |

### Konstanter på tvers av alle epoker
- **4 timer, bokstavkarakter, hjelpemiddelkode C** på den skriftlige delen.
- **Tredelingen kontinuerlig → event → mosaikk** er den mest stabile strukturen i hele NTNUs statistikkportefølje.
- Oppgavene er **utlednings- og forklaringsdrevne**; formelsamlingen dekker grunnstatistikken, så eksamen tester romlig-spesifikk modellforståelse.
- Kontekstene er anvendte og geofaglige: geologi/reservoar (olje/vann-metning), miljø (fuktighet, forurensning), biologi (hvaltelling, rottehjerneceller/grid cells), fjernmåling. Dette gjenspeiler fagmiljøets forskningsprofil.

---

## 2. Temafrekvens-tabell

Celleverdi = antall tekstlesbare sett i perioden der temaet forekommer som minst én deloppgave. Perioder: 2005–2011 (≈6 sett med tekst), 2013–2019 (≈6 sett), 2023–2025 (3 sett). Totalt ≈15 tekstlesbare sett. **De 19 skannede løsningsfilene og de skannede eldste oppgavesettene inngår ikke** — tallene er nedre anslag for eldre perioder.

| Tema | 05–11 (6) | 13–19 (6) | 23–25 (3) | **Gjenganger-score** |
|---|---|---|---|---|
| **KONTINUERLIG (oppg. 1)** | | | | |
| Gyldig kovarians-/korrelasjonsfunksjon (positiv definitthet, symmetri, kombinasjonsregler: sum, produkt, ikke-neg. skalar) | 6 | 6 | 3 | **~15/15 = 100 %** |
| Kriging / BLUP-prediksjon: sett opp/utled minimeringssystem, vekter, prediksjonsvarians | 6 | 6 | 2 | **~14/15 = 93 %** |
| Parametertolkning: varians σ², effektiv rekkevidde (range) / korrelasjonslengde, effekt på realisasjoner + skisse | 4 | 5 | 3 | **~12/15 = 80 %** |
| Stasjonaritet / isotropi / annenordens stasjonaritet — krav og betydning | 5 | 4 | 2 | **~11/15 = 73 %** |
| Variogram (definisjon, kobling til kovarians, eksponensiell/sfærisk form, nugget) | 3 | 3 | 1 | **~7/15 = 47 %** |
| Betinget/posterior gaussisk felt: prior×likelihood → posterior, betinget forventning/varians (måling med støy) | 3 | 4 | 3 | **~10/15 = 67 %** |
| BLUE for regresjonsparametre i romlig modell (universell kriging / m(s)=Σβf(s)) | 2 | 4 | 1 | **~7/15 = 47 %** |
| Derivert av gaussisk felt (kvadratisk middel), kryss-kovarians | 0 | 1 | 1 | **~2/15 = 13 %** — nytt |
| **EVENT / PUNKTPROSESS (oppg. 2)** | | | | |
| Homogen Poisson-prosess: E/Var(N), P(N=k), forutsetninger, uavh. i disjunkte områder | 6 | 6 | 3 | **~15/15 = 100 %** |
| Ikke-homogen Poisson (intensitet λ(s)), tynning/thinning (transect, deteksjonssannsynlighet) | 3 | 4 | 1 | **~8/15 = 53 %** |
| Betinget fordeling gitt total (multinomisk/binomisk fordeling av punkt over celler) | 4 | 4 | 3 | **~11/15 = 73 %** |
| Cox-prosess (dobbeltstokastisk Poisson): E/Var, Cov(N(A),N(B)), overdispersjon | 2 | 2 | 0 | **~4/15 = 27 %** |
| Avstandsfordeling til nærmeste/i-te nærmeste punkt (nearest-neighbour) | 2 | 1 | 1 | **~4/15 = 27 %** |
| Simulering av punktprosess (skisser realisasjoner, beskriv algoritme) | 3 | 3 | 2 | **~8/15 = 53 %** |
| Klyngeprosess (Neyman–Scott / Matérn), markert punktprosess | 1 | 1 | 1 | **~3/15 = 20 %** |
| CSR-test / homogenitetstest (kjikvadrat på celletellinger; K-funksjon/klynge–regulær-vurdering) | 1 | 1 | 1 | **~3/15 = 20 %** — økende |
| **MOSAIKK / MARKOV (oppg. 3)** | | | | |
| Ising / autologistisk MRF: Gibbs-formulering ↔ Markov-formulering, cliquer, potensial | 6 | 5 | 2 | **~13/15 = 87 %** |
| MCMC-simulering: Gibbs sampler og/eller Metropolis–Hastings, aksept-sannsynligheter, konvergens/mixing | 5 | 5 | 2 | **~12/15 = 80 %** |
| Fulle betingede fordelinger (Markov-egenskap, single-site oppdatering) | 5 | 4 | 2 | **~11/15 = 73 %** |
| GMRF: presisjonsmatrise Q (krav, nullstruktur), betinget forventning/varians, graf/betinget uavhengighet | 2 | 4 | 3 | **~9/15 = 60 %** — sterkt økende |
| Intrinsisk GMRF / Besag-modell (upropert tetthet, strukturmatrise R, τ-skalering) | 0 | 1 | 2 | **~3/15 = 20 %** — nytt |
| Bayesiansk bildeanalyse: posterior [L\|d] for diskret felt, klassifisering, beslutning | 4 | 2 | 0 | **~6/15 = 40 %** |
| Nabolagssystem: første/annen ordens, maksimale cliquer, symmetriantakelser | 4 | 3 | 2 | **~9/15 = 60 %** |
| **TVERRGÅENDE** | | | | |
| Hammersley–Clifford (Gibbs ↔ Markov-ekvivalens), læringsutbytte-nevnt | 3 | 3 | 1 | **~7/15 = 47 %** |
| Hierarkisk/bayesiansk modell, prior-spesifikasjon, Laplace-approksimasjon / INLA-idé | 1 | 3 | 1 | **~5/15 = 33 %** — moderne |
| Parameterestimering i romlig felt (ML for GRF-parametre, momentmetode for variogram) | 2 | 3 | 1 | **~6/15 = 40 %** |

**Viktigste funn:**
- **Tre garantioppgaver:** Gyldig kovariansfunksjon + kriging (100 %/93 %), homogen Poisson (100 %), og Ising + MCMC (87 %/80 %). Disse tre er så sikre som noe kan bli i NTNU-arkivet — boken må gjøre dem til rygg­raden.
- **GMRF er den store veksten:** fra sjelden (05–11) til fast innslag i mosaikk-oppgaven (60 % totalt, 3/3 i 2023–25). Presisjonsmatrise, betinget uavhengighet via graf og Besag/intrinsiske modeller må ha eget kapittel — dette er der emnet har modernisert seg mest.
- **Kriging-varianten er alltid «sett opp systemet», ikke «regn ut»:** løsningsforventningen er å *utlede* BLUP/BLUE-vektene fra forventningsretthet + minste varians (Lagrange), ofte uten å tallfeste. Enkel kriging (kjent middel) → betinget gaussisk forventning; ordinær/universell kriging → med forventningsretthets-bibetingelse.
- **Punktprosess-delen dreier seg om tre operasjoner:** telle (Poisson-sannsynligheter og momenter), tynne (deteksjon/thinning gir ikke-homogen Poisson), og betinge (fordeling over celler gitt total → binomisk/multinomisk; Cox → overdispersjon).
- **MCMC testes konseptuelt, ikke i kode på skriftlig del:** «skriv pseudokode for en Gibbs sampler / M–H-algoritme», «utled aksept-sannsynligheten effektivt (kun lokale ledd pga. Markov-egenskapen)», «sammenlign mixing». Selve kjøringen hører hjemme i mappa.

---

## 3. Oppgavetype-katalog (foretrukket metode)

De ni sjangrene som faktisk går igjen, med sensorens foretrukne fremgangsmåte og typisk plassering.

### A. Gyldig-kovariansfunksjon-oppgaven (oppg. 1a)
- **Foretrukket metode:** Angi de tre kravene til en stasjonær kovarians-/korrelasjonsfunksjon: (1) symmetri C(h)=C(−h); (2) C(0)=σ²≥0 og |C(h)|≤C(0); (3) **positiv definitthet** (ΣΣaᵢaⱼC(hᵢ−hⱼ)≥0 for alle valg). Deretter kombinasjonsreglene som bevarer gyldighet: sum av gyldige, produkt av gyldige, ikke-negativ skalering, grenser. Vis at en oppgitt sammensatt funksjon er gyldig ved å dekomponere den i sum/produkt av kjente gyldige byggesteiner.
- **Frekvens:** ~100 %, alltid oppgave 1a. Billige, men presise poeng.
- **Omskrevet eksempel:** «To gyldige stasjonære kovariansfunksjoner C₁ og C₂ er gitt. Angi to måter å kombinere dem til nye gyldige funksjoner, og vis at C(h)=2·exp(−2‖h‖²−‖h‖)+3·exp(−‖h‖²) er en gyldig stasjonær kovariansfunksjon.»

### B. Kriging-/BLUP-oppgaven (oppg. 1b–c)
- **Foretrukket metode:** Definer lineær prediktor R̂(x₀)=Σαᵢr(xᵢ). Krev **forventningsretthet** (gir bibetingelse på vektene ved ukjent middel → ordinær/universell kriging), minimer prediksjonsvariansen (kvadratisk tap) → **Lagrange-system** eller normalligninger. Skriv opp systemet på matriseform (Σα=σ₀ for enkel kriging; utvidet system med Lagrange-multiplikator for ordinær). Oppgi prediksjonsvariansen. Ofte skal systemet kun **settes opp, ikke løses**. Ved kjent gaussisk felt: bruk betinget normalfordeling direkte (betinget forventning = kriging-prediktoren, betinget varians = kriging-variansen).
- **Frekvens:** ~93 %. Selve kjernen i oppgave 1.
- **Omskrevet eksempel:** «Feltet observeres i n lokasjoner. Utled minimeringssystemet som bestemmer vektene i beste forventningsrette lineære prediktor (BLUP) under kvadratisk tap for R(x₀), og angi tilhørende prediksjonsvarians. Systemet skal kun settes opp.»

### C. Parametertolkning + skisse-oppgaven (oppg. 1)
- **Foretrukket metode:** Forklar σ² (marginal variabilitet) og range/korrelasjonslengde a (hvor raskt korrelasjonen dør ut). Regn **effektiv rekkevidde** ved å løse ρ(τ)=0,05 (eller 0,1) for τ. Skisser to realisasjoner av et 1D-snitt og knytt trekkene (glatthet, svingningslengde) eksplisitt til kovariansfunksjonen — kort range gir «rufsete» felt, lang range gir glatte felt; gaussisk kovarians gir svært glatte (deriverbare) felt, eksponensiell gir kontinuerlige men ikke-deriverbare.
- **Frekvens:** ~80 %.
- **Omskrevet eksempel:** «Med kovarians C(h)=σ²exp(−(‖h‖/a)²): uttrykk den effektive rekkevidden (korrelasjon 0,1) som funksjon av a, tolk a og σ, og skisser to realisasjoner av 1D-snittet Y(t)=X(t,0) på [0,10]. Knytt trekkene i skissen til kovariansfunksjonen.»

### D. Betinget/posterior gaussisk felt (oppg. 1, målestøy)
- **Foretrukket metode:** Sett opp prior N(μ,Σ) for feltet og likelihood [d|r]=Hr+U med U~N(0,σ²ₙI). Kombiner til felles gaussisk fordeling for (r,d), og les av **betinget (posterior) forventning og varians** via standardformlene for betinget normalfordeling. Ved 2×2 bruk den oppgitte invers-formelen for å regne eksplisitt. Kommenter hvordan målestøy trekker prediksjonen mot prior-middel og øker variansen sammenlignet med eksakte observasjoner.
- **Frekvens:** ~67 %, økende (fast i 2023–25).
- **Omskrevet eksempel:** «Feltet observeres i to punkter med gaussisk målestøy (varians 1). Bruk prior- og likelihood-modellen til å utlede betinget forventning for r i et nytt punkt, og angi tilhørende prediksjonsvarians.»

### E. Poisson-prosess-oppgaven (oppg. 2a)
- **Foretrukket metode:** Angi definisjonen (uavhengige tellinger i disjunkte områder, N(B)~Poisson(λ·|B|)). Regn E[N(W)]=Var[N(W)]=λ|W|, P(N=k), P(N≥1)=1−e^{−λ|W|}. Ved betinging: gitt N(W)=n er antallet i delområde B binomisk(n, |B|/|W|), og fordelingen over flere celler er multinomisk. Begrunn forutsetningene.
- **Frekvens:** ~100 %, alltid oppgave 2a.
- **Omskrevet eksempel:** «N er homogen Poisson på R² med intensitet λ=2, W en sirkelskive med radius 1. Angi E[N(W)] og Var[N(W)], og sannsynligheten for nøyaktig 4 punkt i W.»

### F. Tynning / ikke-homogen Poisson (oppg. 2b)
- **Foretrukket metode:** Uavhengig tynning med posisjonsavhengig deteksjonssannsynlighet p(s) gir en ny Poisson-prosess med intensitet λ_N(s)=λ·p(s). Begrunn dette (uavhengig merking bevarer Poisson-egenskapen). Regn forventet antall detekterte ved å integrere intensiteten over vinduet. Klassisk kontekst: transect-sampling (deteksjon avtar med avstand fra båtlinjen).
- **Frekvens:** ~53 %.
- **Omskrevet eksempel:** «Hvaler observeres langs en linje; deteksjonssannsynligheten er exp(−d/3) med d avstand fra linjen. Forklar hvorfor intensiteten til de detekterte hvalene blir λ_N(s), og beregn forventet antall detekterte i vinduet.»

### G. Cox- / klyngeprosess-oppgaven (oppg. 2)
- **Foretrukket metode:** Cox = Poisson betinget på en tilfeldig intensitet Λ. Bruk lov om total forventning/varians: E[N]=E[Λ]|A|, Var[N]=E[Λ]|A|+Var[Λ]|A|² (viser **overdispersjon**, Var>E). For Neyman–Scott: mødre fra Poisson, døtre gaussisk spredt rundt hver mor; E[M(W)]=λ·μ·|W|, og Var>E pga. klyngedannelse — begrunn intuitivt.
- **Frekvens:** ~27 % + 20 % (Cox / Neyman–Scott).
- **Omskrevet eksempel:** «Mødrepunkter er homogen Poisson (λ=2); hver mor får Poisson(μ=3) døtre spredt N₂(mor, 0,2²I). Finn E[M(W)] og avgjør med intuitivt argument om Var[M(W)] er større eller mindre enn E[M(W)].»

### H. Ising-/Markov-felt-oppgaven (oppg. 3a)
- **Foretrukket metode:** Skriv Gibbs-formuleringen P(l)∝exp(β·Σ_{<u,v>}I(lᵤ=lᵥ)) og utled **Markov-formuleringen** (full betinget for én node avhenger kun av naboene). Angi nabolagssystem og maksimale cliquer (par av naboer for første ordens; utvid til diagonale for annen ordens). Ved annen ordens: definer clique-konfigurasjoner og drøft symmetriantakelser for clique-potensialene (isotropi ↔ retningsuavhengighet). Referer til Hammersley–Clifford for ekvivalensen Gibbs↔Markov.
- **Frekvens:** ~87 %, alltid oppgave 3a.
- **Omskrevet eksempel:** «Definer felles sannsynlighet og full betinget formulering for Ising-modellen. Utvid deretter til annen ordens nabolag: definer de maksimale cliquene og drøft rimelige symmetriantakelser for potensialene.»

### I. MCMC-simuleringsoppgaven (oppg. 3b)
- **Foretrukket metode:** Skriv pseudokode for en **single-site Gibbs sampler** (trekk hver node fra sin fulle betingede) eller **Metropolis–Hastings** (foreslå endring, aksepter med min(1, forhold)). Utled aksept-sannsynligheten **effektivt** ved å utnytte Markov-egenskapen: bare de lokale cliquene rundt den foreslåtte noden inngår, resten kanselleres. Sammenlign to forslagsfordelinger (bytt klasse vs. trekk klasse uniformt) på aksept-rate, konvergens og mixing.
- **Frekvens:** ~80 %.
- **Omskrevet eksempel:** «Skriv pseudokode for en single-site Metropolis–Hastings-algoritme for Ising-feltet med to ulike forslagsfordelinger, utled de beregningseffektive aksept-sannsynlighetene, og drøft konsekvensen for konvergens og mixing.»

### J. GMRF-/presisjonsmatrise-oppgaven (oppg. 3)
- **Foretrukket metode:** Angi kravene til en gyldig presisjonsmatrise Q (symmetrisk, positiv definit). **Nullstrukturen i Q koder betinget uavhengighet:** Qᵢⱼ=0 ⟺ node i og j er betinget uavhengige gitt resten ⟺ ingen kant i grafen. Utled betinget forventning E[Xᵢ|resten]=−(1/Qᵢᵢ)Σ_{j≠i}Qᵢⱼxⱼ og betinget varians 1/Qᵢᵢ direkte fra Q. For intrinsisk GMRF/Besag: forklar den uproper tettheten, strukturmatrisen R (grad på diagonalen, −1 for naboer), og hvorfor normeringen bruker τ^{(n−1)/2} (én egenverdi er null → rangdefekt 1).
- **Frekvens:** ~60 %, sterkt økende — nå fast i mosaikk-oppgaven.
- **Omskrevet eksempel:** «X er en GMRF med presisjonsmatrise Q=τ((1−λ)I+λR) der R er Besag-strukturmatrisen. Bestem E[X₆|X₅=x₅] og Var[X₆|X₅=x₅] som funksjon av λ og τ, og forklar grensetilfellene λ→0 og λ→1.»

---

## 4. Sensorens krav

Utledet av oppgaveformuleringene, de OCR-lesbare håndskrevne løsningsforslagene (2023–2024) og den norske romlig-statistikk-tradisjonen (Omre/Eidsvik/Steinsland). **NB:** ingen maskinlesbar sensorveiledning med poengfordeling forelå (skann-hull, pkt. Hovedfunn 4).

1. **Presise modellkrav.** Når det spørres om «kravene for at C er en gyldig kovariansfunksjon» eller «for at X er annenordens stasjonær», forventes **alle** kravene eksplisitt (symmetri, positiv definitthet, konstant middel/kovarians kun avhengig av differansen). Delvise lister trekker ned.

2. **Utled, ikke bare siter.** Kriging-vektene, betingede gaussiske uttrykk og aksept-sannsynlighetene skal **utledes** fra prinsipp (forventningsretthet + minste varians; betinget normalfordeling; Metropolis-forholdet), ikke bare skrives ned. Løsningsfragmentene viser mellomledd.

3. **«Sett opp systemet» betyr sett det opp korrekt og fullstendig.** Mange deloppgaver ber eksplisitt om minimeringssystemet **uten** å løse det — da vurderes oppsettet (bibetingelser, matriseform, Lagrange-ledd), ikke tallsvar.

4. **Utnytt Markov-egenskapen i MCMC.** Full uttelling på aksept-sannsynligheter krever at kandidaten viser at bare **lokale** cliquer inngår (resten kanselleres) — dette er hele poenget med beregningseffektiviteten.

5. **Skisser skal begrunnes fra modellen.** Realisasjonsskisser (glatthet, range) og punktmønster-skisser (tilfeldig/klynget/regulært) må knyttes eksplisitt til kovariansfunksjonen/prosessen — «ser slik ut» uten begrunnelse gir lite.

6. **Riktig prosess til riktig fenomen.** Homogen vs. ikke-homogen Poisson, Poisson vs. Cox (overdispersjon), tilfeldig vs. klynget vs. regulært mønster — valget skal begrunnes fra dataene/konteksten.

7. **Betinget uavhengighet ↔ graf ↔ nullstruktur.** For GMRF forventes at kandidaten kobler grafen, cliquene og nullmønsteret i Q sammen som ett hele.

8. **Definer notasjon og antakelser.** Som i hele NTNU-tradisjonen: definer felt, indeksmengde og parametre før utledning; oppgi stasjonaritets-/isotropi-/uavhengighetsantakelser der de brukes.

**Karakterskiller (utledet av oppgavestrukturen):** Bestått-nivået krever de tre garantioppgavenes a-punkter (kovariansgyldighet, Poisson-momenter, Gibbs↔Markov-formulering). Midtsjiktet mestrer kriging-oppsettet, betingede gaussiske uttrykk og en korrekt Gibbs/M–H-pseudokode. Toppsjiktet skiller seg på: effektiv utledning av aksept-sannsynligheter, GMRF-presisjonsmatrise og betinget uavhengighet, intrinsiske/Besag-modeller, Cox/Neyman–Scott-overdispersjon, og deriverte gaussiske felt.

---

## 5. Typiske feil

Feilmønstre som oppgavene bygger feller rundt og som løsningstradisjonen adresserer:

1. **Ufullstendige gyldighetskrav** — glemme positiv definitthet (det avgjørende kravet), eller tro at enhver avtagende funksjon er en gyldig kovariansfunksjon.
2. **Feil kombinasjonsregel** — tro at differanse eller sammensetning av gyldige kovariansfunksjoner alltid er gyldig (kun sum, produkt og ikke-negativ skalering er garantert).
3. **Glemme forventningsrettheten i kriging** — hoppe rett på variansminimering uten bibetingelsen Σαᵢ=1 (ordinær kriging) eller uten Lagrange-multiplikator, og dermed få feil system.
4. **Enkel vs. ordinær vs. universell kriging blandes** — bruke kjent-middel-formelen når middelet er ukjent, eller motsatt.
5. **Behandle E og Var som ulike for Poisson** — glemme at E[N]=Var[N]=λ|W| for homogen Poisson (og at Cox nettopp bryter dette med overdispersjon).
6. **Feil betinget fordeling over celler** — bruke Poisson i stedet for binomisk/multinomisk når man betinger på totalantallet.
7. **Tynning misforstått** — tro at deteksjon endrer intensiteten multiplikativt feil, eller at den tynnede prosessen ikke lenger er Poisson (den er det, ved uavhengig tynning).
8. **Gibbs- og Markov-formuleringen forveksles** — ikke skille felles Gibbs-tetthet fra de fulle betingede (Markov), eller ikke utnytte at fulle betingede bare avhenger av naboene.
9. **Aksept-sannsynlighet regnet globalt** — ta med hele feltets energi i stedet for kun de lokale cliquene, som gjør algoritmen ubrukelig i praksis (og gir strekk på poeng).
10. **Ugyldig presisjonsmatrise** — glemme kravet om positiv definitthet, eller feiltolke Qᵢⱼ≠0 som «korrelasjon» i stedet for «betinget avhengighet».
11. **Intrinsisk GMRF-normering** — bruke τ^{n/2} i stedet for τ^{(n−1)/2} (overse at rangdefekten pga. den uproper/singulære R er 1).
12. **Skisser uten kobling til parametrene** — tegne like realisasjoner for kort og lang range, eller ikke reflektere gaussisk-kovariansens glatthet.
13. **Blande sannsynlighet og intensitet/tetthet** i punktprosesser (P(N=k) vs. λ).
14. **Konvergens vs. mixing forveksles** — ikke skille om en MCMC konvergerer (mot riktig fordeling) fra hvor raskt den blander.

---

## 6. Teorem-, notasjons- og formelapparat

### Hjelpemidler som deles ut (kode C)
På den skriftlige delen: formelsamlingen **«Tabeller og formler i statistikk»** (Akademika/Tapir), **godkjent enkel kalkulator**, og et **gult, stemplet A5-ark med egne håndskrevne notater**. Formelsamlingen dekker grunnstatistikkens fordelinger, tabeller og standardformler — men **svært lite av det romlig-spesifikke** (kovariansfamilier, kriging, MRF, MCMC står IKKE der). Det gule arket brukes derfor i praksis til de romlige nøkkelformlene. **Konsekvens for boken:** treningen skal ligge på å *utlede* det romlige apparatet (kriging-systemer, betingede gaussiske uttrykk, aksept-sannsynligheter, presisjonsmatrise-relasjoner) og på å lage et godt A5-ark — ikke på memorering av grunnstatistikk (som ligger i formelsamlingen fra TMA4245).

### Må beherskes aktivt (utledes uten oppskrift)

**1. Kontinuerlige (gaussiske) felt:**
- Gyldig kovarians/korrelasjon: symmetri, C(0)=σ², **positiv definitthet**; kombinasjonsregler (sum, produkt, ikke-neg. skalar).
- Kovariansfamilier: eksponensiell C(h)=σ²e^{−‖h‖/a}, gaussisk σ²e^{−(‖h‖/a)²}, sfærisk, Matérn (kjenne til), Cauchy; nugget, sill, range.
- Stasjonaritet, annenordens stasjonaritet, isotropi; variogram γ(τ)=½Var{R(x′)−R(x″)} og koblingen γ=σ²−C.
- **Kriging:** enkel (kjent middel, via betinget normal), ordinær (ukjent konstant middel, Σαᵢ=1 + Lagrange), universell (middel = Σβf(s), forventningsrettehets-bibetingelser). Prediktor, system på matriseform, prediksjonsvarians. BLUE for regresjonsparametrene.
- Betinget/posterior gaussisk felt: for felles normal (X,D), E[X|D=d] og Var[X|D=d] via Schur-komplement; prior×likelihood med målestøy.
- Multivariat normal-verktøykassen (forutsatt fra TMA4245, repeteres komprimert): marginal/betinget normal, lineærkombinasjoner, 2×2-invers.
- (Nytt) kvadratisk-middel-derivert av gaussisk felt: m_{X′}, Cov[X,X′], kovarians til X′.

**2. Event / punktprosesser:**
- Homogen Poisson: N(B)~Poisson(λ|B|), uavhengige disjunkte tellinger, E=Var=λ|B|; P(N=k), P(N≥1).
- Betinging: gitt N(W)=n er punktene uniformt fordelt → binomisk/multinomisk over delceller.
- Ikke-homogen Poisson: intensitet λ(s), forventet antall = ∫λ(s)ds; **uavhengig tynning** λ→λ·p(s).
- Cox-prosess: E[N]=E[Λ]|A|, Var[N]=E[Λ]|A|+Var[Λ]|A|² (overdispersjon); Cov(N(A),N(B)).
- Klyngeprosess Neyman–Scott/Matérn; markert punktprosess.
- Nærmeste-nabo-avstand: P(ingen punkt innen r)=e^{−λπr²} → tetthet for avstand til nærmeste/i-te punkt.
- CSR-vurdering: kjikvadrat-test på celletellinger (≈χ²_{C−2} med estimert λ); K-funksjon/klynge–regulær-diagnostikk (mappe).

**3. Mosaikk / Markov random fields:**
- Gibbs-formulering P(l)∝exp(−ΣV_c(l)) og Markov-formulering (fulle betingede avhenger kun av naboer); **Hammersley–Clifford**-ekvivalensen.
- Ising/autologistisk modell, interaksjonsparameter β; nabolagssystem (første/annen ordens), cliquer og clique-potensialer, symmetri.
- Bayesiansk diskret felt: posterior [L|d]∝likelihood·prior, klassifisering/beslutning.
- **MCMC:** single-site Gibbs sampler (trekk fra full betinget), Metropolis–Hastings (aksept min(1, forhold)), **lokal** aksept-sannsynlighet via Markov-egenskapen; konvergens vs. mixing; valg av forslagsfordeling.
- **GMRF:** presisjonsmatrise Q (symmetrisk PD), nullstruktur ↔ betinget uavhengighet ↔ graf; E[Xᵢ|·]=−Q_{ij}-vektet naboer/Qᵢᵢ, Var[Xᵢ|·]=1/Qᵢᵢ; intrinsisk GMRF/Besag (strukturmatrise R, upropert tetthet, τ^{(n−1)/2}); Laplace-approksimasjon / INLA-idé.

**4. Estimering i romlige modeller:**
- ML for GRF-parametre (via multivariat normal-likelihood; forutsetter ML-prinsippet fra TMA4245).
- Momentmetode / minste kvadrater for variogramtilpasning (mappe).
- Bayesiansk/hierarkisk oppsett: prior på parameternivå, inferens via MCMC eller Laplace/INLA.

### Notasjonskonvensjoner i settene
- Feltet skrives {R(x); x∈D⊂Rᵈ} eller {X(s): s∈R²}; store bokstaver for stokastiske felt.
- σ² = varians, a eller θ = range/skala-parameter, ρ(τ) = korrelasjon, C(h) = kovarians, γ(τ) = variogram; τ eller h = avstand/differanse.
- Punktprosess: λ = intensitet, N(B) = antall punkt i B, W = observasjonsvindu.
- MRF: L eller X for feltet, LD for gitteret/lattice, Lₓ∈{0,1} eller {−1,1} eller {W,B}; β = interaksjonsparameter; <u,v> = par av naboer; δ(u) = nabolag; C = clique-system.
- GMRF: Q = presisjonsmatrise, R = strukturmatrise, τ = presisjonsparameter, μ = middelvektor.
- Kriging: α/β = vekter, x₀/s₀/s* = prediksjonslokasjon, «hatt» for prediktor/estimator (R̂, μ̂, X̂*).
- Boken bør følge dette slavisk (engelsk fagterminologi er standard, men boken skrives på norsk bokmål med engelske metodenavn i parentes ved første forekomst).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer ~65–75 % av den skriftlige delen)
1. **Gyldig kovarians-/korrelasjonsfunksjon** (positiv definitthet + kombinasjonsregler) — ~100 %, åpner oppgave 1.
2. **Kriging/BLUP** — sett opp og utled prediktorsystemet (enkel/ordinær/universell), prediksjonsvarians, kobling til betinget normalfordeling. ~93 %, kjernen i oppgave 1.
3. **Homogen Poisson-prosess** — momenter, sannsynligheter, forutsetninger, betinging over celler (binomisk/multinomisk). ~100 %, åpner oppgave 2.
4. **Ising/Markov random field** — Gibbs↔Markov-formulering, cliquer, nabolag, potensialer. ~87 %, åpner oppgave 3.
5. **MCMC for MRF** — Gibbs sampler og Metropolis–Hastings i pseudokode, effektive (lokale) aksept-sannsynligheter, konvergens/mixing. ~80 %.
6. **Parametertolkning + realisasjonsskisser** knyttet til kovariansfunksjonen (range, glatthet). ~80 %.

### Nivå 2 — må kunne (avgjør C mot B)
7. **Betinget/posterior gaussisk felt** med målestøy (prior×likelihood → betinget forventning/varians). ~67 %, økende.
8. **GMRF med presisjonsmatrise** — nullstruktur ↔ betinget uavhengighet ↔ graf, betingede uttrykk fra Q. ~60 %, sterkt økende — **må ha eget kapittel**.
9. **Ikke-homogen Poisson og tynning/thinning** (deteksjon, transect). ~53 %.
10. **BLUE for romlige regresjonsparametre** (universell kriging-rammen). ~47 %.
11. **Variogram** (definisjon, familier, kobling til kovarians) — ~47 %, og sentralt i mappa.
12. **Stasjonaritet/isotropi** som teori-/kravspørsmål. ~73 % (ofte innbakt i 1a).

### Nivå 3 — bør kjenne til (topper karakteren, differensierer A)
13. **Cox- og Neyman–Scott/klyngeprosesser** — overdispersjon, Var>E, intuitiv begrunnelse. ~27 %/20 %, i rotasjon.
14. **Intrinsisk GMRF / Besag-modell** — upropert tetthet, strukturmatrise, τ^{(n−1)/2}. Nytt (2023–24), sannsynlig gjenbruk.
15. **Derivert av gaussisk felt** (kvadratisk middel, kryss-kovarians). Nytt (2024).
16. **CSR-test** (kjikvadrat på celletellinger) og punktmønster-diagnostikk (K-funksjon) — bro mellom skriftlig og mappe.
17. **Hierarkisk/bayesiansk modell + Laplace/INLA-idé** — moderne vinkling, ~33 %.
18. **Nærmeste-nabo-avstandsfordeling** for Poisson. ~27 %.
19. **Bayesiansk diskret bildeanalyse** (posterior [L|d], klassifisering). ~40 % i eldre sett.

### Mappe-spesifikt (bærer 30 % av samlet karakter — eget bok-lag)
- Praktisk **variogramestimering** og modelltilpasning på reelle data (R: `geoR`/`gstat`).
- **Kriging på data** med kart og usikkerhetsvisualisering.
- **Simulering** av gaussiske felt, punktprosesser (`spatstat`) og MRF/GMRF, med figurtolkning.
- **Rapportskriving**: struktur, figurtekst, tolkning, diskusjon — mappen vurderer den reviderte rapporten, så boken bør ha en rapportmal og eksempel på revisjonsrunde (tilbakemelding → forbedring).

### Prognose for neste ordinære skriftlige eksamen
4 timer, kode C, 3–5 oppgaver bygd på den faste tredelingen:
- **Oppgave 1 (kontinuerlig):** gyldig kovariansfunksjon (kombinasjonsregler) → parametertolkning + realisasjonsskisse → kriging/BLUP-system → sannsynligvis et betinget/posterior gaussisk ledd med målestøy. Mulig topp-punkt: derivert felt eller ikke-gaussisk transformasjon (Z=X²).
- **Oppgave 2 (event):** homogen Poisson-momenter og -sannsynligheter → betinging over celler → tynning/ikke-homogen intensitet **eller** Cox/Neyman–Scott med overdispersjon; mulig CSR-test eller nærmeste-nabo-avstand.
- **Oppgave 3 (mosaikk/Markov):** Ising Gibbs↔Markov + cliquer/nabolag → MCMC-pseudokode med effektive aksept-sannsynligheter → **GMRF med presisjonsmatrise** (betingede uttrykk, graf) og trolig et intrinsisk/Besag-innslag.
Sannsynlige gjengangere på rotasjon: annen ordens nabolag, Laplace/hierarkisk modell, kryss-korrelerte felt (r/s), markerte punktprosesser.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4250/`. Navnekonvensjon: `Mai{ÅÅÅÅ}.pdf` (bokmål/norsk), `Mai{ÅÅÅÅ}_engl.pdf` (engelsk), `Losning_Mai{ÅÅÅÅ}.pdf` (løsningsforslag), samt nyere `Exam{ÅÅÅÅ}_TMA4250.pdf` og `Exam{ÅÅÅÅ}_solutions.pdf`.

**Lest grundig — oppgavesett med maskinlesbar tekst (~15 sett):**
- 2023–2025: `Exam2023_TMA4250`, `Exam2024_TMA4250`, `Exam2025_TMA4250` (alle med full tekst).
- 2016–2019: `Mai2019`, `Mai2018_engl`, `Juni2017`, `Mai2016_engl`.
- 2013–2015: `Mai2014_engl`, `Mai2013_engl`, `Jun2015_engl`.
- 2005–2011: `Mai2011_engl`, `Mai2010_engl`, `Mai2009`, `Mai2008`, `Mai2007`, `Mai2006`, `Mai2005`.

**Løsningsforslag — OCR-lest (delvis degradert håndskrift, 2 sett):**
- `Exam2024_solutions` og `Exam2023solutions` (OCR av håndskrevet fasit; verifiserer at løsningsmetodene følger oppgavestrukturen, men mange symboler er ulesbare).

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emneside for TMA4250 (verifisert aktiv, 7,5 sp, vurdering 70/30 skriftlig+mappe, kode C). Læringsutbytte bekrefter dekningen: gaussiske felt/kriging, Poisson/Cox-punktprosesser med MCMC, Markov random fields med cliquer og Hammersley–Clifford, parameterestimering.

**Skann-hull (kjente svakheter i grunnlaget — VIKTIG):**
- **Alle 19 `Losning_*.pdf`-filene (1997–2019) er rene skann uten OCR** (3–12 tegn hver) og kunne ikke leses maskinelt. Detaljert sensorforventning for disse årene er derfor sluttet indirekte, ikke lest.
- **`Exam2025_solutions.pdf` er ren skann** (13 tegn) — 2025-fasiten er ikke maskinlest.
- **Eldste oppgavesett er skann:** `Mai1997`–`Mai2004` (bokmål) og `Mai2000/2002/2004_engl`, `Mai2001` gir ingen tekst. Perioden 1997–2004 inngår derfor **ikke** i frekvenstabellen; strukturen antas videreført bakover, men er ikke selvstendig verifisert før 2005.
- **OCR-kvaliteten på de to leste løsningsforslagene er lav** (håndskrift): symboler og mellomregninger er delvis ulesbare. Løsningsanalysen er robust på metodenivå, men ikke på detaljnivå.
- **Ingen maskinlesbar sensorveiledning med eksplisitt poengfordeling** forelå; poengvektene i pkt. 4/7 er sluttet fra oppgavestruktur og deloppgave-tyngde, ikke fra offisielle fordelinger.
- **Frekvenstallene for 2005–2011 er nedre anslag** (færre sett med tekst; noen bokmålsvarianter er skann der kun engelsk finnes eller omvendt).

**Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og krav i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Formler, metodenavn og notasjon er standard faglig innhold uten verkshøyde.
