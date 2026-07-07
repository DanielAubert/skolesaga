# Bokskjelett: IN1900 Introduksjon til programmering med vitenskapelige anvendelser — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (hele UiO-arkivet 2007–2025: 38 sett + offisielle
> løsningsforslag, 76 filer). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Alle kodeeksempler og kontekster i den ferdige boka skal være
> **nyskrevne** (opphavsrett): kodemønstrene er standard Python-idiomer, men tall,
> variabelnavn, den vitenskapelige innpakningen og oppgavetekstene skal være
> forfatterens egne.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `in1900` |
| Tittel | **IN1900 Introduksjon til programmering med vitenskapelige anvendelser (UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med fast, gjentakende oppgavemal) |
| Antall kapitler | **35** (1 eksamenskart + 31 tema/drill + 3 eksamenstrening) |
| Estimert totaltid | **1 985 min ≈ 33 timer** |
| Quiz totalt | **594** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (én avsnitt):** IN1900 har hatt en påfallende stabil eksamensmal i over
et tiår (Langtangen/Sundnes-tradisjonen). Vurderingen er to hjelpemiddelfrie
digitale eksamener: en **midtveiseksamen** (25 %, **100 % flervalg**, 20
spørsmål — nesten ren kodesporing) og en **avsluttende eksamen** (75 %, 4 timer,
13–16 oppgaver — et flervalgsskall på 4–7 oppgaver etterfulgt av
fritekst-koding). Fem temaer går igjen i **hvert eneste** nyere sett:
kodesporing («hva skrives ut»), klasser med spesialmetoder, ODE-løsere/
ODESolver-hierarkiet, rekke-/sumimplementering med testfunksjon, og fillesing
til nøstet dictionary. Den vitenskapelige innpakningen roterer år for år (SEIR,
Lorenz, planetbane, nervecelle, Bogdanov, SEID …), men den underliggende
programmeringsøvelsen er identisk. Denne boka driller nettopp de fem mønstrene
til automatikk, i sensors korte, idiomatiske stil — og parer hvert kodemønster
med et roterende anvendelseseksempel, slik at studenten gjenkjenner oppgaven
uansett innpakning.

**Kritisk stilregel (gjelder HELE boka):**
1. **Kort, idiomatisk kode.** Sensor forventer korte løsninger uten unødvendige
   `main`-program, uten ekstra I/O og uten overflødige kommentarer. Kommentar
   bare ved noe komplisert/ikke-standard, eller for å dokumentere en rimelig
   antakelse. All eksempel- og fasitkode i boka skal skrives slik.
2. **Rekursjon er UTENFOR PENSUM.** Rekurrente rekker og alt annet løses **alltid
   med løkke**, aldri rekursjon. Hvert kapittel som kan friste til rekursjon
   (rekker, ODE, differenslikninger) skal ha en eksplisitt `warning` om at
   rekursjon gir dårligere/ingen uttelling og markeres uønsket i fasit.
3. **Delvis riktig kode gir uttelling.** Sensor belønner **riktig overordnet
   struktur** (riktig løkkestruktur, riktig klasseoppsett, riktig ODE-oppsett)
   selv med små indeks- eller detaljfeil. Dette skal stå eksplisitt i Del 0 og
   prege ALLE løsningsforslag: løsningsforslagene skal markere hva som gir
   uttelling ved hvert steg, og påpeke at «å få alle indekser 100 % riktig er
   nesten umulig på eksamen». Deloppgaver kan løses uavhengig.
4. **Nødvendige `import` skal alltid med** når oppgaven ber om kjørbar kode
   (`from math import ...`, `import numpy as np`, `import matplotlib.pyplot as plt`).
5. **Alltid krysse av på flervalg** (blankt = feil = 0; fra 2024/2025 er negativ
   scoring fjernet, så det er aldri en kostnad ved å gjette).

**Kritisk API-regel (ODESolver — gjelder Del 7 og alle ODE-referanser):** Bruk
**post-2023-signaturen som bokstandard**: høyresiden skrives `f(t, u)`, og
løseren kalles `solver.solve(t_span, N)` (der `t_span = (t0, T)`). Boka SKAL
likevel ha en eksplisitt `warning` om **API-driften**: i eldre sett (2020–2022)
var signaturen `f(u, t)` og `solve(time_points)`. Studenten må lese den vedlagte
modulen på eksamen nøye hvert år, fordi den kan bruke enten den nye eller den
gamle konvensjonen. Vis begge, men lær den nye.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «API- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et kodefag finnes
  det sjelden matematiske symboler, men det finnes et presist konstruksjonsapparat.
  Blokken heter derfor **«API- og konstruksjonsliste»** og lister ALLE Python-
  konstruksjoner brukt i delkapitlet: funksjoner, metoder, moduler og idiomer
  (f.eks. `range(start, stop, step)` — stopp eksklusiv; `np.linspace(a, b, N+1)`
  — N+1 punkter; `__call__(self, x)` — gjør instansen kallbar). Regelen «per
  delkapittel, ikke arv fra tidligere» beholdes: hvert delkapittel lister på nytt
  det det faktisk bruker. LaTeX brukes kun der matematikken bak et kodemønster
  krever det (rekkeledd, ODE-høyresider, differenslikninger).
- **`theorem`-blokker brukes for kanoniske kodemønstre (idiomer).** Der DNA-en
  bruker `theorem` for matematiske resultater, brukes den her for de faste
  kodemønstrene som skal sitte i ryggmargen (rekke-summeringsmønsteret,
  forward-Euler-oppdateringen, differenslikning-allokeringen, fillesing-til-dict-
  mønsteret). Disse er bokas «teoremer».
- **Flashcards genereres fra `definition`-blokker på toppnivå.** For dette faget
  er `definition`-blokkene API-/konstruksjonsdefinisjoner (ett kort med
  konstruksjonen som «begrep» og presis oppførsel + minimalt eksempel som
  «definisjon»). Kalibrer flashcards som «hva gjør denne konstruksjonen / hva
  skriver dette ut».
- **Quiz kalibreres som midtveis-MC.** Fordi midtveiseksamen er 100 % flervalg
  og domineres av kodesporing, skal quizbanken være **direkte midtveistrening**:
  overveiende kodesporing («hva skrives ut?»), indeksering/slicing-utregning,
  boolske uttrykk, løkketerminering, exception-matching og begreps-MC. Hvert
  quizspørsmål skal ligne et reelt midtveisspørsmål. `options[0]` = riktig svar
  (runtime stokker).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): programmeringsverktøyene
bygges opp i den rekkefølgen de forutsetter hverandre. Frekvensen styrer
*omfanget*: de fem 100 %-temaene får flere kapitler + eget drillkapittel; nivå
2/3-temaer får kompakte kapitler.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Python-grunnlaget og kodesporing | 7 | **Kodesporing 100 %** (nivå 1) og bærer HELE midtveis. Fundamentet alt annet står på → 6 fundamentkapitler + eget kodesporingsdrill. |
| 2 | Robuste programmer: input, kommandolinje og feilhåndtering | 2 | Feilhåndtering 75 % på finalen, **≈100 % på midtveis** (nivå 2) → 1 teori + 1 exception-matching-drill. |
| 3 | Funksjoner, testing og rekker | 3 | Rekke-/sumimplementering **100 %** + testfunksjon 88 % (nivå 1) → 2 teori + drill. |
| 4 | NumPy, vektorisering og plotting | 3 | Lister-vs-NumPy 75 %, plotting 88 % (nivå 2) → 3 kompakte kapitler. Forutsetning for ODE og differenslikninger. |
| 5 | Klasser med spesialmetoder | 5 | **100 %**, de tyngste enkeltoppgavene (8–12 p, nivå 1) → 3 teori + stykkvis-kapittel + drill. |
| 6 | Numeriske metoder som kodemønstre | 3 | Differenslikninger 75 % / 4-av-4 siste (nivå 2), numerisk derivasjon 50 %, nullpunkt 38 % voksende (nivå 3) → 2 teori + differenslikning-drill. |
| 7 | ODE-løsere og ODESolver-hierarkiet | 5 | **100 %**, alltid en tung oppgave (9–10 p) + ofte en mindre (nivå 1) → 4 teori + drill. |
| 8 | Fillesing og datastrukturer | 3 | **100 %**, 8–12 p (nivå 1) → 2 teori + drill. |
| 9 | Eksamenstrening | 3 | 1 midtveis-MC-simulering (20 MC) + 2 avsluttende øvingseksamener (13–16-oppgavemalen). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger sjangerkapitlene i
siste del. Her ligger drillkapitlene (kodesporing 1.7, exceptions 2.2, rekker
3.3, klasser 5.5, differenslikninger 6.3, ODE 7.5, fillesing 8.3) inne i sine
respektive temadeler, fordi hver sjanger er en 75–100 %-gjenganger som må drilles
umiddelbart etter teorien. Del 9 beholder de komplette simuleringene. Dette
speiler econ1310-avviket (drill i temadelen for høyfrekvente sjangre).

---

## 3. Sjangerkatalog (A–O)

