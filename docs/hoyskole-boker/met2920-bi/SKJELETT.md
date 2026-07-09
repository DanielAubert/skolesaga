# Bokskjelett: MET 2920 Statistikk for økonomer — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (**fem komplette skoleeksamenssett** H2023, V2024, H2024, V2025 og H2025 fra
> Handelshøyskolen BIs eget MET 2920-arkiv, samt det utdelte **formelheftet**
> lest i sin helhet — **ingen offisiell sensorveiledning/fasit forelå**;
> sensorkravene er utledet fra oppgavetekstenes egne, uvanlig eksplisitte
> instruksjoner og fagets standardmetodikk). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Alle mønstereksempler i skjelettet er
> omskrivninger med **nyskrevne tallverdier og nyskrevne R-utskrifter**;
> forfatteren skal variere dem videre (nye tall, ny bedriftskontekst, nye
> R-tabeller), aldri kopiere inn ordrett.
>
> **Forbilder:** `docs/hoyskole-boker/met2910-bi/SKJELETT.md` (samme institusjon,
> samme eksamensform, søsterfag — «vis all utregning»-disiplinen og den kompakte,
> stegvise sensorstilen hentes derfra) og `econ2130`/`stk1100` (arketypen
> **«anvendt statistisk slutning»**: teori → oppskrift → økonomisk eksempel →
> oppgave med fullstendig, stegvis løsning). MET 2920 er kalibrert utelukkende
> mot **sin egen** analyse; UiO-fagene er struktur- og statistikkforbilder, ikke
> faglige forbilder — se «Avvik / BI-tilpasninger».
>
> **Evidensmerknad:** kun fem sett og ingen sensorveiledning. 5-oppgavemalen,
> slutningskjernen (KI + test for μ og p) og regresjon-sist er robust dokumentert
> (5/5); enkeltforekomster (kjikvadrat, hypergeometrisk trekning, R-kode-lesing,
> hånd-regnet regresjon) er indikatorer, ikke sikre mønstre — dekkes for bredde.
> Sensorkrav utledet fra oppgaveinstruksjonene er markert `(verifiser)` der
> presisjonen avhenger av en rettemal som ikke forelå.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `met2920-bi` |
| Tittel | **MET 2920 Statistikk for økonomer** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** (bachelor i økonomi og administrasjon; 7,5 ECTS, obligatorisk grunnleggende statistikkfag; søsterfag til MET 2910 Matematikk for økonomer) |
| Arketype | Regnefag — «anvendt statistisk slutning» med fast 5-oppgavemal, gjennomført bedriftsøkonomisk case-innramming og obligatorisk kontekst-tolkning |
| Antall kapitler | **33** (3 eksamenskart/håndverk/R-modul + 26 tema/drill + 4 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **≈ 1 830 min ≈ 31 timer** (uten prøver) |
| Quiz totalt | **531** (krav ≥500) |
| Flashcards totalt | **526** (krav ≥500) |

**Pitch (ett avsnitt):** MET 2920 er den statistiske slutningsverktøykassen under
hele BI-bacheloren i økonomi og administrasjon — den leverer estimering,
konfidensintervall, hypotesetesting og regresjon som metode-, markedsførings- og
finansfagene bygger videre på. Eksamen er en **3-timers skriftlig skoleeksamen
(MET 29201), 5 oppgaver à 5–12 poeng (~34–43 poeng totalt), karakter A–F**, bygd
rundt **ett gjennomgående datasett/case** (spørreundersøkelse, boligmarked,
bedriftsdata) med **BI-definert eksamenskalkulator og et utdelt formelhefte
(inntil 5 sider)** som eneste hjelpemidler. Fem temaer bærer *hvert eneste sett*
(100 %): enkel lineær regresjon + korrelasjon (alltid siste og tyngste), lesing
av R-utskrift, konfidensintervall for μ, hypotesetest for gjennomsnitt (én + to
grupper) og estimering/KI/test for andel. Faget er **oppskriftsdrevet, ikke
bevistungt** — ingen deriverte estimatorer, ingen forventningsrette-bevis, ingen
momentgenererende funksjoner. Boka mekaniserer slutningskjernen til et bredt
poenggulv, driller regresjonen i **to spor** (lese ferdig R-utskrift OG regne
minste kvadrat + residual standard error for hånd fra rådata), og — viktigst —
dresserer studenten i fagets to signaturregler: **all utregning skal vises** og
**null poeng for bare å forkaste/ikke forkaste** (tolkning i kontekst er
obligatorisk og poenggivende). De verbale, konseptuelle delene der toppkarakteren
avgjøres — korrekt KI-tolkning, type I-/type II-feil, dualitet KI↔test og fremfor
alt **korrelasjon vs. kausalitet/konfundering** — er en gjennomgående konseptakse,
ikke ettertanke.

**Kritisk sensorregel #1 — «Vis all utregning» (gjelder HELE boka).** På hvert
eneste sett står setningen (omskrevet): *«Det skal være tydelig for sensorene hva
du har regnet ut og hvordan; du må vise tilstrekkelige mellomregninger.»* Poeng
gis for **framgangsmåte** — formel → innsatte tall → referansefordeling (Z/t) med
frihetsgrader → tallsvar med enhet — ikke for bart svar. Konsekvens for boka:
(i) hvert løsningsforslag skrives som en A-besvarelse der **hvert steg vises på
egen linje** i den knappe, utregningsdrevne stilen; (ii) formelen fra heftet
skrives **eksplisitt ut før innsetting**; (iii) referansefordelingen og
frihetsgradene navngis alltid. Et riktig tall uten utregning gir lite. Hver
løsning kontraktfestes med føring; boka lærer **formelbruk**, aldri kalkulatorens
tastesekvenser (kalkulatoren nevnes kun som verktøy for å hente Z-/t-verdier).

**Kritisk sensorregel #2 — «Null poeng for bare å forkaste/ikke forkaste»
(gjelder ALLE tester og KI-tolkninger).** Ved *hver* hypotesetest kommer en egen
deloppgave «Konkluder …» med den eksplisitte advarselen (omskrevet): *«det gir nå
NULL poeng bare å si at du forkaster eller ikke forkaster nullhypotesen».*
**Tolkning i kontekst** — hva betyr resultatet for prisen/andelen/boligverdien/
effekten? — er obligatorisk og bærer poengene. Konsekvens: **hvert eneste
løsningsforslag i boka som ender i en test eller et estimat avsluttes med en
eksplisitt tolkningssetning i casets språk**, og hvert test-/KI-kapittel har en
kontraktfestet `warning`-blokk **«Tolk i kontekst»** om regelen. Dette er fagets
nest sterkeste enkeltsignal.

**Kritisk regel #3 — Formelhefte + kalkulator med innebygde fordelinger
(gjelder HELE boka).** Det utdelte **formelheftet** (deskriptive formler,
kombinatorikk, betinget sannsynlighet/total sannsynlighet/Bayes, KI- og
testformler for μ/differanse/andel, regresjonsformlene og residual standard
error) betyr at studenten **ikke skal pugge formlene**, men **velge riktig formel
og bruke den raskt og korrekt**. Kalkulatoren har **innebygde Z- og
t-fordelinger**: *«Det er tillatt å bruke kalkulatorens funksjonalitet for
sannsynlighetsfordelinger (Z-fordeling og t-fordeling). Du trenger ikke gjengi
tastetrykkene.»* → **Boka bruker ALDRI Z-/t-tabeller**; kritiske verdier,
kumulative sannsynligheter og inverse verdier hentes fra kalkulatoren. Boka lærer
i stedet **hvilken fordeling, hvilke frihetsgrader og hvilket kritisk/observert
tall** som skal brukes. Hvert delkapittels Symbol- og formelliste-blokk merker
«(på formelheftet)» der formelen står der, og «(må kunnes/velges selv)» ellers.

**Kritisk regel #4 — Case-innramming og obligatorisk tolkning (gjelder HELE
boka).** Hele eksamenssettet er bygd rundt ett gjennomgående datasett. Boka
speiler dette: kapitlene rammes inn i gjenkjennelige bedriftsøkonomiske case
(spørreundersøkelse blant studenter, solgte leiligheter, ansatte og et
opplæringsprogram, casino-/spillgevinst, returandeler) og **hvert svar tolkes i
casets språk**. Egne, tydelige avsnitt om **korrelasjon vs. kausalitet/
konfundering** og **korrekt KI-tolkning** løftes fram som det som skiller
toppkarakteren.

**Kritisk notasjonsregel (gjelder HELE boka).** Bruk emnets norske BI-notasjon:

- Utvalgsstørrelser: gjennomsnitt $\bar{x}$, utvalgsstandardavvik $s$,
  utvalgsvarians $s^2$, utvalgskovarians $S_{xy}$, korrelasjon $r$; andel
  $\hat{p} = X/n$; regresjonsestimater $\hat{\beta}_0$, $\hat{\beta}_1$.
  Populasjonsstørrelser: $\mu$, $\sigma$, $p$, $\beta_0$, $\beta_1$, $\rho$.
- Hypoteser $H_0$ og $H_A$ (ikke $H_1$); signifikansnivå $\alpha$; testobservator
  $Z$ eller $T$; frihetsgrader **df** (skriv «df = n − 1», «df = n − 2»,
  «df = (r − 1)(k − 1)»). $P$-verdi skrives «P-verdi».
- **Riktig referansefordeling er et selvstendig poeng:** $t$ (ikke $z$) for
  gjennomsnitt med ukjent $\sigma$ (df = n − 1); $z$ for andeler; df = n − 2 i
  regresjon; df = (r − 1)(k − 1) i kjikvadrat.
- **N(μ, σ²) — variansen som andre argument** når normalfordeling skrives med to
  argument (men i praksis oppgir settene $\sigma$ direkte; vær eksplisitt om
  hva som er oppgitt hver gang).
- R-utskrift i base-R `lm()`-format: kolonnene `Estimate`, `Std. Error`,
  `t value`, `Pr(>|t|)`, samt `Residual standard error`, `Multiple R-squared`,
  `F-statistic`. R-kode leses (`sd`, `mean`, `cor`, `length`, `setwd`,
  `read.csv`, `lm`) — den **skrives aldri** på eksamen.
- **Poeng** per oppgave (ikke vekttall) — MET 2920 skiller seg her fra MET 2910;
  Del 0 sier eksplisitt poeng, A–F, kalkulator + formelhefte, R-utskrift utdeles.
- **ALDRI** (0 forekomster i arkivet, bygges ikke ut — nevnes med én setning i
  Del 0 som «trygt fravær»): **ANOVA/variansanalyse, Poisson-fordeling, multippel
  regresjon** (all regresjon er enkel, én X), **forventningsrette-/effisiensbevis,
  momentgenererende funksjoner, deriverte tettheter**, ikke-parametriske tester,
  bootstrap, bayesiansk inferens som regneoppgave. **Betinget sannsynlighet/Bayes**
  står på formelheftet men er ikke testet i de fem settene → dekkes **kort**
  (kan komme).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke frekvens);
frekvensen styrer *omfanget*. `sectionNames` = den beskrivende tittelen per del
(vises som «Kapittel N: …» på bokforsiden).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart, «vis utregning»-håndverket og R-utskrift-lesing | 3 | — | Prioriteringsverktøyet + de to signaturreglene (vis all utregning; null poeng for bare å forkaste) + formelhefte-/kalkulatorhåndverket + **R-utskrift- og R-kode-lesemodulen** som resten refererer til. Kjerne i studieguiden. |
| 1 | Deskriptiv statistikk for hånd | 3 | KUNNE (fundament; hånd: PERFEKT) | Deskriptiv for hånd 40 % (H2025 O4, 12 p) — men **fundamentet under regresjonens hånd-spor** ($\bar{x}$, $s$, $S_{xy}$, $r$). Konseptaksen (korrelasjon ⇏ kausalitet) introduseres her. Teori + eget hånd-drillkapittel. |
| 2 | Sannsynlighet og kombinatorikk | 2 | KJENNE | Kombinatorikk/trekning 40 % (V2024 casino: hypergeometrisk vs. binomisk); betinget/total/Bayes på formelheftet men 0 testet → kort dekning for bredde. To kompakte kapitler. |
| 3 | Diskrete fordelinger og simultanfordeling | 4 | KUNNE (simultan: PERFEKT-nær) | **Diskret simultanfordeling 80 %** (nest mest stabile tema; fundamentet for Cov/Cor i regresjonen) → grundig modul + drill; binomisk 40 %. Teori + drill. |
| 4 | Normalfordeling og sentralgrenseteoremet | 2 | KUNNE | Normalfordeling 60 %, SGT 60 %, binomisk normaltilnærming 40 %. Standardisering, kalkulatorens Z, invers persentil, $\bar{X}\sim N(\mu,\sigma/\sqrt{n})$. |
| 5 | Estimering og konfidensintervall for μ | 2 | **PERFEKT (100 %)** | KI for μ 100 % — alltid med tolkning + bredde-drøfting. Slutningskjernens første halvdel. t-fordeling, s ukjent. **KI-tolkningsfellen** kontraktfestes her. |
| 6 | Hypotesetesting for gjennomsnitt | 4 | **PERFEKT (100 %)** | Hypotesetest for μ (én + to grupper) 100 %; type I/II-feil (konsept) + dualitet. Testens anatomi + ett-utvalgs t-test + to-utvalgs t-test (separate varianser) + drill. Fagets hovedmodul. |
| 7 | Andel: estimering, KI og test | 3 | **PERFEKT (100 %)** | Én andel (Wald-KI, z-test med p₀) 100 %; to andeler (pooled/upooled, dualitet) 60 %. Teori + drill. |
| 8 | Enkel lineær regresjon og korrelasjon | 5 | **PERFEKT (100 %) — STØRST** | **Signaturoppgaven** (100 %, alltid tyngst, 9–12 p). To spor: lese R-utskrift (4 sett) OG hånd fra rådata (H2025 O4). Konseptaksens klimaks: korrelasjon vs. kausalitet. Hånd + R-lesemal + slutning/residual + kausalitet-konsept + drill. |
| 9 | Kjikvadrattest for uavhengighet | 1 | KJENNE (lavfrekvent, komplett) | Kjikvadrat 20 % (H2023 O3 — eneste forekomst, men fullstendig). Dekkes komplett for bredde (kan komme igjen med bare 5 sett). |
| 10 | Eksamenstrening | 4 | — | Slutningskjede-sjangerguide/stordrill + **3 komplette øvingseksamener** (5 oppgaver, case, kalkulator + formelhefte + R-utskrift) som speiler den typiske 5-oppgavemalen. |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart, «vis utregning»-håndverket og R-utskrift-lesing |
| 1 | Deskriptiv statistikk for hånd |
| 2 | Sannsynlighet og kombinatorikk |
| 3 | Diskrete fordelinger og simultanfordeling |
| 4 | Normalfordeling og sentralgrenseteoremet |
| 5 | Estimering og konfidensintervall for μ |
| 6 | Hypotesetesting for gjennomsnitt |
| 7 | Andel: estimering, KI og test |
| 8 | Enkel lineær regresjon og korrelasjon |
| 9 | Kjikvadrattest for uavhengighet |
| 10 | Eksamenstrening |

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som
studentens sjekkliste — fra analysen §3):
`A` deskriptiv statistikk for hånd ($\bar{x}$, $s$, kvartiler, $S_{xy}$, $r$) ·
`B` sannsynlighet/kombinatorikk (betinget/total/Bayes; hypergeometrisk vs. binomisk trekning) ·
`C` diskret simultanfordeling ($E$, $\text{Var}$, $\text{Cov}$, $\text{Cor}$, uavhengighet) ·
`D` binomisk fordeling + normaltilnærming ·
`E` normalfordeling ($P$, invers persentil) + SGT ·
`F` konfidensintervall for μ (t, tolkning, bredde) ·
`G` hypotesetest for μ (én + to grupper, ensidig/tosidig) ·
`H` estimering/KI/test for andel (én + to) ·
`I` enkel lineær regresjon — **lese R-utskrift** (spor 1) ·
`J` enkel lineær regresjon — **hånd fra rådata** (spor 2) ·
`K` korrelasjon vs. kausalitet/konfundering (verbal drøfting) ·
`L` kjikvadrattest for uavhengighet ·
`M` R-utskrift-/R-kode-lesing (generelt: `sd`, `cor`, `length`, feilmeldinger) ·
`N` konseptflervalg (A/B/C/D om SGT, t-fordeling, type I/II-feil, dualitet KI↔test).

