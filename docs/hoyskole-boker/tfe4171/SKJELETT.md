# Bokskjelett: TFE4171 Design av digitale systemer 2 — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNUs eksamensarkiv for TFE4171: **tre komplette
> oppgavesett med fullstendige løsningsforslag** — vår 2015, vår 2016 og vår
> 2017, alle på engelsk, samt NTNUs gjeldende emnebeskrivelse). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) i sin **kodefag-/verifikasjonsvariant** —
> se §1: dette er ikke et regne-/tallknusingsfag, men et **funksjonelt
> verifikasjonsfag** der eksamen består av å **lese, forklare, skrive og
> resonnere om HDL-kode og formelle modeller**. Kapittel-DNA-ene (teori / drill /
> øvingseksamen) er obligatoriske og tilpasset dette (se §1 «Avvik fra DNA»).
> **All notasjon følger emnets og pensumbøkenes konvensjoner**: SystemVerilog
> Assertions (SVA) slik Ben Cohens *SystemVerilog Assertions Handbook* bruker
> dem, SystemC/TLM slik SystemC-LRM / TLM-2.0 bruker dem, og formell
> verifikasjon i **Interval-Property-Checking-tradisjonen** (Kunz/OneSpin) pluss
> **CTL/Kripke/model-checking**-terminologien. Alle oppgaver, tall, kretser,
> SVA-properties, SystemC-moduler, simuleringsutskrifter og kodebiter i den
> ferdige boka skal være **nyskrevne** (opphavsrett): syntaks, operatorer og
> standardnotasjon er allmenn faglig kunnskap, men ingen oppgavetekster, fasiter
> eller sensorformuleringer fra reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tfe4171` |
| Tittel | **TFE4171 Design av digitale systemer 2 (NTNU)** |
| Institusjon | **NTNU** (Norges teknisk-naturvitenskapelige universitet — finnes fra før, jf. TDT-/TMA-/TFY-emnene) |
| Level | `'Høyskole'` |
| Arketype | **Regnefag / verifikasjonsfag** — kodefag-variant av DNA-regnefag: «verifikasjonshåndbok med drillbar syntaks + rikt motbevis-galleri» (se «Avvik fra DNA») |
| Undervisnings-/eksamensspråk | **Engelsk** (emnet undervises og eksamineres på engelsk; boka skrives på norsk bokmål med **engelsk fagterm og all kode/kildekode på engelsk**) |
| Antall kapitler | **35** (2 eksamenskart/håndverk + 29 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 480 min ≈ 41 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **704** (krav ≥500; siktet høyt — **flervalg med minuspoeng ER en eksamenssøyle**, se §5) |
| Flashcards totalt | **620** (krav ≥500; siktet høyt — **lukket bok** ⇒ SVA-/SystemC-syntaks og formelle begreper må pugges) |
| Prøver | **32** (4 per temadel 1–8) + **3 øvingseksamener** (kap. 9.2–9.4) |

**Pitch (én avsnitt):** TFE4171 er NTNUs dybdefag i **funksjonell verifikasjon av
digital maskinvare** — hvordan man *beviser* at et design gjør det det skal, ikke
hvordan man bygger det (det var «Design av digitale systemer 1»). Faget hviler på
**fire faste søyler** som kommer i hvert eneste eksamenssett, i samme rekkefølge,
uansett faglærer: (1) **flervalg med minuspoeng** (~18–20 poeng, en bred sveip
over hele pensum), (2) **SystemVerilog Assertions (SVA)** — skrive og lese
properties/sequences, (3) **formell verifikasjon** — IPC, reachability,
invarianter og (fra 2017) CTL/Kripke-modellsjekking, og (4) **SystemC / TLM** —
lese kode og forutsi simuleringsutskrift. Vurderingen er **4 timers skriftlig
skoleeksamen (75 %) + prosjektrapport (25 %)**, karakter **A–F**, og **selve
eksamenen må bestås separat** (E eller bedre — det holder ikke at totalen består).
Det finnes **ingen regneoppgaver**: kalkulatoren er nesten overflødig. Ferdigheten
som testes er **HDL-lesing/-skriving + formelt-logisk resonnement**. Boka speiler
dette 1:1 — den er en **HDL-/metodehåndbok** der hvert kapittel er «forklaring →
annotert kodeeksempel → skriv/spor-selv-oppgave → typisk feil», med komprimerte
**puggeark** for hver syntaksmodul (fordi eksamen er lukket bok), et eget
**motbevis-galleri** for fagets vanskeligste oppgavetype, og mock-eksamener bygd
som de fire søylene.

**⚠️ To forbehold som skal stå tydelig i Del 0:**

1. **Lite arkiv (3 sett) — men de fire søylene er identiske hvert år.**
   Konklusjonene er robuste der alle tre settene peker samme vei (og det gjør de
   for søylene: SVA + formell + SystemC/TLM + minuspoeng-flervalg bærer ~90 % av
   poengene hvert år). Der et tema kun dukker opp ett år (CTL/Kripke, vacuity,
   SAT-avrulling), er det merket eksplisitt. Med tre sett er frekvenstallene
   **tendens, ikke statistikk**.

2. **Eksamensformen er endret: kode C → kode D (lukket bok) `(verifiser)`.** De
   tre arkivsettene (2015–2017) hadde **hjelpemiddelkode C** (trykt/håndskrevet
   materiale tillatt) — i 2015/2016 lå det til og med et komplett *SystemC
   Quickreference Card* vedlagt selve oppgaven. NTNUs *gjeldende* emnebeskrivelse
   oppgir **hjelpemiddelkode D: kun enkel kalkulator** — i praksis **lukket bok**.
   Konsekvens for boka: studenten kan i dag **ikke** slå opp SVA-/SystemC-syntaks
   under eksamen og må kunne notasjonen **utenat**. De komprimerte puggearkene i
   boka **erstatter** quickreference-kortet. (Marker overgangen `(verifiser)` mot
   gjeldende emneside — den kan endres.)

**Faglærerskifte 2016 → 2017 (viktig for tolkning av arkivet, skal stå i Del 0):**
Arkivet spenner over et skifte av emneansvarlig fra **Donn Morrison** (2015/2016)
til **Kjetil Svarstad** (2017). Sporet er tydelig:
- **Morrison (2015 + 2016)** er simulator-/verktøynær: mye på **scheduling-regioner**,
  **coverage**, **constrained random**, og **IPC/reachability** (SAT-operasjonell)
  i den formelle delen.
- **Svarstad (2017)** dreier den formelle delen mot **temporallogikk** — **CTL,
  Kripke-modeller, fixpunkt-evaluering, liveness (`s_eventually`)** — og legger til
  en egen Kripke-oppgave; SystemC-delen blir mer konseptuell (preemptiv vs.
  ikke-preemptiv scheduling, «local time»-TLM).

**Praktisk lærdom (styrer Del 4):** boka dekker **begge** faglæreres vinkling på
formell verifikasjon — **både** den operasjonelle **IPC/SAT-linja** (Morrison)
**og** **CTL/Kripke/model-checking-linja** (Svarstad) — tydelig merket, fordi vi
ikke vet hvilken linje den nåværende eksamenen følger, og fordi begge er
kjernepensum.

**Kritisk stilregel (gjelder HELE boka) — «lukket bok, fire søyler, flere gyldige svar»:**

1. **Lukket bok ⇒ syntaks utenat, med puggeark.** Hvert syntakstungt kapittel
   (SVA, SystemC, scheduling-regioner, CTL) avsluttes med et komprimert
   **puggeark** (`collapsible` «Puggeark») som studenten kan memorere. Del 9 samler
   alle puggearkene til ett **notasjonsark**. Dette er erstatningen for
   quickreference-kortet.
2. **Flervalg med minuspoeng — gjett bare når du kan eliminere.** I Problem 1
   straffes gale avkrysninger: **+2 poeng** (2015/2016) / **+3 poeng** (2017) for
   riktig, **0 for blankt**, og **−1 / −1,5 for galt** (eller for mange avkryssede).
   Til forskjell fra mange norske realfagsemner (og fra IN2060) lønner det seg
   **ikke** alltid å gjette. Boka lærer eksplisitt en **forventningsverdi-strategi**
   (se kap. 0.2 og 9.1): svar blankt hvis du ikke kan eliminere nok alternativer.
3. **Sensor godtar FLERE gyldige svar — riktig resonnement, ikke fasitstreng.**
   Fasitene aksepterer flere korrekte løsninger (2017 gir *tre* måter å fikse et
   spuriøst motbevis; 2015 gir tre ekvivalente assertion-formuleringer). Hvert
   løsningsforslag i boka viser **2–3 alternative korrekte svar** og forklarer
   ekvivalensen — særlig for SVA-properties og motbevis-fikser.
4. **Syntaks vurderes mildt på skriveoppgaver, logikken strengt.** «Syntax not
   strict» — poeng gis for at du forstår *hva* propertyen/covergroupen skal
   uttrykke, ikke for semikolon. Løsningsforslag prioriterer korrekt logikk og
   forklarer den, men holder ren, idiomatisk syntaks som forbilde (fordi lukket
   bok krever at studenten kan produsere den).
5. **Delpoeng er finkornet og additivt — treff hvert delmoment.** Fasitene
   spesifiserer poeng per delmoment («1p», «0,5p», «2p»). Et fullt svar må treffe
   *hvert* delmoment eksplisitt; «i nærheten» gir ikke full uttelling. Bokas
   løsningsforslag markerer hvilke delmomenter som gir poeng.
6. **Skille ekte vs. spuriøst motbevis er kjerneferdigheten i formell del.** En
   IPC/property-checker **over-approksimerer** tilstandsrommet og kan gi *falske
   negative* (spuriøse motbevis), **aldri** falske positive. Full uttelling krever
   at kandidaten (a) korrekt **klassifiserer** motbeviset og (b) foreslår riktig
   **botemiddel** (reachability/invariant for spuriøst; property-/design-fiks for
   ekte). Boka har et eget **motbevis-galleri** (Del 5) med fast beslutningsprosedyre.
7. **Emnets/pensumets notasjon er fasit.** Bruk SVA-operatorene (`|->`, `|=>`,
   `##`, `[*]`, `$rose`, `s_eventually` …), SystemC-API-et (`SC_MODULE`,
   `SC_METHOD`, `sc_event`, `notify`, `wait` …), scheduling-regionnavnene
   (Preponed → Active → … → Postponed), IPC-terminologien (operational property,
   reachability invariant, over-approximation) og CTL-syntaksen (`AG`, `EF`,
   `A[·U·]` …) nøyaktig som oppgavene forventer gjenkjenning. Engelsk fagterm ved
   første forekomst; **all kode på engelsk**.

**Fire-søyle-regelen (skal stå i Del 0 og styre hele boka):** Hvert sett er bygd
av de samme fire problemblokkene i samme rekkefølge: (1) MC med minuspoeng, (2)
SVA, (3) formell verifikasjon, (4) SystemC/TLM. Konsekvens for boka: temadelene
grupperes rundt søylene (SVA → scheduling → formell → motbevis → SystemC → TLM →
coverage), og hele Del 9 (øvingseksamener) speiler de fire søylene direkte. Ingen
søyle kuttes; frekvensen styrer *omfanget* innad.

**Ærlig avgrensning (skal stå i Del 0 — «hva faget IKKE er»):** Til tross for navnet
«Design av digitale systemer 2» er dette et **rent funksjonelt verifikasjonsfag**.
Følgende **forekommer ikke** i noe av de tre settene og skal **utelates**:
- **Testbarhet / DFT** (scan-chains, BIST, ATPG) — ingen forekomster.
- **Fault-modeller** (stuck-at o.l.) — ingen forekomster.
- **Clock domain crossing (CDC) / metastabilitet** — ingen forekomster.
- **Timing-/klokkeanalyse** (setup/hold, kritisk sti) — ingen forekomster (hører
  til «Design av digitale systemer 1»/digitalteknikk).
- **Logikksyntese / FPGA-flyt** (place & route, ASIC-flyt) — kun perifert (FPGA
  nevnes én gang som *emuleringsplattform for assertions*, ikke som synteseflyt).
- **UVM** står i emnebeskrivelsen, men er **ikke** eksplisitt eksamenert i de tre
  settene (constrained random + program-baserte testbenker er nærmeste treff) —
  dekkes **lett** (kap. 8.3), ikke prioritert.

**Avvik fra DNA/README-malen (dokumentert):**

- **Kodefag-/verifikasjonsvariant av DNA-regnefag.** DNA-regnefag forutsetter
  regne-/utledningsoppgaver med (entydige) fasitsvar. TFE4171 har **ingen numerisk
  regning**. Boka er derfor en **HDL-/metodehåndbok** (jf. analysens §8), ikke en
  matte-/fysikkbok med formelsamling: hvert kapittel er «forklaring → annotert
  kodeeksempel → skriv/spor-selv-oppgave → typisk feil». DNA-ens `theorem`-blokker
  brukes til **syntaks-/semantikk-kontrakter** (SVA-operatorer, SystemC-API,
  scheduling-regionrekkefølge, IPC-/CTL-regler) og til **klassifiseringsprosedyrer**
  (ekte vs. spuriøst motbevis) — dette er bokas «teoremer».
- **«Kjør koden i hodet» er en egen kodesporingssjanger (R4).** ~25 % av poengene
  er **kodelesing/sporing** (forutsi utskrift, scheduling, verdier fra gitt
  SVA/SystemC), mer enn kodeskriving fra scratch (~20 %). Boka har derfor en egen
  **kodesporingssjanger** med systematisk fremgangsmåte (hold en «tavle» over
  tid/delta-sykluser/signalverdier) i alle drillkapitler (2.6, 3.3, 6.5), og
  quiz kalibreres tungt mot sporing (det er direkte quiz-vennlig).
- **Flervalg med minuspoeng ER en eksamenssøyle — ikke bare faktakontroll.**
  Problem 1 (~18–20 p, ~36–40 %) er ekte eksamen. Plattformens MC-quiz er derfor
  **direkte eksamenstrening** og kalibreres høyt (704). Tre konsekvenser: (i)
  `options[0]` = riktig svar (runtime stokker); (ii) hver quiz-forklaring begrunner
  både hvorfor det riktige er riktig **og** hvorfor de sentrale distraktorene er
  gale (det er den diskriminerende ferdigheten); (iii) fordi eksamen har
  **minuspoeng**, trener kap. 0.2/9.1 eksplisitt gjettestrategi (quiz-motoren viser
  forventningsverdi-resonnementet i forklaringene på utvalgte «feller»).
- **«Symbol- og formelliste» → «Syntaks- og konstruksjonsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et verifikasjonsfag
  er det presise apparatet ikke formler, men **syntaks og konstruksjoner**:
  SVA-operatorer, SystemC-API, scheduling-regioner, IPC-/CTL-begreper. Blokken
  heter derfor **«Syntaks- og konstruksjonsliste»** og lister ALT delkapitlet
  bruker, med kort forklaring/semantikk per element. Regelen «per delkapittel, ikke
  arv» beholdes. Etterfulgt (i syntakstunge kapitler) av et **«Puggeark»**
  (`collapsible`) — den komprimerte, memorerbare versjonen (lukket bok).
- **Motbevis-galleriet er en egen del (Del 5).** Fagets mest diskriminerende
  oppgavetype (ekte vs. spuriøst IPC-motbevis + fiks, «skiller A-fra-C» hvert år)
  får en egen del med en fast **klassifiseringsmal** (`theorem`) og mange worked
  examples av begge slag — jf. analysens §8-anbefaling om et «rikt motbevis-galleri».
