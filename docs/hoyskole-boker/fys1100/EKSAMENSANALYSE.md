# Eksamensanalyse: FYS1100 Mekanikk og modellering (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på hele eksamensarkivet i
> `~/Desktop/Eksamner/UiO/FYS1100/` — **7 avsluttende skoleeksamener med
> løsningsforslag/sensorveiledning (H2022, V2023, H2023, V2024, H2024, V2025,
> H2025)**, **1 prøveeksamen med fasit (H2022)**, samt **10 midtveiseksamener med
> fasit (prøvemidtveis 2022, V2023, H2022, H2023, V2024, H2024, V2025, H2025, +
> den eldre FYS-MEK1110-midtveisen V2021 med full sensorveiledning)**. Alle
> løsningsforslag er lest grundig; alle sju avsluttende settene er gjennomgått
> oppgave-for-oppgave sammen med fasit og sensorveiledning. **Alt innhold er
> omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster,
> fasiter eller sensorformuleringer. Analysen er kvantitativ der kildene tillater
> det.
>
> **Merknad om emnehistorikk:** FYS1100 er et nytt emne som avløste FYS-MEK1110
> (nedlagt, siste undervisning vår 2022). Arkivet dekker derfor i praksis
> **hele levetiden til FYS1100** (2022–2025) — dette er ikke et utvalg, men
> nesten hele eksamenstradisjonen. Til gjengjeld er datagrunnlaget kort (7 sett),
> så frekvensene bør leses som «7 sett à ett tema», ikke som lange tidsserier.
> Den eneste FYS-MEK1110-filen (V2021-midtveis) er tatt med for kontekst, men
> vektlagt lavt siden emnet er endret.
>
> Merknad om notasjon: Formlene nedenfor er standard fysikknotasjon og ikke
> opphavsrettslig beskyttet tekst.

---

## 1. Eksamensform og utvikling

### To vurderingskomponenter

Vurderingen er **todelt**: en **midtveiseksamen** (digital flervalg) og en
**avsluttende skriftlig skoleeksamen** (papir/håndskrift). Midtveis teller en
andel av samlet karakter; den nøyaktige prosentsatsen står ikke i selve
arkivfilene (typisk 20–25 % for UiOs innførings­emner i fysikk, jf. FYS1001/
FYS1120 — **verifiser mot gjeldende emneside**). Obligatoriske
innleveringer/læringsaktiviteter må være godkjent for å gå opp. Karakterskala
**A–F**.

### Avsluttende eksamen — form (stabil 2022–2025)

| Element | Beskrivelse |
|---|---|
| Varighet | **4 timer** |
| Format | Skriftlig skoleeksamen, penn og papir (Python skrives for hånd) |
| Hjelpemidler | **Rottmann «Matematisk formelsamling»** + godkjent kalkulator + **utdelt fagspesifikt formelark** (bakerst i settet) |
| Antall oppgaver | **4–9 hovedoppgaver**, hver delt i deloppgaver (a–e/…) |
| Poeng | **Inntil 5 poeng per deloppgave, alle deloppgaver teller likt**, kun hele/halve poeng |
| Gjennomgangskrav | *«Husk at alle svar må begrunnes!»* står i hodet på hvert eneste sett |

### Utviklingstrekk i oppgavestrukturen

1. **Fra mange små til få store oppgaver.** H2022 og prøveeksamen H2022 hadde
   **8 korte, uavhengige oppgaver** (ofte bare ett spørsmål hver): ett
   Fermi-problem, én ren differensialligning å løse, én Taylor-utvikling, én
   treghetsmoment-rangering osv. Fra **V2023** låser formen seg til **5–7
   oppgaver med flere deloppgaver (a–e)** som bygger på hverandre. **H2024 (5
   oppgaver) og H2025 (4 oppgaver)** viser en tydelig bevegelse mot **færre, men
   dypere flertrinnsoppgaver** med opptil 7 deloppgaver hver.
2. **Numerisk modellering er en konstant.** Hvert eneste avsluttende sett
   inneholder **minst én kode-/numerikk-deloppgave** (2022–2025, 100 %). Dette er
   emnets signatur og skiller det skarpt fra FYS1001 (der numerikk er lovet, men
   aldri testet). Se del 2 og oppgavetype H.
3. **Spesiell relativitet er nesten alltid siste oppgave.** 6 av 7 sett avslutter
   med en SR-oppgave (regne- eller paradoks-variant). H2024 er det eneste
   unntaket.
4. **Anvendt/lekende innpakning.** Oppgavene kles i fortellinger: Baron von
   Münchhausen, planeten Dagobah, Daytona-svingen, en jojo, ChatGPT som lager en
   feil fysikkoppgave, Drake-ligningen, en relativistisk stige i en låve.
   Fysikken bak er standard mekanikk; bare innpakningen varierer.
5. **Lagrange-formalisme testes ikke.** Grunnbeskrivelsen nevner «innføring i
   Lagrange-formalismen», men i alle sju settene er **all mekanikk newtonsk**
   (kraft/moment-basert). Legg tilnærmet null vekt på Lagrange.

### Midtveiseksamen — eget format

| Element | Beskrivelse |
|---|---|
| Varighet | **3 timer** |
| Format | **Digital i Inspera, ca. 20 flervalgsoppgaver** (rene MCQ i FYS1100-årene 2022–2025) |
| Hjelpemidler | Godkjent kalkulator + Rottmann |
| Pensumdekning | **Første halvdel**: kinematikk (grafer, posisjon/fart/akselerasjon), Newtons lover, friksjon, frilegemeanalyse, sirkelbevegelse/sentripetalkraft, arbeid/energi, bevegelsesmengde, gravitasjon/unnslipningsfart, og de matematiske verktøyene (1./2. ordens diff.likninger, Taylor, dimensjonsanalyse, treghetsmoment) |

