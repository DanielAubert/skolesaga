# Eksamensanalyse: TDT4260 Datamaskinarkitektur (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Alt innhold er omskrevet fra
> eksamensarkivet — ingen ordrett kopi av oppgavetekst. Faguttrykk beholdes på
> engelsk der pensum bruker det (pipeline, cache coherence, out-of-order, roofline,
> gather-scatter, prefetching osv.), fordi kurset undervises og eksamineres på engelsk.
> Fag: TDT4260 «Computer Architecture» / «Datamaskinarkitektur», 7,5 sp, **aktivt emne**
> (neste tilbud vår 2027). Avansert datamaskinarkitektur — bygger videre på TDT4160.

---

## ⚠️ 0. Evidensstyrke — les dette først

Arkivet er **lite**. Vær ærlig om det: konklusjonene om eksamens*form* og *temameny* er
robuste, men eksakte gjenganger-scorer hviler på få observasjoner.

**Arkivet (5 filer = 3 unike eksamenssett, alle på engelsk):**

| # | Sett | Emneansvarlig | Løsningsforslag? | Format |
|---|------|---------------|------------------|--------|
| 1 | Vår 2015 (18. mai) | Lasse Natvig | ✅ full LF («solution example», signert) | Papir: flervalg (A–D) + fritekst |
| 2 | Vår 2016 (1. juni) | Magnus Själander | ⚠️ delvis (kun de 5 åpne, ikke MCQ-nøkkel) | Svarark: 40 MCQ + 5 åpne |
| 3 | Vår 2017 | Magnus Själander | ⚠️ delvis (FSM-fasit + åpne mangler modellsvar) | Digital (Inspera-stil): 33 MCQ + match + 3 essay |

**Forbehold å ta med videre:**

1. **Kun 3 unike sett, kun vårsemestre 2015–2017.** Ingen kontinuasjonseksamener, ingen sett
   nyere enn 2017 i arkivet. «Gjenganger-score» er derfor grovkornet: 3/3, 2/3 eller 1/3.
   Der jeg skriver «100 %» betyr det «i alle tre observerte sett», ikke statistisk sikkerhet.
2. **Lærerskifte midt i arkivet.** 2015 (Natvig) og 2016–2017 (Själander) har merkbart ulik
   *stil* (se del 1), men **samme temaunivers**. Temaene er stabile; formen strammes.
3. **Emnet lever og er i bevegelse.** Dagens læringsutbytte (2026) legger eksplisitt vekt på
   **GPGPU-er og applikasjonsspesifikke akseleratorer**, **maskinvaresikkerhet / sidekanal­angrep**
   og **arkitekturvurdering via simulering** — temaer som er svake eller fraværende i arkivet
   (2015–2017). Boka må derfor **utvide** utover arkivet på disse tre (se del 7, nivå 3).
   Kjernen (kvantitative prinsipper, minnehierarki, ILP/DLP/TLP, interconnects) er derimot
   svært stabil H&P-kanon og trygg å bygge på.

**Hvor evidensen er sterk vs. svak:**

- **Sterk:** eksamens*form* (flervalgstungt + korte forklaringsessays, negativ scoring,
  kalkulator kode D), og at menyen speiler Hennessy & Patterson-kapitlene nesten 1:1.
- **Middels:** temavekting mellom H&P-kapitlene (basert på 3 sett).
- **Svak:** GPGPU-akselerator-dybde, hardware security, og prefetching-vekt (kun 2016 hadde
  egen prefetching-blokk — men det er semesterprosjektets tema, så trolig varig relevant).

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

- **Skriftlig skoleeksamen, 3 timer**, teller 100 % av karakteren (skala A–F).
  (I 2015 talte eksamen 80 % — resten var et semesterprosjekt med gem5-simulering av en
  prefetcher. Dagens ordning er 100 % skriftlig, men prosjekttemaet lever videre som pensum.)
- **Hjelpemiddelkode D:** kun bestemt, enkel kalkulator. Ingen trykte/håndskrevne hjelpemidler.
  Kalkulatoren trengs kun til noen få formler (AMAT, Amdahl, PUE) — se del 6.
- **Svarspråk:** engelsk eller norsk godtas (2015 sier det eksplisitt). Oppgaveteksten er engelsk.

