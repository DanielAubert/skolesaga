# Eksamensanalyse: MA1202 Lineær algebra med anvendelser (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på ~22 skoleeksamener fra MA1202/MA6202 «Lineær algebra med anvendelser» (2004–2025), med ~16 tilhørende løsningsforslag lest der de finnes. De ni siste årenes oppgavesett (2018–2025, både ordinær vår-eksamen og august-kontinuasjon) er lest grundig; eldre sett (2004–2017) er skummet med kvantitativ temaopptelling. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasiter. Matematiske uttrykk og standardteoremer er allmenn fagnotasjon. Analysen er kvantitativ der kildene tillater det. OCR-kvaliteten på flere skannede løsningsforslag er svak; temaidentifikasjon er sikker, men enkelttall er merket «(verifiser)» der usikkerheten er reell.
>
> **Emneidentitet (verifisert mot NTNUs emneside):** MA1202 «Lineær algebra med anvendelser», 7,5 studiepoeng, aktiv (vår). Skriftlig skoleeksamen, 4 timer, karakterskala A–F. Emnet er NTNUs *oppfølger* etter MA1201 (grunnkurset i lineær algebra) og er tydelig mer abstrakt og anvendt: generelle vektorrom over vilkårlig kropp, lineærtransformasjoner/operatorer på endeligdimensjonale rom, egenverdier/egenvektorer og diagonalisering, Cayley–Hamilton, indreprodukt-rom med Gram–Schmidt, spesielle operatorer (ortogonale, symmetriske, unitære, normale, selvadjungerte) og spektralteoremene, samt anvendelser (Markov-kjeder, populasjonsvekst, systemer av differensiallikninger, minste kvadraters metode, Fourier-tilnærming).
>
> **Overlapp (kort):** MA1202 overlapper *tematisk* med UiO MAT1120 (indreprodukt, ortogonalitet, diagonalisering, minste kvadrater, Markov) og med TMA4110-tradisjonen ved NTNU. Men MA1202 er selvstendig med en klart tyngre *abstrakt operator-vekt* (matrise av en operator relativt en basis, derivasjonsoperator på polynomrom, kommutator-/adjungert-operatorer, spektralteoremene på generelle indreproduktrom) og et fast *anvendelseslag*. Denne analysen er skrevet selvstendig for MA1202.

---

## 1. Eksamensform og utvikling

MA1202 vurderes med **én avsluttende skriftlig skoleeksamen** (4 timer, 09:00–13:00), karakter A–F. Alle svar skal begrunnes; instruksen er gjennomgående «Grunngi alle svarene dine» / «Alle svar må begrunnes. Ta med nok mellomregning». Fra ca. 2018 står også den faste hjelpe-instruksen: **du kan bruke resultater fra tidligere deloppgaver selv om du ikke har løst dem**, og «første oppgave er ikke nødvendigvis den letteste». Eksamen gis både bokmål og nynorsk (og engelsk for MA6202-varianten); MA1202 og MA6202 deler samme sett.

### Hjelpemidler — tre regimer

| Periode | Hjelpemiddelkode | Innhold |
|---|---|---|
| 2004–2019 | **D** | Bestemt, enkel kalkulator (HP30S / Citizen SR-270X). Ingen trykte/håndskrevne hjelpemidler. (2005-settet nevner også Rottmann formelsamling, kode C — eldre praksis.) |
| **2020, 2021 (korona)** | **A** | *Alle* trykte og håndskrevne hjelpemidler, alle kalkulatorer. Hjemme-/digital eksamen. |
| 2022– | tilbake mot **D**-linjen | Ordinær skoleeksamen igjen; alle svar begrunnes |

Korona-regimet (A) satte ikke tydelige spor i oppgavesjangrene slik det gjorde i mange andre emner — oppgavene forble bevis- og forståelsesorienterte (der «alle hjelpemidler» uansett hjelper lite).

### Strukturhistorikk — antall oppgaver og oppgavelengde

Dette er det viktigste strukturfunnet: **oppgavesettets granularitet har endret seg markant med skiftende faglærere**, mens temaporteføljen er påfallende stabil.

| Periode | Faglærer(e) (fra settene) | Struktur |
|---|---|---|
| 2004–2013 | Celledoni, Grunert, Bergh m.fl. | **5 store oppgaver**, hver med 2–3 tunge deloppgaver; bredt sett fra rang/nullitet til unitær diagonalisering |
| 2014–2019 | Grunert, Oppermann, **Gjøsteen** | **4–5 oppgaver**; Gjøsteen-æraen (2018–2020) innfører fast «bruk tidligere delsvar»-instruks og anvendelseslaget (minste kvadrater, Markov med IT-/kryptografi-innpakning) |
| 2020–2022 (korona + etterdønning) | Gjøsteen, Taraldsen | **3–4 oppgaver**, lengre og mer sammensatte (PageRank-oppgaven 2020-kont er et signatureksempel) |
| **2023–2025** | ny faglærer (dd/m/åååå-datering, «MA1202/6202») | **6–7 korte, skarpt avgrensede oppgaver**, ofte én kjerneidé per oppgave; fast malstruktur (se under) |

**Malstrukturen 2023–2025** (svært stabil på tvers av vår- og august-settene) er så konsistent at den fungerer som prognosemal:

