# Bokskjelett: STK2100 Maskinlæring og statistiske metoder for prediksjon og klassifikasjon — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (N = 8 ordinære, lukkede skoleeksamener/prøveeksamener
> 2017–2025, alle med løsningsforslag lest grundig; korona-hjemmeeksamenene 2020/2021
> med R-koding holdt utenfor frekvenstellingen, brukt til pensumbredde).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) med **lånt drøftingselement fra
> `DNA-drofting.md`** for tolknings-/metodevalg-sjangeren (se §1). Kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Strukturforbilde:** `docs/hoyskole-boker/stk1110/SKJELETT.md` (nærmeste
> statistikk-forbilde, samme institusjon, samme kjededelte oppgavetradisjon og
> R-utskrift-tolkning; STK2100 forutsetter STK1110). Formatet (del-basert `number`,
> tre-søyle-balanse, drillkapittel per søyle, eksamenstreningsdel) er arvet derfra.
> Men **temavektene er utvidet**: der STK1110 stopper ved inferens i én riktig modell,
> gjør STK2100 **modellvalg etter prediksjonsevne, bias–varians og høydimensjonalitet**
> til bærebjelker. Progresjonen STK1110 → STK2100 er dokumentert i analysens del 8.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `stk2100` |
| Tittel | **STK2100 Maskinlæring og statistiske metoder for prediksjon og klassifikasjon** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo |
| Arketype | Regnefag (kvantitativt emne) + lånt tolknings-/metodevalg-drøfting |
| Antall kapitler | **28** (2 eksamenskart/bro + 22 tema hvorav 4 drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 1 715 min ≈ 29 timer** |
| Quiz totalt | **595** (krav ≥500) |
| Flashcards totalt | **585** (krav ≥500) |

**Pitch (ett avsnitt):** STK2100-eksamen har en usedvanlig stabil form: **3–4 store
oppgaver, hver en kjede av 4–7 punktdelte deloppgaver (a, b, c, …) i samme
datasett-kontekst**, «all subquestions counted equally» — ingen del kan velges bort
taktisk. Settet organiseres nesten alltid rundt fire søyler: **(1) regresjon og
modellvalg** (lineær/GAM/tre/ensemble, tolke R-utskrift, regne **AIC/BIC**, telle
frihetsgrader, bias–varians, kryssvalidering, ridge/lasso-utledning), **(2)
klassifikasjon** (logistisk regresjon med oddsratio og beslutningsgrense, LDA/QDA,
kNN, ROC/AUC, Bayes-tap), **(3) trær og ensembler** (regresjons-/klassifikasjonstre,
lese en sti, bagging, random forest, boosting) og **(4) uveiledet læring og
høydimensjonalitet** (K-means, hierarkisk klynging, PCA, forbannelsen ved
dimensjonalitet). To ferdigheter er *universelle* og går igjen i praktisk talt hvert
sett: **å tolke R-utskrift/plott/figurer i ord** og **å regne + tolke AIC/BIC** (begge
≈100 %). Boka er bygget som målrettet drill mot nettopp disse mønstrene, med ett
drillkapittel per søyle. Formelsamlingen for STK1100/STK1110 (+ en egen STK2100-samling)
er alltid tillatt — den inneholder standardfordelinger (inkl. **hypergeometrisk**,
brukt i random-forest-oppgaven 2024) og kvantiltabeller — så boka trener det eksamen
faktisk måler: å *velge* riktig metode/modell, *tolke* R-utskrift, *regne* AIC/BIC og
feilrater, og *utlede* det som ikke står der (penaliserte estimatorer, bias–varians,
bagging-MSE, LDA/QDA-grenser, hatmatrise-egenskaper, spline-frihetsgrader) — ikke pugging.

**To eksamenssjangre lever side om side (avgjørende for boka):**
- **(I) Tolkning / metodevalg** — les R-utskrift, plott og figurer og forklar i ord:
  hvilke kovariater er viktige, hva en koeffisient betyr i kontekst, hvorfor en P-verdi
  endrer seg, hva et GAM-plott/dendrogram/scree-plott/ROC-kurve sier, hvilken modell du
  velger og *hvorfor*. Dette er en **drøftingssjanger med begrunnelsesplikt** — flere
  evidensunderbygde svar godtas, men de MÅ begrunnes (analysens §4.10). Herfra det
  lånte DNA-drøfting-elementet.
- **(II) Utledning / regning for hånd** — utled ridge/lasso-estimatoren, vis at bagging
  aldri øker MSE, dekomponer bias–varians, hatmatrise-egenskaper, LDA/QDA-grenser,
  spline-frihetsgrader. Ren regnefag-DNA.

Hver storoppgave blander de to. **Boka må trene begge like hardt.**

**Kritisk notasjonsregel (gjelder HELE boka)** — settenes egen notasjon følges:

- $Y$ respons, $x$/$X$ kovariat(er)/designmatrise ($X$ er $n\times p$-designmatrisen);
  $\hat f$, $\hat\beta$, $\hat p$ estimatorer/prediktorer; store bokstaver for
  stokastiske variable, små for observasjoner. **Skill estimator (stokastisk) fra
  estimat (tall)** konsekvent — sensorkrav arvet fra STK1110.
- $R_m$ tre-region, $c_m$ regionverdi (konstant prediksjon per region); $S$
  glattematrise ($\hat y = Sy$); $\lambda$ straffe-/tuning-parameter (ridge/lasso/boosting);
  $K$ antall folder ELLER antall klynger (kontekst avgjør — merk eksplisitt per
  delkapittel); $m$ antall kovariater trukket per splitt i random forest; $\pi_k$
  klasse-a-priori; $f_k(x)$ klasse-betinget tetthet; $H = X(X^\top X)^{-1}X^\top$
  hatmatrise; $\ell(\hat\theta)$ log-likelihood (inngangen til AIC/BIC).
- **Parametertelling (bruk konsekvent — sensorkrav §4.2/§4.6):** lineær $= \#\beta$;
  logistisk $= p+1$; **tre $= \#\text{blader}$** (vanligst) eller
  $\#\text{blader}+2\cdot\#\text{splitter}$ (evt. $+\sigma^2$ for regresjonstre) — oppgi
  gjerne begge; **GAM $= \operatorname{trace}(S)$** (ikke-heltall!); LDA
  $= 1+2p+p(p+1)/2$; QDA $= 1+2p+p(p+1)$; diagonal QDA $= 4p+1$.
- $\text{AIC} = -2\ell(\hat\theta)+2p$, $\text{BIC} = -2\ell(\hat\theta)+\log(N)\,p$;
  **lavere er bedre**; BIC straffer hardere ($\log N > 2$ for $N>7$).

**R-utskrift-prinsippet (gjelder HELE boka):** boka lærer studenten å **lese** R-utskrift
(`lm`/`glm`-sammendrag med Estimate | Std. Error | t/z value | Pr, Residual standard error,
Null/Residual deviance, Multiple/Adjusted R², F-statistikk, AIC; «Anova for Nonparametric
Effects»; tredigram, dendrogram, scree-, ROC- og GAM-plott), **ikke å skrive kode**.
Kodingen hører til obligene og var et korona-avvik i 2020/2021. **STK2100-boka har INGEN
kjørbar kode.** R-utskrifter gjengis som rene tekst-tabeller i `text`-blokker (monospace).

**Formelsamling-prinsippet (gjelder HELE boka):** «Formelsamling for STK1100/STK1110»
og en egen «Formelsamling for STK2100» er alltid tillatt — standardfordelinger (inkl.
**hypergeometrisk** og binomisk), kvantiltabeller og grunnleggende regresjons-/MKM-formler
ligger på pulten. Hvert kapittel merker derfor innholdet: **«står i formelsamlingen —
tren *valg* og oppslag»** vs. **«må utledes/regnes aktivt»** (penaliserte estimatorer,
bias–varians, bagging-MSE, LDA/QDA-grenser, hatmatrise-egenskaper, lokal regresjon,
spline-df). Ren memorering finnes nesten ikke i dette emnet.

**KRYSSBOK-REGEL (gjelder HELE boka):** **STK1110 er IKKE bygget** (skjelett-stadiet per
juli 2026 — verifisert: ingen `stk1110-*`-filer i `_registry.json`). Alle STK1110-
referanser skrives derfor som **KLARTEKST** med kapittelnummer + tittel (f.eks. «STK1110
kap. 1.2 *Momentmetoden og maximum likelihood*»), **ikke** som markdown-lenke. Den
tiltenkte lenkedestinasjonen føres i parentes som `(→ stk1110-1-2)`, slik at verifikatoren
(fase 6) enkelt bytter til `[STK1110 kap. 1.2 …](/stk1110/stk1110-1-2)` **når STK1110
er live**. Byggeren SKAL sjekke `_registry.json` for `stk1110-*` før eventuell lenking.
**R1/R2/S1/S2 ER bygget** → kryssbok-lenker dit (derivasjon, integrasjon, matriser,
eksponentialfunksjonen) skrives som vanlige markdown-lenker.

**Symbol- og formelliste-regel (gjelder HELE boka):** Hvert delkapittel med symboler/formler
skal ha en `collapsible` **«Symbol- og formelliste»** rett etter Forkunnskaper som forklarer
ALLE symboler og formler brukt i *nettopp det delkapitlet* — per delkapittel, ikke arv fra
tidligere (README-leserkrav). Ingen av kapitlene i denne boka er symbolfrie; lista er
obligatorisk overalt.

**Avgrensning mot STK1110 (gjelder HELE boka):** STK2100 **forutsetter, men gjentar ikke**
STK1110s apparat: MLE/log-likelihood, forventningsrett estimator, varians av en estimator,
konfidensintervall og lineær regresjon med MKM. Disse får **ingen egne teorikapitler**, bare
en kompakt oppfriskning i **kap. 0.2** med kryssbok-referanser. Der et STK2100-tema *bruker*
et STK1110-verktøy (f.eks. log-likelihood i AIC/BIC, MKM-estimatoren som ridge utvider)
repeteres verktøyet i én-to setninger med kryssbok-referanse — ikke som ny teori. Det
klassiske STK1110-**hypotesetest-ritualet med tabellkvantiler er så godt som borte** som
selvstendig oppgave (≈0/8) — P-verdier **tolkes** fra R-utskrift her, de utledes ikke.
Ren sannsynlighetsregning (MGF/Jacobi/simultantetthet) forutsettes og dukker ikke opp.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*.
Analysens del 8 fastslår **fire tunge deler i balanse**. De to universelle ferdighetene
(tolke R-utskrift ≈100 %, regne AIC/BIC ≈100 %) er ikke egne deler, men **trådes gjennom
alle fire** — R-utskrift får eget åpningskapittel i Del 1 (kap. 1.1), AIC/BIC eget kapittel
(kap. 1.4), og begge repeteres i hvert drillkapittel.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart og STK1110-broen | 2 | Prioriteringsverktøyet + kompakt oppfriskning av det forutsatte STK1110-apparatet (MLE/log-likelihood, forventningsrett/varians, lineær MKM, KI) med kryssbok-referanser. |
| 1 | Veiledet regresjon og modellvalg | 8 | Tolke R-utskrift **100 %**, AIC/BIC **100 %**, bias–varians **75 %**, modellvalg/seleksjon **75 %**, kryssvalidering **75 %**, GAM/splines **63 %**, regularisering **63 %**, MKM/hatmatrise/GLS **50/25/13 %** → 7 teorikapitler + drillkapittel (regresjons-/modellvalgsoppgaven fra R-utskrift). Den bredeste og tyngste delen — bærer de to universelle ferdighetene. |
| 2 | Klassifikasjon | 6 | Logistisk regresjon **88 %**, ROC/AUC **50 %**, Bayes-tap **38 %**, kNN **38 %**, LDA/QDA **25 %** → 5 teorikapitler + drillkapittel (klassifikasjonsoppgaven). Klassifikasjon dominerer over ren regresjon når man teller. |
| 3 | Trær og ensembler | 4 | Tre-baserte metoder **88 %**, ensembler (bagging/RF/boosting) **63 %** → 3 teorikapitler + drillkapittel (lese en sti + telle df + utlede bagging-MSE + RF-hypergeometrisk). Fast gjenganger, ofte egen storoppgave. |
| 4 | Uveiledet læring og høydimensjonalitet | 4 | Klynging **50 %**, PCA **38 %**, kNN/forbannelse **38 %** (delt med Del 2) → 3 teorikapitler + drillkapittel. Fast avsluttende storoppgave (2019, 2020, 2024). |
| 5 | Eksamenstrening | 4 | Sjangerguiden A–Q + 3 komplette øvingseksamener etter den kjededelte tredelingen/firedelingen. |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | sectionNames-tittel |
|---|---|
| 0 | Eksamenskart og STK1110-broen |
| 1 | Veiledet regresjon og modellvalg |
| 2 | Klassifikasjon |
| 3 | Trær og ensembler |
| 4 | Uveiledet læring og høydimensjonalitet |
| 5 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. **Fire drillkapitler (1.8, 2.6, 3.4, 4.4) ligger inne i temadelene sine** i stedet for
   i siste del — de fire søylene er faste gjengangere som må drilles umiddelbart etter
   teorien (samme grep som STK1110/TMA4245). Del 5 beholder sjangerguiden og
   øvingseksamenene.
2. **STK1110-apparatet får INGEN egne teorikapitler** — kun en kompakt oppfriskning i
   kap. 0.2 med kryssbok-referanser (MLE/log-likelihood, forventningsrett/varians, lineær
   MKM, KI testes ≈0/8 som selvstendig oppgave). Tyngste avviket fra «ett kapittel per
   tema»; begrunnelse: analysens del 8 — det er forkunnskapsemnets domene.
3. **R-utskrift-tolkning får eget åpningskapittel (1.1)** — ikke en standard DNA-blokk,
   men den universelle sensor-nøkkelferdigheten (≈100 %). Boka inneholder ingen kode;
   R-utskrifter er tekst-tabeller.
4. **AIC/BIC får eget kapittel (1.4)** — den andre universelle ferdigheten (≈100 %), med
   særlig vekt på parametertelling for trær og GAM (klassisk snublestein).
5. **Lånt drøftingselement:** tolknings-/metodevalg-sjangeren (I) håndteres som
   drøfting med begrunnelsesplikt (DNA-drøfting §3–4). Flere evidensunderbygde svar
   godtas — men MÅ begrunnes. Modellbesvarelses-kapitlet 5.4 viser A- vs. C-nivå på
   nettopp en tolkningsoppgave.
6. **Del 1 har 8 kapitler (over DNA-taket på 7).** Ved bygging: hvis delt, gi begge
   agentene HELE Del 1s kontrakter og flagg delen for konsistenssjekk i fase 6 (notasjon
   for AIC/BIC, frihetsgrader, bias–varians og R-utskrift-oppsett må være enhetlig).
7. **Kryssbok-lenker til STK1110 er KLARTEKST** (ikke aktive lenker) inntil STK1110 er
   bygget — se KRYSSBOK-REGEL i §1.
8. **28 kapitler** — i øvre halvdel av DNA-rammen (20–35). Fire likevektede søyler krever
   hver en full kapittelkjede med drill; STK1110-broen komprimeres til ett kapittel fordi
   den ikke re-testes.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–Q) refererer til
