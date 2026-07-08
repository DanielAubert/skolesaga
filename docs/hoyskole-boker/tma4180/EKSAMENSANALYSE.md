# Eksamensanalyse: TMA4180 Optimering 1 / Optimization 1 (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **~34 filer** fra arkivet (2004–kont 2025). Emnet undervises på **engelsk**, og alle oppgaver kan besvares på engelsk eller norsk. Løsningsforslagene for **hele Grasmair-æraen (V2023, V2024, Kont2024, V2025, Kont2025)** er lest ord for ord, sammen med **V2018 og V2019** (fulle fasiter), **Sommer2015, Sommer2016, Sommer2017 og 2020** (løsningsforslag), og et tematisk samlesett (`completeexamsolutions`). De eldre settene (2004–2014, tidligere foreleser-æra) er gjennomgått oppgave-for-oppgave via tekstutvinning. **Alt innhold er skrevet om med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, metodenavn og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4180 har en **samlet vurdering: skriftlig skoleeksamen (70 %, 4 timer) + et numerikk-prosjekt / mappe (30 %)**. Den skriftlige delen i **Grasmair-æraen (2023–2025)** er ekstremt **stabil og forutsigbar** og hviler på fem søyler: **(1) ubeskranket optimering** (finn lokale/globale minima via gradient=0 og Hessian, avgjør konveksitet, avgjør koersivitet, konvergens for gradient/Newton), **(2) ett skritt av en linjesøkmetode for hånd** (gradientmetode eller Newton med backtracking Armijo — nesten alltid som deloppgave 1c/1d), **(3) beskranket optimering** (LICQ, tangentkjegle vs. kjegle av lineariserte tillatte retninger, KKT-punkter, andreordensbetingelser via den kritiske kjeglen — dette er den store, tunge oppgaven på ~30 poeng), **(4) dualitet** (sett opp Lagrange-dualen, Slater/sterk dualitet, Legendre–Fenchel-konjugat), og **(5) et kort teoribevis** (Armijo eksisterer for en nedstigningsretning, konvexitet av en infimal-konvolusjon/marginalfunksjon, CG-ekvivalens ved eksakt linjesøk, Pareto-optimalitet). Eksamen har **ingen flervalgsdel**; alle svar skal begrunnes. Læreboken er **Nocedal & Wright, *Numerical Optimization***. Det deles ut et **formelark** (bl.a. Legendre–Fenchel-konjugater av standardfunksjoner). Den viktigste utviklingen: den gamle æraen (2004–2014) testet **variasjonsregning (Euler–Lagrange), simpleksmetoden og trust-region** — disse er **borte** fra 2018-og-utover, som i stedet vektlegger konveksitetsteori, tangentkjegler og dualitet/Fenchel. Prosjektet (30 %) er et **implementeringsprosjekt** i numerisk optimering (fasitene refererer eksplisitt til «the project» med **Barzilai–Borwein-skrittlengder** og **gradient-projeksjon**).

---

## 1. Eksamensform og utvikling

**Samlet vurdering.** Karakteren settes som en kombinasjon av **skriftlig skoleeksamen (70 %, 4 timer, 09:00–13:00)** og et **prosjekt/mappe (30 %)**. Bokstavkarakter A–F. Den skriftlige delen besvares på **engelsk eller norsk** (studentens valg), og fast instruks er at **alle svar skal begrunnes med nok detaljer til at det klart framgår hvilke metoder/resultater som er brukt.** Det er **ingen flervalgsdel**.

**Prosjekt-/mappedelen (30 %).** Arkivet inneholder ikke selve prosjektoppgaven, men de skriftlige fasitene refererer den direkte: i Kont2025 P4 skriver fasiten at «Barzilai–Borwein-skrittlengder (som i prosjektet)» kan foretrekkes framfor Armijo-backtracking, og at oppgavens store dimensjon (`d ≈ 10⁴`) taler for en **gradient-projeksjonsmetode** framfor aktiv-sett. Dette avslører at prosjektet er et **numerisk implementeringsprosjekt** (typisk i Python/Julia/MATLAB) der studentene koder og analyserer nedstigningsmetoder — sannsynligvis gradientmetode med linjesøk, gradient-projeksjon for enkle beskrankninger, og Barzilai–Borwein-skrittlengder. Boken bør derfor ha et **eget praktisk/implementerings-spor** (algoritmenes pseudokode, skrittlengdestrategier, prosjekterings-/BB-oppdateringer, stoppekriterier), ikke bare teori — dette bærer 30 % av karakteren.

### Hjelpemidler (utvikling)

| Periode | Hjelpemidler på skriftlig del |
|---|---|
| 2004–2014 (tidligere æra) | Lærebok + Rottmann + kalkulator (varierer); tung på algoritmegjennomføring |
| 2018 | **Nocedal & Wright (m/errata)** + Rottmann + **utdelte handouts** («Minimisers…», «Basic Properties of Convex Functions», «Convergence of descent methods with Armijo line search», «Optimality conditions over convex sets», «Representation theorem for polyhedral sets») + kalkulator |
| 2019 | **Rottmann + godkjent kalkulator** (Nocedal & Wright ute som hjelpemiddel) |
| 2023–2025 (Grasmair) | **Godkjent enkel kalkulator + vedlagt formelark** (bl.a. Legendre–Fenchel-konjugater av standardfunksjoner som `exp`, `t log t`) |

