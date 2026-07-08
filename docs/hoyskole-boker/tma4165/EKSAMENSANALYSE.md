# Eksamensanalyse: TMA4165 Dynamiske systemer (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **~43 filer / ~24 velkarakteriserte eksamenssett** fra arkivet (SIF5025 2002–2003 t.o.m. TMA4165 2021). Løsningsforslag er lest grundig der de finnes som maskinlesbar tekst (V04, V05, V06, V07, V08, V09, V10, V11, V12, V13, V19, K19 og den fullstendige, sensorkommenterte fasiten fra juni 2021). Oppgavesettene fra de siste ~8 årene (V13, V14, V16, K16, V17, K17, V18, K18, V19, K19, juni 2021) er gjennomgått oppgave-for-oppgave; eldre sett (2002–2012) er skummet for tema og oppgavetradisjon. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller fasitformuleringer. Matematiske uttrykk, teoremnavn og metodenavn er standard fagnotasjon og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.

> **Hovedfunn (les dette først):** TMA4165 er et **svært stabilt og forutsigbart** emne innenfor kvalitativ teori for ODE-er i planet, med noen få faste ryggrader. Fire søyler er praktisk talt garantert på hvert sett: **(1) lineære planare systemer** — klassifisér likevektspunktet fra egenverdiene (node/sadel/fokus/senter) og skissér faseportrett med orientering; **(2) stabilitet av ikke-lineære likevektspunkt** — linearisering + Hartman–Grobman, og **Lyapunov-funksjoner** (sterke/svake) når lineariseringen svikter; **(3) grensesykluser / periodiske løsninger** — Poincaré–Bendixson (invariant annulus), Bendixsons negative kriterium, Hamilton-systemer og Liénard-likninger; **(4) indeksteori** — indeks av likevektspunkt/lukket kurve, Bendixsons indeksformel `I = 1 + (e − h)/2`, og indeks i uendelig. I tillegg kommer nesten alltid en **bifurkasjonsoppgave** (parameteravhengig system) og et **eksistens-/entydighetsspørsmål** (Grönwall/Picard–Lindelöf, globale løsninger, maksimalt eksistensintervall). Eksamen tester **forståelse og teknikk uten hjelpemidler**: hjelpemiddelkode **D** — kun en enkel kalkulator, **ingen formelsamling, ingen lærebok**. Alle svar skal begrunnes; ingen flervalgsdel. Den viktigste utviklingen: **fraktaler/IFS og kaotisk dynamikk** (Sarkovskii/`z ↦ z²`) var faste sluttoppgaver frem til ~2012 (Baas-æraen) men **forsvant helt fra ~2013**; senere sett er ren kontinuerlig fasplan-teori. Juni-2021-settet skiller seg ut som mer teoretisk (**sentermangfoldighetsteoremet**, kontraksjonsavbildning i funksjonsrom, saddle-node via sektoranalyse) — signalet er at boka bør dekke også dette dyperegående laget.

---

## 1. Eksamensform og utvikling

Skriftlig skoleeksamen, **4 timer (09:00–13:00)**, bokstavkarakter A–F. Undervises og eksamineres på **engelsk** (men både bokmåls- og engelskversjon av oppgavesettet deles ut de fleste år). Fast instruks: **«Alle svar skal begrunnes; ta med nok mellomregning til at framgangsmåten klart framgår.»** Bar fasit uten begrunnelse gir ikke uttelling.

### Formathistorikk

| Periode | Emnekode | Struktur | Hjelpemidler |
|---|---|---|---|
| 2002–2003 | **SIF5025** | 6 oppgaver med deloppgaver; **6-timers eksamen (09:00–15:00)** | Typegodkjent kalkulator med tomt minne |
| 2004–2012 | **TMA4165** («Baas-æraen», faglærer Nils A. Baas m.fl.) | **6–7 oppgaver**; fast avslutning med én **fraktal-/IFS-dimensjonsoppgave** (og av og til én kaos-oppgave). 4 timer | **Kode D**: bestemt, enkel kalkulator (HP30S). Ingen formelsamling |
| 2013–2019 | **TMA4165** (Jakobsen/Baas-tradisjon) | **7–9 korte oppgaver**, hver med 1–2 deler; fraktal-/kaos-oppgavene **borte**. Ren kontinuerlig teori | Kode D: enkel kalkulator |
| 2021 | **TMA4165** (ny faglærer; hjemme-/koronaformat) | **5 oppgaver med eksplisitt poengvekting, sum 60** (Q1 = 20 p, Q2 = 15 p, Q3/Q4 = 10 p, Q5 = 5 p). Tyngre, mer teoretisk profil | (Hjemmeeksamen dette året) |

### Konstanter på tvers av alle år
- **5–9 oppgaver, 4 timer (6 t i SIF-årene), kode D, ingen flervalg.** Hvert sett dekker bredden: minst én lineær fasplan-oppgave, én stabilitets-/Lyapunov-oppgave, én periodisk-løsning-oppgave, én indeksoppgave, ofte en bifurkasjon og et eksistens/entydighet-spørsmål.
- **Ingen utdelt formelark og ingen lærebok/formelsamling** — dette skiller TMA4165 skarpt fra transform-/numerikk-emner som TMA4135. Alt teoriapparat (klassifikasjonskriterier, indeksformel, Lyapunov-teoremer, Poincaré–Bendixson, Liénard-betingelser) må sitte i hodet.
- **Faseportrett-skissering med orientering** er en gjennomgående ferdighet — nesten hvert sett ber om minst én skisse. Orienteringen (pilene) må begrunnes, f.eks. ved å regne ut vektorfeltet i ett bekvemt punkt eller ved fortegnet til `θ̇`.
- **Deloppgaver er ofte kjedet:** klassifisér likevektspunktene i a), bruk klassifikasjonen (indeks) i b) til å utelukke en periodisk bane, skissér i c).

