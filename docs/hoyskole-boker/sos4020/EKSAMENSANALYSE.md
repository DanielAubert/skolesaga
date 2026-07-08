# Eksamensanalyse: SOS4020 Kvantitativ metode (UiO)

> Grunnlagsdokument for en eksamensrettet lærebok. Basert på gjennomgang av ~30 eksamenssett (høst 2003 – høst 2025, ordinære og utsatte) og 8 sensorveiledninger (2018–2025) fra Institutt for sosiologi og samfunnsgeografi, UiO. **Alt innhold er omskrevet med egne ord — ingen ordrette gjengivelser av oppgavetekster eller sensorveiledninger.** Analysen går dypere enn fagbeskrivelsen og skal leses sammen med den. Emnet er AKTIVT (obligatorisk på master i sosiologi; kjørt som 6-timers skoleeksamen H2024 og H2025). Overlapp: 5 studiepoeng med SOSGEO4022 – Advanced regression analysis.

---

## 1. Eksamensform og utvikling (2003–2025)

SOS4020 har byttet vurderingsform grunnleggende **to ganger** på tjue år. En lærebok må kalibreres primært mot dagens 6-timers skoleeksamen (fra H2024), men fase 1 og fase 2 forteller hva som er de dype, uforanderlige faglige kravene bak formatendringene.

### Fase 1: Klassisk skoleeksamen med regresjonstabeller (2003–2015)
- **4 timer** gjennom hele perioden (de eldste settene oppgir 4 t; ett par år tidlig var oppgitt hjelpemiddel «ikke-programmerbar kalkulator», senere «alle skriftlige hjelpemidler og kalkulator»).
- Håndskrevet, med gjennomslagskopi. Sensor hadde **ikke** tilgang til kandidatens skriftlige hjelpemidler — derfor advarsel om ikke å henvise til dem.
- Fast arkitektur: én eller to **datavignetter** (en spørreundersøkelse med beskrevne variabler) etterfulgt av **8–13 deloppgaver** der kandidaten skulle tolke ferdig utregnede regresjonstabeller, regne for hånd (konfidensintervall, hypotesetest, forventningsrett estimator), vurdere begrepsvaliditet, og av og til **skissere et forskningsopplegg** (f.eks. et eksperiment for å teste en teori, 2011V). Alt skulle besvares — sjelden valgfrihet.
- Stoffet var mer klassisk statistisk enn i dag: sannsynlighetsutvalg, forventningsrett/effektiv estimator, konfidensintervall, standardfeil, t-/F-tester, OLS-tolkning, dummyvariabler, samspill.

### Fase 2: Emneoppgave-/mapperegimet (ca. 2016–2023)
- Vurderingen flyttet fra skoleeksamen til en **mappe med to komponenter**:
  - **Arbeid 1 (70 %):** et selvstendig empirisk arbeid (~4000 ord) på selvvalgt problemstilling, bygget på obligatoriske seminarinnleveringer, med et tilrettelagt paneldatasett (amerikanske PSID/NLSY/AddHealth i de tidlige årene, senere det norske **NorLAG**). Kravet var å bruke **to regresjonsteknikker**: OLS/LPM + en mer avansert teknikk (**fasteffekt (FE)** eller **logistisk regresjon**). Studenten kunne kjøre alt på panel (pooled OLS + FE) eller sammenligne tverrsnitt-OLS mot FE på panel; BE-estimater (between-effects) kunne trekkes inn som pluss.
  - **Arbeid 2 (30 %):** en kommentar-/kritikkartikkel (~2000 ord) om en selvvalgt publisert artikkel (tidsskrift på NSD nivå 1/2) som bruker en regresjonsbasert teknikk for å studere årsakssammenhenger. Målet var å vise at kandidaten **selvstendig** kan sette seg inn i og kritisk vurdere en metode uten veiledning.
- Statistikkverktøyet skiftet i denne fasen fra **Stata** (do-fil + log-fil, til og med ~2021) til **R** (R-kode leveres, fra ~2022). Begge arbeidene måtte bestås.
- I 2016V finnes også en **overgangsform**: emneoppgave med tre alternativer (bl.a. replikasjon av Budig & England 2001), samtidig som skoleeksamen fortsatt fantes i arkivet.

### Fase 3: Ny 6-timers skoleeksamen (H2024 →)
- **6 timer**, digitalt i **Inspera**, med **R og RStudio** tilgjengelig for å analysere utleverte datasett. Alle hjelpemidler unntatt KI-verktøy.
- **Fast fire-delt arkitektur** (samme i H2024, utsatt H2024 og H2025), totalt **60 poeng**:
  1. **R-oppgaver (1.1–1.15), 20 poeng.** Kandidaten laster datasett inn i R, kjører modeller og tolker: formulere hypoteser, deskriptiv statistikk, bivariat + multippel OLS/LPM, dummysett vs. lineær spesifikasjon, annengradsledd (kurvlinearitet), samspill, logistisk regresjon (odds/oddsratio/sannsynlighet), fasteffektmodell. Oppgave 1.15 = lim inn R-skriptet (gir ikke poeng i seg selv, men brukes til å gi **delvis uttelling** ved følgefeil).
  2. **Flervalgsoppgaver (2.1–2.16), 16 poeng.** Automatisk rettet i Inspera; spørsmålene hemmeligholdes for gjenbruk.
  3. **Håndregningsoppgaver (3.1–3.3), 4 poeng.** Automatisk rettet + én tolkningsdel (f.eks. tolke ikke-lineær sammenheng fra kategoridifferanser).
  4. **Tekstoppgaver (design/drøfting), 20 poeng.** Kandidaten velger **én av to** oppgaver. Typisk enten (a) å skissere **to alternative design** (et regresjonsbasert + et kvasi-eksperimentelt/eksperimentelt) for samme problemstilling og sammenligne dem, eller (b) å **kritisere en gitt studie** for manglende kausalitet/konfundering og foreslå et bedre design.