### Formatet er FLERVALGSTUNGT — dette er hovedforskjellen fra TDT4160

Alle tre settene er dominert av **flervalg (multiple choice)** med **negativ scoring**:

| Sett | MCQ-oppsett | Negativ scoring | Fritekst |
|------|-------------|-----------------|----------|
| 2015 | ~14 MCQ (A/B/C, «skriv X1 b») | **+3 / −1,5**, 0 ved blankt | Del E+F: 7 forklaringsoppgaver (4–6 p) |
| 2016 | 40 MCQ (A–D) i 10 temablokker à 4 | **+2 / −1**, 0 ved blankt | 5 åpne «concisely describe» (4 p hver) |
| 2017 | 33 MCQ (A–D) | **+3 / −1,5** (unntatt match) | FSM-match (7 p, ingen minus) + 3 essay (10 p) |

Konsekvenser for boka og kandidaten:

- **Negativ scoring styrer strategi:** blankt (0) er bedre enn feil gjett (−1 til −1,5). Boka
  bør trene *sikker gjenkjenning* og eksplisitt lære bort «ikke gjett når du er i tvang».
- **«Not true / incorrect / false»-feller er utbredt.** En stor andel MCQ ber deg finne det
  *gale* utsagnet (2016: 6.2, 6.3, 7.3, 8.1, 8.3, 4.3; 2017: Q6, Q10, Q11, Q12, Q13, Q27, Q31).
  Dette krever at man kan *alle* alternativene, ikke bare det riktige svaret.
- **Digital retting (2017):** Inspera-stil med drag-and-match (MSI-FSM-tilstander → hendelser)
  og fyll-inn-essay. Auto-rettede MCQ + manuelt sensurerte essays.

### Utviklingslinje 2015 → 2017

