# Eksamensanalyse: IN2080 Beregninger og kompleksitet (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på UiOs eksamensarkiv i
> `~/Desktop/Eksamner/UiO/IN2080/`: oppgavesett fra forgjengeremnet **INF2080 –
> Logikk og beregninger** (V2013–V2017) og fra **IN2080** (V2019), tre obligatoriske
> innleveringer (2020) med kjerneoppgavene, ekstra gruppeoppgaver (polynomtids-
> reduksjoner, coNP-kompletthet), samt tolv skannede løsningsforslag (nr. 2–13).
> **Alt innhold er omskrevet med egne ord** – ingen ordrette gjengivelser av
> oppgavetekster eller fasiter. Definisjoner, teoremer, språknavn og standard-
> notasjon (automater, reduksjoner, kompleksitetsklasser) er allmenn faglig kunnskap
> og ikke opphavsrettslig beskyttet. Analysen er kvantitativ der kildene tillater det.
>
> IN2080 er UiOs kurs i **beregnbarhet og kompleksitetsteori** («theoretical CS»):
> automater og formelle språk, Turing-maskiner og avgjørbarhet, uavgjørbarhet og
> reduksjoner, og kompleksitetsklassene L/NL/P/NP/PSPACE med tilhørende komplett-
> hetsteori. Det er et **rent bevis- og konstruksjonsfag** i samme sjanger som
> UiOs MAT2410/MAT2400 (bevismaler + «konstruer objektet»), men med et helt eget
> objektunivers: automater, grammatikker, maskiner og reduksjoner i stedet for
> funksjoner og rekker. Naboemnet **IN2010 – Algoritmer og datastrukturer**
> (`../in2010/EKSAMENSANALYSE.md`) deler kun den kvalitative P/NP-intuisjonen;
> IN2080 er langt mer formelt (reduksjonsbevis, klasseinklusjon, pumpelemma). Der
> IN2010 ber deg *skrive en effektiv algoritme*, ber IN2080 deg *bevise hva som er
> mulig i det hele tatt* og *hvor vanskelig det er*. Krysslenking til IN2010 er
> notert løpende.

---

## 0. Kort forbehold: ett fag, to emnenavn

Arkivet spenner over en emnekode-endring. Pensumkjernen er den samme hele veien,
men den som leser de eldste settene må lete under to koder:

| Periode | Emnenavn på settet | Innhold |
|---|---|---|
| V2013–V2017 | **INF2080 – Logikk og beregninger** | Automater/språk, Turing-maskiner, beregnbarhet, kompleksitet (NP, NL, PSPACE, reduksjoner). Fra V2017 digital eksamen med håndtegnings-ark for automatene. |
| V2019– | **IN2080 – Beregninger og kompleksitet** | Samme fagområde. Obligene (2020) og V2019-settet bruker gjennomgående Sipser-notasjon og engelske språknavn. |

**Praktisk konsekvens:** navneendringen flytter tyngdepunktet marginalt (mer eksplisitt
Sipser-forankring i den nye epoken, en tydelig «20 sant/usant»-blokk om avgjørbarhet
i V2019), men **automater → Turing/avgjørbarhet → kompleksitet-tredelingen er stabil
gjennom hele arkivet.** Pensumboka er entydig **Michael Sipser, _Introduction to the
Theory of Computation_** (obligene refererer til «chapter 3», «exercise 3.8», Sipser
problem 1.43; V2017 ber om et NP-komplett språk «omtalt i Sipsers pensumbok»). Boka
vår bør bruke Sipser som ryggrad.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

**Digital skriftlig skoleeksamen, 4 timer, ingen hjelpemidler.** Karakterskala A–F,
teller 100 %. Obligatoriske innleveringer (tre stk. i 2020-årgangen) må være godkjent
for eksamensadgang. Undervisningsspråk norsk, men oppgavetekstene blander norsk og
engelsk fritt (språknavn som SUBSET-SUM, HAMPATH, TQBF står på engelsk; brødteksten
er norsk). Standardinstruks på hvert sett: **«Gjør dine egne forutsetninger dersom du
er i tvil om hvordan oppgaveteksten skal tolkes.»**

Eksamen har en **fast todeling** som er stabil i hele arkivet:

1. **Del I – Automater, språk og beregnbarhetsteori.** Konstruksjon av DFA/NFA/PDA,
   regulære uttrykk og CFG, Turing-maskiner, pumpelemma (regulært *og* kontekstfritt),
   avgjørbarhet/uavgjørbarhet. Dette er «tegne- og konstruksjonsdelen».
2. **Del II – Kompleksitetsteori.** Definisjonsspørsmål (NP-/NL-/NP-komplett-«forklar
   kort»), plassering av språk i klasser (NL, P, NP, PSPACE), og **reduksjonsbevis**
   (`A ≤p B`, `A ≤m B`). Dette er der toppkarakterene avgjøres.

### Digital håndtegning – en formforskjell fra 2017