| Oppgave | Fast rolle |
|---|---|
| 1 | Diagonalisering (finn P med P⁻¹AP diagonal) **+ system av differensiallikninger** løst via diagonalisering, ofte med initialverdier. Alternativt: Markov/stokastiske matriser, regularitet og stabil tilstandsvektor. |
| 2 | **Underrom-sjekk** i et abstrakt rom — nesten alltid matriserom M₂ₓ₂(ℝ) eller funksjonsrom. To delmengder: én er underrom, én er det ikke (moteksempel kreves). |
| 3 | **Basis/dimensjon/koordinatvektorer** relativt en basis (dim V, dim span(S)); eller Gram–Schmidt + ortonormal basis. |
| 4 | **Lineærtransformasjon**: bestem f(x) fra oppgitte verdier, injektiv/surjektiv via fundamentalteoremet; eller klassifisering ortogonalt/unitært diagonaliserbar. |
| 5 | **Spesielle operatorer / spektralteorem** (ortogonalt vs. unitært diagonaliserbar) eller **Cayley–Hamilton** (regn ut Aⁿ eller A⁻¹ via charpol). |
| 6 | **Abstrakt bevis om egenverdier/inverterbarhet** (Aⁿ = 0 ⇒ A ikke inverterbar og I−A inverterbar; egenverdier til A og til g⁻¹fg er like; egenverdier til Aᵏ). |
| 7 | **Åpen bevisoppgave** (nilpotent+normal ⇒ 0; sum av egenvektorer er egenvektor ⇒ samme egenverdi; dim(Im f) og distinkte egenverdier). |

**Konstanter på tvers av alle år:**
- Emnet er **bevis- og begrunnelsestungt**. En stor andel av deloppgavene er «Vis at …», «Forklar hvorfor …», «Avgjør om …». Ren utregning uten begrunnelse gir lite.
- **Anvendelseslaget er fast, men lite**: hvert sett har typisk *én* «virkelighets-innpakket» oppgave (Markov-kjede, minste kvadrater, diff-liknings-modell), gjerne som oppgave 1. Innpakningen skifter (lemonadekiosker, IT-sikkerhet, PageRank, populasjon, røykere), men matematikken bak er alltid diagonalisering/egenverdier.
- **Abstraksjonsnivået skiller MA1202 fra grunnkurset**: vektorrommene er ofte polynomrom Pₙ, matriserom Mₘₓₙ eller funksjonsrom; operatorene er derivasjon, kommutator (T(A)=EA−AE), similartransformasjon (T(A)=S⁻¹AS) eller adjungert.

---

## 2. Temafrekvens-tabell

Celleverdi = antall år i perioden der temaet forekommer i minst én (del)oppgave. Talt over de årene der oppgavesett og/eller løsningsforslag er tilgjengelig (~22 sett; «tidlig» = 2004–2012, «midt» = 2013–2019, «nylig» = 2020–2025). Frekvensprosent er relativ til antall talte sett i vinduet.

| Tema | Tidlig (≈8) | Midt (≈7) | Nylig (≈9) | **Gjenganger-score** |
|---|---|---|---|---|
| Basis / dimensjon / lineær uavhengighet / koordinatvektorer rel. basis | 8 | 7 | 9 | **~24/24 ≈ 100 %** (universell byggekloss) |
| Egenverdier / egenvektorer / diagonalisering (finn P) | 6 | 6 | 8 | **~20/24 ≈ 83 %** |
| Indreproduktrom / ortonormal basis / **Gram–Schmidt** | 6 | 5 | 7 | **~18/24 ≈ 75 %** |
| Spesielle operatorer (symmetrisk/ortogonal/unitær/normal/selvadjungert) + **spektralteorem** | 6 | 4 | 6 | **~16/24 ≈ 67 %** |
| Lineærtransformasjon: vis lineær / matrise [T]_β rel. basis | 6 | 5 | 6 | **~17/24 ≈ 71 %** |
| **Markov-kjede / overgangsmatrise** (regulær, stabil tilstand, langtid) | 4 | 4 | 6 | **~14/24 ≈ 58 %** (anvendelse) |
| **System av differensiallikninger** via diagonalisering | 3 | 3 | 6 | **~12/24 ≈ 50 %** (voksende — fast i 2023–2025) |
| Fundamentalteoremet for lineærtransf. (dim ker + dim im = dim V) / injektiv-surjektiv | 4 | 4 | 5 | **~13/24 ≈ 54 %** |
| Abstrakte egenverdi-/operatorbevis (nilpotent, idempotent, Aᵏ, A⁴=A) | 4 | 3 | 6 | **~13/24 ≈ 54 %** (settets sluttoppgave 2023–2025) |
| Underrom-sjekk i abstrakt rom (matrise-/funksjonsrom) | 3 | 3 | 6 | **~12/24 ≈ 50 %** (voksende signatur i 2023–2025) |
| Derivasjonsoperator D på polynomrom | 3 | 2 | 4 | **~9/24 ≈ 38 %** |
| Determinant / rang / nullitet / inverterbarhet | 5 | 3 | 3 | **~11/24 ≈ 46 %** (fallende som egen oppgave) |
| Ortogonal projeksjon / nærmeste vektor / ortogonalt komplement W⊥ | 3 | 3 | 3 | **~9/24 ≈ 38 %** |
| Vektorrom-aksiomer / unikhet av 0 og invers | 2 | 2 | 3 | **~7/24 ≈ 29 %** |
| **Minste kvadraters metode / kurvetilpasning** | 1 | 2 | 3 | **~6/24 ≈ 25 %** (anvendelse; fast i Gjøsteen-æraen 2019–2020) |
| Matrisepotens Aᵏ (finn lukket formel) | 3 | 2 | 2 | **~7/24 ≈ 29 %** |
| Karakteristisk polynom faktorisert → dim V, dim ker (teoritelling) | 1 | 2 | 3 | **~6/24 ≈ 25 %** |
| Kommutator / abstrakte operatorer (T(A)=EA−AE, T(A)=S⁻¹AS) | 3 | 1 | 1 | **~5/24 ≈ 21 %** |
| Adjungert operator T* / eksistens av adjungert | 1 | 1 | 3 | **~5/24 ≈ 21 %** (økende — 2020, 2020-kont, 2025) |
| **Cayley–Hamilton-teoremet** | 0 | 0 | 2 | **~2/24 ≈ 8 %** (verifiser; sett først i 2024–2025-malen) |
| **Fourier-tilnærming** (best approksimasjon i indreproduktrom) | 1 | 1 | 0 | **~2/24 ≈ 8 %** (V2009, V2011) |
| Leontief input-output / økonomisk modell (I−A)x | 0 | 1 | 0 | **~1/24 ≈ 4 %** (V2018) |
| Lagrange-interpolasjon (basis + kryptografi-anvendelse) | 0 | 1 | 0 | **~1/24 ≈ 4 %** (V2019) |
| Kvadratisk form / ellipsoide (fra symmetrisk matrise) | 1 | 0 | 0 | **~1/24 ≈ 4 %** (H2009) |
| **Spillteori** (nullsum matrisespill) | 1 | 0 | 0 | **~1/24 ≈ 4 %** (kun V2014; ellers fraværende) |
| **Fraktaler** | 0 | 0 | 0 | **0/24 = 0 %** (nevnt i emnebeskrivelsen, ikke funnet i arkivet) |
| Kvotientrom / bilineære former / dualrom (rent teoretisk) | 0 | 0 | 0 | **0/24 = 0 %** (nevnt i pensum, aldri eksamensoppgave i arkivet) |