### Sjangerskiftet ~2013 (viktigste utviklingsfunn)
Frem til og med ~2012 avsluttet nesten hvert sett med en **fraktaldimensjon-/IFS-oppgave** (finn kontraksjonsfaktor `s` slik at `n·s^D = 1` gir ønsket dimensjon `D`; Cantor-/Sierpinski-varianter), og av og til en **kaos-oppgave** (definér kaotisk avbildning à la Devaney; vis at `z ↦ z²` på enhetssirkelen er kaotisk). Fra ~2013 er disse **helt fraværende**, og settene er ren kvalitativ teori for planare ODE-systemer + eksistens/entydighet. En bok rettet mot **dagens** eksamen bør nedprioritere fraktaler/kaos til beredskapsnivå, men være klar over at pensumhistorikken inneholder dem.

### Juni-2021-settet (nytt, tyngre lag — følg med)
Dette settet (annen faglærer, hjemmeformat) introduserte tema som ikke sto på de klassiske settene:
1. **Sentermangfoldighetsteoremet** (local centre manifold): utled `w = h(z)` for et ikke-hyperbolsk likevektspunkt via ansatz `h(z) = az² + bz³ + …`; forklar teoremets betydning.
2. **Sektoranalyse + Bendixsons indeksformel som verktøy:** fra indeks 0 og tre sektorer utled `(e, h) = (0, 2)` og konkludér **saddle-node**.
3. **Kontraksjonsavbildning i funksjonsrom** `C([0,T])` med uniformnorm — vis eksistens **og** entydighet via Banachs fikspunktsetning (ikke bare Grönwall-entydighet).

---

## 2. Temafrekvens-tabell

Celleverdi = antall sett i perioden der temaet forekommer som minst én (del)oppgave. Basert på **~15 velkarakteriserte sett** fordelt på: Periode A (2004–2012, Baas-æraen, 6 sett med god tekst: V04, V05, V06, V07, V08, V09/V10/V11/V12 gruppert), Periode B (2013–2019, 7 sett: V13, V14, V16, K16, V17, K17, V18, K18, V19, K19 — telt som moderne kjerne), Periode C (2021, 1 sett). Tall er konservative og bygger på de settene som lot seg lese fullstendig.

| Tema | A (Baas) | B (moderne) | C (2021) | **Gjenganger-score** |
|---|---|---|---|---|
| **Lineært planart system: klassifisér + skissér faseportrett** (egenverdier → node/sadel/fokus/senter) | høy | høy | 1 | **~14/15 = 93 %** |
| **Stabilitet i origo via linearisering + Hartman–Grobman** | høy | høy | — | **~13/15 = 87 %** |
| **Lyapunov-funksjon** (sterk/svak; ofte 3D-system, finn `V = ½Σaᵢxᵢ²`) | høy | høy | — | **~12/15 = 80 %** |
| **Indeks av likevektspunkt / lukket kurve / i uendelig** | høy | høy | 1 | **~12/15 = 80 %** |
| **Periodisk løsning: Poincaré–Bendixson (invariant annulus)** | høy | høy | 1 | **~11/15 = 73 %** |
| **Bendixsons negative kriterium** (div `≠ 0` ⇒ ingen lukket bane) | høy | middels | — | **~9/15 = 60 %** |
| **Bifurkasjon** (parameter `μ`/`λ`; finn bifurkasjonspunkter, bifurkasjonsdiagram) | middels | høy | 1 | **~9/15 = 60 %** |
| **Eksistens/entydighet: Grönwall-estimat, Picard–Lindelöf** | middels | høy | 1 | **~9/15 = 60 %** |
| **Hamilton-system** (vis Hamiltonsk, finn `H`, klassifisér via Hessematrise) | høy | middels | — | **~8/15 = 53 %** |
| **Polarkoordinater** (`rṙ = xẋ+yẏ`, `r²θ̇ = xẏ−yẋ`; finn/analysér grensesykel) | høy | middels | — | **~8/15 = 53 %** |
| **Globale løsninger / maksimalt eksistensintervall** (blow-up i endelig tid) | lav | høy | — | **~6/15 = 40 %** |
| **Lineær stabilitetsteori med tidsavhengig perturbasjon** (`ẋ=(A+C(t))x`, `∫‖C‖<∞`) | middels | middels | — | **~6/15 = 40 %** |
| **Liénard-likning** (entydig grensesykel; senter via `g > αfF`) | høy | lav | — | **~5/15 = 33 %** |
| **Bendixsons indeksformel** `I = 1 + (e−h)/2` (sektorer ↔ indeks) | middels | lav | 1 | **~4/15 = 27 %** |
| **Homoklin/heteroklin bane** (definér + finn via `H`-nivåkurve) | lav | middels | — | **~4/15 = 27 %** |
| **Symmetri i faseportrett** (refleksjon bevarer/reverserer baner) | lav | middels | — | **~3/15 = 20 %** |
| **Fundamentalmatrise / `e^{tA}` / variasjon av parametre** | lav | middels | — | **~3/15 = 20 %** |
| **ω-grensemengde / Poincaré-avbildning (definisjon + bruk)** | middels | lav | — | **~3/15 = 20 %** |
| **Sentermangfoldighet** (centre manifold, `h(z)`-ansatz) | — | — | 1 | **~1/15 = 7 %** (kun 2021) |
| **Kontraksjonsavbildning i funksjonsrom** (Banach fikspunkt i `C([0,T])`) | — | — | 1 | **~1/15 = 7 %** (kun 2021) |
| **Fraktaldimensjon / IFS** (`n·s^D = 1`) | høy | — | — | **~6/15 = 40 %** (kun t.o.m. 2012) |
| **Kaotisk dynamikk** (Devaney-definisjon; `z ↦ z²`) | middels | — | — | **~2/15 = 13 %** (kun t.o.m. ~2007) |

