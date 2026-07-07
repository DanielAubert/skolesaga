# Bokskjelett: TDT4136 Introduksjon til kunstig intelligens — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (9 ordinære NTNU-sett med offisielle løsningsforslag, høst
> 2015 – høst 2023; emneansvarlig gjennom det meste Pinar Öztürk (H2016 Odd Erik
> Gundersen); pensum Russell & Norvig — *Artificial Intelligence: A Modern
> Approach* (AIMA)). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori / drill / øvingseksamen) er obligatoriske og gjentas ikke i sin helhet
> her. **All notasjon, alle algoritmenavn og all logikknotasjon følger AIMA** (det
> er bokstandard fordi oppgavene og fasitene gjør det). Alle oppgaver, tall, grafer,
> spilltrær, CSP-er, logiske KB-er og innpakninger i den ferdige boka skal være
> **nyskrevne** (opphavsrett): algoritmenavn og standardnotasjon er allmenn faglig
> notasjon, men ingen oppgavetekster eller løsningsforslag fra reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4136` |
| Tittel | **TDT4136 Introduksjon til kunstig intelligens (NTNU)** |
| Institusjon | **NTNU** (finnes allerede i `institusjoner.ts` fra tdt4120 — legg tdt4136 under samme institusjon) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste, gjentakende «kjør-algoritmen-for-hånd»-mønstre) |
| Antall kapitler | **42** (1 eksamenskart + 37 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 3 020 min ≈ 50 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **712** (krav ≥500) |
| Flashcards totalt | **610** (krav ≥500) |
| Prøver | **44** (4 per temadel 1–11) + **3 øvingseksamener** (kap. 12.2–12.4) |

**Pitch (én avsnitt):** TDT4136 har et påfallende stabilt eksamensskjelett. Vurderingen
er én **firetimers skoleeksamen** (100 %, A–F) med **hjelpemiddelkode D — bestemt enkel
kalkulator, ingen trykte eller håndskrevne hjelpemidler**. Eksamen er **ikke rent
flervalg**: den er en blanding av (1) **«kjør algoritmen for hånd»-oppgaver** — kjernen
og det karaktergivende — der studenten produserer ekspansjonsrekkefølger, nodeverdier,
beskårne grener, prunede domener eller en resolusjonskjede steg for steg; (2) **korte
teori-/kortsvarsspørsmål**; og (3) **sant/usant og flervalg med negativ retting** i de
eldre settene. Faget har **ingen delprøve som teller** — alt må kunnes utenat. Det finnes
ingen enkelt «kjerneoppgave»: **bredden er selve eksamensformen.** Sju temaer er
100 %-gjengangere (dukker opp *hvert eneste år*) — **uinformert + informert søk,
A\*-heuristikk, CSP, logikk/resolusjon, adversarielt søk, planlegging og intelligente
agenter** — og en typisk eksamen består av nøyaktig én oppgave fra hver, pluss en bolk
korte teorispørsmål og (nesten alltid) én spillteorioppgave. Du kan ikke droppe et av de
sju og satse på at det ikke kommer. Denne boka driller derfor bredden systematisk, med to
kalibrerte ferdigheter: (1) å **utføre pensumalgoritmene feilfritt for hånd med synlig
utledning**, og (2) å **gjenkjenne hvilken pensumalgoritme** en innpakket fortelling
(kaniner, gullesker, ulv/geit/kål, wumpus, robot i labyrint) reduseres til. Hvert av de
sju 100 %-temaene får teorikapittel(-ler) + eget drillkapittel.

**Kritisk stilregel (gjelder HELE boka) — «vis utledningen»:**
1. **Poeng for synlig utledning, ikke for svaret.** Sensors viktigste metaregel:
   for søk/minimax/CSP/resolusjon er det **rekkefølgen og verdiene / klausulkjeden** som
   gir uttelling, ikke prosaen. **«Skriv bare stien / bare svaret» uten å vise kø,
   ekspansjon, nodeverdier eller klausulkjede gir NULL** (eksplisitt håndhevet). Hvert
   løsningsforslag i boka viser derfor apparatet: køtilstand/ekspansjonsrekkefølge (søk),
   nodeverdier nedenfra-opp + pruning-begrunnelse `v ≥ β` / `v ≤ α` (adversarielt), prunet
   domene per bue (AC-3), full klausulkjede til ⊥ med unifikasjon (logikk).
2. **Følg oppgitt tie-breaking bokstavelig.** Feil bruddregel (venstre-til-høyre på
   etterfølgere, eller alfabetisk) gir feil ekspansjonssekvens **selv om metoden er
   riktig**. Alle drill- og eksempelløsninger oppgir og bruker tie-breaking eksplisitt.
3. **Fasiten er raus med alternative korrekte svar.** Særlig for logikk-oversettelser,
   PDDL-formuleringer, PEAS-beskrivelser og etikk/drøftespørsmål finnes sjelden ett riktig
   svar. Boka lærer at fasiten viser bare *ett* eksempel, og markerer i drøftekapitlene at
   «beslektede korrekte svar godtas bredt». Ta likevel med **hovedpoenget først** —
   delvis uttelling er regelen.
4. **Kode D, ingen oppslag.** Alt må kunnes utenat: algoritmene, definisjonene (admissibel,
   konsistent, Nash, mutex), logikknotasjonen og CNF-prosedyren. Flashcards og quiz er
   kalibrert som ren gjenkalling.
5. **AIMA-navn og -notasjon er fasit.** Bruk nøyaktig AIMA-formene (`A*`, `f=g+h`, AC-3,
   `Alldiff`, minimax, expectiminimax, GraphPlan, PEAS, `∀ ∃ ¬ ∧ ∨ ⇒ ⇔`) siden oppgavene
   og fasiten forventer gjenkjenning. Engelsk fagterm kan gis i parentes ved første
   forekomst; ved tvil om oversatte begreper regnes **den engelske teksten som fasit**.

**Kritisk pensumregel (NLP/IR er UTGÅTT — skal stå tydelig i Del 0):**
NLP og informasjonsgjenfinning (**presisjon/recall/F1, sentimentanalyse, bag-of-words,
n-gram-språkmodeller, stoppord, informasjonsekstraksjon**) var et tungt tema 2015–2017
(Gundersen-æraen, opptil 20 av 100 poeng) men er **helt fraværende fra og med 2018** og
skal **ikke** inn i boka annet enn som en historisk fotnote i Del 0. Dette er den største
fellen for en naiv analyse: studenter som pugger gamle sett kaster bort tid på et utgått
tema. Boka bygges mot **2018–2023-formatet**.

**Kritisk pensumregel (nyere tilskudd SKAL med, tross lav historisk frekvens):**
De ferskeste settene (2022–2023, fasit v/ Sánchez Díaz) har innført **expectiminimax,
Monte Carlo-tresøk (MCTS), belief states / delvis observerbare miljø og KI-etikk/
rettferdighet**. Lav historisk frekvens (11–33 %), men i klar vekst og treffer den
sittende emneansvarliges profil — de dekkes derfor eksplisitt (Del 6, Del 10, Del 11).

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «Notasjons- og algoritmeliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et KI-fag er det presise
  apparatet ikke matematiske symboler, men **algoritmer, logikknotasjon og CSP-/plan-/
  spillteori-begreper**. Blokken heter derfor **«Notasjons- og algoritmeliste»** og lister
  ALT delkapitlet bruker: (i) hver algoritme kapitlet kjører, med **inn/ut-kontrakt** i én
  linje (f.eks. «`A*` — grafsøk med `f(n)=g(n)+h(n)`, ekspanderer noden med lavest `f`;
  optimal ved konsistent `h`»); (ii) all **logikknotasjon** (`¬ ∧ ∨ ⇒ ⇔ ∀ ∃ ⊨ ⊥`, CNF,
  Horn-klausul, unifikator `θ`, resolvent); (iii) **CSP-/plan-/spillbegreper** brukt
  (`Alldiff`, buekonsistens, MRV/LCV, PRECOND/EFFECT, mutex, `α/β`, `Σ pᵢ·vᵢ`, dominant
  strategi, Nash). Regelen «per delkapittel, ikke arv fra tidligere» beholdes. Unntak kun
  for helt notasjonsfrie kapitler (finnes knapt — Del 0 og etikk-kapitlet).
- **`theorem`-blokker brukes for algoritme-kontrakter OG nøkkelresultater.** Der DNA-en
  bruker `theorem` for matematiske resultater, brukes den her for (a) **algoritme-kontrakter**:
  hvert algoritmekapittel har en `theorem`-blokk «Algoritme-kontrakt» som gir algoritmen
  (nyskrevet AIMA-stil pseudokode) med **datastruktur (frontier-type), måltest-tidspunkt,
  fullstendighet, optimalitet og kompleksitet** — for BFS/DFS/UCS/IDS/Greedy/A*, AC-3,
  backtracking, minimax, alfa-beta, expectiminimax, GraphPlan; og (b) **nøkkelresultatene**
  som skal sitte i ryggmargen: konsistens ⇒ admissibilitet (ikke omvendt); A* grafsøk
  optimal ved konsistent `h`; konsistent `h` ⇒ hver node ekspanderes bare én gang; snittet
  `½h₁+½h₂` av to admissible er admissibelt; dominans ⇒ færre ekspansjoner;
  resolusjonsrefutasjon er komplett (`A ⊨ B ⟺ (A ∧ ¬B)` utilfredsstillbar);
  ignore-delete-list-heuristikken er admissibel.
- **Flashcards kalibreres som algoritme ↔ egenskap ↔ kompleksitet + logikkregler.**
  Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`. For dette faget
  parer hvert kort et **navn** (algoritme/begrep/notasjon) med presis **egenskap +
  kompleksitet/krav** (f.eks. «BFS → fullstendig; optimal ved *like* stegkostnader;
  `O(b^d)` tid og minne; måltest ved *generering* i AIMA»; «Konsistent heuristikk →
  `h(n) ≤ c(n,n') + h(n')` for hver kant ⇒ admissibel, én ekspansjon per node i A*»;
  «Modus tollens → av `P⇒Q` og `¬Q` slutt `¬P`»). Fordi eksamen er kode D er dette
  puggematerialet.
- **Quiz kalibreres som kode D-faktakontroll (MC), T/F-strategien trenes separat.** Den
  reelle eksamen er blandet frisvar + T/F med **negativ retting** — men plattformens quiz
  er MC. Quiz brukes derfor til **kunnskapskontroll med entydig fasit**: egenskapsfakta,
  «admissibel eller ikke?», «hvilken algoritme ekspanderer noden med lavest `f`?»,
  definisjonsgjenkjenning, «stemmer dette?» (ja/nei). Selve håndkjørings-**presisjonen** og
  utledningsdisiplinen trenes i `exercise`- og drillkapitlene (som har `solution` +
  `hints`). Den strategiske disiplinen ved **negativ T/F-retting** (+2 rett, −1 galt, 0
  blankt — svar bare når du er sikker) trenes eksplisitt i kap. 12.1. `options[0]` = riktig
  svar (runtime stokker).
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent sjanger må drilles umiddelbart etter teorien. Del 12 beholder T/F-strategien,
  sjangerguiden og de komplette øvingseksamenene.
- **Kapittelantall (42) overstiger DNA-veiledningen (20–35).** Bevisst, frekvensdrevet:
  **bredden er eksamensformen** (sju likt komne 100 %-temaer + spillteori + lokalt søk +
  kunnskapsrepr. + tre ferske vekst-temaer). Kan ikke komprimeres uten å underdekke et
  garantert tema. Hver del holdes likevel stram; `kjenne`-temaer får kompakte kapitler.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): agenter/problemformulering først,
