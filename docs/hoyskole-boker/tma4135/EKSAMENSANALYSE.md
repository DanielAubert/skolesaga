# Eksamensanalyse: TMA4135 Matematikk 4D (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **~26 filer / 13 velkarakteriserte eksamenssett** fra arkivet (H2015–Kont2024): oppgaver **og** offisielle løsningsforslag lest grundig for de siste årene (H2022, Kont2023, Kont2024, H2020, Kont2020, H2019, Kont2019, H2018), og oppgavesett + løsningsforslag/oppgaver gjennomgått for de eldre settene (H2015, Kont2015, H2016, H2017, Kont2017). Det utdelte formelarket (transformtabeller + numerikk-ark) er lest i sin helhet (H2019- og H2022-utgavene). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsformuleringer. Matematiske uttrykk, metodenavn og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4135 er et ekstremt **stabilt og forutsigbart** emne. Fire søyler er praktisk talt garantert på hvert sett: **(1) Laplace-transform** (ODE/IVP, integro-differensiallikning eller Heaviside), **(2) Fourier** (rekke og/eller transform), **(3) separasjon av variable for en PDE** (varme-/bølge-/Laplace-likning), og **(4) numeriske metoder** (interpolasjon, integrasjon, rotsøking/fikspunkt, ODE-løsere og differansemetoder for PDE). Alle svar skal begrunnes; eksamen har **ingen flervalgsdel** (avkryssingsboksen «skal ha flervalgskjema» på trykk-arket er bare skjemametadata og er aldri i bruk). Et **formelark deles ut** (Laplace- og Fourier-tabeller + en full numerikk-formelside), så eksamen tester **bruk og utledning, ikke pugging av formler**. Den viktigste utviklingen: fra **2018** ble TMA4135 (Matematikk 4D) og TMA4130 (Matematikk 4N) **felles eksamen** med noen få oppgaver i egne 4N-/4D-varianter — de 4D-spesifikke variantene er nesten alltid **verifikasjon av at en funksjon løser en PDE** eller et **flervariabel-gradient-innslag**. Fra ~2022 dukket **innfelte Runge–Kutta-par med steglengdekontroll** og **diskret Fourier-transform (DFT)** opp som nye sjangre.

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer (09:00–13:00)**, bokstavkarakter A–F. Hjelpemiddelkode **C**. Fast instruks på hvert sett: **«Alle svar må begrunnes; ta med nok mellomregning til at tenkemåten klart framgår.»** Bar fasit uten utledning gir ikke full uttelling.

### Formathistorikk

| Periode | Emnekode(r) | Struktur | Hjelpemidler (kode C) |
|---|---|---|---|
| 2015–2017 | **Ren TMA4135 (4D)** | 6 hovedoppgaver med deloppgaver; deloppgavene **teller likt** (H2016: 25 delpunkter, H2017: 10, Kont2017: 20). Ingen eksplisitt poengvekting per oppgave | Bestemt enkel kalkulator + **Rottmann** matematisk formelsamling; **formelark vedlagt** |
| 2018 | TMA4130/35 (**felles 4N/4D**) | 9 oppgaver med **eksplisitt poengvekting, sum 100** | Kalkulator + **ett gult, stemplet A5-ark med egne håndskrevne notater** (Rottmann ute); kort transformtabell vedlagt |
| 2019 | TMA4130/35 | 8–9 oppgaver | A5-ark + **vedlagt formelark** (transformtabeller + full numerikk-side) |
| 2020 | TMA4125/30/35 | 10 oppgaver, **sum 100 poeng** | A5-ark + vedlagt formelark |
| 2022 | TMA4130/35 | 10 oppgaver, poengvektet | A5-ark + vedlagt formelark (nå også RK-ordensbetingelser) |
| 2023–2024 (kont) | TMA4125/30/35 | **10 oppgaver à 10 poeng**; eksplisitt **karakterskala i prosent** (A 80–90, B 69–79, C 59–68, D 48–58, E 37–47, F 0–36) | Kalkulator + gult A5-ark; formelark vedlagt |

### Konstanter på tvers av alle år
- **6–10 oppgaver, 4 timer, kode C, ingen flervalg.** Hvert sett dekker bredden: Laplace + Fourier + separasjon av variable + en samling numeriske metoder.
- **Formelarket er alltid tilgjengelig** (se del 6): Laplace-tabell, Fourier-transform-tabell, trigonometriske identiteter, delvis-integrasjon-reduksjonsformler, og en numerikk-side (Newton, Lagrange, interpolasjonsfeil, trapes/Simpson med feilledd, Jacobi/Gauss–Seidel, Euler/Heun/RK4/bakover-Euler, differansekvotienter, Crank–Nicolson). Fra 2022 også **RK-ordensbetingelser** opp til orden 4.
- **Løsningsforslagene viser ofte flere gyldige metoder** eksplisitt (delbrøk vs. kvadratkomplettering; Lagrange vs. Newton; reell vs. kompleks delbrøk) og premierer alle. Karakterskalaen er prosentbasert.
- **Delpunktene er ofte kjedet:** et senere delpunkt bruker resultatet fra et tidligere (f.eks. finn `f(t)` først, deretter `y(t)=u(t−a)f(t−a)`; eller «bruk formelen fra b) i c)»).

### 4N/4D-splitten (viktigste strukturfunn)
Fra 2018 er eksamen **felles for Matematikk 4N (TMA4130) og Matematikk 4D (TMA4135)**. De aller fleste oppgavene er identiske. Kun **1 oppgave per sett** har separate «4N only»/«4D only»-varianter (H2018 O3, Kont2019 O2, H2020 O4, H2022 O6). Mønsteret i de **4D-spesifikke** variantene:
- **Verifikasjon at en gitt funksjon løser en PDE** (H2018: varmekjerne; H2019: `(x−t)³+sin(x+t)` løser bølgeligningen; H2020: sum av bølgeledd; H2022: klassifiser PDE som lineær/ikke-lineær + verifiser løsning; Kont2020: variabelskifte `y=x+t, z=x−t` gjør bølgeligningen om til `u_{yz}=0`).
- **Flervariabel-gradient / retningsderivert** (Kont2019 O2c; H2016 O5 — et gradient/nivåkurve-innslag i det rene 4D-settet).

