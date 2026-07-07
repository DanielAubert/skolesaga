# Eksamensanalyse: FYS1120 Elektromagnetisme (UiO)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på eksamensarkivet i
> `~/Desktop/Eksamner/UiO/FYS1120/` — 34 oppgavesett og 45 løsnings-/sensorfiler
> som dekker slutteksamener, kontinuasjonseksamener, midtveiseksamener og egne
> numeriske («Jupyter») eksamener fra 2009 til 2025. **Alle sensorveiledninger
> med poenggiving (`-grading`/`-sol-grading`) er lest grundig**; slutteksamenene
> og løsningsforslagene fra 2016–2025 er gjennomgått i detalj (oppgave + fasit +
> poengmatrise), 2009–2015 er lest tett nok til å kartlegge oppgavetyper og
> temaer, og de eldste settene er skummet for temaregistrering. **Alt innhold er
> omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster,
> fasiter eller sensorformuleringer. Analysen er kvantitativ der kildene tillater
> det.
>
> Merknad om notasjon: FYS1120 og FYS1120L (variant med utvidet laboratorium)
> deler samme eksamen. Formlene som gjengis nedenfor er standard
> fysikknotasjon og ikke opphavsrettslig beskyttet tekst.

---

## 1. Eksamensform og utvikling

### Form gjennom perioden

| Periode | Slutteksamen | Struktur | Hjelpemidler / kommentar |
|---|---|---|---|
| 2009–2011 | Skriftlig skoleeksamen, 3–4 t (2009: 3 t, deretter 4 t) | 4 åpne oppgaver med 3–4 deloppgaver hver | Rottman (matematisk formelsamling) + Angell/Øgrim & Lian (Fysiske størrelser og enheter) + kalkulator + **ett eget A4-notatark**. Ikke utdelt formelark ennå |
| 2012–2019 | Skriftlig skoleeksamen, **4 t** | 4–5 åpne oppgaver, 3–6 deloppgaver hver | Fra 2012 erstattes notatarket av et **utdelt formelark** (3 sider: Maxwell integral/differensial, vektoridentiteter, koordinatsystemer, konstanter). Notatark utgår |
| 2018–2019 | Skriftlig skoleeksamen, 4 t | Nå med **innslag av programmering** («skriv et kort program …») som én deloppgave i flere oppgaver | Python/NumPy tas inn i den ordinære skoleeksamen. Fortsatt penn og papir, men algoritmen skal skisseres |
| 2020–2021 (pandemi) | **Hjemmeeksamen** over flere dager, alle hjelpemidler | 2 store oppgaver med ~15–20 deloppgaver, tungt numerisk (Coulomb-sum, Laplace-løser på gitter) | Unntaksår, ikke normgivende for form, men samme faglige kjerne og retteregler. Ekstra-oppgave for å kompensere |
| 2022–2024 | **Todelt / tredelt Inspera-eksamen** | (i) **Flervalgsdel** (MCQ), (ii) **langsvarsdel** og (iii) egen **Jupyter/numerisk del** | Flervalg teller ~1/3, langsvar ~2/3. Jupyter-delen er en full numerikk-oppgave i notebook (Bcircle/Bsolenoide, ringladning-dipol) |
| 2025 | Konsolidert skriftlig slutteksamen, 4 t (15:00–19:00) | **5 langsvarsoppgaver** der oppgave 5 er den numeriske (Python skrives for hånd) | Python er nå integrert i den ordinære slutteksamen igjen, ikke lenger en separat notebook. Midtveis er ren MCQ |

### Faste regler (gjeldende regime)

- **Vekting:** midtsemestereksamen teller **25 %**, slutteksamen **75 %**.
  Karakterskala **A–F**. Obligatorisk oppmøte ved første forelesning.
- **Poenggiving:** i moderne sett (fra ~2016) gis **hver deloppgave 0–5 poeng**,
  der **5 = feilfri løsning**. I eldre sett (2009–2015) var det inntil **4 poeng**
  per deloppgave. Alle deloppgaver teller likt. Midtveisscoren gjettekorrigeres
  (MCQ).
- **Hjelpemidler i dag:** godkjent kalkulator, Rottman, Angell/Øgrim & Lian, og
  et **utdelt formelark**. Formelarket er svært rikt (se del 6) — Maxwell på
  begge former, alle koordinatsystemer, vektoridentiteter, kretselementer,
  konstanter. Konstanter og materialdata **hentes, ikke pugges**.
- **Oppgavetype:** langsvarsdelen består av **åpne utlednings- og
  forklaringsoppgaver**; flervalgsdelen (midtveis + slutteksamenens MCQ-del) av
  enkeltsvar med ett riktig alternativ.

### Midtveiseksamen (eget format)

- Midtveis finnes i arkivet for 2011–2018 samt 2022, 2024, 2025. Formatet er i
  moderne sett **rent flervalg** (2022/2024: ~12–13 spørsmål; 2025: 12 spørsmål,
  09:00–12:00, 3 timer).
- **Pensumdekning:** kun **første halvdel** av semesteret — elektrostatikk,
  Coulomb/superposisjon, R-vektor, Gauss' lov, elektrisk potensial, dielektrika
  og bundet ladning, kapasitans, strøm/resistans og enkle kretser.
  **Aldri magnetostatikk, induksjon eller Maxwell** (det ligger i andre halvdel
  og testes bare på slutteksamen). 2025-midtveis bekrefter mønsteret presist:
  felt fra to ladninger, R-vektor, total ladning på linjeladning, potensial fra
  ladninger og fra konsentriske kuleledere, fluks gjennom en åpen halvkule,
  bundet overflateladning i en dielektrisk plate, kondensator av tre ledere,
  motstandsnettverk, sylindrisk motstand, avlesning ladningstetthet → E-felt,
  skalering av kuberesistans med sidekant.

### Utviklingstrekk (viktig for læreboka)