**Viktigste funn:**

1. **Diagonalisering er navet.** Egenverdier/egenvektorer/diagonalisering står direkte i ~83 % av settene, og *driver også* diff-liknings-oppgavene (50 %), Markov-oppgavene (58 %) og matrisepotens-oppgavene. Regner man alt som «bruker diagonalisering» kommer man over 90 %. En eksamensrettet bok må gjøre diagonaliserings-maskineriet helt automatisk.

2. **Indreprodukt + Gram–Schmidt + spektralteorem er den andre bærebjelken** (~75 % / ~67 %). Gjennomgående mønster: definer/verifiser et indreprodukt (ofte ∫f·g på et polynomrom, eller tr(AᵀB) på et matriserom), kjør Gram–Schmidt, og koble til om en operator er selvadjungert/normal ⇒ ortogonalt/unitært diagonaliserbar.

3. **Anvendelseslaget er reelt, men smalt.** De anvendelsene som *faktisk* testes jevnlig er Markov-kjeder, systemer av differensiallikninger og minste kvadrater. **Spillteori (nullsum matrisespill) opptrer kun én gang (V2014), og fraktaler har null forekomster i hele arkivet 2004–2025** — begge står i emnebeskrivelsen. Fourier-tilnærming dukket opp to ganger (2009, 2011), Leontief-økonomi to ganger (2016V, 2018V) og Lagrange-interpolasjon én gang (2019V). Boken må *dekke* de emnebeskrevne anvendelsene, men eksamenstreningen skal kalibreres mot Markov / diff-likninger / minste kvadrater.

4. **Cayley–Hamilton er nytt eksamensstoff (verifiser).** Teoremet står sentralt i pensum, men opptrer som eksplisitt regneoppgave først i 2024–2025-malen (regn ut Aⁿ eller A⁻¹ via charpolynomet). Eldre sett brukte det ikke som egen oppgave. Nye sett bør sjekkes.

5. **Malstabilitet 2023–2025.** De seks siste settene (vår + august 2023, 2024, 2025) følger nesten identisk 6–7-oppgavers-mal (se del 1). Dette er den sterkeste prognosekilden vi har.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med krav, frekvens og ett omskrevet eksempel per sjanger (alle eksempler er nykonstruerte).

### A. Diagonalisering + system av differensiallikninger
- **Krav:** (i) Finn charpolynomet, egenverdiene og en basis av egenvektorer; sett P = [egenvektorer], da er P⁻¹AP = D diagonal. (ii) For y′ = Ay: innfør substitusjonen z = P⁻¹y, som avkobler systemet til zᵢ′ = λᵢzᵢ med løsning zᵢ = cᵢe^{λᵢt}; transformer tilbake y = Pz. (iii) Bruk initialverdier til å bestemme konstantene cᵢ. Fasiten fører hvert ledd: charpol → egenrom-basis → P → z-løsning → y-løsning → konstantbestemmelse.
- **Frekvens:** Diagonalisering ~83 %; koblet med diff-likninger ~50 % (fast oppgave 1 i 2023–2025).
- **Omskrevet eksempel:** «La A = [[1,1],[4,−2]]. Finn en inverterbar P slik at P⁻¹AP er diagonal, og bruk dette til å løse systemet y₁′ = y₁ + y₂, y₂′ = 4y₁ − 2y₂ med y₁(0)=1, y₂(0)=6.»

### B. Markov-kjede / overgangsmatrise
- **Krav:** (i) Sett opp den stokastiske matrisen fra den verbale modellen — hver *kolonne* summerer til 1 (kursets konvensjon: xₙ₊₁ = Mxₙ). (ii) Avgjør om matrisen er **regulær** (en potens har bare positive innslag) — motivasjonen bak at grensen finnes. (iii) Finn **stabil tilstandsvektor**: den entydige sannsynlighetsvektoren i nullrommet til (I−M), altså egenvektoren for λ=1 normert til sum 1. (iv) «Avhenger langtidsgrensen av starttilstanden?» — for regulær matrise: nei. Varianten med flere matriser krever å skille stokastisk fra ikke-stokastisk og regulær fra ikke-regulær.
- **Frekvens:** ~58 %. Innpakninger brukt: lemonadekiosker, papirfarger, kafeteria-måltider, fluer, røykere, IT-sikkerhetstilstander, PageRank/søkemotorer.
- **Omskrevet eksempel:** «I en småby handler kundene lemonade hos enten Solveig eller Tuva. 60 % av Solveigs kunder kommer tilbake til henne, 30 % av Tuvas kunder bytter til Solveig. Hvor stor andel handler hos Tuva på lang sikt?»

