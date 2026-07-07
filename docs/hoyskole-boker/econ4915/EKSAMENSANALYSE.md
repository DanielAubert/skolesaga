# Eksamensanalyse: ECON4915 Development Economics (UiO, masternivå)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **11 ordinære eksamenssett (V2015–V2025)** — komplett årsdekning for perioden. Emnet undervises **kun om våren**, så alle sett er «V»-sett. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster. Analysen er kvantitativ der kildene tillater det.
>
> **⚠️ VIKTIGSTE FORBEHOLD OM EVIDENSSTYRKE:** Arkivet inneholder **KUN oppgavesettene** (én PDF per år). Det finnes **ingen sensorveiledning, ingen fasit og ingen løsnings-PDF** for noe år (verifisert: `ls | grep -iE "sensor|losn|solution|fasit|lf"` → tomt). Alle utsagn i denne analysen om *hva sensor krever*, *typiske feil* og *hva som skiller karakternivåene* er derfor **utledet indirekte** fra (a) oppgaveformuleringene selv, (b) de navngitte pensumstudienes faktiske design/funn (allmenn fagkunnskap), og (c) sensorveiledningsmønstrene i **ECON1910** (UiO, samme fagfelt/institutt — se del 9). Marker som **svakt belagt** der ikke annet er sagt. Flere oppgaver er dessuten svært korte (V2020: 57 ord, V2024: 56, V2025: 51), slik at oppgavesettene i seg selv gir begrenset signal.

---

## 0. Hovedfunn i korthet (les dette først)

**ECON4915 er IKKE en ren kopi av ECON1910 — og premisset «RCT vs. teori» er en falsk motsetning for dette emnet. Faget er begge deler, og profilen SKIFTER over tid.** To distinkte epoker er tydelige i arkivet:

- **Epoke 1 — empirisk/impact-evaluation-tung (V2015–V2017):** Detaljerte sett i formatet «Short questions (1/3) + Structured essay (2/3)», bygget rundt **navngitte moderne empiriske studier** og eksplisitt krav om å vurdere **identifikasjonsstrategien kritisk**: Banerjee–Duflo–Glennerster–Kinnan (2015) mikrofinans-**RCT** i Hyderabad, Easterly (2007) **IV** for ulikhet→vekst, Qian (2008) **naturlig eksperiment** (te-priser→kjønnsbalanse), Alesina et al. (2015) etnisk ulikhet (nattlys-proxy), Cole et al. (2013) forsikringsetterspørsel, Kremer & Miguel (2004) avmarkerings-**RCT**, Padró i Miquel (2007) politisk-økonomi-modell. Dette er kjerne-Banerjee/Duflo-tradisjonen + kausal identifikasjon — akkurat det ECON1910 IKKE var.
- **Epoke 2 — teori-/drøftingstung, korte brede essay (V2018–V2025):** Formatet kollapser til ett eller to–tre brede essayspørsmål (ofte < 120 ord oppgavetekst) om nettopp de samme modellfamiliene som ECON1910: **fattigdomsfeller, ulikhet, ressursrenter/ressursforbannelse, institusjoner, korrupsjon, kreditt/mikrofinans/ROSCA**. V2023 gjenopptar riktignok kreditt/mikrofinans/selvhjelpsgrupper med mer empirisk snev.

**Konsekvens for boka:** ECON4915 = **ECON1910s teoriapparat** (delt fagfelt, sannsynlig delte forelesere i ESOP/Oslo-miljøet — `verifiser`) **PLUSS** (a) et **empirisk evaluerings-/identifikasjonslag** (RCT, IV, DiD/naturlige eksperimenter, RDD, nattlys-proxy — «hvordan *identifiserer* vi effekten, og er strategien troverdig?») og (b) mer **avansert kontrakts-/mikroteori** (forsikringsmodell med H/L-sjokk, sharecropping, interlinked contracts, Padró i Miquels «politics of fear»). Boka bør kunne **bygge på / forutsette** ECON1910-modellene for det delte teorilaget og bruke plassen på det som er nytt: nøkkelstudiene, metodeverktøykassa og kontraktsteorien.

**Topp-5 temaer (av 11 sett):** (1) Ulikhet & utvikling/vekst 5/11, (2) Ressursrenter/ressursforbannelse & institusjoner 5/11, (3) Fattigdomsfeller/flerlikevekt 4/11, (4) Korrupsjon & politisk økonomi 3/11, (5) Kredittmarkeder & mikrofinans 3/11 — med et **gjennomgående empirisk-identifikasjonslag** (eksplisitt i minst 4/11, underliggende i epoke 1 hele veien).

**Anbefalt arketype:** *Drøftings-/essayfag med empirisk evidenslag* — samme essay-modell-arketype som ECON1910, men utvidet med (i) egne **metode-/identifikasjonskapitler** (RCT/IV/DiD/RDD/nattlys) og (ii) **nøkkelstudie-bokser** (design → funn → kritisk identifikasjonsvurdering) knyttet til hvert modellkapittel.

---

## 1. Eksamensform og utvikling

### Form