Fra V2017 er eksamen digital, men **automat-/grammatikk-oppgavene tegnes for hånd på
utdelte skisseark** (eksplisitt: «I dette oppgavesettet SKAL du svare med digital
håndtegning på oppgave 2.2 (DFA/NFA/CFG/PDA)»). Bevis og forklaringer skrives i
teksteditor-felt. Læreboken bør derfor trene *både* presis tegning av tilstands-
diagrammer *og* velskreven bevistekst – de vurderes hver for seg.

### Poenglogikk

Settene har **eksplisitt maks-poeng per oppgave** (V2017: 100 poeng totalt, med
14/16/15/15/10/10/20 fordelt på deloppgavene). V2019s sant/usant-blokk (20 påstander
om avgjørbarhet/reduksjon) er en tettpakket faktatest. Deloppgavene i en flerdels-
oppgave bygger ofte på hverandre, og et oppgitt teorem («PATH er NL-komplett»,
«SUBSET-SUM er NP-komplett», «SAT er NP-komplett») kan **brukes uten bevis** som
byggekloss i en reduksjon lenger ned.

### Historisk utvikling – tre epoker

| Epoke | År | Kode | Trekk |
|---|---|---|---|
| **1 – papir-INF2080** | 2013–2016 | INF2080 | 4-timers papireksamen (14.30–18.30), ingen hjelpemidler. Rene konstruksjons- og bevisoppgaver; Turing-maskin-oppgaver med *fri* representasjon (unære tall, add/mult/primtall). Del II sentrert om NL (PATH-slekten) og NP (SUBSET-SUM-slekten). |
| **2 – digital INF2080** | 2017 | INF2080 | Digital eksamen med skisseark for automatene, teksteditor for bevis. Nytt: log-space transducer-oppgaver, EXPLEX-reduksjon, only-right-Turing-maskiner. |
| **3 – IN2080** | 2019– | IN2080 | Ny kode, tydelig Sipser-forankring. Innfører den store sant/usant-blokken om avgjørbarhet/Turing-gjenkjennbarhet/`≤m`/PCP. Reduksjoner formulert som `⇐⇒`-ekvivalens (TRIPPEL-SUBSET-SUM). PSPACE via TQBF og space-hierarki. |

Alle tre epoker er representative for **innhold og oppgavesjanger**; læreboken bør
kalibreres mot epoke 3-notasjon (Sipser), men epoke 1–2 er en verdifull oppgavebank
(mange fine reduksjons- og pumpelemma-oppgaver).

---

## 2. Temafrekvens

Basert på de **6 tekst-lesbare settene** (V2013, V2014, V2015, V2016, V2017, V2019)
pluss obligene. Celleverdi = temaet forekommer i minst én oppgave i settet.
Gjenganger-scoren måler **bredde/sikkerhet**, ikke vekt (hvert sett har mange
likt strukturerte konstruksjons-/bevisoppgaver).

| Tema | 2013 | 2014 | 2015 | 2016 | 2017 | 2019 | **Score** |
|---|:--:|:--:|:--:|:--:|:--:|:--:|---|
| **DFA/NFA-konstruksjon + regulære uttrykk** (tegn automat, forenkle/lag regex, NFA→DFA) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **6/6 = 100 %** |
| **Kontekstfrie språk: CFG + PDA** (lag grammatikk, tegn pushdown-automat, balanserte paranteser) | ✓ | · | ✓ | ✓ | ✓ | ✓ | **5/6 = 83 %** |
| **Pumpelemma** (regulært og/eller kontekstfritt – vis at et språk *ikke* er reg./CF) | · | · | ✓ | ✓ | ✓ | ✓ | **4/6 = 67 %** ↑ |
| **NP-kompletthet via reduksjon** (`A ≤p B`, konstruer f, vis begge retninger) | · | ✓ | ✓ | ✓ | ✓ | ✓ | **5/6 = 83 %** |
| **Definisjonsspørsmål «forklar kort»** (NP-, NL-, NP-komplett, polynomtidsreduksjon) | ✓ | ✓ | ✓ | · | · | ✓ | **4/6 = 67 %** |
| **NL / logspace** (NL-kompletthet, PATH, DS-i-NL, log space transducer) | ✓ | · | · | ✓ | ✓ | · | **3/6 = 50 %** |
| **Turing-maskiner: konstruksjon** (unær aritmetikk, `w#w`, only-right-TM, TM-variant) | · | ✓ | · | ✓ | · | · | **2/6 = 33 %** (+ 2 obliger) |
| **Avgjørbarhet / uavgjørbarhet** (Turing-avgjørbar vs. -gjenkjennbar, `≤m`, PCP, komplement) | · | · | · | · | ✓ | ✓ | **2/6 = 33 %** ↑ |
| **PSPACE / space-klasser** (PSPACE-kompletthet, TQBF, NSPACE(n), space-hierarki, `P ≠ SPACE(n)`) | ✓ | ✓ | · | ✓ | · | ✓ | **4/6 = 67 %** |
| **Lukkethetsegenskaper / klassehierarki** (CF ikke lukket under snitt, uttrykkskraft-ordning) | · | · | ✓ | · | · | · | **1/6** (+ tema i obliger) |
| **coNP** (coNP-kompletthet, `A NP-kpl ⇔ A̅ coNP-kpl`, CNF/DNF-SAT) | · | · | · | · | · | · | **0/6 eksamen, men egen oblig + gruppeoppgave** |