- **Karakterskala (poeng):** A 50–60, B 40–49, C 30–39, D 20–29, E 10–19, F 0–9. For tallsvar godtas svar innenfor oppgitte intervaller; alle formuleringer med tilnærmet samme innhold gir full uttelling.

### Strukturelle konstanter gjennom 20 år
1. **Regresjonsanalyse er ryggraden** i alle tre fasene — OLS/LPM alltid, med logistisk og fasteffekt som «avansert par».
2. **Tolkning slår utregning.** Sensor krever både en **teknisk** (mekanisk) og en **substansiell** tolkning av koeffisienter i praktisk talt hver eneste output-oppgave, i alle tre fasene.
3. **Kausalitet vs. korrelasjon** er den røde tråden: fra begrepsvaliditet (fase 1), via kausal graf/DAG og FE-begrunnelse (fase 2), til eksplisitte design- og konfunderingsoppgaver (fase 3).
4. **Kobling problemstilling → data → metode → tolkning** er det gjennomgående toppkriteriet i alle veiledninger.
5. **Programvare kreves praktisk:** Stata (til ~2021) → R (fra ~2022 og på skoleeksamen).

---

## 2. Temafrekvens-tabell

Opptelling bygget på de faktiske oppgavene og sensorveiledningene. Fase 2-årene (mappe) tester per definisjon problemstilling + OLS + FE/logit + kausalitetsdrøfting + artikkelkritikk og er regnet med én forekomst per tema. «H»=høst, «V»=vår, «u»=utsatt.

| Tema | Hvor det opptrer | Score* |
|---|---|---|
| **Lineær regresjon (OLS/LPM): tolkning av koeffisient, konstant, R²** | Alle fase 1-sett; Arbeid 1 alle fase 2-år; H24 (1.3–1.8), H24u, H25 (1.3–1.6) | **~30** ⭐⭐⭐ |
| **Multippel regresjon + kontrollvariabler / konfundering** | Alle faser; H24 (1.5–1.6), H24u, H25 (1.5) — «hva skjer med koeffisienten når vi kontrollerer for X?» | **~28** ⭐⭐⭐ |
| **Teknisk vs. substansiell tolkning av estimater** | Eksplisitt poenggitt i alle 6-timers veiledninger (H24, H24u, H25); implisitt i fase 1 | **⭐⭐⭐ (avgjør poeng)** |
| **Kausalinferens / korrelasjon ≠ kausalitet / kontrafaktisk tenkning** | Fase 2 (kausal graf), H24 tekstoppg. 2, H24u tekstoppg. 2, H25 «Frivillig deltakelse» | **~12** ⭐⭐⭐ |
| **Forskningsdesign: skissere et komplett opplegg (problemstilling→utvalg→data→analyse→tolkning)** | 2011V (eksperiment-skisse), Arbeid 1 alle fase 2-år, H24 «Presidentvalget», H24u «KI og arbeidsliv», H25 «Arbeidsledighet…» | **~15** ⭐⭐⭐ |
| **Logistisk regresjon: log-odds, odds, oddsratio, sannsynlighet** | Fase 2 (valgbar avansert teknikk), H25 (1.10–1.14) | **~8** ⭐⭐⭐ (stigende) |
| **Fasteffektmodell (FE): innen- vs. mellom-individ-variasjon, mange konstantledd** | Fase 2 (kjernekrav), H24 (1.10–1.14), H24u | **~10** ⭐⭐⭐ |
| **Kvasi-eksperimentelle design (naturlig eksp., DiD, RDD, IV)** | Fase 2 (artikkelkritikk), H24 tekstoppg., H24u (IV nevnt), H25 «Arbeidsledighet» (DiD-eksempel) | **~8** ⭐⭐ (stigende) |
| **Eksperiment: kontroll-/behandlingsgruppe, randomisering, intern/ekstern validitet** | 2011V, H24 tekstoppg., H25 «Frivillig arbeid og livsglede» | **~6** ⭐⭐ |
| **Ikke-linearitet: dummysett vs. kontinuerlig, annengradsledd, konkav/konveks sammenheng** | H24 (1.8–1.9), H24u (1.8–1.9), H25 (3.3) | **~6** ⭐⭐ |
| **Samspill/interaksjon mellom variabler** | H24, H25 (1.9, 1.13), fase 1-sett | **~7** ⭐⭐ |
| **Hypotesetest: H₀/H₁, forkaste/beholde nullhypotese, signifikansnivå** | Alle faser; H24/H24u/H25 (1.1, 1.7, 1.13) | **~20** ⭐⭐⭐ |
| **Deskriptiv statistikk: gjennomsnitt, SD, median, min/maks, skjevfordeling, missing** | Fase 1; H24/H24u/H25 (1.2) | **~15** ⭐⭐ |
| **Utvalg og populasjon: representativitet, stratifisert/tilfeldig utvalg, seleksjonsbias, frafall** | Fase 1 (sannsynlighetsutvalg), Arbeid 1, H24 «Populasjon og utvalg», H25 (innvandrere/frafall) | **~12** ⭐⭐ |
| **Operasjonalisering / begrepsvaliditet** | 2003H, fase 1 generelt, H24 tekstoppg. («operasjonalisering»), Arbeid 1 | **~9** ⭐⭐ |
| **Konfidensintervall, standardfeil, forventningsrett estimator** | Fase 1 (2005V, 2016V m.fl.), håndregning | **~8** ⭐⭐ (mer fase 1) |
| **Kritisk lesning av publisert forskning (artikkelkritikk)** | Arbeid 2 alle fase 2-år; H24/H24u/H25 tekstoppg. type B | **~9** ⭐⭐⭐ |
| **R-programmering praktisk (lm, glm, plm, tbl_summary, plot_model)** | Alle 6-timers sett (fase 3); Stata-ekvivalent i fase 2 | **⭐⭐⭐ (fase 3)** |
| **Datavisualisering / prediksjonsplott (samspill, kurvlinearitet)** | H24 (cplot), H25 (plot_model), håndregning-tolkning | **~4** ⭐⭐ (stigende) |

