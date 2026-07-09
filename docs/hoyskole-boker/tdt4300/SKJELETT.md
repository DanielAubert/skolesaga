# Bokskjelett: TDT4300 Datavarehus og datagruvedrift — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (**3 unike NTNU-sett med offisielle løsningsskisser**: ordinær
> vår 2015, ordinær vår 2016 og kontinuasjon august 2016; faglærer i hele
> arkivperioden **Kjetil Nørvåg**, Institutt for datateknologi og informatikk).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori / drill /
> øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her. **All notasjon og
> alle algoritmenavn følger pensumtradisjonen Han/Kamber/Pei** (*Data Mining: Concepts
> and Techniques* — datavarehus, OLAP, kuboider, konsepthierarki-lattice; bekreftet av
> en referanse i V2015-skissen til «Han kap. 4, figur 4.10») **og Tan/Steinbach/Kumar**
> (*Introduction to Data Mining* — Gini/GAINsplit, DBSCAN, hierarkisk single-link,
> Apriori `Fk-1×Fk-1`, FP-growth, ECLAT). Det er bokstandard fordi oppgavene og skissene
> bruker den. Alle transaksjonstabeller, punktmengder, treningsdata, stjerneskjema-case,
> bit-vektorer og tallverdier i den ferdige boka skal være **nyskrevne** (opphavsrett):
> algoritmenavn, standardnotasjon og faglige definisjoner er allmenn faglig notasjon,
> men **ingen oppgavetekster eller løsningsskisser fra reelle sett gjengis**.
>
> **Ærlig arkivforbehold (skal stå i Del 0):** Arkivet er **lite** — kun 3 sett fra to
> nabo-årganger (2015–2016), alle med **samme faglærer**. Temafrekvensen (`x/3`) er en
> **indikasjon**, ikke robust statistikk, og materialet er **10+ år gammelt**. 2027-
> oppsettingen kan ha ny faglærer og forskjøvet vekt. Boka dekker derfor **hele
> emnebeskrivelsens pensum** (også **naive Bayes, k-NN og lift**, som nevnes i
> emnebeskrivelsen men ikke ble regnet i arkivet), med arkivets **fem søyler** som
> verifisert kjerne. Usikre detaljer er markert `(verifiser)`.
>
> **Forholdet til TDT4145:** TDT4300 har **TDT4145 Datamodellering og databasesystemer**
> (eller tilsvarende) som forkunnskapskrav — men **oppgavetypene overlapper nesten
> ikke**. TDT4145 dekker OLTP-databaser (ER-modellering, SQL, normalisering, indekser,
> transaksjoner, recovery); TDT4300 dekker **analytiske databaser (datavarehus/OLAP) og
> datagruvedrift (mining)**. Den eneste broen er relasjonsmodellen og
> stjerneskjema-tegning (som gjenbruker ER-/skjemategneferdigheten). Denne boka
> **resirkulerer ikke TDT4145-stoff** — den bygger varehus- og mining-apparatet fra
> grunnen. Der forkunnskap trengs, forklares den kort i boka selv; kryssbok-lenker til
> TDT4145 legges **kun inn når TDT4145-boka er live** (per nå er den bare skjelett — se
> «Byggerekkefølge» §8).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4300` |
| Tittel | **TDT4300 Datavarehus og datagruvedrift (NTNU)** |
| Institusjon | **NTNU** (Institutt for datateknologi og informatikk; deles med tdt4145/tdt4171 når de bygges) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt fag med faste, gjentakende «kjør/tegn metoden for hånd»-mønstre + presise puggedefinisjoner) |
| Antall kapitler | **32** (2 eksamenskart/håndverk + 26 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 340 min ≈ 39 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **554** (krav ≥500) |
| Flashcards totalt | **570** (krav ≥500) |
| Prøver | **20** (4 per temadel 1–5) + **3 øvingseksamener** (kap. 6.2–6.4) |

**Pitch (én avsnitt):** TDT4300 har et **påfallende stabilt** eksamensskjelett. Vurderingen
er én **firetimers skriftlig skoleeksamen** (100 %, A–F) med **hjelpemiddelkode D —
bestemt, enkel kalkulator**, ingen trykte eller håndskrevne hjelpemidler, i Inspera.
**Obligatoriske øvinger** må være godkjent for å gå opp. Undervisningen er på **engelsk**;
forkunnskap er TDT4145 eller tilsvarende. Statusverifisert 2026-07-08: faget er **AKTIVT**,
neste oppsetting **vår 2027**. Hvert eneste arkivsett dekker **fem garanterte søyler** —
(1) **datavarehus/OLAP**, (2) **dataforbehandling & likhet**, (3) **assosiasjonsregler**,
(4) **klassifisering**, (5) **klynging** — så **bredden er selve eksamensformen**: du kan
ikke droppe et helt tema. Anslagsvis **60–70 % av vekten er regn/konstruer** (Jaccard,
Gini-split, Apriori-støtte, dendrogram, FP-tre, DBSCAN, join-indeks, stjerneskjema) og
**30–40 % er forklar/teori**. Studenten regner for hånd/kalkulator og **tegner** — så
definisjoner, algoritme-steg og formler (Gini, Jaccard, støtte/konfidens) må sitte i hodet
uten oppslag. To **bankere** kommer garantert hvert år: **Jaccard-koeffisient på
bit-vektorer** (3/3, den sikreste enkeltoppgaven) og en **Apriori-oppgave** (3/3). Denne
boka driller derfor bredden systematisk, med to kalibrerte ferdigheter: (1) å **kjøre
pensumalgoritmene mekanisk feilfritt for hånd**, og (2) å **alltid vise regnestykket** —
sensuren er metode- og begrunnelsesorientert («andre svar godtas med god grunngiving»),
men **trekker der noe mangler som forklarer tallet**. Bankerne (Jaccard, Apriori) får eget
drilspor.

**Kritisk stilregel (gjelder HELE boka) — «vis regnestykket»:**
1. **Metode over svar.** Alle tre løsningsskissene i arkivet åpner med samme forbehold:
   *«ikkje fullstendige løysingar … kun skisse med viktige element … det kan vere andre
   svar enn dei som er gjeve om ein har god grunngjeving.»* Sensuren er **metode- og
   begrunnelsesorientert**, ikke fasit-mekanisk — men **et gjettet tall uten synlig
   metode trekker** («poengtrekk der det manglar noko som forklarar talet»). Hvert
   regnende løsningsforslag i boka viser derfor apparatet: for **Jaccard** hvilke bit-par
   som telles (`M11`/`M01`/`M10`) før brøken; for **Gini** foreldrenoden og hver
   barne-Gini før GAINsplit; for **Apriori-støtte** hvert kandidatsteg med støttetall; for
   **konfidens** teller/nevner symbolsk før tall.
2. **Presis lærebokterminologi.** Der skissene skriver «Sjå læreboka» forventes den
   **presise definisjonen** ordrett fra pensum (subject-oriented/integrated/time-variant/
   nonvolatile; Core/Border/Noise; conditional pattern base). Fordi eksamen er kode D er
   dette **puggemateriale** — flashcards og quiz kalibreres som ren gjenkalling.
3. **Oppgi forutsetninger ved modellering.** Ved stjerneskjema er case-beskrivelsen
   **bevisst upresis** — «det er en del av oppgaven å velge ut det som skal med». Hvert
   modelleringskapittel lærer å skrive en kort **«Forutsetninger»-linje** før løsningen.
4. **Beslektede korrekte svar godtas.** Ulik FP-tre-sortering ved likt støttetall, grafisk
   vs. tabellarisk klyngeløsning, og «ja/nei» på uke-i-hierarki med fornuftig begrunnelse
   godtas — men **vis hovedmetoden**. Fasiten belønner delvis; list-oppgaver gis
   proporsjonalt.
5. **Aggregerbare fakta-mål er den gjennomgående modelleringsregelen.** I stjerneskjema
   *må* fakta-attributtet «gje meining ved aggregering» (sum/antall/gjennomsnitt) — dette
   er det oftest gjentatte modelleringskravet i skissene.
6. **`options[0]` = riktig svar** i quiz (runtime stokker).

**De sju dokumenterte fellene (drillmål + egne `warning`-blokker — fra analysen §5):**
Disse er sensorveiledningenes eksplisitte eller implisitte trekk-grunner. Hver får en
`warning`-blokk i sitt kapittel og gjentas i eksamenstreningen (Del 6):
- **F1 — Jaccard som symmetrisk (SMC).** Bit-vektor-Jaccard er **asymmetrisk**:
  `J = M11/(M11+M01+M10)`. Å ta med `M00` (0-0-treff, altså SMC) er feil. Sentral i kap. 2.2/2.4.
- **F2 — Gini uten foreldrenoden.** GAINsplit krever `GINI(parent)`-leddet:
  `GAINsplit = GINI(parent) − Σ_i (n_i/n)·GINI(i)`. Glemmer man foreldrenoden blir gain feil
  (eksplisitt sensor-advarsel: *«Viktig å ha med GAIN inkl. p(j|Parent)»*). Sentral i kap. 4.2/4.3.
- **F3 — Drill-down på materialisert kuboid er UMULIG.** Kun **roll-up** (videre
  aggregering) er mulig fra en aggregert kuboid; du kan aggregere `city → province`, men
  ikke bryte ned. En kuboid låst til `år = 2004` kan ikke svare for `år = 2006`. Sentral i kap. 1.5/1.6.
- **F4 — Join-indeks levert som join-RESULTAT gir 0 poeng.** Join-indeksen er en **tabell
  med (dimensjonsnøkkel, faktatuppel-ID)-par**, ikke den ferdig sammenslåtte tabellen. Å
  levere join-resultatet viser at begrepet er misforstått → **null**. Sentral i kap. 1.5/1.6.
- **F5 — Fakta-mål i dimensjonstabell / ikke-aggregerbart fakta / manglende dimensjon.** I
  stjerneskjema hører numeriske aggregerbare mål i **faktatabellen**, ikke i en
  dimensjonstabell; en manglende dimensjonstabell (typisk lokasjon) eller en manglende
  sentral måldimensjon trekker. Sentral i kap. 1.2/1.3.
- **F6 — DBSCAN uten Core/Border/Noise-klassifisering.** Man må **klassifisere hvert punkt**
  (kjerne/grense/støy ut fra antall punkter innen `Eps`, inkludert punktet selv) FØR man
  peker ut klyngen. Å hoppe rett til klyngen trekker. Sentral i kap. 5.3/5.5.
- **F7 — Apriori uten pruning.** Kandidater med et ikke-frekvent delsett skal **prunes
  umiddelbart** (markeres, f.eks. `ACG*`), ikke telles. Sentral i kap. 3.2/3.6.

Tilleggsfeller (også egne `warning`-blokker der de hører hjemme): **F8** slå sammen mer enn
to klynger av gangen i hierarkisk agglomerativ klynging (5.2); **F9** konfidens forvekslet
med støtte — konfidens er `støtte(regel)/støtte(venstreside)`, ikke `støtte(regel)/N` (3.1/3.3);
**F10** «uke» plassert lineært i tidshierarkiet — uke krysser månedsgrenser og krever et
**gitter (lattice)** (1.4); **F11** stikkordsvar på teorispørsmål («asymmetrisk attributt =
handlekurv» uten forklaring gir lite — bruk et reelt eksempel).

**Avvik fra DNA/README-malen (dokumentert):**
- **«Symbol- og formelliste» → «Notasjons-, formel- og algoritmeliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For dette faget er det presise
  apparatet både **formler OG algoritme-prosedyrer**. Blokken heter derfor
  **«Notasjons-, formel- og algoritmeliste»** og lister ALT delkapitlet bruker: (i)
  **formler** (`J = M11/(M11+M01+M10)`, Manhattan `Σ|xi−yi|`, `GINI(t)=1−Σ_j [p(j|t)]²`,
  `GAINsplit`, `s(X)=antall(X)/N`, `c(X→Y)=s(X∪Y)/s(X)`, `lift=c(X→Y)/s(Y)`); (ii) **hver
  algoritme kapitlet kjører**, med inn/ut-kontrakt i én linje (f.eks. «Apriori — inn:
  transaksjoner + min. støtte; ut: alle frekvente elementsett; tell → behold frekvente →
  `Fk-1×Fk-1` → prune → gjenta»); (iii) **modellnotasjon** (faktatabell, dimensjonstabell,
  kuboid-gitter, `Eps`/`MinPts`, `M11`/`M01`/`M10`/`M00`). Regelen «per delkapittel, ikke
  arv» beholdes; unntak kun for helt formelfrie kapitler (f.eks. rene datavarehus-teori-
  avsnitt).
- **`theorem`-blokker brukes for algoritme-prosedyrer OG nøkkelresultater.** Der DNA-en
  bruker `theorem` for matematiske resultater, brukes den her for (a) **algoritme-
  prosedyrer** som skal sitte i ryggmargen (Apriori med pruning, FP-growth med conditional
  pattern base, ECLAT-snitt, Gini/GAINsplit, hierarkisk agglomerativ single-link, DBSCAN-
  klassifisering, k-means-iterasjon) — hver som nyskrevet pseudokode/prosedyre; og (b)
  **nøkkelresultatene**: apriori-prinsippet (alle delsett av et frekvent sett er frekvente,
  og et supersett av et ikke-frekvent sett er ikke-frekvent), at roll-up er mulig men
  drill-down umulig fra en materialisert kuboid, og at fakta-mål må være aggregerbare.
- **Flashcards kalibreres som begrep ↔ definisjon/formel/egenskap.** Flashcards genereres
  KUN fra toppnivå `definition`-blokker med `title`. Hvert kort parer et **navn** (begrep/
  algoritme/mål/nodetype/felle) med presis **definisjon + formel/egenskap** — f.eks.
  «Jaccard (asymmetrisk) → `M11/(M11+M01+M10)`, ignorer M00»; «Core-punkt (DBSCAN) → har
  ≥ MinPts punkter innen Eps (inkl. seg selv)»; «materialisert kuboid → roll-up mulig,
  drill-down umulig»; «join-indeks → tabell med (dimensjonsnøkkel, faktatuppel-ID)-par».
  Faget er **begrepsrikt** (mange navngitte algoritmer, mål, nodetyper og OLAP-operasjoner)
  — derfor ligger flashcards over gulvet (570), se §5.
- **Quiz kalibreres som faktakontroll/metodegjenkjenning (MC).** Quiz drilles på
  definisjonsgjenkjenning («hvilket mål ignorerer 0-0-treff?»), metodevalg («når kan en
  materialisert kuboid svare på en spørring?»), og små tallsjekk («hva er støttetallet
  for {A,B} her?»). Selve regne-**presisjonen** (Jaccard, Gini, Apriori, dendrogram)
  trenes i `exercise`- og drillkapitlene med `solution` + `hints`. `options[0]` = riktig.
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del): hver høyfrekvente
  regnesjanger (stjerneskjema 1.3, OLAP-resonnement 1.6, Jaccard 2.4, Apriori/FP/ECLAT 3.6,
  Gini 4.3, dendrogram/DBSCAN 5.5) drilles umiddelbart etter teorien. Del 6 beholder
  bankerrepetisjonen og de tre komplette øvingseksamenene.
- **Rekkefølgen legger datavarehus/OLAP FØRST** (ikke dataforbehandling), fordi faget heter
  «Datavarehus **og** datagruvedrift» og varehus-/OLAP-halvdelen er den konseptuelle rammen
  som mining-halvdelen analyserer data *i*. Dette er et bevisst avvik fra analysens §7-
  oppramsing (som listet dataforbehandling først); pedagogisk henger varehus→forbehandling→
  mining bedre sammen. Begrunnet i §2.
- **Kapittelantall (32)** ligger midt i DNA-veiledningen (20–35): fem garanterte søyler, der
  de to tyngste (assosiasjonsregler, datavarehus/OLAP) får seks kapitler hver inkl. drill.
  Ikke komprimerbart uten å underdekke et garantert tema.

---

## 2. Makrostruktur

Rekkefølgen følger **faglig oppbygging** (DNA-regelen — avhengighet, ikke frekvens):
datavarehus- og OLAP-rammen først (det analytiske «rommet» dataene bor i), så
dataforbehandling og likhet (hvordan data gjøres klare og sammenliknes), så de tre
mining-søylene: assosiasjonsregler, klassifisering og klynging, til slutt eksamenstreningen.
Frekvensen styrer *omfanget* — de to store 100 %-søylene med flest undervarianter
(assosiasjonsregler; datavarehus/OLAP) får seks kapitler med eget drillkapittel; de øvrige
får fire–fem. `sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og «vis regnestykket»-håndverket | 2 | Prioriteringsverktøyet + metode-over-svar-disiplinen som styrer hele eksamen (sensor trekker for tall uten metode). Rommer arkivforbeholdet. |
| 1 | Datavarehus og OLAP | 6 | **DW/OLAP 100 %** (nivå 1): stjerneskjema (banker å tegne), dimensjonsmodellering, kuber, materialiserte kuboider (roll-up vs. umulig drill-down), join-indeks, ETL. Egen drilldel for modellering + OLAP-resonnement. |
| 2 | Dataforbehandling og likhet | 4 | **Dataforbehandling & likhet 100 %** (nivå 1): **Jaccard** er bankeren (3/3, sikreste enkeltoppgave). Avstandsmål, normalisering, diskretisering, asymmetriske attributter. Egen Jaccard-drill. |
| 3 | Assosiasjonsregler | 6 | **Assosiasjonsregler 100 %** (nivå 1): **Apriori** garantert (3/3), + støtte/konfidens/lift, FP-growth, ECLAT. Den mest variantrike søylen → egen stor del med drill. |
| 4 | Klassifisering og evaluering | 5 | **Klassifisering 100 %** (nivå 1): beslutningstre med **Gini/GAINsplit** (foreldrenode-leddet!), + naive Bayes/k-NN (bredde), evaluering (confusion matrix, kryssvalidering). Egen Gini-drill. |
| 5 | Klynging | 5 | **Klynging 100 %** (nivå 1): k-means, **hierarkisk single-link + dendrogram** (Manhattan), **DBSCAN** (Core/Border/Noise), klyngevalidering. Egen dendrogram-/DBSCAN-drill. |
| 6 | Eksamenstrening | 4 | Bankerrepetisjon (Jaccard + Apriori) + sjangerguide + **3 komplette firetimers øvingseksamener** (alle fem søyler i hvert sett). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en legger alle sjangerkapitlene i
siste del. Her ligger hvert temas drillkapittel (1.3 stjerneskjema, 1.6 OLAP-resonnement,
2.4 Jaccard, 3.6 Apriori/FP/ECLAT, 4.3 Gini, 5.5 dendrogram/DBSCAN) inne i sin temadel,
fordi hver er en 100 %-søyle som må drilles umiddelbart etter teorien. Del 6 beholder
bankerrepetisjonen (6.1) og de tre komplette øvingseksamenene (6.2–6.4). «Vis regnestykket»-
håndverket (0.2) ligger i Del 0 fordi metode-over-svar-disiplinen styrer hele eksamen fra
første oppgave.

