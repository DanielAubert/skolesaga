# Bokskjelett: ECON2130 Statistikk 1 — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (13 komplette sett V2018–V2025: 8 ordinære + 5 utsatt,
> 12 med sensorveiledning/fasit). Arketype: **DNA-regnefag** (`DNA-regnefag.md`)
> — kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og
> gjentas ikke her. Emnet er et hybridfag: primær-arketype regnefag med lånte
> drøftingselementer i Del 6 (kausalitet/design testes verbalt) — dokumentert
> under «Avvik fra DNA-malen».

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ2130` |
| Tittel | **ECON2130 Statistikk 1** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt metodefag med fast oppgavemal; hybrid: drøftingselementer i Del 6) |
| Antall kapitler | **35** (1 eksamenskart + 30 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 570 min ≈ 43 timer** |
| Quiz totalt | **550** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (ett avsnitt):** ECON2130-eksamen er «statistikk for samfunnsvitere med
R», ikke matematisk statistikk med bevis: tre anvendte oppgaver der
inferens-kjeden estimator → SE → KI → test → p-verdi → styrke bærer 60–80 % av
poengene, alltid pakket inn i en samfunnsfaglig kontekst med ekte-lignende data.
Fordi alle trykte hjelpemidler er tillatt, gir formelgjengivelse nesten null —
poengene ligger i metodevalgene (z eller t? ensidig eller tosidig?),
forutsetningsdrøftingen og tolkningen i kontekst. R går igjen i samtlige 13
sett, og fra 2025 kjører kandidatene igjen ekte analyser på medfølgende
CSV-datasett under skoleeksamen. Denne boka er kalibrert mot nettopp det: den
driller Monte Carlo-mønsteret og hele testapparatet, behandler regresjon lett
(0 forekomster på 13 sett) til fordel for to-utvalgsapparatet som er kursets
reelle samvariasjonstest, gir kausalitet/design (kontrafaktisk logikk,
seleksjonsskjevhet, RCT) en egen del, og terper signaturspørsmålene — «er
p-verdien en stokastisk variabel?» og den presise KI-tolkningen som er eneste
feil sensor eksplisitt trekker for.

**Kritisk notasjonsregel (gjelder HELE boka):**
- **N(μ, σ²) angis alltid med VARIANS som andre argument**: $N(100, 2)$ betyr
  $\sigma = \sqrt{2}$; CLT-fordelingen til $\hat{\lambda}$ skrives
  $N(\lambda, \lambda/n)$. Men **`rnorm(n, mean, sd)` tar STANDARDAVVIK** —
  `rnorm(100, 2, 4)` trekker fra $N(2, 16)$. Konverteringen begge veier skal
  drilles, og hvert kapittel som bruker både notasjonen og R skal ha en
  `warning`-blokk om fellen (kontraktfestet i kap. 2.5).
- Norske fagtermer konsekvent: **forventningsrett** (ikke «unbiased»),
  **konsistent**, **testobservator**, **forkastningsområde/kritisk verdi**,
  **signifikansnivå**, **teststyrke**, **standardfeil**. Hypoteser $H_0/H_1$.
- Estimatorer med hatt: $\hat{p} = X/n$, $\hat{\lambda} = X/n$, $\hat{\theta}$;
  utvalgsgjennomsnitt $\bar{X}$, utvalgsstandardavvik $S$ (mot populasjonens
  $\sigma$). Sannsynlighet $P(\cdot)$; hendelser med $\cap$, $\cup$,
  komplement $A^c$.
- R-kode i base-R (`hist`, `plot`, `boxplot`, `sample`, `replicate`) —
  tidyverse nevnes kun som «også godtatt». Pseudokode/presis verbal
  algoritmebeskrivelse presenteres alltid som likeverdig alternativ.
- ALDRI momentgenererende funksjoner, ALDRI formelle bevis utover
  regneregel-manipulasjoner på 3–5 linjer, ALDRI kontinuerlige fordelinger
  utover normalfordelingen (eksponensial/uniform er aldri testet) — utelatt
  med vilje og skal kun omtales i Del 0 som «utenfor eksamenskjernen».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Sannsynlighetsregning | 5 | Betinget/total/Bayes/uavhengighet i **13/13 sett (100 %)**; begge 2025-sett åpner med abstrakt hendelsesalgebra (20 %) → nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. Kombinatorikk (3/13) kompakt. |
| 2 | Stokastiske variabler og fordelinger | 7 | Regneregler E/Var **12/13**, normalfordeling/standardisering **11/13**, CLT **11/13** (nivå 1–2); binomisk 6/13 stigende, **Poisson 3 av 4 siste sett** → fullt forutsetningsrituale + rate-skalering → 6 teorikapitler + drillkapittel. |
| 3 | R, deskriptiv statistikk og simulering | 4 | R i **13/13 sett**; Monte Carlo som løsningsmetode **11/13**; utskrift-/graftolkning **12/13**; 2025-regimet krever hands-on CSV-analyse → egen verktøydel med drillkapittel som trener BEGGE regimer (skrive kode for hånd 2022–24 og kjøre analyse 2021/2025). |
| 4 | Estimering og konfidensintervaller | 5 | Estimatoregenskaper **11/13**, KI **12/13** (nivå 1); z-vs-t-valget og KI-tolkningen er sensors fremste metodesignaler → 3 tunge teorikapitler + 1 strekk-kapittel (nivå 3) + drillkapittel. |
| 5 | Hypotesetesting | 5 | **13/13 — alltid tyngste enkeltkomponent.** Testoppskriften, p-verdien (alle fire 2024–25-sett, signaturspørsmål), to-utvalgsapparatet (11/13 — kursets reelle samvariasjonstest), type I/II og styrke (7/13, stigende) → 4 teorikapitler + drillkapittel. |
| 6 | Dataanalyse, design og kausalitet | 4 | Hands-on CSV-oppgaven er 2025-formens største (40–45 %); kausalitet/seleksjon/design fast innslag **7/13 og i begge 2025-sett** → egen del. Korrelasjon (1/13) og regresjon (**0/13**) får ett lett «kjenne»-kapittel. |
| 7 | Eksamenstrening | 4 | Metodesignal-drill + 3 komplette øvingseksamener som dekker begge regimer (2022–24-malen uten R-tilgang; 2025-malen med CSV; V2026-prognosen). |

**Seksjonstitler (blir `sectionNames` i metadata):**

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Sannsynlighetsregning |
| 2 | Stokastiske variabler og fordelinger |
| 3 | R, deskriptiv statistikk og simulering |
| 4 | Estimering og konfidensintervaller |
| 5 | Hypotesetesting |
| 6 | Dataanalyse, design og kausalitet |
| 7 | Eksamenstrening |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger sjangerkapitler i siste del. Her ligger fem av seks
   drillkapitler (1.5, 2.7, 3.4, 4.5, 5.5) inne i temadelene sine, fordi
   sjangrene de driller er 85–100 %-gjengangere som må sitte umiddelbart etter
   teorien — Del 7 beholder metodesignal-drillen og øvingseksamenene (samme
   grep som econ1310).
2. **Del 3 er en verktøydel, ikke en temadel** i DNA-forstand: R er ikke et
   «tema» i pensum, men går igjen i 13/13 sett og bærer 2025-regimets største
   oppgave — analysens kalibrering krever både R-integrert stoff i hvert
   relevant kapittel OG et eget R-/simuleringssted der Monte Carlo-mønsteret
   og deskriptiv tolkning drilles samlet.
3. **Regresjon utelates fra teoridelene** til tross for emnebeskrivelsen:
   0 forekomster på 13 sett. Den får kun en lett «kjenne»-omtale i kap. 6.4
   (sammen med korrelasjon, testet én gang). To-utvalgsapparatet (kap. 5.3)
   dyrkes i stedet som kursets faktiske samvariasjonstest.
4. **Del 6 låner drøftingselementer** fra DNA-drøfting (hybridregelen i
   README): kausalitet/seleksjon/design testes som verbal drøfting med presise
   begreper (7/13, fast i 2025-regimet) — kapitlene 6.2–6.3 har derfor
   momentbank-preg i stedet for utledninger, men beholder regnefagets
   eksempel- og oppgavestruktur.
5. **3 øvingseksamener med regime-spredning**: én per dokumentert eksamensform
   (2022–24 uten R-tilgang, 2025 med CSV, V2026-prognose) — DNA-ens krav om
   «typiske» eksamener oppfylles ved å speile begge regimer som analysen
   dokumenterer i live bruk.

**Kryssbok-lenker (forkunnskaper):** Grunnleggende sannsynlighetsregning og
derivasjon forutsettes fra VGS — lenk der det er naturlig til eksisterende
kapitler i S1/S2/R1-bøkene (sannsynlighet, derivasjon) med
`[tittel](/bok/<courseId>/<chapterId>)`; **verifiser at kapittel-id-en finnes
før lenking**. Økonomiske kontekster (BNP, inntekt) kan lenke til
`econ1310-1-1` (finnes). Lenk aldri til kapitler du ikke har verifisert.

---

## 3. Kapitler

Feltene følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer til
oppgavetype-katalogen som gjengis i Del 0 (fra analysen §3):
A hendelsesalgebra/betinget sannsynlighet · B fordelingsvalg med
forutsetningsdrøfting · C rate-skalering og summer · D regneregler E/Var ·
E normalfordeling/standardisering/normaltilnærming · F estimatoregenskaper ·
G konfidensintervall med z/t-valg og tolkning · H hypotesetest etter oppskrift ·
I p-verdi-forståelse · J type I/II og teststyrke · K Monte Carlo-simulering i R ·
L tolke R-utskrift og grafer · M datakritikk (seleksjon/representativitet/
kausalitet) · N hands-on R-dataanalyse.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON2130

- **id:** `econ2130-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **kapitteltype:** eksamenskart
- **description:** Eksamensformen, tre-oppgave-malen, temafrekvensene, sensorens metaregler og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 13 sett. Skal gjengi: (i) formhistorikken: 3-timers papireksamen med tabeller (2018–19) → hjemme-/digital med R og ekte nettdata (2020–21) → digital skoleeksamen UTEN R der `qnorm`/`qt`/`pnorm`-verdier gis i oppgaven (2022–24) → **2025-regimet: 4-timers skoleeksamen der kandidaten laster inn medfølgende CSV-datasett og kjører R-analyse**; svar «med R» og «for hånd» gir lik uttelling der begge er mulige; (ii) strukturen: 3 oppgaver (typisk 20/40/40 eller 40/35/25), 13–16 deloppgaver som bygger på hverandre — manglende mellomsvar kan erstattes av en eksplisitt antakelse; (iii) temafrekvens-tabellen: hypotesetesting 100 %, betinget sannsynlighet/Bayes 100 %, R-kode 100 %, KI 92 %, deskriptiv statistikk 92 %, regneregler E/Var 92 %, CLT 85 %, to-utvalg 85 %, normalfordeling 85 %, estimatoregenskaper 85 %, Monte Carlo som metode 85 %, type I/II og styrke 54 %, kausalitet/design 54 %, binomisk 46 %, p-verdi som eget spørsmål 46 % (alle fire 2024–25-sett), **Poisson 31 % men 3 av 4 siste sett**, kombinatorikk 23 %, simultanfordeling 15 %, betinget forventning 15 %, korrelasjon 8 % (først V2025), **regresjon 0 %**; (iv) at regresjon, eksponensial-/uniformfordeling og formelle bevis bevisst er utelatt/nedtonet; (v) sensorens seks metaregler: formlene er «gratis» — begrunnelsen er poenget; metodefrihet med begrunnelsesplikt (men teoretisk svar der simulering kreves = null); R-syntaksfeil tilgis — algoritmen vurderes; feilforplantning straffes én gang; forutsetninger er selvstendige poeng (nevn dem uoppfordret); tolkning i kontekst avslutter hvert resonnement — aldri bare «forkast H₀»; (vi) karakternivåene (fra V2018, konsistent senere): E ≈ tre deloppgaver uten store svakheter; C ≈ rimelig dekning av alle hoveddeler; A ≈ bredde — svakheter i enkeltdeloppgaver tolereres; (vii) toppkandidat-markørene: begrunner hvorfor (ikke bare at), kommenterer z-vs-t uoppfordret, tar opp praktisk/økonomisk signifikans, ser seleksjons-/replikasjonspoengene.
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med frekvens og typisk vekt. Prognosen for neste eksamen (V2026-malen): én ren sannsynlighetsoppgave (15–20 %, abstrakt eller kort kontekst), én fordelings-/inferensoppgave (35–40 %, binomisk eller Poisson med forutsetningsdrøfting, KI, ensidig test og p-verdi-spørsmål), én stor CSV-dataanalyse (40–45 %) med deskriptiv start, indikatorvariabel, to-utvalgstest, KI-tolkning og kausalitetsdrøfting; teststyrke-simulering og «er p-verdien stokastisk?» som mest sannsynlige tillegg. Leseplan: Del 4–5 + Monte Carlo (3.3) og forutsetningsritualet (2.7) er «må perfekt»; Del 1–3 og 6 «må kunne»; nivå 3-temaene (estimator-optimering, betinget forventning, simultanfordeling, kombinatorikk, regresjon) markeres. Avslutt med tidsstrategi: vektstyrt tidsbudsjett på 240 min.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «oppgavene er vektet 20/40/40 og du har 240 minutter — sett opp tidsbudsjett per deloppgave».
- **Typiske feil:** Metafeilene: regne uten ord (aldri full uttelling i dette emnet); gjengi formler passivt; hoppe over forutsetningene fordi det «ikke spørres»; feil tidsprioritering mot den store dataoppgaven.
- **Quiz: 10 · Flashcards: 10** (frekvenser, vekter, metaregler)

