# Eksamensanalyse: IN1900 Introduksjon til programmering med vitenskapelige anvendelser (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på hele UiO-arkivet 2007–2025:
> 38 eksamenssett (19 avsluttende + 19 midtveis) med tilhørende offisielle løsningsforslag
> (76 filer totalt). Lesestrategi som avtalt: løsningsforslagene og de siste ~8 årene (2018–2025)
> er gjennomgått grundig; eldre sett (2007–2017) er skummet for form- og temaregistrering.
> **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster
> eller fasit. Kodemønstrene som beskrives er standard Python-idiomer, ikke opphavsrettsbeskyttet tekst.
> Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

### Dagens form (2018–2025)

IN1900 vurderes med **to digitale eksamener i Inspera**, uten hjelpemidler (kun Insperas
innebygde kalkulator). Karakterskala A–F. All kode i oppgavetekstene er Python 3.

| Eksamen | Vekt | Varighet | Struktur | Poeng |
|---|---|---|---|---|
| **Midtveiseksamen** (oktober) | **25 %** | Vindu 15:00–19:00 (emnebeskrivelsen oppgir 2 t effektiv tid) | **Kun flervalg** — 20 spørsmål | Maks **25** |
| **Avsluttende eksamen** (desember) | **75 %** | 4 timer | **Blanding** av flervalg/matche og fritekst-koding — 13–16 spørsmål | Maks **75** |

Mekanisk detalj som gjentas i hvert avsluttende sett: **siste oppgave (Question 15/16/17) skal
ikke besvares** — den er bare et felt der sensor legger inn midtveispoengene, slik at de to
eksamenene summeres til 100. På flervalg gir feil svar og blankt likt (0 poeng), så man skal
**alltid krysse av**. Poeng er oppgitt per oppgave, og deloppgaver deler poengene likt.

Fast sensur-signal i innledningen: mangler oppgaveteksten informasjon, kan man gjøre **rimelige
antagelser** dokumentert i kommentarer. Sensor tar også høyde for åpenbare skrivefeil i
oppgaveteksten (dokumentert eksplisitt i fasit for H2018 O3.2, hvor ODE-en var skrevet `u'=f(u)`
i stedet for `f(u,t)`, og H2024 O14 hvor indeksangivelsen for `forward_euler` var feil — begge
hensyntas ved retting). «Most of the questions lead to short code with little need for comments» —
sensor forventer kort, idiomatisk kode.

### Historisk utvikling

Emnet het **INF1100** til og med ~2016 og skiftet navn til **IN1900** rundt 2017 (H2017-settet
står med «IN1900/INF1100», og 2018–2020 med «IN1900 og INF1100»). Fra 2021 er det rent IN1900.
Faglig kjerne (Langtangen/Sundnes-tradisjonen, «A Primer on Scientific Programming with Python»)
har vært påfallende stabil gjennom hele perioden.

| Periode | Form |
|---|---|
| **2007–2016** (INF1100) | Papireksamen, 3–4 t. **Bare fritekst-oppgaver** («Exercise 1, 2, …»), ingen flervalg, ingen «hva skrives ut»-sjanger. 8–12 oppgaver, 75–100 poeng. H2007 tillot ett håndskrevet A5-ark; senere ingen hjelpemidler. Midtveis også fritekst på papir. |
| **2016–2017** (overgang) | Digitaliseringen starter. «Hva skrives ut?»-flervalg dukker opp (H2016 og særlig H2017 med 24 spørsmål / 84 poeng). Blanding av flervalg og kode. |
| **2018–2019** | Inspera-formatet stabiliseres: ~21 nummererte del­spørsmål i blokker (flervalg 1.x → korte kodeoppgaver 2.x → tunge klasse-/ODE-oppgaver 3.x), 75 poeng, 4 t. |
| **2020** (korona) | Hjemmeeksamen. «Alle hjelpemidler unntatt kommunikasjon», spørsmål trukket tilfeldig fra en pool, obligatorisk muntlig etterkontroll for ~2/3 av kandidatene. Ellers samme oppgavetyper. |
| **2021–2025** | Moden digital form: 13–16 selvstendige, nummererte oppgaver. H2021 stikker ut som det vanskeligste settet (secant-metode, Lorenz-system, brettspill-klasse, B-splines med rekursjonsfelle). 2022–2025 har roet seg på ~13–16 oppgaver. |

### Flervalg vs. kodeskriving — fordelingen

Dette er det viktigste formtrekket for en lærebok. På **avsluttende eksamen** er poengtyngden klart
på **kodeskriving**, mens flervalg utgjør en «trace-skall» i starten:

- **Rene flervalg / matche-tabeller** (select one, match the values): typisk de 4–7 første
  oppgavene, 2–3,5 poeng hver → ca. **15–25 % av de 75 poengene**.
- **Fritekst kodeskriving** (skriv funksjon/klasse) + **fritekst «hva skrives ut»** (skriv utskriften):
  de resterende oppgavene, 3–12 poeng hver → ca. **75–85 % av poengene**.

