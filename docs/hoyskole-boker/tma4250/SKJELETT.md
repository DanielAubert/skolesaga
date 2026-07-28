# Bokskjelett: TMA4250 Romlig statistikk (Spatial Statistics, NTNU) — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er destillert fra `EKSAMENSANALYSE.md`
> (~15 tekstlesbare skriftlige sett 2005–2025 + 2 OCR-lesbare håndskrevne
> løsningsforslag 2023–2024). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) —
> kapittel-DNA-ene der (teori/drill/øvingseksamen) er obligatoriske og gjentas
> ikke her. Matematisk sannhetskontroll (DNA-regnefag §«Matematisk
> sannhetskontroll») gjelder: fortegns-/entydighets-/«alltid»-påstander
> parametersjekkes numerisk FØR de skrives; usikkert merkes `(verifiser)`.

## §0 — Statusverifisering og arketype-avklaring

**Status: AKTIVT emne — skjelett bygges (mandatalternativ a).** Verifisert mot
NTNUs emneside for TMA4250 (`ntnu.no/studier/emner/TMA4250`, hentet 2026-07-11):
emnet er **aktivt**, undervises **vår 2027**, **7,5 studiepoeng**, engelsk
undervisningsspråk, Trondheim. Vurdering: **skriftlig avsluttende eksamen (70 %)
+ mappeevaluering (30 %)**, bokstavkarakter, hjelpemiddelkode C. Emneansvarlige:
Geir-Arne Fuglstad og Jo Eidsvik. Ingen nedleggings-/utfasingsmerknad og ingen
studiepoengreduksjon mot en etterfølger. Emnet er derfor IKKE rammet av NTNUs
matematikkreform (den traff grunnemnene TMA4100-serien, ikke dette
videregående statistikkemnet).

**Ikke dekket av bygde skjeletter — bygging er ikke redundant.** Kjernen i
TMA4250 (gaussiske felt/kriging, romlige punktprosesser, Markov random fields
med MCMC og GMRF) finnes IKKE i noe eksisterende skjelett:
- `tma4245` (Statistikk, NTNU): grunnleggende sannsynlighet/inferens — punkt-
  estimering, KI, hypotesetest. TMA4250 *bygger på* dette, men duplikerer det
  ikke (jf. arbeidsdelingen i analysen: multivariat normal, ML-prinsippet og
  betingede gaussiske fordelinger forutsettes kjent og repeteres komprimert i
  Del 1). **Ingen romlig avhengighet, ingen felt, ingen punktprosesser, ingen
  MRF i tma4245.**
- `tma4265` (Stokastiske prosesser, NTNU): kun EKSAMENSANALYSE.md finnes (intet
  skjelett), og temaet er *tidsindekserte* prosesser (Markov-kjeder, Poisson-
  prosess i tid, køteori) — ikke *romlig* statistikk. Overlappet er navnet
  «Poisson-prosess» og «Markov»; det romlige apparatet (romlig Poisson med
  intensitet over areal, kriging, GMRF-presisjonsmatrise) er nytt her.
- stk-serien (`stk1100`, `stk1110`, `stk2100`): sannsynlighet/statistiske
  metoder/maskinlæring på UiO-siden — ingen romlig statistikk.

