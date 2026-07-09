# Bokskjelett: TMA4245 Statistikk — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (~49 sett 2009–2026 fra TMA4245/TMA4240-arkivet, 26 sett
> lest grundig med løsningsforslag). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4245` |
| Tittel | **TMA4245 Statistikk — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt emne med fast oppgavetradisjon) |
| Antall kapitler | **35** (1 eksamenskart + 30 tema, hvorav 5 drill + 4 eksamenstrening) |
| Estimert totaltid | **2 680 min ≈ 45 timer** |
| Quiz totalt | **540** (krav ≥500) |
| Flashcards totalt | **505** (krav ≥500) |

**Pitch (ett avsnitt):** TMA4245-eksamen (og tvillingemnet TMA4240 — identisk
pensum, felles kont, samme oppgavetradisjon) har én stor fortelling som gjentas
i praktisk talt hvert sett siden 2016: definer modell → utled ML-estimator →
undersøk egenskapene → konstruer konfidensintervall (ofte via pivotal) →
gjennomfør hypotesetest → beregn styrke og dimensjoner utvalget. Denne boka er
bygget rundt nettopp den kjeden som ryggrad, med normalfordelingen (≈98 % av
settene) og eksponensialfordelingens kjikvadrat-apparat ($2\sum X_i/\beta \sim
\chi^2_{2n}$ — den hyppigste «vanskelige» gjengangeren, minst 9 sett) som
tyngdepunkter. Formelsamlingen «Tabeller og formler i statistikk» er alltid
tillatt (hjelpemiddelkode C), så boka trener det eksamen faktisk måler: å
*velge* riktig formel og tabell, *bruke* dem med riktige frihetsgrader, og
*utlede* det som ikke står der — pluss det største strukturelle skiftet på ti
år: Python/Monte Carlo-oppgaver i 8 av de 9 siste settene, som får en egen del
med kodetrening.

**Kritisk notasjonsregel (gjelder HELE boka)** — settenes egen notasjon følges
slavisk:

- Store bokstaver for stokastiske variable ($X$), små for observasjoner ($x$);
  hatt for estimatorer ($\hat{\beta}, \hat{\mu}, \hat{\theta}$); $\bar{X}$ og
  $S^2$ for utvalgsgjennomsnitt og -varians (alltid med $n-1$).
- $X \sim N(\mu, \sigma^2)$ — **annet argument er variansen**, aldri
  standardavviket. $\Phi$ for standardnormal fordelingsfunksjon.
- **Eksponensialfordelingen parametriseres med forventningen $\beta$:**
  $f(x) = \frac{1}{\beta}e^{-x/\beta}$, $E(X) = \beta$ — som i formelsamlingen.
  Rate-formen $\lambda e^{-\lambda x}$ nevnes maks én gang som alias og brukes
  ALDRI i oppgaver. $\lambda$ reserveres for rater i Poisson-prosesser.
- Kvantilnotasjon med **øvre haleareal**: $z_\alpha$, $t_{\nu,\alpha}$,
  $\chi^2_{\nu,\alpha}$ (dvs. $P(Z > z_\alpha) = \alpha$).
- Skill estimator (stor bokstav, stokastisk) og estimat (tall) konsekvent.
- Python: numpy-idiomatisk — `np.random.uniform(size=n)`, vektorisering,
  `np.mean`, `np.var(x, ddof=1)`; aldri løkkebasert kode der vektorisering er
  naturlig.

**Formelsamling-prinsippet (gjelder HELE boka):** hjelpemiddelkode C betyr at
alle standardfordelinger med $E$/Var/MGF, kumulative tabeller (binomisk,
Poisson), kvantiltabeller ($\Phi$, $t$, $\chi^2$, $F$) og standardformlene for
KI/tester/regresjon ligger på pulten. Hvert kapittel skal derfor eksplisitt
merke innholdet: **«står i formelsamlingen — tren oppslaget»** (riktig tabell,
riktige frihetsgrader, riktig kvantil) vs. **«må utledes aktivt»** (ML,
pivotaler, transformasjoner, styrke). Pugge-stoff finnes ikke i dette emnet.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden |
| 1 | Sannsynlighetsregningens grunnlag | 4 | Betinget/Bayes 59 %, kombinatorikk 39 % (4 av 8 siste), deskriptiv 35 % — kortsvarspoengene som åpner settene. Faglig fundament → først. |
| 2 | Stokastiske variable og fordelinger | 5 | E/Var-regneregler ≈96 %, fordelingskatalogen 69–80 %, egendefinert tetthet «svært høy» (sjanger C = standardtreningen) → eget drillkapittel; simultanfordelinger 49 %. |
| 3 | Normalfordelingen og grenseteoremer | 4 | **≈98 % — åpner nesten hvert sett** → nivå 1 «perfekt» → 3 teorikapitler + drillkapittel (sjanger A). |
| 4 | Transformasjoner og ordningsvariable | 2 | Transformasjon ≈59 % og broen til pivotal-KI; **eksponensialens kjikvadrat-apparat er hyppigste vanskelige gjenganger (≥9 sett)** → eget drillkapittel. Ordningsvariable 22 % (nivå 3) deler CDF-teknikk → samme kapittel. |
| 5 | Punktestimering | 4 | ML/estimering ≈82 %; «emnets viktigste utledningsferdighet» → 3 teorikapitler + ML-drillkapittel; deltametoden (ny 2024-sjanger) med her. |
| 6 | Konfidensintervall | 2 | ≈84 %; standardintervallene står i formelsamlingen (bruk), pivotal-metoden må utledes → ett kapittel hver. |
| 7 | Hypotesetesting | 4 | ≈82 %, alltid tungt vektet; styrke/dimensjonering «nesten obligatorisk» (35 %, kraftig økende) → 3 teorikapitler + **kjede-drillkapittelet ML → KI → test → styrke (bokas ryggrad-drill)**. Fortegnstest (ny 2024) med her. |
| 8 | Enkel lineær regresjon | 3 | ≈59 % totalt, men **11 av de 12 siste settene**, alltid stor oppgave → nivå 1 → 3 kapitler inkl. NTNU-favoritten uten konstantledd. |
| 9 | Simulering og Python | 2 | **8 av 9 sett siden des. 2023** — største strukturelle skifte i emnet; egen del med kodetrening. Ligger etter inferens-delene fordi eksamensoppgavene simulerer p-verdier og styrke. |
| 10 | Eksamenstrening | 4 | Kortsvar-/Inspera-drill (sjanger O + fellene) + 3 komplette øvingseksamener i dagens formater. |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Sannsynlighetsregningens grunnlag |
| 2 | Stokastiske variable og fordelinger |
| 3 | Normalfordelingen og grenseteoremer |
| 4 | Transformasjoner og ordningsvariable |
| 5 | Punktestimering |
| 6 | Konfidensintervall |
| 7 | Hypotesetesting |
| 8 | Enkel lineær regresjon |
| 9 | Simulering og Python |
| 10 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. Fem drillkapitler (2.4, 3.4, 4.2, 5.4, 7.4) ligger inne i temadelene sine i
   stedet for i siste del — sjangrene er 59–98 %-gjengangere som må drilles
   umiddelbart etter teorien (samme grep som ECON1310). Del 10 beholder
   kortsvar-drillen og øvingseksamenene.
2. Simulering (Del 9) er en egen temadel plassert *etter* inferens-delene,
   selv om inversjonsmetoden teknisk bare krever Del 2–4: eksamens
   MC-oppgaver bruker inferensbegreper (simulert p-verdi, simulert styrke),
   så delen må kunne referere Del 5–7.
3. 35 kapitler — øvre kant av DNA-rammen (20–35). Begrunnelse: emnet har to
   likevektede søyler (sannsynlighetsteori 40–50 % og inferens 50–60 % av
   poengene) som hver krever full kapittelkjede; ingen del kan kuttes uten å
   miste en dokumentert sjanger.
4. Ordningsvariable (nivå 3) har ikke eget kapittel, men deler kapittel 4.1
   med transformasjonsteknikkene — begge er ren CDF-regning, og sammenslåingen
   holder kapitteltallet innenfor rammen.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–O) refererer til
oppgavetype-katalogen som gjengis i kap. 0.1 (fra analysen §3):
A normal-regning · B fortelling → diskret fordelingsvalg · C egendefinert
tetthet/CDF · D transformasjon · E Bayes/total sannsynlighet · F kombinatorikk ·
G ML-utledning med estimatorvurdering · H konfidensintervall-konstruksjon ·
I hypotesetest (full pakke) · J regresjon · K ordningsvariable ·
L simultanfordelingstabell · M deskriptiv/grafisk tolkning ·
N Monte Carlo/Python · O kortsvar/flervalg (Inspera).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes TMA4245

- **id:** `tma4245-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, temafrekvensene, sjangerkatalogen og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle ~49 sett. Skal gjengi:
  (i) formen: 4 timers skoleeksamen, bokstavkarakter, **hjelpemiddelkode C**
  (formelsamlingen «Tabeller og formler i statistikk», gult A5-ark med egne
  håndskrevne notater, enkel kalkulator); veksling siden 2022 mellom ren papir
  (Mai25, Mai26) og Inspera-hybrid (kortsvar med kun tallsvar, 2 desimaler +
  åpne oppgaver på papir med full begrunnelse); TMA4240 (høst) som tvillingemne
  med felles kont i august. (ii) Temafrekvens-tabellen: normalfordeling m/
  lineærkombinasjoner ≈98 %, E/Var/kovarians ≈96 %, KI ≈84 %, hypotesetesting
  ≈82 %, punktestimering/ML ≈82 %, ikke-normale kontinuerlige fordelinger
  ≈80 %, diskrete fordelinger ≈69 %, betinget/Bayes ≈59 %, regresjon ≈59 % men
  **11 av 12 siste sett**, transformasjoner ≈59 %, simultanfordelinger ≈49 %,
  kombinatorikk ≈39 %, deskriptiv ≈35 %, styrke/dimensjonering ≈35 % og kraftig
  økende, Python/Monte Carlo **8 av 9 sett siden des. 2023**, fortegnstest og
  deltametoden nye 2024-sjangre. (iii) Den store oppgavens anatomi: kjeden
  modell → ML → egenskaper → KI (pivotal) → test → styrke som sammenhengende
  fortelling i praktisk talt hvert sett siden 2016, 30–40 % av poengene.
  (iv) Sensorens ti krav (fra løsningsforslagene): definer variablene før du
  regner; oppgi antagelser; testritualet komplett; vis mellomregninger og
  tabelloppslag; ML med alle trinn; riktig fordeling/frihetsgrader; konklusjon
  i ord; Inspera-presisjon (2–3 desimaler, kun tallet teller); kjørbar
  numpy-kode; grafisk tolkning begrunnet i mønstre. (v) Karakterskillene:
  bestått = åpningsoppgavene (standardisering, tabelloppslag); C/B = standard
  KI/test med riktige frihetsgrader; A = pivotal-utledninger, styrke- og
  dimensjonering, MSE-sammenligninger, transformasjonsbevis, simulering.
  (vi) Formelsamling-prinsippet (tren oppslag og utledning, ikke pugg).
  (vii) Prognosen: Inspera-hybrid med 4–6 kortsvar + 2–4 store oppgaver:
  eksotisk/egendefinert tetthet → ML → pivotal-KI; full test med styrke;
  regresjon med residualtolkning; ett Python/MC-innslag.
- **Innholdskontrakt:** Sjangerkatalogen A–O presenteres som studentens
  sjekkliste med frekvens og typisk plassering (kortsvar vs. stor håndrettet
  oppgave). Leseplan: Del 3, 5, 6, 7, 8 er «må perfekt»-løypa; Del 1–2 er
  fundament og kortsvarspoeng; Del 4 er broen som gjør pivotal-KI mulig;
  Del 9 er obligatorisk siden 2023. Avslutt med tidsbudsjett-logikk for
  4-timerseksamen (alle delpunkter teller likt på papirsettene — ikke grav deg
  ned i ett punkt).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen
  «settet har 4 kortsvar à 10 p og 3 åpne à 30 p på 240 minutter — sett opp
  tidsbudsjett per oppgave».
- **Typiske feil:** Metafeilene: pugge formler som står i formelsamlingen i
  stedet for å trene bruk/utledning; øve kun på sannsynlighetsdelen og møte
  veggen på inferens-kjeden; ignorere Python-oppgavene fordi de er «nye».
- **Quiz: 10 · Flashcards: 10** (frekvenser, sjangre, sensorkrav)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Sannsynlighetsregningens grunnlag

#### Kapittel 1.1: Hendelser, sannsynlighet og uavhengighet

