# Eksamensanalyse: SØK3001 Videregående økonometri (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på det største enkeltarkivet i samlingen: `~/Desktop/Eksamner/NTNU/SOK3001/` (~50 filer, oppgavesett fra ca. 2010 til V2025 pluss H2025-sensorveiledning). **13 sensorveiledninger/løsningsforslag er lest grundig** (V2016, H2016, V2017, H2018, V2019, V2021, H2021, H2022, V2023, H2023, V2024, H2025 samt udaterte marking-criteria-filer), med størst tetthet 2018–2025. De siste ~8 årene med oppgavesett er lest detaljert; eldre sett er skummet for strukturbekreftelse. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller sensorformuleringer. Modellsammenhenger, tallsvar og faglige fakta er gjengitt fritt (uten verkshøyde). Analysen er kvantitativ der kildene tillater det.
>
> **Emnekode-merknad:** Emnet skrives både «SØK3001» (som i arkivet) og «SOK3001» (offisiell kode i dag) — samme emne. Fullt navn: *Videregående økonometri* / *Advanced Econometrics*, **15 studiepoeng**, Institutt for samfunnsøkonomi, NTNU. Emnet er **aktivt** (masternivå). Pensumbok: **Jeffrey M. Wooldridge, *Introductory Econometrics: A Modern Approach*** — sensorveiledningene henviser gjennomgående til Wooldridge-kapitler (kap. 4, 5, 8, 9, 11–13, 15, 19).

---

## 0. Kort om emnet + NTNU/UiO-forskjellen (les dette først)

SØK3001 er **NTNUs gjenlevende aktive økonometri-masteremne**. Der bachelor-økonometrien (SØK1004-nivå) lærer OLS og enkel inferens, tar SØK3001 fatt i **bruddene med Gauss-Markov-forutsetningene** og de metodene som skal til når OLS ikke lenger er forventningsrett eller konsistent: endogenitet, paneldata, tidsserieproblemer og begrensede avhengige variable. Dette er faget der studenten skal lære å *diagnostisere* hva som er galt med en naiv OLS-regresjon og *velge riktig botemiddel*.

### Forhold til andre emner (overlapp og avgrensning)

| Emne | Relasjon til SØK3001 |
|---|---|
| **SØK1004 (NTNU, statistikk/økonometri-grunnlag)** | Byggeklossen under. OLS, forventningsrett/konsistens, hypotesetesting og enkel/multippel regresjon forutsettes kjent. SØK3001 bygger videre og antar dette som bakgrunn — boka bør kryssreferere hit for repetisjon. |
| **ECON4137 / ECON4160 (UiO, «Econometrics»)** | Nærmeste UiO-slektning på masternivå. Samme kjerne: paneldata, IV/2SLS, tidsserie, diskret respons. Nivået og pensumfilosofien er sammenlignbar. |
| **ECON4130 (UiO)** | *Ikke* det rette motstykket — ECON4130 er sannsynlighetsteori og statistisk inferens på et lavere/mer teoretisk trinn. **Delvis** overlapp finnes på asymptotikk (konsistens, store talls lov, sentralgrensesetning) og hypotesetesting, men ECON4130 mangler den anvendte økonometriske verktøykassen (IV, panel, diskret respons) som er selve SØK3001. |
| **SØK3514 (NTNU, «anvendt økonometri», utfaset)** | SØK3001 **absorberer pensum** fra dette. Temaer som kausalitet, difference-in-differences og diskret respons — som historisk hørte til SØK3514 — dukker opp i de nyere SØK3001-settene (f.eks. DiD i V2023, LPM/behandlingseffekt i H2025). |
| **SØK3515 (NTNU, «mikroøkonometri/paneldata», utfaset)** | SØK3001 **absorberer** også dette. Paneldatatunge oppgaver (fixed/random effects, Hausman) er nå en fast bærebjelke i SØK3001. |

**Konsekvens for boka:** SØK3001-boka skal være en anvendt økonometri-bok bygget rundt *forutsetningsbrudd og botemidler*, ikke en ren statistikkbok. Den bør forutsette OLS-grunnlaget (SØK1004), forankres i Wooldridge, og dekke det utvidede pensumet som SØK3514/SØK3515 tidligere hadde. Kryssreferer eksplisitt til **SØK1004** (grunnlag) og **ECON4130** (asymptotikk/inferens).

