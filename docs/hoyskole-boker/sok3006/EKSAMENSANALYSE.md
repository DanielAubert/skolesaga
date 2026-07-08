# Eksamensanalyse: SØK3006 Valuta, olje og makroøkonomisk politikk (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok (fase 1 i høyskolebok-produksjonsløypa). Bygger på NTNUs eksamensarkiv i `~/Desktop/Eksamner/NTNU/SOK3006/` — oppgavesett SØK3006 V/H **2016–2025** og **7 dokumenter med sensor-/løsningstekst** (H2016, H2018, V2021, H2021, H2023, V2025 med full modellgjennomgang, samt det generiske «SØK3006 Sensorveiledning» som viste seg å være V2025-veiledningen). Alle sensortekster er lest fullstendig; oppgavesettene fra de siste ~10 år er lest grundig. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modelligninger, notasjon og faglige fakta er standard fagapparat (Rødseth / Røisland–Sveen–Torvik) uten verkshøyde og gjengis derfor direkte.
>
> **Kildemerknad om leselighet:** Oppgavesettene og sensortekstene er overveiende tekstbaserte og lot seg lese direkte med `pdftotext`. To filer var uleselige/tomme og er hoppet over: **V2022** (`SØK3006 v22.pdf` ga 1 tegn — blank/skann) og **V2024**-oppgavesettet (`SØK3006 V24.pdf` er et Inspera-skall der selve oppgaveteksten lå i en separat «ressurs», ikke i PDF-en). Enkelte LaTeX-eksponenter og brøker (særlig i tapsfunksjonene og MP-kurvene) kom noe forvrengt ut av teksteekstraksjonen; alle ligninger i denne analysen er rekonstruert fra sammenhengen og verifisert mot eksamensvedlegget (`vedlegg_eksamen_søk3006.pdf`), som inneholder samtlige ni pensummodeller i ren form.
>
> **Emnekode-merknad:** Emnet skrives både «SØK3006» og «SOK3006» (samme emne). Fullt navn: *Valuta, olje og makroøkonomisk politikk* (engelsk: *Currency, Oil and Macroeconomic Policy*), **7,5 studiepoeng**, aktivt masteremne ved Institutt for samfunnsøkonomi, NTNU. Emneansvarlig: **Hildegunn Ekroll Stokke**; sentral fagperson og gjennomgående oppgavestiller: **Ragnar Torvik** (hvis Dutch-disease-forskning er selve pensumkjernen i olje-delen). Andre navngitte oppgavestillere/eksamenskontakter i arkivet: Jørn Rattsø, Hans Bonesrønning, Jan Morten Dyrstad, Kåre Johansen.

---

## 0. Kort om emnet + overlapp/avgrensning (les dette først)

SØK3006 er et **anvendt makroøkonomi-emne på masternivå** som knytter tre tett sammenvevde temaer: (1) **pengepolitikk under fleksibel inflasjonsstyring** (og samspillet med finanspolitikk), (2) **valutamarkeder og valutakursdannelse** (porteføljemodeller, Mundell–Fleming–Tobin, kapitalmobilitet), og (3) **oljesektorens/naturressursens betydning for resten av økonomien** (skjermet vs. konkurranseutsatt sektor, hollandsk syke, two-sector-modeller med og uten full sysselsetting). Emnet er ikke matematikk (som SØK3004) og ikke økonometri (som SØK3001) — det er **modelldrevet makro** der studenten skal sette opp en oppgitt likevektsmodell, forklare relasjonene, utlede sentrale sammenhenger (MP-kurve, IS/ISFX-kurve, Phillips-kurve for åpen økonomi, uttrykk for valutatilbud) og analysere sjokk og politikk — mest med **verbal/grafisk intuisjon** og noe algebra.

**Pensumkjernen** består av to bokstammer og en artikkelpakke:
- **Asbjørn Rødseth: *Open Economy Macroeconomics*** (Cambridge UP) — kapittel 1 (porteføljemodellen for valutamarkedet), kapittel 6 (Mundell–Fleming–Tobin, kapitalmobilitet), kapittel 7 (skjermet/konkurranseutsatt sektor). Dette er selve grunnboka og navngis eksplisitt i nesten hver sensortekst.
- **Røisland & Sveen / Røisland, Sveen & Torvik** — modell for fleksibel inflasjonsstyring (lukket og åpen økonomi), med finansiell stabilitet og med samspill penge–finanspolitikk.
- **Torvik** — two-sector-modell med naturressursinntekter og endogen produktivitet («learning by doing», hollandsk syke), både statisk og dynamisk.

**Eksamensvedlegget (`vedlegg`) er en gullgruve:** Fra og med ca. H2023 legges det ved et notat med **ni ferdig oppsatte pensummodeller** (relasjoner + notasjon), og oppgavene refererer eksplisitt til «modell 3», «modell 8 og 9» osv. Dette er bokens naturlige innholdsfortegnelse. Modellene er:

| # | Modell | Kilde | Rolle på eksamen |
|---|---|---|---|
| 1 | Inflasjonsstyring med **finansiell stabilitet**, lukket økonomi | Røisland/Sveen | V2021 O1, «finansielt gap» q |
| 2 | Inflasjonsstyring **åpen økonomi** (uten fin. stab.) | Røisland/Sveen | Kjernemodellen — H2019, H2022, V2025 O1 |
| 3 | **Samspill penge- og finanspolitikk** (2 instrumenter) | Røisland/Sveen/Torvik | H2023 O1, H2024 O1 |
| 4 | Enkel **porteføljemodell** (to verdipapirer, risikopremie r) | Rødseth kap. 1 | V2021 O2, porteføljeeffekter |
| 5 | **Porteføljemodell med penger** (M, B, F) | Rødseth | H2022 O2, kapitalmobilitet |
| 6 | **Mundell–Fleming–Tobin** (full) | Rødseth kap. 6 | H2016, V2025 O2, ISFX-LM |
| 7 | Realøkonomi med **skjermede/konkurranseutsatte varer** | Rødseth kap. 7 | H2018, H2024 O2 |
| 8 | **Naturressurser (hollandsk syke), statisk** | Torvik | H2023 O2, V2020 O1 |
| 9 | **Naturressurser (hollandsk syke), dynamisk** (endogen produktivitet) | Torvik | H2017, H2021 O3, H2023 O2 |

### Overlapp å kryssreferere