---

### Del 1 — Sannsynlighetsregning *(prioritet: PERFEKT)*

#### Kapittel 1.1: Hendelser og regnereglene

- **id:** `econ2130-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **kapitteltype:** teori
- **description:** Utfallsrom, hendelser og de fire regnereglene — komplement, addisjon, snitt og disjunkthet — med Venn-diagram som arbeidsverktøy.
- **Eksamensbelegg:** Del av sannsynlighetssjangeren A som står i **13/13 sett (100 %)**; begge 2025-settene åpner (eller fortsetter) med en rendyrket abstrakt oppgave i ren symbolform verdt ca. 20 %. Prioritet: **perfekt**.
- **Innholdskontrakt:** Utfallsrom og hendelse; sannsynlighet som tall i $[0,1]$ med sum 1 over disjunkte utfall (aksiomene kort, kun til bruk); komplementregelen $P(A^c) = 1 - P(A)$; addisjonssetningen $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; disjunkte hendelser ($P(A \cap B) = 0$) og hvorfor disjunkt ≠ uavhengig (full behandling i 1.3); multiplikasjonssetningen $P(A \cap B) = P(B) \cdot P(A|B)$ forhåndsvises (utdypes i 1.2); Venn-diagram og tabelloppsett som løsningsverktøy. R-integrasjon: verifisere et symbolsvar med en kort simulering (`sample` + `mean` av logisk vektor — peker frem mot 3.3). Alt til bruk — ingen utledninger.
- **Oppgavesjangre:** A. Mønstereksempel: «Du får oppgitt $P(A) = 0{,}5$, $P(B) = 0{,}3$ og $P(A \cup B) = 0{,}65$. Finn $P(A \cap B)$ og $P(A^c \cap B)$, og avgjør om A og B er disjunkte.»
- **Typiske feil:** Addere sannsynligheter uten å trekke fra snittet; blande disjunkt og uavhengig; glemme at komplementregelen ofte er raskeste vei («minst én»-hendelser).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Betinget sannsynlighet, total sannsynlighet og Bayes

- **id:** `econ2130-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2130-1-1`
- **kapitteltype:** teori
- **description:** Kursets hyppigste enkeltferdighet: betinge riktig vei, dele opp med total sannsynlighet og snu betingingen med Bayes.
- **Eksamensbelegg:** Sjanger A i **13/13 sett** — betinget/total/Bayes er selve kjernen; typiske kontekster fra settene (omskrevet): diagnostiske tester, dopingkontroll, billettkontroll, virussmitte, listeeksperimenter. Prioritet: **perfekt**.
- **Innholdskontrakt:** Definisjonen $P(A|B) = \frac{P(A \cap B)}{P(B)}$ og multiplikasjonssetningen $P(A \cap B) = P(B) \cdot P(A|B)$; loven om total sannsynlighet $P(A) = P(A|B)P(B) + P(A|B^c)P(B^c)$ (og med flere enn to «biter»); Bayes' setning $P(B|A) = \frac{P(A|B)P(B)}{P(A)}$ med total sannsynlighet i nevneren — presentert som «snu betingingen»; tre-diagram og kontingenstabell (tenkt populasjon på 10 000) som to likeverdige løsningsveier; base rate-intuisjonen (sjelden tilstand → mange falske positive). Betinget forventning hører til kap. 2.1. Utledning av Bayes fra definisjonen vises (3 linjer — «kunne utlede»); resten til bruk. R-integrasjon: simulere en Bayes-situasjon med filtrering (forbereder 3.3-vrien).
- **Oppgavesjangre:** A. Mønstereksempel: «En dopingtest slår ut hos 98 % av brukere og hos 1 % av ikke-brukere. 0,5 % av utøverne bruker det forbudte stoffet. En tilfeldig utøver tester positivt — hva er sannsynligheten for at hun faktisk er bruker? Kommenter tallet.»
- **Typiske feil:** Betinge feil vei ($P(A|B)$ brukt som $P(B|A)$ — «aktor-feilslutningen»); glemme total sannsynlighet i nevneren; blande $P(A \cap B)$ og $P(A|B)$; regne riktig men ikke kommentere det kontraintuitive svaret i kontekst.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 1.3: Uavhengighet — sjekkes, ikke antas

- **id:** `econ2130-1-3` · **number:** 1.3 · **estimatedMinutes:** 40 · **prerequisites:** `econ2130-1-2`
- **kapitteltype:** teori
- **description:** Uavhengighet som påstand du må belegge med tall — kursets første metodesignal.
- **Eksamensbelegg:** Uavhengighetssjekk er fast krav i sjanger A (13/13): fasitene viser begge kriteriene eksplisitt og krever at uavhengighet **vises**, ikke antas. «Anta uavhengighet uten sjekk» står på analysens feilliste (§5.4) både for sannsynlighetsregning og variansledd. Prioritet: **perfekt**.
- **Innholdskontrakt:** Definisjonen: A og B er uavhengige ⇔ $P(A \cap B) = P(A) \cdot P(B)$ ⇔ $P(A|B) = P(A)$; begge kriterier skal kunne brukes med tall («sett inn og sammenlign»); uavhengighet er symmetrisk; komplementer av uavhengige hendelser er uavhengige (til bruk); disjunkte hendelser med positiv sannsynlighet er ALLTID avhengige; uavhengighet i kontekst — når er antakelsen rimelig (myntkast, trekk med tilbakelegging) og når tvilsom (mål i samme fotballkamp, smitte i samme husstand)? Broen fremover: uavhengighet er forutsetningen som gjør $\text{Cov} = 0$ i variansregler (2.2), som ligger i binomisk-/Poisson-kravene (2.3–2.4), og som `sample(replace=TRUE)` koder (3.3).
- **Oppgavesjangre:** A. Mønstereksempel: «Blant 200 kontrollerte reisende hadde 40 ikke gyldig billett, 60 reiste i rushtiden, og 18 av rushtidsreisende manglet billett. Er hendelsene 'mangler billett' og 'reiser i rushtiden' uavhengige? Vis med tall.»
- **Typiske feil:** Anta uavhengighet fordi hendelsene «virker urelaterte»; forveksle disjunkt og uavhengig; sjekke bare det ene kriteriet halvveis (regne $P(A)P(B)$ men aldri sammenligne med $P(A \cap B)$); glemme konklusjonssetningen.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 1.4: Kombinatorikk og uniformt trekk

- **id:** `econ2130-1-4` · **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** `econ2130-1-1`
- **kapitteltype:** teori
- **description:** Gunstige over mulige, binomialkoeffisienter, trekk uten tilbakelegging og symmetriargumentene som løser åpningsoppgaver på tre linjer.
- **Eksamensbelegg:** Sjanger-elementet kombinatorikk/trekk uten tilbakelegging/symmetri i 3/13 sett (23 %) — men alltid som *åpning* av en oppgave, altså billige poeng når det kommer; typiske kontekster (omskrevet): kortstokk, loddtrekning blant deltakere, utvalg fra komité. Prioritet: **kjenne** (kompakt kapittel).
- **Innholdskontrakt:** Uniformt utfallsrom → sannsynlighet = gunstige/mulige; binomialkoeffisienten $\binom{n}{k}$ (tolkning + `choose(n, k)`); hypergeometriske brøker for trekk uten tilbakelegging (f.eks. $\frac{\binom{13}{2}\binom{39}{1}}{\binom{52}{3}}$-typen med nyskrevne tall); symmetriargumentene: $P(\text{en bestemt enhet trekkes først}) = 1/n$ og $P(\text{trekkes i det hele tatt blant } k) = k/n$ — raskere enn full kombinatorikk og eksplisitt godtatt; med/uten tilbakelegging som skillelinje. R-integrasjon: `sample(x, k)` uten tilbakelegging + simulering som fasitkontroll av kombinatorikksvar.
- **Oppgavesjangre:** A (åpningsvariant). Mønstereksempel: «I en komité på 20 personer skal 4 trekkes tilfeldig til et utvalg. Hva er sannsynligheten for at den lengstsittende trekkes? Og at hun trekkes først?»
- **Typiske feil:** Bruke med-tilbakelegging-logikk på trekk uten tilbakelegging; regne tungvint kombinatorikk der symmetriargumentet gir svaret direkte; glemme å begrunne at utfallene er uniforme.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 1.5: Drill: den abstrakte sannsynlighetsoppgaven

- **id:** `econ2130-1-5` · **number:** 1.5 · **estimatedMinutes:** 75 · **prerequisites:** `econ2130-1-3`, `econ2130-1-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på 2025-malens åpningsoppgave: fra tre oppgitte størrelser til komplett hendelsesalgebra med uavhengighetsdom.
- **Eksamensbelegg:** Sjanger A samlet (13/13); begge 2025-settene bruker samme mal: oppgitt $P(B)$, $P(A|B)$ og én størrelse til, finn snitt/marginal/union/omvendt betinging og avgjør uavhengighet — ca. 20 % av settet. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) skriv opp alle oppgitte størrelser i standardnotasjon; 2) tegn tre-diagram eller Venn-diagram; 3) finn snitt via multiplikasjonssetningen; 4) finn marginaler via total sannsynlighet; 5) union via addisjonssetningen; 6) omvendt betinging via Bayes; 7) uavhengighet: regn begge sider og sammenlign eksplisitt; 8) konkluder i ord. Gjennomregnet eksamenscase med sensor-margnotater (hvor poengene sitter per steg: metodevalg og begrunnelse, ikke formlene). 8–12 oppgaver på eksamensnivå: både ren symbolform (2025-malen) og kontekstvarianter (test/diagnose, kontroll, to-trinns trekk), et par med kombinatorikk-åpning, minst én der uavhengighet faktisk holder og én der den ikke gjør det.
- **Oppgavesjangre:** A. Mønstereksempel: «Gitt $P(B) = 0{,}25$, $P(A|B) = 0{,}4$ og $P(A \cap B^c) = 0{,}15$: finn $P(A \cap B)$, $P(A)$, $P(A \cup B)$ og $P(B|A)$, og avgjør med begrunnelse om A og B er uavhengige.»
- **Typiske feil:** Hele §5-repertoaret for sannsynlighetsdelen: betinge feil vei, glemme total sannsynlighet i nevneren, anta uavhengighet uten sjekk, mangle konklusjon i ord.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (se §4).

---

### Del 2 — Stokastiske variabler og fordelinger

#### Kapittel 2.1: Diskrete stokastiske variabler: fordeling, forventning og varians

- **id:** `econ2130-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ2130-1-2`
- **kapitteltype:** teori
- **description:** Fra frekvenstabell til fordeling — og de to tallene som oppsummerer den: E og Var.
- **Eksamensbelegg:** Egendefinerte diskrete fordelinger fra tabell er fast innslag i regneregler-sjangeren D (12/13); betinget forventning $E(X|A)$ i 2/13 (kjenne, «billig når den kommer»); simultanfordeling/kontingenstabell i 2/13 (kjenne). Prioritet: **kunne** (fundamentet for Del 2s perfekt-kapitler).
- **Innholdskontrakt:** Stokastisk variabel som tallverdi av utfall; sannsynlighetsfordeling satt opp fra frekvens-/sannsynlighetstabell; $E(X) = \sum x \cdot p(x)$ som tyngdepunkt; $\text{Var}(X) = \sum (x - E(X))^2 p(x)$ og $\text{SD} = \sqrt{\text{Var}}$ i samme enhet som dataene; betinget forventning $E(X \mid X > 0)$ ved å renormalisere sannsynlighetene (nivå 3, merket «bør kjenne til», plasseres ETTER kjernestoffet); simultanfordeling og kontingenstabell kort — marginaler, betingede fordelinger, uavhengighetssjekk i tabell (nivå 3, kort seksjon); økonomisk innpakning: forventet gevinst/tap, dagbøter. R-integrasjon: definere fordelingen som vektorer og trekke med `sample(x, n, replace = TRUE, prob = p)`, sammenligne simulert og teoretisk E/Var.
- **Oppgavesjangre:** D (åpningsvariant). Mønstereksempel: «Antall forsinkede leveranser per uke har fordelingen P(0)=0,5, P(1)=0,3, P(2)=0,15, P(3)=0,05. Finn forventning og standardavvik, og tolk standardavviket. Hva er forventet antall forsinkelser i uker med minst én forsinkelse?»
- **Typiske feil:** Glemme å kvadrere avviket i variansen; regne $E(X^2)$ som $E(X)^2$; glemme renormaliseringen i betinget forventning; oppgi varians der oppgaven ber om standardavvik (enhetsfeil).
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 2.2: Regnereglene for forventning og varians