Midtveisspørsmålene blander **konseptrangeringer** («hvilken situasjon er umulig
for rettlinjet bevegelse?», heis/fjærvekt-avlesning, kraftpil-diagrammer) med
**korte utregninger** (bremselengde fra energibevaring, friksjonstall på
skråplan `μ ≥ tan θ`, loop-fart `v > √(5gR)` med motorarbeid, roterende
fjær-kule `k = mω²/(1−R₀/R)`). Merk at moderne FYS1100-midtveis også tester
**differensialligninger, Taylor-polynom og dimensjonsanalyse som flervalg** —
altså mer enn ren kinematikk/kraft. (V2021-midtveisen var FYS-MEK1110 og
blandet MCQ med åpne deloppgaver; dette formatet er ute.)

---

## 2. Temafrekvens-tabell (avsluttende eksamen)

Temaklassifisering av alle **7 avsluttende settene** (H2022, V2023, H2023, V2024,
H2024, V2025, H2025). Celleverdi = **antall av de 7 settene der temaet forekommer
som minst én deloppgave**. Prøveeksamen H2022 er registrert i egen kolonne som
støtte, men holdt utenfor scoren. Fordi grunnlaget er lite (7 sett) er hvert
tema også kort begrunnet.

| Tema | Antall sett (av 7) | Gjenganger-score | Kommentar |
|---|---|---|---|
| **Numerisk integrasjon / Python-kode (Euler–Cromer m.m.)** | 7 | **100 %** | Én kode-deloppgave i HVERT sett — emnets signatur |
| **Newtons 2. lov + frilegemediagram + kraftmodeller** | 7 | **100 %** | FBD eksplisitt etterspurt i 6/7; N2L brukt i alle |
| **Arbeid, energi og energibevaring** | 7 | **100 %** | Bærebjelke; ofte kombinert med støt eller rotasjon |
| **Rotasjon / dreiemoment / treghetsmoment / stive legemer** | 7 | **100 %** | Stav, sylinder, jojo, rullende kule, spinn, `I`-rangering |
| **Spesiell relativitet** | 6 | **86 %** | Nesten alltid siste oppgave; kun H2024 mangler den |
| **Differensialligninger (utlede + løse analytisk)** | 6 | **86 %** | 2. ordens homogen (SHM) + 1. ordens separabel |
| **Luftmotstand / drag-modeller (`−D\|v\|v`, `−kv`, `kv²`)** | 6 | **86 %** | Kobles nesten alltid til numerikk-deloppgaven |
| **Svingninger / harmonisk oscillator (SHM)** | 5 | **71 %** | Fjær eller pendel → 2. ordens ODE → karakteristisk likn. |
| **Bevegelsesmengde og støt (impuls, uelastisk kollisjon)** | 5 | **71 %** | Fjær skyter klosser, kule i kloss/stav, ballistisk pendel |
| **Sirkelbevegelse og sentripetalkraft** | 5 | **71 %** | Loop, vertikal sirkel, dosert sving, spiralvei |
| **Fermi-/estimeringsproblem** | 4 | **57 %** | Fuji, Jorda i fyrstikkeske, Drake-ligningen, bøye seg ned |
| **Taylor-utvikling (linearisering / rekkeutvikling)** | 4 | **57 %** | Linearisere `sin θ ≈ θ`; rekkeutvikle relativistisk `E` |
| **Kinematikk i 2D / skrått kast** | 3–4 | **~50 %** | Dagobah, pakkelevering, golf; + spiral/konstant-α |
| **Gravitasjon / sentralkraftbevegelse (satellitt, komet)** | 2–3 | **~35 %** | Kometbane (H2024), satellittbane (H2025), + unnslipningsfart |
| **Referansesystemer / Galilei-transformasjon** | 1–2 | **~20 %** | Kloss på bevegelig bane (H2022); ellers formelark-beredskap |
| **Lagrange-formalisme** | 0 | **0 %** | Nevnt i emnebeskrivelsen, aldri testet |

### Viktigste funn

- **Fire søyler bærer hvert eneste sett:** (1) numerisk modellering med Python,
  (2) Newton + frilegemediagram + kraftmodeller, (3) arbeid/energi(bevaring), og
  (4) rotasjon/dreiemoment/stive legemer. Alle fire er 100 %. Et typisk sett har
  en energi-/bevaringsoppgave, en rotasjonsoppgave, en oppgave som utleder og
  løser en differensialligning (med Python-hale), og en SR-oppgave.
- **Numerisk Python er kommet for å bli og er obligatorisk (100 %).** Nesten
  alltid som **siste deloppgave i en differensiallignings-oppgave**: «skissér en
  kode / integrasjonsløkke». Kandidaten skriver **pseudokode/Python for hånd** —
  ikke et helt program, bare initialbetingelser + integrasjonsløkka.
  **Euler–Cromer er sensorens klart foretrukne metode** og skal kunne begrunnes.
  Læreboka **må** bygge denne ferdigheten som et fullverdig spor (jf. FYS1120,
  ikke FYS1001).
- **Rotasjon står mye sterkere enn i et typisk fysikk 1/2-løp** — 100 % av
  settene. Stiv-legeme-mekanikk (kraftmoment `τ = r × F`, `τ = Iα`,
  rullebetingelse `v = ωR`, parallellakseteorem, spinnbevaring) er kjernestoff,
  ikke tilleggsstoff.