- **Drillkapitler ligger i sine temadeler** (2.6, 3.3, 5.2, 6.5), ikke samlet i
  siste del, fordi hver høyfrekvent sjanger (SVA-skriving/-sporing, region-sporing,
  motbevis-klassifisering, SystemC-sporing) må drilles umiddelbart etter teorien.
  Del 9 beholder sjangerguiden og de tre øvingseksamenene.
- **Kapittelantall (35)** ligger i øvre halvdel av DNA-veiledningen (20–35) og er
  begrunnet: fire faste søyler pluss en Svarstad-linje (CTL/Kripke) som må dekkes
  parallelt med Morrison-linja (IPC/SAT), og et eget motbevis-galleri.

---

## 2. Makrostruktur

Delene grupperes rundt **eksamenens fire søyler** (SVA → scheduling → formell →
motbevis → SystemC → TLM → coverage), med et innledende eksamenskart/håndverk og et
avsluttende treningssett. Innad i hver del ordnes kapitlene etter forkunnskaper.
`sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Søyle / rolle |
|---|---|---|---|
| 0 | Eksamenskart og verifikasjonshåndverk | 2 | Prioriteringsverktøyet + de tverrgående håndverkene (minuspoeng-strategi, «kjør koden i hodet», puggeark/lukket bok). Forbeholdene (3 sett; kode C→D; faglærerskifte). |
| 1 | Verifikasjonsgrunnlag | 2 | Hvorfor/hva/dekning: hvorfor verifisere, verifikasjon vs. test, når er verifikasjon «komplett». Rammer alle fire søyler. |
| 2 | SystemVerilog Assertions (SVA) | 6 | **Søyle 2.** Score **98** — kjernen. Sekvenser, properties, sampled-value-funksjoner, vacuity + stort drillkapittel. |
| 3 | Simuleringsmodell og scheduling-regioner | 3 | Støtter søyle 1 (MC) og 4. Score **82**. Regionrekkefølge, races/glitches, deferred/`#0`, region-sporing. |
| 4 | Formell verifikasjon | 5 | **Søyle 3.** Score **92** (IPC/reachability) + **55** (CTL/Kripke). Begge faglærervinklinger. |
| 5 | Motbevis-galleriet | 2 | **Søyle 3, A-differensiator.** Ekte vs. spuriøst + fiks, fast klassifiseringsmal + galleri av worked examples. |
| 6 | SystemC — språk og scheduling | 5 | **Søyle 4.** Score **96** — hel blokk hvert år. Prosesser, events, kanaler, faser, «kjør i hodet»-drill. |
| 7 | Transaksjonsnivåmodellering (TLM) | 3 | **Søyle 4.** Score **85**. Untimed/timed, local time, blocking/non-blocking, SoC/HW-SW-codesign. |
| 8 | Testbenk og coverage | 3 | Støtter søyle 4. Score **68/58**. Code/functional coverage, covergroup, constrained random, FPGA-ABV/UVM-lett. |
| 9 | Eksamenstrening | 4 | Sjangerguide (fire søyler) + 3 komplette øvingseksamener (Morrison-stil, Svarstad-stil, blandet). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter ren
faglig avhengighet og lar frekvens styre omfang. Her styrer **eksamenens fire
søyler** delinndelingen, fordi hvert sett er bygd av de fire faste blokkene og boka
skal la studenten trene «per søyle». Rekkefølgen er likevel stort sett faglig
progressiv (SVA-syntaks → simuleringsmodellen som forklarer *når* assertions
samples → formell verifikasjon → motbevis → SystemC → TLM → coverage). Faglig
avhengighet respekteres *innad* i hver del. Drillkapitlene (2.6, 3.3, 5.2, 6.5)
ligger i sine deler. Del 9 beholder sjangerguiden og de tre øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har to ortogonale akser: **responsformen** (R1–R6, hva slags svar oppgaven
krever) og **innholdssjangeren** (A–M, temaene fra EKSAMENSANALYSE §2). Hvert
kapittel refererer begge. Del 0 presenterer dem for studenten.

### Responsformer (R) — hva slags respons kreves

| Kode | Responsform | Mekanikk | Fallgruve |
|---|---|---|---|
| **R1** | **Flervalg med minuspoeng** (Problem 1) | Konsept-/syntaksbasert; +2/+3 riktig, 0 blankt, −1/−1,5 galt | Gjette uten å eliminere (minuspoeng); syntaks-feller (`$rose` vs. `$posedge`) |
| **R2** | **Skriv SVA property/sequence** | Ofte med krav om gjenbruk via navngitt `sequence`/`property` | Feil implikasjonstype (`\|->` vs. `\|=>`); feil `##`-telling; vacuous property |
| **R3** | **Skriv/komplettér kode** (testbenk, covergroup, SystemC-prosess) | Inkl. *reverse-engineering* fra oppgitt simuleringsutskrift | Glemme sensitivity list; feil bins; logikk-feil (syntaks vurderes mildt) |
| **R4** | **«Kjør koden i hodet»** (kodesporing) | Forutsi utskrift/scheduling/verdier fra gitt SVA/SystemC | Feil delta-sykluser; ignorere region-rekkefølge; `notify(t)`-timing |
| **R5** | **Tegn/analyser diagram** | Blokkdiagram (SAT-avrulling, SoC med TLM-porter), timing-/signaltrace for SVA, states i Kripke-diagram | Feil samplingtidspunkt i trace; glemme kant i Kripke |
| **R6** | **Vurder motbevis** (counterexample) | Klassifiser ekte (designfeil) vs. spuriøst (manglende reachability) + foreslå fiks | Feilklassifisere; glemme reachability; fikse feil «lag» |

> **Minuspoeng-nyansen (R1):** Til forskjell fra IN2060 (ingen trekk, svar alltid)
> straffer TFE4171 gale avkrysninger. Forventningsverdi-regel: svar bare når du kan
> eliminere nok alternativer til at gevinsten (+2/+3 · p(rett)) overstiger tapet
> (−1/−1,5 · p(feil)). Kap. 0.2 og 9.1 trener dette eksplisitt.

### Innholdssjangre (A–M) — destillert fra EKSAMENSANALYSE §2

| Kode | Innholdssjanger | Del | Score/frekvens |
|---|---|---|---|
| **A** | **SVA — syntaks & semantikk** (sequences, `\|->`/`\|=>`, `##`, `[*]`, `$rose`/`$past`/`$stable`, `nexttime`, navngitt property/sequence) | 2 | **98** (både MC og skriving hvert år) |
| **B** | **SystemC språk & scheduling** (`SC_MODULE`, `SC_METHOD/THREAD`, sensitivity, `sc_event`, `notify`/`wait`, elaboration, delta-sykluser, simuler utskrift) | 6 | **96** (hel blokk hvert år) |
| **C** | **Formell: IPC, reachability & invarianter** (interval property checking, over-approksimasjon, spuriøse motbevis, closed-under-reachability, invariant styrker prov) | 4, 5 | **92** (alle tre år) |
| **D** | **TLM** (untimed/timed, abstraksjonsnivå, HW/SW-codesign, local time/slack, blocking/non-blocking) | 7 | **85** (MC + SystemC-blokk) |
| **E** | **SV simuleringsmodell / scheduling-regioner** (Preponed→…→Postponed, races, glitches, deferred/`#0`, reactive-region) | 3 | **82** (tungt hos Morrison; MC også 2017) |
| **F** | **Coverage** (code vs. functional, covergroup/coverpoint/bins, når er verifikasjon «komplett») | 8 | **68** (sterkt 2015+2016) |
| **G** | **Constrained random** (`rand`/`randc`, `constraint`, `inside`, hvilke verdier kan/ikke genereres) | 8 | **58** (2015+2016) |
| **H** | **Temporallogikk / CTL / Kripke / model checking** (CTL-syntaks, states vs. paths, fixpunkt, liveness/fairness) | 4 | **55** (kun 2017, men tungt — Svarstad-linja) |
| **I** | **FSM-/RTL-design uttrykt som SVA** (identifiser tilstand fra utganger, skriv property for FSM-atferd, `square = x²`) | 4 | **55** (2015 + 2017) |
| **J** | **SAT-basert avrulling / bounded model checking** (rull ut FSM, boolsk funksjon, unsat ⇔ property holder) | 4 | **40** (kun 2015, hel deloppgave) |
| **K** | **Vacuity / vacuous pass** (implikasjon sann når antecedent falsk; hvordan unngå) | 2 | **35** (kun 2017, eksplisitt 4-p oppgave) |
| **L** | **SoC-arkitektur & designsyklus** (hvorfor SystemC/TLM, sen HW/SW-partisjonering, tegn SoC) | 7 | **45** (MC + tegneoppgave) |
| **M** | **FPGA-emulering av assertions / SV-vs-Verilog / UVM** (synthesizable assertions, action blocks, nye SV-trekk) | 8 | **22/20** (lav frekvens, gratis MC-uttelling) |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/regler/
syntaks-/semantikk-kontrakter kapitlet SKAL lære (i emnets notasjon). **Syntaks- og
konstruksjonsliste** = det `collapsible`-apparatet delkapitlet krever (SVA-operatorer,
SystemC-API, scheduling-regioner, IPC-/CTL-begreper); syntakstunge kapitler har i
tillegg et **«Puggeark»** (`collapsible`, komprimert for lukket bok).
Prioritetsklasser: **perfekt** / **kunne** / **kjenne**. Hvert teorikapittel har
standard-DNA-en: Eksamensvinkel-`tip` → Forkunnskaper-`text` + Syntaks-og-
konstruksjonsliste-`collapsible` (+ Puggeark der relevant) → Motivasjon →
`definition`/`theorem` (syntaks-/semantikk-kontrakter i emnets notasjon) →
utledning/gjennomgang m/intuisjon → 2–4 `example` (siste på eksamensnivå, i reell
responsform) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på
eksamensnivå, responsformer R1–R6, alle med `solution` + `hints`) → Repetisjons-
`collapsible`. Løsningsforslag viser **2–3 gyldige alternativer** der sensor godtar
flere. Drillkapitler: Eksamensvinkel → løsningsoppskrift → sensor-kommentert case →
12–16 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart og verifikasjonshåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TFE4171

- **id:** `tfe4171-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (4 t skriftlig, A–F, eksamen 75 % + prosjekt 25 %, eksamen må bestås separat), de **fire faste søylene** (MC med minuspoeng, SVA, formell verifikasjon, SystemC/TLM), temafrekvensene, responsformene R1–R6 og innholdssjangrene A–M — pluss de to forbeholdene (3 sett; kode C→D/lukket bok) og faglærerskiftet Morrison→Svarstad som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (V2015/V2016/V2017). Skal gjengi: (i) **formen** — 4 t skriftlig skoleeksamen, engelsk, karakter A–F, **eksamen 75 % + prosjektrapport 25 %**, obligatoriske lab-øvinger godkjent for å gå opp, og **eksamen må bestås separat** (E eller bedre); (ii) **de fire faste søylene i samme rekkefølge hvert år** — Problem 1 MC (~18–20 p, ~36–40 %) → SVA (10–12 p) → formell verifikasjon (10–18 p) → SystemC/TLM (10–12 p); bredden *er* eksamensformen; (iii) **minuspoeng på MC** (+2/+3 rett, 0 blankt, −1/−1,5 galt) — kontrast til de fleste norske realfag, gjettestrategi kreves; (iv) **kode C → kode D (lukket bok) `(verifiser)`** — kan ikke lenger slå opp syntaks; puggearkene erstatter quickreference-kortet; (v) **faglærerskiftet** — Morrison (2015/2016, IPC/SAT-operasjonell + coverage + scheduling) vs. Svarstad (2017, CTL/Kripke + vacuity + konseptuell SystemC); boka dekker begge; (vi) **temafrekvens-tabellen** (A SVA 98, B SystemC 96, C IPC/reachability 92, D TLM 85, E scheduling-regioner 82, F coverage 68, G constrained random 58, H CTL/Kripke 55, I FSM-som-SVA 55, J SAT-avrulling 40, K vacuity 35, L SoC 45, M FPGA-ABV/UVM 22/20); (vii) **ingen regneoppgaver** — ferdigheten er HDL-lesing/-skriving + formelt-logisk resonnement; (viii) **hva faget IKKE er** — DFT/scan/BIST/ATPG, fault-modeller, CDC, timing-analyse og synteseflyt forekommer ikke og utelates.
- **Innholdskontrakt:** Responsform-katalogen R1–R6 (§3) + innholdssjangrene A–M som studentens sjekkliste med typisk søyle og vekt. **Den gjennomgående regelen**: de fire søylene bærer ~90 % av poengene; **SVA + SystemC-sporing + motbevis-klassifisering** er de tre «må sitte perfekt»-ferdighetene. **Prognosen for neste eksamen**: Problem 1 = bred MC-sveip (SVA-syntaks-feller, SystemC-faser, scheduling-regioner, TLM-prinsipper) med minuspoeng; Problem 2 = skriv/forklar SVA (property + sequence, ofte navngitt gjenbruk); formell blokk = IPC-property + **klassifiser motbevis** (ekte/spuriøst) + fiks, evt. Kripke/CTL (Svarstad-linja); SystemC/TLM = les modul og skriv nøyaktig utskrift + konseptuelt TLM. Avslutt med **leseplanen**: (1) drill SVA-operatorer til automatikk (MC-feller + skriving); (2) tren på å «kjøre» SystemC for hånd og skrive utskrift med tidsstempler; (3) øv systematisk på ekte-vs-spuriøst motbevis + fiks; (4) puggekort på scheduling-regioner, SystemC-faser, kanaltyper, TLM-begreper; (5) ha CTL/Kripke + vacuity som «sikringstema».
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med minuspoeng (+2 rett, −1 galt) og fire eliminerte av fem alternativer — lønner det seg å gjette? Regn ut forventningsverdien.» og «Rangér de fire søylene etter poengvekt og etter hvor mye ren pugg (lukket bok) de krever.»
- **Typiske feil:** Metafeilene — gjette blindt på MC (minuspoeng straffer det); tro en søyle «kan droppes» (alle kommer hvert år); anta at faget handler om DFT/timing/synteseflyt (det gjør det ikke); glemme at eksamen er lukket bok (kode D) og ikke pugge syntaks; overse at eksamen må bestås *separat*.
- **Quiz: 16 · Flashcards: 14** (form, fire søyler, minuspoeng, responsformer R1–R6, sjangre A–M, forbeholdene, faglærerskiftet)

#### Kapittel 0.2: Verifikasjonshåndverket — minuspoeng-strategi, «kjør koden i hodet» og puggeark

- **id:** `tfe4171-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-0-1` · **kapitteltype:** teori (håndverk)
- **description:** De tre tverrgående håndverkene som går igjen i alle temadeler, etablert samlet: (R1) **flervalg-minuspoeng-strategien** med forventningsverdi, (R4) **«kjør koden i hodet»**-kodesporing som systematisk metode (hold en tid/delta/verdi-tavle), og **puggeark-disiplinen** for lukket bok. Dette er også bokas quiz-motor.
- **Eksamensbelegg:** MC med minuspoeng er Problem 1 hvert år (~18–20 p); kodesporing (R4) er ~25 % av settet (SVA- og SystemC-sporing hvert år); lukket bok (kode D) gjør pugging obligatorisk. Disse tre går på tvers av alle deler og etableres derfor felles her. Prioritet: **perfekt**.
- **Innholdskontrakt (håndverks- og konstruksjonsliste):** **Minuspoeng-strategi (R1):** forventningsverdi-regelen — svar når `p(rett)·gevinst > p(feil)·tap`; med +2/−1: gjett hvis ≥ ett alternativ trygt eliminert *og* du tror du har ≥50 % på resten; med +3/−1,5 gjelder samme break-even (1/3-terskel etter to eliminerte av fire). Aldri kryss av flere enn oppgaven ber om (straffes). **Kodesporing (R4) — systematisk metode:** les linje for linje; hold en **tavle** over (a) *simuleringstid* og *delta-syklus*, (b) *signal-/variabelverdier*, (c) hvilken *scheduling-region* som er aktiv; for SVA: noter *samplingtidspunkt* (verdier samples i Preponed) og evaluer sekvensen kant for kant; for SystemC: bygg **event-kø** og evaluer prosesser til stabilitet (delta), oppdater signaler mellom deltaene. **Puggeark-disiplinen:** hvert syntakskapittel har et komprimert `collapsible` «Puggeark»; studenten skal kunne reprodusere det utenat (lukket bok). `theorem`-idiom: **forventningsverdi-formelen** og **spor-tavle-malen**. `warning`: kodesporing feiler oftest på delta-sykluser og `notify(t)`-timing (SystemC) og på feil samplingtidspunkt/region (SVA). **Syntaks- og konstruksjonsliste:** forventningsverdi (gevinst/tap/eliminering), simuleringstid vs. delta-syklus, samplingtidspunkt, event-kø, spor-tavle.
- **Oppgavesjangre:** R1/R4 (metanivå). Mønstereksempel (nyskrevet, R4): «Gitt en `SC_METHOD` uten sensitivity list: hvor mange ganger kjører den? Spor for hånd.» (Kun én gang, ved t=0 — ingen sensitivity ⇒ ingen re-trigger.) Og R1: «Fem alternativer, du eliminerer to sikkert; +2/−1 — lønner det seg å gjette blant de tre siste?»
- **Typiske feil:** Gjette uten å eliminere (taper på minuspoeng); ved kodesporing: ignorere delta-sykluser, feil samplingregion, glemme at timed `notify` overskriver tidligere planlagt event; ikke pugge (tro man kan «resonnere seg frem» til syntaks under lukket-bok-eksamen).
- **Quiz: 22 · Flashcards: 20** (forventningsverdi-scenarier, kodesporingsmetoden, spor-tavle, puggeark-disiplin — quiz-tung fordi R1/R4 er direkte quiz-vennlige)

---

### Del 1 — Verifikasjonsgrunnlag

> Kort, konseptuell del som rammer alle fire søyler: hvorfor man verifiserer,
> forskjellen på verifikasjon og test/validering, og hva «komplett» verifikasjon
> betyr (completeness-argumenter må være konkrete — et sentralt sensorkrav).

#### Kapittel 1.1: Hvorfor verifisere — verifikasjon vs. test vs. validering

- **id:** `tfe4171-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** `tfe4171-0-1` · **kapitteltype:** teori
- **description:** Hvorfor funksjonell verifikasjon er nødvendig (kostnad ved feil, verifikasjon dominerer designløpet), og de sentrale skillene: verifikasjon (bygger vi tingen riktig?) vs. validering (bygger vi rett ting?), simulering-basert vs. formell, dynamisk vs. statisk.
- **Eksamensbelegg:** Konseptuell ramme; MC-punkter om «hvorfor verifisere» og «hva er forskjellen» forekommer i Problem 1 (sjanger L-slekt). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **funksjonell verifikasjon** (vise at et design oppfyller sin spesifikasjon), **validering** (er spesifikasjonen den rette), **debugging**. `definition` **simuleringsbasert** (stimuli + sjekk, ufullstendig — dekker kun kjørte stier) vs. **formell** (uttømmende over tilstandsrommet, men skalerer dårligere). `text` hvorfor verifikasjon dominerer moderne SoC-utvikling. Kort motivasjon for de fire søylene (SVA = spesifikasjon som eksekverbar egenskap; formell = uttømmende bevis; SystemC/TLM = tidlig, rask modell; coverage = «har vi verifisert nok»). **Syntaks- og konstruksjonsliste:** verifikasjon vs. validering, dynamisk/statisk, simulering/formell, spesifikasjon/implementasjon.
- **Oppgavesjangre:** R1 (MC). Mønstereksempel (R1): «Hvilket utsagn skiller *verifikasjon* fra *validering*? (a) verifikasjon sjekker mot spesifikasjonen, validering om spesifikasjonen er riktig … » — a riktig.
- **Typiske feil:** Blande verifikasjon og validering; tro simulering kan være uttømmende (den dekker kun stimulerte stier); tro formell verifikasjon alltid skalerer.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.2: Hva menes med «komplett» verifikasjon — dekning og completeness

