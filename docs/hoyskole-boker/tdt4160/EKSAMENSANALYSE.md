# Eksamensanalyse: TDT4160 Datamaskiner (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Alt innhold er omskrevet fra
> eksamensarkivet — ingen ordrett kopi av oppgavetekst. Faguttrykk beholdes på
> engelsk der pensum bruker det (superscalar, pipeline, cache, hit ratio osv.).
> Fag: TDT4160 «Datamaskiner» (tidl. «Datamaskiner og digitalteknikk»), 7,5 sp,
> aktivt emne (undervisning høst 2026, emneansvarlig Magnus Jahre).

---

## ⚠️ 0. Evidensstyrke og et kritisk læreplanskifte — les dette først

Dette er den viktigste rammen for hele analysen, og den må styre hvordan boka bygges.

**Arkivet (8 filer = 6 unike eksamenssett):**

| # | Sett | Målform | Løsningsforslag? |
|---|------|---------|------------------|
| 1 | Ordinær des. 2015 | Bokmål | ✅ full LF (Tufte) |
| 2 | Kont 2015 | Bokmål | ❌ kun oppgave |
| 3 | Ordinær nov. 2016 | Bokmål + nynorsk | ✅ full LF (på nynorsk-varianten) |
| 4 | Kont 2016 | Bokmål | ❌ kun oppgave |
| 5 | Ordinær 2017 | Engelsk | ❌ kun oppgave |
| 6 | Kont aug. 2017 | Bokmål | ✅ full LF |

Altså **3 av 6 sett har offisiell fasit**. Fasitene er signert Gunnar Tufte, er uformelle
og eksplisitt sjenerøse på delpoeng (se del 4). Bilag/figurer (IJVM-blokkdiagram,
mikroinstruksjonsformat, ALU-tabell, timing-diagram) er ikke gjengitt i PDF-teksten, men
oppgaveteksten refererer dem konsekvent.

**Det kritiske forbeholdet — kurset har skiftet DNA siden arkivet ble skrevet:**

- **Arkivet (2015–2017)** stammer fra Gunnar Tuftes tid og er bygget rundt **Tanenbaum,
  *Structured Computer Organization*** med **IJVM / Mic-1-mikroarkitekturen** (en
  Java-bytecode-mikromaskin med microinstruksjoner) som gjennomgående ryggrad. Fagnavnet
  var da «Datamaskiner **og digitalteknikk**».
- **Dagens emne (2026)** har (a) mistet «digitalteknikk» fra navnet, (b) ny emneansvarlig
  (Jahre), og (c) læringsutbytte som eksplisitt sier **assembly i RISC-V** og
  «enkelsyklus, flersyklus og pipelinet» prosessorer + flyttallsaritmetikk. Det er den
  klassiske Patterson–Hennessy / Harris & Harris-tradisjonen, ikke Tanenbaum/IJVM.

**Konsekvens for boka:** IJVM/mikroinstruksjons-stoffet, som utgjør **~20–25 % av hvert
gamle eksamenssett** (én hel oppgave), er med stor sannsynlighet **utgått** og erstattet av
RISC-V-assembly + enkelsyklus/pipelinet datasti. Flyttall (IEEE 754) og trolig virtuelt
minne, som **ikke** testes i arkivet, er nå eksplisitt pensum. Boka må derfor **ikke** speile
den gamle temavektingen 1:1. Bruk arkivet for de **overførbare** kjernene (digital logikk,
minnehierarki/cache, pipelining/ytelse, ISA-begreper, I/O) og **erstatt** IJVM-sporet med
RISC-V-datasti + tallrepresentasjon/flyttall. Evidensstyrke:

- **Sterk** for eksamens*form* (regne + kortsvar, ikke flervalg) og for de begrepsmessige
  kjernene som er tidløse (cache-aksesstid, pipeline-klokke, Moore/Mealy, adressedekoding,
  ISA-begreper). Disse er stabile på tvers av alle 6 sett.
