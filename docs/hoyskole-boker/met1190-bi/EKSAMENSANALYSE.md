# Eksamensanalyse: MET 1190 Statistikk — Handelshøyskolen BI

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på **BIs eget eksamensarkiv for MET 1190 (emnekode «MET 11901» på oppgavearket)**: **fem skoleeksamenssett** — ett eldre udatert sett samt V2024 (04.06.2024), H2024 (21.11.2024), V2025 (05.06.2025) og H2025 (21.11.2025) — inkludert det vedlagte **formelheftet + statistiske tabeller** (z- og t-tabell), som er lest i sin helhet. **Ingen offisiell sensorveiledning eller fasit forelå i arkivet.** Alle fem sett er lest grundig; sensorkravene under er derfor **utledet fra oppgavetekstenes egne instruksjoner** (som er eksplisitte i dette faget) og fra fagets standardmetodikk, ikke fra en verifisert rettemal. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekst.
>
> **Evidensstyrke: moderat-lav.** Fem sett er nok til å fastslå en stabil oppgavemal, men de fordeler seg over **to formatgenerasjoner** (se del 1), så én av dem (det eldste settet) følger en eldre struktur. Enkeltforekomster (1–2/5) er indikatorer, ikke sikre mønstre, og må ikke overtolkes. Frekvensene under er kvantitative der arkivet tillater det, men leseren bør huske det lille datagrunnlaget.
>
> **Rammemerknad:** MET 1190 er BIs **grunnleggende statistikkfag** (7,5 ECTS), og undervises fortsatt aktivt (emnebeskrivelsen på bi.no er gjeldende, og arkivet har eksamener t.o.m. H2025). Faget dekker deskriptiv statistikk, sannsynlighetsregning, fordelinger, estimatorteori, klassisk inferens (KI + hypotesetest) og enkel lineær regresjon — med **R som gjennomgående verktøy**. Det er søsterfag til **MET 2920 Statistikk for økonomer** (analysert separat, samme institusjon). De to fagene deler kjerne og eksamensform, men har tydelig ulik profil — se den dedikerte sammenligningen i del 7.

---

## 1. Eksamensform og utvikling

### BI-spesifikke særtrekk (styrer bokstrukturen)

MET 1190 skiller seg fra UiO/NTNU-statistikkfagene — og fra sitt eget søsterfag MET 2920 — på punkter som er avgjørende for hvordan boken bør bygges:

- **R er levende pensum, ikke bare utskrift som skal tolkes.** I dagens format er **Oppgave 1 alltid fem R-flervalg (P1–P5)** som tester at kandidaten kan *lese, skrive og tolke* R-kode: hva `mean()`/`median()`/`sd()`/`length()` gjør, `for`-løkker og indeksering (`x[k]`, `x[n/2]`), skille `dbinom` (nøyaktig `k`) fra `pbinom` (kumulativt), velge riktig `pnorm`/`pt` med `lower.tail`, finne kritisk verdi med `qt`, og gjenkjenne riktig `prop.test`/`t.test`-kall. Kandidaten kjører ikke R på eksamen, men må **beherske R konseptuelt**. Dette er fagets tydeligste enkeltsignatur og krever en egen R-modul i boken (kontrast: i MET 2920 er R *ikke* på eksamen — der leses bare ferdig `lm()`-utskrift).
- **Formelhefte + statistiske tabeller deles ut (fast, alle sett).** Vedlegget er omfattende (~15 sider) og inneholder: deskriptive formler (gjennomsnitt, varians, standardavvik, kovarians, korrelasjon, median), regneregler for sannsynlighet (addisjon, komplement, betinget, **Bayes**, total sannsynlighet, multiplikasjon), forventning/varians/kovarians/korrelasjon-regler, **sentralgrenseteoremet**, definisjoner av **forventningsretthet, konsistens og effisiens**, KI-formler (andel `p`, `μ` med kjent og ukjent `σ`), hypotesetester (`p`, `μ` kjent/ukjent `σ`) med både p-verdi- og kritisk-verdi-tabell, enkel lineær regresjon (MKM-estimatorer, `SE(β̂₁)`, `SE(β̂₂)`, `R² = r²`, koeffisient-t-test med `df = n−2`), og til slutt **kumulativ standardnormaltabell + t-tabell**. Kandidaten skal altså **hente formelen fra heftet, slå opp kritisk verdi i tabellen og sette inn tall** — ikke pugge formler eller utlede dem på nytt (unntatt der oppgaven eksplisitt ber om utledning).
- **Kalkulator tillatt, men tabelloppslag forventes.** Ingen av settene nevner kalkulatoravhengige fordelingsfunksjoner; z- og t-verdier hentes fra de **utdelte tabellene**. Dette skiller MET 1190 fra MET 2920, som baserer seg på kalkulatorens innebygde Z-/t-fordelinger og *ikke* deler ut tabeller.
- **Vekt, ikke poeng.** Hver oppgave har en **vekt** (f.eks. 0,10 / 0,25 / 0,30 / 0,35) som summerer til 1,0; alle deloppgaver teller likt *innenfor* sin oppgave. Vekten signaliserer tyngde: regresjonsoppgaven (alltid sist) er tyngst (0,25–0,35).
- **«Alle svar skal begrunnes med utregninger.»** Står på hvert sett for Oppgave 2 og utover: «Korrekt matematisk fremstilling og bruk av notasjon vil bli vektlagt … Full uttelling gis kun dersom oppgaven besvares korrekt, i sin helhet og er tilstrekkelig begrunnet … velorganisert og tydelig kommunisert.» Poeng gis for **framgangsmåte** (formel → innsatte tall → referansefordeling → svar med tolkning), ikke for bart svar. Oppgave 1 (R-flervalg) krever derimot **ingen begrunnelse** — man skriver bare «P1, a.» med to streker under.
- **Ikke case-basert.** I motsetning til MET 2920 (hvor hele settet er bygd rundt ett datasett) har MET 1190 **uavhengige oppgaver** med hver sin kontekst (IQ/Mensa, E6-fart, søvn, boligpriser, hudkreft, BMI, lykke/inntekt, Trump-oppslutning …). Innrammingen er anvendt, men dramaturgien er ikke gjennomgående.
- **Karakterskala A–F.** Én sluttprøve; ingen midtveiseksamen.

