# Eksamensanalyse: MA1101 Grunnkurs i analyse 1 (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på NTNUs arkiv 2003–2023: 18 løsningsforslag/fasiter lest grundig (H2008, H2009, H2012, H2013, H2014, H2015, kont V2015, H2016, H2017, aug 2017, H2018, aug 2018, H2019, H2020, H2021, aug 2021, H2022, kont H2022/aug 2023) og ytterligere ~15 eldre oppgavesett/fasiter (2003–2011) skumlest for temaregistrering. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasiter. Analysen er kvantitativ der kildene tillater det.
>
> **Emneidentitet (verifisert mot NTNUs emneside):** MA1101 «Grunnkurs i analyse 1» (Basic Course in Analysis 1), 7,5 studiepoeng, aktiv (høst). Bygger på R2. Pensum: reelle tall og reelle funksjoners egenskaper, grenser, kontinuitet, funksjoners oppførsel, differensial- og integralregning, sentrale funksjoner (polynom, eksponential, trigonometriske), numeriske metoder for integrasjon og likningsløsning, samt matematisk stringens og bevisteknikk. MA1101 er NTNUs én-variabel analysegrunnkurs og overlapper **tematisk** med UiO MAT1100 (Kalkulus) og TMA4100-tradisjonen, men er et **selvstendig emne** med eget arkiv og — avgjørende — en egen bevis- og teoriprofil. Denne analysen er kalibrert mot MA1101s **faktiske** arkiv, ikke MAT1100s. Merk særlig at flervariabel-, lineær algebra- og kompleks-tall-stoffet som dominerer MAT1100 **ikke** finnes i MA1101; til gjengjeld er ε-δ-teori, uniform kontinuitet, sup/inf-argumenter, differensiallikninger og rekker mer fremtredende her.

---

## 1. Eksamensform og utvikling

MA1101 undervises kun om **høsten**; hovedeksamen er en desembereksamen, med kontinuasjonseksamen (kont) om våren/sommeren eller i august. Vurderingen har vært i endring:

| Periode | Vurderingsform | Kommentar |
|---|---|---|
| ~2003–2023 (arkivet) | **Ren skriftlig slutteksamen**, 4 timer (09:00–13:00) | Hele karakteren fra ett skoleeksamenssett. Kalkulator kode D (bestemt, enkel) + vedlagt formelark |
| Nyere ordning (2024→, verifiser) | **Todelt: skriftlig skoleeksamen 70 % + prosjekt 30 %** | Prosjektdelen er **ikke arkivbelagt** — ingen prosjektoppgaver eller -fasiter finnes i materialet. Skoleeksamensdelen antas å videreføre sjangrene under |

**Utviklingstrekk i selve oppgavesettene (dokumentert):**

| Periode | Struktur på skoleeksamen | Kjennetegn |
|---|---|---|
| 2008–2014 | ~7–8 hovedoppgaver med delpunkter (a, b, c), ulik vekting angitt per oppgave | Tekstoppgaver med figur (relaterte rater, optimering) sto sentralt; annenordens difflikninger og differensligninger med i pensum (formelark) |
| 2015–2017 | 8–10 delpunkter/oppgaver som **teller likt** | Fast formelark vedlagt (eksponential, logaritme, trig, arcus, annenordens differensligning). 2016/2017-desember: 9 oppgaver likt vektet |
| 2018–2023 | **Sann/Usann-teorioppgave som fast åpning** (10–20 p, ingen begrunnelse kreves) + 6–9 regne-/bevisoppgaver à 10 p | «Motiver dine beregninger/beviser» er standardinstruks (unntatt teorioppgaven). Nyere sett er ofte skrevet/besvart på engelsk i fasit |
| 2020–2021 (korona) | Enkelte sett med hjelpemiddelkode B (**alle hjelpemidler**) | Kompensert med teori-/eksistens- og «finn et eksempel»-oppgaver |

