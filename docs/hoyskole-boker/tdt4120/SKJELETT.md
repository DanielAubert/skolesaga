# Bokskjelett: TDT4120 Algoritmer og datastrukturer — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (17 NTNU-sett med offisielle løsningsforslag, august 2015 –
> august 2023; faglærer Magnus Lie Hetland; pensum Cormen, Leiserson, Rivest &
> Stein — *Introduction to Algorithms* (CLRS)). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori / drill / øvingseksamen) er
> obligatoriske og gjentas ikke i sin helhet her. **All pseudokode og alle
> algoritmenavn følger CLRS** (det er bokstandard fordi oppgavene og fasitene gjør
> det). Alle oppgaver, tall, grafer og innpakninger i den ferdige boka skal være
> **nyskrevne** (opphavsrett): algoritmenavn, kjøretidsuttrykk og standardnotasjon
> er allmenn faglig notasjon, men ingen oppgavetekster eller løsningsforslag fra
> reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4120` |
| Tittel | **TDT4120 Algoritmer og datastrukturer (NTNU)** |
| Institusjon | **NTNU** (ny institusjon i `institusjoner.ts` — se fase 5) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste, gjentakende oppgavemønstre) |
| Antall kapitler | **38** (1 eksamenskart + 32 tema/drill + 5 eksamenstrening) |
| Estimert totaltid | **≈ 2 805 min ≈ 47 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **622** (krav ≥500) |
| Flashcards totalt | **534** (krav ≥500) |
| Prøver | **28** (4 per temadel 1–7) + **3 øvingseksamener** (kap. 8.3–8.5) |

**Pitch (én avsnitt):** TDT4120 har hatt en påfallende stabil eksamensmal i over
et tiår (samme faglærer, samme pensumbok CLRS). Vurderingen er én **firetimers
skoleeksamen** (100 %, A–F) med **ingen hjelpemidler** (gjeldende kode E, fra des
2022) — bestående av **~20 korte frisvarsoppgaver som teller likt**. Den viktigste
formelle føringen går igjen i hvert sett: **«Lange svar teller ikke positivt.»**
Faget har ingen enkelt «kjerneoppgave» slik modellfag i økonomi har — det har en
**kjernepensumliste**, og **bredden er selve eksamensformen**: alle åtte
pensumbolker (asymptotikk, splitt-og-hersk, sortering/søk, datastrukturer,
dynamisk programmering, grådighet, grafalgoritmer, NP-teori) dukker opp **hvert
eneste år**. Du kan ikke droppe et tema og satse på at det ikke kommer. Denne boka
driller derfor bredden systematisk, i to kalibrerte ferdigheter: (1) å skrive
**presise, korte svar** i CLRS-notasjon (en egen sjanger), og (2) å **utføre
pensumalgoritmene feilfritt for hånd** og **gjenkjenne hvilket klassisk problem** et
innpakket scenario reduseres til. De tre 100 %-gjengangerne (asymptotisk notasjon,
sortering, NP/reduksjoner), de tunge håndkjørings- og designtemaene (BST/haug,
maks-flyt, dynamisk programmering — alle 94 %) og det ene innsiktsskillet sensor
oftest fremhever (**reduksjonsretningen** `A ≤ₚ B`) får hver sitt drillkapittel.

**Kritisk stilregel (gjelder HELE boka) — «kortsvarssjangeren»:**
1. **Presisjon over lengde.** Sensorinstruksen «lange svar teller ikke positivt»
   er bokas viktigste stilføring. Alle løsningsforslag skal svare med det
   etterspurte — ett tall, ett uttrykk, én sluttilstand, én kort setning — **rått**,
   uten overflødig utledning. Boka lærer eksplisitt at et avsnitt med korrekt
   grunnidé **ikke** slår ett riktig uttrykk, og at ekstra tekst stjeler tid fra 19
   andre likt vektede oppgaver.
2. **Svar bare på det du blir spurt om.** «Oppgi output» ≠ «forklar algoritmen».
   «Oppgi hele tabellen» ≠ «oppgi den logiske køen». Hvert løsningsforslag markerer
   hva oppgaven faktisk ber om.
3. **Delvis uttelling er regelen.** Sensor gir delpoeng; ta med **hovedpoenget
   først** i definisjoner. Løsningsforslagene skal markere hva som gir uttelling ved
   hvert steg (margnotater i drill- og eksamenscasene), og påpeke at «beslektede
   korrekte svar godtas» på forklarings- og designoppgaver.
4. **Ingen hjelpemidler (kode E).** Alt må **kunnes utenat** — kjøretider,
   pseudokode, definisjoner og de fem asymptotiske symbolene. Boka er bygd for pugg:
   flashcards og quiz er kalibrert som ren gjenkalling. Ingen «slå det opp»-holdning.
5. **CLRS-navn og -pseudokode er fasit.** Bruk nøyaktig CLRS-navnene (`Merge-Sort`,
   `Build-Max-Heap`, `Ford-Fulkerson`, `Tree-Insert` …) siden oppgavene og fasitene
   forventer gjenkjenning. Norsk fagterm kan gis i parentes ved første forekomst
   (f.eks. «minimalt spenntre (*minimum spanning tree*, MST)»), men algoritmenavnet
   holdes på CLRS-form.

**Kritisk innsiktsregel (reduksjonsretning — gjelder Del 7 og alle designoppgaver):**
`A ≤ₚ B` betyr «A reduseres til B», og at **B er minst like vanskelig som A**. For å
vise at et problem X er vanskelig, må du redusere **FRA** et kjent vanskelig problem
**TIL** X — aldri motsatt. Å redusere *til* et NP-komplett problem beviser
**ingenting** om ditt problems vanskelighet. Dette er det enkeltpoenget fasitene
oftest fremhever som skille mellom riktig og galt, og det får eget drillkapittel
(7.4) og gjennomsyrer designdelen (8.2).

**Korona-caveat (skal stå i Del 0):** Settene fra 2020–2022 med hjelpemiddelkode A
var **hjemmeeksamener** med alle hjelpemidler, delvis bestått/ikke bestått og
essayformat (færre, bredere oppgaver). De er eksplisitt merket **ikke
representative** for ordinær eksamen. Boka bygges mot **kode D/E-formatet** (des
2022 og aug 2023 er de to ferskeste representative settene). Essaysjangeren (I) fra
korona nevnes bare som treningsverktøy i å forklare *hvorfor*, ikke som forventet
form.

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «Notasjons- og pseudokodeliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et algoritmefag er det
  presise apparatet ikke bare matematiske symboler, men også **CLRS-notasjon,
  kjøretidsuttrykk og pseudokode-navn med kontrakt**. Blokken heter derfor
  **«Notasjons- og pseudokodeliste»** og lister ALT delkapitlet bruker: (i) alle
  asymptotiske symboler og kjøretidsuttrykk (`Θ(n \lg n)`, `O(E \lg V)`, `V`/`E` =
  antall noder/kanter); (ii) grafnotasjon (`G=(V,E)`, `w(u,v)`, `c_f(u,v)`,
  `d[u]`/`π[u]`, snitt `(S,T)`); (iii) hver CLRS-algoritme kapitlet bruker, med **inn/
  ut-kontrakt og kjøretid** i én linje (f.eks. «`Build-Max-Heap(A)` — bygger maks-haug
  av `A[1..n]` in-place; `Θ(n)`»). Regelen «per delkapittel, ikke arv fra tidligere»
  beholdes: hvert delkapittel lister på nytt det det faktisk bruker. Unntak kun for
  helt notasjonsfrie kapitler (finnes knapt).
- **`theorem`-blokker brukes for algoritme-invarianter, nøkkelresultater OG
  pseudokode-kontrakter.** Der DNA-en bruker `theorem` for matematiske resultater,
  brukes den her for (a) resultatene som skal sitte i ryggmargen — masterteoremet,
  **snittegenskapen** (letteste kant over et snitt er trygg), **maks-flyt/min-snitt-


  teoremet**, **heltallsteoremet**, Θ(n lg n)-nedre grensen for
  sammenligningssortering — og (b) **pseudokode-kontrakter**: hvert algoritmekapittel
  har en `theorem`-blokk «Pseudokode-kontrakt» som gjengir CLRS-algoritmen (nyskrevet
  pseudokode i CLRS-stil) med **invariant, pre-/postbetingelse og kjøretid**. Disse
  er bokas «teoremer».
- **Flashcards kalibreres som algoritme ↔ kjøretid ↔ egenskap.** Flashcards
  genereres KUN fra toppnivå `definition`-blokker med `title`. For dette faget egner
  formatet seg perfekt: hvert kort parer et **navn** (algoritme/begrep/notasjon) med
  presis **kjøretid + krav/egenskap** (f.eks. «`Dijkstra` → `O(E \lg V)` med
  binærhaug; krever **ikke-negative** kantvekter»; «Stabil sortering → like elementer
  bytter ikke innbyrdes rekkefølge»). Fordi eksamen er hjelpemiddelfri, ER dette
  puggematerialet. Kalibrer flashcards som ren gjenkalling av kjøretider, krav,
  definisjoner og de fem asymptotiske symbolene.
- **Quiz kalibreres som hjelpemiddelfri faktakontroll (MC).** Den reelle eksamen er
  **frisvar, ikke flervalg** — men plattformens quiz er MC. Quiz brukes derfor til
  **kunnskapskontroll med entydig fasit**: kjøretidsfakta, asymptotisk forenkling
  (ett strammeste uttrykk), definisjonsgjenkjenning, «stemmer dette?» (ja/nei),
  reduksjonsretning, og «hvilken algoritme løser dette problemet». Selve
  frisvars-**presisjonen** trenes i `exercise`- og drillkapitlene (som har `solution`
  + `hints`), ikke i quiz. `options[0]` = riktig svar (runtime stokker).
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent sjanger må drilles umiddelbart etter teorien (jf. econ1310/in1900-
  avviket). **Unntak:** den åpne **designdrillen** (sjanger H, kap. 8.2) ligger i Del
  8, fordi den er tverrgående og gjenbruker maks-flyt, DP, Gale-Shapley og BFS på
  tvers av alle temadelene.
- **Kapittelantall (38) overstiger DNA-veiledningen (20–35).** Dette er en bevisst,
  frekvensdrevet konsekvens av kalibreringen: **bredden er eksamensformen**. Åtte
  likt vektede pensumbolker som alle kommer hvert år kan ikke komprimeres til 20
  kapitler uten å underdekke et garantert tema. Hver del holdes likevel stram, og
  `kjenne`-temaer får kompakte kapitler.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): verktøyene bygges i den
rekkefølgen de forutsetter hverandre. Frekvensen styrer *omfanget* — de fem «må
beherskes perfekt»-temaene får flere kapitler + eget drillkapittel; nivå 2/3-temaer
får kompakte kapitler. `sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Asymptotisk analyse og rekurrenser | 6 | **Asymptotikk 100 %** (nivå 1, garantert 2–3 oppg./sett) + rekurrenser 76 % + splitt-og-hersk 71 %. Fundamentet for alle kjøretidssvar → 2 teori + drill for asymptotikk, 2 teori + drill for rekurrenser. |
| 2 | Sortering og utvelgelse | 4 | **Sortering 100 %** (nivå 1). Algoritmer, kjøretider, stabilitet, kombinasjonsspørsmål + utvelgelse 47 % → 3 teori + drill. |
| 3 | Datastrukturer: hauger, søketrær og hashing | 5 | **BST & hauger 94 %** (nivå 1, sikreste håndkjøring) + hashing 41 %↑ + køer/stakker 29 % + amortisert/union-find 29 % → 2 teori + håndkjøringsdrill + 2 kompakte. |
| 4 | Grafalgoritmer: traversering, spenntrær og korteste vei | 5 | Traversering 82 % + MST 82 % + SSSP 76 % + APSP 65 % + topologisk 41 % (nivå 2/3) → 4 teori + håndkjøringsdrill. |
| 5 | Maksimal flyt | 3 | **Maks-flyt 94 %** (nivå 1/2, ryggraden i designoppgavene) → 2 teori + drill (håndkjøring + modellering). |
| 6 | Dynamisk programmering, grådighet og stabil matching | 5 | **DP 94 %** (nivå 2, andre designryggrad) + grådighet 65 % + **Gale-Shapley fremvoksende** (begge ferskeste sett) → 2 DP-teori + DP-drill + grådighet + fullverdig Gale-Shapley-kapittel. |
| 7 | NP-kompletthet og reduksjoner | 4 | **NP/reduksjoner 100 %** (nivå 1). Klasser, sertifikat, NPC-katalog + **reduksjonsretning** (det dokumenterte skillepunktet) → 3 teori + eget reduksjonsretning-drill. |
| 8 | Eksamenstrening | 5 | Kortsvarssjangeren + åpen-design-drill (sjanger H) + **3 komplette øvingseksamener** (20-kortsvarsmalen). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene
i siste del. Her ligger håndkjørings- og forenklingsdrillene (1.3 asymptotikk, 1.6
rekurrens, 2.4 sortering, 3.3 hauger/BST, 4.5 grafalgoritmer, 5.3 maks-flyt, 6.3 DP,
7.4 reduksjonsretning) inne i sine respektive temadeler, fordi hver er en
75–100 %-gjenganger som må drilles umiddelbart. Del 8 beholder kortsvarssjanger-guiden,
den tverrgående **åpen-design-drillen** (sjanger H) og de komplette øvingseksamenene.