---

## 1. Eksamensform og utvikling

### Form
- **Skriftlig skoleeksamen, 5 timer (09.00–14.00), karakter A–F, 15 studiepoeng.** Digital (Inspera); håndtegnede figurer/utledninger kan lastes opp som håndskrevne ark.
- **Hjelpemidler:** **kode C** — bestemt formelsamling (Knut Sydsæter, Arne Strøm & Peter Berck: *Matematisk formelsamling for økonomer*) + enkel/godkjent kalkulator (bestemte Casio/Citizen/HP-modeller). Statistiske tabeller (t-, F-, kji-kvadrat) er tilgjengelige som vedlegg (f.eks. «statistical table G.2»).
- **Målform:** oppgavene gis normalt på **både engelsk og norsk (bokmål)** — nyere sett (f.eks. V2025) har oppgaveteksten parallelt på engelsk og bokmål. Emnetittel oppgis som *Advanced Econometrics / Videregående økonometri*.
- **Korona-avvik:** Emnet gikk fra ordinær 5-timers skoleeksamen til **hjemmeeksamen under korona** (V2020 delt i Part 1 / Part 2; H2020; H2021 og H2022 som «Take home exam (40%)» og med gruppe-eksamensvarianter), og har siden gått **tilbake til 5-timers skoleeksamen**. Under hjemmeeksamen var vektingen og formatet annerledes (deleksamener, 40 %-hjemmedel), og sensorveiledningene understreker da at det er *analysen*, ikke ren gjengivelse, som gir uttelling.

### Struktur — stabil trestegs-mal
Den ordinære skoleeksamenen har svært stabilt **tre oppgaver** med oppgitt vekting på oppgavearket. Et typisk mønster:

- **Oppgave 1 (~20 %):** kort begreps-/definisjonsoppgave (5–6 deloppgaver).
- **Oppgave 2 (~40–50 %):** stor anvendt oppgave rundt en utskrift av regresjonsresultater (tabell), oftest IV/2SLS eller paneldata.
- **Oppgave 3 (~30–40 %):** en annen stor anvendt oppgave (paneldata, tidsserie, diskret respons eller kausal design).

### Vektings-/strukturhistorikk (utvalg)

| Sett | Form | Struktur / merknad |
|---|---|---|
| H2015 | Skoleeksamen | 3 oppg. (IV/2SLS + hetero + …) |
| V2016 | Skoleeksamen | 3 oppg. (simultanitet/IV, GLS) |
| H2016 | Skoleeksamen | 3 oppg. |
| V2017 | Skoleeksamen | 3 oppg. (IV/overident., GLS, …) |
| H2017 | Skoleeksamen | 5 timer, kode C; regionsspesifikke faste effekter |
| H2018 | Skoleeksamen | 3 oppg.; panel + LPM/logit/probit |
| V2019 | Skoleeksamen | 3 oppg. |
| **V2020** | **Hjemme (korona)** | Delt Part 1 + Part 2 |
| **H2020** | **Hjemme (korona)** | — |
| V2021 | Individuell | 3 oppg. |
| **H2021** | **Take-home 40 % + gruppe** | Hjemme-/gruppeeksamen |
| V2022 | Individuell | 3 oppg. |
| **H2022** | **Take-home 40 %** | Hjemme-/gruppeeksamen |
| V2023 | Skoleeksamen | 3 oppg.; difference-in-differences, panel |
| H2023 | Skoleeksamen | 3 oppg. |
| V2024 | Skoleeksamen | 3 oppg. **20/40/…**; IV/2SLS (flyseter) |
| H2024 | Skoleeksamen | 3 oppg. **20/40/40**; IV |
| V2025 | Skoleeksamen | 3 oppg. **20/50/30**; serial corr./IV/panel |
| H2025 | Skoleeksamen | 3 oppg. **20/40/40**; IV, LPM/behandlingseffekt |

