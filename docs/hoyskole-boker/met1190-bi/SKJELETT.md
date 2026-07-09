# Bokskjelett: MET 1190 Statistikk — eksamensrettet lærebok

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
> (**fem skoleeksamenssett** fra Handelshøyskolen BIs eget MET 1190-arkiv: ett
> eldre udatert sett samt V2024, H2024, V2025 og H2025, pluss det utdelte
> **formelheftet + statistiske tabeller (z + t)** lest i sin helhet — **ingen
> offisiell sensorveiledning/fasit forelå**; sensorkravene er utledet fra
> oppgavetekstenes egne, eksplisitte instruksjoner og fagets standardmetodikk).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her. Alle
> mønstereksempler i skjelettet er omskrivninger med **nyskrevne tallverdier og
> nyskrevet R-kode**; forfatteren skal variere dem videre (nye tall, ny kontekst,
> ny R-kode), aldri kopiere inn ordrett.
>
> **Forbilder:** `docs/hoyskole-boker/met2920-bi/SKJELETT.md` (samme institusjon,
> samme eksamensform, søsterfag — «vis all utregning»-disiplinen og den kompakte,
> stegvise sensorstilen hentes derfra, MEN se «Avvik / ulik profil fra MET 2920»)
> og `econ2130`/`stk1100` (arketypen **«anvendt statistisk slutning»**: teori →
> oppskrift → anvendt eksempel → oppgave med fullstendig, stegvis løsning). MET
> 1190 er kalibrert utelukkende mot **sin egen** analyse; de andre fagene er
> struktur- og statistikkforbilder, ikke faglige forbilder.
>
> **Evidensmerknad (moderat-lav):** kun fem sett, ingen sensorveiledning, og
> settene spenner over **to formatgenerasjoner** (det eldste settet har 5 oppgaver
> uten R-flervalg; 2025-malen har 4 oppgaver med R-flervalg først). De fire
> bærebjelkene (regresjon/korrelasjon, hypotesetest for én parameter, teoretisk/
> algebraisk oppgave, R-flervalg P1–P5) er robust dokumentert (5/5 for de tre
> første, 4/5 = 100 % moderne for R-flervalg). Enkeltforekomster (Bayes, ren
> algebraisk `SE`-utledning, binomisk substantivt) er indikatorer, ikke sikre
> mønstre — dekkes for bredde. Sensorkrav utledet fra oppgaveinstruksjonene er
> markert `(verifiser)` der presisjonen avhenger av en rettemal som ikke forelå.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `met1190-bi` |
| Tittel | **MET 1190 Statistikk** |
| Level | `'Høyskole'` |
| Institusjon | **Handelshøyskolen BI** (bachelor; 7,5 ECTS, grunnleggende statistikkfag; søsterfag til MET 2920 Statistikk for økonomer) |
| Arketype | Regnefag — «anvendt statistisk slutning» med fast 4-oppgavemal, **aktiv R-modul** (lese + skrive + tolke R-kode), et **solid teori-/bevisspor** (estimatorteori, SGT, symbolske lineærkombinasjoner) og en **smal, presis inferenskjerne** (alltid én parameter, ett utvalg) |
| Antall kapitler | **30** (3 eksamenskart/håndverk/R-modul + 22 tema/drill + 5 eksamenstrening) + 9 prøvekapitler |
| Estimert totaltid | **≈ 2 060 min ≈ 34 timer** (inkl. 3 øvingseksamener à 150 min; ≈ 1 610 min uten dem, uten prøver) |
| Quiz totalt | **541** (krav ≥500) |
| Flashcards totalt | **508** (krav ≥500) |

**Pitch (ett avsnitt):** MET 1190 er BIs grunnleggende statistikkfag under
bachelorstudiene — det leverer deskriptiv statistikk, sannsynlighet, fordelinger,
estimatorteori, klassisk inferens (KI + hypotesetest) og enkel lineær regresjon,
med **R som gjennomgående, levende verktøy**. Eksamen er en **skriftlig
skoleeksamen (kl. 09, emnekode MET 11901), 4 oppgaver (2025-format) med vekttall
som summerer til 1,0, karakter A–F**, der hjelpemidlene er et **utdelt formelhefte
+ statistiske tabeller (z + t)** og kalkulator **uten** innebygde fordelinger — så
**tabelloppslag forventes**. Fire bjelker bærer det moderne formatet: **Oppgave 1
er alltid fem R-flervalg P1–P5** som tester at kandidaten kan *lese, skrive og
tolke* R-kode (ingen begrunnelse); **Oppgave 2** er en **teoretisk/algebraisk
oppgave** (symbolsk lineærkombinasjon `E/Var/Cov/Cor` eller estimatorteori:
forventningsretthet, konsistens, SGT); **Oppgave 3** er **inferens for én
parameter** (KI + test for `μ` eller andel `p`); **Oppgave 4** (tyngst, vekt
~0,35) er **enkel lineær regresjon + korrelasjon**. Boka mekaniserer de tre
100 %-bjelkene til et bredt poenggulv, bygger en egen **aktiv R-modul** med mange
korte P1–P5-driller, og — avgjørende for toppkarakteren — et **solid teori-/
bevisspor** (symbolske utledninger «uten å anta noe om `a,b,c`», forventningsretthet-
bevis `E(S²)=σ²`, konsistens via SGT). Inferenskjernen holdes **smal og presis**:
alltid én parameter, ett utvalg, med korrekt `t` vs. `z`, riktig `df`, ensidig/
tosidig og `p₀`-i-standardfeilen. Sensordisiplinen «vis all utregning med formel
fra vedlegget → riktig fordeling/df → konkluder i kontekst» er trådet gjennom
hvert løsningsforslag.

**Kritisk sensorregel #1 — «Vis all utregning + korrekt notasjon» (Oppgave 2 og
utover, gjelder HELE boka utenom R-flervalget).** På hvert sett står (omskrevet):
*«Korrekt matematisk fremstilling og bruk av notasjon vil bli vektlagt … Full
uttelling gis kun dersom oppgaven besvares korrekt, i sin helhet og er
tilstrekkelig begrunnet … velorganisert og tydelig kommunisert.»* Poeng gis for
**framgangsmåte** — formel fra vedlegget → innsatte tall → referansefordeling
(`Z`/`T`) med `df` → tallsvar med enhet — ikke for bart svar. Konsekvens: hvert
løsningsforslag skrives som A-besvarelse der **hvert steg vises på egen linje**;
formelen fra vedlegget skrives **eksplisitt ut før innsetting**; referansefordeling
og `df` navngis alltid. Kontraktfestet `warning` **«Vis utregning»** i alle
regne-/inferens-/regresjonskapitler.

**Kritisk sensorregel #2 — «Konkluder og kommenter i kontekst» (alle tester/
estimater).** Testoppgavene ber om «Kommenter resultatet», «Hva er testens
konklusjon?», «Hva kan vi konkludere om effekten av …?». En ren «forkaster/
forkaster ikke» uten tolkning gir svak uttelling. Konsekvens: **hvert
løsningsforslag som ender i en test eller et estimat avsluttes med en eksplisitt
tolkningssetning i oppgavens språk**, og test-/KI-/regresjonskapitler har en
kontraktfestet `warning` **«Konkluder i kontekst»**. (Signalet er noe svakere enn
MET 2920s eksplisitte «null poeng», men samme forventning — merk `(verifiser)`.)

**Kritisk sensorregel #3 — Symbolsk svar der teksten ber om det (teorisporet).**
Når oppgaven sier «uten å anta noe om `a,b,c`» skal svaret stå med **bokstaver,
ikke tall** (f.eks. `Var(X)=a²+b²`, `Cov(X,Y)=bc`, `ρ=b/√(a²+b²)`). Å sette inn
konkrete tall for tidlig er en klassisk felle. Der konkrete verdier oppgis, regnes
numerisk med rimelig avrunding og enhet. Kontraktfestet `warning` **«Symbolsk svar»**
i teorisporet (Del 4–5).

**Kritisk hjelpemiddelregel #4 — Formelhefte + statistiske tabeller (z + t),
kalkulator UTEN innebygde fordelinger (gjelder HELE boka).** Vedlegget (~15 sider,
likt på tvers av settene) inneholder deskriptive formler, sannsynlighetsregneregler
(inkl. Bayes/total sannsynlighet), `E/Var/Cov/Cor`-regler, SGT, definisjoner av
forventningsretthet/konsistens/effisiens, KI- og testformler (`p`, `μ` kjent/ukjent
`σ`), enkel lineær regresjon (MKM, `SE`, `R²`, koeffisient-t-test), **samt kumulativ
standardnormaltabell + t-tabell**. Kandidaten skal altså **hente formelen fra
heftet, slå opp kritisk verdi / kumulativ sannsynlighet i tabellen, og sette inn
tall** — kalkulatorens innebygde fordelinger forutsettes IKKE. Konsekvens for boka:
**hvert delkapittels Symbol- og formelliste merker «(på vedlegget)»** der formelen
står der; z- og t-verdier hentes ved **tabelloppslag** (kontraktfestet
tabelloppslag-mal i kap. 0.2 og i alle inferenskapitler). Dette er et hovedskille
mot MET 2920, som bruker kalkulatorens innebygde fordelinger og ikke deler ut
tabeller.

**Kritisk R-regel #5 — R er levende pensum: lese, SKRIVE og tolke R-kode (gjelder
HELE boka).** I det moderne formatet er **Oppgave 1 alltid fem R-flervalg P1–P5**
(ingen begrunnelse; svar «P1, a.»). Kandidaten kjører ikke R på eksamen, men må
**beherske R konseptuelt**: hva `mean()`/`median()`/`sd()`/`length()`/`sum()` gjør,
`for`-løkker og indeksering (`x[k]`, `x[n/2]`), skille `dbinom` (nøyaktig `k`) fra
`pbinom` (kumulativt), velge riktig `pnorm`/`pt` med `lower.tail` (og at `sd` er
standardavvik, ikke varians), finne kritisk verdi med `qt`/`qnorm`, og gjenkjenne
riktig `prop.test`/`t.test`-kall — pluss lese `lm()`/`t.test()`-utskrift. Dette er
fagets tydeligste enkeltsignatur (kontrast: MET 2920 har R *ikke* på eksamen).
Konsekvens: en **egen aktiv R-modul** (kap. 0.3) + et **kontraktfestet R-kode-lese-
OG-skrive-blokk** i hvert fordelings-/inferens-/regresjonskapittel + en egen
**R-flervalg P1–P5-stordrill** (kap. 10.1). Boka lærer studenten å *skrive* R-kode
(ikke bare lese), fordi P1–P5 tester nettopp det.

**Kritisk notasjonsregel (gjelder HELE boka).** Bruk emnets norske BI-notasjon:

- Utvalgsstørrelser: gjennomsnitt $\bar{x}$, utvalgsstandardavvik $s_X$,
  utvalgsvarians $s_X^2$, utvalgskovarians $s_{XY}$, korrelasjon $r_{XY}$; andel
  $\hat{p} = X/n$; regresjonsestimater $\hat{\beta}_1$, $\hat{\beta}_2$.
  Populasjonsstørrelser: $\mu$, $\sigma$, $\sigma^2$, $p$, $\beta_1$, $\beta_2$,
  $\rho$.
- **BI-regresjonsnotasjon (VIKTIG — motsatt av mange lærebøker):** modellen er
  $Y = \beta_1 + \beta_2 X + e$ der **$\beta_1$ = konstantledd** og **$\beta_2$ =
  stigningstall**. Bruk ALDRI $\beta_0$/$\beta_1$-indeksering (det er MET 2920 /
  standardlærebøker). $\hat{\beta}_2 = s_{XY}/s_X^2$, $\hat{\beta}_1 = \bar{y} -
  \hat{\beta}_2\bar{x}$.
- Hypoteser $H_0$ og $H_1$ (dette faget bruker $H_1$, ikke $H_A$); signifikansnivå
  $\alpha$; testobservator $Z$ eller $T$; frihetsgrader **df** (skriv «df = n − 1»,
  «df = n − 2»). $P$-verdi skrives «p-verdi».
- **Riktig referansefordeling/df er et selvstendig sensorpoeng:** $t$ (ikke $z$)
  for $\mu$ med ukjent $\sigma$, **df = n − 1**; $z$ for andel $p$; **df = n − 2** i
  regresjon. Kontraktfestet `warning` **«Riktig fordeling/df»** i hvert
  inferens-/regresjonskapittel.
- **$p_0$ (ikke $\hat{p}$) i standardfeilen** ved test av én andel (testen betinger
  på at $H_0$ er sann): $z = (\hat{p} - p_0)/\sqrt{p_0(1-p_0)/n}$. Kontraktfestet
  `warning`.
- **N(μ, σ²) — variansen som andre argument** når normalfordeling skrives med to
  argument (men settene oppgir ofte $\sigma$ direkte; vær eksplisitt hver gang).
- R-kode i base-R: funksjonene i R-regel #5; `lm()`-utskrift har kolonnene
  `Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`, samt `Residual standard error`,
  `Multiple R-squared`. R skal her **både leses og skrives**.
- **Vekttall** per oppgave (sum 1,0), IKKE poeng — MET 1190 skiller seg her fra MET
  2920; Del 0 sier eksplisitt vekttall, A–F, formelhefte + z/t-tabeller, kalkulator
  uten innebygde fordelinger, R-flervalg som Oppgave 1.
- **ALDRI** (0 forekomster i arkivet, bygges ikke ut — nevnes med én setning i Del 0
  som «trygt fravær»): **to-utvalgs tester** (to-utvalgs t, differanse $\mu_1-\mu_2$,
  to andeler $p_1-p_2$), **kjikvadrattest**, **diskret simultanfordeling**
  (todimensjonal sannsynlighetstabell — MET 1190 bruker i stedet **kontinuerlige
  lineærkombinasjoner** av uavhengige normale variabler for `Cov`/`Cor`-stoffet),
  **Poisson**, **multippel regresjon** (all regresjon er enkel, én $X$), ANOVA,
  ikke-parametrikk, bootstrap, bayesiansk inferens. Dette er det motsatte
  fraværsbildet av MET 2920 (som gjør mye to-utvalg/kjikvadrat/simultanfordeling).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, ikke frekvens);
frekvensen styrer *omfanget*. `sectionNames` = den beskrivende tittelen per del
(vises som «Kapittel N: …» på bokforsiden).

