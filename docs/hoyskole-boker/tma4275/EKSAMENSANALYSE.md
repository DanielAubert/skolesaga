# Eksamensanalyse: TMA4275 Levetidsanalyse (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på ~40 filer fra arkivet 2007–2024: eksamenssett (bokmål/nynorsk/engelsk), løsningsskisser og sensor-/vurderingsregler. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekst eller løsningsforslag. Statistiske metodenavn og standardnotasjon (Kaplan-Meier, Nelson-Aalen, hasardrate z(t), overlevelsesfunksjon R(t)/S(t), Cox-modell, partiell likelihood) brukes som fagterminologi.
>
> **Kilder lest grundig (oppgave + full løsning):** Jun 2018, Jun 2022, Jun 2021, samt sensor-/vurderingsregler for Jun 2022, Jun 2023 og Mai 2024. **Grundig på oppgavenivå:** Jun 2019, Jun 2020, Mai 2024, samt de nynorske settene Mai 2013/2014/2015 og Juni 2016, og de engelske 2016/2017. **Skumlest for temaregistrering:** 2007–2012.
>
> **Arbeidsdeling mot TMA4245:** Grunnleggende sannsynlighet, generell maximum likelihood-teori (likelihood, log-likelihood, derivasjon, forventningsretthet/varians), konfidensintervall og hypotesetesting som *metode* dekkes av TMA4245-boken. TMA4275 er **anvendt levetids- og overlevelsesanalyse (videregående nivå)** og bygger videre på dette. Denne boken skal derfor *ikke* re-etablere grunnleggende MLE-teori fra bunnen, men forutsette den og fokusere på det levetidsspesifikke: sensurering, hasard-/overlevelsesformalismen, ikke-parametrisk estimering, tellprosesser/martingaler, regresjonsmodeller for levetid og pålitelighetsteori.

---

## Hovedfunn (les dette først)

1. **Emnet har to tydelig ulike eksamenstradisjoner, avhengig av foreleser** — og boken må dekke *begge*, siden man ikke vet hvem som lager neste eksamen:
   - **Anvendt/tolkende linje** (Tufto 2016–18, Paglia 2019, samt COVID/MINITAB-settene): kandidaten får ferdig R- eller MINITAB-output (`coxph`, `survreg`, Weibull-/lognormal-regresjon) og skal *tolke, regne videre og konkludere* — relativ risiko, konfidensintervall for hasardratio, baseline-overlevelse, Schoenfeld-residualer, ALT/Arrhenius. Regnetungt, output-drevet.
   - **Teoretisk/utledende linje** (Tjelmeland 2021, 2022, 2024): tellprosesser, martingaler, Doob-Meyer-dekomposisjon, kompensatorer, partiell likelihood *utledet fra grunnprinsipp*, frailty-modeller med Laplace-transform, profil-likelihood. Bevis- og notasjonstung, forankret i læreboka Aalen-Borgan-Gjessing (ABG).
   Overgangen skjer ~2020–2021 og er den viktigste strukturelle trenden i arkivet.

2. **Fire absolutte gjengangere** som er med i praktisk talt hvert sett uansett foreleser:
   - **Hasard-/overlevelsesformalismen** (z, Z, f, R og oversettelse mellom dem) — ~95 %, nesten alltid oppgave 1a.
   - **Cox proporsjonal-hasard-modell** (modelloppsett, partiell likelihood, tolkning av `coxph`-output, relativ risiko, KI for hasardratio) — ~70 %.
   - **Ikke-parametrisk estimering: Kaplan-Meier og/eller Nelson-Aalen** (for hånd + tolkning/median/KI) — ~85 % samlet.
   - **Parametrisk levetidsregresjon (Weibull/lognormal/loglogistisk, AFT / log-location-scale)** — ~65 %, ofte via ALT/Arrhenius eller MINITAB/`survreg`.

3. **Eksamensform:** 4 timers skriftlig skoleeksamen, bokstavkarakter, hele perioden. Skifte fra papir (t.o.m. 2019, hjelpemiddelkode C: kalkulator + gult formelark) → digital Inspera med alle hjelpemidler kode A under korona (2020–22) → tilbake til kode C fra 2024. Sensurregler (2022–24) viser fast poengmodell: hvert deloppgave-punkt teller likt, 10 poeng per punkt, skalert til 100, med eksplisitt karaktergrense A>88, B>76, C>64, D>52, E>40.

4. **Skann-hull (viktig for produksjon):** 10 av arkivets filer er rene bilde-skann uten tekstlag — **alle de eldste løsningsforslagene og to eldre eksamenssett kan ikke leses av maskin**:
   - Løsninger (skann): May2009, June2010 (probl 2–3), May2012 (probl 1-2-4), May2013, May2014, May2015, June2016, June2017.
   - Eksamenssett (skann): Jun2019 nynorsk (`eksJun19l`), Jun2020 nynorsk (`eksJun20l`).
   Oppgavetekstene for 2009–2017 finnes derimot som tekst (via de engelske/nynorske variantene), så *temaregistreringen* er komplett; det er de **utførte løsningene før 2018** som mangler maskinlesbart. For løsningskvalitet fra før 2018 må skannene OCR-behandles eller løses på nytt.