- **id:** `tfe4171-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-1-1` · **kapitteltype:** teori
- **description:** Konseptet «hvor mye har vi verifisert»: code coverage vs. functional coverage (ingen av dem alene er nok), og hvorfor **completeness-argumenter må være konkrete** — hvilke transisjoner/utganger som ikke er dekket, ikke vage påstander.
- **Eksamensbelegg:** Sjanger F/C. «Er 100 % code coverage = ferdig verifisert?» er en klassisk MC-felle (2015 P1a: nei — begge kreves). Completeness-argument (2015 P3c-4: begrunn konkret hvorfor en sjekk ikke lykkes). Prioritet: **kunne** (forbereder Del 4 og Del 8). Ligger her fordi det er tverrgående; drilles i Del 8.
- **Innholdskontrakt:** `definition` **code coverage** (hvilke linjer/grener/tilstander stimuli har truffet) vs. **functional coverage** (hvilke *funksjonelle scenarier* — covergroups — som er sett). `theorem` **completeness-regelen**: verken 100 % code coverage eller 100 % functional coverage er alene tilstrekkelig; begge kreves, og de måler forskjellige ting. `theorem` **konkret completeness-argument**: en påstand om at verifikasjonen *ikke* er komplett må navngi **hvilke** transisjoner/utganger/operasjoner som ikke er dekket (f.eks. «no-error-operasjonen er ikke stimulert»; «`correct_o`/`dismiss_o` er ikke verifisert i tilstand F») — vage svar gir lite. **Syntaks- og konstruksjonsliste:** code coverage, functional coverage, covergroup (peker fram til 8.1), completeness-argument, uncovered transition/output.
- **Oppgavesjangre:** R1/R4-forklaring. Mønstereksempel (R1): «Et design har 100 % code coverage. Kan vi konkludere at det er fullstendig verifisert? Begrunn.» (Nei — functional coverage kan mangle scenarier som code coverage ikke fanger.)
- **Typiske feil:** Tro 100 % code coverage = ferdig verifisert (§ typiske feil); gi vage completeness-argumenter i stedet for å navngi konkrete udekte transisjoner/utganger.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (Verifikasjonsgrunnlag)
1. Prøve 1.A (20 min): Verifikasjon vs. validering vs. test (sjanger L/F, R1).
2. Prøve 1.B (20 min): Simulering vs. formell — styrker/svakheter (R1).
3. Prøve 1.C (20 min): Code vs. functional coverage — «er dette nok?» (sjanger F, R1).
4. Prøve 1.D (20 min): Konkret completeness-argument (navngi udekte transisjoner) (R1/R4).

---

### Del 2 — SystemVerilog Assertions (SVA) *(Søyle 2 — score 98, KJERNEN)*

> Den høyest scorede søylen (98): SVA testes i **både** MC og skriveoppgaver hvert
> år. Fordi eksamen er lukket bok, må **hele operatorsettet sitte utenat**. Delen
> bygger fra assertion-typer → sekvenser → properties/implikasjon → property-
> operatorer + vacuity → stort drillkapittel (les OG skriv). Hvert kapittel har
> puggeark. Kapittel 2.6 er delens tyngdepunkt.

#### Kapittel 2.1: Assertions — immediate, concurrent og deferred

- **id:** `tfe4171-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-0-2` · **kapitteltype:** teori
- **description:** De tre assertion-typene og hvordan de skiller seg: immediate (prosedyral, evalueres når nådd), concurrent (`assert property`, klokket, samples i Preponed/Observed), og deferred (`#0`/`final`, ufølsom for glitcher). Grunnlaget for resten av delen.
- **Eksamensbelegg:** Sjanger A, 98. `$rose` vs. `$posedge` (boolean vs. event) er en klassisk MC-felle (2015 P1c); deferred/`#0`-assertions ufølsom for glitcher (2017 P1b). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **immediate assertion** (`assert (expr) else ...;` — prosedyral, i `always`/`initial`, evalueres i Active). `definition` **concurrent assertion** (`assert property (@(posedge clk) ...);` — klokket, verdier **samples i Preponed**, evalueres i Observed). `definition` **deferred assertion** (`#0`/`final` — utsatt til slutten av tidssteget, **ufølsom for transiente glitcher** i Active). `theorem` **`$rose` vs. `$posedge`**: `$rose(x)` er en **boolsk funksjon** i et uttrykk (sann når `x` gikk 0→1 siden forrige sample); `$posedge x` er en **klokke-/kanthendelse** i en sensitivity-/event-kontekst — de er ikke utbyttbare. **Syntaks- og konstruksjonsliste:** `assert`/`assume`/`cover`, immediate/concurrent/deferred, `$rose`/`$fell`, Preponed/Observed (peker til Del 3). **Puggeark:** de tre assertion-typene (kontekst, samplingtidspunkt, glitch-følsomhet) + `$rose` vs. `$posedge`.
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R1): «Hvilken assertion-type er ufølsom for en transient glitch i active region? (a) immediate (b) concurrent (c) deferred (`#0`)» — c.
- **Typiske feil:** Blande `$rose` (boolsk uttrykk) og `$posedge` (hendelse) (§ typiske feil); tro immediate og concurrent samples på samme tidspunkt; tro deferred-assertions fanger glitcher (de er nettopp designet for å ignorere dem).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.2: Sekvenser og sekvensoperatorer

- **id:** `tfe4171-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-2-1` · **kapitteltype:** teori
- **description:** SVA-sekvenser: forsinkelse (`##n`, `##[a:b]`), repetisjon (`[*n]`, `[*a:b]`, `[->n]` goto, `[=n]`), og komposisjonsoperatorene `first_match`, `throughout`, `within`, `and`/`or`/`intersect`. Byggeklossene properties bygges av.
- **Eksamensbelegg:** Sjanger A, 98. `##`-telling og repetisjon er hyppige MC-feller og inngår i skriveoppgaver (2015 P2/P3c, 2017 P2). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **forsinkelse**: `##n` = nøyaktig n klokkesykler senere; `##[a:b]` = mellom a og b; `##[*]`/`##[+]` = null/én-eller-flere. `theorem` **repetisjon**: `s[*n]` = s gjentatt n ganger; `s[*a:b]` = a–b ganger; `e[->n]` (goto) = n-te forekomst av boolsk `e` (konsekutivt ikke krevd); `e[=n]` = n forekomster med vilkårlig etterslep. `theorem` **komposisjon**: `first_match(s)` (kun første fullførelse), `e throughout s` (`e` sann hele sekvensen), `s1 within s2`, `s1 and s2` (begge, felles start), `s1 or s2`, `s1 intersect s2` (samme lengde). Vis timing-/signaltrace (R5) for hver. **Syntaks- og konstruksjonsliste:** `##n`/`##[a:b]`, `[*]`/`[->]`/`[=]`, `first_match`/`throughout`/`within`/`and`/`or`/`intersect`. **Puggeark:** sekvensoperatortabell med ett-linjes semantikk + minitrace per operator.
- **Oppgavesjangre:** R2/R4/R5. Mønstereksempel (R2, nyskrevet): «Skriv en sequence som matcher: `req` høy, deretter `gnt` innen 1–3 sykler, og `busy` holder gjennom hele.» (`req ##[1:3] gnt` med `busy throughout`.) Vis timing-trace.
- **Typiske feil:** Telle `##`-forsinkelser feil; blande `[*n]` (konsekutiv repetisjon) og `[=n]`/`[->n]` (ikke-konsekutiv/goto); tro `throughout` bare gjelder endepunktet; feil startjustering i `and`/`intersect`.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.3: Properties, implikasjon og sampled-value-funksjoner

- **id:** `tfe4171-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-2-2` · **kapitteltype:** teori
- **description:** Fra sekvens til property: overlappende (`|->`) vs. ikke-overlappende (`|=>`) implikasjon, boolske property-operatorer (`and`/`or`/`not`/`implies`), og sampled-value-funksjonene `$rose`/`$fell`/`$stable`/`$past(x,n)` — de vanligste byggeklossene i skriveoppgaver.
- **Eksamensbelegg:** Sjanger A, 98. `|->` vs. `|=>` er *den* klassiske fella (2017 P2d: `a |-> ##1 b` ≠ `a |=> ##2 b`). Sampled-value-funksjoner brukes i nær sagt hver skriveoppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **implikasjon**: `ant |-> cons` (**overlapping** — consequent starter i **samme** sykel som antecedenten fullfører); `ant |=> cons` (**non-overlapping** — consequent starter **neste** sykel); ekvivalens `a |=> b` ≡ `a |-> ##1 b`. `theorem` **sampled-value-funksjoner**: `$rose(x)`/`$fell(x)` (0→1 / 1→0 siden forrige sample), `$stable(x)` (uendret), `$past(x,n)` (verdien n sykler tilbake). `definition` **property** vs. **sequence** (en property kan implisere, negere, kvantifisere; en sequence beskriver kun et hendelsesmønster). Vis at samme krav ofte kan skrives på **2–3 ekvivalente måter** (sensor godtar alle). **Syntaks- og konstruksjonsliste:** `|->`/`|=>`, `and`/`or`/`not`/`implies`, `$rose`/`$fell`/`$stable`/`$past`. **Puggeark:** implikasjonstabell (overlapping/non-overlapping + ekvivalens) + sampled-value-funksjoner.
- **Oppgavesjangre:** R2/R5. Mønstereksempel (R2, nyskrevet): «Skriv en property: når `start` stiger, skal `done` være høy nøyaktig 4 sykler senere, forutsatt at `en` var stabil i mellomtiden.» Gi **to** ekvivalente formuleringer (`$rose(start) |-> ##4 done` med `$stable(en)`-vilkår, og en `|=> ##3`-variant).
- **Typiske feil:** Blande `|->` og `|=>` (§ typiske feil); telle feil antall `##` etter valg av implikasjonstype; bruke `$past` uten å tenke på oppstart (udefinert de første n syklene); tro property og sequence er samme sak.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.4: Property-operatorer og gjenbruk — always, s_eventually, disable iff, bind

- **id:** `tfe4171-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-2-3` · **kapitteltype:** teori
- **description:** De temporale property-operatorene (`nexttime[n]`, `always`, `s_eventually` for liveness, `until`; svak vs. sterk semantikk), avstengning med `disable iff(...)`, og gjenbruk via navngitte `sequence`/`property` og `bind`.
- **Eksamensbelegg:** Sjanger A/I, 98. `s_eventually` (liveness) er Svarstad-linjas bro til CTL (2017); navngitt gjenbruk kreves ofte (2015 P2c/P3c, 2017 P4a). Prioritet: **perfekt** (`s_eventually`/liveness også **kunne** mot Del 4).
- **Innholdskontrakt:** `theorem` **property-operatorer**: `nexttime[n] p` (p i sykel n), `always p` (p i alle framtidige sykler), `s_eventually p` (**sterk** liveness — p må inntreffe), `p until q` / `p s_until q` (svak/sterk). `theorem` **svak vs. sterk**: en **svak** property godtar at et krav «aldri fullføres» hvis simuleringen slutter; en **sterk** (`s_`) krever fullførelse. `theorem` **`disable iff(reset)`**: slår av vurderingen mens `reset` er aktiv (unngår falske brudd under reset). `definition` **navngitt gjenbruk**: `sequence name; ... endsequence`, `property name; ... endproperty`, og `bind` for å knytte properties til en modul uten å endre RTL. **Syntaks- og konstruksjonsliste:** `nexttime`/`always`/`s_eventually`/`until`, svak/sterk (`s_`), `disable iff`, `sequence`/`property`/`endproperty`, `bind`. **Puggeark:** property-operatorer + svak/sterk + `disable iff`-malen.
- **Oppgavesjangre:** R2. Mønstereksempel (R2, nyskrevet): «Skriv en named property som sier: etter `request`, skal `ack` *til slutt* komme (liveness), men vurder ikke under `rst`.» (`property p_liveness; @(posedge clk) disable iff(rst) request |-> s_eventually ack; endproperty`.)
- **Typiske feil:** Bruke svak `eventually` der liveness kreves (`s_eventually`); glemme `disable iff(reset)` (falske brudd under reset); tro `always`/`s_eventually` kan stå uten klokke; ikke gjenbruke navngitt sequence når oppgaven ber om det.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 2.5: Vacuity og vacuous pass

