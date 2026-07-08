# Eksamensanalyse: TMA4320 Introduksjon til vitenskapelige beregninger (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **24 filer / ~15 velkarakteriserte eksamenssett** fra arkivet (V2016–V2026): skriftlige skoleeksamener med offisielle løsningsforslag lest grundig for hele perioden (V2016, K2016, V2017, K2017, V2018, K2018, V2023, K2023, V2024, V2025, V2026), og oppgavesett lest grundig for settene der løsningsforslaget er skannet/utekstbart (V2022, K2022). Det utdelte formelarket (V2025/V2026-utgavene, med Cholesky-formler, generell RK-formel og ordensbetingelser opp til orden 4) er lest. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsformuleringer. Matematiske uttrykk, metodenavn, algoritmer og teoremnavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4320 er et **implementerings- og prosjektnært numerikk-emne** hvor sluttkarakteren er **samlet vurdering: skriftlig skoleeksamen (70 %) + mappe/prosjektoppgaver (30 %)**. Prosjektdelen (typisk 3–4 Python-prosjekter gjennom semesteret) er en tredjedel av karakteren og er *ikke* en formalitet — fra 2023 og særlig 2024–2026 refererer selve skoleeksamenen **eksplisitt til prosjektene** («I prosjekt 3 …», «Programmeringsoppgaven handler om å implementere denne algoritmen», Usadel-ligningen i prosjekt 3), og forventer at studenten kan forklare hva de gjorde. Den skriftlige delen har fire tunge søyler som er praktisk talt garantert hvert år: **(1) numerisk lineær algebra** (LU/Cholesky/SVD, vektor- og matrisenormer, kondisjonstall, pivotering, tridiagonale/Hessenberg-systemer og flop-telling), **(2) numeriske metoder for ODE-er** (skriv om høyere ordens likning til system, ett skritt med Euler/Heun/RK/implisitt-RK for hånd, Butcher-tablå, ordensbetingelser, stabilitetsfunksjon `R(z)`, A-stabilitet, innfelt RK-par med steglengdekontroll, konvergens- og feilanalyse), **(3) interpolasjon** (Lagrange/Newton, interpolasjonsfeil, Chebyshev-noder) og **(4) numerisk integrasjon** (midtpunkt/trapes/Simpson/Boole, presisjonsgrad, adaptiv kvadratur, feilestimat og sammensatte varianter). Rundt disse: **rotsøking** (Newton skalar + system, biseksjon, fikspunkt/kontraksjon), **DFT/FFT**, og — nytt fra 2026 — **nevrale nettverk og fysikk-informerte nettverk (PINN)** som teorispørsmål. En **kalkulator + formelsamling/formelark** er alltid tillatt (kode B med Rottmann til og med 2018, kode C med utdelt formelark fra 2022), så eksamen tester **anvendelse, utledning og forståelse — ikke pugging**. Sensorene liker **for-hånd-utregninger med små tall** (2×2/3×3-matriser, ett–to skritt), **bevis av kjente teoremer** (interpolasjonsentydighet, fikspunktteoremet, global feil = O(hᵖ)) og **flop-/ordensanalyse**. Den overordnede utviklingen: fra et rent «regn-for-hånd»-emne (2016–2018) til et emne som i økende grad ber studenten **koble skriftlig teori til egen prosjektkode** og dekke moderne temaer (spektralmetoder, maskinlæring).

---

## 1. Eksamensform og utvikling

**Samlet vurdering = skriftlig skoleeksamen (70 %) + mappe/prosjektoppgaver (30 %).** Bokstavkarakter A–F. Skriftlig del er **4 timer** (typisk 09:00–13:00; V2026 kjørte 15:00–19:00). Hjelpemiddelkode **B** (Rottmann matematisk formelsamling + bestemt enkel kalkulator) til og med 2018; fra 2022 **kode C** med **vedlagt formelark** i tillegg til kalkulator (og fra V2026 igjen Rottmann + formelark). Fra 2022 gjennomføres eksamen digitalt i **Inspera** med **håndtegningsark** for utregninger.

### Prosjekt-/mappedelen (30 %) — dette er halve identiteten til emnet

Dette er det TMA4320-distinkte og skiller emnet skarpt fra det rene teori-numerikk-emnet TMA4135 (Matematikk 4N/4D). Prosjektdelen består typisk av **tre til fire større Python-prosjekter** levert gjennom semesteret, ofte tverrfaglige og anvendte (biofysikk, mekanikk, kondensert-materie-fysikk, maskinlæring). Konkrete prosjekter som er navngitt i eksamensarkivet:
- **Prosjekt 2:** Euler–Bernoulli-bjelke (`q⁗(x)=0` med randbetingelser) — refereres i K2017 O2.
- **Prosjekt 3 (eldre):** andre ordens bevegelsesligning med luftmotstand/drag `y″ = (α/m)(v − y′)` (partikkel i hastighetsfelt) — refereres i V2017 O4.
- **Prosjekt 3 (2025):** Fourier-spektralløser for varmeligningen i 2D med periodiske randbetingelser (DFT i rom + Crank–Nicolson i tid), implementert som en `yield`-generator med `scipy.fft`.
- **Prosjekt 3 (2026):** Usadel-ligningen (superledning) — et to-punkts randverdiproblem for Greens-funksjonen (4 komplekse 2×2-matriser), løst med `scipy.solve_bvp` etter «flattening» til en reell vektor av dimensjon `m = 32`.
- **Maskinlæringsprosjekt (2026):** nevrale nettverk / fysikk-informerte nettverk (PINN).

**Kritisk konsekvens:** Fra 2023 tas prosjekt-tematikk **direkte inn i skoleeksamenen** som teori-/forståelsesspørsmål. V2026 O2e og O3 er rene prosjektspørsmål («Forklar kort hvordan du i prosjekt 3 tilpasset Usadel-ligningene …», «Beskriv strukturen til et dypt fullt koblet nevralt nettverk …»). Boken må derfor både (a) forberede den skriftlige numerikken **og** (b) trene studenten i faktisk Python-implementering av alle kjernemetodene, siden koden er 30 % av karakteren og i tillegg dukker opp på skriftlig del.

### Formathistorikk (skriftlig del)

