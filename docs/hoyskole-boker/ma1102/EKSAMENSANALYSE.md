# Eksamensanalyse: MA1102 Grunnkurs i analyse 2 (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på NTNUs eget eksamensarkiv for MA1102 «Grunnkurs i analyse II / Grunnkurs i analyse 2» (2005–2023, 73 PDF-er, mange med løsningsforslag). Lest grundig: 13 komplette eksamenssett med løsningsforslag fra perioden 2016–2023 (vår + kontinuasjon), samt de to nyeste settene (vår 2023 og kont august 2023) som representerer den **gjeldende** pensumformen. Eldre sett (2005–2015) er skummet for temaregistrering og for å datere pensumendringer. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Matematiske uttrykk og teoremer er standard fagnotasjon. Analysen er kvantitativ der kildene tillater det, og usikre punkter er merket «(verifiser)».
>
> **Forhold til andre analyse-emner:** MA1102 er NTNUs analyse-oppfølger til MA1101 og overlapper *tematisk* delvis med UiO MAT1110 (rekker, potensrekker) og med TMA4100/4105-tradisjonen (rekker, ODE). Men MA1102 er et **selvstendig emne med sterk bevis- og konvergensvekt**: uniform konvergens, Weierstrass' approksimasjonsteorem, Picard–Lindelöf, grunnleggende topologi for euklidske rom og delvis summasjon (Abel). Emnet har sitt eget NTNU-arkiv og sin egen eksamensmal, og analysen nedenfor er selvstendig. Overlappen er nevnt her og ellers bare der den er relevant.

---

## 1. Eksamensform og utvikling

MA1102 vurderes med **én skriftlig skoleeksamen** (4 timer, karakterskala A–F). Forkunnskapskrav er MA1101. Emnet gis om våren; det finnes i tillegg kontinuasjonseksamen om sommeren/høsten (august). Arkivet inneholder derfor to sett per studieår i nyere tid: vår + kont.

Det viktigste strukturfunnet er at emnet har gjennomgått **et markant pensum- og formatskifte som slår gjennom i 2023-settene.** Det finnes to tydelige epoker i arkivet:

| | «Kalkulus-epoken» (t.o.m. 2022) | «Ren analyse-epoken» (2023→, gjeldende) |
|---|---|---|
| Sentrale tema | Kjeglesnitt (ellipse/parabel/hyperbel), parametriske kurver (fart/akselerasjon/buelengde), numerisk integrasjon (Simpson/trapes), Newton, ODE, potens-/Taylorrekker, uniform konvergens | Grunnleggende topologi i R (åpen/lukket/kompakt/tellbar), Cauchyfølger, rekkekonvergens (klassifisering), komplekse røtter, uniform konvergens, Weierstrass M-test, potensrekker, ODE, Newton, Euler |
| Åpningsoppgave | Kjeglesnitt eller parametrisk kurve | **10 sann/usann-utsagn om topologi/følger/kontinuitet** (ingen begrunnelse kreves) |
| Forsvunnet | — | Kjeglesnitt, parametriske kurver, fart/akselerasjon/buelengde, numerisk integrasjon (Simpson/trapes) — **null forekomst i 2023-settene** |
| Nytt/oppgradert | — | Topologi, Cauchyfølger, tellbarhet, kompakthet, Weierstrass M-test, delvis summasjon (Abel) |
| Hjelpemidler | Varierer: både «alle hjelpemidler» (kont 2022, kode A) og «kun enkel kalkulator» (kode D) forekommer | Kode D (kun enkel kalkulator) på kont v2023; vedlagt formelark med Maclaurinrekker, numeriske metoder, Eulers formel |

