# Eksamensanalyse: TMA4125 Matematikk 4N (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på arkivet `~/Desktop/Eksamner/NTNU/TMA4125/` (**~116 PDF-er, ~52 løsningsforslag**), som er dominert av den **felles Matematikk 4N/4D-eksamenspoolen** (mange `lf_tma4135_*`-fasiter 2003→2016, `TMA4130`-sett, `exam_math_4n_4d_tma4130_35-*`, `exam_fall18_tma4130_*`, `eksamen-bok_YYYY`). Oppgaver **og** offisielle løsningsforslag er lest grundig for de siste ~8 årene med tyngdepunkt på de reelle 4N-settene: **TMA4125 V2019** (m/lf), **TMA4125 V2022** (m/lf), **fall 2018** (TMA4130/35, med eksplisitt 4N-/4D-splitt), **Kont 2019** (TMA4125/30/35), **August 2023** (TMA4125/30/35), **Høst 2025** (TMA4130/35), samt et bredt tilfang eldre `tma4135`-sett (2005→2016) for å karakterisere den eldre epoken. Rene skann uten tekstlag (bl.a. `lf_tma4135_16h`) er hoppet over — ingen tung OCR. Det utdelte formelarket (transformtabeller + numerikk-side) er lest i sin helhet. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, metodenavn og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet.

> **Hovedfunn (les dette først):** TMA4125 er **NEDLAGT** (NTNU: emnet «tilbys ikke lenger undervisning»; lever kun som eksamens-/studiepoenggrunnlag). Faglig er det **nesten fullstendig sammenfallende med TMA4135 Matematikk 4D**: fra 2018 er 4N og 4D **felles eksamen** med samme oppgavepool, og bare ~1 oppgave per sett har egne «4N only»/«4D only»-varianter. Fire søyler er praktisk talt garantert på hvert sett: **(1) Laplace-transform** (ODE/IVP, Heaviside/Dirac, konvolusjon/integro-differensiallikning), **(2) Fourier** (rekker + transform), **(3) separasjon av variable for en PDE** (varme-/bølge-/Laplace-likning), og **(4) en bred numerikk-blokk** (interpolasjon, numerisk integrasjon, rotsøking, ODE-løsere, differansemetoder). **4N-signaturen** er at den emnespesifikke varianten er en **Fourier-transform-utregning** eller en **avrundings-/avkuttingsfeil-analyse** (V2019 O3 og O6, fall18 O3-4N, Kont19 O2-4N), mens 4D-varianten er **PDE-verifikasjon / flervariabel-gradient**. Eksamen har **ingen flervalgsdel**, og et **formelark deles ut** — eksamen tester bruk og utledning, ikke pugging. En TMA4125-bok bør i praksis **gjenbruke tma4135-strukturen med et forsterket numerikk-lag og 4N-etikett** (se arbeidsdeling i del 7).

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer (09:00–13:00)**, 7,5 studiepoeng, bokstavkarakter A–F. Hjelpemiddelkode **C**: bestemt, enkel kalkulator + **vedlagt formelark** (fra 2018 også et gult, stemplet A5-ark med egne håndskrevne notater). Fast instruks på hvert sett: **«Alle svar skal begrunnes; ta med nok mellomregning til at tenkemåten klart framgår.»** Bar fasit uten utledning gir ikke full uttelling. **Ingen flervalgsdel** — avkryssingsboksen «skal ha flervalgskjema» på trykk-informasjonsarket er skjemametadata og er aldri huket av / i bruk. Det rene TMA4125 V2019-settet består av **10 delpunkt som alle teller like mye**.

### Felles 4N/4D-eksamen (viktigste strukturfunn)

Fra **2018** ble Matematikk 4N (TMA4130 høst / TMA4125 vår) og Matematikk 4D (TMA4135) **felles eksamen** med samme oppgavepool. Overskriften på settene er eksplisitt «TMA4130/35 Matematikk 4N/D» eller «TMA4125/30/35 Matematikk 4N/D». De aller fleste oppgavene er **identiske** for alle kodene; kun **~1 oppgave per sett** har separate emnespesifikke varianter. Fall 2018-settet demonstrerer mekanismen rått: **Oppgave 3** finnes i to versjoner — «TMA4130 Matematikk 4N: Fouriertransformasjon» (vis skaleringsregelen `ℱ(f(at))(ω) = (1/|a|)F̂(ω/a)`) **kontra** «TMA4135 Matematikk 4D: Partiellderivert» (vis at varmekjernen `h(x,t)` løser `h_t = ½h_xx`). Kont 2019 O2 har tilsvarende «Problem for 4N: Finn Fouriertransformasjonen til `f(x)=6x·e^{−5x²}`». Dette er nøyaktig den samme poolen som analysen for **tma4135** dekker.

### Formathistorikk

| Periode | Emnekode(r) | Struktur | Hjelpemidler (kode C) |
|---|---|---|---|
| ~2003–2017 | **Ren 4N/4D** (TMA4130/35, `tma4135_*`) | 6–8 hovedoppgaver med deloppgaver; deloppgavene teller likt; ingen eksplisitt poengvekting | Kalkulator + **Rottmann** formelsamling; **formelark vedlagt** |
| 2018 | TMA4130/35 (**felles 4N/4D**) | 9 oppgaver med **eksplisitt poengvekting, sum 100**; Oppgave 3 i egne 4N-/4D-varianter | Kalkulator + **gult, stemplet A5-ark** (Rottmann ute); transformtabell vedlagt |
| 2019 (V, TMA4125) | TMA4125 | **10 delpunkt som teller likt** | A5-ark + **vedlagt formelark** (transformtabeller + full numerikk-side) |
| 2022 (V, TMA4125) | TMA4125 | 10 poengvektede oppgaver, **sum 100**; DFT + Ralston-RK inne | A5-ark + vedlagt formelark |
| 2023 (Aug) | TMA4125/30/35 | 10 oppgaver; **karakterskala i prosent** | A5-ark + vedlagt formelark |
| 2025 (H) | TMA4130/35 | 10 poengvektede oppgaver | A5-ark + vedlagt formelark |