oppgavetype-katalogen fra analysen §3, som gjengis for studenten i kap. 0.1:
**A** tolke R-utskrift (lineær/logistisk) · **B** AIC/BIC — utregning, parametertelling,
modellvalg · **C** bias–varians-dekomponering · **D** regresjons-/klassifikasjonstre —
lese/telle/tolke · **E** ensembler (bagging/RF/boosting) · **F** ridge/lasso — utledning
og tolkning · **G** GAM/splines/basisfunksjoner · **H** logistisk regresjon — oddsratio,
beslutningsgrense · **I** LDA/QDA — grense og frihetsgrader · **J** ROC/AUC ·
**K** kryssvalidering / trening vs. test / bootstrap · **L** kNN + forbannelsen ved
dimensjonalitet · **M** Bayes-klassifikator og forventet tap · **N** klynging (K-means +
hierarkisk) · **O** PCA/dimensjonsreduksjon · **P** matriseregresjon (MKM, hatmatrise,
vektet/GLS) · **Q** lokal regresjon / backfitting.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart og STK1110-broen

#### Kapittel 0.1: Eksamenskartet: slik testes STK2100

- **id:** `stk2100-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, de fire likevektede søylene, de to universelle ferdighetene (tolke R-utskrift + AIC/BIC), temafrekvensene, sjangerkatalogen A–Q og lesestrategien — og hva som bevisst er utelatt.
- **Eksamensbelegg:** Metakapittel — bygger på alle 8 ordinære sett (2017–2025 +
  prøveeksamen V22), grundig på løsningsforslagene. Skal gjengi: (i) **formen:** 4 timers
  skriftlig skoleeksamen, godkjent kalkulator + formelsamling(er) som eneste hjelpemidler;
  bokstavkarakter A–F; teller 100 %, to obligatoriske R-innleveringer må være godkjent for
  adgang; **3–4 store oppgaver, hver en kjede av 4–7 punktdelte deloppgaver (a, b, c, …) i
  samme datasett-kontekst; «all subquestions counted equally»** — ingen del kan
  nedprioriteres. (ii) **Den tematiske søyleinndelingen:** regresjon/modellvalg,
  klassifikasjon, trær/ensembler, uveiledet — pluss ofte en ren utledningsoppgave. (iii)
  **Temafrekvens-tabellen** (andel av 8 sett): tolke R-utskrift/plott ≈100 %, AIC/BIC
  ≈100 %, logistisk regresjon 88 %, tre-baserte metoder 88 %, bias–varians 75 %,
  modellvalg/seleksjon 75 %, kryssvalidering 75 %, GAM/splines 63 %, regularisering
  (ridge/lasso) 63 %, ensembler 63 %, ROC/AUC 50 %, MKM/matriseregresjon 50 %, klynging
  50 %, PCA 38 %, kNN/forbannelse 38 %, Bayes-tap 38 %, LDA/QDA 25 %, hatmatrise 25 %,
  nevrale nett 25 %, vektet MKM/GLS 13 %, lokal regresjon 13 %, backfitting 13 %,
  0.632-bootstrap 13 %. (iv) **De to universelle ferdighetene** som limet: *tolke
  R-utskrift/plott* og *regne + tolke AIC/BIC* — ingen ordinær eksamen mangler noen av dem.
  (v) Sensorens ti krav (fra §4). (vi) Karakterskillene: bestått = lese R-utskrift, regne
  AIC/BIC, skrive logistisk/lineær modell, følge en tresti; C/B = full ridge/lasso-utledning,
  bias–varians-dekomponering, kryssvaliderings-resonnement, ROC/AUC-tolkning; A =
  bagging-MSE-ulikheten + RF-hypergeometrisk, LDA/QDA-grense og df, hatmatrise-egenskaper,
  vektet MKM, spline-df, lokal regresjon/backfitting. (vii) **Det bevisst utelatte:**
  omfattende R-koding (ligger i obligene / korona-avvik 2020/2021); STK1110-hypotesetest-
  ritualet med tabellkvantiler (P-verdier tolkes her, utledes ikke); ren sannsynlighetsregning
  (STK1100/1110-domene, se kap. 0.2). (viii) Prognosen for neste ordinære eksamen (3–4
  kjededelte oppgaver som dekker de fire søylene; sannsynlige gjengangere: bagging-MSE +
  RF-hypergeometrisk, LDA/QDA-grense, spline-df, kNN/forbannelse, Bayes-tap med kostnader,
  0.632-bootstrap).
- **Innholdskontrakt:** Sjangerkatalogen A–Q presenteres som studentens sjekkliste med
  frekvens og typisk plassering (hvilken av de 3–4 storoppgavene). Leseplan: Del 1–4 er de
  fire likevektede søylene; kap. 0.2 er STK1110-broen (les hvis rusten på inferens/MKM).
  Presiser de to eksamenssjangrene **(I) tolkning/metodevalg** og **(II) utledning/regning**
  eksplisitt — og at nesten hver deloppgave blander dem. Avslutt med tidsbudsjett-logikk for
  4-timerseksamen (3–4 oppgaver à ~60–80 min; i en kjede a–f: hopp aldri av hvis ett
  delpunkt stopper — senere punkter kan løses med *oppgitt* mellomresultat).
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «settet har 4
  kjededelte storoppgaver à 240/4 min der én er klassifikasjon og én er uveiledet — sett opp
  tidsbudsjett og rekkefølge, og forklar hvorfor et blankt deltrinn ikke betyr at resten av
  kjeden er tapt».
- **Typiske feil:** Metafeilene: pugge formler som ligger i formelsamlingen i stedet for å
  trene *valg* + *utledning*; øve kun på regresjon og møte veggen på klassifikasjon/uveiledet
  (som til sammen bærer minst halve settet); hoppe over de tunge utledningene (ridge/lasso,
  bias–varians, bagging-MSE) som skiller A fra C; forberede R-koding (feil format — det er
  obligene) eller STK1110-hypotesetest-ritualet (feil emne).
- **Quiz: 12 · Flashcards: 12** (frekvenser, sjangre A–Q, sensorkrav, de fire søylene, de to
  universelle ferdighetene)

#### Kapittel 0.2: STK1110-broen: hva forutsettes (kompakt repetisjon)

- **id:** `stk2100-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori (repetisjon)
- **description:** En kompakt oppfriskning av STK1110-apparatet STK2100 bygger direkte på — MLE/log-likelihood, forventningsrett estimator og varians, lineær regresjon med MKM på matriseform, og konfidensintervall/usikkerhet — med kryssbok-referanser, ikke ny teori.
- **Eksamensbelegg:** Ikke et eget oppgavetema (≈0/8 som selvstendig oppgave), men
  **verktøykassen bak alle fire søylene.** Analysens del 8 dokumenterer at STK2100
  forutsetter, ikke gjentar, dette. Kapitlet gjør studenten kampklar uten å bruke
  eksamensplass på repetisjon. Prioritet: **kjenne** (fundament, ikke testet direkte).
- **Forkunnskaper (kryssbok):** STK1110 kap. 0.2 *STK1100-broen* (→ stk1110-0-2), kap. 1.2
  *Momentmetoden og maximum likelihood* (→ stk1110-1-2), kap. 1.1 *Estimatorers egenskaper*
  (→ stk1110-1-1), kap. 1.3 *Fisher-informasjon og Wald-KI* (→ stk1110-1-3), kap. 3.1
  *Enkel lineær regresjon* og kap. 3.4/3.5 *Multippel regresjon på matriseform*
  (→ stk1110-3-x). *(Klartekst inntil STK1110 er bygget — se KRYSSBOK-REGEL.)* For
  derivasjon/eksponentialfunksjonen: [R2 1.4 Den naturlige logaritmen](/r2/r2-1-4),
  [R1 4.1 Derivasjonsregler](/r1/r1-4-1).
- **Innholdskontrakt:** KOMPAKT — hvert punkt maks noen linjer + kryssbok-referanse, ingen
  fulle utledninger (de ligger i STK1110). (1) **Log-likelihood** $\ell(\theta)=\sum_i \log
  f(x_i;\theta)$ og at ML maksimerer den — **inngangen til AIC/BIC** (kap. 1.4) og til å
  tilpasse logistisk regresjon/GLM (kap. 2.1). (2) **Forventningsrett estimator og varians:**
  $E(\hat\theta)$, $\text{Var}(\hat\theta)$ — hele **bias–varians-avveiningen** (kap. 1.3) er
  en omformulering av dette; STK1110 lærer at forventningsretthet er bra, STK2100 viser at
  man **frivillig ofrer** den for mindre varians (ridge/lasso). (3) **Lineær regresjon på
  matriseform:** $Y=X\beta+\varepsilon$, MKM-estimatoren $\hat\beta=(X^\top X)^{-1}X^\top Y$
  — **utgangspunktet** som utvides til ridge/lasso (kap. 1.6), GAM (kap. 1.7), trær (Del 3);
  studenten bør kunne derivere den (gjøres på nytt i kap. 1.2). (4) **Konfidensintervall /
  usikkerhet:** ideen videreføres, men *måleredskapet* blir testfeil, kryssvalidering og
  AIC/BIC (kap. 1.4–1.5) snarere enn klassiske intervaller. Avslutt eksplisitt: «Alt dette
  forutsettes; STK2100 skifter *målet* — fra å estimere parametre i én riktig modell til å
  velge blant mange modeller etter prediksjonsevne.»
- **Oppgavesjangre:** Fundament, ikke egen sjanger. 4–6 korte oppfriskningsoppgaver: skriv
  opp log-likelihood for en gitt tetthet; regn $E$/Var av en enkel estimator; skriv den
  lineære modellen på matriseform og pek ut $X$, $\beta$, $\varepsilon$.
- **Typiske feil:** Tro at STK2100 re-tester STK1110s hypotesetest-rituale (det gjør det
  ikke); ha rustent MKM-/matriseoppsett inn i eksamen og tape tid på det i
  regresjonsoppgaven; ikke gjenkjenne log-likelihood som byggesteinen i AIC/BIC.
- **Quiz: 16 · Flashcards: 24** (kryssbok-repetisjon, log-likelihood, MKM-matriseform,
  bias–varians-broen)

**Prøve-kvote Del 0:** ingen (metadel + repetisjon).

---

### Del 1 — Veiledet regresjon og modellvalg *(prioritet: PERFEKT — bærer de to universelle ferdighetene, ≈100 %)*

#### Kapittel 1.1: Å lese R-utskrift fra en regresjon

