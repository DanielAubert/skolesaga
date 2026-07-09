# Bokskjelett: SOS1120 / SOSGEO1120 Kvantitativ metode — eksamensrettet lærebok (UiO)

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
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (18 sett 2003–2018, 5 sensorveiledninger H2011/V2015–V2018).
> Alle oppgaver, case, tallsett, tabeller, Stata-utskrifter og formuleringer i boka
> skal være NYSKREVNE (se §6-verifikasjon). Ingen oppgavetekster, fasiter eller
> sensorformuleringer fra UiO-arkivet gjengis ordrett; formler, Stata-kommandonavn
> og standard statistisk notasjon er faglig allmenneie.

---

## 1. Bokens identitet

- **Kurs-id:** `sos1120` (beholdes teknisk — arkivet ligger under denne koden)
- **Tittel:** *Kvantitativ metode for sosiologi og samfunnsgeografi (SOS1120 / SOSGEO1120) — statistikk, inferens og forskningsdesign (UiO)*
- **Level:** `'Høyskole'`
- **Institusjon:** UiO — Institutt for sosiologi og samfunnsgeografi (ISS)
  (registreres under «UiO» i `institusjoner.ts`, visningsnavn
  «SOS1120 Kvantitativ metode»).
- **Arketype:** **HYBRID med statistikk-tyngdepunkt** — primær: drøfting
  (DNA-drofting.md) for design-/kausalitets-/utvalgsdelene, med TUNGE lånte
  regnefag-elementer (DNA-regnefag.md) i hele statistikk-/inferens-/regresjonsmassen
  (Del 3–9). Forbilde: **stv1020** (nært beslektet hybrid, delt kjerne) og psy1010.
  Kalibrering: **~60 % anvendt statistikk / ~40 % metodedrøfting** — MER regnetungt
  enn STV1020 (som er ~50/50). Hybrid-valgene er dokumentert i §2b.
- **Kapittelantall:** 37 (Del 0: 2 · temadeler 1–9: 24 · eksamenstrening Del 10: 11)
  \+ 9 prøvekapitler (ett per temadel 1–9).
- **Estimert totaltid:** ~2 065 minutter (~34 timer) fordelt per kapittel under.
- **Quiz totalt:** 666 (krav ≥500) · **Flashcards totalt:** 592 (krav ≥500) —
  se kvotesammendrag i §3. Quiz er høyt fordi det nye regimet har en HEL
  **flervalgsdel (MC / Bolk 1)** som rettes automatisk, og flervalgsbanken er
  direkte flervalgstrening (jf. §2b).
- **Fakta:** 10 studiepoeng, ISS/UiO. Innføring i grunnleggende statistiske metoder
  for samfunnsvitenskapelig analyse, med **Stata** som verktøy. **Emnet er nedlagt**
  (siste eksamen V2019) og erstattet av **SOSGEO1120 – Kvantitativ metode**, som
  deler mesteparten av den kvantitative metodekjernen (se nedlagt/etterfølger-note).
  Pensum skiftet underveis: **gammelt regime** (t.o.m. 2013) bygde på en sosiologisk
  metodebok av **Ringdal-typen** (enhet/mangfold, krysstabellanalyse, gamma/Cramers
  V, forskningsdesign); **nytt regime** (2015→) bygde på en mer statistikkorientert
  pensumbok (normalfordeling, samplingfordeling, konfidensintervall, standardfeil)
  \+ eget kapittel om multippel regresjon + formelark. Hjelpemidlene ble stadig
  romsligere (fra kun kalkulator i 2003 til alle bøker + notater + programmerbar
  kalkulator fra 2015) — derfor gir ren formelgjengivelse lite; poengene ligger i
  **riktig metodevalg, korrekt utregning vist trinn for trinn, og substansiell
  tolkning i kontekst**.

### Nedlagt / etterfølger-note (skal formidles i Del 0 og på bokforsiden via description)

SOS1120 hadde siste eksamen vår 2019 og er erstattet av **SOSGEO1120 – Kvantitativ
metode**, som deler den kvantitative metodekjernen (målenivå, deskriptiv statistikk,
standardfeil, konfidensintervall, kjikvadrat, t-test, regresjon, Stata). Boka er
derfor **profilert mot den aktive etterfølgeren**: den bruker SOS1120-arkivet som
empirisk grunnlag, men presenterer stoffet som gjeldende kvantitativ metode for
sosiologi/samfunnsgeografi. **Byggefasen bør skaffe SOSGEO1120-sett for å verifisere
gjeldende form** (rekkefølge på bolker, om Stata-vekten har økt, om
normalfordeling/samplingfordeling har endret plass). Der en detalj kan ha endret seg
med emneomleggingen, merkes den `(verifiser mot SOSGEO1120)`. Kjernen — de sikre
utregningsoppgavene og sensorlogikken — er stabil på tvers av omleggingen.

**Pitch:** Faget skiftet karakter rundt 2015. Det nye regimet — nærmest dagens
SOSGEO1120 — er **statistisk inferens** med praktisk Stata-bruk, og eksamen følger
**forskningsprosessen** på ett datasett: måling → beskrivelse → usikkerhet/inferens →
sammenheng → årsak. Fire ferdigheter er praktisk talt garantert i hvert sett:
(1) **bestem og begrunn målenivå** (~95 %); (2) **les deskriptiv statistikk fra en
frekvenstabell** — modus, median via kumulativ %, andel, skjevhet (~95 %);
(3) **tolk en regresjonskoeffisient og et konstantledd i kontekst** med
«kontrollert for» (~95 %); (4) **tolk R²** (~90 %). Fagets signatur er
**konfidensintervallet** (~85 %, i nesten hver oppgave fra 2015): `estimat ± kritisk
verdi · SE`, med korrekt **frekventistisk tolkning**. Rundt dette ligger
**kjikvadrat-test for hånd** (~85 %), **t-test/hypotesetesting** (~85 %), reell
**sannsynlighetsregning** (normalfordeling, Z, samplingfordeling, sentralgrense-
teoremet) som skiller SOS1120 fra STV1020, og et **Stata-lag** (kandidaten kjører
`ttest`/`reg`/`sum` fra 2018). Statistikken er lavterskel og tolkningsdrevet — INGEN
tunge bevis, fordelingsteori utover normalfordelingen, kombinatorikk eller logistisk
regresjon — men **mekanisk presisjon** (riktig SE, riktig df, riktig kritisk verdi,
utregning vist trinn for trinn) må sitte. Sensors gjennomgående regel er at
**følgefeil straffes minimalt, forståelse gir uttelling selv ved regnefeil, og hvert
regnestykke må ende i en substansiell tolkning i kontekst**. Derfor er boka bygget
som en regnetung metodebok med innebygd tolkningsdisiplin: hvert regnestykke ender i
en konklusjon, hver liste (kausalitetskriterier, KI-tolkning) leveres komplett, og
øvingsmaterialet drilles mot BEGGE eksamensdeler (flervalg + utregning + Stata),
organisert etter forskningsprosessen slik Del 2-casene alltid er.

---

## 2. Makrostruktur

Boka organiseres **etter forskningsprosessen**, slik den sammenhengende utregnings-
delen (Del 2 i settene) alltid gjør (analysen §1, §7): måling (målenivå) →
beskrivelse (deskriptiv statistikk) → usikkerhet (sannsynlighet, standardfeil,
konfidensintervall) → inferens (t-test, kjikvadrat) → sammenheng (krysstabell,
regresjon) → årsak (kontroll, spuriøsitet, design). Del 0 etablerer eksamenskart og
besvarelseshåndverk; Del 10 er eksamenstrening (flervalgsberedskap + utregningscase +
regnedrill + drøftedrill + feilvaksine + modellbesvarelser + øvingseksamener).
Omfanget per del følger gjenganger-score fra analysens temafrekvenstabell (§2):
~95 %-temaene får flest kapitler og oppgaver, ~30–45 %-temaene får kompakte kapitler.

### Seksjonstitler (blir `sectionNames` i metadata)

| Del | Seksjonstittel | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart og besvarelseshåndverk | 2 | DNA-obligatorisk. Regimeskiftet 2015, forskningsprosess-løypa, todelingen (flervalg + utregning + Stata) og «regn — tolk i kontekst — konkluder»-mantraet må etableres før fagstoffet. |
| 1 | Forskningsdesign, kausalitet og utvalg | 4 | Kausalmodell/stimodell ~70 %, spuriøsitet/kontroll ~65 %, utvalg/generalisering ~75 %, eksperiment/kausalitet ~35 %, Simpsons paradoks ~20 %, design-essay ~30 % (gammelt regime). Drøftesiden av faget — innledningen til forskningsprosessen. |
| 2 | Variabler og målenivå | 1 | Målenivå ~95 % — fagets sikreste enkelttema og styrer ALT nedstrøms (valg av sentralmål, korrelasjonsmål, dummyer, om gjennomsnitt er meningsfullt). Ett tungt, godt kvotert kapittel. |
| 3 | Deskriptiv statistikk fra frekvenstabell | 2 | Deskriptiv fra tabell ~95 %; standardavvik ~50 %, boksplott/skjevhet i flervalgsdelen. Hybrid-del: regnefag-lån. |
| 4 | Sannsynlighet: normalfordeling og samplingfordeling | 2 | **SOS-unikt (ikke i STV1020).** Standard normalfordeling/Z ~55 %; samplingfordeling + CLT ~50 %. Fundamentet for standardfeil og konfidensintervall. Regnefag-lån. |
| 5 | Standardfeil og konfidensintervall | 3 | **Fagets bærebjelke — egen del.** KI ~85 % (nesten hver oppgave, flere per sett), SE ~70 %. Signaturen i det nye regimet. Regnefag-lån + frekventistisk tolkningsdisiplin. |
| 6 | Hypotesetesting: t-test og kjikvadrat | 3 | t-test/hypotesetesting ~85 %, hypoteseformulering ~85 %, kjikvadrat ~85 %, to-utvalgs t-test ~55 %. De sikreste inferens-utregningene. Regnefag-lån. |
| 7 | Bivariat analyse: krysstabell og korrelasjonsmål | 2 | Krysstabell/prosentdiff/Cramers V ~70 %; gamma ~45 % (gammelt regime); Pearsons r ~40 %; korrelasjonsmålvalg lever videre. Hybrid: regnefag-lån + valg-begrunnelse. |
| 8 | OLS-regresjon: tolkning, dummy og kontroll | 5 | Ryggraden. Tolke konstant/koeffisient ~95 %, R² ~90 %, prediksjon ~85 %, t-test av b ~85 %, dummy/samspill ~60 %, kontroll/spuriøsitet ~65 %. Regnefag-lån + Stata-utskrift. |
| 9 | Stata i praksis | 2 | **SOS-unikt (STV1020 leser bare R).** Stata-praksis ~15 % (men økende, egen bolk V2018). Å lese Stata-utskrift er nødvendig i HELE Del 8; å kjøre kommandoer er V2018-ferdigheten. |
| 10 | Eksamenstrening | 11 | Flervalgssjanger + utregningscase-sjanger + regnedrill (regnefag-DNA) + tegne-/drøftedrill + feilvaksine + 3 modellbesvarelser (DNA-krav ≥3) + 3 øvingseksamener (nytt regime, Stata-bolk, blandet/gammelt regime). |

Rasjonale for kapittelfordelingen: Nivå 1-temaene fra analysen §7 (målenivå,
deskriptiv, regresjonstolkning, konfidensintervall, kjikvadrat, t-test) får egne,
godt kvoterte kapitler; Nivå 2-temaene (standardfeil/samplingfordeling, normal-
fordeling, krysstabell, kontroll/stimodell, dummy/samspill, utvalg) får solide
kapitler; Nivå 3-temaene (to-utvalgs t-test, residualer/forutsetninger, gamma,
Pearsons r, beta, Stata, Simpsons paradoks, design-/case-essay) samles i kompakte
kapitler eller randsoner — IKKE egne tunge kapitler.

### 2b. Hybrid-valg og avvik fra DNA-malene (dokumentasjonsplikt fra README §2)

**Statistikk-tyngdepunkt (~60/40) — mer regnetungt enn STV1020.** Der STV1020 er
~50/50 design/regresjon, dreier SOS1120 tyngdepunktet mot anvendt statistikk:
Del 3–9 (deskriptiv, sannsynlighet, standardfeil/KI, hypotesetest, krysstabell,
regresjon, Stata) er regnefag-lån; Del 1–2 (design/kausalitet/utvalg, målenivå) er
drøfting/hybrid. Analysen §7 anbefaler eksplisitt denne kalibreringen.

**Primær arketype er drøfting** fordi ~40 % av faget (forskningsdesign, kausalitet,
spuriøsitet, utvalg/generalisering, målenivå-resonnement) er begrepsdrøfting uten
fasit der sensor vurderer begrepspresisjon og substansiell tolkning. Design-/
kausalitetskapitlene (Del 1) følger drøftings-DNAets blokkrekkefølge: tip
Eksamensvinkel → text landskap → definition kjernebegreper → text posisjoner/
spenninger → example anvendelse → warning typiske feil → exercise → collapsible
begrepskart.

**Lånt fra DNA-regnefag.md** (begrunnelse: SOS1120 har faktisk sannsynlighetsregning
og en tung KI-/inferens-/regresjonsmasse der mekanisk presisjon kreves; analysen §7
anbefaler hybrid regnefag med «utregning vist trinn for trinn»):

1. **`example`/`exercise` med full utregning OG tolkning** i alle statistikk-/
   inferens-/regresjonskapitlene **3.1–3.2, 4.1–4.2, 5.1–5.3, 6.1–6.3, 7.1, 8.1–8.5**
   (+ drillkapitlet 10.3): gjennomregnede eksempler steg for steg med intuisjon per
   steg, exercise-serier med stigende vanskelighetsgrad som ender på eksamensnivå,
   alle med `solution` + `hints`. Tallene skal være «snille» som i eksamenssettene
   (heltalls-koeffisienter, SE lette å kvadrere, t-verdier rundt 1,5–13, R² som
   0,19/0,34) — nyskrevne analoger til veiledningenes tall.
2. **Tolkningskontrakt (hybrid-regel, se §2d — gjelder ALLE regnestykker):** hvert
   regnestykke og hver koeffisient avsluttes med en fast firedelt struktur som ender
   i en substansiell konklusjon i kontekst. En utregning uten kontekst-konklusjon er
   ikke ferdig — dette speiler sensorregelen (analysen §4) om at teknisk og
   substansiell tolkning gir SEPARATE poeng, og at KI-tolkningen må treffe den
   frekventistiske betydningen.
3. **Formel-/notasjonskontrakt per regnekapittel** (regnefag-DNAets innholdskontrakt):
   formler og notasjon angis eksplisitt under (§2c) og skal brukes i EMNETS notasjon
   — ikke lærebok-alternativer. Formelark-tenkning: alle formler oppgis der de brukes
   (hjelpemidlene er romslige), men VALGET av formel (hvilken SE, hvilken kritisk
   verdi) må begrunnes.
4. **Stata-utskrift som tekst-tabell** (se §2d): tabellene i papiroppgavene HAR
   Stata-form, og fra 2018 kjører kandidaten kommandoer. Siden boka ikke kan bruke
   bilder, gjengis Stata-utskrift som monospaced tekst-tabell (Coef. / Std. Err. /
   t / P>|t| / [95% Conf. Interval] / Beta, R-squared nederst). Innføres i 8.1,
   forsterkes i 8.3/9.1 og modellbesvarelse 10.7.
5. **Reell sannsynlighetsregning (SOS-unikt, Del 4):** standard normalfordeling, Z,
   samplingfordeling, sentralgrenseteoremet og P(x̄ > verdi) er FAKTISK pensum
   (analysen §2 funn 5) — STV1020 utelukker dette. Nivået er lavterskel (tabell-
   oppslag, tommelregler), men begrepene må forstås. Dette er regnefag-lån.
6. **Drillkapittel-mekanikk** i 10.3 (regnefag-DNAets drillkapittel: løsningsoppskrift
   → gjennomregnet eksamenscase med sensor-margnotater → 10–15 varianter).

**Avvik fra ren drøftings-DNA (begrunnede):**
- **Organisering etter forskningsprosessen, ikke etter frekvens** (drøftings-DNA
  ordner temadeler etter frekvens). Begrunnelse: utregningsdelen ER én sammenhengende
  case som følger prosessen fra måling til årsak; å speile den rekkefølgen trener
  overgangene mellom trinnene. Frekvensen styrer i stedet OMFANGET.
- **To hele SOS-unike deler (Del 4 sannsynlighet, Del 5 standardfeil/KI)** som
  STV1020-skjelettet ikke har. Del 5 er fagets bærebjelke og gis egen del med tre
  kapitler.
- **Egen Stata-del (Del 9)** — STV1020 leser bare R-utskrift i regresjonskapitlene;
  SOS1120 har en egen Stata-bolk på eksamen (V2018) og gir Stata et eget kapittelpar.
- **Modellbesvarelsene (10.6–10.8) bruker «E/C-kjerne + A-plusspoeng-lag»** i stedet
  for to separate fulltekstbesvarelser (lånt fra psy1010/stv1020): veiledningene
  skiller selv slik (kjernemomenter som gir bestått + eksplisitte pluss-markører for
  A). A-laget margmarkeres på én besvarelse; en kort kommentert C-variant viser gapet.
- **Feilvaksine-kapittel (10.5)** — utvidelse av DNA-malen (stv1020/psy1010-presedens):
  samler analysens 15 typiske feil (§5) med før/etter-omskrivinger.
- **Pensumforankringen er TYNN og utgave-sensitiv.** Emnet hadde to pensumregimer
  (Ringdal-type gammelt; statistikkorientert bok + Stata nytt) uten et enkelt
  navngitt signaturverk som K&W i STV1020. Flashcard-profilen dreies derfor fra
  begrep↔forfatter til **begrep↔definisjon↔kontrastbegrep** (nominal↔ordinal↔
  intervall↔forholdstall, standardavvik↔standardfeil, kontroll↔interaksjon,
  spuriøs↔mediert, to-↔ensidig test, type I↔II, deskriptiv↔inferens) — nøyaktig
  presisjonen deloppgavene tester. Norske fagtermer presenteres som fagets allmenne
  begrepsapparat UTEN oppdiktet forfatterattribusjon; «Ringdal-type» og
  «statistikkorientert bok» nevnes kun som regime-etiketter, aldri som falske sitater.
  Alt som kan ha endret seg med SOSGEO1120-omleggingen merkes `(verifiser mot
  SOSGEO1120)`.