**Konsekvens for boken:** Den gjeldende emnebeskrivelsen (reelle/komplekse tall, topologi for euklidske rom, algebraens fundamentalteorem, delvis summasjon (Abel), følger og rekker, potensrekker, Taylorrekker, uniform konvergens, Weierstrass' approksimasjon, 1. ordens ODE, Picard–Lindelöf, lineære ODE, potensrekkeløsninger) samsvarer **nesten fullstendig med 2023-epokens eksamensform** — og bare delvis med den eldre kalkulus-epoken. Boken må kalibreres mot 2023-malen, men de klassiske ferdighetene (ODE, potensrekker, uniform konvergens, Newton/Euler) er **felles for begge epoker** og bærer fortsatt.

### Formatkonstanter (gjeldende epoke, 2023)
- **7 oppgaver som teller likt** (kont v2023 sier eksplisitt «alle 7 oppgaver teller likt»). Oppgave 2 er selv delt i 5 klassifiseringsspørsmål; oppgave 1 er 10 sann/usann-utsagn.
- Fast dramaturgi: (1) topologi sann/usann → (2) rekker: bevis konvergens + klassifiser divergent/betinget/absolutt → (3) komplekse røtter av z^n = w → (4) uniform konvergens av funksjonsfølge på [0,1] → (5) finn potensrekker + konvergensradius/-område for 3 funksjoner → (6) Euler/forbedret Euler for et 1. ordens initialverdiproblem → (7) lineær ODE med initialbetingelser + potensrekkeløsning.
- **Begrunnelse kreves overalt unntatt sann/usann-oppgaven** («Begrunn ditt svar» gjentas etter hvert punkt). Der alle hjelpemidler er tillatt (kode A), understrekes det ekstra: «det er viktig at svarene er godt begrunnet».
- Formelark medfølger: Maclaurinrekker for e^x, sin, cos, 1/(1−x); numeriske metoder (Newton, Euler, forbedret Euler / midpunktsmetode); Eulers formel e^{iθ} = cos θ + i sin θ. Studenten skal altså **ikke** pugge disse, men vite når og hvordan de brukes.

---

## 2. Temafrekvens-tabell

Celleverdi = antall distinkte eksamenssett i perioden der temaet forekommer som (del)oppgave. Kildegrunnlag: 13 sett lest med løsningsforslag 2016–2023 (v2016, kont2016, v2017, kont2017, v2018, kont2018, v2019, v2020, v2021, v2022, kont2022, v2023, kont2023) + skumlesing av 2005–2015. Kolonnen «gjeldende» gjelder de to 2023-settene som representerer dagens form.

| Tema | 2016–19 (7 sett) | 2020–22 (4 sett) | 2023 (2 sett) | **Score / status** |
|---|---|---|---|---|
| **Lineære ODE m/konstante koeff. (homogen + partikulær)** | 7 | 4 | 2 | **13/13 = 100 %** — bærebjelke, alltid egen oppgave |
| **Potensrekkeløsning av ODE (rekurrens)** | 6 | 4 | 2 | **12/13 = 92 %** — nesten alltid siste oppgave |
| **Potensrekker: konvergensradius/-område** | 6 | 4 | 2 | **12/13 = 92 %** — forholds-/rottest + endepunktsjekk |
| **Uniform konvergens av funksjonsfølge** | 6 | 4 | 2 | **12/13 = 92 %** — signaturoppgave (sup‖fₙ−f‖→0) |
| **Rekkekonvergens (tester + klassifisering)** | 6 | 4 | 2 | **12/13 = 92 %** |
| **Komplekse tall / røtter (de Moivre, polarform)** | 5 | 4 | 2 | **11/13 = 85 %** — z^n = w-typen dominerer nyere |
| **Newtons metode** | 4 | 3 | 1 | **8/13 = 62 %** (formelark; v2023 hadde den, kont2023 ikke) |
| **Numerisk ODE (Euler / forbedret Euler / Simpson)** | 5 | 4 | 1 | **10/13 = 77 %** (Euler for ODE fast i 2023; Simpson/trapes forsvant) |
| **Taylor-/Maclaurinrekke (utledning/anvendelse)** | 6 | 3 | 1 | **10/13 = 77 %** (nå oftest verktøy i «finn potensrekke») |
| **Kjeglesnitt (ellipse/parabel/hyperbel)** | 5 | 3 | 0 | **8/13 = 62 %** (fallende; **borte etter 2022**) |
| **Parametriske kurver: fart/akselerasjon/buelengde** | 4 | 2 | 0 | **6/13 = 46 %** (**borte etter 2022**) |
| **Eksistens-/entydighetsbevis (skjæring/MVT/Newton-konv.)** | 3 | 3 | 0 | **6/13 = 46 %** (Newton-konvergensbevis stigende 2020–22) |
| **Topologi i R (åpen/lukket/kompakt/tellbar)** | 0 | 1 | 2 | **3/13 = 23 %** (v2022 «f⁻¹(A) ikke åpen»; **eksploderer 2023**) |
| **Cauchyfølger** | 0 | 1 | 2 | **3/13 = 23 %** (v2022 nøstet intervall-bevis; fast 2023) |
| **Weierstrass M-test / approksimasjon** | 0 | 1 | 1 | **2/13 = 15 %** (v2022 kontinuitet via M-test; kont2022 M-test) |
| **Delvis summasjon (Abel) / Abels teorem** | 1 | 1 | 0 | **2/13 = 15 %** (v2022 partiell summasjon; kont2016-øving Abels teorem) |
| **Følger: sup/monoton+begrenset/grense** | 3 | 3 | 1 | **7/13 = 54 %** (ofte innbakt i Newton-konvergens) |
| **Algebraens fundamentalteorem (eksplisitt)** | 0 | 0 | 0 | **0/13 = 0 %** (pensum, men aldri egen oppgave — verifiser) |
| **Picard–Lindelöf (eksplisitt)** | 0 | 0 | 0 | **0/13 = 0 %** (pensum, men ingen arkivforekomst — verifiser) |

**Viktigste funn:**

1. **Fem tema bærer nesten hver eneste eksamen** (uansett epoke): lineære ODE, potensrekkeløsning av ODE, potensrekkers konvergensradius, uniform konvergens av funksjonsfølge, og rekkekonvergens/-klassifisering. Alle ligger på 92–100 %. En eksamensrettet bok må gi disse **størst plass og mest oppgavetrening**.

2. **Pensumskiftet i 2023 er reelt og stort.** Topologi (åpen/lukket/kompakt/tellbar), Cauchyfølger, tellbarhet og en 10-punkts sann/usann-åpningsoppgave er nye tunge blokker; samtidig forsvinner kjeglesnitt, parametriske kurver (fart/akselerasjon/buelengde) og numerisk integrasjon (Simpson/trapes) helt ut av 2023-settene. Emnebeskrivelsen bekrefter at topologi er inne og at kjeglesnitt/parametriske kurver *ikke* nevnes — boken skal følge 2023-formen.

3. **Weierstrass M-test og delvis summasjon (Abel) står i emnebeskrivelsen og dukket opp i 2021–2022** (M-test for å vise kontinuitet av en rekkesum; partiell summasjon på integralform for å vise konvergens). Lav arkivfrekvens, men eksplisitt pensum og karakterdifferensierende — må dekkes.

4. **Algebraens fundamentalteorem og Picard–Lindelöf står i pensum, men har null eksplisitte oppgaveforekomster** i arkivet. Fundamentalteoremet brukes implisitt (at komplekse polynomer har n røtter — det er hele grunnlaget for z^n = w-oppgavene). Picard–Lindelöf er den teoretiske ryggraden bak at initialverdiproblemene har entydig løsning, men testes ikke som egen oppgave i arkivet. Boken må dekke begge som teori; eksamenstreningen kalibreres mot de dokumenterte sjangrene. **(verifiser mot 2024+-sett når de foreligger.)**

5. **Uniform konvergens er emnets tydeligste faste karakterskiller.** Malen er nesten identisk år etter år: gitt fₙ(x), finn punktvis grense f, regn deretter sup over intervallet av |fₙ−f| (via derivasjon/toppunkt), og konkluder uniform ⇔ denne supen → 0. Nesten hvert eneste sett har denne.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med krav, frekvens og **ett omskrevet eksempel** per sjanger (egne ord).

### A. Sann/usann om topologi, følger og kontinuitet (åpningsoppgaven, gjeldende epoke)
- **Krav:** 10 utsagn besvares kun med «Sann»/«Usann» — begrunnelse kreves *ikke*, men studenten må kjenne kjernefakta presist: kompakt i R ⇔ lukket **og** begrenset (Heine–Borel); vilkårlig snitt av lukkede/kompakte er lukket/kompakt, men vilkårlig union trenger ikke være det; ℚ er tellbar og *ikke* lukket i ℝ; Cauchyfølger i ℝ konvergerer, men grensen trenger ikke ligge i et åpent intervall eller være irrasjonal; kontinuerlige funksjoner bevarer kompakthet og Cauchy-/grenseoppførsel, og urbildet f⁻¹(lukket) er lukket, men f⁻¹(begrenset) trenger ikke være begrenset; fikspunkt for kontinuerlig f:[0,1]→[0,1] (Brouwer i 1D via skjæringssetningen).
- **Frekvens:** 2/2 i gjeldende epoke; forventet fast fremover.
- **Omskrevet eksempel:** «Avgjør sann/usann: For enhver kontinuerlig funksjon f: ℝ→ℝ og enhver begrenset mengde A ⊂ ℝ er urbildet f⁻¹(A) begrenset.» (Usann — f kan være konstant, da blir urbildet hele ℝ.)

### B. Rekker: vis konvergens + klassifiser (divergent / betinget / absolutt)
- **Krav:** To ferdigheter kjedes. (i) *Vis at en gitt sum konvergerer* med navngitt argument: teleskopsum (Σ(aₙ−aₙ₋₁) via Cauchy-egenskap), sammenligning mot Σ C/2ⁿ eller Σ1/n², forholdstest, rottest. (ii) *Klassifiser* en liste rekker: bruk at absolutt konvergens ⇒ konvergens; test for alternerende rekker (ledd → 0 og monotont avtagende) gir betinget konvergens der Σ|aₙ| divergerer; identifiser skjulte alternerende rekker (cos(nπ)=(−1)ⁿ, cos(n·2π/2)-triks). p-rekker og 1/ln(n)-typen (divergerer siden ln n < n) er faste.
- **Frekvens:** 12/13.
- **Omskrevet eksempel:** «La (aₙ) være en begrenset følge. Vis at Σ aₙ/2ⁿ er absolutt konvergent, og avgjør om Σ(−1)ⁿ/√n er divergent, betinget eller absolutt konvergent.»

### C. Komplekse røtter av z^n = w (de Moivre / polarform)
- **Krav:** Skriv høyresiden på polarform re^{iθ}; sett z = ρe^{iφ}, løs ρ^n = r og nφ = θ + 2πk for k = 0,…,n−1; skriv ut alle n røtter (jevnt fordelt på sirkel med radius r^{1/n}). Substitusjonstriks når graden er sammensatt: for z⁶+z³+1=0, sett w = z³, løs andregradslikningen i w, og finn deretter kuberøttene av hver w. Algebraens fundamentalteorem garanterer at antallet røtter stemmer.
- **Frekvens:** 11/13; nesten alltid egen oppgave i nyere sett.
- **Omskrevet eksempel:** «Finn alle komplekse z med z⁵ = −i.» (Skriv −i = e^{−iπ/2}; røttene er e^{i(−π/2+2πk)/5}, k = 0,…,4.)

### D. Uniform konvergens av funksjonsfølge (signaturoppgaven)
- **Krav:** (i) Finn punktvis grensefunksjon f ved å ta lim fₙ(x) for hver fast x (pass på skjøtepunkter som x = 0, der grensen kan avvike). (ii) For uniform konvergens: regn dₙ = sup_x |fₙ(x) − f(x)|. Supen finnes typisk ved å derivere fₙ, finne toppunktet, og sette inn. (iii) Konkluder: uniform ⇔ dₙ → 0. Klassisk motfelle: hvis hver fₙ er kontinuerlig men f ikke er det (f.eks. f = 1 i x = 0, ellers 0), kan konvergensen *ikke* være uniform — dette argumentet skal kunne brukes direkte. Familier som går igjen: nx^a e^{−nx}, xe^{−nx²}, xe^{−nx}, x^{2n}/(n+1).
- **Frekvens:** 12/13 — emnets tydeligste faste oppgave.
- **Omskrevet eksempel:** «La fₙ(x) = x^{2n}/(n+1) på [0,1]. Finn den punktvise grensen f, og avgjør om fₙ → f uniformt på [0,1].»

### E. Potensrekker for gitte funksjoner + konvergensradius/-område
- **Krav:** Bygg potensrekken fra kjente Maclaurinrekker på formelarket (1/(1−x), e^x, sin, cos) ved substitusjon, derivasjon og integrasjon ledd for ledd — *ikke* ved å regne alle deriverte, unntatt for polynomer der Taylor om a ≠ 0 er raskest. Standardgrep: ln(1+y) fra integrasjon av 1/(1+y); arctan fra integrasjon av 1/(1+x²); xe^{cx} fra multiplikasjon. Deretter konvergensradius (substituér inn argumentet, |arg| < 1) og **eksplisitt endepunktsjekk** for konvergensområdet.
- **Frekvens:** 12/13. I gjeldende epoke er dette samlet i én oppgave med 3 funksjoner.
- **Omskrevet eksempel:** «Finn Maclaurinrekken til f(x) = ln(2x²+1), og angi konvergensområdet.»

### F. Lineær ODE med konstante koeffisienter (homogen + partikulær + initialbet.)
- **Krav:** (i) Løs den homogene ligningen via karakteristisk polynom — behandle enkle, doble og komplekse røtter riktig (dobbeltrot r gir Ae^{rx}+Bxe^{rx}; komplekst par a±bi gir e^{ax}(A cos bx + B sin bx)). (ii) Finn partikulærløsning med ansats etter høyresiden: polynom → polynom av samme grad; e^{cx} → Ce^{cx} (med x-faktor ved resonans); sin/cos → C sin + D cos. (iii) Sett inn initialbetingelser for å bestemme konstantene. Også høyere ordens (3.–4. orden) forekommer, der man løser samme karakteristiske ligning som i en komplekse-røtter-oppgave.
- **Frekvens:** 13/13 — den mest stabile oppgaven i hele arkivet.
- **Omskrevet eksempel:** «Løs y″ − 4y′ + 5y = e^{2x} med y(0) = 0, y′(0) = 2.» (Homogen: e^{2x}(A cos x + B sin x); partikulær Ce^{2x} gir C = 1.)

### G. Potensrekkeløsning av ODE (rekurrensrelasjon)
- **Krav:** Sett y = Σaₙxⁿ, deriver ledd for ledd, sett inn i ligningen, skift indeks slik at alle summer har xⁿ, og les av **rekurrensrelasjonen** for aₙ₊₂ (eller aₙ₊₁). Bruk initialbetingelsene til å fastsette a₀, a₁. Regn ut de første leddene, gjenkjenn mønsteret (ofte partall/oddetall-splitt: odde indekser = 0), skriv sluttsvaret som en lukket rekke — og gjenkjenn den gjerne som en elementær funksjon (f.eks. Σx^{2n}/n! = e^{x²}, eller Σxⁿ/((−2)ⁿn!) = e^{−x/2}). Konvergensradius via forholdstesten på rekurrensen til slutt.
- **Frekvens:** 12/13; nesten alltid siste oppgave.
- **Omskrevet eksempel:** «Finn potensrekkeløsningen y = Σaₙxⁿ av y″ − 2xy′ − 2y = 0 med a₀ = 1, a₁ = 0, og gjenkjenn den som en elementærfunksjon.» (aₙ₊₂ = 2aₙ/(n+2); odde ledd null; y = e^{x²}.)

### H. Numerisk løsning av 1. ordens ODE (Euler / forbedret Euler)
- **Krav:** Gitt y′ = f(x,y), y(x₀) = y₀ og steglengde h, iterér Eulers metode yₙ₊₁ = yₙ + h·f(xₙ,yₙ), eller forbedret Euler (midpunkt/prediktor-korrektor) etter formelarket, til ønsket x. Fast krav: **bruk nøyaktig 4 desimaler** i utregningene (gjentas i oppgaveteksten). Formlene ligger på formelarket — poenget er korrekt, disiplinert utregning.
- **Frekvens:** Euler for ODE i alle 2023-sett + de fleste eldre; ~10/13 totalt (i eldre sett også Simpson/trapes for integraler, nå borte).
- **Omskrevet eksempel:** «La y′ = xy² med y(0) = 1. Bruk Eulers metode med h = 0,1 til å approksimere y i x = 0,1, 0,2, 0,3 (4 desimaler).»

### I. Newtons metode (rotfinning)
- **Krav:** Regn f′, iterér xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) fra oppgitt x₀ et fast antall ganger (typisk 3), 4 desimaler. Viderekommen variant (2021, kont2022): *bevis* at Newton-følgen konvergerer mot roten — vis ved konveksitet/sekantsetning at følgen er monoton og begrenset, altså konvergent, og at grensen tilfredsstiller f(y) = 0. Ofte kjedet til en foregående oppgave som slår fast at f har nøyaktig ett nullpunkt (skjæringssetning for eksistens + strengt monotoni for entydighet).
- **Frekvens:** 8/13; konvergensbeviset er den karakterhevende delen.
- **Omskrevet eksempel:** «Vis at f(x) = 2x − cos x har nøyaktig én rot, og utfør tre Newton-iterasjoner fra x₀ = 0.»

