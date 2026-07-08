# Bokskjelett: TDT4225 Store, distribuerte datamengder — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle temaer, vekter, sjangre, sensorkrav
> og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md`.
>
> **⚠️ KRITISK ARKIV-FORBEHOLD — les før du bygger noe.** Analysens viktigste funn:
> arkivet (3 sett, 2009 / 2011 / kontinuasjon 2012) tester et **foreldet, annet fag**.
> Den gang het emnet «TDT4225 **Lagring og behandling** av store datamengder» med
> **Kjell Bratbergsengen** som faglærer, og handlet om fysisk fillagring på én maskin
> (k-d-trær, gridfiler, R-trær, signatur-relasjonsalgebra, reservoarsortering). Dagens
> TDT4225 «Store, **distribuerte** datamengder» (verifisert på NTNUs emneside juli
> 2026: emneansvarlig **Svein Erik Bratsberg**) er et **distribuerte-systemer-fag**
> bygget på **Martin Kleppmann, *Designing Data-Intensive Applications* (DDIA)**.
> **Arkivet er derfor IKKE en prognose for dagens eksamen.** Boka bygges mot **dagens
> DDIA-pensum**. Fordi det ikke finnes ett eneste eksamenssett fra Bratsberg-regimet i
> arkivet, er ALT emnefaglig eksamensbelegg i dette skjelettet en **kvalifisert
> projeksjon** fra emnebeskrivelsen + DDIA-kanon — og er derfor gjennomgående merket
> **`(verifiser)`**. **STERK ANBEFALING (skal stå i Del 0):** skaff minst 2–3 ferske
> Bratsberg-sett (og gjerne prosjektbeskrivelsene) og revider vektene før boka
> ferdigstilles.
>
> **Arketype: HYBRID — DNA-drøfting (`DNA-drofting.md`) som base + regnemodul lånt fra
> DNA-regnefag (`DNA-regnefag.md`).** Begrunnelse: DDIA-eksamen tester i hovedsak
> **presis begrepsbruk + avveiingsdrøfting** (ingen fasit; sensor belønner at du
> navngir kostnaden ved hvert distribuert designvalg) → drøftings-arketypen er basen
> (begrepskontrakter med pensumforankring til Kleppmann/DDIA-kapitler, drøftingsakser,
> modellbesvarelser på flere nivåer). Men arkivets **ene overlevende styrke** — den
> kvantitative regnekulturen (dimensjonering, I/O-/gjennomstrømningsregning,
> «presiser forutsetningene», «identifiser flaskehalsen») — er faglærermiljøets
> signatur og lever trolig videre. Den bevares som en **egen regnemodul (Del 9)** med
> regneprosedyrer som `theorem`-blokker, lånt fra regnefag-DNA-en. Dermed:
> **konsept-drevet base, med innbakt kvantitativ regnetrening.**
>
> **Pensumforankring = Kleppmann, DDIA.** Begrepene forankres i DDIA-kapitlene (kap.
> 1–11) og i navngitte referansesystemer (PostgreSQL, MySQL, Cassandra, Riak,
> Voldemort, MongoDB, HBase, Kafka, ZooKeeper, etcd, Spark, Hadoop). Dette er
> pensumets kanon og bekreftet mot NTNUs emneside — men koblingen tema↔eksamensvekt er
> projisert (`(verifiser)`). Alle scenarier, tallverdier, arbeidslast-case og
> dimensjoneringseksempler i den ferdige boka skal være **nyskrevne** (opphavsrett):
> begrepsnavn, kvorumformelen $w+r>n$ og standard fagnotasjon er allmenn faglig
> kunnskap, men ingen oppgavetekster eller løsningsforslag fra reelle sett gjengis, og
> Kleppmann refereres (forfatter/verk/begrep), aldri siteres i lengde.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4225` |
| Tittel | **TDT4225 Store, distribuerte datamengder (NTNU)** |
| Institusjon | **NTNU** (Institutt for datateknologi og informatikk) |
| Level | `'Høyskole'` |
| Arketype | **Drøfting/regne-hybrid** — DNA-drøfting (base: begrepspresisjon + avveiingsdrøfting) + regnemodul fra DNA-regnefag (dimensjonering/I/O/kvorum-matematikk) |
| Antall kapitler | **36** (2 eksamenskart/håndverk + 31 tema/drill + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 260 min ≈ 38 timer** (inkl. 3 øvingseksamener à 90 min) |
| Quiz totalt | **610** (krav ≥500) |
| Flashcards totalt | **678** (sikteintervall 650–800 for et svært begrepsrikt DDIA-fag) |
| Prøver | **36** (4 per temadel 1–9) + **3 øvingseksamener** (kap. 10.1–10.3) |

**Pitch (ett avsnitt):** TDT4225 er i praksis to fag under samme emnekode. Det gamle
faget (arkivet) handlet om fysisk lagring på én maskin; dagens fag handler om
**distribuerte** datasystemer og følger **Kleppmanns DDIA** tett. Denne boka bygges
**for dagens fag** — replikering, partisjonering, transaksjoner, konsistens og
konsensus er ryggraden — og bruker arkivet til bare to ting: (1) den **kvantitative
regnekulturen** som lever videre (Del 9), og (2) det delvis overlappende **lagrings-
/indekseringsstoffet** (DDIA kap. 3), der arkivets B-tre-/blokkregning fortsatt gir
mening. Vurderingen er **tredelt-i-ånden, todelt formelt**: **60 % skriftlig
skoleeksamen (3 timer, A–F)** + **40 % to gruppeprosjekter** (20 % + 20 %).
Skriftlig-formatet (flervalg vs. frisvar) er **uverifisert** — men DDIA-tradisjonen
tester erfaringsmessig **forklar-og-drøft** tungt, så boka bygges for det: definer
presist, sammenlign to strategier, navngi avveiingen, og legg på et kvantitativt
resonnement der det passer. De to garanterte tyngdepunktene (projisert) er
**replikering + partisjonering** og **transaksjoner + konsistens/konsensus**.

**Kritiske stilregler (gjelder HELE boka):**

1. **Avveiingsdrøfting er kjernen — navngi alltid kostnaden.** Ingen distribuert
   designvalg er gratis. Hver gang boka presenterer en mekanisme, skal den svare på
   «hva koster det, og når velger du noe annet?». Sensor belønner (projisert) at
   avveiingen er *eksplisitt*: ikke bare «leaderless gir høy tilgjengelighet», men
   «leaderless gir høy skrivetilgjengelighet under nodefeil, **på bekostning av**
   svakere lesekonsistens (må håndteres med kvorum + lesereparasjon)». Hvert
   temakapittel har minst én **avveiingstabell** (trade-off-tabell) og en
   **drøftingsmal**.
2. **Presis begrepsbruk skiller topp fra midt.** DDIA-kanons vanligste sensorfelle
   er å blande nærliggende begreper (lineariserbarhet vs. serialiserbarhet; eventual
   vs. kausal konsistens; replikering vs. partisjonering). Boka definerer hvert
   begrep **med sin nærmeste nabo eksplisitt kontrastert**, og hvert kort/quiz som
   tester paret gjør kontrasten til poenget.
3. **«Presiser forutsetningene» og «identifiser flaskehalsen» (regnekulturen).**
   Arkivets mest gjentatte instruks. I ALL kvantitativ drøfting (dimensjonering,
   kvorummatematikk, kapasitet, haleforsinkelser) skal boka: (i) skrive ned de
   antatte tallene/forutsetningene *først*; (ii) vise utregningen som formel, ikke
   gjette; (iii) **peke på det dominerende leddet / flaskehalsen**. Flere begrunnede
   løsninger godtas (arkivet: «alle alternativer gir full uttelling»).
4. **Konkret system før abstraksjon.** Hvert tema forankres i ett navngitt reelt
   system (PostgreSQL-WAL, Cassandra-kvorum, Kafka-logg, ZooKeeper/etcd-konsensus,
   Spark-DAG) *før* generaliseringen. DDIA-tradisjonen er ingeniørfaglig, ikke
   matematisk-abstrakt.
5. **Engelsk fagterm i parentes ved første forekomst, deretter norsk.** DDIA er
   engelskspråklig og undervisningen delvis engelsk; nøkkeltermer gis som «leder-løs
   replikering (*leaderless replication*)», så norsk term brukes videre. Kvorum-
   notasjonen $w$, $r$, $n$ og formelen $w+r>n$ er standard og holdes uendret.

**Kritiske sensorfeller (projisert fra DDIA-kanon — drillmål + `warning`-blokker):**

- **Lineariserbarhet vs. serialiserbarhet.** Lineariserbarhet = recency-garanti på
  **ett objekt** (det ser ut som én kopi, i sanntidsrekkefølge); serialiserbarhet =
  isolasjonsgaranti for **transaksjoner** (utfallet svarer til en seriell rekkefølge).
  Et system kan være det ene uten det andre. Å bruke dem om hverandre er den
  klassiske DDIA-nullfellen. Eget drillmål i kap. 7.2/7.5.
- **«Eventual consistency» ≠ ingen garantier.** Eventual er den *svakeste* enden;
  mellom den og lineariserbar ligger **lese-dine-egne-skrivinger, monotone lesninger,
  konsistent prefiks og kausal konsistens**. Å påstå at eventual = «kaos» gir null.
  Kap. 4.2 og 7.3.
- **CAP feillest som «velg to av tre».** Riktig: **ved nettverkspartisjon** må du
  velge mellom konsistens (lineariserbarhet) og tilgjengelighet; uten partisjon får du
  begge. CAP sier ingenting om latens (det gjør PACELC). Kap. 7.2.
- **2PC gir ikke høy tilgjengelighet.** Koordinatoren er et enkeltpunktsfeil; hvis den
  faller etter «prepare», **blokkerer** deltakerne (in-doubt). Konsensus (Raft/Paxos)
  løser nettopp lederbytte-problemet 2PC ikke løser. Kap. 7.4.
- **Kvorum garanterer ikke lineariserbarhet.** $w+r>n$ sikrer *overlapp*, men med
  samtidige skrivinger, sloppy quorum eller uten synkron lesereparasjon kan du fortsatt
  lese gammelt. Kvorum ≠ sterk konsistens. Kap. 4.4.
- **Replikering vs. partisjonering.** Replikering = *samme* data på flere noder (mot
  feiltoleranse/lesekapasitet); partisjonering = *ulike* delmengder på ulike noder (mot
  volum/skrivekapasitet). De brukes sammen, men løser ulike problemer. Kap. 5.1.
- **Snapshot isolation stopper ikke write skew.** SI hindrer dirty/lost update og gir
  lesekonsistens, men **write skew og phantoms** slipper gjennom — kreves
  serialiserbarhet (SSI eller 2PL). Kap. 6.3.
- **LSM vs. B-tre — skrivfaktor vs. lesefaktor.** LSM: raskere skriving, høyere
  skriveforsterkning-risiko + kompakteringskost; B-tre: forutsigbar lesing, skriver
  hver side minst to ganger (WAL + side). Feil-attribuering av hvem som er raskest på
  hva er en fast felle. Kap. 2.1/2.2.
- **Flaskehals-bommen (regnemodul).** I dimensjonering: regne disk når nettverket
  begrenser (eller motsatt), eller glemme replikeringsfaktoren i lagerbehovet. Alltid
  **identifiser det dominerende leddet**. Del 9.

**Avvik fra DNA/README-malen (dokumentert):**

- **Hybrid arketype.** DNA-drøfting er base, men faget er ikke et rent essayfag:
  det har en **kvantitativ kjerne** (arkivets overlevende styrke). Derfor lånes
  regnefag-DNA-ens **regneprosedyre-som-`theorem`-blokk** og **drillkapittel**-mønster
  inn i Del 9 (og i dimensjonerings-innslag ellers). Modellbesvarelse-kapitlene
  (DNA-drøfting) er her **øvingseksamener** (Del 10) med drøftings- OG regneoppgaver.
- **`theorem`-blokker brukes for regneprosedyrer OG operasjonelle kontrakter.** Der
  DNA-drøfting ikke har `theorem`, bruker denne boka den for: (i) **regneprosedyrer**
  i Del 9 (lagerbehov, gjennomstrømning, kvorum-tåleevne — algoritmisk oppskrift +
  formel + «presiser forutsetning»-ledd); (ii) **operasjonelle kontrakter** (kvorum-
  betingelsen $w+r>n$, ARIES-lignende WAL-regel, Raft-lederbytte-invariant, quorum-
  lese/skrive-protokoll). Disse er bokas «teoremer» som må sitte i ryggmargen.
- **`definition`-blokker = begrepskontrakter med pensumforankring + nabo-kontrast.**
  Hver definisjon oppgir (a) presis definisjon, (b) DDIA-kapittel/system den kommer
  fra, (c) sin nærmeste nabo den skal kontrasteres mot. Flashcards genereres KUN fra
  toppnivå `definition`-blokker med `title` → boka sikter **høyt (678)** fordi faget
  er ekstremt begrepsrikt (replikeringsmodi, konsistensmodeller, isolasjonsnivåer,
  anomalier, konsensustermer, encoding-formater).
- **Avveiingstabell per temakapittel.** Ut over DNA-drøftingens «Posisjoner og
  spenninger» krever dette faget en formalisert **trade-off-tabell** (alternativ ×
  kostnad/gevinst-akser) i hvert temakapittel — det er selve drøftings-råstoffet.
- **Diagrammer beskrives «i ord».** Plattformen rendrer JSON, ikke tegninger.
  Topologier (single-/multi-leader), partisjoneringskart, konsensus-lederbytte og
  MapReduce-dataflyt beskrives i strukturert prosa (+ valgfri ASCII i `collapsible`).
- **Prosjektspor-note.** 40 % er to gruppeprosjekter (praktisk implementasjon, typisk
  mot MySQL/MongoDB e.l. + dataanalyse). Boka kan ikke rette prosjektene, men Del 0 og
  utvalgte kapitler (1.1 datamodeller, 2.3 OLTP/OLAP, 5.1 partisjonering, 8.2 Kafka)
  har en kort **`tip` «Prosjektspor»** som knytter teorien til det studenten faktisk
  bygger — uten å bli en programmeringstutorial.
- **Kapittelantall (36) ligger over DNA-drøftingens 15–30.** Bevisst: DDIA-bredden er
  eksamensformen (11 kapitler i pensum, fire nivå-1-tyngdepunkt), og regnemodulen +
  eksamenstreningen kommer i tillegg. Hvert `kjenne`-tema holdes kompakt.

---

## 2. Makrostruktur

Rekkefølgen følger DDIA-aksen og faglig avhengighet: du forstår først **hvordan data
modelleres og lagres på én node** (datamodeller → lagring/indeksering → encoding), så
**hvordan data spres over flere noder** (replikering → partisjonering → transaksjoner →
feil/konsistens/konsensus), så **avledede systemer** (batch/stream), og til slutt
**hvordan du dimensjonerer det hele** (regnemodul). Frekvens/sentralitet styrer
*omfanget* — de fire nivå-1-tyngdepunktene (replikering, partisjonering,
transaksjoner, konsistens/konsensus) får flest kapitler + eget drillkapittel.
`sectionNames` (bokforsiden) settes fra kolonne 2. Kolonnen **Nivå** angir projisert
sentralitet (§7 i analysen): **1** = bygg tyngst, **2** = beherskes godt, **3** =
kjenne til. **DDIA** = pensumkapittel.

| Del | `sectionName` (bokforsiden) | DDIA | Kap. | Nivå | Begrunnelse (sentralitet → omfang) |
|---|---|---|---|:---:|---|
| 0 | Eksamenskart og eksamenshåndverk | — | 2 | — | Prioriteringsverktøy + de to eksamensferdighetene (avveiingsdrøfting-mal, «presiser forutsetning/flaskehals»-disiplin) + prosjektspor-note + arkiv-forbehold. |
| 1 | Datamodeller og spørrespråk | 2 | 3 | 3 | Relasjonell vs. dokument vs. graf; deklarativt vs. imperativt. Bro til arkivet + prosjektspor-fundament. |
| 2 | Lagring og indeksering | 3 | 3 | 2 | **LSM-tre vs. B-tre**, OLTP vs. OLAP, kolonnelagring. Ryggraden i lagringsavveiingene + der arkivets blokk-/indeksregning gjenbrukes. |
| 3 | Encoding og skjemaevolusjon | 4 | 2 | 2 | Serialiseringsformater (JSON/Thrift/Protobuf/Avro), forover-/bakoverkompatibilitet, dataflytmodi. |
| 4 | Replikering | 5 | 5 | **1** | **Nivå 1, tyngdepunkt.** Single-/multi-leader/leaderless + kvorum + replikeringsforsinkelse. 4 teori + drill. |
| 5 | Partisjonering og sharding | 6 | 3 | **1** | **Nivå 1, tyngdepunkt.** Nøkkel-/hashpartisjonering, hot spots, sekundærindekser, rebalansering, ruting + drill. |
| 6 | Transaksjoner og isolasjon | 7 | 4 | **1** | **Nivå 1.** ACID, isolasjonsnivåer, anomalier, serialiserbarhet (2PL/SSI) + drill. |
| 7 | Feil, konsistens og konsensus | 8, 9 | 5 | **1** | **Nivå 1, tyngdepunkt.** Feilmodeller + lineariserbarhet/CAP + kausalitet/rekkefølge + 2PC/Raft/Paxos + drill. |
| 8 | Batch- og strømprosessering | 10, 11 | 3 | 3 | MapReduce/Spark + Kafka/CDC/vindusoperasjoner + batch-vs-strøm. Kjenne til. |
| 9 | Dimensjonering og I/O-regning | — | 3 | 2 | **Regnemodul — arkivets overlevende styrke.** Lagerbehov/gjennomstrømning/flaskehals + kvorum-/partisjoneringsmatematikk + drill. |
| 10 | Eksamenstrening | — | 3 | — | 3 komplette øvingseksamener (forklar-og-drøft + avveiingsdrøfting + dimensjonering). |

**Avvik fra DNA-drøfting-makrostrukturen (dokumentert):** DNA-drøfting legger
sjanger- og modellbesvarelse-kapitler i siste del. Her ligger drillene (4.5, 5.3,
6.4, 7.5, 9.3) inne i sine temadeler — hver nivå-1-sjanger drilles umiddelbart etter
teorien — og «modellbesvarelsene» er integrert i øvingseksamenene (Del 10), der både
avveiingsdrøfting og dimensjonering vises på flere karakternivåer. Regnemodulen
(Del 9) er lånt fra DNA-regnefag og har ikke motstykke i ren drøfting-DNA.

---

## 3. Sjangerkatalog (A–J)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. **Alle B-sjangre er projiserte (`(verifiser)`)** — ingen er
arkivbelagt for dagens fag; A-sjangrene (dimensjonering/regnekultur) er den ene
arkivbelagte tradisjonen som trolig overlever.

| Kode | Sjanger | Form | Kilde | Projisert vekt |
|---|---|---|---|---|
| **A** | **Dimensjonering / kapasitetsregning** (lagerbehov, gjennomstrømning, flaskehals, «presiser forutsetningene») | kvantitativt frisvar | **Arkivbelagt** (overlever) | Middels (regnekultur) |
| **B1** | Forklar-og-drøft en distribuert mekanisme (definer + avveiing + eksempel) | drøftingssvar | DDIA `(verifiser)` | **Svært høy** |
| **B2** | Sammenlign to strategier (single vs. leaderless; range vs. hash; SI vs. serialiserbar) | komparativ drøfting | DDIA `(verifiser)` | **Svært høy** |
| **B3** | Klassifiser en anomali/historie (dirty read, write skew, lineariserbar?, serialiserbar?) | klassifisering | DDIA `(verifiser)` | Høy |
| **B4** | Designoppgave for et arbeidslast-scenario (velg partisjoneringsnøkkel/replikering, håndter hot spots) | design + begrunnelse | DDIA `(verifiser)` | **Svært høy** |
| **B5** | Kvorum-/tåleevne-ræsonnement ($w+r>n$; hvor mange nodefeil tåles?) | kvantitativ drøfting | DDIA + regnekultur `(verifiser)` | Høy |
| **B6** | Konsensus-/atomær-commit-ræsonnement (hvorfor 2PC blokkerer; hva Raft løser) | strukturforklaring | DDIA `(verifiser)` | Høy |
| **B7** | Encoding/evolusjon (sammenlign formater; forover-/bakoverkompatibilitet ved skjemaendring) | komparativ + resonnement | DDIA `(verifiser)` | Middels |
| **B8** | Skisser en batch-/strømjobb (MapReduce map→shuffle→reduce; strøm vs. batch) | skisse + forklaring | DDIA `(verifiser)` | Middels |
| **B9** | Datamodell-/lagringsvalg (relasjonell/dokument/graf; LSM vs. B-tre for arbeidslast) | valg + begrunnelse | DDIA `(verifiser)` | Middels |

De to projiserte tyngdepunktene: **{B1, B2, B4} om replikering + partisjonering** og
**{B1, B3, B6} om transaksjoner + konsistens/konsensus**. A (regnekultur) dukker
trolig opp som kapasitets-/kvorum-/skjevfordelingsræsonnement (B5), ikke som gammel
k-d-tre-konstruksjon.

---

## 4. Kapitler

Feltene følger DNA-drøftingens «Skjelett-krav» tilpasset hybriden. Per temakapittel:
**Begrepskontrakt** (definisjoner med DDIA-forankring + nabo-kontrast), **Avveiingsakser
/ trade-off-tabell**, **Case-forslag** (nyskrevet mønstereksempel), **Typiske feil**,
kvote. Regnemodul-kapitler (Del 9) har i tillegg **regneprosedyre-`theorem`** og
«presiser forutsetning/flaskehals»-note. Hvert temakapittel har standard-DNA-en:
Eksamensvinkel-`tip` → Forkunnskaper-`text` + Symbol-/notasjonsliste-`collapsible`
(der symboler/formler brukes) → Temaet i landskapet → `definition` (begrepskontrakter)
→ `theorem` (kontrakter/prosedyrer der relevant) → Posisjoner og spenninger +
avveiingstabell → 1–3 `example` (siste på eksamensnivå, drøftende) → Typiske-feil-
`warning` → 5–8 `exercise` (blanding begreps-/drøfte-/regne, med momentliste-løsning +
`hints`) → Pensumkart-`collapsible` (DDIA-kapittel → begreper). **Alt DDIA-
eksamensbelegg er projisert → merk `(verifiser)`.**

---

### Del 0 — Eksamenskart og eksamenshåndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4225 (og arkiv-forbeholdet)

- **id:** `tdt4225-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Den todelte vurderingen (60 % skriftlig + 40 % prosjekter), DDIA-aksen, det kritiske arkiv-forbeholdet, de fire projiserte tyngdepunktene, sjangerkatalogen A–J og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel. Skal gjengi: (i) **vurderingen** — **60 % skriftlig skoleeksamen (3 t, A–F) + 40 % to gruppeprosjekter** (20 % + 20 %), obligatoriske øvinger; (ii) **det kritiske arkiv-forbeholdet** — arkivet (2009–2012, Bratbergsengen «Lagring og behandling») er et *foreldet annet fag*; dagens TDT4225 (Bratsberg) er DDIA-baserte *distribuerte systemer*; arkivet er derfor IKKE prognose, og alt emnefaglig belegg i boka er projisert `(verifiser)`; (iii) at **skriftlig-formatet (flervalg vs. frisvar) er uverifisert** — boka bygges for forklar-og-drøft til det motsatte er bevist; (iv) **de fire nivå-1-tyngdepunktene** (replikering, partisjonering, transaksjoner, konsistens/konsensus) og de to sannsynlige oppgaveblokkene; (v) **prognosetabellen** fra §7 (nivå 1/2/3); (vi) **sensors projiserte metaregler** — presis begrepsbruk, eksplisitt avveiingsdrøfting (navngi kostnaden), korrekt feilmodell-ræsonnement, og — fra arkivet — «presiser forutsetningene» + «identifiser flaskehalsen» + «flere begrunnede løsninger godtas»; (vii) **anbefalingen** om å skaffe ferske Bratsberg-sett før finpuss.
- **Innholdskontrakt:** Sjangerkatalogen A–J (§3) som studentens sjekkliste med form, kilde (arkivbelagt vs. projisert) og vekt. Pluss **projisert prognose for neste skriftlige (3 t)**: 2–3 forklar-og-drøft (B1), 1–2 sammenlign-strategier (B2), 1 designoppgave (B4), 1–2 anomali-/konsistensklassifisering (B3), 1 kvorum-/tåleevne-ræsonnement (B5), 1 konsensus-/commit (B6), evt. 1 encoding (B7) eller batch/strøm (B8), + 1 dimensjonering/kapasitet (A/B5). Avslutt med **leseplanen**: perfekt/nivå-1 (Del 4 replikering, Del 5 partisjonering, Del 6 transaksjoner, Del 7 konsistens/konsensus), nivå 2 (Del 2 lagring, Del 3 encoding, Del 9 regnemodul), nivå 3 (Del 1 datamodeller, Del 8 batch/strøm).
- **Typiske feil:** Metafeilene — lese arkivet (k-d-trær/signaturer) som pensum (det er et *annet, nedlagt* fag); tro at prosjektene (40 %) dekkes av skriftlig; droppe et nivå-1-tema og satse på flaks; svare med rene definisjoner uten avveiing (DDIA-eksamen straffer synsing uten trade-off); glemme regnekulturen (forutsetninger/flaskehals) på kvantitative innslag.
- **Quiz: 14 · Flashcards: 18** (vurderingsform, arkiv-forbehold, DDIA-akse, de fire tyngdepunktene, sjangerkatalogen, metareglene)

#### Kapittel 0.2: Eksamenshåndverket — avveiingsdrøfting + «presiser forutsetning/flaskehals»

- **id:** `tdt4225-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4225-0-1` · **kapitteltype:** eksamenskart/håndverk
- **description:** De to eksamensferdighetene som avgjør karakteren: hvordan du bygger en avveiingsdrøfting (definer → kontraster → navngi kostnaden → betinget anbefaling), og den kvantitative disiplinen fra regnekulturen (skriv forutsetningene, vis metoden, identifiser flaskehalsen). Pluss prosjektspor-note.
- **Eksamensbelegg:** Håndverkskapittel — leverer malene resten av boka refererer. **Avveiingsdrøfting** er det projiserte A-nivåkravet på DDIA-eksamen (`(verifiser)`); **regnedisiplinen** er den arkivbelagte, overlevende sensorregelen.
- **Innholdskontrakt:**
  `theorem` **Avveiingsdrøfting-malen** (fire trinn): (1) **Definer presist** begrepet/strategien med nærmeste nabo kontrastert; (2) **Still opp aksene** — hvilke egenskaper koster/gevinst (konsistens, tilgjengelighet, latens, skrivekapasitet, kompleksitet, feiltoleranse); (3) **Navngi kostnaden eksplisitt** for hvert alternativ («X gir mer A, men betaler med mindre B»); (4) **Betinget anbefaling** — «velg X *når* arbeidslasten er …, ellers Y». Vis en gjennomskrevet mini-drøfting (nyskrevet, f.eks. single-leader vs. leaderless for en handlekurv-tjeneste) med margnotater om hva som løfter fra middels til topp (det er navngivingen av kostnaden + den betingede anbefalingen).
  `theorem` **Regnedisiplin-malen** (fem trinn, arkivbelagt): (1) **Skriv ned forutsetningene** (antatte tall: poststørrelse, replikeringsfaktor, rate, blokkstørrelse); (2) **Sett opp uttrykket som formel** før du setter inn tall; (3) **Regn**; (4) **Identifiser det dominerende leddet / flaskehalsen** (disk vs. nettverk vs. CPU; passeringsdata >> metadata); (5) **Sjekk rimelighet** og oppgi at flere begrunnede forutsetninger gir full uttelling.
  `tip` **Prosjektspor** — hvordan de to gruppeprosjektene (40 %) forholder seg til teorien: typisk praktisk arbeid mot en relasjonell/NoSQL-database + dataanalyse; boka merker underveis hvilke kapitler som er mest prosjektnære (1.1, 2.3, 5.1, 8.2).
- **Case-forslag:** Én drøftingscase (velg replikeringsstrategi) + én regnecase (lagerbehov for et sensor-datasett), begge gjennomskrevet som mal.
- **Typiske feil:** Liste egenskaper uten å veie dem mot hverandre (deskripsjon, ikke drøfting); anbefale uten betingelse («leaderless er best» — best *når*?); i regning: bart tallsvar uten forutsetninger/metode, eller å glemme å peke på flaskehalsen.
- **Quiz: 14 · Flashcards: 16** (de to malenes trinn, avveiingsaksene, regnedisiplinens fem steg, prosjektsporet)

---

### Del 1 — Datamodeller og spørrespråk *(DDIA kap. 2 · nivå 3 · bro til arkivet + prosjektspor)*

> Fundamentet: hvordan data struktureres og spørres før distribusjonen kommer inn.
> Nivå 3 (kjenne til) på skriftlig, men bærebjelke for prosjektene og forutsetning for
> lagring/partisjonering. Kap. 1.1 er den mest prosjektnære.

#### Kapittel 1.1: Relasjonell, dokument og graf — datamodellene

- **id:** `tdt4225-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-0-2` · **kapitteltype:** teori
- **description:** De tre store datamodellene, hva slags data hver egner seg til (én-til-mange, mange-til-mange, sammenkoblede data), og skjema-på-skriving vs. skjema-på-lesing.
- **Eksamensbelegg:** Sjanger B9/B1, nivå 3 `(verifiser)`. Klassisk «hvilken modell for denne arbeidslasten»-drøfting; prosjektnær.
- **Begrepskontrakt:** `definition` (DDIA kap. 2): **relasjonell modell** (tabeller/relasjoner, join i databasen), **dokumentmodell** (JSON-dokument, lokalitet, denormalisering — *nabo:* relasjonell), **grafmodell** (property graph / triple store — *nabo:* dokument for mange-til-mange), **normalisering vs. denormalisering**, **skjema-på-skriving (*schema-on-write*) vs. skjema-på-lesing (*schema-on-read*)**, **impedans-mistilpasning (*object–relational mismatch*)**, **datalokalitet**. Hver med DDIA-forankring + nabo-kontrast.
- **Avveiingsakser:** dokument vs. relasjonell — lokalitet/skjemafleksibilitet vs. join-støtte/mange-til-mange; graf når koblingene dominerer. Trade-off-tabell (modell × [mange-til-mange, skjemaendring, lokalitet, join-behov]).
- **Case-forslag (nyskrevet):** «En strømmetjeneste lagrer brukere, spillelister og sanger der samme sang ligger i mange spillelister og en bruker følger mange andre brukere. Hvilken datamodell passer, og hva koster valget?» Drøft alle tre.
- **Typiske feil:** Tro at dokumentmodell alltid slår relasjonell (mange-til-mange straffer dokument med duplisering/manuell join); kalle grafmodell «samme som dokument»; blande skjema-på-lesing med «ingen skjema».
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.2: Spørrespråk — deklarativt vs. imperativt

- **id:** `tdt4225-1-2` · **number:** 1.2 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4225-1-1` · **kapitteltype:** teori
- **description:** Forskjellen på deklarative (SQL, hva) og imperative (kode, hvordan) spørrespråk, hvorfor deklarativt egner seg for parallellisering, og MapReduce som mellomting.
- **Eksamensbelegg:** Sjanger B1/B9, nivå 3 `(verifiser)`. Ofte som del av en større datamodell-/batch-drøfting.
- **Begrepskontrakt:** `definition` (DDIA kap. 2): **deklarativt spørrespråk** (*nabo:* imperativt), **imperativt spørrespråk**, **spørreoptimaliserer**, **MapReduce-spørring** (map + reduce som mellomform — *nabo:* deklarativt), **aggregeringspipeline** (MongoDB-stil). Kort kontrast SQL vs. imperativ løkke vs. MapReduce.
- **Avveiingsakser:** deklarativt = optimaliserbart/parallelliserbart, men mindre uttrykkskraft for enkelte oppgaver; imperativt = full kontroll, men binder utførelsesrekkefølgen.
- **Case-forslag (nyskrevet):** «Uttrykk 'gjennomsnittlig ordrebeløp per region' deklarativt (SQL-skisse) og som en map/reduce-skisse — hvorfor lar den deklarative parallelliseres lettere?»
- **Typiske feil:** Tro at deklarativt alltid er raskere (det er *optimaliserbart*, ikke garantert raskt); blande MapReduce-spørring (kap. 2) med batch-rammeverket MapReduce (kap. 10) uten å se koblingen.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 1.3: Grafmodeller og grafspørrespråk

- **id:** `tdt4225-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4225-1-2` · **kapitteltype:** teori
- **description:** Property-graph-modellen vs. triple-store, og grafspørrespråk (Cypher, SPARQL, Datalog) for sterkt sammenkoblede data.
- **Eksamensbelegg:** Sjanger B9, nivå 3 `(verifiser)`. Sjeldnere alene, men gjenganger i «velg datamodell»-drøfting når mange-til-mange dominerer.
- **Begrepskontrakt:** `definition` (DDIA kap. 2): **property graph** (noder + kanter med egenskaper — *nabo:* triple-store), **triple-store / RDF** (subjekt–predikat–objekt), **Cypher**, **SPARQL**, **Datalog** (regelbasert — *nabo:* deklarativ SQL), **traversering**. Ingen dyp syntaks — begrepene og når grafen vinner.
- **Avveiingsakser:** graf vs. relasjonell for mange-til-mange og varierende koblingstyper — grafen slipper dyre rekursive joins, men er mindre kjent/standardisert.
- **Case-forslag (nyskrevet):** «Et sosialt nettverk med 'venn av venn'-spørringer i vilkårlig dybde: hvorfor er en grafmodell bedre enn rekursive SQL-joins?»
- **Typiske feil:** Blande property graph og triple-store; tro at graf «erstatter» relasjonell generelt (kun når koblingene dominerer).
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 1:** 4 prøver (datamodeller og spørrespråk)
1. Prøve 1.A (25 min): Relasjonell/dokument/graf — velg modell for gitt arbeidslast (B9).
2. Prøve 1.B (25 min): Skjema-på-skriving vs. -lesing + impedans-mistilpasning (B1).
3. Prøve 1.C (25 min): Deklarativt vs. imperativt + MapReduce-spørring (B1/B9).
4. Prøve 1.D (25 min): Grafmodell vs. rekursiv join — begrepskontroll + kortdrøfting (B9).

---

### Del 2 — Lagring og indeksering *(DDIA kap. 3 · nivå 2 · bro til arkivet)*

> «Under panseret» på én node: hvordan lagringsmotorer skriver og indekserer, og
> den store avveiingen **LSM-tre vs. B-tre**. Her gjenbrukes arkivets blokk-/
> indeksregning (Del 9 henter herfra). Nivå 2 (beherskes godt).

#### Kapittel 2.1: Loggstrukturert lagring og LSM-trær

- **id:** `tdt4225-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-1-1` · **kapitteltype:** teori
- **description:** Append-only logger, hash-indeks, SSTable og LSM-trær (memtable → SSTable → kompaktering), Bloom-filter og hvorfor loggstruktur gir rask skriving.
- **Eksamensbelegg:** Sjanger B2/B9, nivå 2 `(verifiser)`. LSM vs. B-tre er en projisert gjenganger; forankres i LevelDB/RocksDB/Cassandra/HBase.
- **Begrepskontrakt:** `definition` (DDIA kap. 3): **append-only-logg**, **hash-indeks**, **SSTable (*sorted string table*)**, **memtable**, **LSM-tre (*log-structured merge-tree*)** (*nabo:* B-tre), **kompaktering (*compaction*)**, **Bloom-filter**, **skriveforsterkning (*write amplification*)**. `theorem` **LSM-skrive-/lesevei-kontrakt**: skriv → memtable → flush til SSTable; les → memtable, så SSTable-nivåer (Bloom-filter luker bort tomme); kompaktering slår sammen og fjerner utdaterte.
- **Avveiingsakser:** høy skrivegjennomstrømning (sekvensiell skriving) vs. lesekostnad (flere nivåer) + kompakteringsbelastning; se full tabell i 2.2.
- **Case-forslag (nyskrevet):** «En tidsserie-database tar imot millioner av skrivinger per sekund. Forklar hvorfor en LSM-motor egner seg, og hva kompaktering koster.»
- **Typiske feil:** Tro at LSM er rask på *alt* (leser kan treffe mange SSTabeller); glemme Bloom-filterets rolle; forveksle skriveforsterkning (LSM: kompaktering) med B-treets side-skriving.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.2: B-trær og avveiingen LSM vs. B-tre

- **id:** `tdt4225-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-2-1` · **kapitteltype:** teori
- **description:** B-treets struktur (sider, forgrening, WAL/redo-logg for atomisk sideoppdatering) og den direkte sammenligningen med LSM-trær på skriving, lesing, plass og forutsigbarhet.
- **Eksamensbelegg:** Sjanger B2, nivå 2 `(verifiser)`. Den klassiske lagrings-avveiingen; forankres i PostgreSQL/MySQL InnoDB.
- **Begrepskontrakt:** `definition` (DDIA kap. 3): **B-tre**, **side (*page*)**, **forgreningsfaktor (*branching factor*)**, **skriv-fremover-logg (*write-ahead log*, WAL)**, **sidesplitt**, **klynget indeks (*clustered index*)**, **sekundærindeks**, **dekkende indeks (*covering index*)**. `theorem` **B-tre-oppdateringskontrakt**: hver skriving går først til WAL (for krasjsikkerhet), deretter til treets side; en full side splittes.
- **Avveiingsakser:** **trade-off-tabell (LSM vs. B-tre)** over aksene [skrivegjennomstrømning, lesekonsistens/forutsigbarhet, skriveforsterkning, plassbruk/komprimering, låsing]. LSM: bedre skriving/komprimering, uforutsigbar kompakteringslatens; B-tre: forutsigbar lesing, hver skriving minst to ganger (WAL + side), god for sterk transaksjonssemantikk.
- **Case-forslag (nyskrevet):** «For et bankregister med mange små punktlesninger og transaksjoner — LSM eller B-tre? Drøft med aksene og navngi kostnaden ved ditt valg.»
- **Typiske feil:** Feilattribuere hvem som er raskest på skriving/lesing; glemme at B-tre også skriver WAL (så skriver siden); tro at LSM ikke kan gi transaksjoner.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 2.3: OLTP vs. OLAP og kolonnelagring

- **id:** `tdt4225-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-2-2` · **kapitteltype:** teori
- **description:** Skillet mellom transaksjonssystemer (OLTP) og analytiske systemer (OLAP/datavarehus), og hvorfor kolonneorientert lagring med komprimering slår radlagring på store analytiske skann.
- **Eksamensbelegg:** Sjanger B9/B1, nivå 2 `(verifiser)`. Prosjektnær (dataanalyse-delen); bro til TDT4300-stoff.
- **Begrepskontrakt:** `definition` (DDIA kap. 3): **OLTP (*online transaction processing*)** (*nabo:* OLAP), **OLAP (*online analytical processing*) / datavarehus**, **radlagring vs. kolonnelagring (*column-oriented storage*)**, **kolonnekomprimering (bitmap/run-length)**, **sorteringsnøkkel (*sort key*)**, **materialisert visning / datakube**. Kontrast tilgangsmønster: mange små punkt-transaksjoner (OLTP) vs. få store aggregerende skann (OLAP).
- **Avveiingsakser:** kolonnelagring = svært rask på analytiske skann + høy komprimering, men dyr på enkeltradsoppdateringer og punkt-lesninger → egner seg for OLAP, ikke OLTP.
- **Case-forslag (nyskrevet):** «En analyse skal summere salg per produktkategori over milliarder av rader. Forklar hvorfor kolonnelagring med komprimering vinner, og hvorfor du *ikke* ville brukt den for kassasystemets skrivinger.»
- **Typiske feil:** Bruke kolonnelagring for OLTP; tro at komprimering bare sparer plass (den sparer også I/O-båndbredde på skann); blande materialisert visning med indeks.
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 2:** 4 prøver (lagring og indeksering)
1. Prøve 2.A (25 min): LSM-vei (memtable/SSTable/kompaktering/Bloom) — begrep + skisse (B1).
2. Prøve 2.B (30 min): LSM vs. B-tre — full avveiingsdrøfting for gitt arbeidslast (B2).
3. Prøve 2.C (25 min): OLTP vs. OLAP + kolonnelagring — velg og begrunn (B9).
4. Prøve 2.D (25 min): Blandet begrepskontroll (skriveforsterkning, WAL, sort key, Bloom-filter) (B1).

---

### Del 3 — Encoding og skjemaevolusjon *(DDIA kap. 4 · nivå 2)*

> Hvordan data serialiseres for lagring og overføring, og — det eksamensviktige —
> hvordan skjemaet kan endres uten å knuse kjørende systemer (forover-/bakover-
> kompatibilitet). Nivå 2.

#### Kapittel 3.1: Serialiseringsformater

- **id:** `tdt4225-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-1-1` · **kapitteltype:** teori
- **description:** Fra språkspesifikk serialisering til tekstformater (JSON/XML/CSV) og binære skjemaformater (Thrift, Protocol Buffers, Avro) — kompakthet, skjemakobling og feltmerking.
- **Eksamensbelegg:** Sjanger B7, nivå 2 `(verifiser)`. «Sammenlign formatene»-drøfting; forankres i Thrift/Protobuf/Avro.
- **Begrepskontrakt:** `definition` (DDIA kap. 4): **serialisering/deserialisering (*encoding/decoding*)**, **tekstformat (JSON/XML/CSV)** (*nabo:* binært skjemaformat), **binært skjemaformat**, **feltmerke (*field tag*)** (Thrift/Protobuf), **Avro** (skriver-/leserskjema, ingen feltmerker — *nabo:* Protobuf), **skriverskjema vs. leserskjema (*writer's/reader's schema*)**. Kontrast tag-basert (Protobuf/Thrift) vs. skjemaoppløsning (Avro).
- **Avveiingsakser:** **trade-off-tabell** (format × [kompakthet, skjema påkrevd, lesbarhet, evolusjonsstøtte, dynamisk generert skjema]). JSON: lesbart/utbredt, men verbost og typesvakt; Avro: kompakt + best for dynamisk genererte skjema (dataflyt/Hadoop).
- **Case-forslag (nyskrevet):** «En tjeneste sender millioner av små meldinger mellom mikrotjenester. Sammenlign JSON og Protobuf på kompakthet og evolusjon.»
- **Typiske feil:** Tro at binærformater ikke tåler skjemaendring (de er *bygget* for det); blande Avros skjemaoppløsning med Protobufs feltmerker; glemme at JSON mangler heltalls-/binærpresisjon.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 3.2: Skjemaevolusjon og dataflytmodi

- **id:** `tdt4225-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-3-1` · **kapitteltype:** teori
- **description:** Forover- og bakoverkompatibilitet ved skjemaendring, hvordan hvert format oppnår den, og de tre måtene data flyter mellom prosesser (via database, via tjenestekall/RPC, via asynkron melding).
- **Eksamensbelegg:** Sjanger B7/B1, nivå 2 `(verifiser)`. «Kan denne skjemaendringen rulles ut trygt?»-ræsonnement.
- **Begrepskontrakt:** `definition` (DDIA kap. 4): **bakoverkompatibilitet (*backward compatibility*)** (ny kode leser gamle data — *nabo:* forover), **foroverkompatibilitet (*forward compatibility*)** (gammel kode leser nye data), **rullende oppgradering (*rolling upgrade*)**, **dataflyt via database / via tjeneste (REST/RPC) / via asynkron melding (meldingsmegler)**, **RPC-fallgruvene** (nettverk ≠ funksjonskall). `theorem` **evolusjonsregel-kontrakt**: legg til felt kun som valgfritt/med standardverdi; fjern kun valgfrie felt; endre aldri et felts merke/type — for å bevare begge kompatibilitetsretninger under rullende oppgradering.
- **Avveiingsakser:** de tre dataflytmodiene — synkron RPC (enkelt, men koblet + partielle feil) vs. asynkron melding (frikoblet/bufret, men indirekte); database som «melding gjennom tid».
- **Case-forslag (nyskrevet):** «Du legger til et felt i et Avro-skjema mens halve klyngen kjører gammel kode. Hvilke regler sikrer at både gammel og ny kode fungerer under den rullende oppgraderingen?»
- **Typiske feil:** Bytte om forover/bakover; tro at RPC oppfører seg som et lokalt kall (glemme timeout/idempotens/partielle feil); endre et påkrevd felt uten standardverdi.
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 3:** 4 prøver (encoding og skjemaevolusjon)
1. Prøve 3.A (25 min): Sammenlign JSON/Thrift/Protobuf/Avro (B7).
2. Prøve 3.B (25 min): Forover- vs. bakoverkompatibilitet — klassifiser skjemaendringer (B7/B3).
3. Prøve 3.C (25 min): Trygg rullende oppgradering med Avro (B1).
4. Prøve 3.D (25 min): Dataflytmodi + RPC-fallgruver — begrep + kortdrøfting (B1).

---

### Del 4 — Replikering *(DDIA kap. 5 · NIVÅ 1 · tyngdepunkt)*

> Bokas første store tyngdepunkt (projisert). Å holde *samme* data på flere noder for
> feiltoleranse, leselast og nærhet. De tre grunnstrategiene — single-leader,
> multi-leader, leaderless — og kvorum + replikeringsforsinkelsens lesegarantier er
> nesten garantert eksamensstoff `(verifiser)`. Kap. 4.5 er den store
> avveiingsdrøftings-drillen.

#### Kapittel 4.1: Single-leader-replikering

- **id:** `tdt4225-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-0-2` · **kapitteltype:** teori
- **description:** Leder–følger-arkitekturen: én leder tar skrivinger, følgere replikerer; synkron vs. asynkron replikering, oppsett av ny følger og failover ved lederkrasj.
- **Eksamensbelegg:** Sjanger B1/B2, nivå 1 `(verifiser)`. Den mest utbredte modellen (PostgreSQL/MySQL/MongoDB); startpunktet for all replikeringsdrøfting.
- **Begrepskontrakt:** `definition` (DDIA kap. 5): **leder (*leader*)/følger (*follower*)**, **single-leader-replikering** (*nabo:* multi-leader), **synkron vs. asynkron replikering**, **halvsynkron (*semi-synchronous*)**, **failover**, **replikeringslag / etterslep (*replication lag*)**. `theorem` **failover-kontrakt**: oppdag lederkrasj → velg ny leder → ruter skrivinger dit; farene er tapte skrivinger (asynkron), delt hjerne (*split brain*) og feil timeout-terskel.
- **Avveiingsakser:** synkron (ingen tapte skrivinger, men en treg følger blokkerer skriving) vs. asynkron (høy skrivetilgjengelighet, men mulig datatap ved failover). Trade-off-tabell.
- **Case-forslag (nyskrevet):** «En nettbutikk bruker én leder med to følgere. Beskriv hva som skjer ved failover hvis replikeringen er asynkron — hvilke skrivinger kan gå tapt, og hvordan reduserer du risikoen?»
- **Typiske feil:** Tro at asynkron replikering er «trygg» ved failover; blande replikering med partisjonering; overse split brain; tro at synkron betyr *alle* følgere (ofte bare én).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.2: Replikeringsforsinkelse og lesegarantier

- **id:** `tdt4225-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-4-1` · **kapitteltype:** teori
- **description:** Problemene asynkron replikering skaper for lesere, og de tre lesegarantiene som demper dem: lese-dine-egne-skrivinger, monotone lesninger og konsistent prefiks.
- **Eksamensbelegg:** Sjanger B1/B3, nivå 1 `(verifiser)`. Kjernen i «eventual consistency ≠ ingen garantier»-poenget; hyppig kilde til begrepsfeller.
- **Begrepskontrakt:** `definition` (DDIA kap. 5): **eventuell konsistens (*eventual consistency*)** (*nabo:* sterk/lineariserbar), **lese-dine-egne-skrivinger (*read-your-writes*)**, **monotone lesninger (*monotonic reads*)** (aldri «tilbake i tid»), **konsistent prefiks-lesninger (*consistent prefix reads*)** (ser skrivinger i kausal rekkefølge). Hver garanti med det anomalitilfellet den fjerner.
- **Avveiingsakser:** hver garanti koster implementasjon (klistrede sesjoner, lese fra leder, versjonssporing) mot lesetilgjengelighet/latens. Plassér garantiene på et spekter mellom eventual og lineariserbar.
- **Case-forslag (nyskrevet):** «En bruker poster en kommentar men ser den ikke ved neste sidelast (leste fra en henger-følger). Hvilken lesegaranti mangler, og hvordan gir du den?»
- **Typiske feil:** Tro at eventual = ingen garantier; blande monotone lesninger med lese-dine-egne-skrivinger; anta at all replikering gir konsistent prefiks (partisjonering bryter det uten ekstra arbeid).
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 4.3: Multi-leader-replikering

- **id:** `tdt4225-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-4-2` · **kapitteltype:** teori
- **description:** Flere ledere som hver tar skrivinger (flere datasentre, frakoblede klienter, samarbeidsredigering), replikeringstopologier, og det uunngåelige problemet: skrivekonflikter og konfliktløsning.
- **Eksamensbelegg:** Sjanger B2/B1, nivå 1 `(verifiser)`. Konfliktløsning (LWW, versjonsvektorer, CRDT) er en projisert begreps- og drøftingsgjenganger.
- **Begrepskontrakt:** `definition` (DDIA kap. 5): **multi-leader-replikering** (*nabo:* single-leader og leaderless), **replikeringstopologi (stjerne/sirkel/alle-til-alle)**, **skrivekonflikt (*write conflict*)**, **konfliktløsning**: **sist-skriving-vinner (*last-write-wins*, LWW — taper skrivinger!)**, **versjonsvektor (*version vector*)**, **konfliktfri replikert datatype (CRDT)**, **konvergens**. `theorem` **konfliktdeteksjon-kontrakt**: samtidige skrivinger (verken årsak til den andre) må oppdages via versjonsmetadata og slås sammen — ikke stille overskrives.
- **Avveiingsakser:** multi-leader = skrivetilgjengelighet på tvers av datasentre / frakoblet arbeid, men **konflikter er prisen**; LWW er enkelt men taper data; CRDT/versjonsvektor bevarer, men er komplekst. Trade-off-tabell.
- **Case-forslag (nyskrevet):** «En kalenderapp lar to brukere redigere samme hendelse frakoblet. Beskriv konflikten som oppstår ved synk, og drøft LWW vs. sammenslåing.»
- **Typiske feil:** Tro at LWW er «trygt» (det forkaster stille skrivinger); blande topologi med konfliktløsning; tro at multi-leader unngår konflikter (det *skaper* dem).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.4: Leaderless-replikering og kvorum

- **id:** `tdt4225-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4225-4-3` · **kapitteltype:** teori
- **description:** Dynamo-stilen der klienten skriver/leser til flere noder direkte: kvorumbetingelsen $w+r>n$, lesereparasjon og anti-entropi, og hvorfor kvorum *ikke* garanterer sterk konsistens.
- **Eksamensbelegg:** Sjanger B5/B2, nivå 1 `(verifiser)`. Kvorummatematikken ($w+r>n$) er et projisert kvantitativt-drøfte-tyngdepunkt (regnemodulen gjenbruker den i 9.3); forankres i Cassandra/Riak/Voldemort.
- **Begrepskontrakt:** `definition` (DDIA kap. 5): **leaderless-replikering (*leaderless*)** (*nabo:* single-/multi-leader), **kvorum (*quorum*)**, **$n$/$w$/$r$** (noder / skrivekvorum / lesekvorum), **lesereparasjon (*read repair*)**, **anti-entropi (bakgrunnssynk)**, **sloppy quorum + hinted handoff**, **versjonsvektor for samtidighet**. `theorem` **kvorum-kontrakt**: hvis $w+r>n$, overlapper lese- og skrivemengden i minst én oppdatert node → leseren *kan* se siste skriving. **Men** garantien svikter ved sloppy quorum, samtidige skrivinger uten sammenslåing, eller manglende synkron reparasjon → kvorum ≠ lineariserbarhet.
- **Avveiingsakser:** leaderless = høy skrive-/lesetilgjengelighet under nodefeil (juster $w$, $r$), men svakere konsistensgarantier og konfliktløsning på leseren. Trade-off-tabell over ($w$, $r$)-valg × [skrivetilgjengelighet, lesetilgjengelighet, konsistens, latens].
- **Case-forslag (nyskrevet):** «Med $n=5$: velg $(w,r)$ for (a) maksimal skrivetilgjengelighet, (b) sterkest lesekonsistens. Forklar tåleevnen (antall nodefeil) i hvert tilfelle og hvorfor $w+r>n$ likevel ikke gir lineariserbarhet.»
- **Typiske feil:** Tro at $w+r>n$ gir lineariserbarhet; regne feil tåleevne (skriving tåler $n-w$ nodefeil); glemme lesereparasjon/anti-entropi; blande sloppy quorum med vanlig kvorum.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 4.5: DRILL — Replikeringsdesign og avveiingsdrøfting

- **id:** `tdt4225-4-5` · **number:** 4.5 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4225-4-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger B2/B4: gitt et arbeidslast-scenario, velg replikeringsstrategi (single-/multi-leader/leaderless), sett konfliktløsning og lesegarantier, og drøft avveiingen eksplisitt.
- **Eksamensbelegg:** Sjanger B2/B4/B5, nivå 1 `(verifiser)`. Det projiserte tyngdepunktet «replikering».
- **Innholdskontrakt (løsningsoppskrift, fra 0.2-malen):** 1) **les scenariet og skriv forutsetningene** (lesetung/skrivetung? ett/flere datasentre? frakoblede klienter? konsistenskrav?); 2) velg grunnstrategi og **begrunn med aksene**; 3) sett konfliktløsning (LWW/versjonsvektor/CRDT) ved multi-leader/leaderless; 4) velg lesegarantier + ev. $(w,r)$; 5) **navngi kostnaden** ved valget og angi en betinget anbefaling. Gjennomskrevet eksamenscase (nyskrevet, f.eks. en global handlekurv eller en samarbeidsredigerings-app) med margnotater om hva som løfter fra middels til topp.
- **Case-forslag:** 6–8 nyskrevne scenarier av stigende kompleksitet, hver med momentliste-løsning + forutsetningsledd. Minst to som tvinger multi-leader-konfliktdrøfting og minst ett med kvorum-tåleevneregning (bro til 9.3).
- **Typiske feil:** Velge strategi uten å veie kostnaden; glemme konflikter ved multi-/leaderless; ikke oppgi forutsetninger; anbefale ubetinget («leaderless er best»).
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (replikering)
1. Prøve 4.A (25 min): Single-leader — synkron/asynkron/failover (B1).
2. Prøve 4.B (25 min): Lesegarantier — klassifiser og fjern anomalier (B3).
3. Prøve 4.C (30 min): Multi-leader konfliktløsning (LWW vs. sammenslåing) (B2).
4. Prøve 4.D (30 min): Leaderless + kvorum $w+r>n$ — design + tåleevne (B4/B5).

