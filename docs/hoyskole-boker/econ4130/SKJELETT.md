# Bokskjelett: ECON4130 Statistics 2 — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (N = 7 ordinære høsteksamener H2015–H2021, alle uten
> sensorveiledning/fasit — del 4–5-utsagn er derfor `(utledet)` fra
> oppgavetekstenes hint-bokser, mens temamønsteret del 1–3 er sterkt belagt over
> alle 7 sett). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) med **lånt
> drøftingselement fra `DNA-drofting.md`** for tolknings-/modellvalg-sjangeren i
> regresjonsdelen og for de kvalitative begrunnelseskravene (homo-/heteroskedastisitet,
> «why is … consistent», regularitetsbrudd) — se §1. Kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.
>
> **Strukturforbilde:** `docs/hoyskole-boker/econ2130/SKJELETT.md` (Statistikk 1,
> samme institusjon — nærmeste regnefag-forbilde) og `stk2100/SKJELETT.md`
> (samme del-baserte `number`, søyle-balanse, drillkapittel per søyle,
> eksamenstreningsdel). Men **nivået er hevet**: der ECON2130 er «statistikk for
> samfunnsvitere med R» uten bevis, er ECON4130 **matematisk statistikk på
> masternivå** — utledningstung, med aktiv transformasjonsteknikk, MLE-maskineri,
> Fisher-informasjon, asymptotisk normalitet, pivot-baserte eksakte CI og mgf/
> gammafunksjon-manipulasjon. Progresjonen ECON2130 → ECON4130 speiler analysens
> §8 (samme regnefag-DNA, mye høyere matematisk tetthet).

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ4130` |
| Tittel | **ECON4130 Statistics 2** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (Økonomisk institutt) |
| Arketype | Regnefag (matematisk statistikk på masternivå) + lånt tolknings-/modellvalg-drøfting i regresjonsdelen |
| Antall kapitler | **31** (1 eksamenskart + 26 tema hvorav 4 drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 260 min ≈ 38 timer** |
| Quiz totalt | **560** (krav ≥500) |
| Flashcards totalt | **540** (krav ≥500) |

**Emnestatus (viktig — påvirker IKKE bygging):** ECON4130 er **nedlagt** ved UiO
(emnesiden viser «This course is discontinued»); siste avholdte eksamen var
**høst 2022**. Fordi emnet er avviklet vil pensum og oppgavetyper ikke endre seg
— arkivet H2015–H2021 pluss det kjente 2022-settet definerer et komplett,
«frosset» eksamensunivers. Boka bygges mot ECON4130s egen, siste form slik den
framstår i disse settene, som er påfallende konsistente. Ingen aktiv
etterfølger med samme pensum finnes (beslektede aktive emner ECON4160/ECON4137
dekker systemøkonometri/tidsrekker, ikke ECON4130s sannsynlighets- og
likelihood-teori) — boka overlapper derfor ikke med noen annen bygget bok, og
er verdifull som repetisjonsverktøy for studenter som skal ta igjen/bestå
gjenstående vurdering, og for beslektede metodeemner. **Bygging er derfor
berettiget.**

**Pitch (ett avsnitt):** ECON4130-eksamen har en usedvanlig stabil form: **3 timers
open-book skoleeksamen med nøyaktig to store oppgaver (Problem 1 + Problem 2),
hver delt i seksjoner A–F med romertalls-underpunkter (i, ii, iii)** — 100 %
stabilt over alle 7 sett. **Problem 1 er ALLTID ren sannsynlighets- og
estimeringsteori**: én/to random variables, utled fordeling og momenter,
transformer, finn mme og MLE, konstruer CI, test en parameter. **Problem 2
kommer i to varianter kandidaten ikke vet på forhånd**: *Variant R* (anvendt
multippel regresjon med Stata-output — dummy, interaksjon, ceteris paribus,
F-test, uteladt variabel via iterert forventning; H2015/16/19) eller *Variant D*
(videre fordelingsteori + MLE/goodness-of-fit — navngitt fordeling som Pareto/
Weibull, Pearson kji-kvadrat tilpasningstest, eksakt CI via pivot; H2017/18/20/
21). Fordi hjelpemidlene er *alt skriftlig materiale* gir formelgjengivelse null
uttelling — poenget er **utledning, korrekt forutsetningsbruk og tolkning**.
Oppgavene sier gjennomgående «Show that…», «Explain why…», «Give a reason» —
svaret ER utledningen, ikke tallet. Denne boka driller nettopp de garanterte
mønstrene: transformasjon av rv med Jacobi (7/7 sett), cdf/pdf-egenskaper (7/7),
mme+MLE (7/7), CI-konstruksjon (7/7, både approks-via-Slutsky og eksakt-via-
pivot), hypotesetest (7/7) og iterert forventning (6/7) — pluss de to Problem
2-variantene like tungt, siden kandidaten må mestre begge.

**To eksamenssjangre lever side om side (avgjørende for boka):**
- **(I) Utledning / regning for hånd** — den dominerende sjangeren: transformer
  en rv og finn fordelingen (cdf-metoden + Jacobi), utled mme OG MLE med
  tallverdier, regn E[X^r] via gammafunksjon/mgf, bygg et eksakt CI fra en
  pivot, sett opp og gjennomfør en Wald-test. Ren regnefag-DNA — hvert ledd må
  vises.
- **(II) Tolkning / modellvalg / kvalitativ begrunnelse** — særlig i Variant
  R: les Stata-utskrift og velg «most suitable model for studying the influence
  of X on Y», klassifiser homo-/heteroskedastisitet og begrunn, forklar hvorfor
  en estimator er konsistent, identifiser når standard MLE-asymptotikk IKKE
  gjelder (regularitetsbrudd), forklar HVORDAN Slutsky's lemma brukes. En
  **drøftingssjanger med begrunnelsesplikt** — herfra det lånte DNA-drøfting-
  elementet (README hybridregel).

Hver eksamen blander de to. **Boka må trene begge like hardt.**

**Kritiske notasjons- og fagregler (gjelder HELE boka):**
- **Engelsk fagterminologi beholdes** ved første forekomst i parentes (emnet
  undervises og eksamineres på engelsk): random variable (rv), iid,
  probability/cumulative distribution/moment generating function (pdf/cdf/mgf),
  maximum likelihood estimator (MLE), moment method estimator (mme), confidence
  interval (CI), standard error (SE), likelihood ratio (LR). Brødteksten er
  norsk bokmål; termene læres på begge språk fordi eksamensteksten er engelsk.
- **Parametriseringen varierer** — emnet bruker gamma via mgf
  $M(t) = \left(\frac{\lambda}{\lambda - t}\right)^{\alpha}$ (shape $\alpha$,
  rate $\lambda$); den sentrale identiteten er
  $E[V^r] = \frac{\Gamma(\alpha + r)}{\lambda^r\,\Gamma(\alpha)}$. Boka skal
  eksplisitt advare mot parametriserings-forvirring (rate vs. scale) i hvert
  kapittel som bruker gamma/eksponensial.
- Fordelinger med emnets notasjon: $X \sim \exp(\lambda)$, $\Gamma(\alpha,\lambda)$,
  $\text{Pareto}(b,\alpha)$, $\text{Weibull}(b,d)$, $N(\mu,\sigma^2)$ (variansen
  som andre argument), $\chi^2_r$, $\text{Bin}(n,p)$, multinomisk. $\Gamma(t)$ =
  gammafunksjonen.
- Estimatorer med hatt: $\hat{\theta}$, $\hat{\lambda}$; score $\ell'(\theta)$,
  log-likelihood $\ell(\theta)$, Fisher-informasjon $I(\theta)$ (per observasjon);
  asymptotikk $\sqrt{n I(\theta)}\,(\hat\theta - \theta) \to N(0,1)$.
- **Jacobi-determinanten ($|dg^{-1}/dy|$) er ALDRI valgfri** ved transformasjon
  av kontinuerlig rv — hvert transformasjonskapittel har en `warning` om at
  glemt Jacobi er den vanligste regnefeilen (analysens §5.3).
- **Bayesiansk inferens og bootstrapping** nevnes i emnebeskrivelsen, men opptrer
  IKKE som egne oppgaver i noe av de 7 settene — omtales kort i Del 0 som
  «utenfor eksamenskjernen», bygges ikke tungt på *(verifiser mot 2022-settet
  hvis det blir tilgjengelig)*. Ren tidsrekke-/systemøkonometri (VAR,
  kointegrasjon) hører til ECON4160 og utelates helt.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen: prerequisites, IKKE frekvens);
frekvensen styrer i stedet *omfanget*.

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Etablerer Problem 1/Problem 2-strukturen, Variant R vs. D, sjangerkatalogen A–L og temafrekvensene. |
| 1 | Fordelinger, transformasjon og momenter | 6 | **Fundamentet for Problem 1.** cdf/pdf-egenskaper + kvantilfunksjon **7/7 (åpner nesten alltid)**, transformasjon av rv m/ Jacobi **7/7 (strukturelt garantert)**, E[X^r] via gammafunksjon/mgf **6/7**, navngitte fordelinger **7/7** → nivå 1 «perfekt» → 5 teorikapitler + transformasjonsdrill. |
| 2 | Betingede fordelinger og iterert forventning | 4 | Iterert forventning **6/7**, regresjonsfunksjon + homo-/heteroskedastisitet **6/7**, kovarians/korrelasjon **5/7**, bivariat normal **2/7** (kunne/kjenne) → 3 teorikapitler + drill. Bærebjelke for både Problem 1J og Variant R. |
| 3 | Estimering, asymptotikk og inferens | 7 | **Hjertet i Problem 1.** mme **7/7**, MLE **6/7**, CI **7/7**, hypotesetest **7/7**, Fisher-info + asymptotisk normalitet **3/7 eksplisitt (brukt implisitt ellers)**, Slutsky **4/7 (eksplisitt krevd forklart)**, konsistens **5/7**, efficiency/Cramér–Rao + MSE **4/7** → nivå 1 «perfekt» → 6 teorikapitler + inferensdrill. |
| 4 | Variant D: navngitte fordelinger og goodness-of-fit | 4 | **Halvparten av Problem 2 (H2017/18/20/21).** Pearson kji-kvadrat tilpasningstest **3/7**, Pareto/Weibull-MLE med Stata-output, eksakt CI via $\chi^2$/pivot, simulering (inverse-transform) 2/7, LR-test 2/7 → egen del + drill (kandidaten vet ikke om R eller D kommer). |
| 5 | Variant R: multippel regresjon med Stata-output | 3 | **Den andre halvparten av Problem 2 (H2015/16/19).** OLS-tolkning m/ dummy+interaksjon **3/7**, F-test av nøstede modeller **3/7**, uteladt variabel via iterert forventning **3/7**, ceteris paribus i interaksjonsmodell → egen del + drill. |
| 6 | Eksamenstrening | 3 | Sjangerdrill (metodevalg: hvilken transformasjon/pivot/test) + 2 komplette øvingseksamener som speiler begge Problem 2-variantene (R-mal og D-mal). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Fordelinger, transformasjon og momenter |
| 2 | Betingede fordelinger og iterert forventning |
| 3 | Estimering, asymptotikk og inferens |
| 4 | Variant D: navngitte fordelinger og goodness-of-fit |
| 5 | Variant R: multippel regresjon med Stata-output |
| 6 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger sjangerkapitler i siste del. Her ligger tre av fire drillkapitler
   (1.6, 3.7, 4.4) INNE i temadelene sine, fordi sjangrene de driller
   (transformasjon m/ Jacobi, full inferens-kjede, goodness-of-fit) er 100 %-/
   halvparts-gjengangere som må sitte umiddelbart etter teorien — samme grep som
   econ2130/stk2100. Del 6 beholder metodevalg-drillen (5.-drill) og
   øvingseksamenene.
2. **Del 4 og Del 5 er to parallelle anvendelsesdeler** (Problem 2-variantene),
   ikke lineært avhengige av hverandre. Begge bygger på Del 1–3, men verken R
   forutsetter D eller omvendt. `prerequisites` settes DEL-basert til Del 3s
   sluttkapitler, ikke lineært fra Del 4 til Del 5.
3. **Del 5 (Variant R) låner drøftingselementer** fra DNA-drøfting (README
   hybridregel): «which model is most suitable», homo-/heteroskedastisitet-
   klassifisering og uteladt-variabel-resonnement testes som verbal begrunnelse
   med presise begreper — kapitlene 5.1–5.3 beholder regnefagets eksempel-/
   oppgavestruktur, men har momentbank-preg i tolkningspartiene.
4. **2 øvingseksamener, ikke 3**: fordi kandidaten møter nøyaktig én av to
   Problem 2-varianter, speiler øvingseksamen 1 «Problem 1 + Variant R»-malen og
   øvingseksamen 2 «Problem 1 + Variant D»-malen — begge fullstendige, slik at
   begge veier trenes helt ut.

**Kryssbok-lenker (forkunnskaper):** Grunnleggende sannsynlighetsregning, diskrete/
kontinuerlige fordelinger, forventning/varians og ett-utvalgs-inferens forutsettes
fra ECON2130 Statistikk 1 (og ekvivalent STK1100/STK1110). Lenk der det er
naturlig med `[tittel](/bok/econ2130/<chapterId>)` — men **verifiser at
kapittel-id-en finnes og er live før lenking** *(verifiser: econ2130/stk1110 har
status «skjelett», ikke nødvendigvis bygget ennå)*. Derivasjon, integrasjon og
kjerneregelen forutsettes fra R1/R2/kalkulus — lenk til S2/R2-bøkene der det er
naturlig *(verifiser id-ene)*. Lenk aldri til kapitler du ikke har verifisert.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen som gjengis i Del 0 (fra analysen §3):
A vis gyldig fordeling / finn cdf fra pdf · B transformer rv (finn fordeling til
g(X)) · C E[X^r]/momenter via gammafunksjon/mgf · D utled mme OG MLE med
tallverdier · E konstruer CI (approksimativt via Slutsky ELLER eksakt via pivot) ·
F hypotesetest og konkluder (Wald/z, p-verdi) · G Pearson kji-kvadrat
tilpasningstest · H tolk Stata OLS-output (dummy, interaksjon, ceteris paribus) ·
I F-test/LR-test av nøstet modell · J iterert forventning/kovarians for betinget
konstruert (X,Y) · K simuler ved inverse-transform · L estimatorsammenlikning
(bias, varians, MSE, efficiency).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON4130

- **id:** `econ4130-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, Problem 1/Problem 2-strukturen, de to Problem 2-variantene (R og D), sjangerkatalogen A–L, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 7 sett (H2015–H2021). Skal gjengi: (i) formen: **3-timers open-book skoleeksamen** (papir/PDF fram til ~2020, deretter digital i Inspera med innebygd kalkulator), «all written and printed resources» tillatt — derfor tester eksamen utledning og forutsetningsbruk, ikke pugg; **nøyaktig to oppgaver (Problem 1 + Problem 2), hver delt i seksjoner A–F med (i), (ii), (iii)**, omtrent likeverdige; (ii) at **Problem 1 ALLTID er ren sannsynlighets-/estimeringsteori** (mest forutsigbare del), mens **Problem 2 veksler**: Variant R (regresjon m/ Stata, 3/7) eller Variant D (fordelingsteori + MLE/goodness-of-fit, 4/7) — kandidaten vet ikke hvilken, må mestre begge; (iii) temafrekvens-tabellen (score/7): transformasjon 7/7, cdf/pdf-egenskaper 7/7, mme 7/7, CI 7/7, hypotesetest 7/7, navngitte fordelinger 7/7, MLE 6/7, E[X^r] via gammafunksjon 6/7, iterert forventning 6/7, regresjonsfunksjon/heteroskedastisitet 6/7, korrelasjon/kovarians 5/7, konsistens 5/7, Slutsky 4/7, MSE/efficiency 4/7, OLS-regresjon 3/7, F-test 3/7, Pearson χ² 3/7, Fisher-info/asymptotikk 3/7, LR-test 2/7, simulering 2/7, bivariat normal 2/7, ordensstatistikk 1/7, best lineær prediktor 1/7; (iv) at Bayes/bootstrap og tidsrekke-økonometri bevisst er utelatt; (v) sensorens utledede metaregler (fra hint-boksene, merket `(utledet)`): begrunn hvert steg — svaret er utledningen ikke tallet; forklar HVORDAN Slutsky brukes når du bruker det (ordrett gjentatt krav); sjekk regularitetsbetingelser før MLE-asymptotikk (H2019-fella); oppgi korrekt fordeling under H₀ og korrekt frihetsgrad (kategorier − 1 − estimerte parametere); teoremer hentes fra egne papirer — anvendelse, ikke reproduksjon; tolkning teller i regresjonsdelen; (vi) hva som skiller toppkandidatene: presis behandling av betinget vs. marginal, å transformere et CI korrekt for en monoton funksjon av parameteren.
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med frekvens og typisk vekt. Prognosen (frosset — emnet er nedlagt): Problem 1 = ren teori (transformasjon, momenter, mme+MLE, CI, test, ofte iterert forventning); Problem 2 = enten Variant R (Stata-regresjon, F-test, uteladt variabel) eller Variant D (Pareto/Weibull-MLE, Pearson χ², eksakt CI). Leseplan: Del 1 (transformasjon/momenter) + Del 3 (mme/MLE/CI/test) er «må perfekt» og dekker Problem 1 fullt; Del 2 (iterert forventning) er «må kunne» og er bro til begge Problem 2-varianter; Del 4 OG Del 5 må begge kunnes fordi Problem 2 er uforutsigbar. Tidsstrategi: 180 min, ca. 90 per problem.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «Problem 2 er enten regresjon eller fordelingsteori — sett opp en beredskapsplan for begge og et tidsbudsjett på 180 minutter».
- **Typiske feil:** Metafeilene: regne uten å begrunne (open book ⇒ metoden er poenget); nedprioritere én Problem 2-variant og bli tatt på feil fot; glemme å forklare Slutsky/regularitet der oppgaven eksplisitt ber om det; feil tidsfordeling mellom de to likeverdige problemene.
- **Quiz: 12 · Flashcards: 12** (frekvenser, vekter, metaregler, sjangerkatalog A–L)

