# Eksamensanalyse: TDT4145 Datamodellering og databasesystemer (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **20 eksamenssett med offisielle sensorveiledninger/løsningsforslag** fra NTNU (vår 2015 – vår 2024): 9 ordinære slutteksamener, 6 kontinuasjonseksamener (`_k`) og 5 semester-/midtprøver (`_m`). Faglærere gjennom hele perioden er **Roger Midtstraum** og **Svein Erik Bratsberg** (Institutt for datateknologi og informatikk). Pensumboka er **Elmasri & Navathe, *Fundamentals of Database Systems***, supplert med instituttets pensumnotat om lagringsstrukturer («Storage definitions»). All ER-notasjon følger Elmasri/Navathe-konvensjonen med `(min,max)`-restriksjoner. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.

---

## 1. Eksamensform og utvikling

### Gjeldende vurderingsform (tredelt)

Faget vurderes i dag med **tre komponenter**: avsluttende skriftlig skoleeksamen **(40 %)**, semesterprøve **(30 %)** og prosjekt **(30 %)**. Karakterskala **A–F**. Hjelpemiddelkode **D** (ingen trykte/håndskrevne hjelpemidler; bestemt, enkel kalkulator). En lærebok mot faget må dekke **både** slutteksamenens fulle bredde og semesterprøvens smalere, men tyngre testede front (se punkt 2). Arkivet inneholder alle tre eksamensslag, men bare skoleeksamen og semesterprøve er dokumentert med oppgaver + fasit.

### Eksamensregimene i arkivet — den viktigste årgangsforskjellen

Faget har gått gjennom **tre distinkte regimer**, og formatet påvirker oppgavesjangeren sterkt:

| Periode | Form | Varighet | Kode | Karakter | Kjennetegn |
|---|---|---|---|---|---|
| **2015–2018** | Papir / tidlig Inspera | **4 t** | D | A–F | 7–9 brede frisvarsoppgaver som dekker hele pensum. Håndskrevne ER-diagram, SQL, utledninger. **Representativt for dybden, ikke for dagens format.** |
| **2019** | Inspera | 4 t | D | A–F | Overgangsår: 22 finoppdelte oppgaver (2–15 %), fortsatt frisvar/tegning. |
| **2020** | Inspera hjemme (covid) | 4 t | **A** | **Bestått/IB** | Alle hjelpemidler, «fyll-inn-boks»-format, lettere og mer oppdelt. **Ikke representativt** (bestått-terskel 41). |
| **2021–2022** | Inspera | **2 t** | **A** | A–F | Rene auto-rettede flervalg/tallsvar; **ER-modell som eneste frisvar** (filopplasting, 34 %). Ingen SQL/relasjonsalgebra/normalisering på slutteksamen disse to årene. |
| **2023 →** | Inspera + papir | **2 t** | **D** | A–F | Flervalg/tallsvar i Inspera, men **ER/EER-modellering og B+-tre-tegning besvares på papir via InsperaScan**. Normalisering/nøkler gjeninnført som flervalg. Regnestykker gjøres med kalkulator (ikke oppslag). |

**Konsekvens for læreboka.** Bygg mot **det gjeldende 2-timers kode-D-formatet (2023 →)**: en blanding av (a) auto-rettede kvantitative flervalgs-/tallsvarsoppgaver for maskineriet (lagring, hashing, join-/sorteringskostnad, aksessveier, 2PL-commitrekkefølge, ARIES REDO/UNDO) og (b) **papirbesvart konstruksjon** for de to tyngste enkeltoppgavene (ER-/EER-modellering og oversettelse/B+-tre). De eldre 4-timers settene (2015–2018) er den beste kilden til **dybdeforståelse og fullstendige utledninger**, men speiler ikke lengden. 2020-settet (kode A, bestått/IB) er en oppgavebank, ikke en formatmal. Studenten må mestre alt **uten oppslagsverk** — pugg av definisjoner, normalformer, kostnadsformler og ARIES-regler er nødvendig.

### Poenggrenser (stabile)

Terskelverdiene er påfallende stabile gjennom hele perioden: **E ≈ 41** (39–41), **D ≈ 52–53**, **C ≈ 64–65**, **B ≈ 76–77**, **A ≈ 86–89**. Bestått-grensen i covid-året 2020 var også 41. Grensene er «tentative» og kan justeres ved sensurslutt.

### Faste føringer (gjentas i nesten alle sett)

1. **«Oppgi dine forutsetninger.»** Ved modellering og skjema-oversettelse: rimelige, oppgitte antagelser legges til grunn ved vurderingen, selv om løsningen avviker fra skissen. Dette er den hyppigst gjentatte instruksen.
2. **Struktur foran detaljmengde.** Ved ER/EER teller «hensiktsmessig overordnet struktur» mer enn små feil og mangler.
3. **Delvis uttelling er regelen**, ofte eksplisitt gradert (f.eks. «2–5 gir full score, kun 4–5 gir 3 av 5»).
4. **Robust sensur.** Oppgaver som viser seg for vanskelige eller feilformulerte tas ut / lempes, dokumentert flere ganger (og etter studentklager i ettertid).