- **Svak/ukjent** for eksakt temavekting i dagens RISC-V-baserte emne. Verifiser mot
  gjeldende pensumbok og evt. nyere eksempeloppgaver før kvotene låses i skjelettet.

---

## 1. Eksamensform og utvikling

### Grunnform (stabil 2015–2017, og formelt uendret i dag)

- **Skriftlig skoleeksamen, 4 timer**, 100 % av karakteren, skala A–F.
- **Hjelpemiddelkode D:** enkel/bestemt godkjent kalkulator, ingen trykte eller
  håndskrevne hjelpemidler. (Kalkulator trengs sjelden til mer enn `1/t` og
  `c+(1−h)·m` — se del 6.)
- **Ikke flervalg.** Alle sett er **frittekst med regne- og forklaringsoppgaver**. Dette er
  en fundamental forskjell fra UiOs IN2060 (se del 9), som er auto-rettet flervalg/tallinntasting.
- Både bokmål, nynorsk og engelsk målform forekommer (samme oppgave, oversatt).

### Oppgavestruktur

- **4 hovedoppgaver à 25 %** i 2015-settene, **5 hovedoppgaver à 20 %** i 2016–2017-settene.
  Endringen skjer ved at **ytelse (Performance)** skilles ut som egen oppgave 5 fra 2016;
  i 2015 lå ytelsesspørsmålene inne i oppgave 1 og 2.
- Hver hovedoppgave er delt i deloppgaver **a–e** med eksplisitt prosentvekt oppgitt i
  overskriften (f.eks. «(20 % (a: 5 %, b: 10 %, c: 5 %))»). Vektingen er **synlig for
  kandidaten** — nyttig for tidsstyring.
- Fast oppgaverekkefølge og faste temablokker (se del 2). Kandidaten møter i praksis samme
  «meny» hvert år, bare med nye tall og figurer.

### Utviklingslinje 2015 → 2017

- **2015:** 4 oppgaver × 25 %. Ytelse (pipeline-klokke, cache-aksesstid) ligger i oppgave 1.
- **2016–2017:** 5 oppgaver × 20 %, ytelse løftes ut som egen oppgave 5. Nye innslag:
  von Neumann-tilordning, homogen/heterogen CMP, latency hiding, Moores lov, energi/CMP,
  bussarbitrering (daisy chain), avhengigheter (RAW).
- Kjernen (adressedekoding, FSM, IJVM, ISA) er **uendret gjennom hele perioden**.

---

## 2. Temafrekvens

Denne oppgavemenyen er ekstremt stabil. Tabellen teller antall av de **6 unike settene**
der temaet dukker opp som minst én deloppgave. «Gjenganger-score» = andel av sett.

### Blokknivå (hovedoppgavene)

| Blokk | Innhold | Sett | Score |
|-------|---------|------|-------|
| Oppgave 1 – «Oppstart / litt av hvert» | Blandede begreps-kortsvar | 6/6 | **100 %** |
| Oppgave 2 – «Digitalt logisk nivå» | Adressedekoding, FSM, ALU-logikk | 6/6 | **100 %** |
| Oppgave 3 – «Mikroarkitektur / mikroinstruksjoner (IJVM)» | Mic-1, MAR/MDR/MBR, microinst. | 6/6 | **100 %** ⚠️ utgått? |
| Oppgave 4 – «Instruksjonssett­arkitektur (ISA)» | Format, adresseringsmodi, pseudokode | 6/6 | **100 %** |
| Oppgave 5 – «Ytelse» (egen oppgave) | Cache, pipeline, ILP/CMP | 4/6 | 67 %* |

\* Ytelses*temaer* finnes i alle 6 sett; egen nummerert oppgave først fra 2016.

### Deltema (konkrete oppgavetyper), sortert på gjenganger-score

