# Bokskjelett: ECON4260 Behavioral Economics / Atferdsøkonomi — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (10 ordinære sett: V2016 + H2017–H2025, alle lest i sin
> helhet — **ingen sensorveiledninger i arkivet**). Arketype: **HYBRID —
> «modellforankret drøfting/regning»** (`DNA-regnefag.md` som base, med
> drøfte-/tolkningselementer lånt fra `DNA-drofting.md`). Arketypevalget er
> begrunnet i §1. Nærmeste strukturforbilde: `econ2220/SKJELETT.md` (faste
> mikromodeller som utledes og anvendes), med drøftelaget hentet fra
> `econ1220/SKJELETT.md`. Alle mønstereksempler i skjelettet er omskrivninger;
> forfatteren skal variere dem videre, aldri kopiere inn ordrett.
>
> ⚠️ **Svakere evidensgrunnlag enn fag med bevart sensorveiledning.** Alle
> «sensorkrav» er *utledet* fra oppgaveformuleringene (hva de eksplisitt ber om,
> hint, «verbal discussion is sufficient»-markeringer, navngitte pensumartikler),
> ikke fra autoritative rettekilder. Punkter merket **(verifiser)** eller
> **(utledet)** må dobbeltsjekkes. Karakterterskler (A/C/E) kan ikke fastsettes
> fra arkivet og er derfor bevisst holdt vage i boka.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ4260` |
| Tittel | **ECON4260 Behavioral Economics** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | **Regnefag/drøfting-hybrid** («modellforankret drøfting/regning») |
| Antall kapitler | **34** (2 eksamenskart/håndverk + 27 tema/drill + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 380 min ≈ 39,5 timer** |
| Quiz totalt | **555** (krav ≥500) |
| Flashcards totalt | **595** (krav ≥500; sikt 550–650 for tospråklig begrepsrikt fag) |
| Eksamensspråk | **Engelsk** — boka er norsk bokmål med **tospråklig begrepsbank** (engelsk fagterm i parentes ved første forekomst; flashcards norsk↔engelsk) |
| Forgjengerbøker | `econ2220` (Mikroøkonomi 2 — spillteori/nyttebegrep), `econ1210` (Mikroøkonomi 1 — konsumentteori/forventet nytte) — forkunnskapslenker peker dit |

**Pitch (ett avsnitt):** ECON4260-eksamen er en 3-timers skriftlig skoleeksamen
**på engelsk** (A–F, ingen hjelpemidler unntatt ordbok) som i 2020–2025 har
stabilisert seg på **3–4 store «Problems»** med oppgitt prosentvekt, hver delt i
deloppgaver som ofte teller likt. Det spesielle med faget er at temaarkitekturen
er ekstremt stabil: **fire faste modellblokker resirkuleres nesten identisk hvert
år** og utgjør bokas ryggrad — (1) beslutning under risiko/prospektteori (9/10
sett), (2) tidsinkonsistens/(β,δ) (10/10), (3) sosiale preferanser/ultimatum/
Fehr–Schmidt (10/10), (4) reciprocity/intensjonsbasert fairness (7/10, voksende)
— pluss en roterende fjerdeplass som veksler mellom begrenset rasjonalitet/Bayes/
kind–wicked og kollektivgode-normmodellen. Faget er en **genuin ~50/50-hybrid**
mellom regning og drøfting, men med én ufravikelig regel: **alt er
modellforankret**. Selv deloppgaver som eksplisitt sier «verbal discussion is
sufficient» krever at svaret resonneres *innenfor* riktig modell (PT-referansepunkt,
FS-ulikhet, reciprocity-vennlighet) — det er ikke fri synsing. Boka driller
derfor tre ting samtidig i hvert teorikapittel: (a) etabler **egeninteresse-
benchmarket** (Homo Economicus) *først*, (b) regn/utled atferdsmodellen, (c)
forklar/tolk et labfunn i modellens språk. Bokas viktigste enkeltferdighet:
**skille beslektede modeller** — særlig Fehr–Schmidt (utfallsbasert) fra
reciprocity (intensjonsbasert), som er fagets innebygde felle og et tilbakevendende
eksplisitt eksamenskrav.

### Kritisk regel A — MODELLFORANKRING (gjelder HELE boka)

Ingen deloppgave besvares med fri synsing. Hvert svar — også de «verbale» — skal
forankres i en navngitt modell med korrekt terminologi og notasjon. Bokas
standard er en **tredelt modell-drøfte-mal** (etableres i kap. 0.2, gjentas i
hvert teorikapittel):

1. **Benchmark først** — hva predikerer standardmodellen (Homo Economicus:
   forventet nytte med formuesintegrasjon / eksponentiell diskontering /
   delspillperfekt egeninteresse)? Dette er alltid utgangspunktet: atferdsøkonomi
   er *avviket* fra benchmarket, og avviket kan ikke beskrives før benchmarket er
   satt. (Sensorkrav, verifisert mønster: ultimatumoppgaver starter nesten alltid
   med «hvis begge er egeninteresserte …».)
2. **Modellen** — utled/regn atferdsmodellens prediksjon (PT-verdifunksjon,
   (β,δ)-tabell, FS-nytte, fairness-likevekt, normmodellens beste-respons). Vis
   mellomregning; metoden teller mer enn sluttallet.
3. **Tolkning/drøfting** — forklar avviket og tolk et empirisk funn i modellens
   språk; ved «no correct answers»-deler premieres koherens og relevans.

Der en deloppgave sier «verbal explanation is sufficient» droppes full algebra i
steg 2, men **aldri modellresonnementet**.

### Kritisk regel B — «BENCHMARK FØRST»-MALEN (gjelder HELE boka)

Hvert teorikapittel åpner atferdsdelen med standardmodellens prediksjon som egen,
merket blokk. De faste benchmarkene:

| Blokk | Homo Economicus-benchmark | Notasjon |
|---|---|---|
| Risiko/PT | Forventet nytte med formuesintegrasjon | $EU = \sum_i p_i\,u(W+x_i)$ |
| Tidsinkonsistens | Eksponentiell diskontering (DU-modellen) | $U_t = \sum_{s\ge t}\delta^{s-t}u_s$ |
| Sosiale preferanser | Delspillperfekt egeninteresse | responder aksepterer enhver $x_R>0$ |
| Reciprocity | Utfallsbasert egoisme / (evt. FS) | $U_i=x_i$ |
| Normmodell | Ingen sosial anerkjennelse | $s_i=0$ |
| Bayes/heuristikk | Korrekt bayesiansk oppdatering | $P(\text{syk}\mid\text{pos})$ |

Å hoppe rett på atferdsmodellen uten å etablere benchmarket er dokumentert
typisk feil (analysens §5 punkt 11) og koster poeng systematisk.

### Kritisk regel C — FEHR–SCHMIDT vs. RECIPROCITY (gjelder HELE boka; egen `warning` i kap. 0.2, 3.2, 4.1, 4.4)

Dette er fagets **innebygde felle** og testes gjentatte ganger eksplisitt (H2018
P3, H2020 P3, H2023 P3, H2024 P3, H2025 P4). Boka skal ha en gjennomgående
`warning`-blokk (samme kjerneinnhold, kapittel-tilpasset formulering):

- **Fehr–Schmidt (ulikhetsaversjon) er UTFALLSbasert.** Nytten avhenger bare av
  *fordelingen* av utbetalinger $(x_i, x_j)$, ikke av hvordan den oppstod. FS er
  **utfallsblind for intensjon**: samme utbetalingsvektor gir samme nytte
  uansett hvilke alternativer motparten hadde.
- **Reciprocity (gjensidighet) er INTENSJONSbasert.** Nytten avhenger av om
  motparten var *vennlig eller uvennlig*, målt mot de alternativene han faktisk
  hadde. Samme utbetaling kan gi ulik reaksjon avhengig av alternativsettet.
- **Kjernetesten (den avslørende):** samme responder reagerer *ulikt på samme
  utbetaling* når proposers alternativsett endres. **FS kan ikke forklare det;
  reciprocity kan.** Å påstå at FS forklarer *alt* i ultimatumspill, eller å
  blande de to modellene, er den klassiske strykfellen.
- **Prosedyre:** når en oppgave viser *to scenarier med lik utbetaling men ulik
  reaksjon*, er det et intensjonssignal → bruk reciprocity, ikke FS.

### Kritisk regel D — «SJEKK BEGGE TILFELLER»-PROSEDYREN (gjelder HELE boka; egen `warning` per relevant kapittel)

Deloppgavene er ofte konstruert for å teste en *kontrast*, og straffer å hoppe
over ett tilfelle. Bokas faste sjekkliste (analysens §4 punkt 3, §5 punkt 4):

| Blokk | Sjekk ALLTID begge | Hvorfor |
|---|---|---|
| Tidsinkonsistens | **naiv OG sofistikert** | de to gir samme faktiske handling ulik vei; sofistikert bruker baklengs induksjon |
| (β,δ)-timing | **kostbar OG behagelig** oppgave | fortegnet snur: kostbar utsettes, behagelig fremskyndes |
| Commitment/default | **opt-in OG opt-out** | velferds- og deltakelseseffekt er ulik |
| Normmodell | **$a=0$ OG $a=1$** | begge hjørner må testes som Nash-likevekt → typisk multiple likevekter |
| Ultimatum (binært) | **hvert tilbudsalternativ eksplisitt** | terskeltilbudet finnes bare ved å sjekke alle |
| Rabin/risiko | **småspill OG storspill** | inkonsistensen vises bare ved å sammenholde dem |

### Kritisk notasjonsregel (gjelder HELE boka)

Standardiser notasjon på tvers av kapitler (arkivet varierer parametere mellom
sett — boka lærer **metode, ikke tallverdier**):

- **Diskontering:** kvasi-hyperbolsk $U_t = u_t + \beta\sum_{s>t}\delta^{s-t}u_s$
  med $0<\beta\le 1$ (present bias $\beta<1$), $0<\delta\le 1$; eksponentiell
  $U_t=\sum_{s\ge t}\delta^{s-t}u_s$; uendelig levetid $\sum_{k\ge 0}\delta^k=1/(1-\delta)$.
- **Prospektteori:** $V=\sum_i \pi(p_i)\,v(x_i)$; $v$ definert over gevinst/tap
  **relativt til referansepunkt** $r$; $v$ konkav for gevinst, konveks for tap
  (refleksjon), brattere for tap ($\lambda>1$, tapsaversjon); beslutningsvekter
  $\pi(p)$ overvekter små $p$. Forventet nytte med formuesintegrasjon:
  $EU=\sum_i p_i\,u(W+x_i)$.
- **Endowment:** betalingsvilje $\text{WTP}$, mottaksvilje $\text{WTA}$; effekt
  = $\text{WTA}>\text{WTP}$.
- **Fehr–Schmidt:** $U_i = x_i - \alpha_i\max\{x_j-x_i,0\} - \beta_i\max\{x_i-x_j,0\}$
  med $\alpha_i\ge\beta_i\ge 0$, $\beta_i<1$ (misunnelse ≥ skyld). **α/β er ikke
  faste** — de oppgis per oppgave.
- **Fairness equilibrium (reciprocity):** $U_i = x_i + \kappa_{ij}\cdot\tilde\kappa_{ji}$,
  der $\kappa_{ij}$ = hvor vennlig $i$ er mot $j$ (målt mot midtpunktet av
  oppnåelige utfall) og $\tilde\kappa_{ji}$ = $i$s tro om $j$s vennlighet
  (Rabin / Dufwenberg–Kirchsteiger).
- **Normmodell:** $U_i = u(c_i)+v(G)+s_i$ med sosial anerkjennelse
  $s_i = g_i\cdot K\cdot a$, $a$ = andel bidragsytere (eksogen i beste-respons-
  steget), $g_i$ = individets bidrag, $G$ = totalt kollektivgode.
- **Bayes:** $P(\text{syk}\mid\text{pos}) = \dfrac{P(\text{pos}\mid\text{syk})P(\text{syk})}{P(\text{pos})}$;
  naturlige frekvenser som «tenk 1000 personer»-tre.
- **Spill:** proposer/responder; utbetalinger $x_i$; delspillperfekt likevekt =
  egeninteresse-benchmark. Homo Economicus = standardreferansen.

### Arketypevalg (dokumentert)

**HYBRID — «modellforankret drøfting/regning»**, base `DNA-regnefag.md`, lån fra
`DNA-drofting.md`. Begrunnelse: ECON4260 er verken rent regnefag (som econ2220)
eller rent drøftingsfag (som econ1220). ~45–50 % av poengene er regning/utledning
((β,δ)-tabeller, FS-nyttesammenlikninger, prospektverdi, Rabin, Bayes,
Nash/fairness-likevekt), ~45–50 % er drøfting/tolkning (endowment-debatt, FS vs.
reciprocity, kind–wicked, «hvorfor brukes EU fortsatt», eksperimentdesign). Boka
bruker derfor **regnefagets teori/drill/øvingseksamen-DNA som ryggrad** (faste
modeller som utledes og anvendes, akkurat som econ2220), men **importerer to
elementer fra drøftingsfaget**: (i) hvert teorikapittel har en obligatorisk
**«forklar/tolk labfunnet»-øvelse** (sjanger M) med eksperiment- og
pensumforankring, i drøftingsfagets ånd; (ii) drøftetunge kapitler (endowment,
FS-vs-reciprocity, kind–wicked, nudging) har en **kommentert A-/C-modellbesvarelse**
(lånt fra `DNA-drofting.md` sin modellbesvarelse-DNA) som viser hva som skiller
koherent modellforankret drøfting fra flat gjengivelse. Pensumforankringen
(navngitte artikler) er ekte men **utgave-sensitiv** — se §6.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (benchmark → atferdsmodell), IKKE frekvens;
frekvensen styrer *omfanget*. De fire faste blokkene (Del 1–4) er bokas ryggrad.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og modellhåndverk | 2 | Prioriteringsverktøyet + «benchmark først»-malen og modell-drøfte-malen som alt annet står på; kjerne i studieguiden. |
| 1 | Beslutning under risiko og prospektteori | 6 | Risiko/PT-paraplyen 9/10 sett (kun H2021 mangler); PT vs. EU, verdifunksjon, Rabin, endowment m/referansepunktdebatt → nivå 1 «perfekt» → 5 teorikapitler + drill. |
| 2 | Tidsinkonsistens og selvkontroll | 7 | **10/10 sett**, bærer sammen med Del 3 typisk 55–70 % av poengene; (β,δ)-tabell naiv/sofistikert, utlede β,δ, commitment, opt-in/opt-out, dual-self → nivå 1 «perfekt» → 6 teorikapitler + drill (bokas tyngste del). |
| 3 | Sosiale preferanser: ultimatum og Fehr–Schmidt | 4 | **10/10 sett**; ultimatum + egeninteresse-benchmark, FS-regning og avslagsterskel → nivå 1 «perfekt» → 3 teorikapitler + drill. |
| 4 | Reciprocity og intensjonsbasert rettferdighet | 4 | 7/10 og voksende (6 av 7 siste sett); intensjonsbasert fairness-likevekt + det eksplisitte FS-vs-reciprocity-skillet + billige forsikringsmodeller → nivå 1/2 → 3 teorikapitler + drill. |
| 5 | Begrenset rasjonalitet, Bayes og kind–wicked | 3 | Roterende fjerdeplass (3/10), men fast rotasjonskandidat; base-rate neglect, naturlige frekvenser, metodologisk labtolkning → nivå 2 «kunne» → 2 teorikapitler + drill. |
| 6 | Kollektive goder, normer og nudging | 3 | Den andre roterende fjerdeplassen (3/10); normmodell m/multiple likevekter + normer/nudging/paternalisme (broen fra Del 2) → nivå 2 «kunne» → 2 teorikapitler + drill. |
| 7 | Eksamenstrening | 5 | «Forklar/tolk labfunnet»-sjangeren + flervalgssupplement (H2017/H2019-regimet, beholdt beredskap) + 3 komplette øvingseksamener (3–4 Problems, engelsk-format). |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitlene ligger i temadelene sine** (1.6, 2.7, 3.4, 4.4, 5.3, 6.3),
   ikke i en samlet siste del, fordi de fire faste blokkene er 90–100 %-gjengangere
   som må drilles rett etter teorien — Del 7 beholder den tverrgående
   labtolknings-sjangeren, flervalgssupplementet og øvingseksamenene.
2. **Del 0 har to kapitler** (mot regnefagets ett): et rent eksamenskart (0.1) OG
   et eget håndverkskapittel (0.2) for «benchmark først»-malen, modell-drøfte-malen
   og de to fellene (FS-vs-reciprocity, sjekk-begge-tilfeller). Dette er importert
   fra `DNA-drofting.md` sin to-kapitters Del 0, fordi den ~50 % drøftetunge
   profilen krever eksplisitt håndverkstrening — analysens funn er at *metoden*
   (ikke tallverdiene) er det stabile.
3. **Hvert teorikapittel har en obligatorisk «forklar/tolk labfunnet»-øvelse
   (sjanger M)** i tillegg til regneoppgavene — importert fra drøftingsfaget.
   Dette er analysens eksplisitte bokimplikasjon (§7): «hvert teorikapittel både
   lærer regnemetoden og gir en forklar/tolk-labfunnet-øvelse».
4. **Flervalgs-/kortsvarssupplement er beholdt som eget treningskapittel (7.2)**
   selv om 2020–2025-regimet er essay/regning: formatet svingte 2016–2019 (Inspera
   m/flervalg og negativ scoring for gale kryss), formatet finnes i arkivet
   studentene øver på, og et plattformbytte kan bringe det tilbake. Holdes bevisst
   kompakt (beredskap, ikke hovedspor).
5. **Ingen egne teorikapitler for enkeltmodeller som forekom 1/10** (morally
   motivated, self-image/social-image): de dekkes kompakt inne i kap. 4.3 som
   «billige forsikringsmodeller» med samme verktøykasse som Del 3–4 — begrunnelsen
   gjentas for studenten i kap. 0.1. Boka bruker ikke kapittelplass på temaer som
   aldri har båret en oppgave.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–M) refererer
til oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** (β,δ)-timing-tabell naiv/sofistikert · **B** utlede/verifisere (β,δ) fra
indifferens · **C** commitment-betalingsvilje + default-politikk (opt-in/opt-out)
· **D** prospektteori vs. forventet nytte-kontrast · **E** prospektverdi-beregning
· **F** Rabin-kalibrering/EU-inkonsistens · **G** endowment-effekt design +
forklaring · **H** ultimatumspill + Fehr–Schmidt · **I** reciprocity/
intensjonsbasert fairness equilibrium · **J** kollektivgode-normmodell · **K**
begrenset rasjonalitet: Bayes + naturlige frekvenser + kind–wicked · **L**
sammensatt spill med sosiale preferanser (annen game) · **M** forklar/tolk
labfunnet (eksperimenttolkning, tverrgående). Prioritetsklasser: **perfekt**
(nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart og modellhåndverk

#### Kapittel 0.1: Eksamenskartet: slik testes ECON4260

- **id:** `econ4260-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste temaarkitekturen med fire modellblokker, frekvenstabellen, sjangerkatalogen A–M og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 10 lesne sett. Skal gjengi: (i) **formen**: 3-timers skriftlig skoleeksamen **på engelsk**, A–F, ingen hjelpemidler unntatt ordbok; svar kan gis på skandinavisk eller engelsk; **3–4 store «Problems»** med oppgitt prosentvekt, deloppgaver teller ofte likt (eksplisitt V2016, H2020–H2022); rådet «les hele eksamen først, prioriter det du kan — god karakter uten å løse alt»; (ii) **formatutviklingen**: papir-essay (V2016) → Inspera med flervalg + negativ scoring for gale kryss (H2017–H2019) → **stabilt essay/regne-regime 2020–2025**; boka kalibreres mot 2020–2025 men beholder flervalgssupplement (kap. 7.2) fordi plattformbytte kan reversere; (iii) **den faste temaarkitekturen**: fire blokker resirkuleres nesten identisk — tidsinkonsistens/(β,δ) **10/10**, sosiale preferanser (ultimatum/FS/reciprocity) **10/10**, risiko/prospektteori **9/10**, og en roterende fjerdeplass (bayes/kind–wicked *eller* normmodell); (iv) **frekvenstabellen** (fra analysen §2): commitment/default 8/10, FS anvendt 8/10, reciprocity 7/10, endowment 4/10, Rabin 4/10, bayes/kind–wicked 3/10, normmodell 3/10, dual-self 3/10, morally motivated 1/10, self-image 1/10; (v) **kjernebudskapet om usikkerhet**: temavalg er høy-sikker prognose, oppgaveformulering er lav-sikker — **lær metoden, ikke tallverdiene**; parametere (α/β i FS, β/δ i diskontering, verdifunksjoner) varierer per sett og ingen enkeltverdi er «fasit»; (vi) at det **ikke finnes sensorveiledning** i arkivet → alle sensorkrav er utledet (behandles som velbegrunnet hypotese).
- **Innholdskontrakt:** Sjangerkatalogen A–M presenteres som studentens sjekkliste med frekvens per sjanger (A ~hvert år, B fast oppstart, C 8/10, D 6/10 eget tema, E flere sett, F 4/10, G 4/10, H 6/10 ultimatum + 8/10 FS, I 7/10 voksende, J 3/10, K 3/10, L sjelden, M vevd inn ~7/10). **Prognose for neste ordinære eksamen** (fra analysen §7): med svært høy sikkerhet én tidsinkonsistens-oppgave (timing-tabell + commitment/default) og én sosiale-preferanser-oppgave (ultimatum/FS + reciprocity-kontrast); med høy sikkerhet én risiko/PT-oppgave (via endowment, Rabin eller Lotto); fjerdeplassen: bayes/kind–wicked *eller* normmodellen. **Begrunnelse for utelatelsene** (studenten skal slippe å lure): morally motivated preferences og self-image/social-image forekom 1/10 hver — de dekkes kompakt i kap. 4.3, ikke egne kapitler. **Tospråklig oppmerksomhet**: eksamen er på engelsk, så nøkkeltermer læres tospråklig fra start (kort teaser av begrepsbanken fra analysen §6). Avslutt med leseplan: Del 1–4 «må perfekt», Del 5–6 «må kunne» (fyller fjerdeplassen), Del 7 trening; egen boks: «hvis du bare rekker to blokker, ta tidsinkonsistens og sosiale preferanser — de er i alle 10 sett».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt fire Problems à 25 % og 180 minutter — sett opp tidsbudsjett når deloppgavene teller likt» og «hvilke to blokker sikrer du først, og hvorfor».
- **Typiske feil:** Metafeilene: pugge én oppgaves α/β-verdier som «fasit»; hoppe over benchmarket; tro at «verbal discussion sufficient» betyr fri synsing; nedprioritere de to obligatoriske blokkene til fordel for sjeldne modeller.
- **Quiz: 12 · Flashcards: 18** (form, temaarkitektur, frekvenser, sjangre, tospråklige kjernetermer)