---

## 1. Eksamensform og utvikling

### Tre epoker

| Periode | Form | Struktur | Hjelpemidler |
|---|---|---|---|
| 2007–2019 | Skriftlig skoleeksamen på papir, **4 timer** (09–13). Foreleser varierer (Lindqvist-tradisjonen tidlig, så Tufto 2016–18, Paglia 2019) | 3–5 store fortellingsoppgaver med flere deloppgaver; hver oppgave én realistisk kontekst (kreftpasienter, mobiltelefongaranti, mekanisk utstyr, programvaresvikt) som bygges ut | Kode C: godkjent kalkulator, «Tabeller og formler i statistikk», normalfordelings-/χ²-tabell i vedlegg, **ett gult A4/A5-ark med egne håndskrevne notater** (fra ~2018) |
| 2020–2022 (korona) | Digital hjemmeeksamen i Inspera, **alle hjelpemidler (kode A)**, 4 timer (+30 min filhåndtering). Foreleser Tjelmeland | 5–6 oppgaver, hver lastes opp som egen håndskrevet PDF; noen rene flervalg/«velg de sanne utsagn»; ofte varianter A/B/C av samme oppgave (randomiserte tall). Prosjekt tellte inn i totalkarakteren (2022) | Alt tillatt; sitatkrav: referer til ligningsnummer i læreboka ABG |
| 2023–2024 | Tilbake til skoleeksamen, 4 timer. Foreleser Tjelmeland | 5–6 oppgaver, håndskrevne besvarelser fotograferes/lastes opp i Inspera; syvsifret kode per ark. Poeng per punkt = 10, skalert til 100 | 2024: kode C gjeninnført (kalkulator + tabeller + gult A5-ark) |

### Konstanter på tvers av alle epoker
- **4 timer** og bokstavkarakter hele veien.
- Oppgavene er alltid forankret i en **konkret levetids-/overlevelseskontekst**: pasientoverlevelse (kreft, leukemi, AMI-hjerteinfarkt, COVID-19, MGUS-blodsykdom, GVHD-transplantasjon), teknisk pålitelighet (mekaniske komponenter, mobiltelefoner, ventilseter, elektriske komponenter under temperaturbelastning), og programvarepålitelighet (Goel-Okumoto/Jelinski-Moranda).
- **Sensurering** er allestedsnærværende — nesten hvert datasett er høyresensurert, og kandidaten forventes å håndtere sensureringsindikatoren δ korrekt overalt.
- Hver eksamen dekker begge søyler i faget: den **ikke-parametriske/estimeringsdelen** (KM, NA, hasard) og en **modell-/regresjonsdel** (Cox eller parametrisk).

### Utviklingstrekk (viktigst for boken)
1. **Skifte fra tolkende til utledende eksamen (~2020):** Under Tufto/Paglia (2016–19) var eksamen dominert av å *lese og tolke* ferdig statistikkoutput. Under Tjelmeland (2021–24) kreves egne *utledninger* av partiell likelihood, martingal-egenskaper og kompensatorer. Boken må dekke begge modi.
2. **Tellprosess-/martingalteori inn i varmen:** Doob-Meyer-dekomposisjon, kompensatorer, prediktabel variasjonsprosess og martingal-baserte tester (f.eks. et-utvalgs ikke-parametrisk test bygget på Nelson-Aalen) er faste innslag 2021–24. Fantes knapt som eksplisitte utlednings-oppgaver før 2020.
3. **Frailty-modeller** (delt frailty i klynger, Laplace-transform av frailty-fordelingen, profil-likelihood når analytisk MLE er umulig) dukker opp 2022–24 — direkte knyttet til ABG kap. 7.
4. **Multistate-/Markov-modeller** (Aalen-Johansen-estimatoren for overgangssannsynligheter, Nelson-Aalen per overgangstype, transisjonsmatriser) er ny sjanger i Mai 2024.
5. **Reliabilitetsteorien tones ned:** Struktur-/systemteori (serie/parallell, Birnbaum-importans, tosjekk av strukturfunksjoner) sto sentralt i 2007-tradisjonen, men er nesten borte etter 2016 til fordel for medisinsk overlevelsesanalyse. Boken bør ha stoffet, men prioritere det lavere.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én deloppgave. Periodene: 2007–15 (≈9 sett, delvis skumlest — tall er nedre anslag), 2016–19 (4 sett), 2020–22 (3 sett), 2023–24 (2 sett). Anslått ~18 unike sett totalt.