| Periode | Struktur | Hjelpemidler | Preg |
|---|---|---|---|
| **2016–2018** | 5–6 oppgaver med deloppgaver, uten eksplisitt prosentvekting (K2018: 6 oppg.) | **Kode B**: Rottmann + kalkulator | Rent «regn for hånd»: fikspunkt/Newton, interpolasjon, adaptiv kvadratur, LU/Cholesky/Gauss–Seidel, ett RK-skritt, DFT. Fysikkinnpakning (ladninger, pendel, Bessel) |
| **2022** | 5–6 oppgaver | **Kode C**: kalkulator + vedlagt formelark (Inspera) | Interpolasjon, midtpunkt/Simpson-feil, implisitt RK + `R(z)`, skalert pivotering, bevis (fikspunktteoremet, interpolasjonsentydighet) |
| **2023–2024** | 6 oppgaver med **eksplisitt prosentvekting** (sum 100 %): typisk 10 % / 10–20 % / 15 % / 20 % / 15–25 % / 10 % | Kode C + formelark | Tung numerisk lineæralgebra (LU, SVD, normer, kondisjonstall, tridiagonal m/flop-telling); RK-par + steglengde; stabilitet/A-stabilitet; global-feil-bevis |
| **2025** | 4 store oppgaver, poeng oppgitt eksplisitt (10 + 10 + 15 + 15 pts). **O4 er en ren kode-oppgave** (Jupyter, 15 pts) | Kode C + formelark (m/ordensbetingelser opp til orden 4) | Interpolasjon, kvadratur (Boole + sammensatt-bevis), Crank–Nicolson (Butcher/`R(z)`/stab.omr./orden), **Fourier-spektralløser i Python + konvergensstudie (EOC)** |
| **2026** | 3 oppgaver, alle delspørsmål vektet likt | **Kode C**: Rottmann + kalkulator + formelark | SPD/Gershgorin/Cholesky; system↔skalar ODE, implisitt Euler, propagasjonsmatrise, to-punkts randverdiproblem («shooting»/lineær); **prosjektspørsmål (Usadel/`solve_bvp`)**; **nevrale nettverk/PINN-teori** |

### Konstanter på tvers av alle år
- **4–6 oppgaver, ~4 timer, kalkulator + formelsamling/formelark.** Ingen fast flervalgsdel (avkryssingsboksen «skal ha flervalgskjema» på trykk-informasjonsarket er bare skjemametadata og er aldri i bruk).
- **Hvert sett dekker bredden:** minst én numerisk-lineæralgebra-oppgave + minst én ODE-numerikk-oppgave + interpolasjon/kvadratur, ofte pluss rotsøking eller DFT.
- **Små tall for hånd:** matrisene er 2×2/3×3/4×4, ODE-skrittene er ett eller to, kvadraturen har 1–2 paneler. Eksamen belønner ryddig håndregning, ikke tunge tallknusinger.
- **Verifikasjons-refreng i fasitene:** «Det er alltid en god idé å verifisere: `A = LU` / `Ax = b`.» Sensorene vil se sjekk.
- **Definisjons- og bevisspørsmål er faste:** «Hva er interpolasjonsproblemet?», «Definer presisjonsgrad / A-stabilitet / SVD / kondisjonstall», «Bevis at …».

### Utviklingstrekk å følge med på
1. **Prosjektkobling inn i skriftlig del** (fra 2023, tydelig 2025–2026): rene kode-oppgaver og «forklar hva du gjorde i prosjekt X».
2. **Nevrale nettverk / PINN** som pensum og eksamensstoff (nytt V2026): nettverksstruktur, tapsfunksjon (data- + fysikk- + rand- + regulariseringsledd), trening ved gradientmetode + automatisk derivasjon.
3. **Spektralmetoder / FFT for PDE-er** (V2025 prosjekt-eksamen): DFT i rom + Crank–Nicolson i tid, EOC-konvergensstudie.
4. **Randverdiproblem for ODE-er** (`solve_bvp`, propagasjonsmatrise, lineær «shooting») — V2026.
5. **Innfelt RK-par + steglengdekontroll** (V2023/K2023) som egen sjanger.

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på **15 velkarakteriserte sett**: Periode A (2016–2018, 6 sett: V2016, K2016, V2017, K2017, V2018, K2018 — rent «for hånd», kode B), Periode B (2022–2024, 5 sett: V2022, K2022, V2023, K2023, V2024 — kode C, tung lineæralgebra), Periode C (2025–2026, 2 sett: V2025, V2026 — kode + prosjekt + ML). N = 13 der 2022-fasitene er utekstbare (kun oppgaver kartlagt, men fullstendige).

| Tema | A (6) | B (5) | C (2) | **Gjenganger-score** |
|---|---|---|---|---|
| **Numeriske ODE-metoder** (system↔skalar, ett skritt Euler/Heun/RK, implisitt) | 6 | 5 | 2 | **13/13 = 100 %** |
| **Numerisk integrasjon / kvadratur** (midtpunkt/trapes/Simpson/Boole, feil, adaptiv) | 6 | 3 | 2 | **11/13 = 85 %** |
| **Interpolasjon** (Lagrange/Newton, feilestimat, Chebyshev) | 6 | 2 | 1 | **9/13 = 69 %** |
| **Numerisk lineær algebra: faktorisering** (LU/Cholesky/pivotering) | 5 | 4 | 1 | **10/13 = 77 %** |
| **Stabilitet: `R(z)`, stabilitetsområde, A-stabilitet** | 2 | 4 | 1 | **7/13 = 54 %** |
| **Butcher-tablå + ordensbetingelser** (bestem/verifiser orden) | 2 | 4 | 1 | **7/13 = 54 %** |
| **Rotsøking: Newtons metode** (skalar + system/Jacobi) | 4 | 0 | 0 | **4/13 = 31 %** |
| **Fikspunktiterasjon / kontraksjon** (lokal konv., konvergensrate) | 5 | 1 | 0 | **6/13 = 46 %** |
| **Vektor-/matrisenorm + kondisjonstall** (feilforplantning `Ax=b`) | 1 | 3 | 0 | **4/13 = 31 %** |
| **Bevis av kjent teorem** (interp.entydighet, fikspunktteorem, global feil O(hᵖ)) | 2 | 3 | 0 | **5/13 = 38 %** |
| **DFT / FFT** (utregning, egenskaper, operasjonstelling) | 2 | 0 | 1 | **3/13 = 23 %** |
| **Prosjektkobling / ren kode-oppgave / `solve_bvp`** | 2* | 0 | 2 | **4/13 = 31 %** (*kun referanse i A) |
| **SVD** (definisjon, gjenkjenn/konstruer) | 0 | 2 | 0 | **2/13 = 15 %** (kun 2023) |
| **Tridiagonal-/Hessenberg-løser + flop-telling** | 2 | 1 | 0 | **3/13 = 23 %** |
| **Randverdiproblem for ODE** (differanse/propagasjonsmatrise/shooting) | 1 | 0 | 1 | **2/13 = 15 %** |
| **Nevrale nettverk / PINN** (struktur, tap, trening, autodiff) | 0 | 0 | 1 | **1/13 = 8 %** (nytt V2026) |
| **Gauss–Seidel / iterativ splitting** | 1 | 0 | 0 | **1/13 = 8 %** (kun eldre) |
| **Ortogonale polynomer / Gram–Schmidt** | 1 | 0 | 0 | **1/13 = 8 %** (kun K2016) |
| **Biseksjon (halveringsmetoden)** | 1 | 0 | 0 | **1/13 = 8 %** |