**Viktigste funn:**
1. **De fire søylene (lineær klassifikasjon + faseportrett, stabilitet/Lyapunov, periodiske løsninger, indeksteori) er nærmest garantert hvert år** og bærer 70–80 % av poengene. En kandidat som mestrer disse fire perfekt består med god margin.
2. **Bifurkasjon og eksistens/entydighet er de faste «femte og sjette» søylene** i den moderne æraen (2013→): nesten hvert sett har én bifurkasjonsoppgave og ett Grönwall-/globalløsnings-spørsmål.
3. **Hamilton-systemer, polarkoordinater og Liénard** er faste teknikk-verktøy, men brukes ofte *inne i* de større søyleoppgavene (f.eks. Hamilton-`H` for å finne homokline baner eller klassifisere sentre; polarkoordinater for å bygge en invariant annulus til Poincaré–Bendixson).
4. **Fraktaler/IFS og kaos er «utdødd»** fra det aktive pensumet (borte etter ~2012). Behold som lavprioritert historisk beredskap.
5. **2021-laget (sentermangfoldighet, Banach-fikspunkt i funksjonsrom, sektor-drevet indeksanalyse)** er belagt på kun ett sett, men peker mot en mer teoretisk retning. Dekk grundig som primærmål for kommende sett — men verifisér vekten mot neste ordinære sett.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med løsningsforslagets foretrukne metode (verifisert mot de offisielle fasitene der de finnes).

### A. Lineært planart system: klassifisér og skissér faseportrett
- **Krav:** Skriv systemet som `ẋ = Ax`. Regn ut **spor `p = tr A`, determinant `q = det A`** og diskriminant `Δ = p² − 4q`. Klassifikasjon: `q < 0` → **sadel**; `q > 0, Δ > 0` → **node** (stabil hvis `p < 0`); `q > 0, Δ < 0` → **fokus/spiral** (stabil hvis `p < 0`); `p = 0, q > 0` → **senter**. Finn **egenverdier og egenvektorer** for orienteringen; noden/sadelen tangerer egenvektorene, og den «raske» retningen svarer til egenverdien lengst fra null. **Nullkliner** (`ẋ = 0` og `ẏ = 0`) tegnes inn som hjelpelinjer. Orientering fastsettes ved å regne ut vektorfeltet i ett punkt (f.eks. på en akse) eller fortegnet til `θ̇`.
- **Frekvens:** ~93 %, nesten alltid O1.
- **Omskrevet eksempel:** «Skissér faseportrettet med orientering for `ẋ = x + 9y`, `ẏ = 6x + 4y`.» (V19 O1)

### B. Stabilitet i ikke-lineært likevektspunkt via linearisering
- **Krav:** Finn likevektspunktene (`ẋ = ẏ = 0`). Regn **Jacobimatrisen** `J = ∂(f)/∂(x)`, evaluér i hvert punkt, klassifisér lineariseringen. **Hartman–Grobman:** hvis lineariseringen er **hyperbolsk** (ingen egenverdi med realdel 0) arver det ikke-lineære systemet typen. Fasitene er nøye med å påpeke at Hartman–Grobman **ikke** gjelder for sentre eller for ikke-hyperbolske punkt (der egenverdien er 0 eller rent imaginær) — da trengs Lyapunov, symmetri eller direkte analyse.
- **Frekvens:** ~87 %.
- **Omskrevet eksempel:** «Finn og klassifisér alle likevektspunkt for `ẋ = x + y − 2`, `ẏ = x² + 2x − y − 2`, og avgjør for hvert om det er stabilt, asymptotisk stabilt eller ustabilt.» (V18 O4)

### C. Lyapunov-funksjon (sterk/svak)
- **Krav:** Prøv en kvadratisk **ansatz** `V = ½(a x² + b y² + c z²)` med positive koeffisienter, regn `V̇ = ∇V · f`, og **velg koeffisientene slik at kryssleddene (som `xy`, `xyz`) kanselleres** og `V̇` blir negativ (definitt). `V̇ < 0` utenom origo ⇒ **sterk** Lyapunov-funksjon ⇒ asymptotisk stabil; `V̇ ≤ 0` ⇒ **svak** ⇒ (Lyapunov-)stabil. Faste triks: bruk ulikhetene `2xy ≤ x² + y²` og `x²y² ≤ ½(x⁴+y⁴)` for å dominere restledd. **Instabilitet:** finn en `V` (f.eks. `V = xy`) med `V̇ > 0` der `V > 0` (Chetaev/Lyapunovs instabilitetsteorem). **LaSalle/attraksjonsområde:** hvis `V` er en sterk Lyapunov-funksjon på hele `R²`, er attraksjonsområdet hele planet.
- **Frekvens:** ~80 %; ofte et 3D-system der linearisering er tungvint.
- **Omskrevet eksempel:** «Vis at origo er asymptotisk stabil for `ẋ = −2x − 2y + 2yz`, `ẏ = x − y − xz − xz²`, `ż = 3xyz − z³`.» (K19 O3 — fasit bruker `V = ½(3x² + 6y² + 2z²)`)

### D. Indeks av likevektspunkt, lukket kurve og i uendelig
- **Krav:** Indeksen til en enkel lukket kurve = totalt antall omdreininger vektorfeltet gjør langs kurven, `I = (1/2π)∮ dθ` med `tan θ = ẏ/ẋ`. Kjente verdier: **node/fokus/senter → +1**, **sadel → −1**. For et **ikke-hyperbolsk** punkt regnes indeksen direkte (tell fortegnsskift i `tan θ` langs en kvadratkontur, eller vis at feltet aldri peker i én kvadrant). **Sum-regelen:** indeksen til en lukket kurve = summen av indeksene til likevektspunktene inni. **Indeks i uendelig:** `I∞ = 2 − Σ I(Pᵢ)`. Konsekvens: en lukket bane har indeks +1, så den må omslutte punkt med indekssum +1 — brukes til å **utelukke** periodiske baner.
- **Frekvens:** ~80 %.
- **Omskrevet eksempel:** «Regn ut indeksen til origo for `ẋ = x² − y²`, `ẏ = −2xy`.» (V13 O4 — svar `−2`, via `f = z²`-argument)

