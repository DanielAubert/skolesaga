# Eksamensanalyse: TDT4300 Datavarehus og datagruvedrift (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **3 unike eksamenssett med offisielle løsningsskisser** fra NTNU: ordinær vår 2015, ordinær vår 2016 og kontinuasjonseksamen august 2016 (`K2016`). Alle tre er levert med sensor-løsningsskisse (`lf`), i tillegg finnes språkvarianter (bokmål/nynorsk/engelsk) av oppgavesettene. Faglærer i hele arkivperioden er **Kjetil Nørvåg** (Institutt for datateknologi og informatikk). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det, men **arkivet er lite (3 sett fra to nabo-årganger)**; se ærlighetsforbeholdet i punkt 8.

**Statusverifisering (WebFetch mot NTNUs emneside, 2026-07-08):** TDT4300 er **AKTIVT** — neste oppsetting er **vår 2027** ved NTNU Trondheim. Vurderingsform: **skriftlig skoleeksamen, 4 timer, hjelpemiddelkode D** (ingen trykte/håndskrevne hjelpemidler; bestemt, enkel kalkulator tillatt), i Inspera. Obligatoriske øvinger kreves for å gå opp. Undervisning på engelsk. Forkunnskap: TDT4145 eller tilsvarende. Dette formatet er **identisk** med formatet i arkivet (2015–2016) — en sjelden stabil ramme.

---

## 1. Eksamensform og utvikling

### Gjeldende vurderingsform

Faget vurderes med **én avsluttende skriftlig skoleeksamen (4 timer, 100 %)**, hjelpemiddelkode **D** (bestemt, enkel kalkulator; ingen oppslag/formelark), karakterskala A–F. Ingen deleksamen eller mappevurdering — men **obligatoriske øvinger** må være godkjent for å få gå opp. Til forskjell fra TDT4145 (som har tredelt vurdering) er alt her konsentrert i én prøve, og hele pensumbredden testes i det samme settet.

### Settenes oppbygning (svært stabil)

Alle tre arkivsettene følger **samme mal**: 5–6 nummererte hovedoppgaver med prosentvekt oppgitt i overskriften, ofte delt i a/b/c med egen delvekt. Malen er:

| Oppgave | Tema | Typisk vekt |
|---|---|---|
| **Oppg. 1 «Diverse»** | Data(for)behandling: likhetsmål (Jaccard), manglende verdier, outliere, diskretisering, asymmetriske attributter, data-vasking | 15–20 % |
| **Oppg. 2** | Datavarehus-modellering (stjerneskjema) og/eller OLAP-konsepter | 15–30 % |
| **Oppg. 3–4** | Klynging (hierarkisk / DBSCAN / k-means) | 10–20 % |
| **Oppg. 4–5** | Klassifisering (beslutningstre + Gini, evaluering) | 10–25 % |
| **Oppg. 5–6** | Assosiasjonsregler (Apriori, FP-growth, ECLAT) | 20–25 % |

**Konsekvens for læreboka.** Formatet har vært påfallende likt i hele arkivet og samsvarer med det NTNU annonserer for 2027. Bygg mot en **4-timers papir-/Inspera-eksamen der alle fem pensumsøyler kommer i hvert sett** (se punkt 2). Det er en **bred, ikke smal, eksamen**: du kan ikke droppe et helt tema. Studenten regner for hånd/kalkulator og tegner (stjerneskjema, dendrogram, FP-tre) — ingen oppslag, så definisjoner, algoritme-steg og formler (Gini, Jaccard, støtte/konfidens) må sitte i hodet.

### Løsningsskissenes karakter (viktig føring)

Alle tre `lf` åpner med samme forbehold: *«ikkje fullstendige løysingar … kun skisse med viktige element … det kan vere andre svar enn dei som er gjeve om ein har god grunngjeving.»* Sensuren er altså **metode- og begrunnelsesorientert**, ikke fasit-mekanisk. Flere steder står «Sjå læreboka» der svaret er ren gjengivelse av lærebokstoff — et signal om at **presis lærebokterminologi forventes**.