**Konklusjon:** TMA4250 er aktivt og faglig unikt i porteføljen → skjelett
bygges. Der Del 1 repeterer multivariat-normal-verktøykassen kompakt, lenkes
det til tma4245-kapitler som forkunnskap (se Forkunnskaper-blokkene) framfor å
duplisere.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tma4250` |
| Tittel | **TMA4250 Romlig statistikk (Spatial Statistics) — eksamensrettet (NTNU)** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | NTNU. Visningsnavn i `institusjoner.ts`: «TMA4250 Romlig statistikk». |
| Arketype | **Regnefag — utlednings-/modellvariant** (`DNA-regnefag.md`). Se §2 «Arketypetilpasning»: makrostruktur + drill + øvingseksamener beholdes, men fasiten er oftest **utledet uttrykk / oppsatt system / begrunnet skisse / pseudokode**, ikke et entydig tallsvar. Nærmeste forbilde: `tma4245` (Statistikk) — multivariat-normal- og ML-apparatet gjenbrukes komprimert, men energien legges på det romlige (felt, punktprosesser, MRF). |
| Antall kapitler | **23** (Del 0: 1 · temadeler 1–7: 19 · eksamenstrening Del 8: 3) |
| Estimert totaltid | **~1 240 min ≈ 21 timer** (per kapittel under) |
| Quiz totalt | **524** (krav ≥500) |
| Flashcards totalt | **528** (krav ≥500) |

**Pitch (ett avsnitt):** TMA4250-eksamen har den mest stabile strukturen i hele
NTNUs statistikkportefølje: **tre søyler** som har båret ~90–100 % av poengene
siden minst 2005 — **(1) kontinuerlige/gaussiske felt** (gyldig kovarians­funksjon
→ parametertolkning → kriging/BLUP → betinget gaussisk med målestøy), **(2)
event/punktprosesser** (homogen Poisson → betinging over celler → tynning/ikke-
homogen intensitet → Cox/klynge med overdispersjon), og **(3) mosaikk/Markov
random fields** (Ising Gibbs↔Markov → MCMC-pseudokode → GMRF med presisjons-
matrise). Boka bygges rundt nettopp disse tre pilarene, i denne rekkefølgen.
Emnet er **teori- og utledningstungt, ikke tallregningstungt**: de fleste
deloppgavene er «utled uttrykket for …», «angi kravene til …», «sett opp
minimeringssystemet (uten å løse det)», «skriv pseudokode», «skisser og begrunn».
Boka er derfor bygd baklengs fra det sensor faktisk premierer: **fullstendige
modellkrav** (alle betingelser, ikke halve lister), **utledning fra prinsipp**
(forventningsretthet + minste varians for kriging; betinget normalfordeling;
Metropolis-forholdet), **beregningseffektive aksept-sannsynligheter via Markov-
egenskapen**, og **skisser som begrunnes fra modellen**. Mappelaget (30 % av
samlet karakter — R-baserte analyser) får et eget, tydelig merket lag.

**Kritisk todelt-vurdering-regel (gjelder HELE boka):** samlet karakter =
**skriftlig eksamen 70 % + mappe 30 %**. De to har ulik karakter og skal
merkes tydelig og aldri blandes:
- **Eksamenslaget (70 %):** utledninger, definisjoner/krav, «sett opp systemet»,
  pseudokode, skisser med begrunnelse, konseptuell MCMC. Lite ren tallregning.
  Dette er bokas hovedspor.
- **Mappelaget (30 %):** databaserte romlige analyser i R (`geoR`/`gstat`,
  `spatstat`, `INLA`/GMRF-tradisjonen) med figurtolkning og rapportskriving.
  Kode og figurtolkning bor i egne, `mappe`-merkede blokker/kapitler
  (`collapsible` «Mappelag») — ALDRI innbakt i eksamensutledningene.

**Kritisk notasjonsregel (gjelder HELE boka)** — settenes egen notasjon følges
slavisk (fra analysen §6):

- Stokastisk felt: $\{R(x); x\in D\subset\mathbb{R}^d\}$ eller
  $\{X(s): s\in\mathbb{R}^2\}$; store bokstaver for stokastiske felt, små for
  realisasjoner. Hatt for prediktor/estimator ($\hat{R}, \hat{\mu}, \hat{X}$).
- Kontinuerlig felt: $\sigma^2$ = varians, $a$ (eller $\theta$) = range/skala,
  $\rho(\tau)$ = korrelasjon, $C(h)$ = kovarians, $\gamma(\tau)$ = variogram;
  $\tau$ eller $h$ = avstand/differanse. **Annet argument i $N(\mu,\Sigma)$ er
  kovariansmatrisen**, aldri standardavviket.
- Punktprosess: $\lambda$ = intensitet, $N(B)$ = antall punkt i $B$, $W$ =
  observasjonsvindu, $\Lambda$ = tilfeldig intensitet (Cox).
- MRF: $L$ eller $X$ for feltet, $L_D$ for gitteret, $L_x\in\{0,1\}$/
  $\{-1,1\}$/$\{W,B\}$; $\beta$ = interaksjonsparameter; $\langle u,v\rangle$ =
  par av naboer; $\delta(u)$ = nabolag; $C$ = clique-system.
- GMRF: $Q$ = presisjonsmatrise, $R$ = strukturmatrise, $\tau$ = presisjons-
  parameter, $\mu$ = middelvektor.
- Kriging: $\alpha/\beta$ = vekter, $x_0/s_0/s^*$ = prediksjonslokasjon.
- Norsk bokmål; engelske metodenavn i parentes ved første forekomst (kriging,
  random field, point process, precision matrix). All matematikk i LaTeX
  (`$...$` / `$$...$$`).

**Hjelpemiddel-prinsippet (gjelder HELE boka):** hjelpemiddelkode C betyr
formelsamlingen «Tabeller og formler i statistikk», godkjent enkel kalkulator
og et **gult A5-ark med egne håndskrevne notater**. Formelsamlingen dekker
grunnstatistikken (fordelinger, tabeller) — men **svært lite av det romlig-
spesifikke** (kovariansfamilier, kriging, MRF, MCMC står IKKE der). Hvert
kapittel merker derfor: **«ligger i formelsamlingen — tren oppslaget»** (grunn-
fordelinger, kvantiler) vs. **«må utledes/kunne aktivt»** (kovariansgyldighet,
kriging-systemer, betingede gaussiske uttrykk, aksept-sannsynligheter, Q-
relasjoner). Del 0 har en **A5-ark-mal**: de romlige nøkkelformlene som lønner
seg å ha for hånd.

**Kildeforbehold (ufravikelig — settes i Del 0 og gjentas i øvingseksamenene):**
frekvensene bygger på ~15 tekstlesbare skriftlige sett (2005–2025); **alle 19
`Losning_*`-filene (1997–2019) og `Exam2025_solutions` er rene skann uten OCR**,
og de to leste håndskrevne løsningsforslagene (2023–2024) er delvis degraderte.
**Ingen maskinlesbar sensorveiledning med eksplisitt poengfordeling forelå.**
Sensorkravene (§ sensorkrav) er derfor utledet av oppgaveformuleringene, fasit-
fragmentene i settene og den norske romlig-statistikk-tradisjonen (Omre/Eidsvik/
Steinsland) — merket `(verifiser)` der det er sluttet indirekte. Frekvenstall
for 2005–2011 er nedre anslag (færre tekstlesbare sett).

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regnefag-regelen): multivariat-normal-
og romlig-avhengighets-grunnlag først; deretter de tre søylene i den faste
eksamensrekkefølgen (kontinuerlig → event → mosaikk); estimering og mappelag
binder sammen; eksamenstrening til slutt. **Frekvensen styrer omfanget, ikke
rekkefølgen:** de tre garantioppgavene (kovarians+kriging ~100 %/93 %, Poisson
~100 %, Ising+MCMC ~87 %/80 %) får hver sin del med teori- OG drillkapittel og
høyest kvote; GMRF (60 %, sterkt økende) får eget kapittel; lavfrekvent stoff
(Cox/Neyman–Scott, derivert felt, CSR-test) samles kompakt.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart | 1 | perfekt (meta) | Den todelte vurderingen (70/70 skriftlig + 30 mappe), tredelingen, temafrekvensene, sensorkravene, kildeforbeholdet og A5-ark-malen etableres FØR fagstoffet — studentens prioriteringsverktøy. |
| 1 | Grunnlag: multivariat normal og romlig avhengighet | 2 | grunnlag/kunne | Betinget/marginal normal, lineærkombinasjoner, 2×2-invers (Schur), ML-prinsippet (repeteres KOMPRIMERT fra tma4245) + stasjonaritet/isotropi som romlig kravapparat. Forutsetning for kriging, betinget felt og GMRF. |
| 2 | Kontinuerlige gaussiske felt: kovarians, parametere, variogram | 3 | perfekt (~100 %) | Søyle 1a. Gyldig kovarians-/korrelasjonsfunksjon (positiv definitthet + kombinasjonsregler, ~100 %), parametertolkning + realisasjonsskisse (~80 %), variogram (~47 %, sentralt i mappa). Den sikreste gjengangeren i arkivet. |
| 3 | Kriging/BLUP og betinget gaussisk felt | 3 | perfekt (~93 %) | Søyle 1b–d. Kriging-oppsett (enkel/ordinær/universell + prediksjonsvarians, ~93 %), BLUE i romlig regresjon (~47 %), betinget/posterior gaussisk med målestøy (~67 %, økende) + drillkapittel. Kjernen i oppgave 1. |
| 4 | Event: romlige punktprosesser | 4 | perfekt (~100 %) | Søyle 2. Homogen Poisson (momenter, sannsynligheter, betinging over celler, ~100 %), ikke-homogen + tynning (~53 %), Cox/Neyman–Scott + avstand/CSR (~27 %/20 %) + drillkapittel. Åpner alltid oppgave 2. |
| 5 | Mosaikk: Markov random fields og MCMC | 3 | perfekt (~87 %) | Søyle 3a–b. Ising Gibbs↔Markov + cliquer/nabolag (~87 %), MCMC Gibbs/M–H med effektive aksept-sannsynligheter (~80 %), bayesiansk diskret bildeanalyse (~40 %) + drillkapittel. Åpner alltid oppgave 3. |
| 6 | GMRF med presisjonsmatrise | 2 | kunne (~60 %, sterkt økende) | Søyle 3c. Presisjonsmatrise $Q$, nullstruktur ↔ betinget uavhengighet ↔ graf, betingede uttrykk fra $Q$ (~60 %) + intrinsisk GMRF/Besag (~20 %, nytt). Der emnet har modernisert seg mest — eget kapittel påkrevd. |
| 7 | Estimering og mappelaget | 2 | kunne / mappe (30 %) | ML for GRF-parametre + momentmetode/variogramtilpasning (~40 %); hierarkisk/bayesiansk + Laplace/INLA-idé (~33 %); + samlet **mappelag**: R-arbeidsflyt, rapportmal og revisjonsrunde (bærer 30 % av karakteren). |
| 8 | Eksamenstrening | 3 | perfekt (meta) | Sjangerspill (løsningsoppskrifter A–J) + **2 komplette skriftlige øvingseksamener** (tre søyler, 4 t, kode C) med modellbesvarelse + kald bank. |

Rasjonale: de tre garantioppgavene og GMRF får dybde og drill; Cox/Neyman–Scott,
derivert felt og CSR-test er «bør kjenne til» (differensierer A) og får kompakt
plass i søyle-delene i stedet for egne kapitler. Nesten hele bredden testes hvert
sett — prioriteringen styrer drillmengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart |
| 1 | Grunnlag: multivariat normal og romlig avhengighet |
| 2 | Kontinuerlige gaussiske felt: kovarians, parametere, variogram |
| 3 | Kriging/BLUP og betinget gaussisk felt |
| 4 | Event: romlige punktprosesser |
| 5 | Mosaikk: Markov random fields og MCMC |
| 6 | GMRF med presisjonsmatrise |
| 7 | Estimering og mappelaget |
| 8 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

**A** Gyldig-kovariansfunksjon (angi de tre kravene; vis at en sammensatt
funksjon er gyldig via sum/produkt/ikke-neg. skalering) · **B** Kriging/BLUP
(definer lineær prediktor → forventningsretthet + minste varians → sett opp
Lagrange-/normalligningssystemet + prediksjonsvarians; enkel/ordinær/universell)
· **C** Parametertolkning + realisasjonsskisse (tolk $\sigma^2$ og range, regn
effektiv rekkevidde, skisser 1D-snitt og begrunn glatthet/range fra kovariansen)
· **D** Betinget/posterior gaussisk felt (prior × likelihood med målestøy →
betinget forventning/varians via betinget normal) · **E** Poisson-prosess
(definisjon, $E=\text{Var}=\lambda|W|$, $P(N=k)$, betinging → binomisk/multi-
nomisk over celler) · **F** Tynning/ikke-homogen Poisson (uavhengig tynning gir
$\lambda p(s)$; forventet antall via integral; transect-deteksjon) · **G**
Cox-/klyngeprosess (lov om total forventning/varians → overdispersjon $\text{Var}
>E$; Neyman–Scott) · **H** Ising/MRF-formulering (Gibbs ↔ Markov, nabolag,
cliquer, potensialer, symmetri; Hammersley–Clifford) · **I** MCMC (pseudokode
Gibbs/Metropolis–Hastings; effektiv aksept-sannsynlighet via lokale cliquer;
konvergens vs. mixing) · **J** GMRF/presisjonsmatrise (krav til $Q$; nullstruktur
↔ betinget uavhengighet ↔ graf; $E[X_i|\cdot]=-\frac{1}{Q_{ii}}\sum_{j\neq
i}Q_{ij}x_j$, $\text{Var}[X_i|\cdot]=1/Q_{ii}$; intrinsisk/Besag). *(Peripher:
nærmeste-nabo-avstand; derivert gaussisk felt; CSR-kjikvadrattest — lavt vektet.)*

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** utledet av oppgaveformuleringene, de to OCR-leste
> løsningsforslagene (2023–2024) og den norske romlig-statistikk-tradisjonen —
> ikke av en rekke sensorveiledninger. Indirekte sluttede premisser er merket
> `(verifiser)`.

1. **Presise, FULLSTENDIGE modellkrav.** «Kravene til en gyldig kovariansfunksjon»
   / «for at $X$ er annenordens stasjonær» → ALLE kravene eksplisitt (symmetri,
   positiv definitthet, konstant middel + kovarians kun avhengig av differansen).
   Delvise lister trekker ned.
2. **Utled, ikke bare siter.** Kriging-vektene, betingede gaussiske uttrykk og
   aksept-sannsynlighetene skal *utledes* fra prinsipp (forventningsretthet +
   minste varians; betinget normalfordeling; Metropolis-forholdet).
3. **«Sett opp systemet» betyr sett det opp korrekt og fullstendig** — bibetingelser,
   matriseform, Lagrange-ledd — også når tallsvar ikke kreves.
4. **Utnytt Markov-egenskapen i MCMC.** Full uttelling på aksept-sannsynligheter
   krever at bare LOKALE cliquer inngår (resten kanselleres) — hele poenget med
   beregningseffektiviteten.
5. **Skisser skal begrunnes fra modellen** (glatthet/range fra kovariansen;
   tilfeldig/klynget/regulært mønster fra prosessen) — «ser slik ut» gir lite.
6. **Riktig prosess til riktig fenomen** (homogen vs. ikke-homogen Poisson;
   Poisson vs. Cox/overdispersjon) — valget begrunnes fra data/kontekst.
7. **Betinget uavhengighet ↔ graf ↔ nullstruktur i $Q$** kobles sammen som ett hele.
8. **Definer notasjon og antakelser** (felt, indeksmengde, parametere) før
   utledning; oppgi stasjonaritets-/isotropi-/uavhengighetsantakelser der de brukes.

**Karakterskiller `(verifiser)`:** bestått krever de tre garantioppgavenes
a-punkter (kovariansgyldighet, Poisson-momenter, Gibbs↔Markov). Midtsjiktet
mestrer kriging-oppsettet, betingede gaussiske uttrykk og korrekt Gibbs/M–H-
pseudokode. Toppsjiktet skiller seg på effektive aksept-sannsynligheter, GMRF-
presisjonsmatrise/betinget uavhengighet, intrinsisk/Besag, Cox/Neyman–Scott-
overdispersjon og deriverte gaussiske felt.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** Ufullstendige gyldighetskrav (glemmer positiv definitthet; tror enhver
avtagende funksjon er gyldig kovarians). · **F2** Feil kombinasjonsregel (tror
differanse/sammensetning av gyldige kovarianser alltid er gyldig — kun sum,
produkt, ikke-neg. skalering er garantert). · **F3** Glemmer forventnings­rettheten
i kriging (hopper til variansminimering uten $\sum\alpha_i=1$ / uten Lagrange).
· **F4** Blander enkel/ordinær/universell kriging (kjent- vs. ukjent-middel-
formel). · **F5** Behandler $E$ og Var som ulike for homogen Poisson (glemmer
$E=\text{Var}=\lambda|W|$, og at Cox nettopp bryter dette med overdispersjon). ·
**F6** Feil betinget fordeling over celler (bruker Poisson i stedet for binomisk/
multinomisk gitt totalen). · **F7** Tynning misforstått (tror tynnet prosess ikke
lenger er Poisson — den er det ved uavhengig tynning). · **F8** Forveksler Gibbs-
og Markov-formuleringen (skiller ikke felles tetthet fra fulle betingede; utnytter
ikke at fulle betingede kun avhenger av naboene). · **F9** Aksept-sannsynlighet
regnet GLOBALT (hele feltets energi i stedet for lokale cliquer). · **F10** Ugyldig
presisjonsmatrise (glemmer positiv definitthet; feiltolker $Q_{ij}\neq0$ som
«korrelasjon» i stedet for «betinget avhengighet»). · **F11** Intrinsisk GMRF-
normering ($\tau^{n/2}$ i stedet for $\tau^{(n-1)/2}$ — overser rangdefekt 1). ·
**F12** Skisser uten kobling til parametrene (like realisasjoner for kort/lang
range; overser gaussisk-kovariansens glatthet). · **F13** Blander sannsynlighet
og intensitet/tetthet i punktprosesser. · **F14** Forveksler konvergens (mot
riktig fordeling) og mixing (hvor raskt den blander).

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Regnefag i utlednings-/modellvariant — ikke tallregnende.** DNA-regnefag
   forutsetter regneoppgaver med entydige tallsvar; TMA4250 er dominert av «utled
   uttrykket», «sett opp systemet (uten å løse det)», «skriv pseudokode» og
   «skisser + begrunn». Fra DNA-regnefag beholdes makrostrukturen (Del 0 →
   temadeler etter avhengighet → eksamenstrening), øvingseksamenene, drillkapittel
   for hver bærebjelke, og frekvensstyrt vekting. Tilpasningen: **fasiten er et
   utledet uttrykk / oppsatt system / begrunnet skisse / pseudokode** framfor et
   tallutledet sluttsvar. Kapittel-DNA-A (teori) og -B (drill) fra DNA-regnefag
   brukes; `example`-blokkene viser fullstendige utledninger med «Intuisjon:»-
   linjer etter hvert steg (sensorkrav 2).
2. **Todelt vurdering → eget mappelag.** Fordi 30 % er R-basert (kode + figur +
   rapport), får hvert relevant kapittel en `collapsible` **«Mappelag»** (R-
   arbeidsflyt: `geoR`/`gstat`/`spatstat`/`INLA`, figurtolkning) TYDELIG skilt fra
   eksamensutledningene, og Del 7 samler mappe-metoden med rapportmal +
   revisjonsrunde. Kode drilles ALDRI på det skriftlige laget (analysen §1:
   «MCMC testes konseptuelt, ikke i kode på skriftlig del»).
3. **«Symbol- og formelliste» beholdes uendret** (README-kravet): hvert
   delkapittel med symboler får en `collapsible` **«Symbol- og formelliste»**
   sist, med åpningsnotisen «Oppslagsverk — alt her forklares underveis i
   kapitlet.» Romlig statistikk er symboltungt → denne er kritisk mot symbolvegg.
4. **Drillkapitler for de tre søylene + GMRF.** Kriging (3.3), punktprosess (4.4)
   og MRF/MCMC (5.3) får hvert sitt drillkapittel; GMRF-drill legges inn i 6.1/6.2
   (færre gjengangervarianter). Dette speiler de mest resirkulerte, mekaniserbare
   sjangrene.
5. **Anvendte innramminger (fagmiljøets profil).** Eksempler rammes i geofag/
   reservoar (olje-/vannmetning), miljø (fuktighet/forurensning), biologi
   (hvaltelling, rottehjerneceller/grid cells), fjernmåling — slik settene gjør —
   men **oppgavene er nyskrevne** (endre tall/kontekst/parametere).
6. **Matematisk sannhetskontroll (DNA-regnefag).** Alle fortegns-/entydighets-/
   «alltid»-påstander (f.eks. «Cox gir alltid $\text{Var}>E$», «effektiv
   rekkevidde $=a\sqrt{-\ln 0{,}05}$ for gaussisk kovarians», grensetilfellene
   $\lambda\to 0/1$ i Besag-$Q$) parametersjekkes numerisk (python3) i modellens
   fulle parameterrom FØR de skrives; betingelser skrives ut; usikkert merkes
   `(verifiser)`.

### Kapittel-DNA
Teorikapitler følger **Kapittel-DNA A** (teorikapittel) og drillkapitler
**Kapittel-DNA (drillkapittel)** i `DNA-regnefag.md` — obligatoriske blokk-
rekkefølger gjentas ikke her. Øvingseksamenene (Del 8) følger **Kapittel-DNA
(øvingseksamen)**. `collapsible` «Mappelag» og «Symbol- og formelliste» legges
inn som beskrevet i §2 «Arketypetilpasning».

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt + sjangerkoder (A–J) +
> prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per 2005–2025-
> arkivet». **Innholdskontrakt** = definisjoner/teoremer/utledninger som SKAL
> med (med notasjon); skill mellom «utledes aktivt» og «kun bruk». **Kvote** =
> quiz/flashcards. Kryssbok-lenker peker på eksisterende tma4245-kapitler
> `(verifiser lenke)` der usikker.

### Del 0 — Eksamenskart *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes TMA4250
**id:** `tma4250-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Den todelte vurderingen (skriftlig 70 % + mappe 30 %), den
  faste tredelingen (kontinuerlig → event → mosaikk), temafrekvensene, sensor-
  kravene, kildeforbeholdet, sjangerkatalogen A–J og A5-ark-malen — verktøyet
  som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2005–2025). Skal formidle: (a)
  **formen** — 4 t skriftlig skoleeksamen, kode C, bokstavkarakter; 3–5 oppgaver
  bygd på de tre søylene; ALT utledes/forklares/skisseres (nesten ingen ren
  tallregning); (b) **den todelte vurderingen** — skriftlig 70 % + mappe 30 %,
  hva hver måler, at mappen er tre rapporter + én revidert (kun revidert teller);
  (c) **de tre søylene med frekvens** — kovarians+kriging (~100 %/93 %), homogen
  Poisson (~100 %), Ising+MCMC (~87 %/80 %), GMRF (~60 %, økende); (d) **sensor-
  kravene** (§2, de 8 punktene); (e) **kildeforbeholdet** — skann-hull, ingen
  maskinlesbar sensorveiledning, frekvenser er nedre anslag for eldre sett; (f)
  **hjelpemiddel-/A5-ark-regelen** — formelsamlingen dekker IKKE det romlige.
  Prioritet: perfekt (meta).