### E. Periodisk løsning via Poincaré–Bendixson (invariant annulus)
- **Krav:** Bygg et **positivt invariant ringområde (annulus)** uten likevektspunkt. Standardgrep: bruk `V = ½(x²+y²) = ½r²` og vis `V̇ > 0` for liten `r` og `V̇ < 0` for stor `r` (feltet peker innover på ytre rand og utover på indre rand). Vis så at annulusen **ikke inneholder likevektspunkt** (ofte via `r²θ̇ = xẏ − yẋ ≠ 0`). **Poincaré–Bendixson** garanterer da en ikke-konstant periodisk bane. Polarkoordinater forenkler ofte: `ṙ = g(r)`, `θ̇ ≠ 0` gir grensesykelen direkte ved `g(r) = 0`.
- **Frekvens:** ~73 %.
- **Omskrevet eksempel:** «Vis at `ẋ = x − y − x³`, `ẏ = x + y − y³` har en periodisk bane i ringen `a ≤ x²+y² ≤ b`.» (V06 O5)

### F. Bendixsons negative kriterium
- **Krav:** Regn **divergensen** `∇·f = ∂X/∂x + ∂Y/∂y`. Hvis den har **fast fortegn (≠ 0)** i et enkeltsammenhengende område, finnes **ingen** ikke-konstant periodisk løsning der. Fasitene minner om at kriteriet **krever enkeltsammenheng** — i et ringområde gjelder det ikke (og motsier derfor ikke en grensesykel funnet med Poincaré–Bendixson).
- **Frekvens:** ~60 %.
- **Omskrevet eksempel:** «Vis at `ẋ = 5x + y + x²y − xy²`, `ẏ = x − 3y − x²y − xy²` ikke har noen periodisk løsning i `x²+y² < 2`.» (K19 O2)

### G. Bifurkasjon (parameteravhengig system)
- **Krav:** Analysér hvordan likevektspunktene og deres type endrer seg med en parameter (`μ` eller `λ`). Finn **kritiske parameterverdier** der: (i) antall likevektspunkt endres (**saddle-node** — to punkt oppstår/forsvinner), eller (ii) et punkt bytter stabilitet/type. For lineære systemer: følg `p(μ)`, `q(μ)`, `Δ(μ)` gjennom fokus → node → sadel-overgangene. Tegn **bifurkasjonsdiagram** (parameter mot `x` eller `y`), merk stabile/ustabile grener og bifurkasjonspunkt.
- **Frekvens:** ~60 %, fast i moderne æra.
- **Omskrevet eksempel:** «Finn alle bifurkasjonspunkt for `ẋ = μx − y²`, `ẏ = x + y − 1`, og tegn bifurkasjonsdiagram i `(μ, x)`.» (V19 O3)

### H. Eksistens og entydighet: Grönwall og Picard–Lindelöf
- **Krav:** **Entydighet via Grönwall:** for to løsninger sett `σ(t) = |x₁ − x₂|²`, deriver, bruk Lipschitz-egenskapen til å få `σ̇ ≤ Lσ`, integrer med integrerende faktor `e^{−Lt}` ⇒ `σ(t) ≤ e^{Lt}σ(0) = 0`. **Kontinuerlig avhengighet:** samme teknikk med et perturbasjonsledd `ε` gir `|x⁰ − x^ε| ≤ K(t)ε`. **Eksistens/Picard–Lindelöf:** globalt Lipschitz på et invariant område ⇒ global løsning; vis invariansen ved at feltet peker innover på randen. **Blow-up:** separér variable og vis at løsningen går mot uendelig i endelig tid (f.eks. `ẋ = x²` gir `x = 1/(1/x₀ − t)`).
- **Frekvens:** ~60 %.
- **Omskrevet eksempel:** «Vis med et Grönwall-estimat at `ẋ = 2 − cos²x`, `x(0) = x₀`, ikke kan ha mer enn én løsning.» (V17 O7)

### I. Hamilton-system
- **Krav:** Vis at systemet er **Hamiltonsk** ved `∂X/∂x + ∂Y/∂y = 0` (i et enkeltsammenhengende område). Finn `H` ved å integrere `H_y = X` og `H_x = −Y` og matche integrasjons-«konstantene». **Klassifisér likevektspunkt = kritiske punkt for `H`** via Hessematrisens determinant: min/maks av `H` → **senter**, sadelpunkt for `H` → **sadel** for systemet. Faseportrettet følger nivåkurvene til `H`; homokline/heterokline baner ligger på spesielle nivåer (ofte `H = 0`).
- **Frekvens:** ~53 %.
- **Omskrevet eksempel:** «Vis at `ẋ = x²y + 2y³`, `ẏ = −2x³ − xy²` er Hamiltonsk, og finn en Hamiltonfunksjon.» (K19/V19 O4 — `H = ½(x⁴ + x²y² + y⁴)`)

### J. Polarkoordinater og grensesykel-konstruksjon
- **Krav:** Bruk `rṙ = xẋ + yẏ` og `r²θ̇ = xẏ − yẋ`. Hvis systemet blir `ṙ = g(r)`, `θ̇ = konstant`, gir røttene til `g(r) = 0` (utenom `r = 0`) grensesyklene, og fortegnet til `ṙ` rundt roten avgjør stabiliteten. Brukes både til å **finne** eksplisitte grensesykler og til å bygge invariante annuli (se E). **Poincaré-avbildning** `P(r₀)`: integrer `ṙ`-likningen over ett omløp (`Δt = 2π/|θ̇|`).
- **Frekvens:** ~53 % (som verktøy).
- **Omskrevet eksempel:** «I polarkoordinater er `ṙ = r(1−r²)`, `θ̇ = 1`. Finn den periodiske banen og Poincaré-avbildningen.» (V10 O5)