---

### Del 1 — Fordelinger, transformasjon og momenter *(prioritet: PERFEKT)*

#### Kapittel 1.1: cdf, pdf og kvantilfunksjonen

- **id:** `econ4130-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Verifiser at en funksjon er en gyldig fordeling, gå mellom pdf og cdf ved integrasjon/derivasjon, og løs ut kvantilfunksjonen — ferdigheten som åpner Problem 1 i nesten hvert sett.
- **Eksamensbelegg:** Sjanger A står i **7/7 sett** og åpner nesten alltid Problem 1 (H2015 1A, H2016 1A, H2018 1A, H2019 1A/1B, H2021 1A). Kvantilfunksjonen eksplisitt i H2019. Prioritet: **perfekt**.
- **Innholdskontrakt:** cdf-egenskapene: $F$ ikke-avtakende, høyrekontinuerlig, $F(-\infty)=0$, $F(\infty)=1$; sammenhengen $f(x) = F'(x)$ og $F(x) = \int_{-\infty}^{x} f(t)\,dt$; hvordan verifisere at et gitt uttrykk er en gyldig pdf ($f \ge 0$, integrerer til 1) eller cdf (egenskapene over); kvantilfunksjonen $q_p$ definert ved $F(q_p) = p$ (løs ligningen); skisse av $F$/$f$ (beskriv grafen i ord — form, monotoni, grenser). Alt til bruk + de tre grepene som utledes aktivt (verifiser gyldighet, integrer pdf→cdf, løs ut kvantil). Ingen mgf ennå.
- **Oppgavesjangre:** A. Mønstereksempel: «La $f(x) = c\,x^{-3}$ for $x \ge 1$. Bestem $c$ slik at $f$ er en gyldig pdf, finn cdf-en $F$, og bestem medianen $q_{0{,}5}$.» (nyskrevne tall — ALDRI kopier arkivets Pareto-tall.)
- **Typiske feil:** Glemme å sjekke at pdf-en er ikke-negativ / integrerer til 1; forveksle pdf og cdf i skissen; regne kvantil ved å sette $f(q_p)=p$ i stedet for $F(q_p)=p$; glemme støtten (hvor $f>0$) i integralgrensene.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.2: Navngitte fordelinger som verktøykasse

- **id:** `econ4130-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4130-1-1`
- **kapitteltype:** teori
- **description:** Eksponensial, gamma, Pareto, Weibull, uniform, normal, χ² og binomisk — pdf/cdf, parametrisering og når de dukker opp, med gamma/eksponensial som arbeidshesten.
- **Eksamensbelegg:** Navngitte fordelinger brukes som verktøy i **7/7 sett**; gamma/eksponensial er «arbeidshesten», Pareto og Weibull er signaturmodeller (Pareto-inntektsmodellen SSB 1998 gjenbrukt H2017 og H2020 som forelesningseksempel). Prioritet: **perfekt** (fundamentet Del 1–5 hviler på).
- **Innholdskontrakt:** For hver fordeling: pdf, cdf (der lukket form finnes), støtte, parametrisering i emnets notasjon. $\exp(\lambda)$: $f(x)=\lambda e^{-\lambda x}$, $F(x)=1-e^{-\lambda x}$. $\Gamma(\alpha,\lambda)$ via mgf $M(t)=(\lambda/(\lambda-t))^\alpha$ (shape $\alpha$, rate $\lambda$ — **advar mot rate/scale-forveksling**). $\text{Pareto}(b,\alpha)$, $\text{Weibull}(b,d)$: pdf/cdf. $N(\mu,\sigma^2)$ (varians andre argument), $\chi^2_r$ (= $\Gamma(r/2, 1/2)$), $\text{Bin}(n,p)$, multinomisk (forhåndsvises til Del 4). Nøkkelfakta til bruk: sum av uavhengige $\exp(\lambda)$ er gamma; $\chi^2$ er spesialtilfelle av gamma. Ingen tunge utledninger her — dette er referansekapitlet; utledningene kommer i 1.3–1.5.
- **Oppgavesjangre:** Støttesjanger (ingen egen). Korte gjenkjennings-/parametriseringsoppgaver: «Gitt $M(t)=(3/(3-t))^2$ — hvilken fordeling, med hvilke parametere, og hva er $E(X)$?»
- **Typiske feil:** Rate/scale-forveksling i gamma/eksponensial; bruke $N(\mu,\sigma)$ (standardavvik) der emnet bruker $N(\mu,\sigma^2)$ (varians); blande Pareto- og Weibull-parametrene.
- **Quiz: 20 · Flashcards: 24**

#### Kapittel 1.3: Transformasjon av rv: cdf-metoden og Jacobi

- **id:** `econ4130-1-3` · **number:** 1.3 · **estimatedMinutes:** 65 · **prerequisites:** `econ4130-1-1`, `econ4130-1-2`
- **kapitteltype:** teori
- **description:** Finn fordelingen til $Y=g(X)$ når $g$ er monoton — cdf-metoden fulgt av Jacobi-transformen — kursets mest gjennomgående enkeltoppgave.
- **Eksamensbelegg:** Sjanger B forekommer i **alle 7 sett** — den mest gjennomgående enkeltoppgaven i emnet (Y=λX, X=−lnY, Z=100X, R=Y/X, U=X/m, cY for Weibull, Y=bV^{1/d}). Strukturelt garantert. Prioritet: **perfekt**.
- **Innholdskontrakt:** cdf-metoden: for monotont voksende $g$, $F_Y(y) = P(g(X)\le y) = P(X \le g^{-1}(y)) = F_X(g^{-1}(y))$, deriver for $f_Y$; for avtakende $g$ snus ulikheten. Jacobi-formelen $f_Y(y) = f_X(g^{-1}(y))\,\left|\frac{d}{dy}g^{-1}(y)\right|$ (utledes aktivt — «kunne utlede»). Standardresultatene å gjenkjenne: en transformasjon lander typisk på $\exp(1)$, gamma eller Weibull. Behandle skala-transformasjon ($Y=cX$), logaritmisk ($Y=-\ln X$) og potens ($Y=X^{1/d}$). Broen framover: samme teknikk transformerer et CI (Del 3) og gir kvantilfunksjonen for simulering (Del 4).
- **Oppgavesjangre:** B. Mønstereksempel: «La $X \sim \exp(\lambda)$ og $Y = e^{-X}$. Finn fordelingen (pdf og cdf) til $Y$, og vis at $Y$ er uniform på $(0,1)$.» (varier transformasjonen — ikke kopier arkivet.)
- **Typiske feil:** **Glemme Jacobi-determinanten** (sannsynligvis vanligste regnefeil i emnet); glemme å snu ulikheten når $g$ er avtakende; feil støtte for $Y$; bruke tetthetsmetoden uten å sjekke at $g$ er monoton på hele støtten.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 1.4: Momenter via gammafunksjonen og mgf

- **id:** `econ4130-1-4` · **number:** 1.4 · **estimatedMinutes:** 60 · **prerequisites:** `econ4130-1-2`
- **kapitteltype:** teori
- **description:** Regn $E[X^r]$, forventning og varians via gammafunksjon-identiteten og momentgenererende funksjon — standard-trikset bak nesten hver mme-oppgave.
- **Eksamensbelegg:** Sjanger C i **6/7 sett** (H2015/16/17/19/20/21) — gammafunksjon-identiteten $\Gamma(t)$ gjentas som oppgitt hjelperesultat; ofte et delsteg mot mme eller varians. Prioritet: **perfekt/kunne** (fundamentet for estimering i Del 3).
- **Innholdskontrakt:** Gammafunksjonen $\Gamma(t)=\int_0^\infty u^{t-1}e^{-u}\,du$, egenskapene $\Gamma(t+1)=t\,\Gamma(t)$, $\Gamma(n)=(n-1)!$; identiteten $E[V^r]=\frac{\Gamma(\alpha+r)}{\lambda^r\Gamma(\alpha)}$ for $V\sim\Gamma(\alpha,\lambda)$ (til bruk — oppgis på eksamen). mgf $M(t)=E[e^{tX}]$ og momentuthenting $E[X^r]=M^{(r)}(0)$; mgf for gamma og at sum av uavhengige gammaer (samme rate) er gamma (vis via produkt av mgf-er — «kunne utlede»). Fra momentene: $\text{Var}(X)=E[X^2]-E[X]^2$. Broen: $E(X)$ herfra gir momentligningen i mme (kap. 3.1).
- **Oppgavesjangre:** C. Mønstereksempel: «La $X\sim\Gamma(\alpha,\lambda)$. Bruk identiteten $E[X^r]=\Gamma(\alpha+r)/(\lambda^r\Gamma(\alpha))$ til å finne $E(X)$ og $\text{Var}(X)$, og bestem mgf-en til $Y=2\lambda X$.» (nyskrevne parametere.)
- **Typiske feil:** Feilbruk av $\Gamma$-identiteten (feil argument $\alpha+r$); glemme $\lambda^r$ i nevneren; regne $E[X^2]$ som $E[X]^2$ i variansen; derivere mgf på feil punkt ($t\neq 0$).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.5: Korrelasjon, kovarians og kovariansmatrise

- **id:** `econ4130-1-5` · **number:** 1.5 · **estimatedMinutes:** 45 · **prerequisites:** `econ4130-1-4`
- **kapitteltype:** teori
- **description:** Kovarians, korrelasjon og kovariansmatrisen — regnereglene som bærer både de teoretiske (X,Y)-oppgavene og regresjonsdelen.
- **Eksamensbelegg:** Sjanger-element i **5/7 sett** (corr(X,Y), kovariansmatrise, $\text{cov}(W+c)=\text{cov}(W)$). Prioritet: **kunne**. Bro til iterert-forventning-delen (Del 2) og til regresjonens standardfeil (Del 5).
- **Innholdskontrakt:** $\text{Cov}(X,Y)=E[XY]-E[X]E[Y]$; $\text{corr}(X,Y)=\text{Cov}(X,Y)/(\sigma_X\sigma_Y)\in[-1,1]$; bilineæritet $\text{Cov}(aX+b,cY+d)=ac\,\text{Cov}(X,Y)$ og translasjonsinvarians $\text{cov}(W+c)=\text{cov}(W)$; $\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)+2\text{Cov}(X,Y)$; kovariansmatrisen $\Sigma$ for en vektor (symmetrisk, positiv semidefinitt — til bruk); uavhengighet $\Rightarrow \text{Cov}=0$ (men ikke omvendt). Utled bilineæritetsregelen aktivt (3–4 linjer).
- **Oppgavesjangre:** Støttesjanger til J. Mønstereksempel: «Gitt $\text{Var}(X)=4$, $\text{Var}(Y)=9$, $\text{Cov}(X,Y)=3$. Finn $\text{corr}(X,Y)$ og $\text{Var}(2X-Y)$.»
- **Typiske feil:** Glemme $2\text{Cov}$-leddet i $\text{Var}(X+Y)$; anta $\text{Cov}=0 \Rightarrow$ uavhengighet (galt); tegnfeil i bilineæritet; blande korrelasjon og kovarians (enhet/skala).
- **Quiz: 15 · Flashcards: 16**

#### Kapittel 1.6: Drill: transformasjon og fordelingsutledning

- **id:** `econ4130-1-6` · **number:** 1.6 · **estimatedMinutes:** 80 · **prerequisites:** `econ4130-1-3`, `econ4130-1-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på Problem 1-åpningen: fra oppgitt pdf/cdf til transformert fordeling, momenter og kvantil — i ett strekk, slik oppgavene faktisk bygger.
- **Eksamensbelegg:** Sjanger A+B+C samlet (7/7). Problem 1 åpner nesten alltid med denne kjeden: vis gyldig fordeling → transformer → finn momenter. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) verifiser at oppgitt $f$/$F$ er gyldig; 2) identifiser den navngitte fordelingen; 3) for $Y=g(X)$: velg cdf-metoden eller Jacobi, sjekk monotoni og støtte; 4) deriver/transformer, oppgi $f_Y$ med støtte; 5) gjenkjenn resultatfordelingen; 6) hent momenter via $\Gamma$-identitet/mgf; 7) finn kvantil ved behov. Gjennomregnet eksamenscase med sensor-margnotater (poengene sitter i Jacobi, korrekt støtte og gjenkjenning — ikke i sluttallet). 8–12 oppgaver på eksamensnivå: skala/log/potens-transformasjoner, minst én der resultatet er gamma, én Weibull, én der man må transformere tilbake til en kjent fordeling.
- **Oppgavesjangre:** A+B+C. Mønstereksempel: «La $X\sim\exp(\lambda)$ og $Y=X^{1/d}$ ($d>0$). Vis at $Y\sim\text{Weibull}$, finn parametrene, og bestem $E(Y)$ via $\Gamma$-identiteten.»
- **Typiske feil:** Hele §5-repertoaret for Del 1: glemt Jacobi, feil støtte, feil $\Gamma$-argument, feil kvantilligning, rate/scale-forveksling.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (se §4).