**Viktigste funn:**
1. **ODE-numerikk er den absolutte bæresøylen (100 %).** Nesten hvert sett åpner eller inneholder: skriv om en 2.–3. ordens ODE til et førsteordens system, og gjør ett–to skritt for hånd med en gitt metode (Euler, forbedret Euler/Heun, eksplisitt eller implisitt RK, Crank–Nicolson, implisitt midtpunkt). Rundt dette bygges Butcher-tablå, ordensbetingelser, stabilitet og A-stabilitet.
2. **Numerisk lineær algebra er den nest tyngste blokken** og TMA4320-signaturen på skriftlig del: LU/Cholesky-faktorisering med tilbakeløsning, (skalert delvis) pivotering, normer, kondisjonstall og feilforplantning, SVD, tridiagonale/Hessenberg-systemer med flop-telling. Denne blokken vokste kraftig i vekt i 2023–2024.
3. **Interpolasjon + kvadratur** er den tredje faste blokken. Interpolasjon dreier seg om Lagrange-/Newton-form, interpolasjonsfeil `ωₙ₊₁(x)·f⁽ⁿ⁺¹⁾(ξ)/(n+1)!` og Chebyshev-nodenes min-max-fordel. Kvadratur dekker midtpunkt/trapes/Simpson/Boole, presisjonsgrad, adaptiv (Richardson-lignende) feilestimering og sammensatte feil.
4. **Rotsøking** (fikspunkt + Newton) var svært hyppig i den eldre perioden (A), men er delvis fortrengt av lineæralgebra i den nyere. Behold det som primærstoff — det er billig å teste og fikspunktteoremet er et yndet bevisspørsmål.
5. **Prosjekt/kode og ML er den nye vektoren.** Den skriftlige delen inneholder nå rene kode-oppgaver (V2025 O4) og prosjektforklaringsspørsmål (V2026), og PINN/nevrale nettverk er nytt pensum. Dette må dekkes selv om den historiske frekvensen er lav — trenden er entydig oppadgående.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene). **Merk kode-/pseudokode-oppgaver** er markert.

### A. Skriv høyere ordens ODE om til et førsteordens system
- **Krav:** Innfør `y₁=u, y₂=u′, y₃=u″, …`; skriv `y′ = f(t,y)` med det siste leddet fra den opprinnelige likningen løst for høyeste derivert. Bær initialbetingelsene over komponentvis. Nesten alltid første del av en større ODE-oppgave.
- **Frekvens:** de facto i hvert ODE-sett (V2022, V2023, V2024, K2016 pendel, K2018 Bessel, V2017/K2017 fysikk).
- **Omskrevet eksempel:** «Skriv `u‴ + t·u″ + cos u = 0`, `u(1)=2, u′(1)=1.5, u″(1)=−0.5`, som et førsteordens system, og ta ett Euler-skritt med `h=0.1`.» (V2024)

### B. Ett/to skritt for hånd med en Runge–Kutta-metode
- **Krav:** Regn `k₁, k₂, (k₃, …)` sekvensielt for **eksplisitte** metoder; for **implisitte** metoder settes de ikke-lineære `k`-likningene opp og løses (for hånd som andregradslikning, eller «bruk `numpy.roots`»). Ved to løsninger av en andregradslikning: velg den som ligger nærmest `f(y₀)` / gir fysisk rimelig oppførsel (fasit gjør dette eksplisitt). Klassisk RK4, Heun/forbedret Euler og eksplisitt trapes er de vanligste eksplisitte; implisitt Euler, implisitt midtpunkt og Crank–Nicolson de vanligste implisitte.
- **Frekvens:** ~100 %.
- **Omskrevet eksempel:** «Anvend det gitte 2-nivå RK-skjemaet på `y′ = y² + t`, `y(0)=1`, med `h=0.1`; sett deretter opp Butcher-tablået og bestem ordenen.» (V2023)

### C. Butcher-tablå og ordensbetingelser
- **Krav:** Les/skriv Butcher-tablået `c | A ; b`. Sjekk ordensbetingelsene rad for rad fra formelarket til én feiler: `Σbᵢ=1` (p=1), `Σbᵢcᵢ=½` (p=2), `Σbᵢcᵢ²=⅓` og `Σbᵢaᵢⱼcⱼ=⅙` (p=3), osv. Ordenen er høyeste `p` der alle betingelsene holder. For implisitte metoder må først `k`-definisjonene oversettes til `c`, `A`, `b` (Crank–Nicolson → 2-nivå implisitt tablå).
- **Frekvens:** 7/13.
- **Omskrevet eksempel:** «Skriv Crank–Nicolson-metoden som en Runge–Kutta-metode, utled Butcher-tablået, og bruk ordensbetingelsene til å bestemme konsistensordenen.» (V2025)

### D. Stabilitetsfunksjon `R(z)`, stabilitetsområde og A-stabilitet
- **Krav:** Anvend metoden på testligningen `y′=λy`; `y_{n+1}=R(z)y_n`, `z=λh`. Eksplisitt Euler: `R=1+z`. Implisitt Euler: `R=1/(1−z)`. Trapes/Crank–Nicolson: `R=(1+z/2)/(1−z/2)`. Definer stabilitetsområde `S={z∈ℂ : |R(z)|≤1}` og **A-stabilitet** (`S ⊇ ℂ⁻`, hele venstre halvplan). Vis A-stabilitet ved `|1+z/2|²≤|1−z/2|²` for `Re z≤0`. Motiver hvorfor A-stabilitet er ønskelig for **stive** systemer (raske transienter + langsom dynamikk).
- **Frekvens:** 7/13.
- **Omskrevet eksempel:** «Finn stabilitetsfunksjonen til Crank–Nicolson og bestem stabilitetsområdet (vis at det er hele venstre halvplan).» (V2025); «Er den gitte implisitte RK-metoden A-stabil? Begrunn med `|Z²|=|Z|²`.» (V2024)

### E. Lineær stabilitetsanalyse for et system (steglengdegrense)
- **Krav:** For `y′=Ay`: finn egenverdiene `λ` til `A`; kravet `|R(hλ)|≤1` for **alle** egenverdier gir maks steglengde. Ved komplekse egenverdier: regn `|R(hλ)|²` og løs ulikheten. Forklar hvorfor en for stor `h` gir voksende (ustabil) numerisk løsning.
- **Frekvens:** del av stabilitetsblokken; V2023 T2 O6 (egenverdier `−1±4i` → `h∈(0,2/17)`).

### F. Innfelt RK-par + lokalt feilestimat + steglengdekontroll
- **Krav:** To `b`-rader (orden `p` og `p+1`) i ett tablå. Regn `y₁` (lav orden) og `ŷ₁` (høy orden) med samme `k`-verdier; lokalt feilestimat `ϵ̂ = |y₁−ŷ₁| = h|Σ(bᵢ−b̂ᵢ)kᵢ|`. Aksepter hvis `ϵ̂ ≤ Tol`, ellers avvis; ny steglengde `h_new = P·(Tol/ϵ̂)^{1/(p+1)}·h` med sikkerhetsfaktor `P` (typisk 0.8).
- **Frekvens:** V2023 T2 O4 (K2023). Stigende sjanger.