| Tema | 07–15 | 16–19 | 20–22 | 23–24 | **Gjenganger-score** |
|---|---|---|---|---|---|
| Hasard-/overlevelsesformalisme: oversette mellom z(t), Z(t), f(t), R(t); finne median/kvantiler fra R | 8 | 4 | 3 | 2 | **≈17/18 ≈ 95 %** |
| Sensurering (høyre-, venstre-, intervall-) korrekt håndtert i estimering/likelihood | 8 | 4 | 3 | 2 | **≈17/18 ≈ 94 %** |
| Kaplan-Meier og/eller Nelson-Aalen (for hånd, plott, median, KI via log-transform) | 6 | 4 | 3 | 2 | **≈15/18 ≈ 85 %** |
| Cox proporsjonal-hasard: modelloppsett, partiell likelihood, tolke `coxph`-output, relativ risiko, KI for hasardratio | 3 | 4 | 3 | 2 | **≈12/18 ≈ 67 %** |
| Parametrisk levetidsregresjon (Weibull/lognormal/loglogistisk; AFT / log-location-scale; `survreg`/MINITAB) | 6 | 3 | 1 | 1 | **≈11/18 ≈ 61 %** |
| Eksponensialfordeling som levetidsmodell (minneløshet, konstant hasard, ML for λ) | 6 | 3 | 2 | 1 | **≈12/18 ≈ 67 %** |
| ML/likelihood tilpasset sensurerte data (bidrag f(y) for feil, R(y) for sensur) | 6 | 3 | 3 | 2 | **≈14/18 ≈ 78 %** |
| Weibull-fordeling: hasardform, form-/skalaparameter, sannsynlighetsplott | 5 | 2 | 1 | 1 | **≈9/18 ≈ 50 %** |
| Tellprosesser / NHPP (kumulativ intensitet W(t), programvarepålitelighet: Goel-Okumoto, Jelinski-Moranda) | 5 | 1 | 1 | 1 | **≈8/18 ≈ 44 %** |
| Martingaler / Doob-Meyer / kompensator / prediktabel variasjon (utledning) | 1 | 0 | 3 | 2 | **≈6/18 ≈ 33 % — sterkt økende siden 2021** |
| Partiell likelihood utledet fra grunnprinsipp (ikke bare tolket) | 1 | 1 | 3 | 2 | **≈7/18 ≈ 39 %** |
| TTT-plott + test for konstant hasard (Barlow-Proschan) | 4 | 1 | 0 | 0 | **≈5/18 ≈ 28 %** |
| Akselerert levetidstesting (ALT) / Arrhenius-modell | 3 | 2 | 0 | 0 | **≈5/18 ≈ 28 %** |
| Log-rank-test (sammenligne to grupper) | 2 | 2 | 0 | 1 | **≈5/18 ≈ 28 %** |
| Profil-likelihood (analytisk optimering av delmengde parametre) | 3 | 0 | 2 | 1 | **≈6/18 ≈ 33 %** |
| Frailty-modeller (delt frailty, Laplace-transform, klynger) | 0 | 0 | 1 | 1 | **≈2/18 ≈ 11 % — ny sjanger 2022** |
| Multistate / Markov / Aalen-Johansen / transisjonsmatriser | 0 | 0 | 0 | 1 | **≈1/18 — ny sjanger 2024** |
| Reliabilitetsteori: serie-/parallellsystemer, strukturfunksjon, Birnbaum-importans, konkurrerende risiko | 4 | 1 | 0 | 0 | **≈5/18 ≈ 28 % — avtagende** |
| Kureringsmodell / defekt overlevelsesfordeling («cure fraction») | 1 | 1 | 0 | 0 | **≈2/18** |
| Schoenfeld-residualer / sjekk av proporsjonalhasard-antagelsen | 0 | 2 | 0 | 0 | **≈2/18 — Tufto-signatur** |

**Viktigste funn:**
- **Hasard–overlevelse-formalismen er selve ryggraden.** Å regne seg fritt mellom z(t), Z(t) = ∫z, f(t) = z·R, R(t) = e^(−Z), og finne median ved R(m)=½, er forutsetningen for *alt* annet og testes så godt som hvert år, oftest som oppgave 1a. Boken må drille dette hardt tidlig.
- **To ikke-parametriske estimatorer, to bruksmåter:** Kaplan-Meier estimerer R(t) (steg ved feiltider, konstant mellom), Nelson-Aalen estimerer Z(t) (sum av 1/Y(Tⱼ)). Kandidaten skal kunne regne begge **for hånd** fra et lite sensurert datasett, plotte trappekurve, lese av median og konstruere KI (for NA typisk via log-transformasjon). Poengreglene straffer eksplisitt å ta med steg ved sensurerte tider og å tegne ikke-trappeformet kurve.
- **Cox-modellen dominerer regresjonssiden i den moderne eksamen.** Standardoppgaven: gitt `coxph`-output, skriv relativ risiko-funksjon exp(βᵀx), finn KI for en hasardratio (utnytt at forholdet mellom to individer = exp(βΔx), og at ln er monoton så KI transformeres direkte), tolk hvilke kovariater som er signifikante, og «diskuter neste steg» (fjern kovariater, modellsjekk). Delta-metoden brukes for KI til sammensatte uttrykk.
- **Parametrisk regresjon er AFT / log-location-scale-familien:** ln T = μ + σU, der U er standard (ekstremverdi→Weibull, normal→lognormal, logistisk→loglogistisk). ALT/Arrhenius er en spesialtilpasning der μ avhenger lineært av (transformert) stress. Kandidaten leser MINITAB/`survreg`-koeffisienter, regner kvantiler/median levetid og konstruerer KI med delta-metoden.
- **Den teoretiske kjernen (2021→) er tellprosess-formalismen:** en tellprosess N(t) med multiplikativ intensitet λ(t)=α(t)Y(t), Doob-Meyer-dekomposisjonen N = kompensator + martingal, og bruk av dette til å vise forventningsretthet og finne variansestimatorer (prediktabel variasjon). Partiell likelihood for relativ-risiko-regresjon utledes fra ABG-uttrykket L(β)=∏ r(β,xᵢⱼ)/Σ_{l∈Rⱼ} r(β,x_l).

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav og typisk plassering.