| # | Deltema | Sett | Score | Merknad |
|---|---------|------|-------|---------|
| 1 | **Adressedekoding → tegn minnekart / finn adresseområde** | 6/6 | **100 %** | Den mest pålitelige konkrete oppgaven — hver eksamen |
| 2 | **FSM: Moore/Mealy + excitation-/next-state-tabell** | 6/6 | **100 %** | Alltid i oppgave 2 |
| 3 | **IJVM mikroinstruksjoner (skriv + eksekvér; registerfunksjon)** | 6/6 | **100 %** | ⚠️ trolig utgått i RISC-V-emnet |
| 4 | **ISA: instruksjonsformat + adresseringsmodi + pseudokode-trace** | 6/6 | **100 %** | Regn ut sluttverdi i register i hex |
| 5 | **Cache: gjennomsnittlig aksesstid `c+(1−h)·m`** | ~5/6 | **~83 %** | Kjerneregning, lav vanskegrad |
| 6 | **Pipelining: maks klokkefrekvens / utføringstid / hazards** | ~5/6 | **~83 %** | `f = 1/(tregeste trinn)`; `n+k−1` sykler |
| 7 | **Superscalar / SIMD / ILP / Flynn / CMP – begrep** | ~5/6 | **~83 %** | Korte «forklar kort»-svar |
| 8 | **Harvard-arkitektur (hva kjennetegner / betyr)** | ~4/6 | **~67 %** | Alltid koblet til ISA-oppgaven |
| 9 | **Buss: arbitrering (daisy chain) / synkron vs. asynkron** | ~4/6 | **~67 %** | Prioritet ved samtidig request |
| 10 | **1-bit ALU: analyser hvilken funksjon logikken gir** | ~3/6 | **~50 %** | Les krets, sett opp funksjonstabell |
| 11 | **Von Neumann / stored-program** | 2/6 | 33 % | Tilordne enheter til memory/control/ALU |
| 12 | **Lokalitet (temporal/spatial)** | 2/6 | 33 % | Alltid koblet til cache |
| 13 | **I/O: avbruddsdrevet vs. busy-waiting / interrupt vector** | 2/6 | 33 % | |
| 14 | **Avhengigheter (RAW / true dependence)** | ~2/6 | ~33 % | Koblet til pipeline-hazards |
| 15 | **To-komplement (subtraksjon via ~B + 1)** | 1/6 | 17 % | Kun 2017-kont, i ALU-oppgave |
| 16 | **Moores lov / energi ved overgang til CMP / minnehierarki-kost** | 2/6 | 33 % | |

### Fraværende i arkivet (men NB for dagens emne)

- **Flyttall / IEEE 754:** 0 forekomster i arkivet — men eksplisitt i dagens læringsutbytte. **Bygg det inn.**
- **Virtuelt minne / paging / TLB:** kun nevnt i forbifarten i ett lokalitets-spørsmål; ingen regneoppgave. Dagens minnesystem-pensum krever trolig dette. **Bygg det inn.**
- **Karnaugh-diagram / boolsk minimering:** 0. (IN2060 har det; TDT4160 gjør logikk via
  excitation-ligninger direkte, ikke minimering.)
- **Amdahls lov / CPI-regnestykker:** 0 i arkivet. Vurder mot dagens pensum (Patterson-tradisjonen
  bruker `CPU-tid = IC × CPI × T`).

### Viktigste funn

1. **Menyen er fast.** Fem faste blokker, samme rekkefølge, hvert år. En kandidat som kan de
   ~10 tilbakevendende oppgavetypene, kan i praksis hele eksamen.
2. **To poengmagneter dominerer de «konkrete» poengene:** adressedekoding/minnekart og
   pseudokode-trace + FSM-tabell. Disse er 100 %-gjengangere og lette å drille.
3. **~40 % av hvert gammelt sett er begreps-kortsvar** («forklar kort hva … er»). Lav
   terskel, men bredt — dekker hele pensumets begrepsapparat.
4. **IJVM-blokken er den store risikoen:** 20–25 % av gamle poeng, men trolig borte i dagens
   emne. Ikke overinvester her — se del 0.

---

## 3. Oppgavesjangre (katalog)

**A. Begreps-kortsvar («Forklar kort …»)** — 2–3 setninger. Superscalar, SIMD, ILP,
Flynn, Harvard, von Neumann, lokalitet, latency hiding, homogen/heterogen CMP, avbrudd vs.
busy-waiting, interrupt vector, synkron/asynkron buss, Moores lov. Poengtett og
lavterskel — den sikreste karakteren i hele settet.

