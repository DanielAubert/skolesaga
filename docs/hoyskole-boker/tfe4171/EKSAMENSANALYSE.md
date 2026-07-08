# Eksamensanalyse: TFE4171 Design av digitale systemer 2 (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNUs
> eksamensarkiv for TFE4171 med **tre komplette oppgavesett med fullstendige
> løsningsforslag**: vår 2015, vår 2016 og vår 2017. Alle tre er skrevet på
> engelsk (emnet undervises og eksamineres på engelsk). **Alt innhold her er
> omskrevet med egne ord** – ingen oppgavetekster, fasiter eller
> sensorkommentarer er gjengitt ordrett. Kodefragmenter som gjengis, er korte
> illustrasjoner av allmenn faglig notasjon (SystemVerilog/SystemC-syntaks,
> boolsk logikk), ikke opphavsrettslig beskyttede utdrag. Analysen er
> kvantitativ der de tre settene tillater det.
>
> **Lite arkiv – tre år.** Konklusjonene under er robuste der alle tre settene
> peker samme vei (og det gjør de i stor grad: de fire søylene er identiske
> hvert år), men mer usikre der et tema kun dukker opp ett år. Slike steder er
> markert eksplisitt. Med bare tre sett bør frekvenstallene leses som
> «tendens», ikke som statistikk.
>
> **Emnet er aktivt** (verifisert mot NTNUs emneside, juli 2026): TFE4171
> undervises fortsatt, med planlagt undervisningsstart våren 2027 og lang
> historikk tilbake til 2014/2015. Ingen nedleggelsesvarsel.
>
> **⚠️ Viktig endring i eksamensform mellom arkivet og i dag.** De tre
> arkivsettene (2015–2017) hadde **hjelpemiddelkode C** (spesifisert trykt og
> håndskrevet materiale tillatt) – i 2015/2016 lå det til og med et komplett
> «SystemC Quickreference Card» vedlagt selve oppgaven. NTNUs *gjeldende*
> emnebeskrivelse oppgir **hjelpemiddelkode D: kun enkel kalkulator** –
> altså i praksis **lukket bok**. Konsekvens for læreboka: studenten kan i dag
> ikke lenger slå opp SVA-/SystemC-syntaks under eksamen og må **kunne
> notasjonen utenat**. Dette hever kravet til memorering betydelig og bør
> forme boka (se del 6 og del 8).

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

**Skriftlig skoleeksamen, 4 timer, karakterskala A–F, undervisnings- og
eksamensspråk engelsk.** Alle laboratorieøvinger er obligatoriske og må være
godkjent for å gå opp. Gjeldende sammensetning er **eksamen 75 % +
prosjektrapport 25 %**, med hjelpemiddelkode D (kun enkel kalkulator).

**NB om beståttkrav:** samtlige arkivsett understreker at **selve eksamenen må
bestås separat** (karakter E eller bedre) – det holder ikke at totalkarakteren
er bestått. Dette er en reell terskel og bør nevnes for kandidaten.

### Utvikling og skifte av faglærer (viktig for tolkning av arkivet)

Arkivet spenner over et **skifte av emneansvarlig**, og det setter tydelige spor:

| Sett | Faglærer (kontakt) | Maks poeng | Sammensetning (den gang) | Hjelpemidler |
|------|--------------------|-----------|--------------------------|--------------|
| V2015 | Donn Morrison | 50 | øving 40 % + eksamen 60 % | Kode C (materiale tillatt) |
| V2016 | Donn Morrison | 50 | øving 40 % + eksamen 60 % | Kode C |
| V2017 | Kjetil Svarstad | 60 | øving skalert til 20 + valgfritt prosjekt, skalert til 100 | Kode C |

- **2015 + 2016 (Morrison)** er nesten strukturelt identiske og svært
  simulator-/verktøynære: mye på SystemVerilogs **scheduling-regioner**,
  **coverage**, **constrained random**, og **IPC/reachability** i formell del.