---

## 2. Temafrekvens

Celleverdi = forekommer temaet i minst én (del)oppgave i settet. Bare 3 sett, så gjenganger-score er `x/3` og må leses som en **indikasjon**, ikke robust statistikk.

### Tabell A — De fem søylene (hovedtemaer)

| Tema | V2015 | V2016 | K2016 | **Score** |
|---|:-:|:-:|:-:|:-:|
| **Assosiasjonsregler** (Apriori + FP-growth/ECLAT/konfidens) | ✓ | ✓ | ✓ | **3/3 = 100 %** |
| **Klynging** (hierarkisk / DBSCAN / k-means) | ✓ | ✓ | ✓ | **3/3 = 100 %** |
| **Klassifisering** (beslutningstre + Gini + evaluering) | ✓ | ✓ | ✓ | **3/3 = 100 %** |
| **Datavarehus / OLAP** (stjerneskjema, kuboider, join-indeks, konsepthierarki) | ✓ | ✓ | ✓ | **3/3 = 100 %** |
| **Dataforbehandling & likhet** (Jaccard, missing values, outlier, diskretisering) | ✓ | ✓ | ✓ | **3/3 = 100 %** |

**Alle fem søyler kom i alle tre settene.** Dette er analysens klareste funn.

### Tabell B — Undertemaer (hvilken variant testes)

| Undertema | V2015 | V2016 | K2016 | **Score** | Type |
|---|:-:|:-:|:-:|:-:|:--|
| **Jaccard-koeffisient** på bit-vektorer (asymmetrisk) | ✓ | ✓ | ✓ | **3/3** | Regn |
| **Apriori** — frekvente elementsett m/min. støtte | ✓ | ✓ | ✓ | **3/3** | Regn |
| **Stjerneskjema** (tegn datavarehus-modell) | ✓ | ✓ | – | 2/3 | Konstruer |
| **Beslutningstre + Gini/GAINsplit** (regn split) | ✓ | ✓ | (teori) | 2/3 regn | Regn |
| **Hierarkisk agglomerativ klynging** (MIN/single-link, Manhattan, dendrogram) | ✓ | – | ✓ | 2/3 | Konstruer |
| **FP-growth / FP-tre** (conditional pattern base) | – | ✓ | ✓ | 2/3 | Konstruer |
| **OLAP-kuboider** (materialisering, roll-up vs. drill-down) | (konsepthier.) | ✓ | ✓ | 2/3 | Forklar/resonner |
| **Evaluering** (confusion matrix/accuracy, kryssvalidering) | ✓ | ✓ | – | 2/3 | Forklar/regn |
| **DBSCAN** (Core/Border/Noise, MinPts, Eps) | – | ✓ | – | 1/3 | Konstruer |
| **Join-indeks** (struktur og innhold) | – | ✓ | – | 1/3 | Konstruer |
| **ECLAT** (vertikal tid-liste, snitt for støtte) | – | – | ✓ | 1/3 | Regn |
| **Assosiasjonsregler fra elementsett** (konfidens per regel) | ✓ | – | – | 1/3 | Regn |
| **k-means-varianter** (fordeler/ulemper, bisecting) | ✓ | – | ✓ | 2/3 | Forklar |
| **Konsepthierarki** (år-kvartal-uke-lattice) | ✓ | – | ✓ | 2/3 | Forklar/resonner |

**Viktigste funn:**

1. **Fem garanterte søyler — ingen kjerneoppgave å hoppe over.** Assosiasjonsregler, klynging, klassifisering, datavarehus/OLAP og dataforbehandling er i *hvert* sett. Bredden *er* eksamensformen.

2. **To «bankere» du kan regne med hver gang:** (a) **Jaccard-koeffisient på bit-vektorer** som del av «Diverse»-oppgaven (3/3, alltid samme oppskrift: asymmetrisk `M11/(M11+M01+M10)`), og (b) en **Apriori-oppgave** med frekvente elementsett (3/3, samme metode: tell støtte, generer kandidater, prune).