---

## 3. Sjangerkatalog (A–L)

Bokstavene refereres i hvert kapittel og gjengis for studenten i Del 0. Destillert fra
EKSAMENSANALYSE §3. Merk de to hovedmodusene: **regn/konstruer** (den karaktergivende
kjernen — vis regnestykket) og **forklar/teori** (presise puggedefinisjoner, med reelt
eksempel).

| Kode | Sjanger | Form | Hyppighet/vekt |
|---|---|---|---|
| **A** | Dataforbehandling «Diverse» — **Jaccard** (banker) + manglende verdier / outlier / diskretisering / asymmetriske attributter | regn + kort teori | **100 %** ★ banker (Jaccard 3/3) |
| **B** | Datavarehus-modellering — **tegn stjerneskjema** fra et upresist case (velg fakta + dimensjoner, aggregerbare mål, oppgi forutsetninger) | konstruer/tegn | **100 %** (tegnet 2/3, DW-tema 3/3) |
| **C** | OLAP — materialiserte kuboider (**roll-up vs. umulig drill-down**), **join-indeks** (par, ikke join-resultat), konsepthierarki/lattice (uke-problemet) | forklar/resonner | **100 %** (OLAP-regne/-resonner 2/3) |
| **D** | Klynging — **hierarkisk agglomerativ single-link + dendrogram** (Manhattan, to klynger av gangen) | konstruer/tegn | **67 %** (2/3) |
| **E** | Klynging — **DBSCAN** (Core/Border/Noise, MinPts, Eps, Manhattan) | konstruer | **33 %** (1/3) men distinkt |
| **F** | Klynging — **k-means-teori** (fordeler/ulemper, sentroide, init/`k`-følsomhet, bisecting) | forklar | teori **67 %** |
| **G** | Klassifisering — **beslutningstre med Gini/GAINsplit** (foreldrenode først, vektet barne-Gini, velg høyest gain) | regn | utregning **67 %**, tema **100 %** |
| **H** | Klassifisering — **evaluering** (confusion matrix, `accuracy`, `k`-fold kryssvalidering) | forklar/regn | **67 %** |
| **I** | Assosiasjonsregler — **Apriori** (banker): tell støtte, `Fk-1×Fk-1`, **prune**, til største frekvente sett | regn | **100 %** ★ banker (3/3) |
| **J** | Assosiasjonsregler — **regler + konfidens** fra et frekvent sett (konfidens per regel, terskel) | regn | **33 %** (men kjernebegrep alle bør kunne) |
| **K** | Assosiasjonsregler — **FP-growth / FP-tre** (sorter på synkende støtte, conditional pattern base, conditional FP-tree) | konstruer | **67 %** (2/3) |
| **L** | Assosiasjonsregler — **ECLAT** (vertikalt tid-liste-format, støtte via snitt av tid-lister) | regn | **33 %** (1/3) |

**Pensum nevnt i emnebeskrivelsen, men ikke regnet i arkivet (dekkes for bredde, nivå 3):**
**naive Bayes** og **k-NN** (kap. 4.4) og **lift** (kap. 3.1) — kan dukke opp i nyere sett
siden 2027 kan ha ny faglærer.

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». For dette faget: **Innholdskontrakt** =
definisjoner/**algoritme-prosedyrer**/nøkkelresultater kapitlet SKAL lære (med
pensumnotasjon i LaTeX). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3). Hvert teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` →
Forkunnskaper-`text` + Notasjons-/formel-/algoritmeliste-`collapsible` → Motivasjon →
`definition`/`theorem` (inkl. algoritme-prosedyre) → utledning m/intuisjon (kun der eksamen
krever aktiv utledning) → 2–4 `example` (siste på eksamensnivå, «vis regnestykket») →
Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på eksamensnivå, alle med
`solution` + `hints`) → Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel →
løsningsoppskrift → sensor-kommentert case → 8–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart og «vis regnestykket»-håndverket

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4300

- **id:** `tdt4300-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers kode D-eksamen, obligatoriske øvinger, engelsk oppgavetekst), de fem garanterte søylene, de to bankerne, sjangerkatalogen A–L, lesestrategien — og det ærlige arkivforbeholdet.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (V2015, V2016, K2016). Skal gjengi: (i) **formen** — skriftlig skoleeksamen **4 timer**, A–F, teller 100 %, **hjelpemiddelkode D** (bestemt, enkel kalkulator, ingen oppslag/formelark); obligatoriske øvinger må være godkjent; oppgavetekst på engelsk, svar på norsk/engelsk; (ii) **settmalen** — 5–6 nummererte hovedoppgaver med prosentvekt i overskriften, ofte delt a/b/c; (iii) **de fem søylene** — DW/OLAP, dataforbehandling & likhet, assosiasjonsregler, klassifisering, klynging — **alle i hvert sett** (3/3); **bredden ER eksamensformen**, ingen kjernetema kan droppes; (iv) **de to bankerne** — Jaccard (3/3, sikreste enkeltoppgave) og Apriori (3/3); (v) at innen hver søyle **rullerer undervarianten** (klynging: hierarkisk/dendrogram ELLER DBSCAN — øv på begge; assosiasjonsregler: alltid Apriori, ofte + FP-growth eller ECLAT; klassifisering: full Gini-utregning ELLER teori + evaluering); (vi) at ca. **60–70 % er regn/konstruer**, kalkulatoren brukes aktivt; (vii) **sensors metaregler** (§4): vis regnestykket (tall uten metode trekker), presis lærebokterminologi, oppgi forutsetninger ved modellering, aggregerbare fakta-mål, beslektede korrekte svar godtas.
- **Innholdskontrakt:** Sjangerkatalogen A–L (§3) som studentens sjekkliste med typisk vekt. **Arkivforbeholdet**: 3 sett fra 2015–2016, samme faglærer, 10+ år gammelt → `x/3` er indikasjon, ikke statistikk; 2027 kan ha ny faglærer → boka dekker HELE emnebeskrivelsen (også **naive Bayes, k-NN, lift**). **Prognosen for neste eksamen**: forvent (1) en «Diverse»-oppgave med **Jaccard** + 2–3 forbehandlingsspørsmål; (2) en **modellerings-** eller **OLAP-oppgave** (tegn stjerneskjema, eller kuboid-/join-indeks-resonnement); (3) en **klynge-oppgave** (hierarkisk med dendrogram *eller* DBSCAN); (4) en **klassifiserings-oppgave** (Gini-utregning *eller* teori + evaluering); (5) en **assosiasjonsregel-oppgave** (alltid Apriori, ofte + FP-growth/ECLAT). Avslutt med **leseplanen**: alle fem søyler er «må perfekt» (Del 1–5); bankerne (Jaccard 2.2/2.4, Apriori 3.2/3.6) sikrer bestått; nivå 2 (FP-growth 3.4, OLAP-resonnement 1.5, DBSCAN 5.3, evaluering 4.5) avgjør karakteren; nivå 3 (ECLAT 3.5, k-means-teori 5.1, naive Bayes/k-NN 4.4) differensierer.
- **Oppgavesjangre:** Ingen algoritmeoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Hvilke fem søyler kan du IKKE droppe, og hvorfor gjør bredden det umulig å satse?» og «Du har regnet Jaccard uten å vise hvilke bit-par du telte. Hvorfor kan det koste poeng selv om tallet er riktig?»
- **Typiske feil:** Metafeilene — satse på at en av de fem søylene ikke kommer; øve bare på arkivvariantene og overse naive Bayes/k-NN/lift; skrive svar uten regnestykke; tro man kan slå opp (kode D: bare kalkulator).
- **Quiz: 16 · Flashcards: 16** (form, fem søyler, bankere, sjangerkatalog A–L, metaregler, arkivforbeholdet)