\* ⭐⭐⭐ = kjernetema, kommer nesten garantert og avgjør karakteren; ⭐⭐ = hyppig/stigende; ⭐ = perifert eller mest fase 1.

### Trendbrudd læreboka må ta hensyn til
- **Kausalinferens er faset kraftig inn.** Fase 1 handlet om klassisk inferensstatistikk (estimatorer, konfidensintervall); fra fase 2 og særlig fase 3 er *kausalitet, konfundering, seleksjon og kontrafaktisk tenkning* selve akslingen. Kvasi-eksperimentelle teknikker (DiD, RDD, IV) og eksperiment er nå eksplisitt pensum i tekstoppgavene.
- **R har erstattet Stata.** Alle fase 3-sett forutsetter at kandidaten kan skrive og tolke R-kode (`lm`, `glm(family=binomial)`, `plm`, `tbl_summary`, `plot_model`/`cplot`). Læreboka må lære R praktisk, ikke bare statistikkteori.
- **Logistisk og fasteffekt er ikke lenger «valgfritt avansert»** — de er obligatoriske deloppgaver på skoleeksamen (H24: FE; H25: logistisk).
- **Håndregning og klassisk inferens er nedtonet**, men lever videre i flervalgs- og håndregningsdelen (4–20 poeng) og bør beherskes.

---

## 3. Oppgavetype-katalog

### Type 1: Tolk en regresjonskoeffisient (teknisk + substansielt)
**Hva kreves:** For hver koeffisient forventer sensor **to tolkninger**: en **teknisk/mekanisk** («for hver enhets økning i X endres forventet Y med β, kontrollert for …») og en **substansiell** («det er en signifikant positiv sammenheng mellom X og Y, der de med mer X har mer Y»). Full uttelling krever at kandidaten (i) angir riktig tall (innenfor intervall), (ii) angir fortegn og signifikans, og (iii) i multiple modeller **presiserer at sammenhengen er kontrollert for de øvrige variablene**.

**Struktur på toppsvar:** tall → fortegn + signifikansnivå → teknisk setning → substansiell setning → (for LPM) presisér at Y er sannsynlighet; (for multippel) «kontrollert for …».

**Omskrevet eksempeloppgave:** *«Kjør en bivariat regresjon av trivsel på inntekt. Rapporter og gi både en teknisk og en substansiell tolkning av stigningstallet.»*

### Type 2: Tolk konstantleddet og R²
**Hva kreves:** Konstantleddet skal tolkes substansielt (forventet Y når alle X = 0). Sensor premierer at kandidaten ser når konstanten er **meningsfull** (bivariat dummy: gjennomsnitt for referansegruppen) versus **meningsløs** (multippel modell der «alder = 0» ikke finnes). R² tolkes som andel forklart varians.

### Type 3: «Hva skjer når vi kontrollerer for flere variabler?» (konfundering)
**Hva kreves:** Sammenlign bivariat og multippel modell: går koeffisienten opp/ned? Endres signifikansen? Konkluder at en del av sammenhengen var **konfundert** med kontrollvariablene, og at forklart varians endres. Dette er selve kjernen i regresjonsforståelsen sensor tester (H24 1.5 gir 0,5 poeng per moment, maks ved 4 momenter).

