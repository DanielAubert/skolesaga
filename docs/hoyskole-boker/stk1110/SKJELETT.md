# Bokskjelett: STK1110 Statistiske metoder og dataanalyse — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (22 avsluttende skoleeksamener 2004–2025 fra UiOs
> STK1110-arkiv, 11 sett lest grundig med offisielle løsningsforslag 2015–2025).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Strukturforbilde:** `docs/hoyskole-boker/stk1100/SKJELETT.md` (forgjengeren,
> samme institusjon og formelsamling). Men temavektene er VRIDD motsatt vei etter
> analysens del 8: STK1100 er UiOs *modellerings*-emne og stopper ved
> konfidensintervall; **STK1110 er *inferens*-emnet og gjør hypotesetesting og
> lineær regresjon til bærebjelker**. STK1100s sannsynlighetsapparat
> (simultantetthet, MGF/Jacobi, gamma/χ², kombinatorikk) **forutsettes, men
> re-testes nesten aldri** (≈0/22 som selvstendig oppgave) → det får INGEN egne
> teorikapitler, bare en kort repetisjon med kryssbok-lenker (kap. 0.2). **ML-kjeden
> er broen mellom bøkene.**

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `stk1110` |
| Tittel | **STK1110 Statistiske metoder og dataanalyse** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo |
| Arketype | Regnefag (kvantitativt emne med fast oppgavetradisjon) |
| Antall kapitler | **25** (1 eksamenskart + 1 STK1100-bro + 20 tema hvorav 3 drill + 3 eksamenstrening) |
| Estimert totaltid | **≈ 1 485 min ≈ 25 timer** |
| Quiz totalt | **515** (krav ≥500) |
| Flashcards totalt | **505** (krav ≥500) |

**Pitch (ett avsnitt):** STK1110-eksamen har en usedvanlig stabil form: **2–3 store
oppgaver, én per søyle, hver en kjede av 4–7 punktdelte deloppgaver (a, b, c, …) i
samme kontekst der tidlige svar gjenbrukes.** De tre søylene bærer emnet i balanse
og opptrer hver i ~90 % av settene: **(1) estimeringsteori** (momentestimator vs.
ML med den faste kjeden `L→ℓ→score→løs→bekreft maks`, forventningsretthet, varians,
Fisher-informasjon → Wald-KI → Cramér–Rao, og et roterende Bayes-/konjugeringspunkt),
**(2) hypotesetesting + konfidensintervall** (det komplette test-ritualet med t-test
som arbeidshest, ett-/to-utvalg/parvis/andeler, utledning av signifikansnivået,
P-verdi, CI↔test-dualitet, styrke/dimensjonering, samt ANOVA og et ikke-parametrisk
alternativ), og **(3) lineær regresjon** — den tunge — (enkel og multippel, minste
kvadrater/matriseform, R²/justert R², residualdiagnostikk, prediksjon, og
**tolkning av R-utskrift**). Boka er bygget som målrettet drill mot nettopp disse
tre kjedene, med ett drillkapittel per søyle. Formelsamlingen for STK1110 er alltid
tillatt (og legger ofte nødvendige kvantiler rett i oppgaveteksten), så boka trener
det eksamen faktisk måler: å *velge* riktig fordeling/test/intervall, *utlede* det
som ikke står i formelsamlingen (ML, Fisher-info, pivotaler, LS-estimatorer, E/V av
estimatorer), *tolke R-utskrift* og *skrive testritualet ut i full detalj* — ikke
pugging.

**Kritisk notasjonsregel (gjelder HELE boka)** — settenes egen notasjon følges:

- Store bokstaver for stokastiske variable ($X$), små for observasjoner ($x$); hatt
  for estimatorer ($\hat{\theta}, \hat{\mu}, \hat{\sigma}, \hat{\beta}$); $\bar{X}$
  og $S^2$ for utvalgsgjennomsnitt/-varians. **Skill estimator (stor bokstav,
  stokastisk) og estimat (tall) konsekvent** — et gjennomgående sensorkrav (§5.12).
- $X \sim N(\mu, \sigma^2)$ — **annet argument er variansen**, aldri
  standardavviket. $\Phi$ for standardnormal fordelingsfunksjon.
- Kvantilnotasjon med **øvre haleareal**: $z_\alpha$, $t_{\nu,\alpha}$,
  $\chi^2_{\nu,\alpha}$, $F_{\nu_1,\nu_2,\alpha}$ (dvs. $P(Z > z_\alpha) = \alpha$).
  Tosidige intervaller/tester bruker $\alpha/2$-kvantilen.
- Regresjon: $\beta_0$ konstantledd, $\beta_1,\dots,\beta_k$ helninger; feilledd
  $\varepsilon_i \sim N(0,\sigma^2)$ uavhengige. **Frihetsgrader:** $n-1$ (ett
  utvalg), $m+n-2$ (pooled to-utvalg), $n-2$ (enkel regresjon), $n-k-1$ (multippel
  regresjon med $k$ prediktorer). Feil frihetsgrader straffes hardt (§5.1).
- **R-utskrift** brukes gjennomgående for regresjon — boka lærer studenten å **lese**
  `lm`-sammendraget (Estimate | Std. Error | t value | Pr(>|t|), Residual standard
  error, Multiple/Adjusted R-squared, F-statistic), **ikke å skrive kode**. Dette er
  en skarp kontrast til STK1100, som drillet Python/numpy. **STK1110-boka har INGEN
  kode.** R-utskrifter gjengis som rene tekst-tabeller i `text`-blokker (monospace).

**Formelsamling-prinsippet (gjelder HELE boka):** «Formelsamling for STK1110» er
alltid tillatt — alle standardfordelinger med $E$/Var, kvantiltabeller ($\Phi/z$,
$t$, $\chi^2$, $F$), standard KI- og testformler og regresjonsformlene ligger på
pulten (og nyere sett legger nødvendige kvantiler rett i oppgaveteksten). Hvert
kapittel merker derfor innholdet: **«står i formelsamlingen — tren *valg* og
oppslag»** (riktig fordeling, kvantil, frihetsgrad) vs. **«må utledes/regnes
aktivt»** (ML, Fisher-info, pivotaler, LS-estimatorer, E/V av estimatorer,
testritualet, konfunderingsargumentet). Ren memorering finnes ikke i dette emnet.

**KRYSSBOK-REGEL (gjelder HELE boka):** **STK1100 er IKKE bygget** (skjelett-stadiet
per juli 2026 — verifisert: ingen `stk1100-*`-filer i `_registry.json`). Alle
STK1100-referanser skrives derfor som **KLARTEKST** med kapittelnummer + tittel
(f.eks. «STK1100 kap. 5.2 *Maximum likelihood og momentmetoden*»), **ikke** som
markdown-lenke. Den tiltenkte lenkedestinasjonen føres i parentes som `(→ stk1100-5-2)`,
slik at verifikatoren (fase 6) enkelt bytter til
`[STK1100 kap. 5.2 …](/bok/stk1100/stk1100-5-2)` **når STK1100 er live**. Byggeren
SKAL sjekke `_registry.json` for `stk1100-*` før eventuell lenking. **R1/R2/S1/S2 ER
bygget** → kryssbok-lenker dit skrives som vanlige markdown-lenker.

**Symbol- og formelliste-regel (gjelder HELE boka):** Hvert delkapittel med
symboler/formler skal ha en `collapsible` **«Symbol- og formelliste»** rett etter
Forkunnskaper som forklarer ALLE symboler og formler brukt i *nettopp det
delkapitlet* — per delkapittel, ikke arv fra tidligere (README-leserkrav). Ingen av
kapitlene i denne boka er symbolfrie; lista er obligatorisk overalt.