Eksempel H2024 (75 p): flervalg O1–O4 = 9 p (12 %); resten (O5 les klasse-utskrift, O6–O14 kode) = 66 p.
Eksempel H2025 (75 p): flervalg/kort O1–O7 ≈ 14 p (19 %); kodeskriving O8–O16 = 61 p.

**Midtveiseksamen er 100 % flervalg** (20 spørsmål, 25 poeng). Der er 4–5 av spørsmålene
«match the values»-tabeller (0,5 p per rad, maks 2 p), resten «select one» à 1 p. Innhold: nesten
utelukkende kodesporing, indeksering, boolske uttrykk, løkketerminering og «hva gjør/hva er riktig».

**Samlet vurdering (25 % ren MC + 75 % overveiende kode)** ≈ grovt **40 % flervalg-sjanger, 60 %
kodeskriving**. En lærebok må trene begge: presis kodesporing (for midtveis + flervalgsskallet) og
selvstendig kodeproduksjon i sensors idiom (for hovedtyngden av finalen).

Merk også at midtveiseksamen **deles med parallellemner** (IN-KJM1900 og IN-GEO1900, tidligere
MAT-IN1105) — samme sett, som forklarer at midtveis holder seg til fellespensumets kjerne.
Tidligere midtveissett (t.o.m. 2018/2019) hadde negativ uttelling (−1) på enkelte fler-svars-spørsmål;
fra 2024/2025 er negativ scoring fjernet (0 for feil).

---

## 2. Temafrekvens

Basert på de **8 avsluttende settene 2018–2025** (kolonnene), med de eldre settene (2007–2017)
som bakteppe. Celleverdi = antall av de to settene i årsgruppen der temaet forekommer som egen
oppgave eller tydelig deloppgave. Gjenganger-score = andel av de 8 nyere settene.

| Tema | 2018–19 | 2020–21 | 2022–23 | 2024–25 | **Gjenganger-score** |
|---|---|---|---|---|---|
| **«Hva skrives ut?» / kodesporing** (MC + fritekst) | 2 | 2 | 2 | 2 | **8/8 = 100 %** |
| **Klasser med spesialmetoder** (`__init__`/`__call__`/`__str__`/`__add__`/`__mul__`) | 2 | 2 | 2 | 2 | **8/8 = 100 %** |
| **ODE-løsere / ODESolver-hierarkiet** (Forward Euler, RK4, arv/subklasse) | 2 | 2 | 2 | 2 | **8/8 = 100 %** |
| **Fillesing → dictionary/lister** | 2 | 2 | 2 | 2 | **8/8 = 100 %** |
| **Rekke-/sum-implementering** (Taylor/potensrekke) | 2 | 2 | 2 | 2 | **8/8 = 100 %** |
| **Testfunksjon** (`assert abs(exp−comp) < tol`) | 2 | 1 | 2 | 2 | **7/8 = 88 %** |
| **Plotting med matplotlib** (ofte som del-b) | 2 | 2 | 1 | 2 | **7/8 = 88 %** |
| **Lister vs. NumPy-arrays / vektorisering** | 2 | 1 | 2 | 1 | **6/8 = 75 %** |
| **Feilhåndtering (exceptions, try/except-matching)** | 2 | 1 | 2 | 1 | **6/8 = 75 %** (≈100 % på midtveis) |
| **Differenslikninger** (Bogdanov, Lotka-Volterra, koblede) | 1 | 1 | 2 | 2 | **6/8 = 75 %** (4/4 i 2022–25) |
| **Stykkvis/diskontinuerlig funksjon** (Heaviside, piecewise) | 1 | 1 | 1 | 2 | **5/8 = 63 %** |
| **Numerisk derivasjon** (forlengs/sentrert differanse) | 2 | 1 | 0 | 1 | **4/8 = 50 %** |
| **Nullpunkt/likningsløsing** (Newton, secant, `scipy.optimize.root`) | 0 | 1 | 1 | 1 | **3/8 = 38 %** (voksende) |
| **String-/listealgoritmer** (palindrom, primtall, sortering, søk) | 1 | 2 | 1 | 0 | **4/8 = 50 %** (mest i MC) |
| **2D NumPy-array / matrise** (`np.zeros((n,n))`, indeksering) | 0 | 1 | 1 | 0 | **2/8 = 25 %** |
| **Numerisk integrasjon** (trapesmetoden) | 1 | 0 | 0 | 0 | **1/8 = 13 %** (nesten bare MC) |

**Viktigste funn:** Fem temaer forekommer i **hvert eneste** nyere sett — kodesporing, klasser
med spesialmetoder, ODE-løsere, fillesing til dictionary, og rekke-implementering. Dette er
ryggraden. En IN1900-bok som treffer disse fem perfekt dekker mesteparten av eksamens­poengene.

**«Anvendelses-modellen» roterer, mønsteret er fast.** Den vitenskapelige innpakningen varierer
år for år, men den underliggende programmeringsøvelsen er identisk:
- *ODE-systemer:* SEIR (H2018), SIRD (H2020), Lorenz-vær (H2021), planetbane 6D (H2022),
  Fitzhugh-Nagumo nervecelle (H2023), Bogdanov-map (H2024), SEID-ebola (H2025). Alltid:
  definér høyresiden `f(t,u)` (eller som klasse med `__call__`), sett initialbetingelser, kall
  `RungeKutta4`/`ForwardEuler`, plott.