Bokstavene under refereres i hvert kapittel og gjengis for studenten i Del 0.
Destillert fra EKSAMENSANALYSE §3. To hovedfamilier: **«hva skrives ut»**
(les kode, angi resultat — flervalg/fritekst) og **«skriv X»** (produser kode).

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | «Hva skrives ut?» — kodesporing | MC + fritekst | 100 %; 1–3 p; hele midtveis + finaleskall |
| **B** | Matche-tabell: indeksering/slicing i nøstede lister | MC-match | fast; 0,5 p/rad, maks 2–3,5 p |
| **C** | Matche-tabell: feilhåndtering (hvilken exception først) | MC-match | 75 % final, ~100 % midtveis; 2,5–3 p |
| **D** | Matche-tabell: «terminerer løkken?» / «hvilke er riktige?» | MC-match | jevnlig; 2–3,5 p |
| **E** | «Hvilken linje mangler?» / «hvilket funksjonskall?» | MC | jevnlig; 1–2 p |
| **F** | Skriv rekke/sum + testfunksjon | fritekst-kode | 100 %; 4–6 p |
| **G** | Skriv klasse med spesialmetoder | fritekst-kode | 100 %; 8–12 p (tyngst) |
| **H** | Differenslikninger (koblede, oppdateringsrekkefølge) | fritekst-kode | 75 % / 4-av-4 siste; 5–12 p |
| **I** | ODE-løser som funksjon (`forward_euler(...)`) | fritekst-kode | jevnlig; 5 p |
| **J** | ODE-system med det utleverte ODESolver-hierarkiet | fritekst-kode | 100 %; 9–10 p |
| **K** | Subklasse av ODESolver (skriv `advance`) | fritekst-kode | topp-differensierende; 3–5 p |
| **L** | Fillesing → nøstet dictionary (+ skriving/filtrering) | fritekst-kode | 100 %; 8–12 p |
| **M** | Lister vs. NumPy-arrays («med løkke / uten løkke») | fritekst-kode | 75 %; 5 p |
| **N** | Numerisk derivasjon/integrasjon/nullpunkt (byggeoppgave) | fritekst-kode | 50 %; 2–8 p |
| **O** | «Finn feilen» / «hva er galt i programmet» | fritekst | jevnlig; 3–6 p |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav», tilpasset kodefag: **Kodekontrakt**
erstatter «Innholdskontrakt» (eksakte konstruksjoner/API-er/idiomer kapitlet SKAL
lære, med presis oppførsel). Prioritetsklasser: **perfekt** (nivå 1) / **kunne**
(nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes IN1900

- **id:** `in1900-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (midtveis + avsluttende), temafrekvensene, sjangerkatalogen og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2007–2025. Skal gjengi: (i) formen — to hjelpemiddelfrie digitale Inspera-eksamener, A–F; **midtveis 25 %** (oktober, 20 flervalg, maks 25 p, ~2 t effektiv) og **avsluttende 75 %** (desember, 4 t, 13–16 oppgaver, maks 75 p); (ii) at siste «oppgave» på finalen (Q15/16/17) IKKE skal besvares — den er bare feltet for midtveispoengene; (iii) flervalg/kode-fordelingen: på finalen er 4–7 første oppgaver flervalgsskall (15–25 % av poengene), resten fritekst-koding (75–85 %); midtveis er 100 % flervalg; samlet ≈ 40 % flervalg-sjanger, 60 % kodeskriving; (iv) **temafrekvens-tabellen** (kodesporing 100 %, klasser med spesialmetoder 100 %, ODE-løsere/ODESolver 100 %, fillesing→dict 100 %, rekke-implementering 100 %, testfunksjon 88 %, plotting 88 %, lister-vs-NumPy 75 %, feilhåndtering 75 % / ~100 % midtveis, differenslikninger 75 % / 4-av-4 siste, stykkvis funksjon 63 %, numerisk derivasjon 50 %, string/liste-algoritmer 50 %, nullpunkt 38 % voksende, 2D-array 25 %, numerisk integrasjon 13 %); (v) at midtveis deles med parallellemnene (IN-KJM1900/IN-GEO1900) og derfor holder seg til fellespensumets kjerne; (vi) sensors metaregler (kort idiomatisk kode; rimelige antakelser dokumenteres i kommentar; nødvendige `import` med; alltid krysse av på flervalg; rekursjon utenfor pensum); (vii) **delvis-riktig-poenggivingen** — riktig overordnet struktur belønnes selv med indeksfeil, deloppgaver løses uavhengig, skrivefeil i oppgaveteksten straffer ikke kandidaten.
- **Kodekontrakt:** Sjangerkatalogen A–O (fra §3) presenteres som studentens sjekkliste med typisk vekt per sjanger. Pluss prognosen for neste eksamen: **midtveis** ≈ 10–12 kodesporing + 3–4 matche-tabeller (indeksering, boolske uttrykk, løkketerminering) + 1–2 exception + 1–2 fillesing + 1 «hvilken linje mangler»; **avsluttende** ≈ flervalgsskall (kodesporing + minst én exception-matche + én indekserings-matche) → én rekke-sum + testfunksjon → minst én klasse med spesialmetoder → én differenslikning med plott → ett ODE-system løst med ODESolver-hierarkiet og plottet → én fillesing til nøstet dict med filtrering → sannsynlig topp-avslutning: ODESolver-subklasse (evt. baklengs Euler med `scipy.optimize.root`). Avslutt med **leseplan**: Del 1 (kodesporing) + Del 5 (klasser) + Del 7 (ODE) + Del 3 (rekker) + Del 8 (fillesing) er «må perfekt»; Del 2/4/6 «må kunne»; nivå 3-momentene (2D-array, fast-bredde-fillesing, `root`-subklasse) merkes.
- **Oppgavesjangre:** Ingen kodeoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 25/75 og 4 timer på finalen — sett opp tidsbudsjett når flervalgsskallet er ~20 p og kodedelen ~55 p».
- **Typiske feil:** Metafeilene: bruke tid på lange kommentarer/`main` (ingen uttelling); la et blankt flervalg stå (0 = feil); forsøke rekursjon på rekurrente rekker; ikke lese den vedlagte ODESolver-modulens signatur hvert år.
- **Quiz: 12 · Flashcards: 12** (form, frekvenser, metaregler, sjangerkatalogen)

---

### Del 1 — Python-grunnlaget og kodesporing *(kodesporing: PERFEKT)*

> Del 1 er tyngst fordi kodesporing (sjanger A) har 100 % frekvens og bærer HELE
> midtveiseksamen. De seks fundamentkapitlene er samtidig teorigrunnlaget for
> kodesporing: hvert introduserer en konstruksjon OG dens vanligste
> kodesporingsfelle. Kap. 1.7 er det store drillkapitlet.

#### Kapittel 1.1: Variabler, datatyper, uttrykk og operatorpresedens

- **id:** `in1900-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Tall, boolske verdier, aritmetiske og logiske uttrykk, og presedensreglene som avgjør hva et uttrykk evaluerer til.
- **Eksamensbelegg:** Grunnlag for sjanger A (100 %) og D (boolske uttrykk). Heltall vs. flyttall, heltallsdivisjon (`//`, `%`), og operatorpresedens er faste kodesporingsfeller på midtveis. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `int`/`float`/`bool`/`str` og automatisk typekonvertering i uttrykk; `/` (alltid float) vs. `//` (heltallsdivisjon, avrunder nedover også for negative) vs. `%` (modulo); `**` (potens); presedens (`**` > unær `-` > `*`/`/`/`//`/`%` > `+`/`-` > sammenligning > `not` > `and` > `or`); sammenligningsoperatorer og kjeding (`0 < x < 10`); boolsk evaluering (`and`/`or`/`not`, «truthiness» av 0, tom streng, tom liste); `int(x)` trunkerer mot 0, `round(x)` bankers-avrunding; augmenterte tilordninger (`+=`, `*=`). Alt kun til *bruk og sporing* — ingen utledning.
- **Oppgavesjangre:** A + D. Mønstereksempel (A, nyskrevet): «Hva skriver `print(7 // 2, 7 % 2, -7 // 2, 2 ** 3 ** 2)` ut?» (Merk `**` er høyre-assosiativ.)
- **Typiske feil:** Tro at `//` avrunder mot 0 for negative tall; feil presedens (`2 + 3 * 4`); blande `/` og `//`; forvente linjeskift mellom flere argumenter i `print` (de skilles av mellomrom).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.2: Lister, indeksering og slicing

- **id:** `in1900-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1900-1-1` · **kapitteltype:** teori
- **description:** Lister og nøstede lister, positiv og negativ indeksering, slicing, og de mekaniske reglene bak matche-tabellene i sjanger B.
- **Eksamensbelegg:** Direkte grunnlag for sjanger B (matche-tabell indeksering/slicing i nøstede lister — fast innslag) og for kodesporing (A). Prioritet: **perfekt**.
- **Kodekontrakt:** `[...]`-lister, `append`, `+` (konkatenering — IKKE elementvis!), `*` (gjentakelse); indeksering `x[i]`, negativ `x[-k]`; slicing `x[a:b]` (b eksklusiv, gir **liste**), `x[a:b:s]`, `x[:]`, `x[::-1]`; indeksering gir **element**, slicing gir **liste**; nøstede lister `y[i][j]`, indeks-i-indeks `x[y[0]]` og `y[x[-1]][a:]`; `len`, `in`-test, `list(range(...))`; enkel list comprehension `[3*e for e in range(a)]`; `min`/`max`/`sum` på liste. Til bruk og sporing.
- **Oppgavesjangre:** B + A. Mønstereksempel (B, nyskrevet): «La `x = [4, 1, 3]` og `y = [[9, 8], [7, 6, 5], [2]]`. Regn ut hver av `y[x[1]]`, `y[x[0]-2][x[2]:]`, `x[-1] + x[x[1]]` og match mot verdiene.»
- **Typiske feil:** Forveksle liste-konkatenering (`[1,2]+[3,4]` → `[1,2,3,4]`) med elementvis addisjon (den kommer først med NumPy i Del 4); tro at slicing gir element; av-én-feil på slice-slutt (b eksklusiv); glemme at negativ indeks teller fra `-1`.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.3: Løkker — for, while, range og nøstede løkker

- **id:** `in1900-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `in1900-1-2` · **kapitteltype:** teori
- **description:** For- og while-løkker, `range` med tre argumenter, nøstede løkker og løkketerminering — kjernen i kodesporing og i sjanger D.
- **Eksamensbelegg:** Løkkesporing er den vanligste midtveis-A-oppgaven; løkketerminering («terminerer denne løkken?») er sjanger D (H2022). While-tellere (H2025 O3) og nøstede `range(i)`-løkker er faste feller. Prioritet: **perfekt**.
- **Kodekontrakt:** `for e in sekvens`, `for i in range(start, stop, step)` (**stopp eksklusiv**, negativ step); `while betingelse`; `break`/`continue`; nøstede løkker og løkkevariabel-avhengige grenser (`for j in range(i)`); akkumulatormønster (`s = 0; for ...: s += ...`); tellermønster (`count = 0; while ...: count += 1`); `enumerate(seq)` → `(indeks, verdi)`; `zip(a, b)` — stopper ved **korteste** liste; løkketerminering (blir betingelsen `False` etter endelig antall iterasjoner, eller aldri?). Til bruk og sporing.
- **Oppgavesjangre:** A + D. Mønstereksempler: (A) «Hva skriver `for i in range(1,4):` med indre `for j in range(i): print(i*j, end=' ')` ut?»; (D, terminering) «Terminerer `while n != 1:` med `n = n - 3` fra `n = 10`? Fra `n = 9`?»
- **Typiske feil:** Av-én-feil i `range` (N steg ⇒ `range(N+1)` for N+1 punkter — den hyppigste eksamensfeilen); glemme at `range`-stopp er eksklusiv; feil grenser i nøstede løkker; tro at `zip` fyller ut den korteste lista; uendelig løkke oversett i termineringsspørsmål.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 1.4: Strenger, f-strenger og formatert utskrift

- **id:** `in1900-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `in1900-1-3` · **kapitteltype:** teori
- **description:** Strengoperasjoner, f-strenger med formatspesifikatorer, og `print` med `end`/`sep` — utskriftsdetaljene sensor krever nøyaktig.
- **Eksamensbelegg:** Kodesporing der utskriften skal angis **nøyaktig** (mellomrom, hakeparenteser, desimaler). `end=' '` (ingen linjeskift) og f-streng-formatering er gjennomgående feller (sjanger A). Prioritet: **perfekt**.
- **Kodekontrakt:** Strenger som sekvenser (indeksering/slicing som lister); `+`/`*` på strenger; `.split(sep)` (uten argument: på vilkårlig blanktegn), `.strip()`, `.join()`, `.index()`, `.lower()`/`.upper()`, `.replace()`, `in`-test; f-strenger `f'{x}'`, formatspesifikatorer `f'{x:5.4f}'` (bredde.presisjon), `f'{t:4.2f}'`, `f'{n:3d}'`, `f'{x:.3e}'`; `print(a, b)` (skiller med mellomrom), `print(..., end=' ')` (ingen linjeskift), `print(..., sep=';')`; hvordan lister skrives (`print([1,2])` → `[1, 2]` med mellomrom etter komma). Til bruk og sporing.
- **Oppgavesjangre:** A. Mønstereksempel: «Hva skriver denne løkken ut, med nøyaktig formatering? `for k in range(3): print(f'{k:2d}:{2**k:5.2f}', end=' | ')`»
- **Typiske feil:** Glemme at `end=' '` fjerner linjeskiftet; feil på f-streng-bredde/presisjon; glemme mellomrommet `print` setter mellom argumenter; feil på hvordan Python skriver en liste (hakeparenteser + «, »); bruke `split()` der separatoren er en bestemt tegn.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.5: Dictionaries og nøstede dictionaries

- **id:** `in1900-1-5` · **number:** 1.5 · **estimatedMinutes:** 45 · **prerequisites:** `in1900-1-3` · **kapitteltype:** teori
- **description:** Ordbøker, nøstede ordbøker og `dict(zip(...))` — datastrukturen fillesingsoppgavene (sjanger L, 100 %) bygger på.
- **Eksamensbelegg:** Nødvendig forkunnskap for sjanger L (fillesing→nøstet dict, 100 %) og fast midtveis-A-materiale (dict-oppslag, `.items()`-løkker). Prioritet: **perfekt**.
- **Kodekontrakt:** `{nøkkel: verdi}`, `d[key]` (oppslag), `d[key] = value` (innsetting/oppdatering), `key in d`; iterasjon `for k in d`, `d.keys()`, `d.values()`, `d.items()` → `(nøkkel, verdi)`; `dict(zip(nøkler, verdier))`; **nøstede dictionaries** `d[ytre][indre]` og oppbygging `d[ytre] = {}` før innsetting; `.get(key, default)`; at nøkler må være unike (ny tilordning overskriver). Til bruk og sporing.
- **Oppgavesjangre:** A + forkunnskap til L. Mønstereksempel: «`d = dict(zip(['a','b','c'], [1,2,3]))`; hva skriver `for k in d: print(k, d[k])` ut, og hva blir `d` etter `d['b'] = d['a'] + d['c']`?»
- **Typiske feil:** Indeksere en dict med posisjon i stedet for nøkkel; glemme å opprette den indre dicten før innsetting i en nøstet struktur; tro at `.items()` gir bare nøklene; anta rekkefølge er alfabetisk.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.6: Funksjoner, scope og lambda

- **id:** `in1900-1-6` · **number:** 1.6 · **estimatedMinutes:** 50 · **prerequisites:** `in1900-1-3` · **kapitteltype:** teori
- **description:** Definere funksjoner, flere returverdier, default-argumenter, variabel-scope og lambda — inkludert «funksjoner som tar funksjoner».
- **Eksamensbelegg:** Scope-feller (lokal variabel endrer ikke global — H2025-mid O9) er fast midtveis-A. Lambda og «funksjon som argument» er kjernen i sjanger E («hvilket funksjonskall mangler»). Alle kodeskriving-sjangre (F/G/I/N) forutsetter funksjonshåndverket. Prioritet: **perfekt**.
- **Kodekontrakt:** `def navn(arg1, arg2=default):`, `return`, flere returverdier som tuppel (`return a, b` → `x, y = f(...)`); posisjons- vs. nøkkelargumenter; **default-argumenter** (`h=1e-4`); **scope** (lokal variabel skygger ikke den globale; tilordning inne i funksjon lager lokal variabel); funksjoner som førsteklasses objekter (sende `f` som argument til `deriver(f, x)`); `lambda x: x**2 - 2` vs. uttrykket `x**2 - 2` (klassisk sjanger-E-distraktor); `eval(uttrykkstreng)` for brukerinput; kall-syntaks når en funksjon tar en funksjon (`newton(lambda x: x**2-2, x0)`). Til bruk og sporing.
- **Oppgavesjangre:** A (scope) + E. Mønstereksempler: (A) «`x = 5; def f(): x = 10; return x; print(f(), x)` — hva skrives ut?»; (E) «Programmet kaller `nullpunkt(g, 1.0)` der `g` skal være funksjonen $x^2-2$. Hvilket av alternativene definerer `g` riktig?» (fasit: `g = lambda x: x**2 - 2`).
- **Typiske feil:** Tro at en lokal tilordning endrer den globale variabelen (scope); sende et uttrykk der en funksjon kreves (`f = x**2-2` i stedet for `lambda`); glemme `return` (funksjonen gir `None`); feil utpakking av flere returverdier.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.7: DRILL — Kodesporing: «hva skrives ut?»

- **id:** `in1900-1-7` · **number:** 1.7 · **estimatedMinutes:** 90 · **prerequisites:** `in1900-1-6` · **kapitteltype:** drill
- **description:** Systematisk drill i å kjøre kode mekanisk i hodet og angi utskriften nøyaktig — sjangeren som bærer hele midtveis.
- **Eksamensbelegg:** Sjanger A i **hvert eneste** sett (100 %); 10–12 av 20 midtveisspørsmål + de første finaleoppgavene. Dekker også sjanger B (indeksering-matche) og D (løkketerminering/«hvilke er riktige»). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** Algoritmisk sporingsmetode: 1) før en «tavle» over variablenes verdier linje for linje; 2) for løkker: skriv ut iterasjon for iterasjon, tell nøyaktig antall (`range`-stopp eksklusiv); 3) noter hva hvert `print` faktisk skriver, inkl. `end`/`sep` og formatering; 4) for lister/dict: hold styr på om du har element eller struktur; 5) skriv sluttresultatet tegn for tegn. Fast fellekatalog som SKAL demonstreres: `range`-grenser og av-én, negativ indeksering, slicing gir liste, `end=' '`, `zip` stopper ved korteste, nøstede løkker, liste-konkatenering vs. tallsum, heltall vs. flyttall, scope, `while`-tellere. Gjennomsporet eksempel med margnotater om hva som gir uttelling (delvis riktig sporing teller).
- **Oppgavesjangre:** A, B, D. 12–18 oppgaver på eksamensnivå som roterer alle fellene: rene «hva skrives ut», indekserings-matche-tabeller i nøstede lister, og «terminerer/hvilke alternativer er riktige». Alle med fullstendig sporingsløsning.
- **Typiske feil:** Hele fellekatalogen samlet: av-én i `range`/antall punkter (§5.1); nøstede løkkegrenser (§5.12); liste-konkat vs. array-sum (§5.5); scope (§5.13).
- **Quiz: 28 · Flashcards: 14** (quiz er nesten utelukkende ren kodesporing — direkte midtveistrening)