### J. Grunnleggende topologi og Cauchyfølger som bevisoppgave
- **Krav:** Skriv definisjonene presist (Cauchy: ∀ε>0 ∃N slik at |xₙ−xₘ|<ε for n,m>N). Typiske bevis: nøstede lukkede intervaller [aₙ,bₙ] med bₙ−aₙ→0 har nøyaktig ett felles punkt (via Cauchy + kompletthet); vis at en gitt følge er Cauchy; velg en åpen mengde A slik at f⁻¹(A) *ikke* er åpen ved å treffe et diskontinuitetspunkt. Krever forståelse av kompletthetsaksiomet og supremum/infimum.
- **Frekvens:** 3/13, men stigende og nå fast i gjeldende epoke.
- **Omskrevet eksempel:** «La (xⱼ) ligge i nøstede lukkede intervaller [aⱼ,bⱼ] med bⱼ−aⱼ→0. Vis at (xⱼ) er en Cauchyfølge, og at snittet av alle intervallene er ett enkelt punkt.»

### K. Weierstrass M-test / kontinuitet av rekkesum (viderekommen)
- **Krav:** For å vise at en funksjonsrekke Σfₙ(x) representerer en kontinuerlig funksjon: finn tallfølge Mₙ med |fₙ(x)| ≤ Mₙ for alle x i intervallet og ΣMₙ < ∞; da gir Weierstrass' M-test uniform konvergens, og siden hvert ledd er kontinuerlig, er summen kontinuerlig. Motoppgave: finn moteksempel der Σaₙ divergerer men Σ(1−cos aₙ) konvergerer.
- **Frekvens:** 2/13, men eksplisitt pensum.
- **Omskrevet eksempel:** «Vis at Σ sin(aₙ)·cos(n²x) er kontinuerlig for alle x når Σ|aₙ| < ∞.»