- *Rekker:* eksponential (H2018/H2024), logaritme (H2020), invers tanh (H2022), sinh (H2023/H2025),
  arcsin (H2021), Chebyshev (H2022). Alltid: `s = 0`, løkke `for k in range(N+1): s += ...`, `return s`.
- *Klasser:* funksjonsklasse F (H2020/H2025-MC), Diff numerisk derivert (H2024), Piecewise (H2024),
  Vec2D/Vec3D (H2024/H2025), Polynomial (H2023), SinHyp (H2023), Chebychev (H2022),
  Parabola/Line-arv (H2018/H2023), RandomGenerator (H2021).

**Historisk kontekst (2007–2016):** Samme kjerne, men uten flervalgsskallet. De gamle
INF1100-settene besto av rene programmeringsoppgaver med akkurat de samme byggeklossene
(rekker, klasser med `__call__`, ODE-løsere, fillesing). Kodesporing var da innbakt i fritekst
(«hva skriver dette ut?») i stedet for som flervalg. Kontinuiteten er så sterk at gamle oppgaver
er direkte relevante øvingsstoff — bare formatet er endret.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med sensors foretrukne løsningsmetode. To hovedfamilier:
**«hva skrives ut»-familien** (les kode, angi resultat) og **«skriv X»-familien** (produsér kode).

### A. «Hva skrives ut?» — kodesporing (flervalg og fritekst)
- **Krav:** Kjør koden mekanisk i hodet og angi utskriften **nøyaktig** som terminalen ville skrevet,
  inkludert mellomrom og hakeparenteser for lister. På fritekst-variant skrives utskriften i tekstfelt.
- **Faste feller:** `range(start, stop, step)` (stopp eksklusiv); negativ indeksering `x[-k]`;
  `end=' '` i `print` (ingen linjeskift); `zip` stopper ved korteste liste; `+` på NumPy-array gir
  elementvis sum mens `+` på liste konkatenerer; nøstede løkker (`for j in range(i)`); heltall vs.
  flyttall; variabel-scope (lokal `x` i funksjon endrer ikke global `x`, H2025-mid O9); `while`-løkker
  som teller (H2025 O3).
- **Vekting:** 1–3 poeng per oppgave; utgjør nesten hele midtveis og de første oppgavene på finalen.

### B. Matche-tabell: indeksering/slicing i nøstede lister
- **Krav:** Regn ut hvert uttrykk steg for steg, ofte med indeks-i-indeks (`liste[x[2]+y[2]]`,
  `y[x[0]][x[-1]:]`). Slicing gir liste, indeksering gir element. Match mot oppgitte resultatalternativer.
- **Vekting:** «Match the values», 0,5 p per rad, maks 2–3,5 p. Fast innslag (H2022, H2023, H2021, H2024-mid).

### C. Matche-tabell: feilhåndtering (exceptions)
- **Krav:** Kjør programmet mentalt med de gitte kommandolinje-argumentene, avgjør hvilken exception
  som utløses **først**, og match mot riktig `except`-blokk. Nøkler: `IndexError` (manglende
  `sys.argv`-element), `ValueError` (`int`/`float` på tekst), `ZeroDivisionError` (deling på 0),
  `TypeError` (feil operandtype), `AssertionError` (feilet `assert`). Husk `sys.argv[0]` er filnavnet.
- **Vekting:** 2,5–3 p. Gjenganger H2018, H2021, H2022 (O7), H2023 (O6), H2024 (O4), + midtveis.

### D. Matche-tabell: «terminerer løkken?» / «hvilke er riktige?»
- **Krav:** Vurdér om et boolsk løkkekriterium blir `False` etter endelig antall iterasjoner
  (terminerer) eller aldri (uendelig løkke) — H2022 O6. Eller: vurdér flere kodealternativer og marker
  hvilke som løser oppgaven korrekt (finn største verdi, tell like verdier, sorter) — H2021 O7, H2022 O5,
  H2025-mid O20.
- **Vekting:** 2–3,5 p.

### E. «Hvilken linje mangler?» / «hvilket funksjonskall?»
- **Krav:** Velg linjen som fullfører et program. Tester ofte `lambda`-syntaks (riktig kall til en
  Newton-/secant-/diff-funksjon som tar en funksjon som argument), `eval` for brukerinput,
  dictionary-innsetting `d[key] = value`, korrekt utpakking. Klassisk distraktor: `f = x**2-2`
  (uttrykk) vs. `lambda x: x**2-2` (funksjon).
- **Vekting:** 1–2 p. H2020 O1.5, H2018 O1.11/1.12, H2022 O3, H2025 O4, H2025-mid O15/O17.

