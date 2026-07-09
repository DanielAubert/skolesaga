# Bokskjelett: SØK3001 Videregående økonometri — eksamensrettet lærebok

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


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (~50-fils-arkivet H2010–H2025; 13 sensorveiledninger lest
> grundig, siste ~8 år oppgaver grundig, eldre skummet). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Emnet har et markant
> **tolknings-/diagnoselag** (lese en regresjonstabell, diagnostisere hvilket
> forutsetningsbrudd som foreligger, velge og begrunne botemiddel) — dette
> håndteres innenfor regnefag-malen med rikelig «tolk tabellen»- og «diagnose før
> botemiddel»-drill, ikke som egen drøftingsdel. Alle mønstereksempler i
> skjelettet er omskrivninger; forfatteren skal variere dem videre (egne tall,
> egne kontekster), aldri kopiere ordrett fra eksamensarkivet.
>
> **Emnekode-merknad:** Emnet skrives både «SØK3001» (arkivet) og «SOK3001»
> (offisiell kode i dag) — samme emne. Kurs-id i plattformen: `sok3001`.
> Fullt navn: *Videregående økonometri / Advanced Econometrics*, 15 studiepoeng,
> NTNU. **Emnet er aktivt (masternivå)** og har **absorbert pensum fra utfasede
> SØK3514 (anvendt økonometri) og SØK3515 (mikroøkonometri/paneldata)** —
> kausalitet, difference-in-differences, diskret respons og paneldata er derfor
> fast kjernestoff. Pensumbok: **Wooldridge, *Introductory Econometrics: A Modern
> Approach***; boka følger Wooldridge-notasjonen.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok3001` |
| Tittel | **SØK3001 Videregående økonometri** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (utledning + tabelltolkning + diagnose→botemiddel) |
| Antall kapitler | **28** (1 eksamenskart + 22 tema + 5 eksamenstrening) |
| Estimert totaltid | **2 010 min ≈ 33,5 timer** |
| Quiz totalt | **605** (krav ≥500) |
| Flashcards totalt | **560** (krav ≥500) |

**Pitch (ett avsnitt):** SØK3001-eksamen er **diagnose + botemiddel**, år etter år:
her er en OLS-regresjon → hva er galt med den (endogenitet / heteroskedastisitet /
seriekorrelasjon / uobservert heterogenitet) → hvilken metode fikser det, og
*hvorfor* er den estimatoren bedre? Den ordinære 5-timers skoleeksamenen har en
svært stabil trestegs-mal: **én kort begrepsoppgave (~20 %)** med 5–6 definisjoner
fra en fast liste, deretter **to store anvendte oppgaver (~40–50 % og ~30–40 %)**
bygget rundt en utskrift med regresjonsresultater (OLS, 2SLS, første steg/redusert
form, hjelperegresjon) som studenten skal *lese og bruke*. Boka er kalibrert mot
nettopp dette: den bygger på **fire søyler** — (1) OLS-grunnlaget og når det svikter
(Gauss-Markov, forventningsrett vs. konsistens), (2) endogenitet & IV/2SLS med hele
testbatteriet (relevans F>10, eksogenitet via residual, overidentifikasjon), (3)
paneldata (FE/RE, Hausman), (4) heteroskedastisitet & autokorrelasjon (diagnose,
robuste SE, GLS/FGLS) — med to påbyggingsdeler om (5) diskret/begrenset respons
(LPM, logit/probit + marginaleffekter, Tobit, seleksjon) og (6) kausal design &
tidsserie (DiD, parallelle trender, stasjonaritet). Den lærer studenten å lese en
regresjonstabell, diagnostisere forutsetningsbruddet, og velge + begrunne riktig
botemiddel — presis definisjon med formel i begrepsoppgaven, riktig testprosedyre
(nullhypotese → observator → kritisk verdi → konklusjon), og økonomisk tolkning av
hver koeffisient.

**Kritisk organiserende akse (gjelder HELE boka):** *diagnose før botemiddel.*
Hvert metodekapittel svarer på: (i) hvilken Gauss-Markov-forutsetning brytes her,
(ii) hva blir konsekvensen (forventningsskjevhet/inkonsistens vs. bare tap av
effisiens/feil SE), (iii) hvilket botemiddel gjenoppretter ønsket egenskap, og
(iv) hva koster botemiddelet. Uttelling gis for å *identifisere* bruddet og
begrunne valget — aldri for å nevne en metode uten diagnose.

**Kritisk notasjonsregel (gjelder HELE boka, følger Wooldridge):**
- **Modeller:** tverrsnitt $y_i = \beta_0 + \beta_1 x_{i1} + \dots + \beta_k x_{ik} + u_i$;
  tidsserie $y_t = \beta_0 + \beta_1 x_t + u_t$; **panel**
  $y_{it} = \beta_1 x_{it} + a_i + u_{it}$ med $a_i$ = uobservert, tidskonstant
  individ-/regionspesifikk effekt. Estimater med hatt ($\hat{\beta}$), sanne
  parametre uten. Matriseform ved behov: $\hat{\beta} = (X'X)^{-1}X'y$.
- **Restledd/varians:** heteroskedastisitet $\operatorname{Var}(u_i\mid x_i)=\sigma_i^2$;
  seriekorrelasjon $\operatorname{cov}(u_t,u_s\mid x)\neq 0,\; s\neq t$.
- **IV/2SLS:** endogen variabel $x$ (eller navngitt, f.eks. $\text{lfare}$, $\text{educ}$),
  instrument(er) $z$ / $z_1,z_2$ (f.eks. $\text{concen}$, $\text{nearc4}$);
  strukturform vs. redusert form; første steg / andre steg;
  $\hat{\beta}_{IV}=\operatorname{cov}(z,y)/\operatorname{cov}(z,x)$ (akkurat identifisert).
- **Tester:** første-stegs $F$ for instrumentrelevans (tommelfinger $F>10$; ett
  instrument $t>3{,}2$); $t$ på første-stegs-residual for eksogenitet
  (regresjonsbasert Hausman); Hausman for FE vs. RE; Breusch–Pagan/White (hetero);
  Durbin–Watson / Breusch–Godfrey (autokorrelasjon); Sargan/Hansen
  (overidentifikasjon). Kritiske verdier fra **vedlagte $t$-, $F$- og
  $\chi^2$-tabeller** (kode C: Sydsæter/Strøm/Berck matematisk formelsamling +
  godkjent kalkulator).
- **Diskret respons:** LPM, logit/probit med **marginaleffekter** (rå-koeffisienten
  er ikke effekten på sannsynligheten); Tobit for sensurering; Heckman-seleksjon.
- **Engelsk fagterminologi:** oppgaveteksten gis parallelt på engelsk og bokmål.
  Hvert nytt fagbegrep oppgis med **engelsk term i parentes ved første forekomst**
  («uobservert heterogenitet (unobserved heterogeneity)»), og `definition`-blokkene
  skrives tospråklig (norsk forklaring + engelsk stikkord).
- **Forventningsrett ≠ konsistent:** dette skillet er gjennomgående og skal aldri
  slurves — forventningsretthet er en endelig-utvalgs-egenskap, konsistens er
  asymptotisk; et brudd som kun rammer effisiens (hetero) ødelegger *ingen* av dem,
  mens endogenitet ødelegger *begge*.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
Boka speiler eksamensmalen: OLS-grunnlaget (som alt måles mot) først, deretter de
to tunge søylene IV/2SLS og paneldata (som deler førsteplass og ofte opptrer
sammen), så hetero/autokorrelasjon, og til slutt påbyggingsstoffet diskret respons
og kausal design/tidsserie.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | OLS-egenskaper, Gauss-Markov og asymptotikk | 4 | **OLS-egenskaper ~65 %** — grunnmuren som begrunner alt annet (hvorfor faller OLS?); forventningsrett vs. konsistens er fast begreps-punkt og A/B-markør → nivå 1 «perfekt» → 3 teori + 1 drill. |
| 2 | Endogenitet, instrumentvariabler og 2SLS | 5 | **IV/2SLS ~80 %** — kjernen i den store tabelloppgaven nesten hvert år; hele testbatteriet (relevans/eksogenitet/overidentifikasjon) er selve A/B-skillet → nivå 1 «perfekt» → 4 teori + 1 drill. |
| 3 | Paneldata: faste og tilfeldige effekter | 4 | **Paneldata ~85 %** — mest frekvente enkelttema, bærebjelke; FE/RE + Hausman, absorbert fra SØK3515 → nivå 1 «perfekt» → 3 teori + 1 drill. |
| 4 | Heteroskedastisitet og autokorrelasjon | 3 | **~70 %** — fast begreps-punkt (seriekorrelasjon) + diagnose/botemiddel-oppgave; robuste SE vs. GLS/FGLS → nivå 1 «perfekt» → 2 teori + 1 drill. |
| 5 | Diskret og begrenset respons | 4 | Diskret respons **~50 %** — LPM/logit/probit + marginaleffekter (H2018, H2025), Tobit/seleksjon i enkelte sett, absorbert fra SØK3514 → nivå 2 «kunne» → 4 kapitler. |
| 6 | Kausal design og tidsserie | 4 | DiD **sekundært, voksende** (V2023, absorbert SØK3514); tidsserie/stasjonaritet + simultane ligninger «bør kjenne» → nivå 3 → 4 kapitler, mindre viktig stoff merket «bør kjenne til». |
| 7 | Eksamenstrening | 3 | Begrepsdrill + tabelltolknings-drill + 2 komplette øvingseksamener (trestegs-malen). |

> **Kapitteltelling per del:** Del 0 (1) + Del 1 (4) + Del 2 (5) + Del 3 (4) +
> Del 4 (3) + Del 5 (4) + Del 6 (4) + Del 7 (3) = **28 kapitler**. Prøvekapitler
> (7 stk, ett per temadel 1–6 + øvingseksamen-samlingen regnes under Del 7)
> kommer i tillegg og telles ikke som innholdskapitler.

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | OLS-egenskaper, Gauss-Markov og asymptotikk |
| 2 | Endogenitet, instrumentvariabler og 2SLS |
| 3 | Paneldata: faste og tilfeldige effekter |
| 4 | Heteroskedastisitet og autokorrelasjon |
| 5 | Diskret og begrenset respons |
| 6 | Kausal design og tidsserie |
| 7 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger sjangerkapitler i siste del. Her ligger drillkapitlene (1.4, 2.5,
   3.4, 4.3) inne i temadelene sine, fordi sjangrene de driller (OLS-egenskaper,
   IV-tabelloppgaven, panel-oppgaven, hetero/autokorr-diagnosen) er 65–85 %-
   gjengangere som må sitte umiddelbart etter teorien. Del 7 beholder begrepsdrill,
   den tverrgående tabelltolknings-drillen og øvingseksamenene (samme grep som
   econ3150).
2. **Begrepsoppgaven (~20 % hvert sett) får et eget drillkapittel i Del 7 (7.1)**
   utover behandlingen av hvert enkelt begrep i temakapitlene, fordi den er
   «gratis» faste poeng når definisjonene sitter presist med formel, trekker fra en
   fast liste, og har egen sjangerlogikk (kort, presist, formel der naturlig).
3. **Tabell-lesing som tverrgående ferdighet får eget drillkapittel (7.2):**
   plukke ut priselastisitet fra en log-log-koeffisient, lese første-stegs F for
   instrumentstyrke, bruke $t$ på residual for eksogenitetstest — direkte fra
   utskriften. Dette er en egen ferdighet sensor tester i alle store oppgaver.
4. **Diskret respons (Del 5) og kausal design/tidsserie (Del 6) er påbyggingsstoff**
   plassert ETTER de fire kjernesøylene og merket etter prioritet: diskret respons
   «kunne» (~50 %), DiD/tidsserie/simultane ligninger «bør kjenne til». Simultane
   ligninger (V2016, eldre) behandles kompakt som motivasjonen for IV, ikke som
   selvstendig tung del.
5. **2 øvingseksamener** (mot DNA-ens «2–4») fordi eksamensmalen er svært stabil
   (trestegs-mal 2023–2025): én speiler 20/50/30-varianten (V2025), én speiler
   20/40/40-varianten (H2024/H2025). Korona-årenes hjemme-/gruppeeksamensformat
   (V2020–H2022) speiles IKKE — boka bygger på den gjenopptatte 5-timers
   skoleeksamenen.

**Arbeidsdeling mot andre bygde/skjelett-bøker (viktig — unngå overlapp):**
- **SØK1004 Statistikk for økonomer (NTNU, skjelett):** grunnmuren UNDER dette
  emnet. OLS-idé, standardfeil, KI, hypotesetest, enkel/multippel regresjon,
  normal-/t-/F-tabeller hører hjemme der. SØK3001-boka **forutsetter** dette og
  skal IKKE reprodusere grunnleggende hypotesetest-maskineri eller
  sannsynlighetsregning — kun kort repetere det som trengs for asymptotikk (store
  talls lov, sentralgrensesetning, plim) i kap. 1.3, og ellers henvise.
- **ECON3150 Introductory Econometrics (UiO, skjelett):** nærmeste innholdsmessige
  slektning (OLS-tolkning, OVB, IV/Wald, DiD, LPM). Overlappende *grunnstoff*
  (koeffisienttolkning, funksjonsform, enkel IV-intuisjon) forutsettes på
  bachelornivå; SØK3001-boka løfter til **masternivået**: hele IV-testbatteriet
  med overidentifikasjon, FE/RE + Hausman formelt, GLS/FGLS-utledning,
  Tobit/seleksjon — stoff ECON3150 bevisst utelater. Ikke dupliser ECON3150s
  «assosiert med … alt annet likt»-drill; her er tolkningen underordnet diagnosen.
- **ECON2130 Statistikk 1 (UiO, skjelett) / SØK1004:** asymptotikk-forkunnskapen
  (konsistens, LLN, CLT) hentes herfra; kap. 1.3 repeterer kompakt, dupliserer
  ikke.
- **SOK1002 Mikroøkonomi / SØK1011 Markeder (NTNU, skjelett):** ingen reell
  overlapp; simultane tilbud/etterspørsel-ligninger (kap. 6.4, IV-motivasjon)
  bruker mikro-intuisjon men lærer den ikke opp.
- **Konsekvens:** SØK3001-boka starter der SØK1004 slutter (multippel OLS +
  inferens antas kjent), og er en *anvendt økonometri-bok om forutsetningsbrudd og
  botemidler* — ikke en statistikk-/sannsynlighetsbok og ikke en
  OLS-tolkningsbok.

**Kryssbok-lenker (forkunnskaper):** SØK1004 (`sok1004`) er den naturlige
forkunnskapen (OLS, SE, KI, hypotesetest, tabeller); ECON2130 (`econ2130`) for
asymptotikk; ECON3150 (`econ3150`) for OLS-tolkning/OVB/enkel IV. **VIKTIG: ingen
av disse er bygget (live) i dag — alle er på skjelett-stadiet.** Lenk KUN til
kapitler du har verifisert finnes i `_registry.json`/prod-server på
byggetidspunktet. Er forkunnskapsboka ikke bygget når SØK3001 bygges, skal
Forkunnskaper-blokken beskrive forutsetningen i klartekst UTEN død lenke (jf.
Leserkravene i README). Live-bøker i dag: `econ1310`, `JUS1111` (ikke relevante
her). Lenk aldri til kapitler du ikke har verifisert.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–H) refererer til
oppgavetype-katalogen fra EKSAMENSANALYSE §3, gjengitt i Del 0:
A begrepsforklaring (oppgave 1) · B IV/2SLS med tabell · C paneldata FE/RE/Hausman ·
D hetero/autokorrelasjon: diagnose+botemiddel · E OLS-egenskaper/Gauss-Markov/
asymptotikk-begrunnelse · F diskret/begrenset respons · G kausal design/DiD ·
H tidsserie: stasjonaritet/dynamikk.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes SØK3001

- **id:** `sok3001-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste trestegs-malen, temafrekvensene, sensorens «diagnose før botemiddel»-metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet. Skal gjengi: (i) formen (5-timers digital skoleeksamen i Inspera, 09.00–14.00, A–F, 15 studiepoeng; **hjelpemiddelkode C**: Sydsæter/Strøm/Berck matematisk formelsamling + godkjent kalkulator; $t$-, $F$-, $\chi^2$-tabeller som vedlegg; oppgavene gis parallelt på engelsk og bokmål); (ii) at emnet **absorberte SØK3514/SØK3515** ⇒ kausalitet, DiD, diskret respons og paneldata er fast kjernestoff, og at korona-årene (V2020–H2022) hadde avvikende hjemme-/gruppeeksamensformat som boka IKKE bygger på; (iii) den stabile **trestegs-malen**: oppgave 1 (~20 %) kort begrepsoppgave med 5–6 definisjoner + to store anvendte tabelloppgaver (~40–50 % og ~30–40 %); (iv) temafrekvens-tabellen: paneldata ~85 %, IV/2SLS ~80 %, hetero/autokorr ~70 %, OLS-egenskaper/asymptotikk ~65 %, diskret respons ~50 %, sekundært DiD/tidsserie/målefeil/simultane ligninger; (v) de fire søylene boka bygger på; (vi) sensorens metaregler (diagnose før botemiddel; les tabellen riktig og BRUK tallene; tolk koeffisienter økonomisk; beskriv testprosedyren fullt — $H_0$/observator/kritisk verdi/konklusjon; presise definisjoner med formel; ikke forveksle hjelperegresjon med den estimerte modellen); (vii) karakterskillene (E–D: riktige definisjoner + kjenner igjen at OLS er problematisk + nevner riktig metode uten full begrunnelse; C: korrekt oppsett/gjennomføring av 2SLS/FE/GLS + riktig tabellesning; A/B: hele testbatteriet med *når* hver test er anvendbar, skiller forventningsrett fra konsistens, FE vs. RE via Hausman med $a_i$-korrelasjonsavveiningen, logit/probit → marginaleffekter, ser svakhetene ved eget instrument/design).
- **Innholdskontrakt:** Oppgavetype-katalogen A–H presenteres som studentens sjekkliste med frekvens og typisk vekt. Prognosen for neste ordinære sett: oppgave 1 (~20 %) = 5–6 definisjoner fra fast liste (seriekorrelasjon, heteroskedastisitet, stasjonaritet, målefeil, strukturform, konsistens, instrumentrelevans); oppgave 2 (~40–50 %) = stor tabelloppgave, mest sannsynlig **IV/2SLS** (endogenitet → første steg → svake instrumenter → eksogenitets-/overidentifikasjonstest → elastisitetstolkning), evt. kombinert med panel; oppgave 3 (~30–40 %) = **paneldata (FE/RE/Hausman)** eller **diskret respons (LPM/logit/probit)** eller **kausalt design (DiD)**, gjerne med hetero-/autokorrelasjonsdiagnostikk. Leseplan: Del 1+2+3+4 er «må perfekt»; Del 5 «må kunne»; Del 6 «bør kjenne». Tidsstrategi for 5 timer: begrepsoppgaven raskt og presist for sikre 20 %, deretter tid proporsjonalt med vekt på de to store.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «oppgave 2 veier 50 % med 5 deloppgaver, oppgave 3 veier 30 % med 4 deloppgaver — sett opp tidsbudsjett for 300 minutter, og kryss av hvilken diagnose hver oppgavetype krever».
- **Typiske feil:** Metafeilene — nevne metode uten diagnose; hoppe over testprosedyren; feil tidsprioritering; forveksle hjelperegresjon med den estimerte modellen.
- **Quiz: 12 · Flashcards: 12** (frekvenser, vekter, metaregler, karakterskiller)