1. **Fra klassisk EM til numerisk-forankret EM.** Den store endringen er
   **integreringen av Python/NumPy**. Fra 2018 er «skriv et kort program» en
   fast deloppgave; 2020–2025 har full numerikk (Coulomb-superposisjon i
   for-løkke, Biot–Savart-sum, Laplace-løser, sammenlikning numerikk vs.
   analytisk grense). Læreboka **må** bygge denne ferdigheten — i motsetning til
   søsteremnet FYS1001, der numerikk er lovet men aldri testet.
2. **Bortfall av AC-kretser og ladd partikkel.** De eldre settene (2009–2014)
   hadde tunge **RLC-vekselstrømsoppgaver med kompleks impedans** (2010, 2012,
   2014) og **ladd-partikkel-oppgaver** (syklotron 2010, massespektrometer 2012).
   Begge er så godt som borte fra moderne slutteksamen (impedans lever videre
   bare som ett teorisvar, f.eks. AC-ring i 2017 oppg. 4f).
3. **Elektrostatikk/magnetostatikk-tyngdepunktet er stabilt.** Tvers gjennom hele
   perioden er kjernen: E-felt fra ladningsfordelinger (Coulomb + Gauss),
   potensial, kondensator/dielektrika, transiente RC/RL-kretser, magnetfelt fra
   strøm (Ampère + Biot–Savart) og induksjon/gjensidig induktans. Dette er
   «det harde midtstykket» som går igjen hvert eneste år.
4. **Avvik mot grunnbeskrivelsen (flagget).** Emnebeskrivelsen lister
   **elektromagnetiske bølger, Poyntings vektor og Maxwells fulle feltteori** som
   sentrale tema. I eksamensarkivet er disse **marginale**: EM-bølger dukker opp
   én gang (koaks-AC 2010) og Poynting ikke som egen oppgave. Maxwell testes
   først og fremst som **ett teorispørsmål** («hva heter loven ∇·D = ρ, og vis
   overgangen til integralform via divergensteoremet», 2017). Læreboka bør vekte
   deretter: bygg tyngden på statikk + kretser + induksjon, dekk bølger/Poynting
   kompakt.
5. **Anvendt innpakning.** Moderne oppgaver kles ofte i modeller: nervecelle som
   sylinderkondensator (2018), cellemembran som RC-stige (2018–2020), magnetisk
   felle, koaksialkabel. Fysikken er standard; innpakningen er ny.

---

## 2. Temafrekvens-tabell

Temaklassifisering av **slutteksamenene** (inkl. kont og Jupyter-deler, men
midtveis holdt utenfor — den dekker per definisjon bare første halvdel).
Celleverdi = antall sett i årsgruppen der temaet forekommer som minst én
deloppgave. Tall for 2009–2015 har ±1 usikkerhet (tettlesing + skumlesing av
oppgavene med fasit); 2016–2025 er basert på fullstendig gjennomlesing.
Gjenganger-scoren teller ~17 slutteksamen-sett i perioden.

| Tema | 2009–12 (5 sett) | 2013–16 (4) | 2017–19 (5, m/kont) | 2020–25 (6) | **Gjenganger-score** |
|---|---|---|---|---|---|
| **Elektrostatikk: Coulomb, E-felt, superposisjon** | 4 | 4 | 5 | 6 | **≈ 90 %** |
| **Elektrisk potensial og potensialdifferanse** | 4 | 3 | 5 | 6 | **≈ 90 %** |
| **Gauss' lov (E- og D-felt, alle symmetrier)** | 4 | 4 | 4 | 6 | **≈ 90 %** |
| **Transiente kretser (RC / RL, Kirchhoff, diff.likning)** | 3 | 3 | 4 | 5 | **≈ 88 %** |
| **Magnetfelt fra strøm (Ampère + Biot–Savart)** | 4 | 3 | 3 | 4 | **≈ 82 %** |
| **Kondensator / kapasitans** | 2 | 3 | 4 | 4 | **≈ 76 %** |
| **Induksjon: Faraday, Lenz, indusert emf/strøm** | 2 | 2 | 4 | 4 | **≈ 71 %** |
| **Numerisk Python (Coulomb-/Biot–Savart-sum, Laplace)** | 0 | 0 | 3 | 6 | **≈ 53 %** (100 % fra 2018) |
| **Selv- og gjensidig induktans** | 1 | 1 | 3 | 4 | **≈ 53 %** |
| **Strøm, strømtetthet, resistans (Ohm)** | 2 | 1 | 3 | 3 | **≈ 53 %** |
| **Dielektrika / D-felt / polarisasjon / bundet ladning** | 1 | 1 | 3 | 3 | **≈ 47 %** |
| **Magnetiske materialer, magnetisering, B vs. H** | 0 | 1 | 3 | 1 | **≈ 29 %** |
| **Energi i felt (½LI², ½CV², energitetthet u)** | 3 | 1 | 1 | 0 | **≈ 29 %** |
| **AC-kretser / kompleks impedans (RLC)** | 3 | 1 | 1 | 0 | **≈ 29 %** (utgående) |
| **Magnetisk dipol (m = IS, dipolfelt)** | 0 | 1 | 0 | 2 | **≈ 18 %** |
| **Maxwell (navngi lov, integral↔differensial)** | 1 | 0 | 2 | 0 | **≈ 18 %** |
| **Ladd partikkel i felt (syklotron, massespektr.)** | 2 | 0 | 0 | 0 | **≈ 12 %** (utgått) |
| **EM-bølger / Poyntings vektor** | 1 | 0 | 0 | 0 | **≈ 6 %** |
| **Relativitet** | 0 | 0 | 0 | 0 | **0 %** |

**Viktigste funn:**