---

### Del 2 — Betingede fordelinger og iterert forventning *(prioritet: KUNNE)*

#### Kapittel 2.1: Simultan- og betingede fordelinger

- **id:** `econ4130-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4130-1-2`
- **kapitteltype:** teori
- **description:** Simultan pdf, marginaler og betinget fordeling $Y\mid X=x$ — byggeklossene for iterert forventning og regresjonsfunksjonen.
- **Eksamensbelegg:** Grunnlag for sjanger J (**6/7 sett** for iterert forventning); simultan pdf/betinget konstruksjon i H2017/18/20/21. Prioritet: **kunne**.
- **Innholdskontrakt:** Simultan pdf $f_{X,Y}(x,y)$; marginaler ved integrasjon over den andre variabelen; betinget pdf $f_{Y\mid X}(y\mid x)=f_{X,Y}(x,y)/f_X(x)$; uavhengighet $\Leftrightarrow f_{X,Y}=f_X f_Y$; typisk konstruksjon på eksamen: gitt $X$-fordeling + betinget $Y\mid x$ (f.eks. $X$ uniform, $Y\mid x \sim \exp$; eller $X\sim\exp$, $Y\mid x\sim\Gamma$). Vis hvordan simultan bygges fra marginal × betinget. Utled marginal fra simultan aktivt.
- **Oppgavesjangre:** Støtte til J. Mønstereksempel: «La $X\sim U(0,1)$ og $Y\mid X=x \sim \exp(1/x)$. Skriv opp simultan pdf og finn marginal pdf til $Y$.»
- **Typiske feil:** Feil integralgrenser over støtten; forveksle betinget og simultan tetthet; glemme å normalisere den betingede fordelingen; anta uavhengighet uten sjekk.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.2: Iterert forventning og betinget varians