**B. Adressedekoding → minnekart.** Gitt et bussgrensesnitt med CS-logikk (AND/OR/NAND/INV
på adresselinjene A0–A15): finn adresseområdet (hex) for hver brikke (RAM/ROM/sensor/alarm),
tegn minnekart, identifiser ledig plass og evt. overlapp — og drøft om overlapp er
problematisk (svar avhenger av read-only vs. write-only bruk). 100 %-gjenganger.

**C. FSM-analyse.** Gitt en krets med D-vipper: (i) klassifiser Moore vs. Mealy (Moore ⇔
utgang kun av tilstand, ingen kobling fra inngang til utgangsdekoding), (ii) utled
excitation-ligninger (D0, D1 …), (iii) skriv next-state-tabell, (iv) angi når utgangen Y=1.
Alternativt: gitt et tilstandsdiagram, fyll ut transisjonstabell og finn minste
tilstandsregister (antall flip-flops = ⌈log₂(antall tilstander)⌉, med håndtering av ubrukte
tilstander → retur til IDLE).

**D. 1-bit ALU-analyse.** Les kretsskissen (adder + logikk + mux styrt av F0–F2) og sett opp
en funksjonstabell for alle styrekombinasjoner (000–111). Eller: hvor mange klokkeperioder
kreves for subtraksjon? (Svar: to-komplement — inverter B, legg til 1, så ADD → 2 sykler.)

**E. IJVM mikroinstruksjoner** ⚠️ *(trolig utgått)*. (i) Registerfunksjon: hva gjør MAR,
MDR, MBR, PC? Hvilke er utilgjengelige for programmereren? (ii) Skriv microinstruksjon(er)
som utfører en registeroperasjon (f.eks. `MAR = TOS`, `CPP = CPP + LV`), med korrekte bit i
ALU-, C-, Mem- og B-feltene — inkl. innsikten om at kun **én** operand kan legges på B-bussen,
så flere operander krever mellomlagring i H over flere microinstruksjoner. (iii) Eksekvér
gitte microinstruksjoner og oppgi sluttinnhold i register (hex). Pluss: control-store-størrelse
(36-bit ord × 512 = maks 512 microinstruksjoner), MPC-bit for betingede microhopp.

**F. ISA / instruksjonsformat.** Gitt en enkel RISC-lignende maskin (Harvard, 32-bit,
16–32 registre, load/store + 8 ALU-instruksjoner): (i) klassifiser instruksjoner etter antall
adresser (0/1/2/3-adresse), (ii) identifiser adresseringsmodus (immediate, register/direkte),
(iii) beregn adresserom (2³² for 32-bit adressebuss), (iv) nevn RISC-trekk (load/store, fast
instruksjonslengde, få adresseringsmodi, register-register, mange registre). Denne moderniseres
naturlig til **RISC-V-assembly** i dagens emne.

**G. Pseudokode-trace.** Gitt en kodesnutt (MOVC/LOAD/STORE/ADD/CMP/BZ/BNZ …) og
start-verdier i registre + minne: gå gjennom linje for linje og oppgi sluttverdi i et register
(hex), inkl. om Z-flagget settes og om et betinget hopp tas. Løkker (BNZ + DEC-teller)
forekommer. 100 %-gjenganger i ISA-oppgaven.

**H. Ytelsesregning.** (i) Cache: `mean access time = c + (1−h)·m`. (ii) Pipeline: maks
klokkefrekvens = `1/(forsinkelse i tregeste trinn)`; utføringstid for N instruksjoner i
k-trinns pipeline = `(k + N−1)` klokkeperioder. (iii) Datasti-forsinkelse: klokka begrenses av
`Δw+Δx+Δy+Δz` (registeraksess → stabile data). (iv) Konseptuelt: ulemper med dype pipelines
(hazards, tømming ved feilspådd branch, stalls); ILP vs. CMP som skaleringsstrategi.