### A. Hasard/overlevelse-oversettelsen
- **Krav:** Gitt én av funksjonene (typisk z(t) eller R(t)), utled de andre: Z(t)=∫₀ᵗz(u)du, R(t)=e^(−Z(t)), f(t)=z(t)R(t)=−R′(t). Finn median ved å løse R(m)=½; finn kvantiler/interkvartilbredde. Ofte: sjekk at et gitt R(t) er en gyldig overlevelsesfunksjon (R(0)=1, avtagende, →0).
- **Frekvens:** ~95 %, nesten alltid åpningsoppgaven. Billige, obligatoriske poeng.
- **Omskrevet eksempel:** «Levetiden T har kumulativ hasard Z(t)=ln(t+1). Finn overlevelsesfunksjonen, tettheten, hasardraten og medianlevetiden. Avgjør om forventet levetid er endelig.»

### B. Kaplan-Meier for hånd
- **Krav:** Ordne distinkte feiltider, sett opp tabell med Y(tⱼ) (antall i risiko rett før), dⱼ (antall feil), produkt R̂(t)=∏(1−dⱼ/Yⱼ). Plott som trappekurve fra 1. Les av median (der R̂ krysser ½). Estimer forventet levetid som areal under kurven (og forklar hvorfor det ikke er identifiserbart hvis siste observasjon er sensurert). Sammenlign to grupper i samme plott. Ikke ta med steg ved sensurerte tider.
- **Frekvens:** ~höyt hele veien; kjernen i ikke-parametrisk del.
- **Omskrevet eksempel:** «For to behandlingsgrupper med høyresensurerte overlevelsestider, beregn Kaplan-Meier-estimatene for hånd, tegn begge kurvene og angi estimert median for hver gruppe.»

### C. Nelson-Aalen + varians/KI
- **Krav:** Â(t)=Σ_{Tⱼ≤t} 1/Y(Tⱼ) for kumulativ hasard; variansestimat σ̂²(t)=Σ 1/Y(Tⱼ)²; KI basert på **log-transformasjon** Â·exp(±z·σ̂/Â). Plott trappekurve med KI-bånd. Ofte kombinert med å skrive litt R-kode for varians/KI/plott.
- **Frekvens:** vanlig 2019–2024; erstatter/supplerer KM.
- **Omskrevet eksempel:** «Beregn Nelson-Aalen-estimatet for den kumulative hasardraten for hånd, og skriv R-kode som beregner variansestimatet og et 95 %-konfidensintervall via log-transformasjon, med tilhørende plott.»

### D. Cox-output-tolkningen
- **Krav:** Fra `coxph`-summary: skriv relativ risiko r(x)=exp(β₁x₁+…). Regn hasardratio mellom to spesifiserte individer (differansen i kovariater), og KI for den (bruk KI for β, transformer med exp — monotont). For sammensatte uttrykk (flere kovariater samtidig): bruk kovariansmatrisen (`res.cox$var`) og delta-metoden til Var(ln r). Vurder signifikans per kovariat, og «diskuter neste steg» (kovariatseleksjon, modellsjekk).
- **Frekvens:** ~67 %; standard i alle moderne sett.
- **Omskrevet eksempel:** «Fra Cox-outputen, skriv den estimerte relative risiko-funksjonen og finn et 95 %-konfidensintervall for forholdet mellom hasardraten til en 50-åring og en 51-åring med ellers like kovariater.»

### E. Cox partiell likelihood — utledning
- **Krav:** Skriv den partielle likelihooden L(β)=∏_{Tⱼ} exp(βx_{iⱼ})/Σ_{l∈Rⱼ}exp(βx_l), forklar risikomengden Rⱼ og at iⱼ er enheten som feiler ved j-te feil. I spesialtilfeller (binær tidsuavhengig kovariat, alle enheter alltid i risiko) forenkle nevneren og utled eksplisitt MPL-estimator, typisk β̂=ln(K₁z₀/K₀z₁). Log-partiell-likelihood og derivering.
- **Frekvens:** ~39 %; Tjelmeland-signatur (2022, 2024).
- **Omskrevet eksempel:** «For reparerbare enheter med binær tidsuavhengig kovariat der alle alltid er i risiko, utled den partielle likelihooden, log-partielle likelihooden og et lukket uttrykk for maximum partiell likelihood-estimatoren.»