**(a) UiO-masterøkonomi — nærmeste slektning.** Den beste eksisterende analysen i biblioteket er ikke et UiO-masteremne, men **UiOs bachelor-makro 2, ECON2310** (`../econ2310/EKSAMENSANALYSE.md`). ECON2310 (Halvor Mehlum) bygger nettopp på **IS-RR-PK-modellen for åpen økonomi med flytende valutakurs, udekket renteparitet og endogene priser** (Holden kap. 16) — dette er det samme apparatet SØK3006 bruker i sin pengepolitikk-blokk, men SØK3006 tar det til masternivå: eksplisitt tapsfunksjon og optimering av renta (MP-kurven utledes, ikke oppgis), samspill med finanspolitikk, og full porteføljefundering av valutamarkedet. **UiOs ECON4310** (`../econ4310/`, makro-forbildet for denne malen) er derimot en *annen* tradisjon — mikrofundert dynamisk vekstteori (Ramsey/OLG/RBC/Euler) — og har **null overlapp** med SØK3006 (ingen valutakurs, ingen åpen økonomi, ingen inflasjonsmål der). Merknaden i ECON4310-analysen bekrefter dette selv: «ingen åpen-økonomi-valutakurs … hører til ECON2310». Konklusjon: **SØK3006 ↔ ECON2310** er den reelle UiO-parallellen for pengepolitikk/åpen økonomi; ECON4310 skal *ikke* brukes som innholdskilde utover metodemalen for dette dokumentet.

**(b) NTNU-slektninger.** SØK3006 hører til NTNUs samfunnsøkonomiske masterstamme. Beslektede NTNU-emner med analyser i biblioteket: `../sok3004/` (masterøkonomenes matematikk — leverer verktøyet, ikke innholdet), `../sok3001/` (økonometri — annet fag), samt `sok3005/` og `sok3007/` (mappene finnes, men uten skrevne analyser ennå). Ingen av disse dekker penge-/valuta-/oljestoffet, så SØK3006-boka står innholdsmessig alene på NTNU-siden og bør koordineres med **ECON2310-boka** for den delte åpen-økonomi-kjernen (samme reaksjonsfunksjons-makro, ulik dybde).

