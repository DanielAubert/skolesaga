# Bokskjelett: TMA4265 Stokastisk modellering — eksamensrettet lærebok (NTNU)

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil. Unntak: øvingseksamen-/prøve-/modellbesvarelseskapitler følger sin
> egen arketype (komplett sett først, løsninger i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (~41 filer / ~24 eksamenssett 2010–2025 fra TMA4265-arkivet,
> med typesatte løsningsforslag/sensorveiledning for 2016, 2021, 2022, 2023 lest
> grundig). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.

---

## 0. Emnehistorikk og statusverifisering

**Status per 11. juli 2026 (verifisert mot NTNUs emneside `ntnu.no/studier/emner/TMA4265`):**
**TMA4265 «Stokastisk modellering» er AKTIVT** — undervises høst 2026, 7,5
studiepoeng, undervisnings- og eksamensspråk engelsk, vurderingsform **skriftlig
skoleeksamen**. Ingen omtale av nedlegging, utfasing eller etterfølgeremne.
Studiepoengreduksjonstabellen kobler kun mot de gamle kodene **SIF5072** og
**ST2101** (faglig identiske forgjengere), ikke mot noe nyere emne — så det
finnes ingen etterfølger-usikkerhet. Boka bygges derfor mot **TMA4265 som
aktivt emne**, og kalibreringen bygger på 2010–2025-arkivet. Kurs-id: `tma4265`.

**Arbeidsdeling mot TMA4245 Statistikk (grunnkurset):** Grunnleggende
sannsynlighetsteori — fordelingslære, forventning/varians, betinget
sannsynlighet, transformasjoner, sentralgrenseteoremet — **forutsettes kjent fra
TMA4245 og dekkes DER, ikke her.** TMA4265 er kurset i stokastiske *prosesser*:
tidsutvikling av tilfeldige systemer. Boka skal ikke duplisere grunnkursets
fordelingslære (kryssbok-lenker til tma4245-boka der forkunnskapen trengs), men
bruke plassen på prosessapparatet: Markov-kjeder, Poisson-prosesser,
fødsels-/dødsprosesser, køteori og gaussiske prosesser/Brownsk bevegelse.
**Renewal-teori og martingaler forekommer ikke i noe eksamenssett** (bekreftet
ved søk) og bygges IKKE — i motsetning til det generiske «stokastisk
modellering»-pensumet. Forgreiningsprosesser forekommer sparsomt (2013) og får
kun en kort «bør kjenne til»-behandling.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4265` |
| Tittel | **TMA4265 Stokastisk modellering — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4265 Stokastisk modellering». |
| Arketype | Regnefag (kvantitativt emne med fast, mønster-drevet oppgavetradisjon) |
| Antall kapitler | **32** (Del 0: 1 eksamenskart · temadeler 1–8: 27, hvorav 5 drill · eksamenstrening Del 9: 4) |
| Estimert totaltid | **~2 555 min ≈ 43 timer** (per kapittel under) |
| Quiz totalt | **576** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** TMA4265-eksamen er bemerkelsesverdig stabil: 4 timer,
hjelpemiddelkode C (formelsamling + kalkulator + ett gult A5-ark), og **10
likevektede deloppgaver** («all ten subproblems are equally weighted»). **Fem
søyler bærer hele emnet, og alle fem er praktisk talt obligatoriske hvert år:**
diskret-tids Markov-kjeder (DTMC ≈100 %), kontinuerlig-tids Markov-kjeder /
fødsels-dødsprosesser (CTMC/BD ≈94 %), Poisson-prosessen (≈88 %), køteori
(M/M/·, Little ≈71 %) og gaussiske prosesser / Brownsk bevegelse (≈71 %). Boka
bygges som fem kraftige moduler — ikke en lang teknikkliste. **First-step-analyse
(førstesteg-analyse) er emnets viktigste enkeltteknikk** (≈88 %, den hyppigste
snublesteinen) og går som rød tråd i både diskret og kontinuerlig tid. Det faste
formelarket inneholder alle de tunge formlene (Chapman–Kolmogorov, Kolmogorovs
ligninger, BD-stasjonærformelen $\theta_k$, M/M/1- og M/M/∞-fordelingene, Little,
betinget-gaussisk-formelen), så eksamen tester **oppsett, modellvalg og
tolkning** — ikke formelpugg. To voksende trekk får egne spor: **simulering /
pseudokode** (~80 % av settene siden 2020, i **R**-idiom `rnorm`/`chol`/`outer` —
ikke Python) og **modellrefleksjon** («er dette en Markov-kjede / BD-prosess /
Brownsk bevegelse?»). Boka er bygd baklengs fra det sensor premierer: definert
modell og notasjon FØR regning, riktig apparat til riktig situasjon, og
eksistens-/entydighetsargumenter ført (ikke antatt).

**Kritisk notasjonsregel (gjelder HELE boka)** — settenes egen notasjon følges
slavisk:

- Diskret tid: $\{X_n : n = 0, 1, \dots\}$. Kontinuerlig tid: $\{X(t) : t \ge 0\}$.
- **DTMC:** overgangsmatrise $P$ med $P_{ij} = P(X_{n+1} = j \mid X_n = i)$;
  $n$-stegs $P^{(n)}$; stasjonær/grensefordeling $\pi = (\pi_0, \pi_1, \dots)$,
  radvektor, med $\pi = \pi P$ og $\sum_i \pi_i = 1$ (**venstre** egenvektor —
  aldri $P\pi = \pi$).
- **CTMC/BD:** fødselsrater $\lambda_i$, dødsrater $\mu_i$, total utgangsrate
  $v_i$, hoppintensiteter $q_{ij}$, generatormatrise $A$. BD-produktet
  $\theta_k = \dfrac{\lambda_0 \lambda_1 \cdots \lambda_{k-1}}{\mu_1 \mu_2 \cdots \mu_k}$,
  $\theta_0 = 1$, stasjonærfordeling $\pi_0 = 1/\sum_k \theta_k$, $\pi_k = \theta_k \pi_0$.
- **Poisson:** rate $\lambda$; $N(t)$ antall hendelser i $(0, t]$; ventetid til
  $n$-te hendelse $W_n \sim \text{gamma}(n, \lambda)$.
- **Kø:** $L$, $L_Q$ (antall i system / i kø), $W$, $W_Q$ (oppholdstid),
  **effektiv** ankomstrate $\lambda_a$ (korrigert for tap), servicerate $\mu$.
  Little: $L = \lambda_a W$.
- **Gaussisk:** $X \sim N(\mu, \Sigma)$ med **kovarians** (ikke SD) som annet
  argument; Cholesky-faktor $L$ (nedre trekantet, $\Sigma = LL^\top$); Brownsk
  bevegelse $B(t)$ med variansparameter $\sigma^2$, $\text{Cov}(B(s), B(t)) = \sigma^2\min(s, t)$;
  Brownsk bro $B^0(t)$.
- **NB — R, ikke Python:** simuleringsspråket i TMA4265-tradisjonen er
  R/pseudokode (`rnorm`, `chol`, `outer`), til forskjell fra TMA4245 (numpy).
  Boka følger R-idiomet konsekvent i simuleringssporet.

**Formelark-prinsippet (gjelder HELE boka):** hjelpemiddelkode C betyr at det
faste formelarket (samme kjerneark hvert år) ligger på pulten: Chapman–Kolmogorov
(diskret og kontinuerlig), stasjonærligningene, mean passage time-relasjonen,
Poisson-definisjonen + gamma-ventetiden + betinget-uniforme ankomsttider,
Kolmogorovs forover-/bakoverligninger, **BD-stasjonærformelen** $\theta_k$,
M/M/1- og M/M/∞-fordelingene, Little, **betinget-gaussisk-formelen**,
BM-egenskapene og geometriske rekker. Hvert kapittel skal derfor eksplisitt
merke innholdet: **«står på formelarket — tren oppslaget og modellvalget»** vs.
**«må utledes/settes opp aktivt»** (first-step-systemene, klassifisering,
eksistensargumenter, simuleringskode, «er dette en …?»-begrunnelser). Selve
formlene skal IKKE pugges; det som trenes er å *velge* riktig apparat og *sette
opp* modellen korrekt.

**Matematisk sannhetskontroll (DNA-regnefag, ufravikelig):** eksistens-/
entydighets-, «grensefordeling = stasjonær hviss …»- og stabilitetspåstander
($\lambda < \mu$ for M/M/1) parametersjekkes i modellens fulle parameterrom FØR
de skrives ubetinget; betingelser skrives eksplisitt. Usikre påstander merkes
`(verifiser)`. All matematikk i LaTeX (`$...$`).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): byggeklossene
(eksponensialfordeling, betinget forventning) før prosessene; DTMC før CTMC
(2020-essayoppgaven ba eksplisitt om diskret↔kontinuerlig-parallellen); Poisson
og eksponensial før fødsels-dødsprosessene som hviler på dem; køteori etter BD
(kø = BD-spesialtilfelle); gaussiske prosesser/BM som egen søyle; simulering
etter at alt apparatet finnes; modellrefleksjon/grunnlagsteori til slutt. **Alle
fem søyler testes praktisk talt hvert år** — frekvensen styrer *omfanget* (antall
kapitler + drillkapittel + kvote), ikke *om* et tema er med.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | perfekt (meta) | Formen (4 t, kode C, 10 likevektede deloppgaver, formelark), de fem søylene, first-step som rød tråd, R-simuleringssporet, sensorkravene, kildeforbeholdet. Prioriteringsverktøyet + studieguidekjernen. |
| 1 | Byggeklossene: eksponensial og betinget forventning | 2 | kunne (82 %) | Eksponensialfordelingen (minneløshet, konkurrerende min, sum→gamma) er «limet» i hele CTMC/Poisson/kø-maskineriet (≈82 %); betinget/dobbel forventning er regneverktøyet gjennom hele emnet (≈82 %). Faglig fundament → først. |
| 2 | Diskret-tids Markov-kjeder (DTMC) | 5 | perfekt (≈100 %) | Ryggraden — åpner nesten hvert sett. Matrise + Chapman–Kolmogorov, klassifisering, stasjonær/grense (m/regularitet), **first-step-analyse**, + drillkapittel. First-step veltet flest kandidater i 2021. |
| 3 | Poisson-prosessen | 3 | perfekt (≈88 %) | Poissons tre triks (gamma-ventetid, betinget-uniforme ankomster, sammensetting/tynning) + sammensatt sum, + drillkapittel. Den tredje bæresøylen. |
| 4 | CTMC og fødsels-dødsprosesser | 4 | perfekt (≈94 %) | Den andre bæresøylen. Rater/ratediagram/balanse, $\theta_k$-stasjonærfordeling, M/M/1↔M/M/∞-gjenkjenning, kontinuerlig first-step + generatormatrise/$\exp(tA)$, + drillkapittel. |
| 5 | Køteori (M/M/·, Little) | 2 | kunne (≈71 %) | M/M/1, M/M/∞, M/M/c/tap, effektiv rate $\lambda_a$, Little, tapt/tom-andel, + drillkapittel. Kø = BD-spesialtilfelle → bygger på Del 4. |
| 6 | Gaussiske prosesser og Brownsk bevegelse | 3 | kunne (≈71 %) | Betinget normal (MVN + betinget-gaussisk-formel), kovariansfunksjon-modellering; BM-egenskaper/standardisering, betinget BM/Brownsk bro, «er dette BM?». Avgjør C mot B/A. |
| 7 | Simulering og pseudokode (R) | 2 | kunne (~80 % 2020–25) | **Eget spor — ufravikelig.** Cholesky-MVN + betinget simulering + Brownsk bro; simulering av Markov-prosess fra $A$ + Monte Carlo-anslag. R-idiom. |
| 8 | Modellrefleksjon og grunnlagsteori | 2 | kunne/kjenne | «Er dette en Markov-kjede / BD-prosess / BM?» (≈53 %, skiller sterke kandidater) + eksistens-/entydighet; presise definisjoner, aksiomatisk stokastisk variabel (2024), fagessay (2020), forgreiningsprosess (kort, «bør kjenne til»). |
| 9 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–L) + **3 komplette øvingseksamener** (10 likevektede deloppgaver, kode C, formelark). |

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Byggeklossene: eksponensial og betinget forventning |
| 2 | Diskret-tids Markov-kjeder |
| 3 | Poisson-prosessen |
| 4 | CTMC og fødsels-dødsprosesser |
| 5 | Køteori |
| 6 | Gaussiske prosesser og Brownsk bevegelse |
| 7 | Simulering og pseudokode |
| 8 | Modellrefleksjon og grunnlagsteori |
| 9 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** DTMC-grunnoppgaven (fyll inn matrise, Chapman–Kolmogorov, betingede
sannsynligheter «bakover») · **B** Klassifisering (diagram, irredusibel/klasser,
transient/rekurrent, periode, absorbering, parametrisk) · **C** Stasjonær-/
grensefordeling ($\pi = \pi P$ + tolkning + regularitet) · **D**
First-step-analyse (treffetid/absorpsjon/returtid/treffsannsynlighet, diskret +
kontinuerlig) · **E** Poisson-prosess (rate·t, gamma-ventetid, betinget-uniforme
ankomster, sammensetting/tynning) · **F** Fødsels-dødsprosess (rater, diagram,
balanse, $\theta_k$-stasjonærfordeling) · **G** Køteori (M/M/·, effektiv rate,
Little, tapt/tom-andel) · **H** Gaussisk prosess / betinget normal (MVN,
betinget-gaussisk-formel, kovariansfunksjon) · **I** Brownsk bevegelse
(standardisering, betinget BM/bro, «er dette BM?») · **J** Simulering/pseudokode
(Cholesky-MVN, Brownsk bro, prosess fra $A$, Monte Carlo) · **K**
Modellrefleksjon («er dette en …?») · **L** Konsept/teori (presis definisjon,
essay, aksiomatisk stokastisk variabel).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Definer modellen og notasjonen eksplisitt før du regner.** Fasitene
   begynner med «La $X(t) = $ antall …, en fødsels-dødsprosess med $\lambda_i = \dots$,
   $\mu_i = \dots$». First-step-analyse innledes alltid med «La $v_i = E[\dots \mid X_0 = i]$».
   Svar uten definert modell/notasjon regnes som ufullstendige.
2. **Alle svar begrunnes; alle nødvendige utledninger og mellomregninger skal
   med** («All answers must be justified …»).
3. **Feil som skyldes en tidligere feil straffes ikke på nytt** (sensorveiledning
   2021) — med mindre den forenkler oppgaven urimelig. Premierer å vise metode.
4. **Riktig apparat til riktig situasjon:** $\theta_k$ (kontinuerlig) vs.
   $\pi = \pi P$ (diskret); **effektiv** rate $\lambda_a$ (ikke rå $\lambda$) i
   Little ved tap; sojourntid $1/v_i$ i kontinuerlig first-step;
   betinget-normal-formelen (ikke ad hoc) for gaussiske prosesser.
5. **Eksistens- og entydighetsargumenter FØRES, ikke antas.** For grensefordeling:
   sjekk irredusibel + aperiodisk + positivt rekurrent (regularitet).
   Stasjonærfordeling er IKKE grensefordeling hvis kjeden kan være periodisk.
6. **Konklusjoner i ord og i kontekst** — et tall uten tolkning gir ikke full
   uttelling.
7. **Pseudokode skal være korrekt OG forklart** (linje-for-linje-begrunnelse for
   hvorfor utdataet har riktig fordeling — Cholesky-argument, bilineær kovarians).
8. **Numerisk bevissthet premieres på toppnivå** (skriv $\theta_i$ på en form som
   ikke flyter over — unngå $k!$; A-differensierende, 2023).
9. **Modellrefleksjon begrunnes mot definisjonen** («ikke Markov fordi …», «ikke
   BD fordi dødsraten ikke er minneløs»).

**Karakterskiller (grading 2021):** E = standard-regneoppgavene (fyll matrise,
regn $\pi$, sett opp BD-balanse, standardiser BM). C–B = korrekt first-step,
riktig kø-/BD-stasjonærfordeling med riktig effektiv rate, betinget-normal.
A = eksistens-/entydighet, «er dette en …?» med presis begrunnelse, korrekt og
forklart simuleringskode, numerisk stabilitet, tyngste transformasjons-/
bro-utledninger.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**#1** First-step feil oppsatt (glemt «+1», feil grensebetingelse $v(\text{mål})=0$,
returtid-finessen $n \ge 1$) — den enkeltfeilen som veltet flest i 2021 · **#2**
Forveksle stasjonær- og grensefordeling (anta $\pi$ = grense uten aperiodisitet)
· **#3** Feil radretning ($P\pi = \pi$ i stedet for $\pi P = \pi$) · **#4** Little
med rå $\lambda$ i stedet for effektiv $\lambda_a = \lambda(1 - P_\text{blokkert})$
· **#5** Feil $\theta_k$ (bytte $\lambda$/$\mu$, feil startindeks $\theta_0 = 1$) ·
**#6** Poisson: bruke rate der man skal bruke rate·$t$, eller glemme
betinget-uniforme ankomster · **#7** Behandle en ikke-Markov-prosess som Markov ·
**#8** Eksponensial-minneløshet misbrukt/glemt · **#9** BM: glemme
varians-skalering $\text{Var}(B(t)-B(s)) = \sigma^2(t-s)$, feil
$\text{Cov} = \min(s,t)$ · **#10** Cholesky: bruke $\Sigma$ i stedet for $L$ i
$x = \mu + Lz$; glemme å fjerne endepunktene (singulær $\Sigma$) i Brownsk
bro-simulering · **#11** Konkurrerende eksponensialer: feil rate for «tid til
første» (skal være $\sum \lambda_i$), feil «hvilken først» ($\lambda_i/\sum\lambda$)
· **#12** Sammensatt sum: glemme variansleddet fra tilfeldig antall
($\text{Var}(\sum C_i) = E[N]\text{Var}(C) + \text{Var}(N)E[C]^2$) · **#13**
Regning uten modellbegrunnelse/tolkning.

### Kildeforbehold (fra analysen §8 — settes i Del 0, gjentas i øvingseksamenene)

Analysen bygger på ~24 sett 2010–2025; **typesatte løsningsforslag/
sensorveiledning finnes for 2016, 2021, 2022, 2023** (2021 med formelt
grading-dokument), mens flere eldre fasiter er håndskrevne/OCR-uleselige og tre
sett er rene skann. Frekvensene («≈17/17») er telte belegg per analysens §2 med
nedre anslag for 2010–2015. Sensorlogikk sluttet indirekte er merket der den er
usikker. Nye sett kan endre bildet.

### Kapittel-DNA

Teori-, drill- og øvingseksamenskapitlene følger de tre kapittel-DNA-ene i
`DNA-regnefag.md` (blokk-rekkefølge, læringsløkke per metode, full oppgavedekning,
figurkrav, symbol-/formelliste per delkapittel) — gjentas ikke her. Denne bokas
figurbehov er lett: **ratediagram** (BD/CTMC), **tilstandsdiagram** (DTMC-
klassifisering) og evt. **kovariansfunksjon-plott** (gaussisk) bør ha statiske
SVG-figurer der de drilles (jf. DNA-regnefag «Figurkrav»); mekanikken (piler
mellom tilstander, rater på kantene) beskrives også i ord.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–L) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2010–2025-
> arkivet». **Innholdskontrakt** = definisjoner/relasjoner som SKAL med (med
> notasjon), + hva som «står på formelarket» vs. «utledes/settes opp aktivt».
> **Kvote** = quiz/flashcards. Kryssbok-lenker peker på eksisterende
> tma4245-kapitler `(verifiser lenke)` der forkunnskapen ligger der.

### Del 0 — Eksamenskart *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4265

- **id:** `tma4265-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (4 t, kode C med formelark + kalkulator + gult A5-ark, **10 likevektede deloppgaver**), de fem søylene, first-step som rød tråd, R-simuleringssporet, sensorkravene og kildeforbeholdet — prioriteringsverktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2010–2025). Skal formidle: (a) **formen** — 4 t skriftlig skoleeksamen, kode C (formelsamling «Tabeller og formler i statistikk» + Rottmann + kalkulator + ett gult stemplet A5-ark; korona-årene 2020–21 kode A), **10 likevektede deloppgaver** gruppert i 3–6 hovedoppgaver; Inspera-cover + håndskrevne svarark fra 2022; (b) **de fem søylene** med gjenganger-score: DTMC ≈100 %, CTMC/BD ≈94 %, Poisson ≈88 %, køteori ≈71 %, gaussisk/BM ≈71 %; first-step-analyse ≈88 % som gjennomgående teknikk; (c) **temafrekvenstabellen** (analysen §2); (d) **hva som ligger på formelarket** (så det IKKE pugges) vs. hva som utledes; (e) **sensorkravene** (§ sensorkrav); (f) **R-simuleringssporet** (~80 % siden 2020, R ikke Python); (g) **kildeforbeholdet**. Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–L som studentens sjekkliste med frekvens per sjanger. **Del 0-pakken (DNA-regnefag):** «Slik leser du denne boka»-boks (type `text`/`tip`) som forklarer karakterskalaen (A–F; C er en god og vanlig karakter), sjangerkodene A–L, at typiske feil har et samlet register (#1–#13), og rammer inn tunge symboler leseren møter senere ($\theta_k$, $\Sigma = LL^\top$, $\exp(tA)$ — «du trenger ikke forstå disse ennå»); **formel-minimum-side** (collapsible «Det du må kunne SETTE OPP — resten står på arket»: $\pi = \pi P$-oppsettet, first-step-malen $v_i = 1 + \sum_j P_{ij} v_j$, BD-balansen rate inn = rate ut, konkurrerende-eksponensial-regelen, BM-standardisering — hver med én ordlinje); denne siden er også bokas samlede oppslagskort; **«Lite tid?»-boks** (3–5-dagers hurtigrute + lese-vs-gjøre-tid ×1,5); **kildenote** (2010–2025, typesatt fasit 2016/2021/2022/2023, forbehold); **prosedyre-/sjangerkort på én side** (sjanger → én linjes oppskrift → tidsbudsjett → vanligste feil); **deltidsrute** (10–12 uker); **«lese mye, skrive lite»-boks**. Prognosen for neste sett: én stor DTMC-oppgave (matrise + klassifisering + $\pi$/grense + first-step), én CTMC/BD (rater + diagram + stasjonær, ofte M/M/· med Little), én Poisson (ventetid/betinging/tynning), én gaussisk/BM, minst én pseudokode-/simuleringsdel og minst én modellrefleksjons-/konseptdel.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 4-timers mal med 10 likevektede deloppgaver — sett opp tidsbudsjett og rekkefølge» og «avgjør av en oppgavetekst hvilken søyle/sjanger den tilhører og om den krever mekanisme (full utledning) eller bare et tall».
- **Typiske feil:** Metafeilene: regne uten å definere modell/notasjon (sensorkrav 1); droppe begrunnelsen (sensorkrav 2); tro at alt må pugges (det tunge ligger på formelarket — tren modellvalget); forveksle R- og Python-idiom i simulering.
- **Quiz: 14 · Flashcards: 12**

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 9).