### F. Parametrisk regresjon / ALT (output-basert)
- **Krav:** Kjenne AFT-strukturen ln T=μ+σU og hvilken standardfordeling U gir Weibull/lognormal/loglogistisk. Fra MINITAB/`survreg`: skriv opp hasard-/overlevelsesfunksjon med estimerte parametre, regn median levetid, kvantiler, og sannsynligheter. Konstruer KI for en kvantil eller for avledet størrelse med delta-metoden (bruk vcov). ALT: forklar Arrhenius-modellen, ekstrapolér til brukstemperatur, sjekk designkrav (f.eks. «95 % skal overleve 30 000 timer»).
- **Frekvens:** ~61 %; dominerte 2013–2019, sjeldnere 2021→.
- **Omskrevet eksempel:** «Fra en Weibull-regresjon i MINITAB med Arrhenius-relasjon til temperatur, estimer sannsynligheten for at en enhet ved 10 °C overlever 30 000 timer, og vurder om produktkravet er oppfylt.»

### G. Likelihood for sensurerte data (parametrisk)
- **Krav:** Sett opp L=∏_{δ=1} f(yᵢ) · ∏_{δ=0} R(yᵢ) for en gitt parametrisk levetidsmodell; ta logaritme; finn ML-estimator (analytisk der mulig, ellers Newton-Raphson). Ved flere parametre/klynger: profil-likelihood — optimér analytisk over noen parametre, la resten stå.
- **Frekvens:** ~78 %; grunnferdighet på tvers av modeller.
- **Omskrevet eksempel:** «For høyresensurerte levetider fra en loglogistisk log-location-scale-modell, skriv opp likelihoodfunksjonen for (μ, σ).»

### H. Tellprosess / NHPP / programvarepålitelighet
- **Krav:** For en NHPP med intensitet w(t): kumulativ intensitet W(t)=∫w, tolke W(t) som forventet antall hendelser, regne sannsynligheter for første/neste hendelse. Programvaremodeller: Goel-Okumoto (w(t)=αβe^(−βt), tolk α som initielt antall feil), Jelinski-Moranda (λᵢ=(a−i+1)b), betinget pålitelighet R(t|s), optimal testtid, likelihood for a og b.
- **Frekvens:** ~44 %; sterk i 2007–2015, jevn siden.
- **Omskrevet eksempel:** «Antall programvarefeil følger en Goel-Okumoto-NHPP. Finn den kumulative intensiteten, tolk grensen når t→∞, og utled et uttrykk for optimal testtid gitt et krav til betinget pålitelighet.»

### I. Martingal / Doob-Meyer / ikke-parametrisk test
- **Krav:** Bruk Doob-Meyer: N(t)=∫λ+M(t) der M er en nullforventnings-martingal. Vis at en gitt størrelse (f.eks. Â(t)−A⋆(t) eller en test-observator Z(t₀)) er/har forventning null under H₀, ved å skrive den som et martingalintegral ∫J/Y dM. Finn prediktabel variasjon ⟨M⟩ og bruk den til en forventningsrett variansestimator; forklar forkastningsregel for testen.
- **Frekvens:** ~33 %; kjernen i den teoretiske eksamen 2021–2024.
- **Omskrevet eksempel:** «Bruk Doob-Meyer-dekomposisjonen til å vise at et-utvalgs test-observatoren Z(t₀), basert på differansen mellom Nelson-Aalen-estimatet og en kjent hasardrate, har forventning null under nullhypotesen, og finn en forventningsrett variansestimator.»

### J. Frailty-modeller
- **Krav:** Delt frailty i klynger: hasard for individ i klynge j er Zⱼ·α(t). Bruk Laplace-transform L(c)=E[e^(−cZ)] av frailty-fordelingen (og dens deriverte) til å marginalisere ut Zⱼ og få klynge-likelihooden (ABG (7.3)). Ved umulig analytisk MLE: profil-likelihood + numerisk optimering.
- **Frekvens:** ~11 %; ny (2022, 2024).
- **Omskrevet eksempel:** «Individene i hver klynge deler en eksponensialfordelt frailty. Vis induktivt uttrykket for den r-te deriverte av Laplace-transformen, og bruk det til å skrive klyngenes log-likelihood.»

### K. Multistate / Aalen-Johansen
- **Krav:** Flertilstands-Markov-prosess med overgangsintensiteter αᵍₕ; estimer Nelson-Aalen per overgangstype (trappefunksjon med hopp ved overgangstider), sett opp inkrement-matriser ΔÂ(t), multipliser til Aalen-Johansen-estimatet for overgangssannsynligheter, sjekk at resultatet er en gyldig transisjonsmatrise.
- **Frekvens:** ~1 sett (2024), men signaliserer emnets moderne retning.
- **Omskrevet eksempel:** «For en tre-tilstands Markov-prosess med én absorberende tilstand, estimer den kumulative overgangsintensiteten for hver overgang og bygg Aalen-Johansen-estimatet for overgangssannsynlighetene.»

