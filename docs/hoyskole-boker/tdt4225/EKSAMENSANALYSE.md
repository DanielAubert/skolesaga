# Eksamensanalyse: TDT4225 Store, distribuerte datamengder (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag.
>
> **⚠️ Kritisk forbehold om evidensgrunnlaget — les dette først.** Analysen bygger på et **lite og foreldet arkiv**: kun **3 eksamenssett (2009, 2011, kontinuasjon 2012)**, alle med tilhørende løsningsforslag. **Alle tre stammer fra en tidligere versjon av emnet** — den gang het faget «TDT4225 Lagring og behandling av store datamengder», og faglærer var **Kjell Bratbergsengen** (kvalitetssikrer Svein-Olaf Hvasshovd). Emnet er siden **fundamentalt bygget om**. Dagens TDT4225 (verifisert på NTNUs emneside juli 2026) heter «Store, distribuerte datamengder», har **Svein Erik Bratsberg** som emneansvarlig, og er et **distribuerte-systemer-fag** bygget rundt Martin Kleppmanns *Designing Data-Intensive Applications* (DDIA). **Arkivets pensum og dagens pensum overlapper bare delvis.** Konsekvensen for læreboka drøftes eksplisitt i punkt 1 og 7. Temafrekvenstallene under (punkt 2) beskriver **det gamle faget** og må ikke leses som en prognose for dagens eksamen. Der jeg projiserer dagens eksamen, er grunnlaget fagbeskrivelsen + DDIA-kanon, ikke arkivet — og det er tydelig merket.

---

## 1. Eksamensform og utvikling

### To ulike emner under samme emnekode

Dette er den viktigste innsikten i hele analysen. Emnekoden TDT4225 dekker **to nesten usammenlignbare fag**:

| | **Arkivet (2009–2012)** | **Dagens emne (2020-tallet →)** |
|---|---|---|
| **Tittel** | Lagring og behandling av store datamengder | Store, distribuerte datamengder |
| **Faglærer** | Kjell Bratbergsengen | Svein Erik Bratsberg |
| **Pensum** | Bratbergsengens kompendium i fysisk fillagring / algoritmer | Kleppmann, *Designing Data-Intensive Applications* (DDIA) |
| **Kjerne** | Fysisk lagring på én maskin: disk, indeksstrukturer, I/O-volum for relasjonsalgebra, sortering | **Distribuerte** systemer: replikering, partisjonering, konsistens, konsensus, transaksjoner, encoding |
| **Vurdering** | 100 % skriftlig eksamen (4 t; 3 t i 2009), kode D | **60 % skriftlig (3 t) + 40 % to gruppeprosjekter** (20 % + 20 %) |
| **Format** | Frisvar: forklar + regn + design | Ukjent i detalj, men skriftlig 3-timers slutteksamen |

Med andre ord: **arkivet tester et fag som knapt finnes i dagens emne.** k-d-trær, gridfiler, R-trær, signatur-akselerert relasjonsalgebra, reservoarsortering og flettevolum — kjernen i arkivet — er **ikke** DDIA-stoff. Motsatt: replikering, partisjonering/sharding, CAP/konsistensmodeller, konsensus (Paxos/Raft), MapReduce/Spark, encoding/serialisering og distribuerte transaksjoner — kjernen i dagens emne — finnes **ikke** i arkivet.

**Delvis overlapp finnes** (og er lærebokas bro mellom de to): lagrings- og indekseringsmetoder (DDIA kap. 3: B-trær, LSM-trær, hash-indekser), datamodeller/spørrespråk (DDIA kap. 2), og systemdimensjonering (kapasitets- og gjennomstrømningsregning). Arkivets kvantitative regnekultur — «regn ut I/O-volum / lagerbehov / gjennomstrømning og begrunn forutsetningene» — er trolig den ene tingen som **overlever** kulturelt inn i dagens fag, fordi den er faglærermiljøets signatur.

### Arkivets eksamensform (2009–2012)

