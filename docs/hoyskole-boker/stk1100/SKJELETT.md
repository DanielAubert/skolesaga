# Bokskjelett: STK1100 Sannsynlighetsregning og statistisk modellering — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (10 avsluttende skoleeksamener 2015–2024 fra UiOs
> STK1100-arkiv, 7 sett lest grundig med offisielle løsningsforslag 2018–2024).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Strukturforbilde:** `docs/hoyskole-boker/tma4245/SKJELETT.md` (NTNUs
> søsteremne) — samme format, men temavektene er VRIDD kraftig etter
> analysens del 8: STK1100 er UiOs *modellerings*-emne. **Hypotesetesting,
> kombinatorikk og ordningsvariable er UTELATT fra teoridelene** (0/10 i
> arkivet — de ligger i oppfølgeremnet STK1110), mens transformasjon/MGF,
> simultanfordelinger, «eksotiske» kontinuerlige fordelinger, gamma/χ²-apparatet,
> eksakt pivotal-KI og simulering/bootstrap er løftet opp.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `stk1100` |
| Tittel | **STK1100 Sannsynlighetsregning og statistisk modellering** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo |
| Arketype | Regnefag (kvantitativt emne med fast oppgavetradisjon) |
| Antall kapitler | **27** (1 eksamenskart + 22 tema, hvorav 5 drill + 4 eksamenstrening) |
| Estimert totaltid | **2 215 min ≈ 37 timer** |
| Quiz totalt | **510** (krav ≥500) |
| Flashcards totalt | **505** (krav ≥500) |

**Pitch (ett avsnitt):** STK1100-eksamen har én lang fortelling som gjentas i
praktisk talt hvert sett siden 2015: **fordeling → estimator →
forventningsretthet/varians → transformasjon til gamma/χ² → eksakt pivotal-KI
(+ CLT-tilnærmet KI som alternativ) → bootstrap for standardfeil.** Denne boka
er bygget rundt nettopp den kjeden som ryggrad, med et gjennomgående *drillspor*
(kapitlene 4.3 → 5.3 → 6.3) som setter leddene sammen. Rundt kjeden ligger de
tre teknikkene som bærer emnet: **transformasjonsapparatet** (CDF-metoden,
Jacobi for (X,Y)→(U,V) og MGF-identifikasjon — ~90 % av settene),
**simultanfordelingen komplett** (marginaler, uavhengighet ved faktorisering,
betinget tetthet, dobbeltintegral — ~80 %) og **gamma/kjikvadrat-maskineriet**
(χ²ₙ = gamma(n/2, 2), sum av gamma, E(Vʳ)-formelen — ~70 %). To
UiO-særtrekk får egne kapitler: de «navngitte eksotiske» fordelingene (Laplace,
Pareto, Rayleigh, lognormal, Weibull, binormal — ~60 %) som skal håndteres med
standardteknikkene, og simulering/bootstrap med Python (~60 %, fast inventar
siden 2015, full kjørbar numpy-kode siden 2020). Formelsamlingen for
STK1100/STK1110 er alltid tillatt, så boka trener det eksamen faktisk måler: å
*velge* riktig fordeling/pivot, *bruke* tabellene med riktige persentiler og
frihetsgrader, og *utlede* det som ikke står der (ML, pivotaler, transformasjoner,
bootstrap) — ikke pugging.

**Kritisk notasjonsregel (gjelder HELE boka)** — settenes egen notasjon følges:

- Store bokstaver for stokastiske variable ($X$), små for observasjoner ($x$);
  hatt for estimatorer ($\hat{\theta}, \hat{\mu}, \hat{\sigma}, \hat{\beta}$);
  $\bar{X}$ og $S^2$ for utvalgsgjennomsnitt/-varians. **Skill estimator (stor
  bokstav, stokastisk) og estimat (tall) konsekvent** (sensorkrav).
- $X \sim N(\mu, \sigma^2)$ — **annet argument er variansen**, aldri
  standardavviket. $\Phi$ for standardnormal fordelingsfunksjon.
- **Gamma$(\alpha, \beta)$ med $\beta$ = skalaparameter** (forventning
  $\alpha\beta$). **Kjikvadrat med $n$ frihetsgrader = gamma$(n/2, 2)$.**
- **Eksponensialfordelingen parametriseres INKONSEKVENT i arkivet** — noen sett
  bruker rate $\lambda$ ($f(x) = \lambda e^{-\lambda x}$), andre forventning
  $\mu$ ($f(x) = \frac{1}{\mu}e^{-x/\mu}$), og Weibull med skala $\beta$.
  **Boka viser BEGGE parametriseringene og trener studenten til å lese oppgavens
  egen definisjon hver gang** (dette er en dokumentert felle — analysen §5.6).
  Dette skiller STK1100-boka fra TMA4245-boka, som brukte kun forventnings-$\beta$.
  $\lambda$ reserveres for rater i Poisson-prosesser.
- Kvantilnotasjon med **øvre haleareal**: $z_\alpha$, $\chi^2_{\nu,\alpha}$
  (dvs. $P(Z > z_\alpha) = \alpha$).
- Python: numpy-idiomatisk — `stats.norm.rvs`, `np.random.uniform`, `np.mean`,
  `np.var(x, ddof=1)`, `np.std(x, ddof=1)`; løkke `for _ in range(B)` for
  bootstrap; indikator-gjennomsnitt som sannsynlighetsestimat.

**Formelsamling-prinsippet (gjelder HELE boka):** «Formelsamling for
STK1100/STK1110» er alltid tillatt — alle standardfordelinger med $E$/Var/MGF,
gammafunksjonens egenskaper og kvantiltabeller ($\Phi$, $z_\alpha$, $\chi^2$,
gamma) ligger på pulten. Enkelte sett legger nødvendige hjelperesultater direkte
i oppgaveteksten (E(Vʳ)-formelen, gammaintegralet
$\int_0^\infty x^{a-1}e^{-x/b}\,dx = b^a\Gamma(a)$, en oppgitt MGF). Hvert
kapittel skal derfor eksplisitt merke innholdet: **«står i formelsamlingen —
tren oppslaget»** (riktig fordeling, persentil, frihetsgrad) vs. **«må utledes
aktivt»** (ML, pivotaler, transformasjoner, bootstrap). Pugge-stoff finnes ikke
i dette emnet.

**Avgrensning mot STK1110 (gjelder HELE boka):** STK1100-skoleeksamen inneholder
**ingen hypotesetesting, ingen kombinatorikk og ingen ordningsvariable** (min/maks,
serie/parallell) — 0/10 i hele arkivet. Disse temaene får KUN en kort
kjenne-omtale i kap. 0.1 med henvisning til STK1110, og nevnes ellers ikke.
Inferens-kjeden ender ved **konfidensintervallet** (aldri test/styrke). Klassisk
deskriptiv/grafisk statistikk er også fraværende (kun tolkning av simulerte
fordelinger, dekket i Del 7).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Plasserer også de utelatte temaene (STK1110-grensen). |
| 1 | Sannsynlighet, betingning og diskrete modeller | 3 | Forventning/varians/lineærkombinasjoner **10/10 = 100 %** (grunnmuren) → eget kapittel; Bayes/total 70 % (oppgave 1) → eget kapittel; diskret modellvalg (Poisson/geometrisk/binomisk) 30 % hver. |
| 2 | Kontinuerlige fordelinger og gamma-apparatet | 3 | Median/CDF 90 %, ikke-normale kontinuerlige 80 %, gamma/χ² 70 %, «eksotisk» fordeling 60 % → 2 teorikapitler + drillkapittel (sjanger C, standardtreningen). |
| 3 | Simultanfordeling og uavhengighet | 2 | Simultantetthet ~80 %, egen stor oppgave nesten hvert år → teorikapittel + **drillkapittel for uavhengighet-ved-faktorisering (eget drillmål, inkl. null-området)**. |
| 4 | Transformasjon: broen til pivotalen | 3 | Transformasjon (CDF/Jacobi/MGF) **~90 %** — «broen til alle pivotalene» → nivå 1 → MGF-kapittel + transformasjonskapittel + **drillkapittel «transformasjon til gamma/χ²» (eget drillmål)**. |
| 5 | Punktestimering | 3 | ML/estimering **90 %** — kjedens første halvdel → egenskaps-kapittel + ML-kapittel + estimator-drillkapittel; skjevhetskorreksjon via Γ (A-differensiator) inn i drillen. |
| 6 | Konfidensintervall: eksakt pivotal og CLT | 3 | KI **100 %**, eksakt pivotal-KI **70 % (signaturferdigheten)** → pivotal-kapittel + CLT/Wald-kapittel + **ryggrad-drillen (hele kjeden fordeling→estimator→pivot→eksakt KI→CLT→bootstrap-SE)**. |
| 7 | Simulering, bootstrap og Python | 2 | Simulering/bootstrap **60 %, fast siden 2015**, full Python siden 2020 → egen del med kodetrening. Etter Del 5–6 fordi bootstrap-SE og dekningsstudier bruker estimator- og KI-begreper. |
| 8 | Samvariasjon, binormal og regresjon | 3 | Nivå 3 (differensierer A): binormal + betinget forventning/prediksjon/MSE (30 %) og enkel lineær regresjon (nykommer 2022/2024, elementær) → tre kompakte kjenne-kapitler. |
| 9 | Eksamenstrening | 4 | Sjangerguiden + 3 komplette øvingseksamener etter fortellingsoppgave-malen (3–4 store oppgaver med full kjede). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Sannsynlighet, betingning og diskrete modeller |
| 2 | Kontinuerlige fordelinger og gamma-apparatet |
| 3 | Simultanfordeling og uavhengighet |
| 4 | Transformasjon: broen til pivotalen |
| 5 | Punktestimering |
| 6 | Konfidensintervall: eksakt pivotal og CLT |
| 7 | Simulering, bootstrap og Python |
| 8 | Samvariasjon, binormal og regresjon |
| 9 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Fem drillkapitler (2.3, 3.2, 4.3, 5.3, 6.3) ligger inne i temadelene sine**
   i stedet for i siste del — sjangrene er 60–90 %-gjengangere som må drilles
   umiddelbart etter teorien (samme grep som TMA4245/ECON1310). Del 9 beholder
   sjangerguiden og øvingseksamenene.
2. **Hypotesetesting, kombinatorikk og ordningsvariable har INGEN teorikapitler**
   — kun kjenne-omtale i kap. 0.1 med STK1110-henvisning. Dette er det tyngste
   avviket fra både DNA-malen («ett kapittel per oppgavetype») og fra
   strukturforbildet TMA4245 (som har fulle testdeler). Begrunnelse: 0/10 i hele
   STK1100-arkivet; temaene ligger i oppfølgeremnet (analysen del 1 og 8).
3. **Ingen kortsvars-/Inspera-drill** (motsatt TMA4245 kap. 10.1) —
   STK1100-skoleeksamen har ingen kortsvars- eller flervalgsdel (den ligger i
   midtveiseksamen, som ikke er i arkivet). Øvingseksamenene er rene
   fortellingsoppgave-sett med 3–4 store, sammenhengende oppgaver.
4. **Ryggrad-drillen (6.3) ligger i KI-delen, ikke i en egen inferens-del** —
   fordi kjeden ender ved konfidensintervallet (ingen test/styrke). Drillsporet
   4.3 → 5.3 → 6.3 bygger kjeden ledd for ledd.
5. **Simulering (Del 7) er en egen temadel plassert *etter* estimering/KI**,
   selv om inversjonsmetoden teknisk bare krever Del 2–4: eksamens
   bootstrap- og dekningsoppgaver bruker estimator- og KI-begreper (parametrisk
   bootstrap av $\hat{\theta}$, simulert dekningsgrad eksakt vs. Wald).
6. **27 kapitler** — midt i DNA-rammen (20–35). Emnet har to likevektede søyler
   (sannsynlighetsteori/transformasjon og estimering/KI) som hver krever full
   kapittelkjede.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen som gjengis i kap. 0.1 (fra analysen §3):
**A** Bayes/total sannsynlighet · **B** diskret fordeling (Poisson/geometrisk/
binomisk) med E/V · **C** egendefinert/«eksotisk» kontinuerlig tetthet ·
**D** simultantetthet (marginaler/uavhengighet/betinget/område) · **E**
transformasjon (CDF/Jacobi/MGF) · **F** momentgenererende funksjon · **G**
estimering + eksakt pivotal-KI (kjerneoppgaven) · **H** eksakt-pivot vs.
Wald/CLT-dekning · **I** simulering/bootstrap/Python · **J** simultanfordeling
via Jacobi · **K** enkel lineær regresjon · **L** betinget forventning/
prediksjon/MSE.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes STK1100