- **2015 (Natvig):** færre, «tyngre» flervalg med 3 alternativer og lengre, resonnerende
  distraktorer; solid fritekstdel med **forskningsartikkel-spørsmål** (Manchester Dataflow
  Machine, «Exploring the Design Space of Future CMP's», hypercube-utvidelse, strip mining).
- **2016 (Själander):** systematiseres til **10 temablokker som speiler H&P-kapitlene**
  (Fundamentals, Memory Hierarchy, Caches, ILP, DLP, TLP, Warehouse-Scale Computers, Networks,
  Prefetching, Articles) × 4 MCQ + 5 korte essays. Dette er den reneste «kartleggingen» av
  hva emnet dekker.
- **2017:** blir digitalt; ~33 MCQ som spenner over samme meny, avsluttet med tre 10-poengs
  essays (**Tomasulo m/ reorder buffer, Amdahls lov, energy proportionality**). Bekrefter at
  de tunge forklaringsemnene er få og forutsigbare.

**Rød tråd:** menyen er stabil; det som endrer seg er *innpakningen* (papir → svarark →
digital) og at flervalg får stadig større vekt.

---

## 2. Temafrekvens

Tabellen teller antall av de **3 unike settene** der temaet opptrer som minst ett spørsmål.
Med bare 3 sett er scoren grov — les den som «alltid / oftest / sett én gang».
Menyen er i praksis **Hennessy & Patterson: Computer Architecture — A Quantitative Approach**,
kapittel for kapittel.

### Blokknivå (H&P-kapittelspeiling)

| Blokk (H&P-kapittel) | Innhold | Sett | Score |
|----------------------|---------|------|-------|
| **Fundamentals / kvantitative prinsipper** (kap. 1) | Moore, Dennard, Pollack, power wall, dark silicon, power-ligning, TDP, yield, Flynn, Amdahl | 3/3 | **100 %** |
| **Minnehierarki & cache** (kap. 2 + App. B) | AMAT, VIPT, TLB, 4 Cs, 2:1-regel, lokalitet, cache-optimaliseringer | 3/3 | **100 %** |
| **ILP** (kap. 3) | Tomasulo, hazards/dependencies, loop unrolling, VLIW, spekulasjon | 3/3 | **100 %** |
| **DLP** (kap. 4) | SIMD, vektor, gather-scatter, GPU, roofline, branch divergence, chaining | 3/3 | **100 %** |
| **TLP / multiprosessorer** (kap. 5) | Amdahl-speedup, cache coherence (MSI/MESI), locks/race, NUMA, false sharing, SMT, consistency | 3/3 | **100 %** |
| **Interconnection networks** (App. F) | crossbar/MIN/bus, bisection bandwidth, hypercube, mesh, routing, deadlock, circuit switching | 3/3 | **100 %** |
| **Forsknings­artikler / «Articles»** | Manchester Dataflow, CMP design space, Alpha 21164, Tilera-mesh, dark silicon, utilization wall | 3/3 | **100 %** ⭐ distinktivt |
| **Warehouse-Scale Computers & energi** (kap. 6) | energy proportionality, PUE, RLP, CAPEX/OPEX, MapReduce/web-search | 2/3 | **67 %** (sterkt i 2016+2017) |
| **Prefetching** | definisjon, accuracy/coverage/timeliness, prefetch degree, SW-prefetch | 1/3 | 33 %* |

\* Kun egen blokk i 2016 — men prefetching er **semesterprosjektets** tema (gem5-prefetcher),
så det er trolig varig kjernestoff selv om det ikke får egen blokk hvert år.

### Deltema sortert på gjenganger-score (de mest pålitelige konkrete spørsmålene)

| # | Deltema | Sett | Score | Merknad |
|---|---------|------|-------|---------|
| 1 | **Kvantitative «lover»: Moore / Dennard / Pollack / Amdahl** | 3/3 | **100 %** | Nesten garantert flere MCQ hvert år |
| 2 | **AMAT — flernivå gjennomsnittlig aksesstid** | 2/3 | **67 %** | Den viktigste *regne*-oppgaven; 2016 (sammenlign) + 2017 (numerisk) |
| 3 | **Amdahls lov — regn ut maks speedup** | 2/3 | **67 %** | 2016 (100 kjerner, 2 %), 2017 (300 kjerner, 5 %); + essay i 2017 |
| 4 | **Cache coherence: MSI/MESI-tilstander + protokoll** | 3/3 | **100 %** | MESI-essay (2016), MSI-FSM-match (2017), coherency-MCQ begge |
| 5 | **Hazards & dependencies (RAW/WAR/WAW, sanne vs. navn)** | 3/3 | **100 %** | WAR-feller går igjen i alle tre |
| 6 | **Tomasulo / dynamisk skedulering / out-of-order** | 2/3 | **67 %** | MCQ (2016) + 10-poengs essay m/ reorder buffer (2017) |
| 7 | **VLIW & loop unrolling (kompilator-ILP)** | 2/3 | **67 %** | Ofte «not true»-varianter |
| 8 | **SIMD / vektor / gather-scatter / strip mining** | 3/3 | **100 %** | Begrepsdefinisjon + forskjell SIMD vs. vektor |
| 9 | **GPU: skjule minnelatens (mange tråder) & branch divergence** | 2/3 | **67 %** | 2016 + 2017 |
| 10 | **Interconnect-topologier & bisection bandwidth** | 3/3 | **100 %** | crossbar/hypercube/mesh, routing, deadlock |
| 11 | **VIPT-cache (virtually indexed, physically tagged)** | 3/3* | **100 %** | 2016 (MCQ + full essay om aksess), 2017 (MCQ); 2015 lokalitet/2:1 |
| 12 | **Energy proportionality / PUE / WSC** | 2/3 | **67 %** | essay-favoritt (2016 open1, 2017 Q36) |
| 13 | **Forskningsartikkel-spørsmål** | 3/3 | **100 %** | Egen sjanger — se del 3.F |
| 14 | **Multithreading: fine/coarse-grained + SMT** | 2/3 | **67 %** | 2015 essay + 2017 MCQ |
| 15 | **Prefetching-metrikker** | 1/3 | 33 % | 2016; men prosjekt-tema |

### Fraværende/svakt i arkivet (men NB for dagens emne)

- **Maskinvaresikkerhet / sidekanalangrep** (Spectre/Meltdown-familien): eksplisitt i dagens
  læringsutbytte, men **ingen** spor i 2015–2017. Bør inn i boka som eget kapittel (del 7, nivå 3).
- **Applikasjonsspesifikke akseleratorer / GPGPU-dybde** (utover GPU-MCQ): dagens vekt er
  høyere enn arkivet viser.
- **Branch prediction i dybden** (2-bit prediktorer, korrelerende, tournament, BTB): overraskende
  tynt i arkivet (kun branch *divergence* på GPU og hazard-begreper). Klassisk H&P-kap.-3-stoff
  som lett kan komme — ta med.

### Viktigste funn

1. **Dette er en gjenkjennings-/forklaringseksamen, ikke en regneeksamen.** Motsatt av TDT4160.
2. **Menyen = H&P-kapitlene.** Bygg boka på samme akse, så treffer du strukturelt.
3. **Kvantitative «lover» + AMAT + Amdahl** er de eneste stedene du faktisk regner — men de
   kommer nesten hvert år og er lette poeng. Perfekt beherskelse er obligatorisk.
4. **Forskningsartikler er en fast, distinktiv sjanger** som IN2060/TDT4160 ikke har.

---

## 3. Oppgavesjangre (katalog)

### A. Definisjon/gjenkjennings-MCQ (dominerende — ~70–80 % av poengene)
«Which statement is correct/true?» eller «Which of the following is X?». Krever presis
begrepsforståelse. Eksempler: Flynn-klassifisering av MMX/SSE (SIMD); roofline-modellens formål;
hva Pollacks regel sier; hva TLB gjør.

### B. «Not true / incorrect / false»-MCQ (svært vanlig, høy vanskegrad)
Snur logikken: du må eliminere de tre *sanne* utsagnene. Eksempler: «Which is NOT one of the
four Cs?» (svar: **Concurrent** — de fire er compulsory/capacity/conflict/coherence);
«Which is NOT a hazard?» (svar: **Execution hazards**); coherency-utsagn som er feil. Boka må
trene *alle* alternativer, ikke bare fasiten.

### C. Innebygd regne-MCQ (få, men faste)
Tall skjult i et flervalg. De to arketypene:
- **AMAT flernivå:** «average access time» gitt L1/L2/L3/DRAM-tider og hit/miss-rater.
- **Amdahl maks speedup:** gitt N kjerner og sekvensiell andel s.
Også: yield (die-areal + defekter), CAPEX/OPEX for et WSC-anlegg, power-ligning-gjenkjenning.

### D. Match / paring (2017)
Drag-and-match: koble hendelser (CPU read/write hit/miss, Bus read/write miss) til riktige
tilstandsnummer i en **MSI L1 coherency-FSM**. Ingen minuspoeng, 1 p per rett — «gratispoeng»
hvis man kan MSI-diagrammet.

### E. Korte forklaringsessays — «Concisely describe …» (4 p, 2016)
Fem korte, presise svar. Belønner *tetthet*, ikke lengde («use the space wisely»). Faste favoritter:
- energy proportionality og hvorfor det er viktig
- web-search i et WSC (MapReduce: map = delresultat per node, reduce = global rangering)
- false sharing (to prosessorer skriver ulike ord i samme cache-linje)
- MESI — forklar **hver** bokstav (eier + clean/dirty; «ikke nok med ett ord per bokstav»)
- konvensjonell aksess i en direct-mapped VIPT-cache (tag/index/offset; TLB oversetter tag parallelt)

### F. Lange essays — 10 p (2017) og forskningsartikkel-essays (2015)
- **Tomasulo m/ reorder buffer:** beskriv algoritmen og formålet; stikkord Issue / Execution /
  Write Results / Commit.
- **Amdahls lov:** beskriv loven og implikasjonene for single- vs. multicore.
- **Energy proportionality:** som E, men dypere.
- **Forskningsartikler (2015, distinktivt):** Manchester Dataflow Machine (matching unit: hashing
  + overflow unit); hypercube 8→16 noder (adressebit legges til, hver node trenger ny fysisk port
  = skaleringsulempe); Cache Byte Equivalents fra CMP-design-space-artikkelen; strip mining.

### Sjanger-fordeling (grovt, poengvekt)
Gjenkjennings-/«not true»-MCQ ~65–75 %  ·  innebygd regne-MCQ ~10 %  ·  korte/lange essays
~15–25 %  ·  match ~ få prosent. **Regning ≈ 10–15 %, teori/forklaring ≈ 85–90 %.**

---

## 4. Sensorens krav

**Faste metaregler (avlest fra oppgavehodene):**

- **Negativ scoring på MCQ.** 2015/2017: +3 / −1,5. 2016: +2 / −1. **Blankt = 0.** Sensor
  straffer aktiv gjetting; boka må lære strategisk avholdenhet.
- **Kun svar på svararket rettes** (2016): «Only answers on this sheet will be corrected.»
- **Match-oppgaven (2017): ingen minuspoeng**, 1 p per rett — ta alle.
- **Essays vurderes på presisjon og tetthet, ikke volum.** «Answer as concisely as possible … use
  the space wisely.» Korte modellsvar i fasiten bekrefter dette.
- **Engelsk eller norsk svar godtas.**

**Hva 2015-fasiten («solution example», signert) avslører om vurderingen:**
- Uformell, konsis, ofte kulepunkt-stil. Refererer **lærebokens sidetall** (f.eks. strip mining
  «see textbook page 275») — bekrefter H&P som pensumbok og at eksakt reproduksjon ikke kreves.
- For MESI kreves **eier-status + clean/dirty per tilstand** — «ett ord per bokstav» gir ikke full
  score. Det holder altså ikke å pugge akronymet; du må forklare semantikken.
- For forskningsartikler forventes **mekanismen** (matching unit = hashing + overflow unit), ikke
  bare navnet.

### Hva skiller sterk fra svak besvarelse

| Sterk | Svak |
|-------|------|
| Kan *alle* fire alternativene → tåler «not true»-feller | Kjenner bare det «riktige» svaret, faller på inverterte spørsmål |
| Lar tvilsomme MCQ stå blanke (unngår −) | Gjetter og taper netto poeng |
| AMAT/Amdahl regnet riktig og raskt (formel automatisert) | Roter med flernivå-AMAT-nøstingen eller Amdahl-nevneren |
| MESI/MSI: forklarer eierskap + clean/dirty + overganger | Lister bare tilstandsnavn |
| Essays: tette, korrekte, dekker forespurte stikkord (Issue/Exec/Write/Commit) | Lange, vage, mangler nøkkelbegrep |
| Artikkel-svar: gjengir mekanismen | Gjengir kun tittel/konklusjon |

---

## 5. Typiske feil (utledet fra distraktorer og fasitpresiseringer)

1. **Forveksle de kvantitative lovene.** Moore (transistorantall ×2 ~18 mnd) vs. Dennard
   (effekttetthet konstant / effekt konstant ved skalering) vs. Pollack (ytelse ∝ √areal/transistorer)
   vs. Amdahl (speedup-tak). Distraktorene bytter bevisst om på disse.
2. **De fire Cs.** Riktig sett er compulsory / capacity / conflict / **coherence** — «concurrent»
   er felle. (Merk: eldre H&P bruker 3 Cs; med multiprosessor legges «coherence» til.)
3. **Hazard-typer.** Structural / data / control er ekte; «execution hazard» finnes ikke. WAR og
   WAW er *navnavhengigheter* (kan fjernes med register renaming), kun RAW er *sann* dataavhengighet.
   WAR kan ikke oppstå i en fast in-order pipeline.
4. **VLIW-misforståelser:** VLIW *øker ikke* binærkompatibilitet (den forverrer den); den *flytter*
   hazard-håndtering til kompilatoren; instruksjoner kjøres «in lock step».
5. **AMAT-nøsting.** Flernivå-AMAT bygges rekursivt: miss i L1 betaler L2s hit-tid, osv. Vanlig feil
   er å legge sammen aksesstider flatt i stedet for å vekte med miss-ratene.
6. **Amdahl-nevneren.** Speedup = 1/(s + (1−s)/N), *ikke* 1/s med mindre N→∞. 5 %, 300 kjerner gir
   ~18,8× (ikke 20× og ikke 300×).
7. **MESI kun som akronym.** Sensor krever eierskap + clean/dirty (Modified = enerett, dirty;
   Exclusive = enerett, clean; Shared = flere, clean; Invalid = ugyldig).
8. **Coherence vs. consistency.** Coherence = hva som skjer med *samme* adresse i flere cacher;
   (sequential) consistency = hvilken *rekkefølge* minneoperasjoner (på tvers av adresser) synes i.
   Ikke bland disse.
9. **Snooping «skalerer bedre enn directory»** — feil; directory skalerer bedre (snooping trenger
   broadcast). Directory *kan* implementeres over en buss (2016 8.x-felle).
10. **SIMD vs. vektor.** Vektor har fleksibelt operandantall, mask-register, sofistikerte
    adresseringsmodi (scatter-gather), chaining; SIMD-utvidelser (SSE/AVX) er *lettere i maskinvare*
    men mindre fleksible. «Threading» er ikke en vektorteknikk.
11. **GPU-latensskjuling** skjer via *mange tråder*, ikke store cacher.
12. **Roofline** viser *maks ytelse gitt aritmetisk intensitet* — ikke effekt eller båndbredde.

---

## 6. Formel- og notasjonsapparat

Kort liste — dette er nesten hele «regnepensumet». Kalkulator (kode D) rekker langt.

**Ytelse / kvantitative prinsipper**
- Amdahls lov: `Speedup = 1 / (s + (1−s)/N)`; tak `= 1/s` når `N→∞`.
- Dynamisk effekt: `P = ½ · C · V² · f` (spenning kvadratisk → sterk motivasjon for lav-V multicore).
- Pollacks regel: `ytelse ∝ √(areal)` (eller √(transistorer per kjerne)).
- Moore: transistorantall dobles ~hver 18. måned. Dennard: effekt(tetthet) konstant ved skalering
  (bryter sammen ~2005 → «power wall» → multicore-æraen).
- Roofline: `oppnåelig ytelse = min(peak FLOPS, aritmetisk intensitet × peak båndbredde)`.

**Minnehierarki**
- Enkeltnivå AMAT: `AMAT = HitTime + MissRate · MissPenalty`.
- Flernivå (rekursivt): `AMAT = t_L1 + m_L1·(t_L2 + m_L2·(t_L3 + m_L3·t_mem))`
  der `t` = aksesstid, `m` = miss-rate for nivået.
- 2:1-tommelfingerregel: direct-mapped cache av størrelse N ≈ miss-rate som 2-veis N/2.
- De fire Cs: compulsory, capacity, conflict, coherence.
- VIPT-adresse: `tag | index | offset`; index leser sett parallelt mens TLB oversetter tag.

**Warehouse-scale / energi**
- PUE = total anleggseffekt / IT-effekt (lav = energieffektivt).
- Energy proportionality: effekt bør være proporsjonal med utnyttelse (idealet 10 %/10 %).
- CAPEX/OPEX med amortiseringsperioder (WSC-kostnadsmodell).

**Interconnects (begrepsapparat, ikke tunge formler)**
- Bisection bandwidth (min. båndbredde mellom to like halvdeler); hop-count `O(log N)` for hypercube;
  crossbar = ikke-blokkerende men skalerer dårlig; deadlock-fri routing (dimension-order).

**Notasjon boka bør bruke:** behold engelske faguttrykk (pipeline, cache coherence, out-of-order,
reorder buffer, gather-scatter, prefetching, bisection bandwidth), men forklar dem på norsk bokmål.

---

## 7. Prognose og prioritering

### Nivå 1 – må beherskes perfekt (100 %-gjengangere, lette/sikre poeng)
- **De kvantitative lovene** (Moore/Dennard/Pollack/Amdahl/power-ligning) — flere MCQ hvert år.
- **AMAT flernivå** og **Amdahl-speedup** — de eneste faste regneoppgavene; automatiser dem.
- **Hazards/dependencies** (RAW sann; WAR/WAW navn; ingen «execution hazard»).
- **Cache coherence MSI/MESI** — tilstander + overganger + coherence vs. consistency.
- **De fire Cs**, VIPT-aksess, TLB.
- **SIMD/vektor/gather-scatter**-begreper og forskjellen SIMD ↔ vektor.
- **Interconnect-topologier** + bisection bandwidth + deadlock-fri routing.

### Nivå 2 – må kunne (høyfrekvent, avgjør essays)
- **Tomasulo m/ reorder buffer** (Issue/Execution/Write Results/Commit) — fast essay.
- **Energy proportionality / PUE / WSC** (MapReduce web-search, false sharing).
- **VLIW & loop unrolling** (og deres «not true»-feller).
- **GPU: latensskjuling via tråder, branch divergence**; roofline.
- **Multithreading fine/coarse-grained + SMT**.

### Nivå 3 – bygg inn for dagens emne (svak/ingen arkivdekning, men i læringsutbyttet)
- **Maskinvaresikkerhet / sidekanalangrep** (Spectre/Meltdown-familien) — nytt, ikke i arkivet.
- **GPGPU- og akselerator-dybde** (utover GPU-MCQ) — vektlagt i dag.
- **Branch prediction i dybden** (2-bit/korrelerende/tournament, BTB, spekulasjon) — klassisk
  H&P-kap.-3-stoff som er tynt i arkivet, men lett kan komme.
- **Prefetching** (accuracy/coverage/timeliness, degree, SW vs. HW) — semesterprosjektets tema.

### Nivå 4 – lav prioritet / historisk
- Spesifikke eldre forskningsartikler fra Natvig-æraen (Manchester Dataflow Machine, den konkrete
  CMP-design-space-artikkelen). *Sjangeren* «forklar en artikkel» består trolig, men de eksakte
  artiklene byttes ut. Ta med som representative case-studier, ikke som pugg.

---

## 8. TDT4160 → TDT4260: progresjonen (viktig for boka)

Emnene er en bevisst 2-trinns rakett i NTNUs datateknologiløp.

| | **TDT4160 Datamaskiner** (grunnkurs) | **TDT4260 Datamaskinarkitektur** (påbygg) |
|---|---|---|
| Nivå | Bygger datamaskinen fra bunnen | Optimaliserer og parallelliserer den |
| Kjernestoff | Digital logikk, adressedekoding, FSM (Moore/Mealy), ISA-grunnlag, mikroarkitektur (IJVM el. RISC-V enkelsyklus/pipelinet), **grunnleggende** cache/AMAT, grunnleggende pipelining/hazards | **Avansert** ILP (Tomasulo, out-of-order, spekulasjon, VLIW), DLP (vektor/SIMD/GPU), TLP (coherence/consistency/NUMA), flernivå minnehierarki & prefetching, interconnects, WSC/energi, akseleratorer, hardware security |
| Kvantitative prinsipper | Introduseres (Flynn, enkel ytelse) | **Fordypes** (Amdahl, Dennard, Pollack, power, roofline) — «Quantitative Approach» |
| Pensumbok | Tanenbaum / Harris & Harris-tradisjonen | **Hennessy & Patterson, Computer Architecture — A Quantitative Approach** |
| Eksamensform | **Regnetung** fritekst (regn ut, tegn, trace) | **Gjenkjennings-/forklaringstung** flervalg + korte essays |
| Varighet | 4 t | 3 t |

**Konsekvens:** en TDT4260-student *forutsettes* å kunne pipeline-grunnlaget, én-nivå cache og
hazard-begrepene fra TDT4160. Boka bør ha et kort «forutsetter du kan dette»-repetisjonskapittel
(pipeline, single-level AMAT, RAW/WAR/WAW) og deretter bruke tyngden på det avanserte parallell-
og minnehierarki-stoffet + kvantitative prinsipper.

---

## 9. Anbefalt arketype og bokgrep

**Arketype: «Begrepsdrevet H&P-speilbok med flervalgsbank og konsist-forklar-trening».**

Ikke en regnebok (som TDT4160/1T-matte). Kjennetegn ved en TDT4260-treffende bok:

1. **Kapittelakse = H&P-kapitlene** (Fundamentals & quantitative principles → Memory hierarchy →
   ILP → DLP → TLP/multiprocessors → Interconnection networks → WSC/energy → Prefetching →
   [nytt:] Accelerators/GPGPU → [nytt:] Hardware security). Det speiler eksamensmenyen direkte.
2. **Begrepspresisjon i front.** Hvert avsnitt må definere begrepet skarpt *og* skille det fra
   nabo­begrep (coherence vs. consistency; SIMD vs. vektor; Moore vs. Dennard vs. Pollack), fordi
   eksamen tester nettopp disse forvekslingene via «not true»-feller.
3. **Stor MCQ-bank med negativ-scoring-trening.** Minst 500 spørsmål (CLAUDE.md-kravet), tungt vektet
   mot 4-alternativers gjenkjennings- og «which is NOT true»-oppgaver — inkludert eksplisitt trening
   i *å la stå blankt* når man er usikker.
4. **Få, men vanntette regne-moduler:** AMAT (flernivå), Amdahl, power-ligning, PUE, roofline,
   yield/CAPEX. Med gjennomregnede eksempler + drilloppgaver. Dette er de eneste «regn ut»-poengene.
5. **«Konsist forklar»-maler** for essay-favorittene (Tomasulo m/ ROB, energy proportionality,
   MESI, false sharing, VIPT-aksess, fine/coarse/SMT) — modellsvar som viser *tetthet* framfor
   volum, og som treffer sensorens stikkordkrav.
6. **Case-/artikkelbokser** per kapittel (Alpha 21164, Tilera-mesh, dark silicon, dataflow-maskiner,
   Spectre/Meltdown) — for å dekke den distinktive «Articles»-sjangeren uten å pugge en spesifikk
   artikkelliste.
7. **Repetisjonsbro fra TDT4160** foran (pipeline, single-level cache, hazards) så påbygget sitter.

Flashcards (≥500, CLAUDE.md) egner seg spesielt godt her fordi faget er definisjonstungt: kort
= begrep ↔ presis definisjon + typisk felle. Kapittel-/temaprøver (≥4 per tema) bør etterligne
eksamensmiksen: ~75 % MCQ (inkl. inverterte), ~15 % «konsist forklar», ~10 % regn (AMAT/Amdahl).

---

## 10. Kildeliste (arkivet)

| Sett | Fil | Innhold |
|------|-----|---------|
| Vår 2015 | `TDT4260_exam_2015_spring_exercises_english.pdf` | Oppgaver (Natvig): MCQ A–D + fritekst E/F |
| Vår 2015 | `TDT4260_exam_2015_spring_lf_english.pdf` | Fullt løsningsforslag («solution example», signert) |
| Vår 2016 | `TDT4260_exam_2016_spring_exercises_english.pdf` | Oppgaver (Själander): 40 MCQ i 10 blokker + 5 åpne |
| Vår 2016 | `TDT4260_exam_2016_spring_lf_english.pdf` | Modellsvar på de 5 åpne (MCQ-nøkkel ikke i tekst) |
| Vår 2017 | `TDT4260_exam_2017_spring_exercises_and_lf_english.pdf` | 33 MCQ + MSI-FSM-match + 3 essay (Tomasulo/Amdahl/energy) |

**Pensumbok (utledet):** Hennessy & Patterson, *Computer Architecture: A Quantitative Approach*
(fasiten refererer sidetall; blokkstrukturen i 2016 speiler bokas kapitler). Suppler med
forskningsartikler (dataflow-maskiner, CMP-design-space, Alpha 21164, Tilera, dark silicon) og —
for dagens emne — sidekanal-/hardware-security-litteratur.

**Emnebeskrivelse:** NTNU TDT4260 (aktivt, 7,5 sp, 3 t skriftlig, hjelpemiddel D, neste tilbud vår 2027).

### Evidens-selvkritikk (oppsummert)
- **3 unike sett, kun 2015–2017, alle vår, alle engelsk.** Ingen nyere sett → GPGPU/akselerator- og
  hardware-security-vekten i *dagens* emne er ikke arkivbelagt; jeg har markert den som utvidelse.
- **MCQ-fasitnøkler mangler** for 2016/2017 (kun essay-modellsvar finnes) → distraktor-analysen
  bygger på fagkunnskap, ikke offisiell nøkkel. Behandle enkelt-svar med forsiktighet.
- **Lærerskifte (Natvig→Själander)** gir stilbrudd, men temauniverset er stabilt H&P-kanon.
- **Sterk** konklusjon: form (flervalg + korte essays, negativ scoring) og H&P-kapittelmeny.
  **Svakere:** eksakt intern vekting mellom kapitlene.