**Viktigste funn:**

1. **DFA/NFA-konstruksjon er den eneste 100 %-gjengangeren.** Hvert eneste sett åpner
   med å tegne en automat, oversette mellom regex ↔ automat, eller kjøre NFA→DFA-
   potensmengdekonstruksjonen. Dette er den sikreste poengkilden og må sitte mekanisk.

2. **CFG+PDA er nesten like sikkert (83 %).** Nesten alltid via det balanserte
   parentesspråket eller et `aⁿbⁿ`-aktig språk. Studenten må kunne skrive en CFG *og*
   tegne en tilhørende PDA for samme språk.

3. **Reduksjonsbevis for NP-kompletthet er selve kjernen i Del II (83 %).** Malen er
   fast: gitt at X er NP-komplett, konstruer en polynomtids-`f` og vis
   `w ∈ X ⇔ f(w) ∈ Y`. Signaturvarianter: SUBSET-SUM → 3SUBSET-SUM/SSPLIT/
   TRIPPEL-SUBSET-SUM (tallreduksjoner), HAMPATH → HVIT-DS/EXPLEX (graf-/spill-
   reduksjoner). **Å beherske SUBSET-SUM-reduksjonsfamilien gir uttelling nesten
   hvert år.**

4. **Pumpelemmaet er stigende og kommer i begge former.** Ofte som et *par*: bruk
   regulært-pumpelemma til å vise «ikke regulært», og CF-pumpelemma til å vise «ikke
   kontekstfritt» (V2015, V2019). V2017 legger til den subtile fella: et *ikke-regulært*
   språk som *likevel oppfyller* pumpelemmaet (lemmaet er nødvendig, ikke tilstrekkelig).

5. **PSPACE og space-klasser er lav-frekvent men differensierende (67 %).** Kommer som
   NSPACE(n)-plassering (V2014), PSPACE-kompletthet-implikasjoner (V2016), eller det
   tyngste beviset i arkivet: `P ≠ SPACE(n)` via TQBF + space-hierarkiteoremet (V2019).

6. **Avgjørbarhet/uavgjørbarhet vokser i epoke 3.** V2019s 20-påstands-blokk om
   Turing-avgjørbar vs. -gjenkjennbar, `≤m`-lukking, endelige språk, og PCP er den
   tetteste faktatesten i faget. V2017 har den klassiske «hvis L er uavgjørbart, er
   L∪…/vilkårlig konkatenering uavgjørbart».

7. **coNP er «oblig-stoff, ikke eksamensstoff» (foreløpig).** Grundig behandlet i
   oblig 3 og en egen gruppeoppgave (coNP-kompletthet, `A NP-kpl ⇔ A̅ coNP-kpl`,
   CNF/DNF-SAT/TAUT/UNSAT), men ikke sett på de lesbare eksamenssettene. Bør likevel
   dekkes – det er godkjenningskrav og et naturlig eksamenstema.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer fasitenes foretrukne metode
og presisjonsnivå (utledet fra oppgaveformuleringer og de lesbare løsningene).

### A. DFA/NFA-konstruksjon og regulære uttrykk (Del I, 100 %)
- **Krav:** Tegn en korrekt endelig automat for et gitt regex eller en gitt egenskap
  («nøyaktig 3 forekomster av 1», «nest siste tegn er a», «abba som delord», «flere a-er
  enn b-er» – merk: sistnevnte er *ikke* regulært, og en del av oppgaven er å innse det).
  Motsatt vei: gi et regex for et gitt språk. Kjør **potensmengdekonstruksjonen**
  NFA→DFA når det bes om det. Forenkle regulære uttrykk til enklere ekvivalent form.
- **Kanttilfelle:** når egenskapen krever telling uten øvre grense (like mange, delelig
  med), må studenten avgjøre om språket *kan* gjenkjennes av en DFA (delelighet: ja,
  via restklasse-tilstander; ubegrenset likhet/telling: nei).
- **Frekvens:** 6/6.

### B. Kontekstfrie språk – CFG og PDA (Del I, 83 %)
- **Krav:** Gi en CFG som genererer et gitt språk (`aⁿbⁿ`, `aⁱbʲcᵏ` med `i+j=k`,
  balanserte paranteser, palindrom) *og* tegn en PDA som gjenkjenner samme språk.
  Gi en konkret utledning (derivasjon) av en oppgitt streng når det bes om det.
  Avgjør og begrunn om en grammatikk er **tvetydig** (gi to ulike utledningstrær/
  venstreutledninger for samme streng).
- **Frekvens:** 5/6.