---

### Del 2 — Robuste programmer: input, kommandolinje og feilhåndtering *(exceptions: KUNNE)*

#### Kapittel 2.1: Kommandolinje, brukerinput og eval

- **id:** `in1900-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `in1900-1-6` · **kapitteltype:** teori
- **description:** Lese argumenter fra kommandolinjen (`sys.argv`), brukerinput og `eval` — grunnlaget for exception-oppgavene.
- **Eksamensbelegg:** Forkunnskap til sjanger C (exception-matching): nesten alle exception-oppgaver kjøres «med disse kommandolinje-argumentene». `sys.argv[0]` er filnavnet er en fast felle. Prioritet: **kunne**.
- **Kodekontrakt:** `import sys`; `sys.argv` (liste av strenger; `sys.argv[0]` = **skriptnavnet**, så `python x.py 4 0` gir `['x.py', '4', '0']`); typekonvertering `int(sys.argv[1])`, `float(...)`; `input(melding)` (returnerer streng); `eval(streng)` for matematiske uttrykk fra bruker; `sys.exit(melding)`; `len(sys.argv)` for å sjekke om nok argumenter er gitt. Til bruk.
- **Oppgavesjangre:** Forkunnskap til C + moment i O. Mønstereksempel: «Programmet skal kalles `python skript.py a b`. Hva blir `sys.argv`, og hva må stå for å konvertere `a` og `b` til flyttall?»
- **Typiske feil:** Glemme at `sys.argv[0]` er filnavnet (feil indeks på første reelle argument); tro at `input`/`sys.argv` gir tall (alltid streng — må konverteres); forvente at `eval` fungerer på tekst uten gyldig Python-uttrykk.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 2.2: DRILL — Feilhåndtering: hvilken exception utløses?

- **id:** `in1900-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `in1900-2-1` · **kapitteltype:** drill
- **description:** `try/except` og den mekaniske øvelsen med å avgjøre hvilken exception som utløses **først** og hvilken `except`-blokk som fanger den.
- **Eksamensbelegg:** Sjanger C i 75 % av finalene og ~100 % av midtveis; matche-tabell 2,5–3 p. En av de mest forutsigbare poengkildene. Prioritet: **kunne** (grensende til perfekt på midtveis).
- **Kodekontrakt:** `try:` / `except FeilType:` / `except FeilType as e:` / `else` / `finally`; de faste exception-typene og hva som utløser dem: `IndexError` (manglende `sys.argv`-element / listeindeks utenfor), `ValueError` (`int('tekst')`, `float('Precip')`), `ZeroDivisionError` (deling på 0), `TypeError` (feil operandtype, f.eks. `'a' + 1`), `AssertionError` (feilet `assert`), `KeyError` (manglende dict-nøkkel), `NameError`; regelen om at **den første** exception i kjøringen utløses; rekkefølgen på `except`-blokker (mer spesifikk før mer generell); `raise`. Løsningsoppskrift: kjør programmet mentalt med de gitte argumentene, finn første feilende operasjon, match mot riktig `except`. Gjennomgått eksempel med margnotater.
- **Oppgavesjangre:** C + O-moment. 10–14 varianter (matche-tabeller: gitt flere sett kommandolinje-argumenter, angi hvilken exception hver utløser). Mønstereksempel: «Programmet gjør `x = float(sys.argv[1]); y = float(sys.argv[2]); print(x/y)`. Match hvert kall — `python p.py 6 2`, `python p.py 6 0`, `python p.py 6 to`, `python p.py 6` — mot `ingen feil`, `ValueError`, `ZeroDivisionError`, `IndexError`.»
- **Typiske feil:** Overse hvilken feil som kommer *først* (§5.6); glemme `sys.argv[0]` = filnavn (feil på `IndexError`-tellingen); blande `ValueError` og `TypeError`; sette generell `except` før spesifikk.
- **Quiz: 22 · Flashcards: 18**

---

### Del 3 — Funksjoner, testing og rekker *(rekker: PERFEKT)*

#### Kapittel 3.1: Testfunksjoner og assert

