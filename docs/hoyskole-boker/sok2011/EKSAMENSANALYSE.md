# Eksamensanalyse: SØK2011 Offentlig økonomi og økonomisk politikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på eksamensarkivet i `~/Desktop/Eksamner/NTNU/SOK2011/` (ca. 20 filer): oppgavesett fra V2019 til V2024 lest grundig, eldre sett skummet, samt **7 sensorveiledninger/løsningsforslag** (V2019, H2019, V2020, «høst 2022», «V2021», V2023, H2023 og V2024 — flere av dem fullstendige fasiter med tallsvar) og **2 komplette svarmanualer** (V2022 og H2021). **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modellsammenhenger, tallsvar og faglige fakta er gjengitt fritt (uten verkshøyde). Analysen er kvantitativ der kildene tillater det.
>
> **Emnekode-merknad:** Arkivet bruker gjennomgående «SØK2011», mens den offisielle koden i NTNUs systemer i dag ofte skrives «SOK2011» (samme emne). Fullt navn: *Offentlig økonomi og økonomisk politikk* (eng. *Public Economics and Economic Policy*), 7,5 studiepoeng, Institutt for samfunnsøkonomi, NTNU. AKTIVT emne. Pensumbok: **Harvey S. Rosen & Ted Gaynor, *Public Finance*** — sensorveiledningene henviser eksplisitt til denne (f.eks. Ramsey-regelen s. 348–351, arbeidstilbud s. 407–411, kap. 6/8/12/13/15/16/18) samt til forelesningsnotater/PowerPoints.
>
> **Historikk-merknad (nedlagte forgjengere):** SØK2011 har absorbert pensum fra de nå **NEDLAGTE** emnene **SØK2008 «Offentlig økonomi»** og **SØK2103 «Politisk økonomi»**. Arkivmappene `~/Desktop/Eksamner/NTNU/SOK2008/` og `SOK2103/` er skummet for temahistorikk. SØK2008 er praktisk talt identisk med skattedelen av SØK2011 (samme lærebok, samme oppgaver — enkelte SØK2008-veiledninger henviser til og med direkte til «Øving 2, SØK2011 høsten 2018»). SØK2103 tilførte det politisk-økonomiske sporet (median­velger, partikonkurranse, rent-seeking, byråkrati) som i SØK2011 er redusert til kollektive-beslutninger-oppgaven (valgparadoks/entoppede preferanser). Se del 0 for hva som er videreført.

---

## 0. Kort om emnet + NTNU/UiO-forskjell (les dette først)

SØK2011 er NTNUs anvendte emne i **offentlig økonomi (public finance) og økonomisk politikk**. Det bruker mikroøkonomien fra SOK1002 (konsument-/produsentteori, elastisiteter, markedskryss) på **statens rolle**: hvorfor og hvordan staten skattlegger, omfordeler og bruker penger, og hvordan kollektive beslutninger fattes.

### Forhold til UiO (ECON1220 / ECON3010-familien)

SØK2011 tilsvarer **UiOs ECON1220 «Velferd og økonomisk politikk»** (og delvis ECON3010 offentlig økonomi på 3000-nivå). Overlappet i *tema* er stort — begge dekker skatteeffektivitet, omfordeling, velferdsteoremer, nytte-kostnadsanalyse og kollektive valg — men **metoden er markant ulik**, og det styrer bokdesignet:

| | **SØK2011 (NTNU)** | **ECON1220 (UiO)** |
|---|---|---|
| Grunnkarakter | **Regnende** offentlig økonomi: dødvektstap, skatteinsidens, Ramsey, NKA regnes ut med tall og figur | **Verbal/figur-basert** politikkanalyse; «lite matte, mye figurer», presist verbalt svar fullgodt |
| Signaturoppgave | **Avgift i et konkret marked** (tilbud/etterspørsel oppgitt som funksjoner) → regn ut skatteinsidens, proveny og dødvektstap | **Asymmetrisk informasjon** i fast-beløp-per-bruker-marked (uheldig utvalg + fløteskumming) |
| Verktøy | Lagrange, derivasjon, elastisitetsberegning, nåverdi, areal av trekanter | Kvalitative figurer + prosa; nesten aldri algebra |
| Hjelpemidler | **Kode C** (matematisk formelsamling + kalkulator) | Ingen (fritekst) |
| Pensumbok | Rosen & Gaynor, *Public Finance* | Stiglitz & Rosengard + Nyborgs notater + FIN/DFØ-veiledere |

**Temaer som er tunge i SØK2011, men lette/fraværende i ECON1220:** eksplisitt **utregning** av dødvektstap som areal (½·ΔX·ΔP) og som ½·η·P·t², **Ramsey-regelen** (invers elastisitetsregel) utledet formelt, **skatteinsidens** regnet ut fra oppgitte tilbuds-/etterspørselsfunksjoner, **progressivitet** vist analytisk (marginal- vs. gjennomsnittsskatt), **nåverdi/kalkulasjonsrente** i NKA med tallregning, **arbeidstilbud** og **intertemporalt valg/folketrygd** med Lagrange, **velferdsmaksimering** med additiv velferdsfunksjon løst som optimeringsproblem.

**Temaer som er tunge i ECON1220, men fraværende/svake i SØK2011-arkivet:** asymmetrisk informasjon (uheldig utvalg, fløteskumming, moral hazard), atferdsøkonomi/nåtidsskjevhet, spillteori/koordineringsspill (dukker kun opp som en enkelt CO₂-oppgave H2021), institusjonell økonomi (Coase/Ostrom), behovsprøvd-vs-universell som stor drøfting. SØK2011 er altså **mer «finansdepartement-teknisk»** (regn ut effektivitetstapet), ECON1220 mer **«politisk rådgiver»** (drøft mekanismen verbalt).