- **Kode D** (ingen trykte/håndskrevne hjelpemidler; bestemt, enkel kalkulator). Studenten måtte kunne alt utenat.
- **4 timer** (unntak: 2009 var 3 timer, eksplisitt merket som avvik).
- **Ren frisvarseksamen** — ingen flervalg, ingen auto-retting. 4–6 store oppgaver, hver 10–30 % vekt, delt i deloppgaver a–e.
- **Tre gjennomgående oppgavetyper i hvert sett:** (a) «forklar oppbyggingen av X» (rein teori), (b) «regn ut / konstruer» (kvantitativ, med kalkulator), (c) «hvordan vil du organisere / utføre …» (design med begrunnelse, ofte pseudokode).
- **Kvalitetssikring dokumentert:** løsningsforslagene sier flere ganger «alle alternativer gir full uttelling» og «se lærebok» — sensor forventet metode og begrunnelse, ikke ett fasitsvar.

### Dagens eksamensform (projisert fra fagbeskrivelse)

- **60 % skriftlig eksamen, 3 timer**, bokstavkarakter A–F. **40 % to programmeringsprosjekter** (obligatoriske øvinger i tillegg).
- Formatdetaljer (flervalg vs. frisvar) er **ikke verifisert** — arkivet gir ingen veiledning her, siden ingen sett fra Bratsberg-regimet finnes i arkivet. DDIA-baserte NTNU-emner tester erfaringsmessig **forklar-og-drøft** tungt (definer konsistensmodell, forklar hvorfor X, sammenlign to replikeringsstrategier), ofte med noen kvantitative/ræsonnerende innslag. Bygg læreboka for dette til det motsatte er bevist.

---

## 2. Temafrekvens

### ⚠️ Denne tabellen beskriver det GAMLE faget (n = 3, 2009–2012)

Med bare tre sett er «frekvens» nesten anekdotisk — jeg oppgir antall sett (av 3) der temaet forekom, ikke en prosentprognose. Tallene dokumenterer **hva Bratbergsengen-faget testet**, som historisk kontekst og som kilde til den kvantitative regnekulturen. De er **ikke** en prognose for dagens eksamen (se punkt 7 for dét).

| Tema (gammelt fag) | 2009 | 2011 | 2012k | Sett (av 3) |
|---|:---:|:---:|:---:|:---:|
| **Relasjonsalgebra-utførelse** (differanse/snitt/divisjon, I/O-volum, signaturer) | ✓ | ✓ | ✓ | **3/3** |
| **Systemdimensjonering** (lagerbehov, gjennomstrømning, flaskehals, kapasitet) | ✓ | ✓ | ✓ | **3/3** |
| **Sortering** (reservoarmetode/replacement selection, flettetre, dummy-delfiler, flettevolum) | – | ✓ | ✓ | 2/3 |
| **Flerdimensjonale lagringsstrukturer** (k-d-tre, gridfil, R-tre, kvadsplitt) | ✓ | ✓ | – | 2/3 |
| **Hashing / randomisert lagring** (hashformel, overløp, blokkfaktor, fyllingsgrad) | ✓ | – | ✓ | 2/3 |
| **Blokk- og postorganisering** (adm. data, variabel postlengde, gj.snittlengde) | – | (✓)¹ | ✓ | 2/3 |
| **Matrise-/rasterlagring med I/O-optimalisering** (submatriser, voksler, blokkstørrelse) | – | ✓ | ✓ | 2/3 |
| **Spørreoptimalisering** (algebra-tre, skyv seleksjon ned, tell trær) | – | ✓ | – | 1/3 |
| **Maskinvare / diskkontroller** | ✓ | – | – | 1/3 |

¹ 2011 tester postorganisering implisitt via matrise-/submatriselagring.

**Funn fra det gamle faget:**