- **id:** `tma4245-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Utfallsrom, hendelsesalgebra, addisjonsregelen og det eksamensfelle-tunge skillet disjunkt vs. uavhengig.
- **Eksamensbelegg:** Grunnmuren under sjanger E (≈59 %) og en fast
  Inspera-kortsvarfamilie (sjanger O, alle hybridsett 2022–2025):
  Venndiagram-identiteter og «er hendelsene disjunkte/uavhengige?»-feller.
  Aug25 hadde eksplisitt fellen der $P(A) + P(B) > 1$ utelukker disjunkthet.
  Prioritet: **kunne** (fellene: perfekt).
- **Innholdskontrakt:** Utfallsrom og hendelser; komplement, union, snitt;
  addisjonsregelen $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (aktivt — brukes
  uten oppslag); komplementregelen; uniform sannsynlighetsmodell («gunstige
  over mulige»); disjunkthet $P(A \cap B) = 0$ vs. **uavhengighet**
  $P(A \cap B) = P(A)P(B)$ — og resultatet som SKAL sitte: to disjunkte
  hendelser med positiv sannsynlighet er ALDRI uavhengige; sjekken
  $P(A) + P(B) > 1 \Rightarrow$ kan ikke være disjunkte. Venndiagram som
  regneverktøy for tre hendelser. Alt utledes/resonneres aktivt — ingenting
  her står i formelsamlingen i brukbar form.
- **Oppgavesjangre:** O (+ fundament for E). Mønstereksempel: «To hendelser
  har $P(A) = 0{,}3$ og $P(B) = 0{,}85$. Kan $A$ og $B$ være disjunkte? Kan de
  være uavhengige? Begrunn begge svar.»
- **Typiske feil (analysen §5.5):** Anta at disjunkte hendelser er uavhengige;
  overse at $P(A) + P(B) > 1$ utelukker disjunkthet; blande union og snitt i
  addisjonsregelen; regne $P(A \cup B) = P(A) + P(B)$ uten fradrag.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.2: Kombinatorikk: telle riktig

- **id:** `tma4245-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4245-1-1`
- **kapitteltype:** teori
- **description:** Multiplikasjonsprinsippet, ordnede og uordnede utvalg, multinomiske koeffisienter — telleteknikkene bak kortstokk- og lagoppgavene.
- **Eksamensbelegg:** Sjanger F i ≈39 % av settene, **sterkt tilbake etter
  2024 (4 av 8 siste sett)**. Kontekster i arkivet: pokerhender (hus Des25,
  straight flush Mai21), lag-uttak (Aug25), gruppering av objekter (Mai26),
  kuler fra urne. Prioritet: **kunne**.
- **Innholdskontrakt:** Multiplikasjonsprinsippet; ordnede utvalg med/uten
  tilbakelegging ($n^k$, $n!/(n-k)!$); uordnede utvalg
  $\binom{n}{k} = \frac{n!}{k!(n-k)!}$; multinomiske koeffisienter
  $\binom{n}{n_1, n_2, \ldots, n_r}$; hypergeometrisk telling
  $\binom{a}{x}\binom{b}{k-x}/\binom{a+b}{k}$ som bro til kap. 2.2;
  systematikk for kortstokkoppgaver (velg valører, så farger). Alt aktivt —
  strategivalget (ordnet/uordnet, med/uten tilbakelegging) er selve
  ferdigheten.
- **Oppgavesjangre:** F. Mønstereksempel: «En håndballtropp består av 3
  målvakter, 6 bakspillere og 8 øvrige. Hvor mange lag på 7 kan settes opp med
  nøyaktig én målvakt og minst to bakspillere?»
- **Typiske feil:** Telle ordnet der oppgaven er uordnet (dobbelttelling);
  glemme multiplikasjonsprinsippet på tvers av grupper; blande «nøyaktig k» og
  «minst k» (komplementteknikk).
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.3: Betinget sannsynlighet, total sannsynlighet og Bayes

- **id:** `tma4245-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-1-1`
- **kapitteltype:** teori
- **description:** Fra betinget sannsynlighet til Bayes' formel — med det diagnostiske testoppsettet som eksamen elsker.
- **Eksamensbelegg:** Sjanger E: betinget/total/Bayes i ≈59 % av settene;
  ren Bayes ca. hvert tredje sett. Kontekster: diagnostisk test (Des25
  smittetest, Aug17 kvalitetskontroll, Aug19 genetikk), oppdatering av
  produksjonslinje-tro (Nov17). Prioritet: **perfekt** (nivå 1 punkt 6).
- **Innholdskontrakt:** $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$;
  multiplikasjonsregelen; loven om total sannsynlighet
  $P(A) = \sum_i P(A \mid B_i)P(B_i)$ over en partisjon; Bayes' formel
  $P(B_j \mid A) = \frac{P(A \mid B_j)P(B_j)}{\sum_i P(A \mid B_i)P(B_i)}$;
  uavhengighet via betinging ($P(A \mid B) = P(A)$). **Sensorkrav 1
  innarbeides her:** definer hendelsene presist med egne symboler FØR regning
  («La $S$ = personen er smittet, $T$ = testen slår ut») — fasit begynner
  alltid slik, og svar uten definerte hendelser regnes som ufullstendige.
  Diagnostikk-vokabularet: sensitivitet, spesifisitet, falsk positiv/negativ,
  prevalens — og hvorfor lav prevalens gir overraskende lav
  $P(\text{smittet} \mid \text{positiv})$. Tre-oppsettet og tabelloppsettet
  som alternative regneveier. Alt aktivt.
- **Oppgavesjangre:** E. Mønstereksempel: «En hurtigtest fanger opp 82 % av de
  smittede og gir 4 % falske positive. 2 % av populasjonen er smittet. Definer
  hendelsene med symboler, og finn sannsynligheten for at en person med
  positiv test faktisk er smittet. Kommenter tallet.»
- **Typiske feil:** Forveksle $P(A \mid B)$ og $P(B \mid A)$
  («prosecutor's fallacy» — kjernen i diagnostikk-oppgavene); glemme
  totalsannsynligheten i nevneren; regne uten å definere hendelser (trekk hos
  sensor); anta uavhengighet uten belegg.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.4: Deskriptiv statistikk og grafisk tolkning

- **id:** `tma4245-1-4` · **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Gjennomsnitt, median, empirisk varians og kunsten å lese boksplott, histogram, spredningsplott og Q-Q-plott slik sensor krever.
- **Eksamensbelegg:** Sjanger M i ≈35 % av settene, oftest som
  kortsvar/flervalg i Inspera-delen; Q-Q-plott for normalitetsvurdering
  (Aug16); boksplott-sammenligning på tvers av grupper; residual-/spredningsplott
  gjenbrukes tungt i regresjonsdelen (kap. 8.2). Prioritet: **kunne**.
- **Innholdskontrakt:** $\bar{x} = \frac{1}{n}\sum x_i$; median og kvartiler
  fra sorterte data; **empirisk varians
  $s^2 = \frac{1}{n-1}\sum (x_i - \bar{x})^2$ — divisor $n-1$, og
  forhåndsvarsling om hvorfor (forventningsretthet, full behandling i kap.
  5.1)**; standardavvik; boksplott-anatomien (median, kvartiler, whiskers,
  uteliggere); histogram (beliggenhet, spredning, skjevhet, modalitet);
  spredningsplott og korrelasjonsvurdering på øyemål; Q-Q-plott mot normal
  (rett linje = normalitet; haler som avviker). **Sensorkrav 10:** grafisk
  tolkning skal begrunnes i konkrete mønstre («spredningen øker med nivået»),
  aldri «ser bra ut». Kun bruk — ingen utledninger.
- **Oppgavesjangre:** M + O. Mønstereksempel: «Boksplottene viser
  batterikapasitet for tre produsenter. Ranger produsentene etter median og
  spredning, og pek på hva som tyder på høyreskjevhet hos én av dem.»
- **Typiske feil (analysen §5.11):** Dele på $n$ i stedet for $n-1$ i empirisk
  varians; lese gjennomsnitt der boksplottet viser median; konkludere om
  normalitet fra Q-Q-plott uten å peke på mønsteret; forveksle skjevhetsretning.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 1:** 4 prøver (1.A hendelser/uavhengighets-feller 25 min ·
1.B kombinatorikk 30 min · 1.C Bayes med hendelsesdefinisjoner 35 min ·
1.D blandet kortsvarssett i Inspera-format på tvers av delen, 2-desimalskrav,
40 min).

---

### Del 2 — Stokastiske variable og fordelinger

#### Kapittel 2.1: Stokastiske variable, forventning og varians

- **id:** `tma4245-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-1-3`
- **kapitteltype:** teori
- **description:** Punktsannsynlighet, tetthet og fordelingsfunksjon — og momentregnereglene som står i ≈96 % av settene.
- **Eksamensbelegg:** E/Var/kovarians-regneregler i ≈47 av 49 sett (≈96 %) —
  nest hyppigste tema i arkivet; $P(X = x) = 0$ for kontinuerlig $X$ er en
  fast Inspera-felle (Mai21, Jun23, Des24). Prioritet: **perfekt**.
- **Innholdskontrakt:** Diskret vs. kontinuerlig stokastisk variabel;
  punktsannsynlighet $p(x)$, tetthet $f(x)$, fordelingsfunksjon
  $F(x) = P(X \le x)$ og sammenhengene ($F' = f$;
  $P(a < X \le b) = F(b) - F(a)$); **$P(X = x) = 0$ for kontinuerlig $X$, og
  $f(x)$ er IKKE en sannsynlighet** (kan overstige 1). Forventning
  $E(X) = \sum x\,p(x)$ / $\int x f(x)\,dx$; $E[g(X)] = \int g(x)f(x)\,dx$;
  variansen $\text{Var}(X) = E(X^2) - [E(X)]^2$ (regneformelen brukes aktivt);
  standardavvik. Regnereglene (aktivt): $E(aX + bY) = aE(X) + bE(Y)$;
  $\text{Var}(aX + b) = a^2\text{Var}(X)$;
  $\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X, Y)$
  — med kovariansleddet som hovedpoeng (full kovariansbehandling i 2.5).
  Merk formelsamlingen: fordelingskatalogens $E$/Var står der — regnereglene
  må sitte i hodet.
- **Oppgavesjangre:** Fundament for A, C, L. Mønstereksempel: «$X$ og $Y$ har
  $E(X) = 4$, $E(Y) = -1$, $\text{Var}(X) = 2$, $\text{Var}(Y) = 3$ og
  $\text{Cov}(X, Y) = -0{,}5$. Finn $E(3X - 2Y)$ og $\text{Var}(3X - 2Y)$.»
- **Typiske feil (analysen §5.4, §5.8):** Tro at $P(X = x) = f(x)$ for
  kontinuerlig $X$; glemme kovariansleddet i $\text{Var}(aX + bY)$ — eller ta
  det med når variablene er uavhengige; glemme kvadratene på koeffisientene;
  tro at $\text{Var}(X - Y) = \text{Var}(X) - \text{Var}(Y)$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.2: Diskrete fordelinger og Poisson-prosessen

- **id:** `tma4245-2-2` · **number:** 2.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4245-2-1`, `tma4245-1-2`
- **kapitteltype:** teori
- **description:** Fra situasjonsbeskrivelse til riktig diskret modell — binomisk, Poisson-prosess, geometrisk, negativ binomisk, hypergeometrisk.
- **Eksamensbelegg:** Sjanger B i ≈69 % av settene; **Poisson-prosessen alene
  i ~20 sett** (viltpåkjørsler Des25, app-varsler Mai22/Aug23, kundeankomster
  Mai20, nettsidebesøk Mai16, fotballmål, vulkanutbrudd). Prioritet: **kunne**
  (modellvalget: perfekt).
- **Innholdskontrakt:** Modellvalgs-tabellen er kapitlets kjerne — situasjon →
  fordeling: fast antall uavhengige forsøk med konstant suksess-sannsynlighet
  → binomisk($n, p$); hendelser i tid/rom → Poisson($\lambda t$) — **med
  prosessforutsetningene som SKAL kunne oppgis (uavhengige disjunkte
  intervaller, konstant rate, ikke to hendelser samtidig) og rateskalering
  $\lambda t$**; ventetid til første suksess → geometrisk; til $k$-te suksess
  → negativ binomisk; trekk uten tilbakelegging → hypergeometrisk.
  Punktsannsynlighetene med $E$/Var står i formelsamlingen (tren oppslag);
  kumulative tabeller for binomisk/Poisson (tren: $P(X \ge a) = 1 - P(X \le a-1)$,
  $P(a \le X \le b)$-differanser). Betingede sannsynligheter i
  Poisson-prosessen; kobling Poisson ↔ eksponensial ventetid (forhåndsvarsles,
  fullføres i 2.3). **Sensorkrav 1–2:** «La $X$ = antall …, da er
  $X \sim \ldots$» med parametre, og forutsetningene nevnes der de brukes.
- **Oppgavesjangre:** B. Mønstereksempel: «Sjøfuglkollisjoner med en
  vindturbin skjer som en Poisson-prosess med rate 6 per år. Angi modellens
  forutsetninger, finn forventning og standardavvik for antall kollisjoner på
  et halvår, og sannsynligheten for minst to.»
- **Typiske feil:** Velge binomisk der antall forsøk ikke er fast; glemme å
  skalere raten til intervallet ($\lambda t$, ikke $\lambda$); bruke binomisk
  med tilbakelegging der hypergeometrisk kreves; lese kumulativ tabell som
  punktsannsynlighet; ikke begrunne modellvalget (sensortrekk).
- **Quiz: 25 · Flashcards: 30**

#### Kapittel 2.3: Kontinuerlige fordelinger: eksponensial, gamma, Weibull — og «oppskriftsfordelingene»

- **id:** `tma4245-2-3` · **number:** 2.3 · **estimatedMinutes:** 65 · **prerequisites:** `tma4245-2-1`
- **kapitteltype:** teori
- **description:** Fordelingskatalogen for levetider og ventetider — med eksponensialfordelingen, emnets kjæledegge, i sentrum.
- **Eksamensbelegg:** Ikke-normale kontinuerlige fordelinger i ≈80 % av
  settene; **eksponensialfordelingen med følget (minneløshet, sum → gamma,
  kjikvadrat-koblingen) i minst 9 sett** (Nov18, Mai21, Mai22, Aug22, Des22,
  Aug23, Aug24, Des25, Mai26); Weibull i Mai22/Aug22/Des23; «eksotiske
  fordelinger med kjent oppskrift»: Gumbel (Des25 hundreårsflom), null-trunkert
  Poisson (Des24), Pareto (Mai21). Prioritet: **perfekt** (nivå 1 punkt 4).