### L. Delvis summasjon (Abel) / Abels teorem (viderekommen)
- **Krav:** Abels delvise summasjon (evt. på integralform) brukes til å vise konvergens av rekker der leddene er produkt av en begrenset delsum (f.eks. Σsin(an), som har begrenset delsum ved den lukkede formelen) og en monotont avtagende faktor (1/√n). Abels teorem: hvis Σaₙ konvergerer, er lim_{x→1⁻} Σaₙxⁿ = Σaₙ — brukes til å summere alternerende rekker (f.eks. π/4 = Σ(−1)ⁿ/(2n+1)).
- **Frekvens:** 2/13; eksplisitt pensum («delvis summasjon (Abel)»).
- **Omskrevet eksempel:** «Bruk delvis summasjon til å vise at Σ sin(an)/√n konvergerer for alle a.»

### Klassiske sjangre fra kalkulus-epoken (t.o.m. 2022 — sannsynligvis utgått)
Disse bar de eldre settene, men har **null forekomst i 2023** og nevnes ikke i gjeldende emnebeskrivelse. Boken kan behandle dem kort/som appendiks, men bør *ikke* prioritere eksamenstrening på dem med mindre nye sett gjeninnfører dem (verifiser):
- **Kjeglesnitt:** finn likningen til ellipse/parabel/hyperbel fra brennpunkt/styrelinje/eksentrisitet; identifiser kjeglesnitt fra diskriminanten til andregradslikningen (b²−4ac).
- **Parametriske kurver:** hastighetsvektor, fart, akselerasjon, baneakselerasjon; buelengde ∫√(x′²+y′²)dt.
- **Numerisk integrasjon:** Simpsons/trapesmetode med feilestimat via maks |f⁽⁴⁾|.