---

## 4. Sensorens krav

Fasitene (Tufte) er uvanlig eksplisitte om vurdering, og det gir tydelige signaler:

- **Delpoeng er sjenerøse.** Fasit sier flere steder «godkjenner alt som er rett», «gir også
  rett for svar som skjønner at …», og aksepterer **alternative løsninger** (andre rekkefølger
  på addisjon/mellomlagring i microinstruksjoner; ulik koding av tilstander i FSM).
- **Vis forståelse av modellen ≥ eksakt fasit.** I IJVM-oppgaven får kandidaten rett også for
  å *korrekt konkludere at noe er umulig* (f.eks. at MAR ikke kan legges på B-bussen) — fordi
  det viser at man leser blokkdiagrammet riktig. Prosessen premieres.
- **Typo-toleranse.** Der oppgaveteksten har trykkfeil (f.eks. `MAR` vs. `MDR`, eller
  `R1=R1+R3` vs. `R1=R2+R3`) godkjennes begge lesninger. Sensor forventer ikke at kandidaten
  «gjetter riktig» på en feil.
- **«Forklar kort» betyr kort.** Fasitsvarene på begrepsoppgavene er 1–3 setninger + evt.
  boksidereferanse. Ingen essaykrav; presisjon og korrekt terminologi teller mer enn lengde.
- **Regnesvar krever mellomregning.** Cache-/pipeline-svar godtas med oppsatt formel og
  innsatte tall (`0.025 + (1−0.9)·2 = 0.225`). Bare et tall uten formel er svakt.
- **Minnekart må faktisk tegnes.** Fasit understreker at kandidaten får uttelling for selve
  minnekartet, ikke bare for adresseområdene — «minnekart må teiknast for utteljing».

### Hva skiller sterk fra svak besvarelse

- **Sterk:** korrekt formel + innsatte tall + kort tolkning av resultatet; leser
  blokkdiagram/krets riktig; bruker presis terminologi (RAW, immediate, Moore, load/store);
  begrunner «hvorfor/hvorfor ikke».
- **Svak:** bart tallsvar uten formel; blander Moore/Mealy; forveksler adresserom (antall
  adresser vs. antall bit); glemmer at kun én operand på B-bussen; tegner ikke minnekartet.

---

## 5. Typiske feil (utledet fra fasitenes presiseringer og oppgavefeller)

1. **Pipeline-klokke fra feil trinn.** Klokka bestemmes av det **tregeste** trinnet, ikke
   summen eller gjennomsnittet. Uten pipeline = summen av alle trinn.
2. **Cache-formel snudd.** `c + (1−h)·m` — glemmer å gange miss-raten `(1−h)` med
   hovedminnetiden, eller bruker `h` i stedet for `(1−h)`.
3. **Adresserom: bit vs. antall.** 32-bit adressebuss ⇒ `2³²` adresser, ikke «32». Regn i
   hex og hold styr på byte vs. ord.
4. **Moore/Mealy forvekslet.** Mealy: utgang avhenger av tilstand **og** inngang. Moore: kun
   tilstand. Se om det går en pil fra inngangen inn i utgangsdekodingen.
5. **B-buss-begrensningen i IJVM.** Kun **én** kilde på B-bussen per microinstruksjon → summer
   av 3 operander krever mellomlagring i H over flere instruksjoner.
6. **Overlapp i adressekart ≠ automatisk problem.** Overlapp mellom en read-only-enhet
   (sensor) og en write-only-enhet (alarm) på samme adresse gir aldri konflikt — begrunn ut
   fra R/W-retning.
7. **Z-flagg i pseudokode.** Bare den **siste** flagg-settende instruksjonen før hoppet
   styrer branch. Trace hele snutten; ikke stopp for tidlig.
8. **Superscalar vs. SIMD vs. ILP-nivå.** ILP er **ikke** definert på ISA-nivå — samme ISA kan
   ha ulike mikroarkitekturer med ulik ILP. Superscalar = flere funksjonelle enheter; SIMD =
   én instruksjon på mange dataelementer (Flynn).