De 4N-spesifikke variantene er derimot ofte **Fourier-transform-utregninger** eller **avrundings-vs.-avkuttingsfeil-analyse**. En 4D-rettet bok må dekke alle fellestemaene fullt ut, pluss de 4D-spesifikke PDE-verifikasjons- og gradient-innslagene.

### Nye sjangre 2022–2024 (følg med)
1. **Innfelte Runge–Kutta-par med lokalt feilestimat og steglengdekontroll** (H2022 O9; Kont2023 O4 «BogSham»; Kont2024 O4) — fantes ikke før 2022.
2. **Diskret Fourier-transform (DFT)** som egen oppgave (Kont2023 O3 + O8-bevis; Kont2024 O8) — nytt i kontinuasjonssettene.
3. **Gauss–Legendre-kvadratur** med utdelt node-/vekt-tabell (Kont2024 O9).
4. **Kode-forståelse / feilsøking i Python** (Kont2023 O6: feil i trapesløkke; H2022 O10: feil matriseoppføring i differanseskjema; H2018/H2020: les Butcher-tabell fra kode).

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på **13 velkarakteriserte sett**: Periode A (2015–2017, 5 sett: H2015, Kont2015, H2016, H2017, Kont2017 — ren 4D), Periode B (2018–2020, 5 sett: H2018, H2019, Kont2019, H2020, Kont2020 — felles 4N/4D), Periode C (2022–2024, 3 sett: H2022, Kont2023, Kont2024).

| Tema | A (5) | B (5) | C (3) | **Gjenganger-score** |
|---|---|---|---|---|
| **Laplace-transform** (ODE/IVP, integro-diff./konvolusjon, Heaviside, invers) | 5 | 5 | 3 | **13/13 = 100 %** |
| **Fourier-rekker** (sinus/cosinus/reell/kompleks) | 5 | 5 | 3 | **13/13 = 100 %** |
| **Separasjon av variable** (varme-/bølge-/Laplace-likning) | 4 | 5 | 3 | **12/13 = 92 %** |
| **Numerisk ODE-løser** (Euler/Heun/RK, ett skritt / orden / stabilitet) | 4 | 5 | 3 | **12/13 = 92 %** |
| **Differansemetode for PDE/RVP** (eksplisitt, Crank–Nicolson, avkuttingsfeil, kodefeil) | 4 | 5 | 2 | **11/13 = 85 %** |
| **Fourier-transform** (utregning eller for å løse likning/PDE) | 3 | 5 | 2 | **10/13 = 77 %** |
| **Bølgeligning / d'Alembert / verifiser PDE-løsning** (ofte 4D-splitt) | 2 | 5 | 3 | **10/13 = 77 %** |
| **Numerisk integrasjon** (Simpson/trapes/Gauss) **+ presisjonsgrad** | 2 | 4 | 2 | **8/13 = 62 %** |
| **Interpolasjon** (Lagrange / Newtons dividerte differanser) | 1 | 5 | 1 | **7/13 = 54 %** |
| **Fikspunktiterasjon / kontraksjon** | 2 | 2 | 2 | **6/13 = 46 %** |
| **Butcher-tabell + ordensbetingelser** (les fra kode, verifiser orden) | 1 | 2 | 2 | **5/13 = 38 %** |
| **Rotsøking: Newtons metode** | 2 | 2 | 0 | **4/13 = 31 %** |
| **Innfelt RK-par / steglengdekontroll** | 0 | 0 | 3 | **3/13 = 23 %** (kun 2022→) |
| **Stabilitetsfunksjon `R(z)` / stabilitetsintervall** | 0 | 2 | 1 | **3/13 = 23 %** |
| **Biseksjon (halveringsmetoden)** | 0 | 1 | 1 | **2/13 = 15 %** |
| **DFT / diskret Fourier-transform** | 0 | 0 | 2 | **2/13 = 15 %** (kun kont 2023/24) |
| **Jacobi / Gauss–Seidel-iterasjon** | 2 | 0 | 0 | **2/13 = 15 %** (kun eldre) |
| **Flervariabel gradient / retningsderivert** (4D-innslag) | 1 | 1 | 0 | **2/13 = 15 %** |
| **LU / Doolittle-faktorisering** | 1 | 0 | 0 | **1/13 = 8 %** (kun H2015) |
| **Sekantmetoden** | 1 | 0 | 0 | **1/13 = 8 %** (kun Kont2015) |
| **Numerisk derivasjon** (sentraldifferanse for `f′`) | 1 | 0 | 0 | **1/13 = 8 %** |
| **Avrundings- vs. avkuttingsfeil (optimal `h`)** | 0 | 0 | 1 | **1/13 = 8 %** (4N-variant H2022) |