- **Spesiell relativitet er reelt eksamensstoff** (86 %), i to varianter:
  regneoppgave (tidsdilatasjon/lengdekontraksjon/hastighetsaddisjon) og
  konseptuelt paradoks (stige-i-låve, tvillinger, samtidighet). H2025 innførte
  også **romtidsdiagram** som tegneoppgave.
- **Emnebeskrivelsens Lagrange-formalisme er død på eksamen** (0/7). Grunnlaget
  er 100 % newtonsk. Ikke bygg lærebok-tyngde her.
- **Estimering/Fermi er en fast sjanger** (57 %) med egen retteregel: det er
  *resonnementet og størrelsesorden* som premieres, ikke presisjonen.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med sensorens dokumenterte foretrukne metode.
Poengmodell: **0–5 per deloppgave**. **Gjennomgående metodekrav for ALLE typer:
alt skal begrunnes; bare riktig svar uten begrunnelse gir liten/ingen uttelling;
bare å skrive opp relevante formler uten å bruke dem gir null.**

### A. Skrått kast / kinematikk i 2D
- **Krav:** Dekomponér i `x` og `y` som *uavhengige* bevegelser. Uten
  luftmotstand er `v_x` konstant og `v_y` styrt av `g`. Bruk **symmetri om
  toppunktet** (`v_y = 0` i toppen; `v_y` like stor og motsatt ved symmetriske
  tider). Finn `g` fra `Δv_y/Δt`, deretter `v₀ = √(v_{0x}² + v_{0y}²)` og
  `θ = arctan(v_{0y}/v_{0x})`. Standardresultater: flytid `t₁ = (2v₀/g) sin θ`,
  rekkevidde `x₁ = (v₀²/g) sin 2θ`.
- **Sensor:** −2p om bare én hastighetskomponent er funnet; −2p om retning ikke
  angis; −1p om en følgefeil gir `v_x ≠ 0` uten at det kommenteres. Poeng splittes
  ofte i «fart» (flest poeng) og «vinkel».
- **Sett:** V2024, H2023, V2025 (+ prøve H2022, H2024 spiral).

### B. Fermi-/estimeringsproblem
- **Krav:** Forklar tankegangen og hvert steg **eksplisitt**, velg en enkel
  geometrisk modell (kule, kjegle), regn i **tierpotenser** (størrelsesorden), og
  **konkludér med en rimelighetsvurdering**. Klassikere: Mount Fuji i
  lastebil-lass (kjeglevolum), Jorda komprimert til en fyrstikkeske
  (tetthetssammenligning mot nøytronstjerne), Drake-ligningen (min/maks over 12
  tierpotenser), energien i å bøye seg ned (`mgh`).
- **Sensor:** Gir **god uttelling for resonnementet**, ikke presisjonen — men
  tankegangen må være tydelig forklart (typisk 2p tall + 3p forklaring).
- **Sett:** V2023, V2024, V2025, H2022 (+ prøve).

### C. Newton på skråplan / koblede klosser med friksjon
- **Krav:** **Frilegemediagram først** (navngi alle krefter og symboler),
  dekomponér tyngden i `mg sin θ` (langs plan) og `mg cos θ` (normalt),
  `N = mg cos θ`, friksjon `f = μN`, N2L komponentvis for hver kloss; løs for `a`
  og snordrag `T`. Signaturgrepet: **verifiser med grensetilfeller**
  (`μ₁ = μ₂ ⇒ T = 0`; `μ = 0 ⇒ a = g sin θ`; `θ = 90° ⇒ fritt fall`;
  `m₂ = 0 ⇒ T = 0`) — dette er ofte en egen, poenggivende deloppgave (H2024). Kan
  utvides til: «for hvilke `(μ₁, μ₂)` blir klossene liggende?» (`a ≤ 0`-betingelse
  i `(μ₁, μ₂)`-planet), og «hvorfor bryter formelen sammen når `μ₂ → ∞`?»
  (fordi glidningsantakelsen ikke lenger gjelder).
- **Sensor:** −2p for udefinerte symboler / uforklarte krefter i FBD; −1p for
  klart feil angrepspunkt; −1p om normalkraftens lengde er urimelig vs.
  tyngdekomponenten. Følgefeil straffes ikke.
- **Sett:** H2024 (to klosser), H2023 (kloss på kile), V2024 (Daytona-FBD),
  V2025 (golf/fjær-FBD), H2025 (kloss+kule på skråplan).

### D. Bevaringslover — bevegelsesmengde og mekanisk energi
- **Krav:** Bruk bevaring, men **begrunn alltid hvorfor** den gjelder
  (bevegelsesmengde: «ingen ytre krefter i denne retningen»; mekanisk energi:
  «bare konservative krefter gjør arbeid»). Klassiske oppsett:
  - **Fjær skyter to klosser** → impulsbevaring `v_A = −(m_B/m_A)v_B`,
    energibevaring gir lagret fjærenergi `U₀ = ½m_A v_A² + ½m_B v_B²`.
  - **Uelastisk støt** (kule i kloss/stav, ballistisk pendel, meteoroide i
    satellitt): impulsbevaring gjennom støtet, deretter energibevaring *etter*
    støtet for svinghøyde/vinkel. Regn **relativt energitap** `K_etter/K_før`.
  - **Loop/vertikal sirkel:** `mgh = ½mv²` for fart, `N > 0`-betingelse i
    toppen gir `v_topp > √(Rg)` ⇒ `h > (5/2)R`.
- **Sensor:** **0p for å bruke energibevaring i et uelastisk støt.** −1p om
  bevaring brukes uten begrunnelse. Maks 2p om man glemmer at et delsystem (kloss
  1) også får fart.
- **Sett:** V2024, H2023, V2025, H2025, H2022, V2023 (loop).