#### Kapittel 0.2: Modellhåndverket: benchmark først, modellforankret drøfting og de to fellene

- **id:** `econ4260-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ4260-0-1`
- **Kapitteltype:** håndverk (eksamenskart-utvidelse)
- **description:** De tre håndverkene som bærer alle karakterer: «benchmark først»-malen, den tredelte modell-drøfte-malen, og de to gjennomgående fellene (Fehr–Schmidt vs. reciprocity; sjekk begge tilfeller).
- **Eksamensbelegg:** Metakapittel — destillert fra sensorkravene (analysen §4) og de innebygde fellene (§5). Belegg: (i) modellforankring i alt, også «verbale» deler (H2021, H2024, H2025 sier «verbal explanation sufficient» men forventer modellresonnement); (ii) egeninteresse-benchmarket etableres nesten alltid *først* (ultimatumoppgaver starter med «hvis begge er egeninteresserte …», V2016 P3b, H2020 P3b–c, H2025 P4a); (iii) FS-vs-reciprocity-skillet er eksplisitt eksamenskrav i 5 sett; (iv) «sjekk begge tilfeller» er innebygd i oppgavestrukturen (naiv+sofistikert, kostbar+behagelig, opt-in+opt-out, a=0+a=1); (v) «no correct answers»-deler premierer koherens (H2018 P1e sier det rett ut). Prioritet: **perfekt** (leses av alle før Del 1).
- **Innholdskontrakt:** (i) **«Benchmark først»-malen** (kritisk regel B): tabellen over faste benchmark per blokk (EU m/formuesintegrasjon, eksponentiell diskontering, delspillperfekt egeninteresse, korrekt Bayes); mal for hvordan man skriver benchmark-avsnittet før atferdsmodellen. (ii) **Den tredelte modell-drøfte-malen** (kritisk regel A): benchmark → modell (utled/regn, vis mellomregning) → tolkning/drøfting; hva «verbal discussion is sufficient» tillater (dropp algebra) og krever (behold modellresonnement); mal for «no correct answers»-deler (struktur + relevante mekanismer premieres). (iii) **FS-vs-reciprocity-fellen** (kritisk regel C, egen `warning`): utfallsbasert (FS) vs. intensjonsbasert (reciprocity); den avslørende testen (samme utbetaling, ulik reaksjon ved endret alternativsett); prosedyre for å oppdage intensjonssignal. (iv) **«Sjekk begge tilfeller»-prosedyren** (kritisk regel D, egen `warning`): tabellen (naiv+sofistikert, kostbar+behagelig, opt-in+opt-out, a=0+a=1, hvert tilbudsalternativ, småspill+storspill). (v) **Kommentert A-/C-eksempel** (lånt fra `DNA-drofting.md`): samme lille drøftespørsmål besvart flatt (C: gjengivelse uten modellforankring) og koherent (A: benchmark + modell + tolkning), med margnotater om gapet.
- **Oppgavesjangre:** Fundament for M og alle drøftedeler. Mønstereksempel (omskrevet): «En responder avslår 3 av 10 i ett ultimatumspill, men aksepterer 3 av 10 i et annet der proposer *måtte* velge mellom 3/10 og 1/10. (a) Vis at Fehr–Schmidt gir samme prediksjon i begge spill. (b) Forklar med reciprocity-språk hvorfor reaksjonen kan bli ulik. (c) Hvilken modell støtter dataene?»
- **Typiske feil:** Fri synsing i drøftedeler uten navngitt modell; hoppe over benchmarket; anta at FS forklarer alt; hoppe over ett tilfelle i kontrastoppgaver; gjenta modellens navn uten å bruke mekanismen.
- **Quiz: 12 · Flashcards: 18** (benchmark-malen, modell-drøfte-malen, de to fellene, A/C-skillet)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Beslutning under risiko og prospektteori *(prioritet: PERFEKT — 9/10 sett)*

#### Kapittel 1.1: Forventet nytte og Homo Economicus under risiko

- **id:** `econ4260-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-0-2`
- **Kapitteltype:** teori (benchmark)
- **description:** Standardmodellen risiko måles mot: forventet nytte med formuesintegrasjon, risikoaversjon via konkavitet — og hvorfor den er referansepunktet for hele Del 1.
- **Eksamensbelegg:** Benchmark-kapittel for hele risikoblokken (9/10 sett). EU med formuesintegrasjon er referansen i PT-vs-EU-kontrasten (H2020 P1a, H2024 P1a) og i Rabin-kalibreringen (H2018, H2023). Sjelden testet *alene*, men å ikke kunne etablere det er dokumentert typisk feil (§5 punkt 11). Prioritet: **perfekt** (bærebjelke).
- **Innholdskontrakt:** Forkunnskaper fra [forventet nytte i econ1210](/bok/econ1210/econ1210-8-1) *(verifiser at kapitlet finnes — ellers lenk til nærmeste, eller behandl selvstendig)*. **Forventet nytte** $EU=\sum_i p_i\,u(W+x_i)$ med **formuesintegrasjon**: nytten defineres over *sluttformue* $W+x_i$, ikke over gevinsten isolert — dette er kjernekontrasten mot PT (der referansepunktet er nullpunkt). Risikoaversjon = konkav $u$; sikkerhetsekvivalent og risikopremie kort. **Uavhengighetsaksiomet** navngis (brytes av Allais — forbereder kap. 1.3). Poeng som brukes videre: EU behandler formue additivt og har ett globalt referansepunkt (null formue), mens PT rammer valg relativt til status quo. Kort «hvorfor EU fortsatt brukes»-avsnitt (parsimoni, normativ appell) — dette er en dokumentert drøftevinkel.
- **Oppgavesjangre:** Benchmark-fundament for D–F + M. Mønstereksempel (omskrevet): «En person med formue $W$ og konkav nyttefunksjon $u$ vurderer et spill. Sett opp forventet nytte med formuesintegrasjon, forklar hva risikoaversjon betyr i modellen, og redegjør for hvorfor uavhengighetsaksiomet er avgjørende.» + M-øvelse: «Forklar hvorfor en ren EU-maksimerer aldri kan vise en refleksjonseffekt.»
- **Typiske feil:** Definere nytte over gevinst i stedet for sluttformue (da er det ikke lenger EU-benchmarket); blande risikoaversjon (konkavitet) med tapsaversjon (PT-begrep); hoppe over benchmarket når atferdsmodellen skal presenteres.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: Prospektteori: verdifunksjon, referansepunkt og tapsaversjon