**Viktigste funn:**
1. **De fire søylene (Laplace, Fourier, separasjon av variable, numeriske metoder) er praktisk talt garantert hvert år.** En bok som behersker disse fire perfekt dekker >80 % av poengene på et typisk sett.
2. **Numerikk-blokken er bredest og tyngst å pugge:** interpolasjon, numerisk integrasjon med presisjonsgrad, ODE-løsere (Euler/Heun/RK med Butcher-tabell og ordenskontroll), differansemetoder for PDE (eksplisitt + Crank–Nicolson), rotsøking (Newton/fikspunkt/biseksjon) og — i eldre sett — lineæralgebra-numerikk (LU/Doolittle, Jacobi/Gauss–Seidel). Alle enkeltmetodene har lav-til-middels frekvens hver for seg, men **minst 3–4 numeriske sjangre opptrer på hvert sett**.
3. **Bølgeligning/d'Alembert/PDE-verifikasjon er de-facto 4D-signaturen** etter 2018 (den 4D-spesifikke splitt-oppgaven), og forekommer i 10/13 sett.
4. **Nye sjangre (innfelt RK-par, DFT, Gauss–Legendre)** er konsentrert i 2022–2024. De må dekkes som primærmål for kommende sett, men er ikke belagt i eldre arkiv.
5. **Lineæralgebra-numerikk (LU, Jacobi/Gauss–Seidel) og sekantmetoden er «utdøende»** — de forekommer kun i de rene 4D-settene 2015–2017 og er ikke sett etter felles-eksamenen ble innført. Behold dem som lav-prioritert beredskap; de står fortsatt på formelarket.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene der de finnes).

### A. Laplace-transform for ODE / IVP
- **Krav:** Transformér likningen, sett inn initialbetingelsene, løs algebraisk for `Y(s)`, invers-transformér via tabell. Faste grep: **delbrøkoppspalting** og **kvadratkomplettering** for å treffe tabellformen `ω/((s−a)²+ω²)` (førsteforskyvningsteoremet gir `e^{at}`-faktoren). Delbrøk-koeffisienter finnes ved **innsetting av spesielle `s`-verdier / cover-up** eller ved å **løse et lineært system** — fasiten sier eksplisitt at begge gir samme svar. Reell delbrøk vs. **kompleks delbrøk** med røtter `a±bi` er begge godtatt (H2022 O2 viser begge og kaller kvadratkomplettering «den raskeste»).
- **Frekvens:** del av 100 %-Laplace-blokken; nesten alltid O1.
- **Omskrevet eksempel:** «Løs `y‴ − y′ = 1` med `y(0)=y′(0)=0, y″(0)=1` ved hjelp av Laplace-transform.» (Kont2023)

### B. Laplace for integro-differensiallikning / konvolusjon
- **Krav:** Gjenkjenn konvolusjonen `∫₀ᵗ g(τ)y(t−τ)dτ = (g∗y)(t)`; konvolusjonsteoremet gir `ℒ(g∗y)=G(s)·Y(s)`. Løs for `Y(s)`, invers-transformér. Fasiten faktoriserer nevneren og delbrøkoppspalter.
- **Frekvens:** ~7/13; en fast Laplace-variant.
- **Omskrevet eksempel:** «Løs `y′(t) + 5∫₀ᵗ e^{2τ}y(t−τ)dτ = e^{2t}`, `y(0)=0`.» (H2022)

### C. Laplace med Heaviside-/Dirac-ledd
- **Krav:** Skriv trappefunksjon-tvunget `y(t)=u(t−a)f(t−a)` via **andreforskyvningsteoremet** `ℒ(f(t−a)u(t−a))=e^{−as}F(s)` — **finn `f(t)` først**, deretter forskyv. Dirac-delta: `ℒ(δ(t−a))=e^{−as}`. En stykkevis konstant `f` skrives som sum av trappeledd før transform (`f = 1 + (c−1)u(t−1)`, H2020 O1).
- **Frekvens:** Heaviside/Dirac i flere sett (H2020, Kont2020, H2022, Kont2019, Kont2015).

### D. Fourier-rekker (sinus/cosinus/reell/kompleks)
- **Krav:** Utnytt symmetri **før** du regner: odde funksjon → ren sinusrekke (`aₙ=0`), like funksjon → ren cosinusrekke (`bₙ=0`). Koeffisienter ved integrasjon, nesten alltid **delvis integrasjon** for `x·sin/cos`- eller `x²·sin`-ledd (reduksjonsformlene står på formelarket). Ved diskontinuitet konvergerer rekka til **gjennomsnittet `½(f(x⁺)+f(x⁻))`**. Fast triks: sett inn en konkret `x` for å summere en tallrekke (H2017: `Σ 1/(2n+1)² = π²/8`). **Kompleks Fourier-rekke** `Σ cₙ e^{inx}` med `cₙ = (1/2π)∫f e^{−inx}` forekommer også (H2018, H2019, H2020). Oppgaven ber ofte om å **utvide** en funksjon på `[0,L]` til en odde/like periodisk funksjon og skissere grafen over flere perioder.
- **Frekvens:** del av 100 %-Fourier-blokken.
- **Omskrevet eksempel:** «Utvid `f(x)=2+x` på `[0,1]` til en odde funksjon `g` med periode 2, skissér `g` på `[−3,3]` og finn Fourier-rekka.» (H2022)

### E. Fourier-transform (utregning og for å løse likninger)
- **Krav:** Bruk tabellens Gauss-par `e^{−ax²}` og reglene `ℱ(f′)=iω·f̂` og konvolusjonsteoremet `ℱ(f∗g)=√(2π)·f̂·ĝ`. For **integrallikninger** (`∫e^{−(x−t)²}f(t)dt = …`): gjenkjenn konvolusjon, transformér til produkt, løs for `f̂`, invers-transformér (ofte ved å gjenkjenne `f̂` som transformen av en kjent funksjon via `ĝ′=iωĝ`).
- **Frekvens:** 10/13.

### F. Fourier-transform for å løse PDE på hele ℝ
- **Krav:** Transformér PDE-en i `x`, løs den resulterende **ODE-en i `t`** (`û(ω,t)=C(ω)e^{…}`), bestem `C(ω)` fra initialbetingelsen (`û(ω,0)`), invers-transformér. Konvolusjons- og deriverings-reglene brukes flittig; svaret er ofte en Gauss-/varmekjerne-konvolusjon.
- **Frekvens:** Kont2019 O4, H2022 O5, Kont2024 O7.
- **Omskrevet eksempel:** «Bruk Fourier-transform til å løse `u_t = u_x + u`, `x∈ℝ, t>0`, med `u(x,0)=sin x / x`.» (H2022)