Boka bør derfor gjenbruke ECON1220-analysens *temaliste* der den overlapper (velferdsteoremer, omfordeling, NKA, kollektive valg), men bygge hvert kapittel rundt **regneeksemplene og de formelle utledningene** som SØK2011 faktisk krever — det er den viktigste forskjellen. Se `docs/hoyskole-boker/econ1220/EKSAMENSANALYSE.md` for det verbale/figurbaserte motstykket.

### Forhold til SØK3007 (master)

SØK2011 overlapper også oppover med **SØK3007 «Skatt, beslutningsatferd»** (masternivå), som går dypere i optimal beskatning, skatteunndragelse og atferdsrespons på skatt. SØK2011 dekker samme kjerne (skatteinsidens, effektivitetstap, Ramsey, skatteunndragelse som begrep) men på bachelornivå og med enklere modeller. En SØK2011-bok skal ikke gå inn i Mirrlees-optimal-beskatning e.l.; det hører til 3000-nivået.

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer (09.00–13.00), karakter A–F, 7,5 studiepoeng.** Digital i Inspera; håndtegnede figurer digitaliseres/lastes opp (tegnebrett eller skannede ark med kode).
- **Hjelpemidler: kode C** — matematisk formelsamling + godkjent kalkulator. (Spesifikasjonen oppgir «hjelpemiddelkode H»; arkivets oppgavesett fra V2019 og framover oppgir eksplisitt **kode C**. Uansett kode: begrenset, tallregning forventes.)
- **Målform:** oppgavene gis på **bokmål OG nynorsk**, og flere sett også på **engelsk** (H2020, H2021, H2023 foreligger på engelsk; svarmanualene V2022/H2021 er engelske). Studenten svarer på ønsket språk.
- **Standard rubrikk** øverst i settene: skaff overblikk, gjør egne antagelser og **presiser forutsetninger** du legger til grunn ved tolkning/avgrensing av oppgaven.

### Struktur — utvikling over tid
Emnet har hatt **to distinkte oppgaveformater**:

- **«Klassisk» format (t.o.m. ~2019):** 3–5 oppgaver, ofte likt vektet eller med enkle vekter. Kortere, spissede oppgaver — noen rene teori-/drøftingsoppgaver (f.eks. «Forklar hvordan inntektsskatt påvirker arbeidstilbudet»), noen rene regneoppgaver (dødvektstap ved to varer). H2019 hadde en dominerende storoppgave (50 %) om Ramsey/effektivitetstap.
- **«Moderne» format (fra ~2020, stabilt f.o.m. V2022):** **fast firdelt mal** som gjentas nesten identisk:
  1. **Oppgave 1 (20 %): begrepsforklaringer** — 5 korte begrep.
  2. **Oppgave 2 (10 %): kort teorispørsmål** (ofte Ramsey-intuisjon / «mange små skatter vs. få store»).
  3. **Oppgave 3 (30–35 %): regneoppgave om avgift/skatt i et marked** (dødvektstap, skatteinsidens, proveny).
  4. **Oppgave 4 (30–35 %): storoppgave med to alternativer** (velg ett) — typisk NKA/vei-investering *eller* skatt på bedrift/grunnrente/progressiv inntektsskatt.

### Vektings-/strukturhistorikk (utvalg fra arkivet)

| Sett | Struktur / vekting | Kommentar |
|---|---|---|
| V2019 | 4 oppg., teller likt | Arbeidstilbud + to-vare-dødvektstap + intuisjon |
| H2019 | 3 oppg. **50/25/25** | Storoppgave: Ramsey utledet formelt + arbeidstilbud/stønad + intertemporalt |
| V2020 | 4 oppg. **25/25/20/30** | To-vare-skatt/Ramsey, progressiv skatt, NKA/rente, folketrygd/sparing |
| H2020 | 5 oppg. 20/20/20/25/15 (+ eng.) | Bl.a. CO₂/klima-varianten |
| H2021 | 4 oppg. **40/25/25/10** | Alkoholavgift+insidens+regressivitet, arbeidstilbud, velferdsfunksjon, valgparadoks, CO₂ |
| V2021 | 5 oppg. | Edgeworth/pareto, Ramsey-drøfting, NKA (Nord-Norgebanen), valgparadoks, varehjelp vs. kontantoverføring |
| V2022 | 4 oppg. (svarmanual finnes) | X/Y-varer-dødvektstap, folketrygd/arbeidstilbud, velferd, valgparadoks |
| H2022 | 4 oppg. **20/30/30 (+)** | Fast mal: begrep, kompensert-etterspørsel-dødvektstap+Ramsey, omfordeling/progressiv skatt |
| V2023 | 4 oppg. (fast mal) | Begrep, dødvektstap m/ eksport-sjokk, profitt, subsidie/proveny |
| H2023 | 4 oppg. **20/20/30/30** (eng.) | Begrep, omfordeling/velferdsfunksjon, skatteinsidens (tallrik), bedriftsskatt/grunnrente vs. NKA |
| V2024 | 4 oppg. **20/10/35/35** | Begrep, «mange skatter», alkoholavgift-insidens, NKA-vei ELLER progressiv skatt |

**Konstanter på tvers av settene:**
1. **Skatteeffektivitet er ryggraden.** Nesten hvert sett har en oppgave der dødvektstap regnes ut som areal og kobles til elastisitet, ofte med Ramsey-regelen som klimaks.
2. **Begrepsoppgaven (5 begrep, 20 %)** er fast i det moderne formatet — trekker fra en stabil liste (se del 3A).
3. **En storoppgave med tallregning** (skatteinsidens eller NKA) som teller 30–35 %.
4. **Aktualitet som innpakning:** alkoholavgift, vei-/baneutbygging, folketrygd/pensjon, eiendomsskatt, grunnrenteskatt, CO₂-utslipp — men modellen bak er alltid standard offentlig økonomi.

