# Bokskjelett: SØK1004 Statistikk for økonomer — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (≈15 lesbare oppgavesett/fasiter V2010–H2025 inkl. 7
> sensorveiledninger og 3 fulle løsningsforslag lest grundig). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Emnet har et lite
> **begrepsdrøftingslag** (definisjonsoppgaven og den verbale tolkningen av
> p-verdi/KI/korrelasjon); det håndteres innenfor regnefag-malen med en
> begrepsdrill (sjanger A) og eksplisitte «tolk resultatet»-krav, ikke som egen
> drøftingsdel. Alle mønstereksempler i skjelettet er omskrivninger; forfatteren
> skal variere dem videre (egne tall, egne kontekster), aldri kopiere ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok1004` |
| Tittel | **SØK1004 Statistikk for økonomer** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (håndregning + tabelloppslag) med lite begrepsdrøftingslag (definisjonsoppgave + verbal tolkning) |
| Antall kapitler | **33** (1 eksamenskart + 3 deskriptiv + 4 sannsynlighet + 5 fordelinger + 3 estimering/KI + 6 hypotesetesting + 3 samvariasjon/regresjon + 3 kji/F/krysstabell + 5 eksamenstrening) |
| Estimert totaltid | **1 800 min ≈ 30 timer** |
| Quiz totalt | **666** (krav ≥500) |
| Flashcards totalt | **558** (krav ≥500) |

**Pitch (ett avsnitt):** SØK1004-eksamen er **inferens-kjeden i konkret kontekst**,
år etter år: estimator → standardfeil → konfidensintervall → hypotesetest →
p-verdi, alltid pakket inn i en business-/økonomikontekst (startlønn, akseptsampling,
kredittkortgjeld, dommere, iskrembar-salg) med en enkel kalkulator og en trykt/digital
normal-, t- og F-tabell. Boka er bygget som en **firetrinns hypotesetest-maskin**
(definer $H_0/H_1$ → velg testobservator og begrunn fordelingen → sammenlign mot
kritisk verdi/p-verdi → konkluder i kontekst) med de fem byggeklossene som mater den:
**normalfordelingsregning** med standardisering, tabelloppslag og invers (~95 %),
**betinget sannsynlighet/Bayes/total sannsynlighet** (~85 %), **konfidensintervall**
med korrekt $z$-vs-$t$-valg og ordrett presis tolkning (~85 %), **binomisk fordeling**
med normaltilnærming (~80 %), og **hypotesetesting** i alle varianter (~100 %). I
tillegg driller boka tre temaer som **skiller SØK1004 fra UiOs ECON2130**: **enkel
lineær regresjon** (minste kvadraters linje, tolkning av stigningstall, $R^2$ —
testes jevnlig her, aldri der), **kjikvadrat og F-test for to varianser** (klassisk
business-statistikk, NTNU-signatur), og et bredt **deskriptivt begrepslag** (Simpsons
paradoks, Chebyshevs teorem, trimmet gjennomsnitt, matched samples). Metodesignalene
sensor ser etter er faste: **$z$-vs-$t$** ($t$ med $n-1$ frihetsgrader ved lite
utvalg/estimert varians), **ensidig vs. tosidig** (retningsbestemt spørsmål →
ensidig), og at **hvert tall tolkes** — p-verdien, KI-et og regresjonskoeffisienten
oversettes til ord.

**Kritisk søsterverk- og avgrensningsregel (gjelder HELE boka):** SØK1004 (NTNU) og
**ECON2130 Statistikk 1** (UiO) dekker **samme kjernepensum** (sannsynlighet,
fordelinger, hele inferens-kjeden) på omtrent samme nivå, men er nesten motsatte i
**verktøy og eksamensstil**. Se `/Users/danielandreasaubert/eksamenssett/Skolesaga/docs/hoyskole-boker/econ2130/EKSAMENSANALYSE.md`
for det felles laget. Arbeidsdelingen (full tabell i §7) er:

- **ECON2130 er R-basert med simulering, Monte Carlo, kausalitet/seleksjon og
  «er p-verdien stokastisk?»-drøfting.** SØK1004 har **ingen programmering** på
  nåtidsregimet (Stata var et korona-engangstilfelle 2021) og lite eksplisitt
  kausalitetsdrøfting. Boka skal derfor **IKKE bygge ut** R/simulering, Monte
  Carlo, teststyrke-ved-simulering eller Poisson-fordeling (sentral i ECON2130,
  fraværende i SØK1004-arkivet).
- **SØK1004 tester enkel regresjon, kjikvadrat og F-test for to varianser — det
  gjør ECON2130 aldri.** Disse får egne deler her (Del 6, Del 7).
- **Der kjernepensumet er felles** (sannsynlighet, fordelinger, KI, hypotesetest,
  p-verdi), kryssrefererer boka til ECON2130 med markdown-lenker
  (`[tittel](/bok/econ2130/<chapterId>)`) i Forkunnskaper-blokkene der det er
  naturlig — men SØK1004 skriver ut sin **egen** versjon i **håndregnings-/
  tabelloppslags-form** (business-statistikk à la Anderson–Sweeney–Williams),
  ikke ECON2130s R-tolkningsform. SØK1004 er den selvstendige verten for
  kjernepensumet; ECON2130-lenkene er valgfrie utdypninger, ikke forkunnskaper
  boka mangler.

**Kritisk notasjonsregel (gjelder HELE boka)** — NTNU-notasjonen fra arkivet skal
brukes nøyaktig, ikke lærebok-alternativer:

- **Deskriptivt:** utvalgsgjennomsnitt $\bar{X}$, utvalgsvarians/-standardavvik
  $s^2$ / $s$, populasjon $\mu$ / $\sigma^2$ / $\sigma$; median; frekvensfordeling.
- **Sannsynlighet:** $P(A)$, $P(A\cap B)$, $P(A\cup B)$, $P(A\mid B)$, komplement
  $A^c$; total sannsynlighet og Bayes; kombinatorikk $\binom{n}{k}$.
- **Fordelinger:** $X \sim N(\mu, \sigma^2)$ (**varians som andre argument** —
  men merk eksplisitt at enkelte sett skriver $N(\mu,\sigma)$ med *standardavvik*,
  som V2020; boka presiserer konvensjonen ved første bruk). Binomisk med
  suksesssannsynlighet $\pi$ (evt. $p$), $n$ forsøk; $E = n\pi$, $\text{Var} =
  n\pi(1-\pi)$. Standardisering $Z = (X-\mu)/\sigma$.
- **Inferens:** estimatorer med hatt $\hat{p}$, $\hat{\theta}$; standardfeil $SE$;
  testobservator $TS$; kritisk verdi; signifikansnivå $\alpha$; $H_0$/$H_1$ (også
  $H_a$); frihetsgrader $n-1$.
- **Samvariasjon:** $\text{Cov}(X,Y)$, $\text{Corr}(X,Y)=\rho$ (populasjon) / $r$
  (utvalg); regresjonslinje $\hat{y} = b_0 + b_1 x$; forklaringsgrad $R^2$.
- **Varianstester:** $F = S_1^2/S_2^2 \sim F(n_1-1, n_2-1)$; kji-kvadrat $\chi^2$
  med $(r-1)(c-1)$ frihetsgrader.

**Kritisk metoderegel (gjelder HELE boka):** Fire faste sensorkrav gjelder overalt
(analysens §4): **(a) riktig oppsett + riktig fordeling + konklusjon i kontekst** —
korrekt hypoteseoppsett, begrunnet valg av testobservator/fordeling, og en
konklusjon formulert i oppgavens virkelighet (ikke bare «forkast $H_0$»); **(b) tall
skal tolkes** — korrelasjon, regresjonskoeffisient, p-verdi og KI oversettes til
ord (ren regning uten tolkning gir ikke full uttelling); **(c) $z$-vs-$t$ og
ensidig/tosidig er metodesignalene** — $t$ ved lite utvalg/estimert varians
premieres, feil retning på testen trekker; **(d) forutsetninger skal nevnes** —
tilfeldig/representativt utvalg, normalitet, uavhengighet, binomisk-vilkårene. **KI
skal tolkes som gjentatte-utvalg** («ved gjentatte utvalg dekker X % av slike
intervaller den sanne parameteren»), aldri «parameteren ligger i intervallet med
X % sannsynlighet» (den vanligste sensorfeilen, §5.1).

**Hjelpemiddelregel (nåtid = kode D):** Nyere eksamen (H2025 eksplisitt) er **kode
D**: kun enkel kalkulator, formelsamling som **digital ressurs** i settet, ingen
egne notater. Boka må derfor ha en **selvforsynt formelsamling** (Del 8) og drille
**håndregning med tabelloppslag** (normal, $t$, $F$, $\chi^2$). Ingen programvare
forventes.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): deskriptivt begrepslag og
sannsynlighet i bunn, deretter fordelinger, så inferens-kjeden (estimering/KI →
hypotesetest → p-verdi), og til slutt samvariasjon/regresjon og varianstestene før
eksamenstreningen. Frekvensen styrer *omfanget* — hypotesetesting (~100 %) og
normalfordeling (~95 %) er de reneste gjengangerne og får flest kapitler.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn inferens-kjeden, sjangerkatalogen A–L, kode D og avgrensningen mot ECON2130. |
| 1 | Deskriptiv statistikk og målenivåer | 3 | Deskriptiv statistikk ~75 % + begrepsoppgaven ~70 % (fast liste inkl. Chebyshev/Simpsons paradoks/trimmet snitt/matched samples). SØK1004-unikt bredt begrepslag. Nivå 2 → 3 kapitler (fundament + begrepsbank). |
| 2 | Sannsynlighet, Bayes og kombinatorikk | 4 | Betinget sannsynlighet/Bayes/total sannsynlighet ~85 % + kombinatorikk ~25 %. Nivå 1-byggekloss for fordelinger og inferens → 4 kapitler. |
| 3 | Stokastiske variable og fordelinger | 5 | Diskret variabel ~70 %, binomisk ~80 %, normalfordeling ~95 %, CLT ~35 %, regneregler E/Var+lineærkombinasjoner ~50 %. Selve byggeklossene for inferens → nivå 1 → 5 kapitler + drill. |
| 4 | Estimering og konfidensintervall | 3 | KI + tolkning ~85 %, punkt-/intervallestimat, utvalgsstørrelse ~40 %. Halve inferens-kjeden → nivå 1 → 3 kapitler + drill. |
| 5 | Hypotesetesting | 6 | ~100 % — selve emnet. Én/to utvalg, snitt/andel/varians, $z/t$, ensidig/tosidig, p-verdi. Nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 6 | Samvariasjon: kovarians, korrelasjon og regresjon | 3 | Kovarians/korrelasjon ~60 %, enkel regresjon ~45 % (**unik mot ECON2130**), korrelasjonstest. Nivå 2 → 2 teorikapitler + drill. |
| 7 | Kjikvadrat, F-test og krysstabell | 3 | Kjikvadrat/F-test varianser ~40 % (**NTNU-signatur, fraværende i ECON2130**), krysstabell/simultanfordeling ~35 %. Nivå 3 → 2 teorikapitler + drill. |
| 8 | Eksamenstrening | 5 | Begrepsdrill (sjanger A, ~15 gjengangere), flervalgsberedskap (H2022/H2023), selvforsynt formelsamling + tabellbruk, og 2 komplette øvingseksamener som speiler både det klassiske regimet og Falch-/kode-D-malen. |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger fire drillkapitler
   (3.6 fordelinger, 4.3 KI, 5.6 hypotesetest, 6.3 regresjon, 7.3 varianstester)
   inne i sine egne deler, fordi disse ER de gjennomgående eksamensoppgavene og må
   drilles umiddelbart etter teorien. Del 8 beholder begrepsdrillen (sjanger A),
   flervalgsberedskapen, formelsamlingen og de to øvingseksamenene.
2. DNA-en er ren regnefag. SØK1004 har et **lite begrepsdrøftingslag** —
   definisjonsoppgaven (sjanger A) og den verbale tolkningen av p-verdi/KI/
   korrelasjon. Dette håndteres innenfor regnefag-malen: begrepskapitlet 1.3 og
   begrepsdrillen 8.1 gir presise, tolkningsforankrede definisjoner, og «tolk
   resultatet»-kravet er innbakt i hvert inferenskapittel — ikke en egen
   drøftingsdel etter `DNA-drofting.md`.
3. Del 1 (deskriptiv/begreper) kommer *før* sannsynlighet selv om sannsynlighet er
   mer «grunnleggende», fordi den deskriptive begrepsoppgaven er selvstendig og lav
   inngangsterskel (bygger ikke på sannsynlighet), og fordi den etablerer
   notasjonen ($\bar{X}$, $s$, median, frekvensfordeling) og begrepsdisiplinen
   («tolk median vs. snitt») som resten forutsetter.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** begrepsforklaring/definisjon, **B** betinget sannsynlighet/Bayes/hendelsesalgebra,
**C** diskret stokastisk variabel + regneregler, **D** binomisk fordeling (+ normaltilnærming),
**E** normalfordeling (standardisering + invers), **F** konfidensintervall (+ tolkning + $z$-vs-$t$),
**G** hypotesetest (kjernesjangeren), **H** p-verdi, **I** kovarians/korrelasjon/enkel regresjon,
**J** krysstabell/simultanfordeling/kjikvadrat, **K** utvalgsstørrelse, **L** flervalg.
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK1004

- **id:** `sok1004-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, inferens-kjeden som ryggrad, temafrekvensene, sjangerkatalogen A–L, kode-D-regimet og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ≈15 sett + 7 sensorveiledninger. Skal gjengi: (i) **formen**: skriftlig skoleeksamen 4 timer (09–13), karakter A–F, 7,5 studiepoeng, digital i Inspera; håndregning på ark med sjusifret kode per oppgave; **hjelpemiddel-regimeskifte** — eldre sett kode C (matematisk formelsamling Sydsæter/Strøm/Berck + godkjent kalkulator, statistiske tabeller vedlagt), korona 2020–2021 kode A (alle hjelpemidler; V2021 krevde Stata på oppgave 1 — engangsavvik), nåtid **kode D** (kun enkel kalkulator, formelsamling som digital ressurs, tabeller ligger digitalt i settet); enkelte år engelsk oppgavetekst (2021–2022, V2024, H2024-fasit). (ii) **Strukturmalen**: 4–7 oppgaver som dekker hele bredden, vekt oppgitt per oppgave; typisk én begrepsoppgave (10–20 %), flere sannsynlighets-/fordelingsoppgaver, én eller flere inferensoppgaver (KI + test + p-verdi + evt. utvalgsstørrelse), ofte en kovarians/korrelasjon-/regresjonsoppgave og/eller en kjikvadrat/varianstest; H2022/H2023 hadde en stor flervalgsblokk (~20 %). (iii) **Temafrekvens-tabellen** (fra analysen §2): hypotesetesting ~100 %, normalfordeling ~95 %, betinget sannsynlighet/Bayes ~85 %, KI + tolkning ~85 %, binomisk ~80 %, deskriptiv statistikk ~75 %, begrepsoppgave ~70 %, diskret variabel ~70 %, p-verdi ~65 %, kovarians/korrelasjon ~60 %, to-utvalg ~55 %, regneregler E/Var ~50 %, enkel regresjon ~45 %, utvalgsstørrelse ~40 %, kjikvadrat/F-test ~40 %, krysstabell ~35 %, CLT ~35 %, kombinatorikk ~25 %, type I/II-feil/Chebyshev/Simpsons paradoks/trimmet snitt ~25 %. (iv) At oppgavene alltid pakkes i **business-/økonomikontekst** (startlønn USA, akseptsampling, kredittkortgjeld, eiendomsmeglerlønn, dommere, iskrembar, hotellrangering) men at metoden alltid er den samme. (v) **Sensorens metaregler** (§4): riktig oppsett + riktig fordeling + konklusjon i kontekst; tall skal tolkes; $z$-vs-$t$ og ensidig/tosidig er metodesignalene; forutsetninger skal nevnes; KI tolkes som gjentatte-utvalg; litt regneunøyaktighet i tabelloppslag tolereres, men metoden må være riktig; alternative korrekte framgangsmåter godtas. (vi) **Prognose for neste eksamen** (§6): 4–7 oppgaver som dekker bredden — én begrepsoppgave (10 %), én/to sannsynlighetsoppgaver (Bayes + binomisk/normal), én stor inferensoppgave (KI + hypotesetest + p-verdi + evt. utvalgsstørrelse), og minst én av {korrelasjon/regresjon, krysstabell/kjikvadrat, F-test varianser}; kode D som nåtidsregime.
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med typisk plassering: begrepsoppgaven (A) er ofte oppgave 1; sannsynlighetsblokken bygges av B/C; fordelingsblokken av D/E; inferensblokken av F/G/H (+ K utvalgsstørrelse); og minst én av I (samvariasjon/regresjon) eller J (krysstabell/kjikvadrat) roterer inn. **Inferens-kjeden** (estimator → $SE$ → KI → test → p-verdi) presenteres som bokas ryggrad. Avslutt med **avgrensningen** mot ECON2130 (hva som IKKE er SØK1004-pensum: R/simulering/Monte Carlo, Poisson, teststyrke-ved-simulering, «er p-verdien stokastisk?»; hva som er SØK1004-unikt: enkel regresjon, kjikvadrat, F-test for to varianser, det brede deskriptive begrepslaget) og **leseplanen**: Del 1–3 er byggeklossene, Del 4–5 er inferens-kjeden (bokas tyngdepunkt), Del 6–7 er de differensierende temaene, Del 8 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt 4 timer og en typisk 5-oppgaversmal 10/25/25/20/20 — sett opp tidsbudsjett» og «hvilke fem byggeklosser mater hypotesetest-maskinen, og i hvilke kapitler drilles de?».
- **Typiske feil:** Metafeilene: bruke tid på regning uten å tolke tallet; glemme at kode D betyr at man ikke kan ta med egne notater (formelsamlingen må sitte); tro at Stata/R er del av nåtidsregimet; ikke lese om oppgaven spør retningsbestemt (ensidig) eller ikke.
- **Quiz: 16 · Flashcards: 14** (eksamensform, kode-regimene, inferens-kjeden, temafrekvenser, sjangerkatalog A–L, metaregler, avgrensning mot ECON2130)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Deskriptiv statistikk og målenivåer *(prioritet: KUNNE — begrepsoppgaven + fundament)*

