# Bokskjelett: TDT4260 Datamaskinarkitektur (NTNU) — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNUs eksamensarkiv for TDT4260: **3 unike sett, vår
> 2015–2017**, alle på engelsk — 2015 med full LF signert Lasse Natvig, 2016/2017
> delvis LF (Magnus Själander), samt NTNUs emnebeskrivelse med **oppdatert
> læringsutbytte 2026**). Arketype: **HYBRID — DNA-regnefag (base) + DNA-drøfting
> (lånte elementer)**; se §1 for begrunnelsen og hva som lånes.
>
> **⚠️ EVIDENS OG UTVIDELSE — les før du bygger noe (utdypet i §1 og Del 0).**
> Arkivet er **lite** (3 sett, 2015–2017, lærerskifte Natvig→Själander). Konklusjonene
> om eksamens*form* (flervalgstungt med **negativ scoring** + få korte/lange
> forklaringsessays + én match-oppgave) og *temameny* (Hennessy & Patterson-
> kapitlene nesten 1:1) er robuste; **eksakt intern vekting** mellom H&P-kapitlene
> er svakere belagt og merkes der det trengs. Dagens emne (2026) vektlegger
> eksplisitt **GPGPU/applikasjonsspesifikke akseleratorer** og **maskinvaresikkerhet /
> sidekanalangrep** — temaer som er **svake eller fraværende i arkivet**. Disse
> bygges inn som egen del (Del 9) og merkes gjennomgående **(verifiser)**. Kjernen
> (kvantitative prinsipper, minnehierarki, ILP/DLP/TLP, interconnects) er stabil
> H&P-kanon og trygg å bygge på.
>
> **All notasjon følger emnets og pensumbokas konvensjoner:** norsk brødtekst med
> **engelsk fagterm i parentes** ved første forekomst («samlebånd (*pipeline*)»,
> «hurtigbufferkoherens (*cache coherence*)», «ute-av-rekkefølge (*out-of-order*)»,
> «omkonfigureringsbuffer (*reorder buffer*)», «samle-spre (*gather-scatter*)»,
> «forhåndshenting (*prefetching*)», «bisnittbåndbredde (*bisection bandwidth*)»).
> **Oppgaveteksten på reell eksamen er engelsk** — øvingseksamenene (Del 10) og
> flervalgsstammene skal derfor speile engelsk oppgavespråk der det er naturlig
> (norsk forklaring). Alle oppgaver, tallverdier, flervalgsalternativer, essays,
> FSM-diagrammer og artikkelsammendrag i den ferdige boka skal være **nyskrevne**
> (opphavsrett): H&P-modellene, standardformlene og protokollene er allmenn faglig
> kunnskap, men ingen oppgavetekster, fasiter eller sensorformuleringer fra reelle
> sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4260` |
| Tittel | **TDT4260 Datamaskinarkitektur (NTNU)** |
| Institusjon | **NTNU** (Norges teknisk-naturvitenskapelige universitet — samme som TDT4160/TDT4186/TDT4100 m.fl.) |
| Level | `'Høyskole'` |
| Arketype | **Regnefag/begrepsdrevet hybrid** — DNA-regnefag som base (faste regnemoduler + drill + `theorem`-prosedyrer) med **konsept-forklar-lån** fra DNA-drøfting (konsist-essay-håndverk, modellsvar med sensorblikk, tetthet framfor volum) |
| Antall kapitler | **46** (3 eksamenskart/strategi/repbro + 34 tema/drill + 3 moderne utvidelser + 6 artikkel/eksamenstrening) |
| Estimert totaltid | **≈ 2 720 min ≈ 45 timer** (inkl. 3 tretimers øvingseksamener) |
| Quiz totalt | **760** (krav ≥550; **flervalg ER eksamenskjernen** → siktet svært høyt, negativ-scoring-trening) |
| Flashcards totalt | **578** (krav ≥500 — svært begrepsrikt fag, hjelpemiddelfri, tungt forvekslingspar-lag → høy puggetetthet) |
| Prøver | **36** (4 per temadel 1–9) + **3 øvingseksamener** (kap. 10.2–10.4) |
| Evidensmerknad | **(verifiser)** — 3 sett, 2015–2017, lærerskifte; *form* og *temameny* sterkt belagt, *intern vekting* middels, *GPGPU/akselerator + hardware security* svakt (dagens læringsutbytte, ikke arkivet) og merket. |

**Pitch (ett avsnitt):** TDT4260 er NTNUs videregående emne i datamaskinarkitektur — det
som **optimaliserer og parallelliserer** datamaskinen som TDT4160 bygde fra bunnen. Menyen
er i praksis Hennessy & Patterson, *Computer Architecture — A Quantitative Approach*,
kapittel for kapittel: kvantitative prinsipper og «lover» (Moore/Dennard/Pollack/Amdahl +
power-ligningen), minnehierarki og cache (AMAT, VIPT, de fire Cs, TLB), instruksjonsnivå-
parallellisme (Tomasulo, hazards, VLIW, spekulasjon), dataparallellisme (SIMD/vektor/GPU,
roofline), trådparallellisme og hurtigbufferkoherens (MSI/MESI, NUMA, false sharing,
konsistens), sammenkoblingsnett (*interconnection networks*), lagerhus-datamaskiner og
energi, samt en distinktiv **forskningsartikkel-sjanger**. Vurderingen er én **tretimers
skriftlig skoleeksamen**, karakter **A–F**, **hjelpemiddelkode D** (bestemt kalkulator),
som teller 100 %. **Formen styrer boka, og den er motsatt av TDT4160:** dette er en
**gjenkjennings-/forklaringseksamen, ikke en regneeksamen**. Settet er **flervalgstungt
med NEGATIV SCORING** (+3/−1,5 eller +2/−1, blankt = 0), med et lite lag korte/lange
forklaringsessays og én match-oppgave (MSI-FSM). Bare **10–15 %** av poengene er regning
(i praksis kun flernivå-AMAT og Amdahl-speedup); **85–90 %** er teori, begrepspresisjon og
konsis forklaring. Boka speiler dette 1:1: en stor flervalgsbank trent på **sikker
gjenkjenning av alle fire alternativer** og **strategisk blanking**, to vanntette
regnemoduler (AMAT flernivå + Amdahl), konsist-essay-maler for de faste favorittene, og
artikkel-lesebokser.

**Kritisk stilregel (gjelder HELE boka) — «flervalgstungt, negativ scoring, forklar tett»:**

1. **Flervalg med NEGATIV SCORING — quiz ER eksamenstreningen, men den skal lære strategisk
   avholdenhet.** Alle tre settene domineres av flervalg (*multiple choice*) med negativ
   scoring: **feil gjett trekker** (+3/−1,5 i 2015/2017, +2/−1 i 2016), **blankt = 0**. Dette
   er hovedkontrasten mot søsterfaget IN2060 (som IKKE straffer gjetting). Konsekvens for
   boka: plattformens flervalgsquiz er **direkte eksamenstrening** og kalibreres høyt (760),
   men hver quiz-forklaring skal (i) begrunne hvorfor riktig svar er riktig, (ii) begrunne
   hvorfor **hver** distraktor er gal, og (iii) der relevant lære **når man bør la stå
   blankt**. `options[0]` = riktig svar (runtime stokker).
2. **«Which is NOT true / incorrect / false»-feller er utbredt — kjenn ALLE fire
   alternativene.** En stor andel flervalg ber deg finne det *gale* utsagnet. Da holder det
   ikke å kunne fasiten; du må kunne eliminere de tre *sanne*. Hvert begrepskapittel bygges
   derfor rundt **begrepskontrakter med forvekslingspar-skille** (Moore vs. Dennard vs.
   Pollack vs. Amdahl; coherence vs. consistency; SIMD vs. vektor; snooping vs. directory;
   de fire Cs vs. «concurrent»; RAW vs. WAR/WAW), og hvert tema har en **«not true»-drill**.
3. **MESI/MSI krever EIER + clean/dirty PER BOKSTAV — ikke bare akronymet.** Sensorfasiten
   (2015) er eksplisitt: for MESI må hver tilstand forklares med **eierskap + clean/dirty**,
   «ett ord per bokstav gir ikke full score». Kapittel 5.3 har en egen **MESI-presisjons-
   warning** og et modellsvar som gir hver bokstav eier-status + clean/dirty + typisk
   overgang. Samme krav for MSI-tilstandene og for match-oppgaven (5.6).
4. **Essays vurderes på TETTHET, ikke volum — «use the space wisely».** De korte
   («concisely describe», 4 p) og lange (10 p) essayene belønner presise, dekkende svar med
   **de forespurte stikkordene** (f.eks. Tomasulo: Issue / Execution / Write Results /
   Commit), ikke lengde. Her lånes **DNA-drøftingens essay-håndverk**: hvert essay-favorittema
   får en **konsist-essay-mal** — modellsvar som viser tetthet, dekker stikkordkravet, og et
   `tip` **Sensorblikket** med momentliste/vektlegging. Essayene og match-oppgaven ligger i
   `exercise`-blokker (plattformens flervalgsquiz har ett riktig svar per item).
5. **To vanntette regnemoduler — automatiser dem.** De **eneste** faste regneoppgavene er
   **flernivå-AMAT** (kap. 2.3) og **Amdahl-speedup** (kap. 1.4). Begge presenteres som
   `theorem`-blokker med formel → gjennomregnet eksempel → drill til feilfrihet.
   Gjenkjenning av **power-ligningen** (`P = ½·C·V²·f`), **roofline**, **PUE** og **yield**
   kreves også, men som gjenkjenning/oppsett, ikke tung utregning. Kalkulator kode D rekker
   langt; regn systematisk, ikke gjett.
6. **Emnets/pensumbokas notasjon og engelske fagterm er fasit.** Behold engelske faguttrykk
   (pipeline, cache coherence, out-of-order, reorder buffer, gather-scatter, prefetching,
   bisection bandwidth, false sharing, energy proportionality) med norsk forklaring ved
   første forekomst. Formler i emnets form: Amdahl `Speedup = 1/(s + (1−s)/N)`; flernivå-AMAT
   rekursivt `AMAT = t_L1 + m_L1·(t_L2 + m_L2·(t_L3 + m_L3·t_mem))`; power `P = ½·C·V²·f`;
   roofline `= min(peak FLOPS, AI × peak BW)`; PUE `= total anleggseffekt / IT-effekt`;
   VIPT-adresse `tag | index | offset`. Oppgavespråket på eksamen er engelsk.
7. **Bygg mot DAGENS emne — men merk det som ikke er arkivbelagt.** Prefetching (kap. 9.1,
   semesterprosjektets tema), GPGPU/akseleratorer (kap. 9.2) og maskinvaresikkerhet (kap. 9.3)
   er svakt/ikke arkivbelagt men i dagens læringsutbytte. Hele Del 9 merkes **(verifiser)** og
   plasseres etter kjernen. Branch prediction i dybden (kap. 3.4) er klassisk H&P-stoff som er
   tynt i arkivet men lett kan komme — merket «forvent fremover».

**H&P-akse-regelen (skal stå i Del 0 og styre hele boka):** Menyen er Hennessy & Patterson
kapittel for kapittel. Delene 1–7 følger H&P-kapitlene (Fundamentals → Memory hierarchy →
ILP → DLP → TLP/coherence → Warehouse-Scale Computers → Interconnection networks), Del 8 er
den distinktive **artikkel-sjangeren**, Del 9 er de moderne utvidelsene. Frekvensen styrer
*omfanget* (100 %-gjengangere får teori + eget drillkapittel; 67 %-temaer får kompakt
dekning), men ingen H&P-kjerneblokk kuttes — alle syv kjernedeler traff i alle tre settene.

**Hybrid-valget dokumentert (DNA-regnefag base + DNA-drøfting-lån):**
- **Base = DNA-regnefag.** Kapittel-DNA-ene (teori / drill / øvingseksamen), `theorem`-blokker
  for regnemoduler og prosedyrer, drillkapitler i hver temadel, og «må beherskes perfekt /
  kunne / kjenne»-prioriteringen kommer fra `DNA-regnefag.md`. Faget *har* faste, gjentakende
  oppgavemønstre (flervalgsblokkene speiler H&P-kapitlene hvert år), som er regnefagets
  kjennetegn.
- **Lån fra DNA-drøfting = konsept-forklar-håndverket.** Fordi 85–90 % av poengene er
  **teori/forklaring** og settet har korte/lange **forklaringsessays** som vurderes på
  begrepspresisjon og tetthet (ikke fasit-tall), lånes tre grep fra `DNA-drøfting.md`:
  (a) **kjernebegreper presist definert og skilt fra nabobegrep** (drøftingsfagets
  begrepspresisjon, her operasjonalisert som *forvekslingspar-skille* fordi eksamen tester
  nettopp forvekslinger via «not true»-feller); (b) **konsist-essay-maler** modellert på
  DNA-drøftingens sjangerkapittel + modellbesvarelse (oppskrift → gjennomskrevet modellsvar →
  `tip` **Sensorblikket** med momentliste), tilpasset «concisely describe»-formatet; (c)
  **artikkel-lesebokser** for forskningsartikkel-sjangeren (gjengi *mekanismen*, ikke bare
  tittelen — beslektet med drøftingsfagets pensumforankring, men uten navngitt-forfatter-krav).
- **Hva IKKE lånes fra DNA-drøfting:** pensumforankring med navngitte forfattere/verk per
  begrep. Faget har **én** pensumbok (H&P) og en artikkel*sjanger* med utskiftbare artikler;
  begreper trenger ikke tilskrives forfattere. Definisjonene forankres i H&P-kanon, ikke i
  navngitte teoretikere.

**Avvik fra DNA/README-malen (dokumentert):**
- **Quiz ER eksamenstrening, men kalibrert for NEGATIV scoring (motsatt av både TDT4160 og
  IN2060).** DNA-regnefag behandler quiz som støtte; her er flervalg selve eksamensformen, så
  quiz siktes svært høyt (760). To konsekvenser utover IN2060: (i) fordi feil gjett **trekker**,
  begrunner hver quiz-forklaring **alle fire alternativene** (så studenten tåler inverterte
  «not true»-spørsmål) og relevante forklaringer lærer **blank-strategien**; (ii) reelle
  **match-oppgaver** (MSI-FSM: hendelse → tilstand) og fler-utsagns-«velg de N» splittes til
  ett-riktig-svar-quiz (ett per hendelse/utsagn), mens den samlede match-oppgaven og essayene
  ligger i `exercise`-blokker.
- **«Symbol- og formelliste» → «Notasjons- og begrepsliste».** README krever en `collapsible`
  «Symbol- og formelliste» per delkapittel. For et begrepsdrevet arkitekturfag er det presise
  apparatet mest **engelske fagtermer + de få formlene**. Blokken heter derfor **«Notasjons-
  og begrepsliste»** og lister ALT delkapitlet bruker: engelske fagtermer (med norsk
  forklaring), de aktuelle formlene (Amdahl/AMAT/power/roofline/PUE/bisection), og de sentrale
  forvekslingsparene. Regelen «per delkapittel, ikke arv» beholdes. Unntak kun for kapitler
  nesten uten notasjon.
- **`theorem`-blokker brukes for regnemoduler OG lesekontrakter.** Der DNA-en bruker `theorem`
  for matematiske resultater, brukes den her for (a) de to **regnemodulene** (flernivå-AMAT,
  Amdahl-speedup) med formel + gjennomregnet eksempel, (b) **gjenkjennings-/oppsettskontrakter**
  for power-ligning, roofline, PUE, yield, VIPT-adressedeling, og (c) **protokoll-/
  tilstandskontrakter** (MSI/MESI-tilstander med eier + clean/dirty + overgang; Tomasulo-
  stegene Issue/Execution/Write/Commit). Disse er bokas «teoremer».
- **Konsist-essay-maler og artikkel-lesebokser lånt fra DNA-drøfting** (se hybrid-valget over)
  — DNA-regnefag har ikke essay-apparat, men 15–25 % av poengene er forklaringsessays.
- **Kapittelantall (46) ligger over DNA-veiledningen (20–35)** og er begrunnet: menyen er hele
  H&P-boka (syv kjernekapitler som alle traff hvert år), pluss en egen artikkel-sjanger og tre
  arkivsvake men læreplanpålagte utvidelser (prefetching, GPGPU/akseleratorer, hardware
  security). Sju kjernedeler med teori + eget drillkapittel gir ~4–6 kapitler hver; det er
  nødvendig for fullverdig H&P-bredde og for de mange forvekslingsparene «not true»-fellene
  tester.

---

## 2. Makrostruktur

Delene 1–7 følger **Hennessy & Patterson-kapitlene i H&P-rekkefølge** (som også er faglig
progressiv); Del 8 er artikkel-sjangeren, Del 9 de moderne utvidelsene, Del 10
eksamenstreningen. Innad i hver del ordnes kapitlene etter forkunnskaper. `sectionNames`
(bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | H&P-blokk / innhold |
|---|---|---|---|
| 0 | Eksamenskart og strategi | 3 | Prioriteringsverktøy + negativ-scoring-/essay-strategi + TDT4160-repetisjonsbro. Kjerne i studieguiden. |
| 1 | Kvantitative prinsipper og lovene | 5 | **H&P kap. 1.** Moore/Dennard/Pollack/Amdahl, power-ligning, dark silicon, Flynn, yield, TDP. **Regnemodul: Amdahl.** 100 %. |
| 2 | Minnehierarki og cache | 6 | **H&P kap. 2 + App. B.** Lokalitet, **AMAT (regnemodul)**, fire Cs, VIPT, TLB, virtuelt minne, cache-optimaliseringer, 2:1. 100 %. |
| 3 | Instruksjonsnivå-parallellisme (ILP) | 6 | **H&P kap. 3.** Hazards/avhengigheter, Tomasulo, reorder buffer/spekulasjon, branch prediction, VLIW, loop unrolling. 100 %. |
| 4 | Dataparallellisme (DLP) | 4 | **H&P kap. 4.** SIMD vs. vektor, gather-scatter, strip mining, chaining, GPU (latensskjuling/branch divergence), roofline. 100 %. |
| 5 | Trådparallellisme og koherens (TLP) | 6 | **H&P kap. 5.** Multiproc + Amdahl-multicore, snooping/directory, **MSI/MESI (eier+clean/dirty)**, coherence vs. consistency, NUMA, false sharing, SMT. 100 %. |
| 6 | Lagerhus-datamaskiner og energi | 3 | **H&P kap. 6.** Energy proportionality, PUE, RLP, MapReduce web-search, CAPEX/OPEX. 67 %, essay-favoritt. |
| 7 | Sammenkoblingsnett | 3 | **App. F.** Topologier (bus/crossbar/MIN/mesh/hypercube), bisection bandwidth, routing, deadlock, switching. 100 %. |
| 8 | Forskningsartikkel-sjangeren | 3 | Distinktiv sjanger: les og gjengi *mekanismen* i en arkitektur-artikkel. Case-studier + essay-drill. 100 %. |
| 9 | Moderne utvidelser **(verifiser)** | 3 | Prefetching (prosjekt-tema), GPGPU/akseleratorer, maskinvaresikkerhet/sidekanal. Svak/ingen arkivdekning, men dagens læringsutbytte. |
| 10 | Eksamenstrening | 4 | Sjangerguide (flervalg m/negativ scoring + «not true» + regne-MCQ + match + essay) + 3 komplette øvingseksamener. |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter faglig
avhengighet og lar frekvens styre omfang. Her styrer **H&P-kapittelaksen** delinndelingen,
fordi eksamensmenyen speiler H&P nesten 1:1 (2016-settet var eksplisitt bygd av ti
temablokker som fulgte bokas kapitler). Rekkefølgen er dessuten faglig progressiv
(prinsipper → minne → ILP → DLP → TLP → WSC → nett). Drillkapitlene (1.5, 2.6, 3.6, 4.4,
5.6, 6.3, 7.3, 8.3) ligger i sine deler. Del 8 (artikler) og Del 9 (utvidelser) er egne
deler fordi artikkel-sjangeren er distinktiv og utvidelsene er arkivsvake og skal kunne
merkes/oppdateres samlet. Del 10 beholder sjangerguiden og de tre øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har to ortogonale akser: **svarformen** (M/D/E — det faktiske eksamensformatet) og
**innholdssjangeren/temablokken** (T1–T9, H&P-kapitlene). Hvert kapittel refererer begge.
Del 0 presenterer dem for studenten.

### Svarformer (S) — flervalgstungt med negativ scoring

| Kode | Svarform | Mekanikk / vekt | Fallgruve / strategi |
|---|---|---|---|
| **M1** | Definisjons-/gjenkjennings-flervalg («which is correct/true?») | Dominerende, ~65–75 % av poengene, 4 alternativer (A–D), **+3/−1,5 eller +2/−1**, blankt=0 | Distraktorene er «nesten riktige» nabobegrep; kjenn forvekslingsparet |
| **M2** | «Not true / incorrect / false»-flervalg (invertert) | Svært vanlig, høy vanskegrad; finn det *gale* utsagnet | Må eliminere de tre *sanne* — kjenn ALLE fire, ikke bare fasiten |
| **M3** | Innebygd regne-flervalg | Få, men faste (~10 %): flernivå-AMAT, Amdahl-speedup; + gjenkjenn power/PUE/yield | Regnefeil (AMAT-nøsting, Amdahl-nevner); automatiser formelen |
| **D** | Match / paring (MSI-FSM) | 2017-format: koble hendelse (CPU/Bus read/write hit/miss) → tilstandsnummer; **INGEN minuspoeng**, 1 p per rett | «Gratispoeng» hvis du kan diagrammet — ta alle |
| **E1** | Kort forklaringsessay («concisely describe», 4 p) | 5 korte, presise svar; belønner **tetthet** | «Use the space wisely»; dekk stikkordkravet, ikke lengde |
| **E2** | Langt essay (10 p) | Tomasulo m/ ROB, Amdahl + implikasjoner, energy proportionality | Mangler nøkkelbegrep (Issue/Exec/Write/Commit); vag og lang |
| **E3** | Forskningsartikkel-essay | Gjengi **mekanismen** i en arkitektur-artikkel | Gjengir kun tittel/konklusjon, ikke mekanismen |

> **Negativ-scoring-regelen (skal stå i Del 0.2 og styre quiz-forklaringene):** Blankt (0)
> slår feil gjett (−1 til −1,5). Et rent gjett blant 4 med +3/−1,5 har forventet verdi
> `¼·3 + ¾·(−1,5) = −0,375 < 0` → **la stå blankt ved tvil**. Kan du eliminere til 2
> alternativer: `½·3 + ½·(−1,5) = +0,75 > 0` → **da lønner det seg å svare**. Match-oppgaven
> har ingen minus → svar alltid. Boka lærer denne kalkylen eksplisitt.

### Innholdssjangre / temablokker (T1–T9) — destillert fra EKSAMENSANALYSE §2–§3

| Kode | Temablokk (H&P) | Del | Frekvens | Nøkkel-forvekslingspar / regnekjerne |
|---|---|---|---|---|
| **T1** | Kvantitative prinsipper og lover | 1 | **100 %** | Moore vs. Dennard vs. Pollack vs. Amdahl; power-ligning; **Amdahl-regning** |
| **T2** | Minnehierarki og cache | 2 | **100 %** | Fire Cs vs. «concurrent»; VIPT tag/index/offset; **flernivå-AMAT** |
| **T3** | ILP | 3 | **100 %** | RAW (sann) vs. WAR/WAW (navn); «ingen execution hazard»; Tomasulo-stegene; VLIW-feller |
| **T4** | DLP | 4 | **100 %** | SIMD vs. vektor; GPU-latensskjuling via tråder (ikke cacher); roofline-formål |
| **T5** | TLP og koherens | 5 | **100 %** | MSI/MESI eier+clean/dirty; coherence vs. consistency; snooping vs. directory; false sharing |
| **T6** | WSC og energi | 6 | 67 % | Energy proportionality; PUE; MapReduce map vs. reduce; CAPEX vs. OPEX |
| **T7** | Sammenkoblingsnett | 7 | **100 %** | Bisection bandwidth; crossbar (ikke-blokkerende, skalerer dårlig); deadlock-fri routing |
| **T8** | Forskningsartikler | 8 | **100 %** | Mekanismen (f.eks. matching unit = hashing + overflow unit), ikke tittelen |
| **T9** | Moderne utvidelser **(verifiser)** | 9 | svak | Prefetching accuracy/coverage/timeliness; GPGPU; Spectre/Meltdown-familien |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/regler/
prosedyrer/protokoll-/lesekontrakter kapitlet SKAL lære (i emnets/H&Ps notasjon).
**Begrepskontrakt** angir forvekslingsparene som skal skilles skarpt. **Notasjons- og
begrepsliste** = det `collapsible`-apparatet delkapitlet krever. Prioritetsklasser:
**perfekt** / **kunne** / **kjenne**. Hvert teorikapittel har standard-DNA-en:
Eksamensvinkel-`tip` → Forkunnskaper-`text` + Notasjons-og-begrepsliste-`collapsible` →
Motivasjon → `definition`/`theorem` (i H&Ps notasjon, med forvekslingspar-skille) →
utledning/prosedyre m/intuisjon → 2–4 `example` (siste på eksamensnivå, i flervalgs-/essay-
form) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå,
svarformer M1–M3/D/E, alle med `solution` + `hints`) → Repetisjons-`collapsible`.
Drillkapitler: Eksamensvinkel → løsningsoppskrift → sensor-kommentert case → 10–16 oppgaver
på eksamensnivå (tungt vektet mot «not true» + regne-MCQ + negativ-scoring-strategi).
Essay-favorittema har i tillegg en **konsist-essay-mal** (`example` modellsvar + `tip`
Sensorblikket).

---

### Del 0 — Eksamenskart og strategi

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4260

- **id:** `tdt4260-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én tretimers skriftlig eksamen, hjelpemiddel D, 100 %, engelsk oppgavetekst), det flervalgstunge formatet med negativ scoring, H&P-kapittelmenyen med temafrekvenser, svarformene M/D/E og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (vår 2015–2017). Skal gjengi: (i) **formen** — tretimers skriftlig skoleeksamen, A–F, hjelpemiddelkode D (bestemt kalkulator), teller 100 %, oppgavetekst på engelsk (norsk/engelsk svar godtas); (ii) **det flervalgstunge formatet** — dominert av flervalg (A–D) med **NEGATIV SCORING** (+3/−1,5 i 2015/2017, +2/−1 i 2016, blankt=0), et lite lag korte (4 p) og lange (10 p) forklaringsessays, og én match-oppgave (MSI-FSM, ingen minus); (iii) **regne-vs-teori-balansen** — bare **10–15 % regning** (i praksis flernivå-AMAT + Amdahl-speedup), **85–90 % teori/gjenkjenning/forklaring** — motsatt av TDT4160; (iv) **H&P-menyen** — Fundamentals → Memory hierarchy → ILP → DLP → TLP/coherence → WSC/energi → Interconnects → Articles → [utvidelser]; (v) **temafrekvens-tabellen** (T1 lover 100 %, T2 minne/cache 100 %, T3 ILP 100 %, T4 DLP 100 %, T5 TLP/koherens 100 %, T6 WSC/energi 67 %, T7 nett 100 %, T8 artikler 100 %, prefetching 33 % men prosjekt-tema); (vi) **de fem 100 %-gjengangerne som er lette poeng** — de kvantitative lovene, AMAT, Amdahl, MSI/MESI, de fire Cs/VIPT; (vii) **utvidelses-forbeholdet** — GPGPU/akseleratorer + hardware security er i dagens læringsutbytte men svakt/ikke i arkivet (Del 9, merket (verifiser)).
- **Innholdskontrakt:** Svarform-katalogen M1–M3/D/E1–E3 (§3) + temablokkene T1–T9 som studentens sjekkliste med typisk del og vekt. **Den gjennomgående regelen:** *regneferdighetene (AMAT + Amdahl) er få men nesten garantert og lette poeng — automatiser dem; alt annet er begrepspresisjon og konsis forklaring.* **Prognosen for neste eksamen:** flere flervalg på de kvantitative lovene (forvekslingspar), minst én flernivå-AMAT og én Amdahl (M3 eller essay), MSI/MESI-flervalg + evt. match, hazard-/Tomasulo-flervalg, SIMD-vs-vektor, interconnect-topologi + bisection, minst ett artikkel-spørsmål, og trolig ett WSC/energi-essay. Avslutt med **leseplanen**: de fem 100 %-gjengangerne perfekt først; nivå-2-temaene (Tomasulo m/ROB, energy proportionality, VLIW, GPU/roofline, SMT) avgjør essayene; nivå 3 (utvidelsene) fyller ut.
- **Begrepskontrakt:** Skille **TDT4160 (bygger datamaskinen, regnetung frittekst)** fra **TDT4260 (optimaliserer/parallelliserer, gjenkjennings-/forklaringstung flervalg)**.
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med negativ scoring (+3/−1,5) og fire alternativer — lønner et rent gjett seg? Regn ut forventet verdi.» og «Rangér H&P-blokkene etter hvor mange garanterte flervalgspoeng de rommer.»
- **Typiske feil:** Metafeilene — behandle TDT4260 som en regneeksamen (den er teoritung); gjette på flervalg i tvil (negativ scoring straffer det); tro at det holder å kunne fasiten (mange «not true»-feller krever alle fire); nedprioritere de to regnemodulene (de er lette, sikre poeng); hoppe over artikkel-sjangeren (fast 100 %-innslag).
- **Quiz: 12 · Flashcards: 10** (form, svarformer, negativ scoring, H&P-meny, frekvenser, TDT4160-kontrast)