### Konstanter på tvers av alle år
- **6–10 oppgaver, 4 timer, kode C, ingen flervalg.** Hvert sett dekker bredden: Laplace + Fourier + separasjon av variable + en samling numeriske metoder.
- **Formelarket er alltid tilgjengelig** (se del 6): Laplace-tabell, Fourier-transform-tabell, trigonometriske identiteter, delvis-integrasjon-reduksjonsformler, og en numerikk-side (Newton, Lagrange, interpolasjonsfeil, trapes/Simpson med feilledd, Jacobi/Gauss–Seidel, Euler/Heun/RK4/bakover-Euler, differansekvotienter, Crank–Nicolson).
- **Løsningsforslagene viser ofte flere gyldige metoder** eksplisitt (delbrøk vs. kvadratkomplettering; Lagrange vs. Newton; reell vs. kompleks delbrøk) og premierer alle. Karakterskalaen er prosentbasert (V2022: A 100–89, B 88–77, C 76–65, D 64–53, E 52–41, F ≤40).
- **Delpunktene er ofte kjedet:** et senere delpunkt bruker resultatet fra et tidligere (V2019: cosinusrekken fra O2b gjenbrukes som Fourier-matching i separasjon-av-variable-oppgaven O4).

### 4N-signaturen (det emnespesifikke)
De 4N-spesifikke variantene (der de finnes) er **numerikk-/transformtunge**:
- **Fourier-transform-utregning** som egen oppgave (V2019 O3: FT av en stykkevis konstant boks-funksjon; fall18 O3-4N: skaleringsregelen; Kont19 O2-4N: FT av `x·e^{−ax²}`).
- **Avrundings- vs. avkuttingsfeil-analyse** (V2019 O6: sentraldifferansen `(f(x+h)−f(x−h))/2h` mot foroverdifferansen `(f(x+h)−f(x))/h`; poenget er at `h` for lite gir avrundingsdominans — foroverdifferansen klarer ikke bedre presisjon enn ~9 desimaler).

De 4D-spesifikke variantene er derimot **PDE-verifikasjon** (vis at en gitt funksjon løser varme-/bølgeligningen) eller **flervariabel-gradient/retningsderivert**. En 4N-rettet bok må dekke alle fellestemaene fullt ut, med **ekstra vekt på Fourier-transform-utregninger og feilanalyse**.

### Nye sjangre 2022→ (følg med)
1. **Diskret Fourier-transform (DFT)** som egen oppgave (V2022 O7; Kont23 O3) — les av koeffisienter for båndbegrenset signal, avgjør om invers-DFT er reell, bruk syklisk skift/Fourier-shift.
2. **Innfelte / navngitte RK-metoder** (V2022 O3: Ralston-metode; les Butcher-tabell, tell steg, verifiser orden og stabilitet).
3. **Gauss–Legendre-kvadratur** med presisjonsgrad `2N−1` (V2019 O7).
4. **Kode-forståelse / feilsøking** (Kont23 O6; V2019 O8/O9 ber om å skrive/lese Matlab-/Python-kode).

### Nedlagt-status og etterfølgere
TMA4125 er **NEDLAGT** — NTNUs emneside oppgir eksplisitt at det ikke lenger tilbys undervisning i emnet. Det lever videre kun som **eksamens-/studiepoenggrunnlag**. Studiepoengreduksjonstabellen peker fra høsten 2026 på flere nyere emner som deler pensumflate: **TMA4420, TMA4430, TMA4431, TMA4432**. TMA4125 delte samtidig oppgavepool med **TMA4130** (Matematikk 4N, høstvariant) og **TMA4135** (Matematikk 4D) gjennom hele felles-eksamen-perioden.

---

## 2. Temafrekvens-tabell

Celleverdi = antall karakteriserte sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på et representativt utvalg av den felles 4N/4D-poolen: **Epoke A** (~2003–2017, rene 4N/4D-sett, `tma4135_*`), **Epoke B** (2018–2019, første felles-eksamener inkl. TMA4125 V2019 + fall18 + Kont19), **Epoke C** (2022–2025, moderne poengvektede sett inkl. TMA4125 V2022, Aug2023, H2025). Kolonnene teller relativ tetthet, ikke absolutt antall — poolen er stor. Gjenganger-scoren speiler den tverrgående sannsynligheten.

| Tema | A | B | C | **Gjenganger-score** |
|---|:---:|:---:|:---:|---|
| **Laplace-transform** (ODE/IVP, integro-diff./konvolusjon, Heaviside/Dirac, invers) | ●● | ●● | ●● | **~100 %** |
| **Fourier-rekker** (sinus/cosinus/reell/kompleks) | ●● | ●● | ●● | **~100 %** |
| **Separasjon av variable** (varme-/bølge-/Laplace-likning) | ●● | ●● | ●● | **~92 %** |
| **Numerisk ODE-løser** (Euler/Heun/RK, ett skritt / orden / stabilitet) | ●● | ●● | ●● | **~90 %** |
| **Fourier-transform** (utregning eller for å løse likning/PDE) — **4N-signatur** | ●● | ●● | ●● | **~85 %** |
| **Differansemetode for PDE/RVP** (eksplisitt, Crank–Nicolson, stabilitet, kodefeil) | ●● | ●● | ●○ | **~85 %** |
| **Interpolasjon** (Lagrange / Newtons dividerte differanser) | ●○ | ●● | ●● | **~70 %** |
| **Numerisk integrasjon** (Simpson/trapes/Gauss–Legendre) + **presisjonsgrad** | ●○ | ●● | ●○ | **~62 %** |
| **Bølgeligning / d'Alembert / verifiser PDE-løsning** (ofte 4D-splitt) | ●○ | ●● | ●○ | **~60 %** |
| **Fikspunktiterasjon / kontraksjon** (+ a-priori-estimat) | ●○ | ●○ | ●● | **~50 %** |
| **Rotsøking: Newtons metode** | ●○ | ●○ | ●● | **~40 %** |
| **Butcher-tabell + ordensbetingelser** (les fra kode, verifiser orden) | ○ | ●○ | ●○ | **~35 %** |
| **Stabilitetsfunksjon `R(z)` / stabilitetsintervall `h≤2/|λ|`** | ●○ | ●○ | ●○ | **~30 %** |
| **Avrundings- vs. avkuttingsfeil / numerisk derivasjon** — **4N-signatur** | ●○ | ●○ | ●○ | **~30 %** |
| **DFT / diskret Fourier-transform** | ○ | ○ | ●● | **~25 %** (kun 2022→) |
| **Bakover-Euler (implisitt) for stive problemer** | ●○ | ●○ | ●○ | **~25 %** |
| **Biseksjon (halveringsmetoden)** | ○ | ●○ | ●○ | **~20 %** |
| **Jacobi / Gauss–Seidel-iterasjon** | ●● | ○ | ○ | **~15 %** (utdøende, eldre) |
| **LU / Doolittle-faktorisering** | ●○ | ○ | ○ | **~10 %** (utdøende, eldre) |
| **Sekantmetoden** | ●○ | ○ | ○ | **~8 %** (utdøende) |
| **Flervariabel gradient / retningsderivert** (4D-innslag) | ●○ | ●○ | ○ | **~15 %** |