### Del 1 — Byggeklossene: eksponensial og betinget forventning *(prioritet: KUNNE — 82 %, limet i hele emnet)*

#### Kapittel 1.1: Eksponensialfordelingen som byggekloss

- **id:** `tma4265-1-1` · **number:** 1.1 · **estimatedMinutes:** 70 · **prerequisites:** ingen (bygger på tma4245-fordelingslære, kryssbok-lenke)
- **kapitteltype:** teori
- **description:** Minneløshet, sojourntider, konkurrerende eksponensialer (min av flere) og sum→gamma — de fire byggeklossene som hele CTMC-, Poisson- og kø-maskineriet hviler på.
- **Eksamensbelegg:** Eksponensial-byggeklossene inngår i ≈14/17 sett (**≈82 %**), sjelden som egen oppgave men som fast delferdighet i F, G, E. Minneløshet og «tid til første av flere hendelser» går igjen. Prioritet: kunne (grunnlag for topptemaene, nivå 2 punkt 9).
- **Forkunnskaper/kryssbok:** [Kontinuerlige fordelinger: eksponensial, gamma](/bok/tma4245/tma4245-2-3) `(verifiser lenke)`. `collapsible` **Symbol- og formelliste** (eksponensialtetthet, rate vs. forventning, min-regel).
- **Innholdskontrakt:** Eksponensialfordelingen $X \sim \text{exp}(\lambda)$ (rate $\lambda$; boka bruker rate-form for prosesser, i motsetning til tma4245s $\beta$ — **flagg dette skiftet eksplisitt**, DNA-konvensjonsvarsel); **minneløsheten** $P(X > s + t \mid X > s) = P(X > t)$ (aktivt — utled fra hale-funksjonen, og bruk til å begrunne Markov-egenskapen for CTMC); **konkurrerende eksponensialer**: for uavhengige $X_i \sim \text{exp}(\lambda_i)$ er $\min_i X_i \sim \text{exp}(\sum_i \lambda_i)$ og $P(X_i \text{ minst}) = \lambda_i/\sum_j \lambda_j$ (utled begge, aktivt — dette er kjernen i CTMC-hopp); **sum av $n$ uavhengige exp($\lambda$)** $\sim \text{gamma}(n, \lambda)$ (bru til Poisson-ventetid; «står på formelarket»). Forventet sojourntid $1/\lambda$.
- **Oppgavesjangre:** delferdighet i E/F/G. Mønstereksempel: «To maskiner svikter uavhengig med rater $\lambda_1 = 0{,}2$ og $\lambda_2 = 0{,}3$ per time. Finn fordelingen til tiden til første svikt, og sannsynligheten for at maskin 1 svikter først.»
- **Typiske feil:** #8 (minneløshet misbrukt — påberopt for ikke-minneløse ventetider som tid til $n$-te hendelse); #11 (feil rate for min, eller feil «hvilken først»); blande rate- og forventningsparametrisering.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 1.2: Betinget og dobbel forventning