3. **Innen hver søyle rullerer undervarianten.** Klynging veksler mellom hierarkisk (single-link + dendrogram) og DBSCAN. Assosiasjonsregler veksler mellom ren Apriori, FP-growth og ECLAT — men Apriori er alltid med. Klassifisering veksler mellom full Gini-utregning og rene teorispørsmål. **Lærdom: dekk alle undervariantene**, for du vet ikke hvilken som trekkes.

4. **Sterk gjenbruk av datasett.** Klynge-datasettet med 15–16 punkter (X,Y) er *identisk* i V2016 og K2016 (samme punkter, ulik algoritme). Bilforsikrings-/Gini-tabellene og handlekurv-transaksjonene resirkuleres med små variasjoner. **Å øve på arkivet gir svært direkte overføring.**

5. **Regnetungt.** Anslagsvis **60–70 % av vekten er regn/konstruer** (Jaccard, Gini-split, Apriori-støtte, dendrogram, FP-tre, DBSCAN-klassifisering, join-indeks, stjerneskjema-tegning) og **30–40 % er forklar/teori** (definisjoner, fordeler/ulemper, OLAP-konsepter). Kalkulatoren brukes aktivt (Gini, Jaccard).

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen. «Krav» oppsummerer løsningsskissens foretrukne metode og presisjonsnivå.

### A. «Diverse» — dataforbehandling og likhetsmål (åpningsoppgaven)
- **Form:** 3–4 uavhengige småspørsmål (15–20 %). Alltid inkludert: **Jaccard-koeffisient** på to bit-vektorer. Ellers roterer: manglende verdier, outliere, asymmetriske attributter, diskretisering av kontinuerlige verdier, data-vasking av web-loggdata.
- **Krav:** For **Jaccard** brukes den *asymmetriske* varianten: kun 1-1-treff og 1-0/0-1-avvik teller, `J = M11 / (M11 + M01 + M10)` — nuller-mot-nuller (`M00`) ignoreres. **Vis regnestykket** (sensor trekker «der det manglar noko som forklarar talet»). For **manglende verdier**: oppgi minst 3 strategier (fjern objektet, estimer/interpoler verdien, ignorer attributtet). For **diskretisering**: bestem antall kategorier `n` og `n−1` splittpunkter; unsupervised (lik bredde/lik frekvens/k-means) vs. supervised. **Asymmetrisk attributt:** kun tilstedeværelse (verdi ≠ 0) er interessant; forklar med reelt eksempel (fag en student tar, varer i en handlekurv) — ikke bare stikkordet.
- **Frekvens:** 100 % (Jaccard 3/3).

### B. Datavarehus-modellering — stjerneskjema
- **Form:** Tekstlig «case» (Netflix-visninger, bilskader/forsikring). Velg ut fakta og dimensjoner og **tegn et stjerneskjema** (15–30 %). «Beskrivelsen er upresis — det er en del av oppgaven å velge ut det som skal med.»
- **Krav:** Én **faktatabell** med (a) fremmednøkler til dimensjonene og (b) **numeriske, aggregerbare fakta-mål** — sensor understreker at *«fakta-attributt må gje meining ved aggregering»*. Egne **dimensjonstabeller** (typisk tid, lokasjon/land, produkt/biltype, kunde) med attributter organisert i konsepthierarki. **Oppgi forutsetninger.** Faste trekk-grunner: manglende dimensjonstabell (særlig lokasjon), fakta lagt i en dimensjonstabell i stedet for faktatabellen, manglende sentral måldimensjon (f.eks. skadetype). Ved trivielle case er sensuren *strengere* på detaljene.
- **Frekvens:** 2/3 (tegnet); datavarehus-tema totalt 3/3.

