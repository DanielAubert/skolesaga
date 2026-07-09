# Bokskjelett: ECON2500 Investering og finansiering — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (8 ordinære sett V2018–V2025, 7 ordinære sensorveiledninger, 4 utsatt-sett med
> veiledning). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Faget er sterkt formeldrevet og TALLREGNENDE.** I motsetning til ECON1310s
> symbolske komparativ-statikk gir hver regneoppgave et konkret svar i **kroner
> eller prosent**. Alle mønstereksempler under er derfor gjennomregnet med tall,
> og forfatteren skal drille studenten i å (1) sette opp formelen eksplisitt,
> (2) sette inn tallene, (3) oppgi svar med enhet, (4) gi en beslutnings­konklusjon.
> Sensor gir **delvis uttelling for korrekt formeloppsett uten utregnet tallsvar**,
> og **straffer ikke følgefeil** når metoden er riktig — dette skal gjennomsyre
> hvordan løsningsforslagene skrives.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ2500` |
| Tittel | **ECON2500 Investering og finansiering** |
| Institusjon/nivå | Høyskole — Universitetet i Oslo (UiO) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt, tallregnende, med én verbal drøftingsdel) |
| Antall kapitler | **34** (1 eksamenskart + 29 tema + 4 eksamenstrening) |
| Estimert totaltid | **≈ 34 timer** |
| Quiz totalt | **582** (krav ≥500) |
| Flashcards totalt | **538** (krav ≥500) |

**Pitch (én avsnitt):** ECON2500-eksamen har fulgt samme mal siden 2022: en
3-timers digital skoleeksamen i Inspera (A–F) med **4–5 oppgaver med oppgitt
prosentvekt**. Oppgave 1 er nesten alltid netto nåverdi og internrente; de midtre
oppgavene er multippel-verdsetting, CAPM/beta og kapitalstruktur; og **siste
oppgave er alltid en ren drøfting uten regning** (agentproblem, lederlønn,
eierstyring, Oljefondet). Tre temaer forekommer i **hvert eneste sett**:
nåverdi/internrente, CAPM/beta og kapitalstruktur/Modigliani-Miller. Legger man
til multippel-verdsetting (92 %) og drøftingsoppgaven (83 %), dekker fem søyler
over 90 % av all uttelling. Denne boka bygges rundt nettopp de fem — den driller
tallregningen til den sitter, lærer studenten sensorens faste feller (særlig
«starter i dag»-leddet i evige strømmer og at **risikofri gjeld nøytraliserer
konkurskostnad-effekten**), og trener drøftingen slik sensor faktisk gir
uttelling: strukturert for/mot, forankret i CAPM, uten konklusjon der det ikke
bes om det. Opsjonsprising og full porteføljeoptimering — som emnebeskrivelsen
lover, men eksamen ikke har testet på flere år — er bevisst nedprioritert til
ett kompakt «bør kjenne til»-kapittel.

**Kritisk notasjonsregel (gjelder HELE boka)** — følg Berk & DeMarzo /
sensorveiledningenes notasjon konsekvent:

| Symbol | Betydning |
|---|---|
| $C$, $I$, $r$, $g$, $n$ | kontantstrøm, investeringsutlegg, avkastningskrav/diskonteringsrente, vekstrate, antall perioder |
| NNV, IRR | netto nåverdi, internrente (internal rate of return) |
| EV, EBITDA, EBIT, D&A | enterprise value (selskapsverdi), driftsresultat før av- og nedskrivninger, driftsresultat, av- og nedskrivninger |
| $E$, $D$ | markedsverdi egenkapital, markedsverdi gjeld |
| EPS, P/E, DIV | resultat per aksje, pris/fortjeneste-multippel, dividende (utbytte per aksje) |
| $E[r]$, Var, SD, Corr, Cov, $\alpha$ | forventet avkastning, varians, standardavvik (volatilitet), korrelasjon, kovarians, alfa |
| $r_f$, $r_M$, $\beta$, $\beta_D$ | risikofri rente, markedsavkastning, beta, gjeldsbeta |
| $r_E$, $r_D$, $r_U$ | egenkapitalkostnad, gjeldskostnad, unlevered/selskapets kapitalkostnad (= WACC uten skatt) |
| $y$, $p$, $L$ | effektiv rente på gjeld (yield), misligholdssannsynlighet, tapsandel ved mislighold |

Skriv rentefotstørrelser i prosent i teksten (10 %) og som desimal i formlene
(0,10). ALDRI Black-Scholes-formelen, ALDRI effisient front med flere risikable
aktiva — porteføljedelen bruker **kun** kapitalmarkedslinjen med ETT risikabelt
aktivum (markedsporteføljen) + risikofri plassering.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: tidsverdi → investerings­kriterier
→ verdsettelse → risiko/CAPM → kapitalstruktur → drøfting). Frekvensen styrer
*omfanget*: de fire «må beherskes perfekt»-søylene får hver 3–5 kapitler inkl.
eget drillkapittel; «bør kjenne til» får ett kompakt kapittel. **`number` er
del-basert («7.4»), aldri lineær** — bokforsiden grupperer på `number.split('.')[0]`.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | — | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Tidsverdi av penger | 3 | perfekt-fundament | Grunnlaget for oppgave 1 (NNV/IRR, 100 %). Evige strømmer + «starter i dag»-fellen er sensorens hyppigst testede felle → eget kapittel. |
| 2 | Investeringskriterier: NNV og internrente | 4 | **perfekt** | **100 % frekvens**, alltid oppgave 1. 3 teorikapitler + drillkapittel. Inkluderer gjensidig utelukkende prosjekter + IRR-metodens tre svakheter. |
| 3 | Verdsettelse av obligasjoner og aksjer | 3 | kunne / kjenne | Diskontert dividende (Gordon) 58 %; obligasjon/effektiv rente er fundament for gjeldskostnad (Del 7) og «bør kjenne til». |
| 4 | Multippel-verdsetting | 3 | **perfekt** | 92 % frekvens, 20–40 % vekt. EV/EBITDA- og P/E-kjeden begge veier + drillkapittel. |
| 5 | Risiko, avkastning og porteføljeteori | 3 | kunne / kjenne | Varians fra fordeling og diversifisering er fundament for CAPM (Del 6); CML/Sharpe (25 %, avtakende) = kjenne. |
| 6 | CAPM, beta og prising av risiko | 4 | **perfekt** | **100 % frekvens**. Beta + CAPM/SML + alfa/anomalier (42 %) + drillkapittel. |
| 7 | Kapitalkostnad, kapitalstruktur og Modigliani-Miller | 5 | **perfekt** | **100 % frekvens**, 20–40 % vekt. Én sammenhengende søyle: $r_U$ → gjeldskostnad → MM uten/med friksjoner (**risikofri-gjeld-fellen**) → drillkapittel. |
| 8 | Eierstyring, agentproblem og finansielle beslutninger | 3 | kunne | Drøftingsoppgaven i 83 % av settene, alltid siste oppgave (20–25 %). Metode + de fire gjengangertemaene + drillkapittel. |
| 9 | Bør kjenne til: opsjoner, realopsjoner og atferdsfinans | 1 | kjenne | Opsjoner null siden 2021, realopsjoner/atferd ~8 %. Billig å dekke i ett kompakt kapittel; skal ikke overvektes. |
| 10 | Eksamenstrening | 4 | — | Strategi/formelark + 3 komplette øvingseksamener (inkl. én case-tung à la V2023). |

**Avvik fra DNA-malen (dokumentert):**
1. **DNA legger alle sjangerkapitler i siste del; her ligger fire av fem
   drillkapitler (2.4, 4.3, 6.4, 7.5) inne i temadelene sine**, fordi
   regnesjangrene er 100/92 %-gjengangere som må drilles umiddelbart etter
   teorien. Del 10 beholder strategi/formelark + øvingseksamenene. Drøftingsdrillen
   (8.3) ligger i Del 8 av samme grunn.
2. **Del 7 samler unlevered kapitalkostnad, gjeldskostnad, MM uten friksjoner og
   MM med friksjoner i én del med fem kapitler** (i stedet for å splitte på to
   deler), fordi analysen behandler dem som **én 100 %-søyle** — de deler
   tallgrunnlag og formelapparat ($r_U = r_E\,E/(E+D) + r_D\,D/(E+D)$ løses både
   forlengs og baklengs på tvers av kapitlene). Én byggeagent skal ha hele delen.
3. **Ingen egen del for markedseffisiens** (testes aldri direkte) — dekkes
   implisitt i alfa/anomalier (kap. 6.3) og NBIM-drøftingen (kap. 8.2), slik
   analysen anbefaler.

**Oppgavesjanger-katalog (A–J)** — brukes som referansebokstaver i kapitlene
under; presenteres for studenten i Del 0:

- **A** Netto nåverdi og internrente (oppgave 1, hvert sett, 10–25 %)
- **B** Gjensidig utelukkende prosjekter + IRR-metodens svakheter (5–15 %)
- **C** Multippel-verdsetting: EV/EBITDA → aksjeverdi → P/E → kjøp/hold/selg (20–40 %)
- **D** Diskontert dividende / Gordon (5–15 %)
- **E** CAPM, beta og varians fra sannsynlighetsfordeling (15–40 %)
- **F** Kapitalstruktur, MM, unlevered kapitalkostnad og WACC (20–40 %)
- **G** Drøfting: agentproblem / eierstyring / lederlønn / NBIM (20–25 %)
- **H** Alfa, meravkastning og anomalier (5–15 %)
- **I** Porteføljeteori og kapitalmarkedslinjen (5–15 %, avtakende)
- **J** Opsjoner / put-call-paritet (utgått etter 2021 — bør kjenne)

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **perfekt** (nivå 1) /
**kunne** (nivå 2) / **kjenne** (nivå 3). Kryssbok-lenker peker på **bi-okonomi**
(Matematikk for økonomer — verifisert bygget: `bi-okonomi-4-1` … `-4-5` dekker
renter, nåverdi/fremtidsverdi, annuiteter, lån og investeringsanalyse;
`bi-okonomi-2-2`/`-2-3` dekker andregrads- og likningssett). Lenkeform:
`[tittel](/bok/bi-okonomi/bi-okonomi-4-2)`.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes ECON2500

- **id:** `econ2500-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fem søylene, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 12 sett. Skal gjengi: (i) formen (3-timers digital skoleeksamen i Inspera, A–F, forhåndsgodkjent ordbok + enkel og vitenskapelig kalkulator, obligatorisk verdsettings-case som adgangskrav); (ii) den faste malen siden 2022: 4–5 oppgaver med prosentvekt, oppgave 1 = NNV/IRR, siste = ren drøfting; (iii) temafrekvens-tabellen (NNV/IRR 100 %, CAPM/beta 100 %, kapitalstruktur/MM/WACC 100 %, multippel-verdsetting 92 %, drøfting 83 %, Gordon 58 %, gjensidig utelukkende/IRR-svakheter 58 %, alfa/anomalier 42 %, portefølje/CML 25 %, opsjoner 25 % men null siden 2021, gjeldskostnad m/mislighold 17 %, pecking order 17 %, realopsjoner/atferd ~8 %); (iv) sensorens fem metaregler; (v) karakterskillene (E/C-D/A-B).
- **Innholdskontrakt:** Oppgavesjanger-katalogen A–J som studentens sjekkliste med typisk vekt per sjanger (som i §2). Sensorens fem metaregler ordrett omskrevet: (1) vis formeloppsettet eksplisitt — delvis uttelling selv uten tallsvar; sett opp → sett inn tall → svar med enhet; (2) følgefeil straffes ikke når metoden er riktig (men kommentér «svært unaturlige tall»); (3) krev en **konklusjon** i regneoppgaver (kjøp/hold/selg, lønnsomt/ikke); (4) drøftingsoppgaven løses uten modell/regning, strukturert for/mot, ingen fasit; (5) prioritér tiden etter vekting. Karakterskillene: **E** = riktig NNV/IRR-oppsett + korrekt CAPM-innsetting + noen relevante drøftingsmomenter; **C/D** = korrekt verdsettingskjede (EV→egenkapital→aksjeverdi), riktig beta og $r_U$, standard MM-resonnement; **A/B** = ser at risikofri gjeld nøytraliserer konkurskostnad-effekten, kobler multippel-forskjeller til kapitalstruktur uten feilprising, peker ut hvilken IRR-svakhet som gjelder konkret, vurderer anomalier (size/value) som alternativ til alfa, har sunn skepsis til ledelsens (justerte) tall. Avslutt med prognosen for neste eksamen (4–5 oppgaver: NNV/IRR med evig strøm «starter i dag» + IRR-refleksjon; multippel med et sjokk som endrer EBITDA; CAPM/beta med varians fra fordeling; kapitalstruktur med risikofri-gjeld-fellen; NBIM- eller lederlønn-drøfting) og leseplanen (Del 2, 4, 6, 7 = «må perfekt»; Del 1, 3, 5, 8 = «må kunne»; Del 9 = «bør kjenne»).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 10/25/25/20/20 og 180 minutter — sett opp tidsbudsjett per oppgave» og «hvilken sjanger hører formelen $r_U = r_E\,E/(E+D)+r_D\,D/(E+D)$ til, og hvor mye teller den typisk?».
- **Typiske feil:** Metafeilene: bruke like mye tid på en 10 %-oppgave som på en 40 %-oppgave; regne i drøftingsoppgaven; hoppe over konklusjonen i regneoppgaver.
- **Quiz: 10 · Flashcards: 12**