så søk (uinformert → informert → lokalt), så CSP (søk over begrensninger), så adversarielt
søk + spillteori, så logikk, så planlegging, til slutt de ferske vekst-temaene og
eksamenstreningen. Frekvensen styrer *omfanget* — de sju «må beherskes perfekt»-temaene får
teori + eget drillkapittel; nivå 2/3-temaer får kompakte kapitler. `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rommer NLP-utgått-advarselen. |
| 1 | Intelligente agenter, miljøer og KI-grunnlag | 5 | **Agenter/PEAS 100 %** (nivå 1) + miljøegenskaper + agenttyper + kunnskapsrepr. 78 % + KI-historie 56 % → 4 teori + PEAS-drill. |
| 2 | Uinformert søk | 4 | **Uinformert søk 100 %** (nivå 1, kjernen i kjør-for-hånd). Problemformulering + BFS/DFS/UCS + IDS/tresøk → 3 teori + drill. |
| 3 | Informert søk, A\* og heuristikker | 5 | **Informert søk + A\*-heuristikk 100 %** (nivå 1, tyngste analyse). Greedy/A\* + admissibel/konsistent/dominans + heuristikk-design → 3 teori + kjør-drill + egenskaps-drill. |
| 4 | Lokalt søk og optimering | 2 | **Lokalt søk 78 %** (nivå 2). Hill-climbing/simulert annealing/genetiske alg. → 1 teori + drill. |
| 5 | CSP: constraint-graf, AC-3 og backtracking | 4 | **CSP 100 %** (nivå 1, mest stabile oppgavefamilie). Formulering/graf + AC-3 + backtracking MRV/LCV → 3 teori + drill. |
| 6 | Adversarielt søk: minimax, alfa-beta, expectiminimax og MCTS | 4 | **Adversarielt søk 100 %** (nivå 1). Minimax + alfa-beta + expectiminimax/MCTS/vektor-minimax → 3 teori + drill. |
| 7 | Spillteori | 2 | **Spillteori 67 %** (nær 100 % moderne æra, nivå 2). Utbetalingsmatrise, dominans, Nash, Pareto/velferd → 1 teori + drill. |
| 8 | Logikk: utsagn, predikat og resolusjon | 5 | **Logikk 100 %** (nivå 1). Utsagn+CNF + resolusjonsrefutasjon + predikat/kvantorer + FOL-CNF/skolem/unifikasjon → 4 teori + drill. |
| 9 | Planlegging: PDDL, regresjon og GraphPlan | 4 | **Planlegging 100 %** (nivå 1). PDDL/STRIPS + regresjon + GraphPlan/PoP → 3 teori + drill. |
| 10 | Usikkerhet og delvis observerbare miljø | 1 | **Belief states 11 %↑ (nytt H2023)** + Bayes-intro (bakgrunn) → 1 kompakt teori. Nivå 3, dekk-men-kort. |
| 11 | KI-etikk og rettferdighet | 1 | **Etikk 33 %↑ (voksende)**, nivå 3. Individuell rettferdighet, forklarbarhet, bias — drøftespørsmål. |
| 12 | Eksamenstrening | 4 | T/F-strategi + sjangerguide + **3 komplette øvingseksamener** (6–9 oppgaver, kjør-for-hånd + teori). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene i
siste del. Her ligger hvert temas drillkapittel (1.5 PEAS, 2.4 uinformert søk, 3.4 kjør
informert søk, 3.5 heuristikk-egenskaper, 4.2 lokalt søk, 5.4 CSP, 6.4 adversarielt, 7.2
spillteori, 8.5 logikk, 9.4 planlegging) inne i sin temadel, fordi hver er en 67–100 %-
gjenganger som må drilles umiddelbart etter teorien. Del 12 beholder T/F-strategien,
sjangerguiden og de komplette øvingseksamenene.

---

## 3. Sjangerkatalog (A–J)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. Merk de **tre svartypene** som går på tvers: (1) **kjør-for-hånd** (den
karaktergivende kjernen — vis apparatet), (2) **kortsvar/teori** («forklar hvorfor»,
«design en admissibel heuristikk»), (3) **sant/usant + flervalg med negativ retting** (særlig
eldre sett — svar bare når du er sikker).

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | Kjør uinformert + informert søk for hånd (BFS/DFS/UCS/IDS/Greedy/A\*) — oppgi ekspansjons-/måltestrekkefølge, sti, kostnad; tie-breaking eksakt | kjør-for-hånd | **100 %** |
| **B** | A\*-heuristikk: admissibilitet, konsistens (intervall for ukjent `h`), dominans; motbevis | kjør-for-hånd + begrunnelse | **100 %** |
| **C** | CSP: constraint-graf, AC-3 (med re-sjekk), backtracking MRV/LCV, forward checking | kjør-for-hånd | **100 %** |
| **D** | Logikk: oversett NL→logikk, CNF, resolusjonsrefutasjon til ⊥ (utsagns + predikat) | kjør-for-hånd + oversettelse | **100 %** |
| **E** | Adversarielt søk: minimax nedenfra-opp, alfa-beta m/begrunnet pruning, expectiminimax | kjør-for-hånd | **100 %** |
| **F** | Planlegging: PDDL/STRIPS-skjema, regresjon (baklengs, 3 steg), GraphPlan/mutex, PoP | kjør-for-hånd + skjema | **100 %** |
| **G** | Intelligente agenter: PEAS m/begrunnelse, klassifisér miljø langs 6 dimensjoner, agenttyper | kortsvar/teori | **100 %** |
| **H** | Spillteori: utbetalingsmatrise, iterert eliminering, Nash, Pareto/velferd | kjør-for-hånd + begrunnelse | **67 %** (nær 100 % moderne) |
| **I** | Lokalt søk + korte teori-/agentspørsmål (hill-climbing/SA/GA, KI-historie, kunnskapsrepr., MCTS, belief states, **KI-etikk**) | kortsvar/drøfting | lokalt søk 78 %; teoribolk hvert sett |
| **(Hist.) J** | NLP / informasjonsgjenfinning (presisjon/recall/F1, sentiment, bag-of-words) | — | **UTGÅTT etter 2017** — kun historisk fotnote |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». For dette faget: **Innholdskontrakt** =
definisjoner/teoremer/**algoritme-kontrakter** kapitlet SKAL lære (med AIMA-notasjon).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3). Hvert
teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` → Forkunnskaper-`text` +
Notasjons-og-algoritmeliste-`collapsible` → Motivasjon → `definition`/`theorem` (inkl.
algoritme-kontrakt) → utledning m/intuisjon (kun der eksamen krever aktiv utledning) → 2–4
`example` (siste på eksamensnivå) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender
på eksamensnivå, alle med `solution` + `hints`) → Repetisjons-`collapsible`. Drillkapitler:
Eksamensvinkel → løsningsoppskrift → sensor-kommentert case → 8–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4136

- **id:** `tdt4136-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers kode D-eksamen, blandet kjør-for-hånd + kortsvar + T/F), temafrekvensene, sjangerkatalogen A–J og lesestrategien som styrer hele boka — inkludert hva som er UTGÅTT.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2015–2023. Skal gjengi: (i) **formen** — skriftlig skoleeksamen **4 timer** (09–13), A–F, teller 100 %, **hjelpemiddelkode D** (bestemt enkel kalkulator); ingen delprøve som teller → alt utenat; (ii) at eksamen er **ikke rent flervalg**, men en blanding av tre svartyper: **kjør-algoritmen-for-hånd** (kjernen, karaktergivende), **korte teori-/kortsvarsspørsmål**, og **sant/usant + flervalg med negativ retting** (+2 rett, −1 galt, 0 blankt, gulv 0 — særlig 2015–2018); (iii) **temafrekvens-tabellen** (§2 i analysen): uinformert+informert søk 100 %, A\*-heuristikk 100 %, CSP 100 %, logikk 100 %, adversarielt søk 100 %, planlegging 100 %, intelligente agenter 100 %, lokalt søk 78 %, kunnskapsrepr. 78 %, spillteori 67 % (nær 100 % moderne), KI-historie 56 %, KI-etikk 33 %↑, belief states 11 %↑, MCTS 11 %↑; (iv) at **bredden er eksamensformen** — én oppgave fra hvert av de sju 100 %-temaene hvert år, ingen «kjerneoppgave» å satse på; (v) **NLP/IR-advarselen** — presisjon/recall/F1, sentiment, bag-of-words var tungt 2015–2017 men er **UTGÅTT fra 2018**; studenter som pugger gamle sett kaster bort tid; (vi) **sensors metaregler** (§4): poeng for synlig utledning (bare svaret = null), følg tie-breaking bokstavelig, fasiten raus med alternative korrekte svar, delvis uttelling (hovedpoeng først), robust sensur til kandidatens fordel, negativ retting på T/F.
- **Innholdskontrakt:** Sjangerkatalogen A–J (§3) som studentens sjekkliste med typisk vekt. Pluss **prognosen for neste ordinære eksamen (kode D)**: 6–9 oppgaver, sum 100, jevnt fordelt ≈ 1 søkeoppgave (A) + 1 A\*-heuristikk (B) + 1 CSP (C) + 1 logikk (D) + 1 adversariell (E) + 1 planlegging (F) + 1 PEAS-/agentbolk (G) + sannsynligvis 1 spillteori (H) + korte teorispørsmål (I: lokalt søk / belief states / etikk / MCTS). Avslutt med **leseplanen**: de sju «må perfekt»-delene (1 agenter, 2 uinformert søk, 3 informert søk/A\*, 5 CSP, 6 adversarielt, 8 logikk, 9 planlegging) er kjernen; nivå 2 (4 lokalt søk, 7 spillteori, kunnskapsrepr.) avgjør C→A; nivå 3 (10 belief states, 11 etikk, MCTS, KI-historie) merkes «bør kjenne til, differensierer topp og treffer dagens profil».
- **Oppgavesjangre:** Ingen algoritmeoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Hvilke sju temaer kan du IKKE droppe, og hvorfor gjør bredden det umulig å satse?» og «Et gammelt sett bruker 20 poeng på presisjon/recall — bør du øve på det? Begrunn.»
- **Typiske feil:** Metafeilene — bruke tid på utgått NLP-stoff; satse på at et av de sju 100 %-temaene ikke kommer; skrive bare sluttsvaret uten utledning (null poeng); gjette på T/F med negativ retting; tro at man kan slå opp (kode D: bare kalkulator).
- **Quiz: 16 · Flashcards: 16** (form, svartyper, frekvenser, metaregler, sjangerkatalogen, NLP-utgått)

---

### Del 1 — Intelligente agenter, miljøer og KI-grunnlag *(agenter/PEAS: PERFEKT)*

> Agenter/PEAS er en 100 %-gjenganger, som regel i en kortsvars- eller PEAS-oppgave (sjanger
> G). Miljøklassifisering langs de faste dimensjonene og agenttypene er det faste apparatet.
> Kunnskapsrepresentasjon (78 %) og KI-historie (56 %) gir billige kortsvarspoeng og bor her.

#### Kapittel 1.1: Rasjonelle agenter og PEAS

- **id:** `tdt4136-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hva en rasjonell agent er, og **PEAS**-rammeverket (Performance, Environment, Actuators, Sensors) for å spesifisere en oppgave — med begrunnelse, ikke bare navngiving.
- **Eksamensbelegg:** Sjanger G, 100 %. En **PEAS-beskrivelse med begrunnelse** er fast krav. Fasiten er raus (flere korrekte svar) — men krever begrunnelse for hvert element. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **rasjonell agent** (velger handlingen som maksimerer forventet ytelsesmål gitt persepsjonshistorikk og kunnskap); **PEAS** (én `definition` per bokstav: Performance = ytelsesmål/suksesskriterium; Environment = omgivelsene; Actuators = handlingsorganer; Sensors = persepsjonsorganer). Prinsippet om rasjonalitet. Skillet agent vs. rasjonell agent vs. allvitende agent (rasjonalitet ≠ allvitenhet — man handler på *forventet* ytelse gitt tilgjengelig info). Fullstendig PEAS-eksempel gjennomført (nyskrevet scenario, f.eks. lagerrobot eller anbefalingsagent) med begrunnelse per element.
- **Oppgavesjangre:** G. Mønstereksempel (nyskrevet): «Gi en PEAS-beskrivelse for en agent som skal spille et brettspill mot en motstander. Begrunn hvert av de fire elementene.»
- **Typiske feil:** Navngi PEAS-elementer uten begrunnelse (fasiten krever begrunnelse); blande Performance (målet) med Actuators (midlene); tro rasjonell = allvitende / alltid vellykket.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.2: Miljøegenskaper — de seks dimensjonene

- **id:** `tdt4136-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-1-1` · **kapitteltype:** teori
- **description:** Klassifisering av oppgavemiljøet langs de faste dimensjonene — og de subtile skillene sensor tester (stokastisk vs. ikke-deterministisk vs. strategisk).
- **Eksamensbelegg:** Sjanger G, 100 %. Fast: klassifisér et gitt miljø og **begrunn**. Robust sensur — flere konsistente tolkninger godtas (dokumentert H2020/H2021). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` per dimensjon: **fullt vs. delvis observerbart**; **en-agent vs. fleragent**; **deterministisk vs. stokastisk**; **episodisk vs. sekvensielt**; **statisk vs. dynamisk**; **diskret vs. kontinuerlig**. Kritiske distinksjoner (egne `definition`/`warning`): **stokastisk** (sannsynligheter tallfestes) vs. **ikke-deterministisk** (utfallene kjent men ikke kvantifisert) vs. **strategisk** (stokastisiteten skyldes andre agenter). Klassifiseringstabell for 3–4 nyskrevne miljøer (f.eks. sjakk, selvkjørende bil, kryssord, poker) langs alle seks dimensjoner med begrunnelse.
- **Oppgavesjangre:** G. Mønstereksempel: «Klassifisér et gitt trafikkmiljø langs de seks dimensjonene, og forklar forskjellen på stokastisk og strategisk i denne sammenhengen.»
- **Typiske feil:** Klassifisere uten begrunnelse; forveksle stokastisk (tallfestet) med ikke-deterministisk (ukvantifisert); tro «fleragent» automatisk betyr stokastisk (det er strategisk); kalle et miljø dynamisk fordi *agenten* endrer det (dynamikk = endring mens agenten *delibererer*).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 1.3: Agenttyper og tilstandsrepresentasjon

- **id:** `tdt4136-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4136-1-2` · **kapitteltype:** teori
- **description:** De fire agenttypene (simpel refleks → modellbasert → målbasert → nyttebasert) og de tre tilstandsrepresentasjonene (atomær/faktorisert/strukturert) — inkludert hvorfor delvis observerbare miljø krever minne/modell.
- **Eksamensbelegg:** Sjanger G + I, 100 % (agenttyper) / 78 % (representasjon). Ofte «tegn arkitekturdiagram» (H2022) eller «hvorfor trenger denne agenten modell?». Prioritet: **perfekt** (agenttyper), **kunne** (representasjon).
- **Innholdskontrakt:** `definition` per agenttype: **simpel refleks** (kondisjon-handling-regler, ingen intern tilstand); **modellbasert refleks** (holder intern tilstand/modell av verden); **målbasert** (velger handlinger som når et mål — krever søk/planlegging); **nyttebasert** (maksimerer en nyttefunksjon, håndterer motstridende mål og usikkerhet). `definition` **atomær** (tilstand = udelelig helhet), **faktorisert** (tilstand = sett attributter/features — lar deg trekke ut trekk for heuristikk og usikkerhet), **strukturert** (objekter og relasjoner). Kobling: hvorfor en agent i **delvis observerbart** miljø trenger **minne/modell** og opererer på **belief states** (peker mot Del 10). Hvorfor **randomisert atferd** kan være rasjonell i konkurrerende fleragentmiljø (uforutsigbarhet).
- **Oppgavesjangre:** G + I. Mønstereksempel: «Hvilken agenttype trengs for en agent i et delvis observerbart miljø, og hvorfor holder ikke en simpel refleksagent? Skisser arkitekturen.»
- **Typiske feil:** Forveksle modellbasert (intern tilstand) med målbasert (fremtidsrettet søk); tro nyttebasert = målbasert (nytte gir gradering, ikke bare ja/nei); blande faktorisert og strukturert; ikke koble delvis observerbarhet til behov for modell/belief state.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.4: KI-historie, filosofi og kunnskapsrepresentasjon

- **id:** `tdt4136-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De faste kortsvarspoengene: Turing-testen, Dartmouth-konferansen, GPS/Newell & Simon, Searles kinesiske rom — og kunnskapsrepresentasjon (semantiske nett, arv, rammer).
- **Eksamensbelegg:** Sjanger I, KI-historie 56 % + kunnskapsrepr. 78 %. **Billige kortsvarspoeng hvis du kan navnene.** Prioritet: **kjenne** (men lettjente poeng). ⚠️ NLP/IR nevnes KUN her som historisk fotnote (utgått fra 2018).
- **Innholdskontrakt:** `definition`-kort: **Turing-testen** (operasjonelt intelligensmål via ikke-skillbarhet i samtale); **Dartmouth-konferansen 1956** (fagets fødsel, navnet «artificial intelligence»); **GPS / Newell & Simon** (General Problem Solver, mål-middel-analyse); **Searles kinesiske rom** (argument mot at symbolmanipulasjon = forståelse — sterk vs. svak KI). Kunnskapsrepresentasjon: **semantiske nettverk** (noder + relasjoner, **arv** som slutningsmekanisme); **rammer/frames** (slotter med default-verdier og **prosedyre-tilknytning / «demoner»**). Kort `text` om atomær/faktorisert/strukturert kobling til representasjon. `warning`-fotnote: NLP/IR (presisjon/recall/F1, bag-of-words) var pensum 2015–2017, **utgått** — ikke prioriter.
- **Oppgavesjangre:** I (kortsvar). Mønstereksempel: «Forklar Searles kinesiske rom-argument med én setning, og hva det er ment å vise om symbolmanipulasjon.» + «Hvordan fungerer arv som slutningsmekanisme i et semantisk nettverk?»
- **Typiske feil:** Forveksle Dartmouth (1956, navngivningen) med Turing (1950, testen); tro kinesiske rom argumenterer *for* sterk KI; blande semantiske nett (relasjoner + arv) med rammer (slotter + demoner); bruke tid på utgått NLP-stoff.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 1.5: DRILL — PEAS og miljøklassifisering