- **2017 (Svarstad)** dreier den formelle delen mot **temporallogikk – CTL,
  Kripke-modeller, fixpunkt-evaluering, liveness (`s_eventually`)** – og legger
  til en egen Kripke-oppgave. SystemC-delen blir mer konseptuell (preemptiv vs.
  ikke-preemptiv scheduling, «local time»-TLM).

**Praktisk lærdom:** boka bør dekke *begge* faglæreres vinkling på formell
verifikasjon – både den SAT-/IPC-operasjonelle (Morrison) og den
CTL-/model-checking-teoretiske (Svarstad) – fordi vi ikke vet hvilken linje
den nåværende eksamenen følger, og fordi begge er «kjernepensum» i faget.

### De fire faste søylene

Hvert eneste sett er bygd av de **samme fire problemblokkene**, i samme
rekkefølge, uansett faglærer:

1. **Problem 1 – Multiple choice** (18–20 poeng, ~36–40 % av settet).
   Bred sveip over hele pensum. **Minuspoeng for feil svar** (se under).
2. **Problem 2 – SystemVerilog Assertions (SVA)** (10–12 poeng). Blanding av
   forklaring og kodeskriving.
3. **Formell verifikasjon** (10–18 poeng). Hos Morrison én blokk (Problem 3);
   hos Svarstad splittet i en Kripke-oppgave + en FSM/SVA-designoppgave.
4. **SystemC / TLM** (10–12 poeng). Kodelesing/simulering + konseptuelle
   forklaringer.

Bredden er altså nesten identisk fra sett til sett; det er kretsene,
kodebitene og tallene som byttes ut, ikke oppgavetypene.

### ⚠️ Minuspoeng på flervalg

Til forskjell fra mange norske realfagsemner **straffes gale avkrysninger** i
Problem 1: +2 poeng (2015/2016) / +3 poeng (2017) for riktig, **0 for blankt,
og −1 / −1,5 for galt eller for mange avkryssede**. Kandidaten bør altså kun
gjette når hun kan eliminere nok alternativer. Dette er en reell strategisk
nyanse som boka bør trene på.

### Oppgaveformater (hva slags respons kreves)

- **Flervalg med minuspoeng** – konsept- og syntaksbasert (Problem 1).
- **Skriv en SVA-property/-sequence** – ofte med krav om gjenbruk via navngitte
  `sequence`/`property` (2015 P2c, 2015 P3c, 2017 P4a).
- **Skriv/komplettér en testbenk eller covergroup** (2016 P2b, 2016 P2d).
- **Skriv en SystemC-prosesskropp** – inkl. *reverse-engineering* fra oppgitt
  simuleringsutskrift (2016 P4b).
- **«Kjør koden i hodet»** – forutsi utskrift/scheduling fra SystemVerilog-
  eller SystemC-kildekode (2015 P4c, 2016 P2c, 2016 P4a, 2017 P5a).
- **Tegn/analyser** – blokkdiagram for SAT-avrulling (2015 P3a), SoC-blokkdiagram
  med TLM-porter (2015 P4b), **timing-/signaltrace-diagram** for SVA-sekvenser
  (2017 P2c, P2d), markere states i Kripke-diagram (2017 P3).
- **Vurder motbevis (counterexample)** – avgjør om et IPC-motbevis er *ekte*
  (designfeil) eller *falskt/spuriøst* (manglende reachability) og fiks
  (2017 P4b, P4c).

Det er **ingen regneoppgaver** i tradisjonell forstand – kalkulatoren er nesten
overflødig. Faget testes gjennom **å lese, forklare, skrive og resonnere om
HDL-kode og formelle modeller**, ikke gjennom tallknusing.

---

## 2. Temafrekvens med gjenganger-score

Score 0–100, basert på (a) hvor mange av de tre settene temaet treffes i, og
(b) hvor tungt det vektes når det treffes. Med bare tre sett er dette en
tendensindikator, ikke statistikk.