9. **Klokkefrekvens ↑ krever at minnet henger med.** En single-cycle-CPU kan ikke klokkes
   raskere enn den tregeste minnebrikka tillater innen én periode (ROM på 1 µs ⇒ maks ~1 MHz).

---

## 6. Formel- og notasjonsapparat

Bevisst lite maskineri — kalkulatoren (kode D) trengs sjelden. Kandidaten må kunne:

**Ytelse / minne**
- Gjennomsnittlig aksesstid, ett cache-nivå: `t̄ = c + (1 − h)·m`
  (c = cache-tid, m = hovedminnetid, h = hit ratio).
- Klokkefrekvens: `f = 1/t`. Pipeline: `f_maks = 1/(forsinkelse i tregeste trinn)`.
- Utføringstid, k-trinns pipeline, N instruksjoner (uten hazards):
  `T = (k + N − 1) · T_klokke`.
- Datasti-begrensning: `T_klokke ≥ Δ(sum av forsinkelser register→stabile data)`.

**Tallrepresentasjon / logikk**
- Hex ↔ binær; adresserom = `2^(antall adressebit)`.
- To-komplement subtraksjon: `A − B = A + (~B) + 1`.
- Boolsk notasjon i excitation-ligninger: `AND (·), OR (+), NOT (~/¯), XOR (⊕)`.
- FSM: excitation-ligning `Dᵢ = f(Q, inngang)`, next-state `Qᵢ⁺ = Dᵢ`, transisjonstabell,
  antall flip-flops = `⌈log₂(#tilstander)⌉`.

**ISA / arkitektur (begrepsapparat)**
- Instruksjonsklasser: 0/1/2/3-adresse.
- Adresseringsmodi: immediate, register (direkte), (evt. minne-indirekte via register).
- RISC-kjennetegn: load/store, fast instruksjonslengde, få adresseringsmodi, register-register,
  mange registre.
- Flynn: SISD, SIMD, MISD, MIMD; ILP vs. PLP (processor-level parallelism); homogen/heterogen CMP.

**⚠️ Bør legges til for dagens emne (ikke i arkivet):**
- IEEE 754 flyttall (fortegn/eksponent/mantisse; normalisering; bias).
- Virtuelt minne: sideoppslag, page table, TLB, virtuell→fysisk oversettelse.
- Evt. CPU-tid `= IC × CPI × T_klokke` og Amdahls lov, avhengig av pensumbok.

---

## 7. Prognose og prioritering

Prioriteringen tar **både** arkivet og det kjente læreplanskiftet inn (se del 0).

### Nivå 1 – må beherskes perfekt (100 %-gjengangere, overførbare)
- **Adressedekoding → minnekart** (hex-områder, ledig plass, overlapp-drøfting).
- **FSM:** Moore/Mealy-klassifisering, excitation-/next-state-tabell, min. antall flip-flops.
- **Cache-aksesstid** `c+(1−h)·m` og **pipeline-klokke/utføringstid**.
- **ISA-begreper + pseudokode-trace** (hex-sluttverdi, Z-flagg, betinget hopp) — moderniser til
  **RISC-V-assembly**.
- **Begrepsapparatet** (superscalar, SIMD, ILP, Flynn, Harvard, von Neumann, lokalitet, CMP,
  avbrudd vs. busy-waiting) — billige, sikre poeng i «litt av hvert».

### Nivå 2 – må kunne (høyfrekvent støtte)
- **1-bit ALU-analyse** (funksjonstabell fra krets; to-komplement-subtraksjon).
- **Buss:** arbitrering (daisy chain, prioritet, open-collector), synkron vs. asynkron.
- **Pipeline-hazards / avhengigheter (RAW)** og hvorfor dype pipelines koster.
- **ILP vs. CMP** som skaleringsstrategi; Moores lov; energi.