(●● = svært vanlig i epoken, ●○ = forekommer, ○ = fraværende/sjelden.)

**Viktigste funn:**
1. **De fire søylene (Laplace, Fourier, separasjon av variable, numeriske metoder) er praktisk talt garantert hvert år.** En bok som behersker disse perfekt dekker >80 % av poengene på et typisk sett.
2. **Numerikk-blokken er 4N-tyngdepunktet — bredest og tyngst å pugge:** interpolasjon, numerisk integrasjon med presisjonsgrad, ODE-løsere (Euler/Heun/RK med Butcher-tabell og ordenskontroll), differansemetoder for PDE (eksplisitt + Crank–Nicolson), rotsøking (Newton/fikspunkt/biseksjon) og — i eldre sett — lineæralgebra-numerikk (LU/Doolittle, Jacobi/Gauss–Seidel). Enkeltmetodene har lav-til-middels frekvens hver for seg, men **minst 3–4 numeriske sjangre opptrer på hvert sett**.
3. **Fourier-transform-utregninger og feilanalyse er 4N-signaturen** i splitt-oppgavene (fall18 O3-4N, Kont19 O2-4N, V2019 O3+O6). Der 4D får PDE-verifikasjon eller gradient, får 4N en FT-beregning eller avrundings-/avkuttingsavveining.
4. **Nye sjangre (DFT, navngitte/innfelte RK-par, Gauss–Legendre)** er konsentrert i 2022→. De må dekkes som primærmål for kommende sett.
5. **Lineæralgebra-numerikk (LU, Jacobi/Gauss–Seidel) og sekantmetoden er «utdøende»** — de forekommer i de eldre rene 4N/4D-settene, ikke i moderne felles-eksamener. Behold dem som lav-prioritert beredskap; de står fortsatt på formelarket.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene der de finnes).

### A. Laplace-transform for ODE / IVP
- **Krav:** Transformér likningen, sett inn initialbetingelsene (`ℒ(y′)=sY−y(0)`), løs algebraisk for `Y(s)`, invers-transformér via tabell. Faste grep: **delbrøkoppspalting** og **kvadratkomplettering** for å treffe tabellformen `ω/((s−a)²+ω²)` (førsteforskyvningsteoremet gir `e^{at}`-faktoren). Delbrøk-koeffisienter finnes ved innsetting av spesielle `s`-verdier / cover-up eller ved å løse et lineært system — begge godtas.
- **Frekvens:** del av ~100 %-Laplace-blokken; nesten alltid O1 eller O4.
- **Omskrevet eksempel:** «Løs `y‴ − y′ = 1` med `y(0)=y′(0)=0, y″(0)=1` ved hjelp av Laplace-transform.» (Aug2023 O4)

### B. Laplace for integro-differensiallikning / konvolusjon
- **Krav:** Gjenkjenn konvolusjonen `∫₀ᵗ g(τ)y(t−τ)dτ = (g∗y)(t)`; konvolusjonsteoremet gir `ℒ(g∗y)=G(s)·Y(s)`. Løs for `Y(s)`, invers-transformér (faktoriser nevneren, delbrøk).
- **Frekvens:** en fast Laplace-variant.
- **Omskrevet eksempel:** «Løs `y′(t) − 5·(y∗cos)(t) = 8 sin t`, `y(0)=…` med Laplace-transform.» (Aug2023 O5)

### C. Laplace med Heaviside-/Dirac-ledd
- **Krav:** Skriv trappefunksjon-tvunget `y(t)=u(t−a)f(t−a)` via **andreforskyvningsteoremet** `ℒ(f(t−a)u(t−a))=e^{−as}F(s)` — **finn `f(t)` først**, deretter forskyv. Dirac-delta: `ℒ(δ(t−a))=e^{−as}`. Tolk resultatet fysisk.
- **Frekvens:** flere sett.
- **Omskrevet eksempel:** «Løs `y″+y = δ(t−π)+δ(t−2π)`, `y(0)=y′(0)=0`, tolk løsningen som to impulser der den andre stopper svingningen.» (TMA4125 V2019 O1)

### D. Fourier-rekker (sinus/cosinus/reell/kompleks)
- **Krav:** Utnytt symmetri **før** du regner: odde funksjon → ren sinusrekke (`aₙ=0`), like funksjon → ren cosinusrekke (`bₙ=0`). Koeffisienter ved integrasjon, nesten alltid **delvis integrasjon**. Ved diskontinuitet konvergerer rekka til **gjennomsnittet `½(f(x⁺)+f(x⁻))`**. **Kompleks Fourier-rekke** `Σ cₙ e^{inx}` med `cₙ = (1/2π)∫f e^{−inx}dx` forekommer også — utled ortogonalitetsrelasjonen `∫e^{i(n−m)x}dx = 2π·δₙₘ` og les av `cₘ`.
- **Frekvens:** del av ~100 %-Fourier-blokken.
- **Omskrevet eksempel:** «Finn den komplekse Fourier-rekka til `f(x)=e^{−|x|}` på `[−π,π]`, og reduser den til reell cosinusform.» (TMA4125 V2019 O2)

### E. Fourier-transform (utregning) — 4N-signatur
- **Krav:** Beregn `F̂(ω)=(1/√2π)∫f(x)e^{−iωx}dx` direkte for en stykkevis konstant / eksponentiell funksjon, eller bruk tabellens Gauss-par `e^{−ax²}` + reglene `ℱ(f′)=iω·f̂` og skaleringsregelen `ℱ(f(at))=(1/|a|)F̂(ω/a)`. For **integrallikninger**: gjenkjenn konvolusjon, transformér til produkt, løs for `f̂`, invers-transformér.
- **Frekvens:** ~85 %; ofte selve 4N-varianten i splitt-oppgaven.
- **Omskrevet eksempel:** «Finn Fourier-transformen til boks-funksjonen `−u(x+1)+2u(x)+u(x−1)` og til `f(x)=6x·e^{−5x²}`.» (V2019 O3 / Kont19 O2-4N)