1. **To garanterte tyngdepunkt:** relasjonsalgebra-utførelse med I/O-volum (3/3) og en stor systemdimensjoneringsoppgave (3/3) var ryggraden i hvert sett. Signaturer (hash av nøkkel, 2–4 byte, til å luke ut poster tidlig) gikk igjen i algebra-oppgavene.
2. **Regnekulturen er signaturen:** hver eksamen hadde minst én tung kvantitativ oppgave der man skulle regne ut lagerbehov (GB), gjennomstrømning (MB/s), I/O-volum eller blokkstørrelse — **og eksplisitt oppgi forutsetningene**. Svarene i fasit er alltid «vis hvordan du kommer fram» + «presiser forutsetningene».
3. **Gjenbruk:** reservoarsortering + dummy-delfiler i flettetre er nesten identisk i 2011 og 2012k (bare andre tall). Relasjonsalgebra-oppgaven roterte mellom differanse (2009), snitt (2011) og divisjon (2012k).

### Projisert temafrekvens for DAGENS emne (grunnlag: fagbeskrivelse + DDIA, IKKE arkivet)

Siden ingen eksamenssett fra dagens emne finnes, er dette en **kvalifisert projeksjon** fra emnebeskrivelsens temaliste og DDIA-strukturen — ikke målt frekvens. Rangert etter forventet sentralitet:

| Tema (dagens fag) | DDIA-kap. | Forventet vekt |
|---|---|---|
| **Replikering** (single-leader, multi-leader, leaderless; quorum) | 5 | Svært høy |
| **Partisjonering / sharding** (nøkkelrekkevidde vs. hash; rebalansering; ruting) | 6 | Svært høy |
| **Konsistens & konsensus** (lineariserbarhet, CAP, eventual consistency, kausalitet, Paxos/Raft, 2PC) | 9 | Svært høy |
| **Transaksjoner** (ACID, isolasjonsnivåer, write skew, serialiserbarhet, SSI) | 7 | Høy |
| **Lagring & indeksering** (LSM-trær vs. B-trær, OLTP vs. OLAP) — *bro til arkivet* | 3 | Høy |
| **Encoding & evolusjon** (Avro/Protobuf/Thrift, skjemaevolusjon, RPC) | 4 | Middels–høy |
| **Batch-prosessering** (MapReduce, dataflyt-motorer, Spark) | 10 | Middels–høy |
| **Stream-prosessering** (event logs, change data capture, vindusoperasjoner) | 11 | Middels |
| **Feilmodeller & «trouble»** (delvise feil, upålitelige klokker, byzantinske feil) | 8 | Middels |
| **Datamodeller & spørrespråk** (relasjonell vs. dokument vs. graf) — *bro til arkivet* | 2 | Middels |
| **Pålitelighet/skalerbarhet/vedlikeholdbarhet** (grunnbegreper, percentiler) | 1 | Lav–middels (rammeverk) |

---

## 3. Oppgavetype-katalog

Sjangrene deles i **A. arkivbelagte** (dokumentert i 2009–2012, gammelt fag) og **B. projiserte for dagens fag** (fra DDIA-kanon, ikke arkivbelagt). Skillet er viktig for lærebokas troverdighet.

### A. Arkivbelagte sjangre (gammelt fag — bruk med varsomhet)

**A1. «Forklar oppbyggingen av X.»** Rein strukturforklaring av en lagringsstruktur (k-d-tre, gridfil, R-tre, signatur). Fasit forventer: hva slags tre/fil, hvordan noder/blokker splittes, hvilken dimensjon det deles på, hva strukturen egner seg til. Kort og presist; ofte 5–10 %.

**A2. Konstruksjon av lagringsstruktur.** Sett en gitt sekvens verdier inn i et k-d-tre / en gridfil / et R-tre; vis treet/blokkene **før og etter hver split**. Faste regler i fasit: k-d-tre roterer delekoordinat per nivå; gridfil deler på midtverdien (median ved oddetall, gjennomsnitt av de to midterste ved liketall) og nye delelinjer blir globale; R-tre kvadsplitt velger de to omhyllingsrektanglene med størst samlet areal som kimer, og legger resten til den kimen som utvides minst.