### G. Separasjon av variable (varme-/bølge-/Laplace-likning)
- **Krav (stapleoppgave, ofte 14–20 poeng):** Sett `u=F(x)G(t)`, del i to ODE-er med felles konstant `k`. Fasiten krever **eksplisitt behandling av alle tre tilfellene `k>0`, `k=0`, `k<0`** og viser at bare ett gir ikke-trivielle løsninger; egenverdiene følger av randbetingelsene. Superponér, og match initialbetingelsen ved å **lese av Fourier-koeffisienter** (ofte trivielt når initialdata alt er en sinus-/cosinus-sum, f.eks. `sin2x+sin4x`). For **ikke-homogen** varmelikning `u_t=c²u_xx+α`: finn en stasjonær partikulærløsning `w(x)`, sett `v=u−w`, løs `v` homogent (H2020 O5). Neumann-rand (`u_x=0`) gir cosinus-egenfunksjoner (Kont2023 O6). Grensen `t→∞` plukker ut den stasjonære komponenten (de eksponentielt dempede leddene dør ut).
- **Frekvens:** 12/13. Offisiell fasit finnes (flere sett).
- **Omskrevet eksempel:** «Finn alle ikke-trivielle løsninger `u(x,t)=F(x)G(t)` av `u_t = 4u_xx`, `−1<x<1`, med `u(−1,t)=u(1,t)=0`.» (H2022)

### H. Bølgeligning: d'Alembert / verifiser PDE-løsning (4D-signatur)
- **Krav:** To undertyper. **(1)** d'Alemberts formel `u(x,t)=½(f(x+ct)+f(x−ct)) + (1/2c)∫_{x−ct}^{x+ct} g(s)ds` for initialverdiproblem (Kont2015, H2019 4N, Kont2024). **(2)** **Verifiser ved direkte innsetting** at en oppgitt `u(x,t)` løser bølge-/varmeligningen — regn `u_xx`, `u_tt`/`u_t` og vis likhet (den typiske 4D-splitt-oppgaven: H2018, H2019, H2020, H2022). Variabelskifte `y=x+t, z=x−t → u_{yz}=0` (Kont2020 4D).
- **Frekvens:** 10/13.

### I. Interpolasjon (Lagrange / Newton)
- **Krav:** Fasiten aksepterer **eksplisitt enten Lagrange eller Newtons dividerte differanser** (H2019 O5: «Bruk Lagrange- eller Newton-metoden»). Lagrange: kardinalfunksjoner `lₖ(x)=Πⱼ≠ₖ(x−xⱼ)/(xₖ−xⱼ)`. Newton: differansetabell + `p(x)=f₀+(x−x₀)f[x₀,x₁]+…`. Symmetriargument for å vise at et interpolasjonspolynom er odde/like uten å regne det (Kont2023 O5: entydighet + `q(x)=−p(−x)` interpolerer samme data). Interpolasjonsfeil-formelen `Π(x−xₖ)·f^{(n+1)}(ξ)/(n+1)!` fra formelarket ved feilanslag.
- **Frekvens:** 7/13.
- **Omskrevet eksempel:** «Finn interpolasjonspolynomet av minste grad for `(−2,−5),(−1,0),(1,1),(2,4)` på både Lagrange- og Newton-form, og verifiser at de er like.» (H2020)

### J. Numerisk integrasjon + presisjonsgrad
- **Krav:** Simpsons formel `(h/3)[f₀+4f₁+2f₂+…+fₙ]`, trapesregelen, sammensatte varianter, og **Gauss–Legendre-kvadratur** med utdelt node/vekt-tabell (transformér til `[−1,1]` ved `x(ξ)=((b−a)ξ+(a+b))/2`, `dx=((b−a)/2)dξ`). **Presisjonsgrad** bestemmes ved å teste formelen på `xⁿ` til den feiler (H2019 O6: Simpson eksakt for `x³`, feil for `x⁴` → grad 3; Gauss med `N` noder → grad `2N−1`). Feilleddene (`h²`-trapes / `h⁴`-Simpson) fra formelarket brukes til å velge `h` (Kont2017: finn `h` slik at trapesfeilen `<0,1`).
- **Frekvens:** 8/13.

### K. Fikspunktiterasjon / kontraksjon
- **Krav:** Skriv `x=g(x)`. For konvergens må **begge** fikspunktvilkårene vises: **(i)** `|g′(x)|≤L<1` på intervallet (finn maks av `|g′|`, ofte ved monotoni), **(ii)** `g` **avbilder intervallet inn i seg selv** (`g(I)⊆I`, ofte via monotoni + endepunktsverdier). Bruk **a-priori-estimatet** `|x_{k+1}−r| ≤ L^{k+1}/(1−L)·|g(x₀)−x₀|` til å regne ut nødvendig antall iterasjoner (H2022 O7; Kont2023 O1; H2020 O6). Fasiten godtar også svakere varianter av estimatet (erstatt `|g(x₀)−x₀|` med intervallengden).
- **Frekvens:** 6/13. Offisiell fasit finnes.
- **Omskrevet eksempel:** «Vis at `x_{k+1}=√(x_k+2)` konvergerer mot roten `r` for enhver `x₀∈[1,9]`, og finn antall iterasjoner til `|x_{k+1}−r|≤2⁻¹⁰`.» (H2022)

### L. Rotsøking: Newtons metode og biseksjon
- **Krav:** **Newton** for skalarlikning: vis **entydig rot** via monoton `f` + fortegnsskift + mellomverdisetningen, deretter **én iterasjon** `x₁=x₀−f(x₀)/f′(x₀)` (H2019 O7). Newton for **system**: `x_{k+1}=x_k−J_F(x_k)⁻¹F(x_k)` (H2016 O6 robotlokalisering). **Biseksjon:** antall skritt for absolutt feil `≤tol` fra `k=log₂((b−a)/(2·tol))` (Kont2024 O10: 9 iterasjoner; H2020 O10). **Sekantmetoden** i eldre sett (Kont2015).
- **Frekvens:** Newton 4/13, biseksjon 2/13.