- **id:** `stk1100-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, temafrekvensene, sjangerkatalogen A–L og lesestrategien som styrer hele boka — og hva som bevisst er utelatt.
- **Eksamensbelegg:** Metakapittel — bygger på alle 10 sett (2015–2024). Skal gjengi:
  (i) formen: **4 timers skriftlig skoleeksamen** (09–13), bokstavkarakter A–F;
  emnet vurderes samlet med midtveiseksamen (1/3, flervalg — ikke i arkivet) +
  avsluttende (2/3); godkjent kalkulator + formelsamling for STK1100/STK1110;
  **3–4 store fortellingsoppgaver, ingen kortsvars-/flervalgsdel**; enkelte sett
  (V2024) begrenser formelsamlingen til STK1100 og legger da inn
  normalkvantiltabell og gammaintegralet direkte. (ii) Den typiske firedelingen:
  (1) sannsynlighet/diskret modell (Bayes eller Poisson/geometrisk med MGF),
  (2) kontinuerlig/simultan tetthet, (3) **estimering + konfidensintervall (den
  tunge)**, (4) transformasjon/Jacobi/binormal/regresjon og/eller
  simulering. (iii) **Temafrekvens-tabellen** (andel av 10 sett): forventning/
  varians/lineærkombinasjoner 100 %, KI 100 %, punktestimering 90 %,
  transformasjon 90 %, median/kvantil 90 %, simultanfordeling 80 %, normal/
  binormal 80 %, gamma/χ² 70 %, eksakt pivotal-KI 70 %, Bayes/total 70 %, MGF
  65 %, «eksotisk» kontinuerlig fordeling 60 %, simulering/bootstrap 60 %,
  eksponensial 50 %, CLT 40 %, Poisson 30 %, binomisk 30 %, betinget forventning
  30 %, kovarians/korrelasjon 20 %, regresjon 20 % (men begge de to siste
  settene). (iv) **Kjeden som ryggrad:** fordeling → estimator →
  forventningsretthet/varians → transformasjon til gamma/χ² → eksakt pivotal-KI
  (+ CLT-KI) → bootstrap-SE — samme historie i praktisk talt hvert sett, 60–70 %
  av poengene. (v) Sensorens elleve krav (fra løsningsforslagene, se §4 under):
  definer variable/hendelser før du regner; uavhengighet bevises ved
  faktorisering; tegn integrasjonsområdet; MGF med konvergenskrav; ML med alle
  trinn; forventningsretthet/varians fullstendig og skjevhet kvantifisert;
  eksakt pivotal foretrekkes framfor Wald; CLT nevnes eksplisitt ved
  normaltilnærming; transformasjoner med metode; bootstrap-algoritmen presist +
  kjørbar `ddof=1`-kode; tallsvar med tolkning. (vi) Karakterskillene: bestått =
  åpningsdelene (Bayes, standardisering, marginaler, median); C/B = ML +
  forventningsretthet/varians + et standard KI; A = eksakt pivotal-utledninger
  og gamma/χ²-identifikasjonene, transformasjonsbevisene (Jacobi, MGF),
  skjevhetskorreksjon via Γ, simulering/bootstrap med korrekt kode. (vii)
  **Det bevisst utelatte:** ingen hypotesetesting, kombinatorikk eller
  ordningsvariable på STK1100-eksamen (0/10) — de ligger i **STK1110**; nevnes
  én gang her og aldri igjen. (viii) Prognosen for neste ordinære eksamen (4
  oppgaver som dekker Bayes/diskret, simultantetthet, estimerings-kjeden på en
  eksotisk fordeling, og transformasjon/regresjon/simulering).
- **Innholdskontrakt:** Sjangerkatalogen A–L presenteres som studentens
  sjekkliste med frekvens og typisk plassering (hvilken av de 3–4 oppgavene).
  Leseplan: Del 2–6 er «må perfekt»-løypa (kjeden + transformasjon + simultan +
  gamma); Del 1 er fundament og oppgave-1-poeng; Del 7 er obligatorisk siden
  2015; Del 8 er A-differensiatorer. Avslutt med tidsbudsjett-logikk for
  4-timerseksamen (3–4 oppgaver à ~60–80 min; ikke grav deg fast i ett delpunkt).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen
  «settet har 4 oppgaver à 25 p på 240 minutter, der oppgave 3 er
  estimerings-kjeden — sett opp tidsbudsjett og rekkefølge».
- **Typiske feil:** Metafeilene: pugge formler som ligger i formelsamlingen i
  stedet for å trene valg/utledning; øve kun på sannsynlighetsdelen og møte
  veggen på estimerings-kjeden; hoppe over simulering/Python fordi det «ser
  programmerings-tungt ut»; forberede hypotesetesting (feil emne).
- **Quiz: 10 · Flashcards: 10** (frekvenser, sjangre A–L, sensorkrav)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Sannsynlighet, betingning og diskrete modeller

#### Kapittel 1.1: Betinget sannsynlighet, total sannsynlighet og Bayes

- **id:** `stk1100-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Fra betinget sannsynlighet til Bayes' formel — med diagnosetest-oppsettet som åpner sett etter sett.
- **Eksamensbelegg:** Sjanger A: betinget/total/Bayes i **7/10 sett (70 %)**,
  nesten alltid oppgave 1. Kontekster (omskrevet): antistoff-/diagnosetester med
  sensitivitet og spesifisitet (V2020, V2021), recessivt gen/genetikk (V2017),
  eneggede vs. toeggede tvillinger (V2018), jukseterning valgt tilfeldig (V2022),
  bakterier med mutasjon (V2023). Ofte flere runder på samme oppsett (oppdatere
  sannsynligheter over generasjoner/tester). Prioritet: **perfekt** (nivå 1 punkt 5).
- **Forkunnskaper (kryssbok):** [R1 8.4 Betinget sannsynlighet](/bok/r1/r1-8-4)
  og [R1 8.3 Grunnleggende sannsynlighet](/bok/r1/r1-8-3), evt.
  [S1 5.2 Betinget sannsynlighet](/bok/s1/s1-5-2).
- **Innholdskontrakt:** $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$;
  multiplikasjonsregelen; loven om total sannsynlighet
  $P(B) = \sum_i P(B \mid A_i)P(A_i)$ over en partisjon; Bayes' formel
  $P(A_j \mid B) = \frac{P(B \mid A_j)P(A_j)}{\sum_i P(B \mid A_i)P(A_i)}$;
  uavhengighet via betinging ($P(A \mid B) = P(A)$). **Sensorkrav 1 innarbeides
  her:** definer hendelsene presist med egne symboler FØR regning («La $S$ =
  personen har antistoffer, $T$ = testen er positiv») — fasit begynner alltid
  slik, og svar uten definerte hendelser regnes som ufullstendige.
  Diagnostikk-vokabularet: sensitivitet, spesifisitet, falsk positiv/negativ,
  prevalens — og hvorfor lav prevalens gir overraskende lav
  $P(\text{antistoff} \mid \text{positiv})$. Tre-/tabelloppsett som alternative
  regneveier; oppdatering over flere runder. Alt utledes/resonneres aktivt.
  Merk: **ren kombinatorikk kreves i praksis ikke** — telling holdes på
  gunstige/mulige-nivå.
- **Oppgavesjangre:** A. Mønstereksempel: «En hurtigtest har sensitivitet 94 %
  og spesifisitet 99,8 %, og 1 % av befolkningen har antistoffer. Definer
  hendelsene med symboler, finn sannsynligheten for positiv test, og for
  antistoffer gitt positiv test. Kommenter tallet.»
- **Typiske feil (analysen §5):** Forveksle $P(A \mid B)$ og $P(B \mid A)$
  (kjernen i diagnostikk-oppgavene); glemme totalsannsynligheten i nevneren;
  regne uten å definere hendelser (sensortrekk); anta uavhengighet uten belegg.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Stokastiske variable, forventning og varians

- **id:** `stk1100-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Punktsannsynlighet, tetthet og fordelingsfunksjon — og momentregnereglene for lineærkombinasjoner som står i 100 % av settene.
- **Eksamensbelegg:** Forventning/varians/standardfeil og regneregler for
  lineærkombinasjoner i **alle 10 sett (100 %)** — det hyppigste temaet i
  arkivet, verktøyet i praktisk talt hver oppgave. Kovarians/korrelasjon
  eksplisitt i 2/10 (V2015, V2022). Prioritet: **perfekt** (nivå 1 punkt 3).
- **Forkunnskaper (kryssbok):**
  [S1 6.1 Diskrete sannsynlighetsfordelinger](/bok/s1/s1-6-1),
  [S2 4.1 Sannsynlighetsfordelinger](/bok/s2/s2-4-1) og
  [S2 4.6 Kontinuerlige sannsynlighetsfordelinger](/bok/s2/s2-4-6).
- **Innholdskontrakt:** Diskret vs. kontinuerlig stokastisk variabel;
  punktsannsynlighet $p(x)$, tetthet $f(x)$, fordelingsfunksjon
  $F(x) = P(X \le x)$ og sammenhengene ($F' = f$; $P(a < X \le b) = F(b) - F(a)$);
  **$P(X = x) = 0$ for kontinuerlig $X$, og $f(x)$ er IKKE en sannsynlighet**
  (kan overstige 1). Forventning $E(X) = \sum x\,p(x)$ / $\int x f(x)\,dx$;
  **regelen $E[g(X)] = \int g(x)f(x)\,dx$** (og for simultanfordelinger
  $E[g(X,Y)] = \iint g\,f$); variansen $\text{Var}(X) = E(X^2) - [E(X)]^2$
  (regneformelen, aktivt). Regnereglene (aktivt, MÅ sitte i hodet — de står ikke
  i brukbar form i formelsamlingen): $E(aX + bY) = aE(X) + bE(Y)$;
  $\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$
  — med kovariansleddet som hovedpoeng; $\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$,
  $\rho = \text{Cov}(X,Y)/\sqrt{\text{Var}(X)\text{Var}(Y)}$, skalering
  $\text{Cov}(aX + b, cY + d) = ac\,\text{Cov}(X,Y)$; uavhengig $\Rightarrow$
  ukorrelert, men IKKE omvendt. Fordelingskatalogens $E$/Var står i
  formelsamlingen — regnereglene må utledes/brukes aktivt.
- **Oppgavesjangre:** Fundament for A, B, C, D. Mønstereksempel: «$X$ og $Y$ har
  $E(X) = 4$, $E(Y) = -1$, $\text{Var}(X) = 2$, $\text{Var}(Y) = 3$ og
  $\text{Cov}(X,Y) = -0{,}5$. Finn $E(3X - 2Y)$ og $\text{Var}(3X - 2Y)$.»
- **Typiske feil (analysen §5.4, §5.9):** Tro at $P(X = x) = f(x)$ for
  kontinuerlig $X$; glemme kovariansleddet i $\text{Var}(aX + bY)$ — eller ta det
  med når variablene er uavhengige; glemme kvadratene på koeffisientene; tro at
  $\text{Var}(X - Y) = \text{Var}(X) - \text{Var}(Y)$.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.3: Diskrete fordelinger og Poisson-prosessen

- **id:** `stk1100-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `stk1100-1-2`
- **kapitteltype:** teori
- **description:** Fra situasjonsbeskrivelse til riktig diskret modell — binomisk, Poisson-prosess, geometrisk, negativ binomisk — og estimatoren som ofte følger.
- **Eksamensbelegg:** Sjanger B: Poisson/Poisson-prosess i 3/10 (drikkevanns-
  E.coli V2024, seldyrtelling V2022, fødsler som Poisson-prosess V2019);
  binomisk i 3/10 (V2016, V2020, V2024); geometrisk/negativ binomisk i 1/10
  (V2021). Ofte kombinert med en estimator og standardfeil, eller med E/V utledet
  via MGF (kobling kap. 4.1). Prioritet: **kunne** (modellvalget: perfekt).
- **Forkunnskaper:** kap. 1.2; kryssbok [S1 6.1 Diskrete
  sannsynlighetsfordelinger](/bok/s1/s1-6-1).
- **Innholdskontrakt:** Modellvalgs-tabellen er kjernen — situasjon → fordeling:
  fast antall uavhengige forsøk med konstant suksess-sannsynlighet →
  binomisk$(n,p)$; hendelser i tid/rom → Poisson$(\lambda t)$ **med
  prosessforutsetningene (uavhengige disjunkte intervaller, konstant rate, ikke
  to hendelser samtidig) og rateskalering $\lambda t$**; ventetid til første
  suksess → geometrisk; til $k$-te suksess → negativ binomisk. Grepene:
  $P(X \ge 1) = 1 - P(X = 0)$; uavhengighet → multipliser; «hvor stor prøve
  trengs for at $P(X \ge 1) > p$» (løs for $t$). Punktsannsynlighetene med $E$/Var
  står i formelsamlingen (tren oppslag); MGF-utledet E/V og «sum av Poisson er
  Poisson$(\Sigma\lambda)$» forhåndsvarsles (fullføres i 4.1). Kobling Poisson ↔
  eksponensial ventetid (fullføres i 2.1). **Sensorkrav 1–2:** «La $X$ = antall
  …, da er $X \sim \ldots$» med parametre, og forutsetningene nevnes der de brukes.
- **Oppgavesjangre:** B. Mønstereksempel: «Antall bakterier i $v_0$ liter vann er
  Poisson-fordelt med rate $\lambda$ per liter. Angi modellens forutsetninger,
  finn $E$ og $\text{Var}$ for antallet, sannsynligheten for minst én bakterie,
  og hvor stor prøve som trengs for at denne sannsynligheten skal overstige
  0,9975.»
- **Typiske feil (analysen §5.6):** Velge binomisk der antall forsøk ikke er
  fast; glemme å skalere raten til intervallet ($\lambda t$, ikke $\lambda$);
  lese kumulativ tabell som punktsannsynlighet; ikke begrunne modellvalget
  (sensortrekk).
- **Quiz: 25 · Flashcards: 25**