- **Innholdskontrakt:** Del 0-pakken fra README «Leserkrav»: «Slik leser du denne
  boka»-boks (`tip`, forklarer bokstavkarakter/vurderingsvekt, sjangerkodene
  A–J i klarspråk, at typiske feil har et samlet register #F1–F14, og rammer inn
  tunge symboler «du trenger ikke forstå $Q$/$\gamma(\tau)$ ennå»); **«Lite tid?»-
  boks** (hurtigrute 3–5 dager + gjøre- vs. lese-tider ×1,5); **kildenote** for
  frekvens-/sensor-empirien (semestre/årstall + forbehold); **sjangerkort på én
  side** (sjanger → én-linjes oppskrift → tidsbudsjett → vanligste feil);
  **deltidsrute** (10–12 uker ~8 t/uke); **«lese mye, skrive lite»-boks**;
  **A5-ark-mal** (`collapsible`, romlige nøkkelformler: kovariansfamilier,
  kriging-system, betinget normal, Poisson-momenter, Metropolis-forhold, $Q$-
  relasjoner) = regnefagets «samlede oppslagskort». **Karakter-realisme:** C er
  en god og vanlig karakter; «Gapet til A» rammes som oppgraderingsmeny.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt
  et sett med tre søyler og 4 t — sett opp tidsbudsjett og rekkefølge» og «avgjør
  av en oppgavetekst om den vil ha et *utledet uttrykk*, et *oppsatt system*, en
  *begrunnet skisse* eller *pseudokode*».
- **Typiske feil:** Metafeilene: regne/tallfeste der oppgaven vil ha en utledning
  (sensorkrav 2/3); droppe begrunnelsen i skisser (sensorkrav 5); blande mappe-
  kode inn i skriftlig-svar; vente at formelsamlingen dekker det romlige (den gjør
  ikke).
- **Kvote:** 14 quiz / 14 flashcards (formfakta, todelt vurdering, de tre søylene,
  temafrekvens, sensorkravene, sjangerkodene, kildeforbeholdet).

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 8).

### Del 1 — Grunnlag: multivariat normal og romlig avhengighet *(prioritet: GRUNNLAG / KUNNE)*

#### Kapittel 1.1: Multivariat normal-verktøykassen (komprimert repetisjon)
**id:** `tma4250-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4250-0-1`