### Format på den skriftlige delen (Grasmair-æraen, 2023–2025)
Svært stabil mal, **6–7 oppgaver, ~100 poeng, 4 timer**:
- **P1 — Ubeskranket optimering (~25 p):** a) finn alle lokale/globale minima (gradient=0, Hessian, koersivitet); b) er `f` konveks?; c/d) **ett skritt** av gradientmetoden eller Newtons metode med **backtracking Armijo-linjesøk** (oppgitte `α̂`, `c₁`, `ρ`), eller: for hvilke skrittlengder holder de sterke Wolfe-betingelsene.
- **P2 — Beskranket optimering, den store oppgaven (~30 p):** a) avgjør i hvilke punkter **LICQ** holder; b) beregn **tangentkjeglen `T_Ω`** og **kjeglen av lineariserte tillatte retninger `F`** i gitte punkter (inkl. et punkt der LICQ svikter → må vise `T_Ω ⊂ F` og argumentere direkte); c) finn **alle KKT-punkter og alle lokale/globale minima** ved hjelp av andreordens nødvendige/tilstrekkelige betingelser (kritisk kjegle).
- **P3–P7 — teori/bevis og dualitet (~10 p hver):** Lagrange-dual + Slater/sterk dualitet; Legendre–Fenchel-konjugat og infimal-konvolusjon; konveksitet av en marginalfunksjon `g(y)=inf{f(x):Ax=y}`; Pareto-/flerkriterie-optimalitet; korte bevis (Armijo-eksistens for nedstigningsretning; gradient/konvergens `∇f(x_k)→0`; CG-varianter gir samme skritt ved eksakt linjesøk).

### Æraskifte (viktigste strukturfunn)
Emnet har hatt et **markant pensumskifte**:
- **Gammel æra (2004–2014):** inneholdt **variasjonsregning (Euler–Lagrange-likninger, frie/faste rand, integralbeskrankninger)** i 5 av 9 lesbare sett, **simpleksmetoden** for LP (2013), **trust-region-delproblemer** med eksplisitt `λ`-justering (2008, 2010), og LP med grafisk løsning + standardform. Tung på **algoritmegjennomføring**.
- **Ny æra (2018–2025):** **variasjonsregning, simpleks og trust-region er borte.** I stedet: konveksitets-/koersivitetsteori, **tangentkjegle vs. lineariserte retninger**, **kritisk kjegle** i andreordensbetingelser, **Lagrange-dualitet + Slater**, **Legendre–Fenchel-konjugat**, **Pareto-optimalitet**, og «ett skritt for hånd» av gradient/Newton med Armijo. Den numeriske gjennomføringen er flyttet til **prosjektet (30 %)**.

En bok rettet mot dagens TMA4180 må prioritere den nye æraen tungt, men bør ha **beredskapsdekning** av trust-region, kvasi-Newton/BFGS, konjugerte gradienter og LP-simpleks (de står i Nocedal & Wright og kan dukke opp).

---

## 2. Temafrekvens-tabell

Celleverdi = antall lesbare sett i perioden der temaet forekommer som minst én (del)oppgave. Periode A = **gammel æra 2004–2014** (9 lesbare sett), Periode B = **overgang 2015–2020** (7 sett: S2015, S2016, S2017, V2018, V2019, 2020, + samlesett), Periode C = **Grasmair 2023–2025** (5 sett: V2023, V2024, Kont2024, V2025, Kont2025). Total lesbar base = **21 sett** (se skann-hull i del 8).

| Tema | A (9) | B (7) | C (5) | **Gjenganger-score** |
|---|---|---|---|---|
| **Ubeskranket optimalitet** (∇f=0, Hessian, lokal/global) | 9 | 7 | 5 | **21/21 = 100 %** |
| **Konveksitet** (Hessian PSD, konvekse mengder/funksjoner) | 9 | 7 | 5 | **21/21 = 100 %** |
| **KKT-betingelser** (aktiv-sett-gjennomgang) | 9 | 7 | 5 | **21/21 = 100 %** |
| **LICQ / kvalifikasjonsbetingelser** | 7 | 7 | 5 | **19/21 = 90 %** |
| **Lagrange-multiplikatorer** | 9 | 6 | 4 | **19/21 = 90 %** |
| **Andreordensbetingelser** (kritisk kjegle, `H_L` på kjeglen) | 5 | 7 | 5 | **17/21 = 81 %** |
| **Tangentkjegle vs. lineariserte tillatte retninger `F`** | 4 | 6 | 5 | **15/21 = 71 %** |
| **Linjesøk** (Armijo / Wolfe, ett skritt for hånd) | 5 | 6 | 5 | **16/21 = 76 %** |
| **Lagrange-dualitet** (dual, svak/sterk, Slater) | 3 | 6 | 5 | **14/21 = 67 %** |
| **Koersivitet / eksistens av minimum** (Weierstrass) | 2 | 5 | 5 | **12/21 = 57 %** |
| **Gradient-/nedstigningsmetode + konvergens** (`∇f→0`) | 4 | 4 | 4 | **12/21 = 57 %** |
| **Newtons metode** (skritt + konvergensrate) | 1 | 3 | 3 | **7/21 = 33 %** |
| **Lineær programmering** (dual, grafisk, kompl.slakk) | 6 | 4 | 0 | **10/21 = 48 %** (fallende) |
| **Legendre–Fenchel-konjugat / støttefunksjon** | 0 | 2 | 4 | **6/21 = 29 %** (kun ny æra) |
| **Pareto / flerkriterie-optimering** | 1 | 1 | 4 | **6/21 = 29 %** (økende) |
| **Straffemetoder / utvidet Lagrange** (penalty, augm.) | 1 | 4 | 0 | **5/21 = 24 %** |
| **Aktiv-sett / kvadratisk programmering** | 5 | 1 | 0 | **6/21 = 29 %** (fallende) |
| **Gradient-projeksjon / projeksjon på konveks mengde** | 0 | 2 | 1 | **3/21 = 14 %** (+ prosjektet) |
| **Konjugerte gradienter** (lineær + ikke-lineær, FR/PR/HS) | 2 | 0 | 3 | **5/21 = 24 %** |
| **Steepest descent + konvergensrate (`κ`)** | 6 | 3 | 0 | **9/21 = 43 %** (fallende) |
| **Trust-region** (delproblem, radius-justering) | 2 | 1 | 0 | **3/21 = 14 %** (kun gammel/samle) |
| **Kvasi-Newton / BFGS** | 0 | 1 | 0 | **1/21 = 5 %** (nesten aldri direkte) |
| **Simpleksmetoden for LP** | 1 | 0 | 0 | **1/21 = 5 %** (kun 2013) |
| **Variasjonsregning (Euler–Lagrange)** | 5 | 0 | 0 | **5/21 = 24 %** (utdødd) |
| **Stor-skala / strukturert Hessian** (tridiagonal, Thomas) | 0 | 2 | 1 | **3/21 = 14 %** |