- **Fire søyler bærer nesten hvert eneste sett:** (1) E-felt fra ladninger
  (Coulomb + superposisjon), (2) elektrisk potensial, (3) Gauss' lov med
  symmetriargument, (4) en transient RC/RL-krets med Kirchhoff → differensiallikning.
  Et moderne sett har typisk oppgave 1 = ladninger/Coulomb, oppgave 2 =
  Gauss/kondensator, oppgave 3 = krets, oppgave 4 = magnetfelt/induksjon,
  oppgave 5 = numerisk (2024, 2025 følger dette nesten eksakt).
- **Magnetostatikken er den femte søylen** og gis nesten alltid via Ampère
  (høy symmetri: rett leder, koaks, sylinderskall, solenoide) eller Biot–Savart
  (strømsløyfe på aksen, endelig linjestykke, superposisjon av fire linjer).
  Nesten hvert magnetfelt-sett kobles videre til **gjensidig induktans**.
- **Numerisk Python er kommet for å bli** — 100 % av slutteksamenene fra 2018.
  Dette er den største enkeltforskjellen mot et tradisjonelt EM-pensum og må
  drilles i læreboka.
- **Emnebeskrivelsens «tunge» EM-tema er lette på eksamen:** bølger, Poynting og
  full Maxwell-teori er marginale. Maxwell opptrer mest som navngiving +
  integral/differensial-overgang. Vekt læreboka mot statikk/kretser/induksjon.
- **To temaer er på vei ut / ute:** AC-kretser med kompleks impedans og
  ladd-partikkel-oppgaver dominerte 2009–2014, men er borte fra moderne
  slutteksamen. Bør dekkes kompakt som beredskap, ikke satsingsområde.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med sensors dokumenterte foretrukne metode.
Poengmodell: 0–5 per deloppgave. **Gjennomgående metodekrav gjelder ALLE typer:
nevn loven ved navn før bruk, begrunn symmetri før du forenkler feltet, hold
vektor/skalar fra hverandre, sett opp R-vektoren eksplisitt.**

### A. E-felt fra punktladninger og kontinuerlig fordeling (Coulomb + superposisjon)
- **Krav:** Sett opp `E = (Q/4πε₀)·R̂/R²` med **korrekt R = r − r'** (feltpunkt
  minus kildepunkt), superponér komponentvis. Ved kontinuerlig fordeling
  (halvsirkel, linje, ring): finn `ρ = Q/L` riktig, `dq = ρ dl`, integrer `dEₓ`,
  og **bruk symmetri til å nulle en komponent** (f.eks. `E_y = 0` fordi bidrag for
  ±y kansellerer — begrunn dette). Oppgi eksplisitt om du bare finner én
  komponent (skriv `Eₓ`). 2024 la på en **uendelig sum** (`Σ 1/i² = π²/6`, slås
  opp i Rottman) på toppen.
- **Faste trekk (sensor):** −1 for feil potens (`Q/4πε₀R`), −1 for glemt `ε₀`,
  −2 for **vektor under brøkstreken**, −2 for å ikke markere at det er en vektor
  / kun x-komponent, −1 for uforklart fortegn, −1 for feil ρ, **−3 for å regne
  potensial i stedet for felt** (selv om regningen ellers er riktig), −1 for å
  ikke nevne superposisjonsprinsippet.
- **Frekvens:** ~90 % av settene; nesten alltid oppgave 1.

### B. Gauss' lov (E- eller D-felt)
- **Krav:** Velg Gauss-flate tilpasset symmetrien (kule for kuleladning, sylinder
  for linje/sylinder, «pillbox» for plan). **Argumenter symmetrien eksplisitt:**
  rotasjonssymmetri → bare radiell komponent, translasjonssymmetri (uendelig
  lang) → ingen z-avhengighet, at `∮` over sideflatene/endeflatene forsvinner.
  `∮D·dS = Q_fri,inn` → D → `E = D/ε`. Håndter **alle områder** (innenfor/mellom/
  utenfor; `E = 0` inne i ledere og i tomme hulrom). For massiv kule:
  `Q_inn = Q(r/a)³`; for sylinder: `(r/a)²`. Godtatte alternativer nevnt i fasit:
  Gauss på differensialform `∇·D = ρ`, eller Poissons/Laplace `∇²V = −ρ/ε`.
- **Faste trekk:** −1 (ofte 0,5) for manglende symmetribegrunnelse, −1 for
  **areal der man skal ha volum** for innesluttet ladning, −2 for kun ett område,
  −3 for kun feltet utenfor / anta punktladning i midten, −0,5 hvis Gauss-flaten
  ikke er lukket.
- **Frekvens:** ~90 %.

### C. Elektrisk potensial og potensialdifferanse
- **Krav:** For punktladninger superponér **skalar** `V = Σ Qᵢ/(4πε₀Rᵢ)` — ingen
  fortegn på `Rᵢ`, ingen vektorer. For felt→potensial: linjeintegral
  `V(r) − V(ref) = −∫E·dl` med **eksplisitt valgt nullpunkt** og riktige grenser.
  Konstant potensial der `E = 0` (inne i ledere/hulrom). Kvalitative varianter
  («er V = 0 et sted mellom to positive ladninger?»): begrunn **fysisk** at summen
  av positive bidrag ikke kan bli null.
- **Faste trekk:** −3 for å regne **vektor der det spørres om skalarpotensial**,
  −3 for å gi `Rᵢ` fortegn, −1 for feil/uteglemt nullpunkt, −1 for fortegnsfeil.
  For den kvalitative: kun riktig svar uten begrunnelse = 1 poeng; «fordi begge
  er positive» alene = 1 poeng (kravet er å forklare hvorfor summen ikke kan bli null).
- **Frekvens:** ~90 %.

### D. Kondensator / kapasitans / ideelle ledere
- **Krav:** Bestem ladningsfordelingen fysisk (feltet null inne i ledere → indusert
  overflateladning; nøytral mellomleder får ±Q på sidene). Finn `E`, integrer til
  `ΔV`, `C = Q/ΔV` (eller per lengde). For sammensatte / koaksiale / sylindriske:
  `C = 2πεL/ln(b/a)` etc. **Kommenter fysikken:** en mellomleder reduserer effektiv
  platedistanse (`d → d − h`) → øker C. 2025 og 2020 hadde tre-plate-kondensator.