**Konseptakse gjennom hele boka (korrelasjon vs. kausalitet):** dette er analysens
fremste karakterdifferensiator (2/5, verbal) og trådes bevisst gjennom flere deler
— introdusert i kap. 1.2 (korrelasjon måler bare lineær samvariasjon, ikke
årsak), forsterket i kap. 3.2 (Cov = 0 ⇏ uavhengighet), og kulminert i det egne
konsept-kapitlet 8.4 (konfundering: balkong «forårsaker» ikke pris fordi
leiligheter med balkong også er større; opplæringsprogram-effekt vs. seleksjon;
mors alder og barnets IQ). Hvert regresjonskapittel har en `warning` om at
regresjon/korrelasjon aldri i seg selv beviser årsak.

**Avvik fra DNA-malen (dokumentert):**
1. **Del 0 har tre kapitler, ikke ett.** DNA legger opp til ett eksamenskart.
   MET 2920 får i tillegg (a) kap. 0.2, et rent **håndverk-kapittel** for fagets
   to signaturregler («vis all utregning» + «null poeng for bare å forkaste»),
   formelhefte-bruk og kalkulatorens Z-/t-fordeling — fordi disse reglene bærer
   poengene i *alle* sjangre og må etableres tidlig; og (b) kap. 0.3, en egen
   **R-utskrift- og R-kode-lesemodul** — et BI-særtrekk (R undervises, men eksamen
   deler ut ferdig utskrift som skal *tolkes*, og av og til R-kode som skal
   forklares). Å etablere disse standardene tidlig gjør resten billigere. Samme
   grep som MET 2910s kap. 0.2.
2. **Del 5 og 6 er splittet** (KI for μ / hypotesetest for μ), ikke slått sammen
   som i STK1100/ECON2130 der KI er kjedens ende. Grunnen er MET 2920s
   poengbudsjett: KI for μ **og** hypotesetest for μ er *separate* 100 %-temaer
   med hver sine deloppgaver på hvert sett (O2/O3), og to-utvalgs-testen er en
   egen tung ferdighet. Slutningskjernen (Del 5–7) er derfor bokas største
   sammenhengende blokk (9 kapitler) — det speiler at fem temaer bærer hvert
   sett.
3. **Del 8 (regresjon) er den største temadelen (5 kapitler)** — DNA lar
   frekvensen styre omfang, og regresjon er 100 % OG tyngst OG **to-sporet**
   (R-utskrift + hånd). De to sporene får hvert sitt kapittel (8.1 hånd, 8.2 lese
   R-utskrift), pluss et slutnings-/residualkapittel, konsept-kapitlet om
   kausalitet og et samlende drillkapittel.
4. **Del 8.4 låner drøftingselementer** fra DNA-drøfting (hybridregelen i
   README): korrelasjon vs. kausalitet/konfundering testes som **verbal** kritisk
   refleksjon — kapitlet har momentbank-preg (kausalitetsvokabular, konfunder-
   sjekkliste) i stedet for utledninger, men beholder regnefagets eksempel- og
   oppgavestruktur.
5. **Drillkapitlene ligger inne i temadelene sine** (1.3, 3.4, 6.4, 7.3, 8.5),
   ikke samlet i siste del — dette er 80–100 %-gjengangersjangre som må
   automatiseres rett etter teorien (samme grep som econ2130/met2910). Del 10
   beholder den ene **kryssgående** slutningskjede-stordrillen (10.1) og de tre
   øvingseksamenene.
6. **Kjikvadrat (Del 9) er en egen liten del** med ett komplett kapittel til
   tross for lav frekvens (20 %, én forekomst) — analysen understreker at med bare
   fem sett kan et hvilket som helst lavfrekvent tema komme igjen, og at H2023 O3
   var *fullstendig*; boka dekker derfor bredden.
7. **33 kapitler** — midt i DNA-vinduet (20–35), tett på econ2130 (35) og
   stk1100 (27). Faget er oppskriftsdrevet med moderat begrepsmengde, men de
   verbale/konseptuelle delene (KI-tolkning, type I/II, kausalitet) er
   flashcard-rike → flashcard-tettheten ligger bevisst litt over 500-gulvet.

**Kryssbok-lenker (forkunnskaper):** grunnleggende sannsynlighet, gjennomsnitt/
standardavvik og lineære funksjoner forutsettes fra VGS — lenk der det er naturlig
til eksisterende kapitler i S1/S2/R1-bøkene (sannsynlighet, statistikk, rette
linjer) med `[tittel](/bok/<courseId>/<chapterId>)`, og til BI-matte
(`met2910-bi`) for algebra/lineære funksjoner der den finnes. **Verifiser at
kapittel-id-en finnes før lenking** (BYGGEKONTRAKT-fasen slår opp id-ene mot
`textbook-courses-matte.ts`); lenk aldri til kapitler du ikke har verifisert.

Prosareferanser i innholdet bruker del-basert form («kap. 6.3», «se kap. 8.2»).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **KJENNE** (nivå 3). Hvert teorikapittel har (BYGGEKONTRAKT
detaljerer blokkene): Eksamensvinkel-`tip` med tallene herfra, Forkunnskaper-blokk
med kryssbok-lenker + `collapsible` Symbol- og formelliste per delkapittel (med
«(på formelheftet)»-merking), Motivasjon-`text`, definisjoner/regneprosedyrer som
`theorem`-blokker i emnets notasjon, 2–4 eksempler (siste på eksamensnivå, løst som
A-besvarelse med all utregning **og** avsluttende tolkningssetning i kontekst),
Typiske feil-`warning`, 6–12 øvinger med `solution` + `hints`, og en
`collapsible` med repetisjonsoppgaver. **Test-/KI-/regresjonskapitler har i
tillegg to kontraktfestede `warning`-blokker: «Vis utregning» og «Tolk i
kontekst».** KI-kapitlene (5.2, 7.1) og regresjon (8.2) har dessuten en
kontraktfestet **KI-tolkningsfelle-`warning`**.

---

### Del 0 — Eksamenskart, «vis utregning»-håndverket og R-utskrift-lesing

#### Kapittel 0.1: Eksamenskartet: slik testes MET 2920

