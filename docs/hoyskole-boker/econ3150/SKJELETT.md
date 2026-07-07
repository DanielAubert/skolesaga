# Bokskjelett: ECON3150 Introductory Econometrics — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (24 ordinære sett H2003–V2025, 21 utsatt-sett og 28
> sensorveiledninger; alle veiledninger lest grundig, siste ~12 år grundig,
> eldre skummet). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
> **Emnet er dobbeltkodet:** ECON3150 (bachelor) og ECON4150 (master) har felles
> oppgavesett og sensorveiledning — alt nedenfor gjelder begge.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ3150` |
| Tittel | **ECON3150 Introductory Econometrics** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt metodefag med fast oppgavemal) |
| Antall kapitler | **32** (1 eksamenskart + 27 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 165 min ≈ 36 timer** |
| Quiz totalt | **565** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** ECON3150-eksamen har hatt samme skjelett siden 2022: én
stor OLS-tolkningsblokk bygd på én R-utskrift med 4–7 `feols`-regresjoner over ett
anvendt datasett (lønn, utdanning, helse, boligpriser) utgjør 60–80 % av settet,
etterfulgt av én mindre kausalitetsoppgave (IV/Wald, DiD eller fuzzy RDD) på
20–40 %. Alle deloppgaver teller likt, det er åpen bok, og sensor ber om **korte,
begrunnede svar med alle mellomsteg**. Denne boka er kalibrert mot nettopp det:
den driller koeffisienttolkning i alle funksjonsformer med det ufravikelige
«assosiert med … alt annet likt», gjør utelatt variabel-skjevhet regnet *baklengs*
til en egen drillsjanger, behandler instrumentvariabler alltid som redusert form /
første steg, og trener de fire nye sjangrene som er kommet siden 2022 (skrive
`feols`-kode, lese minimal spesifikasjon ut av en figur, fuzzy RDD som 2SLS, og
bakregne standardfeil/utvalgsstørrelse fra en p-verdi). Den dropper det utgåtte
regime A-stoffet (Durbin–Watson, GLS, ren tidsserie: **0 forekomster på 12 år**),
og lærer studenten å skrive slik veiledningenes «ANSWER HINT»-format faktisk gir
uttelling: kompakt regnekjede, avsluttet med én presis tolkningssetning.

**Kritisk organiserende akse (gjelder HELE boka):** kausal inferens er ryggraden.
Hvert tolkningskapittel svarer på spørsmålet «*når* kan en regresjonskoeffisient
tolkes kausalt, og hva gjør vi når den ikke kan det». Standardformuleringen er
alltid **«en enhets økning i $x$ er assosiert med … enheters endring i $y$, alt
annet likt / keeping the other regressors fixed»** — ALDRI «forårsaker/causes» med
mindre design (randomisering, gyldig instrument, RDD) gir dekning for det.

**Kritisk notasjonsregel (gjelder HELE boka):**
- **Modell og estimator:** $y = \beta_0 + \beta_1 x_1 + \dots + \beta_k x_k + u$;
  enkel OLS for hånd $\hat{\beta}_1 = \frac{\operatorname{cov}(x,y)}{\operatorname{var}(x)}$,
  $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$. Estimater med hatt
  ($\hat{\beta}$), sanne parametre uten.
- **Utskrift:** avlese estimat, standardfeil (i parentes under estimatet), $N$,
  $R^2$, RMSE/SSR og vcov-matrise fra `feols()`/`etable`-utskrift (regime C) —
  omtal også `regress …, robust`-form (regime B) som «samme informasjon, annet
  program». R-syntaks er `fixest`/base-R: `feols(y ~ x1 + x2, data=d)`,
  interaksjon `*`/`:`, transformasjon `I(...)`, robuste SE `vcov="hetero"`.
- **Inferens:** $t = \frac{\hat{\beta} - c}{\operatorname{SE}}$;
  $\text{KI} = \hat{\beta} \pm z_{\alpha/2}\cdot\operatorname{SE}$ med $z$ fra
  **vedlagt normaltabell $\Phi$ og invers-normal $\Phi^{-1}$** (ikke $t$ — store $n$);
  faste $z$: 90 %→1,64/1,65, 95 %→1,96, 99 %→2,58, 68 %→1, 80 %→1,28, 86 %→1,48.
  $F$-testen mot **vedlagt $F_{m,\infty}$-tabell**.
- **OVB-formelen:**
  $\tilde{\beta}_1 = \hat{\beta}_1 + \hat{\beta}_2\cdot\frac{\operatorname{cov}(x_1,x_2)}{\operatorname{var}(x_1)}$
  — løses også for $\operatorname{cov}$/$\operatorname{cor}$ (baklengs).
- **IV:** $\hat{\beta}_{IV} = \text{RF}/\text{FS} = S_{ZY}/S_{ZX}$; binært instrument
  $\Rightarrow \frac{\bar{E}(y\mid z=1)-\bar{E}(y\mid z=0)}{\bar{E}(x\mid z=1)-\bar{E}(x\mid z=0)}$.
- **Engelsk fagterminologi:** eksamen er på engelsk. Hvert nytt fagbegrep oppgis
  med **engelsk term i parentes ved første forekomst** («utelatt variabel-skjevhet
  (omitted variable bias, OVB)»), og `definition`-blokkene skrives **tospråklig**:
  norsk forklaring + engelsk term som stikkord, slik at studenten kjenner igjen
  begrepet på selve eksamen.
- **ALDRI** Durbin–Watson, GLS/WLS-utledning, ren tidsserie/dynamiske modeller,
  method of moments eller momentgenererende funksjoner — 0 forekomster 2014–2025,
  utgått pensum. Omtales kun i Del 0 som «utenfor eksamenskjernen». Heteroskedastisitet
  (begrep) og delta-metoden lever videre i moderne, anvendt form og er med.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
Boka speiler eksamensmalen: OLS-tolkning + inferens (den store blokken) først,
kausalitet/OVB + IV (kausalitetsoppgaven) som klimaks, øvrige design til slutt.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | OLS-modellen og koeffisienttolkning | 5 | **OLS-tolkning 100 %**, funksjonsform 92 %, konstantledd 67 % — kjernen i den store blokken (60–80 %) → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 2 | Statistisk inferens i regresjon | 5 | t-test 92 %, KI 83 %, F-test 83 %, SE 83 % — inferensdelen av den store blokken, hvert sett → nivå 1 → 4 teorikapitler + drillkapittel. |
| 3 | Funksjonsform, enhetsendring og R-kode | 3 | Enhetsendring 50 % (alle fire 22–25), kvadratledd/delta-SE 25 %/17 % (toppnivå-differensiator), skrive R-kode/minimal spesifikasjon 33 % (signatur siden 2022) → nivå 2 → 3 kapitler (siste med eget drillfokus). |
| 4 | Kausalitet og utelatt variabel-skjevhet | 4 | **Kausal tolkning 92 %, OVB 92 %** — ryggraden i hver oppgave 1; OVB-regnet-baklengs får eget drillkapittel (signaturøvelse) → nivå 1 → 2 teori + 1 drill + 1 konseptkapittel. |
| 5 | Instrumentvariabler, 2SLS og RDD | 5 | **IV/2SLS/Wald 100 %** (mest stabile enkeltteknikk), RDD 17 % (ny, voksende) → nivå 1 for IV → 3 teorikapitler + RDD-kapittel + drillkapittel. |
| 6 | Andre design og binære utfall | 5 | DiD 33 % (voksende, kunne), LPM 75 % (kunne), paneldata 58 % (kjenne, borte etter 2021), probit/logit 58 % (kjenne, utsatt-sett), presisjon↔n 8 % (ny, kjenne) → underordnet kausalitetstemaene. |
| 7 | Eksamenstrening | 4 | Metodesignal-drill + 3 komplette øvingseksamener som speiler malutviklingen 2022→2025. |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | OLS-modellen og koeffisienttolkning |
| 2 | Statistisk inferens i regresjon |
| 3 | Funksjonsform, enhetsendring og R-kode |
| 4 | Kausalitet og utelatt variabel-skjevhet |
| 5 | Instrumentvariabler, 2SLS og RDD |
| 6 | Andre design og binære utfall |
| 7 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger sjangerkapitler i siste del. Her ligger fire av fem drillkapitler
   (1.5, 2.5, 4.3, 5.5) inne i temadelene sine, fordi sjangrene de driller
   (OLS-blokken, inferensblokken, OVB-baklengs, kausalitetsoppgaven) er 92–100 %-
   gjengangere som må sitte umiddelbart etter teorien — Del 7 beholder metodesignal-
   drillen og øvingseksamenene (samme grep som econ1310/econ2130).
2. **OVB-regnet-baklengs får et eget drillkapittel (4.3)** utover teorikapitlet
   (4.2), fordi sensorveiledningene fremhever «regner OVB begge veier» som selve
   A/B-markøren og øvelsen har egen algoritmisk oppskrift (løse OVB-formelen for
   en ukjent kovarians/korrelasjon).
3. **Utgått regime A-stoff struktureres bort:** Durbin–Watson, GLS/WLS, ren
   tidsserie, method of moments, BLUE-/forventningsrett-bevis som hovedoppgave —
   0 forekomster 2014–2025. Nevnes kun i Del 0 som historisk kontekst, aldri som
   teorikapittel. Regime B-temaer med levedyktig frekvens (DiD, LPM, interaksjoner,
   paneldata) beholdes som «kunne»-stoff i Del 3/6; probit/logit og RDD som
   «kjenne»-stoff plassert ETTER kjernestoffet og merket «bør kjenne til».
4. **De fire nye sjangrene siden 2022** (skrive `feols`-kode, minimal spesifikasjon
   fra figur, fuzzy RDD som 2SLS, bakregne SE/n fra p-verdi) har alle egen
   treningsdekning: 3.3 (kode/figur), 5.4 (RDD), 6.5 (presisjon↔n).
5. **3 øvingseksamener med mal-spredning:** én per dokumentert regime-C-mal (2022–23
   80/20, V2024 60/40, V2025 fireoppgave-varianten) — DNA-ens krav om «typiske»
   eksamener oppfylles ved å speile malutviklingen analysen dokumenterer.

**Kryssbok-lenker (forkunnskaper):** ECON2130 Statistikk 1 er den naturlige
forkunnskapen — sannsynlighet, estimatorer, SE, KI, hypotesetest og R kommer
derfra. Bruk `[tittel](/bok/econ2130/<chapterId>)` til disse kapitlene når
forkunnskapen ikke dekkes i denne boka selv:
`econ2130-1-2` (betinget sannsynlighet/Bayes), `econ2130-2-2` (regnereglene
E/Var — grunnlaget for OVB- og delta-metode-algebraen), `econ2130-2-5`
(normalfordeling/standardisering — z-tabellen), `econ2130-2-6` (CLT — hvorfor
store $n$ gir $z$ ikke $t$), `econ2130-3-1` (R-verktøykassen),
`econ2130-4-1`/`econ2130-4-2` (estimator, forventningsretthet, plug-in-SE),
`econ2130-4-3` (KI, z-vs-t og den presise tolkningen), `econ2130-5-1` (testoppskriften),
`econ2130-5-3` (to-utvalgsapparatet — motoren i Wald/RCT), `econ2130-6-3`
(kausalitet: kontrafaktisk logikk, konfundering, RCT), `econ2130-6-4`
(korrelasjon vs. regresjon lett). Økonomiske kontekster (BNP, inntekt) kan lenke
til `econ1310-1-1` (finnes/live). **VIKTIG: `econ1310` og `JUS1111` er de eneste
live bøkene i dag; `econ2130` er på skjelett-stadiet.** Lenk kun til kapitler som
FINNES på byggetidspunktet — verifiser i `_registry.json`/prod-server før lenking.
Er econ2130 ikke bygget når denne boka bygges, beskrives forkunnskapen i klartekst
i Forkunnskaper-blokken UTEN død lenke (jf. Leserkravene i README). Lenk aldri til
kapitler du ikke har verifisert.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–Q) refererer til
oppgavetype-katalogen som gjengis i Del 0 (fra analysen §3):
A «tolk denne koeffisienten» · B konstantleddets tolkning · C konfidensintervall ·
D t-test/hypotesetest · E F-test for felles nullhypotese · F OVB regnet baklengs ·
G kausal tolkning + antakelser · H IV/Wald-estimator · I 2SLS-oppsett og LATE ·
J regresjons-diskontinuitet (RDD) · K difference-in-differences (DiD) ·
L LPM og predikerte sannsynligheter · M endring av måleenhet · N ikke-lineære
spesifikasjoner (kvadratledd/marginaleffekt) · O skrive R-kode / minimal
spesifikasjon fra figur · P paneldata/fixed effects · Q sant/usant og
«diskuter påstanden».
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON3150

- **id:** `econ3150-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste to-oppgave-malen, temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 24 ordinære sett. Skal gjengi: (i) formen (3-timers digital skoleeksamen i Inspera, **åpen bok** — alle trykte/skriftlige ressurser + kalkulator tillatt; A–F; kun vår siden 2010; **eksamen på engelsk**); vedlegg: standardnormaltabell $\Phi(z)$, fra V2024 også invers-normal $\Phi^{-1}(q)$ og $F_{m,\infty}$-tabell; (ii) de **tre regimene** og hvorfor boka bygger på regime C: klassisk tidsserie (2003–2013, utgått), anvendt Stata (2014–2021, delvis levedyktig), R/`feols` (2022–2025, gjeldende); (iii) den faste malen siden 2022: **én stor OLS-tolkningsblokk (60–80 %)** bygd på én R-utskrift med 4–7 `feols`-regresjoner + **én mindre kausalitetsoppgave (20–40 %)** (IV/Wald, DiD eller RDD); alle deloppgaver teller likt; (iv) temafrekvens-tabellen (score 2014–2025): OLS-tolkning 100 %, IV/2SLS/Wald 100 %, kausal tolkning 92 %, funksjonsform 92 %, OVB 92 %, t-test 92 %, interaksjoner 92 %, KI 83 %, F-test 83 %, SE 83 %, LPM 75 %, konstantledd 67 %, paneldata 58 % (borte etter 2021), probit/logit 58 % (borte fra ordinære, i utsatt), R² 58 %, enhetsendring 50 % (alle fire 22–25), sant/usant 42 %, DiD 33 % (voksende), skrive R-kode 33 % (signatur 22–25), kvadratledd 25 %, RDD 17 % (ny), delta-SE 17 %, presisjon↔n 8 % (ny V2025); (v) at Durbin–Watson/GLS/ren tidsserie/method of moments (regime A) har **0 forekomster på 12 år** og bevisst er utelatt; (vi) sensorens fem metaregler (be brief and to the point, always motivate; vis alle mellomsteg ved utledning/regning; aldri ja/nei alene; alle deloppgaver teller likt — prioriter tiden; bruk vedlagte tabeller og les av riktig verdi); (vii) karakterskillene (E ≈ riktig metode på flertallet + forsøk på tolkning; C/D ≈ korrekte utregninger + standardtolkninger uten kritisk drøfting; A/B ≈ OVB regnet begge veier + biasretning, genuin skepsis til kausalitet med navngitte utelatte variabler, presisjons-/tabell-bakregning, delta-SE, enhetsalgebra, prosentpoeng vs. prosent, z vs. t, og at R² ikke kan sammenlignes på tvers av ulik avhengig variabel).
- **Innholdskontrakt:** Oppgavetype-katalogen A–Q presenteres som studentens sjekkliste med frekvens og typisk vekt per sjanger. Prognosen for neste ordinære sett (V2026-malen): én stor OLS-tolkningsblokk (60–80 %) over ett anvendt datasett (lønn/utdanning/helse/boligpriser) — koeffisienttolkning i flere funksjonsformer → konstantledd → KI/t/F → OVB regnet begge veier → enhetsendring → skrive én `feols`-linje; deretter én mindre kausalitetsoppgave (20–40 %) med **IV/Wald + RF/FS og full relevans-/eksklusjonsdrøfting** som mest sannsynlig, **DiD** eller **fuzzy RDD** som nære alternativer; vedlagt normaltabell, invers-normal og $F_{m,\infty}$ forutsettes brukt. Leseplan: Del 1 + 2 + 4 + 5 (IV) er «må perfekt»; Del 3 og LPM/DiD i Del 6 «må kunne»; RDD, paneldata, probit/logit, presisjon↔n «kjenne». Avslutt med tidsstrategi: alle deloppgaver teller likt → fordel de 180 minuttene proporsjonalt, ikke etter hvor «gøy» oppgaven er.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «oppgave 1 veier 70 % med 9 likt tellende deloppgaver, oppgave 2 veier 30 % med 4 deloppgaver — sett opp tidsbudsjett per deloppgave for 180 minutter».
- **Typiske feil:** Metafeilene: skrive lange verbale essay der en kompakt regnekjede + én tolkningssetning var alt som ble bedt om (§5.12); hoppe over mellomsteg ved utledning; feil tidsprioritering fordi man ikke innser at deloppgavene teller likt.
- **Quiz: 10 · Flashcards: 10** (frekvenser, vekter, metaregler)