### C. OLAP — kuboider, materialisering, join-indeks, konsepthierarki
- **Form:** Enten teori (forklar subject-oriented/integrated/time-variant/nonvolatile; enterprise warehouse vs. data mart vs. virtuelt varehus; stjerne vs. snøflak; materialisering) **eller** regne-/resonneringsoppgaver.
- **Krav — materialiserte kuboider:** Avgjør hvilke som kan svare på en spørring. Nøkkelinnsikt: **roll-up (videre aggregering) er lov, drill-down er ikke** — du kan aggregere `city → province`, men ikke bryte ned en allerede aggregert kuboid. En kuboid låst til `year = 2004` kan ikke svare for `year = 2006`. **Join-indeks:** vis som **tabell med (dimensjonsnøkkel, faktatuppel-ID)-par** (liste-form også godtatt). **Felle:** hvis studenten leverer det ferdige *join-resultatet* i stedet for indeksen → **0 poeng** (viser at join-indeks er misforstått). **Konsepthierarki:** «uke» passer *ikke* rent inn i år-kvartal-måned-dag; må ordnes som et **gitter (lattice)** siden uker krysser månedsgrenser.
- **Frekvens:** OLAP-regne/-resonner 2/3; DW/OLAP-tema 3/3.

### D. Klynging — hierarkisk agglomerativ (single-link + dendrogram)
- **Form:** Gitt 8–16 2D-punkter, utfør **agglomerativ klynging med MIN (single link)** og **Manhattan-distanse**, og **tegn dendrogrammet**.
- **Krav:** Slå sammen **to klynger av gangen**, alltid paret med minste MIN-avstand. Vis sammenslåingsrekkefølgen (dendrogrammet dokumenterer den). Grafisk løsning godtas «om ein forklarer korleis avstand kan reknast ut». Manhattan: `|x1−x2| + |y1−y2|`.
- **Frekvens:** 2/3.

### E. Klynging — DBSCAN
- **Form:** Gitt 2D-punkter, `MinPts` og `Eps`, klassifiser hvert punkt og finn klyngene (Manhattan-distanse).
- **Krav:** Klassifiser hvert punkt som **kjerne (Core) / grense (Border) / støy (Noise/outlier)** basert på antall punkter innen `Eps` (inkludert punktet selv). Identifiser den/de sammenhengende klyngen(e) av tetthetsforbundne kjernepunkter; pek ut støypunktene. (I V2016: én klynge + to støypunkter.)
- **Frekvens:** 1/3.

### F. Klynging — k-means-teori
- **Krav:** Fordeler (lav beregnings-/minnekostnad) og ulemper (finner kun globulære klynger; sliter med ulik størrelse/tetthet og outliere; krever «senter»; sensitiv for initiale sentroider; må velge antall klynger `k`). **Bisecting k-means:** mindre følsom for initialisering. **Klyngevalidering:** unngå å finne mønster i støy; sammenlikn algoritmer/klyngesett/enkeltklynger; bestem antall klynger.
- **Frekvens:** teori 2/3.

### G. Klassifisering — beslutningstre med Gini/GAINsplit
- **Form:** Gitt en treningstabell (fotballkamper → resultat; forsikringskunder → skade), **regn ut GAINsplit for to gitte attributter** og velg det beste for rot-splitten.
- **Krav — den mekaniske oppskriften sensor forventer:**
  - `GINI(t) = 1 − Σ_j [p(j|t)]²` for hver node.
  - Regn **foreldrenoden først** (sensor: *«Viktig å ha med GAIN inkl. p(j|Parent)»*).
  - `GAINsplit = GINI(parent) − Σ_i (n_i/n)·GINI(i)` — vektet sum over barnenodene.
  - **Velg attributtet med høyest GAIN.** Merk: hvis begge gir negativ gain, bør ingen velges.
  - Vis alle mellomregninger (per gren: antall i hver klasse → Gini → vektet bidrag).
- **Frekvens:** utregning 2/3; tema 3/3.