| Trekk | Beskrivelse |
|---|---|
| **Vurdering** | Skriftlig skoleeksamen, normalt **3 timer**. Karakter A–F (E svakeste ståkarakter, F stryk). Oppgavetekst på **engelsk**; besvarelse kan leveres på norsk, svensk, dansk eller engelsk (eksplisitt fra V2022). 10 studiepoeng, masternivå. |
| **Oppgavetype** | **Rent essay/diskursivt.** Ingen flervalg, ingen numerisk regneoppgave, intet «riktig svar». Enten (a) «Short questions» (vekt 1/3) + «Structured essay» (vekt 2/3) — epoke 1, eller (b) ett bredt essay / to–tre likevektede spørsmål — epoke 2. |
| **Hjelpemidler** | **Ingen** skrevne/trykte kilder, **ingen kalkulator** — kun ordbok innvilget av fakultetet. Strengt lukket bok i normalår. |
| **Verktøy** | Kvalitativt, grafisk og **studielitterært**. Nyere sett (fra V2019) i **Inspera** med egne «sketching sheets» for håndtegnede grafer/likninger. «Metode» = hvilket teorirammeverk OG hvilken empirisk identifikasjonsstrategi du strukturerer drøftingen rundt, koblet til pensumets navngitte studier. |

### Struktur- og innholdshistorikk (alle 11 sett)

| Sett | Format | Kjernetema | Struktur / deloppgaver |
|---|---|---|---|
| **V2015** | Short (1/3) + Structured essay (2/3) | **Kredittmarkeder & mikrofinans** (+ politisk økonomi, ulikhet↔vekst) | Short: 1) Padró i Miquel (2007) «politics of fear»-modell; 2) vekst→migrasjon→fattigdom. Essay: 1) hvorfor kredittmarkeder svikter; 2) hva er mikrofinans; 3) Banerjee et al. (2015) RCT-design/funn, er tilnærmingen berettiget; 4) imperfekt kreditt → ulikhet↔vekst; 5) identifikasjonsproblemet ulikhet→vekst + Easterly (2007) IV |
| **V2016** | Short (1/3) + Structured essay (2/3) | **Forsikring & risiko** (+ etnisk ulikhet, kjønn) | Short: 1) Alesina et al. (2015) «ethnic inequality» — mål, inntekts-proxy, effekt på utvikling; 2) Qian (2008) — test, empirisk strategi, troverdighet. Essay: 1) hvorfor forsikring hever velferd; gjensidig forsikring og dens gjennomførbarhet; 2) formell H/L-sjokkmodell (perfekt forsikring; opt-out; flere perioder; imperfekt forsikring); 3) formell forsikring + Cole et al. (2013) |
| **V2017** | Short (1/2) + «Health» (1/2) | **Måling/kontrakter + Helse & humankapital** | Short: a) nattlys som inntektsmål (fordeler/fallgruver); b) sharecropping-ineffektivitet (teori + empirisk test); c) interlinked contracts. Health: a) inntekt↔helse + multiplikatoreffekt; b) tarmparasitter/avmarkering + eksternaliteter + Kremer & Miguel (2004) RCT; c) «know-do gap» |
| **V2018** | Ett bredt essay | **Fattigdomsfelle + ulikhet + ressurser** | Hvorfor er noen land fanget i fattigdom/lav vekst mens andre vokser? Drøft rollen til ulikhet og ressurser |
| **V2019** | Ett problem | **Bistandseffektivitet + identifikasjon** | Effekten av bistand på fattige lands økonomi; hvordan *identifisere* effektene av bistand? |
| **V2020** | To likevektede | **Ulikhet, ressursrenter & utvikling** | 1) i hvilken grad ulik eierfordeling av jord/aktiva skaper fattigdom; 2) i hvilken grad ulik konkurranse om ressursrenter hemmer vekst |
| **V2021** | Ett spørsmål — **open book, 5-timers hjemmeeksamen** (COVID) | **Fattigdomsvariasjon, ressurser & institusjoner** | Hvorfor har noen regioner fortsatt ekstrem fattigdom mens andre har fallende rater? Rollen til naturressurstilgang og institusjonskvalitet |
| **V2022** | Ett spørsmål, tre delspørsmål (IMF-sitat om renter/korrupsjon) | **Korrupsjon, renter & politisk økonomi** | a) er konsekvensene av korrupsjon like i alle situasjonene i sitatet; b) er korrupsjon mest utbredt i u-land — i så fall hvorfor; c) hvis kostnaden er så høy, hvorfor fjerner ikke myndighetene korrupsjonen |
| **V2023** | Tre likevektede | **Kreditt, mikrofinans & selvhjelpsgrupper** | 1) hvorfor kredittmarkeder for fattige svikter (skyhøye renter *eller* rasjonering); 2) kan mikrofinans være vei ut av fattigdomsfeller / gi fattigdomsreduksjon; 3) uformelle selvhjelpsgrupper (ROSCA) — motiver og virkemåte |
| **V2024** | To spørsmål | **Fattigdomsbegrep/-måling + policy & politisk økonomi** | 1) kritisk drøfting av fattigdomsbegrepet; hvordan måle endringer i fattigdom; 2) alternative fattigdomstiltak; i hvilken grad god fattigdomspolitikk også er god *politikk* for å beholde makten |
| **V2025** | Ett spørsmål, deler a)+b) likevektet | **Ulikhet & typer fattigdomsfeller** | a) ulikhetens rolle for (i) økonomisk utvikling og (ii) en fattigdoms-/utviklingsfelle; b) forskjellen mellom en **distribusjonsbasert** og en **ressursbasert** fattigdomsfelle |