- **Flervalgsdel = quiz.** Quiz-kvoten (666) er høy fordi det nye regimet har en HEL
  auto-rettet flervalgsdel (MC / Bolk 1, 13+ spørsmål, vektes likt med utregnings-
  delen). Quiz kalibreres som flervalgstrening: nabobegrep-distraktorer, «hvilket
  målenivå/korrelasjonsmål?»-format, «hvilken feil begår kandidaten?»-format og små
  regne-/tolkningsspørsmål med oppgitt tabell/formel. NB: noen sett trekker −0,25 for
  gale MC-svar (V2018) — flervalgstreningen skal øve eliminasjon og «hopp over ved
  ren gjetting»-heuristikk (`verifiser mot SOSGEO1120` om trekk gjelder).
- **Ingen jus-/lovsjekk, ingen WebFetch** (ikke relevant fagtype).

**Bevisst utelatt (analysen §6 «Skal IKKE bygges tungt på»):** tunge sannsynlighets-
bevis, fordelingsteori utover normalfordelingen, kombinatorikk, maximum likelihood,
logistisk regresjon (OLS er gjennomgående selv når Y er en 0/1- eller andelsvariabel);
egen avansert Stata-programmering (kandidaten kjører `sum`/`tabstat`/`ttest`/`reg` og
leser utskrift — ingen loops); matrise-/kovariansregning. Gamma og design-/case-essay
er faset ut etter 2015 og holdes på ett kompakt kapittel hver (7.1 og 1.4) siden
korrelasjonsmål-VALG og kausalitetsdrøfting lever videre.

### 2c. Notasjonskontrakt (AUTORITATIV — brukes i hele boka)

Alle symboler under er hentet fra analysens §6 og er bokas standardnotasjon.
README-kravet om **Symbol- og formelliste per delkapittel** (collapsible rett etter
Forkunnskaper) gjelder ALLE kapitler som bruker symboler/formler — også drøfting-
kapitler som bare nevner b, χ² eller p. Listen er per delkapittel og arver aldri fra
tidligere kapitler.

| Notasjon | Betydning |
|---|---|
| $\bar{X} = \sum x / N$ | gjennomsnitt (krever metrisk nivå) |
| modus, median, variasjonsbredde | hyppigste verdi; midtverdi via kumulativ % (≥ ordinal); maks − min |
| $s = \sqrt{\sum (x-\bar{x})^2/(n-1)}$ | standardavvik (spredning i dataene) |
| $Z = (x - \bar{x})/s$ | standardisert verdi (Z-skåre); oppslag i standard normalfordelingstabell |
| $z = 1{,}64 / 1{,}96 / 2{,}58$ | kritiske z-verdier (90 % / 95 % / 99 %, tosidig) |
| $SE(\bar{x}) = s/\sqrt{n}$ | standardfeil for et gjennomsnitt |
| $SE(\hat{p}) = \sqrt{\hat{p}(1-\hat{p})/n}$ | standardfeil for en andel |
| $SE(\text{diff}) = \sqrt{SE_1^2 + SE_2^2}$ | standardfeil for en differanse mellom to gruppers estimat |
| $SE(b)$ | standardfeil for en regresjonskoeffisient (gitt i tabell) |
| KI $= \text{estimat} \pm \text{kritisk verdi} \cdot SE$ | konfidensintervall |
| $t = \text{estimat}/SE$ | testobservator; $t = b/SE(b)$ for en koeffisient |
| $df$ | frihetsgrader: ett gjennomsnitt $N-1$; regresjon $N-k-1$; kjikvadrat $(r-1)(c-1)$ |
| $H_0, H_A$ | null- og alternativhypotese (HA = «forskningshypotese») |
| $\alpha$, $p$ | signifikansnivå (= P(type I-feil)); p-verdi (signifikanssannsynlighet) |
| forventet frekvens $= \dfrac{\text{radsum} \cdot \text{kolonnesum}}{N}$ | celleforventning under $H_0$ i kjikvadrat |
| $\chi^2 = \sum (O-E)^2/E$ | kjikvadrat-testobservator (O = observert, E = forventet) |
| prosentdifferanse; Cramers V $\in [0,1]$ | krysstabellmål (styrke) |
| $\gamma = (P-Q)/(P+Q)$ | gamma (P = samstemte, Q = motstridende par — ordinaldata) |
| $r$ | Pearsons korrelasjonskoeffisient ($[-1,1]$, lineær sammenheng) |
| $Y_i = b_0 + b_1 X_{1i} + b_2 X_{2i} + \dots + e_i$ | regresjonsmodellen på generell form (residualleddet $e_i$ MÅ med) |
| $\hat{Y}$ | predikert (forventet) verdi; $\hat{Y} = b_0 + \sum b_j x_j$ (estimert form, uten $e_i$) |
| $b_0$ | konstantledd $= E(Y \mid \text{alle } X = 0)$ (også $\alpha$) |
| $b_j$ | stigningskoeffisient = endring i $Y$ per én enhets økning i $X_j$, kontrollert for øvrige |
| $e = Y - \hat{Y}$ | residual/restledd (også $\varepsilon$) |
| $\beta$ / Beta | standardisert koeffisient (enhetsfri, sammenlignbar styrke) |
| $b_3(X_1 \cdot X_2)$ | samspills-/interaksjonsledd (produktledd); betinget effekt $= b_1 + b_3 X_2$ |
| $R^2 \in [0,1]$ | forklart andel av variasjonen i $Y$; $1 - R^2$ = uforklart andel |
| $N$, $k$ | antall enheter/observasjoner; antall uavhengige variabler |
| Stata: `Coef.` `Std. Err.` `t` `P>|t|` `[95% Conf. Interval]` `Beta` `R-squared` | kolonnene i en Stata `reg`-utskrift |

**Målenivå-termer (konsekvent):** **nominal/kategorisk** (klassifisering, ingen
rangering), **ordinal** (rangering uten fast avstand), **intervall** (fast avstand,
ingen naturlig nullpunkt), **forholdstall** (fast avstand + naturlig nullpunkt —
høyeste nivå). **Metrisk** = intervall + forholdstall slått sammen (noen sett
skiller, andre bruker «metrisk» — boka nevner begge konvensjoner). Dikotom/binær =
to verdier. **Kausaltermer:** avhengig/uavhengig variabel, bakenforliggende/
mellomliggende variabel, spuriøs sammenheng, direkte/indirekte effekt, kontrollere
for, dummyvariabel, referansekategori, samspill/interaksjon, forklart varians,
restledd/residual. **Inferenstermer:** samplingfordeling, sentralgrenseteoremet
(CLT), standardavvik vs. standardfeil, konfidensintervall, kritisk verdi, testobser-
vator, to-/ensidig test, statistisk vs. substansiell signifikans.

### 2d. Tolkningskontrakt og Stata-utskrift-format (AUTORITATIV for regnekapitlene)

**Tolkningskontrakten** er bokas faste svarstruktur for alle statistiske størrelser
(sentralmål, andel, standardfeil, konfidensintervall, χ², t, konstantledd,
koeffisient, R², prediksjon, restledd, samspillsledd). Den gjentas i hvert regne-
kapittel som en `tip`-blokk og drilles i 10.3. Fire ledd, alltid:

1. **Teknisk tolkning / utregning** — hva størrelsen er og hvordan den regnes, vist
   trinn for trinn i tallets språk («$b_1 = -0{,}187$: $Y$ synker 0,187 enheter per
   én enhets økning i $X_1$, kontrollert for de andre variablene»).
2. **Substansiell tolkning i kontekst** — samme tall oversatt til studiens
   virkelighet med variabelnavn og enheter («alkoholkonsumet synker med 0,187 enheter
   per år eldre»).
3. **Signifikans/usikkerhet** — er størrelsen til å stole på (t-test / p-verdi /
   konfidensintervall / kjikvadrat mot kritisk verdi)? For estimater: hvor bred er
   usikkerheten (SE/KI)? For konfidensintervall: den **frekventistiske tolkningen**
   (se under). Statistisk vs. substansiell signifikans er et toppkandidat-skille.
4. **Konklusjon/forbehold** — hva funnet betyr for spørsmålet/hypotesen, og
   forbeholdet (kausalitet? urealistisk/ikke-tolkbart konstantledd? utenfor
   dataområdet? skjevt utvalg?). For t-test: **retningen** på forskjellen MÅ med,
   ikke bare «signifikant».

Sensorregelen (analysen §4): ledd 1 og 2 gir SEPARATE poeng; et svar som stopper
etter ledd 1 får aldri full uttelling. **Konfidensintervallets tolkning (ledd 3) er
et hardt krav:** «95 % sikker» betyr at **metoden fanger den sanne populasjonsverdien
i 95 % av alle slike utvalg i det lange løp** — IKKE at det er 95 % sannsynlig at
*dette* intervallet inneholder verdien (feil #7). «Kontrollert for» (ledd 1 i
multippel regresjon) er også hardt krav (0,5 trekk uten — feil #5). Beta må oppgis
MED tall når en oppgave spør hvilken variabel som betyr mest (0,5 trekk uten tallet).

**Stata-utskrift-format (tekst-tabell, brukes fra 8.1):** Stata-regresjonstabeller
gjengis slik i `text`-/`example`-blokker (monospaced, egne NYSKREVNE tall):

```
      inntekt |      Coef.   Std. Err.      t    P>|t|     Beta
--------------+----------------------------------------------------
        alder |     412.6      118.3      3.49   0.001    0.284
     utdannaar|    1985.2      241.7      8.21   0.000    0.531
   kvinne (d) |   -8420.4     1533.9     -5.49   0.000   -0.301
        _cons |    9840.1     3120.5      3.15   0.002
--------------------------------------------------------------------
   R-squared = 0.34      N = 428
```

Kandidaten skal kunne lese: koeffisienter fra `Coef.`, standardfeil fra `Std. Err.`,
t-verdi fra `t`, p-verdi fra `P>|t|`, standardiserte koeffisienter fra `Beta`,
konstantleddet fra `_cons`, og $R^2$ nederst. Dummyer merkes `(d)`. Boka viser BÅDE
Stata-formen OG den håndregnede formen (fra formelark) parallelt der begge er mulige
(f.eks. $t = b/SE(b)$ regnet for hånd = `t`-kolonnen; KI $= b \pm t_{krit} \cdot
SE(b)$ = `[95% Conf. Interval]`).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = gjenganger-score (analysen §2) +
> oppgavesjanger (bokstav A–O fra analysen §3) + prioritetsklasse (perfekt / kunne /
> kjenne, fra analysen §7). **Typiske feil** refererer analysens §5 med #nummer
> (samlet i 10.5). **Kvote** = quiz / flashcards. `(verifiser mot SOSGEO1120)` =
> detalj som kan ha endret seg med emneomleggingen — beholder forbehold.

### Del 0 — Eksamenskart og besvarelseshåndverk

#### Kapittel 0.1: Slik testes SOS1120 / SOSGEO1120
- **id:** `sos1120-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart.
- *Description:* Emnet, regimeskiftet 2015, forskningsprosess-løypa utregningsdelen
  følger, todelingen (flervalg + utregning + Stata) og strategien som følger av at
  faget belønner riktig metodevalg og substansiell tolkning i kontekst. Forklarer at
  SOS1120 er nedlagt og videreført som SOSGEO1120.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (18 sett 2003–2018). Skal
  formidle: (a) **Nedlagt/etterfølger:** SOS1120 hadde siste eksamen V2019, erstattet
  av SOSGEO1120 som deler metodekjernen; boka er profilert mot etterfølgeren. (b)
  **Regimeskiftet ~2015 er den viktigste utviklingslinjen:** gammelt regime
  (2003–2013) = sosiologisk krysstabellmetode (gamma, Cramers V, prosentdifferanse) +
  design-essay (likhets-/forskjellsteknikk, survey, etikk), ingen flervalgsdel; nytt
  regime (2015→) = statistisk inferens (normalfordeling, samplingfordeling,
  standardfeil, konfidensintervall, t-test, kjikvadrat) + Stata + flervalgsdel foran.
  Boka prioriterer nytt regime, men beholder ett krysstabell-/gamma-kapittel og et
  kompakt design-/kausalitetskapittel. (c) **Eksamensformen i nytt regime:** typisk
  **Del/Bolk 1 = flervalg (MC, auto-rettet)** + **Del/Bolk 2 = utregningsoppgaver**
  som følger forskningsprosessen på ett datasett, og fra 2018 en egen **Stata-bolk**.
  Bestått (E) krever de mekaniske kjerneoppgavene (målenivå, deskriptiv statistikk,
  én KI-utregning, tolke en koeffisient, en enkel t-test); A krever bredde på tvers av
  BÅDE statistikkutregning OG metodedrøfting, med korrekt tolkning i kontekst.
  (d) **Utregningsdelen følger alltid forskningsprosessen:** måling (målenivå) →
  beskrivelse (deskriptiv) → usikkerhet (SE/KI) → inferens (kjikvadrat/t-test) →
  sammenheng (krysstabell/regresjon) → årsak (kontroll/stimodell). Boka ER organisert
  etter denne løypa (Del 1→9). (e) **Temafrekvens-tabellen** fra analysen §2 i
  destillert form: målenivå ~95 %, deskriptiv ~95 %, regresjonstolkning ~95 %,
  R² ~90 %, konfidensintervall ~85 %, kjikvadrat ~85 %, prediksjon ~85 %, t-test
  ~85 %, hypoteseformulering ~85 %, utvalg ~75 %, standardfeil ~70 %, krysstabell/
  Cramers V ~70 %, stimodell ~70 %, kontroll/spuriøsitet ~65 %, dummy ~60 %, samspill
  ~60 %, normalfordeling/Z ~55 %, samplingfordeling/CLT ~50 %, gamma ~45 %,
  Stata ~15 % (økende). (f) **Hjelpemidlene ble romslige** (fra 2015: alle bøker +
  notater + programmerbar kalkulator) → ren formelgjengivelse gir lite; metodevalg,
  utregning trinn for trinn og substansiell tolkning er poenget. (g) **Følgefeil
  straffes minimalt** — galt mellomsvar trekker ikke videre nedover; hvert trinn
  poengsettes for seg. Prioritet: perfekt (metanivå).
- **Innholdskontrakt:** ingen fagbegreper — presise beskrivelser av begge regimer og
  begge eksamensdeler; oppgavesjanger-katalogen A–O fra analysen §3 i destillert form
  med typisk vekt; tidsbudsjett for 4-timerseksamen (~40 min flervalg + ~200 min
  utregning/Stata).
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et sett» — gjennomgang av ett nyskrevet nytt-regime-
  sett (flervalgs-smakebit + en utregningscase-åpning: en sosiologisk case om sosial
  bakgrunn og inntekt) som viser hvordan utregningsdelen følger løypa fra målenivå til
  regresjon.
- **Typiske feil:** å bruke for lang tid på flervalgsdelen (jevn vekt); å hoppe over
  de «mekaniske» E-poengene (målenivå, deskriptiv, én KI) i jakten på A-drøfting; å
  overse regimeskiftet og pugge utgått gamma-håndregning i stedet for KI/inferens.
- **Kvote:** 12 quiz / 8 flashcards (formatfakta, regimeforskjeller, forsknings-
  prosess-rekkefølgen).

#### Kapittel 0.2: Besvarelseshåndverket — regn, tolk i kontekst, konkluder
- **id:** `sos1120-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `sos1120-0-1`
- **Kapitteltype:** besvarelseshåndverk (drøftings-DNAets essayhåndverk, kalibrert til
  SOS1120s regne-/tolkningsprofil).
- *Description:* Sensorens vurderingsfilosofi: hvorfor hvert regnestykke må ende i en
  substansiell tolkning, hvorfor følgefeil straffes mildt, og de harde kravene
  («kontrollert for», frekventistisk KI-tolkning, retning i t-test-konklusjon, to- vs.
  ensidig, riktig df) som skiller uttelling fra full uttelling.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4) — de faste metareglene
  på tvers av veiledningene. Prioritet: perfekt. Skal operasjonalisere:
  (a) **Følgefeil straffes minimalt** — galt mellomsvar trekker ikke videre; delvis
  riktig utregning gir delvis uttelling; **forståelse gir uttelling selv ved
  regnefeil** (V2018); utregning MÅ vises. (b) **Substansiell tolkning i kontekst er
  poenget** — teknisk («b = −0,187») og substansiell («alkoholkonsumet synker med
  0,187 per år eldre») gir SEPARATE poeng; innfør **tolkningskontrakten** (§2d) som
  bokas gjennomgående mantra. (c) **«Kontrollert for» er hardt krav** — 0,5 trekk hvis
  kandidaten glemmer at effekten er kontrollert for de andre variablene (V2015).
  (d) **Beta må oppgis med tall** — «hvilken variabel betyr mest?» krever den
  standardiserte koeffisienten MED verdi (0,5 trekk uten tallet). (e) **KI-tolkningen
  må treffe den frekventistiske betydningen** — «metode som fanger sann verdi 95 % av
  gangene i det lange løp», ikke «95 % sannsynlig at verdien ligger her»; tolkningen
  vektes lavere enn utregningen (typisk 1 p utregning + 0,5 p tolkning) fordi den
  gjentas. (f) **To- vs. ensidig test presiseres** — ensidig svar der tosidig kreves
  gir HALV uttelling (V2018). (g) **Retning i t-test-konklusjonen**, ikke bare
  «signifikant». (h) **Riktig svar på riktig spørsmål** — på Simpsons paradoks gir det
  0 poeng å regne kjikvadrat; poenget er å identifisere at marginale og betingede
  fordelinger spriker. (i) **Vær raus der oppgaveteksten har feil** (komma som
  tusenskille, uklar formulering) → boka kan lære «robust» tolkning. (j) Nivåbildet:
  A/B løser bredden på tvers av utregning og drøfting og tolker i kontekst; C treffer
  de mekaniske kjernepoengene men blir stående i teknisk tolkning; E løser de rene
  kjerneoppgavene. Bokas mantra innføres: **«regn — tolk i kontekst — konkluder»**.