### H. Klassifisering — evaluering (confusion matrix, accuracy, kryssvalidering)
- **Krav:** **Confusion matrix** = korrekt klasse mot predikert klasse (TP/FP/FN/TN); `accuracy = (TP+TN)/total`. **Kryssvalidering:** partisjoner data i `k` disjunkte delmengder; `k`-fold = tren på `k−1`, test på den siste, gjenta; metrikk = gjennomsnittlig ytelse. Brukes til å **estimere klassifikatorens ytelse**. (Oppgaven kan inneholde to spørsmål — svar på begge.)
- **Frekvens:** 2/3.

### I. Assosiasjonsregler — Apriori
- **Form:** Gitt handlekurv-transaksjoner, finn **alle frekvente elementsett** med gitt minimumsstøtte (angitt som støttetall, f.eks. «≥ 50 % = support count 4»). Vis kandidatgenereringen (`Fk-1 × Fk-1`).
- **Krav:** Tell 1-elementstøtte → behold frekvente → generer 2-kandidater → tell → osv. **Prune kandidater med ikke-frekvente delsett** umiddelbart (marker dem, f.eks. `ACG*`). Gå til det største frekvente elementsettet finnes. Vis støttetall i hvert steg.
- **Frekvens:** 3/3.

### J. Assosiasjonsregler — regler + konfidens
- **Krav:** Fra et frekvent elementsett (f.eks. `BDE`), generer alle kandidatregler og regn **konfidens = støtte(hele settet) / støtte(venstresiden)**; behold de over terskel (f.eks. 75 %). Vis utregningen per regel.
- **Frekvens:** 1/3 (men konfidens/støtte er kjernebegrep alle bør kunne).

### K. Assosiasjonsregler — FP-growth / FP-tre
- **Krav:** (1) Sorter elementene i hver transaksjon på **synkende global støtte**, bygg **FP-treet**. (2) For hvert element (nedenfra): finn **conditional pattern base**, bygg **conditional FP-tree**, les ut frekvente elementsett. **Sensornyanse:** ulik sortering av elementer med *samme* støttetall gir ulike, men like korrekte, trær — dette godtas.
- **Frekvens:** 2/3.

### L. Assosiasjonsregler — ECLAT
- **Krav:** Vertikalt dataformat: for hvert element, list transaksjons-ID-ene det opptrer i. Støtten til et elementsett (f.eks. `AG`) finnes ved **snitt (intersection)** av tid-listene — antall felles TID-er = støttetallet.
- **Frekvens:** 1/3.

---

## 4. Sensorens krav

### Faste metaregler (fra alle tre løsningsskissene)
1. **«Andre svar godtas med god grunngjeving.»** Sensuren er metodeorientert; det finnes sjelden én fasit, særlig ved modellering, FP-tre-sortering og klynge-grafikk.
2. **Vis metoden / begrunn tallet.** Jaccard, Gini og støtte skal ha synlig utregning — «poengtrekk der det manglar noko som forklarar talet».
3. **Oppgi forutsetninger** ved modellering — upresise case *skal* tolkes av kandidaten.
4. **Presis lærebokterminologi** der det bes om definisjoner («Sjå læreboka» i skissene betyr at lærebokformuleringen forventes).
5. **Fakta-mål må være aggregerbare** i stjerneskjema; dette er det gjennomgående modellerings-kravet.

### Hva som skiller nivåene (utledet — arkivet har ikke publiserte karaktergrenser)
- **Bestått:** riktige tall på bankerne (Jaccard, Apriori-støtte), en brukbar stjerneskjema-struktur, korrekte standarddefinisjoner (outlier, kryssvalidering, confusion matrix).
- **Midtsjikt:** korrekt Gini/GAINsplit med foreldrenoden inkludert, riktig dendrogram-rekkefølge, korrekt DBSCAN-klassifisering, riktig FP-tre.
- **Toppsjikt:** fullstendig og konsistent stjerneskjema med gjennomtenkte dimensjoner/konsepthierarkier; korrekt resonnement om materialiserte kuboider (roll-up vs. drill-down); korrekt join-indeks (ikke join-resultat); alle assosiasjonsregel-varianter (Apriori + FP-growth + ECLAT) mekanisk feilfrie.