**Avgrensning mot STK1100 (gjelder HELE boka):** STK1110 forutsetter — men gjentar
IKKE — STK1100s sannsynlighetsapparat: simultantettheter/marginaler, MGF, Jacobi,
transformasjonsformelen, gamma/χ²-regningen og kombinatorikk testes ≈0/22 som
selvstendig oppgave. Disse verktøyene får derfor **ingen egne teorikapitler**, bare
en kompakt oppfriskning i **kap. 0.2** med klartekst-referanser til STK1100. Der et
inferens-tema *bruker* et STK1100-verktøy (f.eks. transformasjons-pivot `2X/\theta
\sim \chi^2$ i kap. 2.5) repeteres verktøyet i én-to setninger med kryssbok-referanse
— ikke som ny teori.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
De tre søylene er likevektede (hver ~90 % av settene) og får hver sin fulle del med
eget drillkapittel:

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og STK1100-broen | 2 | Prioriteringsverktøyet + kompakt oppfriskning av det forutsatte STK1100-apparatet (fordelinger, transformasjon, gamma/χ², ML-grunnlaget) med kryssbok-lenker. |
| 1 | Estimeringsteori | 5 | Punktestimering (ML+moment) **95 %**, forventningsretthet/varians **91 %**, ML-utledning **82 %**, Fisher-info/MLE-asymptotikk **45 % (stigende)**, Bayes/konjugering **9 % (nytt 2022)** → 4 teorikapitler + drillkapittel (estimeringskjeden, sjanger A–C). Bærer den faste Oppgave 1. |
| 2 | Hypotesetesting og konfidensintervall | 7 | KI **95 %**, hypotesetesting **91 %**, to-utvalg/pooled **36 %**, andeler **23 %**, styrke **23 %**, eksakt pivot **18 %**, ANOVA/ikke-param **9 %** → 6 teorikapitler + **drillkapittel for det komplette test-ritualet (sensorkravet, sjanger E)**. |
| 3 | Lineær regresjon | 7 | Enkel regresjon **91 %**, R-utskrift-tolkning **68 %**, multippel/konfundering **50 %**, diagnostikk **41 %**, R²/justert R² **36 %**, prediksjonsintervall **18 %**, logistisk **5 %** → 6 teorikapitler + drillkapittel (regresjonsoppgaven fra R-utskrift, sjanger H–K). Den tunge storoppgaven. |
| 4 | Eksamenstrening | 3 | Sjangerguiden A–P + 3 komplette øvingseksamener etter den kjededelte tredelingen (3 storoppgaver med a–f-kjede, én per søyle). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og STK1100-broen |
| 1 | Estimeringsteori |
| 2 | Hypotesetesting og konfidensintervall |
| 3 | Lineær regresjon |
| 4 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Tre drillkapitler (1.5, 2.7, 3.7) ligger inne i temadelene sine** i stedet for i
   siste del — de tre søylene er 90 %-gjengangere som må drilles umiddelbart etter
   teorien (samme grep som STK1100/TMA4245/ECON1310). Del 4 beholder sjangerguiden og
   øvingseksamenene. **Test-ritual-drillen (2.7) er et EKSPLISITT sensorkrav** (§4.5):
   fasiten skriver ut hele ritualet inkl. utledningen av at nivået blir α.
2. **STK1100s sannsynlighetsapparat får INGEN egne teorikapitler** — kun en kompakt
   oppfriskning i kap. 0.2 med kryssbok-referanser (simultantetthet, MGF/Jacobi,
   gamma/χ², kombinatorikk testes ≈0/22 som selvstendig oppgave). Dette er det
   tyngste avviket fra DNA-malen («ett kapittel per tema»); begrunnelse: analysens
   del 1 og 8 — det er forgjengeremnets (STK1100s) domene og forutsettes kjent.
3. **R-utskrift-tolkning får eget kapittel (3.2)** — ikke en standard DNA-blokk, men
   sensor-nøkkelferdigheten (68 %) og det motsatte av STK1100 (som drillet
   Python-koding). **Boka inneholder ingen kode**; R-utskrifter er tekst-tabeller.
4. **Tre likevektede tunge deler** (ikke én dominant tema-del) — omfanget fordeles
   jevnt over de tre søylene, som hver har ~90 % frekvens. Dette speiler analysens
   hovedfunn: bredden er poenget, ingen enkeltferdighet dominerer.
5. **Del 2 har 7 kapitler (DNA-grensen).** Ved bygging: gi begge agentene (hvis delt)
   HELE Del 2s kontrakter, og flagg delen for konsistenssjekk i fase 6 (notasjon for
   testritual, frihetsgrader og dualitet må være enhetlig på tvers).
6. **Kryssbok-lenker til STK1100 er KLARTEKST** (ikke aktive lenker) inntil STK1100
   er bygget — se KRYSSBOK-REGEL i §1.
7. **25 kapitler** — midt i DNA-rammen (20–35). Tre likevektede søyler krever hver en
   full kapittelkjede med drill; STK1100-broen komprimeres til ett kapittel fordi den
   ikke re-testes.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–P) refererer til
oppgavetype-katalogen fra analysen §3, som gjengis for studenten i kap. 0.1:
**A** momentestimator vs. ML · **B** forventningsretthet/varians/estimator-
sammenligning · **C** Fisher-info + MLE-fordeling · **D** konfidensintervall ·
**E** hypotesetest (full pakke) · **F** styrke/type II/dimensjonering ·
**G** to-utvalg og parvise data · **H** enkel lineær regresjon · **I** multippel
regresjon · **J** modelldiagnostikk · **K** prediksjonsintervall vs. KI for
forventet respons · **L** Bayesiansk inferens · **M** enveis ANOVA ·
**N** eksakt fordelingsteori/transformasjons-pivot · **O** ikke-parametrikk/
bootstrap · **P** logistisk regresjon.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart og STK1100-broen

#### Kapittel 0.1: Eksamenskartet: slik testes STK1110

- **id:** `stk1110-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de tre likevektede søylene, temafrekvensene, sjangerkatalogen A–P og lesestrategien som styrer hele boka — og hva som bevisst er utelatt.
- **Eksamensbelegg:** Metakapittel — bygger på alle 22 sett (2004–2025), grundig på
  2015–2025. Skal gjengi: (i) **formen:** 4 timers skriftlig skoleeksamen (økte fra 3
  til 4 timer rundt 2009–2013), godkjent kalkulator + formelsamling for STK1110 som
  eneste hjelpemidler; bokstavkarakter A–F; avsluttende teller 100 %, to
  obligatoriske innleveringer må være godkjent for adgang; **2–3 store oppgaver, hver
  en kjede av 4–7 punktdelte deloppgaver (a, b, c, …)** — ingen kortsvars-/flervalgsdel;
  nødvendige kvantiler (z, t, χ², F) legges ofte rett i oppgaveteksten. (ii) **Den
  faste tredelingen:** oppgave 1 = estimeringsteori, oppgave 2 = hypotesetesting+KI,
  oppgave 3 (den tunge) = lineær regresjon med R-utskrift — stabil over hele
  perioden. (iii) **Temafrekvens-tabellen** (andel av 22 sett): KI 95 %,
  punktestimering 95 %, enkel regresjon 91 %, hypotesetesting 91 %,
  forventningsretthet/varians 91 %, ML-utledning 82 %, R-utskrift-tolkning 68 %,
  P-verdi 64 %, momentestimator 50 %, multippel regresjon 50 %, Fisher-info 45 %,
  diagnostikk 41 %, R²/justert R² 36 %, to-utvalg 36 %, LS-utledning 36 %, andeler
  23 %, Poisson 23 %, styrke 23 %, eksakt pivot 18 %, prediksjonsintervall 18 %,
  Bayes 9 %, ANOVA 9 %, F-test varians 9 %, ikke-parametrikk 9 %, logistisk 5 %.
  (iv) **De tre kjedene som ryggrad:** estimeringskjeden `L→ℓ→score→løs→bekreft maks
  →forventningsretthet→varians→Fisher-info→Wald-KI`; testritualet `H₀/Hₐ→observator
  m/fordeling→utled nivå α→P-verdi→konklusjon i ord→dualitet`; regresjonskjeden
  `LS/matrise→inferens for koeffisienter→R²/justert R²→diagnostikk→prediksjon`.
  (v) Sensorens elleve krav (fra §4). (vi) Karakterskillene: bestått = åpningsdelene
  (definer modell, enkel estimator, standard t-KI, tolke R-utskrift); C/B = full
  ML-utledning + komplett testritual + standard regresjonsinferens; A =
  Fisher-info→Wald-KI m/Cramér–Rao, eksakt/pivot-utledninger, matriseregresjon
  (hatmatrise), konfunderingsargumentet, konjugering/Bayes, ikke-parametriske
  alternativ. (vii) **Det bevisst utelatte:** ingen ren sannsynlighetsregning
  (simultantetthet, MGF, Jacobi, kombinatorikk, ordningsvariable) — STK1100s domene,
  se kap. 0.2; ingen Python-koding — STK1110 tolker R-utskrift. (viii) Prognosen for
  neste ordinære eksamen (2–3 kjededelte oppgaver som dekker de tre søylene, med
  Bayes/ANOVA/F-test/ikke-param/eksakt-pivot på rotasjon).
- **Innholdskontrakt:** Sjangerkatalogen A–P presenteres som studentens sjekkliste
  med frekvens og typisk plassering (hvilken av de 2–3 oppgavene). Leseplan: Del 1–3
  er de tre likevektede «må perfekt»-søylene; kap. 0.2 er STK1100-broen (les hvis
  rusten på sannsynlighet). Avslutt med tidsbudsjett-logikk for 4-timerseksamen (2–3
  oppgaver à ~80–120 min; i en kjede a–f: hopp aldri av hvis ett delpunkt stopper —
  senere punkter kan løses med *oppgitt* mellomresultat).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet
  har 3 kjededelte oppgaver à 240/3 min der oppgave 3 er regresjonen med R-utskrift —
  sett opp tidsbudsjett og rekkefølge, og forklar hvorfor et blankt deltrinn ikke
  betyr at resten av kjeden er tapt».
- **Typiske feil:** Metafeilene: pugge formler som ligger i formelsamlingen i stedet
  for å trene valg/utledning; øve kun på estimering og møte veggen på regresjonen (som
  bærer mest poeng); hoppe over testritualet fordi «det er bare å sette inn i formel»
  (sensor krever hele utledningen); forberede ren sannsynlighetsregning (feil emne).
- **Quiz: 10 · Flashcards: 10** (frekvenser, sjangre A–P, sensorkrav, de tre kjedene)

#### Kapittel 0.2: STK1100-broen: hva forutsettes (kompakt repetisjon)

- **id:** `stk1110-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori (repetisjon)
- **description:** En kompakt oppfriskning av STK1100-apparatet STK1110 bygger på — fordelinger, forventning/varians-regler, transformasjon, gamma/χ² og ML-grunnlaget — med kryssbok-referanser, ikke ny teori.
- **Eksamensbelegg:** Ikke et eget oppgavetema (≈0/22 som selvstendig oppgave), men
  **verktøykassen bak alle tre søylene.** Analysens del 8 dokumenterer at STK1110
  forutsetter, ikke gjentar, dette. Kapitlet gjør studenten kampklar uten å bruke
  eksamensplass på repetisjon. Prioritet: **kjenne** (fundament, ikke testet direkte).
- **Forkunnskaper (kryssbok):** STK1100 kap. 1.2 *Stokastiske variable, forventning
  og varians* (→ stk1100-1-2), kap. 2.1 *Kontinuerlige fordelinger* (→ stk1100-2-1),
  kap. 2.2 *Gammafordelingen og kjikvadrat* (→ stk1100-2-2), kap. 4.2
  *Transformasjonsteknikkene* (→ stk1100-4-2), kap. 5.2 *Maximum likelihood og
  momentmetoden* (→ stk1100-5-2). *(Klartekst inntil STK1100 er bygget — se
  KRYSSBOK-REGEL.)* For integrasjon/derivasjon:
  [R2 2.4 Bestemt integral](/bok/r2/r2-2-4),
  [R1 4.1 Derivasjonsregler](/bok/r1/r1-4-1).
- **Innholdskontrakt:** KOMPAKT — hvert punkt maks noen linjer + kryssbok-referanse,
  ingen fulle utledninger (de ligger i STK1100). (1) **Regnereglene for E og Var**
  (aktivt): $E(aX+bY)=aE(X)+bE(Y)$; $\text{Var}(aX+bY)=a^2\text{Var}(X)+b^2\text{Var}(Y)
  +2ab\,\text{Cov}(X,Y)$ — kovariansleddet er nøkkelen; $\text{Var}(\bar X)=\sigma^2/n$.
  (2) **Fordelingskatalogen** studenten må kjenne til inferens: normal $N(\mu,\sigma^2)$,
  eksponensial, gamma$(\alpha,\beta)$ med $E=\alpha\beta$, **kjikvadrat $\chi^2_n =$
  gamma$(n/2,2)$**, Poisson, binomisk — alle med $E$/Var i formelsamlingen. (3)
  **Transformasjonsformelen** $g(v)=f(x(v))\cdot|dx/dv|$ og CDF-metoden — verktøyet bak
  eksakte pivotaler (brukes i kap. 2.5). (4) **Gamma/χ²-koblingen** $2X/\theta \sim
  \chi^2$ og «sum av uavhengige gamma med felles skala er gamma» — pivot-råstoffet. (5)
  **ML-grunnlaget:** likelihood $L(\theta)=\prod f(x_i;\theta)$, log-likelihood
  $\ell(\theta)$, scorefunksjonen $s(\theta)=\ell'(\theta)$ — **broen til hele Del 1**.
  Avslutt eksplisitt: «Alt dette forutsettes; STK1110 forlenger ML-kjeden nedover mot
  *testing* og utover mot *regresjon*.»
- **Oppgavesjangre:** Fundament, ikke egen sjanger. 4–6 korte oppfriskningsoppgaver:
  regn $E$/Var av en lineærkombinasjon; identifiser $\chi^2_n$ som gamma; sett opp
  $\ell(\theta)$ for en gitt tetthet (uten å løse — det gjøres i kap. 1.2).
- **Typiske feil:** Tro at STK1110 re-tester simultantetthet/MGF (det gjør det ikke);
  glemme kovariansleddet i Var av en sum; ha rustent ML-oppsett inn i eksamen og tape
  tid på det i oppgave 1.
- **Quiz: 15 · Flashcards: 25** (kryssbok-repetisjon, distribusjonskatalog, ML-oppsett)

**Prøve-kvote Del 0:** ingen (metadel + repetisjon).

---

### Del 1 — Estimeringsteori *(prioritet: PERFEKT — bærer den faste Oppgave 1, ~91–95 %)*

#### Kapittel 1.1: Estimatorers egenskaper: forventningsretthet, varians, MSE og konsistens

- **id:** `stk1110-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk1110-0-2`
- **kapitteltype:** teori
- **description:** Hva gjør en estimator god — forventningsretthet, varians, skjevhet, MSE og konsistens — og hvordan to estimatorer sammenlignes og den beste velges.
- **Eksamensbelegg:** Sjanger B: forventningsretthet + varians i **≈20/22 (91 %)**,
  nesten alltid i estimeringsoppgaven; estimator-sammenligning på varians i ~30 %
  (moment vs. ML, eller to ad hoc-estimatorer: H2012, H2014, H2019, H2021); konsistens
  via Tsjebysjeff i ~18 % (H2005, H2006, H2018). Prioritet: **perfekt** (nivå 1).
- **Forkunnskaper:** kap. 0.2; STK1100 kap. 5.1 *Estimatorer og egenskaper*
  (→ stk1100-5-1) *(klartekst)*.
- **Innholdskontrakt:** **Forventningsretthet** $E(\hat\theta)=\theta$; **skjevhet**
  $b(\hat\theta)=E(\hat\theta)-\theta$ — kvantifiseres og korrigeres når oppgaven ber
  om en forventningsrett estimator. **Varians** $\text{Var}(\hat\theta)$. **MSE**
  $=\text{Var}(\hat\theta)+b(\hat\theta)^2$ som sammenligningsmål. **Konsistens** via
  Tsjebysjeff: $\text{Var}(\hat\theta)\to 0$ (og forventningsrett/asymptotisk) $\Rightarrow$
  $\hat\theta \xrightarrow{P} \theta$. **Estimator-sammenligning:** ved to
  forventningsrette estimatorer velges den med minst varians; ved skjevhet
  sammenlignes MSE. **Sensorkrav (§4.2–4.3):** skill **estimator** (stor bokstav,
  stokastisk) fra **estimat** (tall); vis forventningsretthet og varians *fullstendig*.
  Kobling framover: den teoretiske nedre grensen for variansen (Cramér–Rao) kommer i
  kap. 1.3.
- **Oppgavesjangre:** B. Mønstereksempel: «To forventningsrette estimatorer $\hat\beta_1$
  og $\hat\beta_2$ for parameteren $\beta$ er gitt. Regn ut begge varianser, avgjør med
  begrunnelse hvilken du foretrekker, og vis at $\hat\beta_1$ er konsistent.»
- **Typiske feil (analysen §5.12, §5.3):** Forveksle estimator og estimat; glemme å
  kvantifisere/korrigere skjevhet når oppgaven krever forventningsrett estimator;
  sammenligne estimatorer på varians når de har ulik skjevhet (skal bruke MSE);
  ufullstendig variansutledning.
- **Quiz: 25 · Flashcards: 30**

#### Kapittel 1.2: Momentmetoden og maximum likelihood — den faste kjeden

- **id:** `stk1110-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `stk1110-1-1`
- **kapitteltype:** teori
- **description:** Momentestimatoren (E(X)=X̄) og ML-kjeden L→ℓ→score→løs→bekreft maksimum (ℓ''<0), med invariansprinsippet — kjernen i hver eneste Oppgave 1.
- **Eksamensbelegg:** Sjanger A: ML i **≈18/22 (82 %)**, momentestimator i **≈11/22
  (50 %)** — nesten alltid Oppgave 1. Ofte skal moment- og ML-estimator vises å
  sammenfalle (Poisson: begge $=\bar X$, H2005/H2017/H2020). Invariansprinsipp for
  transformert parameter H2022. Prioritet: **perfekt** (nivå 1 punkt 1).
- **Forkunnskaper:** kap. 0.2 (ML-oppsett), 1.1; STK1100 kap. 5.2 *Maximum likelihood
  og momentmetoden* (→ stk1100-5-2) *(klartekst)*.
- **Innholdskontrakt:** **Momentmetoden:** sett første teoretiske moment $E(X)$ lik
  empirisk $\bar X$ og løs for parameteren; der $E(X_i)=g(\theta)$ er ikke-triviell
  (Rayleigh $\theta\sqrt{\pi/2}$, Weibull $\beta\Gamma(1+1/\alpha)$) gir dette et
  eksplisitt uttrykk. **ML-kjeden (aktivt, ALLE trinn — sensorkrav §4.2):**
  $L(\theta)=\prod_{i=1}^n f(x_i;\theta) \to \ell(\theta)=\log L(\theta) \to
  s(\theta)=\ell'(\theta) \to$ **løs** $s(\hat\theta)=0 \to$ **BEKREFT MAKSIMUM** med
  $\ell''(\hat\theta)<0$ (eller $s'(\theta)<0$) — dette siste trinnet er obligatorisk og
  glemmes ofte (§5.3). **Invariansprinsippet:** ML for en transformert parameter er
  $\hat\psi=g(\hat\theta)$. Vis Poisson-tilfellet der moment og ML sammenfaller. Merk
  skillet fra STK1100: her ligger vekten på inferensen som følger (E/V, Fisher, KI),
  ikke på selve fordelingsmodelleringen.
- **Oppgavesjangre:** A. Mønstereksempel: «Observasjonene er Poisson-fordelte med rate
  $\lambda$. Vis at $\bar X$ er både moment- og ML-estimator, bekreft at
  ML-likningen gir et maksimum, at estimatoren er forventningsrett, og finn variansen.»
- **Typiske feil (analysen §5.3, §5.12):** **Glemme å bekrefte at ML-punktet er et
  maksimum** ($\ell''(\hat\theta)<0$) — hyppigste trekket her; derivere $\ell$ feil;
  ikke ta logaritmen først (regne på $L$ direkte og drukne i produktet); forveksle
  momentmetoden med minste kvadrater.
- **Quiz: 30 · Flashcards: 35**

#### Kapittel 1.3: Fisher-informasjon, MLE-asymptotikk, Wald-KI og Cramér–Rao

- **id:** `stk1110-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `stk1110-1-2`
- **kapitteltype:** teori
- **description:** Fisher-informasjonen I(θ), MLE-ens tilnærmede normalfordeling N(θ,1/(nI(θ))), Wald-konfidensintervallet og Cramér–Raos nedre grense — det som skiller A-besvarelsen.
- **Eksamensbelegg:** Sjanger C: Fisher-info + MLE tilnærmet normalfordelt i **≈10/22
  (45 %)**, **stigende siden 2016** (H2016, H2018, H2019, H2020, H2022, H2024, H2025).
  Cramér–Rao eksplisitt H2025. Wald-KI $\hat\theta \pm 1{,}96\,se(\hat\theta)$ i flere
  sett. Prioritet: **kunne→perfekt** (nivå 2 punkt 6; A-differensiator).
- **Forkunnskaper:** kap. 1.2; STK1100 kap. 5.2 (→ stk1100-5-2) og kap. 6.2
  *CLT-tilnærmet KI* (→ stk1100-6-2) *(klartekst)*.
- **Innholdskontrakt:** **Forventet informasjon i én observasjon**
  $I(\theta)=-E\!\left[\dfrac{\partial^2 \log f(X;\theta)}{\partial\theta^2}\right]$; for
  hele utvalget $I_n(\theta)=nI(\theta)$. **MLE-asymptotikk (sensorkrav §4.4 — nevn
  eksplisitt):** i store utvalg er $\hat\theta \approx N\!\left(\theta,
  \dfrac{1}{nI(\theta)}\right)$. **Wald-konfidensintervall:** $\hat\theta \pm
  z_{\alpha/2}\cdot se(\hat\theta)$ der $se(\hat\theta)=\sqrt{1/(nI(\hat\theta))}$ —
  **koble variansen eksplisitt til $1/(nI(\theta))$**. Der $se(\hat\theta)$ selv
  avhenger av parameteren, finnes en **asymmetrisk pivot-form**
  $[\hat\theta/(1+z/\sqrt n),\ \hat\theta/(1-z/\sqrt n)]$ — dette er et *trekk, ikke en
  feil* (§4.7; eksakt versjon i kap. 2.5). **Cramér–Rao:** ingen forventningsrett
  estimator har mindre varians enn $1/(nI(\theta))$ — Wald-variansen treffer denne
  grensen asymptotisk, derfor er MLE asymptotisk effisient. **Invariansprinsippet**
  (fra 1.2) brukes til å transformere Wald-KI-et.
- **Oppgavesjangre:** C + D (Wald-varianten). Mønstereksempel: «Finn Fisher-
  informasjonen $I(\beta)$ i én observasjon, angi den tilnærmede fordelingen til
  ML-estimatoren for stor $n$, konstruer et 95 % Wald-intervall, og forklar hvorfor
  variansen ikke kan bli mindre (Cramér–Rao).»
- **Typiske feil (analysen §5.4, §5.2):** Glemme minustegnet/forventningen i
  $I(\theta)=-E[\cdot]$; forveksle $I(\theta)$ (én obs.) og $I_n(\theta)=nI(\theta)$;
  ikke nevne MLE-asymptotikken eksplisitt når normaltilnærming brukes; hoppe rett til
  symmetrisk Wald der en eksakt/asymmetrisk pivot er riktigere.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 1.4: Bayesiansk inferens: konjugering og Bayes-estimatoren

- **id:** `stk1110-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `stk1110-1-2`
- **kapitteltype:** teori
- **description:** Aposteriorifordelingen π(θ|x)∝π(θ)·L(θ), konjugerte par gjenkjent ved å samle eksponentene (Poisson→gamma, gamma→gamma), og Bayes-estimatoren som nærmer seg MLE for stor n.
- **Eksamensbelegg:** Sjanger L: **≈2/22 (9 %)**, men **nytt roterende innslag siden
  2022** (H2022 Weibull/gamma→gamma, H2025 Poisson→gamma) — sannsynlig gjenganger.
  Prioritet: **kjenne** (nivå 3 punkt 14; A-differensiator).
- **Forkunnskaper:** kap. 1.2; kap. 0.2 (gammafordelingen). STK1100 kap. 2.2
  *Gammafordelingen* (→ stk1100-2-2) *(klartekst)*.
- **Innholdskontrakt:** **Aposteriori** $\pi(\theta\mid x)\propto \pi(\theta)\cdot
  L(\theta)$. **Konjugering:** gjenkjenn den konjugerte familien ved å **samle
  eksponentene** i produktet apriori×likelihood og lese av fordelingsformen — Poisson-rate
  med gamma-apriori gir **gamma-aposteriori** (H2025); gamma-oppsett gir gamma (H2022).
  **Bayes-estimatoren** = aposteriori forventning; for gamma$(\alpha,\beta)$ er den
  $\alpha\beta$ (kjent formel). **Koblingen til MLE:** for store $n$ dominerer
  likelihooden apriorien, og Bayes-estimatoren $\approx$ MLE — kommentér dette
  (sensorpoeng). Bare de konjugerte standardparene testes; ingen numerisk Bayes.
- **Oppgavesjangre:** L. Mønstereksempel: «Antall hendelser er Poisson$(\lambda)$ med
  gamma-apriori for $\lambda$. Vis at gamma er konjugert, angi aposteriorifordelingen
  ved å samle eksponentene, oppgi Bayes-estimatoren, og forklar hvorfor den ligger nær
  ML-estimatoren når $n$ er stor.»
- **Typiske feil (analysen §5.11):** Påstå konjugering uten å samle eksponentene og
  identifisere fordelingsfamilien; glemme normeringen (jobbe med proporsjonalitet men
  ikke gjenkjenne formen); forveksle apriori- og aposterioriparametrene.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 1.5: Drill: estimeringskjeden fra fordeling til Wald-KI (sjanger A–C)

- **id:** `stk1110-1-5` · **number:** 1.5 · **estimatedMinutes:** 80 · **prerequisites:** `stk1110-1-3`
- **kapitteltype:** drill
- **description:** Standardtreningen i estimeringsoppgaven: fra en (ofte «eksotisk») fordeling til momentestimator/ML, forventningsretthet, varians, Fisher-info og Wald-KI — den faste Oppgave 1, ledd for ledd.
- **Eksamensbelegg:** Estimeringsoppgaven er Oppgave 1 i praktisk talt hvert sett
  (kombinert frekvens for A+B+C ~95 %). Kjeden `moment/ML → bekreft maks →
  forventningsretthet → varians → Fisher-info → Wald-KI` er selve ryggraden. Ofte på en
  «eksotisk» fordeling (Rayleigh, Weibull, Pareto, eksponensial-varianter). Prioritet:
  **perfekt** (nivå 1 punkt 1 — den viktigste enkeltkjeden).
- **Forkunnskaper:** kap. 1.1–1.4.
- **Innholdskontrakt:** **Løsningsoppskrift (DNA-drillformat):** 1) **definer modellen**
  («La $X_i \sim \dots$ uavhengige»); 2) momentestimator ($E(X)=\bar X$) og/eller
  ML-kjeden med **bekreftet maksimum** ($\ell''<0$); 3) **forventningsretthet**
  $E(\hat\theta)$, korriger skjevhet om nødvendig; 4) **varians** $\text{Var}(\hat\theta)$;
  5) **Fisher-info** $I(\theta)$ → MLE $\approx N(\theta,1/(nI(\theta)))$; 6) **Wald-KI**
  $\hat\theta \pm z_{\alpha/2}se$, evt. asymmetrisk/eksakt pivot; 7) evt. et
  Bayes-/konjugeringspunkt (kap. 1.4) eller en estimator-sammenligning (kap. 1.1).
  Gjennomregnet eksamenscase med sensor-margnotater om hva som gir uttelling ved hvert
  ledd. **8–15 varianter** over ulike fordelinger, alle på eksamensnivå, hver som en
  liten a–f-kjede.