- **id:** `met2920-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (3-timers skoleeksamen, 5 oppgaver / poeng / A–F, kalkulator + formelhefte + utdelt R-utskrift), den faste 5-oppgavemalen og case-dramaturgien, temafrekvensene, fraværsbildet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (5 sett + formelhefte). Skal gjengi: (i) **formen**: én skriftlig skoleeksamen, **3 timer, kl. 09**, **5 oppgaver à 5–12 poeng (~34–43 poeng totalt)**, karakter **A–F**, ingen midtveiseksamen; (ii) **hjelpemidler**: BI-definert eksamenskalkulator (+ enkel kalkulator fra V2025) med **innebygd Z-/t-fordeling** og **utdelt formelhefte (inntil 5 sider)**; ingen tabeller trengs; **R-utskrift deles ut og skal tolkes** (R skrives aldri); (iii) **den faste 5-oppgavemalen** (5/5 følger varianter): O1 sannsynlighetsblokk eller innledende konsept (diskret simultanfordeling / kombinatorikk-trekning / normal+binomisk+SGT / R-kode-lesing / konseptflervalg), O2 simultanfordeling eller normal/andel-blokk, O3 KI + hypotesetest for gjennomsnitt (én + to grupper), O4 estimering/KI/test for andel (én + ofte to), O5 (tyngst, 9–12 p) enkel lineær regresjon + korrelasjon (R-utskrift eller hånd fra rådata); (iv) **case-dramaturgien**: hele settet bygd rundt ett datasett (omskrevne case: studentundersøkelse, boligmarked, ansatte/opplæringsprogram, casino-gevinst, returandeler); (v) **temafrekvens-tabellen** (andel av 5 sett): regresjon/korrelasjon 100 %, lese R-utskrift 100 %, KI for μ 100 %, hypotesetest for μ (én + to) 100 %, andel (én) 100 %, diskret simultanfordeling 80 %, normalfordeling 60 %, SGT 60 %, to andeler 60 %, binomisk + normaltilnærming 40 %, deskriptiv for hånd 40 %, kombinatorikk 40 %, konseptflervalg 40 %, kausalitet/konfundering 40 %, t-fordeling som begrep 40 %, type I/II-feil 20 %, kjikvadrat 20 %, R-kode-forståelse 20 %, dualitet KI↔test 20 %; (vi) **fraværsbildet** — én setning: ANOVA, Poisson, multippel regresjon, estimatorbevis, momentgenererende funksjoner forekommer *aldri* (0/5) og kan trygt ligge; betinget sannsynlighet/Bayes er på heftet men ikke testet (dekkes kort); (vii) **sensorens metaregler** (fra oppgaveinstruksjonene — `(verifiser)`): vis all utregning (formel → tall → fordeling m/df → svar m/enhet); konkluder i kontekst (bare «forkaster/forkaster ikke» = null poeng); riktig fordeling og df; ensidig vs. tosidig etter formuleringen (halver tosidig P-verdi ved ensidig); (viii) **karakterskillene** (se Innholdskontrakt).
- **Innholdskontrakt:** Sjangerkatalogen `A–N` presenteres som studentens sjekkliste med frekvens og typisk plassering (hvilken av de 5 oppgavene). Karakterskille-listen (fra analysen §4): **bestått-sjiktet** henter poeng på den formelstyrte slutningskjernen (KI for μ og p, enkel test, avlesning av $\hat{\beta}_0/\hat{\beta}_1$ fra R-utskrift, $\hat{p} = X/n$); **midtsjiktet** fullfører to-utvalgstester (separate varianser), to-andels-KI/-test (pooled/upooled), full regresjonstolkning (KI for β₁, r, residual, SSE) og normal-/SGT-beregninger; **toppsjiktet** behersker de **konseptuelle** delene — korrekt KI-tolkning og bredde-drøfting, type I/II-feil, dualitet KI↔test, **kausalitet vs. konfundering** (verbal), hånd-regning av regresjon + residual standard error, kjikvadrat og R-kode-forståelse. Leseplan: Del 5–8 (slutningskjernen + regresjon) er «må perfekt»; Del 1, 3, 4 «må kunne»; Del 2, 9 «bør kjenne»; konseptaksen (korrelasjon vs. kausalitet, KI-tolkning, type I/II) markeres som toppkarakter-avgjørende. Avslutt med tidsstrategi: poengstyrt tidsbudsjett på 180 minutter (~36 min/oppgave; regresjonen sist og tyngst).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 5 oppgaver og ~40 poeng på 180 minutter, der O5 (regresjon) er tyngst — sett opp et tidsbudsjett» og «hvorfor gir en korrekt utregnet testobservator uten kontekst-tolkning likevel null poeng på konklusjonsdelen?».
- **Typiske feil:** Metafeilene: bruke tid på temaer som ikke testes (ANOVA, Poisson, multippel regresjon); øve kun regneteknikk og møte veggen på de verbale/konseptuelle delene (KI-tolkning, kausalitet, type I/II) der toppkarakteren avgjøres; tro at kalkulatoren/formelheftet erstatter utregning (det motsatte — føringen måles); glemme at «forkaster/forkaster ikke» alene = null poeng.
- **Quiz: 10 · Flashcards: 12** (form, 5-oppgavemal, frekvenser, metaregler, fraværsbilde)

#### Kapittel 0.2: «Vis all utregning» og «tolk i kontekst»: føringshåndverket, formelheftet og kalkulatorens Z-/t-fordeling

- **id:** `met2920-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `met2920-bi-0-1`
- **kapitteltype:** teori (metaregel)
- **description:** Fagets to signaturregler operasjonalisert: hvordan skrive ut utregningen slik sensor krever, hvordan alltid avslutte med en kontekst-tolkning (så deloppgaven ikke gir null poeng), hvordan bruke det utdelte formelheftet effektivt, og hvordan hente kritiske/kumulative verdier fra kalkulatorens innebygde Z- og t-fordeling uten tabeller.
- **Eksamensbelegg:** Metaregel-kapittel bygget på de to setningene som står øverst / gjentas på HVERT sett: *«du må vise tilstrekkelige mellomregninger»* og *«det gir null poeng bare å si at du forkaster eller ikke forkaster nullhypotesen»*. Fagets to sterkeste enkeltsignaler (typiske feil #1 og #2). Prioritet: **PERFEKT** (reglene bærer karakteren i alle sjangre).
- **Innholdskontrakt:** **(A) Føringsstandarden** (theorem-/prosedyre-blokk, gjenbrukes overalt): hvert løsningsforslag skrives som A-besvarelse — (1) skriv formelen fra heftet **eksplisitt ut** før innsetting; (2) sett inn tallene; (3) navngi **referansefordelingen (Z eller t) og frihetsgradene**; (4) tallsvar med **enhet**; (5) **tolkningssetning i casets kontekst**. To kontrastpar «samme statistikk, ulik føring» (én lav-uttellings- og én full-scorings-versjon: ett KI- og ett test-eksempel, med margnotater om hvor poengene sitter — og at bart svar/manglende tolkning gir null på delen). **(B) «Tolk i kontekst»-regelen** (kontraktfestet `warning` gjenbrukt i alle test-/KI-kapitler): etter *hver* test/estimat skriv hva resultatet betyr for det konkrete spørsmålet (pris/andel/effekt/boligverdi), ikke bare «forkaster $H_0$». Mal for tolkningssetningen: «Med $\alpha = 0{,}05$ forkaster vi $H_0$; datamaterialet gir altså grunnlag for å si at [gjennomsnittsprisen er høyere enn …/andelen overstiger …].» **(C) Formelheftet** (gjennomgang av hva som står der: deskriptive formler — median, kvartiler, variasjonsbredde, modus, $\bar{x}$, $s^2$, $s$, $S_{xy}$, $r$; kombinatorikk $\binom{n}{k}$; betinget/total sannsynlighet/Bayes; KI- og testformler for μ, differanse og andel; regresjonsformlene og **residual standard error**) og hva som IKKE står der og må velges/kunnes selv (hvilken fordeling og df; ensidig-halvering; p₀-i-standardfeilen-regelen; pooled/upooled-skillet). Poenget: **velg riktig formel raskt, sett inn, vis stegene**. **(D) Kalkulatoren uten tabeller** (prosedyre-blokk): kalkulatorens innebygde **Z-fordeling** gir $P(Z < z)$, $P(Z > z)$ og invers ($z$ for gitt haleareal); **t-fordelingen** gir $P(T < t)$, kritisk $t_{\alpha/2, \text{df}}$ og P-verdi ved gitt df — **ingen tabelloppslag**, tastetrykk gjengis ikke. Presiser: t for μ (σ ukjent), z for andel; velg df riktig.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under regner ut riktig testobservator $t = 2{,}41$, men skriver bare "vi forkaster $H_0$". Pek på de to føringsmanglene (referansefordeling/df ikke navngitt; ingen kontekst-tolkning) og skriv om til full uttelling for en boligprisdifferanse.»
- **Typiske feil:** Oppgi svar uten utregning (#1 — gir lite); skrive bare «forkaster/forkaster ikke» uten kontekst (#2 — null poeng); glemme å navngi fordeling/df; bruke z der t kreves (eller motsatt); tro at tastetrykk-referanse er en løsning.
- **Quiz: 14 · Flashcards: 26** (føringsregler, tolkningsmal, formelhefte-innhold, kalkulator-Z/t, fordelings-/df-valg — flashcard-gull)

#### Kapittel 0.3: R som verktøy: lese R-utskrift og forklare R-kode

- **id:** `met2920-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 40 · **prerequisites:** `met2920-bi-0-1`
- **kapitteltype:** teori (verktøymodul)
- **description:** BI-særtrekket: R undervises, men skrives aldri på eksamen — utskriften deles ut og skal tolkes, og av og til skal et stykke R-kode forklares konseptuelt. Kapitlet lærer den generelle anatomien i R-utskrift og hva de vanlige funksjonene gjør; den fulle `lm()`-tabellen får dybdebehandling i regresjonsdelen (kap. 8.2).
- **Eksamensbelegg:** Lesing/tolkning av R-utskrift i **5/5 sett (100 %)** (sjanger M/I); R-kode-forståelse som *egen* oppgave i 1/5 (V2025 O1: hva `sd`, `setwd`, `cor`, `length` gjør, fortegn på korrelasjon, hvorfor en linje ignoreres eller gir feilmelding). Prioritet: **PERFEKT** (utskrift-lesing) / KJENNE (R-kode-forklaring). Generell modul; `lm()`-dybden ligger i kap. 8.2.
- **Innholdskontrakt:** **(A) R-kode-vokabularet som skal LESES** (aldri skrives): `mean`, `sd` (standardavvik, ikke varians), `var`, `median`, `quantile`, `length` (antall observasjoner = n), `cor` (korrelasjon $r$, dimensjonsløs i $[-1, 1]$, fortegn = fortegn på samvariasjonen), `read.csv`, `setwd`/`getwd` (arbeidsmappe — påvirker ikke statistikken), `lm(y ~ x)` (regresjon), `summary`. For hver: hva den gjør, hva den returnerer, og hvordan svaret tolkes. **(B) Å forklare R-kode konseptuelt** (V2025 O1-typen): hvorfor en kommentarlinje (`#`) ignoreres; hvorfor en linje gir feilmelding (f.eks. feil objektnavn, manglende argument); at `cor` er symmetrisk og fortegnet følger stigningen; at `length` teller elementer. **(C) Anatomien i en utskrift** (generelt): hvordan lese en tabell med rader og navngitte kolonner, en `summary`-blokk (min/kvartiler/median/mean/maks), og at en `lm()`-tabell har koeffisientrader (`(Intercept)`, forklaringsvariabel) med kolonnene `Estimate`, `Std. Error`, `t value`, `Pr(>|t|)` pluss linjene `Residual standard error` og `Multiple R-squared` — **detaljert avlesning og tolkning kommer i kap. 8.2**, her bare oversikten så studenten kjenner strukturen. Nyskrevne, korte R-utskrifter (ikke ordrett fra arkivet).
- **Oppgavesjangre:** M. Mønstereksempel: «Forklar hva hver kommando gjør og hva den returnerer: `x <- salg$pris; length(x); sd(x); cor(salg$pris, salg$areal)`. Hvorfor endrer ikke `setwd("~/data")` noen statistisk verdi, og hvilken linje ville gitt feilmelding om `salg` ikke var lest inn?»
- **Typiske feil:** Tro at `sd` gir varians (det gir standardavvik); tro at `setwd` påvirker resultatene; lese `cor`-fortegnet feil vei; blande `length` (antall) med en sum; pugge kode i stedet for å kunne forklare hva hver linje gjør (forklaringen er poenget).
- **Quiz: 14 · Flashcards: 18**

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Deskriptiv statistikk for hånd *(prioritet: KUNNE — fundament for regresjonens hånd-spor)*

#### Kapittel 1.1: Sentraltendens og spredning for hånd

- **id:** `met2920-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-0-2`
- **kapitteltype:** teori
- **description:** Gjennomsnitt, median, kvartiler, variasjonsbredde, modus, varians og standardavvik regnet for hånd fra rådata med formelheftets formler — fundamentet under hånd-regnet regresjon (kap. 8.1) og all slutning.
- **Eksamensbelegg:** Deskriptiv statistikk for hånd i **2/5 sett (40 %)** — oftest *oppgitt* i settene, men regnes eksplisitt for hånd i H2025 O4 (12 p) og er **forutsetningen for hånd-sporet i regresjonen** ($\bar{x}$, $s$ inn i $\hat{\beta}_1$, $\hat{\beta}_0$). Formlene står på heftet. Prioritet: **KUNNE** (hånd-regningen: PERFEKT — den bærer H2025 O4).
- **Innholdskontrakt:** **Gjennomsnitt** $\bar{x} = \frac{1}{n}\sum x_i$; **median** og **kvartiler** $Q_1, Q_2, Q_3$ (posisjonsregel); **variasjonsbredde** ($\max - \min$) og **kvartilbredde** ($Q_3 - Q_1$); **modus**; **varians** $s^2 = \frac{1}{n-1}\sum (x_i - \bar{x})^2$ (utvalgsvarians med $n-1$) og **standardavvik** $s = \sqrt{s^2}$ — alle på formelheftet (theorem-blokker, merket «(på formelheftet)»). Regne-effektiv variant $s^2 = \frac{1}{n-1}\left(\sum x_i^2 - n\bar{x}^2\right)$. Tolkning: standardavvik som typisk avvik i samme enhet som dataene; median vs. gjennomsnitt som formsignal (median < gjennomsnitt → høyreskjev). Alt regnet for hånd med full føring på et lite datasett (8–12 observasjoner).
- **Oppgavesjangre:** A. Mønstereksempel: «Ti solgte leiligheter har kvadratmeterpriser (i 1000 kr): 62, 68, 71, 71, 74, 79, 83, 88, 95, 109. Regn for hånd ut gjennomsnitt, median, $Q_1$, $Q_3$, variasjonsbredde og standardavvik, og tolk standardavviket i kontekst.»
- **Typiske feil:** Bruke $n$ i stedet for $n-1$ i utvalgsvariansen; glemme å kvadrere avvikene; feil posisjon for kvartiler; oppgi varians der oppgaven ber om standardavvik (enhetsfeil); ikke tolke tallet i kontekst.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Kovarians, korrelasjon — og hva korrelasjon IKKE er

- **id:** `met2920-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-1-1`
- **kapitteltype:** teori
- **description:** Utvalgskovarians og korrelasjon regnet for hånd fra parvise data, tolkning av $r$ som styrke og retning — og den første stasjonen på konseptaksen: korrelasjon måler lineær samvariasjon, ikke årsak.
- **Eksamensbelegg:** Kovarians/korrelasjon for hånd er inngangen til regresjonens hånd-spor (H2025 O4) og fortegnsregelen $r = \pm\sqrt{R^2}$ i R-utskrift-sporet (100 %). Kausalitet/konfundering-drøfting i 2/5 (40 %) — introduseres her, kulminerer i kap. 8.4. Prioritet: **KUNNE** (regningen) + **konseptankeret** (PERFEKT, karakterdifferensiator).
- **Innholdskontrakt:** **Utvalgskovarians** $S_{xy} = \frac{1}{n-1}\sum (x_i - \bar{x})(y_i - \bar{y})$ (og regne-effektiv form $\frac{1}{n-1}(\sum x_i y_i - n\bar{x}\bar{y})$); **korrelasjon** $r = \frac{S_{xy}}{s_x s_y}$ — alle på formelheftet. Tolkning: $r$ er **dimensjonsløs** i $[-1, 1]$; fortegnet = retning på samvariasjonen; $|r|$ = styrke på den **lineære** sammenhengen; skille $r$ (dimensjonsløs) fra $S_{xy}$ (avhenger av enhetene). **Konseptankeret (kontraktfestet `warning`):** høy korrelasjon betyr IKKE årsak — den kan skyldes en tredje (konfunderende) variabel, tilfeldighet eller omvendt kausalretning; korrelasjon fanger heller ikke ikke-lineære sammenhenger. Denne warningen er første ledd i konseptaksen (forsterkes i 3.2, kulminerer i 8.4).
- **Oppgavesjangre:** A + K (intro). Mønstereksempel: «For seks bedrifter er (markedsføringsbudsjett $x$, salg $y$) gitt. Regn for hånd ut $S_{xy}$ og $r$, tolk fortegn og styrke — og forklar hvorfor en sterk positiv $r$ ikke i seg selv beviser at økt markedsføring *forårsaker* økt salg.»
- **Typiske feil:** Forveksle korrelasjon (dimensjonsløs) og kovarians (enhetsavhengig); bruke $n$ i stedet for $n-1$; feil fortegn på $S_{xy}$; **slutte fra korrelasjon til årsak** uten å vurdere konfundering; tro at $r = 0$ betyr «ingen sammenheng» (kan være sterk ikke-lineær).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Drill: deskriptiv statistikk fra rådata

- **id:** `met2920-bi-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `met2920-bi-1-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hånd-regnet deskriptiv statistikk fra et rådatasett — hele pakken $\bar{x}$, $s$, kvartiler, $S_{xy}$, $r$ som H2025 O4 krever, med full føring og tolkning.
- **Eksamensbelegg:** Sjanger A samlet (40 %, men fundamentet for regresjonens hånd-spor på 100 %). H2025 O4 (12 p) regner nettopp denne pakken for hånd før den bygger regresjonen på den. Prioritet: **PERFEKT** (som forberedelse til kap. 8.1).
- **Innholdskontrakt:** **Løsningsoppskrift** (DNA-drillformat): 1) sett opp en arbeidstabell ($x_i$, $y_i$, $x_i^2$, $y_i^2$, $x_i y_i$, avvik); 2) regn $\bar{x}$, $\bar{y}$; 3) regn $s_x$, $s_y$ via regne-effektiv formel; 4) regn $S_{xy}$; 5) regn $r$; 6) tolk hvert tall i kontekst. **Gjennomregnet eksamenscase** (H2025-typen) med sensor-margnotater om at arbeidstabellen ER føringen og at bart svar gir lite. 8–12 oppgaver på eksamensnivå med rådata (studentkarakterer, boligpriser, salgstall), alle med full føring; minst tre kobler $\bar{x}$, $s$, $S_{xy}$, $r$ sammen som direkte oppspill til regresjonen (kap. 8.1).
- **Oppgavesjangre:** A. Mønstereksempel: «Åtte ansatte har (opplæringstimer $x$, produktivitetsscore $y$). Sett opp arbeidstabellen og regn for hånd ut $\bar{x}$, $\bar{y}$, $s_x$, $s_y$, $S_{xy}$ og $r$. Tolk $r$.»
- **Typiske feil:** Hele §1-repertoaret i kjedet form: $n$ vs. $n-1$, glemt kvadrat, forvekslet kovarians/korrelasjon, manglende arbeidstabell (= manglende føring), ingen tolkning.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (1.A sentraltendens og spredning for hånd, sjanger A; 1.B kovarians og korrelasjon + fortegn/styrke-tolkning, A/K; 1.C korrelasjon vs. kausalitet — verbal konseptdrøfting, K; 1.D full deskriptiv-pakke fra rådata på eksamensnivå som oppspill til regresjon, A).

---

### Del 2 — Sannsynlighet og kombinatorikk *(prioritet: KJENNE)*

#### Kapittel 2.1: Betinget sannsynlighet, total sannsynlighet og Bayes

- **id:** `met2920-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `met2920-bi-0-2`
- **kapitteltype:** teori
- **description:** Betinget sannsynlighet, loven om total sannsynlighet og Bayes' setning fra formelheftet — dekket kort for bredde (på heftet, men ikke testet i de fem settene).
- **Eksamensbelegg:** Betinget sannsynlighet/total sannsynlighet/Bayes står på **formelheftet**, men er **0 testet** i de fem settene. Analysen: «kan komme; dekk kort». Prioritet: **KJENNE** (pensumbredde/beredskap).
- **Innholdskontrakt:** Betinget sannsynlighet $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ og multiplikasjonssetningen; **loven om total sannsynlighet** $P(A) = P(A \mid B)P(B) + P(A \mid B^c)P(B^c)$ (og med flere biter); **Bayes' setning** $P(B \mid A) = \frac{P(A \mid B)P(B)}{P(A)}$ med total sannsynlighet i nevneren — presentert som «snu betingingen»; uavhengighet $P(A \cap B) = P(A)P(B)$. Tre-diagram/kontingenstabell som løsningsverktøy. Alle formler merket «(på formelheftet)». Kompakt kapittel — bruk, ikke utledning. Anvendt innramming (test/kvalitetskontroll/kundesegment).
- **Oppgavesjangre:** B. Mønstereksempel: «En kvalitetstest oppdager 95 % av defekte enheter og gir falsk alarm hos 3 % av feilfrie. 2 % av produksjonen er defekt. En enhet får alarm — hva er sannsynligheten for at den faktisk er defekt? Kommenter tallet.»
- **Typiske feil:** Betinge feil vei ($P(A\mid B)$ brukt som $P(B\mid A)$); glemme total sannsynlighet i nevneren i Bayes; blande $P(A \cap B)$ og $P(A \mid B)$; anta uavhengighet uten belegg.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Kombinatorikk og trekning: hypergeometrisk vs. binomisk

- **id:** `met2920-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-2-1`
- **kapitteltype:** teori
- **description:** Trekning med og uten tilbakelegging — binomisk vs. hypergeometrisk — og forventet gevinst for å avgjøre hvilket spill som lønner seg (casino-sjangeren).
- **Eksamensbelegg:** Sannsynlighet/kombinatorikk (hypergeometrisk vs. binomisk trekning) i **2/5 sett (40 %)** — V2024 O1 (casino: med/uten tilbakelegging), H2023 O2 (binomisk). Forventet nettogevinst avgjør hvilket spill som «lønner seg». Prioritet: **KJENNE** (men kombinatorikk-skillet: KUNNE). NB: binomisk fordeling utdypes i kap. 3.3.
- **Innholdskontrakt:** **Kombinatorikk** $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ (på heftet). **Trekning uten tilbakelegging → hypergeometrisk** $P(X = r) = \frac{\binom{K}{r}\binom{N-K}{n-r}}{\binom{N}{n}}$; **med tilbakelegging → binomisk** $P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$. Skillelinjen med/uten tilbakelegging som avgjørende for modellvalg. **Forventet nettogevinst** $E(X) = \sum x \cdot P(x)$ for å avgjøre om et spill lønner seg (positiv/negativ forventning). Anvendt casino-/spillinnramming. Kobling framover: binomisk fordeling i kap. 3.3, simultanfordelingens $E(X)$ i kap. 3.1–3.2.
- **Oppgavesjangre:** B. Mønstereksempel: «Et spill trekker 3 kort fra en bunke på 20 der 6 er gevinstkort. (a) Hvis kortene trekkes uten tilbakelegging, hva er sannsynligheten for nøyaktig 2 gevinstkort? (b) Hvis hvert trekk legges tilbake, hvilken fordeling gjelder da? (c) Med gevinst 50 kr per gevinstkort og innsats 40 kr — lønner spillet seg?»
- **Typiske feil:** Bruke binomisk (med tilbakelegging) på trekning uten tilbakelegging; feil i $\binom{n}{k}$; glemme å multiplisere/summere over utfall i forventet gevinst; ikke konkludere om spillet lønner seg (tolkning).
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 2:** 4 prøver (2.A betinget sannsynlighet og multiplikasjonssetning, sjanger B; 2.B total sannsynlighet og Bayes med tre-diagram, B; 2.C hypergeometrisk vs. binomisk trekning — modellvalg, B; 2.D forventet gevinst — lønner spillet seg, B).

---

### Del 3 — Diskrete fordelinger og simultanfordeling *(prioritet: KUNNE; simultan: PERFEKT-nær)*

#### Kapittel 3.1: Diskrete stokastiske variabler: forventning og varians

- **id:** `met2920-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `met2920-bi-2-2`
- **kapitteltype:** teori
- **description:** Fra sannsynlighetsfordeling til de to tallene som oppsummerer den — forventning og varians — fundamentet under simultanfordelingen og alle senere forventningsberegninger.
- **Eksamensbelegg:** Fundamentet for den diskrete simultanfordelingen (80 %) og for forventet gevinst (40 %). Prioritet: **KUNNE** (bærebjelke i Del 3).
- **Innholdskontrakt:** Sannsynlighetsfordeling for en diskret variabel; **forventning** $E(X) = \sum x \cdot P(x)$ som tyngdepunkt; **varians** $\text{Var}(X) = E(X^2) - [E(X)]^2$ (regneformelen — aktivt) og $\text{SD} = \sqrt{\text{Var}}$; lineære regneregler $E(aX + b) = aE(X) + b$, $\text{Var}(aX + b) = a^2\text{Var}(X)$. Alt på/utledet fra heftet. Anvendt: forventet gevinst/tap, forventet etterspørsel. Kobling: simultanfordelingens $E(X)$, $E(Y)$, $E(XY)$ i kap. 3.2.
- **Oppgavesjangre:** C (fundament). Mønstereksempel: «Antall solgte forsikringer per dag har fordeling $P(0)=0{,}2$, $P(1)=0{,}4$, $P(2)=0{,}3$, $P(3)=0{,}1$. Finn $E(X)$, $\text{Var}(X)$ og standardavviket, og tolk standardavviket.»
- **Typiske feil:** Regne $E(X^2)$ som $[E(X)]^2$; glemme å kvadrere i variansen; enhetsfeil (varians vs. standardavvik); sannsynligheter som ikke summerer til 1.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.2: Diskret simultanfordeling: marginaler, kovarians og uavhengighet