### L. Reliabilitets-/systemteori (klassisk)
- **Krav:** Hasard for seriesystem = sum av komponent-hasarder; strukturfunksjoner for serie/parallell; Birnbaum-importansmål; konkurrerende risiko (latent-levetids-modellen og dens begrensninger); TTT-plott og Barlow-Proschan-test for konstant hasard.
- **Frekvens:** ~28 %, avtagende; tungt i 2007-tradisjonen.
- **Omskrevet eksempel:** «Vis at hasardraten til et seriesystem av uavhengige komponenter er summen av komponentenes hasardrater, og tegn et TTT-plott for å vurdere om levetidene har konstant, økende eller avtagende hasard.»

---

## 4. Sensorens krav

Fra vurderingsreglene (Jun 2022, Jun 2023, Mai 2024) — eksplisitt og detaljert:

- **Fast poengmodell:** hvert deloppgave-punkt gis maks 10 poeng; poengene summeres og skaleres til 100. Karaktergrenser (2023/24): A>88, B>76, C>64, D>52, E>40, F≤40. Alle punkter teller likt.
- **Fremgangsmåte og mellomregning kreves alltid.** Gjentatt formulering: «emphasis will be placed on the answers being logical and that they contain all natural intermediate calculations.» Rene svar uten utledning gir lite.
- **Kaplan-Meier/Nelson-Aalen straffes presist:** å ta med steg ved *sensurerte* tider gir maks 1 poeng for den delen; kurve som ikke er trappeformet gir −2 poeng; kurve som ikke starter i 1 gir maks 1 poeng; manglende/feil markering av median gir −2.
- **Cox relativ risiko:** bruk **coef (β)**, ikke **exp(coef)**, i risikofunksjonen — å bruke exp(coef) gir kun 1 poeng.
- **Konfidensintervall:** bruk standardavvik, ikke varians, i KI — feil her gir −1. Bruk KI for parameteren og transformer monotont; ikke bland sammen SE for én størrelse med varians for en annen.
- **Partiell likelihood:** eksplisitt poeng for å begrunne at Rⱼ={1,…,n} når alle enheter alltid er i risiko (−2 hvis utelatt), og trekk for snarveier som gjør det uklart om kandidaten forstår mekanismen.
- **Utledningsoppgaver deles i deler:** typisk 3/6/8/10 poeng for 1/2/3/4 riktige deler, med −1 per del for mindre feil. Delvis riktig premieres.
- **«Neste steg»-diskusjon** (Cox): full score krever *både* diskusjon om å fjerne kovariater *og* modellsjekk.
- **Referansekrav (Inspera-epoken):** hvis man bruker uttrykk fra læreboka ABG, skal ligningsnummer oppgis, uttrykket kopieres inn, og relevansen begrunnes.
- **Start med korrekt utgangspunkt:** for tellprosess-/frailty-oppgaver gis poeng for å identifisere *hvilket* ABG-uttrykk man starter fra og hvorfor det er gyldig i situasjonen.

---

## 5. Typiske feil

Utledet fra løsningsskissene og de eksplisitte straffe-reglene:

1. **Steg ved sensurerte tider i KM/NA.** Vanligste feil; sensurering endrer *Y(t)* (risikomengden), men gir ikke et hopp i estimatoren. Straffes hardt.
2. **exp(coef) forvekslet med coef** i den relative risiko-funksjonen — det er β (coef) som står i eksponenten, exp(coef) er allerede hasardratioen per enhets endring.
3. **Varians brukt der standardavvik skal brukes** i konfidensintervaller (glemme kvadratrota).
4. **Feil KI-transformasjon:** å legge z·SE til en avledet størrelse direkte i stedet for å lage KI for parameteren og transformere monotont (exp/ln). For flerdimensjonale uttrykk: å glemme kovariansleddene i delta-metoden.
5. **Forventet levetid fra en sensurert hale.** Areal under KM-kurven er ikke identifiserbart forbi siste observasjon hvis den er sensurert; må enten anta R=0 etterpå eller si at ET ikke kan estimeres.
6. **Glemme sensureringsbidraget i likelihooden** — feil enheter bidrar med R(yᵢ), ikke f(yᵢ). Gir feil ML-estimator.
7. **Rᵢ (risikomengden) i partiell likelihood** feilspesifisert — særlig å ikke innse at alle enheter er i risiko for reparerbare systemer, eller å inkludere allerede-feilede enheter.
8. **Antar analytisk MLE der det ikke finnes.** Når begge parametre står i nevneren av score-ligningen, må man over til profil-likelihood / Newton-Raphson — ikke «løse» en uløselig ligning.
9. **Hasard vs. kumulativ hasard forvekslet** — Nelson-Aalen estimerer Z(t) (kumulativ), ikke z(t); man må derivere/skjønne trappet for å si noe om z.
10. **Uklar eller manglende tolkning i kontekst.** «Diskuter neste steg» og «tolk parameteren» besvares ofte for tynt; sensor krever konkret medisinsk/teknisk tolkning.

