# Eksamensanalyse: SOS1120 Kvantitativ metode (UiO, Institutt for sosiologi og samfunnsgeografi)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på det tilgjengelige eksamensarkivet ved ISS/UiO: 18 distinkte oppgavesett (H2003, V2004, H2004, H2005, H2006 + utsatt, H2007 + utsatt, H2008, H2009, H2010, H2011, H2012, H2013, V2015, V2016, V2017, V2018) og 5 sett med fullstendig sensorveiledning (H2011, V2015, V2016, V2017, V2018). Perioden dekker 2003–2018. **Alt innhold er omskrevet med egne ord.** Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett; formler, Stata-kommandonavn og standard statistisk notasjon er faglig allmenneie.
>
> **Emnet er nedlagt.** SOS1120 ble erstattet av SOSGEO1120 – Kvantitativ metode; siste eksamen var vår 2019. Emnet gir 10 studiepoeng og er en innføring i grunnleggende statistiske metoder for samfunnsvitenskapelig analyse, med **Stata** som verktøy. Pensum skiftet underveis: det gamle regimet (t.o.m. 2013) bygde på en sosiologisk metodebok av Ringdal-typen (enhet/mangfold, krysstabellanalyse, gamma/Cramers V, forskningsdesign); det nye regimet (2015→) bygde på en mer statistikkorientert pensumbok (normalfordeling, samplingfordeling, konfidensintervall, standardfeil) supplert med et eget kapittel om multippel regresjon og et formelark.
>
> **Sentral konklusjon om arketype:** SOS1120 er et **hybrid drøftings-/regnefag på linje med STV1020 og psy1010, men med tydeligere statistikk-/regnetyngde.** I motsetning til STV1020 inneholder SOS1120 (særlig fra 2015) faktisk sannsynlighetsregning: standard normalfordeling, Z-skårer, samplingfordeling, sentralgrenseteoremet og utregning av sannsynligheter. **Konfidensintervall er selve bærebjelken** i det nye regimet og går igjen i nesten hver oppgave. Boken bør derfor vekte statistikkdelen tyngre (~60 %) enn drøftingsdelen (~40 %), men holde solid på metodedrøftingen (kausalitet, målenivå, utvalg, design).

---

## 1. Eksamensform og utvikling

### Form

| Periode | Form | Struktur | Hjelpemidler |
|---|---|---|---|
| 2003–2005 | Skriftlig skoleeksamen på papir, **6 timer** (2003), senere 4 timer. Rene essay-/utregningsoppgaver | 2 hovedoppgaver; oppgave 1 (2/3) statistikk-case, oppgave 2 (1/3) med **valg mellom 2A og 2B** (forskningsdesign / survey / etikk) | Kun **ikke-programmerbar kalkulator**. Kjikvadrat- og normalfordelingstabell vedlagt |
| 2006–2013 | Skriftlig skoleeksamen på papir, **4 timer**. Gjennomslagsark (original + kopi). Flervalgsinnslag («multiple choice») introdusert gradvis fra ~2012 | Én sammenhengende, tematisk case (partnervalg/sosial reproduksjon, tv-titting, kulturbruk) med 6–8 hovedoppgaver a)–h). Blanding av deskriptiv statistikk, krysstabell (prosentdifferanse, gamma, Cramers V, kjikvadrat), stimodell og multippel regresjon | Ikke-programmerbar kalkulator. T-fordelings- og kjikvadrattabell vedlagt |
| 2015 | Skriftlig skoleeksamen på papir, **4 timer**. Overgang til nytt pensum | Sammenhengende case (GSS, «the self made man»), 10 hovedoppgaver: målenivå → deskriptiv → utvalg → skjevhet/normalfordeling → krysstabell/kjikvadrat → konfidensintervall → korrelasjonstabell → stimodell → multippel regresjon → samspill/dummy | **Alle pensumbøker + programmerbar kalkulator + 2 A4-ark egne notater + notater i bøkene** |
| 2016–2017 | Digital eksamen i **Inspera** (V2016) / papir med samme profil (V2017), 4 timer. **Del 1: flervalg (MC)** + **Del 2: utregningsoppgaver** | Del 1: 13 MC-spørsmål (sentraltendens, standardavvik, boksplott, skjevhet, standard normalfordeling/Z, standardfeil, samplingfordeling, KI-tolkning). Del 2: kjikvadrat for hånd, KI for andel, bivariat regresjon (t-test, KI, prediksjon, R², residual), to-utvalgs t-test, multippel regresjon m/dummy og samspill | Som 2015. Inspera-tallfelt tar 2 desimaler |
| 2018 | Digital skoleeksamen i **Inspera**, 4 timer. **Tre bolker** | **Bolk 1: flervalg. Bolk 2: oppgaver i STATA** (åpne datasett `sysuse nlsw88`, kjøre `ttest`/`reg`, lime inn kode). **Bolk 3: håndregning + tekst** (standardavvik, to-utvalgs t-test, sentralgrenseteorem, KI-tolkning, Simpsons paradoks, multippel regresjon) | Som 2015. −0,25 for hvert gale svar i oppg. 1–13 |
| SOSGEO1120 (2019→) | Emnet erstattet | (Ikke i arkivet) | – |

### Karakter- og poenghistorikk (eksplisitt i veiledningene)

| Sett | Maks | E | D | C | B | A |
|---|---|---|---|---|---|---|
| V2015 | 42 | 13 | 20 | 25 | 34 | 38 |
| V2016 | 39,5 | 10 | 14 | 22 | 30 | 36 |

Bestått (E) krever i praksis at man løser de mekaniske kjerneoppgavene (målenivå, deskriptiv statistikk, én KI-utregning, tolke en regresjonskoeffisient, en enkel t-test). A krever bredde på tvers av både statistikkutregning og metodedrøfting, med korrekt tolkning i kontekst.

### Konstanter på tvers av alle sett