- **id:** `tma4265-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4265-1-1`
- **kapitteltype:** teori
- **description:** Lov om total sannsynlighet/forventning, dobbel forventning $E[E[Y\mid X]]$ og dobbel varians — regneverktøyet som brukes gjennom hele emnet (first-step, sammensatt sum, betinging på antall).
- **Eksamensbelegg:** Betinget/dobbel forventning inngår i ≈14/17 sett (**≈82 %**) som verktøy — bærende i first-step-analyse (Del 2), sammensatt Poisson (Del 3) og betinging på $N(t)$. «Står på formelarket» (total forventning), men *bruken* trenes aktivt. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Betinget sannsynlighet, total sannsynlighet og Bayes](/bok/tma4245/tma4245-1-3) `(verifiser lenke)`, [Simultanfordelinger, kovarians](/bok/tma4245/tma4245-2-5) `(verifiser lenke)`. `collapsible` **Symbol- og formelliste**.
- **Innholdskontrakt:** Lov om total sannsynlighet/forventning betinget på en partisjon (formelarket); **dobbel forventning** $E[Y] = E[E[Y \mid X]]$ (aktivt — dette er first-step-analysens motor: betinge på første steg); **dobbel varians** $\text{Var}(Y) = E[\text{Var}(Y\mid X)] + \text{Var}(E[Y\mid X])$; **sammensatt sum**: for $S = \sum_{i=1}^N C_i$ med $N$ uavhengig av iid $C_i$: $E[S] = E[N]E[C]$, $\text{Var}(S) = E[N]\text{Var}(C) + \text{Var}(N)E[C]^2$ (utled via dobbel forventning/varians — forbereder sammensatt Poisson).
- **Oppgavesjangre:** delferdighet gjennom hele emnet + sammensatt sum. Mønstereksempel: «Antall kunder en dag er Poisson-fordelt med forventning 20, hver legger igjen et beløp med forventning 150 og varians 400 (uavhengig). Finn forventet og varians for total omsetning.»
- **Typiske feil:** #12 (glemme variansleddet fra tilfeldig antall — forenkle $\text{Var}(S)$ feil); betinge på feil variabel; blande $E[\text{Var}]$ og $\text{Var}(E)$ i dobbel varians.
- **Quiz: 22 · Flashcards: 20**

**Prøve-kvote Del 1:** 4 prøver (1.A minneløshet + sojourntid · 1.B konkurrerende eksponensialer + sum→gamma · 1.C betinget/dobbel forventning · 1.D sammensatt sum på eksamensnivå).

### Del 2 — Diskret-tids Markov-kjeder (DTMC) *(prioritet: PERFEKT — ≈100 %, ryggraden)*

#### Kapittel 2.1: Overgangsmatriser og Chapman–Kolmogorov

- **id:** `tma4265-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4265-1-2`
- **kapitteltype:** teori
- **description:** Markov-egenskapen, overgangsmatrisen $P$, flerstegssannsynligheter via Chapman–Kolmogorov, og betingede sannsynligheter «bakover» via Bayes — de billige poengene som åpner nesten hvert sett.
- **Eksamensbelegg:** DTMC-grunnoppgaven i nesten hvert sett (**≈100 %**), ofte som deloppgave 1a (sjanger A). Fyll inn manglende matriseelementer (rader summerer til 1), $n$-stegs sannsynligheter, betinget «bakover» $P(X_2 = 0 \mid X_3 = 0, X_1 = 1)$. Prioritet: perfekt (nivå 1 punkt 1).
- **Forkunnskaper/kryssbok:** kap. 1.2; [Betinget sannsynlighet og Bayes](/bok/tma4245/tma4245-1-3) `(verifiser lenke)`. `collapsible` **Symbol- og formelliste** ($P_{ij}$, $P^{(n)}$, Chapman–Kolmogorov).
- **Innholdskontrakt:** **Markov-egenskapen** $P(X_{n+1} = j \mid X_n = i, X_{n-1}, \dots) = P(X_{n+1} = j \mid X_n = i)$ (definisjon i ord først); overgangsmatrise $P$, radsum = 1, initialfordeling; **Chapman–Kolmogorov** $P^{(m+n)}_{ij} = \sum_k P^{(m)}_{ik} P^{(n)}_{kj}$ (formelarket; bruk = matriseprodukt $P^{(n)} = P^n$); fordelingen etter $n$ steg $\pi^{(n)} = \pi^{(0)} P^n$; betingede sannsynligheter «bakover» via Bayes + Markov. Skille $P_{ij}$ (ett steg) fra $P^{(n)}_{ij}$.
- **Oppgavesjangre:** A. Mønstereksempel: «Overgangsmatrisen for en 3-tilstands værmodell mangler tre elementer. Bestem dem, finn $P(X_5 = 0 \mid X_3 = 1)$ og den betingede $P(X_4 = 0 \mid X_5 = 0, X_3 = 1)$.»
- **Typiske feil:** rad vs. kolonne i matriseproduktet; regne $P^{(n)}_{ij}$ som $(P_{ij})^n$; glemme initialfordeling ved ubetinget sannsynlighet; #3-kimen (blande venstre/høyre).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.2: Klassifisering av tilstander

