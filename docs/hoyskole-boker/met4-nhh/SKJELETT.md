# Bokskjelett: MET4 Empiriske metoder (NHH) — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (17 skoleeksamener V2017–V2025, 16 med fasit; de 8 nyeste V2022–H2025 lest
> grundig; 14 hjemme-prosjektsett skummet). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) med **lånte drøftingselementer** fra `DNA-drofting.md`
> (hybrid) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og
> gjentas ikke her. Hybridvalgene og avvikene fra DNA er dokumentert under
> «Avvik fra DNA-malen».

**Kritisk kalibrering (styrer HELE boka):** Boka målrettes mot **skoleeksamenen i
2025-formen** — 6-timers sett med **Del 1 Dataanalyse med R** (sammenhengende
hands-on-analyse av ett oppgitt `.Rdata`-datasett) + **Del 2 Regneoppgaver**
(frittstående). Hjemme-prosjektsporet (avviklet før 2025) er IKKE styrende.
IV/2SLS, difference-in-differences (DiD), regresjonsdiskontinuitet (RDD) og
paneldata/faste effekter bygges IKKE tungt i teoridelene — de forekommer aldri
(IV/DiD/RDD) eller kun marginalt (paneldata) på skoleeksamenen og omtales som
kjenne-stoff (se avvik 3–4). Formelark (`MET4Formler.pdf`) og R-kommandoliste
(`relevante_r_kommandoer.pdf`) følger med på eksamen → boka trener **bruk og valg
av** formler/kommandoer, ikke pugging.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `met4-nhh` |
| Tittel | **MET4 Empiriske metoder** |
| Institusjon | NHH (Norges Handelshøyskole) |
| Level | `'Høyskole'` |
| Arketype | **Regnefag/hybrid** — kvantitativt metodefag med fast oppgavemal og R-arbeidsflyt; drøftingselementer lånt i Del 6 og i tolkningssjangrene (Del 3–4) |
| Antall kapitler | **35** (1 eksamenskart + 30 tema + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 965 min ≈ 49 timer** |
| Quiz totalt | **565** (krav ≥500) |
| Flashcards totalt | **505** (krav ≥500) |

**Pitch (ett avsnitt):** MET4-skoleeksamen er «anvendt statistikk med R for
økonomer» — ikke matematisk statistikk med bevis. Fra 2025 er den et 6-timers sett
i to klart adskilte deler: **Del 1** er en sammenhengende dataanalyse på ett
oppgitt datasett (beskriv → test → regresjon/klassifiser → prediker/anbefal), og
**Del 2** er frittstående regneoppgaver (proporsjonstest, tidsrekke,
beslutningsteori). Fordi ALT trykt/egenskrevet materiale er tillatt og et formel-
og R-ark følger med, gir formelgjengivelse nesten null uttelling — poengene ligger
i **metodevalgene** (ensidig/tosidig? pooled/Welch? z/t?), i å **begrunne dem
uoppfordret**, og i å **konkludere i kontekst**. Fire søyler bærer settet:
hypotesetesting (100 % av settene), lineær regresjon (88 %), logistisk regresjon
med klassifisering (75 %) og tidsrekker (88 % — tungt og bredt, det som skiller
MET4 fra nabofagene). Boka er kalibrert mot nettopp dette: den driller
hypotesetest-oppskriften med begrunnelsesplikt, tolker logistisk regresjon **via
odds** (toppkandidat-markøren), gir tidsrekker en egen stor del, tar inn de ferske
2024–25-temaene (KNN, forvekslingsmatrise, forventet nettogevinst) som fullverdige
kapitler, lar hvert løsningsforslag ende i en **kontekstkonklusjon** slik sensor
vil se den, og kobler hvert kapittel til den konkrete R-utskriften/-kommandoen
eksamen bruker.

**Kritisk notasjonsregel (gjelder HELE boka):**
- **N(µ, σ²) angis ALLTID med VARIANS som andre argument** — men `rnorm(n, mean,
  sd)` tar **standardavvik**. Konverteringen $\sigma = \sqrt{\sigma^2}$ drilles
  begge veier; hvert kapittel som bruker både notasjonen og R skal ha en
  `warning`-blokk om fella. (Samme felle som i søsterboka ECON2130.)
- Norske fagtermer konsekvent: **forventningsrett** (ikke «unbiased»),
  **testobservator**, **kritisk verdi**, **signifikansnivå**, **standardfeil
  (SE)**, **hvit støy**, **stasjonær**. Hypoteser $H_0/H_1$ (eller $H_a$).
- Estimatorer med hatt: $\hat{p}$, $\hat{\beta}$, $\bar{X}$, $S$ (utvalg) mot
  $\sigma$ (populasjon). Pooled varians $S_p^2$. Odds og logit:
  $p = e^z/(1+e^z)$, $\text{logit}(p) = \log(p/(1-p))$. Tidsrekke: $Y_t = T_t + S_t
  + R_t$; AR(1) $R_t = \varphi R_{t-1} + u_t$.
- **Konklusjon i kontekst avslutter HVERT løsningsforslag** — aldri bare «forkast
  $H_0$», men «det ser ut til at kunder med tidlig skade kjører lengre». Dette er
  et ufravikelig krav i alle eksempler, øvinger og øvingseksamener.
- **Begrunnelsesplikt:** ethvert metodevalg (ensidig/tosidig, pooled/Welch, z/t,
  terskel, modell) begrunnes uoppfordret. «Metodefrihet med begrunnelsesplikt» er
  sensors faste regel.
- R i **base-R + `dplyr`/`ggplot2`** (og `glm`/`caret` for klassifisering);
  tidyverse-varianter nevnes som «også godtatt». R-kode kreves ikke i besvarelsen,
  men skal kunne skrives/leses uten R foran seg.
- **ALDRI** instrumentvariabler/2SLS/Wald, DiD, RDD, formelle bevis eller
  momentgenererende funksjoner, og ingen tung sannsynlighetsregning for hånd
  (kombinatorikk/Bayes/betinget sannsynlighet er nedtonet vs. ECON2130) — utelatt
  med vilje; omtales kun i Del 0 som «utenfor skoleeksamenens kjerne / hjemme-
  prosjektsporet». Den eneste tyngre utledningen som kreves aktivt er $E(Y_t)$ for
  AR(1) via geometrisk rekke.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*
(de fire søylene får flest kapitler + drillkapittel):

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Etablerer 2025-formen (Del 1 R + Del 2 regne) og sjangerkatalogen A–S. |
| 1 | Grunnlag: R, data og regneverktøy | 4 | Fundamentet Del 1 av eksamen bygger på: R-vokabular (**alle sett**), deskriptiv statistikk/visualisering (fast Del 1-åpning), regneregler E/Var + variansminimering (3/8), normalfordeling/CLT (3/8). «Kunne»-nivå, men uunnværlig verktøykasse. |
| 2 | Hypotesetesting og inferens | 6 | **Ryggraden — hypotesetest i 8/8 sett (100 %).** F-test lik varians (6/8) → to-utvalgs t pooled/Welch (7/8) → χ² (5/8) → to-proporsjon z (2/8) + paret t (ny) → drill. Begrunnelsesplikt-sjangeren driller her. **PERFEKT.** |
| 3 | Lineær regresjon | 6 | Andre søyle — koeffisienttolkning **7/8 (88 %)**, funksjonsform 6/8, prediksjon 5/8, diagnostikk 4/8, utelatt variabel 3/8. Tolkning etter funksjonsform er selve kjernen. **PERFEKT.** |
| 4 | Logistisk regresjon, klassifisering og beslutningsteori | 6 | Tredje søyle + det ferske, differensierende 2024–25-stoffet. Logistisk 6/8 (odds = toppkandidat-markør), klassifisering/ROC 2/8, KNN 2/8, forventet nettogevinst 1/8 — nåtidens differensierende stoff. **PERFEKT/store.** |
| 5 | Tidsrekker | 5 | Fjerde søyle — **7/8 (88 %), tungt og bredt.** Skiller MET4 skarpt fra nabofagene. Stasjonaritet, ACF/dekomponering, AR/MA/ARMA/ARIMA, eksp. glatting, prognose (kort + langtidskonvergens). Egen stor del. **PERFEKT/stor.** |
| 6 | Kausalitet, design og datakritikk | 3 | Kortere, **drøftingstung** del (hybrid). Kausalitet/seleksjon 3/8, datakritikk 2/8, paneldata 2/8 (kjenne). Verbal drøfting med A-besvarelser. **KUNNE/KJENNE.** |
| 7 | Eksamenstrening | 4 | Metodesignal-/begrunnelsesplikt-drill + **3 komplette øvings-skoleeksamener i 6-timers 2025-form** (Del 1 R + Del 2 regne). |

**Seksjonstitler (blir `sectionNames` i metadata — vises som «Kapittel N: …» på bokforsiden):**

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Grunnlag: R, data og regneverktøy |
| 2 | Hypotesetesting og inferens |
| 3 | Lineær regresjon |
| 4 | Logistisk regresjon, klassifisering og beslutningsteori |
| 5 | Tidsrekker |
| 6 | Kausalitet, design og datakritikk |
| 7 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**

1. **Drillkapitlene ligger inne i temadelene** (2.6, 3.6, 4.6, 5.5), ikke samlet i
   siste del, fordi sjangrene de driller er 75–100 %-gjengangere som må sitte
   umiddelbart etter teorien (samme grep som econ2130/econ1310). Del 7 beholder
   metodesignal-/begrunnelsesplikt-drillen (7.1) og de tre øvings-skoleeksamenene.
2. **Del 1 er en grunnlags-/verktøydel, ikke en «tema»-del** i DNA-forstand. R er
   ikke et pensumtema, men går igjen i alle sett og bærer hele Del 1 av
   6-timerseksamenen; regneregler/CLT er forutsetning for inferens-delen. Analysen
   krever både R-integrert stoff i hvert relevant kapittel OG et samlet
   verktøysted.
3. **IV/2SLS/DiD/RDD utelates fra teoridelene** til tross for NHHs emnebeskrivelse
   (som fremhever kausal inferens/instrumentvariabler/DiD/RDD). Begrunnelse:
   **0 forekomster i skole-settene** — dette stoffet levde kun i det nå avviklede
   hjemme-prosjektsporet. Får kun **kjenne-omtale i Del 0** (kap. 0.1) med
   eksplisitt henvisning til at hjemme-sporet er fjernet fra og med 2025. Boka
   følger skoleeksamenens faktiske innhold, ikke emnebeskrivelsens aspirasjon.
4. **Paneldata/faste effekter — dokumentert mikroavvik fra kalibreringen.**
   Kalibreringsinstruksen grupperte paneldata sammen med IV/DiD/RDD (Del 0-omtale).
   Analysen viser imidlertid at paneldata FAKTISK forekom **2/8 på skoleeksamen**
   (H2022, H2024) og klassifiseres der som **nivå 3 «bør kjenne til»** (§7.11).
   Valg: paneldata omtales i Del 0 (som instruert) OG får en kort **«bør kjenne
   til»-seksjon i kap. 6.2** (within-transformasjon; tidsinvariant kovariat kan
   ikke estimeres innen FE) — fordi et 2/8-tema på gjeldende eksamensform ikke bør
   være helt fraværende fra teksten. IV/2SLS/DiD/RDD forblir rene Del 0-omtaler
   (0/8). Dette er den eneste bevisste avviket fra kalibreringens gruppering, gjort
   for å være tro mot analysens egne frekvenstall.
5. **Del 6 låner drøftingselementer** fra `DNA-drofting.md` (hybridregelen i
   README): kausalitet/seleksjon/datakritikk testes som **verbal drøfting** (3/8
   hver), ikke som regning. Kapitlene bruker drøftings-DNA-ens struktur
   (posisjoner/spenninger → momentliste-løsninger → A-besvarelse med margnotater),
   men beholder regnefagets eksempel-/oppgaveskall. Se hybrid-seksjonen under.
6. **Tolkningssjangrene i Del 3–4 er hybride.** En stor andel av poengene ligger i
   **verbal tolkning** (koeffisienttolkning etter funksjonsform, odds-tolkning,
   sensitivitet–spesifisitet-avveining, beslutningsanbefaling). Disse kapitlene får
   drøftings-lånte **A-besvarelser** som viser hvordan man skriver tolkningen og
   begrunner metodevalget — ikke bare regnestykket. Regnefagets kapittel-DNA er
   fortsatt basen (Eksamensvinkel/Forkunnskaper/Symbol-liste/eksempler/øvinger).
7. **Øvingseksamenene er i 6-timers 2025-form** med eksplisitt Del 1 (R-dataanalyse
   beskrevet som **tekst-utskrifter** studenten tolker/skriver kode mot) + Del 2
   (frittstående regneoppgaver). 3 sett (DNA-en tillater 2–4).

**Hybrid-valg (regnefag base + lånt fra DNA-drøfting) — oppsummert:**

| Element | Base (DNA-regnefag) | Lånt fra DNA-drøfting | Hvor |
|---|---|---|---|
| Kapittelskall (Eksamensvinkel/Forkunnskaper/Symbol-liste/øvinger) | ✓ | | Alle kapitler |
| Regne-/utledningsstoff, drillkapitler, øvingseksamener | ✓ | | Del 1–5, 7 |
| Verbal drøftingsstruktur (posisjoner/spenninger → momentliste) | | ✓ | Del 6 (6.1–6.3) |
| A-/modellbesvarelse med margnotater om hva som gir uttelling | delvis (drill) | ✓ (tolkning) | Del 3.1/3.2, 4.1/4.3/4.5, Del 6, Del 7 |
| «Konklusjon i kontekst» som eksplisitt sensorbelønnet håndverk | | ✓ | Alle løsningsforslag |

**Kryssbok-lenker (forkunnskaper — `[tittel](/bok/<courseId>/<chapterId>)`, lenk
KUN til verifiserte kapitler):** Grunnleggende sannsynlighet, normalfordeling og
derivasjon forutsettes fra VGS/tidligere emner. Naturlige lenkemål (verifiser
id-en før lenking):
- **ECON2130 Statistikk 1** (`econ2130`, live søsterbok med stor overlapp i
  inferens-kjernen) — normalfordeling/standardisering, CLT, hypotesetestens
  anatomi, KI-tolkning. Sannsynlige mål: `econ2130-2-5` (normal), `econ2130-2-6`
  (CLT), `econ2130-4-3` (KI), `econ2130-5-1` (testoppskrift). **Verifiser før
  lenking.**
- **Derivasjon** (variansminimering, kap. 1.3) → R1/R2-derivasjonskapittel i
  VGS-bøkene. Verifiser id.
- Økonomiske kontekster (BNP, inntekt, avkastning) kan lenke til `econ1310-1-1`
  (finnes). Lenk aldri til kapitler du ikke har verifisert at eksisterer.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–S) refererer til