- **id:** `econ2130-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ2130-2-1`, `econ2130-1-3`
- **kapitteltype:** teori
- **description:** E og Var av lineærkombinasjoner — med uavhengighetens rolle i variansleddet som eksplisitt sensorkrav.
- **Eksamensbelegg:** Sjanger D i **12/13 sett (92 %)**: lineærkombinasjoner og -transformasjoner, alltid med krav om at uavhengigheten (Cov = 0) **påpekes eksplisitt** i variansleddet (uthevet i to fasiter). Økonomi-innpakningen (dagbøter, profitt, porteføljer) er alltid tynn — statistikken under er standard. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE BRUKES AKTIVT (utledninger kreves ikke — kun regneregel-manipulasjon):
  $$E(aX + bY) = aE(X) + bE(Y) \quad (\text{gjelder ALLTID})$$
  $$\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X, Y)$$
  med $\text{Cov} = 0$ **under uavhengighet** — påpekningen er et selvstendig poeng; $\text{Var}(aX) = a^2\text{Var}(X)$ (konstanter ut i annen potens); $\text{Var}(X + c) = \text{Var}(X)$; lineære transformasjoner («dagbot = 100 000 · X»); for gjennomsnitt: $E(\bar{X}) = \mu$, $\text{Var}(\bar{X}) = \sigma^2/n$ (utledes på 3 linjer — «kunne utlede», dette er broen til Del 4); lineærkombinasjon av uavhengige normalfordelte er normalfordelt (til bruk, full behandling 2.5); økonomivarianter: forventet profitt $E(bX - kn^2)$ med derivasjon for maksimering (nivå 3, merket), porteføljevarians som risikoforståelse.
- **Oppgavesjangre:** D. Mønstereksempel: «$A \sim N(0, 1)$ og $B \sim N(2, 3)$ er uavhengige, og $C = 2A + B$. Finn $E(C)$ og $\text{Var}(C)$, og forklar hvilken rolle uavhengigheten spiller for svaret ditt.»
- **Typiske feil (analysen §5.4):** Glemme at $\text{Cov} = 0$ krever uavhengighet (multiplisere videre uten begrunnelse); glemme kvadratet på konstanten i variansen; trekke variansen ut av en differanse med minustegn ($\text{Var}(X - Y) = \text{Var}(X) + \text{Var}(Y)$ under uavhengighet — ikke minus); regne uten å nevne forutsetningen.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 2.3: Binomisk fordeling — med forutsetningsritualet

- **id:** `econ2130-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2130-2-2`
- **kapitteltype:** teori
- **description:** Binomisk fordeling fra forutsetninger til komplement-triks — og andelen som binomisk i forkledning.
- **Eksamensbelegg:** Binomisk i 6/13 sett (46 %) med stigende trend (3 av 4 siste); minst én av binomisk/Poisson i 9/13; sjanger B krever at forutsetningene **drøftes i konteksten** — de beste svarene peker på den mest tvilsomme. Andelstransformasjonen $\hat{p} = X/n$ går igjen i alle binomisk-settene (sjanger C). Prioritet: **kunne** (ritualet: **perfekt**).
- **Innholdskontrakt:** Forutsetningsritualet KONTRAKTFESTES: binomisk krever (1) fast antall $n$ uavhengige delforsøk, (2) to utfall per forsøk, (3) konstant suksess-sannsynlighet $p$ — ALLE tre skal nevnes, og den svakeste i konteksten skal pekes på; $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$ (til bruk); $E(X) = np$, $\text{Var}(X) = np(1-p)$; komplement-omskrivingen $P(X \geq k) = 1 - P(X \leq k - 1)$ og diskret-grense-presisjonen («under 600» = «$\leq 599$»); andelen $\hat{p} = X/n$ med $E(\hat{p}) = p$ og $\text{Var}(\hat{p}) = p(1-p)/n$ (regnereglene fra 2.2 — bro til Del 4); R: `dbinom`/`pbinom`/`rbinom`. Normaltilnærming utsettes til 2.6.
- **Oppgavesjangre:** B + C. Mønstereksempel: «En nettbutikk vet at 8 % av pakker kommer i retur. Av 150 utsendte pakker: hvilken fordeling har antall returer, hvilke antakelser bygger det på — og hvilken er mest tvilsom her? Finn sannsynligheten for flere enn 15 returer.»
- **Typiske feil (analysen §5.5, §5.11):** Nevne én av tre forutsetninger og gå videre (full uttelling krever alle); $P(X \geq k)$ regnet uten komplement-omskriving; «under k» oversatt feil for diskret variabel; glemme at andelen bare er en skalert binomisk.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.4: Poisson-fordelingen: rate-skalering og summer

- **id:** `econ2130-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ2130-2-3`
- **kapitteltype:** teori
- **description:** Comeback-fordelingen: tre forutsetninger, rate skalert til riktig intervall og summer som forblir Poisson.
- **Eksamensbelegg:** Poisson i 4/13 totalt — men **3 av 4 siste sett** (kontekster omskrevet: fiskefangst, arbeidsulykker, fotballmål) etter seks års pause; samme faste krav hver gang: **alle tre forutsetningene nevnes** (eksplisitt i V2024-veiledningen), raten skaleres, sum-egenskapen brukes. Analysen utpeker Poisson-basert inferensoppgave som sannsynlig i V2026. Prioritet: **kunne** (ritualet og skaleringen: **perfekt**).
- **Innholdskontrakt:** Forutsetningsritualet KONTRAKTFESTES: Poisson krever (1) konstant rate over intervallet, (2) uavhengige hendelser i disjunkte delintervaller, (3) ingen to hendelser samtidig — ALLE tre nevnes, og den mest tvilsomme i konteksten pekes på (f.eks. at mål i en fotballkamp kan påvirke hverandre); $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$, $E(X) = \text{Var}(X) = \lambda$; **rate-skalering** $\lambda \cdot (t/t_0)$: årsrate → månedsrate, 8-timersdag → 9-timersdag, per kamp → per sesong; **sum av uavhengige Poisson er Poisson** med $\lambda_1 + \lambda_2$; oversettelsen gjennomsnittsform → totalform («snitt per kamp over 3» ⇔ «sum over 720» ved 240 kamper); $\hat{\lambda} = X/n$ som estimator (bro til Del 4); R: `dpois`/`ppois`/`rpois`. Normaltilnærming av Poisson-sum i 2.6.
- **Oppgavesjangre:** B + C. Mønstereksempel: «Sesongen består av 240 kamper med i snitt 2,7 mål per kamp. Hvilken fordeling har totalt antall mål, under hvilke antakelser — og hva er sannsynligheten for at snittet per kamp overstiger 3?»
- **Typiske feil (analysen §5.5, §5.6):** Bruke årsraten på en måned (glemt skalering); nevne bare «konstant rate» av de tre kravene; ikke bruke sum-egenskapen (regne 240 enkeltkamper); glemme å oversette snitt-hendelsen til totalform.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 2.5: Normalfordelingen og standardisering

- **id:** `econ2130-2-5` · **number:** 2.5 · **estimatedMinutes:** 55 · **prerequisites:** `econ2130-2-2`
- **kapitteltype:** teori
- **description:** Z-transformasjonen, tabell og pnorm — og notasjonsfellen N(μ, σ²) mot rnorm(sd) som har felt kandidater på ekte eksamen.
- **Eksamensbelegg:** Standardisering/tabelloppslag i **11/13 sett (85 %)** — sjanger E; interpolering mellom naboverdier er eksplisitt godkjent metode; notasjonsoversettelsen mot R er testet direkte (én utsatt-fasit: `rnorm(100, 2, 4)` trekker fra $N(2, 16)$). Prioritet: **perfekt**.
- **Innholdskontrakt:** $X \sim N(\mu, \sigma^2)$ — **variansen som andre argument, alltid**; tettheten kvalitativt (symmetri, klokkeform — ingen integrasjon); standardisering $Z = \frac{X - \mu}{\sigma}$ og oppslag i standardnormaltabell; symmetriregler $\Phi(-z) = 1 - \Phi(z)$; interpolering: ta snittet av naboverdiene når eksakt z mangler; `pnorm`/`qnorm` (med og uten mean/sd-argumenter); intervallsannsynligheter; lineærkombinasjoner og summer av uavhengige normale er normale (med E/Var fra regnereglene); **KONTRAKTFESTET `warning`-blokk: N(μ, σ²)-notasjonen bruker varians, men `rnorm(n, mean, sd)` bruker standardavvik — konverteringen $\sigma = \sqrt{\sigma^2}$ drilles BEGGE veier med minst to eksempler og én øvingsoppgave hver vei**; kvantiler baklengs («hvilken verdi overstiges med 10 % sannsynlighet?» → `qnorm`). Eksponensial/uniform nevnes IKKE (aldri testet).
- **Oppgavesjangre:** E. Mønstereksempel: «Porteføljeverdien om tre måneder er normalfordelt med forventning 100 og varians 2. Hva er sannsynligheten for en verdi over 104? Skriv også R-kommandoen som gir svaret — og R-kommandoen som simulerer 10 000 slike porteføljeverdier.»
- **Typiske feil (analysen §6):** Bruke variansen som sd i standardiseringen (glemme roten); skrive `rnorm(n, mu, sigma2)` med varians i sd-plassen — **eller** lese $N(\mu, \sigma^2)$-notasjonen som om andre argument var sd; slurve med retningen ($P(X > x)$ vs. $P(X < x)$); interpolere feil vei i tabellen.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 2.6: Sentralgrenseteoremet og store talls lov

- **id:** `econ2130-2-6` · **number:** 2.6 · **estimatedMinutes:** 55 · **prerequisites:** `econ2130-2-5`
- **kapitteltype:** teori
- **description:** Hvorfor gjennomsnitt blir normale — og når de ikke blir det. CLT skal navngis, tommelfingerregelen er n ≥ 30.
- **Eksamensbelegg:** CLT/normaltilnærming med eksplisitt begrunnelse i **11/13 sett (85 %)** — sjanger E; **CLT skal navngis når den brukes**; kursets tommelfingerregel n ≥ 30 står i en fasit; de beste svarene kommenterer når tilnærmingen er dårlig (lite utvalg, skjev fordeling, opphopning i null). Prioritet: **perfekt**.
- **Innholdskontrakt:** Store talls lov: $\bar{X} \to \mu$ når $n \to \infty$ (konsistens-intuisjonen, kvalitativt — bro til 4.1); CLT: $\bar{X} \approx N(\mu, \sigma^2/n)$ for stort $n$ uansett utgangsfordeling — **navngis alltid ved bruk**, tommelfingerregel $n \geq 30$ for ukjent fordeling; normaltilnærming av binomisk $X \approx N(np, np(1-p))$ og av andel $\hat{p} \approx N(p, p(1-p)/n)$; Poisson-sum tilnærmet normal ved stor $\lambda$; når tilnærmingen svikter: lite utvalg, sterkt skjev fordeling, opphopning i null (inntektsdata) — da trengs mer data før CLT bærer; det konseptuelle R-spørsmålet (testet): hva estimerer `var(replicate(1e4, mean(rnorm(n, mu, sigma))))`? Svar: $\text{Var}(\bar{X})$, sammenlign med teoretisk $\sigma^2/n$; simuleringsillustrasjon av CLT (histogrammer av gjennomsnitt ved voksende n).
- **Oppgavesjangre:** E + L. Mønstereksempel: «Ventetiden hos en støttetelefon har ukjent, høyreskjev fordeling med $\mu = 6$ og $\sigma = 4$ minutter. Hva er den tilnærmede sannsynligheten for at snittet av 64 samtaler overstiger 7 minutter? Begrunn tilnærmingen — og forklar hvorfor svaret ville vært mer usikkert med 12 samtaler.»
- **Typiske feil (analysen §5.10):** Bruke normaltilnærming ukritisk ved skjev fordeling eller lite utvalg; bruke CLT uten å navngi/begrunne den; glemme $\sqrt{n}$-effekten i standardfeilen (standardisere med $\sigma$ i stedet for $\sigma/\sqrt{n}$); blande fordelingen til $X$ og fordelingen til $\bar{X}$.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 2.7: Drill: fordelingsvalg og forutsetningsritualet

- **id:** `econ2130-2-7` · **number:** 2.7 · **estimatedMinutes:** 90 · **prerequisites:** `econ2130-2-4`, `econ2130-2-6`
- **kapitteltype:** drill
- **description:** Sjangerdrill på B + C + E-komplekset: identifiser fordelingen, drøft alle forutsetningene, skaler riktig og regn med komplement-triks.
- **Eksamensbelegg:** Dekker sjangrene B (minst én av binomisk/Poisson i 9/13), C (rate-skalering i alle Poisson-sett, andeler i alle binomisk-sett) og E (11/13) — sammen kjernen i den midterste eksamensoppgaven (35–40 % i prognosen). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser fordelingskandidat fra konteksten (antall av n forsøk → binomisk; hendelser per tid/areal → Poisson; kontinuerlig måling → normal); 2) nevn ALLE forutsetningene for valget; 3) pek på den mest tvilsomme i konteksten; 4) skaler rate/parametre til oppgavens intervall; 5) oversett hendelsen presist (komplement-triks, diskret grense, snitt → total); 6) regn — tabell/R-funksjon, normaltilnærming med CLT navngitt ved behov; 7) konkluder i kontekst. Gjennomregnet eksamenscase med sensor-margnotater. 8–15 oppgaver på eksamensnivå som roterer binomisk/Poisson/normal, med og uten tilnærming, alle med forutsetningsdrøfting og minst tre med rate-/intervallskalering; kontekster nyskrevne (kundehenvendelser, produksjonsfeil, sykkelulykker, håndballmål, medlemsverving).
- **Oppgavesjangre:** B, C, E. Mønstereksempel: «Antall klager til et forsikringsselskap antas Poisson-fordelt med 4,5 klager per dag. (a) Hvilke antakelser bygger dette på, og hvilken er mest tvilsom? (b) Hva er sannsynligheten for over 70 klager i løpet av 14 dager? Begrunn eventuelle tilnærminger.»
- **Typiske feil:** Hele forutsetnings-/skalerings-repertoaret samlet (§5.5, §5.6, §5.10, §5.11): manglende forutsetninger, glemt skalering, ukritisk tilnærming, komplement-slurv.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (se §4).