### Emnekode og termin

| Element | Verdi |
|---|---|
| Emnekode (studieplan) | **MET 1190** |
| Emnekode (oppgaveark) | **MET 11901** |
| Studiepoeng | 7,5 ECTS |
| Eksamensform | Skriftlig skoleeksamen, kl. 09 |
| Oppgaver | **4** (2025-format) eller **5** (2024-format og eldre) |
| Struktur | Vekttall som summerer til 1,0; deloppgaver teller likt innen hver oppgave |
| Hjelpemidler | Formelhefte + statistiske tabeller (z + t) utdeles; kalkulator tillatt |
| Skala | A–F |

### Formatutvikling (to generasjoner i arkivet)

Arkivet fanger en tydelig **strukturendring**, som er viktig for kalibreringen:

| Sett | Ant. oppgaver | Oppgave 1 | Kommentar |
|---|---|---|---|
| **Eldre sett** (udatert, «MET 11901») | 5 | **Sannsynlighet/normalfordeling** (ikke R) | Eldste generasjon — ingen R-flervalg; O1 er en ren sannsynlighetsoppgave |
| **V2024** (04.06.2024) | 5 | **R-flervalg P1–P5** | R-flervalg innført |
| **H2024** (21.11.2024) | 5 | **R-flervalg P1–P5** | |
| **V2025** (05.06.2025) | 4 | **R-flervalg P1–P5** | Konsolidert til 4 oppgaver |
| **H2025** (21.11.2025) | 4 | **R-flervalg P1–P5** | |

**Konklusjon:** Dagens format (fra og med V2024, stabilt fra V2025) er **4 oppgaver med R-flervalg som Oppgave 1**. Det eldre settet uten R-flervalg er nyttig for temabredde (særlig sannsynlighetsregning), men dets *struktur* er utdatert og bør ikke vektlegges for prognosen.

### Den stabile oppgavemalen (2025-format)

De to nyeste settene (V2025, H2025) følger en meget lik firedelt mal, og de to 2024-settene er varianter av samme kjerne med én ekstra oppgave:

1. **Oppgave 1 (vekt ~0,10) — R-flervalg P1–P5.** Fem korte spørsmål om R-kode og -utskrift; ingen begrunnelse.
2. **Oppgave 2 (vekt ~0,25–0,30) — teoretisk/algebraisk kjerne.** Enten (a) **lineærkombinasjon av uavhengige variabler** (`E`, `Var`, `Cov`, `Cor`, symbolsk «uten å anta noe om `a,b,c`») eller (b) **estimatorteori** (forventningsretthet, konsistens, utledning via tetthetsfunksjon/SGT). Dette er fagets mest teoretiske og mest krevende oppgave.
3. **Oppgave 3 (vekt ~0,25–0,30) — inferens for én parameter.** Estimering + KI + hypotesetest for enten **gjennomsnittet `μ`** (t- eller z-test) eller **andelen `p`** (z-test).
4. **Oppgave 4 (vekt ~0,35, tyngst) — enkel lineær regresjon + korrelasjon.** Enten fra oppgitte deskriptive mål eller fra en rådatatabell med residualer; estimering, prediksjon, `R²`, `SE(β̂₂)` og koeffisient-t-test.

I 5-oppgaveformatet (2024 og eldre) er de samme byggeklossene fordelt over fem oppgaver, ofte med **sannsynlighet/normalfordeling** som en egen oppgave i tillegg.

---

## 2. Temafrekvens

Tabellen teller **komplette sett med lesbart innhold** (n = 5). **Merk lav n og to formatgenerasjoner:** gjenganger-score på 5/5 er robust, men enkeltforekomster (1/5) er indikatorer, ikke sikre mønstre. «Flervalg» i parentes betyr at temaet i tillegg dukker opp som R-flervalg i Oppgave 1.

| Tema | Antall sett | **Gjenganger-score** | Kommentar |
|---|---|---|---|
| **Enkel lineær regresjon + korrelasjon** | 5 | **5/5 = 100 %** | Alltid siste og tyngste oppgave (vekt 0,25–0,35). Fra deskriptive mål (eldre, V2025) eller rådatatabell m/residualer (V2024, H2024, H2025) |
| **Hypotesetest, én parameter (`μ` eller `p`)** | 5 | **5/5 = 100 %** | Alltid én utvalg, én parameter. Ensidig og tosidig; p-verdi *og* kritisk verdi |
| **Teoretisk/algebraisk oppgave** (lineærkombinasjon `E/Var/Cov/Cor` **eller** estimatorteori) | 5 | **5/5 = 100 %** | Fagets signatur på teorisiden. Symbolske bevis, forventningsretthet, konsistens, SGT-argument, utledning av `SE` |
| **R-flervalg (Oppgave 1, P1–P5)** | 4 | **4/5 = 80 %** | Fast fra V2024. Fraværende bare i det eldste settet (formatutvikling) |
| **Konfidensintervall (`μ` eller `p`)** | 3 | **3/5 = 60 %** | Eldre O3, H2024 O4, V2025 O3. `μ`: t-fordeling, `σ` ukjent. `p`: Wald med `z_{α/2}` |
| **Estimering/inferens for andel `p`** | 3 | **3/5 = 60 %** | Eldre O2, V2025 O3, H2025 O3 (+ flervalg V2024/H2024). `p̂ = X/n`; z-test med `p₀` i standardfeilen; normaltilnærming |
| **Normalfordeling** (standardisering, `P(X>a)`, invers persentil) | 3 | **3/5 = 60 %** | Eldre O1, V2024 O3 (IQ/Mensa), V2025 O2d (+ flervalg P2 i flere sett). `Z=(X−μ)/σ`, invers |
| **Lineærkombinasjon av uavhengige variabler** (`E`, `Var`, `Cov`, `Cor`, `ρ`) | 3 | **3/5 = 60 %** | Eldre O1d, V2024 O2, V2025 O2. Symbolsk; kryssledd faller ved uavhengighet |
| **Sentralgrenseteoremet** (eksplisitt bruk / normaltilnærming) | 3 | **3/5 = 60 %** | V2024 O2b (vis `Z` ~ normal), H2025 O2 (median-estimator via SGT) + O3b (normaltilnærming andel) |
| **Estimatorteori** (forventningsretthet, konsistens) | 2 | **2/5 = 40 %** | H2024 O3 (`E(S²)=σ²`), H2025 O2c (konsistens). Sentral, men ikke i hvert sett |
| **Sannsynlighetsregning** (hendelser, `P(A∪B)`, betinget, disjunkt/komplement) | 2 | **2/5 = 40 %** | Eldre O1abc, H2024 O2. Bruker regneregel-vedlegget |
| **Binomisk fordeling** (`P(X=k)`) | 1 | **1/5 = 40 % m/flervalg** | V2024 O3c (nøyaktig 1 av 5) substantivt; ellers som R-flervalg (`dbinom`/`pbinom`) |
| **Utledning av regresjonsformler / `SE(β̂₂)`** (algebra) | 1 | **1/5 = 20 %** | Eldre O4: vis `Σê² = s²_Y(n−1)(1−r²)` og omform `SE(β̂₂)`. Ren algebraoppgave |
| **Betinget sannsynlighet / Bayes** som regneoppgave | 1 | **1/5 = 20 %** | Lett berørt (eldre O1c, H2024 O2c). På vedlegget, men sjelden tung |