oppgavetype-katalogen som gjengis i Del 0 (fra analysen §3):
A F-test lik varians · B to-utvalgs t · C kjikvadrat (uavhengighet + goodness-of-fit) ·
D to-proporsjon z · E multippel regresjon koeff.-tolkning · F KI for parameter/koeff. ·
G prediksjon fra regresjon · H regresjonsdiagnostikk · I utelatt variabel/endogenitet ·
J logistisk regresjon (odds) · K klassifisering (terskel/forvekslingsmatrise/ROC) ·
L KNN · M beslutningsteori/forventet nettogevinst · N tidsrekker · O regneregler/
variansminimering · P normal/CLT · Q kausalitet/seleksjon (verbal) · R datakritikk ·
S paneldata/faste effekter (kjenne).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes MET4

- **id:** `met4-nhh-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (6-timers Del 1 R + Del 2 regne), de fire søylene, temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 17 sett. Skal gjengi: (i) **formhistorikken**: 3-timers klassisk inferens (2017–18) → 3–4 t anvendt regresjon + tidsrekker (2019–23) → **6-timers bredt R-regime fra 2024–25 med eksplisitt Del 1 R + Del 2 regne**; hjemme-prosjektsporet (48 t gruppe) avviklet før 2025 — dets stoff (IV/DiD/RDD/paneldata/GBM) er IKKE skoleeksamenens kjerne; (ii) **strukturen**: 5–7 oppgaver, **hver deloppgave teller likt (maks 10 poeng)**; Del 1 er sammenhengende hands-on-analyse på ett oppgitt `.Rdata`-datasett (beskriv → test → regresjon/klassifiser → prediker/anbefal), Del 2 er frittstående regneoppgaver; kalkulator + alle trykte hjelpemidler + `MET4Formler.pdf` + `relevante_r_kommandoer.pdf`; (iii) **temafrekvens-tabellen** (8 nyeste sett): hypotesetest 100 %, to-utvalgs t 88 %, regresjon 88 %, tidsrekker 88 %, F-test lik varians 75 %, logistisk regresjon 75 %, funksjonsform 75 %, χ² 63 %, prediksjon 63 %, KI 50 %, diagnostikk 50 %, regneregler/varians 38 %, CLT 38 %, kausalitet/seleksjon 38 %, utelatt variabel 38 %, to-proporsjon z 25 %, paneldata 25 %, klassifisering/ROC 25 % (ny), KNN 25 % (ny), invers logit 25 %, datakritikk 25 %, beslutningsteori 13 % (ny), AIC 13 %, paret t 13 %; (iv) at **IV/2SLS/DiD/RDD (0/8) og tunge sannsynlighetsutledninger/bevis bevisst er utelatt**, og at paneldata er nivå-3-kjennestoff; (v) sensorens **seks metaregler**: hver deloppgave teller likt; ingen stilpoeng (innhold, ikke utseende); R-kode kreves ikke (men gir ikke trekk); metodefrihet MED begrunnelsesplikt; konklusjon i kontekst avslutter hvert resonnement; delpoeng finmasket (typisk 3 oppsett + 4 gjennomføring + 3 konklusjon), følgefeil straffes ikke dobbelt; (vi) **toppkandidat-markørene**: begrunner metodevalget uoppfordret (pooled/Welch koblet til F-test, ensidig-valget, z ved stor n), tolker logistisk **via odds**, ser modellkritikken, fanger kausalitets-/seleksjonspoenget, kobler beslutning til statistikk (forventet gevinst).
- **Innholdskontrakt:** Sjangerkatalogen A–S presenteres som studentens sjekkliste med frekvens og typisk vekt. **Prognosen for neste sett (2025-malen)**: Del 1 R-dataanalyse (deskriptiv start → F-test + to-utvalgs t og/eller χ² → regresjon lineær og/eller logistisk med tolkning + prediksjon → klassifisering med terskel/forvekslingsmatrise/KNN + gjerne forventet-gevinst-vurdering); Del 2 regneoppgaver (én proporsjons-/sannsynlighetsoppgave, én tidsrekkeoppgave [stasjonaritet + dekomponering/ARIMA/glatting + prognose], gjerne en kausalitets-/datakritikk- eller beslutningsteoretisk oppgave). Mest sannsynlige tillegg: KNN-vs-logistisk-anbefaling, invers logit, forventet-gevinst-sammenligning. Leseplan: Del 2 (hypotesetesting) + tidsrekker (Del 5) + logistisk/klassifisering (Del 4) er «må perfekt»; Del 1 + 3 + 6 «må kunne»; nivå-3-temaene (paneldata, paret t, AIC, enhetsendring, E(Yₜ)-utledning) merkes. Avslutt med tidsstrategi: likevektet tidsbudsjett over deloppgavene (≈ 360 min).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Del 1 har 4 deloppgaver og Del 2 har 3 — hver teller likt. Sett opp et tidsbudsjett for de 360 minuttene, og forklar hvorfor du ikke bør bruke 90 minutter på den første tidsrekkeoppgaven.»
- **Typiske feil:** Metafeilene — regne uten ord (aldri full uttelling i MET4); begrunne ikke metodevalget; hoppe over konklusjonen i kontekst; feilprioritere tid mot enkeltoppgaver som teller likt; pugge formler/R som ligger i det medfølgende arket.
- **Quiz: 10 · Flashcards: 10**

---

### Del 1 — Grunnlag: R, data og regneverktøy

#### Kapittel 1.1: R-verktøykassen for MET4

- **id:** `met4-nhh-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Hele R-vokabularet eksamen krever — lest og skrevet uten R foran deg, og kjørt på et oppgitt `.Rdata`-datasett i Del 1.
- **Eksamensbelegg:** R (skrive/forklare/tolke) i **alle sett**; Del 1 av 6-timersformen ER en R-arbeidsflyt. R-kode kreves ikke i besvarelsen, men må kunne skrives/leses — «så lenge sensor forstår algoritmen» gis full uttelling. Prioritet: **perfekt** (vokabularet), verktøykapittel.
- **Innholdskontrakt:** R-vokabularet KONTRAKTFESTES (analysen §6.7): innlasting `load`/`read.csv`; `dplyr` (`filter`/`select`/`pull`/`mutate`), `$`-indeksering, `ifelse` for indikatorvariabler; `mean`/`sd`/`var`/`summary`/`quantile`; `table`/`prop.table`; fordelings-/kvantilfunksjoner `qnorm`/`pnorm`/`qt`/`qf`/`qchisq` (og deres rolle som «kalkulator» for kritiske verdier i Del 2); test-funksjoner `t.test` (`var.equal=`, `alternative=`, `conf.level=`), `var.test`, `chisq.test` (`p=`), `prop.test`; modell-funksjoner `lm`/`glm` (`family=binomial`)/`summary`/`coef`/`confint`/`predict` (`type="response"`); `exp`/`log`; `ggplot2` (`geom_boxplot`/`geom_histogram`/`geom_bar`); klassifisering `caret::train(method="knn")`; tidsrekke `arima`/glatting. To arbeidsmåter demonstreres eksplisitt: (i) skrive/forklare koden linje for linje uten R foran seg (sensor vurderer algoritmen, ikke syntaks); (ii) kjøre på et lite oppgitt eksempeldatasett. Merk **N(µ, σ²)-vs-`rnorm(sd)`-fella** (kontraktfestet `warning`). Poengter at R aldri er «pynt» — Del 1 er ren hands-on R.
- **Oppgavesjangre:** Grunnlag for N (R-dataanalyse). Mønstereksempel: «Forklar linje for linje hva denne koden gjør: `d <- d %>% filter(!is.na(inntekt)); d$hoy <- ifelse(d$utd >= 13, 1, 0); tapply(d$inntekt, d$hoy, mean)` — og skriv koden som lager et boksplott over inntekt for hver av de to gruppene.»
- **Typiske feil:** Pugge kode uten å kunne forklare hva hver linje gjør; blande `qf`/`qt`/`qchisq`; glemme `type="response"` i `predict` for `glm`; skrive kode som «ser riktig ut» men beskriver feil algoritme; feil argumentrekkefølge i `t.test` slik at `alternative` ikke matcher $H_1$.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.2: Deskriptiv statistikk og datavisualisering

- **id:** `met4-nhh-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-1-1`
- **kapitteltype:** teori
- **description:** Boksplott, histogram, søylediagram og `summary` — Del 1s faste deskriptive åpning, tolket i ord med begrunnelse.
- **Eksamensbelegg:** Deskriptiv start (boksplott/histogram/`summary`/søylediagram) er den **faste åpningen på Del 1** i 2024–25-settene (V2025, H2025); tolkning må begrunnes for uttelling. Prioritet: **kunne** (høyfrekvent og billig).
- **Innholdskontrakt:** `summary`-utskriftens seks tall lest linje for linje; kvartiler/persentiler i ord; standardavvik som typisk avvik i samme enhet som dataene; **mean vs. median som skjevhetsindikator** (mean > median → høyreskjev); **boksplott** (median, kvartiler, utliggere, gruppesammenligning); **histogram** (sentrum/spredning/form); **søylediagram** for kategoridata; avlese fordelingsform (symmetri/haletyngde) — grunnlag for CLT-vurdering (1.4) og residualdiagnostikk (3.4). Alle figurer vises med `ggplot2`-kommandoen (`geom_boxplot`/`geom_histogram`/`geom_bar`) OG base-R-alternativet. Datakritikk (misvisende figur) hører til kap. 6.3 — her lærer man å LESE figuren riktig.
- **Oppgavesjangre:** Del av N. Mønstereksempel: «`summary(kjorelengde)` gir median 8 200 og mean 11 400, og boksplottet har en lang hale oppover. Hva forteller forskjellen mellom median og gjennomsnitt om fordelingens form, og hvilken konsekvens har det for en senere t-test?»
- **Typiske feil:** Tolke persentilen baklengs; oppgi tallet uten å svare på det som spørres (tolkning); overse at høyreskjevhet påvirker gyldigheten av senere inferens; forveksle varians og standardavvik i figursammenligning.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.3: Regneregler for forventning og varians — og variansminimering