- **Alt er pakket inn i en samfunnsvitenskapelig case** — sosial ulikhet, arbeidsmarked/inntekt, utdanning og sosial bakgrunn, helse/levekår, kulturbruk, tv-titting, kriminalitet/ADHD. Konteksten er alltid sosiologisk, ofte med amerikanske GSS-data eller norske levekårsdata.
- **Hjelpemidlene ble stadig romsligere** (fra kun kalkulator i 2003 til alle bøker + notater + programmerbar kalkulator fra 2015). Ren formelgjengivelse gir derfor lite; poengene ligger i **riktig metodevalg, korrekt utregning vist trinn for trinn, og substansiell tolkning i kontekst**.
- **Følgefeil straffes minimalt.** Sensorveiledningene sier gjennomgående at galt mellomsvar ikke skal trekke videre nedover, og at forståelse gir uttelling selv ved regnefeil — skjønnsmessig vurdering.
- **Del 2 følger forskningsprosessen** fra måling → beskrivelse → usikkerhet/inferens → sammenheng → årsak, ofte med samme datasett gjennom hele settet.
- **Overgangen rundt 2015 er den viktigste utviklingslinjen:** faget dreide fra sosiologisk krysstabellmetode (gamma, Cramers V, design-essay) mot statistisk inferens (normalfordeling, samplingfordeling, konfidensintervall, standardfeil) med praktisk Stata-bruk.

---

## 2. Temafrekvens-tabell

Basert på hele arkivet, gruppert i **gammelt regime** (2003–2013, ~14 papirer) og **nytt regime** (2015–2018, 4 sett + veiledninger). «Høy/middels/lav» angir hvor ofte temaet opptrer som egen deloppgave innen hver æra. Gjenganger-scoren vekter helheten, med ekstra vekt på det nye regimet (nærmest dagens eksamen).

| Tema | Gammelt regime (2003–13) | Nytt regime (2015–18) | **Gjenganger-score** |
|---|---|---|---|
| **Målenivå** (nominal/ordinal/intervall/forholdstall) — bestem + begrunn | Høy | Høy | **~95 %** |
| **Deskriptiv statistikk fra frekvenstabell** (modus, median, gjennomsnitt, kumulativ %, variasjonsbredde, skjevhet) | Høy | Høy | **~95 %** |
| **Tolke regresjonskoeffisient + konstantledd i kontekst** («kontrollert for») | Høy | Høy | **~95 %** |
| **R² — tolkning** (forklart varians) og endring mellom modeller | Høy | Høy | **~90 %** |
| **Kjikvadrat-test** (forventede frekvenser = rad·kol/N, df = (r−1)(c−1), konklusjon) | Høy | Høy | **~85 %** |
| **Konfidensintervall** (estimat ± t·SE) + tolkning | Middels | **Svært høy** | **~85 %** |
| **Prediksjon** — regn forventet Y for gitte X-verdier (vis utregning) | Høy | Høy | **~85 %** |
| **t-test / signifikanstest** (regresjonskoeffisient, gjennomsnitt, differanse) | Høy | Høy | **~85 %** |
| **Hypoteseformulering** (H0/HA som fulle setninger, to- vs ensidig) | Høy | Høy | **~85 %** |
| **Utvalg / sannsynlighetsutvalg / generalisering** + frafall/svarprosent | Høy | Middels | **~75 %** |
| **Standardfeil beregnes** (SE = s/√n; SE(p̂) = √[p̂(1−p̂)/n]; SE(diff)) | Lav | **Svært høy** | **~70 %** |
| **Krysstabell/prosentdifferanse + Cramers V** | Høy | Middels | **~70 %** |
| **Årsaksmodell/stimodell** (bakenforliggende, mellomliggende, spuriøs) tegne | Høy | Middels | **~70 %** |
| **Kontroll/spuriøsitet** — koeffisient synker i modell 2 (indirekte effekt) | Middels | Høy | **~65 %** |
| **Dummyvariabler / referansekategori** (kjønn, tid, race) | Middels | Høy | **~60 %** |
| **Samspill/interaksjon** — utlede to likninger fra samspillsledd | Middels | Høy | **~60 %** |
| **Standard normalfordeling / Z-skåre / normalfordelingstabell** | Lav (tabell vedlagt) | Høy | **~55 %** |
| **Samplingfordeling + sentralgrenseteoremet** (konseptuelt) | Lav | Høy | **~50 %** |
| **To-utvalgs t-test** (differanse mellom to gruppers gjennomsnitt) | Middels | Høy | **~55 %** |
| **Standardavvik — hva det betyr / regn det ut** | Middels | Middels | **~50 %** |
| **Gamma** (γ = (P−Q)/(P+Q)) og valg av korrelasjonsmål etter målenivå | Høy | Lav (utgått) | **~45 %** |
| **Pearsons r — tolke korrelasjonstabell**, hvilke variabler hører hjemme | Middels | Middels | **~40 %** |
| **Beta / standardiserte koeffisienter** — hvilken variabel betyr mest | Middels | Middels | **~45 %** |
| **Residualer / forutsetninger for regresjon** (linearitet, uavhengighet, normalfordelte restledd) | Lav | Middels | **~40 %** |
| **Lineær vs. ikke-lineær sammenheng / annengradsledd** | Lav | Middels | **~30 %** |
| **Case-/forskningsdesign-essay** (likhets-/forskjellsteknikk, survey, forskningsetikk, intervjutyper) | Middels (valgoppgave) | Nesten borte | **~30 %** |
| **Tidsdesign / longitudinelle data** (panel, gjentatt tverrsnitt, erindringsdata) | Middels | Lav | **~25 %** |
| **Simpsons paradoks** (marginale vs. betingede fordelinger) | Lav | Middels | **~20 %** |
| **Stata-praksis** (åpne datasett, kjøre `ttest`/`reg`, lime inn kode) | – | Middels (V2018) | **~15 %** (men økende) |
| **Randomisert eksperiment vs. observasjonsdata / kausalitet** | Middels | Middels | **~35 %** |

**Viktigste funn:**