### Hva som gir uttelling
- **Regnestykke over påstand** — ett korrekt utledet tall med metode slår et gjettet svar.
- **Reelle eksempler** ved teorispørsmål (asymmetrisk attributt, klyngevalidering).
- **Beslektede korrekte svar godtas** (ulik FP-tre-sortering ved likt støttetall; grafisk vs. tabellarisk klyngeløsning; «ja/nei» på uke-i-hierarki med fornuftig begrunnelse).

---

## 5. Typiske feil (eksplisitt eller implisitt i skissene)

1. **Jaccard som symmetrisk (SMC)** — å ta med `M00` (0-0-treff). Bit-vektor-Jaccard er *asymmetrisk*: `M11/(M11+M01+M10)`.
2. **Manglende utregning** på Jaccard/Gini/støtte — tallet uten metoden trekker.
3. **Gini uten foreldrenoden** — glemmer `GINI(parent)`-leddet, så GAINsplit blir feil (eksplisitt sensor-advarsel).
4. **Drill-down på materialisert kuboid** — tror man kan bryte ned en aggregert kuboid; kun roll-up (videre aggregering) er mulig.
5. **Join-indeks levert som join-resultat** — gir 0 poeng; indeksen er (nøkkel, tuppel-ID)-par, ikke den sammenslåtte tabellen.
6. **Fakta-mål i dimensjonstabell** i stjerneskjema, eller manglende dimensjonstabell (typisk lokasjon) / ikke-aggregerbare fakta.
7. **DBSCAN uten Core/Border/Noise-klassifisering** — å hoppe rett til klyngen uten å klassifisere hvert punkt.
8. **Slå sammen mer enn to klynger av gangen** i hierarkisk agglomerativ klynging — kun ett par per steg.
9. **Apriori uten pruning** — beholde kandidater som har ikke-frekvente delsett i stedet for å prune dem umiddelbart.
10. **Konfidens forvekslet med støtte** — konfidens er `støtte(regel)/støtte(venstreside)`, ikke `støtte(regel)/N`.
11. **Uke plassert lineært i tidshierarkiet** — uke krysser månedsgrenser og krever gitter (lattice).
12. **Stikkordsvar på teorispørsmål** — «asymmetrisk attributt = handlekurv» uten forklaring gir lite.

---

## 6. Algoritme- og formelapparat

Læreboka bør bruke nøyaktig disse konvensjonene, siden oppgavene og skissene gjør det.

### Dataforbehandling og likhet
- **Jaccard (asymmetrisk binær):** `J = M11 / (M11 + M01 + M10)`.
- **Distanser:** Manhattan `Σ|xi − yi|` (brukt i klynging), Euklidsk der relevant.
- Manglende verdier: fjern objekt / estimer / interpoler / ignorer attributt. Diskretisering: `n` kategorier, `n−1` splittpunkter; lik bredde / lik frekvens / k-means. Asymmetriske attributter, outliere.

### Datavarehus og OLAP (Han-tradisjonen)
- **Stjerneskjema** (faktatabell + denormaliserte dimensjonstabeller) vs. **snøflak** (normaliserte dimensjoner). Faktatabell: fremmednøkler + numeriske, additive mål.
- Definisjon: *subject-oriented, integrated, time-variant, nonvolatile*. Enterprise warehouse / **data mart** / virtuelt varehus.
- **OLAP-kuben og kuboid-gitteret**; operasjoner **roll-up, drill-down, slice, dice, pivot**. Materialisering av kuboider (delvis materialisering — hvilke lønner seg). **Join-indeks** (bitmap/tuppel-ID-par). **Konsepthierarki** (lineær vs. gitter; uke-problemet).

### Klynging (Tan/Han-tradisjonen)
- **k-means** (globulære klynger, sentroide, sensitiv for init/k), **bisecting k-means**.
- **Hierarkisk agglomerativ:** MIN/single-link, MAX/complete-link, group average; **dendrogram**.
- **DBSCAN:** `Eps`, `MinPts`, **Core/Border/Noise**, tetthetsforbundethet.
- **Klyngevalidering** (unngå mønster i støy; sammenlikne algoritmer/klynger).