- **Oppgavesjangre:** A + B + C (samlet kjede). Mønstereksempel: «Levetider er
  Rayleigh-fordelte med parameter $\theta$. (a) Finn momentestimatoren. (b) Utled
  ML-estimatoren og bekreft maksimum. (c) Vis forventningsretthet eller kvantifiser
  skjevheten. (d) Finn variansen. (e) Finn Fisher-informasjonen og MLE-ens tilnærmede
  fordeling. (f) Angi et 95 % Wald-intervall for $\theta$.»
- **Typiske feil (analysen §5.3, §5.4, §5.12):** Glemme maksimums-bekreftelsen; hoppe
  over et ledd i kjeden (fasit belønner alle); z der det skal være t (Wald bruker z,
  men et t-KI for et normalgjennomsnitt bruker t — velg riktig); estimator/estimat-
  forveksling.
- **Quiz: 25 · Flashcards: 15**

**Prøve-kvote Del 1:** 4 prøver (1.A moment vs. ML med bekreftet maksimum, på en
oppgitt tetthet 35 min · 1.B forventningsretthet, varians og estimator-sammenligning
35 min · 1.C Fisher-info → MLE-fordeling → Wald-KI (+ Cramér–Rao) 40 min · 1.D full
estimeringskjede a–f på eksamensnivå (evt. med Bayes-punkt) 45 min).