- **id:** `met2920-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `met2920-bi-3-1`
- **kapitteltype:** teori
- **description:** Fra en simultantabell over $P(X=x, Y=y)$ til marginaler, $E(X+Y)$, $E(XY)$, kovarians, korrelasjon og en full uavhengighetssjekk — og konseptaksens andre stasjon: Cov = 0 beviser ikke uavhengighet.
- **Eksamensbelegg:** Diskret simultanfordeling i **4/5 sett (80 %)** — nest mest stabile tema (H2023, V2024, V2025, + H2025 O4 fra rådata). Anvendt innramming: casino-nettogevinst, pris×solgt volum, IQ-kategorier. Fundamentet for kovarians/korrelasjon i regresjonen. Prioritet: **KUNNE** (PERFEKT-nær — egen grundig modul).
- **Innholdskontrakt:** Simultanfordeling i tabell $P(X=x, Y=y)$; **marginalfordelinger** ved rad-/kolonnesum (og navngi fordelingstype); $E(X)$, $E(Y)$, $\text{Var}(X)$, $\text{Var}(Y)$; $E(X+Y) = E(X) + E(Y)$ (**gjelder alltid**); $E(XY) = \sum\sum xy\,P(x,y)$; **kovarians** $\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$; **korrelasjon** $\text{Cor}(X,Y) = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}$; $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$ ($= \text{Var}(X)+\text{Var}(Y)$ kun ved uavhengighet/null kovarians). **Uavhengighet** avgjøres ved å sjekke $P(X=x, Y=y) = P(X=x)\cdot P(Y=y)$ for **ALLE** celler (theorem-blokk). **Kontraktfestet `warning` (konseptakse):** $\text{Cov} \neq 0 \Rightarrow$ avhengige, men $\text{Cov} = 0 \nRightarrow$ uavhengige — bevis uavhengighet KUN via alle celler, aldri fra Cov = 0. Alle formler merket «(på formelheftet)» der de står.
- **Oppgavesjangre:** C. Mønstereksempel: «En simultantabell gir sannsynlighetene for (antall solgte enheter $X$, antall reklamasjoner $Y$). Finn marginalfordelingene, $E(X)$, $E(Y)$, $E(XY)$, $\text{Cov}(X,Y)$ og $\text{Cor}(X,Y)$, og avgjør med full begrunnelse om $X$ og $Y$ er uavhengige.»
- **Typiske feil:** «Bevise» uavhengighet fra Cov = 0 (bare avhengighet kan sluttes fra Cov ≠ 0); sjekke uavhengighet i bare én celle; bruke $\text{Var}(X+Y) = \text{Var}(X)+\text{Var}(Y)$ uten å sjekke Cov; forveksle kovarians og korrelasjon; feil marginalsum.
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 3.3: Binomisk fordeling

- **id:** `met2920-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `met2920-bi-3-1`
- **kapitteltype:** teori
- **description:** Binomisk fordeling fra forutsetninger til $P(X=k)$, $P(X\ge k)$ med komplement-triks, og $E(X)=np$, $\text{Var}(X)=np(1-p)$ — normaltilnærmingen for stor n kommer i kap. 4.2.
- **Eksamensbelegg:** Binomisk fordeling + normaltilnærming i **2/5 sett (40 %)** — H2023 O2, H2025 O1: $P(=k)$, $P(\ge k)$, normaltilnærming for stor n (≥250 av 350; ≥100 av 150). Prioritet: **KUNNE**.
- **Innholdskontrakt:** Forutsetningene for binomisk (fast antall $n$ uavhengige forsøk, to utfall, konstant $p$); $P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$ (på heftet); **komplement-omskrivingen** $P(X \ge k) = 1 - P(X \le k-1)$; $E(X) = np$, $\text{Var}(X) = np(1-p)$; andelen $\hat{p} = X/n$ som skalert binomisk (bro til Del 7). Diskret-grense-presisjon («færre enn k» = «$\le k-1$»). Normaltilnærming forhåndsvarsles (fullføres i kap. 4.2).
- **Oppgavesjangre:** D. Mønstereksempel: «12 % av utsendte pakker kommer i retur. Av 150 pakker: hvilken fordeling har antall returer, og hva er $E$ og $\text{Var}$? Finn sannsynligheten for flere enn 20 returer (bruk komplement).»
- **Typiske feil:** $P(X \ge k)$ regnet uten komplement-omskriving; «færre enn» oversatt feil for diskret variabel; glemme at andelen er skalert binomisk; feil i $\binom{n}{k}$.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.4: Drill: simultanfordelingen

- **id:** `met2920-bi-3-4` · **number:** 3.4 · **estimatedMinutes:** 70 · **prerequisites:** `met2920-bi-3-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på den 80 %-tilbakevendende simultanfordelingsoppgaven — hele pakken E, Var, E(X+Y), E(XY), Cov, Cor og uavhengighetsdom fra en tabell, med full føring.
- **Eksamensbelegg:** Sjanger C samlet (80 %). Prioritet: **KUNNE** (PERFEKT-nær; hyppig belønnet).
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) sjekk at alle sannsynligheter summerer til 1; 2) finn marginalene (rad-/kolonnesum); 3) $E(X)$, $E(Y)$, $\text{Var}(X)$, $\text{Var}(Y)$; 4) $E(XY)$; 5) $\text{Cov} = E(XY) - E(X)E(Y)$; 6) $\text{Cor}$; 7) uavhengighetssjekk i ALLE celler; 8) konkluder i ord. **Gjennomregnet eksamenscase** med sensor-margnotater (hvor poengene sitter; Cov = 0-fellen). 8–12 oppgaver på eksamensnivå med varierte case (nettogevinst i to spill, pris×volum, kategoritabeller), minst én der uavhengighet holder og én der Cov = 0 men variablene likevel er avhengige.
- **Oppgavesjangre:** C. Mønstereksempel: «To aksjers daglige gevinst $(X, Y)$ har en gitt simultantabell. Finn $\text{Cov}(X,Y)$ og $\text{Cor}(X,Y)$, avgjør uavhengighet, og forklar hva korrelasjonen betyr for en portefølje av de to.»
- **Typiske feil:** Hele §-repertoaret for simultanfordeling: Cov = 0-fellen, ufullstendig uavhengighetssjekk, forvekslet Cov/Cor, glemt kovariansledd i $\text{Var}(X+Y)$, manglende tolkning.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (3.A forventning og varians for diskret variabel, sjanger C; 3.B marginaler, E(X+Y), E(XY) og kovarians fra simultantabell, C; 3.C uavhengighet vs. Cov = 0 + binomisk fordeling, C/D; 3.D full simultanfordeling-oppgave på eksamensnivå, C).

---

### Del 4 — Normalfordeling og sentralgrenseteoremet *(prioritet: KUNNE)*

#### Kapittel 4.1: Normalfordelingen: standardisering, kalkulatorens Z og invers persentil

- **id:** `met2920-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-3-1`
- **kapitteltype:** teori
- **description:** Standardisering $Z=(X-\mu)/\sigma$, avlesning av kalkulatorens innebygde Z-fordeling (ingen tabell) og invers persentil for «topp x %»-spørsmål.
- **Eksamensbelegg:** Normalfordeling ($P(X>a)$, invers persentil) i **3/5 sett (60 %)** — H2023, H2024, H2025. Standardisering, kalkulatorens Z-fordeling, invers. Prioritet: **KUNNE**.
- **Innholdskontrakt:** Normalfordelingen kvalitativt (symmetri, klokkeform); **standardisering** $Z = \frac{X - \mu}{\sigma}$ (theorem-blokk); $P(X > a)$, $P(X < b)$, $P(a < X < b)$ via kalkulatorens **Z-fordeling** (ingen tabell — hent $P(Z < z)$ direkte); symmetriregelen $P(Z < -z) = 1 - P(Z < z)$; **invers persentil**: «hvor høyt for topp 1 %/laveste 10 %» → finn $z$ fra kalkulatorens inverse Z, deretter $x = \mu + z\sigma$. Anvendt: inntekt, boligpris, testscore. Ingen tabelloppslag noe sted.
- **Oppgavesjangre:** E. Mønstereksempel: «Månedslønnen i en bransje er normalfordelt med $\mu = 48\,000$ og $\sigma = 6\,000$ kr. (a) Hva er sannsynligheten for lønn over 55 000? (b) Hvilken lønn overstiges av de 5 % best betalte?»
- **Typiske feil:** Bruke variansen som $\sigma$ i standardiseringen (glemme roten); slurve med retningen ($P(X>x)$ vs. $P(X<x)$); glemme å gange $z$ med $\sigma$ og legge til $\mu$ i invers; lete etter en tabell i stedet for kalkulatoren.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 4.2: Sentralgrenseteoremet og normaltilnærming til binomisk

- **id:** `met2920-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-4-1`, `met2920-bi-3-3`
- **kapitteltype:** teori
- **description:** Hvorfor gjennomsnittet av mange observasjoner blir normalfordelt uansett utgangsfordeling, $\bar{X}\sim N(\mu, \sigma/\sqrt{n})$, og normaltilnærmingen til binomisk for stor n — broen til slutningen om μ og p.
- **Eksamensbelegg:** SGT (eksplisitt) i **3/5 sett (60 %)** — H2024 & H2025 flervalg + beregning; normaltilnærming til binomisk 40 %. SGT som formulering testes i flervalg (sjanger N). Prioritet: **KUNNE** (broen til Del 5–7).
- **Innholdskontrakt:** **Sentralgrenseteoremet:** utvalgsgjennomsnittet $\bar{X} \sim N(\mu, \sigma/\sqrt{n})$ for stor n uansett X-fordeling (theorem-blokk) — brukes til $P(\bar{X} < c)$; **standardfeilen** $\sigma/\sqrt{n}$ (og at større n gir mindre spredning). **Normaltilnærming til binomisk** $X \approx N(np, \sqrt{np(1-p)})$ for stor n (nevn tilnærmingsvilkåret og gjerne kontinuitetskorreksjon ±0,5). Broen til slutning: $\bar{X}$s normalfordeling er grunnlaget for KI og test for μ (Del 5–6); $\hat{p}$s normaltilnærming grunnlaget for andel (Del 7). Flervalg om korrekt SGT-formulering (sjanger N).
- **Oppgavesjangre:** E + N. Mønstereksempel: «Behandlingstiden per kunde har $\mu = 6$ og $\sigma = 4$ minutter (ukjent, skjev fordeling). (a) Hva er den tilnærmede sannsynligheten for at snittet av 64 kunder overstiger 7 minutter? Begrunn tilnærmingen. (b) Flervalg: hvilket utsagn om SGT er korrekt?»
- **Typiske feil:** Bruke $\sigma$ i stedet for $\sigma/\sqrt{n}$ (glemme $\sqrt{n}$-effekten); blande fordelingen til $X$ og til $\bar{X}$; bruke SGT ukritisk ved liten n; glemme tilnærmingsvilkår/kontinuitetskorreksjon ved binomisk.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 4:** 4 prøver (4.A standardisering og kalkulatorens Z-fordeling, sjanger E; 4.B invers persentil — «topp x %», E; 4.C sentralgrenseteoremet og $\bar{X}\sim N(\mu,\sigma/\sqrt{n})$ + flervalg, E/N; 4.D normaltilnærming til binomisk med vilkår, D/E).

---

### Del 5 — Estimering og konfidensintervall for μ *(prioritet: PERFEKT — 100 %)*

#### Kapittel 5.1: Estimering, t-fordelingen og standardfeil

- **id:** `met2920-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `met2920-bi-4-2`
- **kapitteltype:** teori
- **description:** Punktestimatet $\bar{x}$ for μ, hvorfor vi bruker t-fordelingen (ikke Z) når σ er ukjent, frihetsgrader df = n − 1, og standardfeilen $s/\sqrt{n}$ — grunnlaget for både KI og test for gjennomsnittet.
- **Eksamensbelegg:** Grunnlaget for KI for μ (100 %) og hypotesetest for μ (100 %). t-fordeling som eksplisitt begrep i 2/5 (40 %, H2024 O1c/O1f); ellers implisitt i alle KI/tester. Prioritet: **PERFEKT** (bærebjelke i slutningskjernen).
- **Innholdskontrakt:** Punktestimatet $\bar{x}$ for μ; **hvorfor t og ikke Z:** når $\sigma$ er ukjent og erstattes av $s$, følger $T = \frac{\bar{X} - \mu}{s/\sqrt{n}}$ en **t-fordeling med df = n − 1** (theorem-blokk) — tyngre haler enn normalen, nærmer seg Z for stor n; **standardfeilen** $\text{SE}(\bar{X}) = s/\sqrt{n}$. Kritisk t-verdi $t_{\alpha/2, \text{df}}$ hentes fra **kalkulatorens t-fordeling** (ingen tabell). Skillet: Z brukes for andeler (Del 7) og ved kjent σ; t for gjennomsnitt med ukjent σ. Merk at valget t vs. z og riktig df er et **selvstendig sensorpoeng**.
- **Oppgavesjangre:** F (fundament) + N. Mønstereksempel: «Et utvalg på n = 18 leiligheter har $\bar{x} = 74\,300$ kr/m² og $s = 8\,100$. Forklar hvorfor vi bruker t-fordelingen og med hvilke frihetsgrader, og regn ut standardfeilen til gjennomsnittet.»
- **Typiske feil:** Bruke Z i stedet for t for gjennomsnitt med ukjent σ; feil df (bruke n i stedet for n − 1); bruke $s$ i stedet for $s/\sqrt{n}$ som standardfeil; blande populasjons-σ og utvalgs-s.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 5.2: Konfidensintervall for μ: konstruksjon, tolkning og bredde