---

### Del 3 — R, deskriptiv statistikk og simulering

#### Kapittel 3.1: R-verktøykassen: fra vektor til datasett

- **id:** `econ2130-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ2130-2-1`
- **kapitteltype:** teori
- **description:** Hele R-vokabularet eksamen krever — skrevet for hånd uten R foran deg, og kjørt på ekte CSV-data.
- **Eksamensbelegg:** R-kode (skrive/forklare/tolke) i **13/13 sett (100 %)**; 2022–24-regimet krever å skrive kode UTEN R foran seg (pseudokode godtas, syntaksfeil tilgis); 2021/2025-regimet krever å faktisk kjøre analyse på CSV-data. Boka skal trene begge. Prioritet: **perfekt** (vokabularet), verktøykapittel.
- **Innholdskontrakt:** R-vokabularet KONTRAKTFESTES (analysen §6): vektorer med `c`, `rep`, `0:4`; `sample` med `replace=` og `prob=`; `replicate`; `mean` av logisk vektor; `rnorm`/`rpois`/`rbinom`; `dbinom`/`pbinom`/`dpois`/`ppois`/`pnorm`/`qnorm`/`qt`; `read.csv`; `ifelse` for indikatorvariabler; avledede variabler (f.eks. BNP per innbygger); `hist`/`plot`/`boxplot`; `summary`/`quantile`/`sd`/`var`/`aggregate`; `t.test` med `alternative=` og `conf.level=` (kun syntaks her — tolkning i 5.3/6.1); funksjonsdefinisjon og for-løkke som alternativ til `replicate`. To arbeidsmåter demonstreres eksplisitt: (i) skrive koden for hånd med presis verbal forklaring per linje (2022–24-formen — sensor vurderer algoritmen, ikke semikolon); (ii) kjøre på et lite medfølgende eksempeldatasett (2025-formen). Base-R er standard; tidyverse nevnes som godtatt alternativ.
- **Oppgavesjangre:** K + N (grunnlag). Mønstereksempel: «Forklar linje for linje hva denne koden gjør: `d <- read.csv("lonn.csv"); d$hoy <- ifelse(d$utd >= 13, 1, 0); mean(d$lonn[d$hoy == 1])` — og skriv koden som lager et histogram over lønn for hver av de to gruppene.»
- **Typiske feil:** Pugge kode uten å kunne forklare hva hver linje gjør (forklaringen er poenget); blande `dbinom` (punktsannsynlighet) og `pbinom` (kumulativ); glemme `replace = TRUE` der trekket er med tilbakelegging; skrive kode som «ser riktig ut» men beskriver feil algoritme.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 3.2: Deskriptiv statistikk: tolke tall, utskrift og grafer

- **id:** `econ2130-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ2130-3-1`
- **kapitteltype:** teori
- **description:** Persentiler i ord, mean mot median som formsignal og histogramlesing — tolkningspoengene som går igjen i nesten hvert sett.
- **Eksamensbelegg:** Sjanger L i **12/13 sett (92 %)**: lese `summary`/`quantile`/`aggregate`-utskrift og histogram/boksplott/spredningsdiagram; faste tolkningspoeng med krav om begrunnelse («svaret må begrunnes for å gi uttelling»). Prioritet: **kunne** (høyfrekvent og billig).
- **Innholdskontrakt:** Kvartiler/persentiler tolket i ord («90 % av inntektene ligger under …»); P90/P10-forholdet som ulikhetsmål; standardavvik som typisk avvik i samme enhet som dataene; **mean vs. median som symmetri-/skjevhetsindikator** (mean > median → høyreskjev; kvartilavstander som støtteargument); histogramlesing: sentrum, spredning, form — inkl. klassikeren «pek ut histogrammet med samme sentrum men firedobbel varians» (dobbelt standardavvik!); boksplott (median, kvartiler, utliggere) og gruppesammenligning; spredningsdiagram som samvariasjonsverktøy (styrke/retning kvalitativt — tallfestes først i 6.4); «hvilken rad/utskrift tilhører hvilken gruppe?» — begrunn ut fra kontekstkunnskap; `summary`-utskriftens seks tall lest linje for linje. R-integrasjon gjennomgående (alle figurer med base-R-kommandoen vist).
- **Oppgavesjangre:** L. Mønstereksempel: «Utskriften viser mean = 4,70, sd = 0,51 og median = 4,88 for fullføringstidene. Forklar hva standardavviket forteller, og hva forholdet mellom gjennomsnitt og median antyder om fordelingens form.»
- **Typiske feil:** Tolke persentilen baklengs (P90 som «de 90 % beste»); si «gjennomsnittet er 4,7» uten å svare på det som spørres (tolkning); gjette gruppe-tilhørighet uten begrunnelse (gir null); forveksle varians og standardavvik i histogram-sammenligning (firedobbel varians = dobbel sd).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Monte Carlo-mønsteret — og de tre vriene

- **id:** `econ2130-3-3` · **number:** 3.3 · **estimatedMinutes:** 70 · **prerequisites:** `econ2130-3-1`, `econ2130-2-5`
- **kapitteltype:** teori
- **description:** Kursets signaturmetode: utfallsrom → trekk → replicate → mean(logisk) — pluss filtrering, blandingsfordelinger og simulerte kvantiler.
- **Eksamensbelegg:** Monte Carlo som **løsningsmetode i 11/13 sett (85 %)**, kode i 13/13 — kursets mest særpregede sjanger (K). Sensorpraksis: alle ekvivalente framgangsmåter med omtrent riktig svar gir full uttelling, pseudokode godtas, syntaksfeil tilgis — men **null uttelling for teoretisk svar der oppgaven krever simulering**, og antall trekk må være høyt nok. Prioritet: **perfekt**.
- **Innholdskontrakt:** Grunnmønsteret KONTRAKTFESTES som firetrinns-algoritme: 1) definer utfallsrommet som vektor (`rep`, `0:4`, kategorier som `c(rep("A", 13), rep("B", 39))`-typen); 2) trekk med `sample` (med/uten tilbakelegging, evt. `prob=`) eller `rnorm`/`rpois`/`rbinom`; 3) pakk i `replicate(1e5, …)` (størrelsesorden $10^4$–$10^7$; presisjon krever mange trekk); 4) estimer sannsynligheten som `mean()` av en logisk vektor. Deretter de tre vriene (alle testet): (i) **betinget sannsynlighet ved filtrering** — simuler alt, filtrer på betingelsen først, ta andelen blant de filtrerte; (ii) **blandingsfordeling** — sett en andel av utvalget til null (konkurs) og trekk resten fra normalfordelingen; (iii) **simulert forkastningsgrense/kvantil** — trekk differanser under $H_0$ og ta 95 %-kvantilen som kritisk verdi (peker frem mot 5.4s styrkesimulering). For-løkke som likeverdig alternativ til `replicate`. Hvert mønster vises både som kjørbar kode OG som presis verbal algoritme (begge regimer). Store talls lov som grunnen til at metoden virker (kobling 2.6).
- **Oppgavesjangre:** K. Mønstereksempel: «Forklar presist hvordan du i R ville simulert sannsynligheten for at samlet forsinkelse i tre uavhengige byggeprosjekter overstiger seks måneder, når hver forsinkelse er normalfordelt med forventning 1,5 og varians 0,5 måneder² — trinn for trinn, med begrunnelse for antall trekk.»
- **Typiske feil (analysen §5.7):** Svare teoretisk når simulering kreves (null uttelling); for få trekk (upresist estimat); glemme filtreringen ved betingede sannsynligheter (simulere ubetinget); varians/sd-forveksling i `rnorm`-kallet (fellen fra 2.5); beskrive koden så vagt at algoritmen ikke kan rekonstrueres.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 3.4: Drill: R-sjangrene i begge regimer

- **id:** `econ2130-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ2130-3-2`, `econ2130-3-3`
- **kapitteltype:** drill
- **description:** Sjangerdrill på K + L: skrive simuleringer for hånd, tolke utskrift og grafer, og kjøre små analyser — som på eksamen.
- **Eksamensbelegg:** Dekker sjangrene K (11/13 som metode) og L (12/13) samlet; begge regimer dokumentert i live bruk (2022–24: skrive uten R; 2021/2025: kjøre med R). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift for «skriv/forklar kode»-oppgaven: 1) identifiser hva som skal estimeres; 2) velg trekkmekanisme (utfallsromsvektor + `sample`, eller `r*`-funksjon); 3) formuler hendelsen som logisk uttrykk; 4) `replicate` + `mean`; 5) forklar hver linje i ord; 6) kommenter presisjon/antall trekk. Løsningsoppskrift for «tolk utskrift»-oppgaven: les av → oversett til kontekst → begrunn form-/gruppekonklusjoner. Gjennomregnet eksamenscase med sensor-margnotater (algoritme-poeng vs. syntaks). 8–15 oppgaver: 4–6 skrive-kode (inkl. én filtrering, én blanding, én kvantil-vri), 3–4 tolke-utskrift/graf, 2–3 mini-kjøringer på beskrevet CSV-datasett; minst én oppgave der studenten skal FORKLARE en gitt kode (klassikeren `var(replicate(...))` fra 2.6) og én der en gitt kode har en algoritmefeil som skal identifiseres.
- **Oppgavesjangre:** K, L. Mønstereksempel: «I en klasse på 24 er 10 kvinner. Fem trekkes tilfeldig til en komité. Skriv R-kode som simulerer sannsynligheten for at kvinnene er i flertall i komiteen, GITT at minst to kvinner trekkes — og forklar hvorfor filtreringen må skje før andelen beregnes.»
- **Typiske feil:** §5.7-repertoaret + tolkningsslurv fra 3.2; i tillegg: blande de to regimene (skrive `read.csv` der oppgaven gir tallene direkte); løse en «forklar koden»-oppgave ved å omskrive koden i stedet for å forklare hva den estimerer.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (se §4).

---

### Del 4 — Estimering og konfidensintervaller *(prioritet: PERFEKT)*

#### Kapittel 4.1: Estimatorer og utvalgsfordelingen

- **id:** `econ2130-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ2130-2-6`
- **kapitteltype:** teori
- **description:** Estimatoren som stokastisk variabel: utvalgsfordeling, standardfeil og de to egenskapene alt måles mot.
- **Eksamensbelegg:** Estimatoregenskaper i **11/13 sett (85 %)** — sjanger F; inferens-kjeden estimator → SE → KI → test bærer 60–80 % av poengene i hvert sett. Dette kapitlet legger begrepsgrunnlaget. Prioritet: **perfekt**.
- **Innholdskontrakt:** Estimator (stokastisk, funksjon av utvalget — skrives med hatt) vs. estimat (tallet fra ditt utvalg); utvalgsfordelingen som fordelingen estimatoren har over gjentatte utvalg; $E(\bar{X}) = \mu$ og $\text{Var}(\bar{X}) = \sigma^2/n$ (utledet i 2.2 — gjentas som 3-linjers utledning her); **standardfeil** $\text{SE}(\bar{X}) = \sigma/\sqrt{n}$, estimert $S/\sqrt{n}$; $S$ vs. $\sigma$-skillet; forventningsrett ($E(\hat{\theta}) = \theta$) og konsistent (treffer i grensen — store talls lov, kvalitativt) som vurderingskriterier, i den rekkefølgen; CLT gir $\bar{X} \approx N(\mu, \sigma^2/n)$ — begrunnelsen for alt i 4.3/5.1; simuleringsillustrasjon: trekk mange utvalg, se histogrammet av $\bar{X}$ smalne med $n$ (gjenbruk `var(replicate(...))`-innsikten fra 2.6).
- **Oppgavesjangre:** F (grunnlag) + L. Mønstereksempel: «Et byrå spør 400 tilfeldige velgere. Forklar hvorfor andelen som svarer ja er en stokastisk variabel, hva standardfeilen til andelen måler — og hva som skjer med den hvis utvalget firedobles.»
- **Typiske feil:** Blande estimator og estimat (si at «estimatet har en fordeling»); blande $S$ og $\sigma$, eller $\text{SD}(X)$ og $\text{SE}(\bar{X})$; tro at forventningsretthet betyr at estimatet ER riktig; glemme $\sqrt{n}$ i standardfeilen.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 4.2: Forventningsretthet-beviset og plug-in-standardfeil

- **id:** `econ2130-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ2130-4-1`
- **kapitteltype:** teori
- **description:** Den faste øvelsen: vis E(θ̂) = θ med regnereglene, utled variansen, og sett inn estimatet der parameteren mangler.
- **Eksamensbelegg:** Standardbeviset går igjen nesten årlig (del av sjanger F, 11/13): $\hat{p} = X/n$ for binomisk, $\hat{\lambda} = X/n$ for Poisson, differansen mellom gruppegjennomsnitt, og skjeve-utvalg-varianter av typen $\hat{p} = X/(0{,}98n)$; alltid med plug-in-SE som oppfølger; toppkandidatene begrunner også *hvorfor* estimatoren er (tilnærmet) normalfordelt. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT (3–5-linjers regneregel-manipulasjoner, aldri mer):
  $$E(\hat{p}) = E\!\left(\frac{X}{n}\right) = \frac{E(X)}{n} = \frac{np}{n} = p \qquad (\text{binomisk } X)$$
  $$\text{Var}(\hat{p}) = \frac{\text{Var}(X)}{n^2} = \frac{p(1-p)}{n}, \qquad \text{SE}(\hat{p}) = \sqrt{\frac{p(1-p)}{n}}$$
  Tilsvarende for $\hat{\lambda} = X/n$ (Poisson: $\text{SE} = \sqrt{\lambda/n}$) og for differansen $\hat{\beta} = \bar{Y}_B - \bar{Y}_K$ med $\text{SE} = \sqrt{\sigma_B^2/n_B + \sigma_K^2/n_K}$ (uavhengighet påpekes!); varianten med konstant i nevneren ($\hat{p} = X/(cn)$-typen, f.eks. korrigert for testfeil) — konstanten ut av E og ut i annen potens av Var; **plug-in-prinsippet**: når parameteren inngår i variansuttrykket, settes estimatet inn → estimert SE; begrunnelsen for normalitet: CLT (stort n) eller eksakt normalitet — skal nevnes uoppfordret (toppkandidat-markør). R-integrasjon: simulere utvalgsfordelingen til $\hat{p}$ og sjekke at snittet treffer $p$ og spredningen treffer SE.