---

### Del 2 — Hypotesetesting og konfidensintervall *(prioritet: PERFEKT — ~91–95 %)*

#### Kapittel 2.1: Konfidensintervall: t, Wald, andeler og varians

- **id:** `stk1110-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `stk1110-1-3`
- **kapitteltype:** teori
- **description:** Standardintervallene og valget mellom dem: t-intervall ved ukjent σ, Wald-intervall for en MLE, andels-intervall og χ²-intervall for variansen — med riktig kvantil og frihetsgrad.
- **Eksamensbelegg:** Sjanger D: KI i **≈21/22 (95 %)** — det hyppigste temaet, nesten
  alltid koblet til en test via dualitet. t-intervallet er klart hyppigst (H2017,
  H2020, H2021, H2022); Wald for MLE (kap. 1.3); andels-KI (H2012, H2015);
  χ²-intervall for varians (H2016). Prioritet: **perfekt** (nivå 1 punkt 3).
- **Forkunnskaper:** kap. 1.3; STK1100 kap. 6.2 *CLT-tilnærmet KI* (→ stk1100-6-2)
  *(klartekst)*. For $t$-fordelingen: formelsamlingen (tren oppslag).
- **Innholdskontrakt:** **t-intervall** ved ukjent $\sigma$ og normale data:
  $\bar X \pm t_{\alpha/2,\,n-1}\cdot S/\sqrt n$ — **forklar hvorfor $t$ (ikke $z$) og
  hvorfor $n-1$ frihetsgrader** ($S$ estimerer $\sigma$; $(n-1)S^2/\sigma^2 \sim
  \chi^2_{n-1}$). **Wald-intervall** for MLE (fra kap. 1.3): $\hat\theta \pm
  z_{\alpha/2}\,se(\hat\theta)$. **Andels-KI:** $\hat p \pm z_{\alpha/2}\sqrt{\hat p(1-\hat
  p)/n}$. **χ²-intervall for $\sigma^2$:** basert på $(n-1)S^2/\sigma^2 \sim
  \chi^2_{n-1}$ — asymmetrisk. **Tolkning:** et 95 % KI betyr at *prosedyren* fanger
  $\theta$ i 95 % av gjentatte utvalg — ikke at $\theta$ er stokastisk. **Sensorkrav
  §4.6:** riktig kvantil OG frihetsgrad; **§4.11:** rimelig presisjon og enhet.
- **Oppgavesjangre:** D. Mønstereksempel: «Konstruer et 95 % konfidensintervall for
  forventningen $\mu$ når $\sigma$ er ukjent, forklar valget av $t$-fordeling med $n-1$
  frihetsgrader, og tolk intervallet i kontekst.»
- **Typiske feil (analysen §5.1):** **z der det skal være t** (normalkvantil når
  $\sigma$ er estimert); feil frihetsgrader ($n$ i stedet for $n-1$); glemme
  $\alpha/2$ i det tosidige intervallet; tolke KI som «sannsynlighet 0,95 for at
  $\theta$ ligger her».
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 2.2: Hypotesetestens rituale: nivå, P-verdi og dualitet

- **id:** `stk1110-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `stk1110-2-1`
- **kapitteltype:** teori
- **description:** Det komplette test-ritualet sensor krever: H₀/Hₐ med begrunnet retning, testobservator med fordeling under H₀, utledning av at nivået blir α via P(forkast H₀|H₀), P-verdien definert verbalt korrekt, konklusjon i ord, og CI↔test-dualiteten.
- **Eksamensbelegg:** Sjanger E: hypotesetesting i **≈20/22 (91 %)**; P-verdi definert +
  beregnet i **≈14/22 (64 %)**; CI↔test-dualitet eksplisitt i ~27 % (H2013, H2017,
  H2018, H2024). Fasiten **skriver ut nivå-utledningen i detalj** (H2019, H2021, H2022,
  H2025). Prioritet: **perfekt** (nivå 1 punkt 2 — sensorkravet).
- **Forkunnskaper:** kap. 2.1 (dualiteten kobler test til KI).
- **Innholdskontrakt:** **Det faste ritualet (SKAL sitte, sensorkrav §4.5):**
  (1) formuler $H_0$ og $H_a$ og **begrunn retningen** (ensidig vs. tosidig — følger av
  hva situasjonen ber om å påvise); (2) definer testobservatoren og **oppgi fordelingen
  under $H_0$** (z, t med riktige frihetsgrader, F, χ²); (3) **utled at nivået blir
  $\alpha$** ved eksplisitt å regne $P(\text{forkast } H_0 \mid H_0 \text{ sann})=\alpha$
  — skriv denne sannsynlighetsutledningen ut (dette er A-kravet, ikke bare «vi bruker
  5 %»); (4) tallfest observatoren og sammenlign med kvantil/forkastningsområde; (5)
  **konkluder i ord i kontekst**. **P-verdien defineres verbalt korrekt:**
  «sannsynligheten under $H_0$ for et minst like ekstremt utfall som det observerte»
  — IKKE «sannsynligheten for at $H_0$ er sann» (§5.6). Les/avgrens P-verdien fra
  kvantiltabell; forkast $H_0$ når P-verdi $< \alpha$. **CI↔test-dualiteten:** en
  tosidig test på nivå $\alpha$ forkaster $H_0:\theta=\theta_0$ hvis og bare hvis
  $\theta_0$ *ikke* ligger i det $(1-\alpha)$-KI-et — bruk dette som kryssjekk.
- **Oppgavesjangre:** E. Mønstereksempel: «Formuler hypotesene med begrunnet retning,
  oppgi testobservatoren og dens fordeling under $H_0$, **utled at testen får nivå
  5 %**, tallfest observatoren, angi P-verdien og definer den i ord, og konkluder om
  behandlingen har effekt. Kryssjekk mot det tosidige 95 %-KI-et.»
- **Typiske feil (analysen §5.5, §5.6):** **Mistolke P-verdien** som «sannsynligheten
  for at $H_0$ er sann»; **feil retning i $H_a$** (påvirker både forkastningsgrense og
  P-verdi); hoppe over nivå-utledningen (sensor krever den); konkludere med «forkaster
  $H_0$» uten en setning i kontekst; glemme dualiteten som kryssjekk.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 2.3: To-utvalg, parvise data og andeler

- **id:** `stk1110-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `stk1110-2-2`
- **kapitteltype:** teori
- **description:** To-utvalgs t-test med pooled varians, parvise data redusert til differanser, og andelstest med pooled p̂ — og hvorfor parvis IKKE er det samme som to uavhengige utvalg.
- **Eksamensbelegg:** Sjanger G: to-utvalg/pooled i **≈8/22 (36 %)** (H2005, H2007,
  H2013, H2014, H2023, H2025); parvise data i ~9 % (H2021); to-utvalgs andeler i ~23 %
  (H2011, H2012, H2015, H2018). Fasiten viser gjerne at to-utvalgssituasjonen kan
  skrives som enkel regresjon med dummy (kobling kap. 3.1/3.7). Prioritet: **kunne**
  (nivå 2 punkt 8).
- **Forkunnskaper:** kap. 2.1, 2.2.
- **Innholdskontrakt:** **To-utvalgs t-test (uavhengige, lik varians):** pooled
  varians $S_p^2=\dfrac{(m-1)S_1^2+(n-1)S_2^2}{m+n-2}$; observator
  $T=\dfrac{\bar Y_1-\bar Y_2}{S_p\sqrt{1/m+1/n}} \sim t_{m+n-2}$; KI
  $\bar Y_1-\bar Y_2 \pm t_{\alpha/2,\,m+n-2}\,S_p\sqrt{1/m+1/n}$. **Parvise data:**
  reduser til differansene $D_i=X_i-Y_i$ og behandle som ETT utvalg — ett-utvalgs
  t-test på $\bar D$ med $n-1$ frihetsgrader (§5.4: dette er en klassisk felle).
  **To-utvalgs andeler:** z-test med pooled $\hat p=(x_1+x_2)/(n_1+n_2)$ under $H_0$;
  $Z=\dfrac{\hat p_1-\hat p_2}{\sqrt{\hat p(1-\hat p)(1/n_1+1/n_2)}}$. Merk koblingen: en
  to-utvalgs t-test er ekvivalent med en enkel regresjon på en dummy $x\in\{\pm 0{,}5\}$
  der $S_p=\hat\sigma$ (vises i Del 3).
- **Oppgavesjangre:** G. Mønstereksempel: «Sammenlign forventet måling ved de to
  strendene med en to-utvalgs t-test på 1 %-nivå (anta lik varians), oppgi pooled
  varians og frihetsgrader, og angi et 99 % KI for differansen.»
- **Typiske feil (analysen §5.4, §5.1):** **Behandle parrede data som to uavhengige
  utvalg** (skal reduseres til $D_i$); glemme $m+n-2$ frihetsgrader i pooled test;
  bruke separate $\hat p$ i stedet for pooled $\hat p$ under $H_0$; feil varianssum i
  differanse-KI-et.
- **Quiz: 25 · Flashcards: 30**

#### Kapittel 2.4: Styrke, type II-feil og dimensjonering av utvalgsstørrelse

- **id:** `stk1110-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `stk1110-2-2`
- **kapitteltype:** teori
- **description:** Sannsynligheten for type II-feil, teststyrken, og hvordan man løser for utvalgsstørrelsen n (og runder opp) slik at testen oppdager en gitt effekt.
- **Eksamensbelegg:** Sjanger F: styrke/type II/dimensjonering i **≈5/22 (23 %)**
  (H2005, H2012, H2019). Ved Poisson brukes normaltilnærming til tilnærmet styrke.
  Prioritet: **kunne** (nivå 2 punkt 11).
- **Forkunnskaper:** kap. 2.2.
- **Innholdskontrakt:** **Feiltyper:** type I ($\alpha$ = forkaste sann $H_0$) vs. type
  II ($\beta$ = beholde falsk $H_0$); **styrke** $=1-\beta$. **Styrkeformelen** (ensidig
  normaltest): $\beta(\mu_0)=P(\text{type II}\mid \mu=\mu_0)=1-\Phi\!\left(-z_\alpha+
  \dfrac{\text{grense}-\mu_0}{\sigma/\sqrt n}\right)$. **Dimensjonering:** sett
  styrkekravet, løs ulikheten for $n$ og **rund OPP til nærmeste heltall** (H2019:
  $n\ge 9$). Poisson-styrke via normaltilnærming (koble sentralgrenseteoremet,
  sensorkrav §4.4). Tegn gjerne styrkekurven $1-\beta(\mu)$ konseptuelt.
- **Oppgavesjangre:** F. Mønstereksempel: «Hvor mange prøver må tas for at
  sannsynligheten for å oppdage en overskridelse på $\delta$ skal være minst 0,90 ved
  et 5 %-nivå? Sett opp styrkekravet, løs for $n$ og rund opp.»
- **Typiske feil (analysen §5.1):** Glemme å runde $n$ opp (avrunding ned gir for lav
  styrke); forveksle $\alpha$ og $\beta$; feil fortegn i styrkeformelen; bruke $z$ uten
  å nevne normaltilnærmingen (Poisson).
- **Quiz: 15 · Flashcards: 20**

#### Kapittel 2.5: Eksakt fordelingsteori: transformasjons-pivot og F-test for varianser