#### Kapittel 1.1: Målenivåer, frekvensfordelinger og datatyper

- **id:** `sok1004-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** Kategoriske/ordinale/intervall-/forholdstalls-data, frekvens- og kumulative frekvensfordelinger, histogram vs. stolpediagram — grunnvokabularet som begrepsoppgaven og all senere metode forutsetter.
- **Eksamensbelegg:** Kategoriske/ordinale data, kumulativ frekvensfordeling og frekvensfordeling er faste begrepsgjengangere (sjanger A, ~70 %); histogram-vs-stolpediagram er en H2022-flervalgsfelle (sjanger L). Prioritet: **kunne** (fundament + begrepspoeng).
- **Innholdskontrakt:** **Målenivåer:** kategoriske (nominale), ordinale, intervall og forholdstall — med kriteriet for hvert (kan man rangere? er avstander meningsfulle? finnes ekte null?). **Frekvensfordeling** = tabell over hvor ofte hver verdi/klasse forekommer; **relativ** og **kumulativ frekvensfordeling**. **Grafiske fremstillinger:** histogram (kontinuerlige/grupperte data, arealet teller) vs. stolpediagram (kategoriske data, mellomrom mellom stolpene) — presiser forskjellen (flervalgsfelle). Legg grunnlaget for at metodevalget avhenger av datatypen (kji-kvadrat på kategoriske, snitt/varians på intervall/forholdstall).
- **Oppgavesjangre:** A + L-fundament. Mønstereksempel (A): «Forklar forskjellen på kategoriske og ordinale data, og gi et økonomisk eksempel på hver.»
- **Typiske feil:** Blande histogram og stolpediagram (§5-flervalg); tro at ordinale data tillater meningsfull gjennomsnittsberegning; forveksle relativ og kumulativ frekvens; behandle kategoriske data som om avstander var meningsfulle.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: Sentraltendens og spredning

- **id:** `sok1004-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Gjennomsnitt, median og typetall; varians, standardavvik og variasjonsbredde — regnet fra rådata og frekvenstabell, med tolkningen av median vs. snitt ved uteliggere.
- **Eksamensbelegg:** Deskriptiv statistikk (snitt/median/varians/standardavvik + tolkning) ~75 %, ofte fra rådata eller frekvenstabell; «kommentere at uteliggere trekker snittet» er en fast H2024-sensorfelle (iskrembar). Prioritet: **kunne**.
- **Innholdskontrakt:** **Gjennomsnitt** $\bar{X} = \frac{1}{n}\sum x_i$, **median** (midtverdi ved sortert data), **typetall**. **Utvalgsvarians** $s^2 = \frac{1}{n-1}\sum(x_i - \bar{X})^2$ (understrek $n-1$ i nevneren for utvalg — Bessels korreksjon) og **standardavvik** $s = \sqrt{s^2}$; **populasjonsvarians** $\sigma^2$ med $n$ i nevneren; variasjonsbredde. Regn alle fra både rådata og frekvenstabell ($\bar{X} = \sum x_i f_i / \sum f_i$). **Tolkning (sensorkrav):** median er robust mot uteliggere, snittet ikke — ved høyre-skjeve data (få høye verdier) ligger snittet over medianen; kommenter alltid dette når data har uteliggere. Kort om **variasjonskoeffisient** $s/\bar{X}$ som benevningsuavhengig spredningsmål.
- **Oppgavesjangre:** A + deskriptiv byggekloss. Mønstereksempel: «Ukesalget ved en iskrembar var (…). Finn gjennomsnitt og median, og forklar hvorfor de er forskjellige.»
- **Typiske feil:** Bruke $n$ i stedet for $n-1$ i utvalgsvarians; ikke kommentere at uteliggere trekker snittet bort fra medianen (§5.7); glemme å sortere før medianen; regne varians fra frekvenstabell uten å vekte med frekvensene.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.3: Begrepsbanken: definisjonsoppgaven

- **id:** `sok1004-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-1-2`
- **Kapitteltype:** teori (begrepsbank)
- **description:** Den faste gjengangerlisten av begreper som definisjonsoppgaven trekker fra — presist definert på 2–3 setninger hver, med formel der naturlig. Bokas flashcard-motor.
- **Eksamensbelegg:** Begrepsoppgaven ~70 %, «gratis» poeng hvis den faste listen sitter (opp til 2 poeng per begrep). Sensor honorerer kjernen, ikke ordrett gjengivelse (§4.3). Chebyshev, Simpsons paradoks, trimmet snitt og matched samples er små, men gjengangende og lette å glemme (§5). Prioritet: **kunne** (høy flashcard-tetthet).
- **Innholdskontrakt:** Presise 2–3-setningers definisjoner av **hele gjengangerlisten**: punktestimat, intervallestimat, kovarians, korrelasjon(-skoeffisient), kumulativ frekvensfordeling, type I-feil, type II-feil, **Chebyshevs teorem** (minst $1 - 1/k^2$ av observasjonene innenfor $k$ standardavvik — for $k=2$ minst 75 %), **sentralgrenseteoremet** (snittet av mange uavhengige variable er tilnærmet normalfordelt uansett underliggende fordeling), **Simpsons paradoks** (en sammenheng som snur når data aggregeres/deles på en tredje variabel), **trimmet gjennomsnitt** (snitt etter å ha fjernet en andel ekstremverdier i hver ende — robust mot uteliggere), **matched sample-design** (parvise/avhengige observasjoner, f.eks. før/etter samme enhet — analyseres på differansene), statistisk inferens, frekvensfordeling. Hvert begrep får: definisjon + kort formel/betingelse der naturlig + ett økonomisk mikroeksempel. Dette kapitlet er **flashcard-banken** for hele boka (begrep ↔ presis definisjon).
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort hva Chebyshevs teorem sier, og hvilken minste andel av observasjonene som ligger innenfor to standardavvik.»
- **Typiske feil:** Definere for vagt/ordrikt (sensor vil ha kjernen på 2–3 setninger); forveksle type I- og type II-feil; glemme Chebyshevs $k$-avhengighet; blande kovarians (retning, skalaavhengig) og korrelasjon (styrke, standardisert); ikke huske matched-samples-poenget (analyser differansene).
- **Quiz: 22 · Flashcards: 40**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper — målenivåer, frekvens/kumulativ frekvens, Chebyshev, Simpsons paradoks, trimmet snitt, matched samples, sjanger A; 1.B deskriptiv statistikk fra rådata — snitt/median/varians/standardavvik med tolkning av uteliggere; 1.C deskriptiv statistikk fra frekvenstabell + histogram vs. stolpediagram, sjanger A+L; 1.D blandet begreps- og deskriptivoppgave på eksamensnivå).