- **id:** `tdt4136-1-5` · **number:** 1.5 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4136-1-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger G: skriv PEAS med begrunnelse og klassifisér et gitt miljø langs de seks dimensjonene, raskt og komplett.
- **Eksamensbelegg:** Sjanger G, 100 % (fast PEAS-/agentbolk hvert sett). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **PEAS**: 1) identifisér ytelsesmålet (P) presist; 2) beskriv miljøet (E); 3) list handlingsorganene (A) og sensorene (S); 4) begrunn hvert element kort. For **miljøklassifisering**: gå gjennom de seks dimensjonene i fast rekkefølge, oppgi verdi + én setnings begrunnelse; flagg tvilstilfeller (robust sensur). Gjennomkjørt sensor-kommentert case med margnotater (uttelling krever begrunnelse, ikke bare navn). 8–12 oppgaver: PEAS for nyskrevne agenter + miljøklassifisering + agenttypevalg + «hvorfor randomisering er rasjonell».
- **Oppgavesjangre:** G, I. Mønstereksempel: «For en robotstøvsuger: gi PEAS med begrunnelse og klassifisér miljøet langs alle seks dimensjonene.»
- **Typiske feil:** Navn uten begrunnelse; hoppe over en dimensjon; stokastisk vs. strategisk (§1.2); velge feil agenttype for delvis observerbart miljø.
- **Quiz: 18 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Intelligente agenter, miljøer og KI-grunnlag)
1. Prøve 1.A (25 min): PEAS med begrunnelse for 2–3 nyskrevne agenter (sjanger G).
2. Prøve 1.B (25 min): Miljøklassifisering langs de seks dimensjonene + stokastisk/strategisk (G).
3. Prøve 1.C (25 min): Agenttyper + tilstandsrepresentasjon + belief-state-motivasjon (G/I).
4. Prøve 1.D (25 min): KI-historie + kunnskapsrepresentasjon — kortsvar (I).

---

### Del 2 — Uinformert søk *(uinformert søk: PERFEKT)*

> Kjør-for-hånd-søk (sjanger A) er den dominerende og karaktergivende oppgaveformen.
> Del 2 bygger apparatet (problemformulering + BFS/DFS/UCS/IDS); A\* og heuristikker
> kommer i Del 3. Drillen (2.4) er der de garanterte poengene ligger.

#### Kapittel 2.1: Problemformulering og søketrær

- **id:** `tdt4136-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4136-1-1` · **kapitteltype:** teori
- **description:** Hvordan et søkeproblem formuleres (tilstandsrom, starttilstand, handlinger, overgangsmodell, måltest, stegkostnad) og skillet **tresøk vs. grafsøk**.
- **Eksamensbelegg:** Grunnlaget for alle sjanger A-oppgaver, 100 %. Det **kritiske skillet**: «tree-like search» (ingen sjekk av besøkte/løkker, per AIMA) vs. grafsøk (closed-sett). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **søkeproblem** (starttilstand, `Actions(s)`, `Result(s,a)`, `Goal-Test`, `Path-Cost`/`c(s,a,s')`); **tilstandsrom**, **søketre**, **frontier/kø**, **ekspandere** (generere en nodes etterfølgere), **måltest**. `definition` **tresøk** (ingen besøkt-sjekk — kan gjenbesøke/løkke) vs. **grafsøk** (closed-sett, hver tilstand ekspanderes én gang). Konsekvens (`warning`): i **rent tresøk** kan DFS/Greedy gå i **evig løkke** og returnere «ingen sti» (∅). Generisk søkealgoritme-kontrakt (`theorem`): frontier-strategien alene skiller BFS/DFS/UCS. Tie-breaking-konvensjon (venstre-til-høyre / alfabetisk) oppgis alltid og følges eksakt.
- **Oppgavesjangre:** Forbereder A. Mønstereksempel: «Formulér ulv/geit/kål-kryssingen som et søkeproblem: oppgi tilstandsrepresentasjon, starttilstand, handlinger og måltest.»
- **Typiske feil:** Legge til besøkt-sjekk i rent tresøk (eller motsatt) og ikke oppdage evig løkke; utydelig tilstandsrepresentasjon; blande node (sti-i-treet) med tilstand.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 2.2: BFS, DFS og uniform-cost search

- **id:** `tdt4136-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-2-1` · **kapitteltype:** teori
- **description:** De tre grunnleggende uinformerte strategiene — datastruktur, måltest-tidspunkt, fullstendighet, optimalitet og kompleksitet — kjørt for hånd.
- **Eksamensbelegg:** Sjanger A, 100 %. **Måltest-tidspunktet i BFS (generering vs. ekspansjon)** er en fremhevet felle (H2023). Prioritet: **perfekt**.
- **Innholdskontrakt:** Algoritme-kontrakter (`theorem`): **BFS** (FIFO-frontier; **måltest ved *generering*** i AIMA-varianten; fullstendig; optimal ved *like* stegkostnader; `O(b^d)` tid/minne); **DFS** (LIFO/stakk; måltest ved ekspansjon; ikke fullstendig i tresøk; ikke optimal; `O(b^m)` tid, `O(bm)` minne); **UCS / uniform-cost** (min `g` først, prioritetskø; **måltest ved ekspansjon (pop), ikke generering**; fullstendig + optimal ved ikke-negative kostnader). Sammenligningstabell: strategi → frontier → måltest → fullstendig? → optimal? → tid/minne. Hvorfor UCS må måltest ved pop (en billigere sti kan dukke opp etter generering). Kjør-for-hånd-format: oppgi (i) ekspansjons-/måltestrekkefølge, (ii) returnert sti, (iii) stikostnad.
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet graf): «Kjør BFS og UCS på grafen under (tie-break alfabetisk). Oppgi for hver: rekkefølgen noder måltestes, returnert sti og kostnad.»
- **Typiske feil:** Feil måltest-tidspunkt i BFS (ved ekspansjon i stedet for generering — §5.5 i analysen); UCS måltest ved generering (må være ved pop); kalle BFS optimal ved ulike stegkostnader (kun ved like); bare oppgi stien uten kø/ekspansjon (null poeng).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.3: Iterativ dybdesøk og tresøkets fallgruver

- **id:** `tdt4136-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-2-2` · **kapitteltype:** teori
- **description:** Dybdebegrenset søk og **iterativ dybdesøk (IDS)** med cutoff per dybde, pluss hvorfor rent tresøk lar DFS/Greedy løkke i det uendelige.
- **Eksamensbelegg:** Sjanger A. IDS med dybdegrense forekommer (H2022, ulv/geit/kål); tresøk-løkke er fast (H2023: `S, A, A, A, …`). Prioritet: **perfekt** (IDS **kunne**, tresøk-løkke **perfekt**).
- **Innholdskontrakt:** Algoritme-kontrakt (`theorem`): **dybdebegrenset søk** (DFS med grense `ℓ`); **IDS** (kjør dybdebegrenset for `ℓ=0,1,2,…`; kombinerer DFS' minne `O(bd)` med BFS' fullstendighet/optimalitet ved like kostnader; `O(b^d)` tid). Vis **stakken og cutoff per dybde**. `warning`/utledning: i rent tresøk uten besøkt-sjekk vil DFS/Greedy på en graf med løkke ekspandere samme node om og om igjen → **returnerer ∅ («ingen sti»)**; fasiten godtar både dette og et svar med besøkt-sjekk, men **vær konsekvent**. Hvorfor gjentatt arbeid i IDS er akseptabelt (nederste nivå dominerer).
- **Oppgavesjangre:** A. Mønstereksempel: «Kjør IDS med økende dybdegrense på treet under. Vis noder utforsket per iterasjon og hvor cutoff inntreffer.» + «Kjør DFS som *rent tresøk* på grafen med løkke — hva returneres?»
- **Typiske feil:** Ikke vise cutoff per dybde i IDS; legge til besøkt-sjekk i rent tresøk og dermed «redde» DFS fra løkken (oppgaven ba om tresøk); tro IDS kaster bort mesteparten av arbeidet (nederste nivå dominerer).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.4: DRILL — Kjør uinformert søk for hånd