- **id:** `in1900-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** `in1900-1-6` · **kapitteltype:** teori
- **description:** Skrive testfunksjoner med `assert abs(expected - computed) < tol` — kravet som følger nesten hver kodeskriving-oppgave.
- **Eksamensbelegg:** Testfunksjon som selvstendig delkrav i 88 % av settene, og fast del-b på rekke-oppgaver (sjanger F). Aldri `==` på flyttall. Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `assert uttrykk` og `assert uttrykk, melding`; testfunksjonsmønsteret `def test_f(): expected = ...; computed = f(...); tol = 1e-10; assert abs(expected - computed) < tol, msg`; hvorfor **aldri** `==` på flyttall (avrundingsfeil); valg av `tol` (`1e-4`…`1e-10` avhengig av metode); fasit hentes fra `math`/`numpy` (`math.exp`, `math.sinh`, `math.atanh`); test av flere punkter i én funksjon; at en testfunksjon ikke tar argumenter og ikke skriver ut (bare feiler eller er stille). `theorem`-blokk: **testfunksjon-idiomet** som kanonisk mønster.
- **Oppgavesjangre:** F (del-b). Mønstereksempel: «Skriv en testfunksjon som sjekker `min_exp(x, N)` mot `math.exp(x)` for `x = 0.5` med tilstrekkelig stor `N` og toleranse `1e-6`.»
- **Typiske feil:** Bruke `==` på flyttall (§5.11); glemme `abs` (fortegn på differansen); for stram `tol` for en grov metode; la testfunksjonen ta argumenter eller returnere noe.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.2: Rekker og summer: Taylor- og potensrekker

- **id:** `in1900-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-3-1` · **kapitteltype:** teori
- **description:** Implementere en endelig sum som tilnærmer en funksjon — det kanoniske `s = 0; løkke; return s`-mønsteret, inkludert rekurrente rekker med løkke.
- **Eksamensbelegg:** Sjanger F i **hvert sett** (100 %), 4–6 p. Innpakningen roterer (eksponential, logaritme, invers tanh, sinh, arcsin, Chebyshev), øvelsen er identisk. Prioritet: **perfekt**.
- **Kodekontrakt:** Kjernemønsteret (`theorem`-idiom): `s = 0; for k in range(N+1): s += ledd(k); return s`. `from math import factorial`; ledd-uttrykk med `factorial(k)`, `x**k`; **oddetallsledd**-indeksering for sinh/arcsin (`x**(2*n+1)/factorial(2*n+1)`, løkke `for n in range(N+1)`); alternerende fortegn `(-1)**k`; **rekurrente rekker med løkke, IKKE rekursjon** — Chebyshev $T_{n+1}=2xT_n - T_{n-1}$ løses ved å lagre de to siste verdiene (`T_prev`, `T_curr`) og oppdatere i løkke. Presenter matematikken kort i LaTeX (f.eks. $e^x = \sum_{k=0}^{N} \frac{x^k}{k!}$) kun som grunnlag for koden. `warning`: rekursjon er utenfor pensum og gir dårligere/ingen uttelling.
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet innpakning): «Skriv `sinh_rekke(x, N)` som beregner $\sinh x = \sum_{n=0}^{N} \frac{x^{2n+1}}{(2n+1)!}$ med en løkke, og en testfunksjon mot `math.sinh`.»
- **Typiske feil:** Av-én i `range` (`range(N)` i stedet for `range(N+1)`, §5.1); rekursjon der løkke forventes (§5.9); feil ledd-indeksering (glemme at sinh/arcsin bare har oddetallsledd); regne `factorial` feil eller reimplementere den unødvendig.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.3: DRILL — Rekke-implementering med testfunksjon

- **id:** `in1900-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `in1900-3-2` · **kapitteltype:** drill
- **description:** Full drill på F-sjangeren: fra rekkeformel til kompakt funksjon + testfunksjon, med roterende innpakning.
- **Eksamensbelegg:** Sjanger F (100 %). Innpakninger som roteres: eksponential, logaritme (`ln(1+x)`), invers tanh (`atanh`), sinh, arcsin, cosinus, Chebyshev (rekurrent). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) skriv ned rekkens ledd-uttrykk; 2) `s = 0`; 3) `for k in range(N+1): s += ledd`; 4) `return s`; 5) skriv testfunksjon `assert abs(fasit - s) < tol` mot `math`; 6) håndter oddetalls-/alternerende ledd riktig; 7) rekurrent rekke: lagre de to siste, oppdater i løkke. Gjennomregnet eksamenscase med margnotater (hva gir uttelling — riktig løkkestruktur belønnes selv med indeksfeil). 10–14 oppgaver på eksamensnivå, alle innpakninger, hver med testfunksjon.
- **Oppgavesjangre:** F. Mønstereksempel: «Chebyshev-polynomet $T_n(x)$ er gitt ved $T_0=1$, $T_1=x$, $T_{n+1}=2xT_n - T_{n-1}$. Skriv `chebyshev(n, x)` med en løkke (ikke rekursjon) og en testfunksjon for $T_3$.»
- **Typiske feil:** §5.1 (av-én), §5.9 (rekursjon), feil oddetallsledd, `==` i testen (§5.11).
- **Quiz: 20 · Flashcards: 12**

---

### Del 4 — NumPy, vektorisering og plotting *(lister-vs-NumPy: KUNNE)*

#### Kapittel 4.1: NumPy-arrays: oppretting, vektorisering og 2D

- **id:** `in1900-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `in1900-1-3` · **kapitteltype:** teori
- **description:** Arrays, elementvise operasjoner, `linspace`/`zeros`, og et kort dykk i 2D-arrays — verktøyet ODE- og differenslikning-oppgavene hviler på.
- **Eksamensbelegg:** NumPy er forutsetning for sjanger H (differenslikning), I/J (ODE) og M (lister-vs-NumPy). `+` på array = elementvis sum (kontra liste-konkatenering) er sentral kodesporingsfelle. 2D-array er nivå 3 (25 %, H2022 Chebyshev-koeffisienter). Prioritet: **kunne** (2D: **kjenne**).
- **Kodekontrakt:** `import numpy as np`; `np.zeros(N+1)`, `np.zeros_like(t)`, `np.ones`, `np.array([...])`, `np.asarray`, `np.linspace(a, b, N+1)` (**N+1 punkter, endepunkt inkludert**), `np.arange`; **elementvise operasjoner** (`x + y`, `x*2`, `x**2` — ALLE elementvise, i motsetning til lister); ufunksjoner `np.log`, `np.sin`, `np.exp`, `np.sqrt` (virker på hele arrayet); indeksering `a[i]`, slicing `a[1:]`, `a[:, k]` (kolonne k i 2D), `a[i, j]`; `np.zeros((n, n))` og radvis oppbygging; `.size`, `.shape`, `sum(x == y)` (teller like elementer). Til bruk.
- **Oppgavesjangre:** Forkunnskap + A (array-sporing). Mønstereksempel: «`a = np.array([1,2,3]); print(a + a, a * 2)` mot `b = [1,2,3]; print(b + b)` — forklar forskjellen.»
- **Typiske feil:** Forveksle array-addisjon med liste-konkatenering (§5.5); av-én i `linspace` (101 punkter i [1,10] ⇒ `linspace(1,10,101)`, §5.1); glemme at ufunksjoner krever array (ikke liste); feil akse i 2D-slicing.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Lister vs. NumPy — «med løkke / uten løkke»

- **id:** `in1900-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `in1900-4-1` · **kapitteltype:** teori
- **description:** Den faste sjangeren der samme tabell skal fylles først med løkke og `.append`, deretter vektorisert med `linspace` — sjanger M.
- **Eksamensbelegg:** Sjanger M i 75 % av settene (H2024 O7 er malen), 5 p. Prioritet: **kunne**.
- **Kodekontrakt:** Løkkeversjon: `x = []; y = []; dx = (stop-start)/N; for i in range(N+1): xi = start + i*dx; x.append(xi); y.append(f(xi))`. Vektorisert versjon: `x = np.linspace(start, stop, N+1); y = np.log(x)` (funksjonen anvendt direkte på arrayet). Nøkkelpoeng: **samme antall punkter** i begge (`N+1`); vektorisering kreves bare når oppgaven eksplisitt ber om NumPy uten løkke — ellers er løkke helt greit. `theorem`-idiom: de to malene side om side.
- **Oppgavesjangre:** M. Mønstereksempel: «Lag tabeller over $x$ og $y=\sqrt{x}$ for 51 punkter i $[0, 4]$ — (a) med en løkke og lister, (b) vektorisert med NumPy.»
- **Typiske feil:** Ulikt antall punkter i (a) og (b) (§5.1); regne `dx` feil (`(stop-start)/N`, ikke `/(N+1)`); bruke løkke der oppgaven ber om vektorisering (og motsatt); anvende en ufunksjon på en liste.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 4.3: Plotting med matplotlib

- **id:** `in1900-4-3` · **number:** 4.3 · **estimatedMinutes:** 40 · **prerequisites:** `in1900-4-1` · **kapitteltype:** teori
- **description:** Plotte én eller flere kurver med etiketter og legende — den faste del-b-en på ODE- og differenslikning-oppgaver.
- **Eksamensbelegg:** Plotting i 88 % av settene, nesten alltid som del-b («plott løsningen»). Prioritet: **kunne**.
- **Kodekontrakt:** `import matplotlib.pyplot as plt`; `plt.plot(x, y)`, `plt.plot(x, y, label='S')` (flere kurver i samme vindu), `plt.xlabel`, `plt.ylabel`, `plt.legend()`, `plt.title`, `plt.show()`; plotte flere komponenter av en ODE-løsning (`plt.plot(t, u[:,0], label='S')` osv.); fasekurve (plotte `y` mot `x` i stedet for mot tid). Til bruk. Fordi plattformen ikke kjører kode, beskrives forventet figur i tekst (hvilke kurver, akser, retning) — slik en A-besvarelse forklarer plottet.
- **Oppgavesjangre:** del-b på H/J. Mønstereksempel: «Gitt løsningsarrayet `u` med kolonner S, I, R og tidsarrayet `t`: skriv koden som plotter alle tre kurvene i samme figur med legende.»
- **Typiske feil:** Glemme `label=` + `plt.legend()` (ingen kurve-identifikasjon); glemme `plt.show()`; plotte feil kolonne av `u`; blande fasekurve (x mot y) og tidsplott (mot t).
- **Quiz: 12 · Flashcards: 14**

---

### Del 5 — Klasser med spesialmetoder *(prioritet: PERFEKT)*

> De tyngste enkeltoppgavene (8–12 p) og 100 % frekvens. Tre teorikapitler bygger
> opp spesialmetodene, kap. 5.4 tar stykkvise funksjoner (ofte en klasse), og
> kap. 5.5 er det store G-drillkapitlet.

#### Kapittel 5.1: Klasser, `__init__` og `__call__`

- **id:** `in1900-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-1-6` · **kapitteltype:** teori
- **description:** Definere en klasse, lagre attributter i `__init__` og gjøre instansen kallbar med `__call__` — funksjonsklassen som er selve arbeidshesten.
- **Eksamensbelegg:** Sjanger G (100 %). `__init__` + `__call__` er kjernen i funksjonsklasser (F-klasse, Diff, SinHyp, Chebychev, Polynomial). «Glemme `self`» er en fast «finn feilen»-felle (sjanger O). Prioritet: **perfekt**.
- **Kodekontrakt (API- og konstruksjonsliste):** `class Navn:`; `def __init__(self, ...):` som lagrer argumenter som attributter (`self.a = a`), inkl. **default-verdier** (`def __init__(self, f, h=1e-4)`); instansiering `obj = Navn(...)`; attributt-tilgang `obj.a` og `self.a` inne i metoder; `def __call__(self, x):` som gjør instansen kallbar (`obj(2)` kjører `__call__`); hvorfor `self` alltid er første parameter; forskjellen på en instans-attributt og en lokal variabel. `theorem`-idiom: **funksjonsklasse-malen** (`__init__` lagrer parametre, `__call__` returnerer funksjonsverdien).
- **Oppgavesjangre:** G. Mønstereksempel: «Skriv en klasse `Gauss` for $f(x)=e^{-(x-m)^2/(2s^2)}$ der `m` og `s` gis i `__init__` og `__call__(self, x)` returnerer funksjonsverdien. Vis hvordan du lager en instans med `m=0, s=1` og evaluerer den i `x=1`.»
- **Typiske feil:** Glemme `self` i metodesignatur (`def __call__(x):`) eller i attributt-tilgang (`a` i stedet for `self.a`, §5.3); blande argumentene til `__init__` og `__call__`; forsøke å kalle en metode uten instans.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.2: Spesialmetoder: `__str__`, `__add__`, `__mul__`