### M. Numeriske ODE-løsere: Euler / Heun / Runge–Kutta
- **Krav:** **Ett skritt for hånd** med Euler (`y_{n+1}=y_n+hf`), forbedret Euler/Heun (`y_{n+1}=y_n+½h(k₁+k₂)`) eller klassisk RK4 (H2015K, Kont2017, H2019 O8). **Les/skriv Butcher-tabell fra Python-kode** og **verifiser ordenen** ved å sjekke ordensbetingelsene rad for rad til én feiler (H2016, H2018, H2020, H2022 O8: 3.-ordensbetingelsen `b₃a₃₂c₂≠1/6` → metoden er kun orden 2). Ordensbetingelsene deles ut på formelarket fra 2022. **Bakover-Euler** (implisitt) for stive problemer (Kont2019, Kont2020).
- **Frekvens:** 12/13 (ODE-løser generelt); Butcher+orden 5/13.

### N. Innfelt RK-par + steglengdekontroll (ny fra 2022)
- **Krav:** To `b`-rader (orden `p` og `p+1`) i én Butcher-tabell. Lokalt feilestimat `ϵ̂ = h|Σ(bᵢ−b̂ᵢ)kᵢ|` (eller `|ŷ₁−y₁|`). Aksepter/forkast mot toleranse; ny steglengde `h_new = P·(Tol/ϵ̂)^{1/(p+1)}` med sikkerhetsfaktor `P` (H2022 O9). Variant: estimatet oppfører seg som `Ch³`, løs for `h₁` så neste `est≈Tol` (Kont2023 O4, Kont2024 O4).
- **Frekvens:** 3/13 (kun 2022→).

### O. Stabilitetsfunksjon `R(z)` og stabilitetsintervall
- **Krav:** Bruk metoden på testlikningen `y′=λy`; `y_{n+1}=R(z)y_n` med `z=λh`. Euler: `R(z)=1+z` → stabilt for `−2≤z≤0` → `h≤2/|λ|`. Heun/forbedret Euler: `R(z)=1+z+z²/2`, intervall `[−2,0]` (H2019 O8). For system: `λ` = egenverdiene til `A`, den mest negative bestemmer maks skritt (Kont2023 O10: `A` med egenverdier −1, −7 → `h≤2/7`).
- **Frekvens:** 3/13.

### P. Differansemetode for PDE / randverdiproblem
- **Krav:** Sentraldifferanse for `u_xx` (`(U_{i+1}−2U_i+U_{i−1})/h²`) og `u_x` (`(U_{i+1}−U_{i−1})/2h`). **Eksplisitt (forward Euler)** skjema for varmelikningen (`U_i^{n+1}=U_i^n+r(…)`, `r=k/h²`), regn et konkret gitterpunkt for hånd (H2019 O4c, Kont2023 O9). **Crank–Nicolson / trapesregel** (implisitt, tridiagonalt system) (H2015, H2016, H2017, H2020 O10). **Randverdiproblem** `u″+q(x)u=r(x)`: sett opp `AU=b`; Neumann-rand `u′(0)=0` med **falsk-rand-triks** (fiktiv node) (H2018 O9, H2022 O10). **Stabilitet** for eksplisitt skjema krever `r≤½` (Kont2019 O9). **Kodefeil-lokalisering:** gitt Python-kode med én innebygd feil — se at randbetingelsen ikke er oppfylt og pek på linja (H2022 O10; Kont2023 O6).
- **Frekvens:** 11/13.

### Q. Avkuttingsfeil via Taylor + avrundings-/avkuttingsavveining
- **Krav:** Vis at sentraldifferansen er `O(h²)` ved Taylor-utvikling (Kont2019 O6, Kont2020 O9). Balansér **avrundingsfeil `O(ε/h)`** mot **avkuttingsfeil `O(hᵖ)`** for optimal `h` (H2022 O6 4N: `h³=O(ε)` → `h=O(ε^{1/3})`).
- **Frekvens:** ~3/13.

### R. DFT / diskret Fourier-transform (ny)
- **Krav:** `ĉ = F_N f` med `c_k=(1/N)Σ f_j w^{−jk}`, `w=e^{2πi/N}`. Les av koeffisienter for båndbegrenset signal (aliasing-lemma); avgjør om et invers-DFT-signal er reelt; bevis skifteegenskapen `c̃_j=w^j c_j` for syklisk skift (Kont2023 O3+O8, Kont2024 O8).
- **Frekvens:** 2/13 (kun kont 2023/24).