- **id:** `tdt4136-2-4` · **number:** 2.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4136-2-3` · **kapitteltype:** drill
- **description:** Systematisk drill i sjanger A (uinformert del): kjør BFS/DFS/UCS/IDS på grafer og trær med korrekt tie-breaking, måltest-tidspunkt og synlig kø.
- **Eksamensbelegg:** Sjanger A i hvert sett (100 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) noter tie-breaking-regelen og **følg den eksakt**; 2) avgjør tresøk vs. grafsøk (er besøkt-sjekk bedt om?); 3) for hver algoritme: vis frontier-tilstanden ved hvert steg, hvilken node som ekspanderes/måltestes, og **når** måltesten skjer; 4) oppgi (i) rekkefølge, (ii) sti, (iii) kostnad. Fast fellekatalog som SKAL demonstreres: måltest-tidspunkt i BFS, UCS-pop-måltest, tresøk-løkke i DFS/Greedy, tie-breaking. Gjennomkjørt sensor-kommentert eksamenscase med margnotater om at **bare sluttstien = null poeng**. 12–15 oppgaver som roterer alle algoritmene og fellene.
- **Oppgavesjangre:** A. Mønstereksempel: «Kjør BFS, DFS (rent tresøk), UCS og IDS på grafen under (tie-break venstre-til-høyre). Vis kø/stakk ved hvert steg.»
- **Typiske feil:** Hele fellekatalogen samlet (måltest-tidspunkt, tresøk-løkke, tie-breaking, bare-svaret-uten-utledning).
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (Uinformert søk)
1. Prøve 2.A (25 min): Problemformulering + tresøk vs. grafsøk (sjanger A-forberedende).
2. Prøve 2.B (30 min): Kjør BFS + UCS med tie-breaking og korrekt måltest (A).
3. Prøve 2.C (30 min): Kjør DFS + IDS, inkl. tresøk-løkke og cutoff per dybde (A).
4. Prøve 2.D (35 min): Blandet — alle fire algoritmer på én graf, sammenlign rekkefølge/sti/kostnad (A).

---

### Del 3 — Informert søk, A\* og heuristikker *(A\*-heuristikk: PERFEKT)*

> To 100 %-temaer bor her: å **kjøre** informert søk (Greedy/A\*, sjanger A) og å
> **resonnere om heuristikkegenskaper** (admissibel/konsistent/dominans, sjanger B). B er
> fagets tyngste analyseoppgave (intervall for ukjent `h`, kant-for-kant). Begge får drill.

#### Kapittel 3.1: Greedy best-first og A\*

- **id:** `tdt4136-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-2-2` · **kapitteltype:** teori
- **description:** De to informerte strategiene — Greedy (`f=h`) og A\* (`f=g+h`) — mekanikk, optimalitet og hvordan de kjøres for hånd.
- **Eksamensbelegg:** Sjanger A, 100 %. A\* er kjernen; Greedy kontrasteres (kan løkke i tresøk). Prioritet: **perfekt**.
- **Innholdskontrakt:** Algoritme-kontrakter (`theorem`): **Greedy best-first** (`f(n)=h(n)`, min `h` først; ikke optimal; kan løkke i tresøk); **A\*** (`f(n)=g(n)+h(n)`, min `f` først, måltest ved pop; **optimal ved admissibel `h` (tresøk) / konsistent `h` (grafsøk)**). Sammenligning UCS (`f=g`) / Greedy (`f=h`) / A\* (`f=g+h`). Kjør-for-hånd-format: vis `g`, `h`, `f` per node og frontier ved hvert steg. Hvorfor A\* er optimalt (kort intuisjon: en admissibel `h` undervurderer aldri, så en suboptimal måltilstand får `f` ≥ optimal kostnad og ekspanderes ikke først).
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet graf m/`h`-verdier): «Kjør A\* på grafen (tie-break alfabetisk). Vis `g`, `h`, `f` for hver ekspandert node, returnert sti og kostnad.»
- **Typiske feil:** Blande `f=g+h` (A\*) med `f=h` (Greedy) eller `f=g` (UCS); måltest ved generering i A\* (må være ved pop); ikke vise `g/h/f`-oppslaget (bare stien = null).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.2: Admissibilitet, konsistens og dominans

- **id:** `tdt4136-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-3-1` · **kapitteltype:** teori
- **description:** De tre heuristikkegenskapene — admissibel, konsistent/monoton, dominans — med de eksakte ulikhetene og hvordan man løser ut et **intervall** for en ukjent `h`.
- **Eksamensbelegg:** Sjanger B, 100 % — fagets tyngste analyseoppgave. **Alle kant-ulikheter må settes opp**, inkl. til målnoden (`h(mål)=0`). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **admissibel** (`h(n) ≤ h*(n)`, overvurderer aldri billigste kostnad til mål); **konsistent/monoton** (`h(n) − h(n') ≤ c(n,n')` for hver kant, ekvivalent `h(n) ≤ c(n,n') + h(n')`); **dominans** (`h₂` dominerer `h₁` hvis `h₂(n) ≥ h₁(n)` for alle `n`, begge admissible). `theorem` nøkkelresultater: **konsistens ⇒ admissibilitet** (ikke omvendt); ved konsistent `h` **ekspanderes hver node bare én gang** i A*-grafsøk; **dominans ⇒ `h₂` ekspanderer aldri flere noder** enn `h₁`; snittet `½h₁+½h₂` av to admissible er admissibelt (lineær transformasjon); en **inadmissibel** `h` kan *likevel* gi optimal sti hvis overvurderingen er mindre enn gapet til nest-beste sti. **Metode for ukjent `h`**: sett opp **én ulikhet per kant** (begge retninger + til mål), løs ut **intervallet** (f.eks. `4 ≤ h(B) ≤ 6`). Motbevis for inadmissibilitet (ett konkret `h(n) > h*(n)`).
- **Oppgavesjangre:** B. Mønstereksempel: «For grafen under: hvilket intervall for `h(B)` gjør heuristikken konsistent? Sett opp alle kant-ulikheter (inkl. til målnoden).» + «Er `h` admissibel? Vis motbevis om ikke.»
- **Typiske feil:** Ufullstendig konsistenssjekk — bare noen kanter, ikke alle par inkl. målnoden (§5.7, avvist eksplisitt H2017); forveksle admissibel («aldri overvurdér») med konsistent (kant-for-kant); tro konsistens = admissibilitet begge veier (kun én vei); hevde dominant `h` alltid gir kortere kjøretid uten å nevne kravet «begge admissible».
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 3.3: Heuristikk-design ved relaksering

- **id:** `tdt4136-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4136-3-2` · **kapitteltype:** teori
- **description:** Hvordan man **konstruerer** admissible heuristikker ved å slappe av («relaxere») begrensninger — med 8-puzzle som det klassiske eksempelet.
- **Eksamensbelegg:** Sjanger B/I, 100 % (ofte «design en admissibel heuristikk»). Klassiske 8-puzzle-heuristikker forventes kjent. Prioritet: **perfekt** (design), fasit raus (flere gyldige heuristikker).
- **Innholdskontrakt:** `text`/utledning: en **relaksert** versjon av problemet (fjern begrensninger i handlingsskjemaet) gir en heuristikk som er **admissibel** (relaksert løsning ≤ ekte løsning). 8-puzzle: **antall feilplasserte brikker** (`h₁`) og **Manhattan-avstand** (`h₂`) — utled dem som relakseringer, og vis at `h₂` **dominerer** `h₁`. Hvordan man kombinerer heuristikker (`max(h₁,h₂)` er admissibel om begge er det). Hvorfor konsistens er ønskelig (én ekspansjon per node → effektivitet).
- **Oppgavesjangre:** B/I. Mønstereksempel: «Design to admissible heuristikker for et gitt puslespill ved relaksering. Vis hvorfor den ene dominerer den andre.»
- **Typiske feil:** Foreslå en heuristikk som overvurderer (ikke fra en relaksering); tro `max(h₁,h₂)` kan bryte admissibilitet (det gjør det ikke om begge er admissible); påstå Manhattan og feilplasserte er like sterke (Manhattan dominerer).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 3.4: DRILL — Kjør informert søk for hånd

- **id:** `tdt4136-3-4` · **number:** 3.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4136-3-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger A (informert del): kjør Greedy og A\* på grafer med `h`-verdier, med `g/h/f`-oppslag, tie-breaking og synlig frontier.
- **Eksamensbelegg:** Sjanger A i hvert sett (100 %). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) noter tie-breaking; 2) for hver node ekspandert: vis `g`, `h`, `f=g+h`; 3) vis frontier sortert på `f` ved hvert steg; 4) måltest ved pop; 5) oppgi rekkefølge, sti, kostnad. Kontrast Greedy (`f=h`, kan løkke i tresøk → ∅) mot A\* (`f=g+h`, optimal). Gjennomkjørt sensor-kommentert case med margnotater. 10–14 oppgaver: kjør A\* og Greedy på nyskrevne grafer, sammenlign med UCS, inkl. et rent-tresøk-tilfelle der Greedy løkker.
- **Oppgavesjangre:** A. Mønstereksempel: «Kjør Greedy (rent tresøk) og A\* på samme graf. Hvor havner Greedy, og hvorfor finner A\* den optimale stien?»
- **Typiske feil:** `f`-forveksling (A\*/Greedy/UCS); måltest ved generering; ikke vise `g/h/f`; ikke oppdage Greedy-løkken i tresøk.
- **Quiz: 20 · Flashcards: 8**

#### Kapittel 3.5: DRILL — Heuristikkegenskaper (admissibel/konsistent/dominans)

- **id:** `tdt4136-3-5` · **number:** 3.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4136-3-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger B: avgjør admissibilitet/konsistens, sett opp alle kant-ulikheter, løs intervall for ukjent `h`, og begrunn dominans.
- **Eksamensbelegg:** Sjanger B, 100 %. Toppsjiktoppgaven — full kant-analyse + intervall skiller A/B. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) admissibel? sjekk `h(n) ≤ h*(n)` for hver node (regn `h*`); 2) konsistent? sett opp **én ulikhet per kant** (begge retninger + `h(mål)=0`); 3) ukjent `h`? løs ulikhetene til et **intervall**; 4) dominans? sjekk punktvis `h₂ ≥ h₁` (begge admissible); 5) begrunn konsekvensen (konsistens ⇒ én ekspansjon; dominans ⇒ færre noder). Gjennomkjørt sensor-kommentert case (poeng for *hver* kant-ulikhet). 10–14 oppgaver som roterer: admissibilitetssjekk m/motbevis, intervall for ukjent `h`, dominanssammenligning, «kan en inadmissibel `h` gi optimal sti?».
- **Oppgavesjangre:** B. Mønstereksempel: «Finn intervallet for `h(C)` som gjør heuristikken konsistent, og avgjør om den resulterende `h` dominerer den gitte `h'`.»
- **Typiske feil:** §5.7 (ufullstendig konsistenssjekk); glemme `h(mål)=0`-kantene; regne `h*` feil; hevde inadmissibel alltid gir feil sti (ikke om overvurderingen < gapet).
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (Informert søk, A\* og heuristikker)
1. Prøve 3.A (30 min): Kjør A\* + Greedy med `g/h/f` og tie-breaking (sjanger A).
2. Prøve 3.B (35 min): Konsistens — alle kant-ulikheter + intervall for ukjent `h` (B).
3. Prøve 3.C (30 min): Admissibilitet m/motbevis + dominans (B).
4. Prøve 3.D (30 min): Heuristikk-design ved relaksering + 8-puzzle (B/I).

---

### Del 4 — Lokalt søk og optimering *(lokalt søk: nivå 2)*

#### Kapittel 4.1: Hill-climbing, simulert annealing og genetiske algoritmer

- **id:** `tdt4136-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-2-1` · **kapitteltype:** teori
- **description:** De tre lokalsøk-metodene — hill-climbing (m/random restart), simulert annealing (`P=e^{ΔE/T}`) og genetiske algoritmer — når og hvorfor de brukes.
- **Eksamensbelegg:** Sjanger I, 78 %. Faste spørsmål: hvorfor hill-climbing setter seg fast, annealing-akseptsannsynligheten, mutasjon vs. crossover. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **hill-climbing** (flytt alltid til bedre nabo; setter seg fast i **lokalt maks/min, platå, rygg**; **random restart** for å komme videre); **simulert annealing** (aksepter forverrende trekk med sannsynlighet `P = e^{ΔE/T}`; ved `ΔE=0` flyttes man med sannsynlighet 1; høy `T` = mer utforsking, `T→0` = ren hill-climbing); **genetiske algoritmer** (seleksjon, **crossover = utnytting** av gode delløsninger, **mutasjon = utforsking** av nabolag). **8-dronningers evalueringsfunksjon** (antall angripende par — minimeres). Kontrast utforsking (exploration) vs. utnytting (exploitation).
- **Oppgavesjangre:** I. Mønstereksempel: «Regn ut akseptsannsynligheten i simulert annealing for `ΔE` og `T` gitt. Hva skjer ved `ΔE=0`?» + «Forklar mutasjon vs. crossover i en genetisk algoritme.»
- **Typiske feil:** Tro hill-climbing garantert finner globalt optimum; feil fortegn i `e^{ΔE/T}` (forverrende trekk aksepteres, ikke forbedrende med lav sannsynlighet); blande mutasjon (utforsking) med crossover (utnytting); glemme random restart som kur mot lokalt maksimum.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.2: DRILL — Lokalt søk og optimering