---

### Del 5 — Partisjonering og sharding *(DDIA kap. 6 · NIVÅ 1 · tyngdepunkt)*

> Bokas andre store tyngdepunkt (projisert), og den moderne arvtakeren til arkivets
> systemdesign. Å dele *ulike* data over noder for volum og skrivekapasitet: nøkkel-
> vs. hashpartisjonering, hot spots, sekundærindekser, rebalansering og ruting.
> Kap. 5.3 avslutter med designdrill.

#### Kapittel 5.1: Partisjonering av nøkkel–verdi-data

- **id:** `tdt4225-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-4-1` · **kapitteltype:** teori
- **description:** Hvorfor og hvordan data deles i partisjoner: nøkkelrekkevidde- vs. hashpartisjonering, hot spots / skjevfordeling, og samspillet med replikering.
- **Eksamensbelegg:** Sjanger B2/B4, nivå 1 `(verifiser)`. Nøkkelvalget er det projiserte designtyngdepunktet; forankres i HBase/Cassandra/MongoDB.
- **Begrepskontrakt:** `definition` (DDIA kap. 6): **partisjon/shard**, **partisjonering vs. replikering** (*ulike* data vs. *samme* data — kritisk nabo-kontrast), **nøkkelrekkevidde-partisjonering (*range partitioning*)** (*nabo:* hash), **hashpartisjonering**, **konsistent hashing**, **hot spot / skjevfordeling (*skew*)**, **sammensatt nøkkel** for å spre hot spots. `theorem` **partisjoneringsvalg-kontrakt**: rekkevidde gir effektive områdespørringer men risikerer hot spots ved monotone nøkler; hash sprer jevnt men ødelegger områdespørringer.
- **Avveiingsakser:** **trade-off-tabell** (rekkevidde vs. hash × [områdespørring, jevn fordeling, hot-spot-risiko, rebalansering]).
- **Case-forslag (nyskrevet):** «En sensorplattform bruker tidsstempel som nøkkel og får all skriving på én partisjon. Diagnostiser hot spot-en og foreslå to nøkkelstrategier med kostnaden ved hver.»
- **Typiske feil:** Blande partisjonering og replikering; velge rekkeviddepartisjonering på monoton nøkkel (tidsstempel → hot spot); tro at hash fjerner *all* skjevfordeling (populær nøkkel er fortsatt hot).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.2: Sekundærindekser og rebalansering