**Konstanter på tvers av alle år:**
- Tidsbudsjett ~4 timer på 8–10 likt vektede punkter ⇒ ~25–30 min per hovedoppgave.
- **Hver eksamen inneholder minst én differensiallikning** (nesten alltid førsteordens, initialverdiproblem) og minst ett integral som krever teknikk (delbrøk eller substitusjon).
- **Bevis-/teoriinnslag er obligatorisk**: enten en Sann/Usann-blokk, en ε-δ-oppgave, en sekant-/middelverdisetning-oppgave, eller en definisjonsbasert deriverbarhets-oppgave. Dette er den viktigste forskjellen fra en ren regneeksamen.
- Fasitene honorerer **alternative løsninger** eksplisitt (skive- vs. skallmetode, L'Hôpital vs. Taylor, substitusjon vs. delbrøk) og påpeker sensorfeller i kommentarfeltene (særlig fasitene 2008–2009).

---

## 2. Temafrekvens-tabell (kvantitativ)

Celleverdi = antall sett i perioden der temaet forekommer som egen (del)oppgave. Grunnlaget er de 18 grundig leste settene, gruppert. «Eldre» (2003–2011) er skumlest og teller inn i venstre kolonne der mønsteret er tydelig.

| Tema | 2008–2014 (~6 sett) | 2015–2017 (5) | 2018–2023 (7) | **Gjenganger-score** |
|---|---|---|---|---|
| **Differensiallikninger** (1. ordens: separabel/integrerende faktor; IVP) | 6 | 5 | 6 | **17/18 = 94 %** |
| **Integrasjonsteknikk** (delbrøk, substitusjon, delvis, fullført kvadrat) | 6 | 5 | 7 | **18/18 = 100 %** |
| **Funksjonsdrøfting** (ekstrema, monotoni, konveksitet, asymptoter, skisse) | 6 | 5 | 5 | **16/18 = 89 %** |
| **Deriverbarhet/kontinuitet i punkt** (stykkevis, def./skvis, oscillasjon) | 4 | 4 | 5 | **13/18 = 72 %** |
| **Grenseverdier / L'Hôpital** (ubestemte former, standardgrenser) | 5 | 4 | 4 | **13/18 = 72 %** |
| **Uegentlige integraler** (konvergens via sammenligningstest) | 3 | 3 | 6 | **12/18 = 67 %** (6/7 siste år — stigende) |
| **Riemann-sum gjenkjent som integral** | 2 | 3 | 5 | **10/18 = 56 %** (fast Sann/Usann- og egen-oppgave) |
| **Eksistensbevis via skjæringssetningen** (antall nullpunkt/løsninger) | 4 | 3 | 3 | **10/18 = 56 %** |
| **Middelverdi-/sekantsetning med hjelpefunksjon** (ulikhetsbevis o.l.) | 4 | 3 | 3 | **10/18 = 56 %** |
| **Derivert av invers funksjon i punkt** ((f⁻¹)′(b) = 1/f′(a)) | 3 | 4 | 1 | **8/18 = 44 %** |
| **Omdreiningsvolum / buelengde** | 4 | 3 | 1 | **8/18 = 44 %** (fallende) |
| **Relaterte rater** (figur: stige, drage, fallskjerm, båt) | 4 | 2 | 0 | **6/18 = 33 %** (forsvunnet etter ~2016) |
| **Taylor-/McLaurin-polynom + restledd/feilestimat** | 1 | 1 | 5 | **7/18 = 39 %** (5/7 siste år — sterkt stigende) |
| **Rekker** (geometrisk, teleskoperende, konvergens av ledd) | 0 | 0 | 4 | **4/18 = 22 %** (0 før 2020, så fast) |
| **Følger** (grense, begrensethet, konstruksjon/eksempel) | 1 | 1 | 5 | **7/18 = 39 %** (voksende) |
| **sup/inf og elementær mengdelære** (grenser for mengder) | 0 | 0 | 4 | **4/18 = 22 %** (helt nytt fra 2021) |
| **ε-δ-bevis** (kontinuitet/grense fra definisjonen) | 2 | 1 | 3 | **6/18 = 33 %** |
| **Uniform (jevn) kontinuitet** | 0 | 0 | 3 | **3/18 = 17 %** (nytt fra 2018) |
| **Fundamentalteoremet + kjerneregel** (variable grenser) | 3 | 3 | 3 | **9/18 = 50 %** |
| **Implisitt derivasjon / tangent til kurve** | 3 | 2 | 3 | **8/18 = 44 %** |
| **Optimering** (maks/min under bibetingelse, geometrisk figur) | 3 | 2 | 2 | **7/18 = 39 %** |
| **Annenordens difflikning + differensligning** (karakteristisk likning) | 3 | 1 | 0 | **4/18 = 22 %** (i formelark t.o.m. ~2015; forsvunnet fra oppgaver etter) |
| **Induksjonsbevis** (sum-/derivasjonsformel) | 1 | 0 | 1 | **2/18 = 11 %** |

### Viktigste funn

1. **Differensiallikninger + integrasjonsteknikk er ryggraden** (94 % og 100 %). Hver eneste eksamen har minst ett integral som krever teknikk, og nesten hver har en førsteordens difflikning (separabel eller integrerende faktor, oftest som initialverdiproblem). En eksamensrettet bok må gi begge svært stor plass — dette er hvor «bestått» hentes.
2. **Teori- og bevisprofilen er MA1101s signatur og skiller emnet skarpt fra en ren regneeksamen.** Deriverbarhet fra definisjonen, ε-δ, uniform kontinuitet, sup/inf, sekant-/middelverdisetning med hjelpefunksjon, og Sann/Usann-teorioppgaven utgjør til sammen minst 2–3 punkter i hvert nyere sett. **Dette er den tydeligste karakterskilleren.**
3. **Klart temaskifte rundt 2018–2020.** Relaterte rater og omdreiningsvolum (dominerende 2008–2015) er nesten borte etter 2016. Inn kommer: **Sann/Usann-teoriblokk** (fast åpning fra 2018), **Taylor/McLaurin med feilestimat** (5/7 siste sett), **rekker** (fra 2020), **sup/inf/mengdelære** (fra 2021), og **uniform kontinuitet** (fra 2018). Boken må vektlegge disse nyere sjangrene tyngre enn arkivsnittet tilsier.
4. **Signaturoppgaven kontinuitet/deriverbarhet i punkt** går igjen gjennom hele perioden (72 %), oftest med funksjonsfamilien x^k·sin(1/x^m) eller x^k·sin(c/x): vis kontinuitet med skvis, deriverbarhet fra grensedefinisjonen, og at f′ er diskontinuerlig i 0 (oscillasjonsfellen). Denne dukker opp i minst 2013, 2015, 2018, 2019, 2020.
5. **Ingen kompleks tall, ingen matriser/lineær algebra, ingen flervariabel-gradient** i noe MA1101-sett — motsatt av MAT1100. Ikke prioriter dette.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav, frekvens og **ett omskrevet eksempel** per sjanger.

### A. Førsteordens differensiallikning / initialverdiproblem
- **Krav:** Gjenkjenn type. **Separabel**: skill variablene, integrer begge sider, sett inn initialbetingelse, løs for y. **Lineær** y′ + p(x)y = q(x): finn integrerende faktor e^∫p, skriv venstresiden som (e^∫p·y)′, integrer. Fasit godtar begge metoder der begge går. Nyere variant (2022, 2023): oppgi **det største intervallet I rundt startpunktet der løsningen eksisterer** (finn hvor uttrykket, f.eks. tan, er definert). Klassifiseringsvariant (2020): «hvilken orden? lineær? homogen?».
- **Frekvens:** 17/18; nesten alltid som initialverdiproblem.
- **Omskrevet eksempel:** «Løs y′ = x(1 + y²) med y(0) = 1, og oppgi det største åpne intervallet om 0 der løsningen er definert.»

### B. Integrasjonsteknikk (delbrøk, substitusjon, delvis, fullført kvadrat)
- **Krav:** Alle fire teknikkene og fasitens føringsstandard:
  - **Delbrøkoppspalting**: også med irreduserbar kvadratisk faktor (Bx+C-teller) og gjentatt lineær faktor (1/(x(x−1)²)); polynomdivisjon først når tellergrad ≥ nevnergrad; kombinasjonsformen (ax+b)/(x²+px+q) splittes i ln-del + arctan-del.
  - **Substitusjon**: bokfør u, du, nye grenser; klassikere u = x², u = arctan x, u = ln x, u = sin x, trig-substitusjon x = a·sin u / x = sinh u for √(a²−x²)-nevnere.
  - **Delvis integrasjon**: produkter og «ensomme» funksjoner (ln, arcsin, arctan); x²cos x med to runder.
  - **Fullføre kvadratet** → arctan-form.
- **Frekvens:** 18/18; typisk 2–3 delpunkter per sett (ofte samlet i én «beregn disse integralene»-oppgave).
- **Omskrevet eksempel:** «Beregn ∫ 2x²/((x²+4)(x+2)) dx.»

### C. Funksjonsdrøfting med skisse
- **Krav:** Definisjonsmengde, nullpunkter, f′ med **fortegnsskjema** (tegnet fortegnslinje forventes), lokale/globale ekstrema (på lukket intervall: sjekk også randpunkter), konveksitet/vendepunkter via f″, **asymptoter komplett** (vertikale fra nevner-nullpunkt; horisontale/skrå via grenser eller polynomdivisjon), til slutt skisse. Skråasymptote-teknikken (grense av f(x)/x, så f(x)−mx) er årviss.
- **Frekvens:** 16/18.
- **Omskrevet eksempel:** «La f(x) = (x²−5x+6)/(x−1). Finn definisjonsmengde, ekstrema, asymptoter og skisser grafen.»

### D. Deriverbarhet og kontinuitet i ett punkt (signaturoppgaven)
- **Krav:** Stykkevis definert funksjon, typisk x^k·sin(1/x^m) eller x^k·sin(c/x):
  - Kontinuitet: vis lim f(x) = f(0) med **skviseargument** (|sin|≤1 skal uttales), eller standardgrensen sin x/x → 1.
  - Deriverbarhet: **grensedefinisjonen** f′(0) = lim (f(h)−f(0))/h — ikke innsetting i derivertformel.
  - Oscillasjonsfellen: f kan være deriverbar i 0 **selv om** lim f′(x) ikke finnes (f′ er da bare diskontinuerlig) — dette er en gjenganger (2015, 2019, 2020) og en klar karakterskiller.
  - Variant med parameter a (2018-kont, aug 2018): finn for hvilke a funksjonen x|x|^a er kontinuerlig/deriverbar i 0.
  - Motsatt retning som teorem (2016): finnes lim f′(x) og f er kontinuerlig, så er f deriverbar med f′(0) = grensen (bevis med sekantsetning/L'Hôpital).
- **Frekvens:** 13/18.
- **Omskrevet eksempel:** «La f(x) = x²sin(2/x) for x ≠ 0 og f(0) = 0. Vis at f er deriverbar i 0, og at lim_{x→0} f′(x) ikke eksisterer.»

### E. Grenseverdier og L'Hôpital
- **Krav:** Alle ubestemte former: 0/0, ∞/∞, 1^∞, ∞−∞. Malen i fasit: **marker [0/0] før hver L'Hôpital-anvendelse**; for 1^∞/0^0 ta logaritmen først; konjugattriks for rot-uttrykk; standardgrensene sin x/x → 1 og veksthierarki (ln ≪ potens ≪ eksp). Kombineres ofte med fundamentalteoremet (grense av ∫₀ˣ …).
- **Frekvens:** 13/18 som egen oppgave; teknikken inngår i mange flere.
- **Omskrevet eksempel:** «Beregn lim_{x→∞} (1 + 3/x)^x.»

### F. Uegentlige integraler — konvergens
- **Krav:** **Sammenligningstest**: klem integranden mot et kjent p-integral (∫₁^∞ 1/x^p konvergerer ⇔ p > 1), navngi sammenligningsobjektet, og før direkte beregning alltid med eksplisitt grense (lim_{R→∞}, «sett inn ∞» godtas ikke). Parametervariant (aug 2021): for hvilke λ konvergerer ∫₀^∞ 1/(e^x−e^{−x})^λ — del i endepunkt-singularitet ved 0 og hale ved ∞.
- **Frekvens:** 12/18; 6/7 siste sett (voksende).
- **Omskrevet eksempel:** «Avgjør om ∫₁^∞ (x·cos²x)/(x³+1) dx konvergerer. Bruk sammenligningstesten.»

### G. Riemann-sum som integral
- **Krav:** Gjenkjenn (1/n)·Σ f(k/n) (eller varianter med 2n+k, n²+i²) som en Riemann-sum, identifiser integranden f og intervallet, og beregn ∫. Opptrer både som egen oppgave og som Sann/Usann-utsagn.
- **Frekvens:** 10/18.
- **Omskrevet eksempel:** «Finn lim_{n→∞} Σ_{k=1}^n 1/(2n+k).»

### H. Eksistens- og teoribevis (skjæringssetning + middelverdisetning)
- **Krav:** To arketyper:
  - **Skjæringssetningen** for antall løsninger/nullpunkt: vis fortegnsskifte mellom to punkter, **si eksplisitt at f er kontinuerlig**, navngi setningen for eksistens; bruk deretter monotoni (f′ har fast fortegn) for å begrense antallet. «Nøyaktig én/to løsninger»-formuleringen krever begge halvdeler.
  - **Middelverdi-/sekantsetning med hjelpefunksjon**: for ulikheter (ln(1+x) ≤ x, Bernoulli (1+x)^r ≥ 1+rx) eller «det finnes c med f′(c) = g′(c)» — konstruer h = f − g, sjekk forutsetningene eksplisitt, navngi setningen. Vanlig feil (fasit 2009): å bruke sekantsetningen separat på f og g gir ikke samme c.
- **Frekvens:** skjæringssetning 10/18, MVT/sekant 10/18; teoribevis i en eller annen form i ~15/18 sett.
- **Omskrevet eksempel:** «Vis at 2x − sin x − 1 = 0 har nøyaktig én løsning, og lokaliser den til et intervall av lengde 1/2.»

### I. Sann/Usann-teoriblokk (fast åpning fra 2018)
- **Krav:** 5–10 utsagn, svar «Sann»/«Usann» (av og til «Kan ikke avgjøres»), **ingen begrunnelse kreves i besvarelsen** — men studenten må ha teorien i fingrene. Utsagnene tester: definisjonsgrenser (deriverbar ⇔ differansekvotienten eksisterer), standardgrenser, fundamentalteoremet, Riemann-sum-konvergens, kontinuitet vs. begrensethet, ekstremalverdisetningen, uniform kontinuitet, sup/inf-regler, vendepunkt ⇎ f″ = 0, moteksempel-kunnskap (|x| ikke deriverbar; arctan begrenset uten maks; harmonisk rekke divergerer selv om leddene → 0).
- **Frekvens:** 5/7 siste sett (2018, 2019, 2021, 2022, 2023).
- **Omskrevet eksempel:** «Sann eller usann: Enhver begrenset funksjon f: ℝ → ℝ har et globalt maksimum. (Usann — f.eks. arctan.)»

### J. Taylor-/McLaurin-polynom med feilestimat
- **Krav:** Regn deriverte i utviklingspunktet og sett inn i Taylorformelen; **eller** integrer/komponer en kjent rekke (e^t, sin, cos). Feilestimat-variant (2022, 2023): bruk restleddet f^(n+1)(c)/(n+1)!·x^(n+1), begrens |f^(n+1)| på intervallet, vis at feilen < gitt toleranse. Ofte anvendt på en integralfunksjon F(x) = ∫₀ˣ g(t) dt.
- **Frekvens:** 7/18; 5/7 siste sett (sterkt stigende).
- **Omskrevet eksempel:** «La f(x) = ∫₀ˣ √(1+t²) dt. Finn Taylorpolynomet av grad 3 om 0, og gi en tilnærming til f(0,1) med feil under 0,001.»

### K. Fundamentalteoremet + kjerneregel
- **Krav:** d/dx ∫_a^{g(x)} h(t) dt = h(g(x))·g′(x) — **kjerneregelfaktoren er poenget**; variable grenser i begge ender gir differanse av to slike ledd (2017: ∫_{x²}^1). Kombineres ofte med kontinuitet/deriverbarhet av en integralfunksjon i 0.
- **Frekvens:** 9/18.
- **Omskrevet eksempel:** «Finn d/dx ∫_{x²}^1 e^{−t²} dt.»

### L. Implisitt derivasjon og tangent
- **Krav:** Deriver relasjonen implisitt mhp. x (kjerneregel på y = y(x)), løs for y′, sett inn punktet, skriv tangentlikningen. Sjekk gjerne at punktet ligger på kurven. Kobles av og til til Taylor for y(x) (2019) eller til invers-derivert.
- **Frekvens:** 8/18.
- **Omskrevet eksempel:** «Finn tangenten til x³y² − x²y³ = 4 i punktet (2, 1).»

### M. Derivert av invers funksjon
- **Krav:** Vis at f er strengt monoton (f′ har fast fortegn) ⇒ invers finnes; beregn (f⁻¹)′(b) = 1/f′(a) der f(a) = b (finn a ved inspeksjon). Ren «vis at inversen finnes»-halvdel + regnehalvdel.
- **Frekvens:** 8/18.
- **Omskrevet eksempel:** «Vis at f(x) = 2x + sin x har en invers g, og beregn g′(2π).»

### N. Omdreiningsvolum og buelengde
- **Krav:** **Velg metode etter akse**: om x-aksen → skiver V = π∫f² dx; om y-aksen → sylinderskall V = 2π∫x·f dx (eller skiver med x = f⁻¹(y)). Buelengde ℓ = ∫√(1+f′²) dx; overflate S = 2π∫r·ds. Kobles av og til til fysikk (tanktapping, Torricelli) og kjerneregel for dh/dt.
- **Frekvens:** 8/18 (dominerte 2008–2015, nesten borte etter 2016).
- **Omskrevet eksempel:** «Området under y = √x·sin x for 0 ≤ x ≤ π dreies om x-aksen. Finn volumet.»

### O. Følger, rekker og sup/inf (den nye teoriblokken)
- **Krav:** **Følger**: grense, «begrenset + monoton ⇒ konvergent», konstruer et eksempel (begrenset men divergent: (−1)ⁿ; eller to følger med gitt asymptotisk oppførsel). **Rekker**: geometrisk (Σr^k = 1/(1−r) for |r|<1), teleskoperende via delbrøk, eksponentialrekke (Σ2ⁿ/n! = e²−1), og teori-utsagnet «lim aₙ = 0 ⇏ Σaₙ konvergerer» (harmonisk moteksempel). **sup/inf**: finn og begrunn sup for en mengde (vis øvre skranke + at ingen mindre skranke finnes via ε-argument); regneregler for sup(A+B), inf(A−B) (distraktorer bytter fortegn/rekkefølge).
- **Frekvens:** følger 7/18, rekker 4/18, sup/inf 4/18 — alle konsentrert i 2020–2023.
- **Omskrevet eksempel:** «Beregn Σ_{n=1}^∞ 1/((n+1)(n−1)) (teleskoper via delbrøk), og avgjør om Σ1/n konvergerer.»

### P. ε-δ- og uniform-kontinuitet-bevis
- **Krav:** **ε-δ**: skriv definisjonen først, faktoriser |f(x)−f(a)|, avgrens én faktor på et kontrollert intervall, velg δ = min(1, ε/K). **Uniform kontinuitet**: på kompakt intervall følger det av kontinuitet (teorem); på ubegrenset intervall bruk |f(x)−f(y)| = |f′(ξ)||x−y| ≤ M|x−y| (velg δ = ε/M) — eller vis at det **feiler** når f′ er ubegrenset (2019: e^{x²}-type).
- **Frekvens:** ε-δ 6/18, uniform kontinuitet 3/18 (begge nyere).
- **Omskrevet eksempel:** «Vis med et ε-δ-argument at f(x) = √x er kontinuerlig i 0, og at f ikke er deriverbar der.»

### Numeriske metoder (pensumnevnt, tynt arkivbelagt)
Emnebeskrivelsen nevner numeriske metoder for integrasjon og likningsløsning (Newtons metode, trapes/Simpson, halveringsmetoden). Disse er **svakt representert** i arkivet — de opptrer indirekte via feilestimat-oppgavene (Taylor-restledd som numerisk tilnærming) og skjæringssetning-lokalisering (rot-innkapsling), men rene «kjør to Newton-steg»-oppgaver er sjeldne/fraværende i de leste settene. Dekk metodene fordi de står i pensum; merk at eksamensbelegget er indirekte (verifiser mot nyere sett).

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og fasiter)
1. **«Motiver dine beregninger/beviser»** er standardinstruks. Ubegrunnet svar gir liten uttelling — fasitene 2008–2009 sier eksplisitt at «rett svar uten begrunnelse gir ingen uttelling», særlig i optimering (begrunn at kandidaten er globalt ekstremum) og eksistensoppgaver.
2. **Teoremer skal navngis** når de bærer argumentet: skjæringssetningen (= mellomverdisetningen), sekant-/middelverdisetningen, ekstremalverdisetningen, fundamentalteoremet + kjerneregelen, sammenligningstesten, skviseteoremet, L'Hôpital (med [0/0]-markering før hver bruk). Fasit 2008 trekker eksplisitt for å forveksle skjæringssetningen med sekantsetningen eller Rolle.
3. **Deriverbarhet i punkt skal vises fra differansekvotienten** — å derivere uttrykket og ta grensen er ikke gyldig bevis der definisjonen etterspørres. Fasit godtar grense-av-derivert-kriteriet kun når grensen faktisk finnes og kontinuitet er etablert.
4. **Føringsstandard**: substitusjoner bokføres (u, du, nye grenser); delvis integrasjon dokumenterer u/v′-valget; fortegnsskjema tegnes for monotoni/konveksitet; uegentlige integraler føres med eksplisitt lim; drøfting avsluttes med skisse når det bes om.
5. **Begrunn eksistens/entydighet separat**: «nøyaktig N løsninger» krever både eksistens (skjæringssetning) **og** entydighet/antallsbegrensning (monotoni). Fasit 2008/2009 påpeker at mange bare viser den ene halvdelen.
6. **Optimering krever globalitetsargument**: annenderiverttest eller fortegnsskjema, ikke bare f′ = 0.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: standard integrasjonsteknikk med dokumentert substitusjon, separabel/lineær difflikning med initialbetingelse, ekstrema på lukket intervall, grenser med L'Hôpital, tangent via implisitt derivasjon.
- **Midtsjiktet** behersker i tillegg: konvergensargument med navngitt sammenligningsintegral, komplett drøfting med skråasymptote og skisse, Riemann-sum-gjenkjenning, Taylorpolynom, kontinuitetsdelen av signaturoppgaven, derivert av invers.
- **Toppsjiktet** kjennetegnes av: (i) korrekt bruk av **definisjoner** i deriverbarhets-spørsmål og kjennskap til **oscillasjonsfellen** (lim f′ finnes ikke ⇏ ikke deriverbar); (ii) fullførte **bevis** med hjelpefunksjon der forutsetningene sjekkes eksplisitt; (iii) presis Sann/Usann med moteksempel-beredskap; (iv) sup/inf-argumenter med ε; (v) uniform kontinuitet både bekreftet og motbevist; (vi) i «finn et eksempel»-oppgaver: eksempel **med verifikasjon** av alle kravene; (vii) feilestimat med restleddsbegrensning.
- **Alternative løsninger honoreres konsekvent**: skive vs. skall, separabel vs. integrerende faktor, L'Hôpital vs. Taylor, substitusjon vs. delbrøk, ε-δ vs. følgekarakterisering. Fasitene skriver ofte begge veier.

---

## 5. Typiske feil (fra fasit-kommentarer, særlig 2008–2009, og innebygde feller)

1. **Deriverbarhet «bevist» med derivertformel** i stedet for differansekvotienten; spesielt å konkludere «ikke deriverbar» fordi lim f′(x) ikke finnes (oscillasjonsfellen — feil i signaturoppgaven).
2. **Eksistens uten entydighet (eller omvendt)**: «minst to nullpunkt» vises, men ikke at det ikke er flere (mangler monotoni-argument) — eksplisitt sensorklage 2008.
3. **Skjæringssetning brukt uten kontinuitet**: å bare vise fortegnsskifte i endepunktene; kontinuiteten må uttales (moteksempel: stykkevis hoppfunksjon).
4. **Forveksling av setninger**: skjæringssetningen ↔ sekantsetningen ↔ Rolle; sekantsetningen brukt separat på to funksjoner gir ikke felles c.
5. **Delbrøk-oppsett feil**: konstant teller over irreduserbar kvadratisk faktor (skal være Bx+C); glemt polynomdivisjon når tellergrad ≥ nevnergrad.
6. **Feil metode for rotasjonsaksen**: skiveformel om y-aksen eller skall om x-aksen; å ikke tegne området før oppsettet.
7. **Konvergenspåstand uten navngitt sammenligningsobjekt**; «sett inn uendelig» i stedet for lim.
8. **Glemt kjerneregelfaktor g′(x)** i fundamentalteorem-oppgaver med variable grenser.
9. **Optimering uten globalitetsargument**: f′ = 0 uten annenderiverttest/fortegnsskjema; rett svar uten begrunnelse.
10. **Difflikning: feil integrerende faktor / uteglemt initialbetingelse**; glemt konstant-tilfellene y ≡ c ved separasjon (der man delte på null).
11. **Sann/Usann-feller**: «grensene fra begge sider er like ⇒ kontinuerlig» (glemmer f(a)); «lim aₙ = 0 ⇒ Σaₙ konvergerer» (harmonisk moteksempel); «f″(x₀) = 0 ⇒ vendepunkt»; «begrenset ⇒ har maksimum».
12. **sup/inf-slurv**: sup A = tallet i mengdedefinisjonen i stedet for kvadratrota (f.eks. {x²<3} gir sup = √3, ikke 3); feil fortegn i sup(A+B)/inf(A−B).
13. **Relaterte rater**: sette opp geometrisk sammenheng, men ikke tidsderivere (glemt kjerneregel), eller feiltolke fortegnet i konklusjonen.

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og delvis bevise)
- **Skjæringssetningen (mellomverdisetningen)** — eksistens av løsning; hjelpefunksjon + fortegnsskifte + kontinuitet + navn.
- **Ekstremalverdisetningen** og **«monoton + begrenset ⇒ konvergent»** (kompletthetsaksiomets arbeidsform; både for følger og som teoriutsagn).
- **Middelverdisetningen / sekantsetningen** — aktivt: hjelpefunksjonskonstruksjon, ulikhetsbevis (ln(1+x) ≤ x, Bernoulli), «f′ ≡ 0 ⇒ konstant», «samme derivert ⇒ funksjonene skiller seg med en konstant».
- **Analysens fundamentalteorem** + kjerneregel for variable grenser (Leibniz-regel).
- **Skviseteoremet** — arbeidshesten i x^k·sin/cos(1/x)-oppgaver; begrensetheten skal uttales.
- **Standardgrenser**: sin x/x → 1, veksthierarki (ln ≪ potens ≪ eksp), e-grensene (1+a/x)^x → e^a via logaritme.
- **L'Hôpital** med eksplisitt [0/0]/[∞/∞]-markering; alle ubestemte former føres dit (logaritme for 1^∞/0^0, fellesnevner for ∞−∞).
- **Deriverbarhetsdefinisjonen** (differansekvotienten) og forholdet deriverbar ⇒ kontinuerlig (ikke omvendt); grense-av-derivert-kriteriet med gyldighetsbetingelse.
- **ε-δ-definisjonene** av grense og kontinuitet; det kvantitative «velg δ = min(1, ε/K)»-mønsteret; **uniform kontinuitet** (kompakt ⇒ uniform; f′ begrenset ⇒ uniform; motbevis når f′ ubegrenset).
- **Derivert av omvendt funksjon**: (f⁻¹)′(b) = 1/f′(a).
- **Sammenligningstest** for uegentlige integraler + p-integralenes konvergensstatus (∫₁^∞ x^{−p}: konvergerer ⇔ p > 1; speilvendt i 0).
- **Riemann-sum ⇒ bestemt integral** (gjenkjenning begge veier).
- **Taylor/McLaurin med restledd** (Lagrange-form) og feilestimering; kjente rekker for e^x, sin, cos, geometrisk.
- **Rekker**: geometrisk sum, teleskopering, eksponentialrekke; «lim aₙ = 0 er nødvendig, ikke tilstrekkelig».
- **sup/inf** som minste øvre / største nedre skranke; kompletthet; regneregler.