- **id:** `stk1110-2-5` · **number:** 2.5 · **estimatedMinutes:** 50 · **prerequisites:** `stk1110-2-2`
- **kapitteltype:** teori
- **description:** STK1100-transformasjonen gjenbrukt til inferens: bygg en eksakt pivot (2X/θ∼χ²) og et eksakt/asymmetrisk KI eller en F-test for variansforhold — foretrukket når standardavviket avhenger av parameteren.
- **Eksamensbelegg:** Sjanger N: eksakt/transformasjons-pivot i **≈4/22 (18 %)** (H2013
  Pareto-χ²-pivot, H2016 $2X/\theta\sim\chi^2$ + F-test for variansforhold); F-test for
  variansforhold i ~9 % (H2016, H2023). Dette er STK1100-teknikker (kap. 0.2) *gjenbrukt*
  til inferens. Prioritet: **kjenne** (nivå 3 punkt 16; A-differensiator).
- **Forkunnskaper:** kap. 2.1; kap. 0.2 (transformasjonsformelen, gamma/χ²). STK1100
  kap. 4.2 *Transformasjonsteknikkene* (→ stk1100-4-2) og kap. 6.1 *Eksakt pivotal-KI*
  (→ stk1100-6-1) *(klartekst)*.
- **Innholdskontrakt:** **Pivot-oppskriften:** finn en størrelse $W(X,\theta)$ med
  **kjent fordeling uavhengig av $\theta$** (typisk χ² eller F), sett kvantiler rundt
  og løs for $\theta$ — gir ofte et **asymmetrisk** intervall (riktig, ikke feil,
  §4.7). Standard-pivotalen: for eksponensial-lignende data er $2\sum X_i/\theta \sim
  \chi^2_{2n}$ (bruk transformasjonsformelen — les riktige frihetsgrader, §5.13).
  **F-test for variansforhold:** $S_1^2/S_2^2 \sim F_{m-1,\,n-1}$ under
  $H_0:\sigma_1^2=\sigma_2^2$; brukes til å sjekke lik-varians-antakelsen før en
  pooled to-utvalgstest. **Eksakt vs. Wald:** eksakt/pivot foretrekkes framfor Wald når
  $se$ avhenger av parameteren (§4.7).
- **Oppgavesjangre:** N. Mønstereksempel: «Vis ved transformasjonsformelen at
  $2\sum X_i/\theta$ er kjikvadratfordelt, angi frihetsgradene, og bruk det til et
  eksakt 95 % konfidensintervall for $\theta$ og en eksakt ensidig test av
  $H_0:\theta\le\theta_0$.»
- **Typiske feil (analysen §5.13, §5.2):** **Feil frihetsgrader i pivoten**
  ($\chi^2_{2n}$ vs. $\chi^2_n$ vs. $\chi^2_{n-1}$ — les hvilken gamma/χ² som gjelder);
  tro at et asymmetrisk eksakt intervall er en regnefeil; hoppe til Wald der en eksakt
  pivot finnes; glemme absoluttverdien/Jacobi i transformasjonen.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 2.6: Enveis ANOVA og ikke-parametriske alternativer

- **id:** `stk1110-2-6` · **number:** 2.6 · **estimatedMinutes:** 50 · **prerequisites:** `stk1110-2-3`
- **kapitteltype:** teori
- **description:** Enveis variansanalyse (F-test på gruppeforskjeller, koblet til dummy-regresjon), og de robuste alternativene når normalitet svikter: bootstrap-persentilintervall og rang-/Wilcoxon-test.
- **Eksamensbelegg:** Sjanger M+O: ANOVA i **≈2/22 (9 %)** (H2020, H2021, koblet til
  dummy-regresjon); ikke-parametrikk i ~9 % (H2015 bootstrap-persentil, H2023
  rang/Wilcoxon). Begge roterende innslag. Prioritet: **kjenne** (nivå 3 punkt 15, 17).
- **Forkunnskaper:** kap. 2.3 (to-utvalg → mange grupper); kap. 2.2 (testritualet).
- **Innholdskontrakt:** **Enveis ANOVA:** modellen $X_{ij}=\mu_i+\varepsilon_{ij}$,
  $\varepsilon_{ij}\sim N(0,\sigma^2)$; test $H_0:\mu_1=\mu_2=\mu_3$ mot at minst én
  skiller seg, via **F-testen** $F=\text{MSB}/\text{MSW}$ (les P-verdi fra R-utskrift).
  **Koblingen til dummy-regresjon:** gruppeforskjeller uttrykkes med indikatorvariabler,
  og enkeltkontraster testes med t-tester i regresjonen (kobling kap. 3.3). **Bootstrap-
  persentilintervall:** estimer $F$ med empirisk fordelingsfunksjon
  $\hat F(x)=\tfrac1n\sum I(x_i\le x)$, trekk med tilbakelegging (konseptuelt — INGEN
  kode), les av persentil-intervallet; kommentér at det ligner normaltilnærmingens
  intervall når bootstrap-histogrammet er tilnærmet normalt. **Rang-/Wilcoxon-test:**
  når QQ-plottet antyder ikke-normalitet, foretrekkes en rangbasert test framfor
  t-testen; svakere antakelser gir gjerne høyere/svakere P-verdi (H2023). Bare
  tolkning og oppsett testes — ikke manuell utregning av rangsummer i detalj.
- **Oppgavesjangre:** M + O. Mønstereksempler: (M) «Test med enveis variansanalyse om
  de tre behandlingsgruppene har lik forventet vektøkning, og tolk F-testens P-verdi.»
  (O) «QQ-plottet antyder ikke-normalitet — forklar hvorfor en rangtest er å foretrekke
  framfor t-testen, og hva det betyr for konklusjonen.»
- **Typiske feil (analysen §5.14):** Tolke en ikke-signifikant ANOVA som «alle grupper
  like» uten forbehold; blande bootstrap-persentilen med normaltilnærmingens intervall;
  bruke t-test der QQ-plottet klart bryter normalitet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 2.7: Drill: det komplette test-ritualet (sjanger E)

- **id:** `stk1110-2-7` · **number:** 2.7 · **estimatedMinutes:** 80 · **prerequisites:** `stk1110-2-2`, `stk1110-2-3`
- **kapitteltype:** drill
- **description:** Ritualet skrevet ut i full detalj, om og om igjen, over alle testtypene — inkludert den eksplisitte utledningen av at nivået blir α og den verbalt korrekte P-verdi-definisjonen sensor krever.
- **Eksamensbelegg:** Testritualet er det **eksplisitte sensorkravet** (§4.5) og
  hjertet i Oppgave 2 (~91 %). Fasiten skriver ut hele ritualet — særlig nivå-
  utledningen $P(\text{forkast }H_0\mid H_0)=\alpha$ og P-verdi-definisjonen — i H2019,
  H2021, H2022, H2025. Alle testtypene rullerer: ett-utvalgs t (hyppigst), to-utvalgs
  t/pooled, parvis t, andels-z, Poisson-test, F-test, ANOVA-F, rangtest. Prioritet:
  **perfekt** (nivå 1 punkt 2 — dette drillkapitlet er selve sensorkravet).
- **Forkunnskaper:** kap. 2.1–2.6.
- **Innholdskontrakt:** **Løsningsoppskrift (den obligatoriske 5-trinns-malen):**
  1) $H_0/H_a$ med **begrunnet retning**; 2) testobservator + **fordeling under $H_0$**
  (riktig type OG frihetsgrader); 3) **utled nivået:** regn $P(\text{forkast }H_0\mid
  H_0\text{ sann})=\alpha$ eksplisitt — skriv sannsynligheten ut; 4) tallfest og
  sammenlign med kvantil/forkastningsområde, **oppgi P-verdien og definer den verbalt
  korrekt**; 5) **konkluder i ord i kontekst** + CI↔test-dualitet som kryssjekk.
  Gjennomregnet eksamenscase med sensor-margnotater om hvert trinns uttelling. **8–15
  varianter** som dekker ALLE testtypene, hver med full utskrevet rituale — ett-utvalgs
  t, to-utvalgs pooled t, parvis t (på $D_i$), andels-z (pooled $\hat p$), Poisson-test
  (normaltilnærmet), F-test for varianser, ANOVA-F (R-utskrift), rangtest.
- **Oppgavesjangre:** E (alle underarter). Mønstereksempel: «(a) Formuler hypotesene
  med begrunnet retning. (b) Oppgi testobservatoren og dens fordeling under $H_0$.
  (c) Utled at nivået blir 5 %. (d) Tallfest, angi P-verdien og definer den i ord.
  (e) Konkluder i kontekst og kryssjekk mot 95 %-KI-et.» — gjentatt for hver testtype.
- **Typiske feil (analysen §5.5, §5.6, §5.1):** Hoppe over nivå-utledningen;
  P-verdi-mistolkning; feil retning i $H_a$; feil frihetsgrader; t↔z-forveksling;
  parvis behandlet som to uavhengige utvalg; konklusjon uten kontekst.
- **Quiz: 25 · Flashcards: 15**

**Prøve-kvote Del 2:** 4 prøver (2.A t-/Wald-/andels-KI med riktig kvantil og
frihetsgrad 35 min · 2.B komplett testritual med nivå-utledning og P-verdi 40 min ·
2.C to-utvalg/parvis/andeler + styrke/dimensjonering 40 min · 2.D blandet test-/
KI-oppgave a–f på eksamensnivå (evt. med ANOVA/eksakt-pivot) 45 min).

---

### Del 3 — Lineær regresjon *(prioritet: PERFEKT — den tunge storoppgaven, ~91 %)*

#### Kapittel 3.1: Enkel lineær regresjon: minste kvadrater og inferens for stigningstallet

- **id:** `stk1110-3-1` · **number:** 3.1 · **estimatedMinutes:** 65 · **prerequisites:** `stk1110-2-1`
- **kapitteltype:** teori
- **description:** Minste kvadraters estimator (= ML under normalfeil), E og V av stigningstallestimatoren, t-test og KI for β₁, tolkning av koeffisientene i kontekst, og R² som kvadrert korrelasjon.
- **Eksamensbelegg:** Sjanger H: enkel regresjon i **≈20/22 (91 %)** — alltid en hel
  storoppgave, oftest med R-utskrift. LS-utledning (normalligninger) i ~36 % (H2011,
  H2015, H2017); $E(\hat\beta_1)/V(\hat\beta_1)$-utledning i ~27 % (H2017, H2024);
  t-test/KI for stigningstall i ~91 %. Prioritet: **perfekt** (nivå 1 punkt 4).
- **Forkunnskaper:** kap. 2.1–2.2 (t-fordeling, testritual). STK1100 kap. 8.3 *Enkel
  lineær regresjon* (→ stk1100-8-3) — elementær der, komplett her *(klartekst)*.
  For korrelasjon: [S2 4.x / R2] etter behov.
- **Innholdskontrakt:** **Modellen** $Y_i=\beta_0+\beta_1 x_i+\varepsilon_i$,
  $\varepsilon_i\sim N(0,\sigma^2)$ uavhengige. **Minste kvadrater** ved å minimere
  $\sum(y_i-\hat y_i)^2$: $\hat\beta_1=\dfrac{\sum(x_i-\bar x)(Y_i-\bar Y)}{\sum(x_i-\bar
  x)^2}$, $\hat\beta_0=\bar Y-\hat\beta_1\bar x$ — **utled normalligningene aktivt**;
  vis at **LS = ML under normalfeil** (§4.8, H2011/H2015/H2017). **E og V:**
  $E(\hat\beta_1)=\beta_1$ (forventningsrett), $V(\hat\beta_1)=\sigma^2/\sum(x_i-\bar
  x)^2$ — utled. $S^2=\text{SSE}/(n-2)$ estimerer $\sigma^2$. **Inferens:**
  $T=\dfrac{\hat\beta_1-\beta_1^0}{se(\hat\beta_1)} \sim t_{n-2}$ (teller normal,
  $(n-2)S^2/\sigma^2\sim\chi^2_{n-2}$, uavhengige → t); KI $\hat\beta_1 \pm
  t_{\alpha/2,\,n-2}\,se(\hat\beta_1)$. **Tolk koeffisientene i kontekst** (hva betyr
  $\hat\beta_1$ per enhet $x$, hva betyr $\hat\beta_0$) og **advar mot ekstrapolering
  til $x=0$** når det er urealistisk (§4.8). **$R^2=$ kvadratet av korrelasjonen mellom
  $x$ og $y$** (i enkel regresjon). Uten konstantledd: $\hat\gamma=\sum x_iY_i/\sum
  x_i^2$.