- **id:** `tdt4225-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-5-1` · **kapitteltype:** teori
- **description:** De to måtene å partisjonere sekundærindekser (dokumentpartisjonert/lokal vs. termpartisjonert/global), og strategiene for å flytte partisjoner når klyngen vokser (rebalansering).
- **Eksamensbelegg:** Sjanger B1/B2, nivå 1 `(verifiser)`. Lokal-vs-global-indeks og rebalanseringsstrategier er projiserte begreps- og drøftingsgjengangere.
- **Begrepskontrakt:** `definition` (DDIA kap. 6): **dokumentpartisjonert (lokal) sekundærindeks** (skriv til én, les fra alle — *scatter/gather*; *nabo:* global), **termpartisjonert (global) sekundærindeks** (les fra én, skriv til flere), **rebalansering**, **fast antall partisjoner (fixed number)**, **dynamisk partisjonering**, **partisjon proporsjonal med noder**, **hvorfor *ikke* hash-mod-N** (flytter nesten alt ved nodeendring). `theorem` **rebalanserings-kontrakt**: unngå `hash mod N`; bruk fast (over)antall partisjoner eller dynamisk splitting slik at bare noen få partisjoner flyttes.
- **Avveiingsakser:** lokal indeks (billig skriving, dyr spørring via scatter/gather) vs. global indeks (rask spørring, dyr/distribuert skriving). Rebalansering: automatisk (praktisk, men farlig ved feildeteksjon) vs. manuell.
- **Case-forslag (nyskrevet):** «En bruktbil-tjeneste partisjonerer på annonse-ID men søker ofte på farge. Sammenlign lokal og global sekundærindeks for søket, og forklar hvorfor `hash mod N` er en dårlig rebalanseringsstrategi.»
- **Typiske feil:** Bytte om lokal/global på hvem som er dyr på skriving vs. lesing; foreslå `hash mod N`; tro at rebalansering er gratis.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 5.3: Forespørselsruting + DRILL partisjoneringsdesign