### F. Skriv en funksjon som beregner en rekke/sum + testfunksjon
- **Krav:** Klassikeren. Mønster: `s = 0`, `for k in range(N+1): s += ledd(k)`, `return s`.
  Importér `from math import factorial`. Rekurrente rekker (Chebyshev `T_{n+1}=2x·T_n−T_{n-1}`) løses
  **med løkke** som lagrer de to siste verdiene — fasit understreker at **rekursjon ikke er ønsket**
  (var ikke pensum). Testfunksjonen bruker **alltid** `assert abs(expected - computed) < tol` (typisk
  `tol=1e-4`…`1e-10`), sammenlignet mot fasit fra `math`/`numpy` (`math.exp`, `math.atanh`, `math.sinh`).
  Merk indeksdetaljen: sinh/arcsin summerer over **oddetallsledd** (`x**(2n+1)/factorial(2n+1)`).
- **Vekting:** 4–6 p. H2018, H2020, H2022, H2023, H2024, H2025.

### G. Skriv en klasse med spesialmetoder
- **Krav:** Nesten hver finale har minst én. Standardmønster:
  - `__init__(self, ...)` lagrer argumentene som attributter (`self.x = ...`; default-verdier som
    `h=1e-4` settes her).
  - `__call__(self, x)` gjør instansen kallbar og returnerer funksjonsverdien.
  - `__str__(self)` returnerer en f-streng.
  - `__add__(self, other)` returnerer en **ny instans** (ikke tuppel!); `__mul__` returnerer enten
    ny instans (skalar-multiplikasjon) eller et tall (indreprodukt, avhengig av oppgaven).
  - Arv (`class Line(Parabola)`) med `super().__init__(...)` når to klasser deler kode.
- **Eksempler:** `Diff` (numerisk derivert), `Piecewise` (løper `for i, b_ in enumerate(self.b): if x < b_: return self.a[i]`, ellers `return self.a[-1]`), `Vec2D`/`Vec3D`, `Polynomial` med `__add__` for ulik grad, `Chebychev` med `__str__` som formaterer polynomet.
- **Vekting:** 8–12 p — de tyngste enkeltoppgavene. Ofte flerdelt (a: skriv klassen, b: bruk/plott/test).

### H. Differenslikninger
- **Krav:** Allokér `x = np.zeros(N+1)`, `y = np.zeros(N+1)`, sett startverdier `x[0]=x0`, løkke over
  `n` som oppdaterer neste steg, `return (x, y)`. **Kritisk: oppdateringsrekkefølge** — i Bogdanov må
  `y[n+1]` regnes *før* `x[n+1]` fordi `x_{n+1}=x_n+y_{n+1}` avhenger av oppdatert `y`. Ofte del-b:
  plott løsningen (fasekurve x mot y, eller mot tid).
- **Vekting:** 5–12 p. H2022 (Bogdanov + konvergens/sykel-analyse), H2023 (Lotka-Volterra),
  H2024 (Bogdanov), H2025 (Lotka-Volterra).

### I. ODE-løser som funksjon
- **Krav:** Skriv f.eks. `forward_euler(f, T, N, u0)`: `t = np.linspace(0, T, N+1)`,
  `u = np.zeros_like(t)`, `u[0]=u0`, `dt = t[1]-t[0]`, løkke `for n in range(N): u[n+1] = u[n] + dt*f(t[n], u[n])`,
  `return t, u`. Varianter: RK2 (H2018), Ralston (H2020), baklengs Euler for eksponentielt henfall med
  eksplisitt oppdateringsformel `u[n+1]=u[n]/(1+dt*λ)` (H2025). `f` gis som Python-funksjon `f(t, u)`.
- **Vekting:** 5 p. Pass på **antall punkter**: N steg ⇒ N+1 punkter.

### J. ODE-system med det utleverte ODESolver-hierarkiet
- **Krav:** Den tyngste sammensatte oppgaven. Utlevert `ODESolver`-basisklasse med subklasser
  `ForwardEuler` og `RungeKutta4` (vedlagt som PDF). Mønster: (a) skriv høyresiden — enten som
  funksjon `f(t, u)` som pakker ut `S, E, I, D = u` og returnerer de fire deriverte, eller som klasse
  med `__call__(self, t, u)`; (b) sett opp solver: `solver = RungeKutta4(f)`,
  `solver.set_initial_condition(u0)`, `t, u = solver.solve((0,T), N)`, pakk ut kolonnene
  `S, E, I, D = u[:,0], u[:,1], u[:,2], u[:,3]`; (c) plott med `label=` og `legend()`.
  **NB — API-drift:** i eldre sett (2020–2022) er signaturen `f(u, t)` og `solve(time_points)`;
  fra 2023 `f(t, u)` og `solve(t_span, N)`. Boka bør lære den nyeste (`f(t, u)`), men vise begge.
- **Vekting:** 9–10 p. H2018 (SEIR), H2020 (SIRD), H2021 (Lorenz), H2022 (planet), H2023 (FHN),
  H2025 (SEID).