- **id:** `met2920-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `met2920-bi-5-1`
- **kapitteltype:** teori
- **description:** Bygg $\bar{x} \pm t_{\alpha/2,n-1}\cdot s/\sqrt{n}$, tolk det RIKTIG (konfidens, ikke sannsynlighet om μ) og drøft hvordan bredden endres med konfidensnivå og n — den ferdigheten toppkarakteren avgjøres på.
- **Eksamensbelegg:** Konfidensintervall for μ i **5/5 sett (100 %)** — 95 %/99 %, t-fordeling, s ukjent, **alltid med tolkning + bredde-drøfting**. Prioritet: **PERFEKT** (signaturferdighet + konseptuell KI-tolkning).
- **Innholdskontrakt:** **KI for μ** $\bar{x} \pm t_{\alpha/2, n-1}\cdot \frac{s}{\sqrt{n}}$ (theorem-blokk, på heftet); regn nedre/øvre grense med full føring. **KI-tolkningsfellen (kontraktfestet `warning`):** riktig tolkning er «vi er 95 % **konfidente** på at μ ligger mellom … og …» — IKKE «det er 95 % **sannsynlig** at μ ligger her» (μ er ikke tilfeldig; det er intervallet som varierer fra utvalg til utvalg). Denne warningen er en av bokas viktigste — feilen er den eneste KI-feilen analysen eksplisitt trekker for. **Bredde-drøfting** (theorem/prosedyre): bredden $= 2\cdot t_{\alpha/2,n-1}\cdot s/\sqrt{n}$; **lavere konfidensnivå → smalere** intervall (mindre $t$); **større n → smalere** (mindre $s/\sqrt{n}$; eneste vei når nivået er låst); høyere s → bredere. Alltid avsluttende tolkningssetning i casets kontekst («Vi er 95 % konfidente på at gjennomsnittlig kvadratmeterpris ligger mellom … og … kr»). Merk KI for μ med kjent σ kort (Z i stedet for t) som variant.
- **Oppgavesjangre:** F. Mønstereksempel: «Med $\bar{x} = 74\,300$, $s = 8\,100$, $n = 18$: lag et 95 %-konfidensintervall for gjennomsnittlig kvadratmeterpris, tolk det i kontekst, og forklar hva som skjer med bredden hvis du bruker 99 % i stedet, og hvis n dobles.»
- **Typiske feil:** **Feil KI-tolkning** — sannsynlighetsutsagn om μ i stedet for konfidensutsagn (#6, den eneste eksplisitt trukne KI-feilen); bruke Z i stedet for t; feil df; si at høyere konfidensnivå gir smalere intervall (motsatt); ingen kontekst-tolkning.
- **Quiz: 22 · Flashcards: 22**

**Prøve-kvote Del 5:** 4 prøver (5.A t-fordeling, df og standardfeil — hvorfor t og ikke Z, sjanger F/N; 5.B konstruksjon av KI for μ med full føring, F; 5.C korrekt KI-tolkning — konfidens vs. sannsynlighet (verbal), F/N; 5.D full KI-oppgave med bredde-drøfting på eksamensnivå, F).

---

### Del 6 — Hypotesetesting for gjennomsnitt *(prioritet: PERFEKT — 100 %)*

#### Kapittel 6.1: Hypotesetestens anatomi: kritisk verdi, P-verdi, ensidig/tosidig og type I/II-feil

- **id:** `met2920-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `met2920-bi-5-1`
- **kapitteltype:** teori
- **description:** Hele test-maskineriet én gang for alle: $H_0$/$H_A$, testobservator, forkastning via kritisk verdi ELLER P-verdi, ensidig vs. tosidig (og halveringsregelen), signifikansnivå, og type I-/type II-feil — malen alle senere tester følger.
- **Eksamensbelegg:** Testrammeverket brukes i **5/5 sett** (μ og andel). Ensidig/tosidig etter formuleringen, kritisk verdi + P-verdi (begge kreves i ulike sett). Type I-/type II-feil (begrep) i 1/5 (H2025 O3f–h flervalg, sjanger N) — men implisitt relevant i all testing. Prioritet: **PERFEKT** (rammeverket bærer alle tester).
- **Innholdskontrakt:** **Testoppskriften** (theorem-/prosedyre-blokk, gjenbrukes i 6.2, 6.3, 7.1, 7.2, 8.3): 1) sett opp $H_0$ og $H_A$; 2) velg signifikansnivå $\alpha$; 3) regn testobservatoren; 4) finn kritisk verdi ELLER P-verdi fra riktig fordeling (t/Z) og df; 5) **konkluder i kontekst**. **Ensidig vs. tosidig** styres av formuleringen («større enn»/«mindre enn» → ensidig; «forskjell fra» → tosidig); **halver den tosidige P-verdien ved ensidig test** (kontraktfestet regel). **Forkastning** to veier: (a) kritisk verdi — forkast hvis $|t| > t_{\text{krit}}$; (b) P-verdi — forkast hvis P-verdi $< \alpha$; «laveste signifikansnivå der vi forkaster» = P-verdien. **Type I-feil** = forkaste sann $H_0$ (sannsynlighet $\alpha$); **type II-feil** = beholde gal $H_0$ ($\beta$); samspillet (lavere α → høyere β), styrke = $1 - \beta$ (konseptuelt, flervalg-sjanger N). **Kontraktfestede `warning`-blokker: «Vis utregning»** og **«Tolk i kontekst»** (fra kap. 0.2).
- **Oppgavesjangre:** G + N (fundament). Mønstereksempel: «En bedrift hevder at gjennomsnittlig leveringstid er under 3 dager. (a) Sett opp $H_0$ og $H_A$ — ensidig eller tosidig? (b) Forklar hva en type I-feil vil bety her. (c) Flervalg: hvis vi senker α fra 0,05 til 0,01, hva skjer med sannsynligheten for type II-feil?»
- **Typiske feil:** Glemme å halvere tosidig P-verdi ved ensidig test (#9); feil retning på $H_A$; forveksle type I og type II; konkludere uten kontekst (#2, null poeng); blande kritisk-verdi- og P-verdi-metoden.
- **Quiz: 22 · Flashcards: 26** (testoppskrift, ensidig/tosidig, type I/II, P-verdi-logikk — flashcard-gull)

#### Kapittel 6.2: t-test for ett gjennomsnitt

- **id:** `met2920-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `met2920-bi-6-1`
- **kapitteltype:** teori
- **description:** Ett-utvalgs t-test $t=(\bar{x}-\mu_0)/(s/\sqrt{n})$, df = n − 1, ensidig og tosidig, konklusjon via kritisk verdi eller P-verdi — alltid tolket i kontekst.
- **Eksamensbelegg:** Del av hypotesetest for gjennomsnitt (100 %). Ett-utvalgs t-test med df = n − 1, ensidig («større enn») og tosidig. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Ett-utvalgs t-test** $t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$, df = n − 1 (theorem-blokk, på heftet); sett $\mu_0$ fra $H_0$; ensidig/tosidig etter formuleringen; kritisk $t_{\alpha, n-1}$ (ensidig) eller $t_{\alpha/2, n-1}$ (tosidig) fra kalkulatoren, evt. P-verdi (halvert ved ensidig). Full føring per kap. 0.2, avsluttende tolkningssetning. Kontraktfestet **«Tolk i kontekst»**-`warning`.
- **Oppgavesjangre:** G. Mønstereksempel: «Et utvalg på 20 boliger har $\bar{x} = 74\,300$ kr/m², $s = 8\,100$. Tidligere lå snittet på 71 000. Test på 5 %-nivå om gjennomsnittsprisen har økt (ensidig). Konkluder i kontekst.»
- **Typiske feil:** Bruke Z i stedet for t; feil df; ensidig/tosidig-forveksling og glemt halvering; konklusjon uten kontekst (null poeng); regne uten å navngi fordeling/df.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.3: To-utvalgs t-test (separate varianser) og KI for differansen

- **id:** `met2920-bi-6-3` · **number:** 6.3 · **estimatedMinutes:** 60 · **prerequisites:** `met2920-bi-6-2`
- **kapitteltype:** teori
- **description:** Sammenlign to grupper: to-utvalgs t-test med separate varianser $t=(\bar{x}_1-\bar{x}_2)/\sqrt{s_1^2/n_1+s_2^2/n_2}$, og konfidensintervall for differansen $\mu_1-\mu_2$ — ensidig og tosidig, alltid tolket.
- **Eksamensbelegg:** To-grupper-testen er del av hypotesetest for μ (100 %) og nesten fast plass i O3: to-utvalgs t-test med **separate varianser**, KI for $\mu_1 - \mu_2$, ensidig («større enn») og tosidig («forskjell»). Prioritet: **PERFEKT** (midtsjikt-skille, tung ferdighet).
- **Innholdskontrakt:** **To-utvalgs t-test, separate varianser** $t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_1^2/n_1 + s_2^2/n_2}}$ (theorem-blokk, på heftet); **KI for differansen** $(\bar{x}_1 - \bar{x}_2) \pm t\cdot\sqrt{s_1^2/n_1 + s_2^2/n_2}$; hypoteser $H_0: \mu_1 = \mu_2$ mot ensidig/tosidig; frihetsgrader (bruk oppgavens/kalkulatorens df — Welch; presiser at df ofte oppgis eller tilnærmes, `(verifiser)` hvilken df-regel BI forventer). Konklusjon via kritisk verdi eller P-verdi, alltid med tolkningssetning om hva forskjellen betyr (f.eks. «gruppene med og uten opplæring skiller seg …»). Konseptmerknad: en signifikant gruppeforskjell er ikke i seg selv en kausal effekt hvis gruppene ikke er randomisert (bro til kap. 8.4 — seleksjon).
- **Oppgavesjangre:** G. Mønstereksempel: «Leiligheter med balkong ($n_1 = 40$, $\bar{x}_1 = 78\,000$, $s_1 = 9\,000$) mot uten ($n_2 = 55$, $\bar{x}_2 = 71\,500$, $s_2 = 8\,200$). Test på 5 %-nivå om balkong-leiligheter er dyrere per m² (ensidig), og lag et 95 %-KI for differansen. Tolk begge — og kommenter om testen alene beviser at balkong *forårsaker* høyere pris.»
- **Typiske feil:** Blande separate og sammenslåtte (pooled) varianser; feil df; ensidig/tosidig-forveksling; konkludere kausalt fra en gruppeforskjell uten randomisering; ingen kontekst-tolkning.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.4: Drill: KI og test for μ (én + to grupper) og dualitet KI↔test

- **id:** `met2920-bi-6-4` · **number:** 6.4 · **estimatedMinutes:** 70 · **prerequisites:** `met2920-bi-6-3`, `met2920-bi-5-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele μ-slutningen — KI, ett-utvalgs test og to-utvalgs test kjedet slik O2/O3 står på settet, pluss dualiteten mellom KI og test, alt tolket i kontekst.
- **Eksamensbelegg:** Dekker sjanger F (100 %) og G (100 %) samlet — slutningskjernens tyngste sammenhengende oppgave. Dualitet KI↔test i 1/5 (H2024, sjanger N), konseptuelt relevant i alle sett. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift** for μ-oppgaven: 1) identifiser om det er ett eller to utvalg; 2) velg t, riktig df, standardfeil; 3) KI: $\bar{x} \pm t\cdot\text{SE}$ med tolkning + bredde; 4) test: $H_0/H_A$, testobservator, kritisk/P-verdi, konkluder i kontekst; 5) **dualitet**: et tosidig KI på nivå $1-\alpha$ og en tosidig test på nivå $\alpha$ gir samme svar — forkast $H_0: \mu = \mu_0$ hvis og bare hvis $\mu_0$ ligger utenfor KI-et. **Gjennomregnet eksamens-O3** (KI for μ + to-utvalgs test) med sensor-margnotater om føring, fordeling/df og at bar konklusjon = null poeng. 8–12 oppgaver på eksamensnivå som roterer ett-/to-utvalg, ensidig/tosidig, kritisk verdi/P-verdi, alle med kontekst-tolkning; minst én ren dualitets-oppgave.
- **Oppgavesjangre:** F + G + N. Mønstereksempel: «(a) Lag et 95 %-KI for gjennomsnittlig kundetilfredshet. (b) Test tosidig på 5 %-nivå om snittet avviker fra måltallet 4,0. (c) Vis hvordan svaret i (b) kan leses direkte av KI-et i (a).»
- **Typiske feil:** Hele §-repertoaret for μ-slutning: Z/t-forveksling, feil df, ensidig/tosidig-halvering, separate/pooled-varians, KI-tolkningsfellen, manglende kontekst-konklusjon, feil dualitets-resonnement.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (6.A testens anatomi — $H_0/H_A$, ensidig/tosidig, type I/II (verbal + flervalg), sjanger G/N; 6.B ett-utvalgs t-test med kontekst-konklusjon, G; 6.C to-utvalgs t-test (separate varianser) + KI for differanse, G; 6.D full μ-slutningsoppgave (KI + test + dualitet) på eksamensnivå, F/G/N).

---

### Del 7 — Andel: estimering, KI og test *(prioritet: PERFEKT — 100 %)*

#### Kapittel 7.1: Én andel: punktestimat, Wald-KI og z-test med p₀