- **id:** `tma4265-2-2` · **number:** 2.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-2-1`
- **kapitteltype:** teori
- **description:** Tilstandsdiagram, kommuniserende klasser, transient vs. rekurrent, periode, absorbering og irredusibilitet — og hvordan klassifiseringen kan avhenge av parametere.
- **Eksamensbelegg:** Klassifisering svært hyppig (del av ≈100 %-DTMC-oppgaven, sjanger B), ofte parametrisk ($\alpha, \beta, \varphi \in [0,1]$) der klassifiseringen avhenger av parameterverdiene (2023). Etterfulgt av «eksisterer grensefordelingen?». Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste** (kommuniserende, periode, transient/rekurrent). SVG-ratediagram/tilstandsdiagram (jf. figurkrav).
- **Innholdskontrakt:** tilstandsdiagram; **kommuniserer** ($i \leftrightarrow j$), ekvivalensklasser; **irredusibel** (én klasse); **transient vs. rekurrent** (retursannsynlighet $f_i = 1$?), positivt vs. nullrekurrent; **periode** $d(i) = \gcd\{n : P^{(n)}_{ii} > 0\}$, aperiodisk = periode 1; **absorberende** tilstand ($P_{ii} = 1$) og absorberende mengder; klasseegenskaper (rekurrens/periode er klasseegenskaper). **Parametrisk klassifisering:** angi når hver kant finnes som funksjon av parametrene, og hvordan det endrer klassestrukturen (aktivt — 2023-mønsteret).
- **Oppgavesjangre:** B. Mønstereksempel: «For matrisen med parametere $\alpha, \beta, \varphi \in [0,1]$: tegn diagrammet, angi når hver kant finnes, gi vilkårene for irredusibilitet, bestem periodene, og avgjør rekurrens.»
- **Typiske feil:** #2-kimen (blande periode/aperiodisitet med rekurrens); overse absorberende tilstand; behandle periode som tilstands- i stedet for klasseegenskap; glemme det degenererte parametertilfellet ($\alpha = \beta = \varphi = 0$).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 2.3: Stasjonær- og grensefordeling

- **id:** `tma4265-2-3` · **number:** 2.3 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-2-2`
- **kapitteltype:** teori
- **description:** Sett opp og løs $\pi = \pi P$ med normering, tolk som langsiktig andel tid, og før eksistens-/entydighetsargumentet (regularitet) for at grensen = stasjonærfordelingen.
- **Eksamensbelegg:** Stasjonær-/grensefordeling som deloppgave i ≈100 % av settene (sjanger C), nesten alltid med en tolknings-/anvendelsesdel etter (langsiktig kostnad, andel skiftende dager). Eksistens-/entydighet (regularitet) forekommer i ≈10/17 (≈59 %). Prioritet: perfekt (nivå 1 punkt 1).
- **Forkunnskaper/kryssbok:** kap. 2.2. `collapsible` **Symbol- og formelliste** ($\pi$, $\pi = \pi P$, regularitet).
- **Innholdskontrakt:** **stasjonærligningene** $\pi_j = \sum_i \pi_i P_{ij}$, dvs. $\pi = \pi P$ (venstre egenvektor!) + normering $\sum_i \pi_i = 1$ (formelarket; oppsett og løsning aktivt); **grensefordeling** $\lim_n P^{(n)}_{ij} = \pi_j$; **regularitetsteoremet** — for irredusibel, aperiodisk, positivt rekurrent kjede eksisterer en entydig stasjonærfordeling som ER grensefordelingen (før argumentet, ikke anta det, sensorkrav 5). Advarsel: for en periodisk kjede kan $\pi$ eksistere uten å være grense. Langsiktig tolkning: $\pi_i$ = andel tid i $i$; avledet størrelse (langsiktig kostnad/inntekt per dag) via $\sum_i \pi_i g(i)$. **Mean passage time** $M_{ij} = 1 + \sum_k P_{ik} M_{kj}$ (formelarket; forbinder til first-step i 2.4). **Numerisk:** løs det lineære systemet ryddig (erstatt én ligning med normeringen).
- **Oppgavesjangre:** C. Mønstereksempel: «Finn den langsiktige andelen tid i hver værtilstand, og den langsiktige andelen dager der været skifter fra dagen før.»
- **Typiske feil:** #3 (løse $P\pi = \pi$ i stedet for $\pi P = \pi$); #2 (anta $\pi$ = grense uten aperiodisitet); glemme normeringen; glemme tolkningen i ord (#13).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.4: First-step-analyse (diskret)

- **id:** `tma4265-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `tma4265-2-3`
- **kapitteltype:** teori
- **description:** Emnets viktigste enkeltteknikk: betinge på første steg for å finne forventet treffe-/absorpsjons-/returtid og treffsannsynlighet — den hyppigste snublesteinen.
- **Eksamensbelegg:** First-step-analyse i ≈15/17 sett (**≈88 %** — emnets viktigste utledningsferdighet, sjanger D); 2020 viet en hel 40 %-oppgave til å *forklare* den. Den enkeltteknikken som veltet flest kandidater i 2021. Prioritet: perfekt (nivå 1 punkt 2).
- **Forkunnskaper/kryssbok:** kap. 2.3 (mean passage time); [dobbel forventning](/bok/tma4265/tma4265-1-2). **«Sist du var her»:** vis dobbel-forventning-motoren $E[Y] = E[E[Y\mid X_1]]$ ferdig oppfrisket. `collapsible` **Symbol- og formelliste**.
- **Innholdskontrakt:** **Forventet treffe-/absorpsjonstid:** definer $v_i = E[\text{tid til mål} \mid X_0 = i]$, sett opp $v_i = 1 + \sum_j P_{ij} v_j$ med $v(\text{mål}) = 0$, løs systemet (aktivt — betinging på første steg er utledningen). **Treffsannsynlighet:** $h_i = P(\text{treffer } A \text{ før } B \mid X_0 = i)$, $h_i = \sum_j P_{ij} h_j$ med randbetingelser $h_A = 1, h_B = 0$. **Forventet returtid:** til tilstand $i$, med finessen $n \ge 1$ (start = mål teller IKKE som umiddelbart treff — betinge på første steg vekk fra $i$); sammenheng med stasjonær: $M_{ii} = 1/\pi_i$. Alltid: definer $v_i$/$h_i$ eksplisitt FØR ligningene (sensorkrav 1).
- **Oppgavesjangre:** D. Mønstereksempel: «En setning starter med et substantiv og slutter med punktum. Bruk first-step-analyse til å finne forventet antall ord i setningen.»
- **Typiske feil:** #1 (glemme «+1»; feil grensebetingelse; returtid-finessen $n \ge 1$ — behandle start = mål som umiddelbart treff); sette opp ligning for feil størrelse (tid vs. sannsynlighet); glemme å definere $v_i$/$h_i$ i ord.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 2.5: Drill: DTMC-oppgaven (sjanger A–D)

- **id:** `tma4265-2-5` · **number:** 2.5 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-2-4`
- **kapitteltype:** drill
- **description:** Den store, sammensatte DTMC-oppgaven slik den kommer på eksamen: matrise → klassifisering → stasjonær/grense → first-step, i ett løp — med varianter og en løsningsoppskrift.
- **Eksamensbelegg:** DTMC-oppgaven åpner nesten hvert sett og kombinerer A–D; drillkapittel fordi den er den mest resirkulerte og mekaniserbare oppgaven i emnet. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1–2.4. `collapsible` **Symbol- og formelliste** (samlet DTMC-apparat).
- **Innholdskontrakt (løsningsoppskrift):** (1) les/fyll overgangsmatrisen (radsum 1); (2) tegn diagram, klassifiser (irredusibel? periode? rekurrens?); (3) sett opp og løs $\pi = \pi P$ + normering; (4) sjekk regularitet → grensefordeling; (5) first-step for treffe-/returtid/treffsannsynlighet der oppgaven ber om det; (6) tolk hvert svar i ord. Varianter: parametrisk klassifisering, betinget «bakover», langsiktig kostnad, returtid via $1/\pi_i$.
- **Oppgavesjangre:** A+B+C+D samlet. Inkluder én **kald-bank**-oppgave (uvant vinkling, kun momentliste-fasit) og minst én merket «(krevende)».
- **Typiske feil:** hele #1–#3 samlet; velge feil apparat (grense der kjeden er periodisk); glemme tolkning.
- **Quiz: 20 · Flashcards: 16**

**Prøve-kvote Del 2:** 4 prøver (2.A matrise + Chapman–Kolmogorov + betinget bakover · 2.B klassifisering (m/parametrisk) · 2.C stasjonær/grense + regularitet + tolkning · 2.D first-step (treffe/retur/treffsannsynlighet) på eksamensnivå).

### Del 3 — Poisson-prosessen *(prioritet: PERFEKT — ≈88 %)*

#### Kapittel 3.1: Poisson-prosessen: definisjon, ventetid og betinget-uniforme ankomster