---

### Del 1 — Tidsverdi av penger *(fundament for oppgave 1)*

#### Kapittel 1.1: Diskontering og nåverdi

- **id:** `econ2500-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Å flytte kroner i tid: diskontering av enkeltbeløp og flerperiodiske kontantstrømmer med ulike beløp.
- **Eksamensbelegg:** Fundamentet under sjanger A (NNV/IRR, 100 % — oppgave 1 i hvert sett). Flerperiodisk med ulike beløp forekommer direkte (V2025-utsatt O1a; V2024-utsatt O1a). Prioritet: **perfekt** (fundament).
- **Forkunnskaper:** Bygger på [Renter og renteberegning](/bok/bi-okonomi/bi-okonomi-4-1) og [Nåverdi og fremtidsverdi](/bok/bi-okonomi/bi-okonomi-4-2) i Matematikk for økonomer. Symbol- og formelliste (collapsible) skal forklare $C_t$, $r$, $t$, $n$, nåverdi (NV), fremtidsverdi.
- **Innholdskontrakt:** Diskontering av enkeltbeløp $t$ år fram: $\text{NV} = \dfrac{C_t}{(1+r)^t}$. Flerperiodisk nåverdi: $\text{NV} = \sum_{t=1}^{n} \dfrac{C_t}{(1+r)^t}$. Netto nåverdi som utlegg pluss diskonterte strømmer: $\text{NNV} = -I + \sum_{t=1}^{n}\dfrac{C_t}{(1+r)^t}$. Begrepene: avkastningskrav = alternativkostnaden for kapital; høyere $r$ ⇒ lavere nåverdi; hvorfor en krone i dag er verdt mer enn en krone om ett år. **Regnekjede (nyskrevet):** et prosjekt gir 40, 60 og 90 mill. i år 1–3, avkastningskrav 8 %. $\text{NV} = 40/1{,}08 + 60/1{,}08^2 + 90/1{,}08^3 = 37{,}04 + 51{,}44 + 71{,}44 = 159{,}9$ mill. kr. Skal kunne *brukes* og *settes opp eksplisitt*.
- **Oppgavesjangre:** A. Mønstereksempel: «Et prosjekt gir kontantstrømmene 50, 50 og 120 mill. kr i årene 1–3. Avkastningskravet er 9 %. Regn ut nåverdien av kontantstrømmene, sett opp formelen eksplisitt, og oppgi svaret i mill. kr.»
- **Typiske feil:** Diskontere med feil eksponent (glemme at år 3 diskonteres med $(1+r)^3$); blande nominell og reell rente; oppgi svar uten enhet.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.2: Evige og voksende evige strømmer — og «starter i dag»-fellen

- **id:** `econ2500-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-1-1 · **kapitteltype:** teori
- **description:** Formlene for evige og voksende evige kontantstrømmer — og sensorens hyppigst testede felle: det ekstra førsteleddet når strømmen forfaller straks.
- **Eksamensbelegg:** Evig strøm i sjanger A hvert år. **«Starter i dag / i morgen»-varianten er den enkeltfellen sensor gjentar oftest** (V2022 O1a, V2025 O1a). Voksende evig med utsatt oppstart (V2018 O1b). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 1.1. Symbol- og formelliste: $C$, $r$, $g$, $C_1$, NV, NNV, $I$.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG BEGRUNNES:
  - Evig strøm som starter i år 1: $\text{NV} = \dfrac{C}{r}$.
  - **Evig strøm som forfaller straks (starter i dag):** legg til første betaling separat — $\text{NNV} = -I + C + \dfrac{C}{r}$. Dette er kjernefellen: leddet $+C$ i tillegg til $C/r$. **Regnekjede (nyskrevet):** et prosjekt koster 480 mill. i dag og gir 55 mill. i evig strøm **fra og med i dag**, avkastningskrav 11 %. $\text{NNV} = -480 + 55 + 55/0{,}11 = -480 + 55 + 500 = 75$ mill. kr $>0$ ⇒ lønner seg.
  - Voksende evig strøm (Gordon-formen): $\text{NV} = \dfrac{C_1}{r-g}$, krever $r>g$. Utsatt oppstart (strøm fra år $k$) diskonteres tilbake med $(1+r)^{-(k-1)}$. **Regnekjede:** første betaling 12 mill. om ett år, vekst 3 %, krav 10 %: $\text{NV} = 12/(0{,}10-0{,}03) = 171{,}4$ mill. kr.
  - Intuisjon: hvorfor $C/r$ er en endelig sum til tross for uendelig mange ledd (geometrisk rekke).
- **Oppgavesjangre:** A. Mønstereksempel: «Et prosjekt koster 300 mill. kr i dag og gir deretter 24 mill. kr i en evig kontantstrøm som starter **allerede i dag**. Avkastningskravet er 8 %. Regn ut netto nåverdi og avgjør om prosjektet lønner seg.» (Fasit: $-300 + 24 + 24/0{,}08 = -300 + 24 + 300 = 24$ mill. kr $>0$.)
- **Typiske feil (analysen §5.1):** Glemme det ekstra førsteleddet $+C$ når strømmen starter i dag (regner bare $-I + C/r$); bruke $r-g$ i nevneren for en strøm uten vekst; sette $C_0$ i telleren i Gordon-formen (skal være $C_1$).
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 1.3: Annuiteter og endelige strømmer

- **id:** `econ2500-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** econ2500-1-2 · **kapitteltype:** teori
- **description:** Nåverdien av en endelig, konstant kontantstrøm (annuitet) — og hvordan den utledes fra den evige strømmen.
- **Eksamensbelegg:** Endelig annuitet i sjanger A (V2024 O1b 14 år; V2023-utsatt O1c 15 år; V2025-utsatt O1b 20 år). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 1.2 og [Annuiteter](/bok/bi-okonomi/bi-okonomi-4-3) i Matematikk for økonomer. Symbol- og formelliste: $C$, $r$, $n$, annuitetsfaktor.
- **Innholdskontrakt:** Annuitetsformelen som differansen mellom to evige strømmer: $\text{NV} = \dfrac{C}{r}\left(1 - \dfrac{1}{(1+r)^n}\right)$. Utledning (intuisjon: en $n$-årig strøm = evig strøm fra i dag minus evig strøm som starter i år $n{+}1$). **Regnekjede (nyskrevet):** 18 mill. kr årlig i 14 år, avkastningskrav 9 %: $\text{NV} = (18/0{,}09)(1 - 1{,}09^{-14}) = 200 \cdot (1 - 0{,}2992) = 200 \cdot 0{,}7008 = 140{,}2$ mill. kr. Kobling til lån/nedbetaling (annuitetslån). Skal kunne *brukes*; utledningen vises fordi den binder sammen 1.2 og 1.3.
- **Oppgavesjangre:** A. Mønstereksempel: «En maskin gir en besparelse på 25 mill. kr per år i 10 år. Avkastningskravet er 7 %. Regn ut nåverdien av besparelsene med annuitetsformelen, og sammenlign med en investeringskostnad på 160 mill. kr.»
- **Typiske feil:** Bruke $n$ feil (glemme at strømmen løper $n$ *hele* perioder); bruke evig-formelen $C/r$ på en endelig strøm (overvurderer verdien); regnefeil i $(1+r)^{-n}$-leddet.
- **Quiz: 20 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (se §4).

---

### Del 2 — Investeringskriterier: NNV og internrente *(prioritet: PERFEKT)*

#### Kapittel 2.1: Netto nåverdi som beslutningsregel

- **id:** `econ2500-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-1-3 · **kapitteltype:** teori
- **description:** NNV-regelen: invester når NNV > 0, og hvorfor NNV er det teoretisk overlegne kriteriet.
- **Eksamensbelegg:** Sjanger A i **samtlige sett** (100 %), oppgave 1, 10–25 % (opp mot 80 % når hele settet er ett NNV-case, V2023). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 1.1–1.3 og [Investeringsanalyse](/bok/bi-okonomi/bi-okonomi-4-5) i Matematikk for økonomer. Symbol- og formelliste: NNV, $I$, $C_t$, $r$, $n$.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG BEGRUNNES: $\text{NNV} = -I + \sum_{t=1}^{n}\dfrac{C_t}{(1+r)^t}$; beslutningsregelen (NNV > 0 ⇒ gjennomfør; NNV < 0 ⇒ forkast; ved uavhengige prosjekter: gjennomfør alle med positiv NNV). NNV måler verdiskaping i dagens kroner. Avkastningskravet $r$ = alternativkostnad/risikojustert krav (bro til WACC i Del 7). **Konklusjonskravet:** hver NNV-oppgave skal ende i en lønnsomhetskonklusjon, ikke bare et tall. **Regnekjede (nyskrevet, «Nordvik Solar»):** utlegg 220 mill., strømmer 80, 90, 100 mill. i år 1–3, krav 12 %: $\text{NNV} = -220 + 80/1{,}12 + 90/1{,}12^2 + 100/1{,}12^3 = -220 + 71{,}4 + 71{,}7 + 71{,}2 = -5{,}7$ mill. kr $<0$ ⇒ lønner seg ikke.
- **Oppgavesjangre:** A. Mønstereksempel: «Nordvik Solar vurderer et anlegg som koster 200 mill. kr og gir 45 mill. kr i evig årlig kontantstrøm fra og med neste år. Avkastningskravet er 10 %. Regn ut netto nåverdi og konkludér om anlegget bør bygges.»
- **Typiske feil:** Diskontere investeringsutlegget (det er allerede i dag); glemme lønnsomhetskonklusjonen; blande uavhengige og gjensidig utelukkende prosjekter (kap. 2.3).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.2: Internrenten (IRR) og koblingen NNV ↔ IRR