**Konstanter på tvers av settene:**
1. **Én kort begrepsoppgave** (ca. 20 %) åpner nesten alltid, med 5–6 definisjoner (typisk: seriekorrelert restledd, heteroskedastisk restledd, stasjonær tidsserie, målefeil, strukturform-ligning, konsistent estimator, instrumentrelevans).
2. **Minst én stor oppgave bygget rundt en tabell med regresjonsutskrifter** (flere kolonner: OLS, 2SLS, første-steg/redusert form, hjelperegresjon). Studenten skal *lese og tolke* koeffisienter, standardfeil, t-/F-verdier og residualer — ikke regne alt fra bunnen.
3. **Endogenitet / IV / 2SLS er nesten alltid representert** i en av de store oppgavene.
4. **Aktualitet som innpakning:** flyseter og priselastisitet (V2024), utdanning og lønn med `nearc`-instrumenter (H2025), arbeidstimer/registerdata (V2022) — men den underliggende metoden er alltid pensumet.

---

## 2. Temafrekvens

Score = andel av de undersøkte settene/veiledningene der temaet inngår som deloppgave eller mer (basert på ~13 grundig leste veiledninger/fasiter + de siste ~8 årene med oppgavesett).

| # | Tema | Gjenganger-score | Kommentar |
|---|---|---|---|
| 1 | **Paneldata** (fixed effects, random effects, Hausman-test, LSDV, innen-/mellom-transformasjon) | **~85 %** | Bærebjelke. FE for å fjerne uobservert tidskonstant heterogenitet; RE vs. FE-avveining; Hausman for å velge. Regionsspesifikke/kommunespesifikke faste effekter går igjen (H2017, H2018, V2023, V2025). |
| 2 | **Instrumentvariabler & 2SLS** (endogenitet, svake instrumenter, overidentifikasjon) | **~80 %** | Kjernen i «tabelloppgaven» nesten hvert år. Første-steg/redusert form, F>10-regelen, Hausman/eksogenitetstest via residual, overidentifikasjonstest (Sargan/Hansen). V2016, V2017, V2024, H2024, H2025. |
| 3 | **Heteroskedastisitet & autokorrelasjon** (GLS/FGLS, robuste standardfeil, White-/BP-test) | **~70 %** | Diagnose (test via hjelperegresjon) + botemiddel (robuste SE, eller GLS/FGLS som forventningsrett estimator med lavere varians). Seriekorrelasjon er fast begrep i oppgave 1. |
| 4 | **OLS-egenskaper & asymptotikk** (forventningsretthet, konsistens, Gauss-Markov, effisiens) | **~65 %** | Grunnmuren som alt annet måles mot. Kreves for å begrunne *hvorfor* IV/GLS/FE trengs (når faller OLS-egenskapene?). Konsistent estimator er fast begreps-punkt. |
| 5 | **Diskret respons & begrensede avhengige variable** (LPM, logit, probit, Tobit, seleksjon, marginaleffekter) | **~50 %** | LPM som utgangspunkt, logit/probit med marginaleffekt-tolkning; Tobit/sensurering og seleksjon (Heckman) i enkelte sett. H2018, H2025 (LPM/behandlingseffekt), marking-criteria-filene. |

**Sekundære, men tilbakevendende temaer:**
- **Kausal identifikasjon / difference-in-differences** (V2023) — importert fra utfaset SØK3514-pensum.
- **Tidsserie** utover stasjonaritet: dynamiske modeller, laggede variable, enhetsrot/ikke-stasjonaritet.
- **Målefeil** (measurement error) — fast begreps-punkt, kobles til skjevhet i OLS (attenuation bias).
- **Simultane ligningsmodeller** (tilbud/etterspørsel, identifikasjon) — eldre sett (V2016) og grunnlaget for IV-motivasjonen.

**Viktigste funn:**
1. **Faget ER diagnose + botemiddel.** Nesten hver stor oppgave følger mønsteret: *her er en regresjon → hva er galt med OLS her (endogenitet/hetero/seriekorr./uobservert heterogenitet)? → hvilken metode fikser det, og hvorfor er den estimatoren bedre?*
2. **IV/2SLS og paneldata deler førsteplassen** og opptrer ofte *sammen* (FE for tidskonstant heterogenitet, IV for gjenværende endogenitet).
3. **Tabell-lesing er en egen ferdighet.** Studenten må kunne plukke ut priselastisitet fra en log-log-koeffisient, lese første-steg F-verdi for instrumentstyrke, og bruke t-verdien på residualen for eksogenitetstest — direkte fra utskriften.
4. **Begrepsoppgaven er «gratis» poeng** hvis definisjonene sitter presist (med formel), og trekker fra en fast liste.