### E. Sirkelbevegelse og sentripetalkraft
- **Krav:** Kreftene inn mot sentrum gir `ΣF = mv²/r`. Rett fortegnsoppsett:
  bunn av loop `N − mg = mv²/R`, topp `mg + N = mv²/R` med kontakttap ved `N = 0`.
  **Dosert sving med friksjon (Daytona):** drøft **retningen på friksjonen** (ned
  langs helningen ved høy fart, opp ved lav fart) og vilkåret `f ≤ μ_s N`.
  **Spiralbane:** bare hastighetskomponenten **vinkelrett på spiralaksen**
  (`v cos θ`) inngår i `v²/R`.
- **Sensor:** −1p for å legge på en fiktiv «sentripetalkraft» i FBD-et; −1p om
  snordrag/normalkraft åpenbart tegnet feil størrelse. For 5p på Daytona må det
  forklares *hvordan* friksjonen bidrar til sentripetalakselerasjonen.
- **Sett:** V2023, H2023, V2024, H2024, H2022 (+ prøve: kloss av kule).

### F. Rotasjon av stivt legeme
- **Krav:** FBD → kraftmoment `τ = r × F` (kraft gjennom aksen gir null moment)
  → N2L for rotasjon `τ_net = Iα` → `α = τ/I`. For rulling: koble translasjon og
  rotasjon via **rullebetingelsen `v = ωR`** (deriver: `a = αR`) for å finne
  når/ hvor ren rulling inntreffer. Bruk **energibevaring** (`½Iω² + ½mv² = mgh`)
  for sluttfart/vinkelfart. Bruk **parallellakseteoremet** `I = I_cm + Md²` ved
  sammensatte legemer (kule+stav). **Spinnbevaring** når netto ytre kraftmoment
  er null (kunstløper, roterende stol). Klassiske objekter: fallende stav i
  hengsel, jojo, sylinder på skråplan (rulle + skli samtidig), rullende kule opp
  bakke, kule skutt inn i stav.
- **Sensor:** Er **mild på fortegnsfeil** («svært god uttelling om man nesten får
  riktig uttrykk men surrer med fortegn»), men krever riktig oppsett. −2p om
  kraftmomentet til tyngden ikke er null når man regner om massesenteret. −2p om
  N2L ikke også brukes der det trengs.
- **Sett:** V2023 (stav), H2023 (jojo, ChatGPT-spinn), V2024 (sylinder), H2024
  (rullende kule), V2025 (kule+stav), H2025 (rullende kule), H2022 (`I`-rangering).

### G. Svingninger, harmonisk oscillator og differensialligninger
- **Krav:** Utled ODE fra N2L (`m d²y/dt² = ΣF`). For lineær fjær: substituér
  `u = y − y_L` → `d²u/dt² = −(k/m)u` → **karakteristisk likning**
  `λ² + pλ + q = 0` (formelarket gir oppskrift for reelle/like/komplekse røtter),
  bruk initialbetingelser til å bestemme konstantene. For **ikke-lineær kraft**
  (`F = −kx − cx²`): finn `U = −∫F dx`, finn likevekt `F = 0`, og finn
  **frekvensen for små svingninger** ved å linearisere om likevekt
  (`x = x₀ + ξ`, `ξ` liten) → `ω = √((k + 2cx₀)/m)`. For **pendel**:
  **Taylor-utvikle `sin θ ≈ θ`** om `θ = 0`. For **1. ordens separabel** (fallende
  fjær med `F_D = −k_v v`): separér variabler, integrer → `v(t) = v_T(1 − e^{−gt/v_T})`
  med terminalfart `v_T = mg/k_v`.
- **Sensor:** **0p** hvis kandidaten «bare integrerer ligningen» og behandler `y`
  som konstant (viser manglende forståelse av hva en diff.ligning er). Poeng
  fordeles: karakteristisk likning (2p) + generell løsning (1p) + korrekt bruk av
  initialbetingelser (2p). Siden svaret ofte er *oppgitt*, kreves tydelig,
  sporbar utledning.
- **Sett:** V2023 (pendel), V2024 (fjær), H2024 (ikke-lineær fjær), V2025 (fjær),
  H2022 (ren ODE), H2023 (1. ordens fjær).

### H. Numerisk integrasjon og Python-kode (obligatorisk, 100 %)
- **Krav:** Skisser koden med (i) **initialbetingelser** og (ii) en
  **integrasjonsløkke** — ikke hele programmet. Skriv akselerasjonen fra ODE-en,
  oppdater fart, så posisjon. **Euler–Cromer** er sensorens foretrukne metode:
  ```
  for i in range(N-1):
      a = ...(bruk theta[i]/x[i], omega[i]/v[i])
      omega[i+1] = omega[i] + a*dt        # oppdater fart FØRST
      theta[i+1] = theta[i] + omega[i+1]*dt   # bruk OPPDATERT fart
  ```
  For **luftmotstand**: `F_D = −D*abs(v)*v` — absoluttverdien er avgjørende for
  riktig fortegn uansett bevegelsesretning. For **2D-baner** (kast med drag,
  komet, satellitt): egne komponenter i `x` og `y`. **Begrunn metodevalget:**
  Euler–Cromer er (tilnærmet) energibevarende og «tar av og til for mye, av og
  til for lite», så feilen akkumuleres langt saktere enn i Forward Euler.
- **Sensor (svært detaljert):** −1p for å utelate absoluttverdi (`v²` i stedet
  for `abs(v)·v`); −2p for å skrive `v` uten indeks i løkka; maks 2p om ikke både
  `x`- og `y`-retning tas med der det trengs; −1p for feil akselerasjonskomponent.
  Poeng gis for riktige initialbetingelser (1p), riktig akselerasjon (3p) og
  riktig løkke (1p). **Alle programmeringsspråk godtas; syntaksfeil straffes
  ikke.**
