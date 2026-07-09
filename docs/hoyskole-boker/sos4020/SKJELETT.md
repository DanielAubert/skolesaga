# Bokskjelett: SOS4020 Kvantitativ metode — eksamensrettet lærebok (UiO, master)

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


> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står destillert i dette skjelettet, fra
> `EKSAMENSANALYSE.md` (~30 sett H2003–H2025, 8 sensorveiledninger 2018–2025).
> Alle oppgaver, case, tallsett, R-utskrifter, datavignetter og formuleringer i boka
> skal være NYSKREVNE (se §6-verifikasjon). Ingen oppgavetekster, fasiter eller
> sensorformuleringer fra UiO-arkivet gjengis ordrett; formler, R-kommandonavn og
> standard statistisk notasjon er faglig allmenneie. `(verifiser)` = detalj som bør
> stikkprøves i byggefasen.

---

## 1. Bokens identitet

- **Kurs-id:** `sos4020`
- **Tittel:** *Kvantitativ metode for sosiologi (SOS4020) — regresjon, kausalinferens
  og forskningsdesign i R (UiO master)*
- **Level:** `'Høyskole'`
- **Institusjon:** UiO — Institutt for sosiologi og samfunnsgeografi (ISS)
  (registreres under «UiO» i `institusjoner.ts`, visningsnavn
  «SOS4020 Kvantitativ metode»).
- **Arketype:** **HYBRID med kausalt-regnefag-tyngdepunkt.** Primær:
  **regnefag** (DNA-regnefag.md) for hele regresjons-, R- og inferensmassen
  (Del 2–7) — her kreves mekanisk presisjon, utregning trinn for trinn og
  R-håndverk. Med TUNGE lånte **drøfting**-elementer (DNA-drofting.md) for
  kausalitets-, design- og kritikkdelen (Del 1 og Del 8), der eksamen har en hel
  20-poengs tekstoppgave uten fasit som sensor vurderer på begrepspresisjon,
  metodevalg og selvstendig kausal drøfting. Kalibrering: **~60 % anvendt
  regresjon/R / ~40 % kausal metodedrøfting og design.** Hybrid-valgene er
  dokumentert i §2b. Forbilder: **sos1120** (samme institutt, samme kvantitative
  metodekjerne på bachelornivå — SOS4020 er masteroverbygningen) og **svmet1010**
  (den kvalitative tvillingen; deler «design en studie»- og validitetslogikken).
- **Kapittelantall:** **29** (Del 0: 2 · temadeler 1–8: 18 · eksamenstrening Del 9: 9)
  \+ **8 prøvekapitler** (ett per temadel 1–8).
- **Estimert totaltid:** ~1 640 minutter (~27 timer) fordelt per kapittel under.
- **Quiz totalt:** **574** (krav ≥500) · **Flashcards totalt:** **538** (krav ≥500) —
  se kvotesammendrag i §3. Quiz er høyt fordi eksamen har en HEL auto-rettet
  **flervalgsdel (2.1–2.16, 16 poeng)** pluss auto-rettet håndregning; flervalgs-
  banken er direkte flervalgstrening (jf. §2b).
- **Fakta:** 10 studiepoeng, obligatorisk på master i sosiologi ved ISS/UiO. Emnet
  er **AKTIVT** — kjørt som 6-timers digital skoleeksamen i Inspera (R/RStudio
  tilgjengelig) H2024 og H2025. Vurderingsformen har skiftet to ganger: klassisk
  4-timers skoleeksamen med regresjonstabeller (2003–2015), mappeinnlevering
  (~2016–2023), og dagens 6-timers Inspera-skoleeksamen (H2024→). Boka kalibreres
  **primært mot dagens 6-timers eksamen**, men beholder de dype, uforanderlige
  faglige kravene (regresjon som ryggrad, tolkning > utregning, kausalitet vs.
  korrelasjon som rød tråd) som er stabile på tvers av alle tre fasene. **Overlapp:**
  5 sp med SOSGEO4022 – Advanced regression analysis; boka posisjonerer SOS4020 som
  *bred kvantitativ metode med kausalt design*, ikke ren avansert regresjon.

### Verktøyskifte-note (skal formidles i Del 0)

Statistikkverktøyet skiftet fra **Stata** (do-/log-fil, t.o.m. ~2021) til
**R/RStudio** (fra ~2022 og på alle 6-timers sett). Boka lærer **R som primærverktøy**
med `tidyverse`-syntaks (`%>%`/`|>`), `gtsummary::tbl_summary`, `broom::tidy`,
`sjPlot::plot_model` og `plm`. Stata nevnes kun som historisk kontekst i Del 0.

**Pitch:** SOS4020 følger forskningsprosessen på utleverte datasett i R, men med
**kausalitet som gjennomgående akse**. Eksamen er fast firedelt (60 poeng):
**(1) R-oppgaver 1.1–1.15 (20 p)** — last inn data, kjør modeller, tolk; **(2)
flervalg 2.1–2.16 (16 p)** — auto-rettet; **(3) håndregning 3.1–3.3 (4 p)** —
auto-rettet + én tolkningsdel; **(4) tekstoppgave (20 p)** — kandidaten velger ÉN
av to: enten *design to alternative opplegg og sammenlign* (regresjonsbasert +
kvasi-eksperimentelt), eller *kritisér en gitt studie* for manglende kausalitet og
foreslå bedre design. Fem ferdigheter er praktisk talt garantert i hvert sett:
(1) **tolke en regresjonskoeffisient teknisk OG substansielt** med «kontrollert for»
(~95 %, mest poeng); (2) **konfundering** — hva skjer med koeffisienten når vi
kontrollerer for X (~90 %); (3) **kausalitet vs. korrelasjon + kontrafaktisk
tenkning** (hele tekstoppgavedelen + gjennomgående strykfeil); (4) **logistisk
regresjon** — oddsratio + omregning log-odds→odds→sannsynlighet (H25); (5)
**fasteffektmodell** — innen- vs. mellom-individ-variasjon, tidskonstante variabler
(H24). Sensors gjennomgående regler: **tolkning slår utregning** (halve poengene på
hver output-oppgave ligger i tolkningen), **delvis uttelling er regelen** (følgefeil
gis poeng når R-skriptet er limt inn, oppg. 1.15), og **kausal ydmykhet premieres**
(å overselge korrelasjon som kausalitet er en topp strykfeil). Derfor er boka bygget
som en R-drevet metodebok med innebygd tolknings- og kausaldisiplin: hvert
regnestykke og hver koeffisient ender i en firedelt tolkning som konkluderer i
kontekst OG flagger kausalt forbehold, og øvingsmaterialet drilles mot ALLE fire
eksamensdeler (R + flervalg + håndregning + tekstoppgave).

---

## 2. Makrostruktur

Boka organiseres **etter faglig avhengighet** (regnefag-DNA): kausalt fundament →
R og deskriptiv → OLS → ikke-linearitet/samspill → logistisk → fasteffekt → klassisk
inferens → design. Kausalinferens (Del 1) legges FØRST fordi den er den røde tråden
som farger tolkningen i alle senere kapitler (analysen §1 «strukturelle konstanter»:
kausalitet vs. korrelasjon er akslingen). Del 0 etablerer eksamenskart og
besvarelseshåndverk; Del 9 er eksamenstrening (de to tekstoppgavesjangrene +
R-drill + flervalgsdrill + feilvaksine + modellbesvarelser + øvingseksamener).
Omfanget per del følger gjenganger-score fra analysens temafrekvenstabell (§2) og
prioriteringen (§7): «må beherskes perfekt»-temaene (OLS-tolkning, konfundering,
kausalitet, logistisk, FE, tekstoppgavene) får flest kapitler og oppgaver;
«bør kjenne til»-temaene (klassisk inferens for hånd) får kompakte kapitler.

### Seksjonstitler (blir `sectionNames` i metadata)

| Del | Seksjonstittel | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart og besvarelseshåndverk | 2 | DNA-obligatorisk. Den firedelte 6-timers-formen, verktøyskiftet Stata→R, «regn/kjør — tolk teknisk+substansielt — kausalt forbehold»-mantraet og tolkningskontrakten må etableres før fagstoffet. |
| 1 | Kausalinferens: korrelasjon, konfundering og kontrafaktisk tenkning | 2 | **Fagets røde tråd (analysen §1, §7 pkt. 3).** Kausalitet vs. korrelasjon ~12, konfundering/seleksjon/omvendt kausalitet gjennomgående, kontrafaktisk tilnærming + kausal graf/DAG. Premisset for hele tekstoppgavedelen (20 p) og en topp strykfeil ellers. Drøftesiden — legges først. |
| 2 | R-håndverk og deskriptiv statistikk | 2 | R praktisk ⭐⭐⭐ (fase 3): last data, `tbl_summary`, `hist`, `summary`. Deskriptiv ~15 (gjennomsnitt, SD, median, missing/NA, skjevfordeling). Forutsetning for ALT nedstrøms. Regnefag-kjerne. |
| 3 | Lineær regresjon: OLS, multippel og LPM | 3 | **Ryggraden (analysen §7 pkt. 1–2).** OLS-tolkning ~30, multippel/konfundering ~28, teknisk vs. substansiell tolkning (avgjør poeng), LPM. Tyngste del. Regnefag-kjerne. |
| 4 | Ikke-linearitet og samspill | 2 | Ikke-linearitet (dummysett vs. annengradsledd) ~6, samspill/interaksjon ~7 — hyppige differensieringstemaer; konklusjonen kan skifte mellom lineær og logistisk (H25). Regnefag. |
| 5 | Logistisk regresjon | 2 | **Obligatorisk avansert par (H25 1.10–1.14, stigende ~8).** Log-odds→odds→oddsratio→sannsynlighet; hvorfor logit ≠ OLS. «Må beherskes perfekt» (§7 pkt. 4). Regnefag. |
| 6 | Fasteffektmodell og paneldata | 2 | **Obligatorisk avansert par (H24 1.10–1.14, ~10).** Innen- vs. mellom-individ-variasjon, tidskonstante variabler, «mange konstantledd», pooled/within/between. «Må beherskes perfekt» (§7 pkt. 5). Regnefag. |
| 7 | Klassisk inferens: hypotesetest, KI og håndregning | 2 | Hypotesetest ~20, konfidensintervall/SE/forventningsrett estimator ~8 (mer fase 1). Lever i flervalgs- + håndregningsdelen (2.1–2.16, 3.1–3.3 = 20 p). «Må kunne»/«bør kjenne til». Regnefag. |
| 8 | Forskningsdesign: eksperiment, kvasi-eksperiment og utvalg | 3 | **Tekstoppgavenes fundament (20 p).** Design skisse ~15, kvasi-eksperiment (DiD/RDD/IV) ~8 stigende, eksperiment ~6, utvalg/seleksjon/frafall ~12, operasjonalisering ~9. Drøftesiden — «må beherskes perfekt» (§7 pkt. 6). |
| 9 | Eksamenstrening | 9 | De to tekstoppgavesjangrene (design / kritikk) + R-drill (regnefag-DNA) + flervalgs-/håndregningsdrill + feilvaksine + 3 modellbesvarelser (DNA-krav ≥3) + 2 øvingseksamener (6-timers form). |

Rasjonale for kapittelfordelingen: Nivå 1-temaene fra analysen §7 (OLS-tolkning,
konfundering, kausalitet, logistisk, FE, de to tekstoppgavene, R praktisk) får egne,
godt kvoterte kapitler; Nivå 2-temaene (ikke-linearitet, samspill, hypotesetest,
kvasi-eksperiment i detalj, utvalg/seleksjon, deskriptiv/operasjonalisering) får
solide kapitler; Nivå 3-temaene (klassisk inferens for hånd, between-effects,
begrepsvaliditet) holdes kompakte.

### 2b. Hybrid-valg og avvik fra DNA-malene (dokumentasjonsplikt fra README §2)

**Kausalt-regnefag-tyngdepunkt (~60/40).** Del 2–7 (R/deskriptiv, OLS/LPM,
ikke-linearitet/samspill, logistisk, fasteffekt, klassisk inferens) er
regnefag-kjerne: teori → R-kommando → tolkning (teknisk + substansiell), med ferdige
output-tabeller kandidaten trener på å tolke, og exercise-serier med stigende
vanskelighetsgrad som ender på eksamensnivå (`solution` + `hints`). Del 1
(kausalinferens) og Del 8 (design) er drøfting/hybrid — begrepsdrøfting uten fasit
der sensor vurderer begrepspresisjon, kausal refleksjon og designbegrunnelse.

**Primær arketype er regnefag** fordi ryggraden (OLS/multippel/LPM/logistisk/FE),
R-håndverket og klassisk inferens krever mekanisk presisjon og entydige(re)
fasitsvar, og fordi oppgavemønstrene gjentas år etter år → målrettet drill. **Lånt
fra DNA-drofting.md** for Del 1 og Del 8: blokkrekkefølgen tip Eksamensvinkel → text
landskap → definition kjernebegreper → text posisjoner/spenninger → example
anvendelse → warning typiske feil → exercise → collapsible begrepskart; og
modellbesvarelser i tekstoppgavesjangrene (9.6–9.8).

**Lånt fra DNA-regnefag.md** (Del 2–7 + drillkapitlet 9.3):

1. **`example`/`exercise` med full R-kjøring/utregning OG tolkning** i alle
   regresjons-/inferenskapitlene (2.2, 3.1–3.3, 4.1–4.2, 5.1–5.2, 6.1–6.2, 7.1–7.2):
   gjennomregnede eksempler med intuisjon per steg, R-utskrift kandidaten tolker,
   stigende exercise-serier som ender på eksamensnivå. Tallene skal være «snille» som
   i settene (oddsratio som 1,11; R² som 0,19/0,34; koeffisienter lette å tolke) —
   nyskrevne analoger til veiledningenes tall.