#### Kapittel 0.2: «Vis regnestykket» — håndverket sensor belønner

- **id:** `tdt4300-0-2` · **number:** 0.2 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4300-0-1` · **kapitteltype:** strategi
- **description:** Den viktigste enkeltdisiplinen: hvordan du skriver mellomregning slik at metoden er synlig, hvordan du oppgir forutsetninger ved modellering, og hvorfor et gjettet tall uten metode trekker mens en korrekt vist metode med liten regnefeil ofte holder.
- **Eksamensbelegg:** Gjennomgripende — alle tre løsningsskissene understreker metode over svar («det kan vere andre svar … om ein har god grunngjeving»; «poengtrekk der det manglar noko som forklarar talet»). Gjelder Jaccard, Gini, støtte, konfidens, DBSCAN-klassifisering. Prioritet: **perfekt** (egen ferdighet verdt å trene).
- **Innholdskontrakt:** `text`/`definition` **vis-regnestykket-oppskriften** for de fire regnende bankerne: (1) **Jaccard** — sett opp `M11`, `M01`, `M10` (tellingen) FØR brøken; (2) **Gini** — regn `GINI(parent)`, så hver `GINI(barn)`, så den vektede summen FØR GAINsplit; (3) **Apriori-støtte** — vis støttetall per kandidat per steg, og marker prunede kandidater; (4) **konfidens** — skriv `c = s(X∪Y)/s(X)` symbolsk med begge støttetall før tallet. `definition` **«Forutsetninger»-linjen** ved modellering (skriv ned de rimelige antakelsene et upresist case tvinger deg til å ta). `warning` **stikkordsvar** (F11): teorispørsmål besvares med et **reelt eksempel**, ikke bare stikkordet. `theorem`-lett «poengmodell»: korrekt metode med liten regnefeil > gjettet tall uten metode. Kobling: denne disiplinen gjelder hvert regnende kapittel i boka.
- **Oppgavesjangre:** A/B/G/I-metatrening. Mønstereksempel: «To studenter får samme Jaccard-oppgave. A skriver bare 0,4. B skriver M11=2, M01=1, M10=2, J=2/(2+1+2)=0,4. Hvem får full uttelling, og hvorfor?» + «Et stjerneskjema-case nevner ikke om land skal med. Skriv en forutsetnings-linje som løser tvetydigheten.»
- **Typiske feil:** Skrive bare sluttsvaret (F2/F-generelt); hoppe over forutsetninger ved modellering; svare stikkord uten reelt eksempel (F11); regne på avrundede mellomtall i stedet for fulle tall.
- **Quiz: 16 · Flashcards: 14** (metode-over-svar, forutsetnings-linjen, de fire vis-regnestykket-oppskriftene, reelt-eksempel-regelen)

**Del 0 får ikke egne prøver** (metadel; bankerrepetisjonen ligger i kap. 6.1).

---

### Del 1 — Datavarehus og OLAP *(DW/OLAP: PERFEKT — 100 %, stjerneskjema er banker å tegne)*

> Datavarehus og OLAP er i **hvert** sett (3/3). Delen bygger den analytiske rammen:
> hva et datavarehus er, hvordan man **modellerer et stjerneskjema** (banker å tegne),
> hvordan OLAP-kuben og kuboid-gitteret fungerer, og de to resonnements-fellene sensor
> elsker — **drill-down på materialisert kuboid er umulig** (F3) og **join-indeks ≠
> join-resultat** (F4). Delen får to drillkapitler: modellering (1.3) og OLAP-resonnement (1.6).

#### Kapittel 1.1: Datavarehus — definisjon, arkitektur og ETL

- **id:** `tdt4300-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hva et datavarehus er (de fire egenskapene), hvordan det skiller seg fra en OLTP-database, arkitekturvariantene (enterprise / data mart / virtuelt) og ETL-prosessen.
- **Eksamensbelegg:** Sjanger C (teori-delen), DW-tema 3/3. Definisjonsspørsmål der skissene skriver «Sjå læreboka» → **presis pensumformulering forventes**. Prioritet: **perfekt** (billige, sikre poeng — men må pugges ordrett).
- **Innholdskontrakt:** `definition` **datavarehus** som *subject-oriented, integrated, time-variant, nonvolatile* — hver egenskap med reelt eksempel (F11). `definition` **OLTP vs. OLAP** (transaksjons- vs. analysesystem; normalisert vs. denormalisert; oppdatering vs. historikk). `definition` **arkitektur**: enterprise data warehouse vs. **data mart** (avdelingsvis) vs. **virtuelt varehus** (views over operasjonelle databaser). `text` **ETL** (extract–transform–load): utvinning fra kilder, rensing/integrasjon/transformasjon, lasting; data staging. Gjennomført eksempel: klassifiser et beskrevet system som OLTP eller OLAP og begrunn med de fire egenskapene.
- **Oppgavesjangre:** C (teori). Mønstereksempel: «Forklar hva som menes med at et datavarehus er *time-variant* og *nonvolatile*, med et konkret eksempel på hver.»
- **Typiske feil:** Stikkordsvar uten eksempel (F11); blande data mart og virtuelt varehus; tro et datavarehus oppdateres transaksjonelt (det er nonvolatile — historikk legges til, ikke overskrives).
- **Quiz: 18 · Flashcards: 28**

#### Kapittel 1.2: Dimensjonsmodellering — stjerneskjema vs. snøflak

- **id:** `tdt4300-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-1-1` · **kapitteltype:** teori
- **description:** Faktatabellen og dimensjonstabellene, forskjellen på stjerne- og snøflakskjema, og kravet som går igjen i hver modelleringsoppgave: fakta-mål må være numeriske og aggregerbare.
- **Eksamensbelegg:** Sjanger B, DW-modellering 3/3 (tegnet 2/3). Skissene understreker **«fakta-attributt må gje meining ved aggregering»** — det gjennomgående modelleringskravet. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **faktatabell** (fremmednøkler til dimensjonene + numeriske, **additive/aggregerbare** mål) og **dimensjonstabell** (beskrivende attributter, organisert i konsepthierarki). `definition` **stjerneskjema** (denormaliserte dimensjoner rundt én faktatabell) vs. **snøflak** (normaliserte dimensjoner). `theorem` (nøkkelresultat) **aggregerbarhetsregelen**: et fakta-mål må gi mening ved sum/antall/gjennomsnitt over dimensjonene; ikke-aggregerbare verdier (f.eks. en ren ID eller en kategori) hører i en dimensjon. `text` **konsepthierarki** i en dimensjon (f.eks. dag → måned → kvartal → år; by → fylke → land). Gjennomført eksempel: pek ut fakta vs. dimensjoner i et beskrevet salgsscenario, og begrunn hvorfor hvert mål er aggregerbart.
- **Oppgavesjangre:** B (forberedende til 1.3). Mønstereksempel: «Gitt et scenario med strømmetjeneste-visninger: hvilke attributter hører i faktatabellen, hvilke i dimensjonstabeller, og hvorfor er `visningsvarighet` et gyldig fakta-mål mens `sjanger` ikke er?»
- **Typiske feil:** **F5** — legge et aggregerbart mål i en dimensjonstabell, eller la et ikke-aggregerbart attributt stå som fakta; blande stjerne og snøflak; glemme en dimensjon (typisk lokasjon).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.3: DRILL — Tegn stjerneskjema fra et case (banker)

- **id:** `tdt4300-1-3` · **number:** 1.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4300-1-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger B: fra et bevisst upresist tekstcase — velg fakta og dimensjoner, oppgi forutsetninger, og tegn et fullstendig stjerneskjema med aggregerbare mål og konsepthierarkier.
- **Eksamensbelegg:** Sjanger B, 100 % (tegnet 2/3). «Beskrivelsen er upresis — det er en del av oppgaven å velge ut det som skal med.» Ved trivielle case er sensuren **strengere** på detaljene. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) les caset og skriv en **«Forutsetninger»-linje** (kap. 0.2); 2) identifisér den sentrale **måldimensjonen** (hva teller vi?); 3) velg **aggregerbare fakta-mål** til faktatabellen; 4) velg **dimensjoner** (typisk tid, lokasjon/land, produkt/type, kunde) med **fremmednøkler** fra faktatabellen; 5) organiser hver dimensjons attributter i **konsepthierarki**; 6) tegn stjernen og dobbeltsjekk mot fellekatalogen. Gjennomkjørt sensor-kommentert case (nyskrevet: f.eks. sykkelutleie eller strømforbruk) med margnotater om hva som gir uttelling. 8–12 oppgaver: ulike nyskrevne case (salg, forsikringsskader, kollektivreiser, nettbutikk), noen med bevisst manglende lokasjonsdimensjon for å teste F5.
- **Oppgavesjangre:** B. Mønstereksempel: «Et selskap vil analysere kundeklager. Beskrivelsen er upresis. Oppgi forutsetninger, velg fakta og dimensjoner, og tegn stjerneskjemaet.»
- **Typiske feil:** **F5** (fakta i dimensjon / ikke-aggregerbart mål / manglende dimensjon, særlig lokasjon); hoppe over forutsetnings-linjen; glemme fremmednøklene fra faktatabellen til hver dimensjon.
- **Quiz: 20 · Flashcards: 10**

#### Kapittel 1.4: OLAP-kuben — kuboid-gitteret, operasjoner og konsepthierarki

- **id:** `tdt4300-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-1-2` · **kapitteltype:** teori
- **description:** OLAP-kuben og gitteret av kuboider, de fem operasjonene (roll-up, drill-down, slice, dice, pivot), og hvorfor «uke» ikke passer lineært i tidshierarkiet men krever et gitter.
- **Eksamensbelegg:** Sjanger C, OLAP-tema 3/3. Konsepthierarki-resonnement (V2015, K2016). Prioritet: **perfekt** (roll-up/drill-down-forståelsen forbereder 1.5).
- **Innholdskontrakt:** `definition` **datakube** og **kuboid-gitter** (base-kuboid = mest detaljert; apex = fullt aggregert; hver kuboid = ett aggregeringsnivå). `definition` **OLAP-operasjoner**: **roll-up** (aggreger opp et hierarki), **drill-down** (bryt ned — motsatt), **slice** (fikser én dimensjon), **dice** (velg delkube), **pivot** (roter). `definition` **konsepthierarki**: lineært (dag → måned → kvartal → år) vs. **gitter (lattice)**. `theorem`/`warning` (nøkkelinnsikt, F10): **«uke» krysser månedsgrenser** og passer ikke rent inn i år–kvartal–måned–dag; det må ordnes som et **gitter**, ikke en lineær kjede. Gjennomført eksempel: gitt en kube med dimensjonene tid/lokasjon/produkt, beskriv hvilken operasjon som tar deg fra `(måned, by, produkt)` til `(kvartal, by, produkt)`.
- **Oppgavesjangre:** C. Mønstereksempel: «Kan tidshierarkiet dag–uke–måned–kvartal–år ordnes lineært? Begrunn, og tegn den korrekte strukturen.»
- **Typiske feil:** **F10** — plassere uke lineært mellom dag og måned; forveksle roll-up og drill-down; blande slice (én dimensjon fikseres) og dice (delkube).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.5: Materialiserte kuboider og join-indeks