---

## 3. Oppgavetype-katalog

### A. Begrepsforklaringer (oppgave 1, ~20 %)
- **Krav:** Presis definisjon + matematisk uttrykk der naturlig + kort intuisjon. Sensor vil ha poengterte svar.
- **Gjengangerbegreper:** seriekorrelert restledd (`cov(uₜ,uₛ|x) ≠ 0, s ≠ t`), heteroskedastisk restledd (`Var(uᵢ|xᵢ) = σᵢ²`), stasjonær tidsserie (konstant forventning/varians, kovarians avhenger kun av tidsavstand), målefeil, strukturform-ligning (atferdsligning fra økonomisk teori med kausal tolkning), konsistent estimator, instrumentrelevans/-eksogenitet.
- **Omskrevet eksempel:** «Forklar kort hva som menes med et heteroskedastisk restledd, og hvorfor det er et problem for vanlige OLS-standardfeil.»

### B. IV / 2SLS med tabell (kjernesjangeren i oppgave 2)
- **Metode (fasitenes standard):** (1) Argumenter for at forklaringsvariabelen er **endogen** (korrelert med restleddet — utelatt variabel, simultanitet eller målefeil). (2) Foreslå/vurder **instrument**: må være *relevant* (korrelert med den endogene variabelen) og *eksogent/valid* (ukorrelert med restleddet). (3) **Første steg:** regresser den endogene variabelen på alle eksogene variable + instrument(er); test relevans med F-test (tommelfingerregel F>10; med ett instrument t>3,2). (4) **Andre steg:** erstatt endogen variabel med predikert verdi. (5) **Eksogenitetstest (Hausman/regresjonsbasert):** utvid strukturligningen med første-stegs-residual; signifikant koeffisient ⇒ forkast eksogenitet. (6) **Overidentifikasjon:** kun meningsfull med *flere* instrumenter enn endogene variable; test at instrumentene er felles valide.
- **Fasit-eksempel (omskrevet):** Log-log-etterspørsel for flyseter — OLS gir priselastisitet ≈ −0,39, 2SLS med markedskonsentrasjon som instrument gir ≈ −1,17; første-stegs t-verdi ≈ 6,3 (ikke svakt instrument); eksogenitetstest t ≈ 2,2 ⇒ pris er endogen; akkurat identifisert ⇒ ingen overidentifikasjonstest (V2024).
- **Omskrevet eksempel:** «Tabellen viser OLS i kolonne (1) og 2SLS i kolonne (2). Forklar hvorfor prisvariabelen kan være endogen, hvordan kolonne (2) er estimert, og test om instrumentet er svakt.»

### C. Paneldata: fixed vs. random effects, Hausman
- **Krav:** Skriv opp panelmodellen `yᵢₜ = β·xᵢₜ + aᵢ + uᵢₜ` med uobservert individ-/regionspesifikk effekt `aᵢ`. Forklar hvordan **fixed effects** (innen-transformasjon / LSDV med dummyer) fjerner `aᵢ` og dermed skjevhet fra tidskonstant utelatt heterogenitet — på bekostning av at tidskonstante forklaringsvariable ikke kan estimeres. Forklar **random effects** (GLS, mer effisient hvis `aᵢ` er ukorrelert med `xᵢₜ`). **Hausman-testen** velger mellom dem: forkastes ⇒ FE. Drøft fordeler/ulemper ved paneldata (kontroll for uobservert heterogenitet, dynamikk; men krav om variasjon over tid, mulig autokorrelasjon).
- **Omskrevet eksempel:** «I kolonne (3) brukes paneldata for de 200 kommunene fra 2010 og 2012 til å estimere en modell med faste effekter. Forklar hva de faste effektene fanger opp, og presenter fordeler og ulemper ved paneldata.»