---

## 4. Sensorens krav

Utledet fra løsningsforslag og oppgaveinstrukser.

1. **Begrunnelse kreves overalt unntatt sann/usann-oppgaven.** «Begrunn ditt svar» gjentas etter hvert klassifiseringspunkt. Ved kode A (alle hjelpemidler tillatt) skjerpes kravet eksplisitt: uten begrunnelse teller svaret lite, siden svaret alene kan slås opp.
2. **Teoremer og tester skal navngis** når de bærer argumentet: forholdstesten, rottesten, testen for alternerende rekker, sammenligningstesten, skjæringssetningen, sekant-/middelverdisetningen, Weierstrass' M-test, Abels teorem, Heine–Borel/kompletthet. Løsningsforslagene navngir konsekvent testen før den brukes.
3. **Uniform konvergens skal føres med sup-avstanden.** Løsningsforslaget definerer d(fₙ,f) = sup|fₙ−f|, regner den ut via toppunkt, og konkluderer på grensen — det holder *ikke* å vise punktvis konvergens og påstå uniform.
4. **Endepunktene skal alltid sjekkes** ved potensrekker: konvergensradius er ikke nok — man må avgjøre om endepunktene x = ±r er med, med separat konvergenstest for hvert. Løsningsforslagene skriver konvergensområdet som lukket/halvåpent/åpent intervall.
5. **Rekurrensrelasjonen skal utledes fullstendig** ved potensrekkeløsning: indeksskift må gjøres eksplisitt slik at alle summer har xⁿ; koeffisientene til hver potens settes lik null; mønsteret (inkl. partall/oddetall-splitt) begrunnes før den lukkede formen skrives.
6. **Numerikk med foreskrevet presisjon:** «bruk kun 4 desimaler» er en instruks, ikke en anbefaling — mellomresultater rundes.
7. **Alternative løsninger honoreres:** løsningsforslagene presenterer ofte to veier (induksjon vs. komplekse eksponentialer for trig-summeidentiteter; direkte sammenligning vs. grensesammenligning; forholdstest vs. rottest) og godtar begge.
8. **Definisjoner kreves der de etterspørres:** Cauchy-bevis skal starte fra ε–N-definisjonen; topologibevis fra definisjonen av åpen/lukket/kompakt.