- **id:** `tdt4300-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-1-4` · **kapitteltype:** teori
- **description:** Delvis materialisering av kuboider (hvilke lønner seg), den kritiske regelen om at man kan rulle opp men ikke drille ned en materialisert kuboid, og hva en join-indeks faktisk er — (nøkkel, tuppel-ID)-par, ikke et join-resultat.
- **Eksamensbelegg:** Sjanger C, OLAP-regne/-resonner 2/3. To av bokas største resonnements-feller (F3, F4) bor her. Prioritet: **perfekt** (F3/F4 er toppsjikt-differensierere).
- **Innholdskontrakt:** `definition` **materialisert kuboid** (forhåndsberegnet aggregering lagret for rask spørring); **delvis materialisering** (kan ikke lagre alle 2^d kuboider — velg de mest nyttige). `theorem` (nøkkelresultat, F3): fra en materialisert kuboid kan du **rulle opp** (videre aggregering, `by → fylke`) men **ikke drille ned** — informasjonen er tapt ved aggregering; en kuboid låst til `år = 2004` kan **ikke** svare på en spørring for `år = 2006`. Løsningsoppskrift for «kan denne kuboiden svare på spørringen?»: 1) er spørringens dimensjonsnivå ≥ (grovere enn eller lik) kuboidens? → roll-up mulig; 2) trenger spørringen finere detalj enn kuboiden? → **nei**, drill-down umulig; 3) er kuboiden filtrert på en verdi spørringen ikke dekker? → nei. `definition` **join-indeks** (F4): en tabell/liste med **(dimensjonsnøkkel, faktatuppel-ID)-par** som forhåndslagrer hvilke faktarader hver dimensjonsverdi kobler til — **ikke** den ferdig sammenslåtte join-tabellen. `warning` fremhevet: **å levere join-resultatet i stedet for indeksen gir 0 poeng.** Gjennomført eksempel: gitt en liten faktatabell + dimensjon, konstruer join-indeksen som par (ikke resultatet).
- **Oppgavesjangre:** C. Mønstereksempel: «En kuboid er materialisert på `(måned, by)`. Kan den svare på spørringen `total omsetning per fylle per kvartal`? På `omsetning per butikk per dag`? Begrunn hver.»
- **Typiske feil:** **F3** — tro man kan drille ned en materialisert/aggregert kuboid; **F4** — levere join-**resultatet** i stedet for indeksen (0 poeng); tro en kuboid filtrert på ett år kan svare for et annet år.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 1.6: DRILL — OLAP-resonnement: kuboider og join-indeks

- **id:** `tdt4300-1-6` · **number:** 1.6 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4300-1-5` · **kapitteltype:** drill
- **description:** Systematisk drill på sjanger C: avgjør for et batteri av spørringer hvilke materialiserte kuboider som kan svare (roll-up ja, drill-down nei), og konstruer join-indekser som par.
- **Eksamensbelegg:** Sjanger C, OLAP-resonnement 2/3. Prioritet: **perfekt** (F3/F4 drilles til de sitter).
- **Innholdskontrakt (løsningsoppskrift):** for hver «kan kuboid X svare på spørring Y?»: 1) sammenlikn dimensjonsnivåene (roll-up mulig / drill-down umulig, F3); 2) sjekk filtreringslåser (`år = 2004` ≠ `2006`); 3) svar ja/nei med begrunnelse. For join-indeks: 1) list dimensjonsverdiene; 2) for hver, list **faktatuppel-ID-ene** den kobler til; 3) presenter som par (F4 — aldri join-resultatet). Gjennomkjørt sensor-kommentert case med margnotater om at drill-down aldri er lov og at join-resultat = 0 poeng. 8–12 oppgaver: kuboid-svarbarhet på nyskrevne kuber, join-indeks-konstruksjon på nyskrevne faktatabeller, konsepthierarki/lattice-avgjørelser (uke-problemet).
- **Oppgavesjangre:** C. Mønstereksempel: «Gitt fem materialiserte kuboider og fire spørringer: for hver spørring, hvilke kuboider kan besvare den ved roll-up? Begrunn hvorfor de andre ikke kan.»
- **Typiske feil:** Hele fellekatalogen samlet (F3 drill-down, F4 join-resultat, F10 uke lineært).
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (Datavarehus og OLAP)
1. Prøve 1.A (25 min): DW-definisjoner (fire egenskaper) + OLTP vs. OLAP + arkitektur/ETL (sjanger C-teori).
2. Prøve 1.B (30 min): Tegn stjerneskjema fra upresist case, oppgi forutsetninger, aggregerbare mål (sjanger B).
3. Prøve 1.C (25 min): OLAP-operasjoner + konsepthierarki/lattice (uke-problemet) (sjanger C).
4. Prøve 1.D (30 min): Materialiserte kuboider (roll-up vs. drill-down) + join-indeks som par (sjanger C, F3/F4).

---

### Del 2 — Dataforbehandling og likhet *(dataforbehandling & likhet: PERFEKT — Jaccard er bankeren)*

> **Jaccard-koeffisienten er den sikreste enkeltoppgaven i hele faget** (3/3, alltid samme
> asymmetriske oppskrift). Denne delen bygger likhets- og avstandsapparatet, forbehandlings-
> teknikkene (manglende verdier, outliere, diskretisering, asymmetriske attributter) og
> normalisering — og driller Jaccard til feilfrihet i 2.4. Den store fellen (F1) er å regne
> Jaccard symmetrisk (SMC).

#### Kapittel 2.1: Data, attributter og datakvalitet

- **id:** `tdt4300-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Attributt-typer (nominal/ordinal/intervall/ratio), asymmetriske attributter, og datakvalitetsproblemene eksamen tester: manglende verdier, outliere og støy.
- **Eksamensbelegg:** Sjanger A (forbehandlings-delen av «Diverse»-oppgaven), 100 %. Roterende: manglende verdier, outliere, asymmetriske attributter. Prioritet: **perfekt** (lettjente poeng, men krever reelt eksempel — F11).
- **Innholdskontrakt:** `definition` **attributt-typer** (nominal, ordinal, intervall, ratio) med eksempel på hver. `definition` **asymmetrisk attributt** — kun tilstedeværelse (verdi ≠ 0) er interessant; forklar med **reelt eksempel** (fag en student tar; varer i en handlekurv), ikke bare stikkordet (F11). `definition` **manglende verdier** — minst tre strategier: **fjern objektet**, **estimer/interpoler verdien**, **ignorer attributtet**. `definition` **outlier** (avvikende observasjon — kan være feil eller ekte sjeldenhet) og **støy**. Gjennomført eksempel: gitt et datasett med manglende felt, drøft de tre strategiene og når hver passer.
- **Oppgavesjangre:** A (teori-delen). Mønstereksempel: «Forklar hva en asymmetrisk attributt er, med et konkret eksempel, og hvorfor 0-verdier er uinteressante.»
- **Typiske feil:** **F11** stikkordsvar uten eksempel; oppgi bare én strategi for manglende verdier (oppgi minst tre); forveksle outlier (avvik) og støy (tilfeldig feil).
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 2.2: Likhets- og avstandsmål — Jaccard, Manhattan, Euklidsk (banker)

- **id:** `tdt4300-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-2-1` · **kapitteltype:** teori
- **description:** De sentrale målene: Jaccard-koeffisienten (asymmetrisk, bankeren), simple matching coefficient (SMC), Manhattan- og Euklidsk avstand, og cosinuslikhet — når hvert brukes.
- **Eksamensbelegg:** Sjanger A, **Jaccard 3/3 — den sikreste enkeltoppgaven**. Manhattan brukes i klynging (Del 5). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem` **Jaccard (asymmetrisk binær)**: `J = M11/(M11+M01+M10)` — kun 1-1-treff (`M11`) og 1-0/0-1-avvik (`M10`, `M01`) teller; **0-0-treff (`M00`) ignoreres**. `definition` **SMC (simple matching)**: `(M11+M00)/(M11+M00+M01+M10)` — teller `M00`, brukes for **symmetriske** attributter. `definition` **Manhattan** `Σ|xi−yi|` og **Euklidsk** `√Σ(xi−yi)²`. `definition` **cosinuslikhet** (vinkel mellom vektorer, for dokument-/tekstdata). `theorem` nøkkelregel: velg **Jaccard for asymmetriske binære** data (handlekurv, fag), **SMC for symmetriske**. Gjennomført eksempel («vis regnestykket», kap. 0.2): to bit-vektorer → tell M11/M01/M10 eksplisitt → sett inn i brøken.
- **Oppgavesjangre:** A (banker). Mønstereksempel: «Gitt to bit-vektorer, regn Jaccard-koeffisienten. Vis hvilke posisjoner som gir M11, M01 og M10.»
- **Typiske feil:** **F1** — regne Jaccard symmetrisk (ta med M00, altså SMC); glemme å vise tellingen (kap. 0.2); bruke Euklidsk der Manhattan er anvist i klynging; forveksle teller og nevner.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 2.3: Normalisering, diskretisering og transformasjon

- **id:** `tdt4300-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4300-2-1` · **kapitteltype:** teori
- **description:** Normalisering (min-max, z-score), diskretisering av kontinuerlige verdier (antall kategorier og splittpunkter, supervised vs. unsupervised), og hvorfor skalering betyr noe for avstandsmål.
- **Eksamensbelegg:** Sjanger A, forbehandlings-varianter (diskretisering, normalisering). Prioritet: **kunne** (roterer inn i «Diverse»-oppgaven).
- **Innholdskontrakt:** `definition` **normalisering**: **min-max** til `[0,1]` (`(x−min)/(max−min)`) og **z-score** (`(x−μ)/σ`); hvorfor avstandsmål krever skalering (ellers dominerer attributter med stort tallområde). `definition` **diskretisering**: `n` kategorier gir `n−1` **splittpunkter**; **unsupervised** (lik bredde / lik frekvens / k-means) vs. **supervised** (bruker klasselabel, f.eks. entropibasert). Gjennomført eksempel: diskretiser en kontinuerlig attributt i tre kategorier med lik bredde, og oppgi de to splittpunktene.
- **Oppgavesjangre:** A. Mønstereksempel: «Diskretiser aldersverdiene under i fire kategorier med lik frekvens. Oppgi splittpunktene og forklar forskjellen fra lik bredde.»
- **Typiske feil:** Oppgi `n` splittpunkter i stedet for `n−1`; blande lik bredde og lik frekvens; glemme normalisering før avstandsberegning; forveksle supervised og unsupervised diskretisering.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 2.4: DRILL — Jaccard og avstandsberegning (banker)

- **id:** `tdt4300-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-2-2` · **kapitteltype:** drill
- **description:** Full drill på bankeren: regn Jaccard på bit-vektorer med synlig telling, og Manhattan/Euklidsk der det trengs — raskt og feilfritt med kalkulator.
- **Eksamensbelegg:** Sjanger A, Jaccard 3/3 (sikreste enkeltoppgave). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** for Jaccard: 1) still de to bit-vektorene under hverandre; 2) tell **M11** (begge 1), **M10** (første 1, andre 0), **M01** (første 0, andre 1) — ignorer **M00**; 3) `J = M11/(M11+M01+M10)`; 4) vis tellingen (kap. 0.2). For Manhattan: `Σ|xi−yi|`. Gjennomkjørt sensor-kommentert case med margnotater om at M00 aldri telles (F1) og at tallet uten telling trekker. 8–15 oppgaver: Jaccard på ulike nyskrevne bit-vektorpar, blandet med Manhattan/Euklidsk og noen SMC-kontraster (for å skjerpe symmetrisk-vs-asymmetrisk-skillet).
- **Oppgavesjangre:** A. Mønstereksempel: «Regn Jaccard for de fem bit-vektorparene under. For ett av dem, regn også SMC og forklar hvorfor svaret er forskjellig.»
- **Typiske feil:** **F1** ta med M00 (SMC i stedet for Jaccard); regnestykke uten telling; forveksle Manhattan og Euklidsk.
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (Dataforbehandling og likhet)
1. Prøve 2.A (20 min): Jaccard på bit-vektorer, vis tellingen (banker, sjanger A).
2. Prøve 2.B (20 min): Asymmetriske attributter + manglende verdier (tre strategier), med reelt eksempel (A).
3. Prøve 2.C (20 min): Diskretisering (antall splittpunkter, supervised/unsupervised) + normalisering (A).
4. Prøve 2.D (25 min): Blandet «Diverse»-sett — Jaccard + outlier + asymmetrisk attributt (A).

---

### Del 3 — Assosiasjonsregler *(assosiasjonsregler: PERFEKT — Apriori er banker; mest variantrike søyle)*

> **Apriori kommer i hvert sett** (3/3). Dette er den mest variantrike søylen: alltid
> Apriori, ofte + FP-growth eller ECLAT. Delen bygger grunnbegrepene (støtte, konfidens,
> lift), driller Apriori med pruning (banker), regelgenerering med konfidens, og de to
> alternative algoritmene FP-growth (FP-tre + conditional pattern base) og ECLAT (vertikale
> tid-lister). Store feller: F7 (Apriori uten pruning) og F9 (konfidens forvekslet med støtte).

#### Kapittel 3.1: Frekvente elementsett — støtte, konfidens og lift

- **id:** `tdt4300-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Grunnbegrepene i markedskurv-analyse: elementsett, støtte, konfidens og lift — og apriori-prinsippet som gjør Apriori mulig.
- **Eksamensbelegg:** Sjanger I/J, understøtter 100 %-temaet. Støtte og konfidens er kjernebegrep alle må kunne; lift er nevnt i emnebeskrivelsen (dekkes for bredde). Prioritet: **perfekt** (støtte/konfidens), **kjenne** (lift).
- **Innholdskontrakt:** `definition` **elementsett (itemset)**, **transaksjon**, **støtte** `s(X) = antall(X)/N` (evt. som støttetall). `definition` **konfidens** `c(X→Y) = s(X∪Y)/s(X)` — sannsynligheten for `Y` gitt `X`. `definition` **lift** `= c(X→Y)/s(Y)` (>1 positiv assosiasjon, =1 uavhengig, <1 negativ). `theorem` **apriori-prinsippet** (nøkkelresultat): **alle delsett av et frekvent elementsett er frekvente**; ekvivalent — **et supersett av et ikke-frekvent elementsett er ikke-frekvent** (dette er pruning-grunnlaget). Gjennomført eksempel: fra en liten transaksjonstabell, regn støtte for noen elementsett og konfidens for en regel, «vis regnestykket».
- **Oppgavesjangre:** I/J-forberedende. Mønstereksempel: «Regn støtten til {A,B} og konfidensen til regelen A→B fra transaksjonene under. Regn også lift og tolk verdien.»
- **Typiske feil:** **F9** — forveksle konfidens (`s(X∪Y)/s(X)`) med støtte (`s(X∪Y)/N`); regne lift feil vei; blande støttetall (antall) og støtte (andel).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Apriori-algoritmen — kandidatgenerering og pruning (banker)