- **id:** `met4-nhh-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-1-2`
- **kapitteltype:** teori
- **description:** E og Var av lineærkombinasjoner med kovariansleddet som eksplisitt krav — og vekten som minimerer variansen, funnet ved derivasjon.
- **Eksamensbelegg:** Sjanger O i **3/8** (V2023 variansminimering via derivasjon; grunnlaget for AR(1)-utledningen i 5.3). Kravet: **kovariansleddet må med** når variablene ikke er uavhengige. Prioritet: **kunne** (variansminimering: nivå 3 / strekk).
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT: $E(aU+bV) = aE(U)+bE(V)$ (gjelder ALLTID); $\text{Var}(aU+bV) = a^2\text{Var}(U) + b^2\text{Var}(V) + 2ab\,\text{Cov}(U,V)$ — kovariansleddet er et selvstendig poeng, faller bort KUN under uavhengighet; konstanter ut i annen potens; $\text{Var}(U-V) = \text{Var}(U)+\text{Var}(V)$ under uavhengighet (ikke minus). **Variansminimering** (kunne utlede aktivt, 3–5 linjer): for $Y = wU + (1-w)V$, deriver $\text{Var}(Y)$ mhp. $w$, sett lik null → $w = (\sigma_v^2 - \sigma_{uv})/(\sigma_u^2 + \sigma_v^2 - 2\sigma_{uv})$; tolk resultatet (mest vekt på den mest presise/minst korrelerte). Bro fremover: samme geometrisk-rekke-teknikk gir $E(Y_t)$ for AR(1) i 5.3. Derivasjon forutsettes fra VGS (kryssbok-lenke til R1/R2-derivasjon — verifiser id).
- **Oppgavesjangre:** O. Mønstereksempel: «To måleserier $U$ og $V$ har varians 4 og 9 og kovarians 2. Finn vekten $w$ i $Y = wU + (1-w)V$ som gjør variansen til $Y$ minst mulig, og forklar hvorfor kovariansleddet ikke kan ignoreres her.»
- **Typiske feil:** Glemme kovariansleddet når variablene ikke er uavhengige (§5.13); glemme kvadratet på konstanten; optimere uten å derivere/sjekke; trekke variansen ut av en differanse med minustegn.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.4: Normalfordeling, CLT og normaltilnærming

- **id:** `met4-nhh-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-1-3`
- **kapitteltype:** teori
- **description:** Z-standardisering, sentralgrenseteoremet navngitt, og andelen som ≈ normal — grunnlaget for hele inferens-delen. Med notasjonsfella N(µ, σ²) mot rnorm(sd).
- **Eksamensbelegg:** Sjanger P i **3/8** (eksplisitt CLT-begrunnelse, normaltilnærming av sum/snitt/andel; H2025 «CLT-normaltilnærming»). CLT skal **navngis** når den brukes; grunnlaget for proporsjonstesten (2.5) og for at store-n gir kritisk verdi ≈ 1,96. Prioritet: **kunne** (nær perfekt — fundament).
- **Innholdskontrakt:** $X \sim N(\mu, \sigma^2)$ — **variansen som andre argument, alltid**; standardisering $Z = (X-\mu)/\sigma$ og oppslag med `pnorm`/`qnorm` (og tabell); symmetriregler; **CLT**: sum/gjennomsnitt/andel er tilnærmet normalfordelt for stort $n$ uansett utgangsfordeling — **navngis ved bruk**; andel $\hat{p} = \bar{X}$ av dummyer er $\approx N(p, p(1-p)/n)$ (grunnlaget for 2.5); når tilnærmingen svikter (lite/skjevt utvalg). **KONTRAKTFESTET `warning`-blokk**: $N(\mu, \sigma^2)$ bruker varians, men `rnorm(n, mean, sd)` bruker standardavvik — konverteringen $\sigma=\sqrt{\sigma^2}$ drilles begge veier. Ingen andre kontinuerlige fordelinger (eksponensial/uniform aldri testet).
- **Oppgavesjangre:** P. Mønstereksempel: «I en spørreundersøkelse svarer 320 av 800 ja. Begrunn med sentralgrenseteoremet hvorfor andelen kan behandles som normalfordelt, og finn den tilnærmede sannsynligheten for at andelen i et nytt utvalg av samme størrelse overstiger 0,45.»
- **Typiske feil:** Bruke variansen som sd i standardiseringen (glemme roten); lese $N(\mu,\sigma^2)$ som om andre argument var sd; bruke CLT uten å navngi/begrunne den; normaltilnærme ukritisk ved lite/skjevt utvalg; blande fordelingen til $X$ og til $\bar{X}$.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 1:** 4 prøver (se §4).

---

### Del 2 — Hypotesetesting og inferens *(prioritet: PERFEKT)*

#### Kapittel 2.1: Hypotesetestens anatomi og begrunnelsesplikten

- **id:** `met4-nhh-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `met4-nhh-1-4`
- **kapitteltype:** teori
- **description:** Firetrinnsoppskriften fasitene følger slavisk — med ensidig/tosidig- og z-vs-t-valget som poengene sensor alltid ser etter, og konklusjonen i kontekst.
- **Eksamensbelegg:** Hypotesetesting i **8/8 sett (100 %) — alltid ryggraden.** Metodesignalene: retningsbestemt spørsmål («høyere», «kortere») → ensidig $H_1$; nøytralt spørsmål → tosidig; ved store utvalg er kritisk verdi ≈ 1,96 (tosidig) / 1,64 (ensidig). Tosidig på et ensidig spørsmål gir «noe, men ikke full uttelling». Prioritet: **perfekt**.
- **Innholdskontrakt:** Firetrinnsoppskriften KONTRAKTFESTES: (1) definer notasjonen (hva er $\mu$/populasjonene?) og sett opp $H_0$/$H_1$ — retning fra spørsmålsformuleringen; (2) velg testobservator og **begrunn** fordelingen (z ved stor n/kjent varians, t ved liten n/estimert varians); (3) velg signifikansnivå på forhånd; (4) sammenlign mot kritisk verdi (`qnorm`/`qt`/`qf`/`qchisq`) ELLER p-verdi og **konkluder i kontekst** — aldri bare «forkast $H_0$». KI-broen (sjanger F): $\hat{\theta} \pm 1{,}96\cdot\text{SE}$ (95 %, stor n — begrunn), tosidig test ⇔ nullverdi utenfor KI; p-verdi som «laveste nivå som gir forkastning»; «ikke forkast» ≠ «bevist $H_0$». Dette kapitlet er malen alle testkapitlene 2.2–2.5 følger.
- **Oppgavesjangre:** Overordnet hypotesetest-sjanger (rammen om A–D). Mønstereksempel: «En ny rutine ga gjennomsnittlig behandlingstid 14,3 min ($s=3{,}1$, $n=71$) mot 15 min før. Formuler hypoteser for at rutinen er *raskere*, forklar hvorfor alternativet er ensidig og hvorfor du kan bruke z, gjennomfør testen på 5 %-nivå og konkluder i kontekst.»
- **Typiske feil (§5.3, §5.12):** Tosidig test på ensidig spørsmål (redusert uttelling); regne testobservator uten hypoteseoppsett/kontekst; konkludere «forkaster $H_0$» og stoppe; tolke «ikke forkast» som bevis; velge nivået etter å ha sett resultatet.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.2: F-testen for lik varians — forspillet til t-testen

- **id:** `met4-nhh-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-2-1`
- **kapitteltype:** teori
- **description:** Test om to varianser er like — med største varians i telleren, og SE→SD-fella som koster 3 poeng.
- **Eksamensbelegg:** Sjanger A i **6/8** — den mest stabile enkeltsjangeren, og premisset for pooled-vs-Welch-valget i t-testen. Prioritet: **perfekt**.
- **Innholdskontrakt:** $H_0\!: \sigma_1^2 = \sigma_2^2$ mot tosidig $H_1$; **legg den STØRSTE estimerte variansen i telleren** slik at bare høyre-hale-kritisk verdi trengs: $F = S^2_{\text{stor}}/S^2_{\text{liten}}$ mot $F_{0{,}975;\,n_1-1,\,n_2-1}$ (`qf(0.975, df1, df2)`); `var.test` i R. Konkluder — og **bruk resultatet til å velge pooled (lik varians) vs. Welch (ulik varians)** i 2.3. **KONTRAKTFESTET `warning` (SE→SD-fella):** når bare standardfeil SE er oppgitt, regn om til standardavvik $S = \text{SE}\cdot\sqrt{n}$ FØR variansene settes inn (−3 poeng ellers, eksplisitt H2024).
- **Oppgavesjangre:** A. Mønstereksempel: «To avdelinger har utvalgsstandardavvik $s_1 = 12$ ($n_1 = 25$) og $s_2 = 7$ ($n_2 = 31$). Test på 5 %-nivå om variansene er ulike, og forklar hva svaret betyr for valget av testobservator i en påfølgende sammenligning av gjennomsnittene.»
- **Typiske feil (§5.1, §5.2):** SE brukt der SD kreves (glemme $S = \text{SE}\sqrt{n}$); ikke legge største varians i telleren (feil hale/kritisk verdi); ikke koble F-resultatet til pooled/Welch-valget.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.3: To-utvalgs t-test — pooled og Welch

- **id:** `met4-nhh-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `met4-nhh-2-2`
- **kapitteltype:** teori
- **description:** Kjernesjangeren: sammenlign to gjennomsnitt med pooled ved lik varians, Welch ved ulik — og la F-testen bestemme valget.
- **Eksamensbelegg:** Sjanger B i **7/8 (88 %)** — kombinasjonen F-test → to-utvalgs t er MET4s mest stabile oppgavekjede. R-løsning (`t.test(..., var.equal=, alternative=)`) gir full pott, men argumentrekkefølgen må matche $H_1$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Definer µ-notasjon og $H_0\!: \mu_1 = \mu_2$ med riktig ensidig/tosidig $H_1$; **pooled** ved lik varians: $S_p^2 = [(n_1-1)S_1^2 + (n_2-1)S_2^2]/(n_1+n_2-2)$, $T = (\bar{X}_1-\bar{X}_2)/(S_p\sqrt{1/n_1 + 1/n_2}) \sim t_{n_1+n_2-2}$; **Welch** ved ulik varians: $T = (\bar{X}_1-\bar{X}_2)/\sqrt{S_1^2/n_1 + S_2^2/n_2}$; ved store utvalg kritisk verdi ≈ 1,96/1,64. Valget mellom pooled/Welch **begrunnes fra F-testen** (2.2). `t.test`-utskriften forklares linje for linje (t, df, p-verdi, KI, gruppegjennomsnitt). Konkluder i kontekst, gjerne med **målt effekt** $\bar{X}_1-\bar{X}_2$. Uavhengighet MELLOM gruppene påpekes.
- **Oppgavesjangre:** B. Mønstereksempel: «120 kursdeltakere ($\bar{x}_1 = 68{,}4$, $s_1 = 9{,}8$) og 140 uten kurs ($\bar{x}_0 = 65{,}1$, $s_0 = 10{,}3$). Etter en F-test som ikke forkaster lik varians: test på 5 %-nivå om kursdeltakerne skårer *høyere*, og forklar hva en `t.test`-utskrift ville vist.»
- **Typiske feil (§5.3, §5.4):** Pooled vs. Welch valgt uten kobling til F-testen; feil ensidig/tosidig; feil frihetsgrader for pooled t; `alternative`-argument som ikke matcher $H_1$; konklusjon uten kontekst.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.4: Kjikvadrattest — uavhengighet og goodness-of-fit

- **id:** `met4-nhh-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-2-1`
- **kapitteltype:** teori
- **description:** To χ²-varianter: er to kjennetegn uavhengige, og passer dataene en oppgitt fordeling?
- **Eksamensbelegg:** Sjanger C i **5/8** — begge variantene forekommer (uavhengighet: V2022, V2025; goodness-of-fit: H2023, H2024, H2025). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Uavhengighet:** krysstabell (`table`), $H_0$: kjennetegnene er uavhengige; forventede frekvenser $e_{ij} = f_{i\bullet}f_{\bullet j}/n$; $\chi^2 = \sum (f_{ij}-e_{ij})^2/e_{ij}$; $(r-1)(c-1)$ frihetsgrader; `chisq.test`. **Goodness-of-fit:** $H_0$: $p_1,\dots,p_k$ har oppgitte verdier (f.eks. alle $=1/3$); $e_i = n p_i$; $k-1$ frihetsgrader; `chisq.test(x, p=p0)`. Kritisk verdi `qchisq(1-α, df)` (høyre hale). Konkluder i kontekst.
- **Oppgavesjangre:** C. Mønstereksempel: «En terning kastes 180 ganger med observerte frekvenser [oppgitt]. Test på 5 %-nivå om terningen er rettferdig (goodness-of-fit), og forklar hva forkastning ville betydd.»
- **Typiske feil:** Feil frihetsgrader (blande de to variantene); regne forventede frekvenser feil; venstre-hale-kritisk verdi; konkludere uten kontekst; glemme at χ² alltid er høyre-halet.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.5: To-proporsjon z-test og paret t-test