#### Kapittel 0.2: Flervalgsstrategi, negativ scoring og konsist-essay-håndverk

- **id:** `tdt4260-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4260-0-1` · **kapitteltype:** eksamensstrategi/håndverk
- **description:** Selve eksamensdisiplinen: hvordan man håndterer flervalg med negativ scoring (når svare, når la stå blankt), hvordan «not true»-feller angripes ved eliminasjon, hvordan match-oppgaven tas som gratispoeng, og hvordan et konsist forklaringsessay bygges så det treffer sensorens stikkordkrav.
- **Eksamensbelegg:** Metakapittel — bygger på sensorreglene (§4 i analysen): negativ scoring +3/−1,5 og +2/−1, blankt=0; match uten minus; essays vurdert på tetthet («use the space wisely»); MESI krever eier+clean/dirty per bokstav. Prioritet: **perfekt** (strategi avgjør netto poengsum).
- **Innholdskontrakt:** `theorem` **negativ-scoring-kalkylen**: forventet verdi av et gjett = `p·gevinst − (1−p)·trekk`; ved 4 alternativer og +3/−1,5 er rent gjett `−0,375` (la stå blankt), eliminasjon til 2 gir `+0,75` (svar). `text` **eliminasjonsteknikk for «not true»**: identifiser de tre sanne, la det ene gale stå igjen; sjekk hvert alternativ mot begrepskontrakten. `text` **match-strategi** (MSI-FSM): ingen minus → fyll alt; kryssjekk hver hendelse mot tilstandsdiagrammet. `theorem`/`text` **konsist-essay-oppskriften** (lånt fra DNA-drøfting): 1) svar på det som spørres i første setning, 2) dekk de forespurte stikkordene (f.eks. Tomasulo: Issue/Execution/Write/Commit), 3) tetthet framfor volum, 4) presis terminologi. **Notasjons- og begrepsliste:** forventet verdi, negativ scoring, distraktor, eliminasjon, «not true»-inversjon, tetthet.
- **Begrepskontrakt:** Skille **«sikker gjenkjenning» (svar)** fra **«tvil» (blankt)**; skille **volum** fra **tetthet** i essayvurdering.
- **Oppgavesjangre:** Strategi-drill. Mønstereksempel (M-strategi): «Du er usikker mellom tre av fire alternativer på et +3/−1,5-spørsmål. Bør du gjette? (Nei — EV negativ.)» + konsist-essay-mini: «Skriv et 3-setnings konsist svar på ‘hva er false sharing’.»
- **Typiske feil:** Gjette systematisk (taper netto); svare tomt der man kunne eliminert til 2 (taper poeng man burde tatt); skrive langt og vagt essay uten stikkordene; hoppe over match (gratispoeng); pugge MESI-akronymet uten eierskap/clean-dirty.
- **Quiz: 14 · Flashcards: 12** (scoring-kalkyle, eliminasjon, blank-strategi, essay-oppskrift, match-regel)

#### Kapittel 0.3: Repetisjonsbro fra TDT4160 — det du forutsettes å kunne