1. **Fire temaer er praktisk talt garantert i hvert sett:** (a) bestem og begrunn **målenivå**; (b) **deskriptiv statistikk fra en frekvenstabell**; (c) **tolke en regresjonskoeffisient og et konstantledd i kontekst**; (d) **tolke R²**. Dette er ryggraden og må sitte perfekt.
2. **Konfidensintervall er det nye regimets signatur.** Fra 2015 regnes KI i nesten hver oppgave — for et gjennomsnitt, en andel, en differanse og en regresjonskoeffisient. Formelen (`estimat ± t·SE`) er den samme; det som varierer er hvordan standardfeilen regnes ut og hvilken kritisk verdi (t eller z) som brukes. **Tolkningen** av KI («95 % sikker» = en metode som fanger den sanne verdien 95 % av gangene i det lange løp) testes eksplisitt og gjentatt.
3. **Faget skiftet karakter rundt 2015.** Det gamle regimet var sosiologisk krysstabellmetode (gamma, Cramers V, prosentdifferanse) pluss design-essay (likhets-/forskjellsteknikk, survey, etikk). Det nye regimet er statistisk inferens: normalfordeling, samplingfordeling, standardfeil, konfidensintervall, t-tester og Stata. **Boken bør prioritere det nye regimet**, men beholde et solid krysstabell-/kjikvadrat-kapittel (kjikvadrat lever i høyeste grad videre) og et kortere design-/kausalitetskapittel.
4. **Kjikvadrat-testen regnes for hånd** og går igjen i begge æraer: finn forventede frekvenser (rad·kolonne/N), regn χ² = Σ(O−E)²/E, finn df = (r−1)(c−1), sammenlign mot kritisk verdi eller p-verdi. Dette er en av de sikreste utregningsoppgavene.
5. **Sannsynlighetsregning skiller SOS1120 fra STV1020.** Standard normalfordeling, Z-skårer, oppslag i normalfordelingstabell, samplingfordeling, sentralgrenseteoremet og sannsynlighetsutregninger (P(x̄ > verdi)) er faktisk pensum her — det er de ikke i STV1020. Nivået er lavterskel (tabelloppslag, tommelregler), men begrepene må forstås.
6. **Stata er kursets verktøy og dukket opp på selve eksamen fra 2018.** Kandidaten åpner et datasett, kjører `ttest`/`reg`/`sum`/`tabstat` og limer inn koden. Boken bør vise hvordan en Stata-utskrift ser ut (regresjonstabell med Coef./Std.Err./t/P>|t|/Beta) og hvordan man leser den — dette er også formen på tabellene i papiroppgavene.

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med krav destillert fra sensorveiledningene. Grovt firedelt: **(A–C) måling og beskrivelse**, **(D–G) usikkerhet og inferens**, **(H–L) sammenheng og regresjon**, **(M–O) årsak og design**.

### A. Målenivå — bestem og begrunn
- **Krav:** Fastslå høyeste målenivå (nominal/kategorisk, ordinal, intervall, forholdstall) for gitte variabler ut fra kodebeskrivelsen, og **begrunn** (nominal = gjensidig utelukkende, ikke-rangerbare kategorier; ordinal = rangerbar; forholdstall = fast avstand + naturlig nullpunkt). Vit hvilke operasjoner hvert nivå tillater (modus alle nivå; median ≥ ordinal; gjennomsnitt/SD ≥ metrisk).
- **Frekvens:** ~95 %.
- **Omskrevet eksempel:** «Variabelen `region` er kodet 1 = østkyst, 2 = sentrale stater … Hvilket målenivå er dette, og hvorfor? Kan vi bruke median på den?» (Svar: nominal; nei — landsdeler kan ikke rangeres.)

### B. Deskriptiv statistikk fra frekvens-/fordelingstabell
- **Krav:** Les **modus** (hyppigste kategori), **median** (finn via kumulativ prosent — kategorien der kumulativ % passerer 50), **gjennomsnitt** (kun metrisk), regn **kumulativ/relativ andel** («andel med bachelor eller høyere»), **variasjonsbredde**. Vurder **skjevhet** fra histogram/boksplott (høyreskjev → gjennomsnitt > median). Vit at ekstremverdier trekker gjennomsnittet, ikke medianen.
- **Frekvens:** ~95 %.
- **Omskrevet eksempel:** «Gjennomsnittet er 5,4 og medianen 2. Hva forteller det om fordelingen?» (Svar: høyreskjev — de fleste har få, et mindretall svært mange.)

### C. Standardavvik, standardfeil og samplingfordeling — forståelse
- **Krav:** Skille **standardavvik** (spredning i dataene: datapunktene ligger i snitt SD fra gjennomsnittet) fra **standardfeil** (usikkerhet i estimatet = beste gjetning på standardavviket i samplingfordelingen). Regn **SE = s/√n**. Forklar **samplingfordelingen** (fordelingen av alle gjennomsnitt man ville fått ved å trekke utvalget mange ganger) og **sentralgrenseteoremet** (samplingfordelingen til gjennomsnittet blir tilnærmet normalfordelt ved stort N, uansett fordeling i populasjonen).
- **Frekvens:** ~70 % (nytt regime nesten alltid).
- **Omskrevet eksempel:** «Forklar med egne ord hovedpoenget i sentralgrenseteoremet og hva vi kan bruke det til.»

### D. Standard normalfordeling og Z-skåre
- **Krav:** Bruk **standard normalfordelingstabell** til å finne areal (P(Z < z), P(Z > z)) og til å finne z for en gitt andel (0,975 → 1,96). Standardiser: **Z = (x − x̄)/s**. Vit at z = 1,96 svarer til 95 % (tosidig), z = 1,64 til 90 %, z = 2,58 til 99 %. Regn enkle sannsynligheter for et utvalgsgjennomsnitt (P(x̄ > verdi) via SE).
- **Frekvens:** ~55 % (nytt regime).
- **Omskrevet eksempel:** «Hvilken andel av standard normalfordelingen ligger over Z = −1,62?»