**A3. Systemdimensjonering / kapasitetsregning.** Den tyngste enkeltoppgaven (20–30 %). Gitt et scenario (bomstasjonssystem, videoserver, seismikk-kube, folkeregister): regn ut lagerbehov (GB/år), gjennomstrømning (MB/s), flaskehals (buss vs. disk), eller optimal blokkstørrelse. Fasit-krav: **vis utregningen og presiser forutsetningene**; identifiser den dominerende kostnaden; velg fornuftige datastrukturer og begrunn. Ofte flere likeverdige løsninger («alle alternativer gir full uttelling»).

**A4. Relasjonsalgebra-utførelse med I/O-volum.** Forklar en operasjon (differanse/snitt/divisjon), beskriv utførelse med gjentatte gjennomløp av arbeidslager (WS/reservoar M), og **utled et uttrykk for totalt transportvolum V**. Deretter: forklar signaturer (hash av nøkkel) og hvordan de reduserer volumet, og regn konkret I/O-volum. Fasit bruker formler som V = V_A + 2·V_B + … og resonnerer om hvilken operand som skal ligge i arbeidslager (den minste nøkkelen).

**A5. Sortering (initiell + fletting).** Kjør reservoarmetoden (replacement selection) på en tallsekvens og skriv ut alle delfilene (gjennomsnittlig delfillengde ≈ 2M). Beregn antall dummy-delfiler for optimalt flettetre med formelen **N + x − y(p−1) = 1**, og regn samlet flettevolum (hver passering = 1 lesing + 1 skriving).

**A6. Blokk- og postorganisering.** Beskriv administrative data i en blokk (sekvensnummer først+sist, sjekksum, før-/etterkopipeker), organiser variabel-lengde-poster (faste felt fremst, variable i halen med pekere), og regn gjennomsnittlig postlengde fra en felttabell med forekomstandeler.

**A7. Matrise-/raster-I/O-optimalisering.** Lagre store matriser/3D-kuber som submatriser/blokker; skisser blokkert matrisemultiplikasjon; regn I/O-volum som funksjon av arbeidslagerstørrelse (LRU-resonnement); deriver tidsforbruket for å finne optimal blokkstørrelse.

**A8. Spørreoptimalisering.** Tell mulige algebra-trær for en join (operandsekvenser × operatortrær), tegn algebra-treet for et SQL-uttrykk, og omskriv det ved å **skyve seleksjoner ned mot basetabellene** og overføre seleksjoner via likhetsforeninger.

### B. Projiserte sjangre for dagens fag (DDIA — ikke arkivbelagt, men høyst sannsynlig)

**B1. Forklar-og-drøft en distribuert mekanisme.** F.eks. «forklar single-leader vs. leaderless replikering og når du velger hva», «hva er lesereparasjon og anti-entropi», «forklar quorum-betingelsen w + r > n». Definisjon + avveiing + eksempel.

**B2. Konsistens/konsensus-ræsonnement.** Klassifiser en anomali (dirty read, write skew, lost update, phantom); avgjør om en historie er lineariserbar/serialiserbar; forklar CAP-avveiingen for et gitt systemvalg; skisser hvorfor 2PC blokkerer og hvordan konsensus (Raft/Paxos) løser lederveg.

**B3. Partisjonerings-/replikeringsdesign.** Gitt et arbeidslast-scenario: velg partisjoneringsnøkkel (rekkevidde vs. hash), håndter «hot spots», beskriv rebalansering og forespørselsruting. Dette er den moderne arvtakeren til arkivets A3-systemdesign.

**B4. Encoding/evolusjon.** Sammenlign Avro/Protobuf/Thrift/JSON; forklar forover-/bakoverkompatibilitet ved skjemaendring.

**B5. Batch/stream-ræsonnement.** Skisser en MapReduce-jobb (map → shuffle → reduce) for et gitt problem; forklar forskjellen på batch og stream, event-logg og change data capture.

---

## 4. Sensorens krav

### Fra arkivet (dokumentert)