- **Oppgavesjangre:** F. Mønstereksempel: «I en stikkprøve på $n$ enheter fanger kontrollen bare 95 % av faktiske avvik, slik at antall oppdagede avvik er binomisk med suksess-sannsynlighet $0{,}95q$. Vis at $\hat{q} = X/(0{,}95n)$ er forventningsrett for avviksandelen $q$, og finn estimert standardfeil når $X = 38$ og $n = 400$.»
- **Typiske feil:** Glemme kvadratet på konstanten i variansleddet; «vise» forventningsretthet ved å sette inn tall i stedet for å regne med E-reglene; glemme plug-in-steget (oppgi SE med ukjent parameter); ikke begrunne normaliteten når den brukes videre.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 4.3: Konfidensintervallet: z-vs-t-valget og den presise tolkningen

- **id:** `econ2130-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `econ2130-4-2`
- **kapitteltype:** teori
- **description:** θ̂ ± kritisk verdi · SE — der valget av kritisk verdi er metodesignalet, og tolkningen er et eget poeng med én forbudt formulering.
- **Eksamensbelegg:** KI i **12/13 sett (92 %)** — sjanger G. Metodesignalet: kjent varians/stort utvalg → z; ukjent varians fra lite utvalg → t med $n-1$ frihetsgrader (t-valget ga «ekstra uttelling» uoppfordret i ett sett; z ved $n = 25$ underkjent i et annet); uvante nivåer testes bevisst: 85 %, 90 %, 99 %. **KI-tolkningsfellen er den ENESTE feilen to veiledninger eksplisitt sier at kandidater skal trekkes for.** Prioritet: **perfekt**.
- **Innholdskontrakt:** Standardformen $\hat{\theta} \pm c \cdot \text{SE}(\hat{\theta})$; valget av $c$:
  - kjent $\sigma$ eller stort utvalg → $z_{\alpha/2}$ (1,282/1,645/1,96/2,326/2,576 for 80/90/95/98/99 % — og studenten skal kunne finne ALLE nivåer selv via tabell/`qnorm`, ikke bare 1,96; 85 % er testet);
  - ukjent $\sigma$ estimert fra lite utvalg → $t_{\alpha/2,\,n-1}$ (tabell/`qt`);
  - stort $n$: z godtas som tilnærming til t, **men valget skal begrunnes eksplisitt**.
  **KONTRAKTFESTET `warning`-blokk (KI-tolkningsfellen):** riktig tolkning er «ved gjentatte utvalg vil (nivå) % av slike intervaller dekke den sanne parameteren» — formuleringen «intervallet inneholder parameteren med 95 % sannsynlighet» er FEIL og trekkes eksplisitt for: parameteren er et fast tall, ikke stokastisk; det er intervallet som varierer. Speilvarianten (testet): «dekker intervallet ditt μ?» — kan besvares når data er trukket fra kjent fordeling. KI ↔ test-broen: forkast $H_0\!: \theta = \theta_0$ på nivå $\alpha$ hvis $\theta_0$ ligger utenfor $(1-\alpha)$-intervallet (fullt utnyttet i 5.1); bredde-intuisjonen: høyere nivå → bredere; større $n$ → smalere ($\sqrt{n}$); praktisk vs. statistisk relevans av intervallbredden (toppkandidat-markør: «spennet rommer alt fra trivielt til enormt»). R: `qnorm`/`qt` og KI fra `t.test`-utskrift.
- **Oppgavesjangre:** G. Mønstereksempel: «Basert på 27 elevers testresultater ($\bar{x} = 71{,}2$, $s = 8{,}4$) skal du konstruere et 99 % konfidensintervall for forventet resultat. Forklar hvorfor du bruker t-fordelingen, konstruer intervallet, og gi en presis tolkning av det.»
- **Typiske feil (analysen §5.1, §5.2):** KI-tolkningsfellen (den forbudte formuleringen); z der t kreves (n = 10–27 med estimert varians); umotivert bytte mellom z og t; kunne bare 1,96 (havarere på 85/90/99 %); glemme å tolke intervallet i det hele tatt (tolkningen er et selvstendig poeng).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.4: Estimator-optimering og strekkstoffet

- **id:** `econ2130-4-4` · **number:** 4.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ2130-4-2`
- **kapitteltype:** teori
- **description:** Vektede estimatorer med minimumsvarians, gjennomsnitt mot median i duell, og konsistens uten forventningsretthet — stoffet som skiller A fra B.
- **Eksamensbelegg:** Nivå 3-repertoaret (analysen §7.12): vektet estimator $\hat{\theta} = a \cdot X/n_A + (1-a) \cdot Y/n_B$ — velg $a$ for forventningsretthet, deriver variansen for minimum (2 utsatt-sett; svar: vekt proporsjonalt med utvalgsstørrelsen); gjennomsnitt vs. median via simulering (kriterier i rekkefølge: forventningsretthet, så lav varians); $\exp(\bar{X})$ konsistent men ikke forventningsrett — eksplisitt merket «bare de aller beste» i fasiten, inkl. KI for $\exp(\mu)$ ved å transformere intervallgrensene. Prioritet: **kjenne** (differensierer mot A — plasseres ETTER kjernestoffet, merket «bør kjenne til»).
- **Innholdskontrakt:** Vektet estimator: vis at $E(\hat{\theta}) = \theta$ for alle $a$; $\text{Var}(\hat{\theta}) = a^2 \text{Var}_A + (1-a)^2 \text{Var}_B$ (uavhengighet!), deriver mht. $a$, sett lik null → optimal vekt $\propto$ utvalgsstørrelse (presisjon); duellen gjennomsnitt vs. median: samme simuleringsoppskrift som 3.3 (trekk mange utvalg, sammenlign snitt og spredning av de to estimatorene) — gjennomsnittet vinner på varians ved normaldata; kriteriehierarkiet: forventningsretthet FØRST, deretter varians; konsistens uten forventningsretthet: $\exp(\bar{X})$ treffer $\exp(\mu)$ i grensen men $E(\exp(\bar{X})) \neq \exp(\mu)$ (Jensen-intuisjonen i ord — INGEN formell ulikhet); transformerte KI-grenser $(\exp(L), \exp(U))$ som strekk-teknikk. Derivasjon forutsettes fra VGS (kryssbok-lenke til R1-derivasjonskapittel — verifiser id).
- **Oppgavesjangre:** F (videregående variant). Mønstereksempel: «To uavhengige målekampanjer gir andelsestimater fra $n_A = 900$ og $n_B = 400$ enheter. Vis at $a \hat{p}_A + (1-a)\hat{p}_B$ er forventningsrett for alle $a$, og finn vekten som minimerer variansen. Hvorfor er svaret intuitivt rimelig?»
- **Typiske feil:** Optimere uten å først sjekke forventningsretthet; glemme uavhengigheten i variansuttrykket; påstå at $\exp(\bar{X})$ er forventningsrett «fordi $\bar{X}$ er det»; bruke like vekter «for rettferdighet».
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 4.5: Drill: kjeden estimator → SE → KI

- **id:** `econ2130-4-5` · **number:** 4.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ2130-4-3`, `econ2130-4-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på F + G-kjeden slik den faktisk lenkes i eksamensoppgavene: bevis, standardfeil, intervall, tolkning.
- **Eksamensbelegg:** F (11/13) + G (12/13) opptrer nesten alltid som sammenhengende deloppgave-kjede i settets midtoppgave. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser parameter og foreslått estimator; 2) vis forventningsretthet med E-reglene; 3) utled Var og SE (konstanter i annen potens; uavhengighet påpekt); 4) plug-in for estimert SE; 5) begrunn fordelingen (CLT/eksakt normal/t); 6) velg kritisk verdi med eksplisitt z-vs-t-begrunnelse; 7) konstruer intervallet; 8) tolk med gjentatte-utvalg-formuleringen — ordrett presist; 9) kommenter praktisk relevans hvis naturlig. Gjennomregnet eksamenscase med sensor-margnotater (tolkningspoenget og z-vs-t-poenget markert). 8–15 oppgaver på eksamensnivå som roterer: binomisk andel, Poisson-rate, gjennomsnitt med t (n = 10–30), gjennomsnitt med z (stort n), differanse, korrigert estimator ($X/(cn)$-typen), uvante nivåer (85/90/99 %), én vektet-estimator-oppgave (strekk) og én «dekker intervallet ditt parameteren?»-vri.
- **Oppgavesjangre:** F, G. Mønstereksempel: «En kommune teller $X = 66$ syklister uten hjelm blant $n = 300$ observerte. (a) Foreslå en estimator for hjelmløs-andelen og vis at den er forventningsrett. (b) Finn estimert standardfeil. (c) Konstruer et 90 % konfidensintervall og tolk det presist. (d) En kollega sier intervallet 'inneholder andelen med 90 % sannsynlighet' — hva er galt med formuleringen?»
- **Typiske feil:** Hele §5-repertoaret for estimering/KI samlet: tolkningsfellen, z-vs-t, glemt plug-in, glemt kvadrat på konstanter, manglende fordelingsbegrunnelse.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (se §4).

---

### Del 5 — Hypotesetesting *(prioritet: PERFEKT)*

#### Kapittel 5.1: Testoppskriften: H₀, H₁ og de to metodesignalene

- **id:** `econ2130-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ2130-4-3`
- **kapitteltype:** teori
- **description:** Firetrinnsoppskriften fasitene følger slavisk — med ensidig/tosidig-valget og z-vs-t-valget som poengene sensor alltid ser etter.
- **Eksamensbelegg:** Hypotesetesting i **13/13 sett (100 %) — alltid den tyngste enkeltkomponenten**. Metodesignalene: retningsbestemte spørsmål krever ensidig test — tosidig der konteksten er ensidig gir «noe, men ikke full uttelling» (eksplisitt i to veiledninger); z ved estimert varians og $n = 25$ underkjent; signifikansnivå skal velges *på forhånd* når oppgaven ikke låser det. Prioritet: **perfekt**.
- **Innholdskontrakt:** Firetrinnsoppskriften KONTRAKTFESTES: (1) definer notasjonen (hva er $\mu$? hvilken populasjon?) og sett opp $H_0$/$H_1$ — **retningsbestemt spørsmål («bedre», «mindre», «rikere») → ensidig alternativ**, nøytral «er det forskjell?» → tosidig; (2) velg testobservator og **begrunn fordelingen**: $Z = \frac{\hat{\theta} - \theta_0}{\text{SE}}$ ved kjent varians/stort n, $T$ med $n-1$ frihetsgrader ved estimert varians og lite n; (3) velg signifikansnivå på forhånd (5 % standard hvis fritt — men si det); (4) sammenlign mot kritisk verdi ELLER p-verdi og **konkluder i oppgavens kontekst** («det er tilstrekkelig evidens for at den nye rutinen er raskere») — aldri bare «forkast $H_0$». Én-utvalgs z og t fullt gjennomregnet; forkastningsområde vs. p-verdi som likeverdige beslutningsveier; KI-broen: nullverdi utenfor $(1-\alpha)$-KI ⇔ forkastning (tosidig); «ikke forkast» ≠ «bevist at $H_0$ er sann»; teststatistikkens logikk: hvor mange standardfeil fra nullverdien?
- **Oppgavesjangre:** H. Mønstereksempel: «En ny behandlingsrutine ga gjennomsnittlig liggetid 14,3 døgn ($s = 3{,}1$, $n = 71$) mot 15 døgn med dagens rutine. Formuler hypoteser for at den nye rutinen gir *kortere* liggetid, gjennomfør testen på 5 %-nivå, og forklar hvorfor alternativet er ensidig.»
- **Typiske feil (analysen §5.2, §5.3, §5.12):** Tosidig test på ensidig spørsmål (redusert uttelling); z der t kreves; konkludere uten kontekst («forkaster $H_0$» og ferdig); ikke definere notasjonen; tolke «ikke forkast» som bevis for $H_0$; velge nivået etter å ha sett resultatet.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 5.2: p-verdien — beregning, tolkning og signaturspørsmålet