- **id:** `tdt4260-0-3` · **number:** 0.3 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4260-0-2` · **kapitteltype:** repetisjonsbro
- **description:** Den korte broen fra grunnkurset: samlebånd (pipeline) og de fem stegene, enkeltnivå-cache og enkeltnivå-AMAT, hazard-/avhengighetsbegrepene (RAW/WAR/WAW) og Flynns taksonomi — det TDT4260 bygger videre på uten å gjenta.
- **Eksamensbelegg:** Metakapittel/bro — bygger på progresjonen TDT4160→TDT4260 (§8 i analysen). Ikke eget eksamenstema, men **forkunnskapen** all ILP/minne-tyngde hviler på. Prioritet: **kunne** (forutsettes; repeteres kompakt).
- **Innholdskontrakt:** `text`/`definition` **samlebånd (*pipeline*)**: de fem klassiske stegene (IF/ID/EX/MEM/WB), hva pipelining gir (gjennomstrømning, ikke lavere latens per instruksjon). `theorem` **enkeltnivå-AMAT**: `AMAT = HitTime + MissRate·MissPenalty` (grunnlaget for flernivå i kap. 2.3). `definition` **hazards/avhengigheter** (repetisjon, utdypes i 3.1): structural/data/control; RAW = sann dataavhengighet. `definition` **Flynns taksonomi**: SISD/SIMD/MISD/MIMD. Kryssbok-lenker til TDT4160-kapitler der de finnes. **Notasjons- og begrepsliste:** pipeline-steg, hit/miss, MissPenalty, RAW/WAR/WAW, Flynn-klassene.
- **Begrepskontrakt:** Skille **gjennomstrømning (*throughput*)** fra **latens**; skille **Flynn-klassene** (SIMD vs. MIMD).
- **Oppgavesjangre:** Repetisjons-M1: «Hva øker pipelining primært — latens per instruksjon eller gjennomstrømning?» (gjennomstrømning). Enkeltnivå-AMAT-oppvarming.
- **Typiske feil:** Tro pipelining senker latensen per instruksjon; blande hit-tid og miss-penalty; feilklassifisere i Flynn; tro RAW kan fjernes med renaming (det kan bare WAR/WAW).
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 0:** ingen egen prøve (Del 0 er kart/strategi/bro; øves i Del 10).

---

### Del 1 — Kvantitative prinsipper og lovene *(H&P kap. 1 · T1 · 100 %)*

> Del 1 rommer fagets sikreste, mest gjentakende flervalgspoeng: de kvantitative «lovene»
> (Moore/Dennard/Pollack/Amdahl) og power-ligningen. Distraktorene bytter systematisk om på
> lovene → dette er forvekslingspar-trening i renkultur. Amdahl er den ene faste
> **regnemodulen** i delen. Kapittel 1.5 er drillkapitlet.

#### Kapittel 1.1: Moore, Dennard og power wall

- **id:** `tdt4260-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-0-3` · **kapitteltype:** teori
- **description:** Moores lov (transistorantall dobles ~hver 18. måned) vs. Dennard-skalering (effekttetthet konstant ved skalering), hvorfor Dennard brøt sammen ~2005, og hvordan det ga «power wall», dark silicon og multicore-æraen.
- **Eksamensbelegg:** Sjanger T1/M1+M2, 100 %. Nesten garantert flere flervalg hvert år; forvekslingsdistraktorer mellom Moore og Dennard. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **Moores lov**: transistorantall per brikke dobles ~hver 18.–24. måned (økonomisk/empirisk observasjon, ikke fysisk lov). `definition` **Dennard-skalering**: når transistorer krymper holdes effekt(tetthet) omtrent konstant (spenning og strøm skalerer med størrelsen). `theorem`/`text` **power wall**: Dennard brøt sammen ~2005 (lekkasje/spenning slutter å skalere) → klokkefrekvensen kan ikke lenger øke fritt → **multicore** som utvei. `definition` **dark silicon / utilization wall**: ikke alle transistorer kan være aktive samtidig innenfor effektbudsjettet. **Notasjons- og begrepsliste:** transistortetthet, effekttetthet, power wall, dark silicon, multicore-æraen; forvekslingsparet Moore vs. Dennard.
- **Begrepskontrakt:** Skarpt skille **Moore (antall transistorer)** vs. **Dennard (effekt/effekttetthet ved skalering)** — den vanligste distraktorbyttingen. Dark silicon er *konsekvensen* av at Dennard brøt, ikke en egen «lov».
- **Oppgavesjangre:** M1/M2. Mønstereksempel (M2, «not true»): «Which statement about Moore's law and Dennard scaling is NOT true?» — distraktoren tilskriver Moore effekttetthet (det er Dennard).
- **Typiske feil:** Forveksle Moore (transistorantall) og Dennard (effekttetthet) (§#1); tro Moore er en fysisk lov; tro power wall skyldes at man «gikk tom for transistorer» (det er effekt, ikke areal).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.2: Pollacks regel, yield, TDP og Flynns taksonomi

- **id:** `tdt4260-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-1-1` · **kapitteltype:** teori
- **description:** Pollacks regel (ytelse ∝ √areal → argument for mange enkle kjerner), yield/utbytte (die-areal og defekter), TDP, og Flynns taksonomi som klassifiseringsverktøy — alle faste gjenkjennings-flervalg.
- **Eksamensbelegg:** Sjanger T1/M1+M2+M3, 100 %. Pollack + Flynn-klassifisering (f.eks. «MMX/SSE er hvilken Flynn-klasse?») er faste. Prioritet: **perfekt** (Pollack/Flynn), **kunne** (yield/TDP-gjenkjenning).
- **Innholdskontrakt:** `definition` **Pollacks regel**: ytelsen til én kjerne ∝ `√(areal)` (eller √transistorer) → en dobbelt så stor kjerne gir bare ~√2× ytelse → mange enkle kjerner er mer areal-/effekteffektivt. `theorem` **yield/utbytte** (gjenkjenning): utbytte faller med die-areal og defekttetthet — større brikke = flere defekter = lavere utbytte. `definition` **TDP** (*thermal design power*): dimensjonerende effektbudsjett (ikke maks momentaneffekt). `definition` **Flynns taksonomi**: SISD/SIMD/MISD/MIMD — SSE/AVX/MMX = SIMD. **Notasjons- og begrepsliste:** `√areal`, defekttetthet, utbytte, TDP, Flynn-klassene.
- **Begrepskontrakt:** Skille **Pollack (ytelse ∝ √areal)** fra de andre lovene; skille **Flynn-klassene** (SIMD vs. MIMD); skille **TDP** (design-budsjett) fra maks momentaneffekt.
- **Oppgavesjangre:** M1. Mønstereksempel (M1): «According to Pollack's rule, doubling the area of a single core gives approximately how much more performance?» (~√2 ≈ 1,4×.)
- **Typiske feil:** Tro Pollack gir lineær ytelse med areal; klassifisere SIMD-utvidelser som MIMD; tro TDP er maks momentaneffekt; tro større die alltid gir høyere utbytte.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.3: Power-ligningen og energi vs. effekt

- **id:** `tdt4260-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-1-1` · **kapitteltype:** teori
- **description:** Den dynamiske effektligningen `P = ½·C·V²·f`, hvorfor spenningsleddet er kvadratisk (og dermed hvorfor lav spenning + mange kjerner slår høy frekvens), og skillet mellom effekt (power) og energi.
- **Eksamensbelegg:** Sjanger T1/M1+M3, 100 % (gjenkjenning av ligningen og dens implikasjon). Prioritet: **perfekt** (gjenkjenning), regning lett.
- **Innholdskontrakt:** `theorem` **dynamisk effekt**: `P_dyn = ½·C·V²·f` (C = kapasitans, V = forsyningsspenning, f = klokkefrekvens). Fordi V inngår **kvadratisk**, gir en liten spenningsreduksjon stor effektbesparelse → motivasjon for lav-V multicore framfor høy-f enkeltkjerne. `text` **effekt vs. energi**: energi = effekt × tid; en langsommere, lavere-effekt-løsning kan bruke mindre energi per oppgave. `text` (kort) **statisk effekt/lekkasje** som «bør kjenne til». **Notasjons- og begrepsliste:** `P=½CV²f`, kapasitans C, spenning V (kvadratisk), frekvens f, effekt vs. energi, lekkasje.
- **Begrepskontrakt:** Skille **effekt (P, watt)** fra **energi (J = P·t)**; forstå hvorfor `V²` gjør spenning til den viktigste knappen.
- **Oppgavesjangre:** M1/M3. Mønstereksempel (M1): «In the dynamic power equation P = ½CV²f, halving the supply voltage V (keeping C and f) reduces dynamic power by roughly what factor?» (~4×, siden V²).
- **Typiske feil:** Tro spenning inngår lineært (den er kvadratisk); blande effekt og energi; tro høyere frekvens alltid er mest energieffektivt.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 1.4: REGNEMODUL — Amdahls lov

- **id:** `tdt4260-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4260-1-3` · **kapitteltype:** teori/regnemodul
- **description:** Amdahls lov som regnemodul: `Speedup = 1/(s + (1−s)/N)`, taket `1/s` når `N→∞`, og hva loven sier om single- vs. multicore — den ene faste regne- og essayfavoritten i delen.
- **Eksamensbelegg:** Sjanger T1/M3 + E2, 67 % som regne-MCQ (2016: 100 kjerner, 2 %; 2017: 300 kjerner, 5 %) + 10-poengs essay i 2017. Prioritet: **perfekt** — automatiser formelen.
- **Innholdskontrakt:** `theorem` **Amdahls lov (regnemodul)**: for en andel `(1−s)` som parallelliseres over `N` enheter mens `s` forblir sekvensiell: `Speedup = 1/(s + (1−s)/N)`; **tak** `= 1/s` når `N→∞`. Gjennomregnet eksempel (nyskrevne tall): `s = 0,04`, `N = 64` → `Speedup = 1/(0,04 + 0,96/64) = 1/(0,04 + 0,015) = 1/0,055 ≈ 18,2×`. Vis at flere kjerner har avtakende avkastning (taket `1/0,04 = 25×`). `text`/`example` **implikasjon** (essay-stoff): selv liten sekvensiell andel begrenser speedup hardt → argument for å redusere `s`, ikke bare øke `N`. `theorem` **konsist-essay-mal (E2, Amdahl):** beskriv loven, oppgi formelen, forklar taket, og implikasjonen for single- vs. multicore. **Notasjons- og begrepsliste:** `s` (sekvensiell andel), `1−s`, `N`, `Speedup`, tak `1/s`.
- **Begrepskontrakt:** Skille **nevneren `s + (1−s)/N`** fra den vanlige feilen `1/s` (kun grensen); skille **speedup** fra parallell andel.
- **Oppgavesjangre:** M3 + E2. Mønstereksempel (M3): «A program is 95 % parallelizable. What is the maximum speedup with 300 cores?» (`1/(0,05 + 0,95/300) ≈ 18,8×` — ikke 20× og ikke 300×.) Essay: «Describe Amdahl's law and its implication for single- vs. multicore.»
- **Typiske feil:** Bruke `1/s` uten `N`-leddet med mindre `N→∞` (§#6); regne feil nevner; tro speedup ≈ N; glemme at `s` begrenser taket.
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 1.5: DRILL — de kvantitative lovene og Amdahl

- **id:** `tdt4260-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4260-1-4` · **kapitteltype:** drill
- **description:** Systematisk drill på T1: skille de fire lovene (Moore/Dennard/Pollack/Amdahl) og power-ligningen under «not true»-press, pluss rask, feilfri Amdahl-regning.
- **Eksamensbelegg:** Sjanger T1, 100 % (lover) + Amdahl-regning. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **lov-identifikasjon**: koble hver «lov» til sin størrelse (Moore=transistorantall, Dennard=effekttetthet, Pollack=√areal, Amdahl=speedup-tak, power=`½CV²f`); 2) **«not true»-angrep**: sjekk hvert alternativ mot forvekslingsparet, la det gale stå igjen; 3) **Amdahl-regning**: sett inn i `1/(s+(1−s)/N)`, kryssjekk mot taket `1/s`. Sensor-kommentert case med margnotat om hvor distraktorene bytter lov og hvorfor `1/s` alene er feil. 12–16 oppgaver (M1/M2/M3) som roterer alle lovene + Amdahl + negativ-scoring-strategi.
- **Begrepskontrakt:** Alle fire lover + power-ligning skilt fra hverandre; Amdahl-nevner vs. tak.
- **Oppgavesjangre:** M1/M2/M3. Mønstereksempel (M2): «Which of the following statements is NOT correct?» over de fire lovene — den gale bytter Pollack og Amdahl.
- **Typiske feil:** Forveksle lovene (§#1); regne Amdahl med `1/s`; gjette på «not true» i tvil (negativ scoring); tro power-ligningen er lineær i V.
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Kvantitative prinsipper og lover)
1. Prøve 1.A (20 min): Moore/Dennard/power wall/dark silicon (T1, M1/M2).
2. Prøve 1.B (20 min): Pollack/yield/TDP/Flynn (T1, M1/M2).
3. Prøve 1.C (25 min): Amdahl-regning + power-ligning-gjenkjenning (T1, M3).
4. Prøve 1.D (25 min): Blandet «not true» over alle fire lover + Amdahl (T1, M1/M2/M3).

---

### Del 2 — Minnehierarki og cache *(H&P kap. 2 + App. B · T2 · 100 %)*

> Del 2 rommer fagets viktigste *regne*-oppgave (flernivå-AMAT) og en tett klynge
> forvekslingspar: de fire Cs (med «concurrent»-fella), VIPT-adressedelingen og TLB.
> Cache-optimaliseringene er «not true»-materiale. Kapittel 2.3 er regnemodulen, 2.6 er
> drillkapitlet.

#### Kapittel 2.1: Lokalitet, minnehierarki og enkeltnivå-AMAT

- **id:** `tdt4260-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-0-3` · **kapitteltype:** teori
- **description:** Hvorfor minnehierarkiet finnes (temporal og romlig lokalitet), oppbygningen L1/L2/L3/DRAM, og enkeltnivå-AMAT som grunnlaget for flernivå-utregningen.
- **Eksamensbelegg:** Sjanger T2/M1, 100 % (lokalitet + AMAT-grunnlag). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **temporal lokalitet** (nylig aksesserte data brukes snart igjen) og **romlig lokalitet** (nærliggende adresser brukes snart). `definition` **minnehierarki**: raskt/lite nær CPU, tregt/stort lengre unna; hvert nivå cacher nivået under. `theorem` **enkeltnivå-AMAT**: `AMAT = HitTime + MissRate·MissPenalty` — grunnmuren for kap. 2.3. `text` lese-/skrivepolicyer kort (write-through vs. write-back) som «bør kjenne til». **Notasjons- og begrepsliste:** temporal/romlig lokalitet, hit/miss, HitTime, MissRate, MissPenalty, L1/L2/L3/DRAM.
- **Begrepskontrakt:** Skille **temporal** vs. **romlig** lokalitet; skille **hit-tid** fra **miss-penalty**.
- **Oppgavesjangre:** M1/M3. Mønstereksempel (M3): «L1 hit time 1 ns, miss rate 5 %, miss penalty 20 ns. AMAT?» (`1 + 0,05·20 = 2 ns`.)
- **Typiske feil:** Blande temporal og romlig lokalitet; legge sammen aksesstider flatt uten å vekte med miss-rate; blande hit-tid og miss-penalty.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.2: De fire Cs og cache-organisering

- **id:** `tdt4260-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-2-1` · **kapitteltype:** teori
- **description:** De fire Cs (compulsory/capacity/conflict/coherence) med «concurrent»-fella, associativitet (direct-mapped/set-associative/fully associative), og 2:1-tommelfingerregelen.
- **Eksamensbelegg:** Sjanger T2/M2, 100 % — «Which is NOT one of the four Cs?» er en klassisk felle (svar: **concurrent**). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **de fire Cs**: **compulsory** (første aksess, uunngåelig), **capacity** (cachen for liten), **conflict** (sett-kollisjon i begrenset associativitet), **coherence** (invalidering fra andre prosessorer i et multiprosessorsystem). `warning`/`text` **«concurrent» er IKKE en av dem** — den faste distraktoren. `definition` **associativitet**: direct-mapped (1-veis), n-veis set-associative, fully associative. `theorem` **2:1-regel**: en direct-mapped cache av størrelse N har ~samme miss-rate som en 2-veis cache av størrelse N/2. **Notasjons- og begrepsliste:** de fire Cs, associativitet, sett, vei, 2:1-regelen; forvekslingsparet «coherence vs. concurrent».
- **Begrepskontrakt:** De fire Cs skilt fra hverandre og fra distraktoren **concurrent**; merk at eldre H&P bruker **tre** Cs (uten coherence) — i multiprosessor legges coherence til.
- **Oppgavesjangre:** M2. Mønstereksempel (M2): «Which of the following is NOT one of the four Cs of cache misses?» (a) compulsory (b) capacity (c) conflict (d) concurrent → **d**.
- **Typiske feil:** Velge «concurrent» som en ekte C (§#2); blande conflict og capacity; glemme at coherence-miss krever multiprosessor; tro fully associative har conflict-miss (den har det ikke).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 2.3: REGNEMODUL — flernivå-AMAT

- **id:** `tdt4260-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4260-2-2` · **kapitteltype:** teori/regnemodul
- **description:** Flernivå gjennomsnittlig aksesstid (AMAT) bygget rekursivt: et miss i L1 betaler L2s hit-tid, et miss i L2 betaler L3s, osv. — fagets viktigste regneoppgave.
- **Eksamensbelegg:** Sjanger T2/M3, 67 % (2016 sammenlign, 2017 numerisk). Prioritet: **perfekt** — automatiser nøstingen.
- **Innholdskontrakt:** `theorem` **flernivå-AMAT (regnemodul)**: `AMAT = t_L1 + m_L1·(t_L2 + m_L2·(t_L3 + m_L3·t_mem))` der `t` = aksesstid/hit-tid per nivå og `m` = (lokal) miss-rate. Gjennomregnet eksempel (nyskrevne tall): `t_L1=1, m_L1=0,10; t_L2=8, m_L2=0,20; t_mem=100` → `AMAT = 1 + 0,10·(8 + 0,20·100) = 1 + 0,10·28 = 3,8` sykler. `text` **lokal vs. global miss-rate** (kort presisering: global = miss forbi dette nivået relativt til alle aksesser). **Notasjons- og begrepsliste:** rekursiv AMAT-formel, `t_Lk`, `m_Lk`, `t_mem`, lokal vs. global miss-rate.
- **Begrepskontrakt:** Skille **rekursiv vekting** (riktig) fra **flat summering** (feil); skille **lokal** vs. **global** miss-rate.
- **Oppgavesjangre:** M3. Mønstereksempel (M3): «Given L1 (1 cyc, 8 % miss), L2 (10 cyc, 25 % miss), memory (120 cyc), compute AMAT.» (`1 + 0,08·(10 + 0,25·120) = 1 + 0,08·40 = 4,2`.)
- **Typiske feil:** Legge sammen aksesstider flatt i stedet for å vekte rekursivt med miss-ratene (§#5); blande lokal og global miss-rate; glemme at L1-hit-tid alltid betales.
- **Quiz: 16 · Flashcards: 12**

#### Kapittel 2.4: VIPT-cache, TLB og virtuelt minne

- **id:** `tdt4260-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-2-2` · **kapitteltype:** teori
- **description:** Virtually indexed, physically tagged (VIPT) cache: adressedelingen tag|index|offset, hvordan indeks leser settet parallelt mens TLB oversetter tag, og TLB/virtuelt-minne-grunnlaget — et fast essay- og flervalgstema.
- **Eksamensbelegg:** Sjanger T2/M1 + E1, 100 % (2016 MCQ + full essay om aksess, 2017 MCQ). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **VIPT**: cachen indekseres med virtuell adresse (index+offset ligger i sidefeltet under sidestørrelsen) mens tag sammenlignes med **fysisk** adresse. `theorem` **VIPT-aksess (konsist-essay-mal, E1)**: adressen deles i `tag | index | offset`; **index leser settet parallelt mens TLB oversetter den virtuelle siden til fysisk tag**; deretter sammenlignes fysisk tag med de lagrede tag-ene → hit/miss. `definition` **TLB**: cache for side→ramme-oversettelser (virtuell→fysisk). `text` **virtuelt minne/paging** kort. **Notasjons- og begrepsliste:** `tag|index|offset`, VIPT, TLB, side, ramme, virtuell/fysisk adresse.
- **Begrepskontrakt:** Skille **virtually indexed** (index fra virtuell adr) fra **physically tagged** (tag fra fysisk adr); skille **TLB** (oversettelses-cache) fra **datacache**.
- **Oppgavesjangre:** M1 + E1. Mønstereksempel (E1): «Concisely describe a conventional access to a direct-mapped VIPT cache.» (tag/index/offset; TLB oversetter tag parallelt med indeksering.)
- **Typiske feil:** Tro TLB-oversettelse skjer *før* indeksering (den skjer parallelt i VIPT); blande tag og index; plassere sidetabellen i cachen; blande virtuell og fysisk adresse.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.5: Cache-optimaliseringer

- **id:** `tdt4260-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-2-3` · **kapitteltype:** teori
- **description:** H&Ps klassiske cache-optimaliseringer i kompakt form — større blokker, høyere associativitet, flernivå, ikke-blokkerende cache, kritisk ord først, sammenslående skrivebuffer, kompilatoroptimalisering — med hva hver reduserer (hit-tid/miss-rate/miss-penalty) og deres «not true»-feller.
- **Eksamensbelegg:** Sjanger T2/M1+M2, 100 % (som del av minneblokken). Prioritet: **kunne** (gjenkjenning + «not true»).
- **Innholdskontrakt:** `definition`-blokker per optimalisering med **hva den reduserer**: større blokk (↓compulsory, men ↑miss-penalty og evt. conflict); høyere associativitet (↓conflict, ↑hit-tid); ikke-blokkerende cache / hit-under-miss (↓effektiv miss-penalty); kritisk ord først (↓miss-penalty); sammenslående skrivebuffer; way-prediction (↓hit-tid); kompilatoroptimalisering (loop interchange/blocking, ↓miss-rate). `warning` faste «not true»-feller (f.eks. «større blokk reduserer alltid miss-rate» — ikke ved for få blokker). **Notasjons- og begrepsliste:** blokkstørrelse, associativitet, non-blocking, critical word first, way-prediction, blocking/loop interchange; akse hit-tid/miss-rate/miss-penalty.
- **Begrepskontrakt:** Koble hver optimalisering til **hvilken** av hit-tid/miss-rate/miss-penalty den treffer (den vanlige fella er å feilkoble).
- **Oppgavesjangre:** M1/M2. Mønstereksempel (M2): «Which statement about increasing cache block size is NOT true?» — distraktoren påstår at det alltid senker miss-rate.
- **Typiske feil:** Tro større blokk alltid senker miss-rate; tro høyere associativitet er gratis (koster hit-tid); blande hvilken metrikk hver optimalisering treffer.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.6: DRILL — AMAT, cache-begreper og «not true»

- **id:** `tdt4260-2-6` · **number:** 2.6 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4260-2-5` · **kapitteltype:** drill
- **description:** Full drill på T2: rask feilfri flernivå-AMAT, de fire Cs uten «concurrent»-fella, VIPT-adressedeling og cache-optimaliseringenes «not true»-varianter.
- **Eksamensbelegg:** Sjanger T2, 100 % (+ AMAT-regning). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **AMAT**: bygg rekursivt innenfra, vekt med miss-rater; 2) **fire Cs**: identifiser hver, forkast «concurrent»; 3) **VIPT**: del i tag/index/offset, husk parallell TLB-oversettelse; 4) **optimaliseringer**: koble til hit-tid/miss-rate/miss-penalty; 5) **«not true»-strategi**: eliminer de tre sanne. Sensor-kommentert case med margnotat om AMAT-nøstingen og «concurrent»-fella. 12–16 oppgaver (M1/M2/M3) + negativ-scoring-strategi.
- **Begrepskontrakt:** Alle T2-forvekslingsparene under press.
- **Oppgavesjangre:** M1/M2/M3. Mønstereksempel (M3): flernivå-AMAT med tre nivåer + memory.
- **Typiske feil:** Flat AMAT-summering (§#5); «concurrent» som ekte C (§#2); TLB før indeksering; gjette på «not true».
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (Minnehierarki og cache)
1. Prøve 2.A (25 min): Lokalitet + de fire Cs + associativitet (T2, M1/M2).
2. Prøve 2.B (25 min): Flernivå-AMAT-regning (T2, M3).
3. Prøve 2.C (25 min): VIPT-adressedeling + TLB + konsist-essay om VIPT-aksess (T2, M1/E1).
4. Prøve 2.D (25 min): Cache-optimaliseringer «not true» + blandet minne (T2, M1/M2).

---

### Del 3 — Instruksjonsnivå-parallellisme (ILP) *(H&P kap. 3 · T3 · 100 %)*

> Del 3 rommer det tyngste essaytemaet (Tomasulo m/ reorder buffer) og de mest utbredte
> «not true»-fellene (hazard-typer, WAR/WAW, VLIW). Branch prediction i dybden er tynt i
> arkivet men klassisk H&P — merket «forvent fremover». Kapittel 3.6 er drillkapitlet.

#### Kapittel 3.1: Hazards og avhengigheter

- **id:** `tdt4260-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-0-3` · **kapitteltype:** teori
- **description:** De tre hazard-typene (structural/data/control), skillet mellom sann dataavhengighet (RAW) og navneavhengigheter (WAR/WAW), og hvordan register renaming fjerner navneavhengighetene — kjernen i alle ILP-«not true»-feller.
- **Eksamensbelegg:** Sjanger T3/M2, 100 % — WAR-feller går igjen i alle tre settene, «which is NOT a hazard?» (svar: **execution hazard**). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **hazard-typer**: **structural** (ressurskonflikt), **data** (avhengighet mellom instruksjoner), **control** (grener). `definition` **avhengigheter**: **RAW** (read-after-write) = **sann** dataavhengighet (kan ikke fjernes); **WAR** (write-after-read) og **WAW** (write-after-write) = **navneavhengigheter** (kan fjernes med register renaming). `theorem`/`text` **register renaming**: gir hver skriving et nytt fysisk register → WAR/WAW forsvinner; RAW består. `warning` **«execution hazard» finnes ikke**; **WAR kan ikke oppstå i en enkel in-order pipeline**. **Notasjons- og begrepsliste:** structural/data/control hazard, RAW/WAR/WAW, sann vs. navneavhengighet, register renaming.
- **Begrepskontrakt:** Skille **RAW (sann, uunngåelig)** fra **WAR/WAW (navn, fjernbar)**; skille de tre ekte hazard-typene fra distraktoren **execution hazard**.
- **Oppgavesjangre:** M2. Mønstereksempel (M2): «Which of the following is NOT a type of pipeline hazard?» (a) structural (b) data (c) control (d) execution → **d**.
- **Typiske feil:** Tro «execution hazard» er ekte (§#3); tro RAW kan fjernes med renaming; tro WAR oppstår i in-order pipeline; blande WAR og WAW.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.2: Tomasulo og dynamisk skedulering

- **id:** `tdt4260-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-3-1` · **kapitteltype:** teori
- **description:** Tomasulos algoritme: reservasjonsstasjoner, register renaming i maskinvare, felles databuss (CDB) og ute-av-rekkefølge-utførelse (out-of-order) som skjuler latens uten kompilatorhjelp.
- **Eksamensbelegg:** Sjanger T3/M1 + E2, 67 % (MCQ 2016 + 10-poengs essay 2017). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **reservasjonsstasjon**: buffer foran funksjonsenhet som holder operander/tag til de er klare. `theorem`/`text` **Tomasulo-mekanismen**: register renaming via stasjons-tag fjerner WAR/WAW; instruksjoner utføres når operandene er klare (ute-av-rekkefølge); resultat kringkastes på **felles databuss (CDB)**. `text` intuisjon: dynamisk skedulering håndterer avhengigheter i maskinvare, uavhengig av kompilatoren. **Notasjons- og begrepsliste:** reservasjonsstasjon, tag, CDB, out-of-order, dynamisk skedulering.
- **Begrepskontrakt:** Skille **dynamisk skedulering (maskinvare, Tomasulo)** fra **statisk (kompilator, VLIW)**; skille **out-of-order utførelse** fra out-of-order *commit* (krever ROB, kap. 3.3).
- **Oppgavesjangre:** M1 + E2. Mønstereksempel (M1): «What does register renaming in Tomasulo's algorithm eliminate?» (WAR og WAW — navneavhengighetene.)
- **Typiske feil:** Tro Tomasulo fjerner RAW; blande dynamisk (HW) og statisk (kompilator) skedulering; tro Tomasulo alene gir presise avbrudd (det trengs ROB).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.3: Spekulasjon og reorder buffer

- **id:** `tdt4260-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4260-3-2` · **kapitteltype:** teori
- **description:** Hvordan reorder buffer (ROB) legger til spekulasjon og in-order commit på Tomasulo — de fire stegene Issue / Execution / Write Results / Commit — fagets faste 10-poengs essay.
- **Eksamensbelegg:** Sjanger T3/E2, 33–67 % (10-poengs essay 2017: «Tomasulo m/ reorder buffer»). Prioritet: **perfekt** (essay-favoritt).
- **Innholdskontrakt:** `definition` **reorder buffer (ROB)**: holder resultater til instruksjonen kan **commit-e i programrekkefølge** → gir presise avbrudd og muliggjør spekulasjon. `theorem` **de fire stegene (konsist-essay-mal, E2)**: **Issue** (hent instruksjon, alloker stasjon+ROB-plass, renam), **Execution** (utfør når operander klare, ute-av-rekkefølge), **Write Results** (kringkast på CDB, skriv til ROB), **Commit** (skriv til register/minne **i rekkefølge** når instruksjonen er øverst i ROB og ikke spekulativ). `text` **spekulasjon**: utfør forbi ubesluttede grener; kast (squash) ved feilspådd gren. **Notasjons- og begrepsliste:** ROB, commit, spekulasjon, squash, de fire stegene.
- **Begrepskontrakt:** Skille **out-of-order execution** fra **in-order commit**; skille **spekulasjon** (utfør forbi gren) fra ren out-of-order.
- **Oppgavesjangre:** E2 + M1. Mønstereksempel (E2): «Describe Tomasulo's algorithm with a reorder buffer and its purpose. Mention the four steps.» (Issue/Execution/Write Results/Commit + presise avbrudd/spekulasjon.)
- **Typiske feil:** Utelate ett av de fire stegene; blande execution- og commit-rekkefølge; tro ROB gjør utførelsen in-order (bare commit); glemme spekulasjonens formål.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 3.4: Branch prediction *(forvent fremover)*

- **id:** `tdt4260-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-3-3` · **kapitteltype:** teori
- **description:** Grenprediksjon i dybden — 1-bit/2-bit prediktorer, korrelerende og tournament-prediktorer, BTB — klassisk H&P-kap.-3-stoff som er tynt i arkivet men lett kan komme. **Merket «forvent fremover».**
- **Eksamensbelegg:** Sjanger T3/M1, arkivet viser mest branch *divergence* (GPU) og hazard-begreper — dyp branch prediction er svakt belagt **(verifiser)**, men klassisk pensum. Prioritet: **kunne** (ta med, prioritér etter kjernen).
- **Innholdskontrakt:** `definition` **2-bit prediktor**: fire tilstander (mettende teller) → tåler ett feilhopp uten å snu. `definition` **korrelerende (m,n)-prediktor**: bruker historikk fra andre grener. `definition` **tournament-prediktor**: velger dynamisk mellom lokal og global prediktor. `definition` **BTB** (*branch target buffer*): cacher grenmål for å hente uten stall. `text` kobling til spekulasjon (kap. 3.3). **Notasjons- og begrepsliste:** 1-bit/2-bit prediktor, mettende teller, korrelerende, tournament, BTB, misprediction penalty.
- **Begrepskontrakt:** Skille **2-bit** (mettende, tåler ett feilhopp) fra **1-bit**; skille **BTB** (mål) fra **prediktor** (retning); skille branch *prediction* (ILP, CPU) fra branch *divergence* (DLP, GPU — kap. 4.2).
- **Oppgavesjangre:** M1. Mønstereksempel (M1): «Why does a 2-bit predictor outperform a 1-bit predictor on a loop branch?» (Den tåler ett avvikende utfall uten å bytte prediksjon.)
- **Typiske feil:** Blande 1-bit og 2-bit oppførsel; blande BTB (mål) og retningsprediktor; forveksle branch prediction (CPU) og branch divergence (GPU).
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 3.5: VLIW og loop unrolling

- **id:** `tdt4260-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-3-1` · **kapitteltype:** teori
- **description:** Kompilatorbasert ILP: VLIW (very long instruction word) der kompilatoren pakker uavhengige operasjoner, og loop unrolling som eksponerer ILP — pluss de faste «not true»-fellene om binærkompatibilitet.
- **Eksamensbelegg:** Sjanger T3/M2, 67 % — ofte «not true»-varianter. Prioritet: **kunne** (høyfrekvent «not true»).
- **Innholdskontrakt:** `definition` **VLIW**: kompilatoren pakker flere uavhengige operasjoner i ett langt instruksjonsord; enhetene kjøres «in lock step»; hazard-håndtering **flyttes til kompilatoren**. `warning` **VLIW-feller**: VLIW **forbedrer IKKE** binærkompatibilitet (den *forverrer* den — koden er bundet til enhetsbredden); den *reduserer* maskinvarens skeduleringslogikk. `definition` **loop unrolling**: rull ut løkkekroppen for å eksponere mer uavhengig ILP og redusere løkke-overhead (kompilatorteknikk, øker kodestørrelse/registerpress). **Notasjons- og begrepsliste:** VLIW, in lock step, statisk skedulering, binærkompatibilitet, loop unrolling, registerpress.
- **Begrepskontrakt:** Skille **VLIW (statisk, kompilator)** fra **superskalar/Tomasulo (dynamisk, maskinvare)**; VLIW **forverrer** binærkompatibilitet (den vanligste fella).
- **Oppgavesjangre:** M2. Mønstereksempel (M2): «Which statement about VLIW is NOT true?» — distraktoren påstår at VLIW forbedrer binærkompatibilitet (§#4).
- **Typiske feil:** Tro VLIW bedrer binærkompatibilitet (§#4); tro VLIW gjør hazard-håndtering i maskinvare (det er kompilatoren); tro loop unrolling er gratis (koster kode/registre).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.6: DRILL — ILP: hazards, Tomasulo og VLIW «not true»

- **id:** `tdt4260-3-6` · **number:** 3.6 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4260-3-5` · **kapitteltype:** drill
- **description:** Full drill på T3: klassifiser hazards/avhengigheter, forklar Tomasulo m/ ROB tett (essay-mal), og eliminer VLIW-/hazard-«not true»-feller under negativ-scoring-press.
- **Eksamensbelegg:** Sjanger T3, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **avhengighet/hazard**: klassifiser (RAW sann, WAR/WAW navn; structural/data/control); 2) **Tomasulo m/ ROB**: gjengi de fire stegene Issue/Execution/Write/Commit; 3) **VLIW «not true»**: sjekk binærkompatibilitet, kompilatoransvar, lock step; 4) **negativ-scoring-strategi** på tvil. Sensor-kommentert case med margnotat om WAR-fella og essay-stikkordene. 12–16 oppgaver (M1/M2 + én E2-mal).
- **Begrepskontrakt:** Alle T3-forvekslingspar under press.
- **Oppgavesjangre:** M1/M2 + E2. Mønstereksempel (M2): «Which is NOT true about data dependencies?» — WAR/WAW-fella.
- **Typiske feil:** «execution hazard» (§#3); VLIW-binærkompatibilitet (§#4); utelate essay-steg; gjette på «not true».
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (ILP)
1. Prøve 3.A (25 min): Hazards + RAW/WAR/WAW + «not a hazard» (T3, M2).
2. Prøve 3.B (25 min): Tomasulo m/ ROB — fire steg (T3, M1/E2).
3. Prøve 3.C (20 min): VLIW/loop unrolling «not true» (T3, M2).
4. Prøve 3.D (20 min): Branch prediction + blandet ILP (T3, M1/M2).

---

### Del 4 — Dataparallellisme (DLP) *(H&P kap. 4 · T4 · 100 %)*

> Del 4 rommer det viktigste forvekslingsparet i faget (SIMD vs. vektor) og to faste
> gjenkjenningstemaer: GPU-latensskjuling (via tråder, ikke cacher) og roofline-modellens
> formål. Kapittel 4.4 er drillkapitlet.

#### Kapittel 4.1: SIMD, vektor, gather-scatter og strip mining

- **id:** `tdt4260-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-1-2` · **kapitteltype:** teori
- **description:** Forskjellen mellom vektorprosessorer (fleksibelt operandantall, mask-register, sofistikerte adresseringsmodi, chaining) og SIMD-utvidelser (SSE/AVX — enklere maskinvare, mindre fleksible), pluss gather-scatter og strip mining.
- **Eksamensbelegg:** Sjanger T4/M1+E1, 100 % — «forskjell SIMD vs. vektor» og Flynn-klassifisering av MMX/SSE er faste. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **vektorprosessor**: én instruksjon opererer på en hel vektor; **fleksibelt operandantall (vektorlengde)**, **mask-register** (betinget), **scatter-gather**-adressering, **chaining** (resultat fra én vektoroperasjon mates rett inn i neste). `definition` **SIMD-utvidelser** (SSE/AVX/MMX): fast bredde, **enklere i maskinvare**, mindre fleksible; Flynn-klasse **SIMD**. `definition` **gather-scatter**: indeksert vektoraksess (samle spredte elementer / spre til spredte adresser). `definition` **strip mining**: dele en løkke i biter på maks vektorlengde. **Notasjons- og begrepsliste:** vektorlengde, mask-register, chaining, gather-scatter, strip mining, SIMD-utvidelse.
- **Begrepskontrakt:** Skarpt skille **vektor (fleksibel, mask, chaining, gather-scatter)** vs. **SIMD-utvidelse (fast, enkel HW)**; «threading» er **ikke** en vektorteknikk.
- **Oppgavesjangre:** M1 + E1. Mønstereksempel (M1): «Which is a feature of vector processors but NOT of packed-SIMD extensions?» (mask-register / fleksibel vektorlengde / chaining.)
- **Typiske feil:** Blande vektor og SIMD-utvidelse (§#10); kalle «threading» en vektorteknikk; feilklassifisere SSE i Flynn; tro SIMD-utvidelser har mask/chaining som vektor.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: GPU-arkitektur og latensskjuling

- **id:** `tdt4260-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-4-1` · **kapitteltype:** teori
- **description:** Hvordan GPU-er skjuler minnelatens ved å bytte mellom **mange tråder** (ikke store cacher), SIMT-utførelsesmodellen, og branch divergence når tråder i en warp tar ulike grener.
- **Eksamensbelegg:** Sjanger T4/M1, 67 % (2016 + 2017). Prioritet: **kunne** (fast gjenkjenning).
- **Innholdskontrakt:** `theorem`/`text` **latensskjuling**: GPU-er skjuler minnelatens ved å ha **mange tråder klare** og bytte til en annen når én venter — **ikke** ved store cacher. `definition` **SIMT** (*single instruction, multiple threads*): en warp/wavefront kjører samme instruksjon på mange tråder. `definition` **branch divergence**: når tråder i samme warp tar ulike grener, serialiseres grenene → ytelsestap. `text` kobling til DLP og gather-scatter. **Notasjons- og begrepsliste:** tråd, warp/wavefront, SIMT, latensskjuling, branch divergence, occupancy.
- **Begrepskontrakt:** Skille **latensskjuling via tråder (GPU)** fra **latensreduksjon via cacher (CPU)**; skille **branch divergence (GPU, DLP)** fra **branch prediction (CPU, ILP — kap. 3.4)**.
- **Oppgavesjangre:** M1. Mønstereksempel (M1): «How does a GPU primarily hide memory latency?» (Ved å bytte mellom mange tråder — §#11.)
- **Typiske feil:** Tro GPU skjuler latens med store cacher (§#11); blande branch divergence og branch prediction; tro divergens er gratis.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 4.3: Roofline-modellen

- **id:** `tdt4260-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-4-1` · **kapitteltype:** teori
- **description:** Roofline-modellen: oppnåelig ytelse = min(topp-FLOPS, aritmetisk intensitet × topp-båndbredde), hva den brukes til (finne om en kjerne er beregnings- eller båndbreddebundet), og hva den IKKE viser.
- **Eksamensbelegg:** Sjanger T4/M1+M3, 67 % (roofline-formål er fast gjenkjenning). Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **roofline**: `oppnåelig ytelse = min(peak FLOPS, aritmetisk intensitet × peak båndbredde)`. `definition` **aritmetisk intensitet (AI)**: FLOP per byte flyttet fra minne. `text` **tolkning**: lav AI → båndbreddebundet (skrå «tak»); høy AI → beregningsbundet (flatt «tak»). `warning` roofline viser **maks ytelse gitt AI** — ikke effekt, ikke båndbredde alene (§#12). **Notasjons- og begrepsliste:** roofline, peak FLOPS, peak båndbredde, aritmetisk intensitet, compute-bound/memory-bound.
- **Begrepskontrakt:** Skille **beregningsbundet** (flatt tak) fra **båndbreddebundet** (skrått tak); roofline ≠ effektmodell.
- **Oppgavesjangre:** M1/M3. Mønstereksempel (M1): «What does the roofline model show?» (Maks oppnåelig ytelse som funksjon av aritmetisk intensitet — §#12.)
- **Typiske feil:** Tro roofline viser effekt eller ren båndbredde (§#12); blande compute-bound og memory-bound; tro høyere AI alltid gir høyere absolutt ytelse.
- **Quiz: 14 · Flashcards: 12**

#### Kapittel 4.4: DRILL — DLP: SIMD/vektor, GPU og roofline «not true»

- **id:** `tdt4260-4-4` · **number:** 4.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4260-4-3` · **kapitteltype:** drill
- **description:** Full drill på T4: skille SIMD fra vektor, GPU-latensskjuling og roofline-formålet under «not true»-press og negativ scoring.
- **Eksamensbelegg:** Sjanger T4, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **SIMD vs. vektor**: sjekk mask/chaining/gather-scatter/fleksibel lengde (vektor) mot fast bredde (SIMD); 2) **GPU**: latensskjuling via tråder, divergens ved ulike grener; 3) **roofline**: min-formelen, AI-tolkning, hva den ikke viser; 4) negativ-scoring-strategi. Sensor-kommentert case med margnotat om SIMD/vektor-fella og roofline-misforståelsen. 10–14 oppgaver (M1/M2/M3).
- **Begrepskontrakt:** Alle T4-forvekslingspar under press.
- **Oppgavesjangre:** M1/M2/M3. Mønstereksempel (M2): «Which statement about SIMD extensions vs. vector processors is NOT true?»
- **Typiske feil:** SIMD/vektor-blanding (§#10); GPU-cache-mytе (§#11); roofline-formål (§#12); gjette på «not true».
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (DLP)
1. Prøve 4.A (25 min): SIMD vs. vektor + gather-scatter + strip mining (T4, M1/E1).
2. Prøve 4.B (20 min): GPU-latensskjuling + branch divergence (T4, M1).
3. Prøve 4.C (20 min): Roofline-formål + AI (T4, M1/M3).
4. Prøve 4.D (20 min): Blandet DLP «not true» (T4, M2).

---

### Del 5 — Trådparallellisme og koherens (TLP) *(H&P kap. 5 · T5 · 100 %)*

> Del 5 rommer fagets vanskeligste presisjonskrav: **MSI/MESI med eier + clean/dirty per
> bokstav** (ikke bare akronymet — sensorkrav), skillet **coherence vs. consistency**, og
> **snooping vs. directory**. Match-oppgaven (MSI-FSM, ingen minus) er gratispoeng.
> Kapittel 5.3 har MESI-presisjons-warningen; 5.6 er drillkapitlet + match-trening.

#### Kapittel 5.1: Multiprosessorer, Amdahl for multicore og synkronisering

- **id:** `tdt4260-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-1-4` · **kapitteltype:** teori
- **description:** Delt-minne-multiprosessorer, hvorfor Amdahls lov (kap. 1.4) begrenser multicore-speedup, og grunnleggende synkronisering (locks, race conditions).
- **Eksamensbelegg:** Sjanger T5/M1+M3, 100 % (Amdahl-speedup dukker opp her igjen; locks/race). Prioritet: **perfekt** (Amdahl-multicore), **kunne** (locks/race).
- **Innholdskontrakt:** `definition` **delt-minne-multiprosessor**: flere kjerner mot felles adresserom; **UMA vs. NUMA** (peker fram til 5.5). `theorem` **Amdahl for multicore** (gjenbruk fra 1.4): `Speedup = 1/(s + (1−s)/N)` — begrunner hvorfor flere kjerner gir avtakende avkastning. `definition` **race condition** og **lock/mutex**: gjensidig utelukkelse ved deling. **Notasjons- og begrepsliste:** delt minne, UMA/NUMA, Amdahl-multicore, race condition, lock/mutex, synkronisering.
- **Begrepskontrakt:** Skille **UMA** fra **NUMA**; skille **race condition** (problem) fra **lock** (løsning).
- **Oppgavesjangre:** M1/M3. Mønstereksempel (M3): «With 4 % sequential fraction, what is the speedup on 32 cores?» (`1/(0,04 + 0,96/32) ≈ 14,3×`.)
- **Typiske feil:** Tro multicore gir lineær speedup (Amdahl begrenser); blande UMA/NUMA; tro locks fjerner behovet for koherens.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 5.2: Cache coherence — snooping, directory og MSI

- **id:** `tdt4260-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4260-5-1` · **kapitteltype:** teori
- **description:** Hvorfor hurtigbufferkoherens (cache coherence) trengs, snooping vs. directory-baserte protokoller (og skaleringen), og MSI-protokollens tre tilstander med overganger — grunnlaget for match-oppgaven.
- **Eksamensbelegg:** Sjanger T5/M1+M2+D, 100 % (coherency-MCQ begge lærere; MSI-FSM-match 2017). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **cache coherence**: hva som skjer med **samme** adresse cachet i flere kjerner (alle skal se en konsistent verdi). `definition` **snooping**: hver cache lytter på en delt buss/kringkasting → enkelt, men **skalerer dårlig** (broadcast). `definition` **directory**: en katalog holder rede på hvem som har blokken → **skalerer bedre**; kan implementeres over en buss. `theorem` **MSI-protokoll**: **Modified** (skitten, enerett), **Shared** (ren, kan deles), **Invalid** (ugyldig) — med overganger på CPU read/write og Bus read/write miss. **Notasjons- og begrepsliste:** cache coherence, snooping, directory, broadcast, MSI-tilstandene, bus read/write miss.
- **Begrepskontrakt:** Skille **snooping (broadcast, skalerer dårlig)** fra **directory (skalerer bedre)** — §#9-fella «snooping skalerer bedre» er feil. MSI-tilstandene skilt (Modified = eneste kopi + skitten).
- **Oppgavesjangre:** M1/M2/D. Mønstereksempel (M2): «Which statement about snooping vs. directory coherence is NOT true?» — distraktoren: «snooping scales better than directory» (§#9).
- **Typiske feil:** Tro snooping skalerer bedre enn directory (§#9); tro directory ikke kan ligge på en buss; blande MSI-overgangene; tro Shared kan være skitten.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: MESI — eierskap og clean/dirty per bokstav

- **id:** `tdt4260-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4260-5-2` · **kapitteltype:** teori
- **description:** MESI-protokollen der Exclusive legges til MSI, og — dette er sensorkravet — hver bokstav forklart med **eierskap + clean/dirty**, ikke bare akronymet.
- **Eksamensbelegg:** Sjanger T5/E1+M1, 100 % (MESI-essay 2016; coherency-MCQ). **Sensorkrav (§4 i analysen): eier-status + clean/dirty per tilstand — «ett ord per bokstav gir ikke full score».** Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **MESI (konsist-essay-mal, E1) — per bokstav med eier + clean/dirty:** **Modified** = eneste gyldige kopi, **skitten** (avviker fra minnet, må skrives tilbake); **Exclusive** = eneste kopi, **ren** (lik minnet, kan skrives uten buss-trafikk); **Shared** = flere kopier, **rene**; **Invalid** = ugyldig, ingen data. `text` hvorfor Exclusive er en gevinst (stille oppgradering til Modified uten kringkasting). `warning` **MESI-presisjons-warning (egen blokk):** eksamen krever **eierskap + clean/dirty per bokstav** + typisk overgang; å liste bare tilstandsnavnene gir ikke full score. **Notasjons- og begrepsliste:** MESI-tilstandene, eierskap/enerett, clean/dirty, write-back, silent upgrade.
- **Begrepskontrakt:** Skarpt skille **Modified (enerett, dirty)** vs. **Exclusive (enerett, clean)** vs. **Shared (delt, clean)** vs. **Invalid (ugyldig)** — den vanligste MESI-fella er å blande Modified og Exclusive.
- **Oppgavesjangre:** E1 + M1. Mønstereksempel (E1): «Explain each of the four MESI states (owner status + clean/dirty).» — full modellsvar-mal.
- **Typiske feil:** Pugge MESI som akronym uten eierskap/clean-dirty (§#7); blande Modified (dirty) og Exclusive (clean); tro Shared kan være dirty; utelate typisk overgang.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.4: Coherence vs. consistency

- **id:** `tdt4260-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-5-3` · **kapitteltype:** teori
- **description:** Det harde forvekslingsparet: koherens (hva skjer med samme adresse i flere cacher) vs. konsistens (hvilken rekkefølge minneoperasjoner på tvers av adresser synes i), og hva sequential consistency krever.
- **Eksamensbelegg:** Sjanger T5/M2, 100 % (fast «not true»-materiale). Prioritet: **perfekt** (skarpt skille).
- **Innholdskontrakt:** `definition` **coherence**: gjelder **samme** minneadresse cachet flere steder — alle kjerner ser en konsistent verdi/rekkefølge for **den** adressen. `definition` **(memory) consistency**: gjelder **rekkefølgen** minneoperasjoner på **tvers av** adresser synes i for andre kjerner. `definition` **sequential consistency**: resultatet er som om alle operasjoner utføres i en global rekkefølge som respekterer hver kjernes programrekkefølge. `text` hvorfor svakere konsistensmodeller gir ytelse. **Notasjons- og begrepsliste:** coherence, consistency, sequential consistency, programrekkefølge, minnemodell.
- **Begrepskontrakt:** Skarpt skille **coherence (én adresse, flere cacher)** vs. **consistency (flere adresser, rekkefølge)** — §#8-fella er å blande dem.
- **Oppgavesjangre:** M2. Mønstereksempel (M2): «Which statement about coherence and consistency is NOT true?» — distraktoren bytter om definisjonene (§#8).
- **Typiske feil:** Blande coherence og consistency (§#8); tro coherence garanterer rekkefølge på tvers av adresser; tro sequential consistency er standard/gratis.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.5: NUMA, false sharing og multithreading

- **id:** `tdt4260-5-5` · **number:** 5.5 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-5-3` · **kapitteltype:** teori
- **description:** NUMA (ikke-uniform minnetilgang), false sharing (to kjerner skriver ulike ord i samme cache-linje), og multithreading (fine-grained/coarse-grained/SMT) — faste essay- og flervalgstemaer.
- **Eksamensbelegg:** Sjanger T5/E1+M1, 67–100 % (false sharing essay-favoritt; SMT MCQ 2017 + multithreading essay 2015). Prioritet: **perfekt** (false sharing), **kunne** (SMT/NUMA).
- **Innholdskontrakt:** `definition` **NUMA**: minnetilgangstid avhenger av hvilken node dataene ligger på (lokal < fjern). `theorem` **false sharing (konsist-essay-mal, E1)**: to kjerner skriver **ulike ord i samme cache-linje** → koherensprotokollen invaliderer linjen fram og tilbake selv om dataene er logisk uavhengige → unødig trafikk. `definition` **multithreading**: **fine-grained** (bytt tråd hver sykel), **coarse-grained** (bytt ved lange staller), **SMT** (*simultaneous multithreading* — flere tråder i samme sykel, deler funksjonsenheter). **Notasjons- og begrepsliste:** NUMA, lokal/fjern node, false sharing, cache-linje, fine/coarse-grained, SMT.
- **Begrepskontrakt:** Skille **false sharing** (ulike ord, samme linje) fra ekte deling; skille **fine-grained / coarse-grained / SMT**.
- **Oppgavesjangre:** E1 + M1. Mønstereksempel (E1): «Concisely describe false sharing and why it hurts performance.» (To kjerner skriver ulike ord i samme cache-linje → gjentatt invalidering.)
- **Typiske feil:** Blande false sharing og ekte deling; blande de tre multithreading-typene; tro NUMA har uniform tilgangstid; tro SMT bytter tråd bare ved staller (det er coarse-grained).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.6: DRILL — koherens: MSI/MESI-match og «not true»

- **id:** `tdt4260-5-6` · **number:** 5.6 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4260-5-5` · **kapitteltype:** drill
- **description:** Full drill på T5: MSI/MESI-tilstander (eier+clean/dirty), MSI-FSM-match-oppgaven (hendelse → tilstand, ingen minus), coherence-vs-consistency og false sharing under negativ-scoring-press.
- **Eksamensbelegg:** Sjanger T5, 100 % (inkl. match-sjanger D). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **MSI/MESI**: for hver tilstand oppgi eier + clean/dirty + typisk overgang; 2) **match (MSI-FSM)**: koble hver hendelse (CPU read/write hit/miss, Bus read/write miss) til riktig tilstandsnummer — ingen minus, ta alle; 3) **coherence vs. consistency**: sjekk om spørsmålet gjelder én adresse eller rekkefølge; 4) **false sharing / snooping-vs-directory**: sjekk mot §5-fellene. Sensor-kommentert case med margnotat om MESI-presisjonen og match-gratispoengene. 12–16 oppgaver (M1/M2 + én D-match + én E1-mal).
- **Begrepskontrakt:** Alle T5-forvekslingspar + match-diagram under press.
- **Oppgavesjangre:** M1/M2/D/E1. Mønstereksempel (D): «Match each event (CPU write miss, Bus read miss, …) to the resulting MSI state.»
- **Typiske feil:** MESI som akronym (§#7); coherence/consistency-blanding (§#8); «snooping skalerer bedre» (§#9); hoppe over match (gratispoeng).
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (TLP og koherens)
1. Prøve 5.A (25 min): Multiprosessor + Amdahl-multicore + locks/race (T5, M1/M3).
2. Prøve 5.B (25 min): MSI/MESI eier+clean/dirty + snooping/directory (T5, M1/M2/E1).
3. Prøve 5.C (25 min): MSI-FSM-match + coherence vs. consistency (T5, D/M2).
4. Prøve 5.D (25 min): False sharing + NUMA + SMT/multithreading (T5, E1/M1).

---

### Del 6 — Lagerhus-datamaskiner og energi *(H&P kap. 6 · T6 · 67 %)*

> Del 6 er essay-favorittenes hjem: **energy proportionality** og **PUE** (fast «concisely
> describe») pluss **MapReduce web-search** i et WSC. 67 %, men sterkt i 2016+2017. Kapittel
> 6.3 er drill-/essaykapitlet.

#### Kapittel 6.1: Energy proportionality og PUE

- **id:** `tdt4260-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-1-3` · **kapitteltype:** teori
- **description:** Energy proportionality (effekt bør være proporsjonal med utnyttelse) og hvorfor det er viktig, og PUE (power usage effectiveness) som anleggseffektivitetsmål — de to faste WSC-essayene.
- **Eksamensbelegg:** Sjanger T6/E1+E2, 67 % (energy proportionality essay 2016 open1 + 2017 Q36). Prioritet: **perfekt** (essay-favoritt).
- **Innholdskontrakt:** `theorem` **energy proportionality (konsist-essay-mal, E1/E2)**: ideelt bør effektforbruket være **proporsjonalt med belastningen** (10 % last → 10 % effekt); reelle servere bruker mye effekt selv ved lav last → sløsing fordi WSC-er ofte kjører på 10–50 % utnyttelse. `theorem` **PUE (gjenkjenning)**: `PUE = total anleggseffekt / IT-effekt` — lav (nær 1) = energieffektivt (lite tapt til kjøling/tap). `text` effekt vs. energi i WSC-skala. **Notasjons- og begrepsliste:** energy proportionality, utnyttelse, PUE, IT-effekt, kjøling/overhead.
- **Begrepskontrakt:** Skille **energy proportionality** (effekt ∝ last) fra **PUE** (anleggseffektivitet); lav PUE = bra.
- **Oppgavesjangre:** E1/E2 + M1. Mønstereksempel (E1): «Concisely describe energy proportionality and why it matters for a WSC.» (Effekt bør følge last; servere er ofte ikke-proporsjonale og WSC-er kjører på lav last → sløsing.)
- **Typiske feil:** Blande energy proportionality og PUE; tro høy PUE er bra (lav er bra); tro proporsjonalitet handler om ytelse, ikke effekt.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.2: WSC — MapReduce, RLP og kostnadsmodell

- **id:** `tdt4260-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-6-1` · **kapitteltype:** teori
- **description:** Lagerhus-datamaskinen (WSC): forespørselsnivå-parallellisme (RLP), MapReduce brukt på web-søk (map = delresultat per node, reduce = global sammenslåing), og CAPEX/OPEX-kostnadsmodellen.
- **Eksamensbelegg:** Sjanger T6/E1+M1, 67 % (web-search MapReduce essay). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **RLP** (*request-level parallelism*): mange uavhengige forespørsler kjøres parallelt. `theorem` **MapReduce web-search (konsist-essay-mal, E1)**: **map** = hver node produserer delresultat for sin del av indeksen; **reduce** = delresultatene slås sammen/rangeres globalt. `definition` **CAPEX vs. OPEX**: investering (bygg/utstyr, amortiseres) vs. drift (strøm/vedlikehold). `text` yield-kobling (kap. 1.2) kort. **Notasjons- og begrepsliste:** RLP, MapReduce (map/reduce), CAPEX/OPEX, amortisering.
- **Begrepskontrakt:** Skille **map (delresultat per node)** fra **reduce (global sammenslåing)**; skille **CAPEX** (investering) fra **OPEX** (drift).
- **Oppgavesjangre:** E1/M1. Mønstereksempel (E1): «Concisely describe how a web search runs in a WSC using MapReduce.» (Map = delresultat per node, reduce = global rangering.)
- **Typiske feil:** Bytte om map og reduce; blande CAPEX og OPEX; tro RLP er det samme som ILP/DLP.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 6.3: DRILL/ESSAY — WSC og energi konsist forklart

- **id:** `tdt4260-6-3` · **number:** 6.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4260-6-2` · **kapitteltype:** drill
- **description:** Drill og essay-trening på T6: skriv tette modellsvar på energy proportionality, PUE og MapReduce web-search, og elimer WSC-«not true»-feller.
- **Eksamensbelegg:** Sjanger T6, 67 %, essay-tungt. Prioritet: **perfekt** (essay-teknikk).
- **Innholdskontrakt (løsningsoppskrift):** 1) **energy proportionality**: definisjon + hvorfor viktig (lav-last-sløsing); 2) **PUE**: formel + lav=bra; 3) **MapReduce**: map/reduce-rollene; 4) **CAPEX/OPEX**; 5) konsist-essay-disiplin (svar først, dekk stikkord, tett). Sensor-kommentert case med margnotat om tetthet. 10–14 oppgaver (E1/E2 + M1/M2).
- **Begrepskontrakt:** Alle T6-forvekslingspar + essay-tetthet.
- **Oppgavesjangre:** E1/E2/M1/M2. Mønstereksempel (E2): «Describe energy proportionality, its importance, and how it relates to typical WSC utilization.»
- **Typiske feil:** Vagt/langt essay uten stikkord; PUE-retning feil; map/reduce byttet; CAPEX/OPEX-blanding.
- **Quiz: 16 · Flashcards: 6**

**Prøve-kvote Del 6:** 4 prøver (WSC og energi)
1. Prøve 6.A (25 min): Energy proportionality konsist-essay + M1 (T6, E1/M1).
2. Prøve 6.B (20 min): PUE-gjenkjenning + kostnadsmodell (T6, M1/M3).
3. Prøve 6.C (25 min): MapReduce web-search konsist-essay (T6, E1).
4. Prøve 6.D (20 min): Blandet WSC «not true» (T6, M2).

---

### Del 7 — Sammenkoblingsnett *(H&P App. F · T7 · 100 %)*

> Del 7 rommer topologiene (crossbar/MIN/bus/mesh/hypercube), bisection bandwidth, og
> deadlock-fri routing. Distinktivt fra søsterfagene. Kapittel 7.3 er drillkapitlet.

#### Kapittel 7.1: Topologier og bisection bandwidth

- **id:** `tdt4260-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-5-1` · **kapitteltype:** teori
- **description:** Nett-topologier (bus, crossbar, flertrinnsnett/MIN, mesh, hypercube) med deres egenskaper, og bisection bandwidth som skaleringsmål (inkl. hypercube-utvidelsens skaleringsulempe).
- **Eksamensbelegg:** Sjanger T7/M1+M2, 100 % (crossbar/hypercube/mesh, bisection). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker per topologi: **bus** (delt, enkel, skalerer dårlig); **crossbar** (ikke-blokkerende, men `O(N²)`-kost, skalerer dårlig); **MIN** (flertrinnsnett, `O(N log N)` brytere); **mesh** (2D-rutenett, `O(N)` lenker); **hypercube** (`O(log N)` hop-count, hver node har `log N` porter). `theorem` **bisection bandwidth**: minste båndbredde mellom to like store halvdeler (mål på verste-falls-kapasitet). `text` **hypercube-utvidelse** (8→16 noder): en adressebit legges til, **hver node trenger en ny fysisk port** → skaleringsulempe. **Notasjons- og begrepsliste:** bus/crossbar/MIN/mesh/hypercube, bisection bandwidth, hop-count, node-grad, `O(log N)`/`O(N²)`.
- **Begrepskontrakt:** Skille **crossbar (ikke-blokkerende, dyr)** fra **bus (blokkerende, billig)**; hypercube skalerer i hop-count men koster porter per node.
- **Oppgavesjangre:** M1/M2. Mønstereksempel (M1): «Which topology is non-blocking but scales poorly (O(N²) cost)?» (crossbar.)
- **Typiske feil:** Tro crossbar skalerer godt (kost `O(N²)`); blande hop-count og bisection; glemme at hypercube-utvidelse krever ny port per node; blande mesh og hypercube.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 7.2: Routing, deadlock og switching

- **id:** `tdt4260-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-7-1` · **kapitteltype:** teori
- **description:** Ruting (dimensjonsordnet routing), deadlock og hvordan det unngås, og svitsjeteknikker (circuit switching vs. packet/wormhole).
- **Eksamensbelegg:** Sjanger T7/M1+M2, 67–100 % (routing, deadlock, circuit switching). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **deadlock**: sirkulær ressursavhengighet der ingen pakke kan gå videre. `theorem` **deadlock-fri routing**: **dimensjonsordnet routing** (rut i fast dimensjonsrekkefølge) bryter sykler → unngår deadlock. `definition` **switching**: **circuit switching** (reserver hele veien først) vs. **packet/wormhole** (send fragmenter). **Notasjons- og begrepsliste:** routing, dimensjonsordnet, deadlock, circuit/packet/wormhole switching, virtuelle kanaler.
- **Begrepskontrakt:** Skille **circuit switching** (reservér vei) fra **packet switching** (fragmenter); dimensjonsordnet routing = deadlock-fri.
- **Oppgavesjangre:** M1/M2. Mønstereksempel (M1): «How does dimension-order routing help avoid deadlock?» (Bryter sykliske avhengigheter ved fast dimensjonsrekkefølge.)
- **Typiske feil:** Tro circuit switching sender fragmenter; blande deadlock og livelock; tro all routing er deadlock-fri.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.3: DRILL — nett-topologier og «not true»

- **id:** `tdt4260-7-3` · **number:** 7.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4260-7-2` · **kapitteltype:** drill
- **description:** Full drill på T7: koble topologi til egenskaper (kost, hop-count, bisection), deadlock-fri routing og switching under «not true»-press.
- **Eksamensbelegg:** Sjanger T7, 100 %. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **topologi → egenskaper** (kost, node-grad, hop-count, bisection); 2) **hypercube-skalering** (port per node); 3) **routing/deadlock** (dimensjonsordnet); 4) **switching** (circuit vs. packet); 5) negativ-scoring-strategi. Sensor-kommentert case med margnotat om crossbar-kosten og hypercube-porten. 10–14 oppgaver (M1/M2).
- **Begrepskontrakt:** Alle T7-forvekslingspar under press.
- **Oppgavesjangre:** M1/M2. Mønstereksempel (M2): «Which statement about interconnect topologies is NOT true?» — crossbar-skalering eller hypercube-port.
- **Typiske feil:** crossbar skalerer godt; hop-count/bisection-blanding; hypercube-port glemt; gjette på «not true».
- **Quiz: 18 · Flashcards: 6**

**Prøve-kvote Del 7:** 4 prøver (Sammenkoblingsnett)
1. Prøve 7.A (25 min): Topologier + egenskaper (T7, M1/M2).
2. Prøve 7.B (20 min): Bisection bandwidth + hypercube-skalering (T7, M1/M3).
3. Prøve 7.C (20 min): Routing + deadlock + switching (T7, M1/M2).
4. Prøve 7.D (20 min): Blandet nett «not true» (T7, M2).

---

### Del 8 — Forskningsartikkel-sjangeren *(T8 · 100 % · distinktivt)*

> Del 8 dekker den distinktive «Articles»-sjangeren som søsterfagene ikke har: les en
> arkitektur-artikkel og gjengi **mekanismen**, ikke bare tittelen. Artiklene er utskiftbare
> — boka bruker representative case-studier, ikke en pugge-liste. Kapittel 8.3 er
> drill-/essaykapitlet.

#### Kapittel 8.1: Slik leser og besvarer du en arkitektur-artikkel

- **id:** `tdt4260-8-1` · **number:** 8.1 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4260-0-2` · **kapitteltype:** teori/håndverk
- **description:** Sjanger-håndverket (lånt fra DNA-drøfting): hvordan man leser en forskningsartikkel i datamaskinarkitektur og skriver et essay som gjengir **mekanismen** (hvordan den virker), problemet den løser, og resultatet — ikke bare tittel/konklusjon.
- **Eksamensbelegg:** Sjanger T8/E3, 100 % (egen sjanger i alle tre settene). **Sensorkrav: gjengi mekanismen** (f.eks. matching unit = hashing + overflow unit), ikke bare navnet. Prioritet: **perfekt** (sjangeren består selv om artiklene byttes).
- **Innholdskontrakt:** `theorem` **artikkel-essay-oppskrift (E3):** 1) **problemet** artikkelen adresserer, 2) **mekanismen/ideen** (hvordan den faktisk virker), 3) **resultatet/gevinsten**, 4) **begrensningen**. `text` hvorfor mekanismen er poenget: sensor belønner forståelse, ikke tittelgjenkjenning. **Notasjons- og begrepsliste:** mekanisme, problem/motivasjon, evaluering, begrensning.
- **Begrepskontrakt:** Skille **mekanisme (hvordan)** fra **tittel/konklusjon (hva)**.
- **Oppgavesjangre:** E3. Mønstereksempel (E3): «Describe the key mechanism proposed in the article and the problem it solves.»
- **Typiske feil:** Gjengi kun tittel/konklusjon (ikke mekanismen); mangle problemet artikkelen løser; skrive langt uten kjernen.
- **Quiz: 12 · Flashcards: 8**

#### Kapittel 8.2: Case-studier — representative arkitektur-artikler

- **id:** `tdt4260-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4260-8-1` · **kapitteltype:** teori/case
- **description:** Fire–fem representative case-studier som `collapsible` artikkel-lesebokser (nyskrevne sammendrag, ikke sitater): dataflow-maskiner, CMP-design-space, en tidlig superskalar, et mesh-mangeprosessor-brikkedesign, og dark silicon / utilization wall — hver med mekanismen i front.
- **Eksamensbelegg:** Sjanger T8/E3, 100 % (Natvig-æraen brukte spesifikke artikler; sjangeren består, artiklene byttes). Prioritet: **kunne** (representative, ikke pugg).
- **Innholdskontrakt:** `collapsible` **artikkel-lesebokser** (én per case), hver med problem → **mekanisme** → resultat → begrensning: (a) **dataflow-maskin** (matching unit = hashing + overflow unit; instruksjoner fyres når operander matcher); (b) **CMP-design-space** (avveining kjerneantall vs. cache — «cache byte-ekvivalenter»); (c) **tidlig superskalar** (utstede flere instruksjoner per sykel); (d) **mesh-mangeprosessor** (mange enkle kjerner i 2D-mesh, skalerbar interconnect); (e) **dark silicon / utilization wall** (kobler til kap. 1.1 — effektbudsjett begrenser aktiv silisiummengde). `text` at dette er **representative** eksempler; dagens artikkel kan være en annen. **Notasjons- og begrepsliste:** dataflow, matching unit, CMP, cache byte-ekvivalent, superskalar, mesh, dark silicon.
- **Begrepskontrakt:** Hver case koblet til sitt kjernebegrep (dataflow → matching unit; dark silicon → effektbudsjett).
- **Oppgavesjangre:** E3 + M1. Mønstereksempel (E3): «Explain the matching mechanism in a tagged-token dataflow machine.» (Hashing + overflow unit for å matche operander.)
- **Typiske feil:** Pugge tittel uten mekanisme; blande casene; tro artikkellisten er fast pensum.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 8.3: DRILL/ESSAY — artikkel-mekanismer konsist

- **id:** `tdt4260-8-3` · **number:** 8.3 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4260-8-2` · **kapitteltype:** drill
- **description:** Essay-drill på T8: skriv tette svar som gjengir mekanismen i en gitt arkitektur-artikkel, og gjenkjenn mekanisme-utsagn i flervalg.
- **Eksamensbelegg:** Sjanger T8, 100 %. Prioritet: **perfekt** (sjanger-teknikk).
- **Innholdskontrakt (løsningsoppskrift):** 1) identifiser **problemet**; 2) gjengi **mekanismen** presist; 3) oppgi **resultat/begrensning**; 4) hold tett. Sensor-kommentert case med margnotat om at mekanismen er poenget. 10–12 oppgaver (E3 + M1 mekanisme-gjenkjenning).
- **Begrepskontrakt:** Mekanisme vs. tittel, per case.
- **Oppgavesjangre:** E3/M1. Mønstereksempel (E3): «For the given article summary, state the mechanism and the problem it solves.»
- **Typiske feil:** Tittel uten mekanisme; utelate problemet; for langt/vagt.
- **Quiz: 14 · Flashcards: 6**