- **id:** `tdt4136-4-2` · **number:** 4.2 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4136-4-1` · **kapitteltype:** drill
- **description:** Full drill på sjanger I (lokalt søk): regn annealing-sannsynligheter, spor hill-climbing til et lokalt maksimum, og forklar GA-operatorene.
- **Eksamensbelegg:** Sjanger I, 78 %. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** For **hill-climbing**: evaluér naboene, flytt til beste, stopp ved lokalt optimum/platå — påpek hvor det setter seg fast og at random restart hjelper. For **annealing**: regn `P=e^{ΔE/T}` (bruk kalkulator, kode D), tolk resultatet. For **GA**: identifisér seleksjon/crossover/mutasjon. Gjennomkjørt case med margnotater. 8–12 oppgaver: hill-climbing-sporing, annealing-utregninger, GA-operatorgjenkjenning, 8-dronningers evalueringsfunksjon.
- **Oppgavesjangre:** I. Mønstereksempel: «Spor hill-climbing på det gitte landskapet fra starttilstanden. Hvor setter den seg fast, og hva ville random restart gjort?»
- **Typiske feil:** Fortegnsfeil i annealing; tro annealing alltid aksepterer forverring; ikke gjenkjenne platå; blande GA-operatorene.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (Lokalt søk og optimering)
1. Prøve 4.A (25 min): Hill-climbing-sporing + lokalt maks/platå/random restart (sjanger I).
2. Prøve 4.B (25 min): Simulert annealing — `P=e^{ΔE/T}`-utregninger (I).
3. Prøve 4.C (25 min): Genetiske algoritmer — seleksjon/crossover/mutasjon (I).
4. Prøve 4.D (25 min): Blandet lokalt søk + 8-dronningers evalueringsfunksjon (I).

---

### Del 5 — CSP: constraint-graf, AC-3 og backtracking *(CSP: PERFEKT)*

> CSP (100 %) er den mest **stabile** oppgavefamilien — sensor vil se en fast oppskrift:
> variabler/domener/constraints → constraint-graf → AC-3 (med re-sjekk!) → backtracking
> MRV/LCV. Den mest fremhevede feilen i hele analysen er **manglende AC-3-resjekk**.

#### Kapittel 5.1: CSP-formulering og constraint-grafen

- **id:** `tdt4136-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-2-1` · **kapitteltype:** teori
- **description:** Hvordan et problem formuleres som CSP (variabler, domener, constraints) og tegnes som constraint-graf — inkludert `Alldiff` og retning på binærbegrensninger.
- **Eksamensbelegg:** Sjanger C, 100 %. Fast første steg i alle CSP-oppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **CSP** (variabler `X`, domener `D`, begrensninger `C`); **unær / binær / global** begrensning; **`Alldiff`** (global — alle variabler får ulike verdier); **constraint-graf** (noder = variabler, kanter = binærbegrensninger; **piler når relasjonen ikke er symmetrisk**). Hvordan skrive binærbegrensninger og retningen på ulikheter eksplisitt. Klassiske innpakninger: kartfarging, timeplanlegging, Sudoku, kryssord. Skillet CSP-løsning (faktorisert tilstand) vs. generelt søk (atomær tilstand).
- **Oppgavesjangre:** C. Mønstereksempel (nyskrevet): «Formulér en gitt kartfarging som CSP: oppgi variabler, domener og constraints (bruk `Alldiff` der det passer), og tegn constraint-grafen.»
- **Typiske feil:** Glemme `Alldiff` eller skrive den som mange binærbegrensninger uten å nevne det; utelate retning på asymmetriske begrensninger; blande variabel (får verdi) med begrensning (relasjon).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.2: Buekonsistens og AC-3

- **id:** `tdt4136-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-5-1` · **kapitteltype:** teori
- **description:** Buekonsistens og **AC-3**-algoritmen — fjern verdier uten støtte, og (kritisk) **re-sjekk berørte buer** når et domene krympes.
- **Eksamensbelegg:** Sjanger C, 100 %. ⚠️ **Viktigste feilkilde i hele faget: manglende re-sjekk** (H2015/H2018/H2023). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **buekonsistens** (buen `X→Y` er konsistent hvis hver verdi i `D(X)` har minst én støttende verdi i `D(Y)`). Algoritme-kontrakt (`theorem`): **AC-3** (kø av buer; for hver bue `X→Y`, fjern verdier i `D(X)` uten støtte; **hvis `D(X)` endres, legg alle buer `Z→X` (naboer, unntatt `Y`) tilbake i køen** — dette er re-sjekken). Utledning m/intuisjon: hvorfor re-sjekk er nødvendig (en endring i `Y` kan tvinge fram fjerning i `X` selv om `X` allerede var behandlet). Vis prunet domene per steg. Merk: AC-3 kan tømme et domene (→ ingen løsning) eller redusere til singletons (→ løst).
- **Oppgavesjangre:** C. Mønstereksempel: «Kjør AC-3 på CSP-en under. Vis køen og domenet etter hver bue-behandling, inkludert buer som re-innsettes.»
- **Typiske feil:** **Manglende re-sjekk** — ikke legge berørte buer tilbake når et domene krympes (§5.1, den mest fremhevede CSP-feilen); re-innsette buen man nettopp behandlet (`Y→X`) i stedet for naboene `Z→X`; tro AC-3 alene løser CSP-en (den *reduserer* domener, backtracking trengs ofte).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 5.3: Backtracking med MRV, LCV og forward checking

- **id:** `tdt4136-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-5-2` · **kapitteltype:** teori
- **description:** Backtracking-søk med heuristikkene **MRV** (variabelvalg), **LCV** (verdivalg) og **forward checking** — og min-conflicts for lokalt CSP-søk.
- **Eksamensbelegg:** Sjanger C, 100 %. Rapporter **rekkefølgen** variabler tildeles og verdien hver får. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **MRV** (Minimum Remaining Values — velg variabelen med færrest gjenværende lovlige verdier; tie-break: **degree-heuristikk** / numerisk); **LCV** (Least Constraining Value — velg verdien som utelukker færrest verdier hos naboene; tie-break alfanumerisk); **forward checking** (etter en tildeling, fjern inkonsistente verdier fra naboenes domener); **min-conflicts** (lokalt søk på CSP — velg verdien som gir færrest konflikter). Algoritme-kontrakt (`theorem`): backtracking-søk (velg uassignert variabel via MRV → prøv verdier i LCV-rekkefølge → propagér via forward checking → backtrack ved tomt domene). Rapporteringsformat: rekkefølge på variabler + tildelt verdi (+ prøvde-men-forkastede verdier i parentes der oppgaven ber om det).
- **Oppgavesjangre:** C. Mønstereksempel: «Kjør backtracking med MRV + LCV + forward checking på CSP-en. Oppgi rekkefølgen variabler tildeles og verdien hver får.»
- **Typiske feil:** Feil tie-break i MRV (skal bruke degree-heuristikk / oppgitt regel); LCV-retning (velge *mest* begrensende); ikke oppgi tildelingsrekkefølgen (bare sluttløsningen = utilstrekkelig); forveksle forward checking med full AC-3-propagering.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 5.4: DRILL — CSP: AC-3 og backtracking

- **id:** `tdt4136-5-4` · **number:** 5.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4136-5-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger C: sett opp constraint-grafen, kjør AC-3 med re-sjekk, og kjør backtracking med MRV/LCV/forward checking — komplett og synlig.
- **Eksamensbelegg:** Sjanger C, 100 % (mest stabile oppgavefamilie). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) variabler/domener/constraints + `Alldiff`; 2) tegn constraint-grafen; 3) kjør AC-3 — vis køen og **re-innsatte buer** ved hver domenekrymping; 4) kjør backtracking — MRV-variabel, LCV-verdi, forward-check-propagering, backtrack; 5) oppgi tildelingsrekkefølgen. Fast fellekatalog som SKAL demonstreres: **AC-3-resjekk**, MRV-tie-break, LCV-retning. Gjennomkjørt sensor-kommentert case (poeng for re-sjekken, for tildelingsrekkefølgen). 12–15 oppgaver som roterer AC-3, backtracking (med og uten forward checking), min-conflicts.
- **Oppgavesjangre:** C. Mønstereksempel: «Kjør AC-3 (vis re-innsatte buer), deretter backtracking med MRV+LCV, på denne kartfargingen.»
- **Typiske feil:** Hele fellekatalogen (manglende re-sjekk §5.1, MRV-tie-break, LCV-retning, mangler tildelingsrekkefølge).
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (CSP)
1. Prøve 5.A (25 min): Formulering + constraint-graf + `Alldiff` (sjanger C).
2. Prøve 5.B (35 min): Kjør AC-3 med re-sjekk — vis køen (C).
3. Prøve 5.C (35 min): Backtracking med MRV/LCV/forward checking — tildelingsrekkefølge (C).
4. Prøve 5.D (30 min): Blandet — AC-3 + backtracking + min-conflicts (C).

---

### Del 6 — Adversarielt søk: minimax, alfa-beta, expectiminimax og MCTS *(adversarielt søk: PERFEKT)*

> Adversarielt søk (100 %) krever nodeverdier **nedenfra-og-opp** og — ved alfa-beta —
> **begrunnet pruning** (`v ≥ β` / `v ≤ α`) med **hele den beskårne grenen** listet. De
> ferske tilskuddene (expectiminimax, MCTS, vektor-minimax) hører hjemme her.

#### Kapittel 6.1: Minimax

- **id:** `tdt4136-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-2-1` · **kapitteltype:** teori
- **description:** Minimax-verdien beregnet nedenfra-opp (MAX = maks av barn, MIN = min), og hvordan en evalueringsfunksjon brukes ved cutoff.
- **Eksamensbelegg:** Sjanger E, 100 %. Grunnlaget for alfa-beta. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **minimax-verdi** (MAX-node = maks av barneverdier, MIN-node = min); **evalueringsfunksjon** (brukes ved dybde-cutoff når treet er for stort, f.eks. `e = E1 − E2`). Algoritme-kontrakt (`theorem`): minimax (rekursiv, nedenfra-opp; optimal mot optimal motstander; `O(b^m)` tid). Kjør-for-hånd-format: skriv verdien i **hver** node, ekspander løvnoder venstre→høyre, propagér oppover. Hvilken handling MAX velger i roten (barnet med høyest verdi).
- **Oppgavesjangre:** E. Mønstereksempel (nyskrevet spilltre): «Regn minimax-verdien i hver node i treet under. Hvilken handling velger MAX i roten?» + variant med evalueringsfunksjon på løvnodene.
- **Typiske feil:** Bytte om MAX/MIN-nivåer; regne ovenfra-ned i stedet for nedenfra-opp; ikke skrive verdien i hver node (kreves for uttelling); glemme å bruke evalueringsfunksjonen ved cutoff.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.2: Alfa-beta-beskjæring

- **id:** `tdt4136-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-6-1` · **kapitteltype:** teori
- **description:** Alfa-beta-beskjæring — `α`/`β`-vinduet, når og hvorfor en gren beskjæres (`v ≥ β` / `v ≤ α`), og at hele den beskårne grenen skal listes.
- **Eksamensbelegg:** Sjanger E, 100 %. **Oppgi hvilke noder som beskjæres og hvorfor** — hele grenen, ikke bare toppnoden. Evalueringsrekkefølge (venstre→høyre) avgjør antallet. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **`α`** (beste verdi MAX er garantert så langt) og **`β`** (beste verdi MIN er garantert så langt). Beskjæringsregel (`theorem`): i en **MIN-node** beskjær når `v ≤ α` (verdien blir ≤ noe MAX allerede kan sikre); i en **MAX-node** beskjær når `v ≥ β`. Algoritme-kontrakt: alfa-beta gir **samme** rot-verdi som minimax men ekspanderer færre noder (`O(b^{m/2})` ved optimal ordning). Kjør-for-hånd-format: propagér `α/β` nedover, verdier oppover; når en gren beskjæres, **list alle løvnoder i grenen** (alfabetisk) og oppgi ulikheten som utløste den. Fasiten godtar både strenge (`>`/`<`) og ikke-strenge (`≥`/`≤`) versjoner.
- **Oppgavesjangre:** E. Mønstereksempel: «Kjør alfa-beta på treet (venstre→høyre). For hver beskjæring: oppgi ulikheten (`v ≥ β` eller `v ≤ α`) og **alle** beskårne løvnoder.»
- **Typiske feil:** Bare oppgi toppnoden i en beskåret gren, ikke alle løvnodene under (§5.12); feil ulikhet (MIN-node bruker `α`, MAX-node bruker `β`); glemme at rot-verdien er identisk med minimax; feil ved speilvendt evalueringsrekkefølge (høyre→venstre gir andre beskjæringer).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.3: Expectiminimax, MCTS og flerspillervarianter

- **id:** `tdt4136-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-6-2` · **kapitteltype:** teori
- **description:** De nyere adversarielle temaene: **expectiminimax** (sjansenoder), **vektor-minimax** for n spillere, og hvorfor **MCTS** er mindre følsom for evalueringsfeil enn alfa-beta.
- **Eksamensbelegg:** Sjanger E/I. Expectiminimax (H2023), vektor-minimax for 3 spillere (H2022), MCTS (H2022) — nye, i vekst, treffer dagens profil. Prioritet: **kunne** (dekk-men-nytt).
- **Innholdskontrakt:** `definition` **expectiminimax** (min i MIN-noder, maks i MAX-noder, **vektet forventning `Σ pᵢ·verdiᵢ` i sjansenoder**; velg handlingen med høyest forventet verdi i roten). Vis mellomregningen for hver sjansenode. `definition` **vektor-minimax** (n-spillerspill: bruk **vektorer** av nytteverdier, én per spiller; hver spiller maksimerer sin komponent). `definition` **Monte Carlo-tresøk (MCTS)** (seleksjon → ekspansjon → simulering (rollout) → tilbakepropagering; bruker **tilfeldige simuleringer** i stedet for en fast evalueringsfunksjon, derfor **mindre følsom for feil i evalueringsfunksjonen** enn alfa-beta).
- **Oppgavesjangre:** E/I. Mønstereksempel: «Regn expectiminimax-verdien i roten. Vis den vektede forventningen for hver sjansenode.» + «Forklar hvorfor MCTS tåler en dårlig evalueringsfunksjon bedre enn alfa-beta.»
- **Typiske feil:** Ta **min/maks** i en sjansenode i stedet for **forventning**; feil sannsynlighetsvekter; behandle n-spillerspill med skalar minimax (må være vektor); tro MCTS bruker en fast evalueringsfunksjon (den simulerer).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.4: DRILL — Adversarielt søk

- **id:** `tdt4136-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4136-6-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger E: minimax nedenfra-opp, alfa-beta med begrunnet pruning og hele beskårne grener, og expectiminimax med all mellomregning.
- **Eksamensbelegg:** Sjanger E, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) minimax: skriv verdi i hver node nedenfra-opp; 2) alfa-beta: propagér `α/β`, list **alle** beskårne løvnoder + utløsende ulikhet per beskjæring; 3) expectiminimax: vis `Σ pᵢ·vᵢ` per sjansenode; 4) oppgi rot-handlingen. Fast fellekatalog: hele-grenen-i-pruning, riktig `α/β`-ulikhet, forventning (ikke min/maks) i sjansenoder. Gjennomkjørt sensor-kommentert case (poeng for pruning-begrunnelsen, ikke bare rot-verdien). 12–15 oppgaver: minimax, alfa-beta (begge evalueringsretninger), expectiminimax, med/uten evalueringsfunksjon.
- **Oppgavesjangre:** E. Mønstereksempel: «Kjør alfa-beta på treet, deretter samme tre speilvendt (høyre→venstre). Sammenlign hvilke grener som beskjæres.»
- **Typiske feil:** Hele fellekatalogen (ufullstendig gren §5.12, feil ulikhet, min/maks i sjansenode, bare rot-verdien).
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (Adversarielt søk)
1. Prøve 6.A (25 min): Minimax nedenfra-opp + evalueringsfunksjon ved cutoff (sjanger E).
2. Prøve 6.B (35 min): Alfa-beta — begrunnet pruning med hele beskårne grener (E).
3. Prøve 6.C (30 min): Expectiminimax — forventning i sjansenoder (E).
4. Prøve 6.D (25 min): Blandet — vektor-minimax, MCTS-begrunnelse, speilvendt alfa-beta (E/I).

---

### Del 7 — Spillteori *(spillteori: nivå 2, nær 100 % moderne)*

#### Kapittel 7.1: Utbetalingsmatrise, dominans, Nash og velferd