---

### Del 1 — OLS-egenskaper, Gauss-Markov og asymptotikk *(prioritet: PERFEKT)*

#### Kapittel 1.1: OLS-estimatoren, Gauss-Markov og BLUE

- **id:** `sok3001-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Gauss-Markov-forutsetningene, forventningsretthet og BLUE — grunnmuren hvert senere kapittel måler forutsetningsbrudd mot.
- **Eksamensbelegg:** OLS-egenskaper/Gauss-Markov ~65 %; kreves for å begrunne *hvorfor* IV/GLS/FE trengs. Prioritet: **perfekt** (fundament). Sjanger E.
- **Innholdskontrakt:** MÅ KUNNE ANGIS OG BRUKES: Gauss-Markov-forutsetningene (lineær i parametre, tilfeldig utvalg, ingen perfekt kollinearitet, **null betinget forventning** $E(u\mid X)=0$, **homoskedastisitet** $\operatorname{Var}(u\mid X)=\sigma^2$, evt. ingen autokorrelasjon i tidsserie); OLS forventningsrett under de fire første; **BLUE** (Best Linear Unbiased Estimator) under alle Gauss-Markov (Gauss-Markov-teoremet — resultat til bruk, ikke fullt bevis); matriseuttrykket $\hat{\beta}=(X'X)^{-1}X'y$ og $\operatorname{Var}(\hat{\beta})=\sigma^2(X'X)^{-1}$ (til bruk); hva «effisiens» betyr (minst varians i klassen); en oversikt over hvilket brudd som rammer *hva* (forhåndsvarsel om resten av boka: $E(u\mid X)\neq 0$ ⇒ skjev/inkonsistent; hetero/autokorr ⇒ effisiens + SE). Tospråklig begrepsbank: forventningsretthet (unbiasedness), Gauss-Markov-forutsetningene (Gauss–Markov assumptions), effisiens (efficiency), BLUE. Utledning: forventningsretthet $E(\hat{\beta})=\beta$ vises på få linjer («kunne utlede»); Gauss-Markov-teoremet oppgis.
- **Oppgavesjangre:** E + A-forberedelse. Mønstereksempel: «Under hvilke forutsetninger er OLS-estimatoren forventningsrett? Hvilken av disse er avgjørende, og hva innebærer Gauss-Markov-teoremet ut over forventningsretthet?»
- **Typiske feil (analysen §5):** Blande forventningsrett og BLUE (BLUE krever *også* homoskedastisitet); tro at homoskedastisitet trengs for forventningsretthet; oppgi «lav varians» som forutsetning i stedet for konklusjon.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 1.2: Forventningsretthet vs. konsistens

- **id:** `sok3001-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3001-1-1`
- **kapitteltype:** teori
- **description:** Det gjennomgående skillet: endelig-utvalgs-forventningsretthet vs. asymptotisk konsistens — og når OLS er skjev men konsistent, eller inkonsistent.
- **Eksamensbelegg:** Konsistent estimator er fast begreps-punkt (oppgave 1); skillet er en eksplisitt A/B-markør og en av de mest straffede forvekslingene (§5.3). Prioritet: **perfekt**. Sjanger E, A.
- **Innholdskontrakt:** MÅ BEHERSKES PRESIST: **forventningsretthet** $E(\hat{\beta})=\beta$ (gjelder for et hvilket som helst $n$) vs. **konsistens** $\operatorname{plim}\hat{\beta}=\beta$ (grenseegenskap når $n\to\infty$); at de er logisk uavhengige (en estimator kan være skjev men konsistent, f.eks. når skjevheten $\to 0$; eller forventningsrett men inkonsistent er sjeldnere); konsistensbetingelsen for OLS: $\operatorname{plim}(X'u/n)=0$ dvs. **eksogene regressorer i grensen**; når $E(u\mid x)\neq 0$ (endogenitet) er OLS **både skjev og inkonsistent** — dette motiverer hele Del 2; asymptotisk normalitet som grunnlag for at $t$-/$F$-inferens virker i store utvalg selv uten normalfeil. Tospråklig begrepsbank: konsistens (consistency), sannsynlighetsgrense (probability limit, plim), asymptotisk (asymptotic), endogenitet (endogeneity). Utledning: vis at endogenitet gir inkonsistens via $\operatorname{plim}\hat{\beta}=\beta + \operatorname{plim}(X'u/n)$-argumentet («kunne utlede» skjematisk).
- **Oppgavesjangre:** E, A. Mønstereksempel: «Forklar forskjellen på at en estimator er forventningsrett og at den er konsistent. Ved endogenitet — hvilken av egenskapene mister OLS, og hvorfor hjelper det ikke å øke utvalget?»
- **Typiske feil (analysen §5.3):** Påstå at et brudd som kun rammer effisiens (hetero) også ødelegger forventningsretthet/konsistens; tro at et større utvalg reparerer endogenitetsskjevhet; bruke begrepene om hverandre.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 1.3: Asymptotikk-verktøykassen: LLN, CLT og plim-regning

- **id:** `sok3001-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok3001-1-2`
- **kapitteltype:** teori
- **description:** Store talls lov, sentralgrensesetningen og regnereglene for plim — akkurat det som trengs for å begrunne konsistens og asymptotisk inferens. Kompakt repetisjon, ikke ny sannsynlighetsteori.
- **Eksamensbelegg:** Understøtter ~65 %-asymptotikk-stoffet; sjelden egen oppgave, men verktøyet bak konsistens-/IV-argumentene. Prioritet: **kunne** (verktøykapittel). Forkunnskap fra SØK1004/ECON2130.
- **Innholdskontrakt:** TIL BRUK (repeteres kompakt): store talls lov (law of large numbers) — utvalgsgjennomsnitt $\to$ forventning; sentralgrensesetning (central limit theorem) — standardiserte summer $\to$ normal; **plim-reglene** (Slutskys teorem): $\operatorname{plim}(a+b)=\operatorname{plim}a+\operatorname{plim}b$, $\operatorname{plim}(ab)=\operatorname{plim}a\cdot\operatorname{plim}b$, kontinuerlig funksjon kan flyttes inn i plim; hvorfor konsistens er svakere/lettere å oppnå enn forventningsretthet; asymptotisk standardfeil-idé. Merk skillet: dette er *bruk*, ikke bevis. Henvis eksplisitt til SØK1004/ECON2130 for grunnlaget (klartekst hvis ikke live). Tospråklig begrepsbank: store talls lov (law of large numbers, LLN), sentralgrensesetning (central limit theorem, CLT), Slutskys teorem (Slutsky's theorem).
- **Oppgavesjangre:** E-støtte. Mønstereksempel: «Bruk plim-reglene til å vise at hvis $\operatorname{plim}(X'u/n)=0$, så er OLS konsistent. Hvilken av de to setningene (LLN/CLT) begrunner konsistens, og hvilken begrunner den asymptotiske $t$-inferensen?»
- **Typiske feil:** Forveksle LLN (konvergens til konstant) med CLT (konvergens til fordeling); ta forventning inn i en ikke-lineær funksjon der bare plim er lovlig; bruke asymptotiske argumenter som om de garanterte endelig-utvalgs-egenskaper.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.4: Drill: OLS-egenskaper og «hvilken forutsetning brytes?»

- **id:** `sok3001-1-4` · **number:** 1.4 · **estimatedMinutes:** 75 · **prerequisites:** `sok3001-1-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på diagnose-refleksen: gitt en beskrevet situasjon — hvilken Gauss-Markov-forutsetning brytes, hva blir konsekvensen for forventningsretthet/konsistens/effisiens, og hvilket botemiddel peker det mot.
- **Eksamensbelegg:** Dekker sjanger E (~65 %) og forbereder diagnose-refleksen som resten av boka bygger på. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) hvilken forutsetning er i spill? 2) rammer bruddet $E(u\mid X)=0$ (⇒ skjev + inkonsistent) eller bare variansstrukturen (⇒ effisiens + feil SE)? 3) hva sier det om forventningsretthet vs. konsistens? 4) hvilken familie botemidler (IV/FE/GLS/robuste SE) er relevant, og hva koster den? **Gjennomregnet diagnose-case med sensor-margnotater** (f.eks. utelatt variabel korrelert med regressor → $E(u\mid X)\neq 0$ → skjev+inkonsistent → IV eller FE). 8–12 deloppgaver som roterer alle bruddtyper (utelatt variabel, målefeil, simultanitet, hetero, seriekorrelasjon, uobservert paneleffekt) på begrepsnivå.
- **Oppgavesjangre:** E, A. Mønstereksempel: «For hver situasjon (a–f): angi hvilken forutsetning som brytes, om OLS forblir forventningsrett og/eller konsistent, og hvilken metode fra pensum som er det naturlige botemiddelet.»
- **Typiske feil:** Hoppe til botemiddel uten diagnose; blande effisiens-brudd med konsistens-brudd; foreslå robuste SE mot endogenitet (robuste SE fikser bare inferens, ikke skjevhet).
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 1:** 4 prøver (`sok3001-1-prove`) — se §4.