| # | Tema | 2015 | 2016 | 2017 | Score | Kommentar |
|---|------|:----:|:----:|:----:|:-----:|-----------|
| 1 | **SystemVerilog Assertions – syntaks & semantikk** (sequences, `\|->`/`\|=>`, `##`, `[*]`-repetisjon, `$rose`/`$past`/`$stable`, `nexttime`, navngitte property/sequence) | ✓✓ | ✓✓ | ✓✓ | **98** | Kjernen i faget. Både MC og skriveoppgaver hvert år. |
| 2 | **SystemC språk & scheduling** (SC_MODULE, SC_METHOD/THREAD, sensitivity, `sc_event`, `notify`/`wait`, elaboration, delta-sykluser, simuler utskrift) | ✓✓ | ✓✓ | ✓✓ | **96** | Hele Problem 4/5 hvert år. Mye kodelesing. |
| 3 | **Formell verifikasjon: IPC, reachability & invarianter** (interval property checking, over-approksimasjon, spuriøse motbevis, closed-under-reachability, invariant som styrker prov) | ✓✓ | ✓✓ | ✓✓ | **92** | Alle tre år. Hjertet av «formell»-blokken. |
| 4 | **TLM – Transaction Level Modelling** (untimed/timed, abstraksjonsnivå, HW/SW-codesign, «local time»/slack, blocking/non-blocking-porter) | ✓✓ | ✓✓ | ✓✓ | **85** | I både MC og SystemC-blokk hvert år. |
| 5 | **SystemVerilog simuleringsmodell / scheduling-regioner** (Preponed→Active→…→Postponed, races, glitches, deferred/`#0`-assertions, reactive-region) | ✓✓ | ✓✓ | ✓ | **82** | Tungt hos Morrison; MC-punkt også i 2017. |
| 6 | **Coverage** (code vs. functional coverage, covergroup/coverpoint/bins, når er verifikasjon «komplett») | ✓✓ | ✓✓ | – | **68** | Sterkt 2015+2016 (teori + skriv covergroup). Fraværende 2017. |
| 7 | **Constrained random verification** (`rand`, `constraint`, `inside`, hvilke verdier kan/ikke kan genereres) | ✓ | ✓ | – | **58** | 2015 (forklar) + 2016 (MC på constraint-løsning). |
| 8 | **Temporallogikk / CTL / Kripke / model checking** (CTL-syntaks, states vs. paths, fixpunkt-evaluering, liveness `always s_eventually`, fairness) | – | – | ✓✓ | **55** | Kun 2017 (Svarstad), men da tungt (P1 + hel P3). Kan komme igjen. |
| 9 | **FSM-/RTL-design & Moore-maskiner** (identifiser tilstand fra utganger, skriv property som beskriver FSM-atferd, `square = x²`) | ✓ | – | ✓✓ | **55** | 2015 (error-tracker) + 2017 (kvadrat-FSM). |
| 10 | **SAT-basert avrulling / bounded model checking** (rull ut FSM over tidsintervall, sett opp boolsk funksjon, unsat ⇒ property holder) | ✓✓ | – | – | **40** | Kun 2015, men en hel deloppgave. Kobler til IPC. |
| 11 | **Vacuity / vacuous pass** (implikasjon sann når antecedent falsk; hvordan unngå) | – | – | ✓✓ | **35** | Kun 2017, men eksplisitt 4-poengs oppgave. |
| 12 | **SoC-arkitektur & designsyklus** (hvorfor SystemC/TLM; sen HW/SW-partisjonering; tegn SoC med kjerner/DRAM/SRAM) | ✓ | ✓ | – | **45** | MC + tegneoppgave. |
| 13 | **Assertion-basert verifikasjon på FPGA / emulering** (hva er synthesizable i en assertion, action blocks, fart vs. simulering) | – | ✓ | – | **22** | Kun 2016, ett punkt. |
| 14 | **Nye SystemVerilog-trekk vs. Verilog** (assertions, interfaces, programs) | – | – | ✓ | **20** | Kun 2017, ett punkt. |

