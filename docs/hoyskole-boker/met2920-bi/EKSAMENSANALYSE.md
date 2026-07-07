# Eksamensanalyse: MET 2920 Statistikk for økonomer — Handelshøyskolen BI

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **BIs eget eksamensarkiv for MET 2920 (emnekode «MET 29201» på oppgavearket)**: **fem komplette skoleeksamenssett** — H2023, V2024, H2024, V2025 og H2025 — samt det utdelte **formelheftet** (lest i sin helhet). **Ingen offisiell sensorveiledning eller fasit forelå i arkivet.** Alle fem sett er lest grundig; sensorkravene under er derfor **utledet fra oppgavetekstenes egne instruksjoner** (som er uvanlig eksplisitte i dette faget) og fra fagets standardmetodikk, ikke fra en verifisert rettemal. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekst. Analysen er kvantitativ der arkivet tillater det, men **evidensstyrken er moderat**: fem sett er nok til å fastslå en meget stabil struktur, men for lav frekvens (kjikvadrat, sannsynlighetstrekning, R-kode-lesing) må enkeltforekomster ikke overtolkes.
>
> **Rammemerknad:** MET 2920 er *Statistikk for økonomer* — det obligatoriske grunnleggende statistikkfaget i BIs bachelor i økonomi og administrasjon (7,5 ECTS), søsterfag til **MET 2910 Matematikk for økonomer** (analysert separat, samme institusjon og eksamensform). Faget er et **anvendt metodefag**: det leverer den statistiske slutningsverktøykassen (estimering, konfidensintervall, hypotesetesting, regresjon) som metode-, markedsførings- og økonomifagene bygger videre på. Tyngdepunktet er **korrekt metodevalg og fullstendig utregning i en økonomisk/bedriftsøkonomisk innramming** (spørreundersøkelser, boligmarked, bedriftsdata), ikke måleteoretisk sannsynlighetsteori. Dette skiller MET 2920 fra UiOs ECON2130/STK1100 på tre måter: MET 2920 er **mer oppskriftsdrevet og mindre bevistungt** (ingen deriverte estimatorer, ingen forventningsrette-bevis, ingen momentgenererende funksjoner), **fletter R-utskrift-lesing** systematisk inn i regresjonen (R undervises, men brukes ikke på eksamen — utskriften deles ut og skal *tolkes*), og har en **gjennomført anvendt datasett-dramaturgi** der hele settet er bygd rundt ett case.

---

## 1. Eksamensform og utvikling

### BI-spesifikke særtrekk (styrer bokstrukturen)

MET 2920 skiller seg fra UiO/NTNU-statistikkfagene på punkter som er avgjørende for hvordan boken bør bygges:

- **Kalkulator er eneste hjelpemiddel — med innebygde fordelinger.** Tillatt er **BI-godkjent/BI-definert eksamenskalkulator** (fra V2025 også «enkel kalkulator» i tillegg). Avgjørende presisering som står på **hvert eneste sett**: «Det er tillatt å bruke kalkulatorens funksjonalitet for sannsynlighetsfordelinger (Z-fordeling og t-fordeling). Du trenger ikke gjengi tastetrykkene.» **Kandidaten trenger altså ikke Z-/t-tabeller** — kritiske verdier, kumulative sannsynligheter og inverse verdier hentes fra kalkulatoren. Boken må derfor lære **hvilken fordeling, hvilke frihetsgrader og hvilket kritisk/observert tall** som skal brukes, ikke tabelloppslag.
- **«Alle utregninger skal vises».** Denne setningen står øverst på **hvert sett** og er fagets sterkeste enkeltsignal: «Det skal være tydelig for sensorene hva du har regnet ut og hvordan … du må vise tilstrekkelige mellomregninger.» Poeng gis for **framgangsmåte** (formel → innsatte tall → referansefordeling → svar), ikke for bart svar. Boken må derfor modellere fullstendige, stegvise løsninger.
- **«Null poeng for bare å forkaste/ikke forkaste».** Ved *hver* hypotesetest kommer en egen deloppgave «Konkluder …» med den eksplisitte advarselen: «det gir nå NULL poeng bare å si at du forkaster eller ikke forkaster nullhypotesen». **Tolkning i kontekst** (hva betyr resultatet for prisen/andelen/boligverdien?) er obligatorisk og poenggivende. Dette er fagets nest sterkeste signal og må gjennomsyre alle løsningsforslag i boken.
- **Poeng, ikke vekttall.** Oppgavene er poengsatt (5 oppgaver à 5–12 poeng, sum ca. **34–43 poeng**). Poengbudsjettet signaliserer tyngde: regresjon (O5/siste, 9 poeng) og den store normal/sannsynlighets- eller hånd-regningsoppgaven er tyngst.
- **Formelhefte utdeles (fast, alle sett).** Heftet er blitt mer omfattende (H2023: ~1 side; V2025/H2025: **5 sider**). Det inneholder deskriptive formler (median, kvartiler, variasjonsbredde, modus, gjennomsnitt, varians, standardavvik, kovarians, korrelasjon), **kombinatorikk**, **betinget sannsynlighet, loven om total sannsynlighet og Bayes**, konfidensintervall- og testformler (μ, differanse, andel), regresjonsformlene (minste kvadrat, SE, KI, test) og **residual standard error**. Konsekvens for boken: kandidaten trenger ikke pugge formlene, men må **velge riktig formel og bruke den raskt og korrekt** — nøyaktig samme prinsipp som i MET 2910.
- **R undervises, men er ikke på eksamen.** R brukes i regneøvelser. På eksamen møter kandidaten **ferdig R-utskrift** (`lm(...)`-tabell: `Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`, `Residual standard error`, `Multiple R-squared`, `F-statistic`) som skal *leses og tolkes*, og av og til (V2025 O1) et stykke **R-kode som skal forklares** konseptuelt. Boken må ha en egen modul for R-utskrift-lesing.
- **Karakterskala A–F.** Én sluttprøve; ingen midtveiseksamen.