1. **«Presiser forutsetningene.»** Den hyppigst gjentatte instruksen i systemdimensjonering. Rimelige, oppgitte antagelser legges til grunn selv om tallene avviker.
2. **«Vis hvordan du kommer fram til resultatet.»** Metoden og utregningen teller — et bart tallsvar er svakt. I/O-volum skal utledes som formel, ikke gjettes.
3. **Flere løsninger godtas.** Løsningsforslagene sier eksplisitt «alle alternativer vil hver for seg gi full uttelling» (matrise-I/O, 2011) og «se lærebok» — sensor belønner et konsistent, begrunnet valg, ikke ett fasitsvar.
4. **Identifiser det dominerende leddet.** I dimensjonering forventes det at man peker på hva som dominerer (passeringsdata >> kunde-/brikkedata; bussen er flaskehalsen, ikke disken).

### For dagens fag (projisert)

Bratsberg/DDIA-tradisjonen belønner erfaringsmessig **presis begrepsbruk** (skille lineariserbarhet fra serialiserbarhet; eventual fra kausal konsistens), **avveiingsdrøfting** (ingen distribuert designvalg er gratis — nevn kostnaden), og **korrekt ræsonnement om feilmodeller** (hva skjer ved nettverkspartisjon / nodekrasj). Prosjektene (40 %) tester praktisk implementasjon (typisk MySQL/MongoDB/lignende + dataanalyse), som ikke fanges av skriftlig eksamen.

---

## 5. Typiske feil

### Fra arkivet

1. **Glemme å presisere forutsetninger** i dimensjoneringsoppgaver — trekker selv om tallet er riktig.
2. **Feil operand i arbeidslager** ved relasjonsalgebra — den **minste** operandens nøkler skal ligge i WS; legger man hele poster (ikke bare nøkler/signaturer) inn, eksploderer I/O-volumet.
3. **Feil avrundingsretning / fyllingsgrad** i blokkregning (poster per blokk = ⌊·⌋, antall blokker = ⌈·⌉).
4. **Feil delekonvensjon** i k-d-tre/gridfil/R-tre (glemme at delekoordinaten roterer; feil kime i kvadsplitt).
5. **Feil flettetre-formel** — dummy-delfiler beregnes fra N + x − y(p−1) = 1, ikke gjettes.
6. **Ikke identifisere flaskehalsen** (regne disk når bussen begrenser, eller motsatt).

### For dagens fag (projisert, DDIA-klassikere)

7. **Blande sammen lineariserbarhet og serialiserbarhet** (den ene er om recency på ett objekt, den andre om transaksjons-isolasjon).
8. **Tro at «eventual consistency» = ingen garantier** (glemme kausal/lese-dine-egne-skrivinger).
9. **Feillese CAP** som «velg to av tre» i stedet for «ved partisjon: velg C eller A».
10. **Anta at 2PC gir høy tilgjengelighet** (koordinatoren er et enkeltpunktsfeil; den blokkerer).

---

## 6. Notasjons- og begrepsapparat

### Arkivet (gammelt fag)
Fysisk lagring: blokk/diskblokk, blokkstørrelse, blokkfaktor, fyllingsgrad, arbeidslager (WS/reservoar, størrelse M), transportvolum/I/O-volum V (målt i lest+skrevet volum). Strukturer: k-d-tre, gridfil (n-dimensjonal pekertabell + skilleverdivektorer, globale delelinjer), R-tre (omhyllingsrektangler, kvadsplitt), hashfil (progressivt/lenket overløp, signatur = 2–4 byte hash av nøkkel). Relasjonsalgebra: differanse (−), snitt (∩), divisjon (/), utført med gjentatte gjennomløp. Sortering: reservoarmetode/replacement selection, delfil, flettegrad p, dummy-delfiler (N + x − y(p−1) = 1). Optimalisering: algebra-tre, seleksjon skjøvet mot basetabell.