### C. Underrom-sjekk i abstrakt rom
- **Krav:** For «er W et underrom?»: sjekk (i) nullvektoren ligger i W, (ii) lukket under addisjon, (iii) lukket under skalarmultiplikasjon. For **positivt svar** føres alle tre; for **negativt svar** holder det med ett konkret **moteksempel** (typisk brudd på lukkethet under addisjon, eller at nullvektoren mangler). Rommene er nesten alltid M₂ₓ₂(ℝ) (f.eks. «alle inverterbare matriser» — ikke underrom; «alle A med A²=0» — ikke underrom; «alle A med AM=MA» — underrom) eller funksjonsrom (f.eks. {f | f(0)=a}: underrom kun for a=0).
- **Frekvens:** ~50 %, voksende — fast oppgave 2 i 2023–2025.
- **Omskrevet eksempel:** «I M₂ₓ₂(ℝ): er mengden av inverterbare matriser et underrom? Er mengden {A | A²=0} et underrom? Begrunn.»

### D. Basis, dimensjon og koordinatvektorer
- **Krav:** Fra oppgitte koordinatvektorer [vᵢ]_β i ℝⁿ: dim V = n (antall koordinater), og dim span(S) = rangen til matrisen med koordinatvektorene som kolonner (radreduksjon). Variant: gitt en faktorisert karakteristisk polynom for en *diagonaliserbar* operator, les av dim V (= grad) og dim(ker f) (= algebraisk multiplisitet til λ=0).
- **Frekvens:** grunnkomponent i ~100 % av settene; egen oppgave (koordinatvektor-varianten) i flere nyere sett.
- **Omskrevet eksempel:** «V har basis β. Fire vektorer er gitt ved sine koordinatvektorer i ℝ⁵. Hva er dim V, og hva er dim span av de fire vektorene?»

### E. Indreproduktrom + Gram–Schmidt
- **Krav:** (i) **Verifiser at ⟨·,·⟩ er et indreprodukt**: lineær i første variabel, symmetrisk (konjugatsymmetrisk over ℂ), og positivt definit (⟨f,f⟩ ≥ 0 med likhet kun for f=0). Standardeksempler: ⟨f,g⟩ = ∫f·g over et intervall (polynomrom), ⟨A,B⟩ = tr(AᵀB) (matriserom), eller sum av produktverdier i punkter. (ii) **Gram–Schmidt** på en gitt mengde → ortogonal(/ortonormal) basis; poenget om at prosessen *ikke endrer* allerede ortogonale vektorer bør uttales.
- **Frekvens:** ~75 %.
- **Omskrevet eksempel:** «På polynomrommet med ⟨f,g⟩ = ∫₋₁¹ f(t)g(t)dt: vis at dette er et indreprodukt, og bruk Gram–Schmidt på {1, x, x²} til å finne en ortogonal basis.»

### F. Ortogonal projeksjon / ortogonalt komplement
- **Krav:** Forklar W⊥ (alle vektorer ortogonale på hele W). Vis den ortogonale dekomponeringen y = w + z med w ∈ W, z ∈ W⊥ **entydig** (utvid ortonormal basis for W til hele V; eksistens + unikhet). Vis at w = proj_W(y) er vektoren i W nærmest y (Pythagoras: ‖y−u‖² = ‖y−w‖² + ‖w−u‖²). Regnevarianten: skriv en gitt vektor som lineærkombinasjon i en ortonormal basis via ⟨y, uᵢ⟩.
- **Frekvens:** ~38 %.
- **Omskrevet eksempel:** «La W være et underrom av et endeligdimensjonalt indreproduktrom og y en vektor. Vis at det finnes entydige w ∈ W og z ∈ W⊥ med y = w + z, og at w er vektoren i W nærmest y.»

### G. Lineærtransformasjon: verifikasjon og matrise relativt basis
- **Krav:** «Vis at T er lineær»: T(au+bv) = aT(u)+bT(v) direkte. **[T]_β**: send hver basisvektor gjennom T, uttrykk resultatet i (mål)basisen, sett koordinatene som kolonner. Varianten «bestem T(x) fra oppgitte verdier»: skriv x som lineærkombinasjon av vektorene der T er kjent (mulig kun hvis x ligger i deres span). Injektiv/surjektiv leses av fra dim ker / dim im.
- **Frekvens:** ~71 %.
- **Omskrevet eksempel:** «f: ℝ³→ℝ² er lineær med f(1,1,1)=(2,5) og f(0,1,1)=(1,3). Kan f(1,−1,−1) bestemmes? Kan man avgjøre om f er injektiv?»

### H. Fundamentalteoremet for lineærtransformasjoner
- **Krav:** dim(ker f) + dim(Im f) = dim V. Brukes til å avgjøre injektiv (dim ker = 0) / surjektiv (dim im = dim W), til å regne ut én dimensjon fra de to andre, og til å begrunne at en operator ikke kan være injektiv når dim(Im f) < dim V.
- **Frekvens:** ~54 %.
- **Omskrevet eksempel:** «En lineær f: V→W har dim(Im f) = 3 og dim(ker f) = 1. Hva er dim V, og kan f være injektiv?»

### I. Spesielle operatorer og spektralteoremene
- **Krav:** Kjenne ekvivalensene og bruke dem begge veier:
  - **Ortogonalt diagonaliserbar (reell) ⇔ symmetrisk** (A = Aᵀ) — spektralteoremet over ℝ.
  - **Unitært diagonaliserbar (kompleks) ⇔ normal** (AA\* = A\*A) — spektralteoremet over ℂ.
  - Selvadjungert operator ⇔ symmetrisk matrise i ortonormal basis; egenverdier reelle.
  - Oppgaven ber ofte om **for hvilke parameterverdier** matrisen er symmetrisk/normal, eller om å *konstruere* Q (ortogonal) / U (unitær) som diagonaliserer.
- **Frekvens:** ~67 %.
- **Omskrevet eksempel:** «For matrisen A = [[x,0,0],[0,0,z],[0,y,0]]: for hvilke x,y,z ∈ ℝ finnes en ortogonal Q med Q⁻¹AQ diagonal? For hvilke x,y,z ∈ ℂ finnes en unitær U med U⁻¹AU diagonal?»