---

## 6. Teorem-, notasjons- og formelapparat

Hjelpemidler er tabellsamling + kalkulator + gult egen-notat-ark (kode C), eller alt (kode A i korona-årene). Emnet tester **bruk og utledning**, ikke memorering. Kandidaten forventes å ha på formelarket / kunne utenat:

**Grunnrelasjonene (må sitte automatisk):**
- z(t) = f(t)/R(t) (hasardrate), Z(t) = ∫₀ᵗ z(u)du (kumulativ hasard)
- R(t) = P(T>t) = e^(−Z(t)), f(t) = z(t)R(t) = −R′(t)
- Median: R(m)=½; kvantil q_α: R(q_α)=α

**Standardfordelinger:** eksponensial (konstant hasard, minneløshet), Weibull (hasard αθ⁻ᵅtᵅ⁻¹, form-/skalaparameter), lognormal, gamma, logistisk/loglogistisk. Ekstremverdi ↔ Weibull-koblingen.

**Ikke-parametrisk:**
- Kaplan-Meier: R̂(t)=∏_{Tⱼ≤t}(1−dⱼ/Y(Tⱼ))
- Nelson-Aalen: Â(t)=Σ_{Tⱼ≤t} 1/Y(Tⱼ), σ̂²(t)=Σ 1/Y(Tⱼ)²
- KI (NA, log-transform): Â·exp(±z_{α/2}·σ̂/Â)
- Aalen-Johansen: ∏(I+ΔÂ(t)) (matriseprodukt)

**Regresjon:**
- Cox: z(t;x)=z₀(t)exp(βᵀx); partiell likelihood L(β)=∏_{Tⱼ} exp(βᵀx_{iⱼ})/Σ_{l∈Rⱼ}exp(βᵀx_l)
- AFT / log-location-scale: ln T = μ + σU; R_T(t)=R_U((ln t−μ)/σ)
- ALT/Arrhenius: ln T = β₀ + β₁·(11604.83/(s+273.16)) + σU
- Delta-metode: Var(g(β̂)) ≈ ∇gᵀ · Cov(β̂) · ∇g

**Tellprosess/martingal:**
- Multiplikativ intensitet: λ(t)=α(t)Y(t)
- Doob-Meyer: N(t)=∫₀ᵗλ(u)du + M(t), M nullforventnings-martingal
- Prediktabel variasjon ⟨M⟩(t)=∫λ; martingalintegral ∫HdM er martingal for prediktabel H
- Frailty: Laplace-transform L(c)=E[e^(−cZ)], klynge-likelihood via (−1)^D L^(D)(V) (ABG 7.3)

**Verktøy:** R (`survfit`, `coxph`, `survreg`, `Surv`) og MINITAB (Weibull/lognormal ALT-regresjon). Kandidaten må kunne *lese* output og av og til *skrive* enkel R-kode (KM/NA-plott, varians/KI).

> **Lærebok:** Emnet følger Aalen, Borgan & Gjessing, *Survival and Event History Analysis* (ABG). Løsningene refererer eksplisitt til ABG-ligningsnummer (f.eks. (4.7) for partiell likelihood, (7.3) for frailty). Den anvendte tradisjonen støttet seg tidligere også på Rausand & Høyland (reliabilitet) og MINITAB-basert ALT.

---

## 7. Prognose og prioritering

### Nivå 1 — må sitte (dekker ~70 % av poengene, med i så godt som hvert sett)
1. **Hasard/overlevelse-oversettelsen** (z↔Z↔f↔R, median/kvantiler) — sjanger A.
2. **Kaplan-Meier og Nelson-Aalen for hånd** med plott, median og KI — sjanger B, C.
3. **Cox-output-tolkning:** relativ risiko, hasardratio-KI, delta-metoden, signifikans, «neste steg» — sjanger D.
4. **Likelihood for sensurerte data** og ML/profil-likelihood — sjanger G.
5. **Korrekt sensureringshåndtering** overalt (høyre/venstre/intervall).

### Nivå 2 — høy avkastning (avgjør B vs. A)
6. **Cox partiell likelihood utledet fra grunnprinsipp** — sjanger E (Tjelmeland-eksamen).
7. **Parametrisk regresjon / AFT / ALT-Arrhenius** med MINITAB/`survreg` — sjanger F.
8. **Martingal / Doob-Meyer / ikke-parametriske tester** — sjanger I (kjernen i moderne teori-eksamen).
9. **NHPP / programvarepålitelighet** (Goel-Okumoto, Jelinski-Moranda) — sjanger H.
10. **Weibull-fordelingens hasardform** og sannsynlighetsplott.