---

## 2. Temafrekvens

Faget tester to halvdeler som fordeles ulikt på de to eksamensslagene:

- **Slutteksamen + kontinuasjon (15 sett):** hele pensum, med tyngdepunkt på maskineriet «under panseret» (lagring, indeksering, kostnad, transaksjoner, recovery) i tillegg til modellering.
- **Semesterprøve (5 sett):** kun den **konseptuelle/logiske** halvdelen — modellering, relasjonsteori, normalisering, SQL/algebra. **Aldri** lagring, indeksering, kostnad, transaksjoner eller recovery.

Derfor to tabeller. Celleverdi = antall sett i årsgruppen der temaet forekommer i minst én oppgave.

### Tabell A — Slutteksamen + kontinuasjon (15 sett)

Årsgrupper: 2015–2017 (6 sett: 3 ordinære + 3 kont), 2018–2020 (5: 3 ord + 2 kont), 2021–2023 (4: 3 ord + 1 kont).

| Tema | 2015–17 (6) | 2018–20 (5) | 2021–23 (4) | **Gjenganger-score** |
|---|---|---|---|---|
| **ARIES / logging / recovery** (analyse, REDO, UNDO, DPT, CLR) | 6 | 5 | 4 | **15/15 = 100 %** |
| **ER-/EER-modellering** (tegn miniverden / tolk / finn feil) | 6 | 5 | 4 | **15/15 = 100 %** |
| **Normalisering** (FD, kandidat-/supernøkler, normalformer, BCNF/3NF) | 6 | 5 | 2 | **13/15 = 87 %** |
| **Tapsløs dekomponering** (fire egenskaper, chase/snitt) | 6 | 5 | 2 | **13/15 = 87 %** |
| **SQL-spørringer** (SELECT/JOIN/GROUP BY/underspørring) | 6 | 5 | 1 | **12/15 = 80 %** |
| **Relasjonsalgebra** (σ, π, ⋈, ×, mengdeoperasjoner) | 6 | 5 | 1 | **12/15 = 80 %** |
| **Spørrekostnad / aksessveier** (antall blokkaksesser) | 5 | 4 | 3 | **12/15 = 80 %** |
| **2PL / låsing / deadlock** (rigorous, commit-rekkefølge, vranglås) | 4 | 4 | 3 | **11/15 = 73 %** |
| **Hashing** (extendible/statisk — konstruer eller regn) | 3 | 3 | 4 | **10/15 = 67 %** |
| **Recovery-egenskaper** (klassifiser: recoverable/ACA/strict) | 4 | 2 | 3 | **9/15 = 60 %** |
| **Transaksjons-/isolasjonsteori** (ACID, WAL, STEAL/NO-FORCE, snapshot) | 3 | 3 | 3 | **9/15 = 60 %** |
| **Indekser / B+-trær** (konstruer/tegn/identifiser struktur) | 2 | 3 | 3 | **8/15 = 53 %** |
| **EER → relasjonsskjema** (oversett spesialisering/kategori) | 3 | 3 | 1 | **7/15 = 47 %** |
| **SQL-DDL/DML** (CREATE TABLE, INSERT/UPDATE/DELETE) | 3 | 4 | 0 | **7/15 = 47 %** |
| **Lagring / filorganisering / blokkberegning** (poster/blokk, antall blokker) | 4 | 2 | 1 | **7/15 = 47 %** |
| **Join- / sorteringskostnad** (nested-loop, ekstern flettesortering) | 3 | 1 | 3 | **7/15 = 47 %** |
| **Serialiserbarhet / presedensgraf** (konflikt, syklus) | 3 | 0 | 3 | **6/15 = 40 %** |
| **«Finn feil i ER-modell»** (pek ut + rett) | 0 | 2 | 0 | **2/15 = 13 %** |

### Tabell B — Semesterprøver (5 sett: 2021m, 2022m, 2023m, 2023mk, 2024m)

| Tema | Antall sett | Score |
|---|---|---|
| **Normalisering** (FD, closure, nøkler, normalformer, MVD/4NF) | 5 | **100 %** |
| **ER-/EER-modellering** (tolk/match/tell relasjoner — nesten aldri tegn) | 5 | **100 %** |
| **SQL-spørringer** (join-varianter, aggregat, radtelling, NULL) | 5 | **100 %** |
| **Relasjonsalgebra + ekvivalens algebra↔SQL** | 5 | **100 %** |
| **Tapsløs dekomponering** | 5 | **100 %** |
| **Lagring / indeks / kostnad / transaksjoner / recovery** | 0 | **0 %** |