### Emnekode og termin

| Element | Verdi |
|---|---|
| Emnekode (studieplan) | **MET 2920** |
| Emnekode (oppgaveark) | **MET 29201** |
| Studiepoeng | 7,5 ECTS |
| Eksamensform | Skriftlig skoleeksamen, **3 timer**, kl. 09 |
| Oppgaver | **5 oppgaver** (H2025: 4, men O4 er dobbelt så tung), a)–i)-deler |
| Sum poeng | ~34–43 |
| Hjelpemidler | BI-definert eksamenskalkulator (+ enkel kalkulator fra V2025); formelhefte |
| Skala | A–F |

### Format-utvikling og dramaturgi

**Hele settet er bygd rundt ett gjennomgående datasett/case**, som gir eksamenene deres identitet:

| Sett | Case | n | Enhet |
|---|---|---|---|
| **H2023** | «IQ» — fireåringer i en amerikansk storby | 434 | barn/mødre |
| **V2024** | «BI2024» — spørreundersøkelse blant BI-studenter + Casino Well1 | 93 | studenter |
| **H2024** | «FrognerA» — solgte selveierleiligheter på Frogner | 191 | leiligheter |
| **V2025** | «FrognerA» (samme boligcase) + R-kode | 191 | leiligheter |
| **H2025** | «Well1» — ansatte i en bedrift + opplæringsprogram | 1000 | ansatte |

Den **stabile oppgaverekkefølgen** er fagets tydeligste struktursignal (5 av 5 følger varianter av denne malen):

1. **Oppgave 1 — sannsynlighetsblokk ELLER innledende konsept.** Enten (a) **diskret simultanfordeling** (H2023), (b) **sannsynlighet/kombinatorikk-trekning** (V2024: hypergeometrisk vs. binomisk casino), (c) **flervalg om SGT/t-fordeling + normalfordelingsberegning** (H2024), (d) **R-kode-lesing** (V2025), eller (e) **normalfordeling + binomisk + normaltilnærming** (H2025).
2. **Oppgave 2 — simultanfordeling eller normal/andel-blokk.** Ofte den diskrete **simultanfordelingen** (E, Var, Cov, Cor, uavhengighet) — V2024, V2025 — eller KI/test for μ (H2024) eller andel (H2025).
3. **Oppgave 3 — konfidensintervall + hypotesetest for gjennomsnitt** (én utvalg + to grupper). Nesten fast plass. KI for μ med tolkning + drøfting av bredde, deretter to-utvalgs t-test.
4. **Oppgave 4 — estimering, KI og test for andeler** (én andel + ofte to andeler / differanse).
5. **Oppgave 5 (eller siste) — enkel lineær regresjon og korrelasjon**, nesten alltid tyngst (9 poeng), basert på R-utskrift; H2025 O4 (12 poeng) er en **ren hånd-regningsvariant** fra rådata.

**Nye/varierende innslag** (ikke i hvert sett, men viktige for bredden):
- **Kjikvadrattest for uavhengighet** (H2023 O3) — den eneste kjikvadratforekomsten, men fullstendig (kriterier → hypoteser → testobservator → test → konklusjon).
- **R-kode-forståelse som egen oppgave** (V2025 O1: `sd`, `setwd`/`wd`, hvorfor en linje ignoreres, fortegn på `cor`, `length`, hvorfor en linje gir feilmelding).
- **Flervalgsoppgaver (A/B/C/D)** om begreper: SGT-formulering, andeler & SGT, t-fordelingsdefinisjon (H2024 O1), type I-/type II-feil og deres samspill (H2025 O3f–h).
- **Kausalitet/konfundering-drøfting** (V2025 O3g: balkong «forårsaker» ikke høyere pris — leiligheter med balkong er også større; H2023 O6i: mors alder og barnets IQ). Krever verbal, statistisk-kritisk refleksjon.
- **Dualitet KI↔test** eksplisitt (H2024 O4e).
- **Hånd-regning av deskriptiv statistikk + regresjon fra rådata** (H2025 O4, 12 poeng): utvalgsgjennomsnitt, standardavvik, kovarians, korrelasjon, minste kvadrats β̂₀/β̂₁, test, KI, og **residual standard error for hånd** verifisert mot R.

### Gjennomgående sensorprinsipper (fra oppgavetekstene — ingen egen veiledning i arkivet)

