# Bokskjelett: STV1020 Politisk analyse 2 — eksamensrettet lærebok (UiO)

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (16 sett 2012–2023, 5 sensorveiledninger V2019–V2023).
> Alle oppgaver, case, tallsett, tabeller og formuleringer i boka skal være
> NYSKREVNE (se §6-verifikasjon). Ingen oppgavetekster, R-utskrifter eller
> sensorformuleringer fra UiO-arkivet gjengis ordrett.

---

## 1. Bokens identitet

- **Kurs-id:** `stv1020`
- **Tittel:** *STV1020 Politisk analyse 2 — Forskningsdesign og kvantitative metoder (UiO)*
- **Level:** `'Høyskole'`
- **Institusjon:** UiO — Institutt for statsvitenskap (registreres under «UiO» i
  `institusjoner.ts`, visningsnavn «STV1020 Politisk analyse 2»).
- **Arketype:** **HYBRID** — primær: drøfting (DNA-drofting.md), med tunge lånte
  regnefag-elementer (DNA-regnefag.md) i statistikk-/regresjonsdelene (Del 4–7).
  Forbilde: psy1010 (hybrid drøfting/tall-metodefag). Hybrid-valgene er dokumentert
  i §2b.
- **Kapittelantall:** 35 (Del 0: 2 · temadeler 1–8: 22 · eksamenstrening Del 9: 11)
- **Estimert totaltid:** ~1 940 minutter (~32 timer) fordelt per kapittel under.
- **Quiz totalt:** 632 (krav ≥500) · **Flashcards totalt:** 578 (krav ≥500) —
  se kvotesammendrag i §3. Quiz er bevisst høyest fordi **Del 1 = 30 flervalg
  (30 % av karakteren) rettes automatisk**, og flervalgsbanken er direkte
  Del 1-trening (jf. §2b).
- **Fakta:** 10 studiepoeng, Institutt for statsvitenskap UiO. Kjernepensum:
  **Kellstedt & Whitten, *The Fundamentals of Political Science Research*** (K&W) —
  den ENESTE navngitte pensumforankringen i analysen (kausalitetskriteriene og
  OLS-forutsetningene siteres side for side i veiledningene). Emnet undervises hver
  vår. Hjelpemidlene er romslige (formelark + t-/kjikvadrat-tabeller vedlagt; i
  2021 hele pensum) — derfor gir ren formelgjengivelse lite; poengene ligger i
  metodevalg, begrunnelse og **substansiell tolkning i kontekst**.

**Pitch:** STV1020-eksamen har hatt samme todeling siden 2015: **Del 1 er 30
flervalgsspørsmål (30 poeng, auto-rettet)** over hele pensumbredden, og **Del 2 er
én lang, sammenhengende statsvitenskapelig case (70 poeng)** som følger
forskningsprosessen fra hypotese til residualdiagnostikk. To ferdigheter bærer
faget: å **bestemme og begrunne målenivå** (16 av 16 sett) og å **tolke en
regresjonstabell — konstantledd og koeffisient — i kontekst** (16 av 16). Rundt
disse ligger utvalgsutvelging, R²-tolkning, kausalmodeller, prediksjon, dummyer,
t-test og OLS-diagnostikk. Statistikken er lavterskel og tolkningsdrevet — INGEN
sannsynlighetsteori, fordelinger, bevis eller kombinatorikk — men mekanisk
presisjon (df = N − k − 1, nøyaktig k − 1 dummyer, utregninger vist trinn for
trinn) må sitte. Sensors gjennomgående regel er at **hver koeffisient gir separate
poeng for teknisk OG substansiell tolkning, og et svar uten kontekst-konklusjon får
aldri full uttelling**. Derfor er boka bygget som en drøftingsbok med innebygd
tolkningsdisiplin: hvert regnestykke ender i en substansiell konklusjon, hver
liste (kausalitetskriterier, OLS-forutsetninger) leveres komplett, og
øvingsmaterialet drilles mot BEGGE eksamensdeler samtidig som stoffet er organisert
etter forskningsprosessen slik Del 2-casene er.

---

## 2. Makrostruktur

Boka organiseres **etter forskningsprosessen**, slik den sammenhengende Del 2-casen
alltid gjør (analysen §1 og §7 «Anbefalt arketype»): hypotese → variabler/målenivå →
utvalg → deskriptiv/bivariat analyse → regresjon → dummyer/interaksjon/kontroll →
residualdiagnostikk → validitet/kausalitet. Del 0 etablerer eksamenskart og
besvarelseshåndverk; Del 9 er eksamenstrening (Del 1-flervalg + Del 2-case-sjanger
+ regnedrill + modellbesvarelser + øvingseksamener). Omfanget per del følger
gjenganger-score fra analysens temafrekvenstabell (§2): 16/16-temaene får flest
kapitler og oppgaver, 6/16-temaene får kompakte kapitler.

### Seksjonstitler (blir `sectionNames` i metadata)