2. **Tolkningskontrakt (hybrid-regel, se §2d — gjelder ALLE koeffisienter/
   regnestykker):** hvert estimat avsluttes med en fast firedelt struktur som ender
   i substansiell konklusjon i kontekst OG kausalt forbehold. En tolkning som stopper
   etter det tekniske ledd får aldri full uttelling (analysen §4: teknisk og
   substansiell tolkning gir SEPARATE poeng).
3. **Formel-/notasjonskontrakt per regnekapittel** (§2c): notasjon i EMNETS form.
4. **R-utskrift som tekst-tabell** (se §2d): output gjengis som monospaced tekst-
   tabell (`summary(lm)`, `tidy(exponentiate=TRUE)`, `plm`-within) siden boka ikke
   kan bruke bilder. Innføres i 2.2, forsterkes gjennom Del 3–6.
5. **R-kode limes ALLTID inn** (analysen §4/§5 feil #14): kandidaten drilles på å
   dokumentere `lm`/`glm`/`plm`-kallene sine, fordi følgefeil gir delvis uttelling
   når skriptet er synlig (oppg. 1.15).
6. **Drillkapittel-mekanikk** i 9.3 (regnefag-DNAets drillkapittel: løsningsoppskrift
   → gjennomkjørt eksamenscase med sensor-margnotater → 10–15 varianter).

**Avvik fra ren regnefag-DNA (begrunnede):**
- **Kausalinferens (Del 1) legges FØRST, ikke sist**, selv om det er drøftestoff.
  Begrunnelse: kausalitet er den røde tråden som skal farge HVER tolkning nedstrøms
  (analysen §1). Tolkningskontraktens ledd 4 (kausalt forbehold) krever at studenten
  har kausalspråket på plass før første regresjon.
- **To hele drøftedeler (Del 1 kausalinferens, Del 8 design)** som et rent regnefag
  ikke ville hatt. Del 8 er tekstoppgavenes (20 p) hjemsted og gis tre kapitler
  (eksperiment / kvasi-eksperiment / utvalg+operasjonalisering).
- **Modellbesvarelsene (9.6–9.8) bruker «E/C-kjerne + A-plusspoeng-lag»** (lånt fra
  sos1120/psy1010/stv1020) i stedet for to separate fulltekstbesvarelser:
  veiledningene skiller selv slik (kjerne som gir bestått + eksplisitte pluss-markører
  for A). A-laget margmarkeres på én besvarelse; en kort kommentert C-variant viser
  gapet. Én modellbesvarelse per tekstoppgavesjanger + én full R-analyse.
- **Feilvaksine-kapittel (9.5)** — utvidelse av DNA-malen (sos1120/stv1020-presedens):
  samler analysens 16 typiske feil (§5) med før/etter-omskrivinger.
- **Pensumforankringen er TYNN.** SOS4020 er et rent metodefag; «pensum» er
  statistiske metoder, kausal metodelære og R-håndverk, ikke navngitte teoretikere
  (analysen §6). Flashcard-profilen dreies derfor fra begrep↔forfatter til
  **begrep↔definisjon↔kontrastbegrep** (OLS↔LPM↔logistisk, log-odds↔odds↔oddsratio↔
  sannsynlighet, innen-↔mellom-individ, konfundering↔seleksjon↔omvendt kausalitet,
  spuriøs↔mediert, DiD↔RDD↔IV, korrelasjon↔kausalitet, teknisk↔substansiell tolkning)
  — nøyaktig presisjonen deloppgavene tester. Norske fagtermer presenteres som fagets
  allmenne begrepsapparat UTEN oppdiktet forfatterattribusjon; R-datasettene NorLAG
  (norsk panel) og PSID/NLSY/AddHealth (fase 2) nevnes kun som datasett-etiketter.
- **Flervalgs-/håndregningsdel = quiz.** Quiz-kvoten (574) er høy fordi eksamen har
  en HEL auto-rettet flervalgsdel (2.1–2.16, 16 p) + auto-rettet håndregning
  (3.1–3.3). Quiz kalibreres som flervalgstrening: nabobegrep-distraktorer, «hvilken
  modell/måltype?»-format, «hvilken feil begår kandidaten?»-format, «tolk denne
  koeffisienten/oddsratioen», og små håndregningsspørsmål (KI, hypotesetest,
  kategoridifferanse som ikke-lineær sammenheng) med oppgitt tabell/formel.
- **Ingen jus-/lovsjekk, ingen WebFetch** (ikke relevant fagtype).

**Bevisst utelatt (analysen §6):** navngitt sosiologisk teori/teoretikere (dette er
metodefag — substansen hentes fra generiske sosiologiske case, ikke pensumsitater);
tunge sannsynlighetsbevis, fordelingsteori utover det nødvendige, maximum likelihood-
utledning (glm brukes, ikke utledes); matrisealgebra for OLS; avansert R-programmering
(kandidaten kjører `lm`/`glm`/`plm`/`tbl_summary`/`plot_model` og tolker — ingen egne
funksjoner/loops). Between-effects (BE) og RDD/IV holdes på oversiktsnivå (§7 pkt. 11,
16). Stata-syntaks utelates (kun R på dagens eksamen).

### 2c. Notasjonskontrakt (AUTORITATIV — brukes i hele boka)

Symbolene under er hentet fra analysens §6 og er bokas standardnotasjon.
README-kravet om **Symbol- og formelliste per delkapittel** (collapsible rett etter
Forkunnskaper) gjelder ALLE kapitler som bruker symboler/formler — også drøfting-
kapitler som nevner $\beta$, OR eller DAG-piler. Listen er per delkapittel og arver
aldri fra tidligere kapitler.

| Notasjon | Betydning |
|---|---|
| $Y_i = \beta_0 + \beta_1 X_{1i} + \dots + \beta_k X_{ki} + \varepsilon_i$ | lineær regresjonsmodell på generell form (residualleddet $\varepsilon_i$ MÅ med) |
| $\hat{Y} = \hat{\beta}_0 + \sum \hat{\beta}_j x_j$ | predikert (forventet) verdi (estimert form, uten $\varepsilon$) |
| $\beta_0$ (konstant, `(Intercept)`) | $E(Y \mid \text{alle } X = 0)$ — meningsfull kun når $X=0$ finnes |
| $\beta_j$ | endring i forventet $Y$ per én enhets økning i $X_j$, **kontrollert for** øvrige |
| $\varepsilon_i = Y_i - \hat{Y}_i$ | residual/restledd |
| $R^2 \in [0,1]$ | forklart andel av variasjonen i $Y$; $1-R^2$ = uforklart |
| $SE(\hat\beta)$ | standardfeil for en koeffisient (fra `Std. Error`) |
| $t = \hat\beta / SE(\hat\beta)$ | t-verdi for en koeffisient; $df = N-k-1$ |
| $p$, $\alpha$ | p-verdi (`Pr(>|t|)`); signifikansnivå (= P(type I-feil)) |
| KI $= \hat\beta \pm t_{\text{krit}} \cdot SE(\hat\beta)$ | konfidensintervall for en koeffisient |
| $H_0, H_A$ | null- og alternativhypotese |
| LPM: $\hat{Y} = P(Y=1)$ | lineær sannsynlighetsmodell — koeffisient = sannsynlighetsendring (i prosentpoeng) |
| $\text{logit}(p) = \ln\!\left(\dfrac{p}{1-p}\right) = \beta_0 + \sum \beta_j X_j$ | logistisk regresjon (log-odds er lineær i X) |
| odds $= \dfrac{p}{1-p}$ | forholdet mellom sannsynlighet for og mot |
| OR $= e^{\beta_j}$ (oddsratio) | multiplikativ endring i odds per enhets økning i $X_j$; OR $>1$ øker odds, $<1$ senker |
| $p = \dfrac{e^{\eta}}{1+e^{\eta}}$, der $\eta = \beta_0+\sum\beta_j x_j$ | omregning log-odds → sannsynlighet |
| $Y_{it} = \beta_0 + \beta_1 X_{it} + \alpha_i + u_{it}$ | fasteffektmodell: $\alpha_i$ = individfast effekt (ett per individ), $t$ = tidspunkt |
| innen- ($\text{within}$) vs. mellom- ($\text{between}$) individ-variasjon | FE bruker within; tidskonstante variabler ($X_i$ uendret over $t$) faller ut |
| $I(X^2)$, $X_1{:}X_2$ / $X_1{*}X_2$ | annengradsledd (kurvlinearitet); samspills-/interaksjonsledd i R-formel |
| $b_3$ (samspillskoeffisient) | betinget effekt: effekten av $X_1$ på $Y$ = $b_1 + b_3 X_2$ |
| $N$, $k$ | antall observasjoner; antall uavhengige variabler |
| R: `Estimate` `Std. Error` `t value` `Pr(>|t|)` | kolonnene i `summary(lm)`-utskrift |

**R-kommandokontrakt (AUTORITATIV):** `lm(Y ~ X1 + X2, data=d)` (OLS/LPM);
`glm(Y ~ X, family=binomial, data=d)` (logistisk); `broom::tidy(m, exponentiate=TRUE,
conf.int=TRUE)` (oddsratio med KI); `plm(Y ~ X, data=d, model="within", index=c("id",
"aar"))` (FE); `plm(..., model="pooling")` (pooled OLS); `gtsummary::tbl_summary(d)`
(deskriptiv); `hist()`, `summary()`; `I(X^2)` (annengradsledd); `X1*X2` (samspill +
hovedledd); `sjPlot::plot_model(m, type="pred", terms=c("X1","X2"))` (prediksjonsplott);
`|>`/`%>%`, `dplyr::select/filter/mutate`. NA = missing.

**Kausaltermer (konsekvent):** avhengig/uavhengig variabel, **konfundering** (bakenfor-
liggende variabel Z påvirker både X og Y → spuriøs sammenheng), **seleksjonsbias**,
**omvendt kausalitet**, **kontrafaktisk** tilnærming (hva ville skjedd uten X?), kausal
graf/**DAG**, **kontrollvariabel**, intern/ekstern validitet, **randomisering**,
kontroll-/behandlingsgruppe, **naturlig eksperiment**, **difference-in-differences
(DiD)** (parallelle trender), **regresjonsdiskontinuitet (RDD)**, **instrumentvariabel
(IV)**, tverrsnitt vs. **paneldata**, register- vs. surveydata, operasjonalisering,
begrepsvaliditet, representativitet, frafall, oversampling.

### 2d. Tolkningskontrakt og R-utskrift-format (AUTORITATIV for regnekapitlene)

**Tolkningskontrakten** er bokas faste svarstruktur for alle estimater (koeffisient,
konstant, $R^2$, oddsratio, prediksjon, samspill, FE-koeffisient). Den gjentas i hvert
regnekapittel som en `tip`-blokk og drilles i 9.3. Fire ledd, alltid:

1. **Teknisk/mekanisk tolkning** — hva størrelsen er og hvordan den leses («for hver
   enhets økning i $X_j$ endres forventet $Y$ med $\hat\beta_j$, kontrollert for de
   øvrige variablene»; for OR: «oddsen multipliseres med $e^{\beta}$»; for LPM:
   «sannsynligheten endres med $\hat\beta$ prosentpoeng»). Angi **tall + fortegn +
   signifikans**.
2. **Substansiell tolkning i kontekst** — samme tall oversatt til studiens virkelighet
   med variabelnavn og enheter («de med ett år mer utdanning har i snitt X kroner
   høyere inntekt, kontrollert for …»; «oddsen for å være i arbeid er 11 % høyere per
   …»). Gir SEPARATE poeng fra ledd 1.
3. **Signifikans/usikkerhet** — er estimatet til å stole på (t-verdi / p / KI)? Merk:
   et estimat vist som `0.0000` pga. skalering (inntekt i kroner) er IKKE null hvis
   fortegn og p viser reell sammenheng (feil #6). Statistisk vs. substansiell
   størrelse skilles.
4. **Kausalt forbehold / konklusjon** — hva funnet betyr for spørsmålet, OG det
   kausale forbeholdet: er dette en kausal effekt eller bare en korrelasjon? Hvilken
   uobservert konfundering / seleksjon / omvendt kausalitet kan true tolkningen? For
   multippel modell: at «kontrollert for …» er nevnt (feil #3, 0,5 trekk uten). Dette
   ledd er SOS4020s signatur — det er her kausal ydmykhet premieres (§4).

Sensorregelen (analysen §4): ledd 1 og 2 gir SEPARATE poeng; et svar som stopper etter
ledd 1 får aldri full uttelling. Ledd 4 (kausalt forbehold) er det som løfter til A.

**R-utskrift-format (tekst-tabell, brukes fra 2.2):** output gjengis slik i `text`-/
`example`-blokker (monospaced, egne NYSKREVNE tall). OLS (`summary(lm)`):

```
Coefficients:
              Estimate  Std. Error  t value  Pr(>|t|)
(Intercept)   184203.1    31205.4     5.90    <0.001 ***
utdanning       1985.2      241.7     8.21    <0.001 ***
kvinne         -8420.4     1533.9    -5.49    <0.001 ***
---
Multiple R-squared:  0.341    N = 428
```

Logistisk (`tidy(glm, exponentiate=TRUE, conf.int=TRUE)`), OR-form:

```
term          OR     conf.low  conf.high  p.value
(Intercept)   0.42     0.31       0.57     <0.001
alder         1.11     1.06       1.16     <0.001
utdanning     1.34     1.19       1.51     <0.001
```

Fasteffekt (`plm(..., model="within")`):

```
             Estimate  Std. Error  t value  Pr(>|t|)
arbeidstimer   -0.187     0.061     -3.07    0.0022 **
Within R-squared: 0.08   N = 1240 (310 individer × 4 år)
```

Kandidaten skal kunne lese: koeffisienter fra `Estimate`, standardfeil fra
`Std. Error`, t-verdi/p, oddsratio fra `OR`-kolonnen, KI fra `conf.low/high`,
konstant fra `(Intercept)`, $R^2$ nederst. Boka viser BÅDE R-utskriften OG
håndregningen parallelt der begge er mulige (f.eks. $t = \hat\beta/SE$ = `t value`;
omregning OR $= e^\beta$; $p = e^\eta/(1+e^\eta)$).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = gjenganger-score (analysen §2) + oppgavesjanger
> (Type 1–11 fra analysen §3) + prioritetsklasse (perfekt / kunne / kjenne, §7).
> **Typiske feil** refererer analysens §5 med #nummer (samlet i 9.5). **Kvote** =
> quiz / flashcards. Regnekapitler (Del 2–7) følger regnefag-DNAets blokkrekkefølge
> (tip Eksamensvinkel → text Forkunnskaper + Symbol-/formelliste → text Motivasjon →
> definition/theorem → text Utledning med intuisjon → example ×2–4 → warning Typiske
> feil → exercise ×6–12 → collapsible Repetisjon). Drøftekapitler (Del 1, 8) følger
> drøftings-DNAets rekkefølge (tip → text landskap → definition kjernebegreper → text
> posisjoner/spenninger → example anvendelse → warning → exercise → collapsible
> begrepskart).

### Del 0 — Eksamenskart og besvarelseshåndverk

#### Kapittel 0.1: Slik testes SOS4020
- **id:** `sos4020-0-1` · **number:** 0.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart.
- *Description:* Emnet, den firedelte 6-timers Inspera-eksamen (R + flervalg +
  håndregning + tekstoppgave), verktøyskiftet Stata→R, forskningsprosess-løypa
  regresjonsdelen følger, og strategien som følger av at faget belønner riktig
  metodevalg, teknisk+substansiell tolkning og kausal ydmykhet.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (~30 sett 2003–2025).
  Skal formidle: (a) **Aktivt masteremne:** obligatorisk på master i sosiologi,
  6-timers digital skoleeksamen i Inspera (R/RStudio, alle hjelpemidler unntatt KI).
  (b) **Formen har skiftet to ganger** (4-timers tabelltolkning 2003–2015 → mappe
  ~2016–2023 → 6-timers Inspera H2024→), men de dype kravene er stabile: regresjon
  som ryggrad, tolkning > utregning, kausalitet vs. korrelasjon som rød tråd.
  (c) **Den faste firedelte formen (60 p):** R-oppgaver 1.1–1.15 (20 p, tolk output;
  1.15 = lim inn skriptet for delvis uttelling), flervalg 2.1–2.16 (16 p, auto-rettet,
  hemmeligholdt), håndregning 3.1–3.3 (4 p, auto-rettet + tolkning), tekstoppgave
  (20 p, velg ÉN av to: design-to-opplegg / kritikk-av-studie). (d) **Karakterskala:**
  A 50–60, B 40–49, C 30–39, D 20–29, E 10–19, F 0–9; tallsvar godtas innenfor
  intervall; formuleringer med tilnærmet samme innhold gir full uttelling. (e)
  **Temafrekvens-tabellen** (analysen §2) destillert: OLS-tolkning ~30, multippel/
  konfundering ~28, teknisk+substansiell tolkning (avgjør poeng), hypotesetest ~20,
  design-skisse ~15, deskriptiv ~15, kausalitet ~12, utvalg ~12, FE ~10,
  operasjonalisering ~9, artikkelkritikk ~9, logistisk ~8, kvasi-eksperiment ~8,
  KI/SE ~8, samspill ~7, ikke-linearitet ~6, eksperiment ~6. (f) **Tolkning slår
  utregning** — halve poengene på hver output-oppgave ligger i tolkningen. (g)
  **Delvis uttelling er regelen** — lim ALLTID inn R-skriptet. Prioritet: perfekt
  (metanivå).
- **Innholdskontrakt:** ingen fagbegreper — presise beskrivelser av de fire delene og
  de tre fasene; oppgavesjanger-katalogen Type 1–11 (§3) i destillert form med typisk
  vekt; tidsbudsjett for 6-timerseksamen (~120 min R + ~50 min flervalg + ~20 min
  håndregning + ~90 min tekstoppgave + margin); verktøyskiftet Stata→R.
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et sett» — gjennomgang av ett nyskrevet 6-timers-
  sett (R-oppgave-åpning på et sosiologisk datasett om utdanning og inntekt +
  flervalgs-smakebit + valget mellom de to tekstoppgavene) som viser hele løypa.
- **Typiske feil:** å bruke for lang tid på R-delen og glemme tekstoppgaven (like mye
  verdt); å svare på BEGGE tekstoppgavene (gir ikke ekstrapoeng); å ikke lime inn
  R-skriptet (mister delvis uttelling); å overse at flervalg + håndregning = 20 p.
- **Kvote:** 14 quiz / 8 flashcards (formatfakta, de fire delene, fasene, forsknings-
  prosess-rekkefølgen).

#### Kapittel 0.2: Besvarelseshåndverket — kjør, tolk teknisk+substansielt, kausalt forbehold
- **id:** `sos4020-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-0-1`
- **Kapitteltype:** besvarelseshåndverk (regnefag-tolkningsdisiplin + drøftings-DNAets
  essayhåndverk for tekstoppgaven).
- *Description:* Sensorens vurderingsfilosofi: hvorfor hver koeffisient krever BÅDE
  teknisk og substansiell tolkning, hvorfor kausal ydmykhet premieres, og de harde
  kravene («kontrollert for», riktig LPM-/oddsratio-tolkning, kausalt forbehold,
  R-skript limt inn) som skiller uttelling fra full uttelling. Innfører
  tolkningskontrakten (§2d) og bokas mantra.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4) — de faste metareglene
  på tvers av veiledningene (H24, H24u, H25). Prioritet: perfekt. Skal operasjonalisere:
  (a) **Tolkning slår utregning** — teknisk («$\hat\beta=1985$») og substansiell («ett
  år mer utdanning ↔ 1985 kr høyere inntekt») gir SEPARATE poeng; innfør
  tolkningskontraktens fire ledd (§2d) som gjennomgående mantra. (b) **«Kontrollert
  for» er hardt krav** i multiple modeller — 0,5 trekk uten (feil #3). (c) **Kausal
  ydmykhet premieres** — å påpeke at et resultat IKKE er kausalt, og hvorfor
  (konfundering/seleksjon/omvendt kausalitet), trekker klart opp; å overselge
  korrelasjon som kausalitet er topp strykfeil (feil #1). (d) **Delvis uttelling / lim
  inn skriptet** — følgefeil i koden gir likevel poeng når `lm`/`glm`-kallet er synlig
  (oppg. 1.15). (e) **Riktig metode for utfallets måltype** — logit/LPM ved dikotom Y,
  begrunnet (feil #7). (f) **Signifikans vs. substans** — et signifikant, men substansielt
  bittelite estimat er ikke «viktig»; et `0.0000`-estimat pga. skalering er ikke null
  (feil #6). (g) **Skjønn over sjekkliste** — sensor bes utvise skjønn; dybde og bredde
  er likeverdige veier til A. (h) **Tekstoppgaven (20 p):** velg ÉN av to; A krever
  egnet+gjennomførbart design MED drøftede begrensninger (parallelle trender ved DiD,
  sammenlignbare grupper, etikk). (i) Nivåbildet: A/B tolker teknisk+substansielt med
  «kontrollert for» og reflekterer kausalt; C får tallene, men blir stående i teknisk
  tolkning / beskriver kausalitet uten å drøfte; E har hull i det avanserte paret
  (logit/FE) og svak kausal forståelse. Bokas mantra innføres: **«kjør — tolk teknisk
  og substansielt — kausalt forbehold»**.
- **Innholdskontrakt:** besvarelsesarkitektur per deloppgave (kjør/definer → teknisk →
  substansiell → signifikans/usikkerhet → kausalt forbehold); tidsbudsjett for 6 timer;
  «lim inn R-skriptet»-regelen; tekstoppgave-disponering (velg sjanger → problemstilling
  → design → sammenlign/kritiser → begrensninger); flervalgsstrategi (eliminasjon,
  nabobegrep-feller).
- **Drøftingsakser:** bredde (alle deloppgaver besvart) vs. dybde (kausal refleksjon
  som løfter til A); hvorfor en tolkning uten substansiell del/kausalt forbehold aldri
  gir full pott; når man skal si «dette er ikke kausalt» selv i en ren regresjonsoppgave.
- **Case-forslag:** Samme koeffisient («$\hat\beta=1985$ for utdanningsår på årsinntekt»)
  tolket tre ganger — E (kun «positiv sammenheng»), C (teknisk tolkning), A (+
  substansiell i kontekst + «kontrollert for» + statistisk vs. substansiell størrelse +
  kausalt forbehold: «dette er en korrelasjon; uobservert evne kan konfundere») — med
  margkommentarer.
- **Typiske feil:** #1 korrelasjon som kausalitet; #2 kun teknisk (eller kun
  substansiell) tolkning; #3 glemt «kontrollert for»; usynlig R-skript (#14).
- **Kvote:** 16 quiz / 12 flashcards (sensorreglene, tolkningskontraktens fire ledd,
  nivåkjennetegn, de harde kravene, tekstoppgave-valget).

### Del 1 — Kausalinferens: korrelasjon, konfundering og kontrafaktisk tenkning

#### Kapittel 1.1: Korrelasjon, kausalitet og kontrafaktisk tenkning
- **id:** `sos4020-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `sos4020-0-2`
- **Kapitteltype:** tema (fagets røde tråd — drøfting).
- *Description:* Hvorfor en regresjon viser samvariasjon, ikke årsak; den kontrafaktiske
  definisjonen av en kausal effekt; og de tre truslene som skiller korrelasjon fra
  kausalitet: konfundering, seleksjon og omvendt kausalitet.
- **Eksamensbelegg:** Kausalitet/korrelasjon ~12 (Type 9, 10); premisset for HELE
  tekstoppgavedelen (20 p) og den mest fremhevede strykfeilen (§5 #1). Prioritet:
  **perfekt** (§7 pkt. 3).
- **Begrepskontrakt:** **kausal effekt (kontrafaktisk)** — forskjellen mellom utfallet
  MED og UTEN behandlingen for samme enhet (det fundamentale problemet: vi ser bare
  ett av dem); **korrelasjon/samvariasjon** ≠ kausalitet; **konfundering** (en
  bakenforliggende Z påvirker både X og Y → spuriøs sammenheng); **seleksjonsbias** (de
  som «velger» X skiller seg systematisk); **omvendt kausalitet** (Y → X i stedet for
  X → Y); **uobservert heterogenitet** (egenskaper vi ikke måler); tre klassiske
  kriterier (samvariasjon, tidsrekkefølge, ikke-spuriøsitet); hvorfor
  observasjonsdata sjelden lukker kausalspørsmålet.
- **Formler/notasjon:** kontrafaktisk notasjon på oversiktsnivå ($Y_i^1$ vs. $Y_i^0$,
  effekt $= Y_i^1 - Y_i^0$); ellers symbolfattig. Symbol-/formelliste forklarer
  potensielt-utfall-notasjonen.
- **Drøftingsakser:** konfundering vs. seleksjon vs. omvendt kausalitet — tre ulike
  trusler med ulik løsning; når «kontroll for Z» hjelper (observert konfunder) vs. ikke
  (uobservert); hvorfor et signifikant regresjonsestimat ALDRI i seg selv er et bevis
  på årsak.
- **Case-forslag:** «Studier viser at de som trener, lever lenger — så trening
  forlenger livet» — drøft konfundering (helsebevissthet), seleksjon (friske trener),
  omvendt kausalitet (syke slutter å trene), og hva et kontrafaktisk ideal ville krevd.
- **Typiske feil:** #1 korrelasjon tolket som kausalitet; å forveksle konfundering og
  seleksjon; å tro at «signifikant» = «kausal».
- **Kvote:** 26 quiz / 30 flashcards (korrelasjon↔kausalitet, konfundering↔seleksjon↔
  omvendt kausalitet, kontrafaktisk definisjon, de tre kriteriene).

#### Kapittel 1.2: Kausale grafer (DAG), konfundere og gode kontrollvariabler
- **id:** `sos4020-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-1-1`
- **Kapitteltype:** tema (drøfting — formidlingsverktøyet for konfundering).
- *Description:* Å tegne kausale grafer (DAG-er) for å resonnere om hvilke variabler
  man SKAL kontrollere for (konfundere) og hvilke man IKKE skal (mediatorer, kollidere)
  — verktøyet som gjør konfunderingsdrøftingen presis.
- **Eksamensbelegg:** Kausal graf/DAG (§7 pkt. 17, fra fase 2-veiledningene); brukes i
  design- og kritikkoppgavene (Type 9, 10) for å begrunne kontrollvalg. Prioritet:
  kunne (verktøy for perfekt-temaet konfundering).
- **Begrepskontrakt:** **kausal graf / DAG** (bokser = variabler, piler = antatt
  årsaksretning, ingen sykler); **konfunder** (felles årsak til X og Y — SKAL
  kontrolleres); **mediator/mellomliggende variabel** (X → M → Y — kontroll fjerner den
  indirekte effekten, ofte IKKE ønskelig); **kollider** (X → C ← Y — kontroll INNFØRER
  bias, «kollider-bias»); **bakdørssti** (backdoor path) som må blokkeres; hvorfor «legg
  til alle variabler» er feil (mediator-/kollider-fella); bro til multippel regresjon
  (Del 3) som operasjonaliserer «kontroll for konfundere».
- **Formler/notasjon:** pil-diagrammene er «formlene» (X, Y, Z, M, C + piler); alle
  tre rollene (konfunder, mediator, kollider) skal kunne tegnes og leses. Symbol-/
  formelliste forklarer DAG-pilnotasjonen.
- **Drøftingsakser:** konfunder vs. mediator — samme variabel, motsatt kontrollråd;
  når kontroll skader (kollider/mediator) vs. hjelper (konfunder); hvorfor en DAG er en
  ANTAKELSE, ikke et bevis.
- **Case-forslag:** «Sammenheng mellom yrke og lønn» — tegn en DAG med utdanning som
  konfunder (kontroller), erfaring som mediator (ikke kontroller hvis du vil ha
  totaleffekten), og et eksempel på en kollider (f.eks. å kontrollere for «ble
  ansatt» skaper bias).
- **Typiske feil:** å kontrollere for en mediator og «forklare bort» effekten man vil
  måle; kollider-bias (kontroll skaper falsk sammenheng); piler i feil retning;
  behandle DAG-en som fasit i stedet for antakelse.
- **Kvote:** 22 quiz / 28 flashcards (konfunder↔mediator↔kollider, bakdørssti,
  DAG-pilmønster↔kontrollråd).

**Prøve-kvote Del 1:** 4 prøver (se §4).

### Del 2 — R-håndverk og deskriptiv statistikk

#### Kapittel 2.1: R og RStudio for eksamen — data inn, oversikt ut
- **id:** `sos4020-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-0-2`
- **Kapitteltype:** tema (R-håndverk — regnefag-kjerne).
- *Description:* Det praktiske R-håndverket eksamen krever: last inn et datasett,
  få oversikt, håndter missing (NA), og forstå `tidyverse`-flyten — slik at kandidaten
  bruker tiden på tolkning, ikke på å slåss med R.
- **Eksamensbelegg:** R praktisk ⭐⭐⭐ (fase 3) — hvert 6-timers sett forutsetter at
  kandidaten laster data og kjører modeller i R (Type 1–7). Prioritet: **perfekt** (en
  forutsetning for hele R-delen, 20 p).
- **Innholdskontrakt (definisjoner/kommandoer som SKAL med, i R-notasjon):** laste data
  (`read.csv`/`load`/`readRDS`), `head()`, `str()`, `summary()`; `tidyverse`-flyt
  (`|>`/`%>%`, `dplyr::select/filter/mutate`); lage en dummy med `mutate(kvinne =
  as.numeric(kjonn=="kvinne"))`; håndtere NA (`na.rm=TRUE`, `is.na()`, listwise
  deletion i `lm`); hvorfor man ALLTID limer inn skriptet (delvis uttelling, oppg.
  1.15). Utledning: ingen (verktøykapittel) — men VIS kommandoene og output.
- **Oppgavesjangre kapitlet skal drille:** «last dette datasettet og beskriv det» (Type
  1-forarbeid); «lag en dummyvariabel»; «hvor mange mangler på X?».
- **Formler/notasjon:** R-kommandoer (ingen matematiske symboler utover variabelnavn).
  Symbol-/formelliste = R-kommandokontrakten (§2c) i miniformat.
- **Typiske feil:** #14 glemme å lime inn skriptet; feil koding av dummy
  (referansekategori); overse at `lm` dropper rader med NA (endret N).
- **Kvote:** 24 quiz / 18 flashcards (R-kommando↔funksjon, dummy-koding, NA-håndtering,
  «hvilken kommando gjør X?»-flervalg).

#### Kapittel 2.2: Deskriptiv statistikk og operasjonalisering
- **id:** `sos4020-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-2-1`
- **Kapitteltype:** tema (regnefag-kjerne).
- *Description:* Å beskrive variablene før modellering: gjennomsnitt, SD, median,
  min/maks, skjevfordeling og missing — med `tbl_summary()` — og å operasjonalisere et
  teoretisk begrep til en målbar variabel med god begrepsvaliditet.
- **Eksamensbelegg:** Deskriptiv ~15 (H24/H24u/H25 oppg. 1.2, Type 8); operasjonalisering
  /begrepsvaliditet ~9 (Type 9-forarbeid, tekstoppgaver). Prioritet: kunne (fast
  forarbeid til enhver analyse).
- **Innholdskontrakt:** gjennomsnitt, standardavvik (spredning), median, min/maks,
  variasjonsbredde, **skjevfordeling** (høyre-/venstreskjev; median vs. gjennomsnitt),
  **missing (NA)** og hva systematisk missing gjør; `tbl_summary()`- og `hist()`-lesing;
  **operasjonalisering** (fra teoretisk begrep → målbar variabel) og **begrepsvaliditet**
  (måler vi det vi tror?); målenivåets betydning for hvilke deskriptive mål som er
  meningsfulle (kort — forutsettes fra bachelornivå).
- **Oppgavesjangre:** «gi deskriptiv statistikk og kommenter fordelingen» (Type 8); «er
  denne variabelen en god operasjonalisering av begrepet?» (Type 9/tekstoppgave).
- **Formler/notasjon:** $\bar{X}=\sum x/N$, $s=\sqrt{\sum(x-\bar x)^2/(n-1)}$; skjevhet
  fra gjennomsnitt vs. median. Symbol-/formelliste forklarer disse.
- **Typiske feil:** rapportere gjennomsnitt for en skjev/kategorisk variabel uten
  forbehold; overse missing; forveksle god operasjonalisering med tautologi (feil #13:
  variabler som måler nesten det samme).
- **Kvote:** 22 quiz / 26 flashcards (deskriptive mål↔målenivå, skjevhet↔median vs.
  gjennomsnitt, `tbl_summary`-lesing, operasjonalisering↔begrepsvaliditet).

**Prøve-kvote Del 2:** 4 prøver (se §4).

### Del 3 — Lineær regresjon: OLS, multippel og LPM

#### Kapittel 3.1: Bivariat OLS — koeffisient, konstant og R²
- **id:** `sos4020-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `sos4020-1-1`, `sos4020-2-2`
- **Kapitteltype:** tema (bokas ryggrad — regnefag-kjerne).
- *Description:* Å kjøre og tolke en enkel `lm()`: stigningstall (teknisk +
  substansielt), konstantledd (når det er meningsfullt), R², og signifikans — bokas
  aller viktigste ferdighet.
- **Eksamensbelegg:** OLS-tolkning ~30 (Type 1, 2), teknisk vs. substansiell tolkning
  (avgjør poeng); i hvert eneste sett. Prioritet: **perfekt** (§7 pkt. 1 — mest poeng).
- **Innholdskontrakt (SKAL med, i emnets notasjon):** modellen $Y_i=\beta_0+\beta_1 X_i
  +\varepsilon_i$ (residual MÅ med); **stigningstall** $\beta_1$ (teknisk: «endring i
  forventet Y per enhets X»; substansiell: i kontekst); **konstant** $\beta_0=E(Y\mid
  X=0)$ — meningsfull for dummy/referansekategori, meningsløs når $X=0$ ikke finnes
  (feil #4); **R²** som andel forklart varians; **dummyvariabel** og referansekategori;
  `summary(lm)`-lesing (§2d); tolkningskontraktens fire ledd (§2d) anvendt. Utledning:
  intuisjon for hva OLS minimerer (kvadrerte residualer) — bruk, ikke fullt bevis.
- **Oppgavesjangre:** «kjør en bivariat regresjon og gi teknisk+substansiell tolkning
  av stigningstallet» (Type 1); «tolk konstantleddet og R²» (Type 2).
- **Formler/notasjon:** hele OLS-notasjonen fra §2c. Symbol-/formelliste komplett.
- **Typiske feil:** #2 kun teknisk (eller kun substansiell) tolkning; #4 tolke
  konstanten substansielt der $X=0$ er umulig; glemme residualleddet i modellformen;
  overselge R² som «forklaringskraft».
- **Kvote:** 30 quiz / 28 flashcards (koeffisient↔konstant↔R²-tolkning, teknisk↔
  substansiell, meningsfull↔meningsløs konstant, `summary`-lesing).

#### Kapittel 3.2: Multippel regresjon, kontrollvariabler og konfundering
- **id:** `sos4020-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `sos4020-3-1`, `sos4020-1-2`
- **Kapitteltype:** tema (kjernen i regresjonsforståelsen — regnefag-kjerne).
- *Description:* Hva som skjer med koeffisienten når vi legger til kontrollvariabler —
  «kontrollert for …», konfundering, endret forklart varians — den ferdigheten sensor
  tester tyngst.
- **Eksamensbelegg:** Multippel/kontroll/konfundering ~28 (Type 3); «hva skjer med
  koeffisienten når vi kontrollerer for X?» (H24 1.5, 0,5 poeng per moment). Prioritet:
  **perfekt** (§7 pkt. 2).
- **Innholdskontrakt:** modellen $Y=\beta_0+\beta_1X_1+\beta_2X_2+\dots+\varepsilon$;
  **kontrollvariabel** og «**kontrollert for**» (hardt krav, feil #3); **konfundering**
  — sammenlign bivariat vs. multippel: går $\hat\beta_1$ opp/ned? endres signifikansen?
  → del av sammenhengen var konfundert med kontrollvariablene; endret R²/forklart
  varians; kobling til DAG (1.2 — kontroller konfundere, ikke mediatorer). Utledning:
  intuisjon for hvorfor en koeffisient endres ved kontroll (den «renses» for den delen
  som gikk via Z). Tolkningskontrakten anvendt med vekt på ledd 1 («kontrollert for»)
  og ledd 4 (kausalt forbehold: gjenværende uobservert konfundering).
- **Oppgavesjangre:** «kjør bivariat og multippel — hva skjer med koeffisienten, og
  hvorfor?» (Type 3); «hvilke variabler bør du kontrollere for, og hvorfor?» (kobler
  1.2).
- **Formler/notasjon:** multippel OLS fra §2c. Symbol-/formelliste komplett.
- **Typiske feil:** #3 glemme «kontrollert for»; å forklare et koeffisientfall som
  «forsvant» uten å si at det var konfundert; å kontrollere for en mediator (kobler
  1.2); tro at kontroll for observerte Z løser ALL konfundering (uobservert gjenstår).
- **Kvote:** 28 quiz / 28 flashcards (bivariat↔multippel-endring, konfundering↔kontroll,
  «kontrollert for»-krav, forklart varians-endring).

#### Kapittel 3.3: Lineær sannsynlighetsmodell (LPM) — OLS på en dikotom Y
- **id:** `sos4020-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sos4020-3-2`
- **Kapitteltype:** tema (regnefag-kjerne, bro til logistisk).
- *Description:* Når den avhengige variabelen er 0/1: å tolke en OLS-koeffisient som en
  endring i sannsynlighet (prosentpoeng), og LPM-ens svakheter — bakteppet for hvorfor
  logistisk regresjon finnes (Del 5).
- **Eksamensbelegg:** LPM (Type 1/6-forarbeid); dikotom Y krever reflektert metodevalg
  (feil #7). Prioritet: kunne (bro mellom OLS og logistisk; §7 «må kunne»).
- **Innholdskontrakt:** **LPM** = `lm()` på en 0/1-utfallsvariabel; koeffisienten =
  **sannsynlighetsendring** (i prosentpoeng), IKKE en «vanlig» Y-endring; svakheter
  (predikerte sannsynligheter kan gå under 0 / over 1; heteroskedastisitet); når LPM
  likevel brukes (enkel tolkning, robusthet); frempek til logistisk (Del 5) som løser
  [0,1]-problemet. Tolkningskontrakten med presisering (ledd 1: «prosentpoeng», ikke
  «enheter»).
- **Oppgavesjangre:** «Y er dikotom — tolk denne LPM-koeffisienten» (Type 1 på dikotom
  Y); «hvorfor kan LPM gi en predikert sannsynlighet på 1,2?».
- **Formler/notasjon:** $\hat Y = P(Y=1)$; ellers OLS-notasjon. Symbol-/formelliste.
- **Typiske feil:** #5 tolke LPM-koeffisienten som en «enhets»-endring i stedet for
  sannsynlighet; ignorere at predikerte sannsynligheter kan falle utenfor [0,1]; kjøre
  OLS på dikotom Y uten å reflektere (feil #7).
- **Kvote:** 18 quiz / 20 flashcards (LPM↔OLS↔logistisk, sannsynlighetsendring↔
  prosentpoeng, LPM-svakheter).

**Prøve-kvote Del 3:** 4 prøver (se §4).

### Del 4 — Ikke-linearitet og samspill

#### Kapittel 4.1: Ikke-linearitet — dummysett og annengradsledd
- **id:** `sos4020-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `sos4020-3-2`
- **Kapitteltype:** tema (regnefag-kjerne).
- *Description:* Når sammenhengen ikke er en rett linje: dummysett vs. kontinuerlig
  spesifikasjon, annengradsledd (`I(X^2)`), og å beskrive formen (konkav/konveks,
  hvor den flater ut) — med prediksjonsplott.
- **Eksamensbelegg:** Ikke-linearitet ~6 (H24 1.8–1.9, H24u, H25 3.3, Type 4);
  håndregningsdelen tester tolkning av kategoridifferanser som ikke-lineær sammenheng.
  Prioritet: kunne (differensiering).
- **Innholdskontrakt:** **dummysett vs. kontinuerlig** (fanger dummysettet en
  ikke-konstant endring mellom kategoriene? argumentér; lineær OK når forskjellene er
  små); **annengradsledd** `Y ~ X + I(X^2)` — signifikant kvadratledd ⇒ ikke-lineær;
  beskrive **formen** (konkav/konveks, monoton/ikke-monoton, hvor den snur/flater ut,
  usikkerhet i halene ved få observasjoner); **prediksjonsplott** (`plot_model(type=
  "pred")`, `cplot`) for å vise formen; tolke **kategoridifferanser** som ikke-lineær
  sammenheng (håndregning-tolkningsdel). Utledning: intuisjon for hvorfor $\beta_2<0$
  gir konkav form.
- **Oppgavesjangre:** «legg til et annengradsledd — er sammenhengen lineær? beskriv
  formen» (Type 4); «passer et dummysett bedre enn en lineær spesifikasjon her?».
- **Formler/notasjon:** $Y=\beta_0+\beta_1X+\beta_2X^2+\varepsilon$; vendepunkt
  $-\beta_1/(2\beta_2)$. Symbol-/formelliste.
- **Typiske feil:** #9 anta lineær sammenheng uten å teste; ikke beskrive formen (bare
  «signifikant»); overse usikkerhet i halene; tolke annengradsleddet feil.
- **Kvote:** 22 quiz / 24 flashcards (dummysett↔kontinuerlig, annengradsledd↔form,
  konkav↔konveks, kategoridifferanse↔ikke-linearitet).

#### Kapittel 4.2: Samspill og interaksjon
- **id:** `sos4020-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-4-1`
- **Kapitteltype:** tema (regnefag-kjerne).
- *Description:* Når effekten av X1 avhenger av X2: samspillsleddet (`X1*X2`), den
  betingede effekten, prediksjonsplott — og at konklusjonen kan skifte mellom lineær
  og logistisk modell.
- **Eksamensbelegg:** Samspill ~7 (H24, H25 1.9 og 1.13, Type 5); H25 tester eksplisitt
  at samspillskonklusjonen kan endres mellom OLS og logistisk. Prioritet: kunne
  (differensiering).
- **Innholdskontrakt:** **samspills-/interaksjonsledd** `Y ~ X1*X2` (= X1 + X2 +
  X1:X2); **betinget effekt** (effekten av X1 = $b_1 + b_3 X_2$); to likeverdige
  tolkningsretninger («effekten av X1 avhenger av X2» ↔ «effekten av X2 avhenger av
  X1»); tolke samspillskoeffisientens fortegn og signifikans; **prediksjonsplott**
  (`plot_model(type="pred", terms=c("X1","X2"))`) som støtte; at konklusjonen kan SKIFTE
  mellom lineær og logistisk modell (H25 — samme data, ulik modell, ulik samspillskonkl.).
  Utledning: hvorfor produktleddet gir en betinget effekt.
- **Oppgavesjangre:** «tolk samspillskoeffisienten — hvordan avhenger effekten av X1 av
  X2?» (Type 5); «utled effekten av X1 for X2=0 og X2=1».
- **Formler/notasjon:** $Y=\beta_0+\beta_1X_1+\beta_2X_2+\beta_3(X_1{\cdot}X_2)+
  \varepsilon$; betinget effekt $=b_1+b_3X_2$. Symbol-/formelliste.
- **Typiske feil:** tolke hovedleddet som «effekten» når et samspillsledd finnes (det er
  effekten når den andre = 0); glemme at samspill har to tolkningsretninger; anta at
  OLS- og logit-konklusjonen er lik.
- **Kvote:** 20 quiz / 22 flashcards (samspillsledd↔betinget effekt, to tolkningsretninger,
  OLS↔logit-konklusjon).

**Prøve-kvote Del 4:** 4 prøver (se §4).

### Del 5 — Logistisk regresjon

#### Kapittel 5.1: Logistisk regresjon — logit, odds og oddsratio
- **id:** `sos4020-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `sos4020-3-3`
- **Kapitteltype:** tema (obligatorisk avansert par — regnefag-kjerne).
- *Description:* Hvorfor logistisk regresjon skiller seg fra OLS/LPM (logit-
  transformasjonen begrenser sannsynligheten til [0,1]), og hvordan man tolker en
  **oddsratio** fra `glm(family=binomial)`.
- **Eksamensbelegg:** Logistisk ~8, stigende (H25 1.10–1.14, Type 6); obligatorisk
  deloppgave. Prioritet: **perfekt** (§7 pkt. 4).
- **Innholdskontrakt:** **logit-transformasjon** $\text{logit}(p)=\ln(p/(1-p))=\beta_0+
  \sum\beta_jX_j$ (log-odds er lineær i X); hvorfor logistisk ≠ lineær (ikke-lineær
  X→P(Y), begrenser P til [0,1], antar Bernoulli/binomial, håndterer heteroskedastisitet);
  **odds** $=p/(1-p)$; **oddsratio** OR $=e^{\beta_j}$ (multiplikativ endring i odds per
  enhet, kontrollert for øvrige); `glm(Y ~ X, family=binomial)` + `tidy(exponentiate=
  TRUE)` (§2d); tolke OR («oddsen øker med 11 % per enhet» når OR=1,11). Utledning:
  intuisjon for hvorfor $e^\beta$ blir en oddsratio (log-odds er additiv → odds er
  multiplikativ). Tolkningskontrakten anvendt på OR (ledd 1: «oddsen multipliseres med
  $e^\beta$»; ledd 2: i kontekst).
- **Oppgavesjangre:** «kjør en logistisk regresjon og tolk oddsratioen» (Type 6);
  «hvorfor logistisk og ikke OLS her?».
- **Formler/notasjon:** logit, odds, OR fra §2c. Symbol-/formelliste komplett.
- **Typiske feil:** #5 tolke OR som en sannsynlighet; forveksle log-odds og odds; tolke
  et OR på 1,11 som «11 prosentpoeng»; glemme «kontrollert for».
- **Kvote:** 26 quiz / 28 flashcards (logit↔odds↔oddsratio↔sannsynlighet, OR>1↔<1,
  logistisk↔OLS-forskjell, `glm`-lesing).

#### Kapittel 5.2: Fra log-odds til sannsynlighet — omregning og prediksjon
- **id:** `sos4020-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-5-1`
- **Kapitteltype:** tema (regnefag-kjerne — den mekaniske omregningen).
- *Description:* Å regne seg fra en logistisk modell til en konkret **sannsynlighet**
  for gitte X-verdier: log-odds → odds → sannsynlighet — den utregningen H25 tester
  eksplisitt (1.11–1.12).
- **Eksamensbelegg:** Omregning log-odds→odds→sannsynlighet (H25 1.11–1.12, Type 6);
  differensierer det avanserte paret. Prioritet: **perfekt** (§7 pkt. 4).
- **Innholdskontrakt:** sett inn X-verdier → **log-odds** $\eta=\beta_0+\sum\beta_jx_j$
  → **odds** $=e^\eta$ → **sannsynlighet** $p=e^\eta/(1+e^\eta)$; regne begge veier;
  hvorfor samme koeffisient gir ULIK sannsynlighetsendring ved ulike X-verdier
  (ikke-lineær); prediksjonsplott (`plot_model(type="pred")`); tolke en predikert
  sannsynlighet i kontekst. Utledning: den logistiske funksjonen som «S-kurve». Snille
  tall (η rundt −1 til 2).
- **Oppgavesjangre:** «regn ut P(Y=1) for en 40-åring med 3 års utdanning» (Type 6-
  håndregning); «hvorfor er sannsynlighetsendringen større i midten enn i halene?».
- **Formler/notasjon:** $\eta$, odds$=e^\eta$, $p=e^\eta/(1+e^\eta)$. Symbol-/formelliste.
- **Typiske feil:** stoppe ved log-odds (glemme å regne videre til sannsynlighet);
  regne som om sannsynlighetsendringen er konstant; regnefeil i $e^\eta$.
- **Kvote:** 22 quiz / 22 flashcards (log-odds→odds→sannsynlighet-steg, S-kurve,
  ikke-konstant sannsynlighetsendring).

**Prøve-kvote Del 5:** 4 prøver (se §4).

### Del 6 — Fasteffektmodell og paneldata

#### Kapittel 6.1: Paneldata og fasteffektmodellen (FE)
- **id:** `sos4020-6-1` · **number:** 6.1 · **estimatedMinutes:** 65 · **prerequisites:** `sos4020-3-2`, `sos4020-1-1`
- **Kapitteltype:** tema (obligatorisk avansert par — regnefag-kjerne).
- *Description:* Hvordan fasteffektmodellen utnytter **innen-individ-variasjon over
  tid** for å fjerne tidskonstant konfundering — verktøyet som nærmer seg kausalitet
  med observasjonsdata (H24 1.10–1.14).
- **Eksamensbelegg:** FE ~10 (H24 1.10–1.14, H24u, Type 7); obligatorisk deloppgave;
  fase 2-kjernekrav. Prioritet: **perfekt** (§7 pkt. 5).
- **Innholdskontrakt:** **paneldata** (samme individer over tid; balansert vs.
  ubalansert panel); modellen $Y_{it}=\beta_0+\beta_1X_{it}+\alpha_i+u_{it}$;
  **fasteffekt** $\alpha_i$ = individfast effekt («mange konstantledd», ett per
  individ); FE bruker **innen-individ-variasjon** (within) og fjerner ALL tidskonstant
  (også uobservert) konfundering; derfor kan man IKKE inkludere **tidskonstante
  variabler** (kjønn faller ut); **pooled OLS** vs. **within** vs. **between**; `plm(Y ~
  X, model="within", index=c("id","aar"))` (§2d). Utledning: intuisjon for «within-
  transformasjon» (trekk fra individets gjennomsnitt → tidskonstant Z forsvinner).
  Tolkningskontrakten: FE-koeffisienten tolkes som endring innen samme individ over tid.
- **Oppgavesjangre:** «kjør en FE-modell og forklar hva den kontrollerer for» (Type 7);
  «hvorfor kan du ikke inkludere kjønn i FE-modellen?».
- **Formler/notasjon:** $Y_{it}$, $\alpha_i$, within/between fra §2c. Symbol-/formelliste.
- **Typiske feil:** #8 inkludere tidskonstante variabler (kjønn) i FE; tro at FE bare
  er «OLS med dummyer» uten å forstå within-logikken; overse at FE ikke fjerner
  tidsvarierende konfundering.
- **Kvote:** 26 quiz / 28 flashcards (innen-↔mellom-individ, FE↔pooled↔between,
  tidskonstant↔tidsvarierende, «mange konstantledd»).

#### Kapittel 6.2: Tolke FE og velge mellom modeller
- **id:** `sos4020-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `sos4020-6-1`
- **Kapitteltype:** tema (regnefag-kjerne).
- *Description:* Å tolke FE-resultater — særlig når en sammenheng som fantes MELLOM
  individer forsvinner INNEN individer (H24 1.13) — og å velge hvilke variabler og
  hvilken modell som passer problemet.
- **Eksamensbelegg:** FE-tolkning (H24 1.13, Type 7); hvilke variabler egner seg for FE
  (de som endrer seg over tid). Prioritet: **perfekt** (§7 pkt. 5).
- **Innholdskontrakt:** tolke at en sammenheng **mellom** individer (tverrsnitt/pooled)
  **forsvinner innen** individer (FE) → mye av tverrsnittssammenhengen var
  tidskonstant konfundering; hvilke variabler egner seg for FE (tidsvarierende:
  inntekt, arbeidstid, sivilstatus — ikke kjønn/fødeland); FE vs. tverrsnitts-OLS på
  panel; når FE er å foretrekke (uobservert tidskonstant konfundering) vs. når det
  koster for mye (lite within-variasjon, presisjon faller); between-effects (BE) som
  nyanse (§7 pkt. 16, oversiktsnivå). Tolkningskontrakten anvendt med kausalt forbehold
  (FE fjerner tidskonstant, IKKE tidsvarierende, konfundering).
- **Oppgavesjangre:** «koeffisienten var positiv i OLS men null i FE — tolk» (Type 7);
  «hvilken av disse variablene egner seg for FE?».
- **Formler/notasjon:** within/between-kontrast fra §2c. Symbol-/formelliste.
- **Typiske feil:** #8 velge tidskonstant variabel for FE; tolke et FE-null som «ingen
  sammenheng» i stedet for «ingen innen-individ-sammenheng»; tro at FE løser ALL
  konfundering (tidsvarierende gjenstår).
- **Kvote:** 22 quiz / 24 flashcards (mellom→innen-forsvinning, egnede FE-variabler,
  FE↔OLS-valg, between-effects).

**Prøve-kvote Del 6:** 4 prøver (se §4).

### Del 7 — Klassisk inferens: hypotesetest, KI og håndregning

#### Kapittel 7.1: Hypotesetest og signifikans
- **id:** `sos4020-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-3-1`
- **Kapitteltype:** tema (regnefag-kjerne — auto-rettet flervalg/håndregning).
- *Description:* Å formulere og teste hypoteser om en koeffisient: H₀/H₁, t-verdi,
  p-verdi, signifikansnivå, forkaste/beholde — og skillet statistisk vs. substansiell
  signifikans.
- **Eksamensbelegg:** Hypotesetest ~20 (H24/H24u/H25 1.1, 1.7, 1.13, Type 8, flervalg
  2.x); i alle faser. Prioritet: **må kunne** (§7 pkt. 10; auto-rettet del, 16+4 p).
- **Innholdskontrakt:** **H₀/H_A** (nullhypotese = «ingen effekt», $\beta=0$);
  **t-verdi** $t=\hat\beta/SE(\hat\beta)$, $df=N-k-1$; **p-verdi** (`Pr(>|t|)`) og
  **signifikansnivå** $\alpha$; **forkaste/beholde** H₀; to- vs. ensidig test;
  **statistisk vs. substansiell signifikans** (et signifikant, men bittelite estimat er
  ikke «viktig»; et stort, men usignifikant estimat er usikkert); lese signifikans fra
  `summary(lm)`-stjerner. Utledning: hva en p-verdi ER (og ikke er). Tolkningskontrakten
  ledd 3.
- **Oppgavesjangre:** «test om koeffisienten er signifikant på 5 %-nivå» (Type 8);
  flervalg om p↔α, type I/II, forkaste/beholde.
- **Formler/notasjon:** $H_0$, $t$, $p$, $\alpha$, $df=N-k-1$ fra §2c. Symbol-/formelliste.
- **Typiske feil:** #6 forveksle statistisk og substansiell signifikans; feil retning
  (forkaste↔beholde H₀); tolke p-verdien som «sannsynlighet for at H₀ er sann»; feil df.
- **Kvote:** 22 quiz / 22 flashcards (H₀↔H_A, t↔p↔α, forkaste↔beholde, statistisk↔
  substansiell signifikans, type I↔II).

#### Kapittel 7.2: Konfidensintervall, standardfeil og håndregning
- **id:** `sos4020-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `sos4020-7-1`
- **Kapitteltype:** tema (kompakt «bør kjenne til» — klassisk inferens, mest fase 1).
- *Description:* Den klassiske inferensen som lever videre i håndregnings- og
  flervalgsdelen: konfidensintervall, standardfeil og forventningsrett estimator —
  nedtonet, men verdt de 4+16 poengene.
- **Eksamensbelegg:** KI/SE/forventningsrett estimator ~8 (mest fase 1; håndregning
  3.1–3.3, Type 8). Prioritet: **kjenne** (§7 pkt. 15 — nedtonet, men i auto-rettet del).
- **Innholdskontrakt:** **standardfeil** $SE(\hat\beta)$ (fra tabell); **konfidens-
  intervall** KI $=\hat\beta\pm t_{\text{krit}}\cdot SE$; **forventningsrett** vs.
  **effektiv** estimator (kort — fase 1-begreper); avlese KI fra R (`confint`); tolke
  KI (om det inneholder 0 → ikke signifikant); frekventistisk tolkning kort.
  Kapitlet sier eksplisitt at dette er nedtonet, men lever i håndregningsdelen.
  Utledning: KI-formelen fra t-fordelingen (bruk, ikke bevis).
- **Oppgavesjangre:** «regn et 95 % KI for koeffisienten» (Type 8-håndregning);
  «inneholder intervallet 0 — hva betyr det?».
- **Formler/notasjon:** KI, $SE$, $t_{\text{krit}}$ fra §2c. Symbol-/formelliste.
- **Typiske feil:** #16 feil kritisk verdi / feil df i KI; forveksle forventningsrett
  og effektiv estimator; tolke KI som «95 % sannsynlig at verdien ligger her».
- **Kvote:** 18 quiz / 16 flashcards (KI↔SE, forventningsrett↔effektiv, KI inneholder
  0↔signifikans, kritisk verdi).

**Prøve-kvote Del 7:** 4 prøver (se §4).

### Del 8 — Forskningsdesign: eksperiment, kvasi-eksperiment og utvalg

#### Kapittel 8.1: Eksperiment — randomisering og validitet
- **id:** `sos4020-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-1-1`
- **Kapitteltype:** tema (tekstoppgavefundament — drøfting).
- *Description:* Det randomiserte eksperimentet som kausal gullstandard: kontroll- og
  behandlingsgruppe, randomisering som nøytraliserer konfundering, og skillet mellom
  intern og ekstern validitet — samt de etiske og praktiske grensene i sosiologien.
- **Eksamensbelegg:** Eksperiment ~6 (2011V, H24 tekstoppg., H25 «Frivillig arbeid og
  livsglede», Type 9); del av design-tekstoppgaven (20 p). Prioritet: **må beherskes
  perfekt** (§7 pkt. 6, 12 — tekstoppgavefundament).
- **Begrepskontrakt:** **randomisert kontrollert eksperiment** (kontroll- vs.
  behandlingsgruppe; randomisering nøytraliserer BÅDE observert og uobservert
  konfundering → sammenlignbare grupper); **intern validitet** (fanger vi virkelig den
  kausale effekten?) vs. **ekstern validitet** (generaliserer den til andre kontekster?);
  **replikasjon**; **selektivt frafall** (attrition) som trussel; **etiske og praktiske
  begrensninger** (kan ikke randomisere folk til arbeidsledighet/utdanning). Kobling:
  eksperimentet er den kontrafaktiske standarden observasjonsstudier måles mot (1.1).
- **Formler/notasjon:** symbolfattig (kontrafaktisk $Y^1-Y^0$ fra 1.1). Symbol-/formelliste
  om nødvendig.
- **Drøftingsakser:** intern vs. ekstern validitet — en RCT har høy intern, men ofte
  lav ekstern validitet; når randomisering er umulig/uetisk → hvorfor sosiologer ofte
  må ty til kvasi-eksperiment (8.2); hva randomisering faktisk kjøper (balanse i
  uobserverte).
- **Case-forslag:** «Skisser et eksperiment for å teste om et jobbsøkerkurs øker
  sysselsetting» — definer behandling, kontroll, randomisering, utfall, og drøft intern
  vs. ekstern validitet og ett etisk hensyn (Type 9, à la 2011V).
- **Typiske feil:** #11 kalle et forskerinnsamlet randomisert forsøk for et
  «kvasi-eksperiment» (og omvendt); forveksle intern og ekstern validitet; overse
  etiske grenser.
- **Kvote:** 22 quiz / 26 flashcards (randomisering↔konfundering, intern↔ekstern
  validitet, kontroll↔behandling, etiske grenser).

#### Kapittel 8.2: Kvasi-eksperiment — DiD, RDD og instrumentvariabler
- **id:** `sos4020-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `sos4020-8-1`, `sos4020-1-2`
- **Kapitteltype:** tema (tekstoppgavefundament — drøfting, stigende viktighet).
- *Description:* Å utnytte naturlig variasjon i eksisterende data for å nærme seg
  kausalitet uten et randomisert forsøk: difference-in-differences (DiD),
  regresjonsdiskontinuitet (RDD) og instrumentvariabler (IV) — hva de forutsetter og
  når de svikter.
- **Eksamensbelegg:** Kvasi-eksperiment ~8, stigende (fase 2-artikkelkritikk, H24
  tekstoppg., H24u IV nevnt, H25 «Arbeidsledighet» DiD-eksempel, Type 9, 10); kjernen i
  design-tekstoppgaven. Prioritet: **må beherskes perfekt** (§7 pkt. 6, 11).
- **Begrepskontrakt:** **naturlig eksperiment** (en «tilfeldig» ytre hendelse/regel-
  endring gir behandlingsvariasjon); **difference-in-differences (DiD)** — sammenlign
  endring over tid i en behandlings- vs. kontrollgruppe; **parallelle trender** som den
  kritiske (utestbare) antakelsen; **regresjonsdiskontinuitet (RDD)** — sammenlign
  enheter rett over/under en terskel (oversiktsnivå); **instrumentvariabel (IV)** — en
  variabel som påvirker X men ikke Y direkte (oversiktsnivå); at et kvasi-eksperiment
  utnytter EKSISTERENDE variasjon, ikke et forskerinnsamlet randomisert forsøk (feil
  #11). Kobling: DiD krever paneldata/gjentatte målinger (Del 6).
- **Formler/notasjon:** DiD som differanse-av-differanser (skisse); ellers symbolfattig.
  Symbol-/formelliste for DiD-oppsettet.
- **Drøftingsakser:** DiD vs. RDD vs. IV — hva hver utnytter og forutsetter; parallelle
  trender som DiD-ens akilleshæl (kan brytes); hvorfor kvasi-eksperiment nærmer seg,
  men ikke garanterer, kausalitet; kvasi-eksperiment vs. ekte eksperiment (feil #11).
- **Case-forslag:** «En kommune innførte gratis SFO — vurder et DiD-design for effekten
  på yrkesdeltakelse blant foreldre» — sett opp behandlings-/kontrollgruppe, drøft
  parallelle trender-antakelsen og hva som kan bryte den (Type 9, à la H25
  «Arbeidsledighet»).
- **Typiske feil:** #11 kvasi-eksperiment forvekslet med eksperiment (forskerinnsamlet
  randomisering der oppgaven ber om naturlig variasjon); #10 foreslå DiD uten å drøfte
  parallelle trender; behandle IV/RDD som fasit uten forutsetninger.
- **Kvote:** 24 quiz / 28 flashcards (DiD↔RDD↔IV, naturlig eksperiment↔ekte eksperiment,
  parallelle trender, kvasi-eksperiment↔kausalitet).

#### Kapittel 8.3: Utvalg, seleksjon, frafall og problemstilling
- **id:** `sos4020-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `sos4020-8-1`
- **Kapitteltype:** tema (tekstoppgavefundament — drøfting).
- *Description:* Fra problemstilling til data: å formulere et forskbart spørsmål med
  avhengig + uavhengig variabel, sikre representativt utvalg, og håndtere seleksjon og
  frafall — både i datainnsamling og i analyse.
- **Eksamensbelegg:** Utvalg/seleksjon/frafall ~12 (fase 1, H24 «Populasjon og utvalg»,
  H25 innvandrere/frafall, Type 9, 10); problemstilling er hyppigst nevnte D/E-skille
  (feil #12). Prioritet: **må beherskes perfekt** (§7 pkt. 13; problemstilling er
  toppkriteriet i alle veiledninger).
- **Begrepskontrakt:** **forskbar problemstilling** (presist spørsmål med avhengig +
  minst én uavhengig variabel — hjørnesteinen i tekstoppgaven, feil #12);
  **målpopulasjon** og **utvalg**; **tilfeldig/stratifisert utvalg**, representativitet;
  **seleksjonsbias**; **frafall** (attrition/non-response) og **selektivt frafall**;
  tiltak i **datainnsamling** (oversampling av undergrupper, oversettelse, registerdata)
  og i **analyse** (kontrollvariabler, vekting); **register- vs. surveydata**; **tverrsnitt
  vs. paneldata** (kobler Del 6). Kobling: kobling problemstilling → data → metode →
  tolkning er toppkriteriet i alle veiledninger (§4).
- **Formler/notasjon:** symbolfattig. Symbol-/formelliste om nødvendig.
- **Drøftingsakser:** seleksjon i datainnsamling vs. i analyse — to inngrepspunkter;
  når lav svarprosent ødelegger (systematisk frafall) vs. bare gir usikkerhet; hvorfor
  en uklar problemstilling senker karakteren mest (D/E-kjennetegn).
- **Case-forslag:** «En survey om frivillig arbeid fikk lav svarprosent blant
  innvandrere» — foreslå tiltak i BÅDE datainnsamling (oversampling, oversettelse,
  registerdata) og analyse (vekting, kontroll), og drøft frafallsskjevheten (Type 10,
  à la H25).
- **Typiske feil:** #12 uklar/uforskbar problemstilling (mangler tydelig avhengig/
  uavhengig variabel); behandle et skjevt/selektert utvalg som representativt; foreslå
  tiltak bare ett sted (datainnsamling ELLER analyse); #13 tautologiske variabler.
- **Kvote:** 24 quiz / 26 flashcards (problemstilling↔avhengig/uavhengig, seleksjon↔
  frafall, oversampling↔vekting, register↔surveydata, tverrsnitt↔panel).

**Prøve-kvote Del 8:** 4 prøver (se §4).

### Del 9 — Eksamenstrening

> Del 9 trener ALLE fire eksamensdeler (R + flervalg + håndregning + tekstoppgave).
> Sjangerkapitlene 9.1–9.2 følger drøftings-DNAets sjangermal (tip Eksamensvinkel →
> text Oppskrift med tidsbudsjett → example gjennomskrevet besvarelse med
> margkommentarer → exercise ×3–6 med momentliste-løsninger); 9.3 bruker regnefag-
> DNAets drillmal; modellbesvarelsene (9.6–9.8) bruker «E/C-kjerne + A-plusspoeng-lag»-
> formatet (§2b). ALT oppgavemateriale er nyskrevet — mønstre og deloppgaveforløp
> klones tett, men ingen formuleringer, case-navn eller talloppsett fra UiO-sett
> gjenbrukes.

#### Kapittel 9.1: Tekstoppgave A — design to opplegg og sammenlign
- **id:** `sos4020-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 1, 8
- **Kapitteltype:** sjanger (tekstoppgave, 20 p — drøfting).
- *Description:* Den ene tekstoppgavesjangeren: skisser to alternative design (et
  regresjonsbasert + et kvasi-eksperimentelt) for samme problemstilling og sammenlign
  dem kritisk — trinn for trinn med tidsbudsjett.
- **Eksamensbelegg:** Type 9 (H25 «Arbeidsledighet og politisk deltakelse», H24
  «Presidentvalget», H24u «KI og arbeidsliv»); én av to valgbare tekstoppgaver (20 p).
  Prioritet: **perfekt** (§7 pkt. 6).
- **Innhold:** Oppskrift (tidsbudsjett ~90 min): (1) presist forskningsspørsmål med
  avhengig + minst én uavhengig variabel; (2) et **regresjonsbasert design** (velg
  OLS/LPM/logit/FE ut fra utfallets måltype, drøft datatype og kontrollvariabler); (3)
  et **kvasi-eksperimentelt design** som utnytter naturlig variasjon (f.eks. DiD — IKKE
  et forskerinnsamlet randomisert eksperiment); (4) **kritisk sammenligning** (regresjon
  er enkelt/deskriptivt men sårbart for konfundering/seleksjon; kvasi-eksperiment
  nærmer seg kausalitet men hviler på antakelser som parallelle trender). Gjennomskrevet
  A-besvarelse med margkommentarer om hva som gir uttelling hvor.
- **Typiske feil:** #10 design uten begrunnelse (ikke knyttet til problemstilling/
  datatype/måltype, ikke drøftet svakheter); #11 kvasi-eksperiment forvekslet med
  eksperiment; #12 uklar problemstilling; velge feil modell for måltypen.
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 9.2: Tekstoppgave B — kritisér en gitt studie
- **id:** `sos4020-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** Del 1, 8
- **Kapitteltype:** sjanger (tekstoppgave, 20 p — drøfting).
- *Description:* Den andre tekstoppgavesjangeren: kritisér en beskrevet studie for
  manglende kausalitet (konfundering, seleksjon, omvendt kausalitet) og foreslå et
  bedre design — også modellen for fase 2-artikkelkritikken (Arbeid 2).
- **Eksamensbelegg:** Type 10 (H24 «Kvinnelige ledere», H24u «Utdanning og dødsrisiko»,
  H25 «Innvandrere og frivillig arbeid»); den andre valgbare tekstoppgaven (20 p).
  Prioritet: **perfekt** (§7 pkt. 6).
- **Innhold:** Oppskrift (~90 min): (1) **kritisk refleksjon** — studien viser
  korrelasjon, ikke kausalitet (uobservert konfundering / manglende kausalt design /
  omvendt kausalitet / seleksjonsbias); (2) **konkrete eksempler** på konfundere
  (sektor, familiebakgrunn) eller seleksjonsmekanismer (frafall blant undergrupper);
  (3) forslag til **bedre design** (longitudinelle data + FE/DiD, IV via lov-/
  regelendring, evt. randomisert eksperiment) MED drøfting av begrensninger; for
  frafallsvarianten: tiltak i BÅDE datainnsamling og analyse. Gjennomskrevet
  A-besvarelse med margkommentarer. Merk at kravlisten er identisk med fase 2-
  artikkelkritikken (Type 11) — nevnes som overføringsverdi.
- **Typiske feil:** #15 ren gjenfortelling av studien uten metodisk vurdering; #1
  akseptere studiens kausalpåstand ukritisk; foreslå et bedre design uten å drøfte dets
  svakheter; overse omvendt kausalitet/seleksjon.
- **Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 9.3: R-drill — hele regresjonskjernen
- **id:** `sos4020-9-3` · **number:** 9.3 · **estimatedMinutes:** 65 · **prerequisites:** Del 2–6
- **Kapitteltype:** drillkapittel (regnefag-DNA — hybrid-lånet i renest form).
- *Description:* Alle R-ferdighetene drillet med løsningsoppskrift, gjennomkjørt
  eksamenscase og varianter på eksamensnivå — OLS-tolkning, multippel/konfundering,
  LPM, annengradsledd, samspill, logistisk (OR + sannsynlighet), fasteffekt.
- **Eksamensbelegg:** R-oppgavene 1.1–1.15 (20 p); Type 1–7 samlet. Formler/kommandoer
  alltid oppgitt, tall alltid snille. Prioritet: perfekt.
- **Innhold:** Løsningsoppskrift (algoritmisk): (1) identifiser utfallets måltype →
  velg modell (OLS/LPM/logit/FE); (2) skriv `lm`/`glm`/`plm`-kallet OG lim det inn;
  (3) les output (§2d); (4) TOLK med tolkningskontraktens fire ledd (obligatorisk siste
  steg — teknisk + substansiell + signifikans + kausalt forbehold). Gjennomkjørt
  eksamenscase med sensor-margnotater. `exercise` ×10–15 som dekker HELE katalogen:
  2 OLS-tolkninger (koeffisient + konstant + R²), 2 multippel/konfundering («hva skjer
  ved kontroll?»), 1 LPM, 1 annengradsledd (beskriv form), 1 samspill (betinget effekt),
  2 logistisk (OR-tolkning + log-odds→sannsynlighet-omregning), 2 fasteffekt (innen↔
  mellom, tidskonstant-fella) — alle med nyskrevne snille tall + full solution + hints.
- **Typiske feil:** #14 usynlig R-skript; #2/#3 tolkning uten substans/«kontrollert
  for»; #5 LPM/OR feiltolket; #7 feil modell for måltype; #8 tidskonstant i FE; #1
  overselge kausalitet.
- **Kvote:** 18 quiz / 10 flashcards.

#### Kapittel 9.4: Flervalgs- og håndregningsdrill
- **id:** `sos4020-9-4` · **number:** 9.4 · **estimatedMinutes:** 55 · **prerequisites:** Del 3–7
- **Kapitteltype:** sjanger/drill (auto-rettet flervalg + håndregning, 16+4 p).
- *Description:* De auto-rettede delene drillet: flervalgsberedskap på tvers av hele
  pensum, og de tre håndregningsoppgavene (KI, hypotesetest, tolke kategoridifferanse
  som ikke-lineær sammenheng).
- **Eksamensbelegg:** Flervalg 2.1–2.16 (16 p, hemmeligholdt) + håndregning 3.1–3.3
  (4 p), Type 8. Prioritet: perfekt (20 av 60 poeng, auto-rettet — presisjon teller).
- **Innhold:** Oppskrift for flervalg (eliminasjon, nabobegrep-feller: OLS↔LPM↔logit,
  log-odds↔odds↔OR, innen↔mellom-individ, konfunder↔mediator↔kollider, statistisk↔
  substansiell signifikans, DiD↔RDD↔IV) + håndregningsoppskrift (KI, t-test, tolke
  kategoridifferanser som ikke-lineær sammenheng). Dette kapitlets store quiz-kvote ER
  flervalgsbanken — «hvilken modell/måltype?»-format, «tolk denne OR-en/koeffisienten»,
  «hvilken feil begår kandidaten?»-format, små håndregningsspørsmål med oppgitt formel.
- **Typiske feil:** forveksle nabobegreper; regnefeil i håndregning (feil df/kritisk
  verdi, #16); tolke kategoridifferanse feil (#9).
- **Kvote:** 24 quiz / 8 flashcards.

#### Kapittel 9.5: Feilvaksinen — de 16 feilene som senker karakteren
- **id:** `sos4020-9-5` · **number:** 9.5 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–8
- **Kapitteltype:** tverrgående drillkapittel (utvidelse av DNA-malen).
- *Description:* Alle 16 sensordokumenterte feil (analysen §5) drillet med før/etter-
  omskrivinger — særlig korrelasjon som kausalitet, kun-teknisk tolkning, glemt
  «kontrollert for», feiltolket LPM/oddsratio, tidskonstant i FE, og kvasi-eksperiment
  forvekslet med eksperiment.
- **Eksamensbelegg:** Analysen §5 komplett. De farligste: #1 (korrelasjon=kausalitet),
  #2 (kun teknisk), #3 («kontrollert for»), #5 (LPM/oddsratio), #8 (tidskonstant i FE),
  #10 (design uten begrunnelse), #11 (kvasi vs. eksperiment), #12 (uklar problemstilling).
  Prioritet: perfekt (feilunngåelse er karakterforsikring).
- **Innhold:** Én seksjon per feil: (a) feilen slik sensor ser den; (b) nyskrevet «slik
  ser den ut i en besvarelse»-utdrag; (c) A-omskriving av samme passasje; (d)
  varsellampe-heuristikk. Feilenes hjemkapitler: #1→1.1, #2→3.1, #3→3.2, #4→3.1, #5→3.3/
  5.1, #6→7.1, #7→3.3, #8→6.1/6.2, #9→4.1, #10→8.2/9.1, #11→8.2, #12→8.3, #13→2.2,
  #14→2.1, #15→9.2, #16→7.2. Driller gjenkjenning («hvilken feil begår denne
  kandidaten?» — utmerket flervalgsformat). De farligste får dobbel dose.
- **Kvote:** 22 quiz / 14 flashcards (feil↔riktig-omskrivingspar).

#### Kapittel 9.6: Modellbesvarelse — full R-analyse (OLS → FE)
- **id:** `sos4020-9-6` · **number:** 9.6 · **estimatedMinutes:** 50 · **prerequisites:** `sos4020-9-3`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** R-oppgavedel (Type 1–7): les datasett → deskriptiv → bivariat +
  multippel OLS → annengradsledd → samspill → logistisk → fasteffekt, med tolkning hele
  veien (Del 2–6).
- **Tema/oppgave (nyskrevet):** En case om utdanning, arbeidstid og inntekt på et
  paneldatasett (à la NorLAG): deskriptiv statistikk → bivariat OLS → multippel med
  konfundering → LPM på en dikotom «i arbeid»-variabel → annengradsledd for alder →
  samspill utdanning×kjønn → logistisk med OR → fasteffekt. R-skript limt inn.
- **Karakternivåer (E/C-kjerne + A-lag, §2b):** Full besvarelse der kjernen (riktig
  modellvalg, korrekte tall innenfor intervall, teknisk tolkning, R-skript synlig) står
  i brødtekst; A-laget margmarkert («her: substansiell tolkning i kontekst — separate
  poeng», «her: kausalt forbehold — uobservert konfundering», «her: kontrollert for»,
  «her: OR omregnet til sannsynlighet»). Kort kommentert C-variant (kun teknisk
  tolkning, glemt «kontrollert for»). Avsluttes med `tip` **Sensorblikket**: momentliste
  + vekting.
- **Typiske feil demonstrert:** #2, #3 (i C-varianten), #5, #8.
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 9.7: Modellbesvarelse — design to opplegg og sammenlign (tekstoppgave)
- **id:** `sos4020-9-7` · **number:** 9.7 · **estimatedMinutes:** 45 · **prerequisites:** `sos4020-9-1`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Tekstoppgave A (Type 9, 20 p): design et regresjonsbasert + et
  kvasi-eksperimentelt opplegg for samme problemstilling og sammenlign.
- **Tema/oppgave (nyskrevet):** «Fører arbeidsledighet til lavere politisk deltakelse?»
  — presist spørsmål → regresjonsdesign (FE på panel) → kvasi-eksperiment (DiD med en
  bedriftsnedleggelse som naturlig eksperiment) → kritisk sammenligning.
- **Karakternivåer:** Kjerne (forskbar problemstilling, begge design skissert, riktig
  modell for måltypen) i brødtekst; A-lag margmarkert («her: parallelle trender-
  antakelsen drøftet», «her: konfundering/seleksjon i regresjonsdesignet», «her:
  begrunnet metodevalg fra utfallets måltype»). Kommentert C-variant (design uten
  begrunnelse, svakheter ikke drøftet, #10). `tip` Sensorblikket.
- **Typiske feil demonstrert:** #10, #11 (i C-varianten), #12.
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 9.8: Modellbesvarelse — kritisér en gitt studie (tekstoppgave)
- **id:** `sos4020-9-8` · **number:** 9.8 · **estimatedMinutes:** 45 · **prerequisites:** `sos4020-9-2`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Tekstoppgave B (Type 10, 20 p): kritisér en beskrevet studie for
  manglende kausalitet og foreslå et bedre design.
- **Tema/oppgave (nyskrevet):** En studie som hevder at «kvinnelige ledere gir lavere
  lønnsgap» ut fra en tverrsnittsregresjon — kritiser korrelasjon-som-kausalitet,
  konkrete konfundere (bransje, bedriftsstørrelse), seleksjon, og foreslå FE/DiD/IV med
  begrensninger.
- **Karakternivåer:** Kjerne (korrelasjon≠kausalitet identifisert, minst én konkret
  konfunder, ett bedre design foreslått) i brødtekst; A-lag margmarkert («her: omvendt
  kausalitet vurdert», «her: bedre designets svakheter drøftet», «her: seleksjons-
  mekanisme konkretisert»). Kommentert C-variant (ren gjenfortelling, #15). `tip`
  Sensorblikket.
- **Typiske feil demonstrert:** #15, #1 (i C-varianten), #10.
- **Kvote:** 8 quiz / 6 flashcards.

#### Kapittel 9.9: Øvingseksamen — komplett 6-timers sett
- **id:** `sos4020-9-9` · **number:** 9.9 · **estimatedMinutes:** 70 · **prerequisites:** Del 1–8
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett i H2024/H2025-form (60 p): **Del 1 = R-oppgaver 1.1–1.15
  (20 p)** (nyskrevet datasett: sosial bakgrunn, utdanning og yrkesdeltakelse — OLS,
  multippel, LPM, annengradsledd, samspill, logistisk med OR/sannsynlighet, fasteffekt,
  + 1.15 lim inn skript) + **Del 2 = flervalg 2.1–2.16 (16 p)** (nyskrevet, hele
  pensumbredden) + **Del 3 = håndregning 3.1–3.3 (4 p)** (KI, hypotesetest,
  kategoridifferanse-tolkning) + **Del 4 = tekstoppgave (20 p)** med de to valgbare
  variantene (design / kritikk). Full momentliste-fasit per deloppgave med markerte
  A-skiller (kjerne vs. A-lag) og R-utskrift forklart; `tip` om vekting (R 20 + flervalg
  16 + håndregning 4 + tekst 20 = 60) og tidsbudsjett; karakterskala A–F.
- **Kvote:** 6 quiz / 4 flashcards.

### Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 30 | 20 | — |
| 1 | 2 | 48 | 58 | 4 |
| 2 | 2 | 46 | 44 | 4 |
| 3 | 3 | 76 | 76 | 4 |
| 4 | 2 | 42 | 46 | 4 |
| 5 | 2 | 48 | 50 | 4 |
| 6 | 2 | 48 | 52 | 4 |
| 7 | 2 | 40 | 38 | 4 |
| 8 | 3 | 70 | 80 | 4 |
| 9 | 9 | 126 | 74 | 1 øvingseksamen |
| **Sum** | **29** | **574 ✓ (≥500)** | **538 ✓ (≥500)** | **32 + 1** |

Summeringskontroll per del (quiz): Del 0: 14+16=30 · Del 1: 26+22=48 · Del 2: 24+22=46 ·
Del 3: 30+28+18=76 · Del 4: 22+20=42 · Del 5: 26+22=48 · Del 6: 26+22=48 ·
Del 7: 22+18=40 · Del 8: 22+24+24=70 · Del 9: 16+16+18+24+22+8+8+8+6=126. Totalsum
30+48+46+76+42+48+48+40+70+126 = **574**.

Summeringskontroll per del (flashcards): Del 0: 8+12=20 · Del 1: 30+28=58 · Del 2: 18+26=44 ·
Del 3: 28+28+20=76 · Del 4: 24+22=46 · Del 5: 28+22=50 · Del 6: 28+24=52 ·
Del 7: 22+16=38 · Del 8: 26+28+26=80 · Del 9: 10+10+10+8+14+6+6+6+4=74. Totalsum
20+58+44+76+46+50+52+38+80+74 = **538**.

**Kvotebegrunnelse (jf. produksjonsløypas «≥500 er GULV»):** Quiz er høyt (574) fordi
eksamen har en HEL auto-rettet **flervalgsdel** (2.1–2.16, 16 p) pluss auto-rettet
**håndregning** (3.1–3.3, 4 p) — til sammen 20 av 60 poeng testes i flervalgs-/
kortsvarform. Flervalgsbanken (kap. 9.4 + hvert temakapittels quiz) er direkte
flervalgstrening og skal dekke hele pensumbredden (modellvalg, OR-/koeffisient-
tolkning, kausalbegreper, designtyper, klassisk inferens). Flashcards (538) ligger
solid over gulvet fordi faget er begrepsrikt på metode- og kausalapparatet (OLS↔LPM↔
logistisk, log-odds↔odds↔oddsratio↔sannsynlighet, innen-↔mellom-individ, konfunder↔
mediator↔kollider, DiD↔RDD↔IV, korrelasjon↔kausalitet, teknisk↔substansiell tolkning),
men lavere enn et rent puggefag fordi den regnetunge kjernen (Del 3–7) har færre
definisjonsbegreper per kapittel og mer utregning. Ryggrads-kapitlene (3.1 OLS ~30,
3.2 konfundering ~28, 1.1 kausalitet, 5.1 logistisk, 6.1 FE, 8.2 kvasi-eksperiment,
8.3 utvalg) er tyngst kvotert; kjenne-kapitlet (7.2 klassisk inferens) lettest.

**Flashcard-profil:** hovedvekt på **begrep↔definisjon↔kontrastbegrep**-par (OLS↔LPM↔
logistisk, log-odds↔odds↔oddsratio↔sannsynlighet, innen-↔mellom-individ-variasjon,
tidskonstant↔tidsvarierende, konfunder↔mediator↔kollider, spuriøs↔mediert, seleksjon↔
frafall, DiD↔RDD↔IV, naturlig↔ekte eksperiment, intern↔ekstern validitet, korrelasjon↔
kausalitet, teknisk↔substansiell tolkning, statistisk↔substansiell signifikans,
forventningsrett↔effektiv estimator) — nøyaktig presisjonen deloppgavene og feilene
#1/#3/#5/#8/#11 tester. Flashcards genereres KUN fra toppnivå `definition`-blokker med
`title` (plattformregel).
**Quiz-profil (= flervalgstrening):** flervalg med nabobegrep-distraktorer, «hvilken
modell/måltype?»-format, «tolk denne oddsratioen/koeffisienten»-format, «hvilken feil
begår kandidaten?»-format, tolkningskontrakt-varianter (teknisk vs. substansiell;
kausal vs. korrelasjonell) og små håndregningsspørsmål (KI, hypotesetest, log-odds→
sannsynlighet, kategoridifferanse) med oppgitt tabell/formel.

---

## 4. Prøver

### Temadelprøver (4 per temadel, Del 1–8 = 32 prøver)

Hver prøve speiler eksamens format (flervalgsinnslag + R-utskrift-tolkning + scenario-
baserte a/b/c-ledd + evt. kortdesign). Omfang 20–45 min. Alle scenarier, datasett,
R-utskrifter og tall er nyskrevne. Prøvekapitler får id `sos4020-<del>-prove`,
chapterNumber `<del>.P`.

- **Del 1:** (1) Korrelasjon vs. kausalitet — 10 flervalg + identifiser
  konfundering/seleksjon/omvendt kausalitet i 3 scenarier; (2) Kontrafaktisk tenkning —
  formuler den kontrafaktiske effekten for 2 case og forklar hvorfor observasjonsdata
  ikke lukker spørsmålet; (3) DAG-verksted — tegn og case-tilpass konfunder/mediator/
  kollider for 2 scenarier + hvilke variabler skal kontrolleres; (4) Full kausaldrøfting
  (momentliste: korrelasjon→trusler→DAG→kontrollvalg).
- **Del 2:** (1) R-håndverk — hvilken kommando gjør X (last, dummy, NA), 10 flervalg +
  2 kodeoppgaver; (2) Deskriptiv — les `tbl_summary`/`hist`, kommenter fordeling/
  skjevhet/missing; (3) Operasjonalisering — er disse variablene gode operasjonaliseringer
  (5 vurderinger + tautologi-felle); (4) Blandet R-/deskriptiv-delprøve.
- **Del 3:** (1) OLS-tolkning — les `summary(lm)`, tolk koeffisient/konstant/R² teknisk
  + substansielt (skriv modellen med residual!); (2) Multippel/konfundering — bivariat
  vs. multippel, hva skjer med koeffisienten og hvorfor, «kontrollert for»; (3)
  LPM-flervalg (10 spørsmål: sannsynlighetsendring, [0,1]-problem, når LPM vs. logit);
  (4) Full regresjonsdelprøve (a–c: modell → konfundering → LPM, momentliste).
- **Del 4:** (1) Annengradsledd — er sammenhengen lineær, beskriv formen (konkav/
  konveks, vendepunkt), 3 case; (2) Dummysett vs. kontinuerlig — velg og begrunn for 3
  scenarier; (3) Samspill — tolk samspillskoeffisient + utled betinget effekt for 2
  case; (4) Blandet ikke-linearitet/samspill-delprøve (inkl. OLS↔logit-konklusjonsskifte).
- **Del 5:** (1) Oddsratio — tolk OR fra `tidy(exponentiate=TRUE)` for 4 koeffisienter
  (OR>1/<1, «kontrollert for»); (2) Omregning — log-odds→odds→sannsynlighet for gitte
  X-verdier, 3 oppgaver; (3) Logistisk-flervalg (10: logit↔odds↔OR↔sannsynlighet,
  hvorfor logit ≠ OLS); (4) Full logistisk delprøve (OR-tolkning + sannsynlighets-
  prediksjon, momentliste).
- **Del 6:** (1) FE-oppsett — forklar within-logikken, hvorfor tidskonstante variabler
  faller ut, «mange konstantledd», 2 scenarier; (2) FE-tolkning — koeffisient positiv i
  OLS men null i FE, tolk (mellom→innen); (3) FE-flervalg (10: innen↔mellom, egnede
  FE-variabler, pooled↔within↔between); (4) Full paneldelprøve (les `plm`-utskrift, tolk,
  velg modell, momentliste).
- **Del 7:** (1) Hypotesetest — H₀/H_A (to-/ensidig), t=β/SE, df=N−k−1, konkluder med
  retning, 2 scenarier; (2) Konfidensintervall — regn KI for en koeffisient + inneholder
  det 0; (3) Inferens-flervalg (12: p↔α, type I/II, forkaste/beholde, statistisk↔
  substansiell signifikans, forventningsrett↔effektiv); (4) Full klassisk-inferens-
  delprøve (hypotesetest + KI, momentliste).
- **Del 8:** (1) Eksperiment — skisser en RCT (behandling/kontroll/randomisering/
  utfall) + drøft intern vs. ekstern validitet + ett etisk hensyn; (2) Kvasi-eksperiment
  — sett opp et DiD-design + drøft parallelle trender-antakelsen for 2 case; (3)
  Utvalg/seleksjon — vurder frafall/representativitet + foreslå tiltak i datainnsamling
  OG analyse; (4) Full designdrøfting (problemstilling → regresjonsdesign →
  kvasi-eksperiment → kritisk sammenligning, momentliste — kloner tekstoppgave A).

### Komplett øvingseksamen (1 — se kap. 9.9)

6 timer, firedelt (R 20 p + flervalg 16 p + håndregning 4 p + tekstoppgave 20 p); full
momentliste-fasit per deloppgave med markerte A-skiller (kjerne vs. A-lag); nyskrevne
datasett, R-utskrifter og tall; karakterskala A–F. Speiler H2024/H2025-formen.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — den firedelte 6-timers Inspera-formen (R + flervalg +
   håndregning + tekstoppgave), verktøyskiftet Stata→R, karakterskala A–F, «kjør —
   tolk teknisk og substansielt — kausalt forbehold» (fra kap. 0.1–0.2); de tre fasenes
   uforanderlige krav.
2. **Fagets røde tråd: kausalitet** — korrelasjon vs. kausalitet, konfundering/seleksjon/
   omvendt kausalitet, kontrafaktisk tenkning og DAG (kap. 1.1–1.2) som farger HVER
   tolkning nedstrøms.
3. **Ryggrads-ferdigheten: tolke regresjonsoutput** — bivariat OLS (3.1), multippel med
   konfundering og «kontrollert for» (3.2), LPM (3.3) som ferdige forløp, med
   tolkningskontrakten (§2d) og feilene #1/#2/#3 innfelt.
4. **Det avanserte paret** — logistisk (OR + log-odds→sannsynlighet, 5.1–5.2) og
   fasteffekt (innen↔mellom, tidskonstant-fella, 6.1–6.2) som oppslag: hvorfor og
   hvordan.
5. **R-håndverket** — last data, deskriptiv, kjør modell, LIM INN skriptet (2.1–2.2,
   9.3), med R-kommandokontrakten (§2c) og utskriftslesing (§2d).
6. **Ikke-linearitet og samspill** — annengradsledd/dummysett (4.1), samspill og
   betinget effekt (4.2) med prediksjonsplott.
7. **Klassisk inferens** — hypotesetest (7.1) og KI/SE (7.2) for flervalgs-/
   håndregningsdelen (feil #6/#16).
8. **Designkartet** — eksperiment (8.1), kvasi-eksperiment DiD/RDD/IV med parallelle
   trender (8.2), utvalg/seleksjon/frafall + problemstilling (8.3); de to tekstoppgave-
   oppskriftene (9.1–9.2).
9. **Begrepsbank med kontraster** — kontrastparene (OLS↔LPM↔logistisk, log-odds↔odds↔
   oddsratio↔sannsynlighet, innen↔mellom-individ, konfunder↔mediator↔kollider, DiD↔RDD↔
   IV, korrelasjon↔kausalitet, teknisk↔substansiell) som oppslag; feilvaksinen (9.5).

---

## 6. Verifikasjon og opphavsrett

- **Alt oppgavemateriale er nyskrevet.** Datavignetter, R-utskrifter, tallsett,
  case-navn, problemstillinger og tekstoppgave-scenarier klones i SJANGER og
  deloppgaveforløp fra UiO-arkivet, men ingen formuleringer, tall eller navn gjenbrukes
  ordrett (README §opphavsrett; analysen §8). Endre tall, parter, fakta og formuleringer.
- **R-kommandonavn, formler og standard statistisk/kausal notasjon er faglig allmenneie**
  og gjengis fritt (§2c).
- **Ingen navngitt sosiologisk teori/teoretiker tilskrives falskt.** Datasett-etikettene
  NorLAG (norsk panel), PSID/NLSY/AddHealth (fase 2) nevnes kun som datasettnavn, aldri
  som sitatkilder.
- **Faglig verifisering i byggefasen:** etterregn alle R-utskrifter (t=β/SE, R², OR=e^β,
  p=e^η/(1+e^η), df=N−k−1) slik at tolkningseksemplene stemmer; sjekk at hver koeffisient
  følger tolkningskontraktens fire ledd; grep etter `-i verifiser` (README fase 6).
  Detaljer som kan variere med kull/veiledningsår er merket `(verifiser)`.
- **Byggefasen bør stikkprøve** at flervalgs-/håndregningsformatet (16+4 p) og
  tekstoppgavevalget (velg 1 av 2) fortsatt gjelder på nyeste sett `(verifiser)`.

---

## 7. Arbeidsdeling mot bygde/skjelett-sosiologibøker (fra analysen §7)

- **sos1120 (Kvantitativ metode, bachelor) — det direkte forkunnskapsnivået.** SOS4020
  forutsetter at deskriptiv statistikk, utvalg, hypotesetest, konfidensintervall og
  enkel regresjon fra sos1120-nivået sitter. Boka **repeterer sos1120-grunnlaget kort**
  (deskriptiv i 2.2, klassisk inferens i 7.1–7.2 som «bør kjenne til») og bygger videre
  til multippel/logistisk/fasteffekt og kausale design. Verktøyet skiller dem: sos1120
  bruker Stata, SOS4020 bruker R. **Ikke dupliser** sos1120s tunge deskriptive/
  krysstabell-/gamma-apparat — SOS4020 tar det som forutsatt.
- **svmet1010 (Kvalitative metoder) — SOS4020s naturlige tvilling.** Samme institutt,
  samme «design en studie»- og validitetslogikk, men motsatt datatype. Der svmet1010
  lærer overførbarhet, feltarbeid og intervju, lærer SOS4020 statistisk generalisering,
  regresjon og kausalinferens. Feilen «kvantitativ logikk i kvalitativ kontekst» i
  svmet1010 er speilbildet av «korrelasjon = kausalitet» her. Design-tekstoppgaven
  (9.1) kan nevne den kvalitative motparten som kontrast, men **ikke overlappe** —
  SOS4020 holder seg til kvantitative/kvasi-eksperimentelle design.
- **sos1004 (Innføring i sosiologi) — leverer den sosiologiske substansen** (teori,
  begreper) som problemstillingene i SOS4020s tekstoppgaver forankres i, men er
  **metodisk uavhengig**. SOS4020 låner sosiologiske case-temaer (arbeidsliv, ulikhet,
  utdanning) uten å lære sosiologisk teori.
- **sos2200 (Organisasjon, ledelse og arbeid) — substansfag uten metodeoverlapp**, men
  flere av SOS4020s eksempeldata (arbeidsliv, ledere, lønn, sykefravær) er hentet fra
  dette feltet — brukbar kilde til realistiske case i modellbesvarelsene.
- **sosant1000 (Sosialantropologi) — liten faglig overlapp** (kvalitativ/etnografisk
  tradisjon nærmere svmet1010); nevnes kun for fullstendighet.
- **Institusjonell overlapp: 5 sp med SOSGEO4022 – Advanced regression analysis.**
  Studenter får ikke full uttelling for begge. Boka posisjonerer SOS4020 som **bred
  kvantitativ metode med kausalt design**, ikke ren avansert regresjon — kausalitets-
  (Del 1) og designdelen (Del 8) er SOS4020s tyngdepunkt mot SOSGEO4022.

**Kryssbok-lenker:** de nevnte sosiologibøkene er foreløpig på **skjelett-stadiet** (ikke
bygget/wiret i plattformen). Byggefasen skal derfor **kun lenke til kapitler som faktisk
finnes** (README Leserkrav): innledningsvis interne forkunnskaper-lenker innad i sos4020;
sos1120/svmet1010 nevnes som **anbefalt følgelesning i prosa uten live-lenke** til de er
bygget. Når en av dem bygges, kan forkunnskaper-blokkene i 2.2/7.1/7.2 (mot sos1120) og
9.1 (mot svmet1010) oppgraderes til markdown-lenker `(verifiser at boka finnes)`.