### K. Skriv en subklasse av ODESolver
- **Krav:** Implementér en ny metode ved **arv** — skriv kun `advance`-metoden i subklassen og arv
  resten. Kombineres i senere sett med likningsløsing: baklengs Euler krever at hvert steg løser en
  ikke-lineær likning `u_new - u[n] - dt*f(t[n]+dt, u_new) = 0` med `scipy.optimize.root` inne i
  `advance` (H2025 O16). H2018 og H2020 gjorde RK2/Ralston som subklasse uten likningsløsing.
- **Vekting:** 3–5 p (topp-differensierende).

### L. Fillesing → dictionary/lister (+ skriving)
- **Krav:** `with open(filename) as infile:` + `for line in infile:` + `words = line.split(';')`
  (eller `.split()`, avhengig av separator). Bygg **nøstet dict**: ytre nøkkel (ID/land) → indre dict.
  Bruk `dict(zip(keys, values))` eller eksplisitt oppbygging. Husk `.strip()` for å fjerne linjeskift,
  `int()`/`float()`-konvertering, og `infile.readline()` for å hoppe over en header-linje.
  Skriving: `with open(name,'w') as outfile:` + `outfile.write(... + '\n')`. Del-oppgaver spør ofte
  om (a) les til dict, (b) skriv dict til fil, (c) filtrer (returnér ny dict uten å endre argumentet).
- **Vekting:** 8–12 p. Kolonnebredde-basert lesing (fast-bredde-felt via `line[a:b]`) i H2022.
- **År:** samtlige finaler + midtveis.

### M. Lister vs. NumPy-arrays (med og uten løkke)
- **Krav:** H2024 O7 er malen: (a) fyll `x`, `y` med `for`-løkke og `.append`, `dx = (stop-start)/N`,
  `range(N+1)`; (b) samme **vektorisert** med `x = np.linspace(start, stop, N+1)` og funksjonen
  anvendt direkte på hele arrayet (`y = np.log(x)`). Vær nøye med antall punkter: 101 punkter i
  [1,10] ⇒ `linspace(1,10,101)`.
- **Vekting:** 5 p.

### N. Numerisk derivasjon / integrasjon / nullpunkt (kortere byggeoppgaver)
- **Krav:** Forlengs/sentrert differanse (`(f(x+h)-f(x))/h` eller `(f(x+h)-f(x-h))/(2h)`), enten som
  funksjon eller som `Diff`-klasse. Nullpunkt via Newton/secant (differenslikning som løses til en
  toleranse med `while abs(f(x)) > eps`) eller `scipy.optimize.root`. Trapesmetoden dukker kun opp
  som flervalgs-kall.
- **Vekting:** 2–8 p.

### O. «Finn feilen» / «hva er galt i programmet»
- **Krav:** Pek ut de konkrete feilene i et program. Typiske plantede feil: `import sqrt from math`
  (skal være `from math import sqrt`), `def __call__(x):` uten `self`, bruk av `a` i stedet for
  `self.a` inne i metode, feil `.split()`-separator, `float()` på en header-streng. Fasiten nummererer
  hver feil.
- **Vekting:** 3–6 p. H2022 O4, H2023 O4.

---

## 4. Sensorens krav

Destillert fra de offisielle løsningsforslagene (som fungerer som sensorveiledning). Poenggivningen
er ikke like eksplisitt tallfestet som i samfunnsfag, men mønsteret er tydelig.

### Metaregler (gjentas i innledningen hvert år)
1. **Kort, idiomatisk kode.** «Most questions lead to short code with little need for comments.»
   Unødvendige `main`-program, ekstra I/O eller overflødige kommentarer gir ingen uttelling. Kommentarer
   forventes bare ved noe komplisert/ikke-standard.
2. **Rimelige antagelser tillates** når oppgaven er underspesifisert — men de **må dokumenteres i
   kommentar**. Dette gjentas eksplisitt.
3. **Nødvendige `import` skal med** når oppgaven ber om det (`from math import ...`, `import numpy as np`,
   `import matplotlib.pyplot as plt`).
4. **Alltid krysse av på flervalg** (blankt = feil = 0).

### Poenggivning for delvis riktig kode
Løsningsforslagene er eksplisitte på at **flere løsninger gir full uttelling**, og at fasitens kode
bare er «et eksempel på en relativt enkel og kompakt besvarelse som ville fått full score». Konkrete
signaler om delvis uttelling:
- **Riktig idé/struktur belønnes selv med indeksfeil.** H2021 (B-splines, løkkeversjon): «god score
  gis til alle løsninger som får den overordnede løkkestrukturen riktig, selv med små feil i indekser».
  H2022 (folkeregister, fast-bredde-skriving): «å få alle posisjoner 100 % riktig er nesten umulig på
  eksamen, så full score gis til løsninger som demonstrerer rimelig riktig tenkning».
- **Skrivefeil i oppgaveteksten straffer ikke kandidaten.** Der oppgaveteksten har feil (H2018 O3.2
  ODE-signatur, H2024 O14 indeks, H2018 O3.5 E0/I0-forveksling), godtas alle konsistente tolkninger.
- **Deloppgaver kan løses uavhengig.** Flere oppgaver sier eksplisitt «du kan skrive testfunksjonen /
  bruke klassen selv om du ikke løste forrige deloppgave, siden du vet hva den skal gjøre».