---

## 2. Temafrekvens

Basert på settene der oppgaveteksten er lesbar (≈12 sett V2019–V2024) samt de 7 sensorveiledningene og 2 svarmanualene. To sett (H2023, V2023-oppgavefila `SØK2011.pdf`) er delvis bildebaserte, men dekkes via sensorveiledningene. Score = andel sett/veiledninger der temaet inngår som deloppgave eller mer.

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Dødvektstap/effektivitetstap ved skatt/avgift** — regne ut som areal (½·ΔX·ΔP) og som ½·η·P·t² | **~95 %** | Selve motoren; kobles alltid til elastisitet |
| **Skattekile, hvorfor dødvektstap oppstår** (MBV > MK, substitusjon bort fra godet, «eksternalitet» på statens proveny) | **~90 %** | Fast forklaringskrav i tillegg til tall |
| **Elastisitet ↔ dødvektstap/insidens** (mer elastisk → større tap; skatt den minst elastiske varen mest) | **~85 %** | Rød tråd; lineær etterspørsel gir varierende elastisitet |
| **Skatteinsidens** — hvem betaler reelt, regnet ut fra oppgitte tilbud/etterspørsel; enhetsskatt vs. verdiskatt | **~70 %** | Storoppgave H2021, H2023, V2024; forholdet mellom elastisiteter avgjør |
| **Ramsey-regelen (invers elastisitetsregel)** — beskrive og/eller utlede formelt via Lagrange | **~65 %** | H2019 (full utledning), V2020, V2021, V2024-intuisjon, H2022 |
| **Progressiv inntektsskatt** — definisjon (ART < MRT), vise analytisk, klassifisere skattesystemer, bunnfradrag | **~60 %** | V2020, H2022, H2023, V2024; illustreres i budsjettbetingelse-figur |
| **Omfordeling & sosial velferdsfunksjon** — hvorfor omfordele; additiv velferdsfunksjon, maks-min, avtakende grensenytte | **~60 %** | H2022, H2023, V2021, V2022 (Mary/Jane-, Alex/Bob-optimering) |
| **Nytte-kostnadsanalyse (NKA)** — samfunnsøkonomisk lønnsomhet, verdsetting (tid, ulykker), nettonytte | **~55 %** | V2020, V2021 (Nord-Norgebanen), V2024-vei, H2023-alternativ |
| **Nåverdi / kalkulasjonsrente** — diskontering, rentens rolle for lønnsomhet av offentlige prosjekter | **~50 %** | Alltid koblet til NKA; V2020, V2021, V2024 |
| **Arbeidstilbud & inntektsskatt** — substitusjons- vs. inntektseffekt på fritid/arbeid, nettoeffekt usikker | **~50 %** | V2019, H2019, V2022, H2021; Lagrange med U(I,L) |
| **Velferdsteoremene (1. og 2. hovedteorem)** — forutsetninger + innhold; Pareto-effektivitet | **~50 %** | Fast begrep + drøfting; generell likevekt/Edgeworth-boks |
| **Kollektive beslutninger / valgparadoks** — entoppede vs. flertoppede preferanser, cycling, stabilitet | **~50 %** | V2021, V2022, H2021, samt SØK2103-arv; parvis flertallsvotering |
| **Intertemporalt valg / folketrygd / pensjon** — to perioder, sparing/lån, pay-as-you-go, rente | **~40 %** | H2019, V2020, V2022; nåverdi-budsjett |
| **Skatt på bedrift / profitt / grunnrente** — profittskatt vridningsfri, kontantstrøm vs. skattemessig overskudd | **~25 %** | H2023-alternativ; friinntekt, avskrivning |
| **Skatteunndragelse** (lovlig tilpasning vs. ulovlig), Lafferkurven | **~25 %** | V2024-begrep, SØK2008/SØK3007-arv |
| **Varehjelp vs. kontantoverføring** — mottaker minst like god med penger | **~20 %** | V2021 (subsidiert taxi til eldre) |
| **Eiendomsskatt / kapitalisering** i varige goder | **~15 %** | H2022-begrep |
| **Klima/CO₂-utslipp** (virkemidler, kutt-tabell) | **~15 %** | H2020, H2021 — eneste berøring med miljø/spill |

**Viktigste funn:**
1. **Emnet ER skatteeffektivitet + offentlig prioritering.** Bygg boka rundt (i) dødvektstap/skatteinsidens/Ramsey og (ii) NKA/nåverdi, med (iii) omfordeling/velferdsfunksjon og (iv) kollektive valg som de to store drøftingssøylene.
2. **Dødvektstap regnes ut hvert år**, både geometrisk (areal av trekant, ½·ΔX·ΔP) og formelt (½·η·P·t²), og kobles alltid til elastisitet. Studenten må kunne begge, pluss den verbale forklaringen på *hvorfor* tapet oppstår (skattekile: MBV > MK).
3. **Skatteinsidens er den store regneoppgaven.** Gitt tilbud og etterspørsel som funksjoner: finn likevekt før/etter skatt, fordel byrden på konsument/produsent, regn proveny og dødvektstap — for både **enhetsskatt** og **verdiskatt (%)**. Poenget: relativ elastisitet avgjør fordelingen; den mest elastiske parten bærer minst.
4. **Ramsey-regelen er toppkarakter-differensiatoren** i skattedelen: skattlegg den minst elastiske varen mest, fordi dødvektstapet vokser med elastisiteten. De beste utleder den via Lagrange (minimer samlet dødvektstap under provenybibetingelse).
5. **NKA + kalkulasjonsrente er den andre halvparten.** Verdsetting av tid/risiko, nettonytte, og — kritisk — hvordan valget av diskonteringsrente avgjør om et prosjekt er lønnsomt (høyere rente straffer prosjekter med sen nytte).
6. **Politisk-økonomi-sporet er redusert** i forhold til det nedlagte SØK2103: kun valgparadoks/entoppede preferanser går igjen fast. Rent-seeking, partikonkurranse og byråkrati (tunge i SØK2103) er stort sett borte fra SØK2011.