**Viktigste funn:**

1. **Faget har ingen enkelt-«kjerneoppgave» — det har to garanterte tyngdepunkt.** På slutteksamen er **ER-/EER-modellering** (100 %, alltid den høyest vektede enkeltoppgaven: 12–35 %) og **ARIES/recovery** (100 %) de to sikreste. På semesterprøven er **normalisering + SQL + modellering** garantert i hvert eneste sett.

2. **Nesten alt kommer nesten hvert år.** 12 av 18 slutteksamenstemaer har ≥ 60 % gjengangerscore. Bredden *er* eksamensformen — du kan ikke droppe et helt tema og satse på flaks. Unntaket «finn feil i ER-modell» (13 %) er sjelden, men distinkt når det kommer (2018, 2020).

3. **Den store advarselen: modelleringsteori forsvinner fra slutteksamen i 2021–2022, men er allestedsnærværende ellers.** De to rene flervalgs-årene (kode A, 2 t) kuttet SQL, relasjonsalgebra og normalisering fra *slutteksamen* — men disse ble da testet på *semesterprøven* i stedet. Med gjeninnføringen i 2023 (kode D) er normalisering + SQL tilbake på slutteksamen. Konklusjon: **normalisering, SQL og relasjonsalgebra er 100 %-sikre samlet sett** — de dukker opp enten på slutteksamen eller semesterprøven, oftest begge.

4. **Regnetunge kvantitative temaer dominerer det nye 2-timersformatet.** Hashing, B+-tre-blokkregning, join-/sorteringskostnad og aksessveier utgjør ryggraden i de auto-rettede tallsvarsoppgavene (2021–2023). Disse må kunne regnes raskt og feilfritt med kalkulator.

5. **Gjenbruk er utbredt.** Sensorene resirkulerer oppgaver med små variasjoner (f.eks. recovery-historiene i 2023k = 2021; hash-oppgaven `h(k)=k mod 4 → 1,11` i både 2021 og 2023k; nested-loop-join-oppgaver på tvers av år). Å øve på arkivet gir svært direkte overføring.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer fasitens foretrukne løsningsmetode og presisjonsnivå.

### A. ER-/EER-modellering fra miniverden (den tyngste enkeltoppgaven)
- **Form:** Tegn et ER-/EER-diagram fra en tekstlig «miniverden» (tegneserier, sykkelløp, vaksinasjonsdatabase, bruktmarked, sensormålinger …). På slutteksamen 2023 → besvares dette **på papir via InsperaScan** (12–35 % av settet).
- **Krav:** Sensor vekter **hensiktsmessige entitets- og relasjonsklasser og korrekt, konsistent bruk av ER-virkemidlene** (nøkkelmarkering, `(min,max)`-restriksjoner, svake entitetsklasser, spesialisering/kategori) høyere enn detaljmengde. Attributter kan tegnes inne i entitetsboksene. **Oppgi forutsetninger** — rimelige antagelser gir uttelling. Faste feller: bruk **to binære relasjonsklasser** der sammenhengene egentlig er parvise, ikke én trinær; gjør ikke en entitetsklasse svak uten at identifikasjonen krever det; sett riktig deltakelse `(0,n)` vs `(1,n)`; plasser attributter på riktig klasse. Uklar fremstilling som gjør kvaliteten uvurderlig kan trekke.
- **Frekvens:** 100 % (slutteksamen); den høyest vektede oppgaven.

### B. «Finn feil i en gitt ER-modell»
- **Krav:** Pek ut hvert problem, og *forklar hvorfor det er feil og hvordan det rettes*. Sensor har typisk **5 tilsiktede feil** (manglende nøkkelmarkering, feil kardinalitet, feilaktig svak entitetsklasse, trinær som burde vært to binære, attributt på feil klasse). Poeng kun for reelle feil **med begrunnelse** — ren omformulering gir null. Noen feil vektes tyngre enn andre.
- **Frekvens:** 13 % (2018, 2020), men distinkt.

### C. EER → relasjonsskjema (oversettelse)
- **Krav:** Oppgi tabeller, attributter, primær- og fremmednøkler. For **spesialisering** vis og **diskuter** standardalternativene: (A) kun superklasse-tabell med `type`-attributt og NULL-bare kolonner, (B) kun subklasse-tabeller, (C) både super- og subklasse. Sensor krever at alternativene **klargjøres og at fordeler/ulemper drøftes** (antall joins, NULL-verdier, plass). For **delvis/overlappende** spesialisering foretrekkes ingen løsning «som sådan» — argumentasjonen teller; ved **delvis** spesialisering *må* superklasse-tabellen finnes, ved **total** spesialisering kan den droppes. Kategori/union-type oversettes med surrogatnøkkel.
- **Frekvens:** 47 % slutteksamen; nær garantert samlet.