- **Innholdskontrakt:** Uniform fordeling på $(a, b)$.
  **Eksponensial($\beta$)**: $f(x) = \frac{1}{\beta}e^{-x/\beta}$,
  $F(x) = 1 - e^{-x/\beta}$, $E(X) = \beta$, $\text{Var}(X) = \beta^2$;
  **minneløsheten $P(X > s + t \mid X > t) = P(X > s)$ — utledes aktivt**, og
  det skal sies eksplisitt at den er unik for eksponensial (blant kontinuerlige);
  kobling til Poisson-prosessen (ventetid mellom hendelser). Gamma($n, \beta$)
  som sum av $n$ uavhengige eksponensiale (via MGF — teknikken kommer i 4.1;
  her presenteres resultatet); kjikvadratfordelingen som gamma-spesialtilfelle
  og **forhåndsvarselet $2X/\beta \sim \chi^2_2$** (utledes i 4.1–4.2).
  Weibull via fordelingsfunksjonen $F(x) = 1 - e^{-(x/\theta)^k}$ — halesannsynligheter
  og kvantiler ved CDF-regning; **Weibull har IKKE minneløshet** (Des23-fellen
  $P(X \ge 15 \mid X \ge 12)$ må regnes med betinget sannsynlighet).
  «Oppskriftsfordeling»-beredskapen: når oppgaven serverer en ukjent fordeling
  (Gumbel, Pareto, beta, trunkert Poisson) med tetthet/CDF oppgitt, brukes
  standardteknikkene — CDF-regning, kvantiler ved $F(m) = p$, momenter ved
  integrasjon; ukjent navn skal ikke skremme. Egendefinerte tettheter:
  normeringskonstant, $F$, momenter (teorien her; drillen i 2.4).
  Formelsamlingen: standardfordelingene står der — oppskriftsfordelingene gjør
  ikke, derfor trenes teknikk, ikke katalog.
- **Oppgavesjangre:** C + fundament for D, G, H. Mønstereksempel: «Levetiden
  til en sensor er eksponensialfordelt med forventning $\beta = 5$ år. Vis at
  $P(X > 8 \mid X > 3) = P(X > 5)$, og forklar hvilken egenskap dette uttrykker
  — gjelder den også for en Weibull-fordelt levetid?»
- **Typiske feil (analysen §5.9, §5.4):** Misbruke minneløsheten på Weibull
  (eller glemme den på eksponensial og regne unødig langt); blande tetthet og
  sannsynlighet; parametrisere eksponensial med rate og forventning om
  hverandre (boka bruker KUN $\beta$ = forventningen); glemme
  normeringskonstanten.
- **Quiz: 25 · Flashcards: 30**

#### Kapittel 2.4: Drill: den egendefinerte tettheten (sjanger C)

- **id:** `tma4245-2-4` · **number:** 2.4 · **estimatedMinutes:** 80 · **prerequisites:** `tma4245-2-3`
- **kapitteltype:** drill
- **description:** Standardtreningen i kontinuerlig sannsynlighet: fra oppgitt tetthet til normering, CDF, kvantiler og momenter — på eksamenstempo.
- **Eksamensbelegg:** Sjanger C har «svært høy» frekvens — standardtreningen i
  kontinuerlig sannsynlighet (Nov18, Mai18, Nov20, Aug21, Jun23, Aug23, Des25
  m.fl.); typiske tettheter i arkivet: $3x^2$ på $(0,1)$, stykkevis lineære,
  $3/x^4$ for $x > 1$. Nesten alltid inngangen til den store kjedeoppgaven.
  Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) normer
  ($\int f = 1$ gir konstanten); 2) utled $F(x)$ ved integrasjon — husk
  stykkevis definisjon og verdiene 0 og 1 utenfor støtten; 3) regn
  sannsynligheter og betingede sannsynligheter fra $F$; 4) kvantiler/median
  ved å løse $F(m) = p$; 5) $E(X)$, $E(X^2)$, $\text{Var}(X)$ ved integrasjon
  med mellomregninger (sensorkrav 4); 6) pek fremover: $F^{-1}$ er
  inversjonsmetodens råstoff (kap. 9.1). Gjennomregnet eksamenscase med
  sensor-margnotater. 8–15 oppgaver med varierte tetthetsfamilier (potens-,
  stykkevis lineær-, hale-tettheter à la $c/x^4$), alle på eksamensnivå.
- **Oppgavesjangre:** C. Mønstereksempel: «Slitasjeandelen på et borehode har
  tetthet $f(x) = cx^3$ for $0 < x < 1$. Bestem $c$, utled $F(x)$, finn
  medianen og $P(X > 0{,}8 \mid X > 0{,}5)$, og beregn forventning og varians.»
- **Typiske feil:** Glemme normering før videre regning; slurve med stykkevis
  $F$ (utenfor støtten); løse $f(m) = 1/2$ i stedet for $F(m) = 1/2$ for
  medianen; regnefeil i $E(X^2)$-integralet uten mellomledd.
- **Quiz: 15 · Flashcards: 10**

#### Kapittel 2.5: Simultanfordelinger, kovarians og korrelasjon

- **id:** `tma4245-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-2-1`
- **kapitteltype:** teori
- **description:** Simultantabeller og -tettheter: marginaler, betingede fordelinger, uavhengighetssjekk og kovariansregning.
- **Eksamensbelegg:** Sjanger L i ≈49 % av settene; korrelasjon av
  lineærkombinasjoner (à la $\text{corr}(5X - 2, 10Y + 3)$) i Jun23;
  uavhengighetssjekk i tabell er gjenganger. Prioritet: **kunne**.
- **Innholdskontrakt:** Diskret simultanfordeling $p(x, y)$ i tabell;
  marginaler ved rad-/kolonnesum; betingede fordelinger
  $p(y \mid x) = p(x, y)/p_X(x)$; $E[g(X, Y)] = \sum\sum g(x,y)\,p(x,y)$
  (aktivt fra definisjonen); **uavhengighetssjekken $p(x, y) = p_X(x)p_Y(y)$
  for ALLE celler — én avvikende celle motbeviser** (og én celle med 0 der
  marginalene er positive avgjør umiddelbart);
  $\text{Cov}(X, Y) = E(XY) - E(X)E(Y)$;
  $\rho = \text{Cov}(X, Y)/\sqrt{\text{Var}(X)\text{Var}(Y)}$;
  skalering: $\text{Cov}(aX + b, cY + d) = ac\,\text{Cov}(X, Y)$ og at
  korrelasjonen er invariant opp til fortegn; uavhengig $\Rightarrow$
  ukorrelert, men IKKE omvendt. Kontinuerlig variant: marginaltetthet ved
  integrasjon, deretter betinget tetthet (ett gjennomregnet eksempel — kun
  bruk).
- **Oppgavesjangre:** L. Mønstereksempel: «Tabellen viser simultanfordelingen
  til antall driftsstans $X$ og antall alarmer $Y$ i løpet av et døgn. Finn
  marginalfordelingen til $Y$, $E(XY)$ og korrelasjonen, og avgjør med
  begrunnelse om $X$ og $Y$ er uavhengige.»
- **Typiske feil (analysen §5.8):** Sjekke uavhengighet i bare én celle og
  konkludere «uavhengig»; glemme at kovarians kan være negativ; blande
  $E(XY)$ og $E(X)E(Y)$; slutte fra ukorrelert til uavhengig.
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 2:** 4 prøver (2.A momentregneregler med kovariansfeller
30 min · 2.B diskret modellvalg + Poisson-prosess 40 min · 2.C egendefinert
tetthet full kjede (sjanger C, eksamensnivå) 45 min · 2.D simultantabell +
blandet kortsvar 35 min).

---

### Del 3 — Normalfordelingen og grenseteoremer *(prioritet: PERFEKT — ≈98 %)*

#### Kapittel 3.1: Normalfordelingen: standardisering og tabellbruk

- **id:** `tma4245-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-2-1`
- **kapitteltype:** teori
- **description:** Standardisering, Φ-tabellen og betingede normalsannsynligheter — de billige poengene som åpner nesten hvert sett.
- **Eksamensbelegg:** Normalfordeling i ≈48 av 49 sett (**≈98 %** —
  gjenganger-score nr. 1), ofte som åpningsoppgave; å gjenkjenne $\mu$ og
  $\sigma$ direkte fra en oppgitt tetthetsformel testet i Des24 og Des25;
  betingede sannsynligheter av typen $P(X > a \mid X > b)$ er fast innslag.
  Prioritet: **perfekt** (nivå 1 punkt 1).
- **Innholdskontrakt:** $X \sim N(\mu, \sigma^2)$ (varians som annet
  argument!); tetthetens form
  $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ — og
  ferdigheten å LESE $\mu$ og $\sigma$ ut av en oppgitt formel;
  standardiseringen $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$ (aktivt);
  $\Phi$-tabellen med symmetrien $\Phi(-z) = 1 - \Phi(z)$; halesannsynligheter,
  intervallsannsynligheter, betingede sannsynligheter
  $P(X > a \mid X > b) = \frac{1 - \Phi(\frac{a-\mu}{\sigma})}{1 - \Phi(\frac{b-\mu}{\sigma})}$;
  motsatt vei: finn $x$ slik at $P(X \le x) = p$ via kvantil (grunnlaget for
  KI); kvantilnotasjonen $z_\alpha$ (øvre hale). $P(X = x) = 0$ gjentas.
  Tabelloppslag angis eksplisitt i alle løsninger (sensorkrav 4).
- **Oppgavesjangre:** A. Mønstereksempel: «Trekkraften i en wire er
  normalfordelt med $\mu = 480$ og $\sigma = 25$. Finn $P(X > 510)$ og
  $P(X > 510 \mid X > 490)$, og bestem grensen $x_0$ som bare 1 % av wirene
  overstiger.»
- **Typiske feil:** Standardisere med variansen i stedet for standardavviket;
  slurve med symmetrien for negative $z$; lese $N(\mu, \sigma^2)$-notasjonens
  annet argument som standardavvik; avrunde $z$ for grovt før tabelloppslag
  (Inspera-presisjonen ryker).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 3.2: Lineærkombinasjoner av normalfordelte variable

- **id:** `tma4245-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-3-1`
- **kapitteltype:** teori
- **description:** Summer, differanser og veide kombinasjoner av normale variable — med kovariansleddet som eksamen legger feller rundt.
- **Eksamensbelegg:** Lineærkombinasjoner med kovarians er del av
  98 %-gjengangeren (sjanger A); typisk oppgave: $P(2X + Y > c)$ og
  $P(Y - X \le a \mid Y - X > b)$ for korrelerte $X, Y$; kovariansen oppgis
  ofte nettopp for å teste om kandidaten bruker den. Prioritet: **perfekt**.
- **Innholdskontrakt:** Hovedresultatet (bruk; utledning kun via MGF-skissen i
  4.1): lineærkombinasjoner av (simultant) normalfordelte variable er normale:
  $aX + bY \sim N\!\big(a\mu_X + b\mu_Y,\; a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\,\text{Cov}(X,Y)\big)$.
  Spesialtilfeller som skal sitte: differansen $Y - X$; gjennomsnittet
  $\bar{X} \sim N(\mu, \sigma^2/n)$ for iid normale (broen til inferensen);
  sum av uavhengige normale. Arbeidsflyten: 1) identifiser kombinasjonen,
  2) regn $E$ og Var (med kovariansledd hvis korrelert), 3) standardiser,
  4) slå opp. Uavhengighet $\Rightarrow \text{Cov} = 0$ — men sjekk alltid hva
  oppgaven sier.
- **Oppgavesjangre:** A. Mønstereksempel: «$X$ og $Y$ er simultant normale med
  $\mu_X = 10$, $\mu_Y = 12$, $\sigma_X^2 = 4$, $\sigma_Y^2 = 9$ og
  $\text{Cov}(X, Y) = 2$. Finn $P(2X + Y > 35)$ og
  $P(Y - X \le 4 \mid Y - X > -1)$.»
- **Typiske feil (analysen §5.8):** Glemme kovariansleddet når variablene er
  korrelerte — eller ta det med når de er uavhengige; glemme kvadratene på
  koeffisientene; trekke varianser fra hverandre for differanser; bruke
  $\sigma^2/n$-formelen på ikke-gjennomsnitt.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.3: Sentralgrenseteoremet og normaltilnærming

- **id:** `tma4245-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4245-3-2`
- **kapitteltype:** teori
- **description:** CLT presist formulert — og normaltilnærmingen av binomisk, Poisson og estimatorer med gyldighetssjekken sensor alltid gjør.
- **Eksamensbelegg:** CLT som eksplisitt teorispørsmål («formuler
  forutsetninger og resultat») i ≈20 % av settene — Des23 3b spør eksplisitt om
  formulering + anvendelse på ML-estimator; normaltilnærming med
  gyldighetssjekk eksplisitt i fasit Aug21/Mai20. Prioritet: **kunne**
  (formuleringen: perfekt — gratis poeng for den som kan den ordrett presist).
- **Innholdskontrakt:** CLT-formuleringen som SKAL kunne gjengis presist:
  for uavhengige, identisk fordelte $X_1, \ldots, X_n$ med $E(X_i) = \mu$ og
  $\text{Var}(X_i) = \sigma^2 < \infty$ er
  $\frac{\bar{X} - \mu}{\sigma/\sqrt{n}}$ tilnærmet $N(0, 1)$ for stor $n$
  (alle tre forutsetninger med!). Anvendelsene: normaltilnærming av binomisk
  ($\hat{p}$ tilnærmet $N(p, p(1-p)/n)$) **med gyldighetssjekken $np$ og
  $n(1-p)$ tilstrekkelig store — gjøres eksplisitt hver gang, som i fasit**;
  Poisson for stor $\lambda t$; sum/gjennomsnitt av gamma-/eksponensialdata;
  asymptotisk normalitet for ML-estimatorer (varsles her, brukes i 5.3).
  Kort om når tilnærmingen er dårlig (liten $n$, skjev fordeling) — broen til
  det eksakte kjikvadrat-KI-et i 6.2.
- **Oppgavesjangre:** A + teorispørsmål + fundament for H/I. Mønstereksempel:
  «Formuler sentralgrenseteoremet med alle forutsetninger. En
  meningsmåling med $n = 900$ gir $\hat{p} = 0{,}54$. Begrunn at
  normaltilnærmingen kan brukes, og finn tilnærmet $P(\hat{p} > 0{,}56)$ når
  $p = 0{,}52$.»
- **Typiske feil (analysen §5.3):** Glemme å sjekke $np$ og $n(1-p)$; utelate
  «identisk fordelte» eller «endelig varians» i formuleringen; bruke CLT på
  åpenbart avhengige data; blande $\sigma^2$ og $\sigma^2/n$.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.4: Drill: normal-regneoppgaven (sjanger A)