- **id:** `tdt4136-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-6-1` · **kapitteltype:** teori
- **description:** Verktøykassen for normalformspill — utbetalingsmatrise, dominante strategier, iterert eliminering, Nash-likevekt, Pareto-optimalitet og samfunnsøkonomisk optimum.
- **Eksamensbelegg:** Sjanger H, 67 % (nær 100 % moderne æra). Fangens dilemma-gjenkjenning går igjen. Sensor skiller nøye: *ingen dominant strategi* ≠ *ingen Nash*. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **utbetalingsmatrise** (normalform, to spillere); **dominant strategi** (sterk = alltid strengt bedre; svak = aldri dårligere); **iterert eliminering** av strengt dominerte strategier (vis hvert steg); **Nash-likevekt** (hver spillers strategi er beste respons på den andres — marker beste respons for hver spiller, skjæringspunkt = likevekt); **Pareto-optimalitet** (ingen kan få det bedre uten at en annen får det verre); **samfunnsøkonomisk optimum / social welfare** (maksimer **summen** av utbetalinger — ofte et annet utfall enn Nash). `theorem`-poeng: ingen dominant strategi betyr **ikke** ingen Nash; et velferdsmaksimerende utfall er alltid Pareto-optimalt; **fangens dilemma** (Nash ≠ Pareto-optimalt). Betingelser for at en sterkt dominant likevekt oppstår (parametrisk matrise med `x, y`).
- **Oppgavesjangre:** H. Mønstereksempel (nyskrevet matrise): «Finn dominante strategier ved iterert eliminering, Nash-likevekten(e) og det samfunnsøkonomiske optimumet. Er dette et fangens dilemma?»
- **Typiske feil:** Forveksle dominant strategi med Nash-likevekt (§5.8 — anta «ingen dominant» = «ingen Nash»); regne velferd som produkt i stedet for **sum**; tro Nash alltid er Pareto-optimalt (fangens dilemma motviser); feil retning i iterert eliminering (eliminér *dominerte*, ikke dominerende).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 7.2: DRILL — Spillteori

- **id:** `tdt4136-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4136-7-1` · **kapitteltype:** drill
- **description:** Full drill på sjanger H: les/sett opp matrisen, kjør iterert eliminering, finn alle Nash-likevekter og velferdsoptimumet.
- **Eksamensbelegg:** Sjanger H, 67 % (nær 100 % moderne). Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** 1) sett opp/les matrisen; 2) sjekk dominante strategier, kjør iterert eliminering steg for steg; 3) marker beste respons for hver spiller → Nash-likevekt(er); 4) finn Pareto-optimale utfall og velferdsoptimumet (maks sum); 5) klassifisér (fangens dilemma?). Gjennomkjørt sensor-kommentert case. 8–12 oppgaver: matriseanalyse, iterert eliminering, Nash, velferd, parametrisk `x,y`-matrise, fangens dilemma-gjenkjenning.
- **Oppgavesjangre:** H. Mønstereksempel: «For hvilke verdier av `x` har spillet en strengt dominant likevekt? Vis utregningen.»
- **Typiske feil:** §5.8 (dominant vs. Nash); velferd som produkt; eliminere feil strategi; overse en Nash-likevekt.
- **Quiz: 16 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (Spillteori)
1. Prøve 7.A (25 min): Utbetalingsmatrise + dominante strategier (sjanger H).
2. Prøve 7.B (30 min): Iterert eliminering + Nash-likevekt (H).
3. Prøve 7.C (25 min): Pareto/velferd + fangens dilemma-gjenkjenning (H).
4. Prøve 7.D (25 min): Parametrisk matrise (`x,y`) — betingelser for dominant likevekt (H).

---

### Del 8 — Logikk: utsagn, predikat og resolusjon *(logikk: PERFEKT)*

> Logikk (100 %) har to undertyper hvert år: utsagnslogikk og predikatlogikk (FOL).
> Kjernen er **oversett NL → logikk → CNF → resolusjonsrefutasjon til ⊥**. De faste fellene
> (eksklusiv «eller», `⇒` under `∃`, skolem-konstant vs. -funksjon) får eksplisitte warnings.

#### Kapittel 8.1: Utsagnslogikk og CNF

- **id:** `tdt4136-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Utsagnslogikkens koblinger, oversettelse NL → proposisjoner, konjunktiv normalform (CNF) og Horn-klausuler — inkludert eksklusiv vs. inklusiv «eller».
- **Eksamensbelegg:** Sjanger D, 100 % (ren utsagnslogikk 8/9). Fast felle: «én er brun, én er hvit» = **eksklusiv eller** (H2018). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` koblingene `¬ ∧ ∨ ⇒ ⇔`; **CNF** (konjunksjon av disjunksjoner/klausuler); **konvertering til CNF** (eliminér `⇔` og `⇒` → flytt `¬` innover (De Morgan) → distribuér `∨` over `∧`); **Horn-klausul** (høyst én positiv literal — kan **ikke** dannes hvis en setning krever to positive literaler); **modus ponens**, **modus tollens**, **disjunktiv syllogisme**; forlengs/baklengs kjeding. `warning` **eksklusiv vs. inklusiv «eller»**: «én er brun og én er hvit» kodes `(B₂∧¬B₃)∨(¬B₂∧B₃)`, **ikke** `B₂∨B₃`. Semantiske begreper: gyldig / tilfredsstillbar / utilfredsstillbar; `A ⊨ B ⟺ (A ∧ ¬B)` utilfredsstillbar.
- **Oppgavesjangre:** D. Mønstereksempel (nyskrevet gåte): «Oversett utsagnene til proposisjoner (definér hver bokstav) og konvertér til CNF.» + «Kod ‘nøyaktig én av X og Y er sann’ korrekt.»
- **Typiske feil:** **Inklusiv «eller» der eksklusiv menes** (§5.4); glemme å eliminere `⇒` før distribusjon; feil De Morgan ved negasjonsflytting; tro at enhver setning kan bli Horn-klausul (to positive literaler bryter det).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 8.2: Resolusjonsrefutasjon i utsagnslogikk

- **id:** `tdt4136-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-8-1` · **kapitteltype:** teori
- **description:** Resolusjonsregelen og bevis ved **refutasjon** — negér spørsmålet, resolver til den tomme klausulen (⊥), og påstanden følger.
- **Eksamensbelegg:** Sjanger D, 100 %. Ofte gåte-innpakning (kaniner, gullesker, wumpus). Noen sett **påbyr** en bestemt slutningsregel (H2023: modus tollens). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **resolusjonsregelen** (fra `(A ∨ P)` og `(¬P ∨ B)` slutt `(A ∨ B)`); **resolusjonsrefutasjon** (for å vise `KB ⊨ α`: legg til `¬α`, konvertér alt til CNF, resolver til **⊥**). `theorem`: resolusjon er **komplett** for utsagnslogikk. Prosedyre steg for steg: (1) CNF av KB, (2) negér spørsmålet, (3) resolver klausulpar til ⊥, **vis hvilke klausuler som resolveres i hvert steg** (klausulkjeden). Når oppgaven **påbyr** en slutningsregel (modus ponens/tollens/disjunktiv syllogisme), bruk **nøyaktig den**.
- **Oppgavesjangre:** D. Mønstereksempel: «Vis ved resolusjonsrefutasjon at konklusjonen følger av premissene. Vis hele klausulkjeden til ⊥.» + «Bevis det samme med **modus tollens** (påbudt regel).»
- **Typiske feil:** Ikke negere spørsmålet før resolusjon; hoppe over klausulkjeden (bare oppgi «følger» = null poeng — sensor vil se hvert resolusjonssteg); **ignorere påbudt slutningsregel** (§5.10); resolvere på to literaler samtidig (kun én komplementær literal per steg).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.3: Predikatlogikk — oversettelse og kvantorer

- **id:** `tdt4136-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-8-1` · **kapitteltype:** teori
- **description:** Førsteordens logikk (FOL) — predikater, funksjoner, kvantorer — og korrekt kvantoromfang, inkludert den faste `∃`-med-`∧`-fellen.
- **Eksamensbelegg:** Sjanger D, 100 % (predikatlogikk 9/9). Faste feller: `⇒` under `∃` (H2015). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **predikat**, **funksjon**, **konstant**, **variabel**; kvantorene **`∀`** (universell) og **`∃`** (eksistensiell); kvantoromfang og binding. `warning` **kvantorregelen**: med **`∀`** binder man typisk med **`⇒`** («alle X er Y» = `∀x (X(x) ⇒ Y(x))`); med **`∃`** binder man med **`∧`** («noen X er Y» = `∃x (X(x) ∧ Y(x))`) — **ikke `⇒`** (det gir en triviell sannhet). Standardoversettelser (ingen/alle/noen/nøyaktig én, negasjoner, nøstede kvantorer «ingen to studenter har samme ID»). Likhet og unike-objekt-koding.
- **Oppgavesjangre:** D. Mønstereksempel: «Oversett ‘hver student har minst én veileder’ og ‘ingen to studenter har samme ID’ til FOL med korrekt kvantoromfang.»
- **Typiske feil:** **`⇒` under `∃`** (§5.2 — gir triviell sannhet); `∧` under `∀` (binder for sterkt — påstår at *alt* er X og Y); feil kvantorrekkefølge i nøstede setninger; glemme likhet/ulikhet i «ingen to»-koding.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 8.4: FOL-CNF, skolemisering, unifikasjon og resolusjon

- **id:** `tdt4136-8-4` · **number:** 8.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4136-8-3` · **kapitteltype:** teori
- **description:** Full CNF-konvertering av FOL (inkl. **skolemisering**), **unifikasjon** med mest generell unifikator, og FOL-resolusjon med substitusjon vist i hvert steg.
- **Eksamensbelegg:** Sjanger D, 100 %. Faste feller: **skolem-konstant vs. -funksjon** (H2015); unifikasjon må vises i hvert steg (H2018–H2021). Prioritet: **perfekt**.
- **Innholdskontrakt:** Prosedyre-`theorem` **FOL → CNF**: (1) eliminér `⇔`/`⇒`; (2) flytt `¬` innover (også gjennom kvantorer: `¬∀x = ∃x¬`); (3) **standardisér variabler** (unike navn); (4) **skolemiser** — en `∃` **under en `∀`** blir en **Skolem-funksjon** av de universelle variablene (`H(x)`), en `∃` uten `∀` over seg blir en **Skolem-konstant** (`H₁`); (5) dropp `∀`; (6) distribuér `∨` over `∧`. `definition` **unifikasjon** / **mest generell unifikator (MGU)** / **substitusjon `θ`**. FOL-resolusjon: finn komplementære literaler, unifisér, bruk substitusjonen, vis MGU i hvert steg. `warning` **skolem-funksjon vs. -konstant**: `Heart(H(x))` (hver `x` sitt hjerte) vs. `Heart(H₁)` (alle samme hjerte — feil).
- **Oppgavesjangre:** D. Mønstereksempel: «Konvertér FOL-setningene til CNF (vis skolemisering), og bevis konklusjonen ved resolusjon (vis MGU i hvert steg).»
- **Typiske feil:** **Skolem-konstant der funksjon kreves** (§5.3 — gir alle samme objekt); skolemisere før negasjon er flyttet inn; ikke standardisere variabler (feilaktig unifikasjon); ikke vise substitusjonen/MGU i resolusjonsstegene.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.5: DRILL — Logikk: oversettelse, CNF og resolusjon

- **id:** `tdt4136-8-5` · **number:** 8.5 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4136-8-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger D: oversett gåter til utsagns-/predikatlogikk, konvertér til CNF (m/skolemisering) og resolver til ⊥ med synlig klausulkjede og unifikasjon.
- **Eksamensbelegg:** Sjanger D, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) definér proposisjoner/predikater (pass på eksklusiv «eller», `∃`-med-`∧`); 2) konvertér til CNF (FOL: skolemisér korrekt); 3) negér spørsmålet; 4) resolver — **vis hvert par + MGU** til ⊥; 5) bruk påbudt slutningsregel om oppgitt. Fast fellekatalog som SKAL demonstreres: eksklusiv eller (§5.4), `⇒` under `∃` (§5.2), skolem-funksjon (§5.3), påbudt regel (§5.10), synlig klausulkjede. Gjennomkjørt sensor-kommentert case (poeng for klausulkjeden, ikke bare «følger»). 12–15 oppgaver: utsagnslogikk-gåter, FOL-oversettelser, CNF-konverteringer, resolusjonsrefutasjoner (begge nivåer).
- **Oppgavesjangre:** D. Mønstereksempel: «Gitt en nyskrevet gåte: oversett til logikk, og bevis ved resolusjonsrefutasjon hvem/hva som er tilfellet — vis hele klausulkjeden.»
- **Typiske feil:** Hele fellekatalogen (eksklusiv eller, `⇒`/`∃`, skolem-konstant, påbudt regel, manglende klausulkjede/MGU).
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 8:** 4 prøver (Logikk)
1. Prøve 8.A (30 min): Utsagnslogikk — oversettelse + CNF + eksklusiv eller (sjanger D).
2. Prøve 8.B (35 min): Resolusjonsrefutasjon (utsagn) + påbudt slutningsregel (D).
3. Prøve 8.C (30 min): Predikatlogikk — oversettelse + kvantoromfang (`∃`/`∧`) (D).
4. Prøve 8.D (40 min): FOL-CNF + skolemisering + unifikasjon + resolusjon (D).

---

### Del 9 — Planlegging: PDDL, regresjon og GraphPlan *(planlegging: PERFEKT)*

> Planlegging (100 %) tester handlingsskjema (PRECOND/EFFECT), baklengs søk (regresjon,
> første 3 steg) og GraphPlan (mutex/level-off). Fast felle: **feil retning** på
> progresjon vs. regresjon.

#### Kapittel 9.1: PDDL/STRIPS og handlingsskjema

- **id:** `tdt4136-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-2-1` · **kapitteltype:** teori
- **description:** Hvordan planleggingsproblemer beskrives — Init, Goal og handlinger som PRECOND/EFFECT (STRIPS add-/delete-lister, PDDL med negasjon) — og skillet progresjon vs. regresjon.
- **Eksamensbelegg:** Sjanger F, 100 %. Grunnlaget for alle planleggingsoppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **STRIPS** (PRECOND, **ADD-LIST**, **DELETE-LIST**); **PDDL** (PRECOND, EFFECT med negasjon for slettede fakta); **Init**, **Goal**; **progresjon** (forlengs søk fra Init) vs. **regresjon** (baklengs søk fra Goal). Klassiske domener (blokkverden, ape og bananer). Hvordan en handling er anvendbar (PRECOND oppfylt) og hvordan tilstanden oppdateres (legg til ADD, fjern DELETE). `theorem`-poeng: **lineær planlegging er ufullstendig** (Sussmans anomali).
- **Oppgavesjangre:** F. Mønstereksempel (nyskrevet domene): «Skriv handlingene som PDDL-skjema (PRECOND/EFFECT). Er handlingen anvendbar i Init? Hva blir tilstanden etter?»
- **Typiske feil:** Glemme DELETE-lista (tilstanden blir feil); blande progresjon (forlengs) og regresjon (baklengs); ufullstendig PRECOND; tro lineær planlegging alltid virker (Sussmans anomali).
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 9.2: Regresjon — baklengs søk fra målet

- **id:** `tdt4136-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-9-1` · **kapitteltype:** teori
- **description:** Regresjonsplanlegging — start i målet, jobb bakover, og vis de første stegene (handling + tilstand før/etter) i én gren.
- **Eksamensbelegg:** Sjanger F, 100 %. Fast oppgaveform (H2022 ape/bananer, H2023 julegave): **vis de første 3 stegene** baklengs. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/prosedyre **regresjon** (fra Goal: velg en handling hvis EFFECT bidrar til et delmål, sjekk konsistens, erstatt delmål med handlingens PRECOND — dette gir det nye delmålet «bakover»). Utledning m/intuisjon: hvorfor regresjon reduserer forgreningen (kun relevante handlinger). Kjør-for-hånd-format: vis handling + tilstand før/etter for hvert av de første 3 stegene i én gren. `warning`: **regresjon går BAKLENGS** (fra mål mot start) — ikke forveksle med progresjon.
- **Oppgavesjangre:** F. Mønstereksempel: «Utfør regresjon fra målet i det gitte domenet. Vis de første tre stegene (handling + delmål før/etter).»
- **Typiske feil:** **Feil retning** — kjøre regresjon forlengs (§5.9); velge en handling hvis EFFECT ikke bidrar til delmålet; glemme å erstatte delmålet med PRECOND; ikke sjekke at handlingen ikke sletter et annet delmål.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 9.3: GraphPlan og partial-order planning

- **id:** `tdt4136-9-3` · **number:** 9.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4136-9-1` · **kapitteltype:** teori
- **description:** GraphPlan (stat-/handlingsnivåer, NOP-persistens, **mutex**, level-off) og partial-order planning (planrom, ordningslenker, trusler) — inkludert admissible planleggingsheuristikker.
- **Eksamensbelegg:** Sjanger F, 100 %. Krav: **begrunn med de konkrete mutex-relasjonene** som sperrer (H2015); PoP-trussel-/flaw-analyse (H2019–H2021). Prioritet: **perfekt** (GraphPlan), **kunne** (PoP).
- **Innholdskontrakt:** `definition` **planleggingsgraf** (vekslende stat-/handlingsnivåer); **NOP / persistensaksjon** (bevarer et faktum til neste nivå); **mutex** (gjensidig utelukkende — mellom handlinger: inkonsistente effekter / interferens / konkurrerende behov; mellom literaler: negasjon / inkonsistent støtte); **level-off** (to påfølgende nivåer er identiske). Betingelse for at en plan **kan** finnes på et nivå (alle mål til stede uten innbyrdes mutex, + bakoversøk finner mutex-frie handlinger). `theorem`: **ignore-delete-list-heuristikken er admissibel**; antall handlingsnivåer i grafen er en admissibel heuristikk for forlengs søk. `definition` **partial-order planning** (søk i planrom, minst forpliktelse, **trussel/flaw**, ordningslenker). Vurdér om plan finnes på gitt nivå og **begrunn med de konkrete mutexene**.
- **Oppgavesjangre:** F. Mønstereksempel: «Bygg planleggingsgrafen til første handlingsnivå. Hvilke mutex-relasjoner sperrer en plan på dette nivået? Begrunn hver.»
- **Typiske feil:** Ikke identifisere de konkrete mutexene (bare «ingen plan» uten begrunnelse); glemme NOP-persistensaksjonene; feil mutex-type; tro level-off garanterer at ingen plan finnes (må også sjekke bakoversøk).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 9.4: DRILL — Planlegging