- **id:** `tfe4171-2-5` · **number:** 2.5 · **estimatedMinutes:** 40 · **prerequisites:** `tfe4171-2-3` · **kapitteltype:** teori
- **description:** Hvorfor en implikasjons-property kan «passere» uten å bevise noe (antecedenten ble aldri sann), hvordan man oppdager vacuous pass, og hvordan man unngår den — et eksplisitt eksamenstema (2017).
- **Eksamensbelegg:** Sjanger K, 35 (kun 2017, men en eksplisitt 4-poengs oppgave). Prioritet: **kunne** (høyverdig hvis den kommer; billig å lære).
- **Innholdskontrakt:** `theorem` **vacuity**: en implikasjon `ant |-> cons` er **vacuously true** når `ant` aldri er sann — propertyen «passerer», men har ikke testet noe. `theorem` **oppdagelse/unngåelse**: sjekk med en `cover property (ant)` at antecedenten faktisk inntreffer; rapporter vacuous pass separat; en «PASS» uten dekket antecedent er verdiløs. Koble til completeness (kap. 1.2): en vacuous pass er en skjult dekningsluke. **Syntaks- og konstruksjonsliste:** vacuous pass, antecedent, `cover property`, vacuity-sjekk. **Puggeark:** vacuity-definisjon + «cover antecedenten»-motgiften.
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R1): «En property `a |-> b` rapporterer PASS på alle kjøringer, men `a` var aldri sann. Hva betyr det? (a) designet er korrekt (b) vacuous pass — ingenting er bevist …» — b.
- **Typiske feil:** Rapportere «PASS» og tro det betyr noe når antecedenten aldri var sann (§ typiske feil); ikke `cover`-e antecedenten; blande vacuity med et ekte brudd.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.6: DRILL — Les og skriv SVA

- **id:** `tfe4171-2-6` · **number:** 2.6 · **estimatedMinutes:** 90 · **prerequisites:** `tfe4171-2-5` · **kapitteltype:** drill
- **description:** Full drill på søyle 2: **les** en gitt SVA-property og forklar/tegn hva den krever (R4/R5), og **skriv** properties/sequences fra en naturlig-språk-spesifikasjon (R2), inkludert navngitt gjenbruk og FSM-atferd uttrykt som SVA (sjanger I).
- **Eksamensbelegg:** Sjanger A (98) + I (55). SVA-skriving og -lesing forekommer hvert år, ofte med krav om navngitt gjenbruk. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **Lesing (R4/R5):** 1) identifiser klokke + `disable iff`; 2) del i antecedent/consequent; 3) evaluer sekvensen kant for kant og tegn timing-trace; 4) avgjør om den er vacuously satisfiable. **Skriving (R2):** 1) identifiser trigger (antecedent) og krav (consequent); 2) velg implikasjonstype (`|->` overlapping / `|=>` neste sykel); 3) uttrykk timing med `##`/`[*]`/sampled-value; 4) legg til `disable iff(reset)`; 5) navngi for gjenbruk der bedt om; 6) gi **2–3 ekvivalente** formuleringer. **FSM-som-SVA (I):** i en Moore-FSM identifiseres tilstanden fra **utgangene**, ikke fra interne signaler — skriv property kun over observerbare signaler. Sensor-kommentert case med margnotat om hvilke delmomenter som gir poeng og at flere formuleringer godtas. 12–16 oppgaver (R2/R4/R5) som roterer operatorene.
- **Oppgavesjangre:** A/I. Mønstereksempel (R2, nyskrevet): «Skriv en property som beskriver en Moore-FSM der utgangen `y` er høy nøyaktig når maskinen er i tilstand S2, og S2 alltid følges av S0 neste sykel.» (Skriv over utgangen `y`, ikke intern `state`.)
- **Typiske feil:** Feil implikasjonstype; feil `##`-telling; glemme `disable iff`; skrive property over interne signaler man ikke har tilgang til (bruk utgangene); levere kun én formulering der flere ekvivalente forventes; vacuous property.
- **Quiz: 28 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (SystemVerilog Assertions)
1. Prøve 2.A (25 min): Assertion-typer + `$rose`/`$posedge` + sampled-value (sjanger A, R1).
2. Prøve 2.B (30 min): Sekvensoperatorer — `##`/`[*]`/`[->]`/`throughout` med trace (sjanger A, R2/R5).
3. Prøve 2.C (30 min): Skriv properties — implikasjon + liveness + `disable iff` + navngitt gjenbruk (sjanger A/I, R2).
4. Prøve 2.D (20 min): Vacuity + les-og-forklar gitt property (sjanger A/K, R4).

---

### Del 3 — Simuleringsmodell og scheduling-regioner *(score 82)*

> Simuleringsmodellen forklarer *når* signaler oppdateres og *når* assertions
> samples — grunnlaget for både MC-feller (Problem 1) og SystemC-forståelsen. Tungt
> hos Morrison. Kapittel 3.3 driller «kjør koden i hodet»-sporing av regioner.

#### Kapittel 3.1: Scheduling-regionene — Preponed til Postponed

- **id:** `tfe4171-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-2-1` · **kapitteltype:** teori
- **description:** SystemVerilogs event-regioner i rekkefølge (Preponed → Active → Inactive → NBA → Observed → Reactive → Re-Inactive → Re-NBA → Postponed), hva som kjører i hver, og **hvor concurrent assertions samples (Preponed) og evalueres (Observed)** — samt hvor program/checker-kode kjører (Reactive).
- **Eksamensbelegg:** Sjanger E, 82. Regionrekkefølge og hvor assertions samples er en fast MC-felle (2015 P1d, 2016 P1a). Prioritet: **perfekt** (mot MC-søyla).
- **Innholdskontrakt:** `theorem` **regionrekkefølgen** (per tidssteg): **Preponed** (stabile verdier fra forrige steg — assertions **sampler** her) → **Active** (blocking assignments, RTL) → **Inactive** (`#0`) → **NBA** (non-blocking `<=` oppdateres) → **Observed** (concurrent assertions **evalueres**) → **Reactive** (program-/checker-blokker, testbenk) → Re-Inactive → Re-NBA → **Postponed** (`$strobe`/`$monitor`, ingen verdiendring). `theorem` **konsekvenser**: hvorfor NBA fjerner enkelte races; hvorfor assertion-verdier er «forrige steg»-stabile (Preponed-sampling). `definition` **delta-syklus** (iterasjon uten framrykk av tid). **Syntaks- og konstruksjonsliste:** Preponed/Active/Inactive/NBA/Observed/Reactive/Postponed, blocking vs. non-blocking, delta-syklus, sample vs. evaluate. **Puggeark:** regionrekkefølge-listen + «sample i Preponed, evaluer i Observed, testbenk i Reactive».
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R1): «I hvilken region samples verdiene som en concurrent assertion bruker? (a) Active (b) Preponed (c) Observed …» — b.
- **Typiske feil:** Feil om hvor assertions samples/evalueres (§ typiske feil); tro NBA oppdateres i Active; tro program/checker kjører i Active (det er Reactive); blande sample-tidspunkt (Preponed) og evaluerings-tidspunkt (Observed).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.2: Races, glitches og deferred/`#0`-assertions

- **id:** `tfe4171-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-3-1` · **kapitteltype:** teori
- **description:** Hvordan blocking vs. non-blocking assignments skaper eller unngår race conditions, hva en glitch (transient verdi i Active) er, og hvorfor deferred/`#0`-assertions er ufølsomme for glitcher.
- **Eksamensbelegg:** Sjanger E, 82. Deferred/`#0`-assertions ufølsom for glitcher (2017 P1b); blocking/NBA-races (Morrison). Prioritet: **kunne/perfekt**.
- **Innholdskontrakt:** `definition` **race condition** (resultat avhenger av udefinert evalueringsrekkefølge i samme region). `theorem` **blocking vs. NBA**: bruk `<=` for sekvensiell logikk (oppdateres i NBA, unngår read-before-write-race); blocking `=` i Active. `definition` **glitch** (kortvarig, transient verdi i Active før stabilisering). `theorem` **deferred/`#0`-assertion**: utsatt til slutten av tidssteget ⇒ ser kun **stabil** verdi ⇒ **ufølsom for glitcher** (nyttig for kombinatoriske checks som ellers ville feilrapportere på transienter). **Syntaks- og konstruksjonsliste:** race, blocking `=`/non-blocking `<=`, glitch, deferred `#0`/`final`. **Puggeark:** «`<=` for sekvensiell (NBA); `#0`-assertion ignorerer glitcher; glitch = transient Active-verdi».
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R4): «Gitt to prosesser som skriver samme signal med `=` — hva er utfallet?» (Uspesifisert/race — avhenger av rekkefølge; bruk `<=`.)
- **Typiske feil:** Bruke blocking `=` for sekvensiell logikk (skaper races); tro `#0`-assertions fanger glitcher (de ignorerer dem); tro NBA-oppdatering skjer umiddelbart.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: DRILL — «Kjør koden i hodet»: region- og signalsporing

- **id:** `tfe4171-3-3` · **number:** 3.3 · **estimatedMinutes:** 80 · **prerequisites:** `tfe4171-3-2` · **kapitteltype:** drill
- **description:** Full drill på R4 for simuleringsmodellen: gitt en liten SystemVerilog-modul (blocking/NBA-mix, `#0`, clock generator), spor region for region og delta for delta og skriv nøyaktig hvilke verdier som gjelder når — og tell region-/prosess-eksekveringer.
- **Eksamensbelegg:** Sjanger E, 82. «Simuler `clock_gen`» (2015 P4c), «tell region-eksekveringer» (2016 P2c). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) sett opp **spor-tavle** (tid, delta, region, signalverdier); 2) i hvert tidssteg: sampl i Preponed → kjør Active (blocking) → Inactive (`#0`) → oppdater NBA → evaluer assertions i Observed → kjør Reactive; 3) gjenta delta til stabilt før tiden rykker fram; 4) noter hver assertion-evaluering og hvert signalskifte. Sensor-kommentert case med margnotat om hvor delta-sykluser og NBA-oppdatering endrer svaret. 12–16 sporingsoppgaver (R4) med varierte modul-/klokke-kombinasjoner.
- **Oppgavesjangre:** E. Mønstereksempel (R4, nyskrevet): «Gitt en clock generator og en teller oppdatert med `<=` — skriv verdiene til `count` ved hver stigende flanke de første fem syklene, og angi i hvilken region assertion-en evalueres.»
- **Typiske feil:** Ignorere delta-sykluser; behandle NBA som umiddelbar; sample i feil region; glemme at `#0` kjører i Inactive før NBA; feiltelle antall prosess-eksekveringer.
- **Quiz: 24 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (Simuleringsmodell og scheduling-regioner)
1. Prøve 3.A (25 min): Regionrekkefølge + hvor assertions samples/evalueres (sjanger E, R1).
2. Prøve 3.B (25 min): Blocking vs. NBA + races (sjanger E, R1/R4).
3. Prøve 3.C (25 min): Deferred/`#0` + glitch-ufølsomhet (sjanger E, R1).
4. Prøve 3.D (30 min): Kjør-i-hodet region-/signalsporing (sjanger E, R4).

---

### Del 4 — Formell verifikasjon *(Søyle 3 — score 92 + 55, BEGGE faglærervinklinger)*

> Hjertet av «formell»-blokken, dekket i **begge** linjer: den operasjonelle
> **IPC/SAT-linja** (Morrison, score 92) og den teoretiske **CTL/Kripke/model-
> checking-linja** (Svarstad, score 55). Tydelig merket hvilken linje hvert kapittel
> tilhører. Motbevis-analysen (den mest diskriminerende ferdigheten) får en egen del
> etterpå (Del 5).

#### Kapittel 4.1: Formell verifikasjon — modellsjekking og over-approksimasjon

- **id:** `tfe4171-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-1-2` · **kapitteltype:** teori
- **description:** Grunnideen i formell verifikasjon: uttømmende sjekk over hele tilstandsrommet, hvorfor formelle teknikker **over-approksimerer** (ser flere tilstander enn de reachable) og derfor gir **falske negative** (spuriøse motbevis), aldri falske positive. Rammer både IPC (4.2) og CTL (4.5).
- **Eksamensbelegg:** Sjanger C, 92. «IPC ser *flere* tilstander enn reachable» er en fast MC-felle (2016 P3b). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **formell verifikasjon** (uttømmende matematisk bevis over tilstandsrommet, kontrast til simulering). `theorem` **over-approksimasjon**: for skalerbarhet vurderer formelle verktøy et **oversett** av de faktisk reachable tilstandene ⇒ de kan finne motbevis i **ikke-reachable** tilstander (**spuriøse**) ⇒ **falske negative**, **aldri** falske positive (et bevist «holder» er alltid sant). `text` konsekvens: et motbevis må **klassifiseres** (ekte/spuriøst — Del 5). **Syntaks- og konstruksjonsliste:** tilstandsrom, reachable/ikke-reachable, over-approksimasjon, falsk negativ/positiv, spuriøst motbevis. **Puggeark:** «formell over-approksimerer ⇒ falske negative (spuriøse), aldri falske positive».
- **Oppgavesjangre:** R1. Mønstereksempel (R1): «En formell property-checker rapporterer et motbevis. Kan designet likevel være korrekt? (a) nei, motbevis = feil (b) ja, motbeviset kan være spuriøst pga. over-approksimasjon …» — b.
- **Typiske feil:** Tro IPC ser *færre* tilstander enn reachable (§ typiske feil — det er motsatt); tro formell verifikasjon gir falske positive; tro ethvert motbevis er en ekte designfeil.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.2: Interval Property Checking (IPC)

- **id:** `tfe4171-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-4-1` · **kapitteltype:** teori *(Morrison-linja)*
- **description:** Den operasjonelle IPC-metoden (Kunz/OneSpin-tradisjonen): operasjonelle properties over et tidsintervall n, hvordan de rulles ut til en SAT-instans, og hvorfor kompleksiteten vokser med intervallengden.
- **Eksamensbelegg:** Sjanger C, 92 (Morrison-linja, alle tre år i en eller annen form). IPC-properties (2015/2016). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **operasjonell property** (antar en starttilstand, beskriver forventet oppførsel over et **tidsintervall** [0..n], konkluderer i en sluttilstand — «assume/commit»-form). `definition` **Interval Property Checking**: verifiser propertyen over intervallet ved å rulle ut designet n time-frames og løse med SAT. `theorem` **kompleksitet**: flere time-frames ⇒ større SAT-instans ⇒ dyrere; intervallet velges så kort som mulig. `text` kobling til completeness (kjede av operasjonelle properties må dekke alle operasjoner). **Syntaks- og konstruksjonsliste:** operasjonell property, assume/commit, tidsintervall/time-frame, SAT-instans, IPC. **Puggeark:** «IPC = operasjonell property over intervall [0..n], rullet ut til SAT; kompleksitet ∝ n».
- **Oppgavesjangre:** R1/R4/forklar. Mønstereksempel (forklar/R4): «Beskriv hvordan en operasjonell property som ‘etter `start`, er `result` klar innen 3 sykler’ verifiseres med IPC, og hva som skjer med SAT-instansen om intervallet økes til 10.»
- **Typiske feil:** Tro IPC verifiserer «hele tiden» i stedet for et endelig intervall; glemme at kompleksiteten vokser med n; blande operasjonell property (intervall) og en enkel SVA-assertion.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.3: Reachability, invarianter og induksjon