### F. Fourier-transform for å løse PDE på hele ℝ
- **Krav:** Transformér PDE-en i `x`, løs den resulterende **ODE-en i `t`** (`û(ω,t)=C(ω)e^{…}`), bestem `C(ω)` fra initialbetingelsen, invers-transformér. Konvolusjons- og deriverings-reglene brukes flittig; svaret er ofte en Gauss-/varmekjerne-konvolusjon.
- **Frekvens:** fast i splitt-settene (Kont19 O4).
- **Omskrevet eksempel:** «Bruk Fourier-transform til å løse `u_t = u_x + u`, `x∈ℝ, t>0`.» (Kont19)

### G. Separasjon av variable (varme-/bølge-/Laplace-likning)
- **Krav (stapleoppgave, ofte 12–20 poeng):** Sett `u=F(x)G(t)`, del i to ODE-er med felles konstant `k`. Fasiten krever **eksplisitt behandling av alle tre tilfellene `k>0`, `k=0`, `k<0`** og viser at bare ett gir ikke-trivielle løsninger; egenverdiene følger av randbetingelsene. Neumann-rand (`u_x=0`) gir cosinus-egenfunksjoner. Superponér, og match initialbetingelsen ved å **lese av Fourier-koeffisienter** (trivielt når initialdata alt er en sinus-/cosinus-sum, ellers gjenbruk en Fourier-rekke fra en tidligere deloppgave). Grensen `t→∞` plukker ut den stasjonære komponenten. For ikke-homogen varmelikning: finn stasjonær `w(x)`, sett `v=u−w`.
- **Frekvens:** ~92 %. Offisiell fasit finnes.
- **Omskrevet eksempel:** «Finn alle ikke-trivielle løsninger `u=F(x)G(t)` av `u_t=u_xx`, `u_x(0,t)=u_x(π,t)=0`, `u(x,0)=e^{−x}` — bruk cosinusrekken fra Fourier-oppgaven.» (TMA4125 V2019 O4)

### H. Bølgeligning: d'Alembert / verifiser PDE-løsning (4D-signatur)
- **Krav:** To undertyper. **(1)** d'Alemberts formel `u(x,t)=½(f(x+ct)+f(x−ct)) + (1/2c)∫_{x−ct}^{x+ct}g(s)ds` for initialverdiproblem. **(2)** **Verifiser ved direkte innsetting** at en oppgitt `u(x,t)` løser bølge-/varmeligningen — regn `u_xx`, `u_tt`/`u_t` og vis likhet (typisk 4D-splitt: fall18 4D om varmekjernen). NB: dette er 4D-varianten; 4N får normalt en FT-oppgave i stedet.
- **Frekvens:** ~60 %.

### I. Interpolasjon (Lagrange / Newton)
- **Krav:** Fasiten aksepterer **eksplisitt enten Lagrange eller Newtons dividerte differanser**. Lagrange: kardinalfunksjoner `lₖ(x)=Πⱼ≠ₖ(x−xⱼ)/(xₖ−xⱼ)`. Newton: differansetabell + `p(x)=f₀+(x−x₀)f[x₀,x₁]+…`. **Entydighet:** `p−q` har `n+1` nullpunkter men grad `≤n`, altså `p=q` (V2019 O5). Symmetriargument for at et polynom er odde/like uten å regne det. Interpolasjonsfeil-formelen `Π(x−xₖ)·f^{(n+1)}(ξ)/(n+1)!` fra formelarket.
- **Frekvens:** ~70 %.
- **Omskrevet eksempel:** «Finn interpolasjonspolynomet av minste grad for de gitte punktene på både Lagrange- og Newton-form, og forklar hvorfor det er entydig.» (H2025 O2)

### J. Numerisk integrasjon + presisjonsgrad
- **Krav:** Simpsons formel `(h/3)[f₀+4f₁+2f₂+…+fₙ]`, trapesregelen, sammensatte varianter, og **Gauss–Legendre-kvadratur** (`n+1`-punkts regel er eksakt for grad `2n+1`; transformér til `[−1,1]`). **Presisjonsgrad** bestemmes ved å teste formelen på `xⁿ` til den feiler. Feilleddene (`h²`-trapes / `h⁴`-Simpson) fra formelarket brukes til å velge `h`.
- **Frekvens:** ~62 %.
- **Omskrevet eksempel:** «Bruk at 5-punkts Gauss–Legendre er eksakt for grad 9 til å regne `∫₋₁¹(x⁸+x⁶)dx` uten å evaluere reglen.» (TMA4125 V2019 O7)

### K. Fikspunktiterasjon / kontraksjon
- **Krav:** Skriv `x=g(x)`. For konvergens må **begge** fikspunktvilkårene vises: **(i)** `|g′(x)|≤L<1` på intervallet, **(ii)** `g` **avbilder intervallet inn i seg selv** (`g(I)⊆I`). Bruk **a-priori-estimatet** `|x_{k+1}−r| ≤ L^{k+1}/(1−L)·|g(x₀)−x₀|` til å regne nødvendig antall iterasjoner.
- **Frekvens:** ~50 %. Offisiell fasit finnes.
- **Omskrevet eksempel:** «Vis at `x=sin x` gir en konvergent fikspunktiterasjon mot roten `r` for enhver `x₀`, og bruk a-priori-estimatet.» (Aug2023 O1)

### L. Rotsøking: Newtons metode og biseksjon
- **Krav:** **Newton** for skalarlikning: vis **entydig rot** via monoton `f` + fortegnsskift + mellomverdisetningen, deretter **én iterasjon** `x₁=x₀−f(x₀)/f′(x₀)`. Newton for system: `x_{k+1}=x_k−J_F(x_k)⁻¹F(x_k)`. **Biseksjon:** antall skritt for absolutt feil `≤tol` fra `k=log₂((b−a)/(2·tol))`.
- **Frekvens:** Newton ~40 %, biseksjon ~20 %.
- **Omskrevet eksempel:** «For `x₀=e²`, utfør én fikspunkt- og én Newton-iterasjon for likningen.» (H2025 O2)