- **id:** `tdt4136-9-4` · **number:** 9.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4136-9-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger F: skriv PDDL-skjema, kjør regresjon (3 steg), bygg planleggingsgraf med mutex og analysér level-off.
- **Eksamensbelegg:** Sjanger F, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) skriv handlinger som PRECOND/EFFECT; 2) regresjon: fra Goal, vis handling + delmål før/etter i 3 steg (baklengs!); 3) GraphPlan: bygg nivåer, marker NOP + mutex, sjekk level-off/plan-eksistens **med konkrete mutexer**. Fast fellekatalog: regresjonsretning (§5.9), DELETE-lista, konkrete mutexer. Gjennomkjørt sensor-kommentert case. 12–15 oppgaver: PDDL-skjema, regresjon, planleggingsgraf/mutex, PoP-trusselanalyse.
- **Oppgavesjangre:** F. Mønstereksempel: «Skriv PDDL-handlingene for et nyskrevet domene, og utfør regresjon fra målet (3 steg). Deretter: hvilke mutexer sperrer en plan på nivå 1?»
- **Typiske feil:** Hele fellekatalogen (regresjonsretning, glemt DELETE, uspesifikke mutexer, progresjon/regresjon-forveksling).
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 9:** 4 prøver (Planlegging)
1. Prøve 9.A (25 min): PDDL/STRIPS-skjema + anvendbarhet + tilstandsoppdatering (sjanger F).
2. Prøve 9.B (30 min): Regresjon — 3 steg baklengs fra målet (F).
3. Prøve 9.C (35 min): GraphPlan — mutex-relasjoner + level-off med begrunnelse (F).
4. Prøve 9.D (30 min): Blandet — PoP-trusselanalyse + admissible planleggingsheuristikker (F).

---

### Del 10 — Usikkerhet og delvis observerbare miljø *(belief states: nivå 3, nytt)*

#### Kapittel 10.1: Belief states og en introduksjon til usikkerhet

- **id:** `tdt4136-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4136-1-3` · **kapitteltype:** teori
- **description:** Delvis observerbare miljø og **belief states** (mengden mulige tilstander, oppdatert etter persept og handling), pluss en kort Bayes-intro som bakgrunn for usikkerhet.
- **Eksamensbelegg:** Sjanger I, belief states 11 %↑ (nytt H2023). Nytt og i vekst — treffer dagens profil. Prioritet: **kjenne** (dekk-men-kort). Robust sensur (flere tolkninger av initial-belief godtas, H2023).
- **Innholdskontrakt:** `definition` **belief state** (mengden av alle tilstander agenten mener den kan være i, gitt persepsjonshistorikken); **belief-state-oppdatering** (etter en **handling**: anvend overgangen på hver mulig tilstand; etter et **persept**: fjern tilstander uklarerte med perseptet). Hvorfor et delvis observerbart miljø tvinger fram søk i **belief-state-rom** i stedet for fysisk tilstandsrom. Kort `definition` **Bayes' regel** (`P(A|B) = P(B|A)P(A)/P(B)`) og **betinget sannsynlighet** som bakgrunn for kvantifisert usikkerhet (kun begrepsnivå — lav eksamensvekt; markeres «bør kjenne til»). Kobling til stokastisk vs. ikke-deterministisk (Del 1).
- **Oppgavesjangre:** I. Mønstereksempel: «En robot i en delvis observerbar labyrint starter med belief state = {alle 4 hjørner}. Oppgi belief state etter handlingen ‘gå nord’ og deretter perseptet ‘vegg til venstre’.»
- **Typiske feil:** Oppdatere belief state med bare persept eller bare handling (begge trinn kreves); glemme at belief state kan **vokse** ved usikker handling; forveksle belief state (mengde mulige tilstander) med sannsynlighetsfordeling.
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 10:** 4 prøver (Usikkerhet og delvis observerbare miljø)
1. Prøve 10.A (20 min): Belief-state-oppdatering etter handling (sjanger I).
2. Prøve 10.B (20 min): Belief-state-oppdatering etter persept (I).
3. Prøve 10.C (20 min): Kombinert handling + persept i labyrint (I).
4. Prøve 10.D (20 min): Bayes' regel + betinget sannsynlighet — kort (I).

---

### Del 11 — KI-etikk og rettferdighet *(etikk: nivå 3, voksende)*

#### Kapittel 11.1: KI-etikk, rettferdighet og forklarbarhet

- **id:** `tdt4136-11-1` · **number:** 11.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De voksende drøftetemaene: individuell vs. gruppebasert rettferdighet, bias i data/modell, forklarbarhet/transparens og korrigerende beslutninger — med vekt på å argumentere presist.
- **Eksamensbelegg:** Sjanger I, 33 %↑ (2020, 2021, 2023). Drøftespørsmål — **rom for flere gode svar**; fasiten viser bare ett. Toppsjiktet skiller seg med **presis** argumentasjon. Prioritet: **kjenne** (men voksende — treffer dagens profil). Ett spørsmål ble i ettertid gitt alle poeng (H2023 GPS) — robust sensur.
- **Innholdskontrakt:** `definition` **individuell rettferdighet** (like individer behandles likt) vs. **gruppebasert rettferdighet** (paritet mellom grupper); **bias** (skjevhet i treningsdata eller modell som gir systematisk urett); **forklarbarhet / transparens** (at en beslutning kan begrunnes for den berørte); **korrigerende beslutninger** (mulighet til å endre/anke et automatisert utfall). Kort om avveiingene (nøyaktighet vs. rettferdighet; ulike rettferdighetsdefinisjoner kan være uforenlige). `text` om **hvordan man skriver et godt drøftesvar**: ta en tydelig posisjon, bruk et konkret eksempel, veie et moteksempel — presisjon vinner. Ingen fasitsvar, men strukturkrav.
- **Oppgavesjangre:** I (drøfting). Mønstereksempel: «Et automatisert opptakssystem gir systematisk lavere score til én søkergruppe. Drøft to rettferdighetshensyn som står mot hverandre, og hvorfor forklarbarhet er relevant.»
- **Typiske feil:** Svare med synsing uten begrep/eksempel; tro det finnes ett riktig svar; blande individuell og gruppebasert rettferdighet; utelate avveiingen (bare påstå «KI må være rettferdig»).
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 11:** 4 prøver (KI-etikk og rettferdighet)
1. Prøve 11.A (20 min): Individuell vs. gruppebasert rettferdighet — begrepsavklaring (sjanger I).
2. Prøve 11.B (25 min): Bias i data/modell — kilde og konsekvens, drøfting (I).
3. Prøve 11.C (20 min): Forklarbarhet/transparens + korrigerende beslutninger (I).
4. Prøve 11.D (25 min): Full drøfteoppgave med posisjon + eksempel + moteksempel (I).

---

### Del 12 — Eksamenstrening

> Del 12 samler den strategiske disiplinen (T/F med negativ retting + kortsvarssjangeren)
> og de tre komplette øvingssettene. Hvert øvingssett er 6–9 oppgaver som speiler den
> typiske eksamen: én oppgave fra hvert 100 %-tema + teoribolk + (oftest) spillteori.

#### Kapittel 12.1: Eksamensstrategi — kortsvar, T/F og negativ retting