**Prøve-kvote Del 1:** 4 prøver (1.A Bayes/total med hendelsesdefinisjoner
35 min · 1.B momentregneregler for lineærkombinasjoner med kovariansfeller
30 min · 1.C diskret modellvalg + Poisson-prosess 35 min · 1.D blandet
sannsynlighetsoppgave (oppgave-1-format, eksamensnivå) 40 min).

---

### Del 2 — Kontinuerlige fordelinger og gamma-apparatet

#### Kapittel 2.1: Kontinuerlige fordelinger: tetthet, CDF, median og eksponensial

- **id:** `stk1100-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `stk1100-1-2`
- **kapitteltype:** teori
- **description:** Normeringskonstant, fordelingsfunksjon, median ved F(m)=½ og momenter — med eksponensialfordelingen i begge parametriseringer.
- **Eksamensbelegg:** Median/kvantil ved å løse $F(m) = p$ i **9/10 sett (90 %)**;
  eksponensialfordelingen eksplisitt (inkl. minneløshet) i 5/10 (V2015, V2016,
  V2019, V2021, V2023). Grunnlaget under sjanger C (egendefinert tetthet) og
  under hele estimerings-kjeden. Prioritet: **perfekt** (nivå 1 punkt 7 +
  fordelingskatalog).
- **Forkunnskaper:** kap. 1.2; kryssbok [R2 2.4 Bestemt
  integral](/bok/r2/r2-2-4), [R2 2.2 Ubestemt integral](/bok/r2/r2-2-2),
  [S2 4.6 Kontinuerlige sannsynlighetsfordelinger](/bok/s2/s2-4-6).
- **Innholdskontrakt:** Tetthet, normeringskonstant ($\int f = 1$),
  fordelingsfunksjon $F(x) = \int_{-\infty}^x f$ (stykkevis definisjon; verdiene
  0 og 1 utenfor støtten); **median og kvantiler ved å løse $F(m) = p$ (aktivt)**;
  momenter $E(X)$, $E(X^2)$, $\text{Var}(X)$ ved integrasjon. Uniform fordeling.
  **Eksponensialfordelingen i BEGGE parametriseringer** (analysens §5.6-felle):
  rate $f(x) = \lambda e^{-\lambda x}$, $F(x) = 1 - e^{-\lambda x}$,
  $E(X) = 1/\lambda$; og forventning $f(x) = \frac{1}{\mu}e^{-x/\mu}$,
  $E(X) = \mu$ — **studenten skal lese oppgavens definisjon hver gang**;
  **minneløsheten $P(X > s + t \mid X > t) = P(X > s)$ utledes aktivt** og
  identifiseres som unik for eksponensial (blant kontinuerlige); kobling til
  Poisson-prosessens ventetider. Formelsamlingen har standardfordelingene — men
  medianregning og minneløshetsutledning må gjøres aktivt.
- **Oppgavesjangre:** Fundament for C, G. Mønstereksempel: «Levetiden til en
  sensor er eksponensialfordelt med forventning $\mu = 5$ år. Utled $F$, finn
  medianlevetiden, og vis at $P(X > 8 \mid X > 3) = P(X > 5)$ — hvilken egenskap
  uttrykker dette?»
- **Typiske feil (analysen §5.6, §5.4, §5.12):** Blande rate- og
  forventnings-parametriseringen; løse $f(m) = ½$ i stedet for $F(m) = ½$;
  blande tetthet og sannsynlighet; slurve med stykkevis $F$ (utenfor støtten).
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 2.2: Gammafordelingen, kjikvadrat og Γ-verktøyet

- **id:** `stk1100-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `stk1100-2-1`
- **kapitteltype:** teori
- **description:** STK1100s kjæledegge — gamma(α,β), identiteten χ²ₙ=gamma(n/2,2), gammaintegralet og E(Vʳ)-formelen som bygger alle pivotalene.
- **Eksamensbelegg:** Gamma/kjikvadrat (inkl. sum → gamma, χ²ₙ = gamma$(n/2,2)$)
  i **7/10 sett (70 %)** (V2015, V2017, V2018, V2019, V2021, V2022, V2023) —
  byggeklossen for både pivotaler og forventningsretthet. Prioritet: **perfekt**
  (nivå 1 punkt 4).
- **Forkunnskaper:** kap. 2.1; kryssbok [R2 2.4 Bestemt integral](/bok/r2/r2-2-4),
  [R2 3.2 Delvis integrasjon](/bok/r2/r2-3-2).
- **Innholdskontrakt:** **Gamma$(\alpha, \beta)$ med $\beta$ = skalaparameter:**
  $f(x) = \frac{1}{\beta^\alpha \Gamma(\alpha)} x^{\alpha-1} e^{-x/\beta}$,
  $x > 0$, $E(X) = \alpha\beta$, $\text{Var}(X) = \alpha\beta^2$.
  **Kjikvadrat med $n$ frihetsgrader = gamma$(n/2, 2)$** (identiteten skal sitte).
  Gammafunksjonen (aktivt): $\Gamma(\tfrac12) = \sqrt\pi$, $\Gamma(1) = 1$,
  $\Gamma(\alpha + 1) = \alpha\Gamma(\alpha)$, $\Gamma(a) = (a-1)!$ for heltall;
  **gammaintegralet $\int_0^\infty x^{a-1}e^{-x/b}\,dx = b^a\Gamma(a)$** (ofte
  oppgitt i settet — tren bruken); **E(Vʳ)-formelen $E(V^r) = \beta^r
  \frac{\Gamma(\alpha + r)}{\Gamma(\alpha)}$ for $V \sim$ gamma$(\alpha,\beta)$,
  $r > -\alpha$** — brukes til skjevhet av potens-/rot-estimatorer (kobling 5.3).
  Nøkkelresultatet «**sum av uavhengige gamma med felles skalaparameter er
  gamma$(\Sigma\alpha, \beta)$**» (bevises via MGF i 4.1; resultatet presenteres
  her). Tetthet/E/Var/persentiler står i formelsamlingen (tren oppslag —
  $\chi^2_{\nu,\alpha}$ med riktige frihetsgrader); Γ-manipulasjonene og E(Vʳ)
  må brukes aktivt.
- **Oppgavesjangre:** Fundament for C, E, G. Mønstereksempel: «La $V \sim$
  gamma$(\alpha, \beta)$. Bruk gammaintegralet til å vise at $E(V) = \alpha\beta$
  og $E(\sqrt V) = \beta^{1/2}\Gamma(\alpha + \tfrac12)/\Gamma(\alpha)$, og
  forklar hvorfor $\sqrt V$ ikke er forventningsrett for $\sqrt{\alpha\beta}$.»
- **Typiske feil (analysen §5.13, §5.7):** Feil frihetsgrader i χ²-koblingen
  ($\chi^2_{2n}$ vs. $\chi^2_n$ — les hvilken pivot); glemme Γ-faktoren i
  potens-/rot-momenter; forveksle skala- og rate-parametrisering av gamma;
  regnefeil i $\Gamma(\alpha+1) = \alpha\Gamma(\alpha)$-nedtrappingen.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 2.3: Drill: den egendefinerte og «eksotiske» tettheten (sjanger C)

- **id:** `stk1100-2-3` · **number:** 2.3 · **estimatedMinutes:** 80 · **prerequisites:** `stk1100-2-2`
- **kapitteltype:** drill
- **description:** Standardtreningen i kontinuerlig sannsynlighet: fra oppgitt tetthet til normering, CDF, median og momenter — og beredskapen mot et ukjent fordelingsnavn.
- **Eksamensbelegg:** «Navngitt eksotisk» kontinuerlig fordeling i **6/10 sett
  (60 %)** — egen UiO-sjanger: Laplace (V2016, V2024), Pareto/inntekt (V2017),
  Rayleigh (V2019), lognormal/alkoholforbruk (V2020), Weibull/levetid (V2021),
  binormal (V2022). Alltid håndterbar med standardteknikkene; oppgaven gir selv
  MGF, momentformel eller integralet. Nesten alltid inngangen til den store
  estimerings-oppgaven. Prioritet: **perfekt** (nivå 2 punkt 9, men
  standardtrening).
- **Forkunnskaper:** kap. 2.1–2.2.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) normer
  ($\int f = 1$ gir konstanten); 2) utled $F(x)$ ved integrasjon — stykkevis,
  0 og 1 utenfor støtten; 3) regn sannsynligheter og betingede sannsynligheter
  fra $F$; 4) median/kvantiler ved $F(m) = p$ (særlig andregrads-, log- og
  potenslikninger à la Weibull/Pareto/Rayleigh); 5) $E(X)$, $E(X^2)$,
  $\text{Var}(X)$ ved integrasjon (ofte via gammaintegralet og Γ); 6) pek
  fremover: $F^{-1}$ er inversjonsmetodens råstoff (kap. 7.1), og en passende
  potens-/log-transformasjon gir gamma/eksponensial (kap. 4.3).
  **«Oppskriftsfordeling»-beredskapen:** når oppgaven serverer et ukjent
  fordelingsnavn med oppgitt tetthet/CDF/MGF, brukes standardteknikkene — ukjent
  navn skal ikke skremme. Gjennomregnet eksamenscase med sensor-margnotater.
  8–15 oppgaver over varierte familier: Laplace (dobbelt-eksponensial), Pareto
  (hale $k/x^{\theta+1}$), Rayleigh, Weibull, lognormal, samt rene
  potens-/stykkevis tettheter — alle på eksamensnivå.
- **Oppgavesjangre:** C. Mønstereksempel: «Inntekten er Pareto-fordelt med kjent
  minsteinntekt $k$ og formparameter $\theta$. Utled den kumulative fordelingen,
  vis at medianen er $k \cdot 2^{1/\theta}$, og at $2\theta\ln(X/k)$ er
  gammafordelt.»
- **Typiske feil (analysen §5.12, §5.4):** Glemme normering før videre regning;
  slurve med stykkevis $F$; median-algebra (log/potens/andregrad);
  la ukjent fordelingsnavn skremme til å gjette i stedet for å regne.
- **Quiz: 25 · Flashcards: 15**

**Prøve-kvote Del 2:** 4 prøver (2.A CDF, median og momenter for en oppgitt
tetthet 35 min · 2.B eksponensial i begge parametriseringer + minneløshet
30 min · 2.C gamma/χ²-identiteter og Γ-/E(Vʳ)-regning 35 min · 2.D full
egendefinert/eksotisk-tetthet-oppgave (sjanger C, eksamensnivå) 45 min).

---

### Del 3 — Simultanfordeling og uavhengighet

#### Kapittel 3.1: Simultantetthet: marginaler, betinget tetthet og område-sannsynligheter