**Viktigste funn:**
1. **Fire tema er praktisk talt garantert hvert år:** ubeskranket optimalitet, konveksitet, KKT og LICQ. En bok som behersker disse pluss tangentkjegle/kritisk kjegle dekker mesteparten av den skriftlige delen i dagens æra.
2. **Den store beskranket-oppgaven (P2) er signaturen** i Grasmair-æraen: LICQ + `T_Ω`/`F` + KKT + andreordensbetingelser i én sammenhengende oppgave på ~30 poeng. Den er 5/5 i ny æra.
3. **Dualitet og Legendre–Fenchel er stigende** og nå faste i ny æra (dualitet 5/5, Fenchel 4/5), mens de nesten var fraværende i gammel æra.
4. **Pareto/flerkriterie er nytt og økende** (4/5 i ny æra), ofte som en kort selvstendig oppgave.
5. **Utdødde/fallende tema:** variasjonsregning (0 etter 2014), simpleks, trust-region og eksplisitt steepest-descent-konvergens (`κ`-analyse) er borte fra ny æra. LP og aktiv-sett/QP er sterkt fallende. Hold som beredskap.
6. **Numerikken er flyttet til prosjektet:** gradient-projeksjon og Barzilai–Borwein testes primært i mappedelen (30 %), ikke på den skriftlige delen.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med fasitens foretrukne metode (verifisert mot de offisielle løsningsforslagene der de finnes).

### A. Ubeskranket optimering: finn alle lokale/globale minima (P1a)
- **Krav:** Sett `∇f(x)=0` og løs likningssystemet (ofte ved å eliminere én variabel). For hvert kritisk punkt: beregn **Hessian** og klassifiser (positiv definit → strengt lokalt min; indefinit → sadelpunkt; halvdefinit → uavklart). For **globalt** min: enten vis **koersivitet** (skriv `f` som sum av kvadrater/koersive ledd, f.eks. `f=(x²−y)²+(y+2)²+2x²−7`) → globalt min eksisterer og er det eneste kritiske punktet; eller vis at `f` er **ubegrenset nedad** (finn en kurve `f(x,φ(x))→−∞`) → intet globalt min.
- **Frekvens:** 100 %; alltid P1a.
- **Omskrevet eksempel:** «La `f(x,y)=x³+7x²−2xy+y²+3x+6y`. Finn alle lokale og globale minima.» (V2024 — to kritiske punkt, ett lokalt min, ubegrenset nedad → intet globalt min.)

### B. Avgjør konveksitet (P1b)
- **Krav:** `f` er konveks ⟺ Hessian er positiv **semi**definit i **alle** punkter. Vis enten at `H_f` alltid er PSD (ofte via alltid-positive diagonalledd + alltid-positiv determinant), eller **motbevis** ved å oppgi ett punkt der `H_f` er indefinit (raskest: vis at et diagonalledd blir negativt). Del a) gir ofte svaret gratis.
- **Frekvens:** 100 %; alltid P1b.

### C. Ett skritt av en linjesøkmetode for hånd (P1c/d)
- **Krav:** For **gradientmetoden**: søkeretning `p=−∇f(x₀)`. For **Newton**: `p=−H_f(x₀)⁻¹∇f(x₀)` (regn 2×2-inversen eksplisitt). **Backtracking Armijo:** test `f(x₀+αp) ≤ f(x₀)+c₁α⟨∇f(x₀),p⟩`; hvis den feiler, sett `α←ρα` og test på nytt til den holder. Fasiten regner konkrete tallverdier og aksepterer/forkaster skritt for skritt. **Variant:** for hvilke `α>0` holder de **sterke Wolfe-betingelsene** (`c₁`-tilstrekkelig nedgang **og** `c₂`-krumning `|⟨∇f(x₀+αp),p⟩|≤c₂|⟨∇f(x₀),p⟩|`) — gir et intervall for `α` (V2023 P1c: `9/20 ≤ α ≤ 1/10`... regn nøye).
- **Frekvens:** 76 %; fast i ny æra som P1c/d.
- **Omskrevet eksempel:** «Utfør ett skritt av gradientmetoden med backtracking Armijo fra `(0,0)` med `α̂=1`, `c₁=0.1`, `ρ=0.25`.» (V2025 — Armijo feiler for `α=1`, godtas for `α=1/4`.)