- **id:** `tfe4171-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-4-2` · **kapitteltype:** teori *(Morrison-linja)*
- **description:** Hvordan reachability og invarianter styrker et formelt bevis: «closed under reachability», hvordan en invariant utelukker ikke-reachable (spuriøse) tilstander, og induksjonsprinsippet for å bevise invarianter — det direkte grunnlaget for motbevis-galleriet (Del 5).
- **Eksamensbelegg:** Sjanger C, 92. Reachability-invarianter er botemiddelet mot spuriøse motbevis (2017 P4b/P4c). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **reachable tilstand** (nåbar fra en gyldig starttilstand via lovlige transisjoner). `definition` **invariant** (predikat sant i alle reachable tilstander). `theorem` **closed under reachability**: et sett er lukket under reachability hvis alle etterfølgere av settet ligger i settet — en invariant som er reachability-lukket kan brukes til å **beskjære** over-approksimasjonen. `theorem` **invariant styrker prov**: ved å *anta* en reachability-invariant utelukker man ikke-reachable tilstander ⇒ **spuriøse motbevis forsvinner**. `theorem` **induksjon**: bevis at invarianten holder i starttilstanden (basis) og bevares av hver transisjon (steg) ⇒ den holder i alle reachable tilstander. **Syntaks- og konstruksjonsliste:** reachable, invariant, closed under reachability, induksjon (basis/steg), reachability-sequence. **Puggeark:** «invariant = sann i alle reachable; legg til reachability-invariant for å fjerne spuriøse motbevis; bevis med induksjon (basis + steg)».
- **Oppgavesjangre:** R1/R6-forbered/forklar. Mønstereksempel (forklar): «En checker gir et motbevis i en tilstand der `state=3` og `valid=0`, men den kombinasjonen kan aldri oppstå. Skriv en invariant som utelukker den, og forklar hvorfor beviset da lykkes.»
- **Typiske feil:** Glemme reachability i et formelt prov (fører til feilklassifisering av spuriøse motbevis, §); tro en invariant må bevises manuelt for hver tilstand (bruk induksjon); anta en for sterk invariant som også utelukker reachable tilstander.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 4.4: SAT-basert avrulling og bounded model checking

- **id:** `tfe4171-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-4-3` · **kapitteltype:** teori *(Morrison-linja)*
- **description:** Hvordan en FSM rulles ut over et endelig tidsintervall til en boolsk funksjon (bounded model checking), og det sentrale prinsippet: **unsatisfiable ⇔ property holder** over intervallet. Inkluderer å tegne/analysere avrullingsdiagrammet (R5).
- **Eksamensbelegg:** Sjanger J, 40 (kun 2015, men en hel deloppgave — «tegn SAT-modell», 2015 P3a). Kobler tett til IPC. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **avrulling (unrolling)**: kopier transisjonsrelasjonen n ganger (én per time-frame), koble tilstandsvariablene mellom kopiene, og legg til den negerte propertyen. `theorem` **unsat ⇔ holder**: hvis den samlede boolske formelen (transisjoner ∧ ¬property) er **unsatisfiable**, holder propertyen over intervallet; en **satisfiable** tilordning er et **motbevis**. `text` bounded ⇒ dekker kun intervallet [0..n] (ikke uendelig horisont uten induksjon/completeness). Vis avrullingsdiagrammet (R5). **Syntaks- og konstruksjonsliste:** unrolling, time-frame, transisjonsrelasjon, negert property, SAT/unsat, bounded horizon. **Puggeark:** «rull ut FSM n frames; (transisjoner ∧ ¬property) unsat ⇔ property holder; sat = motbevis».
- **Oppgavesjangre:** R5/forklar. Mønstereksempel (R5, nyskrevet): «Tegn avrullingen av en 2-bits teller over 3 time-frames og sett opp den boolske funksjonen som avgjør om ‘telleren når aldri 3’ holder.»
- **Typiske feil:** Blande satisfiable (motbevis) og unsatisfiable (property holder); tro bounded model checking beviser for uendelig horisont uten induksjon; feil kobling av tilstandsvariabler mellom time-frames.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.5: Temporallogikk — CTL, Kripke-modeller og model checking

- **id:** `tfe4171-4-5` · **number:** 4.5 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-4-1` · **kapitteltype:** teori *(Svarstad-linja)*
- **description:** Den teoretiske model-checking-linja (Svarstad): Kripke-modeller (states + transisjoner + labels), CTL-syntaks (hver temporal operator `X/F/G/U` må ha kvantor `A`/`E`), states-vs-paths, fixpunkt-karakterisering/iterativ evaluering, og liveness/fairness. Inkluderer å markere states i et Kripke-diagram (R5).
- **Eksamensbelegg:** Sjanger H, 55 (kun 2017, men da tungt — P1 + hel P3, egen Kripke-oppgave). «Sikringstema» hvis nåværende faglærer følger Svarstad-linja. Prioritet: **kunne** (grundig, men kortere enn IPC-kjeden).
- **Innholdskontrakt:** `definition` **Kripke-modell** (mengde states, transisjonsrelasjon, start-states, labeling-funksjon som gir atomære proposisjoner per state). `theorem` **CTL-syntaks**: hver temporal operator (`X` next, `F` eventually, `G` globally, `U` until) må parres med en **path-kvantor** (`A` for alle stier, `E` for finnes en sti) — gyldige er `AX/EX`, `AF/EF`, `AG/EG`, `A[·U·]/E[·U·]`. `theorem` **states vs. paths**: en CTL-formel evalueres i en **state**, men path-kvantoren spenner over **stier fra** den staten. `theorem` **fixpunkt-evaluering**: `EF p`, `AG p` osv. beregnes som minste/største fixpunkt ved iterativ merking av states til stabilitet. `definition` **liveness** (`AG (req -> AF ack)` — noe godt skjer til slutt) og **fairness** (utelukk urimelige stier). Koble `s_eventually` (SVA, 2.4) til `AF`. **Syntaks- og konstruksjonsliste:** Kripke (states/transisjoner/labels), `A`/`E`, `X`/`F`/`G`/`U`, `AG`/`EF`/`A[·U·]`, fixpunkt, liveness/fairness. **Puggeark:** CTL-operatortabell (alle 8 kombinasjoner + betydning) + «hver temporal operator trenger A/E» + fixpunkt-idéen.
- **Oppgavesjangre:** R1/R5. Mønstereksempel (R5, nyskrevet): «Gitt et Kripke-diagram med fire states, marker de statene der `EF done` holder (finnes en sti til en `done`-state).»
- **Typiske feil:** Skrive en temporal operator uten kvantor (`F p` er ikke gyldig CTL — må være `AF`/`EF`); blande states (der formelen evalueres) og paths (som kvantoren spenner over); blande `AF` (alle stier når) og `EF` (finnes en sti); glemme fairness ved liveness.
- **Quiz: 22 · Flashcards: 26**

**Prøve-kvote Del 4:** 4 prøver (Formell verifikasjon)
1. Prøve 4.A (25 min): Over-approksimasjon + IPC-grunnlag (sjanger C, R1).
2. Prøve 4.B (30 min): Reachability + invarianter + induksjon (sjanger C, R1/R6-forbered).
3. Prøve 4.C (25 min): SAT-avrulling / BMC — unsat ⇔ holder (sjanger J, R5).
4. Prøve 4.D (30 min): CTL/Kripke — syntaks + markér states (Svarstad-linja) (sjanger H, R1/R5).

---

### Del 5 — Motbevis-galleriet *(Søyle 3, A-DIFFERENSIATOR)*

> Fagets mest diskriminerende oppgavetype — «skiller A-fra-C» hvert år: avgjør om et
> IPC-motbevis er **ekte** (designfeil) eller **spuriøst** (manglende reachability),
> og foreslå riktig fiks. Denne delen gir en fast klassifiseringsmal og et **galleri**
> av worked examples av begge slag. Kapittel 5.2 er delens tyngdepunkt.

#### Kapittel 5.1: Ekte vs. spuriøst motbevis — klassifiseringsmalen

- **id:** `tfe4171-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-4-3` · **kapitteltype:** teori
- **description:** Den faste beslutningsprosedyren for å klassifisere et IPC-motbevis (ekte designfeil vs. spuriøst pga. over-approksimasjon/ikke-reachable starttilstand) og velge riktig botemiddel — kjerneferdigheten i formell del.
- **Eksamensbelegg:** Sjanger C, 92. «Ekte vs. falskt motbevis + fiks» (2017 P4b/P4c) — den vanligste A-fra-C-oppgaven, med **tre** gyldige fikser i fasiten. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **klassifiseringsmalen** (fast prosedyre): 1) **les motbeviset** — hvilken starttilstand og hvilken sekvens leder til bruddet? 2) **er starttilstanden reachable?** Sjekk mot design-invarianter/reset. 3) **hvis ikke reachable ⇒ SPURIØST** (falskt negativt fra over-approksimasjon); **hvis reachable ⇒ EKTE** (designfeil). 4) **velg fiks etter klasse.** `theorem` **fiks for spuriøst** (minst 3 gyldige, sensor godtar alle): (a) legg til en **reachability-sequence/-antagelse** som utelukker den ikke-reachable starttilstanden; (b) **start propertyen i reset-tilstanden**; (c) **anta en invariant** (reachability-invariant fra 4.3). `theorem` **fiks for ekte**: rett **designet** (RTL) eller korriger **propertyen** hvis den var for streng — men ikke skjul en ekte feil med en antagelse. `warning` (**sentral**): å legge til en antagelse som skjuler en *ekte* feil er en alvorlig feil (over-constraining); å behandle et spuriøst motbevis som en ekte designfeil er den motsatte. **Syntaks- og konstruksjonsliste:** motbevis (counterexample), starttilstand, reachability-sjekk, spuriøst/ekte, reachability-sequence, over-constraining. **Puggeark:** beslutningstreet (reachable? → ekte/spuriøst → fiks) + de tre spuriøs-fiksene.
- **Oppgavesjangre:** R6. Mønstereksempel (R6, nyskrevet): «En checker gir et motbevis der `mode=WRITE` og `busy=1` samtidig ved t=0, men reset garanterer `busy=0`. Klassifiser motbeviset og foreslå to gyldige fikser.» (Spuriøst — starttilstanden er ikke reachable; fiks: start i reset / anta invarianten `mode=WRITE -> busy` ikke bryter reachability.)
- **Typiske feil:** Glemme reachability og feilklassifisere spuriøst som ekte (§ typiske feil) — eller motsatt; skjule en ekte feil med en antagelse (over-constraining); foreslå én fiks der flere gyldige forventes; ikke navngi hvilken starttilstand som er problemet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.2: DRILL — Motbevis-galleriet

- **id:** `tfe4171-5-2` · **number:** 5.2 · **estimatedMinutes:** 90 · **prerequisites:** `tfe4171-5-1` · **kapitteltype:** drill
- **description:** Galleriet: mange worked examples av **begge** slag (ekte og spuriøse motbevis) fra varierte design (FSM-er, håndtrykk-protokoller, tellere, buffere), hver klassifisert med malen fra 5.1 og fikset på 2–3 gyldige måter — full drill på A-differensiatoren.
- **Eksamensbelegg:** Sjanger C, 92. Motbevis-klassifisering + fiks hvert år (formell del). Prioritet: **perfekt** (dette skiller kandidatene).
- **Innholdskontrakt (løsningsoppskrift):** For hvert galleri-eksempel: 1) presenter design + property + motbevis; 2) kjør klassifiseringsmalen (reachable? → ekte/spuriøst); 3) begrunn klassifiseringen med **hvilken** starttilstand/transisjon som er (u)reachable; 4) gi **2–3 gyldige fikser** og forklar ekvivalensen; 5) for ekte feil: vis både design-fiks og evt. property-korreksjon. Balansert miks (ca. halvparten ekte, halvparten spuriøse — studenten må ikke kunne gjette klassen). Sensor-kommentert case med margnotat om delpoeng (klassifisering vs. fiks). 12–16 galleri-oppgaver (R6).
- **Oppgavesjangre:** C. Mønstereksempel (R6, nyskrevet): «Galleri #7: en FIFO-controller gir et motbevis der `full` og `empty` er høye samtidig. Er dette en ekte designfeil eller spuriøst? Klassifiser og fiks.» (Vurder om tilstanden er reachable gitt tellerlogikken — presenter begge utfall som separate galleri-oppgaver.)
- **Typiske feil:** Hele §-motbevis-katalogen: glemme reachability-sjekken; over-constraining som skjuler ekte feil; behandle spuriøst som ekte; kun én fiks; vag begrunnelse (ikke navngi (u)reachable tilstand).
- **Quiz: 26 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (Motbevis-galleriet)
1. Prøve 5.A (25 min): Klassifiser — ekte vs. spuriøst (reachability-sjekk) (sjanger C, R6).
2. Prøve 5.B (30 min): Fiks spuriøst motbevis — de tre gyldige måtene (sjanger C, R6).
3. Prøve 5.C (25 min): Fiks ekte designfeil (design vs. property) + unngå over-constraining (sjanger C, R6).
4. Prøve 5.D (30 min): Blandet galleri — klassifiser + fiks på ukjent design (sjanger C, R6).

---

### Del 6 — SystemC — språk og scheduling *(Søyle 4 — score 96, HEL BLOKK HVERT ÅR)*

> Score 96 — en hel blokk hvert år, mest kodelesing. Studenten må kunne **lese en
> SystemC-modul og skrive nøyaktig simuleringsutskrift** (med tidsstempler), og
> motsatt (reverse-engineer). Delen bygger fra språk → events/scheduling → kanaler
> → scheduling-semantikk/faser → «kjør i hodet»-drill. Kapittel 6.5 er tyngdepunktet.

#### Kapittel 6.1: SystemC-språket — moduler og prosesser

- **id:** `tfe4171-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-0-2` · **kapitteltype:** teori
- **description:** SystemC som C++-bibliotek: `SC_MODULE`, konstruktørmakroene `SC_CTOR`/`SC_HAS_PROCESS`, de tre prosesstypene `SC_METHOD` vs. `SC_THREAD` vs. `SC_CTHREAD`, og statisk sensitivity list vs. dynamisk `wait()`/`next_trigger()`.
- **Eksamensbelegg:** Sjanger B, 96. Prosesstyper og sensitivity er kjernen i hver SystemC-blokk; `SC_METHOD` uten sensitivity kjører kun én gang (2017 P5a). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **`SC_MODULE`** (byggeklossen — en C++-klasse som arver `sc_module`). `definition` **`SC_CTOR`/`SC_HAS_PROCESS`** (registrerer prosesser i konstruktøren). `theorem` **prosesstyper**: **`SC_METHOD`** (kjører til fullførelse, **kan ikke `wait()`**, re-trigges av sensitivity — modellerer kombinatorisk/kortvarig logikk); **`SC_THREAD`** (kjører én gang, **kan `wait()`**, suspenderes/gjenopptas — modellerer sekvensielle prosesser); **`SC_CTHREAD`** (klokket thread, `wait()` på klokkeflanke). `theorem` **sensitivity**: **statisk** (`sensitive << sig;` i konstruktøren — re-trigger på endring); **dynamisk** (`next_trigger(ev)` for METHOD, `wait(ev)` for THREAD). `warning` **`SC_METHOD` uten sensitivity** kjøres **kun én gang** ved t=0 (ingen re-trigger). **Syntaks- og konstruksjonsliste:** `SC_MODULE`, `SC_CTOR`/`SC_HAS_PROCESS`, `SC_METHOD`/`SC_THREAD`/`SC_CTHREAD`, `sensitive`, `wait`/`next_trigger`. **Puggeark:** prosesstype-tabell (kan wait? re-trigger? bruk) + «METHOD uten sensitivity = én kjøring».
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R1): «Hvilken prosesstype kan kalle `wait()`? (a) `SC_METHOD` (b) `SC_THREAD` (c) begge …» — b.
- **Typiske feil:** Kalle `wait()` i en `SC_METHOD` (ulovlig); glemme sensitivity list ⇒ prosessen kjører kun én gang (§ typiske feil); blande `SC_THREAD` (én gjennomkjøring m/`wait`) og `SC_METHOD` (re-triggende, ingen `wait`).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.2: Events og scheduling — sc_event, notify, wait, delta-sykluser

- **id:** `tfe4171-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tfe4171-6-1` · **kapitteltype:** teori
- **description:** SystemCs event- og tidsmodell: `sc_event`, de tre `notify`-variantene (immediate / delayed `notify()` / timed `notify(t)`), `wait(ev)`, og **delta-sykluser** — samt at en **timed notify overskriver** en tidligere planlagt event på samme objekt.
- **Eksamensbelegg:** Sjanger B, 96. `notify(t)`-timing (2016 P4a: timed notify betyr at bare siste planlagte event overlever — preemptiv event-scheduling); delta-sykluser. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **`sc_event`** (synkroniseringspunkt prosesser kan vente på). `theorem` **notify-varianter**: **immediate** `notify()` (trigger i **samme** delta-syklus — kan gi race); **delayed** `notify(SC_ZERO_TIME)` (trigger i **neste** delta); **timed** `notify(t)` (trigger etter tid t). `theorem` **preemptiv event-scheduling**: for et gitt `sc_event` overlever kun **den tidligst planlagte** notify — en ny `notify(t)` **kansellerer/overskriver** en tidligere planlagt (én utestående event per objekt). `definition` **delta-syklus** (evaluate → update, uten framrykk av tid; gjentas til ingen flere immediate/delayed events). `theorem` **tidsmodell**: tid rykker fram først når det ikke er flere delta-events. **Syntaks- og konstruksjonsliste:** `sc_event`, `notify()`/`notify(SC_ZERO_TIME)`/`notify(t)`, `wait(ev)`, delta-syklus, `SC_ZERO_TIME`. **Puggeark:** notify-tabell (immediate/delayed/timed → når) + «ny notify overskriver tidligere; delta før tid rykker».
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R4, nyskrevet): «En prosess gjør `e.notify(10, SC_NS)` og deretter `e.notify(4, SC_NS)`. Når trigges `e`?» (Ved 4 ns — den senere, kortere notify overskriver den første.)
- **Typiske feil:** Undervurdere delta-sykluser; tro alle `notify(t)` overlever (bare den tidligste); blande immediate (samme delta) og delayed (neste delta); tro tid rykker fram før alle delta-events er unnagjort.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 6.3: Kanaler og porter

- **id:** `tfe4171-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-6-1` · **kapitteltype:** teori
- **description:** Kommunikasjonsapparatet: primitive kanaler (`sc_signal`, `sc_fifo`, `sc_mutex`, `sc_semaphore`, `sc_buffer`) vs. hierarkiske, porter (`sc_port`, `sc_export`) og interface-metode-kall (IMC) — koblingen mellom moduler.
- **Eksamensbelegg:** Sjanger B, 96. `sc_signal` (delta-oppdatert) vs. andre kanaltyper er MC-stoff og inngår i kodelesing/tegning. Prioritet: **kunne/perfekt**.
- **Innholdskontrakt:** `definition` **`sc_signal<T>`** (én-skriver-verdi, **oppdateres i delta** — leser ser gammel verdi til neste delta, akkurat som NBA i SV). `definition` **`sc_fifo<T>`** (blocking FIFO — `read`/`write` blokkerer ved tom/full), **`sc_mutex`**/**`sc_semaphore`** (gjensidig utelukkelse/telling), **`sc_buffer`** (som `sc_signal`, men trigger ved *hver* skriving selv uten verdiendring). `definition` **port** (`sc_port<IF>`) og **export** (`sc_export`), og **interface-metode-kall** (prosessen kaller `port->write(x)`; kanalen implementerer interfacet). `theorem` **`sc_signal`-delta-semantikk**: skriv nå, synlig etter delta ⇒ forklarer hvorfor to prosesser som leser/skriver samme signal ikke racer. **Syntaks- og konstruksjonsliste:** `sc_signal`/`sc_fifo`/`sc_mutex`/`sc_semaphore`/`sc_buffer`, `sc_port`/`sc_export`, interface-metode-kall, delta-oppdatering. **Puggeark:** kanaltabell (type → blokkerer? delta? bruk) + «`sc_signal` oppdateres i delta».
- **Oppgavesjangre:** R1/R4/R5. Mønstereksempel (R1): «Hvilken kanal blokkerer leseren når den er tom? (a) `sc_signal` (b) `sc_fifo` (c) `sc_buffer` …» — b.
- **Typiske feil:** Tro `sc_signal` oppdateres umiddelbart (den er delta-forsinket); blande `sc_signal` og `sc_buffer` (buffer trigger uten verdiendring); tro `sc_fifo` ikke blokkerer; forveksle `sc_port` (krever) og `sc_export` (tilbyr).
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 6.4: Scheduling-semantikk og faser — preemptiv event, ikke-preemptiv prosess

- **id:** `tfe4171-6-4` · **number:** 6.4 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-6-2` · **kapitteltype:** teori
- **description:** SystemC-schedulerens semantikk: **ikke-preemptiv (kooperativ)** kjøring av prosesser (en prosess kjører til `wait()`/retur uten å avbrytes) men **preemptiv event-scheduling** (én event per objekt, ny overskriver), og de tre fasene elaboration → initialisation → evaluate-update (`sc_start()`).
- **Eksamensbelegg:** Sjanger B, 96. Preemptiv vs. ikke-preemptiv (Svarstad 2017); elaboration før `sc_start()`, evaluate-update-løkken starter med `sc_start()` (2015 P1j, 2016 P1g). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **prosess-scheduling er ikke-preemptiv/kooperativ**: en runnable prosess kjører til den selv gir fra seg kontroll (`wait()` eller retur) — scheduleren avbryter den **ikke**. `theorem` **event-scheduling er preemptiv**: for et objekt overlever kun den tidligst planlagte event (jf. 6.2). `theorem` **fasene**: **elaboration** (bygg modulhierarki, bind porter/kanaler — skjer **før** `sc_start()`); **initialisation** (alle prosesser markeres runnable én gang); **evaluate-update-løkken** (starter **med** `sc_start()`: kjør runnable-prosesser → oppdater kanaler i update-fasen → delta → framrykk tid). **Syntaks- og konstruksjonsliste:** ikke-preemptiv/kooperativ, preemptiv event, elaboration/initialisation/evaluate-update, `sc_start()`. **Puggeark:** «prosesser: ikke-preemptive; events: preemptive; elaboration før `sc_start`, eval-update-løkke fra `sc_start`».
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R1): «Når skjer port-binding i en SystemC-simulering? (a) i evaluate-fasen (b) under elaboration, før `sc_start()` (c) ved første delta …» — b.
- **Typiske feil:** Tro SystemC-prosesser kan preemptes (de er kooperative); tro elaboration skjer etter `sc_start()` (den er før); blande initialisation og evaluate-update; tro tid rykker fram midt i en delta-runde.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.5: DRILL — «Kjør SystemC i hodet»: utskrift og reverse-engineering

