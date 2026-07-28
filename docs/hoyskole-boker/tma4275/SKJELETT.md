# Bokskjelett: TMA4275 Levetidsanalyse — eksamensrettet lærebok (NTNU)

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i
> kapitlet eller i eksplisitt refererte forkunnskaper (flytt teoribiten
> tidligere ved behov). Autoritativ kilde: README «Leserkrav» + arketypens
> DNA-fil (`DNA-regnefag.md`). Unntak: øvingseksamen-/prøve-/modellbesvarelses-
> kapitler følger sin egen arketype (komplett sett først, løsninger i
> collapsibles). Kvotene og innholdskontraktene i dette skjelettet er uendret —
> løkka styrer REKKEFØLGEN.


> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er destillert fra
> `EKSAMENSANALYSE.md` (~40 filer 2007–2024 fra TMA4275-arkivet; Jun 2018, Jun
> 2021, Jun 2022 lest grundig med fulle løsningsforslag; sensorregler Jun 2022,
> Jun 2023, Mai 2024 lest grundig; Jun 2019/2020 og Mai 2024 samt nynorske
> 2013–2016 og engelske 2016–2017 lest på oppgavenivå; 2007–2015 skumlest).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der
> (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.

---

## 0. Statusverifisering og emnehistorikk (§C9)

**Status per 2026-07-11: AKTIVT.** Verifisert mot NTNUs emneside
(`ntnu.no/studier/emner/TMA4275`): emnet **Levetidsanalyse** har
«Undervisningsstart Høst 2026» og foreleses **hvert annet år, høsten i
partallsår**. Emnesiden nevner ingen avvikling eller etterfølger; den lister kun
**studiepoengreduksjon mot forgjengeren SIF5075** (gammel emnekode, samme fag).
Emnet er altså i live og fullt byggeverdig — dette er **ikke** et skip-tilfelle
(til forskjell fra de nedlagte TMA4185/TMA4212). Boka bygges som **aktivt
skjelett**.

> **Forbehold (settes i Del 0):** siste maskinlesbare sett i arkivet er Mai 2024.
> Emnet undervises H2026; et H2026-/V2027-sett kan flytte vektene. Alle
> frekvenser er merket «per 2007–2024-arkivet». Byggefasen bør sjekke om et nytt
> sett er publisert før boka meldes helt ferdig.

**Skann-hull (fra analysen §8):** de utførte løsningene før 2018 (May2009,
June2010, May2012–2017) er rene bilde-skann uten tekstlag; temadekningen er
komplett via tekst-variantene, men fasit-detaljer før 2018 er utledet fra
oppgaveformuleringene og de maskinlesbare løsningene fra 2018→. Der en
sensorpremiss er sluttet indirekte, merkes den `(verifiser)` ved bygging.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4275` |
| Tittel | **TMA4275 Levetidsanalyse — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4275 Levetidsanalyse». |
| Arketype | **Regnefag** (`DNA-regnefag.md`) — kvantitativt emne med fast oppgavetradisjon og to forelesningsavhengige spor |
| Antall kapitler | **27** (Del 0: 1 · temadeler 1–10: 22, hvorav 3 drillkapitler · eksamenstrening Del 11: 4) |
| Estimert totaltid | **~2 190 min ≈ 37 timer** (sum av per-kapittel-`estimatedMinutes` under) |
| Quiz totalt | **546** (krav ≥500 — se §5 kvotesammendrag med summeringskontroll) |
| Flashcards totalt | **548** (krav ≥500 — se §5) |

**Pitch (ett avsnitt):** TMA4275-eksamen er en 4-timers skriftlig skoleeksamen
med bokstavkarakter der hvert sett hviler på **fire absolutte gjengangere**:
oversettelsen mellom hasard-, kumulativ-hasard-, tetthets- og
overlevelsesfunksjon ($z \leftrightarrow Z \leftrightarrow f \leftrightarrow R$,
≈95 %, nesten alltid oppgave 1a), Kaplan-Meier og Nelson-Aalen for hånd (≈85 %),
Cox proporsjonal-hasard-modell (≈67 %), og parametrisk levetidsregresjon /
likelihood for sensurerte data (≈61–78 %). Det avgjørende strukturelle trekket i
arkivet er at **eksamensprofilen skifter med foreleser** (~2020–2021): et
**anvendt/tolkende spor** (Tufto/Paglia 2016–19 + korona-settene) der kandidaten
tolker ferdig R-/MINITAB-output — `coxph`, `survreg`, relativ risiko, KI for
hasardratio, ALT/Arrhenius — og et **teoretisk/utledende spor** (Tjelmeland
2021–24) der tellprosesser, martingaler, Doob-Meyer-dekomposisjon, partiell
likelihood fra grunnprinsipp og frailty-modeller utledes. Fordi man ikke vet
hvilken variant neste sett følger, bygges boka rundt en **felles kjerne**
(hasard/overlevelse, KM/NA, sensurering, likelihood) og deretter **begge spor
komplett**. Sensor belønner mellomregning og korrekt sensureringshåndtering
(δ-indikatoren) overalt, og straffer presist de faste feilene — steg ved
sensurerte tider i KM/NA, `exp(coef)` forvekslet med `coef`, varians brukt der
standardavvik skal brukes.

**Kritisk notasjonsregel (gjelder HELE boka)** — arkivets egen notasjon (ABG =
Aalen, Borgan & Gjessing, *Survival and Event History Analysis*) følges slavisk:

- **Hasardrate** $z(t) = f(t)/R(t)$ (arkivet bruker $z$, ikke $\lambda$ eller
  $h$, for individuell hasard; alias $\alpha(t)$ i tellprosess-delen der ABG
  gjør det). **Kumulativ hasard** $Z(t) = \int_0^t z(u)\,du$ (i
  tellprosess-/Nelson-Aalen-kontekst også skrevet $A(t)$, med estimator
  $\hat{A}(t)$ — begge notasjoner brukes i arkivet; introduser koblingen $Z=A$
  eksplisitt).
- **Overlevelsesfunksjon** $R(t) = P(T>t) = e^{-Z(t)}$ (arkivet bruker $R$; alias
  $S(t)$ nevnes én gang og brukes ellers ikke i oppgaver). **Tetthet**
  $f(t) = z(t)R(t) = -R'(t)$.
- **Median/kvantiler:** median $m$ løser $R(m)=\tfrac12$; kvantil $q_\alpha$
  løser $R(q_\alpha)=\alpha$.
- **Sensureringsindikator** $\delta_i$: $\delta_i=1$ hvis observert feil (bidrag
  $f(y_i)$ til likelihooden), $\delta_i=0$ hvis høyresensurert (bidrag $R(y_i)$).
  $Y(t)$ = antall i risiko rett før $t$; $d_j$ = antall feil ved tid $T_j$.
- **Cox:** $z(t;x) = z_0(t)\exp(\beta^\top x)$; partiell likelihood
  $L(\beta) = \prod_{T_j} \dfrac{\exp(\beta^\top x_{i_j})}{\sum_{l\in R_j}\exp(\beta^\top x_l)}$
  der $R_j$ er risikomengden ved $j$-te feil. **Relativ risiko** $r(x)=\exp(\beta^\top x)$.
- **AFT / log-location-scale:** $\ln T = \mu + \sigma U$; $U$ standard
  ekstremverdi → Weibull, standardnormal → lognormal, logistisk → loglogistisk.
- **Tellprosess/martingal:** multiplikativ intensitet $\lambda(t)=\alpha(t)Y(t)$;
  Doob-Meyer $N(t)=\int_0^t\lambda\,du + M(t)$ med $M$ nullforventnings-martingal;
  prediktabel variasjon $\langle M\rangle(t)=\int_0^t\lambda\,du$.
- Store bokstaver for stokastiske variable ($T$), estimatorer med hatt
  ($\hat{\beta},\hat{R},\hat{A}$). All matematikk i LaTeX (`$...$` / `$$...$$`).
  Norsk bokmål; engelsk fagterminologi i parentes ved første forekomst.

**Hjelpemiddel-prinsippet (gjelder HELE boka):** hjelpemiddelkode C i det
normale (kalkulator + «Tabeller og formler i statistikk» + normalfordelings-/
$\chi^2$-tabell + ett gult A5-ark med egne håndskrevne notater fra ~2018), unntatt
korona-årene 2020–22 som var Inspera med **alle hjelpemidler (kode A)**. Kode C
er gjeninnført fra 2024. Emnet tester derfor **bruk og utledning**, ikke
memorering: grunnrelasjonene ($z,Z,f,R$; KM/NA-formlene; Cox partiell
likelihood; AFT-strukturen) skal sitte på det gule arket eller i hodet, men
poengene ligger i å *bruke* dem korrekt og *utlede* det som ikke står der. Hvert
kapittel merker innhold som **«hør hjemme på det gule arket — tren oppslaget»**
vs. **«må utledes aktivt»**.

**To-spors-prinsippet (bokas viktigste strukturgrep):** hvert relevant kapittel
merker eksplisitt om stoffet hører til det **anvendte/tolkende sporet** (output-
drevet: `coxph`/`survreg`/MINITAB, tolk-og-regn-videre) eller det **teoretiske/
utledende sporet** (tellprosess, martingal, partiell likelihood fra grunnen,
frailty) — eller begge. Del 0 gir studenten en «hvilken foreleser?»-radar
(indikatorer i oppgaveteksten: «tolk outputen» vs. «utled fra ABG-uttrykket»),
men understreker at **begge spor må beherskes** siden neste sett kan følge
hvilket som helst.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): grunnformalismen og
sensureringshåndteringen før alt annet; ikke-parametrisk estimering før
regresjonsmodellene; enkle parametriske modeller før AFT/ALT; tellprosess-/
martingalapparatet før de teori-tunge frailty-/multistate-modellene som hviler på
det. Frekvensen styrer *omfanget*, ikke rekkefølgen: de fire gjengangerne
(hasard/overlevelse, KM/NA, Cox, likelihood/parametrisk) får hver sin del med
teori- **og** drillkapittel og høyest kvote; lavfrekvent, avtagende stoff
(klassisk reliabilitetsteori) får ett kompakt kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | perfekt (meta) | Formen (4 t, kode C/A, to forelesningsspor), de fire gjengangerne, temafrekvensene, sjangerkatalogen A–L, sensorkravene, to-spors-radaren og kildeforbeholdet må etableres FØR fagstoffet. Studentens prioriteringsverktøy. |
| 1 | Hasard- og overlevelsesformalismen | 3 | perfekt (≈95 %) | **Ryggraden.** Oversettelsen $z\leftrightarrow Z\leftrightarrow f\leftrightarrow R$, median/kvantiler, gyldig $R(t)$, standardfordelinger (eksponensial/Weibull/lognormal) + **drillkapittel** (sjanger A, nesten alltid oppgave 1a). |
| 2 | Sensurering og likelihood for levetidsdata | 2 | perfekt (78–94 %) | Sensurering (høyre/venstre/intervall) korrekt i estimering, og likelihood $L=\prod_{\delta=1}f(y_i)\prod_{\delta=0}R(y_i)$ med ML/profil-likelihood (sjanger G). Grunnferdighet på tvers av alle modeller. |
| 3 | Ikke-parametrisk estimering: Kaplan-Meier og Nelson-Aalen | 3 | perfekt (≈85 %) | KM ($\hat R$) og NA ($\hat A$) for hånd, plott, median, varians/KI via log-transform + **drillkapittel** (sjanger B, C). Poengreglene straffer sensur-steg presist. |
| 4 | Parametriske levetidsmodeller | 2 | kunne (≈67 %) | Eksponensial (konstant hasard, minneløshet, ML for $\lambda$), Weibull (hasardform, form-/skalaparameter, sannsynlighetsplott), lognormal/loglogistisk. Forutsetning for parametrisk regresjon (Del 6). |
| 5 | Cox proporsjonal-hasard-modell | 3 | perfekt (≈67 %) | **Regresjonssidens dominant.** Modelloppsett + partiell likelihood (utledning, sjanger E), output-tolkning/relativ risiko/hasardratio-KI/delta-metode (sjanger D) + **drillkapittel**. Dekker begge spor. |
| 6 | Parametrisk levetidsregresjon: AFT og ALT | 2 | kunne (≈61 %) | AFT / log-location-scale ($\ln T=\mu+\sigma U$), `survreg`/MINITAB-tolkning, ALT/Arrhenius, delta-metode-KI for kvantiler (sjanger F). Dominerte 2013–19. |
| 7 | Tellprosesser og martingaler | 3 | kunne (33–39 %, sterkt økende) | **Teori-sporets kjerne 2021→.** Tellprosess $N(t)$, multiplikativ intensitet, Doob-Meyer, kompensator, prediktabel variasjon, martingal-baserte tester (sjanger I) + koblingen tilbake til NA-variansen. Nesten fraværende før 2020. |
| 8 | Frailty- og multistate-modeller | 2 | kjenne (11 %/ny, topptema) | Delt frailty (Laplace-transform, klynge-likelihood, profil-likelihood, sjanger J) og multistate/Markov (Aalen-Johansen, transisjonsmatriser, sjanger K). Nye sjangre 2022/2024 — signaliserer emnets moderne retning. |
| 9 | Tellprosess-modeller for reparerbare systemer og programvare (NHPP) | 1 | kunne (≈44 %) | NHPP med intensitet $w(t)$, kumulativ intensitet $W(t)$; programvarepålitelighet Goel-Okumoto / Jelinski-Moranda, betinget pålitelighet, optimal testtid (sjanger H). Sterk 2007–15, jevn siden. |
| 10 | Klassisk reliabilitets- og systemteori | 1 | kjenne (≈28 %, avtagende) | Serie-/parallellsystemer, strukturfunksjon, Birnbaum-importans, konkurrerende risiko, TTT-plott + Barlow-Proschan, log-rank (sjanger L). Tungt i 2007-tradisjonen, nesten borte etter 2016, men billig å dekke for fullstendighet. |
| 11 | Eksamenstrening | 4 | perfekt (meta) | Sjangerkatalog A–L (løsningsoppskrifter) + **3 komplette øvingseksamener** — én anvendt/tolkende (Tufto/Paglia-mal), én teoretisk/utledende (Tjelmeland-mal), én blandet — med A-besvarelser og delpoeng-notater. |

Rasjonale: de fire 61–95 %-gjengangerne (hasard/overlevelse, sensurering/
likelihood, KM/NA, Cox) får hver sin del med drillkapittel og høyest kvote;
tellprosess-/martingalapparatet (sterkt økende siden 2021) får full del fordi det
er teori-sporets kjerne og forutsetning for frailty/multistate; klassisk
reliabilitetsteori (avtagende) får ett kompakt kapittel. **Begge
forelesningsspor er komplette** — det anvendte (Cox-output, AFT/ALT, MINITAB/R)
og det teoretiske (tellprosesser, martingaler, partiell likelihood fra grunnen,
frailty).

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Hasard- og overlevelsesformalismen |
| 2 | Sensurering og likelihood for levetidsdata |
| 3 | Ikke-parametrisk estimering: Kaplan-Meier og Nelson-Aalen |
| 4 | Parametriske levetidsmodeller |
| 5 | Cox proporsjonal-hasard-modell |
| 6 | Parametrisk levetidsregresjon: AFT og ALT |
| 7 | Tellprosesser og martingaler |
| 8 | Frailty- og multistate-modeller |
| 9 | Tellprosess-modeller for reparerbare systemer og programvare |
| 10 | Klassisk reliabilitets- og systemteori |
| 11 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Hasard/overlevelse-oversettelsen (gitt én av $z,Z,f,R$ → utled de andre;
median/kvantiler; sjekk gyldig $R$) · **B** Kaplan-Meier for hånd (tabell, plott
som trappekurve, median, sammenlign to grupper) · **C** Nelson-Aalen + varians/KI
(via log-transform; ofte litt R-kode) · **D** Cox-output-tolkning (relativ
risiko $\exp(\beta^\top x)$, hasardratio-KI, delta-metode, signifikans, «neste
steg») · **E** Cox partiell likelihood — utledning (skriv $L(\beta)$, forklar
$R_j$, forenkle og utled lukket MPL-estimator) · **F** Parametrisk regresjon /
ALT (AFT-struktur, `survreg`/MINITAB-tolkning, median/kvantil-KI med
delta-metode, Arrhenius-ekstrapolasjon) · **G** Likelihood for sensurerte data
($\prod f\cdot\prod R$, log, ML/profil-likelihood) · **H** Tellprosess / NHPP /
programvarepålitelighet (Goel-Okumoto, Jelinski-Moranda, $W(t)$, optimal testtid)
· **I** Martingal / Doob-Meyer / ikke-parametrisk test (vis forventning null via
martingalintegral, finn prediktabel variasjon) · **J** Frailty-modeller (delt
frailty, Laplace-transform, klynge-likelihood, profil-likelihood) · **K**
Multistate / Aalen-Johansen (overgangsintensiteter, inkrement-matriser,
transisjonssannsynligheter) · **L** Klassisk reliabilitet (serie/parallell,
strukturfunksjon, Birnbaum, konkurrerende risiko, TTT/Barlow-Proschan, log-rank).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

Poengmodell (2022–24): hvert deloppgave-punkt gis maks 10 poeng, summeres og
skaleres til 100; karaktergrenser A>88, B>76, C>64, D>52, E>40, F≤40. Alle
punkter teller likt.

1. **Fremgangsmåte og mellomregning kreves alltid.** «Emphasis will be placed on
   the answers being logical and that they contain all natural intermediate
   calculations.» Rene svar uten utledning gir lite.
2. **KM/NA straffes presist:** steg ved *sensurerte* tider gir maks 1 poeng for
   delen; ikke-trappeformet kurve $-2$; kurve som ikke starter i 1 gir maks 1;
   manglende/feil median-markering $-2$.
3. **Cox relativ risiko:** bruk **coef ($\beta$)** i eksponenten, ikke
   **exp(coef)** — feil her gir kun 1 poeng.
4. **Konfidensintervall:** bruk **standardavvik**, ikke varians, i KI (feil
   $-1$); lag KI for parameteren og transformer monotont (exp/ln) — ikke bland
   SE for én størrelse med varians for en annen.
5. **Partiell likelihood:** eksplisitt poeng for å begrunne at
   $R_j=\{1,\dots,n\}$ når alle enheter alltid er i risiko ($-2$ hvis utelatt).
6. **Utledningsoppgaver deles i deler** (typisk 3/6/8/10 poeng for 1/2/3/4 riktige
   deler, $-1$ per del for mindre feil) — delvis riktig premieres.
7. **«Neste steg»-diskusjon (Cox):** full score krever *både* diskusjon om å
   fjerne kovariater *og* modellsjekk.
8. **Referansekrav (Inspera-epoken 2020–22):** bruker man et ABG-uttrykk, oppgi
   ligningsnummer, kopier uttrykket, begrunn relevansen; for tellprosess-/frailty-
   oppgaver gis poeng for å identifisere *hvilket* ABG-uttrykk man starter fra.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** **Steg ved sensurerte tider i KM/NA** — sensurering endrer risikomengden
$Y(t)$, men gir ikke hopp i estimatoren. Vanligste feil, straffes hardt. · **F2**
**exp(coef) forvekslet med coef** i relativ-risiko-funksjonen — det er
$\beta$ som står i eksponenten. · **F3** **Varians brukt der standardavvik skal
brukes** i KI (glemme kvadratrota). · **F4** **Feil KI-transformasjon** — legge
$z\cdot\text{SE}$ til en avledet størrelse direkte i stedet for å lage KI for
parameteren og transformere monotont; for flerdim. uttrykk: glemme
kovariansleddene i delta-metoden. · **F5** **Forventet levetid fra sensurert
hale** — areal under KM-kurven er ikke identifiserbart forbi siste observasjon
hvis den er sensurert. · **F6** **Glemme sensureringsbidraget i likelihooden** —
sensurerte enheter bidrar med $R(y_i)$, ikke $f(y_i)$. · **F7** **Risikomengden
$R_j$ i partiell likelihood feilspesifisert** — særlig ikke innse at alle enheter
er i risiko for reparerbare systemer, eller inkludere allerede-feilede enheter. ·
**F8** **Antar analytisk MLE der det ikke finnes** — når begge parametre står i
score-nevneren må man over til profil-likelihood / Newton-Raphson. · **F9**
**Hasard vs. kumulativ hasard forvekslet** — Nelson-Aalen estimerer $Z(t)$
(kumulativ), ikke $z(t)$. · **F10** **Uklar/manglende tolkning i kontekst** —
«diskuter neste steg» og «tolk parameteren» besvares for tynt; sensor krever
konkret medisinsk/teknisk tolkning.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag med to forelesningsspor.** DNA-regnefag passer direkte
   (regne-/utlednings-/modelloppgaver med entydigere fasit). Den styrende
   tilpasningen er **to-spors-strukturen**: hvert regresjons-/teorikapittel
   merker om det trener det anvendte (output-tolkning) eller teoretiske
   (utledning) sporet, og øvingseksamenene i Del 11 finnes i begge maler. Dette
   speiler EKSAMENSANALYSE §7s strategiske merknad om felles kjerne + to spor.
2. **Arbeidsdeling mot tvillingemnet TMA4245 (Statistikk).** Grunnleggende
   sannsynlighet, generell ML-teori (likelihood, log-likelihood, derivasjon,
   forventningsretthet/varians), konfidensintervall og hypotesetesting som
   *metode* dekkes av TMA4245-boka og forutsettes. TMA4275-boka **re-etablerer
   ikke** grunnleggende MLE-teori, men refererer til den (kryssbok-lenker til
   tma4245-kapitler) og fokuserer på det levetidsspesifikke: sensurering,
   hasard-/overlevelsesformalismen, ikke-parametrisk estimering, tellprosesser,
   regresjonsmodeller for levetid og pålitelighetsteori.
3. **«Symbol- og formelliste» beholdes** (README-krav): hvert delkapittel som
   bruker symboler/formler får en `collapsible` «Symbol- og formelliste» sist,
   som forklarer ALLE symboler brukt i delkapitlet ($z,Z,f,R,\delta,Y,d_j,
   \beta,\sigma,\mu,\alpha,\lambda,M,\langle M\rangle$ osv.), med åpningsnotisen
   «Oppslagsverk — alt her forklares underveis i kapitlet.»
4. **R- og MINITAB-output i tekst.** Plattformen viser ikke ekte konsoll-figurer;
   `coxph`/`survreg`/MINITAB-output gjengis som **kodeformaterte tekstblokker**
   (monospace i markdown) med koeffisient-tabell (coef, exp(coef), se(coef), z,
   p) og kovariansmatrise der delta-metoden kreves. Alle datasett og
   output-tall er **nyskrevne** (se §6).
5. **Drillkapitler for gjengangerne (i tråd med DNA-regnefag).** Hasard/overlevelse
   (1.3), KM/NA (3.3) og Cox (5.3) får hvert sitt **drillkapittel** rett etter
   teorien, fordi disse er de mest resirkulerte og mekaniserbare sjangrene
   (A, B/C, D/E). Del 11 beholder sjangerspillet og øvingseksamenene.
6. **Figurbehov (DNA-regnefag figurkrav):** KM- og NA-kurver er trappefunksjoner
   som sensor eksplisitt vurderer formen på. Kapittel 3.1–3.3 og øvingseksamenene
   SKAL ha statiske SVG-figurer av trappekurver (KM fra 1, NA fra 0, med
   median-avlesning og KI-bånd) som referanse («slik skal kurven din se ut — merk
   at det IKKE er steg ved sensurerte tider»). Tellprosess-/hasardform-figurer
   (økende/konstant/avtagende hasard, Weibull-familien; TTT-plott) i 4.1–4.2 og
   7.1. Filer: `public/images/textbook/tma4275/*.svg`; wire som image-blokker;
   kjør `npx tsx scripts/upload-media-storage.ts` etter (ellers 404 i prod).
7. **Ingen oppdiktede tall eller sensorpremisser.** Numeriske påstander
   parametersjekkes (DNA-regnefag «matematisk sannhetskontroll», se §7-note her);
   usikre sensorpremisser fra før 2018 (skann-hull) merkes `(verifiser)`.

### Kapittel-DNA

Teorikapitler følger **DNA-regnefag «Kapittel-DNA (teorikapittel)»** (blokk
1–8: Eksamensvinkel → Forkunnskaper + Symbol-/formelliste → Motivasjon →
definition/theorem → Utledning med intuisjon → example ×2–4 → Typiske feil →
exercise ×6–12 → Repetisjon), med læringsløkke per metode. Drillkapitlene (1.3,
3.3, 5.3) følger **DNA-regnefag «Kapittel-DNA (drillkapittel)»** (Eksamensvinkel →
Løsningsoppskrift → gjennomregnet eksamenscase med sensor-margnotater →
exercise ×8–15). Øvingseksamenene (Del 11) følger **DNA-regnefag «Kapittel-DNA
(øvingseksamen)»** (komplett sett + løsningsforslag i collapsibles som
A-besvarelse). Disse gjentas ikke per kapittel under.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–L) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta) + hvilket spor
> (anvendt/teoretisk/begge), alt «per 2007–2024-arkivet». **Innholdskontrakt** =
> definisjoner/teoremer som SKAL med (med notasjon) + hva som må utledes aktivt
> vs. kun brukes. **Kvote** = quiz/flashcards. Kryssbok-lenkene peker på
> tma4245-kapitler (`(verifiser lenke)` der usikker — bygges parallelt).

---

### Del 0 — Eksamenskart *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4275

**id:** `tma4275-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4 t skriftlig, kode C/A, to forelesningsspor),
  de fire gjengangerne, temafrekvensene, sjangerkatalogen A–L, sensorkravene,
  to-spors-radaren og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2007–2024). Skal formidle:
  (a) **formen** — 4 t skriftlig skoleeksamen, bokstavkarakter, hjelpemiddelkode
  C (kalkulator + «Tabeller og formler i statistikk» + $\chi^2$-/normaltabell +
  gult A5-ark fra ~2018), unntatt korona 2020–22 (Inspera, kode A, alt tillatt);
  kode C gjeninnført 2024; 3–5 (eldre) / 5–6 (moderne) fortellingsoppgaver med
  flere deloppgaver. (b) **De fire gjengangerne** med frekvens: hasard/overlevelse
  ≈95 %, sensurering ≈94 %, KM/NA ≈85 %, likelihood for sensurerte data ≈78 %,
  eksponensial/parametrisk levetid ≈61–67 %, Cox ≈67 %. (c) **Temafrekvens-
  tabellen** (analysen §2) inkl. de økende sjangrene: martingal/Doob-Meyer ≈33 %
  (sterkt økende siden 2021), partiell likelihood-utledning ≈39 %, frailty ≈11 %
  (ny 2022), multistate/Aalen-Johansen (ny 2024); og de avtagende: klassisk
  reliabilitet ≈28 %, ALT ≈28 %. (d) **De to forelesningssporene** —
  anvendt/tolkende (Tufto/Paglia 2016–19 + korona) vs. teoretisk/utledende
  (Tjelmeland 2021–24), overgangen ~2020–21, og at boka dekker begge. (e)
  **Sensorkravene** (§2 over) inkl. poengmodellen 10 p/punkt → 100 og
  karaktergrensene. (f) **Kildeforbeholdet** — siste maskinlesbare sett Mai 2024;
  skann-hull før 2018; frekvenser «per 2007–2024-arkivet»; emnet undervises H2026,
  nytt sett kan flytte vekter.
- **Innholdskontrakt:** (i) **Slik leser du denne boka**-boks (`tip`, IKKE
  definition): forklarer karakter-/poengmodellen (10 p/punkt → 100; A>88 osv. —
  ramme inn som bilde av nivåene, ikke trussel; C er en god og vanlig karakter),
  sjangerkodene A–L i klarspråk, at typiske feil har et samlet register (F1–F10),
  og rammer inn tunge symboler leseren møter senere ($M(t)$, $\langle M\rangle$,
  Laplace-transform, $\hat{A}$) med «du trenger ikke forstå disse ennå». (ii)
  **Formel-minimum-side** (`collapsible`, bokas «samlede oppslagskort» — printbar
  ren tabell): grunnrelasjonene $z=f/R$, $Z=\int z$, $R=e^{-Z}$, $f=zR=-R'$,
  median $R(m)=\tfrac12$; KM $\hat R=\prod(1-d_j/Y_j)$; NA $\hat A=\sum 1/Y_j$,
  $\hat\sigma^2=\sum 1/Y_j^2$; Cox $L(\beta)=\prod\exp(\beta x_{i_j})/\sum_{R_j}
  \exp(\beta x_l)$; AFT $\ln T=\mu+\sigma U$; likelihood $\prod_{\delta=1}f
  \prod_{\delta=0}R$ — hver med én ordlinje. (iii) **To-spors-radaren**:
  indikatorer i oppgaveteksten («tolk `coxph`-outputen» → anvendt; «utled den
  partielle likelihooden fra ABG (X.Y)» → teoretisk). (iv) **Del 0-pakken**
  (README): «Lite tid?»-boks (3–5-dagers hurtigrute + ukeplan av summerte
  `estimatedMinutes`, med LESEtid-forbehold ×1,5 for håndskriving), kildenote for
  frekvens-empirien (settene analysen bygger på + forbehold), prosedyre-/
  sjangerkort på én side (sjanger A–L → én-linjes oppskrift → tidsbudsjett →
  vanligste feil), 10–12-ukers deltidsrute (~8 t/uke) med øvingseksamener fordelt
  på flere økter, «lese mye, skrive lite»-boks + råd om å skrive minst én
  øvingseksamen for hånd på tid (4 t håndskrift er en fysisk ferdighet). (v)
  **Karakter-realisme** (README): C er god og vanlig; «Gapet til A» som
  oppgraderingsmeny (pivotal-/martingal-utledninger, styrke, frailty), ikke
  mangelliste.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver: «gitt en
  4-timers mal med 5–6 oppgaver — sett opp tidsbudsjett og rekkefølge»; «avgjør av
  en oppgavetekst om settet følger det anvendte eller teoretiske sporet»; «koble
  en oppgaveformulering til riktig sjanger A–L».
- **Typiske feil:** Metafeilene — tro at arkivfrekvensene er ferske (les
  forbeholdet); vente at boka re-lærer grunnleggende ML (den forutsetter TMA4245);
  forberede bare ett spor; droppe mellomregning (sensorkrav 1).
- **Kvote:** 10 quiz / 10 flashcards (formfakta, de fire gjengangerne,
  temafrekvens, sjangerkodene, sensorkravene, to-spors-radaren, kildeforbeholdet).

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 11).

---

### Del 1 — Hasard- og overlevelsesformalismen *(prioritet: PERFEKT — ≈95 %, bokas ryggrad · spor: begge)*

#### Kapittel 1.1: Overlevelses-, hasard- og tetthetsfunksjonen

**id:** `tma4275-1-1` · **number:** 1.1 · **estimatedMinutes:** 65 · **prerequisites:** ingen (forutsetter grunnleggende sannsynlighet/integrasjon fra TMA4245)

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Grunnrelasjonene i levetidsanalyse — overlevelsesfunksjon
  $R(t)=P(T>t)$, hasardrate $z(t)=f(t)/R(t)$, kumulativ hasard $Z(t)=\int_0^t z$,
  og oversettelsen mellom dem $R=e^{-Z}$, $f=zR=-R'$ — med hverdagsanker (risiko
  for å svikte «akkurat nå gitt overlevd så langt») før formalismen.
- **Eksamensbelegg:** Sjanger A, ≈95 %, nesten alltid oppgave 1a. Billige,
  obligatoriske poeng; forutsetning for *alt* annet. Spor: begge. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** ingen interne; [Kontinuerlige fordelinger og
  tetthet](/tma4245/tma4245-2-1) `(verifiser lenke)`. `collapsible`
  **Symbol- og formelliste:** $T,R,f,z,Z$, sammenhengene, median $m$.
- **Innholdskontrakt (SKAL med):** definisjonene $R(t)=P(T>t)=1-F(t)$;
  $z(t)=f(t)/R(t)=\lim_{\Delta\to0}\frac1\Delta P(t\le T<t+\Delta\mid T\ge t)$ (hasard
  = betinget øyeblikkelig sviktrate); $Z(t)=\int_0^t z(u)\,du=-\ln R(t)$;
  $R(t)=e^{-Z(t)}$; $f(t)=z(t)R(t)=-R'(t)$. **Utledes aktivt:** at $Z=-\ln R$
  (integrer $z=-R'/R$), og hver retning i oversettelsen. **Intuisjon-linjer**
  etter hvert steg. Merk hva som «hør hjemme på det gule arket» (de fem
  relasjonene) vs. «må kunne utledes» (selve integrasjonen).
- **Oppgavesjangre:** A — gitt $z(t)$ (eller $R(t)$), utled de tre andre. Mønster:
  «Levetiden $T$ har kumulativ hasard $Z(t)=\ln(t+1)$. Finn $R(t)$, $f(t)$, $z(t)$
  og median.»
- **Typiske feil:** F9 (hasard vs. kumulativ hasard); glemme minustegnet i
  $f=-R'$; regne $z$ som en sannsynlighet (den kan være $>1$).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.2: Median, kvantiler, forventet levetid og gyldige overlevelsesfunksjoner

**id:** `tma4275-1-2` · **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4275-1-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å finne median og kvantiler fra $R$, regne forventet levetid
  $E(T)=\int_0^\infty R(t)\,dt$ (og når den er endelig), og sjekke at et gitt
  $R(t)$ er en gyldig overlevelsesfunksjon ($R(0)=1$, avtagende, $\to0$).
- **Eksamensbelegg:** Sjanger A (samme oppgave som 1.1, andre halvdel), ≈95 %.
  Spor: begge. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:**
  $m,q_\alpha,E(T)$, gyldighetskriteriene.
- **Innholdskontrakt (SKAL med):** median $R(m)=\tfrac12$; kvantil
  $R(q_\alpha)=\alpha$; interkvartilbredde; $E(T)=\int_0^\infty R(t)\,dt$ (utled
  via delvis integrasjon fra $E(T)=\int t f\,dt$ — **utledes aktivt**); kriterier
  for gyldig $R$: $R(0)=1$, ikke-økende, $\lim_{t\to\infty}R(t)=0$; når $E(T)$ er
  uendelig (tung hale, f.eks. $Z=\ln(t+1)$). **Intuisjon:** median = tiden der
  halvparten fortsatt lever; $E(T)$ som areal under $R$.
- **Oppgavesjangre:** A — «Finn medianlevetiden og avgjør om forventet levetid er
  endelig»; «Avgjør om $R(t)=\dots$ er en gyldig overlevelsesfunksjon.»
- **Typiske feil:** F5 (forventet levetid fra sensurert/tung hale); løse
  $R(m)=\tfrac12$ feil vei; glemme gyldighetssjekk.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.3: Drill — hasard/overlevelse-oversettelsen (sjanger A)

**id:** `tma4275-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4275-1-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Ren mengdetrening på oppgave-1a-sjangeren: gitt hvilken som
  helst av $z,Z,f,R$, produser de andre + median/kvantiler/gyldighet, raskt og
  feilfritt, for et repertoar av fordelinger.
- **Eksamensbelegg:** Sjanger A, ≈95 %, oppgave 1a i praktisk talt hvert sett.
  Spor: begge. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1–1.2. `collapsible` **Symbol- og
  formelliste:** de fem relasjonene i kortform.
- **Innholdskontrakt:** **Løsningsoppskrift** (nummerert): (1) identifiser hvilken
  funksjon er gitt; (2) finn $Z$ (integrer $z$, eller $-\ln R$); (3) $R=e^{-Z}$;
  (4) $f=zR$ eller $-R'$; (5) median $R(m)=\tfrac12$. Gjennomregnet eksamenscase
  med sensor-margnotater (hvor mellomregningspoengene ligger).
- **Oppgavesjangre:** A × mange varianter (eksponensial, Weibull, Gompertz,
  konstant + potens-hasard, stykkevis konstant hasard).
- **Typiske feil:** F9; regnefeil i integrasjonen; glemme
  integrasjonskonstant/grense.
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A oversettelse $z\to R,f$ · 1.B oversettelse
$R\to z,Z,f$ + median · 1.C gyldig $R$ + forventet levetid · 1.D samlet
sjanger-A-prøve på eksamensnivå).

---

### Del 2 — Sensurering og likelihood for levetidsdata *(prioritet: PERFEKT — 78–94 % · spor: begge)*

#### Kapittel 2.1: Sensurering og trunkering

**id:** `tma4275-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4275-1-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Hva sensurering er (høyre-, venstre-, intervall-), hvorfor
  levetidsdata nesten alltid er høyresensurert, sensureringsindikatoren $\delta$,
  og hvordan sensurering — men ikke trunkering — endrer risikomengden uten å gi
  et hopp i estimatorene.
- **Eksamensbelegg:** Sjanger allestedsnærværende (≈94 %) — nesten hvert datasett
  er høyresensurert. Spor: begge. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:**
  $\delta_i,Y(t),d_j$, sensureringstyper.
- **Innholdskontrakt (SKAL med):** høyresensurering (observerer $y_i=\min(T_i,C_i)$
  og $\delta_i=\mathbb 1(T_i\le C_i)$); venstresensurering; intervallsensurering;
  uavhengig/ikke-informativ sensurering (antagelsen); trunkering (venstre-,
  utvalgsskjevhet). **Nøkkelpoeng (kobles til Del 3):** en sensurert observasjon
  fjerner enheten fra risikomengden $Y$ ved sin tid, men gir **ikke** et hopp.
  **Hverdagsanker:** en pasient som fortsatt lever ved studieslutt — vi vet bare
  at $T>y$.
- **Oppgavesjangre:** kortsvar + oppsett: «angi $\delta_i$ for hver observasjon»;
  «forklar hvorfor sensurering ikke gir hopp i KM».
- **Typiske feil:** F1 (foregriper — sensur-steg); blande sensurering og
  trunkering; feil $\delta$-koding.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 2.2: Likelihood for sensurerte data og ML/profil-likelihood

**id:** `tma4275-2-2` · **number:** 2.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å bygge likelihooden $L=\prod_{\delta_i=1}f(y_i)\prod_{\delta_i=0}
  R(y_i)$ for en gitt parametrisk levetidsmodell, ta logaritme, finne ML-estimator
  (analytisk der mulig, ellers Newton-Raphson), og bruke **profil-likelihood** når
  analytisk MLE er umulig.
- **Eksamensbelegg:** Sjanger G, ≈78 %; grunnferdighet på tvers av alle modeller
  (både anvendt og teoretisk spor). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1, 1.1; [Maximum likelihood-estimering](/tma4245/tma4245-5-1)
  `(verifiser lenke)` (grunnteorien forutsettes derfra). `collapsible`
  **Symbol- og formelliste:** $L,\ell,\delta_i$, score, profil-likelihood.
- **Innholdskontrakt (SKAL med):** likelihood-bidraget $f(y_i)$ for feil ($\delta=1$)
  og $R(y_i)$ for sensur ($\delta=0$); $\ell(\theta)=\sum_{\delta_i=1}\ln f(y_i)+
  \sum_{\delta_i=0}\ln R(y_i)=\sum_i[\delta_i\ln z(y_i) - Z(y_i)]$ (den kompakte
  hasard-formen — **utled aktivt**, den brukes i tellprosess-delen); score-ligning
  og ML for eksponensial ($\hat\lambda = \sum\delta_i/\sum y_i$, dvs. antall feil /
  total risikotid — **utled aktivt**); **profil-likelihood** (optimér analytisk
  over noen parametre, la resten stå; når begge parametre i score-nevneren →
  numerisk). **Kobling:** forklar hvorfor eksponensial-MLE er «feil per
  eksponert tid».
- **Oppgavesjangre:** G — «Skriv opp likelihoodfunksjonen for $(\mu,\sigma)$ i en
  loglogistisk log-location-scale-modell med høyresensurerte data»; «Finn
  ML-estimatoren for $\lambda$ i en eksponensialmodell med sensurering.»
- **Typiske feil:** F6 (glemme sensur-bidraget $R(y_i)$); F8 (antar analytisk MLE
  der profil-likelihood kreves); regne $\ell$ uten $\delta$-vekting.
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A sensureringstyper + $\delta$-koding · 2.B
likelihood-oppsett for gitt modell · 2.C eksponensial-ML med sensur · 2.D
profil-likelihood + Newton-Raphson-oppsett).

---

### Del 3 — Ikke-parametrisk estimering: Kaplan-Meier og Nelson-Aalen *(prioritet: PERFEKT — ≈85 % · spor: begge)*

#### Kapittel 3.1: Kaplan-Meier-estimatoren

**id:** `tma4275-3-1` · **number:** 3.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å estimere overlevelsesfunksjonen $R(t)$ uten fordelingsantagelse:
  Kaplan-Meier-produktet for hånd, trappekurven fra 1, median-avlesning,
  Greenwoods variansformel, og hvorfor forventet levetid ikke er identifiserbart
  fra en sensurert hale.
- **Eksamensbelegg:** Sjanger B, ≈85 % (KM/NA samlet). For hånd + tolkning. Spor:
  begge (særlig anvendt). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  $\hat R,Y(t_j),d_j$, Greenwood.
- **Innholdskontrakt (SKAL med):** $\hat R(t)=\prod_{T_j\le t}\left(1-\dfrac{d_j}{Y(T_j)}\right)$;
  $Y(T_j)$ = antall i risiko rett før $T_j$; trappekurve konstant mellom
  feiltider, hopp kun ved *feil*; median der $\hat R$ krysser $\tfrac12$;
  Greenwoods formel $\widehat{\mathrm{Var}}(\hat R(t))=\hat R(t)^2\sum_{T_j\le t}
  \dfrac{d_j}{Y_j(Y_j-d_j)}$ (**oppslag/bruk**, ikke utled). **SVG-figur** av
  KM-trappekurve. **Sensor-poeng:** trappeform, start i 1, ingen steg ved
  sensurerte tider, median markert.
- **Oppgavesjangre:** B — «Beregn KM-estimatet for hånd for to behandlingsgrupper,
  tegn begge kurvene, angi median for hver.»
- **Typiske feil:** F1 (steg ved sensurerte tider — maks 1 poeng); F5 (forventet
  levetid fra sensurert hale); kurve som ikke starter i 1 ($-2$/maks 1).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.2: Nelson-Aalen-estimatoren med varians og konfidensintervall

**id:** `tma4275-3-2` · **number:** 3.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-3-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Å estimere den kumulative hasarden $A(t)=Z(t)$: Nelson-Aalen-summen
  for hånd, variansestimatet, konfidensintervall via log-transformasjon, og litt
  R-kode for plott/varians/KI.
- **Eksamensbelegg:** Sjanger C, vanlig 2019–2024; erstatter/supplerer KM,
  kobler til tellprosess-delen (Del 7). Spor: begge (anvendt R-kode + teoretisk
  varians). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1, 1.1. `collapsible` **Symbol- og
  formelliste:** $\hat A,\hat\sigma^2$, log-transform-KI.
- **Innholdskontrakt (SKAL med):** $\hat A(t)=\sum_{T_j\le t}\dfrac{d_j}{Y(T_j)}$
  (ved ingen bindinger $\sum 1/Y(T_j)$); variansestimat
  $\hat\sigma^2(t)=\sum_{T_j\le t}\dfrac{d_j}{Y(T_j)^2}$; **log-transformert KI:**
  $\hat A(t)\exp\!\left(\pm z_{\alpha/2}\dfrac{\hat\sigma(t)}{\hat A(t)}\right)$
  (**merk: standardavvik $\hat\sigma$, ikke varians** — sensorkrav 4/F3); kobling
  $\hat R=e^{-\hat A}$ (alternativ overlevelsesestimator). **R-kode** for
  $\hat A$, varians, KI, `plot` av trappekurve med KI-bånd (nyskrevet).
  **SVG-figur** av NA-kurve med KI-bånd.
- **Oppgavesjangre:** C — «Beregn NA-estimatet for hånd og skriv R-kode som gir
  variansestimatet og et 95 %-KI via log-transformasjon, med plott.»
- **Typiske feil:** F9 (NA estimerer $Z$, ikke $z$); F3 (varians i stedet for
  standardavvik i KI); F1 (sensur-steg).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 3.3: Drill — KM og NA for hånd (sjanger B, C)

**id:** `tma4275-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4275-3-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Mengdetrening på KM- og NA-tabeller fra små sensurerte datasett:
  risikomengde, hopp kun ved feil, trappekurve, median, varians/KI — feilfritt og
  raskt, slik sensor krever.
- **Eksamensbelegg:** Sjanger B/C, ≈85 %. Spor: begge. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1–3.2. `collapsible` **Symbol- og
  formelliste:** KM/NA-formlene i kortform.
- **Innholdskontrakt:** **Løsningsoppskrift** (nummerert): (1) sorter distinkte
  feiltider; (2) tabell med $Y(T_j),d_j$; (3) KM-produkt / NA-sum; (4) trappekurve;
  (5) median / KI. Gjennomregnet eksamenscase med sensor-margnotater (de fire
  poeng-straffene: sensur-steg, ikke-trapp, start ikke i 1, median ikke markert).
  Gjenbruk KM-/NA-referansefigurene fra 3.1–3.2 («slik skal din se ut»).
- **Oppgavesjangre:** B og C × mange varianter (én/to grupper, med/uten bindinger,
  ulik sensureringsandel).
- **Typiske feil:** F1, F3, F9.
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A KM for hånd én gruppe · 3.B KM to grupper +
median · 3.C NA + varians/KI + R-kode · 3.D samlet ikke-parametrisk-prøve på
eksamensnivå).

---

### Del 4 — Parametriske levetidsmodeller *(prioritet: KUNNE — ≈67 % · spor: begge)*

#### Kapittel 4.1: Eksponensialfordelingen som levetidsmodell

**id:** `tma4275-4-1` · **number:** 4.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4275-2-2`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Eksponensialfordelingen: konstant hasard, minneløshet,
  koblingen til Poisson-prosessen, og ML for raten $\lambda$ fra sensurerte data.
- **Eksamensbelegg:** ≈67 % (eksponensial som levetidsmodell). Grunnmodellen bak
  NHPP og reparerbare systemer. Spor: begge. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1, 2.2. `collapsible` **Symbol- og
  formelliste:** $\lambda$, konstant hasard, minneløshet.
- **Innholdskontrakt (SKAL med):** $z(t)=\lambda$ (konstant), $R(t)=e^{-\lambda t}$,
  $f(t)=\lambda e^{-\lambda t}$, $E(T)=1/\lambda$; **minneløshet**
  $P(T>s+t\mid T>s)=P(T>t)$ (utled aktivt); $\hat\lambda=\sum\delta_i/\sum y_i$
  (antall feil / total risikotid). **SVG-figur** av konstant hasard. **Merk
  parametriseringen:** rate-form $\lambda$ (arkivet bruker denne i pålitelighet;
  forventnings-formen $\beta=1/\lambda$ nevnes som alias, jf. TMA4245).
- **Oppgavesjangre:** A/G-hybrid — «Vis at eksponensialfordelingen er minneløs og
  finn ML for $\lambda$ fra et høyresensurert datasett.»
- **Typiske feil:** F6 (sensur-bidrag i ML); blande rate og forventning; tro at
  minneløshet gjelder andre fordelinger.
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 4.2: Weibull, lognormal og loglogistisk

**id:** `tma4275-4-2` · **number:** 4.2 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-4-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** De sentrale to-parameter-levetidsfordelingene: Weibulls
  hasardform (økende/konstant/avtagende via formparameteren), form-/skalaparameter,
  sannsynlighetsplott, og lognormal/loglogistisk — grunnlaget for AFT-regresjon.
- **Eksamensbelegg:** Weibull-hasardform ≈50 %; forutsetning for parametrisk
  regresjon (Del 6). Spor: begge. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1, 1.2. `collapsible` **Symbol- og
  formelliste:** Weibull $\alpha,\theta$; lognormal/loglogistisk-parametre.
- **Innholdskontrakt (SKAL med):** Weibull $z(t)=\dfrac{\alpha}{\theta}
  \left(\dfrac{t}{\theta}\right)^{\alpha-1}$, $R(t)=\exp\!\left(-(t/\theta)^\alpha\right)$
  (**merk:** formparameter $\alpha$ styrer hasardretningen — $\alpha>1$ økende,
  $\alpha=1$ konstant (=eksponensial), $\alpha<1$ avtagende; **parametersjekk
  dette numerisk før påstand**, DNA-regnefag §7); lognormal (badekar-lignende,
  ikke-monoton hasard); loglogistisk; sannsynlighetsplott (linearisér $\ln(-\ln R)$
  mot $\ln t$ for Weibull). **SVG-figur** av Weibull-hasardfamilien (tre
  $\alpha$-verdier). **Utled aktivt:** Weibull-hasarden fra $R$; at $\alpha=1$ gir
  eksponensial.
- **Oppgavesjangre:** A/F — «Vis at Weibull-hasarden er økende hviss $\alpha>1$, og
  bruk et sannsynlighetsplott til å estimere $\alpha$.»
- **Typiske feil:** blande form- og skalaparameter; feil hasardretning-påstand
  (parametersjekk!); F9.
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A eksponensial: minneløshet + ML · 4.B Weibull
hasardform + sannsynlighetsplott · 4.C lognormal/loglogistisk · 4.D samlet
parametrisk-prøve).

---

### Del 5 — Cox proporsjonal-hasard-modell *(prioritet: PERFEKT — ≈67 % · spor: begge)*

#### Kapittel 5.1: Cox-modellen og den partielle likelihooden (utledning)

**id:** `tma4275-5-1` · **number:** 5.1 · **estimatedMinutes:** 75 · **prerequisites:** `tma4275-2-2`, `tma4275-3-2`

- **Kapitteltype:** teorikapittel (perfekt — teoretisk spor).
- **Description:** Cox proporsjonal-hasard-modell $z(t;x)=z_0(t)\exp(\beta^\top x)$,
  risikomengden $R_j$, og utledningen av den partielle likelihooden fra
  grunnprinsipp — inkludert lukkede MPL-estimatorer i spesialtilfeller.
- **Eksamensbelegg:** Sjanger E, ≈39 % (Tjelmeland-signatur 2022, 2024). Spor:
  teoretisk. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.2, 3.2. `collapsible` **Symbol- og
  formelliste:** $z_0,\beta,x,R_j,L(\beta),i_j$.
- **Innholdskontrakt (SKAL med):** modellen $z(t;x)=z_0(t)\exp(\beta^\top x)$
  (proporsjonal hasard — hasardratio $\exp(\beta^\top\Delta x)$ er
  tidsuavhengig); partiell likelihood
  $L(\beta)=\prod_{T_j}\dfrac{\exp(\beta^\top x_{i_j})}{\sum_{l\in R_j}\exp(\beta^\top x_l)}$
  (**forklar $R_j$ = risikomengden ved $j$-te feil, $i_j$ = enheten som feiler**);
  log-partiell likelihood og score; **spesialtilfelle:** binær tidsuavhengig
  kovariat der alle alltid er i risiko → forenkle nevneren og utled lukket
  $\hat\beta=\ln\!\left(\dfrac{K_1 z_0}{K_0 z_1}\right)$ `(verifiser uttrykk mot
  reparerbar-system-konteksten)`. **Utledes aktivt** hele veien (dette er
  sjangerens kjerne). **Sensor-poeng:** begrunn at $R_j=\{1,\dots,n\}$ når alle er
  i risiko (F7/$-2$).
- **Oppgavesjangre:** E — «For reparerbare enheter med binær tidsuavhengig kovariat
  der alle alltid er i risiko, utled partiell likelihood, log-partiell likelihood
  og et lukket MPL-uttrykk.»
- **Typiske feil:** F7 (risikomengde feilspesifisert); glemme begrunne
  $R_j=\{1,\dots,n\}$; forveksle partiell og full likelihood.
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.2: Tolkning av coxph-output: relativ risiko, hasardratio-KI, delta-metode

**id:** `tma4275-5-2` · **number:** 5.2 · **estimatedMinutes:** 75 · **prerequisites:** `tma4275-5-1`

- **Kapitteltype:** teorikapittel (perfekt — anvendt spor).
- **Description:** Å lese `coxph`-output: skrive relativ risiko $\exp(\beta^\top x)$,
  regne hasardratio mellom to individer med KI (monoton transform), bruke
  kovariansmatrisen + delta-metoden for sammensatte uttrykk, vurdere signifikans,
  og diskutere «neste steg» (kovariatseleksjon + modellsjekk, Schoenfeld).
- **Eksamensbelegg:** Sjanger D, ≈67 %; standard i alle moderne sett. Spor:
  anvendt. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1; [Konfidensintervall](/tma4245/tma4245-6-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** coef, exp(coef),
  se(coef), $\hat\Sigma=$`cox$var`, delta-metode.
- **Innholdskontrakt (SKAL med):** relativ risiko $r(x)=\exp(\beta^\top x)$
  (**bruk coef $\beta$, ikke exp(coef), i eksponenten** — F2/sensorkrav 3);
  hasardratio mellom to individer $=\exp(\beta^\top\Delta x)$; **KI for
  hasardratio:** lag KI for $\beta^\top\Delta x$ (bruk $\text{se}$, ikke varians),
  transformer med $\exp$ (monotont) — $\exp(\hat\beta\Delta x \pm z_{\alpha/2}
  \,\text{se})$; **delta-metode** for sammensatte uttrykk:
  $\mathrm{Var}(\ln r)\approx \nabla^\top\hat\Sigma\,\nabla$ med
  $\hat\Sigma=$`res.cox$var`; signifikans per kovariat (z, p); **«neste steg»** =
  fjern ikke-signifikante kovariater OG modellsjekk (Schoenfeld-residualer for
  proporsjonalitet — Tufto-signatur). **R-output** som kodeformatert tekstblokk
  (nyskrevet). **hør hjemme på det gule arket:** ingenting; alt regnes fra output.
- **Oppgavesjangre:** D — «Fra Cox-outputen, skriv relativ risiko-funksjonen og
  finn et 95 %-KI for hasardratioen mellom en 50- og en 51-åring med ellers like
  kovariater.»
- **Typiske feil:** F2 (exp(coef) i eksponenten — kun 1 poeng); F3 (varians i KI);
  F4 (delta-metode uten kovariansledd); F10 (tynn «neste steg»-diskusjon).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.3: Drill — Cox partiell likelihood og output-tolkning (sjanger D, E)

**id:** `tma4275-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4275-5-2`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Mengdetrening på begge Cox-sjangrene: utled partiell likelihood
  i varierende spesialtilfeller (teoretisk spor), og tolk `coxph`-output med
  relativ risiko / hasardratio-KI / delta-metode (anvendt spor).
- **Eksamensbelegg:** Sjanger D (≈67 %) + E (≈39 %). Spor: begge. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1–5.2. `collapsible` **Symbol- og
  formelliste:** $L(\beta)$, relativ risiko, delta-metode i kortform.
- **Innholdskontrakt:** **Løsningsoppskrift** for hver sjanger: (D) 1) skriv
  $r(x)=\exp(\beta^\top x)$ med coef; 2) $\Delta x$; 3) KI for $\beta^\top\Delta x$
  med se; 4) $\exp$-transformer; 5) tolk + neste steg. (E) 1) skriv $L(\beta)$; 2)
  spesifiser $R_j$; 3) forenkle nevner; 4) log + score; 5) løs. Gjennomregnet
  eksamenscase med sensor-margnotater.
- **Oppgavesjangre:** D og E × mange varianter (ulike output-tabeller, ulike
  spesialtilfeller for MPL).
- **Typiske feil:** F2, F3, F4, F7, F10.
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A partiell likelihood-utledning · 5.B relativ
risiko + hasardratio-KI · 5.C delta-metode for sammensatt uttrykk + neste steg ·
5.D samlet Cox-prøve på eksamensnivå, begge spor).

---

### Del 6 — Parametrisk levetidsregresjon: AFT og ALT *(prioritet: KUNNE — ≈61 % · spor: anvendt)*

#### Kapittel 6.1: Log-location-scale / AFT-modellen (survreg, MINITAB)

**id:** `tma4275-6-1` · **number:** 6.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-4-2`, `tma4275-2-2`

- **Kapitteltype:** teorikapittel (kunne — anvendt spor).
- **Description:** AFT / log-location-scale-familien $\ln T=\mu+\sigma U$: hvilken
  standardfordeling $U$ gir Weibull/lognormal/loglogistisk, tolkning av
  `survreg`-/MINITAB-koeffisienter, og beregning av median/kvantiler/sannsynligheter
  med KI via delta-metoden.
- **Eksamensbelegg:** Sjanger F, ≈61 %; dominerte 2013–19. Spor: anvendt.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.2, 2.2. `collapsible` **Symbol- og
  formelliste:** $\mu,\sigma,U$, AFT-relasjonene, delta-metode.
- **Innholdskontrakt (SKAL med):** $\ln T=\mu+\sigma U$ (med kovariater
  $\mu=\beta^\top x$); $R_T(t)=R_U\!\left(\dfrac{\ln t-\mu}{\sigma}\right)$;
  koblingen $U$ standard ekstremverdi → Weibull, standardnormal → lognormal,
  logistisk → loglogistisk (**merk: AFT «akselererer/bremser» tiden, motsatt
  logikk av Cox proporsjonal hasard**); lese `survreg`/MINITAB (Intercept $=\mu$,
  scale $=\sigma$), regne median levetid og kvantiler; **KI for en kvantil** med
  delta-metode (bruk `vcov`). **R-/MINITAB-output** som tekstblokk (nyskrevet).
- **Oppgavesjangre:** F — «Fra en `survreg`-lognormal-modell, regn median levetid
  for en gitt kovariatprofil og et 95 %-KI med delta-metoden.»
- **Typiske feil:** F4 (delta-metode uten kovariansledd); blande AFT- og
  Cox-tolkning; feil standardfordeling for $U$.
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 6.2: Akselerert levetidstesting (ALT) og Arrhenius-modellen

**id:** `tma4275-6-2` · **number:** 6.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4275-6-1`

- **Kapitteltype:** teorikapittel (kunne — anvendt spor).
- **Description:** ALT: å teste ved forhøyet stress og ekstrapolere til
  brukstemperatur via Arrhenius-relasjonen, og sjekke designkrav («95 % skal
  overleve 30 000 timer»).
- **Eksamensbelegg:** Sjanger F/ALT, ≈28 %; MINITAB-basert, 2013–19. Spor:
  anvendt. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 6.1. `collapsible` **Symbol- og formelliste:**
  Arrhenius-parametre, stresstransform.
- **Innholdskontrakt (SKAL med):** Arrhenius-relasjon
  $\ln T=\beta_0+\beta_1\cdot\dfrac{11604.83}{s+273.16}+\sigma U$ (stress
  $s$ i °C → transformert til invers absolutt temperatur — **verifiser konstanten
  og fortegnet numerisk**, DNA-regnefag §7); ekstrapolér fra teststress til
  brukstemperatur; regn $P(T>t_0)$ ved brukstemperatur og sammenlign mot krav.
  **MINITAB Weibull/lognormal ALT-output** som tekstblokk (nyskrevet).
- **Oppgavesjangre:** F — «Fra en Weibull-ALT-regresjon med Arrhenius-relasjon,
  estimer $P(T>30000\text{ t})$ ved 10 °C og vurder om produktkravet er oppfylt.»
- **Typiske feil:** feil temperaturtransform (Celsius vs. Kelvin, fortegn); F4;
  ekstrapolere hasarden i stedet for log-tiden.
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A AFT-struktur + fordelingskobling · 6.B
`survreg`-tolkning + median/kvantil · 6.C delta-metode-KI for kvantil · 6.D
ALT/Arrhenius-ekstrapolasjon + designkrav).

---

### Del 7 — Tellprosesser og martingaler *(prioritet: KUNNE — 33–39 %, sterkt økende · spor: teoretisk)*

#### Kapittel 7.1: Tellprosesser og multiplikativ intensitet

**id:** `tma4275-7-1` · **number:** 7.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-3-2`

- **Kapitteltype:** teorikapittel (kunne — teoretisk spor).
- **Description:** Tellprosessen $N(t)$ som moderne rammeverk for
  levetidsanalyse: multiplikativ intensitet $\lambda(t)=\alpha(t)Y(t)$, og hvordan
  Nelson-Aalen-estimatoren faller ut naturlig av dette.
- **Eksamensbelegg:** Grunnlag for sjanger I; tellprosess-formalismen er teori-
  sporets kjerne 2021→. Spor: teoretisk. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.2. `collapsible` **Symbol- og formelliste:**
  $N(t),\lambda(t),\alpha(t),Y(t)$.
- **Innholdskontrakt (SKAL med):** tellprosess $N(t)$ (antall observerte
  hendelser $\le t$, ikke-avtagende, hopp på 1); intensitetsprosess
  $\lambda(t)$; **multiplikativ intensitetsmodell** $\lambda(t)=\alpha(t)Y(t)$ der
  $\alpha$ = individhasard, $Y$ = antall i risiko; kobling til NA:
  $\hat A(t)=\int_0^t\dfrac{dN(u)}{Y(u)}=\sum_{T_j\le t}\dfrac{d_j}{Y(T_j)}$.
  **Hverdagsanker:** en teller som tikker opp hver gang noen svikter.
- **Oppgavesjangre:** I-forberedende — «Skriv NA-estimatoren som et
  tellprosess-integral og forklar $\lambda(t)=\alpha(t)Y(t)$.»
- **Typiske feil:** blande $N$ (observert) og $\lambda$ (intensitet); F9.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 7.2: Doob-Meyer, kompensator og prediktabel variasjon

**id:** `tma4275-7-2` · **number:** 7.2 · **estimatedMinutes:** 75 · **prerequisites:** `tma4275-7-1`

- **Kapitteltype:** teorikapittel (kunne — teoretisk spor).
- **Description:** Doob-Meyer-dekomposisjonen $N=$ kompensator $+$ martingal, at
  martingalintegraler har forventning null, og at prediktabel variasjon gir
  forventningsrette variansestimatorer.
- **Eksamensbelegg:** Grunnlag for sjanger I, ≈33 % (sterkt økende). Spor:
  teoretisk. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Symbol- og formelliste:**
  $M(t),\langle M\rangle(t)$, kompensator, martingalintegral.
- **Innholdskontrakt (SKAL med):** Doob-Meyer $N(t)=\int_0^t\lambda(u)\,du+M(t)$
  der kompensatoren $\int\lambda$ er prediktabel og $M$ er en nullforventnings-
  martingal ($E[M(t)]=0$); at $\int_0^t H\,dM$ er en martingal for prediktabel $H$
  (→ forventning null); prediktabel variasjon $\langle M\rangle(t)=\int_0^t\lambda
  \,du=\int_0^t\alpha Y\,du$; bruk til forventningsrett variansestimator.
  **Utledes aktivt** (dette premieres). **Sensor-poeng:** identifiser hvilket
  ABG-uttrykk man starter fra (sensorkrav 8).
- **Oppgavesjangre:** I-forberedende — «Vis at $\hat A(t)-A^\star(t)$ kan skrives
  som et martingalintegral $\int (J/Y)\,dM$ og har forventning null.»
- **Typiske feil:** integrand ikke prediktabel (feil forventning-null-argument);
  blande $\langle M\rangle$ og $\hat\sigma^2$; F9.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 7.3: Martingal-baserte ikke-parametriske tester og log-rank

**id:** `tma4275-7-3` · **number:** 7.3 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-7-2`

- **Kapitteltype:** teorikapittel (kunne — teoretisk spor).
- **Description:** Å bygge en ett-utvalgs test (NA mot kjent hasard) og
  log-rank-testen (to grupper) fra martingal-formalismen: test-observator med
  forventning null under $H_0$, forventningsrett varians, og forkastningsregel.
- **Eksamensbelegg:** Sjanger I (≈33 %) + log-rank (≈28 %). Spor: teoretisk.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 7.2; [Hypotesetesting](/tma4245/tma4245-7-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $Z(t_0)$,
  test-observator, log-rank.
- **Innholdskontrakt (SKAL med):** ett-utvalgs test-observator $Z(t_0)$ (differanse
  NA-estimat vs. kjent kumulativ hasard), forventning null under $H_0$ via
  martingalintegral, varians fra $\langle M\rangle$; **log-rank-testen** som
  martingal-basert to-gruppe-test (observerte vs. forventede feil under $H_0$,
  standardisert). **Utledes aktivt** for ett-utvalgs; log-rank «bruk + forstå».
- **Oppgavesjangre:** I — «Bruk Doob-Meyer til å vise at $Z(t_0)$ har forventning
  null under $H_0$, og finn en forventningsrett variansestimator»; L-hybrid:
  log-rank for to grupper.
- **Typiske feil:** feil varians (bruke $N$ i stedet for $\langle M\rangle$);
  glemme forkastningsregel; F10 (tolkning).
- **Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A tellprosess + multiplikativ intensitet + NA-
integral · 7.B Doob-Meyer + martingalintegral forventning null · 7.C prediktabel
variasjon + variansestimator · 7.D ett-utvalgs test + log-rank på eksamensnivå).

---

### Del 8 — Frailty- og multistate-modeller *(prioritet: KJENNE — 11 %/ny, topptema · spor: teoretisk)*

#### Kapittel 8.1: Frailty-modeller: delt frailty, Laplace-transform, profil-likelihood

**id:** `tma4275-8-1` · **number:** 8.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-2-2`, `tma4275-5-1`

- **Kapitteltype:** teorikapittel (kjenne — teoretisk spor, topptema).
- **Description:** Delt frailty i klynger: individhasarden $Z_j\alpha(t)$ deler en
  klynge-spesifikk frailty, Laplace-transformen marginaliserer den ut, og
  klynge-likelihooden bygges — med profil-likelihood når analytisk MLE svikter.
- **Eksamensbelegg:** Sjanger J, ≈11 % (ny 2022, 2024); direkte knyttet til ABG
  kap. 7. Topptema (avgjør A). Spor: teoretisk. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 2.2, 5.1. `collapsible` **Symbol- og
  formelliste:** $Z_j$ (frailty), $\mathcal L(c)$ (Laplace-transform),
  klynge-likelihood.
- **Innholdskontrakt (SKAL med):** delt frailty — hasard for individ $i$ i klynge
  $j$ er $Z_j\,\alpha(t)$, $Z_j$ i.i.d. frailty; **Laplace-transform**
  $\mathcal L(c)=E[e^{-cZ}]$ og dens deriverte; marginal klynge-likelihood via
  $(-1)^D\mathcal L^{(D)}(V)$ der $D$ = antall feil, $V$ = kumulativ
  bakgrunnshasard i klyngen (ABG (7.3) — **identifiser uttrykket, sensorkrav 8**);
  eksponensial-frailty som konkret eksempel (utled $r$-te deriverte induktivt);
  **profil-likelihood** ved umulig analytisk MLE. **Utledes aktivt.**
- **Oppgavesjangre:** J — «Individene i hver klynge deler en eksponensialfordelt
  frailty. Vis induktivt den $r$-te deriverte av Laplace-transformen, og skriv
  klyngenes log-likelihood.»
- **Typiske feil:** F8 (antar analytisk MLE); feil tegn/fortegn i
  $(-1)^D\mathcal L^{(D)}$; blande frailty-varians og hasard.
- **Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 8.2: Multistate- og Markov-modeller: Aalen-Johansen

**id:** `tma4275-8-2` · **number:** 8.2 · **estimatedMinutes:** 65 · **prerequisites:** `tma4275-7-1`, `tma4275-3-2`

- **Kapitteltype:** teorikapittel (kjenne — teoretisk spor, topptema).
- **Description:** Flertilstands-Markov-prosesser: overgangsintensiteter, Nelson-Aalen
  per overgangstype, og Aalen-Johansen-estimatoren for overgangssannsynligheter som
  matriseprodukt.
- **Eksamensbelegg:** Sjanger K, ny (Mai 2024); signaliserer emnets moderne
  retning. Spor: teoretisk. Prioritet: kjenne.
- **Forkunnskaper/kryssbok:** kap. 7.1, 3.2. `collapsible` **Symbol- og
  formelliste:** $\alpha_{gh}$, $\Delta\hat A(t)$, Aalen-Johansen-matriseprodukt.
- **Innholdskontrakt (SKAL med):** flertilstands-Markov med overgangsintensiteter
  $\alpha_{gh}(t)$; NA per overgangstype (trappefunksjon med hopp ved
  overgangstider); inkrement-matriser $\Delta\hat A(t)$; Aalen-Johansen
  $\hat P(s,t)=\prod_{(s,t]}\left(I+\Delta\hat A(u)\right)$ (matriseprodukt over
  overgangstider); sjekk at resultatet er en gyldig transisjonsmatrise (rader
  summerer til 1). **Bruk + forstå** (ny sjanger, ett sett).
- **Oppgavesjangre:** K — «For en tre-tilstands Markov-prosess med én absorberende
  tilstand, estimer kumulativ overgangsintensitet per overgang og bygg
  Aalen-Johansen-estimatet.»
- **Typiske feil:** feil matriseordning i produktet; glemme
  transisjonsmatrise-sjekk; blande overgangstyper.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A Laplace-transform + deriverte · 8.B
klynge-likelihood + profil-likelihood · 8.C overgangsintensiteter + NA per
overgang · 8.D Aalen-Johansen-matriseprodukt).

---

### Del 9 — Tellprosess-modeller for reparerbare systemer og programvare (NHPP) *(prioritet: KUNNE — ≈44 % · spor: begge)*

#### Kapittel 9.1: NHPP og programvarepålitelighet

**id:** `tma4275-9-1` · **number:** 9.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-4-1`, `tma4275-7-1`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** Ikke-homogen Poisson-prosess (NHPP) for reparerbare systemer og
  programvare: intensitet $w(t)$, kumulativ intensitet $W(t)$, og de to
  programvaremodellene Goel-Okumoto og Jelinski-Moranda med betinget pålitelighet
  og optimal testtid.
- **Eksamensbelegg:** Sjanger H, ≈44 %; sterk 2007–15, jevn siden. Spor: begge.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 4.1, 7.1. `collapsible` **Symbol- og
  formelliste:** $w(t),W(t)$, Goel-Okumoto $\alpha,\beta$, Jelinski-Moranda.
- **Innholdskontrakt (SKAL med):** NHPP med intensitet $w(t)$; kumulativ intensitet
  $W(t)=\int_0^t w(u)\,du$ = forventet antall hendelser i $[0,t]$;
  $P(N(t)=k)=\dfrac{W(t)^k}{k!}e^{-W(t)}$; **Goel-Okumoto** $w(t)=\alpha\beta
  e^{-\beta t}$ (tolk $\alpha$ = initielt forventet antall feil, $W(\infty)=\alpha$);
  **Jelinski-Moranda** $\lambda_i=(a-i+1)b$ (hasard etter $i-1$ feil); betinget
  pålitelighet $R(t\mid s)$; likelihood for $\alpha,\beta$ (hhv. $a,b$); optimal
  testtid gitt krav til betinget pålitelighet. **Utled aktivt:** $W(t)$ og grensen
  $t\to\infty$; betinget pålitelighet.
- **Oppgavesjangre:** H — «Antall programvarefeil følger en Goel-Okumoto-NHPP.
  Finn $W(t)$, tolk grensen $t\to\infty$, og utled optimal testtid gitt et krav
  til betinget pålitelighet.»
- **Typiske feil:** blande homogen og ikke-homogen Poisson; feil tolkning av
  $\alpha$; F7 (risikomengde/feil-telling i Jelinski-Moranda).
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A NHPP $W(t)$ + Poisson-sannsynligheter · 9.B
Goel-Okumoto + grense + likelihood · 9.C Jelinski-Moranda + betinget pålitelighet
· 9.D optimal testtid på eksamensnivå).

---

### Del 10 — Klassisk reliabilitets- og systemteori *(prioritet: KJENNE — ≈28 %, avtagende · spor: begge)*

#### Kapittel 10.1: Systemstruktur, importans, konkurrerende risiko og TTT

**id:** `tma4275-10-1` · **number:** 10.1 · **estimatedMinutes:** 70 · **prerequisites:** `tma4275-1-1`, `tma4275-4-1`

- **Kapitteltype:** teorikapittel (kjenne).
- **Description:** Den klassiske pålitelighetsteorien fra 2007-tradisjonen:
  serie-/parallellsystemer og strukturfunksjoner, Birnbaum-importans,
  konkurrerende risiko, og TTT-plott med Barlow-Proschan-test for konstant hasard.
- **Eksamensbelegg:** Sjanger L, ≈28 %, avtagende (nesten borte etter 2016), men
  billig å dekke for fullstendighet. Spor: begge (mest anvendt). Prioritet:
  kjenne.
- **Forkunnskaper/kryssbok:** kap. 1.1, 4.1. `collapsible` **Symbol- og
  formelliste:** strukturfunksjon $\phi$, Birnbaum-mål, TTT.
- **Innholdskontrakt (SKAL med):** **seriesystem** — hasard = sum av
  komponent-hasarder $z_{\text{sys}}=\sum_k z_k$ (utled aktivt),
  $R_{\text{sys}}=\prod R_k$; **parallellsystem** $R_{\text{sys}}=1-\prod(1-R_k)$;
  strukturfunksjon $\phi(\mathbf x)$ (serie $=\prod x_k$, parallell
  $=1-\prod(1-x_k)$); **Birnbaum-importans**
  $I_k=\partial h(\mathbf p)/\partial p_k$; **konkurrerende risiko** (latent-
  levetids-modellen, sub-hasarder, og identifiserbarhetsbegrensningen);
  **TTT-plott** (skalert total tid på test) + Barlow-Proschan-test for konstant
  vs. økende/avtagende hasard. **SVG-figur** av TTT-plott (konkav = avtagende
  hasard, konveks = økende). **Bør kjenne til** — merkes eksplisitt som
  lavfrekvent.
- **Oppgavesjangre:** L — «Vis at hasarden til et seriesystem er summen av
  komponent-hasardene, og tegn et TTT-plott for å vurdere om levetidene har
  konstant, økende eller avtagende hasard.»
- **Typiske feil:** blande $R$-produkt (serie) og $1-\prod(1-R)$ (parallell); feil
  TTT-tolkning (konkav/konveks); anta uavhengige konkurrerende risikoer uten
  forbehold.
- **Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A serie/parallell hasard + pålitelighet ·
10.B strukturfunksjon + Birnbaum-importans · 10.C konkurrerende risiko · 10.D
TTT-plott + Barlow-Proschan).

---

### Del 11 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 11.1: Sjangerspillet — løsningsoppskrifter A–L

**id:** `tma4275-11-1` · **number:** 11.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4275-10-1`

- **Kapitteltype:** sjangeroversikt / eksamensstrategi.
- **Description:** Én side per sjanger A–L: gjenkjenn oppgaven, algoritmisk
  løsningsoppskrift, tidsbudsjett, vanligste feil (F1–F10) — pluss to-spors-
  radaren som beslutningstre.
- **Eksamensbelegg:** Metakapittel (alle sjangre). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka (lenker til hvert deltema). `collapsible`
  **Samlet oppslagskort:** sjanger → oppskrift → tidsbudsjett → feil (ren tabell,
  printbar — dette + formel-minimum-siden i 0.1 dekker README-oppslagskravet).
- **Innholdskontrakt:** løsningsoppskriften for hver sjanger A–L som nummererte
  trinn; to-spors-radaren som beslutningstre («tolk output» vs. «utled fra ABG»);
  kald-bank-varsel (11.4).
- **Oppgavesjangre:** klassifiseringsoppgaver — «hvilken sjanger og hvilket spor?»
- **Typiske feil:** feil sjangergjenkjenning → feil metode; feil tidsbudsjettering.
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 11.2: Øvingseksamen 1 — anvendt/tolkende spor (Tufto/Paglia-mal)

**id:** `tma4275-11-2` · **number:** 11.2 · **estimatedMinutes:** 90 · **prerequisites:** `tma4275-11-1`

- **Kapitteltype:** øvingseksamen (komplett sett + løsningsforslag i collapsibles).
- **Description:** Komplett 4-timers sett i det anvendte sporet: hasard/overlevelse
  (A), KM/NA for hånd (B/C), Cox-output-tolkning (D), AFT/ALT (F), NHPP (H) —
  output-drevet, med A-besvarelse og delpoeng-notater.
- **Eksamensbelegg:** Speiler den anvendte tradisjonen (Tufto/Paglia 2016–19 +
  korona-settene). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** Del 1–6, 9. `collapsible` per oppgave: A-besvarelse
  + `tip`-delpoengnotat (poengmodell 10 p/punkt → 100).
- **Innholdskontrakt:** 5–6 nyskrevne fortellingsoppgaver som speiler
  temafordelingen (§2), alle output-tall og datasett nyskrevet. Pausepunkt-markører
  mellom oppgavene (README øktmerking).
- **Oppgavesjangre:** A, B, C, D, F, H.
- **Typiske feil:** F1, F2, F3, F4, F5, F6, F10 (samlet i fasit-selvdiagnose).
- **Kvote:** 8 quiz / 6 flashcards. **Selvdiagnose-sjekkliste** (☐) etter hver
  fasit.

#### Kapittel 11.3: Øvingseksamen 2 — teoretisk/utledende spor (Tjelmeland-mal)

**id:** `tma4275-11-3` · **number:** 11.3 · **estimatedMinutes:** 90 · **prerequisites:** `tma4275-11-1`

- **Kapitteltype:** øvingseksamen (komplett sett + løsningsforslag i collapsibles).
- **Description:** Komplett 4-timers sett i det teoretiske sporet: hasard fra $R$
  (A), NA + varians (C), Cox partiell likelihood-utledning (E), martingal/Doob-Meyer
  (I), frailty/Laplace (J), Aalen-Johansen (K) — utledningstung, med A-besvarelse
  og delpoeng-notater.
- **Eksamensbelegg:** Speiler den teoretiske tradisjonen (Tjelmeland 2021–24).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** Del 1, 3, 5, 7, 8. `collapsible` per oppgave:
  A-besvarelse + delpoengnotat; referansekrav (identifiser ABG-uttrykk,
  sensorkrav 8).
- **Innholdskontrakt:** 5–6 nyskrevne utledningsoppgaver som speiler den moderne
  profilen, delt i 3/6/8/10-poengsnivåer (sensorkrav 6). Pausepunkt-markører.
- **Oppgavesjangre:** A, C, E, I, J, K.
- **Typiske feil:** F7, F8, F9 (samlet i fasit-selvdiagnose).
- **Kvote:** 8 quiz / 6 flashcards. **Selvdiagnose-sjekkliste** (☐) etter hver
  fasit.

#### Kapittel 11.4: Øvingseksamen 3 — blandet sett + kald bank

**id:** `tma4275-11-4` · **number:** 11.4 · **estimatedMinutes:** 90 · **prerequisites:** `tma4275-11-2`, `tma4275-11-3`

- **Kapitteltype:** øvingseksamen + kald bank (uten hint).
- **Description:** Et blandet sett (begge spor) på eksamensnivå, pluss en **kald
  bank** på 8–10 oppgaver med uvante vinklinger/kombinasjoner UTEN hint (kun
  momentliste-fasit) — for toppleseren som skal strekkes.
- **Eksamensbelegg:** Speiler et sett som blander sporene + genuint krevende
  bredde. Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` per oppgave: A-besvarelse;
  kald bank tydelig merket «uten hint — momentliste-fasit» (README
  difficulty-spredning + kald bank).
- **Innholdskontrakt:** 5–6 blandede oppgaver + kald bank (8–10 krevende). Minst
  én A-besvarelse med en SKARP, veid konklusjon (README A-konklusjonsvariasjon).
- **Oppgavesjangre:** blanding A–L; kald bank: kombinasjonsoppgaver (f.eks.
  frailty + profil-likelihood, martingal + variansestimator, ALT + delta-metode).
- **Typiske feil:** alle F1–F10 (samlet register).
- **Kvote:** 8 quiz / 6 flashcards. **Selvdiagnose-sjekkliste** (☐) etter hver
  fasit.

**Prøve-kvote Del 11:** de tre øvingseksamenene (11.2–11.4) ER prøvene for denne
delen (3 komplette sett + kald bank); sjangerspillet (11.1) gir klassifiserings-
drill.

---

## 4. Øvingseksamener (oppsummert)

Tre komplette 4-timers sett med bokstavkarakter-vekting (10 p/punkt → 100,
karaktergrenser A>88, B>76, C>64, D>52, E>40), nyskrevne oppgaver og datasett:

1. **11.2 Anvendt/tolkende** (Tufto/Paglia-mal) — output-drevet: A, B/C, D, F, H.
2. **11.3 Teoretisk/utledende** (Tjelmeland-mal) — utledningstung: A, C, E, I, J, K.
3. **11.4 Blandet + kald bank** — begge spor + 8–10 krevende oppgaver uten hint.

Løsningsforslag som A-besvarelser i collapsibles, med delpoeng-notater og
selvdiagnose-sjekklister. Ingen oppgavetekst, datasett eller output gjengis
ordrett fra arkivet (§6).

---

## 5. Kvotesammendrag med summeringskontroll

> Kontrollregnet per-kapittel FØR totalen (gate-tallet = den reelle summen).

### Quiz per kapittel

| Kap | Quiz | Kap | Quiz | Kap | Quiz |
|---|---|---|---|---|---|
| 0.1 | 10 | 4.1 | 16 | 8.1 | 16 |
| 1.1 | 20 | 4.2 | 18 | 8.2 | 14 |
| 1.2 | 18 | 5.1 | 20 | 9.1 | 18 |
| 1.3 | 18 | 5.2 | 20 | 10.1 | 18 |
| 2.1 | 16 | 5.3 | 18 | 11.1 | 12 |
| 2.2 | 20 | 6.1 | 18 | 11.2 | 8 |
| 3.1 | 20 | 6.2 | 16 | 11.3 | 8 |
| 3.2 | 20 | 7.1 | 16 | 11.4 | 8 |
| 3.3 | 18 | 7.2 | 16 | | |
| | | 7.3 | 16 | | |

**Delsummer:**
- Del 0: 10
- Del 1 (1.1–1.3): 20+18+18 = 56
- Del 2 (2.1–2.2): 16+20 = 36
- Del 3 (3.1–3.3): 20+20+18 = 58
- Del 4 (4.1–4.2): 16+18 = 34
- Del 5 (5.1–5.3): 20+20+18 = 58
- Del 6 (6.1–6.2): 18+16 = 34
- Del 7 (7.1–7.3): 16+16+16 = 48
- Del 8 (8.1–8.2): 16+14 = 30
- Del 9 (9.1): 18
- Del 10 (10.1): 18
- Del 11 (11.1–11.4): 12+8+8+8 = 36

**Quiz totalt:** 10+56+36+58+34+58+34+48+30+18+18+36 = **546** ✓ (≥500)

### Flashcards per kapittel

| Kap | FC | Kap | FC | Kap | FC |
|---|---|---|---|---|---|
| 0.1 | 10 | 4.1 | 18 | 8.1 | 16 |
| 1.1 | 22 | 4.2 | 18 | 8.2 | 14 |
| 1.2 | 18 | 5.1 | 20 | 9.1 | 18 |
| 1.3 | 16 | 5.2 | 20 | 10.1 | 18 |
| 2.1 | 18 | 5.3 | 16 | 11.1 | 12 |
| 2.2 | 20 | 6.1 | 18 | 11.2 | 6 |
| 3.1 | 20 | 6.2 | 16 | 11.3 | 6 |
| 3.2 | 20 | 7.1 | 16 | 11.4 | 6 |
| 3.3 | 16 | 7.2 | 16 | | |
| | | 7.3 | 16 | | |

**Delsummer:**
- Del 0: 10
- Del 1: 22+18+16 = 56
- Del 2: 18+20 = 38
- Del 3: 20+20+16 = 56
- Del 4: 18+18 = 36
- Del 5: 20+20+16 = 56
- Del 6: 18+16 = 34
- Del 7: 16+16+16 = 48
- Del 8: 16+14 = 30
- Del 9: 18
- Del 10: 18
- Del 11: 12+6+6+6 = 30

**Flashcards totalt:** 10+56+38+56+36+56+34+48+30+18+18+30 = **548** ✓ (≥500)

### Prøver

4 prøver per temadel (Del 1–10) = **40 temaprøver**, pluss 3 øvingseksamener +
kald bank (Del 11). Oppfyller «≥4 prøver per tema».

### Tidssum

Sum `estimatedMinutes`: 40 + (65+60+55) + (60+70) + (70+70+60) + (60+70) +
(75+75+60) + (70+65) + (70+75+70) + (70+65) + 70 + 70 + (55+90+90+90) =
40+180+130+200+130+210+135+215+135+70+70+325 = **~2 190 min ≈ 37 timer**
(kjernestoff; håndskriving ×1,5 per Del 0-forbehold).

---

## 6. Opphavsrett (ufravikelig)

- Eksamensoppgaver, datasett, R-/MINITAB-output og sensorveiledninger brukes som
  **grunnlag** (mønstre, temavekting, vurderingskriterier), **aldri ordrett**.
  Alle oppgaver, datasett og output i boka er **nyskrevne** i samme sjanger —
  endre tall, kontekst (pasientgrupper/komponenter), kovariater og formuleringer.
- Standard statistiske metodenavn (Kaplan-Meier, Nelson-Aalen, Cox, Aalen-Johansen,
  Doob-Meyer, Goel-Okumoto, Jelinski-Moranda, Barlow-Proschan) og
  standardnotasjon er faglig allemannseie og brukes fritt.
- Pensumlitteratur (ABG = Aalen, Borgan & Gjessing; Rausand & Høyland) refereres
  (forfatter/verk/ligningsnummer), aldri siteres i lengde. Der en oppgave krever
  et ABG-uttrykk, refereres ligningsnummer (som eksamen selv gjør), men uttrykket
  gjengis i bokas egen fremstilling.

## 7. Matematisk sannhetskontroll (DNA-regnefag §7)

Numeriske/fortegns-/entydighetspåstander parametersjekkes (python3) i modellens
FULLE parameterrom FØR de skrives. Særlig utsatte steder merket over med
**«parametersjekk»** / `(verifiser)`:
- Weibull-hasardretning ($\alpha \gtrless 1$ → økende/konstant/avtagende), kap. 4.2.
- Arrhenius-konstanten $11604.83$ og fortegnet på $\beta_1$, kap. 6.2.
- Det lukkede MPL-uttrykket $\hat\beta=\ln(K_1 z_0/K_0 z_1)$ i
  reparerbar-system-spesialtilfellet, kap. 5.1 (`(verifiser)`).
- Greenwood- og NA-varians-formlene (riktig $Y_j$ vs. $Y_j-d_j$ i nevneren),
  kap. 3.1–3.2.
Sensorpremisser sluttet indirekte fra skann-hull (før 2018) merkes `(verifiser)`.