- **id:** `in1900-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-5-1` · **kapitteltype:** teori
- **description:** Gjøre objekter utskrivbare og la dem støtte `+` og `*` — med den kritiske regelen at aritmetiske spesialmetoder returnerer en **ny instans**.
- **Eksamensbelegg:** Sjanger G. `__add__`/`__mul__` som returnerer ny instans er et fast krav (Vec2D/Vec3D, Polynomial); `__str__` som formaterer (Chebychev-polynom) er gjenganger. «`__add__` returnerer feil type» er en fast feil. Prioritet: **perfekt**.
- **Kodekontrakt:** `def __str__(self):` returnerer en **f-streng** (kalles av `print(obj)` og `str(obj)`); `def __repr__` (nevnes kort); `def __add__(self, other):` returnerer en **ny instans** av klassen (`return Vec2D(self.x + other.x, self.y + other.y)`) — ALDRI et tuppel/liste; `def __mul__(self, other):` returnerer enten ny instans (skalar-multiplikasjon) eller et tall (indreprodukt) avhengig av oppgaven; håndtere ulik «lengde»/grad i `__add__` (Polynomial med ulik grad); `isinstance(other, ...)` for å skille skalar fra instans. `theorem`-idiom: **«aritmetisk spesialmetode → ny instans»**.
- **Oppgavesjangre:** G. Mønstereksempel: «Skriv en klasse `Vec2D` med `__init__(self, x, y)`, `__str__` som gir `'(x, y)'`, `__add__` som returnerer en ny `Vec2D`, og `__mul__` som beregner indreproduktet (et tall) med en annen `Vec2D`.»
- **Typiske feil:** La `__add__` returnere tuppel/liste i stedet for ny instans (§5.4); glemme `self` (§5.3); la `__str__` returnere noe annet enn en streng; forveksle når `__mul__` skal gi instans vs. tall.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Arv og `super()`

- **id:** `in1900-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `in1900-5-2` · **kapitteltype:** teori
- **description:** La to klasser dele kode ved arv, med `super().__init__` — mønsteret som også bærer ODESolver-subklassene i Del 7.
- **Eksamensbelegg:** Arv i sjanger G (`Line(Parabola)`, H2018/H2023) og forutsetning for sjanger K (ODESolver-subklasse, Del 7). Prioritet: **perfekt** (kjernen), forbereder K (kjenne).
- **Kodekontrakt:** `class Sub(Base):`; arv av metoder og attributter; overstyre en metode; kalle basisklassens konstruktør med `super().__init__(...)`; utvide en klasse (legge til attributter i tillegg til de arvede); når arv lønner seg (to klasser deler mesteparten av koden); `isinstance(obj, Base)`. `theorem`-idiom: **subklasse-malen** (`super().__init__` først, deretter det spesielle).
- **Oppgavesjangre:** G (arv). Mønstereksempel: «`Parabel` representerer $ax^2+bx+c$ med `__call__`. Skriv en subklasse `Linje` som representerer $bx+c$ ved å arve fra `Parabel` og sette $a=0$ via `super().__init__`.»
- **Typiske feil:** Glemme `super().__init__(...)` (attributter blir ikke satt); duplisere kode i stedet for å arve; feil rekkefølge (spesialkode før `super().__init__`); glemme `self` i subklassemetoder.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.4: Stykkvise og diskontinuerlige funksjoner

- **id:** `in1900-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `in1900-5-1` · **kapitteltype:** teori
- **description:** Representere stykkvise funksjoner (Heaviside, Piecewise) — ofte som en klasse med betinget logikk i `__call__`.
- **Eksamensbelegg:** Stykkvis/diskontinuerlig funksjon i 63 % av settene (H2024 Piecewise). Kombinerer klasse (Del 5) med betinget logikk. Prioritet: **kunne**.
- **Kodekontrakt:** Heaviside-funksjonen (0 for $x<0$, 1 for $x\ge 0$) som funksjon eller klasse; **Piecewise-klasse**: `__init__(self, a, b)` lagrer funksjonsverdier `a` og grenser `b`; `__call__` løper `for i, b_ in enumerate(self.b): if x < b_: return self.a[i]` og `return self.a[-1]` for siste intervall; `if/elif/else` for betinget verdi; vektorisert alternativ (nevnes: `np.where`). Til bruk. LaTeX for definisjonen av den stykkvise funksjonen.
- **Oppgavesjangre:** G (stykkvis klasse). Mønstereksempel: «Skriv en klasse `Trapp` for en funksjon som er 0 for $x<1$, 5 for $1\le x<3$, og 2 for $x\ge 3$, med verdier og grenser gitt i `__init__` og verdivalg i `__call__`.»
- **Typiske feil:** Feil grense-sammenligning (`<` vs. `<=`); glemme siste intervall (`return self.a[-1]`); feil indeksering av `a` mot `b` i løkka; glemme `self`.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 5.5: DRILL — Klasser med spesialmetoder