- **id:** `tdt4300-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4300-3-1` · **kapitteltype:** teori
- **description:** Apriori-algoritmen steg for steg: tell 1-elementstøtte, behold frekvente, generer kandidater med `Fk-1 × Fk-1`, prune umiddelbart de med ikke-frekvente delsett, tell, gjenta.
- **Eksamensbelegg:** Sjanger I, **Apriori 3/3 — banker**. Skissene krever synlig kandidatgenerering og at prunede kandidater markeres. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **algoritme-prosedyre Apriori** (nyskrevet pseudokode): (1) tell støtte for alle 1-elementsett; behold de ≥ min. støtte → `F1`; (2) generer 2-kandidater; tell; behold frekvente → `F2`; (3) for `k ≥ 2`: **`Fk = (Fk-1 × Fk-1)`** kandidatgenerering, **prune** kandidater som har et **ikke-frekvent delsett** (marker dem, f.eks. `ACG*`), tell de overlevende, behold frekvente; (4) stopp når ingen nye frekvente sett finnes. `definition` **kandidatgenerering `Fk-1 × Fk-1`** og **apriori-pruning**. `warning` (F7) prune **umiddelbart** — behold aldri en kandidat med et ikke-frekvent delsett. Gjennomført eksempel («vis regnestykket»): kjør Apriori på en nyskrevet transaksjonstabell med gitt min. støtte, vis støttetall per steg og marker prunede kandidater.
- **Oppgavesjangre:** I (banker). Mønstereksempel: «Finn alle frekvente elementsett med minimumsstøtte 3 fra transaksjonene under. Vis kandidatgenereringen og marker prunede kandidater.»
- **Typiske feil:** **F7** — beholde kandidater med ikke-frekvente delsett i stedet for å prune; glemme å vise støttetall per steg; stoppe for tidlig (ikke gå til største frekvente sett); telle støtte feil.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 3.3: Regelgenerering og konfidens fra frekvente elementsett

- **id:** `tdt4300-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4300-3-2` · **kapitteltype:** teori
- **description:** Fra et frekvent elementsett: generer alle kandidatregler, regn konfidens per regel, og behold de over terskel.
- **Eksamensbelegg:** Sjanger J, 1/3 (men konfidens er kjernebegrep alle bør kunne). Prioritet: **kunne**.
- **Innholdskontrakt:** `text`/`theorem` **regelgenerering**: fra et frekvent sett `Z` (f.eks. `{B,D,E}`), lag alle regler `X → Z∖X`; regn **konfidens** `c = s(Z)/s(X)` per regel; behold de ≥ terskel (f.eks. 75 %). `definition` monotoni-egenskapen: hvis en regel er under terskel, kan man prune regler med større venstreside (samme konsekvent). Gjennomført eksempel («vis regnestykket»): fra et gitt frekvent 3-elementsett, generer alle regler og regn konfidens for hver.
- **Oppgavesjangre:** J. Mønstereksempel: «Fra det frekvente settet {B,D,E} med kjente delsett-støtter: generer alle regler og regn konfidens. Hvilke holder terskelen 75 %?»
- **Typiske feil:** **F9** — regne konfidens som `s(Z)/N` i stedet for `s(Z)/s(venstreside)`; glemme regler med flere elementer på venstresiden; bruke feil delsett-støtte i nevneren.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.4: FP-growth og FP-treet

- **id:** `tdt4300-3-4` · **number:** 3.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4300-3-2` · **kapitteltype:** teori
- **description:** FP-growth: bygg FP-treet (elementer sortert på synkende global støtte), og for hvert element finn conditional pattern base, bygg conditional FP-tree og les ut de frekvente elementsettene.
- **Eksamensbelegg:** Sjanger K, 2/3. Sensornyanse: ulik sortering av elementer med **samme** støttetall gir ulike, men like korrekte, trær. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **algoritme-prosedyre FP-growth** (nyskrevet): (1) tell 1-elementstøtte, sorter synkende, dropp ikke-frekvente; (2) for hver transaksjon: sorter elementene på **synkende global støtte** og sett inn i **FP-treet** (del felles prefiks; **header table** med node-lenker); (3) for hvert element **nedenfra**: finn **conditional pattern base** (prefiks-stiene), bygg **conditional FP-tree**, les ut frekvente elementsett rekursivt. `definition` **FP-tre**, **header table**, **conditional pattern base**, **conditional FP-tree**. `warning` sorteringsnyansen: ved likt støttetall er flere sorteringer korrekte (fasit raus). Gjennomført eksempel («vis regnestykket»): bygg FP-treet for en nyskrevet transaksjonstabell og les ut frekvente sett for ett element.
- **Oppgavesjangre:** K. Mønstereksempel: «Bygg FP-treet for transaksjonene under (min. støtte 2). Finn conditional pattern base for element E og les ut de frekvente settene som inneholder E.»
- **Typiske feil:** Ikke sortere transaksjonene på synkende støtte før innsetting; feil conditional pattern base (ta med feil prefiks); glemme header table-lenkene; tro bare én sortering er riktig ved likt støttetall.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.5: ECLAT — vertikalt tid-liste-format

- **id:** `tdt4300-3-5` · **number:** 3.5 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4300-3-1` · **kapitteltype:** teori
- **description:** ECLAT: representer dataene vertikalt (for hvert element, transaksjons-ID-ene det opptrer i), og finn støtten til et elementsett ved snitt av tid-listene.
- **Eksamensbelegg:** Sjanger L, 1/3 (lavfrekvent, differensierer). Prioritet: **kjenne**.
- **Innholdskontrakt:** `definition` **vertikalt dataformat (tid-liste)**: for hvert element, listen over transaksjons-ID-er (TID) det forekommer i. `theorem` **støtte via snitt**: støtten til et elementsett (f.eks. `{A,G}`) = antall felles TID-er = `|tidliste(A) ∩ tidliste(G)|`. Gjennomført eksempel: konverter en horisontal transaksjonstabell til vertikalt format, og regn støtten til et par ved snitt.
- **Oppgavesjangre:** L. Mønstereksempel: «Gjør om transaksjonene til vertikalt format. Regn støtten til {A,G} og {B,C} ved snitt av tid-listene.»
- **Typiske feil:** Regne union i stedet for snitt; telle TID-er feil; blande horisontalt og vertikalt format.
- **Quiz: 14 · Flashcards: 16**

#### Kapittel 3.6: DRILL — Apriori, FP-growth og ECLAT (banker)

- **id:** `tdt4300-3-6` · **number:** 3.6 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4300-3-4` · **kapitteltype:** drill
- **description:** Full drill på assosiasjonsregel-søylen: kjør Apriori med pruning (banker), bygg FP-tre, regn støtte via ECLAT-snitt, og generer regler med konfidens.
- **Eksamensbelegg:** Sjanger I/J/K/L, Apriori 3/3. Prioritet: **perfekt** (Apriori), **kunne** (FP-growth), **kjenne** (ECLAT).
- **Innholdskontrakt (løsningsoppskrift):** for Apriori — tell → behold → `Fk-1×Fk-1` → prune (marker) → gjenta (F7); for FP-growth — sorter → bygg tre → conditional pattern base → les ut; for ECLAT — vertikalt → snitt; for regler — konfidens `s(Z)/s(X)` per regel (F9). Gjennomkjørt sensor-kommentert case med margnotater om pruning (F7) og konfidens-vs-støtte (F9). 10–15 oppgaver: samme nyskrevne transaksjonssett løst med Apriori OG FP-growth OG ECLAT (viser at de gir samme frekvente sett), pluss regelgenerering.
- **Oppgavesjangre:** I/J/K/L. Mønstereksempel: «Finn de frekvente settene i transaksjonene under med (a) Apriori og (b) FP-growth. Bekreft støtten til {A,C} med ECLAT-snitt. Generer så alle regler med konfidens ≥ 60 %.»
- **Typiske feil:** Hele fellekatalogen (F7 manglende pruning, F9 konfidens som støtte, feil conditional pattern base, snitt vs. union).
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (Assosiasjonsregler)
1. Prøve 3.A (25 min): Apriori — frekvente elementsett med pruning, vis støttetall (banker, sjanger I).
2. Prøve 3.B (20 min): Regelgenerering + konfidens fra et frekvent sett (sjanger J, F9).
3. Prøve 3.C (30 min): FP-growth — bygg FP-tre + conditional pattern base (sjanger K).
4. Prøve 3.D (20 min): ECLAT vertikalt format + snitt for støtte; lift-tolkning (sjanger L).

---

### Del 4 — Klassifisering og evaluering *(klassifisering: PERFEKT — Gini/GAINsplit, foreldrenode-leddet)*

> **Klassifisering er i hvert sett** (3/3). Kjernen er beslutningstre med **Gini/GAINsplit**,
> der den eksplisitte sensorfellen (F2) er å glemme foreldrenode-leddet i GAINsplit. Delen
> bygger beslutningstre-teorien, driller Gini-utregningen, dekker naive Bayes og k-NN for
> bredde (nevnt i emnebeskrivelsen), og evaluering (confusion matrix, accuracy,
> kryssvalidering).

#### Kapittel 4.1: Klassifikasjon og beslutningstrær — grunnbegreper

- **id:** `tdt4300-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hva klassifikasjon er (lære en modell fra merkede treningsdata), hvordan et beslutningstre bygges topp-ned (Hunt/grådig splitting), og hva et splittkriterium er.
- **Eksamensbelegg:** Sjanger G (teori-delen), klassifiseringstema 3/3. Prioritet: **perfekt** (rammen for Gini-oppgaven).
- **Innholdskontrakt:** `definition` **klassifikasjon** (supervised — lær `attributter → klasse` fra merkede eksempler), **treningssett vs. testsett**. `definition` **beslutningstre** (indre noder = attributt-tester, grener = utfall, løv = klasse). `text` **grådig topp-ned bygging** (Hunt): velg beste split-attributt ved et **urenhetsmål**, del, gjenta rekursivt; grådig ≠ nødvendigvis optimalt tre. `definition` **splittkriterium** (velg attributtet som reduserer urenhet mest). Gjennomført eksempel: fra en liten treningstabell, beskriv hvordan roten velges (uten full Gini ennå — det kommer i 4.2).
- **Oppgavesjangre:** G-forberedende. Mønstereksempel: «Forklar hvordan et beslutningstre bygges topp-ned, og hvorfor grådig valg av split ikke garanterer det minste treet.»
- **Typiske feil:** Blande treningssett og testsett; tro grådig bygging gir globalt optimalt tre; forveksle indre node (test) og løv (klasse).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.2: Urenhetsmål — Gini og GAINsplit (foreldrenoden!)