### J. Derivasjonsoperator på polynomrom
- **Krav:** D(p) = p′ på ℝ[x]≤n. Finn matrisen [D]_β i standardbasisen {1,x,…,xⁿ} (superdiagonal med 1,2,…,n). dim(Im D) = n, dim(ker D) = 1 (konstantene). D er **nilpotent** ⇒ eneste egenverdi 0 ⇒ ikke diagonaliserbar (og ingen basis gir inverterbar matrise). Variant: er D selvadjungert mht. et gitt indreprodukt? (Nei — vis med et konkret moteksempel ⟨D(x),1⟩ ≠ ⟨x,D(1)⟩.)
- **Frekvens:** ~38 %.
- **Omskrevet eksempel:** «På ℝ[x]≤3 med basis {1,x,x²,x³}: finn matrisen til derivasjonsoperatoren D, bestem dim(Im D) og dim(ker D), og avgjør om det finnes en basis der [D] er inverterbar.»

### K. Cayley–Hamilton
- **Krav:** En matrise tilfredsstiller sitt eget karakteristiske polynom, p(A) = 0. Brukes til å uttrykke høye potenser Aⁿ som lineærkombinasjon av lavere potenser (I, A, A², …), eller til å regne ut A⁻¹ = (lavere-grads polynom i A). Skriv charpolynomet, sett inn A, løs for det ønskede uttrykket.
- **Frekvens:** ~8 % (verifiser — først i 2024–2025-malen).
- **Omskrevet eksempel:** «Gitt en 3×3-matrise A med karakteristisk polynom p(t) = t³ − 5t² + 5t − 5, bruk Cayley–Hamilton til å uttrykke A⁴ ved lavere potenser av A.»

### L. Abstrakte egenverdi- og inverterbarhetsbevis (settets sluttoppgave)
- **Krav:** Kortbevis av typen:
  - **Aⁿ = 0 (nilpotent) ⇒ A ikke inverterbar** (det Aⁿ = (det A)ⁿ = 0), og **I−A inverterbar** (geometrisk sum: (I−A)(I + A + … + Aⁿ⁻¹) = I).
  - **Nilpotent ⇒ eneste egenverdi 0**; **idempotent (f²=f) ⇒ egenverdi 0 eller 1**; **A⁴=A + diagonaliserbar ⇒ A²=A** (via λ⁴=λ på egenverdiene).
  - **Egenverdiene til A og til g⁻¹fg (similartransformasjon) er like.**
  - **Sum av to egenvektorer er egenvektor ⇒ de har samme egenverdi.**
  - **Nilpotent + normal ⇒ operatoren er null** (normal ⇒ diagonaliserbar; alle egenverdier 0 ⇒ nulloperator).
  Malen: anta egenverdi λ med egenvektor x≠0, bruk definisjonen Ax=λx, manipuler, konkluder om λ.
- **Frekvens:** ~54 %; fast oppgave 6–7 i 2023–2025.
- **Omskrevet eksempel:** «La A være kvadratisk med Aⁿ = 0 for en n ≥ 1. Vis at A ikke er inverterbar, og at I−A er inverterbar.»

### M. Minste kvadraters metode (kurvetilpasning)
- **Krav:** Gitt datapunkter, sett opp designmatrisen A og løs **normallikningene** AᵀAx = Aᵀy (evt. x = (AᵀA)⁻¹Aᵀy) for koeffisientene i den lineære (Y=aX+b) eller kvadratiske (Y=aX²+bX+c) tilpasningen. Fasiten fører AᵀA, invers og Aᵀy eksplisitt.
- **Frekvens:** ~25 % (fast i 2019–2020).
- **Omskrevet eksempel:** «Bruk minste kvadraters metode til å finne den rette linjen Y = aX + b som passer best til datapunktene (1, 2.1), (2, 4.3), (3, 4.4), (5, 8.1).»

### N. Kommutator / similartransformasjon-operatorer (abstrakt)
- **Krav:** Operatorer på matriserom av typen T(A) = EA − AE (kommutator/Lie-brakett), S(A) = AD − DA, eller T(A) = S⁻¹AS. Vis lineær, finn matrisen relativt en basis for rommet, bestem ker/Im, avgjør inverterbarhet (T(A)=S⁻¹AS bevarer egenverdier; kommutatorer har alltid ikke-triviell kjerne — identiteten ligger i kjernen ⇒ determinant 0).
- **Frekvens:** ~21 % (tidlig-tung: 2005, 2010, 2011; sjeldnere nylig).
- **Omskrevet eksempel:** «På rommet av 3×3-matriser, la T(A) = E·A − A·E for en fast matrise E. Vis at T er lineær, og forklar hvorfor T ikke er inverterbar.»