### D. SQL-spørringer
- **Krav:** `SELECT … WHERE … LIKE`, `COUNT/SUM/AVG` med `GROUP BY/HAVING/ORDER BY`, underspørringer (`NOT IN`, `NOT EXISTS`), samt DDL/DML (`CREATE TABLE` med PK/FK og `ON DELETE/UPDATE CASCADE`, `INSERT/UPDATE/DELETE`). **Kritisk metodesignal:** skal rader uten treff inkluderes («forlag også uten bøker», «prosjekt uten timeliste») må man bruke **LEFT OUTER JOIN** — sensor trakk eksplisitt ett poeng for `INNER JOIN` (2018). *Nyanse:* i 2019 ble inner join likevel godkjent uten trekk etter studentklager — men regn ikke med lempingen; behersk outer join. Join i `FROM` vs. betingelse i `WHERE`, og natural/inner/equijoin, er likeverdige når riktig brukt (men natural join kan **ikke** brukes ved ulike attributtnavn).
- **Frekvens:** 80 % slutteksamen, 100 % semesterprøve.

### E. Relasjonsalgebra
- **Krav:** Seleksjon/projeksjon/join/mengdeoperasjoner, ofte som «fyll inn boksene A–F» eller «hvilke rader gir spørringen». Grafnotasjon foretrekkes, men tekstnotasjon gir **ikke** trekk. **Pass på boolsk negasjon:** `NOT(A = x AND B = y)` ≡ `(A ≠ x OR B ≠ y)` — **ikke** `(A ≠ x AND B ≠ y)`. Kartesisk produkt vs. equijoin gir ulike resultattabeller (brukes i flervalg om spørring-ekvivalens algebra↔SQL).
- **Frekvens:** 80 % slutteksamen, 100 % semesterprøve.

### F. Normalisering (kjernen i designteorien)
- **Krav — de faste grepene sensor forventer:**
  - **Attributt-tillukning (X⁺)** for å finne kandidat-/supernøkler. Et attributt som aldri står på **høyresiden** av en FD må inngå i *alle* nøkler.
  - **Bestem høyeste normalform** (2NF/3NF/BCNF/4NF) ved å sjekke hver FD mot definisjonen: 2NF = ingen delvis avhengighet av nøkkel; 3NF = venstresiden er supernøkkel *eller* høyresiden er nøkkelattributt; BCNF = supernøkkel på venstresiden; 4NF gjelder MVD-er (X ↠ Y ⇒ X supernøkkel).
  - **Utled FD-er** via Armstrongs aksiomer / pseudotransitivitet (f.eks. WY→Z og X→Y ⇒ WX→Z, vist ved tillukning eller augmentasjon + transitivitet).
  - Ved **«lag et originalt eksempel»** (f.eks. 2NF men ikke 3NF): kopiering av lærebok-/forelesningseksempelet (PostNr→PostSted o.l.) gir **null** — konstruer eget, f.eks. R(A,B,C), F={A→B, B→C}.
  - **Finn FD-er / motbevis FD fra en tabellforekomst** (oppgi forutsetninger). Én oppgavetype — «hvilke FD-er kan *ikke* gjelde» — ble erklært for vanskelig av sensor selv og frarådet.
- **Frekvens:** 87 % slutteksamen, 100 % semesterprøve.

### G. Tapsløs dekomponering
- **Krav:** En god dekomponering vurderes **alltid mot fire forhold**: attributtbevaring, FD-bevaring, tapsløst join, og oppnådd normalform. **Tabell-/chase-metoden** foretrekkes som *streng* verifikasjon. **Snitt-metoden** (sjekk om felles attributt er supernøkkel i én deltabell) er *tilstrekkelig men ikke nødvendig* — godtas med god argumentasjon. Klassisk resultat: to deltabeller uten felles attributt ⇒ kartesisk produkt ⇒ fremmede tupler ⇒ ikke tapsløst. Kan bes vist ved **konkret moteksempel-forekomst**.
- **Frekvens:** 87 % slutteksamen, 100 % semesterprøve.

### H. Indekser og B+-trær (konstruksjon)
- **Krav:** Sett inn nøkler i gitt rekkefølge, vis treets tilstand **før hver split** og til slutt. Pensumnotatets regel (sensors default): **splitnøkkelen er minste verdi i høyreblokka**, og den fulle blokka splittes *før* den nye nøkkelen settes inn. Elmasri/Navathe-varianten (splitnøkkel = største i venstreblokka) godtas. **Sidepekere på løvnivå MÅ med** — uten dem kan man ikke skanne løvnivået i påfølgende kostnadsoppgaver. Poster i løvblokkene vises **sortert på søkenøkkel**. Nyere flervalg: «hvilken innsettingssekvens gir dette treet» / «er dette en lovlig struktur».
- **Frekvens:** 53 % (konstruksjon/identifikasjon).