- **id:** `econ4130-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ4130-2-1`, `econ4130-1-5`
- **kapitteltype:** teori
- **description:** $E(Y)=E(E(Y\mid X))$, $E(XY)=E(X\cdot E(Y\mid X))$ og lov om total varians — grunnverktøyet for både konstruerte (X,Y) og uteladt-variabel-resonnement.
- **Eksamensbelegg:** Sjanger J i **6/7 sett** — grunnverktøy for regresjonsfunksjon og kovarians; også nøkkelen til uteladt-variabel-koblingen i Variant R (kap. 5.3). Prioritet: **kunne** (nær perfekt — svært hyppig).
- **Innholdskontrakt:** Loven om total forventning $E(Y)=E[E(Y\mid X)]$; $E(XY)=E[X\cdot E(Y\mid X)]$; loven om total varians $\text{Var}(Y)=E[\text{Var}(Y\mid X)]+\text{Var}(E(Y\mid X))$; $\text{Cov}(X,Y)$ via $E(XY)-E(X)E(Y)$ med iterert forventning. Utled $E(Y)=E[E(Y\mid X)]$ og total-varians-formelen aktivt («kunne utlede»). Anvend på den konstruerte (X,Y) fra 2.1 til å finne $E(Y)$, $\text{Var}(Y)$, $\text{Cov}(X,Y)$, $\text{corr}(X,Y)$.
- **Oppgavesjangre:** J. Mønstereksempel: «For $X\sim U(0,1)$, $Y\mid X=x\sim\exp(1/x)$: finn $E(Y)$, $\text{Var}(Y)$ og $\text{Cov}(X,Y)$ med iterert forventning.» (varier fordelingene.)
- **Typiske feil:** **Forveksle betinget og marginal varians/forventning** (bruke $\text{Var}(Y\mid x)$ der total-varians-formelen trengs); glemme $\text{Var}(E(Y\mid X))$-leddet; regne $E(XY)$ som $E(X)E(Y)$ ved avhengighet; feil rekkefølge på de iterte forventningene.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 2.3: Regresjonsfunksjon og heteroskedastisitet

- **id:** `econ4130-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ4130-2-2`
- **kapitteltype:** teori
- **description:** Regresjonsfunksjonen $E(Y\mid x)$ og klassifisering av $\text{Var}(Y\mid x)$ som homo- eller heteroskedastisk — den teoretiske broen til regresjonsdelen.
- **Eksamensbelegg:** Sjanger-element i **6/7 sett** — teoretisk (H2018/20/21) og anvendt (H2015/16/19). Klassifisering av homo-/heteroskedastisitet er et fast kvalitativt begrunnelseskrav (lånt drøftingselement). Prioritet: **kunne**.
- **Innholdskontrakt:** Regresjonsfunksjonen $m(x)=E(Y\mid X=x)$ som funksjon av $x$; betinget varians $v(x)=\text{Var}(Y\mid X=x)$; **homoskedastisitet** ($v(x)$ konstant i $x$) vs. **heteroskedastisitet** ($v(x)$ avhenger av $x$) — klassifiseringen krever eksplisitt begrunnelse (herfra drøftingselementet); regresjonsfunksjonen som best mulig prediktor i MSE-forstand (forhåndsvises, fullt i kap. 3.6). Anvend på 2.1–2.2-konstruksjonene: regn $m(x)$ og $v(x)$, klassifiser.
- **Oppgavesjangre:** J (teoretisk variant). Mønstereksempel: «For $Y\mid X=x\sim\exp(1/x)$: finn regresjonsfunksjonen $E(Y\mid x)$ og den betingede variansen, og avgjør med begrunnelse om modellen er homo- eller heteroskedastisk.»
- **Typiske feil:** Kalle en modell homoskedastisk uten å sjekke om $v(x)$ faktisk avhenger av $x$; forveksle $m(x)$ og $v(x)$; glemme begrunnelsen (sensor krever den kvalitative forklaringen, ikke bare svaret).
- **Quiz: 15 · Flashcards: 14**

#### Kapittel 2.4: Bivariat normalfordeling *(prioritet: KJENNE)*

- **id:** `econ4130-2-4` · **number:** 2.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ4130-2-2`
- **kapitteltype:** teori
- **description:** Den bivariate normalfordelingen — marginal via mgf, betinget er normal, og motbeviset for at «normal marginal + normal betinget» IKKE alltid gir binormalitet.
- **Eksamensbelegg:** Sjanger-element i **2/7 sett** (H2017 E: marginal via mgf, betinget normal; H2018: vis at (X,Y) IKKE er binormal). Prioritet: **kjenne** (differensierer mot A).
- **Innholdskontrakt:** Bivariat normal $(X,Y)$: parametrene $\mu_X,\mu_Y,\sigma_X^2,\sigma_Y^2,\rho$; egenskapene til bruk — marginaler er normale, betinget $Y\mid X=x$ er normal med lineær forventning og konstant varians (homoskedastisk); marginal hentet via mgf. **Motbeviset** (H2018-typen): et eksempel der begge marginaler er normale og betinget er normal, men fellesfordelingen likevel ikke er binormal — vis hvorfor (nivå 3, «bør kjenne til», plasseres til slutt).
- **Oppgavesjangre:** J (binormal-variant). Mønstereksempel: «For binormal $(X,Y)$ med $\rho=0{,}5$: finn den betingede fordelingen $Y\mid X=x$ og forklar hvorfor den er homoskedastisk.»
- **Typiske feil:** Anta at normale marginaler ⇒ binormalitet (galt — kjernen i motbeviset); feil betinget varians (glemme $(1-\rho^2)$-faktoren); blande $\rho$ og $\text{Cov}$.
- **Quiz: 12 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (se §4).

---

### Del 3 — Estimering, asymptotikk og inferens *(prioritet: PERFEKT)*

#### Kapittel 3.1: Momentmetoden (mme)

- **id:** `econ4130-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ4130-1-4`
- **kapitteltype:** teori
- **description:** Sett teoretisk moment lik empirisk moment og løs — den ene av eksamens to garanterte estimatorer, alltid med tallverdier.
- **Eksamensbelegg:** Sjanger D (mme-delen) i **7/7 sett** — fast innslag, ofte sammenliknet med MLE. Prioritet: **perfekt**.
- **Innholdskontrakt:** Momentmetoden: sett $E(X)=\bar{X}$ (eller høyere moment ved behov) og løs for parameteren; for gamma/Pareto/Weibull bruk $E(X)$ fra $\Gamma$-identiteten (kap. 1.4). Regn tallverdien fra oppgitte summer ($\sum x_i$, $\bar{x}$). Konsistensargument: mme er konsistent fordi $\bar{X}\to E(X)$ (store talls lov) + kontinuerlig avbildning (forhåndsvises, fullt i 3.5). Utled momentligningen aktivt for minst én fordeling.
- **Oppgavesjangre:** D (mme-del). Mønstereksempel: «$X_1,\dots,X_n$ iid $\exp(\lambda)$, $\bar{x}=2{,}5$, $n=40$. Finn momentestimatoren $\hat{\lambda}_{mme}$ og regn ut estimatet.» (nyskrevne summer.)
- **Typiske feil:** Løse momentligningen feil vei (invertere $E(X)=1/\lambda$); bruke feil moment; blande populasjonsmoment og utvalgsmoment; oppgi estimator uten tallverdi når oppgaven ber om begge.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.2: Maximum likelihood (MLE): utled estimatoren

- **id:** `econ4130-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `econ4130-3-1`
- **kapitteltype:** teori
- **description:** Log-likelihood, score og likelihoodligningen — den andre garanterte estimatoren, utledet fra bunnen med tallverdier.
- **Eksamensbelegg:** Sjanger D (MLE-delen) i **6/7 sett** — utled estimatoren, regn ut. H2019 er «MLE bryter sammen»-varianten (regularitetsbrudd, behandles i 3.4). Prioritet: **perfekt**.
- **Innholdskontrakt:** Likelihood $L(\theta)=\prod f(x_i;\theta)$; log-likelihood $\ell(\theta)=\sum\ln f(x_i;\theta)$; score $\ell'(\theta)$; likelihoodligningen $\ell'(\theta)=0$; sjekk at det er et maksimum ($\ell''<0$). Regn tallverdi fra oppgitte summer ($\sum x_i$, $\sum\ln x_i$). Sammenlign MLE og mme (sammenfaller for noen fordelinger, ikke andre). Utled MLE aktivt for eksponensial, gamma (én parameter) og Pareto. Invarians: MLE for $g(\theta)$ er $g(\hat\theta)$ (til bruk).
- **Oppgavesjangre:** D (MLE-del). Mønstereksempel: «$X_1,\dots,X_n$ iid $\text{Pareto}(b,\alpha)$ med kjent $b$. Utled MLE $\hat\alpha$, og regn estimatet fra $\sum\ln(x_i/b)=18{,}2$, $n=30$.»
- **Typiske feil:** Derivere likelihood i stedet for log-likelihood (tyngre, feilutsatt); glemme å sjekke andreordensbetingelsen; regnefeil i $\sum\ln x_i$; bruke MLE-invarians feil.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Fisher-informasjon og asymptotisk normalitet av MLE