**Prøve-kvote Del 8:** 4 prøver (Forskningsartikkel-sjangeren)
1. Prøve 8.A (20 min): Artikkel-essay-oppskrift + mekanisme-gjenkjenning (T8, E3/M1).
2. Prøve 8.B (25 min): Dataflow + CMP-design-space mekanisme (T8, E3).
3. Prøve 8.C (25 min): Superskalar/mesh/dark silicon mekanisme (T8, E3/M1).
4. Prøve 8.D (20 min): Blandet artikkel-mekanisme konsist (T8, E3).

---

### Del 9 — Moderne utvidelser *(T9 · svak/ingen arkivdekning — **(verifiser)**)*

> Del 9 dekker det dagens læringsutbytte (2026) vektlegger, men som er **svakt eller
> fraværende i arkivet (2015–2017)**: prefetching (semesterprosjektets tema),
> GPGPU/akseleratorer, og maskinvaresikkerhet/sidekanalangrep. **Hele delen merkes
> (verifiser)** — form og vekt er ikke arkivbelagt. Forfatteren skal skrive fullverdige
> begrepskapitler, men Del 0 og hvert kapittel sier eksplisitt at vekten er projisert.

#### Kapittel 9.1: Prefetching *(verifiser)*

- **id:** `tdt4260-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-2-3` · **kapitteltype:** teori
- **description:** Forhåndshenting (prefetching): definisjon, metrikkene accuracy/coverage/timeliness, prefetch degree, og skillet HW- vs. SW-prefetching — semesterprosjektets tema (gem5-prefetcher), trolig varig kjernestoff.
- **Eksamensbelegg:** Sjanger T9/M1, 33 % i arkivet (kun 2016), men **semesterprosjektets tema** → trolig varig. **(verifiser)** vekt. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **prefetching**: hent data inn i cachen *før* de trengs for å skjule miss-latens. `theorem`/`definition` **metrikker**: **accuracy** (andel forhåndshentede blokker som faktisk brukes), **coverage** (andel miss som prefetcheren fjerner), **timeliness** (kommer dataene tidsnok — ikke for tidlig/sent). `definition` **prefetch degree** (hvor mange blokker fram) og **HW vs. SW prefetching**. `warning` for aggressiv prefetching kan forurense cachen (lav accuracy). **Notasjons- og begrepsliste:** prefetching, accuracy/coverage/timeliness, prefetch degree, HW/SW, cache pollution.
- **Begrepskontrakt:** Skille **accuracy** (brukt/hentet) fra **coverage** (fjernede miss); skille HW- vs. SW-prefetching.
- **Oppgavesjangre:** M1. Mønstereksempel (M1): «Which metric measures the fraction of prefetched blocks that are actually used?» (accuracy.)
- **Typiske feil:** Blande accuracy og coverage; tro mer aggressiv prefetching alltid er bedre (pollution); blande timeliness inn i accuracy.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 9.2: GPGPU og applikasjonsspesifikke akseleratorer *(verifiser)*