### G. Konvergens- og feilanalyse for ODE-løsere (bevis)
- **Krav:** **Lokal avbruddsfeil** vs. **global feil** — definer begge og forklar hvorfor global feil ≠ sum av lokale (løsningsflyt-argument, gjerne med figur). Utled lokal avbruddsfeil for Euler via Taylor (`½h²y″(ξ)`). **Bevis at global feil er `O(hᵖ)`**: fra Lipschitz-egenskapen til inkrementfunksjonen `Φ` og `|d_{n+1}|≤Dh^{p+1}`, få `|e_{n+1}|≤(1+hM)|e_n|+Dh^{p+1}`, summer geometrisk og bruk `1+hM≤e^{hM}` → `|e_N|≤C h^p` med `C=(e^{t_end M}−1)D/M`.
- **Frekvens:** 5/13 (V2024 O6, V2023 T2 O6, eldre Euler-varianter).

### H. LU-/Cholesky-faktorisering med tilbakeløsning
- **Krav:** **LU uten pivotering** (Doolittle: ener på `L`-diagonalen) eller **PA=LU med (skalert) delvis pivotering** — vis radbytter og multiplikatorer. **Cholesky** `A=WWᵀ` for SPD-matriser via de radvise formlene fra formelarket. Løs `Ax=b` ved to triangulære systemer (`Ly=Pb`, `Ux=y`, evt. `Wc=b`, `Wᵀx=c`). Fasiten avslutter alltid med «verifiser `A=LU`».
- **Frekvens:** 10/13.
- **Omskrevet eksempel:** «Vis at `A` er SPD (bruk Gershgorin), finn Cholesky-faktoren `W`, og løs `Ax=b` med `W`.» (V2026)

### I. Pivotering (skalert delvis)
- **Krav:** Skaleringsvektor `sᵢ = max_j|aᵢⱼ|`; velg pivotrad som maksimerer `|aᵢₖ|/sᵢ`. Utfør **ett** eliminasjonssteg og pek ut neste pivotrad (ofte uten å eliminere videre).
- **Frekvens:** V2022 O4, K2023 (V2023 T2) O1.

### J. Vektornormer, matrisenormer og kondisjonstall
- **Krav:** Regn `‖x‖₁, ‖x‖₂, ‖x‖∞`; bevis normulikheter (`‖x‖∞≤‖x‖₂≤‖x‖₁`). Definer indusert matrisenorm `‖A‖=max_{x≠0}‖Ax‖/‖x‖`; `‖A‖₁`=maks kolonnesum, `‖A‖∞`=maks radsum. Kondisjonstall `κ(A)=‖A‖·‖A⁻¹‖`; feilforplantning `‖δx‖/‖x‖ ≤ κ(A)·‖δb‖/‖b‖` (bevis via `‖Ax‖≤‖A‖‖x‖`). Velkondisjonert ⇔ `κ≈1`.
- **Frekvens:** 4/13.
- **Omskrevet eksempel:** «Gitt `‖A⁻¹‖∞=14`, finn `κ∞(A)` og en øvre grense for `‖x−x̃‖∞/‖x‖∞` når `b` perturberes.» (K2022)

### K. Strengt diagonaldominans, SPD og Gershgorin
- **Krav:** Sjekk `|aᵢᵢ| > Σ_{j≠i}|aᵢⱼ|` (strengt diagonaldominant ⇒ inverterbar + naiv Gauss/LU gjennomførbar). SPD ⇔ symmetrisk + alle egenverdier positive; **Gershgorin-teoremet** lokaliserer egenverdiene i sirkelskiver `|z−aᵢᵢ|≤Σ_{j≠i}|aᵢⱼ|`.
- **Frekvens:** V2024 O3, V2026 O1a, V2024 O4b.

### L. SVD (definisjon og gjenkjenning/konstruksjon)
- **Krav:** Definer `A=UΣVᵀ` med `U, V` ortogonale og `Σ` diagonal med `σ₁≥σ₂≥…≥0`. Avgjør om en gitt faktorisering **er** en SVD (sjekk ortogonalitet av `U, V` og synkende, ikke-negative singulærverdier). Konstruer SVD for en liten matrise via egenverdiene til `AᵀA`.
- **Frekvens:** 2/13 (V2023, K2023).

### M. Tridiagonal-/Hessenberg-løser + flop-telling
- **Krav:** Utled rekursjonene i naiv Gauss-eliminasjon for et tridiagonalt system (`bᵢ′ = bᵢ − (aᵢ/b′_{i−1})cᵢ`, `dᵢ′` tilsvarende); betingelse for entydig løsning / ikke-null pivot (strengt diagonaldominant). Tell flop: tridiagonal `≈5n` (`O(n)`) mot full Gauss `O(n³)`; Hessenberg-LU `O(n²)`. **Kode-forståelse:** algoritmen gis som pseudokode (V2024 Algoritme 1) og skal analyseres — og *implementeres* i prosjektet.
- **Frekvens:** 3/13.

### N. Interpolasjon (Lagrange / Newton) + feilestimat + Chebyshev
- **Krav:** **Lagrange:** kardinalfunksjoner `ℓₖ(x)=Π_{j≠k}(x−xⱼ)/(xₖ−xⱼ)`, `p(x)=Σyₖℓₖ(x)`, skriv på standardform `Σaᵢxⁱ`. **Newton:** dividerte differanser + `p(x)=f[x₀]+f[x₀,x₁](x−x₀)+…` (praktisk når man legger til en node). **Interpolasjonsfeil** `f(x)−pₙ(x)=ωₙ₊₁(x)·f⁽ⁿ⁺¹⁾(ξ)/(n+1)!` — brukes til øvre feilgrense ved å bounde hvert `|x−xᵢ|` og `|f⁽ⁿ⁺¹⁾|`. **Chebyshev-noder** minimerer `max|ωₙ₊₁|` (min-max-egenskap) og gir mindre feil enn ekvidistante noder; regn ut nodeposisjonene fra `Tₙ(xᵢ)=0`.
- **Frekvens:** 9/13.
- **Omskrevet eksempel:** «Bestem de tre kardinalfunksjonene for nodene `−2, 0, 1` og skriv interpolasjonspolynomet på formen `Σaᵢxⁱ`.» (V2025)