### D. Konvergens for gradient/Newton (P1c, kort resonnement)
- **Krav:** Argumenter for global konvergens: er `f` **koersiv** (begrensede nivåmengder) og **glatt**? Da gir Armijo-linjesøk at `∇f(x_k)→0` og at hvert akkumulasjonspunkt er kritisk; hvis `f` har **ett** kritisk punkt som er globalt min, konvergerer hele følgen dit. For **Newton**: kvadratisk konvergens forutsetter at Hessian er positiv definit (nedstigningsretning) og ikke-singulær i grensen; ellers (singulær Hessian) bare **lineær** konvergens (V2023 P1d), eller metoden kan bryte sammen hvis `f` ikke er konveks.
- **Frekvens:** 57 %.

### E. Beskranket optimering: LICQ i alle punkter (P2a)
- **Krav:** Skriv beskrankningene som `c_i(x)≥0`. LICQ i et punkt = gradientene `∇c_i` til de **aktive** beskrankningene er lineært uavhengige. Strategi: (i) hvis ingen/kun én beskrankning aktiv, sjekk om `∇c_i≠0`; (ii) sjekk punkter der **flere** beskrankninger er aktive samtidig, én kombinasjon om gangen. LICQ svikter typisk der `∇c_i=0` (f.eks. en beskrankning `(x−y)²·(…)` med null-gradient) eller der tre beskrankninger er aktive i R².
- **Frekvens:** 90 %; fast P2a.

### F. Tangentkjegle `T_Ω` vs. kjegle av lineariserte tillatte retninger `F` (P2b)
- **Krav:** `F(x) = {p : ⟨∇c_i(x),p⟩ ≥ 0 for alle aktive ulikhets-i, = 0 for likhets-i}`. Der **LICQ holder**: `T_Ω = F` (bare skriv opp `F`). Der **LICQ svikter**: man har bare `T_Ω ⊆ F`; man må da bestemme `T_Ω` **direkte** ved å studere `Ω` lokalt (f.eks. dele opp i to deler `Ω=Ω₁∪Ω₂` og ta unionen av tangentkjeglene, eller finne konkrete følger `z_k→x` som gir tillatte retninger). Fasiten viser begge inklusjonene.
- **Frekvens:** 71 % (fast i ny æra).
- **Omskrevet eksempel:** «Bestem `T_Ω` og `F` i `(0,0)` for `Ω` gitt ved `(y−x²)(x−y)²≥0` og `2−x²−y²≥0`.» (Kont2025 — LICQ svikter, `Ω` er lokalt en parabel forent med en linje; `T_Ω(0,0)={q≥0}∪{p=q}`.)

### G. KKT-punkter + andreordensbetingelser + globalitet (P2c)
- **Krav (tungt, ~15 p):** Sett opp KKT-systemet (stasjonaritet, primal/dual tillatthet, komplementaritet). Gå systematisk gjennom **alle aktiv-sett** og løs for `(x,λ)` i hver; forkast punkt med negative multiplikatorer eller uoppfylte beskrankninger. For hvert KKT-punkt: bruk andreordensbetingelser via **Hessian av Lagrangefunksjonen `H_L`** restringert til den **kritiske kjeglen `C`** (`⟨p,H_L p⟩>0` for alle `p∈C\{0}` → strengt lokalt min; `<0` for noen `p` → ikke min; merk at andreordens *tilstrekkelig* betingelse ikke krever LICQ). Til slutt: **globalitet** ved å sammenlikne funksjonsverdier, eller vis at `f` er ubegrenset nedad på den tillatte mengden.
- **Frekvens:** ~90 % (kombinert KKT+2.orden).
- **Omskrevet eksempel:** «Finn alle KKT-punkter og lokale minima for `min 2x²−x²y−3y³+4y²+2y` under `x²+(y−1)²≥1`, `y≥0`.» (V2025 — tre KKT-punkt; kun `(0,0)` er lokalt min; ubegrenset nedad → intet globalt.)

### H. Lagrange-dualitet (dual, svak/sterk, Slater)
- **Krav:** Skriv Lagrangefunksjonen `L(x,λ)=f(x)−⟨λ, c(x)⟩` (tegn etter `≥`/`≤`-konvensjon), dann **dualmålet** `q(λ)=inf_x L(x,λ)`, løs det indre minimet (for kvadratisk `f`: sett `∇_x L=0`; for separable/eksp-ledd: gjenkjenn **Legendre–Fenchel-konjugatet** `f*` fra formelarket). Sett opp **dualproblemet** `max_λ q(λ) s.t. λ≥0`. Bruk **Slater** (ikke-tom indre tillatt mengde, lineære beskrankninger) → **sterk dualitet** → dual har løsning. For `‖x‖₁`/`‖x‖₂²`-mål: standardresultater (`‖A^Tλ‖_∞≤1` for 1-norm; kvadratisk dual for 2-norm).
- **Frekvens:** 67 % (5/5 i ny æra).
- **Omskrevet eksempel:** «Beregn Lagrange-dualen av `min Σexp(x_i) s.t. Ax≤yb`, vis at dualen alltid har løsning, gi et eksempel der primalen mangler løsning.» (V2025 — bruk `exp*(s)=s log s − s`; Slater gir sterk dualitet.)