- **Undertype — feilvurdering av numerisk metode** (H2024 kometbane): Kjenn igjen
  at **Forward Euler «lekker energi»** og gir en spiral utover i stedet for en
  lukket ellipse; **rett det ved å bytte til Euler–Cromer** (eller mindre
  steglengde / høyere ordens metode). Ved endret fysikk (solvind `F_s = s/r²`
  radielt utover) må koden utvides med det nye kraftleddet — og massen `m` må da
  med, fordi kraften ikke lenger er masseuavhengig.
- **Undertype — trapesmetode på måledata** (H2022): Numerisk integrasjon av
  arbeid `W = ∫F dx` fra en datafil med ujevne intervaller:
  `W += (F[i+1]+F[i])*(x[i+1]−x[i])/2`.
- **Sett:** alle 7.

### I. Spesiell relativitet
- **Krav:** To varianter:
  - **(a) Regneoppgave:** `Δt = γΔt₀` (tidsdilatasjon), `l = l₀/γ`
    (lengdekontraksjon), hastighetsaddisjon `v' = (v−u)/(1−uv/c²)`, med
    `γ = 1/√(1−v²/c²)`. **Pass på hvilket system som måler egentid/egenlengde**
    (egentid måles i systemet der de to hendelsene skjer på samme sted). Nyere
    oppgaver kombinerer tidsdilatasjon med strekning (`d = vγτ`) og løser for `v`,
    og krever **romtidsdiagram** (H2025).
  - **(b) Konseptuelt paradoks** (stige-i-låve, tvillinger, to romskip som skyter
    på hverandre): poenget er **relativitet av samtidighet** — det er dét som
    løser paradokset.
- **Sensor:** **Ingen poeng for bare å skrive opp SR-formler fra formelarket**
  uten å drøfte den konkrete situasjonen. For paradoksene: mye uttelling for
  fornuftige betraktninger, men *samtidighet* må trekkes fram. −2p for å bytte om
  `l` og `l₀`. Bevegelsesligninger uten Lorentz-faktor gir 0p på regnedelen.
- **Sett:** V2023, H2023, V2024, V2025, H2025, H2022 (Taylor av `E` + to romskip).

### J. Kvalitative / konseptuelle forklaringsoppgaver
- **Krav:** 2–4 setninger som treffer **riktig mekanisme med riktig fagbegrep**.
  Gjengangere: indre vs. ytre krefter (Münchhausen kan ikke løfte seg selv),
  spinnbevaring når vekter slippes, hvorfor en kile presses mot veggen,
  snordrag topp vs. bunn av vertikal sirkel, kritikk av en feilaktig
  ChatGPT-løsning (masse ≠ treghetsmoment; spinn er bevart), rullende vs.
  glidende ball opp en bakke (kommer lengst *med* friksjon).
- **Sensor:** Honorerer presisjon; trekker for svada og helgardering. Flere
  oppgaver ber eksplisitt om å begrunne **både** med energiargument **og** med
  Newtons 2. lov — fasiten viser da begge, og løsningen bør speile dette.
- **Sett:** minst én per sett; hele midtveis er kvalitativ/kort-kvantitativ MCQ.

### K. Gravitasjon og sentralkraftbevegelse
- **Krav:** `F = GMm/r²` som sentripetalkraft `⇒ v = √(GM/r)` for sirkelbane.
  **Dimensjonsanalyse** kan brukes til å utlede `v ∼ √(GM/r₀)` (H2025).
  Kometbane: koblede diff.likninger `d²x/dt² = −GM x/(x²+y²)^{3/2}` (H2024);
  bevaring av mekanisk energi og spinn, aphel/perihel via `mv₁r₁ = mv₂r₂`.
  Unnslipningsfart `v_u = √(2GM/R)` fra energibevaring (prøve).
- **Sensor:** Bevaringsargumentene må begrunnes; spinnbevaring «fordi kraften er
  radiell», energibevaring «fordi bare tyngden gjør arbeid».
- **Sett:** H2024 (komet), H2025 (satellitt), + prøve (unnslipningsfart).

---

## 4. Sensorens krav

Sensorveiledningene er **påfallende stabile 2022–2025** — samme innledende avsnitt
gjentas nesten ordrett (eksplisitt i V2024, H2023, V2025). Metareglene:

1. **Alt skal begrunnes.** Ordrett fra veiledningen: *«Generelt gis lite eller
   ingen poeng for bare riktig svar uten noen begrunnelse. Det gis heller ikke
   poeng for å bare skrive opp noen likninger som kanskje er relevante uten å
   gjøre noe forsøk på å bruke dem eller tilpasse dem til det gitte problemet.»*
2. **Inntil 5 poeng per deloppgave, alle deloppgaver teller likt.** Det gis poeng
   for **en god løsningsidé selv om den ikke fullføres**. Bredde lønner seg.
3. **Følgefeil straffes ikke.** En feil tidlig i kjeden forplantes uten nytt
   trekk — forutsatt at mellomregningen er vist så feilen er sporbar.
4. **Gjeldende siffer:** bruk et fornuftig antall; svar med ett siffer mer/mindre
   enn fasit godtas; avrundingsforskjeller i mellomregning trekkes normalt ikke.
   (Enkelte deloppgaver trekker likevel −1p for kun ett gjeldende siffer eller
   feil enhet — jf. V2025 oppg. 4a.)