- **id:** `econ4260-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-1-1`
- **Kapitteltype:** teori
- **description:** Prospektteoriens fire byggeklosser — referansepunkt, refleksjon, tapsaversjon og beslutningsvekter — og kontrasten mot forventet nytte.
- **Eksamensbelegg:** Sjanger D som eget tema i 6/10 sett (H2017–H2020, H2023, H2024). Dokumenterte krav: forklar PT-elementene og **kontrast mot EU med formuesintegrasjon** (H2020 P1a, H2024 P1a); anvend på observert mønster — refleksjons-/rammeeffekt (H2024 P1b). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Benchmark først**: gjenta EU-prediksjonen fra kap. 1.1. **Prospektteoriens fire elementer** (definer hver, tospråklig): (1) **referansepunkt** (reference point) — verdi måles som gevinst/tap relativt til $r$, ikke sluttformue; (2) **refleksjonseffekt** (reflection effect) — $v$ konkav for gevinst (risikoavers), konveks for tap (risikosøkende); (3) **tapsaversjon** (loss aversion) — $v$ brattere for tap, $\lambda>1$; (4) **beslutningsvekter** (decision weights) $\pi(p)$ — overvekter små sannsynligheter (behandles fullt i kap. 1.3). **Verdifunksjonen** $v(x)$ med typisk form (konkav/konveks/kink i origo) — beskriv figuren i ord. **Kontrasten mot EU**: samme valg gir ulik prediksjon fordi PT har flyttbart referansepunkt og separat behandling av gevinst/tap; rammeeffekter (framing) oppstår når referansepunktet manipuleres. **M-øvelse innebygd**: tolk et rammeeksperiment (samme utfall presentert som gevinst vs. tap gir ulikt valg) i PT-språk.
- **Oppgavesjangre:** D + M. Mønstereksempel (omskrevet): «Forklar prospektteoriens verdifunksjon (referansepunkt, refleksjon, tapsaversjon) og kontrast den mot forventet nytte med formuesintegrasjon. Bruk deretter modellen til å forklare hvorfor en person kan velge risikofylt når utfallet rammes som et tap, men trygt når det rammes som en gevinst.»
- **Typiske feil (egen `warning`):** **Glemme referansepunktet** — regne verdi over sluttformue så PT kollapser til EU og refleksjon/endowment forsvinner (§5 punkt 2); blande refleksjon (kurvens krumning) med tapsaversjon (kurvens helning/kink); påstå at PT «alltid» gir risikosøking (bare for tap).
- **Quiz: 25 · Flashcards: 32** (tospråklig termtetthet: referansepunkt/reference point osv.)

#### Kapittel 1.3: Beslutningsvekter og prospektverdi-beregning

- **id:** `econ4260-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4260-1-2`
- **Kapitteltype:** teori
- **description:** Regnesjangeren i PT: sett opp prospektverdien $V=\sum\pi(p)v(x)$, bruk sannsynlighetsvekting — og forklar Allais- og Lotto-paradokset.
- **Eksamensbelegg:** Sjanger E i flere sett (H2017 P3 prospektverdi-beregning; H2024 P1d konsistens-sjekk); Allais (H2017 P9), Lotto-paradokset (H2023 P1e, H2024 P1c). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Beslutningsvekter** $\pi(p)$: overvekter små $p$, undervekter moderate/høye; ikke-lineære i sannsynlighet (til forskjell fra EUs lineære $p$). **Prospektverdi-beregningen** steg for steg: $V=\pi(p)v(x_1)+\pi(1-p)v(x_2)$ gitt oppgitt $v$ og $\pi$; sammenlign to prospekter ved å regne begges $V$. **Allais-paradokset**: vis at valgmønsteret bryter uavhengighetsaksiomet (EU-inkonsistent) men er konsistent med PT via sannsynlighetsvekting — regn eksplisitt. **Lotto-paradokset** (motsatt vei): folk *kjøper* lodd med negativ forventet verdi — overvekting av bittesmå $p$ i gevinstdomenet forklarer det, og her fanger PT det EU ikke gjør (men EU fanger andre ting bedre — nyanser begge veier). **Konsistens-sjekk**: avgjør om et observert valg er forenlig med PT (H2024 P1d-typen).
- **Oppgavesjangre:** E + D. Mønstereksempel (omskrevet): «Gitt verdifunksjonen $v(x)=x^{0{,}88}$ for $x\ge 0$ og $v(x)=-2{,}25(-x)^{0{,}88}$ for $x<0$, og beslutningsvekter $\pi(0{,}1)=0{,}18$, $\pi(0{,}9)=0{,}71$: regn prospektverdien av spillet (vinn 100 med 10 %, tap 10 ellers) og avgjør om personen deltar. Forklar deretter hvorfor en EU-maksimerer og en PT-maksimerer kan gjøre ulikt valg.»
- **Typiske feil:** Bruke rå sannsynligheter $p$ i stedet for beslutningsvekter $\pi(p)$; regne $v$ over sluttformue; glemme tapsaversjonsfaktoren $\lambda$ i tapsleddet; påstå Allais «motbeviser» EU uten å vise brudd på uavhengighetsaksiomet.
- **Quiz: 22 · Flashcards: 25**

#### Kapittel 1.4: Rabin-kalibrering og EU-inkonsistens

- **id:** `econ4260-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-1-1`
- **Kapitteltype:** teori
- **description:** Rabins argument: moderat risikoaversjon i småspill ved alle formuesnivåer tvinger EU til absurd risikoaversjon i storspill — regnehåndverket og poenget.
- **Eksamensbelegg:** Sjanger F i 4/10 sett (H2017, H2018 P1, H2023 P1, H2024). Dokumenterte krav: normaliser $u$ over sluttformue, regn en implisert verdi fra indifferens, og vis inkonsistensen (H2018 P1a–d, H2023 P1a–c). Ekstremtilfellet: avslår gunstig storspill der gevinsten = oljefondet (H2023 P1c). Prioritet: **kunne–perfekt** (fast risiko-variant).
- **Innholdskontrakt:** **Oppsettet**: modeller nytte over **sluttformue** $u(W)$ (EU-benchmarket, ikke PT). **Normaliseringen**: sett f.eks. $u(W_0)=0$, $u(W_0-100)=-1$; bruk indifferens mot et småspill til å regne $u(W_0+100)$ (vis mellomregningen). **Argumentets kjerne**: hvis en EU-maksimerer avslår et gunstig småspill (f.eks. 50/50 tap 100 / gevinst 110) ved *alle* formuesnivåer, tvinger konkaviteten $u$ til å flate ut så raskt at hun også avslår enormt gunstige storspill — et absurd resultat. **Sjekk begge (kritisk regel D)**: småspill OG storspill må holdes sammen for at inkonsistensen vises. **Konklusjonen**: mønsteret er inkonsistent med EU, men uproblematisk for PT (tapsaversjon rundt referansepunktet forklarer småspill-avvisning uten global konkavitet). Kort pensumforankring: Rabin (2000), Rabin & Thaler (2001) *(verifiser)*.
- **Oppgavesjangre:** F + M. Mønstereksempel (omskrevet): «En person avslår et 50/50-spill der hun taper 100 eller vinner 105, uansett startformue. Normaliser nyttefunksjonen, regn $u(W_0+105)$ fra indifferensen, og vis hvilken risikoaversjon dette impliserer for et 50/50-spill om ±100 000. Forklar hvorfor prospektteori ikke rammes av samme problem.»
- **Typiske feil:** Modellere over gevinst i stedet for sluttformue (da mister argumentet grepet); glemme «ved alle formuesnivåer»-forutsetningen; regne bare småspillet uten storspill-implikasjonen; presentere resultatet som «EU er feil» i stedet for «EU er inkonsistent med dette atferdsmønsteret».
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.5: Endowment-effekten: WTA–WTP, referansepunkt og forsøksdesign

- **id:** `econ4260-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-1-2`
- **Kapitteltype:** teori (drøftetung)
- **description:** Hvorfor folk krever mer for å gi fra seg et gode enn de vil betale for det — statisk vs. forventningsbasert referansepunkt, og Plott–Zeiler-kritikken.
- **Eksamensbelegg:** Sjanger G i 4/10 sett (V2016, H2020, H2022, H2025). Tungt pensumforankret og drøftetung. Dokumenterte krav: forklar WTA–WTP-gapet og de to forsøksdesignene; standardteori uten effekt predikerer ~50 % bytte (H2022 P1a); forklar via statisk vs. **forventningsbasert referansepunkt** (Kőszegi–Rabin) hvorfor treningsrunde/show-up-fee fjerner gapet (H2020 P1c, H2022 P1b, H2025 P2c); nevn Plott & Zeiler-kritikken (designartefakt) (H2022 P1c, H2025 P2b). Prioritet: **perfekt** (drøftetyngdepunkt i risikoblokken).
- **Innholdskontrakt:** **Benchmark først**: standard forbruksteori uten endowment predikerer at tilfeldig tildeling av et gode gir ~50 % bytte (ingen tilknytning til det man tilfeldigvis fikk). **Endowment-effekten**: $\text{WTA}>\text{WTP}$; de to klassiske designene (bytte-design med for få handler; verdsettingsdesign med WTA > WTP). **To forklaringer via referansepunkt**: (i) **statisk referansepunkt** = status quo → tapsaversjon gjør det å gi fra seg godet til et tap; (ii) **forventningsbasert referansepunkt** (Kőszegi–Rabin, expectations-based) → referansepunktet er hva man *forventer* å eie; en treningsrunde/tvungen handel/show-up-fee endrer forventningen og **utraderer gapet** — dette er det avgjørende diskriminerende funnet. **Plott–Zeiler (2005)**: gapet kan være et **designartefakt** (ikke-insentivkompatibel utspørring) — et konkurrerende *ikke-preferansebasert* syn. **Kommentert A-/C-modellbesvarelse** (lånt fra `DNA-drofting.md`): drøft «er endowment-effekten en ekte preferanse?» på C-nivå (gjengivelse) vs. A-nivå (skille de tre posisjonene, koble til det diskriminerende show-up-fee-funnet). Pensumforankring: Kahneman/Knetsch/Thaler (1991), Ericson & Fuster (2014), Isoni/Loomes/Sugden (2011), Plott & Zeiler (2005) — **(verifiser mot gjeldende pensumliste)**.
- **Oppgavesjangre:** G + M. Mønstereksempel (omskrevet): «Deltakere som tilfeldig får en kaffekopp, krever i snitt mer for å selge den enn andre vil betale for å kjøpe den. (a) Hva predikerer standardteori uten endowment-effekt? (b) Forklar gapet med statisk og med forventningsbasert referansepunkt. (c) I ett design forsvinner gapet etter en treningsrunde — hvilken forklaring støttes? (d) Drøft Plott & Zeilers innvending om at gapet er et designartefakt.»
- **Typiske feil (egen `warning`):** **Blande statisk og forventningsbasert referansepunkt** — man må vite at det *forventningsbaserte* forklarer at treningsrunde/show-up-fee fjerner gapet (§5 punkt 9); glemme benchmark-prediksjonen (~50 % bytte); presentere Plott–Zeiler som «bevis» i stedet for et konkurrerende syn; drøfte uten pensumforankring.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 1.6: Drill: risiko- og prospektteori-oppgaven