### I. Legendre–Fenchel-konjugat og infimal-konvolusjon
- **Krav:** Konjugatet `f*(y)=sup_x{⟨x,y⟩−f(x)}`. Nøkkeltriks: (i) `f**=f` for konvekse `f`; (ii) konjugatet av en **infimal-konvolusjon** `h(x)=inf_z{f(x−z)+g(z)}` er **summen** `h*=f*+g*`; (iii) via `h*=2f*` for `f=g` fås `h(x)=2f(x/2)`. Vis også at infimal-konvolusjonen er **konveks** (direkte via infimum-argument eller via at `h*` er konveks). Konjugater av standardfunksjoner (`exp`, `t log t`, normer) ligger på formelarket.
- **Frekvens:** 29 % (4/5 i ny æra).

### J. Konveksitet av en marginalfunksjon
- **Krav:** Vis at `g(y)=inf{f(x):Ax=y}` er konveks når `f` er konveks. Tre bevismetoder honoreres: (1) via dualitet — `g` er supremum av affine funksjoner `y↦⟨λ,y⟩−f*(A^Tλ)`, altså konveks; (2) direkte ε-argument med konvekse kombinasjoner av nesten-optimale `x`; (3) omskrivning som infimum uten kobling mellom variable.
- **Frekvens:** ~2 sett; teoritung.

### K. Pareto- / flerkriterie-optimering
- **Krav:** Et punkt er Pareto-optimalt hvis ingen annen tillatt løsning forbedrer ett mål uten å forverre et annet. For **strengt konvekse** mål: Pareto-mengden = alle minima av de **vektede sum-problemene** `min λf₁+(1−λ)f₂`, `0≤λ≤1` (løs ved `∇=0`). Vis også invarians: `(f,g)` og `(φ∘f, φ∘g)` har samme Pareto-løsninger for strengt voksende `φ`. Direkte monotoni-argument når målene er 1-dimensjonale.
- **Frekvens:** 29 % (4/5 i ny æra).

### L. Korte teoribevis (nedstigning / konvergens / CG)
- **Krav:** Typiske bevis: (i) **Armijo eksisterer** — for en nedstigningsretning `p` (⟨∇f,p⟩<0) finnes `α̂>0` slik at Armijo holder for alle `0<α<α̂` (motsigelse eller Taylor + `o(α)`); (ii) **`∇f(x_k)→0`** for gradientmetode med Armijo når `f` er begrenset nedad og skrittlengder `α_k≥ε>0` (teleskopsum av funksjonsnedgang); (iii) **CG-varianter gir samme skritt** ved eksakt linjesøk (Polak–Ribière = Hestenes–Stiefel; Fletcher–Reeves gir nedstigningsretning) via `⟨∇f(x_{k+1}),p_k⟩=0`.
- **Frekvens:** minst ett bevis per sett i ny æra.

### M. Foreslå og begrunn en numerisk metode (stor dimensjon)
- **Krav:** Gitt et konkret problem (ofte `d≈10⁴`), **velg og begrunn** en metode. Nøkler: strukturert Hessian (tridiagonal) → **Newton** med Thomas-algoritme (kvadratisk konvergens, billige skritt); enkle boksbeskrankninger `0≤x≤b` i stor dimensjon → **gradient-projeksjon** (aktiv-sett er upraktisk), evt. **Barzilai–Borwein-skrittlengder (som i prosjektet)**; strengt konveks glatt `f` → Newton med billig linjesøk.
- **Frekvens:** ~3 sett; direkte bro til prosjektet.