- **Alternative, mer/mindre avanserte løsninger sidestilles.** H2023 (FHN-likevekt): både en enkel
  wrapper-funksjon rundt en global instans og en elegantere subklasse gis full score.

### Stilkrav (fasitens faktiske kodestil)
- Vektorisering foretrekkes **der oppgaven eksplisitt ber om NumPy uten løkke** (`np.linspace`,
  elementvise operasjoner, `np.zeros_like`) — ellers er enkle løkker helt greit.
- `__add__`/`__mul__` skal returnere **ny instans** av klassen.
- Testfunksjoner bruker `assert abs(diff) < tol`, aldri `==` på flyttall.
- Fillesing bruker `with open(...)`-kontekst, `.split()`, `.strip()`, eksplisitt type­konvertering.
- Rekurrente rekker løses **med løkke, ikke rekursjon** (rekursjon var utenfor pensum og markeres
  eksplisitt som uønsket i fasit).

---

## 5. Typiske feil (utledet av fasitkommentarer og distraktorer)

1. **Av-én-feil i `range`/antall punkter.** N intervaller krever `range(N+1)` og `linspace(a,b,N+1)`.
   Den hyppigste feilen både i kodesporing og i kodeskriving.
2. **Feil oppdateringsrekkefølge i koblede differenslikninger** (Bogdanov: `y[n+1]` før `x[n+1]`).
3. **Glemme `self`** i metodesignatur (`def __call__(x):`) eller i attributt-tilgang (`a` i stedet
   for `self.a`) — plantet flere ganger som «finn feilen».
4. **`__add__` returnerer feil type** (tuppel/liste i stedet for ny klasse-instans).
5. **Forveksle liste-konkatenering med array-addisjon** (`[1,2]+[3,4]` vs. `np.array`-sum) — sentral
   kodesporingsfelle.
6. **Feil exception-match** — overse hvilken feil som utløses *først*, eller glemme at `sys.argv[0]`
   er filnavnet (så `python x.py 4 0` gir `argv = [x.py, 4, 0]`).
7. **Glemme `.strip()`** ved fillesing (siste felt får med `\n`), eller glemme `infile.readline()` for
   å hoppe over header (så `float('Precip')` gir `ValueError` — H2023 O4).
8. **Feil separator i `.split()`** — bruke `split()` der filen er semikolon-/komma-separert.
9. **Rekursjon der løkke er forventet** (gir dårligere/ingen uttelling på rekurrente rekker).
10. **`import sqrt from math`** (feil rekkefølge) og lignende import-feil.
11. **Bruke `==` på flyttall** i testfunksjoner i stedet for toleranse.
12. **`range`-grenser i nøstede løkker** feilberegnet i kodesporing (`for j in range(i)`).
13. **Variabel-scope:** tro at en lokal variabel i en funksjon endrer den globale med samme navn
    (H2025-mid O9).
14. **API-forveksling ODESolver:** bruke gammel `f(u, t)`/`solve(time_points)`-signatur mot ny
    `f(t, u)`/`solve(t_span, N)` (eller motsatt) — les den vedlagte modulen nøye hvert år.

---

## 6. API-/konstruksjonsapparat

Notasjonen og modulapparatet har vært svært stabilt. En lærebok bør trene nøyaktig disse
konstruksjonene til automatikk.

### Må beherskes aktivt (skrive fra bunnen, uten oppslag)

**1. Python-grunnleggende (kodesporing + små funksjoner):**
- `range(start, stop, step)`, negativ indeksering, slicing, nøstede løkker.
- Lister, list comprehensions (`[3*e for e in range(a)]`), nøstede lister.
- Dictionaries, nøstede dictionaries, `dict(zip(keys, vals))`, `.items()`, `.values()`, `in`-test.
- Strenger: `.split(sep)`, `.strip()`, `.join()`, `.index()`, skiving, f-strenger med format
  (`f'{x:5.4f}'`, `f'{t:4.2f}'`).
- `print(..., end=' ')`; formatert tabellutskrift med faste desimaler.
- Boolske uttrykk og operator-presedens (`and`/`or`/`not`), `while`- og `for`-løkker.
- `input()` + `float()`; `eval()` for matematiske uttrykk; `lambda`-funksjoner.
- `sys.argv` og kommandolinje-argumenter.

**2. Feilhåndtering:** `try/except` med `IndexError`, `ValueError`, `TypeError`,
`ZeroDivisionError`, `AssertionError`; `sys.exit()`; rekkefølge på hvilken exception som fanges.

**3. Funksjoner og testing:** flere `return`, default-argumenter, funksjoner som tar funksjoner som
argument (`f(x, h)`), `assert expr, msg`; testfunksjons-mønsteret `assert abs(expected-computed) < tol`.

**4. NumPy:** `import numpy as np`; `np.zeros(N+1)`, `np.zeros((n,n))`, `np.zeros_like(t)`,
`np.linspace(a, b, N+1)`, `np.asarray`, elementvise operasjoner og ufunksjoner (`np.log`, `np.sin`),
2D-indeksering `B[i,j]` og skiving `B[i,1:]`, `.size`, `sum(x==y)`.