1. **Vis all utregning** — formel, innsatte tall, referansefordeling (Z/t) med frihetsgrader, tallsvar med enhet. Bare svar gir lite.
2. **Konkluder i kontekst** — «forkaster/forkaster ikke» alene gir **null poeng**; tolkningen for det konkrete spørsmålet bærer poengene.
3. **Riktig fordeling og df** — t (ikke z) for gjennomsnitt med ukjent σ; z for andeler; df = n−1 (ett utvalg μ), df = n−2 (regresjon), (r−1)(k−1) (kjikvadrat).
4. **Ensidig vs. tosidig** styres av formuleringen («større enn», «mindre enn», «forskjell»); den tosidige R-P-verdien **halveres** ved ensidig test.
5. **Løsningsforslag i boken bør speile den fullstendige, stegvise stilen** oppgavene krever, med eksplisitt tolkningssetning etter hver test.

---

## 2. Temafrekvens

Tabellen teller **komplette sett med lesbart innhold** (n = 5: H2023, V2024, H2024, V2025, H2025). **Merk lav n:** gjenganger-score på 5/5 er robust, men enkeltforekomster (1/5) er indikatorer, ikke sikre mønstre.

| Tema | Antall sett | **Gjenganger-score** | Kommentar |
|---|---|---|---|
| **Enkel lineær regresjon + korrelasjon** | 5 | **5/5 = 100 %** | Alltid siste/tyngste oppgave (9–12 p). R-utskrift-lesing (4 sett) + hånd fra rådata (H2025) |
| **Lesing/tolkning av R-utskrift** | 5 | **5/5 = 100 %** | `lm`-tabell: Estimate, Std. Error, t value, Pr(>\|t\|), Residual std error, R² |
| **Konfidensintervall for μ (og differanse)** | 5 | **5/5 = 100 %** | 95 %/99 %; t-fordeling, s ukjent; alltid med tolkning + bredde-drøfting |
| **Hypotesetest for gjennomsnitt (én + to grupper)** | 5 | **5/5 = 100 %** | To-utvalgs t-test, separate varianser; ensidig og tosidig; kritisk verdi + P-verdi |
| **Estimering, KI og test for andel (én)** | 5 | **5/5 = 100 %** | p̂ = X/n; Wald-KI; z-test med p₀ i standardfeilen |
| **Diskret simultanfordeling** (E, Var, Cov, Cor, uavhengighet) | 4 | **4/5 = 80 %** | H2023, V2024, V2025, + H2025 O4 (fra rådata). Marginaler, E(X+Y), E(XY), uavhengighet |
| **Normalfordeling** (P(X>a), invers persentil) | 3 | **3/5 = 60 %** | H2023, H2024, H2025. Standardisering Z, kalkulatorens Z-fordeling, invers |
| **Sentralgrenseteoremet** (eksplisitt) | 3 | **3/5 = 60 %** | Gjennomsnitt av n er N(μ, σ/√n); H2024 & H2025 flervalg + beregning |
| **KI og test for to andeler (differanse p₁−p₂)** | 3 | **3/5 = 60 %** | V2024, H2024, V2025; pooled til test, upooled til KI |
| **Binomisk fordeling + normaltilnærming** | 2 | **2/5 = 40 %** | H2023 O2, H2025 O1: P(=k), P(≥k), normaltilnærming for stor n |
| **Deskriptiv statistikk for hånd** (x̄, s, kvartiler) | 2 | **2/5 = 40 %** | Oftest *oppgitt*; regnes for hånd i H2025 O4 (og implisitt V2024/H2023-oppgave) |
| **Sannsynlighet/kombinatorikk** (hypergeometrisk/binomisk trekning) | 2 | **2/5 = 40 %** | V2024 O1 (casino: med/uten tilbakelegging), H2023 O2 (binomisk) |
| **Flervalgsoppgaver (A/B/C/D)** om begreper | 2 | **2/5 = 40 %** | H2024 O1 (SGT, t-fordeling), H2025 O3 (type I/II-feil) |
| **Kausalitet/konfundering-drøfting** | 2 | **2/5 = 40 %** | V2025 O3g, H2023 O6i — verbal statistisk kritikk |
| **t-fordeling som begrep** (df, P(T>c)) | 2 | **2/5 = 40 %** | H2024 O1c/O1f; ellers implisitt i alle KI/tester |
| **Type I-/type II-feil** (begrep) | 1 | **1/5 = 20 %** | H2025 O3f–h (flervalg); implisitt relevant i all testing |
| **Kjikvadrattest for uavhengighet** | 1 | **1/5 = 20 %** | H2023 O3 — eneste forekomst, men fullstendig kontingenstabellanalyse |
| **R-kode-forståelse som egen oppgave** | 1 | **1/5 = 20 %** | V2025 O1 (`sd`, `setwd`, `cor`, `length`, feilmeldinger) |
| **Dualitet KI↔test** (eksplisitt) | 1 | **1/5 = 20 %** | H2024 O4e; begrepet er konseptuelt relevant i alle sett |

### Fravær — like viktig som forekomst

Temaer som ofte forbindes med «statistikk for økonomer», men som **ikke opptrer** i de fem settene:

- **ANOVA / variansanalyse** — 0 forekomster, til tross for at fagbeskrivelsen nevner det. Boken bør dekke det for pensumbredde, men lavt prioritert for eksamen.
- **Poisson-fordeling** — 0. (Ikke i settene; formelheftet fokuserer på binomisk/normal/t.)
- **Multippel regresjon** (flere forklaringsvariabler) — 0. All regresjon er **enkel** (én X).
- **Bevis for forventningsretthet/effisiens, momentgenererende funksjoner, deriverte sannsynlighetstetthet** — 0. Faget er oppskriftsdrevet, ikke bevistungt (i motsetning til STK1100/ECON2130).
- **Ikke-parametriske tester, bootstrap, Bayesiansk inferens** — 0.
- **Betinget sannsynlighet/Bayes som egen regneoppgave** — 0 i de fem settene, **selv om formelheftet har formlene**. Kan komme; dekk kort.