### D. Heteroskedastisitet / autokorrelasjon: diagnose og botemiddel
- **Krav:** (1) *Konsekvens:* OLS forblir forventningsrett/konsistent, men er ikke lenger effisient (ikke BLUE), og vanlige standardfeil er feil ⇒ ugyldig inferens. (2) *Test:* hjelperegresjon av kvadrerte residualer (Breusch–Pagan/White) eller for autokorrelasjon (Durbin–Watson / Breusch–Godfrey). (3) *Botemiddel:* robuste (heteroskedastisitets-/autokorrelasjonsrobuste) standardfeil, eller **GLS/FGLS** som gir en forventningsrett estimator med lavere varians når variansstrukturen kjennes/estimeres.
- **Omskrevet eksempel:** «Forklar hvordan du vil teste for heteroskedastisitet, og hvilke to strategier du har for å håndtere det. Hvilken foretrekker du, og hvorfor?»

### E. OLS-egenskaper, Gauss-Markov og asymptotikk (begrunnelsesoppgaver)
- **Krav:** Angi Gauss-Markov-forutsetningene og hva som skjer når de brytes; skille **forventningsretthet** (endelig utvalg) fra **konsistens** (asymptotisk); vise/forklare når OLS blir forventningsskjev men konsistent, eller inkonsistent (endogenitet). Kobles til hvorfor IV/FE/GLS trengs.
- **Omskrevet eksempel:** «Under hvilke forutsetninger er OLS-estimatoren forventningsrett? Hvilken av disse brytes ved endogenitet, og hva blir konsekvensen for konsistensen?»

### F. Diskret respons og begrensede variable
- **Krav:** For binær respons: **LPM** (enkel tolkning, men predikerte sannsynligheter utenfor [0,1] og innebygd heteroskedastisitet), **logit/probit** (predikerer i [0,1]; koeffisienter må gjøres om til **marginaleffekter** for tolkning). For sensurerte/trunkerte data: **Tobit**. For utvalgsseleksjon: seleksjonsmodell (Heckman) med tosteg. Tolkning av behandlingseffekt (δ) i LPM.
- **Omskrevet eksempel:** «Modellen i kolonne (2) er en lineær sannsynlighetsmodell. Tolk behandlingskoeffisienten, og nevn to svakheter ved LPM sammenlignet med en logit-modell.»

### G. Kausal design / difference-in-differences
- **Krav:** Sette opp DiD med behandlings- og tidsdummy og interaksjonsledd; tolke interaksjonskoeffisienten som behandlingseffekt; drøfte forutsetningen om parallelle trender. Kobles til panel/FE.
- **Omskrevet eksempel:** «Forklar hvordan en difference-in-differences-tilnærming kan brukes til å identifisere effekten av tiltaket, og hvilken sentral forutsetning identifikasjonen hviler på.»

### H. Tidsserie: stasjonaritet og dynamikk
- **Krav:** Definer (svak) stasjonaritet; forklar konsekvenser av ikke-stasjonaritet (spuriøs regresjon); laggede variable og seriekorrelasjon.
- **Omskrevet eksempel:** «Forklar hva som menes med en stasjonær tidsserie, og hvorfor ikke-stasjonaritet kan gi misvisende regresjonsresultater.»

---

## 4. Sensorens krav

### Faste metaregler (gjentas på tvers av veiledningene)
1. **Diagnose før botemiddel.** Uttelling gis for å identifisere *hvilken* forutsetning som brytes og *hvorfor* det gjør OLS uegnet — ikke bare for å nevne en metode.
2. **Les tabellen riktig.** Studenten skal hente ut riktige tall (elastisitet, F-verdi, t-verdi på residual) fra regresjonsutskriften og *bruke* dem i en test/tolkning.
3. **Tolk koeffisienter økonomisk.** Et estimat er ikke ferdig før det er oversatt til innhold («en priselastisitet på −1,17 betyr at …»).
4. **Test-prosedyre skal beskrives korrekt:** nullhypotese, teststatistikk, kritisk verdi/beslutningsregel, konklusjon. Gjelder relevanstest (F>10), eksogenitetstest (residual-t) og overidentifikasjonstest.
5. **Presise definisjoner** i begrepsoppgaven — helst med formel.
6. **Regresjoner som kun brukes til å beregne en teststatistikk** (hjelperegresjon for hetero-/seriekorr.-test) skal ikke forveksles med selve den estimerte økonometriske modellen — sensor påpeker dette eksplisitt (H2025).