- **id:** `econ4130-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4130-3-2`
- **kapitteltype:** teori
- **description:** Fisher-informasjon $I(\theta)$ og resultatet $\sqrt{nI(\theta)}(\hat\theta-\theta)\to N(0,1)$ — motoren bak approksimative CI og Wald-test.
- **Eksamensbelegg:** Sjanger-element eksplisitt i **3/7 sett** (H2015/18) og brukt implisitt ellers (grunnlag for de approksimative CI-ene i 4/7). Prioritet: **kunne** (nær perfekt — bærer CI/test-apparatet).
- **Innholdskontrakt:** Fisher-informasjon per observasjon $I(\theta)=-E[\ell''_1(\theta)]=E[(\ell'_1(\theta))^2]$; samlet informasjon $nI(\theta)$; asymptotisk normalitet $\sqrt{nI(\theta)}\,(\hat\theta-\theta)\to N(0,1)$, altså $\hat\theta \approx N(\theta, 1/(nI(\theta)))$ (til bruk — oppgis, men kandidaten må kunne anvende); asymptotisk varians $1/(nI(\theta))$ og standardfeil $\text{SE}(\hat\theta)=1/\sqrt{nI(\hat\theta)}$. Utled $I(\theta)$ for eksponensial/Pareto aktivt. **Regularitetsforbehold** (utdypes i 3.4): resultatet gjelder KUN når støtten ikke avhenger av $\theta$.
- **Oppgavesjangre:** E-forberedelse. Mønstereksempel: «For $X\sim\exp(\lambda)$: finn Fisher-informasjonen $I(\lambda)$ og den asymptotiske variansen til MLE $\hat\lambda$.»
- **Typiske feil:** Glemme fortegnet i $I(\theta)=-E[\ell'']$; regne $I$ for hele utvalget der oppgaven vil ha per-observasjon (eller omvendt); bruke asymptotikken uten å sjekke regularitet (H2019-fella).
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 3.4: Konsistens, forventningsrett og når MLE bryter sammen

- **id:** `econ4130-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ4130-3-3`
- **kapitteltype:** teori
- **description:** Konsistens- og forventningsrett-argumenter, og den kvalitative ferdigheten sensor tester: å se når standard MLE-asymptotikk IKKE gjelder.
- **Eksamensbelegg:** Konsistensargument i **5/7 sett** («why is … consistent?»); regularitetsbrudd er helt sentralt i H2019 (støtten avhenger av parameteren → MLE er ikke asymptotisk normal). Prioritet: **kunne** (regularitetsforståelsen differensierer mot A).
- **Innholdskontrakt:** Forventningsrett estimator $E(\hat\theta)=\theta$; konsistens $\hat\theta \xrightarrow{P}\theta$; standardargumentet for mme (store talls lov + kontinuerlig avbildning) og for MLE (under regularitet). **Regularitetsbetingelsene** (kvalitativt): støtten uavhengig av $\theta$, differensierbarhet, informasjon endelig — når de svikter (H2019: $X\sim U(0,\theta)$, MLE $=\max X_i$), er MLE hverken forventningsrett eller asymptotisk normal, og ordensstatistikk-teori (kap. 4.3-forbindelse) overtar. Ordensstatistikk (max/min) som estimator kort (nivå 3, 1/7). Denne kvalitative dommen er en drøftingsferdighet — begrunn.
- **Oppgavesjangre:** L (delvis) + regularitetsdrøfting. Mønstereksempel: «$X_1,\dots,X_n$ iid $U(0,\theta)$. Finn MLE, forklar hvorfor standard asymptotisk normalitet IKKE gjelder her, og hvorfor estimatoren likevel er konsistent.»
- **Typiske feil:** **Anvende standard MLE-asymptotikk der regularitet svikter** (H2019-fella); forveksle forventningsrett og konsistent; hevde konsistens uten argument; overse at $\max X_i$ er skjev nedover.
- **Quiz: 15 · Flashcards: 16**

#### Kapittel 3.5: Konfidensintervaller: approksimativt via Slutsky og eksakt via pivot

- **id:** `econ4130-3-5` · **number:** 3.5 · **estimatedMinutes:** 70 · **prerequisites:** `econ4130-3-3`, `econ4130-1-3`
- **kapitteltype:** teori
- **description:** De to CI-metodene eksamen krever — asymptotisk normalitet + Slutsky, og en eksakt pivot med kjent fordeling — pluss å transformere et CI for en monoton funksjon av parameteren.
- **Eksamensbelegg:** Sjanger E i **7/7 sett** — begge undervarianter forekommer. **Approksimativt** (H2015/16/18/21): asymptotisk normalitet + Fisher-info, med **Slutsky's lemma** for å bytte $\theta$ med $\hat\theta$ i variansen — oppgaven ber eksplisitt om at du forklarer HVORDAN Slutsky brukes (4/7). **Eksakt** (H2017: $n\hat\theta/\theta\sim\chi^2_n$; H2020: $2\lambda Y\sim\chi^2_{2n}$; H2019: ordensstatistikk). Prioritet: **perfekt**.
- **Innholdskontrakt:** Approksimativt CI: $\hat\theta \pm z_{\alpha/2}\,\text{SE}(\hat\theta)$ med $\text{SE}=1/\sqrt{nI(\hat\theta)}$; **Slutsky's lemma** — bytte den ukjente $\theta$ med den konsistente $\hat\theta$ i variansen bevarer den asymptotiske fordelingen (forklar mekanismen eksplisitt, ikke bare bruk den). Eksakt CI: finn en **pivot** (funksjon av data og parameter med parameteruavhengig fordeling, f.eks. $2\lambda\sum X_i\sim\chi^2_{2n}$), invertér sannsynlighetsutsagnet til et intervall. **Transformasjon av CI**: for en monoton $h(\theta)$, transformer endepunktene (snu ved avtakende $h$) — kap. 1.3-teknikken. Utled minst ett eksakt CI aktivt.
- **Oppgavesjangre:** E. Mønstereksempel: «$X_1,\dots,X_n$ iid $\exp(\lambda)$. Vis at $2\lambda\sum X_i\sim\chi^2_{2n}$, og bruk det til å konstruere et eksakt 95 %-CI for $\lambda$. Transformer det til et CI for forventningen $1/\lambda$.»
- **Typiske feil:** **Ikke forklare Slutsky** når man bytter $\theta\to\hat\theta$; ikke transformere CI-et korrekt for en monoton funksjon (bytte endepunkter når $h$ er avtakende); bruke normal-CI der en eksakt pivot kreves; feil kvantil ($z$ vs. $\chi^2$).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.6: Hypotesetest, estimatorsammenlikning og best lineær prediktor

- **id:** `econ4130-3-6` · **number:** 3.6 · **estimatedMinutes:** 65 · **prerequisites:** `econ4130-3-5`
- **kapitteltype:** teori
- **description:** Wald/z-testen med p-verdi, sammenlikning av estimatorer via bias–varians/MSE og Cramér–Rao, og den beste lineære prediktoren — resten av Problem 1s inferensapparat.
- **Eksamensbelegg:** Hypotesetest (sjanger F) i **7/7 sett**; MSE/efficiency (sjanger L) i **4/7** (H2016/17/19/20/21); best lineær prediktor i H2021 (1/7, kjenne). Prioritet: **perfekt** (test) + **kunne** (MSE/efficiency) + **kjenne** (prediktor).
- **Innholdskontrakt:** Wald/z-test: $H_0:\theta=\theta_0$ vs. $H_1$, teststørrelse $Z=(\hat\theta-\theta_0)/\text{SE}$, p-verdi via $\Phi$, konklusjon på oppgitt signifikansnivå; ensidig vs. tosidig p-verdi; utnytte et CI til å svare på en test. Estimatorsammenlikning: bias, varians, **MSE $=\text{Var}+\text{bias}^2$**, sammenlign to estimatorer; **Cramér–Rao** nedre grense ($\text{Var}(\hat\theta)\ge 1/(nI(\theta))$) og «minimum-varians blant alle forventningsrette» (til bruk); forventningsrett modifisering av en skjev estimator (H2020-typen). Best lineær prediktor $a+bX$ og at MSE minimeres av regresjonsledningen (nivå 3, kort). Utled teststørrelsen og MSE-dekomponeringen aktivt.
- **Oppgavesjangre:** F + L. Mønstereksempel: «$\hat\lambda=0{,}42$, $\text{SE}=0{,}08$. Test $H_0:\lambda=0{,}5$ mot $H_1:\lambda\neq 0{,}5$ på 5 %-nivå, og oppgi p-verdien. Sammenlign deretter to forventningsrette estimatorer via MSE.»
- **Typiske feil:** **Regne p-verdi énhalet der testen er tosidig** (eller omvendt); glemme å kvadrere bias i MSE; bruke Cramér–Rao på skjeve estimatorer; ikke konkludere i ord.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 3.7: Drill: hele inferens-kjeden mme → MLE → CI → test

- **id:** `econ4130-3-7` · **number:** 3.7 · **estimatedMinutes:** 85 · **prerequisites:** `econ4130-3-5`, `econ4130-3-6`
- **kapitteltype:** drill
- **description:** Sjangerdrill på Problem 1s inferenshale: fra fordelingsmodell til mme, MLE, Fisher-info, CI og test i én sammenhengende kjede, slik oppgavene faktisk stables.
- **Eksamensbelegg:** Sjanger D+E+F samlet (7/7). Problem 1 avslutter nesten alltid med denne kjeden. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) skriv opp modellen og likelihood; 2) mme via momentligning; 3) MLE via likelihoodligning + andreordenssjekk; 4) Fisher-info og asymptotisk varians; 5) velg CI-metode (approksimativ-Slutsky eller eksakt-pivot) og bygg intervallet; 6) transformer CI ved behov; 7) sett opp og gjennomfør Wald-testen med p-verdi; 8) konkluder i ord + drøft konsistens. Gjennomregnet eksamenscase med sensor-margnotater (poengene: Slutsky-forklaringen, korrekt pivot-fordeling, ensidig/tosidig p-verdi). 8–12 oppgaver på eksamensnivå over eksponensial, gamma, Pareto — minst én med regularitetsbrudd.
- **Oppgavesjangre:** D+E+F. Mønstereksempel: «$X_1,\dots,X_n$ iid $\exp(\lambda)$, $\bar{x}=2{,}0$, $n=50$. Finn mme og MLE, Fisher-info, et approksimativt 95 %-CI (forklar Slutsky), og test $H_0:\lambda=0{,}5$.»
- **Typiske feil:** Hele §5-repertoaret for Del 3: glemt Slutsky-forklaring, feil pivot-fordeling, énhalet/tohalet p-verdifeil, regularitetsbrudd oversett, konsistens uten argument.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (se §4).

---

### Del 4 — Variant D: navngitte fordelinger og goodness-of-fit *(prioritet: KUNNE)*

#### Kapittel 4.1: Pareto- og Weibull-modeller: MLE i praksis

- **id:** `econ4130-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ4130-3-2`
- **kapitteltype:** teori
- **description:** Signaturmodellene Pareto (inntekt) og Weibull (levetid) — MLE for hånd og fra Stata-MLE-output, med tolkning av utskriften.
- **Eksamensbelegg:** Definerer Variant D (Problem 2 i H2017/18/20/21). Pareto-inntektsmodellen (SSB 1998) er et gjennomgående forelesningseksempel. MLE fra Stata-MLE-output i H2017/21. Prioritet: **kunne** (halvparten av Problem 2 — må kunnes fordi varianten er uforutsigbar).
- **Innholdskontrakt:** Pareto$(b,\alpha)$: pdf, cdf, tolkning ($\alpha$ = tunghalethet, inntektsulikhet); MLE $\hat\alpha=n/\sum\ln(x_i/b)$ (utled). Weibull$(b,d)$: pdf, cdf, MLE (numerisk for $d$ — les fra Stata-output). Lese en Stata-MLE-utskrift: koeffisient, SE, log-likelihood, konvergens; oversette utskriftens parametrisering til emnets. Tolke $\hat\alpha$/$\hat{d}$ i kontekst. Broen: MLE-en her mates inn i goodness-of-fit (4.2) og eksakt CI (4.3).
- **Oppgavesjangre:** D + utskriftlesing. Mønstereksempel: «En Stata-MLE-kjøring på $n=2361$ inntekter (Pareto, $b=250\,000$) gir $\hat\alpha=2{,}31$ (SE $0{,}05$). Tolk $\hat\alpha$, og forklar hva log-likelihood-verdien brukes til.» (nyskrevne tall.)
- **Typiske feil:** Rate/scale-/parametriserings-forveksling mellom Stata og emnets notasjon; tolke $\hat\alpha$ feil vei (stor $\alpha$ = mindre tung hale); glemme kjent $b$ i MLE-formelen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.2: Pearson kji-kvadrat tilpasningstest