### C. Pumpelemma (Del I, 67 % og stigende)
- **Krav:** Bruk **regulært-pumpelemmaet** til å vise at et språk ikke er regulært, og
  **CF-pumpelemmaet** til å vise at et språk ikke er kontekstfritt. Standardmal:
  anta regularitet med pumpelengde p; velg en smart streng `s` med `|s| ≥ p`; vis at
  *enhver* tillatt oppdeling (`s = xyz` med `|xy| ≤ p`, `|y| > 0`) kan pumpes ut av
  språket. **Adversarie-strukturen må være riktig:** motstanderen velger oppdelingen,
  du velger `s` og pumpeeksponenten `i`. CF-varianten: `s = uvxyz`, `|vxy| ≤ p`,
  `|vy| > 0`. Klassikere: `aⁿbⁿcⁿ` er ikke kontekstfri; `aⁿbⁿ` er ikke regulær.
- **Felle (V2017):** et språk som oppfyller pumpelemmaet men *ikke* er regulært –
  studenten må forklare at pumpelemmaet er en **nødvendig, ikke tilstrekkelig**
  betingelse, så oppfyllelse er ikke moteksempel til lemmaet.
- **Lukkethet (V2015):** kombiner tre delspråk (to CF, ett ikke-CF) til å vise at CF-
  språk **ikke er lukket under snitt** (`L1 ∩ L2 = L3`, hvor L1,L2 CF men L3 ikke).
- **Frekvens:** 4/6.

### D. Turing-maskin-konstruksjon (Del I + obliger, 33 % eksamen + tung i oblig)
- **Krav:** Beskriv en TM som avgjør/beregner noe. Fri representasjon: du velger
  tape-format og symboler, men **må beskrive dem oversiktlig** (gjerne via regex for
  input/output). Repertoar: unær aritmetikk (add, mult, partall, delelighet, primtall,
  V2014); `{w#w}` og telling av 0-er/1-er (oblig 2, Sipser 3.8); restriksjonsvarianter
  (**only-right-TM** og only-right-stay-put, V2016 – vis at disse gjenkjenner nøyaktig
  de **regulære** språkene, dvs. tilsvarer endelige automater). Obligene bruker en
  konkret **TM-simulator** (torenord/universaltm) der maskinen faktisk må kjøre.
- **Frekvens:** 2/6 eksamen, men to av tre obliger er TM-tunge.

### E. Avgjørbarhet og uavgjørbarhet (Del I, 33 % og stigende)
- **Krav:** To hovedformer.
  - **Sant/usant-blokk (V2019, 20 påstander):** sikker faktakunnskap om Turing-avgjørbar
    vs. -gjenkjennbar. Faste sannheter: `A` avgjørbar ⇔ både `A` og `A̅` gjenkjennbare;
    avgjørbar ⇒ gjenkjennbar (ikke omvendt); avgjørbare språk lukket under komplement,
    gjenkjennbare *ikke*; endelige språk er avgjørbare; delmengde av avgjørbart er
    *ikke* nødvendigvis avgjørbart; `A ≤m B` + `B` ikke gjenkjennbar ⇒ `A` ikke
    gjenkjennbar (kontrapositiv-retning viktig); PCP er gjenkjennbar men ikke avgjørbar;
    `A` gjenkjennbar ⇒ `A ≤m PCP`. Antigjetting-aktig: usikkerhet straffer seg.
  - **Uavgjørbarhets-konstruksjon (V2017):** gitt et uavgjørbart språk L, vis at avledede
    språk (konkatenering med fast/vilkårlig streng) også er uavgjørbare (reduksjon: en
    avgjører for det avledede ville gi en avgjører for L).
  - **Enumerator ↔ avgjørbarhet (Sipser 3.13, i arkivet):** et språk er avgjørbart hvis
    og bare hvis en enumerator lister det i standard strengrekkefølge. Konstruer begge
    retninger.
- **Frekvens:** 2/6 eksamen, sterkt økende.

### F. Definisjons- og «forklar kort»-spørsmål (Del II, 67 %)
- **Krav:** Presis, kort gjengivelse av en lærebokdefinisjon. Faste: «hva betyr at et
  problem er NP-komplett / NL-komplett / i NP», «hva betyr at L1 er polynomtids-
  reduserbart til L2», «beskriv et kjent NP-komplett språk (SAT / HAMPATH)», «hva er en
  log space transducer», «forskjellen på determinisme og ikke-determinisme (og har
  deterministiske og ikke-deterministiske TM samme uttrykkskraft? – ja)». Gratispoeng
  for den som kan definisjonene ordrett-presist.
- **Frekvens:** 4/6.

### G. NP-kompletthet via reduksjon (Del II – kjernen, 83 %)
- **Krav:** Den sentrale bevistypen. Gitt at X er NP-komplett (SAT, SUBSET-SUM,
  HAMPATH – **kan brukes uten bevis**), vis at Y er NP-komplett ved å:
  1. (ofte oppgitt eller enkelt) Y ∈ NP – gi en polynomisk verifikator/sertifikat.
  2. Konstruer en **polynomtidsberegnbar** reduksjon `f`.
  3. Vis **begge retninger** av korrektheten: `w ∈ X ⇒ f(w) ∈ Y` og
     `f(w) ∈ Y ⇒ w ∈ X` (ofte skrevet som én `⇐⇒` – men begge retninger må vises).
  Dokumenterte reduksjoner i arkivet:
  - **SUBSET-SUM ≤p 3SUBSET-SUM / SSPLIT / TRIPPEL-SUBSET-SUM** (tallmanipulasjon:
    legg til «utfyllings-tall» så en delsum-splitt tilsvarer en delmengde-sum).
  - **HAMPATH ≤p HVIT-DS** (dominosirkel; hvit brikke = node, sort brikke = kant).
  - **et kjent NP-komplett språk ≤p EXPLEX** (graf-spill med poengterskel).
  Retningsdisiplin (jf. IN2010): for å vise at Y er *vanskelig*, reduser **fra** det
  kjente vanskelige X **til** Y – ikke omvendt.