### S. Lineæralgebra-numerikk (utdøende)
- **Krav:** **LU-faktorisering med Doolittles metode** (ener på `L`-diagonalen), deretter `Ly=b` så `Ux=y` (H2015 O3). **Jacobi / Gauss–Seidel:** omordne til diagonaldominans først, iterér (Kont2015, H2017).
- **Frekvens:** LU 1/13, Jacobi 2/13 — kun rene 4D-sett 2015–2017.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett. Ubegrunnet svar gir ikke full uttelling selv om det er riktig.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «fikspunktteoremet», «andreforskyvningsteoremet», «konvolusjonsteoremet», «mellomverdisetningen», «d'Alemberts formel». Fasiten skriver dem ut.
3. **Føringsstandard:** transformoppslag markeres («fra tabellen …»); delbrøk-/kvadratkompletterings-steg vises; svar oppgis som **eksakt uttrykk** der mulig, ellers med tallverdi og nok siffer.
4. **Delpunktgjenbruk er designet inn:** «bruk formelen fra b) i c)»; finn `f(t)` før forskyvning; gjenkjenn et allerede utregnet ledd. Å se koblingen premieres.
5. **Poeng og karakter:** fra 2018 eksplisitt poengvekting (sum 100) med **fasit-intern «grading manual»** som deler poeng per delpunkt (f.eks. «a) 5p, b) 5p»; Kont2024 O10: «a) 8p, b) 2p»). Karakterskalaen er **prosentbasert** (A 80–90, …, F 0–36).
6. **Feilforplantning tolereres:** fasiten sier eksplisitt at hvis en student får feil mellomverdi (f.eks. feil konstant `L` i a) men **regner riktig videre**, gis full uttelling i senere delpunkt (Kont2023 O1).
7. **Flere metoder honoreres eksplisitt:** delbrøk vs. kvadratkomplettering (H2022 O2, «kvadratkomplettering er raskest»); reell vs. kompleks delbrøk; Lagrange vs. Newton (H2019 O5); cover-up vs. lineært system for delbrøk-koeffisienter (H2022 O1).

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: transformér ODE-en og løs for `Y(s)`, sett opp Fourier-koeffisientintegralet, sett `u=FG` og få de to ODE-ene, ett Euler-/RK-skritt for hånd, sett opp differanseskjemaet.
- **Midtsjiktet** behersker i tillegg: invers Laplace via delbrøk **og** kvadratkomplettering, delvis integrasjon for `x²·sin`-koeffisienter, **alle tre `k`-tilfellene** i separasjon av variable, presisjonsgrad ved å teste `xⁿ`, a-priori-iterasjonsestimatet.
- **Toppsjiktet** kjennetegnes av: (i) korrekt **andreforskyvningsteorem** for Heaviside (finn `f` først, forskyv sist); (ii) **begge** fikspunktvilkårene (`|g′|<1` **og** `g(I)⊆I`); (iii) korrekt **ordensverifikasjon rad-for-rad** i Butcher-tabellen og lokalt feilestimat i innfelt par; (iv) korrekt **falsk-rand-/randbetingelse-behandling** og kodefeil-lokalisering i differanseskjema; (v) å se og bruke **delpunkt-koblingene**; (vi) korrekt **stabilitetsanalyse** (`R(z)`, `h≤2/|λ|`, `r≤½`).

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Kun ett av fikspunktvilkårene:** å sjekke `|g′|<1` uten å vise at `g` avbilder intervallet inn i seg selv (eller motsatt). Fasiten viser alltid begge.
2. **Feil forskyvningsteorem for Heaviside-ledd:** å bruke første i stedet for andre forskyvningsteorem, eller å glemme å skrive `y(t)=u(t−a)f(t−a)` etter å ha funnet `f`.
3. **Hoppe over ett `k`-tilfelle i separasjon av variable:** å ikke vise at `k>0` og `k=0` bare gir triviell løsning.
4. **Glemt midling i diskontinuitetspunkt:** Fourier-rekka konvergerer til `½(f(x⁺)+f(x⁻))`, ikke funksjonsverdien.
5. **Feil fortegn/plassering i delbrøk**, eller å glemme kvadratkomplettering som gjør en irredusibel andregradsnevner til tabellform.
6. **Ufullstendig ordenssjekk i RK:** å stoppe før første ordensbetingelse feiler, eller feillese Butcher-tabellen fra koden (særlig `a_{ij}`-innslagene).
7. **Feil implementering av rand-/initialbetingelse i differanseskjema:** feil `r`-faktor (`r=k/h²`), feil falsk-rand-ledd, eller å ikke se at en kodefeil bryter randbetingelsen.
8. **Presisjonsgrad feilbestemt:** å stoppe testingen på `xⁿ` for tidlig, eller å forveksle «eksakt for `x³`» med grad 4.
9. **Feil i a-priori-iterasjonsestimatet:** feil eksponent (`L^{k+1}` vs. `L^k`), eller å runde antall iterasjoner nedover i stedet for oppover.
10. **Stabilitetsfeil:** feil `R(z)`, eller å bruke feil (minst negative) egenverdi når man bestemmer maks skritt for et system.
11. **DFT-normering:** feil faktor `1/N` foran (fysisk vs. unitær konvensjon) — fasiten godtar flere konvensjoner så lenge de er konsistente.
12. **Tidsfelle:** separasjon-av-variable-oppgaven (14–20 poeng) og den store differanse-/PDE-oppgaven er tunge; å bruke for lang tid tidlig stjeler fra de dyre sluttoppgavene.

---

## 6. Teorem-, notasjons- og formelapparat

### Utdelt formelark (må kunne brukes, ikke pugges)
Formelarket er vedlagt hvert sett (2018-utgaven kortere; 2019+ full). Det inneholder:

**Laplace-transform-tabell:** `cos ωt`, `sin ωt`, `cosh ωt`, `sinh ωt`, `tⁿ` (`n!/s^{n+1}`), `e^{at}` (`1/(s−a)`), **andreforskyvning** `f(t−a)u(t−a) ↔ e^{−as}F(s)`, `δ(t−a) ↔ e^{−as}`.

**Fourier-transform-tabell** (med `f(x)=(1/√2π)∫f̂ e^{iωx}dω`): Gauss `e^{−ax²} ↔ (1/√2a)e^{−ω²/4a}`, `e^{−a|x|}`, `1/(x²+a²)`, boks-funksjon `1_{|x|<a} ↔ √(2/π)·sin(ωa)/ω`, og `√(2/π)·sin(ax)/x ↔` boks.

**Trigonometriske identiteter** (produkt-til-sum, dobbel vinkel) og **delvis-integrasjon-reduksjonsformler** for `∫xⁿ cos ax dx` og `∫xⁿ sin ax dx`.