- **id:** `econ4130-4-2` · **number:** 4.2 · **estimatedMinutes:** 65 · **prerequisites:** `econ4130-4-1`, `econ4130-3-6`
- **kapitteltype:** teori
- **description:** Grupper data, regn forventede frekvenser fra modellens cdf, og test tilpasningen med $\sum(O-E)^2/E$ — med den kritiske frihetsgrad-regelen sensor trekker for.
- **Eksamensbelegg:** Sjanger G i **3/7 sett** (H2018/20/21) — definerer del av Variant D, inkluderer ofte «fyll inn manglende celle»-delspørsmål. Prioritet: **kunne**.
- **Innholdskontrakt:** Grupper data i $k$ intervaller; forventede frekvenser $E_j=n\,p_j$ under $H_0$ ($p_j$ fra modellens cdf: $p_j=F(a_{j})-F(a_{j-1})$); teststørrelse $\sum_j (O_j-E_j)^2/E_j$; **frihetsgrader $=k-1-(\text{antall estimerte parametere})$** (kritisk — sensor trekker for feil df); sammenlign med $\chi^2$-kvantil, konkluder. «Fyll inn manglende celle»-varianten (bruk at $\sum O_j=\sum E_j=n$). Utled forventede frekvenser fra cdf aktivt.
- **Oppgavesjangre:** G. Mønstereksempel: «Data er gruppert i 5 intervaller; en Pareto-modell med 1 estimert parameter gir forventede frekvenser $E_j$. Regn teststørrelsen og oppgi korrekt frihetsgrad. Test tilpasningen på 5 %-nivå.» (nyskrevne frekvenser.)
- **Typiske feil:** **Feil frihetsgrader** — glemme å trekke fra estimerte parametere; **bruke feil fordeling under $H_0$** (standard normal der $\chi^2$ gjelder); regne $E_j$ fra pdf i stedet for cdf-differanse; glemme at cellene må summere til $n$.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.3: Eksakt CI via pivot, LR-test og simulering

- **id:** `econ4130-4-3` · **number:** 4.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ4130-3-5`, `econ4130-4-1`
- **kapitteltype:** teori
- **description:** Variant D-inferensen: eksakt CI via en χ²-/ordensstatistikk-pivot, likelihood-ratio-test av nøstede fordelinger, og simulering ved inverse-transform.
- **Eksamensbelegg:** Eksakt CI via pivot i Variant D (H2017 $n\hat\theta/\theta\sim\chi^2_n$, H2020 $2\lambda Y\sim\chi^2_{2n}$); LR-test i **2/7** (H2017 eksponensiell vs. gamma, H2019 df-drøfting); simulering (inverse-transform) i **2/7** (H2018/20). Prioritet: **kunne** (CI/LR) + **kjenne** (simulering).
- **Innholdskontrakt:** Eksakt CI via pivot (gjentar 3.5-teknikken i Variant D-kontekst — $2\lambda\sum X_i\sim\chi^2_{2n}$, ordensstatistikk-pivot); **LR-test** $\text{LR}=2(\ell_\text{full}-\ell_\text{red})\sim\chi^2_q$ under $H_0$ (nøstede modeller, f.eks. eksponensial som spesialtilfelle av gamma) — df $=$ antall restriksjoner; **inverse-transform simulering**: gitt uniforme trekk $U$, transformer via kvantilfunksjonen $X=F^{-1}(U)$ (krever kvantilfunksjonen fra kap. 1.1). Kort om transformasjon av $(X,Y)$-trekk. Utled LR-teststørrelsen aktivt.
- **Oppgavesjangre:** E + I + K. Mønstereksempel: «Test $H_0$: eksponensial mot $H_1$: gamma via en LR-test — sett opp teststørrelsen, oppgi frihetsgraden, og forklar hvordan du simulerer 5 Pareto-observasjoner fra uniforme trekk.»
- **Typiske feil:** Feil df i LR-test (feil antall restriksjoner); bruke feil pivot-fordeling; glemme at inverse-transform krever kvantilfunksjonen (invertere cdf feil); bruke χ²-tabell med feil frihetsgrad.
- **Quiz: 15 · Flashcards: 16**

#### Kapittel 4.4: Drill: Variant D-oppgaven

- **id:** `econ4130-4-4` · **number:** 4.4 · **estimatedMinutes:** 80 · **prerequisites:** `econ4130-4-2`, `econ4130-4-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele Variant D-oppgaven: fra navngitt fordeling via MLE og Stata-utskrift til Pearson χ² og eksakt CI — slik Problem 2 bygges i D-årene.
- **Eksamensbelegg:** Variant D samlet (Problem 2 i H2017/18/20/21). Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) identifiser den navngitte fordelingen og parametriseringen; 2) utled/les MLE (for hånd eller Stata); 3) tolk estimatet i kontekst; 4) grupper data, regn forventede frekvenser fra cdf; 5) Pearson χ² med korrekt df; 6) eksakt CI via pivot; 7) evt. LR-test/simulering; 8) konkluder i ord. Gjennomregnet eksamenscase (Pareto- eller Weibull-basert) med sensor-margnotater (poengene: korrekt df, riktig fordeling under $H_0$, pivot-valg). 8–12 oppgaver på eksamensnivå.
- **Oppgavesjangre:** D+G+E+I. Mønstereksempel: «En Weibull-modell tilpasses $n=200$ levetider. Les MLE fra Stata-output, test tilpasningen med Pearson χ² (korrekt df), og konstruer et eksakt CI for medianen.»
- **Typiske feil:** Hele §5-repertoaret for Variant D: feil df, feil fordeling under $H_0$, parametriserings-forveksling, feil pivot.
- **Quiz: 12 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (se §4).

---

### Del 5 — Variant R: multippel regresjon med Stata-output *(prioritet: KUNNE)*

#### Kapittel 5.1: OLS-tolkning: koeffisienter, dummy og interaksjon

- **id:** `econ4130-5-1` · **number:** 5.1 · **estimatedMinutes:** 65 · **prerequisites:** `econ4130-2-3`
- **kapitteltype:** teori
- **description:** Les en Stata OLS-utskrift, tolk koeffisienter og standardfeil, og regn ceteris paribus-effekter i en interaksjonsmodell — kjernen i Variant R.
- **Eksamensbelegg:** Sjanger H i **3/7 sett** (H2015/16/19) — definerer Variant R, tung når den kommer. Ceteris paribus i interaksjonsmodell er fast. Krever tolkning/modellvalg (lånt drøftingselement). Prioritet: **kunne** (den andre halvparten av Problem 2).
- **Innholdskontrakt:** OLS-modellen $Y=\beta_0+\beta_1 x_1+\dots+u$; les Stata-utskrift: koeffisient, standardfeil, t-verdi, P-verdi, $R^2$, F-verdi; **dummyvariabler** (tolkning som nivåforskjell); **interaksjonsledd**: ceteris paribus-effekt $\partial E(Y\mid\cdot)/\partial x=\beta_1+\beta_4 g+\beta_5 a$ (effekten avhenger av de andre regressorene); estimer betingede gruppegjennomsnitt ved felles kovariatverdi. Homoskedastisitet-antakelsen for OLS (kobling til kap. 2.3). Tolkning i kontekst er poenget — begrunn.
- **Oppgavesjangre:** H. Mønstereksempel: «En lønnsregresjon med kjønnsdummy $g$ og interaksjon $g\cdot\text{erfaring}$ gir oppgitte koeffisienter. Regn ceteris paribus-effekten av ett års erfaring for kvinner og for menn, og tolk forskjellen.» (nyskrevne koeffisienter.)
- **Typiske feil:** **Feil ceteris paribus-effekt i interaksjonsmodell** (glemme at effekten avhenger av de andre regressorene); **feiltolke ikke-signifikante enkeltkoeffisienter** som «ingen forklaringskraft» når samlet F-test er signifikant (multikollinearitet); tolke dummy-koeffisient feil (nivå vs. helning).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 5.2: F-test og LR-test av nøstede modeller

- **id:** `econ4130-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ4130-5-1`
- **kapitteltype:** teori
- **description:** Test en full modell mot en redusert modell med F-testen (eller LR) — spesifikasjonstesten som alltid følger Variant R.
- **Eksamensbelegg:** Sjanger I i **3/7 sett** — følger alltid med Variant R (H2015 F-test av like varianser, H2016 modell 2 vs. 3, H2019 modell 2 vs. 1). Prioritet: **kunne**.
- **Innholdskontrakt:** F-test av nøstet modell: $F=\frac{(SSR_\text{red}-SSR_\text{full})/q}{SSR_\text{full}/(n-k)}$, der $q$ = antall restriksjoner, $k$ = antall parametere i full modell; fordeling $F_{q,\,n-k}$ under $H_0$; alternativt LR $=2(\ell_\text{full}-\ell_\text{red})\sim\chi^2_q$ (kobling til 4.3). Oppgaven oppgir ofte begge modellenes output — regn differansen. Fra hint-boksene: sensor godtar «gjett kritisk verdi fra nærmeste tabellverdier» når nøyaktig df mangler i tabellen `(utledet)`. Modellvalg som begrunnet konklusjon (drøftingselement). Utled F-teststørrelsen aktivt.
- **Oppgavesjangre:** I. Mønstereksempel: «Full modell har $SSR=120$ ($k=5$), redusert modell $SSR=138$ ($q=2$ restriksjoner), $n=60$. Utfør F-testen og konkluder om de to leddene bør beholdes.»
- **Typiske feil:** Feil frihetsgrader ($q$ og $n-k$ forbyttet); bruke χ² der F kreves (eller omvendt); regne differansen $SSR_\text{red}-SSR_\text{full}$ feil vei; ikke konkludere om modellvalg.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 5.3: Uteladt variabel via iterert forventning

- **id:** `econ4130-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ4130-5-1`, `econ4130-2-2`
- **kapitteltype:** teori
- **description:** Koble regresjonskoeffisienter mellom en full og en uteladt-variabel-modell via total forventning — det subtile resonnementet som skiller Variant R-toppkandidatene.
- **Eksamensbelegg:** Sjanger-element i **3/7 sett** ($\beta_1=\beta_1^*+\beta_2 c_1+\beta_3 d_1$-typen; kun Variant R). Prioritet: **kunne/kjenne** (differensierer mot A).
- **Innholdskontrakt:** Uteladt-variabel-bias: når en relevant regressor utelates, blir koeffisienten til en beholdt variabel en blanding av den «sanne» effekten og den uteladtes effekt vektet med samvariasjonen — utled koblingen $\beta_1=\beta_1^*+\beta_2 c_1$ (der $c_1$ = koeffisienten fra hjelperegresjon) **via iterert forventning** $E(Y\mid x)=E[E(Y\mid x,\text{uteladt})]$ (kap. 2.2-teknikken). Retning og fortegn på biasen — begrunn i kontekst. Ren drøftingsferdighet med utledningskrav.
- **Oppgavesjangre:** H (uteladt-variant) + J. Mønstereksempel: «En lønnsregresjon utelater utdanning. Bruk iterert forventning til å uttrykke koeffisienten på erfaring i den korte modellen ved koeffisientene i den lange, og forklar biasens fortegn.»
- **Typiske feil:** Feil fortegn på biasen; koble koeffisientene uten iterert-forventning-argumentet; forveksle hjelperegresjonens koeffisient med den strukturelle; glemme kontekst-tolkningen.
- **Quiz: 15 · Flashcards: 14**