- **id:** `met4-nhh-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-1-4`, `met4-nhh-2-1`
- **kapitteltype:** teori
- **description:** Sammenlign to andeler med felles andel under H₀ — og test parvise differanser med paret t.
- **Eksamensbelegg:** Sjanger D (to-proporsjon z) i **2/8** (H2023, V2025) + eldre; **paret t** ny i H2025 (1/8, nivå 3). Prioritet: **kunne** (to-proporsjon z; paret t: kjenne).
- **Innholdskontrakt:** **To-proporsjon z:** $\hat{p}_1, \hat{p}_2$; **samlet (pooled) andel under $H_0$** $\hat{p} = (X_1+X_2)/(n_1+n_2)$; $Z = (\hat{p}_1-\hat{p}_2)/\sqrt{\hat{p}(1-\hat{p})(1/n_1+1/n_2)}$; ensidig/tosidig kritisk z; `prop.test`; CLT-begrunnelse (1.4) for normaltilnærmingen. **Paret t** (merket «bør kjenne til», etter kjernestoffet): når data er parvise (før/etter på samme enhet), test differansene $y = A - B$: $T = \bar{y}/(s_y/\sqrt{n})$; **ikke** behandle parede data som to uavhengige utvalg. Konkluder i kontekst.
- **Oppgavesjangre:** D (+ paret t). Mønstereksempel: «I gruppe A fullførte 84 av 200, i gruppe B 62 av 190. Test på 5 %-nivå om andelen er *høyere* i A, med felles andel under $H_0$, og konkluder i kontekst.»
- **Typiske feil:** Glemme felles $\hat{p}$ under $H_0$; feil ensidig/tosidig; behandle parede data som uavhengige (eller motsatt); konkludere uten kontekst.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.6: Drill: hypotesetest i alle varianter

- **id:** `met4-nhh-2-6` · **number:** 2.6 · **estimatedMinutes:** 90 · **prerequisites:** `met4-nhh-2-3`, `met4-nhh-2-4`, `met4-nhh-2-5`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele testapparatet: F-test → pooled/Welch t, χ² begge veier, to andeler og paret t — med begrunnelsesplikten i sentrum.
- **Eksamensbelegg:** Dekker A (6/8), B (7/8), C (5/8), D (2/8) samlet — testkomplekset bærer ryggraden i hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat, variantvalg-tre): 1) hva sammenlignes — gjennomsnitt, andel, varians eller kategori? 2) én eller to grupper, uavhengige eller parede? 3) F-test lik varians først ved to gjennomsnitt → pooled/Welch; 4) sett opp $H_0/H_1$ med riktig retning; 5) velg testobservator og begrunn z/t/F/χ²; 6) regn (kritisk verdi via `q*`); 7) **konkluder i kontekst**. Gjennomregnet eksamenscase med sensor-margnotater (metodesignal-poengene markert: ensidig-valget, pooled/Welch-koblingen, SE→SD-omregningen, kontekstkonklusjonen). **8–15 oppgaver på eksamensnivå** som roterer alle sjangrene, alle med `solution` + `hints`, nyskrevne kontekster (behandlingstid, kundetilfredshet, retur-andel, terningkast, før/etter-måling).
- **Oppgavesjangre:** A, B, C, D. Mønstereksempel: «(a) F-test for lik varians mellom to butikker. (b) To-utvalgs t basert på resultatet — er omsetningen *høyere* i den nye butikken? (c) En χ²-test på om kundekategori og butikk er uavhengige. Begrunn hvert metodevalg og konkluder i kontekst.»
- **Typiske feil:** Hele test-feilkatalogen samlet (§5.1–5.4, §5.12): SE/SD, feil hale, ensidig/tosidig, pooled/Welch uten begrunnelse, konklusjon uten kontekst.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (se §4).

---

### Del 3 — Lineær regresjon *(prioritet: PERFEKT)*

#### Kapittel 3.1: Lese lm-utskrift og tolke koeffisienter

- **id:** `met4-nhh-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-2-1`
- **kapitteltype:** teori
- **description:** Fra `summary(lm(...))` til tolkning: estimat, SE, t, p, R², F — og «assosiert med», ikke «forårsaker».
- **Eksamensbelegg:** Sjanger E i **7/8 (88 %)** — koeffisienttolkning er selve kjernen i regresjonssøylen. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x_1 + \dots$; les `summary(lm(...))`: estimat, standardfeil, t-verdi, p-verdi, $R^2$, F-observator (felles nullhypotese, sjanger med 2/8-frekvens); **nivå–nivå-tolkning** («én enhet i $x$ → $\hat{\beta}$ enheter i $y$, kontrollert for de øvrige»); kommenter **signifikans** (p-verdi mot nivå) og bruk **«assosiert med»**, ikke «forårsaker» (bro til Del 6); dummy-variabel = forskjell fra referansekategori (IKKE kontinuerlig tolkning). Funksjonsform (log/interaksjon) utdypes i 3.2. **Hybrid-lån:** kapitlet har en drøftings-lånt A-besvarelse som viser hvordan en koeffisienttolkning skrives i klartekst.
- **Oppgavesjangre:** E. Mønstereksempel: «`lm(lonn ~ alder + kjonn)` gir alder-koeffisient 4 200 (p < 0,001) og kjonnKvinne-koeffisient −18 000 (p = 0,03). Tolk begge i kontekst, kommenter signifikansen, og forklar hvorfor du sier 'assosiert med' og ikke 'gir'.»
- **Typiske feil (§5.5):** Dummy/kategorivariabel tolket som kontinuerlig («en enhets økning i kjønn …», ofte −3); kausal formulering av observasjonsdata; glemme «kontrollert for de øvrige»; overse signifikanskommentaren.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.2: Funksjonsform — log–log, log–lin, dummy, interaksjon

- **id:** `met4-nhh-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `met4-nhh-3-1`
- **kapitteltype:** teori
- **description:** Samme koeffisient betyr forskjellige ting: elastisitet, prosentendring, gruppeforskjell eller ulik helning — pluss enhetsendring/skalering.
- **Eksamensbelegg:** Funksjonsform-tolkning i **6/8 (75 %)** (log–log elastisitet V2023/H2024, log–lin, interaksjon V2022/V2024, enhetsendring V2023). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Nivå–nivå** (fra 3.1); **log–lin** ($\log y$): $\approx 100\hat{\beta}\,\%$ endring, eksakt $(e^{\hat{\beta}}-1)\cdot 100\,\%$; **log–log** ($\log y$ på $\log x$): $\hat{\beta}$ = **elastisitet** («1 % → $\hat{\beta}$ %»); **dummy** = forskjell fra referansekategori; **interaksjon** = ulik effekt/helning mellom grupper (les hovedeffekt + interaksjonsledd sammen); **enhetsendring/skalering** (sjanger, 1/8): $\log(cy) = \log c + \log y$ — en avgift/enhetsendring flytter konstantleddet, ikke helningen. Kontraktfestet at eksakt $(e^{\hat{\beta}}-1)$-omregning brukes når $\hat{\beta}$ er stor (toppkandidat-markør). **Hybrid-lån:** A-besvarelse for hver funksjonsform.
- **Oppgavesjangre:** E (funksjonsform). Mønstereksempel: «I `lm(log(pris) ~ log(areal) + sentrum)` er areal-koeffisienten 0,72 og sentrum-dummyen 0,15. Tolk begge — den ene som elastisitet, den andre som prosentvis forskjell — og gi den eksakte prosenten for dummyen.»
- **Typiske feil (§5.5):** Tolke log–log-koeffisient som nivåendring; bruke $100\hat{\beta}$ der eksakt $(e^{\hat{\beta}}-1)$ kreves (stor $\hat{\beta}$); tolke interaksjonsleddet uten hovedeffekten; behandle enhetsendring som helningsendring.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 3.3: Konfidensintervall og prediksjon fra regresjonsmodellen

- **id:** `met4-nhh-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-3-1`
- **kapitteltype:** teori
- **description:** KI for en koeffisient, predikert verdi ved innsetting — og skillet mellom prediksjonsintervall og konfidensintervall som testes eksplisitt.
- **Eksamensbelegg:** Sjanger F (KI for koeffisient) i **4/8**; sjanger G (prediksjon) i **5/8**; PI-vs-KI-skillet testet eksplisitt (V2022). Prioritet: **perfekt** (prediksjon), **kunne** (KI).
- **Innholdskontrakt:** **KI for koeffisient:** $\hat{\beta} \pm t_{1-\alpha/2}\cdot\text{SE}(\hat{\beta})$; ved stor $n$ settes t-kvantilen til **1,96** (95 %) — begrunn at n er stor; `confint`. **Prediksjon:** sett inn i $\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x_1 + \dots$ eller `predict(modell, newdata=)`. **PI vs. KI:** prediksjonsintervall (usikkerhet om ETT nytt utfall — bredere) vs. konfidensintervall (usikkerhet om FORVENTNINGEN); testet direkte. Anvendt beslutning oppå prediksjonen: «lønner kampanjen seg?» → sammenlign predikert endring mot kostnad (bro til beslutningsteori 4.5).
- **Oppgavesjangre:** F + G. Mønstereksempel: «Modellen $\hat{y} = 200 + 15x$ har $\text{SE}(\hat{\beta}_1) = 3$, $n = 400$. Lag et 95 %-KI for helningen, prediker $y$ for $x = 10$, og forklar forskjellen på et prediksjonsintervall og et konfidensintervall for den prediksjonen.»
- **Typiske feil (§5.9):** Prediksjonsintervall forvekslet med konfidensintervall; bruke t der z (1,96) holder ved stor n uten begrunnelse; prediksjon uten å ta høyde for at forklaringsvariabler må være kjent (særlig tidsrekke, §5.14).
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.4: Regresjonsdiagnostikk og OLS-forutsetningene

- **id:** `met4-nhh-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-3-1`, `met4-nhh-1-2`
- **kapitteltype:** teori
- **description:** Les residualplott, histogram og QQ — og si hva brudd på forutsetningene betyr for inferens og prediksjonsintervall.
- **Eksamensbelegg:** Sjanger H i **4/8** (residualplott, QQ, heteroskedastisitet). Prioritet: **kunne**.
- **Innholdskontrakt:** OLS-forutsetningene kvalitativt (linearitet, homoskedastisitet, normalfordelte residualer, uavhengighet); **residualplott** (varierende spredning = heteroskedastisitet; kurvatur = ikke-linearitet); **histogram + QQ-plott** for residualene (normalitet/haletyngde/skjevhet); **autokorrelasjonsplott** ved tidsrekkedata (bro til 5.2); konkluder om forutsetningene holder og hva brudd betyr: heteroskedastisitet → upålitelige SE/KI; ikke-normale residualer → prediksjonsintervall kan ikke stoles på; autokorrelasjon → vanlig koeffisienttolkning svikter. Verbal drøfting med figurlesing — ingen tunge utledninger.
- **Oppgavesjangre:** H. Mønstereksempel: «Residualplottet vifter ut mot høyre og QQ-plottet bøyer av i halene. Hvilke to forutsetninger er tvilsomme, og hva betyr det for et prediksjonsintervall fra modellen?»
- **Typiske feil:** Konkludere at modellen er «god» fra høy $R^2$ alene; overse heteroskedastisiteten; ikke koble brudd til konsekvens for inferens/prediksjon; forveksle residual og observert verdi.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.5: Utelatt variabel, endogenitet og modellvalg (AIC)

- **id:** `met4-nhh-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-3-1`
- **kapitteltype:** teori
- **description:** Hvorfor en koeffisient endrer seg når en variabel legges til eller fjernes — og hvordan AIC hjelper med å velge modell.
- **Eksamensbelegg:** Sjanger I i **3/8** (koeffisient krymper/skifter fortegn: V2025 kjønn forsvinner når inntekt/reklame legges til, H2022, H2024); AIC-modellvalg 1/8 (nivå 3). Prioritet: **kunne** (utelatt variabel), **kjenne** (AIC).
- **Innholdskontrakt:** **Utelatt variabel-mekanismen:** når en regressor er korrelert med både $y$ og en annen forklaringsvariabel, «fanger den ene opp» effekten av den andre → koeffisienten endrer seg (krymper/vokser/skifter fortegn) når variabelen legges til/fjernes; knytt til **eksogenitet/endogenitet** (en utelatt korrelert variabel gjør regressoren endogen). Dette er den regne-/utskriftsmessige siden; den verbale kausalitetsdrøftingen (OVB, seleksjon) ligger i 6.2. **AIC** (merket «bør kjenne til»): lavere AIC = bedre avveining mellom tilpasning og kompleksitet; brukes til å velge mellom modeller (H2025); ikke det samme som høyest $R^2$.
- **Oppgavesjangre:** I. Mønstereksempel: «Kjønnskoeffisienten er −20 000 (p = 0,01) i en enkel modell, men −3 000 (p = 0,4) når stilling og ansiennitet legges til. Forklar mekanismen bak endringen, og hva den forteller om hva den første koeffisienten egentlig målte.»
- **Typiske feil (§5.8):** Tolke koeffisientendringen som «feil» heller enn informativ; ikke navngi korrelasjonen mellom regressorene; velge modell på $R^2$ i stedet for AIC/sparsomhet; blande denne mekaniske analysen med den verbale kausalitetsdrøftingen.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.6: Drill: regresjonsutskrift fra tolkning til prediksjon

- **id:** `met4-nhh-3-6` · **number:** 3.6 · **estimatedMinutes:** 90 · **prerequisites:** `met4-nhh-3-2`, `met4-nhh-3-3`, `met4-nhh-3-4`, `met4-nhh-3-5`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele regresjonskjeden: les utskrift → tolk etter funksjonsform → KI/prediksjon → diagnostikk → utelatt-variabel-refleksjon.
- **Eksamensbelegg:** Dekker E (7/8), funksjonsform (6/8), F (4/8), G (5/8), H (4/8), I (3/8) samlet — regresjonssøylens fulle spenn. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser funksjonsform fra modelloppsettet (log på $y$? på $x$? dummy? interaksjon?); 2) les av estimat/SE/t/p/$R^2$/F; 3) tolk hver koeffisient etter funksjonsform, med signifikans og «assosiert med»; 4) KI og/eller prediksjon (PI vs. KI ved behov); 5) diagnostikk hvis figurer er gitt; 6) kommenter utelatt variabel hvis koeffisienter sammenlignes; 7) konkluder i kontekst. Gjennomregnet eksamenscase med sensor-margnotater (funksjonsform-poenget, dummy-fella, kausalitetsforbeholdet markert). **8–15 oppgaver på eksamensnivå** med `solution` + `hints`, nyskrevne datasett (bolig, lønn, salg, forbruk).
- **Oppgavesjangre:** E, F, G, H, I. Mønstereksempel: «Gitt `summary(lm(log(salg) ~ log(pris) + kampanje + log(pris):kampanje))`: tolk elastisiteten, kampanjeeffekten og interaksjonen, prediker salget for en gitt pris med og uten kampanje, og vurder om et residualplott gir grunn til å tvile på modellen.»
- **Typiske feil:** Hele regresjons-feilkatalogen samlet (§5.5, §5.8, §5.9, §5.14): dummy som kontinuerlig, feil funksjonsform, PI/KI-forveksling, kausal overtolkning, prediksjon uten kjente x-verdier.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (se §4).

---

### Del 4 — Logistisk regresjon, klassifisering og beslutningsteori *(prioritet: PERFEKT)*

#### Kapittel 4.1: Logistisk regresjon — modellen og odds-tolkningen

- **id:** `met4-nhh-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `met4-nhh-3-1`
- **kapitteltype:** teori
- **description:** Modellen for en ja/nei-utfallsvariabel, tolket via ODDS — toppkandidat-markøren — og løst baklengs med invers logit.
- **Eksamensbelegg:** Sjanger J i **6/8 (75 %)**; **tolkning via odds er kravet for full pott** (sannsynlighetstolkning eller log-lineær modell trekker/gir 0). Invers logit i 2/8. Prioritet: **perfekt**.
- **Innholdskontrakt:** Modellen $p = e^z/(1+e^z)$ med $z = \hat{\beta}_0 + \hat{\beta}_1 x_1 + \dots$; `glm(..., family=binomial)`; logit $\text{logit}(p) = \log(p/(1-p)) = z$. **Odds-tolkning (KONTRAKTFESTET):** én enhets økning i $x$ endrer oddsen med multiplikativ faktor $e^{\hat{\beta}}$, dvs. $(e^{\hat{\beta}}-1)\cdot 100\,\%$; kommenter signifikans; **dummyer tolkes mot referansekategori** (ikke kontinuerlig). **Invers logit:** løs $\hat{\beta}_0 + \hat{\beta}_1 x = \text{logit}(p) = \log(p/(1-p))$ for $x$ gitt ønsket $p$. **KONTRAKTFESTET `warning`:** å skrive opp en log-lineær modell i stedet gir 0 poeng; tolkning som ikke går via odds trekker. **Hybrid-lån:** A-besvarelse som viser odds-tolkningen i klartekst.
- **Oppgavesjangre:** J. Mønstereksempel: «`glm(kjop ~ alder + medlem, family=binomial)` gir alder-koeffisient 0,04 og medlem-dummy 0,9. Tolk begge via odds (med eksakt prosent), og finn alderen der en ikke-medlem har 50 % kjøpssannsynlighet.»
- **Typiske feil (§5.6):** Skrive logistisk modell som log-lineær (0 poeng); tolke via sannsynlighet i stedet for odds (trekk); kontinuerlig tolkning av dummy; feil ved invers logit (glemme logit-transformasjonen).
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 4.2: Sannsynlighetsprediksjon og klassifisering mot terskel