- **id:** `stk2100-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `stk2100-0-2`
- **kapitteltype:** teori
- **description:** Den universelle åpningsferdigheten: les et lm/glm-sammendrag, pek ut hvilke kovariater som er viktige fra P-verdier, tolk en koeffisient i kontekst «alt annet likt», og forklar hvorfor tolkningen blir vanskelig når kovariater henger sammen.
- **Eksamensbelegg:** Sjanger A: tolke R-utskrift i **≈8/8 (100 %)** — åpner nesten alltid
  Oppgave 1. Krever å peke ut viktige kovariater fra P-verdier (Wald/z-test, *betinget* på de
  andre), tolke en koeffisient i kontekst, og forklare hvorfor korrelerte kovariater (f.eks.
  `hr` og `daynight`) gjør tolkningen vanskelig. Prioritet: **perfekt** (nivå 1 punkt 1).
- **Forkunnskaper:** kap. 0.2; STK1110 kap. 3.2 *Tolkning av R-utskrift* (→ stk1110-3-2)
  *(klartekst)*.
- **Innholdskontrakt (aktivt — tolkning):** Kolonnene i et `lm`/`glm`-sammendrag:
  **Estimate | Std. Error | t/z value | Pr(>|t|)**; **Residual standard error**,
  **Multiple/Adjusted R²**, **F-statistikk**, **Null/Residual deviance**, **AIC**. **Viktige
  kovariater** identifiseres fra P-verdiene, men **testen er betinget** på de øvrige — en
  ikke-signifikant koeffisient er IKKE «ingen effekt» (sensorkrav §4.1). **Tolke en
  koeffisient i kontekst:** «$\hat\beta_{\text{temp}}=4{,}3$ → forventet respons øker med
  ~4,3 enheter per grad, alt annet likt». **Hvorfor P-verdier endrer seg:** korrelasjon/
  konfundering flytter signifikans mellom variabler — fasitene bruker mye plass på dette. For
  logistisk (peker fram til kap. 2.1): deviance i stedet for RSS. **Merk formelsamling:** selve
  fordelingskvantilene ligger der; treningen er *tolkning*, ikke oppslag.
- **Oppgavesjangre:** A (sjanger I, tolkning/drøfting). Mønstereksempel: «Ut fra R-utskriften,
  hvilke forklaringsvariabler er viktige? Tolk effekten av `temp`, og forklar hvorfor effekten
  av `hr` er vanskeligere å tolke.» Løsning skrevet som A-besvarelse med begrunnet utvalg.
- **Typiske feil (analysen §5.2):** Tolke en ikke-signifikant koeffisient som «ingen effekt»
  uten å huske at testen er **betinget** på de andre; ikke forklare at korrelasjon flytter
  signifikans; lese feil kolonne (forveksle Std. Error og t-verdi); mekanisk tolkning uten
  «alt annet likt».
- **Quiz: 30 · Flashcards: 28**

#### Kapittel 1.2: Lineær regresjon på matriseform: MKM og hatmatrisen

- **id:** `stk2100-1-2` · **number:** 1.2 · **estimatedMinutes:** 65 · **prerequisites:** `stk2100-1-1`
- **kapitteltype:** teori
- **description:** Utled MKM-estimatoren β̂=(XᵀX)⁻¹XᵀY ved å minimere RSS, og hatmatrisens egenskaper (H idempotent, E=(I−H)Y, Cov(E)=σ²(I−H), E[RSS]=σ²(n−p), ortogonalitet) — grunnlaget alt annet bygger på.
- **Eksamensbelegg:** Sjanger P: grunnleggende MKM/matriseform i **≈4/8 (50 %)**;
  **hatmatrise-egenskaper** i **≈2/8 (25 %)** (tung — `E[RSS]=σ²(n−p)`, ortogonalitet). Dette
  er utgangspunktet ridge/lasso, GAM og trær utvider. Prioritet: **kunne** (nivå 2), hatmatrise
  **kjenne** (nivå 3 punkt 15; A-differensiator).
- **Forkunnskaper:** kap. 0.2 (matriseform); STK1110 kap. 3.4 *Multippel regresjon på
  matriseform* (→ stk1110-3-4) *(klartekst)*. For derivasjon: [R1 4.1](/r1/r1-4-1).
- **Innholdskontrakt (aktivt — utledning):** **MKM:** minimer $\text{RSS}=(Y-X\beta)^\top
  (Y-X\beta)$; deriver mht. $\beta$, sett lik null (normallikningene $X^\top X\hat\beta=X^\top
  Y$), løs $\hat\beta=(X^\top X)^{-1}X^\top Y$. **Hatmatrise** $H=X(X^\top X)^{-1}X^\top$:
  **idempotent og symmetrisk** ($H^2=H$, $H^\top=H$); prediksjonen $\hat Y=HY$; residualene
  $E=(I-H)Y=(I-H)\varepsilon$, $E[E]=0$, $\text{Cov}(E)=\sigma^2(I-H)$; **spor-trikset**
  $E[\text{RSS}]=\sigma^2\,\text{tr}(I-H)=\sigma^2(n-p)$; **ortogonalitet**
  $\text{Cov}(\hat Y,E)=0$. Bruk $\text{tr}(H)=p$ (antall parametre). **Kobling framover:**
  glattematrisen $S$ i GAM (kap. 1.7) spiller hatmatrisens rolle, med df $=\text{tr}(S)$.
- **Oppgavesjangre:** P (sjanger II, utledning). Mønstereksempel: «Utled minste kvadraters
  estimator på matriseform. Vis at hatmatrisen er idempotent og at $E[\text{RSS}]=\sigma^2
  (n-p)$ ved sportrikset.»
- **Typiske feil (analysen §5.5):** Hoppe over derivasjonssteget (bare oppgi $\hat\beta$);
  glemme at $H$ er idempotent (kritisk i sportrikset); forveksle $\text{tr}(H)=p$ og
  $\text{tr}(I-H)=n-p$; ikke se residualene som $(I-H)\varepsilon$.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.3: Bias–varians-avveiningen og overtilpasning

- **id:** `stk2100-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `stk2100-1-2`
- **kapitteltype:** teori
- **description:** Emnets gjennomgående rammeverk: dekomponer forventet prediksjonsfeil i irredusibelt ledd + kvadrert bias + varians, koble til fleksibilitet (λ, K, treets størrelse), og forklar hvorfor treningsfeil undervurderer testfeil.
- **Eksamensbelegg:** Sjanger C: bias–varians i **≈6/8 (75 %)** — begrep i mange sett, full
  dekomponering i ~4/8 + prøveeksamen. **Emnets sentrale rammeverk** — nesten hver metode
  diskuteres som en fleksibilitetsknapp med bias–varians-effekt (sensorkrav §4.5). Prioritet:
  **perfekt** (nivå 1 punkt 5).
- **Forkunnskaper:** kap. 1.2; STK1110 kap. 1.1 *Estimatorers egenskaper* (E/Var, MSE)
  (→ stk1110-1-1) *(klartekst)*.
- **Innholdskontrakt (aktivt — utledning):** **Dekomponeringen:** $E[(Y-\hat f)^2\mid x] =
  \underbrace{\text{Var}(\varepsilon)}_{\text{irredusibelt}} +
  \underbrace{(f(x)-E[\hat f(x)])^2}_{\text{bias}^2} + \underbrace{\text{Var}[\hat f(x)]}_{
  \text{varians}}$ — utledes ved å **legge til og trekke fra** $E[Y\mid x]=f(x)$ og
  $E[\hat f(x)]$, og **argumentere at kryssleddene faller bort** (sensorkrav §4.3/§5.5).
  **Tolkning:** restriktive/enkle modeller → høy bias, lav varians; fleksible → lav bias, høy
  varians. **Treningsfeil undervurderer testfeil** (modellen tilpasser også støyen) → bruk den
  ALDRI til modellvalg. **Fleksibilitetsknappene** ($\lambda$ i ridge/lasso, $K$ i kNN, treets
  størrelse, antall skjulte noder) er alle bias–varians-avveininger. Variant: telle-respons
  ($\text{Var}=Np(1-p)$) og klassifikasjonstap.
- **Oppgavesjangre:** C (sjanger II, utledning). Mønstereksempel: «Vis at forventet
  prediksjonsfeil splittes i irredusibelt ledd, kvadrert forventningsskjevhet og varians, og
  forklar avveiningen med et eksempel (f.eks. valg av $K$ i kNN).»
- **Typiske feil (analysen §5.5):** **Glemme kryssleddet** — ikke vise at det er null; hoppe
  over $E[Y\mid x]=f(x)$-innskuddet; bruke **treningsfeilen** til modellvalg; forveksle bias og
  varians (hvilken vei går de med fleksibilitet).
- **Quiz: 30 · Flashcards: 25**

#### Kapittel 1.4: AIC, BIC og parametertelling