### Karakternivåene
- **Bestått** henter poeng på de mekaniske sjangrene: karakteristisk ligning + partikulærløsning, konvergensradius via forholdstest, oppsett av potensrekkeløsning, Euler/Newton-iterasjon, komplekse røtter via de Moivre, punktvis grense.
- **Midtsjiktet** behersker i tillegg full uniform-konvergens med sup-utregning, endepunktsjekk på konvergensområdet, klassifisering betinget vs. absolutt med riktig navngitt test, og lukket form på potensrekkeløsningen.
- **Toppsjiktet** kjennetegnes av: (i) korrekt og presis håndtering av sann/usann-utsagnene om topologi/kompakthet/tellbarhet; (ii) fullførte bevis (Cauchy/nøstede intervaller, Newton-konvergens via monoton+begrenset, kontinuitet via Weierstrass M-test, konvergens via delvis summasjon) med forutsetningene sjekket eksplisitt; (iii) å gjenkjenne potensrekkeløsningen som en elementærfunksjon; (iv) presis endepunkt- og randbehandling.

---

## 5. Typiske feil

Dokumentert som feller i løsningsforslag og som naturlige fallgruver i oppgavedesignet.

1. **Uniform konvergens «vist» kun punktvis:** å konkludere uniform uten å regne sup|fₙ−f|. Motsatt felle: å overse at grensefunksjonen er diskontinuerlig (verdi i skjøtepunkt avviker), som *utelukker* uniform konvergens.
2. **Endepunkter droppet ved potensrekker:** kun konvergensradius oppgitt; x = ±r ikke testet, så konvergensområdet blir feil (åpent i stedet for halvåpent/lukket).
3. **Feil håndtering av doble/komplekse røtter i karakteristisk ligning:** glemt xe^{rx}-leddet ved dobbeltrot; feil oversettelse av a±bi til e^{ax}(cos/sin).
4. **Resonans oversett i partikulærløsning:** ansats Ce^{cx} når c er rot i karakteristisk ligning (må gange med x).
5. **Indeksskift-slurv i potensrekkeløsning:** summene ikke justert til felles xⁿ før koeffisientsammenligning; konstantledd (n = 0,1) glemt når de laveste potensene splittes ut.
6. **Klassifisering forveksler betinget og absolutt:** å kalle en alternerende, ikke-absolutt konvergent rekke «absolutt konvergent», eller å bruke feil test.
7. **Sann/usann-feil på topologi:** tror vilkårlig union av kompakte er kompakt (falskt, f.eks. ∪[n,n+1]); tror ℚ er lukket; tror Cauchyfølge av irrasjonale konvergerer mot irrasjonal; tror f⁻¹(begrenset) er begrenset.
8. **Newton uten konvergensbegrunnelse:** iterasjonene regnes, men når beviset kreves, mangler monoton+begrenset-argumentet eller kontinuitetssteget i grenseovergangen.
9. **de Moivre-slurv:** feil kvadrant for argumentet; glemt å ta med alle n røtter (k = 0,…,n−1); vinkel ikke redusert.
10. **Numerikk:** avrundingsfeil pga. inkonsekvent desimalbruk; forveksling av Euler og forbedret Euler (midpunkts-korreksjonen).
11. **Manglende navngivning av test/teorem** — trekker på begrunnelseskravet selv når svaret er riktig.

---

## 6. Teorem- og notasjonsapparat

### Må beherskes aktivt (anvende, navngi, delvis bevise)

**Følger, rekker og kompletthet:**
- ε–N-definisjonen av grense og av **Cauchyfølge**; at ℝ er komplett (Cauchy ⇔ konvergent); **monoton + begrenset ⇒ konvergent**.
- **Supremum/infimum** og kompletthetsaksiomet (sup av {x∈ℚ : x²<2} = √2 osv.).
- **Konvergenstester:** forholdstest, rottest, sammenligningstest, grensesammenligning, test for alternerende rekker, integraltest; **absolutt ⇒ vanlig konvergens**; betinget vs. absolutt; p-rekker.
- **Delvis summasjon (Abel)** og **Abels teorem** (grenseverdi av potensrekke i endepunkt).
- Teleskopsummer.

**Grunnleggende topologi i euklidske rom:**
- åpen/lukket mengde, **kompakt (Heine–Borel: lukket + begrenset)**, tellbar/ikke-tellbar, tetthet av ℚ; at kontinuerlige funksjoner bevarer kompakthet og at urbildet av lukket/åpen mengde er lukket/åpen; åpne overdekninger.

**Kontinuitet og eksistens:**
- **Skjæringssetningen** (eksistens av nullpunkt/fikspunkt), **middelverdi-/sekantsetningen**, strengt monotoni ⇒ entydighet; fikspunkt for f:[0,1]→[0,1].

**Funksjonsfølger og -rekker:**
- Punktvis vs. **uniform konvergens** (sup-metrikken); at uniform grense av kontinuerlige er kontinuerlig; **Weierstrass' M-test**; **Weierstrass' approksimasjonsteorem** (polynomapproksimasjon — pensum, dekk teoretisk).

**Potensrekker og Taylor:**
- Konvergensradius (Cauchy–Hadamard/forholdstest) og **endepunktanalyse**; ledd-for-ledd derivasjon/integrasjon; **Maclaurin-/Taylorrekker** for e^x, sin, cos, 1/(1−x), ln(1+x), arctan; potensrekkeløsning av ODE via rekurrens.