- **id:** `tfe4171-6-5` · **number:** 6.5 · **estimatedMinutes:** 90 · **prerequisites:** `tfe4171-6-4` · **kapitteltype:** drill
- **description:** Full drill på fagets mest tekniske ferdighet (R4/R3): gitt en SystemC-modul, skriv **nøyaktig simuleringsutskrift med tidsstempler** (spor prosesser, events, delta-sykluser), og motsatt — **reverse-engineer** en prosesskropp fra en gitt utskrift.
- **Eksamensbelegg:** Sjanger B, 96. Skriv utskrift fra `time_thread` (2016), reverse-engineer prosess fra utskrift (2016 P4b), `countme`-antall (2017 P5a). Prioritet: **perfekt** (den mest «tekniske» ferdigheten i faget).
- **Innholdskontrakt (løsningsoppskrift):** **Skriv utskrift (R4):** 1) sett opp **spor-tavle** (simuleringstid, delta, event-kø, signalverdier, runnable-prosesser); 2) initialisation: alle prosesser runnable; 3) kjør hver runnable prosess til `wait()`/retur (ikke-preemptivt); 4) oppdater kanaler i update-fasen; 5) prosesser delta-events; 6) når tomt for delta, framrykk tid til neste timed event; 7) skriv hver `cout`/`sc_time_stamp()`-linje i rekkefølge. **Reverse-engineer (R3):** fra en utskrift, slutt deg til sensitivity, `wait`-tider og `notify`-mønster som produserer den. Sensor-kommentert case med margnotat om hvor delta-sykluser og timed-notify-overskriving avgjør utskriften. 12–16 oppgaver (R4/R3) med varierte moduler.
- **Oppgavesjangre:** B. Mønstereksempel (R4, nyskrevet): «Gitt en modul med en `SC_THREAD` som gjør `wait(5, SC_NS); count++; e.notify(3, SC_NS);` i loop — skriv `count` og tidsstempel for de første fire triggingene.»
- **Typiske feil:** Ignorere delta-sykluser; behandle `sc_signal` som umiddelbar; glemme at timed notify overskriver; anta preemptiv prosesskjøring; feil rekkefølge på evaluate vs. update; glemme initialisations-kjøringen.
- **Quiz: 28 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (SystemC — språk og scheduling)
1. Prøve 6.A (25 min): Prosesstyper + sensitivity + `SC_METHOD`-uten-sensitivity (sjanger B, R1).
2. Prøve 6.B (30 min): Events + notify-varianter + delta-sykluser + overskriving (sjanger B, R1/R4).
3. Prøve 6.C (25 min): Kanaler/porter + `sc_signal`-delta + faser/scheduling-semantikk (sjanger B, R1).
4. Prøve 6.D (30 min): Kjør-i-hodet SystemC-utskrift + reverse-engineer (sjanger B, R4/R3).

---

### Del 7 — Transaksjonsnivåmodellering (TLM) *(Søyle 4 — score 85)*

> Score 85 — i både MC og SystemC-blokk hvert år. Konseptuelt: hvorfor TLM gir
> HW/SW-codesign og >1000× fart, untimed vs. timed, «local time»/slack, blocking vs.
> non-blocking, og SoC-arkitektur/designsyklus (tegn SoC med TLM-porter).

#### Kapittel 7.1: TLM-grunnlag — abstraksjonsnivå og hvorfor

- **id:** `tfe4171-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-6-3` · **kapitteltype:** teori
- **description:** Transaksjonsnivåmodellering: å modellere kommunikasjon som **transaksjoner** (funksjonskall) i stedet for pin-wiggling, hvorfor det gir HW/SW-codesign og enorm simuleringsfart, og skillet untimed vs. timed (loosely/approximately timed).
- **Eksamensbelegg:** Sjanger D, 85. «Hvorfor SystemC/TLM» og abstraksjonsnivå er MC + konseptuelt hvert år. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **TLM** (kommunikasjon abstrahert til transaksjoner via interface-metodekall; separer *kommunikasjon* fra *beregning*). `theorem` **abstraksjonsnivåer**: **untimed** (funksjonell, ingen tid), **loosely timed** (grov tid, temporal decoupling), **approximately timed** (fasedelt, mer nøyaktig timing). `theorem` **hvorfor**: TLM gir (a) **tidlig HW/SW-codesign** (kjør programvare på en modell før RTL finnes), (b) **>1000× simuleringsfart** (ingen klokke-/pin-detaljer), (c) sen HW/SW-partisjonering. `text` kobling til abstraksjonspyramiden (RTL → TLM → funksjonell). **Syntaks- og konstruksjonsliste:** transaksjon, initiator/target, untimed/loosely/approximately timed, HW/SW-codesign, temporal decoupling. **Puggeark:** «TLM = transaksjoner, ikke pins; untimed/loosely/approximately timed; gir codesign + fart».
- **Oppgavesjangre:** R1. Mønstereksempel (R1): «Hva er hovedgrunnen til at TLM simulerer >1000× raskere enn RTL? (a) mindre kode (b) ingen klokke-/pin-nivå-detaljer, kommunikasjon som funksjonskall …» — b.
- **Typiske feil:** Tro TLM er en syntese-/implementasjonsmodell (den er en abstraksjons-/simuleringsmodell); blande untimed og timed; tro fartsgevinsten kommer fra mindre kode (den kommer fra abstraksjonsnivået).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.2: TLM-mekanikk — blocking/non-blocking, local time, sockets

- **id:** `tfe4171-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-7-1` · **kapitteltype:** teori
- **description:** Hvordan TLM-2.0 kobler moduler: initiator/target-sockets, blocking transport (`b_transport`) vs. non-blocking (`nb_transport`), og «local time»/slack (temporal decoupling — en initiator kjører fram i sin egen lokale tid før den synkroniserer).
- **Eksamensbelegg:** Sjanger D, 85. Blocking vs. non-blocking-porter og local time/slack er MC + konseptuelt (Svarstad 2017). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **initiator/target socket** (koblingspunktene; initiator starter transaksjoner, target svarer). `theorem` **blocking (`b_transport`)** (returnerer når transaksjonen er ferdig — enkel, loosely timed) vs. **non-blocking (`nb_transport`)** (fasedelt med retur-fase — approximately timed, mer detaljert). `theorem` **local time / slack**: med **temporal decoupling** kjører en initiator fram i sin **lokale tid** (opptil et «quantum»/slack) før den synkroniserer med global tid ⇒ færre kontekstbytter ⇒ fart. `definition` **generic payload** (standardisert transaksjonsobjekt). **Syntaks- og konstruksjonsliste:** initiator/target socket, `b_transport`/`nb_transport`, local time/slack/quantum, generic payload, master/slave. **Puggeark:** «`b_transport` = blocking/loosely; `nb_transport` = non-blocking/fasedelt/approximately; local time = kjør foran, synk ved quantum».
- **Oppgavesjangre:** R1. Mønstereksempel (R1): «Hva er poenget med ‘local time’/temporal decoupling i TLM? (a) mer nøyaktig timing (b) la en initiator kjøre foran i lokal tid og synkronisere sjeldnere for fart …» — b.
- **Typiske feil:** Blande blocking (loosely timed, enkel) og non-blocking (approximately timed, fasedelt); tro local time gir bedre timing-nøyaktighet (den bytter nøyaktighet mot fart); forveksle initiator (master) og target (slave).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 7.3: SoC-arkitektur og designsyklus