### Viktigste funn

1. **Fem temaer bærer hvert eneste sett (100 %):** regresjon/korrelasjon (m/R-utskrift), KI for μ, hypotesetest for μ (én + to grupper), KI + test for andel, og lesing av R-utskrift. En kandidat som mekaniserer disse fem, sikrer et bredt poenggulv på tvers av alle sett.
2. **Regresjon er signaturoppgaven** (100 %, alltid tyngst). To varianter må beherskes: (a) **lese ferdig R-utskrift** (4 sett) og (b) **regne minste kvadrat + SE + residual standard error for hånd** fra rådata (H2025 O4). Boken må lære begge.
3. **Slutningskjernen (KI + test) er repeterende og formelstyrt.** Samme mal går igjen for μ og for p, ensidig og tosidig, med tolkning. Dette er bokens hovedmodul.
4. **Den diskrete simultanfordelingen** (E, Var, Cov, Cor, uavhengighet) er nest mest stabil (80 %) og bør ha en egen grundig modul — den er også fundamentet for kovarians/korrelasjon i regresjonen.
5. **Konseptuelle innslag differensierer karakteren:** SGT-forståelse, type I/II-feil, dualitet KI↔test, og fremfor alt **kausalitet vs. korrelasjon/konfundering** (2/5, verbal). Disse må boken lære eksplisitt, ikke bare regneteknikken.
6. **Lav-frekvente, men fullstendige temaer** (kjikvadrat, sannsynlighetstrekning, R-kode-lesing) må dekkes for bredde — de opptrer 1–2/5, og med bare fem sett kan enhver av dem komme igjen. Ikke overtolk fraværet.

---

## 3. Oppgavesjangre — katalog

### A. Regresjon og korrelasjon (100 % — signaturoppgaven)
Modellen `Y = β₀ + β₁X + ε`. To spor:
- **Spor 1 — les R-utskrift** (H2023, V2024, H2024, V2025): hent `β̂₀`, `β̂₁` fra `Estimate`; `SE` fra `Std. Error`; `t value` og `Pr(>|t|)`; `Residual standard error`; `R²` fra «Multiple R-squared». Deloppgaver: **tolk** stigningstall og skjæring i kontekst; lag **KI for β₁** (`β̂₁ ± t_{α/2,n−2}·SE`); **test** `H₀: β₁ = 0` (ofte ensidig — husk å halvere den tosidige R-P-verdien); finn **korrelasjon** `r = ±√{R²}` med fortegn lik β̂₁; regn **residual** `e = y − ŷ` for en gitt observasjon; finn **SSE/s²** = `Σe²/(n−2) = (Residual standard error)²`.
- **Spor 2 — regn for hånd fra rådata** (H2025 O4, 12 p): minste kvadrat `β̂₁ = S_{xy}/S_x² = r·s_y/s_x`, `β̂₀ = ȳ − β̂₁x̄`; utvalgskovarians og -korrelasjon; test og KI for β₁ med df = n−2; **residual standard error for hånd** verifisert mot R.
- **Konseptuell vri:** «hvordan ville spredningsplottet sett ut om Residual standard error var 0?» (V2025 O5d — alle punkter på linja).

### B. Diskret simultanfordeling (80 %)
Gitt en tabell over `P(X=x, Y=y)`: finn `P(hendelse)` (f.eks. sum = 0, tap/overskudd), **marginalfordelinger** (og navngi fordelingstype), `E(X)`, `E(Y)`, `Var`, `Cov(X,Y) = E(XY) − E(X)E(Y)`, `Cor(X,Y)`, `E(X+Y)`, `E(XY)`, og **avgjør uavhengighet** (sjekk `P(X=x,Y=y) = P(X=x)·P(Y=y)` for alle celler). Anvendt innramming: casino-nettogevinst (V2024), pris×solgt volum (V2025), IQ-kategorier (H2023).

### C. Konfidensintervall + hypotesetest for gjennomsnitt (100 %)
- **KI for μ:** `x̄ ± t_{α/2,n−1}·s/√n` (t-fordeling, σ ukjent). Alltid med **tolkning i kontekst** og drøfting av hvordan bredden endres med **konfidensnivå** (lavere nivå → smalere) og **n** (større n → smalere; eneste vei når nivået er låst).
- **To grupper:** to-utvalgs t-test med **separate varianser** `t = (x̄₁−x̄₂)/√(s₁²/n₁ + s₂²/n₂)`; KI for `μ₁−μ₂`. Ensidig («større enn») og tosidig («forskjell»). Konklusjon via **kritisk verdi** eller **P-verdi** (begge kreves i ulike sett), alltid med tolkningssetning.