**Komplekse tall:**
- Polarform re^{iθ}, **de Moivre**, n-te røtter (jevnt fordelt på sirkel), Eulers formel, **algebraens fundamentalteorem** (n røtter for grad-n-polynom — grunnlag for røtteoppgavene).

**Differensialligninger:**
- 1. ordens (separable, lineære), **Picard–Lindelöf** (eksistens/entydighet — pensum, dekk teoretisk); lineære ODE med konstante koeffisienter (karakteristisk polynom, homogen + partikulær ansats); potensrekkeløsninger; numerisk: **Newton, Euler, forbedret Euler / midpunktsmetode**.

### Må forstås, men lav/ingen arkivfrekvens
- **Algebraens fundamentalteorem** og **Picard–Lindelöf** — bærende teori uten egne oppgaver i arkivet (verifiser mot nye sett).
- **Weierstrass' approksimasjonsteorem** — pensum, men ingen ren oppgaveforekomst.
- **Kalkulus-epokens tema** (kjeglesnitt, parametriske kurver, Simpson/trapes) — utgått av 2023-formen; behandles kort.

### Notasjonskonvensjoner boken bør speile
- fₙ → f (punktvis) vs. uniform via d(fₙ,f) = sup_x|fₙ(x)−f(x)|.
- Rekurrens skrevet som aₙ₊₂ = (uttrykk i aₙ, aₙ₊₁); indeksskift eksplisitt.
- Polarform re^{iθ}; røtter r^{1/n}e^{i(θ+2πk)/n}, k = 0,…,n−1.
- Formelark-tenkning: Maclaurinrekker, Newton/Euler-formler og Eulers formel *oppgis* — treningen ligger i anvendelsen.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer eksamen, 85–100 % frekvens)
1. **Lineære ODE med konstante koeffisienter** (homogen via karakteristisk polynom med enkle/doble/komplekse røtter + partikulær ansats + initialbetingelser) — 100 %.
2. **Potensrekkeløsning av ODE** (indeksskift → rekurrens → mønster → lukket form, gjerne elementærfunksjon) — 92 %.
3. **Potensrekker: bygg fra Maclaurin, finn konvergensradius OG endepunkter** — 92 %.
4. **Uniform konvergens av funksjonsfølge** (punktvis grense → sup|fₙ−f| via toppunkt → konkluder) — 92 %, emnets tydeligste karakterskiller.
5. **Rekkekonvergens: vis + klassifiser** (navngitt test, betinget vs. absolutt, alternerende) — 92 %.
6. **Komplekse røtter av z^n = w** (polarform, de Moivre, alle n røtter, substitusjonstriks) — 85 %.

### Nivå 2 — må kunne (bredde og karakterheving)
7. **Grunnleggende topologi i ℝ** (åpen/lukket/kompakt/tellbar; Heine–Borel; urbilder; overdekninger) — sann/usann-oppgaven, 2/2 i gjeldende epoke og stigende.
8. **Cauchyfølger og kompletthet** (ε–N-bevis, nøstede intervaller, sup/inf) — fast i gjeldende epoke.
9. **Newtons metode med konvergensbevis** (iterasjon + monoton/begrenset-argument + eksistens/entydighet via skjæring/monotoni) — 62 %.
10. **Numerisk ODE (Euler / forbedret Euler)** med foreskrevet presisjon — fast i gjeldende epoke.
11. **Eksistens-/entydighetsbevis** (skjæringssetning, MVT/sekantsetning) — 46 %, ofte kjedet til Newton.
12. **Weierstrass' M-test** for kontinuitet av rekkesum — pensum + 2021/22-forekomst.

### Nivå 3 — bør dekkes (lav arkivfrekvens, men pensum/differensiering)
13. **Delvis summasjon (Abel) og Abels teorem** — eksplisitt pensum; 2/13-forekomst.
14. **Algebraens fundamentalteorem** — teoretisk grunnlag (implisitt i alle røtteoppgaver), men ingen egen oppgave; dekk som teori.
15. **Picard–Lindelöf** — eksistens/entydighet for ODE; pensum uten arkivforekomst; dekk teoretisk, merk «ikke arkivbelagt».
16. **Weierstrass' approksimasjonsteorem** — pensum, dekk teoretisk.
17. **Kalkulus-epokens tema** (kjeglesnitt, parametriske kurver/buelengde, Simpson/trapes) — utgått av 2023-formen; behandles kort/appendiks; **gjeninnfør trening kun hvis nye sett viser at de er tilbake (verifiser).**

**Prognose for neste eksamen** (basert på 2023-malen): ~7 likt vektede oppgaver over 4 timer. (1) 10 sann/usann-utsagn om topologi/følger/kontinuitet; (2) rekker — vis konvergens for 1–2 summer + klassifiser 3 rekker (divergent/betinget/absolutt); (3) komplekse røtter av z^n = w; (4) uniform konvergens av en funksjonsfølge på [0,1]; (5) finn potensrekke + konvergensradius/-område for 3 funksjoner; (6) Euler/forbedret Euler for et 1. ordens initialverdiproblem (4 desimaler); (7) lineær ODE med initialbetingelser + potensrekkeløsning av en annen ODE. Newtons metode dukker opp i ~annethvert sett. Formelark med Maclaurinrekker, numeriske formler og Eulers formel medfølger.