### Utviklingstrekk (viktigst)
- **Tydelig regimeskifte rundt 2018.** V2015–V2017 er lange, detaljerte, empiristunge sett med navngitte studier og eksplisitte identifikasjonskrav. Fra V2018 blir settene korte, brede, teori-/drøftingsorienterte og innholdsmessig nesten sammenfallende med ECON1910. **Sannsynlig foreleserbytte / kursomlegging** (`verifiser` mot semestrenes fagansvarlige) — men *begge* profiler ligger i det examinerte pensumet og kan komme igjen.
- **Formatet svinger** mellom «short + structured essay» (epoke 1) og «ett/to–tre brede essay» (epoke 2). Vektingen oppgis ofte eksplisitt («count equally», «weight 1/3»/«2/3») — **fordel tid og lengde etter vekt.**
- **Avvik fra normal skoleeksamen:** V2021 var **5-timers open-book hjemmeeksamen** (COVID). Ellers strengt lukket bok.
- **Ingen tallregning noe år.** Alt er verbalt/grafisk/litterært. «Sketching sheets» brukes til grafer/skisser, ikke utregning.
- **Konstanten på tvers av begge epoker:** fattigdom, ulikhet, ressurser/institusjoner og kreditt/mikrofinans går igjen. Det som forsvinner etter 2017 er de *eksplisitte* nøkkelstudie-spørsmålene — men de kan komme tilbake, og en masterstudent forventes uansett å kjenne dem.

---

## 2. Temafrekvens-tabell

Basert på alle **11 settene**. Celleverdi = sett der temaet er et helt essay eller en vesentlig deloppgave. Gjenganger-score i prosent av 11.

| Tema | Sett | Gjenganger-score | Epoke |
|---|---|---|---|
| **Ulikhet & utvikling/vekst** (ulikhet→vekst-kanal via imperfekt kreditt; etnisk ulikhet; distribusjonsbasert felle; identifikasjon av kausaleffekt) | V2015, V2016, V2018, V2020, V2025 | **5/11 = 45 %** | Begge |
| **Ressursrenter / ressursforbannelse & institusjoner** (ulik konkurranse om renter; naturressurs + institusjonskvalitet; olje-renter i korrupsjon) | V2018, V2020, V2021, V2022, V2025 | **5/11 = 45 %** | Mest epoke 2 |
| **Fattigdomsfeller / flerlikevekt** (hvorfor fanget; distribusjons- vs. ressursbasert felle; mikrofinans som vei ut) | V2018, V2021, V2023, V2025 | **4/11 = 36 %** | Mest epoke 2 |
| **Korrupsjon & politisk økonomi** (Padró i Miquel «politics of fear»; korrupsjon/renter; god politikk vs. maktbevaring) | V2015, V2022, V2024 | **3/11 = 27 %** | Begge |
| **Kredittmarkeder & mikrofinans** (asymmetrisk info, rasjonering vs. skyhøye renter; mikrofinans; Banerjee RCT) | V2015, V2023 (+ V2016 forsikring beslektet) | **2–3/11 = 18–27 %** (hele essay) | Begge |
| **Empirisk identifikasjon / metode** (RCT, IV, naturlig eksperiment, DiD; «hvordan identifisere»; «er strategien troverdig/berettiget») | V2015, V2016, V2017, V2019 | **4/11 = 36 %** eksplisitt (+ underliggende i hele epoke 1) | Mest epoke 1 |
| **Fattigdomsmåling & utviklingsbegrepet** (nattlys-proxy; kritisk fattigdomsbegrep; måle endringer) | V2017, V2024 | **2/11 = 18 %** | Begge |
| **Forsikring & risiko** (velferd av forsikring; gjensidig forsikring; H/L-modell; formell forsikring, Cole et al.) | V2016 | **1/11** (helt strukturert essay) | Epoke 1 |
| **Helse & humankapital** (inntekt↔helse-multiplikator; avmarkering/eksternaliteter, Kremer & Miguel; know-do gap) | V2017 | **1/11** (halv eksamen) | Epoke 1 |
| **Jordbrukskontrakter** (sharecropping-ineffektivitet; interlinked contracts) | V2017 | **1/11** | Epoke 1 |
| **Bistandseffektivitet** (aid→vekst; identifikasjon) | V2019 | **1/11** (helt essay) | Epoke 2 |
| **Kjønn / «missing women»** (Qian 2008, sex-spesifikk inntekt) | V2016 | **1/11** | Epoke 1 |
| **Migrasjon rural→urban** (vekst→migrasjon→fattigdom; jf. Harris–Todaro) | V2015 | **1/11** | Epoke 1 |
| **Selvhjelpsgrupper / ROSCA** (uformell sparing/kreditt) | V2023 | **1/11** | Epoke 2 |