---

### Del 2 — Sannsynlighet, Bayes og kombinatorikk *(prioritet: PERFEKT/KUNNE — byggekloss for inferens)*

#### Kapittel 2.1: Sannsynlighetsregning og hendelsesalgebra

- **id:** `sok1004-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Utfallsrom, hendelser, addisjonsregelen, komplement og uavhengighet — sannsynlighetsapparatet som Bayes, fordelingene og inferensen bygger på.
- **Eksamensbelegg:** Hendelsesalgebra (addisjonsregel, komplement) inngår i sannsynlighetsoppgavene som forløper til Bayes (sjanger B, ~85 %). Prioritet: **perfekt** (byggekloss).
- **Innholdskontrakt:** Utfallsrom og hendelser; **addisjonsregelen** $P(A\cup B) = P(A) + P(B) - P(A\cap B)$ (og for disjunkte: uten overlappsleddet); **komplementregelen** $P(A^c) = 1 - P(A)$; **multiplikasjonsregelen** $P(A\cap B) = P(A)\,P(B\mid A)$; **uavhengighet** ($P(A\cap B) = P(A)P(B)$, dvs. $P(A\mid B) = P(A)$). Understrek at $P(A\ge k) = 1 - P(A \le k-1)$ (komplement for diskrete variable, en gjengangerfelle). Konkrete økonomikontekster (kredittkort, forsikring).
- **Oppgavesjangre:** B-fundament. Mønstereksempel: «$P(A) = 0{,}4$, $P(B) = 0{,}5$, $P(A\cap B) = 0{,}2$. Finn $P(A\cup B)$ og avgjør om $A$ og $B$ er uavhengige.»
- **Typiske feil:** Glemme overlappsleddet i addisjonsregelen; forveksle disjunkte og uavhengige hendelser; regnefeil i $P(X\ge k)$ (glem ikke komplementet, §5.12); anta uavhengighet uten å sjekke.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 2.2: Betinget sannsynlighet og total sannsynlighet

- **id:** `sok1004-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-2-1`
- **Kapitteltype:** teori
- **description:** Betinget sannsynlighet $P(A\mid B)$ og loven om total sannsynlighet — broen fra hendelsesalgebra til Bayes.
- **Eksamensbelegg:** Del av den ~85 % sannsynlighetsblokken (sjanger B); total sannsynlighet er alltid mellomsteget før Bayes (diagnose-/testeksempler, Sol-testen V2020). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Betinget sannsynlighet** $P(A\mid B) = P(A\cap B)/P(B)$; tolk som «sannsynlighet for $A$ i den delen av utfallsrommet der $B$ inntreffer». **Loven om total sannsynlighet** $P(D) = P(D\mid S)P(S) + P(D\mid S^c)P(S^c)$ (og den generelle versjonen med en partisjon $\{S_1,\dots,S_k\}$). Illustrer med **sannsynlighetstre** og **tabell**. Diagnose-/testcase: sensitivitet $P(+\mid \text{syk})$, spesifisitet $P(-\mid \text{frisk})$, prevalens $P(\text{syk})$ → $P(+)$.
- **Oppgavesjangre:** B. Mønstereksempel: «En test er positiv i 80 % av tilfellene når personen er syk, og korrekt negativ i 95 % ellers. 3 % er syke. Finn $P(\text{positiv})$.»
- **Typiske feil:** Regne $P(A\cap B)$ når $P(A\mid B)$ etterspørres (glemme å dele på $P(B)$); glemme det andre leddet i total sannsynlighet ($D\mid S^c$); blande sensitivitet og spesifisitet; sette opp treet feil vei.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 2.3: Bayes' teorem

- **id:** `sok1004-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-2-2`
- **Kapitteltype:** teori
- **description:** Bayes' teorem — snu betingingen fra $P(D\mid S)$ til $P(S\mid D)$ — den mest gjengangende sannsynlighetssjangeren, alltid i diagnose-/testkontekst.
- **Eksamensbelegg:** Bayes-oppgaver er faste (V2020 Sol-testen, H2023) og bærer sannsynlighetsblokkens vanskeligste del (~85 % samlet). «Bayes feil vei» er en sentral sensorfelle (§5.6). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Bayes' teorem** $P(S\mid D) = \frac{P(S)P(D\mid S)}{P(D)}$ der $P(D)$ finnes ved total sannsynlighet (kap. 2.2). Steg-for-steg oppskrift: (1) identifiser hva som er gitt ($P(S)$, $P(D\mid S)$, $P(D\mid S^c)$) og hva som etterspørres ($P(S\mid D)$); (2) regn nevneren $P(D)$ ved total sannsynlighet; (3) sett inn i Bayes. **Tolkning (sensorkrav):** oppdatert (posteriori) sannsynlighet gitt ny informasjon; poenget med at lav prevalens gir lav $P(S\mid +)$ selv ved god test (falske positive dominerer). Bruk sannsynlighetstre som verktøy.
- **Oppgavesjangre:** B. Mønstereksempel: «Med testen over: en person tester positivt. Finn $P(\text{syk} \mid \text{positiv})$ og forklar hvorfor den er lavere enn testens treffsikkerhet.»
- **Typiske feil:** **Regne $P(D\mid S)$ når $P(S\mid D)$ etterspørres** (Bayes feil vei, §5.6); glemme å regne nevneren ved total sannsynlighet; ikke tolke hvorfor posteriori-sannsynligheten kan være lav ved sjelden tilstand.
- **Quiz: 22 · Flashcards: 16**

#### Kapittel 2.4: Kombinatorikk

- **id:** `sok1004-2-4` · **number:** 2.4 · **estimatedMinutes:** 40 · **prerequisites:** `sok1004-2-1`
- **Kapitteltype:** teori
- **description:** Permutasjoner og kombinasjoner — å telle antall måter, med og uten rekkefølge, som forløper til binomiskoeffisienten.
- **Eksamensbelegg:** ~25 % frekvens; «hvor mange måter å velge $k$ av $n$». Broen til binomisk fordeling (kap. 3.2). Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** **Multiplikasjonsprinsippet**; **permutasjoner** (rekkefølge teller) $P(n,k) = n!/(n-k)!$; **kombinasjoner** (rekkefølge teller ikke) $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. Kriteriet: teller rekkefølgen? med/uten tilbakelegging? Kobling til binomisk: $\binom{n}{k}$ teller antall måter $k$ suksesser kan fordeles på $n$ forsøk.
- **Oppgavesjangre:** Byggekloss for D. Mønstereksempel: «På hvor mange måter kan en komité på 3 velges fra 8 kandidater?»
- **Typiske feil:** Bruke permutasjon der kombinasjon kreves (eller omvendt); regnefeil med fakultet; glemme at $\binom{n}{k} = \binom{n}{n-k}$; ikke se koblingen til binomiskoeffisienten.
- **Quiz: 16 · Flashcards: 14**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper og regneregler — betinget sannsynlighet, uavhengighet, total sannsynlighet, kombinasjoner, sjanger A/B; 2.B hendelsesalgebra + betinget sannsynlighet på økonomikontekst; 2.C full Bayes-oppgave med diagnose-/testcase inkl. tolkning, sjanger B; 2.D blandet sannsynlighet + kombinatorikk på eksamensnivå).

---

### Del 3 — Stokastiske variable og fordelinger *(prioritet: PERFEKT — inferensens byggeklosser)*

#### Kapittel 3.1: Diskret stokastisk variabel, forventning og varians

- **id:** `sok1004-3-1` · **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-2-1`
- **Kapitteltype:** teori
- **description:** Diskrete stokastiske variable fra en sannsynlighetsfordeling: forventning $E(X) = \sum x\,p(x)$ og varians $\text{Var}(X) = \sum (x-E)^2 p(x)$ — regnet fra frekvens-/sannsynlighetstabell.
- **Eksamensbelegg:** ~70 %, ofte forløper til KI/test; regnet fra frekvenstabell. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Diskret stokastisk variabel** og dens **sannsynlighetsfordeling** $p(x)$ (ikke-negativ, summerer til 1). **Forventning** $E(X) = \mu = \sum_x x\,p(x)$; **varians** $\text{Var}(X) = \sigma^2 = \sum_x (x-\mu)^2 p(x) = E(X^2) - [E(X)]^2$ (vis regnesnarveien); standardavvik $\sigma = \sqrt{\text{Var}(X)}$. Kumulativ fordeling. Alt regnet fra tabell. Legg grunnlaget for at binomisk (3.2) og egendefinerte fordelinger følger samme apparat.
- **Oppgavesjangre:** C. Mønstereksempel: «En stokastisk variabel har fordelingen $p(0)=0{,}2$, $p(1)=0{,}5$, $p(2)=0{,}3$. Finn $E(X)$ og $\text{Var}(X)$.»
- **Typiske feil:** Bruke $E(X^2) = [E(X)]^2$ (glemme at variansen krever $E(X^2)$ separat); glemme å vekte med sannsynlighetene; sannsynligheter som ikke summerer til 1; forveksle $\sigma$ og $\sigma^2$.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 3.2: Binomisk fordeling

- **id:** `sok1004-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-3-1`, `sok1004-2-4`
- **Kapitteltype:** teori
- **description:** Binomisk fordeling: identifisering (to utfall, konstant $\pi$, $n$ uavhengige forsøk), punktsannsynlighet, $E = n\pi$, $\text{Var} = n\pi(1-\pi)$ — akseptsampling som gjennomgangscase.
- **Eksamensbelegg:** ~80 %, akseptsampling er fast kontekst (Reynolds Electronics, defekte varer). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Binomiske forutsetninger:** fast antall $n$ uavhengige forsøk, to utfall (suksess/fiasko), konstant suksesssannsynlighet $\pi$. **Punktsannsynlighet** $P(X=k) = \binom{n}{k}\pi^k(1-\pi)^{n-k}$; **forventning** $E = n\pi$, **varians** $\text{Var} = n\pi(1-\pi)$. Kumulativ $P(X\le k)$ og komplement $P(X\ge k) = 1 - P(X\le k-1)$. Akseptsampling: aksepter partiet hvis $\le c$ defekte i utvalget — regn $P(\text{aksept})$. Understrek forutsetnings-drøftingen (sensorkrav: nevn at forsøkene er uavhengige og $\pi$ konstant).
- **Oppgavesjangre:** D. Mønstereksempel: «Et parti aksepteres hvis høyst 1 av 5 trukne varer er defekt, og $\pi = 0{,}1$. Finn $P(0 \text{ defekte})$, $P(\text{nøyaktig }1)$ og $P(\text{minst }1)$.»
- **Typiske feil:** Glemme binomiskoeffisienten $\binom{n}{k}$; regne $P(X\ge k)$ uten komplement (§5.12); ikke sjekke/nevne forutsetningene; forveksle $E$ og $\text{Var}$.
- **Quiz: 24 · Flashcards: 18**

#### Kapittel 3.3: Normalfordeling: standardisering og tabelloppslag