**Prøve-kvote Del 5:** 4 prøver (se §4).

---

### Del 6 — Eksamenstrening

#### Kapittel 6.1: Metodevalg-drill: hvilken transformasjon, pivot eller test?

- **id:** `econ4130-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `econ4130-3-7`, `econ4130-4-4`
- **kapitteltype:** drill
- **description:** Tverrgående sjangerdrill: gjenkjenn på oppgaveordlyden hvilken metode som kreves — cdf-metode vs. Jacobi, mme vs. MLE, approksimativt vs. eksakt CI, F- vs. LR-test — og velg riktig verktøy raskt.
- **Eksamensbelegg:** Alle sjangre A–L samlet — den metakognitive ferdigheten open-book-eksamen faktisk måler (verktøyene er tilgjengelige; å velge riktig er poenget). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift: en beslutningstabell «signalord → metode» (f.eks. «find the distribution of» → transformasjon; «exact confidence interval» → pivot; «goodness of fit» → Pearson χ²; «test whether model X vs Y» → F/LR; «most suitable model» → begrunnet modellvalg). Gjennomregnet case der samme datasett kan angripes med flere metoder — velg den eleganteste og begrunn (analysens toppkandidat-markør). 8–12 korte «hvilken metode?»-oppgaver + noen fullstendige på tvers av Del 1–5.
- **Oppgavesjangre:** Alle A–L (gjenkjenning). Mønstereksempel: «For hver av fem korte oppgavestammer: navngi sjangeren (A–L) og skisser løsningsstrategien i tre punkter.»
- **Typiske feil:** Velge tung metode der en elegant finnes; misforstå signalordet (eksakt vs. approksimativt CI); bruke normal-test der en pivot/χ² kreves.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 6.2: Øvingseksamen 1 — Problem 1 + Variant R

- **id:** `econ4130-6-2` · **number:** 6.2 · **estimatedMinutes:** 100 · **prerequisites:** `econ4130-6-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers eksamenssett i R-året-malen: Problem 1 (fordeling → transformasjon → mme/MLE → CI → test) + Problem 2 Variant R (Stata-regresjon, interaksjon, F-test, uteladt variabel), med A-besvarelse i collapsibles.
- **Eksamensbelegg:** Speiler «Problem 1 + Variant R»-settene (H2015/16/19). Prioritet: **perfekt** (generalprøve).
- **Innholdskontrakt:** To nyskrevne oppgaver med seksjoner A–F og (i),(ii),(iii), vekting ca. 50/50, 180 min. Problem 1: en navngitt fordeling gjennom hele Del 1+3-kjeden. Problem 2 (Variant R): en Stata OLS-utskrift med dummy + interaksjon, ceteris paribus-effekter, F-test av nøstet modell, uteladt-variabel-resonnement. Løsningsforslag i eget `collapsible` per seksjon, skrevet som A-besvarelse med `tip`-notat om delpoeng/vekting og hvor sensor trekker (Slutsky-forklaring, ceteris paribus i interaksjon, F-test-df). Alle tall/kontekster nyskrevne.
- **Oppgavesjangre:** A–F + H + I + J komplett. Mønstereksempel: hele settet.
- **Typiske feil:** Tidsfeil (henge fast i Problem 1); glemt Jacobi/Slutsky; feil ceteris paribus i interaksjon; feil F-test-df.
- **Quiz: 8 · Flashcards: 0**

#### Kapittel 6.3: Øvingseksamen 2 — Problem 1 + Variant D

