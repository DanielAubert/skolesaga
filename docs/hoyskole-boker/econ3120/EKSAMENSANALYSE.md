# Eksamensanalyse: ECON3120 / ECON4120 Mathematics 2 — Calculus and Linear Algebra (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **15 skriftlige skoleeksamener** fra Økonomisk institutt ved UiO (høst 2015 t.o.m. høst 2025, pluss vårsettene V2015, V2016, V2017 og V2018) og **9 offisielle sensorveiledninger/løsningsforslag** (V2018, H2018, H2019, H2020, H2021, H2022, H2023, H2024, H2025). Alle ni fasitdokumenter er lest grundig; de siste ~8 årgangene (2018–2025) er gjennomgått i detalj, de eldre settene (2015–2017, kun oppgavetekst) er skummet for tema- og formatregistrering. Eksamen er på **engelsk** (eldre sett tospråklig bokmål/engelsk) → terminologien er tospråklig. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Analysen er kvantitativ der kildene tillater det.
>
> ## ⚠️ Rammemerknad 1 — ÉN eksamen, to koder
> **ECON3120 (bachelor) og ECON4120 (master) er samme emne, samme undervisning og samme eksamen.** Emnesidene oppgir eksplisitt at kodene er «equivalent» med 10 studiepoengs overlapp — en klassisk UiO-dobbeltkoding der bachelorstudenter melder seg på ECON3120 og masterstudenter på ECON4120. **Verifisert empirisk i dette arkivet:** oppgavetekstene for hvert delte år (H2018–H2025 + V2018) er *byte-identiske* mellom de to kodene, og oppgavesettets tittelblokk lyder bokstavelig «ECON3120/4120 Mathematics 2». Sensorveiledningene bruker gjennomgående begge kodene i tittelen og rapporterer karakterstatistikk for begge koder slått sammen. **Konsekvens for boken: ÉT rammeverk dekker BEGGE kodene fullt ut.** Den eneste formelle forskjellen ligger utenfor eksamen (masterkoden ECON4120 kan ha egne adgangskrav / obligatoriske innleveringer), ikke i prøvingen. Én liten nyanse: sensor bemerker at fra 2019 er ikke lenger omhyllingsteoremet forkunnskap fra Matematikk 1 (ECON1100) for bachelorløpet — men det påvirker undervisning, ikke oppgavesett.
>
> ## Rammemerknad 2 — emnets plass
> Til tross for kursnavnet er dette et **matematikkemne**, ikke et økonometri- eller modelleringsemne. Det er «Matematikk 2» og bygger direkte videre på **ECON1100 Matematikk 1 for økonomer** (se egen analyse). Der ECON1100 stopper ved anvendt endimensjonal/flervariabel optimering uten lineær algebra og uten differensiallikninger, er ECON3120/4120 nettopp **lineær algebra + differensiallikninger + betinget optimering med Lagrange/Kuhn–Tucker + implisitt funksjonsteori**. De to emnene overlapper på partiellderivasjon, homogenitet/Euler, konveksitet og omhyllingsteoremet — men ECON3120 tar disse videre og legger til hele apparatet ECON1100 bevisst utelater. Pensum er Sydsæter/Hammond m.fl. (se del 9).

---

## 1. Eksamensform og utvikling

**Vurderingsform:** Én skriftlig skoleeksamen (Inspera). Karakterskala **A–F**, der E er dårligste ståkarakter og F = stryk. Ingen midtveiseksamen — hele karakteren hviler på sluttprøven. Masterkoden krever normalt tre godkjente obligatoriske innleveringer for eksamensadgang.

**Struktur:** Fast mal på **4–5 oppgaver** (nesten alltid 5 i moderne format; 4 i noen eldre sett), hver med bokstavnummererte deloppgaver (a), (b), … — typisk **12–14 «items» totalt**. **Utgangspunktet er jevn vekting over alle bokstav-items**; sensor understreker gjentatte ganger at settet er skrevet slik at uniform vekting «skal være et gjennomførbart valg», men at komiteen kan avvike (og noen ganger nullvekter en for vanskelig deloppgave, se del 4).

**To faste forsideinstruksjoner** (moderne sett):
1. **«State reasons for all your answers»** — alt skal begrunnes; et bart tallsvar gir lite uttelling.
2. **Senere deloppgaver kan bruke resultat/informasjon fra tidligere** deloppgaver, uavhengig av om du løste den tidligere — men en senere deloppgave krever ikke nødvendigvis den forrige.

**Hjelpemidler — endret over tid (viktig for kalibrering):**