---

## 3. Oppgavetype-katalog

### A. Begrepsforklaringer (Oppgave 1, 20 %, fast i moderne format)
- **Krav:** Kort, presis definisjon (2–4 setninger), gjerne med formel og/eller liten figur der naturlig («kan være en fordel å vise dette i en figur»). Svar poengtert på akkurat det begrepet.
- **Gjengangerbegreper (fast liste):** dødvektstap, substitusjonseffekt, inntektseffekt, partiell vs. generell likevekt, velferdsteoriens 1. og 2. hovedteorem, (sosial) velferdsfunksjon, Ramsey-regelen/invers elastisitetsregel, Lafferkurven, skatteunndragelse, skatteinsidens, nåverdi (present value), intertemporal nytte, kapitalisering, pay-as-you-go/folketrygd, progressiv skatt.
- **Omskrevet eksempel:** «Forklar kort: a) dødvektstap, b) velferdsteoriens andre hovedteorem, c) Lafferkurven, d) intertemporal nytte, e) skatteunndragelse.»

### B. Kort teorispørsmål (Oppgave 2, 10 %)
- **Krav:** Ett fokusert resonnement, ofte Ramsey-intuisjonen: hvorfor er mange små skatter bedre enn få store? Fordi dødvektstapet vokser **kvadratisk** i skattesatsen (½·η·P·t²), så én ekstra prosent skatt på en allerede høy sats koster mye mer enn på en lav. De beste utleder dødvektstapet formelt for å vise kvadratisk-egenskapen.
- **Omskrevet eksempel:** «Hvorfor er det en fordel å skattlegge mange markeder med lave satser framfor få markeder med høye satser?»

### C. Skatteinsidens og dødvektstap i et konkret marked (Oppgave 3, 30–35 %) — kjernesjangeren
- **Metode (fasitenes standard):**
  1. Finn likevekt uten skatt ved å sette tilbud = etterspørsel (f.eks. XD = 1 000 000 − 30 000P, XS = 20 000P → P = 20).
  2. Legg på skatten (enhetsskatt: skift tilbud vertikalt med T; verdiskatt: produsenten sitter igjen med (1−t)·P eller konsumenten betaler (1+t)·P). Finn ny likevekt.
  3. **Skatteinsidens:** ΔP for konsument vs. produsent; andelen hver bærer = deres ΔP / total skatt. Poeng: **relativ elastisitet** avgjør — den minst elastiske parten bærer størst andel.
  4. **Proveny:** skatt per enhet · nytt kvantum; fordel på konsument-/produsentbidrag.
  5. **Dødvektstap:** areal av trekanten = ½·ΔX·ΔT.
- **Fasit-eksempler:** ølavgift 20 kr, XD = 1 000 000 − 30 000P, XS = 20 000P → konsument bærer 8 (40 %), produsent 12 (60 %), proveny 3 200 000 (V2024). Enhetsskatt 20 med PE = 100 − 3X, PS = 20 + X → konsument ¾, DWL = 50; verdiskatt 50 % → t = 32, DWL = 128 (mer enn 50 % høyere enn 50 fordi tapet er kvadratisk) (H2023).
- **Vanlige tillegg:** effekt av at etterspørselen er mer/mindre elastisk (yngre vs. eldre alkoholkonsumenter); skift i etterspørsel ved endring hos komplementær/substitutt-vare (naboland øker avgift → import-substitutt → etterspørsel skifter ut).
- **Omskrevet eksempel:** «Etterspørselen etter ølbokser er XD = 1 000 000 − 30 000P og tilbudet XS = 20 000P. Avgiften er 20 kr per boks. Finn hvordan avgiften fordeles på konsument- og produsentpris, statens proveny, og hvor mye som reelt kommer fra hver part.»

### D. Ramsey-regelen — utledning og anvendelse
- **Krav:** Vis at dødvektstapet for et gode kan skrives ½·η·z·Pz·tz². Minimer **samlet** dødvektstap for to varer under bibetingelsen at samlet proveny er gitt → sett opp Lagrange, deriver, få Ramsey-betingelsen: skattesatsene skal være **omvendt proporsjonale med etterspørselselastisitetene** (tx/ty = ηy/ηx). Tolkning: skattlegg det inelastiske godet mest. Nyanse: lik skatt på alt er optimalt bare hvis elastisitetene er like; fordelingshensyn (inelastiske goder konsumeres ofte av fattige) kan begrunne avvik.
- **Omskrevet eksempel:** «To varer skal gi staten en gitt skatteinntekt med minst mulig samlet effektivitetstap. Utled forholdet mellom de optimale skattesatsene, og forklar resultatet.»

### E. Progressiv inntektsskatt
- **Krav:** Definer progressivitet som at **gjennomsnittsskatten (ART = T/I) stiger med inntekten**, ekvivalent med **marginalskatt (MRT = T′(I)) > gjennomsnittsskatt**. Vis analytisk ved å derivere T/I mhp. I. Klassifiser oppgitte skattesystemer (proporsjonal T = t·I er *ikke* progressiv; bunnfradrag + flat sats *er* progressivt; trappetrinn med økende marginalsats *er* progressivt). Illustrer i budsjettbetingelse-figur og drøft individets tilpasning.
- **Omskrevet eksempel:** «Er et system med bunnfradrag og lik marginalsats progressivt? Vis analytisk, og illustrer et to-trinns skattesystem i en figur.»