---

### Del 2 — Endogenitet, instrumentvariabler og 2SLS *(prioritet: PERFEKT)*

#### Kapittel 2.1: Endogenitet: kilder og konsekvenser

- **id:** `sok3001-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok3001-1-2`
- **kapitteltype:** teori
- **description:** De tre klassiske kildene til endogenitet — utelatt variabel, simultanitet, målefeil — og hvorfor hver gjør OLS inkonsistent.
- **Eksamensbelegg:** Endogenitet er premisset for hele IV-oppgaven (~80 %) og fast i begrepsoppgaven (målefeil, strukturform). Prioritet: **perfekt**. Sjanger A, B, E.
- **Innholdskontrakt:** MÅ KUNNE ARGUMENTERES: endogenitet = $\operatorname{cov}(x,u)\neq 0$; de tre kildene: **utelatt variabel** (utelatt faktor korrelert med både $x$ og $y$ — skjevhetsretning kan resoneres via fortegnene), **simultanitet** (tilbud/etterspørsel bestemmer $x$ og $y$ samtidig), **målefeil (measurement error)** i en regressor ⇒ klassisk demping (attenuation bias) mot null; hvorfor hver gir $E(u\mid x)\neq 0$ ⇒ OLS skjev+inkonsistent (kobling 1.2); **strukturform-ligning** (structural equation): atferds-/likevektsligning fra økonomisk teori med kausal tolkning, vs. redusert form. Tospråklig begrepsbank: endogenitet (endogeneity), utelatt variabel-skjevhet (omitted variable bias), simultanitet (simultaneity), målefeil (measurement error), demping/attenuering (attenuation bias), strukturform (structural form). Utledning: attenuation-resultatet skisseres (klassisk målefeil trekker koeffisienten mot 0) — «kunne forklare».
- **Oppgavesjangre:** A, B, E. Mønstereksempel: «Nevn tre kilder til at en forklaringsvariabel er endogen, og forklar for hver hvorfor OLS blir inkonsistent. Hvilken retning trekker klassisk målefeil koeffisienten?»
- **Typiske feil (analysen §5.1):** Nevne «bruk 2SLS» uten å argumentere for at variabelen faktisk er endogen; tro at målefeil i venstresidevariabelen ($y$) gir samme problem som i $x$ (den gjør ikke); forveksle strukturform og redusert form.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.2: Instrumentvariabler: relevans og eksogenitet