- **id:** `tdt4225-5-3` · **number:** 5.3 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4225-5-2` · **kapitteltype:** teori/drill
- **description:** Hvordan en klient finner riktig partisjon (ruting via node, ruteledd eller koordinasjonstjeneste som ZooKeeper), etterfulgt av full designdrill på sjanger B4.
- **Eksamensbelegg:** Sjanger B4/B1, nivå 1 `(verifiser)`. Designoppgaven er det projiserte partisjoneringstyngdepunktet.
- **Begrepskontrakt:** `definition` (DDIA kap. 6): **forespørselsruting (*request routing*)**, **de tre rutingtilnærmingene** (klient→hvilken som helst node / rutinglag / partisjonsbevisst klient), **koordinasjonstjeneste (ZooKeeper/etcd) for partisjonskart**, **gossip-protokoll**. `theorem` **partisjoneringsdesign-oppskrift (drill):** 1) skriv forutsetninger (spørremønster: punkt/område? skjevfordeling?); 2) velg partisjoneringsnøkkel (rekkevidde/hash/sammensatt) + begrunn; 3) håndter hot spots; 4) velg sekundærindeks-type; 5) velg rebalanserings- og rutingstrategi; 6) navngi kostnaden.
- **Avveiingsakser:** ruting via egen tjeneste (fleksibelt, ekstra avhengighet) vs. gossip (selvhjulpet, mer kompleks konvergens).
- **Case-forslag (nyskrevet):** 5–7 designscenarier (f.eks. meldingstjeneste, geodata, netthandel-katalog) med momentliste-løsning + forutsetningsledd; minst ett med kombinert partisjonering + replikering + kvorum (bro til Del 4/9).
- **Typiske feil:** Glemme ruting-/kartvedlikehold; ikke koble partisjonering til replikering; hoppe over hot-spot-håndtering; designe uten forutsetninger.
- **Quiz: 20 · Flashcards: 16**

**Prøve-kvote Del 5:** 4 prøver (partisjonering og sharding)
1. Prøve 5.A (25 min): Rekkevidde vs. hash + hot spots (B2).
2. Prøve 5.B (25 min): Lokal vs. global sekundærindeks (B2).
3. Prøve 5.C (25 min): Rebalanseringsstrategier (hvorfor ikke `hash mod N`) (B1).
4. Prøve 5.D (30 min): Full partisjoneringsdesign for gitt arbeidslast (B4).

---

### Del 6 — Transaksjoner og isolasjon *(DDIA kap. 7 · NIVÅ 1)*

> ACID, de svake isolasjonsnivåene og anomaliene de slipper gjennom, og
> serialiserbarhet (den sterkeste garantien). Anomali-klassifisering (B3) og
> isolasjonsvalg er projiserte gjengangere. Kap. 6.4 er anomali-drillen.

#### Kapittel 6.1: ACID og transaksjonsbegrepet

- **id:** `tdt4225-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4225-0-2` · **kapitteltype:** teori
- **description:** Hva en transaksjon garanterer (ACID presist definert), hva atomisitet og isolasjon faktisk betyr, og hvorfor «BASE» er noe annet.
- **Eksamensbelegg:** Sjanger B1/B3, nivå 1 `(verifiser)`. Fundamentet; ACID-begrepene er høyfrekvent flashcard-/begrepsstoff.
- **Begrepskontrakt:** `definition` (DDIA kap. 7): **transaksjon**, **atomisitet (*atomicity*)** (alt-eller-intet — *nabo:* holdbarhet), **konsistens (*consistency* — applikasjonsinvariant, ikke det samme som distribuert konsistens!)**, **isolasjon (*isolation*)**, **holdbarhet (*durability*)**, **ACID vs. BASE**, **enkeltobjekt- vs. flerobjekt-transaksjon**. Kritisk nabo-kontrast: ACID-C (applikasjonsinvariant) vs. konsistens-i-replikering (kap. 4/7).
- **Avveiingsakser:** sterke garantier (ACID) vs. ytelse/tilgjengelighet i distribuerte systemer; hvorfor mange NoSQL-systemer opprinnelig droppet flerobjekt-transaksjoner.
- **Case-forslag (nyskrevet):** «En pengeoverføring trekker fra én konto og legger til på en annen. Hvilke ACID-egenskaper hindrer at pengene 'forsvinner' ved krasj midt i?»
- **Typiske feil:** Blande ACID-C (applikasjonsinvariant) med distribuert/replikerings-konsistens; tro at «isolasjon» alltid betyr full serialiserbarhet; tro at BASE = ingen garantier.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 6.2: Svake isolasjonsnivåer og anomalier

- **id:** `tdt4225-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-6-1` · **kapitteltype:** teori
- **description:** Read committed, snapshot isolation (MVCC) og de samtidighetsanomaliene hvert nivå hindrer eller slipper gjennom: skitne lesninger/skrivinger, tapte oppdateringer, lesskjevhet.
- **Eksamensbelegg:** Sjanger B3, nivå 1 `(verifiser)`. Anomali-klassifisering er en projisert kjernesjanger; MVCC/snapshot isolation forankres i PostgreSQL/Oracle.
- **Begrepskontrakt:** `definition` (DDIA kap. 7): **read uncommitted / read committed / snapshot isolation (repeatable read) / serializable** (isolasjonshierarkiet), **skitten lesning (*dirty read*)**, **skitten skriving (*dirty write*)**, **tapt oppdatering (*lost update*)**, **lesskjevhet (*read skew*/ikke-repeterbar lesning)**, **flerversjon-samtidighetskontroll (MVCC)**, **snapshot**. `theorem` **isolasjonshierarki-kontrakt**: hvert nivå fjerner en klasse anomalier; read committed fjerner skitne lesninger/skrivinger; snapshot isolation fjerner i tillegg lesskjevhet og (med atomisk skriv/CAS) tapte oppdateringer — men **ikke** write skew.
- **Avveiingsakser:** sterkere isolasjon (færre anomalier) vs. samtidighet/ytelse; MVCC gir lesere som ikke blokkerer skrivere.
- **Case-forslag (nyskrevet):** «To samtidige transaksjoner øker samme teller. Vis hvordan 'tapt oppdatering' oppstår under read committed, og hvordan snapshot isolation + atomisk inkrement hindrer den.»
- **Typiske feil:** Tro at snapshot isolation stopper alt (write skew slipper gjennom); blande lost update med dirty write; tro at «repeatable read» = serialiserbar.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.3: Write skew, phantoms og serialiserbarhet

- **id:** `tdt4225-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-6-2` · **kapitteltype:** teori
- **description:** De anomaliene bare serialiserbarhet fjerner (write skew, phantoms), og de tre måtene å oppnå serialiserbarhet: faktisk seriell utførelse, tofase-låsing (2PL) og serialiserbar snapshot-isolasjon (SSI).
- **Eksamensbelegg:** Sjanger B3/B2, nivå 1 `(verifiser)`. «Er dette write skew?» og «2PL vs. SSI» er projiserte gjengangere.
- **Begrepskontrakt:** `definition` (DDIA kap. 7): **write skew** (*nabo:* lost update — men på *ulike* objekter med felles premiss), **phantom**, **materialisering av konflikt**, **serialiserbarhet (*serializability*)**, **faktisk seriell utførelse**, **tofase-låsing (*two-phase locking*, 2PL)** (predikat-/indeksområdelåser), **serialiserbar snapshot-isolasjon (SSI)** (optimistisk). `theorem` **serialiserbarhet-kontrakt**: tre implementasjoner — seriell (enkelt, men én kjerne/liten data), 2PL (pessimistisk, låsekostnad + vranglås), SSI (optimistisk, oppdager konflikter ved commit).
- **Avveiingsakser:** **trade-off-tabell** (seriell vs. 2PL vs. SSI × [samtidighet, vranglåsrisiko, avbruddsrate, skalerbarhet]).
- **Case-forslag (nyskrevet):** «To leger går av vakt samtidig; hver ser at den andre er på vakt og går. Vis at dette er write skew (ikke lost update), og forklar hvordan 2PL og SSI hver hindrer det.»
- **Typiske feil:** Kalle write skew for lost update; tro snapshot isolation fjerner write skew; blande 2PL (pessimistisk) og SSI (optimistisk); glemme phantoms/predikatlåser.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 6.4: DRILL — Anomaliklassifisering og isolasjonsvalg

- **id:** `tdt4225-6-4` · **number:** 6.4 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4225-6-3` · **kapitteltype:** drill
- **description:** Full drill på sjanger B3: gitt en samtidig transaksjonshistorie, navngi anomalien og det svakeste isolasjonsnivået som hindrer den; drøft valget.
- **Eksamensbelegg:** Sjanger B3/B2, nivå 1 `(verifiser)`.
- **Innholdskontrakt (løsningsoppskrift):** 1) les historien, tegn tidslinjen; 2) sjekk mot anomalikatalogen (dirty read/write → lost update → read skew → write skew → phantom); 3) navngi anomalien presist; 4) angi det *svakeste* nivået som fjerner den; 5) drøft isolasjonsvalgets kostnad (samtidighet/ytelse). Gjennomskrevet eksamenscase med margnotater.
- **Case-forslag:** 8–10 nyskrevne transaksjonshistorier av stigende subtilitet (minst to som skiller write skew fra lost update, minst ett phantom), hver med momentliste-løsning.
- **Typiske feil:** Hele anomali-fellekatalogen — write skew forvekslet med lost update, «snapshot isolation løser alt», feil svakeste nivå, overse phantom.
- **Quiz: 20 · Flashcards: 14**