### Må forstås, men testes sjelden/aldri i det leste arkivet
- **Annenordens difflikning med konstante koeffisienter** (karakteristisk likning, homogen + partikulær) og **differensligning** xₙ₊₂ + bxₙ₊₁ + cxₙ = 0 — stod på formelarket og i oppgaver t.o.m. ~2015 (H2008, H2009, kont V2015), men er borte fra nyere sett. Dekk lett; merk som «eldre profil».
- **Induksjonsbevis** (sum-/derivasjonsformel; aug 2018, 2017) — lav frekvens.
- **Numeriske metoder** (Newton, trapes/Simpson, halvering) — pensumnevnt, men bare indirekte arkivbelagt (feilestimat, rot-innkapsling).

### IKKE i MA1101 (til forskjell fra MAT1100)
Komplekse tall, lineær algebra/matriser/determinant, flervariabel gradient/retningsderivert/Jacobi — **null forekomster**. Ikke prioriter.

### Notasjonskonvensjoner boken bør speile
- Vedlagt **formelark**: eksponential-/logaritme-/trig-/arcus-derivasjon og -identiteter, eksakte trig-verdier, og (i eldre år) annenordens differensligning. Boken bør trene mot dette arket.
- Fasitspråk: «sekantsetningen» (= MVT), «skjæringssetningen» (= mellomverdisetningen), fortegnsskjema, substitusjonsbokser, [0/0]-markering, eksplisitt lim på uegentlige integraler, integrerende faktor e^∫p.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Førsteordens differensiallikninger** (separabel + integrerende faktor, initialverdiproblem, eksistensintervall) — 94 %, minst én hver eksamen.
2. **Integrasjonsteknikk-repertoaret med føringsstandard** — 100 %; delbrøk (inkl. Bx+C og gjentatt faktor), substitusjon (inkl. trig/sinh), delvis, fullført kvadrat.
3. **Funksjonsdrøfting med skisse** — 89 %; fortegnsskjema, alle asymptotetyper inkl. skråasymptote, ekstrema på lukket intervall.
4. **Signaturoppgaven kontinuitet/deriverbarhet i punkt** — 72 %; definisjonsbruk, skvis, **oscillasjonsfellen**. Tydeligste karakterskiller.
5. **Grenser + L'Hôpital-disiplin** ([0/0]-markering, alle ubestemte former, standardgrenser) — 72 %.
6. **Sann/Usann-teoriberedskap** — 5/7 siste sett; hele teoripensumet i fingrene + moteksempler.