### Hva som skiller karakternivåene
- **Bunn (E–D):** riktige definisjoner, kjenner igjen at OLS er problematisk, nevner riktig metode (IV/FE/GLS) uten full begrunnelse.
- **Midt (C):** korrekt oppsett og gjennomføring av 2SLS/FE/GLS, riktig lesning av tabellen, korrekt relevanstest, riktig fortegn/tolkning av hovedkoeffisienten.
- **Topp (A/B):** behersker **hele testbatteriet** (relevans + eksogenitet + overidentifikasjon, og vet *når* hver er anvendbar — f.eks. at overidentifikasjonstest er meningsløs ved akkurat identifikasjon); skiller forventningsretthet fra konsistens; drøfter FE vs. RE via Hausman med avveiningen om `aᵢ`-korrelasjon; gjør logit/probit-koeffisienter om til marginaleffekter; ser svakhetene ved eget instrument/design (parallelle trender, svakt instrument).

---

## 5. Typiske feil

1. **Nevne metode uten diagnose:** hoppe rett til «bruk 2SLS» uten å argumentere for at variabelen faktisk er endogen.
2. **Teste for overidentifikasjon ved akkurat identifikasjon** — meningsløst når antall instrumenter = antall endogene variable (V2024 er bygget for å avsløre dette).
3. **Blande forventningsretthet og konsistens** — påstå at et brudd som kun rammer effisiens (hetero) også ødelegger forventningsretthet, eller motsatt.
4. **Feil håndtering av hetero/seriekorr.:** tro at robuste standardfeil «fikser» skjevhet (de fikser bare inferensen), eller kaste OLS helt når robuste SE holder.
5. **Ikke gjøre logit/probit-koeffisienter om til marginaleffekter** før tolkning — råkoeffisienten er ikke effekten på sannsynligheten.
6. **Feil om instrumentkrav:** forveksle relevans (korr. med endogen variabel) og eksogenitet (ukorr. med restledd), eller påstå at et svakt instrument bare mangler eksogenitet.
7. **FE vs. RE-forvirring:** bruke RE når `aᵢ` er korrelert med regressorene (skjevt), eller ikke forstå at FE ikke kan estimere tidskonstante variable.
8. **Tolke tabellen feil:** lese standardfeil som t-verdi, glemme å dele koeffisient/SE, eller bruke feil kritisk verdi (1,96 vs. tabellverdi).
9. **Forveksle hjelperegresjon med den økonometriske modellen** (H2025 påpeker dette).
10. **Glemme parallelle-trender-forutsetningen** i DiD, eller behandle interaksjonsleddet som en vanlig koeffisient uten kausal tolkning.
11. **Overse LPM-svakhetene** (sannsynligheter utenfor [0,1], innebygd heteroskedastisitet).

---

## 6. Modell- og notasjonsapparat

Notasjonen følger **Wooldridge** tett; boka bør bruke samme.

### Notasjonskonvensjoner
- **Regresjon:** `yᵢ = β₀ + β₁xᵢ + uᵢ` (tverrsnitt), `yₜ = β₀ + β₁xₜ + uₜ` (tidsserie), `yᵢₜ = β·xᵢₜ + aᵢ + uᵢₜ` (panel, `aᵢ` = uobservert effekt).
- **Restledd/varians:** heteroskedastisitet `Var(uᵢ|xᵢ) = σᵢ²`; seriekorrelasjon `cov(uₜ,uₛ|x) ≠ 0`.
- **IV:** endogen variabel oftest kalt `x` (eller f.eks. `lfare`), instrument(er) `z` / `z₁,z₂` (eller navngitt, f.eks. `concen`, `nearc4`, `nearc2`); struktur- vs. redusert form; første steg / andre steg.
- **Tester:** F-verdi (instrumentrelevans, F>10), t-verdi på første-stegs-residual (eksogenitet), Hausman (FE vs. RE og eksogenitet), Breusch–Pagan/White (hetero), Durbin–Watson/Breusch–Godfrey (autokorr.), overidentifikasjon (Sargan/Hansen).
- **Diskret respons:** LPM, logit/probit med marginaleffekter; Tobit for sensurering.