### Dagens fag (DDIA-kanon)
Replikering: single-/multi-leader, leaderless, quorum (w + r > n), lesereparasjon, anti-entropi, replikeringslag. Partisjonering: nøkkelrekkevidde vs. hashpartisjonering, hot spots, rebalansering, forespørselsruting, sekundærindekser (lokal/global). Transaksjoner: ACID, isolasjonsnivåer (read committed, snapshot isolation/repeatable read, serializable), anomalier (dirty read/write, lost update, write skew, phantom), SSI, 2PL. Konsistens/konsensus: lineariserbarhet, serialiserbarhet, kausal konsistens, eventual consistency, CAP/PACELC, total order broadcast, 2PC, Paxos/Raft, leder-valg. Encoding: Thrift/Protobuf/Avro, skjemaevolusjon (forover/bakover-kompatibilitet), RPC. Batch/stream: MapReduce (map/shuffle/reduce), dataflyt-motorer (Spark/Flink), event log, change data capture, vindusoperasjoner. Feil: delvise feil, upålitelige nettverk/klokker, fencing tokens, byzantinske feil.

---

## 7. Prognose og prioritering

### Den strategiske avgjørelsen for læreboka

**Bygg læreboka for DAGENS emne (DDIA / distribuerte systemer), ikke for arkivet.** Arkivet dokumenterer et nedlagt pensum. En lærebok som pugger k-d-trær og signatur-algebra vil bomme på dagens eksamen. Bruk arkivet til **to** ting: (1) den kvantitative regnekulturen (dimensjonering, I/O-ræsonnement, «presiser forutsetningene») som trolig lever videre, og (2) det delvis overlappende lagrings-/indekseringsstoffet (DDIA kap. 3) og datamodell-stoffet (kap. 2), der arkivets B-tre-/hash-/blokkregning fortsatt er relevant.

### Nivå 1 — kjerne i dagens emne (bygg tyngst)
1. **Replikering** (DDIA 5): single-/multi-leader/leaderless, quorum, replikeringsforsinkelse og lesegarantier.
2. **Partisjonering/sharding** (DDIA 6): nøkkelvalg, hot spots, rebalansering, ruting — arvtakeren til arkivets systemdesign.
3. **Konsistens & konsensus** (DDIA 9): lineariserbarhet, CAP, kausalitet, total order broadcast, 2PC vs. Raft/Paxos.
4. **Transaksjoner** (DDIA 7): isolasjonsnivåer, anomalier, serialiserbarhet, SSI.

### Nivå 2 — bør beherskes godt
5. **Lagring & indeksering** (DDIA 3) — *her gjenbrukes arkivets B-tre-/hash-/blokkregning*.
6. **Encoding & evolusjon** (DDIA 4).
7. **Feilmodeller / «the trouble with distributed systems»** (DDIA 8): klokker, delvise feil, fencing.

### Nivå 3 — kjenne til
8. **Batch-prosessering** (DDIA 10): MapReduce/Spark.
9. **Stream-prosessering** (DDIA 11).
10. **Datamodeller & spørrespråk** (DDIA 2) — *arkivets relasjonsalgebra/optimalisering hører hjemme her som bakgrunn*.
11. **Grunnbegreper** (DDIA 1): pålitelighet/skalerbarhet/vedlikeholdbarhet, haleforsinkelser/percentiler.

### Konkret prognose for neste skriftlige eksamen (3 t, 60 %)
Forvent en **forklar-og-drøft-tung** eksamen over DDIA-bredden: definisjoner + avveiinger + noen ræsonnerende/kvantitative innslag (quorum-betingelser, konsistensklassifisering, partisjoneringsdesign for et scenario). De to garanterte tyngdepunktene er **replikering + partisjonering** og **transaksjoner + konsistens/konsensus**. Regnekulturen fra arkivet dukker trolig opp som kapasitets-/gjennomstrømnings-/skjevfordelingsræsonnement, ikke som k-d-tre-konstruksjon. **NB:** formatet (flervalg vs. frisvar) er uverifisert — anskaff et ferskt Bratsberg-sett før læreboka finpusses.

### Anbefalt lærebok-arketype