- **id:** `sok1004-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-3-1`
- **Kapitteltype:** teori
- **description:** Kontinuerlig normalfordeling: standardisering $Z = (X-\mu)/\sigma$ og tabelloppslag for $P(X<a)$, $P(a<X<b)$ og inversproblemet — bokas mest gjengangende regneferdighet.
- **Eksamensbelegg:** ~95 % — nesten hvert sett. Tre varianter (venstrehale, intervall, invers). Prioritet: **perfekt** (bokas mest gjentatte enkeltferdighet).
- **Innholdskontrakt:** $X \sim N(\mu, \sigma^2)$ (presiser konvensjonen: varians som andre argument, men flag at V2020 skrev $N(\mu,\sigma)$). **Standardisering** $Z = (X-\mu)/\sigma \sim N(0,1)$; tabelloppslag i standardnormaltabellen. Tre varianter: (i) $P(X<a) = P(Z < (a-\mu)/\sigma)$; (ii) $P(a<X<b)$ = differanse av to tabellverdier; (iii) **invers**: «finn $k$ slik at $P(X>k) = 0{,}05$» → finn $z$-kvantilen, $k = \mu + z\sigma$. Bruk **symmetri** om $\mu$ ($P(Z<-z) = 1 - P(Z<z)$). Understrek at $P(X=x) = 0$ for kontinuerlig variabel (flervalgsfelle H2022).
- **Oppgavesjangre:** E. Mønstereksempel: «Månedslønn er $N(62000, 9800^2)$. Finn $P(\text{lønn} < 45000)$, $P(70000 < \text{lønn} < 80000)$ og lønnen som bare 1 % overgår.»
- **Typiske feil:** Feil fortegn i standardiseringen; glemme symmetrien ved venstre hale; ved invers: bruke sannsynligheten som $z$-verdi i stedet for å slå opp kvantilen; tro at $P(X=x) > 0$ for kontinuerlig variabel (§5.9-flervalg); forveksle $\sigma$ og $\sigma^2$ i argumentet.
- **Quiz: 26 · Flashcards: 20**

#### Kapittel 3.4: Normaltilnærming til binomisk og sentralgrenseteoremet

- **id:** `sok1004-3-4` · **number:** 3.4 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-3-2`, `sok1004-3-3`
- **Kapitteltype:** teori
- **description:** Sentralgrenseteoremet som begrunnelse for at snitt og andeler blir tilnærmet normalfordelte, og normaltilnærmingen til binomisk med kontinuitetskorreksjon.
- **Eksamensbelegg:** CLT eksplisitt navngitt ~35 %; normaltilnærming av binomisk inngår i binomisk-oppgavene (~80 % samlet) og er broen til andels-inferens. «Glemme kontinuitetskorreksjon» er en fast sensorfelle (§5.4). Prioritet: **perfekt/kunne**.
- **Innholdskontrakt:** **Sentralgrenseteoremet (CLT):** snittet $\bar{X}$ av $n$ uavhengige variable er tilnærmet $N(\mu, \sigma^2/n)$ for stor $n$, uansett underliggende fordeling; tilsvarende for andelen $\hat{p}$. Dette begrunner all normalbasert inferens for snitt/andel. **Normaltilnærming til binomisk:** når $n\pi \ge 5$ og $n(1-\pi) \ge 5$, $X \approx N(n\pi, n\pi(1-\pi))$; bruk **kontinuitetskorreksjon** ($\pm 0{,}5$) fordi en diskret variabel tilnærmes med en kontinuerlig. Understrek når tilnærmingen IKKE gjelder (liten $n\pi$). Standardfeil $SE = \sigma/\sqrt{n}$; $\text{Var}(\bar{X}) = \sigma^2/n$ (halveres ikke lineært — flervalgsfelle: $SE$ endres med $\sqrt{n}$).
- **Oppgavesjangre:** D+E-bro. Mønstereksempel: «Av 200 kunder betaler 30 % kontant. Bruk normaltilnærming til å finne $P(\text{minst 50 betaler kontant})$, med kontinuitetskorreksjon.»
- **Typiske feil:** **Glemme kontinuitetskorreksjonen** (§5.4); bruke normaltilnærming når $n\pi < 5$; tro at $SE$ halveres når $n$ halveres (det endres med $\sqrt{n}$, flervalgsfelle §5); ikke navngi CLT når den brukes (§4).
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 3.5: Regneregler for forventning og varians, og lineærkombinasjoner

- **id:** `sok1004-3-5` · **number:** 3.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-3-1`
- **Kapitteltype:** teori
- **description:** Regnereglene $E(aX+bY)$ og $\text{Var}(aX+bY)$ med kovariansledd — profitt-/sumtransformasjoner der uavhengighet avgjør variansleddet.
- **Eksamensbelegg:** ~50 %; profitt/sum-transformasjoner. Kobler til kovarians (Del 6). Prioritet: **kunne**.
- **Innholdskontrakt:** **Forventning er lineær:** $E(aX + bY + c) = aE(X) + bE(Y) + c$ (alltid, uavhengig eller ei). **Varians:** $\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$; under **uavhengighet** er $\text{Cov} = 0$ og kryssleddet faller bort. $\text{Var}(aX + b) = a^2\text{Var}(X)$ (konstant $b$ påvirker ikke variansen). Anvend på total profitt $Z = X + Y$, og på $\bar{X}$ (som gir $\text{Var}(\bar{X}) = \sigma^2/n$). Understrek at kovariansleddet MÅ med når variablene ikke er uavhengige.
- **Oppgavesjangre:** C. Mønstereksempel: «Gitt $E(X)$, $E(Y)$, $\text{Var}(X)$, $\text{Var}(Y)$ og $\text{Cov}(X,Y)$, finn $E(X+Y)$ og $\text{Var}(X+Y)$ for total profitt.»
- **Typiske feil:** Glemme kovariansleddet når variablene ikke er uavhengige; anta $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$ uten å sjekke uavhengighet; glemme $a^2$ (kvadrere koeffisienten) i variansen; tro at en konstant påvirker variansen.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 3.6: Drill: fordelingsoppgaven