- **id:** `econ2500-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-2-1 · **kapitteltype:** teori
- **description:** Internrenten som renta der NNV = 0 — og hvordan man leser lønnsomhet ut av IRR uten alltid å regne den ut.
- **Eksamensbelegg:** IRR i sjanger A hvert sett. Analytisk IRR for evig strøm (V2023 O1a: $20/100 = 20\,\%$). NNV↔IRR-koblingen spurt eksplisitt (V2025 O1b). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 2.1 og [Andregradslikninger](/bok/bi-okonomi/bi-okonomi-2-2) (for enperiode-IRR og senere fortegnsskift). Symbol- og formelliste: IRR, $C$, $I$, $C_1$, $r$, NNV.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG UTLEDES: IRR = renta som gir $\text{NNV} = 0$. Evig strøm: $-I + \dfrac{C}{\text{IRR}} = 0 \Rightarrow \text{IRR} = \dfrac{C}{I}$. Enperiode: $\text{IRR} = \dfrac{C_1}{I} - 1$. **Kjernekoblingen:** NNV $> 0$ med gitt avkastningskrav $\Leftrightarrow$ IRR $>$ kravet — så man kan konkludere om lønnsomhet fra NNV-fortegnet *uten* å regne ut IRR. **Regnekjede (nyskrevet):** prosjekt koster 150 mill., gir 27 mill. i evig strøm: $\text{IRR} = 27/150 = 18\,\%$. Er kravet 12 %, er IRR $>$ krav ⇒ NNV $>0$ ⇒ lønnsomt. NNV-profilen (NNV som fallende funksjon av $r$; IRR = skjæring med null-aksen) beskrives (figur i A-besvarelse).
- **Oppgavesjangre:** A. Mønstereksempel: «Et prosjekt koster 250 mill. kr og gir 30 mill. kr i evig årlig kontantstrøm. (a) Regn ut internrenten. (b) Avkastningskravet er 9 %. Uten å regne ut NNV: er prosjektet lønnsomt? Begrunn koblingen mellom internrente og netto nåverdi.»
- **Typiske feil:** Tro IRR alltid må regnes ut for å konkludere om lønnsomhet; snu IRR↔NNV-koblingen (påstå NNV < 0 når IRR > krav); regne IRR = $C/I$ på en endelig strøm (formelen gjelder evig strøm).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 2.3: Gjensidig utelukkende prosjekter og IRR-metodens tre svakheter

- **id:** `econ2500-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-2-2 · **kapitteltype:** teori
- **description:** Når man må velge ett av flere prosjekter: hvorfor høyest NNV vinner, ikke høyest internrente — og de tre grunnene til at IRR svikter.
- **Eksamensbelegg:** Sjanger B i 58 % av settene (V2023 O1k skala; V2023-utsatt O1d timing; V2025-utsatt O1c timing + risiko). Multiple internrenter ved fortegnsskift (V2020 C/D). **A/B-differensiator:** peke ut *hvilken* av de tre svakhetene som gjelder konkret. Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 2.2. Symbol- og formelliste: NNV, IRR, gjensidig utelukkende, kryssingsrente.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG FORKLARES: ved **gjensidig utelukkende** prosjekter (velg ett av flere) velges **høyest NNV**, ikke høyest IRR. IRR-metoden svikter av tre grunner sensor krever navngitt: **(1) ulik skala** (et lite prosjekt kan ha høy IRR men lav NNV i kroner), **(2) ulik timing** (IRR antar reinvestering til IRR-satsen; ulik tidsprofil gir kryssende NNV-profiler), **(3) ulik risiko** (ulikt avkastningskrav gjør IRR-sammenligning uegnet). Studenten skal **peke ut hvilken** som gjelder i det konkrete tilfellet. «Minste onde»-valg blant negative NNV (velg minst negativ, V2020 O1f). Multiple internrenter når kontantstrømmen skifter fortegn (løses med andregradsligning — bro til bi-okonomi-2-2). **Regnekjede (nyskrevet):** Prosjekt Liten (IRR 30 %, NNV 20 mill.) vs. Prosjekt Stor (IRR 18 %, NNV 60 mill.), begge samme krav og levetid → velg Stor (høyest NNV); IRR-metoden villeder pga. **ulik skala**.
- **Oppgavesjangre:** B. Mønstereksempel: «To gjensidig utelukkende prosjekter har samme investeringskostnad og samme avkastningskrav, men prosjekt A betaler mest tidlig og prosjekt B mest sent. Forklar hvorfor internrentemetoden kan gi feil rangering, og hvilken av de tre kjente svakhetene som er relevant her.»
- **Typiske feil (analysen §5.6):** Rangere etter IRR i stedet for NNV; ikke navngi hvilken svakhet som gjelder (bare si «IRR er upålitelig»); glemme at multiple IRR oppstår kun ved fortegnsskift i kontantstrømmen.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 2.4: Drill — NNV og internrente

- **id:** `econ2500-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** econ2500-2-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 1: fra kontantstrømsbeskrivelse til ferdig NNV/IRR-besvarelse med konklusjon.
- **Eksamensbelegg:** Dekker sjanger A (100 %, alltid oppgave 1) og B (58 %). Sensorregelen «formeloppsett gir delvis uttelling» og «følgefeil straffes ikke» drilles eksplisitt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) klassifiser kontantstrømmen (enkeltbeløp / evig / evig «starter i dag» / voksende / annuitet / flerperiodisk); 2) velg riktig formel; 3) sett opp eksplisitt; 4) sett inn tall; 5) svar med enhet; 6) for IRR: bruk $C/I$ ved evig strøm eller koble til NNV-fortegnet; 7) **konklusjon** (lønnsomt/ikke, velg-prosjekt). Gjennomregnet eksamenscase med sensor-margnotater (hvor delpoengene sitter: +1 for riktig formel, +1 for riktig innsetting, +1 for enhet, +1 for konklusjon). 10–15 nyskrevne oppgaver som roterer hele katalogen: evig «starter i dag»-felle, voksende med utsatt oppstart, annuitet, flerperiodisk med ulike beløp, IRR = $C/I$, IRR↔NNV-slutning, gjensidig utelukkende med skala/timing/risiko, «minste onde». Alle med `solution` + `hints`.
- **Oppgavesjangre:** A, B. Mønstereksempel (full deloppgave-kjede): «(a) Prosjektet koster 400 mill. og gir 44 mill. i evig strøm fra i dag — regn NNV ved krav 11 %. (b) Regn internrenten. (c) Et alternativt, mindre prosjekt har IRR 25 % men NNV 15 mill. — hvilket velges, og hvorfor svikter IRR-rangeringen her?»
- **Typiske feil:** Hele §5-repertoaret for oppgave 1 samlet: glemt «starter i dag»-ledd (§5.1), rangering etter IRR (§5.6), manglende konklusjon/enhet.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (se §4).

---

### Del 3 — Verdsettelse av obligasjoner og aksjer

#### Kapittel 3.1: Obligasjoner: kupong, pålydende og effektiv rente

- **id:** `econ2500-3-1` · **number:** 3.1 · **estimatedMinutes:** 40 · **prerequisites:** econ2500-1-3 · **kapitteltype:** teori
- **description:** Obligasjonen som en annuitet pluss et sluttbeløp — og den effektive renta (yield) som blir gjeldskostnaden senere.
- **Eksamensbelegg:** Rent obligasjonsprising testes sjelden direkte, men **effektiv rente $y$ er fundamentet for gjeldskostnad med misligholdsrisiko** $r_D = y - pL$ (kap. 7.2, V2023 O1d) og konvertibel obligasjon = obligasjon + kjøpsopsjon (kap. 9.1). Prioritet: **kjenne** (fundament).
- **Forkunnskaper:** Bygger på kap. 1.3. Symbol- og formelliste: kupong, pålydende (F), kurs, effektiv rente/yield $y$, $n$.
- **Innholdskontrakt:** Obligasjonens verdi = nåverdi av kupongene (annuitet) + nåverdi av pålydende: $P = \sum_{t=1}^{n}\dfrac{\text{kupong}}{(1+y)^t} + \dfrac{F}{(1+y)^n}$. Effektiv rente $y$ = den $y$ som setter markedskursen lik denne nåverdien (obligasjonens IRR). Sammenhengen kurs ↔ yield (invers): høyere yield ⇒ lavere kurs. Statsobligasjon = lav risiko (statens kredittverdighet). **Regnekjede (nyskrevet, kort):** en nullkupongobligasjon med pålydende 100 om 3 år, effektiv rente 5 %: $P = 100/1{,}05^3 = 86{,}4$. Kobling framover: $y$ er *lovet* avkastning; forventet gjeldskostnad $r_D$ trekker fra forventet tap ved mislighold (kap. 7.2). Kun kort — dette er ikke en hovedsøyle.
- **Oppgavesjangre:** A-variant (kort). Mønstereksempel: «En obligasjon betaler 6 kr i kupong årlig i 4 år og 100 kr ved forfall. Markedsrenta for tilsvarende risiko er 5 %. Regn ut kursen, og forklar hvorfor kursen ligger over pålydende.»
- **Typiske feil:** Blande kupongrente og effektiv rente; glemme pålydende i siste periode; tro at høyere yield gir høyere kurs.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.2: Aksjeverdsettelse med dividendemodellen (Gordon)

- **id:** `econ2500-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-1-2 · **kapitteltype:** teori
- **description:** Gordons vekstmodell for aksjepris — og timing-fellen med et utbytte som «nettopp ble betalt».
- **Eksamensbelegg:** Sjanger D i 58 % av settene. **Timing-fellen $\text{DIV}_1 = \text{DIV}_0(1+g)$** testes eksplisitt (V2024 O2a: $4\cdot1{,}05/(0{,}15-0{,}05) = 42$). Prioritet: **kunne**.
- **Forkunnskaper:** Bygger på kap. 1.2 (voksende evig strøm). Symbol- og formelliste: $P$, $\text{DIV}_0$, $\text{DIV}_1$, $r$, $g$.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: $P = \dfrac{\text{DIV}_1}{r-g}$ der $\text{DIV}_1 = \text{DIV}_0(1+g)$ og $r>g$. **Timing-fellen:** et utbytte som *nettopp er betalt (i går)* er $\text{DIV}_0$ og teller **ikke** i telleren — bruk $\text{DIV}_0(1+g)$. $r$ = egenkapitalkostnaden (bro til CAPM, Del 6); $g$ = konstant vekstrate i utbyttet. **Regnekjede (nyskrevet, «Bygdeposten Media»):** selskapet betalte nettopp 5 kr i utbytte, forventet vekst 4 %, egenkapitalkostnad 11 %: $\text{DIV}_1 = 5\cdot1{,}04 = 5{,}2$; $P = 5{,}2/(0{,}11-0{,}04) = 74{,}3$ kr. Intuisjon: Gordon = nåverdi av en voksende evig utbyttestrøm (samme formel som kap. 1.2).
- **Oppgavesjangre:** D. Mønstereksempel: «Et selskap betalte i går et utbytte på 6 kr per aksje. Utbyttet ventes å vokse med 3 % årlig. Egenkapitalkostnaden er 9 %. Regn ut aksjeprisen med dividendemodellen.» (Fasit: $6\cdot1{,}03/(0{,}09-0{,}03) = 6{,}18/0{,}06 = 103$ kr.)
- **Typiske feil (analysen §5.2):** Bruke $\text{DIV}_0$ i telleren i stedet for $\text{DIV}_1 = \text{DIV}_0(1+g)$; bruke modellen når $g \ge r$ (gir meningsløst/negativt svar); anta konstant vekst der oppgaven oppgir en fase med høy vekst.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.3: Invertert Gordon og implisitt kapitalkostnad

- **id:** `econ2500-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** econ2500-3-2 · **kapitteltype:** teori
- **description:** Å snu dividendemodellen for å finne markedets implisitte avkastningskrav — og hvorfor to like selskaper kan ha ulik P/E uten feilprising.
- **Eksamensbelegg:** Sjanger D, invertert bruk (V2022 O2d: $2/30 + 2\,\% = 8{,}67\,\%$); kombineres med CAPM ($r_E$ fra CAPM som $r$ i DDM, V2024-utsatt O2c). **A/B-differensiator:** koble multippel-forskjeller til ulik $r$/$g$ i stedet for feilprising. Prioritet: **kunne**.
- **Forkunnskaper:** Bygger på kap. 3.2; peker fram mot CAPM (kap. 6.2) og P/E (kap. 4.2). Symbol- og formelliste: $r$, $\text{DIV}_1$, $P$, $g$, P/E.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: løs Gordon for $r$: $r = \dfrac{\text{DIV}_1}{P} + g$ (direkteavkastning + vekst). Anvendelse: markedets implisitte avkastningskrav; hvorfor et selskap med høyere forventet vekst $g$ har høyere pris/P/E for samme utbytte — **uten** at det betyr feilprising (samme logikk som at høy P/E signaliserer forventet vekst). Kobling: bruk $r_E$ fra CAPM som $r$ i Gordon for å regne «riktig» pris. **Regnekjede (nyskrevet):** aksje koster 80 kr, forventet utbytte neste år 4 kr, vekst 3,5 %: $r = 4/80 + 0{,}035 = 0{,}05 + 0{,}035 = 8{,}5\,\%$.
- **Oppgavesjangre:** D. Mønstereksempel: «En aksje koster 120 kr og ventes å betale 6 kr i utbytte neste år, med 4 % årlig vekst. (a) Hvilket avkastningskrav priser markedet inn? (b) Et sammenlignbart selskap har høyere P/E — forklar hvordan det kan skyldes ulik vekst framfor feilprising.»
- **Typiske feil:** Bruke $\text{DIV}_0$ i telleren; tolke høy P/E automatisk som overprising; glemme vekstleddet $g$ i inversjonen.
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 3:** 4 prøver (se §4).

---

### Del 4 — Multippel-verdsetting *(prioritet: PERFEKT)*

#### Kapittel 4.1: EV/EBITDA-kjeden — fra multippel til aksjeverdi

- **id:** `econ2500-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-1-1 · **kapitteltype:** teori
- **description:** Verdsettingskjeden sensor bruker: fra EV/EBITDA-multippel til selskapsverdi, egenkapital og aksjeverdi — med fortegnsfellen i EV↔egenkapital-broen.
- **Eksamensbelegg:** Sjanger C i 92 % av settene, 20–40 % vekt (V2024 O2c: $(3000-1600+100)/50 = 30$ kr). **Fortegnsfelle:** gjeld trekkes fra og kontanter legges til fra EV til egenkapital. Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 1.1 (nåverdi-intuisjon). Symbol- og formelliste: EV, EBITDA, EBIT, D&A, gjeld, kontanter, Market Cap (egenkapital), antall aksjer $n$, aksjeverdi.
- **Innholdskontrakt:** MÅ KUNNE BEGGE VEIER: $\text{EV} = (\text{EV/EBITDA})\cdot\text{EBITDA}$; **EV→egenkapital-broen:** $\text{Market Cap} = \text{EV} - \text{Gjeld} + \text{Kontanter}$; $\text{Aksjeverdi} = \text{Market Cap}/n$. Motsatt vei: $\text{EV} = \text{Market Cap} + \text{Gjeld} - \text{Kontanter}$. EBITDA to veier: $\text{EBITDA} = \text{driftsinntekter} - \text{varekjøp} - \text{lønn} = \text{EBIT} + \text{D\&A}$ (vis begge som kontroll). Netto gjeld = gjeld − kontanter. **Regnekjede (nyskrevet, «Havbruk Nord»):** EBITDA 500 mill., peer EV/EBITDA = 8, gjeld 1200 mill., kontanter 200 mill., 40 mill. aksjer: $\text{EV} = 8\cdot500 = 4000$; $\text{Market Cap} = 4000 - 1200 + 200 = 3000$; $\text{Aksjeverdi} = 3000/40 = 75$ kr. **Konklusjonskrav:** sammenlign med markedspris → kjøp/hold/selg.
- **Oppgavesjangre:** C. Mønstereksempel: «Havbruk Nord har EBITDA på 600 mill. kr. Sammenlignbare selskaper handles til EV/EBITDA = 7. Selskapet har 1000 mill. i gjeld, 150 mill. i kontanter og 30 mill. aksjer. Regn ut estimert aksjeverdi, og avgjør om aksjen er et kjøp når den handles til 130 kr.»
- **Typiske feil (analysen §5.3):** Feil fortegn i EV↔egenkapital-broen (legge til gjeld / trekke fra kontanter); glemme å dele på antall aksjer; blande EV (hele selskapet) og Market Cap (kun egenkapital).
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 4.2: P/E, EPS og EV/EBIT — multipler ved ulik gjeldsgrad