- **id:** `met4-nhh-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-4-1`
- **kapitteltype:** teori
- **description:** Fra koeffisienter til en predikert sannsynlighet, og fra sannsynlighet til en ja/nei-klassifisering ved en valgt terskel.
- **Eksamensbelegg:** Del av sjanger J/K — sannsynlighetsprediksjon og klassifisering mot terskel (p̂ > 0,5 e.l.) i logistisk-settene. Prioritet: **perfekt**.
- **Innholdskontrakt:** Regn $z$ ved innsetting, deretter $\hat{p} = e^z/(1+e^z)$; `predict(modell, newdata=, type="response")`; **klassifiser** mot terskel `ifelse(p > terskel, 1, 0)`; terskelvalget er ikke gitt av naturen — 0,5 er default, men kan justeres (bro til 4.3 sensitivitet/spesifisitet og 4.5 forventet gevinst). Skille prediktert sannsynlighet fra klassifisering. Anvendt beslutning: hvem skal få tilbudet/varselet?
- **Oppgavesjangre:** J/K. Mønstereksempel: «For en kunde med $z = 0{,}3$: finn den predikerte kjøpssannsynligheten, og klassifiser kunden ved terskel 0,5 og ved terskel 0,3. Hva slags feil gjør du flere av når terskelen senkes?»
- **Typiske feil:** Glemme `type="response"` (får logit i stedet for $p$); behandle terskelen som fastlagt; forveksle predikert sannsynlighet med klassifisering; ikke koble terskelvalget til kostnaden ved feil.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.3: Forvekslingsmatrise, sensitivitet, spesifisitet og ROC

- **id:** `met4-nhh-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-4-2`
- **kapitteltype:** teori
- **description:** Vurder en klassifisering: sett opp forvekslingsmatrisen, regn sensitivitet og spesifisitet, og drøft terskel-avveiningen ut fra hva som er kostbart å bomme på.
- **Eksamensbelegg:** Sjanger K i **2/8** (nye 2024–25: V2024 ROC/sensitivitet-spesifisitet, H2025 forvekslingsmatrise/terskler). Prioritet: **kunne** (ferskt, differensierende).
- **Innholdskontrakt:** **Forvekslingsmatrise** `table(sann, klass)`: sanne/falske positive og negative; **total treffandel** = diagonal/sum; **sensitivitet** = andel sanne positive fanget (TP/(TP+FN)); **spesifisitet** = andel sanne negative fanget (TN/(TN+FP)); avveiningen: **lav terskel → høy sensitivitet, mange falske positive; høy terskel → høy spesifisitet**. ROC-kurven tolkes tilsvarende (sensitivitet mot 1−spesifisitet over terskler). Drøft ut fra hva som er kostbart å bomme på (falsk negativ i sykdomstesting vs. falsk positiv i markedsføring). **Hybrid-lån:** A-besvarelse for avveiningsdrøftingen (verbal). Bro til 4.5 (forventet gevinst tallfester avveiningen).
- **Oppgavesjangre:** K. Mønstereksempel: «En modell gir forvekslingsmatrisen [oppgitt]. Regn total treffandel, sensitivitet og spesifisitet, og drøft om terskelen bør senkes når det er dyrt å overse en misfornøyd kunde.»
- **Typiske feil:** Forveksle sensitivitet og spesifisitet; regne treffandel som eneste mål (ignorere ubalanserte klasser); ikke knytte terskelvalget til kostnadene; lese forvekslingsmatrisen transponert.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 4.4: KNN — k-nærmeste-nabo-klassifisering

- **id:** `met4-nhh-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-4-3`
- **kapitteltype:** teori
- **description:** Klassifiser ved flertallsavstemning blant de K nærmeste naboene — og vit når du heller bør velge logistisk regresjon.
- **Eksamensbelegg:** Sjanger L i **2/8** (nye 2025: V2025, H2025). Fast tilleggsspørsmål: KNN-vs-logistisk-anbefaling. Prioritet: **kunne** (ferskt, differensierende).
- **Innholdskontrakt:** **KNN-algoritmen:** klassifiser en observasjon ved **flertallsavstemning** blant de K nærmeste (euklidisk avstand på **standardiserte** variabler — standardisering er nødvendig så én skala ikke dominerer); `caret::train(method="knn")`; regn total andel riktige fra forvekslingsmatrisen (4.3). **Tolkbarhet vs. prediksjon (KONTRAKTFESTET drøftingspoeng):** logistisk regresjon anbefales når man vil *forstå* hva som driver utfallet (tolkbare koeffisienter/odds); KNN er ikke-parametrisk, gir ofte god prediksjon men er vanskelig å tolke og følsom for valg av K og skala. **Hybrid-lån:** A-besvarelse for modellanbefalingen.
- **Oppgavesjangre:** L. Mønstereksempel: «En ny kunde skal klassifiseres med KNN (K = 5) ut fra alder og inntekt. Forklar hvorfor variablene må standardiseres først, gjennomfør flertallsavstemningen fra de fem nærmeste [oppgitt], og anbefal om banken bør bruke KNN eller logistisk regresjon når den vil forklare beslutningen for kunden.»
- **Typiske feil:** Glemme standardiseringen (avstand dominert av variabelen med størst skala); anbefale KNN der tolkbarhet kreves; regne avstand feil; forveksle K (antall naboer) med antall klasser.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.5: Beslutningsteori og forventet nettogevinst

- **id:** `met4-nhh-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-4-3`
- **kapitteltype:** teori
- **description:** Velg terskel eller modell ut fra forventet gevinst — E[G] over utfallscellene — ikke bare treffprosent.
- **Eksamensbelegg:** Sjanger M i **1/8** (ny H2025; arv fra hjemme-sporets terskeloptimering). Toppkandidat-markøren: koble beslutning til statistikk. Prioritet: **kunne** (ny, differensierende).
- **Innholdskontrakt:** Definer en **gevinstvariabel $G$** med verdi for hver (faktisk, predikert)-celle (riktig positiv/negativ og de to feilene har hver sin gevinst/kostnad); hent celleandeler fra den normaliserte forvekslingsmatrisen (`prop.table`); regn **$E[G] = \sum (\text{gevinst}_{\text{celle}} \cdot \text{andel}_{\text{celle}})$**; sammenlign terskler/modeller på forventet gevinst — «beste» modell avhenger av hva som verdsettes, ikke av treffprosent alene. **Hybrid-lån:** A-besvarelse for beslutningsanbefalingen. Bro til 4.3 (avveiningen) og 3.3 (predikert endring mot kostnad).
- **Oppgavesjangre:** M. Mønstereksempel: «En kampanje gir +500 kr på en riktig truffet kunde, −100 kr på en bomtruffet. Med forvekslingsmatrisen [oppgitt]: regn forventet nettogevinst per kunde ved terskel 0,5 og 0,3, og anbefal terskel.»
- **Typiske feil:** Velge modell/terskel på treffprosent i stedet for forventet gevinst; glemme å normalisere forvekslingsmatrisen (`prop.table`); feil fortegn på en kostnadscelle; ikke konkludere med en anbefaling.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.6: Drill: klassifisering og beslutning ende-til-ende

- **id:** `met4-nhh-4-6` · **number:** 4.6 · **estimatedMinutes:** 90 · **prerequisites:** `met4-nhh-4-1`, `met4-nhh-4-4`, `met4-nhh-4-5`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele Del 4: logistisk odds-tolkning → prediksjon/klassifisering → forvekslingsmatrise/sensitivitet → KNN-anbefaling → forventet gevinst.
- **Eksamensbelegg:** Dekker J (6/8), K (2/8), L (2/8), M (1/8) samlet — den ferske klassifiseringssøylen som differensierer mot A. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) skriv logistisk modell, tolk via odds med eksakt prosent; 2) prediker sannsynlighet, klassifiser mot terskel; 3) sett opp forvekslingsmatrise, regn treffandel/sensitivitet/spesifisitet; 4) KNN som alternativ + tolkbarhet-vs-prediksjon-anbefaling; 5) forventet nettogevinst ved ulike terskler; 6) konkluder med en modell-/terskelanbefaling i kontekst. Gjennomregnet eksamenscase med sensor-margnotater (odds-poenget, standardiserings-poenget, forventet-gevinst-poenget markert). **8–15 oppgaver på eksamensnivå** med `solution` + `hints`, nyskrevne kontekster (churn, kredittrisiko, kampanjerespons, forsikringssvindel).
- **Oppgavesjangre:** J, K, L, M. Mønstereksempel: «For et churn-datasett: (a) tolk den logistiske modellen via odds; (b) klassifiser tre kunder; (c) sett opp forvekslingsmatrisen og regn sensitivitet; (d) anbefal logistisk eller KNN når selskapet vil forklare hvem som varsles; (e) velg terskel ut fra forventet nettogevinst.»
- **Typiske feil:** Hele Del 4-feilkatalogen samlet (§5.6): log-lineær modell, ikke-odds-tolkning, dummy kontinuerlig, glemt standardisering (KNN), treffprosent over forventet gevinst.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (se §4).