- **id:** `tma4245-3-4` · **number:** 3.4 · **estimatedMinutes:** 85 · **prerequisites:** `tma4245-3-3`
- **kapitteltype:** drill
- **description:** Åpningsoppgaven på eksamenstempo: standardisering, lineærkombinasjoner, betingede sannsynligheter og kvantiler — feilfritt og fort.
- **Eksamensbelegg:** Sjanger A står i nesten hvert sett, ofte først —
  «billige poeng som må sitte automatisk»; i Inspera-form med 2 desimalers
  presisjonskrav. Varianter i arkivet: ren standardisering, kombinasjon med
  kovarians, betinget hale, tetthetsformel-avlesning (Des24, Des25),
  kvantil-baklengs. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) definer variabel og fordeling;
  2) bygg lineærkombinasjonen og regn $E$/Var (kovariansledd?); 3) standardiser
  med standardavviket; 4) slå opp med symmetri-håndtering; 5) angi
  tabelloppslaget; 6) svar med riktig presisjon (Inspera: 2–3 desimaler, ikke
  avrund i mellomregning). Gjennomregnet eksamenscase med sensor-margnotater.
  8–15 oppgaver som roterer alle variantene, inkludert
  tetthetsformel-avlesning og baklengs-kvantiler, alle på eksamensnivå og
  minst tre i Inspera-kortsvarformat med presisjonskrav.
- **Oppgavesjangre:** A + O. Mønstereksempel: «Tettheten til $X$ er
  $f(x) = \frac{1}{4\sqrt{2\pi}} e^{-(x-30)^2/32}$. Les av $\mu$ og $\sigma$,
  og finn $P(26 < X < 38)$ med to desimaler.»
- **Typiske feil (analysen §5.13):** Avrunding i mellomregninger som gir feil
  Inspera-tallsvar; kovariansfellene fra 3.2; lese $\sigma^2$ der formelen gir
  $2\sigma^2$ i eksponenten.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 3:** 4 prøver (3.A standardisering og tabellbruk 30 min ·
3.B lineærkombinasjoner med kovariansfeller 35 min · 3.C CLT-formulering +
normaltilnærming med gyldighetssjekk 35 min · 3.D blandet sjanger A-sett i
Inspera-format med presisjonskrav, eksamensnivå, 45 min).

---

### Del 4 — Transformasjoner og ordningsvariable

#### Kapittel 4.1: Transformasjonsteknikkene og ordningsvariable

- **id:** `tma4245-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4245-2-3`, `tma4245-3-1`
- **kapitteltype:** teori
- **description:** CDF-metoden, MGF-teknikken og min/maks av uavhengige variable — verktøyene som identifiserer fordelinger og bygger pivotaler.
- **Eksamensbelegg:** Transformasjon i ≈59 % av settene, stabilt — «nesten
  alltid som bro til konfidensintervallet» (sjanger D); MGF-identifikasjon:
  Bernoulli-sum → binomisk (Mai24), sum av eksponensiale → gamma, kvadratsum
  av standardnormale → kjikvadrat. Ordningsvariable (sjanger K) i ≈22 %, høyere
  2022–24: seriekobling (Aug20: fem komponenter), parallellkobling (Des24: tre
  lyspærer, tid til siste slukner), første feil blant $n$ (Mai22/Aug22
  vinddata), maks av geometriske (Des22) — «gir differensiering på
  toppkarakterene». Prioritet: transformasjon **kunne** (nivå 2 punkt 7),
  ordningsvariable **kjenne** (nivå 3 punkt 14).
- **Innholdskontrakt:** **CDF-metoden (aktivt):**
  $F_Y(y) = P(g(X) \le y) = P(X \le g^{-1}(y))$ for monoton $g$ — løs
  ulikheten, sett inn $F_X$, deriver til tetthet; håndter avtakende $g$
  (ulikheten snur). **MGF-teknikken (aktivt på sum-identifikasjon):**
  $M_{\sum X_i}(t) = \prod M_{X_i}(t)$ for uavhengige; gjenkjenn resultatet i
  formelsamlingens MGF-katalog (Bernoulli-sum → binomisk, eksponensial-sum →
  gamma, kvadratsum av $N(0,1)$ → $\chi^2$); entydighetsargumentet formuleres
  eksplisitt («MGF-en bestemmer fordelingen»). **Ordningsvariable (aktivt):**
  for uavhengige, identisk fordelte $X_1, \ldots, X_n$:
  $F_{\max}(y) = [F(y)]^n$ og $F_{\min}(y) = 1 - [1 - F(y)]^n$ — utledes fra
  produktregelen ($P(\max \le y) = \prod P(X_i \le y)$), tettheter ved
  derivasjon; tolkningen seriesystem = min (første feil stopper), parallellsystem
  = maks (siste komponent holder liv); spesialtilfellet min av eksponensiale er
  eksponensial med forventning $\beta/n$.
- **Oppgavesjangre:** D + K. Mønstereksempler: (D) «$X$ er eksponensialfordelt
  med forventning $\beta$. Bruk fordelingsfunksjonsteknikken til å finne
  fordelingen til $Y = \sqrt{X}$.» (K) «Fire pumper med uavhengige
  eksponensialfordelte levetider (forventning 3 år) står i parallell. Utled
  fordelingsfunksjonen og tettheten til tiden til siste pumpe svikter, og finn
  sannsynligheten for at systemet lever lenger enn 6 år.»
- **Typiske feil (analysen §5.14):** Addere i stedet for å multiplisere
  fordelingsfunksjoner for maks; bruke $F$ der $1 - F$ kreves for min; glemme
  å snu ulikheten for avtakende transformasjon; derivere feil ledd i
  kjerneregelen; identifisere MGF uten å oppgi entydighetsargumentet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.2: Drill: eksponensialens kjikvadrat-apparat

- **id:** `tma4245-4-2` · **number:** 4.2 · **estimatedMinutes:** 80 · **prerequisites:** `tma4245-4-1`
- **kapitteltype:** drill
- **description:** Den hyppigste vanskelige gjengangeren i hele arkivet: vis at $2X/\beta \sim \chi^2_2$, løft til $2\sum X_i/\beta \sim \chi^2_{2n}$ — og gjør det på autopilot.
- **Eksamensbelegg:** Transformasjonen $2X/\beta \sim \chi^2_2$ og pivotalen
  $2\sum X_i/\beta \sim \chi^2_{2n}$ går igjen i **minst 9 sett** (Nov18,
  Mai21, Mai22, Aug22, Des22, Aug23, Aug24, Des25, Mai26) — analysens «hyppigste
  ‘vanskelige’ gjenganger». Samme oppskrift gjenbrukes på gamma-, Weibull-,
  Gumbel- og Pareto-data (potens-/log-transformasjon til eksponensial først).
  Des23 tester eksplisitt forskjellen på $\chi^2$-frihetsgrader når $\hat{\beta}$
  erstatter $\beta$. Prioritet: **perfekt** — dette er A-kandidatens
  signaturferdighet og broen til 6.2.
- **Innholdskontrakt:** Løsningsoppskrift: 1) vis med CDF-metoden at
  $Y = 2X/\beta$ for $X \sim$ eksponensial($\beta$) har
  $F_Y(y) = 1 - e^{-y/2}$, dvs. $\chi^2_2$ (eksponensial med forventning 2);
  2) bruk MGF-produktregelen på summen:
  $2\sum_{i=1}^n X_i/\beta \sim \chi^2_{2n}$ — **frihetsgradene er $2n$, ikke
  $n$**; 3) generalisering: for Weibull-data er $(X/\theta)^k$
  eksponensial(1) — potens-transformér først, deretter samme apparat;
  tilsvarende oppskrift når oppgaven serverer Gumbel/Pareto med hint;
  4) pek fremover: dette er pivotalen som gir eksakt KI i 6.2 og eksakt test i
  7.4-kjeden. Gjennomregnet eksamenscase med sensor-margnotater (hvor
  poengene sitter i utledningen: ulikhetshåndteringen, MGF-entydighet,
  frihetsgradene). 8–15 varianter: ren eksponensial, sum, Weibull-løft,
  «oppskriftsfordeling»-varianter med oppgitt CDF, alle på eksamensnivå.
- **Oppgavesjangre:** D (kjernevarianten). Mønstereksempel: «Levetidene
  $X_1, \ldots, X_{12}$ til et kretskort er uavhengige og eksponensialfordelte
  med forventning $\beta$. Vis ved fordelingsfunksjonsteknikken at $2X_1/\beta$
  er kjikvadratfordelt med 2 frihetsgrader, og angi med begrunnelse fordelingen
  til $2\sum X_i/\beta$.»
- **Typiske feil:** Frihetsgrader $n$ i stedet for $2n$; slurve med
  ulikhetsretningen i CDF-steget; hoppe over MGF-entydighetsargumentet;
  glemme potens-løftet for Weibull og prøve å bruke apparatet direkte.
- **Quiz: 10 · Flashcards: 5**

**Prøve-kvote Del 4:** 4 prøver (4.A CDF-metoden på monotone transformasjoner
30 min · 4.B MGF-identifikasjon av summer 30 min · 4.C ordningsvariable
serie/parallell 35 min · 4.D kjikvadrat-apparatet full utledning på
eksamensnivå 45 min).

---

### Del 5 — Punktestimering *(prioritet: PERFEKT — kjeden starter her)*

#### Kapittel 5.1: Estimatorer og deres egenskaper: forventningsretthet, varians og MSE

- **id:** `tma4245-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-3-2`
- **kapitteltype:** teori
- **description:** Hva som gjør en estimator god — forventningsretthet, varians og MSE, og sammenligningen eksamen ber om igjen og igjen.
- **Eksamensbelegg:** Punktestimering i ≈82 % av settene;
  estimator-sammenligning (to–tre kandidater vurderes på forventningsretthet
  og varians/MSE) er gjenganger som storoppgave-deloppgave (Nov20, Aug21,
  Mai22, Aug22, Des23, Jun23 med Bayes-estimator som kontrast); Des23-fasit
  viser eksplisitt at ML-variansestimatoren $\hat{\sigma}^2$ er
  forventningsskjev og at $S^2$ med $n-1$ korrigerer. Prioritet: **perfekt**
  (nivå 2 punkt 10 grenser til nivå 1 via kjeden).
- **Innholdskontrakt:** Estimator vs. estimat (stor/liten bokstav — stokastisk
  størrelse vs. tall); forventningsretthet $E(\hat{\theta}) = \theta$ (aktivt:
  regn $E$ av kandidaten med regnereglene fra 2.1);
  $\text{Var}(\hat{\theta})$; skjevhet (bias); **MSE
  $= \text{Var}(\hat{\theta}) + [\text{bias}]^2$ (aktivt)** og
  sammenligningsprotokollen: 1) sjekk forventningsretthet for hver kandidat,
  2) regn varianser, 3) ved skjevhet: MSE, 4) velg og BEGRUNN med begge
  kriterier. Standardresultatene: $\bar{X}$ er forventningsrett for $\mu$ med
  $\text{Var}(\bar{X}) = \sigma^2/n$; $S^2 = \frac{1}{n-1}\sum(X_i - \bar{X})^2$
  er forventningsrett for $\sigma^2$ — og hvorfor $n$-varianten er skjev
  (utledningsskisse). Konsistens-intuisjon (variansen → 0) kort, «bør kjenne
  til»-merket.
- **Oppgavesjangre:** G (vurderingsdelen). Mønstereksempel: «To estimatorer
  for $\mu$ foreslås: $\hat{\mu}_1 = \bar{X}$ og
  $\hat{\mu}_2 = \frac{X_1 + X_n}{2}$. Vis at begge er forventningsrette, finn
  variansene, og avgjør hvilken som bør brukes.»
- **Typiske feil (analysen §5.10, §5.11):** Forveksle estimator og estimat;
  «forventningsretthet-slurv» — glemme å dele på riktig konstant; sammenligne
  på varians alene når én kandidat er skjev (MSE kreves); tro at
  forventningsrett alltid slår skjev (MSE kan si det motsatte).
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.2: Maximum likelihood: utledningen som alltid kommer

- **id:** `tma4245-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4245-5-1`, `tma4245-2-3`
- **kapitteltype:** teori
- **description:** Likelihood → log-likelihood → derivasjon → løsning → maksimumskontroll: emnets viktigste utledningsferdighet, trinn for trinn.
- **Eksamensbelegg:** Eksplisitt ML-utledning i godt over halvparten av
  settene siste ti år — «emnets viktigste utledningsferdighet» (sjanger G);
  varianter i arkivet: ML med data fra to kilder som deler parameter
  (kombinert likelihood: Des22, Aug23, Mai24), ML under bibetingelse
  ($\mu_A = 2\mu_B$, Aug24), ML som krever tilnærming/iterasjon (null-trunkert
  Poisson, Des24), ML = LS i regresjon (Mai18, Des23 — tas i 8.1).
  Prioritet: **perfekt** (nivå 1 punkt 2 — kjedens første ledd).
- **Innholdskontrakt:** Hele ritualet MÅ UTLEDES AKTIVT med alle trinn
  (sensorkrav 5): 1) $L(\theta) = \prod_{i=1}^n f(x_i; \theta)$ for uavhengige
  observasjoner; 2) $l(\theta) = \ln L(\theta)$ — og HVORFOR logaritmen
  (produkter → summer, monotoni bevarer maksimum); 3) $l'(\theta) = 0$;
  4) løs; 5) **kontroller/kommenter at det kritiske punktet er et maksimum**
  (annenderivert eller monotoniargument) — toppbesvarelses-markør.
  Gjennomregnede standardtilfeller: eksponensial ($\hat{\beta} = \bar{X}$),
  Poisson, binomisk/andel, normal ($\hat{\mu} = \bar{X}$,
  $\hat{\sigma}^2$ med $n$ — og skjevheten, kobling 5.1), gamma med kjent
  formparameter. Deretter variantene: **kombinert likelihood fra to
  datakilder** som deler parameter (produktet over begge utvalg); **ML under
  bibetingelse** (substituer bindingen inn i likelihooden); tilfeller uten
  lukket løsning (null-trunkert Poisson) — sett opp ligningen og kommenter
  numerisk løsning. Invariansprinsippet ($\widehat{g(\theta)} = g(\hat{\theta})$)
  kort, som bro til KI-transformasjon (6.2) og deltametoden (5.3).