### Må beherskes aktivt (regnes, tolkes og begrunnes)
1. **OLS-egenskaper:** Gauss-Markov, BLUE, forventningsretthet vs. konsistens, effisiens.
2. **Endogenitet & IV/2SLS:** kilder til endogenitet (utelatt variabel, simultanitet, målefeil); instrumentkrav (relevans + eksogenitet); to-stegs prosedyre; relevans-, eksogenitets- og overidentifikasjonstest.
3. **Paneldata:** FE (innen-transformasjon/LSDV), RE (GLS), Hausman; fordeler/ulemper.
4. **Hetero & autokorrelasjon:** konsekvens, test via hjelperegresjon, robuste SE, GLS/FGLS.
5. **Diskret/begrenset respons:** LPM, logit/probit + marginaleffekter, Tobit, seleksjon.
6. **Tidsserie:** stasjonaritet, dynamiske modeller, spuriøs regresjon.
7. **Kausal design:** difference-in-differences, behandlingseffekter, parallelle trender.

### Matematisk/statistisk verktøykasse (forutsettes — formelsamling tillatt)
Forventning/varians/kovarians-regning, betinget forventning, matriseregning for OLS (`β̂ = (X'X)⁻¹X'y`), asymptotikk (store talls lov, sentralgrensesetning, plim), derivasjon (for elastisiteter/marginaleffekter), hypotesetesting med t-/F-/kji-kvadrat-fordelinger. Dette forutsetter **SØK1004-grunnlaget**.

### Pensumbok og kildeankere
- **Wooldridge, *Introductory Econometrics: A Modern Approach*.** Sensorveiledningene henviser til: kap. 4–5 (inferens/asymptotikk), kap. 8 (heteroskedastisitet), kap. 9 (målefeil/spesifikasjon), kap. 11–13 (tidsserie/paneldata), kap. 15 (IV/2SLS), kap. 19 (empirisk prosjekt/gjennomføring).
- Statistiske tabeller (t, F, kji-kvadrat) i vedlegg (f.eks. tabell G.2).

---

## 7. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **IV / 2SLS med tabell** — endogenitetsargument, to-stegs prosedyre, relevans-/eksogenitets-/overidentifikasjonstest, elastisitetstolkning. ~80 %, nesten alltid en av de store oppgavene.
2. **Paneldata: FE vs. RE + Hausman** — hva faste effekter fanger, avveining, fordeler/ulemper. ~85 %.
3. **Heteroskedastisitet & autokorrelasjon** — konsekvens, test, robuste SE vs. GLS/FGLS. ~70 %.
4. **OLS-egenskaper & asymptotikk** — Gauss-Markov, forventningsretthet vs. konsistens (begrunner alt annet). ~65 %.

### Nivå 2 — må kunne (gir 20–50 % når de kommer)
5. **Diskret respons & begrensede variable** — LPM/logit/probit + marginaleffekter, Tobit, seleksjon. ~50 %.
6. **Begrepsrepertoaret** (ca. 8–10 gjengangere) — presise definisjoner med formel; sikre 20 %-oppgaven.
7. **Tabell-lesing** som tverrgående ferdighet — plukke og bruke koeffisienter/SE/t-/F-verdier korrekt.

### Nivå 3 — bør kjenne godt (roterer inn, importert fra SØK3514/3515)
8. **Difference-in-differences / kausal identifikasjon** — interaksjonsledd, parallelle trender.
9. **Tidsserie** utover stasjonaritet — dynamikk, ikke-stasjonaritet, spuriøs regresjon.
10. **Simultane ligningsmodeller** — identifikasjon, motivasjon for IV.

### Prognose for neste eksamen
Med høy sannsynlighet **tre oppgaver** (~20 % begreper + to store anvendte oppgaver på ~40–50 % og ~30–40 %):

- **Oppgave 1 (~20 %):** 5–6 definisjoner fra fast liste (seriekorrelasjon, heteroskedastisitet, stasjonaritet, målefeil, strukturform, konsistens, instrumentrelevans).
- **Oppgave 2 (~40–50 %):** stor tabelloppgave, mest sannsynlig **IV/2SLS** (endogenitet, første steg, svake instrumenter, eksogenitets-/overidentifikasjonstest, elastisitetstolkning) — evt. kombinert med paneldata.
- **Oppgave 3 (~30–40 %):** **paneldata (FE/RE/Hausman)** eller **diskret respons (LPM/logit/probit)** eller et **kausalt design (DiD)**, gjerne med hetero-/autokorrelasjonsdiagnostikk.