### O. Numerisk integrasjon: kvadraturregler + presisjonsgrad
- **Krav:** Midtpunkt, trapes, Simpson, Boole; sammensatte varianter. **Presisjonsgrad** = høyeste `n` slik at regelen er eksakt for alle `p∈Pₙ` (test på `xⁿ` til den feiler; les fra feilleddets deriverte-orden: Boole har `f⁽⁶⁾` → grad 5). **Bestem vekter** for en gitt nodekonfigurasjon ved å integrere Lagrange-basisfunksjonene (`ωᵢ=∫ℓᵢ`) eller kreve eksakthet for `1,x,x²,…`. **Sammensatt feilgrense** via additivitet + enkeltintervall-estimat (bevisoppgave). **Adaptiv kvadratur:** dobling av paneler + antagelsen `f″` konstant gir Richardson-feilestimat `(Q_fin − Q_grov)·k`.
- **Frekvens:** 11/13.
- **Omskrevet eksempler:** «Utled sammensatt Boole-feilestimat `≤ (b−a)h⁶/(945·4⁷)·max|f⁽⁶⁾|`.» (V2025); «Bestem vektene så kvadraturregelen med nodene `−2,0,1` har presisjonsgrad ≥ 2 på `[−2,1]`.» (V2025)

### P. Rotsøking: fikspunktiterasjon
- **Krav:** Skriv `x=g(x)`. **Lokal konvergens** ⇔ `|g′(r)|<1`; konvergensraten er `|g′(r)|`. Superlineær hvis `g′(r)=0` (Newton). Global konvergens (fikspunktteoremet): `g([a,b])⊆(a,b)` **og** `|g′(x)|≤L<1` på `[a,b]`. **Bevis av fikspunktteoremet** er et yndet spørsmål. Fasitene lar studenten selv finne et passende intervall.
- **Frekvens:** 6/13.
- **Omskrevet eksempel:** «Vis at `x_{k+1}=√(2−x_k)` konvergerer mot `x=1` for alle `x₀` i et passende intervall `(a,b)` som du selv velger.» (K2022)

### Q. Rotsøking: Newtons metode (skalar + system) og biseksjon
- **Krav:** **Newton skalar:** `x_{k+1}=x_k − f(x_k)/f′(x_k)`; gjør 1–2 iterasjoner for hånd; drøft lokal konvergens (`g_Newton′(r)=0`). **Newton for system:** løs `J(x_k)·(x_{k+1}−x_k) = −F(x_k)` (2×2-Jacobi for hånd) — brukes til å løse de implisitte ODE-skrittene. **Biseksjon:** halvér intervallet til `(b−a)/2^k < Tol`; oppgi garantert feilgrense.
- **Frekvens:** Newton 4/13, biseksjon 1/13 (V2017 K).

### R. DFT / FFT
- **Krav:** Regn `y = F_N x` med `y_k = (1/√N) Σ x_j e^{−i2πjk/N}` for hånd for `N=3`. Utnytt at `x∈ℝⁿ ⇒ y_{n−k}=ȳ_k`. Invers DFT via `F⁻¹=F̄`. **Bevis egenskaper** (reversering/skift: reversert `x` gir reversert `y`). **Operasjonstelling:** FFT `O(n log n)` mot Newton-dividerte-differanser `O(n²)` — trigonometrisk interpolasjon raskere for store `n`.
- **Frekvens:** 3/13 (V2016, K2016, del av V2025-prosjektet).

### S. Kode-/pseudokode-oppgave (ren implementering på skriftlig del)
- **Krav:** Fullfør en gitt Python-funksjon (V2025 O4: en `heat_equation_solver`-generator med `yield`, ved bruk av `scipy.fft.fft2/ifft2/fftfreq`, `numpy.meshgrid/linspace`) og kjør en **konvergensstudie**: løs for `N_t=10,20,40,80`, regn `L∞L∞`-feil mot en manufactured solution, estimer eksperimentell konvergensorden `EOC = log(err_k/err_{k+1})/log 2`. Ingen detaljert poengfordeling — vurderes helhetlig for fleksibilitet.
- **Frekvens:** V2025 O4. Forvent flere av denne typen. (Se også pseudokode-analyse i V2024.)

### T. Prosjektforklaringsspørsmål på skriftlig del
- **Krav:** Forklar med ord hvordan et konkret prosjekt ble løst i kode. V2026 O2e: hvordan 4 komplekse 2×2-matriser «flates ut» til en reell 32-vektor for `scipy.solve_bvp`, og hvordan `fun`/`bc`-funksjonene struktureres. Krever at studenten faktisk har gjort prosjektet.
- **Frekvens:** V2026, referanser i V2017/K2017.

### U. Randverdiproblem for ODE (differanse / propagasjonsmatrise / shooting)
- **Krav:** For lineære systemer: propagasjonsmatrise `M(xₙ,h)` slik at `[y_{n+1};v_{n+1}] = M·[yₙ;vₙ]`; produkt `T = M_{N−1}···M₀`; bestem manglende startverdi `v₀` fra randbetingelsene (`y_N = T·[y₀;v₀]` løst for `v₀`). Implisitt Euler for et system: sett opp det lineære `2×2`-systemet for `[y₁;v₁]`. Kobling til `solve_bvp` i prosjekt.
- **Frekvens:** 2/13 (V2026 O2, K2017 bjelke-innslag).

### V. Nevrale nettverk / fysikk-informerte nettverk (nytt V2026)
- **Krav (teori, med ord):** Beskriv et dypt fullt koblet nettverk som komposisjon av lag `f_{θ,i}(x)=σ(W_i x + b_i)` med aktiveringsfunksjon (ReLU/sigmoid); tell parametre `Σ(nᵢ·n_{i−1}+nᵢ)`. Forklar **tapsfunksjonen** (måler avvik ønsket–faktisk output; minimeres over `θ`) og for **PINN** de typiske leddene: dataavvik, avvik fra en numerisk modell/differanseskjema (fysikk), rand-/initialverdiavvik, evt. regularisering `R(θ)`. Forklar **trening** som gradientbasert minimering `θ^{(k+1)}=θ^{(k)}−τ_k∇_θ E`, og **automatisk derivasjon** sin rolle i å beregne gradienten.
- **Frekvens:** V2026 O3. Nytt primærmål.