### N. (Beredskap) Trust-region, LP-simpleks, variasjonsregning, straffemetoder
- **Trust-region (gammel æra):** delproblem `min m(p)=f+g^Tp+½p^THp, ‖p‖≤Δ`; KKT for delproblemet gir `(H+λI)p=−g`, `λ≥0`; radius `Δ` justeres via forhold `ρ=` faktisk/predikert nedgang.
- **LP/simpleks (gammel æra):** standardform, basisløsninger, reduserte kostnader, hjørne-til-hjørne; grafisk primal/dual + komplementær slakkhet.
- **Variasjonsregning (kun 2004–2014):** Euler–Lagrange-likning for et funksjonal `∫F(x,y,y')dx`, frie/faste rand, integralbeskrankninger via Lagrange.
- **Straffemetoder (overgangsæra):** kvadratisk straff og **utvidet Lagrange** `L_A=f−⟨λ,Ax−b⟩+(μ/2)‖Ax−b‖²`; eksakt straff / soft-thresholding.
- **Frekvens:** lav i ny æra, men står i Nocedal & Wright — hold som beredskap.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Begrunn alle svar; vis nok detaljer** så det klart framgår hvilke metoder/resultater som er brukt. Bar fasit gir ikke full uttelling.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «LICQ», «KKT-betingelsene», «Slaters kvalifikasjonsbetingelse», «sterk dualitet», «andreordens tilstrekkelig betingelse», «kritisk kjegle», «Legendre–Fenchel-konjugat», «Armijo-betingelsen», «koersiv». Fasiten skriver dem ut.
3. **Systematisk aktiv-sett-gjennomgang i KKT:** fasiten går metodisk gjennom **alle** kombinasjoner av aktive beskrankninger og forkaster eksplisitt punkt med negative multiplikatorer / brutte beskrankninger. Å hoppe over et aktiv-sett trekker ned.
4. **Skille `T_Ω` fra `F`:** ved LICQ-svikt må studenten **ikke** anta `T_Ω=F`; fasiten viser inklusjonen `T_Ω⊆F` og bestemmer `T_Ω` direkte.
5. **Andreordensbetingelser krever den kritiske kjeglen:** det holder ikke å sjekke `H_L` på hele R^d; man må restringere til `C`. Merk at *tilstrekkelig* betingelse ikke krever LICQ (fasiten påpeker dette).
6. **Poengvekting er eksplisitt** (delpunkt-poeng oppgitt, sum ~100). Deloppgaver er ofte kjedet (del b bruker konklusjonen fra a — f.eks. «vi har allerede sett at `f` er konveks»).
7. **Flere metoder honoreres:** fasitene viser ofte 2–3 alternative bevis (marginalfunksjon-konveksitet via dualitet vs. direkte ε-argument; `∇f→0` via teleskopsum vs. lim sup). Alle premieres.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på mekanikken: regn `∇f` og `H_f`, klassifiser kritiske punkt, sett opp KKT-systemet, skriv opp `F` der LICQ holder, dann Lagrangefunksjonen.
- **Midtsjiktet** behersker i tillegg: koersivitets-/globalitetsargument, ett komplett Armijo-backtracking-skritt med tallregning, **hele** aktiv-sett-gjennomgangen, andreordensbetingelse på den kritiske kjeglen.
- **Toppsjiktet** kjennetegnes av: (i) korrekt behandling av **LICQ-svikt** med direkte bestemmelse av `T_Ω`; (ii) **Legendre–Fenchel-konjugat** brukt riktig i dualberegning; (iii) rene, korrekte **teoribevis** (Armijo-eksistens, `∇f→0`, CG-ekvivalens) med presis bruk av `o`-notasjon / eksakt-linjesøk-ortogonalitet; (iv) godt begrunnet **metodevalg** for stor-skala-problemer (kobling til prosjektets BB/gradient-projeksjon); (v) Pareto-argument via vektede sum-problem.

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Anta `T_Ω=F` når LICQ svikter.** Vanligste fallgruve i P2b — man må vise inklusjonen og bestemme `T_Ω` direkte.
2. **Ufullstendig aktiv-sett-gjennomgang i KKT.** Å glemme en kombinasjon av aktive beskrankninger, eller å ikke forkaste et punkt med `λ<0`.
3. **Andreordensbetingelse på feil mengde.** Å sjekke `H_L` på hele R^d i stedet for på den kritiske kjeglen `C` (kan feilaktig gi «min» der punktet ikke er min).
4. **Konveksitet fra ett punkt.** Å konkludere at `f` er konveks fordi `H_f` er PSD i ett punkt; konveksitet krever PSD **overalt** (og motbevis krever bare ett indefinit punkt).
5. **Glemt globalitetsanalyse.** Å stoppe ved lokale minima uten å avgjøre om det finnes globalt min (koersivitet vs. ubegrenset nedad).
6. **Feil tegn i Lagrangefunksjonen / dualen.** Fortegnsfeil på `λ` for `≥`- vs. `≤`-beskrankninger, som gir feil fortegnsbetingelse `λ≥0`.
7. **Armijo-regnefeil.** Å regne `⟨∇f,p⟩` feil, glemme kontraksjonen `α←ρα`, eller feiltolke nedstigning (positiv vs. negativ nedgang).
8. **Newton uten positiv definit Hessian.** Å bruke `−H⁻¹∇f` som nedstigningsretning uten å sjekke at `H` er positiv definit (ellers ikke nedstigning; forvente kvadratisk konvergens ved singulær Hessian).
9. **Koersivitet forvekslet med konveksitet.** To uavhengige egenskaper; koersivitet gir eksistens av min, konveksitet gir at kritisk punkt er globalt.
10. **Feil konjugat.** Å bruke feil `f*` fra formelarket, eller glemme domenerestriksjonen (`exp*(s)=s log s − s` kun for `s>0`; ellers `+∞`/`0`).
11. **Pareto uten strengt-konveks-forutsetning.** Å bruke vektet-sum-karakteriseringen når målene ikke er (strengt) konvekse.
12. **Tidsfelle.** P2 (beskranket, ~30 p) er tung med full aktiv-sett-gjennomgang; å bruke for lang tid der stjeler fra de korte, «billige» teoribevisene.

---

## 6. Teorem-, notasjons- og formelapparat