- **Oppgavesjangre:** G. Mønstereksempel: «Bruddstyrken til $n$ fiberprøver
  er gammafordelt med kjent formparameter 4 og ukjent skalaparameter $b$.
  Utled ML-estimatoren for $b$, kontroller at du har funnet et maksimum, og
  vis at estimatoren er forventningsrett.»
- **Typiske feil (analysen §5.10):** Derivere uten logaritme først; ikke løse
  ligningen fullstendig; hoppe over maksimumskontrollen; forveksle estimator
  og estimat i svaret; glemme at likelihooden er et produkt over ALLE
  observasjoner (også fra kilde to i kombinerte oppsett).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Asymptotisk normalitet og deltametoden

- **id:** `tma4245-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4245-5-2`, `tma4245-3-3`
- **kapitteltype:** teori
- **description:** ML-estimatorens tilnærmede normalfordeling og feilforplantning gjennom deriverte — de nye 2024-sjangrene.
- **Eksamensbelegg:** Asymptotisk normalitet for ML eksplisitt i Des23 (3b);
  **deltametoden/feilforplantning i Mai24 (Darcy-Weisbach-ligningen) og Des25
  (halveringstid fra regresjonshelning) — ny sjanger 2024**, analysens nivå 3
  punkt 15 med sannsynlig gjenbruk; Mai24 kombinerte deltametoden med
  simuleringskontroll (kobling 9.2). Prioritet: **kjenne** (differensierer A).
- **Innholdskontrakt:** ML-estimatorer er under regularitet tilnærmet normale
  for stor $n$ — formuleres og BRUKES (normaltilnærmet KI for
  $\beta$ i eksponensialtilfellet: $\hat{\beta} = \bar{X}$ tilnærmet
  $N(\beta, \beta^2/n)$) — utledning kreves ikke, kun CLT-koblingen.
  **Deltametoden (aktivt på envariabel-formen):** for glatt $g$ er
  $\text{Var}(g(\hat{\theta})) \approx [g'(\mu)]^2 \text{Var}(\hat{\theta})$
  — Taylor-argumentet vises i én linje ($g(\hat{\theta}) \approx g(\mu) +
  g'(\mu)(\hat{\theta} - \mu)$); flervariabel-varianten med partiellderiverte
  presenteres til bruk:
  $\text{Var}(g(X, Y)) \approx g_x^2\text{Var}(X) + g_y^2\text{Var}(Y)$ for
  uavhengige (evaluert i forventningene). Arbeidsflyt: identifiser $g$,
  deriver, sett inn, tolk usikkerheten. Kobling: simuleringen i 9.2 kan
  kontrollere delta-svaret.
- **Oppgavesjangre:** G-hale (den avledede størrelsen). Mønstereksempel:
  «Nedbrytningsraten $k$ estimeres med $\hat{k}$, som har forventning $k$ og
  varians $v$. Halveringstiden er $T = \ln 2 / k$. Bruk deltametoden til å
  finne en tilnærmet varians for $\hat{T} = \ln 2/\hat{k}$.»
- **Typiske feil:** Glemme kvadratet på den deriverte; derivere med hensyn på
  feil variabel; bruke deltametoden der eksakt fordeling er tilgjengelig og
  etterspurt; evaluere $g'$ i observasjonen når oppgaven gir forventningen.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 5.4: Drill: ML-utledning med estimatorvurdering (sjanger G)

- **id:** `tma4245-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4245-5-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på storoppgavens første halvdel: utled ML, vis egenskaper, sammenlign kandidater — i alle arkivets varianter.
- **Eksamensbelegg:** Dekker sjanger G komplett: standard-ML + vurdering
  (over halvparten av settene siste ti år), estimator-sammenligning (Nov20,
  Aug21, Mai22, Aug22, Des23, Jun23), to-kilders likelihood (Des22, Aug23,
  Mai24), bibetingelse (Aug24), numerisk tilfelle (Des24). Prioritet:
  **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) skriv likelihood for ALLE
  observasjoner; 2) log; 3) deriver; 4) løs fullstendig; 5) maksimumskontroll;
  6) $E(\hat{\theta})$ — forventningsrett?; 7) $\text{Var}(\hat{\theta})$;
  8) ved flere kandidater: MSE-protokollen fra 5.1 og VELG med begrunnelse.
  Gjennomregnet eksamenscase med sensor-margnotater (poeng per trinn; hvor
  toppbesvarelsen skiller seg: maksimumskontrollen, estimator/estimat-skillet,
  MSE-argumentet). 8–15 oppgaver på eksamensnivå som roterer: eksponensial-,
  Poisson-, binomisk-, gamma- og «oppskriftsfordeling»-ML; to-kilders felles
  parameter; bibetingelse; minst én uten lukket løsning; minst tre med
  estimator-sammenligning (inkludert varianter av regresjons-estimatorene som
  forberedelse til 8.3).
- **Oppgavesjangre:** G. Mønstereksempel: «Antall mikrosprekker per prøve er
  Poisson-fordelt med forventning $\lambda$. Ett laboratorium har talt
  sprekker i $n$ prøver, et annet i $m$ prøver med dobbel prøvestørrelse
  (forventning $2\lambda$). Utled ML-estimatoren for $\lambda$ basert på
  begge datasettene samlet, og vis at den er forventningsrett.»
- **Typiske feil:** Hele §5.10–5.11-repertoaret under tidspress; glemme
  kilde to i den kombinerte likelihooden; substituere bibetingelsen etter
  derivasjon i stedet for før.
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 5:** 4 prøver (5.A forventningsretthet/varians/MSE-sammenligning
35 min · 5.B standard ML-utledning med maksimumskontroll 40 min · 5.C
ML-varianter: to kilder + bibetingelse 45 min · 5.D deltametoden + asymptotisk
KI, eksamensnivå 40 min).

---

### Del 6 — Konfidensintervall

#### Kapittel 6.1: Standardintervallene: μ, σ² og andel — og hva et KI faktisk betyr

- **id:** `tma4245-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4245-5-1`, `tma4245-3-3`
- **kapitteltype:** teori
- **description:** z- og t-intervall for μ, kjikvadrat-intervall for σ², intervall for andel — med riktige frihetsgrader og riktig tolkning.
- **Eksamensbelegg:** KI i ≈84 % av settene (sjanger H nivå i–ii);
  tolknings-flervalg («95 % sannsynlighet for at $\mu$ ligger i intervallet» som
  distraktor) i Mai20, Aug20, Aug19; prediksjonsintervall for ny observasjon
  (Jun23, Nov18, Des12). Prioritet: **perfekt** (nivå 1 punkt 2/3).
- **Innholdskontrakt:** Konstruksjonslogikken vises én gang aktivt
  (pivotal-tankegangen i miniatyr): $\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)$
  → dobbeltulikhet → løs for $\mu$. Standardintervallene (står i
  formelsamlingen — tren VALG og frihetsgrader): $\mu$ med kjent $\sigma$:
  $\bar{x} \pm z_{\alpha/2}\,\sigma/\sqrt{n}$; $\mu$ med ukjent $\sigma$:
  $\bar{x} \pm t_{n-1,\alpha/2}\,s/\sqrt{n}$ — **t, ikke z, og $n-1$
  frihetsgrader**; $\sigma^2$: $\left[\frac{(n-1)s^2}{\chi^2_{n-1,\alpha/2}},
  \frac{(n-1)s^2}{\chi^2_{n-1,1-\alpha/2}}\right]$ (asymmetrisk!); andel:
  $\hat{p} \pm z_{\alpha/2}\sqrt{\hat{p}(1-\hat{p})/n}$ med gyldighetssjekk.
  **Tolkningen som SKAL kunne formuleres presist:** intervallet er stokastisk,
  parameteren er fast — «ved gjentatte forsøk dekker metoden sannheten i 95 %
  av tilfellene»; feiltolkningene listes som antisvar. Prediksjonsintervall
  for NY observasjon: $\bar{x} \pm t_{n-1,\alpha/2}\,s\sqrt{1 + 1/n}$ — og
  forskjellen KI (parameter) vs. PI (observasjon). Ensidige intervaller.
  Tabelloppslag angis alltid ($t_{18;0{,}05} = 1{,}734$-stilen).
- **Oppgavesjangre:** H + O (tolkningsflervalg). Mønstereksempel: «Ni målinger
  av saltinnhold gir $\bar{x} = 34{,}2$ og $s = 1{,}8$. Konstruer et 95 %
  konfidensintervall for $\mu$ og et 95 % prediksjonsintervall for neste
  måling, og forklar forskjellen på de to intervallene.»
- **Typiske feil (analysen §5.1, §5.7):** z der det skal være t (ukjent
  $\sigma$); feil frihetsgrader ($n$ i stedet for $n-1$); symmetrisk
  $\sigma^2$-intervall; tolke KI som sannsynlighetsutsagn om $\mu$; bruke KI
  der PI kreves.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Pivotal-metoden: eksakte intervaller når normalapparatet ikke strekker til

- **id:** `tma4245-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4245-6-1`, `tma4245-4-2`
- **kapitteltype:** teori
- **description:** Finn en pivotal, sett kvantiler rundt, løs for parameteren — med eksponensialens $\chi^2_{2n}$-intervall som kronjuvel.
- **Eksamensbelegg:** Pivotal-KI (sjanger H nivå iii) er den faste avslutningen
  på kjedeoppgaven — eksakt kjikvadrat-KI for $\beta$ i minst 9 sett (jf. 4.2);
  Aug25 ber eksplisitt om sammenligning eksakt vs. normaltilnærmet KI (det
  eksakte er bredere ved liten $n$); Des25 transformerer KI-et til en avledet
  størrelse (hundreårsflom) via monoton funksjon. Prioritet: **perfekt**
  (A-kandidat-markør).
- **Innholdskontrakt:** **Pivotal-metoden MÅ UTLEDES AKTIVT:** 1) finn
  $W(X_1, \ldots, X_n; \theta)$ med kjent fordeling fri for $\theta$
  (standardtilfellene: $\frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t_{n-1}$;
  $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2_{n-1}$;
  $\frac{2\sum X_i}{\beta} \sim \chi^2_{2n}$ fra 4.2); 2) sett
  $P(w_1 \le W \le w_2) = 1 - \alpha$ med kvantiler; 3) løs dobbeltulikheten
  for $\theta$ — **pass fortegn/retning når det deles på negativ eller
  inverteres**. Hovedeksemplet gjennomregnes komplett: eksakt
  $(1-\alpha)$-KI for $\beta$:
  $\left[\frac{2\sum x_i}{\chi^2_{2n,\alpha/2}}, \frac{2\sum x_i}{\chi^2_{2n,1-\alpha/2}}\right]$.
  Sammenligning med det normaltilnærmede intervallet fra 5.3 (CLT) — når og
  hvorfor de avviker (liten $n$, skjev fordeling; det eksakte er å
  foretrekke og typisk bredere). **KI-transformasjon via monoton funksjon
  (aktivt):** er $[L, U]$ et KI for $\theta$ og $g$ strengt voksende, er
  $[g(L), g(U)]$ et KI for $g(\theta)$ (avtakende: endepunktene bytter plass) —
  brukt på kvantiler/avledede størrelser à la hundreårs-hendelser.
- **Oppgavesjangre:** H (nivå iii). Mønstereksempel: «Ti komponentlevetider er
  eksponensialfordelte med forventning $\beta$, og $\sum x_i = 84$. Bruk at
  $2\sum X_i/\beta \sim \chi^2_{20}$ til å utlede et eksakt 90 %
  konfidensintervall for $\beta$, sammenlign med det CLT-baserte intervallet,
  og konstruer deretter et intervall for medianlevetiden $\beta \ln 2$.»
- **Typiske feil:** Snu ikke ulikheten ved invertering (endepunktene bytter
  plass); feil kvantil i feil endepunkt; frihetsgrader $n$ eller $n-1$ i
  stedet for $2n$; hevde at det normaltilnærmede intervallet er «riktigere»
  fordi det er smalere.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A t- og z-intervall med
frihetsgrad-/tolkningsfeller 35 min · 6.B kjikvadrat-KI for varians + andel
35 min · 6.C full pivotal-utledning for eksponensialdata 45 min · 6.D KI +
PI + transformasjon, eksamensnivå blandet 45 min).

---

### Del 7 — Hypotesetesting *(prioritet: PERFEKT — den store håndrettede oppgaven)*

#### Kapittel 7.1: Testritualet: hypoteser, testobservator, p-verdi og konklusjon i ord

- **id:** `tma4245-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `tma4245-6-1`
- **kapitteltype:** teori
- **description:** Den obligatoriske seksstegs-liturgien for z- og t-tester — slik løsningsforslagene faktisk skriver den.
- **Eksamensbelegg:** Hypotesetesting i ≈82 % av settene, «alltid tungt
  vektet (den store håndrettede oppgaven)»; t-test for ett utvalg er hyppigste
  testtype; z-test for andel fast gjenganger; tolknings-flervalg om p-verdi
  som distraktor-familie (Mai20, Aug20, Aug19). Prioritet: **perfekt**
  (nivå 1 punkt 3).
- **Innholdskontrakt:** **Ritualet MÅ BEHERSKES SOM LITURGI (sensorkrav 3):**
  1) formuler $H_0$ og $H_1$ i PARAMETRE — retningen på $H_1$ begrunnes fra
  situasjonen (hva ønskes påvist?); 2) velg testobservator og **oppgi
  fordelingen under $H_0$** ($Z = \frac{\bar{X}-\mu_0}{\sigma/\sqrt{n}} \sim N(0,1)$;
  $T = \frac{\bar{X}-\mu_0}{S/\sqrt{n}} \sim t_{n-1}$; andel med
  normaltilnærming); 3) sjekk forutsetninger (normalitet, uavhengighet,
  $np_0$ og $n(1-p_0)$ store nok); 4) forkastningsområde ved gitt $\alpha$
  ELLER p-verdi — begge varianter demonstreres, én gjennomføres komplett;
  5) tallfest; 6) **konkluder i ord i kontekst** («det er ikke grunnlag for å
  hevde at …») — et tall uten tolkning gir ikke full uttelling.
  p-verdiens presise definisjon (sannsynligheten, under $H_0$, for et minst
  like ekstremt utfall) + antisvar-listen («sannsynligheten for at $H_0$ er
  sann» er FEIL). Ensidig vs. tosidig og konsekvensen for kritisk
  verdi/p-verdi. Dualiteten test ↔ KI nevnes. Signifikansnivåets tolkning
  ($\alpha$ = P(type I-feil)); type I/II-feil defineres her (styrke i 7.3).