- **id:** `stk2100-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** `stk2100-1-3`
- **kapitteltype:** teori
- **description:** Den andre universelle ferdigheten: regn AIC=−2ℓ+2p og BIC=−2ℓ+log(N)·p fra log-likelihood, tell parametre korrekt (særlig for trær og GAM), og velg/sammenlign modeller (BIC hardere, AIC for prediksjon).
- **Eksamensbelegg:** Sjanger B: AIC/BIC i **≈8/8 (100 %)** — ryggraden i modellsammenligningen.
  Regnes ut for hånd fra oppgitt log-likelihood i nesten hvert sett; **parametertelling for
  trær** (blader vs. blader+2×splitter(+σ²)) er en klassisk snublestein fasitene bruker mye
  plass på. Prioritet: **perfekt** (nivå 1 punkt 2).
- **Forkunnskaper:** kap. 0.2 (log-likelihood), 1.3; STK1110 kap. 1.2 *Maximum likelihood*
  (→ stk1110-1-2) *(klartekst)*.
- **Innholdskontrakt (aktivt — regning + tolkning):** **Formlene:** $\text{AIC}=-2\ell
  (\hat\theta)+2p$, $\text{BIC}=-2\ell(\hat\theta)+\log(N)\,p$ — **lavere er bedre**. **BIC
  straffer hardere** ($\log N>2$ for $N>7$) og velger enklere modell; **AIC passer for
  prediksjon, BIC for å finne «riktig» modell**; de kan velge ulike (ikke-nøstede) modeller
  ved korrelerte variabler. **Kritisk delferdighet — parametertelling:** lineær $=\#\beta$;
  logistisk $=p+1$; **tre $=\#\text{blader}$** (vanligst) eller $\#\text{blader}+2\cdot
  \#\text{splitter}$ (+$\sigma^2$ for regresjonstre) — **oppgi gjerne begge, fasit aksepterer
  begge, men feil telling straffes**; **GAM $=\text{trace}(S)$** (ikke-heltall — vanlig felle).
  Regn AIC/BIC ut fra oppgitt $\ell$ og sammenlign lineær/GAM/tre.
- **Oppgavesjangre:** B (sjanger I+II). Mønstereksempel: «Regn ut AIC og BIC for treet med 11
  blader, forklar hvordan du teller frihetsgradene, og sammenlign med den lineære modellen og
  GAM. Hvilken velger BIC, og hvorfor straffer den hardere?»
- **Typiske feil (analysen §5.1, §5.7):** **Feil parametertelling for trær** (glemme
  splittene, eller $\sigma^2$); **regne GAM-df som heltall** (det er $\text{trace}(S)$); tro
  AIC og BIC alltid velger samme modell; ikke vite at BIC straffer hardere; feil fortegn
  (glemme at lavere er bedre).
- **Quiz: 32 · Flashcards: 30**

#### Kapittel 1.5: Kryssvalidering, trening vs. test og bootstrap

- **id:** `stk2100-1-5` · **number:** 1.5 · **estimatedMinutes:** 55 · **prerequisites:** `stk2100-1-4`
- **kapitteltype:** teori
- **description:** Hvorfor treningsfeil er for optimistisk, tren/valider/test-skillet, K-fold/LOOCV-prosedyren og avveiningen, og 0.632-bootstrap (vekt 0,632 = 1−e⁻¹) med når den svikter.
- **Eksamensbelegg:** Sjanger K: kryssvalidering i **≈6/8 (75 %)**; 0.632-bootstrap i **≈1/8
  (13 %)** (2024). Et gjennomgående «gotcha»: modellvalg på valideringssettet krever et **eget
  testsett**; pre-seleksjon på hele datasettet er lekkasje (sensorkrav §4.4). Prioritet:
  **perfekt** (nivå 1 punkt 6); bootstrap **kjenne** (nivå 3 punkt 17).
- **Forkunnskaper:** kap. 1.3 (bias–varians), 1.4.
- **Innholdskontrakt (aktivt — resonnement + prosedyre):** **Treningsfeil er for optimistisk**
  (tilpasser støyen) → trenger **eget testsett**; når man også gjør modellvalg trengs et
  **tredje sett** (valideringssett velger modell, testsett evaluerer endelig). **K-fold:** del
  i $K$ folder, tren på $K-1$, valider på den siste, roter og midle; **LOOCV** = $K=n$.
  Avveiningen: stor $K$ utnytter data bedre, men er tyngre å regne / høyere varians på
  estimatet. CV velger tuning-parameter ($\lambda$, $K$). **0.632-bootstrap:** blande
  bootstrap-feil og treningsfeil; vekten $0{,}632\approx 1-e^{-1}$ = sannsynligheten for at en
  observasjon er med i et bootstrap-utvalg; **svikter for sterkt overtilpassende metoder**
  (liten $k$ i kNN) → 0.632+.
- **Oppgavesjangre:** K (sjanger I+II). Mønstereksempel: «Forklar hvorfor treningsfeilen
  undervurderer testfeilen, og beskriv hvordan K-fold kryssvalidering gir et bedre estimat.
  Hvorfor trengs et eget testsett i tillegg til valideringssettet?»
- **Typiske feil (analysen §5.3, §5.4):** **Bruke treningsfeilen til modellvalg**;
  **pre-seleksjon/tuning på hele datasettet** (inkl. testdata) før splitt — lekkasje; glemme at
  modellvalg på valideringssettet krever et eget testsett til slutt; ikke vite at
  0.632-vekten er $1-e^{-1}$ eller at den svikter ved sterk overtilpasning.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.6: Regularisering: ridge og lasso

- **id:** `stk2100-1-6` · **number:** 1.6 · **estimatedMinutes:** 65 · **prerequisites:** `stk2100-1-5`
- **kapitteltype:** teori
- **description:** Skriv den penaliserte tapsfunksjonen, deriver og finn ridge-estimatoren β̂=(XᵀX+λI)⁻¹XᵀY, vis at den er forventningsskjev med redusert varians, og forklar at lasso setter koeffisienter eksakt = 0 (seleksjon) mens ridge bare krymper.
- **Eksamensbelegg:** Sjanger F: ridge/lasso i **≈5/8 (63 %)** — full utledning av
  normallikningene avgjør C mot B. Varianter: penalisere mot en verdi ≠ 0 (`λ(β₁−1.5)²`, 2022)
  → vektet snitt av MKM og målverdi. Prioritet: **kunne** (nivå 2 punkt 7).
- **Forkunnskaper:** kap. 1.2 (MKM/matriseform), 1.3 (bias–varians), 1.5 (λ via CV).
- **Innholdskontrakt (aktivt — utledning):** **Ridge (L2):** tapsfunksjon $L_\lambda(\beta)=
  \sum_i(y_i-\beta_0-\sum_j\beta_j x_{ij})^2+\lambda\sum_j\beta_j^2$; **deriver mht. $\beta_0$
  og $\beta_k$, sett lik null**, land på $\hat\beta=(X^\top X+\lambda I)^{-1}X^\top Y$ (sentrert:
  $\hat\beta_0=\bar y$). Vis (sentrert/ortogonal) $E[\hat\beta]=\beta/(1+\lambda)$
  (**forventningsskjev**) og $\text{Var}[\hat\beta]=\sigma^2/(1+\lambda)^2$ (**redusert
  varians**) — bias–varians igjen. **Lasso (L1):** $+\lambda\sum_j|\beta_j|$ → setter noen
  koeffisienter **eksakt = 0** (variabelseleksjon), mens ridge bare **krymper**. $\lambda$
  velges ved **kryssvalidering** (kap. 1.5); variablene bør **skaleres** når samme $\lambda$
  brukes på alle. Variant: penalisering mot målverdi $\lambda(\beta_1-c)^2$ → vektet snitt.
- **Oppgavesjangre:** F (sjanger II+I). Mønstereksempel: «Skriv opp ridge-kriteriet, deriver
  og finn $\hat\beta$ på matriseform. Vis at estimatoren blir forventningsskjev, og forklar hva
  $\lambda$ gjør med bias og varians. Hva skiller lasso fra ridge?»
- **Typiske feil (analysen §5.6):** Tro at **ridge** kan nulle ut koeffisienter (det er
  **lasso**); glemme at variablene bør **skaleres** ved felles $\lambda$; glemme at ridge er
  **forventningsskjev**; hoppe over derivasjonen (bare oppgi normallikningene).
- **Quiz: 28 · Flashcards: 28**

#### Kapittel 1.7: GAM, splines og basisfunksjoner

- **id:** `stk2100-1-7` · **number:** 1.7 · **estimatedMinutes:** 60 · **prerequisites:** `stk2100-1-4`
- **kapitteltype:** teori
- **description:** En GAM er additiv i glatte, ikke-lineære ledd bygget av basisfunksjoner; modellen er lineær i parametrene gitt basisen (df=trace(S)), og spline-frihetsgrader telles som #parametre − #kontinuitetsbetingelser. Tolk GAM-plott med forbehold.
- **Eksamensbelegg:** Sjanger G: GAM/splines i **≈5/8 (63 %)** — spline-df-utledningen særlig i
  prøveeksamen. Tolke GAM-plott (ikke-lineær vs. lineær effekt, brede konfidensbånd der data er
  tynne), «Anova for Nonparametric Effects». Prioritet: **kunne** (nivå 2 punkt 8).
- **Forkunnskaper:** kap. 1.1 (R-utskrift/plott), 1.2 (glattematrise-analogien), 1.4 (df i
  AIC/BIC).
- **Innholdskontrakt (aktivt + tolkning):** **GAM** = additiv i glatte ledd
  $g(E[Y])=\beta_0+\sum_j s_j(x_j)$; hver $s_j$ bygget av **basisfunksjoner/splines**;
  **lineær i parametrene gitt basisen** (vanlig lineær-modell-maskineri gjelder).
  **Frihetsgrader $=\text{trace}(S)$** der $\hat y=Sy$ ($S$ = glattematrisen, analog til $H$).
  **Spline-df-utledning:** tell parametre minus kontinuitets-/deriverbarhets-betingelser (f.eks.
  stykkevis kvadratisk med $M-1$ knuter, kontinuerlig med kontinuerlig derivert → $M+2$ frie
  parametre). **Tolke GAM-plott:** ikke-lineær effekt vs. tilnærmet lineær; **brede
  konfidensbånd der data er tynne**; **advar mot ekstrapolering** utenfor dataområdet.
- **Oppgavesjangre:** G (sjanger I+II). Mønstereksempel: «En stykkevis kvadratisk funksjon med
  $M-1$ knutepunkter kreves kontinuerlig med kontinuerlig derivert. Hvor mange frie parametre
  gjenstår? Tolk deretter GAM-plottet og forklar hvor effekten er mest usikker.»
- **Typiske feil (analysen §5.9, §5.12):** **Regne GAM-df som heltall** (det er
  $\text{trace}(S)$); feiltelle spline-parametre (glemme kontinuitetsbetingelsene);
  **ekstrapolere** en spline langt utenfor dataområdet uten forbehold; tro at ikke-lineær
  basis bryter lineær-modell-maskineriet.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 1.8: Drill: regresjons- og modellvalgsoppgaven fra R-utskrift (sjanger A–G, P)

- **id:** `stk2100-1-8` · **number:** 1.8 · **estimatedMinutes:** 85 · **prerequisites:** `stk2100-1-7`
- **kapitteltype:** drill
- **description:** Standardtreningen i den faste regresjons-/modellvalgsoppgaven: fra R-utskrift til viktige kovariater, AIC/BIC-sammenligning av lineær/GAM/tre/ensemble med korrekt parametertelling, bias–varians-vurdering, og en ridge/lasso- eller hatmatrise-utledning.
- **Eksamensbelegg:** Regresjons-/modellvalgsoppgaven er den bredeste storoppgaven i praktisk
  talt hvert sett (kombinert frekvens A+B+C ≈100 %). Kjeden `tolke R-utskrift → AIC/BIC med
  parametertelling → bias–varians → kryssvalidering → (ridge/lasso-utledning eller GAM-df)` er
  selve ryggraden. Prioritet: **perfekt** (nivå 1 — den bredeste enkeltkjeden).
- **Forkunnskaper:** kap. 1.1–1.7.
- **Innholdskontrakt:** **Løsningsoppskrift (DNA-drillformat):** 1) **les R-utskriften** — pek
  ut viktige kovariater fra P-verdier (betinget!), tolk en koeffisient i kontekst; 2) **regn
  AIC/BIC** for konkurrerende modeller med **korrekt parametertelling** (lineær/GAM
  ($\text{tr}(S)$)/tre (blader ± splitter)); 3) **velg modell** og begrunn (BIC hardere, AIC
  for prediksjon) — begrunnelsesplikt; 4) **koble til bias–varians** (fleksibilitetsknapp); 5)
  evt. en **utledning** (ridge/lasso-normallikningene, eller hatmatrise $E[\text{RSS}]=\sigma^2
  (n-p)$, eller spline-df). Gjennomregnet eksamenscase med sensor-margnotater om hva som gir
  uttelling ved hvert ledd. **10–15 varianter** over ulike datasett, alle på eksamensnivå, hver
  som en liten a–f-kjede.
- **Oppgavesjangre:** A + B + C + F + G + P (samlet kjede). Mønstereksempel: «(a) Tolk
  R-utskriften: hvilke kovariater er viktige? (b) Regn AIC og BIC for den lineære modellen og
  for et tre med 8 blader; tell frihetsgradene. (c) Hvilken modell velger du og hvorfor? (d)
  Skriv opp ridge-kriteriet, deriver og finn $\hat\beta$. (e) Forklar hva $\lambda$ gjør med
  bias og varians.»
- **Typiske feil (analysen §5.1, §5.2, §5.5):** Feil parametertelling for trær/GAM i AIC/BIC;
  tolke ikke-signifikant koeffisient som «ingen effekt»; velge modell uten begrunnelse (fasit
  krever den); glemme kryssleddet / hoppe over ledd i en utledning.
- **Quiz: 25 · Flashcards: 12**

**Prøve-kvote Del 1:** 4 prøver (1.A tolke R-utskrift + koeffisient i kontekst + hvorfor
P-verdi endrer seg 35 min · 1.B AIC/BIC med parametertelling for lineær/tre/GAM + modellvalg
40 min · 1.C bias–varians-dekomponering + kryssvaliderings-resonnement 40 min · 1.D full
ridge/lasso-utledning (deriver normallikningene) + hatmatrise/GAM-df på eksamensnivå 45 min).

---

### Del 2 — Klassifikasjon *(prioritet: PERFEKT/KUNNE — dominerer over ren regresjon, ~88 %+)*

#### Kapittel 2.1: Logistisk regresjon: modell, oddsratio og beslutningsgrense

- **id:** `stk2100-2-1` · **number:** 2.1 · **estimatedMinutes:** 65 · **prerequisites:** `stk2100-1-1`
- **kapitteltype:** teori
- **description:** Skriv den logistiske modellen Pr(Y=1|x)=e^η/(1+e^η), regn ut en sannsynlighet, oversett koeffisient til oddsratio e^β, finn terskelen i en kovariat som gir p=0,5, og utled at beslutningsgrensen er lineær.
- **Eksamensbelegg:** Sjanger H: logistisk regresjon i **≈7/8 (88 %)** — bærebjelken i
  klassifikasjonssøylen. Krever sannsynlighet for gitte kovariatverdier, oddsratio $e^\beta$,
  terskel for $p=0{,}5$ (sett lineær-prediktor $=0$), tolke konstantleddet (baseline, ofte uten
  fysisk mening → sentrer), og hvorfor en koeffisient blir (ikke-)signifikant avhengig av de
  andre. Prioritet: **perfekt** (nivå 1 punkt 3).
- **Forkunnskaper:** kap. 1.1 (R-utskrift), 0.2 (log-likelihood/GLM); [R2 1.4 Den naturlige
  logaritmen](/r2/r2-1-4).
- **Innholdskontrakt (aktivt + tolkning):** **Modellen:** $\Pr(Y=1\mid x)=
  \dfrac{e^{\eta}}{1+e^{\eta}}$, $\eta=\beta_0+\sum_j\beta_j x_j$. **Regn ut en sannsynlighet**
  for gitte kovariatverdier. **Oddsratio:** $e^{\beta_j}$ = multiplikativ endring i odds per
  enhets økning i $x_j$. **Terskel for $p=0{,}5$:** sett $\eta=0$ og løs for kovariaten.
  **Beslutningsgrensen er lineær** ($\eta=0$) — utled dette. **Frihetsgrader** $=p+1$.
  **Konstantleddet** er baseline (log-odds ved $x=0$); sentrér når $x=0$ er urealistisk. Les
  koeffisienter og deviance fra `glm`-utskrift (kap. 1.1).
- **Oppgavesjangre:** H (sjanger I+II). Mønstereksempel: «Regn ut sannsynligheten for sykdom
  for et individ med `pregnant=2, glucose=160`. Hvor lavt må glukosenivået være for at
  sannsynligheten skal bli under 0,5? Vis at beslutningsgrensen er lineær.»
- **Typiske feil (analysen §5.2, §5.12):** Forveksle odds og sannsynlighet; glemme å ta
  $e^\beta$ for oddsratio; tolke konstantleddet ved urealistisk $x=0$ (sentrer i stedet);
  regne feil terskel (glemme å sette $\eta=0$); tro en ikke-signifikant koeffisient betyr
  «ingen effekt» (betinget test).
- **Quiz: 30 · Flashcards: 30**

#### Kapittel 2.2: Bayes-klassifikatoren og forventet tap

- **id:** `stk2100-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `stk2100-2-1`
- **kapitteltype:** teori
- **description:** Vis at 0–1-tap minimeres ved Ŷ=argmax_g Pr(Y=g|x), utvid til asymmetriske kostnader (terskel c_R/(c_R+c_S)), og bruk Bayes' regel + naiv Bayes / betinget uavhengighet til å regne posterior-sannsynligheter.
- **Eksamensbelegg:** Sjanger M: Bayes-tap i **≈3/8 (38 %)**; naiv Bayes/betinget uavhengighet
  i prøveeksamen (spam-eksempel). Prioritet: **kunne** (nivå 2 punkt 12).