- **id:** `econ2130-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ2130-5-1`
- **kapitteltype:** teori
- **description:** De tre nivåene eksamen tester: regn p-verdien, tolk den i kontekst — og svar riktig på om den er en stokastisk variabel.
- **Eksamensbelegg:** p-verdi som eksplisitt deloppgave i 6/13 — men i **alle fire 2024–25-sett** (sjanger I, stigende). **Signaturspørsmålet «er p-verdien en stokastisk variabel?» er stilt ordrett tre ganger** (2022 + to utsatt-sett) og utpekes i analysen som ett av de mest sannsynlige tilleggsspørsmålene i V2026. Prioritet: **perfekt**.
- **Innholdskontrakt:** Nivå (i) **beregne**: ensidig $p = \Phi(z)$ eller $1 - \Phi(z)$ (retning!); tosidig $p = 2\Phi(-|z|)$; `pnorm`/`pt` i R; nivå (ii) **tolke** — begge fasit-formuleringene: «sannsynligheten for et minst like ekstremt utfall dersom $H_0$ er sann» og «det laveste signifikansnivået som gir forkastning»; beslutning på flere nivåer samtidig: $p = 0{,}08$ → forkast på 10 %, ikke på 5 %; nivå (iii) **KONTRAKTFESTET signatursvar**: JA — p-verdien er en stokastisk variabel, fordi den er en funksjon av utvalget; et nytt utvalg gir en ny p-verdi (drilles med simuleringsillustrasjon: histogram av p-verdier over mange utvalg, både under $H_0$ og under $H_1$); p-verdien er IKKE «sannsynligheten for at $H_0$ er sann»; kobling til teststyrke (5.4): under $H_1$ hoper p-verdiene seg mot null.
- **Oppgavesjangre:** I. Mønstereksempel: «Testen i forrige deloppgave ga $z = 1{,}74$ mot et ensidig alternativ. Finn p-verdien, gi en tolkning av den i denne sammenhengen, avgjør konklusjonen på både 5 %- og 10 %-nivå — og ta stilling til om p-verdien selv er en stokastisk variabel.»
- **Typiske feil:** Tolke p-verdien som $P(H_0 \text{ sann})$; glemme dobling (eller doble feilaktig) mellom ensidig og tosidig; svare «nei» på signaturspørsmålet (eller «ja» uten begrunnelsen — funksjonen-av-utvalget-argumentet er poenget); regne $\Phi(z)$ i feil hale.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 5.3: To-utvalgsapparatet — kursets egentlige samvariasjonstest

- **id:** `econ2130-5-3` · **number:** 5.3 · **estimatedMinutes:** 65 · **prerequisites:** `econ2130-5-1`
- **kapitteltype:** teori
- **description:** Pooled t, separate varianser, to andeler og lineærkombinasjoner — verktøyet ECON2130 bruker der andre kurs kjører regresjon.
- **Eksamensbelegg:** To-utvalgs-sammenligning i **11/13 sett (85 %)** — sjanger H-varianter. Dette er kursets faktiske måte å teste samvariasjon på: en gruppeforskjell på en indikatorvariabel i stedet for regresjon (som har 0/13). Variantene som er testet: pooled t (2 sett), separate varianser/z (3 sett), to andeler med felles $\hat{p}$ under $H_0$ (1 sett), lineærkombinasjonstest $H_0\!: \mu_m = 0{,}9\mu_k$ (1 sett), Welch/`t.test` i R-årene. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ BEHERSKES I ALLE VARIANTER: (1) **pooled t** ved antatt felles varians:
  $$S^2 = \frac{(n_1 - 1)S_1^2 + (n_0 - 1)S_0^2}{n_1 + n_0 - 2}, \qquad T = \frac{\bar{X}_1 - \bar{X}_0}{S\sqrt{1/n_1 + 1/n_0}} \sim t_{n_1 + n_0 - 2}$$
  (2) **separate varianser** med z ved store utvalg: $\text{SE} = \sqrt{S_1^2/n_1 + S_0^2/n_0}$; (3) **to andeler** med felles $\hat{p}$ under $H_0$: $\hat{p} = \frac{X_1 + X_0}{n_1 + n_0}$ i SE-uttrykket; (4) **lineærkombinasjonstest**: $H_0\!: \mu_m = c \cdot \mu_k$ testes med $\bar{X}_m - c\bar{X}_k$ og $\text{SE} = \sqrt{\sigma_m^2/n_m + c^2\sigma_k^2/n_k}$ (konstanten i annen potens!); (5) **Welch/`t.test`** som R-standardutskrift — hele utskriften forklares linje for linje (t, df, p-verdi, KI, gruppegjennomsnitt), og det kontraktfestes at Welch godtas fullt der oppgaven kjøres i R; valget mellom variantene begrunnes (felles varians rimelig? store utvalg?); uavhengighet MELLOM gruppene påpekes alltid; rammefortellingen: «har gruppe A høyere nivå enn gruppe B?» er kursets samvariasjonsspørsmål — indikatorvariabel + to-utvalgstest (bro til 6.1).
- **Oppgavesjangre:** H (to-utvalgsvarianter). Mønstereksempel: «120 deltakere med kurs og 140 uten fikk målt testskår ($\bar{x}_1 = 68{,}4$, $s_1 = 9{,}8$; $\bar{x}_0 = 65{,}1$, $s_0 = 10{,}3$). Test på 5 %-nivå om kursdeltakerne skårer *høyere*, med begrunnet valg av testobservator — og forklar hva en `t.test`-utskrift av de samme dataene ville vist.»
- **Typiske feil:** Bruke pooled der variansene åpenbart er ulike (eller omvendt) uten begrunnelse; glemme felles $\hat{p}$ under $H_0$ i andelstesten; glemme $c^2$ i lineærkombinasjons-SE; feil frihetsgrader for pooled t; behandle parede data som to uavhengige utvalg (nevnes kort som kontrast).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.4: Type I- og type II-feil, teststyrke og replikasjonsregnestykket

- **id:** `econ2130-5-4` · **number:** 5.4 · **estimatedMinutes:** 55 · **prerequisites:** `econ2130-5-2`, `econ2130-3-3`
- **kapitteltype:** teori
- **description:** Feiltypene definert i kontekst, styrke regnet analytisk og simulert — og Bayes-regnestykket som viser at signifikant ikke betyr sant.
- **Eksamensbelegg:** Type I/II og teststyrke i 7/13 sett (54 %), stigende i 2024–25; kravene: definer BEGGE feiltypene i oppgavens kontekst (ikke bare abstrakt), $P(\text{type I}) = \alpha$, drøft hvilken feil som er mest alvorlig gitt kostnadene; styrke analytisk (testet: 0,977 og 0,577 i to sett — nyskriv tallene) eller **simulert i R** (`rpois` + `t.test` i løkke, styrke ≈ 0,8 i ett sett, ≈ 0,5 «tolk resultatet» i et annet); Bayes-vrien fra 2021: 2 % sanne effekter, 80 % styrke, 5 % nivå → ~25 % av signifikante funn er ekte. Prioritet: **kunne** (stigende — nær perfekt).
- **Innholdskontrakt:** Type I = forkaste sann $H_0$ ($P = \alpha$ — valgt, ikke skjebne); type II = beholde gal $H_0$ ($P = \beta$, avhenger av sann parameter); **teststyrke** $= 1 - \beta = P(\text{forkaste} \mid \text{sann verdi under } H_1)$; avveiningen: lavere $\alpha$ → høyere $\beta$; alvorlighetsdrøfting i kontekst (dyr medisin vs. helsegevinst — hvilken feil koster mest?); styrke analytisk: finn forkastningsgrensen under $H_0$, regn sannsynligheten for å havne der under $H_1$ (forskyvning av testobservatoren); styrke som funksjon av $n$, $\alpha$ og effektstørrelse; **styrkesimulering** (kontraktfestet oppskrift): trekk data under $H_1$, kjør testen, gjenta 1000+ ganger med `replicate`/løkke, andelen forkastninger er styrken — inkl. tolkning av et lavt tall («testen fanger bare halvparten av reelle effekter av denne størrelsen»); **replikasjonsregnestykket** (Bayes fra 1.2 på forskningsresultater): med basisrate 2 % sanne effekter, styrke 80 % og nivå 5 % er $P(\text{ekte} \mid \text{signifikant}) \approx 0{,}25$ — regnes med tenkt-populasjon-tabellen; broen: statistisk signifikans ≠ sann effekt ≠ praktisk viktig effekt.
- **Oppgavesjangre:** J (+ K for simuleringen). Mønstereksempel: «Et tilsyn tester $H_0\!: \lambda = 3{,}5$ ulykker per måned mot $H_1\!: \lambda > 3{,}5$ på 1 %-nivå med 50 månedsobservasjoner. Beskriv hvordan du simulerer teststyrken når sann rate er 4, og forklar hva det forteller om testen hvis simuleringen gir 0,55. Hvilken feiltype bør veie tyngst her — og hvorfor?»
- **Typiske feil:** Definere feiltypene bare abstrakt (kontekst kreves); blande $\alpha$ og p-verdien; tro at styrken er $1 - \alpha$; simulere under $H_0$ i stedet for $H_1$ (det gir nivået, ikke styrken); tolke «25 %-regnestykket» som feil ved testen i stedet for konsekvens av lav basisrate.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.5: Drill: hypotesetest i alle varianter

- **id:** `econ2130-5-5` · **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** `econ2130-5-3`, `econ2130-5-4`
- **kapitteltype:** drill
- **description:** Sjangerdrill på hele testapparatet: én- og to-utvalg, andeler, lineærkombinasjoner, p-verdi-spørsmål og styrke — på eksamensnivå.
- **Eksamensbelegg:** Dekker sjangrene H (13/13 — tyngst), I (alle 2024–25-sett) og J (7/13) samlet: testkomplekset er ryggraden som bærer 60–80 % av poengene. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift = firetrinnsoppskriften fra 5.1 utvidet med variantvalg-tre: én eller to grupper? andel eller gjennomsnitt? kjent/estimert varians, stort/lite utvalg? felles varians rimelig? retningsbestemt spørsmål? Gjennomregnet eksamenscase med sensor-margnotater (metodesignal-poengene markert: ensidig-valget, t-valget, kontekst-konklusjonen). 8–15 oppgaver på eksamensnivå som roterer: én-utvalgs z og t, pooled to-utvalg, separate varianser, to andeler, lineærkombinasjon ($\mu_A = 0{,}8\mu_B$-typen), test avgjort direkte fra KI, p-verdi-oppfølgere (beregn/tolk/stokastisk-spørsmålet), én analytisk styrkeberegning og én styrkesimulering; alle med nyskrevne kontekster (medikament, pendlertid, frafall, energiforbruk, kundetilfredshet) og krav om konklusjon i kontekst.
- **Oppgavesjangre:** H, I, J. Mønstereksempel: «(a) Sett opp hypoteser for påstanden 'andelen som fullfører er høyere med den nye oppfølgingen' (to grupper: 84 av 200 mot 62 av 190). (b) Gjennomfør testen på 5 %-nivå med felles andel under $H_0$. (c) Finn p-verdien og tolk den. (d) Er p-verdien en stokastisk variabel? (e) Hvilken feiltype gjør dere hvis oppfølgingen egentlig ikke virker — og hva er sannsynligheten for den?»
- **Typiske feil:** Hele test-feilkatalogen samlet (§5.2, §5.3, §5.12): ensidig/tosidig, z-vs-t, glemt felles $\hat{p}$, konklusjon uten kontekst, p-verdi-mistolkninger.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (se §4).

---

### Del 6 — Dataanalyse, design og kausalitet

#### Kapittel 6.1: Den store dataanalyseoppgaven: fra CSV til konklusjon