- **id:** `econ2500-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-4-1 · **kapitteltype:** teori
- **description:** Egenkapital-multipler (P/E) mot selskaps-multipler (EV/EBITDA, EV/EBIT) — og hvorfor P/E blir upålitelig når selskaper har ulik gjeldsgrad.
- **Eksamensbelegg:** Sjanger C, P/E-delen (V2025 O2c; V2022 O2c target-pris). **Sentral nyanse hvert år:** EV-multipler = hele selskapet (upåvirket av kapitalstruktur); P/E = kun egenkapital (påvirket av gjeldsgrad) → ved ulik gjeldsgrad foretrekkes EV-baserte multipler (V2019 O2f, V2024-utsatt O2d). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 4.1 og 3.3 (P/E ↔ implisitt $r$/$g$). Symbol- og formelliste: EPS, P/E, resultat etter skatt, EV/EBIT, target-pris.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: $\text{EPS} = \dfrac{\text{resultat etter skatt}}{n}$; $\text{P/E} = \dfrac{\text{pris}}{\text{EPS}}$; target-pris via peer-multippel: $\text{pris} = (\text{P/E})_{\text{peer}}\cdot\text{EPS}$. EV/EBIT som variant av EV-multipler. **Kjernenyansen:** EV/EBITDA og EV/EBIT verdsetter hele selskapet og er uavhengige av kapitalstruktur; P/E verdsetter kun egenkapitalen og påvirkes av gjeldsgrad (gjeld → rentekostnad → lavere resultat, men også mindre egenkapital) → to ellers like selskaper med ulik gjeldsgrad har ulik P/E, og da er P/E-sammenligning upålitelig; bruk EV-multipler. Høy P/E signaliserer forventet vekst (kobling 3.3). Negativ EBIT/EBITDA gjør multippel-verdsetting meningsløs. **Regnekjede (nyskrevet):** resultat etter skatt 300 mill., 50 mill. aksjer → $\text{EPS} = 6$ kr; peer P/E = 12 → target-pris $= 12\cdot6 = 72$ kr; lavere P/E enn peer = kjøpsmulighet.
- **Oppgavesjangre:** C. Mønstereksempel: «To selskaper i samme bransje har lik EBITDA og lik drift, men selskap A er tungt gjeldsfinansiert og B er gjeldfritt. En analytiker sammenligner dem på P/E. Forklar hvorfor det er misvisende, og hvilken multippel som er mer egnet.»
- **Typiske feil (analysen §5.7):** Bruke P/E til å sammenligne selskaper med ulik gjeldsgrad; bruke multipler på selskap med negativ EBIT/EBITDA; blande EPS (per aksje) og totalt resultat.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 4.3: Drill — multippel-verdsetting og kjøp/hold/selg

- **id:** `econ2500-4-3` · **number:** 4.3 · **estimatedMinutes:** 80 · **prerequisites:** econ2500-4-2 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele verdsettingskjeden, begge veier, med et sjokk som endrer EBITDA og en beslutningskonklusjon.
- **Eksamensbelegg:** Dekker sjanger C (92 %, 20–40 %). Prognosen: neste eksamen har trolig en multippel-oppgave med et sjokk som endrer EBITDA (jf. V2025 handelskrig). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) regn EBITDA (begge veier som kontroll); 2) $\text{EV} = $ multippel $\times$ EBITDA; 3) EV→egenkapital-broen (pass fortegn); 4) aksjeverdi $= $ Market Cap$/n$; 5) sammenlign med markedspris → kjøp/hold/selg; 6) for P/E: EPS → target-pris; 7) drøft valg av multippel ved ulik gjeldsgrad. Gjennomregnet eksamenscase med sensor-margnotater (delpoeng per steg; sunn skepsis til ledelsens *justerte* EBITDA er A/B-markør). 10–15 nyskrevne oppgaver: EV/EBITDA forlengs og baklengs, EBITDA-sjokk (kostnadsøkning/etterspørselsfall), P/E target-pris, EV- vs. P/E-valg, negativ EBITDA-fellen. Alle med `solution` + `hints`.
- **Oppgavesjangre:** C. Mønstereksempel (full kjede): «(a) Regn EBITDA fra driftstallene. (b) Med peer EV/EBITDA = 9, finn EV. (c) Bruk gjeld og kontanter til å finne aksjeverdi. (d) En handelskonflikt kutter EBITDA med 20 % — hva blir ny aksjeverdi, og endrer konklusjonen seg? (e) Bør man stole på ledelsens justerte EBITDA?»
- **Typiske feil:** Fortegn i broen (§5.3); P/E ved ulik gjeldsgrad (§5.7); glemme konklusjonen; ukritisk bruk av ledelsens justerte tall.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (se §4).

---

### Del 5 — Risiko, avkastning og porteføljeteori

#### Kapittel 5.1: Forventning, varians og standardavvik

- **id:** `econ2500-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Å måle forventet avkastning og risiko fra en sannsynlighetsfordeling — regnegrunnlaget under CAPM.
- **Eksamensbelegg:** Varians fra sannsynlighetsfordeling i sjanger E (V2024 O3a; V2025-utsatt O3b; V2023-utsatt O3a–c), 33 % samlet. Sannsynlighetsanslaget «~1/6 sjanse for å falle mer enn ett SD» (V2019 O4a). Prioritet: **kunne** (fundament for perfekt-delen Del 6).
- **Forkunnskaper:** Grunnleggende sannsynlighet (sannsynligheter summerer til 1). Symbol- og formelliste: $p_i$, $r_i$, $E[r]$, Var, SD.
- **Innholdskontrakt:** MÅ KUNNE REGNES: forventning $E[r] = \sum_i p_i r_i$; varians $\text{Var} = \sum_i p_i (r_i - E[r])^2$; volatilitet $\text{SD} = \sqrt{\text{Var}}$. Tommelfingerregelen fra normalfordelingen: ~2/3 av utfallene innenfor $\pm 1$ SD ⇒ ~1/6 ($\approx$16 %) sannsynlighet for å falle **mer enn** ett SD under forventning. **Regnekjede (nyskrevet):** avkastning 20 % (sanns. 0,3), 8 % (0,5), −10 % (0,2): $E[r] = 0{,}3\cdot20 + 0{,}5\cdot8 + 0{,}2\cdot(-10) = 6 + 4 - 2 = 8\,\%$; $\text{Var} = 0{,}3(20-8)^2 + 0{,}5(8-8)^2 + 0{,}2(-10-8)^2 = 0{,}3\cdot144 + 0 + 0{,}2\cdot324 = 43{,}2 + 64{,}8 = 108$; $\text{SD} = \sqrt{108} = 10{,}4\,\%$.
- **Oppgavesjangre:** E. Mønstereksempel: «En aksje gir 25 % i oppgang (sannsynlighet 0,4), 5 % normalt (0,4) og −15 % i nedgang (0,2). Regn ut forventet avkastning, varians og standardavvik.»
- **Typiske feil (analysen §5.9):** Glemme å kvadrere avvikene; glemme å vekte med sannsynlighetene; regne SD som Var (glemme kvadratrot).
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 5.2: Diversifisering — systematisk vs. usystematisk risiko

- **id:** `econ2500-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-5-1 · **kapitteltype:** teori
- **description:** Hvorfor det bare er den systematiske risikoen som prises — og hvordan diversifisering fjerner resten.
- **Eksamensbelegg:** Begrepsdrøftingen sensor krever hvert år (V2025 O3a, V2022 O3b): volatilitet = total risiko; beta = systematisk risiko; usystematisk risiko diversifiseres bort. Direkte fundament for CAPM (Del 6). Prioritet: **kunne** (grensende til perfekt).
- **Forkunnskaper:** Bygger på kap. 5.1. Symbol- og formelliste: SD (total risiko), systematisk/usystematisk (idiosynkratisk) risiko, korrelasjon, diversifisering.
- **Innholdskontrakt:** MÅ KUNNE FORKLARES: total risiko (SD) = systematisk (markeds-)risiko + usystematisk (selskapsspesifikk/idiosynkratisk) risiko. Usystematisk risiko diversifiseres bort i en stor portefølje fordi selskapsspesifikke sjokk delvis opphever hverandre (mulig når korrelasjon < 1). Kun den **systematiske** risikoen bæres av den veldiversifiserte investoren og gir derfor meravkastning; usystematisk risiko premieres ikke. **Sentral innsikt:** en aksje kan ha dobbelt så høy volatilitet som markedet og likevel $\beta = 1$ — differansen er diversifiserbar/usystematisk. Intuisjon om hvorfor korrelasjon (ikke bare antall aksjer) bestemmer hvor mye risiko som kan fjernes.
- **Oppgavesjangre:** E (verbal del). Mønstereksempel: «En aksje har standardavvik på 40 %, mens markedet har 20 %, men aksjens beta er 1. Forklar hvordan det er mulig, og hvilken del av risikoen som gir opphav til meravkastning.»
- **Typiske feil (analysen §5.8):** Blande volatilitet og beta — påstå at høyere volatilitet gir høyere avkastningskrav (kun systematisk risiko prises); tro at all risiko kan diversifiseres bort; glemme korrelasjonens rolle.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.3: Kapitalmarkedslinjen (CML), Sharpe og gearing

- **id:** `econ2500-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-5-2 · **kapitteltype:** teori
- **description:** Å kombinere markedsporteføljen med risikofri plassering — og hvordan gearing gir høyere avkastning mot proporsjonalt høyere risiko.
- **Eksamensbelegg:** Sjanger I i 25 % av settene (V2018 O4d: 12 % krever 30 % SD; V2021 O2c Sharpe). **Avtakende** — kun 2018–2021, ikke 2022–2025 — men grunnleggende for CAPM-forståelsen. Prioritet: **kjenne**.
- **Forkunnskaper:** Bygger på kap. 5.1–5.2. Symbol- og formelliste: $r_f$, $r_M$, $\text{SD}_M$, Sharpe-ratio, CML, gearing.
- **Innholdskontrakt:** MÅ KUNNE BRUKES (kun CML med ett risikabelt aktivum + risikofritt — ALDRI full optimering): kombiner markedsporteføljen med risikofri plassering langs kapitalmarkedslinjen. Sharpe-ratio (CML-helning): $\dfrac{r_M - r_f}{\text{SD}_M}$. For avkastning **over** markedet må man geare (låne til $r_f$ / short risikofritt og kjøpe mer av markedsporteføljen). Proporsjonalitet: dobbelt så høy meravkastning krever dobbelt vekt i aksjer ⇒ dobbelt volatilitet. **Regnekjede (nyskrevet):** $r_f = 3\,\%$, $r_M = 9\,\%$, $\text{SD}_M = 15\,\%$: Sharpe $= (9-3)/15 = 0{,}40$. Vil investoren ha 12 % forventet meravkastning der markedet gir 6 %, må hun geare 2× ⇒ SD $= 30\,\%$.
- **Oppgavesjangre:** I. Mønstereksempel: «Markedet gir 8 % forventet avkastning med 16 % standardavvik; risikofri rente er 2 %. En investor vil ha 11 % forventet avkastning. Hvor mye må hun geare, og hva blir porteføljens standardavvik?»
- **Typiske feil:** Bruke effisient front med flere aktiva (ikke pensum her); glemme at gearing øker volatiliteten proporsjonalt; regne Sharpe med totalavkastning i stedet for meravkastning.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (se §4).