### Utdelt formelark (må kunne brukes, ikke pugges)
Fra Grasmair-æraen deles det ut et **formelark** med bl.a. **Legendre–Fenchel-konjugater** av standardfunksjoner (referert som «the attached formula sheet» i fasitene), f.eks.:
- `g(t)=exp(t)` ⟹ `g*(s) = s log s − s` for `s>0`, `=0` for `s=0`, `=+∞` for `s<0`.
- Konjugater av normer (`‖·‖₁ ↔ ‖·‖_∞`-bånd; kvadratisk `½‖·‖²` selvkonjugert).
- `f**=f` for konvekse, nedad halvkontinuerlige `f`.

I 2018 var i tillegg **læreboken Nocedal & Wright** og flere **handouts** (konvekse funksjoner, konvergens av nedstigningsmetoder med Armijo, optimalitet over konvekse mengder, representasjonsteorem for polyedriske mengder) tillatt.

### Må beherskes aktivt (kunne anvende og navngi)
- **Ubeskranket:** førsteordens `∇f=0`; andreordens (Hessian PSD/PD); konveksitet ⟺ Hessian PSD overalt; koersivitet ⟹ eksistens av min; strengt konveks + minimum ⟹ koersiv.
- **Linjesøk:** Armijo (tilstrekkelig nedgang), (sterke) Wolfe-betingelser, backtracking med `ρ`; nedstigningsretning `⟨∇f,p⟩<0`.
- **Metoder:** gradientmetode og global konvergens (`∇f(x_k)→0`); Newton `p=−H⁻¹∇f` + kvadratisk/lineær konvergensrate; (beredskap) trust-region, kvasi-Newton/BFGS, konjugerte gradienter (FR/PR/HS), gradient-projeksjon, Barzilai–Borwein.
- **Beskranket:** LICQ; tangentkjegle `T_Ω`; kjegle av lineariserte tillatte retninger `F`; KKT-betingelsene (stasjonaritet, tillatthet, `λ≥0`, komplementaritet); Lagrangefunksjon `L` og `H_L`; kritisk kjegle `C`; andreordens nødvendig/tilstrekkelig betingelse.
- **Dualitet & konvekse verktøy:** Lagrange-dual `q(λ)=inf_x L`; svak/sterk dualitet; **Slaters betingelse**; Legendre–Fenchel-konjugat og infimal-konvolusjon; støttefunksjon.
- **Videre:** Pareto-optimalitet og vektede sum-problem; straff/utvidet Lagrange (beredskap); LP-dualitet + komplementær slakkhet (beredskap).

### Notasjonskonvensjoner boken bør speile
`∇f`, `H_f` (Hessian); `⟨·,·⟩` indreprodukt; beskrankninger `c_i(x)≥0`; multiplikatorer `λ,μ,ν≥0`; Lagrange `L(x;λ)=f−⟨λ,c⟩`, `H_L`; tangentkjegle `T_Ω(x)`, lineariserte retninger `F(x)`, kritisk kjegle `C(x;λ)`; konjugat `f*`; Armijo `f(x+αp)≤f(x)+c₁α⟨∇f,p⟩`; kontraksjon `ρ`; `‖·‖₁,‖·‖₂,‖·‖_∞`; eksakte svar der mulig.

---

## 7. Prognose og prioritering

> Den skriftlige delen av TMA4180 (Grasmair-æraen) er blant de mest forutsigbare i arkivet: samme fem søyler hvert år. Prognosen vekter dagens æra tyngst, holder gammel-æra-tema som beredskap, og fremhever at **prosjektet (30 %)** krever et eget implementerings-/numerikk-spor i boken.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Ubeskranket optimering** (∇f=0, Hessian, koersivitet, lokal/global) — 100 %.
2. **Konveksitet** (PSD overalt; motbevis via ett indefinit punkt) — 100 %.
3. **KKT-betingelser** med full aktiv-sett-gjennomgang — 100 %.
4. **LICQ** i alle punkter — 90 %.
5. **Tangentkjegle `T_Ω` vs. `F`**, inkl. korrekt behandling av LICQ-svikt — 71 % (fast i ny æra).
6. **Andreordensbetingelser** via kritisk kjegle + `H_L` — 81 %.
7. **Ett skritt av gradient/Newton med Armijo** (evt. Wolfe-intervall) — 76 %.
8. **Lagrange-dualitet** (dual, Slater, sterk dualitet) — 67 % (5/5 ny æra).

### Nivå 2 — må kunne (bredde + karakterskiller)
9. **Legendre–Fenchel-konjugat** og infimal-konvolusjon — 29 % (4/5 ny æra).
10. **Pareto/flerkriterie** via vektede sum-problem — 29 % (4/5 ny æra).
11. **Korte teoribevis** (Armijo-eksistens, `∇f→0`, CG-ekvivalens) — minst ett per sett.
12. **Konvergensanalyse** (koersivitet+Armijo ⟹ `∇f→0`; Newton lineær vs. kvadratisk) — 57 %.
13. **Metodevalg for stor-skala** (Newton+Thomas, gradient-projeksjon, BB) — bro til prosjektet.
14. **Marginalfunksjon-konveksitet** — teoritungt kortsvar.

### Nivå 3 — bør dekkes (beredskap / pensumkrav / prosjekt)
15. **Prosjekt-/implementeringsspor** (gradient-projeksjon, Barzilai–Borwein, stoppekriterier, pseudokode) — bærer **30 %** av karakteren; obligatorisk eget kapittel.
16. **LP-dualitet + komplementær slakkhet, aktiv-sett/QP** — fallende, men i Nocedal & Wright; beredskap.
17. **Trust-region, kvasi-Newton/BFGS, konjugerte gradienter** — beredskap (i læreboken, sjeldne på skriftlig).
18. **Straffemetoder / utvidet Lagrange** — overgangsæra; kort dekning.
19. **Variasjonsregning (Euler–Lagrange), simpleks** — kun gammel æra; utgått, minimal dekning.