- **id:** `sok1004-3-6` · **number:** 3.6 · **estimatedMinutes:** 80 · **prerequisites:** `sok1004-3-5`, `sok1004-3-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på fordelingsblokken: fra en gitt kontekst til korrekt fordelingsvalg (diskret/binomisk/normal), regning av sannsynligheter og forventning/varians, med normaltilnærming der det passer.
- **Eksamensbelegg:** Dekker sjangrene C, D, E samlet — fordelingsblokken som mater inferens-kjeden. **Normalfordeling drilles til overmål** (~95 %-ferdigheten). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser fordelingen (tell forsøk/utfall — binomisk? kontinuerlig måling — normal? gitt tabell — egendefinert diskret?); 2) sjekk og nevn forutsetningene; 3) regn ønsket sannsynlighet ($P(X=k)$, $P(X\le k)$, $P(a<X<b)$, invers); 4) regn $E$ og $\text{Var}$; 5) bruk normaltilnærming med kontinuitetskorreksjon der binomisk med stor $n$ krever det; 6) tolk. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved fordelingsvalg, forutsetningsdrøfting, korrekt tabelloppslag, kontinuitetskorreksjon). **10–14 oppgaver** på eksamensnivå som roterer fordeling (diskret/binomisk/normal) × leveranse (punktsannsynlighet / kumulativ / invers / $E$+Var / normaltilnærming), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** C, D, E. Mønstereksempel (full kjede): «(a) Antall defekte i et parti er binomisk med $n=20$, $\pi=0{,}1$. Finn $P(\le 2)$ og $E$, $\text{Var}$. (b) Lengden er $N(50, 4)$. Finn $P(48 < X < 53)$. (c) Bruk normaltilnærming til $P(\ge 5 \text{ defekte})$ med kontinuitetskorreksjon.»
- **Typiske feil:** Hele fordelingsrepertoaret: feil fordelingsvalg, glemt komplement i $P(X\ge k)$ (§5.12), glemt kontinuitetskorreksjon (§5.4), feil fortegn i standardisering, utolket svar.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper og forutsetninger — diskret variabel, binomiske vilkår, CLT, kontinuitetskorreksjon, sjanger A; 3.B diskret variabel $E$/Var + binomisk sannsynligheter, sjanger C+D; 3.C normalfordeling alle tre varianter inkl. invers, sjanger E; 3.D full fordelingsoppgave med normaltilnærming + regneregler E/Var, sjanger C+D+E).

---

### Del 4 — Estimering og konfidensintervall *(prioritet: PERFEKT — halve inferens-kjeden)*

#### Kapittel 4.1: Punktestimering og standardfeil

- **id:** `sok1004-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok1004-3-4`
- **Kapitteltype:** teori
- **description:** Estimatorer og estimater, forventningsrett estimator, og standardfeilen $SE$ — fundamentet for konfidensintervall og hypotesetest.
- **Eksamensbelegg:** Punkt-/intervallestimat er faste begrepsgjengangere (sjanger A); $SE$ er byggeklossen for hele inferens-kjeden. Prioritet: **perfekt** (fundament).
- **Innholdskontrakt:** **Estimator** (regel/stokastisk variabel) vs. **estimat** (tallverdi fra utvalget); $\bar{X}$ estimerer $\mu$, $\hat{p}$ estimerer $\pi$, $s^2$ estimerer $\sigma^2$. **Forventningsrett** estimator ($E(\hat{\theta}) = \theta$). **Standardfeil:** $SE(\bar{X}) = \sigma/\sqrt{n}$ (estimert $s/\sqrt{n}$); $SE(\hat{p}) = \sqrt{\hat{p}(1-\hat{p})/n}$. Understrek at $SE$ måler estimatets presisjon og synker med $\sqrt{n}$. Byggekloss for KI (4.2) og testobservator (Del 5).
- **Oppgavesjangre:** A + F-fundament. Mønstereksempel (A): «Forklar forskjellen på et punktestimat og et intervallestimat.»
- **Typiske feil:** Blande estimator og estimat; bruke $\sigma$ når bare $s$ er tilgjengelig (og motsatt — styrer $z$-vs-$t$); glemme $\sqrt{n}$ i $SE$; forveksle $SE$ og standardavvik $\sigma$.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 4.2: Konfidensintervall for snitt og andel

- **id:** `sok1004-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-4-1`
- **Kapitteltype:** teori
- **description:** Konfidensintervall $\hat{\theta} \pm (\text{kritisk verdi})\cdot SE$ for snitt (z vs. t) og andel, med den ordrett presise gjentatte-utvalg-tolkningen.
- **Eksamensbelegg:** KI + tolkning ~85 %; $z$-vs-$t$-valget og den presise tolkningen er faste sensorkrav (§4, §7). «KI-tolkningsfellen» er den vanligste sensorfeilen (§5.1). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Generell form** $\hat{\theta} \pm (\text{kritisk verdi})\cdot SE$. **For snitt:** $z$ ved kjent $\sigma$/stort $n$ (kritiske verdier 1,645 / 1,96 / 2,576 for 90/95/99 %); **$t$ med $n-1$ frihetsgrader** ved estimert varians og lite utvalg. **For andel:** $\hat{p} \pm z\sqrt{\hat{p}(1-\hat{p})/n}$. **Tolkning (eget poeng, sensorkrav):** «ved gjentatte utvalg vil X % av slike intervaller inneholde den sanne parameteren» — IKKE «parameteren ligger i intervallet med X % sannsynlighet». Bredere KI ved høyere konfidensnivå og mindre $n$. Presiser $z$-vs-$t$-beslutningsregelen som et fast metodesignal.
- **Oppgavesjangre:** F. Mønstereksempel: «Med $n=50$, $\bar{X}=14612$, $s=6032$: konstruer 90 %- og 95 %-KI for populasjonsgjennomsnittet, og forklar hvorfor det ene er bredere.»
- **Typiske feil:** **KI-tolkningsfellen** (§5.1); **bruke $z$ der $t$ kreves** (lite utvalg/estimert varians, §5.2); feil frihetsgrader ($n-1$); glemme $\sqrt{n}$; bruke feil kritisk verdi for konfidensnivået.
- **Quiz: 24 · Flashcards: 20**

#### Kapittel 4.3: Utvalgsstørrelse og drill: estimeringsoppgaven

- **id:** `sok1004-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok1004-4-2`
- **Kapitteltype:** drill (+ teori: utvalgsstørrelse)
- **description:** Utvalgsstørrelse for gitt feilmargin (snitt og andel), og sjangerdrill på hele estimeringsoppgaven fra data til tolket KI.
- **Eksamensbelegg:** Utvalgsstørrelse ~40 % (dommer-eksempler); KI-drill dekker den ~85 %-gjengangende sjangeren. Prioritet: **perfekt** (KI) / **kunne** (utvalgsstørrelse).
- **Innholdskontrakt:** **Utvalgsstørrelse:** løs for $n$ gitt feilmargin $E$ og konfidensnivå — for snitt $n = (z\sigma/E)^2$; for andel $n = z^2\hat{p}(1-\hat{p})/E^2$ (bruk $\hat{p} = 0{,}5$ når andelen er ukjent, gir mest konservativt $n$); rund alltid **opp**. **Drill-løsningsoppskrift (algoritme):** 1) identifiser parameter (snitt/andel); 2) velg $z$ eller $t$ (kjent $\sigma$/stort $n$ → $z$; estimert varians/lite $n$ → $t$ med $n-1$ fg); 3) regn $SE$; 4) sett opp $\hat{\theta} \pm \text{krit}\cdot SE$; 5) **tolk med gjentatte-utvalg-formuleringen**; 6) evt. utvalgsstørrelse for ønsket margin. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved $z$-vs-$t$-valget, den presise tolkningen, korrekt oppadrunding av $n$). **8–12 oppgaver** som roterer parameter × leveranse (KI snitt $z$ / KI snitt $t$ / KI andel / utvalgsstørrelse), alle med `solution` + `hints`.
- **Oppgavesjangre:** F, K. Mønstereksempel (full kjede): «(a) Av 700 personer svarer 276 ja. Lag et 95 %-KI for andelen og tolk det. (b) Hvor mange må undersøkes for at feilmarginen skal bli maks 0,03?»
- **Typiske feil:** KI-tolkningsfellen (§5.1); $z$ der $t$ kreves (§5.2); glemme å runde $n$ opp; bruke $\hat{p}$ i stedet for 0,5 når andelen er ukjent i utvalgsstørrelse; feil kvadrering i $n$-formelen.
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper — punkt-/intervallestimat, standardfeil, $z$-vs-$t$, KI-tolkning, sjanger A; 4.B KI for snitt med $z$ og med $t$, med tolkning, sjanger F; 4.C KI for andel + utvalgsstørrelse, sjanger F+K; 4.D full estimeringsoppgave på eksamensnivå med tolkning og margin-krav).

---

### Del 5 — Hypotesetesting *(prioritet: PERFEKT — selve emnet, ~100 %)*

#### Kapittel 5.1: Hypotesetestens firetrinnsoppskrift

- **id:** `sok1004-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-4-2`
- **Kapitteltype:** teori
- **description:** Rammeverket: $H_0/H_1$, testobservator, signifikansnivå, kritisk verdi og konklusjon i kontekst — den faste firetrinnsoppskriften som alle testvarianter følger.
- **Eksamensbelegg:** ~100 % — selve emnet. Oppskriften gjentas i hver testvariant. Feil retning (ensidig/tosidig) og manglende kontekstkonklusjon er sentrale sensorfeil (§4, §5.3). Prioritet: **perfekt** (bokas viktigste kapittel).
- **Innholdskontrakt:** **Firetrinnsoppskriften:** (1) definer notasjon og sett opp $H_0$ og $H_1$ — **retningsbestemt spørsmål gir ensidig test** («er andelen *lavere* enn…»), symmetrisk gir tosidig; (2) velg **testobservator** og **begrunn fordelingen** ($z$ ved kjent $\sigma$/stort $n$; $t$ ved estimert $\sigma$/lite $n$; andel; $F$/$\chi^2$ ved varians); (3) velg **signifikansnivå** ($\alpha = 1$ %/5 %) og finn **kritisk verdi**; (4) sammenlign testobservator mot kritisk verdi (eller p-verdi mot $\alpha$) og **konkluder i kontekst**. **Type I-feil** (forkaste sann $H_0$, sannsynlighet $\alpha$) og **type II-feil** (beholde falsk $H_0$). Understrek at $H_0$ er «status quo» og at man forkaster/ikke forkaster (aldri «beviser $H_0$»). Forutsetninger nevnes (tilfeldig utvalg, normalitet/CLT).
- **Oppgavesjangre:** G-fundament. Mønstereksempel: «Formuler $H_0$ og $H_1$ for påstanden om at gjennomsnittslønnen er *høyere* enn 500 000, og angi om testen er ensidig eller tosidig.»
- **Typiske feil:** **Tosidig test på et ensidig spørsmål** (§5.3); definere $H_1$ som det man vil bevise uten å tenke retning; «bevise $H_0$»; glemme å konkludere i kontekst (§4.1); ikke nevne forutsetningene (§5.11).
- **Quiz: 24 · Flashcards: 24**

#### Kapittel 5.2: Test for ett gjennomsnitt (z og t)

- **id:** `sok1004-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-5-1`
- **Kapitteltype:** teori
- **description:** Én-utvalgs test for gjennomsnitt: $z$-test ved kjent $\sigma$/stort $n$ og $t$-test med $n-1$ frihetsgrader ved estimert varians/lite utvalg.
- **Eksamensbelegg:** Del av ~100 %-testblokken; $z$-vs-$t$-valget er et fast metodesignal (§4, §5.2). Prioritet: **perfekt**.
- **Innholdskontrakt:** **$z$-test:** $z = (\bar{X} - \mu_0)/(\sigma/\sqrt{n})$ ved kjent $\sigma$ eller stort $n$. **$t$-test:** $t = (\bar{X} - \mu_0)/(s/\sqrt{n})$ med $n-1$ frihetsgrader ved estimert varians og lite utvalg. Full firetrinnsgjennomgang. Ensidig (haleareal på én side) vs. tosidig (delt $\alpha$). Kritisk-verdi-metoden og kobling til KI (forkast hvis $\mu_0$ utenfor KI-et). **Begrunn fordelingsvalget eksplisitt** (sensorkrav).
- **Oppgavesjangre:** G. Mønstereksempel: «Et utvalg på $n=16$ gir $\bar{X}=52$, $s=6$. Test på 5 %-nivå om gjennomsnittet overstiger 50.»
- **Typiske feil:** $z$ der $t$ kreves (§5.2); feil frihetsgrader; tosidig kritisk verdi på ensidig test; glemme å begrunne fordelingen; ikke konkludere i kontekst.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 5.3: Test for én andel

- **id:** `sok1004-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-5-1`, `sok1004-3-4`
- **Kapitteltype:** teori
- **description:** Andels-test $z = (\hat{p} - p_0)/\sqrt{p_0(1-p_0)/n}$ basert på normaltilnærming — dommer-/andelscasene.
- **Eksamensbelegg:** Andels-test er fast (dommer-caset, akseptsampling); del av ~100 %-blokken. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Andels-testobservator** $z = (\hat{p} - p_0)/\sqrt{p_0(1-p_0)/n}$ — merk at nevneren bruker **$p_0$** (nullhypotesens andel), ikke $\hat{p}$. Forutsetning: $np_0$ og $n(1-p_0) \ge 5$ (normaltilnærming, CLT). Full firetrinnsgjennomgang, ensidig/tosidig. Konkluder i kontekst.
- **Oppgavesjangre:** G. Mønstereksempel: «Av 700 dommere har 276 opplevd trakassering. Test på 5 %-nivå om andelen er *lavere* enn 0,43.»
- **Typiske feil:** Bruke $\hat{p}$ i stedet for $p_0$ i nevneren; tosidig på et ensidig spørsmål (§5.3); glemme forutsetningen $np_0 \ge 5$; ikke konkludere i kontekst.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 5.4: To-utvalgs sammenligning (snitt og andeler, matched vs. uavhengige)

- **id:** `sok1004-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `sok1004-5-2`, `sok1004-5-3`
- **Kapitteltype:** teori
- **description:** Test av differansen mellom to gjennomsnitt (felles/separat varians) eller to andeler, og skillet mellom matched (parvise) og uavhengige utvalg.
- **Eksamensbelegg:** To-utvalgs sammenligning ~55 %; matched samples er begrepsgjenganger (sjanger A) og et fast skille. Prioritet: **kunne** (høyt belønnet).
- **Innholdskontrakt:** **To uavhengige snitt:** $t = (\bar{X}_1 - \bar{X}_2)/SE_{\text{diff}}$ med **felles varians** (pooled, når $\sigma_1 = \sigma_2$ antas) eller **separat varians**; frihetsgrader. **To andeler:** $z$ på differansen med sammenslått estimat under $H_0$. **Matched (parvise) utvalg:** analyseres på **differansene** $d_i = x_i - y_i$ som ett utvalg → én-utvalgs $t$-test på $\bar{d}$; skiller seg fra uavhengige utvalg fordi observasjonene er koblet (samme enhet før/etter). Understrek når hvert design brukes (matched reduserer variasjon).
- **Oppgavesjangre:** G. Mønstereksempel: «To butikker har snittsalg $\bar{X}_1$ og $\bar{X}_2$ med gitte $s_1, s_2, n_1, n_2$. Test om det er forskjell, og forklar valg av felles vs. separat varians.»
- **Typiske feil:** Behandle matched data som to uavhengige utvalg (skal analyseres på differansene); feil frihetsgrader; feil $SE$ for differansen; glemme sammenslått andelsestimat under $H_0$.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 5.5: p-verdi

- **id:** `sok1004-5-5` · **number:** 5.5 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-5-2`
- **Kapitteltype:** teori
- **description:** Å beregne p-verdien (ensidig haleareal, tosidig doblet) og tolke den som «det laveste signifikansnivået $H_0$ kan forkastes på».
- **Eksamensbelegg:** ~65 %; beregne + tolke. Ved $t$-fordeling: angi intervall fra tabell. Prioritet: **perfekt**.
- **Innholdskontrakt:** **p-verdi** = sannsynligheten for et minst like ekstremt utfall som det observerte, gitt at $H_0$ er sann. **Ensidig:** halearealet på testobservatorens side; **tosidig:** doblet haleareal. **Beslutningsregel:** forkast $H_0$ hvis p-verdi $< \alpha$. **Tolkning (sensorkrav):** «det laveste signifikansnivået $H_0$ kan forkastes på». Ved $z$: eksakt fra normaltabell; ved $t$: **angi et intervall** fra t-tabellen (f.eks. «mellom 0,01 og 0,025»). Understrek at p-verdi **ikke** er sannsynligheten for at $H_0$ er sann.
- **Oppgavesjangre:** H. Mønstereksempel: «Vis at p-verdien for utvalget blir 0,0049, og forklar hva den betyr.»
- **Typiske feil:** Ikke doble for tosidig test; tolke p-verdi som «sannsynligheten for at $H_0$ er sann»; ved $t$ oppgi eksakt verdi i stedet for intervall; glemme å tolke.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 5.6: Drill: hypotesetestoppgaven

- **id:** `sok1004-5-6` · **number:** 5.6 · **estimatedMinutes:** 90 · **prerequisites:** `sok1004-5-5`, `sok1004-5-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på hele hypotesetestoppgaven: fra kontekst til fullført firetrinns A-besvarelse i alle varianter (snitt $z/t$, andel, to-utvalg), med p-verdi og kontekstkonklusjon.
- **Eksamensbelegg:** Dekker sjangrene G og H samlet — testblokken (~100 %-gjenganger, bærer størstedelen av poengene). **Drilles til overmål.** Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) definer notasjon, sett opp $H_0/H_1$ og bestem ensidig/tosidig fra spørsmålets retning; 2) velg testobservator og **begrunn fordelingen** (ett snitt $z/t$, én andel, to snitt felles/separat varians, to andeler, matched → differanser); 3) regn testobservatoren, finn kritisk verdi ELLER p-verdi; 4) **konkluder i kontekst**; 5) nevn forutsetningene. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved korrekt $H_0/H_1$-retning, begrunnet fordeling, korrekt kritisk verdi/p-verdi, kontekstkonklusjon). **12–16 oppgaver** som roterer testtype (ett snitt $z$ / ett snitt $t$ / én andel / to snitt / to andeler / matched) × leveranse (kritisk verdi / p-verdi), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** G, H. Mønstereksempel (full kjede): «(a) $n=25$, $\bar{X}=48$, $s=5$. Test på 5 %-nivå om $\mu < 50$. (b) Regn p-verdien og angi intervallet fra t-tabellen. (c) Tolk konklusjonen i kontekst.»
- **Typiske feil:** Hele testrepertoaret: tosidig på ensidig spørsmål (§5.3), $z$ der $t$ kreves (§5.2), $\hat{p}$ i nevneren for andelstest, matched behandlet som uavhengig, p-verdi ikke doblet, manglende kontekstkonklusjon (§4.1), utelatte forutsetninger (§5.11).
- **Quiz: 20 · Flashcards: 12**