### Fravær — like viktig som forekomst

Temaer som ofte forbindes med statistikk-grunnkurs, men som **ikke opptrer** i de fem settene (og som derfor er lavt prioritert for eksamen, men bør dekkes kort for pensumbredde):

- **To-utvalgs tester** (to-utvalgs t-test, differanse `μ₁−μ₂`, to andeler `p₁−p₂`) — **0 forekomster.** All inferens er **én parameter, én utvalg.** Dette er en markant forskjell fra MET 2920, som gjør mye to-utvalg. Formelheftet inneholder *heller ikke* to-utvalgsformler.
- **Kjikvadrattest** (uavhengighet/tilpasning) — 0. (I MET 2920 forekommer den; ikke her.)
- **Diskret simultanfordeling** (todimensjonal sannsynlighetstabell) — 0. MET 1190 bruker i stedet **kontinuerlige lineærkombinasjoner** av uavhengige normale variabler for `Cov`/`Cor`-stoffet.
- **Poisson-fordeling** — 0.
- **Multippel regresjon** (flere forklaringsvariabler) — 0. All regresjon er **enkel** (én `X`).
- **Deskriptiv statistikk som egen tung oppgave** — 0 (median-formelen dukker opp i R-flervalg; ellers oppgis deskriptive mål).
- **ANOVA, ikke-parametrikk, bootstrap, Bayesiansk inferens** — 0.

### Viktigste funn

1. **Tre temaer bærer hvert eneste sett (100 %):** enkel regresjon/korrelasjon (alltid tyngst), hypotesetest for én parameter, og en teoretisk/algebraisk oppgave (lineærkombinasjon eller estimatorteori). En kandidat som mekaniserer disse tre, sikrer et bredt poenggulv.
2. **R-flervalg er dagens fjerde bærebjelke (80 %, 100 % i moderne format).** Den tester R-kompetanse *aktivt* og er unik for MET 1190. Boken må ha en gjennomgående R-modul.
3. **Inferenskjernen er smal, men repeterende:** alltid **én parameter** (`μ` eller `p`), **ett utvalg**, med KI og/eller test. Samme mal går igjen; dette er bokens hovedmodul, og den er enklere i bredde enn MET 2920 (ingen to-utvalg), men krever presist metodevalg (`t` vs `z`, `df`, ensidig/tosidig).
4. **Den teoretiske oppgaven er der karakteren avgjøres.** Symbolske utledninger («uten å anta noe om `a,b,c`»), forventningsretthet-bevis (`E(S²)=σ²`), konsistens-argumenter via SGT og algebraisk manipulasjon av `SE`-formler er faglig krevende og skiller MET 1190 fra et rent oppskriftsfag.
5. **Sannsynlighet + normalfordeling** (standardisering, invers persentil, binomisk, regneregler) er stabilt til stede (60 %), men i moderne format ofte *flettet inn* i R-flervalget og i andelsoppgaven snarere enn som egen tung oppgave.
6. **Ikke overtolk fraværet:** med bare fem sett (og to formatgenerasjoner) kan lavfrekvente temaer (Bayes, ren algebraisk `SE`-utledning, binomisk substantivt) komme igjen. Dekk hele pensumbredden.

---

## 3. Oppgavesjangre — katalog

### A. Enkel lineær regresjon + korrelasjon (100 % — signaturoppgaven, tyngst)
Modellen `Y = β₁ + β₂X + e` (BI-notasjon: `β₁` = konstantledd, `β₂` = stigningstall). To spor:
- **Spor 1 — fra oppgitte deskriptive mål** (eldre O5, V2025 O4): gitt `x̄`, `ȳ`, `s²_X`, `s²_Y`, `s_X`, `s_Y`, `s_{XY}`. Estimer `β̂₂ = s_{XY}/s²_X` og `β̂₁ = ȳ − β̂₂x̄`; skriv opp `Ŷ = β̂₁ + β̂₂X`; **prediker** for en gitt `X` (obs på enheter — f.eks. `PTR = elever/lærer` må regnes fra elevtall og lærertall); tolk fortegnet på effekten; vurder `R² = r²`; beregn `SE(β̂₂) = σ̂·√(1/Σ(xᵢ−x̄)²)` (der `σ̂²` er oppgitt eller beregnes); **test** `H₀: β₂ = 0` mot ensidig alternativ («negativ/positiv effekt»), `df = n−2`.
- **Spor 2 — fra rådatatabell med residualer** (V2024 O5, H2024 O5, H2025 O4): en tabell gir `Σ(xᵢ−x̄)²`, `Σ(yᵢ−ȳ)²`, `Σ(xᵢ−x̄)(yᵢ−ȳ)` og `Σê²`. Samme framgangsmåte, men `σ̂² = Σê²/(n−2)` beregnes fra residualsummen.
- **Standard deloppgave-rekkefølge:** (i) formuler modell + estimer + skriv linje; (ii) tolk effekten i kontekst; (iii) vurder `R²`; (iv) beregn `SE(β̂₂)`; (v) hypotesetest på `β₂` med konklusjon i kontekst.