### F. Omfordeling og sosial velferdsfunksjon
- **Krav:** Begrunn omfordeling: når staten skal tjene innbyggerne, må dens preferanser (den sosiale velferdsfunksjonen) bygge på innbyggernes nyttefunksjoner. Med **positiv, men avtakende** effekt av individuell nytte på samfunnsvelferden gir mindre forskjeller høyere velferd → argument for omfordeling når nytte er sterkt knyttet til inntekt. Beskriv **additiv velferdsfunksjon** og **maks-min-kriteriet**; nevn utfordringer (måle/aggregere nytte, Arrows umulighetsteorem). Regnevariant: maksimer additiv velferd under inntektsbibetingelse (Lagrange) → finn optimal inntektsfordeling.
- **Fasit-eksempel:** UM = 100·IM^½, UJ = 200·IJ^½, samlet 300 → IM = 60, IJ = 240 (V2021). Alex/Bob med 5000 → likedeling gir nytte 100/200; maks additiv gir IB = 4000 (V2022).
- **Omskrevet eksempel:** «To innbyggere med gitte nyttefunksjoner skal dele en inntekt. Hvilken fordeling maksimerer en additiv velferdsfunksjon? Drøft utfordringer ved slike funksjoner.»

### G. Nytte-kostnadsanalyse, nåverdi og kalkulasjonsrente (Oppgave 4-alternativ)
- **Krav:** Forklar NKA som metoden for å vurdere **samfunnsøkonomisk lønnsomhet**: tallfest samfunnsøkonomiske kostnader (priser kan avvike fra markedspriser ved markedssvikt/skatt) og nettonytte (verdsetting av tid, redusert ulykkesrisiko). Diskonter framtidige størrelser til **nåverdi**; velg optimal prosjektstørrelse der marginal nytte = marginal kostnad. Drøft hvordan **kalkulasjonsrenten** påvirker lønnsomheten (høyere rente reduserer nåverdien av framtidig nytte og straffer prosjekter med sen avkastning).
- **Fasit-eksempel:** B(Q) = 1000Q − 0,25Q², I(Q) = 5000Q + 2,5Q², realrente 5 %, uendelig levetid → optimer nåverdi av årlig nettonytte mot investering (V2024). Nord-Norgebanen: hvilke elementer inn i NKA + rentens rolle (V2021).
- **Omskrevet eksempel:** «Staten vurderer å oppgradere en vei. Beskriv hvilke nyttekomponenter som teller, presenter NKA-metoden, og finn optimal oppgradering gitt nytte- og investeringsfunksjonene og en realrente på 5 %.»

### H. Arbeidstilbud og inntektsskatt
- **Krav:** Modeller individet med U(I, L) over inntekt/konsum og fritid L, tidsbudsjett I = w·(T−L) (evt. med skatt: w(1−t)). Løs med Lagrange for optimal fritid/arbeidstid. Inntektsskatt senker nettolønnen → **substitusjonseffekt** (fritid billigere → mer fritid) og **inntektseffekt** (fattigere → mindre fritid) trekker motsatt → **nettoeffekt på arbeidstilbud er usikker**. NB: effekten på *dødvektstapet* avhenger kun av substitusjonseffekten, mens effekten på *arbeidstilbudet* avhenger av begge.
- **Fasit-eksempel:** U = I + 400·ln(L), w = 25, T = 60 → uten skatt L = 16 (44 timer arbeid); med t = 20 % → L = 20 (40 timer); substitusjonseffekten dominerer (H2021).
- **Omskrevet eksempel:** «Forklar hvordan innføring av inntektsskatt påvirker arbeidstilbudet i økonomien.»

### I. Intertemporalt valg, sparing og folketrygd
- **Krav:** To-periodemodell med sparing/lån i bank til rente r; intertemporal budsjettbetingelse og nåverdi. **Pay-as-you-go-folketrygd**: dagens ytelser finansieres av dagens skatt (ingen oppbygd fond). Analyser hvordan en folketrygd med annen «avkastning» enn banken påvirker individets tilpasning (verbalt + analytisk).
- **Omskrevet eksempel:** «En person kan spare/låne til 20 % rente. Folketrygden gir 15 % på innbetalt beløp. Hvordan påvirker dette personens sparetilpasning? Forklar verbalt og analytisk.»

### J. Kollektive beslutninger — valgparadoks og entoppede preferanser
- **Krav:** Sett opp en enkel modell med tre grupper/partier og deres rangering av alternativer. **Entoppede preferanser** → flertallsbeslutninger blir stabile (entydig vinner, rekkefølge irrelevant). **Flertoppede preferanser** → **valgparadoks/cycling** (A slår B, B slår C, C slår A) → utfallet avhenger av voteringsrekkefølgen, og agendasetter kan styre resultatet. Verifiser med **parvis flertallsvotering** (like store grupper).
- **Fasit-eksempel:** Preferansetabell uten paradoks (grupper velger 20) vs. med paradoks (0 slår 20, 40 slår 0, 20 slår 40) — vist ved parvis votering (V2022).
- **Omskrevet eksempel:** «Et kommunestyre velger mellom prosjekter. Under hvilke forutsetninger gir flertallsbeslutninger stabile utfall, og når oppstår cycling? Illustrer med en preferansetabell og parvis votering.»