- **Forkunnskaper:** kap. 2.1; STK1110 kap. 0.2 (betinget sannsynlighet/Bayes' regel)
  (→ stk1110-0-2) *(klartekst)*.
- **Innholdskontrakt (aktivt — utledning):** **0–1-tap minimeres** ved
  $\hat Y=\arg\max_g \Pr(Y=g\mid x)$ — vis dette (velg klassen med størst betinget
  sannsynlighet). **Asymmetriske kostnader** ($c_R$, $c_S$): den optimale terskelen er
  $\Pr(Y=1\mid x)>\dfrac{c_R}{c_R+c_S}$ — utled. **Bayes' regel:** $\Pr(Y=k\mid x)\propto
  \pi_k f_k(x)$; **naiv Bayes / betinget uavhengighet:** $f_k(x)=\prod_j f_k(x_j)$ for mange
  ord/kovariater (spam-eksempel). Regn posterior-sannsynligheter.
- **Oppgavesjangre:** M (sjanger II). Mønstereksempel: «Vis at den optimale klassifikatoren
  under 0–1-tap velger klassen med størst betinget sannsynlighet, og finn terskelen når en
  falsk negativ koster tre ganger så mye som en falsk positiv.»
- **Typiske feil (analysen §5):** Glemme a-priori $\pi_k$ i Bayes' regel; feil terskel ved
  asymmetriske kostnader (bytte om $c_R$ og $c_S$); bruke naiv Bayes uten å nevne
  uavhengighetsantakelsen; ikke normere posterioren.
- **Quiz: 22 · Flashcards: 25**

#### Kapittel 2.3: LDA og QDA: beslutningsgrense og frihetsgrader

- **id:** `stk2100-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `stk2100-2-2`
- **kapitteltype:** teori
- **description:** Bruk Bayes' regel med gaussiske klasse-tettheter, sett de to log-posteriorene like og utled at LDA gir lineær og QDA gir kvadratisk grense, tell frihetsgradene i hver modell, og ranger dem etter kompleksitet.
- **Eksamensbelegg:** Sjanger I: LDA/QDA i **≈2/8 (25 %)** — men **tung når den kommer** (hel
  storoppgave i 2025). A-differensiator. Prioritet: **kjenne** (nivå 3 punkt 14).
- **Forkunnskaper:** kap. 2.2 (Bayes' regel), 2.1 (kobling til logistisk).
- **Innholdskontrakt (aktivt — utledning):** $\Pr(Y=k\mid x)\propto\pi_k f_k(x)$ med
  **gaussiske** $f_k$. **LDA (felles $\Sigma$):** sett de to log-posteriorene like → de
  kvadratiske leddene kanselerer → **lineær beslutningsgrense**. **QDA (ulik $\Sigma_k$):**
  kvadratiske ledd overlever → **kvadratisk grense**. **Frihetsgrader:** LDA $=1+2p+p(p+1)/2$;
  QDA $=1+2p+p(p+1)$; **diagonal QDA (betinget uavhengighet)** $=4p+1$ — ranger modellene etter
  kompleksitet. **Kobling:** logistisk regresjon har den *samme* lineære grensen som LDA, men
  færre parametre.
- **Oppgavesjangre:** I (sjanger II). Mønstereksempel: «Vis at LDA gir en lineær
  beslutningsgrense og QDA en kvadratisk. Angi antall frie parametre i hver modell (inkl.
  diagonal QDA) og ranger dem etter kompleksitet.»
- **Typiske feil (analysen §5.8):** **Feil frihetsgrader** — glemme at felles $\Sigma$ (LDA)
  har $p(p+1)/2$ parametre, eller at diagonal QDA har bare $2p$ variansparametre; ikke vise at
  de kvadratiske leddene kanselerer i LDA; ikke koble LDA til logistisk (samme lineære grense).
- **Quiz: 22 · Flashcards: 25**

#### Kapittel 2.4: kNN og forbannelsen ved dimensjonalitet

- **id:** `stk2100-2-4` · **number:** 2.4 · **estimatedMinutes:** 50 · **prerequisites:** `stk2100-1-3`
- **kapitteltype:** teori
- **description:** Beskriv kNN, forklar at liten K gir lav bias/høy varians (1-NN har treningsfeil 0), og bruk medianavstand-formelen d(p,n)=(1−(1/2)^{1/n})^{1/p} til å vise at nærmeste nabo blir eksponentielt lengre unna når dimensjonen p vokser.
- **Eksamensbelegg:** Sjanger L: kNN/forbannelse i **≈3/8 (38 %)**. Kobles alltid til
  bias–varians. Prioritet: **kunne→kjenne** (nivå 3 punkt 16).
- **Forkunnskaper:** kap. 1.3 (bias–varians), 2.2 (Bayes-klassifikator som ideal).
- **Innholdskontrakt (aktivt + tolkning):** **kNN:** $\hat P(Y=g\mid x_0)=\frac1K\sum_{i\in
  N_0}I(y_i=g)$, klassifiser til flertall. **Bias–varians:** **liten $K$ → lav bias, høy
  varians** (1-NN har treningsfeil = 0, ekstrem overtilpasning); stor $K$ → høy bias, lav
  varians. **Forbannelsen:** medianavstand-formelen $d(p,n)=(1-(1/2)^{1/n})^{1/p}$ viser at
  nærmeste nabo blir eksponentielt lengre unna når dimensjonen $p$ vokser → ikke-parametriske
  metoder svikter i høye dimensjoner; **PCA** (kap. 4.2) som botemiddel.
- **Oppgavesjangre:** L (sjanger I+II). Mønstereksempel: «Forklar hvorfor 1-NN har treningsfeil
  null, og bruk avstandsformelen til å illustrere forbannelsen ved dimensjonalitet. Foreslå et
  botemiddel.»
- **Typiske feil (analysen §5.13):** **kNN-bias–varians feil vei** (tro at stor $K$
  overtilpasser — det er liten $K$); ikke koble til forbannelsen; forveksle $p$ (dimensjon) og
  $n$ (antall) i avstandsformelen.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 2.5: ROC-kurve og AUC

- **id:** `stk2100-2-5` · **number:** 2.5 · **estimatedMinutes:** 45 · **prerequisites:** `stk2100-2-1`
- **kapitteltype:** teori
- **description:** Definer true/false positive rate som funksjon av terskel τ, forklar at ROC-kurven plotter (tpr, fpr), at AUC måler samlet ytelse (perfekt = 1, tilfeldig = 0,5), og ranger modeller — også ved kryssende kurver.
- **Eksamensbelegg:** Sjanger J: ROC/AUC i **≈4/8 (50 %)**. Prioritet: **kunne** (nivå 2 punkt
  10).
- **Forkunnskaper:** kap. 2.1 (klassifikatorer gir sannsynligheter → terskel).
- **Innholdskontrakt (aktivt + tolkning):** **Sensitivitet (tpr)** $=\dfrac{\sum I(\hat y=1,
  y=1)}{\sum I(y=1)}$ og **1−spesifisitet (fpr)** $=\dfrac{\sum I(\hat y=1,y=0)}{\sum I(y=0)}$
  som funksjon av terskel $\tau$. **ROC-kurven** plotter (tpr, fpr) over alle $\tau$; **perfekt
  klassifikator** i øvre venstre hjørne (AUC = 1), **tilfeldig gjetting** langs diagonalen
  (AUC = 0,5). **Rangere modeller** etter hvor nær øvre venstre hjørne / hvor stor AUC — ved
  **kryssende kurver** suppler med feilrate/antall parametre.
- **Oppgavesjangre:** J (sjanger I, tolkning). Mønstereksempel: «Forklar hvordan en ROC-kurve
  konstrueres, hva AUC måler, og ranger de tre modellene ut fra figuren. Hva gjør du hvis to
  kurver krysser?»
- **Typiske feil (analysen §5.14):** **Forveksle sensitivitet og spesifisitet**; rangere
  modeller ut fra kryssende ROC-kurver uten å supplere med AUC/feilrate; tro AUC = 0,5 er bra
  (det er tilfeldig gjetting).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.6: Drill: klassifikasjonsoppgaven (sjanger H–J, L, M)

- **id:** `stk2100-2-6` · **number:** 2.6 · **estimatedMinutes:** 80 · **prerequisites:** `stk2100-2-5`
- **kapitteltype:** drill
- **description:** Standardtreningen i klassifikasjonsstoroppgaven: fra logistisk R-utskrift til sannsynlighet/oddsratio/terskel, LDA/QDA-grense og df-telling, ROC/AUC-rangering, og en Bayes-tap-vurdering med kostnader.
- **Eksamensbelegg:** Klassifikasjonsoppgaven er fast storoppgave (logistisk 88 % + LDA/QDA
  25 % + ROC/AUC 50 % + Bayes-tap 38 %). Kjeden `logistisk modell → sannsynlighet/oddsratio →
  beslutningsgrense → ROC/AUC-rangering → (LDA/QDA-grense + df) → Bayes-tap` er ryggraden.
  Prioritet: **perfekt** (nivå 1 — klassifikasjon dominerer over ren regresjon).
- **Forkunnskaper:** kap. 2.1–2.5.
- **Innholdskontrakt:** **Løsningsoppskrift (DNA-drillformat):** 1) **skriv den logistiske
  modellen** og regn en sannsynlighet; 2) **oddsratio** $e^\beta$ + tolkning i kontekst; 3)
  **terskel** for $p=0{,}5$ (sett $\eta=0$); 4) **ROC/AUC** — ranger modeller (håndter
  kryssende kurver); 5) evt. **LDA/QDA-grense** (lineær/kvadratisk) + **df-telling** + ranger
  kompleksitet; 6) evt. **Bayes-tap** med asymmetriske kostnader (terskel $c_R/(c_R+c_S)$).
  Gjennomregnet eksamenscase med sensor-margnotater. **10–15 varianter**, alle på eksamensnivå,
  hver som en liten a–f-kjede.
- **Oppgavesjangre:** H + I + J + L + M (samlet kjede). Mønstereksempel: «(a) Regn
  sannsynligheten for gitte kovariatverdier. (b) Gi oddsratio for `glucose` og tolk. (c) Finn
  terskelen for $p=0{,}5$. (d) Ranger de tre modellene ut fra ROC-kurven. (e) Vis at LDA gir
  lineær grense og tell frihetsgradene.»
- **Typiske feil:** §5.2 (betinget test), §5.8 (LDA/QDA-df), §5.14 (ROC), §5.12 (odds vs.
  sannsynlighet) — påpekes i margnotatene.
- **Quiz: 25 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (2.A logistisk regresjon: sannsynlighet + oddsratio + terskel +
lineær grense 35 min · 2.B LDA/QDA: utled grense + tell df + ranger kompleksitet 40 min · 2.C
ROC/AUC + Bayes-tap med asymmetriske kostnader 35 min · 2.D full klassifikasjonskjede a–f på
eksamensnivå (logistisk + ROC + LDA/QDA) 45 min).

---

### Del 3 — Trær og ensembler *(prioritet: PERFEKT/KUNNE — fast gjenganger, ~88 %/63 %)*

#### Kapittel 3.1: Regresjons- og klassifikasjonstrær: lese, telle, tolke

- **id:** `stk2100-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk2100-1-4`
- **kapitteltype:** teori
- **description:** Følg en sti gjennom tredigrammet og les av prediksjonen, forstå at treet gir konstant prediksjon/sannsynlighet per region (interaksjoner via ulike splitter), tell blader/splitter til AIC, og forklar hvorfor to søskenblader kan gi samme klasse.
- **Eksamensbelegg:** Sjanger D: tre-baserte metoder i **≈7/8 (88 %)** — ofte koblet til å lese
  av en prediksjon ved å følge en sti, og til parametertelling i AIC/BIC (kap. 1.4). Prioritet:
  **perfekt** (nivå 1 punkt 4).
- **Forkunnskaper:** kap. 1.4 (AIC/BIC + parametertelling), 1.3 (bias–varians via treets
  størrelse).
- **Innholdskontrakt (aktivt + tolkning):** **Følg en sti** gjennom tredigrammet for et gitt
  individ og **les av prediksjonen** (klasse eller tallverdi). Treet gir **konstant prediksjon
  per region** $R_m$: $\hat\mu_i=c_m$ (regresjon) / $\hat p_i=c_m$ (klassifikasjon). **Ulike
  splitter på ulike variabler gir interaksjoner.** **To søskenblader kan gi samme klasse** —
  fordi treet estimerer **sannsynligheter**, ikke bare klasser (splittene reduserer likevel
  urenhet). **Parametertelling** (til kap. 1.4): $\#\text{blader}$ eller
  $\#\text{blader}+2\cdot\#\text{splitter}$ (+$\sigma^2$ for regresjonstre). **Treets størrelse
  = fleksibilitetsknapp** (bias–varians). Beskjæring (pruning) nevnes kort.
- **Oppgavesjangre:** D (sjanger I). Mønstereksempel: «Bruk klassifikasjonstreet til å predikere
  for en person med glukose 160 og BMI 28. Forklar hvorfor de to ytterste splittene finnes selv
  om begge barn gir samme klasse. Tell frihetsgradene.»
- **Typiske feil (analysen §5.10, §5.1):** **Feillese en tresti** (ta feil retning ved en
  splitt); tro at treet gir en klasse direkte i stedet for en **estimert sannsynlighet** (derav
  to like søskenblader); feil parametertelling til AIC (glemme splittene / $\sigma^2$).
- **Quiz: 28 · Flashcards: 25**

#### Kapittel 3.2: Bagging og random forest

- **id:** `stk2100-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `stk2100-3-1`
- **kapitteltype:** teori
- **description:** Beskriv bagging (mange trær på bootstrap-utvalg, snitt/flertall) og random forest (bagging + trekk m≤p tilfeldige kovariater per splitt for å dekorrelere), utled at populasjons-bagging aldri øker MSE, og regn RF-variabelsannsynlighet med hypergeometrisk fordeling.
- **Eksamensbelegg:** Sjanger E: ensembler i **≈5/8 (63 %)**. Bagging-MSE-ulikheten +
  RF-hypergeometrisk (2024) er A-differensiatorer. Prioritet: **kunne** (nivå 2 punkt 9),
  utledningen **kjenne** (nivå 3 punkt 13).
- **Forkunnskaper:** kap. 3.1 (trær), 1.5 (bootstrap), 1.3 (bias–varians/dekorrelering);
  hypergeometrisk fordeling ligger i formelsamlingen (tren oppslag/valg).
- **Innholdskontrakt (aktivt — utledning + beskrivelse):** **Bagging:** mange trær på
  **bootstrap-utvalg**, **gjennomsnitt** (regresjon) / **flertall** (klassifikasjon) —
  reduserer varians. **Utled at populasjons-bagging aldri øker MSE:**
  $E[(Y-f_{ag})^2]\le E[(Y-f^*)^2]$ via å legge til/trekke fra $f_{ag}$ (Jensen/kryssledd = 0).
  **Random forest:** bagging + trekk et **tilfeldig utvalg $m\le p$ kovariater ved hver splitt**
  ($m=\lfloor\sqrt p\rfloor$ default) for å **dekorrelere** trærne. **RF-sannsynlighet:**
  sannsynligheten for å velge minst én relevant variabel blant $m$ av $p$ regnes med
  **hypergeometrisk fordeling** (2024). RF svekkes med mange støyvariabler.
- **Oppgavesjangre:** E (sjanger I+II). Mønstereksempel: «Vis matematisk at den ideelle
  bagging-estimatoren har mindre eller lik MSE som ett enkelt tre. Beskriv random forest som
  algoritme og pek på steget som skiller den fra bagging. Regn sannsynligheten for at en gitt
  relevant variabel er blant de $m=\lfloor\sqrt p\rfloor$ som trekkes.»
- **Typiske feil (analysen §5.5):** **Glemme kryssleddet** i bagging-MSE-utledningen; ikke se
  at RF-steget (tilfeldig kovariatutvalg) er det som **dekorrelerer**; feil oppsett av
  hypergeometrisk (forveksle med binomisk).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 3.3: Boosting

- **id:** `stk2100-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `stk2100-3-2`
- **kapitteltype:** teori
- **description:** Beskriv boosting: trær tilpasses sekvensielt til residualene, skalert med læringsrate λ, og forklar hvordan det skiller seg fra bagging/RF (sekvensielt vs. parallelt) og hvordan antall trær + λ styrer bias–varians.
- **Eksamensbelegg:** Sjanger E (del av ensembler **≈5/8 = 63 %**) — boosting beskrives i ord/
  pseudokode, sjelden tungt utledet på lukket eksamen. Prioritet: **kunne** (nivå 2 punkt 9).
- **Forkunnskaper:** kap. 3.2 (ensembler), 1.3 (bias–varians), 1.5 (tuning via CV).
- **Innholdskontrakt (beskrivelse + tolkning):** **Boosting:** trær tilpasses **sekvensielt til
  residualene** fra de foregående, hvert bidrag skalert med **læringsrate $\lambda$** (liten
  $\lambda$ → langsom, mer robust læring). **Skiller seg fra bagging/RF:** sekvensiell (ikke
  parallell/uavhengig) tilpasning; reduserer **bias** (ikke bare varians). **Fleksibilitet:**
  antall trær + $\lambda$ + tredybde er tuning-parametre (bias–varians, velges ved CV) — for
  mange trær kan overtilpasse. Konseptuell pseudokode, ingen kode.
- **Oppgavesjangre:** E (sjanger I). Mønstereksempel: «Beskriv boosting-algoritmen i pseudokode
  og forklar hvordan den skiller seg fra random forest. Hvordan påvirker læringsraten $\lambda$
  og antall trær bias og varians?»
- **Typiske feil:** Tro at boosting er parallelt som bagging (det er **sekvensielt**); tro flere
  trér alltid er bedre (kan overtilpasse); forveksle læringsraten $\lambda$ med
  regulariserings-$\lambda$ fra ridge/lasso.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 3.4: Drill: tre- og ensembleoppgaven (sjanger D, E)

- **id:** `stk2100-3-4` · **number:** 3.4 · **estimatedMinutes:** 75 · **prerequisites:** `stk2100-3-3`
- **kapitteltype:** drill
- **description:** Standardtreningen i tre-/ensembleoppgaven: les en sti og prediker, tell blader/splitter til AIC, utled bagging-MSE-ulikheten, regn RF-hypergeometrisk sannsynlighet, og beskriv bagging/RF/boosting og forskjellene.
- **Eksamensbelegg:** Tre-/ensembleoppgaven er fast gjenganger (trær 88 % + ensembler 63 %),
  ofte egen storoppgave. Kjeden `les tresti → tell df → AIC/BIC → bagging-MSE-utledning →
  RF-hypergeometrisk → beskriv boosting` er ryggraden. Prioritet: **perfekt** (nivå 1 punkt 4
  + nivå 3 punkt 13).
- **Forkunnskaper:** kap. 3.1–3.3, 1.4 (AIC/BIC).
- **Innholdskontrakt:** **Løsningsoppskrift (DNA-drillformat):** 1) **les en sti** og les av
  prediksjonen; 2) **tell blader/splitter** og regn AIC/BIC (begge tre-tellinger); 3) forklar
  **konstant prediksjon per region** + hvorfor to søskenblader kan gi samme klasse; 4) **utled
  bagging-MSE-ulikheten** (kryssledd = 0); 5) **beskriv random forest** + regn
  **hypergeometrisk** RF-sannsynlighet; 6) **beskriv boosting** og forskjellen fra bagging/RF.
  Gjennomregnet eksamenscase med sensor-margnotater. **8–15 varianter**, alle på eksamensnivå.
- **Oppgavesjangre:** D + E (samlet kjede). Mønstereksempel: «(a) Prediker for et gitt individ
  ved å følge treet. (b) Tell frihetsgradene og regn AIC. (c) Vis at bagging aldri øker MSE.
  (d) Regn sannsynligheten for at en relevant variabel er blant de $\lfloor\sqrt p\rfloor$ som
  trekkes. (e) Hva skiller boosting fra random forest?»
- **Typiske feil:** §5.10 (feillese sti / sannsynlighet vs. klasse), §5.1 (parametertelling),
  §5.5 (kryssledd i bagging-MSE) — påpekes i margnotatene.
- **Quiz: 22 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (3.A lese en tresti + konstant prediksjon per region + telle df
35 min · 3.B AIC/BIC for tre vs. lineær/GAM med korrekt parametertelling 35 min · 3.C
bagging-MSE-utledning + random forest + hypergeometrisk RF-sannsynlighet 40 min · 3.D full tre-/
ensemblekjede a–f på eksamensnivå (inkl. boosting) 45 min).

---

### Del 4 — Uveiledet læring og høydimensjonalitet *(prioritet: KUNNE — fast avsluttende storoppgave, ~50 %/38 %)*

#### Kapittel 4.1: Klynging: K-means og hierarkisk

- **id:** `stk2100-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk2100-0-2`
- **kapitteltype:** teori
- **description:** Beskriv K-means (iterér allokering argmin‖x−m_k‖² + sentroide-oppdatering) og hierarkisk klynging (single vs. complete link, dendrogram), forklar hvorfor resultatet avhenger av startverdier, og hvorfor kryssvalidering ikke kan brukes (uveiledet).
- **Eksamensbelegg:** Sjanger N: klynging i **≈4/8 (50 %)** — fast avsluttende storoppgave
  (2019, 2020, 2024). Prioritet: **kunne** (nivå 2 punkt 11).
- **Forkunnskaper:** kap. 0.2 (avstander/varians); kap. 1.5 (hvorfor CV IKKE gjelder her —
  kontrast).
- **Innholdskontrakt (aktivt + tolkning):** **K-means** (fast $K$): iterér **allokering**
  $\arg\min_k\|x_i-m_k\|^2$ og **sentroide-oppdatering** til stabilitet. **Svakheter:** må
  velge $K$; kun numeriske variabler; **sensitiv for startverdier → lokalt minimum** (kjør
  flere ganger). **Ingen CV** — uveiledet, ingen fasit; en større $K$ gir **alltid** lavere
  within-dissimilaritet, så «mer er bedre» er feil argument → bruk **elbow-metoden**.
  «Within + between dissimilarity» summerer til en konstant. **Hierarkisk:** agglomerativ vs.
  divisiv; **single vs. complete link** (og hvilke gruppeformer de finner); les **dendrogram**
  og velg kutt.
- **Oppgavesjangre:** N (sjanger I+II). Mønstereksempel: «Beskriv K-means-algoritmen, forklar
  hvorfor resultatet avhenger av startverdiene, og hvorfor man ikke kan velge $K$ med
  kryssvalidering. Les av antall klynger fra dendrogrammet ved et gitt kutt.»
- **Typiske feil (analysen §5.11):** **Klynging med kryssvalidering** (CV gir ikke mening uten
  fasit); tro at lavere within-dissimilaritet ved stor $K$ betyr «bedre»; glemme
  startverdi-sensitiviteten (K-means); forveksle single og complete link.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.2: PCA og dimensjonsreduksjon

- **id:** `stk2100-4-2` · **number:** 4.2 · **estimatedMinutes:** 45 · **prerequisites:** `stk2100-4-1`
- **kapitteltype:** teori
- **description:** Forklar PCA som lineære kombinasjoner som fanger mest mulig varians, les et scree-plott (andel forklart varians per komponent), og bruk de første komponentene til å komprimere før klynging/regresjon og som botemiddel mot forbannelsen ved dimensjonalitet.
- **Eksamensbelegg:** Sjanger O: PCA i **≈3/8 (38 %)** — ofte siste deloppgave, komprimere før
  klynging (tyngst i hjemmeeksamen 2020 med `prcomp`). Prioritet: **kunne→kjenne** (nivå 3 punkt
  16).
- **Forkunnskaper:** kap. 4.1 (klynging på komprimerte data), 2.4 (forbannelsen ved
  dimensjonalitet).
- **Innholdskontrakt (tolkning + begrep):** **PCA:** lineære kombinasjoner av kovariatene som
  **fanger mest mulig varians** (første komponent maksimerer varians, andre er ortogonal osv.).
  **Scree-plott:** andel forklart varians per komponent — velg antall komponenter der kurven
  «flater ut». Bruk de **første komponentene** til å **komprimere før klynging/regresjon** og
  som **botemiddel mot forbannelsen** (kap. 2.4). Tolke prinsipalkomponentene (hvilke
  originalvariabler de vekter). Ingen egenverdi-utledning kreves (formelsamling/begrep).
- **Oppgavesjangre:** O (sjanger I, tolkning). Mønstereksempel: «Forklar hva de to første
  prinsipalkomponentene fanger, les scree-plottet og begrunn hvor mange komponenter du beholder,
  og forklar hvorfor klyngingen blir bedre etter dimensjonsreduksjon.»
- **Typiske feil (analysen §5):** Tro flere komponenter alltid er bedre (poenget er
  komprimering); feillese scree-plottet; ikke koble PCA til forbannelsen/klynging; forveksle
  forklart varians med korrelasjon.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.3: Lokal regresjon og backfitting (additive modeller)

- **id:** `stk2100-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `stk2100-1-7`
- **kapitteltype:** teori
- **description:** Utled lokalt vektet MKM (minimer Σ K(x_i,x₀)(y_i−β₀−β₁x_i)²), vis at f̂(x₀) er lineær i y-ene (ŷ=Sy, df=trace(S)), og forklar backfitting for additive modeller (estimer én komponent om gangen på residualene, roter).
- **Eksamensbelegg:** Sjanger Q: lokal regresjon/backfitting i **≈1/8 (13 %)** (prøveeksamen;
  koblet til GAM) — sjeldnere, men **karaktersettende** A-differensiator. Prioritet: **kjenne**
  (nivå 3 punkt 17).
- **Forkunnskaper:** kap. 1.7 (GAM/glattematrise, df = trace(S)), 1.2 (vektet MKM-analogi).
- **Innholdskontrakt (aktivt — utledning):** **Lokalt vektet MKM:** minimer $\sum_i K(x_i,x_0)
  (y_i-\beta_0-\beta_1 x_i)^2$ (kjernevekter $K$ med båndbredde $h$); vis at $\hat f(x_0)$ blir
  en **lineær funksjon av $y$-ene** ($\hat y=Sy$), og at **frihetsgrader $=\text{trace}(S)$**
  (samme apparat som GAM). **Båndbredde $h$** = fleksibilitetsknapp (bias–varians). **Backfitting**
  for additive modeller: estimer **én additiv komponent om gangen på residualene**, roter til
  konvergens. Kobling til GAM (kap. 1.7).
- **Oppgavesjangre:** Q (sjanger II). Mønstereksempel: «Utled den lokalt vektede MKM-estimatoren,
  vis at prediksjonen er lineær i responsverdiene, og angi frihetsgradene. Beskriv deretter
  backfitting-algoritmen for en additiv modell.»
- **Typiske feil (analysen §5.9):** Ikke se at $\hat f$ er lineær i $y$ (og dermed $\hat y=Sy$);
  regne df som heltall (det er $\text{trace}(S)$); glemme kjernevektene i minimeringen; blande
  backfitting med boosting (begge er iterative på residualer, men ulike mål).
- **Quiz: 15 · Flashcards: 18**

#### Kapittel 4.4: Drill: den uveiledede avslutningsoppgaven (sjanger N, O; + L)

- **id:** `stk2100-4-4` · **number:** 4.4 · **estimatedMinutes:** 65 · **prerequisites:** `stk2100-4-3`
- **kapitteltype:** drill
- **description:** Standardtreningen i den avsluttende uveiledede storoppgaven: beskriv K-means og hierarkisk klynging, les et dendrogram, velg K uten CV, tolk et scree-plott og komprimer med PCA før klynging, og koble til forbannelsen ved dimensjonalitet.
- **Eksamensbelegg:** Den uveiledede oppgaven er fast avslutning på mange sett (klynging 50 % +
  PCA 38 %). Kjeden `K-means/hierarkisk → dendrogram/elbow → hvorfor ikke CV → PCA/scree →
  komprimere → forbannelsen` er ryggraden. Prioritet: **kunne** (nivå 2 punkt 11).
- **Forkunnskaper:** kap. 4.1–4.3, 2.4 (forbannelsen).
- **Innholdskontrakt:** **Løsningsoppskrift (DNA-drillformat):** 1) **beskriv K-means** +
  startverdi-sensitivitet; 2) **hierarkisk** (single/complete link) + **les dendrogram** og velg
  kutt; 3) **velg $K$** med elbow/dendrogram og forklar **hvorfor ikke CV**; 4) **tolk
  scree-plott** og **komprimer med PCA** før klynging; 5) koble til **forbannelsen ved
  dimensjonalitet** (kap. 2.4). Gjennomregnet eksamenscase med sensor-margnotater om
  begrunnelsesplikten (flere svar godtas, men må begrunnes). **8–12 varianter**, alle på
  eksamensnivå.