- **Oppgavesjangre:** H. Mønstereksempel: «Tolk $\hat\beta_0$ og $\hat\beta_1$ i
  kontekst, utled variansen $V(\hat\beta_1)$, konstruer et 95 % KI for stigningstallet,
  og avgjør om $\beta_1=0{,}25$ kan forkastes. Kommentér om det er forsvarlig å bruke
  modellen ved $x=0$.»
- **Typiske feil (analysen §5.1, §5.9):** $n-1$ i stedet for $n-2$ frihetsgrader;
  tolke $\hat\beta_0$ ved $x=0$ når $x=0$ er urealistisk; ekstrapolere; forveksle
  $R^2$ og korrelasjonen (glemme kvadratet); regne LS uten å utlede normalligningene
  når oppgaven ber om utledning.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 3.2: Å lese R-utskrift (lm-sammendraget)

- **id:** `stk1110-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `stk1110-3-1`
- **kapitteltype:** teori
- **description:** Hver kolonne og linje i et lm-sammendrag: Estimate, Std. Error, t value, Pr(>|t|), Residual standard error, Multiple/Adjusted R-squared og F-statistic — hva de betyr og hvordan de brukes til inferens uten å regne alt selv.
- **Eksamensbelegg:** Tolkning av R-utskrift i **≈15/22 (68 %)** — sensor-
  nøkkelferdigheten i regresjonssøylen, motsatt av STK1100s Python-koding. Studenten
  skal **lese og tolke**, ikke skrive kode (0/22 koding). Prioritet: **perfekt** (nivå 1
  punkt 4 — inngår i praktisk talt hver regresjonsoppgave).
- **Forkunnskaper:** kap. 3.1 (koeffisienter, t-test, KI, $R^2$).
- **Innholdskontrakt:** **R-utskriften gjengis som en ren tekst-tabell** (monospace i
  `text`-blokk — INGEN kode). Anatomien: **Coefficients-tabellen** — `Estimate`
  ($\hat\beta_j$) | `Std. Error` ($se(\hat\beta_j)$) | `t value`
  ($=\hat\beta_j/se(\hat\beta_j)$) | `Pr(>|t|)` (tosidig P-verdi for $H_0:\beta_j=0$).
  **Residual standard error** $=\hat\sigma=\sqrt{\text{SSE}/(n-k-1)}$ med `on … degrees
  of freedom` = $n-k-1$. **Multiple R-squared** ($R^2$) og **Adjusted R-squared**
  (justert — for modellvalg). **F-statistic** med `… on … and … DF` og samlet P-verdi
  ($H_0:$ alle helninger $=0$). **Bruk:** konstruer et KI fra `Estimate` $\pm
  t_{\alpha/2,\,df}\cdot$ `Std. Error`; les av om en koeffisient er signifikant fra
  `Pr(>|t|)`; hent $\hat\sigma$ og df fra Residual standard error-linja. **Advarsel:** en
  ikke-signifikant koeffisient er ikke «uviktig» — testen er *betinget på de øvrige
  variablene* (§5.14). Vis 2–3 fullstendige utskrift-tabeller (enkel + multippel) med
  linje-for-linje-tolkning.
- **Oppgavesjangre:** H/I (utskrift-delen). Mønstereksempel (tekst-tabell): «Ut fra
  `lm`-sammendraget under: (a) angi $\hat\beta_1$ og standardfeilen, (b) verifiser
  `t value`-kolonnen, (c) er stigningstallet signifikant på 5 %-nivå? (d) hva er
  $\hat\sigma$ og hvor mange frihetsgrader? (e) tolk Adjusted R-squared.»
- **Typiske feil (analysen §5.14):** **Forveksle Std. Error-kolonnen med t-verdien**;
  lese `Pr(>|t|)` som «sannsynligheten for at $\beta=0$»; tolke ikke-signifikant
  koeffisient som uviktig uten å nevne betingingen på øvrige variabler; hente feil df
  til KI-et.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 3.3: Multippel regresjon: matriseform, justert R² og konfundering

- **id:** `stk1110-3-3` · **number:** 3.3 · **estimatedMinutes:** 65 · **prerequisites:** `stk1110-3-2`
- **kapitteltype:** teori
- **description:** Modellen på matriseform Y=Xβ+ε med β̂=(XᵀX)⁻¹XᵀY, valget mellom R² og justert R² for modellvalg, og konfundering — hvorfor en koeffisient endrer seg når en variabel legges til.
- **Eksamensbelegg:** Sjanger I: multippel regresjon i **≈11/22 (50 %)**; R²/justert R²
  + modellvalg i ~36 % (H2013, H2015, H2018, H2024, H2025); konfundering i ~5 sett
  (H2018, H2019, H2020, H2024); matriseform/full rang H2024. Prioritet: **perfekt**
  (nivå 1 punkt 5).
- **Forkunnskaper:** kap. 3.1–3.2. For matriser: [R2-lineær algebra / R1] om nødvendig,
  ellers selvforklarende.
- **Innholdskontrakt:** **Matriseform** $Y=X\beta+\varepsilon$; **minste kvadrater**
  $\hat\beta=(X^TX)^{-1}X^TY$ — forklar **entydighetskravet** (full kolonnerang på $X$,
  ellers ikke invertibel, H2024). $S^2=\text{SSE}/(n-k-1)$. **$R^2$ vs. justert $R^2$:**
  $R^2=1-\text{SSE}/\text{SST}$ **øker alltid** når en variabel legges til, derfor brukes
  **justert $R^2=1-\dfrac{\text{SSE}/(n-k-1)}{\text{SST}/(n-1)}$** til modellsammenligning
  (§4.8, §5.7). **Konfundering:** en koeffisient er effekten *med de andre variablene
  holdt konstant*; forklar **hvorfor den endrer seg** (eller ikke, ved
  balansert/ortogonalt design) når en korrelert variabel legges til (§5.10). Ved
  **sentrerte, ukorrelerte prediktorer** blir $X^TX$ diagonal og $R^2=r_1^2+r_2^2$
  (H2018, H2025). Kobling: dummy-regresjon = to-utvalg/ANOVA (kap. 2.3, 2.6).
- **Oppgavesjangre:** I. Mønstereksempel: «Estimatet for høyde-effekten synker når vekt
  inkluderes i modellen. Forklar hvorfor (konfundering), avgjør ut fra justert $R^2$ om
  den utvidede modellen er å foretrekke, og skriv $\hat\beta$ på matriseform med
  entydighetskravet.»
- **Typiske feil (analysen §5.7, §5.10, §5.2):** **Bruke $R^2$ i stedet for justert
  $R^2$** til modellvalg; **feiltolke en koeffisient som «hele effekten»** (den er
  betinget på øvrige); feil frihetsgrader $n-k-1$; glemme full-rang-kravet for at
  $(X^TX)^{-1}$ eksisterer.
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 3.4: Modelldiagnostikk: residualplott og hatmatrisen

- **id:** `stk1110-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `stk1110-3-3`
- **kapitteltype:** teori
- **description:** De tre standard residualplottene og hva de avdekker, samt hatmatrisen H=X(XᵀX)⁻¹Xᵀ med residualenes fordeling og standardiserte residualer.
- **Eksamensbelegg:** Sjanger J: residualdiagnostikk i **≈9/22 (41 %)** (H2010, H2011,
  H2015, H2017, H2018, H2020, H2022, H2024); hatmatrise/standardiserte residualer på
  matrisenivå H2015. Prioritet: **kunne** (nivå 2 punkt 7).
- **Forkunnskaper:** kap. 3.3 (matriseform).
- **Innholdskontrakt:** **De tre plottene (tolkes i MØNSTRE, §4.9 — ikke «ser greit
  ut»):** (1) **residualer mot tilpassede** — kurvatur/parabelmønster → ikke-linearitet
  (manglende kvadratledd); (2) **scale-location** ($\sqrt{|e_i|}$ mot tilpassede) —
  stigende/fallende trend → heteroskedastisitet (brutt konstant varians); (3)
  **QQ-plott** mot normalkvantiler — avvik fra rett linje → ikke-normalitet (→ vurder
  rangtest, kap. 2.6). **Matrisenivå:** hatmatrisen $H=X(X^TX)^{-1}X^T$, tilpassede
  $\hat Y=HY$, residualer $E=(I-H)Y$ med $E(E)=0$ og $\text{Cov}(E)=\sigma^2(I-H)$;
  **standardiserte residualer** $e_i^*=e_i/\sqrt{1-h_{ii}}$ (korrigerer for ulik
  residualvarians). $h_{ii}$ som mål på innflytelse (leverage) — konseptuelt.
- **Oppgavesjangre:** J. Mønstereksempel: «Vurder ut fra de tre residualplottene om
  modellantakelsene holder, og forklar hva et parabelmønster i residual-vs-fitted-plottet
  betyr og hvordan du ville utvidet modellen.»
- **Typiske feil (analysen §5.9):** Tolke plott som «ser greit ut» uten å nevne mønster;
  forveksle hva de tre plottene avdekker (linearitet vs. varians vs. normalitet);
  glemme $1-h_{ii}$-korreksjonen i standardiserte residualer.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.5: Prediksjon: KI for forventet respons vs. prediksjonsintervall