### Klassifisering
- **Beslutningstre** med **Gini-indeks:** `GINI(t) = 1 − Σ_j [p(j|t)]²`; `GAINsplit = GINI(parent) − Σ_i (n_i/n)·GINI(i)`. (Entropi/informasjonsgevinst som alternativ urenhetsmål bør også dekkes.)
- **Evaluering:** confusion matrix (TP/FP/FN/TN), `accuracy = (TP+TN)/N`; **k-fold kryssvalidering**. Naive Bayes / k-NN nevnt i fagbeskrivelsen som pensum (ikke regnet i arkivet, men bør dekkes for bredde).

### Assosiasjonsregler
- **Støtte** `s(X) = antall(X)/N`, **konfidens** `c(X→Y) = s(X∪Y)/s(X)`, **lift** `= c(X→Y)/s(Y)` (lift nevnt i fagbeskrivelsen; ikke eksplisitt i arkivet, men standard og bør med).
- **Apriori:** kandidatgenerering `Fk-1 × Fk-1`, **apriori-pruning** (alle delsett må være frekvente).
- **FP-growth:** FP-tre, header table, conditional pattern base, conditional FP-tree.
- **ECLAT:** vertikalt tid-liste-format, støtte via snitt av tid-lister.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kom i alle 3 settene)
1. **Apriori + frekvente elementsett** — 3/3. Tell støtte, `Fk-1 × Fk-1`, prune ikke-frekvente delsett, vis alle steg. Kunn også konfidens per regel.
2. **Jaccard-koeffisient** (asymmetrisk) — 3/3, den sikreste enkeltoppgaven. Fast oppskrift, vis regnestykket.
3. **Beslutningstre med Gini/GAINsplit** — regn 2/3, tema 3/3. Foreldrenode først, vektet barne-Gini, velg høyest gain.
4. **Stjerneskjema-modellering** — 2/3 tegnet, DW-tema 3/3. Aggregerbare fakta, riktige dimensjoner, oppgi forutsetninger.
5. **Hierarkisk agglomerativ klynging** (single-link + dendrogram, Manhattan) — 2/3. Ett par per steg, vis rekkefølge.

### Nivå 2 — må kunne (avgjør karakteren)
6. **FP-growth / FP-tre** — 2/3. Sortering på støtte, conditional pattern base.
7. **OLAP-resonnement** — materialiserte kuboider (roll-up vs. drill-down), join-indeks, konsepthierarki/lattice.
8. **DBSCAN** — 1/3, men distinkt. Core/Border/Noise-klassifisering + klyngeidentifikasjon.
9. **Evaluering** — confusion matrix/accuracy, kryssvalidering.
10. **Datavarehus-teori** — subject-oriented/integrated/time-variant/nonvolatile, data mart, stjerne vs. snøflak.

### Nivå 3 — bør kjenne til (lavfrekvent / differensierer)
11. **ECLAT** — 1/3. Vertikale tid-lister, snitt for støtte.
12. **k-means-teori** — fordeler/ulemper, bisecting k-means.
13. **Dataforbehandling-varianter** — outlier, diskretisering, manglende verdier, data-vasking av web-data.
14. **Pensum nevnt i emnebeskrivelsen, men ikke sett i arkivet:** naive Bayes, k-NN, lift. Dekk kort for full bredde — kan dukke opp i nyere sett siden faglærer trolig er ny til 2027.