**«DDIA-følgesvenn med kvantitativ regnetrening» — konsept-drevet, ikke oppgavesett-drevet.**

Fordi arkivet ikke representerer dagens fag, kan man **ikke** bruke den oppgavereproduserende arketypen (som TDT4145). I stedet:

- **Struktur = DDIA-kapitlene** (del I Foundations: datamodeller, lagring, encoding; del II Distributed Data: replikering, partisjonering, transaksjoner, feil, konsistens/konsensus; del III Derived Data: batch/stream). Hvert kapittel: teori → konkret system-eksempel (PostgreSQL/Cassandra/Kafka/…) → avveiingsdrøfting → øvingsoppgaver.
- **Innbakt kvantitativ modul** som gjenbruker arkivets styrke: dimensjonering, I/O-/gjennomstrømningsregning, blokk-/indeksregning, quorum-matematikk — med «presiser forutsetningene»-disiplinen fra Bratbergsengen-fasitene.
- **Prosjektbro:** siden 40 % er programmeringsprosjekter, bør boka ha praktiske spor (datamodellering + spørring mot en distribuert/NoSQL-database, dataanalyse) som speiler prosjektarbeidet.
- **Ærlig kildemerking:** de tre gamle settene brukes som historiske eksempler på lagrings-/indekseringsstoff og regnekultur, ikke som eksamensfasit.

Dette matcher minimumskravene (≥500 quiz, ≥500 flashcards, ≥4 prøver per tema, dekkende studieguide) mot DDIA-temaene, ikke mot det foreldede arkivet.

---

## 8. Kildeliste

**Eksamensarkiv (lest grundig — alle tre med løsningsforslag):** `~/Desktop/Eksamner/NTNU/TDT4225/`
- `TDT4225 Eksamen 2009 (med løsning)` — 3 t, kode D, faglærer Kjell Bratbergsengen. Diskkontroller; k-d-tre + gridfil; relasjonsalgebra differanse + signaturer; bomstasjonssystem-dimensjonering.
- `TDT4225 Eksamen 2011 (med løsning)` — 4 t, kode D. Videoserver-kapasitet; R-tre + kvadsplitt; reservoarsortering + flettevolum; matrise-multiplikasjon-I/O; relasjonsalgebra snitt + signaturer; algebra-tre-optimalisering.
- `TDT4225 Eksamen kontinuasjon 2012 (med løsning)` — 4 t, kode D. Randomisert lagring (hashformel folkeregister); blokk-/postorganisering; reservoarsortering; seismikk-3D-voksellagring + I/O-optimalisering; relasjonsalgebra divisjon.

**Fagbeskrivelse:** `~/Desktop/fagbeskrivelser-samlet 2.md` (avsnitt TDT4225) + NTNUs emneside <https://www.ntnu.no/studier/emner/TDT4225> (verifisert juli 2026: emneansvarlig Svein Erik Bratsberg; 60 % skriftlig 3 t + 40 % to gruppeprosjekter; DDIA-tema).

**Forbilder for dokumentstruktur:** `docs/hoyskole-boker/tdt4145/EKSAMENSANALYSE.md` og `docs/hoyskole-boker/tdt4300/EKSAMENSANALYSE.md`.

**Evidensstyrke — eksplisitt vurdering:**
- **Lavt–moderat, og ikke representativt for dagens emne.** Kun 3 sett, alle 14–17 år gamle, alle fra en **nedlagt versjon** av faget (annen faglærer, annet pensum, annet innhold). Temafrekvensene i punkt 2 (gammelt fag) er robuste for det de beskriver, men **irrelevante som prognose** for dagens DDIA-baserte eksamen.
- **Anbefaling:** skaff **minst 2–3 ferske eksamenssett fra Bratsberg-regimet** (og gjerne prosjektbeskrivelsene) før læreboka ferdigstilles. Dagens prognose (punkt 7) hviler på fagbeskrivelse + DDIA-kanon, ikke på arkivert eksamensevidens, og bør revideres når ekte moderne sett foreligger.

**Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett.