### Type 4: Lineær vs. ikke-lineær spesifikasjon
**Hva kreves:** (a) **Dummysett vs. kontinuerlig:** vurder om endringen i Y er konstant mellom kategoriene av X; hvis ikke, fanger et dummysett ikke-lineariteten bedre — men argumentér, og godta lineær spesifikasjon når forskjellene er små. (b) **Annengradsledd:** avgjør om sammenhengen er ikke-lineær ut fra om kvadratleddet er signifikant; beskriv formen (konkav/konveks, monoton/ikke-monoton, hvor den flater ut, usikkerhet i halene pga. få observasjoner).

**Omskrevet eksempeloppgave:** *«Legg til et annengradsledd for inntekt. Er sammenhengen mellom inntekt og utfallet lineær? Beskriv formen på sammenhengen.»*

### Type 5: Samspill/interaksjon
**Hva kreves:** Tolk samspillskoeffisienten: er den signifikant? Beskriv hvordan effekten av X1 på Y **avhenger av** X2 (to likeverdige tolkningsretninger godtas), gjerne støttet av et prediksjonsplott. Merk at konklusjonen kan **endres** mellom lineær og logistisk modell (H25 1.9 vs. 1.13) — et poeng sensor eksplisitt tester.

### Type 6: Logistisk regresjon
**Hva kreves:** Forklar hvorfor logistisk skiller seg fra lineær (logit-transformasjon, ikke-lineær sammenheng X→P(Y), begrenser sannsynligheten til [0,1], antar Bernoulli/binomial, håndterer heteroskedastisitet). Tolk **oddsratio** («oddsen øker med 11 % per enhet, kontrollert for øvrige variabler»). Regn om mellom **log-odds → odds → sannsynlighet** for gitte X-verdier (H25 1.11–1.12).

### Type 7: Fasteffektmodell (FE)
**Hva kreves:** Forklar at FE utnytter **innen-individ-variasjon over tid** og fjerner tidsuavhengig konfundering, at man derfor **ikke** kan inkludere tidskonstante variabler (kjønn), og at man estimerer «mange konstantledd» (ett per individ). Tolk at en sammenheng som fantes **mellom** individer forsvinner **innen** individer (H24 1.13). Vit hvilke variabler som egner seg for FE (de som endrer seg over tid).

### Type 8: Håndregning + flervalg (klassisk inferens)
**Hva kreves (3.1–3.3, 2.1–2.16):** Konfidensintervall, hypotesetest, forventningsrett estimator, avlesning av tabell, tolkning av kategoridifferanser som ikke-lineær sammenheng. Automatisk rettet — presisjon teller. Flervalgsbanken bør drilles fordi den utgjør 16 av 60 poeng.

### Type 9: Design to alternative opplegg og sammenlign (tekstoppgave, ~20 p)
**Hva kreves (H25 «Arbeidsledighet og politisk deltakelse»):** (1) presist forskningsspørsmål med avhengig + minst én uavhengig variabel; (2) et **regresjonsbasert design** (velg OLS/LPM/logit/FE ut fra utfallets måltype, drøft datatype og kontrollvariabler); (3) et **kvasi-eksperimentelt design** som utnytter naturlig variasjon i eksisterende data (ikke et forskerinnsamlet randomisert eksperiment) — f.eks. DiD som følger arbeidsledige over tid mot sammenlignbare ikke-arbeidsledige; (4) en **kritisk sammenligning**: regresjon er enkelt og deskriptivt, men sårbart for konfundering/seleksjon; kvasi-eksperiment nærmer seg kausalitet, men hviler på antakelser (f.eks. parallelle trender i DiD) som kan brytes.

### Type 10: Kritisér en gitt studie (tekstoppgave, ~20 p)
**Hva kreves (H24 «Kvinnelige ledere», H24u «Utdanning og dødsrisiko», H25 «Innvandrere og frivillig arbeid»):** (1) **kritisk refleksjon** om at studien viser korrelasjon, ikke kausalitet, pga. uobservert konfundering / manglende kausalt design / mulig omvendt kausalitet / seleksjonsbias; (2) **konkrete eksempler** på konfundere (sektor, familiebakgrunn) eller seleksjonsmekanismer (frafall blant undergrupper); (3) forslag til et **bedre design** (longitudinelle data + FE/DiD, IV via lov-/regelendring, evt. randomisert eksperiment) med drøfting av begrensninger. For frafallsvarianten (H25): tiltak både i **datainnsamling** (oversampling, oversettelse, registerdata) og i **analyse** (kontrollvariabler, vekting).

### Type 11: (fase 2, mulig comeback) Selvstendig empirisk arbeid + artikkelkritikk
**Hva kreves:** Arbeid 1 = helhetlig OLS+FE/logit-analyse med kausal graf, koding, tolkning og forbehold. Arbeid 2 = presentere + metodisk kritisere en publisert artikkel (styrker/svakheter, forutsetninger, om parallelle trender/seleksjon er dokumentert). Kravlisten er identisk med design- og kritikkoppgavene på skoleeksamen — derfor fortsatt relevant modell.

---

## 4. Sensorens krav — hva som skiller karakternivåene

Sensorveiledningene er konsistente på tvers av formatene. Destillert (poengbasert i fase 3, skjønnsbasert i fase 2):