### E. Konfidensintervall
- **Krav:** Regn **KI = estimat ± kritisk verdi · SE**. Velg riktig kritisk verdi (t ved lite N med df = N−1; z/normalfordeling ved stort N). Ulike varianter: KI for **gjennomsnitt** (SE = s/√n), for en **andel** (SE = √[p̂(1−p̂)/n]), for en **differanse** (SE = √[SE₁² + SE₂²]), for en **regresjonskoeffisient** (SE gitt). **Tolkningen er poenget:** «95 % sikker» betyr at metoden fanger den sanne populasjonsverdien i 95 % av alle slike utvalg i det lange løp — ikke at det er 95 % sannsynlig at *dette* intervallet inneholder verdien.
- **Frekvens:** ~85 % (nytt regime nesten alltid, flere ganger per sett).
- **Omskrevet eksempel:** «38 % av 264 innsatte vokste opp i familie med rusproblemer. Regn standardfeilen og et 95 % konfidensintervall, og tolk resultatet.» (SE = √[0,38·0,62/264] ≈ 0,030; KI = 0,38 ± 1,96·0,030 = [0,32; 0,44].)

### F. Kjikvadrat-test (for hånd)
- **Krav:** Firetrinns prosedyre: (1) formuler H0 (ingen sammenheng) og HA; (2) regn **forventet frekvens** per celle = (radsum · kolonnesum)/N; (3) regn **χ² = Σ(O−E)²/E**; (4) finn **df = (rader−1)(kolonner−1)** og konkluder mot kritisk verdi i kjikvadrattabellen eller mot p-verdien. Kjenn både **klassisk** (sammenlign χ² mot kritisk verdi) og **moderne** (sammenlign p mot α) variant.
- **Frekvens:** ~85 %.
- **Omskrevet eksempel:** «Hvis nullhypotesen er sann, hvor mange forventer du i cellen ‘god helse, ytre øst’? χ² ble 238,3 med df = 3 — hva er konklusjonen?»

### G. t-test og hypotesetesting
- **Krav:** Sett opp **H0/HA** (som fulle setninger; vær bevisst **to- vs. ensidig** — ensidig gir halv uttelling der oppgaven ber om tosidig). Regn **t = estimat/SE** (regresjonskoeffisient: t = b/SE(b); differanse: t = (x̄₁−x̄₂)/SE(diff)). Finn **df** (regresjon: N−k−1; ett gjennomsnitt: N−1; to-utvalgs: gitt/tilnærmet). Sammenlign |t| mot kritisk verdi (tommelregel |t| > ~2 ≈ signifikant på 5 %) og **konkluder i kontekst**. Ved stort N brukes normalfordelingen (z). Ved en tolkningsoppgave: **retningen** på forskjellen må med, ikke bare «signifikant».
- **Frekvens:** ~85 %.
- **Omskrevet eksempel:** «b = 0,675 med SE = 0,053, N = 105. Gjør en t-test og konkluder.» (t = 12,74, df = 103 → svært lav p → forkast H0.)

### H. Krysstabell, prosentdifferanse og korrelasjonsmål
- **Krav:** Les prosentueringsretningen for å finne avhengig/uavhengig variabel. Regn **prosentdifferanse** (differansen mellom to gruppers andel på samme utfallskategori) og tolk den som styrke. Tolk **Cramers V** (0–1, standardisert; sjelden nær 1 i samfunnsvitenskap) og — gammelt regime — **gamma** (γ = (P−Q)/(P+Q), for to ordinale variabler). Vit hvorfor gamma ofte er høyere enn Cramers V (gamma bruker bare like/ulikt ordnede par). Koble målenivå til riktig mål: to metriske → Pearsons r; to ordinale → gamma; nominale → kjikvadrat/Cramers V.
- **Frekvens:** ~70 % (prosentdifferanse + Cramers V lever videre; gamma nesten kun gammelt regime).
- **Omskrevet eksempel:** «Regn prosentdifferansen i tabellen og tolk den. Tolk Cramers V = 0,30.»

### I. Pearsons r og korrelasjonstabell
- **Krav:** Tolk en korrelasjonskoeffisient (fortegn + styrke). Forklar hvorfor diagonalen er 1 (variabel korrelert med seg selv). Se hvilke(n) variabel som **ikke hører hjemme** i en Pearson-tabell (nominale variabler — Pearsons r krever kontinuerlige variabler på intervall-/forholdstallsnivå).
- **Frekvens:** ~40 %.

### J. Skrive og tolke regresjonsmodellen
- **Krav:** Skriv modellen på **generell form** Yᵢ = b₀ + b₁X₁ᵢ + b₂X₂ᵢ + … + eᵢ (residualleddet med for full uttelling) og **estimert form** ved å sette inn tallene. **Konstantledd** = forventet Y når alle X = 0 (tolk i kontekst; flagg om 0 er utenfor dataområdet, f.eks. alder 0, slik at konstantleddet ikke gir substansiell mening). **Koeffisient** = forventet endring i Y per enhets økning i X, **kontrollert for** de andre variablene («kontrollert for» må eksplisitt med — se sensorkrav). **Beta** (standardisert) brukes til å rangere hvilken variabel som betyr mest.
- **Frekvens:** ~95 % (tolkning) / ~85 % (prediksjon).
- **Omskrevet eksempel:** «Tolk konstantleddet og koeffisienten for alder i modell 1. Predikér inntekt for en 45-åring med 14 års utdanning.»

### K. Dummyvariabler og samspill/interaksjon
- **Krav:** **Dummy:** en kategorisk variabel kodes 0/1; koeffisienten er forskjellen fra referansekategorien. **Samspill:** legg til et produktledd (f.eks. `kjønn·alder`); koeffisienten sier hvordan effekten av den ene variabelen endres med den andre. **Utled to regresjonslikninger** fra en modell med samspillsledd ved å sette dummyen = 0 og = 1 (klassisk 2–3-poengs oppgave). Ikke forveksle **kontroll** (fjerner spuriøsitet) med **interaksjon** (betinget effekt).
- **Frekvens:** ~60 %.
- **Omskrevet eksempel:** «Modellen er Ŷ = 46246 + 63,6·parsei + 2917·år2000 + 148·(parsei·år2000). Utled én likning for før 2000 og én for etter 2000.»