| Periode | Format | Hjelpemidler |
|---|---|---|
| **≤ V2018** | 3-timers skriftlig | *Åpen bok*: alle trykte/skrevne hjelpemidler. Fra V2018 begrenset kalkulator til Casio FX-85EX + enkel aritmetisk. Tospråklig oppgavesett (bokmål + engelsk). |
| **H2019 →** | **4-timers**, Inspera, **kun engelsk** | Eget medbrakt materiale **ikke** tillatt. I stedet følger et forhåndskunngjort **«Rules and formulas»-vedlegg** (~9 sider: grenser, l'Hôpital, derivasjon, optimering inkl. Lagrange/Kuhn–Tucker, integrasjon, differensiallikninger, lineær algebra, determinanter, Cramér, homogenitet). Enkel kalkulator på skjerm (fire regnearter + kvadratrot). |
| **H2020** | Unntaksår (COVID): **5 timer**, mer verktøy, hjemme-eksamen | Ikke representativt for vanskelighetsnivå; sensor advarer eksplisitt mot å bruke settet til terskelkalibrering. |
| **H2021 →** | Tilbake til 4-timers Inspera-format | Som H2019. |

**Konsekvens av vedlegget:** Studenten forventes å **bruke** formelsamlingen aktivt, ikke pugge den. Sensor presiserer at det å sitere formelsamlingen er tillatt, men at **å identifisere hvilken formel/teorem som gjelder er halve poenget** — «Identifying the problem type is a big part of this course.»

**Karakterterskler (prosent → karakter):**
- **Pre-2019 standard:** 91 – 75 – 55 – 45 – 40 (A–B–C–D–E; bestått ≥ 40 %).
- **Fra formatendringen 2019:** 92 – 77 – 58 – 46 – 40 (Matematikkrådets litt mildere skala, brukt ved MN-fakultetet). Settet ble gjort marginalt lettere for å muliggjøre denne skalaen.
- **40 %-strykgrensen er en konstant** gjennom hele perioden; de øvrige tersklene justeres per sett.
- **Unntak H2024:** settet var for langt, og tersklene ble senket til **88 – 72 – 53 – 40 – 35** post-sensur.
- **Empiri (2015–2019, begge koder slått sammen):** strykprosent ~**19 %**; fordeling over ståkarakterer A→E: 7 % / 20 % / 37 % / 21 % / 14 % (kumulativt 7-27-64-86-100). Snittkandidaten lander altså rundt C.

### ⚠️ Rammemerknad 3 — MAJOR pensumendring høsten 2024

Dette er den viktigste utviklingstrenden i arkivet. **Fra og med H2024 ble pensum lagt vesentlig om:**

- **Kuhn–Tucker-betingelser (ulikhetsbibetingelser) er TATT UT av pensum.** Til og med H2023 var Kuhn–Tucker en kjerneoppgave (ofte en hel oppgave). Fra H2024 testes betinget optimering kun med **likhetsbibetingelser (Lagrange)** — og for å teste to bibetingelser trengs nå tre variabler (siden ulikheter er borte).
- **Integrasjon ved substitusjon (change of variable) er TATT UT.** Nyere sett ber eksplisitt om å løse integraler *uten* substitusjon (f.eks. ved å ekspandere polynom eller ved delvis integrasjon). Substitusjon var derimot obligatorisk metode i flere eldre sett (V2018 P3c, H2019 P3c, V2017 P2).
- **Integrasjon og differensiallikninger er redusert** i omfang.
- **NYE tema lagt til:** **differenslikninger** (difference equations) og **dynamisk programmering / Bellman-likninger** (dynamic programming). Disse dukket opp første gang H2024 (P4–P5) og H2025 (P2).

**Konsekvens for boken:** Boken må kalibreres mot **det nye pensumet (H2024→)**. Kuhn–Tucker og substitusjon bør presenteres som *bakgrunn/valgfritt fordypningsstoff* (fortsatt nyttig, gir mer robust forståelse), mens **differenslikninger og dynamisk programmering må dekkes fullt ut** selv om det finnes få gamle eksempler. Lagrange (likhet), lineær algebra og implisitt derivasjon er upåvirket og forblir kjernen.

---

## 2. Temafrekvens-tabell

Celleverdi = antall eksamenssett (av 15: V2015, H2015, V2016, H2016, V2017, H2017, V2018, H2018, H2019, H2020, H2021, H2022, H2023, H2024, H2025) der temaet forekommer som en identifiserbar deloppgave. Gjenganger-score = andel av alle 15 sett. «Trend» angir om temaet er stigende (↑), stabilt (→) eller synkende/utfaset (↓) i lys av 2024-pensumendringen.

| Tema (norsk / engelsk) | Antall sett | **Gjenganger-score** | Trend | Kommentar |
|---|---|---|---|---|
| **Matrisealgebra + parametriske likningssystemer** (matrix algebra, determinants, inverse, parametric linear systems) | **15/15** | **100 %** | → | Fast egen oppgave hvert eneste sett. Produkt, transponert, determinant, invers, Cramér, Gauss, antall løsninger av `Ax=b` som funksjon av parameter. |
| **Optimering med bibetingelse** (Lagrange og/eller Kuhn–Tucker) | **15/15** | **100 %** | → | Kjernen i emnet. Alltid minst én oppgave; ofte to. Se undertemaer. |
| **Integrasjon** (integration: delvis, substitusjon†, uegentlig) | **~15/15** | **~100 %** | ↓ (redusert) | Nesten alltid, oftest sammen med differensiallikning i samme oppgave. |
| **Differensiallikninger, 1. orden** (linear/separable first-order ODE) | **~14/15** | **~93 %** | ↓ (redusert) | Lineær (integrerende faktor) eller separabel; begge godtas. Konstantløsning-fellen er sensorsignatur. |
| **Implisitt derivasjon av likningssystem / komparativ statikk** (implicit differentiation, comparative statics) | **11/15** | **73 %** | ↑ | Sensor (2019) kalte det «≈ halvparten»; klart hyppigere i nyere sett. Nesten alltid Oppgave 1. Manglet i H2021. |
| **Kuhn–Tucker-betingelser** (ulikhetsbibetingelser) | **13/15** | **87 % (t.o.m. 2023)** | ↓↓ **UTGÅTT** | Kjerneoppgave 2015–2023, så **fjernet fra pensum H2024**. 0/2 i 2024–2025. |
| **Grenser og l'Hôpital** (limits, l'Hôpital's rule) | **~10/15** | **~67 %** | ↓ | Svært hyppig 2015–2021 (ofte egen oppgave med parameter). Nedtonet i 2022–2025. Krav om å påvise `0/0`/`∞/∞`. |
| **Konveksitet/konkavitet + tilstrekkelighet** (convexity/concavity, Hessian, sufficiency) | **~10/15** | **~67 %** | → | Nesten alltid innbakt i optimeringsoppgaven (vis at Lagrange-punkt er optimum). Hessian-determinant + «sum av konkave». |
| **Omhyllingsteoremet / skyggepris** (envelope theorem, shadow price) | **7/15** | **47 %** | → | Fast som siste deloppgave i optimeringsoppgaven. `∂V/∂b = λ`. |
| **Ekstremverdisetningen** (extreme value theorem, existence) | **~8/15** | **~53 %** | → | Brukes til å argumentere eksistens; sensor advarer at den *ikke* gir entydighet. |
| **Homogenitet + Eulers teorem** (homogeneity, Euler's theorem) | **~5/15** | **~33 %** | ↑ | Ofte innbakt (H2015, H2022, H2023, H2024). Avgjøres via Euler, ikke definisjon. |
| **Skjæringssetningen** (intermediate value theorem, IVT) | **~5/15** | **~33 %** | → | Vise at en funksjon har nullpunkt/stasjonærpunkt uten å regne det ut. |
| **Stasjonærpunkt / andrederiverttest / sadelpunkt** (saddle point, second-derivative test) | **~5/15** | **~33 %** | → | Fri optimering; `AC−B² < 0` ⇒ sadel. Krav: verifiser stasjonaritet FØRST. |
| **Dynamisk programmering / Bellman** (dynamic programming) | **2/15** | **13 % (2/2 siden 2024)** | ↑↑ **NY** | Nytt pensum H2024 (baklengs induksjon) + H2025 (optimal stopping / Bellman). Vil komme igjen. |
| **Differenslikninger** (difference equations) | **1/15** | **7 % (NY)** | ↑↑ **NY** | Nytt pensum H2024 (P5). Partikulær + generell løsning; forvent gjentakelse. |

† Substitusjon som integrasjonsmetode er utfaset fra pensum H2024.

### Undertemaer i optimeringsoppgaven (den viktigste enkeltoppgaven)

| Element | Frekvens (av optimeringsoppgavene) | Merknad |
|---|---|---|
| Sett opp Lagrange-funksjonen + skriv ut ALLE FOC fullt derivert | ~alle | Bart `0 = L′ₓ` gir trekk. |
| «Test et gitt punkt» mot betingelsene / regn ut multiplikatorverdier | svært vanlig | Betingelsene *feiler* hvis en multiplikator blir negativ. |
| Tilstrekkelighet via konkavitet (Hessian / sum av konkave) | svært vanlig | Nødvendig for å konkludere globalt optimum. |
| Vis at en multiplikator må være ≠ 0 | vanlig | Ved å vise at «alle = 0» bryter en FOC/admissibilitet. |
| Omhyllingsteoremet / skyggepris til slutt | ~halvparten | `∂V/∂parameter = ∂L/∂parameter` i optimum. |

### Fravær og utfasing — like viktig som forekomst

- **Egenverdier / diagonalisering** (eigenvalues, diagonalization): **0/15**. Lineær algebra i dette emnet er utelukkende matriseprodukt, transponert, determinant, invers, Cramér, Gauss og parametriske likningssystemer. Grunnbeskrivelsens temaliste bør **ikke** love egenverdier.
- **Kuhn–Tucker:** utgått fra H2024 (var 13/15 før).
- **Integrasjon ved substitusjon:** utgått fra H2024.
- **Andreordens rand-Hessian (bordered Hessian):** ikke observert; tilstrekkelighet vises via ordinær konkavitet.

### Viktigste funn

1. **Fire faste søyler bærer hvert sett:** (1) lineær algebra/matriser, (2) betinget optimering (Lagrange, tidligere + Kuhn–Tucker), (3) integrasjon + differensiallikning (oftest i samme oppgave), (4) implisitt derivasjon/komparativ statikk. Disse fire dekker ~80 % av poengene i et typisk sett. En femte oppgave roterer (grenser/l'Hôpital, homogenitet, sadelpunkt, eller — fra 2024 — dynamisk programmering/differenslikninger).
2. **Settstrukturen er ekstremt stabil 2015–2023**, deretter et markert pensumskifte H2024 (Kuhn–Tucker + substitusjon ut, differenslikninger + dynamisk programmering inn). Boken må dekke *begge* regimer, men vekte det nye tyngst.
3. **Metodelydighet er sensors mest gjennomgående krav.** Når en oppgave påbyr en metode (Gauss-eliminasjon for invers, Cramér der det kreves, «bruk det differensierte systemet», integrasjon uten substitusjon) gis det **null poeng for andre metoder** — selv med riktig svar.
4. **Emnet er identisk for bachelor (3120) og master (4120).** Ingen differensiering i oppgavesett. Karakterstatistikk rapporteres slått sammen.

---

## 3. Oppgavetype-katalog med sensors foretrukne metode

### A. Matrisealgebra og parametriske likningssystemer (15/15 — alltid egen oppgave)

Standard oppbygning: gitt matriser/vektorer som avhenger av parameter (`t`, `w`, `h`, `q`, `s`, `a`), (i) avgjør hvilke matriseprodukter som er *veldefinerte* og deres orden `m×n`, regn ut noen; (ii) determinanter; (iii) invers; (iv) antall løsninger av `Ax=b` (ingen / nøyaktig én / uendelig mange) som funksjon av parameteren.

**Sensors foretrukne metode og fallgruver:**
- **Matriseprodukt gir poeng i seg selv** (nyere trekk i emnet — «It used not to be the case»). Den grove feilen sensor jakter på er **elementvis multiplikasjon** og antatt kommutativitet. Settene er ofte konstruert slik at et *ikke*-produkt (f.eks. `v²` for en ikke-kvadratisk `v`) lokker den uforsiktige.
- **`AA′` (og `A′A`) er alltid symmetrisk** — skal gjenkjennes *før* utregning. `(AB)′ = B′A′`.
- **Determinant er kun definert for kvadratiske matriser** — for ikke-kvadratiske skal det påpekes eksplisitt (fast «twist» siden 2019). Nyttige grep: **`|A′A| = |A|²`** og **`|A²| = |A|²`** (slipper å regne produktet), **cofaktorutvikling langs raden/kolonnen med flest nuller** (settene konstrueres ofte så ethvert valg krever ≥ 2 cofaktorer), eller radoperasjoner til triangulær form.
- **Invers:** når oppgaven **påbyr** Gauss-eliminasjon (`AX=I`) gis **null poeng for andre metoder**; ellers **adjungat/cofaktor-metoden** `M⁻¹ = (1/|M|)·C′`. Kjent standardresultat: `|C| = dⁿ⁻¹` når `|M|=d`. Verifikasjon av oppgitt invers gjøres ved å regne `AA⁻¹ = I` (H2025 P1c).
- **Antall løsninger:** **entydig løsning ⟺ det ≠ 0**; deretter **behandle grensetilfellet (det = 0) separat** med radoperasjoner. To sterke metodesignaler: (i) **aldri dividere med parameteren** (`1/t`) — «skyv t inn i fremtiden», siden divisjon med mulig null er en grov feil; (ii) det er tillatt å **slette en nullrad** (`∼` betyr «ekvivalent likningssystem», ikke radekvivalens). **Cramérs regel** brukes når den påbys (f.eks. «vis at `x₂=0`»), og gir da null poeng for andre metoder.
- **Sensors mest fryktede feil (H2024):** den «stubbornly widespread false equivalence» mellom `det ≠ 0` og *eksistens* av løsning. `det = 0` betyr *ikke* «ingen løsning» — det kan bety uendelig mange. Og raden `(0 0 0 | 1)` betyr `0 = 1` (ingen løsning), mens `(0 1 0 | 0)` betyr `x₂ = 0` (noe helt annet). Forveksle heller ikke «determinanten er null» med «parameteren er null».

### B. Implisitt derivasjon av likningssystem / komparativ statikk (11/15 — nesten alltid Oppgave 1)

Et likningssystem antas å bestemme to (eller tre) funksjoner (`x(s,t), y(s,t)`, `K(p,t), L(p,t)`, `u(x,y), v(x,y)`) som deriverbare funksjoner rundt et gitt punkt. Deloppgavene: (a) «differensier systemet», (b) finn en partiellderivert eller en lineær approksimasjon i et nærliggende punkt.

**Sensors to godtatte metoder:**
- **Metode A — differensialer ledd for ledd** (vedleggets oppskrift): ta differensialen ledd for ledd i hver likning; det er **eksplisitt OK å ikke samle koeffisienter** for `ds/dt/dx/dy`. Sett inn tallpunktet, nullstill differensialene til variabler som holdes konstant (f.eks. `dt=0` når kun `∂y/∂s` spørres), og løs det lineære systemet for de resterende differensialene.
- **Metode B — Cramér/matriseinvers på Jacobi-systemet:** skriv det differensierte systemet som `A·[dx,dy]ᵀ = […]` og løs med Cramér (ryddig når bare én derivert trengs; brukt i H2024/H2025-fasitene).
- **Lineær approksimasjon:** `x(t₁) ≈ x(t₀) + dx` med `dt = t₁ − t₀`.
- **Kritisk:** «bruk det differensierte systemet» betyr at man **ikke** skal eliminere en variabel fra utgangssystemet — det gis null poeng for andre metoder når dette er påbudt. **Sett inn punktverdiene FØR du løser** (ellers blir systemet ulineært). Vanligste feil: nullstille feil differensial (`dp` eller `dK` i stedet for `dt`); glemme kjerneregelen på ledd som `3(KL)^{1/3}`.

### C. Integrasjon (~15/15)

Fire gjengangere:
- **Delvis integrasjon** (integration by parts): velg `u`/`v′` fornuftig (typisk `ln`-ledd som `u`). `∫ln y dy = y ln y − y + C` forventes kjent. Flere sett **påbyr** delvis integrasjon og forbyr substitusjon.
- **Antiderivasjon som verifikasjon:** når oppgaven ber om å vise en antiderivert «ved antiderivasjon», gis **null poeng for å derivere høyresiden**.
- **Uegentlige integraler behandles som grenser** (`lim` mot ∞ eller mot en pol). **Konvergens sjekkes** når en pol ligger *inne* i integrasjonsområdet — en fast fellesoppgave er at integralet faktisk **divergerer** (H2023 P3b: polen i `x=e` inne i `[e/2, 2e]`).
- **Substitusjon:** var påbudt metode i eldre sett, men **utfaset fra H2024** — nyere sett ber om å ekspandere polynom i stedet. Ved bestemte integraler som krever substitusjon: gjør det **ubestemte** integralet først og sett inn grensene til slutt.
- Nyere tillegg (H2025 P4): **Leibniz' regel / derivasjon under integraltegnet** (`d/dt ∫eᵗˣ dx = ∫x eᵗˣ dx`).

### D. Differensiallikninger, 1. orden (~14/15)

- **Lineær (`ẋ + a(t)x = b(t)`):** integrerende faktor `e^{A(t)}`, eller — for konstante `a,b` — kjent partikulærform `x(t) = (x₀−b/a)e^{−a(t−t₀)} + b/a`, eller **ubestemte koeffisienter** (gjett partikulærløsning på kildeleddets form, f.eks. `q·2⁻ᵗ + h`, og bestem konstantene ved innsetting — brukt i H2024 P5).
- **Separabel (`ẋ = f(t)g(x)`):** **det kritiske metodesignalet — sjekk ALLTID for konstantløsning(er)** (nullstill `g(x)`) før du deler. Å dele uten å sjekke for nullpunkter kalles eksplisitt **«a grave sin in this course»**. Partikulærløsning med initialbetingelse skal **løses algebraisk for `x` uttrykt kun ved `t`** (ikke la stå implisitt); fortegnet inne i `|…|` avgjøres ut fra hvilken side av konstantløsningen initialpunktet ligger.
- Begge metoder godtas for en likning som kan skrives på begge former.

### E. Betinget optimering — Lagrange (og Kuhn–Tucker t.o.m. 2023) (15/15)

Kjernen i faget. Foretrukket oppsett:
- **Skriv Lagrangefunksjonen eksplisitt** og **skriv ut ALLE førsteordensbetingelsene fullt derivert.** Bart `0 = L′ₓ` er **ikke tilstrekkelig** (trekk). Lagrange-betingelsene *inkluderer* stasjonaritet av Lagrangefunksjonen — ikke bare admissibilitet (H2024-feil: mange sjekket bare bibetingelsene).
- **Ulikhetsbibetingelser (Kuhn–Tucker, t.o.m. 2023):** skriv `g(x,y) ≤ 0` (som læreboka), oppgi **komplementaritet** korrekt (`λ ≥ 0`, `λ = 0 hvis bibetingelsen er slakk`). Alternative ≤/≥/=-formuleringer og «admissibility»-varianter godtas. **Fra H2024 utgått** — erstattet av Lagrange med flere variabler/likhetsbibetingelser.
- **«Test et gitt punkt»:** sett inn, avgjør hvilke bibetingelser som er aktive, regn ut multiplikatorverdiene. Betingelsene **feiler hvis en multiplikator blir negativ** (H2019 P5b, H2021 P3c).
- **Argument for at en multiplikator må være ≠ 0:** vis at «alle = 0» bryter en FOC/admissibilitet.
- **Tilstrekkelighet:** vis **konkavitet** (sum av konkave funksjoner, eller negativ-definitt Hessian: `f″ₓₓ < 0` og `f″ₓₓf″ᵧᵧ − (f″ₓᵧ)² > 0`) for globalt maksimum. Da er Lagrange-/KKT-punktet **unikt og optimalt**. **Ekstremverdisetningen gir kun eksistens, ikke entydighet** — den er ikke tilstrekkelig alene (gjentatt sensoradvarsel).

### F. Omhyllingsteoremet / skyggepris (7/15)

`V′(a)` finnes ved å **partiellderivere mål-/Lagrangefunksjonen mht. parameteren `a`** og deretter sette inn optimum — **ikke** ved å derivere gjennom `x*(a)`. For en bibetingelses høyreside: `∂V/∂bⱼ = λⱼ` (skyggeprisen). Førsteordens tilnærming `ΔV ≈ λⱼ·Δbⱼ`. Sensor (H2024): masterstudenter i økonomi *bør* vite at Lagrange-multiplikatoren er skyggeprisen — «yet very few pointed it out». Når parameteren står **både** i mål og bibetingelse (H2020 P4d, H2021 P3f) må begge bidrag med — men leddene er ofte konstruert så det ene forsvinner i optimum.

### G. Grenser og l'Hôpital (~10/15)

- **Man må eksplisitt sjekke og hevde at l'Hôpital gjelder** (`0/0` eller `∞/∞`) før bruk — ellers trekk.
- «Eksponentiell vekst/avtakelse slår polynom» kan brukes, men **misbrukes ofte** (særlig med to eksponentialledd eller `ln` i eksponenten) — vær presis.
- **Behandle aldri `∞` som et vanlig tall.** Ofte kombinert med parameterfunksjon `h(t)` der begge grenser (`t→0⁺` og `t→+∞`) spørres, som ledd til IVT/stasjonaritet.

### H. Stasjonærpunkt / sadelpunkt / IVT (~5/15 hver)

- **Verifiser at punktet er stasjonært** (`f′ₓ = f′ᵧ = 0`) FØR andrederiverttesten (fast «did you remember»-felle). Sadelpunkt følger av `f″ₓₓ·f″ᵧᵧ < 0` (uansett `f″ₓᵧ`).
- **Nullpunkt / stasjonærpunkt vises via skjæringssetningen** (IVT) — «Do not attempt to find it!» er både presisering og hint om at eksplisitt utregning ikke fører fram.

### I. Homogenitet / Eulers teorem (~5/15)

Homogenitet avgjøres via **Eulers teorem** (`x·f′ₓ + y·f′ᵧ = k·f`): vis at venstresiden **ikke** er en skalering av `f` for å konkludere ikke-homogen (H2022 P4c, H2023 P4a). Grad av partiellderivert = `k−1`. **Homotetisk** = monoton transformasjon av homogen funksjon (enhver homogen er homotetisk).

### J. Differenslikninger (NY, H2024) og dynamisk programmering (NY, H2024–H2025)

- **Differenslikninger** (`x_{t+1} = a·x_t + b(t)`): finn generell løsning (`x_t = C·aᵗ + partikulær`) + partikulær som tilfredsstiller en initialbetingelse. Ubestemte koeffisienter for partikulærløsning på kildeleddets form (`(αt+β)(−1)ᵗ`, `α·eᵗ + β·(π/2)ᵗ`).
- **Dynamisk programmering / Bellman:** endelig-horisont med tilstandslikning (`x_{t+1} = 2x_t − c_t` e.l.) og sum av periodekostnader/-nytte. **Baklengs induksjon:** regn verdifunksjonen fra siste periode og bakover, minimér/maksimér i hver periode mht. kontrollvariabelen. Eller sett opp Bellman-likningen `v_t(x) = max/min{avkastning + (1/(1+d))·v_{t+1}(x_{t+1})}` og løs rekursivt. H2025 P2: **optimal stopping** (velg «stopp» vs. «fortsett», sammenlign verdiene). Sensor advarer mot å hoppe over selve Bellman-oppsettet.

---

## 4. Sensorens krav

### Metaregler (gjentatt nesten ordrett i alle 9 fasitdokumenter)
1. **Begrunn alt** («state reasons for all your answers»). Bart svar gir lite; metoden og korrekt bruk av vedleggets teoremer bærer poengene.
2. **Utnytt at senere deloppgaver kan bygge på tidligere** — selv om du står fast på (a), sett opp (b)/(c) med de oppgitte størrelsene.
3. **Uniform vekting over items som utgangspunkt**, men komiteen kan avvike og har nullvektet enkeltoppgaver som var for vanskelige (H2023: 2(b) og 4(d) effektivt nullvektet for de fleste; positive poeng her ble likevel talt for kandidater nær en karaktergrense).
4. **Identifiser oppgavetypen og riktig formel fra vedlegget** — «a big part of this course».

### Fagspesifikke strenge punkter (hvor poeng vinnes og tapes)
- **Følg påbudte metoder til punkt og prikke.** «No score for other methods» gjelder: Gauss-eliminasjon for invers, Cramér der det kreves, «bruk det differensierte systemet» ved komparativ statikk, og den spesifiserte (eller forbudte) integrasjonsmetoden. Dette er den enkeltregelen som koster flest poeng når den brytes.
- **Divisjon med noe som kan være null er en grov feil** — både ved parametrisk likningssystem (ikke skalér med `1/t`) og ved separabel diff.likning (ikke del uten å sjekke konstantløsning). Sistnevnte: «a grave sin in this course».
- **Skriv ut FOC-ene fullt derivert** i optimering; `0 = L′ₓ` alene gir trekk.
- **Tilstrekkelighet må vises** for å konkludere optimum — konkavitet, ikke bare førsteordensbetingelser. Ekstremverdisetningen gir eksistens, ikke entydighet.
- **Determinant/invers kun for kvadratiske matriser** — påpek det for ikke-kvadratiske.
- **Sjekk og hevd l'Hôpitals anvendbarhet** (`0/0`/`∞/∞`) før bruk.
- **`det ≠ 0 ⟺ entydig løsning`** — ikke bland determinant-null sammen med parameter-null, og ikke slutt fra `det=0` til «ingen løsning».

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: differensier systemet, regn matriseprodukt/determinant, oppsett av Lagrange med FOC, enkel integrasjon/separabel ODE.
- **Midtsjiktet** behersker i tillegg full løsning av likningssystem for én derivert (Cramér), invers ved påbudt metode, komplett Lagrange/KKT med multiplikatorverdier, konkavitet-tilstrekkelighet.
- **Toppsjiktet** kjennetegnes av: korrekt håndtering av **grensetilfellet det=0** (Gauss, ingen/uendelig løsninger), **konstantløsning før deling**, **skyggepris-tolkning av λ**, korrekt **omhyllingsteorem når parameteren står to steder**, **påvist l'Hôpital-anvendbarhet**, og — fra 2024 — korrekt **baklengs induksjon** i dynamisk programmering.

---

## 5. Typiske feil (dokumentert i sensorveiledningene)

1. **Bryte en påbudt metode** (bruke cofaktor der Gauss er påbudt, annen metode der Cramér kreves, eliminere variabel der «bruk det differensierte systemet» står) — null poeng selv med riktig svar.
2. **Elementvis «matriseprodukt»** / anta kommutativitet.
3. **Determinant av ikke-kvadratisk matrise** (eller `v²` for ikke-kvadratisk `v`).
4. **`det ≠ 0 ⟺ eksistens`-feilslutningen** — sensors «stubbornly widespread false equivalence». Og å blande «det = 0» med «parameter = 0».
5. **Dele på parameter (`1/t`) eller på en faktor med mulig nullpunkt** uten sjekk.
6. **Hoppe over konstantløsningen** i separabel diff.likning før man deler.
7. **Bruke l'Hôpital uten å påvise `0/0`/`∞/∞`**; misbruke «eksp slår polynom» med to eksponentialledd; behandle `∞` som tall.
8. **Skrive `0 = L′ₓ`** i stedet for fullt utskrevne FOC-er.
9. **Sjekke bare admissibilitet**, ikke selve Lagrange-betingelsene (glemme stasjonaritet av Lagrangefunksjonen).
10. **Påberope ekstremverdisetningen som tilstrekkelig** for entydig løsning / optimum.
11. **Glemme skyggepris-tolkningen av λ** i omhyllingsoppgaven.
12. **Ikke verifisere stasjonaritet** før andrederiverttest / sadelpunkt-konklusjon.
13. **Derivere høyresiden** når oppgaven ber om å vise en antiderivert «ved antiderivasjon» (null poeng).
14. **(Fra 2024)** hoppe over Bellman-oppsettet i dynamisk programmering / rote med fortegn og diskonteringsfaktor i baklengs induksjon; kjerneregel-feil i differensiering av kontrollvariabelen.
15. **Sløse tid** på uforenklede uttrykk (dra `16·64^{−2/3}` gjennom hele regningen i stedet for å forenkle til 1) — koster på et allerede langt sett.

---

## 6. Formel- og notasjonsapparat

### Må beherskes aktivt

**Lineær algebra:**
- Matriseprodukt (radgang-kolonne), veldefinerthet og orden `m×n`; `(AB)′ = B′A′`; `AA′`/`A′A` symmetrisk.
- Determinant: cofaktorutvikling, radoperasjoner til triangulær form; `|A′A| = |A|²`, `|A²| = |A|²`, `|cA| = cⁿ|A|`.
- Invers: Gauss–Jordan på `(A|I)`; adjungat `A⁻¹ = (1/|A|)·C′`; `|C| = dⁿ⁻¹`.
- Cramérs regel `xᵢ = |Aᵢ|/|A|`.
- Antall løsninger av `Ax=b`: `|A|≠0 ⟺` entydig; `|A|=0 ⟹` Gauss for ingen/uendelig.

**Flervariabel kalkulus:**
- Partiellderiverte (1. og 2. orden, kryssderivert `f″ₓᵧ`); kjerneregel; differensial `df = f′ₓdx + f′ᵧdy`.
- Implisitt derivasjon av likningssystem; Jacobi-determinant (implisitt funksjonsteorem forutsetter `≠ 0`).
- Lineær approksimasjon `f(x) ≈ f(x₀) + Σf′ᵢΔxᵢ`.
- Homogenitet + Euler: `Σxᵢf′ᵢ = k·f`; grad av derivert = `k−1`; homotetisk.
- Hessian-determinant `D = f″ₓₓf″ᵧᵧ − (f″ₓᵧ)²`: `D<0` sadel; `D>0, f″ₓₓ>0` (lokalt) min / konveks; `D>0, f″ₓₓ<0` maks / konkav. «Sum av konkave er konkav».

**Grenser:**
- l'Hôpital (påvis `0/0`/`∞/∞`); eksp vs. polynom vs. log; skjæringssetningen (IVT); ekstremverdisetningen (lukket+begrenset mengde, kontinuerlig funksjon).

**Integrasjon:**
- Delvis integrasjon `∫uv′ = uv − ∫u′v`; `∫ln y dy = y ln y − y + C`.
- Uegentlige integraler som grenser; konvergenssjekk ved pol i området.
- Ekspandering av polynom (erstatter substitusjon fra 2024); Leibniz'/derivasjon under integraltegn.
- (Bakgrunn:) substitusjon `∫f(u(t))u′(t)dt = ∫f(u)du`.

**Differensiallikninger (1. orden):**
- Lineær: integrerende faktor `e^{∫a dt}`; `d/dt(x·e^{A}) = e^{A}(ẋ+ax)`; generell = partikulær + `Ce^{−A}`.
- Separabel: konstantløsning `g(z)=0` FØRST, deretter `∫dx/g(x) = ∫f(t)dt`; løs algebraisk for `x(t)`.
- Ubestemte koeffisienter for partikulærløsning.

**Optimering:**
- Lagrange `L = f − Σλⱼ(gⱼ − bⱼ)`; alle `∂L/∂xᵢ = 0` + bibetingelser.
- (Bakgrunn t.o.m. 2023:) Kuhn–Tucker `λ ≥ 0`, komplementær slakkhet `λ=0 hvis slakk`.
- Tilstrekkelighet via konkavitet; unikhet ⟹ optimalitet.
- Omhyllingsteorem `∂V/∂a = ∂L/∂a|*`; `λ` = skyggepris.

**Differenslikninger og dynamisk programmering (NY, fra 2024):**
- Differenslikning `x_{t+1} = a x_t + b(t)`: generell `x_t = Caᵗ + p_t`; ubestemte koeffisienter for `p_t`.
- Bellman `v_t(x) = opt_c{avkastning(x,c) + β·v_{t+1}(x_{t+1})}` under tilstandslikning `x_{t+1} = h(x_t, c_t)`; baklengs induksjon fra sluttperioden.

### Notasjonskonvensjoner boken bør speile
- Prime `′` for både transponert (matriser) og derivert (funksjoner) — kontekstavhengig; sensor tillater «any reasonable notation» (også pilnotasjon for matriser).
- `f′ₓ, f″ₓₓ, f″ₓᵧ` for partiellderiverte; `∂/∂x` likestilt.
- `L` for Lagrange-funksjonen, `λ` (og `α, β, γ, µ`) for multiplikatorer; `x*` for optimum; `V` for verdifunksjon.
- `∼` betyr «ekvivalent likningssystem» (ikke radekvivalens); vertikal separator i `(A|b)` tillatt.
- Bibetingelse skrevet `g(x) ≤ b` (læreboka) i Kuhn–Tucker-stoff.

---

## 7. Kobling til andre emner

- **ECON1100 Matematikk 1 (forgjenger):** leverer partiellderivasjon, endimensjonal/flervariabel fri optimering, homogenitet/Euler, konveksitet, elastisitet og omhyllingsteoremet. ECON3120 **forutsetter** dette og legger til lineær algebra, differensiallikninger, implisitt funksjonsteori og Kuhn–Tucker/Lagrange på full bredde. NB: fra 2019 er omhyllingsteoremet ikke lenger forkunnskap fra ECON1100, så ECON3120 må lære det på nytt.
- **Mikro-/makroøkonomi og økonometri:** matriseapparatet er grunnlaget for lineær regresjon og komparativ statikk i likevektsmodeller; Lagrange/skyggepris er konsument-/produsentteori; differensial- og differenslikninger er dynamiske makromodeller; dynamisk programmering/Bellman er intertemporal optimering (sparing, investering, optimal stopping).
- **Naboemner i UiO-arkivet:** MAT1110 (kalkulus + lineær algebra, mer bevistungt) og MAT1120 (lineær algebra med egenverdier — som ECON3120 *ikke* dekker). ECON3120 er den anvendte, økonomirettede varianten.

---

## 8. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen, ~80 % av poengene)
1. **Matrisealgebra + parametriske likningssystemer** (100 %) — produkt/orden/veldefinerthet, determinant (cofaktor + `|A²|=|A|²`), invers (Gauss påbudt vs. adjungat), Cramér, antall løsninger med grensetilfellet det=0.
2. **Lagrange betinget optimering** (100 %) — full FOC-utskriving, test av gitt punkt, multiplikatorverdier, konkavitet-tilstrekkelighet, omhyllingsteorem/skyggepris. (Kuhn–Tucker som bakgrunn.)
3. **Implisitt derivasjon / komparativ statikk** (73 %, oftest Oppgave 1) — differensier ledd for ledd, sett inn punkt, løs for én derivert (Cramér), lineær approksimasjon. «Bruk det differensierte systemet.»
4. **Integrasjon + differensiallikning** (~93–100 %) — delvis integrasjon, uegentlige integraler m/konvergenssjekk, lineær og separabel 1.-ordens ODE med konstantløsning-sjekken.

### Nivå 2 — må kunne (bredden i poengfangsten)
5. **Konveksitet/konkavitet + Hessian** (~67 %) — tilstrekkelighet i optimering.
6. **Grenser + l'Hôpital** (~67 %, synkende) — påvis anvendbarhet; eksp/polynom/log.
7. **Omhyllingsteoremet/skyggepris** (47 %) — `λ` som skyggepris; parameter i mål *og* bibetingelse.
8. **Ekstremverdisetningen + skjæringssetningen** (~53 % / ~33 %) — eksistens vs. entydighet; nullpunkt uten utregning.
9. **Homogenitet + Euler** (~33 %, stigende) — avgjør via Euler; grad av derivert.
10. **Sadelpunkt / andrederiverttest** (~33 %) — verifiser stasjonaritet først.

### Nivå 3 — NYTT pensum, må dekkes for fremtidige sett (H2024→)
11. **Dynamisk programmering / Bellman** (2/2 siden 2024) — baklengs induksjon, optimal stopping, endelig horisont.
12. **Differenslikninger** (NY 2024) — generell + partikulær løsning, ubestemte koeffisienter.

### Prognose for neste ordinære eksamen (basert på H2024–H2025-malen)
5 oppgaver, ~jevn vekting over 12–14 items, 4 timer, engelsk, med «Rules and formulas»-vedlegg:
- **Oppgave 1:** implisitt derivasjon av likningssystem (differensier + approksimer/Cramér) — ELLER parametrisk lineært system.
- **Oppgave 2:** matrisealgebra (produkter/orden, determinant, invers, antall løsninger) — den andre av de to lineær-algebra-relaterte typene.
- **Oppgave 3:** betinget optimering med Lagrange (likhetsbibetingelser, ev. 3 variabler + 2 bibetingelser), konkavitet-tilstrekkelighet, og omhyllingsteorem/skyggepris som siste punkt.
- **Oppgave 4:** dynamisk programmering / Bellman (baklengs induksjon eller optimal stopping).
- **Oppgave 5:** integrasjon (delvis + uegentlig m/konvergens) + differensiallikning (lineær/separabel) og/eller differenslikning.

**Usikkerhet:** Pensumendringen H2024 er fersk — det finnes bare to sett (H2024, H2025) i det nye regimet, så vekten på dynamisk programmering og differenslikninger vil trolig stabilisere seg de neste årene. Boken bør dekke *begge* regimer, men eksplisitt merke Kuhn–Tucker og integrasjon ved substitusjon som «bakgrunn/utgått fra pensum 2024», og gi differenslikninger + dynamisk programmering full behandling til tross for tynt eksempelgrunnlag. De fire kjernesøylene (lineær algebra, Lagrange, implisitt derivasjon, integrasjon/ODE) er upåvirket og skal drilles hardest.

---

## 9. Kildeliste

**Eksamensarkiv (15 sett):**
- ECON3120: `~/Desktop/Eksamner/UiO/ECON3120/eksamen/` — V2018 + H2018–H2025 (9 sett).
- ECON4120: `~/Desktop/Eksamner/UiO/ECON4120/` — V2015, H2015, V2016, H2016, V2017, H2017, V2018, H2018–H2025 (15 sett).
- **Verifisert:** ECON3120- og ECON4120-oppgavene er *byte-identiske* for hvert delt år (H2018–H2025, V2018). ECON4120-mappen bidrar med de eldre årgangene 2015–2017 og vårsettene som ECON3120-mappen mangler. Union = 15 distinkte sett.

**Offisielle sensorveiledninger / løsningsforslag lest grundig (9):**
`~/Desktop/Eksamner/UiO/ECON3120/sensorveiledning/` — V2018, H2018, H2019 (sensorveiledning); H2020, H2021, H2022, H2023, H2024, H2025 (løsningsforslag). Dekker eksamensårene 2018–2025.
- **Merk:** ingen offisiell fasit finnes for de eldste settene (2015–2017) eller vårsettene 2015–2017; disse er brukt til tema-/formatregistrering ut fra oppgaveteksten.

**Fagbeskrivelser:** omskrevne sammendrag av UiOs emnebeskrivelser for ECON3120 og ECON4120 (scratchpad: `fagbeskrivelse-econ3120.md`, `fagbeskrivelse-econ4120.md`), begge verifisert AKTIVE per 2026, undervist hvert høstsemester.

**Pensum (lærebøker):** Emnet følger UiOs standard matematikk-for-økonomer-pensum, i hovedsak **Sydsæter, Hammond, Strøm & Carvajal — *Essential Mathematics for Economic Analysis*** (lineær algebra, optimering, differensiallikninger) supplert med UiOs eget «Rules and formulas»-vedlegg og notat om dynamisk optimering. Matematiske uttrykk og standardteoremer (Lagrange, Kuhn–Tucker, Euler, Cramér, l'Hôpital, Bellman) er faglig allemannseie og ikke opphavsrettslig beskyttet.

**Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett.