**Numerikk-side (2019+):**
- Newtons metode (skalar + system med Jacobi `J_F`).
- Lagrange-interpolasjon + **interpolasjonsfeil** `ε_n(x)=Π(x−xₖ)·f^{(n+1)}(ξ)/(n+1)!`.
- **Chebyshev-punkter** `xₖ=cos((2k+1)π/(2n+2))`.
- Newtons dividerte differanser.
- **Trapesregel + feil** `|ε|≤((b−a)/12)h²·max|f″|`.
- **Simpsons regel + feil** `|ε|≤((b−a)/180)h⁴·max|f⁴|`.
- Jacobi- og Gauss–Seidel-iterasjon.
- Euler, forbedret Euler, **klassisk RK4**, bakover-Euler.
- **Differansekvotienter** for `u_x` og `u_xx`.
- **Crank–Nicolson** for varmelikningen `(2+2r)u_{i,j+1}−r(…)=(2−2r)u_{ij}+r(…)`, `r=k/h²`.

**Fra 2022 også: Runge–Kutta-ordensbetingelser** for `p=1,2,3,4` (bl.a. `Σbᵢ=1`, `Σbᵢcᵢ=½`, `Σbᵢcᵢ²=⅓`, `Σbᵢaᵢⱼcⱼ=⅙`).

> **Merk:** Rottmann var tillatt til og med 2017; fra 2018 er det bare **ett gult, stemplet A5-ark med egne håndskrevne notater** i tillegg til det vedlagte formelarket. Boken bør trene studenten på å **finne og bruke** formlene fra arket, ikke pugge dem — og lage et mønster-A5-ark som del av eksamensforberedelsen.

### Må beherskes aktivt (kunne anvende og navngi)
- **Laplace:** transform/invers, derivasjonsregel `ℒ(y')=sY−y(0)`, **begge forskyvningsteoremene**, konvolusjonsteoremet, Dirac/Heaviside, delbrøk + kvadratkomplettering.
- **Fourier:** reelle sinus-/cosinusrekker, kompleks Fourier-rekke, symmetriutnyttelse, konvergens til `½(f⁺+f⁻)`, Fourier-transform med derivasjons- og konvolusjonsregel, DFT (`w=e^{2πi/N}`, aliasing).
- **PDE:** separasjon av variable (alle tre `k`-tilfellene), egenverdi/egenfunksjon fra randbetingelser, superposisjon + Fourier-matching, ikke-homogen reduksjon via stasjonær løsning, d'Alembert, Fourier-transform-metoden, klassifisering lineær/ikke-lineær.
- **Numerikk:** Lagrange/Newton-interpolasjon + feil, trapes/Simpson/Gauss + presisjonsgrad, Newton/fikspunkt/biseksjon/sekant med konvergensvilkår og a-priori-estimat, Euler/Heun/RK4 + Butcher-tabell + ordensbetingelser + innfelt par + steglengde, stabilitetsfunksjon `R(z)`, differansemetoder (eksplisitt + Crank–Nicolson) + falsk rand + stabilitet `r≤½`, avkuttingsfeil via Taylor. **Beredskap:** LU/Doolittle, Jacobi/Gauss–Seidel.

### Notasjonskonvensjoner boken bør speile
`ℒ`, `F(s)`, `Y(s)`; `u(t−a)` Heaviside, `δ` Dirac; `f̂(ω)` Fourier-transform, `cₙ`/`aₙ`/`bₙ` Fourier-koeffisienter; `u=F(x)G(t)`, separasjonskonstant `k`; Butcher-tabell `c | A ; b`; `R(z)`, `z=λh`; `r=k/h²`; `U_i^n≈u(x_i,t_n)`; eksakte svar der mulig.

---

## 7. Prognose og prioritering

> TMA4135 er blant de mest forutsigbare emnene i arkivet: samme fire søyler hvert år, stabil oppgavetradisjon, felles pool med 4N. Prognosen vekter de faste søylene tyngst og legger de nye 2022–2024-sjangrene som obligatorisk primærmål for kommende sett.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Laplace-transform** (ODE/IVP, integro-diff./konvolusjon, Heaviside/Dirac) — 100 %. Delbrøk + kvadratkomplettering + begge forskyvningsteoremene.
2. **Fourier-rekker** (sinus/cosinus/kompleks) — 100 %. Symmetri, delvis integrasjon, midling i diskontinuiteter.
3. **Separasjon av variable** for varme-/bølge-/Laplace-likning — 92 %. Alle tre `k`-tilfellene, superposisjon, Fourier-matching.
4. **Numeriske ODE-løsere** — 92 %. Ett skritt for hånd (Euler/Heun/RK4), Butcher-tabell fra kode, ordensverifikasjon.
5. **Differansemetoder for PDE/RVP** — 85 %. Eksplisitt + Crank–Nicolson, falsk rand, stabilitet `r≤½`, kodefeil-lokalisering.
6. **Fourier-transform** (utregning + for å løse PDE på ℝ) — 77 %.
7. **Bølgeligning: d'Alembert + verifiser PDE-løsning** — 77 %, den faste 4D-splitt-oppgaven.

### Nivå 2 — må kunne (bredde + karakterskiller)
8. **Numerisk integrasjon + presisjonsgrad** (Simpson/trapes/Gauss–Legendre) — 62 %.
9. **Interpolasjon** (Lagrange + Newton) — 54 %.
10. **Fikspunktiterasjon / kontraksjon** med a-priori-estimat — 46 %.
11. **Butcher-tabell + ordensbetingelser** og **innfelt RK-par + steglengdekontroll** — 38 % / 23 % (sistnevnte stigende, obligatorisk fra 2022).
12. **Rotsøking** (Newton, biseksjon) — 31 % / 15 %.
13. **Stabilitetsfunksjon `R(z)`** — 23 %.
14. **DFT / diskret Fourier-transform** — 15 %, men **fast i de to siste kontinuasjonssettene**; dekk grundig som ny primærsjanger.