---

### Del 5 — Tidsrekker *(prioritet: PERFEKT — stor del)*

#### Kapittel 5.1: Stasjonaritet — tre betingelser og bruddene

- **id:** `met4-nhh-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-1-4`
- **kapitteltype:** teori
- **description:** De tre stasjonaritetsbetingelsene, og hvordan trend, sesong og avtakende varians brytes — avlest fra figur.
- **Eksamensbelegg:** Del av sjanger N (**7/8, 88 % — tungt og bredt**); stasjonaritet vurdert fra figur i V2022, V2025, H2025. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Tre betingelser for (svak) stasjonaritet:** (1) konstant forventning over tid, (2) konstant/endelig varians, (3) kovariansen avhenger bare av tidsavstanden (ikke av tidspunktet). Påvis **brudd fra figur**: trend bryter (1), avtakende/økende spredning bryter (2), sesong bryter (1)/(3). Hvorfor stasjonaritet er nødvendig for prognose og for at AR/MA-modeller skal være meningsfulle; differensiering ($\Delta X_t = X_t - X_{t-1}$) som vei til stasjonaritet (bro til ARIMA i 5.3). Ikke dra inn irrelevante momenter — vurder de tre betingelsene konkret.
- **Oppgavesjangre:** N (stasjonaritet). Mønstereksempel: «Figuren viser månedlig omsetning med jevn oppgang og tydelige desembertopper. Vurder hver av de tre stasjonaritetsbetingelsene, konkluder om serien er stasjonær, og forklar hva du kan gjøre for å oppnå stasjonaritet.»
- **Typiske feil (§5.11):** Dra inn irrelevante momenter i stasjonaritetsvurderingen; overse at sesong/trend/avtakende varians bryter betingelsene; nevne bare én betingelse; forveksle stasjonaritet med «ingen mønster».
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 5.2: Autokorrelasjon (ACF), sesong og dekomponering

- **id:** `met4-nhh-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `met4-nhh-5-1`
- **kapitteltype:** teori
- **description:** Les ACF-plottet, gjenkjenn sesong, og bryt serien i trend + sesong + residual — komponentene prognosen settes sammen av.
- **Eksamensbelegg:** Del av sjanger N (7/8); ACF/dekomponering i V2023, H2023, H2025. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Autokorrelasjon:** korrelasjon mellom $Y_t$ og $Y_{t-k}$; les **ACF-plott** (positiv topp ved lag 12 = årssesong for månedsdata; negativ ved lag 6; langsom avtakende ACF = trend/ikke-stasjonaritet). **Dekomponering:** $Y_t = T_t$ (trend) $+ S_t$ (sesong) $+ R_t$ (residual); prognose settes sammen av de tre komponentene; multiplikativ vs. additiv nevnes kort. Kobling: residualkomponenten $R_t$ modelleres med AR/MA (5.3). Vis figurlesing (dekomponeringsplott, ACF) med R-kommandoene.
- **Oppgavesjangre:** N (ACF/dekomponering). Mønstereksempel: «ACF-plottet for kvartalsdata har en klar topp ved lag 4. Hva forteller det om serien, og hvordan vil du dekomponere serien før du lager en prognose?»
- **Typiske feil:** Lese ACF-toppen ved feil lag (sesongperioden); blande trend- og sesongkomponent; glemme residualkomponenten i prognosen; tolke en avtakende ACF som sesong.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: AR, MA, ARMA og ARIMA — modellene og hvit støy

- **id:** `met4-nhh-5-3` · **number:** 5.3 · **estimatedMinutes:** 65 · **prerequisites:** `met4-nhh-5-1`, `met4-nhh-1-3`
- **kapitteltype:** teori
- **description:** Skriv modellen fra utskriften — AR(1), MA(1), ARMA, ARIMA(0,1,1) — definer hvit støy, og utled E(Yₜ) for AR(1) via geometrisk rekke.
- **Eksamensbelegg:** Del av sjanger N (7/8); ARMA V2022/V2023, AR(1) H2023/V2024, ARIMA(0,1,1)/MA(1) H2025; **E(Yₜ)-utledning V2024 (toppnivå-differensiator)**. Prioritet: **perfekt** (AR/MA/ARIMA), **kjenne/strekk** (E(Yₜ)-utledningen).
- **Innholdskontrakt:** **Hvit støy** $u_t$: forventning 0, konstant varians, ukorrelert over tid. **AR(1):** $R_t = \varphi R_{t-1} + u_t$, stasjonær hvis $|\varphi| < 1$; **MA(1):** $R_t = u_t + \theta u_{t-1}$; **ARMA(p,q)** kombinerer; **ARIMA(0,1,1):** $\Delta X_t$ er MA(1) — differensiering én gang gir stasjonaritet. Skriv modellen fra `arima`-utskriften (koeffisienter → ligning). **Utledning av $E(Y_t)$ for AR(1)** (kunne utlede aktivt — den tyngste utledningen i emnet, merket «bør kjenne til / differensierer mot A»): for $Y_t = \beta_0 + \beta_1 x + \varphi Y_{t-1} + u_t$, iterér bakover → geometrisk rekke → $E(Y_t) = (\beta_0 + \beta_1 \mu_x)/(1-\varphi)$; bruker regnereglene fra 1.3. **KONTRAKTFESTET `warning`:** koeffisienttolkning ved autoregressive ledd må gå via langtidsgjennomsnittet — ikke tolke $\beta$ «på vanlig måte» når modellen har $\varphi Y_{t-1}$.
- **Oppgavesjangre:** N (AR/MA/ARIMA + utledning). Mønstereksempel: «`arima`-utskriften gir en AR(1)-koeffisient 0,6. Skriv modellen, avgjør om den er stasjonær, definer hvit støy, og utled seriens langtidsforventning når konstantleddet er 4.»
- **Typiske feil (§5.8):** Koeffisienttolkning «på vanlig måte» ved autoregressive ledd; glemme $|\varphi|<1$-betingelsen; forveksle AR og MA; ikke definere hvit støy; feil i den geometriske rekka.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 5.4: Prognose og eksponentiell glatting

- **id:** `met4-nhh-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `met4-nhh-5-3`
- **kapitteltype:** teori
- **description:** Prognose ett og flere steg fram, langtidskonvergens mot det stasjonære snittet, og eksponentiell glatting med sin systematiske svakhet ved trend.
- **Eksamensbelegg:** Del av sjanger N (7/8); langtidsprognose mot stasjonært snitt H2023, eksponentiell glatting V2025, prognosekritikk H2025. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Prognose fra AR(1):** ett steg $\hat{R}_{t+1} = \varphi R_t$ (siden $E[u_{t+1}]=0$); flere steg iterativt $\hat{R}_{t+k} = \varphi^k R_t \to 0$; **langtidskonvergens mot det stasjonære snittet** — langt fram dominerer trend/sesong, og residualdelen dør ut. **Eksponentiell glatting:** $S_t = w\,y_t + (1-w)S_{t-1}$, prognose $\hat{y}_{t+1} = S_t$; $w$ (glattingsparameter) styrer hvor raskt gamle observasjoner glemmes. **KONTRAKTFESTET `warning`:** eksponentiell glatting **underpredikerer systematisk ved stigende trend** (den henger etter) — bruk den ikke ukritisk på en trendende serie. Prognose må ta høyde for at forklaringsvariabler må være kjent fremover i tid (§5.14).
- **Oppgavesjangre:** N (prognose/glatting). Mønstereksempel: «En stasjonær AR(1)-serie med $\varphi = 0{,}5$ har siste verdi 8 og langtidssnitt 3. Lag prognoser ett, to og fem steg fram, og forklar hvorfor de nærmer seg 3. Hvorfor ville eksponentiell glatting bomme systematisk hvis serien i stedet steg jevnt?»
- **Typiske feil (§5.10, §5.14):** Eksponentiell glatting brukt ukritisk ved trend (systematisk underprediksjon); glemme at $\hat{R}_{t+k} \to 0$ / konvergensen mot snittet; prognose uten kjente x-verdier fremover; blande residual- og trendkomponent i langtidsprognosen.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 5.5: Drill: tidsrekkeanalyse fra stasjonaritet til prognose

- **id:** `met4-nhh-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `met4-nhh-5-2`, `met4-nhh-5-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele tidsrekkesøylen: vurder stasjonaritet → les ACF/dekomponer → skriv AR/MA/ARIMA → prognose (kort + langtid) → glattingskritikk.
- **Eksamensbelegg:** Dekker sjanger N i full bredde (7/8) — Del 2s faste tidsrekkeoppgave og en typisk Del 1-komponent. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) vurder de tre stasjonaritetsbetingelsene fra figur; 2) les ACF / dekomponer i trend+sesong+residual; 3) skriv modellen fra utskriften (AR/MA/ARMA/ARIMA), definer hvit støy, sjekk $|\varphi|<1$; 4) prognose ett/flere steg + langtidskonvergens; 5) vurder eksponentiell glatting og dens trend-svakhet; 6) konkluder i kontekst (hva sier prognosen, og hvor sikker er den?). Gjennomregnet eksamenscase med sensor-margnotater (stasjonaritets-poenget, autoregressiv-tolkning-fella, glattings-svakheten markert). **8–15 oppgaver på eksamensnivå** med `solution` + `hints`, nyskrevne serier (salg, arbeidsledighet, temperatur, aksjeavkastning). Inkluder minst én E(Yₜ)-utledning (strekk).
- **Oppgavesjangre:** N. Mønstereksempel: «Gitt en figur av kvartalsvis salg og en `arima(0,1,1)`-utskrift: (a) er råserien stasjonær? (b) hva betyr ARIMA(0,1,1)? (c) skriv MA(1)-modellen for differansen og definer hvit støy; (d) lag en prognose to kvartaler fram og drøft usikkerheten.»
- **Typiske feil:** Hele tidsrekke-feilkatalogen samlet (§5.8, §5.10, §5.11, §5.14): feilvurdert stasjonaritet, autoregressiv koeffisient tolket vanlig, ukritisk glatting, prognose uten kjente x-verdier, ACF lest ved feil lag.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (se §4).

---

### Del 6 — Kausalitet, design og datakritikk *(drøftingstung — hybrid)*

#### Kapittel 6.1: Kausalitet: RCT, kontrafaktisk logikk og korrelasjon ≠ kausalitet

- **id:** `met4-nhh-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-3-1`
- **kapitteltype:** teori (drøfting)
- **description:** Når kan en observert forskjell tolkes kausalt? Randomisering som gullstandard, kontrafaktisk resonnement, og de konkurrerende forklaringene som alltid må vurderes.
- **Eksamensbelegg:** Sjanger Q i **3/8** — RCT-tolkning (V2022 insentiver, V2025 tillitsnudge), korrelasjon-vs-kausalitet. Fasitene krever KONKRETE mekanismer, ikke slagord. Prioritet: **kunne** (fast konseptuelt innslag). **Hybrid: drøftings-DNA.**
- **Innholdskontrakt (drøftings-lånt struktur):** **Kontrafaktisk logikk:** effekten = faktisk utfall minus det uobserverte kontrafaktiske; fundamentalproblemet er at vi aldri ser begge → løsningen er sammenlignbare grupper. **De tre konkurrerende forklaringene** ved en observert samvariasjon (skal alltid vurderes, hver med konkret mekanisme): (1) X → Y, (2) omvendt kausalitet Y → X, (3) felles bakenforliggende årsak/konfundering (+ tilfeldighet). **Randomisert eksperiment (RCT):** tilfeldig tildeling gjør gruppene sammenlignbare i forventning → gruppeforskjellen (to-utvalgstest fra 2.3, to-proporsjon fra 2.5) får **kausal tolkning**. I observasjonsdata: bruk «assosiert med», ikke «forårsaker». Posisjoner/spenninger og momentliste-løsninger (drøftings-DNA); A-besvarelse med margnotater.
- **Oppgavesjangre:** Q. Mønstereksempel: «En analyse viser at bedrifter som deltok i et lederprogram har høyere lønnsomhet. Kan vi konkludere at programmet virker? Gjør rede for minst to alternative forklaringer med konkret mekanisme, og skisser et randomisert design som kunne identifisert effekten.»
- **Typiske feil (§5.7):** Kausal tolkning av observasjonsdata; «korrelasjon er ikke kausalitet» uten konkret mekanisme; glemme omvendt kausalitet; nekte kausal tolkning selv i et rent RCT (speilfeilen); tro at signifikans styrker den kausale tolkningen.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.2: Seleksjonsbias, endogenitet og faste effekter