### I. Extendible / statisk hashing
- **Krav:** Hash med `h(K) = K MOD 2^d`; avgjør hvilken blokk som splitter først og lokal/global dybde etter split. **To konvensjoner godtas:** hashing fra minst signifikante bit (pensumnotat) eller mest signifikante (læreboka). Konvensjon: `local depth = global depth` ved start (men sensor godtok bredere svar etter klager). Statisk hashing med overløpsblokk: regn ut gjennomsnittlig blokkaksess.
- **Frekvens:** 67 %.

### J. Lagring og blokkberegning
- **Krav:** Beregn antall blokker i heapfil / clustered B+-tre gitt poststørrelse, blokkstørrelse og **fyllingsgrad** (oftest 2/3 ≈ 0,67; læreboka bruker 0,69 — begge godtatt). Regnerekkefølge: `poster per blokk = ⌊blokkstørrelse · fyllingsgrad / poststørrelse⌋`, deretter `⌈antall poster / poster per blokk⌉`. Bygg videre på nivåene i B+-treet (level 0, 1, 2 …).
- **Frekvens:** 47 %.

### K. Spørrekostnad / aksessveier (antall blokkaksesser)
- **Krav:** Begrunn hvert tall. Direkte oppslag ned et clustered B+-tre = **treets høyde** (typisk 3); fullt løvnivå-skann = antall løvblokker (+ nedstigning); `SELECT *` i clustered hash = alle blokker (må skanne alt); sekundærindeks = høyde + ett heap-oppslag per treff; **index-only** query slipper heap-tilgang. Statisk hash med overløp: 1 + overløpstillegg. Den klassiske «index-only»-oppgaven (skann bare B+-treet) omtales som «spurt om i annenhver eksamen».
- **Frekvens:** 80 %.

### L. Join- og sorteringskostnad
- **Krav:** **Nested-loop-join** med M bufferblokker: ha **minste relasjon ytterst** (ett gjennomløp) → `B_ytre + ⌈B_ytre/(M−2)⌉ · B_indre` (én bufferblokk til indre, én til resultat). Sensor fremhever: «minste tabell har alltid kun ett gjennomløp». **Ekstern flettesortering** (les + skriv = 2 per blokk per pass) → `2·B·(1 + ⌈log_{M−1}⌈B/M⌉⌉)`.
- **Frekvens:** 47 %.

### M. Recovery-egenskaper (klassifisering)
- **Krav:** Klassifiser en historie som **ikke gjenopprettbar / gjenopprettbar / ACA / strikt** — *med begrunnelse mot definisjonen*. Metode: let etter dirty read (leser ucommittet verdi) og commit-rekkefølgen. Leser en transaksjon skitten verdi og committer *før* skriveren ⇒ ikke gjenopprettbar. Skriver over en ucommittet verdi ⇒ ikke strikt. Ingen dirty read/write ⇒ strikt.
- **Frekvens:** 60 %.

### N. 2PL / låsing
- **Krav:** Utfør en operasjonssekvens under **rigorous 2PL** (alle låser holdes til commit) og oppgi **commit-rekkefølgen**, eller finn **vranglås (deadlock)**. Vis lås/opplås-trasé; en transaksjon som må vente på lås blokkeres til holderen committer. Ved deadlock er det nok å påpeke at «her er vranglås» for full score (deadlock-detektor aborterer og restarter). Scheduler-avhengige varianter der uavhengige transaksjoner bytter rekkefølge godtas.
- **Frekvens:** 73 %.

### O. Serialiserbarhet / presedensgraf
- **Krav:** Tegn presedens-/serialiseringsgraf over konflikter (skriv-skriv, skriv-les, les-skriv); **syklus ⇒ ikke konfliktserialiserbar**. Nyere flervalg: «hvilke av disse historiene er konfliktserialiserbare».
- **Frekvens:** 40 %.

### P. ARIES-recovery (tre faser)
- **Krav:**
  - *Analyse:* start i checkpoint; DPT får `(Page, RecLSN)` = **første** update-LSN per skitten blokk (**oppdateres ikke** av senere loggposter på samme blokk); transaksjonstabellen får `(TransId, LastLSN, Status)`.
  - *REDO:* i **stigende LSN-rekkefølge**. Redo på en loggpost når blokka er i DPT og `PageLSN < LSN`. **Sensorfelle:** REDO-svar «per blokk» i stedet for per loggpost = nesten null poeng; å bruke «committed» som REDO-kriterium = **0 poeng**. Start på eldste RecLSN i DPT.
  - *UNDO:* rull tilbake aktive (ucommittede) transaksjoner **baklengs**; lag **kompenserende loggposter (CLR)** for hver angret operasjon, avslutt med `Abort`. Ren update-loggpost i stedet for CLR godtas; Abort kan komme før/etter CLR.
  - *Teori:* forklar **PageLSN, WAL, STEAL/NO-FORCE, checkpoint** — hvorfor de finnes og hva de muliggjør.
  - **Kritisk:** ARIES-deloppgaver må **bygge på analysen fra forrige deloppgave** — hvis ikke, tak på ~3 poeng («ikke forstått recovery-prosessen»).