### Nivå 2 — må kunne (gir bredden i poengfangsten)
7. **Uegentlige integraler med navngitt sammenligning** — 67 %, stigende.
8. **Eksistensbevis (skjæringssetning) med entydighet via monotoni** — 56 %.
9. **Middelverdi-/sekantsetning med hjelpefunksjon** (ulikhetsbevis) — 56 %.
10. **Taylor-/McLaurin-polynom med feilestimat** — 5/7 siste sett; restledd + toleransebevis.
11. **Riemann-sum som integral** — 56 %.
12. **Fundamentalteoremet + kjerneregel** (variable grenser) — 50 %.
13. **Derivert av invers** og **implisitt derivasjon/tangent** — 44 % hver.
14. **Følger og rekker** (geometrisk, teleskoperende, konvergensteori) — nyere blokk, voksende.
15. **sup/inf og elementær mengdelære** — 4/7 siste sett; ε-argument for sup, regneregler.

### Nivå 3 — bør dekkes (lav/fallende arkivfrekvens eller pensumkrav uten sterkt belegg)
16. **Omdreiningsvolum/buelengde/overflate** — 44 %, fallende, men fortsatt gyldig; skive- vs. skallmetode.
17. **Relaterte rater og optimering med figur** — dominerte før 2016, nå sjeldnere; dekk pga. R2-bakgrunn og mulig gjenkomst.
18. **ε-δ- og uniform-kontinuitet-bevis** — nyere teoriblokk; malen δ = min(1, ε/K) og f′-begrenset-argumentet.
19. **Annenordens difflikning + differensligning** — eldre profil (t.o.m. ~2015), borte fra nyere oppgaver; dekk lett.
20. **Numeriske metoder** (Newton, trapes/Simpson, halvering) og **induksjon** — pensumnevnt / lav frekvens; dekk med standardmetoder, merk svakt eksamensbelegg.