5. **Frilegemediagram er en selvstendig, poenggivende ferdighet:** navngi og
   forklar alle krefter og symboler (**−2p for udefinerte symboler / uforklarte
   krefter**), riktig retning, riktig angrepspunkt (−1p ved klart feil), og
   rimelig lengde på vektorene (`N` vs. tyngdekomponenten). Ikke tegn inn
   fiktive «sentripetalkrefter» (−1p).
6. **Flere gyldige metoder godtas** og vises ofte side om side i fasiten: fart via
   `v = gt sin θ` *eller* `s = ½g sin θ t²`; «kommer lengst opp med/uten friksjon»
   begrunnes *både* med energi *og* N2L. Velg den enkleste og gjennomfør ryddig.
7. **Riktig metode teller, ikke bare riktig tall:** 0p for energibevaring i et
   uelastisk støt; 0p for å «integrere en diff.ligning som om `y` er konstant»;
   0p for å skrive opp SR-formler uten å diskutere situasjonen.

### Hva skiller karakternivåene (destillert fra fasitkommentarene)

- **Bestått-nivå:** setter opp riktig standardformel, får riktige enheter, klarer
  de «billige» a-deloppgavene (én-formels regning, dekomponering, definisjoner).
- **Midtsjiktet:** gjennomfører flertrinnsoppgavene (støt-kjeden, sylinder på
  skråplan, ODE → karakteristisk likning → løsning) med vist mellomregning og
  fungerende frilegemediagram.
- **Toppsjiktet:** (i) begrunner bevaringslover og gyldighetsbetingelser
  uoppfordret, (ii) verifiserer uttrykk med grensetilfeller, (iii) behersker de
  kvalitative «forklar»-spørsmålene med presise mekanismer, (iv) skriver korrekt
  Euler–Cromer-løkke med absoluttverdi i drag-leddet **og begrunner metodevalget**,
  og (v) drøfter samtidighet i relativitetsparadoksene.

---

## 5. Typiske feil (eksplisitt omtalt/korrigert i sensorveiledningene)

1. **Tallsvar uten resonnement** — den hyppigst påpekte enkeltfeilen; koster
   mesteparten av poengene selv når tallet er rett.
2. **Energibevaring i et uelastisk støt** (kule setter seg fast) — 0p; her er det
   bevegelsesmengde, ikke mekanisk energi, som er bevart.
3. **«Integrere» en differensialligning som om `y` er konstant** — 0p; viser
   manglende forståelse av hva en ODE er.
4. **Glemme absoluttverdi i luftmotstandskoden** (`v²` i stedet for `abs(v)·v`) —
   −1p; gir feil fortegn når legemet snur.
5. **Skrive `v` uten indeks i integrasjonsløkka** (`v` i stedet for `v[i]`) — −2p.
6. **Bare én romlig retning i en 2D-kode** (glemme `x`- eller `y`-komponent) —
   maks 2p.
7. **Bevaringslov brukt uten begrunnelse** (hvorfor er driv/energi bevart?) — −1p.
8. **Udefinerte symboler / uforklarte krefter i frilegemediagram** — −2p; og
   fiktiv «sentripetalkraft» tegnet inn — −1p.
9. **Manglende retning på en vektorstørrelse** (hastighet, moment) — −2p.
10. **Bytte om egentid/egenlengde eller `l`/`l₀`** i relativitetsregning — −2p;
    og bevegelsesligninger uten Lorentz-faktor — 0p.
11. **Å bare skrive opp SR-formler** i et paradoks uten å diskutere samtidighet —
    ingen poeng.
12. **Sette likhetstegn i en ulikhetsbetingelse** (`v = √(gR)` i stedet for `>`)
    uten å forklare at grensen er `N = 0` — −1p.
13. **Følgefeil som gir `v_x ≠ 0` i et kast** uten at det kommenteres — −1p.
14. **Glemme at et delsystem også får fart** (kloss 1 i en gjennomtrengnings-
    kollisjon) — maks 2p.
15. **Regne kraftmoment om massesenteret og la tyngden bidra** (den angriper i
    massesenteret → null moment) — −2p.

---

## 6. Formel- og notasjonsapparat

Eksamen deler ut et **fagspesifikt formelark** (bakerst i settet, identisk
2023–2025) og tillater Rottmann + kalkulator. Skillet nedenfor er derfor
**hva som må kunne *brukes aktivt* under tidspress** (velges, kombineres,
utledes) mot hva som bare slås opp.

### Utdelt på formelarket (skal gjenkjennes og brukes, ikke pugges)
Formelarket inneholder (verifisert fra 2023/2024/2025-arkene):
- **Newton/kinematikk:** `ΣF = ma = dp/dt`, `p = mv`, `a = dv/dt = d²r/dt²`;
  konstant `a`: `v = v₀ + at`, `r = r₀ + v₀t + ½at²`, `v² − v₀² = 2a·(r − r₀)`;
  konstant `α`: analoge rotasjonsligninger.
- **Baneakselerasjon:** `a = (dv/dt)û_T + (v²/ρ)û_N`.
- **Rotasjon:** `v = ω × r`, `a = α × r + ω × (ω × r)`.
- **Galilei-transformasjon:** `r = R + r'`, `v = V + v'`, `a = a'`.
- **Kraftmodeller:** fjær `F(x) = −k(x − x₀)`; luftmotstand `F_D = −kv` **eller**
  `F_D = −D|v|v`; statisk friksjon `|F_s| ≤ μ_s N`, dynamisk `|F_d| = μ_d N`.
- **Arbeid/energi:** `W = ∫F·v dt = ∫F·dr = K_B − K_A`, `K = ½mv²`; `U = mgy`;
  fjær `U = ½k(x − x₀)²`; effekt `P = F·v`; konservativ kraft `F = −dU/dx` (1D),
  `F = −∇U` (3D).