- **Frekvens:** 100 %.

---

## 4. Sensorens krav

### Faste metaregler
1. **Oppgi forutsetninger.** Rimelige, oppgitte antagelser legges til grunn — spesielt ved ER/EER og skjema-oversettelse.
2. **Struktur foran detaljer** ved modellering; **presisjon og begrunnelse** ved utledninger og klassifiseringer.
3. **Delvis uttelling er regelen**, ofte eksplisitt gradert. Ta med hovedpoenget først i definisjoner.
4. **Vis metoden.** Tallsvar skal ha begrunnelse; dekomponeringer skal sjekkes mot de fire egenskapene; recovery-klassifisering skal peke på dirty read + commit-rekkefølge; ARIES skal bruke analyseresultatet.
5. **Robust sensur.** Feilformulerte/for vanskelige oppgaver tas ut eller lempes (dokumentert flere ganger, også etter studentklager i ettertid).

### Hva som skiller karakternivåene
- **Bestått (E ≈ 41):** riktige tall og standarddefinisjoner på grunnoppgavene (nøkler, normalformer, blokkregning, recovery-klassifisering), en brukbar ER-modell med hovedstrukturen på plass.
- **Midtsjikt (C/D):** korrekte kostnadsberegninger med begrunnelse, riktig 2PL-commitrekkefølge, korrekt ARIES-analyse, konsistent ER-modell, riktig normalform.
- **Toppsjikt (A/B):** løser den store modelleringsoppgaven **komplett og konsistent** med riktig bruk av spesialisering/kategori og `(min,max)`; **drøfter** oversettelsesalternativer (ikke bare velger ett); vinner de graderte delpoengene ved å bygge ARIES-fasene korrekt på hverandre, bruke tabell-/chase-metoden stringent, og treffe outer-join/boolsk-negasjon-finessene.

### Hva som gir uttelling
- **Begrunnelse over påstand.** Ett korrekt utledet tall med metode slår et gjettet svar.
- **Drøfting av alternativer** ved modellering/oversettelse — det finnes sjelden én fasit.
- **Beslektede korrekte svar godtas** (natural/inner/equijoin, RA som tekst, to hash-konvensjoner, to B+-tre-splitregler).

---

## 5. Typiske feil (eksplisitt eller implisitt i fasitene)

1. **`INNER JOIN` der oppgaven krever rader uten treff** — skal være **LEFT OUTER JOIN** (sensor trakk poeng i 2018).
2. **Feil boolsk negasjon i relasjonsalgebra** — `NOT(A ∧ B)` behandlet som `(¬A ∧ ¬B)` i stedet for `(¬A ∨ ¬B)`; utelukker for mye.
3. **«Snitt-metoden» for tapsløshet uten begrunnelse** — den er tilstrekkelig, ikke nødvendig; sensor foretrekker tabell-/chase-metoden.
4. **Kopiere lærebokens normalform-eksempel** (PostNr→PostSted) når det bes om et *originalt* — gir null.
5. **Glemme sidepekere på B+-tre-løvnivå** — bryter påfølgende skanningsoppgaver.
6. **Modellere én trinær relasjonsklasse** der to binære er riktig (den vanligste ER-fellen; jf. 2018, 2020).
7. **Gjøre en entitetsklasse svak** uten at identifikasjonen krever det, eller plassere attributter på feil klasse.
8. **Feil superklasse-håndtering ved oversettelse** — droppe superklasse-tabellen ved *delvis* spesialisering (den *må* være der), eller beholde den unødvendig ved *total*.
9. **ARIES REDO «per blokk» eller med «committed» som kriterium** — begge er alvorlige feil (per-blokk ≈ 1 p; committed = 0 p). REDO er per loggpost i stigende LSN.
10. **Ikke bygge ARIES-fasene på hverandre** — hopper man over analysen, tak på ~3 poeng.
11. **RecLSN oppdatert av senere loggposter** — RecLSN er den *første* update-LSN på en skitten blokk og skal stå fast.
12. **Recovery-klassifisering uten begrunnelse** — svar «strict/ACA/recoverable» uten å peke på dirty read + commit-rekkefølge gir lite.
13. **Nested-loop-join med største relasjon ytterst** — dyrere; minste relasjon skal ytterst (ett gjennomløp).
14. **Feil fyllingsgrad / avrundingsretning** i blokkregning — `⌊·⌋` for poster per blokk, `⌈·⌉` for antall blokker.