- **id:** `econ2130-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `econ2130-5-3`, `econ2130-3-2`
- **kapitteltype:** teori
- **description:** 2025-regimets storoppgave som sammenhengende arbeidsflyt: last inn, utforsk, lag indikator, test, tolk — og ta forbeholdene.
- **Eksamensbelegg:** Sjanger N i 4/13 (2021 + begge 2025-sett + utsatt 2021) — **men det er nåtidsregimet**, og oppgaven veier 40–45 % av settet; prognosen for V2026 har den som tredje og største oppgave. Fast krav: `t.test`-utskriften (Welch er standard og godtas) skal FORKLARES for full uttelling; R-svar og håndregning gir lik uttelling der begge er mulige. Prioritet: **kunne** (2025-formens hovedoppgave — i praksis perfekt for V2026).
- **Innholdskontrakt:** Arbeidsflyten KONTRAKTFESTES som syvtrinns-oppskrift, demonstrert ende-til-ende på ett oppdiktet CSV-datasett (f.eks. arbeidsmarkedsdata med utdanning/inntekt/kjønn — nyskrevne tall): 1) `read.csv` + `summary`/`head` for å bli kjent; 2) deskriptiv utforskning med `hist`/`boxplot` og tolkning (3.2-repertoaret); 3) avledede variabler: `ifelse`-indikator (f.eks. minst 13 års utdanning), rater (per innbygger); 4) gruppesammenligning deskriptivt (`aggregate`, boksplott per gruppe); 5) `t.test` med riktig `alternative=` og `conf.level=` — utskriften forklart linje for linje; 6) KI-tolkning med gjentatte-utvalg-formuleringen (4.3); 7) forbeholdene: er utvalget representativt? kan forskjellen tolkes kausalt? (bro til 6.2–6.3 — kausalitetsforbeholdet AVSLUTTER alltid analysen). Begge svarformer vises parallelt der mulig (R-utskrift OG håndregning på oppgitte oppsummeringstall). Håndteringen «manglende mellomsvar → anta en verdi eksplisitt» nevnes som eksamensstrategi.
- **Oppgavesjangre:** N. Mønstereksempel: «Datasettet inntekt.csv har variablene aarslonn, utdanningsaar og alder for 3 000 personer. Lag en indikator for minst 13 års utdanning, sammenlign lønnsfordelingene grafisk, test på 1 %-nivå om gruppen med lang utdanning tjener mer, og gjør rede for forutsetningene og for hva analysen IKKE kan si om årsak.»
- **Typiske feil:** Kjøre testen uten deskriptiv start (poengene ligger i hele flyten); ikke forklare `t.test`-utskriften (bare lime den inn); glemme `alternative=` ved retningsbestemt spørsmål; konkludere kausalt (trekk — se 6.3); glemme representativitetsforbeholdet.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 6.2: Seleksjonsskjevhet og representativitet

- **id:** `econ2130-6-2` · **number:** 6.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ2130-4-1`
- **kapitteltype:** teori
- **description:** Når utvalget ikke ligner populasjonen, hjelper ingen statistisk test — drøftingsspråket som gir sikre poeng.
- **Eksamensbelegg:** Del av sjanger M (7/13, 54 %): (omskrevne) gjengangere: andelen positive blant testede symptomatiske er ikke befolkningsandelen; 22 frivillige av 151 studenter er ikke et tilfeldig utvalg — «da hjelper ingen statistisk test»; frivillig deltakelse kan være korrelert med utfallet. Toppkandidat-markør: se at skjevt utvalg gjør testen verdiløs *uansett utfall*. Prioritet: **kunne**.
- **Innholdskontrakt:** Populasjon vs. utvalg vs. rammen det trekkes fra; tilfeldig utvalg som forutsetningen bak ALT i Del 4–5 (SE-formlene antar det); **seleksjonsskjevhet**: systematisk forskjell mellom hvem som er med og hvem analysen skal si noe om — mekanismen skal alltid konkretiseres (hvem velger seg inn/ut, og hvorfor henger det sammen med utfallet?); typetilfellene: frivillig deltakelse, selv-seleksjon til testing, ikke-respons, «survivorship»; hvorfor mer data ikke hjelper mot skjevhet (skjevheten krymper ikke med $n$ — presisjonen øker rundt feil verdi); hva som KAN redde analysen: sannsynlighetsutvalg, kjent trekkmekanisme; drøftingsformatet: pek på mekanismen → retningen på skjevheten (hvis mulig) → konsekvensen for konklusjonen. Verbal sjanger — ingen utledninger; presise begreper kreves.
- **Oppgavesjangre:** M. Mønstereksempel: «En høyskole evaluerer et frivillig mattekurs: de 25 som møtte opp, skårer signifikant bedre enn de 130 som ikke deltok. Forklar hvorfor testresultatet ikke viser at kurset virker, og hva som kjennetegner et opplegg som kunne vist det.»
- **Typiske feil (analysen §5.8):** Behandle et selektert utvalg som representativt og regne videre; tro at signifikans reparerer skjevhet; nevne «bias» uten å konkretisere mekanismen; foreslå «større utvalg» som løsning på seleksjonsproblemet.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.3: Kausalitet: kontrafaktisk logikk, konfundering og RCT

- **id:** `econ2130-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ2130-6-2`
- **kapitteltype:** teori
- **description:** Hvorfor korrelasjon ikke er kausalitet — sagt med mekanismer, ikke slagord — og randomisering som gullstandarden.
- **Eksamensbelegg:** Kausalitet/design i 7/13 (54 %) — **og i begge 2025-settene**; (omskrevne) eksamenscaser: kontrafaktisk resonnement om bosted og utfall, «blir et land rikere av å bli medlem av en organisasjon?», demokrati og BNP, utdanning og inntekt, skatteeksperiment som RCT. Fasitene krever at omvendt kausalitet/konfundering/spuriøsitet nevnes KONKRET; pensumprofilen er Imai-tradisjonen (kvantitativ samfunnsvitenskap). Prioritet: **kunne** (fast innslag i nåtidsregimet).
- **Innholdskontrakt:** **Kontrafaktisk logikk**: effekten for en enhet = faktisk utfall minus det uobserverte kontrafaktiske utfallet — fundamentalproblemet er at vi aldri ser begge; løsningen er sammenlignbare grupper; **de tre konkurrerende forklaringene** som ALLTID skal vurderes ved en observert samvariasjon: (1) X → Y, (2) omvendt kausalitet Y → X, (3) felles bakenforliggende årsak/konfunderende variabel (+ ren spuriøsitet/tilfeldighet) — hver med konkret mekanisme i konteksten, ikke som slagord; seleksjonsskjevhet (6.2) som kausalitetens tvilling: de som «velger behandlingen» er annerledes i utgangspunktet; **randomisering (RCT)** som gullstandard: tilfeldig tildeling gjør gruppene sammenlignbare i forventning, så differansen estimerer effekten (differanse-estimatoren fra 4.2/5.3 får kausal tolkning); «as-if random» som svakere slektning; designdrøfting: hvordan ville et eksperiment sett ut, og hva er etisk/praktisk mulig?; to-utvalgstesten fra 5.3 er den statistiske motoren i RCT-analysen (bro). Verbalt kapittel med presise begreper — ingen formler utover differansen.
- **Oppgavesjangre:** M. Mønstereksempel: «En analyse viser at medlemsland i en handelsorganisasjon har signifikant høyere BNP per innbygger enn ikke-medlemmer. Kan vi konkludere med at et søkerland vil bli rikere av medlemskap? Gjør rede for minst to alternative forklaringer, og skisser et design som kunne identifisert effekten.»
- **Typiske feil (analysen §5.9):** Kausal tolkning av observasjonsdata (politikk-konklusjoner av gruppeforskjeller); nevne «korrelasjon er ikke kausalitet» uten konkret mekanisme; glemme omvendt kausalitet som kandidat; tro at signifikans styrker den kausale tolkningen; blande konfundering og seleksjon uten å skille dem.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 6.4: Korrelasjon og regresjon — lett versjon

- **id:** `econ2130-6-4` · **number:** 6.4 · **estimatedMinutes:** 35 · **prerequisites:** `econ2130-6-3`, `econ2130-3-2`
- **kapitteltype:** teori
- **description:** Tolke cor og lese en regresjonslinje — bevisst lettvekter: aldri tungt testet, men står i emnebeskrivelsen.
- **Eksamensbelegg:** Korrelasjon testet ÉN gang (V2025: beregne/tolke `cor` og avvise kausal tolkning — 1/13); **enkel lineær regresjon 0/13 på åtte år** til tross for emnebeskrivelsen. Analysen (§7.17): dekkes lett, primært som tolkning; emnebeskrivelsens regresjonspunkt gjør et comeback *mulig* — men invester deretter. Prioritet: **kjenne** (eksplisitt merket «bør kjenne til» i kapitlet).
- **Innholdskontrakt:** Korrelasjonskoeffisienten $r$: tolkning (styrke, retning, KUN lineær samvariasjon), verdiområde $[-1, 1]$, `cor(x, y)` i R, kobling til spredningsdiagrammet (3.2) — INGEN kovariansformel-regning på data (aldri testet); $r$ er symmetrisk og enhetsfri; korrelasjon ≠ kausalitet med 6.3-repertoaret som begrunnelse (dette VAR eksamensspørsmålet i 2025); enkel lineær regresjon kun kvalitativt: linjen $y = a + bx$ som beskrivelse av sammenhengen, $b$ tolket som forventet endring i $y$ per enhet $x$ (deskriptivt, ikke kausalt!), lese en `lm`-utskrift (koeffisientene — ikke inferensdelen); når to-utvalgstesten (5.3) og regresjon svarer på samme spørsmål (indikator-x). Ingen minste kvadraters utledning, ingen $R^2$-teori, ingen regresjonsinferens. Kapitlet er kort med vilje og sier det eksplisitt.
- **Oppgavesjangre:** L + M. Mønstereksempel: «`cor(utdanningsaar, aarslonn)` gir 0,43. Tolk tallet — og forklar hvorfor det ikke viser at ett år ekstra utdanning *gir* høyere lønn.»
- **Typiske feil:** Tolke $r$ kausalt; tolke $r = 0$ som «ingen sammenheng» (bare ingen *lineær*); tro at høy $|r|$ betyr bratt linje (styrke ≠ helning); bruke tid på regresjonsformler eksamen aldri har spurt om.
- **Quiz: 10 · Flashcards: 15**