### Viktigste funn
1. **Ingen enkelttema dominerer slik flerlikevekt gjør i ECON1910.** ECON4915 er **bredere** — pensumet er en portefølje av utviklingsøkonomiske temaer, og hvert år plukkes ett–tre. De to hyppigste (ulikhet; ressurser/institusjoner, hver 45 %) er også de to som oftest **kombineres i samme essay** (V2018, V2020, V2025).
2. **Ulikhet er navet — men med et identifikasjonskrav.** Ulikhet drøftes både teoretisk (imperfekt kreditt → underinvestering → lavere vekst; distribusjonsbasert felle) og empirisk (Easterly IV, Alesina etnisk ulikhet). Sensor vil se at kandidaten kjenner **endogenitetsproblemet** (ulikhet er ikke eksogen) — ikke bare korrelasjon.
3. **Ressurser + institusjoner er det andre navet** og binder sammen ressursforbannelse, renter og korrupsjon. V2022 (korrupsjon fra oljerenter) og V2020/V2021 (ressursrenter, institusjonskvalitet) er samme underliggende politisk-økonomi-mekanisme.
4. **Kreditt/mikrofinans/forsikring/ROSCA utgjør en sammenhengende «uformelle finansmarkeder»-blokk** (V2015, V2016, V2023) — asymmetrisk informasjon, rasjonering, gruppelån, gjensidig forsikring, ROSCA. I epoke 1 med eksplisitt RCT-evidensvurdering (Banerjee, Cole).
5. **Metode/identifikasjon er fagets master-signatur.** Der ECON1910 nøyer seg med modellmekanismen, forventer ECON4915 i tillegg at kandidaten kan svare på «hvordan vet vi dette *empirisk*, og er identifikasjonen troverdig?» Dette er den klareste forskjellen fra bachelor-emnet, og bør ha egne kapitler.

---

## 3. Oppgavetype-katalog (sjangre)

Alle besvares verbalt + evt. figur; ingen algebra kreves, men mekanismen skal være stringent.

### A. Modell-/mekanisme-essayet (epoke 2-kjernesjanger, delt med ECON1910)
- **Oppsett:** ett bredt spørsmål — «hvorfor er noen land fanget i fattigdom mens andre vokser?», «ulikhetens rolle for utvikling og for en fattigdomsfelle», «forskjellen på distribusjons- og ressursbasert felle».
- **Forventet struktur:** teori → mekanisme (flerlikevekt/terskel) → figur → nyansering (flere kanaler) → policy-implikasjon. Skille **distribusjonsbasert felle** (formuesfordeling + kredittskranke låser fattige ute fra investering) fra **ressursbasert felle** (renter/geografi/institusjoner holder aggregatet nede) — V2025 eksplisitt.
- **Sett:** V2018, V2020, V2021, V2025.

### B. Nøkkelstudie-spørsmålet (epoke 1-signatur)
- **Oppsett:** «Studie X undersøker Y. Forklar tilnærmingen/strategien. Er den berettiget/troverdig? Hva er funnene?» — Banerjee et al. (2015) mikrofinans-RCT; Qian (2008) te-priser; Alesina et al. (2015); Cole et al. (2013); Kremer & Miguel (2004); Easterly (2007) IV.
- **Krav:** gjengi **design** (hva randomiseres/instrumenteres, hvilken variasjon utnyttes), **identifikasjonsantakelsen** (SUTVA/eksklusjon/parallelle trender), en **kritisk vurdering** (spillovers, ekstern validitet, eksklusjonsbrudd), og **funnene** (retning + at effekten ofte er *beskjeden*, jf. mikrofinans).
- **Sett:** V2015, V2016, V2017. Kan komme tilbake — masterstudent forventes å kjenne kanon.

### C. Kredittmarkeds-/finansmarkeds-essayet
- **Krav:** hvorfor kredittmarkeder svikter i fattige land — **asymmetrisk informasjon**: ugunstig utvalg (renteøkning tiltrekker de mest risikable → **rasjonering** framfor markedsklarering, Stiglitz–Weiss) og moralsk hasard (manglende sikkerhet/håndhevelse). Rasjonering vs. skyhøye renter = to sider av samme informasjonsproblem (V2023 eksplisitt). Deretter mikrofinans (gruppelån/joint liability, dynamiske insentiver) og en **kritisk** evidensvurdering (Banerjee: beskjedne effekter, ingen mirakelkur).
- **Sett:** V2015, V2023.

### D. Forsikrings-/risiko-essayet (formell modell)
- **Krav (V2016):** hvorfor forsikring hever velferd (risikoaversjon, konsumutjevning); **gjensidig (uformell) forsikring** og dens grenser. Formell H/L-sjokkmodell: a) hva perfekt forsikring innebærer; b) hvorfor den heldige vil **melde seg ut** (deltakelses-/insentivskranke); c) om **gjentakelse over flere perioder** kan opprettholde forsikring; d) om **imperfekt** forsikring er mulig når perfekt bryter sammen. Til slutt formell forsikring + Cole et al. (2013): lav etterspørsel (likviditet, tillit, forståelse).
- **Sett:** V2016 (helt strukturert essay). Mest «teknisk» sjanger — nærmest en kontraktsteoretisk oppgave.