- **id:** `stk1100-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `stk1100-2-1`
- **kapitteltype:** teori
- **description:** Fra en simultantetthet til normeringskonstant, marginaler, betinget tetthet og P(område) via dobbeltintegral — med området alltid tegnet.
- **Eksamensbelegg:** Sjanger D: simultanfordeling (marginaler, uavhengighetssjekk,
  betinget tetthet) i **8/10 sett (80 %)**, nesten alltid en egen stor oppgave
  (2015–2020, 2022, 2023, 2024). Prioritet: **perfekt** (nivå 1 punkt 2).
- **Forkunnskaper:** kap. 2.1; kryssbok [R2 2.4 Bestemt integral](/bok/r2/r2-2-4)
  (dobbeltintegral bygger på enkelt bestemt integral).
- **Innholdskontrakt:** Simultantetthet $f(x,y)$; normeringskonstant ($\iint f = 1$);
  **marginaltettheter ved å integrere ut den andre variabelen**
  $f_X(x) = \int f(x,y)\,dy$; betinget tetthet
  $f_{Y \mid X = x}(y) = f(x,y)/f_X(x)$ og betinget forventning $E(Y \mid X = x)$;
  $E[g(X,Y)] = \iint g\,f$. **$P(\text{område})$ via dobbeltintegral —
  sensorkrav 3: TEGN integrasjonsområdet for å sette grensene** (særlig
  $P(Y \ge X)$ og geometriske sannsynligheter $P(X^2 + Y^2 \le r^2)$). Diskret
  simultanfordeling i tabell (marginaler ved rad-/kolonnesum, betingede
  fordelinger) som lettere parallell. Uavhengighetssjekken presenteres her og
  drilles i 3.2.
- **Oppgavesjangre:** D. Mønstereksempel: «$(X,Y)$ har tetthet proporsjonal med
  $x(x + y)$ på et rektangel. Bestem normeringskonstanten, finn $P(Y \ge X)$,
  begge marginaltetthetene og den betingede tettheten $f_{Y \mid X = x}(y)$.»
- **Typiske feil (analysen §5.2, §5.4):** Feil grenser i dobbeltintegralet fordi
  området ikke er tegnet; glemme normeringskonstanten; forveksle marginal- og
  betinget tetthet; blande tetthet og sannsynlighet.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 3.2: Drill: uavhengighet ved faktorisering (eget drillmål)

- **id:** `stk1100-3-2` · **number:** 3.2 · **estimatedMinutes:** 70 · **prerequisites:** `stk1100-3-1`
- **kapitteltype:** drill
- **description:** Bevis (eller motbevis) uavhengighet ved å sjekke f(x,y)=f_X(x)·f_Y(y) for ALLE (x,y) — inkludert null-området sensor alltid ser etter.
- **Eksamensbelegg:** Uavhengighetssjekken er en fast deloppgave i sjanger D
  (~80 %) og et eksplisitt sensorkrav (§4 punkt 2): fasiten viser
  $f(x,y) = f_X(x)f_Y(y)$ for **alle** $(x,y)$, og ett moteksempel (én celle/ett
  område, ofte i null-området) er nok til å motbevise. Prioritet: **perfekt** —
  et selvstendig, hyppig belønnet drillmål.
- **Forkunnskaper:** kap. 3.1.
- **Innholdskontrakt:** Løsningsoppskrift: 1) finn begge marginaltetthetene;
  2) dann produktet $f_X(x)f_Y(y)$; 3) **sammenlign med $f(x,y)$ på HELE planet —
  også der én eller begge er 0**: hvis støtten til $f(x,y)$ ikke er et
  produktområde (rektangel), er $X$ og $Y$ automatisk avhengige (moteksempel i
  null-området); 4) konkluder med begrunnelse. Kontrast diskret variant
  (tabell): én celle der $p(x,y) \neq p_X(x)p_Y(y)$ motbeviser; én 0-celle der
  begge marginaler er positive avgjør umiddelbart. Nyansen **ukorrelert vs.
  uavhengig** (uavhengig ⇒ ukorrelert, ikke omvendt) repeteres kort. Gjennomregnet
  eksamenscase med sensor-margnotat om nettopp null-området. 8–15 oppgaver:
  produktstøtte (uavhengig), trekantstøtte/simplex (avhengig via null-området),
  tetthet som faktoriserer på positiv støtte men ikke globalt, diskrete tabeller.
- **Oppgavesjangre:** D (uavhengighetsdelen). Mønstereksempel: «$(X,Y)$ har
  tetthet $f(x,y) = 8xy$ på trekanten $0 < x < y < 1$. Avgjør med full
  begrunnelse om $X$ og $Y$ er uavhengige — og forklar hvorfor svaret ikke kan
  leses av selve produktformen alene.»
- **Typiske feil (analysen §5.1):** Sjekke faktoriseringen bare der tettheten er
  positiv og glemme null-området; konkludere «uavhengig» fordi $f$ ser ut som et
  produkt, uten å sjekke støtten; slutte fra ukorrelert til uavhengig.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A marginaler og betinget tetthet fra oppgitt
$f(x,y)$ 35 min · 3.B $P(\text{område})$ med tegnet integrasjonsområde 35 min ·
3.C uavhengighet ved faktorisering inkl. null-området 30 min · 3.D full
simultantetthet-oppgave (sjanger D, eksamensnivå) 45 min).

---

### Del 4 — Transformasjon: broen til pivotalen *(prioritet: PERFEKT — ~90 %)*

#### Kapittel 4.1: Momentgenererende funksjoner

- **id:** `stk1100-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk1100-2-1`
- **kapitteltype:** teori
- **description:** Utled E og V fra MGF-en (med konvergenskravet), og identifiser fordelingen til en sum eller et gjennomsnitt ved å multiplisere MGF-ene.
- **Eksamensbelegg:** Sjanger F: MGF (utlede E/V; identifisere sum-fordeling) i
  **6–7/10 sett (~65 %)** (V2015, V2016, V2018, V2021, V2022, V2023 + normal-MGF
  V2020). Prioritet: **kunne** (kjedeledd — grenser til perfekt).
- **Forkunnskaper:** kap. 2.1–2.2; kryssbok [R1 4.1 Derivasjonsregler](/bok/r1/r1-4-1).
- **Innholdskontrakt:** Definisjonen $M_X(t) = E(e^{tX})$; **utled MGF ved
  integrasjon/summasjon med konvergenskravet på $t$ (sensorkrav 4)** — Gamma:
  $M(t) = (1 - \beta t)^{-\alpha}$, $t < 1/\beta$; Poisson:
  $M(t) = e^{\lambda(e^t - 1)}$; normal: $M(t) = e^{\mu t + \sigma^2 t^2/2}$;
  geometrisk: $e^t p/(1 - (1-p)e^t)$. **$E(X) = M'(0)$, $E(X^2) = M''(0)$,
  $\text{Var} = E(X^2) - E(X)^2$** (aktivt); snarveien via kumulantgenererende
  $R(t) = \ln M(t)$, $E = R'(0)$, $V = R''(0)$. **Sum av uavhengige:
  $M_{\Sigma X}(t) = \prod M_{X_i}(t)$ → identifiser resultatfordelingen**
  (Poisson-sum → Poisson$(\Sigma\lambda)$; eksponensial-sum → gamma; gjennomsnitt
  av $n$ eksponensiale → gamma$(n, \mu/n)$); entydighetsargumentet formuleres
  («MGF-en bestemmer fordelingen»). MGF-katalogen står i formelsamlingen (tren
  oppslag/gjenkjenning); utledningen av en gitt MGF og identifikasjonen av
  summen må gjøres aktivt.
- **Oppgavesjangre:** F. Mønstereksempel: «Vis at gammafordelingens MGF er
  $(1 - \beta t)^{-\alpha}$ for $t < 1/\beta$, bruk den til å finne $E(X)$ og
  $\text{Var}(X)$, og forklar hvorfor summen av $n$ uavhengige eksponensiale med
  forventning $\mu$ er gammafordelt.»
- **Typiske feil (analysen §5.5):** Glemme konvergenskravet på $t$; addere i
  stedet for å multiplisere MGF-ene for en sum; identifisere summen uten
  entydighetsargumentet; regnefeil i $M'(0)$/$M''(0)$.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 4.2: Transformasjonsteknikkene: CDF-metoden og Jacobi

- **id:** `stk1100-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `stk1100-2-2`, `stk1100-3-1`
- **kapitteltype:** teori
- **description:** Finn fordelingen til Y=g(X) med CDF-metoden, og til (U,V)=g(X,Y) med Jacobi-determinanten — teknikkene som identifiserer fordelinger og bygger pivotaler.
- **Eksamensbelegg:** Transformasjon i **9/10 sett (90 %)**, den mest brukte
  teknikken overhodet og «broen til pivotalen». Jacobi-transformasjon av $(X,Y)$
  som ren oppgave i ~3/10 (sjanger J): $U = X+Y$ & $V = X$ (V2020), $U = X+Y$ &
  $V = X/(X+Y)$ (V2019). Prioritet: **perfekt** (nivå 1 punkt 3).
- **Forkunnskaper:** kap. 2.2, 3.1; kryssbok [R1 4.1 Derivasjonsregler](/bok/r1/r1-4-1).
- **Innholdskontrakt:** **CDF-metoden (aktivt):**
  $F_Y(y) = P(g(X) \le y) = P(X \le g^{-1}(y))$ for monoton $g$ — løs ulikheten
  (snu ved avtakende $g$), sett inn $F_X$, deriver til tetthet. **Jacobi-metoden
  (bivariat, aktivt):** invers $X = X(U,V)$, $Y = Y(U,V)$;
  $f_{UV}(u,v) = f_{XY}(x(u,v), y(u,v)) \cdot |J|$ der
  $|J| = \left|\det \frac{\partial(x,y)}{\partial(u,v)}\right|$
  (absoluttverdien!); integrer ut for marginal (tegn området!). **Kroneksemplene
  som skal sitte:** $(X-\mu)^2/\sigma^2 \sim \chi^2_1 = $ gamma$(\tfrac12, 2)$;
  $(X/\theta)^2 \sim$ gamma$(1,2)$; $2X/\mu \sim$ eksponensial (χ²₂-koblingen);
  $(X/\beta)^\alpha \sim$ eksponensial (Weibull); $\Sigma$ standardiserte
  kvadrater $\sim \chi^2_n$. Kobling: MGF-identifikasjon (4.1) er den tredje
  transformasjonsteknikken. Alt utledes aktivt — ingen gjettede tettheter
  (sensorkrav 9).
- **Oppgavesjangre:** E + J. Mønstereksempler: (E) «La $X$ være standardnormal og
  $Y = X^2$. Vis ved CDF-metoden at $Y$ er gammafordelt med formparameter
  $\tfrac12$ og skalaparameter 2.» (J) «$X$ og $Y$ er uavhengige. Sett
  $U = X + Y$ og $V = X/(X+Y)$. Finn simultantettheten til $(U,V)$ ved
  Jacobi-formelen, og marginaltettheten til $U$.»
- **Typiske feil (analysen §5.10):** Gjette tettheten til $Y = g(X)$ i stedet for
  å gå via CDF/Jacobi; glemme $|J|$ (absoluttverdien); ikke snu ulikheten for
  avtakende $g$; derivere feil ledd i kjerneregelen; feil grenser etter Jacobi
  (området ikke tegnet).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.3: Drill: transformasjon til gamma/χ² — pivot-fabrikken (eget drillmål)

- **id:** `stk1100-4-3` · **number:** 4.3 · **estimatedMinutes:** 80 · **prerequisites:** `stk1100-4-2`, `stk1100-2-2`
- **kapitteltype:** drill
- **description:** Første ledd i ryggrad-drillen: gjør en observasjon om til en gamma/χ²-størrelse på autopilot — råmaterialet til den eksakte pivotalen.
- **Eksamensbelegg:** Transformasjonen til gamma/χ² er broen til pivotal-KI-et i
  7/10 sett og «emnets viktigste bro» (analysen §2, §7 punkt 3). Standardgrepene:
  $2X/\mu \sim \chi^2_2$ (eksponensial), sum $2\sum X_i/\mu \sim \chi^2_{2n}$;
  $(X-\mu)^2/\sigma^2 \sim \chi^2_1$, sum $\Sigma \sim \chi^2_n$;
  $n(\hat\beta/\beta)^\alpha \sim$ gamma$(n,1)$ (Weibull);
  $2\theta n/\hat\theta \sim$ gamma$(n,2)$ (Pareto). Prioritet: **perfekt** —
  A-kandidatens signaturbro og drillsporets første ledd (→ 5.3 → 6.3).
- **Forkunnskaper:** kap. 4.2, 2.2.
- **Innholdskontrakt:** Løsningsoppskrift: 1) identifiser transformasjonen som
  gjør observasjonen standard (skala/kvadrat/potens/log); 2) vis med
  CDF-metoden at den enkelte transformerte størrelsen er eksponensial/gamma/χ²;
  3) bruk «sum av uavhengige gamma med felles skala er gamma$(\Sigma\alpha,
  \beta)$» (via MGF, 4.1) til å løfte til summen — **pass på frihetsgradene:
  $\chi^2_{2n}$ for eksponensial-pivoten, $\chi^2_n$ for normal-med-kjent-µ,
  gamma$(n,\cdot)$ for Weibull/Pareto**; 4) pek fremover: dette er $W(X;\theta)$
  som gir eksakt KI i 6.1. Gjennomregnet eksamenscase med sensor-margnotater
  (hvor poengene sitter: ulikhetshåndteringen, MGF-entydigheten, frihetsgradene).
  8–15 varianter: eksponensial (rate og forventning), normal-kvadrat, Weibull-
  potensløft, Pareto-log-løft, «oppskriftsfordeling» med oppgitt CDF — alle på
  eksamensnivå.
- **Oppgavesjangre:** E (kjernevarianten mot pivotal). Mønstereksempel:
  «Levetidene $X_1, \ldots, X_{10}$ er uavhengige og eksponensialfordelte med
  forventning $\mu$. Vis ved CDF-metoden at $2X_1/\mu \sim \chi^2_2$, og angi med
  begrunnelse fordelingen til $2\sum X_i/\mu$.»
- **Typiske feil (analysen §5.13, §5.10):** Frihetsgrader $n$ i stedet for $2n$
  (eller omvendt); slurve med ulikhetsretningen i CDF-steget; hoppe over
  MGF-entydigheten for summen; glemme potens-/log-løftet for Weibull/Pareto og
  prøve å bruke apparatet direkte.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A MGF: utled E/V med konvergenskrav 30 min ·
4.B CDF-metoden på monotone transformasjoner 30 min · 4.C Jacobi for
$(X,Y)\to(U,V)$ 35 min · 4.D transformasjon til gamma/χ² full utledning
(eksamensnivå, pivot-forberedelse) 45 min).

---

### Del 5 — Punktestimering *(prioritet: PERFEKT — kjeden starter her)*

#### Kapittel 5.1: Estimatorer og egenskaper: forventningsretthet, varians og skjevhet

- **id:** `stk1100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk1100-1-2`, `stk1100-2-2`
- **kapitteltype:** teori
- **description:** Hva som gjør en estimator god — forventningsretthet, varians og standardfeil — og hvordan skjevhet kvantifiseres og korrigeres.
- **Eksamensbelegg:** Punktestimering i **9/10 sett (90 %)**; estimator-egenskaper
  (forventningsretthet, varians, standardfeil) er del av hver estimerings-oppgave.
  Skjevhet eksplisitt kvantifisert i flere sett (V2018: $\sqrt{\hat\sigma^2}$
  skjev for $\sigma$ selv om $\hat\sigma^2$ er forventningsrett for $\sigma^2$;
  Weibull-$\hat\beta$ med Γ-faktor V2021). Prioritet: **perfekt** (kjedens
  egenskapsledd).