### Prognose for neste skoleeksamen (basert på 2018–2023-malen)
8–10 likt vektede punkter over 4 timer, sannsynlig sammensetning:
- **Åpning: Sann/Usann-teoriblokk** (5–10 utsagn) som dekker definisjoner, standardgrenser, fundamentalteorem, Riemann-sum, kontinuitet/begrensethet, sup/inf, uniform kontinuitet, vendepunkt- og rekke-feller.
- **Én førsteordens difflikning** (initialverdiproblem, ofte separabel) med eksistensintervall-spørsmål.
- **Én «beregn disse integralene»-oppgave** med 2–3 teknikker (delbrøk + substitusjon/delvis), inkludert minst ett uegentlig integral med sammenligningstest.
- **Én funksjonsdrøfting** med asymptoter og skisse.
- **Ett Taylor-/McLaurin-polynom** med feilestimat (gjerne på en integralfunksjon).
- **Signaturoppgaven** kontinuitet/deriverbarhet i punkt fra oscillasjonsfamilien, med definisjonsbevis.
- **Ett teori-/bevispunkt** fra {sekantsetning + hjelpefunksjon, ε-δ, uniform kontinuitet, sup/inf, følge/rekke-konstruksjon}, ofte formulert som «vis at …» eller «finn et eksempel med verifikasjon».