- **Kapitteltype:** teorikapittel (grunnlag; komprimert repetisjon fra tma4245).
- **Description:** Multivariat normalfordeling som hele bokas motor: marginal og
  **betinget** normal, lineærkombinasjoner, blokk-/2×2-invers (Schur-komplement),
  og ML-prinsippet — repetert KOMPRIMERT (forutsettes kjent), fordi kriging,
  betinget felt og GMRF alle leser av betinget forventning/varians herfra.
- **Eksamensbelegg:** Ikke egen oppgave, men forutsetning for søyle 1 (kriging =
  betinget normal; posterior felt) og søyle 3 (GMRF-uttrykk). Inngår i B, D, J.
  Prioritet: grunnlag. **«Ligger i formelsamlingen»:** normalfordelingens tetthet;
  **«må kunne aktivt»:** betinget-normal-formlene (Schur), lineærkombinasjoner.
- **Forkunnskaper/kryssbok:** kap. 0.1; [Multivariat normalfordeling](/tma4245/tma4245-3-4)
  `(verifiser lenke)`, [Maksimum likelihood-estimering](/tma4245/tma4245-5-2)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $\mu,\Sigma$;
  betinget $E[X_1|X_2=x_2]=\mu_1+\Sigma_{12}\Sigma_{22}^{-1}(x_2-\mu_2)$;
  $\text{Var}[X_1|X_2]=\Sigma_{11}-\Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21}$; 2×2-
  invers.
- **Innholdskontrakt (utledes aktivt):** betinget-normal-formlene via Schur-
  komplement (utled for blokkform); at en lineærkombinasjon $AX+b$ av gaussisk er
  gaussisk med $A\mu+b$, $A\Sigma A^\top$; 2×2-inversformelen brukt eksplisitt.
  **Kun bruk:** ML-prinsippet (definer likelihood, log, deriver) — refereres, ikke
  reutledes fullt. `definition`-blokker (flashcard-kilde): betinget/marginal
  normal, presisjon vs. kovarians ($Q=\Sigma^{-1}$ som bro til Del 6).
- **Typiske feil:** blande andre-argumentet i $N(\mu,\Sigma)$ (kovarians, ikke
  standardavvik); regne Schur-komplement feil; tro betinget varians avhenger av
  $x_2$ (det gjør den ikke for gaussisk).
- **Modellsvar:** «For $(X_1,X_2)$ bivariat normal med gitt $\Sigma$: utled
  $E[X_1|X_2=x_2]$ og $\text{Var}[X_1|X_2=x_2]$, og forklar hvorfor betinget
  varians er konstant i $x_2$» (kobler direkte til enkel kriging i 3.1).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.2: Stasjonaritet, isotropi og romlig avhengighet
**id:** `tma4250-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4250-1-1`

- **Kapitteltype:** teorikapittel (kunne — fast innbakt kravspørsmål).
- **Description:** Kravapparatet som gjør et romlig felt håndterbart: (strengt/
  annenordens) stasjonaritet, isotropi, og hvordan kovariansen kun avhenger av
  differansen $h$ (ev. $\|h\|$). Broen mellom «et felt over rommet» og «en
  kovariansfunksjon».
- **Eksamensbelegg:** Sjanger A/H-tilbehør; stasjonaritet/isotropi som teori-/
  kravspørsmål ~73 % (ofte innbakt i 1a). Prioritet: kunne. **«Må kunne aktivt»:**
  angi ALLE krav til annenordens stasjonaritet.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Symbol- og formelliste:**
  felt $\{X(s):s\in\mathbb{R}^2\}$; middel $m(s)$; kovarians $C(s,s')$; annenordens
  stasjonær ⇔ $m(s)=\mu$ konstant og $C(s,s')=C(s-s')$; isotropi ⇔ $C(h)=C(\|h\|)$.
- **Innholdskontrakt:** definer strengt vs. annenordens stasjonaritet vs. isotropi,
  med ALLE betingelser eksplisitt (sensorkrav 1); vis at annenordens stasjonaritet
  + gaussisk ⇒ strengt stasjonær. `definition`-blokker (flashcard-kilde): de tre
  begrepene med ord-først, formel-etter. **Hverdagsanker før apparatet:** en jevn
  vs. flekkete geologisk egenskap over et felt, FØR formalismen.
- **Typiske feil:** gi delvis kravliste (F1-slekt); forveksle stasjonaritet og
  isotropi; tro at isotropi følger av stasjonaritet (den gjør ikke).
- **Modellsvar:** «Angi de fullstendige kravene for at $\{X(s)\}$ er annenordens
  stasjonær og isotrop, og avgjør for to oppgitte kovariansuttrykk hvilke som er
  isotrope.»
- **Kvote:** 20 quiz / 22 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A betinget/marginal normal + Schur · 1.B
lineærkombinasjoner + 2×2-invers · 1.C stasjonaritet/isotropi-krav · 1.D samlet
grunnlagsprøve på eksamensnivå). «Kan trygt deles — én prøve per økt.»

### Del 2 — Kontinuerlige gaussiske felt: kovarians, parametere, variogram *(prioritet: PERFEKT — ~100 %)*

#### Kapittel 2.1: Gyldig kovarians- og korrelasjonsfunksjon
**id:** `tma4250-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-1-2`

- **Kapitteltype:** teorikapittel (perfekt — den sikreste gjengangeren).
- **Description:** De tre kravene til en stasjonær kovarians-/korrelasjonsfunksjon
  (symmetri; $C(0)=\sigma^2\geq0$ med $|C(h)|\leq C(0)$; **positiv definitthet**)
  og kombinasjonsreglene som bevarer gyldighet (sum, produkt, ikke-negativ
  skalering, grenser). Å vise at en sammensatt funksjon er gyldig ved dekomponering
  i kjente gyldige byggesteiner.
- **Eksamensbelegg:** Sjanger A (~100 %, alltid oppgave 1a). Billige, presise
  poeng — men positiv definitthet må være med (F1). Prioritet: perfekt. **«Må
  kunne aktivt»:** de tre kravene + kombinasjonsreglene (står IKKE i formel-
  samlingen).
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol- og formelliste:**
  $C(h)$, $\rho(h)=C(h)/C(0)$, positiv definitthet $\sum_i\sum_j a_ia_j
  C(h_i-h_j)\geq0$; eksponensiell $\sigma^2 e^{-\|h\|/a}$, gaussisk
  $\sigma^2 e^{-(\|h\|/a)^2}$, sfærisk, Matérn (kjenne til).
- **Innholdskontrakt (utledes/angis aktivt):** de tre kravene med full begrunnelse
  (positiv definitthet er det avgjørende); kombinasjonsreglene med hvorfor de
  holder (sum/produkt av positiv definite er positiv definit; ikke-neg. skalering);
  **at differanse IKKE er garantert gyldig** (F2). `example` på eksamensnivå: vis
  at $C(h)=2e^{-2\|h\|^2-\|h\|}+3e^{-\|h\|^2}$ er gyldig ved dekomponering.
  `definition`-blokker (flashcard-kilde): hvert krav, hver kombinasjonsregel,
  hver kovariansfamilie. **Sannhetskontroll:** parametersjekk at oppgitte
  sammensetninger faktisk er positiv definite før de påstås gyldige.
- **Typiske feil:** F1 (glemmer positiv definitthet), F2 (feil kombinasjonsregel —
  differanse/vilkårlig sammensetning).
- **Modellsvar:** «To gyldige stasjonære kovariansfunksjoner $C_1,C_2$ er gitt.
  Angi to måter å kombinere dem til nye gyldige funksjoner, og vis at en oppgitt
  sammensatt funksjon er en gyldig stasjonær kovariansfunksjon.»
- **Kvote:** 28 quiz / 30 flashcards.

#### Kapittel 2.2: Parametertolkning og realisasjonsskisser
**id:** `tma4250-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4250-2-1`

- **Kapitteltype:** teorikapittel (perfekt — ~80 %).
- **Description:** Tolke $\sigma^2$ (marginal variabilitet) og range/korrelasjons-
  lengde $a$, regne **effektiv rekkevidde** ($\rho(\tau)=0{,}05$ eller $0{,}1$),
  og skissere 1D-snitt av realisasjoner med trekkene (glatthet, svingningslengde)
  eksplisitt knyttet til kovariansfunksjonen.
- **Eksamensbelegg:** Sjanger C (~80 %). Kort range → «rufsete» felt, lang range
  → glatte; gaussisk kovarians → svært glatte (deriverbare), eksponensiell →
  kontinuerlige men ikke-deriverbare. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Symbol- og formelliste:**
  $\sigma^2$, range $a$, effektiv rekkevidde $r$ løst fra $\rho(r)=0{,}05$;
  glatthet ↔ kovariansfamilie.
- **Innholdskontrakt (utledes aktivt):** regn effektiv rekkevidde for eksponensiell
  ($r=-a\ln 0{,}05\approx 3a$) og gaussisk ($r=a\sqrt{-\ln 0{,}05}$) — **parametersjekk
  numerisk** før tallene påstås; koble glatthet til deriverbarhet av kovariansen i
  origo. **Figurkrav (DNA-regnefag «Figurkrav»):** minst to SVG-skisser (1D-snitt
  kort vs. lang range; gaussisk glatt vs. eksponensiell rufsete) i
  `public/images/textbook/tma4250/`, wiret som image-blokker, kjør
  `upload-media-storage.ts` etter. `collapsible` **Mappelag:** simulere GRF i R og
  kjenne igjen range/glatthet visuelt.
- **Typiske feil:** F12 (like skisser for kort/lang range; overser gaussisk-
  glattheten); forveksle range og effektiv rekkevidde.