---

### Del 1 — OLS-modellen og koeffisienttolkning *(prioritet: PERFEKT)*

#### Kapittel 1.1: OLS-modellen, estimatoren og R-utskriften

- **id:** `econ3150-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Fra enkel OLS for hånd til å avlese en flerregresjons-`feols`-utskrift — grunnlaget hver eneste eksamen bygger på.
- **Eksamensbelegg:** Å avlese en R-/Stata-utskrift er forutsetningen for hele den store blokken (60–80 % i hvert sett siden 2022); enkel OLS for hånd ($\hat{\beta}_1 = \operatorname{cov}(x,y)/\operatorname{var}(x)$) forekom eksplisitt i V2019 og lever i utsatt-settene. Prioritet: **perfekt** (verktøykapittel).
- **Innholdskontrakt:** Modellen $y = \beta_0 + \beta_1 x_1 + \dots + \beta_k x_k + u$ med tolkning av hvert ledd; feilleddet $u$ som «alt annet som påvirker $y$»; enkel OLS for hånd: $\hat{\beta}_1 = \frac{\operatorname{cov}(x,y)}{\operatorname{var}(x)}$, $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x}$ (MÅ KUNNE UTLEDES/BRUKES — minste kvadraters idé i to setninger, ingen matrisebevis); multippel regresjon som «partialling out» (koeffisienten på $x_1$ er effekten *etter* at de andre regressorene er holdt fast); **avlese utskriften**: estimat, standardfeil (i parentes), $N$, $R^2$, RMSE/SSR, og hvilken kolonne (reg1…reg7) som hører til hvilken spesifikasjon; `feols(y ~ x1 + x2, data=d)`-syntaks og `etable`-tabellens oppbygging; kobling til regime B-utskriften (`regress …, robust`) som samme informasjon i annet program. Alt her er *bruk og avlesning* — tolkningen kommer i 1.2. Tospråklig begrepsbank: minste kvadraters metode (ordinary least squares, OLS), residual (residual), tilpasset verdi (fitted value).
- **Oppgavesjangre:** A (grunnlag) + O-forberedelse. Mønstereksempel: «Utskriften under viser to `feols`-regresjoner av timelønn på utdanningsår, med og uten kontroll for erfaring. Les av estimatet, standardfeilen og $N$ for utdanningskoeffisienten i begge, og forklar hvorfor de to estimatene er forskjellige.»
- **Typiske feil:** Forveksle standardfeilen (i parentes) med estimatet; lese av feil kolonne når utskriften har mange regresjoner; tro at $\hat{\beta}_1$ i multippel regresjon er den «rå» sammenhengen mellom $x_1$ og $y$ (den er betinget på de andre).
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 1.2: Koeffisienttolkning: nivå, dummy og kontrollvariabler

- **id:** `econ3150-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3150-1-1`
- **kapitteltype:** teori
- **description:** Kjernen i hvert sett: formulere korrekt tolkning av én koeffisient — «assosiert med … alt annet likt» — for nivå-nivå, dummy og med kontroller.
- **Eksamensbelegg:** Sjanger A i **12/12 moderne sett (100 %)**, flere deloppgaver hvert sett; dummy-tolkning og «adjusting for»-tillegget er faste sensorkrav; kausal tolkning + antakelser 92 %. Dette er bokas mest testede enkeltferdighet. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ BEHERSKES ORDRETT PRESIST: **nivå–nivå** — «én enhets økning i $x$ er assosiert med $\hat{\beta}$ enheters endring i $y$, alt annet likt (keeping the other regressors fixed)»; **dummy** — forskjell i forventet $y$ mellom gruppe 1 og referansegruppen (0), gitt de andre variablene; **kontrollvariabler** — tillegget «adjusting for / holding … fixed» er OBLIGATORISK når det er kontroller i modellen; skillet **assosiasjon vs. kausalitet** introduseres her og går som en rød tråd: «assosiert med» er default, «forårsaker» krever design (Del 4–5). Presist statistisk språk: en koeffisient beskriver *forventet* endring, ikke endring for en gitt person. Tospråklig begrepsbank: alt annet likt (ceteris paribus / all else equal / holding fixed), referansegruppe (reference/baseline category), assosiert med (associated with). Utledning kreves ikke — dette er tolkning; men studenten skal kunne begrunne *hvorfor* «alt annet likt» følger av multippel regresjon (kobling 1.1 partialling out).
- **Oppgavesjangre:** A + G-forberedelse. Mønstereksempel: «I regresjonen $\widehat{\text{lonn}} = 180 + 24\cdot\text{utdaar} + 15\cdot\text{kvinne}$ (der kvinne er en dummy), tolk koeffisienten på utdanningsår og koeffisienten på kvinne presist. Kan du si at ett år ekstra utdanning *gir* 24 kroner høyere lønn? Begrunn.»
- **Typiske feil (analysen §5.1):** Kausalitetsspråk uten dekning («forårsaker/gir/fører til» der bare betinget assosiasjon er vist); glemme «alt annet likt»/«adjusting for» når det er kontroller; tolke dummy-koeffisienten som effekt av en kontinuerlig endring; si «endring for en person» i stedet for forventet endring.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 1.3: Funksjonsform: log-nivå, log-log og elastisiteter

- **id:** `econ3150-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-1-2`
- **kapitteltype:** teori
- **description:** Hvordan tolkningen skifter når $y$ og/eller $x$ er logaritmert — og den evige fella prosent vs. prosentpoeng.
- **Eksamensbelegg:** Funksjonsform (log/elastisitet, log–nivå, log–log) i **11/12 sett (92 %)**; prosent-vs-prosentpoeng-skillet er en eksplisitt sensorfelle ved dummy-/andelsutfall og log-modeller (§5.2). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ BEHERSKES: **log–nivå** ($\log(y)\sim x$): $\hat{\beta}$ tolkes som ≈ **$100\cdot\hat{\beta}$ prosent** endring i $y$ per enhets økning i $x$ (for små $\hat{\beta}$; eksakt $100\cdot(e^{\hat{\beta}}-1)$ nevnes som presisjonsforbedring); **log–log** ($\log(y)\sim\log(x)$): $\hat{\beta}$ er en **elastisitet** — «1 % økning i $x$ er assosiert med $\hat{\beta}$ % endring i $y$»; **nivå–log** kort; **dummy i en log-modell**: $100\cdot\hat{\beta}$ prosent forskjell mellom gruppene; det kritiske skillet **prosent vs. prosentpoeng (percent vs. percentage points)** — ved et utfall som allerede er en andel/sannsynlighet (LPM, Del 6) er en dummy-koeffisient en endring i *prosentpoeng*, ikke prosent; **$R^2$ kan IKKE sammenlignes på tvers av modeller med ulik avhengig variabel** (nivå $y$ vs. $\log y$) — fristende felle, eksplisitt straffet (§5.6). Tospråklig begrepsbank: elastisitet (elasticity), semi-elastisitet (semi-elasticity), prosentpoeng (percentage points). Utledning: vis hvorfor $\Delta\log(y)\approx$ relativ endring på 2 linjer («kunne utlede»).
- **Oppgavesjangre:** A. Mønstereksempel: «I $\widehat{\log(\text{lonn})} = 4{,}2 + 0{,}08\cdot\text{utdaar} + 0{,}31\cdot\text{leder}$ (leder = dummy), tolk begge koeffisientene. Hvor mye høyere er forventet lønn for ledere, i prosent? Hvorfor kan du ikke sammenligne $R^2$ i denne modellen med $R^2$ fra en modell der lønn i kroner er avhengig variabel?»
- **Typiske feil (analysen §5.2, §5.6):** Blande prosent og prosentpoeng; tolke log–log-koeffisienten som nivåendring; glemme ×100 i log–nivå; sammenligne $R^2$ på tvers av ulik $y$; tolke log-dummy som prosentpoeng.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.4: Konstantleddet, R² og modellsammenligning

- **id:** `econ3150-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-1-2`
- **kapitteltype:** teori
- **description:** Konstantleddet som betinget forventning ved x=0 — og hvorfor tolkningen ofte er meningsløs; R² som forklart varians, ikke modellkvalitet.
- **Eksamensbelegg:** Konstantleddets tolkning (sjanger B) i 8/12 sett (67 %), alle fire 2022–25; $R^2$-tolkning i 7/12 (58 %). Sensor forventer at studenten påpeker at $x=0$ ofte er urealistisk/utenfor datastøtte. Prioritet: **kunne** (grensende til perfekt — billige, faste poeng).
- **Innholdskontrakt:** Konstantleddet $\hat{\beta}_0 = E[y\mid \text{alle regressorer} = 0]$ — betinget forventning når ALLE $x$-er er null; MÅ KUNNE påpeke når dette er **meningsløst/utenfor datastøtte** (timelønn for en person med 0 års utdanning og 0 års erfaring; $\log(\text{inntekt})=0$ ⇒ inntekt = 1; recentrert variabel $\Rightarrow$ konstant = utfall ved gjennomsnittsverdien); recentrering av en regressor (trekke fra gjennomsnittet) endrer bare konstantleddets tolkning, ikke helningene; $R^2 = 1 - \text{SSR}/\text{TSS} = 1 - \text{RMSE}^2/\operatorname{var}(y) = \operatorname{var}(\hat{y})/\operatorname{var}(y)$ som andel forklart varians (til bruk); $R^2$ måler IKKE om modellen er «riktig» eller kausal, og kan ikke sammenlignes på tvers av ulik $y$ (kobling 1.3); høy $R^2$ utelukker ikke OVB (kobling 4.4). Tospråklig begrepsbank: konstantledd (intercept/constant), forklart varians (explained variance), datastøtte (support of the data / out-of-sample). Utledning: $\text{TSS} = (n-1)\cdot\text{SD}_y^2$ (til bruk i F-testen, kap. 2.4).
- **Oppgavesjangre:** B. Mønstereksempel: «I $\widehat{\text{blodtrykk}} = 118 + 0{,}9\cdot\text{alder} - 4\cdot\text{trener}$ er konstantleddet 118. Gi en presis tolkning av det, og forklar hvorfor tallet er lite meningsfullt slik modellen er spesifisert. Hva ville konstantleddet betydd hvis alder ble recentrert rundt gjennomsnittet?»
- **Typiske feil (analysen §5.8):** Tolke konstantleddet bokstavelig uten realisme-forbehold; tro at høy $R^2$ betyr fravær av OVB; sammenligne $R^2$ på tvers av ulik avhengig variabel; blande SSR, TSS og RMSE.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.5: Drill: OLS-tolkningsblokken fra R-utskrift

- **id:** `econ3150-1-5` · **number:** 1.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ3150-1-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele tolkningsblokken: fra en gjengitt `feols`-utskrift med flere regresjoner til komplette, presise tolkninger av alle koeffisienttyper.
- **Eksamensbelegg:** Dekker sjangrene A (100 %), B (67 %) og funksjonsform (92 %) samlet — til sammen kjernen i den store blokken (60–80 % av hvert sett siden 2022). H2024/V2025 markerer at tolkningsdeloppgavene bærer mesteparten av poengene. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser funksjonsformen for hver koeffisient (nivå/log-nivå/log-log/dummy); 2) skriv tolkningen med korrekt enhet og «assosiert med … alt annet likt»; 3) legg til «adjusting for …» ved kontroller; 4) skill prosent vs. prosentpoeng; 5) tolk konstantleddet som betinget forventning med realisme-forbehold; 6) kommenter $R^2$ korrekt (og aldri på tvers av ulik $y$); 7) vurder kausal tolkning kritisk (bro til Del 4). **Gjennomregnet eksamenscase med sensor-margnotater** basert på en gjengitt utskrift med 4–5 `feols`-regresjoner (lønn/utdanning-datasett, nyskrevne tall), presentert som **tekst-tabell** (kolonner reg1…reg5, rader for hver variabel med estimat og SE i parentes, pluss $N$, $R^2$, RMSE). 10–15 deloppgaver som roterer alle koeffisienttyper og funksjonsformer, alle på eksamensnivå.
- **Oppgavesjangre:** A, B (+ funksjonsform). Mønstereksempel (full deloppgave-kjede à la V2023/V2024): «(a) Tolk koeffisienten på utdanningsår i reg2. (b) Tolk dummyen `kvinne` i reg3 der avhengig variabel er $\log(\text{lonn})$. (c) Tolk konstantleddet i reg1 og forklar hvorfor det er lite meningsfullt. (d) Reg4 har $R^2 = 0{,}41$ mot reg2s $0{,}28$ — betyr det at reg4 er 'bedre'? (e) Kan koeffisienten i (a) tolkes kausalt?»
- **Typiske feil:** Hele §5-repertoaret for tolkningsdelen samlet: kausalitetsspråk (§5.1), prosent/prosentpoeng (§5.2), $R^2$ på tvers (§5.6), konstantledd bokstavelig (§5.8), glemt «alt annet likt».
- **Quiz: 20 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (se §4).

---

### Del 2 — Statistisk inferens i regresjon *(prioritet: PERFEKT)*

#### Kapittel 2.1: Standardfeil, presisjon og robuste SE

- **id:** `econ3150-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-1-1`
- **kapitteltype:** teori
- **description:** Hva standardfeilen måler, hvordan den avleses, og hvorfor robuste SE er default i moderne økonometri.
- **Eksamensbelegg:** Avlese/tolke SE i **10/12 sett (83 %)** — sjanger-element i hele inferensblokken; heteroskedastisitet/robuste SE som eksplisitt tema er klassisk (regime A), men i regime C brukes robuste SE som *default* og bør forstås. Prioritet: **perfekt**.
- **Innholdskontrakt:** Standardfeilen (standard error) $\operatorname{SE}(\hat{\beta})$ som **estimert standardavvik til estimatoren over gjentatte utvalg** — måler presisjon, ikke spredning i dataene; avlese SE fra utskriftens parentes; **presisjon ↔ utvalgsstørrelse**: $\operatorname{SE}\propto 1/\sqrt{n}$ (firedobling av $n$ halverer SE — bro til 6.5); heteroskedastisitet (heteroskedasticity): OLS er fortsatt forventningsrett, men default-SE er feil ⇒ **robuste (heteroskedasticity-robust) SE**, `vcov="hetero"` i `feols`; kort om at regime C oppgir robuste SE som standard, så «test/GLS-korrigering» (regime A) er utgått. **Vcov-matrisen**: diagonalen gir $\operatorname{var}(\hat{\beta}_j)$, off-diagonal $\operatorname{cov}(\hat{\beta}_j,\hat{\beta}_k)$ — nødvendig for delta-metoden (kap. 3.2). Tospråklig begrepsbank: standardfeil (standard error), robuste standardfeil (robust standard errors), heteroskedastisitet (heteroskedasticity), varians-kovarians-matrise (variance–covariance matrix). Forkunnskap: SE-begrepet fra `econ2130-4-2` (verifiser lenke).
- **Oppgavesjangre:** A/D-forberedelse. Mønstereksempel: «Standardfeilen på koeffisienten falt fra 6,1 til 3,0 da utvalget ble utvidet fra 500 til 2000 observasjoner. Forklar hva standardfeilen måler, og vis at reduksjonen er omtrent det $\sqrt{n}$-regelen forutsier.»
- **Typiske feil:** Tolke SE som spredning i $y$-dataene i stedet for presisjon i estimatet; tro at heteroskedastisitet gjør OLS forventningsskjev (den påvirker bare SE); glemme at robuste SE er default i moderne utskrifter.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.2: t-test og hypotesetesting

- **id:** `econ3150-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-2-1`
- **kapitteltype:** teori
- **description:** t-observatoren mot 0 og mot en annen verdi, ensidig vs. tosidig, og p-verdien begge veier — med normaltabellen fordi n er stort.
- **Eksamensbelegg:** Hypotesetest/t-verdi i **11/12 sett (92 %)**, også ensidig og test mot $c\neq 0$; ensidig-test-fella (feil hale) er eksplisitt testet (V2023 d); z-vs-t-skillet er en fast felle (§5.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE REGNES: $t = \frac{\hat{\beta} - c}{\operatorname{SE}}$ — antall standardfeil fra nullverdien; standard $c=0$, men **test mot annen verdi** ($\frac{\hat{\beta}-1}{\operatorname{SE}}$) forekommer og skal beherskes; **store $n$ ⇒ bruk normaltabellen ($z$), ikke $t$-fordelingen** — kritiske verdier avleses fra vedlagt $\Phi$-tabell (5 % tosidig: 1,96; 1 %: 2,58); **ensidig vs. tosidig**: retningsbestemt hypotese ($H_1\!: \beta>0$) ⇒ all forkastningsmasse i **én** hale, riktig fortegn kreves (symmetri: $P(Z<-z)=1-P(Z<z)$); **p-verdi**: tosidig $p = 2\cdot(1-\Phi(|t|))$, ensidig $p = 1-\Phi(t)$ eller $\Phi(t)$ etter retning; konklusjon alltid i kontekst («koeffisienten er signifikant forskjellig fra null på 5 %-nivå — det er evidens for at …»), aldri bare «forkast $H_0$». Tospråklig begrepsbank: hypotesetest (hypothesis test), ensidig/tosidig (one-sided/two-sided), signifikansnivå (significance level), forkastningsområde (rejection region). Utledning kreves ikke; men studenten skal kunne bakregne (kobling 6.5). Forkunnskap: testoppskriften `econ2130-5-1` (verifiser).
- **Oppgavesjangre:** D. Mønstereksempel: «Koeffisienten på fagforeningsmedlemskap er 0,043 med standardfeil 0,019. (a) Test på 5 %-nivå om den er forskjellig fra null. (b) En forsker hevder effekten er *positiv* — formuler og gjennomfør den ensidige testen, og forklar hvorfor kritisk verdi og hale er annerledes enn i (a). (c) Finn den tosidige p-verdien.»
- **Typiske feil (analysen §5.3, §5.4):** Bruke $t$-tabell der store $n$ tilsier normaltabellen; plassere ensidig forkastningsmasse i feil hale eller bruke tosidig kritisk verdi ensidig; glemme dobling i tosidig p-verdi; konkludere «forkast $H_0$» uten kontekst.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.3: Konfidensintervall og tabellbruk

- **id:** `econ3150-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-2-2`
- **kapitteltype:** teori
- **description:** β̂ ± z·SE med z fra normaltabellen — og de «rare» konfidensnivåene som er der nettopp for å tvinge fram riktig tabellbruk.
- **Eksamensbelegg:** KI i **10/12 sett (83 %)** — sjanger C; oppgaven spør ofte om et uvant konfidensnivå (86 %, 68 %, 80 %) for å teste korrekt tabellbruk; frekvenstolkningen kreves. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE KONSTRUERES: $\text{KI} = \hat{\beta} \pm z_{\alpha/2}\cdot\operatorname{SE}$ med $z$ fra **vedlagt normaltabell / invers-normal $\Phi^{-1}$** (store $n$ ⇒ $z$, ikke $t$); faste verdier studenten skal kunne finne selv: 90 %→1,64/1,65, 95 %→1,96, 99 %→2,58, 68 %→1, 80 %→1,28, 86 %→1,48; to obligatoriske krav: (i) **frekvenstolkning** — «intervaller konstruert på denne måten dekker den sanne parameteren i (nivå) % av gjentatte utvalg» (den forbudte varianten «parameteren ligger i intervallet med X % sannsynlighet» er FEIL — parameteren er fast, intervallet varierer); (ii) **signifikanskonklusjon** — inneholder intervallet 0? (KI↔test-broen); bredde-intuisjon: høyere nivå → bredere, større $n$ → smalere. Tospråklig begrepsbank: konfidensintervall (confidence interval), konfidensnivå (confidence level), dekningssannsynlighet (coverage). Forkunnskap: KI-tolkningen fra `econ2130-4-3` (verifiser) — samme forbudte formulering.
- **Oppgavesjangre:** C. Mønstereksempel: «Konstruer et **86 %** konfidensintervall for koeffisienten 0,043 (SE 0,019). Forklar hvorfor du bruker $z$ og ikke $t$, gi en presis frekvenstolkning av intervallet, og avgjør om koeffisienten er signifikant på tilsvarende nivå.»
- **Typiske feil (analysen §5.3):** Lese av feil kritisk verdi for et uvant nivå (kunne bare 1,96); bruke $t$ der $z$ er riktig; den forbudte KI-tolkningen; glemme signifikanskonklusjonen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.4: F-testen for felles nullhypotese

- **id:** `econ3150-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `econ3150-2-2`
- **kapitteltype:** teori
- **description:** Teste at flere koeffisienter er null samtidig — begge formene av F, mot Fₘ,∞-tabellen, med homoskedastisitet-antakelsen nevnt uoppfordret.
- **Eksamensbelegg:** F-test i **10/12 sett (83 %)**; sensor bruker RSS- og R²-formen om hverandre; **homoskedastisitet antas eksplisitt for denne testen, og å nevne det premieres** (§5.5). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE REGNES i begge former:
  $$F = \frac{(\text{SSR}_r - \text{SSR}_{ur})/q}{\text{SSR}_{ur}/(n-k-1)} = \frac{(R^2_{ur} - R^2_r)/q}{(1 - R^2_{ur})/(n-k-1)}$$
  der $q$ = antall restriksjoner (koeffisienter satt til null), $ur$ = urestringert, $r$ = restringert; sammenlign med kritisk verdi fra **vedlagt $F_{m,\infty}$-tabell** (f.eks. $F_{2,\infty}=3{,}00$ på 5 %); den restringerte modellen med bare konstantledd gir $\text{SSR}_r = \text{TSS} = (n-1)\cdot\text{SD}_y^2$ (kobling 1.4); **homoskedastisitet-antakelsen (homoskedasticity assumption) forutsettes for den klassiske F-formen og skal nevnes uoppfordret**; tolkning: forkastning betyr at minst én av de testede koeffisientene er forskjellig fra null — ikke hvilken. Tospråklig begrepsbank: felles nullhypotese (joint null hypothesis), restringert/urestringert modell (restricted/unrestricted model), residualkvadratsum (sum of squared residuals, SSR/RSS). Utledning kreves ikke; koblingen SSR↔R² vises på 3 linjer.