### O. Adjungert operator T*
- **Krav:** Definisjon ⟨T(u),v⟩ = ⟨u,T\*(v)⟩. Avgjør om en operator har en adjungert (finnes alltid på endeligdimensjonale indreproduktrom; ikke garantert på uendeligdimensjonale som ℝ[x]). Avgjør om en operator er **selvadjungert** (T = T\*) ved å teste definisjonen på basiselementer.
- **Frekvens:** ~21 % (2020, 2020-kont, 2025).
- **Omskrevet eksempel:** «På polynomrommet med et gitt integral-indreprodukt, avgjør om derivasjonsoperatoren D har en adjungert.»

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og fasiter)
1. **Alt skal begrunnes.** «Grunngi alle svarene dine» / «Alle svar må begrunnes. Ta med nok mellomregning». Dette er emnets viktigste enkeltregel — et riktig sluttsvar uten resonnement gir lite. Emnet er i sin natur bevis-orientert.
2. **Bruk av tidligere delsvar er designet inn** (eksplisitt fra ~2018): «du kan bruke resultater fra tidligere deloppgaver selv om du ikke har løst dem». Fasitene skriver bokstavelig at man f.eks. bruker resultatet fra (b) i (c). Å se koblingen mellom deloppgavene er en del av det som måles.
3. **Teoremer skal navngis og forutsetninger sjekkes**: spektralteoremet (over ℝ hhv. ℂ), fundamentalteoremet for lineærtransformasjoner, Gram–Schmidt, Cayley–Hamilton, «regulær ⇒ entydig stabil tilstandsvektor». Ved «ortogonalt diagonaliserbar» må symmetrien uttales; ved «unitært diagonaliserbar» må normaliteten (AA\*=A\*A) verifiseres.
4. **Definisjoner der definisjonen etterspørres**: underrom vises med de tre lukkethetskravene; indreprodukt med de tre/fire aksiomene; egenverdibevis føres fra Ax=λx, ikke fra en påstand om diagonaliserbarhet.
5. **Moteksempel er fullgodt for negative svar** — «er W et underrom?» besvares «nei» med ett konkret brudd; men eksempelet må *verifiseres* (vis at nettopp dette elementet bryter aksiomet).
6. **Flere riktige svar honoreres**: ved diagonalisering er P ikke entydig — fasiten noterer eksplisitt «her finnes flere riktige svar». Ved åpne konstruksjonsoppgaver («gi et eksempel på en nilpotent operator ≠ 0») godtas ethvert korrekt, verifisert eksempel.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på det mekaniske: finn egenverdier/egenvektorer og P, sett opp overgangsmatrise og stabil tilstand, kjør Gram–Schmidt, regn normallikninger i minste kvadrater, les av dimensjoner.
- **Midtsjiktet** behersker i tillegg: koblingen diagonalisering → diff-likningssystem (substitusjon z = P⁻¹y), verifikasjon av indreprodukt-aksiomene, spektralteorem-klassifisering (symmetrisk/normal), fundamentalteoremet anvendt på injektiv/surjektiv, korrekt underrom-argument med moteksempel.
- **Toppsjiktet** kjennetegnes av: (i) rene **abstrakte bevis** (nilpotent/idempotent/normal-argumenter, similartransformasjon bevarer egenverdier, sum-av-egenvektorer-beviset) ført med presise definisjoner; (ii) den **entydige ortogonale dekomponeringen** og nærmeste-vektor-beviset (Pythagoras) fullt gjennomført; (iii) parameter-varianten av spektralteoremet (for hvilke x,y,z …); (iv) å se og gjenbruke deloppgavekoblingene; (v) håndtering av det uendeligdimensjonale tilfellet (adjungert/normering finnes ikke alltid på ℝ[x]).

---

## 5. Typiske feil (bygget inn som distraktorer eller dokumentert i fasitpraksis)

1. **Underrom «bevist» ufullstendig**: å sjekke bare én av de tre lukkethetsegenskapene, eller glemme nullvektor-kravet. Klassisk felle: «inverterbare matriser» ser lukket ut, men nullmatrisen mangler og summen av to inverterbare kan være singulær.
2. **Overgangsmatrise satt opp feil vei**: rader/kolonner byttet om slik at kolonnesummen ikke blir 1; å konkludere langtidsfordeling uten å sjekke regularitet.
3. **Stabil tilstandsvektor ikke normert**: å oppgi en egenvektor for λ=1 uten å skalere til sannsynlighetsvektor (sum 1, ikke-negative innslag).
4. **Diagonalisering uten å sjekke at det finnes nok egenvektorer**: å anta diagonaliserbarhet når geometrisk multiplisitet < algebraisk (særlig ved gjentatte egenverdier). Ikke-diagonaliserbare tilfeller (nilpotent D, defekte matriser) må gjenkjennes.
5. **Diff-likningssystem løst uten avkobling**: å hoppe over substitusjonen z = P⁻¹y og gjette løsningen; å glemme å transformere tilbake (y = Pz) eller å bestemme konstantene fra initialverdiene.
6. **Ortogonal vs. unitær diagonalisering forvekslet**: bruke «symmetrisk» over ℂ der «normal» kreves, eller å ikke sjekke AA\*=A\*A. Å glemme kompleks konjugasjon i det komplekse indreproduktet/adjungerte.
7. **Gram–Schmidt-slurv**: feil projeksjonsformel, uteglemt normering når *ortonormal* basis kreves, eller unødvendig regning på allerede ortogonale vektorer.
8. **Indreprodukt-verifikasjon ufullstendig**: å hoppe over positiv definitthet (⟨f,f⟩=0 ⇒ f=0), som er nettopp der kandidat-«indreprodukter» ofte feiler (f.eks. evaluering i for få punkter på et for stort polynomrom).
9. **Fundamentalteoremet feilbrukt**: å blande dim V (definisjonsrommet) med dim W (målrommet); surjektiv krever dim(Im f) = dim W, ikke dim V.
10. **Egenverdibevis via matrise i stedet for definisjon**: å argumentere med en spesifikk matriserepresentasjon der den generelle definisjonen Ax=λx kreves (abstrakte operatorbevis).
11. **Adjungert antatt å eksistere**: på uendeligdimensjonale rom (ℝ[x]) finnes ikke alltid en adjungert / en norm fra indreproduktet — å behandle det som endeligdimensjonalt.
12. **Determinant/inverterbarhet-koblingen glemt** i operatoroppgaver: å ikke se at identiteten ligger i kjernen til en kommutator ⇒ determinant 0 ⇒ ikke inverterbar.

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (kunne anvende, navngi og delvis bevise)

**Vektorrom og lineærtransformasjoner:**
- Vektorromsaksiomene (VS1–VS8) over vilkårlig kropp; unikhet av 0 og av additiv invers.
- Underrom-kriteriet (nullvektor + lukkethet under + og ·); span, lineær uavhengighet, basis, dimensjon.
- Koordinatvektor [v]_β; matrise til en lineærtransformasjon [T]_β (og [T]_{γ,β} mellom to basiser); basisskifte.
- **Fundamentalteoremet for lineærtransformasjoner**: dim(ker T) + dim(Im T) = dim V; injektiv ⇔ ker={0}; surjektiv ⇔ Im=W; isomorfi.