- **Modellsvar:** «Med $C(h)=\sigma^2 e^{-(\|h\|/a)^2}$: uttrykk effektiv rekkevidde
  (korrelasjon $0{,}1$) som funksjon av $a$, tolk $a$ og $\sigma^2$, og skisser to
  1D-realisasjoner. Knytt trekkene til kovariansfunksjonen.»
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 2.3: Variogram og kovariansfamilier
**id:** `tma4250-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `tma4250-2-2`

- **Kapitteltype:** teorikapittel (kunne — ~47 %, sentralt i mappa).
- **Description:** Variogrammet $\gamma(\tau)=\tfrac12\text{Var}\{R(x')-R(x'')\}$,
  koblingen $\gamma=\sigma^2-C$ (under stasjonaritet), og de sentrale familiene
  (eksponensiell, gaussisk, sfærisk, Matérn) med nugget, sill og range.
- **Eksamensbelegg:** Sjanger C-tilbehør (~47 %) + tung mappe-relevans (empirisk
  variogram, tilpasning). Prioritet: kunne. **«Må kunne aktivt»:** definisjonen +
  $\gamma=\sigma^2-C$; **kjenne til:** familiene som formuttrykk.
- **Forkunnskaper/kryssbok:** kap. 2.1, 2.2. `collapsible` **Symbol- og
  formelliste:** $\gamma(\tau)$, nugget $\tau_0^2$, sill $\sigma^2$, range $a$;
  $\gamma(\tau)=\sigma^2-C(\tau)$.
- **Innholdskontrakt (utledes aktivt):** utled $\gamma=\sigma^2-C$ fra definisjonen
  under annenordens stasjonaritet; nugget/sill/range avlest fra familiene.
  `collapsible` **Mappelag:** empirisk variogram (momentestimator), minste-
  kvadrat-/momenttilpasning i `geoR`/`gstat`, figurtolkning.
- **Typiske feil:** glemme faktoren $\tfrac12$; forveksle sill og nugget; tro
  $\gamma$ og $C$ er like (de er speilet).
- **Modellsvar:** «Utled sammenhengen $\gamma(\tau)=\sigma^2-C(\tau)$ under
  annenordens stasjonaritet, og skisser variogrammet for eksponensiell kovarians
  med nugget.»
- **Kvote:** 22 quiz / 24 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A gyldig kovarians (krav + kombinasjon) · 2.B
parametertolkning + effektiv rekkevidde + skisse · 2.C variogram + familier · 2.D
samlet søyle-1a-prøve på eksamensnivå). «Kan trygt deles — én prøve per økt.»

### Del 3 — Kriging/BLUP og betinget gaussisk felt *(prioritet: PERFEKT — ~93 %)*

#### Kapittel 3.1: Enkel kriging via betinget normalfordeling
**id:** `tma4250-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-2-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Enkel kriging (kjent middel): prediksjon som betinget forventning
  i en gaussisk modell, med prediksjonsvarians = betinget varians. Broen mellom
  Del 1 (betinget normal) og krigingssystemet.
- **Eksamensbelegg:** Sjanger B (del av ~93 %). Enkel kriging → betinget gaussisk
  forventning direkte. Prioritet: perfekt. **«Må kunne aktivt»:** utlede
  prediktoren og variansen fra betinget normal.
- **Forkunnskaper/kryssbok:** kap. 1.1 (VIS de 2–3 betinget-normal-formlene ferdig
  oppfrisket — «Sist du var her», stor tidsavstand), 2.1. `collapsible` **Symbol-
  og formelliste:** $\hat{R}(x_0)$, vektvektor, $\Sigma\alpha=\sigma_0$,
  prediksjonsvarians.
- **Innholdskontrakt (utledes aktivt):** utled enkel-kriging-prediktoren som
  betinget forventning $\mu+\Sigma_{0,\text{obs}}\Sigma_{\text{obs}}^{-1}(r-\mu)$
  og variansen $\sigma^2-\Sigma_{0,\text{obs}}\Sigma_{\text{obs}}^{-1}\Sigma_{\text{obs},0}$;
  matriseform $\Sigma\alpha=\sigma_0$. `definition`-blokker (flashcard-kilde):
  BLUP-begrepet, enkel kriging.
- **Typiske feil:** bruke ukjent-middel-formel når middelet er kjent (F4); regne
  betinget varians med feil ledd.
- **Modellsvar:** «Feltet med kjent middel $\mu$ og kovarians $\Sigma$ observeres i
  $n$ punkt. Utled enkel-kriging-prediktoren for $R(x_0)$ og prediksjonsvariansen,
  og skriv systemet på matriseform.»
- **Kvote:** 28 quiz / 28 flashcards.

#### Kapittel 3.2: Ordinær og universell kriging (forventningsretthet + Lagrange)
**id:** `tma4250-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-3-1`

- **Kapitteltype:** teorikapittel (perfekt — kjernen i oppgave 1).
- **Description:** Ordinær kriging (ukjent konstant middel → bibetingelse
  $\sum\alpha_i=1$ + Lagrange) og universell kriging ($m(s)=\sum\beta_j f_j(s)$ →
  forventningsrettehets-bibetingelser). Å SETTE OPP minimeringssystemet korrekt og
  fullstendig — ofte uten å løse det.
- **Eksamensbelegg:** Sjanger B (~93 %) + BLUE for regresjonsparametre (~47 %).
  Prioritet: perfekt. **«Sett opp systemet» (sensorkrav 3):** bibetingelser,
  matriseform, Lagrange-ledd vurderes — ikke tallsvar.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  bibetingelse $\sum\alpha_i=1$; Lagrange-multiplikator; utvidet system;
  $f_j(s)$-basisfunksjoner.
- **Innholdskontrakt (utledes aktivt):** utled bibetingelsen fra forventnings-
  retthet ved ukjent middel; sett opp Lagrange-systemet for ordinær kriging på
  matriseform; generaliser til universell (flere bibetingelser); prediksjonsvarians
  med Lagrange-ledd; nevn BLUE for $\beta$. **Sannhetskontroll:** at systemet er
  konsistent (antall likninger = ukjente).
- **Typiske feil:** F3 (hopper til variansminimering uten $\sum\alpha_i=1$/uten
  Lagrange), F4 (blander enkel/ordinær/universell).