**Prøve-kvote Del 6:** 4 prøver (transaksjoner og isolasjon)
1. Prøve 6.A (25 min): ACID-begrepene + enkelt-/flerobjekt (B1).
2. Prøve 6.B (30 min): Klassifiser anomalier under read committed / snapshot isolation (B3).
3. Prøve 6.C (30 min): Write skew vs. lost update + serialiserbarhet (B3).
4. Prøve 6.D (25 min): 2PL vs. SSI vs. seriell — avveiingsdrøfting (B2).

---

### Del 7 — Feil, konsistens og konsensus *(DDIA kap. 8–9 · NIVÅ 1 · tyngdepunkt)*

> Bokas tredje store tyngdepunkt (projisert) og faglig klimaks. Først feilmodellene
> som gjør distribusjon vanskelig (kap. 8: delvise feil, upålitelige klokker), så de
> sterke garantiene (lineariserbarhet, CAP), rekkefølge/kausalitet, og konsensus
> (2PC vs. Raft/Paxos). Kap. 7.5 er konsistens-/konsensus-drillen.

#### Kapittel 7.1: Feilmodeller — det som gjør distribusjon vanskelig

- **id:** `tdt4225-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-4-1` · **kapitteltype:** teori
- **description:** De grunnleggende problemene i distribuerte systemer: delvise feil, upålitelige nettverk (timeout ≠ krasj), upålitelige klokker, prosesspauser, og fencing tokens mot «zombie»-ledere.
- **Eksamensbelegg:** Sjanger B1/B6, nivå 1 `(verifiser)` (DDIA kap. 8, «the trouble with distributed systems»). Forutsetning for all konsistens/konsensus.
- **Begrepskontrakt:** `definition` (DDIA kap. 8): **delvis feil (*partial failure*)** (*nabo:* total feil i ett-node-systemer), **upålitelig nettverk / timeout**, **synkront vs. asynkront/delvis synkront nettverk**, **tid-av-dag-klokke vs. monoton klokke**, **klokkeskjevhet (*clock skew*)**, **prosesspause (GC-stopp)**, **fencing token** (monotont økende, mot forsinket zombie-leder), **byzantinsk feil** (*nabo:* fail-stop). `theorem` **fencing-kontrakt**: en lås/leiekontrakt må gi et monotont token som lagringstjenesten avviser hvis lavere → hindrer at en pauset gammel leder skriver.
- **Avveiingsakser:** hvor mye systemet må anta (synkroni-antakelser) vs. robusthet; timeout-terskel (rask feildeteksjon vs. falske positive).
- **Case-forslag (nyskrevet):** «En node fryser i en GC-pause, mister lederskapet, men våkner og prøver å skrive. Hvordan hindrer et fencing token skaden?»
- **Typiske feil:** Tolke timeout som sikker krasj; bruke tid-av-dag-klokke til å ordne hendelser (klokkeskjevhet); anta byzantinske feil der fail-stop holder (eller motsatt).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.2: Lineariserbarhet og CAP