- **id:** `tfe4171-7-3` · **number:** 7.3 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-7-1` · **kapitteltype:** teori
- **description:** Hvorfor TLM passer moderne SoC-utvikling: den moderne designsyklusen med **sen HW/SW-partisjonering**, og å tegne/analysere et SoC-blokkdiagram (kjerner, DRAM/SRAM, buss) med TLM-porter.
- **Eksamensbelegg:** Sjanger L, 45. MC om designsyklus + tegneoppgave (tegn SoC med kjerner/DRAM/SRAM, 2015 P4b). Prioritet: **kjenne** (billig MC-uttelling; tegneoppgave 2/3 år).
- **Innholdskontrakt:** `definition` **SoC** (system-on-chip: prosessorkjerner + minne + periferi + interconnect på én brikke). `theorem` **designsyklus med sen partisjonering**: modellér systemet i TLM først → prototyp programvaren mot modellen → **beslutt HW/SW-partisjonering sent** (hva som blir maskinvare vs. programvare) → forfin til RTL. `text`/R5 **SoC-blokkdiagram**: kjerner, DRAM/SRAM, buss/interconnect, TLM-porter mellom blokkene. **Syntaks- og konstruksjonsliste:** SoC, HW/SW-partisjonering, interconnect/buss, DRAM/SRAM, TLM-port. **Puggeark:** «SoC = kjerner + minne + periferi + interconnect; TLM muliggjør sen HW/SW-partisjonering».
- **Oppgavesjangre:** R1/R5. Mønstereksempel (R5, nyskrevet): «Tegn et enkelt SoC med to kjerner, delt SRAM og en DRAM-kontroller, koblet via en buss med TLM-porter; marker initiator/target.»
- **Typiske feil:** Tro HW/SW-partisjonering må skje tidlig (TLM lar den utsettes); blande DRAM (ekstern, tett) og SRAM (på-brikke, rask); glemme initiator/target-retning på TLM-portene.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 7:** 4 prøver (Transaksjonsnivåmodellering)
1. Prøve 7.A (25 min): TLM-abstraksjonsnivåer + hvorfor (codesign/fart) (sjanger D, R1).
2. Prøve 7.B (25 min): Untimed vs. timed + blocking/non-blocking (sjanger D, R1).
3. Prøve 7.C (25 min): Local time/slack + temporal decoupling (sjanger D, R1).
4. Prøve 7.D (25 min): SoC-arkitektur + tegn blokkdiagram m/TLM-porter (sjanger L, R5).

---

### Del 8 — Testbenk og coverage *(score 68/58 — støtter søyle 4)*

> Sterkt hos Morrison (2015/2016), usikkert om Svarstad viderefører — men
> lavthengende poeng. Code vs. functional coverage, covergroup/coverpoint/bins,
> constrained random, og en kompakt samling av FPGA-ABV / UVM-lett / SV-vs-Verilog.

#### Kapittel 8.1: Coverage — code vs. functional, covergroup

- **id:** `tfe4171-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-1-2` · **kapitteltype:** teori
- **description:** Coverage-mekanikken: forskjellen code vs. functional coverage (fra 1.2), og hvordan man skriver functional coverage med `covergroup`/`coverpoint`/`bins` (inkl. `bins[N]`-array og range-bins).
- **Eksamensbelegg:** Sjanger F, 68. Teori + skriv covergroup (2016 P2b/P2d — «syntax not strict», 1p coverpoints, 2p bins). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **code coverage** vs. **functional coverage** (repetert fra 1.2 med kode). `theorem` **covergroup**: `covergroup cg @(posedge clk); cp: coverpoint sig { bins lo = {[0:3]}; bins hi[] = {[4:7]}; } endgroup` — **coverpoint** velger signalet, **bins** partisjonerer verdiene (eksplisitte, range, `bins[]`-array som lager én bin per verdi, `default`). `theorem` **når er dekning nok** (kobling til completeness, 1.2): begge coverage-typer kreves; høy functional coverage betyr at de definerte scenariene er sett, ikke at alt er verifisert. `warning` sensor vurderer **hva** som dekkes (riktige coverpoints/bins), ikke semikolon. **Syntaks- og konstruksjonsliste:** `covergroup`/`coverpoint`/`bins`, `bins[]`-array, range-bins, `default`, code/functional coverage. **Puggeark:** covergroup-malen + bins-typer + «begge coverage-typer kreves».
- **Oppgavesjangre:** R3/R1. Mønstereksempel (R3, nyskrevet): «Skriv en covergroup som dekker en 3-bits `mode` med separate bins for verdiene 0–2, 3–5 og 6–7.» (`coverpoint mode { bins a={[0:2]}; bins b={[3:5]}; bins c={[6:7]}; }`.)
- **Typiske feil:** Tro code coverage alene er nok; feil bins-partisjonering (overlapp/hull); forveksle `bins x[]` (én bin per verdi) og `bins x` (én samlet); tro syntaks vurderes strengt her (det er logikken/bins som teller).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 8.2: Constrained random verification

- **id:** `tfe4171-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `tfe4171-8-1` · **kapitteltype:** teori
- **description:** Randomisert stimulusgenerering under begrensninger: `rand`/`randc`, `constraint`-blokker, `inside {[a:b]}`, implikasjons-constraints (`->`), og hvordan man resonnerer om **hvilke verdier som kan/ikke kan genereres**.
- **Eksamensbelegg:** Sjanger G, 58. Forklar constrained random (2015) + MC på constraint-løsning: «hvilke verdier er mulige?» (2016). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **`rand`** (uniform tilfeldig per randomisering) vs. **`randc`** (syklisk — uttømmer alle verdier før repetisjon). `theorem` **constraint**: `constraint c { x inside {[1:10]}; x != 5; y -> (x > 3); }` — solveren finner en tilordning som oppfyller **alle** constraints samtidig; `inside` gir et sett/intervall, `->` gir en betinget constraint, arvede constraints legges til. `theorem` **hvilke verdier**: for å avgjøre om en verdi kan genereres, sjekk om den oppfyller **konjunksjonen** av alle constraints (inkl. arvede). **Syntaks- og konstruksjonsliste:** `rand`/`randc`, `constraint`, `inside`, implikasjon `->`, `dist`, constraint-arv. **Puggeark:** «`rand` uniform, `randc` syklisk; constraints er en konjunksjon solveren løser; `inside`/`->`».
- **Oppgavesjangre:** R1/R4. Mønstereksempel (R1): «Gitt `x inside {[0:7]}; x != 3; x > 1;` — hvilke verdier kan `x` få?» (2, 4, 5, 6, 7.)
- **Typiske feil:** Tro `rand` uttømmer alle verdier (det gjør `randc`); glemme en constraint i konjunksjonen når man ramser opp mulige verdier; feiltolke `->` (implikasjon, ikke tilordning); glemme arvede constraints.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 8.3: Testbenk, FPGA-ABV, UVM og SV-vs-Verilog *(kjenne — samlet lavfrekvent)*

- **id:** `tfe4171-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-8-2` · **kapitteltype:** teori
- **description:** En kompakt samling av de lavfrekvente, men billige MC-temaene: testbenk-/program-blokker, assertion-basert verifikasjon på FPGA (hva er synthesizable i en assertion, action blocks, fart vs. simulering), UVM-lett (nevnt i emnebeskrivelsen), og nye SystemVerilog-trekk vs. Verilog (assertions, interfaces, programs).
- **Eksamensbelegg:** Sjanger M, 22/20 (FPGA-ABV kun 2016 P2a; SV-vs-Verilog kun 2017). Lav frekvens, men gratis MC-uttelling. Prioritet: **kjenne**. UVM dekkes lett (ikke eksplisitt eksamenert i de tre settene).
- **Innholdskontrakt:** `definition` **testbenk/program-blokk** (stimuli + sjekk; program-blokk kjører i Reactive). `theorem` **FPGA-emulering av assertions**: assertions kan emuleres på FPGA side ved side med designet for **fart** (raskere enn simulator); **action blocks er ikke syntesbare** (resten av en assertion kan være det); FPGA-emulering er raskere enn simulering. `definition` **UVM** (kort, «bør kjenne til»): et klassebibliotek for gjenbrukbare, constrained-random testbenker (agent/driver/monitor/sequencer) — nevnt i emnebeskrivelsen, ikke eksamenert i arkivet. `text` **SV vs. Verilog**: SystemVerilog legger til assertions, interfaces og program-blokker. **Syntaks- og konstruksjonsliste:** program-blokk, FPGA-emulering, action block (ikke syntesbar), UVM (agent/driver/monitor), interface/program. **Puggeark:** «action blocks ikke syntesbare; FPGA-ABV raskere enn simulator; SV legger til assertions/interfaces/programs».
- **Oppgavesjangre:** R1. Mønstereksempel (R1): «Hva er *ikke* syntesbart når en assertion emuleres på FPGA? (a) selve sekvensen (b) action block-en (`else $error`) …» — b.
- **Typiske feil:** Tro hele assertionen (inkl. action block) er syntesbar; tro FPGA-emulering er tregere enn simulering; forvente at UVM er tungt eksamenert (det er det ikke i arkivet); tro Verilog har innebygde assertions/interfaces.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 8:** 4 prøver (Testbenk og coverage)
1. Prøve 8.A (25 min): Code vs. functional coverage + completeness (sjanger F, R1).
2. Prøve 8.B (30 min): Skriv covergroup/coverpoint/bins (sjanger F, R3).
3. Prøve 8.C (25 min): Constrained random — hvilke verdier er mulige? (sjanger G, R1/R4).
4. Prøve 8.D (20 min): FPGA-ABV + UVM-lett + SV-vs-Verilog (sjanger M, R1).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Eksamensdisiplinen — de fire søylene, minuspoeng og puggeark

- **id:** `tfe4171-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `tfe4171-0-2` · **kapitteltype:** teori (sjangerguide)
- **description:** Selve eksamensdisiplinen: hvordan disponere 4 timer over de fire søylene, minuspoeng-strategien på Problem 1 (forventningsverdi), hvordan bruke de memorerte puggearkene (lukket bok), og hvordan skrive løsninger sensor gir full uttelling for (treff hvert delmoment, gi flere gyldige svar).
- **Eksamensbelegg:** Metakapittel over alle fire søyler og responsformer. Trener de viktigste føringene — *gjett kun når du kan eliminere (minuspoeng)*, *pugg syntaks (lukket bok)*, *treff hvert delmoment*, *flere gyldige svar godtas*, *klassifiser motbevis korrekt*. Prioritet: **perfekt**.
- **Innholdskontrakt:** `tip`/`text`: (i) **søyle-disponering** — Problem 1 MC (~18–20 p) → SVA (10–12 p) → formell (10–18 p) → SystemC/TLM (10–12 p); ~2,5 min per MC-punkt, ta de sikre først; (ii) **minuspoeng-strategi** — forventningsverdi (svar bare når eliminering gjør gevinsten > tapet); aldri kryss av flere enn bedt om; (iii) **lukket bok** — reproduser puggearkene (SVA-operatorer, scheduling-regioner, SystemC-faser/kanaler, notify-varianter, CTL-tabellen); (iv) **skriv for sensor** — treff hvert delmoment (finkornet delpoeng), gi **2–3 gyldige** formuleringer der de finnes, hold logikken stram (syntaks vurderes mildt); (v) **motbevis-disiplin** — kjør alltid klassifiseringsmalen (reachable? → ekte/spuriøst → fiks); (vi) **kodesporing** — bruk spor-tavlen (tid/delta/verdi/region); (vii) **beståttkravet** — eksamen må bestås separat (E+). Sammendrag av sensor-metareglene.
- **Oppgavesjangre:** Alle R1–R6 (metanivå). 6–8 «hvordan bør du svare?»-oppgaver: gitt en søyle og en situasjon, avgjør beste strategi (gjett eller blank; hvilken puggeark-post; hvordan treffe delpoeng; klassifiser motbevis).
- **Typiske feil:** Gjette blindt på MC (minuspoeng); bruke for lang tid på én søyle; ikke pugge (lukket bok); levere «i nærheten»-svar som bommer på delpoeng; kun én formulering der flere godtas; hoppe over reachability-sjekken i motbevis.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 9.2: Øvingseksamen 1 — Morrison-stil (IPC/SAT + coverage + scheduling)

- **id:** `tfe4171-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `tfe4171-9-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett i **Morrison-stil** (2015/2016-profil): fire søyler, med den formelle blokken vinklet operasjonelt (IPC/reachability + SAT-avrulling) og ekstra vekt på coverage, constrained random og scheduling-regioner.
- **Eksamensbelegg/miks:** Speiler 2015/2016. **Søyle 1 (MC, minuspoeng):** bred sveip — SVA-syntaks-feller, scheduling-regioner, SystemC-faser, TLM-prinsipper, coverage. **Søyle 2 (SVA):** skriv property + sequence (navngitt gjenbruk) + les/forklar. **Søyle 3 (formell):** IPC-property + **klassifiser motbevis** (ekte/spuriøst) + fiks + SAT-avrulling (tegn). **Søyle 4 (SystemC/TLM):** kjør modul og skriv utskrift + covergroup + TLM-prinsipp. Alle responsformer R1–R6. Alle nyskrevne (egne kretser/properties/moduler/utskrifter/tall). **Løsningsforslag i `collapsible` per oppgave**, skrevet som A-besvarelse med **2–3 gyldige alternativer** der relevant, **delpoeng markert**, `tip` om minuspoeng og tidsbudsjett. Innledende `tip` om at dette er Morrison-profilen (IPC/SAT, ikke CTL).
- **Innholdskontrakt:** Dekker sjangrene A–G, I, J, L (Morrison-vekt).
- **Oppgavesjangre:** A–L, responsformer R1–R6.
- **Quiz: 20 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2 — Svarstad-stil (CTL/Kripke + vacuity + TLM local time)

- **id:** `tfe4171-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `tfe4171-9-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett i **Svarstad-stil** (2017-profil): fire søyler, med den formelle blokken vinklet teoretisk (CTL/Kripke/model checking + vacuity) og en mer konseptuell SystemC/TLM-del (preemptiv vs. ikke-preemptiv, local time).
- **Eksamensbelegg/miks:** Speiler 2017. **Søyle 1 (MC, minuspoeng, +3/−1,5):** SVA-syntaks, deferred/`#0`, CTL-syntaks, SystemC-scheduling-semantikk, TLM. **Søyle 2 (SVA):** property + FSM-som-SVA (`square = x²`-type) + liveness (`s_eventually`). **Søyle 3 (formell, splittet):** en **Kripke-oppgave** (marker states der en CTL-formel holder) + en FSM/SVA-designoppgave + **vacuity** (oppdag/unngå vacuous pass). **Søyle 4 (SystemC/TLM):** konseptuell scheduling (preemptiv event vs. ikke-preemptiv prosess) + local time/slack. Alle responsformer. Alle nyskrevne. **Løsningsforslag som A-besvarelse** med margnotat om de faste fellene (temporal operator uten kvantor, vacuous pass, feil om preemptiv scheduling).
- **Innholdskontrakt:** Dekker A, B, C, D, E, H, I, K (Svarstad-vekt); supplerer 9.2 med CTL/Kripke og vacuity.
- **Oppgavesjangre:** A–K, R1–R6.
- **Quiz: 20 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3 — blandet, lukket-bok-kalibrert