- **id:** `econ4260-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `econ4260-1-5`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på risiko-oppgaven: fra EU-benchmark til PT-anvendelse, prospektverdi, Rabin og endowment-drøfting i én kjede.
- **Eksamensbelegg:** Dekker sjangrene D (6/10), E, F (4/10), G (4/10) — samlet risiko/PT-paraplyen (9/10). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) etabler EU-benchmarket (formuesintegrasjon); 2) presenter PT-elementene relevante for oppgaven; 3) regn prospektverdien / Rabin-normaliseringen / WTA–WTP der oppgaven krever tall; 4) tolk avviket i modellens språk; 5) drøft empiri/design med pensumforankring der oppgaven ber om det; 6) sjekk begge tilfeller (småspill+storspill; statisk+forventningsbasert referansepunkt). **Gjennomregnet eksamenscase** med sensor-margnotater (hva som gir uttelling: benchmark satt, mellomregning vist, referansepunkt eksplisitt, pensum navngitt). **10–14 oppgaver på eksamensnivå** som roterer: PT vs. EU-forklaring × prospektverdi-regning × Allais/Lotto × Rabin-kalibrering × endowment-design × rammeeffekt — nyskrevne tall og case (forsikring, lodd, gadget-bytte, aksjevalg).
- **Oppgavesjangre:** D, E, F, G, M i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Sett opp EU-prediksjonen. (b) Forklar PT-verdifunksjonen. (c) Regn prospektverdien av spillet. (d) Vis at valgmønsteret er EU-inkonsistent men PT-konsistent. (e) Drøft hva et show-up-fee-eksperiment ville avsløre om referansepunktet.»
- **Typiske feil:** Hele §1-repertoaret samlet: glemme referansepunkt/benchmark; rå $p$ i stedet for $\pi(p)$; Rabin over gevinst; forveksle statisk/forventningsbasert referansepunkt; drøfte uten modell.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A EU-benchmark + PT-verdifunksjon med kontrast, sjanger D; 1.B prospektverdi-beregning + Allais/Lotto, sjanger E; 1.C Rabin-kalibrering med sjekk av småspill+storspill, sjanger F; 1.D full risiko-oppgave på eksamensnivå inkl. endowment-drøfting med referansepunktdebatt, sjanger D+E+F+G+M).

---

### Del 2 — Tidsinkonsistens og selvkontroll *(prioritet: PERFEKT — 10/10 sett; bokas tyngste del)*

#### Kapittel 2.1: Eksponentiell diskontering: DU-modellen som benchmark

- **id:** `econ4260-2-1` · **number:** 2.1 · **estimatedMinutes:** 40 · **prerequisites:** `econ4260-0-2`
- **Kapitteltype:** teori (benchmark)
- **description:** Standardmodellen for valg over tid: neddiskontert nytte (Samuelson) med konstant $\delta$ — og hvorfor den gir tidskonsistente valg.
- **Eksamensbelegg:** Benchmark-kapittel for hele tidsinkonsistensblokken (10/10 sett). Eksponentiell diskontering er referansen (β,δ)-modellen måles mot; uendelig-levetid-formelen $\sum\delta^k=1/(1-\delta)$ oppgis i settene (H2020, H2022). Prioritet: **perfekt** (bærebjelke).
- **Innholdskontrakt:** **DU-modellen (Discounted Utility)**: $U_t=\sum_{s\ge t}\delta^{s-t}u_s$, konstant diskonteringsfaktor $\delta\in(0,1]$. **Tidskonsistens**: en plan som er optimal sett fra $t$ forblir optimal sett fra $t+1$ — vis at forholdet mellom to fremtidige perioder er $\delta$ uansett når man vurderer (ingen preferansereversering). **Nåverdiregning**: kalkulatorfrie typetall; uendelig strøm $\sum_{k\ge 0}\delta^k=1/(1-\delta)$ (utled og bruk). Diskonteringsfaktor vs. diskonteringsrate ($\delta=1/(1+\rho)$). Poeng som brukes videre: eksponentiell diskontering har **konstant** relativ vekt mellom nabo-perioder → ingen present bias; alt avvik i Del 2 er brudd på nettopp dette.
- **Oppgavesjangre:** Benchmark for A–C. Mønstereksempel (omskrevet): «En agent diskonterer eksponentielt med $\delta=0{,}9$. Regn nåverdien av å motta 100 nytteenheter om to perioder, og av en evig strøm på 10 per periode fra neste periode. Vis at agenten er tidskonsistent: en plan lagt i dag revideres ikke i morgen.»
- **Typiske feil:** Blande diskonteringsfaktor og -rate; feil eksponent i $\delta^{s-t}$ (telle fra feil periode); tro at eksponentiell diskontering kan gi preferansereversering; regnefeil i den geometriske rekken.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.2: Kvasi-hyperbolsk diskontering: (β,δ)-modellen og present bias

- **id:** `econ4260-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-2-1`
- **Kapitteltype:** teori
- **description:** Ett ekstra ledd $\beta$ som skaper nåtidsskjevhet — og hvordan man utleder $\beta$ og $\delta$ fra observert indifferens.
- **Eksamensbelegg:** Sjanger B (fast oppstart): utled/verifiser (β,δ) fra indifferens (H2018 P2a, H2021 P2a, H2022 P2a–b, H2025 P3b); finn x-verdier som gir present bias. Kjernen i 10/10-blokken. Prioritet: **perfekt**.
- **Innholdskontrakt:** **(β,δ)-modellen** (kvasi-hyperbolsk / quasi-hyperbolic): $U_t=u_t+\beta\sum_{s>t}\delta^{s-t}u_s$ med $0<\beta\le 1$. **Present bias** (nåtidsskjevhet) $\beta<1$: alt i fremtiden nedvektes ekstra med $\beta$ relativt til nået, men innbyrdes diskonteres fremtidsperioder eksponentielt med $\delta$ → «i dag vs. i morgen» vektes hardere enn «om ett år vs. om ett år + én dag». **Utledningen fra indifferens** steg for steg: gitt at DM er indifferent mellom X nå, Y om én periode, Z om to → sett opp indifferenslikningene og løs for $\beta$ og $\delta$ (vis algebra). Variant: finn hvilke x-verdier som gir present bias (H2025 P3b-typen). **Tidsinkonsistens som konsekvens**: fordi $\beta$ bare rammer «nå vs. senere», snur preferansen når «senere» blir «nå» — utled preferansereverseringen eksplisitt (bro til kap. 2.3). Sammenlign med eksponentiell ($\beta=1$).
- **Oppgavesjangre:** B. Mønstereksempel (omskrevet): «En student er indifferent mellom 100 kr i dag og 120 kr om én uke, og mellom 100 kr om én uke og 108 kr om to uker. Utled $\beta$ og $\delta$ i den kvasi-hyperbolske modellen, og forklar hva verdien av $\beta$ sier om nåtidsskjevhet.»
- **Typiske feil:** Behandle $\beta$ som en vanlig periodediskontering (den rammer bare skillet nå/senere, ikke innbyrdes fremtid); sette opp indifferenslikningene fra feil periode; glemme at $\beta=1$ gjenoppretter eksponentiell modell; regnefeil ved å løse to likninger.
- **Quiz: 22 · Flashcards: 27**

#### Kapittel 2.3: Timing-tabellen: naiv mot sofistikert

- **id:** `econ4260-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4260-2-2`
- **Kapitteltype:** teori
- **description:** Kjernesjangeren: sett opp den evaluerte utfallstabellen, regn $U_t$ fra riktig rad, og finn hva en naiv og en sofistikert agent faktisk gjør.
- **Eksamensbelegg:** Sjanger A (kjernesjanger, ~hvert år). Eksplisitt tabellformat i H2024 P2a og H2025 P3 (rad = evalueringsperiode $t$, kolonne = gjennomføringsperiode $\tau$). **Sjekk begge fortegn**: kostbar oppgave (utsettes) OG behagelig oppgave (fremskyndes) — H2017 P6 vs. P7, H2025 P3e. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Timing-tabellen** (bokas standardoppsett): rader = evalueringsperiode $t$, kolonner = gjennomføringsperiode $\tau$; hver celle = nytten $U_t$ av å gjennomføre i $\tau$ *sett fra* $t$, regnet med $U_t=u_t+\beta\sum_{s>t}\delta^{s-t}u_s$. **Naiv agent** (naïve): velger det som ser best ut nå, *tror* fremtidige selv følger planen → re-evaluerer i hver periode, utsetter (eller fremskynder) helt til preferansen snur. **Sofistikert agent** (sophisticated): **baklengs induksjon** — forutser egne fremtidige avvik og planlegger rundt dem. **De to gir samme faktiske gjennomføringsperiode** (viktig kontroll), men via ulik resonneringsvei. **Kritisk regel D — sjekk begge fortegn** (egen `warning`): for en **kostbar** oppgave (umiddelbar kostnad, fremtidig gevinst) utsetter present bias; for en **behagelig** oppgave (umiddelbar gevinst, fremtidig kostnad) fremskynder den — fortegnet på $u$ i nå-perioden snur konklusjonen. Gjennomregnet 3–4-perioders eksempel begge veier.
- **Oppgavesjangre:** A. Mønstereksempel (omskrevet): «En agent med $\beta=0{,}5$, $\delta=1$ kan gjøre en kjedelig, men nyttig oppgave i én av fire perioder; kostnaden faller i gjennomføringsperioden og gevinsten kommer helt til slutt. (a) Sett opp den evaluerte utfallstabellen. (b) Når gjennomfører en naiv agent? En sofistikert? (c) Gjenta for en oppgave som er behagelig nå men kostbar senere, og forklar hvorfor fortegnet snur konklusjonen.»
- **Typiske feil (egen `warning`):** **Feil evalueringsperiode** — sette inn punktverdier eller evaluere fra feil rad i stedet for å regne $U_t$ på nytt i hver periode (§5 punkt 3); behandle naiv som om han forutser avvik (det gjør bare den sofistikerte); **hoppe over ett fortegn** (bare kostbar, ikke behagelig); tro at naiv og sofistikert alltid gjør *ulikt* (samme faktiske handling, ulik vei).
- **Quiz: 25 · Flashcards: 27**

#### Kapittel 2.4: Commitment: hvem betaler for binding, og hvorfor

- **id:** `econ4260-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ4260-2-3`
- **Kapitteltype:** teori
- **description:** Forpliktelsesmekanismer: sammenlign nytte med og uten binding, og vis hvorfor den sofistikerte betaler mens den naive ikke gjør det.
- **Eksamensbelegg:** Sjanger C (8/10 for commitment/default samlet). Dokumentert kjerne: **sofistikert betaler** for commitment (forutser eget avvik), **naiv gjør ikke** (tror han ikke trenger det) — «hvem betaler og hvorfor» (V2016 P2e, H2018 P2b, H2021 P2d–e, H2024 P2d). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Forpliktelsesmekanisme** (commitment device): et virkemiddel som binder fremtidige selv (fjerner en fristende opsjon, ilegger en straff). **Betalingsviljen** utledes: sammenlign forventet nytte *med* binding mot *uten* binding, sett fra beslutningstidspunktet. **Kjerneresultatet — sjekk begge beslutningstakere (kritisk regel D)**: den **sofistikerte** verdsetter binding fordi han forutser at et fremtidig selv ellers vil avvike → positiv betalingsvilje; den **naive** tror fremtidige selv følger planen → ser ingen verdi i binding → betaler ikke. Regn betalingsviljen i et konkret (β,δ)-eksempel. Velferdsnyansen: binding kan hjelpe agenten mot seg selv, men kan også skade (hvis smaken faktisk endres) — kort. Bro til default-politikk (kap. 2.5) og nudging (kap. 6.2).
- **Oppgavesjangre:** C + M. Mønstereksempel (omskrevet): «En agent kan låse sparepengene i en konto uten uttak til neste periode, mot et lite gebyr. (a) Regn betalingsviljen for bindingen for en sofistikert agent. (b) Vis at en naiv agent ikke betaler. (c) Forklar intuisjonen bak forskjellen.»
- **Typiske feil (egen `warning`):** **La naiv betale for commitment** — den klassiske ombyttingen; naiv tror han ikke trenger binding, bare den sofistikerte betaler (§5 punkt 5); regne betalingsviljen fra feil periode; glemme å sammenligne mot «uten binding»-alternativet.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.5: Default-politikk: opt-in mot opt-out

- **id:** `econ4260-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-2-4`
- **Kapitteltype:** teori (hybrid: regning + velferdsdrøfting)
- **description:** Standard-effekten som politikk: analyser deltakelse og velferd under frivillig påmelding (opt-in) og tvungen med fritak (opt-out) — begge tilfeller.
- **Eksamensbelegg:** Sjanger C-default-variant (del av 8/10). Dokumenterte krav: opt-in (frivillig påmelding) vs. opt-out (tvungen med fritak) med liten kostnad → analyser velferds- og deltakelseseffekt **for begge typer** (H2020 P2d–e, H2022 P2e–f, H2023 P2d–e). Broen til nudging/paternalisme. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Standard-effekt (default effect)**: det utfallet man havner på uten aktivt valg påvirker atferd systematisk — present bias/treghet gjør at mange blir stående ved default-en. **Opt-in** (påmelding): default = ikke deltar; bare de som overvinner treghet melder seg på. **Opt-out** (reservasjon): default = deltar; bare de som aktivt reserverer seg står utenfor. **Kritisk regel D — analyser begge**: regn deltakelsesrate og velferd for hvert design, gitt en liten opt-kostnad og present bias; vis hvorfor opt-out typisk gir høyere deltakelse (naive/sofistikerte som ellers ville utsatt havner «riktig»). **Velferdsdrøftingen**: default-en hjelper de present-biased, men kan skade dem som faktisk har andre preferanser (feilklassifisering); paternalisme-spenningen (libertariansk paternalisme). Pensumforankring: Thaler & Sunstein-tradisjonen *(verifiser)*. Bro til kap. 6.2.
- **Oppgavesjangre:** C-default + M. Mønstereksempel (omskrevet): «Et pensjonsspareprogram kan innføres som frivillig påmelding eller som automatisk innmelding med rett til å reservere seg, begge med en liten tidskostnad ved å velge. (a) Analyser deltakelse og velferd under opt-in. (b) Gjør det samme under opt-out. (c) Drøft hvilket design som er best, og for hvem.»
- **Typiske feil:** Analysere bare det ene designet (§5 punkt 4); anta at opt-out alltid er velferdsforbedrende (feilklassifiserte tapere); blande default-effekt med ren commitment; hoppe over present bias-mekanismen som *forklarer* hvorfor default-en biter.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.6: Dual-self-modellen: planlegger og gjennomfører

- **id:** `econ4260-2-6` · **number:** 2.6 · **estimatedMinutes:** 40 · **prerequisites:** `econ4260-2-3`
- **Kapitteltype:** teori (forsikring)
- **description:** En alternativ modellering av selvkontroll: en langsiktig planlegger mot kortsiktige gjennomførere, med kontrollkostnad.
- **Eksamensbelegg:** Sjanger dual-self i 3/10 sett (H2018, H2021, H2024). Alternativ modell for samme fenomen (selvkontroll). Prioritet: **kunne** (fast rotasjonsvariant; billig forsikringskapittel).
- **Innholdskontrakt:** **Multi-self/dual-self-modellen** (planner–doer): en langsiktig **planlegger** (planner) med tidskonsistente preferanser mot periodiske **gjennomførere** (doers) som fristes av umiddelbar nytelse; planleggeren kan utøve **selvkontroll mot en kontrollkostnad**. Kontrasten mot (β,δ): (β,δ) er én agent med skjeve preferanser; dual-self er en intern konflikt mellom to «selv» med en eksplisitt kostnad ved viljestyrke. Enkelt oppsett: planleggerens problem er å velge kontrollnivå som balanserer gevinsten av selvkontroll mot kontrollkostnaden. Hvorfor det gir samme kvalitative prediksjoner (present bias-liknende atferd, verdi av commitment) via en annen mekanisme. Kort — dette er et forsikringskapittel, ikke et tyngdepunkt.
- **Oppgavesjangre:** dual-self + M. Mønstereksempel (omskrevet): «Modeller en dietts selvkontrollproblem som en planlegger mot en gjennomfører med kontrollkostnad. Vis hvordan kontrollkostnaden bestemmer om planleggeren lykkes, og sammenlign kvalitativt med (β,δ)-prediksjonen.»
- **Typiske feil:** Behandle dual-self og (β,δ) som identiske (ulik mekanisme, lik prediksjon); glemme kontrollkostnaden (da forsvinner konflikten); overkomplisere et forsikringstema.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 2.7: Drill: tidsinkonsistens-oppgaven

- **id:** `econ4260-2-7` · **number:** 2.7 · **estimatedMinutes:** 90 · **prerequisites:** `econ4260-2-6`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på (β,δ)-oppgaven: utled β,δ, bygg timing-tabellen, kjør naiv og sofistikert, regn commitment-betalingsvilje og analyser opt-in/opt-out.
- **Eksamensbelegg:** Dekker sjangrene A (~hvert år), B (fast oppstart), C (8/10) — samlet 10/10-blokken som bærer store deler av settet. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) etabler eksponentielt benchmark; 2) utled β,δ fra indifferens der oppgitt; 3) bygg timing-tabellen (rad $t$, kolonne $\tau$), regn $U_t$ fra riktig rad; 4) kjør naiv (re-evaluer hver periode) OG sofistikert (baklengs induksjon); 5) sjekk begge fortegn (kostbar + behagelig); 6) regn commitment-betalingsvilje for begge agenttyper; 7) analyser opt-in OG opt-out. **Gjennomregnet eksamenscase** med sensor-margnotater. **12–15 oppgaver på eksamensnivå** som roterer: ulike β,δ × kostbar/behagelig × naiv/sofistikert × commitment × default × dual-self — nyskrevne case (trening, sparing, lekselesing, røykeslutt, abonnement).
- **Oppgavesjangre:** A, B, C i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Utled β og δ. (b) Bygg utfallstabellen. (c) Når handler naiv? Sofistikert? (d) Gjenta for behagelig-versjonen. (e) Hvem betaler for binding? (f) Sammenlign opt-in og opt-out.»
- **Typiske feil:** Hele §2-repertoaret: feil evalueringsperiode; naiv som forutser avvik; hoppe over ett fortegn/ett design; la naiv betale for commitment.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (2.A utlede β,δ fra indifferens + present bias, sjanger B; 2.B timing-tabell naiv+sofistikert med begge fortegn, sjanger A; 2.C commitment-betalingsvilje + opt-in/opt-out-analyse, sjanger C; 2.D full tidsinkonsistens-oppgave på eksamensnivå inkl. dual-self-variant, sjanger A+B+C).

---

### Del 3 — Sosiale preferanser: ultimatum og Fehr–Schmidt *(prioritet: PERFEKT — 10/10 sett)*

#### Kapittel 3.1: Ultimatumspillet og egeninteresse-benchmarket

- **id:** `econ4260-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-0-2`
- **Kapitteltype:** teori (benchmark)
- **description:** Spillet, den delspillperfekte egeninteresse-løsningen — og hvorfor observert atferd bryter den.
- **Eksamensbelegg:** Sjanger H (ultimatum spesifikt 6/10; sosiale preferanser bredt 10/10). Dokumentert: ultimatumoppgaver starter nesten alltid med egeninteresse-benchmarket «hvis begge er egeninteresserte …» (V2016 P3b, H2020 P3b–c, H2025 P4a). Prioritet: **perfekt** (bærebjelke for Del 3–4).
- **Innholdskontrakt:** Forkunnskaper: delspillperfekt likevekt fra [spillteori i econ2220](/bok/econ2220/econ2220-7-2) *(verifiser id)*. **Ultimatumspillet** (ultimatum game): proposer tilbyr en andel av en pott, responder aksepterer (fordelingen gjennomføres) eller avslår (begge får 0). **Egeninteresse-benchmarket (kritisk regel B)**: ved baklengs induksjon aksepterer en egeninteressert responder **enhver strengt positiv sum** (noe > null) → proposer tilbyr minimum. To varianter alt etter om responder er indifferent ved null. **Det empiriske avviket**: reelle respondere avslår lave tilbud, og proposere tilbyr betydelig mer enn minimum — dette *motiverer* sosiale preferanser (Del 3–4). Diktatorspillet som kontrast (ingen avslagsmulighet → isolerer altruisme fra strategisk frykt). Poeng: benchmarket må alltid stå først; atferdsmodellen forklarer avviket.
- **Oppgavesjangre:** H-benchmark + M. Mønstereksempel (omskrevet): «To personer skal dele 100 kroner i et ultimatumspill. (a) Finn den delspillperfekte likevekten når begge er rent egeninteresserte. (b) Beskriv hvordan faktisk atferd i laboratoriet avviker. (c) Hva forteller diktatorspillet oss som ultimatumspillet ikke gjør?»
- **Typiske feil:** Hoppe over egeninteresse-benchmarket (§5 punkt 11); glemme at avslag gir 0 til *begge*; blande ultimatum og diktator; presentere avviket uten å ha satt referansen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.2: Fehr–Schmidt: ulikhetsaversjon og avslagsterskelen

- **id:** `econ4260-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4260-3-1`
- **Kapitteltype:** teori
- **description:** Modellen for ulikhetsaversjon: de to leddene, når hvert er aktivt, og hvordan man regner responderens avslagsterskel.
- **Eksamensbelegg:** Sjanger H (FS anvendt 8/10). Dokumenterte krav: anvend $U_i=x_i-\alpha_i\max\{x_j-x_i,0\}-\beta_i\max\{x_i-x_j,0\}$; responder aksepterer hvis $U_R(\text{aksept})\ge 0$; finn terskeltilbudet; i binære spill **sjekk hvert tilbudsalternativ eksplisitt** (H2017 P8, H2020 P3d–e, H2022 P3b, H2024 P3e). **α/β varierer per sett** (α=2/β=0,1 H2017; α=3/β=0,2 H2020; α=1,5/β=0,4 H2021; α=0,5/β=0,3 H2022; α=0,5/β=0,2 H2025) — lær metoden. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Fehr–Schmidt-nytten (inequality aversion)**: $U_i=x_i-\alpha_i\max\{x_j-x_i,0\}-\beta_i\max\{x_i-x_j,0\}$; tolk hvert ledd — $\alpha_i$ straffer **ugunstig** ulikhet (misunnelse, når andre har mer), $\beta_i$ straffer **gunstig** ulikhet (skyld, når man selv har mer); $\alpha_i\ge\beta_i$ (misunnelse svir mer enn skyld), $\beta_i<1$. **Bare ett max-ledd er positivt om gangen** (viktig regnepoeng). **Avslagsterskelen** utledes: responder aksepterer tilbud $x_R$ hvis $U_R(\text{aksept})\ge U_R(\text{avslag})=0$; ved avslag får begge 0 → ingen ulikhet → $U_R(\text{avslag})=0$; ved aksept av lavt tilbud er responder i ugunstig ulikhet → $\alpha_R$-leddet aktivt; løs for terskelandelen. Regn med **flere ulike α/β-sett** for å drive hjem at metoden er invariant, tallet ikke. **Binære spill (kritisk regel D)**: når proposer bare kan velge mellom noen få fordelinger, sjekk responderens FS-nytte for hvert alternativ eksplisitt og finn hva proposer da tilbyr. **Proposers side**: en FS-proposer med $\beta$-ledd kan tilby mer enn egeninteressen tilsier selv uten avslagsrisiko.
- **Oppgavesjangre:** H. Mønstereksempel (omskrevet): «I et ultimatumspill om 100 har responderen Fehr–Schmidt-preferanser med $\alpha=1{,}5$, $\beta=0{,}4$. (a) Skriv responderens nytte ved å akseptere tilbud $x_R$. (b) Finn den laveste andelen han aksepterer. (c) Gjenta med $\alpha=0{,}5$. (d) Hvis proposer bare kan velge mellom (80,20) og (95,5), hva skjer?»
- **Typiske feil (egen `warning`):** **Feil ledd aktivt** — bruke $\beta$-leddet når man ligger *under* (§5 punkt 8); glemme at bare ett max-ledd er positivt; regne avslagsterskel med feil ulikhetsretning; sammenligne mot feil disagreement-verdi ($U_R(\text{avslag})=0$ fordi begge får 0); **memorere ett setts α/β som fasit** (§6). **FS-vs-reciprocity-warning gjentas her**: FS er utfallsbasert — den kan ikke forklare intensjonsavhengige reaksjoner (peker frem til Del 4).
- **Quiz: 25 · Flashcards: 30**

#### Kapittel 3.3: Fehr–Schmidt i andre spill

- **id:** `econ4260-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-3-2`
- **Kapitteltype:** teori
- **description:** Samme verktøykasse, andre spill: diktator, kollektivgode og 2×2-spill (battle-of-sexes, fangens dilemma) med ulikhetsaversjon.
- **Eksamensbelegg:** Sjanger L (sammensatt spill, sjelden men tilbakevendende): battle-of-sexes med fairness (H2018 P4), klimaspill/fangens dilemma med FS/morally motivated/reciprocal (H2021 P3). Prioritet: **kunne** (fyller ut FS-mestringen; forsikring for L-sjangeren).
- **Innholdskontrakt:** **Diktatorspillet med FS**: hvor mye en FS-diktator gir bort ($\beta$-leddet driver positiv giving selv uten strategisk press). **Kollektivgode-/bidragsspill med FS**: hvordan ulikhetsaversjon endrer bidrag (kort — full normmodell i Del 6). **2×2-spill med FS-preferanser**: transformer utbetalingsmatrisen ved å regne hver spillers FS-nytte i hver celle, finn så Nash-likevekten i den transformerte matrisen. **Fangens dilemma / klimaspill**: FS (og morally motivated / reciprocal) kan gjøre samarbeid til likevekt — vis eksplisitt for FS. **Battle-of-sexes med fairness**: hvordan koordineringsproblemet endres. Metoden er gjennomgående: (1) skriv opp materielle utbetalinger, (2) transformer til FS-nytter, (3) analyser det nye spillet.
- **Oppgavesjangre:** L + H. Mønstereksempel (omskrevet): «To land velger 'kutte' eller 'ikke kutte' i et klimaspill med gitte materielle utbetalinger. Anta Fehr–Schmidt-preferanser med oppgitt $\alpha,\beta$. Transformer utbetalingsmatrisen til FS-nytter og finn Nash-likevekten. Kan samarbeid nå oppstå?»
- **Typiske feil:** Analysere det materielle spillet uten å transformere til FS-nytter; feil max-ledd i noen celler; glemme at $\alpha\ge\beta$; blande FS-samarbeid med reciprocity-samarbeid (ulik mekanisme — se Del 4).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.4: Drill: ultimatum- og Fehr–Schmidt-oppgaven

- **id:** `econ4260-3-4` · **number:** 3.4 · **estimatedMinutes:** 80 · **prerequisites:** `econ4260-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på sosiale-preferanser-oppgaven: fra egeninteresse-benchmark til FS-avslagsterskel og FS i sammensatte spill.
- **Eksamensbelegg:** Dekker sjangrene H (10/10 bredt) og L — den ene av de to obligatoriske blokkene. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) etabler egeninteresse-benchmarket (delspillperfekt); 2) skriv opp FS-nytten med oppgavens α/β; 3) identifiser hvilket max-ledd som er aktivt; 4) regn avslagsterskel / terskeltilbud; 5) sjekk hvert alternativ i binære spill; 6) transformer 2×2-matriser til FS-nytter der oppgaven krever det; 7) forbered FS-vs-reciprocity-skillet (bro til Del 4). **Gjennomregnet eksamenscase** med sensor-margnotater. **12–15 oppgaver på eksamensnivå** med **roterende α/β** (bevisst — for å hindre tall-pugging): ulike parametre × ultimatum/diktator/2×2 × terskel/binært × FS-proposer — nyskrevne case (lønnsforhandling, arv, dugnadsdeling, klimaforhandling).
- **Oppgavesjangre:** H, L i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Finn egeninteresse-løsningen. (b) Skriv responderens FS-nytte. (c) Finn avslagsterskelen med oppgitt α,β. (d) Gjenta med et annet α. (e) Analyser et binært tilbud. (f) Pek på ett funn FS *ikke* kan forklare (forbered Del 4).»
- **Typiske feil:** Hele §3-repertoaret: hoppe over benchmark; feil aktivt ledd; memorere α/β; anta FS forklarer alt.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A ultimatum + egeninteresse-benchmark + empirisk avvik, sjanger H-benchmark; 3.B Fehr–Schmidt avslagsterskel med to ulike α/β-sett, sjanger H; 3.C FS i 2×2-spill (klima/fangens dilemma) + diktator, sjanger L; 3.D full sosiale-preferanser-oppgave på eksamensnivå med binært tilbud og et FS-kan-ikke-forklare-hint, sjanger H+L+M).