- **id:** `met2920-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-6-1`
- **kapitteltype:** teori
- **description:** $\hat{p}=X/n$, Wald-konfidensintervall med tolkning, og z-testen for én andel der standardfeilen bruker hypoteseverdien $p_0$ — ensidig/tosidig og «laveste signifikansnivå».
- **Eksamensbelegg:** Estimering, KI og test for én andel i **5/5 sett (100 %)** — $\hat{p} = X/n$; Wald-KI; z-test med $p_0$ i standardfeilen; ensidig («flertall/mer enn 50 %», «mindre enn 65 %») med P-verdi og «laveste signifikansnivå» (H2025 O2g). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Punktestimat $\hat{p} = X/n$; **Wald-KI** $\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$ (theorem-blokk, på heftet) med kontekst-tolkning (og samme konfidens-vs-sannsynlighet-presisjon som kap. 5.2); **z-test for én andel** $z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}$ — **bruk hypoteseverdien $p_0$ (ikke $\hat{p}$) i standardfeilen** (kontraktfestet `warning`: testen betinger på at $H_0$ er sann); ensidig/tosidig; P-verdi fra kalkulatorens Z; **«laveste signifikansnivå der vi forkaster» = P-verdien**. Z (ikke t) for andeler. Avsluttende tolkningssetning i kontekst.
- **Oppgavesjangre:** H. Mønstereksempel: «I en spørreundersøkelse svarer 128 av 210 studenter ja. (a) Lag et 95 %-KI for andelen ja og tolk det. (b) Test på 5 %-nivå om et flertall (mer enn 50 %) svarer ja. (c) Hva er laveste signifikansnivå der du ville forkastet?»
- **Typiske feil:** Bruke $\hat{p}$ i stedet for $p_0$ i teststandardfeilen (#4); bruke t i stedet for Z for andel; feil KI-tolkning; glemme ensidig-halvering; ingen kontekst-konklusjon.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.2: To andeler: KI (upooled) og test (pooled), differanse og dualitet

- **id:** `met2920-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-7-1`
- **kapitteltype:** teori
- **description:** Sammenlign to andeler: KI for differansen $p_1-p_2$ med upooled standardfeil, test $H_0: p_1=p_2$ med pooled andel, og dualiteten mellom KI og test — den vanligste ekstra-ferdigheten i andelsoppgaven.
- **Eksamensbelegg:** KI og test for to andeler (differanse $p_1 - p_2$) i **3/5 sett (60 %)** — V2024, H2024, V2025; **pooled til test, upooled til KI**; dualitet til KI eksplisitt (H2024 O4e). Prioritet: **PERFEKT** (60 %, men fast i andelsoppgaven).
- **Innholdskontrakt:** $\hat{p}_1$, $\hat{p}_2$; **KI for differansen (upooled)** $(\hat{p}_1 - \hat{p}_2) \pm z_{\alpha/2}\sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1} + \frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$; **test $H_0: p_1 = p_2$ med pooled andel** $\hat{p} = \frac{X_1 + X_2}{n_1 + n_2}$, $z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})(1/n_1 + 1/n_2)}}$ (theorem-blokker, på heftet). **Kontraktfestet `warning`: pooled til TEST, upooled til KI — vær konsekvent og vis hvilken.** **Dualitet KI↔test:** forkast $H_0: p_1 = p_2$ (tosidig) hvis og bare hvis 0 ligger utenfor KI-et for differansen. Kontekst-tolkning alltid.
- **Oppgavesjangre:** H. Mønstereksempel: «Av 210 kvinnelige studenter svarer 128 ja, av 180 mannlige 96. (a) Lag et 95 %-KI for differansen i ja-andel. (b) Test tosidig på 5 %-nivå om andelene er ulike (pooled). (c) Stemmer testkonklusjonen med KI-et?»
- **Typiske feil:** Blande pooled og upooled standardfeil mellom test og KI (#5); bruke t i stedet for Z; feil dualitets-resonnement; ingen kontekst-konklusjon.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.3: Drill: andelsslutning (én + to)

- **id:** `met2920-bi-7-3` · **number:** 7.3 · **estimatedMinutes:** 65 · **prerequisites:** `met2920-bi-7-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele andelsoppgaven (O4) — én andel (Wald-KI + z-test med p₀) og to andeler (pooled/upooled + dualitet), med full føring og kontekst-tolkning.
- **Eksamensbelegg:** Dekker sjanger H samlet (én andel 100 %, to andeler 60 %) — hele O4. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) $\hat{p} = X/n$; 2) KI (Wald, evt. differanse upooled) med tolkning; 3) test: $H_0/H_A$, riktig standardfeil ($p_0$ for én andel; pooled for to), Z-observator, P-verdi/kritisk verdi, konkluder i kontekst; 4) dualitet der relevant; 5) «laveste signifikansnivå» = P-verdien. **Gjennomregnet eksamens-O4** med sensor-margnotater om $p_0$-vs-$\hat{p}$-fellen og pooled/upooled-skillet. 8–12 oppgaver på eksamensnivå (returandel, ja-andel i undersøkelse, andel med balkong), ensidig/tosidig, én og to andeler.
- **Oppgavesjangre:** H. Mønstereksempel: «(a) Test om returandelen overstiger 10 % (én andel, ensidig). (b) Sammenlign returandel for to leverandører med KI for differansen og en pooled test. (c) Tolk begge i kontekst.»
- **Typiske feil:** $p_0$-vs-$\hat{p}$-fellen, pooled/upooled-blanding, t-i-stedet-for-Z, ensidig-halvering, manglende kontekst-konklusjon.
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A punktestimat + Wald-KI for én andel, sjanger H; 7.B z-test for én andel med p₀ + «laveste signifikansnivå», H; 7.C to andeler — KI upooled + test pooled + dualitet, H; 7.D full andelsoppgave (O4) på eksamensnivå, H).

---

### Del 8 — Enkel lineær regresjon og korrelasjon *(prioritet: PERFEKT — 100 %, STØRST, to spor)*

#### Kapittel 8.1: Regresjonsmodellen og minste kvadraters metode for hånd (spor 2)

- **id:** `met2920-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 65 · **prerequisites:** `met2920-bi-1-2`
- **kapitteltype:** teori
- **description:** Modellen $Y=\beta_0+\beta_1 X+\varepsilon$, og minste kvadraters estimater regnet FOR HÅND fra rådata: $\hat{\beta}_1=S_{xy}/s_x^2=r\cdot s_y/s_x$ og $\hat{\beta}_0=\bar{y}-\hat{\beta}_1\bar{x}$ — hånd-sporet (H2025 O4).
- **Eksamensbelegg:** Regresjon er signaturoppgaven (100 %, alltid tyngst). Spor 2 — **regne minste kvadrat for hånd fra rådata** — er H2025 O4 (12 p). Bygger direkte på deskriptiv-pakken (kap. 1.1–1.2). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Modellen** $Y = \beta_0 + \beta_1 X + \varepsilon$ (respons, forklaringsvariabel, feilledd; $\beta_1$ = forventet endring i $Y$ per enhets endring i $X$, $\beta_0$ = skjæring). **Minste kvadraters estimater** (theorem-blokk, på heftet): $\hat{\beta}_1 = \frac{S_{xy}}{s_x^2} = r\cdot\frac{s_y}{s_x}$, $\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x}$ — regnet **for hånd** fra en arbeidstabell (bygger på kap. 1.1–1.2s $\bar{x}$, $s_x$, $s_y$, $S_{xy}$, $r$). Tolkning av $\hat{\beta}_0$ og $\hat{\beta}_1$ i kontekst (enhet!); predikert verdi $\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x$. **Konseptmerknad (`warning`, konseptakse):** stigningstallet beskriver samvariasjon i dataene, ikke nødvendigvis en kausal effekt (bro til 8.4). Kobling: fortegnet på $r$ = fortegnet på $\hat{\beta}_1$ (utdypes i 8.3).
- **Oppgavesjangre:** J. Mønstereksempel: «Fra åtte ansatte med (opplæringstimer $x$, produktivitet $y$) har du regnet $\bar{x}=12$, $\bar{y}=64$, $s_x=4$, $s_y=11$, $r=0{,}72$. Finn $\hat{\beta}_1$ og $\hat{\beta}_0$ for hånd, skriv opp regresjonslinja, og tolk stigningstallet i kontekst.»
- **Typiske feil:** Bytte om $x$ og $y$ i $\hat{\beta}_1$; bruke $s_x$ i stedet for $s_x^2$; feil fortegn; regne $\hat{\beta}_0$ uten $\hat{\beta}_1\bar{x}$; tolke stigningstallet kausalt; glemme enheten.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 8.2: Lese R-utskrift: `lm()`-tabellen (spor 1)

- **id:** `met2920-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `met2920-bi-8-1`, `met2920-bi-0-3`
- **kapitteltype:** teori
- **description:** Den fulle lesemalen for en utdelt `lm()`-utskrift: hent $\hat{\beta}_0$, $\hat{\beta}_1$, standardfeil, t-verdi, P-verdi, residual standard error og $R^2$ fra riktig celle — spor 1, som fire av fem sett bygger regresjonen på.
- **Eksamensbelegg:** Lesing/tolkning av R-utskrift i **5/5 sett (100 %)**; regresjon via R-utskrift i 4 av 5 sett (H2023, V2024, H2024, V2025). `lm`-tabell: `Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`, `Residual standard error`, `Multiple R-squared`, `F-statistic`. Prioritet: **PERFEKT** (signaturferdigheten — den viktigste avlesningen i faget).
- **Innholdskontrakt:** **R-utskrift-lesemal** (theorem-/prosedyre-blokk — den sentrale i kapitlet): en `lm(y ~ x)`-tabell har to koeffisientrader — `(Intercept)` gir $\hat{\beta}_0$, forklaringsvariabel-raden gir $\hat{\beta}_1$ — med kolonnene **`Estimate`** (selve $\hat{\beta}$), **`Std. Error`** ($\text{SE}(\hat{\beta})$), **`t value`** ($= \text{Estimate}/\text{Std. Error}$) og **`Pr(>|t|)`** (tosidig P-verdi for $H_0: \beta = 0$). Under tabellen: **`Residual standard error`** ($\hat{\sigma}_e = \sqrt{\text{SSE}/(n-2)}$) med df = n − 2, og **`Multiple R-squared`** ($R^2$). Steg-for-steg: (1) les av $\hat{\beta}_0$, $\hat{\beta}_1$; (2) tolk dem i kontekst; (3) hent SE for KI/test i kap. 8.3; (4) $R^2$ = andel forklart variasjon; (5) $r = \pm\sqrt{R^2}$ med **fortegn lik $\hat{\beta}_1$** (kontraktfestet `warning`: positiv $r$ med negativt stigningstall er en klassisk felle). Alle R-utskrifter i kapitlet er **nyskrevne** (nye tallverdier). **Kontraktfestet KI-tolknings-/kausalitet-`warning`** som i 5.2/8.1.
- **Oppgavesjangre:** I. Mønstereksempel: «En utdelt `lm(pris ~ areal)`-utskrift viser `(Intercept) Estimate 210,4 Std. Error 44,1`, `areal Estimate 18,7 Std. Error 2,3 t value 8,13 Pr(>|t|) 3e-13`, `Residual standard error 63,2 on 189 degrees of freedom`, `Multiple R-squared 0,259`. Hent ut regresjonslikningen, tolk stigningstallet i kontekst, og finn korrelasjonen $r$ med riktig fortegn.»
- **Typiske feil:** Lese $\hat{\beta}_1$ fra feil rad (`(Intercept)` i stedet for X-raden); feil fortegn på $r$ (positiv der stigningstallet er negativt); forveksle `Std. Error` med `Residual standard error`; tolke $R^2$ som korrelasjon; kausal tolkning av stigningstallet.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 8.3: Slutning, residualer og residual standard error

- **id:** `met2920-bi-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `met2920-bi-8-2`
- **kapitteltype:** teori
- **description:** KI og test for stigningstallet $\beta_1$ (df = n − 2), residualen $e=y-\hat{y}$ for en observasjon, SSE og residual standard error både avlest fra R og regnet for hånd — og $R^2=r^2$.
- **Eksamensbelegg:** Del av regresjonssignaturen (100 %): KI for $\beta_1$, test $H_0: \beta_1 = 0$ (ofte ensidig — husk halvering av den tosidige R-P-verdien), residual $e = y - \hat{y}$, SSE/$s^2 = (\text{Residual standard error})^2$, **residual standard error for hånd** verifisert mot R (H2025 O4). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **KI for $\beta_1$** $\hat{\beta}_1 \pm t_{\alpha/2, n-2}\cdot\text{SE}(\hat{\beta}_1)$ og **test** $t = \frac{\hat{\beta}_1}{\text{SE}(\hat{\beta}_1)}$, df = **n − 2** (theorem-blokker, på heftet) — SE hentes fra R-utskriften eller regnes; ensidig test halverer den tosidige `Pr(>|t|)`. **Residual** $e = y - \hat{y}$ for en gitt observasjon; **SSE** $= \sum e^2$; **residual standard error** $\hat{\sigma}_e = \sqrt{\text{SSE}/(n-2)}$ — både avlest (`Residual standard error`) og **regnet for hånd** og verifisert (H2025-koblingen). $R^2 = r^2$ = andel forklart variasjon; konseptuell vri: «hvordan ville spredningsplottet sett ut om residual standard error var 0?» (alle punkter på linja). **Warning:** df = n − 2 (ikke n − 1) i regresjon; halver ensidig P-verdi.
- **Oppgavesjangre:** I + J. Mønstereksempel: «Med utskriften fra kap. 8.2 ($\hat{\beta}_1 = 18{,}7$, SE = 2,3, n = 191): (a) lag et 95 %-KI for $\beta_1$; (b) test ensidig på 5 %-nivå om arealet har positiv effekt på prisen; (c) en leilighet på 60 m² ble solgt for 1 500 — finn residualen; (d) forklar hva residual standard error 63,2 betyr.»
- **Typiske feil:** Feil df (n − 1 i stedet for n − 2); glemme å halvere ensidig P-verdi; forveksle SE($\hat{\beta}_1$) og residual standard error; regne residualen som $\hat{y} - y$; kausal tolkning.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 8.4: Korrelasjon vs. kausalitet og konfundering (konsept)