### Temaer pensum-gjettingen bommet på (ærlig avklaring)

Oppdraget listet flere *mulige* temaer som **ikke** forekommer i noe av de tre
settene, og som derfor **ikke** bør prioriteres i boka:

- **Testbarhet / DFT: scan-chains, BIST, ATPG** – ingen forekomster. Dette er
  ikke et verifikasjons-/testbarhetsfag i DFT-forstand; det er et **funksjonelt
  verifikasjonsfag** (SVA + formell + SystemC/TLM).
- **Fault-modeller (stuck-at o.l.)** – ingen forekomster.
- **Clock domain crossing (CDC) / metastabilitet** – ingen forekomster.
- **Timing/klokke-analyse (setup/hold, kritisk sti)** – ingen forekomster (det
  hører hjemme i «Design av digitale systemer 1»/digitalteknikk).
- **Tradisjonell logikksyntese / FPGA-flyt (place & route, ASIC-flyt)** – kun
  perifert (FPGA nevnes én gang som *emuleringsplattform for assertions*, ikke
  som synteseflyt). **UVM** står i emnebeskrivelsen, men er **ikke** eksplisitt
  eksamenert i disse tre settene (constrained random + program-baserte testbenk
  er nærmeste treff) – dekk UVM lett, men prioriter SVA/SystemC/formell.

Dette er den viktigste kalibreringen mot forhåndsantakelsen: **faget er smalere
og mer verifikasjonsorientert enn en generisk «avansert digital design»-profil.**
De fire søylene SVA, SystemC/TLM, formell verifikasjon og
simulator-/scheduling-semantikk bærer ~90 % av poengene.

---

## 3. Oppgavesjangre: design/kode vs. forklar vs. verifiser

Grovfordeling av poeng over de tre settene (estimert, siden noen oppgaver
blander sjangre):

| Sjanger | Hva det innebærer | Anslått andel | Eksempler |
|---------|-------------------|:-------------:|-----------|
| **Konsept/teori (forklar, MC)** | Definer, forklar, velg riktig påstand | **~40 %** | All Problem 1; «kode vs. functional coverage»; TLM-prinsipper; preemptiv scheduling |
| **Kodeforståelse / sporing** | Les SVA/SystemC og forutsi utskrift, scheduling, verdier | **~25 %** | Simuler `clock_gen` (2015); tell region-eksekveringer (2016); `countme`-antall (2017); reverse-engineer `time_thread` (2016) |
| **Kodeskriving (design)** | Skriv SVA-property/sequence, covergroup, SystemC-prosess, testbenk | **~20 %** | Skriv `ready`/`p_burst_error` (2015); covergroup (2016); `square = x²` (2017) |
| **Formell resonnering / diagram** | Reachability, invarianter, motbevis-analyse, timing-/Kripke-diagram, SAT-avrulling | **~15 %** | IPC-properties (2015/2016); ekte vs. falskt motbevis (2017); tegn SAT-modell (2015) |

**Balanse kode vs. teori:** Regner vi «kodeforståelse + kodeskriving» som
kodearbeid, er settet omtrent **45 % kode-involvert, 55 % teori/resonnering**.
Men merk at *kodeskriving fra scratch* bare er ~20 %; mesteparten av
kode-arbeidet er å **lese og analysere gitt kode**. Boka bør derfor trene minst
like mye på «forstå denne SVA/SystemC-snutten» som på «skriv en ny».

**Ingen numerisk regning.** Kalkulatoren (kode D) brukes knapt. Ferdigheten som
testes er **HDL-lesing/-skriving + formelt-logisk resonnement**.

---

## 4. Sensorkrav – hva som gir og trekker poeng

Fasitene er **fullstendige modellsvar med poengspesifikasjon** (særlig 2016
viser eksplisitt «1p», «0,5p», «2p» per delmoment). Det gir uvanlig god innsikt
i sensurlinja:

1. **Delpoeng er finkornet og additivt.** F.eks. 2016 P2a (FPGA-assertions):
   1p for «emulering av assertions + design side ved side», 0,5p for «action
   blocks er ikke syntesbare, resten er», 0,5p for «FPGA raskere enn
   simulator». Et fullt svar må treffe *hvert* delmoment eksplisitt – det holder
   ikke å være «i nærheten».
2. **Fasiten aksepterer flere korrekte løsninger.** 2017 P4c gir *tre* gyldige
   måter å fikse et falskt motbevis på (legg til reachability-sequence; start
   property i reset-tilstand; anta starttilstand). 2015 P2c gir tre ekvivalente
   assertion-formuleringer. **Sensor er ute etter riktig resonnement, ikke én
   fasitstreng.** Boka bør vise flere veier og forklare hvorfor de er
   ekvivalente.
3. **Syntaks vurderes mildt på skriveoppgaver, men logikken strengt.** 2016 P2d:
   «syntax not strict» – 1p for riktige coverpoints, 2p for riktige bins.
   Poenget ligger i at du forstår *hva* som skal dekkes, ikke i semikolon.
4. **Skille ekte vs. spuriøst motbevis er selve kjerneferdigheten i formell
   del.** Gjennomgangstema 2015/2016/2017: en IPC/property-checker kan gi
   *falske negative* fordi den over-approksimerer tilstandsrommet. Full uttelling
   krever at kandidaten (a) korrekt klassifiserer motbeviset og (b) foreslår
   riktig botemiddel (invariant/reachability for falskt; property-/design-fiks
   for ekte). Dette er den vanligste «skiller A-fra-C»-oppgaven.
5. **Completeness-argumenter må være konkrete.** 2015 P3c-4: «ville en formell
   completeness-sjekk lykkes?» – svaret «nei» må begrunnes med *hvilke*
   transisjoner/utganger som ikke er dekket (no-error-operasjonen mangler;
   `correct_o`/`dismiss_o` ikke verifisert i F-tilstand). Vage svar gir lite.
6. **Fasiten forankres i konkret pensumlitteratur.** Referanser i løsningene:
   *«SVA: The Power of Assertions in SystemVerilog»* (Ben Cohen m.fl.) med
   sidetall (s. 41, s. 53, kap. 18 s. 92–94/425), samt eksterne slides
   (Verilab func-cov-paper). Formell-terminologien (**Interval Property Checking,
   operational properties, reachability invariants**) peker mot Wolfgang Kunz'
   skole / OneSpin-tradisjonen. Boka bør bruke **samme terminologi og notasjon**
   som disse kildene for at studenten kjenner seg igjen.

---

## 5. Typiske feil (utledet fra fasit og distraktorer)

- **Blande `$rose`/`$posedge` og boolean vs. event** (2015 P1c): `$rose` er en
  boolsk funksjon i uttrykk; `$posedge` er en klokke-/kant-hendelse. Klassisk MC-felle.
- **Blande overlappende og ikke-overlappende implikasjon** (`|->` vs. `|=>`) og
  telle `##`-forsinkelser feil (2017 P2d). `a |-> ##1 b` ≠ `a |=> ##2 b`.
- **Tro at 100 % code coverage = ferdig verifisert** (2015 P1a): korrekt svar er
  at *både* code- og functional coverage må til; ingen av dem er alene
  tilstrekkelig.
- **Feil om SystemVerilog scheduling-regioner** (2015 P1d, 2016 P1a): reactive
  region kjører program-/checker-setninger; concurrent assertions samples i
  preponed/observed. Deferred/`#0`-assertions er *ufølsomme for glitcher* i
  active region (2017 P1b) – en vanlig misforståelse.
- **Tro at IPC ser *færre* tilstander enn de reachable** (2016 P3b): feil –
  formelle teknikker **over-approksimerer** (ser *flere*), derfor *falske*
  negative, aldri falske positive.