### M. Numeriske ODE-løsere: Euler / Heun / Runge–Kutta
- **Krav:** **Ett skritt for hånd** med Euler (`y_{n+1}=y_n+hf`), forbedret Euler/Heun (`y_{n+1}=y_n+½h(k₁+k₂)`) eller klassisk RK4. **Les/skriv Butcher-tabell** (også fra Python/Matlab-kode) og **verifiser ordenen** rad for rad til én ordensbetingelse feiler. **Navngitte metoder** dukker opp med utdelt Butcher-tabell: tell steg, avgjør orden, analyser stabilitet (V2022 O3 Ralston). **Bakover-Euler** (implisitt) for stive problemer (eldre sett, k19).
- **Frekvens:** ~90 % (ODE-løser generelt).
- **Omskrevet eksempel:** «Ralstons metode er gitt ved følgende Butcher-tabell. Hvor mange steg har den? Hva er ordenen? For hvilke `h` er den stabil på `y′=λy`?» (TMA4125 V2022 O3)

### N. Stabilitetsfunksjon `R(z)` og stabilitetsintervall
- **Krav:** Bruk metoden på testlikningen `y′=λy`; `y_{n+1}=R(z)y_n` med `z=λh`. Euler: `R(z)=1+z` → stabilt for `−2≤z≤0` → `h≤2/|λ|`. Vis eksplisitt at `yₙ=(1+zh)ⁿ` er en geometrisk følge som konvergerer mot 0 iff `|R(z)|<1`.
- **Frekvens:** ~30 %.
- **Omskrevet eksempel:** «Vis at eksplisitt Euler på `y′=−3y` gir `yₙ=(1−3h)ⁿ` og er stabil for `h∈(0,⅔)`.» (TMA4125 V2019 O8)

### O. Differansemetode for PDE / randverdiproblem
- **Krav:** Sentraldifferanse for `u_xx` (`(U_{i+1}−2U_i+U_{i−1})/h²`) og `u_x`. **Eksplisitt (forward Euler)** skjema for varmelikningen (`U_i^{n+1}=U_i^n+r(…)`, `r=k/h²`), regn et konkret gitterpunkt / skriv fullstendig algoritme. **Crank–Nicolson** (implisitt, tridiagonalt system). **Randverdiproblem** `u″+q(x)u=r(x)`: sett opp `AU=b`; Neumann-rand med fiktiv node. **Stabilitet** for eksplisitt skjema krever `r≤½` (fasit peker eksplisitt på at `r=1/h>0.5` gir ustabilitet). **Kodeforståelse:** skriv/les Matlab-/Python-løkke.
- **Frekvens:** ~85 %.
- **Omskrevet eksempel:** «Skriv en fullstendig algoritme (gjerne som kode) som løser varmelikningen med et eksplisitt skjema, foroverdifferanse i tid og sentraldifferanse i rom; forklar hvorfor `r=1/h` gir ustabilitet.» (Kont19 O9 / V2019 O9)

### P. Avkuttingsfeil via Taylor + avrundings-/avkuttingsavveining (4N-signatur)
- **Krav:** Vis at sentraldifferansen `(f(x+h)−f(x−h))/2h` er `O(h²)` ved Taylor-utvikling, mot foroverdifferansen `(f(x+h)−f(x))/h` som er `O(h)`. Balansér **avrundingsfeil `O(ε/h)`** mot **avkuttingsfeil `O(hᵖ)`** for optimal `h` — pek på at for lite `h` gir avrundingsdominans (foroverdifferansen når ikke bedre enn ~9 desimaler).
- **Frekvens:** ~30 % — typisk 4N-kortsvar.
- **Omskrevet eksempel:** «Velg en differansekvotient og en `h` som gir best mulig numerisk tilnærming til `f′(x)`, og forklar hvorfor mindre `h` ikke hjelper.» (TMA4125 V2019 O6)

### Q. DFT / diskret Fourier-transform (ny fra 2022)
- **Krav:** `f̂ = F_N f` med `c_k=(1/N)Σ f_j w^{−jk}`, `w=e^{2πi/N}`. Les av koeffisienter for båndbegrenset signal (aliasing-lemma); avgjør om et invers-DFT-signal er reelt/cosinus; bruk syklisk skift (Fourier-shift `c̃_j=w^j c_j`). Fasiten godtar flere normeringskonvensjoner (fysisk `1/N` vs. unitær `1/√N`) så lenge de er konsistente.
- **Frekvens:** ~25 % (kun 2022→).
- **Omskrevet eksempel:** «For signalet `f=(½,1,½,0)` regn DFT-en; er invers-DFT-en av `ĝ=(0,i,0,0,0,0,0,−i)` reell?» (V2022 O7 / Aug2023 O3)