### D. Estimering, KI og test for andeler (100 %)
- Punktestimat `p̂ = X/n`; **Wald-KI** `p̂ ± z_{α/2}·√(p̂(1−p̂)/n)` med tolkning.
- **Test for én andel:** `z = (p̂ − p₀)/√(p₀(1−p₀)/n)` — bruk **hypoteseverdien p₀** i standardfeilen. Ensidig («flertall/mer enn 50 %», «mindre enn 65 %») med P-verdi og «laveste signifikansnivå» (= P-verdien, H2025 O2g).
- **To andeler:** `p̂₁, p̂₂`; KI for `p₁−p₂` (upooled SE); test `H₀: p₁=p₂` med **pooled** andel; **dualitet** til KI (H2024 O4e).

### E. Normalfordeling, binomisk og SGT (60 % / 40 %)
- **Normalfordeling:** standardiser `Z = (X−μ)/σ`, les av kalkulatorens Z-fordeling; `P(X>a)`, `P(X<b)`, `P(a<X<b)`; **invers** («hvor høyt for topp 1 %/laveste 10 %» → `x = μ + zσ`).
- **SGT:** utvalgsgjennomsnittet `X̄ ~ N(μ, σ/√n)` for stor n uansett X-fordeling; brukes til `P(X̄ < c)`. Flervalg om korrekt formulering (H2024 O1).
- **Binomisk:** `P(X=k) = C(n,k)p^k(1−p)^{n−k}`; `P(≥k) = 1 − P(≤k−1)`; **normaltilnærming** `X ≈ N(np, np(1−p))` for stor n (H2023: ≥250 av 350; H2025: ≥100 av 150).

### F. Sannsynlighet og kombinatorikk (40 %)
Trekning **uten** tilbakelegging → hypergeometrisk (`C(K,r)C(N−K,n−r)/C(N,n)`); **med** tilbakelegging → binomisk (V2024 casino Hyper vs. Binom). Forventet nettogevinst `E(X) = Σ x·P(x)` for å avgjøre hvilket spill som «lønner seg».

### G. Kjikvadrattest for uavhengighet (20 %)
Kontingenstabell med observerte og forventede verdier: (i) sjekk **kriterier** (forventet ≥ 5 i cellene); (ii) `H₀`: variablene uavhengige; (iii) `χ² = Σ (O−E)²/E`; (iv) df = (r−1)(k−1), sammenlign med kritisk χ² på gitt nivå; (v) konkluder i kontekst (H2023 O3).

### H. R-kode- og begrepsoppgaver (40 %)
- **R-kode-lesing** (V2025 O1): hva funksjoner gjør (`sd`, `setwd`, `cor`, `length`), fortegn på korrelasjon, hvorfor en linje ignoreres/gir feilmelding. Konseptuell verktøyforståelse, ikke utregning.
- **Flervalg (A/B/C/D)** om SGT, t-fordeling, type I-/type II-feil (H2024, H2025).
- **Kausalitetsdrøfting:** korrelasjon ⇏ årsak; konfundering (V2025 balkong↔størrelse, H2023 mors alder↔IQ).

---

## 4. Sensorens krav

> Utledet fra oppgavetekstenes egne, uvanlig eksplisitte instruksjoner — **ingen offisiell sensorveiledning forelå**.

### Metaregler (på hvert sett)
1. **Vis all utregning** — formel, innsatte tall, referansefordeling (Z/t) med df, tallsvar med enhet. «Tilstrekkelige mellomregninger.» Bare svar gir lite, selv om det er riktig.
2. **Konkluder i kontekst** — «forkaster/forkaster ikke» alene = **null poeng**. Skriv hva resultatet betyr for pris/andel/boligverdi.
3. **Riktig fordeling og df** — t for μ (σ ukjent, df = n−1); z for andel; df = n−2 (regresjon); (r−1)(k−1) (kjikvadrat).
4. **Ensidig vs. tosidig** etter formuleringen; **halver** tosidig R-P-verdi ved ensidig test.

### Fagspesifikke, strenge punkter
- **Bruk p₀ (ikke p̂) i standardfeilen** ved test av én andel — testen betinger på at H₀ er sann.
- **Pooled til test, upooled til KI** for to andeler; vær konsekvent og vis hvilken.
- **Riktig KI-tolkning:** «vi er 95 % konfidente på at μ ligger mellom …» — ikke «95 % sannsynlighet for at μ ligger her» (μ er ikke tilfeldig).
- **Fortegn på r = fortegn på β̂₁** (`r = ±√{R²}`); en vanlig felle er positiv r med negativt stigningstall.
- **Uavhengighet vs. Cov = 0:** `Cov ≠ 0 ⇒ avhengige`, men `Cov = 0 ⇏ uavhengige` — bevis uavhengighet kun via alle celler i simultanfordelingen.
- **`E(X+Y) = E(X)+E(Y) alltid`**, mens `Var(X+Y) = Var(X)+Var(Y)` kun ved uavhengighet/null kovarians.
- **Normaltilnærming til binomisk:** angi tilnærmingen og at n er stor nok; nevn gjerne kontinuitetskorreksjon (±0,5).
- **Kjikvadrat-kriterier** (forventet ≥ 5) skal vurderes før testen kjøres.

### Hva som trolig skiller karakternivåene
- **Bestått-sjiktet** henter poeng på den formelstyrte slutningskjernen: KI for μ og p, enkel test, avlesning av β̂₀/β̂₁ fra R-utskrift, p̂ = X/n.
- **Midtsjiktet** fullfører to-utvalgstester (separate varianser), to-andels-KI/-test (pooled/upooled), full regresjonstolkning (KI for β₁, r, residual, SSE), og normal-/SGT-beregninger.
- **Toppsjiktet** behersker de **konseptuelle** delene: korrekt KI-tolkning og bredde-drøfting, type I/II-feil, dualitet KI↔test, **kausalitet vs. konfundering** (verbal), hånd-regning av regresjon + residual standard error, kjikvadrat, og R-kode-forståelse.