- **Impuls/massesenter:** `J = ∫F dt = Δp`; rakettligning
  `F_ext + v_rel dm/dt = ma`; `R_cm = (1/M)Σm_i r_i = (1/M)∫r dm`.
- **Rotasjonsdynamikk:** `τ = r × F`, spinn `L = r × p`, spinnsats `τ = dL/dt`;
  stive legemer `L_z = I_z ω_z`, `τ_z = I_z α_z`; `K_rot = ½Iω²`;
  `I = Σm_i ρ_i² = ∫ρ² dm`; parallellakse `I = I_cm + Md²`; rulling `V = ωR`.
- **Gravitasjon:** `F = −GMm/r² û_r`, `U = −GMm/r`.
- **Relativitet:** Lorentz-transformasjon `x' = γ(x − ut)`, `t' = γ(t − ux/c²)`;
  hastighetstransformasjon `v' = (v − u)/(1 − uv/c²)`; tidsdilatasjon `Δt = γΔt₀`;
  lengdekontraksjon `l = l₀/γ`; `γ = 1/√(1 − v²/c²)`.
- **Matematikk:** Taylor-rekke med restledd; separabel 1. ordens ODE; 2. ordens
  homogen lineær ODE med konstante koeffisienter (karakteristisk likning
  `λ² + pλ + q = 0`, alle tre rot-tilfeller).

### Må beherskes aktivt (kjerneverktøyene — selv om de står på arket)

**1. Newton + frilegemediagram:** dekomponering på skråplan (`mg sin θ`,
`mg cos θ`), `N = mg cos θ`, `f = μN`, N2L komponentvis, koblede klosser med snor;
grensetilfelle-verifisering.

**2. Energi & bevegelsesmengde:** energibevaring med `mgy`, `½kx²`, `½mv²`,
`½Iω²`; friksjonsarbeid som lekkasje `W_f = −μNs`; impulsbevaring gjennom støt
(begrunn «ingen ytre krefter»); uelastisk vs. elastisk; relativt energitap.

**3. Sirkelbevegelse:** `ΣF_radiell = mv²/r`; fortegnsoppsett topp/bunn av loop;
`N = 0` ved kontakttap; friksjonsretning i dosert sving; `v cos θ` i spiral.

**4. Rotasjon/stive legemer:** `τ = Iα`, `α = τ/I`; rullebetingelse `v = ωR`,
`a = αR`; parallellakseteorem; spinnbevaring `I₁ω₁ = I₂ω₂`; kombinert
translasjon + rotasjon; energibevaring `½Iω² + ½mv² = mgh`.

**5. Differensialligninger:** utlede fra N2L; 2. ordens homogen (SHM) via
karakteristisk likning + initialbetingelser; substitusjon `u = y − y_L`;
linearisering om likevekt for små svingninger; 1. ordens separabel
(terminalfart, `v(t) = v_T(1 − e^{−gt/v_T})`); Taylor `sin θ ≈ θ`.

**6. Numerisk Python (aktiv ferdighet — IKKE på arket):**
- **Euler–Cromer-løkke** (oppdater fart før posisjon), begrunnelse av metodevalg;
- drag med `abs(v)*v`; komponentvis 2D (kast, komet, satellitt);
- Forward Euler «lekker energi» → gjenkjenne og rette;
- trapesmetode på datafil (`W += (F[i+1]+F[i])*dx/2`);
- utvide kode med nytt kraftledd (solvind) og huske masse når kraften ikke er
  masseuavhengig; `numpy`-arrays, `for i in range(n-1)`.

**7. Spesiell relativitet:** `γ`, `Δt = γΔt₀`, `l = l₀/γ`, hastighetsaddisjon,
`d = vγτ`; identifisere egentid/egenlengde; relativitet av samtidighet;
romtidsdiagram.

**8. Gravitasjon:** `v = √(GM/r)` (sirkelbane), unnslipningsfart `√(2GM/R)`,
kometbane-ODE på komponentform, bevaringsargumenter; dimensjonsanalyse.

### Skal IKKE bygges tungt på (til tross for emnebeskrivelsen)
- **Lagrange-formalisme:** nevnt i læringsutbyttet, aldri testet (0/7). All
  mekanikk er newtonsk.
- **Runge–Kutta:** formelarket/pensum nevner høyere ordens metoder, men i praksis
  er **Euler–Cromer** metoden sensor forventer og premierer; RK er beredskap.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer settet hvert eneste år)

1. **Numerisk modellering med Python (Euler–Cromer).** 100 % av settene, alltid
   siste deloppgave i en ODE-oppgave. Initialbetingelser + integrasjonsløkke for
   hånd, drag med `abs(v)*v`, komponentvis 2D, og **begrunnelse for hvorfor
   Euler–Cromer** (energibevarende, feil akkumuleres saktere enn Forward Euler).
   Dette er den viktigste ferdigheten som skiller FYS1100 fra et klassisk
   mekanikkløp — bygg den som et **fullverdig kapittelspor**, ikke en fotnote.
2. **Newton + frilegemediagram + kraftmodeller.** 100 %. FBD som selvstendig
   ferdighet, skråplan/koblede klosser, grensetilfelle-verifisering.
3. **Arbeid, energi og bevegelsesmengde med bevaringsargumenter.** 100 %/71 %.
   Støt-kjeden (impuls gjennom støt → energi etter), fjær-utskyting, loop,
   ballistisk pendel; alltid med begrunnelse for hvorfor bevaring gjelder.