- **id:** `tma4265-3-1` · **number:** 3.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-1-1`
- **kapitteltype:** teori
- **description:** Modeller antall hendelser som Poisson($\lambda t$), regn ventetid (gamma) og bruk det sentrale trikset: betinget på $N(t) = n$ er ankomsttidene uniformt fordelt.
- **Eksamensbelegg:** Poisson-prosess i ≈15/17 sett (**≈88 %**, sjanger E). De tre trikset går igjen. Prioritet: perfekt (nivå 1 punkt 4).
- **Forkunnskaper/kryssbok:** kap. 1.1 (eksponensial/sum→gamma); [Diskrete fordelinger og Poisson-prosessen](/bok/tma4245/tma4245-2-2) `(verifiser lenke)`. `collapsible` **Symbol- og formelliste**.
- **Innholdskontrakt:** **definisjon** (uavhengige, stasjonære inkrementer; $N(s+t) - N(s) \sim \text{Poisson}(\lambda t)$; $N(0) = 0$; formelarket) — bruk rate·$t$ (ikke rate); **ventetid** $W_n \sim \text{gamma}(n, \lambda)$, tetthet $\lambda^n t^{n-1} e^{-\lambda t}/(n-1)!$ (formelarket; interarrival-tider iid exp($\lambda$)); **betinget-uniforme ankomster:** betinget på $N(t) = n$ er ankomsttidene fordelt som ordningsvariable fra $n$ uniforme på $(0, t)$ (formelarket; gir f.eks. $P(\text{ingen i } (0,5] \mid 2 \text{ i } (0,10]) = (1/2)^2$ — trikset i stedet for tung integrasjon). Utled hvorfor haleuavhengighet gir det uniforme resultatet (aktivt for A-nivå).
- **Oppgavesjangre:** E. Mønstereksempel: «Kunder ankommer et parkeringshus etter en Poisson-prosess med rate 0,5 per minutt. Finn $P(\text{ingen de første 5 min})$, forventet antall de første 15 min, og — gitt at to ankom de første 10 min — sannsynligheten for at ingen ankom de første 5 min.»
- **Typiske feil:** #6 (bruke rate der man skal bruke rate·$t$; glemme betinget-uniforme ankomster og regne tungt); bruke minneløshet på ventetid til $n$-te hendelse (#8).
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 3.2: Sammensetting, tynning og sammensatt Poisson

- **id:** `tma4265-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4265-3-1`
- **kapitteltype:** teori
- **description:** Slå sammen uavhengige Poisson-prosesser, splitt (tynn) én prosess i uavhengige delprosesser, og regn forventning/varians for en sammensatt sum over Poisson-mange ledd.
- **Eksamensbelegg:** Sammensetting/tynning er del av Poisson-søylen (≈88 %); sammensatt Poisson i ≈6/17 (≈35 %). Prioritet: perfekt (sammensetting/tynning) / kunne (sammensatt sum).
- **Forkunnskaper/kryssbok:** kap. 3.1; [dobbel forventning/sammensatt sum](/bok/tma4265/tma4265-1-2). `collapsible` **Symbol- og formelliste**.
- **Innholdskontrakt:** **sammensetting**: sum av uavhengige Poisson($\lambda_1$) + Poisson($\lambda_2$) = Poisson($\lambda_1 + \lambda_2$); **tynning**: merk hver hendelse uavhengig med sannsynlighet $p$ → de merkede danner en Poisson($\lambda p$)-prosess, uavhengig av de umerkede Poisson($\lambda(1-p)$) (utled; gir uavhengige delprosesser — sentralt); **sammensatt Poisson** $S = \sum_{i=1}^{N(t)} C_i$: $E[S] = \lambda t\, E[C]$, $\text{Var}(S) = \lambda t\, E[C^2]$ (via dobbel forventning/varians med $N \sim$ Poisson).
- **Oppgavesjangre:** E. Mønstereksempel: «Museumsgjester ankommer Poisson med rate 30/time; hver er «rask» med sannsynlighet 0,7 uavhengig. Vis at raske og langsomme gjester danner uavhengige Poisson-prosesser, og finn forventet antall raske de første to timene.»
- **Typiske feil:** anta at merkede/umerkede er avhengige; #12 (feil varians for sammensatt sum); glemme at tynning krever uavhengig merking.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 3.3: Drill: Poisson-oppgaven (sjanger E)

- **id:** `tma4265-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4265-3-2`
- **kapitteltype:** drill
- **description:** Poisson-oppgaven i alle vanlige varianter — punktsannsynlighet/hale, ventetid/gamma, betinging på antall, tynning/sammensetting og sammensatt sum — med løsningsoppskrift.
- **Eksamensbelegg:** Poisson-oppgaven i ≈88 % av settene; drillkapittel fordi trikset (rate·$t$, betinget-uniform, tynning) er svært mekaniserbart. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og formelliste** (samlet Poisson-apparat).
- **Innholdskontrakt (løsningsoppskrift):** (1) identifiser rate og tidsvindu → Poisson($\lambda t$); (2) punktsannsynlighet/hale eller ventetid (gamma)?; (3) betinget på antall → bruk uniform-trikset; (4) sammensetting/tynning → nye uavhengige rater; (5) sammensatt sum → dobbel forventning/varians; (6) tolk. Merk hvilke ledd som «står på formelarket».
- **Oppgavesjangre:** E samlet. Inkluder én kald-bank-oppgave + én «(krevende)».
- **Typiske feil:** #6, #8, #12 samlet; velge tung integrasjon der uniform-trikset gjelder.
- **Quiz: 20 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (3.A rate·t + punktsannsynlighet/hale · 3.B ventetid/gamma + betinget-uniforme ankomster · 3.C sammensetting/tynning · 3.D sammensatt Poisson + full Poisson-oppgave på eksamensnivå).

### Del 4 — CTMC og fødsels-dødsprosesser *(prioritet: PERFEKT — ≈94 %, andre bæresøyle)*

#### Kapittel 4.1: Kontinuerlig-tids Markov-kjeder: rater, generatormatrise og sojourntider

- **id:** `tma4265-4-1` · **number:** 4.1 · **estimatedMinutes:** 75 · **prerequisites:** `tma4265-2-1`, `tma4265-1-1`
- **kapitteltype:** teori
- **description:** Fra diskret til kontinuerlig tid: sojourntid $\sim$ exp($v_i$), hoppintensiteter $q_{ij}$, generatormatrise $A$, innebygd (embedded) kjede og Kolmogorovs ligninger.
- **Eksamensbelegg:** CTMC-apparatet bærer BD-oppgaven (≈94 %); generatormatrise $A$ + $\exp(tA)$ er ny sjanger (2024, 2/17). Prioritet: perfekt (nivå 1 punkt 3 / nivå 3 for exp(tA)).
- **Forkunnskaper/kryssbok:** kap. 2.1 (Markov-egenskap), kap. 1.1 (eksponensial/minneløshet). **«Sist du var her»:** vis min-av-eksponensialer-regelen og minneløsheten ferdig oppfrisket. `collapsible` **Symbol- og formelliste** ($v_i$, $q_{ij}$, $A$, embedded).
- **Innholdskontrakt:** **CTMC-definisjon** via $P_{i,i+1}(h) = \lambda_i h + o(h)$ osv.; sojourntid i $i$ $\sim \text{exp}(v_i)$ med $v_i = \sum_{j \ne i} q_{ij}$; **innebygd (embedded) kjede** $P_{ij} = q_{ij}/v_i$; **generatormatrise** $A$ (diagonal $-v_i$, off-diagonal $q_{ij}$, radsum 0); Chapman–Kolmogorov kontinuerlig; **Kolmogorovs forover- og bakoverligninger** (formelarket); tolkning $P(t) = \exp(tA)$ (2024 — bruk/tolk, ikke full spektralteori). Bruk minneløsheten (kap. 1.1) til å begrunne Markov-egenskapen. Skille $v_i$ (utgangsrate) fra embedded $P_{ij}$.
- **Oppgavesjangre:** F (grunnlag) + generatormatrise-varianten. Mønstereksempel: «En maskin veksler mellom «oppe» og «nede» med rater $\lambda$ og $\mu$. Sett opp generatormatrisen $A$, angi sojourntidene, og skriv Kolmogorovs foroverligning for $P_{00}(t)$.»
- **Typiske feil:** blande $v_i$ og $q_{ij}$; feil fortegn/radsum i $A$; blande embedded-kjede-sannsynlighet med hoppintensitet.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 4.2: Fødsels-dødsprosesser: ratediagram, balanse og θ_k-stasjonærfordeling

- **id:** `tma4265-4-2` · **number:** 4.2 · **estimatedMinutes:** 75 · **prerequisites:** `tma4265-4-1`
- **kapitteltype:** teori
- **description:** Argumenter for at en prosess er en fødsels-dødsprosess, oppgi rater, tegn ratediagram, sett opp balanselikningene og finn stasjonærfordelingen via $\theta_k$.
- **Eksamensbelegg:** Fødsels-dødsprosess i ≈16/17 sett (**≈94 %**, sjanger F) — den andre bæresøylen. Prioritet: perfekt (nivå 1 punkt 3).
- **Forkunnskaper/kryssbok:** kap. 4.1. `collapsible` **Symbol- og formelliste** ($\lambda_i$, $\mu_i$, $\theta_k$, balanse). SVG-ratediagram (jf. figurkrav).
- **Innholdskontrakt:** **BD-prosess** = CTMC med hopp kun $\pm 1$; argumenter for BD-egenskapen (kontinuerlig indeks, hopp $\pm 1$, eksponensielle sojourntider, Markov via minneløshet — sensorkrav 1); fødselsrater $\lambda_i$, dødsrater $\mu_i$; **ratediagram**; **balanselikninger** (rate inn = rate ut over hvert kutt): $\lambda_{k-1}\pi_{k-1} = \mu_k \pi_k$; **BD-stasjonærformelen** $\theta_k = \dfrac{\lambda_0 \cdots \lambda_{k-1}}{\mu_1 \cdots \mu_k}$, $\theta_0 = 1$, $\pi_0 = 1/\sum_k \theta_k$, $\pi_k = \theta_k \pi_0$ (formelarket — men oppsett og gjenkjenning aktivt). Eksistensbetingelse: $\sum_k \theta_k < \infty$. **Spesialtilfeller:** $\lambda_i = \lambda, \mu_i = \mu$ → M/M/1 (geometrisk, krever $\lambda < \mu$); $\lambda_i = \lambda, \mu_i = i\mu$ → M/M/∞ (Poisson($\lambda/\mu$)).
- **Oppgavesjangre:** F. Mønstereksempel: «Antall biler i en garasje modelleres som en BD-prosess med ankomstrate $\lambda$ og servicerate $i\mu$ når det er $i$ biler. Finn ratene, tegn diagrammet, og bestem den langsiktige sannsynligheten for full garasje (kapasitet $N$).»
- **Typiske feil:** #5 (feil $\theta_k$ — bytte $\lambda$/$\mu$, feil startindeks $\theta_0 = 1$); #7 (behandle en aggregert prosess som BD uten å sjekke minneløsheten); glemme eksistensbetingelsen $\sum\theta_k < \infty$.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 4.3: Kontinuerlig first-step-analyse

- **id:** `tma4265-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `tma4265-4-2`, `tma4265-2-4`
- **kapitteltype:** teori
- **description:** First-step-analyse i kontinuerlig tid: bruk sojourntidens forventning $1/v_i$ som «kostnaden» per steg for å finne forventet treffe-/absorpsjonstid, og treffsannsynligheter via embedded-kjeden.
- **Eksamensbelegg:** Kontinuerlig first-step er den kontinuerlige delen av sjanger D (≈88 % samlet med diskret); 2020-essayet ba om diskret↔kontinuerlig-parallellen eksplisitt. Prioritet: perfekt (nivå 1 punkt 2).
- **Forkunnskaper/kryssbok:** kap. 4.1 (sojourntid/embedded), kap. 2.4 (diskret first-step). **«Sist du var her»:** vis diskret first-step-malen ferdig oppfrisket. `collapsible` **Symbol- og formelliste**.
- **Innholdskontrakt:** forventet tid til absorpsjon/treff fra $i$: $v_i = \dfrac{1}{v_i^{\text{rate}}} + \sum_{j \ne i} P^{\text{emb}}_{ij} v_j$ (kostnaden $1/v_i^{\text{rate}}$ = forventet sojourntid, ikke «+1» som i diskret — flagg forskjellen eksplisitt); treffsannsynlighet via embedded-kjeden (som diskret, med $P^{\text{emb}}$). Alltid definer størrelsen i ord først. Kobling til BD: forventet tid til garasjen er full/tom.
- **Oppgavesjangre:** D (kontinuerlig). Mønstereksempel: «For en BD-prosess med rater $\lambda_i, \mu_i$: finn forventet tid til det er to biler ved pumpa, gitt tom start.»
- **Typiske feil:** #1 i kontinuerlig form (bruke «+1» i stedet for sojourntid $1/v_i$); blande embedded-sannsynlighet med rate; glemme grensebetingelse.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 4.4: Drill: CTMC/BD-oppgaven (sjanger F + D-kontinuerlig)