### R. Lineæralgebra-numerikk (utdøende)
- **Krav:** **LU-faktorisering med Doolittles metode** (ener på `L`-diagonalen), deretter `Ly=b` så `Ux=y`. **Jacobi / Gauss–Seidel:** omordne til diagonaldominans først (fasiten påpeker at `a₃₃=0` blokkerer Jacobi til systemet omordnes), iterér.
- **Frekvens:** ~10–15 % — kun eldre rene 4N/4D-sett, men står på formelarket.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett. Ubegrunnet svar gir ikke full uttelling selv om det er riktig.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «fikspunktteoremet», «andreforskyvningsteoremet», «konvolusjonsteoremet», «mellomverdisetningen», «d'Alemberts formel», «konvergensteoremet for Fourier-rekker». Fasiten skriver dem ut.
3. **Føringsstandard:** transformoppslag markeres («fra tabellen vedlagt eksamensoppgavene …»); delbrøk-/kvadratkompletterings-steg vises; svar oppgis som **eksakt uttrykk** der mulig, ellers med tallverdi og nok siffer.
4. **Delpunktgjenbruk er designet inn:** en tidligere utregnet Fourier-rekke gjenbrukes som Fourier-matching i separasjon-av-variable-oppgaven; «bruk resultatet fra a) i c)». Å se koblingen premieres.
5. **Poeng og karakter:** fra 2018 eksplisitt poengvekting (sum 100) med **prosentbasert karakterskala** (V2022: A 100–89, B 88–77, C 76–65, D 64–53, E 52–41, F ≤40). V2019 (rent TMA4125) har 10 delpunkt som teller likt.
6. **Feilforplantning tolereres:** får en student feil mellomverdi tidlig men regner **riktig videre**, gis full uttelling i senere delpunkt.
7. **Flere metoder honoreres eksplisitt:** delbrøk vs. kvadratkomplettering; reell vs. kompleks delbrøk; Lagrange vs. Newton; cover-up vs. lineært system for delbrøk-koeffisienter; flere DFT-normeringskonvensjoner.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på de mekaniske delpunktene: transformér ODE-en og løs for `Y(s)`, sett opp Fourier-koeffisientintegralet, sett `u=FG` og få de to ODE-ene, ett Euler-/RK-skritt for hånd, sett opp differanseskjemaet.
- **Midtsjiktet** behersker i tillegg: invers Laplace via delbrøk **og** kvadratkomplettering, delvis integrasjon for `x²·sin`-koeffisienter, **alle tre `k`-tilfellene** i separasjon av variable, presisjonsgrad ved å teste `xⁿ`, a-priori-iterasjonsestimatet, direkte FT-utregning.
- **Toppsjiktet** kjennetegnes av: (i) korrekt **andreforskyvningsteorem** for Heaviside (finn `f` først, forskyv sist); (ii) **begge** fikspunktvilkårene (`|g′|<1` **og** `g(I)⊆I`); (iii) korrekt **ordensverifikasjon rad-for-rad** i Butcher-tabellen; (iv) korrekt **stabilitetsanalyse** (`R(z)`, `h≤2/|λ|`, `r≤½`); (v) korrekt **avrundings-/avkuttingsavveining** og valg av optimal `h` (4N-signatur); (vi) korrekt **DFT-normering** og aliasing-argument; (vii) å se og bruke **delpunkt-koblingene**.

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Kun ett av fikspunktvilkårene:** å sjekke `|g′|<1` uten å vise at `g` avbilder intervallet inn i seg selv (eller motsatt). Fasiten viser alltid begge.
2. **Feil forskyvningsteorem for Heaviside-ledd:** å bruke første i stedet for andre forskyvningsteorem, eller å glemme å skrive `y(t)=u(t−a)f(t−a)` etter å ha funnet `f`.
3. **Hoppe over ett `k`-tilfelle i separasjon av variable:** å ikke vise at `k>0` og `k=0` bare gir triviell (eller ufysisk) løsning.
4. **Glemt midling i diskontinuitetspunkt:** Fourier-rekka konvergerer til `½(f(x⁺)+f(x⁻))`, ikke funksjonsverdien.
5. **Feil fortegn/plassering i delbrøk**, eller å glemme kvadratkomplettering som gjør en irredusibel andregradsnevner til tabellform.
6. **Feil FT-normeringsfaktor** (`1/√2π` vs. andre konvensjoner) eller feil i det komplekse integralet ved direkte utregning — den vanligste 4N-tabben.
7. **Feil avrundings-/avkuttingsanalyse:** å tro at stadig mindre `h` alltid gir bedre `f′`-tilnærming (avrundingsfeilen `O(ε/h)` overtar).
8. **Ufullstendig ordenssjekk i RK:** å stoppe før første ordensbetingelse feiler, eller å feillese Butcher-tabellen fra koden.
9. **Feil implementering av rand-/initialbetingelse i differanseskjema:** feil `r`-faktor (`r=k/h²`), å glemme stabilitetsvilkåret `r≤½`, eller feil i den fullstendige algoritmen.
10. **Presisjonsgrad feilbestemt:** å stoppe testingen på `xⁿ` for tidlig, eller å forveksle «eksakt for grad `2n+1`» for Gauss.
11. **Feil i a-priori-iterasjonsestimatet:** feil eksponent (`L^{k+1}` vs. `L^k`), eller å runde antall iterasjoner nedover i stedet for oppover.
12. **DFT-normering / aliasing:** feil `1/N`-faktor eller å ikke gjenkjenne at et båndbegrenset signal lar koeffisientene leses av direkte.
13. **Tidsfelle:** separasjon-av-variable-oppgaven og den store differanse-/PDE-oppgaven er tunge; å bruke for lang tid tidlig stjeler fra de dyre sluttoppgavene.

---

## 6. Teorem-, notasjons- og formelapparat

### Utdelt formelark (må kunne brukes, ikke pugges)
Formelarket er vedlagt hvert sett (2018-utgaven kortere; 2019+ full). Det inneholder:

**Laplace-transform-tabell:** `cos ωt`, `sin ωt`, `cosh ωt`, `sinh ωt`, `tⁿ` (`n!/s^{n+1}`), `e^{at}` (`1/(s−a)`), derivasjonsregel, **begge forskyvningsteoremene** (`f(t−a)u(t−a) ↔ e^{−as}F(s)`), `δ(t−a) ↔ e^{−as}`, konvolusjonsteoremet.

**Fourier-transform-tabell** (med `f(x)=(1/√2π)∫f̂ e^{iωx}dω`): Gauss `e^{−ax²} ↔ (1/√2a)e^{−ω²/4a}`, `e^{−a|x|}`, `1/(x²+a²)`, boks-funksjon `1_{|x|<a} ↔ √(2/π)·sin(ωa)/ω`, derivasjons- og skaleringsregel.

**Fourier-rekke-formler** (2π-periodisk `f`): reelle `aₙ/bₙ`-koeffisienter, kompleks `cₙ`, konvergensteoremet.

**Trigonometriske identiteter** (produkt-til-sum, dobbel vinkel) og **delvis-integrasjon-reduksjonsformler** for `∫xⁿ cos ax dx` og `∫xⁿ sin ax dx`.

**Numerikk-side (2019+):**
- Newtons metode (skalar + system med Jacobi `J_F`).
- Lagrange-interpolasjon + **interpolasjonsfeil** `ε_n(x)=Π(x−xₖ)·f^{(n+1)}(ξ)/(n+1)!`.
- Newtons dividerte differanser.
- **Trapesregel + feil** `|ε|≤((b−a)/12)h²·max|f″|`.
- **Simpsons regel + feil** `|ε|≤((b−a)/180)h⁴·max|f⁴|`.
- Jacobi- og Gauss–Seidel-iterasjon.
- Euler, forbedret Euler/Heun, **klassisk RK4**, bakover-Euler.
- **Differansekvotienter** for `u_x` og `u_xx`.
- **Crank–Nicolson** for varmelikningen, `r=k/h²`.