---

## 6. Notasjons- og formalismeapparat

Læreboka bør bruke nøyaktig disse konvensjonene, siden oppgavene og fasiten gjør det.

### ER/EER (Elmasri & Navathe)
Entitetsklasser (rektangler), relasjonsklasser (rombeer), attributter (ovaler; sammensatte, flerverdi, avledede), **nøkkelmarkering** (understrek), **svake entitetsklasser** (doble rammer + identifiserende relasjon), **`(min,max)`-deltakelsesrestriksjoner** på relasjonskanter, **spesialisering/generalisering** (disjunkt `d` / overlappende `o`; total / delvis), **kategori/union-type** (⊍). Attributter kan stå inne i boksene.

### Relasjonsmodell og algebra
Skjema `R(A,B,C,…)`, primær-/kandidat-/super-/fremmednøkkel, entitets- og referanseintegritet. Algebraoperatorer: seleksjon `σ`, projeksjon `π`, join `⋈` (natural/equi/theta), kartesisk produkt `×`, union `∪`, differanse `−`, snitt `∩`, omdøping `ρ`, aggregat/gruppering. Grafnotasjon eller lineær tekst — begge godtas.

### Designteori
Funksjonell avhengighet `X → Y`; flerverdiavhengighet (MVD) `X ↠ Y`; **attributt-tillukning `X⁺`**; Armstrongs aksiomer (refleksivitet, augmentasjon, transitivitet) + avledede (union, dekomponering, pseudotransitivitet). Normalformer 1NF ⊃ 2NF ⊃ 3NF ⊃ BCNF ⊃ 4NF med presise definisjoner. Fire dekomponeringsegenskaper: attributtbevaring, FD-bevaring, tapsløst join, normalform. Chase-/tabellmetode for tapsløshet.

### Lagring, indeksering, kostnad
Heapfil; clustered/unclustered indeks; **B+-tre** (rekkefølge/fanout, løvnivå med sidepekere, høyde/nivåer); **extendible hashing** (`h(K)=K MOD 2^d`, global/lokal dybde, directory, blokksplitt); statisk hashing med overløp; **fyllingsgrad 2/3**. Kostnad måles i **antall blokkaksesser (I/O)**. Formler: poster/blokk `⌊b·f/r⌋`; nested-loop `B_ytre + ⌈B_ytre/(M−2)⌉·B_indre` (minste ytterst); ekstern flettesortering `2·B·(1 + ⌈log_{M−1}⌈B/M⌉⌉)`.

### Transaksjoner og recovery
ACID; historie/skjema; konflikter (RW, WR, WW); **presedensgraf** og konfliktserialiserbarhet; recovery-klasser **ikke-gjenopprettbar / gjenopprettbar / ACA / strikt**; **rigorous 2PL** (lås til commit); vranglås/deadlock-deteksjon; isolasjonsnivåer + fantomer + snapshot isolation. **ARIES:** LSN, PrevLSN, PageLSN, RecLSN, transaksjonstabell, Dirty Page Table (DPT), CLR, checkpoint, **WAL**, **STEAL/NO-FORCE**; tre faser (analyse → REDO → UNDO).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (kommer garantert)
1. **ER-/EER-modellering fra miniverden** — 100 %, høyest vektet (12–35 %), besvares på papir. Øv på riktig og konsistent virkemiddelbruk, `(min,max)`, spesialisering/kategori, to-binære-vs-trinær, og på å oppgi forutsetninger.
2. **ARIES / recovery** — 100 %. Analyse (DPT/RecLSN/transtabell) → REDO (stigende LSN, PageLSN<LSN, aldri «committed») → UNDO (CLR + Abort). Bygg fasene på hverandre. Kunn PageLSN/WAL/STEAL/NO-FORCE.
3. **Normalisering** — 87 % (slutt) / 100 % (semester). Attributt-tillukning, kandidatnøkler, høyeste normalform, BCNF/3NF-dekomponering, originalt eksempel.
4. **Tapsløs dekomponering** — 87 % / 100 %. Fire egenskaper; chase-metoden stringent; moteksempel-forekomst.
5. **SQL + relasjonsalgebra** — 80 % (slutt) / 100 % (semester). Aggregat/GROUP BY/HAVING, underspørringer, **LEFT OUTER JOIN når rader uten treff kreves**, boolsk negasjon, ekvivalens algebra↔SQL.