### Nivå 3 — for topp­karakter / bredde
11. **Frailty-modeller** (Laplace-transform, profil-likelihood) — sjanger J.
12. **Multistate/Aalen-Johansen** — sjanger K (ny, men trolig fast fremover).
13. **Log-rank-test**, TTT-plott/Barlow-Proschan.
14. **Klassisk reliabilitetsteori** (serie/parallell, Birnbaum, konkurrerende risiko) — sjanger L; lavt sannsynlig, men billig å dekke og hører hjemme for fullstendighet.
15. **Kureringsmodell** (defekt overlevelsesfordeling).

**Strategisk merknad for boka:** Fordi eksamensprofilen svinger sterkt med foreleser, bør boka bygges rundt en **felles kjerne** (nivå 1) og deretter to tydelige spor: et **anvendt/tolkende spor** (Cox-output, ALT, MINITAB/R) og et **teoretisk/utledende spor** (tellprosesser, martingaler, partiell likelihood fra grunnen, frailty). Begge må være komplette — en student vet ikke hvilken variant hen møter.

---

## 8. Kildeliste

Arkiv: `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4275/` (~40 filer, 2007–2024).

**Lest grundig (oppgave + full maskinlesbar løsning):**
- Jun 2018 (`ExamTMA4275-June2018.pdf` + `SolutionTMA4275-June2018.pdf`) — Tufto: hazard/R, KM, TTT+Barlow-Proschan, loglogistisk AFT, delta-metode, Cox+Schoenfeld.
- Jun 2022 (`eksJun22e.pdf` + `eksJun22l.pdf`) — Tjelmeland: Nelson-Aalen+R, hasard→R/f, Cox-KI, partiell likelihood-utledning, frailty/Laplace, martingal/kompensator.
- Jun 2021 (`eksJun21e.pdf` + `eksJun21l.pdf`) — Tjelmeland: hasard fra R, martingal-flervalg, KM to grupper, Cox-output, sub-martingal/kompensator.

**Sensor-/vurderingsregler (lest grundig):**
- `eksJun22s.pdf`, `eksJun23s.pdf`, `eksMai24s.pdf` — poengmodell, karaktergrenser, eksplisitte straffe-regler.

**Lest på oppgavenivå:**
- Jun 2019 (`eksJun19b.pdf`/`eksJun19e.pdf`) — Paglia: Nelson-Aalen+hasardskisse, ALT/Arrhenius+lognormal+MINITAB, NHPP (Goel-Okumoto/Jelinski-Moranda).
- Jun 2020 (`eksJun20e.pdf`) — COVID-19: KM, Weibull-regresjon, kovariattolkning.
- Mai 2024 (`eksMai24e.pdf`) — Tjelmeland: hasard, Cox-output, parametrisk to-type-modell/profil-likelihood, Doob-Meyer-test, Aalen-Johansen/Markov.
- Nynorske sett: `NoExamTMA4275-Mai2013/2014/2015.pdf`, `NoExamTMA4275-Juni2016.pdf`.
- Engelske sett: `ExamTMA4275-June2016.pdf`, `ExamTMA4275-June2017.pdf` (Cox+log-rank+Schoenfeld+lognormal).

**Skumlest (temaregistrering):**
- `Exam2007.pdf`, `English-ExamTMA4275-May2008.pdf`, `ExamTMA4275-May2008/2009/2011/2012/2013/2014/2015.pdf`, `ExamTMA4275-June2010.pdf` — klassisk Lindqvist-tradisjon: reliabilitet, serie-/parallellsystemer, Birnbaum-importans, konkurrerende risiko, NHPP, ALT.

**Skann-hull (ikke maskinlesbare — ingen tekstlag):**
- Løsninger: `SolutionTMA4275-May2009.pdf`, `SolutionTMA4275-June2010-Probl2-3.pdf`, `SolutionTMA4275-May2012-Probl1-2-4.pdf`, `SolutionTMA4275-May2013.pdf`, `SolutionTMA4275-May2014.pdf`, `SolutionTMA4275-May2015.pdf`, `SolutionTMA4275-June2016.pdf`, `SolutionTMA4275-June2017.pdf`.
- Eksamenssett: `eksJun19l.pdf` (nynorsk 2019), `eksJun20l.pdf` (nynorsk 2020).
- **Konsekvens:** temadekningen 2009–2017 er komplett via tekst-variantene, men de *utførte løsningene* før 2018 må OCR-behandles eller løses på nytt ved behov. Alle løsninger fra 2018 og senere er maskinlesbare.

> **Opphavsrettsnote:** Alt innhold i dette dokumentet er omskrevet med egne ord. Ingen oppgavetekster, løsningsforslag eller figurer fra UDIR/NTNU er gjengitt ordrett. Standard statistiske metodenavn og matematisk standardnotasjon er faglig allemannseie og brukes fritt. Originale eksamensoppgaver tilhører NTNU / Institutt for matematiske fag; ved publisering av lærebok må figurer og datasett fra originalene ikke reproduseres.