### A/B-besvarelsen (50–60 / 40–49 poeng)
- Gir **både teknisk og substansiell** tolkning av alle relevante estimater, med korrekt fortegn, signifikans og «kontrollert for …».
- Viser **tydelig kobling problemstilling → data → metode → tolkning** og velger metode som faktisk passer utfallets måltype (logit/LPM ved dikotom Y).
- **Begrunner** metodevalg og reflekterer kritisk over kausalitet, konfundering, seleksjon og validitet (intern/ekstern).
- Ved design-/kritikkoppgaver: foreslår et **egnet, gjennomførbart** design og drøfter dets **begrensninger** (parallelle trender ved DiD, sammenlignbare grupper, etikk ved randomisering).
- Viser **selvstendighet og refleksjon** — ikke bare korrekt prosedyre.
- I R-delen: riktige tall (innenfor intervall) + korrekt kode som lar sensor gi delvis uttelling ved følgefeil.

### C-besvarelsen (30–39 poeng)
- Får de fleste tallsvarene riktige, men tolkningene er **tekniske uten substans** eller mangler «kontrollert for …».
- Design-/kritikkoppgaver er **beskrivende**: nevner konfundering/kausalitet, men drøfter det ikke; foreslår et design uten å vurdere svakhetene.
- Behersker OLS, men er svakere på det avanserte paret (logit/FE) og på kausal drøfting.

### D/E-besvarelsen (10–29 poeng)
- Uklar/uforskbar problemstilling; svak eller manglende kobling metode–spørsmål.
- Feiltolker koeffisienter (fortegn, LPM-sannsynlighet, oddsratio) eller konstantledd.
- Design-/kritikkoppgaver mangler kausal forståelse; forveksler korrelasjon og kausalitet.
- Betydelige hull i R-delen; få riktige tallsvar.

### F-nivå (0–9 poeng)
- Grunnleggende feilforståelse av regresjon; ingen skille mellom korrelasjon og kausalitet; ute av stand til å kjøre/tolke basismodeller.

### Vekting av enkeltfaktorer (viktig for kalibrering)
- **Poengstyrt på skoleeksamen:** R (20 p) + flervalg (16 p) + håndregning (4 p) + tekstoppgave (20 p) = 60. Én tekstoppgave *velges*; å svare på begge gir ikke ekstrapoeng.
- **Delvis uttelling er regelen:** feil tallsvar som skyldes små følgefeil i koden gir likevel poeng hvis R-skriptet er limt inn (oppgave 1.15). Læreboka bør lære kandidatene å **alltid** dokumentere koden.
- **Tolkning > utregning:** halvparten av poengene på hver output-oppgave ligger i *tolkningen*, ikke i tallet.
- **Substansiell forståelse kan veie opp for svakere matematikk** (eksplisitt i fase 2-veiledningene for Arbeid 2).
- **Kausal ydmykhet premieres:** å påpeke at egne/andres resultater *ikke* er kausale, og hvorfor, trekker klart opp. Å overselge korrelasjon som kausalitet er en topp strykfeil.
- **Skjønn over sjekkliste:** sensor bes utvise betydelig skjønn; dybde og bredde er likeverdige veier til toppkarakter.

---

## 5. Typiske feil (fra veiledningene og oppgavenes fokus)

1. **Korrelasjon tolket som kausalitet** — den mest fremhevede feilen i fase 2 og 3. Å hevde at X «fører til» Y ut fra en regresjon uten kausalt design; å ignorere uobservert konfundering, seleksjon og omvendt kausalitet.
2. **Kun teknisk tolkning** (eller kun substansiell) der begge kreves — koster halve poengsummen på output-oppgavene.
3. **Glemme «kontrollert for …»** i multiple modeller — sensor krever eksplisitt at tolkningen anerkjenner at sammenhengen er justert for øvrige variabler.
4. **Feiltolke konstantleddet** som noe substansielt i multiple modeller der X = 0 er umulig (alder 0).
5. **Feiltolke LPM/logistisk:** blande sannsynlighet, odds, log-odds og oddsratio; glemme at LPM-koeffisienten er en sannsynlighetsendring; tolke oddsratio som sannsynlighet.
6. **Signifikans vs. substans:** behandle et signifikant, men substansielt bittelite estimat som viktig — eller avfeie et estimat vist som «0.0000» i R (pga. skalering av inntekt i kroner) som null, når fortegn og signifikansnivå viser reell sammenheng.
7. **Feil metode for utfallets måltype:** kjøre OLS på en dikotom avhengig variabel uten å reflektere, eller velge logit/FE uten begrunnelse.
8. **Inkludere tidskonstante variabler i FE** (kjønn), eller ikke forstå at FE fjerner mellom-individ-variasjon.
9. **Overse ikke-linearitet:** anta lineær sammenheng uten å teste dummysett/annengradsledd; ikke beskrive formen (konkav/ikke-monoton/hvor den flater ut).
10. **Design uten begrunnelse:** foreslå en metode uten å knytte den til problemstillingen, datatypen og utfallets måltype; ikke drøfte designets svakheter (parallelle trender, sammenlignbare grupper).
11. **Kvasi-eksperiment forvekslet med eksperiment:** beskrive et forskerinnsamlet randomisert forsøk når oppgaven ber om naturlig variasjon i eksisterende data.
12. **Uklar/uforskbar problemstilling** uten tydelig avhengig og uavhengig variabel — hyppigst nevnte D/E-kjennetegn.
13. **Tautologiske/mekaniske sammenhenger** (variabler som måler nesten det samme, f.eks. stillingsbrøk → arbeidstid) — trekker ned i fase 2 med mindre godt begrunnet.
14. **Manglende kodedokumentasjon:** ikke lime inn R-skriptet, slik at følgefeil ikke kan gis delvis uttelling.
15. **Ren gjenfortelling av en studie** i kritikkoppgaven uten metodisk vurdering av forutsetninger og begrensninger.
16. **Feil i klassisk inferens:** feil konfidensintervall, forveksle forventningsrett/effektiv estimator, feil retning på hypotesetest (forkaste vs. beholde H₀).