---

### Del 4 — Reciprocity og intensjonsbasert rettferdighet *(prioritet: PERFEKT/KUNNE — 7/10 og voksende)*

#### Kapittel 4.1: Fra utfall til intensjon: hvorfor Fehr–Schmidt ikke er nok

- **id:** `econ4260-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-3-2`
- **Kapitteltype:** teori (fagets kjernefelle)
- **description:** Det tilbakevendende eksamenskravet: skille utfallsbasert ulikhetsaversjon fra intensjonsbasert gjensidighet — og se de dataene som bare reciprocity forklarer.
- **Eksamensbelegg:** Sjanger I-fundament. **Det eksplisitte FS-vs-reciprocity-kravet** i 5 sett (H2018 P3, H2020 P3, H2023 P3, H2024 P3, H2025 P4); nyere sett tester at studenten kan forklare atferd FS *ikke* fanger (H2020 P3f–g, H2024 P3c–d, H2025 P4f). Prioritet: **perfekt** (fagets innebygde felle).
- **Innholdskontrakt:** **Kritisk regel C i full bredde** (kjernekapittel for warningen). **Utfallsbasert (FS)**: nytten avhenger bare av fordelingen $(x_i,x_j)$ — utfallsblind for hvordan den oppstod. **Intensjonsbasert (reciprocity)**: nytten avhenger av om motparten var *vennlig eller uvennlig*, målt mot alternativene han hadde. **Den avslørende testen** (gjennomgått i detalj): samme responder, samme utbetaling, men ulik reaksjon når proposers **alternativsett** endres — f.eks. aksepterer et 8/2-tilbud når det var det beste proposer kunne gjøre, men avslår samme 8/2 når proposer kunne valgt 5/5. **FS gir identisk prediksjon i begge** (utfallet er likt) → **kan ikke forklare forskjellen**; reciprocity kan (uvennlig når 5/5 var mulig, ikke-uvennlig når 8/2 var beste alternativ). **Positiv gjensidighet** også: folk belønner vennlighet, ikke bare straffer uvennlighet (tillitsspill). **Prosedyre**: to scenarier med lik utbetaling men ulik reaksjon = intensjonssignal → reciprocity. **Kommentert A-/C-modellbesvarelse**: «forklar hvorfor responderen reagerte ulikt» på C-nivå (bare FS, kommer til kort) vs. A-nivå (identifiser intensjonssignalet, bruk reciprocity).
- **Oppgavesjangre:** I + M. Mønstereksempel (omskrevet): «En responder aksepterer (8,2) når proposer kun kunne velge mellom (8,2) og (10,0), men avslår (8,2) når proposer også kunne valgt (5,5). (a) Vis at Fehr–Schmidt gir samme prediksjon i begge tilfeller. (b) Forklar reaksjonen med intensjonsbasert gjensidighet. (c) Hva er det generelle skillet mellom de to modellene?»
- **Typiske feil (egen `warning`):** **Anta at FS forklarer alt** (§5 punkt 7); bruke FS på intensjonsdata; påstå at reciprocity og FS er samme modell; overse at samme utbetaling + ulik reaksjon = intensjonssignal; blande positiv og negativ gjensidighet.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 4.2: Fairness equilibrium: hvordan intensjon formaliseres

- **id:** `econ4260-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-4-1`
- **Kapitteltype:** teori
- **description:** Rabin / Dufwenberg–Kirchsteiger-modellen: vennlighetsfunksjoner, tro om andres vennlighet, og fairness-likevekt.
- **Eksamensbelegg:** Sjanger I formell del: fairness equilibrium med $U_i=x_i+\kappa_{ij}\tilde\kappa_{ji}$ (Rabin/Dufwenberg–Kirchsteiger-notasjon i H2018 P4 og H2021 P3d), vennlighet målt mot midtpunktet av oppnåelige utfall. Ofte bedt om **verbal, intuitiv forklaring** (H2021, H2023, H2024). Prioritet: **kunne–perfekt**.
- **Innholdskontrakt:** **Vennlighetsfunksjonen (kindness)** $\kappa_{ij}$: hvor vennlig $i$ er mot $j$, målt som $j$s utbetaling relativt til et referansenivå (midtpunktet mellom høyeste og laveste utbetaling $i$ *kunne* gitt $j$) — positiv = vennlig, negativ = uvennlig. **Tro om vennlighet** $\tilde\kappa_{ji}$: $i$s oppfatning av hvor vennlig $j$ er mot ham. **Fairness-nytten**: $U_i=x_i+\kappa_{ij}\cdot\tilde\kappa_{ji}$ — produktet gjør at man vil være vennlig mot den vennlige (positiv × positiv) og uvennlig mot den uvennlige (negativ × negativ gir positiv nytte av gjengjeldelse). **Fairness-likevekt** (psykologisk Nash): hver spiller maksimerer gitt strategier OG tro, med tro som stemmer i likevekt; dette er hvorfor modellen har **multiple likevekter** (både gjensidig vennlig og gjensidig fiendtlig kan være likevekt). Regn et enkelt eksempel (2×2). **Intuisjonsforklaringen** (eksplisitt eksamenskrav): ha alltid en verbal versjon klar — «du er snill mot dem som er snille mot deg». Kontrast mot FS: her avgjør *hvilke alternativer* motparten hadde.
- **Oppgavesjangre:** I. Mønstereksempel (omskrevet): «I et enkelt to-spillers spill med oppgitte utbetalinger, definer hver spillers vennlighet mot den andre målt mot midtpunktet av oppnåelige utfall. Sett opp fairness-nyttene, finn en fairness-likevekt, og forklar intuitivt hvorfor både gjensidig samarbeid og gjensidig svik kan være likevekt.»
- **Typiske feil:** Måle vennlighet mot feil referanse (ikke midtpunktet av oppnåelige utfall); glemme tro-leddet $\tilde\kappa$; regne bare materielle utbetalinger; påstå én likevekt (modellen har typisk flere); mangle den intuitive forklaringen sensor eksplisitt ber om.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 4.3: Billige forsikringsmodeller: moralsk motivasjon og selvbilde