- **id:** `met2920-bi-8-4` · **number:** 8.4 · **estimatedMinutes:** 45 · **prerequisites:** `met2920-bi-8-1`
- **kapitteltype:** teori (konsept/drøfting)
- **description:** Konseptaksens klimaks: hvorfor en signifikant regresjon eller høy korrelasjon aldri i seg selv beviser årsak — konfundering, seleksjon og omvendt kausalitet, med casene fra arkivet.
- **Eksamensbelegg:** Kausalitet/konfundering-drøfting i **2/5 sett (40 %, verbal)** — V2025 O3g (balkong «forårsaker» ikke høyere pris — leiligheter med balkong er også større), H2023 O6i (mors alder og barnets IQ). Analysens fremste karakterdifferensiator. Prioritet: **PERFEKT** (toppkarakter avgjøres her; verbal — ingen regning).
- **Innholdskontrakt:** **Kausalitetsvokabularet** (definisjon-/momentbank-blokker): korrelasjon/regresjon måler **samvariasjon**, ikke årsak; **konfundering** (en tredje variabel påvirker både $X$ og $Y$ — balkong↔størrelse, opplæring↔motivasjon); **seleksjon** (gruppene sammenlignes ikke likt — hvem valgte opplæringsprogrammet?); **omvendt kausalitet**; **tilfeldig sammenheng**. **Sjekkliste for kausal påstand:** er det randomisert/kontrollert? finnes en plausibel konfunder? kan retningen være omvendt? **Kontraktfestet `warning` (bokas viktigste konseptregel):** en signifikant $\hat{\beta}_1$ eller høy $r$ betyr at $X$ og $Y$ samvarierer i dataene — for å hevde årsak trengs randomisering eller kontroll for konfundere. Knytt til to-utvalgstesten (kap. 6.3: gruppeforskjell ≠ effekt uten randomisering). Verbal drøftingsmal: identifiser påstanden → foreslå en konkret konfunder → forklar mekanismen → konkluder forsiktig.
- **Oppgavesjangre:** K. Mønstereksempel: «En regresjon viser at leiligheter med balkong i snitt selges for mer per m². En megler konkluderer: 'balkong øker kvadratmeterprisen'. Drøft kritisk — hvilken konfunderende variabel svekker den kausale tolkningen, og hvordan?»
- **Typiske feil:** Slutte fra korrelasjon/signifikans til årsak uten å vurdere konfundering (#12); ikke navngi en konkret konfunder; forveksle statistisk signifikans med praktisk/kausal betydning; konkludere skråsikkert der data kun er observasjonelle.
- **Quiz: 16 · Flashcards: 22** (kausalitetsvokabular, konfunder-sjekkliste, drøftingsmal — flashcard-gull)

#### Kapittel 8.5: Drill: den store regresjonsoppgaven (begge spor)

- **id:** `met2920-bi-8-5` · **number:** 8.5 · **estimatedMinutes:** 80 · **prerequisites:** `met2920-bi-8-3`, `met2920-bi-8-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på O5/O4-signaturoppgaven i BEGGE spor — full R-utskrift-tolkning OG hånd-regnet minste kvadrat + residual standard error fra rådata, avsluttet med korrekt tolkning og kausalitetsforbehold.
- **Eksamensbelegg:** Dekker regresjon (100 %, tyngst) i full bredde: spor 1 (lese R-utskrift, sjanger I), spor 2 (hånd fra rådata, sjanger J), slutning (KI/test for β₁), residual og residual standard error, korrelasjon med fortegn, og kausalitetsforbeholdet (K). Prioritet: **PERFEKT** (kryssgående; delens klimaks).
- **Innholdskontrakt:** **Løsningsoppskrift** for regresjonsoppgaven: 1) avgjør spor — er R-utskrift utdelt (spor 1) eller skal alt regnes fra rådata (spor 2)? 2) hent/regn $\hat{\beta}_0$, $\hat{\beta}_1$; 3) tolk i kontekst; 4) $r = \pm\sqrt{R^2}$ med riktig fortegn (spor 1) eller $r = S_{xy}/(s_x s_y)$ (spor 2); 5) KI og test for $\beta_1$ (df = n − 2, ensidig-halvering); 6) residual og residual standard error (avlest + hånd); 7) **kausalitetsforbehold**. **To gjennomregnede eksamenscase** — én ren R-utskrift (spor 1, nyskrevet tabell) og én ren hånd-regning fra rådata (spor 2, H2025-typen, 12 p) — begge med sensor-margnotater. 8–12 oppgaver på eksamensnivå fordelt på begge spor.
- **Oppgavesjangre:** I + J + K. Mønstereksempel (spor 2): «Fra ti boliger med (areal $x$, pris $y$): regn for hånd $\hat{\beta}_1$, $\hat{\beta}_0$, $r$, test tosidig om $\beta_1 = 0$ (df = n − 2), finn residualen for en gitt bolig og residual standard error — og drøft kort om areal *forårsaker* pris.»
- **Typiske feil:** Hele regresjonsrepertoaret: feil rad i R-utskriften, feil fortegn på $r$, df = n − 1 i stedet for n − 2, glemt ensidig-halvering, forvekslet SE og residual standard error, byttet $x$/$y$ i $\hat{\beta}_1$, manglende kausalitetsforbehold, ingen kontekst-tolkning.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A minste kvadraters metode for hånd + tolkning, sjanger J; 8.B lese `lm()`-utskrift (Estimate/SE/t/P/R²) + korrelasjon med fortegn, I; 8.C KI/test for β₁ (df = n − 2), residual og residual standard error, I/J; 8.D korrelasjon vs. kausalitet/konfundering (verbal) + full regresjonsoppgave, I/J/K).

---

### Del 9 — Kjikvadrattest for uavhengighet *(prioritet: KJENNE — lavfrekvent, komplett)*

#### Kapittel 9.1: Kjikvadrattest for uavhengighet i kontingenstabell

- **id:** `met2920-bi-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `met2920-bi-6-1`
- **kapitteltype:** teori
- **description:** Fra en kontingenstabell til forventede verdier, kriteriesjekk, $\chi^2=\sum(O-E)^2/E$, frihetsgrader $(r-1)(k-1)$ og konklusjon i kontekst — hele kjikvadratritualet.
- **Eksamensbelegg:** Kjikvadrattest for uavhengighet i **1/5 sett (20 %)** — H2023 O3, eneste forekomst, men fullstendig kontingenstabellanalyse. Med bare fem sett kan den komme igjen; dekkes komplett for bredde. Prioritet: **KJENNE** (men komplett når den kommer).
- **Innholdskontrakt:** **Kjikvadratritualet** (theorem-/prosedyre-blokk): (1) sett opp observerte verdier $O$ i kontingenstabellen; (2) regn **forventede** $E = \frac{\text{radsum}\cdot\text{kolonnesum}}{n}$; (3) **sjekk kriteriet** at forventet $\ge 5$ i cellene før testen kjøres (kontraktfestet `warning`); (4) $H_0$: variablene er uavhengige; (5) testobservator $\chi^2 = \sum\frac{(O-E)^2}{E}$; (6) **df = (r − 1)(k − 1)**, sammenlign med kritisk $\chi^2$ fra kalkulatoren (eller P-verdi); (7) **konkluder i kontekst**. Alle formler på heftet der de står. Avsluttende tolkningssetning om hva (u)avhengighet betyr for casen.
- **Oppgavesjangre:** L. Mønstereksempel: «En 2×3-tabell krysser kjønn mot foretrukket betalingsmåte for 300 kunder. Sjekk kriteriene, sett opp $H_0$, regn ut $\chi^2$ med df = (r − 1)(k − 1), og konkluder på 5 %-nivå om betalingsmåte avhenger av kjønn.»
- **Typiske feil:** Hoppe over kriteriesjekken (forventet ≥ 5) før testen (#14); feil forventede verdier (glemme rad×kolonne/n); feil df; konkludere uten kontekst (null poeng); regne $(O-E)^2$ uten å dele på $E$.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 9:** 4 prøver (9.A forventede verdier og kriteriesjekk i kontingenstabell, sjanger L; 9.B $\chi^2$-observator og df = (r − 1)(k − 1), L; 9.C full kjikvadrattest med kontekst-konklusjon, L; 9.D blandet lavfrekvent-oppgave — kjikvadrat + R-kode-/konseptinnslag for bredde, L/M/N).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Slutningskjede-stordrillen og sjangerguiden

- **id:** `met2920-bi-10-1` · **number:** 10.1 · **estimatedMinutes:** 90 · **prerequisites:** Del 1–9
- **kapitteltype:** drill
- **description:** Den kryssgående drillen på hele slutningsapparatet (KI + test for μ og p, regresjon, simultanfordeling) med sjangergjenkjenning — «hvilket verktøy, hvilken fordeling, hvilken df?» — og de konseptuelle vriene samlet.
- **Eksamensbelegg:** Dekker sjangrene A–N i sammenheng — slutningskjernen (F, G, H) og regresjon (I, J, K) er 100 %-gjengangere som må gjenkjennes raskt. Denne drillen kobler alle delene og kommer derfor sist. Prioritet: **PERFEKT** (kryssgående).
- **Innholdskontrakt:** **Sjangergjenkjennings-treet** (theorem/prosedyre): fra oppgavetekst til verktøy — gjennomsnitt + ukjent σ → t (df = n − 1); to gjennomsnitt → to-utvalgs t (separate varianser); andel → Z med $p_0$ (test) / Wald (KI); to andeler → pooled (test) / upooled (KI); tabell over $P(x,y)$ → simultanfordeling; R-utskrift/rådata + to variabler → regresjon (df = n − 2); kontingenstabell → kjikvadrat; «forårsaker/skyldes» → kausalitetsdrøfting. **Kryssgående konseptbank:** KI-tolkning (konfidens ≠ sannsynlighet), type I/II, dualitet KI↔test, ensidig-halvering, $p_0$-i-standardfeilen, pooled/upooled, fortegn på $r$, df-katalogen (n − 1 / n − 2 / (r − 1)(k − 1)), korrelasjon ⇏ kausalitet. **Gjennomregnet blandet oppgavesett** med sensor-margnotater om at hvert svar må vise utregning og tolkes i kontekst. 15+ blandede deloppgaver som roterer alle sjangre, hver med full føring og kontekst-konklusjon i fasit.
- **Oppgavesjangre:** A–N (samlet). Mønstereksempel: «For hver av åtte korte oppgavetekster: avgjør hvilket verktøy, hvilken fordeling og hvilke frihetsgrader som gjelder — før du regner.»
- **Typiske feil:** Feil verktøy-/fordelingsvalg under tidspress; hele feilkatalogen (§5) samlet: Z/t, df, ensidig-halvering, $p_0$-felle, pooled/upooled, KI-tolkning, fortegn på $r$, kausalitetssprang, manglende kontekst-konklusjon.
- **Quiz: 18 · Flashcards: 26** (sjangergjenkjenning + df-katalog + konseptbank — flashcard-gull)

#### Kapittel 10.2: Øvingseksamen 1: den typiske 5-oppgavemalen

- **id:** `met2920-bi-10-2` · **number:** 10.2 · **estimatedMinutes:** 180 · **prerequisites:** `met2920-bi-10-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett etter standardmalen: ett gjennomgående case (boligmarked), 5 oppgaver som speiler den typiske temafordelingen, kalkulator + formelhefte + utdelt R-utskrift, med full A-besvarelse-fasit og tolkning i kontekst.
- **Eksamensbelegg/miks:** Speiler standardmalen (3 timer, 5 oppgaver, ~40 poeng, «vis all utregning» + «tolk i kontekst»), ett gjennomgående boligcase: **O1 (C):** diskret simultanfordeling (E, Var, Cov, Cor, uavhengighet). **O2 (E/D):** normalfordeling + SGT + binomisk normaltilnærming. **O3 (F/G):** KI + hypotesetest for gjennomsnitt (én + to grupper). **O4 (H):** estimering, KI og test for andel (én + to). **O5 (I, tyngst 9–12 p):** enkel lineær regresjon fra **utdelt R-utskrift** + korrelasjon + kausalitetsforbehold. Alle oppgaver nyskrevne med pene tall og **nyskrevet R-utskrift**. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (all utregning vist, referansefordeling/df navngitt, avsluttende kontekst-tolkning), med `tip`-notat om poeng/tidsbudsjett (~36 min/oppgave).
- **Oppgavesjangre:** C, D, E, F, G, H, I, K.
- **estimatedMinutes/prerequisites:** som over. **Typiske feil (kort):** feil verktøy-/df-valg, manglende kontekst-tolkning, feil R-utskrift-avlesning.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 2: annen case-miks (undersøkelse + hånd-regnet regresjon)

- **id:** `met2920-bi-10-3` · **number:** 10.3 · **estimatedMinutes:** 180 · **prerequisites:** `met2920-bi-10-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett med en annen miks: spørreundersøkelse/casino-case, kombinatorikk-åpning og regresjon regnet FOR HÅND fra rådata (spor 2), full A-besvarelse-fasit.
- **Eksamensbelegg/miks:** Samme mal, annen miks: **O1 (B):** sannsynlighet/kombinatorikk — hypergeometrisk vs. binomisk trekning + forventet gevinst (casino). **O2 (C):** diskret simultanfordeling. **O3 (F/G):** KI for μ med bredde-drøfting + to-utvalgs t-test. **O4 (H):** én andel + to andeler med dualitet. **O5 (J, tyngst, 12 p):** enkel lineær regresjon regnet **for hånd fra rådata** — deskriptiv pakke → minste kvadrat → test/KI for β₁ → residual standard error for hånd + kausalitetsforbehold. Alle nyskrevne. A-besvarelse-fasit i `collapsible` per oppgave med poeng-/tidsnotat.
- **Oppgavesjangre:** B, C, F, G, H, J, K.
- **estimatedMinutes/prerequisites:** som over. **Typiske feil (kort):** kombinatorikk-modellvalg, $p_0$/pooled-feller, hånd-regnet regresjon uten arbeidstabell.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 3: bredde-/konseptprofil (R-kode, kjikvadrat, type I/II)

- **id:** `met2920-bi-10-4` · **number:** 10.4 · **estimatedMinutes:** 180 · **prerequisites:** `met2920-bi-10-3`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som vekter de lavfrekvente og konseptuelle innslagene tyngst — R-kode-lesing, kjikvadrat, type I/II-flervalg og kausalitetsdrøfting — for å fange bredden analysen advarer om ikke å overse.
- **Eksamensbelegg/miks:** Speiler bredden (bedriftscase med ansatte/opplæringsprogram): **O1 (M/N):** R-kode-lesing (`sd`, `cor`, `length`, feilmelding) + konseptflervalg om SGT/t-fordeling. **O2 (E/D):** normalfordeling + invers persentil + binomisk. **O3 (G/N):** to-grupper t-test + type I-/type II-feil (flervalg). **O4 (L):** kjikvadrattest for uavhengighet (kontingenstabell). **O5 (I/K, tyngst):** regresjon fra R-utskrift + korrelasjon vs. kausalitet/konfundering (verbal drøfting, tung vekt). Alle nyskrevne. A-besvarelse-fasit i `collapsible` med margnotater om hva som skiller topp- fra midtsjikt. Sammen dekker de tre øvingseksamenene sjangrene A–N minst én gang.
- **Oppgavesjangre:** M, N, E, D, G, L, I, K.
- **estimatedMinutes/prerequisites:** som over. **Typiske feil (kort):** type I/II-forveksling, hoppet kjikvadrat-kriterier, kausalt sprang, R-kode misforstått.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 10:** ingen egne temaprøver — slutningskjede-stordrillen (10.1) + de tre øvingseksamenene (10.2–10.4) er delens trening.

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.3 | 10+14+14 = **38** | 12+26+18 = **56** | 0 |
| 1 | 1.1–1.3 | 20+20+12 = **52** | 20+20+8 = **48** | 4 |
| 2 | 2.1–2.2 | 18+16 = **34** | 18+14 = **32** | 4 |
| 3 | 3.1–3.4 | 16+24+16+12 = **68** | 16+24+16+8 = **64** | 4 |
| 4 | 4.1–4.2 | 20+16 = **36** | 18+16 = **34** | 4 |
| 5 | 5.1–5.2 | 16+22 = **38** | 20+22 = **42** | 4 |
| 6 | 6.1–6.4 | 22+20+20+14 = **76** | 26+18+18+8 = **70** | 4 |
| 7 | 7.1–7.3 | 20+16+12 = **48** | 20+16+8 = **44** | 4 |
| 8 | 8.1–8.5 | 20+22+20+16+14 = **92** | 20+24+20+22+8 = **94** | 4 |
| 9 | 9.1 | **16** | **16** | 4 |
| 10 | 10.1–10.4 | 18+5+5+5 = **33** | 26+0+0+0 = **26** | 0 (drill + 3 øvingseksamener) |
| **Sum** | **33 kap.** | **531 ≥ 500 ✓** | **526 ≥ 500 ✓** | **36 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og bredde: **slutningskjernen + regresjon (Del 5–8)
står for 254 av 531 quiz** — de temaene som bærer hvert eneste sett (KI/test for μ
og p, regresjon/korrelasjon). Tettheten ligger bevisst litt over 500-gulvet fordi
faget, selv om det er oppskriftsdrevet med moderat begrepsmengde, har **usedvanlig
mange verbale/konseptuelle drillmål** (korrekt KI-tolkning, type I/II-feil,
dualitet KI↔test, korrelasjon vs. kausalitet, «vis utregning»/«tolk i kontekst»)
som er flashcard-rike — derfor er flashcard-summen (526) nesten på høyde med
quiz-summen, og de metatunge kapitlene (0.2 håndverk, 6.1 testanatomi, 8.4
kausalitet, 10.1 sjangerguide) er bevisst flashcard-tunge (konseptbank,
tolkningsmaler, feilkatalog). Drillkapitlene (1.3, 3.4, 6.4, 7.3, 8.5) har lave
flashcard-kvoter (få nye definisjoner, mye oppgaveregning). Quizzene skrives som
**metode-/føringssjekk** (hvilken fordeling/df, er tolkningen med, hvilket steg
mangler, hvorfor gir dette null poeng, t eller Z, pooled eller upooled) med
distraktorer bygget på feilkatalogen (§5 i analysen) — ikke ren repetisjon.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9, 36 totalt)

Hver del 1–9 får ett prøvekapittel (`met2920-bi-<del>-prove`, chapterNumber
`<del>.P`) med fire prøver. Hver prøve består av nyskrevne oppgaver i eksamens
sjangre, med løsningsforslag (A-besvarelse med all utregning vist, referanse-
fordeling/df navngitt og avsluttende kontekst-tolkning — bare svar eller bar
konklusjon gir null poeng) og poengfordeling. Prøvene per del er spesifisert i
«Prøve-kvote Del N»-linjene over. Oppsummert dekker de:

- **Del 1** (A/K): sentraltendens/spredning for hånd → kovarians/korrelasjon → korrelasjon vs. kausalitet → full deskriptiv-pakke.
- **Del 2** (B): betinget sannsynlighet → total sannsynlighet/Bayes → hypergeometrisk vs. binomisk → forventet gevinst.
- **Del 3** (C/D): E/Var diskret → simultanfordeling/kovarians → uavhengighet vs. Cov = 0 + binomisk → full simultanfordeling.
- **Del 4** (E/D/N): standardisering/Z → invers persentil → SGT + flervalg → normaltilnærming til binomisk.
- **Del 5** (F/N): t/df/SE → KI-konstruksjon → korrekt KI-tolkning (verbal) → full KI med bredde-drøfting.
- **Del 6** (G/N): testanatomi/type I-II → ett-utvalgs t-test → to-utvalgs t-test + KI for differanse → full μ-slutning + dualitet.
- **Del 7** (H): Wald-KI én andel → z-test med p₀ + laveste signifikansnivå → to andeler pooled/upooled + dualitet → full andelsoppgave.
- **Del 8** (I/J/K): minste kvadrat for hånd → lese `lm()`-utskrift + fortegn på r → KI/test for β₁ + residual std error → kausalitet + full regresjon.
- **Del 9** (L/M/N): forventede verdier/kriterier → χ² og df → full kjikvadrattest → blandet lavfrekvent (kjikvadrat + R-kode/konsept).

### Øvingseksamener (3 komplette sett — kap. 10.2–10.4)

| Sett | Case/profil | Tema-miks (O1–O5) |
|---|---|---|
| Øvingseksamen 1 (10.2) | Boligmarked, standardmal | C (simultan) + E/D (normal/SGT/binomisk) + F/G (KI+test μ) + H (andel) + I (regresjon fra R-utskrift) |
| Øvingseksamen 2 (10.3) | Undersøkelse/casino, hånd-regresjon | B (kombinatorikk/gevinst) + C (simultan) + F/G (KI+test μ) + H (andel, dualitet) + J (regresjon for hånd) |
| Øvingseksamen 3 (10.4) | Ansatte/opplæring, bredde/konsept | M/N (R-kode + flervalg) + E/D (normal/binomisk) + G/N (to grupper + type I/II) + L (kjikvadrat) + I/K (regresjon + kausalitet) |

Alle tre har fast dramaturgi (5 oppgaver, ~34–43 poeng, 3 timer, ett gjennomgående
case, kalkulator + formelhefte + utdelt R-utskrift, «vis all utregning» + «tolk i
kontekst»). Til sammen dekker de sjangrene A–N minst én gang; slutningskjernen
(F, G, H) og regresjon (I, J, K) inngår i minst to av settene.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 timer, 5 oppgaver, ~40 poeng, A–F,
   kalkulator med innebygd Z-/t-fordeling + formelhefte + utdelt R-utskrift), den
   faste 5-oppgavemalen (sannsynlighet → simultan/normal/andel → KI+test μ →
   andel → regresjon), case-dramaturgien og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (regresjon/korrelasjon, R-utskrift-lesing, KI for μ, test for μ,
   andelsslutning), **kunne** (simultanfordeling, normal/SGT/binomisk, deskriptiv
   for hånd), **kjenne** (kombinatorikk, kjikvadrat, betinget sannsynlighet/Bayes,
   R-kode-forståelse). Med fraværsbildet uttrykt (ANOVA, Poisson, multippel
   regresjon, estimatorbevis, MGF = 0/5, la ligge).