- **id:** `tma4265-4-4` · **number:** 4.4 · **estimatedMinutes:** 65 · **prerequisites:** `tma4265-4-3`
- **kapitteltype:** drill
- **description:** BD-oppgaven fra verbal beskrivelse til stasjonærfordeling og videre — rater, diagram, balanse, $\theta_k$, spesialtilfelle-gjenkjenning og kontinuerlig first-step — med løsningsoppskrift.
- **Eksamensbelegg:** BD-oppgaven i ≈94 % av settene, ofte som en M/M/·-kø med Little (Del 5); drillkapittel fordi rateoppsett + $\theta_k$ er svært mekaniserbart. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 4.1–4.3. `collapsible` **Symbol- og formelliste** (samlet CTMC/BD-apparat).
- **Innholdskontrakt (løsningsoppskrift):** (1) argumenter for BD-egenskapen; (2) les ut $\lambda_i, \mu_i$ fra beskrivelsen; (3) tegn ratediagram; (4) sett opp balanse, regn $\theta_k$ og $\pi_k$; (5) gjenkjenn M/M/1 / M/M/∞ om mulig; (6) kontinuerlig first-step for tid til en tilstand; (7) tolk. Numerisk-stabilitet-variant: skriv $\theta_k$ uten $k!$-overflyt (2023). Inkluder én kald-bank + én «(krevende)».
- **Oppgavesjangre:** F + D-kontinuerlig samlet.
- **Typiske feil:** #5, #7 samlet; glemme å argumentere for BD; velge feil apparat (diskret $\pi = \pi P$ i kontinuerlig tid).
- **Quiz: 20 · Flashcards: 16**

**Prøve-kvote Del 4:** 4 prøver (4.A CTMC: rater/$A$/sojourntid/Kolmogorov · 4.B BD: diagram + balanse + $\theta_k$ + M/M-gjenkjenning · 4.C kontinuerlig first-step · 4.D full CTMC/BD-oppgave (m/numerisk stabilitet) på eksamensnivå).

### Del 5 — Køteori *(prioritet: KUNNE — ≈71 %)*

#### Kapittel 5.1: Køsystemer, grensefordeling og Little

- **id:** `tma4265-5-1` · **number:** 5.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-4-2`
- **kapitteltype:** teori
- **description:** Identifiser kømodellen (M/M/1, M/M/∞, M/M/c/tap), les grensefordelingen fra formelarket, og bruk Little $L = \lambda_a W$ med RIKTIG effektiv ankomstrate.
- **Eksamensbelegg:** Køteori i ≈12/17 sett (**≈71 %**, sjanger G), ofte som anvendelse av BD-oppgaven med en økonomisk vri. Prioritet: kunne (nivå 1 punkt 5 for kjernen).
- **Forkunnskaper/kryssbok:** kap. 4.2 (kø = BD-spesialtilfelle). `collapsible` **Symbol- og formelliste** ($L, L_Q, W, W_Q, \lambda_a$, Little).
- **Innholdskontrakt:** **kømodell-notasjon** (M/M/1, M/M/∞, M/M/c, M/M/c/c tap-system); **grensefordelinger** (formelarket): M/M/1 geometrisk $\pi_k = (1-\rho)\rho^k$, $\rho = \lambda/\mu < 1$; M/M/∞ Poisson($\lambda/\mu$); **Little** $L = \lambda_a W$, $L_Q = \lambda_a W_Q$ (formelarket); **effektiv ankomstrate** $\lambda_a = \lambda(1 - P_\text{blokkert})$ i tap-/kapasitetssystemer (kritisk — sensorkrav 4); forventet antall i system $L = \sum_k k\pi_k$; **tapt/blokkert andel** ($P_N$ i et kapasitetssystem); andel tid tomt ($\pi_0$). Vis at $L < \infty$ krever $\lambda < \mu$ for M/M/1 (parametersjekk).
- **Oppgavesjangre:** G. Mønstereksempel: «Vis at antall raske gjester er en M/M/∞-kø, finn grensefordelingen (Poisson), og beregn ved Little forventet antall gjester i museet.»
- **Typiske feil:** #4 (Little med rå $\lambda$ i stedet for effektiv $\lambda_a$ ved tap); bruke M/M/1-formel uten å sjekke $\lambda < \mu$; blande $L$ og $L_Q$.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 5.2: Drill: køoppgaven (sjanger G)

- **id:** `tma4265-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4265-5-1`
- **kapitteltype:** drill
- **description:** Køoppgaven i vanlige varianter — modellidentifikasjon, grensefordeling, $L$/$W$ via Little, tapt/tom-andel og økonomiske vrier — med løsningsoppskrift.
- **Eksamensbelegg:** Køoppgaven i ≈71 % av settene; drillkapittel fordi den er en mekaniserbar anvendelse av BD + Little. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 5.1, kap. 4.2. `collapsible` **Symbol- og formelliste** (samlet kø-apparat).
- **Innholdskontrakt (løsningsoppskrift):** (1) identifiser kømodellen; (2) hent grensefordelingen (formelarket) og sjekk stabilitetsbetingelsen; (3) regn $L$ (og $L_Q$); (4) effektiv rate $\lambda_a$ ved tap; (5) $W = L/\lambda_a$ via Little; (6) tapt/tom-andel; (7) økonomisk vri (ny $\lambda$ som holder inntekten konstant; spart strøm når tomt). Inkluder én kald-bank + én «(krevende)».
- **Oppgavesjangre:** G samlet.
- **Typiske feil:** #4 samlet med feil modellvalg; glemme stabilitetsbetingelsen; feil effektiv rate.
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 5:** 4 prøver (5.A M/M/1: grensefordeling + $L$ + $W$ · 5.B M/M/∞ og tap-system + effektiv rate · 5.C Little + tapt/tom-andel · 5.D full køoppgave m/økonomisk vri på eksamensnivå).

### Del 6 — Gaussiske prosesser og Brownsk bevegelse *(prioritet: KUNNE — ≈71 %, avgjør C mot B/A)*

#### Kapittel 6.1: Gaussiske prosesser og betinget normal

- **id:** `tma4265-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-1-2`
- **kapitteltype:** teori
- **description:** Skriv en endelig samling prosessverdier som en multivariat normalvektor, bruk betinget-gaussisk-formelen (formelarket), og modeller/tolk en kovariansfunksjon.
- **Eksamensbelegg:** Gaussiske prosesser / betinget normal i ≈12/17 sett (**≈71 %** sammen med BM, sjanger H). Prioritet: kunne (nivå 2 punkt 6).
- **Forkunnskaper/kryssbok:** kap. 1.2; [Lineærkombinasjoner av normale](/bok/tma4245/tma4245-3-2) `(verifiser lenke)`, [Normalfordelingen](/bok/tma4245/tma4245-3-1) `(verifiser lenke)`. `collapsible` **Symbol- og formelliste** (MVN, $\Sigma$, betinget-gaussisk).
- **Innholdskontrakt:** **multivariat normal** $X \sim N(\mu, \Sigma)$ (kovarians som annet argument); en endelig samling $(X_{t_1}, \dots, X_{t_n})$ av en gaussisk prosess er MVN med middel- og kovariansstruktur fra prosessen; **betinget-gaussisk-formelen** (formelarket): $E(x_A \mid x_B) = \mu_A + \Sigma_{A,B}\Sigma_B^{-1}(x_B - \mu_B)$, $\text{Var}(x_A \mid x_B) = \Sigma_A - \Sigma_{A,B}\Sigma_B^{-1}\Sigma_{B,A}$ (bruk aktivt — ikke ad hoc); **kovariansfunksjon-modellering** (eksponentiell/markovsk $\text{Cov}(X_s, X_t) = \sigma^2 e^{-\alpha|t-s|}$; salinitet mot dyp); fordelingen til en lineærkombinasjon $X + Y$ (fra kap. tma4245-3-2). Bivariat normal (GPS-posisjon, korrelasjon 0,9).
- **Oppgavesjangre:** H. Mønstereksempel: «En GPS-posisjon $(X, Y)$ er bivariat normal med gitt middel, standardavvik og korrelasjon 0,9. Finn den betingede fordelingen til $Y$ gitt $X = 9$, og fordelingen til $W = X + Y$.»
- **Typiske feil:** bruke ad hoc-standardisering i stedet for betinget-gaussisk-formelen; feil delmatrise $\Sigma_{A,B}$; blande kovarians og korrelasjon; glemme kovariansleddet i $\text{Var}(X+Y)$.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 6.2: Brownsk bevegelse

- **id:** `tma4265-6-2` · **number:** 6.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-6-1`
- **kapitteltype:** teori
- **description:** Bruk BM-definisjonen (uavhengige, stasjonære, normalfordelte inkrementer) til å standardisere og regne sannsynligheter, betinge på en senere observasjon, og avgjøre om en transformasjon er BM.
- **Eksamensbelegg:** BM inngår i gaussisk/BM-søylen (**≈71 %**, sjanger I). Prioritet: kunne (nivå 2 punkt 7).
- **Forkunnskaper/kryssbok:** kap. 6.1. **«Sist du var her»:** vis betinget-gaussisk-formelen ferdig oppfrisket. `collapsible` **Symbol- og formelliste** ($B(t)$, $\sigma^2$, $\text{Cov} = \min$).
- **Innholdskontrakt:** **BM-definisjon** (formelarket): uavhengige, stasjonære, normalfordelte inkrementer med $\text{Var}(B(t) - B(s)) = \sigma^2(t - s)$, $B(0) = 0$; **standardisering** og $P(B(t) > a)$; **kovarians** $\text{Cov}(B(s), B(t)) = \sigma^2\min(s, t)$; **betinget sannsynlighet gitt en senere observasjon** (via betinget normal / Brownsk-bro-struktur); **«er dette BM?»-sjekk**: $(1/a)B(a^2 t)$ ER BM (sjekk inkrement-varians), $tB(t)$ er IKKE (feil inkrement-varians); **Brownsk bro** $B^0(t) = B(t) - \frac{t}{T}B(T)$ med middel 0 og $\text{Cov}(B^0(s), B^0(t)) = s(1 - t/T)$ for $s \le t$ (utled middel + kovarians, aktivt). Modellkontekst: aksjekurs/eiendomspris med drift.
- **Oppgavesjangre:** I. Mønstereksempel: «Aksjekursen modelleres som Brownsk bevegelse med variansparameter $\sigma^2$. Finn sannsynligheten for at kursen overstiger en grense kl. 12, og — gitt sluttkursen kl. 16 — den betingede sannsynligheten for at kursen kl. 12 var over grensen.»
- **Typiske feil:** #9 (glemme varians-skalering $\sigma^2(t-s)$; feil $\text{Cov} = \min(s,t)$); feil oppsett av betinget normal gitt en senere verdi; konkludere «er BM» uten å sjekke inkrement-variansen.
- **Quiz: 24 · Flashcards: 22**

#### Kapittel 6.3: Drill: gaussisk/BM-oppgaven (sjanger H + I)