- **Faste trekk:** −1 for å ikke nevne at feltet er null inne i lederne, −1 for å
  ikke plassere ladninger på mellomlederens overflater, −1 for å ikke kommentere
  kapasitanseffekten, −1 for feil nullpunkt.
- **Frekvens:** ~76 %.

### E. Dielektrika, D-felt og bundet ladning
- **Krav:** Bruk **D-feltet** i dielektrika: `∮D·dS = Q_fri`, `D = εE`, `ε = εᵣε₀`.
  Sentralt sensorpoeng: **normalkomponenten av D er kontinuerlig** over en
  grenseflate uten frie flateladninger, mens **E hopper** (bundne ladninger).
  Polarisasjon `P = (ε − ε₀)E = ε₀χₑE`; størst der E er størst. Bundet
  overflate/volumladning.
- **Faste trekk:** −2 for å bytte om (si at E er kontinuerlig og D ikke), −1 for
  E-integral uten kommentar utenfor kulen, kun 2 poeng for «polarisasjonen er
  størst i vannet» uten å angi presist hvor / uten utregning.
- **Frekvens:** ~47 %, økende.

### F. Strøm, strømtetthet, resistans (Ohms lov)
- **Krav:** `J = I/A` med **riktig tverrsnitt og riktig retning** (langs aksen for
  en vanlig motstand, radielt for et sylinderskall som leder utover). `J = σE`,
  `ΔV = ∫E·dl`, `R = ΔV/I = L/(σA)`. For radiell strøm i sylinderskall:
  `R = ln(b/a)/(2πσL)`. Serie/parallell fra fysikken.
- **Faste trekk:** −2 for feil areal (indre i stedet for tverrsnitt), −2 for
  strøm i feil retning, −1 hvis spenningen blir stående i R-uttrykket.
- **Frekvens:** ~53 %.

### G. Transiente kretser (RC / RL, Kirchhoff → differensiallikning)
- **Krav:** **Si eksplisitt at du bruker Kirchhoffs spenningslov** (KVL) —
  sensor trekker for manglende lovreferanse selv når regningen er riktig.
  Stasjonæranalyse: etter lang tid `dI/dt = 0` (spole = kortslutning, `V_L = 0`)
  og `I_C = 0` (kondensator fullt oppladet = brudd); ved `t = 0⁺` bruk bevaring
  (kondensatorspenning/-ladning eller spolestrøm er kontinuerlig). Transient:
  KVL → **førsteordens diff.likning** → løs: RL-oppladning
  `I(t) = (V₀/R)(1 − e^{−t/τ})`, `τ = L/R`; RC-utladning `I(t) = I₀e^{−t/τ}`,
  `τ = RC`. Nøkkelgrep: at kondensatorens ladning er bevart under en brå endring
  (plater presses sammen → `C` dobles, `V` halveres, 2023).
- **Faste trekk:** **−1 for feil fortegn i diff.likningen** (ufysisk — men ikke
  trekk om studenten selv kommenterer feilen), −1/−2 for manglende KVL-referanse,
  −1 for å ikke innse at `V₀`/batteriet er konstant ved derivasjon, −1 for å
  inkludere batteriet i en sløyfe der det ikke er med (åpen bryter), −2 for å ikke
  argumentere for `I(0) = 0` i RL. **Følgefeil straffes ikke.**
- **Frekvens:** ~88 %; nesten alltid en egen oppgave.

### H. Magnetfelt fra strøm — Ampère vs. Biot–Savart (likestilte veier)
- **Krav (Ampère, ved høy symmetri):** argumenter `B = B_φ(r)φ̂` (sylindersymmetri:
  ingen z-/φ-avhengighet; ingen z-komponent fordi strømmen går i z; ingen
  r-komponent fordi `∇·B = 0`). Velg Ampère-sløyfe, `∮B·dl = 2πrB = µ₀I_inn`.
  Håndter alle områder (`B = 0` inne i tomt sylinderskall; skaler med
  tverrsnittsforhold ved jevn fordeling). Solenoide med kjerne: `B = µNI/l`.
- **Krav (Biot–Savart, ved endelig geometri):** `dB = (µ₀/4π)·I dl × R/R³`, sett
  opp R-vektor, ta kryssproduktet (ofte overlever bare én komponent ved symmetri),
  integrer over lengden `2πa` (ikke arealet!). Superposisjon for sammensatte
  kretser (to/fire linjer → summér). Sjekk grense (endelig → uendelig linje gir
  `µ₀I/2πr`).
- **Poengfordeling (dokumentert):** typisk **2 poeng for symmetri, 3 for
  Ampère/lovbruk**. Faste trekk: −0,5–1 for manglende symmetribegrunnelse, −1 for
  **areal i stedet for buelengde** i linjeintegralet, −1 for feil fortegn, +2 for
  symmetri selv om Biot–Savart ikke fullføres.
- **Frekvens:** ~82 %.

### I. Magnetiske materialer / magnetisering / B vs. H
- **Krav:** Bundet overflatestrøm `J_b,s = M × n̂`, volumstrøm `J_b = ∇ × M`.
  Grensebetingelser: **normalkomponent av B kontinuerlig**, **tangentialkomponent
  av H kontinuerlig** (ved `J_s,fri = 0`); feltlinjer «knekker» fordi
  `B = µ₀(H + M)`. Identifisere om et feltbilde er B eller H: **B-linjer er
  lukkede** («biter seg i halen»), mens `∮H·dl = 0` uten frie strømmer utelukker
  at et lukket linjebilde er H.
- **Kritisk trekkfelle:** **Ikke innfør en permeabilitet µ for en permanentmagnet**
  (ikke lineært medium) — det gir 0 poeng.
- **Frekvens:** ~29 % (topp 2017–2019).