### K. Liénard-likning (entydig grensesykel / senter)
- **Krav:** For `ẍ + f(x)ẋ + g(x) = 0`: **entydig grensesykel** hvis `f` er like, `F(x) = ∫₀ˣ f` har nøyaktig ett positivt nullpunkt `a`, `F → ∞` monotont for `x > a`, og `g` er odde med `g(x) > 0` for `x > 0` (Liénards teorem). **Senter i origo** (dermed periodiske løsninger) hvis `f`, `g` odde og `g(x) > α f(x)F(x)` for en `α > 1` nær origo (Jordan & Smith teorem 11.3).
- **Frekvens:** ~33 %, mest i Baas-æraen.
- **Omskrevet eksempel:** «Har `ẍ + xẋ + x³ = 0` periodiske løsninger?» (V06 O2b — ja, senter i origo)

### L. Bendixsons indeksformel og sektoranalyse
- **Krav:** Rundt et isolert likevektspunkt: `I = 1 + (e − h)/2`, der `e` = antall **elliptiske** og `h` = antall **hyperbolske** sektorer. Brukes to veier: (i) **konstruér** et faseportrett med foreskrevet indeks (velg `e`, `h`); (ii) **utled** sektorstrukturen fra en beregnet indeks + oppgitt antall sektorer (2021: indeks 0 + tre sektorer ⇒ `(e,h) = (0,2)` + én parabolsk ⇒ **saddle-node**).
- **Frekvens:** ~27 %.
- **Omskrevet eksempel:** «Skissér faseportrett rundt et likevektspunkt slik at indeksen blir 0, +3 og −3.» (V06 O3)

### M. Lineær stabilitet med tidsavhengig perturbasjon
- **Krav:** For `ẋ = (A + C(t))x` (evt. `+ h(t)`): hvis alle egenverdier til `A` har **negativ realdel** og `∫₀^∞ ‖C(t)‖ dt < ∞`, er alle løsninger **asymptotisk stabile**. Hvis `max Re λᵢ = 0` (med `A` diagonaliserbar / distinkte egenverdier) og `∫‖C‖ < ∞`, er de **stabile** (men ikke nødvendigvis asymptotisk).
- **Frekvens:** ~40 %.
- **Omskrevet eksempel:** «Avgjør stabiliteten i origo for `ẋ = (−1 + e^{−t}/(1+t²))x + (3 + te^{−t})y`, `ẏ = (−2−3t²)/(1+t²) x − y`.» (V18 O6)

### N. Symmetri, homokline/heterokline baner, ω-grensemengder
- **Krav:** **Symmetri:** vis at en refleksjon (f.eks. `(x,y) ↦ (y,x)`) sender løsninger til løsninger; avgjør om orienteringen bevares eller reverseres — brukes til å klassifisere «tvillingpunkt» uten ny regning. **Homoklin bane:** bane som forlater og returnerer til samme sadel; finnes ofte på en `H`-nivåkurve. **Heteroklin bane:** forbinder to ulike likevektspunkt. **ω-grensemengde:** definér, og bruk Poincaré–Bendixson til å karakterisere den (likevektspunkt, separatrisesyklus eller grensesykel).
- **Frekvens:** ~20–27 %.

### O. Fundamentalmatrise, `e^{tA}`, variasjon av parametre (beredskap)
- **Krav:** Bygg løsningsbasis fra egenverdier/-vektorer (komplekse egenverdier `α ± iβ` gir `e^{αt}(cos βt, sin βt)`-baser). `e^{tA} = Φ(t)Φ(0)^{−1}`. Løs inhomogene lineære IVP-er med variasjon av parametre.
- **Frekvens:** ~20 %.

### P. Fraktaldimensjon / IFS og kaos (historisk, t.o.m. ~2012)
- **Krav:** For en fraktal generert av `n` ikke-overlappende similituder med kontraksjonsfaktor `s`: `n·s^D = 1` ⇒ `D = ln n / ln(1/s)`. Blandede faktorer: løs `Σ sᵢ^D = 1`. **Kaos (Devaney):** avbildning er kaotisk hvis den er (1) sensitiv for initialdata, (2) topologisk transitiv, (3) periodiske punkt ligger tett; klassisk eksempel `z ↦ z²` på enhetssirkelen.
- **Frekvens:** ~40 % (IFS) / ~13 % (kaos) — men **kun t.o.m. ~2012**. Beredskap.

### Q. Sentermangfoldighet og Banach-fikspunkt i funksjonsrom (nytt 2021)
- **Krav:** **Sentermangfoldighet:** i et ikke-hyperbolsk punkt, transformér til senter-/stabil-koordinater, skriv `w = h(z)` med ansatz `h(z) = az² + bz³ + …`, sett inn i invariansligningen og match ordensvis. Forklar teoremets rolle (lineariseringen fanger ikke dynamikken i ikke-hyperbolske punkt). **Banach:** vis at en integraloperator `S: f ↦ ∫₀ᵗ f(t−s)h(s)ds` er en **kontraksjon** i `C([0,T])` med uniformnorm ⇒ entydig fikspunkt (eksistens **og** entydighet).
- **Frekvens:** ~7 % (kun 2021). Dekk grundig som primærmål.

---

## 4. Sensorens krav