**5. Matplotlib:** `import matplotlib.pyplot as plt`; `plt.plot(x, y, label=...)`, `plt.legend()`,
`plt.show()`; flere kurver i samme vindu.

**6. `math`-modulen:** `from math import factorial, sqrt, sin, cos, exp, pi, atanh, sinh, log`.

**7. Klasser (OOP):** `__init__`, `__call__`, `__str__`, `__add__`, `__mul__`; instans-attributter;
arv med `class Sub(Base)` og `super().__init__(...)`; `isinstance`; når `__add__` skal returnere ny
instans vs. skalar.

**8. Numeriske algoritmer som kodemønstre:**
- *Rekke-summering:* `s=0; for k in range(N+1): s += ...; return s`.
- *Numerisk derivert:* forlengs `(f(x+h)-f(x))/h`, sentrert `(f(x+h)-f(x-h))/(2h)`.
- *Differenslikning:* allokér array, sett startverdi, løkke som oppdaterer neste indeks.
- *Forlengs Euler:* `u[n+1] = u[n] + dt*f(t[n], u[n])`.
- *Nullpunkt:* Newton/secant som `while abs(f(x)) > tol`.

### Utlevert apparat man må kunne bruke (medfølger som vedlegg)

**ODESolver-hierarkiet** leveres som PDF på ODE-oppgavene. Man må kunne:
- Skrive en `f(t, u)` (nyeste) / `f(u, t)` (eldre) som pakker ut `u` og returnerer de deriverte.
- Instansiere `ForwardEuler(f)` eller `RungeKutta4(f)`, kalle `set_initial_condition(u0)` og
  `solve(...)`, og pakke ut løsningen (`u[:,k]` for komponent k i et system).
- Skrive en **subklasse** ved kun å implementere `advance` (arv fra `ODESolver`).

**`scipy.optimize.root(fun, x0)`** leveres med dokumentasjon på likningsløsings-oppgavene.
Man må kunne wrappe en funksjon som tar ett array-argument og returnere et array, og hente løsningen
fra `sol.x` (H2023, H2025).

### Bør kjenne til (lavfrekvent, differensierer topp)
- 2D-array-manipulasjon og matrise-oppbygging rad for rad (Chebyshev-koeffisienter, H2022).
- Fast-bredde-fillesing via posisjons­skiving `line[a:b]` (H2022).
- Sykel-/konvergensdeteksjon i tallfølger (H2022).
- Pseudotilfeldige tallgeneratorer som klasse (H2021).

### Skal ikke prioriteres
- **Rekursjon** — eksplisitt utenfor pensum; markeres som uønsket løsning i fasit.
- **Ren OO-arkitektur/designmønstre** utover de spesialmetodene som listes over.
- **Avansert SciPy/pandas** utover `scipy.optimize.root` (som alltid leveres med dokumentasjon).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren, ~70 % av poengene)
1. **Kodesporing** («hva skrives ut») med alle fellene i seksjon 3A — hele midtveis + flervalgsskallet
   på finalen. Billige, hyppige poeng; 100 % frekvens.
2. **Klasser med spesialmetoder** (`__init__`/`__call__`/`__str__`/`__add__`/`__mul__` + arv) — de
   tyngste enkeltoppgavene (8–12 p), 100 % frekvens.
3. **ODE-løsere og ODESolver-hierarkiet** (skriv `f`, bruk solver, plott; skriv subklasse ved arv) —
   100 % frekvens, alltid en tung oppgave (9–10 p) pluss ofte en mindre.
4. **Rekke-/sum-implementering med testfunksjon** (`s=0; løkke; return s` + `assert abs<tol`) —
   100 % frekvens.
5. **Fillesing til nøstet dictionary** (+ skriving/filtrering) — 100 % frekvens, 8–12 p.

### Nivå 2 — må kunne (forekommer i de fleste sett)
6. **Differenslikninger** med korrekt oppdateringsrekkefølge (Bogdanov/Lotka-Volterra) — 4/4 i de
   siste fire settene; svært sannsynlig igjen.
7. **Feilhåndtering (exceptions)** — matche-tabell på finalen (75 %) og gjenganger på midtveis (~100 %).
8. **Lister vs. NumPy-arrays / vektorisering** — «med løkke / uten løkke»-malen (75 %).
9. **Testfunksjoner** som selvstendig delkrav (88 %).
10. **Plotting** som del-b på ODE-/differenslikning-oppgaver (88 %).
11. **Stykkvise/diskontinuerlige funksjoner** (Heaviside, piecewise) — 63 %.

### Nivå 3 — bør kjenne til (differensierer toppkarakter)
12. **Nullpunkt/likningsløsing** — Newton/secant fra bunnen + `scipy.optimize.root` med utlevert
    dok (voksende: 3/8, to av dem i 2023 og 2025).