### K. Skatt på bedrift, profitt og grunnrente
- **Krav:** En **ren profittskatt** er vridningsfri (påvirker ikke bedriftens produksjonsvalg → intet dødvektstap), med modifikasjoner: bedriften kan flytte til utlandet; utfordringen med å beregne riktig kapitalkostnad. Skill **kontantstrøm** (investering trekkes fra i investeringsåret) fra **skattemessig overskudd** (kostnad = avskrivning; «friinntekt» kompenserer for kapitalkostnad). Grunnrenteskatt: ekstra sats i bransjer med grunnrente.
- **Omskrevet eksempel:** «Hvordan påvirker en profittskatt bedriftenes produksjon og atferd? Forklar forskjellen mellom å beskatte kontantstrøm og skattemessig overskudd.»

### L. Varehjelp vs. kontantoverføring
- **Krav:** Vis med indifferenskurver/budsjett at en mottaker aldri får lavere (som regel høyere) nytte av **kontantoverføring** enn av **øremerket varehjelp** av samme verdi, fordi penger gir full valgfrihet. Drøft hvorfor staten likevel kan velge varehjelp (paternalisme, målretting, politisk aksept).
- **Omskrevet eksempel:** «Er subsidiert taxi til eldre en god måte å drive eldreomsorg på? Sammenlign varehjelp med en tilsvarende kontantoverføring.»

---

## 4. Sensorens krav

### Faste metaregler (gjentas på tvers av veiledningene)
1. **Regning OG figur OG verbal forklaring.** SØK2011 belønner korrekt utregning (skatteinsidens, dødvektstap, Lagrange, nåverdi), men tallet alene er ikke nok — det skal illustreres i figur («en fordel å vise dette i en figur») og tolkes økonomisk.
2. **Forklar *hvorfor*, ikke bare *hva*.** Dødvektstapet skyldes en skattekile (MBV > MK) og at konsumenten substituerer bort fra godet uten å ta hensyn til tapt statsproveny — denne mekanismen skal med, ikke bare arealformelen.
3. **Koble alltid til elastisitet.** Størrelsen på dødvektstap og fordelingen av insidens forklares ved elastisitet; ved lineær etterspørsel varierer elastisiteten langs kurven, og det skal kandidaten se.
4. **Presiser tolkning og forutsetninger.** Der oppgaven er tvetydig (f.eks. «er det fortsatt skatt?») honoreres at kandidaten sier hvilken tolkning som legges til grunn — flere veiledninger gir uttelling for begge rimelige tolkninger.
5. **Utledning er pluss, ikke alltid krav.** Ramsey-regelen og dødvektstapsformelen «kan være nyttig å utlede matematisk», men en klar verbal/grafisk forklaring kan gi full uttelling der oppgaven sier «forklar kort».
6. **Henvisning til pensum.** Veiledningene peker eksplisitt på Rosen & Gaynor-sider og forelesningsnotater/PowerPoints — boka bør speile samme modellapparat og notasjon.

### Hva som skiller karakternivåene
- **Bunn (E–D):** riktig oppsett (likevekt før/etter skatt, riktig skattekile i figur), riktig hovedkonklusjon (hvem bærer skatten, at det oppstår dødvektstap), korrekt definisjon av begrepene.
- **Midt (C):** komplett utregning av insidens, proveny og dødvektstap for både enhets- og verdiskatt; korrekt kobling til elastisitet; korrekt klassifisering av progressivitet; korrekt Lagrange-oppsett i velferds-/arbeidstilbudsoppgaver.
- **Topp (A/B):** **utleder** Ramsey-regelen og dødvektstapsformelen (½·η·P·t²) og bruker det kvadratiske forholdet til å begrunne «mange små skatter»; ser at **substitusjons- og inntektseffekt** trekker motsatt på arbeidstilbudet (nettoeffekt usikker) og at kun substitusjonseffekten driver dødvektstapet; regner **elastisiteten eksplisitt** langs en lineær etterspørsel og forklarer hvorfor tapet vokser; behersker **valgparadokset** (finner en flertoppet tabell og viser cycling med parvis votering); drøfter **fordelingshensyn** som grunn til å avvike fra ren effektivitet (Ramsey vs. rettferdighet).

### Hva som gir uttelling
- **Mekanismen bak** teller mer enn tallet: *hvorfor* bærer den inelastiske parten skatten, *hvorfor* er profittskatt vridningsfri, *hvorfor* straffer høy kalkulasjonsrente sene prosjekter.
- **Fleksibilitet i metode:** grafisk *eller* analytisk utledning godtas der oppgaven ikke krever det ene; enkle tallverdier eller generell løsning begge greit.
- **Kobling på tvers:** effektivitet + fordeling i samme skatteoppgave; nåverdi + verdsetting i samme NKA.

---

## 5. Typiske feil

Utledet av det veiledningene advarer mot og det oppgavene er bygget for å avsløre:

1. **Tro at dødvektstapet er den manglende skatteinnbetalingen.** Skatteprovenyet er en *overføring* (ikke tap); tapet er trekantarealet fra redusert kvantum (eksplisitt påpekt i SØK2008/SØK2011-veiledningene).
2. **Glemme den verbale forklaringen på hvorfor tapet oppstår** (skattekile MBV > MK) — ren areal-utregning gir ikke full uttelling.
3. **Feil kobling elastisitet ↔ insidens/tap:** anta at den elastiske parten bærer mest skatt (motsatt — den *inelastiske* bærer mest), eller at dødvektstapet er lineært i skatten (det er **kvadratisk**).
4. **Behandle lineær etterspørsel som om elastisiteten er konstant** — den varierer langs kurven, og det forklarer hvorfor tapet er større ved høyere pris/kvantumsendring.
5. **Blande substitusjons- og inntektseffekt på arbeidstilbudet**, eller konkludere sikkert om nettoeffekten (den er usikker; det avhenger av hvilken effekt som dominerer).
6. **Feilklassifisere progressivitet:** kalle en proporsjonal skatt (T = t·I) progressiv, eller ikke se at bunnfradrag + flat sats gir stigende gjennomsnittsskatt.
7. **Summere ordinal nytte ukritisk / ignorere aggregeringsproblemet** i velferdsfunksjonen (Arrow).
8. **Overse rentens rolle i NKA** — ikke diskontere, eller ikke drøfte hvordan kalkulasjonsrenten endrer lønnsomheten.
9. **Ikke verifisere valgparadokset med parvis votering**, eller forveksle entoppet/flertoppet (det holder å finne *én* ordning uten dobbelttopp for entoppethet).
10. **Hoppe over andreordens-/kapasitetsbetingelser** (f.eks. produksjonskapasitet i profitt-/eksportoppgaver).
11. **Uklare figurer:** skattekile, konsument-/produsentpris, provenyareal (ABDE) og dødvektstapstrekant (BCD) må navngis.

---

## 6. Prioritering for boka

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Dødvektstap ved skatt/avgift** — regne ut som areal (½·ΔX·ΔP) og formelt (½·η·P·t²), forklare skattekilen, koble til elastisitet. ~95 % frekvens.
2. **Skatteinsidens i et marked** — likevekt før/etter enhets- og verdiskatt, fordeling på konsument/produsent, proveny, dødvektstap; relativ elastisitet avgjør. Den store regneoppgaven.
3. **Ramsey-regelen** — beskrive, utlede via Lagrange, tolke (skattlegg inelastisk mest; mange små skatter pga. kvadratisk tap). Toppkarakter-differensiator.
4. **NKA + nåverdi + kalkulasjonsrente** — samfunnsøkonomisk lønnsomhet, verdsetting, diskontering, rentens rolle, optimal prosjektstørrelse.
5. **Progressiv inntektsskatt** — definisjon (ART < MRT), analytisk vist, klassifisering, budsjettfigur.

### Nivå 2 — må kunne (gir 20–35 % når de kommer)
6. **Omfordeling og sosial velferdsfunksjon** — additiv/maks-min, avtakende grensenytte, velferdsmaksimering som Lagrange-problem, aggregeringsproblem/Arrow.
7. **Arbeidstilbud og inntektsskatt** — U(I,L), substitusjons- vs. inntektseffekt, usikker nettoeffekt.
8. **Kollektive beslutninger / valgparadoks** — entoppet vs. flertoppet, cycling, parvis votering, agendamakt.
9. **Velferdsteoremene** — 1. og 2. hovedteorem, forutsetninger, Pareto/generell likevekt/Edgeworth-boks.
10. **Begrepsrepertoaret** (ca. 15 gjengangere) — presise definisjoner, sikrer 20 %-oppgaven.

### Nivå 3 — bør kjenne godt (roterer inn)
11. **Intertemporalt valg / folketrygd / pensjon** — to-periodemodell, pay-as-you-go, sparing/lån.
12. **Skatt på bedrift/profitt/grunnrente** — vridningsfri profittskatt, kontantstrøm vs. skattemessig overskudd, friinntekt.
13. **Skatteunndragelse & Lafferkurven** — lovlig tilpasning vs. ulovlig, skattesats vs. proveny.
14. **Varehjelp vs. kontantoverføring** — mottaker minst like god med penger.
15. **Kapitalisering/eiendomsskatt** og **CO₂/klimavirkemidler** — sjeldne, dekk på begrepsnivå.

### Prognose for neste eksamen
Med stor sannsynlighet den **faste firdelte malen**: (1) 5 begrep (20 %), (2) ett kort teorispørsmål (10 %, ofte Ramsey-intuisjon), (3) en tallrik **skatteinsidens-/dødvektstapsoppgave** i et konkret marked (30–35 %), (4) en **storoppgave med to alternativer** — typisk **NKA/vei- eller baneinvestering** mot **progressiv inntektsskatt** eller **bedrifts-/grunnrenteskatt** (30–35 %). Omfordeling/velferdsfunksjon og arbeidstilbud/folketrygd roterer inn i alternativ-oppgaven eller som teori. Boka bør bygges som **to regnetunge søyler** — skattedelen (effektivitet, insidens, Ramsey, progressivitet) og prioriteringsdelen (NKA, nåverdi, omfordeling) — pluss et lettere kollektive-valg-kapittel og et matematisk verktøykapittel (Lagrange, elastisitet, nåverdi, trekantarealer).

---

## 7. Pensum, notasjon og kildeankere

### Pensumbok
**Harvey S. Rosen & Ted Gaynor, *Public Finance*** — eksplisitt referert i veiledningene med sidetall: Ramsey-regelen s. 348–351 (kap. 16), arbeidstilbud s. 407–411 (kap. 18, fig. 18.2/18.3), NKA/verdsetting av tid s. 160–161 og nåverdi/kalkulasjonsrente s. 147–157 (kap. 8), varehjelp vs. kontantoverføring s. 264–267 og fig. 12-3/12-4 (kap. 12), kollektive valg kap. 6, generell likevekt/Edgeworth-boks kap. 3, effektivitetstap kap. 15 (lign. 15.3, fig. 15.5/15.9), arbeidstilbud/stønad kap. 13. Boka bør følge samme modell- og notasjonsvalg og henvise til forelesningsnotater/PowerPoints (som veiledningene også gjør). `(verifiser utgave/sidetall mot gjeldende pensumliste før publisering.)`