- **Innholdskontrakt:** besvarelsesarkitektur per deloppgave (regn/definer →
  substansiell tolkning → signifikans/usikkerhet → konklusjon med retning/forbehold);
  tidsbudsjett for 4 timer; «vis utregningen»-regelen; flervalgsstrategi (eliminasjon,
  nabobegrep-feller, «hopp over ved ren gjetting» der trekk gjelder `verifiser mot
  SOSGEO1120`).
- **Drøftingsakser:** bredde (alle deloppgaver besvart, alle listeelementer nevnt) vs.
  dybde (A-skillene løst); når man skal levere «robust» tolkning ved uklar
  oppgavetekst; hvorfor en utregning uten tolkning aldri gir full pott.
- **Case-forslag:** Samme koeffisient («b = 1985 for utdanningsår på årsinntekt»)
  tolket tre ganger — E (kun «positiv sammenheng»), C (teknisk tolkning), A
  (+ substansiell i kontekst + «kontrollert for» + statistisk vs. substansiell
  størrelse + Beta med tall) — med margkommentarer.
- **Typiske feil:** #5 tolke koeffisient uten «kontrollert for» / uten kontekst
  (C-tak); #7 løs KI-tolkning; #10 «signifikant» uten retning; usynlig utregning.
- **Kvote:** 14 quiz / 10 flashcards (sensorreglene, tolkningskontraktens ledd,
  nivåkjennetegn, de harde kravene).

### Del 1 — Forskningsdesign, kausalitet og utvalg

#### Kapittel 1.1: Forskningsprosessen, hypoteser og variabler
- **id:** `sos1120-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `sos1120-0-2`
- **Kapitteltype:** tema (drøfting).
- *Description:* Forskningsprosessens start: fra en sosiologisk hypotese til
  populasjon, analyseenhet og avhengig/uavhengig variabel — og hvordan resten av
  løypa henger sammen.
- **Eksamensbelegg:** Fast innledningsledd i utregningscasen (del av deskriptiv-/
  regresjonsoppgavene). Prioritet: kunne (fundamentet for hele løypa, men sjelden en
  egen tung deloppgave i nytt regime).
- **Begrepskontrakt:** **hypotese** (påstand om sammenheng mellom to variabler, må
  kunne testes empirisk); **populasjon** (f.eks. «alle innsatte i norske fengsler»,
  «den amerikanske befolkningen» i GSS-data); **analyseenhet/enhet** (individ,
  husholdning, kommune — hva hver rad i datasettet er); **avhengig variabel** (det
  som forklares, Y) vs. **uavhengig variabel** (det som forklarer, X); dikotom/
  kategorisk/kontinuerlig variabel (frempek 2.1); retningen på en hypotese (positiv/
  negativ sammenheng); operasjonaliseringsbehovet kort (fra teoretisk begrep til
  målbar variabel); forskningsprosessens trinn (måling → beskrivelse → usikkerhet →
  inferens → sammenheng → årsak).
- **Formler/notasjon:** symbolfattig; kun rollemerkingen Y (avhengig) / X (uavhengig)
  som brukes i resten av boka. Symbol- og formelliste-collapsible forklarer Y/X-rollene.
- **Drøftingsakser:** hva som er analyseenhet når hypotesen kan leses på flere nivåer
  (individ vs. gruppe); hvorfor valg av avhengig/uavhengig variabel følger av
  hypotesens retning, ikke av dataene; hva en variabel er (varierer mellom enheter).
- **Case-forslag:** «Personer som vokste opp med rusproblemer i familien, havner
  oftere i fengsel» — identifiser populasjon, analyseenhet (individet), avhengig
  variabel og uavhengig variabel, slik en god besvarelse gjør det (med begrunnelse,
  ikke bare merkelapp).
- **Typiske feil:** å bytte om avhengig og uavhengig variabel; å forveksle analyseenhet
  med populasjon; å oppgi en variabel som «populasjon».
- **Kvote:** 20 quiz / 20 flashcards (populasjon/enhet/variabel-diagnoser, avhengig↔
  uavhengig-par, forskningsprosess-rekkefølgen).

#### Kapittel 1.2: Kausalitet, stimodell og spuriøsitet
- **id:** `sos1120-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-1-1`
- **Kapitteltype:** tema (fagets drøftesignatur).
- *Description:* Å tegne årsaksmodeller med riktige piler — bakenforliggende,
  mellomliggende og spuriøse sammenhenger — å skille kausalitet fra samvariasjon, og
  å gjenkjenne Simpsons paradoks.
- **Eksamensbelegg:** Stimodell/årsaksmodell ~70 % (sjanger M) — «tegn årsaksmodellen»;
  kontroll/spuriøsitet ~65 % (sjanger L); randomisert eksperiment vs. observasjonsdata
  ~35 %; Simpsons paradoks ~20 % (sjanger O, nytt regime, flervalg). Prioritet:
  **perfekt** (stimodell) / kunne (resten).
- **Begrepskontrakt:** **bakenforliggende variabel** (Z ligger forut for og påvirker
  både X og Y → skaper **spuriøs sammenheng** mellom X og Y); **mellomliggende
  variabel** (X → Z → Y, formidler en **indirekte effekt**); **direkte effekt**
  (X → Y uten mellomledd); **spuriøs sammenheng** (X og Y samvarierer uten
  årsakssammenheng fordi en Z skaper begge); korrekt **tidsrekkefølge** i modellen
  (bakenforliggende ligger forut); **randomisert eksperiment** som kausal
  gullstandard (randomisering nøytraliserer bakenforliggende variabler) vs.
  **observasjonsdata** (kan sjelden utelukke alle Z); bro til multippel regresjon som
  gir den DIREKTE effekten kontrollert for øvrige (Del 8); **Simpsons paradoks** (en
  sammenheng på aggregatnivå snus eller forsvinner når man ser på undergrupper —
  marginale vs. betingede fordelinger; Berkeley-opptaket som klassisk illustrasjon).
  Modellene TEGNES med piler — figur regnes som del av løsningen.
- **Formler/notasjon:** pil-diagrammene er «formlene» (bokser X, Y, Z + piler); alle
  tre modelltypene (direkte, spuriøs, indirekte) skal kunne tegnes og leses. Symbol-
  og formelliste-collapsible forklarer pilnotasjonen.
- **Drøftingsakser:** bakenforliggende vs. mellomliggende — samme Z, helt ulik
  konklusjon (kontrollere bort spuriøsitet vs. forklare mekanismen); når en
  sammenheng «forsvinner» ved kontroll (spuriøs) vs. «forklares» (mediert); hvorfor
  observasjonsdata aldri lukker kausalspørsmålet helt.
- **Case-forslag:** «Blant innsatte har mange ADHD, og en avis konkluderer at ADHD
  fører til kriminalitet» — tegn tre modeller (direkte; oppvekstmiljø som
  bakenforliggende Z → spuriøs; skolefrafall som mellomliggende → indirekte) og vis
  hvordan hver endrer konklusjonen. + en Simpsons-case: en behandling ser bedre ut
  samlet, men dårligere i hver undergruppe — forklar hvorfor (IKKE regn kjikvadrat).
- **Typiske feil:** #13 regne kjikvadrat i stedet for å forklare Simpsons paradoks
  (0 poeng); å tegne mellomliggende der oppgaven beskriver bakenforliggende (og
  motsatt); piler i feil retning; lese en spuriøs sammenheng som kausal.
- **Kvote:** 24 quiz / 26 flashcards (modelltype↔pilmønster↔eksempel-tripler; direkte/
  indirekte/spuriøs; Simpsons paradoks↔ikke-kjikvadrat; eksperiment↔observasjonsdata).

#### Kapittel 1.3: Utvalg, generalisering og representativitet
- **id:** `sos1120-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-1-1`
- **Kapitteltype:** tema (drøfting).
- *Description:* Fra populasjon til utvalg: sannsynlighetsutvelging som forutsetning
  for generalisering, hva lav svarprosent gjør med representativiteten, og skillet
  mellom usikkerhet (bred SE ved lite N) og skjevhet (systematisk frafall).
- **Eksamensbelegg:** ~75 % (sjanger N) — «er dette et sannsynlighetsutvalg? kan vi
  generalisere?»; frafall/svarprosent gjennomgående forbeholdsledd. Prioritet:
  **perfekt** (Nivå 2-tungt, nesten hvert sett).
- **Begrepskontrakt:** **populasjon** og **utvalgsramme**; **sannsynlighetsutvalg**
  (kjent trekkesannsynlighet for hver enhet → forutsetning for feilmarginer og
  generalisering); ikke-sannsynlighetsutvalg (bekvemmelighet — truer generalisering);
  de vanligste teknikkene kort (enkel tilfeldig, systematisk, stratifisert, klynge);
  **representativitet** og **generalisering** fra utvalg til populasjon; **frafall/
  svarprosent** og **selektivt frafall** (de som ikke svarer skiller seg systematisk
  → 48 % svar kan gi skjevhet); at samsvar på noen kjennetegn (alder/kjønn) IKKE
  garanterer representativitet på andre; **usikkerhet vs. skjevhet** — lite N gir stor
  usikkerhet (bred SE/KI), ikke nødvendigvis skjevhet, når utvalget er tilfeldig
  trukket (bro til Del 5).
- **Formler/notasjon:** symbolfattig; frempek til SE/KI (Del 5) som tallfestingen av
  «usikkerhet». Symbol- og formelliste for begrepet svarprosent.
- **Drøftingsakser:** når lav svarprosent er akseptabelt (tilfeldig frafall) vs. når
  det ødelegger (systematisk); hvorfor totalundersøkelse ofte er umulig/unødvendig;
  usikkerhet (tilfeldig) vs. skjevhet (systematisk) — to helt ulike trusler.
- **Case-forslag:** «En levekårsundersøkelse fikk 48 % svar, med overvekt av eldre og
  høyt utdannede» — drøft frafallsskjevhet, hva det gjør med generaliserbarheten, og
  hvorfor det er en annen type trussel enn et lite (men tilfeldig) utvalg.
- **Typiske feil:** #14 behandle et skjevt/selektert utvalg som representativt (regne
  videre på lav svarprosent uten forbehold); #15 forveksle usikkerhet og skjevhet
  (tro at lite N i seg selv gir skjevhet); liste teknikker uten å vurdere
  generalisering.
- **Kvote:** 22 quiz / 22 flashcards (sannsynlighetsutvalg↔generalisering; frafall↔
  skjevhet; usikkerhet↔skjevhet-kontrast).

#### Kapittel 1.4: Forskningsdesign, longitudinelle data og etikk (gammelt regime)
- **id:** `sos1120-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `sos1120-1-2`, `sos1120-1-3`
- **Kapitteltype:** tema (kompakt «bør kjenne til» — gammelt regime, valgoppgave-arv).
- *Description:* Designvalgene fra det gamle regimets essayoppgaver — likhets- vs.
  forskjellsteknikk, survey vs. samtaleintervju, tidsdesign og forskningsetikk — som
  fortsatt kan dukke opp, men i beskjeden form.
- **Eksamensbelegg:** Case-/design-essay ~30 % (sjanger O, valgoppgave i gammelt
  regime, nesten borte etter 2015); tidsdesign/longitudinelle data ~25 %. Prioritet:
  kjenne (kapitlet sier eksplisitt at dette er gammelt-regime-stoff, holdt kompakt;
  `verifiser mot SOSGEO1120` om design-essay er tilbake).
- **Begrepskontrakt:** **likhetsteknikk vs. forskjellsteknikk** i caseundersøkelser
  (most similar / most different systems design); **survey-design vs. samtaleintervju**
  og innsamlingsmåter (strukturert/semistrukturert/uformelt intervju, spørreskjema);
  **tidsdesign/longitudinelle data**: tverrsnitt vs. panel (samme enheter over tid)
  vs. gjentatt tverrsnitt vs. **erindringsdata/retrospektive data**; **forskningsetikk**
  ved sensitive tema (informert samtykke, anonymitet, personvern) kort; hvorfor
  paneldata gir bedre grep om tidsrekkefølge og dermed kausalitet (bro til 1.2).
- **Formler/notasjon:** symbolfri.
- **Drøftingsakser:** most similar vs. most different — hva hver isolerer; når survey
  vs. samtaleintervju passer; hvorfor panel > gjentatt tverrsnitt for å studere
  endring hos samme enheter.
- **Case-forslag:** «Skisser et design for å studere om arbeidsledighet fører til
  dårligere helse» — begrunn valg mellom tverrsnitt og panel, og hvor et
  samtaleintervju ville avdekket mekanismen; nevn ett etisk hensyn.
- **Typiske feil:** behandle gjentatt tverrsnitt som paneldata; blande likhets- og
  forskjellsteknikk; overse etiske hensyn ved sensitive data.
- **Kvote:** 16 quiz / 18 flashcards (designtype↔kjennetegn; panel↔tverrsnitt↔
  gjentatt; likhets-↔forskjellsteknikk).

**Prøve-kvote Del 1:** 4 prøver (se §4).

### Del 2 — Variabler og målenivå

#### Kapittel 2.1: De fire målenivåene — bestem og begrunn
- **id:** `sos1120-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `sos1120-1-1`
- **Kapitteltype:** tema (bokas sikreste enkeltkapittel).
- *Description:* Nominal, ordinal, intervall og forholdstall — å bestemme OG begrunne
  målenivået, og å vite hvilke statistiske operasjoner hvert nivå tillater. Fagets
  aller sikreste tema (~95 %) og navet som styrer alt nedstrøms.
- **Eksamensbelegg:** ~95 % (sjanger A, komponent i B, H, J). Kandidaten må BESTEMME
  og BEGRUNNE nivå ut fra kodebeskrivelsen, og vite konsekvensen for valg av mål og
  metode. Prioritet: **perfekt** (fagets ryggrad — styrer sentralmål, korrelasjonsmål,
  dummyer, om gjennomsnitt/SD er meningsfullt).
- **Begrepskontrakt:** **nominal/kategorisk** (gjensidig utelukkende, ikke-rangerbare
  kategorier — region, kjønn, sivilstatus; kun modus og andeler); **ordinal**
  (rangerbar uten fast avstand — utdanningsnivå i kategorier, holdningsskala; modus +
  median, ikke gjennomsnitt uten forbehold); **intervall** (fast avstand, ingen
  naturlig nullpunkt — årstall, temperatur °C; gjennomsnitt meningsfullt, men ikke
  forholdstall); **forholdstall** (fast avstand + naturlig nullpunkt — inntekt,
  alder, antall barn; alle operasjoner); **metrisk** som samlebetegnelse for intervall
  + forholdstall; dikotom/binær som spesialtilfelle; **hvilke operasjoner hvert nivå
  tillater** (modus alle nivå; median ≥ ordinal; gjennomsnitt/SD ≥ metrisk); at
  målenivå styrer nedstrøms: valg av sentralmål (frempek 3.1), valg av korrelasjonsmål
  (frempek 7.2), om man må lage dummyer (frempek 8.4).
- **Formler/notasjon + tolkningskontrakt:** ingen regneformler; men konsekvensregelen
  er obligatorisk — hver klassifisering ender i «…derfor kan/kan ikke vi regne
  gjennomsnitt / bruke mål Y». `example` ×2–3: klassifiser og begrunn 6–8 variabler
  fra en sosiologisk kodebok, og angi tillatte mål.
- **Drøftingsakser:** grensen ordinal/intervall for holdningsskalaer (konvensjon, ikke
  naturlov — når «behandles som metrisk»); forholdstall vs. intervall (poenget om
  naturlig nullpunkt — kan vi si «dobbelt så mye»?); «metrisk» som samlebetegnelse vs.
  det skarpe skillet.
- **Case-forslag:** En levekårsstudie med variablene region (kategorisk), utdanningsnivå
  (ordinal, tre kategorier), fødselsår (intervall) og årsinntekt (forholdstall) —
  klassifiser ALLE med begrunnelse og angi hvilke statistiske mål hver tillater, slik
  en A-besvarelse gjør; svar på «kan vi bruke median på region?» (nei) og «kan vi
  regne gjennomsnitt av utdanningsnivået?» (bare med forbehold).
- **Typiske feil:** #1 kalle en forholdstallsvariabel «intervall» (mangler nullpunkt-
  poenget), eller behandle ordinal som metrisk; #2 regne median på nominal / gjennomsnitt
  på kategorisk variabel; klassifisere uten begrunnelse.
- **Kvote:** 30 quiz / 34 flashcards (nivå↔kjennetegn↔tillatt operasjon↔eksempel —
  fagets viktigste flashcard-familie; klassifiseringsdiagnoser).

**Prøve-kvote Del 2:** 4 prøver (se §4).

### Del 3 — Deskriptiv statistikk fra frekvenstabell (hybrid-del)

> Regnefag-lånet gjelder hele delen: gjennomregnede `example`-blokker med intuisjon
> per steg, `exercise`-serier med solution + hints, snille tall, obligatorisk tolkning
> i kontekst etter hvert regnestykke. Symbol- og formelliste-collapsible er obligatorisk.

#### Kapittel 3.1: Sentraltendens og andeler fra frekvenstabell
- **id:** `sos1120-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-2-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Å lese en frekvens-/fordelingstabell og regne modus, median (via
  kumulativ prosent), gjennomsnitt, relativ/kumulativ andel og variasjonsbredde — med
  målenivået som styrer hvilket mål som er meningsfullt.
- **Eksamensbelegg:** ~95 % (sjanger B) — én av de fire garanterte oppgavene, i begge
  regimer. Prioritet: **perfekt**.