- **id:** `econ4130-6-3` · **number:** 6.3 · **estimatedMinutes:** 100 · **prerequisites:** `econ4130-6-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers eksamenssett i D-året-malen: Problem 1 (samme kjede) + Problem 2 Variant D (Pareto/Weibull-MLE, Pearson χ² goodness-of-fit, eksakt CI via pivot), med A-besvarelse i collapsibles.
- **Eksamensbelegg:** Speiler «Problem 1 + Variant D»-settene (H2017/18/20/21). Prioritet: **perfekt** (generalprøve).
- **Innholdskontrakt:** To nyskrevne oppgaver, seksjoner A–F og (i),(ii),(iii), ca. 50/50, 180 min. Problem 1: en annen navngitt fordeling gjennom Del 1+3-kjeden (inkl. iterert forventning fra Del 2). Problem 2 (Variant D): Pareto- eller Weibull-MLE (for hånd + Stata-output), Pearson χ² med «fyll inn celle» og korrekt df, eksakt CI via χ²-pivot, evt. LR-test. Løsningsforslag i `collapsible` per seksjon som A-besvarelse med `tip`-notat om delpoeng (korrekt df, riktig fordeling under $H_0$, pivot-valg, Slutsky). Alle tall nyskrevne.
- **Oppgavesjangre:** A–F + G + E + I + J komplett. Mønstereksempel: hele settet.
- **Typiske feil:** Feil df i Pearson χ²; feil fordeling under $H_0$; parametriserings-forveksling; feil pivot; glemt Slutsky.
- **Quiz: 8 · Flashcards: 0**

**Prøve-kvote Del 6:** 4 prøver (se §4).

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
og poengfordeling. Omfang i minutter. Prøvene samles i ett prøvekapittel per
del (`econ4130-<del>-prove`, chapterNumber `<del>.P`) ved wiring — bygges av
samme agent som delen.

**Del 1 — Fordelinger, transformasjon og momenter**
1. Prøve 1.A (35 min): Vis gyldig fordeling + finn cdf + kvantil (sjanger A, kap. 1.1).
2. Prøve 1.B (40 min): Transformasjon $Y=g(X)$ med Jacobi — skala, log og potens (sjanger B, kap. 1.3).
3. Prøve 1.C (35 min): $E[X^r]$/varians via $\Gamma$-identitet og mgf + kovarians/korrelasjon (sjanger C, kap. 1.4–1.5).
4. Prøve 1.D (50 min): Full Problem 1-åpning på eksamensnivå: gyldig fordeling → transformer → momenter → kvantil (sjanger A+B+C komplett, kap. 1.6).

**Del 2 — Betingede fordelinger og iterert forventning**
1. Prøve 2.A (35 min): Simultan/marginal/betinget pdf fra konstruert (X,Y) (kap. 2.1).
2. Prøve 2.B (45 min): Iterert forventning — $E(Y)$, $\text{Var}(Y)$, $\text{Cov}(X,Y)$, $\text{corr}(X,Y)$ (sjanger J, kap. 2.2).
3. Prøve 2.C (35 min): Regresjonsfunksjon + homo-/heteroskedastisitet-klassifisering med begrunnelse (kap. 2.3).
4. Prøve 2.D (40 min): Bivariat normal — betinget fordeling + motbevis for binormalitet (kap. 2.4).

**Del 3 — Estimering, asymptotikk og inferens**
1. Prøve 3.A (40 min): mme + MLE med tallverdier + konsistensargument (sjanger D, kap. 3.1–3.2).
2. Prøve 3.B (40 min): Fisher-info + asymptotisk normalitet + regularitetsdrøfting (MLE-sammenbrudd) (kap. 3.3–3.4).
3. Prøve 3.C (45 min): CI — approksimativt via Slutsky OG eksakt via pivot + CI-transformasjon (sjanger E, kap. 3.5).
4. Prøve 3.D (55 min): Full inferens-kjede + Wald-test + MSE-sammenlikning på eksamensnivå (sjanger D+E+F+L komplett, kap. 3.6–3.7).

**Del 4 — Variant D: navngitte fordelinger og goodness-of-fit**
1. Prøve 4.A (40 min): Pareto/Weibull-MLE for hånd + Stata-output-tolkning (kap. 4.1).
2. Prøve 4.B (45 min): Pearson χ² tilpasningstest med «fyll inn celle» + korrekt df (sjanger G, kap. 4.2).
3. Prøve 4.C (40 min): Eksakt CI via χ²-pivot + LR-test + inverse-transform simulering (sjanger E+I+K, kap. 4.3).
4. Prøve 4.D (55 min): Full Variant D-oppgave på eksamensnivå (MLE → χ² → eksakt CI, kap. 4.4).

**Del 5 — Variant R: multippel regresjon med Stata-output**
1. Prøve 5.A (40 min): OLS-utskrift — koeffisienter, dummy, ceteris paribus i interaksjonsmodell (sjanger H, kap. 5.1).
2. Prøve 5.B (40 min): F-test / LR-test av nøstet modell + modellvalg med begrunnelse (sjanger I, kap. 5.2).
3. Prøve 5.C (40 min): Uteladt variabel via iterert forventning + biasretning (kap. 5.3).
4. Prøve 5.D (55 min): Full Variant R-oppgave på eksamensnivå (utskrift → interaksjon → F-test → uteladt variabel, kap. 5.1–5.3).

**Del 6 — Eksamenstrening**
1. Prøve 6.A (35 min): Metodevalg-drill — gjenkjenn sjanger A–L fra oppgavestammer (kap. 6.1).
2. Prøve 6.B (60 min): Halvsett Problem 1 på eksamensnivå (fordeling → transformasjon → inferens-kjede).
3. Prøve 6.C (60 min): Halvsett Variant R (Stata-regresjon → interaksjon → F-test → uteladt variabel).
4. Prøve 6.D (60 min): Halvsett Variant D (Pareto/Weibull-MLE → Pearson χ² → eksakt CI).

### Øvingseksamener (2 komplette sett — se kap. 6.2–6.3)

| Sett | Regime det speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 6.2) | H2015/16/19: Problem 1 + Variant R | Problem 1 (transformasjon/mme/MLE/CI/test) 50 % · Variant R (Stata-regresjon, interaksjon, F-test, uteladt variabel) 50 % |
| Øvingseksamen 2 (kap. 6.3) | H2017/18/20/21: Problem 1 + Variant D | Problem 1 (annen fordeling + iterert forventning) 50 % · Variant D (Pareto/Weibull-MLE, Pearson χ², eksakt CI) 50 % |

Til sammen dekker de to settene samtlige sjangre A–L minst én gang, begge
Problem 2-variantene (R og D) og de garanterte Problem 1-mønstrene.

---

## 5. Kvotesammendrag (AUTORITATIV — fasit for alle senere faser)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 12 = **12** | 12 = **12** |
| 1 | 1.1–1.6 | 22+20+22+20+15+12 = **111** | 22+24+18+20+16+10 = **110** |
| 2 | 2.1–2.4 | 18+20+15+12 = **65** | 18+18+14+12 = **62** |
| 3 | 3.1–3.7 | 18+20+18+15+20+20+12 = **123** | 18+20+18+16+18+18+10 = **118** |
| 4 | 4.1–4.4 | 18+18+15+12 = **63** | 18+16+16+10 = **60** |
| 5 | 5.1–5.3 | 20+16+15 = **51** | 18+14+14 = **46** |
| 6 | 6.1–6.3 | 14+8+8 = **30** | 10+0+0 = **10** |
| **Sum** | **26 innholdskapitler** | **455** | **418** |

> Tallene over dekker de 26 innholdskapitlene (Del 0–6). I tillegg bidrar de **6
> prøvekapitlene** (`econ4130-<del>-prove`, Del 1–6) med quiz/flashcards fra sine
> nyskrevne prøveoppgaver: kvote **≥18 quiz + ≥21 flashcards per prøvekapittel**
> (fra prøvenes definisjoner/kontrollspørsmål). Prøvebidrag: $6\times 18 =
> \mathbf{108}$ quiz og $6\times 21 = \mathbf{122}$ flashcards.

**Summeringskontroll:**
Quiz $455 + 108 = \mathbf{563} \ge 500$ ✓ (margin +63).
Flashcards $418 + 122 = \mathbf{540} \ge 500$ ✓ (margin +40).

*(Innholdskapitlenes egne quiz/flashcards utgjør 455/418; prøvekapitlene tetter
resten. For robusthet mot at prøvekapitlenes definition-blokker underleverer,
kan Del 1/3-teorikapitlene løftes med +2–3 flashcards hver ved bygging — men
kvotesummen med prøvebidrag ligger allerede trygt over gulvet.)*

**Tetthetsbegrunnelse (jf. PRODUKSJONSLOYPE §fase 2-audit):** ≥500 er et GULV.
ECON4130 er et utlednings-/tolkningstungt regnefag på masternivå med **12
distinkte oppgavesjangre (A–L)** og relativt få rene puggedefinisjoner
(matematisk statistikk belønner metode og forutsetningsbruk, ikke faktapugg) —
derfor ligger flashcards moderat (540), mens quiz skaleres til 563 for å dekke
sjangerbredden med tilstrekkelig drill per metode (transformasjon, mme/MLE,
Fisher, CI-metodene, Pearson χ², F/LR, OLS-tolkning). Hver metode bidrar med
sine kjernedefinisjoner (pivot, score, Fisher-info, ceteris paribus,
forventet frekvens). Øvingseksamenene (6.2–6.3) har 0 flashcards (rene
oppgavesett).

**Prøver totalt:** 24 temaprøver (4 per temadel × Del 1–6) + 2 øvingseksamener
(kap. 6.2–6.3) = **26 prøvesett**. Krav ≥4 prøver per temadel: Del 1 = 4 ✓,
Del 2 = 4 ✓, Del 3 = 4 ✓, Del 4 = 4 ✓, Del 5 = 4 ✓, Del 6 = 4 ✓.

**Flashcard-påminnelse (fra byggekontrakt-mekanikken):** flashcards genereres
KUN fra toppnivå `definition`-blokker med `title`. Hvert kapittels flashcard-
kvote må derfor realiseres som så mange navngitte `definition`-blokker på
toppnivå (ikke i collapsible). Drillkapitlene (1.6, 3.7, 4.4, 6.1) har lav
flashcard-kvote fordi de er rene oppgavekapitler; øvingseksamenene (6.2–6.3)
har 0.

---

## 6. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — 3-timers open-book, Problem 1 (alltid teori) +
   Problem 2 (Variant R eller D), seksjonsstrukturen A–F, «frosset» pensum
   (nedlagt emne) (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer: **perfekt**
   (transformasjon/Jacobi 1.3, cdf/pdf 1.1, mme+MLE 3.1–3.2, CI-metodene 3.5,
   Wald-test 3.6, inferens-drill 3.7, transformasjonsdrill 1.6), **kunne**
   (iterert forventning 2.2, regresjonsfunksjon 2.3, Fisher/asymptotikk 3.3,
   konsistens/regularitet 3.4, MSE/efficiency 3.6, hele Variant D del 4, hele
   Variant R del 5), **kjenne** (bivariat normal 2.4, best lineær prediktor 3.6,
   simulering 4.3, uteladt variabel 5.3, ordensstatistikk 3.4).
3. **Sjangerguiden** — de 12 oppgavetypene A–L med løsningsoppskriftene fra
   drillkapitlene (1.6, 3.7, 4.4, 6.1) i kortform, og signalord→metode-tabellen.
4. **Sensorreglene** — de utledede metareglene (`(utledet)`): begrunn hvert steg,
   forklar Slutsky, sjekk regularitet, korrekt fordeling og df under $H_0$,
   teoremer hentes fra egne papirer, tolkning teller i regresjon; +
   toppkandidat-markørene (betinget vs. marginal, CI-transformasjon).
5. **Feilkatalogen** — de 10 typiske feilene samlet (glemt Jacobi, feil
   fordeling under $H_0$, feil df, MLE-asymptotikk uten regularitet, Slutsky
   ikke forklart, betinget/marginal-forveksling, ikke-signifikante koeffisienter
   feiltolket, feil ceteris paribus i interaksjon, CI ikke transformert korrekt,
   énhalet/tohalet p-verdifeil), hver med henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — cdf/pdf/kvantil (1.1), fordelingene med
   mgf/E/Var (1.2/1.4), transformasjonsformlene (1.3), iterert forventning +
   total varians (2.2), mme/MLE/Fisher/asymptotikk (3.1–3.3), CI-formene og
   pivotene (3.5), Wald/MSE/Cramér–Rao (3.6), Pearson χ² + df-regelen (4.2),
   F/LR-test (5.2), ceteris paribus i interaksjon (5.1) på én side, med
   markering «utlede aktivt» (Jacobi, MLE, Fisher-info, total varians,
   F-teststørrelse) vs. «kun bruke» ($\Gamma$-identitet, asymptotikk-resultatet,
   Cramér–Rao) — og rate/scale-advarselen i egen rute.
7. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 (kjernen i denne rekkefølgen — avhengighetene er reelle:
   fordelinger før transformasjon, transformasjon/momenter før estimering),
   deretter Del 4 OG Del 5 parallelt (begge Problem 2-varianter må kunnes),
   prøver etter hver del, øvingseksamenene (6.2 R-mal, 6.3 D-mal) de siste ukene
   under tidspress (180 min, ca. 90 per problem — kjør begge fordi Problem 2 er
   uforutsigbar).

---

## 7. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge (fase 4, én agent per hel del; maks ~2 samtidige)

1. **Metadata først**: `TextbookCourse`-oppføring for `econ4130` med alle 26
   innholdskapitler + 6 prøvekapitler (id/number/title/description/
   estimatedMinutes/topics/prerequisites) etter mønster `COURSE_BI_OKONOMI`;
   `sectionNames` fra §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, Problem 1/2-strukturen,
   Variant R/D-skillet, notasjonsreglene (engelsk term + parentes,
   $N(\mu,\sigma^2)$, rate/scale-advarsel).
3. **Kjernen i avhengighetsrekkefølge**: Del 1 (6 kap) → Del 2 (4 kap) → Del 3
   (7 kap). **Del 3 er over DNA-taket (7 kap):** hvis delt, gi begge agentene
   HELE Del 3s kontrakter og flagg for konsistenssjekk (Fisher-info-notasjon,
   Slutsky-forklaringen, CI-metodene, konsistensargumentet må være enhetlig).
4. **De to parallelle anvendelsesdelene**: Del 4 (Variant D, 4 kap) og Del 5
   (Variant R, 3 kap) — kan bygges av to agenter samtidig (ikke avhengige av
   hverandre, begge bygger på Del 1–3). Gi hver agent HELE sin dels kontrakter.
5. Del 6 (øvingseksamenene til slutt — de gjenbruker alt; bygges av én agent som
   leser HELE skjelettet).
6. Prøvekapitler (`econ4130-<del>-prove`, chapterNumber `<del>.P`) etter hver
   temadel, av samme agent som delen. Narrativ-versjoner (`<id>-narrativ.json`)
   og quiz per kapittel etter hvert som kapitlene ferdigstilles.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (escape `"` i norske sitattegn; generer helst via `json.dump`);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med `\\`-escaping i JSON;
      konsistent notasjon ($\hat\theta$, $\ell(\theta)$, $I(\theta)$,
      $N(\mu,\sigma^2)$, $\chi^2_r$, $\Gamma(\alpha,\lambda)$, $H_0/H_1$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ4130-filer — påkrevd:
      engelsk fagterm i parentes ved første forekomst (rv, iid, MLE, mme, CI,
      SE, LR), $N(\mu,\sigma^2)$ med varians som andre argument, gamma via
      $M(t)=(\lambda/(\lambda-t))^\alpha$ med rate/scale-advarsel; forbudt:
      tidsrekke-/systemøkonometri (VAR, kointegrasjon), tunge Bayes-/bootstrap-
      utledninger (kun kort «utenfor kjernen»-omtale i Del 0).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvenstallene fra dette skjelettet), Forkunnskaper-blokk med
      verifiserte lenker, `collapsible` Symbol- og formelliste (per
      delkapittel — forklar ALLE symboler brukt i kapitlet), Typiske
      feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
      `solution` + `hints` og eksplisitt sjangerforankring (A–L), repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert
      case + 8–15 oppgaver.
- [ ] **Kontraktfestede blokker på plass**: Jacobi-advarselen som `warning` i
      1.3 (og hvert transformasjonskapittel); rate/scale-advarselen i 1.2/1.4/
      4.1; Slutsky-forklaringskravet i 3.5 (og gjentatt i 3.7/6.2); df-regelen
      (kategorier − 1 − estimerte) i 4.2; regularitetsbrudd-drøftingen i 3.4;
      ceteris paribus-i-interaksjon-fellen i 5.1.
- [ ] **Kvotesum ≥ 500 quiz og ≥ 500 flashcards** per §5 (innhold 455/418 +
      prøvebidrag → 563/540; kontroller telling — kvoter er minimum, aldri
      underskrid).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 2 øvingseksamener (6.2 R-mal,
      6.3 D-mal) som sammen dekker sjangrene A–L og begge Problem 2-variantene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster,
      egne datasett; ingen formuleringer fra reelle sett (arkivet har uansett
      ingen sensorveiledning); Pareto-inntekts- og Weibull-levetids-kontekstene
      omskrives med nye tall (ALDRI arkivets SSB-1998-tall). Pensumlitteratur
      refereres, aldri siteres i lengde.
- [ ] **`(verifiser)`-markeringer**: alle `(utledet)`/`(verifiser)`-utsagn
      (sensorkrav del 4–5, Bayes/bootstrap-omtalen, kryssbok-lenkene til
      econ2130/stk1110) grep-es og håndteres — behold usikkerhetsmerkingen der
      den er reell (ingen sensorveiledning finnes).
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + kapittelspesifikk streng), jf. lærdommen om
      `getChapterMeta`.