- **id:** `econ4260-4-3` · **number:** 4.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ4260-4-1`
- **Kapitteltype:** teori (forsikring)
- **description:** To sjeldne, men billige modeller som deler verktøykasse med Del 3–4: moralsk motiverte preferanser og selvbilde/sosialt bilde.
- **Eksamensbelegg:** Morally motivated preferences 1/10 (H2021), self-image/social-image 1/10 (H2020 P3h). Sjeldne, men «billige forsikringskapitler» (analysen §7 punkt 7). Prioritet: **kjenne**.
- **Innholdskontrakt:** **Moralsk motiverte preferanser (morally motivated)**: $U_i=x_i-\tfrac12(c_i-c^*)^2$-typen (H2021) — agenten straffes for å avvike fra en moralsk standard $c^*$ (f.eks. et «riktig» bidrag); vis hvordan det gir intermediær atferd mellom egoisme og full moral. **Selvbilde/sosialt bilde (self-image/social image)**: atferd drives av ønsket om å se seg selv (self-image) eller bli sett av andre (social image) som gavmild/rettferdig; forklarer hvorfor giving faller når det kan skjules, og hvorfor synlighet øker bidrag. Begge presenteres kompakt med den faste malen (benchmark → modell → tolkning). Poeng: samme verktøykasse (nytte med et ekstra motivasjonsledd) som FS/reciprocity — lav marginalkostnad å lære, forsikrer mot den sjeldne oppgaven. Begrunnelsen for at de ikke får egne deler gjentas (aldri båret en hovedoppgave).
- **Oppgavesjangre:** L/M-forsikring. Mønstereksempel (omskrevet): «En giver bryr seg om sitt sosiale bilde. Forklar hvorfor bidraget faller når gavene gjøres anonyme, og modeller motivasjonen med et image-ledd i nyttefunksjonen.»
- **Typiske feil:** Blande self-image (indre) og social-image (ytre) motivasjon; glemme benchmarket; overinvestere i et forsikringstema.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 4.4: Drill: reciprocity- og modellskille-oppgaven

- **id:** `econ4260-4-4` · **number:** 4.4 · **estimatedMinutes:** 70 · **prerequisites:** `econ4260-4-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på det eksplisitte FS-vs-reciprocity-skillet og fairness-likevekt, med de sjeldne forsikringsmodellene som hale.
- **Eksamensbelegg:** Dekker sjanger I (7/10 voksende) og det gjentatte modellskille-kravet. Prioritet: **perfekt** (fellen testes hvert av de siste settene).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser om dataene er utfalls- eller intensjonsbaserte (to scenarier, lik utbetaling, ulik reaksjon? → intensjon); 2) hvis intensjon: bruk reciprocity, vis at FS gir lik prediksjon i begge og derfor svikter; 3) formaliser med vennlighetsfunksjoner der oppgaven krever det; 4) finn fairness-likevekt(er); 5) ha alltid den verbale intuisjonsforklaringen klar; 6) forsikringshale (moralsk/image). **Gjennomregnet eksamenscase** med sensor-margnotater om nettopp modellskillet. **10–14 oppgaver** som roterer: par av scenarier for modellskille × fairness-likevekt-regning × verbal forklaring × image/moralsk-hale — nyskrevne case (arbeidsplass-gjengjeldelse, gaveutveksling, tillitsspill, boikott).
- **Oppgavesjangre:** I, L, M i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Vis at FS gir samme prediksjon i to scenarier med lik utbetaling. (b) Forklar den ulike reaksjonen med reciprocity. (c) Formaliser vennligheten. (d) Finn en fairness-likevekt. (e) Gi den intuitive forklaringen. (f) Hvordan ville en image-modell nyansert bildet?»
- **Typiske feil:** Hele §4-repertoaret: FS på intensjonsdata; feil vennlighetsreferanse; mangle verbal forklaring; påstå én likevekt.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (4.A FS-vs-reciprocity modellskille fra scenariopar, sjanger I-kjerne; 4.B fairness-likevekt med vennlighetsfunksjoner + verbal intuisjon, sjanger I; 4.C moralsk motiverte + image-modeller anvendt, sjanger L-forsikring; 4.D full reciprocity-oppgave på eksamensnivå med eksplisitt modellskille-krav, sjanger I+L+M).

---

### Del 5 — Begrenset rasjonalitet, Bayes og kind–wicked *(prioritet: KUNNE — roterende fjerdeplass 3/10)*

#### Kapittel 5.1: Bayes, base-rate neglect og naturlige frekvenser

- **id:** `econ4260-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ4260-0-2`
- **Kapitteltype:** teori
- **description:** Den bayesianske regnesjangeren: identifiser base-rate neglect, regn den korrekte posterioren, og vis hvordan naturlige frekvenser gjør oppgaven lett.
- **Eksamensbelegg:** Sjanger K (3/10, fast rotasjonskandidat for fjerdeplassen): identifiser fallasjen (forveksle $P(\text{pos}\mid\text{syk})$ med $P(\text{syk}\mid\text{pos})$) (H2019 P2a, H2025 P1a); omform til **naturlige frekvenser** (Hoffrage et al. 2002) (H2019 P2b, H2021 P1a, H2025 P1b). Prioritet: **kunne**.
- **Innholdskontrakt:** **Benchmark først**: korrekt bayesiansk oppdatering $P(\text{syk}\mid\text{pos})=\dfrac{P(\text{pos}\mid\text{syk})P(\text{syk})}{P(\text{pos})}$ med $P(\text{pos})=P(\text{pos}\mid\text{syk})P(\text{syk})+P(\text{pos}\mid\text{frisk})P(\text{frisk})$. **Base-rate neglect** (base-rate neglect): den systematiske feilen å ignorere grunnraten $P(\text{syk})$ og forveksle sensitivitet $P(\text{pos}\mid\text{syk})$ med posterior $P(\text{syk}\mid\text{pos})$ — regn et konkret medisinsk-test-eksempel og vis hvor stor feilen blir ved lav base-rate. **Naturlige frekvenser (natural frequencies)**: omform sannsynlighetene til «tenk 1000 personer»-treet (av 1000: 10 syke, av dem 9 positive; av 990 friske, 99 positive → $9/108$); Hoffrage et al. (2002) viser at dette formatet gjør oppgaven dramatisk lettere fordi hjernen håndterer frekvenser bedre enn betingede sannsynligheter. **Vallée-Tourangeau et al. (2015)**: fysiske kort/interaktivitet hjelper ytterligere (H2021 P1b). Regn samme oppgave begge veier (formel + frekvenstre) for å vise ekvivalensen. Pensumforankring *(verifiser)*.
- **Oppgavesjangre:** K + M. Mønstereksempel (omskrevet): «En sjelden sykdom rammer 1 %. En test gir positivt utslag hos 90 % av de syke og hos 8 % av de friske. (a) Regn sannsynligheten for at en person med positiv test faktisk er syk. (b) Hvilken feil gjør folk som svarer 90 %? (c) Løs oppgaven på nytt med naturlige frekvenser og forklar hvorfor det formatet er lettere.»
- **Typiske feil:** **Base-rate neglect selv** — forveksle $P(\text{pos}\mid\text{syk})$ med $P(\text{syk}\mid\text{pos})$ (§5 punkt 1); glemme falske positive i nevneren; regnefeil i frekvenstreet; hoppe over det korrekte benchmarket.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 5.2: Heuristikker, biaser og kind–wicked-miljøer

- **id:** `econ4260-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-5-1`
- **Kapitteltype:** teori (drøftetung)
- **description:** Metodologien bak atferdsøkonomien: hva labavvik faktisk beviser, og når heuristikker feiler (wicked) versus fungerer (kind).
- **Eksamensbelegg:** Sjanger K-drøftedel: **kind vs. wicked**-skillet — hvor mye kan vi stole på at labavvik reflekterer ekte irrasjonalitet? (H2021 P1c, H2019 P2c). Eksperimentmetode/incentive compatibility vevd inn i flere blokker (~7/10). Prioritet: **kunne**.
- **Innholdskontrakt:** **Heuristikker og biaser** kort (representativitet, tilgjengelighet, forankring — som forklaring på base-rate neglect og beslektede avvik). **Kind vs. wicked-miljøer (kind vs. wicked environments)**: i **milde (kind)** miljøer gir rask, hyppig og tydelig tilbakemelding → heuristikker læres og fungerer godt; i **ondsinnede (wicked)** miljøer er tilbakemeldingen forsinket, sjelden eller villedende → samme heuristikk gir systematiske feil. **Den metodologiske drøftingen** (kjernen): et labavvik beviser *ikke* uten videre ekte irrasjonalitet — det kan skyldes et wicked/ukjent oppgaveformat, manglende insentiver eller uvant representasjon (jf. at naturlige frekvenser fjerner «feilen»). **Incentive compatibility** (incentive compatible): hvorfor forsøk må gjøre det lønnsomt å avsløre ekte preferanser (bro til Plott–Zeiler i kap. 1.5). **Kommentert A-/C-modellbesvarelse**: «beviser laboratoriefunn at folk er irrasjonelle?» på C-nivå (ja/nei-synsing) vs. A-nivå (kind–wicked-rammeverk, insentiver, representasjon, ekstern validitet).
- **Oppgavesjangre:** K-drøfting + M. Mønstereksempel (omskrevet): «Et laboratorieforsøk viser at folk bryter et rasjonalitetsprinsipp. Drøft, med kind–wicked-skillet og begrepet incentive compatibility, i hvilken grad funnet beviser at folk er irrasjonelle i virkeligheten.»
- **Typiske feil:** Behandle ethvert labavvik som bevis på ekte irrasjonalitet (overse kind–wicked); ignorere insentivkompatibilitet; synse uten det metodologiske rammeverket; blande deskriptiv (hva folk gjør) og normativ (hva som er rasjonelt).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.3: Drill: bayes- og kind–wicked-oppgaven

- **id:** `econ4260-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4260-5-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på fjerdeplass-oppgaven: bayes-regning med naturlige frekvenser og metodologisk labtolkning i én kjede.
- **Eksamensbelegg:** Dekker sjanger K (3/10, men fast rotasjonskandidat for fjerdeplassen). Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) etabler korrekt Bayes-benchmark; 2) identifiser base-rate neglect-feilen; 3) regn posterioren (formel); 4) løs på nytt med naturlige frekvenser; 5) drøft med kind–wicked + incentive compatibility hva funnet beviser. **Gjennomregnet eksamenscase** med sensor-margnotater. **8–12 oppgaver**: ulike base-rater og testegenskaper × frekvenstre-omforming × metodologisk drøftedel — nyskrevne case (screening, spamfilter, doping-test, kredittscoring).
- **Oppgavesjangre:** K, M i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Regn posterioren. (b) Hvilken feil gjør folk? (c) Løs med naturlige frekvenser. (d) Drøft med kind–wicked om avviket beviser ekte irrasjonalitet.»
- **Typiske feil:** Base-rate neglect; glemme falske positive; behandle labavvik som bevis; hoppe over frekvensformatet.
- **Quiz: 10 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A Bayes-posterior fra testegenskaper + base-rate neglect-identifikasjon, sjanger K; 5.B naturlige frekvenser + Hoffrage/Vallée-Tourangeau-forankring, sjanger K; 5.C kind–wicked + incentive compatibility-drøfting av et labfunn, sjanger K-drøfting + M; 5.D full fjerdeplass-oppgave på eksamensnivå: bayes-regning + metodologisk drøfting, sjanger K+M).

---

### Del 6 — Kollektive goder, normer og nudging *(prioritet: KUNNE — den andre roterende fjerdeplassen 3/10)*

#### Kapittel 6.1: Sosial anerkjennelse og kollektivgode-normmodellen

- **id:** `econ4260-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-0-2`
- **Kapitteltype:** teori
- **description:** Bidragsmodellen med sosial anerkjennelse: utled beste-respons, sjekk begge hjørner som Nash-likevekt, og forstå multiple likevekter og hysterese.
- **Eksamensbelegg:** Sjanger J (3/10: V2016, H2019, H2022 — den andre rotasjonskandidaten for fjerdeplassen). Fast struktur: idrettsklubb-sticker (V2016), vegetardiett (H2019), dugnad (H2022). Dokumentert: (a) utled bidragsbetingelsen gitt fast $a$; (b)/(c) test **hjørnene $a=0$ og $a=1$** som Nash-likevekter → multiple likevekter; (d) komparativ statikk ved subsidie/fjerning → hysterese (H2019 P4e–f). Prioritet: **kunne**.
- **Innholdskontrakt:** **Normmodellen**: $U_i=u(c_i)+v(G)+s_i$ med sosial anerkjennelse $s_i=g_i\cdot K\cdot a$, der $g_i$ = individets bidrag, $G$ = totalt kollektivgode, $a$ = andel bidragsytere (behandlet **eksogent** i beste-respons-steget). **Beste-respons (bidragsbetingelsen)**: utled individ $i$s optimale bidrag gitt fast $a$ — anerkjennelsesleddet $Ka$ subsidierer bidrag, så flere bidrar jo høyere $a$. **Kritisk regel D — sjekk begge hjørner**: test $a=0$ (ingen bidrar → ingen anerkjennelse → ingen grunn til å bidra → selvbekreftende likevekt) OG $a=1$ (alle bidrar → sterk anerkjennelse → lønnsomt å bidra → selvbekreftende likevekt) → **typisk to Nash-likevekter** («alle-eller-ingen»). **Komparativ statikk**: en subsidie eller kampanje som dytter systemet over en terskel kan flytte det fra $a=0$- til $a=1$-likevekten; fjernes subsidien, blir man værende i den nye likevekten → **hysterese / «sticky» normer**. Regn et konkret eksempel. **Sosial norm** (social norm): psykolog- vs. spillteoretiker-bruk av begrepet (H2019 P4a) — kort begrepsavklaring.
- **Oppgavesjangre:** J. Mønstereksempel (omskrevet): «Medlemmer i en forening får sosial anerkjennelse for å delta på dugnad, proporsjonalt med andelen $a$ som deltar. (a) Utled et medlems bidragsbetingelse for gitt $a$. (b) Vis at både $a=0$ og $a=1$ kan være Nash-likevekt. (c) Forklar hvordan en engangskampanje kan gi varig høy deltakelse selv etter at den avsluttes.»
- **Typiske feil (egen `warning`):** **Påstå kun én Nash-likevekt** — det er typisk to (§5 punkt 6); glemme å teste begge hjørner; behandle $a$ som endogen i beste-respons-steget (den er eksogen der, likevekt bestemmes ved hjørnesjekk); overse hysteresen i den komparative statikken.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 6.2: Sosiale normer, nudging og paternalisme

- **id:** `econ4260-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-6-1`, `econ4260-2-5`
- **Kapitteltype:** teori (drøftetung)
- **description:** Anvendelsen som binder boka sammen: hvordan normer, default-effekter og nudging kan styre atferd — og hvor grensen for legitim paternalisme går.
- **Eksamensbelegg:** Vevd inn i flere sett som anvendelses-/drøftedel (nudging, self-image H2020 P3h, sosiale normer H2019 P4a); broen fra (β,δ)/default (Del 2) til politikk. Prioritet: **kunne** (drøfteforsikring; binder pensum sammen).
- **Innholdskontrakt:** **Nudging**: dytt som endrer atferd uten å fjerne valgfrihet eller endre insentiver vesentlig — bygger på present bias (default-effekter, kap. 2.5), sosiale normer (normmodellen, kap. 6.1) og self-image (kap. 4.3). **Sosiale normer som virkemiddel**: informasjon om hva andre gjør («9 av 10 betaler i tide») flytter atferd via anerkjennelses-/konformitetsmekanismen — koble til $s_i=g_iKa$. **Libertariansk paternalisme (libertarian paternalism)**: staten former valgarkitekturen til individets eget beste uten tvang; **spenningen**: hvem definerer «eget beste», risiko for feilklassifisering (de som faktisk vil noe annet), og manipulasjonskritikken. **Velferdsvurdering**: nudging hjelper de present-biased mot seg selv, men det finnes ingen atferd som entydig avslører «sanne» preferanser når preferansene selv er skjeve — dette er den prinsipielle vanskeligheten. **Kommentert A-/C-modellbesvarelse**: «bør staten dytte folk til å spare mer?» på C-nivå (meninger) vs. A-nivå (present bias-benchmark, default-mekanisme, velferdsgevinst for de biased, feilklassifiseringskostnad, paternalisme-avveining).
- **Oppgavesjangre:** M (drøfting). Mønstereksempel (omskrevet): «En kommune vil øke pantingen ved å endre standardvalget og vise hvor mange naboer som panter. Drøft virkemidlene med begrepene present bias, default-effekt og sosial norm, og vurder når slik nudging er legitim paternalisme.»
- **Typiske feil:** Drøfte nudging uten å forankre i present bias/default/norm-mekanismene; behandle «sanne preferanser» som uproblematisk observerbare; ensidig for/mot uten avveiningen; glemme feilklassifiseringskostnaden.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.3: Drill: normmodell- og nudging-oppgaven

- **id:** `econ4260-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4260-6-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den andre fjerdeplass-oppgaven: normmodellens beste-respons og hjørnelikevekter, med nudging-drøfting som hale.
- **Eksamensbelegg:** Dekker sjanger J (3/10) + nudging-drøftingen. Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) sett opp normmodellen $U_i=u(c_i)+v(G)+s_i$; 2) utled beste-respons for gitt $a$; 3) sjekk begge hjørner ($a=0$, $a=1$) som Nash-likevekt; 4) komparativ statikk (subsidie/fjerning) → hysterese; 5) drøfte-hale om nudging/paternalisme. **Gjennomregnet eksamenscase** med sensor-margnotater om hjørnesjekken. **8–12 oppgaver**: ulike anerkjennelses-/nyttespesifikasjoner × hjørnelikevekt-sjekk × subsidie-hysterese × nudging-drøfting — nyskrevne case (resirkulering, blodgivning, kildesortering, vaksinasjon).
- **Oppgavesjangre:** J, M i full kjede. Mønstereksempel (deloppgave-kjede): «(a) Utled bidragsbetingelsen. (b) Sjekk $a=0$ og $a=1$ som likevekt. (c) Vis hysteresen ved en midlertidig subsidie. (d) Drøft en nudge som kan flytte systemet.»
- **Typiske feil:** Kun én likevekt; endogen $a$ i beste-respons; glemme hysteresen; drøfte nudging uten mekanismeforankring.
- **Quiz: 10 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A normmodellens beste-respons for gitt $a$, sjanger J-fundament; 6.B begge hjørner som Nash-likevekt + multiple likevekter, sjanger J; 6.C subsidie-hysterese/komparativ statikk, sjanger J; 6.D full fjerdeplass-oppgave på eksamensnivå: normmodell + nudging/paternalisme-drøfting, sjanger J+M).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: «Forklar og tolk labfunnet»: eksperimentsjangeren