- **id:** `sok3001-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3001-2-1`
- **kapitteltype:** teori
- **description:** De to kravene til et gyldig instrument — relevans og eksogenitet — og IV-estimatoren i det akkurat identifiserte tilfellet.
- **Eksamensbelegg:** Instrumentrelevans/-eksogenitet er fast begreps-punkt og bærende for IV-oppgaven (~80 %). Å forveksle de to kravene er en toppfeil (§5.6). Prioritet: **perfekt**. Sjanger A, B.
- **Innholdskontrakt:** MÅ BEHERSKES: et gyldig instrument $z$ må være (i) **relevant** — korrelert med den endogene $x$ ($\operatorname{cov}(z,x)\neq 0$, testes empirisk), og (ii) **eksogent/valid** — ukorrelert med restleddet ($\operatorname{cov}(z,u)=0$, kan IKKE testes direkte ved akkurat identifikasjon, må begrunnes teoretisk); IV-estimatoren akkurat identifisert: $\hat{\beta}_{IV}=\operatorname{cov}(z,y)/\operatorname{cov}(z,x)$; hvorfor IV er *konsistent men ikke forventningsrett* (endelig-utvalgs-skjevhet, verre ved svakt instrument — bro til 2.4); intuisjonen «bruk bare den delen av variasjonen i $x$ som instrumentet forklarer». Tospråklig begrepsbank: instrument (instrument), relevans (relevance), eksogenitet/gyldighet (exogeneity/validity), akkurat identifisert (just-identified). Utledning: $\hat{\beta}_{IV}=\operatorname{cov}(z,y)/\operatorname{cov}(z,x)$ utledes fra momentbetingelsen $\operatorname{cov}(z,u)=0$ («kunne utlede»).
- **Oppgavesjangre:** A, B. Mønstereksempel: «Hva er de to kravene til et gyldig instrument? Hvilket av dem kan testes fra dataene, og hvilket må begrunnes med fagkunnskap? Skriv opp IV-estimatoren for én endogen variabel og ett instrument.»
- **Typiske feil (analysen §5.6):** Forveksle relevans (korr. med $x$) og eksogenitet (ukorr. med $u$); påstå at et svakt instrument «mangler eksogenitet»; tro at eksogeniteten kan testes ved akkurat identifikasjon.
- **Quiz: 26 · Flashcards: 24**

#### Kapittel 2.3: To-stegs minste kvadrat (2SLS) og redusert form

- **id:** `sok3001-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok3001-2-2`
- **kapitteltype:** teori
- **description:** Den fulle 2SLS-prosedyren — første steg, andre steg, redusert form — og hvordan det leses ut av en flerkolonnetabell (OLS vs. 2SLS).
- **Eksamensbelegg:** 2SLS-tabelloppgaven er kjernen i oppgave 2 nesten hvert år (~80 %); flere instrumenter/kontroller er standard. Prioritet: **perfekt**. Sjanger B.
- **Innholdskontrakt:** MÅ KUNNE UTFØRES: **første steg** — regresser den endogene $x$ på ALLE eksogene variable + instrument(er), lagre predikert $\hat{x}$; **andre steg** — regresser $y$ på $\hat{x}$ og de eksogene; hvorfor SE må korrigeres (ikke bruke andre-stegs naive SE) — programvaren gjør dette, studenten skal vite hvorfor; **redusert form (reduced form)** — $y$ direkte på alle eksogene + instrument; forholdet 2SLS-koeffisient = redusert form / første steg (Wald-intuisjon ved binært instrument); tolke en tabell med OLS i kolonne (1) og 2SLS i kolonne (2): retningsforskjell, størrelsesforskjell (f.eks. OLS-elastisitet dempet av målefeil vs. større 2SLS). Tospråklig begrepsbank: to-stegs minste kvadrat (two-stage least squares, 2SLS), første steg (first stage), redusert form (reduced form), predikert verdi (fitted/predicted value). Utledning: vis at 2SLS = IV med $\hat{x}$ som instrument; redusert form/første steg-forholdet vises på få linjer.
- **Oppgavesjangre:** B. Mønstereksempel: «Tabellen viser OLS i kolonne (1) og 2SLS i kolonne (2) for en log-log-etterspørsel etter flyseter. Forklar hvorfor prisen kan være endogen, hvordan kolonne (2) er estimert steg for steg, og tolk forskjellen mellom de to priselastisitetene.»
- **Typiske feil (analysen §5):** Bruke andre-stegs naive standardfeil; utelate en eksogen kontrollvariabel fra første steg; tolke 2SLS-koeffisienten som om den var vanlig OLS uten å kommentere endogenitetskorreksjonen.
- **Quiz: 28 · Flashcards: 22**

#### Kapittel 2.4: Testbatteriet: relevans, eksogenitet og overidentifikasjon

- **id:** `sok3001-2-4` · **number:** 2.4 · **estimatedMinutes:** 65 · **prerequisites:** `sok3001-2-3`
- **kapitteltype:** teori
- **description:** De tre testene som skiller A/B fra C: første-stegs F for svake instrumenter, residualbasert eksogenitetstest (Hausman), og overidentifikasjonstest — med når hver er anvendbar.
- **Eksamensbelegg:** Hele testbatteriet er selve A/B-markøren; å teste overidentifikasjon ved akkurat identifikasjon er en signaturfelle (V2024, §5.2). Prioritet: **perfekt**. Sjanger B.
- **Innholdskontrakt:** MÅ KUNNE GJENNOMFØRES med full prosedyre ($H_0$/observator/kritisk verdi/konklusjon): **(1) relevanstest/svake instrumenter** — første-stegs $F$ på instrumentet(-ene); tommelfingerregel $F>10$; ett instrument $\Rightarrow$ $t>3{,}2$; svakt instrument ⇒ 2SLS sterkt skjev og upålitelig. **(2) eksogenitetstest (regresjonsbasert Hausman)** — utvid strukturligningen med første-stegs-residual; signifikant residualkoeffisient ($t$) ⇒ forkast eksogenitet ⇒ $x$ er endogen (IV berettiget); ikke-signifikant ⇒ OLS holder. **(3) overidentifikasjonstest (Sargan/Hansen)** — KUN meningsfull ved *flere* instrumenter enn endogene variable; tester felles gyldighet av de overtallige instrumentene under antakelse om at minst ett er gyldig; ved akkurat identifikasjon er testen **ikke definert** (må sies eksplisitt). Tospråklig begrepsbank: svake instrumenter (weak instruments), Hausman-test (Hausman test), overidentifikasjon (overidentification), Sargan-test (Sargan test). Utledning: residualtestens logikk forklares (hvorfor signifikant residual = endogenitet).
- **Oppgavesjangre:** B. Mønstereksempel: «Første-stegs $F=6{,}3$ for instrumentet, residualkoeffisienten har $t=2{,}2$, og modellen er akkurat identifisert. Test (a) om instrumentet er svakt, (b) om prisen er endogen, og (c) forklar hvorfor du IKKE kan gjennomføre en overidentifikasjonstest her.»
- **Typiske feil (analysen §5.2, §5.6):** Teste overidentifikasjon ved akkurat identifikasjon (meningsløst); forveksle relevanstest og eksogenitetstest; feil kritisk verdi/hale; konkludere uten å oppgi $H_0$ og beslutningsregel.
- **Quiz: 28 · Flashcards: 20**

#### Kapittel 2.5: Drill: IV/2SLS-tabelloppgaven