### Prognose for neste ordinære eksamen (4 t, kode D)
Forvent et **bredt sett med alle fem søyler**: (1) en «Diverse»-oppgave med **Jaccard** + 2–3 forbehandlingsspørsmål; (2) en **modellerings-** eller **OLAP-oppgave** (stjerneskjema å tegne, eller kuboid-/join-indeks-resonnement); (3) en **klynge-oppgave** (hierarkisk med dendrogram *eller* DBSCAN — øv på begge); (4) en **klassifiserings-oppgave** (Gini-utregning *eller* teori + evaluering); (5) en **assosiasjonsregel-oppgave** (alltid Apriori, ofte + FP-growth eller ECLAT). Studenten som kan regne Jaccard og Gini feilfritt med kalkulator, kjøre Apriori/FP-growth/ECLAT mekanisk, tegne stjerneskjema og dendrogram, og klassifisere DBSCAN-punkter, dekker eksamensbredden. **Advarsel:** arkivet er fra 2015–2016 med samme faglærer; 2027-oppsettingen kan ha ny faglærer og noe forskjøvet vekt (mer naive Bayes / lift / evaluering). Behersk hele emnebeskrivelsens pensum, ikke bare arkivvariantene.

### Anbefalt arketype
**Bred, regnetung «fem-søyle»-arketype** (jf. TDT4171-modellen mer enn TDT4145): lærebok organisert i fem hoveddeler — (I) dataforbehandling & likhet, (II) datavarehus & OLAP, (III) assosiasjonsregler, (IV) klynging, (V) klassifisering & evaluering — der hvert kapittel avsluttes med **gjennomregnede algoritme-eksempler** (Jaccard, Gini-split, Apriori-tabell, FP-tre, dendrogram, DBSCAN-klassifisering) og **eksamensrettede regneoppgaver med full mekanikk vist**. Prioriter «regn og vis metoden» framfor lange teksttunge drøftinger; teori-delene holdes stramme og lærebok-presise (definisjoner som må pugges uten oppslag). Legg inn et eget «bankere»-spor for Jaccard og Apriori, siden de kommer garantert.

---

## 8. Kildeliste og forbehold

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4300/`.

**Løsningsskisser lest grundig:**
- `V2015lf` (ordinær vår 2015) + oppgavesett `V2015bm/en/nn`
- `V2016lf` (ordinær vår 2016) + oppgavesett `V2016bm/en/nn`
- `K2016lf` (kontinuasjon august 2016) + oppgavesett `K2016bm`

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse (scratchpad `fagbeskrivelse-tdt4300.md`; kilde <https://www.ntnu.no/studier/emner/TDT4300>), statusverifisert via WebFetch 2026-07-08 (aktiv, neste oppsetting vår 2027, 4 t skoleeksamen kode D).

**Antatt pensumlitteratur** (basert på oppgavestil og eksplisitt referanse i V2015lf til «Han kap. 4, figur 4.10»):
- **Han, Kamber & Pei — *Data Mining: Concepts and Techniques*** (datavarehus, OLAP, kuboider, konsepthierarki-lattice; bekreftet av referansen).
- **Tan, Steinbach & Kumar — *Introduction to Data Mining*** (den klassiske kilden for Gini/GAINsplit, DBSCAN, hierarkisk single-link, Apriori `Fk-1×Fk-1`, FP-growth, ECLAT — hele mining-halvdelen bærer denne bokas notasjon). *Ikke eksplisitt bekreftet i arkivet — antatt.*

**Ærlighetsforbehold om arkivet:**
- **Kun 3 unike sett** fra to nabo-årganger (V2015, V2016, K2016), alle med **samme faglærer (Kjetil Nørvåg)**. Temafrekvensen (`x/3`) er en **indikasjon**, ikke robust statistikk. Funnet «alle fem søyler i hvert sett» er sterkt, men bygger på et smalt og tidsavgrenset materiale.
- **Ingen publiserte karaktergrenser** i arkivet; nivåbeskrivelsene i punkt 4 er utledet av løsningsskissenes vektlegging.
- **10+ år gammelt materiale.** 2027-oppsettingen kan ha ny faglærer og justert vektlegging (fagbeskrivelsen nevner naive Bayes, k-NN og praktiske analyseverktøy som ikke er regnet i arkivet). Læreboka bør derfor dekke **hele emnebeskrivelsens pensum**, med arkivets fem søyler som verifisert kjerne.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsskisser er gjengitt ordrett. Formler og algoritmenotasjon er allmenn faglig notasjon.
</content>
</invoke>