- **Frekvens:** 5/6.

### H. Plassering av språk i klasser (Del II, gjennomgående)
- **Krav:** Avgjør (med begrunnelse) om et gitt språk er i NL / P / NP / PSPACE, og om
  det er komplett for noen av dem. V2013s DPATH-oppgave er arketypen: fem spørsmål om
  samme språk (i NL? NL-komplett? i P? NP-komplett? i PSPACE?), der man **eksplisitt får
  anta `P ≠ NP`** hvis man trenger det – men da må antagelsen oppgis. V2016s
  DS/HVIT-DS: DS er i NL (grafsti-argument), HVIT-DS er NP-hardt (via HAMPATH). Krever
  at studenten kan **klasseinklusjonene** L ⊆ NL ⊆ P ⊆ NP ⊆ PSPACE og hva komplett-
  het i hver betyr.
- **Frekvens:** høy (integrert i C/G).

### I. NL / logspace (Del II, 50 %)
- **Krav:** NL-kompletthet (PATH er NL-komplett – kan brukes; forklar hva NL-komplett
  *betyr*; reduser fra PATH, f.eks. FPATH er NL-komplett). Vis at et språk er i NL ved
  et **ikke-deterministisk logspace-argument** (gjett stien node for node, hold kun
  konstant/logaritmisk mange nodepekere – ikke hele stien). Beskriv/bruk en **log space
  transducer** og gi en algoritme som en slik kan utføre (V2017).
- **Frekvens:** 3/6.

### J. PSPACE og space-hierarki (Del II, 67 %)
- **Krav:** Plasser i NSPACE(n) (V2014: SUBSET-SUM ∈ NSPACE(n) – gjenbruk arbeidsplass).
  PSPACE-kompletthet-implikasjoner (V2016: «hvis X er PSPACE-komplett ⇒ P = PSPACE» –
  avgjør hvilken av to som holder og hvorfor). Det tyngste beviset (V2019):
  `P ≠ SPACE(n)` ved å kombinere (1) TQBF er PSPACE-komplett, (2) TQBF ∈ SPACE(n),
  (3) space-hierarkiteoremet `SPACE(nᵏ) ⊊ SPACE(nᵏ⁺¹)`. Krever at studenten kan lenke
  gitte fakta til en motsigelse.
- **Frekvens:** 4/6.

### K. coNP (oblig + gruppeoppgave, ikke sett på lesbar eksamen)
- **Krav:** coNP = komplementene av NP-språk. coNP-kompletthet definert analogt med NP.
  Vis metaresultater: `A ≤p B ⇒ A̅ ≤p B̅`; `A` er NP-komplett ⇔ `A̅` er coNP-komplett.
  Anvend på CNF/DNF-SAT/UNSAT/TAUT: DNFSAT ∈ P (en klausul er en konjunksjon – sjekk om
  noen er tilfredsstillbar); CNFSAT NP-komplett; CNFUNSAT/DNFTAUT coNP-komplett.
- **Frekvens:** 0/6 eksamen, men egen oblig – bør dekkes i boka.

---

## 4. Sensorens krav

Utledet fra oppgaveformuleringer, poengfordeling og de lesbare løsningsforslagene
(de skannede fasitene 2–13 bekrefter mønsteret).

### Faste metaregler
1. **«Gjør dine egne forutsetninger» – men oppgi dem.** Står på hvert sett. Der en
   antagelse trengs (f.eks. `P ≠ NP` i DPATH-oppgaven), skal den gjøres **eksplisitt**.
2. **Reduksjoner skal ha alle tre komponenter:** (i) Y ∈ NP/klassen, (ii) `f`
   polynomtidsberegnbar, (iii) **begge korrekthetsretninger**. Å hoppe over én retning
   av `⇔` er et klassisk poengtap.
3. **Reduksjonsretning må stemme.** Reduser *fra* det kjente vanskelige problemet *til*
   det nye. Å redusere feil vei beviser ingenting om det nye problemets vanskelighet.
4. **Pumpelemma-bevis må la motstanderen velge oppdelingen.** Studenten velger `s` og
   pumpeeksponenten, ikke oppdelingen. Å «velge» en snill oppdeling er ugyldig.
5. **Automater tegnes presist** (starttilstand, aksepttilstander, komplett transisjons-
   funksjon). En DFA må ha overgang for *hvert* symbol fra *hver* tilstand.