- **Forkunnskaper:** kap. 1.2 (momentregneregler), 2.2 (E(Vʳ), Γ).
- **Innholdskontrakt:** **Estimator (stor bokstav, stokastisk) vs. estimat (tall)
  — skilles konsekvent (sensorkrav 6);** forventningsretthet
  $E(\hat\theta) = \theta$ (aktivt: regn $E$ av kandidaten med regnereglene fra
  1.2); varians/standardfeil $\text{Var}(\hat\theta)$, estimert SE; skjevhet
  (bias) $E(\hat\theta) - \theta$. **Skjevhetskvantifisering og -korreksjon
  (aktivt):** når $E(\hat\theta) = c\,\theta$ med kjent $c \neq 1$, er
  $\hat\theta/c$ forventningsrett; **nøkkelinnsikten $E[\sqrt V] \neq
  \sqrt{E[V]}$** (rot/potens av forventningsrett estimator er skjev) via
  E(Vʳ)-formelen fra 2.2; Weibull-/gamma-eksemplet med Γ-faktoren. Standardresultatene:
  $\bar X$ forventningsrett for $\mu$ med $\text{Var}(\bar X) = \sigma^2/n$;
  $S^2 = \frac{1}{n-1}\sum(X_i - \bar X)^2$ forventningsrett for $\sigma^2$ (og
  hvorfor $n$-varianten er skjev). Estimator-sammenligning (to–tre kandidater på
  forventningsretthet og varians) som oppgavesjanger. Konsistens-intuisjon
  (varians → 0) kort, «bør kjenne til».
- **Oppgavesjangre:** G (egenskapsdelen). Mønstereksempel: «To estimatorer for
  $\mu$ foreslås: $\hat\mu_1 = \bar X$ og $\hat\mu_2 = (X_1 + X_n)/2$. Vis at
  begge er forventningsrette, finn variansene, og avgjør hvilken som bør brukes.»
- **Typiske feil (analysen §5.7, §5.8):** Anta at enhver estimator er
  forventningsrett; forveksle at $\hat\sigma^2$ er forventningsrett for
  $\sigma^2$ mens $\sqrt{\hat\sigma^2}$ er skjev for $\sigma$; glemme Γ-faktoren i
  Weibull-/gamma-estimatorer; forveksle estimator og estimat.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 5.2: Maximum likelihood og momentmetoden

- **id:** `stk1100-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `stk1100-5-1`, `stk1100-2-1`
- **kapitteltype:** teori
- **description:** Likelihood → log-likelihood → derivér → løs: den utledningen som alltid kommer, pluss momentmetoden som alternativ.
- **Eksamensbelegg:** ML-/moment-/annen estimator i **9/10 sett (90 %)** —
  «emnets viktigste ferdighet» (sjanger G), kjedens første ledd. Varianter:
  ML på eksotisk fordeling (Pareto V2017, Rayleigh V2019, Weibull V2021, Laplace
  V2024), momentestimator som alternativ, «annen foreslått estimator» som skal
  vurderes. Prioritet: **perfekt** (nivå 1 punkt 1).
- **Forkunnskaper:** kap. 5.1, 2.1; kryssbok [R1 4.1 Derivasjonsregler](/bok/r1/r1-4-1).
- **Innholdskontrakt:** **ML-ritualet MÅ UTLEDES AKTIVT med alle trinn
  (sensorkrav 5):** 1) $L(\theta) = \prod_{i=1}^n f(x_i; \theta)$ for uavhengige
  observasjoner; 2) $\ell(\theta) = \ln L(\theta)$ — og HVORFOR logaritmen
  (produkter → summer, monotoni bevarer maksimum); 3) $\ell'(\theta) = 0$;
  4) løs for $\hat\theta$. (STK1100-fasiten er mildere enn NTNU på eksplisitt
  maksimumskontroll, men vis hele regnekjeden.) Gjennomregnede standardtilfeller:
  eksponensial ($\hat\mu = \bar X$ / $\hat\lambda = 1/\bar X$), Poisson
  ($\hat\lambda = \bar X$), normal, gamma med kjent formparameter, Pareto/Weibull.
  **Momentmetoden (aktivt):** avstem $E(X)$ mot $\bar X$ (og evt. $E(X^2)$ mot
  $\overline{X^2}$) og løs for parameteren; når ML og moment gir ulikt svar.
  Invariansprinsippet ($\widehat{g(\theta)} = g(\hat\theta)$) kort, som bro til
  KI-transformasjon (6.1). Formelsamlingen har fordelingene; likelihood-oppsettet
  og utledningen må gjøres aktivt.
- **Oppgavesjangre:** G. Mønstereksempel: «Bruddstyrken til $n$ fiberprøver er
  gammafordelt med kjent formparameter 4 og ukjent skalaparameter $\beta$. Utled
  ML-estimatoren for $\beta$, og vis at estimatoren er forventningsrett.»
- **Typiske feil (analysen §5.8):** Derivere uten å ta logaritme først; ikke løse
  ligningen fullstendig; forveksle estimator og estimat i svaret; glemme at
  likelihooden er et produkt over ALLE observasjoner.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 5.3: Drill: estimatoren fra fordeling til egenskaper (sjanger G)

- **id:** `stk1100-5-3` · **number:** 5.3 · **estimatedMinutes:** 75 · **prerequisites:** `stk1100-5-2`, `stk1100-2-2`
- **kapitteltype:** drill
- **description:** Andre ledd i ryggrad-drillen: utled estimatoren, vis forventningsretthet (korriger skjevhet), finn variansen — i alle arkivets fordelinger.
- **Eksamensbelegg:** Dekker sjanger G-halvdelen komplett: standard-ML +
  egenskaper (90 %), skjevhetskorreksjon via Γ (A-differensiator: Weibull V2021,
  √-skjevhet V2018), estimator-sammenligning (V2015, V2017, V2022). Prioritet:
  **perfekt** — drillsporets andre ledd (4.3 → **5.3** → 6.3).
- **Forkunnskaper:** kap. 5.1–5.2, 2.2.
- **Innholdskontrakt:** Løsningsoppskrift: 1) skriv likelihood for ALLE
  observasjoner; 2) log; 3) derivér; 4) løs fullstendig for $\hat\theta$;
  5) $E(\hat\theta)$ — forventningsrett? kvantifiser og **korriger skjevhet
  via Γ/E(Vʳ)** (2.2, 5.1) der oppgaven ber om forventningsrett estimator;
  6) $\text{Var}(\hat\theta)$ og estimert SE; 7) ved flere kandidater:
  sammenlign på forventningsretthet og varians og VELG med begrunnelse.
  Gjennomregnet eksamenscase med sensor-margnotater (poeng per trinn; hvor
  toppbesvarelsen skiller seg: Γ-korreksjonen, estimator/estimat-skillet).
  8–15 oppgaver på eksamensnivå som roterer: eksponensial-, Poisson-, gamma-,
  Pareto-, Weibull-, Rayleigh-ML; minst tre med skjevhetskorreksjon via Γ og
  minst to med estimator-sammenligning. Alle med observasjonene definert («La
  $X_i$ = …, iid med fordeling …»).
- **Oppgavesjangre:** G. Mønstereksempel: «Levetidene er Weibull-fordelte med
  kjent formparameter $\alpha$ og ukjent skalaparameter $\beta$. Utled
  ML-estimatoren $\hat\beta$, vis at $n(\hat\beta/\beta)^\alpha \sim$ gamma$(n,1)$,
  og bruk E(Vʳ)-formelen til å finne en forventningsrett korreksjon av $\hat\beta$.»
- **Typiske feil (analysen §5.7, §5.8):** Hele §5.7–5.8-repertoaret under
  tidspress — spesielt: anta forventningsretthet uten å regne; glemme Γ-faktoren;
  velge estimator uten begrunnelse i begge kriterier.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A forventningsretthet, varians og skjevhet
35 min · 5.B ML-utledning (standard + eksotisk fordeling) 40 min · 5.C
momentmetode + estimator-sammenligning 35 min · 5.D full estimerings-halvdel med
skjevhetskorreksjon (sjanger G, eksamensnivå) 45 min).

---

### Del 6 — Konfidensintervall: eksakt pivotal og CLT *(prioritet: PERFEKT — ryggradens endepunkt)*

#### Kapittel 6.1: Eksakt pivotal-KI via gamma/χ²

- **id:** `stk1100-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `stk1100-5-2`, `stk1100-4-3`
- **kapitteltype:** teori
- **description:** Finn en pivot med kjent gamma/χ²-fordeling, sett kvantiler rundt, løs ulikheten for parameteren — emnets signaturferdighet.
- **Eksamensbelegg:** Konfidensintervall i **alle 10 sett (100 %)**; **eksakt
  pivotal-KI via gamma/χ² i 7/10 (70 %) — kjerne-signaturen** (V2015, V2017,
  V2018, V2019, V2021, V2022, V2023) og den faste avslutningen på
  estimerings-oppgaven. Resultatet er ofte **asymmetrisk** — et trekk, ikke en
  feil. Prioritet: **perfekt** (nivå 1 punkt 1, A-kandidat-markør).
- **Forkunnskaper:** kap. 5.2 (estimator), 4.3 (transformasjon til gamma/χ²).
- **Innholdskontrakt:** **Pivotal-metoden MÅ UTLEDES AKTIVT:** 1) finn
  $W(X_1, \ldots, X_n; \theta)$ med kjent fordeling fri for $\theta$
  (standardpivotalene fra 4.3: $2n\hat\mu/\mu \sim \chi^2_{2n}$ eksponensial;
  $n\hat\sigma^2/\sigma^2 \sim \chi^2_n$ normal med kjent µ;
  $n(\hat\beta/\beta)^\alpha \sim$ gamma$(n,1)$ Weibull;
  $2n\theta/\hat\theta \sim$ gamma$(n,2)$ Pareto); 2) sett
  $P(w_1 \le W \le w_2) = 1 - \alpha$ med kvantiler (øvre haleareal
  $\chi^2_{\nu,\alpha}$); 3) løs dobbeltulikheten for $\theta$ — **pass
  fortegn/retning ved deling på negativ eller invertering (endepunktene bytter
  plass)**. Hovedeksemplet gjennomregnes komplett: eksakt $(1-\alpha)$-KI for µ
  (eksponensial): $\left[\frac{2\sum x_i}{\chi^2_{2n,\alpha/2}},
  \frac{2\sum x_i}{\chi^2_{2n,1-\alpha/2}}\right]$ — og at det er asymmetrisk.
  **KI-transformasjon via monoton funksjon (aktivt):** er $[L, U]$ et KI for
  $\theta$ og $g$ strengt voksende, er $[g(L), g(U)]$ et KI for $g(\theta)$
  (avtakende: endepunktene bytter plass) — brukt på median/kvantiler/avledede
  størrelser (invariansprinsippet fra 5.2). Persentilene står i formelsamlingen
  (tren riktig kvantil i riktig endepunkt, riktige frihetsgrader); pivot og
  ulikhetsløsning må utledes aktivt.
- **Oppgavesjangre:** G (KI-delen). Mønstereksempel: «Ti komponentlevetider er
  eksponensialfordelte med forventning $\mu$, og $\sum x_i = 84$. Bruk at
  $2\sum X_i/\mu \sim \chi^2_{20}$ til å utlede et eksakt 90 %-konfidensintervall
  for $\mu$, og konstruer deretter et intervall for medianlevetiden $\mu\ln 2$.»
- **Typiske feil (analysen §5.3, §5.13):** Ikke snu ulikheten ved invertering
  (endepunktene bytter plass); feil kvantil i feil endepunkt; frihetsgrader $n$
  eller $n-1$ i stedet for $2n$; tro at et asymmetrisk eksakt intervall er feil.
- **Quiz: 30 · Flashcards: 25**

#### Kapittel 6.2: CLT-tilnærmet KI og eksakt-vs-Wald-dekningen