13. **Numerisk derivasjon/integrasjon** som byggeoppgave eller flervalgs-kall.
14. **2D-arrays/matriser** og fast-bredde-fillesing (H2022-nivå).
15. **Baklengs Euler som ODESolver-subklasse med `root`** (H2025 — sannsynlig gjenbruk, kombinerer
    ODE + likningsløsing + arv).
16. **String-/listealgoritmer** (palindrom, primtall, sortering, mønstersøk) — mest i midtveis-MC.

### Prognose for neste eksamen

**Midtveis (25 %):** 20 flervalg. Forvent ~10–12 «hva skrives ut» (løkker, indeksering, `zip`,
`end=' '`, scope), 3–4 matche-tabeller (indeksering i nøstede lister; boolske uttrykk;
løkketerminering; «hvilke kodealternativer er riktige»), 1–2 exception-oppgaver, 1–2 fillesing-til-dict,
1 «hvilken linje mangler/hvilket funksjonskall».

**Avsluttende (75 %):** 13–16 oppgaver. Forvent et flervalgsskall på 4–7 oppgaver (kodesporing +
minst én exception-matche-tabell + minst én indekserings-tabell), deretter kjernen av kodeskriving:
**én rekke-sum + testfunksjon; minst én klasse med spesialmetoder (gjerne en vektor- eller
funksjonsklasse med `__call__`/`__add__`); én differenslikning med plott; ett ODE-system løst med det
vedlagte ODESolver-hierarkiet og plottet; én fillesing til nøstet dictionary med filtrering.** Sannsynlig
topp-differensierende avslutning: en ODESolver-subklasse (evt. baklengs Euler med `scipy.optimize.root`).
Den vitenskapelige innpakningen (epidemi, populasjonsdynamikk, planetbane, nervecelle, vær) roterer —
men programmeringsøvelsen bak er den samme hvert år.

**Konsekvens for boka:** Bygg rundt de fem 100 %-temaene med rikelig kodesporingstrening (for
midtveis-MC) og gjennomarbeidede maler for de fem kodeskriving-sjangrene, alltid vist i sensors korte,
idiomatiske stil. Hvert kapittel bør pare et vitenskapelig anvendelseseksempel med det underliggende
kodemønsteret, slik at studenten gjenkjenner mønsteret uansett innpakning. Boka må dessuten inneholde
det utleverte ODESolver-hierarkiet (begge API-varianter) og vise `scipy.optimize.root`-mønsteret.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN1900/` (`eksamen/` og
`losningsforslag/`). Arkivet dekker H2007–H2025, både midtveis og avsluttende, med tilhørende
offisielle løsningsforslag — 76 PDF-filer totalt.

**Løsningsforslag lest grundig (avsluttende):**
- `IN1900-H2025-final-losning.pdf`, `IN1900-H2024-final-losning.pdf`, `IN1900-H2023-final-losning.pdf`,
  `IN1900-H2022-final-losning.pdf`, `IN1900-H2021-final-losning.pdf`, `IN1900-H2020-final-losning.pdf`,
  `IN1900-H2018-final-losning.pdf` (+ tilhørende oppgavesett).

**Løsningsforslag/oppgavesett lest grundig (midtveis):**
- `IN1900-H2025-mid-losning.pdf` og `IN1900-H2025-mid.pdf` (representativt for midtveisformatet
  2018–2025), med kontroll mot `IN1900-H2019-mid.pdf` for negativ-scoring-endringen.

**Avsluttende sett skumlest for form- og temaregistrering:**
- `IN1900-H2019-final`, `H2017-final`, `H2016-final`, `H2014-final`, `H2012-final`, `H2010-final`,
  `H2009-final`, `H2008-final`, `H2007-final` (INF1100-æraen; bekrefter faglig kontinuitet og
  overgangen papir → digital).

**Midtveissett skumlest for strukturregistrering:**
- `IN1900-H2024-mid`, `H2023-mid`, `H2022-mid`, `H2021-mid`, `H2020-mid`, `H2018-mid`, `H2013-mid`,
  `H2007-mid` (+ `H2020-matin1105-mid` for parallellemne-varianten).

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN1900
(scratchpad: `fagbeskrivelse-in1900.md`), inkl. destillert «hva testes faktisk»-seksjon.

**Merknader om kildene:**
- **Navneskifte:** emnet het INF1100 t.o.m. ~2016 og IN1900 fra 2017; 2017–2020-settene bærer begge
  navn. Faglig innhold er kontinuerlig.
- **API-drift i ODESolver-modulen:** den vedlagte `ODESolver`-klassen endret signatur underveis
  (`f(u,t)`/`solve(time_points)` i 2020–2022 → `f(t,u)`/`solve(t_span, N)` fra 2023). Beskrivelsene i
  dette dokumentet gjelder begge; boka bør lære den nyeste og nevne den eldre.
- **H2020 er hjemmeeksamen** med spørsmålspool (flere oppgaver enn en enkelt kandidat fikk) og høyere
  totalsum enn 75 i fasit-versjonen — hensyntatt i frekvenstellingen.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert
  og omstrukturert med egne ord. Ingen oppgavetekster eller fasiter er gjengitt ordrett. Kodemønstrene
  er standard Python-idiomer.