---

### Del 6 — CAPM, beta og prising av risiko *(prioritet: PERFEKT)*

#### Kapittel 6.1: Beta — fra volatilitet·korrelasjon og fra kovarians

- **id:** `econ2500-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-5-2 · **kapitteltype:** teori
- **description:** Å regne betaen — aksjens systematiske risiko — på begge de to måtene sensor bruker.
- **Eksamensbelegg:** Sjanger E i **samtlige sett** (100 %). Beta fra volatilitet·korrelasjon (V2022 O3b, V2023 O1b, V2024 O3b) og fra kovarians (V2018 O4e, krevende variant). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 5.1–5.2. Symbol- og formelliste: $\beta$, $\text{SD}_i$, $\text{SD}_M$, $\text{Corr}(i,M)$, $\text{Cov}(R_i,R_M)$, $\text{Var}(R_M)$.
- **Innholdskontrakt:** MÅ KUNNE REGNES BEGGE VEIER: $\beta = \dfrac{\text{SD}_i \cdot \text{Corr}(i,M)}{\text{SD}_M} = \dfrac{\text{Cov}(R_i,R_M)}{\text{Var}(R_M)}$. Tolkning: beta måler hvor mye aksjen svinger *med markedet* (systematisk risiko); $\beta = 1$ = svinger som markedet; $\beta > 1$ = mer systematisk risiko; $\beta < 0$ = motsyklisk (forsikringsegenskap). **Regnekjede (nyskrevet):** $\text{SD}_i = 32\,\%$, $\text{SD}_M = 16\,\%$, $\text{Corr} = 0{,}5$: $\beta = 32\cdot0{,}5/16 = 16/16 = 1{,}0$ (dobbel volatilitet, men beta = 1 fordi korrelasjonen er 0,5 — kobling til kap. 5.2). Kovarians-variant: $\text{Cov} = 0{,}0128$, $\text{Var}(R_M) = 0{,}0256$ ⇒ $\beta = 0{,}5$.
- **Oppgavesjangre:** E. Mønstereksempel: «En aksje har standardavvik 30 %, markedet 20 %, og korrelasjonen mellom dem er 0,6. Regn ut betaen, og forklar hva den forteller om aksjens systematiske risiko.»
- **Typiske feil:** Bruke $\text{Var}(R_M)$ der $\text{SD}_M$ skal stå (eller omvendt); glemme korrelasjonsleddet (regne $\text{SD}_i/\text{SD}_M$ alene); blande kovarians- og korrelasjonsformelen.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 6.2: CAPM og verdipapirmarkedslinjen (SML)

- **id:** `econ2500-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-6-1 · **kapitteltype:** teori
- **description:** Kapitalverdimodellen: avkastningskravet som funksjon av systematisk risiko — og fellen når oppgaven oppgir meravkastningen direkte.
- **Eksamensbelegg:** Sjanger E i **samtlige sett** (100 %), 15–40 % vekt. **Felle:** oppgir oppgaven markedets meravkastning $(r_M - r_f)$ direkte, settes den rett inn uten å trekke fra $r_f$ på nytt (V2022 O3c, V2025 O3b). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 6.1. Symbol- og formelliste: $r_E$, $r_f$, $\beta$, $r_M$, meravkastning $(r_M - r_f)$, SML.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG FORKLARES: $r_E = r_f + \beta(r_M - r_f)$. Verdipapirmarkedslinjen (SML): forventet avkastning som lineær, stigende funksjon av beta (ALLE korrekt prisede aktiva ligger på SML). $(r_M - r_f)$ = markedets risikopremie. **Felle:** oppgis meravkastningen $(r_M - r_f)$ direkte, brukes den som den er — ikke trekk $r_f$ fra igjen. CAPM gir avkastningskravet som brukes videre som $r$ i Gordon (kap. 3.3) og som $r_E$ i kapitalstruktur (Del 7). **Regnekjede (nyskrevet):** $r_f = 3\,\%$, $\beta = 1{,}2$, $r_M = 8\,\%$: $r_E = 3 + 1{,}2(8-3) = 3 + 6 = 9\,\%$. Variant med oppgitt meravkastning 5 %: $r_E = 3 + 1{,}2\cdot5 = 9\,\%$ (samme svar, men ikke trekk fra $r_f$ igjen).
- **Oppgavesjangre:** E. Mønstereksempel: «Risikofri rente er 2,5 %. En aksje har beta 0,8, og markedets risikopremie er oppgitt til 6 %. Regn ut avkastningskravet med kapitalverdimodellen. Hva blir kravet hvis markedsavkastningen i stedet oppgis til 8,5 %?»
- **Typiske feil (analysen §5.4):** Sette inn $r_M$ der oppgaven oppga meravkastningen $(r_M - r_f)$ (dobbelt fratrekk av $r_f$); glemme $r_f$-leddet foran; bruke total volatilitet i stedet for beta.
- **Quiz: 22 · Flashcards: 20**

#### Kapittel 6.3: Alfa, meravkastning og anomalier

- **id:** `econ2500-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-6-2 · **kapitteltype:** teori
- **description:** Avkastning ut over CAPM (alfa), hva den signaliserer — og hvorfor en positiv alfa kan skyldes at CAPM er ufullstendig, ikke feilprising.
- **Eksamensbelegg:** Sjanger H i 42 % av settene (V2022 O3g: $\alpha = 1\,\% \Rightarrow E[R] = 13\,\%$). **A/B-differensiator:** vurdere anomalier (size/value) som alternativ til alfa. Kobling til NBIM-drøftingen (kap. 8.2). Prioritet: **kunne**.
- **Forkunnskaper:** Bygger på kap. 6.2. Symbol- og formelliste: $\alpha$, $E[R]$, $r_{\text{CAPM}}$, size-effekt, value-effekt (book-to-market).
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG FORKLARES: $\alpha = E[R] - r_{\text{CAPM}}$; positiv alfa ⇒ ligger over SML ⇒ kjøp/overvekt. **Kritisk nyanse:** historisk meravkastning beviser **ikke** forventet alfa — mange forvaltere slår markedet ved flaks. **Anomalier:** små selskaper (size-effekt) og verdiaksjer (høy book-to-market) gjør det systematisk bedre enn CAPM predikerer, så en positiv alfa kan skyldes at CAPM er *ufullstendig*, ikke at markedet er feilpriset. **Regnekjede (nyskrevet):** CAPM-krav 9 %, forventet avkastning 11 % ⇒ $\alpha = 2\,\%$ (positiv, kjøpssignal — men undersøk om det er en size/value-eksponering).
- **Oppgavesjangre:** H. Mønstereksempel: «En aksje har forventet avkastning 12 % mens kapitalverdimodellen tilsier 9 %. (a) Regn ut alfa og angi handlingssignalet. (b) Gi to grunner til at en positiv alfa ikke nødvendigvis betyr at markedet er feilpriset.»
- **Typiske feil:** Tolke historisk meravkastning som garantert framtidig alfa; glemme anomalier som alternativ forklaring; regne alfa mot totalavkastning i stedet for CAPM-kravet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.4: Drill — risiko, beta og CAPM

- **id:** `econ2500-6-4` · **number:** 6.4 · **estimatedMinutes:** 80 · **prerequisites:** econ2500-6-3 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele CAPM-oppgaven: fra sannsynlighetsfordeling til beta, avkastningskrav og alfa.
- **Eksamensbelegg:** Dekker sjanger E (100 %, 15–40 %) og H (42 %). Prognosen: en CAPM/beta-oppgave med varians fra sannsynlighetsfordeling er nesten sikker. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) regn $E[r]$, Var, SD fra fordelingen; 2) beta fra volatilitet·korrelasjon eller kovarians; 3) CAPM-krav (sjekk om meravkastning er oppgitt direkte); 4) alfa = forventet − CAPM; 5) sannsynlighetsanslag (~1/6 utenfor $-1$ SD); 6) verbal del: volatilitet (total) vs. beta (systematisk). Gjennomregnet eksamenscase med sensor-margnotater (skillet volatilitet/beta og «meravkastning oppgitt direkte»-fellen er hyppige delpoeng). 10–15 nyskrevne oppgaver som roterer alle variantene, inkludert negativ beta (forsikring) og $\beta=1$ ved dobbel volatilitet. Alle med `solution` + `hints`.
- **Oppgavesjangre:** E, H. Mønstereksempel (full kjede): «(a) Regn forventning, varians og SD fra fordelingen. (b) Korrelasjonen med markedet er 0,5 og markedets SD er 18 % — finn beta. (c) Regn avkastningskravet ($r_f = 3\,\%$, risikopremie 5 %). (d) Forventet avkastning er 10 % — regn alfa. (e) Forklar hvorfor SD og beta gir ulik risikohistorie.»
- **Typiske feil:** §5.4 (meravkastning-fellen), §5.8 (volatilitet vs. beta), §5.9 (variansregning) samlet.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (se §4).

---

### Del 7 — Kapitalkostnad, kapitalstruktur og Modigliani-Miller *(prioritet: PERFEKT)*

> **Byggeanvisning:** Hele Del 7 (7.1–7.5) bygges av **én agent** — kapitlene deler
> tallgrunnlag og løser samme formel forlengs og baklengs. Flagg for konsistenssjekk.

#### Kapittel 7.1: Selskapets kapitalkostnad $r_U$ som vektet snitt

- **id:** `econ2500-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-6-2 · **kapitteltype:** teori
- **description:** Den unlevered kapitalkostnaden (= WACC uten skatt) som et markedsvektet snitt av egenkapital- og gjeldskostnad — og hvordan man løser den for en ukjent.
- **Eksamensbelegg:** Sjanger F i **samtlige sett** (100 %), 20–40 %. $r_U$ som vektet snitt (V2022 O3d, V2023 O1e, V2024 O4c); løst for én ukjent (V2022 O3f løs for $r_D$; V2025-utsatt O4d løs for gjeldsgrad). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 6.2 ($r_E$ fra CAPM) og [Likningssett](/bok/bi-okonomi/bi-okonomi-2-3) (for å løse en ukjent). Symbol- og formelliste: $r_U$, $r_E$, $r_D$, $E$, $D$, $E/(E+D)$, WACC.
- **Innholdskontrakt:** MÅ KUNNE BRUKES OG LØSES FOR ÉN UKJENT: $r_U = r_E\cdot\dfrac{E}{E+D} + r_D\cdot\dfrac{D}{E+D}$ (unlevered kapitalkostnad = WACC uten skatt = selskapets samlede avkastningskrav). $E$, $D$ = **markedsverdier**. Rangeringen $r_E > r_U > r_D$ **alltid** (egenkapital har prioritet *etter* gjeld ved konkurs og bærer mer risiko). Samme formel løses for $r_E$, $r_D$ eller gjeldsgraden når de andre er kjent. WACC som avkastningskrav i investeringsbeslutninger (kap. 7.2). **Regnekjede (nyskrevet):** $r_E = 12\,\%$, $r_D = 5\,\%$, $E = 600$, $D = 400$: $r_U = 12\cdot0{,}6 + 5\cdot0{,}4 = 7{,}2 + 2{,}0 = 9{,}2\,\%$. Baklengs (løs for $r_D$): gitt $r_U = 9\,\%$, $r_E = 12\,\%$, $E/(E+D)=0{,}6$: $9 = 12\cdot0{,}6 + r_D\cdot0{,}4 \Rightarrow r_D = (9-7{,}2)/0{,}4 = 4{,}5\,\%$.
- **Oppgavesjangre:** F. Mønstereksempel: «Et selskap har egenkapitalkostnad 14 %, gjeldskostnad 6 %, og gjeldsgrad $D/(E+D) = 0{,}3$. (a) Regn ut selskapets kapitalkostnad. (b) Anta i stedet at $r_U = 10\,\%$ er kjent, men $r_D$ er ukjent — løs for $r_D$.»
- **Typiske feil:** Bruke bokførte i stedet for markedsverdier for $E$ og $D$; blande vektene ($E/(E+D)$ på feil ledd); bryte rangeringen $r_E > r_U > r_D$.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 7.2: Gjeldskostnad og WACC som avkastningskrav