6. **Klar naturlig-språk-forklaring belønnes** (jf. IN2010). En log-space- eller
   NL-algoritme kan beskrives på høyt nivå så lenge ressursbruken (plass/tid) argumenteres
   presist.

### Hva som skiller karakternivåene
- **Bestått (E):** korrekte automat-/CFG-konstruksjoner på Del I; kjenner definisjonene;
  et reduksjonsforsøk med riktig `f` selv om en korrekthetsretning mangler eller er tynn.
- **Midtsjikt (C/D):** korrekte pumpelemma-bevis; komplett reduksjon med begge retninger;
  riktig klasseplassering, men ikke alltid den skarpeste (f.eks. viser «i NP» der «i P»
  eller «i NL» var mulig og mer poenggivende).
- **Toppsjikt (A/B):** velger den **skarpeste** klassen (NL/logspace-argument der det er
  mulig i stedet for bare NP), håndterer kanttilfeller i reduksjonen (utfyllings-tallene
  i SUBSET-SUM-varianter, `mod`-avslutningen i sykliske strukturer), lenker gitte fakta
  til de tyngste bevisene (`P ≠ SPACE(n)` via TQBF + hierarkiteorem), og forklarer den
  subtile logikken (pumpelemma = nødvendig, ikke tilstrekkelig).

---

## 5. Typiske feil

1. **Bare én retning av reduksjonen.** Å vise `w ∈ X ⇒ f(w) ∈ Y` men glemme det
   omvendte (eller motsatt). `⇔` krever begge.
2. **Feil reduksjonsretning.** Redusere *til* det kjente vanskelige problemet i stedet
   for *fra* det – beviser ingenting om det nye problemet (samme felle som i IN2010s
   NP-del).
3. **Pumpelemma-motstanderen «hjelpes».** Å velge en bekvem oppdeling `s = xyz` i stedet
   for å vise at *alle* tillatte oppdelinger kan pumpes ut. Bevisstrukturen snus.
4. **Feil streng i pumpelemmaet.** Velge et `s` som lar seg pumpe (og dermed ikke gir
   motsigelse). Strengen må tvinge `y` inn i den «tellende» delen.
5. **Tro at pumpelemma-oppfyllelse ⇒ regularitet.** Lemmaet er nødvendig, ikke
   tilstrekkelig; oppfyllelse er ikke bevis for regularitet (V2017-fella).
6. **Ufullstendig DFA.** Mangler overgang for et symbol fra en tilstand, eller mangler
   sink-/dødtilstand. En NFA kan ha manglende overganger; en DFA kan ikke.
7. **Forveksle «gjenkjenner» og «avgjør» / «Turing-gjenkjennbar» og «-avgjørbar».**
   Gjenkjennbar tillater loop på nei-instanser; avgjørbar stopper alltid. Sentralt i
   V2019-blokka: gjenkjennbare språk er *ikke* lukket under komplement.
8. **Glemme å argumentere for polynom/logspace-ressursbruk.** Å gi en `f` eller en
   TM uten å vise at den er henholdsvis polynomtids- eller logspace-begrenset. Ressurs-
   argumentet *er* poenget i en reduksjon/plasseringsoppgave.
9. **Anta uten å oppgi.** Bruke `P ≠ NP` i en begrunnelse uten å si det eksplisitt der
   oppgaven tillater antagelser.
10. **Glemme siste kant i syklisk struktur** (dominosirkel/Hamiltonsykel): sjekke `bᵢ→bᵢ₊₁`
    men glemme `bₙ→b₁`. Samme klasse feil som i IN2010s Hamiltonsykel-verifikator.
11. **PDA/CFG-mismatch.** Gi en CFG og en PDA som gjenkjenner *ulike* språk, eller en PDA
    uten korrekt stakk-tømming ved aksept.

---

## 6. Begreps- og faktaapparat

**IN2080 følger Sipser-boka.** Notasjon, definisjoner og språknavn er Sipser-standard;
læreboken vår bør speile dette.

### Automater og formelle språk
- **DFA/NFA** `(Q, Σ, δ, q0, F)`; NFA→DFA via **potensmengdekonstruksjon**;
  regulære uttrykk; **GNFA** (for regex-utvinning). **Regulære språk** = det DFA/NFA/
  regex/only-right-TM gjenkjenner.
- **CFG** (variabler, terminaler, produksjoner, utledning, tvetydighet); **PDA**
  (pushdown med stakk); **kontekstfrie språk**. `aⁿbⁿ` er CF ikke regulær; `aⁿbⁿcⁿ`
  er ikke CF.
- **Pumpelemma** (regulært: `s = xyz`, `|xy| ≤ p`, `|y| > 0`; kontekstfritt:
  `s = uvxyz`, `|vxy| ≤ p`, `|vy| > 0`). Verktøy for **negative** resultater.
- **Uttrykkskraft-hierarki:** regulære ⊊ kontekstfrie ⊊ Turing-beregnbare. Lukkethet:
  regulære lukket under snitt/union/komplement; **CF ikke lukket under snitt/komplement**.