- **id:** `stk1100-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `stk1100-6-1`
- **kapitteltype:** teori
- **description:** Det CLT-baserte Wald-intervallet som alternativ — og hvorfor det eksakte pivotal-intervallet foretrekkes ved lav n (dekning 95,9 % mot 91,1 %).
- **Eksamensbelegg:** CLT eksplisitt begrunnet til tilnærmet KI i **4/10 sett
  (40 %)** (V2020, V2022, V2023, V2024); **eksakt-pivot vs. Wald-sammenligning
  med simulert dekning eksplisitt i V2024** (for $n = 10$ dekket eksakt pivot
  95,9 % mot Wald 91,1 %; for $n = 100$ er begge ~94 %), implisitt (to
  alternativer) i V2016, V2023. Prioritet: **kunne** (CLT-formuleringen og
  dekningspoenget: perfekt — A-markør).
- **Forkunnskaper:** kap. 6.1.
- **Innholdskontrakt:** **Sentralgrenseteoremet presist formulert (aktivt,
  sensorkrav 8):** for uavhengige, identisk fordelte $X_1, \ldots, X_n$ med
  $E(X_i) = \mu$ og $\text{Var}(X_i) = \sigma^2 < \infty$ er
  $\frac{\bar X - \mu}{\sigma/\sqrt n}$ tilnærmet $N(0,1)$ for stor $n$ (alle tre
  forutsetninger med). Anvendelsen: en ML-estimator er tilnærmet normalfordelt
  for stor $n$ → **CLT-/Wald-intervallet $\hat\theta \pm z_{\alpha/2}\cdot
  \widehat{\text{SE}}$** (der SE avhenger av parameteren, brukes det estimerte).
  **Eksakt-vs-Wald-poenget (aktivt, sensorkrav 7):** når standardavviket avhenger
  av parameteren, har det eksakte pivotal-intervallet bedre dekning ved
  lav/moderat $n$; **dekningstallene 95,9 % (eksakt) vs. 91,1 % (Wald) for
  $n = 10$, og ~94 % for begge ved $n = 100$, skal med som konkret illustrasjon**;
  simuleringsstudien (kobling 7.2) leverer tallene, studenten tolker dem. Wald
  godtas som *alternativ*, aldri som det beste for lite utvalg; et asymmetrisk
  eksakt intervall er riktig. $z_\alpha$-kvantilene står i formelsamlingen.
- **Oppgavesjangre:** H. Mønstereksempel: «To konfidensintervaller for $\sigma$
  ble beregnet 1000 ganger i en simuleringsstudie med $n = 10$. Det eksakte
  dekket sann $\sigma$ 959 ganger, Wald-intervallet 911. Forklar hvorfor, hvilket
  intervall du foretrekker, og hva som skjer når $n$ øker til 100.»
- **Typiske feil (analysen §5.3):** Hoppe rett til Wald/CLT-KI uten å vurdere det
  eksakte; tro at det smalere (Wald) intervallet er «riktigere»; utelate
  «identisk fordelte»/«endelig varians» i CLT-formuleringen; bruke CLT på
  åpenbart liten/skjev $n$ uten forbehold.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.3: Drill: hele kjeden — fordeling → estimator → pivot → eksakt KI (+ CLT + bootstrap-SE)

- **id:** `stk1100-6-3` · **number:** 6.3 · **estimatedMinutes:** 95 · **prerequisites:** `stk1100-6-1`, `stk1100-5-3`, `stk1100-4-3`
- **kapitteltype:** drill
- **description:** Bokas ryggrad-drill: hele estimerings-oppgaven fra modelldefinisjon til eksakt KI, CLT-alternativ og bootstrap-SE som ÉN sammenhengende fortelling — slik den står i praktisk talt hvert sett.
- **Eksamensbelegg:** «Kjernen er én lang kjede, gjentatt hvert år: fordeling →
  estimator → forventningsretthet/varians → transformasjon til gamma/χ² → eksakt
  pivotal-KI (→ CLT-KI som alternativ, → bootstrap for SE)» (analysen §2, §7) —
  den store oppgaven (oppgave 3) i praktisk talt hvert sett siden 2015, 60–70 %
  av poengene, uendret i oppbygning. Kontekstene er levetider, inntekter,
  konsentrasjoner, målinger. Prioritet: **perfekt** — kapitlet ER eksamens
  tyngste oppgave og drillsporets sluttledd (4.3 → 5.3 → **6.3**).
- **Forkunnskaper:** kap. 6.1–6.2, 5.3, 4.3.
- **Innholdskontrakt:** Løsningsoppskrift for HELE kjeden: 1) «La $X_i$ = …, iid
  med fordeling …» (modelldefinisjon, sensorkrav 1); 2) ML-/moment-estimator
  (5.2); 3) forventningsretthet + skjevhetskorreksjon + varians (5.1/5.3);
  4) transformasjon til gamma/χ²-pivot (4.3); 5) eksakt pivotal-KI ved å løse
  ulikheten (6.1); 6) CLT-/Wald-KI som alternativ + dekningsvurdering (6.2);
  7) bootstrap-SE som numerisk alternativ (forhåndsvarsles her, fullføres i 7.2);
  8) tallsvar med tolkning og enheter (sensorkrav 11). Gjennomregnet eksamenscase
  med sensor-margnotater over ALLE ledd (eksponensial-levetidscase som hovedcase
  — treffer 4.3 + 6.1; en Weibull-/Pareto-variant som andrecase). Deretter 8–15
  kjedeoppgaver på eksamensnivå med varierte fordelinger: eksponensial
  (hovedvekt), gamma med kjent form, normal med kjent µ, Weibull-/Pareto-løft;
  minst én med skjevhetskorreksjon innbakt, minst én med eksakt-vs-Wald-
  sammenligning og minst én der KI transformeres til en avledet størrelse
  (median/kvantil).
- **Oppgavesjangre:** G + H i kjede (sjangrenes kroneksempel). Mønstereksempel:
  «Konsentrasjonene $X_1, \ldots, X_{15}$ antas eksponensialfordelte med
  forventning $\mu$, og $\sum x_i = 96$. (a) Utled ML-estimatoren og vis at den
  er forventningsrett. (b) Vis at $2\sum X_i/\mu \sim \chi^2_{30}$ og konstruer
  et eksakt 95 %-KI. (c) Gi det tilsvarende CLT-baserte intervallet og forklar
  hvilket du foretrekker for $n = 15$. (d) Beskriv hvordan parametrisk bootstrap
  gir en alternativ standardfeil.»
- **Typiske feil (analysen §5):** Alle kjedens ledd-feil under tidspress —
  spesielt: frihetsgrader $2n$; å miste tråden mellom leddene (bruke feil estimat
  videre); presentere Wald som det beste for liten $n$; glemme tolkningen.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A eksakt pivotal-utledning for eksponensialdata
40 min · 6.B pivot for gamma/normal + KI-transformasjon via monoton funksjon
40 min · 6.C CLT-KI + eksakt-vs-Wald-dekning (V2024-poenget) 35 min · 6.D full
kjedeoppgave fra fordeling til eksakt KI (sjanger G+H, eksamensnivå) 60 min).

---

### Del 7 — Simulering, bootstrap og Python *(fast siden 2015; full Python siden 2020)*

#### Kapittel 7.1: Inversjonsmetoden og numpy-verktøykassen

- **id:** `stk1100-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `stk1100-2-3`, `stk1100-4-2`
- **kapitteltype:** teori
- **description:** Fra F⁻¹ på papir til kjørbar numpy-funksjon: simuler fra en vilkårlig fordeling med inversjonsmetoden.
- **Eksamensbelegg:** Simuleringsmetode (inversjonsmetoden) i sjanger I: V2016
  (Laplace), V2019 (Rayleigh); full kjørbar Python-kode i fasiten fra V2020.
  Python/simulering totalt i **6/10 sett (60 %)**, jevnt fordelt over hele
  perioden — «bruk av programvare» testes reelt. Prioritet: **kunne** (nivå 2
  punkt 8 — men obligatorisk lesning).
- **Forkunnskaper:** kap. 2.3 ($F$ og $F^{-1}$), 4.2.
- **Innholdskontrakt:** **Inversjonsmetoden (aktivt):** er $U \sim$
  uniform$(0,1)$, har $X = F^{-1}(U)$ fordelingsfunksjon $F$ — beviset i tre
  linjer ($P(F^{-1}(U) \le x) = P(U \le F(x)) = F(x)$); arbeidsflyt: utled $F$
  (fra 2.3-drillen), løs $F(x) = u$ for $x$, implementer. Eksponensial-eksemplet
  $x = -\mu\ln(1 - u)$ og et hale-eksempel (Pareto $x = k(1-u)^{-1/\theta}$).
  **numpy/scipy-idiomene (sensorkrav 10 — koden skal være korrekt og kjørbar):**
  `np.random.uniform(size=n)`, `stats.norm.rvs(mu, sigma, size=n)` (NB: annet
  argument er standardavviket!), vektoriserte transformasjoner, `np.mean`,
  `np.var(x, ddof=1)`, `np.std(x, ddof=1)` (og HVORFOR `ddof=1` — kobling 5.1);
  funksjonsmønsteret `def simuler(n): u = np.random.uniform(size=n); return ...`.
  Kodelesing som egen ferdighet: gitt en snutt, identifiser fordelingen og hva
  som estimeres. **Alle kodeeksempler i boka skal være komplette og faktisk
  kjørt.**
- **Oppgavesjangre:** I (undertype 1). Mønstereksempel: «Tettheten til bølgehøyden
  er $f(x) = 4/x^5$ for $x > 1$. Finn fordelingsfunksjonen og dens inverse, og
  skriv en Python-funksjon som trekker $n$ realisasjoner med inversjonsmetoden.
  Hva estimerer `np.mean(simuler(10**6) > 2)`?»
- **Typiske feil (analysen §5.11):** Løse $f(x) = u$ i stedet for $F(x) = u$;
  sende varians der `scale` = standardavviket kreves; løkke der vektorisering er
  naturlig; `np.var` uten `ddof=1`; kode som ikke kjører (delvis kode gir bare
  delvis uttelling).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.2: Bootstrap for standardfeil og simulert dekning

- **id:** `stk1100-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `stk1100-7-1`, `stk1100-5-1`
- **kapitteltype:** teori
- **description:** Estimér standardfeilen du ikke kan regne — parametrisk og ikke-parametrisk bootstrap — og simuler dekningsgraden til et konfidensintervall.
- **Eksamensbelegg:** Bootstrap for standardfeil i sjanger I: ikke-parametrisk
  allerede V2015, V2016; parametrisk V2019, V2021; full Python-kode V2020.
  Simulert dekning (eksakt vs. Wald) i V2024 (kobling 6.2). «Ikke et nytt
  fenomen slik det er ved NTNU — fast inventar i et tiår» (analysen §1, §8).
  Prioritet: **kunne** — differensierer mot A sammen med 7.1.
- **Forkunnskaper:** kap. 7.1, 5.1 (standardfeil).
- **Innholdskontrakt:** **Bootstrap-algoritmen presist (aktivt, sensorkrav 10):**
  for $b = 1, \ldots, B$, trekk et nytt utvalg og regn estimatoren på nytt;
  estimer SE som empirisk standardavvik av de $B$ verdiene. **Ikke-parametrisk:**
  trekk med tilbakelegging fra dataene. **Parametrisk:** trekk fra den tilpassede
  fordelingen (med $\hat\theta$ satt inn). Kodeskjelettet komplett og kjørbart:
  `for _ in range(B): xb = ...; theta_b.append(estimator(xb))`, deretter
  `np.std(theta_b, ddof=1)`. **Monte Carlo som inferensverktøy:** en sannsynlighet
  er en forventet indikator, estimeres med `np.mean(betingelse)`; MC-estimatet er
  forventningsrett med varians $p(1-p)/B$, presisjon $\propto 1/\sqrt B$.
  **Simulert dekningsgrad:** generer mange datasett fra tilpasset fordeling, bygg
  KI-et i hvert, tell andelen som dekker sann parameter — den mekanismen som gir
  95,9 %- vs. 91,1 %-tallene i 6.2. Kobling: bootstrap-SE er det numeriske
  alternativet til den analytiske SE-en fra kjeden (6.3).
- **Oppgavesjangre:** I (undertype 2–3). Mønstereksempel: «Beskriv hvordan du med
  parametrisk bootstrap kan estimere standardfeilen til $\hat\theta$, skriv
  Python-koden for $B = 10000$ gjentak, og forklar hvordan du med samme oppsett
  kan estimere dekningsgraden til et 95 %-KI.»
- **Typiske feil (analysen §5.11):** Glemme `ddof=1`; beskrive bootstrap uten å
  si at man trekker med tilbakelegging (ikke-parametrisk) / fra tilpasset
  fordeling (parametrisk); forveksle antall bootstrap-trekk $B$ (MC-presisjon)
  med utvalgsstørrelsen $n$; simulere dekning under feil fordeling.
- **Quiz: 20 · Flashcards: 20**

**Prøve-kvote Del 7:** 4 prøver (7.A inversjonsmetoden analytisk + kjørbar kode
35 min · 7.B kodelesing/-fullføring (identifiser fordeling og estimand) 30 min ·
7.C bootstrap-SE parametrisk og ikke-parametrisk 35 min · 7.D simulert
dekningsgrad eksakt vs. Wald (eksamensnivå) 40 min).

---

### Del 8 — Samvariasjon, binormal og regresjon *(prioritet: KJENNE — A-differensiatorer)*

#### Kapittel 8.1: Kovarians, korrelasjon og binormalfordelingen

- **id:** `stk1100-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk1100-3-1`, `stk1100-1-2`
- **kapitteltype:** teori
- **description:** Kovarians og korrelasjon i lineærkombinasjoner, og binormalfordelingen der ρ=0 ⇔ uavhengighet og den betingede fordelingen ER en regresjonsmodell.
- **Eksamensbelegg:** Kovarians/korrelasjon i **2/10 sett (20 %)** (V2015, V2022);
  normal/binormal i ~8/10 som verktøy, binormal eksplisitt i V2022 (broen til
  regresjon). Prioritet: **kjenne** (nivå 3 punkt 14/16, differensierer A).
- **Forkunnskaper:** kap. 3.1, 1.2.
- **Innholdskontrakt:** Repetisjon av $\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$,
  $\rho = \text{Cov}/\sqrt{\text{Var}(X)\text{Var}(Y)}$ og skaleringsreglene fra
  1.2; kovariansleddet i $\text{Var}(aX + bY)$. **Binormalfordelingen (til bruk):**
  parametrene $(\mu_1, \mu_2, \sigma_1^2, \sigma_2^2, \rho)$; **for binormale er
  $\rho = 0 \Leftrightarrow$ uavhengighet** (den ene fordelingen der ukorrelert
  faktisk gir uavhengig — kontrast til den generelle regelen fra 1.2); marginaler
  er normale; **den betingede fordelingen $[Y \mid X = x]$ er normal med
  $E(Y \mid X = x) = \mu_2 + \rho\frac{\sigma_2}{\sigma_1}(x - \mu_1)$,
  $\text{Var}(Y \mid X = x) = \sigma_2^2(1 - \rho^2)$ — som ER en lineær
  regresjonsmodell** (broen til 8.3). Standardnormal/normal og
  $\Phi$-standardisering står i formelsamlingen (tren oppslag); binormalens
  betingede fordeling brukes, utledes ikke.
- **Oppgavesjangre:** L (samvariasjonsdelen) + fundament for K. Mønstereksempel:
  «$(X,Y)$ er binormalfordelt med $\mu_1 = \mu_2 = 0$, $\sigma_1 = \sigma_2 = 1$
  og korrelasjon $\rho$. Finn $E(Y \mid X = x_0)$ og $\text{Var}(Y \mid X = x_0)$,
  og forklar hvorfor $\rho = 0$ her gir uavhengighet.»
- **Typiske feil (analysen §5.9):** Glemme kovariansleddet i $\text{Var}(aX + bY)$
  når variablene er korrelerte — eller ta det med når de er uavhengige; slutte
  fra ukorrelert til uavhengig i det GENERELLE tilfellet (gjelder kun binormal);
  forveksle $\sigma^2$ og $\sigma^2(1-\rho^2)$ i den betingede variansen.
- **Quiz: 15 · Flashcards: 25**

#### Kapittel 8.2: Betinget forventning, prediksjon og MSE-minimering

- **id:** `stk1100-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `stk1100-8-1`
- **kapitteltype:** teori
- **description:** Hvorfor forventningen minimerer forventet kvadratisk avvik, og hvorfor E(Y|X=x₀) er beste prediksjon når X og Y henger sammen.
- **Eksamensbelegg:** Betinget forventning/prediksjon/MSE i **3/10 sett (30 %)**
  (V2015, V2017, V2022), kobles til binormal/regresjon. Prioritet: **kjenne**
  (nivå 3 punkt 15).