- **id:** `sok3001-2-5` · **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** `sok3001-2-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 2: fra en gjengitt tabell (OLS, første steg, 2SLS) til endogenitetsargument → første steg → svakt-instrument-test → eksogenitetstest → overidentifikasjon → elastisitetstolkning.
- **Eksamensbelegg:** Dekker sjanger B (~80 %) samlet — den store tabelloppgaven i hvert sett. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) argumenter for endogenitet (kilde); 2) foreslå/vurder instrument (relevans + eksogenitet); 3) les første steg, test relevans ($F>10$/$t>3{,}2$); 4) forklar andre steg / redusert form; 5) eksogenitetstest via residual-$t$; 6) overidentifikasjon KUN hvis overidentifisert (ellers si hvorfor ikke); 7) tolk hovedkoeffisienten økonomisk (elastisitet). **Gjennomregnet eksamenscase med sensor-margnotater** på en gjengitt flerkolonnetabell (nyskrevne tall/kontekst — f.eks. utdanning→lønn med `nearc`-type instrument, eller etterspørsel→pris med markedskonsentrasjon). 10–14 deloppgaver på eksamensnivå som roterer hele batteriet, inkl. minst ett akkurat identifisert og ett overidentifisert case.
- **Oppgavesjangre:** B. Mønstereksempel (full deloppgave-kjede à la V2024/H2025): «(a) Argumenter for at $x$ er endogen. (b) Les av og tolk første-stegs-koeffisienten og $F$-verdien — er instrumentet svakt? (c) Estimer/forklar 2SLS-koeffisienten og tolk den som elastisitet. (d) Gjennomfør eksogenitetstesten via residualen. (e) Er modellen overidentifisert? Hvis ja, gjennomfør Sargan-testen; hvis nei, forklar.»
- **Typiske feil:** Hele §5-repertoaret for IV samlet: metode uten diagnose (§5.1), overidentifikasjon ved akkurat identifikasjon (§5.2), forveksle relevans/eksogenitet (§5.6), naive andre-stegs-SE, feil tabellesning (§5.8).
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (`sok3001-2-prove`) — se §4.

---

### Del 3 — Paneldata: faste og tilfeldige effekter *(prioritet: PERFEKT)*

#### Kapittel 3.1: Panelmodellen og faste effekter (FE)

- **id:** `sok3001-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok3001-1-2`
- **kapitteltype:** teori
- **description:** Panelmodellen med uobservert tidskonstant effekt, og hvordan innen-transformasjon / LSDV fjerner den for å drepe skjevhet fra tidskonstant heterogenitet.
- **Eksamensbelegg:** Paneldata er mest frekvente enkelttema (~85 %); FE for uobservert heterogenitet er bærebjelken (regionsspesifikke effekter går igjen). Prioritet: **perfekt**. Sjanger C.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES/BRUKES: panelmodellen $y_{it}=\beta x_{it}+a_i+u_{it}$ med $a_i$ = uobservert, tidskonstant individ-/regionspesifikk effekt; problemet: hvis $a_i$ er korrelert med $x_{it}$ er pooled OLS skjev+inkonsistent; **innen-transformasjon (within/demeaning)** — trekk fra individgjennomsnittet, $\ddot{y}_{it}=\ddot{\beta}\ddot{x}_{it}+\ddot{u}_{it}$, $a_i$ elimineres; **LSDV (least squares dummy variables)** som ekvivalent (en dummy per enhet); konsekvens: **tidskonstante forklaringsvariable kan IKKE estimeres** (elimineres sammen med $a_i$) — sentralt trade-off; hva FE fanger opp (alt tidskonstant og uobservert per enhet). Tospråklig begrepsbank: faste effekter (fixed effects, FE), uobservert heterogenitet (unobserved heterogeneity), innen-transformasjon (within transformation), LSDV. Utledning: innen-transformasjonen vises steg for steg — at $\bar{a}_i=a_i$ subtraheres bort («kunne utlede»).
- **Oppgavesjangre:** C. Mønstereksempel: «For paneldata over 200 kommuner i 2010 og 2012 estimeres en modell med faste effekter. Skriv opp modellen, forklar hva de faste effektene fanger opp, og vis hvordan innen-transformasjonen eliminerer den uobserverte effekten. Hvilken type variabel kan du da ikke lenger estimere?»
- **Typiske feil (analysen §5.7):** Tro at FE kan estimere tidskonstante variable; forveksle innen- og mellom-transformasjon; ikke forklare *hvorfor* $a_i$ forsvinner.
- **Quiz: 28 · Flashcards: 24**

#### Kapittel 3.2: Tilfeldige effekter (RE) og FE vs. RE-avveiningen

- **id:** `sok3001-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok3001-3-1`
- **kapitteltype:** teori
- **description:** Random effects som GLS-estimator, når den er mer effisient enn FE, og prisen den betaler i form av en sterkere antakelse om a_i.
- **Eksamensbelegg:** FE/RE-avveiningen er A/B-stoff i panel-oppgaven (~85 %); absorbert fra SØK3515. Prioritet: **perfekt**. Sjanger C.
- **Innholdskontrakt:** MÅ BEHERSKES: **random effects (RE)** behandler $a_i$ som et tilfeldig ledd i restleddet ($v_{it}=a_i+u_{it}$) og estimeres med **GLS** (kvasi-demeaning); RE er **mer effisient enn FE** MEN krever den sterke antakelsen $\operatorname{cov}(a_i,x_{it})=0$ (uobservert effekt ukorrelert med regressorene); hvis den brytes er RE **skjev/inkonsistent** mens FE fortsatt er konsistent; RE kan estimere tidskonstante variable (i motsetning til FE); mellom-estimator (between) nevnes kort som komponent; kvasi-demeaning-parameteren $\theta$ (til forståelse, ikke tung utledning). Tospråklig begrepsbank: tilfeldige effekter (random effects, RE), generalisert minste kvadrat (generalized least squares, GLS), kvasi-demeaning (quasi-demeaning). Utledning: ikke tung; forklar hvorfor RE er BLUE under sine antakelser og hvorfor korrelasjon $\operatorname{cov}(a_i,x)\neq 0$ ødelegger den.
- **Oppgavesjangre:** C. Mønstereksempel: «Sammenlign faste og tilfeldige effekter. Under hvilken antakelse er RE å foretrekke, og hva vinner du da? Hva skjer med RE hvis den uobserverte effekten er korrelert med forklaringsvariablene?»
- **Typiske feil (analysen §5.7):** Bruke RE når $a_i$ er korrelert med regressorene (skjevt); tro at FE alltid er «tryggere» uten å nevne effisienstapet; blande GLS-motivasjonen her med GLS mot hetero (Del 4).
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 3.3: Hausman-testen: å velge mellom FE og RE

- **id:** `sok3001-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok3001-3-2`
- **kapitteltype:** teori
- **description:** Hausman-testen som formell avgjørelse mellom FE og RE — logikk, teststatistikk og beslutningsregel.
- **Eksamensbelegg:** Hausman for FE/RE-valg er fast i panel-oppgaven; å beherske den fullt er A/B. Prioritet: **perfekt**. Sjanger C.
- **Innholdskontrakt:** MÅ KUNNE GJENNOMFØRES: Hausman-testen sammenligner FE- og RE-estimatene; **$H_0$: $\operatorname{cov}(a_i,x_{it})=0$** (RE konsistent OG effisient) mot $H_1$: korrelasjon (kun FE konsistent); teststatistikken bygger på differansen $(\hat{\beta}_{FE}-\hat{\beta}_{RE})$ vektet med differansen i kovariansmatriser, $\chi^2$-fordelt med frihetsgrader = antall tidsvarierende regressorer; **forkastning ⇒ bruk FE**; ikke-forkastning ⇒ RE kan brukes (mer effisient); understrek at Hausman *ikke* forteller at FE er «riktig», bare at RE-antakelsen ryker. Tospråklig begrepsbank: Hausman-test (Hausman test), teststatistikk (test statistic), frihetsgrader (degrees of freedom). Utledning: logikken (hvorfor systematisk forskjell mellom estimatene signaliserer korrelasjon) forklares; formelen oppgis til bruk.
- **Oppgavesjangre:** C. Mønstereksempel: «Hausman-testen gir en teststatistikk på 14,2 med 3 frihetsgrader. Formuler $H_0$ og $H_1$, finn kritisk verdi fra $\chi^2$-tabellen, og konkluder om du bør bruke faste eller tilfeldige effekter — og hva det betyr for den uobserverte effekten.»
- **Typiske feil (analysen §5.7):** Feil retning på beslutningsregelen; feil frihetsgrader; tolke forkastning som at «FE er sann modell» i stedet for «RE-antakelsen brytes».
- **Quiz: 24 · Flashcards: 18**

#### Kapittel 3.4: Drill: paneldata-oppgaven (FE/RE/Hausman + fordeler/ulemper)

- **id:** `sok3001-3-4` · **number:** 3.4 · **estimatedMinutes:** 85 · **prerequisites:** `sok3001-3-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele oppgave 3-panelvarianten: skrive opp modellen, forklare hva FE fanger, velge FE/RE via Hausman, og drøfte fordeler/ulemper ved paneldata.
- **Eksamensbelegg:** Dekker sjanger C (~85 %) samlet — panel-oppgaven i hvert sett den forekommer. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) skriv opp $y_{it}=\beta x_{it}+a_i+u_{it}$ og identifiser $a_i$; 2) forklar hvorfor pooled OLS er skjev hvis $\operatorname{cov}(a_i,x)\neq 0$; 3) FE via innen-transformasjon (hva fanges, hva mistes); 4) RE + effisiensgevinst + antakelse; 5) Hausman → valg; 6) drøft fordeler (kontroll for uobservert heterogenitet, dynamikk) og ulemper (krav om variasjon over tid, mulig autokorrelasjon, tidskonstante variable går tapt) ved paneldata. **Gjennomregnet eksamenscase med sensor-margnotater** på en gjengitt paneltabell (pooled OLS / FE / RE i tre kolonner, nyskrevne tall). 10–14 deloppgaver på eksamensnivå.
- **Oppgavesjangre:** C. Mønstereksempel: «(a) Skriv opp panelmodellen og forklar $a_i$. (b) Hva fanger de faste effektene i kolonne FE opp? (c) Hvorfor kan ikke den tidskonstante variabelen 'region' estimeres i FE? (d) Hausman gir $\chi^2=9{,}8$, df=2 — hvilken modell velger du? (e) Presenter to fordeler og to ulemper ved paneldata her.»
- **Typiske feil:** FE/RE-forvirring (§5.7); glemme trade-offet med tidskonstante variable; ikke koble Hausman-konklusjonen til hva den betyr for $a_i$.
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (`sok3001-3-prove`) — se §4.

---

### Del 4 — Heteroskedastisitet og autokorrelasjon *(prioritet: PERFEKT)*

#### Kapittel 4.1: Heteroskedastisitet: konsekvens, test og robuste SE