> **Merk:** Rottmann var tillatt til og med 2017; fra 2018 er det bare **ett gult, stemplet A5-ark med egne håndskrevne notater** i tillegg til det vedlagte formelarket. Boken bør trene studenten på å **finne og bruke** formlene fra arket, ikke pugge dem — og lage et mønster-A5-ark som del av eksamensforberedelsen. **DFT-formler og navngitte RK-tabeller** deles ut i oppgaveteksten i de nyere settene.

### Må beherskes aktivt (kunne anvende og navngi)
- **Laplace:** transform/invers, derivasjonsregel `ℒ(y')=sY−y(0)`, **begge forskyvningsteoremene**, konvolusjonsteoremet, Dirac/Heaviside, delbrøk + kvadratkomplettering.
- **Fourier:** reelle sinus-/cosinusrekker, kompleks Fourier-rekke (utled `cₙ` fra ortogonalitet), symmetriutnyttelse, konvergens til `½(f⁺+f⁻)`, **Fourier-transform ved direkte integrasjon + derivasjons-/skalerings-/konvolusjonsregel (4N-kjerne)**, DFT (`w=e^{2πi/N}`, aliasing, Fourier-shift).
- **PDE:** separasjon av variable (alle tre `k`-tilfellene), egenverdi/egenfunksjon fra randbetingelser (Dirichlet → sinus, Neumann → cosinus), superposisjon + Fourier-matching, ikke-homogen reduksjon via stasjonær løsning, d'Alembert, Fourier-transform-metoden.
- **Numerikk (4N-tyngdepunkt):** Lagrange/Newton-interpolasjon + entydighet + feil; trapes/Simpson/Gauss–Legendre + presisjonsgrad; Newton/fikspunkt/biseksjon/sekant med konvergensvilkår og a-priori-estimat; Euler/Heun/RK4 + Butcher-tabell + ordensbetingelser + navngitte metoder + steglengde; stabilitetsfunksjon `R(z)`, `h≤2/|λ|`; differansemetoder (eksplisitt + Crank–Nicolson) + fiktiv rand + stabilitet `r≤½` + kodealgoritme; **avkuttingsfeil via Taylor + avrundings-/avkuttingsavveining og optimal `h` (4N-signatur)**. **Beredskap:** LU/Doolittle, Jacobi/Gauss–Seidel.

### Notasjonskonvensjoner boken bør speile
`ℒ`, `F(s)`, `Y(s)`; `u(t−a)` Heaviside, `δ` Dirac; `f̂(ω)`/`F(u)` Fourier-transform, `cₙ`/`aₙ`/`bₙ` Fourier-koeffisienter; `w=e^{2πi/N}` DFT; `u=F(x)G(t)`, separasjonskonstant `k`; Butcher-tabell `c | A ; b`; `R(z)`, `z=λh`; `r=k/h²`; `U_i^n≈u(x_i,t_n)`; eksakte svar der mulig.

---

## 7. Prognose og prioritering

> TMA4125 er blant de mest forutsigbare emnene i arkivet: samme fire søyler hvert år, stabil oppgavetradisjon, felles pool med 4D/4N-varianter. Prognosen vekter de faste søylene tyngst, uthever **numerikk-bredden som 4N-tyngdepunktet**, og legger de nye 2022→-sjangrene (DFT, navngitte/innfelte RK-par, Gauss–Legendre) som obligatorisk primærmål.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Laplace-transform** (ODE/IVP, integro-diff./konvolusjon, Heaviside/Dirac) — ~100 %. Delbrøk + kvadratkomplettering + begge forskyvningsteoremene.
2. **Fourier-rekker** (sinus/cosinus/kompleks) — ~100 %. Symmetri, delvis integrasjon, midling i diskontinuiteter, utledning av `cₙ`.
3. **Fourier-transform** (direkte utregning + for å løse PDE på ℝ) — ~85 %. **4N-signatur; regn full FT for hånd.**
4. **Separasjon av variable** for varme-/bølge-/Laplace-likning — ~92 %. Alle tre `k`-tilfellene, Dirichlet/Neumann, superposisjon, Fourier-matching.
5. **Numeriske ODE-løsere** — ~90 %. Ett skritt for hånd (Euler/Heun/RK4), Butcher-tabell + ordensverifikasjon, stabilitet `R(z)`/`h≤2/|λ|`.
6. **Differansemetoder for PDE/RVP** — ~85 %. Eksplisitt + Crank–Nicolson, `r=k/h²`, stabilitet `r≤½`, fullstendig algoritme/kode.

### Nivå 2 — må kunne (bredde + karakterskiller)
7. **Interpolasjon** (Lagrange + Newton + entydighet) — ~70 %.
8. **Numerisk integrasjon + presisjonsgrad** (Simpson/trapes/Gauss–Legendre) — ~62 %.
9. **Fikspunktiterasjon / kontraksjon** med a-priori-estimat — ~50 %.
10. **Rotsøking** (Newton, biseksjon) — ~40 % / ~20 %.
11. **Avrundings- vs. avkuttingsfeil** (optimal `h` via Taylor) — ~30 %, **4N-signatur, teoritungt kortsvar.**
12. **DFT / diskret Fourier-transform** — ~25 %, men **fast i settene fra 2022**; dekk grundig som ny primærsjanger.
13. **Bakover-Euler for stive problemer** og **navngitte/innfelte RK-par** — dekk som beredskap.

### Nivå 3 — bør dekkes (lav frekvens / beredskap / pensumkrav)
14. **LU/Doolittle, Jacobi/Gauss–Seidel, sekantmetoden** — kun i eldre rene 4N/4D-sett, men står på formelarket; hold som beredskap.
15. **Flervariabel gradient/retningsderivert** — sporadisk 4D-innslag; kort dekning.