---

## 6. Pensumforankring — metoder, begreper og verktøy sensor forventer

SOS4020 er et rent metodefag; «pensum» er statistiske metoder, kausal metodelære og R-håndverk snarere enn navngitte teoretikere. Sensorveiledningene forventer at kandidaten bruker fagbegrepene presist.

| Tema | Forventet begrepsapparat | Verktøy/kommando (R) |
|---|---|---|
| Deskriptiv statistikk | Gjennomsnitt, standardavvik, median, min/maks, skjevfordeling, missing (NA) | `tbl_summary()`, `hist()`, `summary()` |
| Klassisk inferens | Forventningsrett/effektiv estimator, standardfeil, konfidensintervall, H₀/H₁, signifikansnivå, forkaste/beholde nullhypotese, t-/F-test | (fase 1 for hånd) |
| Lineær regresjon (OLS) | Stigningstall/koeffisient, konstantledd, R², dummyvariabel, referansekategori, teknisk vs. substansiell tolkning | `lm()`, `summary()` |
| Lineær sannsynlighetsmodell (LPM) | Koeffisient som sannsynlighetsendring, begrensninger ved dikotom Y | `lm()` på 0/1-utfall |
| Multippel regresjon | Kontrollvariabler, konfundering, forklart varians, «kontrollert for» | `lm(Y ~ X1 + X2 + …)` |
| Ikke-linearitet | Dummysett vs. kontinuerlig, annengradsledd, konkav/konveks, monoton/ikke-monoton | `I(X^2)`, `cplot()`, `plot_model(type="pred")` |
| Samspill/interaksjon | Interaksjonsledd, betinget effekt, prediksjonsplott | `X1*X2`, `plot_model(type="pred", terms=…)` |
| Logistisk regresjon | Logit-transformasjon, log-odds, odds, oddsratio, sannsynlighet, Bernoulli/binomial, heteroskedastisitet | `glm(…, family=binomial)`, `tidy(exponentiate=TRUE)` |
| Fasteffektmodell | Innen- vs. mellom-individ-variasjon, tidskonstant konfundering, «mange konstantledd», balansert panel, pooled vs. within, between-effects | `plm(…, model="within")`, `make.pbalanced()` |
| Kausalinferens | Kontrafaktisk tilnærming, konfundering, seleksjonsbias, omvendt kausalitet, kausal graf/DAG, intern/ekstern validitet | — |
| Eksperiment | Kontroll-/behandlingsgruppe, randomisering, replikasjon, selektivt frafall, etiske begrensninger | — |
| Kvasi-eksperiment | Naturlig eksperiment, difference-in-differences (parallelle trender), regresjonsdiskontinuitet (RDD), instrumentvariabler (IV) | — |
| Design & utvalg | Problemstilling, avhengig/uavhengig variabel, operasjonalisering, målpopulasjon, tilfeldig/stratifisert utvalg, representativitet, frafall, oversampling | — |
| Data | Tverrsnitt vs. paneldata, register- vs. surveydata, NorLAG (norsk panel), PSID/NLSY/AddHealth (fase 2) | — |

**Merk om verktøyskifte:** fase 2-arbeidene fra ~2022 og alle fase 3-sett bruker **R/RStudio** (tidligere **Stata** med do-/log-fil). Læreboka bør lære R som primærverktøy, med `tidyverse`-syntaks (`%>%`, `select`, `filter`), `gtsummary::tbl_summary`, `broom::tidy`, `sjPlot::plot_model` og `plm`.

---

## 7. Prognose og prioritering

Basert på temafrekvens, trendbrudd og de tre nyeste settene (H2024, utsatt H2024, H2025):

### Må beherskes perfekt (kommer så godt som sikkert, avgjør karakteren)
1. **Tolke regresjonsoutput teknisk OG substansielt** — koeffisient, konstant, R², signifikans — med «kontrollert for …» i multiple modeller. Dette gir mest poeng, i hvert eneste sett.
2. **Konfundering:** forklare hva som skjer med koeffisienten når man legger til kontrollvariabler, og hvorfor.
3. **Kausalitet vs. korrelasjon + kontrafaktisk tenkning** — premisset for hele tekstoppgavedelen (20 p) og en gjennomgående strykfeil ellers.
4. **Logistisk regresjon:** oddsratio-tolkning + omregning log-odds→odds→sannsynlighet (H25-formatet).
5. **Fasteffektmodell:** innen- vs. mellom-individ-variasjon, tidskonstante variabler, «mange konstantledd» (H24-formatet).
6. **Designe og sammenligne to opplegg** (regresjonsbasert + kvasi-eksperimentelt) OG **kritisere en gitt studie** for manglende kausalitet + foreslå bedre design — de to tekstoppgavetypene, 20 poeng.
7. **R praktisk:** `lm`, `glm(family=binomial)`, `plm`, `tbl_summary`, `I(X^2)`, samspill, prediksjonsplott — og alltid lime inn skriptet for delvis uttelling.