**Avgrensning for boka:** SØK3006-boka skal bygges rundt de **ni vedleggsmodellene** i tre søyler — pengepolitikk/inflasjonsstyring (modell 1–3), valutamarked/kapitalmobilitet (modell 4–6), og olje/to-sektor (modell 7–9). Den skal trene *modelloppsett + forklaring av relasjoner + utledning av nøkkeluttrykk + sjokk-/politikkanalyse med intuisjon*, ikke ren regning. Den skal ikke gjenta bachelor-stoff (nasjonalregnskap, elementær Keynes-kryss) og ikke matematikk-drill (det er SØK3004).

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 4 timer**, digital i Inspera, karakter A–F, 7,5 studiepoeng. Nyere sett kjøres 09:00–13:00 (+ tid til opplasting av håndtegninger).
- **Hjelpemiddelkode C** i normalår: godkjent kalkulator + Sydsæters matematiske formelsamling (*Matematisk formelsamling for økonomer*, Sydsæter/Strøm/Berck, samt *Economists' Mathematical Manual*). Oppgaveteksten sier gjennomgående «kalkulator som hjelpemiddel» — matematikken er lett nok til at formelsamlingen sjelden er avgjørende; **modellforståelse**, ikke regnekraft, er det som testes.
- **Håndtegninger tillates og forventes:** figurer (fasediagram, ISFX-LM, MP-/Phillips-diagram, valutamarkedsdiagram) tegnes på ark med sjusifret Inspera-kode eller på tegnebrett. Grafisk analyse er en kjerneferdighet.
- **Målform:** bokmål, av og til bokmål + nynorsk parallelt (H2017, H2019).
- **Oppgavestillere roterer** (Torvik, Rattsø, Bonesrønning, Dyrstad, Johansen; emneansvar nå Stokke). Rotasjonen forklarer stilvariasjon: noen sett er ett bredt essay-spørsmål (Torvik-stil), andre er en gjennomstrukturert flerpunkts modelloppgave (a–f) med oppgitte ligninger (Johansen-stil).
- **Standardinstruksjon:** «gjør dine egne antagelser og presiser hvilke forutsetninger du har lagt til grunn». Studenten skal *skrive ned* modellforutsetningene.

### Utviklingstrekk (viktig strukturfunn)

Formatet har beveget seg fra **åpne essayoppgaver** til **strukturerte modelloppgaver med vedlagt ligningssett**:

| År | Sem. | Hjelpem. | Struktur | Bærende temaer |
|---|---|---|---|---|
| 2016 | V | C | 1 oppgave (essay) | Optimal pengepolitikk: etterspørselssjokk + risikopremiesjokk |
| 2016 | H | C | 1 oppgave (essay) | MFT: finans-/pengepolitikk under fast/flytende kurs + kapitalmobilitet |
| 2017 | V | C | 2 oppg. (1/3 + 2/3) | Porteføljevalg (middelverdi–varians) + risikopremiesjokk |
| 2017 | H | C | 1 oppgave (essay) | Olje + learning-by-doing (dynamisk to-sektor) |
| 2018 | V | C | 1 oppgave (essay) | Optimal pengepolitikk: etterspørsels- + risikopremiesjokk |
| 2018 | H | C | 1 oppgave (essay) | To-sektor: finanspolitikk mot skjermet vs. konkurranseutsatt |
| 2019 | V | C | 1 oppgave (essay) | Etterspørselssjokk + rolle for risikopremie |
| 2019 | H | C | **1 oppg. m/oppgitt modell, a–f** | Åpen-økonomi inflasjonsstyring: Phillips, IS, tre sjokk |
| 2020 | V | C | 2 oppg. (lik vekt) | Olje→sektorstørrelse + fleksibelt inflasjonsmål & fin. stab. |
| 2021 | V | A (hjemme) | 4 oppg. (lik vekt) | Fin. stab. + portefølje + Marshall–Lerner + olje→sektor |
| 2021 | H | A (hjemme) | 3 oppg. (lik vekt) | Inflasjonsstyring lukket/åpen + portefølje/kap.mob. + olje dynamisk |
| 2022 | H | C | 3 oppg. (50/10/40) | Åpen-øk. inflasjonsstyring a–e + portefølje/kap.mob. + olje→sektor |
| 2023 | H | C | **2 oppg. (50/50), m/vedlegg** | Samspill penge/fin.pol. (modell 3) + olje statisk+dynamisk (8+9) |
| 2024 | H | C | 2 oppg. (2/3 + 1/3), m/vedlegg | Samspill penge/fin.pol. a–f + to-sektor finanspolitikk |
| 2025 | V | C | 2 oppg. (50/50), m/vedlegg | Åpen-øk. inflasjonsstyring a–c + MFT/kap.mob. a–e |

**Konstanter og trender:**
1. **Tre-søyle-strukturen er jernlov.** Hvert sett trekker fra {pengepolitikk/inflasjonsstyring, valutamarked/kapitalmobilitet, olje/to-sektor}. Nyere flerdelte sett dekker to eller alle tre søylene i samme eksamen.
2. **Formatet er blitt mer strukturert og modellstyrt.** 2016–2018 var typisk *ett* åpent essayspørsmål (Torvik-stil: «Diskuter …»). Fra 2019 kommer oppgaver med **oppgitt ligningssett og nummererte delspørsmål (a–f)** der studenten skal determinere modellen, forklare relasjonene, utlede kurver og analysere sjokk. Fra H2023 legges **vedlegget med ni modeller** ved, og oppgavene refererer til modellnummer.
3. **Vekting varierer, ofte lik** (50/50, 1/3+2/3, 2/3+1/3). Pengepolitikk-oppgaven er som regel den tyngste (50 % eller 2/3).
4. **To korona-/hjemmeeksamensår (V2021, H2021, kode A):** alle hjelpemidler, flere oppgaver, ekstra vekt på forståelse og forklaring (sensortekstene sier eksplisitt at forståelse premieres når hjelpemidler er fri).
5. **Én skoleeksamen per semester**, oftest høst (noen vårsett finnes: V2016–V2021, V2025). Neste ordinære er høst.

---

## 2. Temafrekvens

Grunnlag: 15 lesbare oppgavesett 2016–2025 (V2022 og V2024 hoppet over, se kildemerknad). Celleverdi = antall sett der temaet inngår som (del)oppgave eller bærende modell. Delt i de tre søylene faget alltid prøver.

### 2A. Pengepolitikk / inflasjonsstyring (søyle 1)

| Tema | Gjenganger-score | Sett |
|---|---|---|
| **Modell for fleksibel inflasjonsstyring, åpen økonomi** (tapsfunksjon, IS, Phillips, UIP) | **~9/15 = 60 %** | V16, V18, V19, H19, V20, V21, H22, V25 (+ implisitt flere) |
| **Utlede/forklare MP-kurven** (minimering av L mhp. renta) og dens helning | **~5/15 = 33 %** | H19, H22, V25 O1, (H23/H24 samspill) |
| **Optimal pengepolitisk respons på sjokk** (etterspørsel v, inflasjon u, risikopremie/valuta z) | **~8/15 = 53 %** | V16, V18, V19, H19(d,e,f), V20, H22(e), V25(c) |
| **Åpen vs. lukket økonomi** (hvordan valutakursen endrer MP-kurven / rentesetting) | **~4/15 = 27 %** | H21 O1, V25 O1(b), V21 O1 (fin. stab. lukket) |
| **Finansiell stabilitet** (finansielt gap q, tredje ledd i tapsfunksjonen) | **2/15 = 13 %** | V20 O2, V21 O1 |
| **Samspill penge- OG finanspolitikk** (to instrumenter, divergent respons) | **2/15 = 13 %** | H23 O1, H24 O1 |
| Phillips-kurve for åpen økonomi (utledning) | ~4/15 | H19(b), H22(c), V25(c), H24 |
| IS-/ISFX-kurve for åpen økonomi (utledning) | ~4/15 | H16, H19(c), H22(d), V25 O2(d) |

### 2B. Valutamarked / kapitalmobilitet (søyle 2)

| Tema | Gjenganger-score | Sett |
|---|---|---|
| **Porteføljemodell for valutamarkedet** (Rødseth kap. 1; risikopremie r = i − i* − eᵉ) | **~5/15 = 33 %** | V17, V21 O2, H21 O2, H22 O2 |
| **Kapitalmobilitet** (grad, |f′ᵣ| som mål, effekt på ISFX/rentesetting) | **~5/15 = 33 %** | H16, H21 O2, H22 O2(b), V25 O2(e) |
| **Valutatilbud til sentralbanken ved depresiering** (porteføljesammensetnings- + forventningseffekt) | **2/15 = 13 %** | V21 O2, V25 O2(b) |
| **Mundell–Fleming–Tobin** (ISFX-LM, fast vs. flytende kurs) | **~3/15 = 20 %** | H16, V25 O2, (H21) |
| **Middelverdi–varians-porteføljevalg** (investor, forventet avkastning vs. varians) | **2/15 = 13 %** | V17 O1, (V21) |
| **Udekket renteparitet** (real/nominell, appresiering ved rentedifferanse) | ~5/15 | inngår i alle inflasjonsstyrings- og MFT-sett |
| Marshall–Lerner-betingelsen (realdepresiering → handelsbalanse) | 1/15 | V21 O3 |
| Nødvendige vs. tilstrekkelige betingelser (valutatilbud) | 1/15 | V21 O2 (sensor fremhever dette skillet) |

### 2C. Olje / naturressurser / to-sektor (søyle 3)

| Tema | Gjenganger-score | Sett |
|---|---|---|
| **Skjermet vs. konkurranseutsatt sektor** (Rødseth kap. 7 / Torvik) | **~7/15 = 47 %** | H17, H18, V20 O1, V21 O4, H22 O3, H23 O2, H24 O2 |
| **Naturressursinntekt → sektorstørrelse** (hollandsk syke, statisk) | **~6/15 = 40 %** | V20 O1, V21 O4, H22 O3, H23 O2, (H21 O3) |
| **Dynamisk to-sektor med endogen produktivitet** («learning by doing», langsiktslikevekt) | **~4/15 = 27 %** | H17, H21 O3, H23 O2 (modell 9) |
| **Finanspolitikk mot skjermet vs. konkurranseutsatt sektor** | **2/15 = 13 %** | H18, H24 O2 |
| **Endogen vs. eksogen lønn** (arbeidsmarkedsklarering / full sysselsetting) | **2/15 = 13 %** | H18, H24 O2(b) |
| Realvalutakurs og konkurranseevne | ~5/15 | inngår i de fleste olje-/to-sektor-sett |

### Viktigste funn

1. **Faget ER de tre søylene.** En lærebok skal bygges som tre likestilte hoveddeler: (I) pengepolitikk/inflasjonsstyring, (II) valutamarked/kapitalmobilitet, (III) olje/to-sektor — hver forankret i de tilhørende vedleggsmodellene.
2. **Dominerende enkelttemaer:** (a) **modell for fleksibel inflasjonsstyring i åpen økonomi og optimal respons på sjokk** (~60 %, den hyppigste), og (b) **skjermet/konkurranseutsatt sektor + naturressursinntekt** (~47 %, den nest hyppigste). Minst én av disse to er nesten alltid med; ofte begge.
3. **Portefølje/kapitalmobilitet er den tredje faste søylen** (~33 %) — mindre dominerende, men fast tilbakevendende, og ofte kombinert med de andre (f.eks. valutakursens rolle i inflasjonsstyringsmodellen).
4. **«Utled kurven»-oppgaven er den mekaniske A-differensiatoren:** å utlede MP-kurven fra minimering av tapsfunksjonen, og ISFX-/Phillips-kurven for åpen økonomi, går igjen og skiller sterke besvarelser.
5. **Intuisjon + formalisme kreves samtidig.** Sensortekstene understreker gjennomgående at det tekniske må ledsages av økonomisk intuisjon (helning på kurver, retning på skift, mekanismer bak effektene).

---

## 3. Oppgavetype-katalog

Sjangrene som faktisk går igjen, med typisk plassering og krav. **Alle eksempler er omskrevet.**

### A. Sett opp og forklar modellen for fleksibel inflasjonsstyring (åpen økonomi)
- **Krav:** Presenter modell 2/3: IS-relasjonen `y = −α₁(r−ρ) + α₂e + v`, Phillips-relasjonen `π = πᵉ + γ₁y + γ₂e + u`, real-UIP `e = eᵉ − (r−r*) + z`, og tapsfunksjonen `L = ½[(π−π*)² + λy²]`. **Determiner modellen** (tell endogene/eksogene variabler), forklar hver relasjon økonomisk (rentens virkning via etterspørsel og valutakurs; importert inflasjon via γ₂e; renteparitet).
- **Forekomst:** H19(a), H22(a), V25 O1(a) — kjernen i søyle 1.
- **Omskrevet eksempel:** «Ta utgangspunkt i den gitte modellen for inflasjonsstyring i en åpen økonomi. Gjør rede for hvilke variabler som er endogene, og forklar den økonomiske tolkningen av hver av de fire relasjonene.»

### B. Utled MP-kurven (pengepolitikk-kurven) og drøft helningen
- **Krav:** Minimer tapsfunksjonen mhp. realrenta. Substituér UIP inn i IS og Phillips slik at `dy/dr = −(α₁+α₂)` og `dπ/dr = −γ₁(α₁+α₂) − γ₂`. Førsteordensbetingelsen `(π−π*)·dπ/dr = −λy·dy/dr` gir MP-kurven `π−π* = −[λ / (γ₁ + γ₂/(α₁+α₂))]·y`. **Tolk:** telleren λ = vekt på produksjonsstabilitet (brattere kurve ved høyere λ); nevneren = hvor mye inflasjonen endres når y stabiliseres via renta (kostnaden ved produksjonsstabilisering). MP-kurven er brattest i en **lukket** økonomi (sett α₂=γ₂=0), fordi renta da bare virker på inflasjonen via y, ikke via valutakurs/importert inflasjon.
- **Forekomst:** H19(a/b), H22(b), V25 O1(a/b).
- **Omskrevet eksempel:** «Utled sammenhengen mellom inflasjonsgapet og produksjonsgapet som følger av optimal rentesetting, og forklar hva som bestemmer hvor bratt denne kurven er. Sammenlign med en lukket økonomi.»

### C. Optimal pengepolitisk respons på et sjokk
- **Krav:** Grafisk i (y, π)-diagram: kombiner MP-kurven med Phillips-kurven for åpen økonomi (der renta er substituert ut: `π = (γ₁ + γ₂/(α₁+α₂))·y + u + konst`). **Et positivt inflasjonssjokk (u>0)** skifter Phillips-kurven opp → renta heves → negativt produksjonsgap (y<0) og positivt inflasjonsgap; de to gapene får **ulikt fortegn** (kan ikke nulles samtidig med kun renta). **Etterspørselssjokk (v)** kan derimot nøytraliseres fullt ut med renta (begge gap = 0). **Risikopremie-/valutasjokk (z)** virker som et etterspørselssjokk via valutakursen. Skill de tre sjokkene tydelig.
- **Forekomst:** V16, V18, V19, H19(d,e,f), H22(e), V25 O1(c) — svært hyppig.
- **Omskrevet eksempel:** «Anta et positivt inflasjonssjokk. Vis grafisk hvordan renta bør settes, og forklar hvorfor produksjons- og inflasjonsgapet ikke kan bli null samtidig.»

### D. Samspill mellom penge- og finanspolitikk (to instrumenter)
- **Krav:** Modell 3 med to instrumenter (rente r og offentlig etterspørsel g). Med to instrumenter kan **begge** mål (`π=π*` og `y=0`) nås samtidig. Vis at et positivt inflasjonssjokk tilsier **innstramming i pengepolitikken (økt rente) OG ekspansiv finanspolitikk** — instrumentene responderer **divergent**. Drøft «komparativt fortrinn»: pengepolitikk har fortrinn i å stabilisere inflasjon, finanspolitikk i å stabilisere produksjon. Styrken på responsen avhenger av γ₂ (importert inflasjon), α₁+α₂ (rentens produksjonsvirkning) og α₃ (finanspolitikkens virkning).
- **Forekomst:** H23 O1, H24 O1 — nyere, men gjennomstrukturert (a–f).
- **Omskrevet eksempel:** «Med både rente og finanspolitikk tilgjengelig: begrunn at både inflasjonsmålet og null produksjonsgap alltid kan oppnås, og drøft optimal instrumentkombinasjon ved henholdsvis et etterspørsels- og et inflasjonssjokk.»

### E. Porteføljemodell for valutamarkedet
- **Krav:** Modell 4/5 (Rødseth kap. 1). Sett opp formuesbeskrankninger for private, sentralbank og utlendinger; definisjon av risikopremie `r = i − i* − eᵉ`; etterspørsel etter innenlandske aktiva `f(r, Wₚ)`. Utled hvordan **tilbudet av valuta til sentralbanken** påvirkes av en depresiering, og identifiser **porteføljesammensetningseffekten** (endret ønsket sammensetning) og **forventningseffekten** (endret forventet videre kursbane). Angi **tilstrekkelige** (ikke nødvendige — sensor er streng på dette skillet) betingelser for at valutatilbudet øker ved depresiering.
- **Forekomst:** V17, V21 O2, H21 O2, H22 O2, V25 O2(b).
- **Omskrevet eksempel:** «I porteføljemodellen med ett innenlandsk og ett utenlandsk verdipapir: vis hvordan en depresiering påvirker tilbudet av valuta til sentralbanken, og skill porteføljesammensetnings- fra forventningseffekten.»

### F. Kapitalmobilitet og dens virkning
- **Krav:** Definer grad av kapitalmobilitet ved følsomheten `|f′ᵣ|` (eller `|dE/d(i−i*)|`). Drøft hvordan høyere kapitalmobilitet gjør ISFX-kurven flatere og forsterker valutakursreaksjonen på rentedifferanser. Ved perfekt kapitalmobilitet: valutakursen bæres av renteparitet alene. Diskuter momenter som taler mot perfekt mobilitet (risiko/risikoaversjon, ulike forventninger, likviditetsbehov, reguleringer — Rødseth s. 16–17).
- **Forekomst:** H16, H21 O2, H22 O2(b), V25 O2(a,e).
- **Omskrevet eksempel:** «Hvorfor kan følsomheten i etterspørselen etter innenlandske aktiva overfor risikopremien tolkes som et mål på kapitalmobilitet? Vis hvordan graden av kapitalmobilitet påvirker rentens effekt på produksjonen.»

### G. Mundell–Fleming–Tobin: politikkeffektivitet under fast/flytende kurs
- **Krav:** Modell 6 (Rødseth kap. 6). Sett opp vare-, penge- og valutamarkedslikevekt; utled **ISFX-kurven** (IS med valutakursen substituert ut via renteparitet — merk at valutakursleddet inneholder flere motstridende ledd hvis fortegn må drøftes) og LM-kurven. Analyser grafisk hvordan finans- og pengepolitikk virker på produksjonen under **fast** vs. **flytende** kurs, og hvordan effekten avhenger av **kapitalmobilitet**. Klassisk resultat: pengepolitikk er virkningsløs på produksjon under fast kurs, virksom under flytende; motsatt tendens for finanspolitikk ved høy mobilitet.
- **Forekomst:** H16, V25 O2(c,d,e).
- **Omskrevet eksempel:** «Bruk Mundell–Fleming–Tobin-modellen til å sammenligne hvor effektiv finans- og pengepolitikken er til å påvirke produksjonen under fast og flytende valutakurs, og drøft hvordan kapitalmobiliteten påvirker konklusjonen.»

### H. Skjermet vs. konkurranseutsatt sektor: finanspolitikk
- **Krav:** Modell 7 (Rødseth kap. 7). To sektorer (skjermet n, konkurranseutsatt t), lønn W, prisene Pₙ endogen og Pₜ = EP* (verdensmarkedet). Analyser hvordan økt offentlig kjøp rettet mot **skjermet** vs. **konkurranseutsatt** sektor virker forskjellig på produksjon i de to sektorene, handelsbalansen X for konkurranseutsatte varer, og prisen Pₙ. Skill **eksogen lønn** (ledig kapasitet) fra **endogen lønn / full sysselsetting** (arbeidsmarkedsklarering flytter arbeidskraft mellom sektorer og endrer tilbudssiden).
- **Forekomst:** H18, H24 O2.
- **Omskrevet eksempel:** «Sammenlign virkningen på de to sektorenes produksjon, handelsbalansen og prisen på skjermede varer av at det offentlige øker sitt kjøp av henholdsvis skjermede og konkurranseutsatte varer. Hvordan endres analysen hvis lønna bestemmes endogent ved full sysselsetting?»

### I. Naturressursinntekt og sektorstørrelse (hollandsk syke, statisk)
- **Krav:** Modell 8 (Torvik). Vis at økt naturressursinntekt R gir **realappresiering** (høyere Pₜ, dvs. relativpris skjermet/konkurranseutsatt stiger) og **økt sysselsettingsandel η i skjermet sektor** — den klassiske hollandsk-syke-mekanismen (ressursinntekten øker etterspørselen etter skjermede varer, som ikke kan importeres, og trekker arbeidskraft fra konkurranseutsatt sektor). Alternativt kan man tolke lavere oljeinntekter som redusert etterspørsel i en modell med ledig kapasitet.
- **Forekomst:** V20 O1, V21 O4, H22 O3, H23 O2 (del 1), (H21 O3).
- **Omskrevet eksempel:** «Drøft påstanden: økte naturressursinntekter gir en større skjermet sektor. Vis mekanismen i den statiske to-sektor-modellen.»

### J. Naturressursinntekt med endogen produktivitet (dynamisk, learning-by-doing)
- **Krav:** Modell 9 (Torvik). Produktivitetsveksten i hver sektor avhenger av egen sysselsetting og av spillover fra den andre sektoren (`Ḣᵢ/Hᵢ`-relasjonene). Etabler **langtidslikevekt for relativ produktivitet** λ = H_T/H_N mellom sektorene, og vis hvordan økt ressursinntekt påvirker både langtidslikevekten og tidsforløpet dit. Sentralt (kontraintuitivt) resultat: i **langsiktig likevekt kan størrelsen på skjermet sektor være uavhengig av ressursinntekten** — den statiske og den dynamiske analysen gir ulike svar, og gode besvarelser sammenligner de to.
- **Forekomst:** H17, H21 O3, H23 O2 (del 2).
- **Omskrevet eksempel:** «Med endogen produktivitet (learning-by-doing med spillover mellom sektorene): etabler langtidslikevekten for relativ produktivitet, og vis hvordan økte oljeinntekter påvirker sysselsettingen i de to sektorene på kort og lang sikt.»

### K. Inflasjonsstyring med finansiell stabilitet (lukket økonomi)
- **Krav:** Modell 1 med tredje ledd i tapsfunksjonen (finansielt gap q, vekt δ) og en finansiell relasjon `q = τy − φ(r−ρ) + w`. Vis at hvis renta settes slik at både produksjons- og inflasjonsgapet er null, er det finansielle gapet positivt — og at et lavere rentekutt (mindre ekspansivt) da gir lavere samlet tap. Drøft hvor mye renta bør avvike fra den «nøytrale» innstillingen.
- **Forekomst:** V20 O2, V21 O1.
- **Omskrevet eksempel:** «Med hensyn til finansiell stabilitet i tapsfunksjonen: drøft påstanden om at renta ved et negativt etterspørselssjokk bør settes ned tilstrekkelig til å holde inflasjonen på målet.»

### L. Marshall–Lerner / realdepresiering og handelsbalansen
- **Krav:** Forklar Marshall–Lerner-betingelsen og de tre effektene av en realdepresiering på handelsbalansen (eksportvolum opp, importvolum ned, importpris opp — verdi-/mengdeeffekter). Kan kobles til to-sektor-modellen (kap. 7).
- **Forekomst:** V21 O3.
- **Omskrevet eksempel:** «Drøft hvordan en realdepresiering påvirker handelsbalansen, og gi en intuitiv tolkning av de effektene som inngår i Marshall–Lerner-betingelsen.»

---

## 4. Sensorkrav / vurderingskriterier

Sensortekstene i arkivet er **prosatekst med eksplisitte forventninger** (ikke poengrubrikker), og de er påfallende samstemte om hva som gir uttelling.

### Faste metaregler
1. **Modellen skal settes opp OG relasjonene forklares grundig.** Gjennomgående krav: presenter forutsetningene, motivér modellen, forklar hver ligning økonomisk — ikke bare bruk den. H2016-veiledningen: «det er viktig at modellen settes opp, og relasjonene forklares grundig».
2. **Nøkkeluttrykk skal utledes, ikke postuleres.** MP-kurven, ISFX-/IS-kurven, Phillips-kurven for åpen økonomi, og uttrykket for valutatilbud til sentralbanken skal komme fram gjennom regning fra modellen. V2025-veiledningen viser hele utledningen av MP-kurven steg for steg (ligning 6→11).
3. **Teknikk MÅ ledsages av intuisjon.** Alle veiledningene krever at det tekniske suppleres med økonomisk intuisjon: helning på kurver, retning på skift, mekanismen bak. «Analysen av modellen må forklares med intuisjon i tillegg til det tekniske» (H2016).
4. **Fortegn og retning skal begrunnes.** Særlig valutakursleddet i ISFX (flere motstridende ledd) krever eksplisitt drøfting av hvilke antakelser som gir hvilket samlet fortegn.
5. **Skill nødvendige fra tilstrekkelige betingelser.** V2021-veiledningen er eksplisitt: forutsetningene i porteføljekapitlet er *tilstrekkelige, ikke nødvendige* for at valutatilbudet øker ved depresiering — å hevde at de er nødvendige gir **trekk**.
6. **Sammenlign modellvarianter når oppgaven inviterer til det.** Statisk vs. dynamisk to-sektor, eksogen vs. endogen lønn, åpen vs. lukket økonomi, høy vs. lav kapitalmobilitet: gode besvarelser presenterer intuisjonen fra begge og sammenligner mekanismene (eksplisitt belønnet i H23, V20 O1, H24, V25).
7. **Bonus for det som går utover det obligatoriske:** utledning av betingelsene for optimal politikk, kvantifisering av hvor mye renta bør avvike, dynamisk utvidelse av en statisk analyse (H23, V21 O1 — «bonus om betingelsene utledes»).

### Karakternivå-differensiering (utledet av veiledningene)
- **E (så vidt bestått):** setter opp modellen og gjengir relasjonene noenlunde riktig; identifiserer hovedeffekten av sjokket/politikken i riktig retning, men uten fullstendig utledning eller intuisjon. Mangler kurveutledning eller behandler bare det trivielle tilfellet.
- **C (middels):** korrekt modelloppsett med økonomisk forklaring av alle relasjoner; **utleder** MP-/ISFX-/Phillips-kurven riktig; gjennomfører sjokk-/politikkanalysen grafisk med riktige skift og korrekt konklusjon; gir intuisjon for hovedeffektene. Behersker standardmekanismen (f.eks. hollandsk syke statisk, divergent penge/finanspolitikk-respons).
- **A (topp):** alt i C, pluss: **skiller og sammenligner modellvarianter** trygt (statisk vs. dynamisk, åpen vs. lukket, høy/lav mobilitet, eksogen/endogen lønn); drøfter **hva som bestemmer styrken** på responsen (parameterintuisjon: γ₂, α₁+α₂, α₃); håndterer **fortegnstvetydigheter** (ISFX-valutakursleddet) og betingelser presist (tilstrekkelig vs. nødvendig, Marshall–Lerner); utleder betingelser for optimal politikk; og ser **kontraintuitive resultater** (langsiktig sektorstørrelse uavhengig av ressursinntekt i den dynamiske modellen). Kobler formalisme og intuisjon sømløst.

---

## 5. Typiske feil (utledet av veiledningene og oppgavekonstruksjonen)

1. **Bruke modellen uten å sette den opp / forklare relasjonene** — hoppe rett til svaret. Den dyreste feilen, siden modelloppsett + forklaring er selve kjernen i vurderingen.
2. **Postulere MP-/ISFX-/Phillips-kurven** i stedet for å utlede den fra minimering av tapsfunksjonen / substitusjon av renteparitet.
3. **Bare det tekniske, ingen intuisjon** (eller motsatt: bare prat, ingen modell). Begge deler kreves samtidig.
4. **Ikke skille de tre sjokkene** (etterspørsel v, inflasjon u, risikopremie/valuta z) — særlig å tro at et inflasjonssjokk kan nøytraliseres fullt ut med renta alene (det kan det ikke; gapene får ulikt fortegn).
5. **Forveksle nødvendige og tilstrekkelige betingelser** for at valutatilbudet øker ved depresiering (eksplisitt trekk i V2021).
6. **Ignorere fortegnstvetydigheten i valutakursleddet** i ISFX (de tre motstridende leddene) — påstå et bestemt fortegn uten å oppgi antakelsene bak.
7. **Blande sammen porteføljesammensetnings- og forventningseffekten** i valutamarkedet, eller ikke knytte hver effekt til riktig del av det utledede uttrykket.
8. **Behandle den dynamiske to-sektor-modellen som den statiske** — glemme at endogen produktivitet kan gi et annet (og kontraintuitivt) langsiktsresultat enn den statiske hollandsk-syke-effekten.
9. **Overse skillet eksogen vs. endogen lønn / full sysselsetting** i to-sektor-analysen — bruke ledig-kapasitet-mekanismen når arbeidsmarkedet klareres.
10. **Ikke sammenligne fast og flytende kurs** (eller høy og lav kapitalmobilitet) når oppgaven ber om det — nøye seg med ett regime.
11. **Feil retning på kurveskift** i (y,π)- eller ISFX-LM-diagrammet, eller manglende figur der grafisk analyse forventes.
12. **Ikke oppgi/presisere egne forutsetninger** — stikk i strid med den faste instruksjonen.

---

## 6. Prioritering for boka

### Nivå 1 — MÅ beherskes perfekt (avgjør ståkarakteren; høyest frekvens)
1. **Modell for fleksibel inflasjonsstyring, åpen økonomi (modell 2):** determiner modellen, forklar de fire relasjonene, **utled MP-kurven** fra minimering av tapsfunksjonen, utled Phillips- og IS-kurven for åpen økonomi. (~60 % av settene; kjernen i søyle 1.)
2. **Optimal pengepolitisk respons på de tre sjokkene** (etterspørsel/inflasjon/risikopremie), grafisk i (y,π)-diagram, med korrekt fortegn på gapene. (~53 %.)
3. **Skjermet vs. konkurranseutsatt sektor + naturressursinntekt, statisk (modell 7/8):** hollandsk-syke-mekanismen, realappresiering, sektorstørrelse, finanspolitikk mot hver sektor, eksogen vs. endogen lønn. (~47 %; kjernen i søyle 3.)

### Nivå 2 — MÅ kunne (avgjør C→A; høy frekvens)
4. **Porteføljemodell for valutamarkedet (modell 4/5):** risikopremie, valutatilbud ved depresiering, porteføljesammensetnings- vs. forventningseffekt, tilstrekkelige vs. nødvendige betingelser. (~33 %.)
5. **Kapitalmobilitet:** definisjon (|f′ᵣ|), virkning på ISFX/rentesetting, momenter mot perfekt mobilitet. (~33 %.)
6. **Dynamisk to-sektor med endogen produktivitet (modell 9):** langtidslikevekt for relativ produktivitet, kontrasten statisk vs. dynamisk. (~27 %.)

### Nivå 3 — bør kunne godt (roterer inn)
7. **Samspill penge- og finanspolitikk (modell 3):** to instrumenter, divergent respons, komparativt fortrinn. (Nyere, gjennomstrukturert; sannsynlig retur.)
8. **Mundell–Fleming–Tobin (modell 6):** ISFX-LM, fast vs. flytende kurs, politikkeffektivitet.
9. **Finansiell stabilitet i tapsfunksjonen (modell 1):** finansielt gap, avvik fra nøytral rente.

### Nivå 4 — nice-to-have (lavfrekvent, gir bredde)
10. **Middelverdi–varians-porteføljevalg** (investorens tilpasning).
11. **Marshall–Lerner-betingelsen** / realdepresiering og handelsbalansen.

### Prognose for neste ordinære eksamen (høst)
Gjeldende format (2023–2025) er **2 oppgaver med lik/ulik vekt og vedlagt modellnotat**. Mest sannsynlige mal:
- **Oppgave 1 (50 % / 2/3):** en strukturert pengepolitikk-oppgave (a–e/f) basert på modell 2 eller modell 3 — enten «forklar modellen + utled MP-/Phillips-/IS-kurven + analyser sjokk» (modell 2), eller «samspill penge–finanspolitikk» (modell 3). Sannsynligheten for at søyle 1 er representert er svært høy.
- **Oppgave 2 (50 % / 1/3):** en olje/to-sektor-oppgave (modell 7–9) — realappresiering/sektorstørrelse, ofte med krav om å utvide fra statisk til dynamisk analyse, eller om eksogen vs. endogen lønn. Nesten like sannsynlig som søyle 1.
- **Beredskap:** portefølje/kapitalmobilitet (modell 4–6) er den mest sannsynlige tredje-oppgaven eller integrerte deloppgaven hvis settet har tre deler, og MFT (modell 6) er en klassisk «tung» returkandidat (jf. H2016, V2025). Finansiell stabilitet (modell 1) og middelverdi–varians er de minst sannsynlige, men bør dekkes for bredde.

**Bokens balansepunkt:** ~40 % av innsatsen på søyle 1 (inflasjonsstyring + samspill penge/finanspolitikk), ~30 % på søyle 3 (olje/to-sektor, statisk + dynamisk), ~25 % på søyle 2 (valutamarked + kapitalmobilitet + MFT), ~5 % på randtemaer (finansiell stabilitet, Marshall–Lerner, middelverdi–varians). All trening skal være **modelloppsett → forklaring av relasjoner → utledning av nøkkeluttrykk → sjokk-/politikkanalyse med figur og intuisjon**, aldri ren regning.

---

## 7. Pensum / notasjon / kildeankere

### Pensumbøker og -artikler (fra sensortekstene og vedlegget)
- **Asbjørn Rødseth: *Open Economy Macroeconomics*** (Cambridge University Press) — grunnboka. Sentrale kapitler: **kap. 1** (porteføljemodell for valutamarkedet), **kap. 6** (Mundell–Fleming–Tobin, kapitalmobilitet — momenter mot perfekt mobilitet s. 16–17), **kap. 7** (skjermet/konkurranseutsatt sektor).
- **Røisland & Sveen; Røisland, Sveen & Torvik** — pensumartikler om fleksibel inflasjonsstyring (lukket og åpen økonomi), finansiell stabilitet, og samspill penge–finanspolitikk (kilde til modell 1–3).
- **Ragnar Torvik** — pensumartikkel(er) om naturressursinntekter og to-sektor-økonomi med endogen produktivitet / hollandsk syke (kilde til modell 8–9).
- **Hjelpemiddel (kode C):** Sydsæter/Strøm/Berck, *Matematisk formelsamling for økonomer* + *Economists' Mathematical Manual*.

### Notasjonskonvensjoner (stabile i arkivet — følg eksamensvedlegget)
- **Inflasjonsstyring:** `y` produksjonsgap, `r` realrente (avvik fra langsiktig `ρ`), `e` real valutakurs, `π` inflasjon, `πᵉ` forventet inflasjon, `π*` inflasjonsmål, `r*` utenlandsk realrente, `eᵉ` forventet real valutakurs, `g` offentlig etterspørsel (avvik fra nøytral), `v/u/z` etterspørsels-/inflasjons-/valutakurssjokk, `L` sentralbankens tap, `λ` vekt på produksjonsstabilitet, `δ` vekt på finansielt gap `q`. Parametere `α₁,α₂,α₃` (IS), `γ₁,γ₂` (Phillips).
- **Valutamarked/portefølje:** `Wₚ,W_g,W*` realfinansformue (privat/sentralbank/utland), `M,B,F` (penger, innenlandske obligasjoner, utenlandske obligasjoner), `F_g` valutareserver, `E` nominell valutakurs, `P,P*` prisnivå, `r = i − i* − eᵉ` risikopremie, `i,i*` nominelle renter, `f(r,Wₚ)` porteføljeetterspørsel. Kapitalmobilitet: `|f′ᵣ|` eller `|dE/d(i−i*)|`.
- **To-sektor/olje:** `Yᵢ / Xᵢ` produksjon (i = n/N skjermet, t/T konkurranseutsatt), `Nᵢ` sysselsetting, `Kᵢ` realkapital, `Pᵢ` priser (`Pₜ = EP*`), `W` lønn, `Gᵢ` offentlig kjøp, `Yₚ` disponibel inntekt, `τ` skatterate, `σ` sparerate/substitusjonselastisitet, `X` handelsoverskudd, `η` sysselsettingsandel skjermet sektor, `R` ressursinntekt, `Hᵢ` produktivitet, `λ = H_T/H_N` relativ produktivitet, `Ḣᵢ/Hᵢ` produktivitetsvekst.

### De ni pensummodellene (bokens innholdsryggrad — fra vedlegget)
Se tabellen i del 0. Boka bør bygges eksplisitt rundt disse ni modellene, gruppert i de tre søylene, siden eksamen fra H2023 refererer til dem ved nummer og legger dem ved. Hver bokdel bør: (1) motivere og sette opp modellen, (2) forklare hver relasjon, (3) utlede nøkkeluttrykkene (MP-kurve, ISFX, Phillips åpen, valutatilbud, langtidslikevekt λ), (4) trene sjokk-/politikkanalyse med figur og intuisjon, og (5) sammenligne modellvarianter (statisk/dynamisk, åpen/lukket, fast/flytende, eksogen/endogen lønn).

### Skal IKKE bygges på
- **Ren matematikk-drill** (integrasjon, matriser, diff.likninger for egen del) — det er SØK3004; her er matematikken et middel.
- **Økonometri/estimering** — det er SØK3001.
- **Mikrofundert dynamisk vekstteori** (Ramsey/OLG/RBC/Euler à la UiOs ECON4310) — feil tradisjon; ingen forekomst.
- **Bachelor-stoff** (nasjonalregnskap, elementær Keynes-kryss) — forutsettes kjent.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK3006/`.

**Sensortekster / løsningsveiledninger lest fullstendig (7 dokumenter med sensorinnhold):**
- `SØK3006-sensorveiledning-h-16.pdf` (H2016; tre identiske kopier i arkivet — `(1)` og `(2)` er duplikater, verifisert via md5). Ragnar Torvik.
- `Sensorveiledning Eksamen SØK 3006 Høst 2018.pdf` (H2018).
- `Sensurveiledning SØK3006 Sensurveiledning V21.pdf` (V2021, fire oppgaver, hjemmeeksamen).
- `sensorveil_søk3006_h21.docx` (H2021, tre oppgaver, hjemmeeksamen).
- `sensorveil_søk3006_h23.pdf` (H2023, to oppgaver, refererer til modell 3, 8, 9 i vedlegget).
- `SØK3006 Sensorveiledning.pdf` (viste seg å være **V2025-sensorveiledningen** med full steg-for-steg-utledning av MP-kurven og MFT-analysen — den mest detaljerte løsningsteksten i arkivet).

**Eksamensvedlegg lest fullstendig (kritisk kilde):**
- `vedlegg_eksamen_søk3006.pdf` — notatet med de **ni pensummodellene** (relasjoner + notasjon), som legges ved eksamen fra ca. H2023. Bokens innholdsryggrad.

**Oppgavesett lest grundig (siste ~10 år):**
`SØK3006V-16-YcQ8adQ4.pdf` (V16), `SØK3006H-16.pdf` (H16), `SØK3006V-17.pdf` (V17), `SØK3006H-17.pdf` (H17), `SØK3006V-18.pdf` (V18), `SØK3006H-18.pdf` (H18), `SØK3006V-19.pdf` (V19), `SØK3006H-19.pdf` (H19, første a–f-sett), `SØK3006_V20.pdf` (V20), `3006.pdf` (= **H2021**-oppgavesettet, kode A/hjemme), `SØK3006 H22.pdf` (H22, 50/10/40), `eksamen_søk3006_h23.pdf` (H23), `SØK3006 h24.pdf` (H24, med full modell i oppgave 1), `SØK3006 v25.pdf` (V25).

**Filer hoppet over (uleselige/tomme — se kildemerknad):**
- `SØK3006 v22.pdf` (V2022) — `pdftotext` ga 1 tegn; blank eller ren skann.
- `SØK3006 V24.pdf` (V2024) — Inspera-skall; oppgaveteksten lå i en separat «ressurs» som ikke er i PDF-en (kun struktur «Oppgave 1/2, maks 10 poeng» er lesbar).

**Sammenligningsgrunnlag (kryssreferert i del 0):**
- `../econ2310/EKSAMENSANALYSE.md` — UiOs ECON2310 «Makroøkonomi 2» (åpen-økonomi IS-RR-PK, UIP, inflasjonsmål) er den nærmeste reelle UiO-parallellen for søyle 1; SØK3006-boka bør koordineres med denne for den delte åpen-økonomi-kjernen.
- `../econ4310/EKSAMENSANALYSE.md` — brukt som **metodemal** (struktur/malen for dette dokumentet), men **null innholdsoverlapp** (mikrofundert dynamisk vekstteori, annen tradisjon).
- `../sok3004/EKSAMENSANALYSE.md` — NTNU-søster (masterøkonomenes matematikk; leverer verktøyet, ikke innholdet).

**Merknader om kildene:**
- **Formatskifte 2019/2023:** eldre sett (2016–2018) var typisk ett åpent essayspørsmål; fra 2019 kom strukturerte a–f-oppgaver med oppgitt ligningssett, og fra H2023 legges det ni-modellers vedlegg ved og oppgavene refererer til modellnummer. Boka bør trene begge stiler, men vekte den nyere modellbaserte formen tyngst.
- **Teksttolknings-forbehold:** enkelte tapsfunksjoner, MP-kurver og eksponenter kom forvrengt ut av PDF-ekstraksjonen; alle ligninger i denne analysen er rekonstruert fra sammenhengen og verifisert mot eksamensvedlegget (som gir samtlige modeller i ren form).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modelligninger, notasjon og faglige fakta er standard fagapparat uten verkshøyde.