- **id:** `tma4265-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4265-6-2`
- **kapitteltype:** drill
- **description:** Gaussisk/BM-oppgaven i vanlige varianter — betinget normal, kovariansfunksjon, BM-standardisering, betinget BM/bro og «er dette BM?» — med løsningsoppskrift.
- **Eksamensbelegg:** Gaussisk/BM-oppgaven i ≈71 % av settene; drillkapittel fordi betinget-normal-oppsettet og BM-standardiseringen er mekaniserbare. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2. `collapsible` **Symbol- og formelliste** (samlet gaussisk/BM-apparat).
- **Innholdskontrakt (løsningsoppskrift):** (1) skriv prosessverdiene som MVN med middel/kovarians; (2) betinget fordeling → betinget-gaussisk-formelen; (3) BM: standardiser inkrement, regn sannsynlighet; (4) betinget gitt senere verdi → bro-struktur; (5) «er dette BM/BD?» → sjekk definisjonen punkt for punkt; (6) tolk. Inkluder én kald-bank + én «(krevende)».
- **Oppgavesjangre:** H + I samlet.
- **Typiske feil:** #9 samlet; ad hoc i stedet for betinget-gaussisk-formel; ufullstendig «er dette BM?»-sjekk.
- **Quiz: 18 · Flashcards: 14**

**Prøve-kvote Del 6:** 4 prøver (6.A MVN + betinget-gaussisk-formel · 6.B kovariansfunksjon-modellering + lineærkombinasjon · 6.C BM-standardisering + betinget/bro · 6.D full gaussisk/BM-oppgave (m/«er dette BM?») på eksamensnivå).

### Del 7 — Simulering og pseudokode (R) *(prioritet: KUNNE — ~80 % av settene 2020–25)*

#### Kapittel 7.1: Cholesky-simulering av multivariat gaussisk og Brownsk bro