- **id:** `tdt4225-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-7-1` · **kapitteltype:** teori
- **description:** Lineariserbarhet (recency-garantien: systemet ser ut som én kopi i sanntidsrekkefølge), hva den koster, og CAP-teoremet lest riktig (ved partisjon: konsistens *eller* tilgjengelighet).
- **Eksamensbelegg:** Sjanger B3/B1, nivå 1 `(verifiser)`. Den absolutte topp-begrepsfellen (lineariserbar vs. serialiserbar); CAP-feillesing er en fast trekkfelle.
- **Begrepskontrakt:** `definition` (DDIA kap. 9): **lineariserbarhet (*linearizability*)** (recency på ett objekt, sanntidsrekkefølge — *kritisk nabo:* serialiserbarhet fra kap. 6), **CAP-teoremet** (ved nettverkspartisjon: velg C *eller* A), **CP- vs. AP-system**, **PACELC** (også ved *ingen* partisjon: latens vs. konsistens), **kostnad ved lineariserbarhet** (koordinering/latens). `theorem` **lineariserbarhet-kontrakt**: når én lesning ser en ny verdi, må alle senere lesninger også se den (eller nyere) — som om det fantes én eneste kopi.
- **Avveiingsakser:** lineariserbarhet (enkel å resonnere om) vs. tilgjengelighet under partisjon + latens ellers; når trenger du den (låser, unikhet, lederskap) og når holder svakere.
- **Case-forslag (nyskrevet):** «Forklar hvorfor et system kan være serialiserbart uten å være lineariserbart, og motsatt. Hvilket krav stiller en distribuert lås?»
- **Typiske feil:** Blande lineariserbarhet (ett objekt, recency) og serialiserbarhet (transaksjoner); lese CAP som «velg to av tre»; tro CAP handler om latens (det gjør PACELC).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 7.3: Kausalitet, rekkefølge og total order broadcast

- **id:** `tdt4225-7-3` · **number:** 7.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-7-2` · **kapitteltype:** teori
- **description:** Kausal konsistens (den sterkeste garantien som overlever partisjoner), «hendte-før»-relasjonen, logiske klokker/sekvensnumre, og total order broadcast som bro til konsensus.
- **Eksamensbelegg:** Sjanger B1/B3, nivå 1 `(verifiser)`. Kausal vs. eventual vs. lineariserbar er en projisert begrepsdrøfting; total order broadcast kobler til 7.4.
- **Begrepskontrakt:** `definition` (DDIA kap. 9): **kausal konsistens (*causal consistency*)** (*nabo:* eventual (svakere) og lineariserbar (sterkere))**, hendte-før-relasjon (*happens-before*)**, **samtidige (*concurrent*) operasjoner**, **Lamport-tidsstempel / logisk klokke**, **sekvensnummer-ordning**, **total order broadcast (atomic broadcast)**. `theorem` **kausalitet-kontrakt**: kausalt relaterte operasjoner må sees i samme rekkefølge av alle; samtidige kan sees i vilkårlig rekkefølge. Total order broadcast = alle noder leverer *samme* meldinger i *samme* rekkefølge — ekvivalent med konsensus.
- **Avveiingsakser:** kausal konsistens (tilgjengelig under partisjon, billigere enn lineariserbar) vs. lineariserbar (sterkere, men krever koordinering); det svakeste nivået som fanger «årsak før virkning».
- **Case-forslag (nyskrevet):** «Et svar dukker opp før spørsmålet det svarer på. Hvilken konsistensgaranti mangler? Vis hvordan sekvensnumre/kausal ordning fikser det.»
- **Typiske feil:** Tro kausal konsistens = lineariserbarhet; blande samtidige og kausalt relaterte operasjoner; tro at total order broadcast er «gratis» (det er like sterkt som konsensus).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 7.4: Konsensus og atomær commit — 2PC vs. Raft/Paxos

- **id:** `tdt4225-7-4` · **number:** 7.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4225-7-3` · **kapitteltype:** teori
- **description:** Atomær commit over noder (tofase-commit, 2PC) og hvorfor koordinatoren blokkerer, kontra feiltolerant konsensus (Raft/Paxos) som løser lederbytte, medlemskap og lås/lederskap.
- **Eksamensbelegg:** Sjanger B6, nivå 1 `(verifiser)`. «Hvorfor blokkerer 2PC / hva løser Raft» er projisert kjernesjanger; forankres i ZooKeeper/etcd.
- **Begrepskontrakt:** `definition` (DDIA kap. 9): **tofase-commit (*two-phase commit*, 2PC)** (koordinator + prepare/commit — *nabo:* konsensus), **koordinator som enkeltpunktsfeil / in-doubt-blokkering**, **konsensus (*consensus*)** (enighet, integritet, gyldighet, terminering), **total order broadcast ↔ konsensus**, **Paxos / Raft / Zab**, **epoke/term + kvorum-avstemning**, **lederskap via konsensus (ZooKeeper/etcd)**, **medlemskaps-/koordinasjonstjeneste**. `theorem` **2PC-blokkerings-kontrakt**: hvis koordinatoren faller etter «prepare», henger deltakerne (kan verken committe eller avbryte) — 2PC er *ikke* feiltolerant. **Raft/Paxos-kontrakt**: en verdi velges når et *kvorum* stemmer i en term; ny leder velges av kvorum → tåler minoritetsfeil uten å blokkere.
- **Avveiingsakser:** **trade-off-tabell** (2PC vs. konsensus × [feiltoleranse, blokkering, ytelse/latens, bruksområde]).
- **Case-forslag (nyskrevet):** «Forklar hvorfor 2PC henger hvis koordinatoren dør etter prepare, og hvordan et Raft-basert system velger ny leder og fortsetter.»
- **Typiske feil:** Tro 2PC gir høy tilgjengelighet; blande atomær commit (2PC) og konsensus (Raft); tro at konsensus fungerer uten kvorum/majoritet; overse at lineariserbar lås krever konsensus.
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 7.5: DRILL — Konsistensklassifisering og konsensus-ræsonnement

- **id:** `tdt4225-7-5` · **number:** 7.5 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4225-7-4` · **kapitteltype:** drill
- **description:** Full drill: klassifiser konsistensgarantien (eventual/kausal/lineariserbar), avgjør lineariserbar/serialiserbar, les CAP-avveiingen for et systemvalg, og ræsonner om 2PC vs. konsensus.
- **Eksamensbelegg:** Sjanger B3/B6/B1, nivå 1 `(verifiser)`.
- **Innholdskontrakt (løsningsoppskrift):** 1) identifiser hva som garanteres (recency? kausal ordning? kun eventual?); 2) plassér på konsistensspekteret; 3) avgjør lineariserbar/serialiserbar med presis begrunnelse (nabo-kontrast); 4) les CAP for valget (hva ofres ved partisjon); 5) ved koordinering: 2PC eller konsensus, og hvorfor. Gjennomskrevet eksamenscase med margnotater om hvor begrepspresisjonen gir uttelling.
- **Case-forslag:** 8–10 nyskrevne scenarier/historier (minst to som skiller lineariserbar fra serialiserbar, minst ett kausal-vs-eventual, minst ett 2PC-blokkering), hver med momentliste-løsning.
- **Typiske feil:** Hele konsistens-fellekatalogen — lineariserbar/serialiserbar-forveksling, «eventual = ingen garantier», CAP «to av tre», «2PC er tilgjengelig».
- **Quiz: 20 · Flashcards: 14**

**Prøve-kvote Del 7:** 4 prøver (feil, konsistens og konsensus)
1. Prøve 7.A (25 min): Feilmodeller + fencing tokens + klokker (B1).
2. Prøve 7.B (30 min): Lineariserbarhet vs. serialiserbarhet + CAP riktig lest (B3).
3. Prøve 7.C (25 min): Kausal vs. eventual vs. lineariserbar + total order broadcast (B3).
4. Prøve 7.D (30 min): 2PC-blokkering vs. Raft/Paxos-konsensus (B6).

---

### Del 8 — Batch- og strømprosessering *(DDIA kap. 10–11 · nivå 3)*

> Avledede datasystemer: batch (MapReduce/Spark) og strøm (Kafka/CDC). Nivå 3
> (kjenne til) på skriftlig, men prosjektnært og en projisert skisse-/forklar-sjanger.

#### Kapittel 8.1: Batch-prosessering — MapReduce og dataflytmotorer

- **id:** `tdt4225-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-1-2` · **kapitteltype:** teori
- **description:** MapReduce-modellen (map → shuffle → reduce), distribuerte joins, og hvorfor dataflytmotorer (Spark) med DAG-er og minne-caching avløste ren MapReduce.
- **Eksamensbelegg:** Sjanger B8, nivå 3 `(verifiser)`. «Skisser en MapReduce-jobb» er projisert; forankres i Hadoop/Spark.
- **Begrepskontrakt:** `definition` (DDIA kap. 10): **batch-prosessering** (*nabo:* strøm), **MapReduce** (map/shuffle/reduce), **mapper/reducer**, **shuffle**, **reduce-side vs. map-side join**, **dataflytmotor (Spark/Flink/Tez)**, **rettet asyklisk graf (DAG)**, **materialisering av mellomtilstand vs. pipelining**. `theorem` **MapReduce-kontrakt**: mappere sender (nøkkel, verdi)-par; rammeverket grupperer per nøkkel (shuffle); reducere aggregerer per nøkkel — determinisme + partisjonering gir parallellisme.
- **Avveiingsakser:** MapReduce (robust, materialiserer hvert steg til disk) vs. dataflytmotor (raskere via minne/pipelining, mindre feiltolerant per steg).
- **Case-forslag (nyskrevet):** «Skisser en MapReduce-jobb som teller unike besøkende per nettside per dag: hva sender mapperen, hva gjør shuffle, hva gjør reduceren?»
- **Typiske feil:** Blande reduce-side og map-side join; glemme shuffle-steget; tro at Spark er «MapReduce, bare raskere» uten å forklare DAG/minne.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 8.2: Strømprosessering — event-logger, Kafka og CDC

- **id:** `tdt4225-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4225-8-1` · **kapitteltype:** teori
- **description:** Strømmer som uendelige hendelseslogger, meldingsmeglere (loggbasert som Kafka vs. tradisjonell kø), endringsdatafangst (CDC), event sourcing og vindusoperasjoner.
- **Eksamensbelegg:** Sjanger B8, nivå 3 `(verifiser)`. Prosjektnær (Kafka); «batch vs. strøm»-drøfting.
- **Begrepskontrakt:** `definition` (DDIA kap. 11): **hendelse (*event*) / hendelseslogg**, **strømprosessering** (*nabo:* batch), **meldingsmegler**: **loggbasert (Kafka — replaybar, partisjonert)** vs. **tradisjonell kø (AMQP/JMS — sletter ved ack)**, **endringsdatafangst (*change data capture*, CDC)**, **event sourcing**, **strøm–tabell-dualitet**, **vindusoperasjoner (tumbling/hopping/sliding)**, **hendelsestid vs. prosesseringstid**. `theorem` **loggbasert-megler-kontrakt**: en partisjonert, append-only logg gir ordnet, replaybar levering per partisjon — konsumenter sporer offset uavhengig.
- **Avveiingsakser:** loggbasert (replay, flere uavhengige konsumenter, ordning per partisjon) vs. tradisjonell kø (lastbalansering per melding, men ikke replaybar); hendelsestid (korrekt, men krever håndtering av sene hendelser) vs. prosesseringstid.
- **Case-forslag (nyskrevet):** «Et varslingssystem må kunne kjøre samme hendelsesstrøm på nytt etter en feilrettet konsument. Hvorfor passer en loggbasert megler (Kafka) bedre enn en tradisjonell kø?»
- **Typiske feil:** Blande loggbasert megler og tradisjonell kø; blande hendelsestid og prosesseringstid; tro CDC og event sourcing er det samme.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 8.3: Batch vs. strøm — arkitektur og exactly-once

- **id:** `tdt4225-8-3` · **number:** 8.3 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4225-8-2` · **kapitteltype:** teori
- **description:** Sammenligningen batch vs. strøm, lambda- og kappa-arkitektur, og leveringsgarantier (minst-én-gang, høyst-én-gang, nøyaktig-én-gang via idempotens).
- **Eksamensbelegg:** Sjanger B8/B1, nivå 3 `(verifiser)`. Kort «bør kjenne til»-kapittel; leveringsgarantiene er begrepsflashcards.
- **Begrepskontrakt:** `definition` (DDIA kap. 11): **lambda-arkitektur vs. kappa-arkitektur**, **minst-én-gang / høyst-én-gang / nøyaktig-én-gang (*exactly-once*)**, **idempotens**, **mikro-batching**, **tilstandsgjenoppretting (checkpointing)**. Kontrast batch (avgrenset, gjentakbart) vs. strøm (uavgrenset, kontinuerlig).
- **Avveiingsakser:** lambda (batch + strøm parallelt — robust, men dobbel kode) vs. kappa (kun strøm, replaybar logg — enklere); exactly-once via idempotens/atomisk offset-commit vs. ytelse.
- **Case-forslag (nyskrevet):** «Forklar hvordan idempotente operasjoner + offset-commit gir 'nøyaktig-én-gang'-effekt selv om leveringen er 'minst-én-gang'.»
- **Typiske feil:** Tro «exactly-once» betyr at hver melding leveres nøyaktig én gang (det er *effekten* som er én-gang, via idempotens); blande lambda og kappa.
- **Quiz: 14 · Flashcards: 16**