- **Oppgavesjangre:** I. Mønstereksempel: «Produsenten hevder at
  gjennomsnittlig responstid er høyst 200 ms. Tolv målinger gir
  $\bar{x} = 214$ og $s = 21$. Sett opp hypoteser med begrunnet retning,
  gjennomfør testen på 5 %-nivå med fordeling oppgitt under $H_0$, og
  konkluder i ord.»
- **Typiske feil (analysen §5.1, §5.6, §5.7):** z der det skal være t; feil
  retning i $H_1$ (skal følge av det som ønskes påvist — påvirker både
  kritisk verdi og p-verdi); glemme fordelingen under $H_0$; mistolke
  p-verdien; konkludere med tall uten ord; «akseptere $H_0$» i stedet for
  «ikke grunnlag for å forkaste».
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 7.2: Testkatalogen: varians, eksakte tester, to utvalg, parret design og fortegnstest

- **id:** `tma4245-7-2` · **number:** 7.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4245-7-1`
- **kapitteltype:** teori
- **description:** Ritualet gjenbrukt på hele testfamilien — med parret-vs.-to-utvalg-skillet og den nye fortegnstesten.
- **Eksamensbelegg:** Kjikvadrat-test for varians (Jun23, Aug25, Aug13);
  eksakt binomisk/Poisson-test for små utvalg (Des25, Mai18); parret t-test
  (Aug20, Mai12, Mai14 — Aug20 bruker en hel deloppgave på parret/to-utvalg-
  skillet); to-utvalgs-t (Aug17, Nov18, Aug23); to utvalg samlet ≈24 %;
  **fortegnstest i Des24 og Mai24 — ny sjanger 2024** (binomisk test på antall
  positive differanser, som supplement til t-testen på samme data).
  Prioritet: **kunne** (parret-skillet og fortegnstesten: perfekt-nære
  gjengangere).
- **Innholdskontrakt:** Samme seksstegs-rituale, nye observatorer (formlene
  står i formelsamlingen — tren VALG, frihetsgrader og forutsetninger):
  varians: $\frac{(n-1)S^2}{\sigma_0^2} \sim \chi^2_{n-1}$ under $H_0$
  (asymmetrisk forkastningsområde); **eksakt test for liten $n$/lav rate**:
  bruk binomisk/Poisson-fordelingen direkte via kumulativ tabell — ingen
  normaltilnærming (og NÅR eksakt kreves: forutsetningssjekken feiler);
  **parret design: differansene $D_i = Y_i - X_i$ analyseres som ETT utvalg**
  ($T = \bar{D}/(S_D/\sqrt{n}) \sim t_{n-1}$) — kjennetegn: målingene hører
  naturlig sammen (før/etter, samme enhet); to uavhengige utvalg: to-utvalgs-t
  med pooled varians $S_p^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$
  og $t_{n_1+n_2-2}$ (antatt lik varians — oppgis); **fortegnstesten
  (aktivt)**: $U$ = antall positive differanser $\sim$ binomisk($n, \frac{1}{2}$)
  under $H_0$, eksakt p-verdi fra tabellen; hvorfor supplere t-testen
  (normalitetsantagelsen usikker) og hvorfor konklusjonene kan sprike (mindre
  styrke, bruker bare fortegn).
- **Oppgavesjangre:** I (variantene). Mønstereksempel: «Gjærernes pH måles i
  14 tanker før og etter omlegging. Begrunn at designet er parret, test på
  5 %-nivå om omleggingen senker pH med en parret t-test, suppler med en
  fortegnstest, og forklar hvorfor de to testene kan gi ulikt svar.»
- **Typiske feil (analysen §5.2, §5.3):** **Behandle parrede data som to
  uavhengige utvalg** (Aug20/Mai24 er konstruert for å avsløre dette); bruke
  normaltilnærming der eksakt test kreves (og omvendt); feil frihetsgrader i
  pooled-testen; tosidig fortegnstest regnet ensidig.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.3: Styrke, type II-feil og dimensjonering av utvalget

- **id:** `tma4245-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-7-1`
- **kapitteltype:** teori
- **description:** Regn ut sannsynligheten for å avsløre et avvik — og finn hvor mange observasjoner som trengs for styrke 0,8 eller 0,95.
- **Eksamensbelegg:** Styrke/type I–II/dimensjonering i ≈35 % av settene og
  **kraftig økende — «nesten obligatorisk» i den store testoppgaven 2024–26**;
  Aug21: finn $n$ som gir ønsket styrke (fasitsvar av typen $n \ge 1303$);
  Des25: hvilken rate kreves for styrke 0,95; Mai25 simulerer styrke (kobling
  9.2). Prioritet: **perfekt** (nivå 1 punkt 3, A-markør).
- **Innholdskontrakt:** MÅ UTLEDES AKTIVT: type I-feil ($\alpha$, forkaste
  sann $H_0$) og type II-feil ($\beta$-feil, beholde gal $H_0$ — NB: boka
  skriver «type II-sannsynligheten» og unngår symbolkollisjon med
  eksponensial-$\beta$ ved alltid å presisere konteksten);
  **styrken $= P(\text{forkast } H_0 \mid \text{sann parameterverdi } \mu_1)$**.
  Regneoppskriften for z-testen (aktivt): uttrykk forkastningsområdet i
  $\bar{X}$-skala, regn sannsynligheten under $\mu_1$ ved re-standardisering
  med $\mu_1$; styrkefunksjonens form (øker med $|\mu_1 - \mu_0|$, $n$,
  $\alpha$). **Dimensjonering (aktivt):** løs styrkekravet for $n$ —
  $n \ge \left(\frac{(z_\alpha + z_{\beta})\sigma}{\mu_1 - \mu_0}\right)^2$
  for ensidig z-test (utledes, ikke pugges); rund ALLTID opp. Samme logikk
  for andelstest og (skissert) Poisson-rate. For t-test: kvalitativt +
  z-tilnærming, med merknad om at eksakt t-styrke ligger utenfor.
- **Oppgavesjangre:** I (styrke-halen). Mønstereksempel: «Testen i forrige
  oppgave bruker $\alpha = 0{,}05$. Finn styrken dersom virkelig
  gjennomsnitt er 212 ms, og bestem hvor mange målinger som trengs for at
  styrken skal bli minst 0,9.»
- **Typiske feil:** Blande $\alpha$ og styrke; regne styrken under $\mu_0$ i
  stedet for $\mu_1$; glemme å re-standardisere forkastningsgrensen; runde
  $n$ ned; tolke lav styrke som «bevis for $H_0$».
- **Quiz: 15 · Flashcards: 10**

#### Kapittel 7.4: Drill: den store kjeden — ML → egenskaper → pivotal-KI → test → styrke

- **id:** `tma4245-7-4` · **number:** 7.4 · **estimatedMinutes:** 95 · **prerequisites:** `tma4245-7-3`, `tma4245-6-2`, `tma4245-5-4`
- **kapitteltype:** drill
- **description:** Bokas ryggrad-drill: hele storoppgaven fra modelldefinisjon til styrkeberegning som ÉN sammenhengende fortelling — slik den står i praktisk talt hvert sett siden 2016.
- **Eksamensbelegg:** «Den store oppgaven mot slutten er nesten alltid en
  kjede: definer modell → utled ML-estimator → egenskaper → KI (ofte via
  pivotal) → hypotesetest (ofte med styrke) — samme historie hele veien» — i
  praktisk talt hvert sett siden 2016, 30–40 % av poengene. Kontekstene er
  ingeniør-/naturvitenskapsnære: levetider, vindmålinger, flomhøyder,
  batterikapasitet, lakseoppdrett. Prioritet: **perfekt** — kapitlet ER
  eksamens tyngste oppgave.
- **Innholdskontrakt:** Løsningsoppskrift for hele kjeden: 1) «La $X_i$ = …,
  iid med fordeling …» (modelldefinisjon, sensorkrav 1); 2) ML-ritualet fra
  5.2; 3) forventningsretthet + varians (5.1); 4) pivotal → eksakt KI (6.2),
  evt. CLT-KI til sammenligning; 5) test i samme parameter med ritualet (7.1)
  — gjerne via pivotalen (eksakt test); 6) styrke/dimensjonering (7.3);
  7) konklusjoner i ord hele veien. Gjennomregnet eksamenscase med
  sensor-margnotater over ALLE ledd (eksponensial-levetidscase anbefales som
  hovedcase — treffer 4.2 + 6.2). Deretter 8–15 kjedeoppgaver på eksamensnivå
  med varierte fordelinger: eksponensial (hovedvekt), gamma med kjent form,
  Poisson-rate, binomisk andel, normal med ukjent varians, én
  «oppskriftsfordeling» (Weibull-løft à la 4.2); minst én med
  estimator-sammenligning innbakt og én med to datakilder.
- **Oppgavesjangre:** G + H + I i kjede (sjangrenes kroneksempel).
  Mønstereksempel: «Tiden mellom alarmutløsninger i et prosessanlegg antas
  eksponensialfordelt med forventning $\beta$. (a) Utled ML-estimatoren fra
  $n = 15$ observasjoner med $\sum x_i = 96$ timer og vis at den er
  forventningsrett. (b) Bruk $2\sum X_i/\beta \sim \chi^2_{30}$ til et eksakt
  95 %-KI. (c) Leverandøren hevder $\beta \ge 8$; test påstanden på 5 %-nivå.
  (d) Finn styrken dersom $\beta = 5$, og kommenter om 15 observasjoner er
  nok.»
- **Typiske feil:** Alle kjedens ledd-feil under tidspress — spesielt:
  frihetsgrader $2n$; retningen på $H_1$; konklusjon uten ord; å miste tråden
  mellom leddene (bruke feil estimat videre).
- **Quiz: 15 · Flashcards: 5**

**Prøve-kvote Del 7:** 4 prøver (7.A testritualet z/t/andel 40 min · 7.B
testkatalogen med parret/fortegnstest-case 45 min · 7.C styrke og
dimensjonering 40 min · 7.D full kjedeoppgave på eksamensnivå (sjanger
G+H+I) 60 min).

---

### Del 8 — Enkel lineær regresjon *(prioritet: PERFEKT — 11 av 12 siste sett)*

#### Kapittel 8.1: Modellen og minste kvadraters metode

- **id:** `tma4245-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-5-2`, `tma4245-3-2`
- **kapitteltype:** teori
- **description:** Regresjonsmodellen med feilantagelser, LS-estimatene fra oppgitte summer — og hvorfor ML gir det samme.
- **Eksamensbelegg:** Regresjon i ≈59 % totalt, men **11 av de 12 siste
  settene, alltid som stor oppgave**; utlede LS og vise ML = LS i Mai18 og
  Des23; estimatene regnes typisk fra oppgitte summer
  ($\sum(x_i-\bar{x})^2$, $\sum(x_i-\bar{x})(y_i-\bar{y})$). Prioritet:
  **perfekt** (nivå 1 punkt 5).
- **Innholdskontrakt:** Modellen $Y_i = \alpha + \beta x_i + \varepsilon_i$
  med $\varepsilon_i$ uavhengige, $N(0, \sigma^2)$ — **alle tre
  feilantagelser (uavhengighet, normalitet, konstant varians) oppgis
  eksplisitt der de brukes** (sensorkrav 2); $x$ fast, $Y$ stokastisk.
  **LS-utledningen (aktivt):** minimer $\sum(y_i - \alpha - \beta x_i)^2$,
  normalligningene, løsningene
  $\hat{\beta} = \frac{\sum(x_i-\bar{x})(Y_i-\bar{Y})}{\sum(x_i-\bar{x})^2}$,
  $\hat{\alpha} = \bar{Y} - \hat{\beta}\bar{x}$; regning fra oppgitte summer
  (arbeidsformen på eksamen). **ML = LS under normalfeil (aktivt):**
  log-likelihooden er maksimal når kvadratsummen er minimal — vises i tre
  linjer. Egenskapene $E(\hat{\beta}) = \beta$,
  $\text{Var}(\hat{\beta}) = \sigma^2/\sum(x_i-\bar{x})^2$ (utledes med
  lineærkombinasjons-reglene fra 3.2); $s^2 = \text{SSE}/(n-2)$ som
  forventningsrett variansestimator — **$n-2$!**
- **Oppgavesjangre:** J (estimeringsdelen). Mønstereksempel: «For 18
  målinger av herdetid mot temperatur er $\bar{x} = 40$, $\bar{y} = 122$,
  $\sum(x_i-\bar{x})^2 = 640$ og $\sum(x_i-\bar{x})(y_i-\bar{y}) = -512$.
  Beregn LS-estimatene, og vis at ML-estimering under normalantagelsen gir
  samme svar.»
- **Typiske feil (analysen §5.1):** $n-1$ i stedet for $n-2$ i $s^2$; snu
  teller/nevner i $\hat{\beta}$; behandle $x_i$ som stokastiske; glemme
  feilantagelsene når de brukes.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 8.2: Inferens og prediksjon i regresjon — og residualplottet sensor alltid spør om

- **id:** `tma4245-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4245-8-1`, `tma4245-6-1`, `tma4245-7-1`
- **kapitteltype:** teori
- **description:** KI og test for helningen, prediksjon i x₀ med KI vs. PI — og residualdiagnostikken som nesten alltid er en deloppgave.
- **Eksamensbelegg:** Inferens for helning + prediksjon er standardhalen på
  regresjonsoppgaven; «tolke residualplott er nesten alltid en deloppgave»;
  Des24 spør eksplisitt om hvorfor prediksjon er mest presis i $\bar{x}$ og
  hva ekstrapolering gjør; transformerte modeller i arkivet: ln-lineær
  koffeinmodell (Des25), cosinus-ledd (Des22), polynomledd (Aug25).
  Prioritet: **perfekt**.
- **Innholdskontrakt:** Testobservatoren
  $T = \frac{\hat{\beta} - \beta_0}{S/\sqrt{\sum(x_i-\bar{x})^2}} \sim t_{n-2}$
  under $H_0$ (bruk med ritualet fra 7.1); KI for $\beta$; test for
  $\beta = 0$ som «har $x$ forklaringskraft?». Prediksjon i $x_0$:
  punktprediksjon $\hat{y}_0 = \hat{\alpha} + \hat{\beta}x_0$; **KI for
  forventningen $E(Y_0)$ vs. PI for NY observasjon** — formlene (fra
  formelsamlingen) med $\sqrt{\frac{1}{n} + \frac{(x_0-\bar{x})^2}{\sum(x_i-\bar{x})^2}}$
  vs. $\sqrt{1 + \frac{1}{n} + \frac{(x_0-\bar{x})^2}{\sum(x_i-\bar{x})^2}}$;
  **usikkerheten er minst i $\bar{x}$ og vokser mot kantene — ekstrapolering
  utenfor dataområdet flagges alltid** (aktiv forklaring). Residualdiagnostikk
  (sensorkrav 10): plott residualer mot $x$/prediksjoner — trakt =
  heteroskedastisitet, bue = manglende krumningsledd, Q-Q av residualer =
  normalitetssjekk; begrunn ALLTID i mønsteret. Transformerte modeller til
  BRUK: ln-lineær ($\ln Y = \alpha + \beta x$ — tilbaketransformasjon av
  prediksjon og KI via monotoni, kobling 6.2), polynom- og
  periodiske ledd som «lineær i parametrene»-varianter.
- **Oppgavesjangre:** J + M. Mønstereksempel: «Bruk tallene fra forrige
  kapittels oppgave: test på 5 %-nivå om herdetiden avtar med temperaturen,
  prediker herdetiden ved 55 grader med et 95 % prediksjonsintervall, og
  forklar hvorfor intervallet er bredere enn ved 40 grader. Residualplottet
  viser en tydelig trakt — hvilken antagelse rammes?»
- **Typiske feil (analysen §5.12, §5.1):** **KI der PI kreves** (og omvendt);
  ekstrapolere uten forbehold; $t_{n-1}$ i stedet for $t_{n-2}$; «residualene
  ser fine ut» uten mønsterbegrunnelse; glemme å tilbaketransformere i
  ln-modellen.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 8.3: NTNU-varianten: regresjon uten konstantledd og tre estimatorer for β

- **id:** `tma4245-8-3` · **number:** 8.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4245-8-2`, `tma4245-5-1`
- **kapitteltype:** teori
- **description:** Modellen $Y = \beta x + \varepsilon$ der tre foreslåtte estimatorer skal sammenlignes — arkivets favoritt-vri på regresjonsoppgaven.
- **Eksamensbelegg:** **Regresjon uten konstantledd med
  estimator-sammenligning i Mai22, Aug22 og Des23** — analysens uthevede
  NTNU-favoritt; kandidatene som går igjen:
  $\hat{\beta}_1 = \frac{\sum x_i Y_i}{\sum x_i^2}$ (LS),
  $\hat{\beta}_2 = \frac{1}{n}\sum \frac{Y_i}{x_i}$,
  $\hat{\beta}_3 = \bar{Y}/\bar{x}$. Prioritet: **kunne** (A-differensiator;
  kombinerer 5.1 og 8.1).