- **id:** `tma4265-7-1` · **number:** 7.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-6-2`
- **kapitteltype:** teori/kodefag
- **description:** Skriv R-lignende pseudokode som trekker fra $N(\mu, \Sigma)$ via $x = \mu + Lz$ (Cholesky), betinget simulering gitt $X_1 = x_1$, og en Brownsk bro — og forklar matematisk hvorfor utdataet har riktig fordeling.
- **Eksamensbelegg:** Simulering i ≈9/17 totalt men ~80 % i 2020–25 (sjanger J); Cholesky-MVN (2022, 2023) og Brownsk bro med Cholesky (2023) er faste. Prioritet: kunne (nivå 2 punkt 8 — **eget spor, ufravikelig**).
- **Forkunnskaper/kryssbok:** kap. 6.1–6.2. `collapsible` **Symbol- og formelliste** ($\Sigma = LL^\top$, `rnorm`, `chol`, `outer`).
- **Innholdskontrakt:** **R-idiomet** (`rnorm(n)`, `chol(Sigma)` gir øvre trekantet $R$ med $\Sigma = R^\top R$ — flagg konvensjonen: bruk $L = R^\top$; `outer`); **Cholesky-MVN**: $x = \mu + Lz$ med $z \sim N(0, I)$ og $\Sigma = LL^\top$ → $x \sim N(\mu, \Sigma)$ (utled: $\text{Cov}(Lz) = L\,I\,L^\top = \Sigma$ — den bilineære kovariansen, sensorkrav 7); **betinget simulering** gitt $X_1 = x_1$ (bruk betinget-gaussisk-formelen fra 6.1 for middel/kovarians, deretter Cholesky); **Brownsk bro-simulering**: bygg kovariansmatrisen $\text{Cov}(B^0(s), B^0(t)) = s(1-t/T)$, Cholesky, men **fjern endepunktene der variansen er 0** (singulær $\Sigma$ — #10). Pseudokode alltid MED linje-for-linje-begrunnelse.
- **Oppgavesjangre:** J. Mønstereksempel: «La $\Sigma = LL^\top$ være Cholesky-faktoriseringen. Skriv pseudokode som trekker én realisasjon fra $N(\mu, \Sigma)$ gitt at du kan trekke fra $N(0, I)$, og forklar matematisk hvorfor resultatet har riktig fordeling.»
- **Typiske feil:** #10 (bruke $\Sigma$ i stedet for $L$; glemme å fjerne endepunktene i broen); bruke $R$ (øvre) i stedet for $L = R^\top$; kode uten begrunnelse (sensorkrav 7 → sterkt redusert uttelling).
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 7.2: Simulering av Markov-prosess fra A og Monte Carlo-anslag

- **id:** `tma4265-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4265-7-1`, `tma4265-4-1`
- **kapitteltype:** teori/kodefag
- **description:** Simuler en kontinuerlig-tids Markov-prosess fra generatormatrisen (sojourntid $\sim$ exp($v_i$), hopp etter embedded-kjeden) og estimer en sannsynlighet med Monte Carlo (indikatorgjennomsnitt).
- **Eksamensbelegg:** Markov-prosess fra $A$ (2024) og Monte Carlo-anslag (2024) er de nye simuleringssjangrene (del av J, ~80 % 2020–25). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1, kap. 4.1 (embedded-kjede/sojourntid). `collapsible` **Symbol- og formelliste** (sojourntid, embedded, MC-estimator).
- **Innholdskontrakt:** **simulering av CTMC fra $A$**: i tilstand $i$, trekk sojourntid $T \sim \text{exp}(v_i)$, trekk neste tilstand fra embedded-fordelingen $P^{\text{emb}}_{ij} = q_{ij}/v_i$, gjenta (forklar hvorfor dette gir riktig prosess — minneløshet + konkurrerende eksponensialer, kap. 1.1); **Monte Carlo-anslag**: estimer $p = P(A)$ ved gjentatt trekking og gjennomsnitt av indikatorer $\hat{p} = \frac{1}{M}\sum_m \mathbb{1}_{A_m}$; standardfeil $\sqrt{\hat{p}(1-\hat{p})/M}$ (bør kjenne til — koble til sentralgrenseteoremet). R-idiom.
- **Oppgavesjangre:** J. Mønstereksempel: «Skriv pseudokode som simulerer BD-prosessen fra kap. 4.2 fram til tid $T$ fra generatormatrisen, og bruk gjentatte simuleringer til å anslå $P(X(T) = 0)$.»
- **Typiske feil:** bruke fast tidssteg i stedet for eksponensiell sojourntid; trekke neste tilstand fra $q_{ij}$ i stedet for normalisert embedded-fordeling; MC uten standardfeil/begrunnelse.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 7:** 4 prøver (7.A Cholesky-MVN + begrunnelse · 7.B betinget simulering + Brownsk bro (endepunkt-finessen) · 7.C simulering av Markov-prosess fra $A$ · 7.D Monte Carlo-anslag + full simuleringsoppgave på eksamensnivå).

### Del 8 — Modellrefleksjon og grunnlagsteori *(prioritet: KUNNE/KJENNE — skiller sterke kandidater)*

#### Kapittel 8.1: «Er dette en …?» og eksistens-/entydighetsargumenter

- **id:** `tma4265-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4265-2-3`, `tma4265-4-2`, `tma4265-6-2`
- **kapitteltype:** teori
- **description:** Sjekk definisjonen punkt for punkt — er $\{Y_n\}$ en Markov-kjede? er prosessen en BD-prosess? er $tB(t)$ en Brownsk bevegelse? — og før eksistens-/entydighetsargumentet for grensefordeling.
- **Eksamensbelegg:** Modellrefleksjon i ≈9/17 sett (**≈53 %**, sjanger K) — skiller de sterke kandidatene; eksistens/entydighet (regularitet) i ≈10/17 (≈59 %). Prioritet: kunne (nivå 2 punkt 10).
- **Forkunnskaper/kryssbok:** kap. 2.3 (regularitet), 4.2 (BD-egenskap), 6.2 (BM-sjekk). `collapsible` **Symbol- og formelliste** (definisjonene som sjekkes).
- **Innholdskontrakt:** **«er dette en Markov-kjede?»** — sjekk om fremtiden avhenger av mer enn nåtilstanden ($Y_n = X_n + X_{n+1}$ er IKKE Markov); **«er dette en BD-prosess?»** — sjekk hopp $\pm 1$ OG minneløshet (en aggregert prosess der dødsraten avhenger av sammensetningen, ikke bare antallet, er IKKE BD, #7); **«er dette BM?»** — sjekk inkrement-varians/uavhengighet ($tB(t)$ ikke BM); **eksistens/entydighet** for grensefordeling: irredusibel + aperiodisk + positivt rekurrent (regularitet) — før argumentet punkt for punkt (sensorkrav 5, 9). Standardmalen: «X er (ikke) en … fordi definisjonsvilkår Y (ikke) er oppfylt, her: …».
- **Oppgavesjangre:** K. Mønstereksempel: «Avgjør med begrunnelse om prosessen $Y_n = X_n + X_{n+1}$ er en Markov-kjede.»
- **Typiske feil:** #7 (behandle en ikke-Markov/ikke-BD-prosess som Markov/BD uten å sjekke minneløsheten); konkludere fra magefølelse i stedet for definisjonen; anta regularitet uten å sjekke aperiodisitet (#2).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 8.2: Grunnlagsteori og definisjoner

- **id:** `tma4265-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4265-8-1`
- **kapitteltype:** teori
- **description:** Presise definisjoner (Markov-egenskap, stasjonaritet), first-step-analyse forklart som konsept (2020-essayet), aksiomatisk stokastisk variabel (2024) og en kort orientering om forgreiningsprosesser.
- **Eksamensbelegg:** Minst én teori-/definisjonsbit i de fleste sett (sjanger L); 2020 hadde en 40 %-essayoppgave (forklar first-step-analyse), 2024 krevde et lite bevis fra sannsynlighetsaksiomene; forgreiningsprosess sparsomt (2013, ≈12 %). Prioritet: kunne (L) / kjenne (forgreining, nivå 3 punkt 14–15).
- **Forkunnskaper/kryssbok:** kap. 2.4, 8.1. `collapsible` **Symbol- og formelliste**.
- **Innholdskontrakt:** **presis definisjon** av Markov-egenskap og stasjonaritet (i ord + notasjon); **first-step-analyse som konsept** (essay-format — hva den er, hvorfor betinging på første steg virker, hvor den brukes; 2020); **aksiomatisk stokastisk variabel** (målbar funksjon; skisse av at $X + Y$ er en stokastisk variabel — bør kjenne til, 2024); **forgreiningsprosess (branching)** kort: forventet avkomsttall $m$, utdøingssannsynlighet (utdør sikkert hviss $m \le 1$) — «bør kjenne til», lav prioritet (nesten utdødd etter 2015). Merk sikkert usikkert stoff `(verifiser)`.
- **Oppgavesjangre:** L. Mønstereksempel: «Skriv en kort innføring (et halvt til ett sidesvar) i first-step-analyse: hva teknikken er, hvorfor den virker, og gi ett diskret og ett kontinuerlig eksempel.»
- **Typiske feil:** upresis definisjon (Markov-egenskap uten «gitt nåtiden»-formuleringen); i essay: regne i stedet for å forklare; forgreining: feil utdøingskriterium ($m \le 1$).
- **Quiz: 20 · Flashcards: 18**

**Prøve-kvote Del 8:** 4 prøver (8.A «er dette en Markov-kjede?» · 8.B «er dette en BD-prosess / BM?» · 8.C eksistens/entydighet + regularitet · 8.D grunnlagsdefinisjoner + first-step-essay på eksamensnivå).

### Del 9 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 9.1: Sjangerspillet — løsningsoppskrifter A–L

- **id:** `tma4265-9-1` · **number:** 9.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4265-8-2`
- **kapitteltype:** drill
- **description:** Én løsningsoppskrift per sjanger (A–L): gjenkjenn oppgaven, velg apparatet, sett opp, regn, tolk — med tidsbudsjett per deloppgave og de vanligste fellene samlet.
- **Eksamensbelegg:** Metakapittel over alle sjangrene A–L; speiler at hvert sett er 10 likevektede deloppgaver fra de fem søylene. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Symbol- og formelliste** (samlet apparat + hva som ligger på formelarket).
- **Innholdskontrakt:** for hver sjanger A–L: én linjes gjenkjenningssignal, apparatvalg, oppsettmal, tidsbudsjett (~24 min per deloppgave ved 10 likevektede på 4 t, minus lesing/kladd), og den vanligste fellen (#-kode). **Kald bank** (8–10 oppgaver, uvante kombinasjoner, kun momentliste-fasit) plasseres her. Selvdiagnose-sjekkliste per sjanger.
- **Oppgavesjangre:** A–L samlet (gjenkjenning + oppsett).
- **Typiske feil:** velge feil apparat (diskret vs. kontinuerlig; rå vs. effektiv rate); regne uten å definere modell; hoppe over tolkning.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 9.2: Øvingseksamen 1 — DTMC- og Poisson-tung

- **id:** `tma4265-9-2` · **number:** 9.2 · **estimatedMinutes:** 100 · **prerequisites:** `tma4265-9-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett med 10 likevektede deloppgaver (kode C, formelark) med DTMC og Poisson som tyngdepunkt, pluss én BD- og én gaussisk/BM-deloppgave; full modellbesvarelse i collapsibles.
- **Eksamensbelegg:** Nyskrevet «typisk» sett (analysen §2/§7-fordeling): én stor DTMC (matrise + klassifisering + $\pi$/grense + first-step), én Poisson (ventetid/betinging/tynning), én BD/kø, én gaussisk/BM, én simulerings- eller modellrefleksjonsdel. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. Gjenta **kildeforbeholdet** (fasitene er nyskrevne modellbesvarelser, ikke offisielle).
- **Innholdskontrakt:** 10 likevektede deloppgaver; modellbesvarelse per oppgave i eget `collapsible`, skrevet slik sensor vil se den (definert modell/notasjon først, apparat, regning, tolkning; delpoeng-`tip`). Pausepunkt-markører mellom hovedoppgaver. Selvdiagnose-sjekkliste til slutt.
- **Oppgavesjangre:** A–E + F/G + H/I + J/K blandet.
- **Typiske feil:** samlet #1–#13 der de er relevante; tidsstyring (10 likevektede deloppgaver).
- **Quiz: 12 · Flashcards: 8**

#### Kapittel 9.3: Øvingseksamen 2 — CTMC/BD- og kø-tung

- **id:** `tma4265-9-3` · **number:** 9.3 · **estimatedMinutes:** 100 · **prerequisites:** `tma4265-9-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt i CTMC/BD, køteori (Little, tap) og kontinuerlig first-step, pluss én DTMC- og én BM-deloppgave; full modellbesvarelse i collapsibles.
- **Eksamensbelegg:** Nyskrevet sett som vrir mot den andre bæresøylen (BD/kø) + generatormatrise/$\exp(tA)$-vrien (2024) og numerisk stabilitet (2023). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. Gjenta kildeforbeholdet.
- **Innholdskontrakt:** 10 likevektede deloppgaver; modellbesvarelse per oppgave i `collapsible`; inkluder en numerisk-stabilitet-deloppgave ($\theta_k$ uten $k!$-overflyt) og en «er dette en BD-prosess?»-deloppgave. Pausepunkt-markører. Selvdiagnose.
- **Oppgavesjangre:** F/G + D-kontinuerlig + A/C + I + K blandet.
- **Typiske feil:** #4, #5, #7 samlet; effektiv vs. rå rate; feil apparat kontinuerlig vs. diskret.
- **Quiz: 12 · Flashcards: 8**

#### Kapittel 9.4: Øvingseksamen 3 — simulering og gaussisk-tung (Inspera-hybrid)

- **id:** `tma4265-9-4` · **number:** 9.4 · **estimatedMinutes:** 100 · **prerequisites:** `tma4265-9-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt i gaussiske prosesser/BM og R-simulering (Cholesky, Brownsk bro, prosess fra $A$, Monte Carlo), pluss én DTMC- og én Poisson-deloppgave; full modellbesvarelse i collapsibles.
- **Eksamensbelegg:** Nyskrevet sett som speiler de moderne settene (2020–25) med tung simulerings-/pseudokodeandel og et fagessay (first-step som konsept). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. Gjenta kildeforbeholdet.
- **Innholdskontrakt:** 10 likevektede deloppgaver; modellbesvarelse per oppgave i `collapsible`; inkluder minst to pseudokode-deloppgaver (Cholesky-MVN + Brownsk bro / prosess fra $A$) med begrunnelse, og én essay-/konseptdeloppgave. Pausepunkt-markører. Selvdiagnose. Minst én «bestått-på-marginen»-modellbesvarelse som viser E-terskelen nedenfra.
- **Oppgavesjangre:** H/I + J + L + A/E blandet.
- **Typiske feil:** #9, #10 samlet; kode uten begrunnelse; R- vs. Python-idiom.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 9:** de tre øvingseksamenene (9.2–9.4) ER prøvesettene for eksamenstreningen (hver = ett komplett sett à ~100 min, «kan trygt deles over flere økter»), pluss sjangerspillets kald bank (9.1). Til sammen ≥4 fullverdige prøveenheter for denne delen.

---

## 4. Kvotesammendrag (summeringskontroll)

Per-kapittel-summene under er kontrollregnet FØR totalene.

| Kap. | Quiz | Flashcards |
|---|---|---|
| 0.1 | 14 | 12 |
| 1.1 | 24 | 24 |
| 1.2 | 22 | 20 |
| 2.1 | 24 | 22 |
| 2.2 | 22 | 22 |
| 2.3 | 24 | 22 |
| 2.4 | 24 | 22 |
| 2.5 | 20 | 16 |
| 3.1 | 24 | 22 |
| 3.2 | 22 | 20 |
| 3.3 | 20 | 16 |
| 4.1 | 24 | 22 |
| 4.2 | 24 | 24 |
| 4.3 | 22 | 20 |
| 4.4 | 20 | 16 |
| 5.1 | 24 | 22 |
| 5.2 | 18 | 14 |
| 6.1 | 24 | 22 |
| 6.2 | 24 | 22 |
| 6.3 | 18 | 14 |
| 7.1 | 22 | 22 |
| 7.2 | 18 | 16 |
| 8.1 | 22 | 20 |
| 8.2 | 20 | 18 |
| 9.1 | 20 | 16 |
| 9.2 | 12 | 8 |
| 9.3 | 12 | 8 |
| 9.4 | 12 | 8 |

**Delsummer (kontrollregnet):**
- Del 0: quiz 14 · fc 12
- Del 1 (1.1–1.2): quiz 46 · fc 44
- Del 2 (2.1–2.5): quiz 114 · fc 104
- Del 3 (3.1–3.3): quiz 66 · fc 58
- Del 4 (4.1–4.4): quiz 90 · fc 82
- Del 5 (5.1–5.2): quiz 42 · fc 36
- Del 6 (6.1–6.3): quiz 66 · fc 58
- Del 7 (7.1–7.2): quiz 40 · fc 38
- Del 8 (8.1–8.2): quiz 42 · fc 38
- Del 9 (9.1–9.4): quiz 56 · fc 40

**Totalt quiz:** 14+46+114+66+90+42+66+40+42+56 = **576** (krav ≥500 ✓)
**Totalt flashcards:** 12+44+104+58+82+36+58+38+38+40 = **510** (krav ≥500 ✓)

**Prøver:** 8 temadeler à 4 prøver = 32 temaprøver (Del 1–8), pluss 3
øvingseksamener + kald bank i Del 9. ≥4 prøver per temadel er oppfylt.

**Estimert totaltid (sum estimatedMinutes):** 45 + (70+65) + (65+70+70+75+70) +
(70+65+60) + (75+75+65+65) + (70+55) + (70+70+55) + (70+60) + (60+55) +
(70+100+100+100) = **2 555 min ≈ 43 timer**.

---

## 5. Byggenotater (til forfatter-agenten)

- **Arbeidsdeling mot tma4245:** lenk forkunnskaper (fordelingslære, betinget
  sannsynlighet, normalfordeling, lineærkombinasjoner) til tma4245-boka; dupliser
  IKKE grunnkursstoffet. Verifiser at de refererte tma4245-kapittel-id-ene finnes
  når tma4245-boka er bygget (`(verifiser lenke)` til da).
- **R, ikke Python:** simuleringssporet (Del 7) bruker R-idiom (`rnorm`, `chol`,
  `outer`) — flagg dette eksplisitt (kontrast til tma4245s numpy) i kap. 0.1 og 7.1.
- **Formelark-disiplin:** merk i hvert kapittel hva som «står på formelarket» (skal
  ikke pugges) vs. hva som «settes opp/utledes aktivt». Flashcards for det siste
  vektlegges (oppsett/malen), ikke for rå formelgjengivelse av arket.
- **Parametersjekk (DNA-regnefag):** M/M/1-stabilitet ($\lambda < \mu$),
  grensefordeling = stasjonær (regularitet), eksistens $\sum\theta_k < \infty$ —
  skriv betingelsene eksplisitt, ikke ubetinget.
- **Figurer:** ratediagram (BD/CTMC) og tilstandsdiagram (DTMC-klassifisering) som
  statiske SVG-er der de drilles (jf. DNA-regnefag «Figurkrav»); kjør
  `upload-media-storage.ts` etter.
- **Opphavsrett:** alle oppgaver nyskrevne (endre kontekst/tall/parter); ingen
  ordrette oppgavetekster eller fasitformuleringer; formler/notasjon er standard
  fagspråk uten verkshøyde.
- **institusjoner.ts + hoyskole-disclaimer.tsx:** registrer «TMA4265 Stokastisk
  modellering» under NTNU; sjekk at disclaimer-heuristikken (ikke jus/helse) er
  grei for et matematikkemne.