- **id:** `met4-nhh-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `met4-nhh-6-1`
- **kapitteltype:** teori (drøfting)
- **description:** Når utvalget ikke ligner populasjonen, hjelper ingen test — seleksjonsbias, utelatt-variabel-endogenitet, og faste effekter som «bør kjenne til».
- **Eksamensbelegg:** Sjanger Q (seleksjonsbias 3/8: H2024 sykehus, hjemme V2024 filtrert utvalg) + S (paneldata/faste effekter 2/8: H2022, H2024 — nivå 3). Prioritet: **kunne** (seleksjon), **kjenne** (faste effekter). **Hybrid: drøftings-DNA.**
- **Innholdskontrakt (drøftings-lånt):** **Seleksjonsbias:** systematisk forskjell mellom hvem som er med og hvem analysen skal si noe om — konkretiser mekanismen (hvem velger seg inn/ut, og hvorfor henger det sammen med utfallet?); typetilfeller: frivillig deltakelse, selv-seleksjon til testing/behandling (de innlagte er sykere), ikke-respons, overlevelsesskjevhet; **mer data hjelper ikke** mot skjevhet (presisjonen øker rundt feil verdi). **Endogenitet/OVB** (verbal komplement til 3.5): en utelatt variabel korrelert med både regressor og utfall gir skjeve koeffisienter. **Faste effekter (paneldata) — «bør kjenne til»-seksjon** (mikroavvik, se §2 avvik 4): gjenkjenn paneldata (samme enheter over tid); faste effekter $\eta_i$ fjerner **tidsstabile** utelatte variabler via **within-transformasjon** (trekk fra enhetsgjennomsnittet); poeng: en **tidsinvariant** kovariat kan ikke estimeres innen faste effekter — man trenger enheter som *endrer* status over tid. IV/2SLS/DiD/RDD nevnes KUN som hjemme-/videreføringsstoff (ikke skoleeksamen).
- **Oppgavesjangre:** Q (+ S kjenne). Mønstereksempel: «Pasienter innlagt på sykehus A har høyere dødelighet enn de på sykehus B. Forklar hvorfor en direkte sammenligning ikke måler sykehuskvalitet, hva seleksjonsmekanismen er, og hvorfor et større datasett ikke løser problemet.»
- **Typiske feil (§5.7):** Behandle selektert utvalg som representativt; tro signifikans reparerer skjevhet; nevne «bias» uten mekanisme; foreslå «større utvalg» mot seleksjon; tro at faste effekter kan estimere en tidsinvariant kovariat.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.3: Datakritikk: misvisende figurer og publikasjonsbias

- **id:** `met4-nhh-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `met4-nhh-1-2`
- **kapitteltype:** teori (drøfting)
- **description:** Avslør en trunkert y-akse som overdriver, og forklar hvorfor publiserte funn er systematisk skjeve.
- **Eksamensbelegg:** Sjanger R i **2/8** (misvisende figur V2025, publikasjonsbias V2022). Prioritet: **kjenne/kunne**. **Hybrid: drøftings-DNA.**
- **Innholdskontrakt (drøftings-lånt):** **Misvisende figurer:** trunkert/høyt startende y-akse overdriver en liten relativ endring; feil aksevalg, manglende baselinje, arealforvrengning; hvordan lese figuren ærlig (koble til 1.2). **Publikasjonsbias** («skrivebordsskuff-effekten»): resultater med $|Z| > 1{,}96$ publiseres oftere → publisert litteratur overdriver effektstørrelser; konsekvens for hvordan man leser «signifikante funn». Verbal drøfting med momentliste og A-besvarelse.
- **Oppgavesjangre:** R. Mønstereksempel: «En figur viser 'kraftig vekst' i en indikator, men y-aksen starter på 98 og ender på 102. Forklar hvorfor figuren er misvisende, og hvordan den burde vært tegnet.»
- **Typiske feil:** Ta figuren for pålydende; ikke se den trunkerte aksen; forklare publikasjonsbias som «juks» heller enn seleksjon av signifikante funn; ikke koble til konsekvensen for tolkning.
- **Quiz: 10 · Flashcards: 15**