- **Modellsvar:** «Feltet har ukjent konstant middel. Utled minimeringssystemet
  som bestemmer BLUP-vektene for $R(x_0)$ under kvadratisk tap, med forventnings-
  rettehets-bibetingelsen, og angi prediksjonsvariansen. Systemet skal kun settes
  opp.»
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 3.3: Kriging-drill + betinget/posterior gaussisk felt med målestøy
**id:** `tma4250-3-3` · **number:** 3.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-3-2`

- **Kapitteltype:** drillkapittel (perfekt) + betinget-felt-tema.
- **Description:** Drill på kriging-oppsett (enkel/ordinær/universell) OG betinget/
  posterior gaussisk felt med målestøy: prior $N(\mu,\Sigma)$ × likelihood
  $d=Hr+U$, $U\sim N(0,\sigma_n^2 I)$ → betinget (posterior) forventning/varians.
- **Eksamensbelegg:** Sjanger B (drill) + D (~67 %, økende, fast i 2023–25).
  Prioritet: perfekt/kunne. Målestøy trekker prediksjon mot prior-middel og øker
  variansen (vs. eksakte observasjoner).
- **Forkunnskaper/kryssbok:** kap. 3.1, 3.2 (VIS krigingssystemet ferdig oppfrisket).
  `collapsible` **Symbol- og formelliste:** $H$ (målematrise), $\sigma_n^2$
  (målestøyvarians), posterior $E[r|d]$, $\text{Var}[r|d]$.
- **Innholdskontrakt:** **Løsningsoppskrift** (algoritme for kriging-sjangeren:
  1) identifiser kjent/ukjent middel → enkel/ordinær/universell, 2) skriv
  prediktor, 3) sett bibetingelse(r), 4) minimer → system, 5) prediksjonsvarians).
  Utled posterior-felt-uttrykkene fra felles gaussisk $(r,d)$ via betinget normal;
  kommenter målestøyens effekt. `example` med sensor-margnotater. 8–15 drill-
  varianter + minst 2 posterior-oppgaver. `collapsible` **Mappelag:** kriging på
  reelle data med kart + usikkerhetsvisualisering.
- **Typiske feil:** F3, F4; regne posterior som eksakt observasjon (glemme $\sigma_n^2$-
  leddet); tro betinget varians avhenger av $d$.
- **Modellsvar:** «Feltet observeres i to punkter med gaussisk målestøy (varians 1).
  Utled betinget forventning for $r$ i et nytt punkt og tilhørende prediksjons-
  varians, og forklar hvordan målestøyen påvirker begge.»
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A enkel kriging via betinget normal · 3.B
ordinær/universell system-oppsett + Lagrange · 3.C posterior gaussisk med målestøy
· 3.D samlet oppgave-1-prøve på eksamensnivå). «Kan trygt deles — én prøve per økt.»

### Del 4 — Event: romlige punktprosesser *(prioritet: PERFEKT — ~100 %)*

#### Kapittel 4.1: Homogen Poisson-prosess
**id:** `tma4250-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4250-1-1`

- **Kapitteltype:** teorikapittel (perfekt — alltid oppgave 2a).
- **Description:** Homogen Poisson på $\mathbb{R}^2$: $N(B)\sim\text{Poisson}(\lambda
  |B|)$, uavhengige tellinger i disjunkte områder, $E[N(W)]=\text{Var}[N(W)]=\lambda
  |W|$, $P(N=k)$, $P(N\geq1)$, med forutsetningene begrunnet.
- **Eksamensbelegg:** Sjanger E (~100 %). Prioritet: perfekt. **«Ligger i
  formelsamlingen»:** Poisson-fordelingens $P(N=k)$; **«må kunne aktivt»:** at
  $E=\text{Var}=\lambda|W|$ og forutsetningene.
- **Forkunnskaper/kryssbok:** kap. 1.1; [Poisson-fordelingen](/tma4245/tma4245-2-5)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $\lambda$
  (intensitet), $N(B)$, $|B|$ (areal), $E=\text{Var}=\lambda|W|$.
- **Innholdskontrakt (angis/regnes aktivt):** definisjonen (tre aksiomer);
  $E[N(W)]=\text{Var}[N(W)]=\lambda|W|$; $P(N=k)=e^{-\lambda|W|}(\lambda|W|)^k/k!$;
  $P(N\geq1)=1-e^{-\lambda|W|}$; uavhengighet i disjunkte områder. `definition`-
  blokker (flashcard-kilde): prosessens tre egenskaper. **Hverdagsanker:** trær i
  en skog / feilpunkter på en overflate FØR formalismen.
- **Typiske feil:** F5 ($E\neq\text{Var}$-feil), F13 (blander sannsynlighet og
  intensitet).
- **Modellsvar:** «$N$ er homogen Poisson på $\mathbb{R}^2$ med $\lambda=2$, $W$ en
  sirkelskive med radius 1. Angi $E[N(W)]$ og $\text{Var}[N(W)]$, og sannsynligheten
  for nøyaktig 4 punkt i $W$.»
- **Kvote:** 28 quiz / 28 flashcards.

#### Kapittel 4.2: Betinging over celler og ikke-homogen Poisson
**id:** `tma4250-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tma4250-4-1`

- **Kapitteltype:** teorikapittel (perfekt/kunne).
- **Description:** Betinging gitt totalen (punktene uniformt → binomisk/multinomisk
  over celler, ~73 %) og ikke-homogen Poisson (intensitet $\lambda(s)$, forventet
  antall $=\int\lambda(s)\,ds$).
- **Eksamensbelegg:** Sjanger E (betinging ~73 %) + F-forberedelse (ikke-homogen
  ~53 %). Prioritet: perfekt (betinging) / kunne (ikke-homogen).
- **Forkunnskaper/kryssbok:** kap. 4.1; [Binomisk/multinomisk](/tma4245/tma4245-2-4)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** $\lambda(s)$;
  $\int_W\lambda(s)\,ds$; betinget binomisk $(n,|B|/|W|)$.
- **Innholdskontrakt (utledes aktivt):** vis at gitt $N(W)=n$ er $N(B)\sim
  \text{Bin}(n,|B|/|W|)$ og fordelingen over celler er multinomisk; forventet antall
  for ikke-homogen via integral. `example` med reservoar-/miljøkontekst.
- **Typiske feil:** F6 (Poisson i stedet for binomisk gitt totalen), F13.
- **Modellsvar:** «Gitt $N(W)=n$ punkt, finn fordelingen av antall i en delcelle $B$
  og for en oppdeling i tre celler, og forventet antall for en ikke-homogen prosess
  med gitt $\lambda(s)$.»
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 4.3: Tynning, Cox- og klyngeprosesser
**id:** `tma4250-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tma4250-4-2`

- **Kapitteltype:** teorikapittel (kunne/kjenne).
- **Description:** Uavhengig tynning ($\lambda\to\lambda p(s)$, transect/deteksjon,
  ~53 %), Cox-prosess (dobbeltstokastisk Poisson → overdispersjon $\text{Var}>E$,
  ~27 %) og Neyman–Scott/Matérn klyngeprosess (~20 %).
- **Eksamensbelegg:** Sjanger F (~53 %) + G (~27 %/20 %, i rotasjon, differensierer
  A). Prioritet: kunne/kjenne. **Riktig prosess til riktig mønster** (sensorkrav 6).
- **Forkunnskaper/kryssbok:** kap. 4.1, 4.2. `collapsible` **Symbol- og
  formelliste:** deteksjon $p(s)$; tilfeldig intensitet $\Lambda$; $E[N]=E[\Lambda]
  |A|$, $\text{Var}[N]=E[\Lambda]|A|+\text{Var}[\Lambda]|A|^2$.
- **Innholdskontrakt (utledes aktivt):** begrunn at uavhengig tynning bevarer
  Poisson med $\lambda p(s)$; utled Cox-momentene via lov om total forventning/
  varians og vis overdispersjon; Neyman–Scott-forventning + intuitiv Var-
  argumentasjon. **Sannhetskontroll:** parametersjekk at Cox gir $\text{Var}\geq E$
  (likhet kun degenerert $\Lambda$) FØR påstanden skrives.
- **Typiske feil:** F7 (tynnet prosess ikke Poisson — den er det), F5 (glemme at
  Cox bryter $E=\text{Var}$).
- **Modellsvar:** «Hvaler observeres langs en linje med deteksjon $e^{-d/3}$. Forklar
  hvorfor de detekterte er Poisson med intensitet $\lambda(s)$, og beregn forventet
  antall i vinduet.» + «Mødre er homogen Poisson; hver får Poisson-mange døtre
  spredt gaussisk. Avgjør med intuitivt argument om $\text{Var}[M(W)]>E[M(W)]$.»
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 4.4: Punktprosess-drill (+ avstand og CSR-test)
**id:** `tma4250-4-4` · **number:** 4.4 · **estimatedMinutes:** 50 · **prerequisites:** `tma4250-4-3`

- **Kapitteltype:** drillkapittel (perfekt).
- **Description:** Drill på hele oppgave 2 (telle → betinge → tynne/Cox), pluss to
  differensierende topptemaer: nærmeste-nabo-avstandsfordeling ($P(\text{ingen punkt
  innen }r)=e^{-\lambda\pi r^2}$, ~27 %) og CSR-kjikvadrattest på celletellinger
  (~20 %, økende).
- **Eksamensbelegg:** Sjanger E/F/G (drill) + avstand/CSR (kjenne, topper A).
  Prioritet: perfekt (drill).
- **Forkunnskaper/kryssbok:** kap. 4.1–4.3; [Kjikvadrat-test](/tma4245/tma4245-7-4)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** avstands-CDF/PDF;
  CSR-teststatistikk $\approx\chi^2_{C-2}$ (estimert $\lambda$).
- **Innholdskontrakt:** **Løsningsoppskrift** for oppgave 2 (identifiser prosess →
  velg operasjon telle/betinge/tynne → sett opp uttrykk). Utled avstands-PDF fra
  «tomt-vindu»-sannsynligheten; skisser CSR-testen. 8–15 drillvarianter. `collapsible`
  **Mappelag:** simulere punktprosesser i `spatstat`, K-funksjon/klynge–regulær-
  diagnostikk, figurtolkning.
- **Typiske feil:** F5, F6, F7, F13; tro CSR-testen har $C-1$ frihetsgrader (den har
  $C-2$ med estimert $\lambda$) `(verifiser)`.
- **Modellsvar:** «Utled fordelingen av avstanden til nærmeste punkt i en homogen
  Poisson-prosess, og skisser en kjikvadrattest for CSR basert på celletellinger.»
- **Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A homogen Poisson momenter/sannsynligheter · 4.B
betinging over celler + ikke-homogen · 4.C tynning + Cox/overdispersjon · 4.D samlet
oppgave-2-prøve på eksamensnivå, inkl. avstand/CSR). «Kan trygt deles — én prøve per
økt.»

### Del 5 — Mosaikk: Markov random fields og MCMC *(prioritet: PERFEKT — ~87 %)*

#### Kapittel 5.1: Ising/Markov random field — Gibbs ↔ Markov
**id:** `tma4250-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-1-2`

- **Kapitteltype:** teorikapittel (perfekt — alltid oppgave 3a).
- **Description:** Ising/autologistisk modell: Gibbs-formulering
  $P(l)\propto\exp(\beta\sum_{\langle u,v\rangle}I(l_u=l_v))$ ↔ **Markov-formulering**
  (full betinget for én node avhenger kun av naboene), nabolagssystem (første/annen
  ordens), maksimale cliquer, potensialer, symmetri, og Hammersley–Clifford-
  ekvivalensen.
- **Eksamensbelegg:** Sjanger H (~87 %) + Hammersley–Clifford (~47 %) + nabolag/
  cliquer (~60 %). Prioritet: perfekt. **«Må kunne aktivt»:** utlede Markov fra
  Gibbs (står ikke i formelsamlingen).
- **Forkunnskaper/kryssbok:** kap. 1.2. `collapsible` **Symbol- og formelliste:**
  $l_x$, $\beta$, $\langle u,v\rangle$, $\delta(u)$ (nabolag), clique $C$, potensial
  $V_c$; Gibbs $P(l)\propto\exp(-\sum_c V_c(l))$.
- **Innholdskontrakt (utledes aktivt):** utled full betinget for én node fra Gibbs-
  tettheten (vis at bare lokale cliquer overlever → Markov); definer første/annen
  ordens nabolag og maksimale cliquer; drøft symmetriantakelser (isotropi ↔
  retningsuavhengige potensialer); refer Hammersley–Clifford. `definition`-blokker
  (flashcard-kilde): Gibbs, Markov, clique, nabolag, potensial. **Hverdagsanker:**
  et svart/hvitt-bilde der nabopiksler «drar mot samme farge».
- **Typiske feil:** F8 (forveksler Gibbs/Markov; utnytter ikke lokalitet).
- **Modellsvar:** «Definer felles sannsynlighet og full betinget formulering for
  Ising-modellen. Utvid til annen ordens nabolag: definer de maksimale cliquene og
  drøft rimelige symmetriantakelser for potensialene.»
- **Kvote:** 28 quiz / 28 flashcards.

#### Kapittel 5.2: MCMC for MRF — Gibbs sampler og Metropolis–Hastings
**id:** `tma4250-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-5-1`

- **Kapitteltype:** teorikapittel (perfekt).
- **Description:** Single-site Gibbs sampler (trekk hver node fra full betinget) og
  Metropolis–Hastings (foreslå → aksepter med $\min(1,\text{forhold})$), med
  aksept-sannsynligheten utledet **effektivt** via Markov-egenskapen (kun lokale
  cliquer), og konvergens vs. mixing.
- **Eksamensbelegg:** Sjanger I (~80 %). Prioritet: perfekt. **Sensorkrav 4:** vis
  at bare lokale cliquer inngår (resten kanselleres) — hele poenget.
- **Forkunnskaper/kryssbok:** kap. 5.1 (VIS full-betinget-uttrykket ferdig oppfrisket).
  `collapsible` **Symbol- og formelliste:** forslagsfordeling $q$; aksept
  $\alpha=\min(1,\frac{\pi(l')q(l|l')}{\pi(l)q(l'|l)})$; lokal energidifferanse.
- **Innholdskontrakt (utledes aktivt):** skriv **pseudokode** for single-site Gibbs
  OG M–H; utled at aksept-forholdet reduseres til lokale cliquer rundt den foreslåtte
  noden; sammenlign to forslagsfordelinger (bytt klasse vs. trekk uniformt) på
  aksept-rate/konvergens/mixing. `definition`-blokker (flashcard-kilde): Gibbs
  sampler, M–H, konvergens, mixing. `collapsible` **Mappelag:** kjøre samplerne i R,
  trace-plott, burn-in.
- **Typiske feil:** F9 (global aksept-sannsynlighet), F14 (konvergens vs. mixing).
- **Modellsvar:** «Skriv pseudokode for en single-site Metropolis–Hastings-algoritme
  for Ising-feltet med to ulike forslagsfordelinger, utled de beregningseffektive
  aksept-sannsynlighetene, og drøft konvergens og mixing.»
- **Kvote:** 26 quiz / 26 flashcards.

#### Kapittel 5.3: MRF-drill (+ bayesiansk diskret bildeanalyse)
**id:** `tma4250-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `tma4250-5-2`