- **id:** `tdt4260-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-4-2` · **kapitteltype:** teori
- **description:** GPGPU (generell beregning på GPU) utover GPU-MCQ-en, og applikasjonsspesifikke akseleratorer (f.eks. tensor-/DSP-/domenespesifikke enheter) — hvorfor spesialisering gir ytelse/effekt, og avveiingen mot fleksibilitet.
- **Eksamensbelegg:** Sjanger T9/M1, svakt i arkivet men **eksplisitt i dagens læringsutbytte**. **(verifiser)** vekt. Prioritet: **kunne** (dagens emne krever).
- **Innholdskontrakt:** `definition` **GPGPU**: bruke GPU-ens massive dataparallellisme til generell beregning. `definition` **applikasjonsspesifikk akselerator**: maskinvare skreddersydd for ett domene → høy ytelse/effektivitet, lav fleksibilitet (kobler til dark silicon, kap. 1.1 — spesialisering utnytter effektbudsjettet). `theorem`/`text` **avveiingen**: spesialisering ↑ ytelse/watt, ↓ generalitet; Amdahl begrenser gevinsten hvis bare en del akselereres. **Notasjons- og begrepsliste:** GPGPU, akselerator, domenespesifikk, ytelse/watt, fleksibilitet-avveining.
- **Begrepskontrakt:** Skille **generell (CPU/GPGPU)** fra **spesialisert (akselerator)**; koble akselerator-gevinst til Amdahl.
- **Oppgavesjangre:** M1. Mønstereksempel (M1): «Why can an application-specific accelerator achieve higher performance-per-watt than a general CPU?» (Skreddersydd datasti, mindre overhead — på bekostning av fleksibilitet.)
- **Typiske feil:** Tro akseleratorer er gratis ytelse (Amdahl begrenser); blande GPGPU og fast akselerator; overse fleksibilitetskostnaden.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 9.3: Maskinvaresikkerhet og sidekanalangrep *(verifiser)*