### Nivå 2 — må kunne (avgjør C→A)
6. **Spørrekostnad / aksessveier** — 80 %. Antall blokkaksesser for hver aksessvei, med begrunnelse; index-only.
7. **2PL / låsing / deadlock** — 73 %. Rigorous, commit-rekkefølge, vranglås.
8. **Hashing** — 67 %. Extendible split + lokal/global dybde; statisk med overløp; to konvensjoner.
9. **Recovery-egenskaper** — 60 %. Klassifiser med begrunnelse (dirty read + commit-rekkefølge).
10. **Transaksjons-/isolasjonsteori** — 60 %. ACID, WAL, STEAL/NO-FORCE, snapshot vs. SERIALIZABLE, fantomer.
11. **B+-tre-konstruksjon** — 53 %. Innsetting med split, sidepekere, sortert løvnivå.

### Nivå 3 — bør kjenne til (differensierer / lavfrekvent)
12. **EER → relasjonsskjema** — 47 %. Spesialiseringsalternativer + drøfting.
13. **SQL-DDL/DML** — 47 %. CREATE TABLE med PK/FK/cascade, INSERT/UPDATE/DELETE.
14. **Lagring / blokkberegning** — 47 %. Poster/blokk, antall blokker, nivåer.
15. **Join- / sorteringskostnad** — 47 %. Nested-loop (minste ytterst), ekstern flettesortering.
16. **Serialiserbarhet / presedensgraf** — 40 %. Konfliktgraf, syklus.
17. **«Finn feil i ER-modell»** — 13 %, men lettøvd: fem klassiske feiltyper.

### Prognose for neste ordinære slutteksamen (kode D, 2 t)
Forvent: **1 stor ER-/EER-modelleringsoppgave på papir** (12–35 %); **2–4 normaliserings-/nøkkel-/dekomponerings-flervalg**; **1–3 SQL-/relasjonsalgebra-oppgaver** (radtelling eller ekvivalens); **3–5 kvantitative tallsvar** (heapfil/B+-tre-blokker, extendible hashing, nested-loop-join, ekstern flettesortering); **2–4 aksessvei-spørsmål**; **1–2 2PL-commitrekkefølge/deadlock**; **1–2 recovery-klassifiseringer**; og **2–3 ARIES-oppgaver** (analyse + REDO + UNDO). Semesterprøven (30 %) tester i tillegg modellering + relasjonsteori + normalisering + SQL/algebra tungt, uten lagring/transaksjoner/recovery. Studenten som kan modellere en miniverden riktig, regne kostnadsformlene raskt med kalkulator, og kjøre ARIES-fasene mekanisk og korrekt, scorer høyt.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/TDT4145/`.

**Løsningsforslag/sensorveiledninger lest grundig (siste ~8 år):**
Slutteksamener `2018_LF`, `2019_LF`, `2020_LF`, `2021_LF`, `2022_LF`, `2023_LF`; kontinuasjon `2018k_LF`, `2019k_LF`, `2023k_LF`; semesterprøver `2021m_LF`, `2022m_LF`, `2023m_LF`, `2023mk_LF`, `2024m_LF` (med tilhørende oppgavesett).

**Skumlest for temaregistrering (eldre):**
`2015_LF`, `2015k_LF`, `2016_LF`, `2016k_LF`, `2017_LF`, `2017k_LF` (med oppgavesett). Temafrekvens-matrisene er bygd ved systematisk gjennomgang av alle 20 løsningsforslagene.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for TDT4145 (scratchpad: `fagbeskrivelse-tdt4145.md`; kilde: <https://www.ntnu.no/studier/emner/TDT4145>).

**Merknader om kildene:**
- **Faglærere og pensum konstant:** Roger Midtstraum og Svein Erik Bratsberg gjennom hele perioden; pensum er Elmasri & Navathe + instituttets pensumnotat om lagringsstrukturer. Læringsutbyttebeskrivelsen (9 kunnskapsmål, 5 ferdigheter) er identisk i alle sensorveiledninger.
- **Format-caveat:** Settene skifter mellom 4-timers frisvarseksamen (2015–2019), covid-hjemmeeksamen (2020, kode A, bestått/IB), rene flervalgs-eksamener (2021–2022, kode A) og det gjeldende blandede 2-timersformatet (2023 →, kode D, ER/B+-tre på papir). Temafrekvensen er talt over alle 15 slutteksamen/kont-sett (Tabell A) og 5 semesterprøver (Tabell B) hver for seg, fordi de to eksamensslagene tester ulike halvdeler av pensum.
- **Tekstuttrekk:** Oppgavefilene for 2018/2018k lot seg ikke tekst-ekstrahere rent (skannede/kodede PDF-er); innholdet for disse to er rekonstruert fra de intakte sensorveiledningene. Enkelte 2023-veiledninger dekker bare de første oppgavene; de kvantitative fasitene for resten er verifisert mot oppgavetekst og standardmetode.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Notasjon, normalformdefinisjoner og kostnadsformler er allmenn faglig notasjon.