- **id:** `tdt4300-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4300-4-1` · **kapitteltype:** teori
- **description:** Gini-indeksen som urenhetsmål, GAINsplit som vektet reduksjon av urenhet — med foreldrenode-leddet som sensor eksplisitt advarer om — og entropi/informasjonsgevinst som alternativ.
- **Eksamensbelegg:** Sjanger G, **Gini-utregning 2/3, tema 3/3**. Eksplisitt sensor-advarsel (F2): *«Viktig å ha med GAIN inkl. p(j|Parent)»*. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **Gini-indeks** `GINI(t) = 1 − Σ_j [p(j|t)]²` per node. `theorem` **GAINsplit** `= GINI(parent) − Σ_i (n_i/n)·GINI(i)` — vektet sum over barnenodene, **trukket fra foreldrenoden** (F2). Prosedyre: (1) regn `GINI(parent)` (hele treningssettet); (2) for hver gren `i`: tell klassefordelingen, regn `GINI(i)`, vekt med `n_i/n`; (3) `GAINsplit = GINI(parent) − vektet sum`; (4) **velg attributtet med høyest GAIN** (hvis begge gir negativ gain, bør ingen velges). `definition` **entropi** `= −Σ_j p(j|t)·log₂ p(j|t)` og **informasjonsgevinst** (samme struktur, entropi i stedet for Gini) — alternativt urenhetsmål. Gjennomført eksempel («vis regnestykket», kap. 0.2): regn GAINsplit for to attributter på en nyskrevet treningstabell, med foreldrenoden først, og velg roten.
- **Oppgavesjangre:** G. Mønstereksempel: «Regn GAINsplit for attributtene *Vær* og *Motstander* på treningstabellen under. Regn foreldrenoden først. Hvilket attributt velges til roten?»
- **Typiske feil:** **F2** — glemme `GINI(parent)`-leddet (GAINsplit blir feil); glemme å vekte barne-Gini med `n_i/n`; regne `p(j|t)` feil; ikke vise mellomregningene per gren (kap. 0.2); velge feil attributt.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 4.3: DRILL — Gini/GAINsplit-utregning

- **id:** `tdt4300-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4300-4-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger G: regn Gini og GAINsplit feilfritt med kalkulator, alltid med foreldrenoden inkludert og alle mellomregninger vist.
- **Eksamensbelegg:** Sjanger G, Gini-utregning 2/3. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) regn `GINI(parent)` fra hele treningssettet; 2) for hvert kandidatattributt: del i grener, tell klasser per gren, regn `GINI(gren)`, vekt `n_i/n`, summer; 3) `GAINsplit = GINI(parent) − vektet sum`; 4) velg høyest gain (F2). Gjennomkjørt sensor-kommentert case med margnotater om at foreldrenoden **må** med (F2) og at hver mellomregning gir uttelling. 8–15 oppgaver: GAINsplit for attributtpar på nyskrevne treningstabeller (fotballresultat, forsikringsskade, lånesøknad), noen med tre grener, noen der begge attributter gir lav/negativ gain.
- **Oppgavesjangre:** G. Mønstereksempel: «For treningstabellen under, regn GAINsplit for tre attributter og ranger dem. Vis foreldrenoden og alle barne-Gini-verdier.»
- **Typiske feil:** **F2** foreldrenoden glemt; uvektet barne-Gini; regnefeil i `p(j|t)²`; manglende mellomregning.
- **Quiz: 22 · Flashcards: 10**

#### Kapittel 4.4: Andre klassifikatorer — naive Bayes og k-NN

- **id:** `tdt4300-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4300-4-1` · **kapitteltype:** teori
- **description:** To klassifikatorer nevnt i emnebeskrivelsen men ikke regnet i arkivet: naive Bayes (uavhengighetsantakelsen + posterior) og k-nærmeste-nabo (avstandsbasert, lat læring). Dekkes for bredde mot en mulig ny faglærer i 2027.
- **Eksamensbelegg:** Nevnt i emnebeskrivelsen, **ikke sett i arkivet** — dekkes for bredde (nivå 3). Kan dukke opp i nyere sett. Prioritet: **kjenne** (verifiser at det fortsatt er pensum i 2027-utgaven `(verifiser)`).
- **Innholdskontrakt:** `definition`/`theorem` **naive Bayes**: `P(klasse|x) ∝ P(klasse)·∏_i P(xi|klasse)` — den «naive» **betinget uavhengighet**-antakelsen; velg klassen med høyest posterior; kort om Laplace-glatting for nullfrekvenser. `definition` **k-NN**: klassifiser et punkt ved flertall blant de `k` nærmeste (avstandsmål fra kap. 2.2); **lat læring** (ingen modell bygges); valg av `k` og skaleringens betydning. `text` når hver passer (naive Bayes: rask, robust, mange attributter; k-NN: enkel, men treg ved store data og følsom for skala). Gjennomført eksempel: klassifiser ett testpunkt med naive Bayes fra en liten frekvenstabell, «vis regnestykket».
- **Oppgavesjangre:** Bredde-sjanger (mulig ny). Mønstereksempel: «Klassifiser testeksempelet under med naive Bayes fra frekvenstabellen. Vis posterior for hver klasse.»
- **Typiske feil:** Glemme prior `P(klasse)` i naive Bayes; ikke normalisere/sammenlikne posteriorene; glemme skalering før k-NN (avstand dominert av storskala-attributt); velge partall `k` som gir uavgjort.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 4.5: Evaluering — confusion matrix, accuracy og kryssvalidering

- **id:** `tdt4300-4-5` · **number:** 4.5 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4300-4-1` · **kapitteltype:** teori
- **description:** Hvordan en klassifikators ytelse måles: confusion matrix (TP/FP/FN/TN), accuracy, og k-fold kryssvalidering for å estimere generaliseringsytelse.
- **Eksamensbelegg:** Sjanger H, 2/3. Oppgaven kan ha to spørsmål (confusion matrix + kryssvalidering) — svar på begge. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **confusion matrix**: korrekt klasse mot predikert klasse — **TP/FP/FN/TN**. `theorem` **accuracy** `= (TP+TN)/N`; kort om presisjon/recall (`TP/(TP+FP)`, `TP/(TP+FN)`) for skjeve klasser. `definition` **k-fold kryssvalidering**: partisjoner data i `k` disjunkte deler; tren på `k−1`, test på den siste, gjenta `k` ganger; metrikk = **gjennomsnittlig ytelse**; brukes til å **estimere klassifikatorens ytelse** (unngå overtilpasning til ett testsett). Gjennomført eksempel: fra en gitt confusion matrix, regn accuracy (og evt. presisjon/recall).
- **Oppgavesjangre:** H. Mønstereksempel: «Fra confusion matrix under, regn accuracy. Forklar deretter hvordan 5-fold kryssvalidering ville brukt de samme dataene.»
- **Typiske feil:** Bytte om FP og FN; regne accuracy uten TN; tro kryssvalidering trener og tester på samme fold; blande presisjon og recall.
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 4:** 4 prøver (Klassifisering og evaluering)
1. Prøve 4.A (30 min): GAINsplit for to attributter, foreldrenoden inkludert, velg roten (banker-nær, sjanger G).
2. Prøve 4.B (20 min): Beslutningstre-teori + entropi/informasjonsgevinst som alternativt mål (G).
3. Prøve 4.C (25 min): Naive Bayes-klassifisering + k-NN-resonnement (bredde-sjanger).
4. Prøve 4.D (20 min): Confusion matrix → accuracy + k-fold kryssvalidering (sjanger H).

---

### Del 5 — Klynging *(klynging: PERFEKT — hierarkisk/dendrogram + DBSCAN, undervarianten rullerer)*

> **Klynging er i hvert sett** (3/3), men undervarianten rullerer: hierarkisk agglomerativ
> (single-link + dendrogram) ELLER DBSCAN — **øv på begge**. Delen bygger k-means-teorien,
> driller dendrogram-konstruksjon (F8: to klynger av gangen) og DBSCAN-klassifisering (F6:
> Core/Border/Noise først), og dekker klyngevalidering.

#### Kapittel 5.1: Klyngeanalyse og k-means