- **Innholdskontrakt:** Modellen $Y_i = \beta x_i + \varepsilon_i$ (tvunget
  gjennom origo — når er det faglig riktig?); **LS-utledning uten
  konstantledd (aktivt):** minimer $\sum(Y_i - \beta x_i)^2$ →
  $\hat{\beta} = \sum x_i Y_i/\sum x_i^2$. Sammenligningsprotokollen fra 5.1
  anvendt (aktivt): alle tre kandidater er forventningsrette (vis ved
  linearitet); variansene
  $\text{Var}(\hat{\beta}_1) = \sigma^2/\sum x_i^2$,
  $\text{Var}(\hat{\beta}_2) = \frac{\sigma^2}{n^2}\sum \frac{1}{x_i^2}$,
  $\text{Var}(\hat{\beta}_3) = \frac{\sigma^2}{(n\bar{x})^2} \cdot n = \frac{\sigma^2}{n\bar{x}^2}$
  — utledes med regnereglene; LS vinner (kan begrunnes via
  Cauchy-Schwarz-hint eller numerisk sammenligning — boka viser
  ulikhetsargumentet som «bør kjenne til»). Inferens i varianten: samme
  t-logikk med $n-1$ frihetsgrader (merk forskjellen fra $n-2$!).
- **Oppgavesjangre:** J + G. Mønstereksempel: «Strømforbruket $Y$ antas
  proporsjonalt med produksjonsvolumet $x$: $Y_i = \beta x_i + \varepsilon_i$.
  Tre estimatorer foreslås: $\sum x_i Y_i/\sum x_i^2$,
  $\frac{1}{n}\sum(Y_i/x_i)$ og $\bar{Y}/\bar{x}$. Vis at alle er
  forventningsrette, finn variansene, og avgjør hvilken du ville brukt.»
- **Typiske feil:** Bruke $n-2$ frihetsgrader i origo-modellen; regne
  $\text{Var}$ uten kvadrat på koeffisientene $x_i$; anta at kandidatene er
  skjeve og hoppe til MSE; velge estimator uten begrunnelse i begge kriterier.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 8:** 4 prøver (8.A LS-estimering fra summer + ML = LS
40 min · 8.B inferens for helning + KI/PI-skillet 45 min · 8.C
residualdiagnostikk + transformert modell 35 min · 8.D full regresjonsoppgave
på eksamensnivå inkl. uten-konstantledd-sammenligning 55 min).

---

### Del 9 — Simulering og Python *(8 av 9 sett siden des. 2023)*

#### Kapittel 9.1: Inversjonsmetoden og numpy-verktøykassen

- **id:** `tma4245-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4245-2-4`, `tma4245-4-1`
- **kapitteltype:** teori
- **description:** Fra $F^{-1}$ på papir til kjørbar numpy-funksjon: simulering fra en vilkårlig fordeling med inversjonsmetoden.
- **Eksamensbelegg:** Sjanger N undertype 1–2: inversjonsmetoden utledet
  analytisk + numpy-funksjon skrevet/fullført i Des23, Aug24, Aug25, Des25
  (Gumbel); «tolke gitt kode — hvilken fordeling genererer den, hva estimerer
  den» (Des23). Python/MC totalt i **8 av 9 sett siden des. 2023** —
  emnebeskrivelsens «bruk av programvare» testes reelt. Prioritet: **kunne**
  (nivå 2 punkt 8 — men obligatorisk lesning).
- **Innholdskontrakt:** **Inversjonsmetoden (aktivt):** er $U \sim$
  uniform$(0,1)$, har $X = F^{-1}(U)$ fordelingsfunksjon $F$ — beviset i tre
  linjer ($P(F^{-1}(U) \le x) = P(U \le F(x)) = F(x)$); arbeidsflyt: utled
  $F$ (fra 2.4-drillen), løs $F(x) = u$ for $x$, implementer.
  Eksponensial-eksemplet $x = -\beta\ln(1-u)$ og ett hale-eksempel
  ($F(x) = 1 - x^{-3}$ for $x > 1$ → $x = (1-u)^{-1/3}$).
  **numpy-idiomene (sensorkrav 9 — koden skal være korrekt og kjørbar):**
  `np.random.uniform(size=n)`, `np.random.normal(loc, scale, size=n)`
  (NB: `scale` er standardavviket!), vektoriserte transformasjoner,
  `np.mean`, `np.var(x, ddof=1)` (og HVORFOR `ddof=1` — kobling 5.1);
  funksjonsmønsteret `def simuler(n): u = np.random.uniform(size=n); return ...`.
  Kodelesing som egen ferdighet: gitt en snutt — identifiser fordelingen og
  hva som estimeres. Alle kodeeksempler i boka skal være komplette og
  kjørbare.
- **Oppgavesjangre:** N (1–2). Mønstereksempel: «Tettheten til
  bølgehøyden er $f(x) = 4/x^5$ for $x > 1$. Finn fordelingsfunksjonen og
  dens inverse, og skriv en Python-funksjon som trekker $n$ realisasjoner med
  inversjonsmetoden. Hva returnerer `np.mean(simuler(10**6) > 2)` et estimat
  på?»
- **Typiske feil:** Løse $f(x) = u$ i stedet for $F(x) = u$; bytte om `loc`
  og `scale` (eller sende varians som `scale`); løkke der vektorisering
  kreves; `np.var` uten `ddof=1` for empirisk varians; kode som ikke kjører
  (delvis kode gir bare delvis uttelling).
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 9.2: Monte Carlo som inferensverktøy: simulert sannsynlighet, p-verdi og styrke

- **id:** `tma4245-9-2` · **number:** 9.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4245-9-1`, `tma4245-7-3`, `tma4245-5-3`
- **kapitteltype:** teori
- **description:** Estimér det du ikke kan regne: sannsynligheter, forventninger, p-verdier, styrke og feilforplantning ved gjentatte trekk.
- **Eksamensbelegg:** Sjanger N undertype 3: simulert p-verdi (Des23),
  simulert styrke (Mai25), «hvilken lyspære varer lengst»-simulering (Des24),
  feilforplantning ved simulering (Mai24, mot deltametoden), forventningsrett
  MC-estimat (Mai26). Prioritet: **kunne** — differensierer mot A sammen med
  9.1.
- **Innholdskontrakt:** Grunnprinsippet (aktivt): en sannsynlighet er en
  forventet indikator — estimér med
  $\hat{p} = \frac{1}{n}\sum \mathbf{1}(\text{hendelse i trekk } i)$
  (i numpy: `np.mean(betingelse)`); MC-estimatet er forventningsrett med
  varians $p(1-p)/n$ (kobling 5.1 — Mai26 spør eksplisitt); presisjonen øker
  som $1/\sqrt{n}$. Oppskriftene som SKAL beherskes: (i) simulert
  sannsynlighet/forventning for en transformert/sammensatt størrelse (f.eks.
  maks av flere levetider — kobling 4.1); (ii) **simulert p-verdi**: generer
  mange datasett under $H_0$, regn testobservatoren i hvert, andelen minst
  like ekstrem som observert er p-verdien; (iii) **simulert styrke**: samme,
  men generer under alternativet og tell andel forkastninger; (iv)
  **feilforplantning ved simulering**: trekk inngangsvariablene, regn
  $g(\cdot)$ per trekk, `np.var(..., ddof=1)` — og sammenlign med
  deltametoden (5.3). Kodeskjelettene vises komplett og kjørbart for alle
  fire; lesing/fullføring av delvis kode trenes eksplisitt.
- **Oppgavesjangre:** N (3). Mønstereksempel: «Fyll ut de to manglende
  linjene i funksjonen under, som estimerer styrken til en ensidig t-test på
  5 %-nivå når sann forventning er 212 og $n = 12$ — og forklar hvorfor
  svaret nærmer seg fasit fra kap. 7.3 når antall simuleringer øker.»
- **Typiske feil:** Simulere under $H_0$ når styrken skal estimeres (og
  omvendt for p-verdi); telle «mer ekstrem» med feil retning/fortegn;
  glemme `ddof=1`; forveksle antall simuleringer (MC-presisjon) med
  utvalgsstørrelsen $n$ i testen.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 9:** 4 prøver (9.A inversjonsmetoden analytisk + kode
35 min · 9.B kodelesing/-fullføring 30 min · 9.C simulert p-verdi og styrke
40 min · 9.D blandet MC-oppgave på eksamensnivå inkl. feilforplantning med
delta-kontroll 45 min).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Kortsvar- og Inspera-drill: fellene, presisjonen og tolkningene

- **id:** `tma4245-10-1` · **number:** 10.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–9
- **kapitteltype:** drill
- **description:** Sjanger O på tvers av hele pensum: eksakte tallsvar, klassiske feller og tolknings-flervalgene — poengene ingen har råd til å miste.
- **Eksamensbelegg:** Sjanger O i alle Inspera-hybridsett 2022–2025: eksakte
  tallsvar med 2–3 desimaler (avrunding straffes — kun tallet er riktig eller
  galt), flervalg. Gjengangerne: Venndiagram-identiteter,
  disjunkt/uavhengig-feller ($P(A) = 0{,}2$, $P(B) = 0{,}9$ kan ikke være
  disjunkte), tolkning av p-verdi og KI (klassiske feiltolkninger som
  distraktorer), $P(Y = y) = 0$ for kontinuerlig $Y$, avlesing av
  histogram/boksplott. Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Presisjonsregimet demonstreres: aldri avrund i
  mellomregning, svar med 2–3 desimaler, sjekk benevning. Deretter drillbank
  som dekker HELE fellekatalogen med fasit i eksakt kortsvarformat og
  henvisning til teorikapitlet: disjunkt vs. uavhengig (1.1), $P(X=x)=0$ og
  tetthet > 1 (2.1), kovariansfellene (2.5/3.2), minneløshets-fellene (2.3),
  n−1-divisoren (1.4), KI-/p-verdi-tolkninger med antisvar (6.1/7.1),
  parret/to-utvalg-kjennetegn (7.2), KI vs. PI (8.2), boksplott-/Q-Q-avlesning
  (1.4). Flervalgsformatet trenes med distraktorer bygget på de dokumenterte
  feiltolkningene.
- **Oppgavesjangre:** O + M. Mønstereksempel: «Hvilke av følgende utsagn om
  et 95 % konfidensintervall er riktige? (i) Intervallet inneholder 95 % av
  observasjonene … (iv) Ved mange gjentakelser dekker metoden parameteren i
  95 % av tilfellene.»
- **Typiske feil (analysen §5.13, §5.5, §5.4, §5.7):** Avrundingsfeil i
  autorettede felt; alle tolknings- og fellefeilene fra teorikapitlene —
  samlet og drillet.
- **Quiz: 15 · Flashcards: 40** (fellekatalogen + presisjonsregler som kort)

#### Kapittel 10.2: Øvingseksamen 1: Inspera-hybrid med full kjede

- **id:** `tma4245-10-2` · **number:** 10.2 · **estimatedMinutes:** 240 · **prerequisites:** `tma4245-10-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter Des25-malen: kortsvar i Inspera + tre store håndrettede oppgaver.
- **Eksamensbelegg/miks:** Speiler Des25-formatet (100 p): **4 kortsvar à
  10 p** (normal-lineærkombinasjon med kovarians; kombinatorikk +
  disjunkt/uavhengig-felle; Poisson-prosess med rateskalering;
  simultantabell-avlesning) + **3 åpne à 30 p**: (i) egendefinert tetthet →
  normering → $F$ → ML → eksakt kjikvadrat-pivotal-KI, med
  inversjonsmetode-deloppgave i Python (sjangre C+G+H+N); (ii) full t-test
  med begrunnet retning, styrke og $n$-dimensjonering i biologikontekst
  (sjanger I); (iii) regresjon: LS fra summer, KI for helning, prediksjon med
  PI, residualtolkning (sjanger J+M). Alle oppgaver nyskrevne (egne tall og
  kontekster). Løsningsforslag som A-besvarelse i `collapsible` per oppgave
  med `tip`-notat om vekt og tidsbudsjett (ca. 10 min per kortsvar, 60 min
  per stor oppgave); Inspera-delen med eksakte tallsvar (2 desimaler).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.3: Øvingseksamen 2: klassisk papireksamen med fortellingsoppgaver