**Prøve-kvote Del 8:** 4 prøver (batch- og strømprosessering)
1. Prøve 8.A (25 min): Skisser en MapReduce-jobb + shuffle (B8).
2. Prøve 8.B (25 min): Reduce-side vs. map-side join + Spark-DAG (B8).
3. Prøve 8.C (25 min): Loggbasert megler vs. kø + CDC (B8).
4. Prøve 8.D (25 min): Batch vs. strøm + exactly-once/idempotens (B1).

---

### Del 9 — Dimensjonering og I/O-regning *(regnemodul — arkivets overlevende styrke · nivå 2)*

> Den kvantitative modulen, lånt fra DNA-regnefag. Arkivets ene tradisjon som trolig
> lever videre: regn ut lagerbehov/gjennomstrømning, identifiser flaskehalsen, og
> **presiser forutsetningene**. Regneprosedyrene står som `theorem`-blokker. Alt
> knyttes til DDIA-mekanismene (replikeringsfaktor, kvorum-tåleevne, partisjonsjevnhet).
> Kap. 9.3 er regnedrillen.

#### Kapittel 9.1: Lagerbehov og kapasitetsregning

- **id:** `tdt4225-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-0-2` · **kapitteltype:** teori/regnemodul
- **description:** Å regne ut lagerbehov for et distribuert datasett: rådatavolum, replikeringsfaktor, indeks-/metadata-påslag og komprimering — med eksplisitte forutsetninger og identifisering av det dominerende leddet.
- **Eksamensbelegg:** Sjanger A/B5, nivå 2 `(verifiser)`. Den arkivbelagte regnekulturen (lagerbehov GB/år) tilpasset distribuert kontekst.
- **Begrepskontrakt:** `definition`: **rådatavolum**, **replikeringsfaktor ($R$)**, **indeks-/metadata-påslag**, **komprimeringsforhold**, **effektivt lagerbehov**, **fyllingsgrad**. `theorem` **lagerbehov-prosedyre** (arkiv-mal): (1) skriv forutsetninger (poststørrelse $s$, antall poster $N$, replikeringsfaktor $R$, komprimering $c$, påslag $p$); (2) uttrykk: $\text{Lager} = \dfrac{N \cdot s \cdot (1+p) \cdot R}{c}$; (3) regn; (4) **identifiser dominerende ledd** (er det rådata, replikaene eller indeksene som dominerer?); (5) rimelighetssjekk. **«Presiser forutsetningene»-note:** flere begrunnede antakelser (f.eks. $R=3$ eller $R=2$) gir full uttelling så lenge de er oppgitt og konsistent brukt.
- **Case-forslag (nyskrevet):** «Et loggsystem tar imot 40 000 hendelser/s à ~500 B, lagres i 90 dager med replikeringsfaktor 3 og 4× komprimering. Regn effektivt lagerbehov og pek på det dominerende leddet. Oppgi dine forutsetninger.» (nyskrevne tall)
- **Typiske feil:** Glemme replikeringsfaktoren (undervurderer med faktor $R$); ikke oppgi forutsetninger; forveksle rå- og effektivt volum; feil enhet (GB/TB/s vs. /dag).
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 9.2: Gjennomstrømning, flaskehals og haleforsinkelser

- **id:** `tdt4225-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4225-9-1` · **kapitteltype:** teori/regnemodul
- **description:** Å regne gjennomstrømning (skriv/les per sekund, båndbredde), finne flaskehalsen (disk vs. nettverk vs. CPU vs. koordinering), og forstå haleforsinkelser (percentiler, p99) i stedet for gjennomsnitt.
- **Eksamensbelegg:** Sjanger A/B5, nivå 2 `(verifiser)`. Arkivets gjennomstrømnings-/flaskehalsregning + DDIA kap. 1 (percentiler).
- **Begrepskontrakt:** `definition`: **gjennomstrømning (*throughput*)**, **båndbredde**, **flaskehals (*bottleneck*)**, **dominerende ledd**, **latens vs. responstid**, **percentil / p50 / p99 / p999**, **haleforsinkelse (*tail latency*)**, **haleforsterkning (*tail amplification*)** (én treg node forsinker en spredt forespørsel). `theorem` **flaskehals-prosedyre** (arkiv-mal): (1) skriv forutsetninger (rate, meldingsstørrelse, disk-/nettverksbåndbredde, replikeringsfaktor); (2) regn kravet per ressurs (disk MB/s, nettverk MB/s, CPU); (3) **flaskehalsen = ressursen med minst margin**; (4) sjekk om replikering/kvorum multipliserer nettverkslasten; (5) rimelighet. **«Identifiser flaskehalsen»-note:** pek eksplisitt på hva som begrenser (arkivets faste sensorkrav) — og hvorfor.
- **Case-forslag (nyskrevet):** «En tjeneste skriver 20 000 meldinger/s à 2 KB med replikeringsfaktor 3. Diskene tåler 200 MB/s, nettverkskortet 1 GB/s. Hva er flaskehalsen? Vis regningen og oppgi forutsetninger.» (nyskrevne tall)
- **Typiske feil:** Regne gjennomsnitt der halen (p99) er det som teller; glemme at replikering multipliserer nettverkslast med $R$; peke på feil flaskehals; blande latens og gjennomstrømning.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 9.3: Kvorum-, replikerings- og partisjoneringsmatematikk + DRILL

- **id:** `tdt4225-9-3` · **number:** 9.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4225-9-2` · **kapitteltype:** drill/regnemodul
- **description:** Kvantitativt om DDIA-mekanismene: kvorumbetingelsen og tåleevne ($w+r>n$; hvor mange nodefeil tåles), replikeringens tilgjengelighetsregning, og partisjonsjevnhet/skjevfordeling — som samlet regnedrill.
- **Eksamensbelegg:** Sjanger B5/A, nivå 2 `(verifiser)`. Kobler regnekulturen direkte til replikering (Del 4) og partisjonering (Del 5).
- **Begrepskontrakt:** `definition`: **kvorumbetingelse $w+r>n$**, **skrive-/lesetåleevne** ($n-w$ / $n-r$ nodefeil), **tilgjengelighet vs. konsistens ved valg av $(w,r)$**, **partisjonsjevnhet**, **skjevfordelingsfaktor (hot partisjon)**, **belastning per partisjon**. `theorem` **kvorum-tåleevne-prosedyre**: gitt $n$ og et konsistenskrav, velg $(w,r)$ med $w+r>n$; skriving tåler $n-w$ samtidige nodefeil, lesing $n-r$; for lineariserbar-lignende overlapp kreves i tillegg synkron lesereparasjon. `theorem` **partisjonsbelastning-prosedyre**: forventet belastning per partisjon $=$ total rate $/$ antall partisjoner; en hot nøkkel gir skjevfordeling → identifiser flaskehals-partisjonen.
- **Case-forslag:** 8–10 nyskrevne regne-/ræsonneringsoppgaver av stigende kompleksitet (kvorum-tåleevne for ulike $(n,w,r)$; lagerbehov med replikering + partisjonering; flaskehals under kvorumlesing; skjevfordeling), hver med momentliste-løsning + forutsetningsledd. Minst tre som integrerer Del 4/5.
- **Typiske feil:** Feil tåleevne ($n-w$, ikke $n-r$ for skriving); tro $w+r>n$ gir lineariserbarhet (kvantitativ variant av begrepsfellen); glemme replikeringsfaktor i lager-/nettverksregning; ikke identifisere hot partisjon.
- **Quiz: 20 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (dimensjonering og I/O-regning)
1. Prøve 9.A (30 min): Lagerbehov med replikering/komprimering + dominerende ledd (A).
2. Prøve 9.B (30 min): Gjennomstrømning + flaskehalsidentifikasjon (A).
3. Prøve 9.C (30 min): Kvorum-tåleevne for ulike $(n,w,r)$ (B5).
4. Prøve 9.D (30 min): Integrert dimensjonering (replikering + partisjonering + skjevfordeling) (A/B5).

---

### Del 10 — Eksamenstrening

> Tre komplette øvingseksamener under tidspress (90 min hver), som til sammen speiler
> den projiserte 3-timers skriftlige eksamenen: forklar-og-drøft-tung DDIA-bredde +
> avveiingsdrøfting + dimensjonering. Løsningsforslag i `collapsible` per oppgave på
> **to nivåer** (topp-besvarelse + kommentert middels-besvarelse med gapet forklart) +
> `tip` om momentliste/vekting. Alt nyskrevet. **Merk `(verifiser)`:** miksen er
> projisert fra DDIA-kanon, ikke fra reelle Bratsberg-sett — juster når ferske sett
> foreligger.

#### Kapittel 10.1: Øvingseksamen 1 — bred forklar-og-drøft-eksamen

- **id:** `tdt4225-10-1` · **number:** 10.1 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4225-9-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett bredt sett som speiler den projiserte eksamenens hovedform: definer presist + sammenlign strategier + navngi avveiingen, over hele DDIA-bredden.
- **Eksamensbelegg/miks (projisert `(verifiser)`):** 2–3 forklar-og-drøft (B1: replikeringsmodus, isolasjonsnivå, konsensus) + 1–2 sammenlign-strategier (B2: LSM vs. B-tre, single vs. leaderless) + 1 anomali-/konsistensklassifisering (B3) + 1 encoding/evolusjon (B7) + 1 kvantitativt innslag (A/B5). Løsningsforslag på to nivåer med moment-`tip` (hvor navngivingen av kostnaden gir uttelling).
- **Innholdskontrakt:** Dekker sjanger A, B1, B2, B3, B7 — bredden.
- **Typiske feil:** Deskripsjon uten avveiing; upresis begrepsbruk; hoppe over det kvantitative innslaget.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 10.2: Øvingseksamen 2 — tyngdepunkt replikering/partisjonering + transaksjoner/konsistens

- **id:** `tdt4225-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4225-10-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de fire nivå-1-temaene: en replikerings-/partisjoneringsdesign + en transaksjons-/konsistensklassifisering + konsensus-ræsonnement.
- **Eksamensbelegg/miks (projisert `(verifiser)`):** 1 replikerings-/partisjoneringsdesign (B4: velg strategi, nøkkel, konfliktløsning, ruting) + 1 anomali-/isolasjonsklassifisering (B3) + 1 lineariserbar-vs-serialiserbar + CAP (B3) + 1 2PC-vs-Raft-ræsonnement (B6) + 1 kvorum-tåleevne (B5). Løsningsforslag på to nivåer med moment-`tip` (særlig begrepskontrastene og designbegrunnelsen).
- **Innholdskontrakt:** Dekker sjanger B3, B4, B5, B6 — de fire tyngdepunktene.
- **Typiske feil:** Lineariserbar/serialiserbar-forveksling; design uten forutsetninger/kostnad; «2PC er tilgjengelig»; feil kvorum-tåleevne.
- **Quiz: 16 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 3 — dimensjonerings- og avveiingstungt sett