- **id:** `tdt4260-9-3` · **number:** 9.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-3-3` · **kapitteltype:** teori
- **description:** Maskinvaresikkerhet: sidekanalangrep (side-channel) og Spectre/Meltdown-familien — hvordan spekulativ utførelse (kap. 3.3) og cache-timing (kap. 2.1) lekker hemmeligheter — nytt i dagens læringsutbytte, ikke i arkivet.
- **Eksamensbelegg:** Sjanger T9/M1, **ingen spor i arkivet (2015–2017)** men eksplisitt i dagens læringsutbytte. **(verifiser)** vekt. Prioritet: **kunne** (dagens emne krever).
- **Innholdskontrakt:** `definition` **sidekanalangrep**: utnytt indirekte spor (timing, cache-tilstand, effekt) til å utlede hemmelige data. `theorem`/`text` **Spectre/Meltdown-mekanismen (konsist)**: **spekulativ utførelse** (kap. 3.3) utfører instruksjoner forbi en tilgangssjekk; selv om resultatet forkastes, etterlater det spor i **cachen** (kap. 2.1) som avleses via **timing** → hemmeligheten lekker. `definition` skille **Spectre** (spekulasjon forbi grensesjekk i offerets kontekst) vs. **Meltdown** (les kjerneminne forbi privilegiesjekk). `text` mottiltak kort (fencing, isolasjon) — «bør kjenne til». **Notasjons- og begrepsliste:** sidekanal, timing-angrep, spekulativ utførelse, cache-spor, Spectre/Meltdown.
- **Begrepskontrakt:** Skille **Spectre** (grensesjekk-spekulasjon) fra **Meltdown** (privilegiesjekk); koble mekanismen til spekulasjon + cache-timing.
- **Oppgavesjangre:** M1. Mønstereksempel (M1): «How does a Spectre-style attack leak data despite the speculative result being discarded?» (Sporet i cachen avleses via timing.)
- **Typiske feil:** Tro forkastet spekulasjon ikke etterlater spor; blande Spectre og Meltdown; tro angrepet leser data direkte (det leser via cache-timing).
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 9:** 4 prøver (Moderne utvidelser — **(verifiser)**)
1. Prøve 9.A (20 min): Prefetching-metrikker accuracy/coverage/timeliness (T9, M1).
2. Prøve 9.B (20 min): GPGPU + akseleratorer + Amdahl-kobling (T9, M1).
3. Prøve 9.C (20 min): Sidekanal + Spectre/Meltdown-mekanisme (T9, M1).
4. Prøve 9.D (20 min): Blandet utvidelser «not true» (T9, M2).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Sjangerguiden — flervalg, negativ scoring, match og essay

- **id:** `tdt4260-10-1` · **number:** 10.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4260-0-2` · **kapitteltype:** sjangerguide
- **description:** Samlet guide til de syv svarformene (M1 gjenkjenning, M2 «not true», M3 regne-MCQ, D match, E1 kort essay, E2 langt essay, E3 artikkel-essay) med strategien for negativ scoring, tidsbudsjett for 3 timer, og løsningsoppskriftene fra drillkapitlene i kortform.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi svarformkatalogen, negativ-scoring-kalkylen (blank ved tvil), match-regelen (ingen minus), essay-tetthet, og MESI-presisjonskravet. Prioritet: **perfekt**.
- **Innholdskontrakt:** `text`/`theorem` svarformguide M1–E3 med fallgruver; `tip` tidsbudsjett (~3 t, prioritér de sikre poengene: AMAT, Amdahl, lovene, match); løsningsoppskriftene fra 1.5/2.6/3.6/4.4/5.6/6.3/7.3/8.3 i kortform. **Notasjons- og begrepsliste:** M1–E3, negativ scoring, tetthet, match.
- **Begrepskontrakt:** Alle svarformer + strategiene samlet.
- **Oppgavesjangre:** 3–4 strategi-/blandingsoppgaver over alle sjangre.
- **Typiske feil:** Gjette i tvil; hoppe over match; langt vagt essay; nedprioritere regnemodulene.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 10.2: Øvingseksamen 1 — typisk sett (H&P-menyen)