### J. Faradays lov / Lenz / indusert emf og strøm
- **Krav:** `Φ = ∫B·dS` (pass på at B varierer over flaten — integrér, ikke `B·A`),
  `emf = −dΦ/dt`, `I = emf/R`. **Retning fra Lenz' lov** med eksplisitt fysisk
  argument (indusert strøm motvirker flukendringen; «minustegnet i Faradays lov»).
  Bevegelig leder: `emf = BLv`, kraft `F = ILB`; ved terminalhastighet sett opp
  **kraftlikevekt**. Inhomogent felt: fluks fra `∫B(x)dS`, motional emf ved
  bevegelse. 2011/2013: kvadratsløyfe ved rett leder, `Φ = µ₀I₀a ln2/2π`, strøm
  slås av → indusert `I' `, kraft på sløyfen.
- **Faste trekk:** −1–2 for å ikke innse at feltet varierer over flaten (bare
  gange med areal), −1 for feil retning/manglende Lenz-argument.
- **Frekvens:** ~71 %.

### K. Selv- og gjensidig induktans
- **Krav:** `L = Φ/I` (husk faktor `N` for total fluks i flerviklingsspole →
  `L = µπa²N²/l`). Gjensidig `L₁₂ = Φ₂/I₁`; bruk **symmetrien `L₁₂ = L₂₁`** til å
  regne den letteste veien (2024). Ofte via dipoltilnærming for fjern krets, eller
  integrert fluks når B varierer over kretsen (`∫µ₀I/(2πr)·h dr = µ₀Ih ln(...)/2π`).
  Energi: `W = ½LI²` skal stemme med `∫½µH² dv`. AC-ring: `|Î| = |ê|/√(R² + ω²L²)`,
  neglisjér L når `(ωL/R)² ≪ 1`.
- **Faste trekk:** −1 for glemt N-faktor, **−1/−2 hvis strømmen I blir stående i
  sluttuttrykket for L** (skal kansellere), −2 hvis svaret inneholder B eller x,
  −1 for å ikke kommentere `L₁₂ = L₂₁`.
- **Frekvens:** ~53 %.

### L. Magnetisk dipol
- **Krav:** Finn `B_z` på aksen til strømsløyfe via Biot–Savart
  `B_z = (µ₀/4π)·2πa²I/(a²+z²)^{3/2}`, sammenlign med dipolformelen
  `B = (µ₀/4π)(3r̂(r̂·m) − m)/r³` langs aksen for å lese ut `m = Iπa² = IS`.
  Bruk dipolfeltet videre til gjensidig induktans mot fjern krets (i xy-planet er
  `r·m = 0` → `B = −(µ₀/4π)m/r³`).
- **Faste trekk:** −2 for å ikke gjøre store-z-tilnærming, −2 for å prøve
  sammenlikningen i z = 0, −1 hvis I blir stående i induktansen.
- **Frekvens:** ~18 %, men klassisk toppoppgave (2023, 2024-Jupyter).

### M. Numerisk Python (NumPy / matplotlib) — obligatorisk fra 2018
- **Krav:** **Diskretiser kilden og superponér Coulomb-/Biot–Savart-bidrag i en
  for-løkke:** `E += Qᵢ/(4πε₀)·R/‖R‖³` med `Qᵢ = Q/N`, `R = r − rᵢ`, posisjoner
  skalert med `a`. To for-løkker for et plan (`Nx × Ny`). Bruk `scipy.constants`
  for `ε₀`, `µ₀ = 1.257e-6`. Skriv gjenbrukbare funksjoner (`Efraplan`,
  `Bcircle`, `Bsolenoide`, `epotlist`). **Sammenlign numerikk mot analytisk
  grense + asymptote:** uendelig plan/linje nær kilden, punktladning langt unna;
  plott med enheter/normaliserte akser (`z/a`). Kommenter resultatet fysisk
  (potenslov, ikke eksponentiell henfall). Også Laplace-løser på gitter med
  grensebetingelser (2020).
- **Faste trekk (svært detaljerte):** **0 poeng for å bruke det utdelte
  eksempelprogrammet uendret**, kun 1–2 poeng for én ladning i stedet for sum,
  −0,5 for glemt `1/(4πε₀)`, −0,5 for `rᵢ` ikke skalert med a, −0,5–1 for feil
  R-vektor / feil potens R²/R³, −0,5 for feil/manglende dq, −0,5 for kun én
  for-løkke der planet krever to, −0,5 for manglende akseenheter, +1 hver for
  riktig analytisk uttrykk og punktladning-sammenlikning i plottet.
- **Frekvens:** 100 % fra 2018 (som egen deloppgave, egen Jupyter-del, eller
  oppgave 5 i skoleeksamen).

### N. Kvalitative / teori-forklaringsoppgaver
- **Krav:** Kort, presist, med riktig fagbegrep og lovreferanse. Gjengangere:
  navngi en Maxwell-lov og vis integral↔differensial via divergensteoremet (2017);
  Hall-effekten og transformatorens virkemåte (2013); forklar hvorfor
  D er kontinuerlig men E ikke; hvorfor et lukket feltlinjebilde må være B og ikke
  H; hvorfor gjensidig induktans øker når en sløyfe skyves inntil en leder
  (`1/x`-divergens); maksimal effektoverføring `R₁ = R₂` (2017).
- **Frekvens:** minst én per sett; hele midtveis er kvalitativ/kort-kvantitativ MCQ.

---

## 4. Sensorens krav

Sensorveiledningene er påfallende **stabile 2016–2025** — samme innledende avsnitt
gjentas nesten ordrett hvert år. Metareglene:

1. **Fysiske resonnementer og lovreferanser kreves for full uttelling.** Den
   mest gjentatte formuleringen: *ser man på en krets, skal man angi at man bruker
   Kirchhoffs lov — ikke bare skrive den opp.* Det er slik man dokumenterer
   hvordan man har tenkt. Gjelder alle oppgaver: Gauss, Ampère, Faraday,
   Kirchhoff skal **nevnes ved navn**.