### L. Kontroll, spuriøsitet og indirekte effekt
- **Krav:** Forklar hvorfor en koeffisient **synker** når man legger til kontrollvariabler i modell 2: den opprinnelige effekten virket (delvis) **indirekte** gjennom mellomliggende variabler, eller sammenhengen var **spuriøs** (felles bakenforliggende variabel Z). Skille de to. Vit at multippel regresjon gir den **direkte** effekten kontrollert for øvrige variabler.
- **Frekvens:** ~65 %.

### M. Årsaksmodell / stimodell
- **Krav:** Tegn et årsak-virkningsdiagram (bokser + piler) med korrekt tidsrekkefølge: **bakenforliggende** variabel (ligger forut, kan skape spuriøsitet), **mellomliggende** variabel (formidler indirekte effekt), **spuriøs** sammenheng. Definer spuriøsitet (ingen årsakssammenheng X→Y fordi en tredje variabel Z forårsaker både X og Y).
- **Frekvens:** ~70 %.

### N. Utvalg, generalisering og representativitet
- **Krav:** Vurder om et utvalg er et **sannsynlighetsutvalg** (kjent trekkesannsynlighet for hver enhet — forutsetning for generalisering/feilmarginer). Drøft **frafall/lav svarprosent** som trussel mot representativitet (48 % svar → mulig systematisk skjevhet), og at samsvar på noen kjennetegn (alder/kjønn) **ikke garanterer** representativitet på andre. For lite utvalg → stor usikkerhet (bred SE/KI), ikke nødvendigvis skjevhet.
- **Frekvens:** ~75 %.

### O. Forskningsdesign og kausalitet (drøfting — mest gammelt regime)
- **Krav:** Skille **likhetsteknikk vs. forskjellsteknikk** i caseundersøkelser (most similar / most different). Drøfte **survey-design vs. samtaleintervju**, innsamlingsmåter, forskningsetikk ved sensitive tema. **Randomisert eksperiment** som kausal gullstandard vs. observasjonsdata (kan sjelden utelukke alle bakenforliggende Z). **Simpsons paradoks** (en sammenheng på aggregatnivå snus når man ser på undergrupper — Berkeley-opptaket).
- **Frekvens:** ~35 % (case-essay ~30 %, i praksis utgått etter 2015; kausalitet/eksperiment lever videre).

---

## 4. Sensorens krav

### Faste metaregler på tvers av veiledningene

1. **Følgefeil straffes ikke.** Galt mellomsvar skal ikke trekke videre nedover i deloppgavene; hvert trinn poengsettes for seg. Delvis riktig utregning gir delvis uttelling. Skjønnsmessig vurdering der forståelse vises.
2. **Forståelse gir uttelling selv ved regnefeil.** «Hvis utregningen demonstrerer forståelse skal det gi skjønnsmessig uttelling selv om svaret blir galt» (V2018). Slurve-/avrundingsfeil trekker lite.
3. **«Kontrollert for» er et hardt krav ved koeffisienttolkning.** V2015 trekker eksplisitt 0,5 poeng hvis kandidaten glemmer å si at effekten er kontrollert for de andre variablene.
4. **Beta må oppgis med tall.** Når en oppgave spør hvilken variabel som betyr mest, må den standardiserte koeffisienten (beta) nevnes med verdi — ikke bare «alder betyr minst» (V2015: 0,5 i trekk uten tallet).
5. **KI-tolkningen må treffe den frekventistiske betydningen.** «95 % sikker» = en metode som fanger den sanne verdien 95 % av gangene i det lange løp. Løs formulering om at «det er 95 % sannsynlig at verdien ligger i intervallet» får ikke full uttelling. Tolkningen vektes lavere enn utregningen (typisk 1 p utregning + 0,5 p tolkning) fordi den gjentas.
6. **To- vs. ensidig test presiseres.** Der oppgaven ber om tosidig test, gir ensidig svar **halv uttelling** (V2018).
7. **Retning i konklusjonen, ikke bare signifikans.** Ved tolkning av en t-test må retningen på forskjellen med («fagforeningsmedlemmer tjener *mer*»), ikke bare «signifikant» (V2018 14c).
8. **Vær raus der oppgaveteksten har feil.** Der eksamensteksten selv inneholder en uklarhet (feil «øker» i stedet for «endres»; komma brukt som tusenskille som forveksles med desimaltegn; uspesifisert modell), skal sensor godta rimelige tolkninger og gi full pott (V2015, V2016, V2018).
9. **Riktig svar på riktig spørsmål.** På Simpsons paradoks-oppgaven gir det **0 poeng** å regne ut en kjikvadrat-test — poenget er å identifisere at marginale og betingede fordelinger spriker (V2018).
10. **MC-trekk varierer.** Noen sett trekker for gale flervalgssvar (V2018: −0,25 i oppg. 1–13; V2016 oppg. 7: minus for hvert feil), andre ikke. Del 1 og Del 2 vektes likt og summeres.

### Hva som skiller toppkandidatene

- Gir **både teknisk og substansiell tolkning** («b = −0,187 betyr at alkoholkonsumet synker med 0,187 enheter per år eldre»).
- Ser at en **koeffisient som synker i modell 2** skyldes indirekte effekt/mediering eller spuriøsitet, og formulerer mekanismen konkret.
- Kommenterer om **konstantleddet er substansielt meningsfullt** (flagger at 0 er utenfor dataområdet).
- Bruker riktig **kritisk verdi** (t ved lite N, z ved stort N) og begrunner valget.
- Skiller **standardavvik fra standardfeil**, og **kontroll fra interaksjon**, presist.
- Formulerer **KI-tolkningen** frekventistisk og korrekt.

---

## 5. Typiske feil