**Egenverdier og diagonalisering:**
- Karakteristisk polynom det(A − λI); egenverdier, egenrom, algebraisk og geometrisk multiplisitet; diagonaliserbarhet ⇔ nok lineært uavhengige egenvektorer; P⁻¹AP = D.
- **Cayley–Hamilton**: p(A) = 0; brukt til høye potenser og invers.
- Anvendelser: matrisepotens Aᵏ = PDᵏP⁻¹; **system av differensiallikninger** y′=Ay via avkobling; **Markov-kjeder** (stokastisk/regulær matrise, stabil tilstandsvektor = egenvektor for λ=1, langtidsgrense).

**Indreproduktrom:**
- Indreprodukt-aksiomene (lineær i første variabel, (konjugat)symmetrisk, positivt definit); norm og ortogonalitet; **Gram–Schmidt**; ortonormal basis.
- **Ortogonalt komplement W⊥**, ortogonal dekomponering V = W ⊕ W⊥, ortogonal projeksjon som nærmeste vektor (Pythagoras/projeksjonssetningen).
- **Adjungert operator T\*** (⟨Tu,v⟩=⟨u,T\*v⟩); selvadjungert.
- **Spektralteoremene**: reell symmetrisk matrise er ortogonalt diagonaliserbar; kompleks normal matrise er unitært diagonaliserbar. Klassifisering ortogonal/symmetrisk/unitær/normal.

**Anvendt lineær algebra:**
- **Minste kvadraters metode**: normallikningene AᵀAx = Aᵀy; lineær og polynomisk kurvetilpasning.
- (Emnebeskrevet, men lav/ingen arkivfrekvens: Fourier-tilnærming i indreproduktrom, populasjonsvekst, Leontief input-output, Lagrange-interpolasjon.)

### Må forstås, men testes sjelden/aldri i arkivet
- **Cayley–Hamilton** som egen regneoppgave — sett først i 2024–2025-malen (verifiser mot nye sett).
- **Fourier-tilnærming** (2009, 2011), **Leontief-økonomi** (2018), **Lagrange-interpolasjon** (2019), **kvadratisk form/ellipsoide** (2009) — enkeltforekomster; dekk med standardmetode, merk som lav-frekvent.
- **Spillteori** — kun én forekomst i arkivet (V2014, nullsum matrisespill med optimal strategi og spillverdi); **fraktaler** har null forekomster. Begge står i emnebeskrivelsen. Boken bør dekke dem (pensumkrav) med standardfremstilling, tydelig merket lav/ingen arkivfrekvens; eksamenstreningen legges ikke hit.
- **Kvotientrom, bilineære former, dualrom** — nevnt som mer avanserte pensumbegreper, men aldri sett som eksamensoppgave i arkivet.

### Notasjonskonvensjoner boken bør speile
- [v]_β for koordinatvektor, [T]_β / [T]_{γ,β} for matrise av operator; P for diagonaliseringsmatrise, D for diagonalmatrise.
- Overgangsmatrise M med xₙ₊₁ = Mxₙ (kolonnesum 1); stabil tilstandsvektor i nullrommet til (I−M).
- ⟨·,·⟩ for indreprodukt, W⊥ for ortogonalt komplement, T\* for adjungert, A\* for konjugert transponert.
- **Læreboksforankring:** eldre løsningsforslag (t.o.m. ~2013) refererer **Anton & Rorres, *Elementary Linear Algebra with Applications*** (teorem-/eksempelnumre siteres). 2020-forslaget refererer **Friedberg, Insel & Spence, *Linear Algebra* (4. utg.)** — pensumboken kan altså ha skiftet i perioden (verifiser mot gjeldende emneside). Formelsamling: Rottmann (eldre sett).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen)
1. **Diagonaliserings-maskineriet komplett** — charpol, egenrom-basis, P, P⁻¹AP=D. ~83 % direkte, driver dessuten diff-likninger, Markov og matrisepotens. Emnets absolutte kjerne.
2. **System av differensiallikninger via diagonalisering** — fast oppgave 1 i 2023–2025; avkobling z=P⁻¹y, tilbaketransformasjon, initialverdier.
3. **Markov-kjeder** — stokastisk/regulær matrise, stabil tilstandsvektor, langtidsgrense og starttilstands-avhengighet; det faste anvendelseslaget.
4. **Indreprodukt + Gram–Schmidt** — verifisere aksiomene på polynom-/matriserom, produsere ortonormal basis. ~75 %.
5. **Spesielle operatorer + spektralteoremene** — symmetrisk ⇒ ortogonalt diagonaliserbar, normal ⇒ unitært diagonaliserbar; parameter-varianten. ~67 %.
6. **Underrom-sjekk i abstrakt rom** — tre lukkethetskrav; moteksempel for negativt svar. Fast oppgave 2 i den nye malen.
7. **Lineærtransformasjon + fundamentalteoremet** — [T]_β, injektiv/surjektiv, bestem T(x) fra kjente verdier.

### Nivå 2 — må kunne (gir bredden i poengfangsten)
8. **Basis/dimensjon/koordinatvektorer** inkl. dim span via rang og dim/ker fra faktorisert charpol.
9. **Abstrakte egenverdi-/inverterbarhetsbevis** — nilpotent/idempotent, Aⁿ=0 ⇒ I−A inverterbar, similartransformasjon, sum-av-egenvektorer. Fast oppgave 6–7 i 2023–2025.
10. **Ortogonal projeksjon / W⊥** — entydig dekomponering, nærmeste vektor (Pythagoras).
11. **Derivasjonsoperator D** på polynomrom — matrise, ker/Im, nilpotens.
12. **Minste kvadraters metode** — normallikningene for lineær og kvadratisk tilpasning.
13. **Matrisepotens Aᵏ** via diagonalisering; **Cayley–Hamilton** for potenser/invers (økende — prioriter opp om nye sett bekrefter).
14. **Vektorrom-aksiomer / unikhet** (VS3/VS4-bevisene).
15. **Adjungert operator / selvadjungert** inkl. det uendeligdimensjonale forbeholdet.