- **Oppgavesjangre:** N + O (+ L) (samlet kjede). Mønstereksempel: «(a) Beskriv K-means og
  forklar startverdi-sensitiviteten. (b) Les dendrogrammet og velg antall klynger. (c) Hvorfor
  kan du ikke velge $K$ med kryssvalidering? (d) Tolk scree-plottet og komprimer til to
  komponenter. (e) Hvorfor blir klyngingen bedre etter PCA?»
- **Typiske feil:** §5.11 (CV på uveiledet / within-dissimilaritet), §5.13 (forbannelsen feil
  vei) — påpekes i margnotatene.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A K-means + hierarkisk + dendrogram-kutt + hvorfor ikke CV
35 min · 4.B PCA: tolke scree-plott + komprimere før klynging + forbannelsen 35 min · 4.C lokal
regresjon/backfitting-utledning ($\hat y=Sy$, df) 40 min · 4.D full uveiledet kjede a–f på
eksamensnivå (klynging + PCA) 45 min).

---

### Del 5 — Eksamenstrening

#### Kapittel 5.1: Sjangerguiden A–Q: løsningsoppskrifter og tidsbudsjett

- **id:** `stk2100-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `stk2100-4-4`
- **kapitteltype:** sjangerguide (eksamenstrening)
- **description:** Én kompakt løsningsoppskrift per oppgavesjanger A–Q, med tidsbudsjett for 4-timerseksamen, hvilken storoppgave sjangeren typisk inngår i, og de to eksamenssjangrene (tolkning vs. utledning) som gjennomgående skille.
- **Eksamensbelegg:** Metakapittel som samler sjangerkatalogen (analysen §3) til en
  eksamensrefleks. Bygger på alle 8 sett. Prioritet: **perfekt** (oppsummerer nivå 1–3).
- **Forkunnskaper:** hele boka (Del 0–4).
- **Innholdskontrakt:** Én punktvis **løsningsoppskrift per sjanger A–Q** (algoritmisk
  fremgangsmåte, jf. drillkapitlene), med: hvilken storoppgave den typisk inngår i, frekvens,
  om den er sjanger **I (tolkning/metodevalg — begrunnelsesplikt)** eller **II (utledning —
  vis alle ledd)**, og et tidsestimat. **Tidsbudsjett for 4 timer:** 3–4 kjededelte
  storoppgaver à ~60–80 min, «all subquestions counted equally» — hopp aldri av en kjede fordi
  ett deltrinn stopper (bruk oppgitt mellomresultat). Sensorens ti krav (§4) som sjekkliste.
- **Oppgavesjangre:** Alle A–Q i komprimert form (3–5 diagnoseoppgaver: «gitt denne
  deloppgaveteksten, hvilken sjanger er dette, og hva er de tre første grepene?»).
- **Typiske feil:** Feilklassifisere sjangeren (regne der du skulle tolke, eller motsatt);
  droppe begrunnelsen i en tolkningsoppgave; hoppe over ledd i en utledning; feil tidsbudsjett
  (bruke for lang tid på åpningsoppgaven).
- **Quiz: 18 · Flashcards: 15**

#### Kapittel 5.2: Øvingseksamen 1 med løsningsforslag

- **id:** `stk2100-5-2` · **number:** 5.2 · **estimatedMinutes:** 90 · **prerequisites:** `stk2100-5-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett nyskrevet 4-timers sett med 3–4 kjededelte storoppgaver som speiler den typiske tematiske firedelingen (regresjon/modellvalg, klassifikasjon, trær/ensembler, uveiledet), med A-besvarelses-løsningsforslag i collapsible per deloppgave.
- **Eksamensbelegg:** Speiler den «typiske» eksamenen (analysen §2/§7): oppgave 1 regresjon/
  modellvalg med R-utskrift + AIC/BIC, oppgave 2 klassifikasjon (logistisk + ROC/AUC), oppgave
  3 trær/ensembler, oppgave 4 uveiledet (klynging + PCA). Prioritet: generalprøve.