- **id:** `econ2500-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-7-1 · **kapitteltype:** teori
- **description:** Gjeldskostnaden når gjelden er risikofri (β_D = 0) versus når den har misligholdsrisiko — og WACC som terskel i investeringsbeslutninger.
- **Eksamensbelegg:** Risikofri gjeld ⇒ $\beta_D = 0 \Rightarrow r_D = r_f$ (V2024 O4b). Gjeldskostnad med misligholdsrisiko $r_D = y - pL$ (V2023 O1d: $6\,\% - 10\,\%\cdot20\,\% = 4\,\%$, 17 %). WACC som avkastningskrav (V2025 O3d–e). Prioritet: **perfekt** (misligholdsdelen: kunne).
- **Forkunnskaper:** Bygger på kap. 7.1, 6.1 (beta) og kap. 3.1 (effektiv rente $y$). Symbol- og formelliste: $r_D$, $\beta_D$, $r_f$, $y$, $p$, $L$, WACC, IRR.
- **Innholdskontrakt:** MÅ KUNNE BRUKES: **risikofri gjeld:** $\beta_D = 0 \Rightarrow r_D = r_f$ (ingen konkurssannsynlighet — sentralt for risikofri-gjeld-fellen i kap. 7.4). **Gjeldskostnad med misligholdsrisiko:** den *forventede* avkastningen på gjeld er lavere enn den *lovede* (yield) fordi noe tapes ved mislighold: $r_D = y - p\,L$ (effektiv rente minus misligholdssannsynlighet · tapsandel). **WACC som avkastningskrav:** et prosjekt med samme risiko som selskapet diskonteres med selskapets WACC/$r_U$; det lønner seg når IRR $>$ WACC (kobling til Del 2). **Regnekjede (nyskrevet):** lovet rente (yield) 8 %, misligholdssannsynlighet 15 %, tapsandel 30 %: $r_D = 8 - 0{,}15\cdot30 = 8 - 4{,}5 = 3{,}5\,\%$. WACC-terskel: prosjekt med IRR 11 % og selskapets WACC 9 % ⇒ gjennomfør.
- **Oppgavesjangre:** F. Mønstereksempel: «Et selskaps gjeld har en effektiv rente (yield) på 7 %. Sannsynligheten for mislighold er 10 %, og ved mislighold tapes 40 % av kravet. (a) Regn ut den forventede gjeldskostnaden. (b) Selskapet vurderer et prosjekt med IRR 9 % og WACC 8 % — bør det gjennomføres?»
- **Typiske feil:** Bruke lovet yield $y$ som gjeldskostnad når gjelden har misligholdsrisiko; sette $r_D \ne r_f$ når gjelden eksplisitt er risikofri; sammenligne IRR med $r_E$ i stedet for WACC ved selskapsrisiko.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.3: Modigliani-Miller uten friksjoner

- **id:** `econ2500-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-7-1 · **kapitteltype:** teori
- **description:** MM-proposisjonene i en friksjonsfri verden: kapitalstruktur påvirker verken selskapsverdi eller $r_U$ — bare fordelingen mellom egenkapital og gjeld.
- **Eksamensbelegg:** Sjanger F, MM-delen (V2024 O4d, V2018 O2c, V2020 O3b: $E+D$ uendret før/etter). Omskrevet form $r_E = r_U + (D/E)(r_U - r_D)$ (V2023-utsatt O4a,c). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 7.1. Symbol- og formelliste: EV, $r_U$, $r_E$, $r_D$, $D/E$, gjeldsgrad.
- **Innholdskontrakt:** MÅ KUNNE FORKLARES OG REGNES: **MM uten friksjoner** — kapitalstruktur påvirker **verken selskapsverdi (EV) eller selskapets kapitalkostnad $r_U$**; bare fordelingen mellom $r_E$ og $r_D$ endres. Egenkapitalkostnaden stiger med gjeldsgrad: $r_E = r_U + \dfrac{D}{E}(r_U - r_D)$ (finansiell gearing øker egenkapitalens risiko). Ved 100 % egenkapital: $r_E = r_U$. Klassisk anvendelse: kjøp opp selskap og innfri gjeld — EV uendret (verdien ligger i eiendelene, ikke i finansieringen). **Regnekjede (nyskrevet):** $r_U = 9\,\%$, $r_D = 5\,\%$, $D/E = 0{,}5$: $r_E = 9 + 0{,}5(9-5) = 9 + 2 = 11\,\%$. Øk $D/E$ til 1: $r_E = 9 + 1\cdot4 = 13\,\%$ — men EV og $r_U$ er uendret.
- **Oppgavesjangre:** F. Mønstereksempel: «Et gjeldfritt selskap har kapitalkostnad 10 %. Det tar opp gjeld til 4 % rente slik at $D/E = 0{,}6$. (a) Regn ut ny egenkapitalkostnad under Modigliani-Miller uten friksjoner. (b) Hva skjer med selskapsverdien og selskapets samlede kapitalkostnad?»
- **Typiske feil:** Tro at gjeld senker $r_U$ / hever EV i en friksjonsfri verden (kun $r_E$ endres); glemme at $r_E$ stiger med gjeldsgrad; bruke $D/(E+D)$ der $D/E$ skal stå i $r_E$-formelen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.4: MM med friksjoner — skatt, konkurskostnader og risikofri-gjeld-fellen

- **id:** `econ2500-7-4` · **number:** 7.4 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-7-3 · **kapitteltype:** teori
- **description:** Hva som endrer MM-konklusjonen i virkeligheten — skattefordel opp, konkurskostnader ned — og sensorens mest gjentatte topp-felle: risikofri gjeld har ingen konkurskostnad-effekt.
- **Eksamensbelegg:** Sjanger F (V2025 O4a, V2024 O4e). **Den mest gjentatte A/B-differensiatoren:** er gjelden risikofri ($\beta_D = 0$, ingen konkurssannsynlighet), har konkurskostnader **ingen** effekt — endret gjeldsgrad påvirker da ikke $r_U$ (V2022 O3e, V2024 O4e). Prioritet: **perfekt**.
- **Forkunnskaper:** Bygger på kap. 7.2–7.3. Symbol- og formelliste: skattefordel (rentefradrag), konkurskostnad, $\beta_D$, risikofri gjeld, moral hazard, asymmetrisk informasjon.
- **Innholdskontrakt:** MÅ KUNNE FORKLARES: med friksjoner trekker **skattefordelen på gjeld** (rentefradrag) verdien **opp**, mens **konkurskostnader** trekker **ned** ved høy gjeld (pluss moral hazard / asymmetrisk informasjon). Optimal gjeldsgrad = der marginal skattefordel = marginal konkurskostnad (trade-off). **KRITISK FELLE (skal drilles til refleks):** konkurskostnad-effekten forutsetter at gjelden er **risikabel**. Er gjelden **risikofri** ($\beta_D = 0$ ⇒ ingen konkurssannsynlighet), finnes **ingen** konkurskostnader å balansere mot — endret gjeldsgrad påvirker da **ikke** $r_U$ eller selskapsverdien. Studenten skal alltid **sjekke om gjelden er risikofri før** hun konkluderer med en konkurskostnad-effekt. **Regnekjede/resonnement (nyskrevet):** to selskaper øker gjelden. Selskap A har fortsatt risikofri gjeld ($r_D = r_f$, $\beta_D = 0$) → ingen konkurskostnad, $r_U$ uendret. Selskap B får misligholdsrisiko på gjelden → konkurskostnader relevante, høyere gjeld kan senke verdien.
- **Oppgavesjangre:** F + G-moment. Mønstereksempel: «Et selskap dobler gjeldsgraden, men gjelden forblir risikofri. En student hevder at økt konkurskostnad nå trekker selskapsverdien ned. Er dette riktig? Begrunn med utgangspunkt i om gjelden er risikabel eller ikke.»
- **Typiske feil (analysen §5.5):** Konkludere med konkurskostnad-effekt uten å sjekke at gjelden er risikabel (den mest gjentatte topp-fellen); glemme skattefordelen; behandle trade-off-teorien som om MM uten friksjoner fortsatt gjelder.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.5: Drill — kapitalkostnad og kapitalstruktur

- **id:** `econ2500-7-5` · **number:** 7.5 · **estimatedMinutes:** 80 · **prerequisites:** econ2500-7-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele kapitalstruktur-oppgaven: $r_U$ forlengs og baklengs, MM med og uten friksjoner, og risikofri-gjeld-fellen.
- **Eksamensbelegg:** Dekker sjanger F (100 %, 20–40 %). Prognosen: en kapitalstruktur-oppgave med unlevered kapitalkostnad + MM med/uten konkurskostnad og risikofri-gjeld-fellen er nesten sikker. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) sett opp $r_U = r_E\,E/(E+D) + r_D\,D/(E+D)$; 2) identifiser den ukjente og løs (forlengs/baklengs); 3) sjekk rangeringen $r_E > r_U > r_D$; 4) $r_E = r_U + (D/E)(r_U - r_D)$ ved endret gjeldsgrad; 5) MM uten friksjoner: EV og $r_U$ uendret; 6) med friksjoner: +skattefordel, −konkurskostnad; 7) **sjekk alltid om gjelden er risikofri før konkurskostnad-konklusjon**; 8) WACC som avkastningskrav (IRR > WACC). Gjennomregnet eksamenscase med sensor-margnotater (risikofri-gjeld-sjekken markeres som A/B-poeng). 10–15 nyskrevne oppgaver: $r_U$ baklengs for $r_D$/gjeldsgrad, $r_E$ ved gearing, oppkjøp med gjeldsinnfrielse (EV uendret), trade-off med/uten risikabel gjeld. Alle med `solution` + `hints`.
- **Oppgavesjangre:** F. Mønstereksempel (full kjede): «(a) Regn $r_U$ fra $r_E = 13\,\%$, $r_D = 5\,\%$, $D/E = 0{,}4$. (b) Selskapet øker $D/E$ til 1 — hva blir ny $r_E$? (c) Skjer det noe med EV under MM uten friksjoner? (d) Nå har gjelden fått misligholdsrisiko — endrer det svaret om konkurskostnader?»
- **Typiske feil:** §5.5 (risikofri-gjeld-fellen) i alle varianter; markedsverdi vs. bokført; brutt $r_E > r_U > r_D$.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (se §4).

---

### Del 8 — Eierstyring, agentproblem og finansielle beslutninger *(drøfting — prioritet: KUNNE)*

#### Kapittel 8.1: Drøftingssjangeren og agentproblemet