---

## 5. Typiske feil (utledet fra oppgavekravene og fagets standardfeller)

1. **Oppgi svar uten utregning** — straffet eksplisitt; gir lite selv med riktig tall.
2. **Bare «forkaster/forkaster ikke»** uten kontekst-tolkning — **null poeng** (uttrykkelig).
3. **Bruke z i stedet for t** for gjennomsnitt med ukjent σ (eller feil df).
4. **Bruke p̂ i stedet for p₀** i testobservatoren for én andel.
5. **Blande pooled og upooled** standardfeil mellom test og KI for to andeler.
6. **Feil KI-tolkning** — sannsynlighetsutsagn om μ i stedet for konfidensutsagn.
7. **Feil fortegn på r** — oppgi r positiv når stigningstallet er negativt.
8. **«Bevise» uavhengighet fra Cov = 0** — bare avhengighet kan sluttes fra Cov ≠ 0.
9. **Glemme å halvere** den tosidige R-P-verdien ved ensidig test.
10. **Feil df i regresjon** (bruke n−1 i stedet for n−2) eller feil avlesning fra R-utskriften.
11. **Forveksle korrelasjon (dimensjonsløs, −1…1) med kovarians.**
12. **Slutte fra korrelasjon til årsak** uten å vurdere konfundering/tredjevariabel.
13. **Glemme kontinuitetskorreksjon/tilnærmingsvilkår** ved normaltilnærming til binomisk.
14. **Hoppe over kjikvadrat-kriteriene** (forventet ≥ 5) før testen.

---

## 6. Symbol- og metodeapparat

### Må beherskes aktivt (regne raskt og korrekt)

**Deskriptiv statistikk (formelheftet):** gjennomsnitt `x̄ = (1/n)Σxᵢ`; varians `s² = Σ(xᵢ−x̄)²/(n−1)`; standardavvik `s`; kvartiler `Q₁, Q₂, Q₃`; variasjonsbredde, kvartilbredde; modus; utvalgskovarians `S_{xy} = Σ(xᵢ−x̄)(yᵢ−ȳ)/(n−1)`; korrelasjon `r = S_{xy}/(s_x s_y)`.

**Sannsynlighet:** kombinatorikk `C(n,k)`; betinget sannsynlighet, loven om total sannsynlighet, Bayes (formelheftet); hypergeometrisk vs. binomisk trekning.

**Diskrete fordelinger:** `E(X) = Σx·P(x)`; `Var(X) = E(X²) − E(X)²`; `Cov(X,Y) = E(XY) − E(X)E(Y)`; `Cor(X,Y) = Cov/(σ_X σ_Y)`; `E(X+Y) = E(X)+E(Y)`; uavhengighet via alle celler; **binomisk** `P(X=k) = C(n,k)p^k(1−p)^{n−k}`.

**Kontinuerlige fordelinger:** **normal** standardisering `Z = (X−μ)/σ`, kalkulatorens Z-fordeling + invers; **t-fordeling** med df; **normaltilnærming til binomisk** `N(np, √(np(1−p)))`.

**Utvalgsfordeling / SGT:** `X̄ ~ N(μ, σ/√n)`; `T = (X̄−μ)/(s/√n) ~ t_{n−1}`.

**Estimering & konfidensintervall:**
- μ: `x̄ ± t_{α/2,n−1}·s/√n`.
- μ₁−μ₂: `(x̄₁−x̄₂) ± t·√(s₁²/n₁ + s₂²/n₂)` (separate varianser).
- p: `p̂ ± z_{α/2}·√(p̂(1−p̂)/n)`.
- p₁−p₂: `(p̂₁−p̂₂) ± z·√(p̂₁(1−p̂₁)/n₁ + p̂₂(1−p̂₂)/n₂)` (upooled).

**Hypotesetesting:**
- μ: `t = (x̄−μ₀)/(s/√n)`, df = n−1.
- to μ: `t = (x̄₁−x̄₂)/√(s₁²/n₁+s₂²/n₂)`.
- én andel: `z = (p̂−p₀)/√(p₀(1−p₀)/n)`.
- to andeler: pooled `p̂ = (X₁+X₂)/(n₁+n₂)`, `z = (p̂₁−p̂₂)/√(p̂(1−p̂)(1/n₁+1/n₂))`.
- kjikvadrat: `χ² = Σ(O−E)²/E`, df = (r−1)(k−1).
- Konklusjon via kritisk verdi eller **P-verdi**; type I-feil = forkaste sann H₀, type II = beholde gal H₀.

**Enkel lineær regresjon:**
- `β̂₁ = S_{xy}/s_x² = r·s_y/s_x`, `β̂₀ = ȳ − β̂₁x̄`.
- KI/test for β₁: `t = β̂₁/SE(β̂₁)`, df = n−2; `β̂₁ ± t_{α/2,n−2}·SE`.
- `R² = r²`; `r = ±√{R²}` (fortegn = β̂₁); residual `e = y − ŷ`; `SSE = Σe²`; residual standard error `σ̂_e = √(SSE/(n−2))`.
- **R-utskrift:** `Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`, `Residual standard error`, `Multiple R-squared`, `F-statistic`.