### W. Ortogonale polynomer / Gram–Schmidt (utdøende)
- **Krav:** Finn polynom `p₁` av grad 1 ortogonalt mot `p₀=1` på `[0,1]` via `∫p₁p₀=0` (Gram–Schmidt). Bakgrunn for Gauss-kvadratur.
- **Frekvens:** 1/13 (kun K2016). Beredskap.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Vis mellomregning og begrunn.** Fasitene er skrittvise; bar fasit uten utledning premieres ikke. For-hånd-utregninger forventes ryddige.
2. **Verifiser resultatet.** Fasitene gjentar «det er alltid en god idé å sjekke `A=LU` / `Ax=b`». Sensor liker å se sjekk.
3. **Metode-/teoremnavn bæres eksplisitt:** «Gershgorin-teoremet», «fikspunktteoremet», «A-stabilitet», «presisjonsgrad», «min-max-egenskap», «konvolusjons-/additivitetsargument». Definisjonsspørsmål («Hva menes med …?») krever presis, komplett definisjon.
4. **Ved to røtter i et implisitt skritt:** velg og **begrunn** riktig gren (nærmest `f(y₀)` / fysisk rimelig / positiv). Fasiten gjør dette hver gang.
5. **Poeng og karakter:** fra 2023 eksplisitt prosentvekting (sum 100 %) eller poeng (V2025: 10/10/15/15). Fasitene har intern poengfordeling per delpunkt («1 pt for interpolasjonsbetingelsen, 1 pt for laveste grad»). Kode-/prosjektoppgaver vurderes **helhetlig uten detaljert poengoppdeling** for fleksibilitet.
6. **Feilforplantning tolereres:** riktig videreregning på en feil mellomverdi gir uttelling i senere delpunkt.
7. **Flere metoder honoreres:** Lagrange vs. Newton for interpolasjon; radbytte-frihet i pivotering (så lenge skaleringsvektoren følger med); flere gyldige fikspunkt-omskrivinger.
8. **Prosjektspørsmål krever egen erfaring:** V2026-fasiten sier rett ut at svaret er «godt beskrevet i prosjektbeskrivelsen for Prosjekt 3» — den som ikke gjorde prosjektet, taper disse poengene.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på det mekaniske: skriv ODE om til system, ta ett Euler-/RK-skritt, regn en LU-/Cholesky-faktorisering av en liten matrise, sett opp interpolasjonspolynomet, regn en trapes-/Simpson-tilnærming, én Newton-iterasjon.
- **Midtsjiktet** behersker i tillegg: **alle** ordensbetingelsene rad for rad, `R(z)` og stabilitetsområdet, kondisjonstall og feilforplantning, presisjonsgrad ved testing på `xⁿ`, interpolasjonsfeilgrense, fikspunkt-konvergensraten, adaptiv/sammensatt feilestimat.
- **Toppsjiktet** kjennetegnes av: (i) korrekt **A-stabilitetsbevis** og stabilitetsintervall for systemer via egenverdier; (ii) **bevisene** (global feil `O(hᵖ)`, interpolasjonsentydighet, fikspunktteoremet, sammensatt kvadraturfeil); (iii) korrekt **implisitt RK-skritt** (velg riktig andregradsrot) og **innfelt-par-steglengde**; (iv) **flop-/kompleksitetsanalyse** (tridiagonal `O(n)`, Hessenberg `O(n²)`, FFT `O(n log n)`); (v) fungerende **Python-kode** (V2025 spektralløser + EOC) og presise **prosjektforklaringer** (V2026 Usadel/`solve_bvp`, PINN-tap).

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Feil valg av rot i implisitt skritt:** å velge feil løsning av andregradslikningen for `k` eller `w_{n+1}` (fasiten velger alltid grenen nærmest `f(y₀)` / den fysisk rimelige).
2. **Ufullstendig ordenssjekk:** å stoppe før første ordensbetingelse feiler, eller feillese Butcher-tablået (særlig `aᵢⱼ` og `c`-verdiene for implisitte metoder).
3. **Kun ett fikspunktvilkår:** å sjekke `|g′|<1` uten `g(I)⊆I` (eller motsatt) ved global konvergens.
4. **Interpolasjonsfeilformelen brukt feil:** å bruke den på et polynom som ikke har laveste grad (K2016 fellen: `(p(x))²` har grad 4, ikke 2 — feilestimatet gjelder ikke).
5. **Presisjonsgrad feilbestemt:** å forveksle «eksakt for `xⁿ`» med grad `n+1`, eller å lese feil deriverte-orden fra feilleddet.
6. **Pivotering:** å glemme å oppdatere skaleringsvektoren ved radbytte, eller å bruke absoluttverdiene uten skalering.
7. **Kondisjonstall/norm-forveksling:** å bruke `‖A‖₁` (kolonnesum) der `‖A‖∞` (radsum) kreves, eller feil retning på ulikheten i feilforplantningen.
8. **Cholesky/LU-slurv:** fortegnsfeil i multiplikatorene, eller å glemme at Cholesky krever SPD.
9. **A-stabilitet:** å forveksle stabilitetsområde med A-stabilitet, eller å bruke feil (minst negative) egenverdi når man bestemmer maks skritt for et system.
10. **Global feil = sum av lokale feil:** den klassiske misforståelsen; global feil akkumulerer via løsningsflyten (`(1+hM)`-faktoren).
11. **DFT-normering:** feil `1/√N`- eller `1/N`-faktor (fysisk vs. unitær konvensjon) — vær konsistent.
12. **Kode-oppgaver:** off-by-one i tidsløkka (`while t < T − dt/2`), feil `fftfreq`-skalering (`·2π`), å bruke `endpoint=True` der periodisk rutenett krever `endpoint=False`.
13. **Prosjektspørsmål:** vage svar uten faktisk kjennskap til prosjektet (flattening-dimensjonen, `fun`/`bc`-signaturene, tapsfunksjonens ledd).
14. **Tidsfelle:** de store lineæralgebra- og ODE-oppgavene (15–25 %) er tunge; implisitte skritt og bevis stjeler tid.

---

## 6. Teorem-, notasjons- og formelapparat (hjelpemidler)

### Utdelt formelark / formelsamling (må kunne brukes, ikke pugges)
Hjelpemiddelkode **B** (t.o.m. 2018): **Rottmann matematisk formelsamling** + bestemt enkel kalkulator. Hjelpemiddelkode **C** (fra 2022): kalkulator + **vedlagt formelark** (og fra V2026 igjen Rottmann i tillegg). Formelarket (V2025/V2026-utgavene) inneholder minst:
- **Cholesky-faktorisering:** radvise formler for `Wᵢⱼ` (`j≤i`) og `Wᵢᵢ`.
- **Runge–Kutta:** den generelle formelen `kᵢ = f(xₙ+cᵢh, yₙ+hΣaᵢⱼkⱼ)`, `y_{n+1}=yₙ+hΣbᵢkᵢ`.
- **Spesielle skjemaer:** Euler, forbedret Euler/Heun, implisitt Euler (og typisk RK4, trapes/Crank–Nicolson).
- **Ordensbetingelser** for RK opp til **orden 4** (`Σbᵢ=1`, `Σbᵢcᵢ=½`, `Σbᵢcᵢ²=⅓`, `Σbᵢaᵢⱼcⱼ=⅙`, samt orden-4-settet `Σbᵢcᵢ³=¼`, `Σbᵢcᵢaᵢⱼcⱼ=⅛`, `Σbᵢaᵢⱼcⱼ²=1/12`, `Σbᵢaᵢⱼaⱼₖcₖ=1/24`).
- Interpolasjons- og kvadraturfeil-formler, differansekvotienter (typisk, som i søsteremnet TMA4135).

> **Merk:** Boken bør trene studenten på å **finne og bruke** formlene fra arket/Rottmann, ikke pugge dem — og på å lage et eget mønster-oppslag (Butcher-tablåer, `R(z)`-uttrykk, norm-/kondisjonstall-definisjoner, ordensbetingelser) som del av eksamensforberedelsen.