**Prøve-kvote Del 5:** 4 prøver (5.A begreper — $H_0/H_1$, type I/II-feil, signifikansnivå, kritisk verdi, p-verdi, matched samples, sjanger A; 5.B én-utvalgs test snitt $z$ og $t$ + p-verdi, sjanger G+H; 5.C andels-test + to-utvalgs sammenligning, sjanger G; 5.D full hypotesetestoppgave på eksamensnivå med begrunnet fordeling og kontekstkonklusjon, sjanger G+H).

---

### Del 6 — Samvariasjon: kovarians, korrelasjon og regresjon *(prioritet: KUNNE — unik mot ECON2130)*

#### Kapittel 6.1: Kovarians og korrelasjon

- **id:** `sok1004-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `sok1004-3-5`
- **Kapitteltype:** teori
- **description:** Kovarians (retning) og korrelasjon (standardisert styrke i $[-1,1]$) — beregnet og tolket, med det faste skillet mellom de to.
- **Eksamensbelegg:** ~60 %; beregne + tolke. «Forveksle kovarians og korrelasjon» er en sentral sensorfelle (§5.5). Prioritet: **kunne**.
- **Innholdskontrakt:** **Kovarians** $\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$ (og utvalgsversjonen); gir **retning** på samvariasjonen men avhenger av måleskala. **Korrelasjonskoeffisient** $\text{Corr}(X,Y) = \rho = \text{Cov}(X,Y)/(\sigma_X\sigma_Y) \in [-1,1]$ (utvalg: $r$); gir **styrke**, er benevningsuavhengig. **Tolkning (sensorkrav):** kovariansens *størrelse* sier ingenting om styrke (bare fortegnet betyr noe); bare korrelasjonen er standardisert. Korrelasjon ≠ kausalitet (observasjonsdata). Regn begge fra en tabell over $(x,y)$-par.
- **Oppgavesjangre:** I. Mønstereksempel: «Gitt seks $(x,y)$-par, finn kovariansen og korrelasjonen, og forklar hva hver av dem forteller om sammenhengen.»
- **Typiske feil:** **Tro at kovariansens størrelse måler styrke** (§5.5); glemme å dele på $\sigma_X\sigma_Y$ i korrelasjonen; trekke kausal konklusjon fra korrelasjon (§5.10); regnefeil i $E(XY)$.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 6.2: Enkel lineær regresjon

- **id:** `sok1004-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `sok1004-6-1`
- **Kapitteltype:** teori
- **description:** Minste kvadraters regresjonslinje $\hat{y} = b_0 + b_1 x$, tolkning av stigningstallet, forklaringsgraden $R^2$ og korrelasjonstesten — SØK1004-unikt mot ECON2130.
- **Eksamensbelegg:** ~45 % (V2015, V2020, V2016); regresjonslinje + tolkning + $R^2$. **Testes jevnlig i SØK1004, aldri i ECON2130** (motsatt prioritering, §0). Prioritet: **kunne** (unik differensierende ferdighet).
- **Innholdskontrakt:** **Minste kvadraters linje** $\hat{y} = b_0 + b_1 x$ med $b_1 = \text{Cov}(x,y)/\text{Var}(x) = r\,s_y/s_x$ og $b_0 = \bar{y} - b_1\bar{x}$. **Tolk stigningstallet** (sensorkrav): «en enhets økning i $x$ gir $b_1$ enheters endring i $\hat{y}$» — i kontekstens enheter. **Forklaringsgrad** $R^2 = r^2 \in [0,1]$ = andelen av variasjonen i $y$ som forklares av $x$; tolk verbalt. **Forutsetninger:** lineær sammenheng, konstant varians. **Korrelasjonstest:** $H_0: \rho = 0$ med testobservator $r\sqrt{n-2}/\sqrt{1-r^2} \sim t(n-2)$. Understrek at regresjon på observasjonsdata ikke gir kausalitet.
- **Oppgavesjangre:** I. Mønstereksempel: «Estimer regresjonslinjen $\hat{P} = b_0 + b_1 T$ for eksamenspoeng mot forberedelsestid, tolk stigningstallet, og oppgi og tolk $R^2$.»
- **Typiske feil:** Ikke tolke stigningstallet i kontekst (§4.2); forveksle $b_1$ og $r$; trekke kausal konklusjon (§5.10); feil frihetsgrader ($n-2$) i korrelasjonstesten; regne $b_0$ før $b_1$.
- **Quiz: 22 · Flashcards: 18**

#### Kapittel 6.3: Drill: samvariasjons- og regresjonsoppgaven

- **id:** `sok1004-6-3` · **number:** 6.3 · **estimatedMinutes:** 70 · **prerequisites:** `sok1004-6-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på samvariasjonsoppgaven: fra $(x,y)$-data til kovarians, korrelasjon, regresjonslinje med tolket stigningstall og $R^2$, og korrelasjonstest.
- **Eksamensbelegg:** Dekker sjanger I samlet — den ~45–60 %-gjengangende samvariasjonsoppgaven som **skiller SØK1004 fra ECON2130**. Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) regn $\bar{x}$, $\bar{y}$, $s_x$, $s_y$ og $\text{Cov}(x,y)$; 2) korrelasjon $r$ og tolk (styrke + retning); 3) regresjonslinjen $b_1$, $b_0$; 4) **tolk stigningstallet i kontekst**; 5) $R^2$ og tolkning; 6) evt. korrelasjonstest ($t(n-2)$). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved korrekt $b_1$, den verbale tolkningen, $R^2$-tolkningen). **8–12 oppgaver** som roterer leveranse (kovarians/korrelasjon / regresjonslinje / $R^2$ / korrelasjonstest), alle med nyskrevne, pent kalibrerte tall og `solution` + `hints`.
- **Oppgavesjangre:** I. Mønstereksempel (full kjede): «(a) Finn kovarians og korrelasjon for de gitte parene. (b) Estimer regresjonslinjen og tolk stigningstallet. (c) Oppgi $R^2$. (d) Test om korrelasjonen er signifikant på 5 %-nivå.»
- **Typiske feil:** Kovarians vs. korrelasjon (§5.5); utolket stigningstall (§4.2); kausal tolkning (§5.10); feil frihetsgrader i korrelasjonstesten.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A begreper — kovarians, korrelasjon, regresjonslinje, $R^2$, korrelasjon vs. kausalitet, sjanger A; 6.B kovarians + korrelasjon fra tabell med tolkning, sjanger I; 6.C regresjonslinje + stigningstall-tolkning + $R^2$, sjanger I; 6.D full samvariasjonsoppgave inkl. korrelasjonstest på eksamensnivå, sjanger I).

---

### Del 7 — Kjikvadrat, F-test og krysstabell *(prioritet: KJENNE — NTNU-signatur, fraværende i ECON2130)*

#### Kapittel 7.1: Krysstabell og simultanfordeling

- **id:** `sok1004-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `sok1004-2-2`
- **Kapitteltype:** teori
- **description:** Simultan-, marginale og betingede sannsynligheter fra en krysstabell — fyll ut manglende celler og les av betingede sannsynligheter.
- **Eksamensbelegg:** ~35 % (hotellrangering, V2024, H2025); fyll ut simultantabell + betingede/marginale. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** **Krysstabell/simultanfordeling:** to kategoriske variable; **simultansannsynlighet** $P(A\cap B)$ i cellene; **marginale sannsynligheter** i rad-/kolonnesummene; **betinget sannsynlighet** $P(A\mid B) = P(A\cap B)/P(B)$ fra tabellen. Fyll ut manglende celler slik at radene/kolonnene summerer riktig og totalen = 1. Uavhengighet: $P(A\cap B) = P(A)P(B)$ for alle celler. Broen til kji-kvadrattesten (7.2).
- **Oppgavesjangre:** J-fundament. Mønstereksempel: «Gitt en krysstabell over stjernerangering og prisklasse for hoteller, fyll ut simultan-sannsynlighetstabellen og finn $P(\text{prisklasse 3} \mid \text{3 stjerner})$.»
- **Typiske feil:** Blande simultan, marginal og betinget sannsynlighet; feil betinging (dele på feil marginal); celler som ikke summerer til 1; forveksle rad- og kolonnebetinging.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 7.2: Kjikvadrat- og F-test for uavhengighet og varianser