- **id:** `tdt4300-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Hva klynging er (unsupervised gruppering), k-means-algoritmen (sentroider, tildel–oppdater), dens fordeler og ulemper, og bisecting k-means.
- **Eksamensbelegg:** Sjanger F, k-means-teori 2/3. Prioritet: **kunne** (teori), **kjenne** (bisecting).
- **Innholdskontrakt:** `definition` **klynging** (unsupervised — grupper like objekter uten klasselabel; kontrast til klassifikasjon). `theorem` **k-means-prosedyre**: (1) velg `k` sentroider; (2) **tildel** hvert punkt til nærmeste sentroide; (3) **oppdater** sentroidene til klyngenes gjennomsnitt; (4) gjenta til stabilt. `text` **fordeler** (lav beregnings-/minnekostnad, enkel) og **ulemper** (finner kun **globulære** klynger; sliter med ulik størrelse/tetthet og outliere; krever et «senter»; **sensitiv for initiale sentroider**; må velge `k`). `definition` **bisecting k-means** (splitt rekursivt i to — mindre følsom for initialisering). Gjennomført eksempel: kjør én k-means-iterasjon på noen 2D-punkter med gitte startsentroider (Manhattan/Euklidsk).
- **Oppgavesjangre:** F. Mønstereksempel: «List tre ulemper med k-means og forklar hvorfor algoritmen sliter med klynger av ulik tetthet.»
- **Typiske feil:** Tro k-means finner vilkårlige former (bare globulære); glemme init-følsomheten; ikke oppdatere sentroiden til gjennomsnittet; forveksle k-means (partisjonerende) og hierarkisk.
- **Quiz: 16 · Flashcards: 24**

#### Kapittel 5.2: Hierarkisk agglomerativ klynging — single-link og dendrogram

- **id:** `tdt4300-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4300-2-2` · **kapitteltype:** teori
- **description:** Agglomerativ klynging som slår sammen to klynger av gangen ved MIN (single-link) med Manhattan-distanse, og hvordan sammenslåingsrekkefølgen dokumenteres i et dendrogram.
- **Eksamensbelegg:** Sjanger D, 2/3. Skissene: slå sammen **to klynger av gangen**, alltid paret med minste MIN-avstand; grafisk løsning godtas «om ein forklarer korleis avstand kan reknast ut». Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **agglomerativ (bottom-up) hierarkisk klynging**; **koblingsmål**: **MIN/single-link** (minste avstand mellom klyngene), MAX/complete-link, group average. `theorem` **single-link-prosedyre**: (1) start med hvert punkt som egen klynge; (2) regn avstandsmatrise (Manhattan `Σ|xi−yi|`); (3) slå sammen de **to** klyngene med minste MIN-avstand; (4) oppdater avstander (single-link: minimum til den nye klyngen); (5) gjenta til én klynge. `definition` **dendrogram** (tre som viser sammenslåingsrekkefølge og -høyde). `warning` (F8): slå sammen **kun ett par** per steg. Gjennomført eksempel («vis regnestykket»): 6–8 nyskrevne punkter, kjør single-link med Manhattan, vis rekkefølgen og tegn dendrogrammet.
- **Oppgavesjangre:** D. Mønstereksempel: «Utfør agglomerativ klynging (single-link, Manhattan) på de åtte punktene under. Vis sammenslåingsrekkefølgen og tegn dendrogrammet.»
- **Typiske feil:** **F8** — slå sammen mer enn to klynger av gangen; bruke MAX i stedet for MIN; regne Euklidsk der Manhattan er anvist; feil dendrogram-høyde/rekkefølge.
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 5.3: DBSCAN — tetthetsbasert klynging

- **id:** `tdt4300-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-2-2` · **kapitteltype:** teori
- **description:** DBSCAN: klassifiser hvert punkt som kjerne, grense eller støy ut fra MinPts og Eps, og finn klyngene som sammenhengende tetthetsforbundne kjernepunkter.
- **Eksamensbelegg:** Sjanger E, 1/3 (men distinkt). Skissene: klassifiser **hvert punkt** før klyngen pekes ut. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **Eps** (nabolagsradius) og **MinPts** (tetthetsterskel). `definition` **punktklasser** (F6): **Core** (≥ MinPts punkter innen Eps, **inkludert punktet selv**), **Border** (< MinPts innen Eps, men innen Eps av et Core-punkt), **Noise/outlier** (verken Core eller Border). `theorem` **DBSCAN-prosedyre**: (1) klassifisér hvert punkt (Core/Border/Noise) ved å telle naboer innen Eps (Manhattan); (2) koble sammenhengende Core-punkter (tetthetsforbundethet) til klynger; (3) tildel Border-punkter til en tilstøtende klynge; (4) Noise står utenfor. `warning` (F6): **klassifisér hvert punkt FØR** du peker ut klyngen — hopp aldri rett til klyngen. Gjennomført eksempel («vis regnestykket»): gitt punkter, Eps og MinPts, klassifiser hvert punkt og identifiser klyngen(e) + støypunktene.
- **Oppgavesjangre:** E. Mønstereksempel: «Med Eps = 2 (Manhattan) og MinPts = 3, klassifiser hvert av punktene under som Core/Border/Noise, og finn klyngene.»
- **Typiske feil:** **F6** — hoppe til klyngen uten å klassifisere hvert punkt; glemme at punktet **teller seg selv** i naboantallet; forveksle Border og Noise; bruke feil avstandsmål.
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 5.4: Klyngevalidering

- **id:** `tdt4300-5-4` · **number:** 5.4 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4300-5-1` · **kapitteltype:** teori
- **description:** Hvorfor og hvordan klyngeresultater valideres: unngå å finne mønster i støy, sammenlikne algoritmer/klyngesett, og bestemme antall klynger.
- **Eksamensbelegg:** Sjanger F (validerings-delen), teori 2/3. Prioritet: **kjenne**.
- **Innholdskontrakt:** `definition` **klyngevalidering**: (1) **unngå å finne mønster i tilfeldig støy**; (2) **sammenlikne** algoritmer / klyngesett / enkeltklynger; (3) **bestemme antall klynger** `k`. `text` intern vs. ekstern validering (kort — SSE/kohesjon vs. sammenlikning mot fasitlabels); elbow-metoden for `k`. Gjennomført eksempel: drøft hvordan du ville avgjort om et k-means-resultat er reelt eller tilfeldig.
- **Oppgavesjangre:** F. Mønstereksempel: «Forklar tre formål med klyngevalidering, og hvordan du ville avgjort antall klynger i et ukjent datasett.»
- **Typiske feil:** Anta at enhver klyngestruktur er reell (mønster i støy); blande intern og ekstern validering; tro flere klynger alltid er bedre (SSE synker trivielt).
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 5.5: DRILL — Dendrogram og DBSCAN-klassifisering

- **id:** `tdt4300-5-5` · **number:** 5.5 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4300-5-3` · **kapitteltype:** drill
- **description:** Full drill på de to konstruksjonssjangrene: hierarkisk single-link med dendrogram (D) og DBSCAN Core/Border/Noise-klassifisering (E), begge med Manhattan-distanse.
- **Eksamensbelegg:** Sjanger D + E, klynging 3/3 (undervarianten rullerer — øv på begge). Prioritet: **perfekt** (D), **kunne** (E).
- **Innholdskontrakt (løsningsoppskrift):** for single-link — avstandsmatrise → slå sammen ett par (minste MIN) → oppdater → gjenta → dendrogram (F8); for DBSCAN — tell naboer innen Eps (inkl. seg selv) → klassifiser Core/Border/Noise → koble klynger (F6). Gjennomkjørt sensor-kommentert case med margnotater om ett-par-per-steg (F8) og klassifiser-først (F6). 8–15 oppgaver: samme nyskrevne punktmengde klynget med **både** single-link (tegn dendrogram) og DBSCAN (klassifiser punkter) — så studenten ser at samme data gir ulike klynger med ulik algoritme.
- **Oppgavesjangre:** D + E. Mønstereksempel: «For de ti punktene under: (a) kjør single-link (Manhattan) og tegn dendrogrammet; (b) kjør DBSCAN med Eps = 3, MinPts = 3 og klassifiser hvert punkt.»
- **Typiske feil:** **F8** (mer enn to klynger av gangen), **F6** (klynge uten klassifisering / glemme selvtellingen), feil avstandsmatrise, MIN vs. MAX.
- **Quiz: 22 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (Klynging)
1. Prøve 5.A (30 min): Hierarkisk single-link (Manhattan) + tegn dendrogram, ett par per steg (sjanger D, F8).
2. Prøve 5.B (30 min): DBSCAN — klassifiser hvert punkt Core/Border/Noise + finn klyngene (sjanger E, F6).
3. Prøve 5.C (20 min): k-means-teori — fordeler/ulemper, init-følsomhet, bisecting (sjanger F).
4. Prøve 5.D (20 min): Klyngevalidering + én k-means-iterasjon på gitte punkter (sjanger F).

---

### Del 6 — Eksamenstrening

> Siste del samler bankerrepetisjonen, sjangerguiden og de tre komplette firetimers
> øvingseksamenene. Hvert sett dekker **alle fem søyler** (slik reell eksamen gjør), med
> løsningsforslag skrevet slik sensor vil se dem («vis regnestykket») og delpoeng-notater.
> Bygges av én agent som leser HELE skjelettet.

#### Kapittel 6.1: Bankerrepetisjon og sjangerguide (A–L)

- **id:** `tdt4300-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4300-0-1` · **kapitteltype:** sjangerguide
- **description:** Kondensert repetisjon av de to bankerne (Jaccard, Apriori) og alle tolv sjangre A–L med løsningsoppskriftene fra drillkapitlene, pluss de elleve fellene samlet.
- **Eksamensbelegg:** Tverrgående — samler alle sjangre. Prioritet: **perfekt** (siste-uke-repetisjon).
- **Innholdskontrakt:** `text`/`collapsible` **bankersporet**: Jaccard-oppskriften (`M11/(M11+M01+M10)`, tell før brøk) og Apriori-oppskriften (tell → `Fk-1×Fk-1` → prune → gjenta) i kortform. `collapsible` **sjangerguide A–L** med løsningsoppskrift per sjanger (fra 1.3, 1.6, 2.4, 3.6, 4.3, 5.5). `warning` **feilkatalogen F1–F11** samlet, hver med henvisning til kapitlet som forebygger den. 6–10 blandede hurtigoppgaver (én per søyle) på eksamensnivå.
- **Oppgavesjangre:** Alle A–L, kort. Mønstereksempel: «Fem lynoppgaver — én Jaccard, én Apriori-steg, én GAINsplit, én DBSCAN-klassifisering, én kuboid-svarbarhet. Løs alle med synlig metode.»
- **Typiske feil:** Hele feilkatalogen F1–F11 samlet som sjekkliste.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.2: Øvingseksamen 1 (4 timer, alle fem søyler)

- **id:** `tdt4300-6-2` · **number:** 6.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4300-6-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett firetimers sett (kode D) med 5–6 vektede hovedoppgaver som speiler den typiske temafordelingen: Diverse/Jaccard + stjerneskjema + klynging (hierarkisk) + klassifisering (Gini) + assosiasjonsregler (Apriori).
- **Eksamensbelegg:** Speiler «en typisk eksamen» (§2 i analysen), alle fem søyler. Prioritet: **perfekt**.
- **Innholdskontrakt:** 5–6 nyskrevne hovedoppgaver med prosentvekt i overskriften: (1) «Diverse» med **Jaccard** + manglende verdier + asymmetrisk attributt (15–20 %); (2) **stjerneskjema**-tegning fra upresist case (20–25 %); (3) **hierarkisk single-link + dendrogram** (15 %); (4) **Gini/GAINsplit** på treningstabell (20 %); (5) **Apriori** + regelgenerering (20–25 %). Løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse med «vis regnestykket», og `tip`-notat om delpoeng/vekting.
- **Oppgavesjangre:** A + B + D + G + I/J. Mønstereksempel: hele settet er mønstereksemplet.
- **Typiske feil:** De relevante fellene per oppgave (F1, F5, F8, F2, F7/F9) samlet i løsnings-notatene.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.3: Øvingseksamen 2 (4 timer, roterende varianter)

- **id:** `tdt4300-6-3` · **number:** 6.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4300-6-1` · **kapitteltype:** øvingseksamen
- **description:** Andre komplette sett som trekker de andre undervariantene: OLAP-resonnement + DBSCAN + FP-growth + evaluering — for å tvinge bredde utover det første settet.
- **Eksamensbelegg:** Speiler et sett der undervarianten er rullert (DBSCAN i stedet for hierarkisk; FP-growth + Apriori; OLAP-resonnement i stedet for tegning). Prioritet: **perfekt**.
- **Innholdskontrakt:** 5–6 nyskrevne hovedoppgaver: (1) «Diverse» med **Jaccard** + diskretisering (15 %); (2) **OLAP** — materialiserte kuboider (roll-up/drill-down) + **join-indeks** (20 %); (3) **DBSCAN**-klassifisering (15 %); (4) klassifisering — **evaluering** (confusion matrix + kryssvalidering) + kort Gini (20 %); (5) **Apriori + FP-growth** (25 %). Løsningsforslag per oppgave («vis regnestykket») + delpoeng-notat.
- **Oppgavesjangre:** A + C + E + G/H + I/K. Mønstereksempel: hele settet.
- **Typiske feil:** F1, F3/F4, F6, F2, F7 samlet i notatene.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 6.4: Øvingseksamen 3 (4 timer, regn-tungt topp-sett)