- **id:** `tfe4171-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** `tfe4171-9-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett som blander begge faglærervinklinger og er kalibrert for **gjeldende form** (lukket bok, kode D): tyngdepunkt på ren syntaks-gjenkalling (SVA/SystemC utenat), kodesporing og motbevis-klassifisering — de ferdighetene lukket bok gjør hardest.
- **Eksamensbelegg/miks:** Fire søyler, blandet Morrison/Svarstad, ekstra vekt på det man må kunne **utenat**: **Søyle 1 (MC):** tett syntaks-sveip (SVA-operatorer, scheduling-regioner, SystemC-API, notify-varianter, CTL-kvantorer) — minuspoeng krever sikker gjenkalling. **Søyle 2 (SVA):** skriv fra spesifikasjon uten oppslag + les/forklar. **Søyle 3 (formell):** motbevis-galleri (klassifiser + fiks) + valgfri IPC eller CTL. **Søyle 4 (SystemC/TLM):** kjør modul og skriv nøyaktig utskrift + TLM-konsept. **Løsningsforslag som eksplisitt viser hvilken puggeark-post hver oppgave tester** (så settet dobler som puggeark-selvtest), med `tip` om at lukket bok belønner ren gjenkalling. De tre settene sammen dekker alle sjangre A–M og alle fire søyler flere ganger.
- **Innholdskontrakt:** Dekker A–M; supplerer med syntaks-gjenkalling og lukket-bok-kalibrering.
- **Oppgavesjangre:** A–M, R1–R6.
- **Quiz: 20 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 16+22 = **38** | 14+20 = **34** |
| 1 | 1.1–1.2 | 16+16 = **32** | 16+16 = **32** |
| 2 | 2.1–2.6 | 20+22+22+20+16+28 = **128** | 24+26+26+24+16+10 = **126** |
| 3 | 3.1–3.3 | 20+20+24 = **64** | 22+20+10 = **52** |
| 4 | 4.1–4.5 | 18+20+20+18+22 = **98** | 20+22+22+18+26 = **108** |
| 5 | 5.1–5.2 | 20+26 = **46** | 20+10 = **30** |
| 6 | 6.1–6.5 | 20+22+20+20+28 = **110** | 24+26+24+22+10 = **106** |
| 7 | 7.1–7.3 | 20+20+16 = **56** | 22+22+16 = **60** |
| 8 | 8.1–8.3 | 20+20+16 = **56** | 22+22+16 = **60** |
| 9 | 9.1–9.4 | 16+20+20+20 = **76** | 12+0+0+0 = **12** |
| **Sum** | **35 kap.** | **704 ≥ 500 ✓** | **620 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensformen. **Quiz er direkte eksamenstrening for
minuspoeng-søyla (Problem 1)** og kalibreres høyt (704): de fire søylene får tyngst
quiz-dekning — SVA (Del 2: **128**, kjernen), SystemC (Del 6: **110**, hel blokk),
formell (Del 4: **98**) og motbevis (Del 5: **46**, konsentrert A-differensiator).
Drillkapitlene (2.6, 3.3, 5.2, 6.5) har høyest quiz (24–28) fordi de **er**
treningsbanken for de høyfrekvente sjangrene (SVA-skriving/-sporing, region-sporing,
motbevis-klassifisering, SystemC-sporing). **Flashcards siktes høyt (620) fordi
eksamen er lukket bok (kode D)** — SVA-operatorer, SystemC-API, scheduling-regioner,
notify-varianter, TLM-begreper og CTL-syntaks er ideelt puggekortstoff (begrep/syntaks
→ presis semantikk → fast felle), og teorikapitlene bærer derfor flest flashcards
(20–26 hver), mens drillkapitlene ligger lavt (10) og øvingseksamenene gir 0 (rene
oppgavesett) men bidrar 20 quiz hver (bred søyle-trening).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8 → 32 prøver)

Hver prøve er nyskrevne oppgaver i eksamens responsformer (R1–R6), med
løsningsforslag som holder sensorens form (**2–3 gyldige alternativer** der de
finnes, **delpoeng markert**, minuspoeng-notat på R1). Prøvekapitler bygges som
`tfe4171-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i
sluttblokken til hver del over (Del 1–8). Del 0 og Del 9 får ikke egne prøver (Del 9
**er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 9.2–9.4)

| Sett | Profil | Miks (fire søyler) |
|---|---|---|
| Øvingseksamen 1 (9.2) | **Morrison-stil** (2015/2016) | MC (minuspoeng) + SVA + **IPC/reachability + SAT-avrulling + motbevis** + SystemC-utskrift + coverage/constrained random |
| Øvingseksamen 2 (9.3) | **Svarstad-stil** (2017) | MC (+3/−1,5) + SVA (liveness/FSM) + **CTL/Kripke + vacuity** + konseptuell SystemC (preemptiv) + TLM local time |
| Øvingseksamen 3 (9.4) | **Blandet, lukket-bok-kalibrert** | Tett syntaks-MC + SVA fra spesifikasjon + **motbevis-galleri** + SystemC-sporing + TLM; dobler som puggeark-selvtest |

Hvert sett er bygd som **de fire faste søylene i rekkefølge (MC med minuspoeng → SVA
→ formell → SystemC/TLM)**, med løsningsforslag som A-besvarelse (flere gyldige svar,
delpoeng markert). Til sammen dekker de tre settene alle sjangre A–M, alle
responsformer R1–R6 og **begge faglærervinklinger** på formell verifikasjon.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 4 t skriftlig, engelsk, A–F, **eksamen 75 % + prosjekt
   25 %**, **eksamen må bestås separat** (E+), **fire faste søyler** (MC med
   minuspoeng → SVA → formell → SystemC/TLM), **lukket bok (kode D)** `(verifiser)`,
   og **faglærerskiftet** Morrison→Svarstad (to formelle vinklinger) — fra
   kap. 0.1/9.1.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (SVA-operatorer lese/skrive, SystemC-kodesporing, IPC/reachability +
   motbevis-klassifisering, scheduling-regioner), **kunne** (TLM-prinsipper,
   coverage/covergroup, constrained random, CTL/Kripke + vacuity, SAT-avrulling,
   FSM-som-SVA), **kjenne** (SoC-arkitektur/designsyklus, FPGA-ABV, UVM,
   SV-vs-Verilog).
3. **Respons- og sjangerguiden** — R1–R6 (MC-minuspoeng, skriv SVA, skriv kode,
   kjør-i-hodet, tegn diagram, vurder motbevis) med strategien fra kap. 9.1, og
   innholdssjangrene A–M med løsningsoppskriftene fra drillkapitlene (2.6, 3.3, 5.2,
   6.5) i kortform.
4. **Sensorreglene** — gjett kun når du kan eliminere (minuspoeng); treff hvert
   delmoment (finkornet delpoeng); gi **2–3 gyldige** svar der de finnes; hold
   logikken stram (syntaks vurderes mildt); klassifiser motbevis med malen; bruk
   emnets/pensumets notasjon.
5. **Felle-katalogen** — de faste fellene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: `$rose` vs. `$posedge` (2.1), `|->`
   vs. `|=>` + `##`-telling (2.3), 100 % code coverage ≠ ferdig (1.2/8.1),
   scheduling-regioner/hvor assertions samples (3.1), deferred/`#0` ufølsom for
   glitch (3.2), IPC over-approksimerer (ser *flere*) (4.1), glemme reachability →
   feilklassifisert motbevis (4.3/5.1), `SC_METHOD` uten sensitivity kjører én gang
   (6.1), timed notify overskriver (6.2), elaboration før `sc_start()` (6.4),
   property over interne signaler man ikke har (2.6), vacuous pass (2.5),
   temporal operator uten kvantor i CTL (4.5).
6. **Notasjons- og puggeark** — samlet for en lukket-bok-eksamen (erstatning for
   quickreference-kortet): **SVA-operatorene** (`##`/`[*]`/`[->]`/`[=]`, `|->`/`|=>`,
   `$rose`/`$fell`/`$stable`/`$past`, `nexttime`/`always`/`s_eventually`/`until`,
   `disable iff`), **scheduling-regionene** (Preponed→…→Postponed + sample/evaluate),
   **SystemC-API-et** (prosesstyper, sensitivity, `sc_event`, notify-varianter,
   kanaltyper, faser), **TLM-begrepene** (untimed/timed, `b_transport`/`nb_transport`,
   local time), **IPC/formell** (operasjonell property, reachability-invariant,
   over-approksimasjon, unsat⇔holder), **CTL-tabellen** (`AX/EX`, `AF/EF`, `AG/EG`,
   `A[·U·]/E[·U·]` + kvantorregelen), og **motbevis-beslutningstreet** (reachable? →
   ekte/spuriøst → fiks).
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): fordi
   bredden (fire søyler) *er* eksamensformen, dekk alle fire — men prioritér **SVA**
   (Del 2) og **SystemC-sporing** (Del 6) tidlig (kjernen + mest kodearbeid), deretter
   **formell + motbevis** (Del 4–5, A-differensiatoren), så **scheduling-regioner**
   (Del 3) og **TLM** (Del 7), og til slutt **coverage/constrained random** (Del 8) og
   **CTL/Kripke** (4.5) som sikringstema. Pugg puggearkene løpende (lukket bok), og
   kjør prøvene underveis + de tre øvingssettene de siste ukene under tidspress
   (240 min, fire søyler), inkludert minuspoeng-disiplin på Problem 1.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tfe4171` med alle 35 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («2.6», ALDRI lineær «14» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 2.6»).
2. **Del 0** (kap. 0.1–0.2) — etablerer de fire søylene, responsformene R1–R6,
   innholdssjangrene A–M, frekvenstallene, minuspoeng-strategien, «kjør koden i
   hodet»-metoden, puggeark-disiplinen (lukket bok) og forbeholdene (3 sett; kode
   C→D `(verifiser)`; faglærerskiftet) som resten refererer til.
3. **De åtte temadelene** bygges i rekkefølge Del 1 → Del 8 (innad følger kapitlene
   forkunnskaper: 2.1 før 2.2/…/2.6; 3.1 før 3.2/3.3; 4.1 før 4.2→4.4 og 4.5; 5.1 før
   5.2; 6.1 før 6.2→6.5; 7.1 før 7.2/7.3; 8.1 før 8.2/8.3). Prioritér innhold/kvalitet
   på de fire søylene (Del 2 SVA, Del 4 formell, Del 5 motbevis, Del 6 SystemC).
   Bygg Del 4 med **begge** faglærervinklinger tydelig merket (IPC/SAT = Morrison,
   CTL/Kripke = Svarstad).
4. Del 9 (eksamenstreningen) til slutt — gjenbruker alle responsformer og sjangre;
   de tre øvingseksamenene speiler de fire søylene (Morrison-stil / Svarstad-stil /
   blandet lukket-bok).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers
   prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i engelske sitattegn og i SVA/SystemC/kode; `\\` for LaTeX-kommandoer);
  `npm run build` grønn.
- [ ] **Quiz er eksamenstrening for minuspoeng-søyla**: `options[0]` = riktig svar
  (runtime stokker); hver quiz-forklaring begrunner riktig svar **og** hvorfor de
  sentrale distraktorene er gale (den diskriminerende ferdigheten); utvalgte
  «feller» viser forventningsverdi-resonnementet (gjett/blank).
- [ ] **Fire-søyle-strukturen**: temadelene grupperer rundt søylene (SVA → scheduling
  → formell → motbevis → SystemC → TLM → coverage), og Del 9 speiler de fire søylene.
- [ ] **Lukket bok / puggeark**: hvert syntakstungt kapittel (2.1–2.6, 3.1–3.2, 4.2,
  4.5, 6.1–6.4, 7.1–7.2, 8.1–8.2) har et `collapsible` «Puggeark» rett etter
  Syntaks- og konstruksjonslista; Del 9 samler dem til ett notasjonsark.
- [ ] **Syntaks- og konstruksjonsliste per delkapittel**: hvert delkapittel som bruker
  syntaks/konstruksjoner har `collapsible` «Syntaks- og konstruksjonsliste» rett etter
  Forkunnskaper, som forklarer ALT delkapitlet bruker (SVA-operatorer, SystemC-API,
  scheduling-regioner, IPC-/CTL-begreper — per delkapittel, ikke arv).
- [ ] **Syntaks-/semantikk-kontrakter som `theorem`**: SVA-operatorer (implikasjon,
  sekvenser, sampled-value), scheduling-regionrekkefølgen, SystemC-prosesstyper/
  notify-varianter/faser, IPC (operasjonell property/SAT), reachability-invariant +
  induksjon, unsat⇔holder, CTL-syntaks (kvantorregelen) — alle med annotert kodeeksempel.
- [ ] **«Kjør koden i hodet»-drill**: kap. 2.6 (SVA), 3.3 (regioner), 6.5 (SystemC) har
  spor-tavle-metoden og 12–16 sporingsoppgaver (R4); løsninger viser tavlen steg for steg.
- [ ] **Motbevis-galleriet**: kap. 5.1 har klassifiseringsmalen (`theorem`:
  reachable? → ekte/spuriøst → fiks); kap. 5.2 har ≥12 worked examples balansert
  mellom ekte og spuriøse, hver med **2–3 gyldige fikser** og advarsel mot
  over-constraining.
- [ ] **Begge faglærervinklinger i formell del**: kap. 4.2–4.4 (IPC/SAT, Morrison) og
  kap. 4.5 (CTL/Kripke, Svarstad) er tydelig merket; øvingseksamenene 9.2/9.3 kjører
  hver sin profil.
- [ ] **Flere gyldige svar**: SVA- og motbevis-løsningsforslag viser 2–3 ekvivalente
  korrekte svar og forklarer ekvivalensen (sensor godtar flere).
- [ ] **Minuspoeng eksplisitt**: Del 0 (0.2) + kap. 9.1 forklarer +2/+3 rett, 0 blankt,
  −1/−1,5 galt, og forventningsverdi-gjettestrategien (kontrast til IN2060).
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin
  felle — `$rose`/`$posedge` (2.1), `|->`/`|=>` (2.3), coverage-fella (1.2/8.1),
  scheduling-regioner (3.1), deferred/`#0` (3.2), over-approksimasjon (4.1),
  reachability-glemsel (4.3/5.1), `SC_METHOD`-sensitivity (6.1), timed-notify (6.2),
  elaboration-timing (6.4), interne-signaler i property (2.6), vacuity (2.5),
  CTL-kvantor (4.5).
- [ ] **Avgrensning holdt (hva faget IKKE er)**: ingen DFT/scan/BIST/ATPG,
  fault-modeller, CDC, timing-analyse eller synteseflyt; UVM kun lett (8.3).
- [ ] **Kode C→D `(verifiser)`**: Del 0 markerer overgangen til lukket bok mot
  gjeldende emneside som `(verifiser)`; puggearkene er begrunnet i den.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå i
  reell responsform), 6–12 øvinger (R1–R6) med `solution` + `hints`, repetisjons-
  `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 12–16
  oppgaver.
- [ ] **Quiz-sum ≥ 704 og flashcard-sum ≥ 620** per kvotetabellen (§5); quiz kalibrert
  som eksamenstrening for minuspoeng-MC; flashcards som begrep/syntaks ↔ semantikk ↔
  fast felle (lukket bok).
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener (kap. 9.2–9.4) som
  sammen dekker sjangrene A–M, responsformene R1–R6, alle fire søyler og begge
  faglærervinklinger flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, kretser, SVA-properties, SystemC-moduler,
  simuleringsutskrifter og kodebiter nyskrevne — egne verdier/kontekster; syntaks,
  operatorer og standardnotasjon er allmenn faglig kunnskap, men ingen oppgavetekster/
  fasiter/sensorformuleringer fra reelle sett gjengis; pensum (Ben Cohen SVA-handbok,
  SystemC-LRM/TLM-2.0, Kunz/OneSpin-IPC-materiale) refereres (begrep/verk), aldri
  siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