- **id:** `sok1004-7-2` · **number:** 7.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-7-1`, `sok1004-5-1`
- **Kapitteltype:** teori
- **description:** Kji-kvadrattest for uavhengighet i en krysstabell, og F-testen for likhet mellom to varianser — NTNU-signaturtemaene ECON2130 ikke prøver.
- **Eksamensbelegg:** ~40 % (H2016 F-test, H2023/V2024 kji-kvadrat). **Fraværende i ECON2130** (§0). Prioritet: **kjenne** (nivå 3, differensierende).
- **Innholdskontrakt:** **Kji-kvadrattest for uavhengighet:** forventede frekvenser $E_{ij} = (\text{radsum}\cdot\text{kolonnesum})/\text{total}$; testobservator $\chi^2 = \sum (O-E)^2/E$ mot $\chi^2$ med **$(r-1)(c-1)$ frihetsgrader**; stor $\chi^2$ → forkast uavhengighet. **F-test for to varianser:** $F = S_1^2/S_2^2 \sim F(n_1-1, n_2-1)$ (legg større varians i telleren for enkel tabelloppslag); test $H_0: \sigma_1^2 = \sigma_2^2$; ensidig/tosidig. Full firetrinnsgjennomgang for begge. Forutsetninger (normalitet for F-testen). Merk at alternative korrekte oppsett godtas (F kan skrives $S_2^2/S_1^2$ med tilpasset forkastningsregel, §4.6).
- **Oppgavesjangre:** J (+ varianstest). Mønstereksempel: «(a) Test på 5 %-nivå om to variabler er uavhengige gitt krysstabellen. (b) To utvalg har $s_1^2$ og $s_2^2$; test om variansene er like.»
- **Typiske feil:** **Feil frihetsgrader** ($(r-1)(c-1)$ for kji, $(n_1-1,n_2-1)$ for F, §5.8); regne forventede frekvenser feil; tosidig/ensidig-forveksling i F-testen; glemme normalitetsforutsetningen.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 7.3: Drill: varianstest- og krysstabelloppgaven

- **id:** `sok1004-7-3` · **number:** 7.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok1004-7-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på kji-kvadrat-/F-test-/krysstabelloppgaven — de differensierende NTNU-temaene, samlet i én algoritme.
- **Eksamensbelegg:** Dekker sjanger J + varianstest — de ~35–40 %-gjengangende NTNU-signaturoppgavene som ECON2130 aldri stiller. Prioritet: **kjenne** (nivå 3).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) identifiser test (uavhengighet i krysstabell → kji-kvadrat; likhet mellom to varianser → F); 2) sett opp $H_0/H_1$; 3) (kji) regn forventede frekvenser og $\chi^2 = \sum(O-E)^2/E$; (F) regn $F = S_1^2/S_2^2$; 4) finn frihetsgrader og kritisk verdi; 5) konkluder i kontekst; + krysstabell-avlesning (marginale/betingede) der oppgaven ber om det. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved korrekte forventede frekvenser, riktige frihetsgrader, kontekstkonklusjon). **8–12 oppgaver** som roterer test (kji-uavhengighet / F-varianser / krysstabell-avlesning), alle med `solution` + `hints`.
- **Oppgavesjangre:** J. Mønstereksempel (full kjede): «(a) Fyll ut krysstabellen og finn en betinget sannsynlighet. (b) Test uavhengighet med kji-kvadrat på 5 %-nivå. (c) To utvalg: test om variansene er like med en F-test.»
- **Typiske feil:** Feil frihetsgrader (§5.8); feil forventede frekvenser; F-test ensidig/tosidig-forveksling; krysstabell betinget/marginal-forveksling.
- **Quiz: 18 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (7.A begreper — simultan/marginal/betinget sannsynlighet, forventede frekvenser, frihetsgrader, F-test, sjanger A/J; 7.B krysstabell-avlesning + kji-kvadrattest for uavhengighet, sjanger J; 7.C F-test for to varianser med begrunnet fordeling, sjanger J; 7.D full varianstest- og krysstabelloppgave på eksamensnivå).

---

### Del 8 — Eksamenstrening *(prioritet: syntese — dekker A–L)*

#### Kapittel 8.1: Begrepsdrill: definisjonsoppgaven

- **id:** `sok1004-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-1-3`
- **Kapitteltype:** sjangerdrill (begreper)
- **description:** Intensiv drill på hele gjengangerlisten av begreper (sjanger A, ~15 begreper) — presise 2–3-setningers definisjoner under tidspress, med selvrettingsmal.
- **Eksamensbelegg:** Begrepsoppgaven ~70 %, «gratis» poeng hvis listen sitter (§1.5). Samler flashcard-banken fra 1.3, Del 4–7-begrepene og de differensierende (Chebyshev, Simpsons paradoks, trimmet snitt, matched samples). Prioritet: **kunne** (høy flashcard-tetthet).
- **Innholdskontrakt:** Hele begrepslisten repetert som lynkort med **modelldefinisjon + hva sensor krever + typisk feil** per begrep: kategoriske/ordinale data, punkt-/intervallestimat, kovarians, korrelasjon, kumulativ frekvensfordeling, type I/II-feil, Chebyshevs teorem, CLT, Simpsons paradoks, trimmet gjennomsnitt, matched sample-design, statistisk inferens, frekvensfordeling, standardfeil, p-verdi, konfidensintervall. Hvert begrep med økonomisk mikroeksempel. **Drilloppgaver:** 10–14 «forklar kort»-oppgaver som roterer 2–3 begreper hver (sjanger A), med modellsvar. Denne delen er bokas samlende **flashcard-bank**.
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort forskjellen på type I- og type II-feil, og gi et eksempel på hver i en akseptsamplingssituasjon.»
- **Typiske feil:** Ordrik/vag definisjon (sensor vil ha kjernen); forveksle type I/II, kovarians/korrelasjon; glemme Chebyshevs $k$-avhengighet; matched-samples-poenget (differanser).
- **Quiz: 24 · Flashcards: 44**

#### Kapittel 8.2: Flervalgsberedskap og formelsamling

- **id:** `sok1004-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1004-7-2`
- **Kapitteltype:** sjangerdrill (flervalg) + referanse (formelsamling)
- **description:** De konseptuelle flervalgsspørsmålene (H2022/H2023) og en selvforsynt formelsamling med tabellbruk — kode-D-beredskapen.
- **Eksamensbelegg:** Flervalgsblokk ~20 % i H2022/H2023 (sjanger L, utregning ikke nødvendig); kode D krever selvforsynt formelsamling (§1). Prioritet: **kunne** (flervalg) / referanse (formelsamling).
- **Innholdskontrakt:** **Flervalgsberedskap (sjanger L):** konseptuelle enkeltspørsmål — histogram vs. stolpediagram; $t \to$ normal ved stort $n$; $SE$ endres med $\sqrt{n}$ (ikke lineært); riktig $H_0/H_1$-retning; $P(X=x) = 0$ for kontinuerlig variabel; tolkning av p-verdi og KI. 12–16 flervalgsoppgaver med korrekt svar + kort begrunnelse. **Selvforsynt formelsamling** (referanse, i emnets notasjon): deskriptivt ($\bar{X}$, $s^2$, median); sannsynlighet (addisjon, betinget, total, Bayes, $\binom{n}{k}$); fordelinger (binomisk $E=n\pi$/$\text{Var}=n\pi(1-\pi)$, normal $Z=(X-\mu)/\sigma$, normaltilnærming med kontinuitetskorreksjon, CLT); inferens ($SE$, KI $z/t$/andel, testobservatorer for snitt/andel/to-utvalg, p-verdi, utvalgsstørrelse); samvariasjon ($\text{Cov}$, $r$, $b_1$/$b_0$, $R^2$, korrelasjonstest); varianstester ($\chi^2 = \sum(O-E)^2/E$, $F = S_1^2/S_2^2$, frihetsgrader). **Tabellbruk:** hvordan lese normal-, $t$-, $F$- og $\chi^2$-tabellen (kritiske verdier, kvantiler, p-verdi-intervall). Marker hva som skal *utledes/tolkes* vs. bare slås opp.
- **Oppgavesjangre:** L. Mønstereksempel: «Hva skjer med standardfeilen når utvalgsstørrelsen firedobles? (a) halveres (b) firedeles (c) uendret (d) dobles.»
- **Typiske feil:** Flervalgsfellene: $P(X=x)>0$ for kontinuerlig variabel (§5.9); $SE$ endres lineært (endres med $\sqrt{n}$); histogram/stolpediagram-forveksling; feil $H_0/H_1$-retning.
- **Quiz: 22 · Flashcards: 12**

#### Kapittel 8.3: Øvingseksamen 1 (klassisk regime)

- **id:** `sok1004-8-3` · **number:** 8.3 · **estimatedMinutes:** 120 · **prerequisites:** `sok1004-5-6`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers øvingseksamen i klassisk 4-oppgaversmal (begrep + Bayes/binomisk + KI/test + korrelasjon/regresjon), med løsningsforslag som A-besvarelse og poengfordeling.
- **Eksamensbelegg:** Speiler den klassiske malen (V2015/H2016/V2020: 4 oppgaver, vekt oppgitt). Dekker sjangrene A, B, D/E, F, G, H, I. Prioritet: syntese.
- **Innholdskontrakt:** Nyskrevet komplett sett, 4 oppgaver med vekt (f.eks. 15/25/35/25): **oppg. 1** begrep (sjanger A, 3–4 begreper); **oppg. 2** betinget sannsynlighet/Bayes + binomisk/normal (B+D/E); **oppg. 3** stor inferensoppgave — diskret variabel eller KI + hypotesetest + p-verdi (C/F+G+H); **oppg. 4** kovarians/korrelasjon + regresjon (I). Løsningsforslag i eget `collapsible` per oppgave, skrevet som **A-besvarelse** (regning + verbal tolkning + forutsetninger nevnt), med `tip`-notat om delpoeng/vekting. Nyskrevne tall og kontekster (opphavsrett).
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, I. Speiler analysens §2-temafordeling (en typisk eksamen).
- **Typiske feil:** Alle de sett-overgripende: KI-tolkningsfellen, $z$-vs-$t$, ensidig/tosidig, kontinuitetskorreksjon, Bayes feil vei, utolkede tall, utelatte forutsetninger.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2 (kode-D/nyere regime)

- **id:** `sok1004-8-4` · **number:** 8.4 · **estimatedMinutes:** 120 · **prerequisites:** `sok1004-8-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers øvingseksamen i nyere 5–7-oppgavers kode-D-mal (begrep + sannsynlighet + normal + KI/utvalgsstørrelse + hypotesetest + krysstabell/kjikvadrat), med A-besvarelser og digital-formelsamling-forutsetning.
- **Eksamensbelegg:** Speiler nyere mal (V2025/H2025: 5–7 oppgaver, kode D). Dekker sjangrene A, B/C, D/E, F, G, H, J, K. Prioritet: syntese.
- **Innholdskontrakt:** Nyskrevet komplett sett, 5–7 oppgaver med vekt: **oppg. 1** begrep (A, 10 %); **oppg. 2** sannsynlighet/binomisk-akseptsampling (B/D); **oppg. 3** normalfordeling alle varianter (E); **oppg. 4** KI + tolkning + utvalgsstørrelse (F+K); **oppg. 5** hypotesetest andel/snitt + p-verdi (G+H); **oppg. 6** krysstabell/kjikvadrat (J). Løsningsforslag som **A-besvarelse** per oppgave i `collapsible` (regning + tolkning + forutsetninger), `tip`-notat om delpoeng. **Kode-D-forutsetning:** formler slås opp i den digitale formelsamlingen (kap. 8.2), tabeller ligger i settet. Nyskrevne tall/kontekster.
- **Oppgavesjangre:** A, B, C, D, E, F, G, H, J, K. Speiler nyere temafordeling.
- **Typiske feil:** Samme sett-overgripende repertoar + kode-D-spesifikke (formelsamlingen ikke internalisert, feil frihetsgrader i kjikvadrat, glemt oppadrunding av utvalgsstørrelse).
- **Quiz: 12 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne temaprøver (delen består av begrepsdrill + flervalg/formelsamling + 2 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 16 | 14 | 0 |
| 1 | 1.1–1.3 | 18+20+22 = **60** | 20+18+40 = **78** | 4 |
| 2 | 2.1–2.4 | 20+22+22+16 = **80** | 18+18+16+14 = **66** | 4 |
| 3 | 3.1–3.6 | 22+24+26+22+20+18 = **132** | 18+18+20+18+16+10 = **100** | 4 |
| 4 | 4.1–4.3 | 18+24+20 = **62** | 16+20+12 = **48** | 4 |
| 5 | 5.1–5.6 | 24+22+20+20+22+20 = **128** | 24+18+16+18+18+12 = **106** | 4 |
| 6 | 6.1–6.3 | 22+22+18 = **62** | 18+18+10 = **46** | 4 |
| 7 | 7.1–7.3 | 18+20+18 = **56** | 16+18+10 = **44** | 4 |
| 8 | 8.1–8.4 | 24+22+12+12 = **70** | 44+12+0+0 = **56** | 0 (2 øvingseksamener) |
| **Sum** | **33 kap.** | **666 ≥ 500 ✓** | **558 ≥ 500 ✓** | **28 + 2 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler at **inferens-kjeden er selve emnet**: Del 3 (fordelinger),
Del 4 (estimering/KI) og Del 5 (hypotesetesting) står for 322 av 666 quiz og 254
av 558 flashcards — nøyaktig de byggeklossene og den testmaskinen som bærer
størstedelen av eksamenspoengene (hypotesetesting ~100 %, normalfordeling ~95 %,
KI ~85 %). Boka er et **regnefag med solid begrepsrepertoar**: quiz ligger
komfortabelt over gulvet (drilltunge inferens-deler), og flashcards er løftet
godt over gulvet fordi den ~70 %-gjengangende **definisjonsoppgaven** krever at
et bredt begrepsapparat sitter presist (Chebyshev, Simpsons paradoks, trimmet
snitt, matched samples, type I/II-feil, kovarians vs. korrelasjon, p-verdi- og
KI-tolkning), med begrepsbanken (1.3) og begrepsdrillen (8.1) som samlende
flashcard-banker (til sammen 84 flashcards). De differensierende delene mot
ECON2130 — regresjon (Del 6) og kjikvadrat/F-test (Del 7) — får hver sin fulle
del med drillkapittel selv om de bare er ~40–45 %-gjengangere, fordi de er
**karakterdifferensierende** (få kandidater behersker dem) og unike for SØK1004.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med regning + verbal tolkning + nevnte forutsetninger) og
poengfordeling. Omfang i minutter. Prøvekapitler legges etter byggekontraktens
spesifikasjon (`sok1004-<del>-prove`, chapterNumber `<del>.P`). De fire prøvene
per del er spesifisert i «Prøve-kvote Del N»-linjene under hver del (§3):
Del 1 (1.A–1.D), Del 2 (2.A–2.D), Del 3 (3.A–3.D), Del 4 (4.A–4.D),
Del 5 (5.A–5.D), Del 6 (6.A–6.D), Del 7 (7.A–7.D). Del 0 og Del 8 har ingen egne
temaprøver (metadel / øvingseksamener). Samlet dekker de 28 prøvene + 2
øvingseksamenene sjangrene A–L minst én gang, og både det klassiske regimet og
kode-D-/nyere-malen.

### Øvingseksamener (2 komplette sett)

- **Øvingseksamen 1** (kap. 8.3): klassisk 4-oppgaversmal (A, B, C/D/E, F+G+H, I).
- **Øvingseksamen 2** (kap. 8.4): nyere kode-D 5–7-oppgaversmal (A, B/D, E, F+K, G+H, J).

Begge med løsningsforslag skrevet som A-besvarelse (regning + tolkning +
forutsetninger), poengfordeling og `tip`-notat om delpoeng.

---

## 5. Studieguide (Del 0 + tverrgående ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne (eksamenskart, frekvenser, sjangerkatalog,
lesestrategi). I tillegg samler boka disse tverrgående ressursene (forfatteren legger
dem i relevante kapitler / Del 8):