**Bekreftelse fra 2024-settet:** arkivet inneholder også løsningsforslaget for **vår 2024** (`ntnueksamen_bokmal_lf.pdf`, datert 22. mai 2024, **kode D**, 7 oppgaver som teller likt). Dette settet **bekrefter den nye analyseformen som varig**: det åpner med Cauchy-følge-bevis (vis at `{(n²−1)/n²}` er Cauchy; vis at `|xₙ₊₁−xₙ| ≤ C|xₙ−xₙ₋₁|`, `C<1`, gir Cauchy), etterfulgt av **sammenheng/topologi** (kontinuerlig `f: ℝ→ℤ` er konstant; `f([a,b])` er et intervall via Bolzano), komplekse røtter (`z³ = 8+8i`), potensrekke-konvergensområde og konstant-koeffisient ODE. Kjeglesnitt, parametriske kurver og numerisk integrasjon er igjen fraværende. Den nye formen (2023–2024) er altså to årganger sterk og bør være bokas primære kalibreringsmål.

**Usikkerhetsmoment:** den nye formen bygger nå på to årganger (2023–2024). Emnebeskrivelsen (verifisert aktiv, undervises vår 2027) samsvarer godt med denne, men fordelingen mellom topologi, Weierstrass-approksimasjon, delvis summasjon og Picard–Lindelöf kan justere seg. **Verifiser mot første tilgjengelige sett fra 2025 og senere før boken kalibreres endelig.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/ma1102/` (73 PDF-er, 2005–2023).

**Løsningsforslag/eksamenssett lest grundig (13 distinkte sett, tekstlag ekstrahert med pdftotext, håndskrevne/skannede med OCR — tesseract nor+eng):**
- `ma1102-eksamen-v16-lf.pdf` (vår 2016), `lf_kont2016.pdf` (nært tilknyttet øvingssett — se merknad)
- `solutions_v17.pdf` (vår 2017), `lf_ma1102_kont_2017.pdf` (kont 2017, OCR)
- `ma1102_nb_2018_solutions.pdf` (vår 2018), `solutions_kont_2018.pdf` (kont 2018, OCR)
- `solutions_v19.pdf` (vår 2019)
- `lf_ma1102_var_2020_1_.pdf` (vår 2020, OCR)
- `lf_v2021_1_.pdf` (vår 2021)
- `lf_ma1102_2022.pdf` (vår 2022), `eksamen_ma1102_kont2022_lf.pdf` (kont 2022)
- `eksamen_v23_ma1102_78_.pdf` + `ntnueksamen_bokmal_inspera.pdf` (vår 2023 — løsning + oppgavesett), `lfkont2023.pdf` + `ntnueksamen_kont_bokmal.pdf` (kont august 2023 — løsning + oppgavesett, OCR)
- `ntnueksamen_bokmal_lf.pdf` (**vår 2024** — løsningsforslag, kode D, 7 oppgaver: Cauchy-følger, sammenheng/topologi, komplekse røtter, potensrekker, ODE — bekrefter 2023-formen)
- `solutions_kont_eksam.pdf` (kontinuasjon, OCR)

**Eksamensoppgaver/løsninger skumlest for temaregistrering og datering av pensumskiftet (2005–2015):** bl.a. `ma1102-eksamen-v15-lf.pdf`, `ma1102-20130807-losning.pdf`, `ma1102-20130529-losning.pdf`, `ma1102-20120530-losning.pdf`, `ma1102-20110521-losning.pdf`, `ma1102-eksamen-h08-losning.pdf`, `20090518-ma1102-lf.pdf`, `ma1102-20100521-fasit.pdf`, `ma1102-semester-2009v-fasit.pdf`, `lf_ma1102_august_2014.pdf`, `lf_ma1102_20140527_b.pdf`, m.fl.

**Emnebeskrivelse:** NTNUs emneside for MA1102 «Grunnkurs i analyse 2» (7,5 sp, aktiv vår 2025, skriftlig skoleeksamen A–F, forkunnskap MA1101), verifisert. Omskrevet sammendrag av pensumlisten er brukt gjennomgående.

**Merknader om kildene:**
- **Skannede/håndskrevne løsninger:** flere nyere kont-løsninger (kont 2017, kont 2018, vår 2020, kont 2023, `solutions_kont_eksam`) og eldre sett foreligger kun som skann/håndskrift og ble OCR-et. OCR-kvaliteten er delvis lav; tema er sikkert identifisert, men detaljer i disse er lest med forbehold. Rene skann uten leselig OCR-utbytte (bl.a. `lf_kont.pdf`, `ma1102-eksamen-med-losning-v05-h05-v06.pdf`, flere `ma1102eks_*06/07.pdf`) er *ikke* lest i detalj og bidrar bare til temaregistrering.
- **Filnavn-uklarhet:** `lf_kont2016.pdf` inneholder faktisk et øvingsløsningssett («Øving 13», datert 2021) som tematisk speiler eksamenspensum tett (kjeglesnitt, buelengde, rekketester, ODE, Euler, arctan-potensrekke, Abels teorem, feilestimat) — brukt som pensumbelegg, ikke som eget eksamenssett. `ntnueksamen_bokmal_inspera.pdf` er oppgavesettet for vår 2023; `ntnueksamen_kont_bokmal.pdf` er oppgavesettet for kont august 2023.
- **Pensumskiftet:** grensen mellom «kalkulus-epoken» (kjeglesnitt/parametriske kurver/numerisk integrasjon) og «ren analyse-epoken» (topologi/Cauchy/kompakthet) faller mellom kont 2022 og vår 2023 i arkivet. Nøyaktig innføringssemester er utledet av arkivet, ikke bekreftet mot emnehistorikk **(verifiser)**.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og eksempler er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller løsningsformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremer er standard fagnotasjon.