### B. Teoretisk/algebraisk oppgave (100 %) — to undertyper
- **B1. Lineærkombinasjon av uavhengige variabler** (eldre O1d, V2024 O2, V2025 O2): gitt `X = aZ₁ + bZ₂`, `Y = cZ₂` med uavhengige standardnormale `Zᵢ`. Vis symbolsk `E(X)`, `E(Y)`, `Var(X) = a²+b²`, `Var(Y) = c²`, `Cov(X,Y) = bc`, `ρ(X,Y) = b/√(a²+b²)` — «uten å anta noe om `a,b,c`». Deretter, med konkrete tall, spesifiser fordelingen til `Y` (normal) og regn `P(−1 ≤ Y ≤ 2)` og `ρ`. Bruker bilineæritet og regnereglene fra vedlegget (kryssledd faller når `Cov(Zᵢ,Zⱼ)=0`).
- **B2. Estimatorteori** (H2024 O3, H2025 O2): gitt estimatorer for `μ` og `σ²`. Vis **forventningsretthet** (`E(S²_X)=σ²` via omskriving `S²_X = (1/(n−1))(ΣX²ᵢ − n·X̄²)` og oppgitte hjelperesultater `E(X²ᵢ)=σ²+μ²`, `E(X̄²)=σ²/n+μ²`), konkluder om egenskaper; eller vis at en median-estimator er tilnærmet normal via **SGT**, evaluer en tetthetsfunksjon i et punkt, og **argumenter for konsistens** (`Var(θ̂) → 0` når `n → ∞` + forventningsretthet). Krever nøyaktig algebra og korrekt bruk av definisjonene på vedlegget.

### C. Inferens for én parameter: KI + hypotesetest (100 % test, 60 % KI)
- **For `μ`** (eldre O3, H2024 O4, V2024 O4 [kun test], eldre støy-oppgave): gitt `Σxᵢ` og `Σ(xᵢ−x̄)²`, regn `x̄` og `s²_X = Σ(xᵢ−x̄)²/(n−1)`. **KI:** `x̄ ± t_{α/2,n−1}·s_X/√n` (t-fordeling, `σ` ukjent) med kommentar. **Test:** `t = (x̄−μ₀)/(s_X/√n)`, `df = n−1`; ensidig når teksten sier «høyere enn»/«mindre enn» («overskrider fartsgrensen» → `H₁: μ > μ₀`; «sover for lite» → `H₁: μ < μ₀`). Konkluder med både beslutning og tolkning.
- **For `p`** (eldre O2, V2025 O3, H2025 O3): `p̂ = X/n`; estimer også `σ̂² = p̂(1−p̂)`. **KI:** `p̂ ± z_{α/2}·√(p̂(1−p̂)/n)` (Wald). **Test:** `z = (p̂−p₀)/√(p₀(1−p₀)/n)` — bruk **hypoteseverdien `p₀`** i standardfeilen; normaltilnærming, begrunn med stor `n`/SGT. Ensidig («flertall» → `H₁: p > 0,5`; «ikke lenger samme støtte» → tosidig eller ensidig etter formulering). Kan også inkludere `P(p̂ ≤ verdi)` via normaltilnærming (H2025 O3b).
- **To beslutningsveier** (formelheftet viser begge): (i) p-verdi-metoden (forkast hvis p < α), (ii) kritisk-verdi-metoden (sammenlign observator med `z_α`/`t_α` ensidig, `α/2`-kvantil tosidig).

### D. R-flervalg P1–P5 (80 %; 100 % i moderne format)
Fem korte spørsmål, ingen begrunnelse. Faste motiver:
- **Kodelesing / deskriptivt:** `mean()` = `(1/length(x))*sum(x)`; `median()` for partall = snitt av de to midterste (`(x[n/2]+x[n/2+1])/2`); `sd()` = standardavvik; **`for`-løkke** som akkumulerer (produkt `x*i` → fakultet; sum over indekssett `x[k]`); gjenkjenn at en vektorisert `sum(x[k])` gir samme svar som en løkke.
- **Fordelinger:** skille `dbinom(k,size,prob)` (nøyaktig `k`) fra `pbinom` (kumulativt); `pnorm(a, mean, sd, lower.tail=…)` for normal-sannsynlighet (obs: `sd` er standardavvik, ikke varians!); `pt(t, df, lower.tail)` for p-verdi.
- **Kritisk verdi:** `qt(α, df, lower.tail=FALSE)` ensidig øvre; `qt(α/2, df, …)` tosidig; `df = n−1` for én-utvalgs t.
- **Test-kall:** `prop.test(x, n, p=p₀, alternative=…, correct=FALSE)` for andel; `t.test(x, conf.level=…)` for `μ`. Velg riktig funksjon til riktig parameter, og riktig `alternative`.
- **Tolkning av `t.test()`- eller `lm()`-utskrift:** les av `estimate`/`Estimate`, `t value`, `p-value`/`Pr(>|t|)`, `Multiple R-squared`, `Residual standard error`; regn `r = ±√R²` (fortegn = `β̂₂`), `σ̂² = (Residual standard error)²`, prediksjon fra estimert linje. Ofte formulert som «hvilket utsagn er **ikke** korrekt?».

### E. Normalfordeling og sannsynlighet (60 % / 40 %)
- **Normalfordeling:** standardiser `Z = (X−μ)/σ`, slå opp i standardnormaltabellen; `P(X>a)`, `P(a<X<b)`; **invers persentil** («blant de 2 % mest intelligente» → `x = μ + z·σ`) (V2024 O3, eldre O1).
- **Sannsynlighetsregning:** for standardnormale hendelser `A`, `B`: `P(A)`, `P(B)`, avgjør `P(A∩B)` (disjunkt → 0), `P(A∪B)`, betinget `P(B^c|A^c)` og komplement — med regnereglene fra vedlegget (eldre O1, H2024 O2). Symbolske bevis for disjunkte hendelser forekommer.
- **Binomisk:** `P(X=k) = C(n,k)p^k(1−p)^{n−k}` (V2024 O3c: nøyaktig 1 av 5).