### Må beherskes aktivt (kunne anvende, navngi og bevise)
- **Numerisk lineær algebra:** LU (naiv + PA=LU med skalert delvis pivotering), Cholesky (SPD), SVD (definisjon + gjenkjenning), vektor-/matrisenormer (`1, 2, ∞`), kondisjonstall og feilforplantning, strengt diagonaldominans, Gershgorin-teoremet, tridiagonal-/Hessenberg-løsere + flop-/kompleksitetsanalyse (`O(n)`, `O(n²)`, `O(n³)`), Gauss–Seidel (beredskap).
- **ODE-numerikk:** system-omskriving, Euler/forbedret Euler/RK4/implisitt Euler/implisitt midtpunkt/Crank–Nicolson, Butcher-tablå, ordensbetingelser, lokal avbruddsfeil vs. global feil + konvergensbevis `O(hᵖ)`, stabilitetsfunksjon `R(z)`, stabilitetsområde, A-stabilitet, stivhet, lineær stabilitetsanalyse for systemer (egenverdier), innfelt RK-par + steglengdekontroll, randverdiproblem (differanse/propagasjonsmatrise/`solve_bvp`).
- **Interpolasjon & kvadratur:** Lagrange- og Newton-form, interpolasjonsfeil `ωₙ₊₁·f⁽ⁿ⁺¹⁾/(n+1)!`, entydighetsbevis, Chebyshev-noder + min-max, midtpunkt/trapes/Simpson/Boole + presisjonsgrad + sammensatte feil + adaptiv kvadratur, vektbestemmelse via Lagrange-integrasjon, ortogonale polynomer (beredskap for Gauss-kvadratur).
- **Rotsøking:** fikspunktiterasjon + fikspunktteoremet (bevis) + konvergensrate, Newton skalar og system (Jacobi), biseksjon med feilgrense.
- **DFT/FFT:** definisjon, egenskaper (reell input, reversering/skift), invers via `F̄`, `O(n log n)`.
- **Maskinlæring:** dypt fullt koblet nettverk (struktur, parametertelling, aktiveringsfunksjoner), tapsfunksjon (PINN-ledd), trening (gradientmetoder, learning rate), automatisk derivasjon.
- **Python-verktøy (prosjekt + kode-oppgaver):** `numpy` (linspace, meshgrid, roots, linalg), `scipy.fft` (fft2/ifft2/fftfreq), `scipy.solve_bvp`, generatorer med `yield`, EOC-beregning, plotting.

### Notasjonskonvensjoner boken bør speile
`A=LU`, `PA=LU`, `A=WWᵀ` (Cholesky), `A=UΣVᵀ` (SVD), `κ(A)=‖A‖‖A⁻¹‖`; `‖·‖₁,₂,∞`; `y′=f(t,y)`, `y_{n+1}=yₙ+hΣbᵢkᵢ`, Butcher-tablå `c | A ; b`; `R(z)`, `z=λh`, `S={z:|R(z)|≤1}`; interpolasjonsfeil `ωₙ₊₁(x)`; presisjonsgrad `d`; `w=e^{2πi/N}` (DFT); `θ`, `Wᵢ`, `bᵢ`, `σ`, `E(θ)`, `∇_θ E` (nevrale nett). Eksakte svar der mulig, ellers tallverdi med nok siffer.

---

## 7. Prognose og prioritering

> TMA4320 er et bredt, implementeringsnært numerikk-emne med to karakterbærende deler: skriftlig eksamen (70 %) og prosjekter (30 %). Den skriftlige delen er stabil rundt fire søyler (ODE-numerikk, numerisk lineær algebra, interpolasjon, kvadratur), men er i tydelig bevegelse mot prosjektkobling, kode-oppgaver og maskinlæring. En eksamensrettet bok må dekke *både* håndregning/teori *og* faktisk Python-implementering.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Numeriske ODE-metoder** — 100 %. System-omskriving; ett/to skritt (Euler/Heun/RK4/implisitt Euler/implisitt midtpunkt/Crank–Nicolson) for hånd; velg riktig rot i implisitte skritt.
2. **Butcher-tablå + ordensbetingelser** — 54 %, men de facto integrert i nesten hver ODE-oppgave. Bestem/verifiser orden rad for rad.
3. **Stabilitet: `R(z)`, stabilitetsområde, A-stabilitet, stivhet** — 54 %. Inkludert lineær stabilitetsanalyse for systemer via egenverdier.
4. **LU-/Cholesky-faktorisering + (skalert) pivotering + tilbakeløsning** — 77 %. Med verifikasjon.
5. **Interpolasjon** (Lagrange/Newton + feilestimat + Chebyshev) — 69 %.
6. **Numerisk integrasjon** (midtpunkt/trapes/Simpson/Boole + presisjonsgrad + sammensatt/adaptiv feil + vektbestemmelse) — 85 %.
7. **Prosjekt-Python: alle kjernemetodene implementert** — dette er 30 % av karakteren og dukker opp på skriftlig del (kode + forklaring). Ikke-forhandlbart.

### Nivå 2 — må kunne (bredde + karakterskiller)
8. **Vektor-/matrisenormer + kondisjonstall + feilforplantning** — 31 %.
9. **Rotsøking:** fikspunkt (+ fikspunktteoremet) og Newton (skalar + system) — 46 % / 31 %.
10. **Bevis av kjente teoremer** (global feil `O(hᵖ)`, interpolasjonsentydighet, fikspunktteorem, sammensatt kvadraturfeil, A-stabilitet) — 38 %.
11. **Innfelt RK-par + steglengdekontroll** — stigende sjanger (V2023/K2023).
12. **SPD/Gershgorin/diagonaldominans** — fast «liten» oppgave (V2024, V2026).
13. **Tridiagonal-/Hessenberg-løser + flop-/kompleksitetsanalyse** — 23 %.
14. **DFT/FFT** — 23 %, både for hånd og som del av spektralmetode-prosjektet.

### Nivå 3 — bør dekkes (ny/lav frekvens / beredskap / pensumkrav)
15. **Nevrale nettverk / PINN** (struktur, tap, trening, autodiff) — nytt V2026, stigende primærmål. Dekk grundig som teoristoff + prosjektferdighet.
16. **Randverdiproblem for ODE** (differanse/propagasjonsmatrise/`solve_bvp`) — V2026.
17. **SVD-konstruksjon** — beredskap (kun 2023).
18. **Gauss–Seidel, ortogonale polynomer/Gram–Schmidt, biseksjon** — kun i eldre sett; hold som beredskap (billige, står i pensum).