- **Forkunnskaper:** kap. 8.1.
- **Innholdskontrakt:** **MSE-minimering (aktivt):** vis at $\theta = E(X)$
  minimerer $E[(\theta - X)^2]$ (derivér mht. $\theta$, eller
  variansdekomponering $E[(\theta - X)^2] = \text{Var}(X) + (\theta - \mu)^2$);
  konsekvensen: forventningen er beste konstante prediksjon i kvadratisk forstand.
  **Beste prediksjon gitt data (til bruk):** når $X, Y$ er korrelerte, er
  $E(Y \mid X = x_0)$ den prediksjonen som minimerer forventet kvadratisk
  prediksjonsfeil; for binormal gir dette den lineære formen fra 8.1
  ($E(Y \mid X = x_0) = \mu_2 + \rho\frac{\sigma_2}{\sigma_1}(x_0 - \mu_1)$).
  Regn $E(Y \mid X = x)$, $\text{Var}(Y \mid X = x)$ fra betinget tetthet (3.1).
  Kobling: dette ER regresjonsfunksjonen (8.3).
- **Oppgavesjangre:** L. Mønstereksempel: «Vis at $\theta = \mu$ minimerer
  $E[(\theta - X)^2]$, og at det beste gjettet på $Y$ etter å ha observert
  $X = x_0$ i en standardisert binormal er $E(Y \mid X = x_0) = \rho x_0$.»
- **Typiske feil:** Minimere feil størrelse (bruke $|\cdot|$ i stedet for
  kvadrat); forveksle betinget forventning $E(Y \mid X = x)$ med marginal $E(Y)$;
  glemme at den betingede variansen er redusert med faktoren $(1 - \rho^2)$.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 8.3: Enkel lineær regresjon (nykommer, elementær)

- **id:** `stk1100-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `stk1100-8-2`, `stk1100-5-2`
- **kapitteltype:** teori
- **description:** Minste kvadraters estimator med og uten konstantledd, dens forventning og varians, og bias–varians-avveiningen — regresjon slik STK1100 (ikke NTNU) tester den.
- **Eksamensbelegg:** Enkel lineær regresjon i **2/10 sett (20 %)** — men **begge
  de to siste ordinære settene** (V2022 via binormal, V2024 eksplisitt minste
  kvadrater med to modeller) → sannsynlig fast innslag framover. **Elementær:
  ingen residualplott, ingen prediksjonsintervaller** (skarp kontrast til
  NTNU-varianten, analysen §8). Prioritet: **kjenne** (nivå 3 punkt 13).
- **Forkunnskaper:** kap. 8.2, 5.2.
- **Innholdskontrakt:** Modellen $Y_i = f(x_i) + \varepsilon_i$ med uavhengige
  feil, $E(\varepsilon_i) = 0$, $\text{Var}(\varepsilon_i) = \sigma^2$; $x$ fast,
  $Y$ stokastisk. **Minste kvadraters estimator (aktivt):** minimer
  $\sum(Y_i - \hat Y_i)^2$ (derivér, sett = 0) → med konstantledd
  $\hat\beta_1 = \frac{\sum(x_i - \bar x)(Y_i - \bar Y)}{\sum(x_i - \bar x)^2}$,
  $\hat\beta_0 = \bar Y - \hat\beta_1\bar x$; **uten konstantledd
  $\hat\gamma_1 = \frac{\sum x_i Y_i}{\sum x_i^2}$**. $E$ og $\text{Var}$ av
  estimatoren under modellen (med lineærkombinasjons-reglene fra 1.2):
  $E(\hat\beta_1) = \beta_1$,
  $\text{Var}(\hat\beta_1) = \sigma^2/\sum(x_i - \bar x)^2$. **KI via
  $\hat\theta \pm z_{\alpha/2}\cdot\widehat{\text{SE}}$** og modellvalg ut fra om
  intervallet inneholder 0. **Bias–varians-avveiningen (aktivt):** modellen uten
  konstantledd kan gi lavere varians ($\text{Var}(\hat\gamma_1) <
  \text{Var}(\hat\beta_1)$) mot en mulig forventningsskjevhet — når foretrekkes
  den? Kobling: for binormale data ER $[Y \mid X = x]$ denne regresjonsmodellen
  (8.1). Bruk formelsamlingens standardformler der de finnes; LS-utledningen og
  E/V av estimatoren gjøres aktivt.
- **Oppgavesjangre:** K + L. Mønstereksempel: «Utled minste kvadraters estimator
  for helningen i modellen $Y = \gamma x$ (uten konstantledd), finn forventning
  og varians, og forklar når denne kan foretrekkes selv om den fulle modellen
  $Y = \beta_0 + \beta_1 x$ er riktig.»
- **Typiske feil (analysen §5.9):** Snu teller/nevner i $\hat\beta_1$; behandle
  $x_i$ som stokastiske; regne $\text{Var}$ uten kvadrat på koeffisientene;
  velge modell uten å vurdere bias–varians (kun på ett kriterium); forvente
  residualplott/PI som ikke er del av STK1100-varianten.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 8:** 4 prøver (8.A kovarians/korrelasjon i lineærkombinasjoner
30 min · 8.B binormal: betinget fordeling og uavhengighet ($\rho = 0$) 35 min ·
8.C MSE-minimering og beste prediksjon 30 min · 8.D enkel lineær regresjon med/uten
konstantledd + bias–varians (eksamensnivå) 40 min).

---

### Del 9 — Eksamenstrening

#### Kapittel 9.1: Sjangerguiden og fortellingsoppgavens anatomi

- **id:** `stk1100-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** ingen (bygger på Del 1–8)
- **kapitteltype:** drill
- **description:** De tolv oppgavetypene A–L med løsningsoppskriftene i kortform, feilkatalogen, sensorreglene og tidsbudsjettet for 4-timerseksamen.
- **Eksamensbelegg:** Metakapittel — bygger på alle 10 sett. Samler
  sjangerkatalogen A–L (fra kap. 0.1), de tolv løsningsoppskriftene fra
  drillkapitlene (2.3, 3.2, 4.3, 5.3, 6.3, 7.1–7.2), sensorens elleve krav og de
  tretten typiske feilene. Prioritet: **kunne** (sikrer poeng og tid).
- **Forkunnskaper:** hele boka.
- **Innholdskontrakt:** For hver sjanger A–L: én-avsnitts løsningsoppskrift +
  frekvens + typisk plassering (hvilken av de 3–4 oppgavene) + henvisning til
  teori-/drillkapitlet. **Kjede-kartet:** den store oppgavens anatomi (fordeling
  → estimator → egenskaper → gamma/χ²-pivot → eksakt KI → CLT/bootstrap) med
  henvisning til leddene (5.2 → 5.1/5.3 → 4.3 → 6.1 → 6.2/7.2) og drillen som
  setter det sammen (6.3). **Feilkatalogen:** de tretten typiske feilene samlet,
  hver med henvisning til kapitlet som forebygger den. **Sensorreglene:** de
  elleve kravene i kortform. **Tidsbudsjett:** 4 timer på 3–4 oppgaver à 25–35
  poeng (~60–80 min hver); rekkefølge (ta oppgave 1/2 for sikre poeng, sett av
  mest tid til estimerings-kjeden); alle delpunkter teller. Flashcards = sjanger-
  oppskriftene + feilkatalogen + sensorreglene som kort.
- **Oppgavesjangre:** ingen nye regneoppgaver; sjanger-gjenkjenning
  («hvilken sjanger er dette, og hva er første trekk?») og tidsbudsjett-oppgaver.
- **Typiske feil:** Bruke for mye tid på ett delpunkt; ikke gjenkjenne kjeden som
  én sammenhengende oppgave; hoppe over definisjonene av variable/hendelser under
  tidspress.
- **Quiz: 15 · Flashcards: 45** (sjanger-oppskrifter + feilkatalog + sensorregler)

#### Kapittel 9.2: Øvingseksamen 1: fire fortellingsoppgaver med full kjede

- **id:** `stk1100-9-2` · **number:** 9.2 · **estimatedMinutes:** 240 · **prerequisites:** `stk1100-9-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter den typiske firedelingen: Bayes, simultantetthet, estimerings-kjeden på en eksotisk fordeling, og transformasjon/simulering.
- **Eksamensbelegg/miks:** Speiler standardformatet (4 oppgaver, ~25 p hver):
  (1) **Bayes/diagnosetest** med hendelsesdefinisjoner + total sannsynlighet +
  oppdatering over to runder (sjanger A); (2) **simultantetthet:** normering,
  marginaler, uavhengighet ved faktorisering (inkl. null-området), $P(Y \ge X)$
  med tegnet område, betinget forventning (sjanger D); (3) **estimerings-kjeden**
  på en «navngitt eksotisk» fordeling (Weibull-levetid): ML-estimator →
  forventningsretthet med skjevhetskorreksjon via Γ → transformasjon til gamma →
  eksakt pivotal-KI + CLT-KI-alternativ (sjangre C+G+H); (4) **transformasjon +
  simulering:** CDF-metode/Jacobi + inversjonsmetode i Python med parametrisk
  bootstrap-SE (sjangre E+I). Alle oppgaver nyskrevne (egne tall og kontekster).
  Løsningsforslag som A-besvarelse i `collapsible` per oppgave med `tip`-notat om
  vekt og tidsbudsjett (~60 min per oppgave); Python-koden komplett og kjørt.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.3: Øvingseksamen 2: tre store oppgaver (V2015–V2017/V2021-malen)

- **id:** `stk1100-9-3` · **number:** 9.3 · **estimatedMinutes:** 240 · **prerequisites:** `stk1100-9-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter tre-oppgavers-malen: dypere fortellingsoppgaver der estimerings-kjeden og eksakt-vs-Wald-sammenligningen bærer settet.
- **Eksamensbelegg/miks:** Speiler tre-oppgavers-settene (~33 p hver):
  (1) **diskret modell + MGF:** Poisson-prosess med rateskalering, E/V via MGF,
  en estimator med standardfeil (sjangre B+F); (2) **estimerings-kjeden med
  metodesammenligning:** eksponensial-/Pareto-data → ML → eksakt pivotal-KI →
  **eksakt-vs-Wald-dekning med simulerte tall (95,9 % vs. 91,1 % for liten $n$)**
  + ikke-parametrisk bootstrap-SE (sjangre G+H+I); (3) **Jacobi-simultanfordeling
  + betinget forventning:** $(U,V) = (X+Y, X/(X+Y))$ via Jacobi, marginal ved
  integrasjon, $E(Y \mid X = x)$ og MSE-minimering (sjangre E+L). Alle nyskrevne,
  levetids-/inntekts-/telle-kontekster. Løsningsforslag som A-besvarelse med
  sensor-tips per delpunkt.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 9.4: Øvingseksamen 3: V2024-malen (Python-tung, regresjon, dekningsstudie)