### Beregnbarhet
- **Turing-maskin** `(Q, Σ, Γ, δ, q0, qaccept, qreject)`; varianter (multitape, NTM,
  only-right, ORSP) – alle med samme kraft som standard-TM *unntatt* de restriktive
  (only-right = kun regulære språk). **Church-Turing-tesen** (implisitt).
- **Turing-avgjørbar** (stopper alltid) vs. **Turing-gjenkjennbar** (kan loope på nei);
  **enumerator** (avgjørbar ⇔ enumereres i standardrekkefølge). Avgjørbare lukket under
  komplement; gjenkjennbare **ikke**. `A` avgjørbar ⇔ `A` og `A̅` gjenkjennbare.
- **Uavgjørbarhet:** ATM, HALT, **PCP** (Posts korrespondanseproblem – gjenkjennbar,
  ikke avgjørbar). **Mappingreduksjon** `A ≤m B`; kontrapositiv: `A ≤m B` + `B` ikke
  gjenkjennbar ⇒ `A` ikke gjenkjennbar. `A` gjenkjennbar ⇒ `A ≤m PCP`.

### Kompleksitet
- **Klasser:** L ⊆ NL ⊆ P ⊆ NP ⊆ PSPACE (= NPSPACE, Savitch) ⊆ EXPTIME.
  **SPACE/NSPACE/TIME/NTIME**-notasjon; NSPACE(n); space-hierarkiteoremet
  `SPACE(nᵏ) ⊊ SPACE(nᵏ⁺¹)`.
- **Reduksjoner:** **polynomtids** `≤p` (for P/NP/coNP) og **logspace** `≤L` (for NL);
  refleksiv, transitiv, *ikke* antisymmetrisk. **Log space transducer** for
  logspace-reduksjoner.
- **Komplette problemer (navngitt i arkivet):** **SAT/3SAT** (NP-komplett, Cook-Levin);
  **SUBSET-SUM** (NP-komplett – reduksjonsvert i mange oppgaver); **HAMPATH** (NP-komplett);
  **PATH** (NL-komplett, ∈ P); **TQBF** (PSPACE-komplett, ∈ SPACE(n)). **coNP** og
  coNP-kompletthet (CNFUNSAT, DNFTAUT).
- **Verifikator/sertifikat:** X ∈ NP ⇔ polynomisk verifiserbart JA-vitne.
- **Åpne spørsmål:** `P vs. NP` uavklart; `L vs. NL`, `P vs. PSPACE` uavklart.

### Krysslenking til IN2010
IN2010 dekker `P`/`NP`/verifikator/reduksjonsretning **kvalitativt** (sant/usant-fakta,
skriv en verifikator). IN2080 dekker samme apparat **formelt og konstruktivt** (bevis
klasseinklusjoner, konstruer reduksjoner, plasser språk i L/NL/P/NP/PSPACE). En student
som har tatt IN2010 kjenner P/NP-intuisjonen; IN2080 legger til beregnbarhet (Turing,
uavgjørbarhet), automatteori (regulær/CF), og den formelle reduksjons-/klassemaskineriet.

---

## 7. Prognose og prioritering

### Nivå 1 – må beherskes perfekt (kommer nesten garantert)
1. **DFA/NFA-konstruksjon + regex + NFA→DFA** – 100 %. Tegn presise automater; oversett
   begge veier; potensmengdekonstruksjon. Sikreste poengene i faget.
2. **CFG + PDA for samme språk** – 83 %. Balanserte paranteser, `aⁿbⁿ`-familien;
   utledninger; tvetydighet.
3. **NP-kompletthet via reduksjon** – 83 %. SUBSET-SUM-familien (3-/SSPLIT/TRIPPEL) og
   HAMPATH-familien (HVIT-DS/EXPLEX). Tren malen: verifikator + polynomisk `f` + **begge**
   korrekthetsretninger + riktig retning.
4. **Definisjons-«forklar kort»** – 67 %. NP/NL/NP-komplett/polynomtidsreduksjon/log
   space transducer/determinisme vs. ikke. Gratispoeng.

### Nivå 2 – avgjør C→A
5. **Pumpelemma (begge former)** – 67 % ↑. Riktig adversarie-struktur; smart strengvalg;
   nødvendig-ikke-tilstrekkelig-innsikten; lukkethetsargument (CF ikke lukket under snitt).
6. **Klasseplassering** – integrert. Velg **skarpeste** klasse (NL/logspace før NP);
   DPATH-arketypen (fem klasser om ett språk); anta `P ≠ NP` eksplisitt ved behov.
7. **PSPACE/space-hierarki** – 67 %. NSPACE(n)-plassering; PSPACE-komplett-implikasjoner;
   `P ≠ SPACE(n)` via TQBF + hierarkiteorem (det tyngste beviset – differensierer topp).
8. **Avgjørbarhet/uavgjørbarhet** – 33 % ↑. V2019-faktablokka (avgjørbar vs. gjenkjennbar,
   `≤m`, PCP, endelige/komplement); uavgjørbarhets-reduksjoner.