2. **Symmetriargumentet er selvstendig poenggivende.** Ved Gauss/Ampère gis
   typisk 2 av 5 poeng for symmetribetraktningene alene. Manglende
   symmetribegrunnelse trekker selv om svaret er riktig.
3. **0–5 poeng per deloppgave**, 5 = feilfri; alle deloppgaver teller likt.
   Sensor gjør i tillegg skjønnsmessige kvalitative vurderinger og kan avvike noe
   fra veiledningen.
4. **Følgefeil straffes normalt ikke:** regner man videre riktig på et galt
   delsvar, gis full uttelling på den nye deloppgaven — forutsatt at
   mellomregningen er vist så feilen er sporbar, og at feilen ikke trivialiserer
   oppgaven.
5. **Vektor/skalar-disiplin er hardt vektet:** å regne felt der det spørres om
   potensial (eller omvendt) gir −3; vektor under brøkstreken gir −2; manglende
   retning/vektormarkering gir −2. R-vektoren `R = r − r'` skal settes opp
   eksplisitt.
6. **Feil fortegn på en diff.likning** regnes som ufysisk og trekkes — men
   **ikke** hvis studenten selv kommenterer at fortegnet er galt. Sensor honorerer
   metakommentarer om at et resultat er urimelig.
7. **Flere gyldige metoder godtas** og vises ofte side om side: Ampère *eller*
   Biot–Savart, Gauss integral *eller* differensialform *eller* Poisson/Laplace,
   Coulomb-integrasjon *eller* Gauss. Velg den enkleste og gjennomfør ryddig.
8. **Enheter og tallsvar:** riktig enhet, rimelig antall gjeldende siffer, riktig
   tierpotens. Sensor er streng på ren kalkulatorinnsetting uten resonnement.

### Hva skiller karakternivåene
- **Bestått:** setter opp riktig lov, R-vektor og standarduttrykk; får rett
  sluttsvar på de «billige» a-deloppgavene.
- **Midtsjikt:** gjennomfører flertrinnsutledningene (Gauss over alle områder,
  KVL → diff.likning → løsning, Biot–Savart-integralet) med symmetriargument.
- **Toppsjikt:** (i) nevner alltid loven og begrunner symmetri uoppfordret,
  (ii) holder vektor/skalar og D/E fra hverandre, (iii) kommenterer fysikken
  (kapasitanseffekt, asymptotisk grense, at feltet følger en potenslov),
  (iv) skriver kjørbar, gjenbrukbar Python som sammenliknes mot analytisk grense.

### Figur- og skisse-krav
- Feltlinjer og ladningsfordeling (kondensatorer, ledere i ytre felt) skal kunne
  tegnes med riktig retning.
- Numeriske plott skal ha **akser med enheter eller normalisert (`z/a`)** —
  manglende akseenheter trekker eksplisitt.

---

## 5. Typiske feil (eksplisitt omtalt eller korrigert i sensorveiledningene)

1. **Regne potensial når det spørres om felt (eller omvendt)** — −3, den mest
   gjentatte enkeltfeilen på a-oppgavene.
2. **Vektor under brøkstreken** i Coulomb-/Biot–Savart-uttrykk (−2) og
   **manglende R-vektor / feil fortegn på R** (`R = r − r'`).
3. **Manglende lovreferanse i kretser** — å skrive opp Kirchhoff uten å si at det
   *er* Kirchhoff (fast trekk).
4. **Manglende eller påstått symmetriargument** ved Gauss/Ampère — resultatet blir
   riktig, men de 2 symmetripoengene ryker.
5. **Areal i stedet for volum** ved innesluttet ladning i Gauss (massiv kule/
   sylinder), og **areal i stedet for buelengde** i Biot–Savart-/Ampère-integralet.
6. **Glemme et felt-/potensialområde** (innenfor/mellom/utenfor; `E = 0` i hulrom
   og inne i ledere).
7. **Feil fortegn i den transiente diff.likningen** (ufysisk løsning), og å glemme
   at batteriet/`V₀` er konstant ved derivasjon.
8. **Blande B og H, eller innføre µ for en permanentmagnet** (ikke lineært medium)
   — 0 poeng.
9. **Bytte om D- og E-kontinuitet** over en dielektrisk grenseflate (D-normal
   kontinuerlig, E-normal ikke).
10. **Glemme N-faktoren i induktans**, eller la strømmen I bli stående i
    sluttuttrykket for L (skal kansellere).
11. **Numerikk:** bruke det utdelte eksempelprogrammet uendret (0 poeng), én
    ladning i stedet for en sum, glemt `1/(4πε₀)`, feil potens `R²`/`R³`, kun én
    for-løkke der et plan krever to, posisjoner ikke skalert med `a`, manglende
    akseenheter.
12. **Tallsvar uten resonnement / manglende enheter** — koster mesteparten av
    poengene selv når tallet er rett.
13. **Kommentere at et endelig felt «faller eksponensielt»** når det egentlig
    følger en potenslov (påpekt eksplisitt i 2025-fasiten).

---

## 6. Formel- og notasjonsapparat

Eksamen deler ut et **rikt formelark** (3 sider) og tillater Rottman + Angell/
Øgrim & Lian. Skillet nedenfor er derfor **hva som må kunne *brukes aktivt*
under tidspress** (velges, kombineres, symmetriargumenteres) mot hva som bare
slås opp.

### Utdelt på formelarket (skal gjenkjennes og brukes, ikke pugges)
Formelarket inneholder (verifisert fra 2012/2018/2019-arkene):
- **Maxwells likninger på begge former:** `∇·E = ρ/ε₀`, `∇·B = 0`, `∇×E = −∂B/∂t`,
  `∇×B = µ₀J + µ₀ε₀∂E/∂t`, og integralformene; i materie `∇·D = ρ_f`,
  `∇×H = J_f + ∂D/∂t`.