3. **Sjangerguiden** — sjangrene A–N med løsningsoppskriftene fra drillkapitlene
   (1.3, 3.4, 6.4, 7.3, 8.5, 10.1) i kortform: deskriptiv-pakken, simultanfordelings-
   ritualet, μ-slutningsoppskriften (t, df, KI+test, dualitet), andelsoppskriften
   ($\hat{p}$, Wald, z med $p_0$, pooled/upooled), regresjonsoppskriften (spor 1
   R-utskrift / spor 2 hånd, df = n − 2, fortegn på r, residual std error),
   kjikvadratritualet, og sjangergjenkjennings-treet.
4. **«Vis all utregning» og «tolk i kontekst»-håndverket** — egen seksjon (fagets
   to viktigste enkeltregler, fra kap. 0.2): føringsstandarden (formel skrevet ut,
   tall inn, fordeling/df navngitt, svar med enhet), tolkningsmalen (hvorfor bar
   konklusjon gir null poeng), formelhefte-bruk (hva som står der / hva som må
   velges selv) og kalkulatorens Z-/t-fordeling uten tabeller.
5. **Konseptaksen — korrelasjon vs. kausalitet + korrekt KI-tolkning** — egen
   seksjon (der toppkarakteren avgjøres): konfundering/seleksjon/omvendt
   kausalitet (fra kap. 8.4), korrekt KI-tolkning (konfidens ≠ sannsynlighet om
   μ, fra kap. 5.2), type I-/type II-feil og dualitet KI↔test.
6. **Sensorreglene** — metareglene (vis all utregning med formlene; konkluder i
   kontekst — bar konklusjon = null poeng; riktig fordeling og df; ensidig vs.
   tosidig med halvering) + de fagspesifikke strenge punktene (bruk $p_0$ ikke
   $\hat{p}$ i teststandardfeilen for én andel; pooled til test, upooled til KI;
   df = n − 1 for μ, n − 2 for regresjon, (r − 1)(k − 1) for kjikvadrat; fortegn
   på r = fortegn på $\hat{\beta}_1$; uavhengighet kun via alle celler, ikke fra
   Cov = 0) — alle merket `(verifiser)` siden ingen sensorveiledning forelå.
7. **Feilkatalogen** — de typiske feilene samlet (§5 i analysen): svar uten
   utregning; bar konklusjon uten kontekst; z i stedet for t; $\hat{p}$ i stedet
   for $p_0$; pooled/upooled-blanding; feil KI-tolkning; feil fortegn på r;
   «bevise» uavhengighet fra Cov = 0; glemt ensidig-halvering; feil df i regresjon;
   forvekslet korrelasjon/kovarians; korrelasjon→årsak-sprang; glemt kjikvadrat-
   kriterier; glemt normaltilnærmingsvilkår — hver med henvisning til kapitlet som
   forebygger den.
8. **Formelhefte i emnets notasjon** — én side som gjengir det utdelte formelheftet
   (deskriptive formler; kombinatorikk; betinget/total sannsynlighet/Bayes; KI- og
   testformler for μ, differanse og andel; regresjonsformlene og residual standard
   error) — med markering av hva som IKKE står der og må velges/kunnes selv
   (fordeling/df-valg, ensidig-halvering, $p_0$-regelen, pooled/upooled-skillet,
   KI-tolkningen).
9. **Studieløp** — anbefalt progresjon (8-ukers og 3-ukers intensivvariant): Del 0
   → 1 (deskriptiv) → 3 (simultan) → 4 (normal/SGT) → 5 (KI for μ) → 6 (test for
   μ) → 7 (andel) → 8 (regresjon), deretter 2 og 9 (bredde), til slutt slutnings-
   kjede-stordrillen (10.1) og de tre øvingseksamenene under tidspress (180 min,
   ~36 min/oppgave). Intensivvariant: Del 5 + 6 + 7 + 8 + kap. 0.2 + 0.3 +
   øvingseksamenene (slutningskjernen + regresjon som bærer eksamen). Terp prøvene
   og drillkapitlene — sjangergjenkjenning + føring + kontekst-tolkning gir
   poenggulvet, og de konseptuelle delene gir toppkarakteren.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `met2920-bi` med alle 33
   kapitler + 9 prøvekapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI`
   i `src/lib/data/textbook-courses-matte.ts`, wiret i
   `textbook-courses-hoyskole.ts`; `sectionNames` fra makrostruktur-tabellen (§2).
   **`number` er del-basert** («6.3», aldri lineær) — bokforsiden grupperer på
   `number.split('.')[0]`. Institusjon = **Handelshøyskolen BI** i
   `institusjoner.ts` (finnes allerede fra MET 2910), visningsnavn «MET 2920
   Statistikk for økonomer».
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangerkodene A–N, frekvenstallene, de to
   signaturreglene («vis all utregning» + «tolk i kontekst»), formelhefte-/
   kalkulatorhåndverket og R-utskrift-/R-kode-lesemodulen som resten refererer til.
3. **Perfekt-kjernen i avhengighetsrekkefølge**: Del 1 (deskriptiv) → Del 3
   (diskret/simultan) → Del 4 (normal/SGT) → Del 5 (KI for μ) → Del 6 (test for μ)
   → Del 7 (andel) → Del 8 (regresjon). Bygg gjerne én agent per hel del; Del 6 og
   Del 8 (4 og 5 kapitler) kan splittes, men gi begge agentene HELE delens
   kontrakter. Drillkapitlene bygges av samme agent som delen sin.
4. Del 2 (sannsynlighet/kombinatorikk) og Del 9 (kjikvadrat) etter Del 0/6 —
   lavfrekvente, bygges når kjernen står.
5. Del 10 til slutt (slutningskjede-stordrillen og øvingseksamenene gjenbruker
   alle temaene; øvingseksamen-agenten leser HELE skjelettet — kap. 10.1 og
   øvingseksamenene krever alle delene).
6. **Prøvekapitler** (§4, 36 stk) legges som `met2920-bi-<del>-prove`,
   chapterNumber `<del>.P`, bygget av delens agent.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\bar`, `\\hat`, `\\sqrt`, `\\sum`, `\\chi`, `\\beta`); konsistent notasjon:
      $\bar{x}$, $s$, $S_{xy}$, $r$, $\hat{p}$, $\hat{\beta}_0$, $\hat{\beta}_1$,
      $H_0$/$H_A$, $\alpha$, $Z$/$T$, df = n − 1 / n − 2 / (r − 1)(k − 1).
- [ ] **«Vis all utregning» i ALLE løsningsforslag**: formelen fra heftet skrevet
      eksplisitt ut FØR innsetting; tall inn; **referansefordeling (Z/t) og df
      navngitt**; tallsvar med enhet. Kalkulatortastetrykk aldri gjengitt; ingen
      tabelloppslag (kalkulatorens Z-/t-fordeling brukes). Ubegrunnede fasitsvar
      er byggefeil.
- [ ] **«Tolk i kontekst» i ALLE test-/KI-/regresjonsløsninger**: hver test/estimat
      avsluttes med en eksplisitt tolkningssetning i casets språk — aldri bare
      «forkaster/forkaster ikke $H_0$» (null poeng). Kontraktfestet `warning` i
      kap. 0.2, 5.2, 6.1–6.3, 7.1–7.2, 8.2–8.3, 9.1.
- [ ] **KI-tolkningsfelle-`warning`**: kap. 5.2, 7.1 og 8.2 har eksplisitt
      `warning` om at KI er et **konfidens**-utsagn, ikke et sannsynlighetsutsagn
      om μ/p/β (μ er ikke tilfeldig).
- [ ] **Fordelings-/df-valg som `theorem`-blokker**: t for μ (df = n − 1, kap.
      5.1), Z for andel med $p_0$ i standardfeilen (kap. 7.1), df = n − 2 i
      regresjon (kap. 8.3), df = (r − 1)(k − 1) i kjikvadrat (kap. 9.1) — hver med
      «(på formelheftet)»-merking der formelen står der.
- [ ] **To-spors regresjon**: kap. 8.1 (hånd fra rådata, spor 2) OG kap. 8.2 (lese
      `lm()`-utskrift, spor 1) er begge fullt bygget; kap. 8.5-drillen har minst én
      gjennomregnet case per spor; alle R-utskrifter er **nyskrevne** (nye
      tallverdier), aldri kopiert fra arkivet.
- [ ] **R-utskrift-lesemal**: kap. 8.2 har `lm()`-tabell-lesemalen som
      `theorem`/prosedyre-blokk (Estimate/Std. Error/t value/Pr(>|t|)/Residual
      standard error/Multiple R-squared), med fortegn-på-r-warning ($r = \pm\sqrt{R^2}$,
      fortegn = $\hat{\beta}_1$).
- [ ] **Korrelasjon vs. kausalitet-konseptakse**: `warning` i kap. 1.2, 3.2 (Cov =
      0 ⇏ uavhengighet) og et fullt konsept-kapittel 8.4 (konfundering/seleksjon);
      hvert regresjonskapittel (8.1–8.3, 8.5) har et kausalitetsforbehold.
- [ ] **Notasjonskonsistens (grep over alle met2920-bi-filer)**. Forbudte termer/
      temaer (0 forekomster, kun nevnt som ikke-pensum i Del 0): **ANOVA/
      variansanalyse, Poisson, multippel regresjon, forventningsrette-bevis,
      momentgenererende funksjon, bootstrap, bayesiansk**. Påkrevd/standard:
      «vis all utregning», «tolk i kontekst», t vs. Z + riktig df, $p_0$-i-
      standardfeilen, pooled/upooled, residual standard error, R-utskrift.
- [ ] **Regneprosedyrer som `theorem`-blokker**: deskriptiv-formlene (1.1–1.2),
      simultanfordeling/uavhengighet (3.2), standardisering/SGT (4.1–4.2), t-KI og
      t-test (5.2, 6.2–6.3), Wald-KI og z-test for andel (7.1–7.2), minste kvadrat
      + R-utskrift-lesemal + residual std error (8.1–8.3), kjikvadratritualet (9.1)
      — hver i emnets notasjon med «(på formelheftet)»-merking der det gjelder.
- [ ] **Gjennomregnede bedriftsøkonomiske case**: hvert PERFEKT-kapittel har minst
      ett eksempel på eksamensnivå i case-innramming (boligmarked/undersøkelse/
      ansatte/returandel), løst som A-besvarelse med all utregning OG kontekst-
      tolkning.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
      fra dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til
      kapitler som finnes — verifiser id-ene mot `textbook-courses-matte.ts` i
      BYGGEKONTRAKT-fasen) + `collapsible` Symbol- og formelliste per delkapittel
      (med «(på formelheftet)»-merking), Motivasjon-`text`, definisjoner/
      regneprosedyrer i emnets notasjon, Typiske feil-`warning`, 2–4 eksempler
      (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case +
      8–12 oppgaver.
- [ ] **Quiz-sum ≥ 531 og flashcard-sum ≥ 526** per kvotetabellen i §3
      (kontrollsummér — den er autoritativ); quizzene som metode-/føringssjekk med
      distraktorer fra feilkatalogen (t/Z, df, ensidig-halvering, $p_0$-felle,
      pooled/upooled, KI-tolkning, fortegn på r, Cov = 0-felle, kausalitetssprang).
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + slutningskjede-stordrill (10.1) + 3
      øvingseksamener (10.2–10.4); settene og prøvene dekker samlet sjangrene A–N
      minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver, tallverdier OG R-utskrifter nyskrevne — egne
      tall, egen case-kontekst (boliger/undersøkelse/ansatte/returandeler), egne
      formuleringer; ingen oppgavetekster, R-utskrifter eller sensorformuleringer
      gjengitt ordrett (skjelettets mønstereksempler er selv omskrivninger med
      nyskrevne tall og skal varieres videre); standardformler, standardteoremer og
      formelhefte-innhold er faglig allemannseie.
- [ ] **BI-særtrekk synlig**: Del 0 sier eksplisitt **poeng** (ikke vekttall), A–F,
      BI-definert eksamenskalkulator med innebygd Z-/t-fordeling + formelhefte +
      utdelt R-utskrift, 3-timers skoleeksamen, 5-oppgavemal og de to
      signaturreglene («vis all utregning» + «tolk i kontekst»).
- [ ] **`(verifiser)`-markering**: sensorkrav uten offisiell veiledning (df-regel i
      Welch-testen, ensidig-halvering, poengfordeling) er merket `(verifiser)` —
      grep `-i verifiser` i verifiseringsbølgen (jf. JUS1111-lærdommen).
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside
      (Handelshøyskolen BI), bokforside, kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen.