### Konkret prognose for neste skriftlige sett
Basert på malen: **4–6 vektede oppgaver over ~4 timer**, kode C (kalkulator + formelark, evt. Rottmann), ingen flervalg, med:
- **O1:** Numerisk lineær algebra — LU/Cholesky-faktorisering (evt. SPD/Gershgorin-innledning) + løs `Ax=b`, eller normer/kondisjonstall/SVD.
- **O2:** Interpolasjon (Lagrange/Newton + feil/Chebyshev) og/eller numerisk integrasjon (kvadraturregel + presisjonsgrad + feilestimat).
- **O3–O4:** ODE-numerikk — skriv om til system + ett/to skritt (ofte implisitt) + Butcher/orden + `R(z)`/A-stabilitet, evt. innfelt par + steglengde eller et konvergens-/global-feil-bevis.
- **O5:** Rotsøking (fikspunkt/Newton) eller et bevisspørsmål (fikspunktteoremet, interpolasjonsentydighet).
- **O6:** Enten en **ren kode-oppgave** (fullfør en Python-funksjon + konvergensstudie/EOC), et **prosjektforklaringsspørsmål**, eller **nevrale nettverk/PINN-teori**.

**Usikkerhetsmomenter:** Antall oppgaver og vekting varierer (5–6 med prosentvekting i 2023–2024; 4 med poeng i 2025; 3 i 2026). ML/PINN og rene kode-oppgaver er nye (2025–2026) og bør dekkes som primærmål selv om historisk frekvens er lav. **Prosjekttemaene skifter årlig** (bjelke, drag, spektral-varme, Usadel, ML) — det er *metodene* (RK/BVP/spektral/ML-implementering) og *forklaringsevnen* som må trenes, ikke det spesifikke anvendelsesdomenet. Sjekk gjeldende emnebeskrivelse for vektfordeling (70/30) og prosjektopplegg hvert semester.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4320/` (24 PDF-er — den minste klyngen i arkivet).

**Løsningsforslag lest grundig (offisielle fasiter):**
- `Eksamen2026v-LF.pdf` (V2026: SPD/Cholesky, ODE-system/implisitt Euler, propagasjonsmatrise + BVP, prosjekt Usadel/`solve_bvp`, nevrale nettverk/PINN; formelark inkludert)
- `TMA4320_2025-21-05_exam_solution.pdf` (V2025: interpolasjon, Boole-kvadratur + sammensatt-bevis, Crank–Nicolson Butcher/`R(z)`/stab.omr./orden, **ren Python-kodeoppgave**: Fourier-spektralløser + EOC-konvergensstudie)
- `TMA4320_2024_T_lf.pdf` (V2024: system/Euler, normer + bevis, diagonaldominans, tridiagonal Gauss + flop, implisitt RK/orden/A-stab., global-feil-bevis; pseudokode-algoritme)
- `TMA4320_2023_lf.pdf` (V2023: LU, matrisenorm/kondisjonstall + bevis, SVD, system, eksplisitt RK/Butcher/orden, systemstabilitet)
- `TMA4320_2023_T2_lf.pdf` (K2023: skalert pivotering, PA=LU-bruk, SVD-gjenkjenning, innfelt RK-par + steglengde, trapes/A-stabilitet, lokal/global feil)
- `2016-06-06-Solution.pdf`, `2016-08-xx-Solution.pdf` (V2016/K2016: Newton, interpolasjon + feilfelle, adaptiv kvadratur, implisitt Euler, DFT, RK-skritt, Gram–Schmidt)
- `2017-05-30-Solution.pdf`, `2017-08-08-Solution.pdf` (V2017/K2017: fikspunkt/konvergensrate, interpolasjon, adaptiv kvadratur, prosjekt-drag-ODE + Newton-system, LU/pivotering + kondisjonstall, biseksjon, bjelke, Cholesky, Gauss–Seidel)
- `2018-05-28-Solution.pdf`, `2018-08-xx-Solution.pdf` (V2018/K2018: fikspunkt, Chebyshev-interpolasjon, kvadraturfeil/panelantall, Cholesky/LU, Hessenberg-flop, implisitt midtpunkt/pendel/Bessel, Newton-system)

**Oppgavesett lest grundig (fasit skannet/utekstbar):**
- `TMA4320_2022_T_bokmal.pdf` (V2022: interpolasjon, midtpunktfeil, implisitt RK + `R(z)`, skalert pivotering, bevis av fikspunktteoremet)
- `TMA4320_2022K_T.pdf` (K2022: sammensatt Simpson + feilgrense, fikspunkt, Chebyshev-interpolasjon, Euler/forbedret Euler + steglengde, kondisjonstall, bevis av interpolasjonsentydighet)
- Tilhørende oppgavesett `…-Oppgave.pdf` / `_T.pdf` / `_T2.pdf` / `eksamen2026v.pdf` er også kartlagt mot fasitene.

**Merknader om kildene:**
- **Skann-hull:** `TMA4320_2022_T_lf.pdf` og `TMA4320_2022K_T_lf.pdf` er skannede/bildebaserte løsningsforslag som ikke lot seg tekst-utvinne (pdftotext ga 4–6 tegn). For 2022-settene er analysen derfor basert på de **fullstendige oppgavesettene** (som finnes som ren tekst), ikke fasitene. Alle øvrige 22 filer er tekstbaserte og lest i sin helhet. Ingen 2019–2021-sett i arkivet.
- **Samlet vurdering (70/30):** analysen dekker den skriftlige skoleeksamenen i detalj (der arkivet ligger) og karakteriserer prosjekt-/mappedelen ut fra prosjektreferansene som er innfelt i eksamenene (Prosjekt 2 bjelke, Prosjekt 3 drag/spektral-varme/Usadel, ML-prosjekt). Prosjektbeskrivelsene selv ligger ikke i arkivet, men metodene de tester (RK, BVP/`solve_bvp`, spektral/FFT, PINN) er fullt belagt.
- **Overlapp med TMA4135 (Matematikk 4N/4D):** interpolasjon, numerisk integrasjon, Euler/RK-løsere, stabilitet og differansemetoder overlapper. **Det TMA4320-distinkte** er: (a) numerisk lineær algebra som egen tung blokk (LU/Cholesky/SVD/normer/kondisjonstall/flop-telling), (b) **Python-implementering** som eksplisitt læringsmål og karaktergrunnlag (prosjekter = 30 %, kode-oppgaver på skriftlig del), (c) tverrfaglig/anvendt innpakning (fysikk, biofysikk, superledning, maskinlæring), (d) moderne temaer: DFT/FFT-spektralmetoder, randverdiproblem via `solve_bvp`, og nevrale nettverk/PINN. TMA4320 mangler til gjengjeld TMA4135s Laplace-/Fourier-transform- og separasjon-av-variable-blokk.
- **Ingen flervalg:** avkryssingsboksen «skal ha flervalgskjema» på trykk-informasjonsarket er skjemametadata og er aldri i bruk i noe sett.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk, algoritmer og metodenavn er standard fagnotasjon.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse (TMA4320, 7,5 sp, aktivt emne).

**Forbilde:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (numerikk-tung 8-delers strukturmal; innhold ikke kopiert).