- **id:** `tdt4136-12-1` · **number:** 12.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4136-11-1` · **kapitteltype:** drill
- **description:** Strategikapitlet: hvordan svare med synlig utledning (poeng for apparatet), disponere 4 timer på 6–9 oppgaver, og håndtere sant/usant med **negativ retting** (svar bare når du er sikker).
- **Eksamensbelegg:** Metanivå — bygger på §4 i analysen. Negativ retting (+2/−1/0) dokumentert H2015–H2018. Prioritet: **perfekt** (strategi).
- **Innholdskontrakt (løsningsoppskrift):** 1) **vis alltid apparatet** (kø/ekspansjon, nodeverdier, klausulkjede, prunet domene) — bare svaret = null poeng; 2) **følg tie-breaking bokstavelig**; 3) på **T/F med negativ retting**: regn ut forventet uttelling (+2 rett, −1 galt, 0 blankt) — la stå blankt hvis usikker; 4) **delvis uttelling**: ta med hovedpoenget først; 5) tidsbudsjett (~30–40 min per hovedoppgave ved 6–9 oppgaver); 6) fasiten er raus — ikke fortvil over «ett riktig svar» på oversettelse/PEAS/etikk. Gjennomgått metaeksempel: gitt et upresist/langt svar → skriv det korte som gir full uttelling; gitt en T/F-serie → avgjør hvilke man bør svare på.
- **Oppgavesjangre:** Alle A–I (metanivå). 8–10 «forbedre svaret / bør du svare?»-oppgaver.
- **Typiske feil:** Skrive bare sluttsvaret (null); gjette på T/F med negativ retting; bruke for lang tid på én oppgave; utelate hovedpoenget i en definisjon.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 12.2: Øvingseksamen 1 — bredt ordinært sett (kode D)

- **id:** `tdt4136-12-2` · **number:** 12.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4136-12-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers kode D-sett som speiler den typiske ordinære eksamen: én oppgave fra hvert 100 %-tema + agent-/teoribolk + spillteori.
- **Eksamensbelegg/miks:** Speiler 2018–2021-formatet: **7–8 hovedoppgaver, sum 100, jevnt fordelt** ≈ 1 søkeoppgave (A: kjør BFS/DFS/UCS/A\* med tie-breaking) + 1 A\*-heuristikk (B: admissibel/konsistent + intervall) + 1 CSP (C: AC-3 + backtracking) + 1 logikk (D: oversett + resolusjonsrefutasjon) + 1 adversariell (E: minimax + alfa-beta) + 1 planlegging (F: PDDL + regresjon) + 1 PEAS-/agentbolk (G) + kortsvar (I: lokalt søk / KI-historie). Alle nyskrevne med fortelling-innpakning (nyskrevne scenarioer). Løsningsforslag som A-besvarelse i `collapsible` per oppgave, **med synlig apparat** (kø/nodeverdier/klausulkjede) og `tip` om delpoeng og hva som gir uttelling. Innledende `tip` om tidsbudsjett.
- **Innholdskontrakt:** Dekker sjangrene A, B, C, D, E, F, G, I.
- **Oppgavesjangre:** A, B, C, D, E, F, G, I.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 12.3: Øvingseksamen 2 — moderne sett med spillteori og ferske temaer

- **id:** `tdt4136-12-3` · **number:** 12.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4136-12-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett i 2022–2023-form med spillteori og de ferske tilskuddene (expectiminimax, MCTS, belief states, KI-etikk).
- **Eksamensbelegg/miks:** Speiler et moderne sett: ~8 oppgaver ≈ 1 søk (A) + 1 heuristikk (B: dominans + snittet av to admissible) + 1 CSP (C: AC-3-resjekk-tung) + 1 predikatlogikk (D: FOL-CNF + skolemisering + unifikasjon) + 1 adversariell (E: **expectiminimax** med sjansenoder) + 1 planlegging (F: GraphPlan + mutex) + 1 spillteori (H: iterert eliminering + Nash + velferd) + kortsvarsbolk (I: **belief states** + **KI-etikk** + MCTS-begrunnelse). Alle nyskrevne. Løsningsforslag som A-besvarelse med synlig apparat + delpoeng-`tip`.
- **Innholdskontrakt:** Dekker A, B, C, D (FOL), E (expectiminimax), F, H, I (ferske temaer).
- **Oppgavesjangre:** A, B, C, D, E, F, H, I.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 12.4: Øvingseksamen 3 — kjør-for-hånd-tungt topp-sett

- **id:** `tdt4136-12-4` · **number:** 12.4 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4136-12-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de karaktergivende kjør-for-hånd-oppgavene og full begrunnelse — der A/B-karakteren avgjøres.
- **Eksamensbelegg/miks:** Speiler et kjør-for-hånd-tungt sett: ~8 oppgaver ≈ 1 søk (A: alle fem algoritmer inkl. IDS og tresøk-løkke) + 1 heuristikk (B: full kant-analyse + intervall for ukjent `h` + motbevis) + 1 CSP (C: AC-3 + backtracking med forward checking, tildelingsrekkefølge) + 1 utsagnslogikk (D: resolusjonsrefutasjon med påbudt modus tollens) + 1 adversariell (E: alfa-beta med hele beskårne grener, begge evalueringsretninger) + 1 planlegging (F: regresjon 3 steg + konkrete mutexer) + 1 spillteori (H: parametrisk matrise) + kortsvar (I). Alle nyskrevne, med eksplisitt markering av topp- vs. midtsjiktuttelling (full utledning, alle kant-ulikheter, hele klausulkjeden, hele beskårne grener). Løsningsforslag som A-besvarelse med synlig apparat.
- **Innholdskontrakt:** Dekker A, B, C, D, E, F, H, I — de tre settene sammen dekker alle sjangre A–I (J = NLP omtales kun i Del 0) og alle sju 100 %-temaer flere ganger.
- **Oppgavesjangre:** A, B, C, D, E, F, H, I.
- **Quiz: 16 · Flashcards: 0**

**Del 12 får ingen egne temaprøver** (Del 12 **er** øvingseksamenene).

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 16 | 16 |
| 1 | 1.1–1.5 | 16+18+16+16+18 = **84** | 18+22+18+20+8 = **86** |
| 2 | 2.1–2.4 | 14+18+16+22 = **70** | 14+22+16+10 = **62** |
| 3 | 3.1–3.5 | 16+18+14+20+18 = **86** | 18+22+14+8+12 = **74** |
| 4 | 4.1–4.2 | 18+16 = **34** | 22+8 = **30** |
| 5 | 5.1–5.4 | 16+18+18+22 = **74** | 18+16+20+10 = **64** |
| 6 | 6.1–6.4 | 16+18+16+20 = **70** | 16+16+18+8 = **58** |
| 7 | 7.1–7.2 | 18+16 = **34** | 22+8 = **30** |
| 8 | 8.1–8.5 | 16+16+16+16+20 = **84** | 20+16+20+18+10 = **84** |
| 9 | 9.1–9.4 | 16+14+16+20 = **66** | 20+12+18+10 = **60** |
| 10 | 10.1 | **16** | **18** |
| 11 | 11.1 | **16** | **16** |
| 12 | 12.1–12.4 | 14+16+16+16 = **62** | 12+0+0+0 = **12** |
| **Sum** | **42 kap.** | **712 ≥ 500 ✓** | **610 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform. **Flashcard-tettheten er bevisst skalert
opp over gulvet (610, ikke ~500)** fordi KI er et begrepsrikt fag: hvert tema bærer
mange navngitte definisjoner og egenskapspar (miljødimensjoner, agenttyper,
heuristikkegenskaper, CSP-heuristikker, logikk-slutningsregler, planbegreper,
spillteori-begreper) som alle må pugges til en kode D-eksamen — nettopp den «faktatunge»
naturen produksjonsløypa ber om å belønne med høy flashcard-tetthet. Flashcards vektes mot
**algoritme ↔ egenskap ↔ kompleksitet + logikkregler**; teorikapitlene bærer mest,
drillkapitlene færre (mer oppgavefokus). Quiz vektes mot kode D-faktakontroll og de sju
100 %-delene bærer mest. Øvingseksamenene (12.2–12.4) gir 0 flashcards (rene oppgavesett)
men bidrar med quiz.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–11 → 44 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort løsningsforslag (**synlig
apparat**) og poengfordeling. Prøvekapitler bygges som `tdt4136-<del>-prove` (chapterNumber
`<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i delens siste
kapittel. Prøvekvotene per del står i sluttblokken til hver del over (Del 1–11). Del 0 og
Del 12 får ikke egne prøver (Del 12 **er** øvingseksamenene). De nivå 3-delene (10, 11)
får kortere prøver (20–25 min).

### Øvingseksamener (3 komplette sett — se kap. 12.2–12.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (12.2) | Typisk kode D ordinært sett (2018–2021) | 7–8 oppgaver, én fra hvert 100 %-tema + PEAS + kortsvar |
| Øvingseksamen 2 (12.3) | Moderne sett (2022–2023) | 8 oppgaver, spillteori + expectiminimax + belief states + KI-etikk + FOL |
| Øvingseksamen 3 (12.4) | Kjør-for-hånd-tungt topp-sett | 8 oppgaver, full utledning/begrunnelse der A/B skilles |

Til sammen dekker de tre settene alle sjangre A–I (J = NLP omtales kun i Del 0) og alle sju
100 %-temaer flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers kode D-eksamen (bestemt kalkulator),
   blandet kjør-for-hånd + kortsvar + T/F med negativ retting, og at **bredden er
   eksamensformen** (sju 100 %-temaer hvert år). NLP-utgått-advarselen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (agenter Del 1, uinformert søk Del 2, informert søk/A\* Del 3, CSP Del 5,
   adversarielt Del 6, logikk Del 8, planlegging Del 9), **kunne** (lokalt søk Del 4,
   spillteori Del 7, kunnskapsrepresentasjon), **kjenne** (belief states Del 10, KI-etikk
   Del 11, MCTS, KI-historie — men de gir billige/differensierende poeng).
3. **Sjangerguiden** — de ni oppgavetypene A–I med løsningsoppskriftene fra drillkapitlene
   (1.5, 2.4, 3.4, 3.5, 4.2, 5.4, 6.4, 7.2, 8.5, 9.4) i kortform, pluss T/F-/kortsvars-
   strategien (12.1).
4. **Sensorreglene** — de seks metareglene (poeng for synlig utledning; tie-breaking
   bokstavelig; fasiten raus med alternative svar; delvis uttelling med hovedpoeng først;
   robust sensur; negativ retting på T/F).
5. **Feilkatalogen** — de 12 typiske feilene (§5 i analysen) samlet, hver med henvisning
   til kapitlet som forebygger den: manglende AC-3-resjekk (5.2), `⇒` under `∃` (8.3),
   skolem-konstant vs. -funksjon (8.4), inklusiv vs. eksklusiv «eller» (8.1), feil måltest-
   tidspunkt i BFS (2.2), løkkesjekk i tresøk (2.3), ufullstendig konsistenssjekk (3.2),
   dominant strategi vs. Nash (7.1), feil regresjonsretning (9.2), ignorert påbudt
   slutningsregel (8.2), bare sluttsvaret uten utledning (12.1), ufullstendig beskåret gren
   i alfa-beta (6.2).
6. **Notasjons- og algoritmeark** — alle algoritme-kontraktene samlet (søk, CSP, minimax/
   alfa-beta, GraphPlan), logikknotasjonen (`¬ ∧ ∨ ⇒ ⇔ ∀ ∃ ⊨ ⊥`, CNF-prosedyren,
   skolemisering, unifikasjon), heuristikkegenskapene og spillteori-begrepene — puggeark for
   kode D-eksamen.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 2/3
   (søk — kjernen i kjør-for-hånd) → Del 5 (CSP) → Del 8 (logikk) → Del 6 (adversarielt) →
   Del 9 (planlegging) → Del 1 (agenter — lettjente kortsvar) → Del 4/7 (lokalt søk,
   spillteori) → Del 10/11 (ferske temaer) → prøvene underveis → de tre øvingssettene de
   siste ukene under tidspress (240 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4136` med alle 42 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («5.2», ALDRI lineær «22» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 5.2»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–J, frekvenstallene, svartypene og
   NLP-utgått-advarselen resten refererer til.
3. **De sju perfekt-delene i avhengighetsrekkefølge**: Del 1 (agenter — grunnlaget) →
   Del 2 (uinformert søk) → Del 3 (informert søk/A\*; krever søkeapparatet) → Del 5 (CSP;
   krever søk) → Del 6 (adversarielt; krever søk) → Del 8 (logikk; uavhengig) → Del 9
   (planlegging; krever søk + tilstandsapparat).
4. Del 4 (lokalt søk) → Del 7 (spillteori; krever adversarielt) → Del 10 (belief states;
   krever agenter) → Del 11 (etikk) → Del 12 (eksamenstreningen til slutt — gjenbruker alle
   sjangre).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn; `\\` for LaTeX-kommandoer; anbefal `json.dump` i byggekontrakten);
  `npm run build` grønn.
- [ ] **AIMA-navnekonsistens**: alle algoritmenavn, all logikknotasjon og alle begreper
  følger AIMA (`A*`, `f=g+h`, AC-3, `Alldiff`, MRV/LCV, minimax, expectiminimax, GraphPlan,
  PEAS, `∀ ∃ ¬ ∧ ∨ ⇒ ⇔`); engelsk fagterm kun i parentes ved første forekomst; ved tvil er
  engelsk tekst fasit.
- [ ] **Synlig utledning i alle løsningsforslag**: hvert kjør-for-hånd-løsningsforslag viser
  apparatet (kø/ekspansjon for søk, nodeverdier + `v≥β`/`v≤α`-pruning for adversarielt,
  prunet domene per bue for AC-3, klausulkjede + MGU for resolusjon). Drill- og
  eksamenscasene har margnotater om at **bare sluttsvaret = null poeng** og at tie-breaking
  følges bokstavelig.
- [ ] **Fasit-raushet dokumentert**: logikk-/PEAS-/PDDL-/etikk-løsninger markerer at
  «beslektede korrekte svar godtas» og at fasiten viser bare ett eksempel.
- [ ] **Notasjons- og algoritmeliste per delkapittel**: hvert delkapittel som bruker
  algoritmer/notasjon har `collapsible` «Notasjons- og algoritmeliste» rett etter
  Forkunnskaper, som forklarer ALLE algoritmer (m/kontrakt), logikknotasjon og CSP-/plan-/
  spillbegreper brukt i delkapitlet (per delkapittel, ikke arv).
- [ ] **Algoritme-kontrakter**: hvert algoritmekapittel har `theorem`-blokk med AIMA-
  pseudokode (nyskrevet), frontier-type/måltest-tidspunkt, fullstendighet, optimalitet og
  kompleksitet.
- [ ] **De fem faste fellene som warnings**: manglende AC-3-resjekk (5.2), `⇒` under `∃`
  (8.3), skolem-konstant vs. -funksjon (8.4), inklusiv vs. eksklusiv «eller» (8.1), feil
  måltest-tidspunkt i BFS (2.2) — hver har eksplisitt `warning`-blokk.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger
  med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift +
  sensor-kommentert case + 8–15 oppgaver.
- [ ] **NLP-utgått-caveat**: Del 0 (og fotnote i kap. 1.4) sier eksplisitt at NLP/IR
  (presisjon/recall/F1, sentiment, bag-of-words) var pensum 2015–2017 men er utgått fra
  2018; boka bygges mot 2018–2023-formatet; nye temaer (expectiminimax, MCTS, belief states,
  etikk) er dekket tross lav historisk frekvens.
- [ ] **Quiz-sum ≥ 712 og flashcard-sum ≥ 610** per kvotetabellen (§5); quiz kalibrert som
  kode D-faktakontroll, `options[0]` = riktig svar; flashcards kalibrert som algoritme ↔
  egenskap ↔ kompleksitet + logikkregler; T/F-med-negativ-retting-strategien trent i 12.1.
- [ ] **Prøver**: 4 per temadel 1–11 (44 stk) + 3 øvingseksamener (kap. 12.2–12.4) som
  sammen dekker sjangrene A–I og alle sju 100 %-temaer.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, grafer, spilltrær, CSP-er, logiske KB-er og
  innpakninger nyskrevne — egne scenarioer/tall/kontekster; algoritmenavn og standardnotasjon
  er allmenn faglig notasjon, men ingen oppgavetekster/fasiter fra reelle sett gjengis;
  pensumlitteratur (AIMA / Russell & Norvig) refereres (forfatter/verk/begrep), aldri
  siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