**Prøve-kvote Del 6:** 4 prøver (se §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Drill: begrunnelsesplikten og metodesignalene

- **id:** `met4-nhh-7-1` · **number:** 7.1 · **estimatedMinutes:** 90 · **prerequisites:** Del 1–6
- **kapitteltype:** drill
- **description:** Presisjonstrening på de korte valgene og formuleringene som avgjør uttellingen: ensidig/tosidig, pooled/Welch, z/t, odds-tolkning, stasjonaritet og konklusjon i kontekst.
- **Eksamensbelegg:** Samler metodesignalene som ifølge analysen (§4) bærer poengene på tvers av sjangre: pooled/Welch koblet til F-testen, ensidig/tosidig fra spørsmålet, z ved stor n, odds-tolkning i logistisk (ikke sannsynlighet/log-lineær), sensitivitet–spesifisitet-avveiningen, terskel mot forventet gevinst, stasjonaritetsvurderingen, og **konklusjon i kontekst** i hvert svar. Prioritet: **perfekt**.
- **Innholdskontrakt:** Drillbank organisert som spørsmål–fasitformulering-par der svarene skrives i EKSAKT eksamensklar form (2–4 setninger), hvert med henvisning til teorikapitlet: pooled-vs-Welch-beslutningen (koblet til F-test); ensidig/tosidig-valget fra formuleringen; z-vs-t ved stor/liten n; SE→SD-omregningen i F-testen; odds-tolkningen $(e^{\hat{\beta}}-1)\cdot 100\,\%$ og hvorfor log-lineær er 0 poeng; funksjonsform-tolkningene (log–log elastisitet, log–lin prosent, dummy, interaksjon); PI-vs-KI; de tre stasjonaritetsbetingelsene; autoregressiv-koeffisient-fella; eksponentiell-glatting-svakheten; sensitivitet–spesifisitet og terskel mot forventet gevinst; kausal tolkning kun ved RCT; «konklusjon i kontekst»-malen; $N(\mu,\sigma^2)$-vs-`rnorm(sd)`-konverteringen. Formatmal: valg/definisjon + begrunnelse, aldri mer enn nødvendig.
- **Oppgavesjangre:** Kortsvar-varianter av A, B, E, J, K, N, Q. Mønstereksempel: «Forklar på høyst tre setninger hvorfor du velger Welch-t og ikke pooled i sammenligningen fra forrige deloppgave — og knytt valget til F-testen.»
- **Typiske feil:** Hele feilkatalogen i §5 i kortform — drillen finnes nettopp fordi disse formuleringene og valgene må sitte ordrett presist under tidspress.
- **Quiz: 20 · Flashcards: 30**

#### Kapittel 7.2: Øvingseksamen 1: 6-timers 2025-form (Del 1 R + Del 2 regne)

- **id:** `met4-nhh-7-2` · **number:** 7.2 · **estimatedMinutes:** 360 · **prerequisites:** `met4-nhh-7-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 6-timers sett i nåtidsformen: Del 1 sammenhengende R-dataanalyse (gjengitte utskrifter), Del 2 frittstående regneoppgaver. Hver deloppgave teller likt.
- **Eksamensbelegg/miks:** Speiler V2025-malen. **Del 1 – Dataanalyse med R** på ett beskrevet `.Rdata`-datasett (variabelliste + gjengitte R-utskrifter/boksplott/histogram som TEKST slik at oppgaven kan løses «tørt» eller ved kjøring): (1a) deskriptiv start (boksplott/`summary`, tolket); (1b) F-test + to-utvalgs t (pooled/Welch begrunnet); (1c) χ²-uavhengighet; (1d) multippel regresjon med funksjonsform-tolkning + prediksjon (PI vs. KI); (1e) logistisk regresjon (odds-tolkning) + klassifisering mot terskel. **Del 2 – Regneoppgaver:** (2a) datakritikk (misvisende figur) + to-proporsjon z med RCT-kausaltolkning; (2b) tidsrekke (stasjonaritet + eksponentiell glatting + prognose); (2c) KNN-vs-logistisk-anbefaling. Alle tall/kontekster nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave, hver med `tip`-notat om delpoeng (3 oppsett / 4 gjennomføring / 3 konklusjon) og med **konklusjon i kontekst**; R-utskrift og håndregning vist parallelt der begge er mulige.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2: 6-timers klassifiserings-/beslutningstungt sett

- **id:** `met4-nhh-7-3` · **number:** 7.3 · **estimatedMinutes:** 360 · **prerequisites:** `met4-nhh-7-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i H2025-profilen: tung på klassifisering, KNN og forventet nettogevinst i Del 1, og paret t + ARIMA i Del 2.
- **Eksamensbelegg/miks:** Speiler H2025-malen. **Del 1 – Dataanalyse med R** (beskrevet datasett med gjengitte utskrifter): (1a) deskriptiv start (`summary`/histogram/boksplott/søylediagram); (1b) ensidig to-utvalgs t; (1c) goodness-of-fit χ²; (1d) logistisk regresjon + **forvekslingsmatrise/terskler** + **KNN** + **forventet nettogevinst (beslutningsteori)**. **Del 2 – Regneoppgaver:** (2a) **paret t-test**; (2b) regresjon + prediksjon + **AIC-modellvalg**; (2c) tidsrekke (sesong/stasjonaritet + **ARIMA(0,1,1)/MA(1)** + prognose) + CLT-normaltilnærming + prognosekritikk. Alle tall/kontekster nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med `tip` om delpoeng og konklusjon i kontekst; parallell R/håndregning der mulig.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3: prognose for neste sett

- **id:** `met4-nhh-7-4` · **number:** 7.4 · **estimatedMinutes:** 360 · **prerequisites:** `met4-nhh-7-3`
- **kapitteltype:** øvingseksamen
- **description:** Prognose-settet i 6-timersformen: dekker de fire søylene bredt og tar inn de mest sannsynlige tilleggsspørsmålene (invers logit, forventet gevinst, KNN-anbefaling).
- **Eksamensbelegg/miks:** Bygger på analysens prognose (§7): 2025-formen videreført. **Del 1 – Dataanalyse med R** (beskrevet datasett): (1a) deskriptiv + datakritikk-refleksjon; (1b) F-test + to-utvalgs t; (1c) multippel regresjon (log–log-elastisitet + interaksjon) + diagnostikk + **utelatt-variabel-refleksjon** (koeffisient endrer seg); (1d) logistisk regresjon + **invers logit** + klassifisering. **Del 2 – Regneoppgaver:** (2a) to-proporsjon z i et RCT (kausal tolkning forsvarlig — begrunn hvorfor randomiseringen tillater det); (2b) tidsrekke (AR(1) + langtidsprognose mot stasjonært snitt + **E(Yₜ)-utledning** som strekk); (2c) **forventet-nettogevinst-sammenligning** av to terskler + KNN-vs-logistisk-anbefaling. Løsningsforslag som A-besvarelse med `tip` om delpoeng; kontrasten mellom RCT-kausaltolkning (2a) og observasjons-forbeholdene (Del 6) er selve læringspoenget. Tidsbudsjett likevektet over deloppgavene.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.4 | 15+15+15+15 = **60** | 15+15+15+15 = **60** |
| 2 | 2.1–2.6 | 25+20+25+20+20+10 = **120** | 20+15+20+15+15+10 = **95** |
| 3 | 3.1–3.6 | 20+25+20+15+15+10 = **105** | 20+20+15+15+15+10 = **95** |
| 4 | 4.1–4.6 | 25+15+20+15+15+10 = **100** | 20+15+15+15+15+10 = **90** |
| 5 | 5.1–5.5 | 20+20+25+20+10 = **95** | 15+20+20+15+10 = **80** |
| 6 | 6.1–6.3 | 15+15+10 = **40** | 15+15+15 = **45** |
| 7 | 7.1–7.4 | 20+5+5+5 = **35** | 30+0+0+0 = **30** |
| **Sum** | **35 kap.** | **565 ≥ 500 ✓** | **505 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler de fire søylene: Del 2 + 3 + 4 + 5 (inferens + regresjon +
logistisk/klassifisering + tidsrekker) bærer **420 av 565 quiz**. Enkeltkapitlene
med høyest kvote utenom drillene er testoppskriften (2.1), to-utvalgs t (2.3),
funksjonsform (3.2), logistisk odds (4.1) og AR/MA/ARIMA (5.3) — de fem
metodesignalene sensor oftest belønner.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(som ender i konklusjon i kontekst) og poengfordeling. Prøvene samles i ett
prøvekapittel per del (`met4-nhh-<del>-prove`, chapterNumber `<del>.P`) ved wiring
— bygges av samme agent som delen.

**Del 1 — Grunnlag: R, data og regneverktøy**
1. Prøve 1.A (30 min): R-vokabular — forklar/skriv kode for innlasting, indikator, gruppesnitt og boksplott (kap. 1.1).
2. Prøve 1.B (35 min): Deskriptiv tolkning — `summary`/boksplott/histogram, mean vs. median, form → konsekvens for inferens (kap. 1.2).
3. Prøve 1.C (35 min): Regneregler E/Var med kovariansledd + variansminimering ved derivasjon (kap. 1.3).
4. Prøve 1.D (40 min): Normal + CLT — standardisering, `rnorm`-konvertering, normaltilnærming av andel med begrunnelse (kap. 1.4, sjanger P komplett).

**Del 2 — Hypotesetesting og inferens**
1. Prøve 2.A (40 min): Én-/to-utvalgstest etter firetrinnsoppskriften — ensidig-valg og z-vs-t begrunnet (kap. 2.1, 2.3).
2. Prøve 2.B (40 min): F-test lik varians (SE→SD) → pooled/Welch t koblet til F-resultatet (kap. 2.2–2.3, sjanger A+B).
3. Prøve 2.C (40 min): Kjikvadrat begge varianter (uavhengighet + goodness-of-fit) (kap. 2.4).
4. Prøve 2.D (45 min): To-proporsjon z med felles andel + paret t på eksamensnivå (kap. 2.5, sjanger D komplett).

**Del 3 — Lineær regresjon**
1. Prøve 3.A (35 min): Les `lm`-utskrift, tolk koeffisienter i kontekst, dummy-fella, signifikans (kap. 3.1).
2. Prøve 3.B (40 min): Funksjonsform — log–log-elastisitet, log–lin (eksakt prosent), interaksjon, enhetsendring (kap. 3.2).
3. Prøve 3.C (35 min): KI for koeffisient + prediksjon + PI-vs-KI-skillet (kap. 3.3).
4. Prøve 3.D (55 min): Full regresjonskjede + diagnostikk + utelatt-variabel-refleksjon på eksamensnivå (kap. 3.4–3.6, sjanger E–I).

**Del 4 — Logistisk regresjon, klassifisering og beslutningsteori**
1. Prøve 4.A (40 min): Logistisk modell + odds-tolkning (eksakt prosent) + invers logit (kap. 4.1).
2. Prøve 4.B (35 min): Sannsynlighetsprediksjon + klassifisering mot terskel + forvekslingsmatrise/sensitivitet/spesifisitet (kap. 4.2–4.3).
3. Prøve 4.C (35 min): KNN med standardisering + tolkbarhet-vs-prediksjon-anbefaling (kap. 4.4).
4. Prøve 4.D (50 min): Full klassifiseringskjede + forventet nettogevinst / terskelvalg på eksamensnivå (kap. 4.5–4.6, sjanger J–M).

**Del 5 — Tidsrekker**
1. Prøve 5.A (35 min): Stasjonaritet — de tre betingelsene vurdert fra figur, med differensiering (kap. 5.1).
2. Prøve 5.B (40 min): ACF/sesong + dekomponering i trend+sesong+residual (kap. 5.2).
3. Prøve 5.C (45 min): AR/MA/ARMA/ARIMA fra utskrift + hvit støy + E(Yₜ)-utledning (kap. 5.3).
4. Prøve 5.D (50 min): Full tidsrekke — stasjonaritet → modell → prognose (kort+langtid) → glattingskritikk (kap. 5.4–5.5, sjanger N komplett).

**Del 6 — Kausalitet, design og datakritikk**
1. Prøve 6.A (35 min): Kausalitetsdrøfting — observasjonsdata-case, tre alternative forklaringer + RCT-skisse (kap. 6.1).
2. Prøve 6.B (35 min): Seleksjonsbias — mekanisme + retning + hvorfor mer data ikke hjelper; kort faste-effekter-refleksjon (kap. 6.2).
3. Prøve 6.C (30 min): Datakritikk — misvisende figur + publikasjonsbias (kap. 6.3).
4. Prøve 6.D (45 min): Samlet drøftingsprøve: RCT-vs-observasjon + seleksjon + datakritikk på eksamensnivå (kap. 6.1–6.3, sjanger Q+R komplett).

### Øvingseksamener (3 komplette sett — se kap. 7.2–7.4)

| Sett | Profil det speiler | Del 1 (R-dataanalyse) | Del 2 (regneoppgaver) |
|---|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | V2025-malen | Deskriptiv → F-test+t → χ² → regresjon+prediksjon → logistisk+klassifisering | Datakritikk + to-proporsjon z (RCT) · tidsrekke (glatting/prognose) · KNN-vs-logistisk |
| Øvingseksamen 2 (kap. 7.3) | H2025-malen | Deskriptiv → ensidig t → goodness-of-fit → logistisk+forvekslingsmatrise+KNN+forventet nettogevinst | Paret t · regresjon+AIC · tidsrekke (ARIMA(0,1,1)) + CLT + prognosekritikk |
| Øvingseksamen 3 (kap. 7.4) | Prognosen (2025 videreført) | Deskriptiv+datakritikk → F-test+t → regresjon (log–log+interaksjon)+diagnostikk+OVB → logistisk+invers logit | To-proporsjon z (RCT) · tidsrekke (AR(1)+E(Yₜ)-utledning) · forventet-gevinst + KNN-anbefaling |

Til sammen dekker de tre settene samtlige sjangre A–S minst én gang, begge
χ²-variantene, hele tidsrekkeapparatet (stasjonaritet/dekomponering/ARIMA/
glatting/prognose), logistisk + klassifisering + KNN + beslutningsteori, og begge
kausalitets-situasjonene (observasjonsdata med forbehold; RCT med forsvarlig
kausal tolkning). Alle i 6-timers 2025-form med Del 1 R + Del 2 regne, hver
deloppgave teller likt.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formhistorikken og 2025-regimet (6 t, Del 1 R + Del 2
   regne, hver deloppgave teller likt), de fire søylene og prognosen for neste
   sett (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: **perfekt**
   (hypotesetest-oppskriften 2.1/2.6, F-test→t 2.2–2.3, funksjonsform 3.2,
   logistisk odds 4.1, AR/MA/ARIMA 5.3, tidsrekkeprognose 5.4), **kunne**
   (χ²/proporsjon, KI/prediksjon, diagnostikk, klassifisering/KNN/beslutning,
   regneregler/CLT, kausalitet/seleksjon), **kjenne** (paret t, AIC, enhetsendring,
   E(Yₜ)-utledningen, faste effekter/paneldata, datakritikk).
3. **Sjangerguiden** — de 19 oppgavetypene A–S med løsningsoppskriftene fra
   drillkapitlene (2.6, 3.6, 4.6, 5.5, 7.1) i kortform.
4. **Sensorreglene** — de seks metareglene (hver deloppgave teller likt; ingen
   stilpoeng; R ikke krevd; metodefrihet MED begrunnelsesplikt; konklusjon i
   kontekst; finmasket delpoeng, følgefeil ikke straffet dobbelt) + toppkandidat-
   markørene fra kap. 0.1.
5. **Feilkatalogen** — de 14 typiske feilene samlet (SE/SD i F-testen, feil
   hale/teller, ensidig/tosidig, pooled/Welch uten begrunnelse, dummy som
   kontinuerlig, logistisk som log-lineær / ikke via odds, kausal mistolkning av
   observasjonsdata, autoregressiv koeffisienttolkning, PI-vs-KI, ukritisk glatting
   ved trend, feilvurdert stasjonaritet, regning uten ord, glemt kovariansledd,
   prediksjon uten kjente x-verdier), hver med henvisning til kapitlet som
   forebygger den.
6. **Formel- og R-ark i emnets notasjon** — hypotesetestene (F/t/χ²/z, 2.2–2.5),
   regresjon + funksjonsform (3.1–3.3), logistisk + klassifisering (4.1–4.5),
   tidsrekkene (5.1–5.4) og R-vokabularet (1.1) på få sider, med markering «utlede
   aktivt» (variansminimering, E(Yₜ) for AR(1)) vs. «kun bruke» (resten) — og
   N(µ,σ²)/`rnorm`-konverteringen i egen rute. Speiler det medfølgende
   `MET4Formler.pdf` + `relevante_r_kommandoer.pdf` (tren VALG/BRUK, ikke pugg).
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 → 5 (avhengighetene er reelle: fordelinger/CLT før
   inferens, regresjon før logistisk, regneregler før AR(1)-utledningen), Del 6
   parallelt fra midten, prøver etter hver del, de tre øvings-skoleeksamenene de
   siste ukene under tidspress (360 min med likevektet tidsbudsjett; kjør minst én
   med faktisk R åpen for å simulere Del 1).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `met4-nhh` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen. Institusjon
   NHH i `src/app/bok/trinn/hoyere/institusjoner.ts`, visningsnavn «MET4 Empiriske
   metoder».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–S og frekvenstallene resten
   refererer til.
3. **Kjernen i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4 → Del 5
   (fordelinger/CLT/regneverktøy → inferens → regresjon → logistisk/klassifisering
   → tidsrekker).
4. Del 6 (trenger 2.3/2.5 og 3.1/3.5) → Del 7 (øvingseksamenene til slutt — de
   gjenbruker alt).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) i prøvekapitler `met4-nhh-<del>-prove`
   etter hver temadel 1–6.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (escape `"` i norske sitattegn; generer helst via `json.dump`);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med `\\`-escaping i JSON;
      konsistent notasjon ($\hat{p}$, $\hat{\beta}$, $\bar{X}$, $S$ vs. $\sigma$,
      $S_p^2$, $H_0/H_1$, $\varphi$, $Y_t = T_t + S_t + R_t$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle met4-nhh-filer — forbudte
      termer/temaer: «unbiased» (skal være forventningsrett), instrumentvariabel/
      2SLS/Wald, difference-in-differences/regresjonsdiskontinuitet som PENSUM
      (kun Del 0-omtale tillatt), momentgenererende funksjoner, formelle bevis;
      påkrevd: $N(\mu, \sigma^2)$ med VARIANS som andre argument OVERALT, `rnorm`
      alltid med sd (grep etter `rnorm` og verifiser argument/konvertering).
- [ ] **R-kode**: base-R + `dplyr`/`ggplot2`/`glm`/`caret`, syntaktisk gyldig;
      hvert kodeeksempel forklart i ord; «skriv/forklar for hånd»-alternativet
      nevnt der sjangeren krever det; `predict(..., type="response")` for `glm`.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvenstallene herfra), Forkunnskaper-`text` med verifiserte kryssbok-
      lenker, `collapsible` **Symbol- og formelliste** (per delkapittel — forklar
      ALLE symboler/formler brukt i kapitlet), Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints` og
      eksplisitt sjangerforankring, repetisjons-`collapsible`; drillkapitlene har
      løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Kontraktfestede blokker på plass**: SE→SD-fella som `warning` i 2.2;
      N(µ,σ²)-vs-`rnorm` som `warning` i 1.4 (og hvert kapittel som bruker begge);
      «logistisk ≠ log-lineær / tolk via odds» som `warning` i 4.1;
      autoregressiv-koeffisient-fella som `warning` i 5.3; eksponentiell-glatting-
      svakheten som `warning` i 5.4; KNN-standardiseringen i 4.4; forventet-gevinst-
      normaliseringen (`prop.table`) i 4.5.
- [ ] **Hybrid-lån verifisert**: Del 6-kapitlene (6.1–6.3) har drøftings-struktur
      (posisjoner/spenninger → momentliste → A-besvarelse); tolkningskapitlene
      (3.1, 3.2, 4.1, 4.3, 4.5) har drøftings-lånt A-besvarelse; ALLE
      løsningsforslag ender i konklusjon i kontekst.
- [ ] **Kvotesum ≥ 565 quiz og ≥ 505 flashcards** per kvotetabellen
      (kontrollsummér mot §3-tabellen — kvoter er minimum, aldri underskrid).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvings-skoleeksamener i 6-timers
      2025-form (Del 1 R + Del 2 regne) som sammen dekker sjangrene A–S.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, kontekster og
      (beskrevne) datasett; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og
      skal varieres videre, ikke kopieres ordrett); R-funksjonsnavn/formler/
      modelligninger er standard faglig notasjon uten opphavsrettsvern.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