### E. Ressurs-, institusjons- og korrupsjonsessayet (politisk økonomi)
- **Krav:** ressursforbannelsen (renter → rent-seeking/svake institusjoner → hemmet vekst); korrupsjon der reguleringer/renter skaper meravkastning (V2022 IMF-sitat); at korrupsjon vedvarer fordi makthaverne selv tjener på den (commitment-problem); at konsekvensene *ikke* er like på tvers av kontekster (byråkratisk «smøring» vs. ressursrente-plyndring); og at «god fattigdomspolitikk» kan kollidere med «god politikk for å beholde makten» (V2024 — jf. Padró i Miquel, elitekontroll).
- **Sett:** V2015 (Padró i Miquel), V2018, V2020, V2021, V2022, V2024.

### F. Konseptuelle/målings-essay
- **Krav:** kritisk fattigdomsbegrep (absolutt vs. relativ linje, multidimensjonalitet, head count og hva det *ikke* fanger); hvordan **måle endringer** i fattigdom; utvikling som mer enn BNP; **nattlys** som inntekts-proxy (fanger uformell økonomi, men ikke-lineær sammenheng + urban skjevhet).
- **Sett:** V2017 (nattlys), V2024 (fattigdomsbegrep).

### G. Metode-/identifikasjons-essayet (frittstående)
- **Krav (V2019):** hvorfor aggregert regresjon (aid→vekst, ulikhet→vekst) er beheftet med **omvendt kausalitet** og **utelatte variabler**; hvordan mikro-RCT-er på enkelttiltak gir renere identifikasjon, men reiser **aggregerings-/ekstern-validitets**-spørsmål. Kjenn verktøykassa: RCT, IV, DiD, naturlig eksperiment, RDD — med hver sin identifikasjonsantakelse.
- **Sett:** V2019 (helt essay), gjennomgående i epoke 1.

---

## 4. Sensorens krav

> **⚠️ Ingen sensorveiledning finnes i arkivet.** Punktene under er **utledet** fra oppgaveformuleringene, studienes faktiske innhold og ECON1910-veiledningenes mønstre (samme institutt/fagfelt). Behandle som **kvalifisert hypotese**, ikke dokumentert fasit. Marker i boka der noe bygger på dette.

### Sannsynlige metaregler (svakt–middels belagt)
1. **Bygg på pensumapparatet, ikke sunn fornuft.** Oppgavene navngir konsekvent studier og modeller — sensor forventer fagspesifikk kunnskap, ikke generelle betraktninger. (Sterkt indikert av oppgavenes eksplisitte studiereferanser; parallell til ECON1910-veiledningenes uttrykte regel.)
2. **Svar på det som spørres, og fordel etter vekt.** Oppgavene sier ofte «count equally» / «weight 1/3». En besvarelse som drukner ett delspørsmål taper mekanisk en tilsvarende andel.
3. **Identifikasjon foran korrelasjon (master-kravet).** Der ECON1910 stopper ved mekanismen, forventer ECON4915 at kandidaten *også* redegjør for hvordan effekten identifiseres empirisk og hva som kan bryte antakelsen. Dette er den tydeligste hevingen fra bachelor til master.
4. **Gjengi design + funn, ikke bare konklusjonen.** Ved nøkkelstudie-spørsmål: hva randomiseres/instrumenteres, hvilken variasjon utnyttes, hva som gjør identifikasjonen troverdig — og de faktiske (ofte *beskjedne*) funnene.
5. **Modellspørsmål: gjør antakelsene eksplisitte, forklar mekanismen.** V2015 sier direkte at man *ikke* trenger å løse Padró i Miquel-modellen formelt — men logikken og antakelsene må være stringente. Bruk skisse-arket til grafer der det klargjør.
6. **Nyanse skiller topp fra bestått.** At konsekvensene av korrupsjon/ulikhet varierer med kontekst (V2022 a), at frihandel/ulikhet kan virke begge veier, at mikrofinans *ikke* er en mirakelkur — slik toveis drøfting belønnes.

### Sannsynlige karakterskiller (utledet, svakt belagt)
- **E–D:** riktig identifikasjon av kjernefenomenet + en enkel korrekt forklaring/riktig hovedretning.
- **C–B:** komplett, konsistent argument under *hver* deloppgave, korrekt design/mekanisme som henger sammen.
- **A:** kritisk identifikasjonsvurdering (eksklusjon/spillover/ekstern validitet), kobling på tvers av tema (ulikhet↔kreditt↔vekst; ressurser↔institusjoner↔korrupsjon), og en velmotivert, kontekstsensitiv nyansering.

---

## 5. Typiske feil

> Utledet av oppgavenes konstruksjon og fagkjente fallgruver (ikke fra veiledning — **svakt belagt**).