| Del | Seksjonstittel (`sectionNames`) | Kap. | Prioritet | Begrunnelse (frekvens → omfang) |
|---|---|---|---|---|
| 0 | Eksamenskart, «vis utregning»/tabelloppslag-håndverket og den aktive R-modulen | 3 | — | Prioriteringsverktøyet + de tre sensorreglene (vis utregning; konkluder i kontekst; symbolsk svar) + formelhefte-/**tabelloppslag**-håndverket + den **aktive R-modulen** (lese + skrive + tolke) som resten refererer til. Kjerne i studieguiden. |
| 1 | Deskriptiv statistikk | 2 | KUNNE (fundament) | Deskriptiv som egen tung oppgave 0 %, men **fundamentet under regresjonen** ($\bar{x}$, $s_X$, $s_{XY}$, $r$) og under R-flervalget (median partall, `mean`/`sd`). Teori. |
| 2 | Sannsynlighet og kombinatorikk | 2 | KJENNE (bredde/beredskap) | Sannsynlighetsregning 40 % (regneregler, disjunkt/komplement, betinget); Bayes/total 20 %; kombinatorikk til binomisk. På vedlegget → kort, men komplett dekning. |
| 3 | Diskrete og kontinuerlige fordelinger; normalfordeling | 3 | KUNNE | Normalfordeling 60 %, binomisk 20–40 % (+ R-flervalg). Kontinuerlige tetthetsfunksjoner er **grunnlaget for estimatorteorien** (evaluere tetthet i punkt). R: `dbinom`/`pbinom`/`pnorm`/`qnorm`. |
| 4 | Lineærkombinasjoner: E, Var, Cov, Cor (symbolsk) | 2 | **PERFEKT (del av 100 % teoretisk oppgave)** — TEORISPOR | Lineærkombinasjon av uavhengige variabler 60 %; en av to undertyper av den 100 %-tilbakevendende teoretiske oppgaven. Symbolske bevis, bilineæritet, kryssledd faller ved uavhengighet. |
| 5 | Estimatorteori: forventningsretthet, konsistens og SGT | 3 | **PERFEKT (del av 100 % teoretisk oppgave) — TOPPKARAKTER** | Estimatorteori 40 %, men den andre undertypen av den 100 %-oppgaven, og **der toppkarakteren avgjøres**. Forventningsretthet-bevis, konsistens via SGT, tetthetsevaluering. Eget drillkapittel. |
| 6 | Estimering og konfidensintervall for μ | 2 | KUNNE→PERFEKT | KI for $\mu$ 60 %; grunnlaget (t, df = n − 1, SE) for hypotesetesten (100 %). t-fordeling, $\sigma$ ukjent, tabelloppslag. |
| 7 | Hypotesetest for gjennomsnitt μ | 2 | **PERFEKT (100 %)** | Hypotesetest for én parameter 100 % (halvparten $\mu$). t-test, df = n − 1, ensidig/tosidig, p-verdi + kritisk verdi (tabelloppslag). Teori + drill. Fagets hovedmodul (sammen med Del 8–9). |
| 8 | Andel p: estimering, KI og test | 2 | **PERFEKT (100 %)** | Hypotesetest for én parameter 100 % (andre halvpart, andel $p$); andelsinferens 60 %. $\hat{p}=X/n$, Wald-KI, z-test med **$p_0$ i SE**, normaltilnærming, $P(\hat{p}\le v)$ via SGT. Teori + drill. |
| 9 | Enkel lineær regresjon og korrelasjon | 4 | **PERFEKT (100 %) — STØRST** | Signaturoppgaven (100 %, alltid siste og tyngst, vekt ~0,35). To spor: fra deskriptive mål OG fra rådatatabell med residualer. $\hat{\beta}_2$, prediksjon, $R^2$, $SE(\hat{\beta}_2)$, koeffisient-t-test **df = n − 2**, fortegn på $r$, algebraisk `SE`-utledning. |
| 10 | Eksamenstrening | 5 | — | **R-flervalg P1–P5-stordrillen** (sjanger R) + kryssgående sjangerguide/stordrill (teoretisk + inferens + regresjon) + **3 komplette øvingseksamener** (4 oppgaver: R-flervalg + teoretisk + inferens + regresjon; formelhefte + z/t-tabeller). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart, «vis utregning»/tabelloppslag-håndverket og den aktive R-modulen |
| 1 | Deskriptiv statistikk |
| 2 | Sannsynlighet og kombinatorikk |
| 3 | Diskrete og kontinuerlige fordelinger; normalfordeling |
| 4 | Lineærkombinasjoner: E, Var, Cov, Cor (symbolsk) |
| 5 | Estimatorteori: forventningsretthet, konsistens og SGT |
| 6 | Estimering og konfidensintervall for μ |
| 7 | Hypotesetest for gjennomsnitt μ |
| 8 | Andel p: estimering, KI og test |
| 9 | Enkel lineær regresjon og korrelasjon |
| 10 | Eksamenstrening |

**Sjangerkoder** (brukt i «Oppgavesjangre» under; introduseres i Del 0 som
studentens sjekkliste — fra analysen §3):
`A` deskriptiv statistikk for hånd ($\bar{x}$, $s_X$, median, $s_{XY}$, $r$) ·
`B` sannsynlighetsregning (regneregler, disjunkt/komplement, betinget, Bayes/total) ·
`C` diskrete fordelinger + binomisk ($E$, $\text{Var}$, $P(X=k)$) ·
`D` normalfordeling (standardisering, $P(X>a)$, invers persentil) + kontinuerlige tettheter ·
`E` lineærkombinasjon `E/Var/Cov/Cor` **symbolsk** (den teoretiske oppgaven, undertype 1) ·
`F` estimatorteori: forventningsretthet, konsistens, SGT (den teoretiske oppgaven, undertype 2) ·
`G` estimering + KI for $\mu$ (t, df = n − 1, tabelloppslag) ·
`H` hypotesetest for $\mu$ (t, df = n − 1, ensidig/tosidig) ·
`I` andel $p$: estimering, Wald-KI, z-test med $p_0$ ·
`J` enkel lineær regresjon fra **deskriptive mål** (spor 1) ·
`K` enkel lineær regresjon fra **rådatatabell med residualer** (spor 2) ·
`L` korrelasjon, fortegn på $r$, $R^2$ og algebraisk `SE`-utledning ·
`R` **R-flervalg P1–P5** — lese, SKRIVE og tolke R-kode (signaturgenren, Oppgave 1).

**To gjennomgående spor (bokas ryggrad):**

1. **R-sporet (aktiv R).** R-flervalg P1–P5 er en av fire bærebjelker (100 % i
   moderne format) og krever at studenten kan *skrive* R, ikke bare lese. Sporet
   introduseres i kap. 0.3 (grunnvokabular + skrivetrening), forsterkes med et
   **kontraktfestet R-kode-lese-OG-skrive-blokk** i hvert fordelings-/inferens-/
   regresjonskapittel (3.1 `dbinom`/`pbinom`, 3.2 `pnorm`/`qnorm`, 6.1/7.1 `qt`/
   `t.test`, 8.1 `prop.test`, 9.2 `lm`-utskrift), og kulminerer i R-flervalg-
   stordrillen (kap. 10.1). Hver R-blokk viser BÅDE hvordan lese et kall/utskrift
   OG hvordan skrive kallet selv.
2. **Teori-/bevissporet (toppkarakter).** Den teoretiske/algebraiske oppgaven
   (100 %) er der karakteren avgjøres. Sporet bygges i Del 4 (symbolske
   lineærkombinasjoner) og Del 5 (estimatorteori: forventningsretthet-bevis,
   konsistens via SGT, tetthetsevaluering), med kontraktfestet `warning` **«Symbolsk
   svar»** og trening i **algebraisk utledning** (ikke bare formelinnsetting). Dette
   er tyngre enn i MET 2920 og speiler analysens funn at toppsjiktet skilles nettopp
   her.

**Smal, presis inferenskjerne (bevisst begrensning).** All inferens er **én
parameter, ett utvalg** ($\mu$ eller $p$). Del 7 (test $\mu$) og Del 8 (andel $p$)
holdes grundige og repeterende, men SMALE — ingen to-utvalg, ingen kjikvadrat,
ingen simultanfordeling (0/5 i arkivet, og ikke på vedlegget). Disse fraværene
nevnes med én setning i Del 0 som «trygt fravær» og bygges ikke ut. Presisjonen
ligger i metodevalget: `t` vs. `z`, riktig `df`, ensidig/tosidig, `p₀`-i-SE.

**Avvik / ulik profil fra MET 2920 (dokumentert — samme eksamensform, ULIK
vektlegging):**
1. **Aktiv R-modul (ikke bare utskriftslesing).** MET 2920 leser bare ferdig
   `lm()`-utskrift; MET 1190 tester R *aktivt* (skrive/lese/tolke, Oppgave 1,
   100 % moderne). Derfor har MET 1190 en **egen aktiv R-modul** (0.3) med
   skrivetrening + R-blokker i hvert relevant kapittel + en dedikert P1–P5-stordrill
   (10.1). Dette er ikke i MET 2920-boka.
2. **Solid teori-/bevisspor (Del 4–5, 5 kapitler).** MET 2920 er oppskriftsdrevet,
   IKKE bevistungt (ingen estimatorbevis). MET 1190s teoretiske oppgave er 100 % og
   avgjør toppkarakteren → egne moduler for symbolske lineærkombinasjoner og
   estimatorteori (forventningsretthet, konsistens, SGT), med algebraisk
   utledningstrening. Dette er MET 1190s dybde-signatur.
3. **Smalere inferenskjerne.** MET 2920 gjør mye to-utvalg (t, andeler),
   kjikvadrat og diskret simultanfordeling; MET 1190 gjør INGEN av delene (0/5,
   ikke på vedlegget). MET 1190s Del 7–8 er derfor smalere (én parameter) enn MET
   2920s Del 6–7 — men til gjengjeld har MET 1190 `Cov`/`Cor`-stoffet som
   **kontinuerlige lineærkombinasjoner** (Del 4), ikke diskret simultanfordeling.
4. **Tabelloppslag i stedet for kalkulatorfordelinger.** MET 2920 bruker
   kalkulatorens innebygde Z-/t-fordeling og deler ikke ut tabeller; MET 1190 deler
   ut z- og t-tabeller og forutsetter **tabelloppslag** (kalkulator uten innebygde
   fordelinger). Boka har derfor en **tabelloppslag-mal** (kap. 0.2) og bruker
   tabeller gjennomgående — motsatt av MET 2920.
5. **Vekttall (sum 1,0), ikke poeng; uavhengige oppgaver, ikke ett gjennomgående
   case.** MET 1190 har vekttall og hver oppgave sin egen kontekst (IQ, E6-fart,
   søvn, boligpriser, lykke/inntekt, Trump-oppslutning …); MET 2920 har poeng og
   ett gjennomgående datasett. MET 1190-boka rammer hver oppgave i sin egen
   anvendte kontekst, ikke i én gjennomgående dramaturgi.
6. **Drillkapitlene ligger inne i temadelene** (5.3, 7.2, 8.2, 9.4) — de bygges
   rett etter teorien for automatisering (samme grep som econ2130/met2920). Del 10
   beholder R-flervalg-stordrillen, den kryssgående sjangerguiden og de tre
   øvingseksamenene.
7. **30 kapitler** — midt i DNA-vinduet (20–35). Faget er smalere i anvendt bredde
   enn MET 2920 (33 kap.), men dypere i teori/R; kapittelantallet balanserer disse.
   Flashcard-tettheten (508) ligger bevisst litt over 500-gulvet fordi teori-/
   bevissporet (definisjoner, teoremer, bevissteg, SGT-betingelser) og håndverket
   (tabelloppslag, formelhefte, R-vokabular, df-katalog) er flashcard-rike;
   quiz-tettheten (541) ligger klart over gulvet fordi **R-flervalg P1–P5 er en
   egen eksamenssjanger** som gir naturlig mange korte quiz.

**Kryssbok-lenker (forkunnskaper):** grunnleggende sannsynlighet, gjennomsnitt/
standardavvik og lineære funksjoner forutsettes fra VGS — lenk der det er naturlig
til eksisterende kapitler i S1/S2/R1-bøkene og til BI-matte (`met2910-bi`) for
algebra/lineære funksjoner, og til søsterfaget `met2920-bi` der inferenskjernen
overlapper, med `[tittel](/bok/<courseId>/<chapterId>)`. **Verifiser at kapittel-
id-en finnes før lenking** (BYGGEKONTRAKT-fasen slår opp id-ene mot
`textbook-courses-matte.ts`/`-hoyskole.ts`); lenk aldri til kapitler du ikke har
verifisert.

Prosareferanser i innholdet bruker del-basert form («kap. 7.1», «se kap. 9.3»).

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Prioritetsklasser: **PERFEKT** (nivå 1) /
**KUNNE** (nivå 2) / **KJENNE** (nivå 3). Hvert teorikapittel har (BYGGEKONTRAKT
detaljerer blokkene): Eksamensvinkel-`tip` med tallene herfra, Forkunnskaper-blokk
med kryssbok-lenker + `collapsible` Symbol- og formelliste per delkapittel (med
«(på vedlegget)»-merking), Motivasjon-`text`, definisjoner/regneprosedyrer/
bevisprosedyrer som `theorem`-blokker i emnets notasjon, 2–4 eksempler (siste på
eksamensnivå, løst som A-besvarelse med all utregning **og** avsluttende kontekst-
tolkning), Typiske feil-`warning`, 6–12 øvinger med `solution` + `hints`, og en
`collapsible` med repetisjonsoppgaver. **Fordelings-/inferens-/regresjonskapitler
har i tillegg kontraktfestede blokker:** et **R-kode-lese-OG-skrive-blokk**
(`theorem`/prosedyre), en **«Riktig fordeling/df»-`warning`**, en **tabelloppslag-
mal** (`theorem`/prosedyre der z/t hentes), en **«Vis utregning»-`warning`** og en
**«Konkluder i kontekst»-`warning`**. Teorisporet (Del 4–5) har i tillegg en
kontraktfestet **«Symbolsk svar»-`warning`**.

---

### Del 0 — Eksamenskart, «vis utregning»/tabelloppslag-håndverket og den aktive R-modulen

#### Kapittel 0.1: Eksamenskartet: slik testes MET 1190

- **id:** `met1190-bi-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen (skriftlig skoleeksamen, 4 oppgaver / vekttall / A–F, formelhefte + z/t-tabeller + kalkulator uten innebygde fordelinger, R-flervalg som Oppgave 1), den faste 4-oppgavemalen, temafrekvensene, fraværsbildet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (5 sett + formelhefte/tabeller). Skal gjengi: (i) **formen**: én skriftlig skoleeksamen kl. 09 (emnekode MET 11901), **4 oppgaver (2025-format)** med **vekttall som summerer til 1,0** (deloppgaver teller likt innen hver oppgave), karakter **A–F**, ingen midtveiseksamen; (ii) **hjelpemidler**: **formelhefte + statistiske tabeller (z + t)** utdeles, kalkulator tillatt men **uten innebygde fordelinger** → **tabelloppslag forventes**; (iii) **den faste 4-oppgavemalen** (2025): **O1 (~0,10)** R-flervalg P1–P5 (ingen begrunnelse); **O2 (~0,25–0,30)** teoretisk/algebraisk (lineærkombinasjon `E/Var/Cov/Cor` symbolsk ELLER estimatorteori: forventningsretthet/konsistens/SGT); **O3 (~0,25–0,30)** inferens for én parameter (KI + test for $\mu$ ELLER estimering + KI + test for andel $p$); **O4 (~0,35, tyngst)** enkel lineær regresjon + korrelasjon (fra deskriptive mål eller rådatatabell); (iv) **formatutviklingen**: eldre sett hadde 5 oppgaver uten R-flervalg (O1 sannsynlighet/normal) — strukturelt utdatert, men nyttig for temabredde; kalibrer mot 2025-malen; (v) **uavhengige oppgaver** med hver sin kontekst (IQ/Mensa, E6-fart, søvn, boligpriser, hudkreft, BMI, lykke/inntekt, Trump-oppslutning) — ikke ett gjennomgående case; (vi) **temafrekvens-tabellen** (andel av 5 sett): regresjon/korrelasjon 100 %, hypotesetest for én parameter 100 %, teoretisk/algebraisk oppgave 100 %, R-flervalg 80 % (100 % moderne), KI 60 %, andelsinferens 60 %, normalfordeling 60 %, lineærkombinasjon 60 %, SGT 60 %, estimatorteori 40 %, sannsynlighetsregning 40 %, binomisk 20–40 %, algebraisk `SE`-utledning 20 %, Bayes 20 %; (vii) **fraværsbildet** — én setning: to-utvalgstester, kjikvadrat, diskret simultanfordeling, Poisson, multippel regresjon, ANOVA forekommer *aldri* (0/5) og er ikke på vedlegget → trygt fravær; (viii) **sensorens metaregler** (fra oppgaveinstruksjonene — `(verifiser)`): vis all utregning (formel fra vedlegget → tall → fordeling m/df → svar m/enhet); konkluder i kontekst; symbolsk svar der teksten sier «uten å anta noe om a,b,c»; R-flervalg uten begrunnelse; (ix) **karakterskillene** (se Innholdskontrakt).
- **Innholdskontrakt:** Sjangerkatalogen `A–R` presenteres som studentens sjekkliste med frekvens og typisk plassering (hvilken av de 4 oppgavene). Karakterskille-listen (fra analysen §4): **bestått-sjiktet** tar poeng på R-flervalget, avlesning av $\hat{\beta}$ fra utskrift, $\hat{p}=X/n$, enkel KI/test-innsetting; **midtsjiktet** fullfører full regresjonsoppgave ($SE(\hat{\beta}_2)$, $R^2$, koeffisient-test), korrekt KI + test for $\mu$/$p$ med riktig fordeling og df, normal-/binomisk-beregninger; **toppsjiktet** behersker den **teoretiske/algebraiske oppgaven** (symbolske lineærkombinasjoner, forventningsretthet-bevis, konsistens via SGT, algebraisk `SE`-utledning) + presis kontekst-tolkning. Leseplan: Del 4–5 (teorisporet) + Del 7–9 (inferens + regresjon) er «må perfekt»; Del 1, 3, 6 «må kunne»; Del 2 «bør kjenne». De to sporene (R + teori/bevis) markeres som gjennomgående. Avslutt med tidsstrategi: vekttall-styrt tidsbudsjett (regresjonen sist og tyngst; R-flervalget raskt og sikkert først).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 4 oppgaver med vekttall der O4 (regresjon, ~0,35) er tyngst og O1 (R-flervalg, ~0,10) lettest — sett opp et tidsbudsjett» og «hvorfor gir en korrekt utregnet testobservator uten kontekst-tolkning likevel svak uttelling på konklusjonsdelen?».
- **Typiske feil:** Metafeilene: bruke tid på temaer som ikke testes (to-utvalg, kjikvadrat, simultanfordeling, Poisson); øve kun regneteknikk og møte veggen på den teoretiske oppgaven (der toppkarakteren avgjøres); undervurdere R-flervalget (100 % moderne, lett å pugge seg til); tro at kalkulatoren erstatter tabelloppslag (tabellene deles ut fordi de forventes brukt).
- **Quiz: 10 · Flashcards: 12** (form, 4-oppgavemal, frekvenser, metaregler, fraværsbilde)

#### Kapittel 0.2: «Vis all utregning», tabelloppslag (z + t) og formelheftet

- **id:** `met1190-bi-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `met1190-bi-0-1`
- **kapitteltype:** teori (metaregel)
- **description:** Fagets føringsdisiplin operasjonalisert: hvordan skrive ut utregningen slik sensor krever, hvordan alltid avslutte med en kontekst-tolkning, hvordan slå opp kritiske verdier og kumulative sannsynligheter i de utdelte z- og t-tabellene (kalkulatoren har ingen innebygde fordelinger), og hvordan bruke formelheftet effektivt.
- **Eksamensbelegg:** Metaregel-kapittel bygget på setningene som gjentas på HVERT sett («korrekt matematisk fremstilling og bruk av notasjon vil bli vektlagt … full uttelling krever tilstrekkelig begrunnelse») og på at **z/t-tabeller deles ut** (tabelloppslag forventes). Fagets føringsdisiplin bærer poengene i alle sjangre. Prioritet: **PERFEKT** (håndverket bærer karakteren overalt).
- **Innholdskontrakt:** **(A) Føringsstandarden** (theorem-/prosedyre-blokk, gjenbrukes overalt): hvert løsningsforslag skrives som A-besvarelse — (1) skriv formelen fra vedlegget **eksplisitt ut** før innsetting; (2) sett inn tallene; (3) navngi **referansefordelingen (Z eller T) og frihetsgradene**; (4) slå opp kritisk/kumulativ verdi i tabellen; (5) tallsvar med **enhet**; (6) **tolkningssetning i kontekst**. Ett kontrastpar «samme statistikk, ulik føring» (en lav-uttellings- og en full-scorings-versjon med margnotater om hvor poengene sitter). **(B) Tabelloppslag-malen** (theorem-/prosedyre-blokk — KONTRAKTFESTET, gjenbrukes i alle inferenskapitler): **kumulativ standardnormaltabell** — slå opp $\Phi(z)=P(Z\le z)$, bruk symmetrien $P(Z\le -z)=1-\Phi(z)$, finn invers ($z$ for gitt haleareal) ved å lese tabellen «baklengs»; **t-tabell** — finn kritisk $t_{\alpha, df}$ (ensidig) eller $t_{\alpha/2, df}$ (tosidig) i raden for `df` og kolonnen for halearealet; standard $z$-kvantiler å kjenne (1,645 / 1,960 / 2,576 for 90/95/99 %). Presiser: kalkulatoren har INGEN innebygde fordelinger → alt hentes fra tabellen; ved p-verdi fra t-tabell kan man ofte bare avgrense (mellom to tabellverdier) — det er akseptabelt. **(C) Formelheftet** (gjennomgang av hva som står der: deskriptive formler; sannsynlighetsregneregler inkl. Bayes/total sannsynlighet; `E/Var/Cov/Cor`-regler; SGT; definisjoner av forventningsretthet/konsistens/effisiens; KI- og testformler for $p$ og $\mu$ (kjent/ukjent $\sigma$); enkel lineær regresjon (MKM, `SE`, `R²`, koeffisient-test)) og hva som IKKE står der og må velges/kunnes selv (hvilken fordeling og df; ensidig-halvering; $p_0$-i-standardfeilen; symbolsk-svar-disiplinen). Poenget: **velg riktig formel raskt, slå opp i tabellen, vis stegene**.
- **Oppgavesjangre:** Meta. Mønstereksempel: «Besvarelsen under regner ut riktig testobservator $t = 2{,}41$, men skriver bare "vi forkaster $H_0$" og oppgir en z-verdi fra minnet. Pek på de to føringsmanglene (feil fordeling/manglende df navngivning; ingen kontekst-tolkning), slå opp riktig kritisk $t$ i t-tabellen for df = 17, og skriv om til full uttelling.»
- **Typiske feil:** Oppgi svar uten utregning (gir ikke full uttelling); skrive bare «forkaster/forkaster ikke» uten kontekst; glemme å navngi fordeling/df; bruke $z$ der $t$ kreves; lete etter en kalkulatorfunksjon i stedet for å slå opp i den utdelte tabellen; lese t-tabellen i feil rad/kolonne (df/haleareal).
- **Quiz: 16 · Flashcards: 28** (føringsregler, tabelloppslag-mal z+t, formelhefte-innhold, df-valg, kontekst-tolkningsmal — flashcard-gull)

#### Kapittel 0.3: R som levende pensum: lese, SKRIVE og tolke R-kode (P1–P5-modulen)

- **id:** `met1190-bi-0-3` · **number:** 0.3 · **estimatedMinutes:** 55 · **prerequisites:** `met1190-bi-0-1`
- **kapitteltype:** teori (verktøymodul — aktiv R)
- **description:** Fagets tydeligste signatur: Oppgave 1 er alltid fem R-flervalg P1–P5 som tester at du kan lese, SKRIVE og tolke R-kode. Kapitlet etablerer R-grunnvokabularet (`mean`/`median`/`sd`/`length`/`sum`/indeksering/`for`-løkke), lærer deg å skrive kallene selv, og gir oversikten over fordelings- og testfunksjonene som utdypes senere i boka.
- **Eksamensbelegg:** R-flervalg (Oppgave 1, P1–P5) i **4/5 sett (80 %, 100 % i moderne format fra V2024)** — fagets fjerde bærebjelke og tydeligste enkeltsignatur (kontrast: MET 2920 har R IKKE på eksamen). Ingen begrunnelse (svar «P1, a.»). Prioritet: **PERFEKT** (aktiv R er en av fire bjelker).
- **Innholdskontrakt:** **(A) R-grunnvokabular som skal LESES OG SKRIVES** (theorem-/prosedyre-blokk — den aktive kjernen): `mean(x)` $= \frac{1}{n}\sum x_i$ (og hvordan skrive det for hånd: `(1/length(x))*sum(x)`); `median(x)` (partall: snitt av de to midterste `(x[n/2]+x[n/2+1])/2`; oddetall: `x[(n+1)/2]`); `sd(x)` = standardavvik (IKKE varians — `var(x)` er varians); `length(x)` = antall observasjoner $n$; `sum(x)`; **indeksering** `x[k]` (k-te element), `x[n/2]`; **`for`-løkke** som akkumulerer — sum (`s <- s + x[i]`) vs. produkt/fakultet (`p <- p * i`) — og hvordan gjenkjenne at en vektorisert `sum(x[k])` gir samme svar som en løkke. For hver: hva den gjør, hva den returnerer, OG hvordan skrive den selv. **(B) Oversikt over fordelings- og testfunksjonene** (utdypes i sine kapitler, her bare kartet): `dbinom(k,size,prob)` (nøyaktig `k`) vs. `pbinom` (kumulativt) → kap. 3.1; `pnorm(a,mean,sd,lower.tail=)` (OBS: `sd`, ikke varians) og `qnorm` → kap. 3.2; `pt(t,df,lower.tail=)` og `qt(α,df,lower.tail=)` (kritisk verdi, df = n − 1) → kap. 6.1/7.1; `prop.test(x,n,p=p0,alternative=,correct=FALSE)` → kap. 8.1; `t.test(x,mu=,alternative=,conf.level=)` → kap. 6.2/7.1; lesing av `lm()`-utskrift → kap. 9.2. **(C) Å skrive et helt P1–P5-svar** (prosedyre): hvordan velge riktig funksjon til riktig oppgave og riktig argument (`lower.tail`, `alternative`, `df`), og hvordan lese av en utskrift uten begrunnelse. Alle R-utskrifter og kodesnutter er **nyskrevne** (nye tall, nye variabelnavn).
- **Oppgavesjangre:** R. Mønstereksempel: «(P) Hva returnerer koden `x <- c(4, 9, 9, 12, 15); (x[2] + x[3]) / 2`, og hvilket deskriptivt mål tilsvarer det for dette datasettet? Skriv også et kall som gir standardavviket til `x`.»
- **Typiske feil:** Tro at `sd` gir varians (det gir standardavvik); `median` for partall = ett midtre element i stedet for snittet av de to midterste; blande fakultet (`p*i`) med sum-akkumulering i `for`-løkke; feil indeks (`x[n/2]` vs. `x[n/2+1]`); pugge kode i stedet for å kunne SKRIVE riktig kall.
- **Quiz: 28 · Flashcards: 24** (R-vokabular lese+skrive, funksjonskart, `for`/indeksering, `dbinom` vs `pbinom` — R er egen sjanger, høy quiz)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Deskriptiv statistikk *(prioritet: KUNNE — fundament for regresjon og R-flervalg)*

#### Kapittel 1.1: Sentraltendens, spredning og median

- **id:** `met1190-bi-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `met1190-bi-0-2`
- **kapitteltype:** teori
- **description:** Gjennomsnitt, varians, standardavvik og median regnet for hånd fra rådata med vedleggets formler — fundamentet under regresjonen og under R-flervalgets deskriptive motiver (median partall, `mean`/`sd`).
- **Eksamensbelegg:** Deskriptiv statistikk som egen tung oppgave 0/5, men **median-formelen dukker opp i R-flervalg** (`median` partall) og $\bar{x}$/$s_X$ er **forutsetningen for regresjonens deskriptive spor** (kap. 9.1). Formlene står på vedlegget. Prioritet: **KUNNE**.
- **Innholdskontrakt:** **Gjennomsnitt** $\bar{x} = \frac{1}{n}\sum x_i$; **varians** $s_X^2 = \frac{1}{n-1}\sum (x_i - \bar{x})^2$ (utvalgsvarians med $n-1$) og regne-effektiv form $\frac{1}{n-1}(\sum x_i^2 - n\bar{x}^2)$; **standardavvik** $s_X = \sqrt{s_X^2}$; **median** (oddetall $x_{(n+1)/2}$, partall $(x_{n/2}+x_{n/2+1})/2$) — alle på vedlegget (theorem-blokker, merket «(på vedlegget)»). Tolkning: standardavvik som typisk avvik i samme enhet; median vs. gjennomsnitt som formsignal. **R-kode-lese-OG-skrive-blokk (kontraktfestet):** `mean(x)`, `sd(x)`, `median(x)` — hva de gir, og hvordan skrive dem / regne dem for hånd (koblingen til R-flervalgets deskriptive motiver). Alt regnet for hånd med full føring på et lite datasett (8–12 observasjoner).
- **Oppgavesjangre:** A (+ R-kobling). Mønstereksempel: «Åtte målte reaksjonstider (i ms): 210, 225, 240, 240, 255, 268, 280, 300. Regn for hånd ut $\bar{x}$, $s_X$ og medianen, og skriv et R-kall som gir hvert av de tre målene.»
- **Typiske feil:** Bruke $n$ i stedet for $n-1$ i utvalgsvariansen; glemme å kvadrere avvikene; median for partall = ett midtre element (R-flervalg-felle); oppgi varians der oppgaven ber om standardavvik (enhetsfeil).
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.2: Kovarians og korrelasjon

- **id:** `met1190-bi-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `met1190-bi-1-1`
- **kapitteltype:** teori
- **description:** Utvalgskovarians og korrelasjon regnet for hånd fra parvise data, tolkning av $r$ som styrke og retning — direkte oppspill til regresjonens deskriptive spor og fortegnsregelen $r=\pm\sqrt{R^2}$.
- **Eksamensbelegg:** Kovarians/korrelasjon for hånd er inngangen til regresjonens deskriptive spor (kap. 9.1) og til fortegnsregelen $r=\pm\sqrt{R^2}$ (kap. 9.3). Formlene på vedlegget. Prioritet: **KUNNE** (fundament for 100 %-regresjonen).
- **Innholdskontrakt:** **Utvalgskovarians** $s_{XY} = \frac{1}{n-1}\sum (x_i - \bar{x})(y_i - \bar{y})$ (og regne-effektiv form $\frac{1}{n-1}(\sum x_i y_i - n\bar{x}\bar{y})$); **korrelasjon** $r_{XY} = \frac{s_{XY}}{s_X s_Y}$ — alle på vedlegget. Tolkning: $r$ er **dimensjonsløs** i $[-1,1]$; fortegnet = retning; $|r|$ = styrke på den **lineære** sammenhengen; skille $r$ (dimensjonsløs) fra $s_{XY}$ (enhetsavhengig). Kobling framover: $\hat{\beta}_2 = s_{XY}/s_X^2$ og $r=\pm\sqrt{R^2}$ (kap. 9). **Warning:** høy korrelasjon betyr ikke nødvendigvis årsak, og $r$ fanger bare lineær sammenheng.
- **Oppgavesjangre:** A. Mønstereksempel: «For seks byer er (gjennomsnittstemperatur $x$, iskremsalg $y$) gitt. Regn for hånd ut $s_{XY}$ og $r_{XY}$, og tolk fortegn og styrke.»
- **Typiske feil:** Forveksle korrelasjon (dimensjonsløs) og kovarians (enhetsavhengig); bruke $n$ i stedet for $n-1$; feil fortegn på $s_{XY}$; tro at $r=0$ betyr «ingen sammenheng» (kan være sterk ikke-lineær).
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (1.A sentraltendens og spredning for hånd + median partall, sjanger A; 1.B kovarians og korrelasjon + fortegn/styrke-tolkning, A; 1.C deskriptiv pakke ($\bar{x}$, $s_X$, $s_{XY}$, $r$) som oppspill til regresjon, A; 1.D R-flervalg på deskriptive motiver (`mean`/`median`/`sd`/`length`), R/A).

---

### Del 2 — Sannsynlighet og kombinatorikk *(prioritet: KJENNE — bredde/beredskap)*

#### Kapittel 2.1: Sannsynlighetsregning: regneregler, disjunkt og komplement

- **id:** `met1190-bi-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `met1190-bi-0-2`
- **kapitteltype:** teori
- **description:** Regnereglene fra vedlegget (addisjon, komplement, betinget, disjunkte hendelser) anvendt på hendelser — inkludert symbolske argument for disjunkte hendelser slik den eldre O1 og H2024 O2 krever.
- **Eksamensbelegg:** Sannsynlighetsregning (hendelser, $P(A\cup B)$, betinget, disjunkt/komplement) i **2/5 sett (40 %)** — eldre O1abc, H2024 O2 (inkl. disjunkt-bevis). Bruker regneregel-vedlegget. Prioritet: **KJENNE** (men komplett — kan komme igjen).
- **Innholdskontrakt:** **Regneregler** (theorem-blokker, alle på vedlegget): addisjon $P(A\cup B)=P(A)+P(B)-P(A\cap B)$; komplement $P(A^c)=1-P(A)$; betinget $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$; multiplikasjon $P(A\cap B)=P(A\mid B)P(B)$; **disjunkte hendelser** ($A\cap B=\emptyset \Rightarrow P(A\cap B)=0$, og $P(A\cup B)=P(A)+P(B)$). Anvendelse på **standardnormale hendelser** (f.eks. $A=\{Z>1\}$, $B=\{Z<-2\}$ — avgjør $P(A\cap B)$, $P(A\cup B)$, betinget $P(B^c\mid A^c)$) med tabelloppslag. **Symbolsk argument** for at to hendelser er disjunkte (eldre O1, H2024 O2). Kompakt kapittel — bruk og enkle bevis, ikke tunge utledninger.
- **Oppgavesjangre:** B. Mønstereksempel: «La $Z$ være standardnormal, $A=\{Z>1{,}5\}$, $B=\{Z<-0{,}5\}$. (a) Er $A$ og $B$ disjunkte? Begrunn. (b) Finn $P(A)$, $P(B)$ og $P(A\cup B)$ ved tabelloppslag. (c) Finn $P(A^c\cap B^c)$.»
- **Typiske feil:** Legge sammen $P(A)+P(B)$ uten å trekke fra $P(A\cap B)$ når hendelsene ikke er disjunkte; betinge feil vei; glemme komplementregelen; ikke begrunne disjunkthet symbolsk der teksten ber om det.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Betinget sannsynlighet, total sannsynlighet, Bayes og kombinatorikk

- **id:** `met1190-bi-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `met1190-bi-2-1`
- **kapitteltype:** teori
- **description:** Loven om total sannsynlighet og Bayes' setning fra vedlegget (lett berørt i arkivet, men på heftet) pluss kombinatorikk $\binom{n}{k}$ som forberedelse til binomisk fordeling.
- **Eksamensbelegg:** Betinget sannsynlighet/Bayes som regneoppgave i **1/5 (20 %)** — lett berørt (eldre O1c, H2024 O2c); på vedlegget, men sjelden tung. Kombinatorikk trengs til binomisk (kap. 3.1). Prioritet: **KJENNE** (bredde/beredskap).
- **Innholdskontrakt:** **Loven om total sannsynlighet** $P(A)=P(A\mid B)P(B)+P(A\mid B^c)P(B^c)$; **Bayes' setning** $P(B\mid A)=\frac{P(A\mid B)P(B)}{P(A)}$ med total sannsynlighet i nevneren — presentert som «snu betingingen» (theorem-blokker, på vedlegget); uavhengighet $P(A\cap B)=P(A)P(B)$. **Kombinatorikk** $\binom{n}{k}=\frac{n!}{k!(n-k)!}$ (på vedlegget) — bro til binomisk. Tre-diagram/kontingenstabell som løsningsverktøy. Kompakt — bruk, ikke utledning. Anvendt innramming (test/kvalitetskontroll).
- **Oppgavesjangre:** B. Mønstereksempel: «En hurtigtest oppdager 92 % av smittede og gir falsk positiv hos 4 % av friske. 3 % av en gruppe er smittet. En person tester positivt — hva er sannsynligheten for at personen faktisk er smittet? Kommenter tallet.»
- **Typiske feil:** Betinge feil vei ($P(A\mid B)$ brukt som $P(B\mid A)$); glemme total sannsynlighet i nevneren i Bayes; blande $P(A\cap B)$ og $P(A\mid B)$; feil i $\binom{n}{k}$.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 2:** 4 prøver (2.A regneregler + disjunkt/komplement på standardnormale hendelser, sjanger B; 2.B betinget sannsynlighet og multiplikasjon, B; 2.C total sannsynlighet og Bayes med tre-diagram, B; 2.D kombinatorikk $\binom{n}{k}$ som oppspill til binomisk, B/C).

---

### Del 3 — Diskrete og kontinuerlige fordelinger; normalfordeling *(prioritet: KUNNE)*

#### Kapittel 3.1: Diskrete stokastiske variabler og binomisk fordeling

- **id:** `met1190-bi-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `met1190-bi-2-2`
- **kapitteltype:** teori
- **description:** Diskret forventning og varians, binomisk fordeling fra forutsetninger til $P(X=k)$ og $E=np$, $\text{Var}=np(1-p)$ — med R-flervalgets `dbinom` vs. `pbinom`-skille.
- **Eksamensbelegg:** Binomisk fordeling substantivt i **1/5 (V2024 O3c: nøyaktig 1 av 5)**, ellers som R-flervalg (`dbinom`/`pbinom`) i flere sett. Diskret $E$/$\text{Var}$ er fundament. Prioritet: **KUNNE**.
- **Innholdskontrakt:** Diskret **forventning** $E(X)=\sum x_i P(x_i)$ og **varians** $\text{Var}(X)=\sum (x_i-E(X))^2 P(x_i)$ (og regneformelen $E(X^2)-[E(X)]^2$); **binomisk** forutsetninger (fast $n$ uavhengige forsøk, to utfall, konstant $p$) og $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$ (på vedlegget); $E(X)=np$, $\text{Var}(X)=np(1-p)$; komplement-omskriving $P(X\ge k)=1-P(X\le k-1)$. **R-kode-lese-OG-skrive-blokk (kontraktfestet):** `dbinom(k, size=n, prob=p)` = nøyaktig $k$; `pbinom(k, size=n, prob=p)` = kumulativt $P(X\le k)$; hvordan skrive begge, og hvordan bruke `1 - pbinom(k-1, ...)` for $P(X\ge k)$ — dette er en fast R-flervalg-felle.
- **Oppgavesjangre:** C (+ R). Mønstereksempel: «Av fem uavhengige komponenter svikter hver med sannsynlighet 0,15. (a) Hva er sannsynligheten for at nøyaktig 1 svikter? (b) At minst 1 svikter? (c) Skriv R-kallet for hver, og forklar forskjellen på `dbinom` og `pbinom`.»
- **Typiske feil:** `dbinom` vs. `pbinom` forvekslet (nøyaktig $k$ vs. kumulativt); $P(X\ge k)$ uten komplement-omskriving; regne $E(X^2)$ som $[E(X)]^2$; glemme å kvadrere i variansen; feil i $\binom{n}{k}$.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 3.2: Normalfordelingen: standardisering, tabelloppslag og invers persentil

- **id:** `met1190-bi-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `met1190-bi-3-1`
- **kapitteltype:** teori
- **description:** Standardisering $Z=(X-\mu)/\sigma$, avlesning av den utdelte standardnormaltabellen (ingen kalkulatorfordeling) og invers persentil for «topp x %»-spørsmål — med R-flervalgets `pnorm`/`qnorm` (og `sd`-fellen).
- **Eksamensbelegg:** Normalfordeling ($P(X>a)$, invers persentil) i **3/5 sett (60 %)** — eldre O1, V2024 O3 (IQ/Mensa), V2025 O2d (+ R-flervalg P2 i flere sett). Prioritet: **KUNNE**.
- **Innholdskontrakt:** Normalfordelingen kvalitativt (symmetri, klokkeform); **standardisering** $Z=\frac{X-\mu}{\sigma}$ (theorem-blokk); $P(X>a)$, $P(a<X<b)$ via **tabelloppslag** i standardnormaltabellen (symmetriregelen $P(Z\le -z)=1-\Phi(z)$); **invers persentil**: «blant de 2 % mest intelligente» → finn $z$ fra tabellen (baklengs), deretter $x=\mu+z\sigma$. **Tabelloppslag-mal (kontraktfestet)** gjenbrukt fra kap. 0.2. **R-kode-lese-OG-skrive-blokk (kontraktfestet):** `pnorm(a, mean=μ, sd=σ, lower.tail=)` for $P(X\le a)$ / $P(X>a)$ (OBS: `sd` = standardavvik, IKKE varians — fast R-flervalg-felle); `qnorm(p, mean, sd, lower.tail=)` for invers; hvordan skrive begge. Anvendt: IQ, inntekt, testscore.
- **Oppgavesjangre:** D (+ R). Mønstereksempel: «IQ er normalfordelt med $\mu=100$, $\sigma=15$. (a) Hva er sannsynligheten for IQ over 130? (b) Hvilken IQ overstiges av de 2 % mest intelligente? (c) Skriv R-kall for begge, og forklar hvorfor `pnorm(130, 100, 225)` er feil.»
- **Typiske feil:** Sette inn variansen der `sd`/$\sigma$ skal stå (glemme roten); slurve med retningen ($P(X>a)$ vs. $P(X<a)$); glemme å gange $z$ med $\sigma$ og legge til $\mu$ i invers; lete etter kalkulatorfordeling i stedet for tabellen; feil `lower.tail`.
- **Quiz: 24 · Flashcards: 18**

#### Kapittel 3.3: Kontinuerlige fordelinger og tetthetsfunksjoner

- **id:** `met1190-bi-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `met1190-bi-3-2`
- **kapitteltype:** teori
- **description:** Hva en tetthetsfunksjon er, hvordan evaluere den i et punkt og koblingen sannsynlighet = areal — grunnlaget for estimatorteoriens tetthetsevaluering (kap. 5) og for at $\bar{X}$/median-estimatorer er kontinuerlige.
- **Eksamensbelegg:** Tetthetsfunksjon oppgis i de teoretiske oppgavene (H2025 O2: evaluer tetthet i et punkt for en median-estimator via SGT). Ikke egen tung oppgave, men **grunnlag for estimatorteorien** (Del 5). Prioritet: **KUNNE** (fundament for teorisporet).
- **Innholdskontrakt:** Kontinuerlig stokastisk variabel; **tetthetsfunksjon** $f(x)$ (ikke-negativ, integrerer til 1); sannsynlighet som **areal** $P(a<X<b)=\int_a^b f(x)\,dx$ (konseptuelt — tunge integraler er ikke pensum); **evaluere tetthet i et punkt** $f(x_0)$ (theorem-blokk — dette er det H2025 O2 krever); forventning/varians for kontinuerlig variabel konseptuelt; normaltettheten som eksempel. Kobling: at en estimator (f.eks. $\bar{X}$ eller en median) er kontinuerlig og tilnærmet normal via SGT (bro til kap. 5.2). Kompakt — konseptuelt fundament, ikke integralregning.
- **Oppgavesjangre:** D (+ bro til F). Mønstereksempel: «En estimator $\hat{\theta}$ er tilnærmet normalfordelt med tetthet $f(t)=\frac{1}{\sqrt{2\pi}\,s}e^{-(t-\theta)^2/(2s^2)}$. Evaluer tettheten i punktet $t=\theta$, og forklar hva verdien representerer.»
- **Typiske feil:** Tro at $f(x_0)$ er en sannsynlighet (det er en tetthet — sannsynlighet er areal); glemme normeringskonstanten ved evaluering; forveksle tetthet og kumulativ fordeling.
- **Quiz: 14 · Flashcards: 14**

**Prøve-kvote Del 3:** 4 prøver (3.A diskret $E$/$\text{Var}$ + binomisk $P(X=k)$/$P(X\ge k)$, sjanger C; 3.B normalfordeling standardisering + $P(X>a)$ ved tabelloppslag, D; 3.C invers persentil «topp x %», D; 3.D R-flervalg fordelinger (`dbinom`/`pbinom`/`pnorm`/`qnorm` + `sd`-fellen), R/C/D).

---

### Del 4 — Lineærkombinasjoner: E, Var, Cov, Cor (symbolsk) *(prioritet: PERFEKT — del av 100 % teoretisk oppgave; TEORISPOR)*

#### Kapittel 4.1: Regneregler for forventning, varians, kovarians og korrelasjon

- **id:** `met1190-bi-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `met1190-bi-3-3`
- **kapitteltype:** teori
- **description:** Vedleggets `E/Var/Cov/Cor`-regler med bilineæritet: hvordan $E$, $\text{Var}$, $\text{Cov}$ og $\rho$ oppfører seg under lineære kombinasjoner, og hvorfor kryssledd faller når variablene er uavhengige — verktøykassen for den symbolske teoretiske oppgaven.
- **Eksamensbelegg:** Grunnlaget for lineærkombinasjonsoppgaven (60 %, en undertype av den 100 %-tilbakevendende teoretiske oppgaven). Reglene på vedlegget. Prioritet: **PERFEKT** (teorisporets verktøykasse).
- **Innholdskontrakt:** **Regneregler** (theorem-blokker, alle på vedlegget): $E(aX)=aE(X)$, $E(X+Y+Z)=E(X)+E(Y)+E(Z)$; $\text{Var}(aX)=a^2\text{Var}(X)$; $\text{Var}(aX+bY+cZ)=a^2\text{Var}(X)+b^2\text{Var}(Y)+c^2\text{Var}(Z)+2ab\,\text{Cov}(X,Y)+2ac\,\text{Cov}(X,Z)+2bc\,\text{Cov}(Y,Z)$; **bilineæritet** $\text{Cov}(aX,bY)=ab\,\text{Cov}(X,Y)$, $\text{Cov}(X+Z,Y)=\text{Cov}(X,Y)+\text{Cov}(Z,Y)$; $\rho(X,Y)=\frac{\text{Cov}(X,Y)}{\text{SD}(X)\,\text{SD}(Y)}$. **Nøkkelmerknad (theorem/warning):** uavhengige $\Rightarrow \text{Cov}=0$ og $E(XY)=E(X)E(Y)$, men **ikke omvendt**; ved uavhengige $Z_i$ faller alle kryssledd. Trening i å anvende reglene stegvis på en lineærkombinasjon.
- **Oppgavesjangre:** E (fundament). Mønstereksempel: «$Z_1, Z_2, Z_3$ er uavhengige med $E(Z_i)=0$, $\text{Var}(Z_i)=1$. La $W=2Z_1-Z_2+3Z_3$. Bruk regnereglene til å finne $E(W)$ og $\text{Var}(W)$, og forklar hvilke ledd som faller bort og hvorfor.»
- **Typiske feil:** Glemme kryssleddene $2ab\,\text{Cov}$ i $\text{Var}$ av en sum når variablene IKKE er uavhengige; behandle $\text{Var}$ som lineær ($\text{Var}(aX)=a\text{Var}(X)$ — feil, det er $a^2$); slutte uavhengighet fra $\text{Cov}=0$; forveksle $\text{Cov}$ og $\rho$.
- **Quiz: 20 · Flashcards: 24** (regneregler — flashcard-gull for teorisporet)

#### Kapittel 4.2: Lineærkombinasjoner av uavhengige variabler — symbolske bevis

- **id:** `met1190-bi-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `met1190-bi-4-1`
- **kapitteltype:** teori (+ drill-innslag)
- **description:** Den symbolske teoretiske oppgaven: gitt $X=aZ_1+bZ_2$, $Y=cZ_2$ med uavhengige standardnormale $Z_i$, vis $E$, $\text{Var}$, $\text{Cov}$ og $\rho$ SYMBOLSK «uten å anta noe om $a,b,c$» — og deretter, med konkrete tall, spesifiser fordelingen til $Y$ og regn sannsynligheter.
- **Eksamensbelegg:** Lineærkombinasjon av uavhengige variabler i **3/5 sett (60 %)** — eldre O1d, V2024 O2, V2025 O2; en undertype av den 100 %-teoretiske oppgaven. Prioritet: **PERFEKT** (teorisporets første klimaks; toppkarakter-relevant).
- **Innholdskontrakt:** **Symbolsk utledning** (theorem-/prosedyre-blokk): gitt $X=aZ_1+bZ_2$, $Y=cZ_2$ med uavhengige standardnormale $Z_i$, vis (med bilineæritet + kryssledd = 0): $E(X)=0$, $E(Y)=0$, $\text{Var}(X)=a^2+b^2$, $\text{Var}(Y)=c^2$, $\text{Cov}(X,Y)=bc$, $\rho(X,Y)=\frac{bc}{|c|\sqrt{a^2+b^2}}=\frac{b}{\sqrt{a^2+b^2}}\cdot\text{sgn}(c)$ — alt med **bokstaver**, «uten å anta noe om $a,b,c$». **Kontraktfestet `warning` «Symbolsk svar»:** svaret skal stå symbolsk; sett ikke inn tall før teksten ber om det. Deretter **numerisk del**: med oppgitte tall, spesifiser at $Y=cZ_2$ er **normalfordelt** ($Y\sim N(0,c^2)$), regn $P(-1\le Y\le 2)$ ved standardisering + tabelloppslag, og regn $\rho$ numerisk. **Kort drill-innslag** (4–6 varianter av samme mønster med ulike koeffisientstrukturer).
- **Oppgavesjangre:** E. Mønstereksempel: «$Z_1, Z_2$ er uavhengige standardnormale. La $X=3Z_1+4Z_2$ og $Y=4Z_2$. (a) Vis symbolsk $\text{Var}(X)$, $\text{Var}(Y)$, $\text{Cov}(X,Y)$ og $\rho(X,Y)$ uten å anta noe om koeffisientene. (b) Angi fordelingen til $Y$ og regn $P(-2\le Y\le 6)$ ved tabelloppslag.»
- **Typiske feil:** Sette inn tall for tidlig der svaret skal være symbolsk (#14 i analysen); glemme kryssledd / feil bilineæritet; feil fortegn/absoluttverdi i $\rho$; ikke gjenkjenne at en lineærkombinasjon av normale er normal; glemme tabelloppslag i den numeriske delen.
- **Quiz: 24 · Flashcards: 20**

**Prøve-kvote Del 4:** 4 prøver (4.A regneregler $E$/$\text{Var}$ under lineærkombinasjon, sjanger E; 4.B $\text{Cov}$/$\rho$ med bilineæritet — kryssledd faller ved uavhengighet, E; 4.C full symbolsk lineærkombinasjon «uten å anta noe om a,b,c», E; 4.D numerisk del — fordeling til $Y$ + $P(a\le Y\le b)$ ved tabelloppslag, E/D).

---

### Del 5 — Estimatorteori: forventningsretthet, konsistens og SGT *(prioritet: PERFEKT — del av 100 % teoretisk oppgave; TOPPKARAKTER)*

#### Kapittel 5.1: Estimatorer, forventningsretthet og forventningsretthet-bevis

- **id:** `met1190-bi-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `met1190-bi-4-1`
- **kapitteltype:** teori
- **description:** Hva en estimator er, definisjonen av forventningsretthet ($E(\hat{\theta})=\theta$), og det sentrale beviset $E(S_X^2)=\sigma^2$ via omskriving av variansformelen og oppgitte hjelperesultater — kjernen i den teoretiske oppgaven der toppkarakteren avgjøres.
- **Eksamensbelegg:** Estimatorteori (forventningsretthet) i **2/5 sett (40 %)** — H2024 O3 ($E(S_X^2)=\sigma^2$); en undertype av den 100 %-teoretiske oppgaven, og **der toppkarakteren avgjøres** (analysen §4). Definisjonene på vedlegget. Prioritet: **PERFEKT** (toppkarakter-spor).
- **Innholdskontrakt:** **Estimator** vs. estimat; punktestimatorene $\bar{X}$ for $\mu$ og $S_X^2$ for $\sigma^2$. **Forventningsretthet** $E(\hat{\theta})=\theta$ (theorem-blokk, definisjon på vedlegget); vis $E(\bar{X})=\mu$. **Hovedbeviset (theorem-/prosedyre-blokk — bevisspor):** $E(S_X^2)=\sigma^2$ via omskriving $S_X^2=\frac{1}{n-1}(\sum X_i^2 - n\bar{X}^2)$ og de oppgitte hjelperesultatene $E(X_i^2)=\sigma^2+\mu^2$ og $E(\bar{X}^2)=\frac{\sigma^2}{n}+\mu^2$ — steg for steg, med intuisjon per steg (hvorfor $n-1$ og ikke $n$). **Kontraktfestet `warning` «Symbolsk svar»** (beviset står med bokstaver). Bruk nøyaktig algebra og vedleggets definisjoner.
- **Oppgavesjangre:** F. Mønstereksempel: «$X_1,\dots,X_n$ er uavhengige med $E(X_i)=\mu$, $\text{Var}(X_i)=\sigma^2$, og du får oppgitt $E(X_i^2)=\sigma^2+\mu^2$ og $E(\bar{X}^2)=\frac{\sigma^2}{n}+\mu^2$. Vis at $S_X^2=\frac{1}{n-1}\sum(X_i-\bar{X})^2$ er forventningsrett for $\sigma^2$, og forklar hvorfor nevneren er $n-1$.»
- **Typiske feil:** Miste ledd i omskrivingen av $S_X^2$; ikke bruke de oppgitte $E(X_i^2)$/$E(\bar{X}^2)$; bruke $n$ i stedet for $n-1$ og «bevise» feil resultat; sette inn tall der beviset skal være symbolsk; forveksle estimator (tilfeldig) og estimat (tall).
- **Quiz: 22 · Flashcards: 28** (definisjoner + bevissteg — flashcard-gull, toppkarakter-spor)

#### Kapittel 5.2: Sentralgrenseteoremet, konsistens og effisiens

- **id:** `met1190-bi-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `met1190-bi-5-1`, `met1190-bi-3-3`
- **kapitteltype:** teori
- **description:** Sentralgrenseteoremet som eksplisitt argument, definisjonen av konsistens ($\hat{\theta}\to\theta$ når $n\to\infty$) og effisiens, og hvordan vise at en estimator (f.eks. en median) er tilnærmet normal via SGT og konsistent via forventningsretthet + $\text{Var}\to 0$.
- **Eksamensbelegg:** SGT (eksplisitt bruk) i **3/5 sett (60 %)** — V2024 O2b (vis $Z\sim$ normal), H2025 O2 (median-estimator via SGT). Konsistens i **2/5 (H2025 O2c)**. En undertype av den 100 %-teoretiske oppgaven. Prioritet: **PERFEKT** (toppkarakter-spor).
- **Innholdskontrakt:** **Sentralgrenseteoremet** (theorem-blokk, på vedlegget): $\sum X_i \sim N(n\mu, n\sigma^2)$ og $\bar{X}\sim N(\mu, \sigma^2/n)$ for stor $n$, uansett underliggende fordeling; betingelsene (uavhengige, endelig varians, stor $n$). Bruk til å **argumentere** for at en estimator er tilnærmet normal (V2024 O2b, H2025 O2). **Konsistens** $\hat{\theta}\to\theta$ når $n\to\infty$ (theorem-blokk, definisjon på vedlegget): vis via **forventningsretthet + $\text{Var}(\hat{\theta})\to 0$** (standardfeilen krymper). **Effisiens** = minst varians blant forventningsrette estimatorer (definisjon). **Median-estimator-argumentet** (H2025-typen): en median er tilnærmet normal via SGT, tettheten evalueres i et punkt (kobling til kap. 3.3), og konsistens argumenteres. **Kontraktfestet `warning` «Symbolsk svar»** + presis bruk av definisjonene.
- **Oppgavesjangre:** F. Mønstereksempel: «En estimator $\hat{\theta}_n$ har $E(\hat{\theta}_n)=\theta$ og $\text{Var}(\hat{\theta}_n)=\frac{k}{n}$ for en konstant $k>0$. (a) Er $\hat{\theta}_n$ forventningsrett? (b) Argumenter for at $\hat{\theta}_n$ er konsistent. (c) Bruk SGT til å angi den tilnærmede fordelingen for stor $n$.»
- **Typiske feil:** Blande fordelingen til $X$ og til $\bar{X}$; bruke SGT ukritisk ved liten $n$; hevde konsistens uten å vise at variansen går mot 0 (eller uten forventningsretthet); forveksle effisiens og forventningsretthet; glemme SGT-betingelsene.
- **Quiz: 22 · Flashcards: 28** (SGT-betingelser, konsistens/effisiens-definisjoner, bevissteg — flashcard-gull)

#### Kapittel 5.3: Drill: den teoretiske oppgaven

- **id:** `met1190-bi-5-3` · **number:** 5.3 · **estimatedMinutes:** 70 · **prerequisites:** `met1190-bi-5-2`, `met1190-bi-4-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på den 100 %-tilbakevendende teoretiske oppgaven i BEGGE undertyper — symbolsk lineærkombinasjon ($E$/$\text{Var}$/$\text{Cov}$/$\rho$) OG estimatorteori (forventningsretthet-bevis, konsistens via SGT, tetthetsevaluering) — med full symbolsk føring. Der toppkarakteren avgjøres.
- **Eksamensbelegg:** Dekker den teoretiske oppgaven (Oppgave 2, 100 %) samlet: undertype E (lineærkombinasjon 60 %) og undertype F (estimatorteori 40 %, SGT 60 %). Prioritet: **PERFEKT** (toppkarakter; kryssgående i teorisporet).
- **Innholdskontrakt:** **Løsningsoppskrift (DNA-drillformat):** for lineærkombinasjon — 1) skriv variablene som lineærkombinasjon av uavhengige $Z_i$; 2) bruk bilineæritet; 3) la kryssledd falle (uavhengighet); 4) svar SYMBOLSK; 5) numerisk del ved tabelloppslag. For estimatorteori — 1) skriv estimatoren; 2) vis forventningsretthet via omskriving + oppgitte hjelperesultater; 3) vis konsistens via $\text{Var}\to 0$; 4) bruk SGT for tilnærmet fordeling; 5) evaluer tetthet der relevant. **To gjennomregnede eksamenscase** med sensor-margnotater (én ren lineærkombinasjon, én ren estimatorbevis/SGT) — hvor poengene sitter, at symbolsk svar kreves, og at algebra-slurv koster. 8–12 oppgaver på eksamensnivå fordelt på begge undertyper.
- **Oppgavesjangre:** E + F. Mønstereksempel (F): «$X_1,\dots,X_n$ uavhengige med $E(X_i)=\mu$, $\text{Var}(X_i)=\sigma^2$. Estimatoren $\tilde{\mu}=\frac{1}{n}\sum X_i$. (a) Vis forventningsretthet. (b) Vis konsistens. (c) Angi fordelingen for stor $n$ (SGT) og skriv standardfeilen.»
- **Typiske feil:** Hele teorisporets feilkatalog: tall for tidlig (symbolsk svar), tapte kryssledd, feil bilineæritet, miste ledd i $S_X^2$-omskrivingen, konsistens uten $\text{Var}\to 0$, SGT uten betingelser, forveksle estimator og estimat.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A forventningsretthet-definisjon + $E(\bar{X})=\mu$/$E(S_X^2)=\sigma^2$-bevis, sjanger F; 5.B konsistens via forventningsretthet + $\text{Var}\to 0$, F; 5.C SGT-argument + tetthetsevaluering (median-estimator), F/D; 5.D full teoretisk oppgave på eksamensnivå (lineærkombinasjon eller estimatorbevis), E/F).

---

### Del 6 — Estimering og konfidensintervall for μ *(prioritet: KUNNE→PERFEKT — grunnlaget for 100 %-testen)*

#### Kapittel 6.1: Estimering, t-fordelingen, df og standardfeil

- **id:** `met1190-bi-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `met1190-bi-5-2`
- **kapitteltype:** teori
- **description:** Punktestimatet $\bar{x}$ for $\mu$, hvorfor vi bruker t-fordelingen (ikke z) når $\sigma$ er ukjent, frihetsgrader df = n − 1, standardfeilen $s_X/\sqrt{n}$, og kritisk t-verdi ved tabelloppslag — grunnlaget for både KI og test for gjennomsnittet.
- **Eksamensbelegg:** Grunnlaget for KI for $\mu$ (60 %) og hypotesetest for $\mu$ (del av 100 %). t-fordeling som eksplisitt begrep, df = n − 1, tabelloppslag. Prioritet: **PERFEKT** (bærebjelke i inferenskjernen).
- **Innholdskontrakt:** Punktestimatet $\bar{x}$ for $\mu$; hvordan regne $\bar{x}$ og $s_X^2=\frac{\sum(x_i-\bar{x})^2}{n-1}$ fra oppgitte $\sum x_i$ og $\sum(x_i-\bar{x})^2$. **Hvorfor t og ikke z:** når $\sigma$ er ukjent og erstattes av $s_X$, følger $T=\frac{\bar{X}-\mu}{s_X/\sqrt{n}}$ en **t-fordeling med df = n − 1** (theorem-blokk); tyngre haler enn normalen. **Standardfeilen** $s_X/\sqrt{n}$. **Kritisk t-verdi $t_{\alpha/2, n-1}$ ved tabelloppslag** i t-tabellen (kontraktfestet tabelloppslag-mal). **Kontraktfestet «Riktig fordeling/df»-`warning`:** t (ikke z) for $\mu$ med ukjent $\sigma$, df = n − 1. **R-kode-lese-OG-skrive-blokk:** `qt(p, df, lower.tail=)` for kritisk verdi; `t.test(x, ...)` som verktøy (utdypes i kap. 7.1).
- **Oppgavesjangre:** G (fundament) + R. Mønstereksempel: «Et utvalg på $n=25$ har $\sum x_i=1150$ og $\sum(x_i-\bar{x})^2=864$. Regn $\bar{x}$ og $s_X$, forklar hvorfor vi bruker t-fordelingen og med hvilke df, og finn kritisk $t_{0{,}025, 24}$ ved tabelloppslag.»
- **Typiske feil:** Bruke z i stedet for t for $\mu$ med ukjent $\sigma$; feil df (n i stedet for n − 1); bruke $s_X$ i stedet for $s_X/\sqrt{n}$ som standardfeil; lese feil rad/kolonne i t-tabellen; blande populasjons-$\sigma$ og utvalgs-$s_X$.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.2: Konfidensintervall for μ

- **id:** `met1190-bi-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `met1190-bi-6-1`
- **kapitteltype:** teori
- **description:** Bygg $\bar{x}\pm t_{\alpha/2,n-1}\cdot s_X/\sqrt{n}$ med kritisk verdi ved tabelloppslag, tolk intervallet i kontekst, og drøft bredden — inferenskjernens estimerings-halvdel.
- **Eksamensbelegg:** Konfidensintervall for $\mu$ i **3/5 sett (60 %)** — eldre O3, H2024 O4, V2025-relaterte: t-fordeling, $\sigma$ ukjent, alltid med kommentar. Prioritet: **PERFEKT** (signaturferdighet i inferenskjernen).
- **Innholdskontrakt:** **KI for $\mu$** $\bar{x}\pm t_{\alpha/2,n-1}\cdot\frac{s_X}{\sqrt{n}}$ (theorem-blokk, på vedlegget); regn nedre/øvre grense med full føring og kritisk verdi ved **tabelloppslag**. **Tolkning i kontekst** (kontraktfestet «Konkluder i kontekst»-`warning`): «vi er 95 % konfidente på at $\mu$ ligger mellom … og …» — presiser at det er intervallet som varierer, ikke $\mu$. **Bredde-drøfting:** bredden $=2\cdot t_{\alpha/2,n-1}\cdot s_X/\sqrt{n}$; lavere konfidensnivå → smalere; større $n$ → smalere; høyere $s_X$ → bredere. Nevn kort KI med kjent $\sigma$ ($z$ i stedet for $t$) som variant (på vedlegget). Avsluttende tolkningssetning i kontekst.
- **Oppgavesjangre:** G. Mønstereksempel: «Med $\bar{x}=46{,}0$, $s_X=5{,}9$, $n=25$: lag et 95 %-KI for gjennomsnittet ved tabelloppslag, tolk det i kontekst, og forklar hva som skjer med bredden ved 99 % og ved dobbelt så stort utvalg.»
- **Typiske feil:** Bruke z i stedet for t; feil df; regne SE som $s_X$ i stedet for $s_X/\sqrt{n}$; feil tabelloppslag; ingen kontekst-tolkning; si at høyere konfidensnivå gir smalere intervall (motsatt).
- **Quiz: 20 · Flashcards: 20**

**Prøve-kvote Del 6:** 4 prøver (6.A $\bar{x}$/$s_X$ fra $\sum x_i$/$\sum(x_i-\bar{x})^2$ + hvorfor t og df, sjanger G; 6.B kritisk t-verdi ved tabelloppslag + standardfeil, G; 6.C KI-konstruksjon for $\mu$ med full føring, G; 6.D full KI-oppgave med bredde-drøfting og kontekst-tolkning, G).

---

### Del 7 — Hypotesetest for gjennomsnitt μ *(prioritet: PERFEKT — del av 100 %)*

#### Kapittel 7.1: Hypotesetestens anatomi og t-test for μ

- **id:** `met1190-bi-7-1` · **number:** 7.1 · **estimatedMinutes:** 65 · **prerequisites:** `met1190-bi-6-1`
- **kapitteltype:** teori
- **description:** Hele test-maskineriet: $H_0$/$H_1$, testobservator $t=(\bar{x}-\mu_0)/(s_X/\sqrt{n})$ med df = n − 1, forkastning via kritisk verdi (tabelloppslag) ELLER p-verdi, ensidig vs. tosidig etter formuleringen, og konklusjon i kontekst — halvparten av den 100 %-tilbakevendende inferensoppgaven.
- **Eksamensbelegg:** Hypotesetest for én parameter i **5/5 sett (100 %)**; $\mu$-varianten i flere (eldre O3, H2024 O4 [E6-fart], V2024 O4 [søvn, ensidig]). t-test, df = n − 1, ensidig («overskrider fartsgrensen» → $H_1: \mu>\mu_0$; «sover for lite» → $H_1: \mu<\mu_0$) og tosidig; p-verdi OG kritisk verdi. Prioritet: **PERFEKT** (fagets hovedmodul).
- **Innholdskontrakt:** **Testoppskriften** (theorem-/prosedyre-blokk, gjenbrukes i 8.1, 9.3): 1) sett opp $H_0$ og $H_1$; 2) velg $\alpha$; 3) regn testobservatoren $t=\frac{\bar{x}-\mu_0}{s_X/\sqrt{n}}$, df = n − 1; 4) finn kritisk verdi ELLER p-verdi fra **t-tabellen** (tabelloppslag); 5) **konkluder i kontekst**. **Ensidig vs. tosidig** styres av formuleringen (kontraktfestet regel: «overskrider»/«høyere enn»/«mindre enn» → ensidig; «forskjellig fra» → tosidig); to beslutningsveier (p-verdi < $\alpha$ → forkast; eller sammenlign observator med kritisk $t_\alpha$/$t_{\alpha/2}$). **Kontraktfestede blokker:** «Riktig fordeling/df»-`warning` (t, df = n − 1); tabelloppslag-mal; «Vis utregning»-`warning`; «Konkluder i kontekst»-`warning`. **R-kode-lese-OG-skrive-blokk:** `t.test(x, mu=μ0, alternative=)` og hvordan lese `t value`/`Pr(>|t|)` fra utskrift (ensidig halverer den tosidige p-verdien der relevant); `qt` for kritisk verdi.
- **Oppgavesjangre:** H (+ R). Mønstereksempel: «På en strekning med fartsgrense 80 km/t måles $n=31$ biler, $\bar{x}=83{,}4$, $s_X=7{,}2$. Test på 5 %-nivå om gjennomsnittsfarten overskrider fartsgrensen (ensidig). Regn testobservatoren, finn kritisk verdi ved tabelloppslag, og konkluder i kontekst. Skriv også `t.test`-kallet.»
- **Typiske feil:** Bruke z i stedet for t (eller feil df); ensidig/tosidig-forveksling; glemme å halvere tosidig p-verdi ved ensidig test i R; regne uten å navngi fordeling/df; konkludere uten kontekst; feil kritisk verdi ved tabelloppslag.
- **Quiz: 22 · Flashcards: 24** (testoppskrift, ensidig/tosidig, fordeling/df, tabelloppslag — flashcard-gull)

#### Kapittel 7.2: Drill: KI og test for μ

- **id:** `met1190-bi-7-2` · **number:** 7.2 · **estimatedMinutes:** 70 · **prerequisites:** `met1190-bi-7-1`, `met1190-bi-6-2`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele $\mu$-inferensen — regn $\bar{x}$/$s_X$ fra oppgitte summer, bygg KI, kjør t-test (ensidig/tosidig) med tabelloppslag, alt tolket i kontekst slik Oppgave 3 står på settet.
- **Eksamensbelegg:** Dekker sjanger G (KI 60 %) og H ($\mu$-test, del av 100 %) samlet — inferenskjernens $\mu$-halvdel. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) regn $\bar{x}$, $s_X$ fra $\sum x_i$/$\sum(x_i-\bar{x})^2$; 2) KI: $\bar{x}\pm t\cdot\text{SE}$ ved tabelloppslag, med tolkning; 3) test: $H_0/H_1$, testobservator, kritisk/p-verdi, konkluder i kontekst; 4) ensidig/tosidig etter formuleringen. **Gjennomregnet eksamens-O3** ($\mu$-varianten) med sensor-margnotater om føring, fordeling/df og at bar konklusjon gir svak uttelling. 8–12 oppgaver på eksamensnivå som roterer ensidig/tosidig, kritisk verdi/p-verdi, KI/test, alle med kontekst-tolkning og tabelloppslag.
- **Oppgavesjangre:** G + H. Mønstereksempel: «Fra $n=31$ personers søvnlengde: $\bar{x}=6{,}4$ t, $s_X=0{,}9$. (a) Lag et 95 %-KI. (b) Test ensidig på 5 %-nivå om folk sover mindre enn anbefalte 7 timer. (c) Tolk begge i kontekst.»
- **Typiske feil:** Hele $\mu$-repertoaret: z/t-forveksling, feil df, ensidig/tosidig-halvering, feil tabelloppslag, manglende kontekst-konklusjon, SE = $s_X$ i stedet for $s_X/\sqrt{n}$.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (7.A testens anatomi — $H_0/H_1$, ensidig/tosidig etter formuleringen, sjanger H; 7.B t-test for $\mu$ med tabelloppslag + kontekst-konklusjon, H; 7.C KI + test kombinert (Oppgave 3-mal), G/H; 7.D full $\mu$-inferensoppgave på eksamensnivå, G/H).

---

### Del 8 — Andel p: estimering, KI og test *(prioritet: PERFEKT — del av 100 %)*

#### Kapittel 8.1: Andel p: punktestimat, Wald-KI og z-test med p₀

- **id:** `met1190-bi-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `met1190-bi-7-1`
- **kapitteltype:** teori
- **description:** $\hat{p}=X/n$, Wald-konfidensintervall med $z$-kvantil ved tabelloppslag, og z-testen for én andel der standardfeilen bruker hypoteseverdien $p_0$ — pluss normaltilnærming og $P(\hat{p}\le v)$ via SGT.
- **Eksamensbelegg:** Estimering/inferens for andel $p$ i **3/5 sett (60 %)** — eldre O2, V2025 O3 (økonomisk optimisme, n=265, x=144), H2025 O3 (Trump-oppslutning, n=292, $P(\hat{p}\le v)$, z-test); den andre halvparten av den 100 %-tilbakevendende inferensoppgaven. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** Punktestimat $\hat{p}=X/n$; estimert varians $\hat{\sigma}^2=\hat{p}(1-\hat{p})$. **Wald-KI** $\hat{p}\pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$ (theorem-blokk, på vedlegget) med $z$-kvantil ved tabelloppslag (1,645/1,960/2,576) og kontekst-tolkning. **z-test for én andel** $z=\frac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}$ — **bruk hypoteseverdien $p_0$ (ikke $\hat{p}$) i standardfeilen** (kontraktfestet `warning`: testen betinger på at $H_0$ er sann); normaltilnærming begrunnet med stor $n$/SGT; ensidig («flertall» → $H_1: p>0{,}5$) eller tosidig etter formulering. **$P(\hat{p}\le v)$ via normaltilnærming** (H2025 O3b): $\hat{p}\approx N(p, \frac{p(1-p)}{n})$, standardiser og slå opp. **Kontraktfestede blokker:** «Riktig fordeling/df» (z for andel); tabelloppslag-mal; «Vis utregning»; «Konkluder i kontekst». **R-kode-lese-OG-skrive-blokk:** `prop.test(x, n, p=p0, alternative=, correct=FALSE)` og hvordan lese/skrive det.
- **Oppgavesjangre:** I (+ R). Mønstereksempel: «I en meningsmåling støtter 144 av 265 spurte et forslag. (a) Lag et 95 %-KI for andelen ved tabelloppslag og tolk. (b) Test på 5 %-nivå om et flertall støtter forslaget (ensidig, bruk $p_0$ i SE). (c) Skriv `prop.test`-kallet.»
- **Typiske feil:** Bruke $\hat{p}$ i stedet for $p_0$ i teststandardfeilen (#5 i analysen); bruke t i stedet for z for andel; glemme å begrunne normaltilnærmingen (stor $n$/SGT); ensidig/tosidig-feil; ingen kontekst-konklusjon; feil $z$-kvantil ved tabelloppslag.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 8.2: Drill: andelsslutning

- **id:** `met1190-bi-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `met1190-bi-8-1`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele andelsoppgaven — $\hat{p}=X/n$, Wald-KI, z-test med $p_0$ i standardfeilen, normaltilnærming og $P(\hat{p}\le v)$, med full føring, tabelloppslag og kontekst-tolkning.
- **Eksamensbelegg:** Dekker sjanger I samlet (andelsinferens 60 %, del av 100 %-inferensoppgaven). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) $\hat{p}=X/n$; 2) Wald-KI ved tabelloppslag med tolkning; 3) test: $H_0/H_1$, **$p_0$ i standardfeilen**, z-observator, kritisk/p-verdi, konkluder i kontekst; 4) begrunn normaltilnærming; 5) $P(\hat{p}\le v)$ der relevant. **Gjennomregnet eksamens-O3** (andelsvarianten) med sensor-margnotater om $p_0$-vs-$\hat{p}$-fellen og normaltilnærmingsbegrunnelsen. 8–12 oppgaver på eksamensnivå (meningsmåling, oppslutning, returandel), ensidig/tosidig.
- **Oppgavesjangre:** I. Mønstereksempel: «I en undersøkelse svarer 132 av 292 ja. (a) Test ensidig på 5 %-nivå om andelen ja er under 50 %. (b) Finn $P(\hat{p}\le 0{,}42)$ ved normaltilnærming. (c) Tolk begge i kontekst.»
- **Typiske feil:** $p_0$-vs-$\hat{p}$-fellen, t i stedet for z, glemt normaltilnærmingsbegrunnelse, ensidig/tosidig-feil, manglende kontekst-konklusjon.
- **Quiz: 14 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (8.A $\hat{p}=X/n$ + Wald-KI for andel ved tabelloppslag, sjanger I; 8.B z-test for én andel med $p_0$ i standardfeilen, I; 8.C normaltilnærming + $P(\hat{p}\le v)$ via SGT, I/D; 8.D full andelsoppgave (Oppgave 3-mal) på eksamensnivå, I).

---

### Del 9 — Enkel lineær regresjon og korrelasjon *(prioritet: PERFEKT — 100 %, STØRST, tyngst)*

#### Kapittel 9.1: Regresjonsmodellen og estimering fra deskriptive mål (spor 1)

- **id:** `met1190-bi-9-1` · **number:** 9.1 · **estimatedMinutes:** 60 · **prerequisites:** `met1190-bi-1-2`
- **kapitteltype:** teori
- **description:** Modellen $Y=\beta_1+\beta_2 X+e$ (BI-notasjon: $\beta_1$ = konstantledd, $\beta_2$ = stigningstall), MKM-estimatene fra oppgitte deskriptive mål, regresjonslinja og prediksjon (obs på enheter) — spor 1.
- **Eksamensbelegg:** Regresjon er signaturoppgaven (100 %, alltid siste og tyngst, vekt ~0,35). Spor 1 — **fra oppgitte deskriptive mål** — er eldre O5 og V2025 O4 (TSCORE~PTR, prediksjon). Bygger på deskriptiv-pakken (kap. 1.1–1.2). Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Modellen** $Y=\beta_1+\beta_2 X+e$ (respons, forklaringsvariabel, feilledd; **BI-notasjon: $\beta_1$ = konstantledd, $\beta_2$ = stigningstall** — kontraktfestet notasjonsvarsel). **MKM-estimatene** (theorem-blokk, på vedlegget): $\hat{\beta}_2=\frac{s_{XY}}{s_X^2}=\frac{\sum(y_i-\bar{y})(x_i-\bar{x})}{\sum(x_i-\bar{x})^2}$, $\hat{\beta}_1=\bar{y}-\hat{\beta}_2\bar{x}$ — fra oppgitte $\bar{x}$, $\bar{y}$, $s_X^2$, $s_Y^2$, $s_{XY}$. Skriv opp $\hat{Y}=\hat{\beta}_1+\hat{\beta}_2 X$; **prediker** for gitt $X$ (kontraktfestet enhets-warning: f.eks. PTR = elever/lærer må regnes fra elevtall og lærertall før innsetting); tolk fortegnet på effekten i kontekst.
- **Oppgavesjangre:** J. Mønstereksempel: «For 20 skoler er gitt $\bar{x}=15{,}2$ (elever per lærer), $\bar{y}=512$ (testscore), $s_X^2=9{,}0$, $s_{XY}=-21{,}6$. Finn $\hat{\beta}_2$ og $\hat{\beta}_1$, skriv regresjonslinja, prediker testscore for en skole med 400 elever og 25 lærere, og tolk stigningstallet i kontekst.»
- **Typiske feil:** Bytte om $X$ og $Y$ i $\hat{\beta}_2$; bruke $s_X$ i stedet for $s_X^2$; feil fortegn; regne $\hat{\beta}_1$ uten $\hat{\beta}_2\bar{x}$; glemme enhetsomregningen før prediksjon; tolke stigningstallet uten kontekst/enhet; bruke $\beta_0$-notasjon i stedet for BI-ens $\beta_1$/$\beta_2$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 9.2: Regresjon fra rådatatabell med residualer og lesing av lm()-utskrift (spor 2)

- **id:** `met1190-bi-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `met1190-bi-9-1`, `met1190-bi-0-3`
- **kapitteltype:** teori
- **description:** Spor 2: fra en rådatatabell som gir $\sum(x_i-\bar{x})^2$, $\sum(x_i-\bar{x})(y_i-\bar{y})$ og $\sum\hat{e}_i^2$, estimer alt og beregn $\hat{\sigma}^2=\sum\hat{e}_i^2/(n-2)$ — og les de samme størrelsene av en `lm()`-utskrift.
- **Eksamensbelegg:** Regresjon fra rådatatabell med residualer (spor 2) i V2024 O5, H2024 O5, H2025 O4 (MORT~LAT, BMI~ALDER, HAP~INT). R-flervalg tolker ofte `lm()`-utskrift. Prioritet: **PERFEKT**.
- **Innholdskontrakt:** **Spor 2-oppskriften** (theorem-/prosedyre-blokk): en tabell gir $\sum(x_i-\bar{x})^2$, $\sum(y_i-\bar{y})^2$, $\sum(x_i-\bar{x})(y_i-\bar{y})$ og $\sum\hat{e}_i^2$ → $\hat{\beta}_2=\frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sum(x_i-\bar{x})^2}$, $\hat{\beta}_1=\bar{y}-\hat{\beta}_2\bar{x}$, og **$\hat{\sigma}^2=\frac{\sum\hat{e}_i^2}{n-2}$** (df = n − 2 — kontraktfestet «Riktig fordeling/df»-`warning`). **R-kode-lese-OG-skrive-blokk (kontraktfestet — den sentrale):** en `lm(y ~ x)`-utskrift har koeffisientrader `(Intercept)` ($\hat{\beta}_1$) og forklaringsvariabelen ($\hat{\beta}_2$) med kolonnene `Estimate`, `Std. Error`, `t value`, `Pr(>|t|)`, pluss `Residual standard error` ($\hat{\sigma}=\sqrt{\hat{\sigma}^2}$, df = n − 2) og `Multiple R-squared` ($R^2$). Hvordan lese hver celle OG hvordan skrive `lm(y ~ x)`-kallet. Alle utskrifter **nyskrevne**. Kobling framover: $SE(\hat{\beta}_2)$ og t-test i kap. 9.3.
- **Oppgavesjangre:** K (+ R). Mønstereksempel: «En tabell for $n=30$ gir $\sum(x_i-\bar{x})^2=248$, $\sum(x_i-\bar{x})(y_i-\bar{y})=-93$, $\sum\hat{e}_i^2=410$, $\bar{x}=41$, $\bar{y}=27$. Finn $\hat{\beta}_2$, $\hat{\beta}_1$ og $\hat{\sigma}^2$. Skriv `lm`-kallet, og forklar hvor `Residual standard error` i utskriften kommer fra.»
- **Typiske feil:** Bruke df = n − 1 i stedet for n − 2 for $\hat{\sigma}^2$; forveksle `Std. Error` (til $\hat{\beta}$) med `Residual standard error`; lese $\hat{\beta}_2$ fra `(Intercept)`-raden; tolke $R^2$ som korrelasjon; glemme å ta roten for `Residual standard error`.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 9.3: R², SE(β̂₂), koeffisient-t-test og fortegn på r

- **id:** `met1190-bi-9-3` · **number:** 9.3 · **estimatedMinutes:** 65 · **prerequisites:** `met1190-bi-9-2`
- **kapitteltype:** teori
- **description:** $R^2=r^2$, $SE(\hat{\beta}_2)$, koeffisient-t-testen $H_0:\beta_2=0$ med df = n − 2 og konklusjon i kontekst, fortegnet på $r$ (følger $\hat{\beta}_2$), og den algebraiske `SE`-utledningen (nivå 3) — regresjonens slutningsdel.
- **Eksamensbelegg:** Del av regresjonssignaturen (100 %): $R^2$, $SE(\hat{\beta}_2)$, koeffisient-t-test df = n − 2 (V2025 O4, H2025 O4), fortegn på $r$; **algebraisk `SE`-utledning** i 1/5 (eldre O4: vis $\sum\hat{e}_i^2=s_Y^2(n-1)(1-r^2)$ og omform $SE(\hat{\beta}_2)$). Prioritet: **PERFEKT** (algebraisk utledning: KUNNE/karakterdifferensiering).
- **Innholdskontrakt:** **$R^2=r_{XY}^2$** = andel forklart variasjon; **fortegn på $r$** $=\pm\sqrt{R^2}$ med **fortegn lik $\hat{\beta}_2$** (kontraktfestet `warning`: positiv $r$ med negativt stigningstall er en klassisk felle). **$SE(\hat{\beta}_2)=\hat{\sigma}\sqrt{\frac{1}{\sum(x_i-\bar{x})^2}}$** (theorem-blokk, på vedlegget), der $\hat{\sigma}$ er oppgitt eller regnet (kap. 9.2). **Koeffisient-t-test** $t=\frac{\hat{\beta}_2-\beta_2^*}{SE(\hat{\beta}_2)}$, **df = n − 2** (kontraktfestet «Riktig fordeling/df»-`warning`); test $H_0:\beta_2=0$ mot ensidig alternativ («negativ/positiv effekt») ved tabelloppslag, konkluder i kontekst. **Algebraisk `SE`-utledning (nivå 3, theorem-/prosedyre-blokk):** nyttig identitet $\sum\hat{e}_i^2=s_Y^2(n-1)(1-r_{XY}^2)$ og omforming av $SE(\hat{\beta}_2)$ — ren algebraoppgave (eldre O4). **Kontraktfestede blokker:** «Vis utregning», «Konkluder i kontekst».
- **Oppgavesjangre:** L (+ R). Mønstereksempel: «Med $\hat{\beta}_2=-0{,}38$, $\hat{\sigma}=3{,}7$, $\sum(x_i-\bar{x})^2=248$, $n=30$: (a) finn $SE(\hat{\beta}_2)$; (b) test ensidig på 5 %-nivå om $X$ har negativ effekt på $Y$ (df = n − 2, tabelloppslag); (c) $R^2=0{,}42$ — finn $r$ med riktig fortegn; (d) tolk i kontekst.»
- **Typiske feil:** Feil df (n − 1 i stedet for n − 2); feil fortegn på $r$ (ikke la det følge $\hat{\beta}_2$); forveksle $SE(\hat{\beta}_2)$ og `Residual standard error`; glemme ensidig-halvering; algebrafeil i `SE`-utledningen; konkludere uten kontekst.
- **Quiz: 26 · Flashcards: 26**

#### Kapittel 9.4: Drill: den store regresjonsoppgaven (begge spor)

- **id:** `met1190-bi-9-4` · **number:** 9.4 · **estimatedMinutes:** 80 · **prerequisites:** `met1190-bi-9-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på Oppgave 4-signaturoppgaven i BEGGE spor — fra deskriptive mål (spor 1) OG fra rådatatabell med residualer (spor 2) — med full deloppgave-rekkefølge: estimer → tolk → $R^2$ → $SE(\hat{\beta}_2)$ → koeffisient-test → konkluder i kontekst.
- **Eksamensbelegg:** Dekker regresjon (100 %, tyngst) i full bredde: spor 1 (deskriptive mål, sjanger J), spor 2 (rådatatabell, K), slutning ($R^2$, $SE(\hat{\beta}_2)$, t-test df = n − 2, fortegn på $r$, L). Standard deloppgave-rekkefølge: (i) modell + estimer + skriv linje; (ii) tolk effekten i kontekst; (iii) $R^2$; (iv) $SE(\hat{\beta}_2)$; (v) hypotesetest på $\beta_2$ med konklusjon i kontekst. Prioritet: **PERFEKT** (delens klimaks).
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) avgjør spor — deskriptive mål (spor 1) eller rådatatabell med residualer (spor 2)? 2) $\hat{\beta}_2$, $\hat{\beta}_1$; 3) tolk i kontekst (enhet!); 4) prediksjon (obs enheter); 5) $R^2$ og $r$ med riktig fortegn; 6) $\hat{\sigma}^2$ (fra $\sum\hat{e}_i^2/(n-2)$ i spor 2) og $SE(\hat{\beta}_2)$; 7) koeffisient-t-test df = n − 2 (tabelloppslag) med konklusjon i kontekst. **To gjennomregnede eksamenscase** — én ren spor 1 (deskriptive mål) og én ren spor 2 (rådatatabell, nyskrevet) — begge med sensor-margnotater. 8–12 oppgaver på eksamensnivå fordelt på begge spor.
- **Oppgavesjangre:** J + K + L. Mønstereksempel (spor 2): «Fra $n=25$ personer med (inntekt $x$, lykkescore $y$): en tabell gir $\sum(x_i-\bar{x})^2$, $\sum(x_i-\bar{x})(y_i-\bar{y})$, $\sum\hat{e}_i^2$. Estimer linja, tolk stigningstallet, finn $R^2$, $SE(\hat{\beta}_2)$, test $H_0:\beta_2=0$ ensidig (df = n − 2), og konkluder om effekten av inntekt på lykke.»
- **Typiske feil:** Hele regresjonsrepertoaret: feil rad i utskriften, feil fortegn på $r$, df = n − 1 i stedet for n − 2, glemt ensidig-halvering, forvekslet $SE(\hat{\beta}_2)$ og `Residual standard error`, byttet $X$/$Y$ i $\hat{\beta}_2$, glemt enhetsomregning, ingen kontekst-tolkning.
- **Quiz: 16 · Flashcards: 10**

**Prøve-kvote Del 9:** 4 prøver (9.A MKM-estimering fra deskriptive mål + prediksjon (obs enheter), sjanger J; 9.B regresjon fra rådatatabell + $\hat{\sigma}^2$ + lese `lm()`-utskrift, K; 9.C $R^2$, $SE(\hat{\beta}_2)$, koeffisient-t-test (df = n − 2) + fortegn på $r$, L; 9.D full regresjonsoppgave (Oppgave 4-mal, begge spor) + algebraisk `SE`-utledning, J/K/L).

---

### Del 10 — Eksamenstrening

#### Kapittel 10.1: R-flervalg P1–P5-stordrillen

- **id:** `met1190-bi-10-1` · **number:** 10.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–9
- **kapitteltype:** drill
- **description:** Den dedikerte drillen på Oppgave 1-signaturen — fem R-flervalg P1–P5 per sett, med alle de faste motivene: kodelesing/skriving (`mean`/`median`/`sd`/`length`/`for`/indeksering), fordelinger (`dbinom`/`pbinom`/`pnorm`/`pt`), kritisk verdi (`qt`/`qnorm`), test-kall (`prop.test`/`t.test`) og utskriftstolkning.
- **Eksamensbelegg:** R-flervalg (Oppgave 1, P1–P5) i 80 % (100 % moderne) — fagets fjerde bærebjelke og tydeligste enkeltsignatur. Ingen begrunnelse. Prioritet: **PERFEKT** (aktiv R; egen eksamenssjanger). Dekker alle R-motivene fra analysen §3D samlet.
- **Innholdskontrakt:** **Motivkatalogen (theorem/prosedyre — de faste P1–P5-motivene):** (1) **kodelesing/deskriptivt** — `mean()`=$(1/\text{length})*\text{sum}$; `median()` partall = snitt av de to midterste; `sd()` = standardavvik; `for`-løkke som akkumulerer (fakultet `p*i` vs. sum `s+x[i]`); vektorisert `sum(x[k])` = løkke. (2) **fordelinger** — `dbinom` (nøyaktig $k$) vs. `pbinom` (kumulativt); `pnorm(a,mean,sd,lower.tail=)` (`sd`, ikke varians!); `pt(t,df,lower.tail)` for p-verdi. (3) **kritisk verdi** — `qt(α,df,lower.tail=FALSE)` ensidig øvre, `qt(α/2,df,…)` tosidig (df = n − 1); `qnorm` for z. (4) **test-kall** — `prop.test(x,n,p=p0,alternative=,correct=FALSE)` for andel; `t.test(x,mu=,alternative=,conf.level=)` for $\mu$ — velg riktig funksjon/parameter/`alternative`. (5) **utskriftstolkning** — les `Estimate`/`t value`/`Pr(>|t|)`/`Multiple R-squared`/`Residual standard error`; $r=\pm\sqrt{R^2}$ (fortegn = $\hat{\beta}_2$); ofte «hvilket utsagn er IKKE korrekt?». **Format:** grupper i sett à fem (P1–P5), svar uten begrunnelse, men fasit forklarer hvorfor. Alle kodesnutter og utskrifter **nyskrevne**. Både lese- OG skrive-varianter.
- **Oppgavesjangre:** R. Mønstereksempel: «(P3) Hvilket kall gir sannsynligheten for nøyaktig 3 treff i 10 forsøk med $p=0{,}25$? a) `dbinom(3,10,0.25)` b) `pbinom(3,10,0.25)` c) `dbinom(3,0.25,10)` d) `qbinom(3,10,0.25)`.»
- **Typiske feil:** Hele R-feilkatalogen: `dbinom` vs. `pbinom`, `sd` vs. varians i `pnorm`, feil `lower.tail`/$\alpha$ vs. $\alpha/2$ i `qt`, median partall, `for`-løkke fakultet vs. sum, feil funksjon (`prop.test` vs. `t.test`), feil `alternative`.
- **Quiz: 32 · Flashcards: 14** (R-flervalg er egen sjanger — høyeste quiz-kvote i boka)

#### Kapittel 10.2: Sjangerguiden og den kryssgående stordrillen

- **id:** `met1190-bi-10-2` · **number:** 10.2 · **estimatedMinutes:** 90 · **prerequisites:** `met1190-bi-10-1`
- **kapitteltype:** drill
- **description:** Den kryssgående drillen på hele apparatet med sjangergjenkjenning — «R-flervalg, teoretisk, inferens eller regresjon? hvilken parameter, hvilken fordeling, hvilken df?» — og de teoretiske/konseptuelle vriene samlet.
- **Eksamensbelegg:** Dekker sjangrene A–R i sammenheng — de fire bærebjelkene (teoretisk oppgave E/F, inferens G/H/I, regresjon J/K/L, R-flervalg R) er 100 %/moderne-gjengangere som må gjenkjennes raskt. Kommer sist fordi den kobler alle delene. Prioritet: **PERFEKT** (kryssgående).
- **Innholdskontrakt:** **Sjangergjenkjennings-treet** (theorem/prosedyre): fra oppgavetekst til verktøy — R-kode/utskrift → R-flervalg P1–P5; «uten å anta noe om a,b,c» / lineærkombinasjon → symbolsk $E/\text{Var}/\text{Cov}/\rho$ (E); estimator/forventningsrett/konsistens/SGT → estimatorteori (F); gjennomsnitt + ukjent $\sigma$ → t (df = n − 1, G/H); andel → z med $p_0$ (I); to variabler + deskriptive mål/rådata → regresjon (df = n − 2, J/K/L). **Kryssgående konsept-/df-bank:** t vs. z + riktig df (n − 1 / n − 2), $p_0$-i-standardfeilen, symbolsk svar, fortegn på $r$, ensidig/tosidig, SGT-betingelser, forventningsretthet vs. konsistens, tabelloppslag z/t, `dbinom` vs. `pbinom`. **Gjennomregnet blandet oppgavesett** med sensor-margnotater om at hvert svar (utenom R-flervalg) må vise utregning og tolkes i kontekst. 15+ blandede deloppgaver som roterer alle fire bærebjelker, hver med full føring.
- **Oppgavesjangre:** A–R (samlet). Mønstereksempel: «For hver av åtte korte oppgavetekster: avgjør hvilken av de fire oppgavetypene (R-flervalg, teoretisk, inferens, regresjon) det er, og — der relevant — hvilken parameter, fordeling og df — før du regner.»
- **Typiske feil:** Feil sjanger-/fordelingsvalg under tidspress; hele feilkatalogen (§5) samlet: t/z, df, ensidig-halvering, $p_0$-felle, symbolsk svar for sent, fortegn på $r$, `dbinom`/`pbinom`, manglende kontekst-konklusjon.
- **Quiz: 18 · Flashcards: 30** (sjangergjenkjenning + df-katalog + konsept-/feilbank — flashcard-gull)

#### Kapittel 10.3: Øvingseksamen 1: den typiske 4-oppgavemalen

- **id:** `met1190-bi-10-3` · **number:** 10.3 · **estimatedMinutes:** 150 · **prerequisites:** `met1190-bi-10-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter 2025-standardmalen: 4 oppgaver med vekttall (R-flervalg → teoretisk → inferens → regresjon), formelhefte + z/t-tabeller, med full A-besvarelse-fasit og tolkning i kontekst.
- **Eksamensbelegg/miks:** Speiler 2025-malen (4 oppgaver, vekttall sum 1,0, «vis all utregning» + «konkluder i kontekst», formelhefte + z/t-tabeller). **O1 (~0,10, R):** fem R-flervalg P1–P5 (kodelesing/skriving, `dbinom`/`pbinom`, `pnorm`, `qt`, utskriftstolkning). **O2 (~0,25, E):** symbolsk lineærkombinasjon $X=aZ_1+bZ_2$, $Y=cZ_2$ ($E/\text{Var}/\text{Cov}/\rho$ symbolsk + normal $Y$ numerisk). **O3 (~0,30, G/H):** KI + hypotesetest for $\mu$ (t, df = n − 1, ensidig, tabelloppslag). **O4 (~0,35, tyngst, J):** enkel lineær regresjon fra deskriptive mål + prediksjon + $R^2$ + $SE(\hat{\beta}_2)$ + koeffisient-test. Alle nyskrevne (pene tall, nyskrevet R-kode). Løsningsforslag som A-besvarelse i `collapsible` per oppgave (all utregning vist, fordeling/df navngitt, tabelloppslag, avsluttende kontekst-tolkning), med `tip`-notat om vekt/tidsbudsjett.
- **Oppgavesjangre:** R, E, G, H, J.
- **estimatedMinutes/prerequisites:** som over. **Typiske feil (kort):** symbolsk svar for sent, feil df, feil tabelloppslag, manglende kontekst-tolkning.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.4: Øvingseksamen 2: estimatorteori- og andelsprofil

- **id:** `met1190-bi-10-4` · **number:** 10.4 · **estimatedMinutes:** 150 · **prerequisites:** `met1190-bi-10-3`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett med en annen miks: den teoretiske oppgaven som estimatorbevis/SGT, inferens for andel og regresjon fra rådatatabell med residualer — full A-besvarelse-fasit.
- **Eksamensbelegg/miks:** Samme mal, annen miks: **O1 (R):** fem R-flervalg (`median` partall, `for`-fakultet, `pt` p-verdi, `prop.test`, `lm`-utskrift). **O2 (~0,25, F):** estimatorteori — forventningsretthet-bevis ($E(S_X^2)=\sigma^2$) ELLER median-estimator via SGT + konsistens + tetthetsevaluering. **O3 (~0,30, I):** estimering + Wald-KI + z-test for andel $p$ (med $p_0$ i SE) + $P(\hat{p}\le v)$ via normaltilnærming. **O4 (~0,35, tyngst, K):** enkel lineær regresjon fra rådatatabell med residualer ($\hat{\sigma}^2=\sum\hat{e}_i^2/(n-2)$, $SE(\hat{\beta}_2)$, test df = n − 2). Alle nyskrevne. A-besvarelse-fasit i `collapsible` per oppgave med vekt-/tidsnotat.
- **Oppgavesjangre:** R, F, I, K.
- **estimatedMinutes/prerequisites:** som over. **Typiske feil (kort):** miste ledd i estimatorbeviset, $p_0$-vs-$\hat{p}$-fellen, df = n − 1 i stedet for n − 2 i regresjon.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 10.5: Øvingseksamen 3: bredde-/beredskapsprofil (eldre-format-elementer)

- **id:** `met1190-bi-10-5` · **number:** 10.5 · **estimatedMinutes:** 150 · **prerequisites:** `met1190-bi-10-4`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som vekter de lavfrekvente og beredskapstunge innslagene analysen advarer om ikke å overse — sannsynlighetsregning, binomisk substantivt, algebraisk SE-utledning og normalfordeling — for å dekke bredden det lille arkivet ikke garanterer.
- **Eksamensbelegg/miks:** Speiler bredden (elementer fra eldre-formatet + lavfrekvente temaer): **O1 (R):** fem R-flervalg (blandet vokabular + fordelinger). **O2 (E/F):** teoretisk oppgave — lineærkombinasjon ELLER estimatorbevis. **O3 (B/D):** sannsynlighetsregning (disjunkt/komplement på standardnormale hendelser) + normalfordeling (invers persentil) + binomisk substantivt (nøyaktig $k$). **O4 (L, tyngst):** enkel lineær regresjon med **algebraisk `SE`-utledning** (vis $\sum\hat{e}_i^2=s_Y^2(n-1)(1-r^2)$ og omform $SE(\hat{\beta}_2)$) + korrelasjon. Alle nyskrevne. A-besvarelse-fasit i `collapsible` med margnotater om hva som skiller topp- fra midtsjikt. Sammen dekker de tre øvingseksamenene sjangrene A–R minst én gang.
- **Oppgavesjangre:** R, E/F, B, D, L.
- **estimatedMinutes/prerequisites:** som over. **Typiske feil (kort):** feil regneregel for ikke-disjunkte hendelser, `dbinom` vs. `pbinom`, algebrafeil i `SE`-utledningen.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 10:** ingen egne temaprøver — R-flervalg-stordrillen (10.1), den kryssgående stordrillen (10.2) og de tre øvingseksamenene (10.3–10.5) er delens trening.

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1–0.3 | 10+16+28 = **54** | 12+28+24 = **64** | 0 |
| 1 | 1.1–1.2 | 18+18 = **36** | 16+16 = **32** | 4 |
| 2 | 2.1–2.2 | 18+16 = **34** | 18+16 = **34** | 4 |
| 3 | 3.1–3.3 | 22+24+14 = **60** | 18+18+14 = **50** | 4 |
| 4 | 4.1–4.2 | 20+24 = **44** | 24+20 = **44** | 4 |
| 5 | 5.1–5.3 | 22+22+16 = **60** | 28+28+10 = **66** | 4 |
| 6 | 6.1–6.2 | 16+20 = **36** | 20+20 = **40** | 4 |
| 7 | 7.1–7.2 | 22+14 = **36** | 24+8 = **32** | 4 |
| 8 | 8.1–8.2 | 22+14 = **36** | 22+8 = **30** | 4 |
| 9 | 9.1–9.4 | 20+18+26+16 = **80** | 20+16+26+10 = **72** | 4 |
| 10 | 10.1–10.5 | 32+18+5+5+5 = **65** | 14+30+0+0+0 = **44** | 0 (2 drill + 3 øvingseksamener) |
| **Sum** | **30 kap.** | **541 ≥ 500 ✓** | **508 ≥ 500 ✓** | **36 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens og bredde, og de to sporene: **teorisporet (Del 4–5)
står for 104 quiz og 110 flashcards** (symbolske lineærkombinasjoner + estimatorteori —
der toppkarakteren avgjøres, og flashcard-rikt: definisjoner, teoremer, bevissteg,
SGT-betingelser); **R-sporet** (kap. 0.3 + R-blokker i fagkapitlene + stordrillen
10.1) gir høy quiz-tetthet fordi **R-flervalg P1–P5 er en egen eksamenssjanger** —
kap. 10.1 har bokas høyeste quiz-kvote (32) og kap. 0.3 nest høyest (28);
**inferenskjernen + regresjon (Del 6–9) står for 188 quiz** (de temaene som bærer
hvert sett: KI/test for $\mu$ og $p$, regresjon/korrelasjon). Flashcard-summen (508)
ligger bevisst litt over 500-gulvet fordi teori-/bevissporet og håndverket
(tabelloppslag, formelhefte, R-vokabular, df-katalog, feil-/konseptbank) er
flashcard-rike — de metatunge kapitlene (0.2 håndverk, 4.1 regneregler, 5.1–5.2
estimatorteori, 7.1 testanatomi, 9.3 regresjonsslutning, 10.2 sjangerguide) er
bevisst flashcard-tunge. Drillkapitlene (5.3, 7.2, 8.2, 9.4) har lave flashcard-
kvoter (få nye definisjoner, mye oppgaveregning). Quizzene skrives som **metode-/
føringssjekk** (hvilken fordeling/df, er svaret symbolsk, er tolkningen med, `p_0`
eller $\hat{p}$, `dbinom` eller `pbinom`, hvilket steg mangler) med distraktorer
bygget på feilkatalogen (§5 i analysen) — ikke ren repetisjon. R-flervalg-quizzene
(0.3, 10.1, samt R-innslag i fagkapitlene) skrives i P1–P5-format (fire svaralternativer,
`options[0]` riktig).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–9, 36 totalt)

Hver del 1–9 får ett prøvekapittel (`met1190-bi-<del>-prove`, chapterNumber
`<del>.P`) med fire prøver. Hver prøve består av nyskrevne oppgaver i eksamens
sjangre, med løsningsforslag (A-besvarelse med all utregning vist, referanse-
fordeling/df navngitt, tabelloppslag der relevant, symbolsk svar der teksten ber om
det, og avsluttende kontekst-tolkning) og vektfordeling. Prøvene per del er
spesifisert i «Prøve-kvote Del N»-linjene over. Oppsummert dekker de:

- **Del 1** (A): sentraltendens/spredning/median for hånd → kovarians/korrelasjon → deskriptiv pakke som oppspill til regresjon → R-flervalg på deskriptive motiver.
- **Del 2** (B): regneregler/disjunkt/komplement → betinget → total sannsynlighet/Bayes → kombinatorikk.
- **Del 3** (C/D/R): diskret + binomisk → normal standardisering/tabelloppslag → invers persentil → R-flervalg fordelinger.
- **Del 4** (E): regneregler $E$/$\text{Var}$ → $\text{Cov}$/$\rho$ med bilineæritet → full symbolsk lineærkombinasjon → numerisk del ved tabelloppslag.
- **Del 5** (F): forventningsretthet-bevis → konsistens via $\text{Var}\to 0$ → SGT + tetthetsevaluering → full teoretisk oppgave.
- **Del 6** (G): $\bar{x}$/$s_X$ + t/df → kritisk verdi ved tabelloppslag → KI-konstruksjon → full KI med bredde-drøfting.
- **Del 7** (H): testanatomi/ensidig-tosidig → t-test for $\mu$ → KI + test kombinert → full $\mu$-inferens.
- **Del 8** (I): Wald-KI for andel → z-test med $p_0$ → normaltilnærming + $P(\hat{p}\le v)$ → full andelsoppgave.
- **Del 9** (J/K/L): MKM fra deskriptive mål → regresjon fra rådata + `lm()`-utskrift → $R^2$/$SE(\hat{\beta}_2)$/koeffisient-test → full regresjon + algebraisk `SE`-utledning.

### Øvingseksamener (3 komplette sett — kap. 10.3–10.5)

| Sett | Profil | Tema-miks (O1–O4) |
|---|---|---|
| Øvingseksamen 1 (10.3) | Standardmal (2025) | R (R-flervalg) + E (symbolsk lineærkombinasjon) + G/H (KI+test μ) + J (regresjon fra deskriptive mål) |
| Øvingseksamen 2 (10.4) | Estimatorteori + andel | R (R-flervalg) + F (estimatorbevis/SGT) + I (andel med p₀ + $P(\hat{p}\le v)$) + K (regresjon fra rådatatabell) |
| Øvingseksamen 3 (10.5) | Bredde/beredskap | R (R-flervalg) + E/F (teoretisk) + B/D (sannsynlighet + normal + binomisk) + L (regresjon + algebraisk SE-utledning) |

Alle tre har fast dramaturgi (4 oppgaver, vekttall sum 1,0, formelhefte + z/t-
tabeller, kalkulator uten innebygde fordelinger, «vis all utregning» + «konkluder i
kontekst», symbolsk svar der teksten ber om det, R-flervalg uten begrunnelse). Til
sammen dekker de sjangrene A–R minst én gang; de fire bærebjelkene (teoretisk
oppgave, inferens for én parameter, regresjon, R-flervalg) inngår i minst to av
settene. Alle oppgaver, tallverdier og R-utskrifter er nyskrevne.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (skriftlig skoleeksamen, 4 oppgaver, vekttall
   sum 1,0, A–F, formelhefte + z/t-tabeller + kalkulator uten innebygde
   fordelinger, R-flervalg som Oppgave 1), den faste 4-oppgavemalen (R-flervalg →
   teoretisk → inferens → regresjon), formatutviklingen (eldre 5-oppgaveformat) og
   prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (regresjon/korrelasjon, hypotesetest for én parameter, teoretisk/
   algebraisk oppgave, R-flervalg), **kunne** (KI for μ, andelsinferens,
   normalfordeling, lineærkombinasjon, SGT, deskriptiv), **kjenne**
   (sannsynlighetsregning, Bayes, binomisk substantivt, algebraisk SE-utledning).
   Med fraværsbildet uttrykt (to-utvalg, kjikvadrat, diskret simultanfordeling,
   Poisson, multippel regresjon = 0/5, ikke på vedlegget, la ligge).
3. **De to sporene** — (a) **R-sporet**: R-grunnvokabular (lese + skrive), fordelings-
   og testfunksjonene, P1–P5-motivkatalogen (fra kap. 0.3 og 10.1); (b) **teori-/
   bevissporet**: symbolske lineærkombinasjoner (E/Var/Cov/Cor, kryssledd faller),
   estimatorteori (forventningsretthet-bevis, konsistens via SGT, tetthetsevaluering),
   der toppkarakteren avgjøres (fra Del 4–5).
4. **Sjangerguiden** — sjangrene A–R med løsningsoppskriftene fra drillkapitlene
   (5.3, 7.2, 8.2, 9.4, 10.1, 10.2) i kortform: den symbolske lineærkombinasjonen,
   estimatorbeviset/SGT-argumentet, μ-inferensoppskriften (t, df = n − 1, KI+test),
   andelsoppskriften ($\hat{p}$, Wald, z med $p_0$), regresjonsoppskriften (spor 1
   deskriptive mål / spor 2 rådatatabell, df = n − 2, fortegn på $r$, $SE(\hat{\beta}_2)$),
   R-flervalg P1–P5-katalogen, og sjangergjenkjennings-treet.
5. **«Vis all utregning», tabelloppslag og konkluder i kontekst-håndverket** — egen
   seksjon (fra kap. 0.2): føringsstandarden (formel fra vedlegget skrevet ut, tall
   inn, fordeling/df navngitt, svar med enhet), tabelloppslag-malen (z- og
   t-tabellen — kalkulatoren har ingen innebygde fordelinger), kontekst-
   tolkningsmalen, symbolsk-svar-disiplinen, og formelhefte-bruk (hva som står der /
   hva som må velges selv).
6. **Sensorreglene** — metareglene (vis all utregning med formlene fra vedlegget;
   konkluder i kontekst; symbolsk svar der teksten sier «uten å anta noe om a,b,c»;
   R-flervalg uten begrunnelse) + de fagspesifikke strenge punktene (t for μ med
   df = n − 1, z for andel, df = n − 2 i regresjon; $p_0$ ikke $\hat{p}$ i
   standardfeilen; fortegn på $r$ = fortegn på $\hat{\beta}_2$; begrunn
   normaltilnærmingen; BI-notasjon $\beta_1$/$\beta_2$) — alle merket `(verifiser)`
   siden ingen sensorveiledning forelå.
7. **Feilkatalogen** — de typiske feilene samlet (§5 i analysen): svar uten
   utregning; bar konklusjon uten kontekst; z i stedet for t; feil df (n − 1 vs.
   n − 2); $\hat{p}$ i stedet for $p_0$; `dbinom` vs. `pbinom`; feil `lower.tail`/
   $\alpha$ vs. $\alpha/2$; `sd` vs. varians i `pnorm`; ensidig/tosidig-feil; feil
   fortegn på $r$; median partall; `for`-løkke fakultet vs. sum; algebrafeil i
   estimatorbevis; symbolsk svar for sent; glemt normaltilnærmingsbegrunnelse — hver
   med henvisning til kapitlet som forebygger den.
8. **Formelhefte + tabeller i emnets notasjon** — én side som gjengir det utdelte
   vedlegget (deskriptive formler; sannsynlighetsregneregler inkl. Bayes/total;
   E/Var/Cov/Cor-regler; SGT; forventningsretthet/konsistens/effisiens; KI- og
   testformler for p og μ; regresjonsformlene og $SE$) + påminnelse om kumulativ
   standardnormaltabell + t-tabell — med markering av hva som IKKE står der og må
   velges/kunnes selv (fordeling/df-valg, ensidig-halvering, $p_0$-regelen, symbolsk
   svar, BI-notasjon).
9. **Studieløp** — anbefalt progresjon (8-ukers og 3-ukers intensivvariant): Del 0
   (håndverk + R-modul) → 1 (deskriptiv) → 3 (fordelinger) → 4 (lineærkombinasjon) →
   5 (estimatorteori) → 6 (KI μ) → 7 (test μ) → 8 (andel) → 9 (regresjon), deretter
   2 (bredde), til slutt R-flervalg-stordrillen (10.1), den kryssgående stordrillen
   (10.2) og de tre øvingseksamenene under tidspress. Intensivvariant: kap. 0.2 +
   0.3 (håndverk + R) + Del 4–5 (teorisporet — toppkarakter) + Del 7–9 (inferens +
   regresjon) + R-flervalg-stordrillen. Terp prøvene og drillkapitlene —
   sjangergjenkjenning + føring + tabelloppslag + kontekst-tolkning gir poenggulvet,
   og teori-/bevissporet (Del 4–5) gir toppkarakteren.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `met1190-bi` med alle 30
   kapitler + 9 prøvekapitler (id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites/linkedChapterId) etter mønster `COURSE_BI_OKONOMI`
   i `src/lib/data/textbook-courses-matte.ts`, wiret i
   `textbook-courses-hoyskole.ts`; `sectionNames` fra makrostruktur-tabellen (§2).
   **`number` er del-basert** («7.1», aldri lineær) — bokforsiden grupperer på
   `number.split('.')[0]`. Institusjon = **Handelshøyskolen BI** i
   `institusjoner.ts` (finnes allerede fra MET 2910/2920), visningsnavn «MET 1190
   Statistikk».
2. **Del 0** (kap. 0.1–0.3) — etablerer sjangerkodene A–R, frekvenstallene, de tre
   sensorreglene («vis all utregning» + «konkluder i kontekst» + «symbolsk svar»),
   formelhefte-/tabelloppslag-håndverket og den **aktive R-modulen** (lese + skrive
   + tolke) som resten refererer til.
3. **Teorisporet i avhengighetsrekkefølge**: Del 1 (deskriptiv) → Del 3 (fordelinger)
   → Del 4 (lineærkombinasjon) → Del 5 (estimatorteori). Del 4–5 er teori-/
   bevissporet der toppkarakteren avgjøres; bygg gjerne én agent per hel del, men gi
   agenten HELE delens kontrakter. Drillkapitlet (5.3) bygges av samme agent som Del 5.
4. **Inferenskjernen + regresjon**: Del 6 (KI μ) → Del 7 (test μ) → Del 8 (andel) →
   Del 9 (regresjon). Del 9 (4 kapitler) kan splittes, men gi begge agentene HELE
   delens kontrakter. Drillkapitlene (7.2, 8.2, 9.4) bygges av delens agent.
5. Del 2 (sannsynlighet/kombinatorikk) etter Del 0 — lavfrekvent, bygges når kjernen
   står.
6. Del 10 til slutt (R-flervalg-stordrillen, den kryssgående stordrillen og
   øvingseksamenene gjenbruker alle temaene; øvingseksamen-agenten leser HELE
   skjelettet — kap. 10.1–10.5 krever alle delene).
7. **Prøvekapitler** (§4, 36 stk) legges som `met1190-bi-<del>-prove`, chapterNumber
   `<del>.P`, bygget av delens agent.
8. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; escape `"` i norske sitattegn og i R-kode);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\bar`, `\\hat`, `\\sqrt`, `\\sum`, `\\beta`, `\\rho`, `\\sigma`); konsistent
      notasjon: $\bar{x}$, $s_X$, $s_{XY}$, $r_{XY}$, $\hat{p}$, **$\hat{\beta}_1$
      (konstant) / $\hat{\beta}_2$ (stigningstall) — BI-notasjon**, $H_0$/$H_1$,
      $\alpha$, $Z$/$T$, df = n − 1 / n − 2.
- [ ] **BI-regresjonsnotasjon**: modellen er $Y=\beta_1+\beta_2 X+e$ med $\beta_1$ =
      konstantledd, $\beta_2$ = stigningstall — ALDRI $\beta_0$/$\beta_1$ (grep etter
      `\\beta_0` skal gi 0 treff i met1190-bi-filer).
- [ ] **«Vis all utregning» i ALLE løsningsforslag (utenom R-flervalg)**: formelen
      fra vedlegget skrevet eksplisitt ut FØR innsetting; tall inn; **referanse-
      fordeling (Z/T) og df navngitt**; **tabelloppslag** der z/t hentes (kalkulatoren
      har INGEN innebygde fordelinger); tallsvar med enhet. Ubegrunnede fasitsvar er
      byggefeil.
- [ ] **«Konkluder i kontekst» i ALLE test-/KI-/regresjonsløsninger**: hver test/
      estimat avsluttes med en eksplisitt tolkningssetning i oppgavens språk — aldri
      bare «forkaster/forkaster ikke $H_0$». Kontraktfestet `warning` i kap. 6.2,
      7.1–7.2, 8.1–8.2, 9.3–9.4.
- [ ] **«Symbolsk svar»-`warning` i teorisporet**: kap. 4.2, 5.1, 5.2, 5.3 har
      eksplisitt `warning` om at svaret skal stå med bokstaver «uten å anta noe om
      a,b,c»; tall settes ikke inn før teksten ber om det.
- [ ] **Tabelloppslag-mal**: kap. 0.2 har z- og t-tabelloppslag som `theorem`/
      prosedyre-blokk (kumulativ standardnormal + symmetri + invers; kritisk
      $t_{\alpha,df}$/$t_{\alpha/2,df}$); gjenbrukt i kap. 3.2, 6.1–6.2, 7.1, 8.1.
      Kalkulatorfunksjoner for fordelinger nevnes ALDRI som løsningsvei (tabellene er
      hjelpemiddelet).
- [ ] **Aktiv R-modul + R-blokker**: kap. 0.3 har R-grunnvokabular (lese + SKRIVE) +
      funksjonskart; hvert fordelings-/inferens-/regresjonskapittel (3.1, 3.2, 6.1,
      7.1, 8.1, 9.2) har et kontraktfestet **R-kode-lese-OG-skrive-blokk**; kap. 10.1
      er R-flervalg P1–P5-stordrillen. Alle R-utskrifter/kodesnutter **nyskrevne**.
- [ ] **Fordelings-/df-valg som `theorem`-blokker + «Riktig fordeling/df»-`warning`**:
      t for μ (df = n − 1, kap. 6.1/7.1), z for andel med $p_0$ i standardfeilen
      (kap. 8.1), df = n − 2 i regresjon (kap. 9.2–9.3) — hver med «(på vedlegget)»-
      merking der formelen står der.
- [ ] **$p_0$-i-standardfeilen-`warning`**: kap. 8.1/8.2 har eksplisitt `warning` om
      at z-testen for én andel bruker hypoteseverdien $p_0$ (ikke $\hat{p}$) i
      standardfeilen.
- [ ] **Teori-/bevisspor bygget**: kap. 4.1–4.2 (symbolske lineærkombinasjoner,
      bilineæritet, kryssledd faller), kap. 5.1 (forventningsretthet-bevis
      $E(S_X^2)=\sigma^2$ med oppgitte hjelperesultater), kap. 5.2 (SGT-betingelser,
      konsistens via $\text{Var}\to 0$, tetthetsevaluering), kap. 5.3 (drill begge
      undertyper) — som `theorem`/prosedyre-blokker med stegvis bevis og intuisjon.
- [ ] **To-spors regresjon**: kap. 9.1 (fra deskriptive mål, spor 1) OG kap. 9.2
      (fra rådatatabell med residualer + `lm()`-utskrift, spor 2) er begge fullt
      bygget; kap. 9.4-drillen har minst én gjennomregnet case per spor; fortegn-på-r-
      warning ($r=\pm\sqrt{R^2}$, fortegn = $\hat{\beta}_2$) i kap. 9.3.
- [ ] **Notasjonskonsistens (grep over alle met1190-bi-filer)**. Forbudte termer/
      temaer (0 forekomster, kun nevnt som ikke-pensum i Del 0): **to-utvalg /
      to-utvalgs t / differanse μ₁−μ₂ / to andeler p₁−p₂, kjikvadrat, diskret
      simultanfordeling, Poisson, multippel regresjon, ANOVA, bootstrap, bayesiansk**.
      Påkrevd/standard: «vis all utregning», «konkluder i kontekst», «symbolsk svar»,
      tabelloppslag, t vs. z + riktig df, $p_0$-i-standardfeilen, forventningsretthet/
      konsistens/SGT, R-flervalg P1–P5.
- [ ] **Regneprosedyrer som `theorem`-blokker**: deskriptiv-formlene (1.1–1.2),
      regneregler E/Var/Cov/Cor (4.1), forventningsretthet-/SGT-bevis (5.1–5.2),
      t-KI og t-test (6.2, 7.1), Wald-KI og z-test for andel (8.1), MKM + `lm()`-
      lesemal + $SE(\hat{\beta}_2)$ + koeffisient-test (9.1–9.3) — hver i emnets
      notasjon med «(på vedlegget)»-merking der det gjelder.
- [ ] **Gjennomregnede anvendte case**: hvert PERFEKT-kapittel har minst ett eksempel
      på eksamensnivå i anvendt innramming (IQ, E6-fart, søvn, boligpris, lykke/
      inntekt, oppslutning), løst som A-besvarelse med all utregning OG kontekst-
      tolkning; teorisporets eksempler er symbolske der teksten krever det.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-blokk med kryssbok-lenker (kun til kapitler som
      finnes — verifiser id-ene mot `textbook-courses-matte.ts`/`-hoyskole.ts` i
      BYGGEKONTRAKT-fasen) + `collapsible` Symbol- og formelliste per delkapittel (med
      «(på vedlegget)»-merking), Motivasjon-`text`, definisjoner/regneprosedyrer/
      bevisprosedyrer i emnets notasjon, Typiske feil-`warning`, 2–4 eksempler (siste
      på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case +
      8–12 oppgaver.
- [ ] **Quiz-sum ≥ 541 og flashcard-sum ≥ 508** per kvotetabellen i §3
      (kontrollsummér — den er autoritativ); quizzene som metode-/føringssjekk med
      distraktorer fra feilkatalogen (t/z, df, $p_0$-felle, symbolsk svar, fortegn på
      r, `dbinom`/`pbinom`, `sd`/varians, median partall); R-flervalg-quiz i P1–P5-
      format.
- [ ] **Prøver**: 4 per temadel 1–9 (36 stk) + R-flervalg-stordrill (10.1) +
      kryssgående stordrill (10.2) + 3 øvingseksamener (10.3–10.5); settene og prøvene
      dekker samlet sjangrene A–R minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver, tallverdier OG R-kode/-utskrifter nyskrevne —
      egne tall, egen anvendt kontekst, egne formuleringer; ingen oppgavetekster,
      R-utskrifter eller sensorformuleringer gjengitt ordrett (skjelettets
      mønstereksempler er selv omskrivninger med nyskrevne tall og skal varieres
      videre); standardformler, standardteoremer og formelhefte-innhold er faglig
      allemannseie.
- [ ] **BI-særtrekk synlig**: Del 0 sier eksplisitt **vekttall** (ikke poeng), A–F,
      **formelhefte + statistiske tabeller (z + t)**, kalkulator **uten** innebygde
      fordelinger (tabelloppslag forventes), R-flervalg som Oppgave 1, 4-oppgavemal og
      de tre sensorreglene («vis all utregning» + «konkluder i kontekst» + «symbolsk
      svar»).
- [ ] **`(verifiser)`-markering**: sensorkrav uten offisiell veiledning (vekt-
      fordeling, ensidig-halvering, kontekst-tolkningskravets styrke) er merket
      `(verifiser)` — grep `-i verifiser` i verifiseringsbølgen (jf. JUS1111-lærdommen).
- [ ] **Verifiser rendering**: prod-server + curl mot institusjonsside
      (Handelshøyskolen BI), bokforside, kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. `getChapterMeta`-lærdommen.