- **id:** `stk1110-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `stk1110-3-1`
- **kapitteltype:** teori
- **description:** Skillet mellom konfidensintervall for forventet respons µ_Y|x og prediksjonsintervall for en ny observasjon — hvorfor sistnevnte har «1+…» under rota — og faren ved ekstrapolering.
- **Eksamensbelegg:** Sjanger K: prediksjonsintervall i **≈4/22 (18 %)** (H2011, H2014,
  H2016, H2023); KI for forventet respons i ~12 % (H2019, H2020). Fasiten advarer mot
  ekstrapolering (H2020: absurd bredt intervall langt utenfor dataområdet). Prioritet:
  **kunne** (nivå 2 punkt 10).
- **Forkunnskaper:** kap. 3.1 (regresjonsinferens, $\hat\sigma$).
- **Innholdskontrakt:** **KI for forventet respons** $\mu_{Y\mid x_0}$:
  $\hat y_0 \pm t_{\alpha/2,\,n-2}\,\hat\sigma\sqrt{\dfrac1n+\dfrac{(x_0-\bar
  x)^2}{S_{xx}}}$. **Prediksjonsintervall for en NY observasjon:**
  $\hat y_0 \pm t_{\alpha/2,\,n-2}\,\hat\sigma\sqrt{1+\dfrac1n+\dfrac{(x_0-\bar
  x)^2}{S_{xx}}}$ — **«$1+\dots$» under rota fordi den nye observasjonens eget
  støyledd** $\varepsilon_0$ legges til usikkerheten i $\hat y_0$ (§5.8). Derfor er
  prediksjonsintervallet ALLTID bredere enn KI-et for forventningen. Begge blir bredere
  jo lenger $x_0$ er fra $\bar x$ → **advarsel mot ekstrapolering** (§4.8, §5.9): langt
  utenfor dataområdet blir intervallet meningsløst bredt og modellen upålitelig.
- **Oppgavesjangre:** K. Mønstereksempel: «Angi et 95 % prediksjonsintervall for en ny
  måling ved $x_0$, forklar hvorfor det er bredere enn intervallet for forventet
  respons ved samme $x_0$, og kommentér om $x_0$ ligger trygt innenfor dataområdet.»
- **Typiske feil (analysen §5.8, §5.9):** **Forveksle konfidens- og
  prediksjonsintervall** (glemme «$1+$» under rota); ekstrapolere uten forbehold;
  bruke feil $t$-frihetsgrader ($n-2$); glemme at bredden vokser med $(x_0-\bar x)^2$.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.6: Logistisk regresjon (kjenne, to-gruppe-sammenligning)

- **id:** `stk1110-3-6` · **number:** 3.6 · **estimatedMinutes:** 35 · **prerequisites:** `stk1110-3-1`
- **kapitteltype:** teori (kjenne)
- **description:** Den logistiske modellen for en binær respons, og hvordan en to-gruppe-sammenligning uttrykkes med en dummy slik at β₁=0 svarer til lik sannsynlighet i de to gruppene.
- **Eksamensbelegg:** Sjanger P: logistisk regresjon i **≈1/22 (5 %)** (H2015) — kjerne
  i emnebeskrivelsen, men sjelden testet tungt. Prioritet: **kjenne** (nivå 3 punkt 18).
- **Forkunnskaper:** kap. 3.1 (regresjonstankegangen); kap. 2.3 (to-gruppe/andeler).
- **Innholdskontrakt:** **Modellen** $P(Y=1\mid x)=\dfrac{e^{\beta_0+\beta_1
  x}}{1+e^{\beta_0+\beta_1 x}}$ (logit-lenke $\log\frac{p}{1-p}=\beta_0+\beta_1 x$).
  **To-gruppe-sammenligning:** med dummy $x\in\{0,1\}$ svarer **$\beta_1=0$ til lik
  sannsynlighet i de to gruppene**, slik at en gruppeforskjell i andel kan testes som
  $H_0:\beta_1=0$ innenfor logistisk regresjon (H2015). Bare oppsett og tolkning
  (kobling til odds/oddsforhold nevnes kort); ingen ML-utledning i detalj — det er et
  kjenne-tema. Les eventuelt av $\hat\beta_1$ og P-verdi fra R-utskrift som i kap. 3.2.
- **Oppgavesjangre:** P. Mønstereksempel: «Uttrykk to-gruppe-sammenligningen av
  suksessandel som en logistisk regresjon med en dummy, og vis at nullhypotesen om lik
  andel svarer til $\beta_1=0$.»
- **Typiske feil (analysen §5):** Tolke $\beta_1$ direkte som en sannsynlighetsforskjell
  (det er en logit-/oddsforskjell); glemme at $\beta_1=0$ er nøkkelen til
  to-gruppe-testen; blande logit og sannsynlighet.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 3.7: Drill: regresjonsoppgaven fra R-utskrift (sjanger H–K)

- **id:** `stk1110-3-7` · **number:** 3.7 · **estimatedMinutes:** 80 · **prerequisites:** `stk1110-3-4`, `stk1110-3-5`
- **kapitteltype:** drill
- **description:** Den tunge storoppgaven trent ledd for ledd: fra R-utskrift til koeffisientinferens, R²/justert R², konfundering, diagnostikk og prediksjonsintervall — enkel og multippel regresjon.
- **Eksamensbelegg:** Regresjon er Oppgave 3 (den tunge) i praktisk talt hvert sett
  (~91 %), nesten alltid med R-utskrift (~68 %). Kjeden `LS/matrise → inferens →
  R²/justert R² → diagnostikk → prediksjon → konfundering` bærer mest poeng av de tre
  søylene. Prioritet: **perfekt** (nivå 1 punkt 4–5).
- **Forkunnskaper:** kap. 3.1–3.6.
- **Innholdskontrakt:** **Løsningsoppskrift:** 1) **definer modellen** og
  antakelsene; 2) les/utled koeffisienter (LS eller fra R-utskrift), **tolk i
  kontekst**; 3) inferens: t-test og KI for en koeffisient (riktig df $n-2$/$n-k-1$),
  evt. F-testen for samlet signifikans; 4) $R^2$ vs. **justert $R^2$** for modellvalg;
  5) **konfundering** hvis en koeffisient endrer seg fra enkel til multippel; 6)
  **diagnostikk** fra de tre plottene (mønster, ikke «greit»); 7) **prediksjon** — KI
  for forventning vs. prediksjonsintervall («$1+$»), advar mot ekstrapolering.
  Gjennomregnet eksamenscase med R-utskrift (tekst-tabell) og sensor-margnotater.
  **8–15 varianter**, enkel og multippel, alle med R-utskrift, hver som en a–f-kjede.
  **INGEN kode.**
- **Oppgavesjangre:** H + I + J + K. Mønstereksempel: «Gitt `lm`-sammendraget under:
  (a) tolk stigningstallet i kontekst, (b) test om det er signifikant og angi et 95 %
  KI, (c) sammenlign med den utvidede modellen via justert $R^2$, (d) forklar
  konfunderingen når den nye variabelen inkluderes, (e) vurder de tre residualplottene,
  (f) angi et prediksjonsintervall for en ny observasjon og kommentér ekstrapolering.»
- **Typiske feil (analysen §5.1, §5.7, §5.8, §5.10, §5.14):** Feil df; $R^2$ i stedet
  for justert $R^2$; konfidens-/prediksjonsintervall-forveksling; feiltolke koeffisient
  som «hele effekten»; lese R-utskrift-kolonner feil; «ser greit ut» i diagnostikken.
- **Quiz: 25 · Flashcards: 15**

**Prøve-kvote Del 3:** 4 prøver (3.A enkel regresjon: LS-utledning, E/V(β̂₁), t-test og
KI for stigningstall 40 min · 3.B lese og bruke R-utskrift (koeffisienter, df, R²,
F) 35 min · 3.C multippel regresjon: matriseform, justert R², konfundering 40 min ·
3.D full regresjonsoppgave a–f fra R-utskrift m/diagnostikk og prediksjon 45 min).

---

### Del 4 — Eksamenstrening

#### Kapittel 4.1: Sjangerguiden A–P og den kjededelte tredelingens anatomi

- **id:** `stk1110-4-1` · **number:** 4.1 · **estimatedMinutes:** 40 · **prerequisites:** `stk1110-1-5`, `stk1110-2-7`, `stk1110-3-7`
- **kapitteltype:** eksamenstrening (sjangerguide)
- **description:** Hele sjangerkatalogen A–P samlet, med hvordan de 2–3 kjededelte storoppgavene bygges (a–f-kjeden), tidsbudsjett og hva sensor belønner ved hvert trinn.
- **Eksamensbelegg:** Metakapittel som samler alle 16 sjangrene (A–P) fra §3 og
  tredelingen fra §1. Skal vise **den kjededelte oppgavemalen:** hver storoppgave er en
  kontekst med 4–7 deloppgaver (a, b, c, …) der tidlige svar gjenbrukes, og der ett
  blankt deltrinn ikke sperrer resten (senere punkter kan bruke *oppgitt*
  mellomresultat). Prioritet: **perfekt** (syntesen).
- **Forkunnskaper:** Del 1–3.
- **Innholdskontrakt:** **Sjekklisten per søyle:** (1) estimering — A moment/ML,
  B forventningsretthet/varians, C Fisher/Wald, L Bayes; (2) test+KI — D KI, E ritualet,
  F styrke, G to-utvalg/parvis/andeler, M ANOVA, N eksakt pivot, O ikke-param; (3)
  regresjon — H enkel, I multippel, J diagnostikk, K prediksjon, P logistisk. For hver
  sjanger: frekvens, typisk plassering, fasitmetoden, vanligste trekk. **Anatomien til
  en A-besvarelse:** definer modell → vis alle utledningstrinn → riktig fordeling/df →
  tolk i ord/kontekst → kryssjekk (dualitet, rimelighet). **Tidsbudsjett:** 4 timer /
  2–3 oppgaver ≈ 80–120 min hver; strategi for a–f-kjeden (ta de tidlige, sikre punktene
  først; bruk oppgitt mellomresultat hvis et trinn stopper).
- **Oppgavesjangre:** Alle A–P i oversikt. 2–3 strategioppgaver: «Klassifiser hvert
  deltrinn i denne oppgaven etter sjanger A–P, og sett opp et tidsbudsjett.»
- **Typiske feil:** Grave seg fast i ett deltrinn i stedet for å bruke oppgitt
  mellomresultat; ikke gjenkjenne hvilken sjanger et deltrinn tilhører; underprioritere
  regresjonsoppgaven som bærer mest poeng.
- **Quiz: 15 · Flashcards: 25**

#### Kapittel 4.2: Øvingseksamen 1 — de tre søylene (standardmalen)

- **id:** `stk1110-4-2` · **number:** 4.2 · **estimatedMinutes:** 90 · **prerequisites:** `stk1110-4-1`
- **kapitteltype:** øvingseksamen
- **description:** Et komplett 4-timers sett med tre kjededelte storoppgaver — én per søyle — med fullstendige løsningsforslag skrevet som A-besvarelser og delpoeng-notater.
- **Eksamensbelegg:** Speiler den typiske tredelingen (analysens §2/§7). Nyskrevne
  oppgaver, ikke gjengivelser. Prioritet: **perfekt** (syntese).
- **Forkunnskaper:** Del 1–3.
- **Innholdskontrakt:** **Oppgave 1 (estimering, a–f):** eksotisk fordeling → moment/ML
  m/bekreftet maks → forventningsretthet → varians → Fisher-info → Wald-KI.
  **Oppgave 2 (test+KI, a–e):** ett-/to-utvalgs t → komplett rituale m/nivå-utledning
  og P-verdi → CI↔test-dualitet → evt. styrke. **Oppgave 3 (regresjon, a–f):** enkel +
  multippel med R-utskrift (tekst-tabell) → koeffisientinferens → justert R² →
  diagnostikk → prediksjonsintervall. Hvert deltrinn med **løsningsforslag i eget
  `collapsible`** skrevet som A-besvarelse + `tip`-notat om delpoeng/vekting og
  vanligste trekk. INGEN kode.
- **Oppgavesjangre:** A–K (den typiske eksamen). Nyskrevne kontekster.
- **Typiske feil:** Samlet fra §5 — påpekes i løsningsnotatene der de er relevante.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 4.3: Øvingseksamen 2 — rotasjonsmalen (Bayes, ANOVA/dummy, konfundering)

- **id:** `stk1110-4-3` · **number:** 4.3 · **estimatedMinutes:** 90 · **prerequisites:** `stk1110-4-1`
- **kapitteltype:** øvingseksamen
- **description:** Et sett som trekker inn de roterende A-differensiatorene: et Bayes-/konjugeringspunkt i estimeringen, ANOVA koblet til dummy-regresjon, og en tydelig konfunderingsdrøfting i den multiple regresjonen.
- **Eksamensbelegg:** Speiler de sannsynlige rotasjons-gjengangerne (analysens §7:
  Bayes/konjugering, ANOVA/dummy, konfundering). Prioritet: **kjenne→perfekt**.
- **Forkunnskaper:** Del 1–3, særlig kap. 1.4, 2.6, 3.3.
- **Innholdskontrakt:** **Oppgave 1 (estimering + Bayes, a–f):** ML-kjeden + et
  konjugeringspunkt (Poisson→gamma) med Bayes-estimator og MLE-kobling.
  **Oppgave 2 (ANOVA/test, a–e):** enveis ANOVA (F-test fra R-utskrift) koblet til
  dummy-regresjon, med gruppekontrast som t-test. **Oppgave 3 (multippel regresjon,
  a–f):** konfundering (koeffisient endrer seg), justert R² for modellvalg,
  matriseform/full rang, diagnostikk. Løsningsforslag som A-besvarelse i `collapsible`
  + delpoeng-`tip`. INGEN kode.
- **Oppgavesjangre:** A–C, I–M, med L og M i fokus. Nyskrevne kontekster.
- **Typiske feil:** §5.7 (R² vs. justert), §5.10 (konfundering), §5.11 (konjugering
  uten å samle eksponenter) — påpekes i notatene.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 4.4: Øvingseksamen 3 — rotasjonsmalen (eksakt pivot, parvis/andeler, prediksjon)

- **id:** `stk1110-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `stk1110-4-1`
- **kapitteltype:** øvingseksamen
- **description:** Et sett tungt på de eksakte og robuste teknikkene: en transformasjons-pivot/F-test i estimeringen, parvise data og andeler i testdelen, og prediksjon + diagnostikk i regresjonen.
- **Eksamensbelegg:** Speiler de øvrige rotasjons-gjengangerne (analysens §7: eksakt
  χ²-pivot, F-test for varianser, parvis/andeler, prediksjonsintervall, ikke-param).
  Prioritet: **kjenne→kunne**.