- **Definisjoner:** `D = ε₀E + P`, `P = ε₀χₑE`, `D = εE`, `H = B/µ₀ − M`,
  `M = χₘH`, `B = µH`, `µ = µ₀(1 + χₘ)`.
- **Grensebetingelser:** `E₁ₜ = E₂ₜ`, `D₁ₙ − D₂ₙ = ρ_s`, `H₁ₜ − H₂ₜ = J_s × n̂`,
  `B₁ₙ = B₂ₙ`.
- **Kretser:** `ΣV = 0`, `ΣI = 0`, `V = RI`, `I = C dV/dt`, `V = L dI/dt`,
  `P = VI`; kompleks impedans `Ẑ = R`, `1/(iωC)`, `iωL`; RC/RL/LC/RLC-løsninger,
  `τ = RC`, `τ = L/R`, `ω = √(1/LC − (R/2L)²)`, transformator, drevet RLC.
- **Induktans:** `L₁₂ = Φ₁₂/I₁ = L₂₁`, energi `W_m = ½ΣI_kΦ_k = ½ΣL_jkI_jI_k`.
- **Potensialer i elektrodynamikken:** `B = ∇×A`, `E = −∇V − ∂A/∂t`, retarderte
  potensialer.
- **Vektoridentiteter + `∇`, `∇·`, `∇×`, `∇²` i kartesiske, sylindriske og
  sfæriske koordinater; divergensteoremet og Stokes' teorem.**
- **Konstanter:** `µ₀ = 4π·10⁻⁷`, `ε₀ = 8.854·10⁻¹²`, `c₀`, `e`, `mₑ`, `G`.

### Må beherskes aktivt (kjerneverktøyene — selv om de står på arket)

**1. Elektrostatikk (Coulomb + superposisjon):**
- `E = (Q/4πε₀)·R̂/R²`, `R = r − r'`; komponentvis superposisjon; symmetrinulling
- Kontinuerlig: `dq = ρ_l dl` (linje), `ρ_s dA` (flate), `ρ dv` (volum); integrér `dE`

**2. Gauss' lov (E og D):**
- `∮E·dS = Q_inn/ε₀`, `∮D·dS = Q_fri`; symmetrivalg av flate; alle områder
- Massiv kule `Q_inn = Q(r/a)³`; plan `E = ρ_s/2ε₀`; linje `E = ρ_l/2πε₀r`

**3. Potensial:**
- `V = Σ Qᵢ/(4πε₀Rᵢ)` (skalar); `V(r) − V_ref = −∫E·dl`; `E = −∇V`; Poisson
  `∇²V = −ρ/ε`

**4. Ledere, dielektrika, kondensator:**
- `E = 0` inne i leder; indusert overflateladning; `C = Q/ΔV`; plate `C = εA/d`;
  koaks/sylinder `C = 2πεL/ln(b/a)`; kule `C = 4πε/(1/a − 1/b)`
- `D`-normal kontinuerlig, `E`-normal hopper; `P = (ε − ε₀)E`; energi `½CV²`,
  `u = ½D·E`

**5. Strøm og resistans:**
- `J = I/A`, `J = σE`, `R = L/(σA)`; radiell `R = ln(b/a)/(2πσL)`

**6. Kretser (transient):**
- KVL/KCL; RL `I = (V₀/R)(1 − e^{−t/τ})`, `τ = L/R`; RC utlading `I₀e^{−t/RC}`;
  `t = 0⁺`/`t = ∞`-grensebetingelser; ladningsbevaring ved brå endring

**7. Magnetostatikk:**
- Ampère `∮B·dl = µ₀I_inn`, `B = µ₀I/2πr` (rett leder); solenoide `B = µNI/l`
- Biot–Savart `dB = (µ₀/4π)I dl × R̂/R²`; strømsløyfe på aksen
  `B_z = µ₀Ia²/2(a²+z²)^{3/2}`; superposisjon av linjer

**8. Magnetiske materialer:**
- `B = µ₀(H + M)`, `J_b,s = M × n̂`, `J_b = ∇×M`; B-linjer lukkede, `∮H·dl = 0`
  uten frie strømmer; **aldri µ for permanentmagnet**

**9. Induksjon og induktans:**
- `Φ = ∫B·dS`, `emf = −dΦ/dt`, Lenz; `emf = BLv`; `L = NΦ/I`, `L₁₂ = Φ₂/I₁ = L₂₁`;
  dipol `m = IS`, `B_dipol = (µ₀/4π)(3r̂(r̂·m) − m)/r³`; `W = ½LI²`

**10. Numerisk Python (aktiv ferdighet, ikke på arket):**
- Coulomb-/Biot–Savart-sum i for-løkke; `scipy.constants`; funksjonsdesign;
  `np.linalg.norm`, `np.cross`, `np.meshgrid`; `plt.quiver`/`streamplot`/`plot`;
  sammenlikning mot analytisk grense; Laplace-iterasjon på gitter

### Skal IKKE bygges tungt på (til tross for emnebeskrivelsen)
- **EM-bølger og Poyntings vektor:** marginalt — dekk kompakt.
- **Full Maxwell-dynamikk / retarderte potensialer:** mest navngiving og
  integral↔differensial-overgang.
- **AC-kretser med kompleks impedans:** tungt i 2009–2014, nå nesten borte —
  beredskapsnivå.
- **Ladd partikkel i felt (syklotron, massespektrometer):** utgått etter ~2012.
- **Relativitet:** ikke testet.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer settet hvert eneste år)

1. **Elektrostatikk-kjernen:** E-felt fra punktladninger og kontinuerlige
   fordelinger med korrekt R-vektor, komponentvis superposisjon og
   symmetrinulling. ~90 %, alltid oppgave 1.
2. **Gauss' lov med full symmetridrill:** kule/sylinder/plan, alle områder, både
   E og D. Symmetriargumentet er selvstendig poenggivende. ~90 %.