- **id:** `tdt4300-6-4` · **number:** 6.4 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4300-6-1` · **kapitteltype:** øvingseksamen
- **description:** Tredje sett vektet mot de regnetunge topp-sjangrene (Jaccard, Gini, Apriori, dendrogram, join-indeks, ECLAT) der bestått/topp skilles på mekanisk presisjon og synlig metode.
- **Eksamensbelegg:** Regn-tungt (60–70 % regn/konstruer), differensierer topp-sjiktet. Prioritet: **perfekt**.
- **Innholdskontrakt:** 5–6 nyskrevne hovedoppgaver vektet mot regning: (1) **Jaccard** + Manhattan (15 %); (2) **stjerneskjema** + join-indeks-konstruksjon (20 %); (3) **hierarkisk single-link + dendrogram** (15 %); (4) **Gini/GAINsplit** med tre attributter (20 %); (5) **Apriori + ECLAT** + konfidens (25 %); der lift/naive Bayes kan komme som bredde-ledd. Løsningsforslag per oppgave («vis regnestykket») + delpoeng-notat som viser hvor mekanisk presisjon gir uttelling.
- **Oppgavesjangre:** A + B/C + D + G + I/J/L. Mønstereksempel: hele settet.
- **Typiske feil:** F1, F4, F8, F2, F7/F9, F5 samlet i notatene, med vekt på at synlig metode > gjettet tall.
- **Quiz: 10 · Flashcards: 0**

**Del 6 får ikke egne temaprøver** (Del 6 **er** øvingseksamenene + bankerrepetisjonen).

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 16+16 = **32** | 16+14 = **30** |
| 1 | 1.1–1.6 | 18+18+20+18+18+20 = **112** | 28+26+10+26+24+10 = **124** |
| 2 | 2.1–2.4 | 16+22+16+22 = **76** | 24+26+22+10 = **82** |
| 3 | 3.1–3.6 | 18+20+16+18+14+22 = **108** | 24+24+18+24+16+10 = **116** |
| 4 | 4.1–4.5 | 16+20+22+18+16 = **92** | 22+26+10+24+22 = **104** |
| 5 | 5.1–5.5 | 16+18+16+14+22 = **86** | 24+24+22+18+10 = **98** |
| 6 | 6.1–6.4 | 18+10+10+10 = **48** | 16+0+0+0 = **16** |
| **Sum** | **32 kap.** | **554 ≥ 500 ✓** | **570 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og eksamensform. **Begge kvoter er bevisst skalert over gulvet**
(554 quiz / 570 flashcards, ikke ~500) fordi TDT4300, tross regnefag-arketypen, er
**begrepsrikt**: fem søyler bærer hver sin mengde navngitte algoritmer (Apriori, FP-growth,
ECLAT, single-link, DBSCAN, k-means, naive Bayes, k-NN), mål (Jaccard, SMC, Manhattan, Gini,
entropi, støtte, konfidens, lift), OLAP-operasjoner (roll-up/drill-down/slice/dice/pivot),
nodetyper (Core/Border/Noise) og modelleringsbegreper (faktatabell, dimensjon, kuboid,
join-indeks) — alt må sitte utenat til en **kode D-eksamen uten oppslag**. Samtidig er faget
**primært regnetungt** (60–70 % regn), så flashcards holdes i det nedre begrepsrike sjiktet
(570, ikke 700+) og **quiz vektes mot metode-/definisjonsgjenkjenning** — selve
regnepresisjonen (Jaccard, Gini, Apriori, dendrogram, DBSCAN) trenes i `exercise`- og
drillkapitlene. Datavarehus/OLAP (Del 1, 124 kort) og assosiasjonsregler (Del 3, 116 kort)
bærer mest flashcards fordi de er tyngst på navngitte begreper; drillkapitlene gir få
flashcards (10 hver — oppgavefokus) og øvingseksamenene (6.2–6.4) gir 0 flashcards (rene
oppgavesett) men bidrar med quiz.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–5 → 20 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med kort løsningsforslag (**synlig
regnestykke**) og poengfordeling. Prøvekapitler bygges som `tdt4300-<del>-prove`
(chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i
delens siste kapittel. Prøvekvotene per del står i sluttblokken til hver del over (Del 1–5).
**Del 0 og Del 6 får ikke egne prøver** (Del 6 **er** øvingseksamenene + bankerrepetisjonen).

### Øvingseksamener (3 komplette sett — se kap. 6.2–6.4)

| Sett | Vinkel | Miks (alle fem søyler) |
|---|---|---|
| Øvingseksamen 1 (6.2) | Typisk sett | Jaccard (A) + stjerneskjema (B) + hierarkisk/dendrogram (D) + Gini (G) + Apriori (I/J) |
| Øvingseksamen 2 (6.3) | Rullert undervariant | Jaccard (A) + OLAP-kuboider/join-indeks (C) + DBSCAN (E) + evaluering (H) + Apriori+FP-growth (I/K) |
| Øvingseksamen 3 (6.4) | Regn-tungt topp-sett | Jaccard (A) + stjerneskjema+join-indeks (B/C) + dendrogram (D) + Gini×3 (G) + Apriori+ECLAT (I/L) |

Til sammen dekker de tre settene alle sjangre A–L og alle fem søyler flere ganger, med begge
klynge-undervariantene (hierarkisk **og** DBSCAN) og alle tre assosiasjonsregel-algoritmene
(Apriori + FP-growth + ECLAT).

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers kode D-eksamen (bestemt kalkulator), 5–6 vektede
   hovedoppgaver, obligatoriske øvinger, engelsk oppgavetekst, og at **bredden er
   eksamensformen** (fem søyler i hvert sett). Bankerne (Jaccard, Apriori) og
   «vis regnestykket»-håndverket (kap. 0.2). Arkivforbeholdet (3 sett, 10+ år, mulig ny
   faglærer → dekk hele emnebeskrivelsen inkl. naive Bayes/k-NN/lift).
2. **Prioriteringskartet** — de fem søylene som alle er «må perfekt» (Del 1–5), med
   bankerne som bestått-sikrer; nivå 2 (FP-growth, OLAP-resonnement, DBSCAN, evaluering)
   avgjør karakteren; nivå 3 (ECLAT, k-means-teori, naive Bayes/k-NN, lift) differensierer.
3. **Sjangerguiden** — de tolv oppgavetypene A–L med løsningsoppskriftene fra drillkapitlene
   (1.3, 1.6, 2.4, 3.6, 4.3, 5.5) i kortform.
4. **Sensorreglene** — metode over svar (vis regnestykket, tall uten metode trekker), presis
   lærebokterminologi, oppgi forutsetninger ved modellering, aggregerbare fakta-mål,
   beslektede korrekte svar godtas, reelt eksempel på teorispørsmål.
5. **Feilkatalogen** — de elleve typiske fellene (F1–F11) samlet, hver med henvisning til
   kapitlet som forebygger den: Jaccard symmetrisk/SMC (2.2/2.4), Gini uten foreldrenode
   (4.2/4.3), drill-down på materialisert kuboid (1.5/1.6), join-indeks som join-resultat
   (1.5/1.6), fakta i dimensjon / ikke-aggregerbart mål (1.2/1.3), DBSCAN uten
   Core/Border/Noise (5.3/5.5), >2 klynger av gangen (5.2/5.5), Apriori uten pruning
   (3.2/3.6), konfidens forvekslet med støtte (3.1/3.3), uke lineært i tidshierarki (1.4),
   stikkordsvar på teorispørsmål (2.1/0.2).
6. **Notasjons-, formel- og algoritmeark** — Jaccard (`M11/(M11+M01+M10)`), Manhattan/
   Euklidsk, Gini/GAINsplit (m/foreldrenode), entropi/informasjonsgevinst, støtte/konfidens/
   lift, Apriori (`Fk-1×Fk-1` + pruning), FP-growth (conditional pattern base), ECLAT (snitt),
   single-link + dendrogram, DBSCAN (Core/Border/Noise), k-means, naive Bayes,
   accuracy/kryssvalidering, stjerneskjema/kuboid/join-indeks — samlet puggeark for kode D.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 1
   (datavarehus/OLAP — rammen) → Del 2 (dataforbehandling/likhet — Jaccard-banker) → Del 3
   (assosiasjonsregler — Apriori-banker) → Del 4 (klassifisering — Gini) → Del 5 (klynging —
   dendrogram + DBSCAN) → prøvene underveis → de tre øvingssettene (6.2–6.4) de siste ukene
   under tidspress (240 min), med bevisst trening på å vise regnestykket.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4300` med alle 32 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («4.2», ALDRI lineær «14» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 4.2»).
2. **Del 0** (kap. 0.1–0.2) — etablerer sjangernavnene A–L, frekvenstallene, de fem søylene,
   bankerne, arkivforbeholdet og «vis regnestykket»-håndverket resten refererer til.
3. **Temadelene i avhengighetsrekkefølge**: Del 1 (datavarehus/OLAP — rammen) → Del 2
   (dataforbehandling/likhet; likhetsmålene brukes i Del 5) → Del 3 (assosiasjonsregler;
   uavhengig) → Del 4 (klassifisering; uavhengig) → Del 5 (klynging; bruker avstandsmålene
   fra 2.2). Én agent per hel del (jf. PRODUKSJONSLOYPE fase 4); Del 1 og Del 3 er 6
   kapitler — kan deles, men gi begge agentene HELE delens kontrakter.
4. Del 6 (eksamenstreningen til slutt — gjenbruker alle sjangre; bygges av én agent som
   leser HELE skjelettet).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.
6. **Navigasjon/wiring**: NTNU legges inn i `src/app/bok/trinn/hoyere/institusjoner.ts`
   (`slug: 'ntnu'`, `fullName: 'Norges teknisk-naturvitenskapelige universitet'`) hvis den
   ikke finnes fra tdt4145/tdt4171; `tdt4300` legges under NTNU med visningsnavn
   «TDT4300 Datavarehus og datagruvedrift». **Kryssbok-lenker til TDT4145** legges KUN inn
   hvis TDT4145-boka er live på byggetidspunktet (per nå bare skjelett) — ellers beskrives
   forkunnskapen i prosa uten lenke (README: «Lenk kun til kapitler som finnes»).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn; `\\` for LaTeX-kommandoer; anbefal `json.dump` i byggekontrakten);
  `npm run build` grønn.
- [ ] **Pensumnotasjon-konsistens**: Jaccard `M11/(M11+M01+M10)`, Manhattan `Σ|xi−yi|`, Gini
  `1−Σ_j [p(j|t)]²`, GAINsplit `GINI(parent)−Σ_i (n_i/n)·GINI(i)`, støtte `s(X)=antall(X)/N`,
  konfidens `c=s(X∪Y)/s(X)`, lift `c/s(Y)`, Apriori `Fk-1×Fk-1`; engelsk fagterm kun i
  parentes ved første forekomst.
- [ ] **«Vis regnestykket» i alle regnende løsningsforslag**: Jaccard (tell M11/M01/M10 før
  brøk), Gini (foreldrenode + hver barne-Gini før GAINsplit), Apriori (støttetall per steg +
  markerte prunede), konfidens (teller/nevner symbolsk). Drill-/eksamenscasene har margnotater
  om at synlig metode gir uttelling og et gjettet tall uten metode trekker.
- [ ] **De sju hovedfellene som warnings**: F1 Jaccard symmetrisk/SMC (2.2/2.4), F2 Gini uten
  foreldrenode (4.2/4.3), F3 drill-down på materialisert kuboid (1.5/1.6), F4 join-indeks som
  join-resultat = 0 poeng (1.5/1.6), F5 fakta i dimensjon / ikke-aggregerbart mål (1.2/1.3),
  F6 DBSCAN uten Core/Border/Noise (5.3/5.5), F7 Apriori uten pruning (3.2/3.6) — hver har
  eksplisitt `warning`-blokk. Tilleggsfellene F8–F11 der de hører hjemme.
- [ ] **Bankerne**: Jaccard (2.2/2.4) og Apriori (3.2/3.6) har eget drillspor med
  sensor-kommentert case og 8–15 oppgaver på eksamensnivå; bankerrepetisjonen i 6.1.
- [ ] **Aggregerbare fakta-mål**: kap. 1.2/1.3 har eksplisitt regel + `warning` (F5) om at
  fakta-mål må gi mening ved aggregering og hører i faktatabellen.
- [ ] **Notasjons-, formel- og algoritmeliste per delkapittel**: hvert delkapittel som bruker
  formler/algoritmer har `collapsible` «Notasjons-, formel- og algoritmeliste» rett etter
  Forkunnskaper, som forklarer ALLE formler, algoritmer (m/inn-ut-kontrakt) og
  modellbegreper brukt i delkapitlet (per delkapittel, ikke arv). Unntak kun for helt
  formelfrie teori-avsnitt.
- [ ] **Algoritme-prosedyrer**: Apriori (3.2), FP-growth (3.4), ECLAT (3.5), Gini/GAINsplit
  (4.2), naive Bayes (4.4), k-means (5.1), single-link (5.2), DBSCAN (5.3) har hver en
  `theorem`-blokk med nyskrevet pensum-stil prosedyre; apriori-prinsippet og roll-up/
  drill-down-regelen som `theorem`-nøkkelresultater.
- [ ] **Bredde-dekning**: naive Bayes + k-NN (4.4) og lift (3.1) er dekket tross ingen
  arkivforekomst; arkivforbeholdet står i Del 0 (`(verifiser)` der pensum kan ha endret seg
  til 2027).
- [ ] **Klynge-undervariantene**: både hierarkisk single-link + dendrogram (5.2/5.5) OG DBSCAN
  (5.3/5.5) er fullt drillet (undervarianten rullerer — begge kan komme).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå, «vis
  regnestykket»), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 554 og flashcard-sum ≥ 570** per kvotetabellen (§5); quiz kalibrert som
  metode-/faktakontroll, `options[0]` = riktig svar; flashcards kalibrert som begrep ↔
  definisjon/formel ↔ egenskap.
- [ ] **Prøver**: 4 per temadel 1–5 (20 stk) + 3 øvingseksamener (kap. 6.2–6.4) som sammen
  dekker sjangrene A–L og alle fem søyler flere ganger.
- [ ] **Opphavsrett**: ALLE transaksjonstabeller, punktmengder, treningsdata, stjerneskjema-
  case, bit-vektorer og tallverdier nyskrevne; algoritmenavn, standardnotasjon og faglige
  definisjoner er allmenn faglig notasjon, men ingen oppgavetekster/løsningsskisser fra
  reelle sett gjengis; pensumlitteratur (Han/Kamber/Pei; Tan/Steinbach/Kumar) refereres
  (forfatter/verk/begrep), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