4. **Rotasjon / stive legemer.** 100 %. `τ = Iα`, rullebetingelse,
   parallellakseteorem, spinnbevaring, kombinert translasjon+rotasjon, energi for
   sluttfart. Jojo, sylinder på skråplan, fallende stav, kule+stav.
5. **Differensialligninger: utlede + løse.** 86 %. 2. ordens homogen (SHM) via
   karakteristisk likning; linearisering om likevekt; 1. ordens separabel
   (terminalfart). Nesten alltid koblet til numerikk-deloppgaven.

### Nivå 2 — må kunne (dukker opp i de fleste sett, avgjør B mot C)

6. **Spesiell relativitet.** 86 %. Tidsdilatasjon/lengdekontraksjon/
   hastighetsaddisjon + paradoks-drøfting (samtidighet) + romtidsdiagram.
7. **Sirkelbevegelse og sentripetalkraft.** 71 %. Loop-fortegn, dosert sving med
   friksjonsretning, spiral med `v cos θ`.
8. **Svingninger / harmonisk oscillator** som formalisme (71 %) — sterkt koblet
   til ODE-sporet.
9. **Skrått kast / 2D-kinematikk.** ~50 %. Symmetri, finn `g`/`v₀`/`θ`,
   standardformler for flytid og rekkevidde.
10. **Fermi-/estimeringsproblem.** 57 %. Egen sjanger med egen retteregel —
    billige poeng for den som driller tankegang + tierpotenser.
11. **Taylor-utvikling** (57 %) — som verktøy for linearisering og rekkeutvikling.

### Nivå 3 — bør kjenne til (lavfrekvent, men reelt)

12. **Gravitasjon / sentralkraftbevegelse:** satellitt- og kometbane, dimensjons-
    analyse, unnslipningsfart. ~35 %, men klart økende (H2024, H2025).
13. **Referansesystemer / Galilei-transformasjon:** mest beredskap; kloss på
    bevegelig bane (H2022).
14. **Treghetsmoment-rangering og konseptuelle «forklar»-oppgaver** — billige
    poeng, testes på både midtveis og avsluttende.

### Prognose for neste eksamen

4 timers skriftlig skoleeksamen med Rottmann, kalkulator og utdelt formelark;
**4–7 oppgaver med deloppgaver (a–e), inntil 5 poeng per deloppgave, alle likt
tellende, følgefeil ikke straffet**, gjennomgangskravet «alle svar må begrunnes».
Nesten sikkert innhold: (1) én **Newton/energi/bevaring-oppgave** med
frilegemediagram og grensetilfeller; (2) én **rotasjons-/stiv-legeme-oppgave**;
(3) én **differensiallignings-oppgave** (SHM eller drag) som **utledes, løses
analytisk, og avsluttes med en Python-/Euler–Cromer-deloppgave**; (4) én
**spesiell-relativitet-oppgave** (regning eller paradoks, sannsynligvis siste);
pluss 1–2 oppgaver trukket fra {skrått kast, sirkelbevegelse, Fermi-estimering,
gravitasjon/satellitt}. Midtveiseksamen: **3 timer, ~20 flervalgsoppgaver** over
kinematikk → Newton/friksjon → sirkelbevegelse → energi/bevegelsesmengde →
gravitasjon, pluss de matematiske verktøyene (ODE, Taylor, dimensjonsanalyse,
treghetsmoment).

En lærebok bør derfor organiseres rundt nivå 1-temaene med full metodedrill
(**frilegemediagram + bevaringsbegrunnelse + Euler–Cromer-løkke i hver eneste
relevante utledning**), gi nivå 2 solide standardoppskrifter, dekke nivå 3
kompakt — og **bygge numerisk Python-ferdighet som et gjennomgående, fullverdig
spor**. Lagrange-formalisme kan sløyfes.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/FYS1100/`
(`eksamen/` for oppgavesett, `losningsforslag/` for fasiter/sensorveiledninger).

**Lest grundig (oppgave + løsningsforslag + sensorveiledning):**
- Avsluttende eksamener: **H2022, V2023, H2023, V2024, H2024, V2025, H2025**
  (7 sett) — alle med fullstendig løsningsforslag; V2024, H2023, V2025 har
  eksplisitt sensorveiledning per deloppgave (mest verdifulle kilde til
  sensorlogikken).
- Prøveeksamen **H2022** med fasit (8 oppgaver).

**Lest for form- og temaregistrering:**
- Midtveiseksamener med fasit: prøvemidtveis 2022, **H2022, V2023, H2023, V2024,
  H2024, V2025, H2025** (rene 20-oppgavers flervalg i Inspera).
- FYS-MEK1110-midtveis **V2021** med full sensorveiledning (eldre emnekode, tatt
  med for kontekst, lavt vektlagt).

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside for FYS1100
(scratchpad: `fagbeskrivelse-fys1100.md`), inkl. destillert metodegjennomgang av
sensorveiledningene V2024, H2024, V2023, samt midtveis V2024.

**Merknader om kildene:**
- Arkivet er komplett parvis (hver avsluttende eksamen har løsningsforslag) og
  dekker i praksis hele FYS1100s levetid (2022–2025). Til gjengjeld er tidsserien
  kort (7 avsluttende sett), så temafrekvensene bør leses som «antall av 7 sett»,
  ikke som lange trender; ±1 sett per celle er realistisk usikkerhet.
- Midtveisvektingen (prosent av samlet karakter) står ikke eksplisitt i
  arkivfilene og er **markert for verifisering** mot gjeldende emneside.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller veiledningsformuleringer er gjengitt ordrett.
  Formlene er standard fysikknotasjon og ikke opphavsrettslig beskyttet tekst.