- **Forkunnskaper:** hele boka.
- **Innholdskontrakt:** 3–4 storoppgaver, hver en a–f-kjede i samme datasett-kontekst,
  nyskrevne tall/kontekst. Løsningsforslag i eget `collapsible` per deloppgave, skrevet som
  **A-besvarelse**, med `tip`-notat om delpoeng/vekting og hvilken sjanger deloppgaven er.
  R-utskrifter som tekst-tabeller. Dekk begge eksamenssjangrene (tolkning + utledning).
- **Oppgavesjangre:** Blandet (A, B, C, F/G, H, J, D, E, N, O) etter firedelingen.
- **Typiske feil:** Samlet sjekkliste fra §4/§5 i løsningsnotatene.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 5.3: Øvingseksamen 2 med løsningsforslag

- **id:** `stk2100-5-3` · **number:** 5.3 · **estimatedMinutes:** 90 · **prerequisites:** `stk2100-5-1`
- **kapitteltype:** øvingseksamen
- **description:** Andre komplette sett, vridd mot utledningssjangeren (ridge/lasso, bias–varians, bagging-MSE, LDA/QDA-grense, hatmatrise) for å trene A-differensiatorene, med A-besvarelses-løsningsforslag.
- **Eksamensbelegg:** Vrir tyngdepunktet mot de tunge utledningene (analysens §4-toppsjikt):
  ridge/lasso-normallikninger, bias–varians-dekomponering, bagging-MSE + RF-hypergeometrisk,
  LDA/QDA-grense og df, hatmatrise/vektet MKM, spline-df. Prioritet: generalprøve (A-nivå).
- **Forkunnskaper:** hele boka.
- **Innholdskontrakt:** 3–4 storoppgaver som over, men med minst to tunge utledningsdeler. Løsning
  som A-besvarelse i collapsible per deloppgave, med vektingsnotat. Nyskrevne tall/kontekst.
- **Oppgavesjangre:** Blandet med vekt på F, C, E, I, P (utledningstunge).
- **Typiske feil:** §5.5 (kryssledd), §5.6 (ridge/lasso), §5.8 (LDA/QDA-df) i løsningsnotatene.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 5.4: Øvingseksamen 3 + modellbesvarelse (A vs. C på en tolkningsoppgave)

- **id:** `stk2100-5-4` · **number:** 5.4 · **estimatedMinutes:** 90 · **prerequisites:** `stk2100-5-1`
- **kapitteltype:** øvingseksamen + modellbesvarelse
- **description:** Tredje komplette sett, pluss en modellbesvarelse-seksjon (lånt fra DNA-drøfting) som viser A- vs. C-nivå på en tolknings-/metodevalg-oppgave — der begrunnelsesplikten skiller karakterene.
- **Eksamensbelegg:** Speiler et sett med tyngdepunkt på tolkning/metodevalg (sjanger I), som er
  den ene universelle ferdigheten. Modellbesvarelsen viser eksplisitt hva som løfter en
  R-utskrift-/modellvalg-tolkning fra C til A (begrunnelse, kobling til bias–varians,
  forbehold om ekstrapolering). Prioritet: generalprøve + karakterskille.
- **Forkunnskaper:** hele boka, særlig kap. 1.1, 1.4, 2.5, 4.1–4.2.
- **Innholdskontrakt:** 3–4 storoppgaver som over. I tillegg (DNA-drøfting modellbesvarelse-DNA):
  én tolkningsoppgave med **(a) `collapsible` A-besvarelse** (full, med margnotater «her:
  begrunnelse», «her: kobling til bias–varians — dette løfter til A»), **(b) `collapsible`
  kommentert C-besvarelse** (korrekt lest, men flat — mekanisk tolkning uten begrunnelse/
  forbehold), og **(c) `tip` Sensorblikket** (momentliste + vektlegging). Nyskrevne tall.
- **Oppgavesjangre:** Blandet med vekt på A, B, J, N, O (tolkning) + modellbesvarelse.
- **Typiske feil:** §5.2 (betinget test), §5.12 (ekstrapolering/konstantledd), §4.10
  (begrunnelsesplikt) — vist eksplisitt i C-besvarelsen.
- **Quiz: 12 · Flashcards: 0**

**Prøve-kvote Del 5:** ingen egne prøver — de tre øvingseksamenene (5.2–5.4) ER del-prøvene for
eksamenstreningen (hver et komplett sett med løsningsforslag).

---

## 4. Sensorens ti krav (destillert fra løsningsforslagene — gjelder alle kapitler)

Gjengis for studenten i kap. 0.1 og innarbeides i «Typiske feil»/«Eksamensvinkel» per kapittel.
Løsningsforslagene er **konsise og punktvise** («SKETCH of the SOLUTIONS») — vis regnekjeden
kompakt, og begrunn tolkninger presist i ord.

1. **Tolk i kontekst, ikke mekanisk.** En koeffisient tolkes «alt annet likt»; en
   ikke-signifikant variabel er ikke «uviktig» — testen er **betinget** på de øvrige, og
   korrelasjon kan flytte/skjule effekten.