### Nivå 3 – bygg inn for dagens RISC-V-emne (svak/ingen arkivdekning)
- **Tallrepresentasjon + IEEE 754 flyttall** — eksplisitt i dagens læringsutbytte, mangler i arkivet.
- **Virtuelt minne (paging, TLB)** — dagens minnesystem-pensum krever trolig dette.
- **Enkelsyklus / flersyklus / pipelinet RISC-V-datasti** (Patterson-tradisjonen) — den
  moderne erstatningen for IJVM/Mic-1-sporet.

### Nivå 4 – lav prioritet / historisk
- **IJVM / Mic-1 mikroinstruksjoner** (MAR/MDR/MBR, control store, MPC-microhopp). 100 % i
  arkivet, men **trolig utgått**. Dekk konseptet «mikroarkitektur/datasti» generelt heller enn
  IJVM-spesifikke bit-felt. Ikke bygg drill her uten å bekrefte mot dagens pensum.

**Prioriteringsregel:** boka bør vekte etter *dagens* pensum (RISC-V + flyttall + virtuelt
minne veies opp), men bruke arkivets **oppgavesjangre og sensorstil** (regne + kort forklaring,
minnekart, trace, formel + innsatte tall) som mal for hvordan oppgaver skal se ut.

---

## 8. Notasjons- og terminologikonvensjoner for boka

- Bruk **norsk brødtekst med engelsk fagterm i parentes** ved første forekomst, slik
  eksamen selv gjør: «hurtigbuffer (cache)», «samlebånd (pipeline)», «trefforholdstall (hit
  ratio)», «avbrudd (interrupt)». Deretter kan engelsk term brukes fritt.
- Hold **hex** som standard for adresser/registerinnhold (`0xFFFF0000`), binær for bit-felt.
- Vis alltid **formel → innsatte tall → svar med enhet** i regneeksempler (sensorkrav).
- Minnekart tegnes **eksplisitt** (tabell adresse↔enhet), ikke bare som liste over områder.
- Merk tydelig i teksten hva som er **RISC-V/moderne** (kjerne i dag) vs. **IJVM/historisk**
  (kan møtes i gamle eksamenssett), så leseren ikke drilles på utgått stoff.

---

## 9. TDT4160 vs. IN2060 (UiO) — forskjeller å være obs på

Begge emner er «digitalteknikk + datamaskinarkitektur» og bruker samme DNA-arketype
(regnefag), men de er svært ulike i **form** og delvis i **innhold**:

| Dimensjon | **TDT4160 (NTNU, arkiv 2015–17)** | **IN2060 (UiO)** |
|-----------|-----------------------------------|------------------|
| **Eksamensform** | Frittekst: regne + «forklar kort», manuelt rettet | Auto-rettet flervalg + tallinntasting (Inspera, fra H2019) |
| **Delpoeng** | Sjenerøse; alternative løsninger og typo-lesninger godtas | Fast fasit; ingen trekk for feil svar (fra H2019) |
| **Mikroarkitektur** | **IJVM / Mic-1** (Tanenbaum), microinstruksjoner, control store | ARM-assembly + mikroarkitektur/ytelse |
| **Digital logikk** | FSM via **excitation-ligninger**; adressedekoding | Boolsk algebra, **Karnaugh**, VHDL/HDL-klassifisering |
| **Tallrepr./flyttall** | Nesten fraværende i arkivet (nå på vei inn m/RISC-V) | Kjernetema: to-komplement, **flyttall** |
| **Minnesystem** | Cache-aksesstid; **virtuelt minne nesten fraværende** | Cache **og virtuelt minne/paging/TLB** som kjerne |
| **ISA** | Egendefinert enkel RISC-maskin → **RISC-V** (i dag) | ARM |
| **Adressedekoding/minnekart** | Svært hyppig (100 %) | Mindre framtredende |

**Konsekvens:** IN2060-analysen (`../in2060/EKSAMENSANALYSE.md`) er nyttig for de tidløse
kjernene (cache, pipeline, ISA-begreper, sekvensiell logikk), men **kan ikke** brukes til å
utlede TDT4160s eksamens*form* — IN2060 er flervalg, TDT4160 er frittekst. Og TDT4160
vektlegger adressedekoding/minnekart og (historisk) IJVM som IN2060 knapt berører, mens
IN2060 har Karnaugh/VHDL/flyttall som TDT4160-arkivet mangler. Der TDT4160 nå går mot RISC-V,
konvergerer de to fagene innholdsmessig — men aldri i vurderingsform.