- **id:** `econ4260-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ4260-4-4`, `econ4260-1-6`
- **Kapitteltype:** sjangertrening
- **description:** Den tverrgående sjangeren: gitt et labfunn eller forsøksdesign, forklar det i riktig modell med pensumforankring — og drøft hva det beviser.
- **Eksamensbelegg:** Sjanger M (vevd inn ~7/10 sett): eksperimentmetode/tolkning av labfunn (incentive compatibility, kind–wicked, design). Navngitte pensumartikler i oppgavetekstene (Hoffrage 2002, Vallée-Tourangeau 2015, Kahneman/Knetsch/Thaler 1991, Plott & Zeiler 2005, Ericson & Fuster 2014, Isoni 2011, Rabin & Thaler 2001, Fehr & Schmidt 1999). Prioritet: **kunne** (skilleoppgave-materiale). **(verifiser pensumlisten)**.
- **Innholdskontrakt:** **Sjangeranalysen**: hva oppgaven ber om — ikke fritt essay, men: (i) identifiser hvilken modell funnet hører til (PT/endowment/(β,δ)/FS/reciprocity/Bayes/norm); (ii) forklar funnet i modellens språk med benchmark først; (iii) vurder metodologisk hva det beviser (kind–wicked, incentive compatibility, ekstern validitet); (iv) navngi relevant pensumdesign der du kan. **Oversettelsesnøkkelen** (bokas sjekkliste): fra observert atferd → hvilken modellparameter bærer den (referansepunkt, β, α/β, vennlighet, base-rate, anerkjennelse). **Pensumkart for hele boka** (`collapsible`, flashcard-råstoff): forfatter → verk → hvilket funn/design de «eier» (Kahneman/Knetsch/Thaler = endowment/bytte-design; Plott & Zeiler = designartefakt-kritikk; Kőszegi–Rabin = forventningsbasert referansepunkt; Hoffrage = naturlige frekvenser; Fehr & Schmidt = ulikhetsaversjon; Rabin/Dufwenberg–Kirchsteiger = fairness-likevekt) — **(verifiser mot gjeldende reading list)**. Tre gjennomarbeidede mønstertolkninger (nyskrevne funn) med margnotater. 5–8 øvingsoppgaver med momentliste.
- **Oppgavesjangre:** M. Mønstereksempel (omskrevet): «I et forsøk krever deltakere mer for å gi fra seg et lodd de nettopp fikk enn de ville betalt for det. Forklar funnet i riktig modell, med referansepunkt, og drøft med incentive compatibility hva det beviser om preferanser — nevn relevant pensum.»
- **Typiske feil:** Fri synsing uten modell (§5 punkt 10); glemme benchmarket; behandle labavvik som bevis (overse kind–wicked); pensumløs tolkning der sensor forventer navngitte design; drøfte feil funn/modell.
- **Quiz: 12 · Flashcards: 15**

#### Kapittel 7.2: Flervalgs- og kortsvarssupplement (beredskap)

- **id:** `econ4260-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4260-7-1`
- **Kapitteltype:** sjangertrening (beredskap)
- **description:** Øvingsbank i Inspera-formatet fra 2017–2019: flervalg med negativ scoring for gale kryss, korte utregninger og inline-choice — beholdt som beredskap mot plattformbytte.
- **Eksamensbelegg:** Formatet 2017–2019 (H2017 9 oppgaver med flervalg + korte utregninger; H2018/H2019 MC/utfyll + inline choice). **Scoringsregel**: rett svar gir poeng; i fler-svar-oppgaver gir gale kryss minus, men delsummen blir aldri negativ (H2017, H2018) — strategien er å ikke gjette vilt i fler-svar-spørsmål. 2020–2025 er essay/regning, men formatet kan returnere. Prioritet: **kjenne** (beredskap; bevisst kompakt).
- **Innholdskontrakt:** **Formatgjennomgang**: hvordan flervalg, multiple response (med negativ scoring), inline choice og korte utfyllingslister fungerer, og hvordan (β,δ)-timing og prospektverdi ble kjørt som store MC-blokker. **Scoringsstrategien**: i multiple-response — kryss bare av det du er sikker på (gal avkryssing trekker); enkeltvalg — ingen straff, alltid svar. **Øvingsbank på 25–35 korte spørsmål** som dekker alle blokkene i MC/kortsvar-form: (β,δ)-timing (hvilken periode gjennomfører naiv?), prospektverdi (regn $V$), FS-avslag (aksepteres tilbudet?), Bayes (velg riktig posterior), normmodell (hvor mange likevekter?), FS-vs-reciprocity (hvilken modell?). Hver med kort begrunnelse. Poeng: **samme modellkunnskap, annet format** — ferdighetene fra Del 1–6 overføres direkte.
- **Oppgavesjangre:** Alle blokker i MC/kortsvar. Mønstereksempel (omskrevet, flervalg): «En agent med $\beta=0{,}5$, $\delta=1$ står overfor en kostbar oppgave i periode 1–3. Kryss av for perioden en naiv agent faktisk gjennomfører: □ P1 □ P2 □ P3 □ aldri. (Begrunn kort.)»
- **Typiske feil:** Gjette vilt i multiple-response (trekk for gale kryss); regnefeil under tidspress i korte utregninger; overføre feil modell til feil spørsmålstype.
- **Quiz: 20 · Flashcards: 10**

#### Kapittel 7.3: Øvingseksamen 1: den typiske malen

- **id:** `econ4260-7-3` · **number:** 7.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ4260-7-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett tre-timers sett etter 2020–2025-malen: fire Problems (tidsinkonsistens + sosiale preferanser + risiko/PT + fjerdeplass), engelsk-format, med A-besvarelser.
- **Eksamensbelegg:** Speiler den mest sannsynlige neste eksamen (analysens §7-prognose): én tidsinkonsistens-oppgave, én sosiale-preferanser-oppgave, én risiko/PT-oppgave, én fjerdeplass (her: bayes/kind–wicked). 3–4 Problems med prosentvekt, deloppgaver teller likt. Prioritet: treningskapittel.
- **Innholdskontrakt:** **Problem 1 (30 %) — tidsinkonsistens**: utled β,δ, timing-tabell naiv+sofistikert (begge fortegn), commitment-betalingsvilje, opt-in/opt-out-hale. **Problem 2 (30 %) — sosiale preferanser**: ultimatum + egeninteresse-benchmark, FS-avslagsterskel med oppgitt α/β, binært tilbud, ett FS-kan-ikke-forklare-scenario (reciprocity-bro). **Problem 3 (25 %) — risiko/PT**: EU-benchmark, PT-verdifunksjon, prospektverdi-regning, endowment-drøfting med referansepunkt. **Problem 4 (15 %) — bayes/kind–wicked**: posterior + base-rate neglect + naturlige frekvenser + kort metodologisk drøfting. **Løsningsforslag i eget `collapsible` per Problem, skrevet som A-besvarelse** (benchmark + utledning/mellomregning + modellforankret tolkning), med `tip`-notat om vekting, tidsbudsjett (deloppgaver teller likt) og hvor skilleoppgavene ligger. **Engelsk-format-notat**: siden eksamen er på engelsk, gis ett tospråklig nøkkeltermvedlegg. Nyskrevne tall og case gjennomgående.
- **Oppgavesjangre:** A+B+C / H+I / D+E+G / K+M.
- **Typiske feil:** Tidsbudsjett-feil (181-min-fellen); hele repertoaret fra drillkapitlene 1.6, 2.7, 3.4, 4.4, 5.3.
- **Quiz: 6 · Flashcards: 4**

#### Kapittel 7.4: Øvingseksamen 2: normmodell-fjerdeplassen

- **id:** `econ4260-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ4260-7-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett der fjerdeplassen er kollektivgode-normmodellen (den andre rotasjonskandidaten), med reciprocity fremtredende i sosiale-preferanser-oppgaven.
- **Eksamensbelegg:** Speiler variant der fjerdeplassen roterer til normmodellen (V2016, H2019, H2022-profil) og reciprocity er tungt vektet (H2020/H2024/H2025-tendensen). Prioritet: treningskapittel.
- **Innholdskontrakt:** **Problem 1 (25 %) — tidsinkonsistens**: fokus på commitment + opt-in/opt-out + dual-self-variant. **Problem 2 (30 %) — sosiale preferanser med reciprocity-tyngde**: FS-avslagsterskel, deretter det eksplisitte FS-vs-reciprocity-skillet (scenariopar, lik utbetaling/ulik reaksjon), fairness-likevekt med verbal intuisjon. **Problem 3 (25 %) — risiko/PT via Rabin**: EU-benchmark, Rabin-kalibrering (småspill+storspill), PT som løsning. **Problem 4 (20 %) — normmodell**: beste-respons, begge hjørner som likevekt, hysterese, nudging-drøfting. Løsningsforslag som A-besvarelser i `collapsible`, vektings-`tip` per Problem, tospråklig termvedlegg.
- **Oppgavesjangre:** C / H+I / F+D / J+M.
- **Typiske feil:** FS på intensjonsdata i Problem 2; Rabin over gevinst; kun én likevekt i Problem 4; hoppe over verbal intuisjon.
- **Quiz: 6 · Flashcards: 4**

#### Kapittel 7.5: Øvingseksamen 3: den drøftetunge varianten

- **id:** `econ4260-7-5` · **number:** 7.5 · **estimatedMinutes:** 180 · **prerequisites:** `econ4260-7-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på modellforankret drøfting: endowment-debatten, kind–wicked og nudging-paternalisme — men fortsatt med regnekjerne i hver oppgave.
- **Eksamensbelegg:** Speiler settene med tung drøfteandel (H2018/H2021/H2023-profil), der «verbal discussion is sufficient» og «no correct answers»-deler er fremtredende — men alt fortsatt modellforankret. Prioritet: treningskapittel — trener særlig sjanger M og de kommenterte A/C-nivåene.
- **Innholdskontrakt:** **Problem 1 (25 %) — tidsinkonsistens**: timing-tabell (regnekjerne) + åpen drøfting av selvkontrollpolitikk. **Problem 2 (25 %) — endowment/risiko**: WTA–WTP-regning + tung referansepunktdebatt (statisk vs. forventningsbasert) + Plott–Zeiler. **Problem 3 (25 %) — sosiale preferanser**: FS-regning + eksplisitt FS-vs-reciprocity-drøfting med verbal begrunnelse. **Problem 4 (25 %) — kind–wicked/nudging**: bayes-regning + metodologisk drøfting av hva labavvik beviser + nudging-paternalisme-vurdering. Hver oppgave har både en regnekjerne OG en «no correct answers»-drøftedel som premierer koherens. Løsningsforslag som **kommenterte A- og C-besvarelser** i `collapsible` (viser gapet i drøftedelene), vektings-`tip`, «drøftedeler er også modellforankret»-forord, tospråklig termvedlegg.
- **Oppgavesjangre:** A+M / G+D / H+I / K+M.
- **Typiske feil:** Fri synsing i drøftedelene; droppe regnekjernen fordi «verbal is sufficient»; forveksle statisk/forventningsbasert referansepunkt; FS forklarer alt.
- **Quiz: 6 · Flashcards: 4**

**Prøve-kvote Del 7:** ingen egne prøver (delen består av sjangertrening + flervalgssupplement + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.2 | 12+12 = **24** | 18+18 = **36** | 0 |
| 1 | 1.1–1.6 | 18+25+22+18+22+12 = **117** | 20+32+25+18+28+8 = **131** | 4 |
| 2 | 2.1–2.7 | 16+22+25+20+18+14+12 = **127** | 18+27+27+22+18+14+8 = **134** | 4 |
| 3 | 3.1–3.4 | 20+25+18+12 = **75** | 22+30+18+8 = **78** | 4 |
| 4 | 4.1–4.4 | 22+20+14+12 = **68** | 28+25+16+8 = **77** | 4 |
| 5 | 5.1–5.3 | 20+18+10 = **48** | 22+22+8 = **52** | 4 |
| 6 | 6.1–6.3 | 20+16+10 = **46** | 22+20+8 = **50** | 4 |
| 7 | 7.1–7.5 | 12+20+6+6+6 = **50** | 15+10+4+4+4 = **37** | 0 (3 øvingseksamener) |
| **Sum** | **34 kap.** | **555 ≥ 500 ✓** | **595 ≥ 500 ✓** | **24 + 3 ØE** |

Kontrollsum quiz: 24+117+127+75+68+48+46+50 = **555**.
Kontrollsum flashcards: 36+131+134+78+77+52+50+37 = **595**.
Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og arketype: de fire faste blokkene (Del 1–4) står
for 387 av 555 quiz og 420 av 595 flashcards; de roterende fjerdeplassene (Del
5–6) holdes moderat. **Flashcard-tettheten er bevisst høy (595, i sikteintervallet
550–650)** fordi eksamen er på engelsk og krever tospråklig begrepsmestring:
hvert kjernebegrep gir typisk to kort (norsk↔engelsk) pluss modell↔parameter↔
prediksjon-koblinger (f.eks. «present bias ↔ $\beta<1$ ↔ preferansereversering»).
De begrepstunge kapitlene (1.2 PT, 2.2–2.3 (β,δ), 3.2 FS, 4.1 FS-vs-reciprocity)
bærer mest, i tråd med PRODUKSJONSLOYPE-lærdommen om at ≥500 er et gulv, ikke et mål.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse: benchmark + utledning/mellomregning + modellforankret tolkning) og
poengfordeling der deloppgavene teller likt (eksamens regel). Omfang i minutter.
Prøvene ligger i prøvekapitler per del (`econ4260-<del>-prove`, chapterNumber
`<del>.P`) per byggekontrakten.