### Notasjonskonvensjoner boken bør speile
- Norsk lærebok-/BI-notasjon: `x̄`, `s`, `p̂`, `β̂₀`, `β̂₁`, `H₀`/`H_A`, `α`, `Z`/`T`.
- Fullstendige, stegvise løsningsforslag: formel → innsatte tall → fordeling m/df → tallsvar m/enhet → **tolkningssetning i kontekst**.
- Gjennomført anvendt innramming (spørreundersøkelse, boligmarked, bedriftsdata) som speiler eksamenscasene.

---

## 7. Kobling til økonomifagene (verktøyet i bruk)

MET 2920 leverer den statistiske slutningskassen BIs videre metode-, markedsførings- og finansfag henter fra. Boken bør vise koblingen:
- **Konfidensintervall og hypotesetesting** → generalisering fra utvalg til populasjon i markedsanalyse, revisjon, økonometri.
- **Regresjon** → grunnlaget for **økonometri** (etterspørselsestimering, prisfølsomhet, prediksjon), byggesteinen for multippel regresjon senere.
- **Korrelasjon/kovarians** → porteføljeteori og risiko i finans (samvariasjon mellom aktiva).
- **Sannsynlighetsfordelinger** → risikomodellering, beslutning under usikkerhet, forventet verdi (jf. casino-eksemplet: hvilket spill «lønner seg»).
- **Kausalitet vs. konfundering** → kritisk datalesing i beslutninger (balkong «forårsaker» ikke pris; opplæringsprogram-effekt vs. seleksjon).

Den gjennomførte anvendte innrammingen (BI-studenter, boligmarked, bedriftsdata) understreker at faget skal **anvendes** på reelle økonomiske spørsmål, ikke pugges abstrakt.

---

## 8. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer hvert sett, ~100 % frekvens)
1. **Enkel lineær regresjon:** lese R-utskrift (β̂, SE, t, P, R², residual std error) **og** regne minste kvadrat + SE + residual std error for hånd; tolkning, KI og test for β₁, r med riktig fortegn, residual.
2. **Konfidensintervall for μ** (t-fordeling) med tolkning og bredde-drøfting (nivå, n).
3. **Hypotesetest for gjennomsnitt** — én utvalg og to grupper (separate varianser), ensidig og tosidig, kritisk verdi + P-verdi, tolkning i kontekst.
4. **Estimering, KI og test for andel** — Wald-KI, z-test med p₀, ensidig/tosidig, P-verdi, «laveste signifikansnivå».

### Nivå 2 — må kunne (bredden i poengfangsten)
5. **Diskret simultanfordeling:** marginaler, E, Var, Cov, Cor, E(X+Y), E(XY), uavhengighet.
6. **KI og test for to andeler** (pooled/upooled, dualitet KI↔test).
7. **Normalfordeling** (P, invers) + **SGT** (X̄ ~ N(μ, σ/√n)) + **binomisk med normaltilnærming**.
8. **Konseptuell forståelse:** korrekt KI-tolkning, type I/II-feil, **kausalitet vs. konfundering** (verbal).

### Nivå 3 — bør dekkes (lav frekvens / karakterdifferensiering / pensumbredde)
9. **Sannsynlighet/kombinatorikk:** hypergeometrisk vs. binomisk trekning, forventet gevinst.
10. **Kjikvadrattest for uavhengighet** (kriterier → χ² → df → konklusjon).
11. **R-kode-forståelse** (`sd`, `setwd`, `cor`, `length`, feilmeldinger) + R-utskrift generelt.
12. **Betinget sannsynlighet/Bayes** (på formelheftet, ikke testet i de fem settene — dekk kort).
13. **ANOVA** (i fagbeskrivelsen, ikke i settene — kort, for bredde).

### Prognose for neste eksamen (basert på den stabile 5-oppgavemalen)
3 timer, ~5 oppgaver, formelhefte, kalkulator med Z-/t-fordeling:
- **Oppgave 1:** sannsynlighetsblokk — enten diskret simultanfordeling, normalfordeling + binomisk/SGT, eller et konsept-/R-innslag (flervalg eller R-kode).
- **Oppgave 2:** simultanfordeling eller normal/andel-blokk.
- **Oppgave 3:** KI + hypotesetest for gjennomsnitt (én + to grupper).
- **Oppgave 4:** estimering, KI og test for andel (én + ofte to andeler).
- **Oppgave 5 (tyngst):** enkel lineær regresjon + korrelasjon (R-utskrift eller hånd fra rådata).

**Usikkerhetsmoment:** Bare fem sett foreligger, og **ingen sensorveiledning**. Strukturen (5-oppgavemalen, slutningskjernen, regresjon sist) er meget stabil og trygg å kalibrere mot. Men *plasseringen* av sannsynlighetstemaene i O1–O2 varierer (simultanfordeling vs. normal/binomisk vs. R-kode vs. flervalg), og lavfrekvente temaer (kjikvadrat, hypergeometrisk trekning, hånd-regnet regresjon, R-kode-lesing) opptrer 1–2/5 — hvilket som helst av dem kan komme igjen. Boken bør derfor dekke **hele bredden** i pensum, med tyngdepunkt på Nivå 1–2, og eksplisitt trene de konseptuelle/verbale delene (tolkning, kausalitet, type I/II) som skiller toppkarakterene.