---

## 10. Anbefalt arketype og bokgrep

- **Arketype: `regnefag`** (samme som in2060, tdt4186, ttm4135). Emnet er kvantitativt-teknisk
  med regneoppgaver (klokke, aksesstid, adresserom, trace) + et tungt lag begreps-kortsvar.
- **Hybrid-nyanse:** ~40 % av gamle sett er begrepsforklaringer, ikke regning. Boka bør derfor
  ha en tydelig **begrepskompaktering** (definisjonsbokser + «forklar kort»-modellsvar på 1–3
  setninger) ved siden av regnedrillen — ikke ren formeldrill.
- **Bygg boka rundt dagens pensum, ikke arkivet:** RISC-V-assembly + enkelsyklus/pipelinet
  datasti + tallrepresentasjon/flyttall + minnehierarki (cache **og** virtuelt minne) som
  ryggrad; behold arkivets sjangre (minnekart, FSM-tabell, pseudokode-trace, ytelsesregning)
  som oppgavemal. Behandle IJVM/mikroinstruksjoner som **historisk appendiks**, ikke kjerne.
- **Verifiseringsplikt før skjelett låses:** dette forbeholdet hviler på et dokumentert
  navne-/emneansvarlig-/læringsutbytteskifte, ikke på nye eksempeloppgaver. Skaff gjeldende
  pensumbok (trolig Harris & Harris *Digital Design and Computer Architecture, RISC-V Ed.* eller
  Patterson & Hennessy *Computer Organization and Design, RISC-V Ed.*) og evt. et nyere
  eksamenssett før kvotene i skjelettet fastsettes.

---

## 11. Kildeliste

- **Eksamensarkiv (grunnlag):** 6 unike TDT4160-sett 2015–2017 (ordinær + kont), 3 med
  offisiell fasit (Gunnar Tufte). Filer i `~/Desktop/Eksamner/NTNU/TDT4160/`.
- **Fagbeskrivelse:** NTNU emnebeskrivelse TDT4160 (omskrevet i
  `fagbeskrivelser-samlet 2.md`); læringsutbytte oppdatert 2026 (RISC-V, Jahre).
- **Antatt lærebok, arkivperioden (2015–17):** A. S. Tanenbaum, *Structured Computer
  Organization* (IJVM/Mic-1, digital logic level, ISA level) — utledet fra
  oppgaveterminologien (IJVM, MAR/MDR/MBR, control store, Flynn, side-referanser i fasit).
- **Antatt lærebok, dagens emne (2026):** RISC-V-basert arkitekturbok (Harris & Harris eller
  Patterson & Hennessy, RISC-V-utgave) — utledet fra dagens læringsutbytte. **Må verifiseres.**
- **Forbilder (hus-stil):** `../in2060/EKSAMENSANALYSE.md` (UiOs motstykke, flervalg) og
  `../tdt4186/EKSAMENSANALYSE.md` (NTNU OS, regnefag).

---

### Evidens-selvkritikk (oppsummert)

- **Sterkt belegg:** eksamensform (4 t, kode D, frittekst regne+kortsvar), den faste
  5-blokks-menyen, sensorens sjenerøse delpoeng-praksis, og de tidløse kjerneregningene —
  alt konsistent på tvers av 6 sett.
- **Svakt/foreldet belegg:** eksakt temavekting for *dagens* emne. Arkivet er 9+ år gammelt og
  fra før et dokumentert læreplanskifte (Tanenbaum/IJVM → RISC-V, navnebytte, ny emneansvarlig).
  IJVM-vektingen i arkivet skal **ikke** overføres 1:1; flyttall og virtuelt minne må bygges inn
  selv om de mangler i arkivet. Behandle temafrekvens-tabellen som «slik så eksamen ut 2015–17»,
  ikke som en garanti for 2026.