- **Kapitteltype:** drillkapittel (perfekt) + bildeanalyse-tema.
- **Description:** Drill på oppgave 3 (Gibbs↔Markov → cliquer/nabolag → MCMC-
  pseudokode + effektiv aksept) pluss bayesiansk diskret bildeanalyse: posterior
  $[L|d]\propto$ likelihood $\times$ prior, klassifisering/beslutning (~40 % i eldre
  sett).
- **Eksamensbelegg:** Sjanger H/I (drill) + bayesiansk diskret felt (~40 %).
  Prioritet: perfekt (drill).
- **Forkunnskaper/kryssbok:** kap. 5.1, 5.2. `collapsible` **Symbol- og
  formelliste:** posterior $[L|d]$, likelihood $[d|L]$, MRF-prior; MAP/marginal
  klassifisering.
- **Innholdskontrakt:** **Løsningsoppskrift** for oppgave 3 (1) skriv Gibbs → 2)
  utled Markov/full betinget → 3) definer nabolag/cliquer → 4) MCMC-pseudokode med
  lokal aksept → 5) evt. posterior for bildeanalyse). `example` med sensor-
  margnotater. 8–15 drillvarianter. Kald bank-kandidater (uvante nabolag/koblede
  felt r/s).
- **Typiske feil:** F8, F9, F14; regne posterior uten normering/uten prior.
- **Modellsvar:** «For en MRF-prior og en gaussisk likelihood: sett opp posterior
  $[L|d]$, og skriv pseudokoden for en Gibbs sampler som trekker fra den.»
- **Kvote:** 24 quiz / 24 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A Gibbs↔Markov + cliquer/nabolag · 5.B MCMC-
pseudokode + effektiv aksept · 5.C bayesiansk bildeanalyse posterior · 5.D samlet
oppgave-3-prøve på eksamensnivå). «Kan trygt deles — én prøve per økt.»

### Del 6 — GMRF med presisjonsmatrise *(prioritet: KUNNE — ~60 %, sterkt økende)*

#### Kapittel 6.1: GMRF og presisjonsmatrisen $Q$
**id:** `tma4250-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-1-1`

- **Kapitteltype:** teorikapittel (kunne — der emnet har modernisert seg mest).
- **Description:** Gaussisk Markov random field: kravene til en gyldig presisjons-
  matrise $Q$ (symmetrisk, positiv definit), **nullstrukturen $Q_{ij}=0\Leftrightarrow$
  betinget uavhengighet $\Leftrightarrow$ ingen kant i grafen**, og betingede
  uttrykk lest direkte av $Q$.
- **Eksamensbelegg:** Sjanger J (~60 %, sterkt økende, nå fast i mosaikk-oppgaven).
  Prioritet: kunne (men eget kapittel påkrevd — veksten i emnet). **Sensorkrav 7:**
  koble graf ↔ cliquer ↔ nullstruktur som ett hele.
- **Forkunnskaper/kryssbok:** kap. 1.1 (presisjon $Q=\Sigma^{-1}$), 5.1 (Markov/graf).
  `collapsible` **Symbol- og formelliste:** $Q$, $Q_{ii}$, $Q_{ij}$; $E[X_i|\cdot]=
  -\frac{1}{Q_{ii}}\sum_{j\neq i}Q_{ij}x_j$, $\text{Var}[X_i|\cdot]=1/Q_{ii}$.
- **Innholdskontrakt (utledes aktivt):** utled betinget forventning og varians for
  én node direkte fra $Q$; vis $Q_{ij}=0\Leftrightarrow$ betinget uavhengighet;
  krav til $Q$ (symmetri + positiv definitthet). `definition`-blokker (flashcard-
  kilde): GMRF, presisjonsmatrise, nullstruktur↔graf. **Sannhetskontroll:**
  parametersjekk at oppgitt $Q$ faktisk er positiv definit før den brukes.
- **Typiske feil:** F10 (glemme positiv definitthet; tolke $Q_{ij}\neq0$ som
  korrelasjon).
- **Modellsvar:** «$X$ er en GMRF med gitt presisjonsmatrise $Q$. Bestem $E[X_6|X_5=
  x_5]$ og $\text{Var}[X_6|X_5=x_5]$, og les av grafen (betinget uavhengighet) fra
  nullstrukturen i $Q$.»
- **Kvote:** 28 quiz / 30 flashcards.

#### Kapittel 6.2: Intrinsisk GMRF og Besag-modellen
**id:** `tma4250-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `tma4250-6-1`

- **Kapitteltype:** teorikapittel (kjenne — nytt, 2023–24, sannsynlig gjenbruk).
- **Description:** Intrinsisk GMRF / Besag-modell: den uproper (singulære) tettheten,
  strukturmatrisen $R$ (grad på diagonalen, $-1$ for naboer), og hvorfor normeringen
  bruker $\tau^{(n-1)/2}$ (rangdefekt 1).
- **Eksamensbelegg:** Sjanger J-topp (~20 %, nytt). Prioritet: kjenne (topper A).
- **Forkunnskaper/kryssbok:** kap. 6.1. `collapsible` **Symbol- og formelliste:**
  $Q=\tau((1-\lambda)I+\lambda R)$; strukturmatrise $R$; rangdefekt 1; $\tau^{(n-1)/2}$.
- **Innholdskontrakt (utledes aktivt):** forklar den uproper tettheten (én egenverdi
  null → rangdefekt 1) og normeringen $\tau^{(n-1)/2}$; strukturmatrisen $R$;
  grensetilfellene $\lambda\to0$ (uavhengig) og $\lambda\to1$ (ren Besag).
  **Sannhetskontroll:** parametersjekk grensetilfellene $\lambda\to0/1$ numerisk.
  `collapsible` **Mappelag:** intrinsisk GMRF i `INLA`/`R`.
- **Typiske feil:** F11 ($\tau^{n/2}$ i stedet for $\tau^{(n-1)/2}$).
- **Modellsvar:** «$X$ er en GMRF med $Q=\tau((1-\lambda)I+\lambda R)$, $R$ Besag-
  strukturmatrisen. Bestem $E[X_i|\cdot]$ og $\text{Var}[X_i|\cdot]$ som funksjon av
  $\lambda,\tau$, og forklar grensetilfellene $\lambda\to0$ og $\lambda\to1$.»
- **Kvote:** 22 quiz / 24 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A krav til $Q$ + betingede uttrykk · 6.B
nullstruktur ↔ betinget uavhengighet ↔ graf · 6.C intrinsisk GMRF/Besag +
grensetilfeller · 6.D samlet GMRF-prøve på eksamensnivå). «Kan trygt deles — én
prøve per økt.»

### Del 7 — Estimering og mappelaget *(prioritet: KUNNE / MAPPE (30 %))*

#### Kapittel 7.1: Parameterestimering i romlige modeller
**id:** `tma4250-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `tma4250-2-3`

- **Kapitteltype:** teorikapittel (kunne).
- **Description:** ML for GRF-parametre (via multivariat-normal-likelihood),
  momentmetode/minste kvadrater for variogramtilpasning, og hierarkisk/bayesiansk
  oppsett med Laplace-approksimasjon/INLA-idé.
- **Eksamensbelegg:** Parameterestimering (~40 %) + hierarkisk/Laplace/INLA (~33 %,
  moderne). Prioritet: kunne. **«Kun bruk»:** ML-prinsippet (fra tma4245); **«må
  kunne»:** oppsett av GRF-likelihood + variogram-momentmetode.
- **Forkunnskaper/kryssbok:** kap. 2.3, 3.1; [Maksimum likelihood](/tma4245/tma4245-5-2)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** GRF-likelihood
  $L(\theta)=N(r;\mu,\Sigma(\theta))$; momentestimator for variogram; Laplace-
  approksimasjon (kort).
- **Innholdskontrakt:** sett opp GRF-log-likelihood og forklar hva som må maksimeres
  (ikke løs numerisk); momentmetode for variogramparametre; skisser hierarkisk
  modell (prior på parameternivå → MCMC eller Laplace/INLA). `definition`-blokker
  (flashcard-kilde): GRF-likelihood, momentmetode, hierarkisk modell.
- **Typiske feil:** glemme $\log|\Sigma|$-leddet i likelihood; forveksle moment- og
  ML-estimering.