- **id:** `econ2500-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-7-3 · **kapitteltype:** teori
- **description:** Hvordan en A-drøfting bygges uten regning — og agentkonfliktene mellom eiere, kreditorer og ledelse.
- **Eksamensbelegg:** Sjanger G i 83 % av settene, alltid siste oppgave, 20–25 %. Agentkonflikter (V2019 O6a–b): eiere vs. kreditorer (asset substitution, debt overhang), eiere vs. ledelse (gjeld disiplinerer). Pecking order (V2019 O6c, V2020 O4). Prioritet: **kunne**.
- **Forkunnskaper:** Bygger på kap. 7.3 (kapitalstruktur). Kapitlet er i hovedsak symbolfritt — Symbol- og formelliste kun ved behov (ingen tunge formler).
- **Innholdskontrakt:** MÅ KUNNE FORKLARES OG DRØFTES (aldri regning): **drøftingsalgoritmen** — 1) identifiser spørsmålet presist (svar KUN på det); 2) definér nøkkelbegrepene; 3) argumentér FOR med fagbegreper; 4) argumentér MOT; 5) nyansér med forutsetninger; 6) konkludér **bare** hvis spurt. **Agentkonflikter:** (a) eiere vs. kreditorer — *asset substitution* (eiere tar overdreven risiko på kreditorenes regning når selskapet er nær konkurs) og *debt overhang* (høy gjeld gjør at eiere avstår gode prosjekter fordi gevinsten tilfaller kreditorene); (b) eiere vs. ledelse — gjeld **disiplinerer** ledelsen (rentekrav tvinger fram resultater, mindre sløsing med fri kontantstrøm). **Pecking order / asymmetrisk informasjon:** aksjeemisjon er et negativt signal (ledelsen selger når aksjen er overpriset) → hakkeorden: internfinansiering → gjeld → emisjon. Forankres i kapitalstruktur-teorien (kap. 7).
- **Oppgavesjangre:** G. Mønstereksempel: «Drøft hvordan høy gjeld kan skape interessekonflikter både mellom eiere og kreditorer og mellom eiere og ledelse. Trekk inn begrepene asset substitution, debt overhang og gjeld som disiplineringsmekanisme.»
- **Typiske feil (analysen §5.10):** Regning i en ren drøftingsoppgave; momentliste uten avveining for/mot; konkludere der oppgaven ikke ber om det (bortkastet tid); svare på mer enn det spørres om.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 8.2: Lederlønn, eierstyring og Oljefondet (NBIM)

- **id:** `econ2500-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** econ2500-8-1, econ2500-6-3 · **kapitteltype:** teori
- **description:** Corporate governance, lederlønn som insentiv, og de faste NBIM-debattene — aktiv vs. passiv forvaltning, etikk og exit/voice — forankret i CAPM.
- **Eksamensbelegg:** Sjanger G. Lederlønn/governance (V2023 O2, V2025 O4b, V2024-utsatt O5 Tesla-tema). NBIM/Oljefondet i 5+ sett (V2022 O4, V2024 O5, V2025 O5, V2023-utsatt O5, V2025-utsatt O5). Prioritet: **kunne**.
- **Forkunnskaper:** Bygger på kap. 8.1, 6.2–6.3 (CAPM, alfa). Symbolfritt kapittel.
- **Innholdskontrakt:** MÅ KUNNE DRØFTES: **lederlønn og corporate governance** — aksje-/opsjonsbonus og LTIP (langsiktige insentivordninger) knytter ledelsens interesser til eiernes, men kan bli for sjenerøse; avveining effektivitet vs. rettferdighet/fordeling; risiko for kortsiktig kursmanipulasjon. **NBIM/Oljefondet:** aktiv vs. passiv forvaltning (aktiv må slå markedet med **positiv alfa netto for kostnader** — vanskelig, jf. kap. 6.3); passiv/indeksnær forvaltning gir markedsavkastning billig; å avvike fra markedsporteføljen krever tro på systematisk feilprising eller særtrekk ved fondet (langsiktig, diversifisert eier); private equity/unoterte aksjer, grønne investeringer, etisk eksklusjon; **exit vs. voice** (selge seg ut vs. bruke eiermakt til å endre selskaper). **Forankring i CAPM:** passiv forvaltning gir gjennomsnittsavkastning; enhver aktiv avvikelse må begrunnes i alfa eller fondsspesifikke fortrinn. Momentbank for/mot per tema.
- **Oppgavesjangre:** G. Mønstereksempel: «Statens pensjonsfond utland vurderer å øke andelen aktivt forvaltede aksjer. Drøft argumentene for og imot aktiv forvaltning for et stort, langsiktig fond, forankret i kapitalverdimodellen. Ikke gi en anbefaling.»
- **Typiske feil:** Momentliste uten avveining; glemme «netto for kostnader»-poenget i alfa-drøftingen; gi anbefaling der oppgaven forbyr det; ikke forankre i CAPM.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 8.3: Drill — drøftingsoppgaven

- **id:** `econ2500-8-3` · **number:** 8.3 · **estimatedMinutes:** 70 · **prerequisites:** econ2500-8-2 · **kapitteltype:** drill
- **description:** Sjangerdrill på siste oppgave: strukturert for/mot om de fire gjengangertemaene, skrevet slik sensor gir uttelling.
- **Eksamensbelegg:** Dekker sjanger G (83 %, 20–25 %). Sensor gir momentliste, ingen fasit; premierer bredde og forankring, ikke standpunkt. Prognosen: en avsluttende drøfting om NBIM eller lederlønn/eierstyring, dagsaktuelt forankret. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser spørsmålet presist; 2) definér begrepene; 3) FOR-argumenter med fagbegreper; 4) MOT-argumenter; 5) nyansér; 6) konkludér kun hvis spurt. Gjennomskrevet A-drøfting med sensor-margnotater (hvor bredde/forankring gir uttelling; «ingen fasit — momentliste vurderes»). 8–12 nyskrevne drøftingsoppgaver på de fire temaene: agentproblem/gjeld, pecking order/emisjonssignal, lederlønn/governance, NBIM (aktiv/passiv, etikk, exit/voice). Alle med et momentbank-`collapsible` som modell-A-svar.
- **Oppgavesjangre:** G. Mønstereksempel: «Et børsnotert selskap vil erstatte fastlønn til toppledelsen med en stor opsjonspakke. Drøft fordeler og ulemper ved dette for eierne og for samfunnet, uten å konkludere.»
- **Typiske feil (analysen §5.10):** Utflytende drøfting uten avveining; regning i drøftingen; anbefaling der det ikke bes om; smalt fokus (bare ett moment).
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 8:** 4 prøver (se §4).

---

### Del 9 — Bør kjenne til: opsjoner, realopsjoner og atferdsfinans

#### Kapittel 9.1: Randtemaer — opsjoner, put-call-paritet, realopsjoner og atferdsfinans

- **id:** `econ2500-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** econ2500-2-1 · **kapitteltype:** teori
- **description:** De lavfrekvente temaene samlet: opsjoners utbetaling og put-call-paritet, realopsjonen i «vent-og-se», og atferdsfinansens disposition-effekt.
- **Eksamensbelegg:** Sjanger J (opsjoner) i 25 % av settene, men **null siden 2021** (V2018 O3, V2020 O5, V2021 O4b) — billig å dekke, lav prognose. Realopsjoner ~8 % (V2018). Atferdsfinans kun ett utsatt-sett (~8 %). **ALDRI Black-Scholes** (aldri testet). Prioritet: **kjenne**.
- **Forkunnskaper:** Bygger på kap. 2.1 (nåverdi) og kap. 3.1 (obligasjon, for konvertibel). Symbol- og formelliste: $S$ (aksjekurs), $K$ (innløsningskurs), $C_0$/$P_0$ (call-/put-premie), $r_F$, call/put-payoff.
- **Innholdskontrakt:** MÅ KUNNE KVALITATIVT + enkel payoff-regning: **opsjoners utbetaling ved utløp:** call $= \max(S-K,\,0)$, put $= \max(K-S,\,0)$ — minst én er alltid null. **Put-call-paritet:** $S_0 + P_0 = C_0 + \dfrac{K}{1+r_F}$, begrunnet med replikering/ingen arbitrasje (identisk utbetaling i begge tilstander $S \ge K$ og $S \le K$). Konvertibel obligasjon = ordinær obligasjon + kjøpsopsjon. Nedside: den som utsteder (short) en salgsopsjon har størst nedside. **Realopsjoner:** en positiv-NNV-investering kan lønne seg å *utsette* fordi retten til å vente har en opsjonsverdi (fleksibilitet ved usikkerhet). **Atferdsfinans:** disposition-effekten (investorer selger vinnere for tidlig og holder tapere for lenge). **Regnekjede (kort):** aksje 120, call med $K=100$: payoff $= \max(120-100,0) = 20$; tilhørende put: $\max(100-120,0)=0$.
- **Oppgavesjangre:** J (kort). Mønstereksempel: «En kjøpsopsjon har innløsningskurs 90 kr. (a) Hva blir utbetalingen ved utløp om aksjen står i 110 kr? Om den står i 80 kr? (b) Forklar kort put-call-paritet som et arbitrasjeargument.»
- **Typiske feil:** Forsøke Black-Scholes (ikke pensum); glemme at minst én av call/put er null ved utløp; blande hvem som har nedside (utsteder vs. innehaver).
- **Quiz: 12 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 korte kjenne-prøver (se §4).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Eksamensstrategi og formelark

- **id:** `econ2500-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–9 · **kapitteltype:** teori
- **description:** Sjangeroversikten, sensorreglene, det komplette formelarket og tidsstyring under 3-timers-presset.
- **Eksamensbelegg:** Metakapittel — samler sjangrene A–J med løsningsoppskriftene fra drillkapitlene (2.4, 4.3, 6.4, 7.5, 8.3) i kortform. Prioritet: **kunne** (studieguidens kjerne sammen med Del 0).
- **Innholdskontrakt:** (1) Sjangerguiden A–J med algoritmene i kortform. (2) **Formelarket** — alle formlene fra innholdskontraktene på én oversikt, gruppert: tidsverdi ($C/r$, $-I+C+C/r$, $C_1/(r-g)$, annuitet), NNV/IRR ($\text{IRR}=C/I$, NNV↔IRR), multipler (EV-kjeden, P/E, EPS), risiko/CAPM ($E[r]$, Var, SD, $\beta$ to veier, CAPM, $\alpha$), kapitalstruktur ($r_U$, $r_E = r_U+(D/E)(r_U-r_D)$, $r_D = y-pL$, risikofri gjeld). (3) De fem sensorreglene + feltguide til delpoeng. (4) Feilkatalogen (de 10 typiske feilene med henvisning til kapitlet som forebygger dem). (5) Tidsbudsjett-metodikk: minutter per oppgave = vekt% × 180 min. (6) Studieløp (perfekt-delene 2, 4, 6, 7 først etter fundamentene 1 og 5).
- **Oppgavesjangre:** Alle (oversikt). Mønstereksempel: «Et sett har vektene 10/25/25/20/20 og varer 180 minutter. Sett opp et tidsbudsjett per oppgave, og angi hvilken løsningsoppskrift hver oppgave utløser.»
- **Typiske feil:** Feil tidsprioritering; glemme konklusjon/enhet; regning i drøftingen.
- **Quiz: 12 · Flashcards: 30**

#### Kapittel 10.2: Øvingseksamen 1 — standardmalen (5 oppgaver)

- **id:** `econ2500-10-2` · **number:** 10.2 · **estimatedMinutes:** 180 · **prerequisites:** econ2500-10-1 · **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett etter post-2022-malen: NNV/IRR + multippel + CAPM + kapitalstruktur + drøfting.
- **Eksamensbelegg/miks:** Speiler et typisk V2024/V2025-sett (vekting 10/25/25/20/20): **O1 NNV/IRR 10 %** (evig strøm «starter i dag» + IRR-refleksjon) + **O2 multippel-verdsetting 25 %** (EV/EBITDA → aksjeverdi → P/E → kjøp/hold/selg) + **O3 CAPM/beta 25 %** (varians fra fordeling → beta → krav → alfa) + **O4 kapitalstruktur 20 %** ($r_U$ + MM med/uten konkurskostnad + risikofri-gjeld-fellen) + **O5 drøfting 20 %** (NBIM aktiv/passiv). Alle oppgaver nyskrevne, egne selskaps-/tallcase. Løsningsforslag som A-besvarelse i `collapsible` per oppgave, med `tip`-notat om delpoeng og tidsbudsjett (18/45/45/36/36 min).
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 2 — sammenhengende verdsettingscase

- **id:** `econ2500-10-3` · **number:** 10.3 · **estimatedMinutes:** 180 · **prerequisites:** econ2500-10-2 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2023-mønsteret: én stor sammenhengende verdsettingscase (80 %) + drøfting (20 %).
- **Eksamensbelegg/miks:** Speiler V2023 (vekting 80/20): **O1 case 80 %** — et nyskrevet selskap («Fjordkraft Marine») regnes gjennom i én kjede: NNV av utbyggingsprosjekt (evig strøm) → IRR = $C/I$ → gjensidig utelukkende valg (skala/timing) → CAPM-krav → $r_U$ → EV/EBITDA-verdsetting → aksjeverdi → kjøp/hold/selg, med en nøytral skattevariant à la grunnrenteskatt (IRR uendret, NNV skaleres ned) — **O2 drøfting 20 %** (agentproblem/lederlønn). Deloppgavene bygger på samme tallgrunnlag; **følgefeil straffes ikke**. Løsningsforslag som A-besvarelse; `tip`-notat viser hvordan følgefeil håndteres.
- **Quiz: 6 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 3 — sjokk-varianten (5 oppgaver)