### Faste metaregler (fra oppgaveinstrukser og de offisielle fasitene)
1. **Begrunn alle svar; vis nok mellomregning.** Ordrett instruks på hvert sett.
2. **Metode-/teoremnavn skal bæres eksplisitt:** «Hartman–Grobmans teorem», «Poincaré–Bendixson», «Bendixsons negative kriterium», «Bendixsons indeksformel», «Grönwall», «Picard–Lindelöf», «Liénards teorem». Fasitene navngir dem.
3. **Faseportrett-skisser skal ha orientering** (piler) og vise egenvektorretninger/nullkliner der relevant. Fasitene tegner alltid inn nullkliner som organiserende hjelpelinjer, selv om de ikke er del av selve faseportrettet.
4. **Presis begrepsbruk:** «stabil» vs. «asymptotisk stabil» vs. «ustabil» må holdes fra hverandre — et senter er stabilt men **ikke** asymptotisk stabilt; en svak Lyapunov-funksjon gir kun stabilitet.
5. **Hartman–Grobman brukes riktig:** fasitene påpeker eksplisitt når teoremet **ikke** er sterkt nok (ikke-hyperbolske punkt, sentre) og krever da Lyapunov, symmetri eller direkte argument. (K16-fasiten bemerker at Hartman–Grobman i strengt tatt utilstrekkelige tilfeller likevel gir riktig svar via Grobmans sterkere resultat.)
6. **Eksistens OG entydighet:** 2021-fasiten irettesetter kandidater som kun viste entydighet (Grönwall) når oppgaven ba om at en løsning «har» (eksisterer) og er entydig — begge deler må vises.
7. **Poeng og karakter:** de klassiske settene hadde ingen eksplisitt poengvekting (delpunkt teller omtrent likt); 2021-settet har eksplisitt vekting (sum 60).
8. **Feilforplantning tolereres i praksis:** 2021-eksaminatoren var «raus med regnefeil» der oppgaven viste seg tyngre enn tiltenkt.

### Hva som skiller karakternivåene
- **Bestått-sjiktet** henter poeng på mekanikken: regn `p, q, Δ` og klassifisér lineære system; finn Jacobimatrisen og egenverdiene; sett opp en Lyapunov-ansatz; regn divergensen for Bendixson.
- **Midtsjiktet** behersker i tillegg: fullstendig faseportrett med orientering **og** egenvektorer/nullkliner; velge Lyapunov-koeffisienter som kansellerer kryssledd; bygge en invariant annulus til Poincaré–Bendixson; bifurkasjonsdiagram med stabilitetsmerking; Grönwall-entydighet.
- **Toppsjiktet** kjennetegnes av: (i) korrekt behandling av **ikke-hyperbolske** punkt (der Hartman–Grobman svikter) via Lyapunov/symmetri/direkte analyse; (ii) indeks i uendelig og sum-regelen brukt til å **utelukke** periodiske baner; (iii) `H`-nivåkurve-argument for homokline/heterokline baner; (iv) eksistens **og** entydighet (Banach/Picard–Lindelöf), globale løsninger og blow-up-tid; (v) sektoranalyse via Bendixsons indeksformel; (vi) sentermangfoldighet (2021-laget).

---

## 5. Typiske feil (synlige i fasitpraksis eller innebygd i oppgavene)

1. **Feil bruk av Hartman–Grobman på ikke-hyperbolske punkt:** å «klassifisere» et senter eller et punkt med en null-egenverdi via linearisering. Lineariseringen av et senter kan skjule en spiral i det fulle systemet.
2. **Glemme orientering / begrunnelse for pilene** i faseportrettet. Bare kurveformen uten retning gir ikke full uttelling.
3. **Kun entydighet, ikke eksistens** når oppgaven ber om begge (2021-fasitens hyppigste anmerkning).
4. **Bendixsons negative kriterium brukt i et ikke-enkeltsammenhengende område** (f.eks. en annulus) — kriteriet gjelder ikke der, og en grensesykel motsier det ikke.
5. **Svak vs. sterk Lyapunov forvekslet:** `V̇ ≤ 0` gir bare stabilitet (ikke asymptotisk); å hevde asymptotisk stabilitet fra en svak `V`.
6. **Indeks feilberegnet i ikke-hyperbolsk punkt:** å telle et endelig antall piler uten å knytte dem til antall fulle omdreininger (2021-fasiten avviser eksplisitt «tell noen piler»-forsøk).
7. **`x⁶ + y⁶ = r⁶`-fella:** å anta at `xⁿ + yⁿ = rⁿ` for `n > 2` når man bygger radiale estimater (2021-fasiten peker på nettopp denne feilen). Man må maksimere/minimere kryssleddene korrekt.
8. **Feil Lyapunov-ansatz:** å ikke velge koeffisientene slik at kryssleddene (`xy`, `xyz`) forsvinner, og dermed sitte fast med et udefinert fortegn.
9. **Blande sammen `ṙ`- og `θ̇`-uttrykkene:** feil i `rṙ = xẋ+yẏ` eller `r²θ̇ = xẏ−yẋ`.
10. **Feil indeksverdier:** å gi en sadel indeks +1 (den er −1) eller å glemme `I∞ = 2 − Σ Iᵢ`.
11. **Tidsfelle:** den store fasplan-oppgaven (klassifisér alle punkt + full skisse, ofte med 4–5 likevektspunkt og symmetrier, som V19/K19 O5) er tung; å bruke for lang tid der stjeler fra de andre oppgavene.

---

## 6. Teorem-, notasjons- og formelapparat

### Ingen hjelpemidler — alt må sitte
Hjelpemiddelkode **D**: kun en enkel kalkulator. **Ingen formelsamling, ingen lærebok, ingen egne notatark.** Dette betyr at hele teoriapparatet under må kunne aktivt og fra hukommelsen. Boka bør derfor drille både anvendelse **og** presis formulering av teoremene.