---

## 4. Sensorens krav

> Utledet fra oppgavetekstenes egne instruksjoner — **ingen offisiell sensorveiledning forelå.**

### Metaregler (på hvert sett)
1. **Vis all utregning** (Oppgave 2 og utover): formel fra vedlegget → innsatte tall → referansefordeling (`Z`/`T`) med `df` → tallsvar med enhet. «Full uttelling gis kun dersom oppgaven besvares korrekt, i sin helhet og er tilstrekkelig begrunnet.» En naken tallverdi gir ikke full uttelling.
2. **Korrekt matematisk notasjon og velorganisert framstilling vektlegges eksplisitt.** Bruk standard BI-notasjon (`x̄`, `s_X`, `p̂`, `β̂₁`, `β̂₂`, `H₀`/`H₁`, `α`, `Z`/`T`).
3. **Konkluder og kommenter i kontekst.** Testoppgaver ber om «Kommenter resultatet», «Hva er testens konklusjon?», «Hva kan vi konkludere om effekten av inntekt på lykkefølelse?». En ren «forkaster/forkaster ikke» uten tolkning gir svak uttelling (signalet er noe svakere enn MET 2920s eksplisitte «null poeng», men samme forventning).
4. **R-flervalg (Oppgave 1):** ingen begrunnelse; skriv «P1, a.» med to streker under svaret.

### Fagspesifikke, strenge punkter
- **Riktig fordeling og `df`:** `t` (ikke `z`) for `μ` når `σ` er ukjent, `df = n−1`; `z` for andel `p`; `df = n−2` i regresjon.
- **Bruk `p₀` (ikke `p̂`) i standardfeilen** ved test av én andel — testen betinger på at `H₀` er sann.
- **Ensidig vs. tosidig** styres av formuleringen («overskrider», «høyere enn», «flertall», «mindre enn» → ensidig; «forskjellig fra» / «ikke lenger samme» → ofte tosidig). Ved ensidig test i R halveres den tosidige p-verdien der relevant.
- **Symbolsk der teksten ber om det** («uten å anta noe om `a,b,c`») — svaret skal stå med bokstaver, ikke tall. Der konkrete verdier oppgis, regn numerisk med rimelig avrunding og enhet.
- **Fortegn på `r`** følger `β̂₂` (`r = ±√R²`).
- **Normaltilnærming** til andel/binomisk: angi tilnærmingen og at `n` er stor nok (SGT).
- **Estimatoregenskaper** vises via definisjonene på vedlegget (forventningsretthet `E(θ̂)=θ`; konsistens `θ̂ → θ` når `n → ∞`; effisiens = minst varians blant forventningsrette).

### Hva som trolig skiller karakternivåene
- **Bestått-sjiktet** tar poeng på R-flervalget, avlesning av `β̂` fra utskrift, `p̂ = X/n`, enkel KI/test-innsetting.
- **Midtsjiktet** fullfører full regresjonsoppgave (`SE(β̂₂)`, `R²`, koeffisient-test), korrekt KI + test for `μ`/`p` med riktig fordeling og `df`, og normal-/binomisk-beregninger.
- **Toppsjiktet** behersker den **teoretiske/algebraiske oppgaven**: symbolske lineærkombinasjoner, forventningsretthet-bevis, konsistens-argument via SGT, og algebraisk utledning av `SE` — pluss presis kontekst-tolkning.

---

## 5. Typiske feil (utledet fra oppgavekravene og fagets standardfeller)

1. **Oppgi svar uten utregning** på Oppgave 2 og utover — gir ikke full uttelling selv med riktig tall.
2. **Bare «forkaster/forkaster ikke»** uten kontekst-tolkning der oppgaven ber om å «kommentere/konkludere».
3. **`z` i stedet for `t`** for `μ` med ukjent `σ` (eller feil `df`).
4. **Feil `df`:** `n−1` (én-utvalgs `μ`) vs. `n−2` (regresjon) — vanlig forveksling.
5. **Bruke `p̂` i stedet for `p₀`** i testobservatoren for én andel.
6. **`dbinom` vs. `pbinom`** i R-flervalget — forveksle «nøyaktig `k`» med «kumulativt».
7. **Feil `lower.tail`** eller `α` vs. `α/2` ved kritisk verdi (`qt`).
8. **`sd` vs. varians i `pnorm`:** sette inn variansen der `sd` (standardavvik) skal stå.
9. **Ensidig/tosidig-feil:** velge tosidig når teksten er ensidig (eller motsatt).
10. **Feil fortegn på `r`** (ikke la det følge `β̂₂`); forveksle korrelasjon og kovarians.
11. **Median for partall:** ta ett midtre element i stedet for snittet av de to midterste (R-flervalg-felle).
12. **`for`-løkke-feil:** blande fakultet (`x*i`) med sum-akkumulering.
13. **Algebrafeil i estimatorbevis** (miste ledd i omskrivingen av `S²_X`, eller ikke bruke de oppgitte `E(X²ᵢ)`/`E(X̄²)`).
14. **Glemme symbolsk svar** der teksten sier «uten å anta noe om `a,b,c`» (setter inn tall for tidlig).
15. **Glemme å begrunne normaltilnærmingen** (stor `n`/SGT) ved andelstester.

---

## 6. Symbol- og metodeapparat

### Deskriptiv statistikk (fra vedlegget)
`x̄ = (1/n)Σxᵢ`; varians `s²_X = (1/(n−1))Σ(xᵢ−x̄)²`; standardavvik `s_X = √(s²_X)`; kovarians `s_{XY} = (1/(n−1))Σ(xᵢ−x̄)(yᵢ−ȳ)`; korrelasjon `r_{XY} = s_{XY}/(s_X·s_Y)`; median (oddetall `x_{(n+1)/2}`, partall `(x_{n/2}+x_{n/2+1})/2`).