1. **Svare med sunn fornuft i stedet for pensummodell/-studie.** Sannsynligvis den mest sanksjonerte feilen.
2. **Hevde kausalitet fra korrelasjon uten identifikasjonsantakelse.** Den klassiske master-feilen: påstå at «ulikhet senker vekst» eller «bistand virker/virker ikke» uten å nevne omvendt kausalitet/utelatte variabler og hvordan IV/RCT/naturlig eksperiment omgår dem.
3. **Gjengi en studies *konklusjon* uten design.** Å si «Banerjee fant liten effekt» uten RCT-designet (randomisert filialåpning i Hyderabad, sammenlikning behandlings-/kontrollområder) og uten å vurdere ekstern validitet/spillovers.
4. **Overselge mikrofinans/kreditt som mirakelkur.** Funnet i litteraturen er *beskjedne* gjennomsnittseffekter — å presentere mikrofinans som sikker vei ut av fattigdomsfella er en feil (V2023).
5. **Blande sammen rasjonering og skyhøye renter** som konkurrerende forklaringer i stedet for to utfall av *samme* informasjonsproblem (V2023).
6. **Forsikringsmodell: glemme deltakelses-/insentivskranken.** Ikke forklare *hvorfor* den heldige melder seg ut, eller hvordan gjentakelse/straff opprettholder samarbeid (V2016 b–d).
7. **Ressurser/institusjoner: behandle naturressurser som utvetydig gode.** Uten rentekonkurranse/rent-seeking/institusjonskvalitet mister man hele poenget (V2020, V2021).
8. **Korrupsjon: anta at konsekvensene er like i alle situasjoner.** V2022 a) er konstruert for å avsløre nettopp dette — skill oljerenter fra handelsrestriksjoner fra byråkratisk smøring.
9. **Fattigdomsmåling: ikke skille absolutt/relativ linje, eller ikke se head count-målets svakhet** (fanger ikke fordeling *blant* de fattige) (V2024).
10. **Nattlys-proxy: nevne bare fordelen** (dekker uformell økonomi) og glemme fallgruvene (ikke-lineær sammenheng, urban skjevhet) (V2017).
11. **Behandle utvikling som ren BNP-vekst** — glemme helse, utdanning, sårbarhet, frihet (V2024).
12. **Ignorere vekten / drukne et delspørsmål.**

---

## 6. Teori- og metodeapparat

Verktøykassen er **kvalitativ, grafisk og studielitterær** — ingen algebra kreves, men de formelle mekanismene må beherskes verbalt.

### Teorimodeller (må beherskes)
1. **Fattigdomsfelle / flerlikevekt.** Ikke-konveks avkastning (S-kurve/terskel) via ernæring/helse/udelelig investering → to lokalt stabile likevekter. **Distribusjonsbasert** (formuesfordeling + kredittskranke) vs. **ressursbasert** (renter/geografi/institusjoner) felle — V2025-kjernedistinksjon. Deles med ECON1910.
2. **Ulikhet → vekst via imperfekte kredittmarkeder.** Fattige kan ikke finansiere lønnsom (human)kapitalinvestering → aggregert produksjonstap. Motspor: sparerate-/insentivargument (ulikhet kan fremme vekst). **Endogenitet** er kjernen.
3. **Kredittmarkedssvikt.** Ugunstig utvalg (Stiglitz–Weiss: rasjonering), moralsk hasard, manglende sikkerhet/håndhevelse. Mikrofinans: joint liability/gruppelån, dynamiske insentiver.
4. **Gjensidig/formell forsikring.** H/L-sjokkmodell, deltakelses-/insentivskranke, gjentatt spill (folk-teorem-logikk), hvorfor formell etterspørsel er lav.
5. **Jordbrukskontrakter.** Sharecropping-ineffektivitet (Marshallsk under-innsats, etterspørsel ∝ g·MPL), interlinked contracts (kreditt–arbeid–jord koblet).
6. **Ressursforbannelse & politisk økonomi.** Renter → rent-seeking/svake institusjoner; korrupsjon som funksjon av reguleringer/renter; commitment-problem (hvorfor korrupsjon vedvarer); Padró i Miquel «politics of fear» / elitekontroll; god politikk vs. maktbevaring.
7. **Helse & humankapital.** Inntekt↔helse-multiplikator; eksternaliteter i sykdomsbekjempelse (avmarkering); «know-do gap».
8. **Migrasjon (Harris–Todaro).** Vekst → rural-urban-migrasjon → fattigdom by/land (V2015). Deles med ECON1910.

### Empirisk metode / identifikasjon (master-laget, må beherskes)
- **RCT** — randomisering løser seleksjon; drøft ekstern validitet, spillovers, etterlevelse. Kanon: Banerjee–Duflo–Glennerster–Kinnan (2015, mikrofinans), Kremer & Miguel (2004, avmarkering m/ eksternalitets-/spillover-design).
- **IV / instrumentvariabel** — relevans + eksklusjon; Easterly (2007) instrument for ulikhet→underutvikling; vær kritisk til eksklusjonsantakelsen.
- **Naturlig eksperiment / DiD** — Qian (2008): te-/silkeprissjokk som eksogen variasjon i kvinners inntekt → kjønnsbalanse; vurder troverdighet.
- **Proxy-måling** — nattlys fra satellitt (Alesina et al. 2015; V2017): fordeler (dekker uformell økonomi) vs. fallgruver (ikke-lineær, urban skjevhet).
- **Aggregat-regresjonens svakhet** — aid→vekst / ulikhet→vekst: omvendt kausalitet + utelatte variabler; mikro-RCT gir renere identifikasjon, men aggregerings-/ekstern-validitets-pris (V2019).
- (RDD nevnes ikke eksplisitt i noe sett, men hører til verktøykassa — inkluder kort.)