| Del | Seksjonstittel | Kap. | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|
| 0 | Eksamenskart og besvarelseshåndverk | 2 | DNA-obligatorisk. Todelingen (30 flervalg + case), forskningsprosess-løypa og «teknisk + substansiell tolkning»-mantraet må etableres før fagstoffet. |
| 1 | Forskningsdesign, kausalitet og hypoteser | 4 | Hypotese/variabler 13/16 (fast åpningsoppgave), kausalmodell 14/16, K&W-kriteriene 10/16 (fagets signatur: korrelasjon ≠ kausalitet), design/casestudier 9/16. Innledningen til hele forskningsprosessen. |
| 2 | Variabler og målenivå | 2 | Målenivå 16/16 — fagets sikreste enkelttema og styrer ALT nedstrøms (korrelasjonsmålvalg, dummyer, hvilke regnestykker som er meningsfulle). Operasjonalisering/målevaliditet 12/16. |
| 3 | Utvalg og sannsynlighetsutvelging | 2 | Utvalgsteknikk + begrunnelse 15/16 (nesten hvert sett); frafall/seleksjon/generalisering fast forbeholdsledd. |
| 4 | Deskriptiv statistikk og bivariat analyse | 3 | Deskriptiv fra tabell/figur 13/16; korrelasjonsmålvalg 11/16; krysstabellmål 6/16 (gammelt regime, men «billig når det kommer»). Hybrid-del: regnefag-lån. |
| 5 | OLS-regresjon: bivariat og multippel | 4 | Ryggraden. Tolke konstant/koeffisient 16/16, R² 15/16, prediksjon/ligning 13/16, t-test 13/16. Hybrid-del: regnefag-lån + R-utskrift. |
| 6 | Dummyer, interaksjon og kontroll | 3 | Dummyer 13/16 (hard krav k − 1); kontroll vs. interaksjon er uttalt toppkandidat-skille; samspill 9/16; utelatt variabelskjevhet 5/16. |
| 7 | Regresjonsdiagnostikk og residualer | 2 | OLS-forutsetninger + residualdiagnostikk 13/16 — fast avslutningsgrep i nyere sett («kan du stole på testene?»). Uteliggere/multikolinearitet A-differensiering. |
| 8 | Validitet, generalisering og kausal slutning | 2 | Intern vs. ytre validitet (toppkandidat-skille, feil #11) + kausal slutning fra observasjonsdata som capstone — «validitet/kausalitet til slutt» avslutter alltid Del 2-casen. |
| 9 | Eksamenstrening | 11 | Del 1-flervalgssjanger + Del 2-case-sjanger + regnedrill (regnefag-DNA) + tegne-/drøftedrill + feilvaksine + 3 modellbesvarelser (DNA-krav ≥3) + 3 øvingseksamener (hver = 30 flervalg + case). |

Rasjonale for kapittelfordelingen: Nivå 1-temaene fra analysen §7 (målenivå,
regresjonstolkning, forskningsprosess-løypa, t-test, dummyer) får egne, godt
kvoterte kapitler; Nivå 2-temaene (kausalmodeller, OLS-diagnostikk, utvalg/validitet,
deskriptiv, korrelasjonsmålvalg, samspill) får solide kapitler; Nivå 3-temaene
(krysstabellmål for hånd, dekomponering/stianalyse, casedesign, p-verdi-teori,
standardiserte koeffisienter, uteliggere, feilslutninger, R-utskriftlesing) samles i
kompakte kapitler eller randsoner — IKKE egne tunge kapitler.

### 2b. Hybrid-valg og avvik fra DNA-malene (dokumentasjonsplikt fra README §2)

**Primær arketype er drøfting** fordi omtrent halve faget (forskningsdesign,
kausalitet, validitet, utvalg, casestudier) er begrepsdrøfting uten fasit der sensor
vurderer begrepspresisjon, K&W-forankring og case-anvendelse. Designkapitlene
(Del 1, 3, 8) følger drøftings-DNAets blokkrekkefølge: tip Eksamensvinkel → text
landskap → definition kjernebegreper → text posisjoner/spenninger → example
anvendelse → warning typiske feil → exercise → collapsible pensumkart.

**Lånt fra DNA-regnefag.md** (begrunnelse: den andre halvparten av faget er anvendt
regresjonsstatistikk der presisjon og trinn-for-trinn-utregning kreves; analysen §7
anbefaler eksplisitt hybrid drøfting/regnefag på linje med psy1010, med «rikelig med
tolknings- og tegneøvelser»):

1. **`example`/`exercise` med full utregning OG tolkning** i statistikk-/
   regresjonskapitlene **4.1–4.3, 5.1–5.4, 6.1–6.3, 7.1** (+ drillkapitlet 9.3):
   gjennomregnede eksempler steg for steg, exercise-serier med stigende
   vanskelighetsgrad som ender på eksamensnivå, alle med `solution` + `hints`.
   Tallene skal være «snille» som i eksamenssettene (heltalls-koeffisienter, R² som
   0,19/0,34, t-verdier rundt 1,5–3) — nyskrevne analoger til veiledningenes tall.
2. **Tolkningskontrakt (hybrid-regel, se §2d — gjelder ALLE regresjonsutregninger):**
   hvert regnestykke og hver koeffisient avsluttes med en fast firedelt struktur som
   ender i en substansiell konklusjon i kontekst. En utregning uten kontekst-
   konklusjon er ikke ferdig — dette speiler sensorregelen (analysen §4.1) om at
   teknisk og substansiell tolkning gir SEPARATE poeng.
3. **Formel-/notasjonskontrakt per regnekapittel** (regnefag-DNAets innholdskontrakt):
   formler og notasjon angis eksplisitt under og skal brukes i EMNETS notasjon
   (§2c) — ikke lærebok-alternativer (σ-baserte formler, α/β-intercept osv.).
4. **R-utskrift som tekst-tabell** (se §2d): fra 2021 leser kandidaten ferdige
   R-regresjonstabeller. Siden boka ikke kan bruke bilder, gjengis R-utskrift som
   monospaced tekst-tabell (Estimate / Std. Error / t value / Pr(>|t|),
   signifikansstjerner, SE i parentes). Innføres i 5.2, forsterkes i 5.4/7.1 og
   modellbesvarelse 9.8. Kandidaten skriver ALDRI egen R-kode (analysen §6 «Skal
   IKKE bygges tungt på»).
5. **Drillkapittel-mekanikk** i 9.3 (regnefag-DNAets drillkapittel: løsningsoppskrift
   → gjennomregnet eksamenscase med sensor-margnotater → 8–15 varianter).

**Avvik fra ren drøftings-DNA (begrunnede):**
- **Organisering etter forskningsprosessen, ikke etter frekvens** (drøftings-DNA
  ordner temadeler etter frekvens). Begrunnelse: Del 2 ER én sammenhengende case som
  følger prosessen fra hypotese til residual; å speile den rekkefølgen trener
  overgangene mellom trinnene — nøyaktig der svake kandidater mister koblingene.
  Frekvensen styrer i stedet OMFANGET (kapittel- og oppgaveantall per del).
- **Modellbesvarelsene (9.6–9.8) bruker «C-kjerne + A-plusspoeng-lag»** i stedet for
  to separate fulltekstbesvarelser (lånt fra psy1010): veiledningene skiller selv
  slik (kjernemomenter som gir bestått + eksplisitte pluss-markører for A). A-laget
  margmarkeres på én besvarelse; en kort kommentert C-variant viser gapet.
- **Feilvaksine-kapittel (9.5)** — utvidelse av DNA-malen (psy1010-presedens):
  samler analysens 13 typiske feil (§5) med før/etter-omskrivinger.
- **Pensumforankringen er TYNN — kun ett anker** (K&W). Emnet har ikke SVMET-aktig
  forfattermangfold. Flashcard-profilen dreies derfor fra begrep↔forfatter til
  **begrep↔definisjon↔kontrastbegrep** (nominal↔ordinal↔intervall↔forholdstall,
  bakenforliggende↔mellomliggende, kontroll↔interaksjon, intern↔ytre validitet,
  statistisk↔substansiell signifikans, type I↔type II) — det er nøyaktig presisjonen
  deloppgavene tester. K&W-forankring markeres KUN der analysen bekrefter den
  (kausalitetskriteriene, OLS-forutsetningene). Norske fagtermer (målenivå,
  korrelasjonsmål, spuriøs sammenheng) presenteres som fagets allmenne
  begrepsapparat uten oppdiktet forfatterattribusjon; forelesningsforankrede
  konvensjoner merkes ⚠.
- **Del 1-flervalg = quiz.** Quiz-kvoten er bevisst høyest av alle bøkene i løypa
  (632) fordi flervalgsdelen er en HEL auto-rettet eksamensdel (30 %). Quiz
  kalibreres som Del 1-trening: flervalg med nabobegrep-distraktorer, «hvilket
  målenivå/korrelasjonsmål?»-format, «hvilken feil begår kandidaten?»-format og
  små regne-/tolkningsspørsmål med oppgitt tabell.
- **Ingen jus-/lovsjekk, ingen WebFetch** (ikke relevant fagtype).

**Bevisst utelatt (analysen §6 «Skal IKKE bygges tungt på»):** sannsynlighetsteori,
fordelinger, kombinatorikk, simulering, formelle bevis; egen R-koding;
kovarians-/matriseregning, maximum likelihood, logistisk regresjon. OLS er
gjennomgående selv når Y er en 0/1- eller prosentvariabel. Tunge håndutregninger av
gamma/rho/kjikvadrat er faset ut etter 2014 og holdes på ett kompakt kapittel (4.2)
siden korrelasjonsmål-VALG lever videre.

### 2c. Notasjonskontrakt (AUTORITATIV — brukes i hele boka)

Alle symboler under er hentet fra analysens §6 og er bokas standardnotasjon.
README-kravet om **Symbol- og formelliste per delkapittel** (collapsible rett etter
Forkunnskaper) gjelder ALLE kapitler som bruker symboler/formler — også
drøftingskapitler som bare nevner b, r eller p. Listen er per delkapittel og arver
aldri fra tidligere kapitler.

| Notasjon | Betydning |
|---|---|
| $Y_i$, $\hat{Y}$ | avhengig variabel for enhet $i$; predikert (forventet) verdi |
| $X_{1i}, X_{2i}, \dots$ | uavhengige variabler (forklaringsvariabler) |
| $b_0$ | konstantledd (også «konstant»/«intercept»/$\alpha$) = $E(Y \mid \text{alle } X = 0)$ |
| $b_1, b_2, \dots$ | stigningskoeffisienter = endring i $Y$ per én enhets økning i $X_j$, kontrollert for øvrige |
| $e_i$ | residual/restledd/feilledd (også $\varepsilon_i$); $e = Y - \hat{Y}$ |
| $\beta$ | standardisert koeffisient (enhetsfri, sammenlignbar styrke — «bør kjenne til») |
| $b_3(X_1 \cdot X_2)$ | samspills-/interaksjonsledd (produktledd) |
| $R^2$ | forklart andel av variasjonen i $Y$, $R^2 \in [0,1]$; $1 - R^2$ = uforklart andel |
| $N$, $k$ | antall enheter/observasjoner; antall uavhengige variabler |
| $t = b / SE(b)$ | testobservator for en koeffisient; $SE(b) = b/t$ når $b$ og $t$ er oppgitt |
| $df = N - k - 1$ | frihetsgrader for regresjonens t-test |
| $H_0, H_1$ | null- og alternativhypotese |
| $\alpha$, $p$ | signifikansnivå (= P(type I-feil)); p-verdi (signifikanssannsynlighet) |
| `*` / `**` / `***` | signifikansstjerner i R-tabeller: $p<0{,}05$ / $p<0{,}01$ / $p<0{,}001$ |
| $\bar{X} = \sum x / N$ | gjennomsnitt (krever metrisk nivå) |
| modus, median, variasjonsbredde, modalprosent | hyppigste verdi; midtverdi (≥ ordinal); maks − min; $100 \cdot$ største andel |
| odds, odds ratio (OR) | $P(\text{hendelse})/P(\text{ikke})$; $\text{odds}_1/\text{odds}_2$ (OR = 1 → ingen sammenheng) |
| $\gamma = (P-Q)/(P+Q)$ | gamma (P = samstemte, Q = motstridende par) |
| $\rho = 1 - 6\sum d^2/(N^3 - N)$ | Spearmans rho (rangkorrelasjon) |
| kjikvadrat $= \sum (f - f_e)^2/f_e$; Fi $= \sqrt{\text{kjikvadrat}/N}$ | tolkes mot kjikvadrat-tabell med df |
| $r$ | Pearsons korrelasjonskoeffisient ($[-1, 1]$, lineær sammenheng) |
| $SE(\hat{p}) = \sqrt{\hat{p}(1-\hat{p})/n}$ | standardfeil for en andel |

**Målenivå-termer (konsekvent):** nominal-/**kategorisk** nivå, **ordinal**,
**intervall**, **forholdstall/metrisk** (metrisk = intervall + forholdstall slått
sammen; noen sett skiller, andre bruker «metrisk» — boka nevner begge konvensjoner).
Dikotom/binær = to verdier. **Kausaltermer:** avhengig/uavhengig variabel,
bakenforliggende/mellomliggende variabel, spuriøs sammenheng, direkte/indirekte
effekt, dekomponering/stianalyse, rekursiv/ikke-rekursiv modell, dummyvariabel,
referansekategori, samspill/interaksjon, kontroll, forklart varians, uteligger,
innflytelsesrik observasjon.

### 2d. Tolkningskontrakt og R-utskrift-format (AUTORITATIV for regresjonskapitlene)

**Tolkningskontrakten** er bokas faste svarstruktur for alle regresjonsstørrelser
(konstantledd, hver koeffisient, R², prediksjon, restledd, samspillsledd). Den
gjentas i hvert regresjonskapittel (5.1–5.4, 6.1–6.3) som en `tip`-blokk og drilles
i 9.3. Fire ledd, alltid:

1. **Teknisk tolkning** — hva størrelsen betyr generelt, i tallets språk
   («$b_1 = -2{,}5$: $Y$ synker 2,5 enheter per én enhets økning i $X_1$, kontrollert
   for de andre variablene»).
2. **Substansiell tolkning i kontekst** — samme tall oversatt til studiens
   virkelighet med variabelnavn og enheter («for hvert ekstra barn synker
   forelderens politiske deltakelse med 2,5 poeng på deltakelsesskalaen»).
3. **Signifikans/robusthet** — er størrelsen statistisk til å stole på (t-test /
   p-verdi / stjerner), og er den substansielt stor eller liten? (statistisk vs.
   substansiell signifikans — toppkandidat-skille).
4. **Konklusjon/forbehold** — hva funnet betyr for hypotesen, og forbeholdet
   (kausalitet? urealistisk/ikke-tolkbart konstantledd? utenfor dataområdet?).

Sensorregelen (analysen §4.1): ledd 1 og 2 gir SEPARATE poeng; et svar som stopper
etter ledd 1 får aldri full uttelling. Boka lærer alltid alle fire — særlig for
konstantledd (kommenter om det er substansielt meningsfullt: negativt konstantledd
på en prosentskala, eller $Y$ når $X = 0$ utenfor dataområdet, er ofte ikke
tolkbart — flagg det).

**R-utskrift-format (tekst-tabell, brukes fra 5.2):** R-regresjonstabeller gjengis
slik i `text`-/`example`-blokker (monospaced, egne NYSKREVNE tall):

```
Coefficients:
              Estimate  Std. Error  t value  Pr(>|t|)
(Intercept)   3199.4      612.3       5.22    0.000  ***
VENSTRESTYRT  1420.7      388.1       3.66    0.001  ***
INNBYGGERE      -0.014     0.006     -2.33    0.026  *
---
Signif. codes:  *** 0.001  ** 0.01  * 0.05
Multiple R-squared: 0.34
```

Kandidaten skal kunne lese: koeffisienter fra Estimate-kolonnen, SE fra Std. Error
(eller «SE i parentes»-varianten under koeffisienten), t-verdi, p-verdi/stjerner, og
$R^2$ nederst. Boka viser BÅDE R-utskrift-formen OG den håndregnede formen (fra
formelark) parallelt der begge er mulige.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = gjenganger-score + oppgavesjanger (bokstav
> A–O fra analysen §3) + prioritetsklasse (perfekt / kunne / kjenne, fra analysen
> §7). **Typiske feil** refererer analysens §5 med #nummer (samlet i 9.5).
> **Kvote** = quiz / flashcards. ⚠ = forelesnings-/konvensjonssensitiv kobling
> (begrepet er stabilt, den konkrete konvensjonen/grensen kan variere med
> forelesningsopplegg — beholder forbehold i pensumkart-blokkene).

### Del 0 — Eksamenskart og besvarelseshåndverk

#### Kapittel 0.1: Slik testes STV1020
- **id:** `stv1020-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart.
- *Description:* Todelingen (30 flervalg + én sammenhengende case), forskningsprosess-
   løypa som Del 2 følger, temafrekvensen 2012–2023 og strategien som følger av at
   Del 1 rettes automatisk og Del 2 belønner tolkning i kontekst.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (16 sett). Skal formidle:
  (a) **Total 100 poeng: Del 1 = 30 flervalgsoppgaver (30 p, auto-rettet), Del 2 =
  kortsvar (70 p)**, én sammenhengende case med a)–u)-deloppgaver. Bestått (E) krever
  å løse de mekaniske kjerneoppgavene (målenivå, tolke konstant/koeffisient, R²,
  enkel t-test); A krever bredde på tvers av metodedrøfting OG regnestykker.
  (b) **Del 2 følger alltid forskningsprosessen:** hypotese → populasjon/enheter/
  variabler → utvalg → operasjonalisering/målenivå → kausalmodell → regresjonsligning
  → tolke tabell → signifikanstest → dummy/samspill → OLS-diagnostikk →
  validitet/kausalitet til slutt. Boka ER organisert etter denne løypa (Del 1→8).
  (c) **Regimeskifter:** 2012–14 «gammelt regime» (håndregning på krysstabellmål
  gamma/rho/odds/kjikvadrat + essaypreget begrepsdrøfting, ingen flervalgsdel);
  2015→ dagens mal (OLS-regresjon + forskningsdesign + auto-rettet flervalgsdel
  foran); 2021→ R-utskrift introdusert (kandidaten LESER ferdige R-tabeller);
  2022–23 artikkel-/policy-forankret case. Boka prioriterer det nye regimet, men
  beholder ett krysstabellkapittel. (d) Temafrekvens-tabellen fra analysen §2 i
  destillert form: målenivå 16/16, regresjonstolkning 16/16, utvalg 15/16, R² 15/16,
  kausalmodell 14/16, deskriptiv 13/16, t-test 13/16, prediksjon 13/16, dummyer
  13/16, OLS-diagnostikk 13/16, ligning 13/16, validitet 12/16, korrelasjonsmålvalg
  11/16, K&W-kriterier 10/16, samspill 9/16, casedesign 9/16. (e) Hjelpemidler er
  romslige (formelark + tabeller) → ren formelgjengivelse gir lite; metodevalg,
  begrunnelse og substansiell tolkning er poenget. (f) **Følgefeil straffes mildt** —
  et galt mellomsvar trekker ikke videre nedover; hvert trinn poengsettes for seg.
  Prioritet: perfekt (metanivå).
- **Innholdskontrakt:** ingen fagbegreper — presise beskrivelser av begge
  eksamensdeler; oppgavesjanger-katalogen A–O fra analysen §3 i destillert form med
  typisk vekt; tidsbudsjett for 4-timerseksamen (~40 min Del 1 + ~200 min Del 2).
- **Drøftingsakser:** ingen (kartkapittel).
- **Case-forslag:** «Slik leser du et sett» — gjennomgang av ett nyskrevet
  eksempelsett (30-flervalgs-smakebit + en case-åpning: hypotese om
  kommunestørrelse og innbyggertilfredshet) som viser hvordan Del 2 følger løypa.
- **Typiske feil:** å bruke for lang tid på Del 1 (auto-rettet, jevn vekt — ikke
  mer verdt per minutt); å hoppe over de «mekaniske» E-poengene (målenivå, tolke
  konstant) jakten på A-drøfting.
- **Kvote:** 12 quiz / 8 flashcards (formatfakta, sjangergjenkjenning,
  forskningsprosess-rekkefølgen).

#### Kapittel 0.2: Besvarelseshåndverket — teknisk og substansiell tolkning
- **id:** `stv1020-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `stv1020-0-1`
- **Kapitteltype:** besvarelseshåndverk (drøftings-DNAets essayhåndverk, kalibrert
  til STV1020s todeling).
- *Description:* Sensorens vurderingsfilosofi: hvorfor hver koeffisient gir separate
  poeng for teknisk og substansiell tolkning, hvorfor lister må leveres komplett, og
  hvordan man bygger et A-svar over C-kjernen.
- **Eksamensbelegg:** Destillat av sensorkravene (analysen §4) — de faste
  metareglene på tvers av veiledningene. Prioritet: perfekt. Skal operasjonalisere:
  (a) **Substansiell tolkning i kontekst er selve poenget** — teknisk («b = −2,5»)
  og substansiell («for hvert ekstra barn synker deltakelsen med 2,5 poeng») gir
  SEPARATE poeng; svar uten kontekst-konklusjon får aldri full uttelling. Innfør
  **tolkningskontrakten** (§2d) som bokas gjennomgående mantra. (b) **Følgefeil
  straffes minimalt** — feil mellomsvar trekker ikke videre; delvis riktig utregning
  gir delvis uttelling; utregning MÅ vises. (c) **Metodefrihet med begrunnelsesplikt**
  — alternativ notasjon/variabelnavn godkjennes likt, men VALGET (målenivå,
  korrelasjonsmål, utvalgsteknikk) må begrunnes. (d) **Alle elementene må nevnes** —
  kausalitetskriteriene (4), OLS-forutsetningene (K&W ni, gruppert i tre),
  validitetstypene (3) poengsettes punkt for punkt; ufullstendige lister koster.
  (e) **Feil i eksamensteksten tilgis kandidaten** → boka kan lære «robust»
  tolkning. (f) **Substansiell vs. statistisk signifikans belønnes** — en effekt kan
  være statistisk signifikant men substansielt liten, eller motsatt. (g) Nivåbildet:
  A/B løser de vanskelige deloppgavene, tolker i kontekst, ser
  kontroll-vs-interaksjon og intern-vs-ytre validitet, kobler residualplott til
  konsekvens; C treffer de mekaniske kjernepoengene men blir stående i teknisk
  tolkning; E løser de rene kjerneoppgavene. Bokas mantra innføres: **«regn/definer
  — tolk i kontekst — konkluder»**.
- **Innholdskontrakt:** besvarelsesarkitektur per deloppgave (teknisk → substansiell
  → signifikans → konklusjon); tidsbudsjett for 4 timer; «vis utregningen»-regelen;
  Del 1-flervalgsstrategi (eliminasjon, nabobegrep-feller, ingen minuspoeng-antakelse
  — verifiser om gjeldende ordning trekker for feil ⚠).
- **Drøftingsakser:** bredde (alle deloppgaver besvart, alle listeelementer nevnt)
  vs. dybde (A-skillene løst); når man skal levere «robust» tolkning ved uklar
  oppgavetekst.
- **Case-forslag:** Samme koeffisient («b = 1420 for VENSTRESTYRT på eiendomsskatt
  per innbygger») tolket tre ganger — E (kun «positiv sammenheng»), C (teknisk
  tolkning), A (+ substansiell i kontekst + statistisk vs. substansiell signifikans +
  kausalitetsforbehold) — med margkommentarer.
- **Typiske feil:** #5 tolke koeffisient/konstant uten kontekst (C-tak); #13
  ufullstendige lister (to av fire kriterier); usynlig utregning.
- **Kvote:** 14 quiz / 10 flashcards (sensorreglene, tolkningskontraktens ledd,
  nivåkjennetegn, flervalgsstrategi).

### Del 1 — Forskningsdesign, kausalitet og hypoteser

#### Kapittel 1.1: Forskningsspørsmål, hypoteser og variabler
- **id:** `stv1020-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** `stv1020-0-2`
- **Kapitteltype:** tema.
- *Description:* Forskningsprosessens start: fra en hypotese til populasjon,
  analyseenhet og avhengig/uavhengig variabel — den faste åpningsdeloppgaven på Del 2.
- **Eksamensbelegg:** 13/16 (sjanger A). Fast åpningsoppgave: «hva er populasjonen,
  enhetene og variablene i denne hypotesen?» (ofte 3–4 p). Prioritet: **perfekt**
  (som fast åpning og fundament for hele løypa).
- **Begrepskontrakt:** hypotese (påstand om sammenheng mellom to variabler, må kunne
  testes empirisk); **populasjon** (f.eks. «alle kommuner i Norge», «alle verdens
  land», «den norske befolkningen»); **analyseenhet** (kommune, land, individ — hva
  hver rad i datasettet er); **avhengig variabel** (det som forklares, Y) vs.
  **uavhengig variabel** (det som forklarer, X); dikotom/kategorisk/kontinuerlig
  variabel (frempek 2.1); retningen på en hypotese (positiv/negativ sammenheng);
  operasjonaliseringsbehovet (frempek 2.2); enhetsnivå og feilslutninger (økologisk/
  atomistisk) nevnes kort (dybde i 1.4).
- **Formler/notasjon:** symbolfattig; kun rollemerkingen Y (avhengig) / X (uavhengig)
  som brukes i hele resten av boka.
- **Drøftingsakser:** hva som er analyseenhet når hypotesen kan leses på flere nivåer
  (individ vs. kommune); hvorfor valg av avhengig/uavhengig variabel følger av
  hypotesens retning, ikke av dataene.
- **Case-forslag:** «Venstrestyrte kommuner krever inn mer eiendomsskatt per
  innbygger enn høyrestyrte» — identifiser populasjon (alle norske kommuner),
  analyseenhet (kommunen), avhengig variabel (eiendomsskatt per innbygger) og
  uavhengig variabel (politisk styre), slik en A-besvarelse gjør det (med
  begrunnelse, ikke bare merkelapp).
- **Typiske feil:** å bytte om avhengig og uavhengig variabel; å forveksle
  analyseenhet med populasjon; å oppgi en variabel som «populasjon».
- **Kvote:** 22 quiz / 22 flashcards (populasjon/enhet/variabel-diagnoser,
  avhengig↔uavhengig-par).

#### Kapittel 1.2: Kausalitet — Kellstedt & Whittens fire kriterier
- **id:** `stv1020-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-1-1`
- **Kapitteltype:** tema (fagets signatur).
- *Description:* Skillet mellom samvariasjon og årsak — de fire kriteriene som må
  være oppfylt før man kan snakke om kausalitet, og hvorfor observasjonsdata sjelden
  gir sikker kausalslutning.
- **Eksamensbelegg:** 10/16 (sjanger D-kriterier), stilt nesten ordrett i flere sett;
  korrelasjon ≠ kausalitet er gjennomgående krav. Prioritet: **perfekt** (fagets
  signaturskille, feil #7).
- **Begrepskontrakt (K&W — eksplisitt pensumanker):** **de fire
  kausalitetskriteriene** (Kellstedt & Whitten): (i) **troverdig mekanisme** (en
  plausibel årsaksforklaring for hvordan X påvirker Y); (ii) **utelukke omvendt
  kausalitet** (Y påvirker ikke X); (iii) **samvariasjon** (X og Y henger statistisk
  sammen); (iv) **utelukke bakenforliggende Z** (ingen tredjevariabel skaper begge).
  HARD KRAV (warning): alle fire må nevnes — to av fire er ufullstendig (feil #13).
  Videre: korrelasjon ≠ kausalitet; hvorfor **observasjonsdata** aldri kan utelukke
  ALLE Z → sikker kausalslutning er vanskelig; **randomisert eksperiment** som
  gullstandard (randomisering nøytraliserer bakenforliggende variabler);
  **kontroll/multippel regresjon** som nest beste vei til å isolere direkte effekt
  (bro til Del 5–6).
- **Drøftingsakser:** hvorfor samvariasjon alene aldri er nok; kan omvendt kausalitet
  utelukkes uten eksperiment (tidsrekkefølge, paneldata)? hvorfor politikk-
  konklusjoner fra tverrsnittsdata er risikable.
- **Case-forslag:** «En rapport konkluderer at små kommuner har mest fornøyde
  innbyggere, og en politiker leser dette som årsakssammenheng» — gå gjennom alle
  fire kriteriene og vis hvilke som er usikre (mekanisme? omvendt kausalitet? Z =
  landlig beliggenhet?), og hvorfor observasjonsdataene ikke lukker saken.
- **Typiske feil:** #7 kausal tolkning av observasjonsdata/korrelasjon; #13 nevne to
  av fire kriterier og stoppe; blande «samvariasjon» med «kausalitet».
- **Kvote:** 22 quiz / 24 flashcards (de fire kriteriene ↔ hva hvert utelukker;
  korrelasjon↔kausalitet-kontrast; eksperiment↔observasjonsdata).

#### Kapittel 1.3: Kausalmodeller og stianalyse
- **id:** `stv1020-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-1-2`
- **Kapitteltype:** tema.
- *Description:* Å tegne stimodeller med riktige piler — bakenforliggende,
  mellomliggende og spuriøse sammenhenger — og å dekomponere en sammenheng i
  direkte, indirekte og spuriøs komponent.
- **Eksamensbelegg:** 14/16 (sjanger D-modell) — «tegn kausalmodellen»; dekomponering/
  stianalyse 5/16 (sjanger). Prioritet: **perfekt** (modell) / kunne (dekomponering).
- **Begrepskontrakt:** **bakenforliggende variabel** (Z ligger forut for og påvirker
  både X og Y → skaper **spuriøs sammenheng** mellom X og Y); **mellomliggende
  variabel** (X → Z → Y, formidler en **indirekte effekt**); **direkte effekt**
  (X → Y uten mellomledd); **spuriøs sammenheng** (X og Y samvarierer uten
  årsakssammenheng fordi en Z skaper begge); rekursiv vs. ikke-rekursiv modell
  (piler kun én vei vs. tilbakekobling); generell (fortegn/retning angitt) vs.
  spesifikk (styrke tallfestet) modell; **dekomponering/stianalyse**: en observert
  sammenheng splittes i direkte + indirekte + spuriøs komponent (multippel regresjon
  gir bare den direkte effekten; stianalyse gir størrelsen på alle tre). Modellene
  TEGNES med piler — figur regnes som del av løsningen.
- **Formler/notasjon:** pil-diagrammene er «formlene»; alle tre modelltypene skal
  kunne tegnes og leses (bokstavene X, Y, Z + piler). Symbol- og formelliste-
  collapsible forklarer pilnotasjonen.
- **Drøftingsakser:** bakenforliggende vs. mellomliggende — samme Z, helt ulik
  konklusjon (kontrollere bort spuriøsitet vs. forklare mekanismen); når en
  sammenheng «forsvinner» ved kontroll (spuriøs) vs. «forklares» (mediert).
- **Case-forslag:** «Kommuner med mange kulturhus har høyere valgdeltakelse» — tegn
  og case-tilpass tre modeller: kulturhus → deltakelse (direkte); velstand som
  bakenforliggende Z (spuriøs); samfunnsengasjement som mellomliggende (indirekte);
  vis hvordan hver modell endrer konklusjonen.
- **Typiske feil:** å tegne mellomliggende der oppgaven beskriver bakenforliggende
  (og motsatt); piler i feil retning; #7 lese en spuriøs sammenheng som kausal.
- **Kvote:** 24 quiz / 24 flashcards (modelltype↔pilmønster↔eksempel-tripler;
  direkte/indirekte/spuriøs-dekomponering).

#### Kapittel 1.4: Forskningsdesign og casestudier
- **id:** `stv1020-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `stv1020-1-2`
- **Kapitteltype:** tema (kompakt «bør kjenne til» + flervalgsberedskap).
- *Description:* Designvalgene bak en studie — eksperiment vs. observasjon,
  casestudiens logikk, tverrsnitt vs. panel — og de to feilslutningene som lever i
  flervalgsdelen.
- **Eksamensbelegg:** Casedesign 9/16 (sjanger O); panel/tidsserie 6/16;
  intervju/datainnsamling 4/16; feilslutninger 2/16 (flervalg). Prioritet: kunne
  (casedesign) / kjenne (resten — primært flervalgsstoff).
- **Begrepskontrakt:** eksperiment (manipulasjon + randomisering) vs.
  observasjonsstudie; **teoritestende vs. teoriutviklende** casestudie;
  case-utvalg (ikke velge på avhengig variabel — Geddes-poenget ⚠; velge på
  uavhengig variabel; **most similar systems design** / **most different systems
  design**); **tverrsnitt vs. paneldesign** (samme enheter over tid) vs. gjentatte
  tverrsnitt; **diakrone vs. synkrone data**; kombinere kvantitativ analyse med
  kvalitativ dybdestudie for å avdekke mekanismen; intervjutyper kort (strukturert/
  semistrukturert/uformelt, deltakende observasjon, enquête — flervalgsnivå);
  **feilslutninger**: **økologisk** (fra aggregat til individ) og **atomistisk**
  (fra individ til aggregat).
- **Drøftingsakser:** når kvalitativ dybdestudie utfyller kvantitativ analyse
  (mekanismen); most similar vs. most different — hva hver isolerer; hvorfor
  paneldata gir bedre grep om tidsrekkefølge (bro til 1.2s omvendte kausalitet).
- **Case-forslag:** «Skisser et design for å måle effekten av en ny
  integreringsordning i kommuner» — begrunn valg mellom tverrsnitt og panel, og hvor
  en kvalitativ casestudie ville avdekket mekanismen; pek på en økologisk feilslutning
  i en tenkt konklusjon.
- **Typiske feil:** å velge case på avhengig variabel; #forveksle økologisk og
  atomistisk feilslutning; behandle gjentatte tverrsnitt som paneldata.
- **Kvote:** 20 quiz / 22 flashcards (designtype↔kjennetegn; feilslutningsparet;
  diakron/synkron; most similar/different).

**Prøve-kvote Del 1:** 4 prøver (se §4).

### Del 2 — Variabler og målenivå

#### Kapittel 2.1: De fire målenivåene — bestem og begrunn
- **id:** `stv1020-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `stv1020-1-1`
- **Kapitteltype:** tema (bokas sikreste enkeltkapittel).
- *Description:* Nominal, ordinal, intervall og forholdstall — å bestemme OG begrunne
  målenivået, og å vite hvilke statistiske operasjoner hvert nivå tillater. Fagets
  aller sikreste tema (16/16) og navet som styrer alt nedstrøms.
- **Eksamensbelegg:** 16/16 = 100 % (sjanger komponent i A, E, G, J). Kandidaten må
  BESTEMME og BEGRUNNE nivå, og vite konsekvensen for valg av mål og metode.
  Prioritet: **perfekt** (fagets ryggrad — styrer korrelasjonsmålvalg, dummyer, om
  gjennomsnitt er meningsfullt).
- **Begrepskontrakt:** **nominal/kategorisk** (kun klassifisering, ingen rangering —
  parti, region, kjønn; kun modus og andeler); **ordinal** (rangering uten fast
  avstand — utdanningsnivå i kategorier, holdningsskala; modus + median, ikke
  gjennomsnitt uten forbehold); **intervall** (fast avstand, ingen naturlig nullpunkt
  — årstall, temperatur °C; gjennomsnitt meningsfullt, men ikke forholdstall);
  **forholdstall/metrisk** (fast avstand + naturlig nullpunkt — inntekt, antall,
  alder; alle operasjoner); dikotom/binær som spesialtilfelle; **hvilke operasjoner
  hvert nivå tillater** (rangering, avstand, forholdstall, naturlig nullpunkt); at
  målenivå styrer nedstrøms: valg av korrelasjonsmål (frempek 4.3), om man må lage
  dummyer (frempek 6.1), om gjennomsnitt/SD er meningsfullt (frempek 4.1).
- **Formler/notasjon + tolkningskontrakt:** ingen regneformler; men konsekvensregelen
  er obligatorisk — hver klassifisering ender i «…derfor kan/kan ikke vi regne
  X/bruke mål Y». `example` ×2–3: klassifiser og begrunn 6–8 variabler fra en
  statsvitenskapelig case.
- **Drøftingsakser:** grensen ordinal/intervall for holdningsskalaer (konvensjon,
  ikke naturlov — når «behandles som metrisk»); forholdstall vs. intervall (poenget
  om naturlig nullpunkt); «metrisk» som samlebetegnelse vs. det skarpe skillet.
- **Case-forslag:** En kommunestudie med variablene politisk styre (kategorisk),
  utdanningsnivå (ordinal, tre kategorier), etableringsår (intervall) og eiendomsskatt
  per innbygger (forholdstall) — klassifiser ALLE med begrunnelse og angi hvilke
  statistiske mål hver tillater, slik en A-besvarelse gjør.
- **Typiske feil:** #1 kalle en forholdstallsvariabel «intervall» (mangler
  nullpunkt-poenget), eller behandle ordinal som metrisk; #2 regne gjennomsnitt/SD på
  nominal/ordinal (partipreferanse); klassifisere uten begrunnelse.
- **Kvote:** 30 quiz / 34 flashcards (nivå↔kjennetegn↔tillatt operasjon↔eksempel —
  fagets viktigste flashcard-familie; klassifiseringsdiagnoser).

#### Kapittel 2.2: Operasjonalisering, målevaliditet og reliabilitet
- **id:** `stv1020-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-2-1`
- **Kapitteltype:** tema.
- *Description:* Fra teoretisk begrep til målbar variabel — og de to spørsmålene
  målingen må bestå: måler vi det vi tror (validitet), og måler vi stabilt
  (reliabilitet)?
- **Eksamensbelegg:** 12/16 (sjanger C). Typisk mønster: et formelt policy-mål har høy
  reliabilitet men svikter på validitet fordi det bare fanger én dimensjon.
  Prioritet: kunne.
- **Begrepskontrakt (K&W for validitetstypologien):** **operasjonell definisjon**
  (hvordan begrepet konkret måles); **validitet** — måler vi det vi tror? med K&Ws
  typer: **umiddelbar/face-validitet**, **innholdsvaliditet**, **begrepsvaliditet**
  (og «definisjonsmessig validitet»); **reliabilitet** — får vi samme verdi hver
  gang, uavhengig av måler? relasjonen: reliabilitet er en forutsetning for validitet
  (et stabilt men skjevt mål er reliabelt uten å være valid — nyskrevet analogi, f.eks.
  en spørreundersøkelse som konsekvent overrapporterer valgdeltakelse); hvorfor ett
  formelt mål ofte er reliabelt men fanger bare én dimensjon av begrepet.
  Skillet **målevaliditet vs. slutningsvaliditet** (intern/ytre validitet gjelder
  SLUTNINGER fra studier, ikke selve måleinstrumentet — frempek 8.1; feil #11).
- **Formler/notasjon:** symbolfattig; ev. tolkning av en oppgitt reliabilitetsverdi i
  prosa (aldri regnet).
- **Drøftingsakser:** definisjonsmessig validitet — favner operasjonaliseringen HELE
  begrepet? enkeltdimensjon vs. flerdimensjonalt begrep (demokrati, velferd); høy
  reliabilitet som falsk trygghet.
- **Case-forslag:** «Er ‘antall dager statlig betalt permisjon’ en god
  operasjonalisering av foreldrepermisjonsordninger?» — drøft validiteten (fanger den
  bruk, fleksibilitet, fedrekvote?), foreslå et bedre mål og begrunn; vurder
  reliabiliteten.
- **Typiske feil:** #11 forveksle målevaliditet med intern/ytre validitet; å påstå
  høy validitet uten å drøfte hvilke dimensjoner målet fanger og mister; blande
  validitet og reliabilitet.
- **Kvote:** 22 quiz / 24 flashcards (validitetstype↔spørsmålet den besvarer;
  validitet↔reliabilitet-kontrast; målevaliditet↔slutningsvaliditet).

**Prøve-kvote Del 2:** 4 prøver (se §4).

### Del 3 — Utvalg og sannsynlighetsutvelging

#### Kapittel 3.1: Populasjon, utvalg og sannsynlighetsutvelging
- **id:** `stv1020-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-1-1`
- **Kapitteltype:** tema.
- *Description:* Fra populasjon til utvalg: de fire sannsynlighetsteknikkene, hvorfor
  begrunnelsen (kjent trekksannsynlighet) er poenget, og hvorfor man ikke bare
  undersøker hele populasjonen.
- **Eksamensbelegg:** 15/16 (sjanger B) — «hvilken utvalgsteknikk, og hvorfor?».
  Prioritet: **perfekt**.
- **Begrepskontrakt:** **populasjon** og **universliste/utvalgsramme**;
  **sannsynlighetsutvelging** som fellestrekk (hver enhets sannsynlighet for å bli
  trukket er kjent → gjør feilmarginer og generalisering mulig); de fire teknikkene:
  **enkel tilfeldig** (alle like sannsynlige), **systematisk** (fast avstand fra
  tilfeldig startpunkt), **stratifisert** (populasjonen deles i strata, trekkes
  innen hvert — proporsjonal vs. disproporsjonal; **stratifiseringsvariabel**),
  **klynge** (trekker grupper/klynger, så alle innen); ikke-sannsynlighetsutvalg
  kort (bekvemmelighet — hvorfor det truer generalisering); hvorfor
  totalundersøkelse av hele populasjonen ofte er umulig/unødvendig (kostnad, tid,
  ikke-eksisterende universliste). BEGRUNNELSEN er alltid poenget.
- **Drøftingsakser:** stratifisert vs. enkel tilfeldig for små subgrupper
  (disproporsjonal stratifisering for å sikre nok enheter); klynge vs. stratifisert
  (praktisk vs. presisjon); når bekvemmelighetsutvalg er forsvarlig — og hva som DA
  må sies om generalisering (bro til 3.2/8.1).
- **Case-forslag:** «Du skal teste hypotesen fra 1.1 på et utvalg kommuner. Hvilken
  utvalgsteknikk bør du bruke, og hvorfor? En kollega vil heller undersøke alle
  kommuner — hvilke utfordringer sikter hun til?» — velg og begrunn (f.eks.
  stratifisert på kommunestørrelse), forklar hvorfor totalundersøkelse er tungvint.
- **Typiske feil:** #8 behandle et skjevt/selektert utvalg som representativt; å
  liste teknikkene uten å velge og begrunne (begrunnelsen er kravet); blande
  stratifisert og klynge.
- **Kvote:** 26 quiz / 26 flashcards (teknikk↔kjennetegn↔begrunnelse; proporsjonal/
  disproporsjonal; universliste).

#### Kapittel 3.2: Frafall, seleksjon og generalisering
- **id:** `stv1020-3-2` · **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** `stv1020-3-1`
- **Kapitteltype:** tema (kompakt).
- *Description:* Hva en lav svarprosent gjør med en undersøkelse — frafallsskjevhet,
  seleksjon og trusselen mot å generalisere fra utvalg til populasjon.
- **Eksamensbelegg:** Fast forbeholdsledd i utvalgsoppgavene (del av B, 15/16) og bro
  til ytre validitet (8.1). Prioritet: kunne.
- **Begrepskontrakt:** **svarprosent/responsrate**; **frafall** og **selektivt
  frafall** (de som ikke svarer skiller seg systematisk); **seleksjonsskjevhet**;
  **representativitet**; **generalisering** fra utvalg til populasjon som mål;
  koblingen skjev seleksjon → svekket generaliserbarhet → trussel mot **ytre
  validitet** (frempek 8.1); frivillighetsskjevhet. Hvorfor man ikke uten videre kan
  «regne videre» på en survey med lav svarprosent.
- **Drøftingsakser:** når lav svarprosent er akseptabelt (hvis frafallet er tilfeldig)
  vs. når det ødelegger (systematisk frafall); hvordan man kan sjekke/kompensere for
  skjevhet (vekting, sammenligning mot registerdata — kort).
- **Case-forslag:** «En holdningsundersøkelse om privatisering fikk 27 % svarprosent,
  og flest svar fra eldre» — drøft frafallsskjevhet, hva det gjør med
  generaliserbarheten, og hvorfor konklusjonen om «befolkningens holdning» er usikker.
- **Typiske feil:** #8 regne videre på et skjevt utvalg som representativt; #11
  kalle et generaliseringsproblem for intern validitet.
- **Kvote:** 18 quiz / 18 flashcards (frafall↔skjevhet↔konsekvens; seleksjonsbegrepene).

**Prøve-kvote Del 3:** 4 prøver (se §4).

### Del 4 — Deskriptiv statistikk og bivariat analyse (hybrid-del)

> Regnefag-lånet gjelder hele delen: gjennomregnede `example`-blokker med intuisjon
> per steg, `exercise`-serier med solution + hints, snille tall, obligatorisk
> tolkning i kontekst etter hvert regnestykke. Symbol- og formelliste-collapsible
> er obligatorisk i alle tre kapitler.

#### Kapittel 4.1: Deskriptiv statistikk fra tabell og figur
- **id:** `stv1020-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-2-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Å lese en frekvenstabell eller figur og regne modus, median,
  gjennomsnitt, variasjonsbredde og modalprosent — med målenivået som styrer hvilket
  mål som er meningsfullt.
- **Eksamensbelegg:** 13/16 (sjanger E) — dominerer 2012–17, lever videre.
  Prioritet: kunne.
- **Begrepskontrakt:** **modus** (hyppigste verdi — alle nivåer); **median**
  (midtverdi — krever ≥ ordinal); **gjennomsnitt** $\bar{X} = \sum x / N$ (krever
  metrisk); **variasjonsbredde** (maks − min); **kvartildifferanse**;
  **modalprosent** ($100 \cdot$ største andel); relativ frekvens (prosentuering,
  med/uten «vet ikke»); **vektet/samlet gjennomsnitt** av to grupper; når median
  foretrekkes framfor gjennomsnitt (skjev fordeling); hva standardavvik ville fortalt
  (uten å regne det).
- **Formler/notasjon + tolkningskontrakt:** $\bar{X} = \sum x/N$; variasjonsbredde =
  maks − min; modalprosent. Målenivå-koblingen fra 2.1 er obligatorisk (hvilket mål
  krever hvilket nivå). Hvert regnestykke ender i kontekst («medianskåren er 8 —
  halvparten av elevene ligger under»). `example` ×2–3: frekvenstabell → regn alle
  aktuelle mål med begrunnelse for hvilke som er meningsfulle.
- **Drøftingsakser:** hvilket sentralmål er «riktig» for skjeve fordelinger
  (inntekt/eiendomsskatt-typen); rapportere ett mål eller flere.
- **Case-forslag:** Frekvenstabell over en prøveskår 0–15 for 399 elever (nyskrevne
  tall): finn variasjonsbredde, median og gjennomsnittlig skår blant elevene med skår
  ≥ 10 — vis utregningen og tolk i kontekst.
- **Typiske feil:** #2 regne gjennomsnitt på ordinal/nominal; #13 usynlig
  fremgangsmåte; forveksle modalprosent og modus.
- **Kvote:** 22 quiz / 20 flashcards (mål↔krav↔tolkning; når median > gjennomsnitt).

#### Kapittel 4.2: Krysstabell og bivariate tabellmål
- **id:** `stv1020-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `stv1020-4-1`
- **Kapitteltype:** tema/regnekapittel (hybrid, «gammelt regime»-vedlikehold).
- *Description:* Odds, odds ratio, gamma, rho og kjikvadrat fra en krysstabell —
  konsentrert i 2012–14, men billig når det kommer, og fundamentet for
  korrelasjonsmålvalget i 4.3.
- **Eksamensbelegg:** 6/16 (sjanger F) — nesten kun gammelt regime (2012–14), men
  formelark vedlegges alltid. Prioritet: kjenne (kapitlet sier eksplisitt at
  håndregningen sjelden kreves i dag).
- **Begrepskontrakt:** **odds** = $P(\text{hendelse})/P(\text{ikke})$; **odds ratio**
  = $\text{odds}_1/\text{odds}_2$ (OR = 1 → ingen sammenheng); **gamma**
  $\gamma = (P-Q)/(P+Q)$ (P = samstemte, Q = motstridende par — ordinaldata);
  **rho** (Spearman) $\rho = 1 - 6\sum d^2/(N^3 - N)$; **kjikvadrat**
  $= \sum (f - f_e)^2/f_e$ med forventet frekvens $f_e$, tolket mot kritisk verdi i
  kjikvadrat-tabell med df; **Fi** $= \sqrt{\text{kjikvadrat}/N}$; **normerte** mål
  (fast intervall, f.eks. $[-1,1]$ eller $[0,1]$) vs. ikke-normerte (kjikvadrat).
- **Formler/notasjon + tolkningskontrakt:** alle formler oppgis (som på formelarket);
  hvert mål tolkes i kontekst («gamma = 0,42 → moderat positiv monoton sammenheng
  mellom levekår og lykkenivå»). `example` ×2: én gamma/odds-utregning fra 2×k-tabell,
  én kjikvadrat mot kritisk verdi.
- **Drøftingsakser:** hva odds ratio sier som prosentdifferanse ikke gjør; normerte
  vs. ikke-normerte mål (hvorfor kjikvadrat ikke måler styrke direkte).
- **Case-forslag:** Nifeltstabell over levekår × lykkenivå (nyskrevne tall): beregn
  gamma, kommenter styrke og retning; regn odds ratio for en 2×2-utsnitt og tolk.
- **Typiske feil:** bruke gamma på nominaldata (krever ordinal); tolke OR = 1 som
  «sterk sammenheng»; lese feil df i kjikvadrat-tabellen.
- **Kvote:** 20 quiz / 20 flashcards (mål↔datatype↔formel; OR-tolkning; normert/ikke).

#### Kapittel 4.3: Valg av korrelasjonsmål etter målenivå
- **id:** `stv1020-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `stv1020-4-2`, `stv1020-2-1`
- **Kapitteltype:** tema.
- *Description:* Å koble målenivået til begge variabler til riktig korrelasjonsmål —
  ferdigheten som overlevde regimeskiftet, der begrunnelsen er hele poenget.
- **Eksamensbelegg:** 11/16 (sjanger G). Prioritet: kunne.
- **Begrepskontrakt:** koblingstabellen (kapitlets «formelliste»): to metriske/
  kontinuerlige → **Pearsons r** (lineær sammenheng); to ordinale → **gamma / tau /
  rho** (monoton sammenheng); to nominale/kategoriske → **kjikvadrat / Fi / Cramers
  V**; kategorisk X + kontinuerlig Y → **sammenlign gjennomsnitt + t-test** (eller
  bivariat regresjon, bro til Del 5). Begrunnelsen (målenivået til BEGGE variabler)
  er poenget. Pearsons r måler kun LINEÆR sammenheng (r ≈ 0 kan skjule kurvlineær).
- **Formler/notasjon + tolkningskontrakt:** ingen utregning — kun valg + begrunnelse;
  koblingstabellen presenteres som oppslag. Hvert valg begrunnes i to setninger
  (nivået til X, nivået til Y → målet).
- **Drøftingsakser:** hvorfor r ikke duger for ordinaldata (avstandsantakelsen); når
  gjennomsnittssammenligning er ekvivalent med bivariat regresjon med dikotom X.
- **Case-forslag:** Fire småscenarier der riktig mål velges: prøveskår (forholdstall)
  × mors utdanning (ordinal, tre kategorier); partivalg (nominal) × landsdel
  (nominal); osv. — velg og begrunn hvert.
- **Typiske feil:** bruke Pearson r på ordinaldata; velge mål uten å nevne begge
  variablers målenivå; tro r ≈ 0 betyr «ingen sammenheng» (kun ingen lineær).
- **Kvote:** 22 quiz / 24 flashcards (målenivå-par↔korrelasjonsmål — flashcard-gull;
  lineær/monoton-kontrast).

**Prøve-kvote Del 4:** 4 prøver (se §4).

### Del 5 — OLS-regresjon: bivariat og multippel (hybrid-del)

> Ryggraden i faget. Regnefag-lånet gjelder hele delen: gjennomregnede eksempler,
> exercise med solution + hints, snille tall, R-utskrift som tekst-tabell (§2d), og
> **tolkningskontrakten (§2d) er obligatorisk for hver størrelse** — teknisk →
> substansiell → signifikans → konklusjon. Symbol- og formelliste-collapsible i alle
> fire kapitler.

#### Kapittel 5.1: Regresjonsligningen — generell og estimert form
- **id:** `stv1020-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-2-1`, `stv1020-1-3`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Å skrive opp regresjonsmodellen — generell form med residualledd, og
  estimert form ved å sette inn tallene fra tabellen.
- **Eksamensbelegg:** 13/16 (sjanger H). Prioritet: **perfekt**.
- **Begrepskontrakt:** **generell form** $Y_i = b_0 + b_1 X_{1i} + b_2 X_{2i} + \dots
  + e_i$ (residualleddet $e_i$ MÅ med for full uttelling — feil #9); konstantledd
  $b_0$, stigningskoeffisienter $b_j$, residual $e_i$; **estimert form** (sett inn
  tallverdiene fra tabellen, uten $e_i$); variabelnavn eller symboler godkjennes likt
  (metodefrihet); bivariat (én X) vs. multippel (flere X) modell; frempek til dummyer
  for kategoriske variabler (Del 6). Hva $b_0$, $b_j$ og $e_i$ representerer
  konseptuelt (dybde-tolkning i 5.2).
- **Formler/notasjon + tolkningskontrakt:** generell og estimert form; residualleddet
  er ufravikelig. `example` ×2: skriv opp modellen på generell form fra en
  variabelliste, og estimert form fra en (nyskrevet) koeffisienttabell.
- **Drøftingsakser:** hva residualleddet fanger (alt modellen IKKE forklarer —
  bro til 7.1); hvorfor estimert form ikke har $e_i$.
- **Case-forslag:** «Skriv opp en regresjonsmodell for BNP per capita med DEMOKRATI
  og FAGFORENINGSSTYRKE» — generell form med residual, deretter estimert form fra en
  gitt tabell (nyskrevne koeffisienter).
- **Typiske feil:** #9 glemme residualleddet på generell form; forveksle generell og
  estimert form; utelate en oppgitt variabel.
- **Kvote:** 22 quiz / 20 flashcards (generell↔estimert form; leddenes navn og rolle).

#### Kapittel 5.2: Tolke konstantledd og koeffisient i kontekst
- **id:** `stv1020-5-2` · **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** `stv1020-5-1`
- **Kapitteltype:** tema/regnekapittel (hybrid — bokas viktigste enkeltkapittel).
- *Description:* Hjertet i faget (16/16): å tolke konstantledd og hver
  stigningskoeffisient både teknisk og substansielt, med «kontrollert for de andre»-
  presisjonen — og å lese det fra en R-utskrift.
- **Eksamensbelegg:** 16/16 = 100 % (sjanger I). Både teknisk og substansiell tolkning
  gir separate poeng. Prioritet: **perfekt** (fagets ryggrad).
- **Begrepskontrakt:** **konstantledd** $b_0 = E(Y \mid \text{alle } X = 0)$ (forventet
  Y når alle uavhengige er 0 — tolk i kontekst OG kommenter om det er substansielt
  meningsfullt; negativt/urealistisk konstantledd utenfor dataområdet er ofte
  ikke-tolkbart — feil #6); **stigningskoeffisient** $b_j$ = forventet endring i Y per
  én enhets økning i $X_j$, **kontrollert for de andre variablene** (kontroll-
  språket er obligatorisk i multippel modell); positiv vs. negativ koeffisient;
  **lese en R-utskrift** (§2d): koeffisienter fra Estimate, SE, stjerner (frempek
  5.4); **standardiserte koeffisienter** $\beta$ (enhetsfrie, sammenlignbar styrke —
  «bør kjenne til», kort). Tolkningskontrakten (§2d) drilles her som fast struktur.
- **Formler/notasjon + tolkningskontrakt:** $b_0$, $b_j$; tolkningskontraktens fire
  ledd for HVER koeffisient. `example` ×2–3: tolk konstant og to koeffisienter fra en
  nyskrevet tabell (både håndtabell og R-utskrift-versjon), alltid endende i
  substansiell konklusjon.
- **Drøftingsakser:** når konstantleddet er meningsfullt vs. ikke (X = 0 utenfor
  dataområdet); hvorfor «kontrollert for» endrer tolkningen fra bivariat til multippel;
  statistisk vs. substansiell størrelse på en koeffisient (frempek 5.4).
- **Case-forslag:** Regresjonstabell (R-utskrift-form, nyskrevet): eiendomsskatt per
  innbygger på VENSTRESTYRT og INNBYGGERTALL — tolk konstantleddet (kommenter om det
  er meningsfullt), tolk begge koeffisienter teknisk og substansielt med «kontrollert
  for»-presisjon.
- **Typiske feil:** #5 tolke uten kontekst («konstanten er 3199»); #6 tolke et
  urealistisk konstantledd som substansielt; utelate «kontrollert for de andre».
- **Kvote:** 28 quiz / 26 flashcards (tolkningskontraktens ledd; konstant↔koeffisient;
  meningsfullt↔ikke-tolkbart konstantledd; R-utskrift-lesing).

#### Kapittel 5.3: R², prediksjon og restledd
- **id:** `stv1020-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `stv1020-5-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvor mye modellen forklarer (R²), å regne en forventet verdi
  (prediksjon) og restleddet for én enhet — tre faste deloppgaver, alle med tolkning.
- **Eksamensbelegg:** R² 15/16, prediksjon 13/16, restledd 3/16 (sjanger I).
  Prioritet: **perfekt** (R², prediksjon) / kunne (restledd).
- **Begrepskontrakt:** **R²** $\in [0,1]$ = andel av variasjonen i Y som modellen
  forklarer (0,34 → 34 %); $1 - R^2$ = uforklart andel; tolke **endring i R²** mellom
  modeller (hva en ny variabel tilfører); **prediksjon**: sett X-verdiene inn i
  estimert ligning og regn $\hat{Y}$ (vis utregningen; delvis uttelling for delvis
  riktig; følgefeil straffes mildt); **restledd** $e = Y_{\text{observert}} -
  \hat{Y}$ for én enhet; **ekstrapoleringsfaren** (prediksjon utenfor observert
  X-område).
- **Formler/notasjon + tolkningskontrakt:** $\hat{Y} = b_0 + \sum b_j x_j$; $e = Y -
  \hat{Y}$; $R^2$. Hvert tall tolkes («modellen forklarer 34 % av variasjonen i
  eiendomsskatt — 66 % skyldes annet»). `example` ×3 (stige): tolk R² → regn en
  prediksjon → regn et restledd, alle i kontekst.
- **Drøftingsakser:** hva høy vs. lav R² betyr substansielt i samfunnsdata (0,34 kan
  være mye for tverrsnittsdata); R² som modelltilpasning ≠ kausalitet; hvorfor
  prediksjon utenfor dataområdet er risikabelt.
- **Case-forslag:** «Hva er forventet eiendomsskatt per innbygger i en liten,
  venstrestyrt kommune? Vis utregningen.» + «Kommune X observert 4200, predikert
  3900 — regn restleddet og tolk.» (nyskrevne tall).
- **Typiske feil:** tolke R² som korrelasjon eller som «prosent riktige»; #13 usynlig
  prediksjonsutregning; feil fortegn på restleddet.
- **Kvote:** 26 quiz / 22 flashcards (R²-tolkning; prediksjonsstegene; restledd-fortegn).

#### Kapittel 5.4: Signifikanstest av koeffisienter — t-test og p-verdi
- **id:** `stv1020-5-4` · **number:** 5.4 · **estimatedMinutes:** 60 · **prerequisites:** `stv1020-5-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Om en koeffisient er til å stole på: den faste firetrinns t-testen
  (df = N − k − 1), p-verdien og signifikansstjernene — og skillet statistisk vs.
  substansiell signifikans.
- **Eksamensbelegg:** t-test 13/16 (sjanger K); p-verdi 4/16 eget spørsmål men innbakt
  i alle t-tester (sjanger L); SE-beregning 9/16. Prioritet: **perfekt**.
- **Begrepskontrakt:** firetrinns t-test: (1) **frihetsgrader** $df = N - k - 1$
  (HARD KRAV, warning — k = antall uavhengige); (2) slå opp **kritisk t** i tabellen
  (df + signifikansnivå); (3) observert $t = b/SE(b)$ (eller gitt i tabell); (4)
  sammenlign $|t_{obs}|$ mot $t_{krit}$ og **konkluder i kontekst**;
  tommelregel $|t| > \approx 2 \approx$ signifikant på 5 %; **SE** $= b/t$ når b og t
  er oppgitt; **p-verdien**: sannsynligheten for et minst like sterkt estimat DERSOM
  det ikke finnes sammenheng ($H_0$ sann) — «ved ren tilfeldighet»; **signifikansnivå
  $\alpha$** = maksimal risiko for å forkaste en sann $H_0$ = P(type I-feil); beslutt
  på flere nivåer (p = 0,073 → signifikant på 10 %, ikke på 5 %); **type I** (forkaste
  sann $H_0$) vs. **type II** (beholde falsk $H_0$); signifikansstjerner (§2d);
  **statistisk vs. substansiell signifikans** (toppkandidat-skille — en effekt kan
  være statistisk signifikant men substansielt liten, f.eks. 0,06 på en 1–7-skala,
  eller motsatt).
- **Formler/notasjon + tolkningskontrakt:** $t = b/SE(b)$; $df = N - k - 1$; $SE =
  b/t$; $SE(\hat{p}) = \sqrt{\hat{p}(1-\hat{p})/n}$. Hver test ender i konklusjon i
  kontekst OG kommentar om substansiell størrelse. `example` ×2: full t-test fra
  oppgitt b/SE/N, og p-verdi-tolkning mot to α-nivåer.
- **Drøftingsakser:** hva t «ser» (effekt relativt til usikkerhet); hvorfor stor N kan
  gjøre trivielle effekter signifikante (statistisk ≠ substansiell); hvorfor «ikke
  signifikant» ikke betyr «ingen effekt».
- **Case-forslag:** «Gjennomfør en t-test av koeffisienten til KOMMUNESTØRRELSE
  (b = 1703, t = 1,548) på 1 %-nivå med N = 33 og 2 uavhengige variabler» (nyskrevne
  tall) — regn df = 30, slå opp kritisk t, konkluder i kontekst; kommenter substansiell
  vs. statistisk signifikans.
- **Typiske feil:** #10 feil df (glemme −k−1), lese feil kolonne, konkludere uten å
  sammenligne mot kritisk verdi/α; behandle statistisk signifikans som substansiell
  viktighet.
- **Kvote:** 24 quiz / 22 flashcards (firetrinnene; df-formelen; p↔α; type I↔II;
  statistisk↔substansiell signifikans).

**Prøve-kvote Del 5:** 4 prøver (se §4).

### Del 6 — Dummyer, interaksjon og kontroll (hybrid-del)

> Regnefag-lån + tolkningskontrakt gjelder hele delen. Symbol- og formelliste-
> collapsible i alle tre kapitler.

#### Kapittel 6.1: Dummyvariabler for kategoriske variabler
- **id:** `stv1020-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-5-2`, `stv1020-2-1`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvordan en kategorisk variabel kommer inn i regresjonen — nøyaktig
  k − 1 dummyer, en referansekategori, og hva det gjør med tolkningen av
  konstantleddet.
- **Eksamensbelegg:** 13/16 (sjanger J). Prioritet: **perfekt**.
- **Begrepskontrakt:** en kategorisk variabel med **k kategorier** kodes som
  **k − 1 dummyer** (HARD KRAV, warning — feil #3); én kategori blir
  **referansekategori** (utelatt av modellen); hver enhet får 1 på sin dummy og 0 på
  de andre; med k dummyer for k kategorier får man **perfekt multikolinearitet**
  (modellen kan ikke estimeres); **tolkningen etter dummy-koding**: konstantleddet =
  forventet Y for referansekategorien (når øvrige X = 0), hver dummykoeffisient =
  differansen fra referansekategorien; ordinal variabel i regresjon: samme prosedyre
  (kan ikke brukes direkte uten å anta lik avstand).
- **Formler/notasjon + tolkningskontrakt:** ligningen med dummyer; konstantledd =
  referansekategoriens forventede Y; hver dummykoeffisient tolkes som differanse
  (teknisk + substansiell). `example` ×2: kod en 3- og en 5-kategorivariabel til
  dummyer, skriv ligningen, tolk konstant og dummyene i kontekst.
- **Drøftingsakser:** valg av referansekategori (tolkningsvennlighet, ikke tilfeldig);
  hvorfor k dummyer bryter modellen (perfekt multikolinearitet — bro til 7.2).
- **Case-forslag:** «Regionsvariabelen har fem kategorier (Europa, Afrika, Sør-Amerika,
  Nord-Amerika, Asia). Forklar hvordan du inkluderer den, og hva det gjør med
  tolkningen av konstantleddet» — vis fire dummyer, velg referanse, tolk.
- **Typiske feil:** #3 k dummyer for k kategorier (perfekt multikolinearitet), eller
  glemme referansekategorien; tolke konstantleddet uten å nevne referansekategorien.
- **Kvote:** 24 quiz / 22 flashcards (k − 1-regelen; referansekategori-tolkning;
  dummykoeffisient = differanse).

#### Kapittel 6.2: Kontroll og utelatt variabelskjevhet
- **id:** `stv1020-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-6-1`, `stv1020-1-3`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Hvorfor multippel regresjon er verktøyet for å kontrollere bort
  bakenforliggende variabler — og hva som skjer med en koeffisient når man legger til
  en kontrollvariabel (spuriøsitet eller mediering avsløres).
- **Eksamensbelegg:** Kontroll er innbakt i all multippel tolkning (16/16 I) og i
  kausaldrøfting; utelatt variabelskjevhet 5/16 (sjanger). Prioritet: kunne
  (toppkandidat-skille sammen med 6.3).
- **Begrepskontrakt:** **kontroll** = å inkludere en bakenforliggende variabel i
  modellen for å isolere den direkte effekten (fjerner spuriøsitet — kobling 1.3);
  **endring i en koeffisient når man legger til en kontrollvariabel** avslører
  spuriøsitet (koeffisienten forsvinner → sammenhengen var spuriøs) eller mediering
  (koeffisienten krymper → variabelen var mekanismen — toppkandidat-observasjon);
  **utelatt variabelskjevhet** (omitted variable bias): en relevant bakenforliggende
  variabel som mangler gir skjeve estimater — effekten «havner i restleddet» og
  forkludrer den estimerte koeffisienten (bro til 7.1s residual); hvorfor multippel
  regresjon bare kan kontrollere for MÅLTE variabler (statistisk kontroll ≠
  eksperimentell kontroll — bro til 8.2).
- **Formler/notasjon + tolkningskontrakt:** to modeller sammenlignes (før/etter
  kontroll); koeffisientendringen tolkes i kontekst («kjønnseffekten forsvinner når
  utdanning legges til → sammenhengen var spuriøs»). `example` ×1–2: to nyskrevne
  regresjonstabeller (uten og med kontrollvariabel) tolkes side ved side.
- **Drøftingsakser:** spuriøsitet vs. mediering — samme koeffisientfall, ulik
  konklusjon (avhenger av kausalmodellen fra 1.3); hva kontroll IKKE kan fikse
  (umålte Z, bro til 8.2).
- **Case-forslag:** Effekten av POLITISK STYRE på eiendomsskatt faller når KOMMUNE-
  ØKONOMI legges til — drøft om det er spuriøsitet eller mediering, avhengig av
  kausalmodellen; pek på en umålt variabel som fortsatt kan gi utelatt variabelskjevhet.
- **Typiske feil:** #7 kausaltolke uten å vurdere umålte Z; tolke ethvert
  koeffisientfall som spuriøsitet (kan være mediering); #4 forveksle kontroll med
  interaksjon (bro til 6.3).
- **Kvote:** 20 quiz / 20 flashcards (kontroll↔interaksjon-forvarsel; spuriøsitet↔
  mediering; utelatt variabelskjevhet).

#### Kapittel 6.3: Samspill og interaksjon
- **id:** `stv1020-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-6-2`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Når effekten av én variabel avhenger av en annen — produktleddet, den
  betingede effekten, og den klassiske fellen: kontroll er ikke interaksjon.
- **Eksamensbelegg:** 9/16 (sjanger M). Kontroll vs. interaksjon er uttalt
  toppkandidat-skille (feil #4). Prioritet: kunne (A-differensiering).
- **Begrepskontrakt:** **samspill/interaksjon** = et **produktledd** $b_3(X_1 \cdot
  X_2)$ i modellen som tester om effekten av $X_1$ på Y **avhenger av verdien på
  $X_2$**; tolke samspillskoeffisienten (endring i den ene variabelens effekt per
  enhets økning i den andre); **betinget/direkte effekt** for en gruppe: effekten av
  $X_1$ gitt $X_2$ = $b_1 + b_3 \cdot X_2$ (regne den ut for en konkret gruppe);
  **kontroll vs. interaksjon** (kritisk skille — feil #4): kontroll fjerner
  spuriøsitet (én effekt for alle), interaksjon betyr at effekten er ULIK for ulike
  grupper.
- **Formler/notasjon + tolkningskontrakt:** $b_3(X_1 \cdot X_2)$; betinget effekt
  $b_1 + b_3 X_2$. `example` ×1–2: regn den betingede effekten for to grupper fra en
  nyskrevet modell, og tolk hva samspillet betyr substansielt.
- **Drøftingsakser:** når en hypotese krever interaksjon (effekten er ulik for kjønn/
  gruppe) vs. kontroll (justere for en tredjevariabel); hvorfor «kontroller for X» er
  feil svar når oppgaven sier effekten AVHENGER av X.
- **Case-forslag:** «Sammenhengen mellom antall barn og politisk deltakelse er trolig
  ulik for kvinner og menn. Hvordan tester du dette, og hvordan endrer det tolkningen
  av barn-koeffisienten?» — sett opp produktleddet, regn betinget effekt for hvert
  kjønn.
- **Typiske feil:** #4 svare «kontroller for kjønn» der oppgaven krever interaksjon;
  tolke samspillskoeffisienten som en hovedeffekt; glemme å regne betinget effekt.
- **Kvote:** 20 quiz / 20 flashcards (produktledd; betinget effekt; kontroll↔
  interaksjon-kontrast — A-skillet).

**Prøve-kvote Del 6:** 4 prøver (se §4).

### Del 7 — Regresjonsdiagnostikk og residualer (hybrid-del)

> Regnefag-lån + tolkningskontrakt gjelder. Symbol- og formelliste-collapsible i
> begge kapitler.

#### Kapittel 7.1: OLS-forutsetningene og residualdiagnostikk
- **id:** `stv1020-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `stv1020-5-4`
- **Kapitteltype:** tema/regnekapittel (hybrid).
- *Description:* Fast avslutningsgrep i Del 2: å lese et residualplott, koble det til
  riktig OLS-forutsetning OG si konsekvensen for standardfeilene og dermed
  hypotesetestene.
- **Eksamensbelegg:** 13/16 (sjanger N). HARD KRAV: koble figur til BÅDE forutsetning
  OG konsekvens (feil #12). Prioritet: kunne (Nivå 2, fast avslutning).
- **Begrepskontrakt (K&W for forutsetningene):** **OLS-forutsetningene** (K&W
  grupperer ni: feilleddet er normalfordelt, har forventning 0, konstant varians
  (homoskedastisitet), ingen autokorrelasjon, X målt uten feil, modellen riktig
  spesifisert og lineær, flere observasjoner enn variabler, variasjon i X); tre
  diagnostiske hovedsaker: (i) **normalfordelte restledd** — skjevt residualhistogram
  → normalitet brutt → standardfeilene kan bli feilestimert → signifikanstestene kan
  ikke stoles på (spesielt ved lite N); (ii) **heteroskedastisitet** — restleddenes
  varians varierer systematisk med X (trakt/vifteform i residual-mot-X-plott) → gale
  standardfeil; (iii) **autokorrelasjon** — restledd korrelert med hverandre
  (paneldata, klynger som skoler/regioner) → gale standardfeil. Fast svarkjede:
  FIGUR → FORUTSETNING → KONSEKVENS for SE → KONSEKVENS for testene.
- **Formler/notasjon + tolkningskontrakt:** $e = Y - \hat{Y}$ (fra 5.3);
  plott-typene beskrives i tekst (histogram, residual-mot-X). Hver diagnose ender i
  konsekvens for testene (ikke bare «ser ikke normalfordelt ut»). `example` ×2:
  tolk et skjevt residualhistogram (lite N) og et trakt-formet residualplott, med
  full figur→forutsetning→konsekvens-kjede.
- **Drøftingsakser:** hvorfor lite N gjør normalitetsbrudd alvorlig; hvorfor
  autokorrelasjon er ventet i panel-/klyngedata; forskjellen på «estimatet er skjevt»
  (utelatt variabel, 6.2) og «standardfeilen er feil» (heteroskedastisitet/
  autokorrelasjon).
- **Case-forslag:** «Residualhistogrammet er tydelig skjevfordelt og N = 28. Kan du
  stole på signifikanstestene?» — koble til normalitetsforutsetningen og konsekvensen
  for standardfeilene og t-testene (nyskrevet scenario).
- **Typiske feil:** #12 beskrive residualplottet uten konsekvens for SE/testene;
  forveksle heteroskedastisitet og autokorrelasjon; koble feil forutsetning til
  figuren.
- **Kvote:** 24 quiz / 26 flashcards (figur↔forutsetning↔konsekvens-tripler; de tre
  diagnosene; K&W-forutsetningene).

#### Kapittel 7.2: Uteliggere, innflytelsesrike observasjoner og multikolinearitet
- **id:** `stv1020-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `stv1020-7-1`
- **Kapitteltype:** tema (kompakt «bør kjenne til» + A-differensiering).
- *Description:* De øvrige diagnostiske farene — enkeltobservasjoner som drar linjen,
  og forklaringsvariabler som er for like — primært A-differensierende flervalgsstoff.
- **Eksamensbelegg:** Standardiserte koeffisienter 2/16, uteliggere/multikolinearitet
  A-diff og flervalg. Prioritet: kjenne (kapitlet sier eksplisitt at dette er
  A-differensiering).
- **Begrepskontrakt:** **uteligger** (observasjon langt fra de andre på Y eller X);
  **innflytelsesrik observasjon** (uteligger som drar regresjonslinjen — Cook's D som
  navngitt mål, tolkes ikke regnes); **multikolinearitet** (to forklaringsvariabler
  er sterkt korrelert → ustabile, upresise koeffisienter; perfekt multikolinearitet
  ved k dummyer, kobling 6.1); **standardiserte koeffisienter** $\beta$ (enhetsfrie,
  lar en sammenligne styrken på variabler med ulike skalaer). Alt på kjenne-nivå.
- **Formler/notasjon + tolkningskontrakt:** ingen tung regning; begrepene tolkes
  kvalitativt. Symbol- og formelliste for $\beta$ og Cook's D.
- **Drøftingsakser:** når en uteligger skal fjernes vs. beholdes (feilføring vs. ekte
  ytterpunkt); hvorfor multikolinearitet blåser opp standardfeilene uten å skjeve
  estimatene.
- **Case-forslag:** En liten kommune med ekstrem eiendomsskatt drar linjen — drøft om
  den er innflytelsesrik og hva man gjør; to nesten identiske forklaringsvariabler —
  diagnostiser multikolinearitet.
- **Typiske feil:** forveksle uteligger (avvikende punkt) med innflytelsesrik
  observasjon (avvikende OG linjedragende); tro multikolinearitet skjever estimatene
  (den blåser opp SE).
- **Kvote:** 16 quiz / 18 flashcards (uteligger↔innflytelsesrik; multikolinearitet;
  standardiserte koeffisienter).

**Prøve-kvote Del 7:** 4 prøver (se §4).

### Del 8 — Validitet, generalisering og kausal slutning

#### Kapittel 8.1: Intern og ytre validitet
- **id:** `stv1020-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `stv1020-3-2`, `stv1020-2-2`
- **Kapitteltype:** tema.
- *Description:* Validiteten til SLUTNINGENE (ikke måleinstrumentet, jf. 2.2): er
  effekten riktig estimert i utvalget (intern), og generaliserer den til populasjonen
  (ytre)? — et uttalt toppkandidat-skille.
- **Eksamensbelegg:** Del av validitetssjangeren (12/16 C) og fast forbehold i
  utvalgs- og designoppgaver. Prioritet: kunne (toppkandidat-skille, feil #11).
- **Begrepskontrakt:** **intern validitet** = riktig estimert effekt i utvalget (ingen
  spuriøsitet, ingen utelatt variabelskjevhet — kobling 6.2/1.3); **ytre validitet** =
  generaliserbarhet til populasjon/andre kontekster (kobling 3.2s seleksjon/frafall);
  spenningen: intern validitet er en FORUTSETNING for ytre (en gal effekt kan ikke
  generaliseres — toppkandidat-observasjon); reliabilitet-recap fra 2.2 (kort); hvorfor
  observasjonsstudier ofte er sterke på ytre men svake på intern validitet, og
  eksperimenter motsatt (kobling 1.2/8.2).
- **Drøftingsakser:** intern vs. ytre validitet i en konkret studie — hvilken er
  truet? hvorfor et representativt utvalg (ytre) ikke redder en spuriøs sammenheng
  (intern).
- **Case-forslag:** En landsdekkende survey med god svarprosent finner en sammenheng
  mellom mediebruk og tillit — drøft intern validitet (utelatt variabel? omvendt
  kausalitet?) og ytre validitet (generaliserer den til andre land/tid?), og hvorfor
  god ytre validitet ikke redder svak intern.
- **Typiske feil:** #11 kalle et generaliseringsproblem for intern validitet (eller
  motsatt); behandle ytre validitet som viktigst når intern er truet.
- **Kvote:** 20 quiz / 22 flashcards (intern↔ytre-kontrast; forutsetningsrelasjonen;
  validitetstype↔trussel).

#### Kapittel 8.2: Kausal slutning fra observasjonsdata (capstone)
- **id:** `stv1020-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `stv1020-8-1`, `stv1020-1-2`, `stv1020-6-2`
- **Kapitteltype:** tema (capstone — samler forskningsprosessen).
- *Description:* Avslutningen på Del 2-casen: etter at regresjonen er kjørt — kan vi
  kalle sammenhengen kausal? Syntesen av K&W-kriteriene, kontroll og
  observasjonsdatas grenser.
- **Eksamensbelegg:** «Validitet/kausalitet til slutt» avslutter alltid Del 2-casen;
  trekker på K&W (10/16), kontroll (6.2) og korrelasjon ≠ kausalitet. Prioritet:
  kunne (capstone som binder løypa).
- **Begrepskontrakt:** samle trådene: de fire K&W-kriteriene (recap 1.2) anvendt på et
  FERDIG regresjonsresultat; hvorfor en signifikant koeffisient IKKE er nok for
  kausalitet (mekanisme? omvendt kausalitet? umålt Z?); **statistisk kontroll ≠
  eksperimentell kontroll** (multippel regresjon kontrollerer bare for MÅLTE
  variabler — kobling 6.2); randomisert eksperiment som gullstandard; hvorfor
  observasjonsdata gir sannsynlig, ikke sikker, kausalslutning; substansiell vs.
  statistisk signifikans i den endelige konklusjonen (kobling 5.4).
- **Drøftingsakser:** hvor sterk kausalpåstand tåler et tverrsnittsdatasett? hva som
  skulle til (paneldata, naturlig eksperiment, RCT) for å styrke slutningen; policy-
  konklusjonens ansvar (feil #7).
- **Case-forslag:** Etter en full regresjonsanalyse (DEMOKRATI → BNP-vekst, kontrollert
  for flere variabler, signifikant koeffisient) — drøft med alle fire K&W-kriteriene
  om vi kan konkludere at demokrati SKAPER vekst, og hva som fortsatt er usikkert.
- **Typiske feil:** #7 trekke kausal policy-konklusjon fra tverrsnittsregresjon; #13
  nevne bare noen av kriteriene; behandle «kontrollert for flere variabler» som bevis
  på kausalitet.
- **Kvote:** 20 quiz / 20 flashcards (K&W-recap i kontekst; statistisk↔eksperimentell
  kontroll; kausalslutningens forbehold).

**Prøve-kvote Del 8:** 4 prøver (se §4).

### Del 9 — Eksamenstrening

> Del 9 trener BEGGE eksamensdeler. Sjangerkapitlene følger drøftings-DNAets
> sjangermal (tip Eksamensvinkel → text Oppskrift med tidsbudsjett → example
> gjennomskrevet besvarelse med margkommentarer → exercise ×3–6 med momentliste-
> løsninger); 9.3 bruker regnefag-DNAets drillmal (hybrid-lån); modellbesvarelsene
> (9.6–9.8) bruker «C-kjerne + A-plusspoeng-lag»-formatet (§2b). ALT oppgavemateriale
> er nyskrevet — mønstre og deloppgaveforløp klones tett, men ingen formuleringer,
> case-navn eller talloppsett fra UiO-sett gjenbrukes.

#### Kapittel 9.1: Del 1-sjangeren — flervalgsberedskap
- **id:** `stv1020-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–8
- **Kapitteltype:** sjanger (Del 1 — flervalg, auto-rettet).
- *Description:* Hvordan de 30 flervalgsspørsmålene tester hele pensumbredden, og
  strategien som holder feilraten nede på den auto-rettede delen.
- **Eksamensbelegg:** Del 1 = 30 flervalg (30 p) i hvert sett fra 2015. Temaspredning:
  målenivå, korrelasjonsmålvalg, OLS-diagnostikk-begreper, casedesign, feilslutninger,
  definisjoner. Prioritet: perfekt (en hel eksamensdel).
- **Innhold:** Oppskrift for flervalg (eliminasjon, nabobegrep-feller, «hvilket
  målenivå/korrelasjonsmål?»-typer, definisjonssjekk); tidsbudsjett (~40 min for 30
  spørsmål). Gjennomgang av de vanligste flervalgstemaene med typiske distraktorer.
  Dette kapitlets store quiz-kvote ER flervalgsbanken — nabobegrep-distraktorer,
  «hvilken feil begår kandidaten?»-format og små tabell-lesespørsmål på tvers av hele
  pensum.
- **Typiske feil:** å bruke for lang tid på enkeltspørsmål (jevn vekt); å overtenke
  «lure» distraktorer; forveksle nabobegreper (kontroll/interaksjon, intern/ytre,
  type I/II).
- **Kvote:** 20 quiz / 8 flashcards.

#### Kapittel 9.2: Del 2-sjangeren — den sammenhengende casen
- **id:** `stv1020-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–8
- **Kapitteltype:** sjanger (Del 2 — masteroppskriften for hele forskningsprosessen).
- *Description:* Del 2 som ett fast forløp: hvordan man svarer seg gjennom hele
  case-løypa fra hypotese til residualdiagnostikk uten å miste sammenhengen eller
  glemme tolkningskontrakten.
- **Eksamensbelegg:** Del 2 = én sammenhengende case (70 p) i hvert nyere sett; fast
  deloppgaverekkefølge (analysen §1). Prioritet: perfekt.
- **Innhold:** Løypa som fast oppskrift med tidsbudsjett (~200 min): populasjon/enheter/
  variabler (1.1) → utvalg med begrunnelse (3.1) → operasjonalisering/målenivå
  (2.1–2.2) → kausalmodell tegnet (1.3) → regresjonsligning med residual (5.1) → tolke
  tabell teknisk + substansielt (5.2) → R²/prediksjon (5.3) → t-test df=N−k−1 (5.4) →
  dummy k−1 (6.1) → samspill/kontroll (6.2–6.3) → residualdiagnostikk figur→
  forutsetning→konsekvens (7.1) → validitet/kausalitet capstone (8.1–8.2). Hvert trinn
  med «hva sensor ser etter» og tolkningskontrakt-påminnelse. Gjennomskrevet
  case-utdrag (nyskrevet: kommunestørrelse og innbyggertilfredshet) med margkommentarer.
- **Typiske feil:** hoppe over de mekaniske E-poengene jakten på drøfting; miste
  kontekst-konklusjonen (tolkningskontraktens ledd 2 og 4); ufullstendige lister.
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 9.3: Regnedrill — målenivå, regresjonstolkning og tabellmål
- **id:** `stv1020-9-3` · **number:** 9.3 · **estimatedMinutes:** 60 · **prerequisites:** Del 2, 4, 5, 6
- **Kapitteltype:** drillkapittel (regnefag-DNA — hybrid-lånet i renest form).
- *Description:* Alle de mekaniske ferdighetene drillet med løsningsoppskrift,
  gjennomregnet eksamenscase og varianter på eksamensnivå — bestem målenivå, tolk
  tabell, prediker, regn restledd, t-test, dummyer, R², bivariate mål.
- **Eksamensbelegg:** Sjanger-katalogen E, H, I, J, K (og F): de sikreste
  enkeltoppgavene. Formler alltid oppgitt, tall alltid snille. Prioritet: perfekt.
- **Innhold:** Løsningsoppskrift (algoritmisk): (1) identifiser hva som spørres og
  hvilken oppgitt formel som hører til; (2) sett opp alle ledd synlig; (3) regn med
  rimelighetssjekk; (4) TOLK i kontekst (obligatorisk siste steg — tolkningskontrakten).
  Gjennomregnet eksamenscase med sensor-margnotater. `exercise` ×10–15 som dekker HELE
  katalogen: 2 målenivå-diagnoser med begrunnelse, 2 tabelltolkninger (konstant +
  koeffisient, R-utskrift-form), 2 prediksjoner, 1 restledd, 2 t-tester (df=N−k−1),
  2 dummy-kodinger (k−1), 1 R²-tolkning, 1 gamma/odds fra krysstabell — alle med
  nyskrevne snille tall og full solution + hints.
- **Typiske feil:** #13 usynlig fremgangsmåte; #10 feil df; #3 feil antall dummyer;
  #5/#6 tolkning uten kontekst.
- **Kvote:** 16 quiz / 8 flashcards.

#### Kapittel 9.4: Tegne- og drøftedrill — kausalmodeller, K&W og validitet
- **id:** `stv1020-9-4` · **number:** 9.4 · **estimatedMinutes:** 50 · **prerequisites:** Del 1, 6, 8
- **Kapitteltype:** sjanger/drill (drøftingssiden).
- *Description:* Drøftingsferdighetene drillet: tegne stimodeller, ramse K&W-kriteriene
  komplett, skille kontroll fra interaksjon og intern fra ytre validitet.
- **Eksamensbelegg:** Sjanger-katalogen B, C, D, M, O: drøftingskravene der komplette
  lister og presise skiller gir uttelling. Prioritet: perfekt (drøftesiden).
- **Innhold:** Oppskrifter for hver drøftesjanger: kausalmodell (tegn → merk
  pilretning → case-tilpass); K&W-kriteriene (alle fire, hver anvendt på caset);
  kontroll vs. interaksjon (diagnoser: krever oppgaven «juster for» eller «ulik effekt
  for»?); intern vs. ytre validitet (hvilken er truet?); utvalgsbegrunnelse.
  Gjennomskrevet eksempel med margkommentarer. `exercise` ×5–6 nyskrevne
  drøftingsoppgaver med momentliste-løsninger (ikke fullt essay).
- **Typiske feil:** #13 ufullstendige lister; #4 kontroll↔interaksjon; #11 intern↔ytre;
  #7 kausalsprang.
- **Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 9.5: Feilvaksinen — de 13 feilene som senker karakteren
- **id:** `stv1020-9-5` · **number:** 9.5 · **estimatedMinutes:** 55 · **prerequisites:** Del 1–8
- **Kapitteltype:** tverrgående drillkapittel (utvidelse av DNA-malen).
- *Description:* Alle 13 sensordokumenterte feil (analysen §5) drillet med
  før/etter-omskrivinger — særlig kontekstløs tolkning, feil antall dummyer,
  kontroll-vs-interaksjon og residualdiagnostikk uten konsekvens.
- **Eksamensbelegg:** Analysen §5 komplett. De farligste: #3 (k−1, hardt krav), #4
  (kontroll/interaksjon), #7 (kausalsprang), #12 (diagnostikk uten konsekvens), #13
  (ufullstendige lister). Prioritet: perfekt (feilunngåelse er karakterforsikring).
- **Innhold:** Én seksjon per feil: (a) feilen slik sensor ser den; (b) nyskrevet
  «slik ser den ut i en besvarelse»-utdrag; (c) A-omskriving av samme passasje;
  (d) varsellampe-heuristikk. Feilenes hjemkapitler: #1→2.1, #2→2.1/4.1, #3→6.1,
  #4→6.3, #5→5.2, #6→5.2, #7→1.2/8.2, #8→3.1/3.2, #9→5.1, #10→5.4, #11→8.1, #12→7.1,
  #13→1.2/9.4. Driller gjenkjenning («hvilken feil begår denne kandidaten?» — utmerket
  flervalgsformat). De fem farligste får dobbel dose med før/etter-formuleringspar.
- **Kvote:** 20 quiz / 14 flashcards (feil↔riktig-omskrivingspar).

#### Kapittel 9.6: Modellbesvarelse — regresjonstung Del 2-case
- **id:** `stv1020-9-6` · **number:** 9.6 · **estimatedMinutes:** 45 · **prerequisites:** `stv1020-9-2`, `stv1020-9-3`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Del 2-case med tyngde på regresjonstolkning (5.2–5.4, 6.1).
- **Tema/oppgave (nyskrevet):** En case om eiendomsskatt per innbygger i norske
  kommuner: populasjon/variabler → utvalg → målenivå → regresjonsligning → tolke
  konstant og to koeffisienter (teknisk + substansielt) → prediksjon → t-test → dummy
  for kommunetype.
- **Karakternivåer (C-kjerne + A-lag, §2b):** Full besvarelse der C-kjernen (korrekte
  klassifiseringer, teknisk tolkning, riktig prediksjonsutregning, df=N−k−1) står i
  brødtekst; A-laget margmarkert («her: substansiell tolkning i kontekst — separate
  poeng», «her: konstantleddet flagget som ikke-tolkbart», «her: statistisk vs.
  substansiell signifikans»). Kort kommentert C-variant viser gapet. Avsluttes med
  `tip` **Sensorblikket**: momentliste + vekting.
- **Typiske feil demonstrert:** #5, #6 (i C-varianten), #3, #10.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 9.7: Modellbesvarelse — design- og kausalitetstung Del 2-case
- **id:** `stv1020-9-7` · **number:** 9.7 · **estimatedMinutes:** 45 · **prerequisites:** `stv1020-9-4`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Del 2-case med tyngde på forskningsdesign, kausalmodell, utvalg
  og validitet (Del 1, 3, 8).
- **Tema/oppgave (nyskrevet):** En case om demokrati og økonomisk vekst i verdens
  land: hypotese/variabler → utvalgsteknikk med begrunnelse → operasjonalisering/
  validitet → tegn kausalmodell → K&W-kriteriene → intern vs. ytre validitet →
  kausalslutningens forbehold.
- **Karakternivåer:** C-kjerne (korrekt design, tegnet modell, teknisk validitets-
  drøfting) i brødtekst; A-lag margmarkert («her: alle fire K&W-kriterier anvendt på
  caset», «her: intern som forutsetning for ytre», «her: statistisk kontroll ≠
  eksperimentell»). Kommentert C-variant med ufullstendig kriterieliste (#13). `tip`
  Sensorblikket.
- **Typiske feil demonstrert:** #7, #11, #13 (i C-varianten), #8.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 9.8: Modellbesvarelse — R-utskrift-case (2021–23-regimet)
- **id:** `stv1020-9-8` · **number:** 9.8 · **estimatedMinutes:** 45 · **prerequisites:** `stv1020-9-2`, `stv1020-9-3`
- **Kapitteltype:** modellbesvarelse.
- **Oppgavesjanger:** Del 2-case bygget på en R-utskrift (tekst-tabell, §2d), 2021–23-
  profil med signifikansstjerner og SE i parentes.
- **Tema/oppgave (nyskrevet):** En artikkel-/policy-forankret case (f.eks. kvinnelig
  yrkesdeltakelse og foreldrepermisjon) der kandidaten leser en gjengitt R-utskrift:
  identifiser koeffisienter/SE/stjerner → tolk i kontekst → les p-verdi og
  signifikans → tolk R² → vurder et residualplott mot en OLS-forutsetning.
- **Karakternivåer:** C-kjerne (korrekt R-lesing, teknisk tolkning, riktig
  signifikanslesing fra stjerner) i brødtekst; A-lag margmarkert («her: substansiell
  tolkning», «her: figur→forutsetning→konsekvens komplett», «her: statistisk vs.
  substansiell signifikans på 1–7-skala»). Kommentert C-variant med
  residualdiagnostikk uten konsekvens (#12). `tip` Sensorblikket.
- **Typiske feil demonstrert:** #12 (i C-varianten), #5, #10.
- **Kvote:** 6 quiz / 4 flashcards.

#### Kapittel 9.9: Øvingseksamen A (2015–2020-regimet)
- **id:** `stv1020-9-9` · **number:** 9.9 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–8
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett i 2015–2020-form: **Del 1 = 30 flervalgsspørsmål**
  (nyskrevne, hele pensumbredden) + **Del 2 = én sammenhengende case** (a–u) som
  følger forskningsprosessen (nyskrevet: barn og politisk deltakelse). Full
  momentliste-fasit per deloppgave med markerte A-skiller og C-kjerne vs. A-lag-
  kommentar; `tip` om vekting (30/70) og tidsbudsjett.
- **Kvote:** 4 quiz / 2 flashcards.

#### Kapittel 9.10: Øvingseksamen B (2021–2023 R-regimet)
- **id:** `stv1020-9-10` · **number:** 9.10 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–8
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett i R-regimeform: **Del 1 = 30 flervalg** + **Del 2 = case
  med R-utskrift** (tekst-tabell, §2d) i midten (nyskrevet: medie-persepsjon eller
  partimedlemskap og politisk kunnskap). Full fasit med R-lesing forklart linje for
  linje og håndregning parallelt der mulig; p-verdi- og residualdiagnostikk-ledd;
  `tip` om vekting/tidsbudsjett.
- **Kvote:** 4 quiz / 2 flashcards.

#### Kapittel 9.11: Øvingseksamen C (blandet, med krysstabellinnslag)
- **id:** `stv1020-9-11` · **number:** 9.11 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–8
- **Kapitteltype:** øvingseksamen.
- **Innhold:** Komplett sett som blander regimene: **Del 1 = 30 flervalg** + **Del 2 =
  case** som inkluderer ett krysstabell-/korrelasjonsmålvalg-ledd (4.2–4.3) i tillegg
  til regresjonsløypa (nyskrevet: bosetting av flyktninger, eller lykkenivå og
  levekår). Begrunnelse: korrelasjonsmålvalg og enkle tabellmål lever videre, og et
  blandet sett trener bredden. Full fasit med markerte A-skiller; `tip` om vekting.
- **Kvote:** 4 quiz / 2 flashcards.

### Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 18 | — |
| 1 | 4 | 88 | 92 | 4 |
| 2 | 2 | 52 | 58 | 4 |
| 3 | 2 | 44 | 44 | 4 |
| 4 | 3 | 64 | 64 | 4 |
| 5 | 4 | 100 | 90 | 4 |
| 6 | 3 | 64 | 62 | 4 |
| 7 | 2 | 40 | 44 | 4 |
| 8 | 2 | 40 | 42 | 4 |
| 9 | 11 | 114 | 64 | 3 øvingseksamener |
| **Sum** | **35** | **632 ✓ (≥500)** | **578 ✓ (≥500)** | **32 + 3** |

Summeringskontroll per del (quiz): Del 0: 12+14=26 · Del 1: 22+22+24+20=88 ·
Del 2: 30+22=52 · Del 3: 26+18=44 · Del 4: 22+20+22=64 · Del 5: 22+28+26+24=100 ·
Del 6: 24+20+20=64 · Del 7: 24+16=40 · Del 8: 20+20=40 ·
Del 9: 20+14+16+14+20+6+6+6+4+4+4=114. Totalsum 26+88+52+44+64+100+64+40+40+114 =
**632**.

Summeringskontroll per del (flashcards): Del 0: 8+10=18 · Del 1: 22+24+24+22=92 ·
Del 2: 34+24=58 · Del 3: 26+18=44 · Del 4: 20+20+24=64 · Del 5: 20+26+22+22=90 ·
Del 6: 22+20+20=62 · Del 7: 26+18=44 · Del 8: 22+20=42 ·
Del 9: 8+8+8+8+14+4+4+4+2+2+2=64. Totalsum 18+92+58+44+64+90+62+44+42+64 = **578**.

**Kvotebegrunnelse (jf. produksjonsløypas «≥500 er GULV»):** Quiz er høyt (632)
fordi Del 1 er en HEL auto-rettet eksamensdel (30 flervalg = 30 %) — flervalgsbanken
er direkte Del 1-trening og skal dekke hele pensumbredden. Flashcards (578) ligger
solid over gulvet fordi faget er begrepsrikt (målenivåtypologien, korrelasjonsmål,
K&W-kriteriene, OLS-forutsetningene, utvalgsteknikker, validitetstyper, dummy-/
interaksjonsapparatet) — men lavere enn et rent puggefag fordi den regnefag-tunge
halvparten (Del 4–7) har færre definisjonsbegreper per kapittel. Ryggrads-kapitlene
(2.1 målenivå 16/16, 5.2 tolke koeffisient 16/16, 3.1 utvalg 15/16, 5.3 R² 15/16,
1.3 kausalmodell 14/16) er tyngst kvotert; kjenne-kapitlene (4.2, 7.2) lettest.

**Flashcard-profil:** hovedvekt på **begrep↔definisjon↔kontrastbegrep**-par
(nominal↔ordinal↔intervall↔forholdstall, bakenforliggende↔mellomliggende,
kontroll↔interaksjon, intern↔ytre validitet, statistisk↔substansiell signifikans,
type I↔type II, spuriøs↔mediert, målevaliditet↔slutningsvaliditet, korrelasjonsmål↔
målenivå) — nøyaktig presisjonen deloppgavene og feilene #1/#4/#11 tester. Flashcards
genereres KUN fra toppnivå `definition`-blokker med `title` (plattformregel).
**Quiz-profil (= Del 1-trening):** flervalg med nabobegrep-distraktorer,
«hvilket målenivå/korrelasjonsmål?»-format, «hvilken feil begår kandidaten?»-format,
tolkningskontrakt-varianter (teknisk vs. kontekst) og små tabell-/utregningsspørsmål
med oppgitt formel.

---

## 4. Prøver

### Temadelprøver (4 per temadel, Del 1–8 = 32 prøver)

Hver prøve speiler eksamens format (Del 1-flervalgsinnslag + Del 2-lignende
scenariobaserte a/b/c-ledd). Omfang 20–45 min. Alle scenarier, tabeller og tall er
nyskrevne. Prøvekapitler får id `stv1020-<del>-prove`, chapterNumber `<del>.P`.

- **Del 1:** (1) Hypotese og variabler — 10 flervalg + populasjon/enhet/variabel-
  diagnose på 2 hypoteser; (2) Kausalitet — K&W-kriteriene anvendt på 2 scenarier
  (komplett liste-krav) + korrelasjon≠kausalitet-flervalg; (3) Kausalmodell-verksted
  — tegn og case-tilpass bakenforliggende/mellomliggende/spuriøs for 2 scenarier;
  (4) Full designdrøfting (casedesign + feilslutninger, momentliste).
- **Del 2:** (1) Målenivå-diagnosen — klassifiser og begrunn 8 variabler (nominal/
  ordinal/intervall/forholdstall) + operasjonskonsekvens; (2) Målenivå-flervalg (12
  spørsmål med nabofeller); (3) Operasjonalisering/validitet — «valider dette målet»-
  kortdrøfting (målevaliditet vs. reliabilitet); (4) Blandet delprøve (målenivå +
  operasjonalisering i case-format).
- **Del 3:** (1) Utvalgsteknikk-diagnosen — velg og begrunn teknikk for 3 scenarier
  (enkel/systematisk/stratifisert/klynge); (2) Utvalgsflervalg (10 spørsmål,
  proporsjonal/disproporsjonal, universliste); (3) Frafall/seleksjon — 2 scenarier med
  lav svarprosent: drøft skjevhet og generalisering; (4) Full utvalgsoppgave (a–c) med
  momentliste.
- **Del 4:** (1) Deskriptiv regneprøve — frekvenstabell: modus/median/gjennomsnitt/
  variasjonsbredde (oppgitt formel) + målenivåkonsekvens; (2) Krysstabell — regn gamma/
  odds ratio (oppgitt formel) + kjikvadrat mot kritisk verdi; (3) Korrelasjonsmål-valg
  — 5 variabelpar → riktig mål med begrunnelse; (4) Blandet bivariat delprøve.
- **Del 5:** (1) Regresjonsligning — skriv generell (med residual!) og estimert form
  fra 3 variabellister/tabeller; (2) Tolkningsprøve — tolk konstant + 2 koeffisienter
  (teknisk + substansielt, R-utskrift-form) inkl. ikke-tolkbart konstantledd; (3) R²/
  prediksjon/restledd — regn og tolk fra oppgitt tabell; (4) t-test-prøven (df=N−k−1,
  kritisk verdi, konkluder i kontekst, 30 min).
- **Del 6:** (1) Dummy-koding — kod 3-, 4- og 5-kategorivariabler (k−1, referanse) +
  tolk konstantledd; (2) Dummy-/multikolinearitet-flervalg; (3) Kontroll vs.
  interaksjon — diagnoser i 4 scenarier (juster-for vs. ulik-effekt) + regn betinget
  effekt; (4) Full samspillsoppgave med momentliste.
- **Del 7:** (1) Residualdiagnostikk — 3 plott-beskrivelser: figur→forutsetning→
  konsekvens (komplett kjede); (2) OLS-forutsetninger-flervalg (12 spørsmål); (3)
  Uteliggere/multikolinearitet — 2 diagnosescenarier; (4) Full diagnostikkoppgave
  («kan du stole på testene?», momentliste).
- **Del 8:** (1) Intern vs. ytre validitet — diagnoser i 4 studier (hvilken er truet?);
  (2) Validitet-flervalg (10 spørsmål, intern/ytre/mål/slutning); (3) Kausalslutning —
  anvend K&W på 2 ferdige regresjonsresultater (komplett kriterieliste); (4)
  Capstone-delprøve (full kausalvurdering av et regresjonsfunn, momentliste).

### Komplette øvingseksamener (3 — se kap. 9.9–9.11)

Alle: 4 timer, **Del 1 = 30 flervalg (30 p) + Del 2 = én sammenhengende case (70 p)**
som følger forskningsprosessen; full momentliste-fasit per deloppgave med markerte
A-skiller (C-kjerne vs. A-lag); nyskrevne scenarier og tall. Profilene dekker de tre
regimene: A (2015–2020, håndtabeller), B (2021–2023, R-utskrift), C (blandet med
krysstabellinnslag).

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — todelingen (30 flervalg 30 p + case 70 p), forskningsprosess-
   løypa Del 2 følger, hjelpemidler (formelark + tabeller), tidsbudsjett (~40 min Del
   1 + ~200 min Del 2), «substansiell tolkning i kontekst er poenget» (fra kap. 0.1–0.2).
2. **De to ryggrads-ferdighetene** — bestem+begrunn målenivå (2.1) og tolke
   konstant/koeffisient i kontekst (5.2) som ferdige forløp, med tolkningskontrakten
   (§2d) og de farligste feilene (#1, #5, #6) innfelt.
3. **Forskningsprosessen som ett forløp** — Del 2-masteroppskriften (9.2) fra hypotese
   til residualdiagnostikk, med «hva sensor ser etter» ved hvert trinn.
4. **Regne- og tolkningskort** — alle regneferdighetene (deskriptiv, tabellmål,
   prediksjon, restledd, t-test df=N−k−1, dummy k−1) med formler, ett minieksempel
   hver og tolkningskontrakt-maler; R-utskrift-lesing (§2d).
5. **Drøftekartet** — K&W-kriteriene (4, komplett), kausalmodellene (tegnet),
   OLS-forutsetningene (figur→forutsetning→konsekvens), validitetstypene (intern/ytre/
   mål) som oppslag.
6. **Begrepsbank med kontraster** — kontrastparene (nominal↔ordinal↔intervall↔
   forholdstall, kontroll↔interaksjon, intern↔ytre, type I↔II, spuriøs↔mediert,
   statistisk↔substansiell signifikans) i tabellform — flashcard-speilet i prosa.
7. **Feilvaksine-kortversjonen** — de 13 feilene som énlinjers varsellamper, med de
   fem farligste (#3, #4, #7, #12, #13) uthevet.
8. **Del 1-strategien** — flervalgsberedskap (9.1): eliminasjon, nabobegrep-feller,
   tidsstyring.
9. **Ukeplan** — 6-ukers og 2-ukers løp mot eksamen med prøve-innplassering
   (temadelprøver underveis; øvingseksamen A først, B og C de siste to ukene;
   feilvaksinen som siste gjennomgang).

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten (Opus)

1. **Metadata først:** `TextbookCourse`-oppføring (mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; wiring i `textbook-courses-hoyskole.ts`
   per produksjonsløypa fase 5): id `stv1020`, title, `level: 'Høyskole'`, alle 35
   kapitler + prøvekapitler med id/number/title/description/estimatedMinutes/topics/
   competenceGoals/prerequisites fra dette skjelettet; `sectionNames` fra §2-tabellen.
   **`number` er DEL-BASERT («5.2»), ALDRI lineær** — prosareferanser i innholdet
   bruker samme form («kap. 5.2»). Prøvekapitler: `stv1020-<del>-prove`, chapterNumber
   `<del>.P`.
2. **Del 0** (etablerer mantraene alle senere kapitler refererer: «regn/definer — tolk
   i kontekst — konkluder», tolkningskontrakten §2d, todeling-strategien).
3. **Del 1 → 8** i rekkefølge (respekterer forskningsprosessen og prerequisites —
   2.1 før 4.1/6.1; 5.2 før 5.3/5.4; 6.2 før 6.3; 7.1 før 7.2; 8.2 bygger på 1.2/6.2).
   Én byggeagent per hel del (produksjonsløypa fase 4); Del 5 (4 kap) kan splittes,
   men gi begge agentene HELE delens kontrakter og flagg for konsistenssjekk.
4. **Del 9** til slutt (sjanger-, drill-, feilvaksine- og modellbesvarelseskapitlene
   gjenbruker oppskrifter og begreper fra temadelene; øvingseksamenene bygges av én
   agent som leser HELE skjelettet).
5. **Prøvekapitler** (bygges av samme agent som delen) etter at delens temakapitler
   finnes.
6. **Narrativ-versjoner** (`<id>-narrativ.json` per kapittel, jf. `/narrativ`) og
   quiz-registrering til slutt.

Per kapittel gjelder arketypens blokkstruktur: drøftingskapitler (Del 1, 3, 8) følger
drøftings-DNAet (tip Eksamensvinkel → text Forkunnskaper med kryssbok-lenker +
collapsible **Symbol- og formelliste** → text landskap → definition kjernebegreper →
text posisjoner/spenninger → example anvendelse → warning typiske feil → exercise →
collapsible pensumkart); statistikk-/regresjonskapitler (Del 4–7) følger regnefag-
lånet (tip Eksamensvinkel → text Forkunnskaper + Symbol- og formelliste → text
motivasjon → definition/formel → gjennomregnede `example` med tolkningskontrakt →
warning typiske feil → `exercise` med solution + hints i stigende serie →
collapsible repetisjon). **Tolkningskontrakten (§2d) er obligatorisk etter hvert
regnestykke og hver koeffisient.** Eksamensvinkel- og Typiske feil-blokkene fylles med
belegget og feilnumrene fra dette skjelettet — forfatteren skal IKKE finne på
frekvenstall. Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle nye `src/lib/data/chapters/stv1020-*.json` parser med
      `json.load`/`JSON.parse` (generer via `json.dump` — LaTeX i JSON krever `\\`).
      `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 35 kapittel-id-er + 8 prøvekapitler i course-
      oppføringen har eksisterende content-fil; prerequisites peker på eksisterende
      id-er; `sectionNames` satt (ellers viser bokforsiden «Seksjon N»); narrativ-id-er
      registrert slik at toggle rendrer (verifiser med prod-server + curl at
      narrativ-ruter gir 200).
- [ ] **`number` del-basert:** alle chapterNumber på formen `<del>.<nr>`/`<del>.P`,
      aldri lineær; prosareferanser i innholdet bruker samme form.
- [ ] **Notasjonskontrakt:** all statistikknotasjon følger §2c ($Y_i$, $\hat{Y}$,
      $b_0$, $b_j$, $e_i$, $R^2$, $t=b/SE(b)$, $df=N-k-1$, $H_0/H_1$, $\alpha/p$,
      stjerner, målenivåtermene) — ingen lærebok-alternativer.
- [ ] **Tolkningskontrakten:** hvert regnestykke og hver koeffisient i boka ender i en
      substansiell tolkning i kontekst (§2d ledd 2 + 4); ingen «fasit uten mening».
- [ ] **Harde krav som warnings:** nøyaktig **k − 1 dummyer** (6.1), **alle fire
      K&W-kriterier** (1.2, 8.2), **residualplott koblet til BÅDE forutsetning OG
      konsekvens** (7.1), **df = N − k − 1** (5.4) — hver har en eksplisitt
      warning-blokk.
- [ ] **R-utskrift:** gjengitt som tekst-tabell (§2d) med egne NYSKREVNE tall der den
      forekommer (5.2, 5.4, 7.1, 9.8, 9.10); kandidaten skriver ALDRI R-kode.
- [ ] **Pensumforankring EKTE:** kun K&W (*The Fundamentals of Political Science
      Research*) som navngitt anker, og kun der analysen bekrefter den (de fire
      kausalitetskriteriene, OLS-forutsetningene, validitetstypologien). ALDRI
      oppdiktede forfattere, sidetall eller årstall; forelesningsforankrede
      konvensjoner (⚠, f.eks. Geddes-poenget, konvensjonsgrenser) beholder forbehold.
- [ ] **Utelatt stoff:** ingen sannsynlighetsteori, fordelinger, kombinatorikk, bevis,
      egen R-koding, matriseregning, ML eller logistisk regresjon (analysen §6).
- [ ] **Kvotesum:** quiz ≥632 og flashcards ≥578 fordelt per kapittel som angitt
      (hardt minstekrav ≥500/≥500); 4 prøver per temadel (Del 1–8 = 32) + 3
      øvingseksamener i 30-flervalg-+-case-format; fasit-svaralternativer rebalansert
      (jevn a/b/c/d — husk options[0] = riktig i staging, runtime stokker).
- [ ] **Opphavsrett:** alle oppgaver, scenarier, tallsett, tabeller, R-utskrifter og
      modellbesvarelser er NYSKREVNE — mønstre og deloppgaveforløp klones tett, men
      ingen formuleringer, case-navn eller talloppsett fra UiO-sett/veiledninger
      gjenbrukes (bruk NYE analoge caser: kommuner/eiendomsskatt, land/BNP,
      foreldrepermisjon, valgdeltakelse osv. med egne tall). Ingen direktesitater fra
      K&W — referer og parafraser.
- [ ] **Kalibreringssjekk:** boka organisert etter forskningsprosessen (Del 1→8);
      Del 1-flervalg dekket av quizbanken; ryggrads-temaene (målenivå 2.1, tolke
      koeffisient 5.2, utvalg 3.1, R² 5.3, kausalmodell 1.3) tyngst dekket;
      krysstabellmål (4.2) og uteliggere/multikolinearitet (7.2) holdt kompakte
      («bør kjenne til»); alle 13 feil fra §5 dekket i sine hjemkapitler OG samlet i
      9.5.