### Må kunne (høy sannsynlighet, gir differensiering)
8. **Ikke-linearitet:** dummysett vs. kontinuerlig, annengradsledd, beskrive formen (konkav/ikke-monoton).
9. **Samspill/interaksjon** og hvordan konklusjonen kan skifte mellom lineær og logistisk modell.
10. **Hypotesetest** korrekt (H₀/H₁, forkaste/beholde, signifikansnivå).
11. **Kvasi-eksperimentelle teknikker i detalj:** DiD (parallelle trender), RDD, IV, naturlig eksperiment — hva de forutsetter og når de svikter.
12. **Eksperimentelt design:** randomisering, kontroll/behandling, intern vs. ekstern validitet, etiske og praktiske begrensninger.
13. **Utvalg, seleksjon og frafall:** representativitet, oversampling, register- vs. surveydata, tiltak mot frafallsskjevhet i både innsamling og analyse.
14. **Deskriptiv statistikk og operasjonalisering** som forarbeid til enhver analyse.

### Bør kjenne til (lavfrekvent, mest fase 1, eller nyttig dybde)
15. **Klassisk inferens for hånd:** konfidensintervall, forventningsrett/effektiv estimator, standardfeil — nedtonet, men lever i håndregnings-/flervalgsdelen.
16. **Between-effects (BE)** og pooled vs. within som nyanser i panelanalyse.
17. **Kausal graf/DAG** som formidlingsverktøy for konfundering (fra fase 2-veiledningene).
18. **Fase 2-mappesjangeren** (selvstendig OLS+FE/logit-arbeid + artikkelkritikk) — i tilfelle vurderingsformen svinger tilbake, og fordi seminarene bygger på den. Kravene er uansett identiske med skoleeksamens design- og kritikkoppgaver.
19. **Begrepsvaliditet og måling** (fase 1-tema, fortsatt relevant i operasjonaliseringsdelen).

### Anbefalt bokdesign som følge av analysen
- **R-drevet metodebok**, ikke bare statistikkteori: hvert kapittel par «teori → R-kommando → tolkning (teknisk + substansiell)», med ferdige output-tabeller kandidaten trener på å tolke.
- **Egen kausalitetsdel** som rød tråd: konfundering, seleksjon, kontrafaktisk tenkning, DiD/RDD/IV/eksperiment — hver med et «design en studie» og et «kritisér denne studien»-eksempel i A-, C- og E-versjon med sensorkommentar bygget på del 4.
- **Modellbesvarelser i tre sjangere:** (1) full R-analyse med OLS→multippel→ikke-linearitet→samspill→logistisk→FE, (2) design-og-sammenlign to opplegg, (3) kritikk av publisert studie.
- **Flervalgs- og håndregningsbank** (16 + 4 poeng) som drill på presisjon: koeffisient-, odds-, konfidensintervall- og hypotesetesttolkning.
- **«Feilvaksine»-seksjon** som driller de 16 feilene i del 5, med før/etter-omskrivinger (korrelasjonsspråk → kausal ydmykhet; kun-teknisk → teknisk+substansiell; «konstanten betyr …» → når konstanten er meningsløs).

### Overlapp med allerede bygde emner
- **svmet1010 (Kvalitative metoder):** SOS4020s naturlige tvilling — samme institutt, samme «design en studie»- og etikk-/validitetslogikk, men motsatt datatype. Der svmet1010 lærer overførbarhet, feltarbeid og intervju, lærer SOS4020 statistisk generalisering, regresjon og kausalinferens. Feilen «kvantitativ logikk i kvalitativ kontekst» i svmet1010 er speilbildet av «korrelasjon = kausalitet» her. En student som tar begge, bør se de to bøkene som komplementære halvdeler av samfunnsvitenskapelig metode.
- **sos1120 (Innføring i sosiologisk metode / grunnleggende metode og statistikk):** det direkte forkunnskapsnivået. SOS4020 forutsetter at deskriptiv statistikk, utvalg, hypotesetest, konfidensintervall og enkel regresjon fra sos1120-nivået sitter; masteremnet bygger videre til multippel/logistisk/fasteffekt og kausale design. Læreboka bør repetere sos1120-grunnlaget kort (del «Bør kjenne til») og deretter bygge på det.
- **sos1004 (Sosiologiens klassikere / grunnbok):** leverer den sosiologiske substansen (teori, begreper) som problemstillingene i SOS4020s tekstoppgaver ofte forankres i — nyttig for å formulere «samfunnsvitenskapelig relevante» forskningsspørsmål, men metodisk uavhengig.
- **sos2200 (Organisasjon, ledelse og arbeid):** substansfag uten metodeoverlapp, men flere av SOS4020s eksempeldata (arbeidsliv, ledere, lønn, sykefravær, homososial reproduksjon) er hentet fra dette feltet — bra kilde til realistiske case i modellbesvarelsene.
- **sosant1000 / sosant1090 (sosialantropologi):** liten faglig overlapp; antropologiens metodetradisjon er kvalitativ/etnografisk og ligger nærmere svmet1010 enn SOS4020. Nevnes bare for fullstendighet.
- **Institusjonell overlapp:** 5 sp med **SOSGEO4022 – Advanced regression analysis**; studenter kan ikke få full uttelling for begge. Læreboka bør posisjonere SOS4020 som *bred kvantitativ metode med kausalt design*, ikke som ren avansert regresjon.