- **Oppgavesjangre:** E. Mønstereksempel: «To ferdighetsvariabler (lesing og regning) skal testes samtidig. Urestringert modell har $R^2 = 0{,}34$, restringert (uten de to) $R^2 = 0{,}31$, med $n = 480$ og $k = 5$. Gjennomfør F-testen på 5 %-nivå mot $F_{2,\infty}=3{,}00$, og nevn hvilken antakelse den klassiske F-formen hviler på.»
- **Typiske feil (analysen §5.5):** Glemme homoskedastisitet-antakelsen; bruke feil antall frihetsgrader ($q$ eller $n-k-1$); blande $R^2$- og SSR-formen (f.eks. $R^2_r - R^2_{ur}$ med feil fortegn); tro at forkastning identifiserer hvilken koeffisient som er signifikant.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.5: Drill: inferensblokken

- **id:** `econ3150-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ3150-2-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele inferens-kjeden fra R-utskrift: SE → t-test (ensidig/tosidig, mot c) → KI (uvant nivå) → F-test — slik den lenkes i eksamens store blokk.
- **Eksamensbelegg:** Dekker sjangrene D (92 %), C (83 %) og E (83 %) samlet — inferensdelen som følger tolkningsdelen i hver stor blokk. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) avles estimat og SE; 2) t-observator mot riktig $c$, velg ensidig/tosidig fra spørsmålsformuleringen, riktig hale; 3) kritisk verdi fra normaltabellen (uvant nivå ⇒ let opp $z$); 4) p-verdi begge veier; 5) KI med frekvenstolkning og 0-sjekk; 6) F-test i riktig form med homoskedastisitet nevnt; 7) konkluder i kontekst. **Gjennomregnet eksamenscase med sensor-margnotater** på en gjengitt `feols`-utskrift (tekst-tabell). 8–15 deloppgaver på eksamensnivå som roterer alle inferens-sjangrene, med minst én ensidig test, én test mot $c\neq 0$, ett uvant KI-nivå og én F-test i begge former.
- **Oppgavesjangre:** C, D, E. Mønstereksempel: «(a) Test om koeffisienten på erfaring er signifikant (tosidig, 5 %). (b) Test om avkastningen på utdanning er *større enn* 0,05 (ensidig mot $c=0{,}05$). (c) Lag et 99 %-KI for erfaringskoeffisienten. (d) Test samtidig at både `by` og `region` er null (F-test, $R^2$-form).»
- **Typiske feil:** Hele §5-repertoaret for inferens samlet: z-vs-t (§5.3), ensidig hale (§5.4), glemt homoskedastisitet i F (§5.5), forbudt KI-tolkning, konklusjon uten kontekst.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (se §4).

---

### Del 3 — Funksjonsform, enhetsendring og R-kode

#### Kapittel 3.1: Endring av måleenhet — «vis algebraen»

- **id:** `econ3150-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-1-3`
- **kapitteltype:** teori
- **description:** Hva som skjer med koeffisientene når y eller x skaleres — og hvorfor log(c·y)=log c + log y bare flytter konstantleddet.
- **Eksamensbelegg:** Enhetsendring (sjanger M) i 6/12 sett (50 %), men **alle fire 2022–25** — en fast, voksende sjanger; sensor vil se **utledningen**, ikke bare svaret (§5.11). Prioritet: **kunne** (nær perfekt i regime C).
- **Innholdskontrakt:** MÅ KUNNE VISES ALGEBRAISK (ikke bare oppgi svaret): **skalering av $y$ med $c$** (nivå) multipliserer alle koeffisientene *og* konstantleddet med $c$ (og deres SE); **skalering av én $x$ med $c$** deler koeffisienten på nettopp den $x$-en med $c$ (konstant og øvrige uendret); **$\log(c\cdot y) = \log(c) + \log(y)$** ⇒ i en log-modell endrer en multiplikativ reskalering av $y$ **bare konstantleddet** (helningene og deres tolkning er uendret — dette er poenget); tilsvarende $\log(c\cdot x)$; konsekvens: elastisiteter er enhetsuavhengige. Vis alltid mellomstegene. Tospråklig begrepsbank: måleenhet (unit of measurement), reskalering (rescaling), enhetsuavhengig (scale-invariant). Utledningene her er den aktive ferdigheten kapitlet drilles på.
- **Oppgavesjangre:** M. Mønstereksempel: «Lønn er målt i kroner per time. En kollega vil bytte til tusen kroner per år (multipliser med en konstant $c$). Vis algebraisk hva som skjer med koeffisientene i (a) en nivå–nivå-modell og (b) en log–nivå-modell, og forklar hvorfor tolkningen av utdanningskoeffisienten er uendret i (b).»
- **Typiske feil (analysen §5.11):** Bare oppgi hvilke koeffisienter som endres uten å vise $\log(c\cdot y)=\log c + \log y$; skalere feil vei ($\times c$ der det skal være $\div c$ for en $x$-reskalering); tro at en log-reskalering endrer helningene; glemme at SE skalerer likt som estimatet.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.2: Kvadratledd, marginaleffekter og delta-metode-SE

- **id:** `econ3150-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ3150-2-4`, `econ3150-1-5`
- **kapitteltype:** teori
- **description:** Gjennomsnittlig marginaleffekt fra en kvadratisk spesifikasjon — og standardfeilen på en lineærkombinasjon via delta-metoden, toppnivå-differensiatoren.
- **Eksamensbelegg:** Kvadratledd + gjennomsnittlig marginaleffekt (sjanger N) i 3/12 (25 %); SE for lineærkombinasjon / delta-metode i 2/12 (17 %) — **toppnivå-differensiator** som skiller A fra midt (V2022 f,g). Prioritet: **kunne** (delta-SE: **kjenne**, merket «toppnivå — bør kjenne til», plassert til slutt i kapitlet).
- **Innholdskontrakt:** MÅ KUNNE REGNES: for $y = \beta_0 + \beta_{\text{age}}\text{age} + \beta_{\text{age}^2}\text{age}^2 + \dots$ er marginaleffekten $\frac{\partial y}{\partial \text{age}} = \beta_{\text{age}} + 2\beta_{\text{age}^2}\cdot\text{age}$, og **gjennomsnittlig marginaleffekt** = $\beta_{\text{age}} + 2\beta_{\text{age}^2}\cdot\overline{\text{age}}$; teste **avtakende helning** ⇒ legge til kvadratledd og teste fortegnet på $\beta_{\text{age}^2}$ (negativt ⇒ konkav); toppunkt/vendepunkt der marginaleffekten er null. **Delta-metode-SE for en lineærkombinasjon** (S&W «Key Concept»): $\operatorname{var}(a\hat{\beta}_j + b\hat{\beta}_k) = a^2\operatorname{var}(\hat{\beta}_j) + b^2\operatorname{var}(\hat{\beta}_k) + 2ab\operatorname{cov}(\hat{\beta}_j,\hat{\beta}_k)$ — verdiene hentes fra den utskrevne **vcov-matrisen** (kobling 2.1); anvendt på marginaleffekten ($a=1$, $b=2\overline{\text{age}}$). Tospråklig begrepsbank: marginaleffekt (marginal effect), gjennomsnittlig marginaleffekt (average marginal effect), delta-metode (delta method), lineærkombinasjon (linear combination). Forkunnskap: regnereglene for varians av lineærkombinasjon fra `econ2130-2-2` (verifiser).
- **Oppgavesjangre:** N. Mønstereksempel: «$\widehat{\log(\text{lonn})} = 2{,}1 + 0{,}05\cdot\text{erf} - 0{,}0008\cdot\text{erf}^2$, med gjennomsnittlig erfaring 18 år. (a) Finn den gjennomsnittlige marginaleffekten av ett års erfaring. (b) Ved hvilken erfaring topper lønnen seg? (c) Gitt vcov-matrisen under, finn standardfeilen til marginaleffekten i (a).»
- **Typiske feil:** Glemme faktoren 2 i $2\beta_{x^2}x$; sette inn feil verdi for $\bar{x}$; glemme kovariansleddet (eller faktoren $2ab$) i delta-metode-SE; hente feil element fra vcov-matrisen.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.3: Skrive R-kode og lese minimal spesifikasjon fra en figur

- **id:** `econ3150-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-1-3`, `econ3150-3-2`
- **kapitteltype:** teori
- **description:** Oversette en modell til feols-syntaks — og velge den minimale korrekte spesifikasjonen ut fra et spredningsdiagram.
- **Eksamensbelegg:** Skrive R-kode (sjanger O) i 4/12, men **alle fire 2022–25** — signatur i regime C; «minimal korrekt spesifikasjon fra en figur» er en fast del (V2025 oppg. 2). Prioritet: **kunne** (voksende, nær perfekt i regime C).
- **Innholdskontrakt:** MÅ KUNNE SKRIVES: `feols(...)`-syntaks — interaksjon med `*` (hovedeffekter + interaksjon) og `:` (kun interaksjon); transformasjon/dummy med `I(...)`: `I(motheduc >= 12)` (indikator), `I(age^2)` (kvadratledd), `I(x - c):I(x > c)` (knekk/spline-ledd); robuste SE med `vcov="hetero"`; logaritme med `log(y)`; `feols(log(lonn) ~ utdaar*kvinne + I(erf^2), data=d, vcov="hetero")` som fullt eksempel. **Minimal korrekt spesifikasjon fra figur**: velg *enklest mulige* spesifikasjon som fanger mønsteret — **log** ved eksponentiell/multiplikativ trend, **dummy + interaksjon** ved to grupper med ulikt nivå og/eller ulik helning, **knekk-/spline-ledd** $I(x-c):I(x>c)$ ved en diskontinuitet i helningen (kobling til RDD, 5.4), kvadratledd ved krumning. Tospråklig begrepsbank: spesifikasjon (specification), interaksjon (interaction), indikatorvariabel (indicator/dummy variable), knekkpunkt (kink/knot). Forkunnskap: R-vokabularet fra `econ2130-3-1` (verifiser). Presenter alltid koden MED en verbal forklaring per ledd — sensor vurderer om spesifikasjonen er korrekt, ikke om semikolon er på plass.
- **Oppgavesjangre:** O. Mønstereksempel: «Et spredningsdiagram viser at sammenhengen mellom inntekt og alder er stigende og konkav, og at menn ligger systematisk høyere med brattere stigning. Skriv den minimale `feols`-spesifikasjonen som fanger dette, og forklar hvert ledd. Skriv også kommandoen som gir robuste standardfeil.»
- **Typiske feil:** Overspesifisere (legge til ledd figuren ikke krever) eller underspesifisere (glemme interaksjonen ved to grupper med ulik helning); blande `*` og `:` i interaksjoner; glemme `I(...)` rundt en transformasjon (så `age^2` tolkes feil); velge nivå-modell der figuren viser eksponentiell trend.
- **Quiz: 20 · Flashcards: 15**

**Prøve-kvote Del 3:** 4 prøver (se §4).

---

### Del 4 — Kausalitet og utelatt variabel-skjevhet *(prioritet: PERFEKT — ryggraden)*

#### Kapittel 4.1: Kausal tolkning og betinget uavhengighet

- **id:** `econ3150-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-1-2`
- **kapitteltype:** teori
- **description:** Når en regresjonskoeffisient kan tolkes kausalt — og hvorfor sensor vil at du skal være skeptisk og navngi konkrete utelatte variabler.
- **Eksamensbelegg:** Kausal tolkning + antakelser (sjanger G) i **11/12 sett (92 %)** — ryggraden i hver oppgave 1; toppkandidatene «er genuint skeptiske» og navngir konkrete utelatte variabler i konteksten (§4, §5.1). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ BEHERSKES KONSEPTUELT: OLS gir en **kausaleffekt** bare hvis **betinget uavhengighet (conditional independence) / ingen gjenstående utelatte variabler** holder — regressoren er «as good as randomly assigned» *gitt kontrollene*; ellers er koeffisienten bare en betinget assosiasjon; den obligatoriske skepsisen: navngi **konkrete plausible utelatte variabler** i akkurat den konteksten (evne, motivasjon, familiebakgrunn, helse, kosthold, søvn, stress osv.) — abstrakt «det kan finnes andre faktorer» gir ikke full uttelling; kobling til kontrafaktisk logikk (potensielle utfall) og RCT som gullstandard (forkunnskap `econ2130-6-3`, verifiser) — men her i regresjonsspråk; broen framover: når betinget uavhengighet svikter, kvantifiseres skjevheten (4.2–4.3) eller løses med et instrument (Del 5). Tospråklig begrepsbank: betinget uavhengighet (conditional independence assumption, CIA), «som om tilfeldig tildelt» (as good as randomly assigned), kausaleffekt (causal effect), konfunderende variabel (confounder). Verbalt kapittel — ingen utledninger, men presise begreper og kontekstforankring.
- **Oppgavesjangre:** G. Mønstereksempel: «En regresjon viser at personer som spiser frokost regelmessig, tjener mer, også etter kontroll for utdanning og alder. Kan vi konkludere at frokost *øker* inntekten? Navngi minst to konkrete utelatte variabler som kan skape denne assosiasjonen, og forklar under hvilken antakelse koeffisienten ville hatt en kausal tolkning.»
- **Typiske feil (analysen §5.1):** Kausalitetsspråk uten dekning; nevne «utelatte variabler» abstrakt uten å navngi konkrete i konteksten; tro at flere kontroller automatisk gir kausalitet; forveksle betinget uavhengighet med at koeffisienten er statistisk signifikant.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.2: Utelatt variabel-skjevhet: formelen og fortegnet

- **id:** `econ3150-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ3150-4-1`
- **kapitteltype:** teori
- **description:** OVB-formelen: hvorfor en koeffisient endrer seg når en variabel legges til, og hvordan fortegnet på biasen følger av to fortegn.
- **Eksamensbelegg:** OVB (sjanger F) i **11/12 sett (92 %)**, tolke + regne; den *kvalitative* delen (forklare fortegnsendring) er selve rammen rundt hver oppgave 1. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ BEHERSKES: OVB-formelen
  $$\tilde{\beta}_1 = \hat{\beta}_1 + \hat{\beta}_2\cdot\frac{\operatorname{cov}(x_1,x_2)}{\operatorname{var}(x_1)}$$
  der $\tilde{\beta}_1$ er koeffisienten i den **korte** regresjonen (uten $x_2$) og $\hat{\beta}_1$ i den **lange** (med $x_2$); **biasen** $= \hat{\beta}_2\cdot\frac{\operatorname{cov}(x_1,x_2)}{\operatorname{var}(x_1)}$; fortegnet på biasen følger av **produktet** av (i) fortegnet på $\hat{\beta}_2$ (effekten av den utelatte variabelen på $y$) og (ii) fortegnet på $\operatorname{cov}(x_1,x_2)$ (korrelasjonen mellom inkludert og utelatt regressor); MÅ KUNNE forklare *hvorfor* en koeffisient synker eller vokser når $x_2$ legges til, og koble retningen til de to fortegnene; «to positive eller to negative ⇒ oppadbias; ett av hver ⇒ nedadbias». Den *kvantitative* baklengs-regningen får eget drillkapittel (4.3). Tospråklig begrepsbank: utelatt variabel-skjevhet (omitted variable bias, OVB), oppad-/nedadbias (upward/downward bias), kort/lang regresjon (short/long regression). Utledning: OVB-formelen kan vises på 3–4 linjer fra $\hat{\beta}_1 = \operatorname{cov}(x_1,y)/\operatorname{var}(x_1)$ («kunne skissere»).
- **Oppgavesjangre:** F (kvalitativ). Mønstereksempel: «Koeffisienten på utdanning faller fra 0,09 til 0,06 når evne (målt ved en testskår) legges til. Bruk OVB-formelen til å forklare fortegnet på skjevheten, og koble det til fortegnet på evne-koeffisienten og på korrelasjonen mellom utdanning og evne.»
- **Typiske feil (analysen §5.7):** Bare påstå at koeffisienten er «skjev» uten å koble fortegnet til de to fortegnene; bytte om kort og lang regresjon; feil fortegnsregel (glemme at det er *produktet* som teller); tro at OVB forsvinner med større $n$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Drill: OVB regnet baklengs

- **id:** `econ3150-4-3` · **number:** 4.3 · **estimatedMinutes:** 90 · **prerequisites:** `econ3150-4-2`
- **kapitteltype:** drill
- **description:** Signaturøvelsen: løse OVB-formelen for en ukjent kovarians eller korrelasjon gitt to regresjoner — den enkeltteknikken som oftest skiller A fra B.
- **Eksamensbelegg:** Den kvantitative OVB-sjangeren (F) — regne ut **ukjent kovarians/korrelasjon** mellom to regressorer fra to regresjoner — forekom V2023 j, V2024 c, V2025 g, V2023-utsatt f; «å beherske dette begge veier er nesten garantert poeng» og er den fremste A/B-markøren i veiledningene. Egen drill fordi teknikken har sin egen algoritme (jf. avvik §2.2). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser kort og lang regresjon og skriv opp $\tilde{\beta}_1$, $\hat{\beta}_1$, $\hat{\beta}_2$; 2) sett inn i OVB-formelen; 3) **løs for den ukjente** — oftest $\frac{\operatorname{cov}(x_1,x_2)}{\operatorname{var}(x_1)}$, som er nettopp **helningen i en hjelperegresjon av $x_2$ på $x_1$**; 4) hvis korrelasjonen $\operatorname{cor}(x_1,x_2)$ søkes: bruk $\operatorname{cov} = \operatorname{cor}\cdot\text{SD}_{x_1}\text{SD}_{x_2}$ og gitte standardavvik; 5) tolk fortegn og størrelse; 6) sjekk konsistens med den kvalitative fortegnsregelen (4.2). Vis alle mellomsteg (sensorkrav §4.2). **Gjennomregnet eksamenscase med sensor-margnotater** som viser regnekjeden kompakt (ANSWER-HINT-stil). 10–15 oppgaver på eksamensnivå som roterer: løse for $\operatorname{cov}$, for $\operatorname{cor}$, for $\hat{\beta}_2$, og verifisere en oppgitt bias; alle med nyskrevne tall og kontekster (lønn/evne, helse/inntekt, boligpris/beliggenhet).
- **Oppgavesjangre:** F (kvantitativ). Mønstereksempel: «Kort regresjon: $\widehat{\text{lonn}} = 200 + 30\cdot\text{utdaar}$. Lang regresjon (med evne): $\widehat{\text{lonn}} = 150 + 22\cdot\text{utdaar} + 4\cdot\text{evne}$. (a) Bruk OVB-formelen til å finne $\operatorname{cov}(\text{utdaar},\text{evne})/\operatorname{var}(\text{utdaar})$. (b) Gitt $\text{SD}_{\text{utdaar}} = 3$ og $\text{SD}_{\text{evne}} = 10$, finn korrelasjonen mellom utdanning og evne. (c) Er fortegnet konsistent med intuisjonen?»
- **Typiske feil (analysen §5.7):** Løse for feil størrelse; glemme at $\frac{\operatorname{cov}(x_1,x_2)}{\operatorname{var}(x_1)}$ er en hjelperegresjons-helning (ikke selve korrelasjonen); glemme $\text{SD}$-faktorene når korrelasjon søkes; regne uten å vise mellomsteg; fortegnsfeil.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 4.4: Sant/usant og «diskuter påstanden»

- **id:** `econ3150-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-4-1`
- **kapitteltype:** teori
- **description:** Kortsvar-konseptspørsmålene om korrelasjon, kausalitet, R² og OVB — der en presis begrunnelse er hele poenget.
- **Eksamensbelegg:** Sant/usant- eller «diskuter påstanden»-konseptspørsmål (sjanger Q) i 5/12 (42 %); klassikerne: «korrelasjon impliserer ikke kausalitet» (og omvendt-fella), «høy R² ⇒ ingen OVB» (usant), forventningsskjev men konsistent estimator, attrisjon som trussel mot indre vs. ytre gyldighet (V2025-utsatt 1, V2014 oppg. 3). Sensor krever begrunnelse — aldri ja/nei alene. Prioritet: **kunne**.
- **Innholdskontrakt:** Momentbank med korrekt begrunnelse for hver klassiker: **korrelasjon ⇏ kausalitet** (konfundering, omvendt kausalitet) — og den motsatte fella at fravær av korrelasjon ikke utelukker en ikke-lineær sammenheng; **høy $R^2$ ⇒ ingen OVB er USANT** ($R^2$ måler forklart varians, ikke skjevhet — kobling 1.4); **forventningsskjev men konsistent** (biased but consistent): en estimator kan være skjev i endelige utvalg men treffe i grensen; homoskedastisitet som spesialtilfelle (OLS forventningsrett uansett, bare SE påvirkes — kobling 2.1); **indre vs. ytre gyldighet (internal vs. external validity)**; **attrisjon (attrition)** og partiell compliance som trusler (bro til IV, Del 5); «signifikant ⇏ stor/viktig effekt». Format: påstand → sann/usant → **kort begrunnelse med fagbegrep** (2–4 setninger). Tospråklig begrepsbank samlet for hele momentbanken. Verbalt kapittel — presise begreper, ingen utledninger.
- **Oppgavesjangre:** Q. Mønstereksempel: «Diskuter påstanden: 'En regresjon med høy $R^2$ gir en pålitelig kausal effekt.' Er den sann eller usann? Begrunn med to konkrete grunner.»
- **Typiske feil (analysen §5.6, §5.12):** Svare ja/nei uten begrunnelse; koble $R^2$ til fravær av OVB; blande forventningsskjevhet og inkonsistens; skrive langt essay der 2–4 begrunnede setninger var alt som ble bedt om.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 4:** 4 prøver (se §4).

---

### Del 5 — Instrumentvariabler, 2SLS og RDD *(prioritet: PERFEKT for IV)*

#### Kapittel 5.1: IV/Wald-estimatoren: redusert form over første steg

- **id:** `econ3150-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ3150-4-2`
- **kapitteltype:** teori
- **description:** Instrumentvariabel-estimatoren beregnet slik sensor foretrekker — som redusert form delt på første steg, også fra en kryssingstabell.
- **Eksamensbelegg:** IV/2SLS/Wald (sjanger H) i **12/12 moderne sett (100 %)** — den mest stabile enkeltteknikken; beregnes nesten alltid som **redusert form / første steg (RF/FS)**. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE REGNES: $\hat{\beta}_{IV} = \frac{\text{RF}}{\text{FS}} = \frac{S_{ZY}}{S_{ZX}}$ (Wald-estimatoren); ved **binært instrument** $z$: $\hat{\beta}_{IV} = \frac{\bar{E}(y\mid z=1) - \bar{E}(y\mid z=0)}{\bar{E}(x\mid z=1) - \bar{E}(x\mid z=0)}$ — RF og FS regnes som forskjeller i grupperte gjennomsnitt/andeler fra en **kryssingstabell**; intuisjon: instrumentet flytter $y$ *bare gjennom* $x$, så vi skalerer $y$-responsen med hvor mye $x$ faktisk beveget seg; **standardfeil for binære andeler**: $\operatorname{var} = p(1-p)/N$ per gruppe, uavhengige grupper ⇒ ingen kovarians ⇒ SE for første steg som sum av gruppevarianser; første-stegs $F = t^2$. Tospråklig begrepsbank: instrumentvariabel (instrumental variable, IV), redusert form (reduced form), første steg (first stage), Wald-estimator (Wald estimator). Forkunnskap: to-utvalgsapparatet/andelsvarians fra `econ2130-5-3` (verifiser). Utledning: RF/FS = Wald vises på 2–3 linjer.
- **Oppgavesjangre:** H. Mønstereksempel: «Et lotteri (instrument $z$) tildeler tilfeldig plass på et kurs ($x$). Blant vinnere fullførte 62 % kurset og tjente i snitt 340; blant tapere fullførte 18 % og tjente 305. (a) Regn redusert form og første steg. (b) Finn IV-estimatet for effekten av å fullføre kurset på inntekt. (c) Finn standardfeilen til første steg gitt gruppestørrelsene.»
- **Typiske feil:** Regne RF eller FS alene og kalle det IV-estimatet; snu brøken (FS/RF); glemme at binært instrument gir gjennomsnitts-/andelsdifferanser; feil andelsvarians ($p(1-p)/N$).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 5.2: De to betingelsene: relevans og eksklusjon

- **id:** `econ3150-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-5-1`
- **kapitteltype:** teori
- **description:** Når er et instrument gyldig? Relevans testes, eksklusjon argumenteres — og et uventet fortegn avslører et ugyldig instrument.
- **Eksamensbelegg:** De to IV-betingelsene drøftes **hver gang IV forekommer (12/12)**; å identifisere ugyldige/svake instrumenter (ikke-signifikant første steg; uventet IV-fortegn som avslører eksklusjonsbrudd, V2023 m–o) er et fast krav; IV-diagnostikk hoppet over er en typisk feil (§5.10). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ BEHERSKES: **relevans (relevance/instrument relevance)** — instrumentet må påvirke den endogene variabelen: **signifikant første steg**, testet med $t$/$F$; tommelfingerregel $F > 10$ for å unngå **svakt instrument (weak instrument)**; **eksklusjon/eksogenitet (exclusion restriction / instrument exogeneity)** — instrumentet påvirker $y$ **bare via** den endogene variabelen og er ukorrelert med feilleddet; kan ikke testes direkte, må **argumenteres realistisk** i konteksten (toppkandidat-markør: drøfte konkret hvorfor eksklusjonen kan/ikke kan holde, ikke mekanisk); **å identifisere brudd**: ikke-signifikant første steg ⇒ svakt/irrelevant instrument; et **uventet fortegn** på IV-estimatet avslører ofte et eksklusjonsbrudd (instrumentet påvirker $y$ ad andre kanaler); J-test for overidentifiserende restriksjoner nevnes kort (tester eksogenitet ved flere instrumenter — kjenne). Tospråklig begrepsbank: relevans (relevance), eksklusjonsrestriksjon (exclusion restriction), eksogenitet (exogeneity), endogen variabel (endogenous variable), svakt instrument (weak instrument). Verbalt/diagnostisk kapittel med regneelement (F-test).
- **Oppgavesjangre:** H. Mønstereksempel: «Avstand til nærmeste høyskole brukes som instrument for utdanning i en lønnsregresjon. (a) Hvordan sjekker du relevansen, og hva er tommelfingerregelen? (b) Drøft eksklusjonsrestriksjonen konkret — kan avstand påvirke lønn på andre måter enn via utdanning? (c) IV-estimatet blir negativt og urimelig stort. Hva forteller det deg om instrumentet?»
- **Typiske feil (analysen §5.10):** Hoppe over relevans- og/eller eksklusjonsdrøftingen; behandle eksklusjonen som noe man «tester» statistisk; ikke fange at et uventet fortegn signaliserer et ugyldig instrument; forveksle relevans og eksogenitet.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: 2SLS-oppsettet og LATE

- **id:** `econ3150-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ3150-5-2`
- **kapitteltype:** teori
- **description:** Skrive første og andre steg eksplisitt med kontroller — og tolke IV-koeffisienten som en lokal gjennomsnittlig behandlingseffekt.
- **Eksamensbelegg:** 2SLS-oppsett og LATE-tolkning (sjanger I) inngår i IV-blokken (100 %); skrive de to stegene eksplisitt og tolke som LATE under heterogene effekter er et fast krav i regime C. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE SETTES OPP: **første steg** — den endogene variabelen på instrumentet + alle kontroller: $x = \pi_0 + \pi_1 z + \gamma'\mathbf{w} + v$; **andre steg** — utfallet på den *predikerte* endogene + samme kontroller: $y = \beta_0 + \beta_1 \hat{x} + \delta'\mathbf{w} + \varepsilon$; hvorfor kontroller må være med i **begge** steg; `feols(y ~ w | x ~ z, data=d)`-syntaks i `fixest` (kobling 3.3); **LATE (local average treatment effect)** — under heterogene behandlingseffekter estimerer IV effekten **for compliers** (de som lar seg påvirke av instrumentet), ikke hele populasjonen; **compliers/always-takers/never-takers**, og **defiers utelukkes** (monotonisitetsantakelsen); hvorfor LATE kan avvike fra ATE; kobling til attrisjon/partiell compliance i eksperimenter (IV som løsning når «failure to follow treatment protocol»). Tospråklig begrepsbank: to-trinns minste kvadrater (two-stage least squares, 2SLS), lokal gjennomsnittlig behandlingseffekt (local average treatment effect, LATE), compliers (compliers), monotonisitet (monotonicity). Verbalt + oppsett-kapittel.
- **Oppgavesjangre:** I. Mønstereksempel: «Et tilfeldig tilbud om gratis leksehjelp (instrument) skal brukes til å estimere effekten av faktisk deltakelse på karakterer. (a) Skriv opp første og andre steg med kontroll for foreldres utdanning. (b) Tolk 2SLS-koeffisienten — for hvilken gruppe elever gjelder effekten? (c) Hva er en 'complier' her, og hvorfor utelukker vi defiers?»
- **Typiske feil:** Utelate kontrollene i ett av stegene; regressere på den *observerte* $x$ i andre steg (i stedet for $\hat{x}$); tolke LATE som gjennomsnittseffekten for alle; blande compliers og always-takers.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 5.4: Regresjons-diskontinuitet: fuzzy RDD som 2SLS

- **id:** `econ3150-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-5-3`
- **kapitteltype:** teori
- **description:** Når behandling tildeles ved en terskel på en løpende score — identifiser designet, og estimer fuzzy RDD som 2SLS. Ny sjanger, bør kjennes til.
- **Eksamensbelegg:** RDD (sjanger J) i 2/12 (17 %) — **ny 2024–2025 + utsatt** (V2025 oppg. 4, V2022-utsatt 2b, V2023-utsatt e); analysen utpeker den som sannsynlig gjenganger (nivå 3 punkt 11). Prioritet: **kjenne** (ny — plasseres etter IV-kjernen, merket «bør kjenne til»).
- **Innholdskontrakt:** MÅ KUNNE IDENTIFISERES OG SETTES OPP: **regresjons-diskontinuitet (regression discontinuity design, RDD)** — behandling tildeles ved en **terskel** $c$ på en løpende score (running variable); **sharp RDD** (alle over terskelen behandles) vs. **fuzzy RDD** (terskelen endrer bare *sannsynligheten* for behandling); **fuzzy RDD estimeres som 2SLS** med terskelindikatoren $\mathbb{1}[\text{score} > c]$ som **instrument** for behandlingen, og en **kontinuerlig funksjon av scoren** (minst lineær, ofte forskjellig helning på hver side: $I(x-c):I(x>c)$ fra 3.3) som kontroll; effekten er **lokal ved terskelen**; nøkkelantakelse: **potensielle utfall er kontinuerlige i scoren** ved terskelen (ingenting annet enn behandlingen hopper der); **robusthetssjekker**: bunching-/manipulasjons-histogram av scoren rundt terskelen, balanse i kovariater rundt terskelen. Tospråklig begrepsbank: løpende score (running/forcing variable), terskel (cutoff/threshold), skarp/uskarp RDD (sharp/fuzzy RDD), lokal effekt (local effect). Kobling: fuzzy RDD er et spesialtilfelle av IV/2SLS (Del 5-kjernen) — det er derfor den ligger her, ikke i en egen del.
- **Oppgavesjangre:** J. Mønstereksempel: «Et stipend tildeles studenter som skårer over 60 poeng på en opptaksprøve, men bare 70 % av de kvalifiserte tar det imot. Du vil estimere effekten av stipendet på fullføring. (a) Hvilket design er dette, og hvorfor er det 'fuzzy'? (b) Sett opp estimeringen som 2SLS — hva er instrumentet, den endogene variabelen og kontrollen? (c) Hvilken antakelse må holde ved terskelen, og hvordan sjekker du den?»
- **Typiske feil:** Behandle fuzzy RDD som sharp (bruke terskelindikatoren direkte som behandling); glemme den kontinuerlige score-kontrollen; ikke nevne kontinuitetsantakelsen; foreslå globale i stedet for lokale sammenligninger.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.5: Drill: kausalitetsoppgaven

- **id:** `econ3150-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ3150-5-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele den mindre kausalitetsoppgaven (20–40 % av settet): IV/Wald med RF/FS og betingelsesdrøfting, med DiD og fuzzy RDD som nære varianter.
- **Eksamensbelegg:** Dekker sjangrene H (100 %), I og J samlet — kausalitetsoppgaven som følger den store OLS-blokken i hvert sett siden 2022 (oppg. 2, 20–40 %). IV/Wald med RF/FS + betingelsesdrøfting er mest sannsynlig, DiD/RDD nære alternativer (prognose §7). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser designet (endogen variabel + instrument? terskel? før/etter × behandlet/kontroll?); 2) beregn IV som RF/FS (kryssingstabell ved binært instrument); 3) drøft **relevans** (signifikant første steg, $F>10$) og **eksklusjon** (konkret, kontekstforankret); 4) skriv 2SLS-stegene eksplisitt med kontroller; 5) tolk som LATE (compliers); 6) fang ugyldig/svakt instrument (uventet fortegn, svak FS); 7) ved RDD: identifiser fuzzy, sett opp 2SLS med terskelindikator + score-kontroll, nevn kontinuitetsantakelsen. Vis alle mellomsteg (ANSWER-HINT-stil). **Gjennomregnet eksamenscase med sensor-margnotater**. 10–15 oppgaver på eksamensnivå: flertall IV/Wald (binært og kontinuerlig instrument), 2–3 fuzzy RDD, kryssreferanse til DiD (kap. 6.1); alle med nyskrevne kontekster (militærtjeneste, lotteri, avstand, terskelstipend, reformår).
- **Oppgavesjangre:** H, I, J. Mønstereksempel: «En reform ga tilfeldig utvalgte kommuner et gratis svømmekurs-tilbud (instrument) for effekten av svømmekurs på antall drukningsulykker. (a) Regn IV-estimatet fra kryssingstabellen. (b) Drøff relevans og eksklusjon konkret. (c) Skriv 2SLS-stegene. (d) IV-estimatet har uventet fortegn — hva kan være galt?»
- **Typiske feil (analysen §5.10):** Hele IV-feilkatalogen samlet: hoppe over betingelsesdrøftingen, snu RF/FS, glemme kontroller i stegene, tolke LATE som ATE, behandle fuzzy RDD som sharp, ikke fange ugyldig instrument.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (se §4).