- **id:** `tma4245-10-3` · **number:** 10.3 · **estimatedMinutes:** 240 · **prerequisites:** `tma4245-10-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter Mai25/Mai26-malen: store sammenhengende fortellingsoppgaver på papir, alle delpunkter teller likt.
- **Eksamensbelegg/miks:** Speiler ren-papir-settene: **4 store
  fortellingsoppgaver med 10–12 delpunkter totalt, alle delpunkter teller
  likt**: (1) diagnostisk test: hendelsesdefinisjoner, total sannsynlighet,
  Bayes + diskret modellvalg-hale (sjangre E+B); (2) eksponensial-levetider i
  et parallellsystem: minneløshet, ordningsvariable, sum → gamma,
  kjikvadrat-transformasjonen (sjangre C+D+K); (3) parret design: parret
  t-test med begrunnelse av designvalget + fortegnstest med
  sprik-diskusjon (sjanger I); (4) Monte Carlo: simulert styrke for testen i
  (3) — skriv/fullfør numpy-kode, forklar hva økt antall simuleringer gjør
  (sjanger N). Alle nyskrevne, ingeniør-/naturkontekster. Løsningsforslag som
  A-besvarelse med sensor-tips per delpunkt.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 3: Inspera-hybrid med oppskriftsfordeling og deltametode

- **id:** `tma4245-10-4` · **number:** 10.4 · **estimatedMinutes:** 240 · **prerequisites:** `tma4245-10-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter Aug24-malen (60 p) som dekker A-differensiatorene: eksotisk fordeling, to-kilders likelihood, deltametoden og origo-regresjon.
- **Eksamensbelegg/miks:** Speiler Aug24-formatet (60 p fordelt ujevnt,
  f.eks. 12/9/9/10/10/10): **småoppgaver** (deskriptiv boksplott-tolkning;
  kortsvar-feller: $P(Y = y) = 0$, KI-tolkning; normal-kvantil baklengs) +
  **store oppgaver**: (i) nyskrevet «oppskriftsfordeling» (Gumbel-aktig
  ekstremverdi-kontekst, CDF oppgitt): halesannsynlighet, kvantil, ML,
  KI-transformasjon til en avledet størrelse via monoton funksjon (sjangre
  C+G+H); (ii) to datakilder som deler parameter: kombinert likelihood +
  eksakt test (sjanger G+I); (iii) deltametoden på en avledet størrelse +
  simuleringskontroll i numpy (sjanger N + 5.3); (iv) regresjon uten
  konstantledd: tre estimatorer sammenlignes (sjanger J+G). Alle nyskrevne.
  Løsningsforslag som A-besvarelse med vektings-tips; Inspera-presisjonskrav
  på småoppgavene.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 10:** øvingseksamenene (10.2–10.4) utgjør delens prøver;
i tillegg fungerer 10.1s drillbank som generalprøve på kortsvarsdelen.

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.4 | 15+15+20+15 = **65** | 15+15+20+15 = **65** |
| 2 | 2.1–2.5 | 20+25+25+15+15 = **100** | 20+30+30+10+15 = **105** |
| 3 | 3.1–3.4 | 25+20+15+15 = **75** | 25+15+15+5 = **60** |
| 4 | 4.1–4.2 | 15+10 = **25** | 15+5 = **20** |
| 5 | 5.1–5.4 | 15+20+10+15 = **60** | 15+20+10+5 = **50** |
| 6 | 6.1–6.2 | 20+15 = **35** | 20+10 = **30** |
| 7 | 7.1–7.4 | 20+20+15+15 = **70** | 25+20+10+5 = **60** |
| 8 | 8.1–8.3 | 15+15+10 = **40** | 15+15+10 = **40** |
| 9 | 9.1–9.2 | 15+15 = **30** | 15+10 = **25** |
| 10 | 10.1–10.4 | 15+5+5+5 = **30** | 40+0+0+0 = **40** |
| **Sum** | **35 kap.** | **540 ≥ 500 ✓** | **505 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 2+3 (sannsynlighetssøylen, 96–98 %) og
Del 5+7 (inferens-kjeden) bærer 305 av 540 quiz.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9, 36 totalt)

Prøvene er spesifisert i «Prøve-kvote Del N»-blokkene over. Hver prøve består
av nyskrevne oppgaver i delens eksamenssjangre, med løsningsforslag skrevet som
A-besvarelse og poengfordeling; minst én prøve per del ligger på eksamensnivå,
og minst én per del bruker Inspera-kortsvarformat med presisjonskrav der det
er naturlig (Del 1, 2, 3, 6, 10-tilknytning).

### Øvingseksamener (3 komplette sett — kap. 10.2–10.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (10.2) | Inspera-hybrid à la Des25 (100 p) | 4 kortsvar à 10 p + 3 åpne à 30 p; kjeden C→G→H(+N), full test m/styrke (I), regresjon (J+M) |
| Øvingseksamen 2 (10.3) | Ren papir à la Mai25/Mai26 | 4 fortellingsoppgaver, alle delpunkter likt: E+B, C+D+K, I (parret + fortegnstest), N (simulert styrke) |
| Øvingseksamen 3 (10.4) | Inspera-hybrid à la Aug24 (60 p) | Småoppgaver (M+O) + oppskriftsfordeling C+G+H, to-kilders G+I, deltametode+N, origo-regresjon J+G |

Til sammen dekker de tre settene samtlige 15 sjangre (A–O) minst én gang, og
**alle tre har Python-innslag** (8 av 9 reelle sett siden des. 2023 har det).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes
Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (4 t, kode C, Inspera-hybrid vs. papir),
   tvillingemnet TMA4240, poengoppsettene og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (normal komplett, inferens-kjeden, testritualet m/styrke,
   eksponensialens kjikvadrat-apparat, regresjon, Bayes), kunne
   (transformasjoner, Python/MC, diskret modellvalg, estimator-sammenligning,
   simultanfordelinger, kombinatorikk, deskriptiv, to-utvalg/parret), kjenne
   (ordningsvariable, fortegnstest, deltametoden, CLT som teorispørsmål,
   oppskriftsfordelinger, PI utenfor regresjon).
3. **Kjede-kartet** — den store oppgavens anatomi (modell → ML → egenskaper →
   pivotal-KI → test → styrke) med henvisning til kapitlene som bygger hvert
   ledd (5.2 → 5.1 → 6.2 → 7.1 → 7.3) og drillen som setter det sammen (7.4).
4. **Sjangerguiden** — de 15 oppgavetypene A–O med løsningsoppskriftene fra
   drillkapitlene (2.4, 3.4, 4.2, 5.4, 7.4, 10.1) i kortform.
5. **Sensorreglene** — de ti kravene fra løsningsforslagene +
   karakterskille-listen (pivotaler, styrke, MSE, transformasjonsbevis,
   simulering) fra kap. 0.1.
6. **Feilkatalogen** — de 14 typiske feilene samlet, hver med henvisning til
   kapitlet som forebygger den (kart i §6-sjekklisten).
7. **Formelsamling-treningen** — hva som står i «Tabeller og formler i
   statistikk» (tren oppslag: riktig tabell, frihetsgrader, kvantil), hva det
   gule A5-arket bør inneholde (kjedens oppskrifter, fellene), og hva som MÅ
   kunne utledes (ML, pivotaler, transformasjoner, styrke, LS).
8. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1–2 → 3 (perfekt-søyle 1) → 4 → 5–7 (kjeden bygges og drilles) →
   8 → 9, prøver underveis, øvingseksamenene de tre siste ukene under
   tidspress (240 min, kalkulatoren og formelsamlingen fremme, Inspera-delen
   med presisjonskrav).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tma4245` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`, med `sectionNames` fra §2-tabellen.
2. **Del 0** (0.1) — etablerer sjangerbokstavene A–O og frekvenstallene som
   resten refererer til.
3. **Fundamentet i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3.
4. **Broen og kjeden**: Del 4 → Del 5 → Del 6 → Del 7 (kjede-drillen 7.4
   til slutt i delen — den gjenbruker 5.4 og 6.2).
5. Del 8 → Del 9 → Del 10 (øvingseksamenene til slutt — de gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; prøvene (§4) etter plattformens
   prøvekapittel-mønster.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser (`json.load`); generér
      helst via `json.dump`; `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\sim`, `\\chi^2_{2n}`, `\\bar{X}`); ingen unicode-symboler for
      matematikk (ikke «χ²», «Σ», «≤» i formeltekst).
- [ ] **Notasjonskonsistens** (grep over alle tma4245-filer): eksponensial
      KUN med $\beta$-parametrisering (forbudt som hovedform:
      `\lambda e^{-\lambda x}`); $N(\mu, \sigma^2)$ med varians; $S^2$ med
      $n-1$; kvantiler som øvre haleareal ($z_\alpha, t_{\nu,\alpha},
      \chi^2_{\nu,\alpha}$); estimator med hatt og stor bokstav; pivotalen
      alltid $\chi^2_{2n}$ (aldri $\chi^2_n$/$\chi^2_{n-1}$ i
      eksponensialtilfellet); regresjon $s^2 = \text{SSE}/(n-2)$.
- [ ] **Python-kode**: all kode numpy-idiomatisk, komplett og faktisk kjørt
      av forfatteren før innsjekk (kjør snuttene med `python3` — sensorkrav 9
      gjelder også boka); `np.var(..., ddof=1)` overalt for empirisk varians.
- [ ] **Symbol- og formelliste per delkapittel** (README-leserkravet — KRITISK
      i statistikk): hvert kapittel har `collapsible` «Symbol- og formelliste»
      rett etter Forkunnskaper som forklarer ALLE symboler og formler brukt i
      kapitlet ($\beta$ = forventet levetid, $\Phi$ = standardnormal CDF,
      $S^2$ = utvalgsvarians, …) — per delkapittel, ingen arv fra tidligere
      kapitler.
- [ ] **Forkunnskaper-blokk** i hvert kapittel med lenker til kapitler i boka
      + kryssbok-lenker for eksterne forkunnskaper (derivasjon/integrasjon fra
      R1/R2-bøkene i systemet; lenk kun til kapitler som faktisk finnes —
      verifiser id-ene).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvens-/vekttallene fra dette skjelettet), Typiske feil-`warning`,
      2–4 eksempler (siste på eksamensnivå, løsning som A-besvarelse med
      tabelloppslag angitt), 6–12 øvinger med `solution` + `hints` og
      eksplisitt sjangerforankring, repetisjons-`collapsible`; drillkapitler
      har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Formelsamling-merking**: hvert kapittel skiller «står i
      formelsamlingen — tren oppslaget» fra «må utledes aktivt» i tråd med
      innholdskontrakten.
- [ ] **Alle 14 feilmønstre fordelt** (kart): 1 z/t+frihetsgrader → 6.1/7.1/8.2 ·
      2 parret som to utvalg → 7.2 · 3 normaltilnærmingssjekk → 3.3/7.1 ·
      4 tetthet vs. sannsynlighet → 2.1/2.3/10.1 · 5 disjunkt vs. uavhengig →
      1.1/10.1 · 6 H₁-retning → 7.1 · 7 p-verdi/KI-tolkning → 6.1/7.1/10.1 ·
      8 kovariansleddet → 2.1/2.5/3.2 · 9 minneløshet → 2.3 · 10 ML-slurv →
      5.2/5.4 · 11 forventningsretthet/n−1 → 1.4/5.1 · 12 KI vs. PI +
      ekstrapolering → 8.2 · 13 Inspera-avrunding → 3.4/10.1 ·
      14 ordningsvariable → 4.1.
- [ ] **Alle 15 sjangre A–O dekket** i oppgaver OG av øvingseksamenene samlet
      (kart i §4).
- [ ] **Quiz-sum ≥ 540 og flashcard-sum ≥ 505** per kvotetabellen
      (kontrollsummér mot §3-tabellen; flashcards kun fra toppnivå
      `definition`-blokker med `title`).
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + 3 øvingseksamener som sammen
      dekker A–O.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster
      (behold ingeniør-/naturprofilen: levetider, målinger, prosesser, miljø),
      ingen formuleringer fra reelle sett eller løsningsforslag (skjelettets
      mønstereksempler er selv omskrivninger og skal varieres videre, ikke
      kopieres ordrett inn som oppgaver).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + innhold), jf. `getChapterMeta`-lærdommen.