3. **Elektrisk potensial:** skalar superposisjon, felt→potensial via linjeintegral
   med eksplisitt nullpunkt, kvalitativ argumentasjon. ~90 %.
4. **Transient krets:** KVL nevnt ved navn → førsteordens diff.likning → RC/RL-
   løsning, med `t=0⁺`/`t=∞`-grenser og ladnings-/strømbevaring. ~88 %.
5. **Magnetfelt fra strøm:** Ampère (symmetriargument, alle områder) og
   Biot–Savart (R-vektor, kryssprodukt, buelengde, superposisjon). ~82 %.
6. **Numerisk Python:** Coulomb-/Biot–Savart-superposisjon i for-løkke, funksjons-
   design, sammenlikning mot analytisk grense og asymptote, plott med enheter.
   100 % fra 2018 — dette er den viktigste ferdigheten som skiller FYS1120 fra et
   klassisk EM-pensum.

### Nivå 2 — må kunne (dukker opp i de fleste sett, avgjør B mot C)

7. **Kondensator/kapasitans** med ladningsfordeling i ledere og kapasitanseffekt-
   kommentar.
8. **Induksjon:** Faraday, Lenz-retning, `Φ` med varierende B over flaten,
   motional emf og kraftlikevekt.
9. **Selv- og gjensidig induktans:** `L = NΦ/I`, `L₁₂ = L₂₁`-symmetri, N-faktor,
   strøm skal kansellere.
10. **Strøm/resistans (Ohm)** med riktig areal og retning, radielle geometrier.
11. **Dielektrika:** D-felt, D/E-kontinuitet over grenseflate, polarisasjon og
    bundet ladning.

### Nivå 3 — bør kjenne til (lavfrekvent / utgående, men mulige komebacks)

12. **Magnetiske materialer / B vs. H:** identifikasjon av feltbilder,
    grensebetingelser, permanentmagnet-fella.
13. **Magnetisk dipol:** `m = IS`, dipolfelt, kobling til gjensidig induktans.
14. **Maxwell kvalitativt:** navngi lov, vis integral↔differensial via
    divergensteoremet/Stokes.
15. **Energi i felt:** `½LI²`, `½CV²`, energitetthet — mest eldre sett.
16. **AC-kretser / kompleks impedans** og **ladd partikkel i felt** — utgående,
    dekkes kompakt som beredskap.
17. **EM-bølger / Poynting** — kompakt dekning.

### Prognose for neste eksamen

4 timers skriftlig slutteksamen med formelark, Rottman og Angell/Øgrim & Lian,
delt i en **flervalgsdel (~1/3)** og en **langsvarsdel (~2/3)**, pluss
midtsemestereksamen (ren MCQ, 25 %) som dekker første halvdel (elektrostatikk →
kretser). Langsvarsdelen har nesten sikkert **fem oppgaver etter mønsteret**
(1) ladninger/Coulomb, (2) Gauss/kondensator/dielektrikum, (3) transient RC/RL-
krets, (4) magnetfelt (Ampère/Biot–Savart) med gjensidig induktans, (5) **numerisk
Python** (Coulomb-/Biot–Savart-superposisjon sammenliknet med analytisk grense).
Hver deloppgave 0–5 poeng, alle likt tellende, følgefeil ikke straffet. 25–40 %
av deloppgavene krever forklaring/begrunnelse. En lærebok bør derfor organiseres
rundt nivå 1-temaene med full metodedrill (lovnavn + symmetriargument + R-vektor
+ vektor/skalar-disiplin i hver eneste utledning), gi nivå 2 solide
standardoppskrifter, dekke nivå 3 kompakt — og **bygge numerisk Python-ferdighet
som et fullverdig kapittelspor**, ikke som en fotnote.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/FYS1120/`
(`eksamen/` for oppgavesett, `losningsforslag/` for fasiter og
sensorveiledninger; filnavnmønster `exam-fys1120-<år>-<fin|mid|kont|langsvar|
jupyter|flervalg>[-sol|-grading].pdf`).

**Lest grundig (oppgave + løsningsforslag + poengmatrise der den finnes):**
- Slutteksamener/kont/langsvar 2016, 2017, 2018 (fin+kont), 2019 (fin+kont),
  2020, 2021 (fin+kont), 2022 (flervalg+langsvar), 2023 (langsvar+jupyter),
  2024 (langsvar+jupyter), 2025 (fin)
- Sensorveiledninger med poenggiving: 2016-fin, 2017-fin, 2018-fin, 2019-fin,
  2021-fin, 2023-langsvar, 2024-langsvar, 2024-jupyter, 2025-fin (alle
  `-grading`/`-sol-grading`)
- Midtveiseksamener 2022, 2024, 2025

**Løsningsforslag lest + oppgavesett tettlest for temaregistrering:**
- Slutteksamener 2009, 2010, 2011, 2012, 2013, 2014, 2015 (7 sett)
- Midtveiseksamener 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside for FYS1120
(scratchpad: `fagbeskrivelse-fys1120.md`), inkl. destillert metodegjennomgang av
sensorveiledningene.

**Merknader om kildene:**
- Arkivet er tilnærmet komplett parvis (hver eksamen har fasit), og har i tillegg
  egne `-grading`-filer med eksplisitt poengmatrise for de fleste år 2016–2025 —
  disse er den mest verdifulle kilden til sensorlogikken og er lest ordrett.
- 2020 og 2021 var **hjemmeeksamener** (pandemi) med alle hjelpemidler og tungt
  numerisk innhold; retteregler og faglig kjerne var likevel som normalt.
- Temafrekvensene for 2009–2015 bygger på tettlesing av oppgavesettene med
  løsningene som fasit og kan avvike med ±1 sett per celle; 2016–2025 er basert
  på fullstendig gjennomlesing.
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og
  sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen
  oppgavetekster, fasiter eller veiledningsformuleringer er gjengitt ordrett.
  Formlene er standard fysikknotasjon og ikke opphavsrettslig beskyttet tekst.