---

### Del 6 — Andre design og binære utfall

#### Kapittel 6.1: Difference-in-differences (DiD)

- **id:** `econ3150-6-1` · **number:** 6.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-4-1`, `econ3150-1-5`
- **kapitteltype:** teori
- **description:** 2×2-estimatet og regresjonsformen — med parallelle trender som den antakelsen alt hviler på.
- **Eksamensbelegg:** DiD (sjanger K) i 4/12 (33 %) og **voksende** (2 av 4 i 2022–25); nær alternativ til IV i kausalitetsoppgaven (prognose §7); common-trend-drøfting er nøkkelen. Prioritet: **kunne** (voksende).
- **Innholdskontrakt:** MÅ KUNNE REGNES OG SETTES OPP: **2×2-estimatet**
  $$\hat{\delta}_{DiD} = (\bar{y}_{\text{beh,etter}} - \bar{y}_{\text{beh,før}}) - (\bar{y}_{\text{kontroll,etter}} - \bar{y}_{\text{kontroll,før}})$$
  **regresjonsformen**: $y = b_0 + b_1(\text{after}\times\text{treated}) + b_2\,\text{treated} + b_3\,\text{after} + e$, der **$b_1$ er DiD-estimatet** (interaksjonskoeffisienten); tolkning av $b_2$ (nivåforskjell mellom gruppene før) og $b_3$ (felles tidstrend); **nøkkelantakelse: parallelle/felles trender (common/parallel trends)** — i fravær av behandling ville de to gruppene fulgt samme utvikling; skal forklares i konteksten og gjerne vurderes mot **pre-trend**-data (V2024-utsatt 2); `feols(y ~ after*treated, data=d)` eller med enhets-/tidsdummyer `i(firm)` (kobling 3.3). Tospråklig begrepsbank: forskjell-i-forskjeller (difference-in-differences, DiD), parallelle trender (parallel/common trends), behandlings-/kontrollgruppe (treatment/control group), pre-trend (pre-trend). Utledning: at interaksjonskoeffisienten = 2×2-differansen vises ved innsetting.
- **Oppgavesjangre:** K. Mønstereksempel: «En delstat innførte minstelønn i 2019; nabodelstaten gjorde ikke det. Sysselsettingen i behandlet delstat gikk fra 82 til 80, i kontrolldelstaten fra 85 til 84. (a) Regn DiD-estimatet. (b) Skriv regresjonsformen og si hvilken koeffisient som er DiD-estimatet. (c) Hvilken antakelse må holde, og hvordan kan du vurdere den?»
- **Typiske feil:** Bruke ren før/etter-differanse i behandlet gruppe (glemme kontrollgruppen); tolke $b_2$ eller $b_3$ som effekten; ikke nevne parallelle trender; tro at DiD alltid fjerner all skjevhet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.2: LPM og predikerte sannsynligheter

- **id:** `econ3150-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-1-2`
- **kapitteltype:** teori
- **description:** OLS på et binært utfall — den lineære sannsynlighetsmodellen, y>1-fella, og når probit/logit er å foretrekke for prediksjon.
- **Eksamensbelegg:** LPM/predikerte sannsynligheter (sjanger L) i 9/12 (75 %); den faste vrien er å regne en predikert verdi som overstiger 1 (eller er < 0) og diagnostisere **feilspesifikasjon** (V2024 e, V2023-utsatt b). Prioritet: **kunne**.
- **Innholdskontrakt:** MÅ BEHERSKES: **lineær sannsynlighetsmodell (linear probability model, LPM)** — OLS med binært utfall $y\in\{0,1\}$, der $\hat{y}$ tolkes som **predikert sannsynlighet** $\widehat{\Pr}(y=1)$; koeffisienten er endring i sannsynlighet i **prosentpoeng** per enhet $x$ (kobling 1.3 — prosentpoeng, ikke prosent!); **y>1-fella**: regn predikert verdi ved innsetting; hvis $\hat{y} > 1$ eller $\hat{y} < 0$ er modellen **feilspesifisert (misspecified)** for prediksjon, og **probit/logit** ville vært bedre (fordi de tvinger $\hat{P}\in[0,1]$); nøkkelpoeng: LPM og probit/logit gir typisk **svært like gjennomsnittlige marginaleffekter** — forskjellen betyr mest for prediksjon (ekstreme $x$), ikke for kausal tolkning; LPM har alltid heteroskedastisitet ⇒ robuste SE (kobling 2.1). Tospråklig begrepsbank: lineær sannsynlighetsmodell (linear probability model), predikert sannsynlighet (predicted probability), feilspesifisert (misspecified), gjennomsnittlig marginaleffekt (average marginal effect).
- **Oppgavesjangre:** L. Mønstereksempel: «$\widehat{\Pr(\text{sysselsatt})} = 0{,}3 + 0{,}04\cdot\text{utdaar}$. (a) Tolk koeffisienten — pass på enheten. (b) Finn predikert sannsynlighet for en person med 18 års utdanning. (c) Hva forteller resultatet deg om modellen, og hvilken modell ville vært bedre for prediksjon?»
- **Typiske feil (analysen §5.2, §5.9):** Tolke LPM-koeffisienten i prosent i stedet for prosentpoeng; ikke se at $\hat{y} > 1$ betyr feilspesifikasjon; tro at probit/logit gir vesentlig andre marginaleffekter; glemme at LPM krever robuste SE.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.3: Paneldata og fixed effects

- **id:** `econ3150-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ3150-1-1`
- **kapitteltype:** teori
- **description:** Innenfor-estimatoren, enhets- og tidsfaste effekter — og hva fixed effects IKKE fjerner. Fortsatt pensum, men fraværende i de siste ordinære settene.
- **Eksamensbelegg:** Paneldata/fixed effects (sjanger P) i 7/12 (58 %) — tungt 2014–2021, men **0 forekomster i ordinære sett 2022–25**; fortsatt pensum og kan komme igjen. FE-fallgruvene er en fast feilkilde (§5.13). Prioritet: **kjenne** (plasseres etter kjernestoffet, merket «bør kjenne til»).
- **Innholdskontrakt:** MÅ KUNNE SETTES OPP OG TOLKES: paneldata-modellen $y_{it} = \beta_0 + \beta_1 x_{it} + \alpha_i (+ \tau_t) + u_{it}$; **enhets-faste effekter (unit fixed effects) $\alpha_i$** fjerner alt tidsinvariant ved enheten; **within-estimatoren (within/fixed-effects estimator)** (avvik fra enhetsgjennomsnitt) vs. **LSDV** (least squares dummy variables — én dummy per enhet) gir samme estimat; **tids-faste effekter (time fixed effects) $\tau_t$** i tillegg; kritiske innsikter: (i) en **tidsinvariant kovariat droppes** ved enhets-FE pga. perfekt multikollinearitet (f.eks. `no_english`, kjønn); (ii) FE + tid-FE **eliminerer IKKE OVB** fra variabler som varierer *både* over tid og enhet; (iii) ved **T = 2** er within-estimatoren = **første-differanse (first difference)**; `feols(y ~ x | id + year, data=d)`-syntaks. Tospråklig begrepsbank: paneldata (panel data), faste effekter (fixed effects), innenfor-estimator (within estimator), første-differanse (first difference), tidsinvariant (time-invariant). Utledning: within-transformasjonen vises skjematisk.
- **Oppgavesjangre:** P. Mønstereksempel: «Du har lønnsdata for 500 personer over 4 år og legger inn person-faste effekter. (a) Hva fjerner disse, og hvorfor droppes kjønn fra modellen? (b) En kollega sier FE 'fjerner all utelatt variabel-skjevhet'. Har hun rett? (c) Ved bare to år — hva er forholdet mellom within-estimatoren og en første-differanse-regresjon?»
- **Typiske feil (analysen §5.13):** Tro at enhets- + tids-FE fjerner all OVB; ikke se at en tidsinvariant kovariat er kollineær med enhets-FE; blande within og between; tro at FE krever store T.
- **Quiz: 15 · Flashcards: 10**

#### Kapittel 6.4: Probit og logit — mekanikken

- **id:** `econ3150-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ3150-6-2`
- **kapitteltype:** teori
- **description:** Ikke-lineære modeller for binære utfall: predikert sannsynlighet og marginaleffekt. Fraværende i ordinære sett siden 2021, men lever i utsatt-settene.
- **Eksamensbelegg:** Probit/logit (del av sjanger L) i 7/12 (58 %), men **borte fra ordinære 2022–25** — dukker fortsatt opp i **utsatt-settene**. Prioritet: **kjenne** (kun utsatt-sett; plasseres etter LPM, merket «bør kjenne til»).
- **Innholdskontrakt:** MÅ KUNNE BRUKES (ikke utledes): $\Pr(y=1) = G(\beta_0 + \beta_1 x_1 + \dots)$ der **logit** $G(z) = \frac{1}{1+e^{-z}}$ (logistisk funksjon) og **probit** $G(z) = \Phi(z)$ (standardnormal fordelingsfunksjon); begge tvinger $\hat{P}\in[0,1]$ (derfor bedre enn LPM for prediksjon, kobling 6.2); **predikert sannsynlighet** ved innsetting og oppslag i $\Phi$/logistisk funksjon; **marginaleffekt** $\frac{\partial P}{\partial x} = \beta\cdot g(\cdot)$ (logit: $\beta\cdot p(1-p)$) — avhenger av hvor på kurven man er, derfor rapporteres **gjennomsnittlig marginaleffekt**; koeffisienten selv har ikke direkte prosentpoeng-tolkning (bare fortegn og signifikans); nøkkelpoeng: gjennomsnittlige marginaleffekter fra probit/logit ≈ LPM-koeffisientene. Tospråklig begrepsbank: logistisk regresjon (logit/logistic regression), probit (probit), fordelingsfunksjon (cumulative distribution function, CDF), marginaleffekt (marginal effect). Forkunnskap: normalfordelingsfunksjonen $\Phi$ fra `econ2130-2-5` (verifiser).
- **Oppgavesjangre:** L (probit/logit-variant). Mønstereksempel: «En logit-modell for sannsynligheten for å fullføre gir $\hat{z} = -1{,}2 + 0{,}3\cdot\text{motivasjon}$. (a) Finn predikert fullføringssannsynlighet ved motivasjon = 5. (b) Finn marginaleffekten der. (c) Hvorfor er probit/logit bedre enn LPM for slike prediksjoner?»
- **Typiske feil:** Tolke probit/logit-koeffisienten direkte som prosentpoeng (den må gjennom $g(\cdot)$); regne marginaleffekten som konstant; bruke $\Phi$ for logit eller den logistiske funksjonen for probit; tro at forskjellen fra LPM er stor for gjennomsnittlige marginaleffekter.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 6.5: Presisjon og utvalgsstørrelse — bakregning

- **id:** `econ3150-6-5` · **number:** 6.5 · **estimatedMinutes:** 40 · **prerequisites:** `econ3150-2-2`, `econ3150-2-3`
- **kapitteltype:** teori
- **description:** Å regne baklengs fra en p-verdi til standardfeil, og fra standardfeil til utvalgsstørrelse — den nye strekkoppgaven fra V2025.
- **Eksamensbelegg:** Presisjon ↔ utvalgsstørrelse (bakregne SE/n fra p-verdi) i 1/12 (8 %) — **ny V2025**; en «strekkoppgave» som skiller topp fra midt (nivå 3 punkt 12). Prioritet: **kjenne** (ny — merket «bør kjenne til»).
- **Innholdskontrakt:** MÅ KUNNE REGNES BAKLENGS: fra en oppgitt **tosidig p-verdi** til $|t|$ via **invers-normal**: $|t| = \Phi^{-1}(1 - p/2)$ (bruk vedlagt $\Phi^{-1}$-tabell); fra $t$ og estimat til **standardfeil**: $\operatorname{SE} = \hat{\beta}/t$; fra SE til **utvalgsstørrelse** via $\operatorname{SE} \approx \text{SD}/\sqrt{n}$ ⇒ $n \approx (\text{SD}/\operatorname{SE})^2$ (og at firedobling av $n$ halverer SE — kobling 2.1); CLT som begrunnelsen for normaltilnærmingen (forkunnskap `econ2130-2-6`, verifiser); anvendt: «hvor stort utvalg trengs for at et gitt estimat blir signifikant?». Tospråklig begrepsbank: presisjon (precision), invers-normal (inverse normal / quantile function), bakregning (back-calculation), utvalgsstørrelse (sample size). Utledningene her er selve ferdigheten.
- **Oppgavesjangre:** D (bakregningsvariant). Mønstereksempel: «Et estimat er 0,12 med tosidig p-verdi 0,034. (a) Finn t-verdien fra p-verdien. (b) Finn standardfeilen. (c) Hvis standardavviket i regressoren er kjent, omtrent hvor mange observasjoner ville halvert standardfeilen?»
- **Typiske feil:** Glemme å dele p-verdien på 2 (tosidig) før invers-normal; snu $\operatorname{SE} = \hat{\beta}/t$; glemme kvadratet i $n \approx (\text{SD}/\operatorname{SE})^2$; bruke $t$-tabell der invers-normal er riktig ved store $n$.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (se §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Drill: metodesignalene og signatursvarene

- **id:** `econ3150-7-1` · **number:** 7.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–6
- **kapitteltype:** drill
- **description:** Presisjonstrening på de korte formuleringene som avgjør uttellingen: assosiert vs. forårsaker, prosent vs. prosentpoeng, z vs. t, «alt annet likt», IV-betingelsene og R²-på-tvers-fella.
- **Eksamensbelegg:** Samler metodesignal- og konseptsvarene som ifølge analysen bærer poengene på tvers av alle sjangre: «assosiert med … alt annet likt» (aldri «forårsaker»), prosentpoeng vs. prosent, z vs. t, frekvenstolkningen av KI, homoskedastisitet ved F, at $R^2$ ikke kan sammenlignes på tvers av ulik $y$, de to IV-betingelsene, LPM-diagnosen, og «vis algebraen» ved enhetsendring. Prioritet: **perfekt**.
- **Innholdskontrakt:** Drillbank organisert som spørsmål–fasitformulering-par der fasitsvarene skrives i **eksakt eksamensklar form (2–4 setninger)**, hvert med henvisning til teorikapitlet: koeffisienttolkning i alle funksjonsformer (assosiert med … alt annet likt / keeping fixed); prosent vs. prosentpoeng-beslutningen; z-vs-t-valget (store $n$ ⇒ normaltabell); ensidig/tosidig fra spørsmålsformuleringen; KI-frekvenstolkningen (og den forbudte varianten med hvorfor den er gal); homoskedastisitet-antakelsen ved F-testen; $R^2$-på-tvers-fella; konstantledd-realisme; OVB-fortegnsregelen; IV-relevans (testes) vs. eksklusjon (argumenteres); LPM-y>1-diagnosen; «vis algebraen» ved enhetsendring; «assosiert vs. forårsaker»-refleksen. Format: spørsmål + fasitformulering, aldri mer enn nødvendig (ANSWER-HINT-stil). Tospråklig — hvert signatursvar med engelsk nøkkelterm.
- **Oppgavesjangre:** Kortsvar-varianter av A, C, D, F, G, H, L, M, Q. Mønstereksempel: «Formuler på høyst tre setninger hvorfor koeffisienten 0,08 i en $\log(\text{lonn})$-modell IKKE skal tolkes som 8 prosentpoeng, og hva den korrekte tolkningen er.»
- **Typiske feil:** Hele feilkatalogen i §5 i kortform — drillen finnes nettopp fordi disse formuleringene må sitte ordrett presist under tidspress.
- **Quiz: 20 · Flashcards: 45**

#### Kapittel 7.2: Øvingseksamen 1: 2022–23-malen (80/20)

- **id:** `econ3150-7-2` · **number:** 7.2 · **estimatedMinutes:** 180 · **prerequisites:** `econ3150-7-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett etter den tidlige regime-C-malen: én stor OLS-tolkningsblokk (80 %) på en R-utskrift, pluss en IV/DiD-oppgave (20 %).
- **Eksamensbelegg/miks:** Speiler V2022/V2023-malen: **oppgave 1 (80 %):** stor OLS-tolkningsblokk bygd på en gjengitt `feols`-utskrift med 5–6 regresjoner over ett lønn/utdanning-datasett (nyskrevne tall), presentert som **tekst-tabell** (kolonner reg1…reg6; rader per variabel med estimat og SE i parentes; $N$, $R^2$, RMSE nederst) — deloppgaver: koeffisienttolkning i nivå/log-nivå/log-log/dummy → konstantledd → t-test og KI (uvant nivå) → F-test → **OVB regnet baklengs** (finn ukjent korrelasjon) → enhetsendring med algebra → skrive én `feols`-linje; **oppgave 2 (20 %):** IV/Wald med RF/FS fra en kryssingstabell + relevans-/eksklusjonsdrøfting (eller DiD 2×2 som variant). Alle kontekster/tall nyskrevne. Løsningsforslag i **ANSWER-HINT-stil** (kompakt regnekjede + tolkningssetning) i `collapsible` per deloppgave, med `tip`-notat om at alle deloppgaver teller likt og tidsbudsjett (144/36 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2: V2024-malen (60/40)

- **id:** `econ3150-7-3` · **number:** 7.3 · **estimatedMinutes:** 180 · **prerequisites:** `econ3150-7-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2024-mønsteret: OLS-blokk (60 %) med tyngre kausalitets-vinkling, og en større IV/Wald-oppgave (40 %).
- **Eksamensbelegg/miks:** Speiler V2024 (katolsk-skole-typen): **oppgave 1 (60 %):** OLS-blokk på et helse-/skoledatasett (gjengitt `feols`-utskrift som tekst-tabell) med tyngre vekt på kausal tolkning + antakelser (navngi utelatte variabler) → funksjonsform → OVB begge veier (kvalitativt + baklengs-regning) → interaksjonsledd (ulik helning mellom grupper) → kvadratledd med gjennomsnittlig marginaleffekt; **oppgave 2 (40 %):** utvidet IV/Wald-oppgave — binært instrument, RF/FS fra kryssingstabell, SE for binære andeler, 2SLS-oppsett med kontroller, LATE-tolkning, identifiser et svakt/ugyldig instrument. Alle tall/kontekster nyskrevne. Løsningsforslag i ANSWER-HINT-stil med `tip` om vekting og tidsbudsjett (108/72 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3: V2025-malen (fireoppgave-varianten + prognose)

- **id:** `econ3150-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ3150-7-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter den nyeste malen med fire oppgaver av ulik vekt — inkludert de nye sjangrene: presisjon-bakregning, R-kode fra figur og fuzzy RDD.
- **Eksamensbelegg/miks:** Speiler V2025 (4 oppgaver, f.eks. 2/4/8/6 poeng) og dekker de nyeste sjangrene: **oppgave 1 (liten):** presisjon ↔ utvalgsstørrelse — bakregne SE/n fra en p-verdi (kap. 6.5); **oppgave 2 (liten–middels):** minimal korrekt spesifikasjon fra en beskrevet figur → skrive `feols`-koden (kap. 3.3); **oppgave 3 (stor):** OLS-tolkningsblokk på et boligpris-datasett (gjengitt utskrift som tekst-tabell) — funksjonsformer, konstantledd, KI/t/F, OVB baklengs, enhetsendring; **oppgave 4 (middels):** **fuzzy RDD** identifisert og satt opp som 2SLS (terskelindikator som instrument, kontinuerlig score-kontroll, kontinuitetsantakelse, robusthetssjekk). Alle tall/kontekster nyskrevne; R-utskrifter gjengitt som tekst-tabeller slik at settet kan løses uten programvare. Løsningsforslag i ANSWER-HINT-stil med `tip` om at alle deloppgaver teller likt og tidsbudsjett proporsjonalt med poeng.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.5 | 25+30+25+20+20 = **120** | 20+30+25+20+10 = **105** |
| 2 | 2.1–2.5 | 20+25+20+20+15 = **100** | 20+20+20+15+10 = **85** |
| 3 | 3.1–3.3 | 20+20+20 = **60** | 15+15+15 = **45** |
| 4 | 4.1–4.4 | 25+20+20+15 = **80** | 25+20+15+15 = **75** |
| 5 | 5.1–5.5 | 25+20+20+15+15 = **95** | 25+20+15+15+10 = **85** |
| 6 | 6.1–6.5 | 15+15+15+10+10 = **65** | 15+15+10+10+10 = **60** |
| 7 | 7.1–7.4 | 20+5+5+5 = **35** | 45+0+0+0 = **45** |
| **Sum** | **32 kap.** | **565 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 1 + 2 + 4 + 5 (den store blokken + kausalitets-
ryggraden + IV) bærer 395 av 565 quiz; koeffisienttolkningen (1.2) og
IV-estimatoren (5.1) er enkeltkapitlene med høyest kvote utenom drillene.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(ANSWER-HINT-stil) og poengfordeling. Omfang i minutter. Prøvene samles i ett
prøvekapittel per del (`econ3150-<del>-prove`, chapterNumber `<del>.P`) ved
wiring — bygges av samme agent som delen.

**Del 1 — OLS-modellen og koeffisienttolkning**
1. Prøve 1.A (30 min): Avlese `feols`-utskrift + enkel OLS for hånd — estimat, SE, N, R² (kap. 1.1).
2. Prøve 1.B (35 min): Koeffisienttolkning nivå/dummy/kontroller med «assosiert med … alt annet likt» (kap. 1.2).
3. Prøve 1.C (35 min): Funksjonsform — log-nivå/log-log/elastisitet, prosent vs. prosentpoeng, R²-på-tvers (kap. 1.3–1.4).
4. Prøve 1.D (45 min): Full OLS-tolkningsblokk på gjengitt utskrift (tekst-tabell), eksamensnivå — alle koeffisienttyper + konstantledd (sjanger A + B komplett).

**Del 2 — Statistisk inferens i regresjon**
1. Prøve 2.A (30 min): SE og presisjon + robuste SE-forståelse (kap. 2.1).
2. Prøve 2.B (40 min): t-test (tosidig, ensidig, mot c≠0) + p-verdi begge veier (kap. 2.2).
3. Prøve 2.C (35 min): KI på uvant nivå (86/68 %) med frekvenstolkning + KI↔test-broen (kap. 2.3).
4. Prøve 2.D (45 min): F-test i begge former mot Fₘ,∞ + full inferensblokk på eksamensnivå (kap. 2.4–2.5, sjanger C+D+E komplett).

**Del 3 — Funksjonsform, enhetsendring og R-kode**
1. Prøve 3.A (35 min): Enhetsendring med full algebra (nivå og log-modell) (kap. 3.1, sjanger M).
2. Prøve 3.B (40 min): Kvadratledd + gjennomsnittlig marginaleffekt + delta-metode-SE fra vcov (kap. 3.2, sjanger N).
3. Prøve 3.C (35 min): Skrive `feols`-kode + minimal spesifikasjon fra beskrevet figur (kap. 3.3, sjanger O).
4. Prøve 3.D (45 min): Blandet Del 3-sett på eksamensnivå: figur → spesifikasjon → marginaleffekt → enhetsendring.

**Del 4 — Kausalitet og utelatt variabel-skjevhet**
1. Prøve 4.A (35 min): Kausal tolkning + navngi konkrete utelatte variabler i kontekst (kap. 4.1, sjanger G).
2. Prøve 4.B (35 min): OVB kvalitativt — fortegnsregel og fortegnsendring når variabel legges til (kap. 4.2, sjanger F).
3. Prøve 4.C (45 min): OVB regnet baklengs — løs for ukjent kovarians OG korrelasjon fra to regresjoner (kap. 4.3, sjanger F).
4. Prøve 4.D (35 min): Sant/usant-sett — korrelasjon/kausalitet, R²/OVB, attrisjon, konsistens (kap. 4.4, sjanger Q).

**Del 5 — Instrumentvariabler, 2SLS og RDD**
1. Prøve 5.A (40 min): IV/Wald med RF/FS fra kryssingstabell + SE for binære andeler (kap. 5.1, sjanger H).
2. Prøve 5.B (35 min): Relevans- og eksklusjonsdrøfting + identifiser svakt/ugyldig instrument (kap. 5.2).
3. Prøve 5.C (35 min): 2SLS-stegene eksplisitt + LATE/compliers-tolkning (kap. 5.3, sjanger I).
4. Prøve 5.D (45 min): Full kausalitetsoppgave på eksamensnivå: IV/Wald ELLER fuzzy RDD som 2SLS (kap. 5.4–5.5, sjanger H+J komplett).

**Del 6 — Andre design og binære utfall**
1. Prøve 6.A (35 min): DiD — 2×2-estimat, regresjonsform, common-trend-drøfting (kap. 6.1, sjanger K).
2. Prøve 6.B (35 min): LPM — tolkning i prosentpoeng, y>1-diagnose, probit/logit-vurdering (kap. 6.2, sjanger L).
3. Prøve 6.C (35 min): Paneldata/FE — within/LSDV, droppet tidsinvariant kovariat, T=2-ekvivalens (kap. 6.3, sjanger P).
4. Prøve 6.D (40 min): Blandet «kjenne»-sett: probit/logit-marginaleffekt + presisjon-bakregning fra p-verdi (kap. 6.4–6.5).

### Øvingseksamener (3 komplette sett — se kap. 7.2–7.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | 2022–23 (80/20) | Stor OLS-tolkningsblokk 80 % (tolkning + inferens + OVB baklengs + enhetsendring + `feols`-linje) · IV/Wald eller DiD 20 % |
| Øvingseksamen 2 (kap. 7.3) | V2024 (60/40) | OLS-blokk 60 % (kausal tolkning + OVB begge veier + interaksjon + kvadratledd) · utvidet IV/Wald 40 % (RF/FS, 2SLS, LATE, ugyldig instrument) |
| Øvingseksamen 3 (kap. 7.4) | V2025 (fireoppgave) | Presisjon-bakregning · R-kode fra figur · OLS-tolkningsblokk · fuzzy RDD som 2SLS |

Til sammen dekker de tre settene samtlige 17 sjangre (A–Q) minst én gang, alle de
fire nye regime-C-sjangrene (skrive R-kode, minimal spesifikasjon fra figur,
fuzzy RDD, presisjon-bakregning), og både IV-, DiD- og RDD-varianten av
kausalitetsoppgaven. Alle R-utskrifter gjengis som **tekst-tabeller** slik at
settene kan løses uten programvare.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 t, åpen bok, engelsk, Inspera), de tre
   regimene og hvorfor boka bygger på regime C, den faste 80/20–60/40-malen og
   V2026-prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: perfekt
   (koeffisienttolkning 1.2–1.3, inferensblokken 2.2–2.5, kausalitet 4.1,
   OVB begge veier 4.2–4.3, IV-kjernen 5.1–5.3), kunne (funksjonsform/enhetsendring
   3.1–3.3, F-test, LPM 6.2, DiD 6.1, konseptspørsmål 4.4), kjenne (fuzzy RDD 5.4,
   paneldata 6.3, probit/logit 6.4, presisjon-bakregning 6.5, delta-metode-SE).