2. **AIC/BIC riktig — særlig parametertellingen.** Begge formlene, regn dem ut, tell $p$
   korrekt (tre: blader vs. blader+2×splitter(+$\sigma^2$); GAM: $\text{trace}(S)$). Feil
   telling straffes.
3. **Utledninger skal vises fullstendig.** Ridge/lasso: skriv tapsfunksjonen, **deriver**, sett
   lik null, løs (komponentvis og/eller matriseform). Bias–varians og bagging-MSE: **legg til/
   trekk fra** riktig ledd og **argumenter at kryssleddet er null**. Hatmatrise: $(I-H)$
   idempotent + spor-triks.
4. **Skill trening / validering / test eksplisitt.** Treningsfeil er for optimistisk; modellvalg
   på valideringssettet krever et **eget testsett**; pre-seleksjon på hele datasettet er lekkasje.
5. **Koble alt til bias–varians / overtilpasning.** Hver metode ($\lambda$, $K$, treets
   størrelse, antall noder) diskuteres som en **fleksibilitetsknapp** med bias–varians-effekt.
6. **Riktig frihetsgrad-/parameter-telling** for LDA/QDA, trær, GAM og logistisk regresjon —
   brukt til å **rangere modellkompleksitet**.
7. **Beslutningsgrenser utledes, ikke pugges:** logistisk/LDA → lineær; QDA → kvadratisk; tre →
   aksefaste rektangler; kNN → fleksible «øyer». Sett log-odds/log-posterior $=0$.
8. **Klynging er uveiledet:** ingen CV; $K$ velges heuristisk (elbow/dendrogram); nevn
   sensitivitet for startverdier (K-means) og link-valg (hierarkisk).
9. **Tolk plott i mønstre og med forbehold:** ikke-lineær GAM-effekt, brede konfidensbånd i
   tynne dataområder, **advar mot ekstrapolering** utenfor dataområdet.
10. **Flere svar kan være riktige — men de må begrunnes.** Særlig i klynging og modellrangering
    godtas ulike evidensunderbygde tolkninger (begrunnelsesplikt — det lånte drøftingselementet).

---

## 5. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 12+16 = **28** | 12+24 = **36** |
| 1 | 1.1–1.8 | 30+25+30+32+25+28+25+25 = **220** | 28+25+25+30+25+28+25+12 = **198** |
| 2 | 2.1–2.6 | 30+22+22+20+18+25 = **137** | 30+25+25+22+20+12 = **134** |
| 3 | 3.1–3.4 | 28+25+18+22 = **93** | 25+25+20+12 = **82** |
| 4 | 4.1–4.4 | 25+18+15+20 = **78** | 25+20+18+12 = **75** |
| 5 | 5.1–5.4 | 18+12+12+12 = **54** | 15+0+0+0 = **15** |
| **Sum** | **28 kapitler** | **610** | **540** |

**Summeringskontroll:** Quiz $28+220+137+93+78+54 = \mathbf{610} \ge 500$ ✓ (margin +110).
Flashcards $36+198+134+82+75+15 = \mathbf{540} \ge 500$ ✓ (margin +40).

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE §fase 2-audit):** ≥500 er et GULV. STK2100 er et
metode-bredt regnefag med **17 distinkte oppgavesjangre (A–Q)** og to universelle ferdigheter
— quiz-kvoten skaleres derfor til 610 for å dekke sjangerbredden med tilstrekkelig drill per
metode. Flashcards ligger noe lavere (540) fordi faget er utlednings-/tolkningstungt snarere
enn begrepstungt (færre rene definisjoner enn et fakta-/puggefag), men fortsatt godt over
gulvet med margin — hver metode bidrar med sine kjernedefinisjoner (estimator, tapsfunksjon,
grense, df-formel). Øvingseksamenene (5.2–5.4) har 0 flashcards (rene oppgavesett).

**Prøver totalt:** 16 temaprøver (4 per temadel × Del 1–4) + 3 øvingseksamener (Del 5) =
**19 prøvesett**. Krav ≥4 prøver per temadel: Del 1 = 4 ✓, Del 2 = 4 ✓, Del 3 = 4 ✓,
Del 4 = 4 ✓.

**Flashcard-påminnelse (fra byggekontrakt-mekanikken):** flashcards genereres KUN fra toppnivå
`definition`-blokker med `title`. Hvert kapittels flashcard-kvote må derfor realiseres som så
mange navngitte `definition`-blokker på toppnivå (ikke i collapsible). Drillkapitlene (1.8, 2.6,
3.4, 4.4) har lav flashcard-kvote (12 hver) fordi de er rene oppgavekapitler; øvingseksamenene
(5.2–5.4) har 0.

---

## 6. Studieguide

Del 0 (kap. 0.1 eksamenskart + 0.2 STK1110-broen) er studieguidens kjerne og skal kunne leses
selvstendig som «slik består du STK2100». Den utfyllende studieguiden bygges rundt de fire
søylene + de to universelle ferdighetene:

1. **De to universelle ferdighetene (tråden gjennom hele boka):** *tolke R-utskrift/plott* (kap.
   1.1, øvet i hvert drillkapittel) og *regne + tolke AIC/BIC med korrekt parametertelling* (kap.
   1.4). Ingen ordinær eksamen mangler noen av dem — behersk dem som en refleks.
2. **Regresjons-/modellvalgssøylen (Del 1):** den bredeste oppgaven — R-utskrift, AIC/BIC,
   bias–varians, kryssvalidering, ridge/lasso-utledning, GAM/spline-df, MKM/hatmatrise. Bruk drill
   1.8.
3. **Klassifikasjonssøylen (Del 2):** logistisk regresjon (sannsynlighet/oddsratio/terskel/lineær
   grense) er kjernen; LDA/QDA-grense + df og ROC/AUC + Bayes-tap er C→A-differensiatorene. Bruk
   drill 2.6.
4. **Tre-/ensemblesøylen (Del 3):** lese en tresti + telle df er bestått-nivået; bagging-MSE-
   ulikheten + RF-hypergeometrisk er A-differensiatoren. Bruk drill 3.4.
5. **Uveiledet-søylen (Del 4):** K-means/hierarkisk + PCA er den faste avslutningen — husk at
   klynging er uveiledet (ingen CV) og at flere begrunnede svar godtas. Bruk drill 4.4.

**Lesestrategi:** de fire søylene er likevektede — ingen kan velges bort («all subquestions
counted equally»). Bruk drillkapitlene (1.8, 2.6, 3.4, 4.4) som hovedtrening og øvingseksamenene
(5.2–5.4) som generalprøve. STK1110-apparatet (kap. 0.2) leses kun ved behov (rustent
inferens-/MKM-grunnlag). Tidsbudsjett: 3–4 kjededelte oppgaver på 4 timer; hopp aldri av en kjede
fordi ett deltrinn stopper. Skille de to eksamenssjangrene bevisst: **tolkning** krever
begrunnelse (ikke mekanisk avlesning), **utledning** krever alle ledd (ikke bare svaret).

---

## 7. Byggerekkefølge og verifikasjon

**Byggerekkefølge (fase 4, én agent per hel del; maks ~2 samtidige):**
1. **Del 0** (2 kap) — eksamenskart + STK1110-bro. Etablerer notasjon, sjangerkatalog A–Q,
   kryssbok-regelen (klartekst til STK1110), R-utskrift-som-tekst-prinsippet.
2. **Del 1** (8 kap) — regresjon/modellvalg + drill 1.8. **Over DNA-taket (8 kap):** hvis delt,
   gi begge agentene HELE Del 1s kontrakter og flagg for konsistenssjekk (AIC/BIC-notasjon,
   parametertelling, bias–varians og R-utskrift-oppsett må være enhetlig). Etablerer de to
   universelle ferdighetene som Del 2–4 bygger på.
3. **Del 2** (6 kap) — klassifikasjon + drill 2.6.
4. **Del 3** (4 kap) — trær og ensembler + drill 3.4.
5. **Del 4** (4 kap) — uveiledet + drill 4.4.
6. **Del 5** (4 kap) — sjangerguide + øvingseksamener. Bygges av én agent som leser HELE
   skjelettet (må referere sjangre og resultater fra alle fire søyler).

**Egenvalidering per agent:** `json.load` alle nye filer; **kvotetelling** mot §5 (quiz per
kapittel = fasit — ikke overstyr); **forbudt-term-grep:** ingen kjørbare kodeblokker eller
Python/R-kjøring (`import`, `def `, `np.`, `<-`, `lm(`, `glm(`, `kmeans(`, `for _ in`,
` ```python `, ` ```r `) — R-utskrift skal være ren tekst-tabell, ikke kjørbar kode; grep for
`(verifiser` (og varianter) for oppfølging i fase 6.

**Sentral wiring (fase 5):** parse skjelettet → 28 kapitler + 4 prøvekapitler
(`stk2100-1-prove`, `stk2100-2-prove`, `stk2100-3-prove`, `stk2100-4-prove`, chapterNumber
`1.P/2.P/3.P/4.P`; Del 5-øvingseksamenene er allerede kapitler). `TextbookCourse` i
`textbook-courses-hoyskole.ts`; `sectionNames` fra §2 (Del 0–5). Registrer i `institusjoner.ts`
under **Universitetet i Oslo**, navn «STK2100 Maskinlæring og statistiske metoder for prediksjon
og klassifikasjon». Merge quiz-staging → `quiz-data-stk2100.ts`. Append `_registry.json`.

**Verifikasjon (fase 6–7):**
- **Kryssbok-lenker:** alle STK1110-referanser er KLARTEKST med `(→ stk1110-x-y)`; verifikator
  sjekker `_registry.json` — HVIS `stk1110-*` finnes, bytt til aktive lenker; ellers behold
  klartekst. R1/R2/S1/S2-lenker skal peke på eksisterende id-er.
- **Faktasjekk:** etterregn alle talleksempler; sjekk **parametertelling** i hvert AIC/BIC-
  eksempel (§4.2 straffer feil); verifiser at hver utledning (ridge/lasso, bias–varians,
  bagging-MSE, hatmatrise, LDA/QDA-grense) **viser alle ledd inkl. at kryssleddet faller bort**;
  verifiser at tolkningsoppgaver har **begrunnelse** (ikke mekanisk avlesning) og at
  klyngingskapitler eksplisitt sier **ingen CV**.
- **Symbol- og formelliste** finnes i hvert delkapittel (collapsible etter Forkunnskaper).
- **Kvoter må IKKE endres** (definition-telling før/etter; quiz-sum = 610, flashcards = 540).
- **Konsistens:** notasjon enhetlig på tvers av agentgrenser (særlig Del 1: AIC/BIC,
  frihetsgrader, $S$ vs. $H$).
- **Ingen kode:** grep mot forbudte kode-termer (R-utskrift som ren tekst-tabell).
- **Sluttsveip:** `npx tsc --noEmit` + `npm run build`; prod-server + curl på institusjonsside,
  bokforside og minst 3 kapitler (teori/drill/prøve) + quiz-/flashcard-rute (200 + innholdssjekk).

---

## 8. Kilder

- `docs/hoyskole-boker/stk2100/EKSAMENSANALYSE.md` — empirisk grunnlag (N = 8 ordinære lukkede
  sett 2017–2025 + prøveeksamen V22, alle med løsningsforslag; korona-hjemmeeksamener 2020/2021
  holdt utenfor frekvenstellingen).
- `docs/hoyskole-boker/DNA-regnefag.md` — primær arketype (teori/drill/øvingseksamen-DNA).
- `docs/hoyskole-boker/DNA-drofting.md` — lånt element for tolknings-/metodevalg-sjangeren
  (begrunnelsesplikt, modellbesvarelse-DNA i kap. 5.4).
- `docs/hoyskole-boker/README.md` — leserkrav (forkunnskaper, symbol-/formelliste, eksamensvinkel,
  typiske feil) + minimumskrav (≥500 quiz/flashcards, ≥4 prøver/tema).
- `docs/hoyskole-boker/PRODUKSJONSLOYPE.md` — fase 2-format (del-basert `number`, seksjonstitler,
  kvotesammendrag, prøvekvoter; ≥500 som gulv, ikke mål).
- `docs/hoyskole-boker/stk1110/SKJELETT.md` — strukturforbilde (samme institusjon, kjededelt
  oppgavetradisjon, R-utskrift-tolkning); forkunnskapsankeret (klartekst til STK1110 er live).
  Tiltenkte anker-id-er: `stk1110-0-2` (STK1100-bro), `stk1110-1-1`/`1-2`/`1-3` (estimator/ML/
  Fisher), `stk1110-3-x` (lineær regresjon på matriseform).
- **Pensumbøker (referert i fasitene, aldri sitert i lengde):** Hastie, Tibshirani & Friedman,
  *The Elements of Statistical Learning* (ESL); James et al., *An Introduction to Statistical
  Learning* (ISL).