1. **Feil målenivå** — behandle en ordinal variabel som metrisk (regne gjennomsnitt på en 1–5-skala uten forbehold), eller kalle en forholdstallsvariabel «intervall».
2. **Regne median/gjennomsnitt på for lavt målenivå** — median på nominal `region`, gjennomsnitt på kategorisk variabel.
3. **Pearsons r på en nominal variabel** — ta med `region` i en Pearson-korrelasjonstabell (krever kontinuerlige variabler).
4. **Blande standardavvik og standardfeil** — bruke s i stedet for s/√n i et konfidensintervall, eller motsatt.
5. **Glemme «kontrollert for»** ved tolkning av en regresjonskoeffisient i en multippel modell.
6. **Tolke konstantleddet uten kontekst** eller tolke et konstantledd som ikke er substansielt (Y når X = 0 ligger utenfor dataområdet).
7. **KI-tolkning som sannsynlighet for enkeltintervallet** i stedet for metode-frekvens i det lange løp.
8. **Feil kritisk verdi / feil df** — kjikvadrat: df = (r−1)(c−1); ett gjennomsnitt: N−1; regresjon: N−k−1. Lese feil kolonne i t-/z-tabellen.
9. **Ensidig test der tosidig kreves** (eller inkonsistent mellom deloppgaver).
10. **Konkludere «signifikant» uten retning** eller uten å sammenligne mot kritisk verdi/α.
11. **Glemme residualleddet** i regresjonsligningen på generell form.
12. **Forveksle kontroll og interaksjon** — «kontroller for kjønn» der oppgaven ber om et samspillsledd med kjønn.
13. **Regne kjikvadrat i stedet for å forklare Simpsons paradoks** (0 poeng).
14. **Behandle et skjevt/selektert utvalg som representativt** — regne videre på en survey med lav svarprosent uten å problematisere frafall.
15. **Forveksle usikkerhet og skjevhet** ved lite utvalg — lite N gir stor usikkerhet (bred SE), ikke nødvendigvis skjevhet, når utvalget er tilfeldig trukket.

---

## 6. Begreps- og notasjonsapparat

Notasjonen er stabil. Boken bør bruke nøyaktig denne, og vise Stata-utskrifter i den formen tabellene faktisk har.

### Notasjonsvalg
- **Regresjon:** Yᵢ = b₀ + b₁X₁ᵢ + b₂X₂ᵢ + … + eᵢ (også skrevet med α for konstantledd og β for koeffisienter). Predikert verdi Ŷ. Residual e = Y − Ŷ. Standardiserte koeffisienter: β/beta. Samspillsledd: b₃(X₁·X₂). Stata-tabell: `Coef.`, `Std. Err.`, `t`, `P>|t|`, `Beta`, `R-squared`, `Adj R-squared`, `Root MSE`, `F`.
- **Norske fagtermer** konsekvent: avhengig/uavhengig variabel, bakenforliggende/mellomliggende variabel, spuriøs sammenheng, indirekte/direkte effekt, dummyvariabel, referansekategori, samspill/interaksjon, forklart varians, restledd/residual, kontrollere for.
- **Målenivå:** nominal-/kategorisk, ordinal, intervall, forholdstall (høyeste nivå = forholdstall med naturlig nullpunkt). Dikotom/binær = to verdier.
- **Inferens:** nullhypotese H0 / alternativhypotese HA (også «forskningshypotese»), signifikansnivå α, p-verdi (signifikanssannsynlighet), kritisk verdi, frihetsgrader df, testobservator t/z, samplingfordeling, konfidensintervall (KI), standardfeil SE.

### Må beherskes aktivt (regnes på nesten hvert sett)

**1. Deskriptive mål (fra frekvenstabell):**
- Modus, median (via kumulativ %, ≥ ordinal), gjennomsnitt X̄ = Σx/N (metrisk), variasjonsbredde = maks − min, relativ/kumulativ andel, standardavvik s = √[Σ(x−x̄)²/(n−1)].

**2. Krysstabellmål:**
- Prosentdifferanse; Cramers V (0–1); gamma γ = (P−Q)/(P+Q); forventet frekvens = (radsum·kolonnesum)/N.

**3. Kjikvadrat:**
- χ² = Σ(O−E)²/E; df = (rader−1)(kolonner−1); sammenlign mot kritisk verdi (kjikvadrattabell) eller p mot α.

**4. Regresjon:**
- b₀ = E(Y | alle X = 0); bⱼ = endring i Y per enhet Xⱼ (kontrollert for øvrige); Ŷ = b₀ + Σbⱼxⱼ; e = Y − Ŷ; R² ∈ [0,1] = forklart andel av variasjonen i Y. Dummy: forskjell fra referansekategori. Samspill: effekt av X₁ gitt X₂ = b₁ + b₃·X₂.

**5. Inferens og usikkerhet:**
- SE(gjennomsnitt) = s/√n; SE(andel) = √[p̂(1−p̂)/n]; SE(differanse) = √[SE₁² + SE₂²]; SE(b) gitt i tabell.
- Konfidensintervall: KI = estimat ± kritisk verdi · SE. Kritiske verdier: z = 1,64 (90 %), 1,96 (95 %), 2,58 (99 %); t fra tabell ved df.
- t = estimat/SE; df (regresjon) = N − k − 1; sammenlign |t| mot kritisk verdi / p mot α.
- Standardisering: Z = (x − x̄)/s; oppslag i standard normalfordelingstabell.

### Må forstås kvalitativt
- Målenivåenes egenskaper og tillatte operasjoner.
- Forskjellen standardavvik (spredning) vs. standardfeil (usikkerhet i estimat).
- Samplingfordeling og sentralgrenseteoremet; hvorfor normalfordelingen kan brukes ved stort N.
- Konfidensintervallets frekventistiske tolkning.
- Kausalitet: spuriøsitet, bakenforliggende/mellomliggende variabel, kontroll vs. interaksjon, randomisert eksperiment vs. observasjonsdata, Simpsons paradoks.
- Utvalgslogikk: sannsynlighetsutvalg, representativitet, generalisering, frafall/seleksjon.
- Statistisk vs. substansiell signifikans; forklart varians (R²).
- Longitudinelle design (panel, gjentatt tverrsnitt, erindringsdata); casedesign (likhets-/forskjellsteknikk).