### Nivå 3 — bør dekkes (lav frekvens / beredskap / pensumkrav)
15. **Avkuttings- vs. avrundingsfeil** (optimal `h` via Taylor) — teoritungt kortsvar.
16. **LU/Doolittle, Jacobi/Gauss–Seidel, sekantmetoden** — kun i rene 4D-sett 2015–2017, men står på formelarket; hold som beredskap.
17. **Flervariabel gradient/retningsderivert** — sporadisk 4D-innslag; kort dekning.

### Konkret prognose for neste sett
Basert på den svært stabile malen: **8–10 poengvektede oppgaver over 4 timer**, kode C (A5-ark + vedlagt formelark), ingen flervalg, med:
- **O1–O2:** Laplace-transform — én ren ODE/IVP og én integro-differensiallikning eller Heaviside-tvunget likning.
- **O3:** Fourier-rekke (odde/like utvidelse, skisse, koeffisienter), evt. kompleks Fourier-rekke eller DFT.
- **O4–O5:** separasjon av variable for varmelikningen (+ Fourier-matching); og enten Fourier-transform for en PDE på ℝ eller d'Alembert/verifiser-PDE (4D-varianten).
- **O6–O10:** numerikk-blokken — interpolasjon (Lagrange/Newton), numerisk integrasjon + presisjonsgrad, fikspunkt/Newton/biseksjon med konvergensvilkår, Runge–Kutta (Butcher + orden, evt. innfelt par + steglengde), og en differansemetode for PDE/RVP (eksplisitt eller Crank–Nicolson, ofte med kodefeil å lokalisere).

**Usikkerhetsmoment:** DFT, innfelt RK-par og Gauss–Legendre er konsentrert i 2022–2024-settene (delvis 4N-merket kontinuasjon) — verifiser vekten mot første framtidige ordinære 4D-sett. Sjekk også om formelarket er utvidet ytterligere.

---


> **ARKIVKONTROLL 29. juli 2026 — dette avsnittet undervurderte arkivet.**
> Analysen så bare i `NTNU/TMA4135/` (26 filer). En full opptelling på filnavn
> gir **56 unike filer: 29 oppgavesett og 27 løsningsforslag**. De 30 øvrige
> ligger under søsteremnene `TMA4123/`, `TMA4125/` og `TMA4130/` med den eldre
> navnekonvensjonen `tma4135_05h.pdf`, fordi NTNUs Matematikk 4-serie har byttet
> emnekode flere ganger. De dekker 2003–2014; mappa over har 2015–2024.
>
> **Alle 56 er høst eller kontinuasjon. Emnet har aldri hatt våreksamen.**
>
> Frekvensnevneren i boka forblir likevel **13** — settene denne analysen
> faktisk har gjennomgått. De eldre er ikke analysert, og pensum har drevet over
> tjue år, så de skal ikke telles. De nevnes i kildegrunnlaget som dekning for
> at oppgavetradisjonen er gammel og stabil, aldri som belegg for et konkret
> tema eller tall.
>
> Full utregning: `docs/hoyskole-boker/tma4135/ARKIVKONTROLL.md`.

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4135/` (~26 PDF-er).

**Løsningsforslag lest grundig (offisielle fasiter):**
- `Matte4D-2022H-LF.pdf` (H2022, felles TMA4130/35, full fasit + formelark)
- `Matte4D-2024Kont-LF.pdf` (Kont2024, TMA4130/25/35, full fasit med grading manual + karakterskala)
- `Matte4D-2023Kont-LF.pdf` (Kont2023, TMA4125/30/35, full fasit)
- `Matte4D-2020H-LF.pdf`, `Matte4D-2020Kont-LF.pdf` (H/Kont 2020, full fasit, 4N/4D-splitt)
- `Matte4D-2019H-LF.pdf`, `Matte4D-2019Kont-LF.pdf` (H/Kont 2019, full fasit + numerikk-formelark)
- `Matte4D-2018H-LF.pdf` (H2018, første felles-sett med poengvekting)
- `Matte4D-2017H-LF.pdf`, `Matte4D-2015H-LF.pdf`, `Matte4D-2015Kont-LF.pdf` (rene 4D-sett)

**Oppgavesett lest grundig (13 sett kartlagt oppgave-for-oppgave):** `…-2015H`, `-2015Kont`, `-2016H`, `-2017H`, `-2017Kont`, `-2018H`, `-2019H`, `-2019Kont`, `-2020H`, `-2020Kont`, `-2022H`, `-2023Kont`, `-2024Kont` (+ tilhørende `-LF` der de finnes).

**Merknader om kildene:**
- **Hull i arkivet:** ingen 2021-sett; `Matte4D-2016H-LF`, `-2016Kont-LF`/`-2016Kont`, `-2017Kont-LF` er skannede/håndskrevne og lot seg ikke tekst-utvinne (OCR ga uleselig resultat) — for disse er analysen basert på **oppgavesettene** (H2016 og Kont2017 oppgaver finnes som tekst). De 13 velkarakteriserte settene gir likevel et robust, kvantitativt grunnlag.
- **Felles 4N/4D-eksamen fra 2018:** de fleste oppgavene er identiske for TMA4130 (4N) og TMA4135 (4D); kun én oppgave per sett har egne varianter. Kont2023/Kont2024 er merket TMA4130/25 men deler oppgavepool og har eksplisitte 4N-/4D-delvarianter. En 4D-rettet bok dekker alle fellestemaene + de 4D-spesifikke PDE-verifikasjons- og gradient-variantene.
- **Ingen flervalg:** avkryssingsboksen «skal ha flervalgskjema» på trykk-informasjonsarket er skjemametadata og er aldri huket av / i bruk i noe sett.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og metodenavn er standard fagnotasjon.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse (scratchpad: `fagbeskrivelse-tma4135.md`).

**Forbilder:** `docs/hoyskole-boker/mat1110/EKSAMENSANALYSE.md` (8-delers strukturmal) og `docs/hoyskole-boker/tma4245/EKSAMENSANALYSE.md` (NTNU-realfag-tradisjon).