### Tospråklig terminologi (eksamen er på engelsk)
poverty trap = fattigdomsfelle · multiple equilibria = flerlikevekt · adverse selection = ugunstig utvalg · moral hazard = moralsk hasard · credit rationing = kredittrasjonering · joint liability = solidaransvar/gruppelån · mutual insurance = gjensidig forsikring · sharecropping = forpaktning/deling av avling · interlinked contracts = sammenkoblede kontrakter · resource rents = ressursrenter · resource curse = ressursforbannelse · rent-seeking = renteøkonomisk jakt · instrumental variable (IV) = instrumentvariabel · randomized controlled trial (RCT) = randomisert kontrollert forsøk · difference-in-differences (DiD) = forskjell-i-forskjeller · exclusion restriction = eksklusjonsantakelse · external validity = ekstern validitet · spillovers = ringvirkninger/smitte · head count ratio = fattigdomsandel · nighttime lights = nattlys · know-do gap = kunnskap–handling-gap · missing women = «forsvunne kvinner» · deworming = avmarkering.

### Pensumankere
- **Navngitte eksamensstudier (kjernekanon):** Padró i Miquel (2007); Banerjee, Duflo, Glennerster & Kinnan (2015); Easterly (2007); Alesina, Michalopoulos & Papaioannou (2015); Cole et al. (2013); Qian (2008); Kremer & Miguel (2004). Disse er dokumentert i oppgavesettene selv og bør ha egne nøkkelstudie-bokser.
- **Sannsynlig lærebok/kompendium:** utviklingsøkonomi på masternivå ved UiO trekker trolig på (a) forelesningsmateriell i Oslo-/ESOP-tradisjonen (jf. ECON1910s Mehlum–Moene-kompendium — sannsynlig faglig slektskap for epoke 2-temaene) og (b) en moderne empirisk lærebok, f.eks. Banerjee & Duflo *Poor Economics* eller en anvendt utviklings-/impact-evaluation-tekst for epoke 1-temaene. **`verifiser` faktisk pensumliste per semester** — ikke dokumentert i arkivet.

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt
1. **Ulikhet & utvikling** — teorikanal (imperfekt kreditt → underinvestering) + empirisk identifikasjon (Easterly IV, endogenitet) + distribusjonsbasert felle. Hyppigst (45 %) og navet i faget.
2. **Ressursrenter, ressursforbannelse & institusjoner** — renter → rent-seeking → svake institusjoner → hemmet vekst; kobling til korrupsjon. 45 %.
3. **Fattigdomsfeller / flerlikevekt** — terskel/S-kurve, distribusjons- vs. ressursbasert felle, mikrofinans som (begrenset) vei ut. 36 %; delt med ECON1910.
4. **Kredittmarkeder & mikrofinans** — asymmetrisk info, rasjonering vs. renter, gruppelån, Banerjee-RCT + kritisk evidensvurdering.
5. **Empirisk identifikasjon (metodekapittel)** — RCT/IV/DiD/naturlig eksperiment/nattlys, hver med sin antakelse; hvorfor aggregat-regresjon svikter. Master-signaturen.

### Nivå 2 — må kunne (bærer et helt essay)
6. **Korrupsjon & politisk økonomi** — renter/reguleringer, kontekstavhengige konsekvenser, commitment-problem, Padró i Miquel, god politikk vs. maktbevaring.
7. **Forsikring & risiko** — gjensidig forsikring, H/L-modell, deltakelsesskranke, gjentatt spill, Cole et al.
8. **Fattigdomsmåling & utviklingsbegrepet** — absolutt/relativ linje, head count-svakhet, måle endringer, nattlys-proxy, utvikling > BNP.

### Nivå 3 — bør kjenne (single-year-stoff)
9. **Helse & humankapital** — inntekt↔helse-multiplikator, eksternaliteter/avmarkering (Kremer & Miguel), know-do gap.
10. **Jordbrukskontrakter** — sharecropping-ineffektivitet, interlinked contracts.
11. **Bistandseffektivitet** — aid→vekst-identifikasjon.
12. **Kjønn / «missing women»** (Qian), **migrasjon** (Harris–Todaro), **ROSCA/selvhjelpsgrupper**.

**Prognose for neste V-sett:** Med regimeskiftet tatt i betraktning er **epoke 2-profilen (korte, brede teori-/drøftingsessay)** mest sannsynlig for de nærmeste årene: ett–tre likevektede spørsmål, høyst sannsynlig med **ulikhet og/eller ressurser–institusjoner** i sentrum, ofte kombinert med **fattigdomsfelle**. Regn med at minst ett spørsmål trekker inn **fattigdomsmåling/-begrep** eller **korrupsjon/politisk økonomi**. En **retur til epoke 1s eksplisitte nøkkelstudie-spørsmål** (Banerjee, Qian, Easterly, Kremer & Miguel) kan ikke utelukkes ved foreleserbytte, og en masterstudent forventes uansett å kunne dem — boka må dekke begge profiler. Alt besvares verbalt + figur; ingen algebra.

**Bokprioritering:** Bygg ett kjernekapittel per nivå-1-tema med (a) modell/mekanisme + figur, (b) nøkkelstudie-boks (design → funn → identifikasjonsvurdering) og (c) øvingsessay. Legg **flerlikevekt/fattigdomsfelle** og **empirisk identifikasjon** som to gjennomgående røde tråder. La boka **forutsette/lenke til ECON1910** for det delte teorilaget (Harris–Todaro, big push, korrupsjons-flerlikevekt, handel/fordeling) og bruke plassen på master-tillegget: nøkkelstudiene, metodeverktøykassa, kontrakts-/forsikringsteorien.