### Skal IKKE bygges tungt på
- **Tunge sannsynlighetsbevis, fordelingsteori utover normalfordelingen, kombinatorikk, maximum likelihood, logistisk regresjon:** ikke pensum (OLS er gjennomgående, selv når Y er en 0/1- eller andelsvariabel).
- **Egen avansert Stata-programmering:** kandidaten kjører enkle kommandoer (`sum`, `tabstat`, `ttest`, `reg`) og leser utskrift; ingen loops/programmering.
- **Matrise-/kovariansregning.**

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **Målenivå** — bestem og begrunn; hvilke operasjoner hvert nivå tillater (~95 %).
2. **Deskriptiv statistikk fra frekvenstabell** — modus, median (via kumulativ %), gjennomsnitt, andeler, skjevhet (~95 %).
3. **Regresjonstolkning i kontekst** — konstantledd, koeffisient («kontrollert for»), R², prediksjon (Ŷ), residual (~95 %). Både teknisk og substansiell tolkning.
4. **Konfidensintervall** — estimat ± kritisk verdi · SE, med riktig SE (gjennomsnitt/andel/differanse) og korrekt frekventistisk tolkning (~85 %).
5. **Kjikvadrat-test for hånd** — forventede frekvenser, χ², df = (r−1)(c−1), konklusjon (~85 %).
6. **t-test og hypotesetesting** — H0/HA, t = estimat/SE, df, to-/ensidig, konklusjon med retning (~85 %).

### Nivå 2 — må kunne (gir de fleste resterende poengene)
7. **Standardfeil, samplingfordeling og sentralgrenseteoremet** — SE = s/√n og SE(andel), skille SD/SE, forklare samplingfordeling og CLT (~70 %).
8. **Standard normalfordeling og Z** — tabelloppslag, standardisering, kritiske verdier (~55 %).
9. **Krysstabell, prosentdifferanse og Cramers V** — lese prosentueringsretning, regne og tolke (~70 %).
10. **Kontroll/spuriøsitet + årsaksmodell** — hvorfor koeffisient synker; tegne stimodell med riktig rekkefølge (~70 %).
11. **Dummyvariabler og samspill** — utlede to likninger fra samspillsledd; referansekategori; kontroll vs. interaksjon (~60 %).
12. **Utvalg og generalisering** — sannsynlighetsutvalg, frafall/svarprosent, usikkerhet vs. skjevhet (~75 %).

### Nivå 3 — bør kjenne til (differensierer mot A)
13. **To-utvalgs t-test** for differanse mellom gruppers gjennomsnitt (~55 %).
14. **Residualer og forutsetninger** for regresjon (linearitet, uavhengighet, normalfordelte restledd); lineær vs. ikke-lineær/annengradsledd (~40 %).
15. **Gamma og valg av korrelasjonsmål** etter målenivå (gammelt regime, billig når det kommer) (~45 %).
16. **Pearsons r / korrelasjonstabell** — tolke, diagonal, hvilke variabler hører hjemme (~40 %).
17. **Beta / standardiserte koeffisienter** — rangere variablers betydning (~45 %).
18. **Stata-praksis** — åpne datasett, kjøre `ttest`/`reg`/`sum`, lese utskrift, lime inn kode (økende, V2018) (~15 %).
19. **Simpsons paradoks**, randomisert eksperiment vs. observasjonsdata, forskningsdesign-/case-essay (likhets-/forskjellsteknikk, survey, etikk, longitudinelle design) (~20–35 %).

### Prognose for neste eksamen
Forvent en **flervalgsdel** (deskriptiv statistikk, standardavvik/standardfeil, boksplott/skjevhet, standard normalfordeling/Z, samplingfordeling, KI-tolkning, spuriøsitet, utvalg) etterfulgt av en **utregningsdel** som følger forskningsprosessen på ett datasett: målenivå → deskriptiv statistikk → standardfeil/KI → kjikvadrat/t-test → bivariat og multippel regresjon (tolke koeffisienter, R², prediksjon, t-test, KI for koeffisient) → dummy/samspill (utled likninger) → årsaksmodell/kontroll, ofte med en **Stata-bolk**. De sikreste enkeltoppgavene: **bestem og begrunn målenivå**; **les modus/median/andel fra en frekvenstabell**; **regn standardfeil og et konfidensintervall + tolk det**; **gjennomfør en kjikvadrat-test for hånd**; **tolk konstantledd + koeffisient + R²**; **regn en prediksjon**; **gjennomfør en t-test av en regresjonskoeffisient**; **utled to likninger fra et samspillsledd**; **tegn en stimodell / forklar spuriøsitet**. Boken bør trene begge halvdeler — statistikkutregning (tyngdepunkt) og metodedrøfting — og bruke gjennomgående sosiologiske caser (sosial ulikhet, inntekt/arbeid, utdanning, helse, kultur).

### Anbefalt arketype
**Hybrid drøftings-/regnefag med statistikk-tyngdepunkt** — beslektet med STV1020 og psy1010, men mer regnetungt. Omtrent **60 % anvendt statistikk** (deskriptiv statistikk, standardfeil, konfidensintervall, kjikvadrat, t-tester, regresjonstolkning, normalfordeling/samplingfordeling) og **40 % metodedrøfting** (målenivå-resonnement, kausalitet/spuriøsitet, utvalg/generalisering, forskningsdesign). Statistikkdelen er lavterskel og tolkningsdrevet — ingen tunge bevis — men **mekanisk presisjon** (riktig SE, riktig df, riktig kritisk verdi, utregning vist trinn for trinn) må sitte. Boken bør organiseres etter forskningsprosessen slik Del 2-casene er, med et eget solid kapittel om **konfidensintervall og standardfeil** (fagets signatur), et om **kjikvadrat/krysstabell**, et om **regresjon (bivariat + multippel + dummy + samspill)**, og et kortere om **normalfordeling/samplingfordeling/CLT**, pluss et **Stata-appendiks** som viser utskriftene kandidaten skal lese.