- **Glemme reachability i formell prov** og dermed feilklassifisere et
  **falskt** motbevis som en ekte designfeil (2017 P4c) – eller motsatt.
- **Glemme sensitivity list i SystemC** (2017 P5a): en `SC_METHOD` uten
  sensitivity kjøres **kun én gang** (ved t=0). Undervurdere delta-sykluser og
  `notify(t)`-timing (2016 P4a: timed notify betyr at bare siste planlagte event
  overlever – preemptiv scheduling).
- **Feil om SystemC-faser**: elaboration (bygg hierarki/bind porter) skjer *før*
  `sc_start()`; evaluate-update-løkken starter *med* `sc_start()` (2015 P1j,
  2016 P1g).
- **Bruke tilstandsvariabler man ikke har tilgang til** i property-skriving
  (2015 P3c-1): i en Moore-FSM må tilstanden identifiseres fra **utgangene**,
  ikke fra interne signaler.
- **Vacuous pass**: rapportere «PASS» når antecedent aldri er sann, og tro det
  betyr noe (2017 P2b).

---

## 6. HDL- og metodeapparat boka må lære opp i

Dette er verktøykassa studenten må beherske **utenat** (husk: gjeldende eksamen
er kode D / lukket bok):

**SystemVerilog Assertions (SVA)**
- Immediate vs. concurrent vs. deferred (`#0`/`final`) assertions.
- Sequence-operatorer: `##n`, `##[a:b]`, `[*n]`/`[*a:b]`, `[->n]` (goto),
  `[=n]`, `first_match`, `throughout`, `within`.
- Implikasjon: `|->` (overlapping) vs. `|=>` (non-overlapping); `implies`,
  `and`, `or`, `not`.
- Sampled value-funksjoner: `$rose`, `$fell`, `$stable`, `$past(x,n)`.
- Property-operatorer: `nexttime[n]`, `always`, `s_eventually` (liveness),
  `until`; svak vs. sterk semantikk.
- `disable iff(...)`, navngitte `sequence`/`property` for gjenbruk, `bind`.
- Vacuity og hvordan unngå den.

**Coverage / stimulus**
- `covergroup`/`coverpoint`/`bins` (inkl. `bins[N]`-array og range-bins).
- Code vs. functional coverage – definisjon og forskjell.
- Constrained random: `rand`/`randc`, `constraint`, `inside {[a:b]}`,
  implikasjons-constraints (`->`), arv av constraints.

**SystemVerilog simuleringsmodell**
- Regionrekkefølge Preponed → Active → Inactive → NBA → Observed → Reactive →
  Re-reactive → Re-NBA → Postponed; hvor assertions samples/evalueres; races og
  glitches.

**SystemC / TLM**
- `SC_MODULE`, `SC_CTOR`/`SC_HAS_PROCESS`, `SC_METHOD` vs. `SC_THREAD` vs.
  `SC_CTHREAD`; sensitivity list (statisk) og `wait()`/`next_trigger()` (dynamisk).
- `sc_event`, `notify()` (immediate/delayed/timed), `wait(ev)`; delta-sykluser.
- Faser: elaboration → initialisation → evaluate-update; preemptiv,
  ikke-preemptiv? (SystemC bruker **ikke-preemptiv/kooperativ** kjøring av
  prosesser, men **preemptiv event-scheduling** – én event per objekt).
- Kanaler: primitive (`sc_signal`, `sc_fifo`, `sc_mutex`, `sc_semaphore`,
  `sc_buffer`) vs. hierarkiske; porter (`sc_port`, `sc_export`), interface-metoder.
- TLM: untimed vs. timed; abstraksjonsnivå; «local time»/slack; blocking vs.
  non-blocking; master/slave; hvorfor det gir HW/SW-codesign og >1000× fart.
- Kunne **lese en SystemC-modul og skrive nøyaktig simuleringsutskrift** (med
  tidsstempler), og motsatt.