1. **Inferens-kjede-kartet** — det ene diagrammet som binder boka: estimator → $SE$
   → KI → hypotesetest → p-verdi, med hvilket kapittel som drillet hvert ledd, og
   hvordan $z$-vs-$t$-valget og ensidig/tosidig går igjen på tvers.
2. **$z$-vs-$t$-beslutningstre** — kjent $\sigma$/stort $n$ → $z$; estimert
   varians/lite $n$ → $t$ med $n-1$ fg; andel → $z$ (CLT); to varianser → $F$;
   uavhengighet i krysstabell → $\chi^2$. Med frihetsgradene per test.
3. **Feilkatalog** — de 12 typiske feilene fra analysens §5 koblet til kapitlet som
   forebygger den: KI-tolkningsfellen (4.2), $z$ der $t$ kreves (4.2/5.2), tosidig
   på ensidig (5.1), glemt kontinuitetskorreksjon (3.4), kovarians vs. korrelasjon
   (6.1), Bayes feil vei (2.3), median vs. snitt (1.2), feil frihetsgrader (7.2),
   $P(X=x)=0$ kontinuerlig (3.3/8.2), kausal tolkning av regresjon (6.2), utelatte
   forutsetninger (overalt), glemt komplement i $P(X\ge k)$ (2.1/3.2).
4. **Selvforsynt formelsamling** (kap. 8.2) i emnets notasjon — med markering av hva
   som skal utledes/tolkes vs. bare slås opp; kode-D-beredskap.
5. **Tabellbruksguide** (kap. 8.2) — normal-, $t$-, $F$- og $\chi^2$-tabellen: finn
   kritisk verdi, kvantil (invers), og p-verdi-intervall.
6. **Studieløp** — anbefalt progresjon (8-ukers og 3-ukers intensivvariant): Del 1
   (begreper/deskriptivt) + Del 2 (sannsynlighet) → Del 3 (fordelinger) → Del 4
   (estimering/KI) → Del 5 (hypotesetesting, tyngdepunktet) → Del 6 (regresjon) +
   Del 7 (varianstester), prøver underveis; begrepsdrillen (8.1) og
   flervalgsberedskapen (8.2) parallelt; øvingseksamenene (8.3–8.4) de siste ukene
   under tidspress (4 timer).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok1004` med alle 33 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra
   makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK1004 Statistikk for økonomer».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene, kode-D-
   regimet og avgrensningen mot ECON2130 som resten refererer til.
3. **Del 1–3 i avhengighetsrekkefølge**: deskriptivt/begreper → sannsynlighet →
   fordelinger (byggeklossene). Én byggeagent per hel del (jf. fase 4-batching).
   Drillkapitlet (3.6) bygges av samme agent som Del 3.
4. **Inferens-kjeden**: Del 4 (estimering/KI) → Del 5 (hypotesetesting). Del 5 er 6
   kapitler, så den kan splittes, men gi da hele delens kontrakter til begge agenter
   og flagg for konsistenssjekk (firetrinnsoppskriften, $z$-vs-$t$, ensidig/tosidig,
   kontekstkonklusjon). Drillkapitlene (4.3, 5.6) bygges av samme agent som delen.
5. **De differensierende delene**: Del 6 (regresjon) → Del 7 (varianstester);
   drillkapitlene (6.3, 7.3) med delen.
6. **Del 8 til slutt** (begrepsdrill + flervalg/formelsamling + 2 øvingseksamener
   gjenbruker alt); bygges av én agent som leser hele skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert; prøvene
   (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok1004-<del>-prove`, chapterNumber `<del>.P`), Del 1–7.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer
      helst via `json.dump`; husk å escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\bar`, `\\sigma`, `\\pi`, `\\hat`, `\\chi`, `\\binom`, `\\sqrt`, `\\sum`);
      ingen unicode-brøker; konsistent $\bar{X}$, $s$, $\sigma$, $\pi$, $\hat{p}$,
      $Z=(X-\mu)/\sigma$, $H_0/H_1$, $R^2$, $\chi^2$, $F$.
- [ ] **Notasjonskonsistens**: tekstsøk over alle sok1004-filer — **påkrevd**:
      $X\sim N(\mu,\sigma^2)$ (varians som andre argument, med V2020-forbeholdet nevnt),
      binomisk med $\pi$, standardisering $Z=(X-\mu)/\sigma$, testobservator-notasjon,
      $t$ med $n-1$ fg, $F(n_1-1,n_2-1)$, $\chi^2$ med $(r-1)(c-1)$; **forbudt/uønsket**:
      å bygge ut R/Stata-kode, simulering/Monte Carlo, Poisson-fordeling, teststyrke-
      ved-simulering, «er p-verdien stokastisk?»-drøfting eller kausalitets-/seleksjons-
      apparatet — grep etter «Monte Carlo», «simuler», «Poisson», «t.test(», «R-kode»,
      «Stata», «do-fil» skal gi **null treff** utenom eventuelle kontrast-merknader til
      ECON2130 i Del 0/Forkunnskaper.
- [ ] **Inferens-kjede-kravet**: kap. 5.1–5.6 og øvingseksamenene bruker eksplisitt
      firetrinnsoppskriften ($H_0/H_1$ → begrunnet testobservator/fordeling → kritisk
      verdi/p-verdi → **kontekstkonklusjon**), med korrekt $z$-vs-$t$-valg og
      ensidig/tosidig-vurdering — grep-sjekk «kritisk verdi», «p-verdi», «$H_0$».
- [ ] **KI-tolkningskravet**: hvert KI-eksempel (kap. 4.2, 4.3, øvingseksamener)
      tolker intervallet med **gjentatte-utvalg-formuleringen**, ikke «parameteren
      ligger i intervallet med X % sannsynlighet» — grep-sjekk «gjentatte utvalg».
- [ ] **Differensierings-kravet**: kap. 6.2/6.3 (regresjon: minste kvadraters linje,
      tolket stigningstall, $R^2$, korrelasjonstest $t(n-2)$) og kap. 7.2/7.3
      (kji-kvadrat $\sum(O-E)^2/E$ med $(r-1)(c-1)$ fg; F-test $S_1^2/S_2^2$ med
      $(n_1-1,n_2-1)$ fg) er bygget ut i full — de skiller SØK1004 fra ECON2130.
- [ ] **Regning + tolkning + forutsetninger**: hvert eksempel og løsningsforslag har
      regning OG verbal tolkning av tallet (p-verdi, KI, korrelasjon, regresjonskoeffisient,
      effekt) OG nevnte forutsetninger (tilfeldig utvalg, normalitet/CLT, binomisk-vilkår).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-
      `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitlene (3.6, 4.3, 5.6, 6.3, 7.3) har
      løsningsoppskrift + sensor-kommentert case + 8–16 oppgaver; øvingseksamenene
      (8.3, 8.4) er komplette sett med `collapsible` A-besvarelse per oppgave.
- [ ] **Quiz-sum ≥ 666 og flashcard-sum ≥ 558** per kvotetabellen (kontrollsummér mot
      §3-tabellen — den er autoritativ; gulvet er 500/500, tabellen ligger over).
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 2 øvingseksamener; settene og prøvene
      dekker samlet sjangrene A–L minst én gang, og både det klassiske regimet og
      kode-D-/nyere-malen.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (bransjer,
      steder, produkter), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn); kalibreringsverdiene fra reelle
      fasiter brukes kun til å velge vanskelighetsgrad, aldri som oppgavetall; pensum
      (amerikansk business-statistikk-lærebok i Anderson–Sweeney–Williams' tradisjon)
      refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
      kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`; institusjonssiden
      (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot ECON2130 og de bygde SOK-bøkene

SØK1004 er NTNUs statistikkemne. Det er **ikke** dekket av noen bygd SOK-bok — de
øvrige SOK/SØK-skjelettene i systemet er alle **mikroøkonomi**, ikke statistikk, og
overlapper null med SØK1004:

| Bok | Fag | Overlapp med SØK1004 |
|---|---|---|
| **SOK1002** (NTNU) | Mikroøkonomi (konsument-/produsentteori, Lagrange) | **Null** — helt annet fag |
| **SØK1011** (NTNU) | Markeder og markedssvikt (oligopol, spillteori, eksternaliteter) | **Null** — helt annet fag |
| **SØK3500** (BI) | Samfunnsøkonomi II (makro/mikro-anvendelser) | **Null** — helt annet fag |

Det relevante **søsterverket** er **ECON2130 Statistikk 1** (UiO) — samme
kjernepensum, motsatt verktøy/stil (§1, §0 i analysen):

| Tema | ECON2130 (UiO) — bygger ut | SØK1004 (NTNU) — bygger ut |
|---|---|---|
| Sannsynlighet, Bayes, kombinatorikk | JA (R-basert) | **JA** — Del 2 (håndregning/tabelloppslag) |
| Diskrete/kontinuerlige fordelinger (binomisk, normal, **Poisson**) | JA — inkl. **Poisson** | **JA** — Del 3, men **UTEN Poisson** (fraværende i SØK1004-arkivet) |
| Sentralgrenseteoremet | JA | **JA** — Del 3 (kap. 3.4) |
| Estimering, konfidensintervall | JA (simulerings-tolkning) | **JA** — Del 4 (håndregnet, $z/t$-tabell) |
| Hypotesetest, p-verdi | JA («er p-verdien stokastisk?», CLT navngitt) | **JA** — Del 5 (firetrinns håndregning, kontekstkonklusjon) |
| **Enkel lineær regresjon** | **NEI** (aldri testet på 13 sett) | **JA** — Del 6 (SØK1004-unikt) |
| **Kjikvadrat / F-test for to varianser** | **NEI** (fraværende) | **JA** — Del 7 (NTNU-signatur) |
| Bredt deskriptivt begrepslag (Chebyshev, Simpsons paradoks, trimmet snitt, matched samples) | delvis | **JA** — Del 1 (SØK1004-bredere) |
| **R / simulering / Monte Carlo / kausalitet-seleksjon / teststyrke ved simulering** | **JA** (ECON2130s signatur) | **NEI** — bevisst utelatt (ikke SØK1004-skoleeksamen; Stata var korona-engangstilfelle 2021) |

**Kryssreferansepraksis:** For det **felles kjernepensumet** (Del 2–5) kan
Forkunnskaper-blokkene lenke til de tilsvarende ECON2130-kapitlene som *valgfri
utdypning* (`[tittel](/bok/econ2130/<chapterId>)`) — men **SØK1004 er den
selvstendige verten**: den skriver ut sin egen håndregnings-/tabelloppslags-versjon
og forutsetter ikke at studenten har lest ECON2130. Lenkene er komplement, ikke
forkunnskaper boka mangler. Der ECON2130 bygger noe SØK1004 IKKE skal ha (R,
simulering, Poisson, kausalitetsdrøfting), lenkes det **ikke** inn — det er utenfor
SØK1004-pensum. Merk at ECON2130 selv er på **skjelett**-stadiet (ikke bygd ennå),
så lenkene virker først når begge bøkene er live; forfatteren skal derfor bare lenke
til ECON2130-kapitler som faktisk finnes ved byggetidspunktet (jf. Leserkravet «lenk
kun til kapitler som finnes»).

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Standardresultatene (inferens-kjeden,
> $Z=(X-\mu)/\sigma$, binomisk $E=n\pi$/$\text{Var}=n\pi(1-\pi)$, KI-formlene,
> testobservatorene, $\chi^2=\sum(O-E)^2/E$, $F=S_1^2/S_2^2$, minste kvadraters
> $b_1=r\,s_y/s_x$) er faglige fakta uten verkshøyde. Pensum-referansen (amerikansk
> business-statistikk-lærebok i Anderson–Sweeney–Williams' tradisjon,
> *Statistics for Business & Economics*, evt. Newbold) er *(verifiser)* — ingen
> pensumbok er navngitt i sensorveiledningene, og den eksakte utgaven/kapittel-
> nummereringen bør sjekkes mot gjeldende emnebeskrivelse før pensumankere skrives
> inn i kapitlene. Kode-D-regimet (kun enkel kalkulator + digital formelsamling) er
> bekreftet for H2025 men *(verifiser)* for kommende semestre — hjelpemiddelregimet
> har vært i endring (kode C → A → D). At Poisson-fordelingen er fraværende i
> SØK1004-arkivet (til forskjell fra ECON2130) er dokumentert i analysens §7.