- **id:** `sok3001-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok3001-1-1`
- **kapitteltype:** teori
- **description:** Hva heteroskedastisitet gjør (og ikke gjør) med OLS, hvordan den testes via hjelperegresjon, og hvorfor robuste SE er standard-botemiddelet for inferens.
- **Eksamensbelegg:** Heteroskedastisitet er fast begreps-punkt og diagnose/botemiddel-oppgave (~70 %). Prioritet: **perfekt**. Sjanger A, D.
- **Innholdskontrakt:** MÅ BEHERSKES: heteroskedastisitet $\operatorname{Var}(u_i\mid x_i)=\sigma_i^2$ (ikke konstant); **konsekvens** — OLS forblir forventningsrett OG konsistent, men er ikke lenger BLUE/effisient, og **default-standardfeilene er feil** ⇒ ugyldig $t$-/$F$-inferens (dette skillet er kritisk: skjevhet nei, feil SE ja); **test** — Breusch–Pagan/White via **hjelperegresjon** av kvadrerte residualer på regressorene (evt. deres kvadrater/kryssledd), teststatistikk mot $\chi^2$; **botemiddel 1: robuste (heteroskedastisitets-robuste) standardfeil** — gjenoppretter inferens, endrer ikke koeffisientene; **botemiddel 2: WLS/GLS** (Del 4.2). Understrek: hjelperegresjonen er IKKE den estimerte økonometriske modellen (§5.9). Tospråklig begrepsbank: heteroskedastisitet (heteroskedasticity), robuste standardfeil (robust standard errors), Breusch–Pagan-test (Breusch–Pagan test), White-test (White test), hjelperegresjon (auxiliary regression). Utledning: hvorfor OLS-SE-formelen $\sigma^2(X'X)^{-1}$ er feil under hetero forklares.
- **Oppgavesjangre:** A, D. Mønstereksempel: «Forklar hva et heteroskedastisk restledd er og hvilke egenskaper ved OLS det påvirker (og ikke). Hvordan tester du for det, og hvorfor er robuste standardfeil et botemiddel — hva fikser de, og hva fikser de ikke?»
- **Typiske feil (analysen §5.4, §5.9):** Tro at robuste SE «fikser skjevhet» (de fikser bare inferensen); tro at hetero gjør OLS forventningsskjev; forveksle hjelperegresjonen med den økonometriske modellen (§5.9).
- **Quiz: 28 · Flashcards: 24**

#### Kapittel 4.2: Autokorrelasjon og GLS/FGLS

- **id:** `sok3001-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok3001-4-1`
- **kapitteltype:** teori
- **description:** Seriekorrelasjon i tidsserie/panel, hvordan den diagnostiseres, og GLS/FGLS som forventningsrett estimator med lavere varians når variansstrukturen er kjent/estimert.
- **Eksamensbelegg:** Seriekorrelert restledd er fast begreps-punkt; GLS/FGLS-botemiddelet er A/B-stoff (V2016, V2017, V2025). Prioritet: **perfekt**. Sjanger A, D.
- **Innholdskontrakt:** MÅ BEHERSKES: seriekorrelasjon/autokorrelasjon $\operatorname{cov}(u_t,u_s\mid x)\neq 0$, $s\neq t$ (typisk AR(1): $u_t=\rho u_{t-1}+e_t$); **konsekvens** — som hetero: OLS forventningsrett/konsistent men ikke effisient, SE feil; **test** — Durbin–Watson (mot AR(1), grovt) og Breusch–Godfrey (mer generelt, via hjelperegresjon av residual på laggede residualer); **botemiddel** — HAC/autokorrelasjonsrobuste SE (inferens), eller **GLS/FGLS**: transformer modellen med kjent/estimert $\rho$ (Cochrane–Orcutt/Prais–Winsten-idé) slik at transformert restledd er sfærisk ⇒ **forventningsrett estimator med lavere varians**; FGLS = estimer variansstrukturen først. Merk: GLS krever at variansstrukturen spesifiseres riktig (ellers taper man fordelen). Tospråklig begrepsbank: seriekorrelasjon/autokorrelasjon (serial/autocorrelation), Durbin–Watson-test, Breusch–Godfrey-test, generalisert minste kvadrat (GLS), gjennomførbar GLS (feasible GLS, FGLS). Utledning: GLS-transformasjonen ved AR(1) vises skjematisk (kvasi-differensiering) — «kunne utlede».
- **Oppgavesjangre:** A, D. Mønstereksempel: «Restleddet i en tidsseriemodell er seriekorrelert. Forklar konsekvensen for OLS, hvordan du vil teste for det, og sett opp GLS-transformasjonen som gir en forventningsrett estimator med lavere varians. Når er FGLS nødvendig?»
- **Typiske feil (analysen §5.4):** Kaste OLS helt når robuste SE holder; tro at GLS gir konsistens der OLS var inkonsistent (GLS handler om effisiens, ikke endogenitet); glemme at feil spesifisert variansstruktur ødelegger GLS-gevinsten.
- **Quiz: 26 · Flashcards: 22**

#### Kapittel 4.3: Drill: diagnose og botemiddel for hetero/autokorrelasjon

- **id:** `sok3001-4-3` · **number:** 4.3 · **estimatedMinutes:** 80 · **prerequisites:** `sok3001-4-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på diagnose→valg av strategi: gitt en modell med mistenkt variansbrudd — test riktig, velg mellom robuste SE og GLS/FGLS, og begrunn valget.
- **Eksamensbelegg:** Dekker sjanger D (~70 %) samlet + begrepsdelen A. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) hvilket brudd (hetero/autokorr)? 2) konsekvens (forventningsrett bevart, SE feil — IKKE skjevhet); 3) test via riktig hjelperegresjon (BP/White vs. DW/BG), full prosedyre; 4) to strategier: robuste SE (rask, kun inferens) vs. GLS/FGLS (effisiensgevinst, krever korrekt variansstruktur); 5) hvilken foretrekkes og hvorfor. **Gjennomregnet eksamenscase med sensor-margnotater** (gjengitt residualplott-beskrivelse + hjelperegresjonsutskrift, nyskrevne tall). 10–14 deloppgaver på eksamensnivå, inkl. minst ett rent hetero- og ett rent autokorr-case.
- **Oppgavesjangre:** D. Mønstereksempel: «(a) Beskriv hvordan du tester for heteroskedastisitet fra hjelperegresjonen i tabellen. (b) Hvilke egenskaper ved OLS er intakte, og hvilke er ødelagt? (c) Du har to strategier — robuste SE og GLS. Beskriv begge, og begrunn hvilken du foretrekker her og hvorfor.»
- **Typiske feil:** Forveksle hjelperegresjon med den estimerte modellen (§5.9); tro robuste SE eller GLS reparerer skjevhet; feil valg av test (DW for hetero e.l.).
- **Quiz: 18 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (`sok3001-4-prove`) — se §4.

---

### Del 5 — Diskret og begrenset respons *(prioritet: KUNNE)*

#### Kapittel 5.1: Lineær sannsynlighetsmodell (LPM)

- **id:** `sok3001-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok3001-1-1`
- **kapitteltype:** teori
- **description:** OLS på et binært utfall — enkel tolkning i prosentpoeng, men med predikerte sannsynligheter utenfor [0,1] og innebygd heteroskedastisitet.
- **Eksamensbelegg:** LPM som utgangspunkt for diskret respons (~50 %); LPM/behandlingseffekt eksplisitt H2025. Prioritet: **kunne**. Sjanger F.
- **Innholdskontrakt:** MÅ BEHERSKES: LPM = OLS med binær $y\in\{0,1\}$; koeffisienten tolkes som **endring i sannsynlighet (prosentpoeng)** for at $y=1$ per enhets økning i $x$; behandlingskoeffisienten $\delta$ som gjennomsnittlig behandlingseffekt; **to svakheter**: (i) predikerte sannsynligheter kan havne **utenfor [0,1]**, (ii) restleddet har **innebygd heteroskedastisitet** ($\operatorname{Var}(u\mid x)=p(x)(1-p(x))$) ⇒ bruk robuste SE; fordel: enkel, direkte tolkbar. Merk skillet prosentpoeng vs. prosent. Tospråklig begrepsbank: lineær sannsynlighetsmodell (linear probability model, LPM), binært utfall (binary outcome), prosentpoeng (percentage points), behandlingseffekt (treatment effect). Utledning: vis at $\operatorname{Var}(u\mid x)=p(x)(1-p(x))$ (kort — «kunne forklare»).
- **Oppgavesjangre:** F. Mønstereksempel: «Modellen i kolonne (2) er en LPM for om en person er sysselsatt. Tolk behandlingskoeffisienten, og nevn to svakheter ved LPM sammenlignet med en logit-modell.»
- **Typiske feil (analysen §5.5, §5.11):** Overse at sannsynligheter kan gå utenfor [0,1]; glemme den innebygde heteroskedastisiteten (bruk robuste SE); blande prosent og prosentpoeng.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 5.2: Logit og probit + marginaleffekter

- **id:** `sok3001-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok3001-5-1`
- **kapitteltype:** teori
- **description:** Ikke-lineære binærmodeller som holder sannsynligheter i [0,1] — og hvorfor rå-koeffisienten aldri er effekten, bare marginaleffekten er.
- **Eksamensbelegg:** Logit/probit + marginaleffekt-tolkning (~50 %); å IKKE regne om til marginaleffekt er en toppfeil (§5.5). Prioritet: **kunne**. Sjanger F.
- **Innholdskontrakt:** MÅ BEHERSKES: logit ($\Lambda$, logistisk) og probit ($\Phi$, standardnormal) modellerer $P(y=1\mid x)=G(x\beta)$ med $G$ i [0,1]; koeffisientene estimeres med **maksimum likelihood (ML)** (nevnes, ikke tung utledning); **rå-koeffisienten gir bare fortegn og signifikans — IKKE effektstørrelsen**; **marginaleffekten** $\partial P/\partial x_j = g(x\beta)\beta_j$ avhenger av hvor man evaluerer (ved gjennomsnittet, MEM, eller gjennomsnittlig marginaleffekt, AME); tolkning i sannsynlighets-/prosentpoeng-termer; sammenligning med LPM (LPM ≈ gjennomsnittlig marginaleffekt nær datasenteret). Tospråklig begrepsbank: logit/probit (logit/probit), maksimum likelihood (maximum likelihood, ML), marginaleffekt (marginal effect), gjennomsnittlig marginaleffekt (average marginal effect, AME). Utledning: marginaleffekt-formelen $g(x\beta)\beta_j$ vises via kjerneregelen («kunne utlede»).
- **Oppgavesjangre:** F. Mønstereksempel: «En probit-modell gir koeffisienten 0,42 på en dummy for tiltak. Forklar hvorfor du ikke kan tolke 0,42 direkte som effekt på sannsynligheten, og hvordan du regner om til en marginaleffekt.»
- **Typiske feil (analysen §5.5):** Tolke rå logit/probit-koeffisienten som marginaleffekt/prosentpoeng; forveksle logit og probit-skala; glemme at marginaleffekten avhenger av evalueringspunktet.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 5.3: Tobit og seleksjon (Heckman)

- **id:** `sok3001-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok3001-5-2`
- **kapitteltype:** teori
- **description:** Sensurerte/trunkerte utfall (Tobit) og utvalgsseleksjon (Heckman-tosteg) — når OLS på et begrenset utfall blir skjevt, og hva som retter det. Bør kjenne til.
- **Eksamensbelegg:** Tobit/seleksjon i enkelte sett (undergruppe av ~50 % diskret-respons); mindre frekvent enn LPM/logit/probit. Prioritet: **kunne** (nedre del) — plasser ETTER 5.1–5.2, merk «bør kjenne til».
- **Innholdskontrakt:** BØR KJENNE TIL: **sensurering (censoring)** — utfallet er observert bare over/under en grense (f.eks. arbeidstimer bunker på 0); **Tobit** modellerer en latent variabel og korrigerer for massen ved sensureringsgrensen; **trunkering** vs. sensurering (kort skille); **utvalgsseleksjon (sample selection)** — vi observerer $y$ bare for et ikke-tilfeldig utvalg (f.eks. lønn kun for sysselsatte) ⇒ OLS skjev; **Heckman-tosteg**: (1) seleksjonsligning (probit for å bli observert) → invers Mills-ratio, (2) inkluder Mills-ratioen i utfallsligningen som korreksjon. Hold behandlingen kompakt — dette er «bør kjenne»-stoff. Tospråklig begrepsbank: sensurering (censoring), trunkering (truncation), Tobit (Tobit), utvalgsseleksjon (sample selection), invers Mills-ratio (inverse Mills ratio). Utledning: ikke krevd; forklar intuisjonen bak Mills-ratio-korreksjonen.
- **Oppgavesjangre:** F. Mønstereksempel: «Vi observerer ønsket arbeidstid, men mange registrerer 0 timer. Forklar hvorfor OLS blir skjev, og hvordan en Tobit-modell håndterer sensureringen ved 0.»
- **Typiske feil:** Bruke OLS på et sterkt sensurert utfall uten forbehold; forveksle sensurering (Tobit) og seleksjon (Heckman); tolke Tobit-koeffisienten som marginaleffekt på observert $y$ uten korreksjon.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 5.4: Drill: diskret/begrenset respons

- **id:** `sok3001-5-4` · **number:** 5.4 · **estimatedMinutes:** 75 · **prerequisites:** `sok3001-5-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på binær-/begrenset-utfall-oppgaven: velg modell (LPM/logit/probit/Tobit), tolk riktig (prosentpoeng vs. marginaleffekt), og pek på modellens svakheter.
- **Eksamensbelegg:** Dekker sjanger F (~50 %) samlet — oppgave 3-varianten med diskret respons. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) hva slags utfall (binært/sensurert/selektert)? 2) velg modell og begrunn; 3) tolk koeffisienten korrekt (LPM: prosentpoeng; logit/probit: regn om til marginaleffekt; Tobit: forsiktig); 4) nevn modellens svakheter (LPM: [0,1]/hetero; logit/probit: rå-koeffisient ≠ effekt); 5) sammenlign med LPM der relevant. **Gjennomregnet eksamenscase med sensor-margnotater** på en gjengitt tabell (LPM i én kolonne, probit i en annen, nyskrevne tall). 8–12 deloppgaver på eksamensnivå.
- **Oppgavesjangre:** F. Mønstereksempel: «(a) Tolk behandlingskoeffisienten i LPM-kolonnen. (b) Probit-kolonnen gir koeffisient 0,42 på samme dummy — regn om til en tilnærmet marginaleffekt og sammenlign med LPM. (c) Nevn to grunner til at man kan foretrekke probit foran LPM, og én grunn til det motsatte.»
- **Typiske feil:** LPM-svakhetene oversett; rå logit/probit ikke omgjort til marginaleffekt (§5.5); prosent/prosentpoeng-forveksling.
- **Quiz: 16 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (`sok3001-5-prove`) — se §4.