- **id:** `econ2500-10-4` · **number:** 10.4 · **estimatedMinutes:** 180 · **prerequisites:** econ2500-10-3 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2025-mønsteret med et makrosjokk som forplanter seg gjennom EBITDA, beta og gjeldskostnad.
- **Eksamensbelegg/miks:** Speiler V2025 (vekting 10/25/25/20/20) med et gjennomgående sjokk (nyskrevet: en internasjonal handelskonflikt): **O1 NNV/IRR 10 %** + **O2 multippel 25 %** (sjokket kutter EBITDA → ny aksjeverdi, endrer konklusjonen) + **O3 CAPM/beta 25 %** (varians fra fordeling, meravkastning oppgitt direkte-fellen) + **O4 kapitalstruktur 20 %** (gjeldskostnad med misligholdsrisiko $r_D = y-pL$ + WACC som avkastningskrav + risikofri-gjeld-fellen) + **O5 drøfting 20 %** (lederlønn/eierstyring, dagsaktuelt). Justert for å treffe sjangrene D (Gordon) og H (alfa) som Øvingseksamen 1 ikke dekket i dybden. Løsningsforslag som A-besvarelse med vektings-tips.
- **Quiz: 6 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 12 |
| 1 | 1.1–1.3 | 20+24+20 = **64** | 18+20+16 = **54** |
| 2 | 2.1–2.4 | 22+22+20+18 = **82** | 20+20+18+8 = **66** |
| 3 | 3.1–3.3 | 14+20+16 = **50** | 16+18+14 = **48** |
| 4 | 4.1–4.3 | 22+22+18 = **62** | 20+22+8 = **50** |
| 5 | 5.1–5.3 | 20+18+16 = **54** | 16+20+16 = **52** |
| 6 | 6.1–6.4 | 22+22+16+18 = **78** | 18+20+18+8 = **64** |
| 7 | 7.1–7.5 | 20+18+20+20+18 = **96** | 18+18+20+22+8 = **86** |
| 8 | 8.1–8.3 | 16+16+12 = **44** | 22+24+14 = **60** |
| 9 | 9.1 | 12 | 16 |
| 10 | 10.1–10.4 | 12+6+6+6 = **30** | 30+0+0+0 = **30** |
| **Sum** | **34 kap.** | **582 ≥ 500 ✓** | **538 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: de fire perfekt-delene (2, 4, 6, 7) bærer 318 av 582
quiz. Flashcard-tettheten er løftet i de begrepsrike drøftings- og MM-kapitlene
(Del 7 og 8: 146 flashcards) fordi faget — til tross for å være et regnefag —
har en tung begreps- og drøftingsside (agentteori, corporate governance, MM,
CAPM-forståelse) som må pugges. Regnetunge drillkapitler har lav flashcard-kvote
(8 hver) siden ferdigheten sitter i oppgaver, ikke i kort.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9, 36 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag,
poengfordeling og enhet i svaret. Bygges som `econ2500-<del>-prove`
(chapterNumber `<del>.P`). Omfang i minutter.

**Del 1 — Tidsverdi av penger**
1. Prøve 1.A (25 min): Diskontering og flerperiodisk nåverdi — 5 oppgaver (sjanger A).
2. Prøve 1.B (30 min): Evige og voksende strømmer, inkl. «starter i dag»-fellen (sjanger A).
3. Prøve 1.C (25 min): Annuiteter og endelige strømmer (sjanger A).
4. Prøve 1.D (35 min): Blandet — velg riktig formel til hver kontantstrømtype, med konklusjon (sjanger A, eksamensnivå).

**Del 2 — NNV og internrente**
1. Prøve 2.A (30 min): NNV som beslutningsregel, konklusjonskrav (sjanger A).
2. Prøve 2.B (30 min): Internrente og NNV↔IRR-koblingen, IRR = $C/I$ (sjanger A).
3. Prøve 2.C (30 min): Gjensidig utelukkende prosjekter + navngi IRR-svakheten (sjanger B).
4. Prøve 2.D (40 min): Full oppgave-1-kjede à la eksamen (sjanger A + B, eksamensnivå).

**Del 3 — Verdsettelse av obligasjoner og aksjer**
1. Prøve 3.A (25 min): Obligasjonsverdi og effektiv rente (kort, sjanger A).
2. Prøve 3.B (30 min): Gordon forlengs, $\text{DIV}_0(1+g)$-timing (sjanger D).
3. Prøve 3.C (25 min): Invertert Gordon → implisitt $r$; P/E-kobling (sjanger D).
4. Prøve 3.D (35 min): Integrert — CAPM-krav inn i Gordon, med kjøp/hold-vurdering (sjanger D + E).

**Del 4 — Multippel-verdsetting**
1. Prøve 4.A (30 min): EV/EBITDA-kjeden → aksjeverdi, fortegn i broen (sjanger C).
2. Prøve 4.B (30 min): P/E, EPS, target-pris; EV- vs. P/E-valg ved ulik gjeldsgrad (sjanger C).
3. Prøve 4.C (30 min): Baklengs (EV fra Market Cap) + EBITDA to veier (sjanger C).
4. Prøve 4.D (40 min): Full verdsettingsoppgave med EBITDA-sjokk og konklusjon (sjanger C, eksamensnivå).

**Del 5 — Risiko og porteføljeteori**
1. Prøve 5.A (30 min): Forventning, varians, SD fra fordeling + 1/6-anslaget (sjanger E).
2. Prøve 5.B (25 min): Systematisk vs. usystematisk risiko, diversifisering (sjanger E, verbal).
3. Prøve 5.C (30 min): CML, Sharpe og gearing (sjanger I).
4. Prøve 5.D (35 min): Blandet risikooppgave med volatilitet-vs-beta-drøfting (sjanger E + I).

**Del 6 — CAPM, beta og prising av risiko**
1. Prøve 6.A (30 min): Beta begge veier (volatilitet·korrelasjon og kovarians) (sjanger E).
2. Prøve 6.B (30 min): CAPM/SML, meravkastning-oppgitt-direkte-fellen (sjanger E).
3. Prøve 6.C (25 min): Alfa og anomalier (size/value) (sjanger H).
4. Prøve 6.D (40 min): Full CAPM-kjede fordeling → beta → krav → alfa (sjanger E + H, eksamensnivå).

**Del 7 — Kapitalkostnad, kapitalstruktur og MM**
1. Prøve 7.A (30 min): $r_U$ forlengs og baklengs (løs for $r_D$/gjeldsgrad) (sjanger F).
2. Prøve 7.B (30 min): Gjeldskostnad risikofri vs. misligholdsrisiko + WACC-terskel (sjanger F).
3. Prøve 7.C (35 min): MM uten friksjoner + $r_E = r_U+(D/E)(r_U-r_D)$; MM med friksjoner (sjanger F).
4. Prøve 7.D (45 min): Full kapitalstruktur-oppgave med **risikofri-gjeld-fellen** (sjanger F, eksamensnivå).

**Del 8 — Eierstyring og agentproblem**
1. Prøve 8.A (30 min): Agentkonflikter eiere/kreditorer/ledelse (sjanger G).
2. Prøve 8.B (30 min): Pecking order og emisjonssignal (sjanger G).
3. Prøve 8.C (30 min): Lederlønn og corporate governance, for/mot (sjanger G).
4. Prøve 8.D (35 min): NBIM-drøfting, aktiv/passiv forankret i CAPM, uten anbefaling (sjanger G, eksamensnivå).

**Del 9 — Bør kjenne til**
1. Prøve 9.A (20 min): Opsjoners payoff (call/put ved utløp) (sjanger J).
2. Prøve 9.B (20 min): Put-call-paritet som arbitrasjeargument (sjanger J).
3. Prøve 9.C (15 min): Realopsjonen — når vente på positiv-NNV-prosjekt (kort).
4. Prøve 9.D (15 min): Atferdsfinans — disposition-effekten (kort).

### Øvingseksamener (3 komplette sett — se kap. 10.2–10.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 10.2) | Post-2022 standard (V2024/V2025) | NNV/IRR 10 % + multippel 25 % + CAPM 25 % + kapitalstruktur 20 % + drøfting 20 % |
| Øvingseksamen 2 (kap. 10.3) | Case-varianten (V2023) | Sammenhengende verdsettingscase 80 % (NNV→IRR→CAPM→$r_U$→multippel→aksjeverdi) + drøfting 20 % |
| Øvingseksamen 3 (kap. 10.4) | Sjokk-varianten (V2025) | NNV/IRR 10 % + multippel m/EBITDA-sjokk 25 % + CAPM 25 % + kapitalstruktur m/misligholdsrisiko 20 % + drøfting 20 % |

Til sammen dekker de tre settene samtlige sentrale sjangre A–H minst én gang;
sjangrene I og J drilles i prøvene (Del 5.C, Del 9).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kap. 10.1 + kapitlenes
Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3-timers Inspera, A–F, obligatorisk case-adgangskrav), den faste 4–5-oppgave-malen, vektingshistorikken og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: **perfekt** (Del 2 NNV/IRR, Del 4 multippel, Del 6 CAPM/beta, Del 7 kapitalstruktur/MM), **kunne** (Del 1 tidsverdi, Del 3 Gordon, Del 5 risiko, Del 8 drøfting), **kjenne** (Del 9 opsjoner/realopsjoner/atferd, CML-dybde, gjeldskostnad med mislighold).
3. **Sjangerguiden** — de ti oppgavetypene A–J med løsningsoppskriftene fra drillkapitlene (2.4, 4.3, 6.4, 7.5, 8.3) i kortform (fra kap. 10.1).
4. **Formelarket** — alle formlene fra innholdskontraktene på én oversikt (fra kap. 10.1), med markering utlede/regne aktivt vs. kun bruke.
5. **Sensorreglene** — de fem metareglene + karakterskille-listen (risikofri-gjeld-fellen, multippel↔kapitalstruktur-koblingen, hvilken IRR-svakhet, anomalier vs. alfa, skepsis til ledelsens tall) fra kap. 0.1.
6. **Feilkatalogen** — de ti typiske feilene samlet (fra analysen §5), hver med henvisning til kapitlet som forebygger den: (1) glemt «starter i dag»-ledd, (2) $\text{DIV}_0$ i stedet for $\text{DIV}_1$, (3) fortegn i EV↔egenkapital-broen, (4) $r_M$ der meravkastning var oppgitt, (5) konkurskostnad uten å sjekke om gjelden er risikabel, (6) IRR-rangering / uspesifisert svakhet, (7) P/E ved ulik gjeldsgrad, (8) volatilitet vs. beta, (9) variansregning, (10) drøfting uten avveining.
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → Del 1 → Del 2 (perfekt) → Del 5 → Del 6 (perfekt) → Del 7 (perfekt) → Del 3 → Del 4 (perfekt) → Del 8 → Del 9; prøvene underveis, øvingseksamenene de tre siste ukene under tidspress (180 min, vektstyrt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ2500` med alle 34 kapitler (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`. `sectionNames` = del-nummer → seksjonstitlene i §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–J og frekvenstallene som resten refererer til.
3. **Perfekt-delene i avhengighetsrekkefølge**: Del 1 (tidsverdi) → Del 2 (NNV/IRR). Deretter Del 5 → Del 6 (CAPM). Deretter Del 7 (kapitalstruktur — **én agent for hele delen**, jf. §2-avviket). Del 4 (multippel) kan bygges etter Del 1.
4. Del 3 → Del 8 → Del 9 → Del 10 (øvingseksamenene til slutt — de gjenbruker alt).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene ferdigstilles; prøvene (§4) bygges som `econ2500-<del>-prove`-kapitler etter hver temadel.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$`; ingen unicode-brøker; konsistente subskript ($r_E$, $r_U$, $r_D$, $r_f$, $r_M$, $\beta_D$, $\text{DIV}_1$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ2500-filer — forbudte termer: «Black-Scholes» (unntatt kap. 9.1s eksplisitte «ikke pensum»-avgrensning), «effisient front» (porteføljedelen bruker kun CML med ett risikabelt aktivum). Påkrevd notasjon fra §1-tabellen — ingen alternative symboler.
- [ ] **Tallregning overalt**: hver regneoppgave har eksplisitt formeloppsett → innsatte tall → svar med **enhet** (kr/mill./%) → **konklusjon**. Løsningsforslag demonstrerer delvis uttelling for formeloppsett og at følgefeil ikke straffes.
- [ ] **Fellene drillet**: «starter i dag»-leddet ($-I+C+C/r$), $\text{DIV}_0(1+g)$-timing, EV↔egenkapital-fortegn, meravkastning-oppgitt-direkte, og **risikofri-gjeld-fellen** har hver minst én advarsel + én eksamensklone-oppgave.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene herfra), Typiske feil-`warning`, Forkunnskaper-`text` + Symbol- og formelliste-`collapsible`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 582 og flashcard-sum ≥ 538** per kvotetabellen (kontrollsummér mot §3).
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener som sammen dekker sjangrene A–J.
- [ ] **Kryssbok-lenker**: alle `/bok/bi-okonomi/...`-lenker peker på eksisterende kapitler (`bi-okonomi-1-1` … `-4-5`, `-2-2`, `-2-3` er verifisert).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne selskapsnavn (Nordvik Solar, Bygdeposten Media, Havbruk Nord, Fjordkraft Marine, …), egne tall, egne scenarioer; **ikke Hexagon Composites**; ingen formuleringer fra reelle sett eller sensorveiledninger; pensumlitteratur (Berk & DeMarzo) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + innhold), jf. lærdommen om `getChapterMeta`.