### Klassifikasjon av lineære planare system (kjernetabellen)
Fra `p = tr A`, `q = det A`, `Δ = p² − 4q`:
- `q < 0` → **sadel** (indeks −1).
- `q > 0, Δ > 0` → **node** (stabil `p<0` / ustabil `p>0`; indeks +1).
- `q > 0, Δ < 0` → **fokus/spiral** (stabil `p<0` / ustabil `p>0`; indeks +1).
- `q > 0, p = 0` → **senter** (stabilt, ikke asymptotisk; indeks +1).
- degenererte tilfeller (`Δ = 0`, egenverdi 0): degenererte noder/sadler.

### Må beherskes aktivt (kunne anvende og navngi)
- **Linearisering:** Jacobimatrise `J = (∂fᵢ/∂xⱼ)`; **Hartman–Grobman** (hyperbolsk ⇒ lokal topologisk konjugasjon) og dens grenser.
- **Lyapunov-teori:** sterk/svak Lyapunov-funksjon (stabilitet/asymptotisk stabilitet), Lyapunovs instabilitetsteorem (Chetaev), LaSalles invariansprinsipp, attraksjonsområde. Ulikhetene `2xy ≤ x²+y²`, `x²y² ≤ ½(x⁴+y⁴)`.
- **Indeksteori:** `I = (1/2π)∮ dθ`; node/fokus/senter +1, sadel −1; sum-regelen; **Bendixsons indeksformel** `I = 1 + (e−h)/2`; `I∞ = 2 − Σ Iᵢ`.
- **Periodiske løsninger:** **Poincaré–Bendixson** (invariant kompakt annulus uten likevektspunkt ⇒ grensesykel eller ω-grensesyklus); **Bendixsons negative kriterium** (`∇·f ≠ 0` i enkeltsammenhengende område ⇒ ingen lukket bane); **Liénards teorem** (entydig grensesykel).
- **Polarkoordinater:** `rṙ = xẋ + yẏ`, `r²θ̇ = xẏ − yẋ`; Poincaré-avbildning.
- **Hamilton-system:** `ẋ = H_y`, `ẏ = −H_x`; `∇·f = 0`; klassifisering via Hessematrise; nivåkurver som baner.
- **Eksistens/entydighet:** **Grönwalls ulikhet** (via `σ = |x₁−x₂|²`, integrerende faktor); **Picard–Lindelöf** (lokal Lipschitz); globalt eksistensteorem (invariant område + Lipschitz); blow-up i endelig tid.
- **Lineær stabilitetsteori:** `ẋ = (A + C(t))x`; egenverdi-realdel + `∫‖C‖ < ∞` ⇒ (asymptotisk) stabilitet; fundamentalmatrise `Φ`, `e^{tA}`, variasjon av parametre.
- **Bifurkasjon:** saddle-node, node↔fokus-overganger; bifurkasjonsdiagram.
- **(2021-lag):** sentermangfoldighetsteoremet (`w = h(z)`-ansatz); Banachs fikspunktsetning / kontraksjonsavbildning i `C([0,T])` med uniformnorm.
- **(Beredskap):** fraktaldimensjon `n·s^D = 1`; kaos (Devaney-definisjon, `z ↦ z²`).

### Notasjonskonvensjoner boken bør speile
`ẋ = f(x)`; `ẋ = X(x,y)`, `ẏ = Y(x,y)`; Jacobimatrise `J` / `Df`; `p = tr A`, `q = det A`, `Δ = p²−4q`; egenverdier `λ`, egenvektorer `v`; Lyapunov-funksjon `V`, `V̇`; indeks `I`, `I∞`; elliptiske/hyperbolske sektorer `e`/`h`; Hamiltonfunksjon `H`; polare `r, θ` med `ṙ`, `θ̇`; ω-grensemengde `ω(Γ)`; Poincaré-avbildning `P`; Lipschitz-konstant `L`. Lærebokreferansen i de eldre fasitene er **Jordan & Smith, *Nonlinear Ordinary Differential Equations*** (og Perko for indeksformelen).

---

## 7. Prognose og prioritering

> TMA4165 er blant de mest forutsigbare emnene: samme kvalitative kjerne (lineær klassifikasjon, stabilitet/Lyapunov, periodiske løsninger, indeks) hvert år, supplert med bifurkasjon og eksistens/entydighet i den moderne æraen. Prognosen vekter kjernen tyngst, legger 2021-laget som obligatorisk primærmål, og nedprioriterer fraktaler/kaos til beredskap.

### Nivå 1 — må beherskes perfekt (bærer eksamenen)
1. **Lineære planare system: klassifisér + skissér faseportrett med orientering** — ~93 %. `p, q, Δ`, egenverdier/-vektorer, nullkliner.
2. **Stabilitet via linearisering + Hartman–Grobman** — ~87 %. Inkludert korrekt håndtering av ikke-hyperbolske punkt.
3. **Lyapunov-funksjoner (sterk/svak, 3D)** — ~80 %. Ansatz som kansellerer kryssledd; instabilitet; LaSalle/attraksjonsområde.
4. **Indeksteori** (punkt/kurve/uendelig, Bendixsons indeksformel) — ~80 %.
5. **Poincaré–Bendixson (invariant annulus) + Bendixsons negative kriterium** — ~73 % / ~60 %.

### Nivå 2 — må kunne (bredde + karakterskiller)
6. **Bifurkasjon** (parameteranalyse + bifurkasjonsdiagram) — ~60 %.
7. **Eksistens/entydighet: Grönwall, Picard–Lindelöf, globale løsninger, blow-up** — ~60 %.
8. **Hamilton-system** (finn `H`, klassifisér via Hesse, nivåkurve-baner) — ~53 %.
9. **Polarkoordinater / grensesykel / Poincaré-avbildning** — ~53 %.
10. **Liénard-likning** (entydig grensesykel / senter) — ~33 %.
11. **Lineær stabilitet med tidsavhengig perturbasjon** — ~40 %.
12. **Homoklin/heteroklin bane + symmetriargument** — ~27 %.