### Sannsynlighet (regneregler på vedlegget)
Addisjon `P(A∪B)=P(A)+P(B)−P(A∩B)`; komplement `P(Aᶜ)=1−P(A)`; betinget `P(A|B)=P(A∩B)/P(B)`; multiplikasjon; total sannsynlighet `P(A)=P(A|B)P(B)+P(A|Bᶜ)P(Bᶜ)`; **Bayes** `P(B|A)=P(A|B)·P(B)/P(A)`.

### Fordelinger
- **Diskret:** `E(X)=Σxᵢ·P(xᵢ)`; `Var(X)=Σ(xᵢ−E(X))²·P(xᵢ)`; **binomisk** `P(X=k)=C(n,k)p^k(1−p)^{n−k}`.
- **Normal:** standardisering `Z=(X−μ)/σ`, kumulativ standardnormaltabell + invers; tetthetsfunksjon oppgis i teoretiske oppgaver.
- **t-fordeling** med `df`, kritiske verdier fra t-tabell.

### Regneregler for E/Var/Cov/Cor (vedlegg)
`E(aX)=aE(X)`; `E(X+Y+Z)=ΣE`; `Var(aX)=a²Var(X)`; `Var(aX+bY+cZ)=a²Var(X)+b²Var(Y)+c²Var(Z)+2ab·Cov(X,Y)+…`; `Cov(aX,bY)=ab·Cov(X,Y)`; `Cov(X+Z,Y)=Cov(X,Y)+Cov(Z,Y)`; `ρ(X,Y)=Cov(X,Y)/(SD(X)·SD(Y))`. Merknad: uavhengige ⇒ `Cov=0` og `E(XY)=E(X)E(Y)`, men **ikke omvendt**.

### SGT og estimatorteori
SGT: `Σxᵢ ~ N(nμ, nσ²)` og `X̄ ~ N(μ, σ²/n)` for stor `n`, uansett fordeling. Forventningsretthet `E(θ̂)=θ`; konsistens `θ̂ → θ` når `n → ∞`; effisiens = minst varians blant forventningsrette.

### Estimering og konfidensintervall
- `μ`, `σ` ukjent: `x̄ ± t_{α/2,n−1}·s_X/√n`. (`σ` kjent: `x̄ ± z_{α/2}·σ/√n`.)
- `p`: `p̂ ± z_{α/2}·√(p̂(1−p̂)/n)`. (`z_{α/2}`: 1,645 / 1,960 / 2,576 for 90/95/99 %.)

### Hypotesetesting
- `μ`, `σ` ukjent: `t = (x̄−μ₀)/(s_X/√n)`, `df = n−1`.
- `p`: `z = (p̂−p₀)/√(p₀(1−p₀)/n)`.
- Regresjonskoeffisient: `t = (β̂ⱼ−β*)/SE(β̂ⱼ)`, `df = n−2`.
- Beslutning: p-verdi (`< α` → forkast) eller kritisk verdi (`z_α`/`t_α` ensidig, `α/2`-kvantil tosidig).

### Enkel lineær regresjon (vedlegg)
Modell `Y = β₁ + β₂X + e`. `β̂₂ = s_{XY}/s²_X = Σ(yᵢ−ȳ)(xᵢ−x̄)/Σ(xᵢ−x̄)²`; `β̂₁ = ȳ − β̂₂x̄`; `σ̂² = (1/(n−2))Σêᵢ²`; `SE(β̂₂) = σ̂·√(1/Σ(xᵢ−x̄)²)`; `SE(β̂₁) = σ̂·√((1/n)Σxᵢ²/Σ(xᵢ−x̄)²)`; `Ŷ = β̂₁ + β̂₂X`; `R² = r²_{XY}`. Nyttig identitet (eldre O4): `Σêᵢ² = s²_Y(n−1)(1−r²_{XY})`.

### R-apparat (må kunne lese/skrive)
`mean`, `median`, `sd`, `length`, `sum`, indeksering `x[k]`, `for`-løkke; `dbinom`/`pbinom`; `pnorm`/`qnorm`; `pt`/`qt` (`lower.tail`, `df`); `prop.test(x,n,p,alternative,correct=FALSE)`; `t.test(x,mu,alternative,conf.level)`; lesing av `lm()`- og `t.test()`-utskrift (`Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`, `Residual standard error`, `Multiple R-squared`).

### Notasjonskonvensjoner boken bør speile
Norsk BI-notasjon (`β₁` = konstant, `β₂` = stigningstall — merk: motsatt indeksering av mange lærebøker som bruker `β₀`/`β₁`). Fullstendige, stegvise løsningsforslag: formel → innsatte tall → fordeling m/`df` → tallsvar m/enhet → kontekst-tolkning. Symbolske svar der oppgaven ber om det.

---

## 7. Forholdet til MET 2920 (Statistikk for økonomer) — nivå og profil

MET 1190 og MET 2920 er **søsterfag** ved BI (begge 7,5 ECTS grunnkurs i statistikk, skriftlig skoleeksamen, formelhefte, A–F, med enkel lineær regresjon som signaturoppgave). De deler inferenskjernen (estimering, KI, hypotesetest, regresjon), men har **tydelig ulik profil**. MET 1190 er *ikke* et lettere fag — det er en annen vektlegging:

| Dimensjon | **MET 1190 Statistikk** | **MET 2920 Statistikk for økonomer** |
|---|---|---|
| **R** | **Levende pensum** — Oppgave 1 tester R-koding/-lesing aktivt (`dbinom`, `qt`, `pnorm`, `for`-løkker, `prop.test`) | R undervises, men **ikke på eksamen**; kun ferdig `lm()`-utskrift som tolkes |
| **Teori/bevis** | **Tyngre** — forventningsretthet-bevis (`E(S²)=σ²`), konsistens via SGT, symbolske lineærkombinasjoner, algebraisk `SE`-utledning | **Oppskriftsdrevet, ikke bevistung** — ingen estimatorbevis |
| **Inferensbredde** | **Smalere** — alltid **én parameter, ett utvalg** (ingen to-utvalg, ingen kjikvadrat) | **Bredere** — to-utvalgs t, to andeler (`p₁−p₂`), kjikvadrat, diskret simultanfordeling |
| **Cov/Cor-stoff** | Kontinuerlige **lineærkombinasjoner** av uavhengige normale `Zᵢ` | Diskret **simultanfordeling** (todimensjonal sannsynlighetstabell) |
| **Hjelpemidler** | Formelhefte + **statistiske tabeller** (z + t); tabelloppslag forventes | Kalkulator med **innebygde Z-/t-fordelinger**; ingen tabeller utdeles |
| **Struktur** | **Vekttall** (sum 1,0); **uavhengige** oppgaver med hver sin kontekst | **Poeng**; hele settet bygd rundt **ett gjennomgående datasett/case** |
| **Sensor-tolkningskrav** | «Kommenter/konkluder i kontekst» (sterkt) | «Null poeng for bare å forkaste» (svært eksplisitt) |