- **Begrepskontrakt:** **modus** (hyppigste kategori — alle nivåer); **median** (finn
  via **kumulativ prosent** — kategorien der kumulativ % passerer 50; krever ≥
  ordinal); **gjennomsnitt** $\bar{X} = \sum x/N$ (krever metrisk); **relativ frekvens**
  (prosentuering, med/uten «vet ikke»); **kumulativ andel** («andel med bachelor eller
  høyere»); **variasjonsbredde** (maks − min); at ekstremverdier trekker gjennomsnittet,
  ikke medianen; når median foretrekkes framfor gjennomsnitt (skjev fordeling — bro
  til 3.2s skjevhet); målenivå-koblingen fra 2.1 er obligatorisk (hvilket mål krever
  hvilket nivå).
- **Formler/notasjon + tolkningskontrakt:** $\bar{X} = \sum x/N$; median via kumulativ
  %; variasjonsbredde = maks − min. Hvert regnestykke ender i kontekst («medianen er
  utdanningsnivå 2 — halvparten har videregående eller mindre»). `example` ×2–3:
  frekvenstabell → regn alle aktuelle mål med begrunnelse for hvilke som er meningsfulle
  gitt målenivået; regn en kumulativ andel.
- **Drøftingsakser:** hvilket sentralmål er «riktig» for skjeve fordelinger (inntekt-
  typen); rapportere ett mål eller flere; hvorfor gjennomsnitt på en ordinal
  holdningsskala krever forbehold.
- **Case-forslag:** Frekvenstabell over utdanningsnivå (1–5) for 512 respondenter
  (nyskrevne tall): finn modus, median via kumulativ %, andelen med nivå ≥ 4, og
  variasjonsbredde — vis utregningen og tolk i kontekst; kommenter om gjennomsnittet
  er forsvarlig.
- **Typiske feil:** #2 regne gjennomsnitt på ordinal/nominal, eller median på nominal;
  usynlig fremgangsmåte (glemme kumulativ %-steget); forveksle relativ og kumulativ
  andel.
- **Kvote:** 24 quiz / 22 flashcards (mål↔krav↔tolkning; median via kumulativ %; når
  median > gjennomsnitt).

#### Kapittel 3.2: Spredning og form — standardavvik, skjevhet og boksplott
- **id:** `sos1120-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `sos1120-3-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvordan en fordeling sprer seg og hvilken form den har —
  standardavviket som mål på spredning, skjevhet fra forholdet gjennomsnitt/median, og
  hva et boksplott viser. Fundamentet for standardfeil (Del 5).
- **Eksamensbelegg:** Standardavvik ~50 % (sjanger C); skjevhet/boksplott gjennomgående
  i flervalgsdelen (nytt regime). Prioritet: kunne.
- **Begrepskontrakt:** **standardavvik** $s = \sqrt{\sum(x-\bar{x})^2/(n-1)}$
  (datapunktene ligger i snitt s fra gjennomsnittet — spredning i DATAENE, ikke
  usikkerhet i estimatet; skill fra standardfeil, frempek 5.1); **varians** ($s^2$)
  kort; **skjevhet** — høyreskjev (gjennomsnitt > median, hale mot høyre, f.eks.
  inntekt), venstreskjev (gjennomsnitt < median), symmetrisk (gjennomsnitt ≈ median);
  **boksplott** (median, kvartiler, variasjonsbredde, uteliggere) og hva det viser om
  form og spredning; hvorfor gjennomsnitt/SD er følsomme for ekstremverdier mens
  median/kvartilbredde er robuste.
- **Formler/notasjon + tolkningskontrakt:** $s = \sqrt{\sum(x-\bar{x})^2/(n-1)}$;
  skjevhetsregelen (gjennomsnitt vs. median). Hvert tall tolkes («SD = 4,1 år betyr at
  aldrene i snitt ligger 4,1 år fra gjennomsnittet»). `example` ×2: regn s for et lite
  datasett (snille tall, vis alle ledd); les skjevhet fra oppgitt gjennomsnitt/median.
- **Drøftingsakser:** standardavvik vs. standardfeil (bygg forventning til 5.1);
  hvorfor skjeve fordelinger gjør gjennomsnittet misvisende; hva boksplottet forteller
  som ett tall ikke gjør.
- **Case-forslag:** «Gjennomsnittsinntekten er 540 000 og medianen 380 000» — hva
  forteller det om fordelingen? (høyreskjev — de fleste har lite, et mindretall svært
  mye). + regn standardavviket for fem oppgitte verdier.
- **Typiske feil:** #4 forveksle standardavvik og standardfeil (allerede her — legg
  grunnlaget for skillet); lese skjevhet feil vei; tro at SD kan være negativt.
- **Kvote:** 20 quiz / 18 flashcards (standardavvik↔standardfeil-forvarsel; skjevhets-
  retning↔gjennomsnitt/median; boksplott-elementene).

**Prøve-kvote Del 3:** 4 prøver (se §4).

### Del 4 — Sannsynlighet: normalfordeling og samplingfordeling (SOS-unik hybrid-del)

> **Denne delen finnes ikke i STV1020-skjelettet** — det er SOS1120s egen
> sannsynlighetsmodul (analysen §2 funn 5). Regnefag-lån: tabelloppslag og standard-
> isering vises steg for steg; nivået er lavterskel (tommelregler, tabell), men
> begrepene må forstås. Symbol- og formelliste obligatorisk.

#### Kapittel 4.1: Standard normalfordeling og Z-skåre
- **id:** `sos1120-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-3-2`
- **Kapitteltype:** tema/regnekapittel (hybrid, SOS-unik).
- *Description:* Å standardisere en verdi til en Z-skåre og bruke standard normal-
  fordelingstabellen til å finne areal (andeler) og kritiske verdier — verktøyet bak
  konfidensintervall og hypotesetest.
- **Eksamensbelegg:** ~55 % (sjanger D, nytt regime). Prioritet: kunne (Nivå 2).
- **Begrepskontrakt:** **normalfordelingen** (symmetrisk, klokkeformet; de fleste
  observasjoner nær gjennomsnittet); **standard normalfordeling** (gjennomsnitt 0,
  standardavvik 1); **standardisering** $Z = (x - \bar{x})/s$; **oppslag i tabell**:
  finn areal $P(Z < z)$, $P(Z > z)$, og finn z for en gitt andel (0,975 → 1,96);
  **kritiske verdier** z = 1,64 (90 %, tosidig), 1,96 (95 %), 2,58 (99 %); tommelregelen
  om at ~68 % ligger innenfor ±1 SD, ~95 % innenfor ±2 SD; enkle sannsynligheter for
  et enkeltindivid via Z (bro til samplingfordeling for gjennomsnitt, 4.2).
- **Formler/notasjon + tolkningskontrakt:** $Z = (x-\bar{x})/s$; symmetriregelen
  $P(Z > z) = P(Z < -z)$; areal ↔ z-verdi. Hvert oppslag tolkes («Z = −1,62 → ca. 5,3 %
  ligger under»). `example` ×2–3: standardiser en verdi og finn andelen over/under;
  finn z som svarer til 95 %; bruk symmetri for en negativ z.
- **Drøftingsakser:** hvorfor standardisering gjør ulike variabler sammenlignbare;
  forskjellen på areal (andel) og z-verdi (grense); tosidig vs. ensidig areal (bro
  til hypotesetest 6.1).
- **Case-forslag:** «Prøveskårene er tilnærmet normalfordelt med gjennomsnitt 60 og SD
  10. Hvilken andel skårer over 75? Hvilken skår markerer de øverste 2,5 %?» (nyskrevne
  tall) — standardiser, slå opp, tolk.
- **Typiske feil:** lese feil kolonne/hale i tabellen; glemme symmetri for negativ z;
  blande areal og z-verdi; bruke individ-SD der samplingfordelingens SE skal brukes
  (bro til 4.2/5.1).
- **Kvote:** 22 quiz / 22 flashcards (Z-formelen; kritiske z-verdier↔konfidensnivå;
  areal↔z; symmetriregelen).

#### Kapittel 4.2: Samplingfordeling og sentralgrenseteoremet
- **id:** `sos1120-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-4-1`
- **Kapitteltype:** tema/regnekapittel (hybrid, SOS-unik).
- *Description:* Hvorfor vi kan bruke normalfordelingen på et gjennomsnitt selv når
  dataene ikke er normalfordelte — samplingfordelingen og sentralgrenseteoremet, som
  gjør standardfeil og konfidensintervall mulige.
- **Eksamensbelegg:** ~50 % (sjanger C, nytt regime — konseptuelt og garantert i
  flervalgsdelen). Prioritet: kunne (Nivå 2 — fundamentet for Del 5).
- **Begrepskontrakt:** **samplingfordeling** (fordelingen av alle gjennomsnitt/andeler
  man ville fått ved å trekke utvalget mange ganger fra samme populasjon —
  IKKE fordelingen av dataene); **sentralgrenseteoremet (CLT)** (samplingfordelingen
  til gjennomsnittet blir tilnærmet normalfordelt ved stort N, UANSETT fordeling i
  populasjonen); at samplingfordelingens spredning er **standardfeilen** (frempek 5.1)
  — mindre enn dataenes SD, og krymper med større N ($SE = s/\sqrt{n}$); hvorfor CLT
  er det som lar oss bruke z/normalfordeling i konfidensintervall og hypotesetest;
  enkel sannsynlighet for et **utvalgsgjennomsnitt** $P(\bar{x} > \text{verdi})$ via
  SE og Z.
- **Formler/notasjon + tolkningskontrakt:** samplingfordelingens SE $= s/\sqrt{n}$;
  $Z = (\bar{x} - \mu)/SE$. Konseptet forklares i ord OG med ett regneeksempel.
  `example` ×2: forklar CLT med egne ord på en konkret variabel; regn $P(\bar{x} >
  \text{verdi})$ for et utvalgsgjennomsnitt.
- **Drøftingsakser:** dataenes fordeling vs. samplingfordelingen (den vanligste
  forvekslingen); hvorfor stort N «redder» normalitetsantakelsen; hva vi kan BRUKE
  CLT til (inferens på gjennomsnitt og andeler).
- **Case-forslag:** «Forklar med egne ord hovedpoenget i sentralgrenseteoremet og hva
  vi kan bruke det til» + «Inntekt er høyreskjev. Hvorfor kan vi likevel lage et
  konfidensintervall for gjennomsnittsinntekten i et stort utvalg?»
- **Typiske feil:** forveksle samplingfordeling med dataenes fordeling; tro CLT sier
  at dataene blir normalfordelte; bruke dataenes SD der SE skal brukes.
- **Kvote:** 20 quiz / 20 flashcards (samplingfordeling↔datafordeling-kontrast; CLT-
  utsagnet; SE som samplingfordelingens spredning).

**Prøve-kvote Del 4:** 4 prøver (se §4).

### Del 5 — Standardfeil og konfidensintervall (BÆREBJELKE — SOS-unik hybrid-del)

> **Fagets signatur og bærebjelke** (analysen §2 funn 2, §7 Nivå 1). Egen del med
> tre kapitler. STV1020-skjelettet har KI perifert; her er det navet i det nye
> regimet. Regnefag-lån + frekventistisk tolkningsdisiplin. Tolkningskontrakten (§2d)
> — særlig ledd 3 (frekventistisk KI-tolkning) — er obligatorisk. Symbol- og
> formelliste-collapsible i alle tre kapitler.

#### Kapittel 5.1: Standardfeil — usikkerheten i et estimat
- **id:** `sos1120-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-4-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Å skille standardfeil (usikkerhet i estimatet) fra standardavvik
  (spredning i dataene), og å regne standardfeilen for et gjennomsnitt, en andel og en
  differanse — byggeklossen i alt konfidensintervall og all t-test.
- **Eksamensbelegg:** ~70 % (sjanger C, nytt regime nesten alltid). Prioritet: kunne
  (Nivå 2, men innbakt i all KI/t-test — i praksis perfekt).
- **Begrepskontrakt:** **standardfeil (SE)** = beste gjetning på standardavviket i
  samplingfordelingen = et mål på **usikkerheten i estimatet** (ikke spredningen i
  dataene — hardt skille fra SD, feil #4); **SE for et gjennomsnitt** $SE(\bar{x}) =
  s/\sqrt{n}$; **SE for en andel** $SE(\hat{p}) = \sqrt{\hat{p}(1-\hat{p})/n}$;
  **SE for en differanse** $SE(\text{diff}) = \sqrt{SE_1^2 + SE_2^2}$; **SE for en
  koeffisient** gitt i Stata-tabell (bro til 8.3); at større N gir mindre SE (mer
  presist estimat); hvorfor lite N gir bred SE (usikkerhet), som IKKE er det samme som
  skjevhet (kobling 1.3, feil #15).
- **Formler/notasjon + tolkningskontrakt:** de tre SE-formlene over. Hvert regnestykke
  ender i tolkning («SE = 0,030 → estimatet er usikkert med ca. 3 prosentpoeng»).
  `example` ×2–3: regn $SE(\bar{x})$ fra s og n; regn $SE(\hat{p})$ fra en andel og n;
  regn $SE(\text{diff})$ fra to gruppers SE.
- **Drøftingsakser:** standardavvik vs. standardfeil (den mest testede forvekslingen);
  hvorfor SE krymper med N mens SD ikke gjør det; usikkerhet (SE) vs. skjevhet.
- **Case-forslag:** «38 % av 264 innsatte vokste opp med rusproblemer i familien. Regn
  standardfeilen for denne andelen.» (SE = √[0,38·0,62/264] ≈ 0,030) — vis utregningen,
  tolk usikkerheten; forklar hvorfor en tilsvarende andel fra 26 personer ville hatt
  mye bredere SE.
- **Typiske feil:** #4 bruke s i stedet for $s/\sqrt{n}$ (eller motsatt); glemme
  kvadratrota; #15 tolke bred SE (lite N) som skjevhet.
- **Kvote:** 22 quiz / 22 flashcards (SE↔SD-kontrast; de tre SE-formlene↔estimattype;
  SE krymper med N).

#### Kapittel 5.2: Konfidensintervall — utregning
- **id:** `sos1120-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-5-1`
- **Kapitteltype:** tema/regnekapittel (hybrid — bokas signaturkapittel).
- *Description:* Fagets bærebjelke: å regne et konfidensintervall som estimat ±
  kritisk verdi · SE, med riktig SE (gjennomsnitt/andel/differanse) og riktig kritisk
  verdi (t ved lite N, z ved stort N).
- **Eksamensbelegg:** ~85 % (sjanger E, nytt regime nesten alltid, flere ganger per
  sett). Prioritet: **perfekt**.
- **Begrepskontrakt:** **konfidensintervall** KI $= \text{estimat} \pm \text{kritisk
  verdi} \cdot SE$; velge **riktig kritisk verdi**: t ved lite N med df = N − 1
  (begrunn valget), z/normalfordeling ved stort N; **KI for et gjennomsnitt** (SE =
  $s/\sqrt{n}$), **for en andel** (SE = $\sqrt{\hat{p}(1-\hat{p})/n}$), **for en
  differanse** (SE = $\sqrt{SE_1^2 + SE_2^2}$); bredden på intervallet øker med
  konfidensnivå (99 % bredere enn 95 %) og synker med N; sammenhengen mellom KI og
  hypotesetest (om et KI for en differanse dekker 0 → ikke signifikant, bro til 6.1).
- **Formler/notasjon + tolkningskontrakt:** KI $= \text{estimat} \pm \text{kritisk}
  \cdot SE$; kritiske verdier fra 4.1. Hvert intervall tolkes i kontekst (utregning i
  5.2, frekventistisk tolkning i 5.3). `example` ×3 (stige): KI for et gjennomsnitt
  (t, lite N), KI for en andel (z, stort N), KI for en differanse.
- **Drøftingsakser:** t vs. z — når hver brukes og hvorfor (df = N − 1 ved lite N);
  hvorfor 99 %-intervallet er bredere; hva bredden forteller om presisjon.
- **Case-forslag:** «38 % av 264 innsatte vokste opp med rusproblemer. Regn et 95 %
  konfidensintervall for andelen og tolk bredden.» (KI = 0,38 ± 1,96·0,030 = [0,32;
  0,44]) + en KI for et gjennomsnitt med lite N der t brukes (nyskrevne tall).
- **Typiske feil:** #8 feil kritisk verdi (z der t kreves, eller feil df); #4 bruke s
  i stedet for SE i intervallet; regnefeil i ± -leddet.
- **Kvote:** 26 quiz / 22 flashcards (KI-formelen; t↔z-valg; SE↔estimattype; bredde↔
  konfidensnivå/N).

#### Kapittel 5.3: Konfidensintervallets tolkning — den frekventistiske betydningen
- **id:** `sos1120-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-5-2`
- **Kapitteltype:** tema/regnekapittel (hybrid — fagets tolkningssignatur).
- *Description:* Det sensor tester eksplisitt og gjentatt: hva «95 % sikker» faktisk
  betyr — en metode som fanger den sanne verdien i 95 % av alle slike utvalg i det
  lange løp, ikke en sannsynlighet for dette ene intervallet.
- **Eksamensbelegg:** Del av KI-sjangeren (~85 %, sjanger E) — tolkningen testes hver
  gang KI regnes. Prioritet: **perfekt** (fagets tolkningssignatur, hardt sensorkrav).
- **Begrepskontrakt:** den **frekventistiske tolkningen**: «95 % konfidens» = hvis vi
  trakk utvalget mange ganger og laget et slikt intervall hver gang, ville ~95 % av
  intervallene fange den sanne populasjonsverdien; det er metodens treffsikkerhet i
  det lange løp, IKKE «95 % sannsynlig at DETTE intervallet inneholder verdien» (den
  sanne verdien er fast, ikke tilfeldig — feil #7); tolke bredden (presisjon) og hva
  som skjer ved endret N/konfidensnivå; koble KI til en beslutning (dekker intervallet
  en nullverdi?); KI for en **regresjonskoeffisient** (SE(b) fra tabell — samme
  logikk, bro til 8.3); at tolkningen vektes lavere enn utregningen (typisk 1 p
  utregning + 0,5 p tolkning) men er et hardt krav for full pott.
- **Formler/notasjon + tolkningskontrakt:** ingen ny formel; tolkningskontraktens
  ledd 3 (frekventistisk) er kjernen. `example` ×2: formuler den korrekte tolkningen
  av et gitt KI; kontraster mot den vanlige feilformuleringen og forklar hvorfor den
  er gal.
- **Drøftingsakser:** hvorfor den sanne verdien ikke er «tilfeldig» (frekventistisk
  vs. dagligtale-sannsynlighet); statistisk vs. substansiell tolkning av et KI (er
  intervallet snevert nok til å være nyttig?).
- **Case-forslag:** Gitt KI = [0,32; 0,44] for andelen med vanskelig oppvekst: skriv
  den korrekte frekventistiske tolkningen, og forklar presist hva som er galt med «det
  er 95 % sannsynlig at den sanne andelen ligger mellom 32 og 44 %».
- **Typiske feil:** #7 tolke KI som sannsynlighet for enkeltintervallet; si «95 % av
  populasjonen ligger i intervallet» (forveksle med dataspredning); droppe tolkningen
  helt.
- **Kvote:** 22 quiz / 20 flashcards (frekventistisk↔feilaktig tolkning; KI↔beslutning;
  KI for koeffisient).

**Prøve-kvote Del 5:** 4 prøver (se §4).

### Del 6 — Hypotesetesting: t-test og kjikvadrat (hybrid-del)

> Regnefag-lån + tolkningskontrakt gjelder hele delen. De harde kravene (to- vs.
> ensidig = halv uttelling, retning i konklusjonen, riktig df) får eksplisitte
> warning-blokker. Symbol- og formelliste-collapsible i alle tre kapitler.

#### Kapittel 6.1: Hypotesetesting og t-test
- **id:** `sos1120-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-5-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Den faste hypotesetesten: formuler H0/HA (som fulle setninger, to-
  eller ensidig), regn t = estimat/SE, finn df, sammenlign mot kritisk verdi og
  konkluder i kontekst — med retningen på forskjellen.