### Nivå 3 – bør kunne (lav-frekvent, men pensum)
9. **NL/logspace** – 50 %. NL-kompletthet (PATH/FPATH), NL-argument (gjett sti, konstant
   plass), log space transducer.
10. **Turing-maskin-konstruksjon** – 33 % eksamen, tung i oblig. Unær aritmetikk,
    `w#w`, restriksjonsvarianter (only-right ⇔ regulær).
11. **coNP** – oblig-stoff. coNP-kompletthet; `A NP-kpl ⇔ A̅ coNP-kpl`; CNF/DNF-familien.

**Prognose for neste ordinære eksamen:** Del I med (a) én DFA/NFA/regex-oppgave (nesten
sikkert), (b) én CFG+PDA-oppgave, (c) ett pumpelemma-bevis (regulært og/eller CF), og
muligens (d) en avgjørbarhets-/Turing-blokk. Del II med (e) minst én reduksjon for
NP-kompletthet (SUBSET-SUM- eller HAMPATH-familien er mest sannsynlig), (f) plassering
av et konstruert språk i L/NL/P/NP/PSPACE med begrunnelse, og muligens (g) et
space-/PSPACE-argument. **Studenten som kan tegne automater feilfritt, skrive
komplette to-veis-reduksjoner i riktig retning, føre pumpelemma-bevis med korrekt
adversarie-struktur, og velge den skarpeste kompleksitetsklassen, scorer høyt.**

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/IN2080/`.

**Oppgavesett lest grundig (tekst-lesbare, brukt som primærkilde):**
`exam13.pdf` (INF2080 V2013), `exam14.pdf` (V2014), `exam15.pdf` (V2015),
`exam16.pdf` (V2016), `exam17.pdf` (INF2080 V2017, digital m/skisseark),
`exam19.pdf` (IN2080 V2019). Disse inneholder fullstendige oppgavetekster og er
analysens hovedgrunnlag for form, temafrekvens og oppgavesjangre.

**Obligatoriske innleveringer (2020, lest grundig):**
`oblig1.pdf` (regulære språk, all-NFA), `oblig2.pdf` (CFG/PDA, pumpelemma, TM-simulator),
`oblig3.pdf` (CNF/DNF-SAT, coNP-kompletthet). Viser godkjenningskravene og
coNP-/TM-stoffet som ikke er synlig på de lesbare settene.

**Ekstra oppgaver / notater (tekst-lesbare):**
`oppgaver-27april.pdf` (egenskaper ved `≤p`; coNP-kompletthet), `313.pdf` (Sipser 3.13:
avgjørbar ⇔ enumereres i standardrekkefølge), `notater-zoomgruppetime-4mai.pdf` (kun
sidetitler lesbare – skannet innhold).

**Løsningsforslag (skannet – IKKE tekst-lesbare, OCR utelatt per instruks):**
`in2080-losningsforslag2.pdf` … `in2080-losningsforslag13.pdf` (12 filer, alle 0
tekst-tegn – rene bildeskann). Notert som eksisterende fasitmateriale; brukt kun til å
bekrefte at faget har detaljerte offisielle løsninger. Innholdet er *ikke* gjengitt,
og analysens metode-/poengbeskrivelser er utledet fra oppgavetekstene og standard
fagpraksis, ikke fra disse skannene. `normat2005.pdf` (skannet fagartikkel) og
`313.pdf`-type ekstramateriale er bakgrunn.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse for IN2080
(kilde: <https://www.uio.no/studier/emner/matnat/ifi/IN2080/>). Emnet er aktivt,
10 studiepoeng, bachelor (2000-nivå), IFI. Forkunnskaper: IN1150/INF1080 (Logiske
metoder). Pensumbok: **Michael Sipser, _Introduction to the Theory of Computation_**
(identifisert via oblig- og eksamensreferanser til Sipser kapitler/oppgaver).

**Nabodokument:** `../in2010/EKSAMENSANALYSE.md` (UiOs algoritmefag), brukt til
krysslenking av den delte P/NP-intuisjonen og for å avgrense hvor IN2080 er mer formelt.

**Merknader om kildene:**
- **To emnekoder følges ad:** INF2080 (Logikk og beregninger, t.o.m. V2017) → IN2080
  (Beregninger og kompleksitet, fra ~2019). Innholdskjernen (automater → beregnbarhet →
  kompleksitet) er stabil; prognosen er kalibrert mot epoke 3 (IN2080/Sipser-notasjon).
- **Opphavsrett:** alle beskrivelser av oppgaver, løsningsmetoder og sensorforventninger
  er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller
  løsningsforslag er gjengitt ordrett. Språknavn (SUBSET-SUM, HAMPATH, TQBF, PATH),
  klassenavn (L, NL, P, NP, PSPACE) og standard definisjoner/teoremer er allmenn faglig
  notasjon.
- **De skannede løsningsforslagene (nr. 2–13)** kunne ikke tekst-ekstraheres og ble
  ikke OCR-behandlet (per instruks om å hoppe over tung tesseract-OCR). Analysens
  kvantitative temafrekvens bygger derfor på de seks lesbare oppgavesettene + tre obliger.