**Del 1 — Risiko og prospektteori**
1. Prøve 1.A (30 min): EU-benchmark + PT-verdifunksjon med kontrast (sjanger D).
2. Prøve 1.B (35 min): prospektverdi-beregning + Allais/Lotto (sjanger E).
3. Prøve 1.C (35 min): Rabin-kalibrering, sjekk småspill+storspill (sjanger F).
4. Prøve 1.D (55 min): full risiko-oppgave på eksamensnivå inkl. endowment-drøfting med referansepunktdebatt (sjanger D+E+F+G+M).

**Del 2 — Tidsinkonsistens**
1. Prøve 2.A (30 min): utlede β,δ fra indifferens + present bias (sjanger B).
2. Prøve 2.B (40 min): timing-tabell naiv+sofistikert, begge fortegn (sjanger A).
3. Prøve 2.C (35 min): commitment-betalingsvilje + opt-in/opt-out (sjanger C).
4. Prøve 2.D (55 min): full tidsinkonsistens-oppgave inkl. dual-self-variant (sjanger A+B+C).

**Del 3 — Sosiale preferanser**
1. Prøve 3.A (30 min): ultimatum + egeninteresse-benchmark + empirisk avvik (sjanger H-benchmark).
2. Prøve 3.B (40 min): FS-avslagsterskel med to ulike α/β-sett (sjanger H).
3. Prøve 3.C (35 min): FS i 2×2-spill (klima/fangens dilemma) + diktator (sjanger L).
4. Prøve 3.D (55 min): full sosiale-preferanser-oppgave med binært tilbud + FS-kan-ikke-forklare-hint (sjanger H+L+M).

**Del 4 — Reciprocity**
1. Prøve 4.A (35 min): FS-vs-reciprocity modellskille fra scenariopar (sjanger I-kjerne).
2. Prøve 4.B (40 min): fairness-likevekt med vennlighetsfunksjoner + verbal intuisjon (sjanger I).
3. Prøve 4.C (30 min): moralsk motiverte + image-modeller anvendt (sjanger L-forsikring).
4. Prøve 4.D (55 min): full reciprocity-oppgave med eksplisitt modellskille-krav (sjanger I+L+M).

**Del 5 — Bayes og kind–wicked**
1. Prøve 5.A (30 min): Bayes-posterior + base-rate neglect-identifikasjon (sjanger K).
2. Prøve 5.B (30 min): naturlige frekvenser + Hoffrage/Vallée-Tourangeau (sjanger K).
3. Prøve 5.C (35 min): kind–wicked + incentive compatibility-drøfting av labfunn (sjanger K + M).
4. Prøve 5.D (50 min): full fjerdeplass-oppgave: bayes-regning + metodologisk drøfting (sjanger K+M).

**Del 6 — Normmodell og nudging**
1. Prøve 6.A (30 min): normmodellens beste-respons for gitt $a$ (sjanger J-fundament).
2. Prøve 6.B (35 min): begge hjørner som Nash-likevekt + multiple likevekter (sjanger J).
3. Prøve 6.C (30 min): subsidie-hysterese/komparativ statikk (sjanger J).
4. Prøve 6.D (50 min): full fjerdeplass-oppgave: normmodell + nudging/paternalisme-drøfting (sjanger J+M).

### Øvingseksamener (3 komplette sett — se kap. 7.3–7.5)

| Sett | Mal den speiler | Miks (4 Problems, engelsk-format) |
|---|---|---|
| Øvingseksamen 1 (kap. 7.3) | 2020–2025-prognosemalen (30/30/25/15) | Tidsinkonsistens + sosiale pref. + risiko/PT + bayes/kind–wicked |
| Øvingseksamen 2 (kap. 7.4) | Normmodell-fjerdeplass, reciprocity-tung (25/30/25/20) | Commitment/default + FS+reciprocity + Rabin/PT + normmodell |
| Øvingseksamen 3 (kap. 7.5) | Drøftetung variant (25/25/25/25) | Timing+drøfting + endowment-debatt + FS-vs-reciprocity + kind–wicked/nudging |

Til sammen dekker de tre settene sjangrene A–M; flervalgs-/kortsvarssjangeren
(2017–2019-formatet) dekkes bevisst kun av kap. 7.2, siden 2020–2025-regimet er
essay/regning og øvingseksamenene skal speile *typiske* sett (DNA-regelen: en
«typisk» eksamen, ikke en uvanlig).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 timer, engelsk, A–F, 3–4 Problems med
   prosentvekt, deloppgaver teller likt), formatutviklingen (2016–2019-svingningen
   → stabilt 2020–2025-regime), og V-neste prognosen (fra kap. 0.1); egen boks:
   «hvis du bare rekker to blokker, ta tidsinkonsistens og sosiale preferanser
   (i alle 10 sett)».
2. **Prioriteringskartet** — frekvenstabellen omgjort til tre lesenivåer: perfekt
   (Del 1–4: risiko/PT, (β,δ)-komplett, ultimatum/FS, FS-vs-reciprocity), kunne
   (Del 5–6: bayes/kind–wicked og normmodell/nudging — de to roterende
   fjerdeplassene), kjenne (flervalgsformatet, morally motivated/image) — og
   eksplisitt hvorfor sjeldne 1/10-modeller ikke prioriteres.
3. **Modellhåndverket** (fra kap. 0.2) — «benchmark først»-malen med
   benchmark-tabellen, den tredelte modell-drøfte-malen, hva «verbal discussion
   sufficient» og «no correct answers» betyr, og A/C-skillet.
4. **De to fellene** — (i) **Fehr–Schmidt vs. reciprocity** (utfalls- vs.
   intensjonsbasert; den avslørende testen; prosedyren) og (ii) **sjekk begge
   tilfeller** (naiv+sofistikert, kostbar+behagelig, opt-in+opt-out, a=0+a=1,
   hvert tilbud, småspill+storspill) — som egne, uthevede seksjoner.
5. **Sjangerguiden** — oppgavetypene A–M med løsningsoppskriftene fra
   drillkapitlene (1.6, 2.7, 3.4, 4.4, 5.3, 6.3) og sjangertreningen (7.1, 7.2)
   i kortform: risiko-kjeden, (β,δ)-kjeden, ultimatum/FS-kjeden,
   reciprocity/modellskille-kjeden, bayes-kjeden, normmodell-kjeden, og
   oversettelsesnøkkelen for labfunn-tolkning.
6. **Sensorreglene (utledet)** — metareglene (modellforankring i alt; benchmark
   først; vis mellomregning; skille beslektede modeller; presis eksperiment-/
   pensumforankring; koherens premieres i «no correct answers»-deler) + notatet
   om at det **ikke finnes sensorveiledning** i arkivet (karakterterskler kan
   ikke fastsettes; alt er velbegrunnet hypotese).
7. **Feilkatalogen** — de typiske feilene samlet (base-rate neglect; glemt
   referansepunkt; feil evalueringsperiode; hoppe over ett tilfelle; naiv betaler
   for commitment; kun én Nash-likevekt; FS forklarer alt; feil α/β-terskel;
   statisk vs. forventningsbasert referansepunkt; fri synsing i drøftedeler;
   overse benchmarket), hver med henvisning til kapitlet som forebygger den.
8. **Tospråklig begrepsbank** (fra analysen §6, norsk↔engelsk) — én tabell med
   alle kjernetermer og kjernemodell/notasjon: prospektteori/prospect theory,
   tapsaversjon/loss aversion, referansepunkt/reference point, endowment-effekt/
   endowment effect, kvasi-hyperbolsk/quasi-hyperbolic, present bias, naiv/naïve,
   sofistikert/sophisticated, commitment device, default effect (opt-in/opt-out),
   ultimatumspill/ultimatum game, ulikhetsaversjon/inequality aversion,
   reciprocity/reciprocal preferences, fairness equilibrium, base-rate neglect,
   naturlige frekvenser/natural frequencies, kind/wicked environments, Homo
   Economicus — dette er studentens engelsk-beredskap.
9. **Formelark i emnets notasjon** — én side: $U_t=u_t+\beta\sum_{s>t}\delta^{s-t}u_s$;
   $\sum\delta^k=1/(1-\delta)$; $V=\sum\pi(p_i)v(x_i)$; $EU=\sum p_i u(W+x_i)$;
   Rabin-normaliseringen; $U_i=x_i-\alpha_i\max\{x_j-x_i,0\}-\beta_i\max\{x_i-x_j,0\}$;
   FS-avslagsterskel; $U_i=x_i+\kappa_{ij}\tilde\kappa_{ji}$; $U_i=u(c_i)+v(G)+s_i$
   med $s_i=g_iKa$; Bayes-brøken — med markering av hva som skal *utledes aktivt*
   (β,δ, timing-tabell, prospektverdi, Rabin, FS-terskel, fairness-likevekt,
   normmodellens hjørnesjekk, Bayes) vs. kun brukes.
10. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
    Del 0 → 2 → 3 (de to obligatoriske blokkene *først*, siden de er i alle sett)
    → 4 → 1 (risiko/PT) → 5 → 6, deretter 7.1–7.2 og øvingseksamenene de siste
    ukene under tidspress (180 min med tidsbudsjett per Problem siden deloppgavene
    teller likt).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ4260` med alle 34
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`/`econ2220` i
   `src/lib/data/textbook-courses-hoyskole.ts` (eller `-matte.ts`);
   `sectionNames` fra makrostruktur-tabellen (§2); `level: 'Høyskole'`.
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–M, de fire
   benchmarkene, modell-drøfte-malen og de to fellene som resten refererer til.
3. **De to obligatoriske blokkene i avhengighetsrekkefølge**: Del 2
   (tidsinkonsistens) → Del 3 (sosiale preferanser) → Del 4 (reciprocity,
   bygger på Del 3) — dette er ryggraden (55–70 % av poengene).
4. Del 1 (risiko/PT) — kan bygges parallelt med Del 2–4 (avhenger bare av Del 0).
5. Del 5 → Del 6 (de to roterende fjerdeplassene; Del 6.2 avhenger av Del 2.5).
6. Del 7 til slutt (sjangertreningen, flervalgssupplementet og øvingseksamenene
   gjenbruker alt).
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del (`econ4260-<del>-prove`, chapterNumber
   `<del>.P`) etter byggekontraktens spesifikasjon.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer via `json.dump`; escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
  (`\\beta`, `\\delta`, `\\alpha`, `\\pi`, `\\max`, `\\sum`, `\\kappa`); ingen
  unicode-subskript ($x_1$, aldri «x₁») i kapittelinnholdet; konsistent
  $\beta,\delta$, $\alpha_i,\beta_i$, $\lambda$, $\pi(p)$, $\kappa_{ij}$.
- [ ] **Modellforankring overalt (kritisk regel A)**: hvert teorikapittel følger
  benchmark → modell → tolkning; ingen drøftedel uten navngitt modell; grep etter
  «fri synsing»-mønstre (drøfteoppgaver skal alltid ha momentliste med modellnavn).
- [ ] **Benchmark først (kritisk regel B)**: hvert atferdstema åpner med
  Homo-Economicus-prediksjonen som egen blokk; grep at hvert av kap. 1.2, 2.2–2.3,
  3.2, 5.1 refererer sitt benchmark-kapittel (1.1, 2.1, 3.1, korrekt Bayes).
- [ ] **FS-vs-reciprocity-warning (kritisk regel C)**: `warning`-blokk med
  utfalls-vs-intensjons-skillet finnes i kap. 0.2, 3.2, 4.1, 4.4 og i
  studieguiden; den avslørende testen (lik utbetaling, ulik reaksjon) er
  eksplisitt hvert sted.
- [ ] **«Sjekk begge tilfeller»-prosedyre (kritisk regel D)**: `warning`-blokk
  i kap. 0.2, 2.3 (kostbar+behagelig), 2.4 (naiv+sofistikert), 2.5 (opt-in+opt-out),
  3.2 (hvert tilbud), 6.1 (a=0+a=1), 1.4 (småspill+storspill).
- [ ] **«Forklar/tolk labfunnet»-øvelse (sjanger M)**: hvert teorikapittel i Del
  1–6 har minst én M-øvelse; kap. 7.1 samler sjangeren.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  fra dette skjelettet), Forkunnskaper-blokk med lenker + Symbol- og formelliste-
  `collapsible` (per delkapittel — ALLE symboler/formler brukt), Typiske
  feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
  `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver; øvingseksamener
  har løsningsforslag i `collapsible` per Problem med vektings-`tip` og tospråklig
  termvedlegg.
- [ ] **Tospråklig begrepsbank**: engelsk fagterm i parentes ved første
  forekomst per delkapittel; flashcards inkluderer norsk↔engelsk-kort for alle
  kjernetermer (analysen §6-tabellen).
- [ ] **Metode, ikke tallverdier**: ingen oppgave presenterer ett setts α/β eller
  β/δ som «fasit»; drillkapitlene 2.7 og 3.4 roterer parametrene eksplisitt;
  `warning` mot tall-pugging i kap. 0.1, 2.2, 3.2.
- [ ] **Kryssbok-lenker**: alle `/bok/econ2220/...` og `/bok/econ1210/...`-lenker
  peker på id-er som finnes i respektive metadata — verifiser mot `_registry.json`
  før bygging; merk usikre med `(verifiser)` i teksten.
- [ ] **Quiz-sum ≥ 555 og flashcard-sum ≥ 595** per kvotetabellen (§3 er
  autoritativ — kontrollsummér).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener; settene og
  prøvene dekker samlet sjangrene A–M minst én gang (flervalgssjangeren kun i 7.2).
- [ ] **Pensumforankring EKTE men utgave-sensitiv (verifiser)**: de navngitte
  artiklene (Hoffrage 2002, Vallée-Tourangeau 2015, Kahneman/Knetsch/Thaler 1991,
  Plott & Zeiler 2005, Ericson & Fuster 2014, Isoni/Loomes/Sugden 2011, Rabin &
  Thaler 2001, Fehr & Schmidt 1999, Kőszegi–Rabin, Dufwenberg–Kirchsteiger) er
  navngitt *i oppgavetekstene* 2016–2025 og bør dekkes, men **må verifiseres mot
  gjeldende reading list** før skriving; marker usikre koblinger `(verifiser)`
  eller referer forfatter/funn uten årstall der usikkert.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne case, egne
  formuleringer; ingen formuleringer fra reelle sett (skjelettets mønstereksempler
  er selv omskrivninger og skal varieres videre, ikke kopieres ordrett);
  arkivets α/β- og β/δ-verdier brukes kun til nivå-/sjangervalg — oppgavetallene
  skal være nye; pensum refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