- **Eksamensbelegg:** t-test/signifikanstest ~85 % (sjanger G); hypoteseformulering
  ~85 %. Prioritet: **perfekt**.
- **Begrepskontrakt:** **nullhypotese H0** (ingen sammenheng/ingen forskjell) og
  **alternativhypotese HA/forskningshypotese** — formulert som **fulle setninger**;
  **to- vs. ensidig test** (ensidig der oppgaven ber om tosidig gir HALV uttelling —
  feil #9); **testobservator** $t = \text{estimat}/SE$; **frihetsgrader** df (ett
  gjennomsnitt: N − 1; ved stort N brukes z/normalfordeling); **kritisk verdi** (slå
  opp i t-tabell med df + signifikansnivå; tommelregel $|t| > \approx 2 \approx$
  signifikant på 5 %); **signifikansnivå α** = maksimal risiko for å forkaste en sann
  H0 = P(type I-feil); **p-verdi** (signifikanssannsynlighet — sannsynligheten for et
  minst like sterkt resultat DERSOM H0 er sann); **type I** (forkaste sann H0) vs.
  **type II** (beholde falsk H0); **konklusjon MED retning** (ikke bare «signifikant»,
  men «gruppe A skårer HØYERE» — feil #10); statistisk vs. substansiell signifikans
  (stor N kan gjøre trivielle forskjeller signifikante).
- **Formler/notasjon + tolkningskontrakt:** $t = \text{estimat}/SE$; df = N − 1 (ett
  gjennomsnitt); p ↔ α-beslutning. Hver test ender i konklusjon i kontekst MED retning
  OG kommentar om substansiell størrelse. `example` ×2: full t-test av ett gjennomsnitt
  mot en påstått verdi; p-verdi-tolkning mot to α-nivåer.
- **Drøftingsakser:** to- vs. ensidig (når er retningen forhåndsbestemt?); hva t «ser»
  (estimat relativt til usikkerhet); hvorfor «ikke signifikant» ikke betyr «ingen
  effekt»; statistisk ≠ substansiell signifikans.
- **Case-forslag:** «Gjennomsnittlig studietid er påstått å være 30 t/uke. Et utvalg
  på 40 gir 27,3 t med SE 1,2. Test tosidig på 5 %-nivå.» (t = −2,25, df = 39 →
  forkast H0; studentene bruker MINDRE tid) — vis alle trinn, konkluder med retning.
- **Typiske feil:** #9 ensidig der tosidig kreves; #10 konkludere «signifikant» uten
  retning; #8 feil df eller feil kritisk verdi; behandle statistisk signifikans som
  substansiell viktighet.
- **Kvote:** 24 quiz / 24 flashcards (H0/HA-formulering; to-↔ensidig; t-formelen; p↔α;
  type I↔II; retning i konklusjon).

#### Kapittel 6.2: To-utvalgs t-test — differanse mellom to grupper
- **id:** `sos1120-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `sos1120-6-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Å teste om to gruppers gjennomsnitt er forskjellige — t = (x̄₁ − x̄₂)/
  SE(diff) — den vanligste inferens-oppgaven på tvers av grupper, også som `ttest` i
  Stata.
- **Eksamensbelegg:** ~55 % (sjanger G, nytt regime). Prioritet: kjenne/kunne (Nivå 3,
  men billig når det kommer; kobles til Stata `ttest`).
- **Begrepskontrakt:** **to-utvalgs t-test** $t = (\bar{x}_1 - \bar{x}_2)/SE(\text{diff})$
  med $SE(\text{diff}) = \sqrt{SE_1^2 + SE_2^2}$; H0: ingen forskjell mellom gruppene;
  df tilnærmet/gitt; **konklusjon med retning** (hvilken gruppe skårer høyere — feil
  #10); koblingen til KI for en differanse (5.2 — dekker intervallet 0?); at Stata
  `ttest` gir differansen, SE, t, p og KI ferdig (bro til 9.1).
- **Formler/notasjon + tolkningskontrakt:** $t = (\bar{x}_1 - \bar{x}_2)/SE(\text{diff})$.
  Test ender i konklusjon med retning i kontekst. `example` ×2: to-utvalgs t-test fra
  oppgitte gruppegjennomsnitt/SE-er; les samme test fra en Stata `ttest`-utskrift.
- **Drøftingsakser:** hvorfor SE(diff) kombinerer begge gruppers usikkerhet; når KI
  for differansen og t-testen gir samme konklusjon; retningens rolle.
- **Case-forslag:** «Fagforeningsmedlemmer tjener i snitt 42 100, ikke-medlemmer
  38 700; SE(diff) = 1 250. Er forskjellen signifikant? Hvilken vei?» (t = 2,72 →
  medlemmer tjener MER) — vis utregning, konkluder med retning.
- **Typiske feil:** #10 «signifikant» uten retning; regne SE(diff) feil (glemme å
  kvadrere/summere); forveksle med parvis test.
- **Kvote:** 18 quiz / 16 flashcards (to-utvalgs t-formel; SE(diff); retning; KI↔test-
  kobling).

#### Kapittel 6.3: Kjikvadrat-test for hånd
- **id:** `sos1120-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-6-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Firetrinns-prosedyren for kjikvadrat: forventede frekvenser = rad·kol/
  N, χ² = Σ(O−E)²/E, df = (r−1)(c−1), konklusjon mot kritisk verdi eller p — en av de
  sikreste utregningsoppgavene, i begge regimer.
- **Eksamensbelegg:** ~85 % (sjanger F, begge regimer). Prioritet: **perfekt**.
- **Begrepskontrakt:** firetrinns-prosedyre: (1) **H0** (ingen sammenheng mellom de to
  kategoriske variablene) og HA; (2) **forventet frekvens** per celle = (radsum ·
  kolonnesum)/N (hva vi ville forvente om H0 var sann); (3) **χ²** $= \sum(O-E)^2/E$;
  (4) **df = (r−1)(c−1)** (HARD KRAV, warning — feil #8) og konkluder mot **kritisk
  verdi** i kjikvadrattabellen eller mot **p mot α**; både **klassisk** (χ² vs. kritisk
  verdi) og **moderne** (p vs. α) variant; at kjikvadrat sier om det ER en sammenheng,
  ikke hvor STERK (styrke = Cramers V, kobling 7.1); kjikvadrat brukes IKKE på
  Simpsons paradoks (feil #13, kobling 1.2).
- **Formler/notasjon + tolkningskontrakt:** forventet frekvens = rad·kol/N;
  $\chi^2 = \sum(O-E)^2/E$; df = (r−1)(c−1). Test ender i konklusjon i kontekst.
  `example` ×2: regn forventet frekvens for én celle og forklar hva den betyr; full
  kjikvadrat fra en 2×3-tabell (nyskrevne tall) med df og konklusjon mot kritisk verdi.
- **Drøftingsakser:** hva forventet frekvens representerer (H0-verdenen); klassisk vs.
  moderne beslutningsregel; hvorfor kjikvadrat ikke måler styrke.
- **Case-forslag:** «Hvis nullhypotesen er sann, hvor mange forventer du i cellen ‘god
  helse × sentrum’? χ² ble 238,3 med df = 3 — hva er konklusjonen?» + en full 2×3-tabell
  helse × bostedstype (nyskrevne tall) der kandidaten regner forventede frekvenser, χ²,
  df og konkluderer.
- **Typiske feil:** #8 feil df (bruke N eller r·c i stedet for (r−1)(c−1)); regne
  forventet frekvens feil; #13 regne kjikvadrat på en Simpsons-oppgave (0 poeng);
  konkludere om styrke fra χ².
- **Kvote:** 24 quiz / 22 flashcards (forventet-frekvens-formel; χ²-formel; df=(r−1)(c−1);
  klassisk↔moderne beslutning; kjikvadrat↔ikke-Simpson).

**Prøve-kvote Del 6:** 4 prøver (se §4).

### Del 7 — Bivariat analyse: krysstabell og korrelasjonsmål (hybrid-del)

> Regnefag-lån + valg-begrunnelse. Symbol- og formelliste-collapsible i begge kapitler.

#### Kapittel 7.1: Krysstabell, prosentdifferanse, Cramers V og gamma
- **id:** `sos1120-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-6-3`, `sos1120-2-1`
- **Kapitteltype:** tema/regnekapittel (hybrid; gamma er gammelt-regime-vedlikehold).
- *Description:* Å lese prosentueringsretningen i en krysstabell, regne prosent-
  differanse, tolke Cramers V, og — for ordinaldata — regne og tolke gamma; ferdighetene
  som lever videre (prosentdifferanse, Cramers V) og den som er nesten utgått (gamma).
- **Eksamensbelegg:** Krysstabell/prosentdifferanse + Cramers V ~70 % (sjanger H);
  gamma ~45 % (sjanger H, nesten kun gammelt regime). Prioritet: kunne (prosent-
  differanse, Cramers V) / kjenne (gamma — kapitlet sier at håndregning av gamma
  sjelden kreves i nytt regime).
- **Begrepskontrakt:** lese **prosentueringsretningen** for å finne avhengig/uavhengig
  variabel; **prosentdifferanse** (differansen mellom to gruppers andel på samme
  utfallskategori — tolkes som styrke); **Cramers V** ∈ [0,1] (standardisert styrkemål
  for nominale variabler; sjelden nær 1 i samfunnsvitenskap); **gamma** $\gamma =
  (P-Q)/(P+Q)$ (to ordinale variabler; P = samstemte par, Q = motstridende); hvorfor
  gamma ofte er høyere enn Cramers V (bruker bare like/ulikt ordnede par); at kjikvadrat
  (6.3) tester OM det er sammenheng, mens Cramers V/gamma måler STYRKEN.
- **Formler/notasjon + tolkningskontrakt:** prosentdifferanse; Cramers V (tolkes, ofte
  oppgitt); $\gamma = (P-Q)/(P+Q)$. Hvert mål tolkes i kontekst («Cramers V = 0,30 →
  moderat sammenheng mellom bosted og helse»). `example` ×2: regn og tolk prosent-
  differanse fra en 2×2/2×3-tabell + tolk oppgitt Cramers V; regn gamma fra en
  ordinal-ordinal-tabell.
- **Drøftingsakser:** prosentdifferanse vs. Cramers V (rå vs. standardisert); hvorfor
  gamma krever ordinaldata; kjikvadrat (om) vs. styrkemål (hvor sterkt).
- **Case-forslag:** Krysstabell bosted (sentrum/periferi) × helse (god/dårlig),
  nyskrevne tall: regn prosentdifferansen, tolk styrken, og tolk en oppgitt Cramers V.
  + en ordinal-ordinal-tabell der gamma regnes.
- **Typiske feil:** prosentuere feil vei (feil avhengig variabel); bruke gamma på
  nominaldata (krever ordinal); tolke Cramers V = 0,30 som «svak» uten kontekst
  (moderat i samfunnsdata).
- **Kvote:** 22 quiz / 22 flashcards (prosentdifferanse↔retning; Cramers V↔gamma↔datatype;
  om↔styrke).

#### Kapittel 7.2: Pearsons r, korrelasjonstabell og valg av korrelasjonsmål
- **id:** `sos1120-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `sos1120-7-1`
- **Kapitteltype:** tema (hybrid; valg-begrunnelse).
- *Description:* Å tolke en Pearson-korrelasjonstabell (fortegn, styrke, diagonalen),
  se hvilke variabler som ikke hører hjemme, og koble målenivået til begge variabler
  til riktig korrelasjonsmål.
- **Eksamensbelegg:** Pearsons r/korrelasjonstabell ~40 % (sjanger I); korrelasjonsmål-
  valg lever videre. Prioritet: kjenne/kunne (Nivå 3).
- **Begrepskontrakt:** **Pearsons r** ∈ [−1, 1] (fortegn = retning, tallverdi =
  styrke; måler kun LINEÆR sammenheng — r ≈ 0 kan skjule en kurvlineær); hvorfor
  **diagonalen er 1** (variabel korrelert med seg selv); hvilke variabler som IKKE
  hører hjemme i en Pearson-tabell (**nominale variabler** — r krever kontinuerlige
  variabler på metrisk nivå — feil #3); **koblingstabellen** (målenivå → korrelasjons-
  mål): to metriske → Pearsons r; to ordinale → gamma; to nominale → kjikvadrat/Cramers
  V; kategorisk X + metrisk Y → sammenlign gjennomsnitt/t-test eller bivariat regresjon
  (bro til Del 8). Begrunnelsen (målenivået til BEGGE variabler) er poenget.
- **Formler/notasjon + tolkningskontrakt:** r tolkes (fortegn + styrke); koblingstabellen
  som oppslag. Hvert valg begrunnes i to setninger (nivået til X, nivået til Y → målet).
  `example` ×2: tolk en oppgitt korrelasjonstabell (fortegn, styrke, hvilken variabel
  hører ikke hjemme); velg riktig korrelasjonsmål for fire variabelpar med begrunnelse.
- **Drøftingsakser:** hvorfor r ikke duger for ordinaldata (avstandsantakelsen);
  r ≈ 0 betyr ingen LINEÆR sammenheng, ikke «ingen sammenheng»; når gjennomsnitts-
  sammenligning = bivariat regresjon med dikotom X.
- **Case-forslag:** En korrelasjonstabell med inntekt, alder, utdanningsår og region:
  tolk to koeffisienter, forklar diagonalen, og pek på at region (nominal) ikke hører
  hjemme; velg deretter riktig mål for tre nye variabelpar.
- **Typiske feil:** #3 ta med en nominal variabel i en Pearson-tabell; velge mål uten
  å nevne begge variablers målenivå; tro r ≈ 0 = ingen sammenheng.
- **Kvote:** 20 quiz / 22 flashcards (r↔fortegn/styrke; diagonalen; målenivå-par↔
  korrelasjonsmål — flashcard-gull; lineær↔ikke-lineær).

**Prøve-kvote Del 7:** 4 prøver (se §4).

### Del 8 — OLS-regresjon: tolkning, dummy og kontroll (hybrid-del, ryggraden)

> Ryggraden i faget. Regnefag-lånet gjelder hele delen: gjennomregnede eksempler,
> exercise med solution + hints, snille tall, Stata-utskrift som tekst-tabell (§2d),
> og **tolkningskontrakten (§2d) er obligatorisk for hver størrelse**. De harde
> kravene («kontrollert for», residualledd, Beta med tall) får warning-blokker.
> Symbol- og formelliste-collapsible i alle fem kapitler.

#### Kapittel 8.1: Regresjonsmodellen og tolkning av konstantledd og koeffisient
- **id:** `sos1120-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `sos1120-2-1`, `sos1120-5-2`
- **Kapitteltype:** tema/regnekapittel (hybrid — bokas viktigste enkeltkapittel).
- *Description:* Hjertet i faget (~95 %): å skrive modellen på generell og estimert
  form, og å tolke konstantleddet og hver koeffisient både teknisk og substansielt med
  «kontrollert for de andre»-presisjonen — også lest fra en Stata-utskrift.
- **Eksamensbelegg:** Regresjonstolkning ~95 % (sjanger J), i begge regimer. Både
  teknisk og substansiell tolkning gir separate poeng. Prioritet: **perfekt** (fagets
  ryggrad).
- **Begrepskontrakt:** **generell form** $Y_i = b_0 + b_1 X_{1i} + b_2 X_{2i} + \dots
  + e_i$ (residualleddet $e_i$ MÅ med for full uttelling — feil #11); **estimert form**
  (sett inn tallverdiene, uten $e_i$); **konstantledd** $b_0 = E(Y \mid \text{alle } X
  = 0)$ (tolk i kontekst OG kommenter om det er substansielt meningsfullt — flagg om
  0 er utenfor dataområdet, f.eks. alder 0, slik at konstantleddet ikke gir mening —
  feil #6); **stigningskoeffisient** $b_j$ = forventet endring i Y per én enhets økning
  i $X_j$, **kontrollert for de andre variablene** (kontroll-språket er HARDT KRAV i
  multippel modell — 0,5 trekk uten, feil #5, warning); positiv vs. negativ koeffisient;
  **lese en Stata-utskrift** (§2d): koeffisienter fra `Coef.`, konstantledd fra `_cons`;
  **standardiserte koeffisienter Beta** (enhetsfrie — brukes til å rangere hvilken
  variabel som betyr mest; MÅ oppgis med tall, feil om ikke). Tolkningskontrakten (§2d)
  drilles her som fast struktur.
- **Formler/notasjon + tolkningskontrakt:** generell og estimert form; residualleddet
  ufravikelig; $b_0$, $b_j$; tolkningskontraktens fire ledd for HVER størrelse.
  `example` ×2–3: skriv modellen på generell form fra en variabelliste; tolk konstant
  og to koeffisienter fra en nyskrevet Stata-tabell (teknisk + substansielt, med
  «kontrollert for»), inkl. et konstantledd som må flagges som ikke-tolkbart.
- **Drøftingsakser:** når konstantleddet er meningsfullt vs. ikke (X = 0 utenfor
  dataområdet); hvorfor «kontrollert for» endrer tolkningen fra bivariat til multippel;
  Beta vs. ustandardisert b (sammenlignbarhet).
- **Case-forslag:** Stata-regresjonstabell (nyskrevet): årsinntekt på alder,
  utdanningsår og kvinne-dummy — skriv generell form med residual, tolk konstantleddet
  (kommenter om det er meningsfullt), tolk alle tre koeffisienter teknisk og substansielt
  med «kontrollert for», og si hvilken variabel som betyr mest med Beta oppgitt.
- **Typiske feil:** #11 glemme residualleddet på generell form; #5 glemme «kontrollert
  for»; #6 tolke et urealistisk konstantledd som substansielt; oppgi «betyr mest» uten
  Beta-tallet.
- **Kvote:** 28 quiz / 26 flashcards (generell↔estimert form; residualledd; konstant↔
  koeffisient; «kontrollert for»; meningsfullt↔ikke-tolkbart konstantledd; Beta med tall).

#### Kapittel 8.2: R², prediksjon og residual
- **id:** `sos1120-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-8-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvor mye modellen forklarer (R²), å regne en forventet verdi
  (prediksjon Ŷ) og residualen for én enhet — tre faste deloppgaver, alle med tolkning.
- **Eksamensbelegg:** R² ~90 %, prediksjon ~85 % (sjanger J). Prioritet: **perfekt**.
- **Begrepskontrakt:** **R²** ∈ [0,1] = andel av variasjonen i Y modellen forklarer
  (0,34 → 34 %); $1 - R^2$ = uforklart andel; tolke **endring i R²** mellom modeller
  (hva en ny variabel tilfører); **prediksjon**: sett X-verdiene inn i estimert
  ligning og regn $\hat{Y}$ (vis utregningen; følgefeil straffes mildt); **residual**
  $e = Y_{\text{observert}} - \hat{Y}$ for én enhet; **ekstrapoleringsfaren**
  (prediksjon utenfor observert X-område); at R² måler tilpasning, ikke kausalitet.
- **Formler/notasjon + tolkningskontrakt:** $\hat{Y} = b_0 + \sum b_j x_j$; $e = Y -
  \hat{Y}$; $R^2$. Hvert tall tolkes («modellen forklarer 34 % av variasjonen i
  inntekt — 66 % skyldes annet»). `example` ×3 (stige): tolk R² → regn en prediksjon →
  regn en residual, alle i kontekst.
- **Drøftingsakser:** hva høy vs. lav R² betyr substansielt i samfunnsdata (0,34 kan
  være mye for tverrsnittsdata); R² ≠ kausalitet; hvorfor prediksjon utenfor
  dataområdet er risikabelt.
- **Case-forslag:** «Predikér årsinntekt for en 45-åring med 14 års utdanning (mann).
  Vis utregningen.» + «Person X observert 520 000, predikert 480 000 — regn residualen
  og tolk.» (nyskrevne tall).
- **Typiske feil:** tolke R² som korrelasjon eller «prosent riktige»; usynlig
  prediksjonsutregning; feil fortegn på residualen.
- **Kvote:** 24 quiz / 20 flashcards (R²-tolkning; prediksjonsstegene; residual-fortegn).

#### Kapittel 8.3: Signifikans i regresjon — t-test av koeffisient og KI for b
- **id:** `sos1120-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-8-1`, `sos1120-6-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Om en regresjonskoeffisient er til å stole på: t = b/SE(b) med df =
  N − k − 1, p-verdien fra `P>|t|`, og konfidensintervallet for koeffisienten — lest
  både for hånd og fra Stata-utskriften.
- **Eksamensbelegg:** t-test av koeffisient ~85 % (sjanger G/J); SE-beregning og KI for
  koeffisient innbakt (~70–85 %). Prioritet: **perfekt**.
- **Begrepskontrakt:** **t-test av en koeffisient** $t = b/SE(b)$; **frihetsgrader**
  df = N − k − 1 (HARD KRAV, warning — k = antall uavhengige, feil #8); slå opp
  **kritisk t** (df + nivå), sammenlign $|t|$ og **konkluder i kontekst** (tommelregel
  $|t| > \approx 2$); ved stort N brukes z; **p-verdien** fra `P>|t|`-kolonnen;
  **SE(b)** = b/t når begge er oppgitt; **KI for koeffisienten** $b \pm t_{krit} \cdot
  SE(b)$ (= `[95% Conf. Interval]` i Stata — dekker det 0 → ikke signifikant, kobling
  5.2/5.3); statistisk vs. substansiell signifikans (stor N → trivielle b kan bli
  signifikante).
- **Formler/notasjon + tolkningskontrakt:** $t = b/SE(b)$; df = N − k − 1; KI $= b \pm
  t_{krit} \cdot SE(b)$. Hver test ender i konklusjon i kontekst OG kommentar om
  substansiell størrelse. `example` ×2: full t-test av en koeffisient fra oppgitt b/SE/
  N/k; les t, p og KI direkte fra en Stata-utskrift og verifiser t = b/SE for hånd.
- **Drøftingsakser:** hva t «ser» (effekt relativt til usikkerhet); hvorfor «ikke
  signifikant» ≠ «ingen effekt»; sammenhengen KI dekker 0 ↔ ikke signifikant.
- **Case-forslag:** «b = 0,675 med SE = 0,053, N = 105, 3 uavhengige. Gjør en t-test og
  regn et 95 % KI for koeffisienten.» (t = 12,74, df = 101 → svært lav p; KI smalt og
  langt fra 0) — konkluder i kontekst.
- **Typiske feil:** #8 feil df (glemme −k−1); konkludere uten å sammenligne mot kritisk
  verdi/α; behandle statistisk signifikans som substansiell viktighet; lese feil
  kolonne i Stata-utskriften.
- **Kvote:** 22 quiz / 20 flashcards (t=b/SE; df=N−k−1; p↔α; KI for b↔signifikans;
  statistisk↔substansiell).

#### Kapittel 8.4: Dummyvariabler og samspill/interaksjon
- **id:** `sos1120-8-4` · **number:** 8.4 · **estimatedMinutes:** 60 · **prerequisites:** `sos1120-8-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvordan en kategorisk variabel kommer inn i regresjonen (dummy,
  referansekategori), og hvordan et samspillsledd lar effekten av én variabel avhenge
  av en annen — inkludert å utlede to likninger fra et samspillsledd.
- **Eksamensbelegg:** Dummy ~60 % (sjanger K); samspill ~60 % (sjanger K). Prioritet:
  kunne.
- **Begrepskontrakt:** **dummyvariabel** (kategorisk variabel kodet 0/1);
  **referansekategori** (den utelatte; koeffisienten er forskjellen fra denne);
  konstantleddet = forventet Y for referansekategorien; **samspill/interaksjon** =
  et **produktledd** $b_3(X_1 \cdot X_2)$ som tester om effekten av $X_1$ avhenger av
  $X_2$; **betinget effekt** for en gruppe = $b_1 + b_3 X_2$; **utlede to likninger**
  fra en samspillsmodell ved å sette dummyen = 0 og = 1 (klassisk 2–3-poengs oppgave);
  **kontroll vs. interaksjon** (kritisk skille — feil #12): kontroll fjerner
  spuriøsitet (én effekt for alle), interaksjon = effekten er ULIK for ulike grupper
  (bro til 8.5).
- **Formler/notasjon + tolkningskontrakt:** dummy-ligningen; $b_3(X_1 \cdot X_2)$;
  betinget effekt $b_1 + b_3 X_2$. Hver koeffisient tolkes (teknisk + substansielt).
  `example` ×2: kod en 3-kategorivariabel til dummyer og tolk konstant + dummyene;
  utled to likninger fra et samspillsledd og regn betinget effekt for hver gruppe.
- **Drøftingsakser:** valg av referansekategori (tolkningsvennlighet); kontroll vs.
  interaksjon (juster-for vs. ulik-effekt); hvorfor «kontroller for X» er feil svar
  når effekten AVHENGER av X.
- **Case-forslag:** «Modellen er Ŷ = 46246 + 63,6·utdanningsår + 2917·kvinne +
  148·(utdanningsår·kvinne). Utled én likning for menn og én for kvinner, og tolk
  samspillet.» (nyskrevne tall).
- **Typiske feil:** #12 forveksle kontroll og interaksjon; tolke samspillskoeffisienten
  som en hovedeffekt; glemme å regne betinget effekt; feil referansekategori-tolkning.
- **Kvote:** 24 quiz / 22 flashcards (dummy↔referansekategori; produktledd; betinget
  effekt; kontroll↔interaksjon-kontrast).

#### Kapittel 8.5: Kontroll, spuriøsitet og indirekte effekt
- **id:** `sos1120-8-5` · **number:** 8.5 · **estimatedMinutes:** 55 · **prerequisites:** `sos1120-8-4`, `sos1120-1-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvorfor en koeffisient synker når man legger til kontrollvariabler i
  modell 2 — spuriøsitet eller indirekte effekt (mediering) — og hvordan multippel
  regresjon isolerer den direkte effekten.
- **Eksamensbelegg:** Kontroll/spuriøsitet ~65 % (sjanger L), innbakt i all multippel
  tolkning. Prioritet: kunne (toppkandidat-skille).
- **Begrepskontrakt:** **kontroll** = å inkludere en bakenforliggende variabel for å
  isolere den direkte effekten (fjerner spuriøsitet — kobling 1.2); **koeffisient som
  synker fra modell 1 til modell 2**: enten var sammenhengen **spuriøs** (koeffisienten
  forsvinner → felles bakenforliggende Z) eller **indirekte/mediert** (koeffisienten
  krymper → variabelen virket gjennom en mellomliggende variabel — toppkandidat-
  observasjon); skille de to (avhenger av kausalmodellen fra 1.2); multippel regresjon
  gir den **direkte** effekten kontrollert for øvrige; **statistisk kontroll ≠
  eksperimentell kontroll** (bare MÅLTE variabler kan kontrolleres — umålte Z gjenstår).
- **Formler/notasjon + tolkningskontrakt:** to modeller sammenlignes (før/etter
  kontroll); koeffisientendringen tolkes i kontekst («kjønnseffekten synker når
  utdanning legges til → delvis indirekte gjennom utdanning»). `example` ×1–2: to
  nyskrevne regresjonstabeller (uten og med kontrollvariabel) tolkes side ved side.
- **Drøftingsakser:** spuriøsitet vs. mediering — samme koeffisientfall, ulik
  konklusjon; hva kontroll IKKE kan fikse (umålte Z); direkte vs. total effekt.
- **Case-forslag:** Effekten av sosial bakgrunn på inntekt faller når utdanning legges
  til modell 2 — drøft om det er spuriøsitet eller mediering, avhengig av kausalmodellen;
  pek på en umålt variabel som fortsatt kan forkludre estimatet.
- **Typiske feil:** #12 forveksle kontroll og interaksjon; tolke ethvert koeffisientfall
  som spuriøsitet (kan være mediering); kausaltolke uten å vurdere umålte Z.
- **Kvote:** 20 quiz / 20 flashcards (kontroll↔interaksjon; spuriøsitet↔mediering;
  direkte↔indirekte effekt; statistisk↔eksperimentell kontroll).

**Prøve-kvote Del 8:** 4 prøver (se §4).

### Del 9 — Stata i praksis (SOS-unik del)

> **STV1020 leser bare R-utskrift** — SOS1120 har en egen Stata-bolk på eksamen
> (V2018) og gir Stata et eget kapittelpar. Å lese Stata-utskrift er nødvendig i HELE
> Del 8; å kjøre kommandoer er V2018-ferdigheten. `verifiser mot SOSGEO1120` om
> Stata-vekten har økt. Symbol-/kommandoliste-collapsible obligatorisk.

#### Kapittel 9.1: Å lese en Stata-utskrift
- **id:** `sos1120-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `sos1120-8-3`
- **Kapitteltype:** tema/verktøy (hybrid).
- *Description:* Hvordan Stata-utskrifter ser ut og leses — `sum`/`tabstat` for
  deskriptiv statistikk, `ttest` for gruppedifferanse, `reg` for regresjon — siden
  tabellene i papiroppgavene HAR Stata-form.
- **Eksamensbelegg:** Stata-praksis ~15 % (økende, sjanger — men utskriftsform
  gjennomgående i regresjonsoppgavene). Prioritet: kjenne/kunne (nødvendig for Del 8-
  tabellene).
- **Begrepskontrakt:** **`sum`/`summarize`** (Obs, Mean, Std. Dev., Min, Max) og
  **`tabstat`** for deskriptiv statistikk; **`ttest`**-utskrift (gruppegjennomsnitt,
  differanse, Std. Err., t, p, KI); **`reg`**-utskrift (`Coef.`, `Std. Err.`, `t`,
  `P>|t|`, `[95% Conf. Interval]`, `Beta`, `_cons`, `R-squared`, `N`); hvordan hver
  kolonne kobles til det håndregnede (t = Coef./Std. Err.; KI = Coef. ± t·SE;
  P>|t| = p-verdien); dummyer merket `(d)`.
- **Formler/notasjon + tolkningskontrakt:** ingen ny formel — koblingen utskrift ↔
  håndregning er poenget. Hver utskrift leses OG tolkes i kontekst. `example` ×2–3:
  les en `reg`-utskrift (identifiser alle størrelser og tolk to koeffisienter); les en
  `ttest`-utskrift og konkluder med retning; les en `sum`-utskrift.
- **Drøftingsakser:** hvorfor utskriften gir alt (Coef., SE, t, p, KI) ferdig, men
  tolkningen fortsatt må gjøres av kandidaten; håndregning som kontroll av utskriften.
- **Case-forslag:** En nyskrevet `reg`-utskrift (inntekt på alder/utdanning/kjønn):
  pek ut konstantledd, koeffisienter, SE, t, p, KI og R²; verifiser én t-verdi for
  hånd; tolk to koeffisienter i kontekst.
- **Typiske feil:** lese feil kolonne (SE vs. t); overse `_cons` som konstantledd; tro
  utskriften «tolker seg selv» (droppe substansiell tolkning).
- **Kvote:** 18 quiz / 18 flashcards (Stata-kolonne↔betydning; utskrift↔håndregning-
  kobling; `sum`/`ttest`/`reg`).

#### Kapittel 9.2: Å kjøre Stata på eksamen
- **id:** `sos1120-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `sos1120-9-1`
- **Kapitteltype:** tema/verktøy (hybrid — V2018 Stata-bolk).
- *Description:* Den praktiske Stata-bolken fra 2018: åpne et datasett, kjøre enkle
  kommandoer, lime inn koden i besvarelsen og tolke resultatet — uten programmering.
- **Eksamensbelegg:** Stata-bolk (V2018, sjanger — åpne datasett, kjøre `ttest`/`reg`,
  lime kode). Prioritet: kjenne (økende; `verifiser mot SOSGEO1120`).
- **Begrepskontrakt:** åpne et innebygd datasett (`sysuse`-typen); enkle kommandoer
  **`sum`**, **`tabstat`**, **`ttest`**, **`reg`** med variabelnavn; å **lime inn
  koden OG utskriften** i besvarelsen som dokumentasjon; **tolke resultatet i
  kontekst** (kommandoen er halve poenget — tolkningen er den andre); at ingen loops/
  programmering kreves (analysen §6). Kommandolista holdes kort og eksamensrettet.
- **Formler/notasjon + tolkningskontrakt:** kommandosyntaks (f.eks. `reg y x1 x2`);
  hver kjøring ender i tolkning. `example` ×2: skriv kommandoen for en to-utvalgs
  t-test og tolk (nyskrevet) utskrift; skriv kommandoen for en multippel regresjon og
  tolk koeffisientene.
- **Drøftingsakser:** hvorfor koden må limes inn (etterprøvbarhet); kommando vs.
  tolkning (begge gir poeng); når `ttest` vs. `reg` er riktig verktøy.
- **Case-forslag:** «Du skal teste om inntekt er forskjellig for menn og kvinner i
  datasettet, og deretter kontrollere for utdanning. Skriv kommandoene og tolk en
  nyskrevet utskrift.» (`ttest inntekt, by(kvinne)` → `reg inntekt kvinne utdanningsaar`).
- **Typiske feil:** skrive kommandoen men glemme tolkningen (halve poenget); velge feil
  kommando for oppgaven; ikke lime inn dokumentasjon.
- **Kvote:** 14 quiz / 12 flashcards (kommando↔oppgave; `ttest`↔`reg`; kode + tolkning).

**Prøve-kvote Del 9:** 4 prøver (se §4).

### Del 10 — Eksamenstrening

> Del 10 trener BEGGE eksamensdeler (flervalg + utregning + Stata). Sjangerkapitlene
> følger drøftings-DNAets sjangermal (tip Eksamensvinkel → text Oppskrift med
> tidsbudsjett → example gjennomskrevet besvarelse med margkommentarer → exercise
> ×3–6 med momentliste-løsninger); 10.3 bruker regnefag-DNAets drillmal (hybrid-lån);
> modellbesvarelsene (10.6–10.8) bruker «E/C-kjerne + A-plusspoeng-lag»-formatet
> (§2b). ALT oppgavemateriale er nyskrevet — mønstre og deloppgaveforløp klones tett,
> men ingen formuleringer, case-navn eller talloppsett fra UiO-sett gjenbrukes.

#### Kapittel 10.1: Flervalgssjangeren — flervalgsberedskap
- **id:** `sos1120-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–9
- **Kapitteltype:** sjanger (flervalg / MC, auto-rettet).
- *Description:* Hvordan flervalgsdelen tester hele pensumbredden, og strategien som
  holder feilraten nede — særlig der gale svar trekker (−0,25).
- **Eksamensbelegg:** Flervalgsdel (MC / Bolk 1) i nytt regime; temaspredning:
  sentraltendens, standardavvik, boksplott, skjevhet, standard normalfordeling/Z,
  standardfeil, samplingfordeling, KI-tolkning, målenivå, spuriøsitet, utvalg.
  Prioritet: perfekt (en hel auto-rettet eksamensdel). `verifiser mot SOSGEO1120`.
- **Innhold:** Oppskrift for flervalg (eliminasjon, nabobegrep-feller, «hvilket
  målenivå/korrelasjonsmål?»-typer, KI-/samplingfordeling-tolkningsspørsmål,
  definisjonssjekk); tidsbudsjett (~40 min); «hopp over ved ren gjetting»-heuristikk
  der trekk gjelder. Gjennomgang av de vanligste flervalgstemaene med typiske
  distraktorer. Dette kapitlets store quiz-kvote ER flervalgsbanken — nabobegrep-
  distraktorer, «hvilken feil begår kandidaten?»-format og små tabell-/utregnings-
  spørsmål på tvers av hele pensum.
- **Typiske feil:** bruke for lang tid på enkeltspørsmål (jevn vekt); overtenke «lure»
  distraktorer; forveksle nabobegreper (SD/SE, kontroll/interaksjon, to-/ensidig, type
  I/II); gjette der trekk gjelder.
- **Kvote:** 20 quiz / 8 flashcards.

#### Kapittel 10.2: Utregningscasen — den sammenhengende forskningsprosessen
- **id:** `sos1120-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–9
- **Kapitteltype:** sjanger (utregningsdel — masteroppskrift for hele forsknings-
  prosessen).
- *Description:* Utregningsdelen som ett fast forløp: hvordan man svarer seg gjennom
  hele case-løypa fra målenivå til årsak uten å miste sammenhengen eller glemme
  tolkningskontrakten.
- **Eksamensbelegg:** Utregningsdel = én sammenhengende case i nyere sett; fast
  deloppgaverekkefølge (analysen §1). Prioritet: perfekt.
- **Innhold:** Løypa som fast oppskrift med tidsbudsjett (~200 min): målenivå (2.1) →
  deskriptiv statistikk (3.1–3.2) → standardfeil/KI (5.1–5.3) → kjikvadrat/t-test
  (6.1–6.3) → regresjonsligning + tolkning (8.1) → R²/prediksjon (8.2) → t-test av
  koeffisient df=N−k−1 (8.3) → dummy/samspill (8.4) → kontroll/stimodell (8.5/1.2) →
  utvalg/generalisering (1.3). Hvert trinn med «hva sensor ser etter» og
  tolkningskontrakt-påminnelse. Gjennomskrevet case-utdrag (nyskrevet: sosial bakgrunn
  og inntekt) med margkommentarer.
- **Typiske feil:** hoppe over de mekaniske E-poengene i jakten på drøfting; miste
  kontekst-konklusjonen (tolkningskontraktens ledd 2 og 4); glemme «kontrollert for»
  og retning.
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.3: Regnedrill — hele den mekaniske kjernen
- **id:** `sos1120-10-3` · **number:** 10.3 · **estimatedMinutes:** 60 · **prerequisites:** Del 2–8
- **Kapitteltype:** drillkapittel (regnefag-DNA — hybrid-lånet i renest form).
- *Description:* Alle de mekaniske ferdighetene drillet med løsningsoppskrift,
  gjennomregnet eksamenscase og varianter på eksamensnivå — målenivå, deskriptiv, SE,
  KI, kjikvadrat, t-test, regresjonstolkning, prediksjon, dummy.
- **Eksamensbelegg:** Sjanger-katalogen A, B, C, E, F, G, J, K: de sikreste
  enkeltoppgavene. Formler alltid oppgitt, tall alltid snille. Prioritet: perfekt.
- **Innhold:** Løsningsoppskrift (algoritmisk): (1) identifiser hva som spørres og
  hvilken oppgitt formel som hører til; (2) sett opp alle ledd synlig; (3) regn med
  rimelighetssjekk; (4) TOLK i kontekst (obligatorisk siste steg — tolkningskontrakten).
  Gjennomregnet eksamenscase med sensor-margnotater. `exercise` ×10–15 som dekker HELE
  katalogen: 2 målenivå-diagnoser med begrunnelse, 2 deskriptive (median via kumulativ
  %, andel), 2 standardfeil (gjennomsnitt + andel), 2 konfidensintervall (med
  frekventistisk tolkning), 1 kjikvadrat (df=(r−1)(c−1)), 2 t-tester (ett gjennomsnitt +
  koeffisient, df=N−k−1, retning), 1 prediksjon, 1 dummy/samspill (utled likninger) —
  alle med nyskrevne snille tall og full solution + hints.
- **Typiske feil:** usynlig fremgangsmåte; #8 feil df/kritisk verdi; #4 SD↔SE; #5/#6
  tolkning uten kontekst; #7 løs KI-tolkning; #9/#10 to-/ensidig og retning.
- **Kvote:** 16 quiz / 8 flashcards.

#### Kapittel 10.4: Tegne- og drøftedrill — stimodell, kausalitet og utvalg
- **id:** `sos1120-10-4` · **number:** 10.4 · **estimatedMinutes:** 50 · **prerequisites:** Del 1, 8
- **Kapitteltype:** sjanger/drill (drøftingssiden).
- *Description:* Drøftingsferdighetene drillet: tegne stimodeller, skille spuriøsitet
  fra mediering, gjenkjenne Simpsons paradoks, og drøfte utvalg/generalisering og
  kontroll vs. interaksjon.
- **Eksamensbelegg:** Sjanger-katalogen L, M, N, O: drøftingskravene der presise
  skiller og komplette resonnementer gir uttelling. Prioritet: perfekt (drøftesiden).
- **Innhold:** Oppskrifter for hver drøftesjanger: stimodell (tegn → merk pilretning →
  case-tilpass bakenforliggende/mellomliggende/spuriøs); spuriøsitet vs. mediering
  (hvorfor koeffisienten synker); Simpsons paradoks (identifiser marginale vs. betingede
  fordelinger — IKKE kjikvadrat); utvalg/generalisering (sannsynlighetsutvalg, frafall,
  usikkerhet vs. skjevhet); kontroll vs. interaksjon (juster-for vs. ulik-effekt).
  Gjennomskrevet eksempel med margkommentarer. `exercise` ×5–6 nyskrevne
  drøftingsoppgaver med momentliste-løsninger.
- **Typiske feil:** #13 kjikvadrat på Simpson; #12 kontroll↔interaksjon; #14 skjevt
  utvalg som representativt; #15 usikkerhet↔skjevhet; piler i feil retning.
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.5: Feilvaksinen — de 15 feilene som senker karakteren
- **id:** `sos1120-10-5` · **number:** 10.5 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–9
- **Kapitteltype:** tverrgående drillkapittel (utvidelse av DNA-malen).
- *Description:* Alle 15 sensordokumenterte feil (analysen §5) drillet med før/etter-
  omskrivinger — særlig SD↔SE, glemt «kontrollert for», løs KI-tolkning, feil df,
  to-/ensidig, «signifikant» uten retning, og kjikvadrat på Simpson.
- **Eksamensbelegg:** Analysen §5 komplett. De farligste: #4 (SD/SE), #5 («kontrollert
  for»), #7 (KI-tolkning), #8 (df/kritisk verdi), #9/#10 (to-/ensidig + retning), #13
  (kjikvadrat på Simpson). Prioritet: perfekt (feilunngåelse er karakterforsikring).
- **Innhold:** Én seksjon per feil: (a) feilen slik sensor ser den; (b) nyskrevet «slik
  ser den ut i en besvarelse»-utdrag; (c) A-omskriving av samme passasje; (d)
  varsellampe-heuristikk. Feilenes hjemkapitler: #1→2.1, #2→2.1/3.1, #3→7.2, #4→5.1,
  #5→8.1, #6→8.1, #7→5.3, #8→6.3/6.1/8.3, #9→6.1, #10→6.1/6.2, #11→8.1, #12→8.4/8.5,
  #13→1.2, #14→1.3, #15→1.3/5.1. Driller gjenkjenning («hvilken feil begår denne
  kandidaten?» — utmerket flervalgsformat). De farligste får dobbel dose med før/etter-
  formuleringspar.
- **Kvote:** 20 quiz / 14 flashcards (feil↔riktig-omskrivingspar).

#### Kapittel 10.6: Modellbesvarelse — inferens-/KI-tung utregningscase (nytt regime)
- **id:** `sos1120-10-6` · **number:** 10.6 · **estimatedMinutes:** 45 · **prerequisites:** `sos1120-10-2`, `sos1120-10-3`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Utregningscase med tyngde på deskriptiv statistikk, standardfeil,
  konfidensintervall og kjikvadrat/t-test (Del 3, 5, 6).
- **Tema/oppgave (nyskrevet):** En case om oppvekstvilkår blant innsatte: målenivå →
  deskriptiv statistikk fra frekvenstabell → standardfeil og 95 % KI for en andel (med
  frekventistisk tolkning) → kjikvadrat-test for hånd → to-utvalgs t-test med retning.
- **Karakternivåer (E/C-kjerne + A-lag, §2b):** Full besvarelse der kjernen (korrekte
  klassifiseringer, median via kumulativ %, riktig SE/KI-utregning, df=(r−1)(c−1))
  står i brødtekst; A-laget margmarkert («her: frekventistisk KI-tolkning — separate
  poeng», «her: retning i t-test-konklusjonen», «her: SD vs. SE skilt eksplisitt»).
  Kort kommentert C-variant viser gapet (løs KI-tolkning #7). Avsluttes med `tip`
  **Sensorblikket**: momentliste + vekting.
- **Typiske feil demonstrert:** #7, #4 (i C-varianten), #8, #10.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.7: Modellbesvarelse — regresjonstung case med Stata-utskrift
- **id:** `sos1120-10-7` · **number:** 10.7 · **estimatedMinutes:** 45 · **prerequisites:** `sos1120-10-2`, `sos1120-10-3`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Utregningscase bygget på en Stata-regresjonsutskrift (§2d), med
  tolkning, R², prediksjon, t-test av koeffisient, dummy og samspill (Del 8, 9).
- **Tema/oppgave (nyskrevet):** En case om inntekt, utdanning og kjønn: les Stata-
  utskriften → skriv modellen på generell form (med residual) → tolk konstantledd og
  koeffisienter (teknisk + substansielt, «kontrollert for») → tolk R² → predikér →
  t-test av en koeffisient (df=N−k−1) → utled to likninger fra et samspillsledd → si
  hvilken variabel betyr mest (Beta med tall).
- **Karakternivåer:** Kjerne (korrekt Stata-lesing, teknisk tolkning, riktig prediksjon,
  df=N−k−1) i brødtekst; A-lag margmarkert («her: substansiell tolkning i kontekst»,
  «her: konstantleddet flagget som ikke-tolkbart», «her: Beta oppgitt med tall»).
  Kommentert C-variant uten «kontrollert for» (#5) og med glemt residualledd (#11).
  `tip` Sensorblikket.
- **Typiske feil demonstrert:** #5, #11 (i C-varianten), #6, #8.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.8: Modellbesvarelse — krysstabell- og designcase (gammelt regime)
- **id:** `sos1120-10-8` · **number:** 10.8 · **estimatedMinutes:** 45 · **prerequisites:** `sos1120-10-4`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Gammelt-regime-case med tyngde på krysstabell/gamma/Cramers V,
  stimodell, utvalg og forskningsdesign (Del 1, 7).
- **Tema/oppgave (nyskrevet):** En case om kulturbruk og sosial bakgrunn: målenivå →
  krysstabell med prosentdifferanse og gamma → kjikvadrat → tegn stimodell (bakenfor-
  liggende/mellomliggende) → drøft utvalg/generalisering → kort designdrøfting
  (likhets-/forskjellsteknikk).
- **Karakternivåer:** Kjerne (korrekt prosentuering, gamma, tegnet stimodell, riktig
  utvalgsvurdering) i brødtekst; A-lag margmarkert («her: gamma vs. Cramers V begrunnet
  på målenivå», «her: spuriøs vs. mediert skilt», «her: frafallsskjevhet vs.
  usikkerhet»). Kommentert C-variant som behandler et skjevt utvalg som representativt
  (#14). `tip` Sensorblikket.
- **Typiske feil demonstrert:** #14, #3 (i C-varianten), #13, #12.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 10.9: Øvingseksamen A — nytt regime (flervalg + utregning)
- **id:** `sos1120-10-9` · **number:** 10.9 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–9
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett i 2015–2017-form: **Del 1 = ~13 flervalgsspørsmål**
  (nyskrevne, hele pensumbredden: sentraltendens, SD, boksplott, skjevhet, standard
  normalfordeling/Z, standardfeil, samplingfordeling, KI-tolkning) + **Del 2 = én
  sammenhengende utregningscase** som følger forskningsprosessen (nyskrevet: sosial
  ulikhet og utdanning). Full momentliste-fasit per deloppgave med markerte A-skiller
  og kjerne vs. A-lag-kommentar; `tip` om vekting (Del 1 og Del 2 vektes likt) og
  tidsbudsjett.
- **Kvote:** 4 quiz / 2 flashcards.

#### Kapittel 10.10: Øvingseksamen B — 2018-regimet med Stata-bolk
- **id:** `sos1120-10-10` · **number:** 10.10 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–9
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett i V2018-form med **tre bolker**: **Bolk 1 = flervalg**
  (nyskrevet, med −0,25-trekk-note der relevant) + **Bolk 2 = Stata-oppgaver** (skriv
  kommandoene `ttest`/`reg`, tolk nyskrevet utskrift) + **Bolk 3 = håndregning + tekst**
  (standardavvik, to-utvalgs t-test, sentralgrenseteorem, KI-tolkning, Simpsons
  paradoks, multippel regresjon). Full fasit med Stata-lesing forklart linje for linje
  og håndregning parallelt der mulig; `tip` om vekting/tidsbudsjett. `verifiser mot
  SOSGEO1120` om bolk-strukturen har endret seg.
- **Kvote:** 4 quiz / 2 flashcards.

#### Kapittel 10.11: Øvingseksamen C — blandet, med gammelt-regime-innslag
- **id:** `sos1120-10-11` · **number:** 10.11 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–9
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett som blander regimene: **flervalgsdel** + **utregningscase**
  som inkluderer ett krysstabell-/gamma-ledd og ett stimodell-/designledd (7.1, 1.2,
  1.4) i tillegg til KI-/regresjonsløypa (nyskrevet: helse og levekår). Begrunnelse:
  krysstabellmål og kausalitetsdrøfting lever videre, og et blandet sett trener
  bredden. Full fasit med markerte A-skiller; `tip` om vekting.
- **Kvote:** 4 quiz / 2 flashcards.

### Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 18 | — |
| 1 | 4 | 82 | 86 | 4 |
| 2 | 1 | 30 | 34 | 4 |
| 3 | 2 | 44 | 40 | 4 |
| 4 | 2 | 42 | 42 | 4 |
| 5 | 3 | 70 | 64 | 4 |
| 6 | 3 | 66 | 62 | 4 |
| 7 | 2 | 42 | 44 | 4 |
| 8 | 5 | 118 | 108 | 4 |
| 9 | 2 | 32 | 30 | 4 |
| 10 | 11 | 114 | 64 | 3 øvingseksamener |
| **Sum** | **37** | **666 ✓ (≥500)** | **592 ✓ (≥500)** | **36 + 3** |

Summeringskontroll per del (quiz): Del 0: 12+14=26 · Del 1: 20+24+22+16=82 ·
Del 2: 30 · Del 3: 24+20=44 · Del 4: 22+20=42 · Del 5: 22+26+22=70 ·
Del 6: 24+18+24=66 · Del 7: 22+20=42 · Del 8: 28+24+22+24+20=118 ·
Del 9: 18+14=32 · Del 10: 20+14+16+14+20+6+6+6+4+4+4=114. Totalsum
26+82+30+44+42+70+66+42+118+32+114 = **666**.

Summeringskontroll per del (flashcards): Del 0: 8+10=18 · Del 1: 20+26+22+18=86 ·
Del 2: 34 · Del 3: 22+18=40 · Del 4: 22+20=42 · Del 5: 22+22+20=64 ·
Del 6: 24+16+22=62 · Del 7: 22+22=44 · Del 8: 26+20+20+22+20=108 ·
Del 9: 18+12=30 · Del 10: 8+8+8+8+14+4+4+4+2+2+2=64. Totalsum
18+86+34+40+42+64+62+44+108+30+64 = **592**.

**Kvotebegrunnelse (jf. produksjonsløypas «≥500 er GULV»):** Quiz er høyt (666) fordi
det nye regimet har en HEL auto-rettet **flervalgsdel** (MC / Bolk 1) — flervalgsbanken
er direkte flervalgstrening og skal dekke hele pensumbredden (deskriptiv, SD/SE,
boksplott, normalfordeling/Z, samplingfordeling, KI-tolkning, målenivå, spuriøsitet,
utvalg). Flashcards (592) ligger solid over gulvet fordi faget er begrepsrikt
(målenivåtypologien, standardavvik↔standardfeil, samplingfordeling/CLT, KI-tolkning,
korrelasjonsmål, dummy-/samspill-/kontrollapparatet, kausalbegrepene) — men lavere enn
et rent puggefag fordi den regnetunge halvparten (Del 3–9) har færre definisjonsbegreper
per kapittel. Ryggrads-kapitlene (2.1 målenivå ~95 %, 3.1 deskriptiv ~95 %, 8.1 tolke
koeffisient ~95 %, 5.2 KI ~85 %, 6.3 kjikvadrat ~85 %) er tyngst kvotert; kjenne-
kapitlene (1.4 gammelt regime, 7.2 Pearsons r) lettest. Den ekstra tyngden mot STV1020
(37 vs. 35 kapitler; Del 8 har 5 kapitler) reflekterer at SOS1120 er MER regnetungt og
har to SOS-unike deler (Del 4 sannsynlighet, Del 5 standardfeil/KI) + en Stata-del.

**Flashcard-profil:** hovedvekt på **begrep↔definisjon↔kontrastbegrep**-par
(nominal↔ordinal↔intervall↔forholdstall, standardavvik↔standardfeil, samplingfordeling↔
datafordeling, spuriøs↔mediert, kontroll↔interaksjon, to-↔ensidig test, type I↔II,
frekventistisk↔feilaktig KI-tolkning, deskriptiv↔inferens, målenivå↔korrelasjonsmål) —
nøyaktig presisjonen deloppgavene og feilene #1/#4/#7/#12 tester. Flashcards genereres
KUN fra toppnivå `definition`-blokker med `title` (plattformregel).
**Quiz-profil (= flervalgstrening):** flervalg med nabobegrep-distraktorer, «hvilket
målenivå/korrelasjonsmål?»-format, «hvilken feil begår kandidaten?»-format,
tolkningskontrakt-varianter (teknisk vs. kontekst; frekventistisk vs. løs KI-tolkning)
og små regne-/tolkningsspørsmål med oppgitt tabell/formel.

---

## 4. Prøver

### Temadelprøver (4 per temadel, Del 1–9 = 36 prøver)

Hver prøve speiler eksamens format (flervalgsinnslag + utregnings-/scenariobaserte
a/b/c-ledd). Omfang 20–45 min. Alle scenarier, tabeller og tall er nyskrevne.
Prøvekapitler får id `sos1120-<del>-prove`, chapterNumber `<del>.P`.

- **Del 1:** (1) Hypotese og variabler — 10 flervalg + populasjon/enhet/variabel-
  diagnose på 2 hypoteser; (2) Kausalmodell-verksted — tegn og case-tilpass
  bakenforliggende/mellomliggende/spuriøs for 2 scenarier + Simpsons-identifikasjon
  (IKKE kjikvadrat); (3) Utvalg — velg/vurder sannsynlighetsutvalg for 2 scenarier +
  frafall/skjevhet vs. usikkerhet; (4) Full designdrøfting (gammelt regime: likhets-/
  forskjellsteknikk, tidsdesign, etikk, momentliste).
- **Del 2:** (1) Målenivå-diagnosen — klassifiser og begrunn 8 variabler (nominal/
  ordinal/intervall/forholdstall) + operasjonskonsekvens; (2) Målenivå-flervalg (12
  spørsmål med nabofeller); (3) «Kan vi bruke dette målet?» — 6 mål-på-variabel-
  diagnoser (median på nominal, gjennomsnitt på ordinal osv.); (4) Blandet delprøve
  (målenivå + konsekvens for sentralmål i case-format).
- **Del 3:** (1) Deskriptiv regneprøve — frekvenstabell: modus/median via kumulativ
  %/gjennomsnitt/andel/variasjonsbredde (oppgitt formel) + målenivåkonsekvens; (2)
  Spredning og form — regn standardavvik + les skjevhet fra gjennomsnitt/median +
  boksplott; (3) Deskriptiv-flervalg (10 spørsmål: SD, skjevhet, boksplott, kumulativ
  %); (4) Blandet deskriptiv delprøve.
- **Del 4:** (1) Normalfordeling — standardiser + tabelloppslag (areal og kritiske
  verdier), 4 oppgaver; (2) Samplingfordeling/CLT — forklar konseptuelt + P(x̄ > verdi),
  2 scenarier; (3) Normalfordeling/sampling-flervalg (10 spørsmål); (4) Blandet
  sannsynlighets-delprøve.
- **Del 5:** (1) Standardfeil — regn SE(gjennomsnitt), SE(andel), SE(differanse) fra
  oppgitte tall (30 min) + SD vs. SE-forklaring; (2) Konfidensintervall — regn KI for
  gjennomsnitt (t), andel (z) og differanse med riktig kritisk verdi; (3) KI-tolkning
  — formuler frekventistisk tolkning for 3 intervaller og pek ut feilformuleringene;
  (4) Full KI-oppgave (a–c: SE → KI → tolkning, momentliste).
- **Del 6:** (1) Hypotesetest/t-test — H0/HA (to-/ensidig) + t = estimat/SE + df +
  konklusjon med retning, 2 scenarier; (2) Kjikvadrat — regn forventede frekvenser, χ²,
  df=(r−1)(c−1), konkluder mot kritisk verdi; (3) Hypotesetest-flervalg (12 spørsmål:
  to-/ensidig, p↔α, type I/II, retning); (4) Full inferens-delprøve (to-utvalgs t-test
  + kjikvadrat, momentliste).
- **Del 7:** (1) Krysstabell — regn prosentdifferanse + tolk Cramers V + regn gamma fra
  ordinal-tabell; (2) Korrelasjonsmål-valg — 5 variabelpar → riktig mål med begrunnelse;
  (3) Pearsons r — tolk korrelasjonstabell + hvilken variabel hører ikke hjemme; (4)
  Blandet bivariat delprøve.
- **Del 8:** (1) Regresjonsligning + tolkning — skriv generell (med residual!) og
  estimert form + tolk konstant/koeffisienter (teknisk + substansielt, «kontrollert
  for», Stata-form); (2) R²/prediksjon/residual — regn og tolk fra oppgitt tabell;
  (3) t-test av koeffisient (df=N−k−1, kritisk verdi/KI for b, konkluder i kontekst);
  (4) Dummy/samspill/kontroll — kod dummyer, utled to likninger fra samspillsledd,
  drøft koeffisientfall (spuriøs vs. mediert), momentliste.
- **Del 9:** (1) Les Stata-utskrift — identifiser alle størrelser i en `reg`-utskrift +
  verifiser én t-verdi for hånd; (2) `ttest`/`sum`-lesing — les og tolk med retning;
  (3) Skriv kommandoer — riktig kommando for 4 oppgaver + tolkning; (4) Full Stata-bolk
  (åpne, kjøre `ttest`+`reg`, lime kode, tolke, momentliste).

### Komplette øvingseksamener (3 — se kap. 10.9–10.11)

Alle: 4 timer, flervalgsdel + utregningsdel som følger forskningsprosessen; full
momentliste-fasit per deloppgave med markerte A-skiller (kjerne vs. A-lag); nyskrevne
scenarier og tall. Profilene dekker de tre eksamensformene: A (2015–2017, flervalg +
utregning, håndregning), B (V2018, tre bolker med egen Stata-bolk), C (blandet med
krysstabell-/gammelt-regime-innslag).

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — regimeskiftet 2015, todelingen (flervalg + utregning + Stata),
   forskningsprosess-løypa utregningsdelen følger, hjelpemidler (formelark + tabeller +
   bøker fra 2015), tidsbudsjett, «regn — tolk i kontekst — konkluder» (fra kap.
   0.1–0.2); nedlagt/etterfølger-note (SOS1120 → SOSGEO1120).
2. **De fire ryggrads-ferdighetene** — bestem+begrunn målenivå (2.1), deskriptiv
   statistikk fra frekvenstabell (3.1), tolke konstant/koeffisient i kontekst (8.1) og
   tolke R² (8.2) som ferdige forløp, med tolkningskontrakten (§2d) og de farligste
   feilene (#1, #2, #5, #6) innfelt.
3. **Fagets bærebjelke: standardfeil og konfidensintervall** — SE (5.1), KI-utregning
   (5.2) og den frekventistiske tolkningen (5.3) som ett forløp, med SD↔SE-skillet og
   feil #4/#7 uthevet.
4. **Sannsynlighet som fundament** — normalfordeling/Z (4.1) og samplingfordeling/CLT
   (4.2) som oppslag: hvorfor vi kan bruke normalfordelingen på et gjennomsnitt.
5. **Forskningsprosessen som ett forløp** — utregningscasens masteroppskrift (10.2) fra
   målenivå til årsak, med «hva sensor ser etter» ved hvert trinn.
6. **Regne- og tolkningskort** — alle regneferdighetene (deskriptiv, SE, KI, kjikvadrat
   df=(r−1)(c−1), t-test df=N−k−1/N−1, prediksjon, dummy) med formler, ett minieksempel
   hver og tolkningskontrakt-maler; Stata-utskrift-lesing (§2d).
7. **Drøftekartet** — stimodellene (tegnet: bakenforliggende/mellomliggende/spuriøs),
   Simpsons paradoks (≠ kjikvadrat), kontroll↔interaksjon, utvalg/generalisering
   (usikkerhet↔skjevhet) som oppslag.
8. **Begrepsbank med kontraster** — kontrastparene (nominal↔ordinal↔intervall↔
   forholdstall, SD↔SE, samplingfordeling↔datafordeling, spuriøs↔mediert, kontroll↔
   interaksjon, to-↔ensidig, type I↔II, frekventistisk↔løs KI-tolkning) i tabellform —
   flashcard-speilet i prosa.
9. **Feilvaksine-kortversjonen** — de 15 feilene som énlinjers varsellamper, med de
   farligste (#4, #5, #7, #8, #9/#10, #13) uthevet.
10. **Flervalgs- og Stata-strategien** — flervalgsberedskap (10.1: eliminasjon,
    nabobegrep-feller, «hopp over ved trekk») og Stata-kommandoene (9.1–9.2).
11. **Ukeplan** — 6-ukers og 2-ukers løp mot eksamen med prøve-innplassering
    (temadelprøver underveis; øvingseksamen A først, B og C de siste to ukene;
    feilvaksinen som siste gjennomgang).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; wiring i `textbook-courses-hoyskole.ts`
   per produksjonsløypa fase 5): id `sos1120`, title, `level: 'Høyskole'`, alle 37
   kapitler + 9 prøvekapitler med id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites fra dette skjelettet; `sectionNames` fra §2-tabellen.
   **`number` er DEL-BASERT («8.1»), ALDRI lineær** — prosareferanser i innholdet
   bruker samme form («kap. 8.1»). Prøvekapitler: `sos1120-<del>-prove`, chapterNumber
   `<del>.P`. Bokforsidens description skal formidle nedlagt/etterfølger-noten.
2. **Del 0** (etablerer mantraene alle senere kapitler refererer: «regn — tolk i
   kontekst — konkluder», tolkningskontrakten §2d, regimeskiftet, todeling-strategien,
   nedlagt/etterfølger-noten).
3. **Del 1 → 9** i rekkefølge (respekterer forskningsprosessen og prerequisites —
   2.1 før 3.1/7.2/8.1; 4.1 før 4.2 før 5.1; 5.1 før 5.2 før 5.3; 5.2 før 6.1; 6.1 før
   6.2/6.3/8.3; 8.1 før 8.2–8.5; 8.5 bygger på 1.2; 8.3 før 9.1). Én byggeagent per hel
   del (produksjonsløypa fase 4); Del 8 (5 kap) kan splittes, men gi begge agentene
   HELE delens kontrakter og flagg for konsistenssjekk.
4. **Del 10** til slutt (sjanger-, drill-, feilvaksine- og modellbesvarelseskapitlene
   gjenbruker oppskrifter og begreper fra temadelene; øvingseksamenene bygges av én
   agent som leser HELE skjelettet).
5. **Prøvekapitler** (bygges av samme agent som delen) etter at delens temakapitler
   finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per kapittel gjelder arketypens blokkstruktur: drøftingskapitler (Del 1) følger
drøftings-DNAet (tip Eksamensvinkel → text Forkunnskaper med kryssbok-lenker +
collapsible **Symbol- og formelliste** → text landskap → definition kjernebegreper →
text posisjoner/spenninger → example anvendelse → warning typiske feil → exercise →
collapsible begrepskart); statistikk-/inferens-/regresjonskapitler (Del 3–9) følger
regnefag-lånet (tip Eksamensvinkel → text Forkunnskaper + Symbol- og formelliste →
text motivasjon → definition/formel → gjennomregnede `example` med tolkningskontrakt →
warning typiske feil → `exercise` med solution + hints i stigende serie → collapsible
repetisjon). **Tolkningskontrakten (§2d) er obligatorisk etter hvert regnestykke og
hver koeffisient.** Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og
feilnumrene fra dette skjelettet — forfatteren skal IKKE finne på frekvenstall.
Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/sos1120-*.json` parser med
      `json.load`/`JSON.parse` (generer via `json.dump` — LaTeX i JSON krever `\\`).
      `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 37 kapittel-id-er + 9 prøvekapitler i course-
      oppføringen har eksisterende content-fil; prerequisites peker på eksisterende
      id-er; `sectionNames` satt (ellers viser bokforsiden «Seksjon N»); narrativ-id-er
      registrert slik at toggle rendrer (verifiser med prod-server + curl at
      narrativ-ruter gir 200).
- [ ] **`number` del-basert:** alle chapterNumber på formen `<del>.<nr>`/`<del>.P`,
      aldri lineær; prosareferanser i innholdet bruker samme form.
- [ ] **Notasjonskontrakt:** all statistikknotasjon følger §2c ($\bar{X}$, $s$, $Z$,
      SE-formlene, KI $= \text{estimat} \pm \text{kritisk} \cdot SE$, $\chi^2$,
      df-reglene, $Y_i = b_0 + \dots + e_i$, $\hat{Y}$, $R^2$, $t = b/SE(b)$, Stata-
      kolonnene, målenivåtermene) — ingen lærebok-alternativer.
- [ ] **Tolkningskontrakten:** hvert regnestykke og hver koeffisient i boka ender i en
      substansiell tolkning i kontekst (§2d ledd 2 + 4); ingen «fasit uten mening».
- [ ] **Harde krav som warnings:** **«kontrollert for»** eksplisitt ved koeffisient-
      tolkning (8.1, 0,5 trekk uten); **Beta med tall** når «betyr mest» spørres (8.1);
      **frekventistisk KI-tolkning** (5.3, feil #7); **to- vs. ensidig test** (6.1,
      ensidig der tosidig kreves = halv uttelling); **retning i t-test-konklusjonen**
      (6.1/6.2); **df** korrekt — kjikvadrat (r−1)(c−1) (6.3), ett gjennomsnitt N−1
      (6.1), regresjon N−k−1 (8.3); **residualleddet** på generell form (8.1);
      **Simpsons paradoks ≠ kjikvadrat** (1.2, feil #13, 0 poeng) — hver har en
      eksplisitt warning-blokk.
- [ ] **Følgefeil straffes ikke:** boka lærer eksplisitt at galt mellomsvar ikke
      trekker videre, og at forståelse gir uttelling selv ved regnefeil (Del 0.2) —
      drill-løsningene poengsetter trinn for seg.
- [ ] **Stata-utskrift:** gjengitt som tekst-tabell (§2d) med egne NYSKREVNE tall der
      den forekommer (8.1, 8.3, 9.1–9.2, 10.7, 10.10); kandidaten kjører enkle
      kommandoer (`sum`/`tabstat`/`ttest`/`reg`) — ingen loops/programmering.
- [ ] **SOS-unikt dekket:** reell sannsynlighetsregning (Del 4: normalfordeling/Z,
      samplingfordeling/CLT, P(x̄ > verdi)); standardfeil/konfidensintervall som egen
      bærebjelke-del (Del 5); Stata hands-on (Del 9) — de tre tingene som skiller
      SOS1120 fra STV1020.
- [ ] **Regime- og etterfølger-håndtering:** boka prioriterer nytt regime (2015→,
      nærmest SOSGEO1120), men beholder ett krysstabell-/gamma-kapittel (7.1) og ett
      kompakt gammelt-regime-design-/etikkapittel (1.4); nedlagt/etterfølger-noten
      formidlet i Del 0 + bokforside; alt som kan ha endret seg med omleggingen merket
      `(verifiser mot SOSGEO1120)`.
- [ ] **Pensumforankring:** INGEN oppdiktede forfattere, sidetall eller sitater;
      «Ringdal-type» og «statistikkorientert bok» brukt kun som regime-etiketter, aldri
      som falske sitater; norske fagtermer presentert som fagets allmenne begrepsapparat.
- [ ] **Utelatt stoff:** ingen tunge sannsynlighetsbevis, fordelingsteori utover
      normalfordelingen, kombinatorikk, maximum likelihood, logistisk regresjon (OLS
      gjennomgående), avansert Stata-programmering, matriseregning (analysen §6).
- [ ] **Kvotesum:** quiz ≥666 og flashcards ≥592 fordelt per kapittel som angitt
      (hardt minstekrav ≥500/≥500); 4 prøver per temadel (Del 1–9 = 36) + 3
      øvingseksamener i flervalg-+-utregning-format (én med Stata-bolk); fasit-
      svaralternativer rebalansert (jevn a/b/c/d — husk options[0] = riktig i staging,
      runtime stokker).
- [ ] **Opphavsrett:** alle oppgaver, scenarier, tallsett, tabeller, Stata-utskrifter
      og modellbesvarelser er NYSKREVNE — mønstre og deloppgaveforløp klones tett, men
      ingen formuleringer, case-navn eller talloppsett fra UiO-sett/veiledninger
      gjenbrukes (bruk NYE analoge caser: sosial bakgrunn/inntekt, oppvekst/kriminalitet,
      helse/levekår, utdanning/kulturbruk, arbeid/fagforening — med egne tall).
- [ ] **Kalibreringssjekk:** boka organisert etter forskningsprosessen (Del 1→9);
      ~60/40 statistikk/drøfting (mer regnetungt enn STV1020); flervalgsdelen dekket av
      quizbanken; ryggrads-temaene (målenivå 2.1, deskriptiv 3.1, tolke koeffisient
      8.1, R² 8.2, KI 5.2, kjikvadrat 6.3) tyngst dekket; gammelt-regime-stoff (gamma
      7.1, design-essay 1.4) og Pearsons r (7.2) holdt kompakte; alle 15 feil fra §5
      dekket i sine hjemkapitler OG samlet i 10.5.