**Prøve-kvote Del 6:** 4 prøver (se §4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Drill: metodesignalene og signatursvarene

- **id:** `econ2130-7-1` · **number:** 7.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–6
- **kapitteltype:** drill
- **description:** Presisjonstrening på de korte konseptuelle spørsmålene som avgjør uttellingen: z eller t, ensidig eller tosidig, ordrett KI-tolkning og p-verdiens natur.
- **Eksamensbelegg:** Samler metodesignal- og konseptspørsmålene som ifølge analysen bærer poengene på tvers av alle sjangre: z-vs-t-valget (belønnet uoppfordret), ensidig/tosidig (redusert uttelling ved feil), KI-tolkningen (eneste eksplisitte trekk-feil), «er p-verdien stokastisk?» (stilt ordrett tre ganger), forutsetningsritualene (selvstendige poeng i nesten hvert sett), $N(\mu, \sigma^2)$-vs-`rnorm`-konverteringen (testet direkte), praktisk vs. statistisk signifikans (gir «et pluss»). Prioritet: **perfekt**.
- **Innholdskontrakt:** Drillbank organisert som spørsmål–fasitformulering-par der fasitsvarene skrives i EKSAKT eksamensklar form (2–4 setninger), hvert med henvisning til teorikapitlet: z-vs-t-beslutningstreet; ensidig/tosidig-valget fra spørsmålsformuleringen; KI-tolkningen (riktig OG den forbudte varianten med forklaring på hvorfor den er gal); p-verdiens to tolkninger + stokastisk-svaret; binomisk-ritualet (3 krav) og Poisson-ritualet (3 krav) med «pek på den svakeste»; CLT-vilkårene og n ≥ 30; uavhengighetens rolle i varianssummer; $N(\mu, \sigma^2)$ ↔ `rnorm(n, mean, sd)`-konvertering begge veier; «ikke forkast ≠ bevist»; statistisk vs. praktisk/økonomisk signifikans; «signifikant funn ≠ sann effekt»-regnestykket i kortform; simulering vs. teori — når kreves hva. Formatmal: definisjon + begrunnelse/eksempel, aldri mer enn nødvendig.
- **Oppgavesjangre:** Kortsvar-varianter av G, H, I, B, E, K. Mønstereksempel: «Forklar på høyst tre setninger hvorfor du bruker t-fordelingen med 26 frihetsgrader — og ikke normalfordelingen — i konfidensintervallet fra forrige deloppgave.»
- **Typiske feil:** Hele feilkatalogen i §5 i kortform — drillen finnes nettopp fordi disse formuleringene må sitte ordrett presist under tidspress.
- **Quiz: 20 · Flashcards: 35**

#### Kapittel 7.2: Øvingseksamen 1: 2022–24-malen (uten R-tilgang)

- **id:** `econ2130-7-2` · **number:** 7.2 · **estimatedMinutes:** 240 · **prerequisites:** `econ2130-7-1`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i digital-skoleeksamen-formen: R-utskrifter og kritiske verdier gitt i oppgaven, simuleringskode skrives for hånd.
- **Eksamensbelegg/miks:** Speiler 2022–24-regimet: 3 oppgaver vektet 40/35/25, 14 deloppgaver, ferdige `qnorm`/`qt`/`pnorm`-verdier oppgitt i teksten, ingen R-tilgang. **Oppgave 1 (40 %):** anvendt sannsynlighet + fordeling (betinget/Bayes-åpning i kontekst → binomisk med forutsetningsdrøfting → normaltilnærming med CLT navngitt → E/Var av lineærkombinasjon). **Oppgave 2 (35 %):** inferens-kjeden (forventningsretthet-bevis → plug-in-SE → 99 %-KI med t → ensidig test → p-verdi med tolkning → test avgjort fra KI). **Oppgave 3 (25 %):** R uten R (tolke gitt `summary`-utskrift og histogrammer → forklare en gitt simuleringskode → skrive simuleringskode for en blandingsfordeling → type I/II-drøfting i kontekst). Alle kontekster og tall nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave med `tip`-notat om vekt og tidsbudsjett (96/84/60 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2: 2025-regimet med CSV-datasett

- **id:** `econ2130-7-3` · **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** `econ2130-7-2`
- **kapitteltype:** øvingseksamen
- **description:** Komplett sett i nåtidsformen: abstrakt åpning, Poisson-inferens og stor hands-on dataanalyse på medfølgende CSV.
- **Eksamensbelegg/miks:** Speiler V2025-malen: 3 oppgaver vektet 20/40/40. **Oppgave 1 (20 %):** rendyrket abstrakt hendelsesalgebra i symbolform (1.5-malen: gitt tre størrelser → snitt/marginal/union/Bayes/uavhengighetsdom). **Oppgave 2 (40 %):** Poisson-basert inferens (forutsetningsdrøfting med «pek på den svakeste» → rate-skalering og sum → normaltilnærming → $\hat{\lambda}$ forventningsrett + SE → KI på uvant nivå (90 %) → ensidig test → «er p-verdien en stokastisk variabel?»). **Oppgave 3 (40 %):** hands-on CSV-analyse (beskrevet datasett med variabelliste; `read.csv` → deskriptiv start med tolkningskrav → `ifelse`-indikator → boksplott per gruppe → `t.test` med utskrift forklart linje for linje → KI-tolkning → kausalitets- og representativitetsforbehold). Boka leverer datasettbeskrivelse + gjengitt R-utskrift slik at oppgaven kan løses både «tørt» og ved faktisk kjøring. Alle tall/kontekster nyskrevne. Løsningsforslag som A-besvarelse med `tip` om vekting og tidsbudsjett (48/96/96 min); R-løsning og håndregning vist parallelt der begge er mulige.
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3: V2026-prognosen

- **id:** `econ2130-7-4` · **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** `econ2130-7-3`
- **kapitteltype:** øvingseksamen
- **description:** Prognose-settet: binomisk inferens, styrkesimulering og CSV-analyse med RCT-vri — de mest sannsynlige tilleggsspørsmålene inkludert.
- **Eksamensbelegg/miks:** Bygger på analysens V2026-prognose (§7): 3 oppgaver 15/40/45. **Oppgave 1 (15 %):** kort sannsynlighetsoppgave med kombinatorikk-åpning (symmetriargument) + betinget sannsynlighet. **Oppgave 2 (40 %):** binomisk-basert inferens (7.3 tok Poisson — begge fordelingene skal være dekket på tvers av settene): forutsetningsdrøfting → komplement-triks med diskret grense → andel med normaltilnærming → KI (85 %! uvant nivå) → tosidig vs. ensidig-refleksjon → **teststyrke ved simulering** (skriv koden + tolk et oppgitt resultat). **Oppgave 3 (45 %):** CSV-analyse av et simulert RCT (skatteeksperiment-typen, nyskrevet kontekst: tilfeldig tildelt påminnelsesbrev): deskriptiv start → to andeler med felles $\hat{p}$ under $H_0$ → `t.test`/andelstest-utskrift forklart → KI → **kausal tolkning DENNE gangen forsvarlig — begrunn hvorfor randomiseringen tillater det** (kontrasten til 6.3-forbeholdene er selve læringspoenget) → praktisk vs. statistisk signifikans. Løsningsforslag som A-besvarelse med `tip` om delpoeng; tidsbudsjett 36/96/108 min.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.5 | 20+25+15+10+10 = **80** | 20+20+15+10+10 = **75** |
| 2 | 2.1–2.7 | 15+25+20+20+20+15+10 = **125** | 15+20+15+15+20+15+10 = **110** |
| 3 | 3.1–3.4 | 15+20+25+10 = **70** | 15+20+20+10 = **65** |
| 4 | 4.1–4.5 | 15+20+25+10+10 = **80** | 15+15+25+10+10 = **75** |
| 5 | 5.1–5.5 | 25+20+20+15+10 = **90** | 20+15+20+15+10 = **80** |
| 6 | 6.1–6.4 | 20+15+15+10 = **60** | 15+15+15+15 = **60** |
| 7 | 7.1–7.4 | 20+5+5+5 = **35** | 35+0+0+0 = **35** |
| **Sum** | **35 kap.** | **550 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 2 + 4 + 5 (inferens-ryggraden + fordelingene)
bærer 295 av 550 quiz; KI-kapitlet (4.3) og testoppskriften (5.1) er
enkeltkapitlene med høyest kvote utenom drillene.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
og poengfordeling. Omfang i minutter. Prøvene samles i ett prøvekapittel per
del (`econ2130-<del>-prove`, chapterNumber `<del>.P`) ved wiring — bygges av
samme agent som delen.

**Del 1 — Sannsynlighetsregning**
1. Prøve 1.A (30 min): Regneregler og Venn — komplement/addisjon/snitt i kontekst (kap. 1.1).
2. Prøve 1.B (40 min): Betinget/total/Bayes — diagnosetest-case med base rate-kommentar (kap. 1.2).
3. Prøve 1.C (30 min): Uavhengighetssjekk med tall + kombinatorikk-åpning med symmetriargument (kap. 1.3–1.4).
4. Prøve 1.D (45 min): Full abstrakt 2025-mal-oppgave i ren symbolform + kontekstvariant, eksamensnivå (sjanger A komplett).

**Del 2 — Stokastiske variabler og fordelinger**
1. Prøve 2.A (35 min): Diskret fordeling fra tabell — E/Var/SD + betinget forventning (kap. 2.1) + lineærkombinasjon med uavhengighetspoeng (kap. 2.2).
2. Prøve 2.B (40 min): Binomisk med fullt forutsetningsrituale, komplement-triks og andel (kap. 2.3).
3. Prøve 2.C (40 min): Poisson med rate-skalering, sum-egenskap og snitt-til-total-oversettelse (kap. 2.4).
4. Prøve 2.D (50 min): Normal + CLT på eksamensnivå: standardisering, `rnorm`-konvertering, normaltilnærming av binomisk med begrunnelse og svakhetskommentar (kap. 2.5–2.6, sjanger E komplett).

**Del 3 — R, deskriptiv statistikk og simulering**
1. Prøve 3.A (30 min): Tolke `summary`-/`aggregate`-utskrift og histogrammer — persentiler i ord, mean vs. median, gruppe-identifikasjon med begrunnelse (kap. 3.2).
2. Prøve 3.B (40 min): Skrive simuleringskode for hånd — grunnmønsteret + forklaring per linje (kap. 3.1, 3.3).
3. Prøve 3.C (40 min): Simuleringsvriene — betinget filtrering og blandingsfordeling; identifiser feilen i en gitt kode (kap. 3.3).
4. Prøve 3.D (50 min): Hands-on minianalyse på beskrevet CSV: innlasting, indikator, plott, gruppesnitt — 2025-formens førstedel (kap. 3.1–3.4, sjanger N-forberedelse).

**Del 4 — Estimering og konfidensintervaller**
1. Prøve 4.A (35 min): Forventningsretthet-bevis + plug-in-SE for andel og rate (kap. 4.1–4.2).
2. Prøve 4.B (40 min): KI med z-vs-t-valg og presis tolkning — inkl. den forbudte formuleringen som skal avvises (kap. 4.3).
3. Prøve 4.C (35 min): Uvante nivåer (85/99 %) + KI→test-broen + «dekker intervallet ditt parameteren?»-vrien (kap. 4.3).
4. Prøve 4.D (55 min): Full F+G-kjede på eksamensnivå + vektet-estimator-strekk med variansminimering (kap. 4.2–4.5).

**Del 5 — Hypotesetesting**
1. Prøve 5.A (40 min): Én-utvalgstest etter firetrinnsoppskriften — ensidig-valg og z-vs-t-valg begrunnet (kap. 5.1).
2. Prøve 5.B (35 min): p-verdi: beregn begge retninger, tolk, beslutt på flere nivåer, signaturspørsmålet (kap. 5.2).
3. Prøve 5.C (45 min): To-utvalg: pooled t OG to andeler med felles p̂; `t.test`-utskrift forklart (kap. 5.3).
4. Prøve 5.D (50 min): Type I/II i kontekst + analytisk styrke + styrkesimulering med tolkning + replikasjonsregnestykket (kap. 5.4, sjanger J komplett).

**Del 6 — Dataanalyse, design og kausalitet**
1. Prøve 6.A (45 min): Arbeidsflyt-prøve: beskrevet CSV → deskriptiv → indikator → t.test → KI-tolkning (kap. 6.1).
2. Prøve 6.B (30 min): Seleksjons-/representativitetsdrøfting — frivillig-utvalg-case med mekanisme og retning (kap. 6.2).
3. Prøve 6.C (35 min): Kausalitetsdrøfting — observasjonsdata-case med tre alternative forklaringer + RCT-skisse (kap. 6.3).
4. Prøve 6.D (60 min): Full dataanalyseprøve på eksamensnivå med kausalitetshale og korrelasjonsspørsmål (kap. 6.1–6.4, sjanger N + M komplett).

### Øvingseksamener (3 komplette sett — se kap. 7.2–7.4)

| Sett | Regime det speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | 2022–24: digital skoleeksamen UTEN R-tilgang, kritiske verdier gitt | Sannsynlighet + fordeling 40 % · inferens-kjede 35 % · R-for-hånd + tolkning 25 % |
| Øvingseksamen 2 (kap. 7.3) | 2025: skoleeksamen MED CSV-datasett og R | Abstrakt hendelsesalgebra 20 % · Poisson-inferens 40 % · hands-on CSV-analyse 40 % |
| Øvingseksamen 3 (kap. 7.4) | V2026-prognosen (2025-formen videreført) | Kort sannsynlighet 15 % · binomisk inferens + styrkesimulering 40 % · CSV-RCT-analyse 45 % |

Til sammen dekker de tre settene samtlige 14 sjangre (A–N) minst én gang,
begge fordelingene (binomisk og Poisson), begge R-regimene og begge
kausalitets-situasjonene (observasjonsdata med forbehold; RCT med forsvarlig
kausal tolkning).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formhistorikken og 2025-regimet, tre-oppgave-malen,
   vektingene og V2026-prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen som tre lesenivåer:
   perfekt (testoppskriften 5.1/5.5, KI-kapitlet 4.3,
   forventningsretthet-beviset 4.2, Monte Carlo 3.3, forutsetningsritualet
   2.3–2.4/2.7, regnereglene 2.2, sannsynlighetskjernen 1.2–1.3), kunne
   (normalregning, p-verdi-teorien, to-utvalg, styrke, deskriptiv verktøykasse,
   datakritikk, CSV-arbeidsflyten), kjenne (estimator-optimering, betinget
   forventning, simultanfordeling, kombinatorikk, korrelasjon/regresjon,
   økonomi-innpakningen).
3. **Sjangerguiden** — de 14 oppgavetypene A–N med løsningsoppskriftene fra
   drillkapitlene (1.5, 2.7, 3.4, 4.5, 5.5, 7.1) i kortform.
4. **Sensorreglene** — de seks metareglene + karakternivåene + toppkandidat-
   markørene fra kap. 0.1.
5. **Feilkatalogen** — de 12 typiske feilene samlet (KI-fellen, z-vs-t,
   ensidig/tosidig, uavhengighet uten sjekk, glemte forutsetninger, glemt
   rate-skalering, teori-der-simulering-kreves, selektert utvalg, kausal
   mistolkning, ukritisk CLT, komplement-slurv, matematikk uten ord), hver med
   henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — sannsynlighetsalgebra (1.1–1.2),
   fordelingene med E/Var (2.3–2.5), regnereglene (2.2), CLT-formene (2.6),
   inferens-kjeden (4.2–4.3, 5.1, 5.3) og R-vokabularet (3.1) på én side, med
   markering «utlede aktivt» (forventningsretthet, Var($\bar{X}$), Bayes) vs.
   «kun bruke» (resten) — og N(μ,σ²)/rnorm-konverteringen i egen rute.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 → 4 → 5 (kjernen i denne rekkefølgen — avhengighetene er
   reelle), Del 6 parallelt med 5, prøver etter hver del, øvingseksamenene de
   tre siste ukene under tidspress (240 min med vektstyrt tidsbudsjett; kjør
   7.3 med faktisk R åpen for å simulere 2025-formen).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ2130` med alle 35
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI`; `sectionNames` fra §2-tabellen.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N og frekvenstallene som
   resten refererer til.
3. **Kjernen i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 → Del 4 → Del 5
   (avhengighetene er reelle: fordelingene trenger sannsynlighet, simulering
   trenger fordelingene, inferens trenger CLT og verktøyene).
4. Del 6 (trenger 5.3 og 3.2) → Del 7 (øvingseksamenene til slutt — de
   gjenbruker alt).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert
   som kapitlene ferdigstilles; prøvene (§4) i prøvekapitler
   `econ2130-<del>-prove` etter hver temadel.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (escape `"` i norske sitattegn; generer helst via `json.dump`);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med `\\`-escaping i JSON;
      konsistent notasjon ($\hat{p}$, $\bar{X}$, $S$ vs. $\sigma$, $H_0/H_1$,
      $t_{\alpha/2,\,n-1}$).
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ2130-filer — forbudte
      termer: «unbiased» (skal være forventningsrett), «AD-AS»-aktige
      importfeil, eksponensialfordeling/uniform fordeling som pensumstoff,
      momentgenererende funksjoner; påkrevd: $N(\mu, \sigma^2)$ med varians
      som andre argument OVERALT, `rnorm` alltid med sd — grep etter
      `rnorm`-forekomster og verifiser at argumentet er standardavvik (eller
      at konverteringen vises eksplisitt).
- [ ] **R-kode**: all kode er base-R og kjørbar i prinsippet (syntaktisk
      gyldig); hvert kodeblokk-eksempel har forklaring i ord; pseudokode-
      alternativet nevnt der sjangeren er «skriv kode for hånd».
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med
      frekvenstallene fra dette skjelettet), Forkunnskaper-blokk med
      verifiserte lenker, `collapsible` Symbol- og formelliste (per
      delkapittel — forklar ALLE symboler brukt i kapitlet), Typiske
      feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med
      `solution` + `hints` og eksplisitt sjangerforankring, repetisjons-
      `collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert
      case + 8–15 oppgaver.
- [ ] **Kontraktfestede blokker på plass**: KI-tolkningsfellen som `warning` i
      4.3 (og gjentatt i 4.5/7.1); N(μ,σ²)-vs-`rnorm` som `warning` i 2.5 (og
      i hvert kapittel som bruker begge); signatursvaret om p-verdien i 5.2;
      forutsetningsritualene i 2.3/2.4; «teori der simulering kreves = null» i
      3.3.
- [ ] **Kvotesum ≥ 550 quiz og ≥ 510 flashcards** per kvotetabellen
      (kontrollsummér mot §3-tabellen — kvoter er minimum, aldri underskrid).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener som sammen
      dekker sjangrene A–N, begge fordelingene og begge R-regimene.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster,
      egne datasett; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger
      og skal varieres videre, ikke kopieres ordrett inn som oppgaver);
      pensumlitteratur (Imai, Yakir) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og
      narrativ-ruter (200 + kapittelspesifikk streng), jf. lærdommen om
      `getChapterMeta`.