### Nivå 3 — bør dekkes (pensumkrav, lav/ingen arkivfrekvens)
16. **Determinant/rang/nullitet** som egen oppgave (fallende, men grunnleggende).
17. **Kommutator-/similartransformasjon-operatorer** (tidlig-tunge; kan gjenoppstå).
18. **Fourier-tilnærming, Leontief-økonomi, Lagrange-interpolasjon, kvadratisk form** — enkeltforekomster; standardfremstilling, merk lav frekvens.
19. **Spillteori (1 forekomst, V2014) og fraktaler (0 forekomster)** — i emnebeskrivelsen: dekk med standardmetode, merk lav/ingen arkivfrekvens.
20. **Kvotientrom / bilineære former / dualrom** — teoretisk pensum uten eksamensbelegg; kort dekning for fullstendighet.

**Prognose for neste eksamen** (basert på 2023–2025-malen, sterk kilde): 6–7 korte oppgaver over 4 timer, karakter A–F, alle svar begrunnet. Forventet mal: (1) diagonalisering + diff-likningssystem *eller* Markov med stabil tilstandsvektor; (2) underrom-sjekk i M₂ₓ₂(ℝ) eller funksjonsrom (én ja, én nei); (3) basis/dimensjon/koordinatvektorer *eller* Gram–Schmidt; (4) lineærtransformasjon (bestem f(x) / injektiv-surjektiv via fundamentalteoremet); (5) spektralteorem-klassifisering (ortogonalt vs. unitært diagonaliserbar, gjerne med parametre) *eller* Cayley–Hamilton; (6) abstrakt egenverdi-/inverterbarhetsbevis (nilpotent-typen); (7) åpen bevisoppgave om egenverdier/operatorer. **Usikkerhetsmoment:** Cayley–Hamilton og adjungert-oppgaver er i vekst; spillteori/fraktaler kan i prinsippet dukke opp siden de står i pensum — verifiser mot første tilgjengelige sett etter 2025.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1202/`.

**Løsningsforslag lest grundig (nyere, 2018–2025):**
`losningsskisse_v18.pdf` (2018V), `v19-lf.pdf` (2019V), `lf_eksamen_2020.pdf` (2020V), `lfeksjuni21.pdf` (2021V), `v22-lf.pdf` (2022V), `lford.pdf`/`lfkont.pdf` (2023, ordinær + kontinuasjon), `mai24lf.pdf`/`august24lf.pdf` (2024), `lfmai25.pdf`/`lfaugust25.pdf` (2025).

**Løsningsforslag lest / skummet (eldre, 2004–2016):**
`ma1202_losV06.pdf`, `ma1202_losH09.pdf`, `ma1202_losV09.pdf`, `ma1202_losV10.pdf`, `ma1202_losV13.pdf`, `ma1202v12losning.pdf` (2012), `ma1202eksv11lf.pdf` (2011), `l.pdf`/`ls.pdf` (2016 vår + kontinuasjon), `ma1202.v2015.eng-solutions.pdf` (2015 aug).

**Oppgavesett lest grundig (2018–2025):**
`v18-nb.pdf`, `k18-nb.pdf` (2018 vår + aug), `v19-nb.pdf`, `k19-nb.pdf` (2019), `v20-nb.pdf`, `k20-nb.pdf` (2020, PageRank-oppgaven), `eksjuni21.pdf` (2021V), `v22-nb.pdf` (2022V), `v23bm.pdf`, `kont23bm.pdf` (2023), `mai24bm.pdf`, `august24bm.pdf` (2024), `mai25bm.pdf`, `august25bm.pdf` (2025).

**Oppgavesett skummet for temaregistrering (2004–2017):**
`ma1202eksV04.pdf`, `bm.pdf` (2013V), `eksamenma12022014.pdf`/`NTNU_MA1202.pdf` (2014V, duplikat), `b.pdf`/`bs.pdf` (2016 vår + kontinuasjon), `eksamen_bm.pdf` (2017V), `ma1202eksH05.pdf` (2005), `ma1202eksV06.pdf`–`ma1202eksV09.pdf` (2006–2009), `ma1202eksH09.pdf` (2009 høst), `ma1202eksv10no.pdf`–`ma1202eksv12no.pdf` (2010–2012), `ma1202.v2015.aug.0716.ny.ttest.pdf` (2015 aug).

**Merknader om kildene:**
- **Rene skann / tomme uttrekk:** Flere eldre løsningsforslag ga tomt eller ubrukelig tekstuttrekk (`ma1202_losH05.pdf`, `_losV04`, `_losV05`, `_losV07`, `_losV08`, `_losV14`, `ma1202eksV05.pdf`, `LF_2017.pdf`). For disse årene bygger temaidentifikasjonen på tilhørende oppgavesett og på nabo-årenes løsningsforslag. Merket der det gir reell usikkerhet.
- **Duplikater:** `NTNU_MA1202.pdf` = `eksamenma12022014.pdf` (2014V). Filnavnene `b`/`bs`/`l`/`ls` uten årstall ble identifisert via datoer i innholdet (2016 vår hhv. kontinuasjon).
- **Kryptiske filnavn:** Årstall for `bm`, `b`, `bs`, `eksamen_bm`, `k18/19/20-nb`, `v18/19/20-nb`, `eksjuni21` m.fl. ble lest ut av eksamensdato i selve dokumentet.
- **OCR-kvalitet:** Nyere løsningsforslag (2024–2025) foreligger som håndskrift-OCR med svak kvalitet; temastruktur er sikker (oppgaveinndeling tydelig), men enkelttall og detaljformuleringer er ikke gjengitt.
- **Pensumbok:** Referanser til Anton & Rorres i eldre forslag og til Friedberg/Insel/Spence i 2020-forslaget tyder på lærebokskifte i perioden — verifiser mot gjeldende emneside.
- **Emnebeskrivelse:** Emneidentitet, studiepoeng, eksamensform og pensumpunkter er verifisert mot NTNUs emneside (oppgitt i bestillingen); spillteori og fraktaler er emnebeskrevet, men har ingen arkivforekomst.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og eksempler er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon og ikke opphavsrettslig beskyttet tekst.