### Overlapp med STV1020

**Stort overlapp** (delt kjerne — samme oppgaver, nesten identisk sensorlogikk):
- Målenivå bestemme og begrunne; deskriptiv statistikk fra tabell/figur.
- Regresjonstolkning i kontekst (konstantledd, koeffisient «kontrollert for», R², prediksjon, residual).
- Kausalmodell/stimodell, spuriøsitet, bakenforliggende/mellomliggende variabel, kontroll vs. interaksjon.
- Dummyvariabler, samspill/interaksjon, utlede likninger.
- t-test/signifikans av regresjonskoeffisient; hypoteseformulering.
- Utvalg/sannsynlighetsutvelging, frafall/generalisering; krysstabell (gamma, Cramers V) og valg av korrelasjonsmål etter målenivå.
- Sensorkultur: følgefeil straffes ikke, forståelse gir uttelling, substansiell tolkning i kontekst kreves, «kontrollert for» er hardt krav.

**Klare forskjeller (SOS1120 unikt):**
1. **Sannsynlighetsregning finnes her.** Standard normalfordeling, Z-skårer, samplingfordeling, sentralgrenseteoremet, P(x̄ > verdi) — STV1020 utelukker dette eksplisitt.
2. **Konfidensintervall er bærebjelken** (gjennomsnitt/andel/differanse/koeffisient, flere per sett). I STV1020 er KI perifert; der dominerer OLS-diagnostikk og residualplott.
3. **Standardfeil regnes ut** (SE = s/√n, SE(p̂), SE(diff)) — sentralt i SOS1120, marginalt i STV1020.
4. **Kjikvadrat regnes for hånd** oftere og mer systematisk (forventede frekvenser, df, χ²).
5. **Verktøyet er Stata** (kandidaten kjører kommandoer på eksamen fra 2018), mens STV1020 kun *leser* R-utskrift.
6. **STV1020 har mer forskningsdesign-/OLS-teori** (Kellstedt & Whittens fire kausalitetskriterier, OLS-forutsetninger/residualdiagnostikk som fast avslutning, most similar/different-design). SOS1120 hadde tilsvarende design-essay i det gamle regimet, men faset det i stor grad ut etter 2015; residualdiagnostikk er lettere berørt (linearitet, normalfordelte restledd), ikke et fast grep.
7. **Pensum:** STV1020 = Kellstedt & Whitten; SOS1120 = Ringdal-type (gammelt) + statistikkorientert bok med Stata (nytt).

Kort sagt: **STV1020 er 50/50 design/regresjon; SOS1120 er ~60/40 statistikk/drøfting og har i tillegg en reell sannsynlighets-/konfidensintervall-modul.** En lærebok kan gjenbruke mye av STV1020-strukturen for den delte kjernen, men må legge til egne, solide kapitler om standardfeil/konfidensintervall, normalfordeling/samplingfordeling og kjikvadrat-utregning, og et Stata-appendiks.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/UiO/SOS1120/`. Arkivet inneholder dubletter (samme sett i rotmappen og i undermappene `eksamen/`, `sensorveiledning/` og `utsatt/`); listen under er deduplisert.

**Oppgavesett lest grundig (nytt regime):**
`eksamen/SOS1120-V2015.pdf`, `SOS1120-V2016.pdf`, `SOS1120-V2017.pdf`, `SOS1120-V2018.pdf`.

**Oppgavesett lest grundig (gammelt regime, for utviklings- og temadekning):**
`eksamen/SOS1120-H2003.pdf`, `SOS1120-H2008.pdf`, `SOS1120-H2012.pdf`, `SOS1120-H2013.pdf`.

**Oppgavesett skummet (gammelt regime):**
`eksamen/SOS1120-V2004.pdf`, `SOS1120-H2004.pdf`, `SOS1120-H2005.pdf`, `SOS1120-H2006.pdf`, `SOS1120-H2007.pdf`, `SOS1120-H2009.pdf`, `SOS1120-H2010.pdf`, `SOS1120-H2011.pdf`, `utsatt/SOS1120-H2006-utsatt.pdf`, `utsatt/SOS1120-H2007-utsatt.pdf`.

**Sett med fullstendig sensorveiledning, lest grundig (5):**
`sensorveiledning/SOS1120-H2011-sensorveiledning.pdf`, `SOS1120-V2015-sensorveiledning.pdf`, `SOS1120-V2016-sensorveiledning.pdf` (fasit til V2016 Inspera-settet: straffereaksjoner/tillit/ADHD/Simpson), `SOS1120-V2017-sensorveiledning.pdf` (fasit til V2017-settet, gjenbrukt papir datert 2016: studietimer-MC + Humbro-kjikvadrat + karakter-regresjon), `SOS1120-V2018-sensorveiledning.pdf`.

**Merknad om regimeskifte:** Papirene t.o.m. 2013 tilhører det gamle, sosiologisk-metodiske pensumet; V2015→ tilhører det nye, statistikkorienterte pensumet med Stata. V2016 (digital Inspera) og V2017 (papir) er **ulike** sett; V2017 gjenbrukte et oppgaveark datert 2016. V2018 er fulldigitalt med egen Stata-bolk.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emneside (scratchpad `fagbeskrivelse-sos1120.md`; emnet er nedlagt/erstattet av SOSGEO1120, siste eksamen V2019).

**Forbilder for struktur:** `docs/hoyskole-boker/stv1020/EKSAMENSANALYSE.md` og `docs/hoyskole-boker/psy1010/EKSAMENSANALYSE.md` (hybrid drøfting/statistikk; 8-delers mal).

**Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Formler, Stata-kommandonavn og standard statistisk notasjon er faglig allmenneie.