3. **Sjangerguiden** — de 17 oppgavetypene A–Q med løsningsoppskriftene fra
   drillkapitlene (1.5, 2.5, 4.3, 5.5, 7.1) i kortform.
4. **Sensorreglene** — de fem metareglene (kort og begrunnet; vis mellomsteg;
   aldri ja/nei; alle deloppgaver teller likt; bruk tabellene) + karakterskille-
   listen (OVB begge veier, genuin kausal skepsis, presisjons-bakregning,
   delta-SE, enhetsalgebra, prosentpoeng vs. prosent, z vs. t, R² ikke på tvers).
5. **Feilkatalogen** — de 13 typiske feilene samlet (kausalitetsspråk uten dekning,
   prosent vs. prosentpoeng, z vs. t, ensidig hale, homoskedastisitet ved F,
   R² på tvers, OVB-retning uten regning, konstantledd bokstavelig, LPM-diagnose
   glemt, IV-diagnostikk hoppet over, enhetsendring uten algebra, ja/nei uten
   begrunnelse, FE-fallgruver), hver med henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon (Stock & Watson + `fixest`)** — OLS-estimatoren,
   funksjonsform-tolkningene, inferens-kjeden ($t$/KI/$F$), OVB-formelen (begge
   veier), delta-metode-SE, IV = RF/FS, 2SLS-stegene, DiD, fuzzy RDD, paneldata,
   LPM/probit/logit — på én side, med markering «utlede/regne aktivt» (OVB baklengs,
   enhetsalgebra, delta-SE, IV fra kryssingstabell) vs. «kun bruke» (resten), og
   en **tospråklig begrepsbank** (norsk forklaring + engelsk term) i egen rute.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 (den store blokken sitter først) → 4 → 5 (kausalitetsryggraden
   og IV) → 3 (funksjonsform/kode parallelt) → 6 (kjenne-stoffet til slutt),
   prøver etter hver del, øvingseksamenene de tre siste ukene under tidspress
   (180 min, deloppgavene teller likt → proporsjonalt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ3150` med alle 32
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–Q og frekvenstallene som
   resten refererer til.
3. **Den store blokken i avhengighetsrekkefølge**: Del 1 → Del 2 (tolkning før
   inferens; inferens bygger på utskriftsavlesning fra 1.1).
4. **Kausalitetsryggraden**: Del 4 → Del 5 (IV bygger på OVB-innsikten; fuzzy RDD
   i 5.4 bygger på 2SLS i 5.3).
5. Del 3 (funksjonsform/kode — trenger 1.3 og 2.4) → Del 6 (andre design —
   trenger 4.1 og 1.2) → Del 7 (øvingseksamenene til slutt — de gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; prøvene (§4) i prøvekapitler
   `econ3150-<del>-prove` etter hver temadel.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (escape `"` i norske sitattegn; generer helst via `json.dump`);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med `\\`-escaping i JSON;
      konsistent notasjon ($\hat{\beta}$, $\operatorname{SE}$, $R^2$, $t$, $z$,
      $\tilde{\beta}_1$, $\hat{\beta}_{IV}$, $\Phi$, $\Phi^{-1}$, $F_{m,\infty}$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ3150-filer — **forbudte
      termer**: «Durbin–Watson», «GLS»/«WLS-utledning», «method of moments»,
      «momentgenererende», ren tidsserie/«autokorrelasjon» som pensumstoff
      (unntatt Del 0-avsnittet som eksplisitt avgrenser dem som utgått), og
      **«forårsaker»/«causes»** uten design-dekning (grep etter forekomster og
      verifiser at hver enten står i en kausalt identifisert kontekst
      (RCT/IV/RDD) eller avvises); **påkrevd**: «assosiert med … alt annet likt /
      keeping fixed» ved koeffisienttolkning; `feols`/`fixest`-syntaks;
      engelsk fagterm i parentes ved første forekomst.
- [ ] **Tospråklighet**: hvert `definition`-blokk på toppnivå har engelsk term
      som stikkord (grunnlag for flashcards); Symbol- og formellisten per
      delkapittel forklarer ALLE symboler + engelsk term.
- [ ] **Kausalitetsaksen**: hvert tolkningskapittel skiller eksplisitt
      assosiasjon fra kausalitet; ingen kausal påstand uten navngitt design.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvenstallene fra dette skjelettet), Forkunnskaper-blokk med **verifiserte**
      lenker (econ2130-lenker kun hvis boka er bygget — ellers klartekst),
      `collapsible` Symbol- og formelliste (per delkapittel, med engelsk term),
      Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå, R-utskrift
      som tekst-tabell der relevant), 6–12 øvinger med `solution` + `hints` og
      eksplisitt sjangerforankring, repetisjons-`collapsible`; drillkapitler har
      løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Kvotesum ≥ 565 quiz og ≥ 510 flashcards** per kvotetabellen
      (kontrollsummér mot §3-tabellen — kvoter er minimum, aldri underskrid).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener som sammen
      dekker sjangrene A–Q, alle fire nye regime-C-sjangrene og IV/DiD/RDD-
      variantene av kausalitetsoppgaven.
- [ ] **R-utskrifter**: gjengis som **tekst-tabeller** (kolonner reg1…regK, rader
      per variabel med estimat + SE i parentes, $N$/$R^2$/RMSE nederst) — aldri
      som bilde; all `feols`-kode er syntaktisk gyldig og forklart i ord.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne datasett/
      kontekster, egne variabelnavn; ingen oppgavetekst, fasit eller
      sensorformulering fra reelle sett (skjelettets mønstereksempler er selv
      omskrivninger og skal varieres videre, ikke kopieres ordrett inn);
      pensumlitteratur (Stock & Watson, Angrist & Pischke) refereres, aldri
      siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