### Anbefalt bok-arketype
Samme grunnarketype som **ECON2130/STK1100-statistikk: «anvendt statistisk slutning»** — teori → metode/oppskrift → økonomisk eksempel → oppgave, med fullstendige, stegvise løsningsforslag. **Men med tre BI-tilpasninger** som skiller den fra UiO-fagene:
1. **Oppskriftsdrevet, ikke bevistung:** vekt på korrekt metodevalg, formelbruk fra heftet og fullstendig utregning — ikke estimatorbevis, momentgenererende funksjoner eller måleteori. Ligger nærmere en robust «kokebok med forståelse» enn en teoretisk statistikkbok.
2. **R-utskrift-modul:** en egen, gjennomgående tråd der kandidaten lærer å lese `lm()`-tabeller og enkel R-kode — R er verktøyet i undervisningen, men eksamen tester *tolkning*, ikke koding.
3. **Case-basert innramming og obligatorisk tolkning:** hele kapitler kan bygges rundt ett datasett (spørreundersøkelse, boligmarked, bedriftsdata) slik eksamenene er, og **hvert** løsningsforslag må avsluttes med en kontekst-tolkning (fagets «null poeng for bare å forkaste»-regel). Egne, tydelige avsnitt om **korrelasjon vs. kausalitet/konfundering** og **korrekt KI-tolkning**, som er der toppkarakterene avgjøres.

Boken bør speile MET 2910-bokas «vis all utregning»-disiplin og kompakte, stegvise sensorstil, men bygge modulene rundt statistisk slutning i stedet for kalkulus.

---

## 9. Kildeliste

Alle filer ligger under `~/Desktop/Eksamner/BI/MET2920/`.

**Eksamenssett gjennomgått grundig (5 — alle uten fasit/sensorveiledning):**
- `MET29201qp.pdf` — **H2023**, case «IQ» (n=434 fireåringer, USA). O1 simultanfordeling, O2 normal+binomisk+SGT, **O3 kjikvadrattest**, O4 KI/test μ, O5 andel, O6 regresjon.
- `MET 29201_202410_04.06.2024.pdf` — **V2024**, case «BI2024»/Casino Well1 (n=93 studenter). O1 sannsynlighet/kombinatorikk (hypergeometrisk vs. binomisk), O2 simultanfordeling, O3 KI/test μ (to grupper), O4 andel + to andeler, O5 regresjon.
- `MET2920_2024-11-21_kl_09_EP.pdf` — **H2024**, case «FrognerA» (n=191 leiligheter). O1 flervalg SGT/t-fordeling + normalberegning, O2 KI/test μ, O3 andel (flertall), O4 to andeler + dualitet, O5 regresjon.
- `MET2920_2025-06-03_kl_09_EP.pdf` — **V2025**, case «FrognerA» + R-kode. **O1 R-kode-lesing**, O2 simultanfordeling, O3 KI/test μ + **kausalitet/konfundering**, O4 andel + to andeler, O5 regresjon.
- `MET2920_2025-11-21_kl_09_EP.pdf` — **H2025**, case «Well1» (n=1000 ansatte). O1 normal+binomisk+SGT, O2 andel (ensidig test), O3 to grupper μ + **type I/II-feil (flervalg)**, **O4 (12p) hånd-regnet deskriptiv statistikk + regresjon + residual std error**.

**Formelhefte:** de vedlagte formelsidene (H2023 ~1 side; V2025/H2025 ~5 sider) er lest i sin helhet — deskriptive formler, kombinatorikk, betinget sannsynlighet/total sannsynlighet/Bayes, KI- og testformler (μ, differanse, andel), regresjon og residual standard error.

**Fagbeskrivelse:** omskrevet sammendrag av BIs emnebeskrivelse for MET 2920 (scratchpad: `fagbeskrivelse-met2920-bi.md`); status verifisert **aktiv 2026** (obligatorisk statistikkfag i BIs bachelor i økonomi og administrasjon; skriftlig 3-timers skoleeksamen, kalkulator + formelhefte, A–F).

**Forbilder brukt som mal:** `docs/hoyskole-boker/met2910-bi/EKSAMENSANALYSE.md` (samme institusjon/eksamensform, søsterfag), samt ECON2130/STK1100-analysene (statistikkfaglig struktur).

**Merknader om kildene:**
- **Lite arkiv, moderat evidensstyrke:** kun fem sett og **ingen sensorveiledning/fasit**. Strukturen (5-oppgavemal, slutningskjerne, regresjon sist) er robust dokumentert; sensorkravene er utledet fra oppgavetekstenes eksplisitte instruksjoner («vis all utregning», «null poeng for bare å forkaste»), ikke fra en verifisert rettemal. Frekvenser med 1–2/5 er indikatorer, ikke sikre mønstre.
- **Ett sett delvis avkuttet i tekstuttrekk:** H2024 (O5) og H2025 (O4-avslutning) ble noe trunkert i pdftotext-utdraget, men oppgavetypene er fullt identifisert.
- **Opphavsrett:** alle beskrivelser av oppgaver og løsningsmetoder er parafrasert og omstrukturert med egne ord. Ingen oppgavetekst er gjengitt ordrett. Statistiske standardformler og -teoremer er faglig allemannseie.