---

## 8. Kildeliste

Alle kilder er lest og **omskrevet — ingen ordrette gjengivelser** av oppgaveformuleringer eller veiledningstekst er tatt inn i denne analysen eller skal tas inn i læreboka. Arkiv: `/Users/danielandreasaubert/Desktop/Eksamner/UiO/SOS4020/`.

### Sensorveiledninger (kjernen i analysen)
| Fil | Innhold |
|---|---|
| `sensorveiledning-sos4020-h25.pdf` | H2025 (6 t): R-oppgaver 1.1–1.15 (OLS, logistisk, samspill), flervalg, håndregning, valgbar tekstoppgave (design to opplegg / kritikk av studie); poengbasert A–F |
| `sensorveiledning-sos4020-hosten-2024_final.pdf` | H2024 (6 t): R-oppgaver med FE (1.10–1.14), dummysett vs. annengradsledd, tekstoppgaver «Presidentvalget» + «Kvinnelige ledere» |
| `sensorveiledning-sos4020-hosten-2024_final_utsatt.pdf` | Utsatt H2024: parallell struktur, tekstoppgaver «KI og arbeidslivet» + «Utdanning og dødsrisiko» (IV nevnt) |
| `sensorveiledningsos4020_23h_endelig_rev221123.pdf` | H2023 (mappe): Arbeid I (OLS/LPM + FE/logit på NorLAG, R-kode) + Arbeid 2 (artikkelkritikk); tre analysestrategier |
| `sensorveiledningsos4020_22h.pdf` | H2022 (mappe): overgang Stata→R; OLS/LPM + FE; kausal graf/DAG; kritikk av DiD-forutsetninger |
| `sensorveiledningsos4020_21h.pdf` | H2021 (mappe): Stata (do-/log-fil); OLS + logit/FE på PSID+NorLAG; Arbeid 2 |
| `sos4020-2020v-sensorveiledning.pdf` | 2020 (mappe): tre paneldatasett, OLS + logit/FE, BE-estimater |
| `sos4020-2019v-sensorveiledning.pdf` / `sos4020-2018v-sensorveiledning.pdf` | 2019/2018 (mappe): amerikanske paneldata (PSID/NLSY/AddHealth), OLS + logit/FE, Stata |
| `sos4020-2020h-sensorveiledning.pdf` | H2020 (mappe) — konsultert |
| `sos4020-2017v-sensorveiledning.pdf` | 2017 — konsultert |

### Eksamensoppgaver
| Fil | År/semester | Merknad |
|---|---|---|
| `sos4020_eksamensoppgave.pdf` / `sos4020-h25-nyeste.pdf` | **H2025** | 6-timers Inspera-sett (R + flervalg + håndregning + tekstoppgave) |
| `sos4020_utsatt_eksamen-h24.pdf` | Utsatt H2024 | Parallell 6-timers struktur |
| `sos4020-2016v.pdf` / `sos4020-2016v-utsatt.pdf` / `sos4020-2017v.pdf` / `sos4020-2017v-utsatt.pdf` | 2016–2017 | Fase 1/overgang: 4-timers skoleeksamen, tabelltolkning + konfidensintervall |
| `sos4020-2016v-emneoppgave.pdf` | V2016 emneoppgave | Overgangsform: replikasjon (Budig & England 2001) / selvvalgt replikasjon |
| `sos4020-2003h.pdf` … `sos4020-2015v.pdf` | H2003–V2015 | Fase 1: 4-timers skoleeksamen, datavignett + 8–13 deloppgaver, tabelltolkning, håndregning, av og til design-skisse (2011V eksperiment) |
| `sos4020-2004v/h`, `-2005v/h`, `-2006v/h(-utsatt)`, `-2007h(-utsatt)`, `-2009v`, `-2010v`, `-2011v`, `-2012v`, `-2013v`, `-2014v` | diverse | Skumlest for temaregistrering; bekrefter 4-timers konstant + regresjonstabell-arkitektur |

**Hull i arkivet:** ordinære 6-timers oppgavesett finnes bare fra H2024 (flervalgsdelen hemmeligholdes for gjenbruk og er ikke i filene). Fase 2-årene (mappe, ~2018–2023) har «oppgavetekst» kun i form av retningslinjer/veiledninger, ikke tradisjonelle oppgavesett. Sensorveiledninger eldre enn 2018 finnes i begrenset grad i arkivet; fase 1-analysen bygger derfor mest på selve oppgavesettene.