---

### Del 6 — Kausal design og tidsserie *(prioritet: KJENNE)*

#### Kapittel 6.1: Difference-in-differences og parallelle trender

- **id:** `sok3001-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok3001-3-1`
- **kapitteltype:** teori
- **description:** DiD som kausalt design — behandlings- og tidsdummy med interaksjonsledd — og forutsetningen om parallelle trender som hele identifikasjonen hviler på.
- **Eksamensbelegg:** DiD sekundært men voksende (V2023, absorbert SØK3514); kobles til panel/FE. Prioritet: **kjenne** (grensende til kunne). Sjanger G.
- **Innholdskontrakt:** MÅ KUNNE SETTES OPP: DiD-modellen med behandlingsdummy $D$, tidsdummy (etter/før) $T$ og **interaksjonsleddet** $D\times T$; **interaksjonskoeffisienten = behandlingseffekten** (differansen i differanser); tolkning i ord; den **sentrale forutsetningen: parallelle trender (parallel trends)** — uten behandling ville gruppene fulgt samme utvikling; hvordan DiD kobles til FE (behandling som tidsvarierende endring innen enhet); grafisk intuisjon (to linjer, kontrafaktisk). Tospråklig begrepsbank: forskjell-i-forskjeller (difference-in-differences, DiD), interaksjonsledd (interaction term), parallelle trender (parallel trends), kontrafaktisk (counterfactual). Utledning: vis at $D\times T$-koeffisienten = $(\bar{y}_{beh,etter}-\bar{y}_{beh,før})-(\bar{y}_{kon,etter}-\bar{y}_{kon,før})$.
- **Oppgavesjangre:** G. Mønstereksempel: «Forklar hvordan en difference-in-differences-tilnærming identifiserer effekten av et tiltak, hvilken koeffisient som gir behandlingseffekten, og hvilken sentral forutsetning identifikasjonen hviler på.»
- **Typiske feil (analysen §5.10):** Glemme parallelle-trender-forutsetningen; behandle interaksjonsleddet som en vanlig koeffisient uten kausal tolkning; forveksle DiD-effekten med den rå etter–før-differansen.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 6.2: Stasjonaritet og ikke-stasjonaritet

- **id:** `sok3001-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok3001-1-1`
- **kapitteltype:** teori
- **description:** Hva en stasjonær tidsserie er, hvorfor ikke-stasjonaritet gir spuriøse regresjoner, og de enkleste botemidlene. Bør kjenne til.
- **Eksamensbelegg:** Stasjonær tidsserie er fast begreps-punkt (oppgave 1); ikke-stasjonaritet/spuriøs regresjon «bør kjenne». Prioritet: **kjenne**. Sjanger A, H.
- **Innholdskontrakt:** MÅ KUNNE DEFINERE: (svak) **stasjonaritet** — konstant forventning og varians, kovarians avhenger kun av tidsavstanden (ikke av tidspunktet); **ikke-stasjonaritet** (f.eks. random walk / enhetsrot) ⇒ **spuriøs regresjon** (spurious regression): to urelaterte trendende serier gir kunstig høy $R^2$ og «signifikante» koeffisienter; enkelt botemiddel: differensiering / inkludere trend; enhetsrot (unit root) og idéen bak en enhetsrottest (Dickey–Fuller) nevnes kort. Hold kompakt — «bør kjenne»-stoff, plasser etter kjernestoffet. Tospråklig begrepsbank: stasjonaritet (stationarity), ikke-stasjonaritet (non-stationarity), spuriøs regresjon (spurious regression), enhetsrot (unit root), random walk. Utledning: ikke krevd.
- **Oppgavesjangre:** A, H. Mønstereksempel: «Forklar hva som menes med en stasjonær tidsserie, og hvorfor regresjon av én ikke-stasjonær serie på en annen kan gi misvisende (spuriøse) resultater.»
- **Typiske feil:** Definere stasjonaritet som «konstant serie»; tro høy $R^2$ i trendende serier er ekte sammenheng; forveksle differensiering med detrending uten begrunnelse.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.3: Dynamiske modeller og laggede variable

- **id:** `sok3001-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `sok3001-6-2`, `sok3001-4-2`
- **kapitteltype:** teori
- **description:** Laggede forklaringsvariable og laggede avhengige variable — hvordan de fanger dynamikk, og fallgruvene når restleddet er seriekorrelert. Bør kjenne til.
- **Eksamensbelegg:** Dynamikk/laggede variable «bør kjenne» (tidsserie utover stasjonaritet). Prioritet: **kjenne**. Sjanger H.
- **Innholdskontrakt:** BØR KJENNE TIL: distribuerte lagg-modeller (laggede $x$-er, kort- vs. langtidsmultiplikator); **lagget avhengig variabel** ($y_{t-1}$ som regressor) og hvorfor OLS da blir **inkonsistent hvis restleddet er seriekorrelert** (regressoren korrelert med restleddet — bro til endogenitet, Del 2); kort om at seriekorrelasjonstester og botemidler (Del 4) er ekstra viktige her. Kompakt, «bør kjenne»-stoff. Tospråklig begrepsbank: distribuert lagg (distributed lag), lagget avhengig variabel (lagged dependent variable), kort-/langtidsmultiplikator (short-/long-run multiplier). Utledning: skisser hvorfor $y_{t-1}$ + seriekorrelasjon gir inkonsistens.
- **Oppgavesjangre:** H. Mønstereksempel: «En modell inkluderer $y_{t-1}$ som forklaringsvariabel. Forklar hvorfor OLS kan bli inkonsistent hvis restleddet er seriekorrelert, og koble det til endogenitetsbegrepet.»
- **Typiske feil:** Anta at lagget avhengig variabel alltid er uproblematisk; overse at seriekorrelasjon + lagget $y$ = endogenitet; blande korttids- og langtidseffekt.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 6.4: Simultane ligningsmodeller og identifikasjon

- **id:** `sok3001-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `sok3001-2-3`
- **kapitteltype:** teori
- **description:** Tilbud/etterspørsel som simultant system — hvorfor OLS er skjev, og hvordan identifikasjon (ordens-/rangbetingelse) og IV løser det. Bør kjenne til; motivasjonen bak IV.
- **Eksamensbelegg:** Simultane ligninger i eldre sett (V2016) og grunnlaget for IV-motivasjonen; «bør kjenne». Prioritet: **kjenne**. Sjanger B, E.
- **Innholdskontrakt:** BØR KJENNE TIL: et **simultant system** (f.eks. tilbud og etterspørsel bestemmer pris og mengde samtidig) ⇒ hver strukturligning har en endogen regressor ⇒ OLS skjev+inkonsistent (**simultanitetsskjevhet**); **identifikasjon** — ordensbetingelsen (order condition): en ligning er identifisert hvis antall ekskluderte eksogene variable ≥ antall endogene regressorer (kort om rangbetingelsen); **redusert form** løser for de endogene variablene i eksogene alene; kobling til IV/2SLS (Del 2) som estimeringsmetoden — dette kapitlet er den teoretiske motivasjonen bak instrumentet. Kompakt. Tospråklig begrepsbank: simultant ligningssystem (simultaneous equations model), simultanitetsskjevhet (simultaneity bias), identifikasjon (identification), ordensbetingelse (order condition). Utledning: vis at OLS på én strukturligning er skjev pga. simultanitet (skjematisk).
- **Oppgavesjangre:** B, E. Mønstereksempel: «I en enkel tilbud–etterspørsel-modell bestemmes pris og mengde simultant. Forklar hvorfor OLS på etterspørselsligningen er skjev, og hvordan en eksogen tilbudsskifter kan tjene som instrument.»
- **Typiske feil:** Overse at simultanitet er en endogenitetskilde; blande ordens- og rangbetingelse; tro at redusert form gir de strukturelle (kausale) parametrene direkte.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 6:** 4 prøver (`sok3001-6-prove`) — se §4.

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Begrepsdrill — oppgave 1 (definisjoner med formel)