**Usikkerhetsmomenter:** (1) Prosjektdelen (30 % i nyere ordning) er **ikke arkivbelagt** — dens sjangre er ukjente og må sjekkes mot NTNUs oppdaterte emneinfo før boken kalibreres endelig. (2) Arkivet er tettest 2008–2023; det er ingen dokumenterte sett etter H2022/aug 2023. (3) Numeriske metoder står i pensumbeskrivelsen, men er bare indirekte belagt i oppgavene — verifiser mot nyere sett. Boken må dekke hele pensumlista, men eksamenstreningen kalibreres mot de dokumenterte sjangrene over.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1101/` (78 PDF-er).

**Løsningsforslag/fasiter lest grundig (18):**
`ntnueksamenensolutions-1.pdf` (H2020), `ma1101_2016-12-20_lf.pdf` (H2016), `eksamen_ma1101_2017_losning_oppdatert2.pdf` (H2017), `ma1101_2017-08-08_lf.pdf` (aug 2017), `ma1101_h18_lf.pdf` (H2018), `kont_ma1101_2018_losning.pdf` (aug 2018), `ma1101_h19_lf.pdf` (H2019), `ma1101_h21_losningsforslag.pdf` (H2021), `ma1101eksamenaugust_solutions.pdf` (aug 2021), `ma1101_lf.pdf` (H2022), `ma1101kont_lf.pdf` (kont H2022 / aug 2023), `losningsforslag_host_2014.pdf` (H2014), `eksamen_host_2015_lf.pdf` (H2015), `eksamen_kont_2015_lf.pdf` (kont V2015), `lfbokmaal2013h.pdf` (H2013), `lfhost2012.pdf` (H2012), `losningsforslag_eksamen_host_2008.pdf` (H2008), `losningsforslag_eksamen_host_2009.pdf` (H2009).

**Oppgavesett/fasiter skumlest for temaregistrering (utvalg):** `losningsforslag_eksamen_host_2005.pdf`, `losningsforslag_eksamen_var_2009.pdf`, samt oppgavesettene `eksamen_host_2005…2015.pdf` og `eksamen_var_2006…2011.pdf` der teksten var lesbar.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs verifiserte emneside for MA1101 (bekreftet i oppgavebestillingen).

### Merknader om kildene
- **Rene skann uten tekstlag (hoppet over, ~29 filer):** pdftotext ga tilnærmet tom output (< 1500 tegn) for bl.a. `alt_losning_august_2013_oppgave_5.pdf`, `alt_losning_oppg_8_h2014.pdf`, `eksamen_host_2003.pdf`, `eksamen_var_2004/2005/2010/2011.pdf`, `eksamen_host_2004/2010/2012.pdf`, `eksamen_august_2013.pdf`, `eksamen_og_losningsforslag_august_2012.pdf`, `lf_kont_2016.pdf`, og hele serien `losningsforslag_eksamen_host_2003/2004/2006/2007/2010/2011.pdf` + `…_var_2004/2005/2006/2007/2008/2010/2011.pdf` + `losningsforslag_ma1101.pdf`. Disse er bildeskann og krever OCR for full utnyttelse. **Tekstlaget for løsningene 2012–2023 var derimot komplett**, så den kvantitative tellingen hviler på et solid, sammenhengende moderne grunnlag.
- **Hull i arkivet:** (1) **Prosjektdelen** i den nyere todelte vurderingen (30 %) er ikke representert med noen filer. (2) Ingen dokumenterte sett etter **aug 2023**; den nyeste ordningen (2024→) er ikke arkivbelagt. (3) Mange 2003–2011-fasiter finnes bare som skann.
- **Språk:** Fasitene for 2020–2023 er dels skrevet på **engelsk** (oppgavetekst bokmål, løsning engelsk); dette gjenspeiler ikke et krav om engelsk besvarelse.
- **Duplikater/varianter:** flere filer dekker samme sett (`eksamen_host_2015.pdf` vs. `eksamen_host_2015_lf.pdf`; `NTNU_MA1101.pdf` = `eksamen_host_2014.pdf`; `ntnueksamenno_a.pdf` ≈ `ntnueksamenensolutions-1.pdf`, begge H2020).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer i dette dokumentet er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet tekst.