- **Forkunnskaper:** Del 1–3, særlig kap. 2.3, 2.5, 3.4, 3.5.
- **Innholdskontrakt:** **Oppgave 1 (estimering + eksakt pivot, a–f):** ML +
  transformasjons-pivot ($2\sum X_i/\theta \sim \chi^2_{2n}$) → eksakt/asymmetrisk KI →
  eksakt ensidig test. **Oppgave 2 (test, a–e):** parvise data (redusert til $D_i$) og
  en andelstest (pooled $\hat p$), med komplett rituale; evt. en rangtest-kommentar når
  QQ-plottet svikter. **Oppgave 3 (regresjon, a–f):** enkel regresjon med R-utskrift →
  diagnostikk (de tre plottene) → prediksjonsintervall vs. KI for forventet respons →
  ekstrapoleringsforbehold. Løsningsforslag som A-besvarelse i `collapsible` +
  delpoeng-`tip`. INGEN kode.
- **Oppgavesjangre:** A–B, G, N, O, H, J, K. Nyskrevne kontekster.
- **Typiske feil:** §5.4 (parvis som to utvalg), §5.8 (KI vs. prediksjonsintervall),
  §5.13 (feil df i pivot) — påpekes i notatene.
- **Quiz: 10 · Flashcards: 0**

**Prøve-kvote Del 4:** ingen egne prøver — de tre øvingseksamenene (4.2–4.4) ER
del-prøvene for eksamenstreningen (hver et komplett sett med løsningsforslag).

---

## 4. Sensorens elleve krav (destillert fra løsningsforslagene — gjelder alle kapitler)

Gjengis for studenten i kap. 0.1 og innarbeides i «Typiske feil»/«Eksamensvinkel»
per kapittel. Løsningsforslagene er **utledningsdrevne og konsise** — vis regnekjeden
kompakt, ikke lange verbale utlegninger.

1. **Definer modell og variable eksplisitt før du regner** («La $X_i \sim \dots$»).
2. **ML-utledninger skal ha alle trinn** $L\to\ell\to s\to$ løs, og **bekreft
   maksimum** ($\ell''(\hat\theta)<0$). Skill estimator (stor bokstav) fra estimat (tall).
3. **Forventningsretthet og varians vises fullstendig**; skjevhet kvantifiseres og
   korrigeres når en forventningsrett estimator kreves.
4. **Nevn MLE-asymptotikk / sentralgrenseteoremet eksplisitt** ved normaltilnærming, og
   koble Wald-variansen til $1/(nI(\theta))$ (og Cramér–Rao der relevant).
5. **Hypotesetestens rituale er obligatorisk:** $H_0/H_a$ (begrunnet retning) →
   observator m/fordeling → **utledning av at nivået blir $\alpha$** → tallfesting →
   konklusjon i ord. P-verdien defineres verbalt korrekt.
6. **Riktig fordeling og frihetsgrader:** t (ikke z) når $\sigma$ er estimert; $n-1$,
   $n-2$, $m+n-2$, $n-k-1$ etter situasjon. Feil frihetsgrader straffes.
7. **Eksakt/pivot-KI foretrekkes framfor Wald** når SD avhenger av parameteren; et
   asymmetrisk eksakt intervall er riktig, ikke en feil.
8. **Regresjon: tolk koeffisientene i kontekst**, bruk **justert $R^2$** (ikke $R^2$)
   til modellvalg, forklar **konfundering**, advar mot **ekstrapolering** og forveksling
   av **konfidens-** og **prediksjonsintervall**.
9. **Residualplott tolkes i mønstre**, ikke «ser greit ut».
10. **Tolkning av R-utskrift skal være presis** — vite hvilken kolonne som er estimat,
    standardfeil, t-verdi og P-verdi, og hva Residual standard error, Multiple/Adjusted
    R² og F-statistikken betyr.
11. **Tallsvar med rimelig presisjon, riktig kvantil og enhet.**

---

## 5. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 10+15 = **25** | 10+25 = **35** |
| 1 | 1.1–1.5 | 25+30+30+20+25 = **130** | 30+35+30+25+15 = **135** |
| 2 | 2.1–2.7 | 30+30+25+15+15+15+25 = **155** | 30+30+30+20+15+15+15 = **155** |
| 3 | 3.1–3.7 | 30+25+30+20+20+10+25 = **160** | 30+25+30+20+20+15+15 = **155** |
| 4 | 4.1–4.4 | 15+10+10+10 = **45** | 25+0+0+0 = **25** |
| **Sum** | **25 kapitler** | **515** | **505** |

**Summeringskontroll:** Quiz $25+130+155+160+45 = \mathbf{515} \ge 500$ ✓.
Flashcards $35+135+155+155+25 = \mathbf{505} \ge 500$ ✓.

**Prøver totalt:** 12 temaprøver (4 per temadel × Del 1–3) + 3 øvingseksamener
(Del 4) = **15 prøvesett**. Krav ≥4 prøver per temadel: Del 1 = 4 ✓, Del 2 = 4 ✓,
Del 3 = 4 ✓.

**Flashcard-påminnelse (fra byggekontrakt-mekanikken):** flashcards genereres KUN fra
toppnivå `definition`-blokker med `title`. Hvert kapittels flashcard-kvote må derfor
realiseres som så mange navngitte `definition`-blokker på toppnivå (ikke i
collapsible). Øvingseksamenene (4.2–4.4) har 0 flashcards (rene oppgavesett).

---

## 6. Studieguide

Del 0 (kap. 0.1 eksamenskart + 0.2 STK1100-broen) er studieguidens kjerne og skal
kunne leses selvstendig som «slik består du STK1110». Den utfyllende studieguiden
bygges rundt de tre søylene:

1. **Estimeringssøylen (Del 1):** den faste Oppgave 1 — behersk hele kjeden
   `moment/ML → bekreft maks → forventningsretthet → varians → Fisher-info → Wald-KI`
   utenat, som en refleks. Bayes/konjugering er A-differensiatoren.
2. **Test-/KI-søylen (Del 2):** det komplette test-ritualet er sensorkravet — øv på å
   skrive ut nivå-utledningen og P-verdi-definisjonen hver gang; behersk t/Wald/andels-KI
   og CI↔test-dualiteten; kjenn styrke/dimensjonering, eksakt pivot, ANOVA og det
   ikke-parametriske alternativet.
3. **Regresjonssøylen (Del 3):** den tunge Oppgave 3 — behersk LS/matriseform,
   koeffisientinferens, **justert R² (ikke R²)**, konfundering, diagnostikk (mønstre!),
   prediksjons- vs. konfidensintervall, og fremfor alt **å lese R-utskrift** presist.
   INGEN kode.

**Lesestrategi:** de tre søylene er likevektede — ingen kan velges bort. Bruk
drillkapitlene (1.5, 2.7, 3.7) som hovedtrening og øvingseksamenene (4.2–4.4) som
generalprøve. STK1100-apparatet (kap. 0.2) leses kun ved behov (rustent
sannsynlighetsgrunnlag). Tidsbudsjett: 2–3 kjededelte oppgaver på 4 timer; hopp aldri
av en kjede fordi ett deltrinn stopper.

---

## 7. Byggerekkefølge og verifikasjon

**Byggerekkefølge (fase 4, én agent per hel del; maks ~2 samtidige):**
1. **Del 0** (2 kap) — eksamenskart + STK1100-bro. Etablerer notasjon, sjangerkatalog
   A–P, kryssbok-regelen (klartekst til STK1100).
2. **Del 1** (5 kap) — estimeringsteori + drill 1.5. Etablerer ML-kjeden og
   estimator-notasjonen som Del 2–3 bygger på.
3. **Del 2** (7 kap) — test+KI + drill 2.7. **Grenser til DNA-taket (7 kap):** hvis
   delt, gi begge agentene HELE Del 2s kontrakter og flagg for konsistenssjekk
   (testritual-notasjon, frihetsgrader, dualitet må være enhetlig).
4. **Del 3** (7 kap) — regresjon + drill 3.7. **R-utskrifter som tekst-tabeller, INGEN
   kode** — egenvalideres med grep mot forbudte kode-termer (se under).
5. **Del 4** (3 kap) — øvingseksamener. Bygges av én agent som leser HELE skjelettet
   (må referere sjangre og resultater fra alle tre søyler).

**Egenvalidering per agent:** `json.load` alle nye filer; **kvotetelling** mot §5
(quiz per kapittel = fasit — ikke overstyr); **forbudt-term-grep:** ingen kodeblokker
eller Python/R-kjøring (`import`, `def `, `np.`, `<-`, `lm(`, `for _ in`,
` ```python `, ` ```r `) — R-utskrift skal være ren tekst-tabell, ikke kjørbar kode;
grep for `(verifiser` (og varianter som `(verifiser ledd)`) for oppfølging i fase 6.

**Sentral wiring (fase 5):** parse skjelettet → 25 kapitler + 3 prøvekapitler
(`stk1110-1-prove`, `stk1110-2-prove`, `stk1110-3-prove`, chapterNumber `1.P/2.P/3.P`;
Del 4-øvingseksamenene er allerede kapitler). `TextbookCourse` i
`textbook-courses-hoyskole.ts`; `sectionNames` fra §2 (Del 0–4). Registrer i
`institusjoner.ts` under **Universitetet i Oslo**, navn «STK1110 Statistiske metoder
og dataanalyse». Merge quiz-staging → `quiz-data-stk1110.ts`. Append `_registry.json`.

**Verifikasjon (fase 6–7):**
- **Kryssbok-lenker:** alle STK1100-referanser er KLARTEKST med `(→ stk1100-x-y)`;
  verifikator sjekker `_registry.json` — HVIS `stk1100-*` finnes, bytt til aktive
  lenker; ellers behold klartekst. R1/R2/S1/S2-lenker skal peke på eksisterende id-er.
- **Faktasjekk:** etterregn alle talleksempler; sjekk **frihetsgrader** i hvert
  test-/KI-/regresjonseksempel (egen sjekk — §4.6 straffer feil df); verifiser at hvert
  ML-eksempel **bekrefter maksimum** ($\ell''<0$); verifiser at testritual-eksempler
  har alle 5 trinn inkl. **nivå-utledningen** og verbal P-verdi-definisjon; verifiser at
  regresjonseksempler bruker **justert R²** til modellvalg og skiller **konfidens-** fra
  **prediksjonsintervall**.
- **Symbol- og formelliste** finnes i hvert delkapittel (collapsible etter
  Forkunnskaper).
- **Kvoter må IKKE endres** (definition-telling før/etter; quiz-sum = 515, flashcards
  = 505).
- **Konsistens:** notasjon enhetlig på tvers av agentgrenser (særlig Del 2 og Del 3).
- **Sluttsveip:** `npx tsc --noEmit` + `npm run build`; prod-server + curl på
  institusjonsside, bokforside og minst 3 kapitler (teori/drill/prøve) + quiz-/
  flashcard-rute (200 + innholdssjekk).

---

## 8. Kilder

- `docs/hoyskole-boker/stk1110/EKSAMENSANALYSE.md` — empirisk grunnlag (22 sett
  2004–2025, 11 grundig lest med løsningsforslag 2015–2025).
- `docs/hoyskole-boker/DNA-regnefag.md` — arketype (teori/drill/øvingseksamen-DNA).
- `docs/hoyskole-boker/README.md` — leserkrav (forkunnskaper, symbol-/formelliste,
  eksamensvinkel, typiske feil) + minimumskrav (≥500 quiz/flashcards, ≥4 prøver/tema).
- `docs/hoyskole-boker/PRODUKSJONSLOYPE.md` — fase 2-format (del-basert `number`,
  seksjonstitler, kvotesammendrag, prøvekvoter).
- `docs/hoyskole-boker/stk1100/SKJELETT.md` — forgjengerboken; forkunnskapsankeret
  (klartekst til STK1100 er live). Anker-id-er brukt: `stk1100-1-2` (E/Var),
  `stk1100-1-3` (Poisson), `stk1100-2-1`/`2-2` (fordelinger, gamma/χ²),
  `stk1100-4-2` (transformasjon), `stk1100-5-1`/`5-2` (estimator/ML),
  `stk1100-6-1`/`6-2` (pivotal-/CLT-KI), `stk1100-8-3` (enkel regresjon, elementær).
</content>
</invoke>