- **id:** `stk1100-9-4` · **number:** 9.4 · **estimatedMinutes:** 240 · **prerequisites:** `stk1100-9-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2020/V2024-malen: full kjørbar Python, regresjon (nykommeren), binormal og en eksplisitt eksakt-vs-Wald-dekningsstudie.
- **Eksamensbelegg/miks:** Speiler de nyeste settene med Python og regresjon
  (4 oppgaver): (1) **binomisk/Poisson-modell med estimator** + normaltilnærmet
  KI begrunnet med CLT (sjangre B+H); (2) **Laplace-/lognormal-fordeling** (V2024/
  V2020-aktig eksotisk): tetthet, median, ML, eksakt pivotal-KI (sjangre C+G);
  (3) **eksakt-vs-Wald-dekningsstudie i Python:** skriv/fullfør numpy-kode som
  bygger begge intervallene $B$ ganger og teller dekning, tolk 95,9 %- vs.
  91,1 %-resultatet, forklar hva $n \to 100$ gjør (sjangre H+I); (4) **enkel
  lineær regresjon** ut av binormalfordelingen: LS med/uten konstantledd, E/V av
  estimatoren, bias–varians-avveiningen, modellvalg via KI (sjangre K+L). Alle
  nyskrevne. Løsningsforslag som A-besvarelse med vektings-tips; all Python
  komplett og kjørt (`ddof=1`).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 9:** øvingseksamenene (9.2–9.4) utgjør delens prøver; i tillegg
fungerer 9.1s sjanger- og feilkatalog som generalprøve på oppgavegjenkjenning.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.3 | 20+25+25 = **70** | 20+25+25 = **70** |
| 2 | 2.1–2.3 | 30+30+25 = **85** | 30+30+15 = **75** |
| 3 | 3.1–3.2 | 25+15 = **40** | 25+10 = **35** |
| 4 | 4.1–4.3 | 20+25+15 = **60** | 25+25+10 = **60** |
| 5 | 5.1–5.3 | 25+25+15 = **65** | 25+25+10 = **60** |
| 6 | 6.1–6.3 | 30+20+15 = **65** | 25+20+10 = **55** |
| 7 | 7.1–7.2 | 20+20 = **40** | 20+20 = **40** |
| 8 | 8.1–8.3 | 15+15+15 = **45** | 25+15+15 = **55** |
| 9 | 9.1–9.4 | 15+5+5+5 = **30** | 45+0+0+0 = **45** |
| **Sum** | **27 kap.** | **510 ≥ 500 ✓** | **505 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 2 (kontinuerlig/gamma-søylen, 60–90 %) og
Del 4+5+6 (transformasjon + estimerings-kjeden, 90–100 %) bærer 275 av 510 quiz —
kjeden og dens bro er tyngdepunktet, i tråd med at den bærer 60–70 % av poengene.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–8, 32 totalt)

Prøvene er spesifisert i «Prøve-kvote Del N»-blokkene over. Hver prøve består av
nyskrevne oppgaver i delens eksamenssjangre, med løsningsforslag skrevet som
A-besvarelse og poengfordeling; **minst én prøve per del ligger på eksamensnivå**,
og drillkapitlenes sjangre (C, D-faktorisering, E-til-gamma, G, kjeden) har hver
sin prøve på full lengde. Del 0 (metadel) og Del 9 (øvingseksamener) har ikke
egne temaprøver.

### Sensorens elleve krav (fra løsningsforslagene — innarbeides på tvers)

1. Definer variable og hendelser eksplisitt før du regner. 2. Uavhengighet
bevises ved faktorisering (alle $(x,y)$, inkl. null-området), ikke intuisjon.
3. Tegn integrasjonsområdet for dobbeltintegral. 4. MGF-utledninger med
konvergenskrav; $E/V$ som $M'(0), M''(0)$. 5. ML med alle trinn
($L \to \ell \to$ derivér $\to$ løs). 6. Forventningsretthet/varians fullstendig;
skjevhet kvantifisert og korrigert; skill estimator og estimat. 7. Eksakt
pivotal-KI foretrekkes framfor Wald når SE avhenger av parameteren; asymmetri er
riktig. 8. CLT nevnes eksplisitt ved normaltilnærming. 9. Transformasjoner med
metode (CDF/Jacobi/MGF), ikke gjetting. 10. Bootstrap-algoritmen beskrevet
presist; Python kjørbar med `ddof=1`. 11. Tallsvar med enheter/tolkning.

### Øvingseksamener (3 komplette sett — kap. 9.2–9.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (9.2) | Typisk 4-oppgavers sett | A (Bayes) · D (simultantetthet) · C+G+H (kjeden på eksotisk fordeling) · E+I (transformasjon + simulering) |
| Øvingseksamen 2 (9.3) | 3-oppgavers sett (V2015–17/V2021) | B+F (diskret + MGF) · G+H+I (kjeden + eksakt-vs-Wald + bootstrap) · E+L (Jacobi + betinget forventning) |
| Øvingseksamen 3 (9.4) | V2020/V2024 (Python-tung) | B+H (diskret + CLT-KI) · C+G (eksotisk + eksakt KI) · H+I (dekningsstudie i Python) · K+L (regresjon fra binormal) |

Til sammen dekker de tre settene samtlige tolv sjangre (A–L) minst én gang, og
**alle tre har Python-innslag** (60 % av reelle sett har det; V2020/V2024
eksplisitt). **Ingen av settene inneholder hypotesetesting, kombinatorikk eller
ordningsvariable** — det er bevisst og speiler arkivet.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, kalkulator + formelsamling, 3–4
   fortellingsoppgaver, midtveis/avsluttende-vektingen) og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (estimerings-kjeden, transformasjon/MGF, simultantetthet, gamma/χ²,
   median/CDF, Bayes, moment/lineærkombinasjoner), kunne (simulering/bootstrap,
   eksotiske fordelinger, diskret modellvalg, estimator-sammenligning, eksakt-vs-
   Wald, CLT), kjenne (regresjon, binormal, betinget forventning/MSE, kovarians).
3. **Kjede-kartet** — den store oppgavens anatomi (fordeling → estimator →
   egenskaper → gamma/χ²-pivot → eksakt KI → CLT/bootstrap-SE) med henvisning til
   kapitlene som bygger hvert ledd (5.2 → 5.1/5.3 → 4.3 → 6.1 → 6.2/7.2) og
   drillsporet som setter det sammen (4.3 → 5.3 → 6.3).
4. **Sjangerguiden** — de tolv oppgavetypene A–L med løsningsoppskriftene fra
   drillkapitlene (2.3, 3.2, 4.3, 5.3, 6.3, 7.1–7.2) i kortform (fra kap. 9.1).
5. **Sensorreglene** — de elleve kravene fra løsningsforslagene +
   karakterskille-listen (eksakt pivotal, gamma/χ²-identifikasjon,
   transformasjonsbevis, skjevhetskorreksjon, simulering) fra kap. 0.1.
6. **Feilkatalogen** — de tretten typiske feilene samlet, hver med henvisning til
   kapitlet som forebygger den (kart i §6-sjekklisten).
7. **Formelsamling-treningen** — hva som står i «Formelsamling for STK1100/STK1110»
   (tren oppslag: riktig fordeling, persentil, frihetsgrad), og hva som MÅ kunne
   utledes (ML, pivotaler, transformasjoner, minneløshet, bootstrap).
8. **Avgrensning mot STK1110** — hva du IKKE skal bruke tid på (hypotesetesting,
   kombinatorikk, ordningsvariable) og hvorfor.
9. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 (broen) → 5 → 6 (kjeden bygges og drilles) → 7 → 8,
   prøver underveis, øvingseksamenene de tre siste ukene under tidspress (240 min,
   kalkulator og formelsamling fremme, Python-oppgavene faktisk kjørt).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `stk1100` med alle 27
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`, med `sectionNames` fra §2-tabellen.
2. **Del 0** (0.1) — etablerer sjangerbokstavene A–L og frekvenstallene som
   resten refererer til, og STK1110-avgrensningen.
3. **Fundamentet i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3.
4. **Broen og kjeden**: Del 4 → Del 5 → Del 6 (drillsporet 4.3 → 5.3 → 6.3
   bygges i denne rekkefølgen; 6.3 gjenbruker 4.3 og 5.3).
5. Del 7 → Del 8 → Del 9 (øvingseksamenene til slutt — de gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) etter plattformens prøvekapittel-mønster.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generér helst
      via `json.dump`; `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\sim`, `\\chi^2_{2n}`, `\\bar{X}`, `\\Gamma`); ingen unicode-symboler for
      matematikk (ikke «χ²», «Σ», «≤», «Γ» i formeltekst).
- [ ] **Notasjonskonsistens** (grep over alle stk1100-filer): $N(\mu, \sigma^2)$
      med varians; gamma$(\alpha,\beta)$ med $\beta$ = skala; $\chi^2_n =$
      gamma$(n/2,2)$; kvantiler som øvre haleareal ($z_\alpha, \chi^2_{\nu,\alpha}$);
      estimator med hatt og stor bokstav, skilt fra estimat; eksponensial-pivoten
      alltid $\chi^2_{2n}$ (aldri $\chi^2_n$/$\chi^2_{n-1}$ i eksponensialtilfellet);
      $S^2$ med $n-1$.
- [ ] **Eksponensial-parametriseringen VISES BEGGE veier** (rate $\lambda$ OG
      forventning $\mu$) — dette er et bevisst pedagogisk poeng, ikke en
      inkonsistens; hvert kapittel som bruker eksponensial oppgir hvilken
      parametrisering det bruker (motsatt TMA4245-boka, som forbød rateformen).
- [ ] **Python-kode**: all kode numpy/scipy-idiomatisk, komplett og faktisk kjørt
      av forfatteren før innsjekk (kjør snuttene med `python3` — sensorkrav 10
      gjelder også boka); `np.var(..., ddof=1)` / `np.std(..., ddof=1)` for
      empirisk varians/SE.
- [ ] **Symbol- og formelliste per delkapittel** (README-leserkravet — KRITISK i
      statistikk): hvert kapittel har `collapsible` «Symbol- og formelliste» rett
      etter Forkunnskaper som forklarer ALLE symboler og formler brukt i kapitlet
      ($\mu$ = forventet levetid, $\Phi$ = standardnormal CDF, $\hat\theta$ =
      estimator, $\chi^2_{2n}$ = kjikvadrat med $2n$ frihetsgrader, $\Gamma$ =
      gammafunksjonen, …) — per delkapittel, ingen arv fra tidligere kapitler.
- [ ] **Forkunnskaper-blokk** i hvert kapittel med lenker til kapitler i boka +
      kryssbok-lenker for eksterne forkunnskaper. **Verifiserte kryssbok-id-er
      (finnes i `src/lib/data/chapters/`):** sannsynlighet
      [r1-8-4](/bok/r1/r1-8-4), [r1-8-3](/bok/r1/r1-8-3), [s1-5-2](/bok/s1/s1-5-2);
      diskrete/kontinuerlige fordelinger [s1-6-1](/bok/s1/s1-6-1),
      [s2-4-1](/bok/s2/s2-4-1), [s2-4-6](/bok/s2/s2-4-6); integrasjon
      [r2-2-2](/bok/r2/r2-2-2), [r2-2-4](/bok/r2/r2-2-4), [r2-3-2](/bok/r2/r2-3-2),
      [s2-1-1](/bok/s2/s2-1-1); derivasjon [r1-4-1](/bok/r1/r1-4-1). Lenk kun til
      disse (verifiserte); ikke gjett nye id-er.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvens-/vekttallene fra dette skjelettet), Typiske feil-`warning`, 2–4
      eksempler (siste på eksamensnivå, løsning som A-besvarelse med
      tabelloppslag/persentiler angitt), 6–12 øvinger med `solution` + `hints` og
      eksplisitt sjangerforankring (A–L), repetisjons-`collapsible`; drillkapitler
      (2.3, 3.2, 4.3, 5.3, 6.3) har løsningsoppskrift + sensor-kommentert case +
      8–15 oppgaver.
- [ ] **Formelsamling-merking**: hvert kapittel skiller «står i formelsamlingen —
      tren oppslaget» fra «må utledes aktivt» i tråd med innholdskontrakten.
- [ ] **Alle tretten feilmønstre fordelt** (kart): 1 uavhengighet uten
      faktorisering → 3.2 · 2 feil integralgrenser → 3.1 · 3 hopp til Wald/asymmetri
      → 6.1/6.2 · 4 tetthet vs. sannsynlighet → 1.2/2.1 · 5 konvergenskrav MGF →
      4.1 · 6 eksponensial-parametrisering → 2.1 · 7 skjevhets-slurv → 5.1/5.3 ·
      8 ML-slurv (log først) → 5.2 · 9 kovariansleddet → 1.2/8.1 · 10 transformasjon
      uten metode/|J| → 4.2 · 11 bootstrap/`ddof=1` → 7.1/7.2 · 12 median-algebra
      $F(m)=½$ → 2.1/2.3 · 13 feil frihetsgrader i pivoten → 2.2/4.3/6.1.
- [ ] **Alle tolv sjangre A–L dekket** i oppgaver OG av øvingseksamenene samlet
      (kart i §4).
- [ ] **Ingen forbudt-temaer**: grep at det ikke er sneket inn hypotesetesting
      ($H_0$/$H_1$/p-verdi/styrke), kombinatorikk (binomialkoeffisient som
      telleoppgave) eller ordningsvariable (min/maks-fordeling, serie/parallell) i
      teoridelene — kun kjenne-omtalen i 0.1 er tillatt.
- [ ] **Quiz-sum ≥ 510 og flashcard-sum ≥ 505** per kvotetabellen (kontrollsummér
      mot §3-tabellen; flashcards kun fra toppnivå `definition`-blokker med `title`).
- [ ] **Prøver**: 4 per temadel 1–8 (32 stk) + 3 øvingseksamener som sammen dekker
      A–L.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster
      (behold profilen: levetider, konsentrasjoner, inntekter, tellinger,
      målinger, diagnosetester), ingen formuleringer fra reelle sett eller
      løsningsforslag (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + innhold), jf. `getChapterMeta`-lærdommen.