### Nivå 3 — bør dekkes (nytt lag / lav frekvens / beredskap)
13. **Sentermangfoldighet + Banach-fikspunkt i funksjonsrom** — kun 2021, men signal om en mer teoretisk retning; dekk grundig som primærmål for kommende sett.
14. **Fundamentalmatrise / `e^{tA}` / variasjon av parametre** — ~20 %.
15. **Fraktaldimensjon / IFS og kaos** — historisk (t.o.m. ~2012); hold som lavprioritert beredskap.

### Konkret prognose for neste sett
Basert på den stabile malen: **5–9 oppgaver over 4 timer**, kode D (kun kalkulator, ingen formelark), ingen flervalg, med:
- **O1:** lineært planart system — klassifisér og skissér faseportrett med orientering (evt. finn `e^{tA}` / generell løsning).
- **O2–O3:** stabilitet i ikke-lineære likevektspunkt — én via linearisering/Hartman–Grobman, én via Lyapunov-funksjon (ofte 3D).
- **O4:** periodiske løsninger — enten Poincaré–Bendixson (bygg annulus) eller Bendixsons negative kriterium (utelukk lukket bane), evt. Hamilton/Liénard.
- **O5:** indeks (av punkt, kurve eller i uendelig), gjerne koblet til å utelukke en periodisk bane.
- **O6–O7:** bifurkasjon (parameteranalyse + diagram) og eksistens/entydighet (Grönwall / global løsning / blow-up).
- **Mulig tyngre teoritillegg** (hvis 2021-linjen videreføres): sentermangfoldighet eller kontraksjonsavbildning i funksjonsrom.

**Usikkerhetsmoment:** Faglærerbytte påvirker profilen markant — Baas-æraen (fraktaler/kaos) vs. den moderne kjernen vs. 2021-laget (teoritungt). Verifisér vekten av sentermangfoldighet/Banach-fikspunkt mot neste ordinære sett, og sjekk om fraktaler/kaos gjeninnføres.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TMA4165/` (~43 PDF-er).

**Løsningsforslag lest grundig (offisielle fasiter, maskinlesbar tekst):**
- `tma4165_june2021_solutions.pdf` / `dynamsys_exam_publishedversion_june.pdf` (juni 2021, fullstendig fasit med sensorkommentarer, poengvekting og karakterrelevante anmerkninger — mest detaljerte kilde)
- `tma4165eksV19lf.pdf`, `tma4165eksK19lf.pdf` (V/K 2019, full fasit)
- `tma4165eksV13lf.pdf` (V2013, full fasit — bred dekning av eksistens/entydighet, LaSalle, lineær stabilitetsteori)
- `tma4165eksV12lf.pdf`, `tma4165eksV11lf.pdf`, `tma4165eksV10lf.pdf`, `tma4165eksV09lf.pdf`, `tma4165eksV08lf.pdf`, `tma4165eksV07lf.pdf`, `tma4165eksV06lf.pdf`, `tma4165eksV05lf.pdf`, `tma4165eksV04lf.pdf` (Baas-æraen; inkluderer fraktal-/kaos-oppgavene)
- `sif5025eksV03lf.pdf` (SIF5025 2003, forgjenger-emnekode)

**Oppgavesett lest grundig (oppgave-for-oppgave, siste ~8 år):**
- `tma4165eksK19en.pdf`, `tma4165eksV19en.pdf`, `tma4165eksK18en.pdf`, `tma4165eksV18en.pdf`, `tma4165eksK17en.pdf`, `tma4165eksV17en.pdf`, `tma4165eksK16no.pdf`, `tma4165eksV16no.pdf`, `tma4165eksV14no.pdf`, `tma4165eksV13en.pdf` (+ tilhørende `-lf`/`-no`/`-nb`-varianter).

**Merknader om kildene:**
- **Skann-hull:** Følgende løsningsforslag er **skannede/håndskrevne** og lot seg ikke tekst-utvinne (nær null tegn ved `pdftotext`): `tma4165eksK16lf.pdf`, `tma4165eksK17lf.pdf`, `tma4165eksK18lf.pdf`, `tma4165eksV16lf.pdf`, `tma4165eksV17lf.pdf`, `tma4165eksV18lf.pdf`. For disse årene (2016–2018) er analysen basert på **oppgavesettene** (som finnes som tekst) + fasitmønstre fra tilstøtende år. `sif5025eksV02fa.pdf` (færøysk?/spesialmålform 2002) ga også nær tomt uttrekk.
- **Format-/faglærerskifte:** Emnet har hatt flere faglærere. Baas-æraen (2004–~2012) hadde faste fraktal-/kaos-sluttoppgaver; disse forsvant ~2013. Juni-2021-settet (hjemmeeksamen, ny faglærer) er merkbart mer teoretisk (sentermangfoldighet, Banach-fikspunkt). En bok bør dekke den stabile kjernen fullt ut og ta med både det historiske (fraktaler/kaos, som beredskap) og det nye teorilaget.
- **Ingen formelsamling:** i motsetning til transform-/numerikk-emner deles **ingen** formelark ut — alt teoriapparat må pugges og kunne anvendes.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorkrav er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasitformuleringer er gjengitt ordrett. Matematiske uttrykk og teoremnavn er standard fagnotasjon.

**Fagbeskrivelse:** omskrevet sammendrag basert på NTNUs emnebeskrivelse for TMA4165 (Dynamiske systemer, 7,5 sp) og det observerte oppgavepensumet.

**Forbilde:** `docs/hoyskole-boker/tma4135/EKSAMENSANALYSE.md` (8-delers strukturmal og detaljnivå).