---

## 8. Forholdet til ECON1910 (bachelor-utviklingsøkonomi, UiO)

**Slektskap, ikke identitet — og ikke ren progresjon.**

- **Delt teorikjerne (epoke 2):** fattigdomsfeller/flerlikevekt, ulikhet, ressurser/ressursforbannelse, korrupsjon, kreditt/mikrofinans/ROSCA og migrasjon (Harris–Todaro) er felles for begge emnene. De korte epoke-2-settene (V2018–V2025) er tematisk nesten sammenfallende med ECON1910s essay-modell-sett — sterk indikasjon på **delt fagmiljø / mulige delte forelesere** (Oslo-/ESOP-tradisjonen; `verifiser`).
- **Master-tillegget (der ECON4915 hever nivået):**
  1. **Empirisk evaluerings-/identifikasjonslag** — navngitte RCT/IV/naturlig-eksperiment-studier og eksplisitt krav om å vurdere om identifikasjonen er troverdig. ECON1910 gjør *ikke* dette (rent modellteoretisk).
  2. **Mer avansert mikro-/kontraktsteori** — formell forsikringsmodell (H/L-sjokk, deltakelsesskranke, gjentatt spill), sharecropping, interlinked contracts, Padró i Miquels politisk-økonomi-modell.
- **Praktisk konsekvens for boka:** ECON4915-boka kan **bygge på ECON1910** for det delte teorilaget (kryssbok-lenker til fattigdomsfelle-, korrupsjons-, handels- og Harris–Todaro-kapitlene der) og konsentrere egne kapitler om (i) nøkkelstudiene, (ii) metodeverktøykassa og (iii) kontrakts-/forsikringsteorien. **Forkunnskaper-blokkene** bør anta ECON1910-nivå på flerlikevekt/fattigdomsfelle og heve blikket til «hvordan vet vi dette empirisk?».
- **NB om ECON1910-oppdragets korreksjon:** ECON1910 viste seg å være teoridrevet (Mehlum–Moene), *ikke* RCT. **For ECON4915 gjelder ikke den korreksjonen** — her ER RCT/impact evaluation eksplisitt eksaminert (epoke 1). Ikke overfør ECON1910s «bygg ikke på Banerjee-Duflo»-konklusjon til dette emnet.

*(Merk: ECON3150 econometrics ble ikke lest, fordi ECON4915s empiriske lag er kvalitativt/tolkende — «forklar designet og vurder om identifikasjonen holder» — ikke regnetungt. Metodekapitlene bør lære identifikasjonslogikk (relevans/eksklusjon, parallelle trender, SUTVA/spillovers, ekstern validitet) verbalt, ikke estimasjonsmekanikk.)*

---

## 9. Kildeliste og evidensvurdering

Alle filer: `/Users/danielandreasaubert/Desktop/Eksamner/UiO/ECON4915/`.

**Eksamensoppgaver lest grundig (11 ordinære — komplett V2015–V2025):** `ECON4915_V2015.pdf` … `ECON4915_V2025.pdf`.

**Sensorveiledninger / fasit:** **INGEN i arkivet** (verifisert). Alle utsagn om sensorkrav, karakterskiller og typiske feil er **utledet** — se forbeholdet øverst.

**Fagbeskrivelse:** omskrevet sammendrag av UiOs emnebeskrivelse (scratchpad: `fagbeskrivelse-econ4915.md`). Emnet AKTIVT (undervises hver vår, V2026 listet), 10 studiepoeng, masternivå, engelsk, 3-timers skoleeksamen i Inspera.

**Referanseanalyse:** `docs/hoyskole-boker/econ1910/EKSAMENSANALYSE.md` (bachelor-utviklingsøkonomi, samme institutt — brukt for sensormønster og teorikjerne).

**Navngitte pensumstudier (fra oppgavesettene):** Padró i Miquel (2007, *RES*); Banerjee, Duflo, Glennerster & Kinnan (2015, *AEJ:Applied*); Easterly (2007, *JDE*); Alesina, Michalopoulos & Papaioannou (2015, *JPE*); Cole, Giné, Tobacman, Topalova, Townsend & Vickery (2013, *AEJ:Applied*); Qian (2008, *QJE*); Kremer & Miguel (2004, om avmarkering).

### Evidensvurdering (ærlig)
- **Sterkt belagt:** eksamensform, formatutvikling, temafrekvens, oppgavesjangre, de navngitte studiene og teori-/metodeapparatet — alt lest direkte i de 11 komplette settene.
- **Middels belagt:** regimeskiftet ~2018 (tydelig i dataene, men *årsaken* — foreleserbytte — er `verifiser`); slektskapet til ECON1910 (tematisk åpenbart, institusjonell kobling `verifiser`).
- **Svakt belagt (merket gjennomgående):** alt i del 4 (sensorkrav) og del 5 (typiske feil) — utledet uten sensorveiledning. Bør bekreftes hvis en veiledning senere skaffes. Pensumlisten/læreboka er ikke dokumentert og må `verifiseres` per semester.
- **Opphavsrett:** alle beskrivelser av oppgaver og metoder er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster gjengitt ordrett. Modellsammenhenger, studiedesign og begrepsdefinisjoner er allmenne fagfakta uten verkshøyde.