- **id:** `in1900-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `in1900-5-4` · **kapitteltype:** drill
- **description:** Full drill på G-sjangeren: fra oppgavetekst til komplett klasse med de spesialmetodene oppgaven krever, i sensors korte stil.
- **Eksamensbelegg:** Sjanger G (100 %), 8–12 p — de tyngste enkeltoppgavene, ofte flerdelt (a: skriv klassen, b: bruk/plott/test). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) `class Navn:`; 2) `__init__` lagrer alle argumenter som attributter (default-verdier her); 3) `__call__` implementerer funksjonsverdien; 4) `__str__` returnerer f-streng hvis krevd; 5) `__add__`/`__mul__` returnerer ny instans (eller tall for indreprodukt); 6) arv med `super().__init__` når to klasser deler kode; 7) del-b: instansier og bruk/test/plott. Gjennomregnet eksamenscase med margnotater (riktig klasseoppsett belønnes selv med små feil). 10–14 oppgaver som roterer klassetypene: funksjonsklasse med `__call__`, `Diff` (numerisk derivert som klasse), `Vec2D`/`Vec3D`, `Polynomial` med `__add__`, `Chebychev` med `__str__`, arv-par.
- **Oppgavesjangre:** G. Mønstereksempel: «Skriv en klasse `Diff` som tar en funksjon `f` og et steg `h=1e-5` i `__init__`, og der `__call__(self, x)` returnerer den sentrerte deriverte $(f(x+h)-f(x-h))/(2h)$. Vis at instansen kan brukes som en vanlig funksjon.»
- **Typiske feil:** §5.3 (glemt `self`), §5.4 (`__add__` feil type), blande `__init__`/`__call__`-argumenter, glemme `super().__init__` i arv.
- **Quiz: 22 · Flashcards: 14**

---

### Del 6 — Numeriske metoder som kodemønstre *(differenslikninger: KUNNE)*

#### Kapittel 6.1: Numerisk derivasjon, integrasjon og nullpunkt

- **id:** `in1900-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-1-6`, `in1900-4-1` · **kapitteltype:** teori
- **description:** De korte numeriske byggeoppgavene: forlengs/sentrert differanse, trapesmetoden, og nullpunkt med Newton/secant + `scipy.optimize.root`.
- **Eksamensbelegg:** Numerisk derivasjon 50 % (som funksjon eller `Diff`-klasse), nullpunkt 38 % (voksende: Newton/secant + `root` i H2023/H2025), numerisk integrasjon 13 % (mest MC-kall). Sjanger N. Prioritet: **kunne** (derivasjon), **kjenne** (nullpunkt/integrasjon).
- **Kodekontrakt:** Numerisk derivert: forlengs `(f(x+h)-f(x))/h`, **sentrert** `(f(x+h)-f(x-h))/(2*h)` (som funksjon `diff(f, x, h=1e-5)` eller `Diff`-klasse fra 5.5); trapesmetoden `T = (0.5*f(a)+0.5*f(b)+sum(f(a+k*dx) for k in range(1,N)))*dx` (kort); **nullpunkt**: Newton `while abs(f(x)) > eps: x = x - f(x)/df(x)`, secant (differenslikning uten derivert), og `scipy.optimize.root`; `from scipy.optimize import root`; `sol = root(fun, x0)` der `fun` tar ett array-argument og returnerer et array, løsningen i `sol.x`. `warning`: `root`-dokumentasjonen leveres alltid på eksamen — man må kunne wrappe funksjonen riktig.
- **Oppgavesjangre:** N. Mønstereksempel: «Skriv `diff(f, x, h=1e-5)` som returnerer den sentrerte deriverte, og bruk den til å tilnærme den deriverte av $\sin$ i $x=\pi/3$.»
- **Typiske feil:** Feil `h`-plassering (forlengs vs. sentrert nevner `h` vs. `2h`); Newton uten stoppkriterium (uendelig løkke); glemme at `root` krever array-inn/array-ut; feil `while`-toleranse.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.2: Differenslikninger

- **id:** `in1900-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-4-1` · **kapitteltype:** teori
- **description:** Løse (koblede) differenslikninger ved å allokere arrays, sette startverdier og oppdatere neste indeks i løkke — med kritisk fokus på **oppdateringsrekkefølge**.
- **Eksamensbelegg:** Sjanger H i 75 % av settene og **4 av 4 siste** (Bogdanov, Lotka-Volterra), 5–12 p. Fast siden 2022. Prioritet: **kunne** (grensende til perfekt gitt trenden).
- **Kodekontrakt:** Kjernemønster (`theorem`-idiom): `x = np.zeros(N+1); y = np.zeros(N+1); x[0] = x0; y[0] = y0; for n in range(N): y[n+1] = ...; x[n+1] = ...; return x, y`. **Kritisk oppdateringsrekkefølge**: når $x_{n+1}$ avhenger av oppdatert $y_{n+1}$ (Bogdanov: $x_{n+1}=x_n+y_{n+1}$), må `y[n+1]` regnes **før** `x[n+1]`. Koblede systemer (Lotka-Volterra som differenslikning); `range(N)` gir N oppdateringer → N+1 punkter; plott som del-b (fasekurve `x` mot `y`, eller mot tid). Presenter differenslikningen i LaTeX kun som grunnlag for koden.
- **Oppgavesjangre:** H. Mønstereksempel (nyskrevet innpakning): «Systemet $y_{n+1}=y_n + a\,y_n(1-x_n)$, $x_{n+1}=x_n + y_{n+1}$ med $x_0, y_0$ gitt. Skriv `simuler(a, x0, y0, N)` som returnerer arrayene `x, y`, og pass på rekkefølgen på oppdateringene.»
- **Typiske feil:** Feil oppdateringsrekkefølge i koblede likninger (§5.2 — regne `x[n+1]` før `y[n+1]`); av-én på array-lengde/`range` (§5.1); oppdatere «in-place» slik at gammel verdi går tapt for det andre uttrykket; glemme startverdien.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.3: DRILL — Differenslikninger

- **id:** `in1900-6-3` · **number:** 6.3 · **estimatedMinutes:** 75 · **prerequisites:** `in1900-6-2` · **kapitteltype:** drill
- **description:** Full drill på H-sjangeren, med roterende innpakning og fast fokus på oppdateringsrekkefølge og plott.
- **Eksamensbelegg:** Sjanger H (75 %, 4-av-4 siste). Innpakninger: rovdyr–byttedyr (Lotka-Volterra), Bogdanov-map, koblede vekstmodeller. Prioritet: **kunne**.
- **Kodekontrakt (løsningsoppskrift):** 1) allokér arrays med `np.zeros(N+1)`; 2) sett startverdier `x[0]`, `y[0]`; 3) `for n in range(N)`; 4) bestem oppdateringsrekkefølgen (hvilket uttrykk avhenger av det andres nye verdi?); 5) oppdater; 6) `return x, y`; 7) del-b: plott (fasekurve eller tid). Gjennomregnet eksamenscase med margnotater (riktig løkkestruktur belønnes selv med indeksfeil). 8–12 oppgaver på eksamensnivå, roterende innpakning, alle med plott-deloppgave.
- **Oppgavesjangre:** H + plott. Mønstereksempel: «Lotka-Volterra på differensform: $B_{n+1}=B_n+\Delta t(aB_n - bB_nR_n)$, $R_{n+1}=R_n+\Delta t(cB_nR_n - dR_n)$. Skriv simuleringen og plott begge bestandene mot tid.»
- **Typiske feil:** §5.2 (rekkefølge), §5.1 (av-én), in-place-overskriving, glemt plott-legende (§ Del 4).
- **Quiz: 16 · Flashcards: 10**

---

### Del 7 — ODE-løsere og ODESolver-hierarkiet *(prioritet: PERFEKT)*

> 100 % frekvens; alltid en tung oppgave (9–10 p, sjanger J) pluss ofte en mindre
> (sjanger I/K). Fire teorikapitler bygger fra en egen forward-Euler-funksjon opp
> til det utleverte hierarkiet og subklasser; kap. 7.5 er drillen.
>
> **API-STANDARD (gjelder hele delen):** bokstandard er **post-2023-signaturen**
> `f(t, u)` og `solver.solve(t_span, N)`. Hver ODE-oppgave skal ha en `warning`
> om API-driften mot den eldre `f(u, t)`/`solve(time_points)`-varianten (2020–2022),
> og minne om at den vedlagte modulen må leses hvert år. Boka skal inneholde en
> gjengivelse av **både** API-variantene av ODESolver-basisklassen (i en
> `collapsible` «Den utleverte ODESolver-modulen»), skrevet som referanse — dette
> er det ene utleverte vedlegget studenten må kunne bruke.

#### Kapittel 7.1: ODE-løser som funksjon: forward Euler

- **id:** `in1900-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-4-1`, `in1900-1-6` · **kapitteltype:** teori
- **description:** Skrive en forward-Euler-løser fra bunnen som en funksjon — det enkleste ODE-mønsteret, og grunnlaget for å forstå det utleverte hierarkiet.
- **Eksamensbelegg:** Sjanger I i flere sett, 5 p. Varianter: RK2, Ralston, baklengs Euler for eksponentielt henfall. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom):** `def forward_euler(f, T, N, u0): t = np.linspace(0, T, N+1); u = np.zeros_like(t); u[0] = u0; dt = t[1]-t[0]; for n in range(N): u[n+1] = u[n] + dt*f(t[n], u[n]); return t, u`. Høyresiden `f(t, u)` gis som Python-funksjon. **N steg ⇒ N+1 punkter**. Varianter: baklengs Euler for $u'=-\lambda u$ med eksplisitt oppdatering `u[n+1] = u[n]/(1 + dt*lam)`; RK2/midtpunkt. `warning`: API-drift (`f(t, u)` vs. `f(u, t)`) + rekursjon utenfor pensum.
- **Oppgavesjangre:** I. Mønstereksempel: «Skriv `forward_euler(f, T, N, u0)` og bruk den til å løse $u'=-2u$, $u(0)=1$ på $[0,3]$ med 30 steg. Angi hvor mange punkter løsningen har.»
- **Typiske feil:** Av-én på punkter (`np.zeros(N)` i stedet for N+1, §5.1); regne `dt` feil; sette `u[0]` etter løkka; feil argumentrekkefølge til `f` (§5.14).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.2: Det utleverte ODESolver-hierarkiet: bruke ForwardEuler og RungeKutta4

- **id:** `in1900-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-7-1`, `in1900-5-3` · **kapitteltype:** teori
- **description:** Bruke den vedlagte `ODESolver`-basisklassen med subklassene `ForwardEuler` og `RungeKutta4` på en skalar ODE — instansiering, initialbetingelse og `solve`.
- **Eksamensbelegg:** Forutsetning for sjanger J (100 %). Bruksmønsteret er identisk hvert år; bare signaturen driver. Prioritet: **perfekt**.
- **Kodekontrakt:** Skriv høyresiden `def f(t, u): return ...`; `solver = RungeKutta4(f)` (eller `ForwardEuler(f)`); `solver.set_initial_condition(u0)`; `t, u = solver.solve((0, T), N)` (post-2023: `t_span` + `N`); for skalar ODE er `u` et 1D-array. `collapsible` «Den utleverte ODESolver-modulen» gjengir basisklassen i **begge** API-varianter (ny: `solve(t_span, N)` med `f(t, u)`; gammel: `solve(time_points)` med `f(u, t)`), som referanse studenten må kunne lese og bruke. `warning`: sjekk signaturen i det vedlagte hvert år.
- **Oppgavesjangre:** J (skalar). Mønstereksempel: «Bruk det vedlagte ODESolver-hierarkiet til å løse $u'=-0.5u + \sin t$, $u(0)=2$ på $[0,10]$ med `RungeKutta4` og 100 steg.»
- **Typiske feil:** API-forveksling (`f(t, u)` vs. `f(u, t)`, `solve((0,T), N)` vs. `solve(time_points)`, §5.14); glemme `set_initial_condition`; feil argument til `solve`.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.3: ODE-systemer: pakke ut u og plotte komponentene

- **id:** `in1900-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `in1900-7-2`, `in1900-4-3` · **kapitteltype:** teori
- **description:** Den tunge sammensatte oppgaven: skrive høyresiden for et system, sette opp løseren og plotte komponentene — vitenskapelig innpakning som roterer.
- **Eksamensbelegg:** Sjanger J i **hvert sett** (100 %), 9–10 p. Innpakning roterer (SEIR, SIRD, Lorenz, planetbane, nervecelle, SEID) — øvelsen er identisk. Prioritet: **perfekt**.
- **Kodekontrakt:** Høyresiden for et system: `def f(t, u): S, E, I, D = u; dS = ...; dE = ...; dI = ...; dD = ...; return [dS, dE, dI, dD]` (eller som klasse med `__call__(self, t, u)` når parametre skal lagres); `u0` som liste av startverdier; `t, u = solver.solve((0, T), N)`; **utpakking av komponentene** for et system: `u` er 2D, `S, E, I, D = u[:,0], u[:,1], u[:,2], u[:,3]`; plott med `label=` + `legend()`. `theorem`-idiom: **system-ODE-malen** (pakk ut `u`, returner liste av deriverte, pakk ut kolonner etter `solve`).
- **Oppgavesjangre:** J. Mønstereksempel (nyskrevet innpakning): «Et rovdyr–byttedyr-system i kontinuerlig tid: $x'=ax-bxy$, $y'=cxy-dy$. Skriv høyresiden `f(t, u)`, løs med `RungeKutta4` fra $u_0=[10, 5]$ på $[0, 20]$ med 400 steg, og plott begge bestandene.»
- **Typiske feil:** Feil utpakking av `u`-kolonnene (§ blanding av rad/kolonne); returnere en enkeltverdi i stedet for liste av deriverte; API-forveksling (§5.14); glemme legende/label.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 7.4: Subklasse av ODESolver: skriv `advance`

- **id:** `in1900-7-4` · **number:** 7.4 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-7-3`, `in1900-6-1` · **kapitteltype:** teori
- **description:** Implementere en ny ODE-metode ved arv — skrive kun `advance` og arve resten — inkludert baklengs Euler med `scipy.optimize.root`.
- **Eksamensbelegg:** Sjanger K, topp-differensierende (3–5 p). RK2/Ralston som subklasse (H2018/H2020); baklengs Euler som subklasse med `root` (H2025) — sannsynlig gjenbruk fordi den kombinerer ODE + likningsløsing + arv. Prioritet: **kjenne**.
- **Kodekontrakt:** `class RK2(ODESolver):` med kun `def advance(self):` (arv `solve`, `set_initial_condition` osv. fra basisklassen); tilgang til `self.u`, `self.t`, `self.n`, `self.f`, `self.dt` inne i `advance` (fra den vedlagte modulen); returnere neste `u`-verdi; **baklengs Euler**: hvert steg løser den ikke-lineære likningen `u_new - u[n] - dt*f(t[n]+dt, u_new) = 0` med `scipy.optimize.root` inne i `advance` (`sol = root(lambda un: un - u_n - dt*self.f(t_np1, un), u_n); return sol.x`). `warning`: attributtnavnene i den vedlagte modulen kan variere — les vedlegget.
- **Oppgavesjangre:** K. Mønstereksempel: «Utvid ODESolver-hierarkiet med en subklasse `Midtpunkt` som implementerer midtpunktsmetoden ved kun å skrive `advance`.»
- **Typiske feil:** Skrive om hele klassen i stedet for bare `advance` (bortkastet, feilkilde); feil attributtnavn fra vedlegget; glemme `super().__init__` når subklassen trenger egne attributter; wrappe `root`-funksjonen feil (§6.1).
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 7.5: DRILL — ODE-oppgaver med roterende innpakning

- **id:** `in1900-7-5` · **number:** 7.5 · **estimatedMinutes:** 90 · **prerequisites:** `in1900-7-4` · **kapitteltype:** drill
- **description:** Full drill på I/J/K-sjangrene: samme ODE-øvelse under skiftende vitenskapelig innpakning, slik at mønsteret gjenkjennes uansett kontekst.
- **Eksamensbelegg:** Sjanger J (100 %, 9–10 p) + I + K. Innpakninger som roteres: epidemi (SEIR/SIRD/SEID), populasjonsdynamikk, mekanikk (planetbane), nervecelle (Fitzhugh-Nagumo), vær (Lorenz). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) les modellen, identifisér tilstandsvariablene; 2) skriv høyresiden `f(t, u)` (pakk ut `u`, returner liste av deriverte) — eller klasse med `__call__` hvis parametre skal lagres; 3) sett `u0`; 4) `solver = RungeKutta4(f); solver.set_initial_condition(u0); t, u = solver.solve((0,T), N)`; 5) pakk ut kolonnene; 6) plott med label/legend; 7) sjekk API-signaturen mot vedlegget. Gjennomregnet eksamenscase med margnotater (riktig ODE-oppsett belønnes selv med små feil). 8–12 oppgaver på eksamensnivå, alle innpakninger, minst én med subklasse (K) og én med egen `forward_euler`-funksjon (I).
- **Oppgavesjangre:** I, J, K. Mønstereksempel: «SEID-modellen for et utbrudd: $S'=-\beta SI$, $E'=\beta SI - \sigma E$, $I'=\sigma E - \gamma I$, $D'=\gamma I$. Skriv høyresiden, løs med det vedlagte hierarkiet, pakk ut og plott alle fire gruppene.»
- **Typiske feil:** §5.14 (API-forveksling), §5.1 (N vs. N+1), feil `u`-utpakking, returnere skalar i stedet for liste, glemme legende.
- **Quiz: 18 · Flashcards: 12**

---

### Del 8 — Fillesing og datastrukturer *(prioritet: PERFEKT)*

#### Kapittel 8.1: Fillesing til nøstet dictionary

- **id:** `in1900-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `in1900-1-5` · **kapitteltype:** teori
- **description:** Lese en tekstfil linje for linje og bygge en nøstet dictionary — den 100 %-frekvente L-sjangeren, verdt 8–12 p.
- **Eksamensbelegg:** Sjanger L i samtlige finaler + midtveis (100 %), 8–12 p. Prioritet: **perfekt**.
- **Kodekontrakt (`theorem`-idiom):** `with open(filename) as infile:` + `for line in infile:` + `words = line.split(';')` (eller `.split()` avhengig av separator); `.strip()` for å fjerne linjeskift; `int()`/`float()`-konvertering; **nøstet dict**: ytre nøkkel (ID/land) → indre dict (`d[key] = {}` før innsetting, eller `dict(zip(feltnavn, verdier))`); `infile.readline()` for å hoppe over en header-linje; iterasjon over den ferdige strukturen. Presiser: `with` lukker filen automatisk; `for line in infile` gir én linje av gangen inkl. `\n`.
- **Oppgavesjangre:** L (les→dict). Mønstereksempel (nyskrevet): «Filen `byer.txt` har linjer `navn;befolkning;areal`. Skriv `les_byer(filnavn)` som returnerer en dict fra bynavn til en indre dict `{'befolkning': ..., 'areal': ...}` med tallene konvertert.»
- **Typiske feil:** Glemme `.strip()` (siste felt får med `\n`, §5.7); feil `.split()`-separator (§5.8); glemme `readline()` for header (`float('Precip')` → `ValueError`, §5.7); indeksere den nøstede dicten feil.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 8.2: Filskriving, filtrering og fast-bredde-felt