---

## 3. Sjangerkatalog (A–I)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert
fra EKSAMENSANALYSE §3. Merk at eksamen er **frisvar** (ikke flervalg): sjangrene er
oppgave*innpakninger* innenfor kortsvarsrammen.

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | Asymptotisk forenkling og notasjon (definér 5 symboler; strammeste grense; ledd for ledd) | kortsvar (uttrykk) | **100 %**; ofte 2–3 oppg./sett |
| **B** | Rekurrensløsning med **navngitt** metode (masterteorem m/tilfelle; iterasjon = eksakt; substitusjon = verifiser) | kortsvar (uttrykk) | 76 % |
| **C** | Håndkjøring av navngitt CLRS-algoritme, trinn for trinn — oppgi **kun** sluttilstand / ett tall / hele tabellen | svarrute/tabell | nær hvert sett; BST/haug hyppigst |
| **D** | Definisjon «med egne ord» — kort og presis, hovedpoeng først | kortsvar (setning) | flere per sett |
| **E** | Kjøretidskunnskap og -sammenligning — faktakunnskap direkte; skill garantert (`O`/`Θ`) fra inputavhengig | kortsvar (uttrykk) | innbakt i sortering (100 %) + SSSP |
| **F** | Egenskaps-/«stemmer dette?» — **ja/nei først**, deretter én presis setning | kortsvar (ja/nei + begrunnelse) | 41–76 %; hele nov 2019 bygd slik |
| **G** | Reduksjoner og NP-kompletthet — **riktig reduksjonsretning**; `P=NP`-konsekvens; pseudopolynomisk vs. NP-hardt | kortsvar/begrunnelse | **100 %** |
| **H** | Åpen algoritmedesign («Hvordan vil du gå frem?») — gjenkjenn klassisk problem, navngi paradigme, **rekonstruér løsning** | kort designskisse | hvert ordinært sett (siste 3–5 oppg.) |
| **I** | Nivådelt essay (**kun korona** 2020) — «forklar og utdyp», rubrikk Noe→Akseptabelt→Godt | essay | **ikke representativt**; kun treningsverktøy |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». For dette faget:
**Innholdskontrakt** = definisjoner/teoremer/**pseudokode-kontrakter** kapitlet SKAL
lære (med CLRS-notasjon og kjøretid). Prioritetsklasser: **perfekt** (nivå 1) /
**kunne** (nivå 2) / **kjenne** (nivå 3). Hvert teorikapittel har standard-DNA-en:
Eksamensvinkel-`tip` → Forkunnskaper-`text` + Notasjons-og-pseudokodeliste-`collapsible`
→ Motivasjon → `definition`/`theorem` (inkl. pseudokode-kontrakt) → utledning m/intuisjon
(kun der eksamen krever aktiv utledning) → 2–4 `example` (siste på eksamensnivå) →
Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå, alle med
`solution` + `hints`) → Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel →
løsningsoppskrift → sensor-kommentert case → 8–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4120

- **id:** `tdt4120-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers hjelpemiddelfri kortsvarseksamen), temafrekvensene, sjangerkatalogen A–I og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet 2015–2023. Skal gjengi: (i) **formen** — skriftlig skoleeksamen, **4 timer**, A–F, teller 100 %; **~20 korte frisvarsoppgaver som teller likt** (5 %, 5–7 % i eldre sett); **ingen midtsemesterprøve som teller**; (ii) **hjelpemiddelkode E** (ingen hjelpemidler, gjeldende fra des 2022) — alt må kunnes utenat; (iii) **korona-caveaten** (kode A-settene 2020–2022 er ikke-representative hjemmeeksamener med essay); (iv) at **bredden er eksamensformen**: alle 8 pensumbolker kommer hvert år, ingen «kjerneoppgave» å satse på; (v) **temafrekvens-tabellen** (asymptotikk 100 %, sortering 100 %, NP/reduksjoner 100 %, BST/hauger 94 %, maks-flyt 94 %, DP 94 %, traversering 82 %, MST 82 %, SSSP 76 %, rekurrenser 76 %, D&C 71 %, APSP 65 %, grådighet 65 %, select 47 %, hashing 41 %↑, topologisk 41 %, køer/stakker 29 %, amortisert/union-find 29 %, stabil matching 12 %↑); (vi) at oppgavene stiger løst i vanskelighet og at de **siste 3–5 alltid er åpne designoppgaver** (der toppkarakteren skilles); (vii) **sensors metaregler** — «lange svar teller ikke positivt», svar bare på det etterspurte, delvis uttelling (hovedpoeng først), læringsmål-treff, robust sensur (tvilsoppgaver tas ut til kandidatens fordel).
- **Innholdskontrakt:** Sjangerkatalogen A–I (§3) presenteres som studentens sjekkliste med typisk vekt. Pluss **prognosen for neste ordinære eksamen (kode E)**: ~20 likt vektede kortsvar ≈ 2–3 asymptotikk/forenkling (A) + 1 rekurrens (B) + 2–3 sortering/kjøretid (E) + 1–2 håndkjøringer (C: BST/haug + én graf-/matrisealgoritme) + 3–4 definisjoner (D) + 2–3 NP/reduksjon (G, minst én reduksjonsretning) + **3–5 åpne designoppgaver** (H, hovedsakelig maks-flyt eller DP, muligens én Gale-Shapley). Avslutt med **leseplanen**: de fem «må perfekt»-delene (Del 1 asymptotikk, Del 2 sortering, Del 7 NP, Del 3 BST/haug-håndkjøring, Del 5 maks-flyt) + de tre 94 %-designtemaene (maks-flyt, DP, håndkjøring) er kjernen; nivå 3-temaene (APSP, grådighet, select, hashing, Gale-Shapley, amortisert) merkes «bør kjenne til, differensierer topp».
- **Oppgavesjangre:** Ingen algoritmeoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Med 20 likt vektede oppgaver på 4 timer — hvor lang tid bør du maks bruke på én åpen designoppgave før du går videre?» og «Rangér disse fem temaene etter forventet antall oppgaver på neste sett.»
- **Typiske feil:** Metafeilene — bruke tid på lange svar (ingen uttelling, «lange svar teller ikke positivt»); satse på at et tema ikke kommer (bredden gjør det umulig); tro at korona-settenes format speiler ordinær eksamen; anta at man kan slå opp kjøretider (kode E: ingen hjelpemidler).
- **Quiz: 14 · Flashcards: 14** (form, frekvenser, metaregler, sjangerkatalogen)

---

### Del 1 — Asymptotisk analyse og rekurrenser *(asymptotikk: PERFEKT)*

> Del 1 er fundamentet: hvert kjøretidssvar i resten av boka bygger på det. Asymptotisk
> notasjon (sjanger A) har 100 % frekvens og gir 2–3 billige, garanterte poeng per sett.
> Kap. 1.3 og 1.6 er de to store drillkapitlene.

#### Kapittel 1.1: Asymptotisk notasjon — de fem symbolene

- **id:** `tdt4120-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De fem asymptotiske symbolene `O, Ω, Θ, o, ω` med formelle definisjoner — grunnlaget alle kjøretidssvar hviler på.
- **Eksamensbelegg:** Sjanger A + E, 100 %. Å kunne **definere alle fem symbolene** er et fast direkte krav (sjanger D). Fordi eksamen er hjelpemiddelfri må definisjonene kunnes utenat. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker (én per symbol, kort og presis, med `∃c,n_0`-formen): `O(g)` (øvre grense, `0 ≤ f(n) ≤ c·g(n)` for `n≥n_0`); `Ω(g)` (nedre grense); `Θ(g)` (tett grense, `f = O(g)` **og** `f = Ω(g)`); `o(g)` (strengt mindre, gjelder for **alle** `c>0`); `ω(g)` (strengt større). Intuisjonstabellen `O↔≤`, `Ω↔≥`, `Θ↔=`, `o↔<`, `ω↔>`. Standard vekstordning (`1 < \lg n < n < n\lg n < n^2 < n^3 < 2^n < n!`). Transitivitet og at `Θ` er en ekvivalensrelasjon (kort, kun til bruk). Notasjonsavklaring: `f(n) = O(g(n))` leses «tilhører mengden».
- **Oppgavesjangre:** D (definér symbol) + A (klassifisér). Mønstereksempel (D, nyskrevet): «Definér `Θ(g(n))` presist, og forklar med én setning forskjellen fra `O(g(n))`.» + (A): «Er `3n^2 + 5n = Θ(n^2)`? `= O(n^3)`? `= o(n^3)`? `= ω(n)`? Svar for hver.»
- **Typiske feil:** Blande `O` og `Θ` (påstå tett grense der bare øvre er vist); glemme kravet «for alle `c`» i `o`/`ω` (mot «for én `c`» i `O`/`Ω`); definere `Ω` som «minst» uten `n_0`; forveksle notasjonens venstre-/høyreside.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.2: Forenkling av asymptotiske uttrykk

- **id:** `tdt4120-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-1-1` · **kapitteltype:** teori
- **description:** De faste forenklingsvariantene: summer, blandede operatorer og sammensatte brøkuttrykk — løst ledd for ledd til det strammeste enkeltuttrykket.
- **Eksamensbelegg:** Sjanger A, 100 %, ofte 2–3 per sett; de mest forutsigbare poengene i hele faget. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem`-blokk **forenklingsreglene**: (i) i en **sum** dominerer det raskest voksende leddet; (ii) en `Ω`/`ω`-term uten øvre grense fjerner enhver `O`-grense for hele summen; (iii) oppgi alltid det **strammeste** enkeltuttrykket. Faste varianter (`example` hver): «gi nedre og øvre grense for `n + Θ(n^2) + O(n^3)`» → oppgi `Ω(n^2)` og `O(n^3)` hver for seg; «forenkle `Ω(n + Θ(n^2) + O(n^3))`» → `Ω(n^2)` (dominerende, minst presise grense bestemmer); blandede operatorer `O(n)+Ω(n)+Θ(n)+o(n)+ω(n) = ω(n)` (raskest voksende uten øvre grense); sammensatte brøk `Ω(n^3)/O(n^2) + …` løses **ledd for ledd** (bytt teller/nevner med sin ekstremverdi, forkort, summér).
- **Oppgavesjangre:** A. Mønstereksempel (nyskrevet): «Forenkl `O(n^2) + Θ(n \lg n) + ω(n) + o(n^3)` til ett strammeste uttrykk.» og «Regn ut `Θ(n^4)/Ω(n^2) + O(n)·ω(1)` ledd for ledd.»
- **Typiske feil:** «Kaste bort informasjon» — oppgi en løsere grense når en strammere finnes (§5.4); glemme at en `ω`/`Ω`-term uten øvre grense sprenger `O`-grensen for summen; behandle brøkuttrykk som ett ledd i stedet for teller/nevner hver for seg; forveksle hvilken ekstremverdi teller vs. nevner skal ha.
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 1.3: DRILL — Asymptotisk forenkling og notasjon

- **id:** `tdt4120-1-3` · **number:** 1.3 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4120-1-2` · **kapitteltype:** drill
- **description:** Systematisk drill i sjanger A: definér symbolene, klassifisér funksjoner og forenkl sammensatte uttrykk til det strammeste svaret — de garanterte poengene.
- **Eksamensbelegg:** Sjanger A i hvert sett (100 %), ofte 2–3 oppgaver. Dekker også de faste D-definisjonsspørsmålene om symbolene. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) identifisér hvert ledd og dets vekstklasse; 2) for **summer**: behold det raskest voksende leddet; sjekk om en `ω`/`Ω`-term fjerner øvre grense; 3) for **grenser hver for seg**: oppgi strammeste `Ω` og strammeste `O` separat; 4) for **brøk**: bytt teller/nevner med ekstremverdi, forkort; 5) skriv **kun** det strammeste enkeltuttrykket. Fast fellekatalog som SKAL demonstreres: løs grense der strammere finnes (§5.4), `ω`/`Ω` sprenger `O`-summen, «for alle `c`» i `o`/`ω`. Gjennomsporet eksamenscase med margnotater om hva som gir uttelling.
- **Oppgavesjangre:** A, D. 12–16 oppgaver på eksamensnivå som roterer alle variantene (definér symbol, klassifisér, forenkl sum, blandede operatorer, brøk), hver med full løsning.
- **Typiske feil:** Hele fellekatalogen samlet (§5.4 løs grense; feil «for alle c»; brøk som ett ledd).
- **Quiz: 22 · Flashcards: 10**

#### Kapittel 1.4: Rekurrenser — masterteoremet

- **id:** `tdt4120-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-1-1` · **kapitteltype:** teori
- **description:** Masterteoremet for `T(n)=aT(n/b)+f(n)` — de tre tilfellene, inkludert log-faktor-tilfellet som er den faste fellen.
- **Eksamensbelegg:** Sjanger B, 76 %. Nesten alltid «navngi metoden». Det kritiske: **riktig tilfelle**, inkl. log-faktoren i tilfelle 2. Faglærer har tatt en rekurrens ut av sensur fordi den falt utenfor pensumvarianten. Prioritet: **perfekt** (kjernen), tett integrert med sortering (Del 2). Bruk kun; se 1.5 for utledning av intuisjon.
- **Innholdskontrakt:** `theorem` **masterteoremet**: `T(n)=aT(n/b)+f(n)`, `a≥1, b>1`. Sammenlign `f(n)` med `n^{\log_b a}`. **Tilfelle 1** (`f(n)=O(n^{\log_b a - ε})`) → `Θ(n^{\log_b a})`. **Tilfelle 2** (pensumvariant: `f(n)=Θ(n^{\log_b a} \lg^k n)`, **`k \ge 0`**) → `Θ(n^{\log_b a} \lg^{k+1} n)`. **Tilfelle 3** (`f(n)=Ω(n^{\log_b a + ε})` + regularitet) → `Θ(f(n))`. Eksempeltabell: `T(n)=2T(n/2)+n → Θ(n\lg n)` (Merge-Sort); `T(n)=4T(n/2)+n^2\lg n → Θ(n^2\lg^2 n)` (tilfelle 2, `k=1`); `T(n)=T(n/2)+1 → Θ(\lg n)` (binærsøk). Delspørsmål «hvor mange nivåer i rekursjonstreet?» → `Θ(\log_b n)`.
- **Oppgavesjangre:** B. Mønstereksempel (nyskrevet): «Løs `T(n)=3T(n/3)+n\lg n` med masterteoremet. Angi hvilket tilfelle, og hvorfor log-faktoren gir `k=1`.»
> ⚠ **`k \ge 0`, ikke `k > 0`.** Rettet 2. august 2026 mot fasitene: des 2016 og aug 2025 bruker begge tilfelle 2 med `k=0`, og bokas egen eksempeltabell har `T(n)=2T(n/2)+n` (Merge-Sort, `k=0`) som tilfelle 2. Det dokumenterte unntaket er NEGATIV `k` — aug 2023-fasit avviser `k=-1` og tar oppgaven ut av sensur. Se BYGGEKONTRAKT §K3.3 og §A2.

- **Typiske feil:** Feil tilfelle — særlig glemme log-faktoren når `f(n)` matcher `n^{\log_b a}` opp til en logaritme (§5.5); bruke tilfelle 2 med `k<0` (utenfor pensumvarianten); regne `\log_b a` feil; bruke masterteoremet på ikke-standard rekurrens (der iterasjon kreves).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.5: Rekurrenser — iterasjon, substitusjon og splitt-og-hersk

- **id:** `tdt4120-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-1-4` · **kapitteltype:** teori
- **description:** Iterasjonsmetoden for **eksakte** svar, substitusjonsmetoden for induksjonsverifikasjon, og splitt-og-hersk-paradigmet (binærsøk) som gir rekurrensene.
- **Eksamensbelegg:** Sjanger B, 76 % + D&C-analyse 71 %. Iterasjon gir **eksakt** svar uten asymptotisk notasjon; substitusjon brukes til å **verifisere**. Prioritet: **perfekt** (iterasjon/substitusjon), **kunne** (D&C-designbiten).
- **Innholdskontrakt:** `theorem`/utledning **iterasjonsmetoden** (repeated substitution): teleskopér summen, gjenkjenn den (`1+2+…+2^{n-1}=2^n-1`, `1+2+…+n=n(n+1)/2`), sett inn grunntilfellet — gir **eksakt** svar (`T(n)=T(n-1)+2^{n-1} ⇒ 2^n-1`); delspørsmål «hvor mange linjer/nivåer?» → `Θ(\log_b n)`. **Substitusjonsmetoden**: gjett svar, verifiser induksjonssteget (vis det når det bes om). **Splitt-og-hersk** som paradigme: del → løs delproblemer → kombiner; `Bisect` (binærsøk, `T(n)=T(n/2)+Θ(1) → Θ(\lg n)`); D&C har **ingen overlappende** delproblemer (kontrast til DP i Del 6). Pseudokode-kontrakt for `Bisect` (iterativt: `lo`, `hi`, `mid`; invariant «nøkkelen ligger i `A[lo..hi]` hvis den finnes»; `Θ(\lg n)`).
- **Oppgavesjangre:** B. Mønstereksempler: (iterasjon) «Finn et **eksakt** uttrykk for `T(n)=T(n-1)+n`, `T(0)=0`.»; (substitusjon) «Vis ved induksjon at `T(n)=2T(n/2)+n` gir `T(n)=O(n\lg n)`.»
- **Typiske feil:** Oppgi asymptotisk grense der oppgaven ber om **eksakt** svar (iterasjon); teleskopere feil (feil grunntilfelle); i substitusjon gjette riktig men ikke fullføre induksjonssteget; tro at D&C-rekurrenser har overlappende delproblemer.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 1.6: DRILL — Rekurrensløsning med navngitt metode

- **id:** `tdt4120-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4120-1-5` · **kapitteltype:** drill
- **description:** Full drill på sjanger B: velg riktig metode (masterteorem / iterasjon / substitusjon), løs, og oppgi svaret på riktig form (asymptotisk vs. eksakt).
- **Eksamensbelegg:** Sjanger B, 76 %. Kritisk å **navngi metoden** og velge riktig masterteorem-tilfelle. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) er rekurrensen på `aT(n/b)+f(n)`-form? → masterteorem (finn tilfelle, sjekk log-faktor); 2) eksakt svar bedt om? → iterasjon (teleskopér, sett inn grunntilfelle, **ingen asymptotikk**); 3) verifisere et gitt svar? → substitusjon (induksjon); 4) oppgi svaret på riktig form. Gjennomregnet eksamenscase med margnotater (hva gir uttelling: riktig metode + riktig tilfelle). 10–14 oppgaver som roterer alle metodene og masterteorem-tilfellene (inkl. tilfelle 2 med log-faktor og en «faller utenfor pensumvarianten»-felle).
- **Oppgavesjangre:** B. Mønstereksempel: «For hver rekurrens, navngi metoden og løs: (a) `T(n)=2T(n/2)+n\lg n`, (b) `T(n)=T(n-1)+n` (eksakt), (c) `T(n)=8T(n/2)+n^3` (angi tilfelle).»
- **Typiske feil:** §5.5 (feil masterteorem-tilfelle / glemt log-faktor); asymptotisk svar der eksakt kreves; ikke navngi metoden; bruke masterteorem der `f(n)` ikke passer pensumvarianten.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (Asymptotisk analyse og rekurrenser)
1. Prøve 1.A (25 min): Definér de fem symbolene + klassifisér funksjoner (sjanger A/D).
2. Prøve 1.B (30 min): Forenkling — summer, blandede operatorer, brøk (sjanger A).
3. Prøve 1.C (30 min): Rekurrenser — masterteorem med riktig tilfelle (sjanger B).
4. Prøve 1.D (35 min): Blandet — iterasjon (eksakt) + substitusjon + D&C-analyse (B).

---

### Del 2 — Sortering og utvelgelse *(sortering: PERFEKT)*

#### Kapittel 2.1: Sammenligningsbaserte sorteringer

- **id:** `tdt4120-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-1-4` · **kapitteltype:** teori
- **description:** `Insertion-Sort`, `Merge-Sort`, `Quicksort` og `Randomized-Quicksort` — mekanikk, kjøretider (beste/verste/forventet) og `Θ(n\lg n)`-nedre grensen.
- **Eksamensbelegg:** Sjanger E + C, 100 %. Kjøretidsfakta forventes direkte og hjelpemiddelfritt. `Heapsort` behandles i kap. 3.1 (haugstrukturen), men nevnes her som `Θ(n\lg n)`-sammenligningssortering. Prioritet: **perfekt**.
- **Innholdskontrakt:** Pseudokode-kontrakter (`theorem`) for `Insertion-Sort` (invariant: `A[1..j-1]` sortert; `Θ(n)` best / `Θ(n^2)` verst), `Merge-Sort` (D&C; `Merge` er `Θ(n)`; `T(n)=2T(n/2)+Θ(n) → Θ(n\lg n)`), `Quicksort` (`Partition` om et pivot; `Θ(n\lg n)` forventet / `Θ(n^2)` verst) og `Randomized-Quicksort` (`Randomized-Partition`; `Θ(n\lg n)` forventet uansett input). `theorem` **`Ω(n\lg n)`-nedre grensen** for sammenligningsbasert sortering (beslutningstre-argument, kort). Kjøretidstabell: navn → best/verste/forventet + in-place? Merk skillet garantert (`Θ`) vs. inputavhengig (§5.9).
- **Oppgavesjangre:** E + C (håndkjøring henvises til drill 2.4). Mønstereksempel (E): «Hva er `Insertion-Sort` sitt beste tilfelle, og på hvilken input oppstår det?» (`Θ(n)`, ferdigsortert).
- **Typiske feil:** Hevde `Insertion-Sort` har `Ω(n\lg n)` i beste tilfelle (det er `Θ(n)`, §5.9); blande `Quicksort` verste (`Θ(n^2)`) med forventet (`Θ(n\lg n)`); tro at `Merge-Sort` er in-place; glemme at `Ω(n\lg n)` kun gjelder **sammenligningsbaserte** sorteringer.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 2.2: Lineær sortering og stabilitet

- **id:** `tdt4120-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4120-2-1` · **kapitteltype:** teori
- **description:** `Counting-Sort`, `Radix-Sort`, `Bucket-Sort` — når lineær sortering er mulig, og hva stabilitet betyr og krever.
- **Eksamensbelegg:** Sjanger D (stabilitetsdefinisjon) + E, 100 %. Fast: «når kan du sortere i lineær tid?». Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **stabil sortering** (like elementer beholder innbyrdes rekkefølge). Pseudokode-kontrakter: `Counting-Sort` (krever heltallsnøkler i `O(n)`-område `[0..k]`; `Θ(n+k)`; **stabil**); `Radix-Sort` (sifferløkke med en stabil delsortering per siffer; `Θ(d(n+k))`; **krever** at delsorteringen er stabil); `Bucket-Sort` (uniformt fordelt input; `Θ(n)` forventet). Faste egenskaper: hvilke sorteringer er stabile (Insertion, Merge, Counting; Quick/Heap ikke uten videre); hvorfor lineær sortering **omgår** `Ω(n\lg n)` (den er ikke sammenligningsbasert).
- **Oppgavesjangre:** D + E + F. Mønstereksempel (D): «Definér *stabil* sortering med egne ord, og forklar hvorfor `Radix-Sort` krever en stabil delsortering.»
- **Typiske feil:** Tro at lineær sortering alltid går (glemme heltalls-/områdekravet i `Counting-Sort`); påstå at `Radix-Sort` fungerer med en ustabil delsortering; blande stabilitet med «sortert korrekt»; tro at `Ω(n\lg n)` også binder lineær sortering.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 2.3: Utvelgelse — Partition, Randomized-Select og Select

- **id:** `tdt4120-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4120-2-1` · **kapitteltype:** teori
- **description:** Finne det `i`-te minste elementet uten å sortere: `Partition`, `Randomized-Select` og `Select` (median av medianer) med kjøretider.
- **Eksamensbelegg:** Sjanger E + C, 47 % (kjenne), men `Partition` er kjernen i `Quicksort`-håndkjøring og et fast pseudokode-fragment (sjanger «gjenkjenn/fyll inn linje»). Prioritet: **kjenne** (Select), men `Partition` **kunne**.
- **Innholdskontrakt:** Pseudokode-kontrakter: `Partition` (siste element som pivot; invariant om `≤pivot`/`>pivot`-regionene; `Θ(n)`); `Randomized-Select` (forventet `Θ(n)`, verste `Θ(n^2)`); `Select` / median av medianer (grupper à 5; garantert `Θ(n)` verste tilfelle). Kjøretidstabell. Merk: `Randomized-Select` er `Θ(n)` **forventet**, ikke garantert.
- **Oppgavesjangre:** E + «fyll inn linjen i `Partition`». Mønstereksempel: «Hva er verste-tilfelle-kjøretiden til `Randomized-Select`, og hvorfor er den ikke `Θ(n)`?» (`Θ(n^2)`; uheldige pivotvalg hver gang).
- **Typiske feil:** Oppgi `Randomized-Select` verste tilfelle som `Θ(n)` (det er forventet; verste er `Θ(n^2)`); blande `Select` (garantert `Θ(n)`) med `Randomized-Select`; feil pivot-plassering i `Partition`-invarianten.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 2.4: DRILL — Sortering: håndkjøring, kjøretid og kombinasjon

- **id:** `tdt4120-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4120-2-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger C (håndkjøring av `Counting-Sort`/`Partition`) og E (kjøretidsfakta + kombinasjonsspørsmål: rekkefølgen på to sorteringer).
- **Eksamensbelegg:** Sjanger E i hvert sett (100 %) + C (`Counting-Sort`-linje aug 2023, `Partition` aug 2019). Kombinasjonsspørsmål er en fast felle. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **håndkjøring** (C): utfør algoritmen mekanisk, oppgi **kun** det etterspurte (telletabell / sluttilstand / ett tall). For **kjøretid** (E): hent faktum, skill garantert fra inputavhengig, vis kort utregning. **Kombinasjonsregelen**: kjør `Merge-Sort` **før** `Insertion-Sort` → `Θ(n\lg n)`; motsatt rekkefølge risikerer `Θ(n^2)` (fordi Insertion på tilnærmet sortert er `Θ(n)`, men Merge bryr seg ikke). Gjennomregnet case med margnotater. 10–14 oppgaver: håndkjør `Counting-Sort` og `Partition`; oppgi kjøretider for alle sju sorteringer; kombinasjonsspørsmål; «når er lineær sortering mulig».
- **Oppgavesjangre:** C, E. Mønstereksempel (E, kombinasjon): «Du kjører først algoritme X, deretter algoritme Y på resultatet. For hvilken rekkefølge av `Merge-Sort` og `Insertion-Sort` blir total kjøretid `Θ(n\lg n)`, og hvorfor?»
- **Typiske feil:** Feil kjøretidsfakta (§5.9); oppgi verste der forventet spørres (og motsatt); feil kombinasjonsrekkefølge; ved håndkjøring oppgi mer enn det etterspurte (§«svar bare på det du blir spurt om»).
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (Sortering og utvelgelse)
1. Prøve 2.A (25 min): Kjøretider og stabilitet — alle sju sorteringer (sjanger E/D).
2. Prøve 2.B (30 min): Håndkjøring av `Counting-Sort` + `Partition` (sjanger C).
3. Prøve 2.C (30 min): Kombinasjonsspørsmål + «når lineær sortering» (E/F).
4. Prøve 2.D (35 min): Blandet — utvelgelse + `Ω(n\lg n)`-argument + definisjon (D/E).

---

### Del 3 — Datastrukturer: hauger, søketrær og hashing *(BST & hauger: PERFEKT håndkjøring)*

> BST og hauger er den sikreste håndkjøringskandidaten (94 %) og de to strukturene
> studenter oftest forveksler (typisk feil #2). De læres derfor i kontrast, med et
> felles håndkjøringsdrillkapittel (3.3). Hashing (41 %↑) og de øvrige strukturene
> er nivå 3.

#### Kapittel 3.1: Hauger og Heapsort

- **id:** `tdt4120-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-2-1` · **kapitteltype:** teori
- **description:** Maks-haugen som array, `Max-Heapify`, `Build-Max-Heap`, `Heap-Extract-Max` og `Heapsort` — inkludert at `Build-Max-Heap` er `Θ(n)`, ikke `Θ(n\lg n)`.
- **Eksamensbelegg:** Sjanger C (håndkjøring) + E, 94 %. `Build-Max-Heap = Θ(n)` er en fast kjøretidsfelle. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **haugegenskapen** (maks-haug: forelder `≥` **begge** barn — opp–ned-orden, **ingen** venstre–høyre-orden). Array-representasjon (`parent(i)=⌊i/2⌋`, `left(i)=2i`, `right(i)=2i+1`). Pseudokode-kontrakter (`theorem`): `Max-Heapify` (`O(\lg n)`, siver ett element ned), `Build-Max-Heap` (**`Θ(n)`** — den stramme analysen, ikke `n·O(\lg n)`), `Heap-Extract-Max` (`O(\lg n)`), `Heapsort` (`Θ(n\lg n)`, in-place, **ustabil**). Prioritetskø-bruken (kort). Kritisk håndkjøringsregel: **utfør trinnene selv om input bryter haugegenskapen** (§5.10) — reparér ikke først.
- **Oppgavesjangre:** C + E. Mønstereksempel (E): «Hva er kjøretiden til `Build-Max-Heap`, og hvorfor er den `Θ(n)` og ikke `Θ(n\lg n)`?»
- **Typiske feil:** `Build-Max-Heap = Θ(n\lg n)` (det er `Θ(n)`, §5.9); forveksle haugegenskapen med BST-egenskapen (§5.2); ved håndkjøring reparere en ugyldig haug før operasjonen (§5.10); feil barn-/forelderindeks i array.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 3.2: Binære søketrær

- **id:** `tdt4120-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-3-1` · **kapitteltype:** teori
- **description:** `Tree-Insert`, `Inorder-Tree-Walk`, `Tree-Search`/`Minimum`/`Maximum` — inkludert nøkkelinnsikten at inorder på et BST gir **sortert** rekkefølge.
- **Eksamensbelegg:** Sjanger C (håndkjøring, hyppigst av alle) + D, 94 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **BST-egenskapen** (venstre deltre `≤` rot `≤` høyre deltre — venstre–høyre-orden). Pseudokode-kontrakter: `Tree-Insert` (`O(h)`), `Inorder-Tree-Walk` (`Θ(n)`, gir **sortert** utskrift), `Tree-Search`/`Tree-Minimum`/`Tree-Maximum` (`O(h)`). Forventet høyde `Θ(\lg n)` for tilfeldig bygd tre; verste `Θ(n)` (degenerert). Nøkkeltriks: inorder-utskrift = sortert → utnyttes i håndkjøring.
- **Oppgavesjangre:** C + D. Mønstereksempel (C): «Sett inn 5, 2, 8, 1, 3, 7 i denne rekkefølgen i et tomt BST, og oppgi `Inorder-Tree-Walk`-utskriften.» (utnytt at den er sortert).
- **Typiske feil:** Forveksle BST-egenskapen med haugegenskapen (§5.2 — den mest fremhevede datastruktur-feilen); tro at inorder gir innsettingsrekkefølgen (den gir sortert); feil ved innsetting (gå til feil side); anta balansert tre (høyde kan bli `Θ(n)`).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.3: DRILL — Håndkjøring av hauger og BST

- **id:** `tdt4120-3-3` · **number:** 3.3 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4120-3-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger C for de to sikreste håndkjøringsstrukturene: bygg, sett inn, ekstraher og traverser — mekanisk og feilfritt.
- **Eksamensbelegg:** Sjanger C, 94 % (den hyppigste håndkjøringskandidaten). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For **haug**: 1) tegn arrayet som tre; 2) utfør `Build-Max-Heap`/`Heap-Extract-Max`/`Heapsort`-trinn **mekanisk** (reparér ikke ugyldig input først, §5.10); 3) oppgi **kun** det etterspurte (sluttarray / rot / ett tall). For **BST**: 1) sett inn i gitt rekkefølge; 2) for inorder — utnytt at utskriften er **sortert**; 3) oppgi sluttilstand. Gjennomkjørt case med margnotater (delvis uttelling for delvis riktig tilstand). 10–14 oppgaver: `Build-Max-Heap` på gitt array, `Heap-Extract-Max` (også på ugyldig haug), `Heapsort`-passering, `Tree-Insert` + `Inorder`, `Tree-Maximum`.
- **Oppgavesjangre:** C. Mønstereksempel: «Utfør `Heap-Extract-Max` én gang på arrayet `[3, 9, 5, 1, 8]` (som IKKE er en gyldig maks-haug) ved å følge algoritmen mekanisk. Oppgi arrayet etterpå.»
- **Typiske feil:** §5.2 (BST vs. haug), §5.10 (reparere før mekanisk kjøring), oppgi mer enn etterspurt, feil array/tre-indeksering.
- **Quiz: 20 · Flashcards: 12**

#### Kapittel 3.4: Hashing

- **id:** `tdt4120-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4120-1-1` · **kapitteltype:** teori
- **description:** Hashtabeller med kjeding, kollisjoner, lastfaktor og hva som gjør en hashfunksjon god — et voksende tema (3/3 i 2022–23).
- **Eksamensbelegg:** Sjanger D + E + F, 41 % men **voksende** (alle tre 2022–23-settene). Prioritet: **kjenne** (men prioritér gitt trenden).
- **Innholdskontrakt:** `definition` **kjeding** (kollisjoner løses ved lenket liste per bøtte), **kollisjon**, **lastfaktor** `α=n/m`. Forventet søketid `Θ(1+α)` under enkel uniform hashing; verste `Θ(n)` (alt i én bøtte). Hva gjør en hashfunksjon god (uniform fordeling, deterministisk, rask). Divisjonsmetoden (`h(k)=k \bmod m`) og multiplikasjonsmetoden (kort, kun begrep).
- **Oppgavesjangre:** D + F. Mønstereksempel (F): «Stemmer det at søk i en hashtabell med kjeding alltid er `O(1)`? Svar ja/nei og begrunn med én setning.» (Nei — forventet `Θ(1+α)`, verste `Θ(n)`.)
- **Typiske feil:** Påstå garantert `O(1)` (det er forventet, ikke verste); blande kjeding med åpen adressering; glemme lastfaktorens rolle; tro at en hvilken som helst hashfunksjon gir uniform fordeling.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.5: Køer, stakker, amortisert analyse og disjunkte mengder

- **id:** `tdt4120-3-5` · **number:** 3.5 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-3-1` · **kapitteltype:** teori
- **description:** FIFO-kø med wraparound (håndkjøring), stakk (LIFO), `Table-Insert` (amortisert `O(1)`) og disjunkte mengder (`Union-Find`) — de øvrige strukturene.
- **Eksamensbelegg:** Sjanger C (kø-håndkjøring med wraparound) + D + E, 29 %. `Union-Find` er verktøyet i `Kruskal` (Del 4). Prioritet: **kjenne**.
- **Innholdskontrakt:** Pseudokode-kontrakter: FIFO-kø `Enqueue`/`Dequeue` med `head`/`tail` og **wraparound** (sirkulært array; oppgi **hele** tabellen inkl. «døde» celler); stakk `Push`/`Pop` (LIFO). `theorem` **amortisert analyse** av `Table-Insert` (dynamisk tabell som dobles → amortisert `O(1)` per innsetting; aggregert-/regnskapsmetoden kort). Disjunkte mengder: `Make-Set`, `Union`, `Find-Set`, `Link`; skogrepresentasjon; brukes for komponent-/ekvivalensproblemer.
- **Oppgavesjangre:** C (kø) + D + E. Mønstereksempel (C): «Utfør `Enqueue(a)`, `Enqueue(b)`, `Dequeue`, `Enqueue(c)` på en sirkulær kø av lengde 3 med `head`/`tail`. Oppgi **hele** tabellen og verdiene til `head` og `tail`.»
- **Typiske feil:** Bytte om `head`/`tail` (§5.3, delvis uttelling); glemme **wraparound** eller oppgi bare den logiske køen i stedet for hele tabellen (§5.3); tro at `Table-Insert` er `Θ(n)` per innsetting (amortisert `O(1)`); blande stakk (LIFO) og kø (FIFO).
- **Quiz: 16 · Flashcards: 18**

**Prøve-kvote Del 3:** 4 prøver (Datastrukturer)
1. Prøve 3.A (30 min): Håndkjøring av hauger — `Build-Max-Heap` + `Heap-Extract-Max` (sjanger C).
2. Prøve 3.B (30 min): Håndkjøring av BST — `Tree-Insert` + `Inorder` (sjanger C).
3. Prøve 3.C (25 min): BST vs. haug + kjøretider (`Build-Max-Heap = Θ(n)`) (D/E).
4. Prøve 3.D (30 min): Hashing + kø med wraparound + `Union-Find`-begreper (C/D/F).

---

### Del 4 — Grafalgoritmer: traversering, spenntrær og korteste vei

> Grafdelen bunter fem temaer som alle kommer nesten hvert år (traversering 82 %,
> MST 82 %, SSSP 76 %, APSP 65 %, topologisk 41 %). Felles håndkjøringsdrill i 4.5.

#### Kapittel 4.1: Grafrepresentasjon, traversering og topologisk sortering

- **id:** `tdt4120-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4120-3-5` · **kapitteltype:** teori
- **description:** Nabomatrise vs. naboliste, `BFS`, `DFS` med kantklassifisering, og topologisk sortering via **synkende finish-tid**.
- **Eksamensbelegg:** Sjanger C + D + F, 82 % (traversering) / 41 % (topologisk). Topologisk-via-finish-tid er en fast F-felle. Prioritet: **kunne**.
- **Innholdskontrakt:** Representasjoner: nabomatrise (`Θ(V^2)` plass, `O(1)` kantoppslag) vs. naboliste (`Θ(V+E)` plass, bedre for glisne grafer) — styrker/svakheter. Pseudokode-kontrakter: `BFS` (`Θ(V+E)`, korteste vei i **kanttall**, `d`/`π`); `DFS` (`Θ(V+E)`, discover-/finish-tid, kantklassifisering: tre-/tilbake-/forlengs-/krysskant). `definition` **topologisk sortering** (lineær orden i DAG; kant `u→v` gir `u` før `v`; finnes via **synkende finish-tid** i `DFS`). Tilbakekant ⇔ syklus.
- **Oppgavesjangre:** C + D + F. Mønstereksempler: (D) «Definér topologisk sortering, og forklar hvordan `DFS` gir den.»; (F) «Stemmer det at topologisk sortering ordner nodene etter **starttid**?» (Nei — synkende **finish-tid**, §5.11).
- **Typiske feil:** Blande topologisk sortering med **starttid** (det er synkende finish-tid, §5.11); tro at `BFS` gir korteste vei i **vekt** (den gir færrest **kanter**); feil kantklassifisering; velge nabomatrise for glisne grafer uten begrunnelse.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.2: Minimale spenntrær — Prim og Kruskal

- **id:** `tdt4120-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-4-1` · **kapitteltype:** teori
- **description:** `MST-Prim` og `MST-Kruskal`, snittegenskapen og hvorfor en letteste kant over et snitt er **trygg**.
- **Eksamensbelegg:** Sjanger C (Kruskal-håndkjøring) + D + F, 82 %. Snittegenskapen er en fast definisjons-/argumentoppgave. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **spenntre** (tre av grafens **egne** kanter som dekker alle noder) og **MST** (minimal total kantvekt). `theorem` **snittegenskapen**: en letteste kant som krysser et snitt som **respekterer** valgene så langt, er en **trygg** kant (kan trygt legges til MST-en). Pseudokode-kontrakter: `MST-Prim` (voks ett tre fra en rot, prioritetskø; `O(E\lg V)`), `MST-Kruskal` (sortér kanter, legg til hvis de ikke lager syklus, `Union-Find`; `O(E\lg V)`). Snittstrategien som fellesnevner.
- **Oppgavesjangre:** C + D + F. Mønstereksempel (D): «Forklar MST-snittstrategien med egne ord — hva betyr det at en kant er *trygg*?»
- **Typiske feil:** Tro at MST er unikt (kan være flere ved like vekter); feil ved Kruskal-håndkjøring (legge til en kant som lager syklus); blande spenntre (grafens egne kanter) med et vilkårlig tre; hevde snittegenskapen uten «respekterer valgene».
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.3: Korteste vei fra én kilde — Dijkstra, Bellman-Ford, DAG

- **id:** `tdt4120-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4120-4-1` · **kapitteltype:** teori
- **description:** `Dijkstra`, `Bellman-Ford` og `DAG-Shortest-Path` — krav per algoritme (negative kanter/sykler), kjøretider og forgjengerstrukturen.
- **Eksamensbelegg:** Sjanger E + F + C, 76 %. «Dijkstra tåler ikke negative kanter» er en fast F-oppgave. Prioritet: **kunne**.
- **Innholdskontrakt:** Felles: kantslakking (*relax*), `d[v]`/`π[v]`. Pseudokode-kontrakter: `Dijkstra` (grådig, prioritetskø; `O(E\lg V)` med binærhaug; **krever ikke-negative** kantvekter); `Bellman-Ford` (`V-1` runder slakking; `Θ(VE)`; **tåler negative kanter**, **oppdager** negative sykler nåbare fra kilden; tidlig-stopp → `Θ(V+E)` beste tilfelle); `DAG-Shortest-Path` (topologisk orden + én slakkerunde; `Θ(V+E)`; **krever DAG**). Kjøretidstabell med krav-kolonne. Merk: `Θ` for garantert, inputavhengig markert.
- **Oppgavesjangre:** E + F + C. Mønstereksempler: (F) «Kan `Dijkstra` brukes på en graf med én negativ kant? Svar ja/nei + begrunnelse.» (Nei — bruk `Bellman-Ford`, §5.8); (E) «Kjøretid for `Dijkstra` med binærhaug?» (`O(E\lg V)`).
- **Typiske feil:** Bruke `Dijkstra` på negative kantvekter (§5.8); tro `Bellman-Ford` bare *finner* negative sykler uten å håndtere dem; feil kjøretid (`Dijkstra` `O(E\lg V)`, ikke `O(V^2\lg V)`); bruke `DAG-Shortest-Path` på en graf med sykel.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 4.4: Alle-til-alle korteste vei

- **id:** `tdt4120-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-4-3` · **kapitteltype:** teori
- **description:** `Floyd-Warshall` (`d`- og `π`-regel), `Slow-APSP` (min-pluss-produkt) og `Transitive-Closure` — matrisebaserte APSP-algoritmer.
- **Eksamensbelegg:** Sjanger C (matrisehåndkjøring) + E, 65 % (kjenne, men differensierer topp). Prioritet: **kjenne**.
- **Innholdskontrakt:** Pseudokode-kontrakter: `Floyd-Warshall` (DP over mellomnoder; **`d`-regelen** `d^{(k)}_{ij}=\min(d^{(k-1)}_{ij}, d^{(k-1)}_{ik}+d^{(k-1)}_{kj})` og **`π`-regelen** for forgjengermatrisen; `Θ(V^3)`); `Slow-APSP` (**min-pluss-matriseprodukt**, finn `l^{(2)}_{ij}` = korteste vei med ≤2 kanter; `Θ(V^4)` naivt); `Transitive-Closure` (boolsk variant; finnes en vei?). `Print-All-Pairs-Shortest-Path` fra `π`-matrisen (kort).
- **Oppgavesjangre:** C + E. Mønstereksempel (C): «Gitt vektmatrisen `W`, regn ut `l^{(2)}_{ij}` med min-pluss-produktet for én oppgitt celle.»
- **Typiske feil:** Bruke vanlig matriseprodukt i stedet for **min-pluss** i `Slow-APSP`; feil oppdatering av `π`-matrisen i `Floyd-Warshall`; blande `d`- og `π`-regelen; feil `k`-indeksering (mellomnode-nivå).
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 4.5: DRILL — Håndkjøring av grafalgoritmer

- **id:** `tdt4120-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4120-4-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger C for grafdelen: `Kruskal`, `DAG-Shortest-Path`, `BFS`/`DFS`-orden, `Floyd-Warshall` (`d`/`π`), `Slow-APSP`, `Transitive-Closure`.
- **Eksamensbelegg:** Sjanger C, graf-/matrisehåndkjøring i mange sett (traversering 82 %, MST 82 %, APSP 65 %). Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** 1) les grafen (representasjon); 2) utfør navngitt algoritme **mekanisk**, i den rekkefølgen algoritmen dikterer; 3) oppgi **kun** det etterspurte (kantrekkefølge / matrisecelle / d-verdi / finish-tider). For **Kruskal**: list kantene i valgt rekkefølge. For **Floyd-Warshall**: både `d`- og `π`-regelen. Gjennomkjørt case med margnotater. 10–14 oppgaver på tvers av grafalgoritmene, hver med full løsning.
- **Oppgavesjangre:** C. Mønstereksempel: «Kjør `Kruskal` på denne vektede grafen og list kantene i den rekkefølgen de legges til MST-en.»
- **Typiske feil:** §5.11 (finish- vs. starttid i topologisk/DFS), min-pluss-forveksling (§4.4), Kruskal legger til syklusskapende kant, oppgi mer enn etterspurt.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (Grafalgoritmer)
1. Prøve 4.A (30 min): Traversering + topologisk sortering (`BFS`/`DFS`, finish-tid) (sjanger C/F).
2. Prøve 4.B (30 min): MST — Kruskal-håndkjøring + snittegenskapen (sjanger C/D).
3. Prøve 4.C (35 min): Korteste vei fra én kilde — krav + kjøretider + negative kanter (E/F).
4. Prøve 4.D (35 min): APSP — `Floyd-Warshall`/`Slow-APSP`-håndkjøring (sjanger C).

---

### Del 5 — Maksimal flyt *(prioritet: PERFEKT — designryggrad)*

> Maks-flyt (94 %) er nesten alltid vehikkelet i de åpne designoppgavene på slutten
> («modeller problemet som et flytproblem»). Sammen med DP utgjør flyt ryggraden i
> «konstruer en algoritme»-sjangeren.

#### Kapittel 5.1: Flytnett, restnett og snitt

- **id:** `tdt4120-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-4-1` · **kapitteltype:** teori
- **description:** Flytnett, restkapasitet og restnett, snitt `(S,T)`, og heltallsteoremet — begrepene alle flytoppgaver hviler på.
- **Eksamensbelegg:** Sjanger D + F, 94 %. Definisjonene (restkapasitet, snitt, heltallsteoremet) er faste D-oppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker: **flytnett** (rettet graf `G=(V,E)` med kilde `s`, sluk `t`, kapasiteter `c(u,v)≥0`); **flyt** (kapasitets- og bevaringsbetingelsene); **restkapasitet** `c_f(u,v)=c(u,v)-f(u,v)`, og motsatt vei `f(u,v)` (restnettets ryggkanter); **restnett** `G_f`; **forøkende sti** (vei `s→t` i `G_f`); **snitt** `(S,T)` (partisjon med `s∈S`, `t∈T`); snittkapasitet og -flyt. `theorem` **heltallsteoremet** (heltallige kapasiteter → `Ford-Fulkerson` gir heltallig maks-flyt). LaTeX for definisjonene.
- **Oppgavesjangre:** D + F. Mønstereksempel (D): «Definér *restkapasitet* `c_f(u,v)` med egne ord, og forklar hva ryggkanten `f(u,v)` representerer.»
- **Typiske feil:** Glemme ryggkanten (motsatt vei) i restnettet; blande snittkapasitet (bare `S→T`-kanter) med snittflyt; tro at snittet må dele grafen i to like store deler; glemme `s∈S, t∈T`-kravet.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.2: Ford-Fulkerson, Edmonds-Karp og maks-flyt/min-snitt

- **id:** `tdt4120-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-5-1` · **kapitteltype:** teori
- **description:** `Ford-Fulkerson`-metoden, `Edmonds-Karp` (BFS-forøkende stier), maks-flyt/min-snitt-teoremet, og hvorfor FF er pseudopolynomisk mens EK er polynomisk.
- **Eksamensbelegg:** Sjanger E + F + G, 94 %. Pseudopolynomisk vs. polynomisk (og vs. NP-hardt) er et fast innsiktsskille. Prioritet: **perfekt**.
- **Innholdskontrakt:** Pseudokode-kontrakter: `Ford-Fulkerson` (finn forøkende sti i `G_f`, forøk flyten, gjenta; **pseudopolynomisk** — kjøretid avhenger av kapasitetenes **størrelse**); `Edmonds-Karp` (`Ford-Fulkerson` med **korteste** forøkende sti via `BFS`; `O(VE^2)`, **polynomisk**). `theorem` **maks-flyt/min-snitt-teoremet** (maks flyt = min snittkapasitet; ekvivalent med «ingen forøkende sti finnes»). Hvorfor EK er polynomisk (korteste-sti-argumentet), mens naiv FF kan bruke mange runder. Kobling til NP: FF pseudopolynomisk ≠ maks-flyt NP-hardt (§5.7).
- **Oppgavesjangre:** E + F + G-moment. Mønstereksempel (F): «Er `Ford-Fulkerson` polynomisk? Svar ja/nei og forklar med begrepet *pseudopolynomisk*.» (Nei — kjøretiden avhenger av kapasitetenes størrelse; `Edmonds-Karp` er polynomisk.)
- **Typiske feil:** Blande pseudopolynomisk og NP-hardt (§5.7 — FF er pseudopolynomisk, ikke et tegn på at flyt er vanskelig); tro maks-flyt/min-snitt bare gjelder heltall; glemme at EK krever **korteste** (BFS) forøkende sti; feil kjøretid for EK.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.3: DRILL — Håndkjøring av maks-flyt og flyt-modellering

- **id:** `tdt4120-5-3` · **number:** 5.3 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4120-5-2` · **kapitteltype:** drill
- **description:** Drill på håndkjøring av `Ford-Fulkerson`/`Edmonds-Karp` (sjanger C) OG den første halvdelen av flyt-modelleringen (sjanger H): gjenkjenn et fordelings-/barriereproblem som flyt.
- **Eksamensbelegg:** Sjanger C (håndkjøring) 94 % + H (flyt-design) — flyt er verktøyet i flest åpne designoppgaver. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** **Håndkjøring** (C): 1) tegn `G_f`; 2) finn en forøkende sti (BFS for EK); 3) forøk med flaskehalsen; 4) gjenta; 5) les av maks-flyt og min-snitt. **Modellering** (H): 1) gjenkjenn mønsteret — fordele/tilordne A på B med kapasitetskrav → **maks-flyt** (kilde→A→B→sluk, heltallsteoremet gir heltallig tilordning); «billigste barriere/mur som skiller regioner» → **min-snitt**; 2) definér noder/kanter/kapasiteter; 3) kjør maks-flyt; 4) tolk svaret tilbake til problemet. Gjennomkjørt eksamenscase (én håndkjøring + én modellering) med margnotater. 8–12 oppgaver.
- **Oppgavesjangre:** C, H. Mønstereksempler: (C) «Kjør `Edmonds-Karp` på dette flytnettet og oppgi maks-flyt og et min-snitt.»; (H, nyskrevet) «Du skal tildele `k` ansatte til prosjekter der hver ansatt kan ha visse roller og hvert prosjekt trenger visse roller. Beskriv kort hvordan du modellerer dette som et maks-flyt-problem.»
- **Typiske feil:** Glemme ryggkanter under forøkning; ikke bruke korteste sti for EK; ved modellering sette feil kapasiteter (glemme heltallsteoremet); oppgi bare flytverdien uten min-snittet når begge spørres.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (Maksimal flyt)
1. Prøve 5.A (30 min): Definisjoner — restkapasitet, snitt, heltallsteoremet (sjanger D).
2. Prøve 5.B (35 min): Håndkjøring av `Edmonds-Karp` — maks-flyt + min-snitt (sjanger C).
3. Prøve 5.C (30 min): Teori — pseudopolynomisk vs. polynomisk, maks-flyt/min-snitt (E/F).
4. Prøve 5.D (40 min): Flyt-modellering — fordelings-/barriereproblem (sjanger H).

---

### Del 6 — Dynamisk programmering, grådighet og stabil matching

> DP (94 %) er den andre designryggraden. Grådighet (65 %) og Gale-Shapley
> (fremvoksende — begge ferskeste sett) er nivå 3, men Gale-Shapley får et
> **fullverdig** kapittel fordi trenden peker oppover.

#### Kapittel 6.1: Dynamisk programmering — mekanikk

- **id:** `tdt4120-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-1-5` · **kapitteltype:** teori
- **description:** Overlappende delproblemer + optimal substruktur, memoisering vs. bottom-up, og rekonstruksjon av selve løsningen (ikke bare verdien) via lagrede beslutninger.
- **Eksamensbelegg:** Sjanger F + G + H, 94 %. To faste innsikter: når memoisering **ikke** hjelper (D&C, ingen overlapp), og at rekonstruksjon krever tilbakepekere. Prioritet: **kunne** (grensende til perfekt gitt designbruken).
- **Innholdskontrakt:** `definition` **optimal substruktur** (optimal løsning bygd av optimale delløsninger) og **overlappende delproblemer** (samme delproblem løses mange ganger). `theorem`/`text`: **memoisering** (top-down, husk løste delproblemer) vs. **bottom-up** (fyll tabell i avhengighetsrekkefølge) — samme asymptotiske kjøretid. Når DP **ikke** slår D&C (ingen overlapp → memoisering hjelper ikke). **Rekonstruksjon**: for å hente ut *selve* løsningen (ikke bare optimalverdien) må beslutninger/tilbakepekere lagres — mulig **uten** å øke asymptotisk kjøretid (§5.6). Avgjørelses- vs. optimeringsvariant.
- **Oppgavesjangre:** F + G + forkunnskap til H. Mønstereksempel (F): «Stemmer det at rekonstruksjon av selve løsningen fra en DP-tabell er gratis? Svar ja/nei og forklar.» (Nei — krever lagrede beslutninger, men uten økt asymptotisk kjøretid, §5.6.)
- **Typiske feil:** Påstå at rekonstruksjon er «trivielt gratis» (§5.6); bruke DP der det ikke er overlapp (D&C holder); blande optimal substruktur med grådig valg-egenskap; glemme at memoisering og bottom-up har samme kjøretid.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.2: DP-klassikere — stavkapping, LCS og ryggsekk

- **id:** `tdt4120-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-6-1` · **kapitteltype:** teori
- **description:** `Rod-Cutting` (stavkapping), LCS (lengste felles delsekvens) og 0-1-`Knapsack` (ryggsekk) — de navngitte DP-problemene og deres rekurrenser.
- **Eksamensbelegg:** Sjanger C (fyll DP-tabell) + H, 94 %. 0-1-ryggsekk er `Θ(nm)` og **pseudopolynomisk** (kobling til NP i Del 7). Prioritet: **kunne**.
- **Innholdskontrakt:** Pseudokode-kontrakter/rekurrenser: `Rod-Cutting` (`r_n=\max_{1≤i≤n}(p_i+r_{n-i})`; `Θ(n^2)`); **LCS** (`c[i,j]` fra `c[i-1,j-1]`/`c[i-1,j]`/`c[i,j-1]`; `Θ(nm)`; rekonstruksjon fra retningspekere); **0-1-ryggsekk** (`Θ(nm)` med `m` = kapasitet; **pseudopolynomisk** fordi `m` er en tallverdi). Fraksjonell ryggsekk løses grådig (kontrast, hører til 6.4). Rekonstruksjonsmønsteret gjennomgått.
- **Oppgavesjangre:** C (fyll tabell) + H. Mønstereksempel (C): «Fyll LCS-tabellen for strengene `ABCB` og `BDCB`, og oppgi lengden på lengste felles delsekvens.»
- **Typiske feil:** Feil rekurrens (av-én i indeksene); glemme rekonstruksjonspekerne når selve sekvensen spørres; tro 0-1-ryggsekk er polynomisk (`Θ(nm)` er pseudopolynomisk); løse 0-1-ryggsekk grådig (kun fraksjonell er grådig).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: DRILL — DP-design og rekonstruksjon

- **id:** `tdt4120-6-3` · **number:** 6.3 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4120-6-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger H med DP: gjenkjenn et sekvens-/delstrukturproblem, sett opp rekurrensen, fyll tabellen og **rekonstruér** løsningen.
- **Eksamensbelegg:** Sjanger H (DP-varianten) + C. Sekvens-/delstruktur-designoppgaver løses med DP/LCS-variant. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** 1) gjenkjenn: sekvens/delsekvens/oppdeling/felles delsti → **DP**; 2) definér delproblemet (`c[i,j]` = …); 3) skriv rekurrensen + grunntilfeller; 4) angi fylleorden (bottom-up) eller memoisering; 5) oppgi kjøretid; 6) **rekonstruér** løsningen fra lagrede beslutninger (nevn eksplisitt at det ikke øker asymptotisk kjøretid). Gjennomkjørt case med margnotater. 8–12 oppgaver: ordsplitting, felles delsti, oppdeling, LCS-variant, stavkapping-variant — nyskrevne innpakninger.
- **Oppgavesjangre:** H, C. Mønstereksempel (nyskrevet): «En streng skal deles i ord fra en ordbok. Beskriv en DP-løsning: definér delproblemet, rekurrensen og kjøretiden, og forklar kort hvordan du rekonstruerer selve oppdelingen.»
- **Typiske feil:** §5.6 (påstå gratis rekonstruksjon); bruke DP uten overlapp; feil delproblem-definisjon; glemme grunntilfeller; ikke oppgi kjøretid.
- **Quiz: 18 · Flashcards: 10**

#### Kapittel 6.4: Grådighet — Huffman og aktivitetsutvelgelse

- **id:** `tdt4120-6-4` · **number:** 6.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-6-1` · **kapitteltype:** teori
- **description:** `Huffman` (optimale prefikskoder), aktivitetsutvelgelse og grådig-bytteargumentet — når et lokalt optimalt valg gir globalt optimum.
- **Eksamensbelegg:** Sjanger C (Huffman-tre) + D + H, 65 % (kjenne). Gjenkjenn Huffman fra frekvenser. Prioritet: **kjenne**.
- **Innholdskontrakt:** Pseudokode-kontrakt `Huffman` (slå gjentatte ganger sammen de **to letteste** nodene; prioritetskø; `O(n\lg n)`; gir optimale prefikskoder / minimal forventet tegnlengde). Aktivitetsutvelgelse (velg alltid aktiviteten som slutter først; `Θ(n)` etter sortering). `theorem`/`text` **grådig-bytteargumentet** (vis at et grådig valg kan inngå i en optimal løsning ved å bytte). Grådig valg-egenskap + optimal substruktur (kontrast til DP). Fraksjonell ryggsekk er grådig; 0-1 er det ikke.
- **Oppgavesjangre:** C + D + H. Mønstereksempel (C): «Bygg Huffman-treet for tegnene med frekvenser A:5, B:2, C:1, D:1, og oppgi kodelengden for hvert tegn.»
- **Typiske feil:** Slå sammen feil noder i Huffman (ikke de to letteste); tro at grådighet alltid gir optimum (0-1-ryggsekk er motbevis); mangle bytteargumentet i begrunnelsen; blande grådig valg-egenskap med optimal substruktur.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 6.5: Stabil matching — Gale-Shapley

- **id:** `tdt4120-6-5` · **number:** 6.5 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-6-4` · **kapitteltype:** teori
- **description:** `Gale-Shapley`-algoritmen, blokkerende par, stabil matching og mann-/kvinneorientert kjøring — en fremvoksende gjenganger.
- **Eksamensbelegg:** Sjanger D + C + H, 12 % men **fremvoksende** (i **begge** de to ferskeste representative settene, des 2022 og aug 2023). Forvent den fremover. Prioritet: **kjenne** (men prioritér gitt trenden — derfor fullverdig kapittel).
- **Innholdskontrakt:** `definition` **stabil matching** (ingen **blokkerende par** — to som begge foretrekker hverandre fremfor sine tildelte) og **blokkerende par**. Pseudokode-kontrakt `Gale-Shapley` (friere frir i preferanserekkefølge; mottakere beholder sitt beste tilbud; `O(n^2)`). Egenskaper: algoritmen **terminerer** og gir alltid en **stabil** matching; den er **frier-optimal** (mann-/kvinneorientert gir potensielt ulik matching). Designbruk (sjanger H): «er person X og Y *ment for hverandre*?» → kjør begge orienteringer og sammenlign.
- **Oppgavesjangre:** D + C + H. Mønstereksempler: (D) «Definér et *blokkerende par* og forklar hva det betyr at en matching er stabil.»; (H) «Hvordan avgjør du om en gitt mann og kvinne kan være paret i **en** stabil matching?» (kjør frier-optimal begge veier).
- **Typiske feil:** Blande stabil matching med maksimal matching; feil termineringsargument; tro at matchingen er unik (frier-orienteringen bestemmer utfallet); glemme at algoritmen er frier-optimal.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 6:** 4 prøver (DP, grådighet og stabil matching)
1. Prøve 6.A (30 min): DP-mekanikk — overlappende delproblemer, memoisering, rekonstruksjon (sjanger F).
2. Prøve 6.B (40 min): DP-design — LCS/oppdeling med rekurrens + rekonstruksjon (sjanger H/C).
3. Prøve 6.C (30 min): Grådighet — Huffman-tre + bytteargument (sjanger C/D).
4. Prøve 6.D (30 min): Gale-Shapley — stabil matching, blokkerende par, begge orienteringer (D/H).

---

### Del 7 — NP-kompletthet og reduksjoner *(prioritet: PERFEKT)*

> NP/reduksjoner er en 100 %-gjenganger, og **reduksjonsretningen** (`A ≤ₚ B`) er
> det enkeltpoenget fasitene oftest fremhever som skille mellom riktig og galt.
> Derfor eget drillkapittel (7.4).

#### Kapittel 7.1: P, NP og co-NP — sertifikat og verifikasjon

- **id:** `tdt4120-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-5-2` · **kapitteltype:** teori
- **description:** Klassene P, NP og co-NP, verifikasjonsalgoritme og sertifikat, og skillet avgjørelses- vs. optimeringsproblem.
- **Eksamensbelegg:** Sjanger D + F + G, 100 %. Faste definisjoner (sertifikat, verifikasjon) og skiller. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker: **P** (løses i polynomisk tid); **NP** (løsning **verifiseres** i polynomisk tid gitt et **sertifikat**); **co-NP**; **verifikasjonsalgoritme** og **sertifikat** (bevis som verifiseres raskt); **avgjørelses- vs. optimeringsproblem** (avgjørelse gir ja/nei; optimering søker beste verdi — knyttes sammen); **abstrakte vs. konkrete problemer / formelle språk** (kort). `P⊆NP`; det åpne `P=NP`-spørsmålet. Merk at NP handler om **verifikasjon**, ikke løsning.
- **Oppgavesjangre:** D + F. Mønstereksempel (D): «Hva er et *sertifikat*, og hva vil det si at et problem er i NP?»
- **Typiske feil:** Definere NP som «løses i ikke-polynomisk tid» (det handler om **verifikasjon** i polynomisk tid); blande avgjørelses- og optimeringsvariant; tro `P≠NP` er bevist; glemme at `P⊆NP`.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 7.2: Polynomiske reduksjoner og reduksjonsretning

- **id:** `tdt4120-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4120-7-1` · **kapitteltype:** teori
- **description:** Polynomisk reduksjon `≤ₚ`, den kritiske **retningen** (`A ≤ₚ B` ⇒ B minst like vanskelig), NP-hardt vs. NP-komplett, og `P=NP`-konsekvensen.
- **Eksamensbelegg:** Sjanger G, 100 % — kjernepoenget fasiten alltid vil ha. Den vanligste og mest fremhevede feilen er å reversere retningen. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **polynomisk reduksjon** `A ≤ₚ B` (transformér A-instanser til B-instanser i polynomisk tid, svarbevarende). `theorem` **reduksjonsretningen**: `A ≤ₚ B` betyr **B er minst like vanskelig som A**; for å vise at X er vanskelig, reduser **FRA** et kjent vanskelig problem **TIL** X. `definition` **NP-hardt** (alt i NP reduseres til det) og **NP-komplett** (NP-hardt **og** i NP). `theorem` **`P=NP`-konsekvensen** (polynomisk algoritme for ett NPC-problem ⇒ `P=NP`). **Pseudopolynomisk** vs. eksponentiell (SUBSET-SUM med mål i entallssystem vs. binært; kobling til 0-1-ryggsekk og Ford-Fulkerson).
- **Oppgavesjangre:** G. Mønstereksempel: «Du har vist `SAT ≤ₚ X`. Hva forteller det om X sin vanskelighet, og hva forteller det **ikke**?» (X er minst like vanskelig som SAT / minst NP-hardt; det sier ingenting hvis retningen var motsatt.)
- **Typiske feil:** **Reversere reduksjonsretningen** (§5.1 — den mest fremhevede feilen); tro at reduksjon *til* et NPC-problem gjør ditt problem NPC (null uttelling); blande NP-hardt og NP-komplett; blande pseudopolynomisk og NP-hardt (§5.7).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 7.3: NP-komplette problemer

- **id:** `tdt4120-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4120-7-2` · **kapitteltype:** teori
- **description:** De navngitte NPC-problemene og beviset for at `CIRCUIT-SAT` er NP-komplett (kretsen simulerer en verifikator).
- **Eksamensbelegg:** Sjanger D + G, 100 %. Kjenn de navngitte problemene og hovedideen i CIRCUIT-SAT-beviset. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`-blokker (kort, formell definisjon av hvert): **CIRCUIT-SAT, SAT, 3-CNF-SAT, CLIQUE, VERTEX-COVER, HAM-CYCLE, TSP, SUBSET-SUM**. `theorem`/`text` hovedideen i at **CIRCUIT-SAT er NP-komplett** (kretsen simulerer verifikasjonsalgoritmen; sertifikatet er inputen). Reduksjonskjeden (CIRCUIT-SAT → SAT → 3-CNF-SAT → CLIQUE/VERTEX-COVER; HAM-CYCLE → TSP) som eksempel på hvordan nye NPC-bevis bygges. Toppkarakter: kjenn den **formelle definisjonen** av problemet en algoritme løser, ikke bare navnet.
- **Oppgavesjangre:** D + G. Mønstereksempel (D): «Definér `VERTEX-COVER` som et avgjørelsesproblem.»
- **Typiske feil:** Kun kjenne navnet, ikke den formelle definisjonen; feil retning i reduksjonskjeden; blande CLIQUE og VERTEX-COVER; tro at CIRCUIT-SAT-beviset reduserer fra et annet NPC-problem (det bygger direkte på verifikatoren).
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 7.4: DRILL — Reduksjonsretning og NP-argumenter

- **id:** `tdt4120-7-4` · **number:** 7.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4120-7-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger G med fokus på det dokumenterte skillepunktet: hvilken vei reduserer du, og hva beviser det.
- **Eksamensbelegg:** Sjanger G, 100 %. Reduksjonsretning er det enkeltpoenget som oftest skiller riktig fra galt. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For hvert NP-spørsmål: 1) hva slags påstand? (er X i NP? er X NP-hardt? er X NPC?); 2) for **vanskelighet** (NP-hardt): reduser **FRA** et kjent NPC-problem **TIL** X — aldri motsatt; 3) for **medlemskap i NP**: gi et sertifikat + polynomisk verifikasjon; 4) for **konsekvens**: polynomisk algoritme for NPC ⇒ `P=NP`; 5) skill pseudopolynomisk fra NP-hardt. Gjennomkjørt case med margnotater om hvorfor retningen er som den er. 10–14 oppgaver: «hvilken vei?», «hva beviser denne reduksjonen?», «er dette et gyldig NPC-argument?», ja/nei-utsagn om NP-teori.
- **Oppgavesjangre:** G, F. Mønstereksempel: «En student skriver: *Jeg reduserte mitt problem P til TSP, altså er P NP-komplett.* Er argumentet gyldig? Svar ja/nei og forklar hva som er galt.» (Nei — feil retning; å redusere *til* TSP viser bare at P er *minst like lett* som TSP.)
- **Typiske feil:** §5.1 (reversert retning), forveksle «i NP» med «NP-hardt», glemme `P=NP`-konsekvensen, §5.7 (pseudopolynomisk ≠ NP-hardt).
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (NP-kompletthet og reduksjoner)
1. Prøve 7.A (25 min): Definisjoner — P, NP, co-NP, sertifikat, avgjørelse vs. optimering (sjanger D).
2. Prøve 7.B (35 min): Reduksjonsretning — «hva beviser denne reduksjonen?» (sjanger G).
3. Prøve 7.C (30 min): NPC-katalog + CIRCUIT-SAT-ideen (sjanger D/G).
4. Prøve 7.D (35 min): Blandet NP-teori — ja/nei-utsagn + pseudopolynomisk vs. NP-hardt (F/G).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Kortsvarssjangeren — å skrive presise, korte svar

- **id:** `tdt4120-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4120-0-1` · **kapitteltype:** teori (sjangerguide)
- **description:** Selve eksamensdisiplinen: svar med det etterspurte og ikke mer, sikre grunnpoengene først, og budsjettér tiden over 20 likt vektede oppgaver.
- **Eksamensbelegg:** Metakapittel over alle sjangre A–I. Trener den viktigste formelle føringen — «lange svar teller ikke positivt» — og delvis-uttelling-strategien. Prioritet: **perfekt** (påvirker score på hver oppgave).
- **Innholdskontrakt:** `text`/`tip`: (i) **svarformen per sjanger** — A/B/E gir ett uttrykk; C gir sluttilstand/tabell; D gir én presis setning (hovedpoeng først); F gir ja/nei + én setning; G gir retning + konsekvens; H gir paradigme + konstruksjon + rekonstruksjon; (ii) **delvis-uttelling-strategien** — ta hovedpoenget først i definisjoner, sikre grunnpoengene; (iii) **tidsbudsjett** — ~12 min/oppgave i snitt, ikke bli sittende fast på én åpen designoppgave når 19 andre teller likt; (iv) **læringsmål-treff** — svar demonstrerer nøyaktig ferdigheten (definere / utføre / kjenne kjøretid + forstå utregning). Sammendrag av de fem sensor-metareglene.
- **Oppgavesjangre:** Alle A–H (metanivå). 6–8 «forbedre svaret»-oppgaver: gitt et langt/upresist svar, skriv det korte som gir full uttelling.
- **Typiske feil:** Skrive langt (ingen ekstra uttelling, tapt tid); svare på mer enn det etterspurte; utelate hovedpoenget i en definisjon; henge fast på én oppgave.
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 8.2: DRILL — Åpen algoritmedesign via reduksjon

- **id:** `tdt4120-8-2` · **number:** 8.2 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4120-7-4` · **kapitteltype:** drill
- **description:** Den tverrgående designdrillen (sjanger H): gjenkjenn det klassiske problemet i en innpakning og reduser til det — maks-flyt, DP, Gale-Shapley, BFS.
- **Eksamensbelegg:** Sjanger H, hvert ordinært sett (siste 3–5 oppgaver — der toppkarakteren skilles). Gjenbruker Del 5 (flyt), Del 6 (DP/grådighet/Gale-Shapley) og Del 4 (BFS). Prioritet: **perfekt** (for A/B), **kunne** (for C).
- **Innholdskontrakt (løsningsoppskrift — mønstergjenkjenning):** 1) **navngi paradigmet eksplisitt** (grådig / DP / D&C / grafsøk / flyt); 2) mønsterkatalog: fordelings-/tilordningsproblem → **maks-flyt** (kilde→A→B→sluk, heltallsteoremet); «billigste barriere som skiller regioner» → **min-snitt**; sekvens-/delstruktur-/oppdelingsproblem → **DP/LCS-variant**; «korteste kjede / færrest ledd / hvorfor er X sann» → **BFS**; korteste vei med **flest** kanter → modifiser kantvekter eller kjør på korteste-vei-DAG; stabil parvis tilordning → **Gale-Shapley** (begge orienteringer); 3) definér konstruksjonen; 4) **rekonstruér løsningen**, ikke bare verdien; 5) oppgi kjøretid. Gjennomkjørt eksamenscase med margnotater om hva som gir topp- vs. midtsjiktuttelling. 10–14 nyskrevne designoppgaver som roterer alle paradigmene.
- **Oppgavesjangre:** H. Mønstereksempler (nyskrevne): «billigste mur som omslutter gitte regioner inkl. et sentralt punkt» → min-snitt; «korteste begrunnelseskjede fra premiss til konklusjon» → BFS; «avgjør om to personer kan pares» → Gale-Shapley begge veier.
- **Typiske feil:** Ikke navngi paradigmet; feil reduksjon (§5.1-tankegang); oppgi bare optimalverdien uten rekonstruksjon (§5.6); glemme heltallsteoremet i flytmodellering; bruke for lang tid (kortsvarsdisiplin).
- **Quiz: 16 · Flashcards: 8**

#### Kapittel 8.3: Øvingseksamen 1 — bredt ordinært sett (kode E)

- **id:** `tdt4120-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4120-8-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers hjelpemiddelfritt sett etter 20-kortsvarsmalen, som speiler temafordelingen på et typisk kode-E-sett.
- **Eksamensbelegg/miks:** Speiler prognosen (des 2022 / aug 2023-nivå): **~20 likt vektede kortsvar** ≈ 3 asymptotikk/forenkling (A) + 1 rekurrens (B) + 3 sortering/kjøretid (E) + 2 håndkjøringer (C: én BST/haug + én graf/matrise) + 3 definisjoner (D) + 2 «stemmer dette?» (F) + 2 NP/reduksjon (G, minst én reduksjonsretning) + **4 åpne designoppgaver** (H: to maks-flyt, én DP, én Gale-Shapley/BFS). Oppgavene stiger løst i vanskelighet, designoppgavene til slutt. Alle nyskrevne, med figur-univers-innpakning (nyskrevne stedsnavn). Løsningsforslag som A-besvarelse i `collapsible` per oppgave (kort og presist), med `tip` om hva som gir uttelling og delpoeng. Innledende `tip` om tidsbudsjett (~12 min/oppgave).
- **Innholdskontrakt:** Dekker sjangrene A, B, C, D, E, F, G, H.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2 — datastruktur- og graftungt sett

- **id:** `tdt4120-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4120-8-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på håndkjøring (sjanger C) og grafalgoritmer, men fortsatt full bredde.
- **Eksamensbelegg/miks:** Speiler et håndkjøringstungt ordinært sett: ~20 kortsvar ≈ 2 asymptotikk (A) + 1 rekurrens (B, iterasjon/eksakt) + 2 sortering (E) + **4 håndkjøringer** (C: `Heapsort`, `Tree-Insert`+`Inorder`, `Kruskal`, `Floyd-Warshall` d/π) + 1 kø med wraparound (C) + 3 definisjoner (D: spenntre, snitt, topologisk) + 2 F-utsagn (Dijkstra/negative kanter; topologisk/finish-tid) + 2 NP (G) + 3 designoppgaver (H: maks-flyt, DP, BFS-kjede). Alle nyskrevne. Løsningsforslag som A-besvarelse med delpoeng-`tip`.
- **Innholdskontrakt:** Dekker A, B, C, D, E, F, G, H — supplerer 8.3 med tyngre håndkjøring.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3 — designtungt topp-sett

- **id:** `tdt4120-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4120-8-4` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med et vanskeligere toppsjikt: flere åpne designoppgaver og reduksjonsargumenter, der A/B-karakteren skilles.
- **Eksamensbelegg/miks:** Speiler et designtungt sett (der toppkarakteren avgjøres): ~20 kortsvar ≈ 2 asymptotikk (A) + 1 rekurrens (B, masterteorem-tilfelle) + 2 sortering/kombinasjon (E) + 2 håndkjøringer (C) + 2 definisjoner (D) + 1 F-utsagn + **3 NP/reduksjon** (G, inkl. «er dette argumentet gyldig?»-reduksjonsretning) + **5 åpne designoppgaver** (H: to maks-flyt inkl. min-snitt-barriere, én DP med rekonstruksjon, én Gale-Shapley «ment for hverandre», én korteste-vei-med-flest-kanter). Alle nyskrevne. Løsningsforslag som A-besvarelse med eksplisitt markering av topp- vs. midtsjiktuttelling (rekonstruksjon, riktig reduksjonsretning, heltallsteoremet).
- **Innholdskontrakt:** Dekker A, B, C, D, E, F, G, H — de tre settene sammen dekker alle sjangre og alle 8 pensumbolker flere ganger; sjanger I (korona-essay) omtales kun i Del 0.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H.
- **Quiz: 16 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 14 | 14 |
| 1 | 1.1–1.6 | 18+18+22+16+16+18 = **108** | 18+14+10+16+16+10 = **84** |
| 2 | 2.1–2.4 | 18+16+12+20 = **66** | 22+18+14+12 = **66** |
| 3 | 3.1–3.5 | 16+16+20+14+16 = **82** | 20+18+12+16+18 = **84** |
| 4 | 4.1–4.5 | 16+16+16+14+18 = **80** | 20+18+20+16+10 = **84** |
| 5 | 5.1–5.3 | 16+16+18 = **50** | 18+18+10 = **46** |
| 6 | 6.1–6.5 | 16+16+18+14+14 = **78** | 18+16+10+16+14 = **74** |
| 7 | 7.1–7.4 | 16+18+14+20 = **68** | 18+16+18+10 = **62** |
| 8 | 8.1–8.5 | 12+16+16+16+16 = **76** | 12+8+0+0+0 = **20** |
| **Sum** | **38 kap.** | **622 ≥ 500 ✓** | **534 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform: quiz vektes mot hjelpemiddelfri
faktakontroll (kjøretider, forenkling, definisjonsgjenkjenning, reduksjonsretning);
de tre 100 %-delene (1 asymptotikk, 2 sortering, 7 NP) og de 94 %-delene (3, 5, 6)
bærer mest. Flashcards vektes mot **algoritme ↔ kjøretid ↔ egenskap**-triplene og de
fem asymptotiske symbolene — puggematerialet for en hjelpemiddelfri eksamen.
Øvingseksamenene (8.3–8.5) gir 0 flashcards (rene oppgavesett) men bidrar med quiz.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7 → 28 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort løsningsforslag og
poengfordeling. Prøvekapitler bygges som `tdt4120-<del>-prove` (chapterNumber
`<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i delens siste
kapittel. Prøvekvotene per del står i sluttblokken til hver del over (Del 1–7).
Del 0 og Del 8 får ikke egne prøver (Del 8 **er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 8.3–8.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (8.3) | Typisk kode-E ordinært sett | ~20 kortsvar, full bredde, 4 designoppgaver til slutt |
| Øvingseksamen 2 (8.4) | Håndkjøringstungt sett | ~20 kortsvar, tyngde på sjanger C (haug/BST/graf/matrise) |
| Øvingseksamen 3 (8.5) | Designtungt topp-sett | ~20 kortsvar, 5 designoppgaver + 3 reduksjonsargumenter |

Til sammen dekker de tre settene alle sjangre A–H (I = korona-essay omtales kun i
Del 0) og alle 8 pensumbolker flere ganger.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers hjelpemiddelfri kortsvarseksamen (kode E),
   ~20 likt vektede oppgaver, «lange svar teller ikke positivt», korona-caveaten, og
   at bredden er eksamensformen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (asymptotikk Del 1, sortering Del 2, NP/reduksjoner Del 7, BST/haug-
   håndkjøring Del 3, maks-flyt Del 5), **kunne** (rekurrenser, DP Del 6, graf Del 4,
   MST, SSSP), **kjenne** (APSP, grådighet, select, hashing, Gale-Shapley, amortisert/
   union-find, køer/stakker).
3. **Sjangerguiden** — de ni oppgavetypene A–I med løsningsoppskriftene fra
   drillkapitlene (1.3, 1.6, 2.4, 3.3, 4.5, 5.3, 6.3, 7.4, 8.2) i kortform, pluss
   kortsvarssjangeren (8.1).
4. **Sensorreglene** — de fem metareglene (lange svar teller ikke positivt; svar bare
   på det etterspurte; delvis uttelling med hovedpoeng først; læringsmål-treff; robust
   sensur) + at reduksjonsretning er det oftest fremhevede skillet.
5. **Feilkatalogen** — de 11 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: reversert reduksjonsretning, BST vs.
   haug, køfeil/wraparound, løs asymptotisk grense, feil masterteorem-tilfelle,
   «gratis» DP-rekonstruksjon, pseudopolynomisk vs. NP-hardt, Dijkstra på negative
   kanter, feil kjøretidsfakta (`Build-Max-Heap = Θ(n)`), mekanisk håndkjøring av
   ugyldig haug, topologisk sortering via finish-tid.
6. **Notasjons- og pseudokodeark** — alle kjøretider samlet (kjøretidstabellene fra
   delene: sortering, datastrukturer, graf, flyt, DP), de fem asymptotiske symbolene,
   masterteoremet, og pseudokode-kontraktene for kjernealgoritmene — puggeark for
   hjelpemiddelfri eksamen.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1
   (asymptotikk — billige garanterte poeng) → Del 2 (sortering) → Del 3 (BST/haug-
   håndkjøring) → Del 7 (NP/reduksjonsretning) → Del 5 (maks-flyt) → Del 6 (DP) →
   Del 4 (graf) innimellom → prøvene underveis → de tre øvingssettene de siste ukene
   under tidspress (240 min).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4120` med alle 38 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («3.2», ALDRI lineær «12» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 3.2»).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–I, frekvenstallene og
   kortsvarsdisiplinen resten refererer til.
3. **De fem perfekt-delene i avhengighetsrekkefølge**: Del 1 (asymptotikk — kreves av
   alle kjøretidssvar) → Del 2 (sortering; krever masterteorem) → Del 3 (datastrukturer;
   krever sortering) → Del 5 (maks-flyt; krever grafgrunnlag) → Del 7 (NP; krever flyt
   for pseudopolynomisk-koblingen). Bygg Del 4 (graf) før Del 5/6.
4. Del 4 → Del 6 → Del 8 (eksamenstreningen til slutt — den gjenbruker alle sjangre
   og paradigmer).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn og i LaTeX; `\\` for LaTeX-kommandoer); `npm run
  build` grønn.
- [ ] **CLRS-navnekonsistens**: alle algoritmenavn og all pseudokode følger CLRS
  (`Merge-Sort`, `Build-Max-Heap`, `Ford-Fulkerson`, `Tree-Insert`, `MST-Kruskal` …);
  norsk fagterm kun i parentes ved første forekomst.
- [ ] **Kortsvarssjanger i alle løsningsforslag**: hvert løsningsforslag svarer med
  det etterspurte og ikke mer; drill- og eksamenscasene har margnotater om hva som
  gir uttelling og at «lange svar teller ikke positivt».
- [ ] **Reduksjonsretning**: Del 7 og designdrillen (8.2) fremhever eksplisitt at
  `A ≤ₚ B` ⇒ B minst like vanskelig, og at man reduserer **FRA** det vanskelige; ingen
  fasit i boka reduserer feil vei.
- [ ] **Notasjons- og pseudokodeliste per delkapittel**: hvert delkapittel som bruker
  notasjon/algoritmer har `collapsible` «Notasjons- og pseudokodeliste» rett etter
  Forkunnskaper, som forklarer ALLE symboler, kjøretidsuttrykk og pseudokode-navn
  (med kontrakt + kjøretid) brukt i delkapitlet (per delkapittel, ikke arv).
- [ ] **Pseudokode-kontrakter**: hvert algoritmekapittel har `theorem`-blokk med
  CLRS-pseudokode (nyskrevet), invariant/pre-/postbetingelse og kjøretid.
- [ ] **Kjøretidstabeller**: hver del med flere algoritmer har en kjøretidstabell
  (navn → best/verste/forventet + krav/egenskap).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
  dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå),
  6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har
  løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Håndkjøringsdisiplin**: håndkjøringsoppgaver (sjanger C) oppgir **kun** det
  etterspurte (sluttilstand / ett tall / hele tabellen inkl. døde køceller); haug/BST-
  drillen har minst én oppgave som kjøres mekanisk på ugyldig haug (§5.10).
- [ ] **Quiz-sum ≥ 622 og flashcard-sum ≥ 534** per kvotetabellen (§5); quiz kalibrert
  som hjelpemiddelfri faktakontroll, `options[0]` = riktig svar; flashcards kalibrert
  som algoritme ↔ kjøretid ↔ egenskap.
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener (kap. 8.3–8.5) som
  sammen dekker sjangrene A–H og alle 8 pensumbolker.
- [ ] **Korona-caveat**: Del 0 sier eksplisitt at kode A-settene (2020–2022) ikke er
  representative; boka bygges mot kode D/E; sjanger I omtales kun som treningsverktøy.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, grafer og innpakninger nyskrevne — egne
  stedsnavn/tall/kontekster; algoritmenavn, kjøretidsuttrykk og standardnotasjon er
  allmenn faglig notasjon, men ingen oppgavetekster/fasiter fra reelle sett gjengis;
  pensumlitteratur (CLRS) refereres (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