- **Modellsvar:** «Sett opp log-likelihood for en stasjonær GRF observert i $n$
  punkt, og forklar hvilke parametre som estimeres og hvorfor uttrykket ikke har
  lukket løsning.»
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 7.2: Mappelaget — R-arbeidsflyt, rapport og revisjonsrunde
**id:** `tma4250-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `tma4250-7-1`

- **Kapitteltype:** mappekapittel (mappe — bærer 30 % av samlet karakter).
- **Description:** Det praktiske laget: variogramestimering + kriging på reelle data,
  simulering av GRF/punktprosesser/MRF/GMRF med figurtolkning, og rapportskriving
  (struktur, figurtekst, tolkning) med en **revisjonsrunde** (tilbakemelding →
  forbedret sluttrapport, siden kun den reviderte teller).
- **Eksamensbelegg:** Mappe-spesifikt (30 % av samlet karakter — eget bok-lag).
  Prioritet: mappe. TYDELIG merket som mappelag, ikke skriftlig eksamen.
- **Forkunnskaper/kryssbok:** kap. 2.3, 3.3, 4.4, 5.2, 6.2 (samler mappe-verktøyene).
  `collapsible` **Symbol- og formelliste:** R-pakker `geoR`/`gstat`/`spatstat`/`INLA`;
  rapportstruktur (metode → resultat → tolkning → diskusjon).
- **Innholdskontrakt:** R-arbeidsflyt per søyle (empirisk variogram → tilpasning →
  kriging med kart; `spatstat` for punktmønster + K-funksjon; MRF/GMRF-simulering);
  **rapportmal** (seksjoner, figurtekst, tolkning); **revisjonsrunde-eksempel**
  (svak førsteutkast-passasje → tilbakemelding → forbedret versjon). Alt i
  `collapsible` **Mappelag**-blokker. Ingen skriftlig-eksamensoppgaver her; i stedet
  R-øvingsoppgaver med forventet figur/tolkning.
- **Typiske feil:** blande mappe-kode inn i skriftlig-svar (motsatt vei her: dette
  ER mappe-laget); overse revisjonsrunden (kun revidert rapport teller).
- **Modellsvar:** «Gitt et datasett med målinger på uregelmessige lokasjoner: skisser
  R-arbeidsflyten fra empirisk variogram til krigingskart, og skriv en kort
  figurtekst med tolkning slik en revidert mapperapport ville hatt den.»
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A GRF-likelihood-oppsett · 7.B variogram-
momentmetode · 7.C hierarkisk modell + Laplace/INLA-idé · 7.D mappe-arbeidsflyt +
rapport-/revisjonsrunde). «Kan trygt deles — én prøve per økt.»

### Del 8 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 8.1: Sjangerspill — løsningsoppskrifter A–J
**id:** `tma4250-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `tma4250-6-2`

- **Kapitteltype:** sjangerdrill (meta).
- **Description:** Én kompakt løsningsoppskrift per sjanger A–J (én-linjes oppskrift
  → tidsbudsjett → vanligste feil), samlet som studentens eksamens-radar for de tre
  søylene.
- **Eksamensbelegg:** Alle sjangre A–J (metakapittel). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka (kap. 0.1–7.2). `collapsible` **Symbol- og
  formelliste:** samlekort — de romlige nøkkelformlene per søyle.
- **Innholdskontrakt:** for hver sjanger A–J: algoritmisk oppskrift (nummererte
  trinn), hva sensor premierer, typiske feil (#F-koder), tidsbudsjett. Signal-/
  hintbokser ETTER oppgaven (ikke foran). `example` per søyle med margnotater.
  Noen genuint krevende merkede oppgaver.
- **Typiske feil:** samler #F1–F14 som sjekkliste; feil sjangergjenkjenning (utledning
  vs. system vs. skisse vs. pseudokode).
- **Modellsvar:** «Gitt tre oppgaveformuleringer — avgjør sjanger (A–J), skriv
  oppskriftens første to trinn og angi hva sensor ser etter.»
- **Kvote:** 22 quiz / 18 flashcards.

#### Kapittel 8.2: Øvingseksamen 1 (med modellbesvarelse)
**id:** `tma4250-8-2` · **number:** 8.2 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-8-1`

- **Kapitteltype:** øvingseksamen (Kapittel-DNA øvingseksamen).
- **Description:** Komplett skriftlig sett (4 t, kode C) med de tre søylene: oppgave
  1 kontinuerlig (gyldig kovarians → parametertolkning/skisse → kriging-system →
  posterior med målestøy), oppgave 2 event (Poisson-momenter → betinging over celler
  → tynning/ikke-homogen), oppgave 3 mosaikk (Ising Gibbs↔Markov → MCMC-pseudokode →
  GMRF-presisjonsmatrise). Nyskrevne tall/kontekst; modellbesvarelse i `collapsible`
  per oppgave med vekt-/delpoeng-notat `(verifiser)`.
- **Eksamensbelegg:** Speiler temafordelingen i analysen §2 (en «typisk» eksamen).
  Prioritet: perfekt (meta). **Kildeforbehold gjentas** (skann-hull, ingen
  poengfordeling maskinlest).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Symbol- og formelliste:**
  gjenbruk samlekortet.
- **Innholdskontrakt:** tre store oppgaver med deloppgaver a)–d) på egen linje med
  fet merking (README-format); modellbesvarelse skrevet som toppbesvarelse
  (utledning + system + skisse + pseudokode); pausepunkt-markører mellom oppgaver;
  selvdiagnose-sjekkliste (☐) etter fasiten.
- **Typiske feil:** hele #F-registeret i aksjon; tidsstyring over tre søyler.
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 8.3: Øvingseksamen 2 + kald bank (med modellbesvarelse)
**id:** `tma4250-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `tma4250-8-2`

- **Kapitteltype:** øvingseksamen + kald bank (Kapittel-DNA øvingseksamen).
- **Description:** Andre komplette sett med moderne innslag (derivert gaussisk felt,
  Neyman–Scott, intrinsisk/Besag, CSR-test) i rotasjon, PLUSS en merket **kald bank**
  (8–10 oppgaver med uvante vinklinger/kombinasjoner, UTEN hint, momentliste-fasit) i
  eksamenstreningsdelen.
- **Eksamensbelegg:** Speiler 2023–2025-utvidelsen (3–5 oppgaver). Prioritet: perfekt
  (meta). Kildeforbehold gjentas.
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Symbol- og formelliste:**
  samlekortet.
- **Innholdskontrakt:** komplett sett med modellbesvarelse (samme format som 8.2) +
  **kald bank** tydelig merket (ingen hint, kun momentliste-fasit); A-konklusjons-
  variasjon (minst én skarp, veid konklusjon); selvdiagnose etter fasit.
- **Typiske feil:** hele #F-registeret; topptemaene (derivert felt, Besag, Cox) der A
  avgjøres.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 8:** de to øvingseksamenene (8.2, 8.3) ER prøvene for eksamens-
treningen (à ~4 t hver, «kan trygt deles over flere økter — én søyle per økt»);
8.1 leverer sjanger-hurtigprøver A–J.

---

## 4. Kvotesammendrag og summeringskontroll

Per-kapittel-kvotene fra §3, summert per del FØR totalen (gate-tallet er den
reelle summen):

| Del | Kapitler | Quiz (sum) | Flashcards (sum) |
|---|---|---|---|
| 0 | 0.1 | 14 | 14 |
| 1 | 1.1, 1.2 | 40 | 44 |
| 2 | 2.1, 2.2, 2.3 | 74 | 80 |
| 3 | 3.1, 3.2, 3.3 | 78 | 78 |
| 4 | 4.1, 4.2, 4.3, 4.4 | 98 | 98 |
| 5 | 5.1, 5.2, 5.3 | 78 | 78 |
| 6 | 6.1, 6.2 | 50 | 54 |
| 7 | 7.1, 7.2 | 38 | 40 |
| 8 | 8.1, 8.2, 8.3 | 54 | 42 |
| **Sum** | **23 kapitler** | **524** | **528** |

**Kvotegulv-kontroll:** Quiz **524** ≥ 500 ✅ · Flashcards **528** ≥ 500 ✅.

**Prøver:** 8 temadeler med egen prøvekvote (Del 1–8; Del 0 dekkes av
øvingseksamenene). Del 1–7 har hver **4 prøver** (≥4 per temadel ✅); Del 8
leverer de to komplette øvingseksamenene + sjanger-hurtigprøvene A–J.

**Estimert totaltid:** summert `estimatedMinutes` ≈ **1 240 min ≈ 21 timer**
kjernestoff (eksklusiv mappelagets R-øvinger og de fulle 4-timers øvingseksamenene).

---

## 5. Wiring-notat (til byggefasen — ikke del av gaten)

- Metadata: `TextbookCourse`-oppføring i `src/lib/data/` (mønster:
  `COURSE_BI_OKONOMI`), `level: 'Høyskole'`, `sectionNames` fra §2, 23 chapters med
  id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
  linkedChapterId.
- Navigasjon: registrer i `src/app/trinn/hoyere/institusjoner.ts` under **NTNU**
  med visningsnavn **«TMA4250 Romlig statistikk»**.
- `competenceGoals` = Skolesagas EGNE formuleringer (destillert fra analysen),
  ALDRI kopi av NTNUs offisielle læringsutbytte.
- `hoyskole-disclaimer.tsx`: verken jus eller helse → standard uavhengighets-
  deklarasjon holder; ingen heuristikk-utvidelse nødvendig.
- Figurer (kap. 2.2): `public/images/textbook/tma4250/*.svg` → kjør
  `npx tsx scripts/upload-media-storage.ts` etter skriving.
- Kryssbok-lenker til tma4245 er merket `(verifiser lenke)` — sjekk at måls-
  kapitlene finnes før publisering.