### Konkret prognose for neste skriftlige sett
Basert på den svært stabile Grasmair-malen: **6–7 poengvektede oppgaver over 4 timer**, kalkulator + vedlagt formelark, ingen flervalg:
- **P1 (~25 p):** ubeskranket `f:R²→R` — finn minima, avgjør konveksitet, **ett skritt** av gradient/Newton med Armijo (eller Wolfe-intervall), evt. kort konvergensresonnement.
- **P2 (~30 p):** den store beskranket-oppgaven — LICQ i alle punkter, `T_Ω`/`F` i to–tre punkter (minst ett med LICQ-svikt), alle KKT-punkter + andreordensbetingelser + globalitet.
- **P3–P7 (~10 p hver):** Lagrange-dual (+ Slater/sterk dualitet, ofte med Fenchel-konjugat); en Fenchel/infimal-konvolusjon- eller marginalfunksjon-oppgave; en Pareto-oppgave; ett–to korte teoribevis (Armijo-eksistens / `∇f→0` / CG); evt. et metodevalg for stor dimensjon.

**Usikkerhetsmoment:** Prosjektoppgaven ligger ikke i arkivet — bekreft dens nøyaktige innhold (BB-skrittlengder, gradient-projeksjon bekreftet fra fasitreferanser). Sjekk også om formelarkets konjugat-liste utvides, og følg med på om noe gammel-æra-stoff (trust-region/QP) gjeninnføres.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4180/` (~34 PDF-er).

**Løsningsforslag lest grundig (ord for ord):**
- `optimisation_1_v25_solutions.pdf`, `optimisation_1_v25_kont_solutions.pdf` (V2025 + Kont2025 — fulle fasiter m/poeng)
- `optimisation_1_v24_solutions.pdf`, `optimisation_1_v24_kont_solutions.pdf` (V2024 + Kont2024)
- `optimisation_1_v23_solutions.pdf` (V2023)
- `exam_08.06.2018_solutions.pdf` (V2018 — m/hjelpemiddelliste og handouts)
- `exam_spring19_sol_v2.pdf` (V2019)
- `lf_summer15.pdf`, `exam_summer16_lf.pdf`, `exam_summer17_lf.pdf`, `lf2020.pdf` (S2015–2020)
- `completeexamsolutions.pdf` (tematisk samlesett: eksistens, KKT I/II, LP-dualitet, LP, steepest descent, Wolfe, trust-region)

**Oppgavesett + eldre fasiter gjennomgått (oppgave-for-oppgave):**
- `optimisation_1_v23.pdf … v25_kont.pdf` (rene oppgavesett, ny æra)
- `exam_spring19.pdf`, `exam_summer15.pdf … summer17.pdf`
- `TMA4180-2004…2013-…-ProblemSolution.pdf` (2004, 2006, 2007, 2008, 2010, 2011, 2012, 2013 — gammel æra)
- `tma4180_06062014.pdf` (2014 oppgavesett)
- `completeexamsolutionsneu.pdf` (samlesett: steepest descent m/eksakt linjesøk, LP-dualitet, halvkontinuitet/støttefunksjon, Pareto)

**Merknader om kildene:**
- **Skann-hull (kunne ikke tekst-utvinnes):**
  - `Solutions_06062014.pdf` — blank Xerox-skann (14 tegn, ingen OCR); 2014-fasiten mangler (oppgavesettet finnes som tekst).
  - `TMA4180-2005-30-05-ProblemSolution.pdf` — tegnkoding-korrupt (uleselig); V2005 mangler helt.
  - `TMA4180-2009-22-05-ProblemSolution.pdf` — reelt tomt (7 tegn, skann); V2009 mangler.
  - Ingen 2020-oppgavesett med separat fasit utover `lf2020.pdf`; ingen 2021/2022-ordinære sett (kun samlesettene `completeexamsolutions*`, sannsynlig V2021 og V2022).
  De 21 lesbare settene gir likevel et robust, kvantitativt grunnlag, med **full ord-for-ord-dekning av hele den relevante Grasmair-æraen**.
- **Æraskifte:** analysen skiller eksplisitt gammel æra (2004–2014: variasjonsregning, simpleks, trust-region) fra ny æra (2018–2025: konveksitetsteori, tangentkjegle, dualitet/Fenchel, Pareto). En bok rettet mot dagens emne prioriterer ny æra og holder gammel-æra-stoff som beredskap.
- **Prosjekt/mappe (30 %):** selve prosjektoppgaven er ikke i arkivet; innholdet (numerisk implementering, **Barzilai–Borwein-skrittlengder**, **gradient-projeksjon**) er utledet fra direkte referanser i de skriftlige fasitene (Kont2025 P4).
- **Ingen flervalg:** ingen av settene har flervalgsdel.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og metodenavn er standard fagnotasjon.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse (TMA4180 Optimering 1 / Optimization 1, 7,5 sp, undervises på engelsk; lærebok Nocedal & Wright, *Numerical Optimization*).

**Forbilde:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal og detaljnivå).