- **id:** `sok3001-7-1` · **number:** 7.1 · **estimatedMinutes:** 70 · **prerequisites:** `sok3001-4-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på begrepsoppgaven (~20 % hvert sett): presise, poengterte definisjoner med matematisk uttrykk og kort intuisjon, fra den faste gjengangerlista.
- **Eksamensbelegg:** Oppgave 1 (~20 %) er «gratis» faste poeng når definisjonene sitter; trekker fra en fast liste. Prioritet: **perfekt** (billige, sikre poeng). Sjanger A.
- **Innholdskontrakt:** Løsningsoppskrift: hver definisjon = presis setning + formel der naturlig + én intuisjonssetning. **Gjennomskrevet mønstersett med sensor-margnotater** over hele gjengangerlista: seriekorrelert restledd ($\operatorname{cov}(u_t,u_s\mid x)\neq 0$), heteroskedastisk restledd ($\operatorname{Var}(u_i\mid x_i)=\sigma_i^2$), stasjonær tidsserie, målefeil, strukturform-ligning, konsistent estimator ($\operatorname{plim}\hat{\beta}=\beta$), instrumentrelevans/-eksogenitet, forventningsrett estimator, endogenitet, uobservert heterogenitet, marginaleffekt. 12–18 korte begrepsoppgaver på eksamensnivå (5–6 per «sett», roterer lista), alle med modellsvar.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort, med matematisk uttrykk der naturlig: (a) et heteroskedastisk restledd, (b) en konsistent estimator, (c) hva som kreves for at et instrument skal være gyldig, (d) en stasjonær tidsserie, (e) strukturform vs. redusert form.»
- **Typiske feil:** Definisjon uten formel der sensor forventer den; svare langt og upresist; blande relevans og eksogenitet i instrumentdefinisjonen.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 7.2: Tabelltolknings-drill — å lese regresjonsutskriften

- **id:** `sok3001-7-2` · **number:** 7.2 · **estimatedMinutes:** 80 · **prerequisites:** `sok3001-7-1`
- **kapitteltype:** drill
- **description:** Tverrgående sjangerdrill på selve tabellesningen: plukke ut riktig tall (elastisitet, første-stegs F, residual-t, SE) og bruke det i en test eller tolkning — den ferdigheten hver stor oppgave hviler på.
- **Eksamensbelegg:** Tabell-lesing er en egen ferdighet sensor tester i alle store oppgaver (§4.2). Prioritet: **perfekt** (tverrgående). Sjanger B, C, D, F.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser hva hver kolonne er (OLS/2SLS/første steg/redusert form/hjelperegresjon — IKKE forveksle hjelperegresjon med modellen); 2) les riktig tall fra riktig celle (estimat vs. SE i parentes); 3) regn ut det som trengs ($t=\hat{\beta}/\operatorname{SE}$, første-stegs $F$, elastisitet fra log-log-koeffisient); 4) bruk tallet i en test/tolkning; 5) formuler konklusjonen økonomisk. **Gjennomskrevet mønstercase med sensor-margnotater** på en rik flerkolonnetabell (OLS, første steg, 2SLS, hjelperegresjon side om side). 12–18 deloppgaver som roterer tabelltyper fra alle fire kjernesøylene.
- **Oppgavesjangre:** B, C, D, F. Mønstereksempel: «Fra tabellen: (a) hva er priselastisiteten i 2SLS-kolonnen? (b) er instrumentet svakt (les første-stegs F)? (c) test eksogenitet fra residualkoeffisientens t-verdi. (d) hvilken kolonne er en hjelperegresjon, og hvorfor skal den ikke tolkes som en økonometrisk modell?»
- **Typiske feil (analysen §5.8, §5.9):** Lese SE som t-verdi; glemme å dele koeffisient/SE; feil kritisk verdi (1,96 vs. tabellverdi); forveksle hjelperegresjon med modellen.
- **Quiz: 18 · Flashcards: 14**

#### Kapittel 7.3: Øvingseksamener med løsningsforslag

- **id:** `sok3001-7-3` · **number:** 7.3 · **estimatedMinutes:** 150 · **prerequisites:** `sok3001-7-2`
- **kapitteltype:** øvingseksamen
- **description:** To komplette 5-timers øvingseksamener i trestegs-malen, med fullstendige A-besvarelses-løsningsforslag og vektingsnotater slik sensor ser dem.
- **Eksamensbelegg:** Speiler den stabile trestegs-malen 2023–2025; ikke korona-hjemmeeksamen. Prioritet: **perfekt** (integrasjon). Sjanger A–H.
- **Innholdskontrakt:** **To komplette, nyskrevne øvingseksamener** (egne tall/kontekster), hver med trestegs-mal: oppgave 1 (~20 %, 5–6 definisjoner), oppgave 2 (~40–50 %, stor tabelloppgave — IV/2SLS, evt. + panel), oppgave 3 (~30–40 %, panel/diskret respons/DiD med hetero-/autokorr-diagnostikk). **Eksamen 1** speiler 20/50/30-varianten (IV-tung oppgave 2, panel-oppgave 3). **Eksamen 2** speiler 20/40/40-varianten (IV oppgave 2, diskret respons/behandlingseffekt oppgave 3). Hvert løsningsforslag i eget `collapsible` per oppgave, skrevet som A-besvarelse (diagnose → botemiddel → testprosedyre → økonomisk tolkning), med `tip`-notat om delpoeng/vekting. Temafordelingen speiler §2 (panel + IV tyngst).
- **Oppgavesjangre:** A–H (komplett). Mønstereksempel: en full oppgave 2 med tabell (OLS/første steg/2SLS), 5 deloppgaver som dekker endogenitetsargument → første steg/relevans → 2SLS-tolkning → eksogenitetstest → overidentifikasjon-eller-ikke.
- **Typiske feil:** Alle §5-feilene integrert; feil tidsprioritering (deloppgavene teller etter vekt); metode uten diagnose gjennom hele settet.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 7:** dekkes av øvingseksamenene (2 komplette sett) + begreps-/tabelldrill; ingen separat `sok3001-7-prove`.

---

## 4. Prøver (temaprøver)

Fire prøver per temadel 1–6 (`sok3001-<del>-prove`), chapterNumber `<del>.P`,
totalt **24 temaprøver**. Hver prøve = 8–12 nyskrevne flervalgs-/kortsvarsoppgaver
på delens stoff, stigende vanskelighet, med løsning. Del 7 dekkes av
øvingseksamenene og drill-kapitlene (ingen separat prøve).

| Prøve-id | Del | Fokus (4 prøver, stigende) |
|---|---|---|
| `sok3001-1-prove` | 1 | Gauss-Markov & BLUE → forventningsrett vs. konsistens → asymptotikk/plim → diagnose «hvilken forutsetning brytes» |
| `sok3001-2-prove` | 2 | Endogenitetskilder → instrumentkrav → 2SLS/redusert form → testbatteriet (relevans/eksogenitet/overident.) |
| `sok3001-3-prove` | 3 | FE/innen-transformasjon → RE/GLS → Hausman → fordeler/ulemper + tabelltolkning |
| `sok3001-4-prove` | 4 | Hetero (konsekvens/test) → robuste SE → autokorrelasjon → GLS/FGLS-valg |
| `sok3001-5-prove` | 5 | LPM (prosentpoeng/svakheter) → logit/probit → marginaleffekter → Tobit/seleksjon |
| `sok3001-6-prove` | 6 | DiD/parallelle trender → stasjonaritet/spuriøs → dynamikk/lagget $y$ → simultanitet/identifikasjon |

---

## 5. Kvotesammendrag (AUTORITATIV for alle senere faser)

Kvotene er skalert til fagets omfang og natur (regnefag med tungt tolknings-/
diagnoselag ⇒ moderat-høy flashcard-tetthet for begrepsapparatet, som er stort:
Gauss-Markov, IV-testbatteri, FE/RE, hetero/autokorr, diskret respons). Alle
kjernesøylekapitler (Del 1–4) bærer flest quiz/fc; påbyggings- og «bør kjenne»-
kapitler (Del 5–6) noe lavere; drill-/eksamenskapitler færre (integrasjon, ikke
nytt begrepsstoff).

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 Eksamenskart | 0.1 | 12 | 12 |
| 1 OLS-egenskaper | 1.1–1.4 | 90 | 78 |
| 2 Endogenitet/IV/2SLS | 2.1–2.5 | 128 | 102 |
| 3 Paneldata | 3.1–3.4 | 96 | 76 |
| 4 Hetero/autokorr | 4.1–4.3 | 72 | 58 |
| 5 Diskret respons | 5.1–5.4 | 84 | 70 |
| 6 Kausal design/tidsserie | 6.1–6.4 | 78 | 68 |
| 7 Eksamenstrening | 7.1–7.3 | 51 | 40 |
| **Sum** | **28 kap.** | **611** | **504** |

> **Quiz totalt: 611 (≥500 ✓) · Flashcards totalt: 504 (≥500 ✓).**
> Per-kapittel-kvotene i §3 summerer til disse tallene. Prøver: 24 temaprøver
> (4 per del 1–6) + 2 øvingseksamener (Del 7) = ≥4 prøver per temadel ✓.
> *(Kvotene er GULV; forfatter kan legge på ved behov, men aldri under
> per-kapittel-tallene i §3.)*

**Kontrollsum quiz per §3:** 12 + (26+26+20+18) + (26+26+28+28+20) + (28+26+24+18)
+ (28+26+18) + (24+24+20+16) + (22+20+18+18) + (18+18+15) = 12 + 90 + 128 + 96 + 72
+ 84 + 78 + 51 = **611**.
**Kontrollsum flashcards per §3:** 12 + (24+24+18+12) + (24+24+22+20+12) +
(24+22+18+12) + (24+22+12) + (20+20+18+12) + (18+18+16+16) + (16+14+10) = 12 + 78 +
102 + 76 + 58 + 70 + 68 + 40 = **504**.

---

## 6. Merknader til forfatter (Opus)

- **Notasjonen er Wooldridge-forankret** — bruk emnets/eksamenssettenes notasjon
  (§1), ikke lærebok-alternativer. Engelsk term i parentes ved første forekomst.
- **Diagnose før botemiddel** er den røde tråden — hvert metodekapittel må svare på
  hvilken forutsetning som brytes, konsekvensen (skjevhet/inkonsistens vs. bare
  effisiens/SE), botemiddelet og kostnaden.
- **Forventningsrett ≠ konsistent** og **relevans ≠ eksogenitet** er de to
  forvekslingene som avgjør A/B — hold dem knivskarpe overalt.
- **Hjelperegresjon ≠ estimert modell** (§5.9) — nevn skillet eksplisitt i 4.1,
  4.3 og 7.2.
- **Opphavsrett:** alle oppgaver er nyskrevne i sjangeren (endre tall, kontekst,
  variabelnavn); Wooldridge og sensorveiledninger er *grunnlag*, aldri ordrett.
- **Forkunnskaps-lenker:** verifiser i `_registry.json`/prod-server før lenking;
  ingen forkunnskapsbok (`sok1004`/`econ2130`/`econ3150`) er live i dag — beskriv
  i klartekst uten død lenke til de bygges.
- **Usikkerhet:** enkelte findetaljer i Hausman-teststatistikkens eksakte form og
  Tobit/Heckman-mekanikken er «bør kjenne»-stoff; hold på pensumnivå (Wooldridge)
  og marker eventuelle grensetilfeller *(verifiser)* ved bygging.