- **id:** `in1900-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `in1900-8-1` · **kapitteltype:** teori
- **description:** Skrive en datastruktur tilbake til fil, filtrere uten å endre argumentet, og lese fast-bredde-felt med posisjonsskiving.
- **Eksamensbelegg:** Del-oppgaver på L: (b) skriv dict til fil, (c) filtrer (returner ny dict). Fast-bredde-lesing (`line[a:b]`) er nivå 3 (H2022). Prioritet: **kunne** (skriving/filtrering), **kjenne** (fast-bredde).
- **Kodekontrakt:** Skriving `with open(navn, 'w') as outfile:` + `outfile.write(tekst + '\n')`; formatert utskrift til fil med f-strenger; **filtrering uten mutasjon**: bygg og returner en **ny** dict (`ny = {}; for k, v in d.items(): if betingelse: ny[k] = v; return ny`) — argumentet skal ikke endres; **fast-bredde-felt**: `line[a:b]` for kolonnebasert lesing der feltene ikke er separert med tegn; `.strip()` på hvert utsnitt. `warning`: å treffe kolonneposisjonene 100 % er nesten umulig på eksamen — riktig tenkning belønnes (delvis uttelling).
- **Oppgavesjangre:** L (skriv/filtrer). Mønstereksempel: «Gitt by-dicten fra 8.1: skriv `store_byer(d, grense)` som returnerer en ny dict med bare byene over en befolkningsgrense, uten å endre `d`, og `skriv_til_fil(d, filnavn)` som lagrer den.»
- **Typiske feil:** Endre argument-dicten i stedet for å lage en ny; glemme `'\n'` i `write` (alt på én linje); glemme `.strip()` på fast-bredde-utsnitt; feil kolonneposisjoner.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 8.3: DRILL — Fillesing til nøstet dict med filtrering

- **id:** `in1900-8-3` · **number:** 8.3 · **estimatedMinutes:** 75 · **prerequisites:** `in1900-8-2` · **kapitteltype:** drill
- **description:** Full drill på L-sjangeren: les→bygg nøstet dict→filtrer→skriv, med roterende datainnhold.
- **Eksamensbelegg:** Sjanger L (100 %), 8–12 p, ofte tredelt (a: les til dict, b: skriv til fil, c: filtrer). Prioritet: **perfekt**.
- **Kodekontrakt (løsningsoppskrift):** 1) `with open(...) as infile`; 2) hopp evt. header med `readline()`; 3) `for line in infile:` → `.strip().split(sep)`; 4) bygg nøstet dict med typekonvertering; 5) del-b: skriv struktur til fil med `write` + `'\n'`; 6) del-c: returner **ny** filtrert dict uten å endre argumentet. Gjennomregnet eksamenscase med margnotater (riktig løkkestruktur + riktig separator/strip belønnes). 8–12 oppgaver på eksamensnivå, roterende data (folkeregister, målestasjoner, landstatistikk, karakterlister), separator og header varierer.
- **Oppgavesjangre:** L. Mønstereksempel: «Filen `maalinger.txt` har en header-linje og deretter `stasjon;dato;temp;nedbor`. Les til en nøstet dict per stasjon, skriv en ny fil med bare frostdøgnene, og returner en dict over gjennomsnittstemperatur per stasjon — uten å endre den innleste dicten.»
- **Typiske feil:** §5.7 (strip/header), §5.8 (separator), mutasjon av argument, glemt `'\n'` i skriving.
- **Quiz: 18 · Flashcards: 10**

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Midtveis-simulering: 20 flervalg

- **id:** `in1900-9-1` · **number:** 9.1 · **estimatedMinutes:** 120 · **prerequisites:** Del 1–4 · **kapitteltype:** øvingseksamen (midtveis)
- **description:** Komplett midtveis-simulering etter det reelle formatet: 20 flervalgsspørsmål, ingen kodeskriving, med fullstendige sporingsløsninger.
- **Eksamensbelegg/miks:** Speiler midtveiseksamen (25 %, 100 % flervalg, 20 spørsmål, maks 25 p, ~2 t): ≈ 11 kodesporing («hva skrives ut», sjanger A — løkker, indeksering, `zip`, `end=' '`, scope, `while`-tellere) + 4 matche-tabeller (sjanger B indeksering i nøstede lister; sjanger D boolske uttrykk/løkketerminering/«hvilke alternativer er riktige»; à 0,5 p/rad) + 2 exception-matching (sjanger C) + 2 fillesing-til-dict (sjanger A/L-lesing) + 1 «hvilken linje mangler/hvilket funksjonskall» (sjanger E). Alle spørsmål nyskrevne. Hvert spørsmål har fullstendig sporingsløsning i `collapsible` og et `tip` om fellen det tester. Merk: fra 2024/2025 er negativ scoring fjernet — alltid krysse av.
- **Kodekontrakt:** Ren MC — dekker sjangrene A, B, C, D, E. De 20 spørsmålene registreres OGSÅ som quiz (dette kapitlets quizkvote), slik at simuleringen kan tas som en tidsstyrt MC-økt.
- **Oppgavesjangre:** A, B, C, D, E. Mønstereksempel: se de enkelte drillkapitlene.
- **Quiz: 20 · Flashcards: 0**

#### Kapittel 9.2: Avsluttende øvingseksamen 1 — epidemi-innpakning

- **id:** `in1900-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `in1900-9-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers avsluttende sett etter 13–16-oppgavemalen: et flervalgsskall etterfulgt av full kodeskriving, med epidemimodell som ODE-innpakning.
- **Eksamensbelegg/miks:** Speiler et typisk post-2021-sett (75 p, 13–16 oppgaver): **flervalgsskall O1–O6 (~16 p)** — 3 kodesporing (A) + 1 indekserings-matche (B) + 1 exception-matche (C) + 1 «hvilken linje mangler» (E); deretter **kodeskriving O7–O14 (~59 p)** — én rekke-sum + testfunksjon (F); én klasse med spesialmetoder (G, funksjons-/vektorklasse med `__call__`/`__add__`); én differenslikning med plott (H); ett ODE-system løst med det vedlagte ODESolver-hierarkiet og plottet (J, epidemi-innpakning); én fillesing til nøstet dict med filtrering (L). Siste «oppgave» (Q15) er midtveispoeng-feltet — skal ikke besvares (dokumenteres). Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (kort idiomatisk kode), med `tip` om delpoeng/vekting og hva som gir uttelling ved delvis riktig kode. `tip` om tidsbudsjett (flervalgsskall ~30 min, kodedel ~210 min).
- **Kodekontrakt:** Dekker sjangrene A, B, C, E, F, G, H, J, L.
- **Oppgavesjangre:** A, B, C, E, F, G, H, J, L.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 9.3: Avsluttende øvingseksamen 2 — mekanikk/nervecelle-innpakning med subklasse

- **id:** `in1900-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `in1900-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett avsluttende sett med et vanskeligere toppsjikt: ODESolver-subklasse med `scipy.optimize.root`, «finn feilen» og lister-vs-NumPy.
- **Eksamensbelegg/miks:** Speiler et tyngre sett (H2021/H2025-nivå, 75 p, 13–16 oppgaver): **flervalgsskall O1–O5 (~14 p)** — 2 kodesporing (A) + 1 boolsk/løkketerminering-matche (D) + 1 exception-matche (C) + 1 array-vs-liste-sporing (A/M); deretter **kodeskriving O6–O14 (~61 p)** — «finn feilen» i et program (O); én rekke-sum + testfunksjon (F, rekurrent rekke med løkke); lister vs. NumPy «med/uten løkke» (M); én stykkvis funksjon som klasse (G/piecewise); ett ODE-system med hierarkiet + plott (J, nervecelle/planetbane-innpakning); topp-differensierende avslutning: en **ODESolver-subklasse** (K, baklengs Euler med `scipy.optimize.root`). Siste «oppgave» er midtveisfeltet (besvares ikke). Alle nyskrevne. Løsningsforslag som A-besvarelse med vektings-`tip` og delpoeng-signaler.
- **Kodekontrakt:** Dekker sjangrene A, C, D, F, G, J, K, M, O — supplerer 9.2 slik at de to settene sammen dekker alle sjangre A–O minst én gang.
- **Oppgavesjangre:** A, C, D, F, G, J, K, M, O.
- **Quiz: 6 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 | 12 |
| 1 | 1.1–1.7 | 22+22+22+18+20+18+28 = **150** | 20+20+20+18+20+20+14 = **132** |
| 2 | 2.1–2.2 | 14+22 = **36** | 16+18 = **34** |
| 3 | 3.1–3.3 | 14+18+20 = **52** | 16+18+12 = **46** |
| 4 | 4.1–4.3 | 20+16+12 = **48** | 20+14+14 = **48** |
| 5 | 5.1–5.5 | 18+18+14+12+22 = **84** | 18+20+14+12+14 = **78** |
| 6 | 6.1–6.3 | 16+18+16 = **50** | 18+16+10 = **44** |
| 7 | 7.1–7.5 | 16+16+14+14+18 = **78** | 16+18+14+12+12 = **72** |
| 8 | 8.1–8.3 | 18+16+18 = **52** | 20+14+10 = **44** |
| 9 | 9.1–9.3 | 20+6+6 = **32** | 0+0+0 = **0** |
| **Sum** | **35 kap.** | **594 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform: quiz vektes mot **midtveis-MC**
(kodesporing/begreps-MC), derfor bærer Del 1 (kodesporing) 150 av 594 quiz.
Flashcards vektes mot API-/konstruksjonsdefinisjonene (nivå 1-delene 1, 5, 7 bærer
mest).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag (kort
idiomatisk kode) og poengfordeling. Prøvekapitler bygges som `<emne>-<del>-prove`
(chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne
exercise-seksjoner i delens siste kapittel.

**Prøve-kvote Del 1:** 4 prøver (Python-grunnlaget og kodesporing)
1. Prøve 1.A (25 min): Datatyper, uttrykk og operatorpresedens — 10 kodesporing (sjanger A/D).
2. Prøve 1.B (30 min): Lister, indeksering og slicing — 8 kodesporing + 1 indekserings-matche (A/B).
3. Prøve 1.C (30 min): Løkker, strenger og dictionaries — 10 kodesporing inkl. `end=' '`/f-streng/`zip` (A).
4. Prøve 1.D (35 min): Blandet midtveis-format — 12 flervalg på tvers av hele delen (A/B/D/E).

**Prøve-kvote Del 2:** 4 prøver (input, kommandolinje og feilhåndtering)
1. Prøve 2.A (20 min): `sys.argv`, input og eval — 6 kortsporingsspørsmål.
2. Prøve 2.B (30 min): Exception-matching — 3 matche-tabeller (hvilken exception først) (sjanger C).
3. Prøve 2.C (25 min): `try/except`-koding — skriv robust input-håndtering (sjanger O-moment).
4. Prøve 2.D (30 min): Integrert — program med kommandolinje + feilhåndtering, «finn feilen»-variant (C + O).

**Prøve-kvote Del 3:** 4 prøver (funksjoner, testing og rekker)
1. Prøve 3.A (25 min): Testfunksjoner — skriv `assert abs(...)<tol`-tester (sjanger F del-b).
2. Prøve 3.B (35 min): Rekke-implementering — eksponential + logaritme med testfunksjon (sjanger F).
3. Prøve 3.C (35 min): Rekurrent rekke med løkke (Chebyshev/sinh) — eksplisitt uten rekursjon (F).
4. Prøve 3.D (40 min): Full F-oppgave på eksamensnivå — rekke + testfunksjon + bruk, roterende innpakning.

**Prøve-kvote Del 4:** 4 prøver (NumPy, vektorisering og plotting)
1. Prøve 4.A (25 min): NumPy-arrays — array-sporing og `linspace`-punkttelling (sjanger A/M).
2. Prøve 4.B (35 min): Lister vs. NumPy — «med løkke / uten løkke» (sjanger M).
3. Prøve 4.C (25 min): Plotting — skriv plott-kode for flere kurver med legende.
4. Prøve 4.D (30 min): Integrert — bygg tabell (løkke + vektorisert) og plott resultatet (M + plott).

**Prøve-kvote Del 5:** 4 prøver (klasser med spesialmetoder)
1. Prøve 5.A (35 min): Funksjonsklasse — `__init__` + `__call__` (sjanger G).
2. Prøve 5.B (40 min): `__str__` + `__add__`/`__mul__` — Vec2D/Polynomial, ny instans (G).
3. Prøve 5.C (35 min): Arv — subklasse med `super().__init__` + stykkvis klasse (G).
4. Prøve 5.D (45 min): Full G-oppgave på eksamensnivå — flerdelt klasse (a: skriv, b: bruk/test/plott).

**Prøve-kvote Del 6:** 4 prøver (numeriske metoder som kodemønstre)
1. Prøve 6.A (30 min): Numerisk derivasjon — forlengs/sentrert + `Diff`-klasse (sjanger N).
2. Prøve 6.B (35 min): Differenslikning — koblet system med riktig oppdateringsrekkefølge (sjanger H).
3. Prøve 6.C (30 min): Nullpunkt — Newton/secant + `scipy.optimize.root` (sjanger N, nivå 3).
4. Prøve 6.D (40 min): Full H-oppgave på eksamensnivå — differenslikning + plott, roterende innpakning.

**Prøve-kvote Del 7:** 4 prøver (ODE-løsere og ODESolver-hierarkiet)
1. Prøve 7.A (30 min): `forward_euler`-funksjon fra bunnen — skalar ODE (sjanger I).
2. Prøve 7.B (35 min): Bruk av det vedlagte hierarkiet — skalar ODE med `RungeKutta4` (sjanger J).
3. Prøve 7.C (45 min): ODE-system — skriv `f(t,u)`, løs, pakk ut, plott (sjanger J, roterende innpakning).
4. Prøve 7.D (40 min): Subklasse — skriv `advance` (RK2 / baklengs Euler med `root`) (sjanger K).

**Prøve-kvote Del 8:** 4 prøver (fillesing og datastrukturer)
1. Prøve 8.A (30 min): Les til nøstet dict — separator + strip + typekonvertering (sjanger L).
2. Prøve 8.B (35 min): Skriving og filtrering — ny dict uten mutasjon + skriv til fil (L).
3. Prøve 8.C (30 min): Fast-bredde-felt — posisjonsskiving `line[a:b]` (L, nivå 3).
4. Prøve 8.D (40 min): Full L-oppgave på eksamensnivå — les → filtrer → skriv, tredelt.

### Øvingseksamener (3 komplette sett — se kap. 9.1–9.3)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Midtveis-simulering (kap. 9.1) | Midtveis 2018–2025 | 20 flervalg (A/B/C/D/E), 100 % MC, 25 p, ~2 t |
| Avsluttende 1 (kap. 9.2) | Typisk post-2021 (75 p) | Flervalgsskall (A/B/C/E ~16 p) + koding (F/G/H/J/L ~59 p), epidemi-innpakning |
| Avsluttende 2 (kap. 9.3) | Tyngre sett (H2021/H2025-nivå) | Flervalgsskall (A/C/D/M ~14 p) + koding (O/F/M/G/J/K ~61 p), subklasse + `root` |

Til sammen dekker de tre settene samtlige 15 sjangre (A–O) minst én gang.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — de to eksamenene (midtveis 25 % ren MC, avsluttende 75 % skall + koding), 13–16-oppgavemalen, at siste oppgave ikke besvares, og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: **perfekt** (kodesporing Del 1, klasser Del 5, ODE Del 7, rekker Del 3, fillesing Del 8), **kunne** (feilhåndtering Del 2, NumPy/plotting Del 4, differenslikninger Del 6), **kjenne** (2D-array, fast-bredde-fillesing, nullpunkt/`root`, ODESolver-subklasse, string-/listealgoritmer).
3. **Sjangerguiden** — de 15 oppgavetypene A–O med løsningsoppskriftene fra drillkapitlene (1.7, 2.2, 3.3, 5.5, 6.3, 7.5, 8.3) i kortform.
4. **Sensorreglene** — de fem metareglene (kort idiomatisk kode; dokumenter antakelser; nødvendige `import`; alltid krysse av; rekursjon utenfor pensum) + delvis-riktig-poenggivingen (riktig struktur > perfekt detalj; deloppgaver uavhengige; skrivefeil i oppgaven straffer ikke).
5. **Feilkatalogen** — de 14 typiske feilene (§5 i analysen) samlet, hver med henvisning til kapitlet som forebygger den: av-én i `range`/punkter, oppdateringsrekkefølge, glemt `self`, `__add__` feil type, liste-konkat vs. array-sum, exception-rekkefølge, glemt `.strip()`/header, feil separator, rekursjon, import-feil, `==` på flyttall, nøstede løkkegrenser, scope, ODESolver-API-forveksling.
6. **API- og konstruksjonsark** — alle kodemønstrene fra kodekontraktene på ett oppslag: rekke-summering, testfunksjon, differenslikning-allokering, forward Euler, ODESolver-bruk (begge API-varianter), fillesing→nøstet dict, klasse-spesialmetoder — med markering «skriv fra bunnen» vs. «bruk det utleverte».
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1 (kodesporing) først (bærer midtveis) → Del 3 → Del 5 → Del 7 → Del 8 (de fem perfekt-temaene) → Del 2/4/6 innimellom → prøvene underveis → midtveis-simulering før midtveis (uke ~7) → de to avsluttende settene de siste ukene under tidspress (240 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `in1900` med alle 35 kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–O og frekvenstallene resten refererer til.
3. **De fem perfekt-delene i avhengighetsrekkefølge**: Del 1 (fundamentet — kreves av alt) → Del 3 (rekker; krever 1.6) → Del 5 (klasser; krever 1.6) → Del 7 (ODE; krever 4.1 + 5.3) → Del 8 (fillesing; krever 1.5). Skriv Del 4 (NumPy) før Del 6 og Del 7.
4. Del 2 → Del 4 → Del 6 → Del 9 (øvingseksamenene til slutt — de gjenbruker alle sjangrene).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **Kodestil-konsistens**: all eksempel-/fasitkode er kort og idiomatisk — ingen unødvendig `main`, ingen overflødige kommentarer; kommentar bare der noe er ikke-standard eller dokumenterer en antakelse.
- [ ] **Rekursjonsforbud**: tekstsøk over alle in1900-filer — ingen rekursive funksjoner i fasitkode; hvert rekke-/ODE-/differenslikning-kapittel har `warning` om at rekursjon er utenfor pensum og uønsket.
- [ ] **ODESolver-API-konsistens**: bokstandard er `f(t, u)` + `solve(t_span, N)` overalt; hver ODE-oppgave har `warning` om API-driften; `collapsible` med begge API-variantene finnes i Del 7.
- [ ] **API- og konstruksjonsliste per delkapittel**: hvert delkapittel som bruker Python-konstruksjoner har `collapsible` «API- og konstruksjonsliste» rett etter Forkunnskaper, som forklarer ALLE konstruksjoner brukt i delkapitlet (per delkapittel, ikke arv).
- [ ] **Delvis-riktig-poenggiving i løsningsforslag**: alle løsningsforslag (drill + øvingseksamener) markerer hva som gir uttelling steg for steg og at riktig struktur belønnes selv med indeksfeil.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 594 og flashcard-sum ≥ 510** per kvotetabellen (§5); quiz kalibrert som midtveis-MC (kodesporing/begreps-MC), `options[0]` = riktig svar.
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener (kap. 9.1–9.3) som sammen dekker sjangrene A–O.
- [ ] **Nøyaktig utskrift i kodesporing**: quiz/eksempler i sjanger A angir utskrift *nøyaktig* som terminalen (mellomrom, hakeparenteser, desimaler, `end`/`sep`-effekt).
- [ ] **Opphavsrett**: ALLE oppgaver og kodeeksempler nyskrevne — egne tall, egne variabelnavn, egen vitenskapelig innpakning; kodemønstrene er standard Python-idiomer, men ingen oppgavetekster/fasiter fra reelle sett gjengis; pensumlitteratur (Langtangen/Sundnes) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + innhold), jf. lærdommen om `getChapterMeta`.