**Formell verifikasjon**
- Interval Property Checking (IPC): operasjonelle properties over et
  tidsintervall n; kompleksitet vokser med n (flere time-frames → større
  SAT-instans).
- Reachability, invarianter, «closed under reachability»; hvordan en invariant
  styrker en prov og fjerner **spuriøse (falske) motbevis**.
- SAT-basert avrulling (bounded model checking): rull ut FSM, bygg boolsk
  funksjon; **unsatisfiable ⇔ property holder**.
- Induksjon for å bevise invarianter.
- **Temporallogikk/CTL (Svarstad-linja):** Kripke-modeller; CTL-syntaks (hver
  temporal operator `X/F/G/U` må ha kvantor `A`/`E`); states-vs-paths;
  fixpunkt-karakterisering og iterativ evaluering; liveness/fairness.

---

## 7. Prognose og prioritering for boka

Med de fire faste søylene og skiftet mellom faglærere er dette den anbefalte
vektingen (andelen står i forhold til forventet eksamensuttelling):

| Prioritet | Område | Hvorfor |
|:---------:|--------|---------|
| **1 (må sitte)** | **SVA – lese og skrive properties/sequences** | Høyest score (98), i både MC og skriveoppgaver hvert år. Lukket bok ⇒ må kunne syntaks utenat. |
| **1 (må sitte)** | **SystemC – lese kode og skrive nøyaktig utskrift; prosesser/events/scheduling** | Score 96, en hel blokk hvert år; kodesporing er den mest «tekniske» ferdigheten. |
| **1 (må sitte)** | **Formell: IPC, reachability, ekte vs. falskt motbevis** | Score 92; «skiller A-fra-C»-oppgaven hvert år. |
| **2 (høy)** | **SystemVerilog scheduling-regioner + deferred/`#0`-assertions** | Score 82; tilbakevendende MC-feller + en analyseoppgave. |
| **2 (høy)** | **TLM-prinsipper (untimed/timed, local time, HW/SW-codesign)** | Score 85; i både MC og SystemC-blokk. |
| **2 (høy)** | **Coverage (code/functional, covergroup) + constrained random** | Score 68/58; sterkt hos Morrison. Usikkert om Svarstad viderefører, men lavt-hengende poeng. |
| **3 (dekk grundig, men kortere)** | **CTL/Kripke/model checking + vacuity + liveness** | Score 55/35; kun 2017, men da tungt. Ta høyde for at nåværende faglærer kan følge denne linja. |
| **3** | **FSM-/RTL-design uttrykt som SVA; SAT-avrulling** | Score 55/40; konkret designoppgave 2/3 år. |
| **4 (lett omtale)** | **SoC-arkitektur/designsyklus; FPGA-emulering av assertions; SV-vs-Verilog; UVM (nevnt i emnebeskrivelse)** | Lav frekvens; små poeng, men gratis MC-uttelling hvis nevnt. |

**Konkret leseplan for en kandidat:** (1) Drill SVA-operatorer til automatikk –
både MC-feller og skriving. (2) Tren på å «kjøre» SystemC-moduler for hånd og
skrive utskrift med tidsstempler. (3) Øv systematisk på å klassifisere
IPC-motbevis (ekte vs. spuriøst) og foreslå riktig fiks. (4) Puggekort på
scheduling-regioner, SystemC-faser, kanal-typer, TLM-begreper. (5) Ha CTL/Kripke
og vacuity som «sikringstema» i tilfelle Svarstad-linja.

---

## 8. Anbefalt arketype for læreboka

**Arketype: «Verifikasjonshåndbok med drillbar syntaks + rikt motbevis-galleri».**

Begrunnelse ut fra funnene:

- Faget er **konsept- og kodedrevet, ikke regnedrevet** – så boka bør ikke ligne
  en matte-/fysikkbok med formelsamling og regneeksempler, men en **HDL-/metode-
  håndbok** der hvert kapittel er «forklaring → annotert kodeeksempel → skriv-selv-
  oppgave → typisk feil».