### Notasjonskonvensjoner (fra veiledningene)
- **Skatt/marked:** pris P, kvantum X (eller Q), tilbud XS/PS, etterspørsel XD/PE, skattesats t (verdiskatt) eller T (enhetsskatt/skattebeløp), grensekostnad MK, dødvektstap = ½·ΔX·ΔP = ½·η·P·t², elastisitet η. Proveny = areal ABDE, dødvektstap = trekant BCD i standardfiguren.
- **Inntektsskatt:** inntekt I, skattebeløp T(I), marginalskatt MRT = T′(I), gjennomsnittsskatt ART = T/I, bunnfradrag B; progressiv ⇔ MRT > ART ⇔ d(T/I)/dI > 0.
- **Arbeidstilbud:** U(I, L) over inntekt I og fritid L, lønn w, tid T, netto lønn w(1−t); Lagrange F.
- **Velferd:** individuelle nyttefunksjoner Ui, sosial velferdsfunksjon (additiv W = ΣUi, evt. vektet, eller maks-min W = min Ui), inntekt Ii.
- **NKA:** nytte B(Q), kostnad/investering I(Q), realrente/kalkulasjonsrente r, nåverdi PV.
- **Kollektive valg:** grupper/partier med preferanserangering; entoppet/flertoppet; parvis flertallsvotering.

### Matematisk verktøykasse (formelsamling tillatt)
Lagrange-optimering (velferd, arbeidstilbud, Ramsey), partiell/vanlig derivasjon, elastisitetsberegning (η = (ΔX/X)/(ΔP/P)), nåverdi/diskontering (også uendelig annuitet), areal av trekanter, løsning av lineære likevektssystemer. Nivået er **regnende** (som SOK1002), i motsetning til det verbale ECON1220.

### Skal IKKE bygges tungt på (i motsetning til ECON1220)
- Asymmetrisk informasjon (uheldig utvalg/fløteskumming/moral hazard) som stor oppgave.
- Atferdsøkonomi/nåtidsskjevhet, spillteori/koordineringsspill (utover den enkeltstående CO₂-oppgaven), institusjonell økonomi (Coase/Ostrom).
- Optimal beskatning på Mirrlees-/masternivå (hører til SØK3007).
- Rent-seeking, partikonkurranse og byråkratimodeller (var SØK2103-kjerne; nå borte fra SØK2011).

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK2011/`.

**Sensorveiledninger/løsningsforslag lest grundig (7):** `Sensorveiledning_SØK2011_v19.pdf` (V2019), `SØK2011 Sensorveiledning høst19.pdf` (H2019, med full Ramsey-utledning), `SØK2011 V20.pdf` (V2020-veiledning), `Sensorveiledning søk2011 v2021.pdf` (V2021), `SØK2011 Sensorveiledning.pdf` («høst 2022»), `SØK2011 sensurveiledning_v2023.pdf` (V2023), `SØK2011 Sensurveiledning H23.pdf` (H2023, engelsk), `SØK2011 Eksamen_v24_sensorveil.pdf` (V2024). Flere er fullstendige fasiter med tallsvar, figurbeskrivelser og pensumhenvisninger.

**Komplette svarmanualer lest (2):** `Answers manual SØK2011 V22_final.pdf` (V2022) og `SØK2011 H21 (1).docx` (H2021) — begge engelske, med full utregning av insidens, arbeidstilbud (Lagrange), velferdsmaksimering og valgparadoks.

**Eksamensoppgaver lest grundig (V2019–V2024):** `SØK2011V-19.pdf`, `SØK2011H-19.pdf`, `SØK2011 V20.pdf`/`SØK2011_V20.pdf`, `SØK2011 Eksamen høst20.pdf` (H2020, eng.), `SOK2011_H2021.pdf` (H2021, eng.), `SØK2011 H22.pdf` (H2022, bm/nn/eng.), `SØK2011 V23.pdf`, `SØk2011 V24.pdf` (V2024).

**Delvis bildebaserte (dekket via veiledning):** `SØK2011 H23.pdf`, `SØK2011.pdf` (ga lite tekst med pdftotext; innhold dekkes av de tilsvarende sensorveiledningene).

**Forgjenger-arkiv skummet for temahistorikk:**
- `~/Desktop/Eksamner/NTNU/SOK2008/` (nedlagt «Offentlig økonomi», 2012–2019): praktisk talt identisk skattedel — samme lærebok (Rosen & Gaynor), samme oppgaver om dødvektstap/Ramsey/arbeidstilbud/skatteunndragelse; en SØK2008-veiledning henviser direkte til «Øving 2, SØK2011 høsten 2018». Bekrefter kontinuiteten i skattekjernen.
- `~/Desktop/Eksamner/NTNU/SOK2103/` (nedlagt «Politisk økonomi», 2011–2018): tilførte det politisk-økonomiske sporet — medianvelger-teoremet, partikonkurranse i to dimensjoner, rent-seeking, folkeavstemning vs. representativt valg. I SØK2011 er dette redusert til kollektive-beslutninger-oppgaven (valgparadoks/entoppede preferanser); rent-seeking/byråkrati er ikke videreført.

**Merknader om kildene:**
- Emnet tilbys både vår og høst; arkivet dekker begge semestre 2019–2024.
- Formatet skiftet fra «klassisk» (3–5 spissede oppgaver, t.o.m. ~2019) til en **fast firdelt mal** (begrep 20 % + kort teori 10 % + skatteinsidens 30–35 % + to-alternativers storoppgave 30–35 %) som er stabil fra V2022.
- Oppgaver gis på bokmål, nynorsk og (fra 2020) engelsk; svarmanualene er engelske.
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modellsammenhengene, begrepsdefinisjonene og tallsvarene er allmenne fagfakta uten verkshøyde.