Boka bør derfor bygges rundt **fire søyler** — (1) OLS-grunnlaget og når det svikter, (2) endogenitet & IV/2SLS, (3) paneldata, (4) hetero/autokorrelasjon — med to påbyggingskapitler om (5) diskret/begrenset respons og (6) kausal identifikasjon/tidsserie. Gjennomgående metodikk: *lære studenten å lese en regresjonstabell, diagnostisere forutsetningsbruddet, og velge + begrunne riktig botemiddel.* Forankres i Wooldridge, forutsetter SØK1004, kryssreferer ECON4130 for asymptotikk/inferens.

---

## 8. Kildeliste

Alle filer ligger i `/Users/danielandreasaubert/Desktop/Eksamner/NTNU/SOK3001/` (~50 filer — det største arkivet i samlingen).

**Sensorveiledninger / løsningsforslag lest grundig (13):** `Sensorveiledning SØK 3001 V16`, `SØK3001 H16-sensorveiledning`, `Sensorveiledning_SØK 3001-V17`, `Exam SØK3001H18_solutions` (H2018), `Sensorveiledning SØK3001 Vår 2021`, `SØK3001 individual exam H2021 Assessment guidelines`, `Sensorveiledning_SØK 3001-H22_engelsk`, `Exam SØK3001 Spring 2023_assessment guidelines`, `Eksamen SØK3001 H2023_ass_guid`, `Exam SØK3001 V24-assessment guidelines`, `SØK3001 H25 sensorveiledning`, samt de udaterte `SØK3001Exam_solutions_marking_criteria` og `SØK3001 sensorveiledning` / `Sensorveiledning SØK3001`. Tetthet 2018–2025.

**Oppgavesett lest grundig (siste ~8 år):** `SØK3001H-17`, `SØK3001-H18`, `SØK3001V-19`, `SØK3001_Part1_V20` + `SØK3001_Part2_V20`, `SOK3001_Exam_h20…` (H2020), `SØK3001 H21 40 % home exam`, `SØK3001 V22 individuell`, `EO søk3001-H2022-Take home exam (40%)`, `SØK3001 H22`, `SØK3001 H23`, `Exam SØK3001 V24` (+ `SØK3001 H24`), `SØK3001 V25`, `SØK3001 H25`.

**Oppgavesett skummet (eldre, for strukturbekreftelse):** `SØK3001V-10`, `H-10`, `V-11`, `V-12`, `V-13`/`H-13`(+vedlegg), `V-14`/`H-14`, `V-15`, `V-16`/`H-16`, `SØK3001V-17`, `V-2018`, `V-19`, samt hjemme-/gruppeeksamensfilene (`…take home exam-group exam…`, `Sensurveiledning …Blackboard Information…`).

**Hjelpemiddel/kontekst:** oppgavesettene oppgir 5 timer (09.00–14.00), hjelpemiddelkode C (Sydsæter/Strøm/Berck matematisk formelsamling + bestemte kalkulatormodeller), statistiske tabeller som vedlegg, og pensumbok Wooldridge (kapittelhenvisninger i veiledningene).

**Merknader om kildene:**
- Flere eldre/større filer er bilde-/skanningsbaserte (bl.a. `SensorveiledningSØK3001_v19` ga nær null tekst med `pdftotext`; V2019-profilen er derfor bekreftet via oppgavesettet og nabo-veiledningene). Der tekstuttrekk sviktet, er temaprofilen utledet av oppgavesett + tilstøtende sensorveiledninger.
- Korona-årene (V2020–H2022) hadde avvikende format (hjemme-/gruppeeksamen, 40 %-deler); disse er brukt til temafrekvens, men strukturprognosen bygger på den gjenopptatte 5-timers skoleeksamenen (2023–2025).
- **Opphavsrett:** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller sensorformuleringer er gjengitt ordrett. Modellsammenhengene og tallsvarene er faglige fakta uten verkshøyde.