- **id:** `tdt4225-10-3` · **number:** 10.3 · **estimatedMinutes:** 90 · **prerequisites:** `tdt4225-10-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett som vekter regnekulturen og de rene avveiingsdrøftingene tyngst — arkivets overlevende styrke integrert med DDIA-mekanismene.
- **Eksamensbelegg/miks (projisert `(verifiser)`):** 2 dimensjoneringsoppgaver (A: lagerbehov + flaskehals med replikering/kvorum, «presiser forutsetningene») + 1 kvorum-/skjevfordelingsregning (B5) + 2 avveiingsdrøftinger (B2: LSM vs. B-tre, kausal vs. lineariserbar konsistens) + 1 batch-/strømskisse (B8). Løsningsforslag på to nivåer med moment-`tip` (der forutsetninger + flaskehals-identifikasjon + betinget anbefaling gir uttelling).
- **Innholdskontrakt:** Dekker sjanger A, B2, B5, B8 — regnemodulen + avveiingsdrøfting. De tre settene dekker samlet hele katalogen A–B9 flere ganger.
- **Typiske feil:** Bart tallsvar uten forutsetninger/flaskehals; ubetinget anbefaling; glemme replikeringsfaktor i regning.
- **Quiz: 16 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 14+14 = **28** | 18+16 = **34** |
| 1 | 1.1–1.3 | 18+16+16 = **50** | 24+18+20 = **62** |
| 2 | 2.1–2.3 | 18+16+16 = **50** | 24+22+22 = **68** |
| 3 | 3.1–3.2 | 16+16 = **32** | 22+20 = **42** |
| 4 | 4.1–4.5 | 18+18+16+18+20 = **90** | 24+22+22+26+12 = **106** |
| 5 | 5.1–5.3 | 18+16+20 = **54** | 24+22+16 = **62** |
| 6 | 6.1–6.4 | 16+18+18+20 = **72** | 22+24+24+14 = **84** |
| 7 | 7.1–7.5 | 16+18+16+18+20 = **88** | 22+24+22+26+14 = **108** |
| 8 | 8.1–8.3 | 16+16+14 = **46** | 22+22+16 = **60** |
| 9 | 9.1–9.3 | 16+16+20 = **52** | 18+18+16 = **52** |
| 10 | 10.1–10.3 | 16+16+16 = **48** | 0+0+0 = **0** |
| **Sum** | **36 kap.** | **610 ≥ 500 ✓** | **678 (i 650–800) ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
**Flashcards sikter høyt (678) fordi faget er ekstremt begrepsrikt** — DDIA er en
begrepskatedral: replikeringsmodi (single-/multi-leader/leaderless, kvorum,
lesereparasjon, anti-entropi), konsistensmodeller (eventual/kausal/lineariserbar,
CAP/PACELC), isolasjonsnivåer + anomalier (dirty read/write, lost update, write skew,
phantom), konsensustermer (2PC, Raft/Paxos, total order broadcast, fencing token),
encoding-formater og lagringsstrukturer er alle presise, kontrastpar-baserte begreper
som må sitte. Tetteste flashcard-kapitler er derfor kvorum/leaderless (4.4: 26),
konsensus (7.4: 26), datamodeller (1.1: 24), LSM/lagring (2.1: 24) og
isolasjon/anomalier (6.2/6.3: 24). Quiz vektes mot forklar-og-drøft-maskineriet
(begrepskontrast, klassifisering, «hvilken strategi/konsistens», kvorumregning); de
fem drillkapitlene (4.5, 5.3, 6.4, 7.5, 9.3) bærer mest quiz (20). Regnemodulen
(Del 9) har relativt lavere flashcard-tetthet (regneprosedyrer er `theorem`, ikke
`definition`) men høy quiz. Øvingseksamenene (10.1–10.3) gir 0 flashcards (rene
oppgavesett) men bidrar med quiz. Fordelingen speiler nivåene i §7: de fire nivå-1-
tyngdepunktene (Del 4 replikering, Del 5 partisjonering, Del 6 transaksjoner, Del 7
konsistens/konsensus) bærer klart mest.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9 → 36 prøver)

Hver prøve er nyskrevne oppgaver i eksamens (projiserte) sjangre, med kort
løsningsforslag/momentliste og poengfordeling. Prøvekapitler bygges som
`tdt4225-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som
egne exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i
sluttblokken til hver del over (Del 1–9). Del 0 og Del 10 får ikke egne prøver
(Del 10 **er** øvingseksamenene). **Alle prøver merker `(verifiser)`** i den grad
sjangermiksen er projisert fra DDIA-kanon.

### Øvingseksamener (3 komplette sett — se kap. 10.1–10.3)

| Sett | Mal den speiler (projisert `(verifiser)`) | Miks |
|---|---|---|
| Øvingseksamen 1 (10.1) | Typisk forklar-og-drøft-eksamen | Bred DDIA: definer + sammenlign + avveiing over replikering, isolasjon, konsensus, encoding + ett kvantitativt innslag. |
| Øvingseksamen 2 (10.2) | Tyngdepunkt-sett | De fire nivå-1-temaene: replikerings-/partisjoneringsdesign + anomali-/konsistensklassifisering + 2PC-vs-Raft + kvorum. |
| Øvingseksamen 3 (10.3) | Regne- og avveiingstungt sett | Dimensjonering (lagerbehov/flaskehals/«presiser forutsetningene») + kvorumregning + rene avveiingsdrøftinger + batch/strøm-skisse. |

Til sammen dekker de tre settene hele sjangerkatalogen A–B9 flere ganger; sett 3
isolerer regnemodulen (Del 9) slik den arkivbelagte regnekulturen faktisk trolig
testes.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut (og det kritiske arkiv-forbeholdet)** — den todelte
   vurderingen (60 % skriftlig 3 t + 40 % to prosjekter), DDIA-aksen, at arkivet
   (2009–2012) er et *foreldet annet fag* og at alt emnefaglig belegg er projisert
   `(verifiser)`, at skriftlig-formatet er uverifisert, og anbefalingen om å skaffe
   ferske Bratsberg-sett (fra kap. 0.1).
2. **Prioriteringskartet** — nivå 1/2/3 (§7): **nivå 1** (replikering Del 4,
   partisjonering Del 5, transaksjoner Del 6, konsistens/konsensus Del 7), **nivå 2**
   (lagring Del 2, encoding Del 3, regnemodul Del 9), **nivå 3** (datamodeller Del 1,
   batch/strøm Del 8).
3. **Eksamenshåndverket** — de to malene fra kap. 0.2: avveiingsdrøfting-malen (definer
   → aksene → navngi kostnaden → betinget anbefaling) og regnedisiplin-malen (skriv
   forutsetningene → formel → regn → identifiser flaskehalsen → rimelighet).
4. **Sjangerguiden** — de ti oppgavetypene A–B9 med løsningsoppskriftene fra
   drillkapitlene (4.5, 5.3, 6.4, 7.5, 9.3) i kortform.
5. **Begrepskontrastene som skiller topp fra midt** — de ni sensorfellene:
   lineariserbarhet vs. serialiserbarhet; eventual ≠ ingen garantier; CAP riktig lest;
   2PC blokkerer (Raft løser); kvorum ≠ lineariserbarhet; replikering vs.
   partisjonering; snapshot isolation stopper ikke write skew; LSM vs. B-tre;
   flaskehals-identifikasjon.
6. **Feilkatalogen** — de typiske feilene (§5 i analysen: både arkivets regnefeller og
   DDIA-klassikerne) samlet, hver med henvisning til kapitlet som forebygger den.
7. **Notasjons- og formelark** — kvorumbetingelsen $w+r>n$ og tåleevne, lagerbehov-
   og gjennomstrømningsformlene, isolasjonshierarkiet, konsistensspekteret
   (eventual → kausal → lineariserbar), ACID, MapReduce-kontrakten — puggeark.
8. **Studieløp** — anbefalt progresjon: Del 1–3 (én-node-fundament: datamodeller →
   lagring → encoding) → **de fire tyngdepunktene** Del 4 (replikering) → Del 5
   (partisjonering) → Del 6 (transaksjoner) → Del 7 (feil/konsistens/konsensus) →
   Del 8 (batch/strøm, lettere) → **Del 9 regnemodulen** → prøvene underveis → de tre
   øvingseksamenene (10.1–10.3) de siste ukene under tidspress (90 min). Prosjektsporet
   løper parallelt gjennom hele semesteret (40 %).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4225` med alle 36 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen
   (obligatorisk). **`number` er del-basert** («7.4», ALDRI lineær «28» — jf.
   JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 7.4»).
2. **Del 0** (kap. 0.1–0.2) — etablerer arkiv-forbeholdet, DDIA-aksen, sjangernavnene
   A–B9, de to håndverksmalene (avveiingsdrøfting + regnedisiplin) og prosjektsporet
   resten refererer til.
3. **Én-node-fundamentet i avhengighetsrekkefølge**: Del 1 (datamodeller) → Del 2
   (lagring/indeksering; krever datamodeller) → Del 3 (encoding).
4. **De fire distribusjons-tyngdepunktene**: Del 4 (replikering) → Del 5
   (partisjonering; komplementær til replikering) → Del 6 (transaksjoner) → Del 7
   (feil/konsistens/konsensus; krever replikering + transaksjonsgrunnlaget).
5. **Avledede data**: Del 8 (batch/strøm).
6. **Regnemodulen** Del 9 — gjenbruker replikeringsfaktor (Del 4), kvorum (4.4) og
   partisjonsbelastning (Del 5); bygg etter at de er på plass.
7. **Del 10** (øvingseksamenene) til slutt — gjenbruker alle sjangre; 10.1 bred, 10.2
   tyngdepunkt, 10.3 regne-/avveiingstung.
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (escape `"` i norske sitattegn og systemnavn; `\\` for LaTeX-kommandoer);
  `npm run build` grønn.
- [ ] **Arkiv-forbeholdet eksplisitt**: Del 0 (0.1) sier klart at arkivet (2009–2012,
  Bratbergsengen «Lagring og behandling») er et *foreldet annet fag*, at dagens fag er
  DDIA/distribuerte systemer (Bratsberg), og at alt emnefaglig eksamensbelegg er
  **projisert `(verifiser)`**. Anbefalingen om ferske Bratsberg-sett står i Del 0 og
  studieguiden.
- [ ] **`(verifiser)`-merking**: hvert temakapittels Eksamensvinkel og hver prøve-/
  øvingseksamen-miks merker at sjanger/vekt er projisert, ikke arkivbelagt (unntak:
  regnemodulens A-sjanger, som er arkivbelagt tradisjon — merk *den* som «overlevende
  arkivstyrke»).
- [ ] **Avveiingsdrøfting-malen brukt**: hvert temakapittel har minst én trade-off-
  tabell + en drøftingsmal (definer → aksene → navngi kostnaden → betinget anbefaling),
  jf. 0.2. Drøftende `example` på eksamensnivå i hvert temakapittel.
- [ ] **Begrepskontrakter med nabo-kontrast**: hver `definition` oppgir presis
  definisjon + DDIA-kapittel/system + nærmeste nabo den kontrasteres mot (særlig de ni
  sensorfelle-parene).
- [ ] **De ni sensorfellene eksplisitt** (`warning`): (1) lineariserbarhet vs.
  serialiserbarhet (7.2/7.5); (2) eventual ≠ ingen garantier (4.2/7.3); (3) CAP riktig
  lest (7.2); (4) 2PC blokkerer / Raft løser (7.4); (5) kvorum ≠ lineariserbarhet
  (4.4/9.3); (6) replikering vs. partisjonering (5.1); (7) snapshot isolation stopper
  ikke write skew (6.2/6.3); (8) LSM vs. B-tre-attribuering (2.1/2.2); (9) flaskehals-
  identifikasjon (Del 9).
- [ ] **Regnemodulen (Del 9) som `theorem`-prosedyrer**: lagerbehov-, flaskehals- og
  kvorum-tåleevne-prosedyrene står som `theorem`-blokker med formel + «presiser
  forutsetningene»-ledd + «identifiser dominerende ledd/flaskehals»-note; alle
  talleksempler nyskrevne.
- [ ] **Symbol-/notasjonsliste per delkapittel**: hvert delkapittel som bruker
  symboler/formler ($w$, $r$, $n$, $R$, $s$, $N$, percentiler, kvorumbetingelsen) har
  `collapsible` «Symbol- og formelliste» rett etter Forkunnskaper (per delkapittel,
  ikke arv fra tidligere).
- [ ] **Diagram «i ord»**: topologier (single-/multi-leader), partisjoneringskart,
  konsensus-lederbytte og MapReduce-dataflyt beskrives i strukturert prosa (+ valgfri
  ASCII i `collapsible`).
- [ ] **Prosjektspor-note**: Del 0 (0.2) og de prosjektnære kapitlene (1.1, 2.3, 5.1,
  8.2) har en kort `tip` «Prosjektspor» som knytter teorien til de to gruppeprosjektene
  (40 %) uten å bli programmeringstutorial.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med nivå/vekt fra
  dette skjelettet), Typiske feil-`warning`, 1–3 eksempler (siste på eksamensnivå,
  drøftende), 5–8 øvinger (blanding begreps-/drøfte-/regne, med momentliste-`solution`
  + `hints`), Pensumkart-`collapsible` (DDIA-kapittel → begreper); drillkapitler har
  løsningsoppskrift + gjennomskrevet case + 6–10 oppgaver på eksamensnivå.
- [ ] **Quiz-sum ≥ 610 og flashcard-sum ≥ 678** per kvotetabellen (§5); quiz kalibrert
  som forklar-og-drøft-/klassifiserings-/regnekontroll, `options[0]` = riktig svar;
  flashcards kalibrert som begrep ↔ presis definisjon/regel med nabo-kontrast.
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener (kap. 10.1–10.3);
  øvingseksamenene har løsningsforslag på to nivåer (topp + kommentert middels).
- [ ] **Opphavsrett**: ALLE scenarier, arbeidslast-case, tallverdier og
  dimensjoneringseksempler nyskrevne — egne kontekster/tall/navn; begrepsnavn,
  kvorumformelen $w+r>n$ og standard fagnotasjon er allmenn faglig kunnskap, men ingen
  oppgavetekster/fasiter fra reelle sett gjengis; Kleppmann (DDIA) refereres
  (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + innhold), jf. lærdommen om `getChapterMeta`.