**Kortversjon:** MET 1190 går **dypere i teori og R**, men **smalere i anvendt inferens**; MET 2920 går **bredere i anvendt metode** (to-utvalg, kjikvadrat, case-dramaturgi), men **grunnere i bevis** og bruker ikke R på eksamen. En MET 1190-bok må derfor ha (a) en egen aktiv R-modul og (b) et solid teori-/bevis-spor (estimatorteori, SGT-argumenter, symbolske utledninger) som MET 2920-boken ikke trenger i samme grad — mens den kan nedprioritere to-utvalg og kjikvadrat, som er sentrale i MET 2920.

---

## 8. Prognose og prioritering

### Nivå 1 — må beherskes perfekt (bærer hvert sett)
1. **Enkel lineær regresjon:** estimer `β̂₁`/`β̂₂` fra deskriptive mål **og** fra rådatatabell; prediksjon (m/enheter); `R²`; `SE(β̂₂)`; koeffisient-t-test `df = n−2`; tolkning + fortegn på `r`.
2. **Hypotesetest for én parameter:** `μ` (t-test, `df = n−1`) og `p` (z-test med `p₀`), ensidig/tosidig, p-verdi + kritisk verdi, konklusjon i kontekst.
3. **Teoretisk/algebraisk oppgave:** lineærkombinasjon (`E`, `Var`, `Cov`, `Cor`, `ρ` symbolsk) **og** estimatorteori (forventningsretthet, konsistens via SGT).
4. **R-flervalg P1–P5:** lese/skrive/tolke `mean`/`median`/`sd`/`length`/`for`/indeksering, `dbinom` vs. `pbinom`, `pnorm`/`pt`/`qt` m/`lower.tail`, `prop.test`/`t.test`, avlesning av utskrift.

### Nivå 2 — må kunne (bredden i poengfangsten)
5. **Konfidensintervall** for `μ` (t) og `p` (Wald), med kommentar.
6. **Estimering/inferens for andel `p`:** `p̂ = X/n`, normaltilnærming, `P(p̂ ≤ verdi)` via SGT.
7. **Normalfordeling:** standardisering, `P(X>a)`, invers persentil; **binomisk** `P(X=k)`.
8. **Sannsynlighetsregning:** hendelser, `P(A∪B)`, betinget, disjunkt/komplement (regneregel-vedlegget).

### Nivå 3 — bør dekkes (lav frekvens / pensumbredde / karakterdifferensiering)
9. **Algebraisk utledning av regresjonsformler** (`Σê²`, `SE(β̂₂)`-omforming).
10. **Betinget sannsynlighet/Bayes** som regneoppgave (på vedlegget, sjelden tung).
11. **Sentralgrenseteoremet** som eksplisitt argument (formulering + betingelser).

### Bør dekkes kort for pensumbredde, men lavt prioritert for eksamen (fraværende i arkivet)
To-utvalgstester, kjikvadrat, diskret simultanfordeling, Poisson, multippel regresjon, ANOVA — **0 forekomster** i de fem settene, og flere av dem er heller ikke på formelheftet. Ta med for fullstendighet, men ikke som eksamenstyngdepunkt.

### Prognose for neste eksamen (basert på 2025-malen — 4 oppgaver)
Formelhefte + z/t-tabeller, kalkulator tillatt:
- **Oppgave 1 (~0,10):** R-flervalg P1–P5.
- **Oppgave 2 (~0,25–0,30):** teoretisk/algebraisk — lineærkombinasjon `E/Var/Cov/Cor` **eller** estimatorteori (forventningsretthet/konsistens/SGT).
- **Oppgave 3 (~0,25–0,30):** inferens for én parameter — KI + hypotesetest for `μ` **eller** estimering + KI + test for andel `p`.
- **Oppgave 4 (~0,35, tyngst):** enkel lineær regresjon + korrelasjon (fra deskriptive mål eller rådatatabell).

**Usikkerhetsmomenter:** (1) Bare fem sett og **ingen sensorveiledning**. (2) To formatgenerasjoner — det eldste settet (5 oppgaver, ingen R-flervalg) er strukturelt utdatert; kalibrer mot 2025-malen. (3) *Plasseringen* og *undertypen* av den teoretiske oppgaven varierer (lineærkombinasjon vs. estimatorbevis vs. SGT/median), og lavfrekvente temaer (Bayes, ren `SE`-algebra, binomisk substantivt, sannsynlighetsregning som egen oppgave) kan komme igjen. Dekk **hele bredden** i pensum, med tyngdepunkt på Nivå 1–2.

### Anbefalt bok-arketype
Samme grunnarketype som **ECON2130/STK1100 / MET 2920 «anvendt statistisk slutning»** — teori → metode/oppskrift → anvendt eksempel → oppgave, med fullstendige, stegvise løsningsforslag som avsluttes med kontekst-tolkning. **Men med tre MET 1190-spesifikke tilpasninger** som skiller boken fra MET 2920-boken:

1. **Aktiv R-modul (ikke bare utskriftslesing):** en gjennomgående tråd der kandidaten lærer å *skrive og lese* R-kode — `mean`/`median`/`sd`/`for`/indeksering, `dbinom` vs. `pbinom`, `pnorm`/`pt`/`qt` med `lower.tail`, `prop.test`/`t.test` — og å tolke `lm()`/`t.test()`-utskrift. Bygg mange korte flervalgsdriller à la Oppgave 1.
2. **Solid teori-/bevisspor:** egne moduler for symbolske lineærkombinasjoner (`E/Var/Cov/Cor` av uavhengige variabler), estimatoregenskaper (forventningsretthet, konsistens, effisiens), og SGT-argumenter — med trening i **algebraisk utledning**, ikke bare formelinnsetting. Dette er der toppkarakterene avgjøres, og det er tyngre enn i MET 2920.
3. **Tabelloppslag + smal, presis inferenskjerne:** tren z-/t-tabelloppslag (kalkulatorens innebygde fordelinger forutsettes ikke), og bygg inferensmodulen rundt **én parameter, ett utvalg** (`μ` og `p`) — grundig og repeterende, med korrekt `t` vs. `z`, `df`, ensidig/tosidig og `p₀`-i-standardfeilen. Nedprioriter (men nevn kort) to-utvalg og kjikvadrat.

Boken bør speile «vis all utregning, korrekt notasjon, konkluder i kontekst»-disiplinen fra oppgavetekstene, og la hvert løsningsforslag ende i en kontekst-tolkning.

---

## 9. Kildeliste

Alle filer ligger under `~/Desktop/Eksamner/BI/MET1190/`.

**Eksamenssett gjennomgått grundig (5 — alle uten fasit/sensorveiledning):**
- `MET11901QP 1.pdf` — **eldre udatert sett** (eldste generasjon, 5 oppgaver, **ingen R-flervalg**). O1 sannsynlighet/standardnormal + lineærkombinasjon `X=a+bZ`, O2 andelstest (COSC-klokker, `p>0,20`, n=72), O3 KI + test `μ` (lydtrykk/støy, n=60), O4 **algebraisk utledning av `SE(β̂₂)`**, O5 enkel regresjon (`TSCORE~INCOME`, fra deskriptive mål).
- `MET11901_202410_04.06.2024_QP.pdf` — **V2024** (5 oppgaver). O1 R-flervalg (`sd`, `pnorm`, `qt`, `prop.test`, `lm`), O2 estimatorteori (lineærkombinasjon `V̂` + SGT), O3 normalfordeling IQ (`P(normal)`, invers Mensa, binomisk 1 av 5), O4 t-test `μ` (søvn, n=31, ensidig), O5 enkel regresjon fra rådata (`MORT~LAT`, hudkreft, n=49).
- `MET1190_2024-11-21_kl_09_EP.pdf` — **H2024** (5 oppgaver). O1 R-flervalg (`mean`, `pnorm`, `pt`, `prop.test`, `lm`), O2 sannsynlighet standardnormal (`P(A∪B)`, disjunkt-bevis), O3 estimatorteori (`E(S²_X)=σ²`, forventningsretthet), O4 KI + test `μ` (E6-fart, n=31), O5 enkel regresjon fra rådata (`BMI~ALDER`, n=320).
- `MET1190_2025-06-05_kl_09_EP.pdf` — **V2025** (4 oppgaver). O1 R-flervalg (`median` partall, `dbinom`, tolke `t.test`-utskrift, `qt`, `for`-fakultet), O2 lineærkombinasjon `X=aZ₁+bZ₂` / `Y=cZ₂` (`E/Var/Cov/ρ` + normal `Y`), O3 estimering + KI + z-test andel (økonomisk optimisme, n=265, x=144), O4 enkel regresjon (`TSCORE~PTR`, prediksjon, `SE(β̂₂)`, test).
- `MET1190_2025-11-21_kl_09_EP.pdf` — **H2025** (4 oppgaver). O1 R-flervalg (`mean`/`median`/`sd`, `pnorm` p-verdi, tolke `lm`-utskrift, `t.test`/`prop.test` KI-kode, `for`/indeksering), O2 estimatorteori (median-estimator via SGT, evaluer tetthet, konsistens), O3 andelstest (Trump-oppslutning, n=292, `P(p̂≤verdi)`, z-test), O4 enkel regresjon fra rådata (`HAP~INT` lykke/inntekt, n=290, prediksjon, `SE(β̂₂)`, test).

**Formelhefte + statistiske tabeller:** vedlegget (~15 sider, likt på tvers av settene) er lest i sin helhet — deskriptive formler, sannsynlighetsregneregler (inkl. Bayes/total sannsynlighet), E/Var/Cov/Cor-regler, sentralgrenseteoremet, estimatoregenskaper (forventningsretthet/konsistens/effisiens), KI- og testformler (`p`, `μ` kjent/ukjent `σ`), enkel lineær regresjon (MKM, `SE`, `R²`, koeffisient-test), samt **kumulativ standardnormaltabell + t-tabell** (engelskspråklige «APPENDIX H Tables»).

**Fagbeskrivelse:** omskrevet sammendrag av BIs emnebeskrivelse for MET 1190 (scratchpad: `fagbeskrivelse-met1190-bi.md`); status verifisert **aktiv 2026** (grunnleggende statistikkfag ved BI; skriftlig skoleeksamen, formelhefte + tabeller, kalkulator tillatt, A–F).

**Forbilder brukt som mal:** `docs/hoyskole-boker/met2920-bi/EKSAMENSANALYSE.md` (samme institusjon, søsterfag — brukt til nivå-/profilsammenligning i del 7) og ECON2130/STK1100-analysene (statistikkfaglig struktur).

**Merknader om kildene:**
- **Lite arkiv, moderat-lav evidensstyrke:** kun fem sett, **ingen sensorveiledning/fasit**, og settene spenner over **to formatgenerasjoner**. 2025-malen (4 oppgaver, R-flervalg først, teoretisk oppgave, inferens for én parameter, regresjon sist) er robust dokumentert i de to nyeste settene og støttet av 2024-settene. Sensorkravene er utledet fra oppgavetekstenes eksplisitte instruksjoner («vis all utregning», «korrekt notasjon», «kommenter/konkluder»), ikke fra en verifisert rettemal. Frekvenser med 1–2/5 er indikatorer, ikke sikre mønstre.
- **Opphavsrett:** alle beskrivelser av oppgaver og løsningsmetoder er parafrasert og omstrukturert med egne ord. Ingen oppgavetekst er gjengitt ordrett. Statistiske standardformler og -teoremer er faglig allemannseie.