- **id:** `tdt4260-10-2` · **number:** 10.2 · **estimatedMinutes:** 180 · **prerequisites:** `tdt4260-10-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett etter gjeldende mal: en stor flervalgsblokk med negativ scoring over H&P-menyen (T1–T8) + korte/lange forklaringsessays + én MSI-FSM-match. Engelsk oppgavetekst, 100 poeng, nyskrevet.
- **Eksamensbelegg/miks:** Speiler prognosen (§1/§7): flere flervalg på lovene (T1) + Amdahl-M3, flernivå-AMAT (T2-M3) + fire Cs/VIPT, hazards/Tomasulo (T3) + VLIW «not true», SIMD-vs-vektor/GPU/roofline (T4), MSI/MESI + coherence-vs-consistency + MSI-match (T5), energy proportionality-essay (T6), interconnect-topologi + bisection (T7), ett artikkel-essay (T8). Flervalg med **negativ scoring** (+3/−1,5). **Løsningsforslag i `collapsible` per oppgave** med begrunnelse for riktig svar OG alle distraktorer, MESI eier+clean/dirty, essay-modellsvar med stikkord, og `tip` om poeng/negativ-scoring-strategi. Innledende `tip` om tidsbudsjett + blank-ved-tvil.
- **Innholdskontrakt:** Dekker T1–T8 i alle svarformer M1–E3 + D.
- **Begrepskontrakt:** Alle sentrale forvekslingspar dekkes minst én gang.
- **Oppgavesjangre:** M1–M3/D/E1–E3, engelsk stamme.
- **Typiske feil:** Alle §5-fellene representeres via distraktorer; løsningen begrunner hvorfor hver er gal.
- **Quiz: 20 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 2 — regne- og ILP-tungt sett

- **id:** `tdt4260-10-3` · **number:** 10.3 · **estimatedMinutes:** 180 · **prerequisites:** `tdt4260-10-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de to regnemodulene (flernivå-AMAT + Amdahl) og ILP (Tomasulo m/ ROB, hazards, VLIW), men fortsatt full H&P-bredde.
- **Eksamensbelegg/miks:** Ca. samme omfang, ekstra vekt på M3-regning (flere AMAT-nivåer, Amdahl med ulike N/s) + power/PUE-gjenkjenning + Tomasulo-m/ROB 10-poengs essay + hazard-/VLIW-«not true». **Løsningsforslag som A-besvarelse** med formel → innsatte tall → svar, og margnotat om AMAT-nøstingen (§#5), Amdahl-nevneren (§#6) og essay-stikkordene (Issue/Exec/Write/Commit). Negativ scoring + blank-strategi vist.
- **Innholdskontrakt:** Dekker T1–T8; supplerer 10.2 med tyngre regning + ILP.
- **Begrepskontrakt:** Regnemodul- og ILP-forvekslingspar.
- **Oppgavesjangre:** M1–M3/E1–E3, engelsk stamme.
- **Typiske feil:** Flat AMAT (§#5); Amdahl `1/s` (§#6); utelate essay-steg.
- **Quiz: 20 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 3 — koherens-, DLP- og artikkeltungt sett

- **id:** `tdt4260-10-4` · **number:** 10.4 · **estimatedMinutes:** 180 · **prerequisites:** `tdt4260-10-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de begreps-/presisjonstunge temaene: MSI/MESI (eier+clean/dirty) + match, coherence-vs-consistency, SIMD-vs-vektor/GPU, energy proportionality/false sharing-essays, og artikkel-mekanismer.
- **Eksamensbelegg/miks:** Ca. samme omfang, ekstra vekt på «not true»-flervalg + match + konsist-essay: MSI-FSM-match, MESI-essay (eier+clean/dirty), coherence-vs-consistency «not true», SIMD-vs-vektor, false sharing + energy proportionality konsist-essay, og to artikkel-mekanisme-essays. **Løsningsforslag som eksplisitt begrunner hvorfor hver sentrale distraktor er gal** (MESI, coherence/consistency, SIMD/vektor, snooping/directory), med `tip` om at presisjon (eier+clean/dirty, mekanisme) er selve ferdigheten faget tester. De tre settene sammen dekker T1–T9 og alle svarformer flere ganger.
- **Innholdskontrakt:** Dekker T1–T9 (inkl. utvidelser); supplerer med presisjons-/essaytyngde.
- **Begrepskontrakt:** Alle koherens-, DLP- og artikkel-forvekslingspar under press.
- **Oppgavesjangre:** M1–M3/D/E1–E3, engelsk stamme.
- **Typiske feil:** MESI-akronym (§#7); coherence/consistency (§#8); snooping-skalering (§#9); SIMD/vektor (§#10); tittel uten mekanisme.
- **Quiz: 20 · Flashcards: 0**

**Prøve-kvote Del 10:** ingen egne prøver (Del 10 **er** øvingseksamenene + sjangerguiden).

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.3 | 12+14+16 = **42** | 10+12+16 = **38** |
| 1 | 1.1–1.5 | 16+16+14+18+22 = **86** | 16+16+14+14+8 = **68** |
| 2 | 2.1–2.6 | 16+16+16+18+16+22 = **104** | 16+16+12+18+18+8 = **88** |
| 3 | 3.1–3.6 | 18+16+16+14+16+22 = **102** | 18+16+14+14+16+8 = **86** |
| 4 | 4.1–4.4 | 18+16+14+20 = **68** | 18+16+12+8 = **54** |
| 5 | 5.1–5.6 | 16+18+18+14+16+22 = **104** | 14+18+18+14+16+8 = **88** |
| 6 | 6.1–6.3 | 16+14+16 = **46** | 16+14+6 = **36** |
| 7 | 7.1–7.3 | 18+16+18 = **52** | 18+16+6 = **40** |
| 8 | 8.1–8.3 | 12+14+14 = **40** | 8+14+6 = **28** |
| 9 | 9.1–9.3 | 14+14+14 = **42** | 14+14+14 = **42** |
| 10 | 10.1–10.4 | 14+20+20+20 = **74** | 10+0+0+0 = **10** |
| **Sum** | **46 kap.** | **760 ≥ 550 ✓** | **578 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensformen: **flervalgsquiz ER eksamenskjernen** og er derfor
kalibrert svært høyt (760) — vesentlig over gulvet på 550, fordi negativ scoring krever
tett trening på både riktig svar OG alle distraktorer (så studenten tåler «not true»-feller).
De fem 100 %-gjengangerdelene får tyngst quiz-dekning — kvantitative lover (Del 1: 86),
minnehierarki/cache (Del 2: 104), ILP (Del 3: 102), TLP/koherens (Del 5: 104) — mens de
67 %-temaene (WSC/energi Del 6: 46) og de arkivsvake utvidelsene (Del 9: 42) ligger lavere.
Drillkapitlene (1.5, 2.6, 3.6, 4.4, 5.6, 6.3, 7.3, 8.3) har høyest quiz (16–22) fordi de
**er** treningsbanken for forvekslingsparene og de to regnemodulene. Flashcards vektes mot
**begrep ↔ presis definisjon ↔ fast forvekslingspar/distraktor** og siktes høyt (578) fordi
faget er svært begrepsrikt (lover, cache-parametre, hazardtyper, MESI-tilstander, topologier)
og eksamen er hjelpemiddelfri — dette ER puggematerialet. Utvidelsene (Del 9) har relativt
flere flashcards per quiz (1:1) fordi de er rene begrepskapitler uten drill. Øvingseksamenene
(10.2–10.4) gir 0 flashcards (rene oppgavesett) men 20 quiz hver.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9 → 36 prøver)

Hver prøve er nyskrevne oppgaver i eksamens svarformer (M1–M3/D/E), med løsningsforslag som
holder sensorens form (begrunn alle distraktorer, MESI eier+clean/dirty, essay-stikkord,
brøk/tallform der relevant) og oppgir poengfordeling + negativ-scoring-notat. Prøvekapitler
bygges som `tdt4260-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i sluttblokken til
hver del over (Del 1–9). Del 0 og Del 10 får ikke egne prøver (Del 10 **er**
øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 10.2–10.4)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (10.2) | Typisk gjeldende sett (H&P-menyen) | Flervalg m/negativ scoring over T1–T8 + korte/lange essays + MSI-FSM-match |
| Øvingseksamen 2 (10.3) | Regne- og ILP-tungt sett | Vekt på flernivå-AMAT + Amdahl + Tomasulo m/ROB + hazard/VLIW «not true» |
| Øvingseksamen 3 (10.4) | Koherens-, DLP- og artikkeltungt sett | Vekt på MSI/MESI + match + coherence-vs-consistency + SIMD/vektor + essays + artikkel-mekanisme |

Hvert sett er bygd som **en tretimers eksamen (100 poeng, flervalgstungt med negativ scoring,
engelsk oppgavetekst, hjelpemiddel D)** med løsningsforslag som (i) begrunner riktig svar OG
alle distraktorer, (ii) gir MESI eier+clean/dirty, (iii) viser AMAT/Amdahl som formel →
innsatte tall → svar, og (iv) har essay-modellsvar med stikkordene. Til sammen dekker de tre
settene T1–T9 og alle svarformer M1–E3 + D flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én tretimers skriftlig eksamen, A–F, hjelpemiddel D, teller
   100 %, engelsk oppgavetekst; **flervalgstungt med NEGATIV SCORING** (+3/−1,5 eller +2/−1,
   blankt=0) + korte/lange forklaringsessays + én MSI-FSM-match (ingen minus); **10–15 %
   regning, 85–90 % teori/forklaring** — motsatt av TDT4160. Fra kap. 0.1/10.1.
2. **Prioriteringskartet** — temafrekvensen omgjort til tre lesenivåer: **perfekt** (de
   kvantitative lovene + Amdahl, flernivå-AMAT, de fire Cs/VIPT/TLB, hazards/RAW/WAR/WAW,
   Tomasulo m/ROB, MSI/MESI eier+clean/dirty, coherence-vs-consistency, SIMD-vs-vektor,
   interconnect-topologi/bisection, artikkel-mekanisme, energy proportionality), **kunne**
   (power-ligning, cache-optimaliseringer, VLIW/loop unrolling, GPU/roofline, false
   sharing/SMT/NUMA, MapReduce/PUE, routing/deadlock), **kjenne** (branch prediction,
   prefetching, GPGPU/akseleratorer, hardware security/Spectre-Meltdown — de tre siste
   **(verifiser)**).
3. **Strategi- og svarformguiden** — M1–M3/D/E1–E3 (§3) med **negativ-scoring-kalkylen**
   (blank ved tvil, svar når du kan eliminere til 2), match-regelen (ingen minus, ta alle),
   og konsist-essay-oppskriften (svar først, dekk stikkord, tett) — fra kap. 0.2/10.1.
4. **De to regnemodulene** — flernivå-AMAT (`t_L1 + m_L1·(t_L2 + …)`) og Amdahl
   (`1/(s+(1−s)/N)`, tak `1/s`), begge automatisert til feilfrihet, fra kap. 1.4/2.3.
5. **Forvekslingsparkatalogen** — alle §5-fellene samlet, hver med kapittelet som forebygger
   den: Moore vs. Dennard vs. Pollack vs. Amdahl (1.1/1.2/1.4/1.5), fire Cs vs. «concurrent»
   (2.2), RAW vs. WAR/WAW + «execution hazard» (3.1), VLIW-binærkompatibilitet (3.5), SIMD vs.
   vektor (4.1), GPU-latensskjuling (4.2), roofline-formål (4.3), MESI eier+clean/dirty (5.3),
   coherence vs. consistency (5.4), snooping vs. directory (5.2), false sharing (5.5), PUE-
   retning (6.1), crossbar/hypercube-skalering (7.1), artikkel-mekanisme vs. tittel (8.1).
6. **Notasjons- og begrepsark** — samlet puggeark for en hjelpemiddelfri eksamen: de fire
   lovene + `P=½CV²f`, Amdahl-formelen, flernivå-AMAT-formelen, de fire Cs, VIPT
   `tag|index|offset`, RAW/WAR/WAW, Tomasulo-stegene Issue/Execution/Write/Commit, MESI-
   tilstandene (eier+clean/dirty), coherence vs. consistency, SIMD vs. vektor, roofline
   `min(peak FLOPS, AI×BW)`, PUE `total/IT`, energy proportionality, bisection bandwidth,
   deadlock-fri routing, prefetching-metrikkene.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): sikre de fem
   100 %-gjengangerne og de to regnemodulene først (Del 1 lover+Amdahl → Del 2 AMAT/cache →
   Del 3 ILP → Del 5 koherens), legg deretter DLP (Del 4), WSC/energi (Del 6) og nett (Del 7),
   tren artikkel-sjangeren (Del 8), og les utvidelsene (Del 9) sist. Kjør prøvene underveis og
   de tre øvingssettene de siste ukene under tidspress (180 min) med **negativ-scoring-
   disiplin** (la stå blankt ved tvil).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4260` med alle 46 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («3.2», ALDRI lineær «18» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 3.2»). Institusjon = **NTNU** i
   `src/app/bok/trinn/hoyere/institusjoner.ts`, navn «TDT4260 Datamaskinarkitektur».
2. **Del 0** (kap. 0.1–0.3) — etablerer svarformene M1–E3/D, temablokkene T1–T9,
   frekvenstallene, negativ-scoring-strategien, konsist-essay-håndverket og TDT4160-
   repetisjonsbroen som resten refererer til.
3. **De sju kjernedelene** bygges i H&P-rekkefølge Del 1 → Del 7 (innad følger kapitlene
   forkunnskaper). Prioritér innhold/kvalitet på de fem 100 %-gjengangerne (lover, AMAT,
   ILP, koherens) og de to regnemodulene (1.4 Amdahl, 2.3 flernivå-AMAT).
4. **Del 8** (artikler) og **Del 9** (utvidelser) — Del 9 merkes gjennomgående **(verifiser)**.
5. **Del 10** (eksamenstreningen) til slutt — gjenbruker alle svarformer/sjangre;
   øvingseksamenene speiler H&P-menyen (flervalg m/negativ scoring + essays + match, 100 p).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene (§6)
   legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i
  norske sitattegn og i kode/engelske sitater; `\\` for LaTeX); `npm run build` grønn.
- [ ] **Flervalg ER eksamenstrening (negativ scoring)**: `options[0]` = riktig svar (runtime
  stokker); hver quiz-forklaring begrunner riktig svar OG **alle** distraktorene; relevante
  forklaringer lærer **blank-strategien**; match/«velg de N» splittet til ett-riktig-svar-quiz.
- [ ] **Negativ-scoring-strategien eksplisitt**: Del 0.2 + kap. 10.1 har forventet-verdi-
  kalkylen (rent gjett = −0,375 → blankt; eliminasjon til 2 = +0,75 → svar) og match-regelen
  (ingen minus, ta alle).
- [ ] **De to regnemodulene som `theorem`**: flernivå-AMAT (2.3, rekursiv nøsting) og Amdahl
  (1.4, `1/(s+(1−s)/N)`, tak `1/s`), begge med gjennomregnet nyskrevet eksempel; power-ligning,
  roofline, PUE, yield som gjenkjennings-/oppsettskontrakter.
- [ ] **MESI-presisjonen**: kap. 5.3 har egen `warning` om at eksamen krever **eier + clean/
  dirty per bokstav** (ikke akronymet), og et modellsvar som gir hver tilstand eier-status +
  clean/dirty + typisk overgang; samme presisjon i MSI-match (5.6) og øvingseksamenene.
- [ ] **Begrepskontrakter med forvekslingspar-skille**: hvert begrepskapittel skiller
  nabobegrepene skarpt (Moore/Dennard/Pollack/Amdahl; fire Cs vs. concurrent; RAW vs. WAR/WAW;
  SIMD vs. vektor; coherence vs. consistency; snooping vs. directory; branch prediction vs.
  divergence).
- [ ] **«which is NOT true»/negativ-scoring-drill**: hvert tema har en «not true»-drill;
  drillkapitlene (1.5/2.6/3.6/4.4/5.6/6.3/7.3/8.3) tungt vektet mot inverterte spørsmål + strategi.
- [ ] **Konsist-essay-maler**: essay-favorittema har `example` modellsvar + `tip`
  **Sensorblikket** — Amdahl (1.4), VIPT-aksess (2.4), Tomasulo m/ROB (3.3), MESI (5.3), false
  sharing + energy proportionality (5.5/6.1), MapReduce (6.2), artikkel-mekanisme (8.1);
  tetthet framfor volum, dekker stikkordkravet.
- [ ] **Artikkel-lesebokser**: kap. 8.2 har `collapsible` artikkel-lesebokser (dataflow, CMP-
  design-space, superskalar, mesh, dark silicon) med problem → **mekanisme** → resultat →
  begrensning; nyskrevne sammendrag, ikke sitater; presiser at listen er representativ, ikke pugg.
- [ ] **Notasjons- og begrepsliste per delkapittel**: hvert delkapittel med notasjon har
  `collapsible` «Notasjons- og begrepsliste» rett etter Forkunnskaper, som forklarer ALT
  delkapitlet bruker (engelske fagtermer + de aktuelle formlene + forvekslingsparene).
- [ ] **Engelsk fagterm + oppgavespråk**: engelske faguttrykk beholdt med norsk forklaring ved
  første forekomst; flervalgsstammer og øvingseksamener speiler engelsk oppgavespråk der naturlig.
- [ ] **Utvidelsene merket (verifiser)**: hele Del 9 (prefetching, GPGPU/akseleratorer,
  hardware security) + branch prediction (3.4) merket som arkivsvake/projiserte; Del 0 sier det.
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin §5-felle
  (lov-forveksling, «concurrent», «execution hazard», VLIW-binærkompatibilitet, SIMD/vektor,
  GPU-cache-myten, MESI-akronym, coherence/consistency, snooping-skalering, roofline-formål,
  crossbar-skalering, artikkel-tittel-uten-mekanisme).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene herfra),
  Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå i flervalgs-/essayform), 6–12
  øvinger (M1–E3) med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 10–16 oppgaver.
- [ ] **Quiz-sum ≥ 760 og flashcard-sum ≥ 578** per kvotetabellen (§5); quiz kalibrert som
  direkte flervalgs-eksamenstrening m/negativ-scoring-forklaringer; flashcards som begrep ↔
  definisjon ↔ fast forvekslingspar.
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener (kap. 10.2–10.4) som sammen
  dekker T1–T9, svarformene M1–E3/D og de fem 100 %-gjengangerne flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tallverdier, flervalgsalternativer, essays, FSM-diagrammer
  og artikkelsammendrag nyskrevne — H&P-modeller/formler/protokoller er allmenn faglig kunnskap,
  men ingen oppgavetekster/fasiter/sensorformuleringer fra reelle sett gjengis; pensum (Hennessy
  & Patterson) og forskningsartikler refereres (begrep/verk), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