### Konkret prognose for et 4N-sett
Basert på den svært stabile malen: **10 poengvektede oppgaver (sum 100) eller 10 likt tellende delpunkt over 4 timer**, kode C (A5-ark + vedlagt formelark), ingen flervalg, med:
- **O1–O2:** Laplace-transform — én ren ODE/IVP (evt. Heaviside/Dirac-tvunget) og én integro-differensiallikning/konvolusjon.
- **O3:** Fourier-rekke (reell/kompleks) — evt. med Fourier-matching som gjenbrukes senere.
- **O4:** **Fourier-transform-utregning** (4N-signatur) eller DFT.
- **O5–O6:** separasjon av variable for varmelikningen (+ Fourier-matching), og Fourier-transform for en PDE på ℝ (eller d'Alembert i 4D-varianten).
- **O7–O10:** numerikk-blokken — interpolasjon (Lagrange/Newton), numerisk integrasjon + presisjonsgrad, fikspunkt/Newton/biseksjon med konvergensvilkår, Runge–Kutta (Butcher + orden, navngitt/innfelt par), en differansemetode for PDE/RVP (eksplisitt + `r≤½`, ofte med kode å skrive/lese), og et **avrundings-/avkuttingsfeil-kortsvar** (4N-signatur).

**Usikkerhetsmoment:** DFT, navngitte RK-metoder og Gauss–Legendre er konsentrert i settene fra 2022. Ettersom emnet er **nedlagt**, kommer det trolig ikke flere ordinære sett — de siste settene fra den felles poolen (H2025 finnes i arkivet) er beste rettesnor.

### Arbeidsdeling (gjenbruk fra beslektede bøker)
TMA4125 (Matematikk 4N) er **nesten fullstendig sammenfallende med `tma4135` (Matematikk 4D)** — samme oppgavepool, felles eksamen fra 2018. Den eneste systematiske forskjellen ligger i den emnespesifikke splitt-oppgaven: **4N legger mer vekt på numerikk** (avrundings-/avkuttingsfeil, direkte Fourier-transform-utregninger), mens **4D legger vekt på PDE-verifikasjon og flervariabel-gradient**.

**Anbefaling:** En TMA4125-bok bør i praksis **gjenbruke tma4135-strukturen med et forsterket numerikk-lag og 4N-etikett**, framfor å bygges helt fra bunn. Konkret:
- Behold de fire søylene og hele oppgavetype-katalogen fra tma4135 uendret (de er felles).
- **Forsterk numerikk-laget:** løft Fourier-transform-utregninger (type E), avrundings-/avkuttingsfeil (type P) og differansemetode-kode (type O) fra «bredde» til «kjerne».
- **Bytt splitt-oppgaven:** der tma4135 bruker PDE-verifikasjon/gradient som den emnespesifikke varianten, bruker 4N en FT-utregning eller feilanalyse.
- **Overlapp mot beslektede bøker:** transformdelen (Laplace/Fourier) deler flate med **`tma4121`/`tma4120`**; differansemetode-delen deler flate med **`tma4212`**. Gjenbruk teori og eksempler derfra der det passer.

Gitt at TMA4125 er nedlagt, er den mest kostnadseffektive løsningen en **4N-variant/alias av tma4135** med det forsterkede numerikk-laget over — ikke en frittstående bok.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4125/` (**~116 PDF-er, ~52 løsningsforslag**), dominert av den felles 4N/4D-poolen.

**Løsningsforslag lest grundig (offisielle fasiter, prioritert de siste ~8 årene):**
- `eksamen-TMA4125-v19-BM-lf.pdf` (TMA4125 V2019 — rent 4N-sett, 10 delpunkt: Laplace/Dirac, kompleks Fourier-rekke, FT-utregning, separasjon av variable, Lagrange + entydighet, numerisk derivasjon/avrundingsfeil, Gauss–Legendre, Euler-stabilitet, Crank–Nicolson-kode).
- `TMA4125-Matematikk-4N-2022v_lf.pdf` (TMA4125 V2022 — full fasit m/karakterfordeling: interpolasjon, fikspunkt+Newton, Ralston-RK, Laplace, Fourier-rekker, Fourier-transform, DFT, varmelikning, separasjon av variable).
- `exam_fall18_tma4130_norsk.pdf` / `_english.pdf` (fall 2018 TMA4130/35 — eksplisitt 4N-/4D-splitt i O3: FT-skalering (4N) vs. varmekjerne-verifikasjon (4D)).
- `tma4125-30-35-k19-lf.pdf` (Kont 2019 TMA4125/30/35 — «Problem for 4N: FT av `6x·e^{−5x²}`», bølgeligning, FT for PDE, interpolasjon, bakover-Euler, eksplisitt differanseskjema + stabilitet).
- `tma4125-30-35-matematikk4n-d-2023s_lf_correct.pdf` (August 2023 — fikspunkt, Fourier-rekker, DFT, Laplace-ODE, konvolusjon, kodeforståelse).
- `exam_math_4n_4d_tma4130_35-20.pdf` m.fl. (Høst 2025 TMA4130/35 — Fourier-rekker, interpolasjon + entydighet, Laplace + konvolusjon).

**Eldre løsningsforslag gjennomgått for epoke-karakterisering (utvalg av `lf_tma4135_*` 2003→2016):** bl.a. `lf_tma4135_13h.pdf` (Laplace, FT-konvolusjon, Fourier-cosinusrekke, separasjon av variable m/alle `k`-tilfeller, bakover-Euler, LU, eksplisitt differanseskjema), `lf_tma4135_05h.pdf` (Fourier-konvergensteorem, separasjon av variable, Jacobi/Gauss–Seidel m/omordning, Heun for system). Bekrefter at lineæralgebra-numerikk (LU, Jacobi) og sekantmetoden er «utdøende» — kun i eldre sett.

**Merknader om kildene:**
- **Dominert av felles 4N/4D-materiale:** de fleste settene bærer koden «TMA4130/35» eller «TMA4125/30/35 Matematikk 4N/D». De reelle TMA4125-settene (V2019, V2022) er de mest presise kildene for 4N-profilen; resten deler pool med tma4135.
- **Rene skann uten tekstlag** (bl.a. `lf_tma4135_16h.pdf` og enkelte eldre `eksamen-bok_*`) lot seg ikke tekst-utvinne og er hoppet over — ingen tung OCR.
- **Ingen flervalg:** avkryssingsboksen «skal ha flervalgskjema» er skjemametadata, aldri i bruk.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og metodenavn er standard fagnotasjon.

**Forbilder:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (nesten identisk emne — direkte strukturmal) og `docs/hoyskole-boker/tma4121/EKSAMENSANALYSE.md` (arbeidsdeling-seksjonen).