- Fordi **gjeldende eksamen er lukket bok (kode D)**, må boka ha eksplisitte,
  komprimerte **referanse-/puggeark** (SVA-operatorer, SystemC-faser og
  -kanaler, scheduling-regioner, TLM-begreper, CTL-syntaksregler) som student
  kan memorere – erstatningen for quickreference-kortet som før lå ved eksamen.
- Fordi sensuren belønner **flere gyldige løsninger og presist resonnement**, bør
  hvert løsningsforslag vise 2–3 alternative korrekte svar og forklare
  ekvivalensen (særlig for SVA-properties og motbevis-fikser).
- Fordi den vanskeligste og mest diskriminerende oppgavetypen er **ekte vs.
  spuriøst IPC-motbevis**, bør boka ha et eget «motbevis-galleri» med mange
  worked examples av begge slag og en fast beslutningsprosedyre.
- Fordi arkivet spenner over **to faglærervinklinger på formell verifikasjon**,
  bør den formelle delen dekke **både** den operasjonelle IPC/SAT-linja **og**
  CTL/Kripke/model-checking-linja, tydelig merket, så boka er robust mot hvem som
  nå eksaminerer.
- **Struktur som følger eksamenens fire søyler**, med et innledende «hvordan er
  eksamen bygd opp + minuspoeng-strategi på flervalg»-kapittel og et avsluttende
  sett med **fullstendige mock-eksamener** i 2015/2016- og 2017-stil.

Minimumskravene i prosjektet (≥500 quiz, ≥500 flashcards, ≥4 prøver per tema,
utfyllende studieguide) passer godt: SVA-operatorer, SystemC-API, scheduling-
regioner, TLM-begreper og CTL-syntaks er ideelt flashcard-/quiz-stoff, mens
motbevis-analyse og kodesporing egner seg som temaprøver.

---

## 9. Kildeliste

**Primærkilder (NTNUs eksamensarkiv, alle med fullstendig løsningsforslag):**
- TFE4171, ordinær eksamen vår 2015 (2. juni 2015), oppgaver + løsningsforslag (engelsk). Faglærer Donn Morrison. 50 poeng.
- TFE4171, ordinær eksamen vår 2016 (4. juni 2016), oppgaver + løsningsforslag (engelsk). Faglærer Donn Morrison. 50 poeng.
- TFE4171, ordinær eksamen vår 2017 (15. mai 2017), oppgaver + løsningsforslag (engelsk). Faglærer Kjetil Svarstad. 60 poeng.

**Emnebeskrivelse:**
- NTNUs emneside for TFE4171 «Design av digitale system 2» (verifisert aktiv juli 2026): 7,5 sp, 4 t skriftlig eksamen (75 %) + prosjektrapport (25 %), hjelpemiddelkode D, engelsk, obligatoriske lab-øvinger.

**Pensumlitteratur referert i fasitene (til terminologisk forankring):**
- Ben Cohen, Srinivasan Venkataramanan, Ajeetha Kumari m.fl.: *SystemVerilog Assertions Handbook / «SVA: The Power of Assertions in SystemVerilog»* (referert med sidetall i 2016-fasiten).
- SystemC/TLM-materiale (SystemC Language Reference / TLM-2.0-standard; «SystemC Quickreference Card» vedlagt 2015/2016-settene).
- Formell verifikasjon i Interval-Property-Checking-tradisjonen (Wolfgang Kunz / OneSpin-skolen) for IPC, operasjonelle properties og reachability-invarianter; CTL/Kripke/model-checking-materiale for Svarstad-linja.

**Forbilder for format:**
- `docs/hoyskole-boker/in2060/EKSAMENSANALYSE.md` (digitalteknikk/VHDL).
- `docs/hoyskole-boker/tdt4260/EKSAMENSANALYSE.md` (datamaskinarkitektur).
